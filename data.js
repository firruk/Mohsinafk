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
      title: "Intelligent fault diagnosis of drill bit using Digital Twin Assisted deep learning classifiers of MLP, CNN, Hybrid MLP-CNN, and Hybrid CNN-MLP with PCA algorithm",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Comparative analysis of CNN and LSTM architectures for industrial predictive maintenance. Achieved 94% fault classification accuracy with potential to prevent $500K+ in industrial downtime through early failure detection.",
      link: "https://ieeexplore.ieee.org/document/10963102",
      tags: ["Deep Learning", "CNN", "LSTM", "Predictive Maintenance", "Industrial AI"],
      techRelevance: "Demonstrates expertise in neural network architecture design, time-series analysis, and production ML deployment for critical systems."
    },
    {
      id: 4,
      title: "Comparison Analysis of ANN and XGBoost Algorithm with WPD in exploring the application of Artificial Intelligence in condition monitoring for oil and gas industries",
      journal: "IEEE/Scopus Indexed",
      year: 2025,
      authors: "Mohsina Firdous K., et al.",
      abstract: "Advanced feature engineering research using Wavelet Packet Decomposition improving model performance by 18%. Applied to oil & gas industrial monitoring systems.",
      link: "https://www.researchgate.net/publication/389533872_Comparison_Analysis_of_ANN_and_XGBoost_Algorithm_with_WPD_in_exploring_the_application_of_Artificial_Intelligence_in_condition_monitoring_for_oil_and_gas_industries",
      tags: ["ANN", "XGBoost", "Feature Engineering", "Signal Processing"],
      techRelevance: "Shows advanced ML techniques, feature engineering skills, and ability to optimize model performance through algorithmic innovation."
    },
    
    {
      id: 2,
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
      id: 3,
      title: "Intelligent Fault Diagnosis of Rotating Machinery Using Deep Learning Algorithms: A Comparative Analysis of MLP, CNN, RNN, and LSTM",
      journal: "SSRG International Journal of Electrical and Electronics Engineering",
      year: 2024,
      authors: "Mohsina Firdous K., et al.",
      abstract:"The study shows that CNN has given better results than other deep learning algorithms, such as MLP, RNN, and LSTM, in fault diagnosis of rotating machinery. Future research could explore applying these techniques to different types of machinery and fault conditions.",
      link: "https://www.internationaljournalssrg.org/IJEEE/2024/Volume11-Issue9/IJEEE-V11I9P127.pdf",
      tags: ["Machine Learning", "Deep Learning", "Performance Benchmarking"],
      techRelevance: "Demonstrates systematic approach to algorithm selection and performance optimization for production systems."
    },
    
    {
      id: 5,
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
      id: 6,
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
      techHighlight: "End-to-end system: React Native frontend, Flask REST API, TensorFlow/Mask R-CNN model serving, PostgreSQL database, automated PDF generation, CVAT annotation pipeline.",
      problem: "Healthcare providers spending 15-20 minutes manually reviewing medical images per patient, creating workflow bottlenecks.",
      solution: "Built production ML system with cross-platform mobile app enabling real-time AI classification (92% accuracy) and automated clinical reporting.",
      impact: "87% time reduction (15 mins → 2 mins per scan), 70% reduction in documentation time. Deployed across clinics serving 150+ patients/month.",
      tech: ["Python", "TensorFlow", "PyTorch", "Mask R-CNN", "React Native", "Flask", "PostgreSQL", "REST APIs", "CVAT", "Docker", "LLMs"],
      year: "2025",
      category: "Full-Stack AI",
      relevanceByRole: {
        mlEngineer: "Computer Vision model training, optimization, and deployment. 92% classification, 88% mAP segmentation.",
        dataScientist: "10,000+ image dataset analysis, feature engineering, model performance optimization.",
        softwareEngineer: "React Native app, Flask backend, REST APIs, PostgreSQL, automated PDF reporting pipeline.",
        dataEngineer: "ETL pipeline for medical images, annotation workflow, data quality validation.",
        fullStack: "Mobile frontend + backend API + database + ML model integration + deployment."
      },
      metrics: {
        dataProcessed: "10,000+ medical images",
        accuracy: "92% classification, 88% segmentation mAP",
        performance: "87% time reduction",
        scale: "150+ patients/month",
        techStack: "11 technologies integrated"
      },
      highlights: [
        "Built complete production system from data collection to clinical deployment",
        "92% ML classification accuracy and 88% segmentation mAP using Mask R-CNN",
        "Cross-platform mobile app (React Native + Flask) with 99% accuracy across 9 radiograph types",
        "Automated PDF clinical report generation with AI-detected findings",
        "CVAT annotation pipeline — 40% quality improvement, 400 → 120 hours processing time",
        "LLM-powered research automation tool cutting paper preparation from 3 days to 3 hours",
        "Showcased at international AI in Orthodontics conference (200+ dental professionals)"
      ],
      link: "https://github.com/firruk/ODC-Dental-Teeth-Analyses-Website"
    },

    {
      id: 2,
      title: "Research Paper Generator Desktop App",
      shortTitle: "AI Research Generator",
      description: "First-of-its-kind LLM-powered desktop application that integrates live PowerPoint poll data to automatically generate complete research papers with literature reviews and data visualisations.",
      techHighlight: "LLM integration pipeline: PowerPoint poll data extraction, automated literature synthesis, data visualisation generation, structured paper output.",
      problem: "Researchers spending 3+ days manually synthesising poll data, writing literature reviews, and generating visualisations for conference papers.",
      solution: "Built a desktop application that captures live poll responses from PowerPoint presentations and feeds them into an LLM pipeline to automatically generate structured research papers.",
      impact: "Paper preparation time reduced from 3 days to 3 hours. Demonstrated live at an international AI in Orthodontics conference in Saudi Arabia to 200+ dental professionals.",
      tech: ["Python", "LLMs", "NLP", "PowerPoint API", "Data Visualisation", "Desktop App Development"],
      year: "2025",
      category: "AI Automation",
      relevanceByRole: {
        mlEngineer: "LLM integration, prompt engineering, automated NLP pipeline.",
        dataScientist: "Automated data analysis, visualisation generation, research synthesis.",
        softwareEngineer: "Desktop application architecture, API integration, workflow automation.",
        dataAnalyst: "Automated reporting, data storytelling, insights generation at scale.",
        researcher: "Research automation, literature review synthesis, conference presentation tool."
      },
      metrics: {
        timeSaved: "3 days → 3 hours paper preparation",
        audience: "200+ professionals at international conference",
        automation: "End-to-end research paper generation",
        novelty: "First-of-its-kind live poll integration"
      },
      highlights: [
        "First-of-its-kind application integrating live PowerPoint poll data with LLM paper generation",
        "Automated literature review synthesis using large language models",
        "Dynamic data visualisation generation from live audience poll responses",
        "Reduced research paper preparation from 3 days to 3 hours",
        "Successfully demonstrated at international AI in Orthodontics conference, Saudi Arabia",
        "Presented to 200+ dental and orthodontic professionals"
      ],
      link: "https://github.com/firruk/Research-Paper-Generator-Desktop-App"
    },

    {
      id: 3,
      title: "Dental Radiograph Classification AI + NLP Chatbot",
      shortTitle: "Dental AI Classifier",
      description: "Deep learning classification system achieving 99% accuracy across 9 dental radiograph types using AlexNet, combined with an NLP-powered patient chatbot for denture-related queries.",
      techHighlight: "AlexNet transfer learning for radiograph classification + NLP chatbot trained on patient response data for denture queries.",
      problem: "Dental clinics manually identifying radiograph types and handling repetitive patient queries about dentures, creating inefficiency and inconsistency.",
      solution: "Built a two-component AI system: AlexNet-based classifier identifying 9 radiograph types with 99% accuracy, and an NLP chatbot trained on common patient denture responses.",
      impact: "99% classification accuracy across 9 radiograph types. Chatbot handles common patient queries automatically, reducing repetitive consultation time.",
      tech: ["Python", "TensorFlow", "AlexNet", "Transfer Learning", "NLP", "Chatbot", "Deep Learning", "Image Classification"],
      year: "2024",
      category: "Healthcare AI",
      relevanceByRole: {
        mlEngineer: "Transfer learning with AlexNet, multi-class image classification, NLP model training.",
        dataScientist: "Model evaluation, performance benchmarking, dataset preparation.",
        softwareEngineer: "AI application development, model integration, chatbot implementation.",
        dataAnalyst: "Patient data analysis, chatbot response mapping, classification reporting.",
        healthcareAI: "Clinical AI application, radiograph analysis, patient interaction automation."
      },
      metrics: {
        accuracy: "99% across 9 radiograph types",
        model: "AlexNet (Transfer Learning)",
        chatbot: "NLP-based patient query handling",
        radiographTypes: "9 dental radiograph categories"
      },
      highlights: [
        "99% classification accuracy across 9 dental radiograph types using AlexNet",
        "Transfer learning approach for efficient model training on medical imaging data",
        "NLP chatbot trained on real patient denture consultation responses",
        "Dual-component system covering both image classification and patient interaction",
        "Integrated into broader dental AI research ecosystem",
        "Complements production Mask R-CNN system with lightweight classification capability"
      ],
      link: "https://github.com/firruk/Dental-Radiograph-classification-and-chatbot-for-debentures"
    },

    {
      id: 4,
      title: "AI-Based Interactive Robot System",
      shortTitle: "AI Interaction Robot",
      description: "Real-time interactive system integrating YOLOv3 object detection, FaceNet face recognition, SVM classification, and NLP chatbot for security, customer service, and entertainment applications.",
      techHighlight: "Multi-model pipeline: YOLOv3 (detection) → FaceNet (128-dim embeddings) → SVM (classification) → NLP Chatbot (interaction), all running in real-time via webcam.",
      problem: "Need for a robust, real-time interactive system that can identify individuals and engage them in meaningful conversation across security, retail, and entertainment contexts.",
      solution: "Architected a seamless four-component AI pipeline: real-time object detection triggers face recognition, which identifies users and routes them to a contextual chatbot.",
      impact: "Production-ready real-time system capable of continuous monitoring, dynamic user onboarding, and personalised interaction. Applicable across security, customer service, and entertainment.",
      tech: ["Python", "YOLOv3", "FaceNet", "SVM", "NLP", "OpenCV", "TensorFlow", "Deep Learning", "Face Recognition"],
      year: "2023",
      category: "Computer Vision & AI",
      relevanceByRole: {
        mlEngineer: "Multi-model AI pipeline, real-time inference, face recognition, object detection.",
        dataScientist: "Embedding generation, SVM classification, model integration and evaluation.",
        softwareEngineer: "Real-time system architecture, webcam integration, dynamic user management.",
        computerVision: "YOLOv3 detection, FaceNet embeddings, real-time video processing.",
        aiResearcher: "Multi-modal AI system, NLP + CV integration, production deployment."
      },
      metrics: {
        detection: "Real-time YOLOv3 object detection",
        recognition: "128-dimensional FaceNet embeddings",
        classification: "SVM face identification",
        interaction: "NLP-powered contextual chatbot",
        applications: "Security, customer service, entertainment"
      },
      highlights: [
        "Real-time YOLOv3 object detection triggering face recognition pipeline",
        "FaceNet generating 128-dimensional facial embeddings for identity matching",
        "SVM classifier trained on FaceNet embeddings for person identification",
        "NLP chatbot enabling personalised user interaction post-recognition",
        "Dynamic user management — new users added and embedded in real time",
        "Seamlessly integrates Computer Vision, Deep Learning, and NLP in one system",
        "Applicable to security, retail customer service, and entertainment platforms"
      ],
      link: "https://github.com/firruk/AI-based-interaction-system"
    },

    {
      id: 5,
      title: "Investment Forecasting Model — Hackathon Winner",
      shortTitle: "ML Forecasting",
      description: "1st place winning ML model at the Al Majlis AI Hackathon — the first AI competition in Oman using real Central Bank of Oman industry datasets.",
      techHighlight: "Time-series forecasting: Feature engineering, ensemble methods (XGBoost), hyperparameter optimisation, model validation.",
      problem: "Predict next 20 days of investment returns on anonymised Central Bank of Oman market and portfolio data with the highest accuracy among all participants.",
      solution: "Built an ensemble time-series forecasting model with advanced feature engineering achieving RMSLE of 0.0409 — the best score in the competition.",
      impact: "1st place winner. First AI hackathon in Oman with real industry data. Demonstrated competitive ML performance under 48-hour deadline pressure.",
      tech: ["Python", "XGBoost", "Scikit-learn", "Pandas", "NumPy", "Feature Engineering", "Ensemble Methods", "Time-Series Forecasting"],
      year: "2023",
      category: "Data Science",
      relevanceByRole: {
        dataScientist: "Feature engineering, model selection, hyperparameter tuning, competition performance.",
        mlEngineer: "Production ML code, model optimisation, performance benchmarking.",
        quantAnalyst: "Financial time-series forecasting, investment return prediction, risk analysis.",
        dataAnalyst: "Data exploration, statistical analysis, insights under competitive conditions.",
        fintech: "Financial ML modelling with real Central Bank of Oman dataset."
      },
      metrics: {
        accuracy: "RMSLE 0.0409",
        ranking: "1st Place",
        participants: "100+ data scientists",
        timeframe: "48-hour hackathon",
        dataset: "Central Bank of Oman — real industry data"
      },
      highlights: [
        "1st place winner — Al Majlis AI Hackathon Investment Challenge",
        "First AI hackathon in Oman using real Central Bank of Oman industry datasets",
        "RMSLE of 0.0409 — best score among all participants",
        "Forecasted next 20 days of investment returns on anonymised financial data",
        "Advanced feature engineering with financial domain knowledge",
        "Ensemble model combining multiple algorithms for maximum accuracy",
        "Delivered under 48-hour competitive deadline"
      ],
      link: "https://www.kaggle.com/code/mochufk/al-majlis-ai-hackathon-investment-challenge"
    },

    {
      id: 6,
      title: "Student Analytics ML System (35K+ Records)",
      shortTitle: "Educational Analytics",
      description: "SQL data analysis and ML prediction model for 35,000+ student records achieving 97% accuracy in identifying at-risk students for early intervention.",
      techHighlight: "Data analytics pipeline: Complex SQL queries, Python analysis, feature engineering, classification model, stakeholder reporting.",
      problem: "Educational institution needed to proactively identify at-risk students early enough for targeted intervention before failure.",
      solution: "Analysed 35K+ student records with advanced SQL queries, built an ML classification model achieving 97% accuracy, and identified the 5 key factors influencing student engagement.",
      impact: "97% prediction accuracy enabling early intervention. Insights led to new institutional strategies improving student outcomes.",
      tech: ["Python", "SQL", "Scikit-learn", "Pandas", "Classification Models", "Data Visualisation", "Statistical Analysis"],
      year: "2022",
      category: "Data Analytics",
      relevanceByRole: {
        dataAnalyst: "SQL analysis, data cleaning, visualisation, stakeholder reporting.",
        dataScientist: "Predictive modelling, feature importance, statistical testing.",
        mlEngineer: "Classification model development and validation.",
        dataEngineer: "SQL optimisation, data pipeline, quality assurance.",
        businessAnalyst: "Insights generation, recommendation development, impact measurement."
      },
      metrics: {
        dataVolume: "35,000+ student records",
        accuracy: "97% prediction",
        timeframe: "10-month analysis",
        insights: "5 key engagement factors identified"
      },
      highlights: [
        "Analysed 35,000+ student records using advanced SQL multi-table joins and aggregations",
        "97% accuracy predicting student engagement and at-risk classification",
        "Identified top 5 factors influencing student success outcomes",
        "Data visualisation dashboards for stakeholder presentations",
        "Actionable insights leading directly to institutional policy changes"
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
      company: "Healthcare Technology - Oman Dental College",
      location: "Remote collaboration",
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
      role: "Technical Research Assistant",
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
