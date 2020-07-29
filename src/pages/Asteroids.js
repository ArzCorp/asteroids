import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Video from '../components/Video';
import asteroids from '../images/asteroid.svg';
import './css/Asteroids.css';

const Asteroids = () => {
  return (
    <Fragment>
      <Video />
      <div className="orbit__asteroids">
        <div className="info">
          <img className="asteroid1" src={asteroids} alt="asteroide" />
          <div className="ol"><p className="text--two">21277 (1996 TO5)</p></div>
        </div>
        <div className="info1">
          <img className="asteroid2" src={asteroids} alt="asteroide" />
          <div className="ol"><p className="text--two">21277 (1996 TO5)</p></div>
        </div>
        <div className="info2">
          <img className="asteroid3" src={asteroids} alt="asteroide" />
          <div className="ol"><p className="text--two">21277 (1996 TO5)</p></div>
        </div>
        <div className="info3">
          <img className="asteroid4" src={asteroids} alt="asteroide" />
          <div className="ol"><p className="text--two">21277 (1996 TO5)</p></div>
        </div>
        <Link to="/carousel" className="button-asteroids">Mas informacion</Link>
      </div>
    </Fragment>
  );
};

export default Asteroids;


