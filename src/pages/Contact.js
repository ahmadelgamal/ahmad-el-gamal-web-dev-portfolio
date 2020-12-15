import React from 'react';

function Contact() {

  function handleSubmit(event) {
    event.preventDefault();
    if (document.getElementById('message-input').innerHTML === "") {
      document.getElementById('contact-form-error-message').innerHTML = "Message is required"
    }
    console.log('test');
  }

  return (
    <div>
      <section id="jumbotron">
        <div key="carousel-3" id="carousel-3" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-3.jpg`).default }
            alt={ "Ahmad El Gamal at home in Irvine, CA." }
          />
        </div>
      </section>

      <h2>Contact Ahmad El Gamal</h2>
      <div id="contacts" className="container">
        <form id="contact-form">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" placeholder="Please type your full name here" />
          <label htmlFor="email">Email:</label>
          <input id="email" type="email" autoComplete="email" className="validate" name="email" placeholder="Please type your email address here" />

          <label htmlFor="message">Message:</label>
          <textarea id="message-input" type="text" name="message" placeholder="Please type your message here" />
          <button id="contact-submit" onSubmit={ handleSubmit }>Submit</button>
        </form>
        <p id="contact-form-error-message"></p>
      </div >
    </div >
  )
}

export default Contact;