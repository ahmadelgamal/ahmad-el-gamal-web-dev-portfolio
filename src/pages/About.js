import React, { useEffect } from 'react';

function About(props) {

  console.log(props);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section key="hero-about" id="hero-about" className="hero-images">
        <img
          src={ require(`../assets/images/hero/ahmad-ca-min.jpg`).default }
          alt="Ahmad El Gamal in his office in Irvine, CA."
          width="1920px"
          height="900px"
        />
      </section>

      <section id="about" className="container">
        <h1>About Ahmad El Gamal</h1>
        <p>
          Entrepreneur, strategic planner, software developer, and civil
          engineer. Imam, educator, and lifelong learner. Ahmad is a highly
          effective and experienced leader with excellent communication skills,
          strong attention to detail and a remarkable ability to patiently
          organize and sort almost anything!
        </p>
        <p>
          Ahmad has always been passionate about computers and coding. For over three decades he has been learning, working, troubleshooting and, occasionally, programming, in different languages, on different devices and operating systems, including Windows, MacOS, iOS, Android, Linux, Unix &amp; MS‑DOS!
        </p>
        <p>
          He started programming, as a young child, in the mid 1980s, in the programming language of <i>Basic</i>, on <i>Sinclair</i> computers. At the age of 16, Ahmad was admitted to the University of Colorado at Boulder (CU), as a Computer Science major, but switched to Civil Engineering in order to join his family business, in construction. However, during his time at CU, he began web‑development, at the rise of the internet, in the mid 1990s.
        </p>
        <p>
          Ahmad's passion for computers and coding continued to grow, so in 2013, he studied mobile‑app development at the University of California Irvine (UCI) extension (online) and produced his first app, which was published to Apple's App Store, in 2014.
        </p>
        <p>
          In July 2020, Ahmad upgraded his coding knowledge &amp; skills, advanced his techniques and updated his development tools by joining an online coding bootcamp, for full‑stack web‑development, at the University of California, Berkeley (UCB), extension.
        </p>
        <p>
          Samples of his work can be seen in the <a href="#Portfolio" onClick={ () => props.handlePageChange('Portfolio') }>Portfolio</a> section of this website, which demonstrate proficiency in both the front‑end and back‑end stacks. Please feel free to visit the deployed website of each project and browse their code repositories on <a href="https://github.com/ahmadelgamal" target="_blank" rel="noreferrer">GitHub</a>.
        </p>
        <p>
          Ahmad was born in Egypt and is also a United States citizen. He lives
          in Irvine, California, with his wife and five children.
        </p>
      </section>
    </>
  )
}

export default About;