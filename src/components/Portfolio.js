import React from 'react';
import FeaturedProjects from './FeaturedProjects';
import LiveProjects from './LiveProjects';
import PracticeProjects from './PracticeProjects';
// import { capitalizeFirstLetter } from '../utils/helpers';

// import portfolioProject from '../assets/images/screenshots/portfolio.png';
// import codeQuizProject from '../assets/images/screenshots/code-quiz.png';
// import gitProject from '../assets/images/screenshots/git-it-done.png';
// import horiseonProject from '../assets/images/screenshots/horiseon.png';
// import passwordGeneratorProject from '../assets/images/screenshots/password-generator.png';
// import robotGladiatorsProject from '../assets/images/screenshots/robot-gladiators.png';
// import runBuddyProject from '../assets/images/screenshots/run-buddy.png';
// import taskinatorProject from '../assets/images/screenshots/taskinator.png';
// import taskmasterProProject from '../assets/images/screenshots/taskmaster-pro.png';
// import weatherDashboardProject from '../assets/images/screenshots/weather-dashboard.png';
// import crescentAcademyProject from '../assets/images/screenshots/crescent-academy.png';
// import workDaySchedulerProject from '../assets/images/screenshots/work-day-scheduler.png';

function Portfolio() {

  return (
    <div id="work" className="container">
      <FeaturedProjects />
      <LiveProjects />
      <PracticeProjects />
    </div>

    //     <article id="portfolio">
    //       <div className="project">
    //         <h4>
    //           Ahmad's Portfolio<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a href="https://ahmadelgamal.github.io/" target="_blank"
    //         ><img
    //             src={portfolioProject}
    //             alt="Ahmad El Gamal's Portfolio"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>
    //   </section>

    //   <hr />

    //   <section id="ucb">
    //     <h3>UCB Projects:</h3>
    //     <article id="ucb-code-quiz">
    //       <div className="project">
    //         <h4>
    //           Code Quiz<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-code-quiz/"
    //           target="_blank"
    //         ><img
    //             src={codeQuizProject}
    //             alt="Code Quiz"
    //           />
    //         </a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-git-it-done">
    //       <div className="project">
    //         <h4>
    //           Git it Done<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-git-it-done/"
    //           target="_blank"
    //         ><img
    //             src={gitProject}
    //             alt="Git it Done"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-horiseon">
    //       <div className="project">
    //         <h4>
    //           Horiseon<br />
    //           <span>HTML5/CSS3</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-horiseon/"
    //           target="_blank"
    //         ><img
    //             src={horiseonProject}
    //             alt="Horiseon"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-password-generator">
    //       <div className="project">
    //         <h4>
    //           Password Generator<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-password-generator/"
    //           target="_blank"
    //         ><img
    //             src={passwordGeneratorProject}
    //             alt="Password Generator"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-robot-gladiators">
    //       <div className="project">
    //         <h4>
    //           Robot Gladiators<br />
    //           <span>JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-robot-gladiators/"
    //           target="_blank"
    //         ><img
    //             src={robotGladiatorsProject}
    //             alt="Robot Gladiators"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-run-buddy">
    //       <div className="project">
    //         <h4>
    //           Run Buddy<br />
    //           <span>HTML5/CSS3</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-run-buddy/"
    //           target="_blank"
    //         ><img
    //             src={runBuddyProject}
    //             alt="Run Buddy"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-taskinator">
    //       <div className="project">
    //         <h4>
    //           Taskinator<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-taskinator/"
    //           target="_blank"
    //         ><img
    //             src={taskinatorProject}
    //             alt="Taskinator"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-taskmaster-pro">
    //       <div className="project">
    //         <h4>
    //           Taskmaster Pro<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-taskmaster-pro/"
    //           target="_blank"
    //         ><img
    //             src={taskmasterProProject}
    //             alt="Taskmaster Pro"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="weather-dashboard">
    //       <div className="project">
    //         <h4>
    //           Weather Dashboard<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-weather-dashboard/"
    //           target="_blank"
    //         ><img
    //             src={weatherDashboardProject}
    //             alt="Weather Dashboard"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>
    //   </section>

    //   <section id="under-development">
    //     <h3>Under Development:</h3>
    //     <article id="crescent-academy">
    //       <div className="project">
    //         <h4>
    //           Crescent Academy<br />
    //           <span>HTML5/CSS3/Bootstrap</span>
    //         </h4>
    //         <a href="http://crescent.academy/" target="_blank"
    //         ><img
    //             src={crescentAcademyProject}
    //             alt="Crescent Academy"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article>

    //     <article id="ucb-work-day-scheduler">
    //       <div className="project">
    //         <h4>
    //           Work-Day Scheduler<br />
    //           <span>HTML5/CSS3/JavaScript</span>
    //         </h4>
    //         <a
    //           href="https://ahmadelgamal.github.io/ucb-work-day-scheduler/"
    //           target="_blank"
    //         ><img
    //             src={workDaySchedulerProject}
    //             alt="Code Quiz"
    //           /></a>
    //       </div>
    //       <p></p>
    //     </article> */}
    //   </section>
    // </div>
  );
}

export default Portfolio;