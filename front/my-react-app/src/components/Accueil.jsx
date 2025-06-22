import React from 'react';
import './Accueil.css';
import Banner from './Banner';
import Card from './Card';
import useFetchProperties from '../hooks/useFetchProperties';
import imageAccueil from '../assets/image1.jpg';

function Accueil() {
  const { properties, loading } = useFetchProperties();

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="home">
      <Banner image={imageAccueil} showText={true} />
      <div className="cards-wrapper">
        <div className="cards-container">
          {properties.map(property => (
            <Card 
              key={property.id} 
              id={property.id} 
              title={property.title}
              image={property.cover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accueil;








