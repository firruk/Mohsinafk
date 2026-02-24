// Portfolio Data - Versatile Tech Professional
// Optimized for: ML Engineer | Data Analyst | Data Scientist | Software Engineer
// Last Updated: February 2026

const portfolioData = {
  personalInfo: {
    name: "Mohsina Firdous Kamarudeen",
    
    title: "ML Engineer • Data Analyst • Full-Stack AI",
    tagline: "Production AI Systems | 92% CV Accuracy | 5 IEEE/Scopus Papers | Sydney, Full Work Rights",
    
    email: "mohsinafirdousk@gmail.com",
    phone: "+61 494 303 526",
    location: "Sydney, NSW, Australia",
    linkedin:  "linkedin.com/in/mohsina-firdous-k",
    github: "github.com/firruk",
    portfolio: "https://firruk.github.io/Mohsinafk/",
  },
   
  // ============================================================================
  // PUBLICATIONS
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
      abstract: "The study shows that CNN has given better results than other deep learning algorithms, such as MLP, RNN, and LSTM, in fault diagnosis of rotating machinery. Future research could explore applying these techniques to different types of machinery and fault conditions.",
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
  // PROJECTS
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
      impact: "70% reduction in documentation time. 40% improvement in dataset quality. Deployed and presented to 150+ clinicians at international conference.",
      tech: ["Python", "TensorFlow", "PyTorch", "Mask R-CNN", "React Native", "Flask", "PostgreSQL", "REST APIs", "CVAT", "Docker", "LLMs"],
      year: "2025",
      category: "Full-Stack AI",
      relevanceByRole: {
        mlEngineer: "Computer Vision model training, optimization, and deployment. 92% classification, 88% mAP segmentation.",
        dataScientist: "1,000+ image dataset analysis, feature engineering, model performance optimization.",
        softwareEngineer: "React Native app, Flask backend, REST APIs, PostgreSQL, automated PDF reporting pipeline.",
        dataEngineer: "ETL pipeline for medical images, annotation workflow, data quality validation.",
        fullStack: "Mobile frontend + backend API + database + ML model integration + deployment."
      },
      metrics: {
        accuracy: "92% classification, 88% segmentation mAP",
        performance: "70% documentation time reduction",
        annotation: "400 → 120 hours processing time",
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
        dataAnalyst: "Automated reporting, data storytelling, insights generation at scale."
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
        softwareEngineer: "AI application development, model integration, chatbot implementation."
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
        "Integrated into broader dental AI research ecosystem"
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
      impact: "Production-ready real-time system capable of continuous monitoring, dynamic user onboarding, and personalised interaction.",
      tech: ["Python", "YOLOv3", "FaceNet", "SVM", "NLP", "OpenCV", "TensorFlow", "Deep Learning", "Face Recognition"],
      year: "2023",
      category: "Computer Vision & AI",
      relevanceByRole: {
        mlEngineer: "Multi-model AI pipeline, real-time inference, face recognition, object detection.",
        dataScientist: "Embedding generation, SVM classification, model integration and evaluation.",
        softwareEngineer: "Real-time system architecture, webcam integration, dynamic user management."
      },
      metrics: {
        detection: "Real-time YOLOv3 object detection",
        recognition: "128-dimensional FaceNet embeddings",
        classification: "SVM face identification",
        interaction: "NLP-powered contextual chatbot"
      },
      highlights: [
        "Real-time YOLOv3 object detection triggering face recognition pipeline",
        "FaceNet generating 128-dimensional facial embeddings for identity matching",
        "SVM classifier trained on FaceNet embeddings for person identification",
        "NLP chatbot enabling personalised user interaction post-recognition",
        "Dynamic user management — new users added and embedded in real time",
        "Seamlessly integrates Computer Vision, Deep Learning, and NLP in one system"
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
        dataAnalyst: "Data exploration, statistical analysis, insights under competitive conditions."
      },
      metrics: {
        accuracy: "RMSLE 0.0409",
        ranking: "1st Place",
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
        mlEngineer: "Classification model development and validation."
      },
      metrics: {
        dataVolume: "35,000+ student records",
        accuracy: "97% prediction",
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
  // EXPERIENCE
  // ============================================================================
  experience: [
    {
      id: 1,
      role: "ML Engineer — Dental Imaging AI",
      company: "Clinical AI Research Project (Oman Dental College Partnership)",
      location: "Remote",
      duration: "Jan 2025 – Present",
      description: "End-to-end technical lead for production AI systems and full-stack applications in healthcare. ML models, mobile app, backend APIs, data pipelines, and international conference presentation.",
      achievements: [
        "Engineered production Computer Vision system: 92% classification accuracy and 88% segmentation mAP on 1,000+ dental radiographs using Mask R-CNN",
        "Shipped cross-platform mobile app (React Native + Flask) with 99% accuracy across 9 radiograph types",
        "Designed automated PDF reporting engine reducing clinical documentation time by 70%",
        "Optimised CVAT annotation workflows — 40% dataset quality improvement, processing time cut from 400 to 120 hours",
        "Built LLM-powered research automation tool cutting paper preparation from 3 days to 3 hours",
        "Technical lead for AI solutions presented to 200+ dental professionals at international conference in Saudi Arabia"
      ],
      keyTechnologies: "Python, TensorFlow, PyTorch, Mask R-CNN, React Native, Flask, PostgreSQL, Docker, CVAT, LLMs",
      skillsDemonstrated: [
        "Machine Learning: Model training, optimization, production deployment",
        "Full-Stack Development: Mobile frontend, backend APIs, databases",
        "Data Engineering: ETL pipelines, data quality, annotation workflows",
        "Technical Leadership: Conference presentation, documentation"
      ]
    },
    {
      id: 2,
      role: "ML Research Analyst — Predictive Maintenance",
      company: "National University of Science and Technology, Oman",
      location: "Muscat, Oman",
      duration: "Jan 2024 – Dec 2024",
      description: "R&D lead bridging complex industrial sensor data and operational decision-making. Published researcher with 3 IEEE/Scopus papers.",
      achievements: [
        "Engineered deep learning models (CNN, LSTM, Hybrid architectures) achieving 94% accuracy in industrial fault classification",
        "Processed and cleaned 1,000+ high-frequency vibration signal samples using LabVIEW and NI DAQ systems",
        "Boosted model performance by 18% and cut false positive rates by 22% through PCA and Wavelet Packet Decomposition",
        "Produced stakeholder-facing dashboards translating ML outputs into actionable maintenance recommendations",
        "Lead author of 3 peer-reviewed IEEE/Scopus-indexed publications on predictive analytics and fault diagnosis"
      ],
      keyTechnologies: "Python, TensorFlow, Pandas, NumPy, Scikit-learn, LabVIEW, NI DAQ, PCA, WPD",
      skillsDemonstrated: [
        "Machine Learning: Algorithm development, benchmarking, optimization",
        "Data Science: Time-series analysis, statistical modeling, EDA",
        "Research: Technical writing, peer review, academic publication",
        "Communication: Stakeholder dashboards, industrial reporting"
      ]
    },
    {
      id: 3,
      role: "Software Engineer — IoT & Data Analytics",
      company: "IRTS Oman",
      location: "Muscat, Oman",
      duration: "Jun 2023 – Jul 2024",
      description: "Full-stack development, cloud architecture, and data engineering in a startup environment. Bridging raw sensor data and executive decision-making.",
      achievements: [
        "Designed and deployed interactive Power BI dashboards for plant managers, reducing equipment issue response times by 40%",
        "Architected automated Python ETL pipelines centralising data from disparate industrial sources, improving data accessibility by 30%",
        "Built real-time IoT analytics platform using Azure IoT Hub, achieving 25% reduction in equipment downtime through predictive anomaly detection",
        "Managed end-to-end lifecycle of web and mobile applications (Flutter, Laravel, MySQL) maintaining 99.9% system uptime",
        "Integrated LLMs (ChatGPT API) into development workflows, increasing coding efficiency by 30%"
      ],
      keyTechnologies: "Python, Power BI, Azure IoT Hub, Flutter, Laravel, MySQL, ETL Pipelines, Docker, Git",
      skillsDemonstrated: [
        "Data Engineering: ETL pipelines, database optimization, data quality",
        "Business Intelligence: Power BI dashboards, real-time telemetry, KPI reporting",
        "Full-Stack Development: Frontend, backend, databases, APIs",
        "Cloud: Azure IoT Hub, event streaming, monitoring"
      ]
    },
    {
      id: 4,
      role: "Junior Data Analyst — Financial Operations",
      company: "Fabrication Industry Services Co LLC",
      location: "Muscat, Oman",
      duration: "Apr 2021 – Jun 2023",
      description: "Financial analytics and regulatory compliance across a 7-branch enterprise. SQL, Tableau, Tally ERP.",
      achievements: [
        "Synthesised financial data across 7 branches using SQL and Tally ERP, ensuring 100% accuracy in compliance reporting and multi-million dollar ledger reconciliations",
        "Designed 10+ Tableau executive dashboards tracking KPIs, enabling senior management to identify and eliminate operational bottlenecks",
        "Automated payroll and procurement workflows achieving 20% reduction in administrative overhead costs",
        "Optimised VAT reporting and financial planning, reducing total tax liability by 10% through strategic data analysis"
      ],
      keyTechnologies: "SQL, Tally ERP, Tableau, Excel, Financial Reporting",
      skillsDemonstrated: [
        "Data Analysis: SQL queries, statistical analysis, financial trend identification",
        "Business Intelligence: Dashboard design, KPI tracking, executive reporting",
        "Process Automation: ETL automation, data quality, workflow optimisation",
        "Business Impact: Cost savings, compliance, multi-branch reconciliation"
      ]
    }
  ],

  // ============================================================================
  // SKILLS
  // ============================================================================
  skills: {
    "ML & Deep Learning": [
      "TensorFlow, PyTorch, Keras, Scikit-learn",
      "CNN, LSTM, Hybrid Architectures, Transfer Learning",
      "Model Deployment & MLOps (Flask, TensorFlow Lite, Docker)",
      "Feature Engineering & Selection (PCA, WPD)",
      "Ensemble Methods (XGBoost, Random Forest)",
      "Time-Series Forecasting"
    ],
    "Computer Vision": [
      "Mask R-CNN, YOLOv8, Faster R-CNN, Detectron2",
      "Image Segmentation & Object Detection",
      "AlexNet Transfer Learning",
      "CVAT Data Annotation",
      "Medical Image Analysis"
    ],
    "Data Analytics & BI": [
      "Python (Pandas, NumPy, Matplotlib, Seaborn)",
      "SQL (MySQL, PostgreSQL — complex queries)",
      "Tableau, Power BI, KPI Dashboard Development",
      "Statistical Analysis & A/B Testing",
      "Data Storytelling & Executive Reporting"
    ],
    "Data Engineering": [
      "ETL Pipeline Development",
      "Python Automation",
      "Azure IoT Hub & Real-Time Streaming",
      "Database Design & Optimisation",
      "Data Quality & Validation"
    ],
    "Full-Stack Development": [
      "React Native, Flutter (Mobile)",
      "Flask, Laravel (Backend)",
      "MySQL, PostgreSQL (Databases)",
      "RESTful API Design & Integration",
      "LLM Integration (ChatGPT API, Claude AI)"
    ],
    "MLOps & Cloud": [
      "Docker & Containerisation",
      "Git/GitHub & CI/CD",
      "Azure IoT Hub",
      "LabVIEW & NI DAQ (Industrial)",
      "Jupyter, VS Code, Postman"
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
        "Business Intelligence & Data Warehousing",
        "Business Requirements Analysis & Project Management"
      ],
      honoursProject: "Applied Machine Learning research published in peer-reviewed journals"
    }
  ],

  // ============================================================================
  // CERTIFICATIONS & ACHIEVEMENTS
  // ============================================================================
  certifications: [
    "IELTS Academic — Overall Band Score 8.0",
    "SQL — MySQL for Data Analytics and Business Intelligence",
    "Python for Research",
    "Linear Algebra and Feature Selection",
    "Statistics Foundations: The Basics"
  ],

  awards: [
    "Hackathon Winner — Al Majlis AI Hackathon, Investment Challenge (RMSLE: 0.0409)",
    "3× Awards of Excellence for Meritorious Academic Performance",
    "First Prize — Best Technical Project Competition",
    "Certificate of Merit"
  ],
};
