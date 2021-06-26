
import {useParams} from 'react-router-dom';
import Hero from './Hero';
import {useState, useEffect} from 'react';
const MovieView = () =>{

    const [movieDetails, setMovieDetails] = useState({})
    const {id} = useParams();
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        console.log("Make API request") 
        //https://api.themoviedb.org/3/movie/22?api_key=ab3742adc54cd1c2e002de91bdf2ba4e&language=en-US
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=ab3742adc54cd1c2e002de91bdf2ba4e&language=en-US`)
        .then(res => res.json())
        .then(data =>{
            setMovieDetails(data)
            setIsLoading(false);
        })
    }, [id])
    console.log(id);
    function renderload (){
        if(isLoading)
        return<Hero text="...Loading"/>
        if(movieDetails)
        {
            if (movieDetails.poster_path !== 'null') {
                var url = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
              }
              if (movieDetails.poster_path == null) {
                 url = "https://via.placeholder.com/286x429.png?text=image+not+avaliable"
              }
           
            const back = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`;
            return(
                <>
                <Hero text = {movieDetails.original_title} backdrop={back}/>
                <div className="container mt-5">
                <div className="row">
                <div className="col-7">
                    
                    <img src = {url} />
                   
                </div>
                <div className="col-4">
                    <h1>{movieDetails.original_title}</h1>
                     <p className="my-5 lead">
                       <strong>Description: </strong>  {movieDetails.overview}
                    </p>
                </div>
              
                </div>

                </div>
             </>
            )
        }
    }
    return(
    renderload()
    )
}

export default MovieView;