import React from 'react';
import Tile from './Tile'
import './Movies.css';

const Movies = ({movieData}) => {
  const movieTile = movieData.movies.map(movie => {
    return (
      <Tile
      key={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      averageRating={movie.average_rating}
      releaseDate={movie.release_date}
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
