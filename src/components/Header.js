import React from 'react';
import './style/Header.css';
import Logo from '../images/logo.svg';
import iconFav from '../images/icon-fav.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header__container">
        <img src={Logo} className="header__logo" alt="Logo" />
        <div className="navbar">
          <a className="header__ancore" href="/">Asteroides</a>
          <a className="header__ancore" href="/">Galeria</a>
          <a className="header__ancore" href="/"><img className="icon-fav" src={iconFav} /></a>
        </div>
      </header>
    )
  }
}

export default Header;