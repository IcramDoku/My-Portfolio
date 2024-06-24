import React from 'react';
import { githubLink, devpostLink } from '../data';

const SourceCode = () => {
  return (
    <section id="source-code-section" style={styles.section}>
      <h2 style={styles.heading}>Source Code</h2>
      <div style={styles.sourceContainer}>
        <div style={styles.sourceItem}>
          <p style={styles.paragraph}>
            Explore all my projects on GitHub:
            <br />
            <a href={githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <img
                src={require('../Portfolio/GitHub-logo.png')}
                alt="GitHub Logo"
                style={styles.logo}
              />
              <br />
              {githubLink}
            </a>
          </p>
        </div>
        <div style={styles.sourceItem}>
          <p style={styles.paragraph}>
            Explore my DEVPOST Profile:
            <br />
            <a href={devpostLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <img
                src={require('../Portfolio/devpost_logo_icon_169280.webp')}
                alt="Devpost Logo"
                style={styles.logo}
              />
              <br />
              https://devpost.com/IcramDoku
            </a>
          </p>
        </div>
      </div>
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
  sourceContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  sourceItem: {
    textAlign: 'center',
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
