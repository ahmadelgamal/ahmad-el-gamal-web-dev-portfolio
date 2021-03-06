import React, { useState, useEffect } from 'react';
import { validateEmail } from '../utils/helpers';
import emailjs from 'emailjs-com';

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
  }

  function handleSubmit(event) {
    event.preventDefault();
    // console.log(formState);

    let name = false;
    let email = false;
    let message = false;

    if (event.target.querySelector("input[name='name'").value.trim() === "") setErrorMessage('Please type your full name');
    else name = true;

    if (event.target.querySelector("input[name='email'").value.trim() === "") setErrorMessage('Please type your email address');
    else email = true;

    if (event.target.querySelector("textarea[name='message'").value.trim() === "") setErrorMessage('Please type your message');
    else message = true;

    if (name && email && message) {
      emailjs.sendForm('service_xbl8m76', 'template_yy13ndc', event.target, 'user_3QlmspmFC6ohkE8C94IEp')
        .then((result) => {
          // console.log(result.text);
        }, (error) => {
          console.log(error.text);
        })
        .then(() => {
          setErrorMessage('Message sent successfully!');
          setTimeout(function () { setErrorMessage(''); }, 3000);
        })
        .then(() => {
          event.target.querySelector("input[name='name'").value = "";
          event.target.querySelector("input[name='email'").value = "";
          event.target.querySelector("textarea[name='message'").value = "";
        });
    }
  }

  return (
    <>
      <section key="hero-contact" id="hero-contact" className="hero-images">
        <img
          src={ require(`../assets/images/hero/cairo-skyline-min.jpg`).default }
          alt="View of Cairo skyline from Ahmad's home in Giza, Egypt."
          width="1920px"
          height="900px"
        />
      </section>

      <section id="contacts" className="container limit-width">
        <h1>Contact Ahmad El Gamal</h1>
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
          <button id="contact-submit" type="submit" value="send">Submit</button>
          { errorMessage && (
            <div>
              <p id="contact-form-error-message">{ errorMessage }</p>
            </div>
          ) }
        </form>
      </section>
    </>
  )
}

export default Contact;