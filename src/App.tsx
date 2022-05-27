import React from 'react';
import Slider from 'react-slick';
import AppProviders from 'contexts';
import SlickCard from 'components/SlickCard';
import Introduction from 'components/Introduction';
import WallpaperText from 'components/WallpaperText';
import ChatBot from 'components/ChatBot';
import GithubIcon from 'assets/images/github.svg';
import LinkedinIcon from 'assets/images/linkedin.png';
import Portfolio from 'utils/Portfolio';
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
  return (
    <AppProviders>
      <div>
        <div className="app__intro">
          <Introduction />
        </div>
        <div className="app__background">{Portfolio.Introduction.en}</div>
        <div className="app__work">
          <WallpaperText text={Portfolio.Sections.experiences.en} />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            {Portfolio.Experiences.map((exp, i) => (
              <SlickCard
                key={i}
                header={exp.en.title}
                body={exp.en.description}
              />
            ))}
          </Slider>
        </div>
        <div className="app__projects">
          <WallpaperText text={Portfolio.Sections.projects.en} />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            {Portfolio.Projects.map((proj, i) => (
              <SlickCard
                key={i}
                header={proj.en.title}
                body={proj.en.description}
              />
            ))}
          </Slider>
        </div>
        <div className="app__awards">
          <WallpaperText text={Portfolio.Sections.awards.en} />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            {Portfolio.Awards.map((proj, i) => (
              <SlickCard
                key={i}
                header={proj.en.title}
                body={proj.en.description}
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
    </AppProviders>
  );
};

export default App;
