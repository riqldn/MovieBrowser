
import './App.css';
import NavBar from './components/NavBar';
import About from './components/About';
import Hero from './components/Hero';
import Search from './components/Search';
import background from './components/movies.jpg';
import bod from './components/bg.jpg';
import Page404 from './components/Page404';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import MovieView from './components/MovieView';
const Home = () => {
  return (
    <>
      <Hero text="Welcome to our Movie Finder" under="Search for a Movie in the search bar to display results" className="h-100" backdrop={background} />
     
    </>
  )
}

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    console.log(searchText);
    if (searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=ab3742adc54cd1c2e002de91bdf2ba4e&language=en-US&query=${searchText}&page=1&include_adult=false`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          setSearchResults(data.results)
        })
    }
  }, [searchText])


  return (
    <body style={{ backgroundImage: `url(${bod})`, backgroundSize: 'cover', height: '700px' }}>
      <div style={{ backgroundImage: `url(${bod})`, backgroundSize: 'cover' }}>
        <NavBar searchTxt={searchText} setSearchText={setSearchText} results={searchResults} />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/About' component={About}>
            <About />
          </Route>
          <Route path='/Search'>
            <Search keyword={searchText} results={searchResults} />
          </Route>
          <Route path='/movies/:id' component={MovieView} />
          <Route path='/404' component={Page404}/>
          <Redirect to='/404'/>
        </Switch>
      </div>
    </body>
  );
}

export default App;
