import React, { useState } from 'react';
import githubLogo from '../assets/images/GitHub-Mark-120px-plus.png'

function Project() {

  const [publicProjects] = useState([
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
      description: "Users can get quick quotes for airfare & lodging costs, and save & retrieve favorites results.",
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
    }, {
      id: "ucb-git-it-done",
      name: "Git it Done",
      category: "templates",
      description: "A web app that uses GitHub's API to search for open source projects with open issues and pull requests.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "git-it-done.gif",
      alt: "Git it Done",
      link: "https://ahmadelgamal.github.io/ucb-git-it-done/",
      repo: "https://github.com/ahmadelgamal/ucb-git-it-done"
    },
    {
      id: "ucb-robot-gladiators",
      name: "Robot Gladiators",
      category: "templates",
      description: "A game where a player's robot can fight another robot until one of them loses.",
      tech: "JavaScript",
      screenshot: "robot-gladiators.png",
      alt: "Robot Gladiators",
      link: "https://ahmadelgamal.github.io/ucb-robot-gladiators/",
      repo: "https://github.com/ahmadelgamal/ucb-robot-gladiators"
    },
    {
      id: "ucb-run-buddy",
      name: "Run Buddy",
      category: "templates",
      description: "A webpage for Run Buddy, a fictitious company that matches runners with personal trainers.",
      tech: "HTML5 | CSS3",
      screenshot: "run-buddy.png",
      alt: "Run Buddy",
      link: "https://ahmadelgamal.github.io/ucb-run-buddy/",
      repo: "https://github.com/ahmadelgamal/ucb-run-buddy"
    },
    {
      id: "ucb-taskinator",
      name: "Taskinator",
      category: "templates",
      description: "A task-tracker application.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "taskinator.png",
      alt: "Taskinator",
      link: "https://ahmadelgamal.github.io/ucb-taskinator/",
      repo: "https://github.com/ahmadelgamal/ucb-taskinator"
    },
    {
      id: "ucb-taskmaster-pro",
      name: "Taskmaster Pro",
      category: "templates",
      description: "A web app for managing tasks.",
      tech: "HTML5 | CSS3 | JavaScript | jQuery | jQuery UI",
      screenshot: "taskmaster-pro.png",
      alt: "Taskmaster Pro",
      link: "https://ahmadelgamal.github.io/ucb-taskmaster-pro/",
      repo: "https://github.com/ahmadelgamal/ucb-taskmaster-pro"
    },
  ]);

  const [privateProjects] = useState([
    {
      id: "lifetime-egypt",
      name: "Lifetime Egypt",
      category: "featured",
      description: "A catalog of products, with specifications, pictures and prices, for a furniture company.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "lifetime-egypt.png",
      alt: "Lifetime Egypt",
      link: "https://lifetimeegypt.com/",
      repo: "https://github.com/ahmadelgamal/lifetime-egypt"
    },
    {
      id: "crescent-trade",
      name: "Crescent Trade",
      category: "private",
      description: "A website for an import/export company.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "crescent-trade.png",
      alt: "Crescent Trade",
      link: "https://crescenttrade.com/",
    },
    {
      id: "elgamal-group",
      name: "El Gamal Group",
      category: "private",
      description: "A website for a real-estate company.",
      tech: "iWeb",
      screenshot: "elgamal-group.png",
      alt: "El Gamal Group",
      link: "http://elgamalgroup.com/",
    },
    {
      id: "al-azhar",
      name: "El Gamal's Azhari Guide",
      category: "private",
      description: "A quick reference for students of Al-Azhar online program.",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "alazhar.png",
      alt: "El Gamal's Azhari Guide",
      link: "https://ahmadelgamal.com/alazhar/",
    },
    {
      id: "ahmadelgamal",
      name: "Ahmad's Personal Page",
      category: "private",
      description: "My personal page!",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "imam-ahmad.png",
      alt: "Imam Ahmad El Gamal",
      link: "https://ahmadelgamal.com/",
    },
  ]);

  return (
    <>
      <section key="hero-portfolio" id="hero-portfolio" className="hero-images">
        <img
          src={ require(`../assets/images/hero/code-macbook.jpg`).default }
          alt={ "Eyeglasses focusing on MacBook screen with code on it." }
        />
      </section>

      <h1>Coding Portfolio</h1>
      <div id="projects" className="container">
        <div className="public-repo">

          <h2 id="public-repo-title">PUBLIC REPO PROJECTS</h2>
          { publicProjects.map((project) => (

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
                  className="project-screenshot"
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

        <hr />

        <div className="private-repo">
          <h2>PRIVATE REPO PROJECTS</h2>
          { privateProjects.map((project) => (

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
                  className="project-screenshot"
                  src={ require(`../assets/images/screenshots/${project.screenshot}`).default }
                  alt={ project.alt }
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
      </div>
    </>
  );
};

export default Project;