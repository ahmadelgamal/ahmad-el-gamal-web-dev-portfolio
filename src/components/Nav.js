import React from 'react';
import logo from '../logo-ahmad.png';
import resume from '../assets/downloads/Ahmad-El-Gamal-Web-Development-resume.pdf?202012121152PM';

function Nav(props) {

  const tabs = ['About', 'Skills', 'Featured', 'Live', 'Templates', 'Contact'];

  return (
    <header>
      <div id="navbar">
        <span id="navbar-bg"></span>
        <a
          href="#About"
          id="logo"
          onClick={() => props.handlePageChange('About')}
        >
          <img src={logo} alt="Logo" />
        </a>

        <nav>
          <div className="navmenu">
            {tabs.map(tab => (
              <a
                key={tab}
                href={'#' + tab}
                // Whenever a tab is clicked on,
                // the current page is set through the handlePageChange props.
                onClick={() => props.handlePageChange(tab)}
                className={
                  props.currentPage === tab ? 'active' : ''
                }
              >
                {tab}
              </a>
            ))}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
            >Resume</a
            >
          </div>
        </nav>
      </div>
    </header>
  );
}

// function categorySelected(name) {
//   console.log(`${name} clicked`);
// }

// return (
//   <header>
//     <div id="navbar">
//       <span id="navbar-bg"></span>
//       <a href="#top" id="logo"><img src={logo} alt="Logo" /></a>

//       <nav>
//         <label htmlFor="burger-toggle" id="burger-icon">
//           <div id="toggle-bars">
//             <div className="bar1"></div>
//             <div className="bar2"></div>
//             <div className="bar3"></div>
//           </div>
//         </label>
//         <input type="checkbox" id="burger-toggle" />

//         <div className="navmenu">
//           <a href="#about-header">About</a>
//           <a href="#skills-header">Skills</a>

//           {categories.map((category) => (
//             <a
//               key={category.name}
//               href={category.href}
//             >
//               {category.name}
//             </a>
//           ))}

//           <a href="#contacts">Contact</a>
//           <a
//             href={resume}
//             target="_blank"
//             rel="noreferrer"
//           >Resume</a
//           >
//         </div>
//       </nav>
//     </div>
//   </header>
// );
// }

export default Nav;
