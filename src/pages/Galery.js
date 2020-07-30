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
          "src": "https://i.ibb.co/KKNncH9/11.png",
          "id": 1
        },
        {
          "src": "https://i.ibb.co/fS88BV8/12.png",
          "id": 2
        },
        {
          "src": "https://i.ibb.co/L6CNhdx/13.png",
          "id": 3
        },
        {
          "src": "https://i.ibb.co/F5czSsB/14.png",
          "id": 4
        },
        {
          "src": "https://i.ibb.co/8sW39KJ/01.png",
          "id": 5
        },
        {
          "src": "https://i.ibb.co/h8JkY4F/02.png",
          "id": 6
        },
        {
          "src": "https://i.ibb.co/dLhCykg/03.png",
          "id": 7
        },
        {
          "src": "https://i.ibb.co/QKJs6DY/04.png",
          "id": 8
        },
        {
          "src": "https://i.ibb.co/gVYkvtq/05.png",
          "id": 9
        },
        {
          "src": "https://i.ibb.co/991vvry/06.png",
          "id": 10
        },
        {
          "src": "https://i.ibb.co/2kdkGQr/07.png",
          "id": 11
        },
        {
          "src": "https://i.ibb.co/xYp2hhq/08.png",
          "id": 12
        },
        {
          "src": "https://i.ibb.co/cNpQRQb/11-2.png",
          "id": 13
        },
        {
          "src": "https://i.ibb.co/Bc5VkxZ/09.png",
          "id": 14
        },
        {
          "src": "https://i.ibb.co/KzQLzx5/10.png",
          "id": 15
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