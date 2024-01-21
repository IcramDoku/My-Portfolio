import React from 'react';
import { githubLink } from '../data';

const SourceCode = () => {
    return (
    <section id="source-code-section">
      <h2>Source Code</h2>
      <p>
        Check out the source code for this portfolio on GitHub:
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <img
            src={require(`../Portfolio/GitHub-logo.png`)}
            alt="logo"
            style={{
              width: '10%',
              height: '10%',
              objectFit: 'cover',
            }}
          />
          <br />
          {githubLink}
        </a>
      </p>
    </section>
  );
};

export default SourceCode;
