import React, { Fragment } from 'react';
import Video from '../components/Video';
import './css/Cargando.css'

const Cargando = (props) => (
  <Fragment>
    <Video />
      <div className="center">
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        <h3>Cargando ...</h3>
      </div>
  </Fragment>
);

export default Cargando;