import React, { useState } from 'react';
import { validateEmail } from '../utils/helpers';

function Contact() {

  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;

  function handleChange(event) {
    if (event.target.name === 'email') {
      const isValid = validateEmail(event.target.value);
      // console.log(isValid);
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!event.target.value.length) {
        setErrorMessage(`${event.target.name} is required.`);
      } else {
        setErrorMessage('');
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    // console.log('errorMessage: ', errorMessage);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <>
      <section id="jumbotron">
        <div key="carousel-3" id="carousel-3" className="jumbotronPics">
          <img
            src={ require(`../assets/images/carousel/carousel-3.jpg`).default }
            alt={ "Ahmad El Gamal at home in Irvine, CA." }
          />
        </div>
      </section>

      <h1>Contact Ahmad El Gamal</h1>
      <div id="contacts" className="container">
        <form id="contact-form" onSubmit={ handleSubmit }>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" placeholder="Please type your full name here" defaultValue={ name } onBlur={ handleChange } />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" autoComplete="email" className="validate" placeholder="Please type your email address here" defaultValue={ email } onBlur={ handleChange } />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message-input" type="text" name="message" rows="7" placeholder="Please type your message here" defaultValue={ message } onBlur={ handleChange } />
          </div>
          { errorMessage && (
            <div>
              <p id="contact-form-error-message">{ errorMessage }</p>
            </div>
          ) }
          <button id="contact-submit" type="submit" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Contact;