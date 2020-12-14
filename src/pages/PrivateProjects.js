import React, { useState } from 'react';

function PrivateProjects() {

  const [PrivateProjects] = useState([
    {
      id: "lifetime-egypt",
      name: "Lifetime Egypt",
      category: "featured",
      description: "App displays a catalog of products, with specifications, pictures and prices, for a furniture company.",
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
      description: "",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "crescent-trade.png",
      alt: "Crescent Trade",
      link: "https://crescenttrade.com/",
    },
    {
      id: "elgamal-group",
      name: "El Gamal Group",
      category: "private",
      description: "",
      tech: "iWeb",
      screenshot: "elgamal-group.png",
      alt: "El Gamal Group",
      link: "http://elgamalgroup.com/",
    },
    {
      id: "al-azhar",
      name: "El Gamal's Azhari Guide",
      category: "private",
      description: "",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "alazhar.png",
      alt: "El Gamal's Azhari Guide",
      link: "https://ahmadelgamal.com/alazhar/",
    },
    {
      id: "ahmadelgamal",
      name: "Ahmad's Personal Page",
      category: "private",
      description: "",
      tech: "HTML5 | CSS3 | JavaScript",
      screenshot: "imam-ahmad.png",
      alt: "Imam Ahmad El Gamal",
      link: "https://ahmadelgamal.com/",
    },
  ]);

  return (
    <main>
      <section id="jumbotron">
        <div key="carousel-5" id="carousel-5" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-5.jpg`).default }
            alt={ "" }
          />
        </div>
      </section>

      <div className="container">
        <h2>Private-Repository Projects</h2>
        <section id="private">
          { PrivateProjects.map((project) => (

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
                >
                  <img
                    src={ require(`../assets/images/screenshots/${project.screenshot}`).default }
                    alt={ project.alt }
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

export default PrivateProjects;