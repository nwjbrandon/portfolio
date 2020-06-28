import React from 'react';
import Music from 'components/Music';
import SideBar from 'components/SideBar';
import About from 'components/About';
import Experiences from 'components/Experiences';
import Education from 'components/Education';
import Projects from 'components/Projects';
import Resume from 'components/Resume';
import Certifications from 'components/Certifications';
import Skills from 'components/Skills';
import Contact from 'components/Contact';
import './App.scss';

const App: React.FC = () => {
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const experiencesRef = React.useRef<HTMLDivElement>(null);
  const educationRef = React.useRef<HTMLDivElement>(null);
  const projectsRef = React.useRef<HTMLDivElement>(null);
  const resumeRef = React.useRef<HTMLDivElement>(null);
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
  const handleResumeRefClick = () => {
    if (resumeRef !== null && resumeRef.current !== null) {
      resumeRef.current.scrollIntoView({
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
  return (
    <div>
      <SideBar
        handleAboutRefClick={handleAboutRefClick}
        handleExperiencesRefClick={handleExperiencesRefClick}
        handleEducationRefClick={handleEducationRefClick}
        handleProjectsRefClick={handleProjectsRefClick}
        handleResumeRefClick={handleResumeRefClick}
        handleCertificationsRefClick={handleCertificationsRefClick}
        handleSkillsRefClick={handleSkillsRefClick}
        handleContactRefClick={handleContactRefClick}
      />
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
      <div ref={resumeRef}>
        <Resume />
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
