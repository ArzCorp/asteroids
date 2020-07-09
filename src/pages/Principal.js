import React from 'react';
import { Link } from 'react-router-dom';
import video from '../video/y2mate.com - Planeta Tierra 3D Girando HD_VJIxbhO8WdM_1080p.mp4';
import './css/principal.css';

const Principal = () => {
  return (
    <main className="hero">
      <div className="container">
        <video className="video" poster="" autoPlay={true} loop preload="true" >
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero__content">
          <div className="hero__description">
            <h1>Asteroides cercanos</h1>
            <h2>Conoce sobre los asteroides más<br /> cercanos a la Tierra.</h2>
            <Link className="button" to="/home">Explora</Link>
          </div>
          <div className="hero__social">
            <a href="https://twitter.com/ArzateCompany" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-twitter"></i></a>
            <a href="https://github.com/ArzateCompany/asteroids" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></a>
            <a href="https://www.instagram.com/arzatecompany/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/user/mejorandolaweb" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Principal;