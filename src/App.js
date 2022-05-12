import React, { Component } from 'react';
import Movies from './Movies';
import Tile from './Tile';
import './App.css';
import movieData from './movieData'


class App extends Component {
  constructor() {
    super();
    this.state = {
      movieData
    }
  }

  render() {
    return (
      <main className="App">
        <header className="App-header">
          <h1 className="title">Rancid Tomatillos</h1>
          <p>
          </p>
          <Movies movieData={this.state.movieData} />
        </header>
      </main>
    );
  }
}

export default App;
