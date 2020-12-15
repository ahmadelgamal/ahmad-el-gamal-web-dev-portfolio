import React from 'react';

function About() {
  return (
    <main>
      <section id="jumbotron">
        <div key="carousel-1" id="carousel-1" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-1.jpg`).default }
            alt={ "Ahmad El Gamal in his office in Irvine, CA." }
          />
        </div>
      </section>

      <h2>About Ahmad El Gamal</h2>
      <div id="about" className="container">
        <p>
          Entrepreneur, strategic planner, software developer, and civil
          engineer. Imam, educator, and lifelong learner. Ahmad is a highly
          effective and experienced leader with excellent communication skills,
          strong attention to detail and a remarkable ability to patiently
          organize and sort almost anything!
        </p>
        <p>
          Ahmad started programming on Sinclair computers in the 1980s. He
          started web&#8209;development in the 1990s. He also studied mobile&#8209;app
          development at the University of California Irvine (UCI)
          extension (online) in 2013 and produced his first app, that was
          published to Apple's App Store, in 2014.
        </p>
        <p>
          In July 2020, Ahmad updated his knowledge and skills by joining a coding bootcamp,
           for full&#8209;stack web&#8209;development, at the University of California, Berkeley
            (UCB), extension (online).
        </p>
        <p>
          Ahmad was born in Egypt and is also a United States citizen. He lives
          in Irvine, California, with his wife and five children.
        </p>
      </div>
    </main>
  )
}

export default About;