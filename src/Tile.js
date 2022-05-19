import React from 'react';
import './Tile.css';
import { Route, Link } from 'react-router-dom';

const Tile = ({ title, posterPath, averageRating, releaseDate, id, seeMovieDetails, seeAllMovies }) => {
  return (
    <div className='tile'>
      <img src={posterPath} />
      <h3>{title}</h3>
      <p>Average Rating: {averageRating.toFixed(2)}</p>
      <p>Release Date: {releaseDate}</p>
      <Link to={`/movie/${id}`}>
        <button className="details-button">Click here to see details!
        </button>
      </Link>
    </div>
  )
}

export default Tile;
