import React, { Fragment } from 'react';
import Video from '../components/Video';
import Card from '../components/Card';
import './css/Galery.css'

const Galeria = () => (
  <Fragment>
    <Video />
      <div className="content__asteroids">
        <Card/>
      </div>
  </Fragment>
);

export default Galeria;