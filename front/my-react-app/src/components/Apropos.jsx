import React from 'react';
import './Apropos.css';
import imageApropos from '../assets/image2.png';
import Banner from './Banner';
import Collapse from './Collapse';


function Apropos() {
  return (
    <div className="apropos">
      <Banner image={imageApropos} showText={true} />
      <section className="valeur">
        <Collapse title="Fiabilité" className="collapse-apropos">
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes</p>
        </Collapse>
        <Collapse title="Respect" className="collapse-apropos">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </Collapse>
        <Collapse title="Service" className="collapse-apropos">
          <p>La qualité du service est au cœur de notre engagement. Nos équipes restent à votre écoute pour vous garantir une expérience parfaite.</p>
        </Collapse>
        <Collapse title="Sécurité" className="collapse-apropos">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </Collapse>
        
      </section>
    </div>
  );
}

export default Apropos;
