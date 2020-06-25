import React from 'react';
import nasaLogo from '../images/nasaLogo.svg'
import iconBrand from '../images/icon-brand.svg'
import './css/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__api">
          <div className="api__logo">
            <img src={nasaLogo} alt="Logo de API" />
          </div>
          <div className="api__description">
            <p className="bold">Recursos proporcionados por: </p>
            <p>API NASA</p>
            <p>IMAGENES NASA</p>
          </div>
        </div>
        <div className="footer__collaborators">
          <div className="icon-brand">
            <img src={iconBrand} alt="Logo brand" />
          </div>
          <div className="collaborators__description">
            <p className="bold">Diseñado frontend por: </p>
            <p>Osvaldo Arzate</p>
            <p>Luis Cabezas</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;