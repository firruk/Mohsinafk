// Portfolio Data - Versatile Tech Professional
// Optimized for: Data Analyst | ML Engineer | Data Scientist | Software Engineer | Tech Roles
// Last Updated: February 2025

const portfolioData = {
  personalInfo: {
    name: "Mohsina Firdous Kamarudeen",
    
    // VERSATILE TITLE - Can be read multiple ways
    title: "ML Engineer • Data Scientist • Software Engineer",
    tagline: "Building Production AI Systems & Data Solutions | Python • SQL • TensorFlow • Cloud",
    
    email: "mohsinafirdousk@gmail.com",
    phone: "+61 494 303 526",
    location: "Sydney, NSW, Australia",
    linkedin: "linkedin.com/in/mohsina-firdous-k",
    github: "github.com/firruk",
    portfolio: "https://firruk.github.io/Mohsinafk/",
    
  },
   
  // ============================================================================
  // PUBLICATIONS - Shows DEPTH and RESEARCH ability
  // ============================================================================
  publications: [
    {
      id: 1,
      title: "Intelligent Fault Diagnosis of Rotating Machinery Using Deep Learning Algorithms",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Comparative analysis of CNN and LSTM architectures for industrial predictive maintenance. Achieved 94% fault classification accuracy with potential to prevent $500K+ in industrial downtime through early failure detection.",
      link: "https://ieeexplore.ieee.org/document/10963102",
      tags: ["Deep Learning", "CNN", "LSTM", "Predictive Maintenance", "Industrial AI"],
      techRelevance: "Demonstrates expertise in neural network architecture design, time-series analysis, and production ML deployment for critical systems."
    },
    {
      id: 2,
      title: "Comparison Analysis of ANN and XGBoost Algorithm with WPD in exploring AI in condition monitoring",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Advanced feature engineering research using Wavelet Packet Decomposition improving model performance by 18%. Applied to oil & gas industrial monitoring systems.",
      link: "#",
      tags: ["ANN", "XGBoost", "Feature Engineering", "Signal Processing"],
      techRelevance: "Shows advanced ML techniques, feature engineering skills, and ability to optimize model performance through algorithmic innovation."
    },
    {
      id: 3,
      title: "Performance Analysis of ML and DL Techniques in Diagnosing Imbalance Using Machine Fault Simulator",
      journal: "International Journal of Engineering Trends and Technology",
      year: 2024,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Benchmarking study comparing traditional ML vs Deep Learning approaches for industrial fault detection. Practical implementation guide for manufacturing environments.",
      link: "https://ijettjournal.org/archive/ijett-v73i1p123",
      tags: ["Machine Learning", "Deep Learning", "Performance Benchmarking"],
      techRelevance: "Demonstrates systematic approach to algorithm selection and performance optimization for production systems."
    },
    {
      id: 4,
      title: "Machine Learning based Financial Management Mobile Application",
      journal: "SCOPUS Indexed",
      year: 2023,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Full-stack mobile application development integrating ML prediction models for personalized financial recommendations. Built using Flutter + Laravel + Python ML backend.",
      link: "https://files.eric.ed.gov/fulltext/ED654467.pdf",
      tags: ["Machine Learning", "Mobile Development", "Full-Stack", "Flutter"],
      techRelevance: "Shows full-stack development capability combining mobile frontend, backend APIs, and ML model integration."
    },
    {
      id: 5,
      title: "Advanced Mobile Application Powered with ML for Healthcare Services",
      journal: "Journal of Engineering and Applied Sciences Technology",
      year: 2022,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Healthcare platform integrating ML-powered diagnostic support, patient management, and telemedicine features. Focus on scalable architecture and real-world deployment.",
      link: "https://onlinescientificresearch.com/articles/an-advanced-mobile-application-powered-with-machine-learning-to-provide-improved-healthcare-services.pdf",
      tags: ["Healthcare Tech", "Machine Learning", "System Architecture", "Mobile"],
      techRelevance: "Demonstrates ability to build complex, production-grade healthcare systems integrating ML with mobile platforms."
    }
  ],

  // ============================================================================
  // PROJECTS - Showcases BREADTH across tech stack
  // ============================================================================
  projects: [
    {
      id: 1,
      title: "AI-Powered Medical Imaging Platform",
      shortTitle: "Medical AI Platform",
      description: "Full-stack Computer Vision system with mobile app, backend API, ML inference, and automated reporting pipeline.",
      
      // What makes this impressive for ALL tech roles
      techHighlight: "End-to-end system: React Native frontend, Flask REST API, TensorFlow model serving, PostgreSQL database, automated PDF generation, CVAT annotation pipeline.",
      
      problem: "Healthcare providers spending 15-20 minutes manually reviewing medical images per patient, creating workflow bottlenecks.",
      solution: "Built production ML system with cross-platform mobile app enabling real-time AI classification (92% accuracy) and automated reporting.",
      impact: "87% time reduction (15 mins → 2 mins), enabling 30% capacity increase. Deployed across 2 clinics serving 150+ patients/month.",
      
      tech: ["Python", "TensorFlow", "PyTorch", "Mask R-CNN", "Detectron2", "React Native", "Flask", "PostgreSQL", "REST APIs", "CVAT", "Docker"],
      year: "2025",
      category: "Full-Stack AI",
      
      // What each role sees
      relevanceByRole: {
        mlEngineer: "Computer Vision model training, optimization, deployment. 92% classification, 88% mAP segmentation.",
        dataScientist: "10,000+ image dataset analysis, feature engineering, model performance optimization.",
        softwareEngineer: "React Native app, Flask backend, REST APIs, PostgreSQL, automated reporting pipeline.",
        dataEngineer: "ETL pipeline for medical images, annotation workflow, data quality validation.",
        fullStack: "Mobile frontend + backend API + database + ML model integration + deployment."
      },
      
      metrics: {
        dataProcessed: "10,000+ medical images",
        accuracy: "92% classification, 88% segmentation",
        performance: "87% time reduction",
        scale: "2 clinics, 150+ patients/month",
        techStack: "8+ technologies integrated"
      },
      
      highlights: [
        "Built complete production system from data collection to deployment",
        "92% ML classification accuracy on 10,000+ images",
        "88% mAP instance segmentation with Mask R-CNN",
        "Cross-platform mobile app (React Native) with offline capability",
        "Flask REST API handling real-time inference requests",
        "Automated PDF report generation with verified AI results",
        "CVAT annotation pipeline (40% quality improvement)"
      ],
      
      link: "https://github.com/firruk/dental_app_emergent.git"
    },
    
    {
      id: 2,
      title: "Industrial IoT Analytics Platform",
      shortTitle: "IoT Analytics Platform",
      description: "Real-time data streaming platform using Azure IoT Hub + Power BI for predictive maintenance across 50+ industrial devices.",
      
      techHighlight: "Cloud infrastructure: Azure IoT Hub, event streaming, real-time dashboards, anomaly detection, automated alerting.",
      
      problem: "Manufacturing operations lacked real-time visibility into 50+ devices, resulting in reactive maintenance and unexpected downtime.",
      solution: "Architected cloud-based IoT platform streaming telemetry data, processing 1M+ events daily with automated anomaly detection.",
      impact: "25% downtime reduction, 40% faster incident response, $200K+ estimated annual savings.",
      
      tech: ["Azure IoT Hub", "Python", "SQL", "Power BI", "Real-Time Analytics", "Time-Series DB", "Alert Systems"],
      year: "2024",
      category: "Cloud & IoT",
      
      relevanceByRole: {
        dataEngineer: "Real-time data pipelines, event streaming, time-series database, ETL at scale.",
        mlEngineer: "Anomaly detection models, predictive maintenance, time-series forecasting.",
        softwareEngineer: "Azure cloud architecture, microservices, API development, system integration.",
        dataScientist: "Sensor data analysis, statistical modeling, KPI development, dashboard design.",
        cloudEngineer: "Azure IoT Hub, cloud infrastructure, scaling, monitoring, DevOps."
      },
      
      metrics: {
        devicesMonitored: "50+ IoT devices",
        dataVolume: "1M+ events/day",
        downtime: "25% reduction",
        responseTime: "40% faster",
        savings: "$200K+ annually"
      },
      
      highlights: [
        "Architected Azure IoT Hub solution processing 1M+ events daily",
        "Built real-time Power BI dashboards for operational monitoring",
        "Implemented predictive anomaly detection (25% downtime reduction)",
        "Python scripts for data processing and alert logic",
        "SQL database for historical analytics and reporting",
        "Automated alerting system for critical equipment issues"
      ],
      
      link: ""
    },
    
    {
      id: 3,
      title: "Predictive Maintenance ML System",
      shortTitle: "Predictive Maintenance AI",
      description: "Deep learning system analyzing industrial sensor data to predict equipment failures 72 hours in advance.",
      
      techHighlight: "ML pipeline: Data collection (LabVIEW), preprocessing, feature engineering (PCA/WPD), model training (CNN/LSTM), deployment.",
      
      problem: "Industrial equipment failures causing $500K+ unplanned downtime with no early warning system.",
      solution: "Built end-to-end ML pipeline processing 1,000+ sensor samples achieving 94% fault classification accuracy.",
      impact: "94% prediction accuracy, 72-hour advance warning enabling proactive maintenance. Published in 3 IEEE papers.",
      
      tech: ["Python", "TensorFlow", "Keras", "Pandas", "NumPy", "Scikit-learn", "LabVIEW", "Signal Processing", "PCA", "Wavelet Analysis"],
      year: "2024",
      category: "Machine Learning",
      
      relevanceByRole: {
        mlEngineer: "Deep learning model architecture, hyperparameter tuning, production deployment.",
        dataScientist: "Time-series analysis, feature engineering, statistical modeling, research.",
        dataEngineer: "Sensor data pipelines, data preprocessing, feature store, model serving.",
        softwareEngineer: "Python development, API integration, LabVIEW interfacing, system architecture.",
        researcher: "Published 3 IEEE/Scopus papers, rigorous experimentation, academic writing."
      },
      
      metrics: {
        dataProcessed: "1,000+ vibration signals",
        accuracy: "94% classification",
        improvement: "18% via feature engineering",
        prediction: "72 hours advance",
        impact: "$500K+ downtime prevention"
      },
      
      highlights: [
        "Developed CNN, LSTM, and hybrid architectures for comparison",
        "94% fault classification accuracy on industrial data",
        "18% performance boost through advanced feature engineering",
        "Integrated with LabVIEW + NI DAQ for real-time data collection",
        "Published research in 3 IEEE/Scopus journals",
        "Production-ready system with 72-hour prediction window"
      ],
      
      link: ""
    },
    
    {
      id: 4,
      title: "Full-Stack Web & Mobile Applications (8 Projects)",
      shortTitle: "Full-Stack Portfolio",
      description: "Suite of 8 client applications including e-commerce, booking systems, and business management tools achieving 98% satisfaction.",
      
      techHighlight: "Full-stack: Flutter/React Native (frontend), Laravel/Flask (backend), MySQL/PostgreSQL (database), REST APIs, deployment.",
      
      problem: "Clients needed custom business applications ranging from e-commerce to inventory management with tight deadlines.",
      solution: "Delivered 8 full-stack applications end-to-end: requirements gathering, design, development, testing, deployment.",
      impact: "$450K project revenue, 98% client satisfaction, applications serving 5,000+ daily users.",
      
      tech: ["Flutter", "React Native", "Laravel", "Flask", "MySQL", "PostgreSQL", "REST APIs", "Git", "Agile", "Postman"],
      year: "2023-2024",
      category: "Full-Stack Development",
      
      relevanceByRole: {
        softwareEngineer: "Full SDLC experience, multiple tech stacks, client delivery, production systems.",
        fullStackDev: "Frontend (Flutter, React Native), Backend (Laravel, Flask), Database (SQL).",
        backendEngineer: "REST API design, database optimization, server-side logic, authentication.",
        dataEngineer: "Database schema design, query optimization (45% performance improvement).",
        projectManager: "Client communication, requirements gathering, project delivery, team collaboration."
      },
      
      metrics: {
        projectsDelivered: "8 applications",
        revenue: "$450K",
        satisfaction: "98%",
        users: "5,000+ daily",
        performance: "45% query optimization"
      },
      
      highlights: [
        "Delivered 8 production applications from concept to deployment",
        "Full-stack: Flutter & React Native frontends + Laravel & Flask backends",
        "Database optimization: 45% query time reduction (8.2s → 4.5s)",
        "RESTful API design and implementation",
        "Agile methodology with cross-functional teams",
        "$450K project revenue with 98% client satisfaction",
        "Serving 5,000+ daily active users across 7 business locations"
      ],
      
      link: ""
    },
    
    {
      id: 5,
      title: "Investment Forecasting Model - Hackathon Winner",
      shortTitle: "ML Forecasting",
      description: "Competition-winning machine learning model achieving top 3% performance among 100 data scientists.",
      
      techHighlight: "Ensemble ML: Feature engineering, XGBoost, hyperparameter optimization, model validation, production-ready code.",
      
      problem: "Predict investment returns with highest accuracy in competitive hackathon (100 participants).",
      solution: "Built ensemble model with advanced feature engineering achieving RMSLE of 0.0409.",
      impact: "1st place winner, top 3% performance, demonstrated competitive ML skills under time pressure.",
      
      tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering", "Ensemble Methods"],
      year: "2023",
      category: "Data Science",
      
      relevanceByRole: {
        dataScientist: "Feature engineering, model selection, hyperparameter tuning, competitive performance.",
        mlEngineer: "Production ML code, model deployment, performance optimization.",
        quantAnalyst: "Financial modeling, time-series forecasting, risk analysis.",
        dataAnalyst: "Data exploration, statistical analysis, insights generation.",
        researcher: "Rigorous experimentation, systematic approach, documentation."
      },
      
      metrics: {
        accuracy: "RMSLE 0.0409",
        ranking: "1st / 150 teams",
        percentile: "Top 3%",
        timeframe: "48-hour hackathon"
      },
      
      highlights: [
        "1st place winner out of 100 competing teams",
        "RMSLE: 0.0409",
        "Ensemble modeling combining multiple algorithms",
        "Advanced feature engineering with domain knowledge",
        "Delivered under tight 48-hour deadline",
        "Production-ready, well-documented code"
      ],
      
      link: "https://www.kaggle.com/code/mochufk/al-majlis-ai-hackathon-investment-challenge"
    },
    
    {
      id: 6,
      title: "Student Analytics ML System (35K+ Records)",
      shortTitle: "Educational Analytics",
      description: "SQL data analysis and ML prediction model for 35,000+ student records achieving 97% accuracy.",
      
      techHighlight: "Data analytics pipeline: SQL queries, Python analysis, feature engineering, classification models, insights reporting.",
      
      problem: "Educational institution needed to identify at-risk students early for targeted intervention.",
      solution: "Analyzed 35K+ records with complex SQL queries, built ML classification model (97% accuracy), identified key engagement factors.",
      impact: "97% prediction accuracy enabling early intervention. Insights led to new strategies improving student outcomes.",
      
      tech: ["Python", "SQL", "Scikit-learn", "Pandas", "Classification Models", "Data Visualization", "Statistical Analysis"],
      year: "2022",
      category: "Data Analytics",
      
      relevanceByRole: {
        dataAnalyst: "SQL analysis, data cleaning, visualization, stakeholder reporting.",
        dataScientist: "Predictive modeling, feature importance, statistical testing.",
        mlEngineer: "Classification model development and validation.",
        dataEngineer: "SQL optimization, data pipeline, quality assurance.",
        businessAnalyst: "Insights generation, recommendation development, impact measurement."
      },
      
      metrics: {
        dataVolume: "35,000+ student records",
        accuracy: "97% prediction",
        timeframe: "10-month analysis",
        insights: "5 key factors identified"
      },
      
      highlights: [
        "Analyzed 35,000+ student records using advanced SQL",
        "97% accuracy predicting student engagement levels",
        "Identified top 5 factors influencing student success",
        "Complex multi-table joins and aggregations",
        "Data visualization for stakeholder presentations",
        "Actionable insights leading to policy changes"
      ],
      
      link: "https://github.com/firruk/365_challenge_machine_learning/blob/main/365%20challenge%20-%20Copy/365_DATA_CHALLENGE_MACHINE_LEARNING.ipynb"
    }
  ],

  // ============================================================================
  // EXPERIENCE - Shows VERSATILITY across roles
  // ============================================================================
  experience: [
    {
      id: 1,
      role: "ML Engineer & Full-Stack Developer",
      company: "Healthcare Technology - Freelance",
      location: "Sydney-based (Remote collaboration)",
      duration: "Jan 2025 - Present",
      
      // Description appeals to MULTIPLE roles
      description: "Building production AI systems and full-stack applications for healthcare. Technical lead for system presented at international AI conference. End-to-end ownership: ML models, mobile app, backend APIs, data pipelines, deployment.",
      
      achievements: [
        "Built production Computer Vision system: 92% classification, 88% segmentation on 1,000+ images",
        "Developed cross-platform mobile app (React Native + Flask REST API) ",
        "Implemented ML inference pipeline with automated quality checks and reporting",
        "Streamlined data annotation workflow improving quality 40% ",
        "Created LLM-powered automation tool reducing research synthesis from 3 days to 3 hours",
        "Technical lead:the Research generator project was showcased at international conference to 200+ professionals by the client"
      ],
      
      // What each role sees
      keyTechnologies: "Python, TensorFlow, PyTorch, React Native, Flask, PostgreSQL, REST APIs, Docker, CVAT",
      
      skillsDemonstrated: [
        "Machine Learning: Model training, optimization, deployment",
        "Full-Stack Development: Mobile frontend, backend APIs, databases",
        "Data Engineering: ETL pipelines, data quality, annotation workflows",
        "Cloud Deployment: Production system serving real users",
        "Technical Leadership: Conference presentation, documentation"
      ]
    },
    
    {
      id: 2,
      role: "Research Engineer & Data Scientist",
      company: "National University of Science and Technology, Oman",
      location: "Muscat, Oman",
      duration: "Jan 2024 - Dec 2024",
      
      description: "Led R&D projects in predictive analytics and deep learning for industrial applications. Published 4 IEEE/Scopus papers. Built end-to-end ML pipelines from data collection to model deployment.",
      
      achievements: [
        "Developed deep learning models (CNN, LSTM, Hybrid) achieving 94% fault classification accuracy",
        "Processed 1,000+ sensor signals: data collection, cleaning, feature engineering, model training",
        "Improved model performance 18% through advanced feature engineering (PCA, Wavelet Packet Decomposition)",
        "Built data visualization dashboards translating ML results for non-technical stakeholders",
        "Published 3 peer-reviewed papers in IEEE/Scopus-indexed journals",
        "Collaborated with industry partners validating models against real-world failure scenarios"
      ],
      
      keyTechnologies: "Python, TensorFlow, Pandas, NumPy, Scikit-learn, LabVIEW, Signal Processing, Statistical Analysis",
      
      skillsDemonstrated: [
        "Machine Learning: Algorithm development, benchmarking, optimization",
        "Data Science: Time-series analysis, statistical modeling, EDA",
        "Research: Experimental design, technical writing, peer review",
        "Data Engineering: Sensor data pipelines, preprocessing, quality control",
        "Communication: Academic papers, stakeholder presentations"
      ]
    },
    
    {
      id: 3,
      role: "Software Engineer",
      company: "IRTS Oman",
      location: "Muscat, Oman",
      duration: "Jul 2023 - Jun 2024",
      
      description: "Full-stack development, cloud architecture, and data engineering. Delivered 8 client projects ($450K revenue, 98% satisfaction). Built IoT platforms, optimized databases, developed APIs.",
      
      achievements: [
        "Developed full-stack applications (Flutter/Laravel) from requirements to deployment",
        "Performed comprehensive database performance analysis and optimization on MySQL schemas. ",
        "Built automated data pipeline using Python scripts to extract, transform, and load (ETL) data from multiple sources into centralized data warehouse . ",
        "Leveraged LLMs (ChatGPT API) for code optimization and rapid prototyping, increasing development efficiency by 30%.",
        "Designed and built interactive Power BI dashboards visualizing sensor telemetry trends, KPIs, and operational metrics, empowering data-driven decision-making for plant managers and reducing response time to equipment issues by 40%. "
      ],
      
      keyTechnologies: "Python, SQL, Azure IoT Hub, Power BI, Flutter, Laravel, MySQL, REST APIs, Docker, Git",
      
      skillsDemonstrated: [
        "Software Engineering: Full SDLC, multiple tech stacks, Agile methodology",
        "Cloud Architecture: Azure IoT Hub, event streaming, monitoring",
        "Data Engineering: ETL pipelines, database optimization, data quality",
        "Full-Stack Development: Frontend, backend, databases, APIs",
        "DevOps: CI/CD, version control, deployment automation"
      ]
    },
    
    {
      id: 4,
      role: "Data Analyst(Financial Administration)",
      company: "Fabrication Industry Services Co LLC",
      location: "Muscat, Oman",
      duration: "Apr 2021 - Jun 2023",
      
      description: "Business intelligence and financial data analytics for multi-location operations. SQL, Excel, Tableau. $2M+ monthly transaction analysis.",
      
      achievements: [
        "Analyzed multi-branch financial data across 7 locations using Excel, Tally ERP, and SQL queries, ensuring data consistency, accuracy, and compliance with financial reporting standards.",
        "Designed 10+ interactive Tableau dashboards to visualize KPIs, enabling data-driven decision-making for senior management and improving financial transparency.",
        "Optimized quarterly VAT payments, reducing company tax liability by 10% through strategic analysis of Oman tax regulations and financial planning."
      ],
      
      keyTechnologies: "SQL, Tableau, Excel (Advanced), Python, Tally ERP, Statistical Analysis",
      
      skillsDemonstrated: [
        "Data Analysis: SQL queries, statistical analysis, trend identification",
        "Business Intelligence: Dashboard design, KPI tracking, executive reporting",
        "Data Engineering: ETL automation, data quality, process optimization",
        "Business Impact: Cost savings, efficiency gains, forecast accuracy",
        "Communication: Stakeholder presentations, financial reporting"
      ]
    }
  ],

  // ============================================================================
  // SKILLS - Organized to appeal to MULTIPLE roles
  // ============================================================================
  skills: {
    "Programming & Software Engineering": [
      "Python (Advanced: Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch)",
      "SQL (MySQL, PostgreSQL - Complex queries, optimization, database design)",
      "JavaScript / TypeScript",
      "Git & GitHub (Version control, collaboration, CI/CD)",
      "API Development (REST, Flask, Laravel)",
      "Agile & Scrum methodologies"
    ],
    
    "Machine Learning & AI": [
      "Deep Learning (TensorFlow, PyTorch, Keras)",
      "Computer Vision (YOLO, R-CNN, Mask R-CNN, Detectron2)",
      "Supervised & Unsupervised Learning",
      "Model Deployment & MLOps",
      "Feature Engineering & Selection",
      "Time-Series Forecasting",
      "Ensemble Methods (XGBoost, Random Forest)"
    ],
    
    "Data Science & Analytics": [
      "Statistical Analysis & Hypothesis Testing",
      "Exploratory Data Analysis (EDA)",
      "A/B Testing & Experimentation",
      "Data Visualization (Matplotlib, Seaborn)",
      "Business Intelligence (Tableau, Power BI)",
      "Predictive Modeling",
      "Data Storytelling for stakeholders"
    ],
    
    "Full-Stack Development": [
      "Frontend: React Native, Flutter, HTML/CSS/JS",
      "Backend: Flask, Laravel, Node.js",
      "Databases: MySQL, PostgreSQL, NoSQL",
      "Mobile Development (iOS & Android)",
      "Web Development (responsive, performant)",
      "RESTful API Design & Integration"
    ],
    
    "Cloud & Infrastructure": [
      "Azure (IoT Hub, Cloud Services)",
      "Docker & Containerization",
      "CI/CD Pipelines",
      "System Architecture & Design",
      "Microservices patterns",
      "DevOps best practices"
    ],
    
    "Data Engineering": [
      "ETL Pipeline Development",
      "Data Warehousing concepts",
      "Real-Time Data Streaming",
      "Database Performance Optimization",
      "Data Quality & Validation",
      "Large-scale data processing"
    ],
    
    "Tools & Platforms": [
      "Jupyter Notebooks, VS Code, PyCharm",
      "Power BI, Tableau (Advanced)",
      "Excel (Advanced: VBA, Power Query)",
      "Postman (API testing)",
      "CVAT (Data annotation)",
      "LabVIEW (Industrial systems)"
    ]
  },

  // ============================================================================
  // EDUCATION
  // ============================================================================
  education: [
    {
      degree: "Bachelor of Science (Honours)",
      field: "Information Technology Management for Business",
      institution: "National University of Science and Technology, Oman",
      institutionNote: "Accredited by Oman Academic Accreditation Authority",
      year: "2018 - 2022",
      
      relevantCoursework: [
        "Data Structures & Algorithms",
        "Machine Learning & Artificial Intelligence",
        "Database Management Systems",
        "Software Engineering & Design Patterns",
        "Statistical Analysis & Data Analytics",
        "Cloud Computing & Distributed Systems",
        "Business Intelligence & Data Warehousing"
      ],
      
      honoursProject: "Applied Machine Learning research published in peer-reviewed journals"
    }
  ],

  // ============================================================================
  // CERTIFICATIONS & ACHIEVEMENTS
  // ============================================================================
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
  ],
};
