const Sections = {
  experiences: {
    en: 'Experiences',
  },
  projects: {
    en: 'Projects',
  },
  awards: {
    en: 'Awards',
  },
};

const Introduction = {
  en: 'A techie with industrial experience in implementing state-of-art algorithms, building machine learning models, deploying models at scale in startups, public and government agencies to create data-driven products and decision.\n\nI am graduated from National University of Singapore with a BEng in Computer Engineering and am currently working on the AICET project as a full-time Software Engineer under AISG, Singapore.',
};

const Experiences = [
  {
    en: {
      title: 'Alglorithm Engineer Intern (NLP) at Shopee\nDec 2021 - May 2022',
      description:
        'Improved text clustering algorithm to iteratively reduce outliers\nPerformed model distillation on transformers to reduce the model size',
    },
  },
  {
    en: {
      title: 'AI Developer Intern at Augmentus\nMay 2021 - Sep 2021',
      description:
        'Trained and quantized machine learning models to deploy on Jetson AGX\nCreated scalable and severless pipeline on AWS for users to train the models',
    },
  },
  {
    en: {
      title: 'System Engineer (IoT) Intern at GovTech\nDec 2020 - March 2021',
      description:
        'Created training dataset from video footage on target environment\nTrained deep learning models to estimate crowd count on Jetson Nano',
    },
  },
  {
    en: {
      title:
        'Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020',
      description:
        'Built NLP models to clean and improve chatbot dataset\nImplemented dashboard in ReactJS and Flask to visualize results\nDeployed microservices on Kubernetes cluster in AWS',
    },
  },
  {
    en: {
      title: 'Software Developer Intern at Hodlnaut\nMay 2019 - Jul 2019',
      description:
        'Developed Node JS APIs and ReactJS user interface to invest in cryptocurrencies\nBuilt end-to-end testing pipeline for continuous testing and deployment',
    },
  },
];

const Projects = [
  {
    en: {
      title:
        'CG4001 B. Eng. Dissertation (Teleoperate robotic arm via 3D pose estimation)\nAug 2021 - Apr 2022',
      description:
        'Trained pose estimation models to estimate 3D hand and bosy poses from images\nIntegrated pose estimation models to remotely control robotic arm',
    },
  },
  {
    en: {
      title:
        'CG4002 Computer Engineering Capstone Project (Create wearable devices to classify dance moves)\nJan 2021 - May 2021',
      description:
        'Performed time and frequency domain feature engineering on time series data\nTrained machine learning model in PyTorch to classify dance moves',
    },
  },
  {
    en: {
      title:
        'Sixth Sense (Increase digital presence of Bengkala for experiential tourism)\nJan 2019 - Aug 2019',
      description:
        'Led a group for a community service project to promote experiential tourism\nDeveloped website for the community to update and share stories of themselves',
    },
  },
];

const Awards = [
  {
    en: {
      title: 'NUS Hack&Roll Winner\nJan 2022',
      description:
        'Awarded winning project on teleoperating robotics arm with pose estimation models',
    },
  },
  {
    en: {
      title:
        'CG4002 Computer Engineering Capstone Project Commendation Letter\nDec 2021',
      description:
        'Awarded outstanding performance in capstone project among a class of 92 students.',
    },
  },
  {
    en: {
      title: 'NUS Merit Scholarship\nJul 2018',
      description:
        'Awarded for demonstrating excellent academic, co-curricular activities, and leadership qualities',
    },
  },
];

export default {
  Sections,
  Introduction,
  Experiences,
  Projects,
  Awards,
};
