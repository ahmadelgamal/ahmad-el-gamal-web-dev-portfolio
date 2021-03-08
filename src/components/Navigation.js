import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import logo from '../logo-ahmad.png';
import * as FaIcons from 'react-icons/fa';

function Navigation(props) {

  const tabs = ['About', 'Portfolio', 'Skills', 'Resume', 'Contact'];

  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(true);
  const hideSidebar = () => setSidebar(false);

  const updateWidth = () => {
    if (window.innerWidth >= 768) hideSidebar();
  };
  window.addEventListener('resize', updateWidth);

  return (
    <section id="navigation">
      <div id="navbar-bg"></div>
      <div className='container navbar'>
        <a
          href="#About"
          id="logo"
          onClick={ () => { props.handlePageChange('About'); hideSidebar() } }
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

      <nav className='topNavBar'>
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
      </nav>

      <div className='push-content-under-navbar'></div>

      <nav className={ sidebar ? "dropNavMenu" : "dropNavMenu hidden" }>
        { tabs.map(tab => (
          <a
            key={ tab }
            href={ '#' + tab }
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={ () => { props.handlePageChange(tab); hideSidebar(); } }
            className={
              props.currentPage === tab ? 'active' : ''
            }
          >
            { tab }
          </a>
        )) }
      </nav>

      {/* this layer is used to hideSidebar when clicking outside of it */ }
      <div
        className={ sidebar ? 'bottom-layer-active' : 'hidden' }
        onClick={ hideSidebar }>
      </div>

    </section >
  );
}

export default Navigation;
