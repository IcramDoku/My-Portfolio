import React from 'react';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects-section" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <div style={styles.container}>
        {projects.map((project) => (
          <article style={styles.article} key={project.id}>
            <div style={styles.card}>
              <h3 style={styles.title}>{project.title}</h3>
              <p style={styles.description}>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div style={styles.imageContainer}>
                  <img
                    src={require(`../Portfolio/${project.image}`)}
                    alt="logo"
                    style={styles.image}
                  />
                  <div style={styles.overlay}></div>
                </div>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button style={styles.button}>
                  Go to Website
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

const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 0',
    background: 'linear-gradient(to bottom, #feb47b, #ffb766)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '40px',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  article: {
    width: '300px',
    margin: '20px',
  },
  card: {
    padding: '20px',
    borderRadius: '1.5rem',
    background: '#fff',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
    position: 'relative',
    overflow: 'hidden',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '20px',
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '1.5rem',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    borderRadius: '1.5rem',
    transition: 'transform 0.3s',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(0, 0, 0, 0.5)',
    opacity: 0,
    transition: 'opacity 0.3s',
  },
};
