import React from 'react';
import Container from 'components/Container';
import SlientVoiceImage from 'assets/images/slient_voice.jpg';
import VioletEvergardenImage from 'assets/images/violet_evergarden.jpg';
import KonImage from 'assets/images/k-on.jpg';
import PlasticMemoriesImage from 'assets/images/plastic_memories.jpg';
import YourLieInAprilImage from 'assets/images/your_lie_in_april.jpg';
import EricaImage from 'assets/images/erica.jpg';
import './About.scss';

const About: React.FC = () => {
  return (
    <Container>
      <div className="about__container">
        <div className="about__header">About Me</div>
        <div className="about__text">
          Ever since I saw{' '}
          <a
            rel="noopener noreferrer"
            className="about__text about__link"
            href="https://www.youtube.com/watch?v=TyJ-xLj9SEE"
            target="_blank"
          >
            Erica
          </a>
          , the android developed in Hiroshi Ishiguro Laboratories, I have been
          fascinated with what Natural Language Processing (NLP) and Natural
          Language Understanding (NLU) is capable of in the field of human-robot
          interaction.
        </div>
        <div className="about__text">
          Hi, my name is Brandon, a current undergraduate at National Unversity
          of Singapore (NUS). I am pursuing a degree in Computer Engineering.
          Developing a software application that is capable of human interaction
          is what I hope to realize. This passion has fulled my daily passion to
          explore the field in NLP and NLU.
        </div>
        <img alt="Erica" src={EricaImage} className="about__img" />
        <div className="about__text">
          I spent my free time drawing manga and playing keyboard. I love
          travelling and watching animes. Below are my top 5 animes.
        </div>
        <div className="about__anime">
          <div>
            <img
              alt="The Slient Voice"
              src={SlientVoiceImage}
              className="about__anime--img"
            />
            <div className="about__text about__anime--title">
              The Slient Voice
            </div>
          </div>
          <div>
            <img
              alt="Violet Evergarden"
              src={VioletEvergardenImage}
              className="about__anime--img"
            />
            <div className="about__text about__anime--title">
              Violet Evergarden
            </div>
          </div>
          <div>
            <img alt="K-on!" src={KonImage} className="about__anime--img" />
            <div className="about__text about__anime--title">K On!</div>
          </div>
        </div>
        <div className="about__anime">
          <div>
            <img
              alt="Plastic Memories"
              src={PlasticMemoriesImage}
              className="about__anime--img"
            />
            <div className="about__text about__anime--title">
              Plastic Memories
            </div>
          </div>
          <div>
            <img
              alt="Your Lie In April"
              src={YourLieInAprilImage}
              className="about__anime--img"
            />
            <div className="about__text about__anime--title">
              Your Lie In April
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
