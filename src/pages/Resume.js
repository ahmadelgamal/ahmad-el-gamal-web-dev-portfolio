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

        <h3>Work Experience</h3>

        <div className='flex mt-20'>
          <h4>President</h4>
          <h4>June 2015 - Present</h4>
        </div>
        <div className='flex'>
          <h4>Crescent Academies LLC</h4>
          <h4>Irvine, CA</h4>
        </div>
        <ul>
          <li>Intriguingly taught front-end web-development to elementary and middle-school students.</li>
          <li>Creatively taught digital photography to elementary and middle-school students.</li>
        </ul>

        <div className='flex mt-20'>
          <h4>President</h4>
          <h4>November 2011 - Present</h4>
        </div>
        <div className='flex'>
          <h4>Crescent Holdings LLC</h4>
          <h4>Irvine, CA</h4>
        </div>
        <ul>
          <li>Patiently produced a mobile app (iOS and Android), that was downloaded all around the world.</li>
          <li>Aggressively launched an online furniture store with a facebook page that exceeded 50k likes in year 1.</li>
          <li>Created an online women’s fashion store that had two physical storefronts in Orange County, CA.</li>
        </ul>

        <h3 className='mt-40'>Education</h3>

        <div className='flex mt-20'>
          <h4>Certified Full-Stack Web-Developer</h4>
          <h4>Jan 2021</h4>
        </div>
        <div className='flex'>
          <h4>University of California, Extension</h4>
          <h4>Berkeley, CA</h4>
        </div>
        <ul>
          <li>Online Full-Stack Web-Development Certificate (MERN Stack)</li>
        </ul>

        <div className='flex mt-20'>
          <h4>Online Mobile-App Development Courses</h4>
          <h4>April 2013 - Aug 2015</h4>
        </div>
        <div className='flex'>
          <h4>University of California, Extension</h4>
          <h4>Irvine, CA</h4>
        </div>
        <ul>
          <li>Intro to mobile-app application design and development on Android, iOS &amp; Windows Phone.</li>
          <li>Advanced mobile development for Apple iPhone and iPad.</li>
        </ul>

        <div className='flex mt-20'>
          <h4>Civil Engineer</h4>
        </div>
        <div className='flex'>
          <h4>University of Colorado</h4>
          <h4>Boulder, CO</h4>
        </div>
        <ul>
          <li>Bachelor of Science in Civil Engineering.</li>
        </ul>
      </section>
    </>
  );
}

export default Resume;