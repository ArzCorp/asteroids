import React from 'react';
import video from '../video/y2mate.com - Planeta Tierra 3D Girando HD_VJIxbhO8WdM_1080p.mp4';
import asteroid from '../images/asteroid.svg';
import './css/Planet.css';

const Planet = () => {
  return (
    <div className="planet">
      <div>
        <video id="video" poster="" autoPlay={true} loop preload="true" >
          <source src={video} type="video/mp4" />
        </video>
        <div className="asteroids">
          <img src={asteroid} alt="asteroide" />
        </div>
        <div className="asteroids">
          <img src={asteroid} alt="asteroide" />
        </div>
        <div className="asteroids">
          <img src={asteroid} alt="asteroide" />
        </div>
        <div className="asteroids">
          <img src={asteroid} alt="asteroide" />
        </div>
        <div className="asteroids">
          <img src={asteroid} alt="asteroide" />
        </div>
      </div>
    </div>
  )
}

export default Planet;