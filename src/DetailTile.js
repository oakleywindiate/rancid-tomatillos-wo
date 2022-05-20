import React, { Component } from 'react';
import './DetailTile.css';
import { Route, Link, Redirect } from 'react-router-dom';
// import Details from './Details';
import { fetchAllMovies, fetchMovieDetails } from './apiCalls';


class DetailTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {}
    }
  }

  componentDidMount = (id) => {
   this.seeMovieDetails(this.props.idMatch)
  }

  seeMovieDetails = (id) => {
    fetchMovieDetails(id)
    .then(data => this.setState({ movieDetails: data.movie }))
    .catch(err => this.setState({ error: "Something went wrong, please try again!"}))
  }

  render() {
    return (
      <section className='detail-tile'>
        <div class="backdrop-section">
          <img class="backdrop" src={this.state.movieDetails.backdrop_path} />
        </div>
        <div class="movie-details-section">
          <img class="movie-image" src={this.state.movieDetails.poster_path} />
          <div class="movie-information">
            <h3>{this.state.movieDetails.title}</h3>
            <p>Average Rating: {this.state.movieDetails.average_rating}</p>
            <p>Release Date: {this.state.movieDetails.release_date}</p>
            <p>{this.state.movieDetails.overview}</p>
            <p>Genres:{this.state.movieDetails.genres}</p>
            <p>Budget: ${this.state.movieDetails.budget}</p>
            <p>Revenue: ${this.state.movieDetails.revenue}</p>
            <p>Runtime: {this.state.movieDetails.runtime} minutes</p>
            <p>{this.state.movieDetails.tagline}</p>
          </div>
        </div>
        <Link to="/">
          <button className="go-back">Go Back to All Movies
          </button>
        </Link>
      </section>
    );
  }
}



export default DetailTile;
