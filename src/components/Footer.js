import React from 'react';
import phoneIcon from '../assets/images/social-media/icon-phone.svg';
import emailIcon from '../assets/images/social-media/icon-email.svg';
import globeIcon from '../assets/images/social-media/icon-globe.svg';
import githubIcon from '../assets/images/social-media/icon-github.svg';
import linkedinIcon from '../assets/images/social-media/icon-linkedin.svg';

function Footer() {
  return (
    <footer>
      <div id="contacts" className="social-media">
        <ul>
          <li>
            <a href="tel:6572462334" target="_blank"
            ><img
                src={phoneIcon}
                alt="Link to Ahmad El Gamal's Portfolio"
              /></a>
          </li>
          <li>
            <a href="mailto:ahmad@crescentapplications.com" target="_blank"
            ><img
                src={emailIcon}
                alt="Link to Ahmad El Gamal's Email"
              /></a>
          </li>
          <li>
            <a href="#"
            ><img
                src={globeIcon}
                alt="Link to Ahmad El Gamal's Portfolio (This website)"
              /></a>
          </li>
          <li>
            <a href="https://github.com/ahmadelgamal" target="_blank"
            ><img
                src={githubIcon}
                alt="Link to Ahmad El Gamal's GitHub Page"
              /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ahmadelgamal/" target="_blank"
            ><img
                src={linkedinIcon}
                alt="Link to Ahmad El Gamal's LinkedIn Page"
              /></a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2020 Ahmad El Gamal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;