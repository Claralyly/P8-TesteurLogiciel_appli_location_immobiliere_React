import React, { useState } from 'react';
import './Collapse.css';

function Collapse({ title, children, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`collapse ${className}`}>
      <div className={`collapse-header ${isOpen ? 'open' : ''}`} onClick={toggleCollapse}>
        <i className={`fas ${isOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
        <h2>{title}</h2>
      </div>
      {isOpen && <div className="collapse-content open">{children}</div>}
    </div>
  );
}

export default Collapse;










