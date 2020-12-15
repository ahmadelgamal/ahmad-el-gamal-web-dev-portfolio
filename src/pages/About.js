import React from 'react';

function About() {

  return (
    <>
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
          Ahmad has always been passionate about computers and programming. He started programming, as a young child, in the 1980s, in the programming language <i>Basic</i>, on <i>Sinclair</i> computers. Then, he began web‑development in the 1990s. He even enrolled at the University of Colorado at Boulder, in 1995, as a Computer Science major, but later on switched to Civil Enginnering in order to join his established family business in construction.
        </p>
        <p>
          However, his passion for computers and programming continued to grow so he studied mobile‑app development at the University of California Irvine (UCI) extension (online) in 2013 and produced his first app, which was published to Apple's App Store in 2014.
        </p>
        <p>
          In July 2020, Ahmad upgraded his programming knowledge, learned new more effective skills, significantly advanced his techniques and updated his development tools by joining an online coding bootcamp, for full‑stack web‑development, at the University of California, Berkeley (UCB), extension.
        </p>
        <p>
          Samples of his web‑development work can be seen in the Portfolio section of this website. The porfolio demonstrates proficiency in both the front-end and back-end stacks. Please feel free to visit the deployed websites of each project and browse their code repositories on <a href="https://github.com/ahmadelgamal" target="_blank" rel="noreferrer">GitHub</a>. Also, please feel free to contact him by <a href="mailto:ahmad@crescentapplications.com" target="_blank" rel="noreferrer">email</a>.
        </p>
        <p>
          Ahmad was born in Egypt and is also a United States citizen. He lives
          in Irvine, California, with his wife and five children.
        </p>
      </div>
    </>
  )
}

export default About;