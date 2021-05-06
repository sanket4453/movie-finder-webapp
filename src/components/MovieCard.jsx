import React from 'react'
import {withRouter} from 'react-router-dom'

const MovieCard =({movie, history}) => {

    const getMovieDetails = (imdbID) =>{
        history.push('/details?imdbID='+imdbID);
    }


    return (
        <div className="card" onClick={ () => getMovieDetails(movie.imdbID)}>
            <img src={movie.Poster} alt={movie.Title} className="card-img-top"/>
            <div className="card-body ">
                <h3 className="card-title ">{movie.Title}</h3>
                <p className="card-text">{movie.Year}</p>
            </div>
        </div>
    )
}

export default withRouter(MovieCard)
