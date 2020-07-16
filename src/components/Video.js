import React from 'react';
import { Link } from 'react-router-dom';
import video from '../video/y2mate.com - Planeta Tierra 3D Girando HD_VJIxbhO8WdM_1080p.mp4';
import './css/video.css';

const Video = () => {
  return (
    <div className="hero_container">
      <div className="container">
        <video id="video" poster="" autoPlay={true} loop preload="true" >
          <source src={video} type="video/mp4" />
        </video>
        <div className="hero__left">
          <div className="hero__social">
            <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-twitter"></i></Link>
            <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-github"></i></Link>
            <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-instagram"></i></Link>
            <Link to="/" target="_blank" rel="noopener noreferrer"><i className="icon fab fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video;