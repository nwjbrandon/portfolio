const ShortIntroduction: { [id: string]: string }[] = [
  {
    en: 'Hi, I am Brandon!',
    jp: 'こんにちは、ブランドンです！',
  },
  {
    en: 'I am a Software Engineer.',
    jp: '私はソフトウェアエンジニアです。',
  },
  {
    en: 'My interests are in NLP, RecSys, and CV.',
    jp: '私の興味はNLP、RecSys、CVにあります。',
  },
  {
    en: 'I like Anime and Hololive.',
    jp: '私はアニメとホロライブが好きです。',
  },
];

const Sections: { [id: string]: { [id: string]: string } } = {
  experiences: {
    en: 'Experiences',
    jp: '職歴',
  },
  projects: {
    en: 'Projects',
    jp: 'プロジェクト',
  },
  awards: {
    en: 'Awards',
    jp: '賞と栄誉',
  },
};

const Introduction: { [id: string]: string } = {
  en: 'A techie with industrial experience in implementing state-of-art algorithms, building machine learning models, deploying models at scale in startups, public and government agencies to create data-driven products and decision.\n\nI am graduated from National University of Singapore with a BEng in Computer Engineering and am currently working on the AICET project as a full-time Software Engineer under AISG, Singapore.',
  jp: 'A techie with industrial experience in implementing state-of-art algorithms, building machine learning models, deploying models at scale in startups, public and government agencies to create data-driven products and decision.\n\nI am graduated from National University of Singapore with a BEng in Computer Engineering and am currently working on the AICET project as a full-time Software Engineer under AISG, Singapore.',
};

const Experiences: { [id: string]: { [id: string]: string } }[] = [
  {
    en: {
      title: 'Alglorithm Engineer Intern (NLP) at Shopee\nDec 2021 - May 2022',
      description:
        'Improved text clustering algorithm to iteratively reduce outliers\nPerformed model distillation on transformers to reduce the model size',
    },
    jp: {
      title:
        'Alglorithm Engineer Intern (NLP) at Shopee\n2021年12月 - 2022年5月',
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
    jp: {
      title: 'AI Developer Intern at Augmentus\n2021年5月 - 2021年9月',
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
    jp: {
      title: 'System Engineer (IoT) Intern at GovTech\n2020年12月 - 2021年3月',
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
    jp: {
      title:
        'Data Analytics/Natural Language Processing Intern at GovTech\n2020年1月 - 2020年7月',
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
    jp: {
      title: 'Software Developer Intern at Hodlnaut\n2019年5月 - 2019年7月',
      description:
        'Developed Node JS APIs and ReactJS user interface to invest in cryptocurrencies\nBuilt end-to-end testing pipeline for continuous testing and deployment',
    },
  },
];

const Projects: { [id: string]: { [id: string]: string } }[] = [
  {
    en: {
      title:
        'CG4001 B. Eng. Dissertation (Teleoperate robotic arm via 3D pose estimation)\nAug 2021 - Apr 2022',
      description:
        'Trained pose estimation models to estimate 3D hand and bosy poses from images\nIntegrated pose estimation models to remotely control robotic arm',
    },
    jp: {
      title:
        'CG4001 B. Eng. Dissertation (Teleoperate robotic arm via 3D pose estimation)\n2021年8月 - 2022年4月',
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
    jp: {
      title:
        'CG4002 Computer Engineering Capstone Project (Create wearable devices to classify dance moves)\n2021年1月 - 2021年5月',
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
    jp: {
      title:
        'Sixth Sense (Increase digital presence of Bengkala for experiential tourism)\n2019年1月 - 2019年8月',
      description:
        'Led a group for a community service project to promote experiential tourism\nDeveloped website for the community to update and share stories of themselves',
    },
  },
];

const Awards: { [id: string]: { [id: string]: string } }[] = [
  {
    en: {
      title: 'NUS Hack&Roll Winner\nJan 2022',
      description:
        'Awarded winning project on teleoperating robotics arm with pose estimation models',
    },
    jp: {
      title: 'NUS Hack&Roll Winner\n2022年1月',
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
    jp: {
      title:
        'CG4002 Computer Engineering Capstone Project Commendation Letter\n2021年12月',
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
    jp: {
      title: 'NUS Merit Scholarship\n2018年7月',
      description:
        'Awarded for demonstrating excellent academic, co-curricular activities, and leadership qualities',
    },
  },
];

export default {
  ShortIntroduction,
  Sections,
  Introduction,
  Experiences,
  Projects,
  Awards,
};
