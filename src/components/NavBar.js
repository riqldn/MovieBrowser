import { Link, useHistory } from 'react-router-dom';
import Search from './Search';




const NavBar = ({ searchTxt, setSearchText, results }) => {
  const history = useHistory();
  const updateSearchText = (e) => {
    history.push('/search')
    setSearchText(e.target.value)

  }
  function clicker() {

    return (
      <>

        <Search keyword={searchTxt} results={results} />
      </>
    )
  }
  return (<nav className="navbar bg-transparent navbar-expand-lg navbar-light ">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">MovieFinder</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/About">About</Link>
          </li>

        </ul>
        <form className="d-flex">
          <input className="form-control me-2 " type="search" placeholder="Search" value={searchTxt} onChange={updateSearchText} aria-label="Search" />
          <button className="btn btn-outline-success text-light" onClick={() => clicker()} type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>)
}

export default NavBar;