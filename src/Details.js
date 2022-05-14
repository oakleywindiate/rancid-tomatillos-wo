import React, { Component } from 'react';
import DetailTile from './DetailTile'
import './Details.css';

const Details = ( {movieDetails, seeAllMovies} ) => {
  return (
    <DetailTile
    id={movieDetails.id}
    key={movieDetails.id}
    title={movieDetails.title}
    posterPath={movieDetails.poster_path}
    averageRating={movieDetails.average_rating}
    releaseDate={movieDetails.release_date}
    seeAllMovies={seeAllMovies}
    />
  )
}

export default Details;
