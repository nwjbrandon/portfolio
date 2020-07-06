import React from 'react';
import Container from 'components/Container';
import './Skills.scss';

const Skills: React.FC = () => {
  return (
    <Container>
      <div className="skills__container">
        <div className="skills__header">My Skills</div>

        <div className="skills__tag">
          <div className="skills__tag--header">Web Development</div>
          <div>
            <div className="skills__tag--chip">ReactJS</div>
            <div className="skills__tag--chip">Flask</div>
            <div className="skills__tag--chip">MySQL</div>
            <div className="skills__tag--chip">NoSQL</div>
            <div className="skills__tag--chip">Redis</div>
            <div className="skills__tag--chip">Kubernetes</div>
            <div className="skills__tag--chip">Docker</div>
            <div className="skills__tag--chip">AWS</div>
          </div>
        </div>

        <div className="skills__tag">
          <div className="skills__tag--header">Data Science</div>
          <div className="skills__tag--container">
            <div className="skills__tag--chip">PyTorch</div>
            <div className="skills__tag--chip">TensorFlow</div>
            <div className="skills__tag--chip">SciKit-Learn</div>
            <div className="skills__tag--chip">Spark</div>
          </div>
        </div>

        <div className="skills__tag">
          <div className="skills__tag--header">Robotics</div>
          <div className="skills__tag--container">
            <div className="skills__tag--chip">ROS</div>
          </div>
        </div>

        <div className="skills__tag">
          <div className="skills__tag--header">Programming Language</div>
          <div className="skills__tag--container">
            <div className="skills__tag--chip">Python</div>
            <div className="skills__tag--chip">Javascript</div>
            <div className="skills__tag--chip">C++</div>
            <div className="skills__tag--chip">Java</div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
