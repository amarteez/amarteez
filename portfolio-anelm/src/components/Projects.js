import React from 'react';
import './Projects.css';

const Projects = ({ language }) => {
  const projects = [
    {
      name: language === 'es' ? 'Plataforma de E-commerce' : 'E-commerce Platform',
      description: language === 'es'
        ? 'Una tienda en línea con React y Django.'
        : 'An online store built with React and Django.'
    },
    {
      name: language === 'es' ? 'Gestión de Notas' : 'Notes Management',
      description: language === 'es'
        ? 'Una aplicación para gestionar notas con búsqueda avanzada.'
        : 'A notes management app with advanced search features.'
    }
  ];

  return (
    <div className="projects-section">
      <h2>{language === 'es' ? 'Proyectos' : 'Projects'}</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
