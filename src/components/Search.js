import React from 'react';
import Hero from './Hero';
import background from './movies.jpg';
import { Link } from 'react-router-dom';
import noresults from './empty.svg'
const Search = ({ keyword, results }) => {
  const title = `Results for: ${keyword}`;
  const Moviecard = ({ movie }) => {
    if (movie.poster_path !== 'null') {
      var string = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    }
    if (movie.poster_path == null) {
      string = "https://via.placeholder.com/286x429.png?text=image+not+avaliable"
    }
    const poster = `/movies/${movie.id}`
    return (
      <div className="col-lg-5">
        <div className="card bg-transparent text-dark" style={{ width: "18rem" }}>

          <img src={string} className="card-img-top" alt="..."></img>

          <div className="card-body border-light">
            <h5 className="card-title">{movie.original_title}</h5>
            <p className="card-text"></p>
            <Link to={poster} className="btn btn-outline-dark">More details</Link >
          </div>
        </div>
      </div>
    )

  };
  //https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg 
  const resultshtml = results.map((obj, i) => {
    console.log(i);
    return (<>

      <Moviecard movie={obj} key={i} className="mb-2" />

    </>
    )
  })

  const res = () => {
    if (!keyword) {
      return
    }
    if (results && results.length !== 0) {
      return resultshtml
    }
    if (results.length === 0 && keyword) {

      return (<>

        <img src={noresults} style={{ width: "50%", height: "auto", margin: "0 auto" }}></img>
        <span className="p-lead fs-1 text-center">Results not found</span>
      </>
      )
    }

  }
  return (
    <>
      <Hero text={title} backdrop={background} />
      <div className="container">
        <div className="row justify-content-between align-items-between">
          {res()}
        </div>
      </div>
    </>

  )
}

export default Search;