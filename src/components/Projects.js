import React from 'react';
import "./project.css";
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="container portfolio__container" style={{ padding: '20px' }}>
        {projects.map((project) => (
          <article className='project-article'>
            <div className="project-card" key={project.id}>
              <h3>{project.title}</h3>
              <p style={{ fontSize: '22px' }}>{project.description}</p>
              <a
                className="App-link"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ position: 'relative', overflow: 'hidden', width: '100%', height: '100%' }}>
                  <img
                    src={require(`../Portfolio/${project.image}`)}
                    alt="logo"
                    style={{
                      width: '75%',
                      height: '75%',
                      objectFit: 'cover',
                      borderRadius: '1.5rem',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      display: 'flex',
                      alignItems: 'flex-end',
                      justifyContent: 'center',
                      width: '100%',
                      height: '98%',
                      background: 'rgba(0, 0, 0, 0)',
                    }}
                  >
                    
                  </div>
                </div>
              </a>
              <a className="App-link" href={project.link} target="_blank" rel="noopener noreferrer">
              <button style={{ textAlign: 'left', background: 'black', color: 'lightblue', fontSize: '16px', transition: 'background 0.3s', borderRadius: '4px', padding: '8px', cursor: 'pointer', border: '1px solid darkblue' }}
              onMouseOver={(e) => e.target.style.background = 'white'}
              onMouseOut={(e) => e.target.style.background = 'black'}
              >
                Go to Website {'>'}
              </button>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;

