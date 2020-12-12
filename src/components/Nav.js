import React from 'react';
import logo from '../logo-ahmad.png';
import resume from '../assets/downloads/Ahmad-El-Gamal-Web-Development-resume.pdf?202011021248AM';

const categories = [
  { name: "Featured", description: "" },
  { name: "Live", description: "" },
  { name: "Practice", description: "" },
];

function Nav() {
  
  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <div id="navbar">
      <span id="navbar-bg"></span>
      <a href="#top" id="logo"><img src={logo} alt="Logo" /></a>

      <nav>
        <label htmlFor="burger-toggle" id="burger-icon">
          <div id="toggle-bars">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
        </label>
        <input type="checkbox" id="burger-toggle" />

        <div className="navmenu">
          <a href="#about-header">About</a>
          <a href="#skills-header">Skills</a>

          {/* <a href="#work-header">Work</a> */}

          {categories.map((category) => (
            <a
              key={category.name}
              href={category.name}
            >
              <span onClick={() => categorySelected(category.name)}>
                {category.name}
              </span>
            </a>
          ))}

          <a href="#contacts">Contact</a>
          <a
            href={resume}
            target="_blank"
            rel="noreferrer"
          >Resume</a
          >
        </div>
      </nav>
    </div>
  );
}

export default Nav;
