import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import NotFound from './components/NotFound';
import Layout from './components/Layout';
import Header from './components/Header';
import Logement from './components/Logement'; 
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div>
      <Header /> {/* Inclusion du composant Header */}
      <Routes>
        <Route path="/" element={<Layout><Accueil /></Layout>} />
        <Route path="/Apropos" element={<Layout><Apropos /></Layout>} />
        <Route path="/logement/:id" element={<Layout><Logement /></Layout>} /> {/* Route pour les détails des logements */}
        <Route path="*" element={<Layout><NotFound /></Layout>} /> {/* Route pour la page d'erreur */}
      </Routes>
    </div>
  );
}

export default App;






