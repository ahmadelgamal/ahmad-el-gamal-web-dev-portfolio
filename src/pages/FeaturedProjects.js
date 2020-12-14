import React, { useState } from 'react';
import githubLogo from '../assets/images/GitHub-Mark-120px-plus.png'

function FeaturedProjects() {

  const [featuredProjects] = useState([
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
      id: "ahmad-el-gamal-web-dev-portfolio",
      name: "Ahmad El Gamal's Web-Development Portfolio (this website)",
      category: "private",
      description: "",
      tech: "HTML5 | CSS3 | JavaScript | React",
      screenshot: "portfolio.png",
      alt: "Ahmad El Gamal's Portfolio",
      link: "https://ahmadelgamal.com/portfolio",
      repo: "https://github.com/ahmadelgamal/ahmad-el-gamal-web-dev-portfolio"
    },
  ]);

  return (
    <main>
      <section id="jumbotron">
        <div key="carousel-4" id="carousel-4" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-4.jpg`).default }
            alt={ "MacBook with web-dev code on the screen, next to a notebook with a pen on it." }
          />
        </div>
      </section>

      <div className="container">
        <h2>Featured Projects</h2>
        <section id="featured">
          { featuredProjects.map((project) => (

            <article key={ project.id } id={ project.id }>
              <div className={ project.category }>
                <h4>
                  { project.name }<br />
                  <span>
                    { project.tech }
                  </span>
                </h4>

                <a
                  href={ project.link }
                  target="_blank"
                  rel="noreferrer"
                ><img
                    src={ require(`../assets/images/screenshots/${project.screenshot}`).default }
                    alt={ project.alt }
                  /></a>
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

export default FeaturedProjects;