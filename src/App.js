import React from 'react';
import './App.css';
import About from './components/About';
import Carousel from './components/Carousel';
// import Contact from './components/Contact';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';

function App() {
  
  document.title = "Ahmad El Gamal - Web-Dev Portfolio";

  return (
    <div>
      <header>
        <Nav />
        <Carousel />
      </header>
      <main>
        <div id="about-header" className="container">
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

        {/* <Contact /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
