import React, { useState } from 'react';
import githubLogo from '../assets/images/GitHub-Mark-120px-plus.png'

function TemplateProjects() {

  const [templateProjects] = useState([
    {
      id: "ucb-note-taker",
      name: "Note Taker",
      category: "templates",
      description: "A web application for users to add, delete and retrieve notes. Your data will be saved to the cloud and you can access it from any browser with internet access.",
      tech: "HTML5 | CSS3 | JavaScript | JSON | Node.js | Express.js | Uniqid.js",
      screenshot: "note-taker.gif",
      alt: "Note Taker",
      link: "https://ucb-note-taker.herokuapp.com/",
      repo: "https://github.com/ahmadelgamal/ucb-note-taker"
    },
    // {
    //   id: "ucb-git-it-done",
    //   name: "Git it Done",
    //   category: "templates",
    //   description: "",
    //   tech: "HTML5 | CSS3 | JavaScript",
    //   screenshot: "git-it-done.png",
    //   alt: "Git it Done",
    //   link: "https://ahmadelgamal.github.io/ucb-git-it-done/",
    //   repo: "https://github.com/ahmadelgamal/ucb-git-it-done"
    // },
    // {
    //   id: "ucb-robot-gladiators",
    //   name: "Robot Gladiators",
    //   category: "templates",
    //   description: "",
    //   tech: "JavaScript",
    //   screenshot: "robot-gladiators.png",
    //   alt: "Robot Gladiators",
    //   link: "https://ahmadelgamal.github.io/ucb-robot-gladiators/",
    //   repo: "https://github.com/ahmadelgamal/ucb-robot-gladiators"
    // },
    // {
    //   id: "ucb-run-buddy",
    //   name: "Run Buddy",
    //   category: "templates",
    //   description: "",
    //   tech: "HTML5 | CSS3",
    //   screenshot: "run-buddy.png",
    //   alt: "Run Buddy",
    //   link: "https://ahmadelgamal.github.io/ucb-run-buddy/",
    //   repo: "https://github.com/ahmadelgamal/ucb-run-buddy"
    // },
    // {
    //   id: "ucb-taskinator",
    //   name: "Taskinator",
    //   category: "templates",
    //   description: "",
    //   tech: "HTML5 | CSS3 | JavaScript",
    //   screenshot: "taskinator.png",
    //   alt: "Taskinator",
    //   link: "https://ahmadelgamal.github.io/ucb-taskinator/",
    //   repo: "https://github.com/ahmadelgamal/ucb-taskinator"
    // },
    // {
    //   id: "ucb-taskmaster-pro",
    //   name: "Taskmaster Pro",
    //   category: "templates",
    //   description: "",
    //   tech: "HTML5 | CSS3 | JavaScript",
    //   screenshot: "taskmaster-pro.png",
    //   alt: "Taskmaster Pro",
    //   link: "https://ahmadelgamal.github.io/ucb-taskmaster-pro/",
    //   repo: "https://github.com/ahmadelgamal/ucb-taskmaster-pro"
    // },
    {
      id: "ucb-weather-dashboard",
      name: "Weather Dashboard",
      category: "templates",
      description: "A weather dashboard that uses the OpenWeather API to retrieve weather data for cities.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "weather-dashboard.png",
      alt: "Weather Dashboard",
      link: "https://ahmadelgamal.github.io/ucb-weather-dashboard/",
      repo: "https://github.com/ahmadelgamal/ucb-weather-dashboard"
    },
    {
      id: "ucb-code-quiz",
      name: "Code Quiz",
      category: "templates",
      description: "A timed code quiz with multiple-choice questions.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "code-quiz.png",
      alt: "Code Quiz",
      link: "https://ahmadelgamal.github.io/ucb-code-quiz/",
      repo: "https://github.com/ahmadelgamal/ucb-code-quiz"
    },
    {
      id: "ucb-password-generator",
      name: "Password Generator",
      category: "templates",
      description: "This app can be used by an employee to generate a random password based on criteria they’ve selected.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "password-generator.png",
      alt: "Password Generator",
      link: "https://ahmadelgamal.github.io/ucb-password-generator/",
      repo: "https://github.com/ahmadelgamal/ucb-password-generator"
    },
    {
      id: "ucb-horiseon",
      name: "Horiseon",
      category: "templates",
      description: "A static website for a web-development company.",
      tech: "HTML5 | CSS3",
      screenshot: "horiseon.png",
      alt: "Horiseon",
      link: "https://ahmadelgamal.github.io/ucb-horiseon/",
      repo: "https://github.com/ahmadelgamal/horiseon/"
    },
  ]);

  return (
    <main>
      <section id="jumbotron">
        <div key="carousel-6" id="carousel-6" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-6.jpg`).default }
            alt={ "Mobile, pencils, notes, eraser and scissors." }
          />
        </div>
      </section>

      <div className="container">
        <h2>Template Projects</h2>
        <section id="practice">
          { templateProjects.map((project) => (

            <article key={ project.id } id={ project.id }>
              <div className={ project.category }>
                <h4>
                  { project.name }
                  <br />
                  <span>
                    { project.tech }
                  </span>
                </h4>

                <a
                  href={ project.link }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={ require(`../assets/images/screenshots/${project.screenshot}`).default }
                    alt={ project.alt }
                  />
                </a>
                <a
                  href={ project.repo }
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="github-logo"
                    src={ githubLogo }
                    alt="GitHub Repo link"
                  />
                </a>
              </div>
              <p>
                { project.description }
              </p>
            </article>

          )) }
        </section>
      </div>
    </main>
  );
};

export default TemplateProjects;