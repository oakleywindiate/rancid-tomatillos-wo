import React, { Component } from 'react';
import Movies from './Movies';
import Tile from './Tile';
import DetailTile from './DetailTile';
import Details from './Details'
import './App.css';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls'
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';



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
    .then(data => this.setState({ movieDetails: data.movie, movieData: [] }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }

  seeAllMovies = () => {
    fetchAllMovies()
    .then(data => this.setState({ movieData: data.movies, movieDetails: "" }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <Switch>
            <Route path="/" render={ () =>
              <Movies
              movieData={this.state.movieData} seeMovieDetails={this.seeMovieDetails}
              />
            }/>
              <Route path="/movie/:id" render={() =>
                <DetailTile
                movieDetails={this.state.movieDetails} seeAllMovies={this.seeAllMovies}
                />
              }/>
            <Route path="/" render={({ match }) => { console.log(match)}} />
          </Switch>
          </header>
        </main>
    );
  }
}

export default App;
