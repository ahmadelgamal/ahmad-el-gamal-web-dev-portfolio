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
  ]);

  return (
    <section id="live">
      <h3>Live Projects</h3>
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
  );
};

export default LiveProjects;