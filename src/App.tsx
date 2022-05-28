import React from 'react';
import Slider from 'react-slick';
import SlickCard from 'components/SlickCard';
import Introduction from 'components/Introduction';
import WallpaperText from 'components/WallpaperText';
import ChatBot from 'components/ChatBot';
import GithubIcon from 'assets/images/github.svg';
import LinkedinIcon from 'assets/images/linkedin.png';
import Portfolio from 'utils/Portfolio';
import LanguageBar from 'components/LanguageBar';
import { useLanguage } from 'contexts/LanguageContext';
import './App.scss';

const App: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const { lang } = useLanguage();

  return (
    <div>
      <LanguageBar />

      <div className="app__intro">
        <Introduction />
      </div>
      <div className="app__background">{Portfolio.Introduction[lang]}</div>
      <div className="app__work">
        <WallpaperText text={Portfolio.Sections.experiences[lang]} />
      </div>
      <div className="app__background">
        <Slider {...settings}>
          {Portfolio.Experiences.map((exp, i) => (
            <SlickCard
              key={i}
              header={exp[lang].title}
              body={exp[lang].description}
            />
          ))}
        </Slider>
      </div>
      <div className="app__projects">
        <WallpaperText text={Portfolio.Sections.projects[lang]} />
      </div>
      <div className="app__background">
        <Slider {...settings}>
          {Portfolio.Projects.map((proj, i) => (
            <SlickCard
              key={i}
              header={proj[lang].title}
              body={proj[lang].description}
            />
          ))}
        </Slider>
      </div>
      <div className="app__awards">
        <WallpaperText text={Portfolio.Sections.awards[lang]} />
      </div>
      <div className="app__background">
        <Slider {...settings}>
          {Portfolio.Awards.map((proj, i) => (
            <SlickCard
              key={i}
              header={proj[lang].title}
              body={proj[lang].description}
            />
          ))}
        </Slider>
      </div>
      <div className="app__contact">
        <div className="app__contact--container">
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/nwjbrandon"
            >
              <img
                alt="GitHub"
                className="app__contact--icon"
                src={GithubIcon}
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nwjbrandon"
            >
              <img
                alt="LinkedIn"
                className="app__contact--icon"
                src={LinkedinIcon}
              />
            </a>
          </div>
        </div>
      </div>
      <ChatBot />
    </div>
  );
};

export default App;
