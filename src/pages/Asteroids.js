import React from 'react';
import Card from '../components/Card'
import './css/asteroides.css';

const Asteroids = () => {
  return (
    <div className="container">
      <div className="content__asteroids">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Asteroids;