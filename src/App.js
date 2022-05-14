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
      movieDetails: 0
    }
  }

seeMovieDetails = (id) => {
  const movieDetails = this.state.movieData.movies.find(movie => movie.id === id)

  console.log(movieDetails)

  this.setState({ movieDetails: movieDetails });
}

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <p>
          </p>
          {!this.state.movieDetails && <Movies movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails} />}
          <Details movieDetails={this.state.movieDetails} seeMovieDetails={this.seeMovieDetails} />
        </header>
      </main>
    );
  }
}

export default App;
