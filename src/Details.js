import React, { Component } from 'react';
import Tile from './Tile'
import './Details.css';

const Details = ( {movieDetails, movieTile} ) => {
  return (
    <Tile
    id={movieDetails.id}
    key={movieDetails.id}
    title={movieDetails.title}
    posterPath={movieDetails.poster_path}
    averageRating={movieDetails.average_rating}
    releaseDate={movieDetails.release_date}
    />
  )
}

export default Details;
