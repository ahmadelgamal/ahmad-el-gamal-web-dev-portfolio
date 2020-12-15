import React, { useState } from 'react';

function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(event) {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formState);
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
        <form id="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Please type your full name here" defaultValue={ name } onChange={ handleChange } />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" autoComplete="email" className="validate" placeholder="Please type your email address here" defaultValue={ email } onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message-input" type="text" name="message" rows="7" placeholder="Please type your message here" defaultValue={ message } onChange={handleChange} />
          </div>
          <button id="contact-submit" type="submit" >Submit</button>
        </form>
        <p id="contact-form-error-message"></p>
      </div >
    </div >
  )
}

export default Contact;