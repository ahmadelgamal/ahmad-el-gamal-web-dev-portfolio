import React from 'react';

function Contact() {

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('test');
  }
  return (
    <main>
      <section id="jumbotron">
        <div key="carousel-3" id="carousel-3" className="jumbotronPics">
          <img
            src={require(`../assets/images/carousel/carousel-3.jpg`).default}
            alt={"Ahmad El Gamal at home in Irvine, CA."}
          />
        </div>
      </section>

      <h2>Contact Ahmad El Gamal</h2>
      <div id="about" className="container">
        <form id="contact-form">
          <label>Name:
            <input type="text" name="name" placeholder="Please type your full name here" />
          </label>
          <label>Email:
            <input type="text" name="email" placeholder="Please type your email address here" />
          </label>
          <label>Message:
            <textarea id="message-input" type="text" name="message" placeholder="Please type your message here" />
          </label>
          <button id="contact-submit" onSubmit={handleSubmit}>Submit</button>
        </form>
      </div>
    </main >
  )
}

export default Contact;