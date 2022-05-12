import React from 'react';
import Tile from './Tile'
import './Movies.css';

const Movies = ({movieData}) => {
  const movieTile = movieData.movies.map(movie => {
    return (
      <Tile
      title={movie.title}
      key={movie.id}
      />
    )
  })

  return (
    <div className='movies-container'>
    {movieTile}
    </div>
  )
}

export default Movies;
