import React from 'react';
import logo from '../logo-ahmad.png';

function Nav() {
  return (
    <div id="navbar">
      <span id="navbar-bg"></span>
      <a href="#top" id="logo"><img src={logo} alt="Logo" /></a>

      <nav>
        <label for="burger-toggle" id="burger-icon">
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
          <a href="#work-header">Work</a>
          <a href="#contacts">Contact</a>
          <a
            href="downloads/Ahmad-El-Gamal-Web-Development-resume.pdf?202011021248AM"
            target="_blank"
          >Resume</a
          >
        </div>
      </nav>
    </div>
  );
}

export default Nav;
