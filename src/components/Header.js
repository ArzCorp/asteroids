import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css';
import Logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="container">
          <Link to="/" className="header__logo ancore"><img className="header--img" src={Logo} alt="Logo" /></Link>
          <div className="navbar">
            <Link className="ancore" to="/asteroides">Asteroides</Link>
            <Link to="/galeria">Galeria</Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;