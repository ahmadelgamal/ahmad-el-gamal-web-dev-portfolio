import React, { useState } from 'react';

function PracticeProjects() {

  const [practiceProjects] = useState([
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
    <section id="practice">
      <h3>Practice Projects</h3>
      {practiceProjects.map((project) => (

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

export default PracticeProjects;