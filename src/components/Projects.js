import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section className="bg-priumpurple">
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
              <p>Link to Website</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

