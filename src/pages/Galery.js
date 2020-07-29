import React, { Component, Fragment } from 'react';
import Video from '../components/Video';
import './css/Galery.css';

class Galery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  };

  componentDidMount() {
    this.setState({
      data: [
        {
          "src": "https://i.ibb.co/L184Fs1/951-Gaspra.jpg",
          "id": 1
        },
        {
          "src": "https://i.ibb.co/sJMqPtp/1327922920-1.jpg",
          "id": 2
        },
        {
          "src": "https://i.ibb.co/8Yb7PF0/Asteroide-2012-DA14.jpg",
          "id": 3
        },
        {
          "src": "https://i.ibb.co/LnzLD2D/asteroide.jpg",
          "id": 4
        },
        {
          "src": "https://i.ibb.co/bs1YgRJ/Asteroide1.jpg",
          "id": 5
        },
        {
          "src": "https://i.ibb.co/gmRd3WK/Didymos.jpg",
          "id": 6
        },
        {
          "src": "https://i.ibb.co/GC0QDRd/jeremy-thomas-E0-AHds-ENm-Dg-unsplash.jpg",
          "id": 7
        },
        {
          "src": "https://i.ibb.co/0CQhtkS/nasa-OLlj17t-UZn-U-unsplash.jpg",
          "id": 8
        },
        {
          "src": "https://i.ibb.co/8M2M4cN/nasa-Q1p7bh3-SHj8-unsplash.jpg",
          "id": 9
        },
        {
          "src": "https://i.ibb.co/LSYGsgt/nasa-r-TZW4f02z-Y8-unsplash.jpg",
          "id": 10
        },
        {
          "src": "https://i.ibb.co/WkBy8Vd/nasa-y-Zyg-ONr-UBe8-unsplash.jpg",
          "id": 11
        },
        {
          "src": "https://i.ibb.co/r7BVpXL/niketh-vellanki-Qk-SN-8-Xc-Xw-Q-unsplash.jpg",
          "id": 12
        },
        {
          "src": "https://i.ibb.co/g6XM3W8/Ori-n.jpg",
          "id": 13
        },
        {
          "src": "https://i.ibb.co/0CQhtkS/nasa-OLlj17t-UZn-U-unsplash.jpg",
          "id": 14
        },
        {
          "src": "https://i.ibb.co/94ZWwQK/photo-153107566548-6577aab321d7.jpg",
          "id": 15
        },
        {
          "src": "https://i.ibb.co/PwTVfFR/Two-Very-Dfferent-Asteroids.jpg",
          "id": 16
        },
        {
          "src": "https://i.ibb.co/0yvdS20/NASA-s-Daw-asteroid-lithograph-of-Eros-and-other-asteroids.jpg",
          "id": 17
        },
        {
          "src": "https://i.ibb.co/DtLfNy9/This-framefrom-a-movie-of-asteroid-2014-JO25-was-generated-using-radar-data-collected-by-NASA-s-230.jpg",
          "id": 18
        },
        {
          "src": "https://i.ibb.co/7YTxwy4/nasa-Cp-HNNRw-Xps-unsplash.jpg",
          "id": 19
        },
        {
          "src": "https://i.ibb.co/584fXqK/Oumuamua.jpg",
          "id": 20
        },

      ]
    });
  };

  getImages = () => (
    this.state.data.map((url) => (
      <div key={url.id} className="galery__image">
        <img src={url.src} alt="imagen" />
      </div>
    ))
  );

  render() {
    return (
      <Fragment>
        <div className="video-fixed" >
          <Video />
        </div>
        <div className="galery">
          {this.getImages()}
        </div>
      </Fragment>
    );
  };
};

export default Galery;