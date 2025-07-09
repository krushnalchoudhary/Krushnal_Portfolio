import React, { useState, useEffect } from 'react';

import portfolioLogo from '../../assets/portfolio_logo.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);

  useEffect(() => {
    const handleScroll = () => setMenuOpen(false);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fade-in">
      <a href="#home" className="logo">
        <img src={portfolioLogo} alt="Portfolio Logo" className="logo-image" />
        <span className="logo-text">Krushnal Choudhary</span>
      </a>

      <button
        id="menu"
        className={`menu-toggle ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle Menu"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <nav className={`navbar ${menuOpen ? 'nav-toggle slide-in' : ''}`}>
        <ul>
          {['home', 'about', 'skills', 'education', 'projects', 'experience', 'contact'].map((item) => (
            <li key={item}>
              <a href={`#${item}`} onClick={() => setMenuOpen(false)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
