import React from 'react';
import './DetailTile.css';

const DetailTile = ({ title, posterPath, averageRating, releaseDate, id, seeAllMovies }) => {
  return (
    <div className='detail-tile'>
      <img src={posterPath} />
      <h3>{title}</h3>
      <p>Average Rating: {averageRating.toFixed(2)}</p>
      <p>Release Date: {releaseDate}</p>
      <button className="go-back" onClick={() => seeAllMovies()}>Go Back to All Movies</button>
    </div>
  )
}

export default DetailTile;
