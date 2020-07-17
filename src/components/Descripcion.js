import React from 'react';
import { Link } from 'react-router-dom';
import './css/Descripcion.css'

const Descripcion = () => {
    return (
      <div className="hero">
        <div className="hero__description">
          <h1>Asteroides cercanos</h1>
          <h2>Conoce sobre los asteroides más<br /> cercanos a la Tierra.</h2>
          <Link className="button" to="/asteroides">Explora</Link>
        </div>
      </div>
    )
}

export default Descripcion;