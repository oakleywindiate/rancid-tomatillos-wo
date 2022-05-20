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

  componentDidUpdate = () => {
    console.log("banana")
  }

  render() {
    return (
      <div className='detail-tile'>
        <img src={this.state.movieDetails.poster_path} />
        <h3>{this.state.movieDetails.title}</h3>
        <p>Average Rating: {this.state.movieDetails.average_rating}</p>
        <p>Release Date: {this.state.movieDetails.release_date}</p>
        <p>{this.state.movieDetails.overview}</p>
        <p>Genres:{this.state.movieDetails.genres}</p>
        <p>Budget: ${this.state.movieDetails.budget}</p>
        <p>Revenue: ${this.state.movieDetails.revenue}</p>
        <p>Runtime: {this.state.movieDetails.runtime} minutes</p>
        <p>{this.state.movieDetails.tagline}</p>
        <Link to="/">
          <button className="go-back">Go Back to All Movies
          </button>
        </Link>
      </div>
    )
  }
}

// const DetailTile = (props) => {
//   return (
//     <div className='detail-tile'>
//       <img src={props.movieDetails.poster_path} />
//       <h3>{props.movieDetails.title}</h3>
//       <p>Average Rating: {props.movieDetails.average_rating}</p>
//       <p>Release Date: {props.movieDetails.release_date}</p>
//       <p>{props.movieDetails.overview}</p>
//       <p>Genres:{props.movieDetails.genres}</p>
//       <p>Budget: ${props.movieDetails.budget}</p>
//       <p>Revenue: ${props.movieDetails.revenue}</p>
//       <p>Runtime: {props.movieDetails.runtime} minutes</p>
//       <p>{props.movieDetails.tagline}</p>
//       <button className="go-back" onClick={() => props.seeAllMovies()}>Go Back to All Movies</button>
//     </div>
//   )
// }

export default DetailTile;
