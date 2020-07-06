import React from 'react';
import Music from 'components/Music';
import SideBar from 'components/SideBar';
import About from 'components/About';
import Experiences from 'components/Experiences';
import Education from 'components/Education';
import Projects from 'components/Projects';
import Certifications from 'components/Certifications';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import './App.scss';

const App: React.FC = () => {
  const [isOpen, handleIsOpen] = React.useState<boolean>(false);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const experiencesRef = React.useRef<HTMLDivElement>(null);
  const educationRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const certificationsRef = React.useRef<HTMLDivElement>(null);
  const skillsRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const handleAboutRefClick = () => {
    if (aboutRef !== null && aboutRef.current !== null) {
      aboutRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleExperiencesRefClick = () => {
    if (experiencesRef !== null && experiencesRef.current !== null) {
      experiencesRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleEducationRefClick = () => {
    if (educationRef !== null && educationRef.current !== null) {
      educationRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleProjectsRefClick = () => {
    if (projectsRef !== null && projectsRef.current !== null) {
      projectsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleCertificationsRefClick = () => {
    if (certificationsRef !== null && certificationsRef.current !== null) {
      certificationsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleSkillsRefClick = () => {
    if (skillsRef !== null && skillsRef.current !== null) {
      skillsRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleContactRefClick = () => {
    if (contactRef !== null && contactRef.current !== null) {
      contactRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleOpenMenu = () => {
    handleIsOpen(true);
  };

  const handleCloseMenu = () => {
    handleIsOpen(false);
  };
  return (
    <div>
      <div className="app__menu" onClick={handleOpenMenu}>
        <div className="app__menu--burger"></div>
        <div className="app__menu--burger"></div>
        <div className="app__menu--burger"></div>
      </div>
      <div className={isOpen ? '' : 'app__sidebar'} onClick={handleCloseMenu}>
        <div className={isOpen ? 'app__cover' : ''} />
        <SideBar
          handleAboutRefClick={handleAboutRefClick}
          handleExperiencesRefClick={handleExperiencesRefClick}
          handleEducationRefClick={handleEducationRefClick}
          handleProjectsRefClick={handleProjectsRefClick}
          handleCertificationsRefClick={handleCertificationsRefClick}
          handleSkillsRefClick={handleSkillsRefClick}
          handleContactRefClick={handleContactRefClick}
        />
      </div>
      <Music />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experiencesRef}>
        <Experiences />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={certificationsRef}>
        <Certifications />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
