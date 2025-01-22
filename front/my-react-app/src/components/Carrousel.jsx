import React, { useState } from 'react';
import './Carrousel.css';

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (images.length === 1) {
    return <img src={images[0]} alt="Unique" className="carrousel-image" />;
  }

  return (
    <div className="carrousel">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carrousel-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Carrousel;
