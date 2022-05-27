const Introduction = {
    en: "I am a final year undergraduate at the National University of Singapore (NUS). I am pursuing a degree in Computer Engineering with a specialization in Robotics. My interests are in AI, Robotics, and IoT. I was a teacher assistant for CG4002 Teaching Asistant AY2021/2022  Semester 2, CG4002 Teaching Assistant AY2021/2022 Semester 1, and CS1010 Teaching Assistant AY2019/2020 Semester 1. I am also a NUS Merit Scholarship holder."
}

const Experiences = [
    {
        en: {
            title: "Alglorithm Engineer Intern (NLP) at Shopee\nDec 2021 - Present",
            description: "TBD"
        },
    },
    {
        en: {
            title: "AI Developer Intern at Augmentus\nMay 2021 - Sep 2021",
            description: "Optimized inference speed of machine learning models on Jetson platform to run 3 times faster\nDeveloped concurrent modules to control robot, run model inference, and stream images to device via TCP\nFinetuned hyper-parameters and data augmentation steps to improve models inference on smaller dataset\nIntegrated model training with AWS to automate the training process with 70% cost savings"
        }
    },
    {
        en: {
            title: "System Engineer (IoT) Intern at GovTech\nDec 2020 - March 2021",
            description: "Researched and evaluated different state-of-art deep learning models to estimate crowd count\nCreated training dataset from video footage on taget environment to finetune machine learning models\nIntegrated machine learning model with Docker on Jetson Platform to operate in the server room"
        }
    },
    {
        en: {
            title: "Data Analytics/Natural Language Processing Intern at GovTech\nJan 2020 - Jul 2020",
            description: "Build and analyze NLP models to improve chatbot dataset from multiple government agencies\nDeveloped dashboard to visualize analysis from NLP models and integrate with Google DialogFlow APIs\nCreated scripts to automate deployment of dashboard using Docker and Kubernetes on AWS"
        }
    },
    {
        en: {
            title: "Software Developer Intern at Hodlnaut\nMay 2019 - Jul 2019",
            description: "Developed APIs and improved user interface for users to deposit and invest in cryptocurrencies\nImplemented end to end testing and integrated into deployment pipeline for continuous testing"
        }
    },
]

const Projects = [
    {
        en: {
            title: "CG4001 B. Eng. Dissertation (Teleoperate robotic arm via 3D pose estimation)\nAug 2021 - Present",
            description: "Trained Graph Convolutional Network models in PyTorch for 3D pose estimation of upper body\nCreated robot simulation with Unity Engine to teleoperate a robotic arm with the 3D pose information"
        }
    },
    {
        en: {
            title: "CG4002 Computer Engineering Capstone Project (Create wearable devices to classify dance moves)\nJan 2021 - May 2021",
            description: "Performed time and frequency domain feature engineering on time series IMU data in pre-processing steps\nTrained machine learning model in PyTorch on extracted features to classify dance moves with 97% accuracy"
        }
    },
    {
        en: {
            title: "Sixth Sense (Increase digital presence of Bengkala for experiential tourism)\nJan 2019 - Aug 2019",
            description: "Led a group of 11 students for overseas community service project to promote experiential tourism in Bengkala\nOrganized and coordinated project plans, finances, and logistics with a student group in Indonesia\nDeveloped website and deployed on DigitalOcean for the community to update and share stories of themselves"
        }
    },
    {
        en: {
            title: "",
            description: ""
        }
    },
]

const Awards = [
    {
        en: {
            title: "Commendation Letter For CG4002 \nDec 2021",
            description: "NUS"
        }
    },
    {
        en: {
            title: "'Foundations In AI\nAug 2020'",
            description: "AI Singapore"
        }
    },
    {
        en: {
            title: "Youth Expedition Project Leaders Training Course YMCA Of Singapore\nJan 2019",
            description: "Youth Corps Singapore"
        }
    },
    {
        en: {
            title: "NUS Merit Scholarship \nJul 2018",
            description: "NUS"
        }
    },
]

export default {
    Introduction,
    Experiences,
    Projects,
    Awards
}