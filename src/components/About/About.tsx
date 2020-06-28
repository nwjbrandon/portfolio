import React from 'react';
import Container from 'components/Container';
import './About.scss';

const About: React.FC = () => {
  return (
    <Container>
      <div className="about__container">
        <div className="about__header">About Me</div>
        <div className="about__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default About;
