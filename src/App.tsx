import React from 'react';
import Slider from 'react-slick';
import AppProviders from 'contexts';
import SlickCard from 'components/SlickCard';
import Introduction from 'components/Introduction';
import WallpaperText from 'components/WallpaperText';
import ChatBot from 'components/ChatBot';
import GithubIcon from 'assets/images/github.svg';
import GmailIcon from 'assets/images/gmail.svg';
import LinkedinIcon from 'assets/images/linkedin.png';
import './App.scss';

const App: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <AppProviders>
      <div>
        <div className="app__intro">
          <Introduction />
        </div>
        <div className="app__background">
          I am a current third year undergraduate at the National University of
          Singapore (NUS). I am pursuing a degree in Computer Engineering with a
          specialization in Robotics. My interests are in Robotics and Backend
          Engineering. My technical leadership is demonstrated through my
          tech-related local and overseas projects and courses.
        </div>
        <div className="app__work">
          <WallpaperText text="Experiences" />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            <SlickCard
              header={
                'System Engineer (IoT) Intern at GovTech\nDec 2020 - March 2022'
              }
              body={
                'Created MATLAB script to annotate data to finetune model\nResearched state of art deep learning models to estimate crowd count\nDeveloped pipeline to deploy model on Nividia Jetson Nano'
              }
            />
            <SlickCard
              header={
                'Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020'
              }
              body={
                'Built NLP models to analyze chatbot dataset using PyTorch and Scikit Learn\nDeveloped dashboard to visualize analysis in ReactJS, Flask, and MongoDB\nDeployed apps with Docker and Kubernetes in AWS\nImplemented scalable pipeline using Spark to run analysis as ETL jobs'
              }
            />
            <SlickCard
              header={
                'Student Discussion Leader for CS1010 at NUS\nAug 2019 - Nov 2010'
              }
              body={
                'Facilitated tutorial discussions to reinforce C programming concepts\nGraded programming lab assignments with feedback for improvements'
              }
            />
            <SlickCard
              header={
                'Software Developer Intern at Hodlnaut\nMay 2019 - Jul 2019'
              }
              body={
                'Developed website to invest in cryptocurrencies in ReactJS, ExpressJS, and RethinkDB\nImplemented end to end testing with CypressJS for continuous integration and deployment\nPrioritized tasks to achieve and release during weekly sprint planning'
              }
            />
            <SlickCard
              header={
                'Software Developer Intern at Finesse Digital\nJan 2018 - Jul 2018'
              }
              body={
                'Developed website to assist in financial investments in NuxtJS, Django, and PostgreSQL\nAutomated continuous integration and deployment on AWS with Ansible and Jenkins\nDocumented setup and code in shared platform and APIs with SwaggerUI'
              }
            />
            <SlickCard
              header={
                'Data Crawling Engineer Intern at 6Estates\nFeb 2018 - May 2018'
              }
              body={
                'Scrapped websites and endpoints for market analysis in JavaScript\nExtracted information from text with regular expression'
              }
            />
          </Slider>
        </div>
        <div className="app__projects">
          <WallpaperText text="Projects" />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            <SlickCard
              header={'Project Bali (Project Director)\nJan 2019 - Aug 2019'}
              body={
                'Led team of 11 for overseas community project overseeing recruitment, logistics, and planning\nDeveloped website to promote experiential tourism in ReactJS, ExpressJS, and MySQL on DigitalOcean\nAutomated cron job for HTTPS encryption of website with Certbot'
              }
            />
          </Slider>
        </div>
        <div className="app__awards">
          <WallpaperText text="Awards And Certificates" />
        </div>
        <div className="app__background">
          <Slider {...settings}>
            <SlickCard
              header={'Foundations In AI\nAug 2020'}
              body={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1LlnFH7QGVnayCvQh_2vxyh7YRqCbmR__/view"
                >
                  AI Singapore
                </a>
              }
            />
            <SlickCard
              header={
                'Youth Expedition Project Leaders Training Course YMCA Of Singapore\nJan 2019'
              }
              body={
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/12Bkge9pS6dQqJzQ-z-bMyRr6Gi-c9mDG/view"
                >
                  Youth Corps Singapore
                </a>
              }
            />
            <SlickCard
              header={'NUS Merit Scholarship \nJuly 2018'}
              body={'NUS'}
            />
          </Slider>
        </div>
        <div className="app__contact">
          <div className="app__contact--container">
            <div className="app__contact--icons">
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
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=nwjbrandon@gmail.com"
              >
                <img
                  alt="Gmail"
                  className="app__contact--icon"
                  src={GmailIcon}
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
