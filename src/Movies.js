import React from 'react';
import Tile from './Tile'
import './Movies.css';

const Movies = ({ movieData, seeMovieDetails, clearSearch }) => {
  const movieTile = movieData.map(movie => {
    return (
      <Tile
      id={movie.id}
      key={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      averageRating={movie.average_rating}
      releaseDate={movie.release_date}
      seeMovieDetails={seeMovieDetails}
      clearSearch={clearSearch}
      />
    )
  })

  return (
    <div className='movies-container'>
    {movieTile}
    </div>
  )
};

export default Movies;
