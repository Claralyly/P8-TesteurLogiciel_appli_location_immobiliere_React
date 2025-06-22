import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../assets/kasa-logo.png';


function Header() {
  return (
    <header className="header">
      <img src={logo} className="logo" alt="Kasa logo" />
      <nav>
        <ul>
          <li><NavLink to="/">Accueil</NavLink></li>
          <li><NavLink to="/apropos">A propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;



