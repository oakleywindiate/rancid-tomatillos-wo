import React from 'react';
import './Tile.css';

const Tile = ({ title, posterPath, averageRating, releaseDate }) => {
  return (
    <div className='tile'>
      <h3>{title}</h3>
      <img src={posterPath} />
      <p>Average Rating: {averageRating}</p>
      <p>Release Date: {releaseDate}</p>
    </div>
  )
}

export default Tile;
