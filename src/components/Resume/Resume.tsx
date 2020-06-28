import React from 'react';
import Container from 'components/Container';
import './Resume.scss';

const Projects: React.FC = () => {
  return (
    <Container>
      <div className="resume__container">
        <div className="resume__header">My Resume</div>
        <div className="resume__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Projects;
