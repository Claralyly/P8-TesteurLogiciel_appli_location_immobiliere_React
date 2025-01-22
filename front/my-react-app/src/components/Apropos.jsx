import React from 'react';
import './Apropos.css';
import image1 from '../assets/image2.png';
import Collapse from './Collapse'; 

function Apropos() {
  return (
    <div className="apropos">
      <div className="banner2">
        <img src={image1} alt="image" className="card-image" />
        <div className="overlay">
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
      </div>
      <section className="valeur">
        <Collapse title="Fiabilité" className="collapse-apropos">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logement, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </Collapse>
        <Collapse title="Respect" className="collapse-apropos">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service" className="collapse-apropos">
          <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
        </Collapse>
        <Collapse title="Sécurité" className="collapse-apropos">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
      </section>
    </div>
  );
}

export default Apropos;

