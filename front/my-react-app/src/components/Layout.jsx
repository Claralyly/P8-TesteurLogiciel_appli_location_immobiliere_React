import React from 'react';
import './Layout.css';
import Header from './Header'; // on importe le header ici
import Kasafooter from '../assets/Kasafooter.png';

function Layout({ children }) {
  return (
    <div>
      <Header /> {/*le header est géré ici */}
      <main className="main-content">
        {children}
      </main>
      <footer className='footer'>
        <div className='footercontenu'>
          <img src={Kasafooter} alt="Kasa" className="card-imagefooter"/>
          <p>© 2020 Kasa. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
