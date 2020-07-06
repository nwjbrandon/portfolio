import React from 'react';
import Container from 'components/Container';

import GovTechImage from 'assets/images/govtech.png';
import HodlnautImage from 'assets/images/hodlnaut.png';
import NUSImage from 'assets/images/nus.jpg';
import InrovoImage from 'assets/images/inrovo.jpg';
import FinesseImage from 'assets/images/finesse.png';
import EstatesImage from 'assets/images/estates.jpg';
import './Experiences.scss';

const Experiences: React.FC = () => {
  return (
    <Container>
      <div className="experiences__container">
        <div className="experiences__header">My Experiences</div>

        <div className="experiences__job">
          <div>
            <img
              alt="GovTech"
              className="experiences__job--img"
              src={GovTechImage}
            />
          </div>
          <div>
            <div className="experiences__job--header">
              Government Technology Agency (GovTech)
            </div>
            <div className="experiences__job--description">
              <div>
                Natural Language Processing Intern | Jan 2020 - July 2020
              </div>
              <ul>
                <li>Analyze chatbot dataset using PyTorch and Scikit Learn</li>
                <li>
                  Developed dashboard to visualize analysis in ReactJS, Flask,
                  MongoDB, Docker, and Kubernetes
                </li>
                <li>
                  Implemented scalable pipeline using Spark to run the analysis
                  as ETL jobs
                </li>
                <li>
                  Created mockups and conducted user testing for dashboard with
                  using AdobeXD
                </li>
                <li>
                  Crawled website periodically to update database with latest
                  information
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img alt="NUS" className="experiences__job--img" src={NUSImage} />
          </div>
          <div>
            <div className="experiences__job--header">
              National University of Singapore
            </div>
            <div className="experiences__job--description">
              <div>
                Student Discussion Leader for CS1010 | Aug 2019 - Nov 2019
              </div>
              <ul>
                <li>
                  Facilitated tutorial discussions to reinforce C programming
                  concepts for students
                </li>
                <li>
                  Graded programming lab assignments with feedback for
                  improvements
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img
              alt="Holdnaut"
              className="experiences__job--img"
              src={HodlnautImage}
            />
          </div>
          <div>
            <div className="experiences__job--header">Hodlnaut</div>
            <div className="experiences__job--description">
              <div>Software Developer Intern | May 2019 - July 2019</div>
              <ul>
                <li>
                  Developed website to hold and invest cryptocurrencies in
                  ReactJS, ExpressJS and RethinkDB
                </li>
                <li>
                  Integrated end to end testing with CypressJS on GitLab CI and
                  CD pipeline
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img alt="NUS" className="experiences__job--img" src={NUSImage} />
          </div>
          <div>
            <div className="experiences__job--header">
              National University of Singapore
            </div>
            <div className="experiences__job--description">
              <div>Research Assistant | Nov 2018 - Mar 2019</div>
              <ul>
                <li>
                  Processed large amount of unstructured data with Pandas and
                  SQLite for social trend analysis
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img
              alt="Inrovo"
              className="experiences__job--img"
              src={InrovoImage}
            />
          </div>
          <div>
            <div className="experiences__job--header">Inrovo</div>
            <div className="experiences__job--description">
              <div>Robotics Software Intern | Dec 2018 - Dec 2018</div>
              <ul>
                <li>
                  Implemented PID with Robotic Operating System on mobile robot
                  to navigate to goal
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img
              alt="Finesse Digital"
              className="experiences__job--img"
              src={FinesseImage}
            />
          </div>
          <div>
            <div className="experiences__job--header">Finesse Digital</div>
            <div className="experiences__job--description">
              <div>Software Developer Intern | May 2018 - Jul 2018</div>
              <ul>
                <li>
                  Automated CI and CD pipeline on with Ansible and Jenkins
                </li>
                <li>
                  Developed website to assist in financial investments in
                  NuxtJS, Django, and PostgreSQL
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="experiences__job">
          <div>
            <img
              alt="6Estates"
              className="experiences__job--img"
              src={EstatesImage}
            />
          </div>
          <div>
            <div className="experiences__job--header">6Estates</div>
            <div className="experiences__job--description">
              <div>Data Crawling Engineer Intern | Feb 2018 - May 2018</div>
              <ul>
                <li>
                  Crawled websites and endpoints for market analysis in
                  Javascript
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Experiences;
