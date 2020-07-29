import React, { Component, Fragment } from "react";
import Video from './Video';
import './css/Carousel.css';

class Carousel extends Component {

  render() {
    return (
      <Fragment>
        <div className="video-fixed">
          <Video />
        </div>
        {this.props.children}
      </Fragment>
    );
  };
};

export default Carousel;