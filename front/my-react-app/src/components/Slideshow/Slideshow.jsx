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
      {/* Chevron gauche */}
      <button className="prev" onClick={prevSlide} aria-label="Previous slide">
        <span>&#10094;</span> {/* Utilisation du caractère Unicode pour le chevron gauche */}
      </button>

      {/* Image actuelle */}
      <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />

      {/* Chevron droit */}
      <button className="next" onClick={nextSlide} aria-label="Next slide">
        <span>&#10095;</span> {/* Utilisation du caractère Unicode pour le chevron droit */}
      </button>

      {/* Indicateur de pagination */}
      <div className="pagination-container">
        <span className="pagination-indicator">
          {currentSlide + 1}/{images.length}
        </span>
      </div>
    </div>
  );
}

export default SlideShow;





