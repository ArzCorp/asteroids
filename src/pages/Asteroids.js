<<<<<<< HEAD
import React from 'react';
/* import { Link } from 'react-router-dom'; */
import Card from '../components/Card';
import video from '../video/y2mate.com - Planeta Tierra 3D Girando HD_VJIxbhO8WdM_1080p.mp4';
import scroll from '../images/icon-scroll.svg';
import asteroids from '../images/asteroid.svg';
import './css/asteroids.css';

const Asteroids = () => {
  return (
    <main className="hero__asteroids">
      <div className="container">
        <video id="video" poster="" autoPlay={true} loop preload="true" >
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero__content">
          <img className="asteroide" src={asteroids} alt="asteroide" />
          <Card />
          {/* <div className="hero__description">
            <h1>Asteroides cercanos</h1>
            <h2>Conoce sobre los asteroides más<br /> cercanos a la Tierra.</h2>
            <Link className="button" to="/home">Explora</Link>
          </div> */}
          <div className="hero__social">
            <a href="https://twitter.com/ArzateCompany" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-twitter"></i></a>
            <a href="https://github.com/ArzateCompany/asteroids" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></a>
            <a href="https://www.instagram.com/arzatecompany/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-instagram"></i></a>
            <a href="https://www.youtube.com/user/mejorandolaweb" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-youtube"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><img src={scroll} /></a>
          </div>
        </div>
        <div className="cards__content">
          <Card />
          <Card />
          <Card />
        </div>
        {/* <Card /> */}
      </div>
    </main>
  )
}

=======
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
            <img className="asteroide"  alt="" />
            <img className="asteroide5" src={asteroids} alt="asteroide" />
            <img className="asteroide"  alt="" />
            <img className="asteroide7" src={asteroids} alt="asteroide" />
            <img className="asteroide8" src={asteroids} alt="asteroide" />
            <img className="asteroide" src={asteroids} alt="asteroide" />
          </div>
      </div>
      <div className="asteroids__scroll">
        <Link href="black" target="_blanK" rel="noopener noreferrer"><img src={scroll}/></Link>
      </div>
      <div className="content__asteroids">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

>>>>>>> d14c1c46a6425a2cebc62e0d50131825548dadc8
export default Asteroids;