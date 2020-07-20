import React from 'react';
import {Link} from 'react-router-dom';
import Video from '../components/Video';
import asteroids from '../images/asteroid.svg';
import './css/asteroides.css';

const Asteroids = () => {
  return (
    <div className="asteroids">
      <Video />
      <div className="orbit__asteroids">
          <img className="asteroid1 info" src={asteroids} alt="asteroide" />
        <img className="asteroid2" src={asteroids} alt="asteroide" />
        <img className="asteroid3" src={asteroids} alt="asteroide" />
        <img className="asteroid4" src={asteroids} alt="asteroide" />
        <Link to="/galeria" className="button-asteroids">Mas asteroides</Link>
      </div>
    </div>
  );
};

export default Asteroids;