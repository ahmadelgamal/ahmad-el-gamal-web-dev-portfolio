import React from 'react';

function Skills() {
  return (
    <main>
      <section id="carousel">
        <div key="carousel-2" id="carousel-2" className="carouselPics">
          <img
            src={require(`../assets/images/carousel/carousel-2.jpg`).default}
            alt={"Ahmad El Gamal at New Vision International School's construction site in Giza, Egypt."}
          />
        </div>
      </section>

      <h2>Technical Skills</h2>
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
          </ul>
        </div>

        <div className="flex-list">
          <h3>Other Front-End:</h3>
          <ul>
            <li>APIs</li>
            <li>JSON</li>
            <li>AJAX</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Back-End:</h3>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>Handlebars.js</li>
            <li>EJS</li>
            <li>Authentication using Cookies &amp; Express Session</li>
          </ul>
        </div>

        <div className="flex-list">
          <h3>Back-End Database:</h3>
          <ul>
            <li>SQL</li>
            <li>SQLite</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>ORM</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
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

        <div className="flex-list">
          <h3>DevTools:</h3>
          <ul>
            <li>VS Code</li>
            <li>Brackets</li>
            <li>Terminal</li>
            <li>Chrome DevTools</li>
            <li>npm</li>
            <li>Jest</li>
            <li>Heroku</li>
            <li>Insomnia Core</li>
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
      </div>
    </main>
  );
}

export default Skills;