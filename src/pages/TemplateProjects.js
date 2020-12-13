import React, { useState } from 'react';

function TemplateProjects() {

  const [templateProjects] = useState([
    {
      id: "ucb-code-quiz",
      name: "Code Quiz",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "code-quiz.png",
      alt: "Code Quiz",
      link: "https://ahmadelgamal.github.io/ucb-code-quiz/"
    },
    {
      id: "ucb-git-it-done",
      name: "Git it Done",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "git-it-done.png",
      alt: "Git it Done",
      link: "https://ahmadelgamal.github.io/ucb-git-it-done/"
    },
    {
      id: "ucb-horiseon",
      name: "Horiseon",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3",
      screenshot: "horiseon.png",
      alt: "Horiseon",
      link: "https://ahmadelgamal.github.io/ucb-horiseon/"
    },
    {
      id: "ucb-password-generator",
      name: "Password Generator",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "password-generator.png",
      alt: "Password Generator",
      link: "https://ahmadelgamal.github.io/ucb-password-generator/"
    },
    {
      id: "ucb-robot-gladiators",
      name: "Robot Gladiators",
      category: "Templates",
      description: "",
      tech: "JavaScript",
      screenshot: "robot-gladiators.png",
      alt: "Robot Gladiators",
      link: "https://ahmadelgamal.github.io/ucb-robot-gladiators/"
    },
    {
      id: "ucb-run-buddy",
      name: "Run Buddy",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3",
      screenshot: "run-buddy.png",
      alt: "Run Buddy",
      link: "https://ahmadelgamal.github.io/ucb-run-buddy/"
    },
    {
      id: "ucb-taskinator",
      name: "Taskinator",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "taskinator.png",
      alt: "Taskinator",
      link: "https://ahmadelgamal.github.io/ucb-taskinator/"
    },
    {
      id: "ucb-taskmaster-pro",
      name: "Taskmaster Pro",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "taskmaster-pro.png",
      alt: "Taskmaster Pro",
      link: "https://ahmadelgamal.github.io/ucb-taskmaster-pro/"
    },
    {
      id: "ucb-weather-dashboard",
      name: "Weather Dashboard",
      category: "Templates",
      description: "",
      tech: "HTML5/CSS3/JavaScript",
      screenshot: "weather-dashboard.png",
      alt: "Weather Dashboard",
      link: "https://ahmadelgamal.github.io/ucb-weather-dashboard/"
    },
  ]);

  return (
    <main>
      <section id="carousel">
        <div key="carousel-6" id="carousel-6" className="carouselPics">
          <img
            src={require(`../assets/images/carousel/carousel-6.jpg`).default}
            alt={"Mobile, pencils, notes, eraser and scissors."}
          />
        </div>
      </section>

      <div className="container">
        <h2>Template Projects</h2>
        <section id="practice">
          {templateProjects.map((project) => (

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

export default TemplateProjects;