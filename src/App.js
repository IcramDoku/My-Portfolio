import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import SourceCode from './components/SourceCode';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
  },
  sidebar: {
    width: '55px',
    backgroundColor: '#007BFF',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '20px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: '0',
    left: '0',
    bottom: '0',
    zIndex: '1000',
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
    fontSize: '18px',
    margin: '20px 0',
    textAlign: 'center',
    width: '100%',
    transform: 'rotate(-90deg)',
    padding: '10px',
    transition: 'all 0.3s ease',
  },
  content: {
    flex: '1',
    padding: '3px',
    marginLeft: '55px',
  },
};

function App() {
  return (
    <div>
      <aside style={styles.sidebar}>
        <a
          href="#header-section"
          style={styles.link}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
        >
          Header
        </a>
        <a 
          href="#projects-section" 
          style={styles.link}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
          Projects
        </a>
        <a href="#source-code-section" 
          style={styles.link}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
          Source Code
        </a>
        <a href="#skills-section" 
          style={styles.link}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
          Skills
        </a>
        <a href="#contact-section" 
          style={styles.link}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}>
          Contact
        </a>
      </aside>
      <div style={styles.content} className="App">
        <header className="App-header">
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
    </div>
  );
}

export default App;
