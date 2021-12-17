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
          I am a final year undergraduate at the National University of
          Singapore (NUS). I am pursuing a degree in Computer Engineering with a
          specialization in Robotics. My interests are in AI, Robotics, and IoT.
          I was a teacher assistant for CG4002 Teaching Asistant AY2021/2022 
          Semester 2, CG4002 Teaching Assistant AY2021/2022 Semester 1, and
          CS1010 Teaching Assistant AY2019/2020 Semester 1. I am also a NUS Merit 
          Scholarship holder.
        </div>
        <div className="app__work">
          <WallpaperText text="Experiences" />
        </div>
        <div className="app__background">
          <Slider {...settings}>
          <SlickCard
              header={
                'Alglorithm Engineer Intern (NLP) at Shopee\nDec 2021 - Present'
              }
              body={
                'TBD'
              }
            />
          <SlickCard
              header={
                'AI Developer Intern at Augmentus\nMay 2021 - Sep 2021'
              }
              body={
                'Optimized inference speed of machine learning models on Jetson platform to run 3 times faster\nDeveloped concurrent modules to control robot, run model inference, and stream images to device via TCP\nFinetuned hyper-parameters and data augmentation steps to improve models inference on smaller dataset\nIntegrated model training with AWS to automate the training process with 70% cost savings'
              }
            />
            <SlickCard
              header={
                'System Engineer (IoT) Intern at GovTech\nDec 2020 - March 2021'
              }
              body={
                'Researched and evaluated different state-of-art deep learning models to estimate crowd count\nCreated training dataset from video footage on taget environment to finetune machine learning models\nIntegrated machine learning model with Docker on Jetson Platform to operate in the server room'
              }
            />
            <SlickCard
              header={
                'Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020'
              }
              body={
                'Build and analyze NLP models to improve chatbot dataset from multiple government agencies\nDeveloped dashboard to visualize analysis from NLP models and integrate with Google DialogFlow APIs\nCreated scripts to automate deployment of dashboard using Docker and Kubernetes on AWS'
              }
            />
            <SlickCard
              header={
                'Software Developer Intern at Hodlnaut\nMay 2019 - Jul 2019'
              }
              body={
                'Developed APIs and improved user interface for users to deposit and invest in cryptocurrencies\nImplemented end to end testing and integrated into deployment pipeline for continuous testing'
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
                header={'CG4001 B. Eng. Dissertation (Teleoperate robotic arm via 3D pose estimation)\nAug 2021 - Present'}
                body={
                  'Trained Graph Convolutional Network models in PyTorch for 3D pose estimation of upper body\nCreated robot simulation with Unity Engine to teleoperate a robotic arm with the 3D pose information'
                }
              />
              <SlickCard
                header={'CG4002 Computer Engineering Capstone Project (Create wearable devices to classify dance moves)\nJan 2021 - May 2021'}
                body={
                  'Performed time and frequency domain feature engineering on time series IMU data in pre-processing steps\nTrained machine learning model in PyTorch on extracted features to classify dance moves with 97% accuracy'
                }
              />
              <SlickCard
                header={'Sixth Sense (Increase digital presence of Bengkala for experiential tourism)\nJan 2019 - Aug 2019'}
                body={
                  'Led a group of 11 students for overseas community service project to promote experiential tourism in Bengkala\nOrganized and coordinated project plans, finances, and logistics with a student group in Indonesia\nDeveloped website and deployed on DigitalOcean for the community to update and share stories of themselves'
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
              header={'Commendation Letter For CG4002 \nDec 2021'}
              body={'NUS'}
            />
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
              header={'NUS Merit Scholarship \nJul 2018'}
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
