import React from 'react';
import '../../css/Cargando.css'

const Cargando = () => (
  <div className="center">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <h3 className="margin-top-bottom">Cargando ...</h3>
  </div>
);

export default Cargando;