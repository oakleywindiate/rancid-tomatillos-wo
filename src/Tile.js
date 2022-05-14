import React from 'react';
import './Tile.css';

const Tile = ({ title, posterPath, averageRating, releaseDate, id, seeMovieDetails, seeAllMovies }) => {
  return (
    <div className='tile'>
      <img src={posterPath} />
      <h3>{title}</h3>
      <p>Average Rating: {averageRating.toFixed(2)}</p>
      <p>Release Date: {releaseDate}</p>
      <button className="details-button" onClick={() => seeMovieDetails(id)}>Click here to see details!</button>
    </div>
  )
}

export default Tile;
