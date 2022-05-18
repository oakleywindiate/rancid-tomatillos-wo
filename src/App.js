import React, { Component } from 'react';
import Movies from './Movies';
import Tile from './Tile';
import DetailTile from './DetailTile';
import Details from './Details'
import './App.css';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls'
import { Route } from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      movieDetails: "",
      error: ""
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
    .then(data => this.setState({ movieData: data.movies }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }

  seeMovieDetails = (id) => {
    fetchMovieDetails(id)
    .then(data => this.setState({ movieDetails: data.movie }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }

  seeAllMovies = () => {
    this.setState({ movieDetails: "" })
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>

          // {!this.state.movieDetails && <Movies movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails} />}
          {this.state.movieDetails && <DetailTile
             movieDetails={this.state.movieDetails} seeAllMovies={this.seeAllMovies} />}
          {this.state.error.length > 0 && <h2 className="error">{this.state.error}</h2>}

          <Route exact path='/' render={ () => <Movies movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails} /> }/>

          <Route exact path="/movies/:id"
          render={({ match }) => { const movieToRender = this.state.movieData.find(movie => movie.id === parseInt(match.params.id));
            console.log(match.params.id);
            return <movieDetails {...movieToRender} />
          }}
          />
          </header>

          </main>
    );
  }
}

export default App;
