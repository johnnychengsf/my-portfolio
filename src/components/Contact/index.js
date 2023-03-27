import React, { useState } from 'react';
import './style.css';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

  const handleBlurUserName = (event) => {
    if (!userName) {
      setErrorMessage('Name invalid');
    } else {
      setErrorMessage('');
    }
  };

  const handleBlurEmail = (event) => {
    if (!validateEmail(email)) {
      setErrorMessage('Email invalid');
    } else {
      setErrorMessage('');
    }
  };
  const handleBlurMessage = (event) => {
    if (!message) {
      setErrorMessage('Message invalid');
    } else {
      setErrorMessage('');
    }
  }

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else if (inputType === 'message') {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or username is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit

    setEmail('');
    setMessage('');

    alert(`Hello ${userName}`);
  };

  return (
    <div>
      <form className="form">
        <h2>Contact</h2>
        <label htmlFor="name">
          Name:
        </label>
        <input
          value={userName}
          id="userName"
          name="userName"
          onBlur={handleBlurUserName}
          onChange={handleInputChange}
          type="text"
          placeholder="username"
        />
        <label htmlFor="email">
          Email:
        </label>
        <input
          value={email}
          id="email"
          name="email"
          onBlur={handleBlurEmail}
          onChange={handleInputChange}
          type="email"
          placeholder="email"
        />
        <label htmlFor="message">
          Message:
        </label>
        <textarea id="message" name="message" onBlur={handleBlurMessage} onChange={handleInputChange} value={message}></textarea>
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
