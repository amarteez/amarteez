import React, { useState } from 'react';
import './App.css'; // Importa el CSS general
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const [language, setLanguage] = useState('es');

  return (
    <div className="App">
      <Header language={language} />

      {/* Asigna los ids a las secciones */}
      <section id="home">
        <Home language={language} setLanguage={setLanguage} />
      </section>

      <section id="about">
        <About language={language} />
      </section>

      <section id="projects">
        <Projects language={language} />
      </section>

      <section id="skills">
        <Skills language={language} />
      </section>

      <section id="contact">
        <Contact language={language} />
      </section>
    </div>
  );
}

export default App;
