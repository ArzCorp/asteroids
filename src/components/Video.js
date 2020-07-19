import React from 'react';
import video from '../video/y2mate.com - Planeta Tierra 3D Girando HD_VJIxbhO8WdM_1080p.mp4';

const Video = () => {
  return (
    <div className="video">
      <video id="video" poster="" autoPlay={true} loop preload="true" >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Video;