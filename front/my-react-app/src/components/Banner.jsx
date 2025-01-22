import React from 'react';
import './Banner.css';
import image1 from '../assets/image1.jpg';

function Banner() {
  return (
    <div className="banner">
    <img src={image1} alt="image" className="banner-image" />
    <div className="overlay">
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  </div>
  
  );
}

export default Banner;
