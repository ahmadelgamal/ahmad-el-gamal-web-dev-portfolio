import React, { useState } from 'react';

function FeaturedProjects() {

  const [featuredProjects] = useState([
    {
      id: "ucb-my-food-choices",
      name: "My Food Choices",
      category: "Featured",
      description: "My Food Choices is a smart tool that allows hosts to query guests on their dietary restrictions and food favorites, in order to prepare the food that fits them.",
      tech: "HTML5/CSS3/JavaScript/Materialize <br /> Node.js / Express.js / EJS <br /> MySQL / Sequelize / Heroku",
      screenshot: "mfc-user-update-profile.gif",
      alt: "My Food Choices",
      link: "https://myfoodchoices.herokuapp.com/"
    },
    {
      id: "ucb-bootcamp-travel",
      name: "Bootcamp Travel",
      category: "Featured",
      description: "Users can get quick quotes for airfare &amp; lodging costs, and save &amp; retrieve favorites results.",
      tech: "HTML5/CSS3/JavaScript/jQuery/UIkit<br />Node.js/Express.js",
      screenshot: "bootcamp-travel-flights.gif",
      alt: "Bootcamp Travel",
      link: "https://bootcamp-travel.herokuapp.com/"
    },
    {
      id: "lifetime-egypt",
      name: "Lifetime Egypt",
      category: "Featured",
      description: "App displays a catalog of products, with specifications, pictures and prices, for a furniture company.",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "lifetime-egypt.png",
      alt: "Lifetime Egypt",
      link: "https://lifetimeegypt.com/"
    }
  ]);

  return (
    <main>
      <section id="carousel">
        <div key="carousel-4" id="carousel-4" className="carouselPics">
          <img
            src={require(`../assets/images/carousel/carousel-4.jpg`).default}
            alt={"MacBook with web-dev code on the screen, next to a notebook with a pen on it."}
          />
        </div>
      </section>

      <div className="container">
        <h2>Featured Projects</h2>
        <section id="showcase">
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
                    src={require(`../assets/images/screenshots/${project.screenshot}`).default}
                    alt={project.alt}
                    width="100%"
                  /></a>
              </div>
              <p>
                {project.description}
              </p>
            </article>

          ))}
        </section>
      </div>
    </main>
  );
};

export default FeaturedProjects;