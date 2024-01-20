import React from 'react';
import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header />
          <hr />
          <Projects />
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
