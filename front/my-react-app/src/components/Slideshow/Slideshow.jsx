import React, { useState } from 'react';
import './SlideShow.css';

function SlideShow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <button className="prev" onClick={prevSlide} aria-label="Previous slide">
        &#x276E; {/* Caractère Unicode pour la flèche gauche */}
      </button>
      <img src={images[currentSlide]} alt="Slide" />
      <button className="next" onClick={nextSlide} aria-label="Next slide">
        &#x276F; {/* Caractère Unicode pour la flèche droite */}
      </button>
      <div className="pagination-container">
        <span className="pagination-indicator">{currentSlide + 1}/{images.length}</span>
      </div>
    </div>
  );
}

export default SlideShow;








