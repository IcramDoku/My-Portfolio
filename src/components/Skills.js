import React from 'react';
import { skills } from '../data';

const Skills = () => {
  return (
    <section id="skills-section" style={styles.section}>
      <h2 style={styles.heading}>Skills</h2>
      <div style={styles.skillContainer}>
        {skills.map((skill, index) => (
          <div key={index} style={styles.skill}>
            <img
              src={skill.icon}
              alt={skill.name}
              style={styles.icon}
            />
            <span style={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;



const styles = {
  section: {
    textAlign: 'center',
    padding: '40px 0',
    background: 'linear-gradient(to bottom, #7ee8fa, #82b1ff)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  skillContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  skill: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  icon: {
    width: '80px',
    height: '80px',
    marginBottom: '10px',
  },
  skillName: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
};

