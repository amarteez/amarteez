import React from 'react';
import './Skills.css';

const Skills = ({ language }) => {
  const skills = [
    'JavaScript', 'Python', 'React', 'Django', 'PostgreSQL', 'MongoDB'
  ];

  return (
    <div className="skills-section">
      <h2>{language === 'es' ? 'Habilidades Técnicas' : 'Technical Skills'}</h2>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
