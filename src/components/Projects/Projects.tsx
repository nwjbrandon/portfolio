import React from 'react';
import Container from 'components/Container';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <Container>
      <div className="projects__container">
        <div className="projects__header">My Projects</div>
        <div className="projects__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Projects;
