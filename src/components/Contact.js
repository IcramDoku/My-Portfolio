import React from 'react';
import { contactDetails } from '../data';

const Contact = () => {
  return (
    <section id="contact-section">
      <h2>Contact</h2>
      <p>Email: {contactDetails.email}</p>
    </section>
  );
};

export default Contact;
