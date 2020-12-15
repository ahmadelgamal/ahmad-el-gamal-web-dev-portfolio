import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import Project from '../pages/Project';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function Header() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Project />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
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
