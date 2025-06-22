import React from 'react';
import './Banner.css';

function Banner({ image, showText = true }) {
  return (
    <div className="banner">
      <img src={image} alt="bannière" className="banner-image" />
      <div className="overlay">
        {showText && <h1>Chez vous, partout et ailleurs</h1>}
      </div>
    </div>
  );
}

export default Banner;
