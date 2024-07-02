import React from 'react';

const Header = () => {
  return (
    <header id="header-section" style={styles.header}>
      <div style={styles.content}>
        <h1 style={styles.name}>Icram Doku</h1>
        <img
          src={require(`../Portfolio-images/Icram_Doku.jpg`)}
          alt="logo"
          style={styles.logo}
        />
        <p style={styles.role}>Full Stack Developer</p>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    textAlign: 'center',
    padding: '2rem 0',
    background: 'linear-gradient(to bottom, #ff7e5f, #feb47b)',
    color: '#fff',
  },
  content: {
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  },
  name: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    letterSpacing: '0.1rem',
  },
  logo: {
    width: '200px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '50%',
    margin: '1rem auto',
    border: '5px solid #fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    animation: 'bounce 1s infinite alternate',
  },
  role: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
  },
  '@keyframes bounce': {
    '0%': { transform: 'translateY(0)' },
    '100%': { transform: 'translateY(-10px)' },
  },
};

