import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import SourceCode from './components/SourceCode';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

// Styles for the navigation bar
const styles = {
  navbar: {
    position: 'fixed',
    top: '0',
    left: '0', // Position it to the left edge of the screen
    height: '100vh', // Full height of the viewport
    width: '50px', // Set a fixed width for the vertical navigation
    backgroundColor: '#007BFF',
    padding: '5px',
    textAlign: 'left',
    zIndex: '100',
    display: 'flex', // Set display to flex
    flexDirection: 'column', // Set flex direction to column
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '22px',
    fontWeight: 'bold',
    transform: 'rotate(-90deg)',
    transition: 'all 0.5s ease',
    margin: '40px 0', // Adjust margin for vertical spacing
  },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={styles.navbar}>
          <a href="#header-section" style={styles.link}>
            Header
          </a>
          <a href="#projects-section" style={styles.link}>
            Projects
          </a>
          <a href="#source-code-section" style={styles.link}>
            Source Code
          </a>
          <a href="#skills-section" style={styles.link}>
            Skills
          </a>
          <a href="#contact-section" style={styles.link}>
            Contact
          </a>
        </nav>
        <div>
          <Header />
          <hr />
          <Projects />
          <hr />
          <SourceCode />
          <hr />
          <Skills />
          <hr />
          <Contact />
        </div>
      </header>
    </div>
  );
}

export default App;
