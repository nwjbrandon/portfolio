import React from 'react';
import Slider from 'react-slick';
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
    <div>
      <div className="app__intro">
        <Introduction />
      </div>
      <div className="app__background">
        I am a current third year undergraduate at the National University of
        Singapore (NUS). I am pursuing a degree in Computer Engineering with
        specializations in IoT and Robotics and a minor in Data Engineering. My
        interests are in IoT, Robotics, and Data Science.
      </div>
      <div className="app__work">
        <WallpaperText text="Experiences" />
      </div>
      <div className="app__background">
        <Slider {...settings}>
          <SlickCard
            header={
              'Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020'
            }
            body={
              'Analyzed chatbot dataset using PyTorch and Scikit Learn\nDeveloped dashboard to visualize analysis in ReactJS, Flask, MongoDB, Docker, and Kubernetes\nImplemented scalable pipeline using Spark to run analysis as ETL jobs\nCreated mockups to design dashboard for visualization with using AdobeXD'
            }
          />
          <SlickCard
            header={
              'Student Discussion Leader for CS1010 at NUS\nAug 2019 - Nov 2010'
            }
            body={
              'Facilitated tutorial discussions to reinforce C programming concepts for students\nGraded programming lab assignments with feedback for improvements'
            }
          />
          <SlickCard
            header={
              'Software Developer Intern at Hodlnaut\nMay 2019 - Jul 2019'
            }
            body={
              'Developed website to hold and invest cryptocurrencies in ReactJS, ExpressJS and RethinkDB\nIntegrated end to end testing with CypressJS on GitLab CI and CD pipeline'
            }
          />
          <SlickCard
            header={
              'Software Developer Intern at Finesse Digital\nJan 2018 - Jul 2018'
            }
            body={
              'Developed website to assist in financial investments in NuxtJS, Django, and PostgreSQL\nAutomated CI and CD pipeline on AWS with Ansible and Jenkins'
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
            header={'YWaste (Software Developer)\nJun 2020 - Present'}
            body={
              'Developed Restful API to upload image for OCR with AWS Textract\nDeployed OCR as a SaaS on AWS Lambda and API Gateway with Terraform'
            }
          />
          <SlickCard
            header={
              'DARPA Subterranean Challenge (Software Developer)\nApr 2020 - Aug 2020'
            }
            body={
              "Programmed aerial obstacle avoidance software into drone's firmware\nDeveloped dashboard with rviz plugins to control and visualize robots' movements"
            }
          />
          <SlickCard
            header={'Auturec (Tech Head)\nSep 2019 - May 2020'}
            body={
              'Initiated project to help children who are intelligent-challenged to learn\nDeveloped app with engaging games and activities in ReactJs'
            }
          />
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
            header={'Introduction to Deep Learning in Python\nAug 2020'}
            body={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.datacamp.com/statement-of-accomplishment/course/f0c9cd648051a726a19ef4b15c17f710c7278547?share=true"
              >
                DataCamp
              </a>
            }
          />
          <SlickCard
            header={'Supervised Learning with scikit-learn\nAug 2020'}
            body={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.datacamp.com/statement-of-accomplishment/course/3e8900289b861997b1681804a6ed445e08dccaed?share=true"
              >
                DataCamp
              </a>
            }
          />
          <SlickCard
            header={'Unsupervised Learning in Python\nAug 2020'}
            body={
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.datacamp.com/statement-of-accomplishment/course/b9c164b191dce2e810fadb6fd17b74fed22806a0?share=true"
              >
                DataCamp
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
                DataCamp
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
        <WallpaperText
          text={
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
          }
        />
      </div>
      <ChatBot />
    </div>
  );
};

export default App;
