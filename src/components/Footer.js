import React from 'react';
import githubIcon from '../assets/images/social-media/icon-github.svg';
import linkedinIcon from '../assets/images/social-media/icon-linkedin.svg';
import stackoverflowIcon from '../assets/images/social-media/icon-stackoverflow.svg';

function Footer() {
  return (
    <footer className="footer grid-container" >
      <div id="contacts" className="social-media">
        <ul>
          <li>
            <a
              href="https://github.com/ahmadelgamal"
              target="_blank"
              rel="noreferrer"
            ><img
                src={githubIcon}
                alt="Link to Ahmad El Gamal's GitHub Page"
              /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmadelgamal/"
              target="_blank"
              rel="noreferrer"
            ><img
                src={linkedinIcon}
                alt="Link to Ahmad El Gamal's LinkedIn Page"
              /></a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/13940472/ahmad-el-gamal"
              target="_blank"
              rel="noreferrer"
            ><img
                src={stackoverflowIcon}
                alt="Link to Ahmad El Gamal's StackOverflow Page"
              /></a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2020 Ahmad El Gamal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;