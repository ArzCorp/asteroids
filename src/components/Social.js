import React from 'react';
import { Link } from 'react-router-dom';
import './css/Social.css';

const Social = () => {
  return (
    <div className="hero__social">
      <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-twitter"></i></Link>
      <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></Link>
      <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-instagram"></i></Link>
      <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-youtube"></i></Link>
    </div>
  );
};

export default Social;