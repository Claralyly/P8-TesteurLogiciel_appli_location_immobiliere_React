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
          <p>Les annonces postées sur Kasa garantissent une fiabilité totale...</p>
        </Collapse>
        <Collapse title="Respect" className="collapse-apropos">
          <p>La bienveillance fait partie des valeurs fondatrices de Kasa...</p>
        </Collapse>
        <Collapse title="Service" className="collapse-apropos">
          <p>La qualité du service est au cœur de notre engagement...</p>
        </Collapse>
        <Collapse title="Sécurité" className="collapse-apropos">
          <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que...</p>
        </Collapse>
      </section>
    </div>
  );
}

export default Apropos;
