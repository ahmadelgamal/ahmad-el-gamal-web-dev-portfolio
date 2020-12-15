import React from 'react';
import logo from '../logo-ahmad.png';

function Navigation(props) {

  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];

  return (
    <div id="navbar">
      <span id="navbar-bg"></span>
      <a
        href="#About"
        id="logo"
        onClick={ () => props.handlePageChange('About') }
      >
        <img src={ logo } alt="Logo" /><span id="last-name">El Gamal</span>
      </a>

      <nav>
        <div className="navmenu">
          { tabs.map(tab => (
            <a
              key={ tab }
              href={ '#' + tab }
              // Whenever a tab is clicked on,
              // the current page is set through the handlePageChange props.
              onClick={ () => props.handlePageChange(tab) }
              className={
                props.currentPage === tab ? 'active' : ''
              }
            >
              {tab }
            </a>
          )) }
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
