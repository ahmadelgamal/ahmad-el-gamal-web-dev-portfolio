import React, { useEffect } from 'react';
import resume from '../assets/downloads/Ahmad-El-Gamal-Web-Dev-Resume.pdf';

function Resume() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section key="hero-resume" id="hero-resume" className="hero-images">
        <img
          src={ require(`../assets/images/hero/ahmad-azhar-min.jpg`).default }
          alt="Ahmad in Azhari attire."
          width="1920px"
          height="900px"
        />
      </section>

      <section id="resume" className="container">
        <h1>Resume</h1>

        <h2 id="download-header">
          <a
            id="resume-link"
            href={ resume }
            download
          >
            To download resume, click here
          </a>
        </h2>

        {/* <object width="100%" height="1080px" data={resume} type="application/pdf">   </object> */}

      </section>
    </>
  );
}

export default Resume;