import React from 'react';
import './Tile.css';
import { Route, Link } from 'react-router-dom';

const Tile = ({ title, posterPath, averageRating, releaseDate, id, seeMovieDetails, seeAllMovies, clearSearch }) => {
  return (
  <div className="tile">
    <div className="poster-img">
      <img src={posterPath} alt="main-poster-image"/>
    </div>
    <div className="hide-info">
      <h3 className="title-tile">{title}</h3>
      <p className="avg-tile">Average Rating: {averageRating.toFixed(2)}</p>
      <p className="date-tile">Release Date: {releaseDate}</p>
      <Link to={`/movie/${id}`}>
        <button onClick={clearSearch}   className="details-button">Click here   to see details!
        </button>
      </Link>
    </div>
  </div>
  )
}

export default Tile;
