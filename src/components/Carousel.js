import React from 'react';
import carouselImage1 from '../assets/images/carousel/carousel-1.jpg';
import carouselImage2 from '../assets/images/carousel/carousel-2.jpg';
import carouselImage3 from '../assets/images/carousel/carousel-3.jpg';

function Carousel () {
  return (
    <section id="carousel">
        <div id="carousel-1" className="carouselPics">
          <h1>Ahmad El Gamal's</h1>
          <img
            src={carouselImage1}
            alt="Ahmad El Gamal in his office in Irvine, CA."
          />
        </div>
        <div id="carousel-2" className="carouselPics">
          <h1>Software Development</h1>
          <img
            src={carouselImage2}
            alt="Ahmad El Gamal at New Vision International School's construction site in Giza, Egypt."
          />
        </div>
        <div id="carousel-3" className="carouselPics">
          <h1>Portfolio</h1>
          <img
            src={carouselImage3}
            alt="Ahmad El Gamal in Azhari attire."
          />
        </div>
    </section>
  )
}

export default Carousel;

// // The following code activates the carousel feature
// let carouselIndex = 0;

// function carouselPics() {
//   const carouselPicsEls = document.getElementsByClassName("carouselPics");
//   for (let i = 0; i < carouselPicsEls.length; i += 1) {
//     carouselPicsEls[i].style.display = "none";
//   }

//   carouselIndex += 1;

//   if (carouselIndex > carouselPicsEls.length) {
//     carouselIndex = 1;
//   }

//   carouselPicsEls[carouselIndex - 1].style.display = "block";
//   setTimeout(carouselPics, 3000); // Change image every 3 seconds
// }

// carouselPics();