import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/kasa-logo.png';

function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Kasa logo" />
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/apropos">A propos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



