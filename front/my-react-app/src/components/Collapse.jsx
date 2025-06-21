import React, { useState } from 'react';
import './Collapse.css';

function Collapse({ title, children, className = '' }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div
        className={`collapse-header ${isOpen ? 'open' : ''}`}
        onClick={toggleCollapse}
      >
        <h2>{title}</h2>
        {/* L'icône est ajoutée automatiquement avec ::after dans ton CSS */}
      </div>

      <div className={`collapse-content ${isOpen ? 'open' : 'close'}`}>
        {children}
      </div>
    </div>
  );
}

export default Collapse;











