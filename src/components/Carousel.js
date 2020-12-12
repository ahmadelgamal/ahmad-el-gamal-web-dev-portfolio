import React from 'react';
import carouselImage1 from '../assets/images/carousel/carousel-1.jpg';
import carouselImage2 from '../assets/images/carousel/carousel-2.jpg';
import carouselImage3 from '../assets/images/carousel/carousel-3.jpg';

function Carousel() {

  const carouselPics = [
    {
      id: "carousel-1",
      text: "Ahmad El Gamal's",
      src: { carouselImage1 },
      alt: "Ahmad El Gamal in his office in Irvine, CA.",
    },
    {
      id: "carousel-2",
      text: "Software Development",
      src: { carouselImage2 },
      alt: "Ahmad El Gamal at New Vision International School's construction site in Giza, Egypt.",
    },
    {
      id: "carousel-3",
      text: "Portfolio",
      src: { carouselImage3 },
      alt: "Ahmad El Gamal in Azhari attire.",
    },
  ];

  // let carouselIndex = 0;

  // function carousel() {
  //   for (let i = 0; i < carouselPics.length; i += 1) {
  //     carouselPics[i].style.display = "none";
  //   }

  //   carouselIndex += 1;

  //   if (carouselIndex > carouselPics.length) {
  //     carouselIndex = 1;
  //   }

  //   carouselPics[carouselIndex - 1].style.display = "block";
  //   setTimeout(carousel, 3000); // Change image every 3 seconds
  // }
  // carousel();

  return (
    <section id="carousel">
      {carouselPics.map((pic) => (
        <div key={pic.id} id={pic.id} className="carouselPics">
          <h1>{pic.text}</h1>
          <img
            src={pic.src}
            alt={pic.alt}
          />
        </div>
      ))}
    </section>
  )
}

export default Carousel;
