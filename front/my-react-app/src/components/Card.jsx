import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ id, title, image }) {
  console.log(`Rendering Card - ID: ${id}, Title: ${title}, Image URL: ${image}`); // Vérification en console

  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={image} alt={`Image de ${title}`} className="card-image" />
        <h2>{title}</h2>
      </div>
    </Link>
  );
}

export default Card;









