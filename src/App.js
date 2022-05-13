import React, { Component } from 'react';
import Movies from './Movies';
import Tile from './Tile';
import Details from './Details'
import './App.css';
import movieData from './movieData'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData,
      movieDetails: {}
    }
  }

seeMovieDetails = (id) => {
  const movieDetails = this.state.movieData.movies.filter(movie => movie.id === id)
  this.setState({ movieData: id });
}

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <p>
          </p>
          <Movies movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails} />
          <Details movieDetails={this.state.moveDetails} seeMovieDetails={this.seeMovieDetails} />
        </header>
      </main>
    );
  }
}

export default App;
