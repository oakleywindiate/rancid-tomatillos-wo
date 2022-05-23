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
        <div className="backdrop-section">
          <img className="backdrop" src={this.state.movieDetails.backdrop_path} alt="back-drop-image"/>
        </div>
        <div className="movie-details-section">
          <img className="movie-image" src={this.state.movieDetails.poster_path} alt="main-poster-image"/>
          <div className="movie-information">
            <h3 className="movie-detail-title">{this.state.movieDetails.title}</h3>
            <div className="movie-detail-info">
              <p>Average Rating: {this.state.movieDetails.average_rating, new Intl.NumberFormat('en-US', {maximumFractionDigits: 2 }).format(this.state.movieDetails.average_rating)}</p>
              <p>Release Date: {this.state.movieDetails.release_date}</p>
              <p>{this.state.movieDetails.overview}</p>
              <p>Genres:{this.state.movieDetails.genres}</p>
              <p>Budget: {this.state.movieDetails.budget, new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(this.state.movieDetails.budget)}</p>
              <p>Revenue: {this.state.movieDetails.revenue, new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(this.state.movieDetails.revenue)}</p>
              <p>Runtime: {this.state.movieDetails.runtime} minutes</p>
              <p>{this.state.movieDetails.tagline}</p>
              <div>
              <Link to="/">
                <button className="go-back">Go Back to All Movies
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}



export default DetailTile;
