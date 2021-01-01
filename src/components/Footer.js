import React from 'react';
import githubIcon from '../assets/images/social-media/icon-github.svg';
import linkedinIcon from '../assets/images/social-media/icon-linkedin.svg';
import stackoverflowIcon from '../assets/images/social-media/icon-stackoverflow.svg';

function Footer() {
  return (
    <footer className="grid-container" >
      <div id="contacts" className="social-media">
        <ul>
          <li>
            <a
              href="https://github.com/ahmadelgamal"
              target="_blank"
              rel="noreferrer"
            ><img
                src={ githubIcon }
                alt="Link to Ahmad El Gamal's GitHub Page"
                width="50px"
                height="50px"
              /></a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmadelgamal/"
              target="_blank"
              rel="noreferrer"
            ><img
                src={ linkedinIcon }
                alt="Link to Ahmad El Gamal's LinkedIn Page"
                width="50px"
                height="50px"
              /></a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/13940472/ahmad-el-gamal"
              target="_blank"
              rel="noreferrer"
            ><img
                src={ stackoverflowIcon }
                alt="Link to Ahmad El Gamal's StackOverflow Page"
                width="50px"
                height="50px"
              /></a>
          </li>
        </ul>
      </div>
      <p>Copyright &copy; 2021 Ahmad El Gamal. All rights reserved.</p>
    </footer>
  );
}

export default Footer;