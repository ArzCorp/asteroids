import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

const notAsteroids = () => {
  return (
    <Fragment>
      <div className="center">
        <h2 className="error--text">No encontramos mas asteroides</h2>
        <Link to="/asteroides" className="button button-center">Regresar</Link>
      </div>
    </Fragment>
  );
};

export default notAsteroids;