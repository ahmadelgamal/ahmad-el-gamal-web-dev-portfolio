import React from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';

function App() {
  return (
    <rootBody>
      <header>
        <Nav />
        <Carousel />
      </header>
      <main>
        <div>
          <h2>About Ahmad El Gamal</h2>
        </div>
        <About />

        <div id="skills-header" className="container">
          <h2>Technical Skills</h2>
        </div>
        <Skills />

        <div id="work-header" className="container">
          <h2>Work Portfolio</h2>
        </div>
        <Portfolio />

        {/* <Projects /> */}
        {/* <Resume /> */}
        {/* <Contact /> */}
      </main>
      <Footer />
    </rootBody>
  );
}

export default App;
