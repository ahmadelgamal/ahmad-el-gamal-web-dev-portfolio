import React from 'react';
import resume from '../assets/downloads/Ahmad-El-Gamal-Web-Development-resume.pdf?202012151122PM';

function Resume() {
  return (
    <>
      <section id="jumbotron">
        <div key="carousel-2" id="carousel-2" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-2.jpg`).default }
            alt={ "Ahmad El Gamal at New Vision International School's construction site in Giza, Egypt." }
          />
        </div>
      </section>

      <h1>Technical Skills</h1>

      <h3 id="download-header">
        <a
          id="resume-link"
          href={ resume }
          // target="_blank"
          // rel="noreferrer"
          download
        >
          To download resume, click here
      </a>
      </h3>

      <div id="skills" className="container">
        <div className="flex-list">
          <h3>Front-End Languages:</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Front-End Libraries:</h3>
          <ul>
            <li>jQuery</li>
            <li>jQuery UI</li>
            <li>Moment.js</li>
            <li>React</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Front-End Frameworks:</h3>
          <ul>
            <li>Bootstrap 4</li>
            <li>UIkit</li>
            <li>Materialize</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Other Front-End:</h3>
          <ul>
            <li>JSON</li>
            <li>APIs</li>
            <li>AJAX</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Back-End:</h3>
          <ul>
            <li>Node.js &amp; npm</li>
            <li>Express.js</li>
            <li>Handlebars.js</li>
            <li>EJS</li>
            <li>Authentication</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Database:</h3>
          <ul>
            <li>SQL, SQLite &amp; MySQL</li>
            <li>Sequelize</li>
            <li>ORM</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Techniques:</h3>
          <ul>
            <li>Functional Programming</li>
            <li>Object-Oriented Programming (OOP)</li>
            <li>Test-Driven Development (TDD)</li>
            <li>Object Relational Mapping (ORM)</li>
            <li>Model-View-Controller (MVC) Paradigm</li>
            <li>Progressive Web Applications (PWA)</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>DevTools:</h3>
          <ul>
            <li>VS Code &amp; Brackets</li>
            <li>Terminal &amp; iTerm2</li>
            <li>Chrome DevTools</li>
            <li>Jest</li>
            <li>Heroku</li>
            <li>Insomnia Core</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Source Control:</h3>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>GitLab</li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default Resume;