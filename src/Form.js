import React, { Component } from 'react';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls';
import { Route, Link, Redirect } from 'react-router-dom';
import './Form.css';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      movieData: [],
      searchedMoviesResult: [],
      search: ''


    }
  }

  componentDidMount = () => {
    fetchAllMovies()
    .then(data => this.setState({ movieData: data.movies }))
    .catch(err => this.setState({ error: "That search did not match any movies, please try again!"}))
  }

  handleChange = event => {
    console.log("PEAR", event);
     this.setState({ search: event.target.value });
     this.searchForMovie(event.target.value)
   }

   searchForMovie = (value) => {
     console.log("THERE", value);
     const searchResult = this.state.movieData.filter(movie => {
       if(movie.title.includes(value)) {
         // console.log("POPP", movie);
       return movie
       }
     })
     this.setState({ searchedMoviesResult: searchResult })
     this.setState({movieData: []})
   }

   submitIdea = event => {
     console.log("BANANA", event);
  event.preventDefault();
this.searchForMovie(event.target.value)
  // this.props.searchForMovie(value);
  // this.clearInputs();
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

        <button onClick={event => this.submitIdea(event)}>Search</button>

      </form>
    )
  }
}

export default Form;
