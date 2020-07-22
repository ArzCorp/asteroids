import React from 'react';
import colision from '../../images/colision.svg'

const Error = (props) => (
  <div className="center">
    <div className="">
      <img className="colision" src={colision} alt="Error" />
    </div>
    <div >
      <h1 className="error--text">{ props.mensaje }</h1>
    </div>
  </div>
);

export default Error;