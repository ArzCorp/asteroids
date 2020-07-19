import React from 'react';
import Social from '../components/Social';
import Descripcion from '../components/Descripcion';
import './css/Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__rigth">
          <Descripcion />
        </div>
        <div className="hero__left">
          <Social />
        </div>
      </div>
    </div>
  );
};

export default Hero;