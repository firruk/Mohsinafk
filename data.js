// Portfolio Data - Updated based on latest resume

const portfolioData = {
  personalInfo: {
    name: "Mohsina Firdous Kamarudeen",
    title: "Data Analyst · Machine Learning Engineer · Data Scientist · Tech Consultant",
    tagline: "Python & SQL · ML & AI · Analytics & Research · Sydney-based, full work rights in Australia",
    email: "mohsinafirdousk@gmail.com",
    phone: "+61 494303526",
    location: "Sydney, NSW (Full Work Rights in Australia)",
    linkedin: "linkedin.com/in/mohsina-firdous-k",
    github: "github.com/firruk",
    kaggle: "kaggle.com/mochufk",
    bio: "I help teams turn data into decisions. With 3+ years across data analysis, machine learning, and applied research, I've delivered in healthcare, finance, and industrial settings—from dashboards and predictive models to peer-reviewed publications. I'm equally at home in hands-on analytics, ML engineering, data science, and technical consulting. Based in Sydney with full work rights; open to full-time, contract, and consulting roles.",
    yearsExperience: "3+",
    publicationsCount: 5,
    projectsCount: 10,
    rolesOpenTo: "Machine Learning · Data Analysis · Data Science · Tech & Data Consulting · Research",
    heroLabel: "Open to Data, ML & Tech roles"
  },

  publications: [
    {
      id: 1,
      title: "Intelligent Fault Diagnosis of Rotating Machinery Using Deep Learning Algorithms",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "",
      abstract: "Comparative analysis of CNN, LSTM architectures for industrial predictive maintenance using SpectraQuest MFS platform.",
      link: "https://ieeexplore.ieee.org/document/10963102",
      tags: ["Deep Learning", "CNN", "LSTM", "Predictive Maintenance"]
    },
    {
      id: 2,
      title: "Machine Learning based Financial Management Mobile Application to enhance College Students' Financial Literacy",
      journal: "SCOPUS indexed",
      year: 2023,
      authors: "",
      abstract: "Research on ML integration in mobile solutions for enhancing financial literacy among college students.",
      link: "https://files.eric.ed.gov/fulltext/ED654467.pdf",
      tags: ["Machine Learning", "Mobile App", "Flutter", "Financial Literacy"]
    },
    {
      id: 3,
      title: "An Advanced Mobile Application Powered with Machine Learning to Provide Improved Healthcare Services",
      journal: "Journal of Engineering and Applied Sciences Technology",
      year: 2022,
      authors: "",
      abstract: "Research on ML integration in healthcare delivery systems through mobile applications.",
      link: "https://onlinescientificresearch.com/articles/an-advanced-mobile-application-powered-with-machine-learning-to-provide-improved-healthcare-services.pdf",
      tags: ["Healthcare", "Machine Learning", "Mobile Development"]
    },
    {
      id: 4,
      title: "Performance Analysis of Machine Learning and Deep Learning Techniques in Diagnosing Imbalance Using Machine Fault Simulator",
      journal: "International Journal of Engineering Trends and Technology",
      year: 2024,
      authors: "",
      abstract: "Case study on industrial fault detection optimization using ML and DL techniques.",
      link: "https://ijettjournal.org/archive/ijett-v73i1p123",
      tags: ["Machine Learning", "Deep Learning", "Fault Diagnosis"]
    },
    {
      id: 5,
      title: "Comparison Analysis of ANN and XGBoost Algorithm with WPD in exploring the application of AI in condition monitoring",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "",
      abstract: "Application research for oil and gas industries using ANN, XGBoost, and Wavelet Packet Decomposition.",
      link: "Comparison Analysis of ANN and XGBoost Algorithm with WPD in exploring the application of Artificial Intelligence in condition monitoring for oil and gas industries",
      tags: ["ANN", "XGBoost", "WPD", "Condition Monitoring"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Dental Radiograph Classification & Segmentation",
      description: "React Native & Flask mobile application for real-time dental radiograph classification and Mask R-CNN segmentation with 92% accuracy across 10,000+ images.",
      tech: ["React Native", "Flask", "Mask R-CNN", "Detectron2", "Python"],
      year: "2025",
      category: "Medical AI",
      highlights: [
        "92% classification accuracy",
        "88% mAP for tooth segmentation",
        "Dynamic report editor for dentists"
      ],
      link:"https://github.com/firruk/dental_app_emergent.git"
    },
    {
      id: 2,
      title: "LLM-Powered Research Generator",
      description: "Automated research synthesis tool using Claude AI to transform PPT and poll data into validated papers in under 3 minutes.",
      tech: ["Claude AI", "Python", "LLM", "NLP"],
      year: "2025",
      category: "Generative AI",
      highlights: [
        "Synthesizes data in < 3 minutes",
        "Automated paper validation",
        "Research productivity tool"
      ],
      link:""

    },
    {
      id: 3,
      title: "IoT Sensor Detection & Monitoring",
      description: "Azure-based IoT system streaming real-time telemetry data for industrial manufacturing monitoring and anomaly detection.",
      tech: ["Azure IoT Hub", "Power BI", "Python", "SQL"],
      year: "2024",
      category: "Industrial AI",
      highlights: [
        "Real-time telemetry streaming",
        "Predictive anomaly detection",
        "Interactive BI dashboards"
      ],
      link:""

    },
    {
      id: 4,
      title: "Predictive Maintenance System",
      description: "Deep learning system for industrial fault diagnosis using CNN and LSTM on SpectraQuest MFS platform achieving 94% accuracy.",
      tech: ["Python", "TensorFlow", "LabVIEW", "NI DAQ", "PCA/WPD"],
      year: "2024",
      category: "Industrial AI",
      highlights: [
        "94% fault classification",
        "18% performance boost via WPD",
        "Processed 1,000+ vibration samples"
      ],
      link:""

    },
    {
      id: 5,
      title: "Student Engagement Analysis (365 machine learning challenge)",
      description: "Analyzed and visualized data on student engagement for 35,000+ students using SQL, identifying key areas for improvement from January to October 2022. Built a Python-based machine learning model with 97% accuracy to predict student engagement, leading to new strategies to improve engagement.",
      tech: ["Python", "Scikit-learn", "Machine learning", "Pandas","SQL"],
      year: "2022",
      category: "Data Analysis",
      highlights: [
        "RMSLE: 0.0409",
        "First place winner",
        "Production ready"
      ],
      link:"https://github.com/firruk/365_challenge_machine_learning/blob/main/365%20challenge%20-%20Copy/365_DATA_CHALLENGE_MACHINE_LEARNING.ipynb"

    },
    {
      id: 6,
      title: "Investment Forecast Model",
      description: "Hackathon-winning machine learning model for investment forecasting with exceptional RMSLE score of 0.0409.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      year: "2023",
      category: "Finance",
      highlights: [
        "RMSLE: 0.0409",
        "First place winner",
        "Production ready"
      ],
      link:"https://www.kaggle.com/code/mochufk/al-majlis-ai-hackathon-investment-challenge"

    }
  ],

  skills: {
    "Machine Learning & AI": [
      "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "YOLOv8", 
      "Faster R-CNN", "Mask R-CNN", "Detectron2", "ResNet", "AlexNet", 
      "CNN", "LSTM", "Predictive Modeling"
    ],
    "Data Analysis & Programming": [
      "Python (Pandas, NumPy)", "SQL (MySQL, PostgreSQL)", "Statistical Analysis", 
      "Feature Engineering", "PCA", "WPD", "Excel (Advanced)", "LabVIEW"
    ],
    "Data Visualization & BI": [
      "Tableau", "Power BI", "Dashboard Design", "Automated Reporting", "Data Storytelling"
    ],
    "Development & Platforms": [
      "React Native", "Flutter", "Flask", "Laravel", "RESTful APIs", 
      "Microsoft Azure", "Docker", "CVAT", "Git/GitHub", "Hostinger"
    ]
  },

  experience: [
    {
      id: 1,
      role: "AI Researcher & ML Engineer",
      company: "Private Research Project (Clinical Collaboration)",
      location: "Sydney, NSW (Remote/Muscat)",
      duration: "Jan 2025 - Present",
      description: "Technical lead for an intelligent system presented at an AI Orthodontics conference in Saudi Arabia.",
      achievements: [
        "Developed Mask R-CNN pipelines for tooth segmentation achieving 88% mAP",
        "Deployed React Native & Flask app with 92% accuracy on 10,000+ images",
        "Built LLM-powered research generator reducing synthesis time to < 3 mins",
        "Managed CVAT pipelines, increasing dataset integrity by 40%"
      ]
    },
    {
      id: 2,
      role: "Technical Research Assistant",
      company: "National University of Science and Technology",
      location: "Muscat, Oman",
      duration: "Jan 2024 - Dec 2024",
      description: "Conducted research in intelligent fault diagnosis and Digital Twin technologies.",
      achievements: [
        "Co-authored 3+ peer-reviewed IEEE/Scopus publications",
        "Achieved 94% fault classification accuracy by benchmarking CNN/LSTM",
        "Improved model performance by 18% using PCA and WPD feature extraction",
        "Processed 1,000+ vibration samples using LabVIEW and NI DAQ"
      ]
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "IRTS Oman",
      location: "Muscat, Oman",
      duration: "Jul 2023 - Jun 2024",
      description: "Full-stack development and IoT systems architecture.",
      achievements: [
        "Architected IoT sensor system using Azure IoT Hub and Power BI",
        "Optimized MySQL schemas, reducing query response times by 45%",
        "Developed interactive robots and chatbots using Python and Computer Vision",
        "Integrated LLMs (ChatGPT) to increase dev efficiency by 30%"
      ]
    },
    {
      id: 4,
      role: "Junior Analyst",
      company: "Fabrication Industry Services Co LLC",
      location: "Oman",
      duration: "Apr 2021 - Jun 2023",
      description: "Financial data analysis and KPI visualization for multi-branch operations.",
      achievements: [
        "Designed 10+ Tableau dashboards to visualize financial KPIs",
        "Analyzed multi-branch data across 7 locations using SQL and Tally ERP",
        "Reduced company tax liability by 10% through strategic VAT analysis"
      ]
    }
  ],

  education: [
    {
      degree: "Bachelor of Science (Honours) Information Technology Management for Business",
      field: "Information Technology Management for Business",
      institution: "National University of Science and Technology, Oman",
      year: "2018 - 2022"
    }
  ],

  certifications: [
    "IELTS Academic Overall Band Score 8.0",
    "SQL - MySQL for Data Analytics and Business Intelligence",
    "Python for Research",
    "Linear Algebra and Feature Selection",
    "Statistics Foundations"
  ],

  awards: [
    "3x Awards of Excellence (Meritorious Performance)",
    "First Prize - Best Technical Project Competition",
    "Hackathon Winner - Investment Forecast Model (RMSLE: 0.0409)"
  ]
};
