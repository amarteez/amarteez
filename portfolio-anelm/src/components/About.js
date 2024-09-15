import React from 'react';
import './About.css';

const About = ({ language }) => {
  return (
    <div className="about-section">
      <h2>{language === 'es' ? 'Sobre mí' : 'About Me'}</h2>
      <p>
        {language === 'es'
          ? 'Soy un Programador Full Stack con experiencia en JavaScript, Python, Django y React. Me apasiona construir aplicaciones web y resolver problemas complejos.'
          : 'I am a Full Stack Developer with experience in JavaScript, Python, Django, and React. I am passionate about building web applications and solving complex problems.'}
      </p>
    </div>
  );
};

export default About;
