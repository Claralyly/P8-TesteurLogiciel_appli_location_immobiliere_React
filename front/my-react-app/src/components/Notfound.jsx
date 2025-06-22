import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found">
      <section className="error">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </section>
      <p
        className="back-home"
        onClick={() => navigate('/')}
      >
        Retourner sur la page d'accueil
      </p>
    </div>
  );
}

export default NotFound;
