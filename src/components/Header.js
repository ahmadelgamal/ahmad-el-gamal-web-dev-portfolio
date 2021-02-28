import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import Project from '../pages/Project';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';
import Contact from '../pages/Contact';

function Header() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Project />;
      case 'Skills':
        return <Skills />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
      default:
        return <About handlePageChange={ handlePageChange } />;
    }
  };

  document.title = currentPage + ' - Ahmad El Gamal - Web-Dev';

  return (
    <>
      {/* Pass the state value and the setter as props to Navigation */ }
      <header className="grid-container">
        <Navigation currentPage={ currentPage } handlePageChange={ handlePageChange } />
      </header>
      {/* Call the renderPage function passing in the currentPage */ }
      <main className="main grid-container">{ renderPage(currentPage) }</main>
    </>
  );
}

export default Header;
