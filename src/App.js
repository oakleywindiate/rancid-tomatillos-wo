import React, { Component } from 'react';
import Movies from './Movies';
import Tile from './Tile';
import DetailTile from './DetailTile';
import Details from './Details'
import './App.css';
import movieData from './movieData'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: movieData,
      movieDetails: ""
    }
  }

seeMovieDetails = (id) => {
  const movieDetails = this.state.movieData.movies.find(movie => movie.id === id)
  this.setState({ movieDetails: movieDetails });
}

seeAllMovies = () => {
  this.setState({ movieData: movieData });
  this.setState({movieDetails: ""})
console.log("HERE");
}

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <p>
          </p>
          {!this.state.movieDetails && <Movies movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails} />}
          {this.state.movieDetails && <Details movieDetails={this.state.movieDetails} seeAllMovies={this.seeAllMovies} />}

        </header>
      </main>
    );
  }
}

export default App;
