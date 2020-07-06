import React from 'react';
import Container from 'components/Container';

import LinkedInImage from 'assets/images/linkedin.png';
import GithubImage from 'assets/images/github.png';
import GmailImage from 'assets/images/gmail.png';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <Container>
      <div className="contact__container">
        <div className="contact__header">My Contact</div>
        <div className="contact__text">Click to view my social profile</div>
        <div className="contact__info">
          <a
            href="https://www.linkedin.com/in/nwjbrandon/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip">
              <span className="tooltiptext">
                https://www.linkedin.com/in/nwjbrandon/
              </span>
              <img
                className="contact__info--img"
                alt="Linkedin"
                src={LinkedInImage}
              />
            </div>
          </a>
          <a
            href="https://github.com/nwjbrandon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip">
              <span className="tooltiptext">https://github.com/nwjbrandon</span>
              <img
                className="contact__info--img"
                alt="GitHub"
                src={GithubImage}
              />
            </div>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nwjbrandon@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="tooltip">
              <span className="tooltiptext">nwjbrandon@gmail.com</span>
              <img
                className="contact__info--img"
                alt="Gmail"
                src={GmailImage}
              />
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
