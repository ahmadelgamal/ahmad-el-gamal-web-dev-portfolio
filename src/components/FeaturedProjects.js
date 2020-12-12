import React, { useState } from 'react';

function FeaturedProjects() {

  const [featuredProjects] = useState([
    {
      id: "ucb-my-food-choices",
      name: "My Food Choices",
      category: "Featured",
      description: "My Food Choices is a smart tool that allows hosts to query guests on their dietary restrictions and food favorites, in order to prepare the food that fits them.",
      tech: "HTML5/CSS3/JavaScript/Materialize <br /> Node.js / Express.js / EJS <br /> MySQL / Sequelize / Heroku",
      screenshot: "./src/assets/images/screenshots/mfc-user-update-profile.gif",
      alt: "My Food Choices",
      link: "https://myfoodchoices.herokuapp.com/"
    },
    {
      id: "ucb-bootcamp-travel",
      name: "Bootcamp Travel",
      category: "Featured",
      description: "Users can get quick quotes for airfare &amp; lodging costs, and save &amp; retrieve favorites results.",
      tech: "HTML5/CSS3/JavaScript/jQuery/UIkit<br />Node.js/Express.js",
      screenshot: "../assets/images/screenshots/bootcamp-travel-flights.gif",
      alt: "Bootcamp Travel",
      link: "https://bootcamp-travel.herokuapp.com/"
    },
    {
      id: "lifetime-egypt",
      name: "Lifetime Egypt",
      category: "Featured",
      description: "App displays a catalog of products, with specifications, pictures and prices, for a furniture company.",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "../assets/images/screenshots/lifetime-egypt.png",
      alt: "Lifetime Egypt",
      link: "https://lifetimeegypt.com/"
    }
  ]);

  return (
    <section id="showcase">
      <h3>Featured Projects</h3>
      {featuredProjects.map((project) => (

        <article key={project.id} id={project.id}>
          <div className={project.category}>
            <h4>
              {project.name}<br />
              <span>
                {project.tech}
              </span>
            </h4>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
            ><img
                src={project.screenshot}
                alt={project.alt}
              /></a>
          </div>
          <p>
            {project.description}
          </p>
        </article>

      ))}
    </section>
  );
};

export default FeaturedProjects;