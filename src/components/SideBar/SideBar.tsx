import React from 'react';
import Azusa from 'assets/images/azusa.png';

import './SideBar.scss';

interface SideBarInterface {
  handleExperiencesRefClick: any;
  handleAboutRefClick: any;
  handleEducationRefClick: any;
  handleProjectsRefClick: any;
  handleCertificationsRefClick: any;
  handleSkillsRefClick: any;
  handleContactRefClick: any;
}

const SideBar: React.FC<SideBarInterface> = ({
  handleExperiencesRefClick,
  handleAboutRefClick,
  handleEducationRefClick,
  handleProjectsRefClick,
  handleCertificationsRefClick,
  handleSkillsRefClick,
  handleContactRefClick
}) => {
  return (
    <div className="sidebar__container">
      <img className="sidebar__profile" alt="Azusa" src={Azusa} />
      <div onClick={handleAboutRefClick} className="sidebar__header">
        About
      </div>
      <div onClick={handleExperiencesRefClick} className="sidebar__header">
        Experiences
      </div>
      <div onClick={handleEducationRefClick} className="sidebar__header">
        Education
      </div>
      <div onClick={handleProjectsRefClick} className="sidebar__header">
        Projects
      </div>
      <div onClick={handleCertificationsRefClick} className="sidebar__header">
        Certifications
      </div>
      <div onClick={handleSkillsRefClick} className="sidebar__header">
        Skills
      </div>
      <div onClick={handleContactRefClick} className="sidebar__header">
        Contact
      </div>
    </div>
  );
};

export default SideBar;
