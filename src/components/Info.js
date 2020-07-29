import React from 'react';
import '../../css/Cargando.css'

const Cargando = (props) => (
  <div className="center--one">
    <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <h3>Cargando ...</h3>
  </div>
);

export default Cargando;