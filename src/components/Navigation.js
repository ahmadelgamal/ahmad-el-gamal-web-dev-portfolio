import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../logo-ahmad.png';
import * as FaIcons from 'react-icons/fa';

function Navigation(props) {

  const tabs = ['About', 'Portfolio', 'Skills', 'Resume', 'Contact'];

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  return (
    <div id="navbar">
      <span id="navbar-bg"></span>
      <div className='container navburger'>
        <a
          href="#About"
          id="logo"
          onClick={ () => props.handlePageChange('About') }
        >
          <div className='flex'>
            <img src={ logo } alt="Logo" width="30px" height="30px" />
            <span id="first-name">Ahmad&nbsp;</span>
            <span id="last-name">El Gamal</span>
          </div>
        </a>

        <a
          to="#"
          className={ sidebar ? "menu-bars hidden" : "menu-bars" }
          onClick={ showSideBar }>
          <FaIcons.FaBars />
        </a>

        <a
          to="#"
          className={ sidebar ? "menu-times" : "menu-times hidden" }
          onClick={ hideSidebar }>
          <FaIcons.FaTimes />
        </a>
      </div>

      <nav className={ sidebar ? "" : "hidden" }>
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
              { tab }
            </a>
          )) }
        </div>
      </nav>

      <nav className='topbar'>
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
              { tab }
            </a>
          )) }
        </div>
      </nav>
    </div >
  );
}

export default Navigation;
