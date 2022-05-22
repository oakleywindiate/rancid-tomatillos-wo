import React, { Component } from 'react';
import Movies from './Movies';
import Form from './Form';
import Tile from './Tile';
import DetailTile from './DetailTile';
import SearchMovies from './SearchMovies';
import './App.css';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls'
import { BrowserRouter, Route, Link, Switch, NavLink} from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      error: "",
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
    .then(data => this.setState({ movieData: data.movies }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }





  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <Link to="/search">
          <Route exact path={"/search" | "/"} render={ () =>
            <Form
            searchedMoviesResult={this.state.searchedMoviesResult}
            seeMovieDetails={this.seeMovieDetails}
            />
          }/>
          </Link>
        </header>
            <Route exact path="/" render={ () =>
              <Movies
              movieData={this.state.movieData}
              seeMovieDetails={this.seeMovieDetails}
              />
            }/>
            <Route exact path="/movie/:id" render={({ match }) =>
              <DetailTile
              seeMovieDetails={this.seeMovieDetails}
              idMatch={parseInt(match.params.id)}
              />
            }/>
        </main>
    );
  }
}

export default App;
