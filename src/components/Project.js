import React, { useState } from 'react';
import Navigation from './Navigation';
import About from '../pages/About';
import FeaturedProjects from '../pages/FeaturedProjects';
import PrivateProjects from '../pages/PrivateProjects';
import TemplateProjects from '../pages/TemplateProjects';
import Contact from '../pages/Contact';
import Resume from '../pages/Resume';

function SwitchContainer() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Featured':
        return <FeaturedProjects />;
      case 'Templates':
        return <TemplateProjects />;
      case 'Private':
        return <PrivateProjects />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  };

  document.title = currentPage + ' - AEG - Portfolio';

  return (
    <div className="grid-container">
      {/* Pass the state value and the setter as props to NavTabs */ }
      <Navigation currentPage={ currentPage } handlePageChange={ handlePageChange } />
      {/* Call the renderPage function passing in the currentPage */ }
      <div>{ renderPage(currentPage) }</div>
    </div>
  );
}

export default SwitchContainer;
