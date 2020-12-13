import React, { useState } from 'react';

function LiveProjects() {

  const [liveProjects] = useState([
    {
      id: "crescent-trade",
      name: "Crescent Trade",
      category: "Live",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "../assets/images/screenshots/crescent-trade.png",
      alt: "Crescent Trade",
      link: "https://crescenttrade.com/"
    },
    {
      id: "elgamal-group",
      name: "El Gamal Group",
      category: "Live",
      description: "",
      tech: "iWeb",
      screenshot: "../assets/images/screenshots/elgamal-group.png",
      alt: "El Gamal Group",
      link: "http://elgamalgroup.com/"
    },
    {
      id: "al-azhar",
      name: "El Gamal's Azhari Guide",
      category: "Live",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "../assets/images/screenshots/alazhar.png",
      alt: "El Gamal's Azhari Guide",
      link: "https://ahmadelgamal.com/alazhar/"
    },
    {
      id: "ahmadelgamal",
      name: "Ahmad's Personal Page",
      category: "Live",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "../assets/images/screenshots/imam-ahmad.png",
      alt: "Imam Ahmad El Gamal",
      link: "https://ahmadelgamal.com/"
    },
    {
      id: "ahmad-el-gamal-web-dev-portfolio",
      name: "Ahmad's Portfolio",
      category: "Live",
      description: "",
      tech: "HTML5/CSS3/JavaScript/React",
      screenshot: "../assets/images/screenshots/portfolio.png",
      alt: "Ahmad El Gamal's Portfolio",
      link: "https://ahmadelgamal.github.io/"
    },
  ]);

  return (
    <main>
      <section id="carousel">
        <div key="carousel-5" id="carousel-5" className="carouselPics">
          <img
            src={require(`../assets/images/carousel/carousel-5.jpg`).default}
            alt={""}
          />
        </div>
      </section>

      <h2>Live Projects</h2>
      <section id="live">
        {liveProjects.map((project) => (

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
    </main>
  );
};

export default LiveProjects;