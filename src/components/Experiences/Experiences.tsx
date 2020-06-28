import React from 'react';
import Container from 'components/Container';
import './Experiences.scss';

const Experiences: React.FC = () => {
  return (
    <Container>
      <div className="experiences__container">
        <div className="experiences__header">My Experiences</div>
        <div className="experiences__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Experiences;
