import React from 'react';
import Descripcion from '../components/Descripcion'
import './css/principal.css'

const Principal = () => {
  return (
<<<<<<< HEAD
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
=======
    <div className="container">
      <Descripcion />
    </div>
>>>>>>> d14c1c46a6425a2cebc62e0d50131825548dadc8
  )
}

export default Principal;