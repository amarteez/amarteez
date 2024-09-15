// src/components/Home.js
import React from 'react';
import './Home.css';

const Home = ({ language, setLanguage }) => {
  return (
    <div className="home-section">
      <h1>Anel Martéz</h1>
      <h2>Programador Full Stack Junior</h2>
      <p>{language === 'es' ? 'Especializado en Desarrollo Web con React y Django' : 'Specialized in Web Development with React and Django'}</p>
      <div className="buttons">
        <a href="/cv-espanol.pdf" download="Anel_Marlez_CV_ES" className="btn">Descargar CV (Español)</a>
        <a href="/cv-english.pdf" download="Anel_Marlez_CV_EN" className="btn">Download CV (English)</a>
        <button onClick={() => setLanguage(language === 'es' ? 'en' : 'es')} className="btn language-btn">
          {language === 'es' ? 'English' : 'Español'}
        </button>
      </div>
    </div>
  );
}

export default Home;
