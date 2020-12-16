import React, { useState } from 'react';
import githubLogo from '../assets/images/GitHub-Mark-120px-plus.png'

function Project() {

  const [projects] = useState([
    {
      id: "ucb-my-food-choices",
      name: "My Food Choices",
      category: "featured",
      description: "My Food Choices is a smart tool that allows hosts to query guests on their dietary restrictions and food favorites, in order to prepare the food that fits them.",
      tech: "HTML5 | CSS3 | JavaScript | Materialize | Node.js | Express.js | EJS | MySQL | Sequelize | Heroku",
      screenshot: "mfc-user-update-profile.gif",
      alt: "My Food Choices",
      link: "https://myfoodchoices.herokuapp.com/",
      repo: "https://github.com/ahmadelgamal/ucb-my-food-choices"
    },
    {
      id: "ucb-bootcamp-travel",
      name: "Bootcamp Travel",
      category: "featured",
      description: "Users can get quick quotes for airfare &amp; lodging costs, and save &amp; retrieve favorites results.",
      tech: "HTML5 | CSS3 | JavaScript | jQuery | UIkit | Node.js | Express.js",
      screenshot: "bootcamp-travel-flights.gif",
      alt: "Bootcamp Travel",
      link: "https://bootcamp-travel.herokuapp.com/",
      repo: "https://github.com/ahmadelgamal/BootCamp-Travel"
    },
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
    {
      id: "readme-gen-pro",
      name: "Readme Gen Pro",
      category: "featured",
      description: "A command-line application that dynamically generates a professional README.md file from a user's input using the inquirer.js package.",
      tech: "JavaScript | Node.js | Inquirer.js | Markdown",
      screenshot: "readme-gen-pro.gif",
      alt: "Readme Gen Pro",
      link: "https://github.com/ahmadelgamal/README-Gen-Pro",
      repo: "https://github.com/ahmadelgamal/README-Gen-Pro"
    },
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
    {
      id: "ahmad-el-gamal-web-dev-portfolio",
      name: "My Web‑Dev Portfolio",
      category: "private",
      description: "This website!",
      tech: "HTML5 | CSS3 | JavaScript | React",
      screenshot: "portfolio.gif",
      alt: "Ahmad El Gamal's Portfolio",
      link: "https://ahmadelgamal.github.io/",
      repo: "https://github.com/ahmadelgamal/ahmadelgamal.github.io"
    },
  ]);

  return (
    <>
      <section id="jumbotron">
        <div key="carousel-5" id="carousel-5" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-5.jpg`).default }
            alt={ "Mobile, pencils, notes, eraser and scissors." }
          />
        </div>
      </section>

      <h1>Web&#8209;Development Portfolio</h1>
      <div id="projects" className="container">
        { projects.map((project) => (

          <article key={ project.id } id={ project.id } className={ project.category }>
            <h3>
              { project.name }
            </h3>

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
            <h5>
              { project.tech }
            </h5>
            <p>
              { project.description }
            </p>
          </article>

        )) }
      </div>
    </>
  );
};

export default Project;