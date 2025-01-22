import React from 'react';
import './Accueil.css';
import Banner from './Banner';
import Card from './Card';
import useFetchProperties from '../hooks/useFetchProperties';

function Accueil() {
  const { properties, loading } = useFetchProperties();

  if (loading) {
    return <p>Chargement...</p>;
  }

  return (
    <div className="home">
      <Banner />
      <div className="cards-wrapper">
        <div className="cards-container">
          {properties.map(property => (
            <Card 
              key={property.id} 
              id={property.id} 
              title={property.title}
              image={property.cover} // Utilisation de la photo de couverture
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accueil;







