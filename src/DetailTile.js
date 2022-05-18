import React from 'react';
import './DetailTile.css';
import { Route, Link, Redirect } from 'react-router-dom';

const DetailTile = (props) => {
  return (
    <div className='detail-tile'>
      <img src={props.movieDetails.poster_path} />
      <h3>{props.movieDetails.title}</h3>
      <p>Average Rating: {props.movieDetails.average_rating}</p>
      <p>Release Date: {props.movieDetails.release_date}</p>
      <p>{props.movieDetails.overview}</p>
      <p>Genres:{props.movieDetails.genres}</p>
      <p>Budget: ${props.movieDetails.budget}</p>
      <p>Revenue: ${props.movieDetails.revenue}</p>
      <p>Runtime: {props.movieDetails.runtime} minutes</p>
      <p>{props.movieDetails.tagline}</p>
      <Link to="/">
        <button className="go-back" onClick={() => props.seeAllMovies()}>Go Back to All Movies
        </button>
      </Link>
    </div>
  )
}

export default DetailTile;
