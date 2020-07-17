import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card'
import asteroids from '../images/asteroid.svg';
import scroll from '../images/icon-scroll.svg';
import './css/asteroides.css';

const Asteroids = () => {
  return (
    <div className="container">
      <div className="asteroids__float">
        <div className="orbit__asteroids">
          <img className="asteroide1" src={asteroids} alt="asteroide" />
          <img className="asteroide2" src={asteroids} alt="asteroide" />
          <img className="asteroide3" src={asteroids} alt="asteroide" />
          <img className="asteroide" alt="" />
          <img className="asteroide5" src={asteroids} alt="asteroide" />
          <img className="asteroide" alt="" />
          <img className="asteroide7" src={asteroids} alt="asteroide" />
          <img className="asteroide8" src={asteroids} alt="asteroide" />
          <img className="asteroide" src={asteroids} alt="asteroide" />
        </div>
      </div>
      <div className="asteroids__scroll">
        <Link href="black" target="_blanK" rel="noopener noreferrer"><img src={scroll} /></Link>
      </div>
      <div className="content__asteroids">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default Asteroids;