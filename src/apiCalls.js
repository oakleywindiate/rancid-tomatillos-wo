import React, { Component } from 'react';

const fetchAllMovies = () => {
  return fetch('https://rancid-tomatillos.herokuapp.com/api/v2/movies')
  .then(res =>  {
    if (!res.ok) {
      throw new Error("Something went wrong.")
    }
    return res.json();
  })
}

const fetchMovieDetails = (id) => {
  return fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}`)
  .then(res =>  {
    if (!res.ok) {
      throw new Error("Something went wrong.")
    }
    return res.json();
  })
}

export {fetchAllMovies, fetchMovieDetails};
