import React from 'react';
import Container from 'components/Container';
import './Education.scss';

const Education: React.FC = () => {
  return (
    <Container>
      <div className="education__container">
        <div className="education__header">My Education</div>
        <div className="education__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Education;
