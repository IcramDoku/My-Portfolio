import React from 'react';
import { contactDetails } from '../data';

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contact</h2>
      <p>LinkedIn: <br />
        <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../Portfolio/LinkedIn-logo.png`)}
            alt="logo"
            style={{
              width: '5%',
              height: '5%',
              objectFit: 'cover',
            }}
          />
          <br />
          {contactDetails.linkedin}
        </a>
      </p>
      <p>Email: {contactDetails.email}</p>
    </section>
  );
};

export default Contact;
