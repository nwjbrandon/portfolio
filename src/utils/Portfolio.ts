const ShortIntroduction: { [id: string]: string }[] = [
  {
    en: 'Hi, I am Brandon!',
  },
  {
    en: 'I am a SWE at AI Singapore.',
  },
  {
    en: 'I am a Master student at NUS.',
  },
  {
    en: 'I like to travel in Japan.',
  },
];

const Sections: { [id: string]: { [id: string]: string } } = {
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

const Introduction: { [id: string]: string } = {
  en: 'I have industrial experience in full-stack development and machine learning. I also have experience in managing projects and gathering user requirements. I am comfortable programming in JavaScript, C++, Go, and Java. My main programming language is Python.',
};

const Experiences: { [id: string]: { [id: string]: string } }[] = [
  {
    en: {
      title: 'Software Engineer at AI Singapore\nJun 2022 - Present',
      description:
        'Developed scalable computer vision algorithms to support online exam grading\nTrained OCR models on self-annotated handwriting datasets\nDeployed AWS resources with Terraform compliant with NUS IT security \nDemonstrated product features and gathered feedback and requirements',
    },
  },
  {
    en: {
      title: 'Algorithm Engineer Intern at Shopee\nDec 2021 - May 2022',
      description:
        'Extracted embeddings to cluster text with similar semantics in batches\nPerformed model distillation to learn model weights with fewer parameters',
    },
  },
  {
    en: {
      title: 'AI Developer Intern at Augmentus\nMay 2021 - Sep 2021',
      description:
        'Trained object detection models to locate the object position in the image\nCreated training pipeline on AWS to queue and train models',
    },
  },
  {
    en: {
      title: 'System Engineer Intern at GovTech\nDec 2020 - March 2021',
      description:
        'Trained crowd-counting model to estimate the number of people in an image\nDeployed model on Jetson device to estimate crowd count from security cameras',
    },
  },
  {
    en: {
      title:
        'Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020',
      description:
        'Developed dashboard to integrate NLP models for visualizing and cleaning dataset\nDeployed dashboard on Kubernetes cluster on AWS',
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

const Awards: { [id: string]: { [id: string]: string } }[] = [
  {
    en: {
      title: 'Deans List AY2021/2022 Semester 2\nJuly 2022',
      description:
        'Attained Dean’s List for top 5% in academic achievement in cohort',
    },
  },
  {
    en: {
      title: 'NUS Hack&Roll Winner\nJan 2022',
      description:
        'Awarded winning project out of 206 teams in NUS Hack&Roll',
    },
  },
  {
    en: {
      title:
        'CG4002 Computer Engineering Capstone Project Commendation Letter\nDec 2021',
      description:
        'Received commendation letter out of 92 students for capstone project',
    },
  },
  {
    en: {
      title: 'NUS Merit Scholarship\nJul 2018',
      description:
        'Awarded NUS Merit Scholarship for outstanding academics, ccas, and leadership',
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
