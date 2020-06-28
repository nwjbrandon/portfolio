import React from 'react';
import Container from 'components/Container';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="contact__container">
        <div className="contact__header">My Contact</div>
        <div className="contact__text">My name is Brandon.</div>
      </div>
    </Container>
  );
};

export default Contact;
