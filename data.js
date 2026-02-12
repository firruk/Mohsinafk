// Portfolio Data - Edit this file to update your content

const portfolioData = {
  personalInfo: {
    name: "Mohsina Firdous Kamarudeen",
    title: "AI Researcher | Deep Learning • Computer Vision • Data Science",
    tagline: "IEEE/Scopus Author | TFLite Developer",
    email: "mohsinafirdousk@gmail.com",
    phone: "+968 95095909",
    location: "Muscat, Oman",
    linkedin: "linkedin.com/in/mohsina-firdous-k",
    github: "github.com/firruk",
    kaggle: "kaggle.com/mochufk",
    bio: "AI researcher and data science enthusiast with 3+ years of hands-on experience applying deep learning to medical imaging, industrial systems, and mobile applications. Co-authored 5+ peer-reviewed publications (IEEE, Scopus) in fault diagnosis, digital twins, and dental radiograph analysis. Passionate about making AI usable, deployable, and impactful.",
    yearsExperience: 3,
    publicationsCount: 5,
    projectsCount: 8
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
      journal: "IEEE Conference",
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
      title: "Dental Radiograph Classification System",
      description: "Cross-platform mobile application using Flutter and TensorFlow Lite for real-time dental radiograph classification (OPG, cephalometric, bitewing) with 92% accuracy.",
      tech: ["Flutter", "TensorFlow Lite", "ResNet50", "AlexNet", "Python"],
      year: "2025",
      category: "Medical AI",
      highlights: [
        "92% classification accuracy",
        "Real-time mobile inference",
        "Cross-platform deployment"
      ]
    },
    {
      id: 2,
      title: "Tooth Detection & Segmentation Pipeline",
      description: "Complete object detection pipeline using YOLOv8 and Faster R-CNN for tooth identification and FDI numbering in panoramic X-rays with 88% mAP.",
      tech: ["YOLOv8", "Faster R-CNN", "Detectron2", "Mask R-CNN", "CVAT"],
      year: "2025",
      category: "Computer Vision",
      highlights: [
        "88% mAP accuracy",
        "FDI numbering system",
        "Instance segmentation"
      ]
    },
    {
      id: 3,
      title: "Dental Chatbot Integration",
      description: "Intelligent chatbot for patient denture consultations with clinical escalation protocols, reducing staff query handling time by 35%.",
      tech: ["Flutter", "NLP", "ChatGPT API", "Laravel"],
      year: "2025",
      category: "Healthcare",
      highlights: [
        "35% time reduction",
        "Clinical escalation",
        "Patient engagement"
      ]
    },
    {
      id: 4,
      title: "Predictive Maintenance System",
      description: "Deep learning system for industrial fault diagnosis using CNN, LSTM, and hybrid models on SpectraQuest MFS platform achieving 94% accuracy.",
      tech: ["Python", "TensorFlow", "CNN", "LSTM", "LabVIEW", "NI DAQ"],
      year: "2024",
      category: "Industrial AI",
      highlights: [
        "94% fault classification",
        "Real-time monitoring",
        "Digital twin integration"
      ]
    },
    {
      id: 5,
      title: "Investment Forecast Model",
      description: "Hackathon-winning machine learning model for investment forecasting with exceptional RMSLE score of 0.0409.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Pandas", "NumPy"],
      year: "2023",
      category: "Finance",
      highlights: [
        "RMSLE: 0.0409",
        "First place winner",
        "Production ready"
      ]
    },
    {
      id: 6,
      title: "Financial Management Mobile App",
      description: "ML-powered mobile application to enhance college students' financial literacy with intelligent recommendations and tracking.",
      tech: ["Flutter", "Laravel", "MySQL", "Machine Learning"],
      year: "2023",
      category: "Mobile Development",
      highlights: [
        "Published research",
        "ML recommendations",
        "User-friendly interface"
      ]
    },
    {
      id: 7,
      title: "Healthcare Services Platform",
      description: "Advanced mobile application powered with machine learning to provide improved healthcare services and patient management.",
      tech: ["Flutter", "Machine Learning", "Laravel", "MySQL"],
      year: "2023",
      category: "Healthcare",
      highlights: [
        "ML-powered diagnostics",
        "Patient management",
        "Real-time analytics"
      ]
    },
    {
      id: 8,
      title: "Real-time Analytics Dashboard",
      description: "Interactive Power BI dashboards for real-time data analytics using Microsoft Azure services for business intelligence.",
      tech: ["Power BI", "Microsoft Azure", "SQL", "Python"],
      year: "2023",
      category: "Data Analytics",
      highlights: [
        "Real-time insights",
        "Cloud integration",
        "Business intelligence"
      ]
    }
  ],

  skills: {
    "Machine Learning & AI": [
      "TensorFlow", "Keras", "PyTorch", "Scikit-learn", "TensorFlow Lite",
      "YOLOv8", "Faster R-CNN", "Mask R-CNN", "Detectron2", "ResNet",
      "AlexNet", "CNN", "LSTM"
    ],
    "Programming & Development": [
      "Python", "Dart", "PHP", "JavaScript", "SQL", "HTML/CSS",
      "Flutter", "Laravel", "React", "LabVIEW"
    ],
    "Data Science & Analytics": [
      "Pandas", "NumPy", "Matplotlib", "Seaborn", "Tableau", "Power BI",
      "Excel", "PCA", "WPD", "Statistical Analysis"
    ],
    "Tools & Platforms": [
      "CVAT", "Postman", "Figma", "Docker", "Microsoft Azure",
      "Jupyter", "Google Colab", "Kaggle", "Git/GitHub"
    ]
  },

  experience: [
    {
      id: 1,
      role: "AI Researcher - Dental Imaging",
      company: "Private Research Project",
      location: "Muscat, Oman",
      duration: "Jan 2025 - Present",
      description: "Leading AI research in dental imaging with focus on classification, detection, and segmentation.",
      achievements: [
        "Developed cross-platform mobile app with 92% classification accuracy",
        "Built complete object detection pipeline with 88% mAP",
        "Implemented instance segmentation using Detectron2",
        "Reduced staff query handling time by 35% with chatbot integration"
      ]
    },
    {
      id: 2,
      role: "Research Assistant",
      company: "National University of Science and Technology, Oman",
      location: "Muscat, Oman",
      duration: "Jan 2024 - Dec 2024",
      description: "Conducted cutting-edge research in intelligent fault diagnosis and digital twin applications.",
      achievements: [
        "Co-authored 3+ peer-reviewed IEEE/Scopus publications",
        "Achieved 94% fault classification accuracy using deep learning",
        "Improved model performance by 18% using advanced feature engineering",
        "Led technical documentation and performance benchmarking"
      ]
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "IRTS Oman",
      location: "Muscat, Oman",
      duration: "Jul 2023 - Jun 2024",
      description: "Full-stack development of client applications with focus on mobile and web platforms.",
      achievements: [
        "Delivered 8+ projects with 98% client satisfaction rate",
        "Reduced query response time by 45% through database optimization",
        "Accelerated development cycles by 30% using LLM integration",
        "Improved team productivity by 40% through collaboration"
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
    "SQL - MySQL for Data Analytics and Business Intelligence",
    "Python for Research",
    "Linear Algebra and Feature Selection",
    "Introduction to Calculus",
    "Statistics Foundations: The Basics"
  ],

  awards: [
    "3x Awards of Excellence (Meritorious Performance)",
    "First Prize - Best Technical Project Competition",
    "Certificate of Merit - Academic Excellence",
    "Hackathon Winner - Investment Forecast Model (RMSLE: 0.0409)"
  ]
};