import React from 'react';

function Contact() {
  return (
    <main>
      <section id="carousel">
        <div key="carousel-3" id="carousel-3" className="carouselPics">
          <img
            src={require(`../assets/images/carousel/carousel-3.jpg`).default}
            alt={"Ahmad El Gamal at home in Irvine, CA."}
          />
        </div>
      </section>

      <h2>Contact Ahmad El Gamal</h2>
      <div id="about" className="container">

      </div>
    </main>
  )
}

export default Contact;