import React from 'react';
import { contactDetails } from '../data';

const Contact = () => {
  return (
    <section id="contact-section" style={styles.section}>
      <h2 style={styles.heading}>Contact</h2>
      <div style={styles.contactContainer}>
        <div style={styles.contactItem}>
          <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" style={styles.link}>
            <img
              src={require(`../Portfolio/LinkedIn-logo.png`)}
              alt="LinkedIn Logo"
              style={styles.logo}
            />
            <br />
            <span style={styles.contactText}>{contactDetails.linkedin}</span>
          </a>
        </div>
        <div style={styles.contactItem}>
          <p style={styles.contactText}>Email:</p>
          <p style={styles.contactText}>{contactDetails.email}</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

const styles = {
  section: {
    marginBottom: '40px',
    padding: '40px 0',
    background: 'linear-gradient(to bottom, #9dabe0, #7a81e8)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  contactContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  contactItem: {
    textAlign: 'center',
  },
  link: {
    textDecoration: 'none',
    color: '#007bff', 
    transition: 'color 0.3s',
  },
  logo: {
    width: '50px',
    height: '50px',
    marginBottom: '10px',
  },
  contactText: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};
