import React from 'react';
import Tile from './Tile';
import Form from './Form'

const SearchMovies = ({ searchedMoviesResult, seeMovieDetails }) => {
  const movieTile = searchedMoviesResult.map(movie => {
    return (
      <Tile
      id={movie.id}
      key={movie.id}
      title={movie.title}
      posterPath={movie.poster_path}
      averageRating={movie.average_rating}
      releaseDate={movie.release_date}
      seeMovieDetails={seeMovieDetails}
      />
    )
  })

  return (
    <div className='movies-search'>
    {movieTile}
    </div>
  )
}


export default SearchMovies
