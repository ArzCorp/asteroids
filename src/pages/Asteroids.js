import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../components/Card'
import Video from '../components/Video';
import asteroids from '../images/asteroid.svg';
import './css/asteroides.css';

const Asteroids = () => {
  return (
    <div className="asteroids">
      <Video />
      <div className="orbit__asteroids">
        <img className="asteroid1" src={asteroids} alt="asteroide" />
        <img className="asteroid2" src={asteroids} alt="asteroide" />
        <img className="asteroid3" src={asteroids} alt="asteroide" />
        <img className="asteroid4" src={asteroids} alt="asteroide" />
        <Link to="/" className="button-asteroids">Mas asteroides</Link>
      </div>
      <div className="container">
        <div className="content__asteroids">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Asteroids;