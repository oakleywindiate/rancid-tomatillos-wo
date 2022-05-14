import React from 'react';
import './DetailTile.css';

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
      <button className="go-back" onClick={() => props.movieDetails.seeAllMovies()}>Go Back to All Movies</button>
    </div>
  )
}

export default DetailTile;
