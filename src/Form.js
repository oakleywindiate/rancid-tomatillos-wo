import React, { Component } from 'react';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls';
import { Route, Link, Redirect } from 'react-router-dom';
import './Form.css';
import Movies from './Movies';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      searchedMoviesResult: [],
      search: "",
      error: ""
    }
  }

  componentDidMount = () => {
    fetchAllMovies()
    .then(data => this.setState({ movieData: data.movies }))
    .catch(err => this.setState({ error: "That search did not match any movies, please try again!"}))
  }


  handleChange = event => {
    const value = event.target.value
    const searchResult = this.state.movieData.filter(movie => {
      if (movie.title.toLowerCase().includes(value.toLowerCase())) {
        return movie
      }
    })
    this.setState({ searchedMoviesResult: searchResult, search: value })
   }

   clearSearch = () => {
     this.setState({ searchedMoviesResult: [], search: ""})
   }


  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Search for Movies Here'
          name='search'
          value={this.state.search}
          onChange={event => this.handleChange(event)}
        />
        <Route exact path={"/" | "/search"} render={ () =>
          <Movies
          movieData={this.state.searchedMoviesResult}
          seeMovieDetails={this.seeMovieDetails}
          clearSearch={this.clearSearch}
          />
        }/>
        <p className="error-message"></p>
      </form>
    )
  }
}

export default Form;
