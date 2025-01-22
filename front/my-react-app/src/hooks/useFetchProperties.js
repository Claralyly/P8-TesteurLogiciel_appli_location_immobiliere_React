import { useState, useEffect } from 'react';

const useFetchProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then(response => response.json())
      .then(data => {
        const propertiesWithCovers = data.map(property => ({
          ...property,
          cover: property.cover || '/images/default.jpg' // Assurez-vous que les chemins sont corrects
        }));
        console.log('Properties with Covers:', propertiesWithCovers);
        setProperties(propertiesWithCovers);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false);
      });
  }, []);

  return { properties, loading };
};

export default useFetchProperties;









