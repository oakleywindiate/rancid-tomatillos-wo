import React from 'react';
import './Tile.css';

const DetailTile = ({ title, posterPath, averageRating, releaseDate, id, seeAllMovies }) => {
  return (
    <div className='detail-tile'>
      <h3>{title}</h3>
      <img src={posterPath} />
      <p>Average Rating: {averageRating}</p>
      <p>Release Date: {releaseDate}</p>
      <button className="go-back" onClick={() => seeAllMovies()}>Go Back to All Movies</button>
    </div>
  )
}

export default DetailTile;
