import React, { Component } from 'react';
import Tile from './Tile'
import './Details.css';

class Details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: {}
    }
  }

// handleChange = event => {
//   this.setState({ [event.target.name]: event.target.value });
// }
//
// findMovie = event => {
//     event.preventDefault();
//     const newMovie = {
//       id: Date.now(),
//       ...this.state
//     }
//     this.props.seeMovieDetails();
//   }

  render() {
    return (
      <div className='detailsTile'
      onChange={event => this.handleChange(event)}>
      </div>
    )
  }
}

//   const movieTile = movieData.movies.map(movie => {
//     return (
//       <Tile
//       id={movie.id}
//       key={movie.id}
//       title={movie.title}
//       posterPath={movie.poster_path}
//       averageRating={movie.average_rating}
//       releaseDate={movie.release_date}
//       />
//     )
//   })
//
//   return (
//     <div className='movies-container'>
//     {movieTile}
//     </div>
//   )
// }

export default Details;
