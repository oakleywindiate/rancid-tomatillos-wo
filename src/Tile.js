import React from 'react';
import './Tile.css';

const Tile = ({ title }) => {
  return (
    <div className='tile'>
      <h3>{title}</h3>
    </div>
  )
}

export default Tile;
