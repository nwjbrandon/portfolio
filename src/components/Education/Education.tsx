import React from 'react';
import Container from 'components/Container';
import NUSImage from 'assets/images/nus.jpg';
import ACSIImage from 'assets/images/acsi.jpg';
import './Education.scss';

const Education: React.FC = () => {
  return (
    <Container>
      <div className="education__container">
        <div className="education__header">My Education</div>

        <div className="education__school">
          <div>
            <img alt="NUS" className="education__school--img" src={NUSImage} />
          </div>
          <div>
            <div className="education__school--header">
              National University of Singapore
            </div>
            <div className="education__school--description">
              <div>Computer Engineering | Aug 2018 - July 2022</div>
              <ul>
                <li>Tech Head of NUS Developer Student Club</li>
                <li>Project Manager of NUS Prototyping Club</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education__school">
          <div>
            <img
              alt="ACSI"
              className="education__school--img"
              src={ACSIImage}
            />
          </div>
          <div>
            <div className="education__school--header">
              Anglo-Chinese School (Independent)
            </div>
            <div className="education__school--description">
              <div>IB Diploma Programme | Jan 2010 - Dec 2015</div>
              <ul>
                <li>Student of Advanced Science Program</li>
                <li>Member of Member of Science Research Challenge</li>
                <li>Student of Accelerated Science Class</li>
                <li>Member of Member of Mathematics Competition</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Education;
