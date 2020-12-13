import React, {useState} from 'react';
import Nav from './Nav';
import About from '../pages/About';
import Skills from '../pages/Skills';
import FeaturedProjects from '../pages/FeaturedProjects';
import LiveProjects from '../pages/LiveProjects';
import TemplateProjects from '../pages/TemplateProjects';
import Contact from '../pages/Contact';

function SwitchContainer() {

  // Using useState, set the default value for currentPage to 'Home'
  const [currentPage, handlePageChange] = useState('About');

  // The renderPage method uses a switch statement to render the appropriate current page
  const renderPage = () => {
    switch (currentPage) {
      case 'Featured':
        return <FeaturedProjects />;
      case 'Live':
        return <LiveProjects />;
      case 'Templates':
        return <TemplateProjects />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return <About />;
    }
  };

  document.title = currentPage + ' - AEG - Portfolio';

  return (
    <div>
      {/* Pass the state value and the setter as props to NavTabs */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Call the renderPage function passing in the currentPage */}
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default SwitchContainer;
