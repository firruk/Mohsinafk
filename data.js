// Portfolio Data - Updated based on latest resume

const portfolioData = {
  personalInfo: {
    name: "Mohsina Firdous Kamarudeen",
    title: "Technical Data Analyst | AI Researcher | Machine Learning Engineer",
    tagline: "IEEE/Scopus Author | TFLite Developer | Expert in Python & SQL",
    email: "mohsinafirdousk@gmail.com",
    phone: "+61 494303526",
    location: "Sydney, NSW (Full Work Rights)",
    linkedin: "linkedin.com/in/mohsina-firdous-k",
    github: "github.com/firruk",
    kaggle: "kaggle.com/mochufk",
    bio: "Technical Data Analyst with 3+ years of experience transforming complex datasets into production-ready Machine Learning solutions. Proven track record in Healthcare and Industrial sectors with 5+ peer-reviewed publications. Expert in bridging the gap between academic research and scalable business automation.",
    yearsExperience: "3+",
    publicationsCount: 5,
    projectsCount: 10
  },

  publications: [
    {
      id: 1,
      title: "Intelligent Fault Diagnosis of Rotating Machinery Using Deep Learning Algorithms",
      journal: "IEEE/Scopus Indexed",
      year: 2024,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Comparative analysis of CNN, LSTM architectures for industrial predictive maintenance using SpectraQuest MFS platform.",
      link: "https://www.researchgate.net/publication/384874362",
      tags: ["Deep Learning", "CNN", "LSTM", "Predictive Maintenance"]
    },
    {
      id: 2,
      title: "Machine Learning based Financial Management Mobile Application to enhance College Students' Financial Literacy",
      journal: "IEEE Conference",
      year: 2023,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Research on ML integration in mobile solutions for enhancing financial literacy among college students.",
      link: "#",
      tags: ["Machine Learning", "Mobile App", "Flutter", "Financial Literacy"]
    },
    {
      id: 3,
      title: "An Advanced Mobile Application Powered with Machine Learning to Provide Improved Healthcare Services",
      journal: "Scopus Indexed",
      year: 2023,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Research on ML integration in healthcare delivery systems through mobile applications.",
      link: "#",
      tags: ["Healthcare", "Machine Learning", "Mobile Development"]
    },
    {
      id: 4,
      title: "Performance Analysis of Machine Learning and Deep Learning Techniques in Diagnosing Imbalance Using Machine Fault Simulator",
      journal: "International Journal of Engineering Trends and Technology",
      year: 2024,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Case study on industrial fault detection optimization using ML and DL techniques.",
      link: "#",
      tags: ["Machine Learning", "Deep Learning", "Fault Diagnosis"]
    },
    {
      id: 5,
      title: "Comparison Analysis of ANN and XGBoost Algorithm with WPD in exploring the application of AI in condition monitoring",
      journal: "Scopus Indexed",
      year: 2024,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Application research for oil and gas industries using ANN, XGBoost, and Wavelet Packet Decomposition.",
      link: "#",
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
      ]
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
      ]
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
      ]
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
      ]
    },
    {
      id: 5,
      title: "Investment Forecast Model",
      description: "Hackathon-winning machine learning model for investment forecasting with exceptional RMSLE score of 0.0409.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas"],
      year: "2023",
      category: "Finance",
      highlights: [
        "RMSLE: 0.0409",
        "First place winner",
        "Production ready"
      ]
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
      degree: "Bachelor of Science (Honours)",
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
