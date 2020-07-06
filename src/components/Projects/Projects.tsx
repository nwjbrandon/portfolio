import React from 'react';
import Container from 'components/Container';
import './Projects.scss';

const Projects: React.FC = () => {
  return (
    <Container>
      <div className="projects__container">
        <div className="projects__header">My Projects</div>

        <div className="projects__work">
          <div>
            <div className="projects__work--header">Project Bali</div>
            <div className="projects__work--description">
              <div>
                Student Leader and Project Director | Jan 2019 - Aug 2019
              </div>
              <ul>
                <li>
                  Led team of 11 for overseas community project overseeing
                  recruitment, logistics, and planning
                </li>
                <li>
                  Developed website to promote experiential tourism in ReactJS,
                  ExpressJS, and MySQL on DigitalOcean
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
