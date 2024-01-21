import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects-section">
      <h2>Projects</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
                  <p style={{ background: 'gray', fontWeight: 'bold', color: 'blue', fontSize: '18px' }}>Go to Website {'>'}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

