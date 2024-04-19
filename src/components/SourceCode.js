import React from 'react';
import { githubLink } from '../data';

const SourceCode = () => {
    return (
    <section id="source-code-section" style={styles.section}>
      <h2 style={styles.heading}>Source Code</h2>
      <p style={styles.paragraph}>
        Explore all my projects on GitHub:
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
          <img
            src={require(`../Portfolio/GitHub-logo.png`)}
            alt="GitHub Logo"
            style={styles.logo}
          />
          <br />
          {githubLink}
        </a>
      </p>
    </section>
  );
};

export default SourceCode;

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 0',
    background: 'linear-gradient(to bottom, #90d5ec, #5e97b0)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
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
};
