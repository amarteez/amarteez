import React from 'react';
import './Header.css';

const Header = ({ language }) => {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li>
            <a href="#home">{language === 'es' ? 'Inicio' : 'Home'}</a>
          </li>
          <li>
            <a href="#projects">{language === 'es' ? 'Proyectos' : 'Projects'}</a>
          </li>
          <li>
            <a href="#contact">{language === 'es' ? 'Contacto' : 'Contact'}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
