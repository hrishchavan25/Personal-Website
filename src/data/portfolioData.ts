import { Project, SkillCategory, TimelineItem, ResearchArea, CopyrightItem, ExtracurricularItem } from '../types';
import profileImg from '../assets/images/WhatsApp Image 2026-09-05 at 3.12.48 PM.jpeg';

export const PROFILE_IMAGE = profileImg;

export const PERSONAL_INFO = {
  name: 'Hrishita Chavan',
  title: 'AI/ML Researcher & Computer Engineering Undergraduate',
  tagline: 'Researching applied AI & biomedical signal processing to build thoughtful, human-centric technology for safety and wellness.',
  phone: '+91 8369119258',
  email: 'hrishchavan25@gmail.com',
  location: 'Mumbai, India',
  university: 'University of Mumbai (RGIT)',
  degree: 'Bachelor of Engineering in Computer Engineering',
  year: 'Fourth Year',
  availability: 'Open for Research Collaborations & Engineering Roles',
  bio: 'Fourth-year Computer Engineering undergraduate at the University of Mumbai with a passionate focus on applied AI/ML research, biomedical signal processing, and human-centric software. Dedicated to bridging theoretical machine learning with meaningful real-world impact — specifically designing smart arrhythmia detection systems using multi-modal ECG and PPG signals, safety-oriented navigation platforms, digital mental health solutions, and intelligent interactive web platforms. Experienced across Python, PyTorch, C/C++, Java, React Native, and full-stack web technologies.',
  github: 'https://github.com/hrishchavan25',
  githubUsername: 'hrishchavan25',
  linkedin: 'https://www.linkedin.com/in/hrishita-chavan-78a2a829/',
  linkedinName: 'Hrishita Chavan',
};

export const RESEARCH_AREAS: ResearchArea[] = [
  {
    id: 'Biomedical AI',
    title: 'Multi-Modal Biomedical Signal Processing & Cardiac Arrhythmia Detection',
    tagline: 'Deep learning fusion of synchronous ECG and PPG biosignals for non-invasive, early cardiac anomaly classification.',
    description: 'Investigating deep neural network architectures and digital signal processing (DSP) pipelines to detect cardiac arrhythmias from simultaneous electrocardiogram (ECG) and optical photoplethysmogram (PPG) waveforms. Focusing on noise-robust feature extraction, Pulse Transit Time (PTT) dynamics, and hybrid 1D-CNN + BiLSTM sequential models for reliable wearable diagnostics.',
    focusPoints: [
      'Multi-modal biosignal fusion combining electrical (ECG) and optical hemodynamic (PPG) telemetry',
      'Digital signal preprocessing: Butterworth bandpass filtering, wavelet denoising (DWT), and Pan-Tompkins R-peak extraction',
      'Hybrid deep learning models (1D-CNN + Bi-directional LSTM with attention) for temporal arrhythmia classification',
      'Clinical benchmarking on PhysioNet/MIT-BIH databases for premature contractions, atrial fibrillation, and tachycardia'
    ],
    outcome: 'Engineered end-to-end signal processing and deep classification pipeline for real-time dual-signal arrhythmia screening.',
    publicationOrStatus: 'Senior Capstone & Research Study • Fourth Year Research'
  },
  {
    id: 'Safety Systems',
    title: 'Applied AI/ML in Urban Safety & Routing',
    tagline: 'Predictive safety indices and multi-criteria route optimization for vulnerable pedestrians.',
    description: 'Investigating how machine learning and spatial routing APIs can evaluate urban route safety parameters in real time. Analyzing hazard densities, contextual lighting factors, and historical incident patterns to compute safe travel corridors rather than merely fastest paths.',
    focusPoints: [
      'Route safety awareness modeling and risk scoring heuristics',
      'Integration of OpenStreetMap / OSRM and TomTom geospatial APIs',
      'AI/ML research analysis for multi-factor route optimization',
      'Technical paper drafting & implementation benchmarking'
    ],
    outcome: 'Implemented core technical engine for W-SecureRoutes with registered intellectual property copyright application.',
    publicationOrStatus: 'Technical Paper In Progress • Copyright Application Filed'
  },
  {
    id: 'Mental Health AI',
    title: 'Intelligent AI-Driven Digital Mental Health & Stress Management',
    tagline: 'Personalized stress assessment and adaptive wellness recommendations using machine learning.',
    description: 'Researching machine learning methodologies to detect, quantify, and support individuals facing cognitive and daily stress. Focusing on non-invasive self-assessment indicators, tailored intervention strategies, and privacy-preserving wellness companion architectures.',
    focusPoints: [
      'AI-driven techniques for stress quantification and pattern detection',
      'Personalized wellness recommendation algorithms using Scikit-learn and PyTorch',
      'Human-computer interaction patterns for empathetic digital health support',
      'Comprehensive literature reviews and comparative model evaluations'
    ],
    outcome: 'Official Copyright Registered (Certificate No. LD-20260194125, Year 2025-26) by Copyright Office, Government of India for "Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress".',
    publicationOrStatus: 'Copyright Registered (Cert No. LD-20260194125) • Year 2025-26'
  },
  {
    id: 'Human-Centric Tech',
    title: 'Building Technology for People & Societal Good',
    tagline: 'Engineering accessible, empathetic tools that solve tangible everyday human challenges.',
    description: 'Firmly committed to the philosophy that engineering is most powerful when it empowers human well-being. Whether detecting critical cardiac arrhythmias early, keeping women safe on their daily commute, or guiding students toward fulfilling careers, technology must be designed with deep empathy, ethical transparency, and accessible design.',
    focusPoints: [
      'User-centric interface design and rule-based conversational agents',
      'Ethical AI implementation with transparent recommendation mechanisms',
      'Bridging academic literature with robust software implementation',
      'Community wellness and educational mentorship initiatives'
    ],
    outcome: 'Active research leadership across biomedical health, pedestrian safety, and educational mentorship initiatives.',
    publicationOrStatus: 'Active Core Philosophy'
  }
];

export const COPYRIGHTS: CopyrightItem[] = [
  {
    id: 'stress-management-copyright',
    title: 'AI-Based Stress Management System',
    projectReference: 'ai-stress-management',
    registeredWorkTitle: 'Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress',
    applicationType: 'Copyright Certificate (Rule 70 of The Copyright Rules, Extracts from the Register of Copyrights)',
    status: 'Registered • Certificate Issued',
    isRegistered: true,
    domain: 'Digital Mental Health & Applied AI Recommendation Systems',
    description: 'Official Copyright Certificate registered by Copyright Office, Government of India (Rule 70 of Copyright Rules, 1957) for the research and framework "Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress". Features predictive ML stress evaluation, tailored interventions, and digital health protocols.',
    year: '2025-26',
    certificateNo: 'LD-20260194125',
    applicationNo: 'LD-10379/2026-CO',
    dateOfFiling: '07/03/2026',
    dateOfROC: '25/08/2026',
    authors: [
      'Hrishita Chavan (Andheri East, Mumbai-400093)',
      'Dr. Sharmila Nilesh Rathod (Goregaon West, Mumbai-400104)',
      'Aryan Panchal (Central, Clemson, SC, USA-029630)'
    ],
    owners: [
      'Hrishita Chavan',
      'Dr. Sharmila Nilesh Rathod',
      'Aryan Panchal'
    ],
    hasCertificatePdf: true
  },
  {
    id: 'w-secureroutes-copyright',
    title: 'W-SecureRoutes Safety Assistance Platform',
    projectReference: 'w-secureroutes',
    registeredWorkTitle: 'W-SecureRoutes: Safety-First Pedestrian Navigation and Risk Heuristics Framework',
    applicationType: 'Copyright Registration / Application Filed',
    status: 'Application Filed & Documented',
    isRegistered: false,
    domain: 'Women\'s Safety Geospatial Routing & Route Awareness Assistance',
    description: 'Proprietary system architecture integrating mobile navigation, safety index estimation, and multi-criteria routing algorithms for enhanced pedestrian security.',
    year: '2025 - 2026'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'smart-arrhythmia-detection',
    title: 'Smart Arrhythmia Detection System Using ECG & PPG Signals',
    tagline: 'Multi-Modal Biomedical Signal Processing & Deep Learning for Non-Invasive Cardiac Arrhythmia Classification',
    category: 'AI & Biomedical Health',
    status: 'Final Year Research',
    description: 'An advanced dual-modality biomedical AI system combining electrocardiogram (ECG) electrical potentials and photoplethysmogram (PPG) optical pulse waves with deep learning for continuous, accurate, and noise-resilient cardiac arrhythmia detection.',
    fullOverview: 'Cardiac arrhythmias such as Atrial Fibrillation, Premature Ventricular Contractions (PVC), and Ventricular Tachycardia pose critical cardiovascular risks if undetected. Single-modality wearable monitoring (standalone PPG or single-lead ECG) often struggles with sensor motion artifacts and diagnostic ambiguity. This senior research capstone introduces a synchronized multi-modal pipeline fusing ECG electrical activity and PPG hemodynamics. Leveraging digital Butterworth filtering, discrete wavelet transform (DWT) denoising, and hybrid 1D-CNN + BiLSTM deep learning architectures with temporal attention, the system accurately detects rhythmic irregularities and anomaly waveforms with high clinical sensitivity.',
    problemStatement: 'Early detection of episodic cardiac arrhythmias is challenging outside hospital 12-lead ECG settings. Consumer wearables relying solely on single-channel PPG or noisy dry-contact ECG suffer from motion artifacts, low signal-to-noise ratio, and high false-positive rates.',
    solutionArchitecture: 'Engineered an end-to-end Python & PyTorch biomedical pipeline: (1) Signal acquisition & synchronization of raw ECG and PPG streams; (2) Preprocessing via Butterworth bandpass filters, DWT baseline wander removal, and Pan-Tompkins R-peak & systolic peak extraction; (3) Multi-modal feature engineering including Heart Rate Variability (HRV time/frequency metrics) and Pulse Transit Time (PTT/PAT); (4) Hybrid 1D-CNN spatial feature extractor coupled with Bi-directional LSTM for sequential rhythm dynamics; (5) Multi-modal attention fusion layer classifying beats into Normal Sinus, AFib, PVC, PAC, and Ventricular Anomaly classes with real-time risk alerting.',
    keyContributions: [
      'Designed synchronized dual-signal processing pipeline for simultaneous ECG and PPG time-series analysis.',
      'Implemented digital signal conditioning (0.5–45 Hz Butterworth filters, DWT wavelet denoising, and Pan-Tompkins QRS detection).',
      'Extracted physiological markers including Pulse Transit Time (PTT), Pulse Arrival Time (PAT), and HRV statistical/frequency domain features.',
      'Constructed hybrid 1D-CNN + BiLSTM deep learning architecture in PyTorch achieving robust multi-class arrhythmia classification.',
      'Benchmarked classification performance against clinical physiological datasets (MIT-BIH & PhysioNet multi-parameter databases).'
    ],
    techStack: [
      'Python',
      'PyTorch',
      'Biomedical Signal Processing',
      'DSP (SciPy.signal)',
      '1D-CNN + BiLSTM',
      'ECG & PPG Fusion',
      'WFDB / PhysioNet',
      'NumPy & Pandas',
      'Streamlit / Real-time UI'
    ],
    keyAlgorithms: [
      'Pan-Tompkins R-Peak & QRS Complex Detection',
      'Discrete Wavelet Transform (DWT) Denoising',
      'Butterworth Bandpass & Notch Filtering',
      'Pulse Transit Time (PTT) & Pulse Arrival Time (PAT) Extraction',
      'Time & Frequency Domain Heart Rate Variability (HRV - SDNN, RMSSD, LF/HF)',
      '1D-CNN Spatial Morphological Feature Extraction',
      'Bi-directional LSTM (BiLSTM) with Temporal Attention'
    ],
    highlights: [
      'Dual-modality sensor fusion (ECG electrical + PPG optical) for superior noise resilience against motion artifacts.',
      'Real-time arrhythmia classification (Normal, AFib, PVC, PAC, Tachycardia, Bradycardia).',
      'Physiological metric tracking: Continuous Heart Rate, HRV indices, and Pulse Transit Time (PTT).',
      'Fourth Year / Final Year B.E. Computer Engineering Capstone Research Project.'
    ],
    links: {
      github: 'https://github.com/hrishchavan25'
    }
  },
  {
    id: 'w-secureroutes',
    title: 'W-SecureRoutes',
    tagline: 'Women\'s Safety-Focused Route Assistance & Awareness Application',
    category: 'Mobile & Safety',
    status: 'Copyright Filed',
    description: 'A dedicated mobile application engineered to heighten pedestrian route safety awareness for women, calculating secure transit corridors using real-time spatial APIs and route optimization research.',
    fullOverview: 'Standard navigation systems optimize solely for shortest distance or quickest transit time, often routing pedestrians through isolated, poorly lit, or high-risk areas. W-SecureRoutes tackles this critical gap by integrating geospatial routing engines (OSRM, TomTom) with AI/ML safety evaluation models to recommend safer, well-lit corridors. Led major technical implementations, API integrations, and ongoing research manuscript preparation.',
    problemStatement: 'Pedestrians, particularly women navigating alone, lack navigation tools that account for environmental safety parameters, route lighting, open establishments, and incident densities.',
    solutionArchitecture: 'Engineered with React Native for cross-platform mobile access, interfacing with Python backend services that process spatial data from OSRM and TomTom APIs. Formulates safety scores based on contextual geographic data to generate alternative, high-awareness routes.',
    keyContributions: [
      'Developed core React Native mobile interface and seamless navigation flows.',
      'Engineered backend integration with OSRM and TomTom routing APIs for real-time waypoint queries.',
      'Conducted extensive AI/ML research analysis on route optimization and safety index formulation.',
      'Drafted formal technical documentation and research paper manuscripts.',
      'Filed official intellectual property copyright application for system architecture.'
    ],
    techStack: [
      'React Native',
      'Python',
      'OSRM API',
      'TomTom Maps API',
      'Geospatial Routing',
      'AI/ML Analysis',
      'JavaScript'
    ],
    highlights: [
      'Women-first safety focus with dual distance vs. safety route evaluation.',
      'Real-time integration with Open Source Routing Machine (OSRM) and TomTom APIs.',
      'Active research paper drafting and registered copyright application.',
      'Clean, accessible mobile interface tailored for rapid emergency accessibility.'
    ],
    copyrightNote: 'Copyright Application Filed for System Architecture & Routing Framework',
    links: {
      github: 'https://github.com/hrishchavan25'
    }
  },
  {
    id: 'AI-Stress-Management',
    title: 'AI-Based Stress Management System',
    tagline: 'Digital Mental Health & Applied AI Recommendation Systems',
    category: 'AI & Mental Health',
    status: 'Copyright Registered',
    copyrightRegistered: true,
    certificateNo: 'LD-20260194125',
    applicationNo: 'LD-10379/2026-CO',
    copyrightYear: '2026',
    registeredWorkTitle: 'Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress',
    hasCertificatePdf: true,
    description: 'An official Copyright-Registered research framework & intelligent platform designed to quantify stress markers and deliver personalized, compassionate wellness interventions using machine learning.',
    fullOverview: 'Mental health support systems require adaptive, intelligent assessment mechanisms that provide compassionate and accurate guidance. This system researches applied machine learning techniques to evaluate stress indicators and curate customized coping strategies, mindfulness routines, and habit modifications. Officially registered with the Copyright Office, Government of India (Certificate No. LD-20260194125, Year 2026).',
    problemStatement: 'Traditional stress management tools offer generic, one-size-fits-all advice without evaluating individual stress patterns or tracking personalized wellness trajectories.',
    solutionArchitecture: 'Designed in Python utilizing PyTorch and Scikit-learn to analyze user-input stress markers and behavioral logs. The system maps stress categories and dynamically triggers customized relaxation, mindfulness, and cognitive wellness recommendations based on the registered digital health framework.',
    keyContributions: [
      'Designed intelligent stress assessment models using PyTorch and Scikit-learn.',
      'Investigated predictive wellness recommendation algorithms tailored to individual stress triggers.',
      'Conducted comprehensive literature review on digital mental health interventions and AI ethics.',
      'Registered official Intellectual Property Copyright (Certificate No. LD-20260194125, Year 2026) with Government of India.'
    ],
    techStack: [
      'Python',
      'PyTorch',
      'Scikit-learn',
      'Transformers',
      'Digital Mental Health',
      'Data Analysis',
      'Streamlit / Web UI',
      'AI/ML Research'
    ],
    highlights: [
      'Official Registered Copyright Certificate (LD-20260194125) granted by Govt. of India (2026).',
      'Work Title: "Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress".',
      'Personalized wellness recommendation engine based on adaptive ML assessment.',
      'Research-backed digital mental health methodologies for accessible support.'
    ],
    copyrightNote: 'Official Copyright Registered • Certificate No. LD-20260194125 (Govt. of India, 2025-26)',
    links: {
      github: 'https://github.com/hrishchavan25'
    }
  },
  {
    id: 'career-counseling',
    title: 'Career Counseling & Guidance Platform',
    tagline: 'Interactive Career Exploration Platform with Intelligent Rule-Based Chatbot Guidance',
    category: 'Web Systems & Guidance',
    status: 'Completed',
    description: 'An interactive web-based career guidance platform offering personalized domain recommendations and conversational chatbot assistance for aspiring students and professionals.',
    fullOverview: 'Developed to empower students navigating complex career decisions with structured, accessible guidance. Features interactive skill and interest assessments coupled with a rule-based conversational chatbot to answer queries regarding career paths, required skills, and growth roadmaps.',
    problemStatement: 'Students often lack affordable, personalized career mentorship and struggle to identify educational roadmaps suited to their unique skill sets and interests.',
    solutionArchitecture: 'Built with a clean web interface (HTML, CSS, JavaScript) backed by Python and Node.js services. Integrates an intelligent rule-based decision tree chatbot engine that parses user queries, matches career profiles, and delivers structured recommendations.',
    keyContributions: [
      'Developed interactive frontend with intuitive question flows and recommendation displays.',
      'Built backend logic in Python and Node.js for career profile matching and assessment scoring.',
      'Engineered an intelligent rule-based chatbot for real-time student guidance and FAQ resolution.',
      'Designed modular database schema in SQLite3 for storing career domains, prerequisites, and resource links.'
    ],
    techStack: [
      'Python',
      'Node.js',
      'JavaScript',
      'HTML5 / CSS3',
      'SQLite3',
      'Chatbot Engine',
      'Web Development'
    ],
    highlights: [
      'Personalized domain recommendation matching algorithms based on user skill inputs.',
      'Integrated conversational chatbot for on-demand student queries.',
      'Structured career roadmaps covering tech, design, engineering, and data disciplines.',
      'Lightweight, responsive, and accessible on both desktop and mobile browsers.'
    ],
    links: {
      github: 'https://github.com/hrishchavan25'
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    iconName: 'Code2',
    description: 'Strong foundation in object-oriented programming, data structures, algorithm design, and systems engineering.',
    skills: [
      {
        name: 'Python',
        level: 95,
        categoryBadge: 'Primary ML & Backend',
        tags: ['AI/ML Research', 'PyTorch', 'Scikit-learn', 'Biomedical DSP', 'APIs'],
        description: 'Primary language for applied machine learning, biomedical signal analysis (ECG/PPG), route optimization models, and AI research systems.'
      },
      {
        name: 'Java',
        level: 90,
        categoryBadge: 'Object-Oriented & Enterprise',
        tags: ['OOP', 'Data Structures', 'Collections', 'Algorithms', 'Software Engineering'],
        description: 'Solid proficiency in object-oriented principles, modular architecture, data structures, and multithreaded application logic.'
      },
      {
        name: 'C',
        level: 90,
        categoryBadge: 'Systems & Memory',
        tags: ['Pointers', 'Memory Allocation', 'Low-Level Logic', 'Core Algorithms'],
        description: 'Deep understanding of memory management, pointer manipulation, and foundational algorithmic efficiency.'
      },
      {
        name: 'C++',
        level: 80,
        categoryBadge: 'STL & Algorithmic Optimization',
        tags: ['STL', 'OOP', 'Graph Algorithms', 'Time Complexity'],
        description: 'Strong foundation in Standard Template Library (vectors, maps, heaps), algorithm optimization, and graph search algorithms.'
      }
    ]
  },
  {
    title: 'AI/ML & Biomedical Research',
    iconName: 'Cpu',
    description: 'Applied machine learning research, biomedical signal processing (ECG & PPG), deep neural models, and technical paper writing.',
    skills: [
      {
        name: 'Biomedical Signal Processing & DSP',
        level: 92,
        categoryBadge: 'Cardiac & Telemetry DSP',
        tags: ['ECG & PPG Processing', 'Pan-Tompkins', 'Butterworth Filters', 'Wavelet DWT', 'HRV & PTT'],
        description: 'Conditioning biological time-series, noise filtering, peak extraction, Pulse Transit Time computation, and feature engineering for arrhythmia screening.'
      },
      {
        name: 'PyTorch & Deep Learning',
        level: 92,
        categoryBadge: 'Deep Architectures',
        tags: ['1D-CNN', 'BiLSTM', 'Attention Mechanisms', 'Multi-Modal Fusion', 'Time-Series Models'],
        description: 'Building and training 1D-CNN + BiLSTM sequential models, attention-based multi-modal fusion networks, and predictive classification pipelines.'
      },
      {
        name: 'Machine Learning Research & Scikit-learn',
        level: 91,
        categoryBadge: 'Core Discipline',
        tags: ['Literature Review', 'Problem Formulation', 'Evaluation Metrics', 'Model Benchmarking'],
        description: 'Conducting systematic literature reviews, problem analysis, intelligent system design evaluation, and implementation benchmarking.'
      },
      {
        name: 'Technical Paper Writing & IP Filings',
        level: 93,
        categoryBadge: 'Academic Documentation',
        tags: ['Research Manuscripts', 'Methodology Drafting', 'Project Documentation', 'Copyright Certificates'],
        description: 'Experienced in preparing research-oriented technical manuscripts, methodology documentation, and intellectual property copyright registrations.'
      },
      {
        name: 'Data Analysis & Scientific Computing',
        level: 90,
        categoryBadge: 'Analytical Methods',
        tags: ['NumPy', 'SciPy.signal', 'Pandas', 'WFDB (PhysioNet)', 'Plotly'],
        description: 'Processing physiological datasets (MIT-BIH, PhysioNet), spatial datasets, and survey metrics for empirical research analysis.'
      }
    ]
  },
  {
    title: 'Web & Mobile Development',
    iconName: 'Globe',
    description: 'Cross-platform mobile applications, reactive web user interfaces, and server-side integration.',
    skills: [
      {
        name: 'React Native',
        level: 90,
        categoryBadge: 'Mobile Engineering',
        tags: ['Cross-Platform', 'Mobile Navigation', 'API Integration', 'UI/UX'],
        description: 'Engineered mobile application interface for W-SecureRoutes with real-time API queries and responsive user flows.'
      },
      {
        name: 'HTML, CSS & JavaScript',
        level: 92,
        categoryBadge: 'Frontend Engineering',
        tags: ['ES6+', 'Responsive Design', 'Tailwind CSS', 'DOM Manipulation'],
        description: 'Crafting clean, accessible, and responsive user experiences with modern JavaScript standards and modular styling.'
      },
      {
        name: 'NodeJS',
        level: 86,
        categoryBadge: 'Backend Runtime',
        tags: ['REST APIs', 'Express', 'Asynchronous I/O', 'Server Logic'],
        description: 'Building backend routing services, middleware, and API endpoints for career counseling and data management.'
      },
      {
        name: 'Streamlit',
        level: 88,
        categoryBadge: 'Rapid AI Prototyping',
        tags: ['ML Dashboards', 'Interactive Prototypes', 'Data Visualization'],
        description: 'Rapidly creating interactive web interfaces for machine learning demonstrations and experimental data analysis.'
      }
    ]
  },
  {
    title: 'Cloud & Database Technologies',
    iconName: 'Database',
    description: 'Cloud infrastructure tools, relational database design, and structured query management.',
    skills: [
      {
        name: 'Amazon Web Services (AWS)',
        level: 82,
        categoryBadge: 'Cloud Infrastructure',
        tags: ['EC2', 'S3', 'Cloud Fundamentals', 'Deployment'],
        description: 'Working with AWS cloud primitives for deploying application backends, storage, and computing services.'
      },
      {
        name: 'MySQL',
        level: 88,
        categoryBadge: 'Relational Database',
        tags: ['Normalized Schemas', 'Indexing', 'Complex Joins', 'ACID Transactions'],
        description: 'Designing normalized relational databases, writing optimized queries, and maintaining data integrity.'
      },
      {
        name: 'SQLite3',
        level: 90,
        categoryBadge: 'Embedded Storage',
        tags: ['Local Persistence', 'Lightweight Relational', 'SQL Queries'],
        description: 'Utilized for lightweight, embedded application storage in the career guidance and counseling platforms.'
      }
    ]
  }
];

export const EXTRACURRICULARS: ExtracurricularItem[] = [
  {
    role: 'Finalist',
    organizationOrEvent: 'Recursion 7.0 24-Hour Hackathon',
    type: 'Hackathon',
    period: '2026',
    description: 'Selected as a finalist in a rigorous 24-hour national hackathon, developing and pitching an innovative technological prototype under high time constraints.',
    badges: ['Finalist', '24h Hackathon', 'Rapid Prototyping', 'Team Collaboration']
  },
  {
    role: 'Content & Editorial Secretary',
    organizationOrEvent: 'CESS (Computer Engineering Students\' Society) & Codecell of RGIT',
    type: 'Leadership & Editorial',
    period: '2025 - 2026',
    description: 'Leading content strategy, technical documentation, newsletters, and editorial communications for the premier computer engineering student body and coding cell.',
    badges: ['Editorial Leadership', 'Technical Writing', 'Student Community', 'Event Coordination']
  },
  {
    role: 'Active Member & Creative Participant',
    organizationOrEvent: 'RGIT\'s Wellness Club',
    type: 'Community & Wellness',
    period: '2025 - Present',
    description: 'Active member advocating for student mental health and holistic wellness on campus; participated in competitive creative media and reel-making initiatives.',
    badges: ['Mental Wellness Advocacy', 'Creative Media', 'Campus Outreach']
  },
  {
    role: 'Participant',
    organizationOrEvent: 'Frontend Arena 19-Hour Online Hackathon',
    type: 'Hackathon',
    period: '2025',
    description: 'Competed in a 19-hour intensive frontend sprint building accessible, responsive, and performant web interfaces under strict visual constraints.',
    badges: ['Frontend Sprint', '19-Hour Hackathon', 'Web Accessibility']
  },
  {
    role: 'Participant',
    organizationOrEvent: 'Codertine 5.0 2-Hour Solo Hackathon',
    type: 'Hackathon',
    period: '2025',
    description: 'Participated in a high-speed individual algorithmic coding and software development hackathon, solving real-time coding challenges.',
    badges: ['Solo Challenge', 'Algorithmic Speed', 'Problem Solving']
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    year: '2026 - 2027',
    title: 'Smart Arrhythmia Detection System Using ECG & PPG Signals',
    organization: 'Biomedical AI & Signal Processing Research',
    type: 'Research',
    description: 'Final Year B.E. Capstone Research: Designing a multi-modal deep learning framework combining electrocardiogram (ECG) and photoplethysmogram (PPG) signals with 1D-CNN + BiLSTM for non-invasive cardiac arrhythmia classification and continuous monitoring.',
    badges: ['Fourth Year Project', 'Biomedical AI', 'ECG & PPG', 'PyTorch', 'Signal Processing']
  },
  {
    year: '2025 - 2026',
    title: 'AI-Based Stress Management System (Registered Copyright)',
    organization: 'Applied AI / Mental Health Research',
    type: 'Research',
    description: 'Official Copyright Registered (Certificate No. LD-20260194125, Govt. of India) for "Stress as a Quantifiable Construct: A Digital Health Framework for Measurement and Management of Stress". Features ML-driven psychometric evaluation and adaptive intervention strategies.',
    badges: ['Copyright Registered 2025-26', 'PyTorch', 'Scikit-learn', 'AI Research', 'Mental Wellness']
  },
  {
    year: '2025 - 2026',
    title: 'W-SecureRoutes — Women\'s Safety Navigation System',
    organization: 'Geospatial AI & Mobile Safety',
    type: 'Project',
    description: 'Developed React Native route safety assistance application integrating OSRM and TomTom APIs. Conducted route optimization research analysis and filed intellectual property copyright application.',
    badges: ['Copyright Filed', 'React Native', 'Python', 'OSRM & TomTom', 'Research Paper']
  },
  {
    year: '2025 - 2026',
    title: 'Content & Editorial Secretary at CESS & Codecell',
    organization: 'RGIT Computer Engineering Department',
    type: 'Milestone',
    description: 'Spearheading departmental publications, technical writing initiatives, and collaborative coding workshops for student developers.',
    badges: ['Editorial Leadership', 'Technical Writing', 'RGIT Codecell', 'CESS']
  },
  {
    year: '2023 - 2027',
    title: 'Bachelor of Engineering in Computer Engineering',
    organization: 'University of Mumbai (RGIT)',
    type: 'Education',
    description: 'Fourth-year / Final Year undergraduate. Relevant coursework: Data Structures, Machine Learning, Artificial Intelligence, Biomedical Signal Processing, Cloud Computing, Database Management Systems, Software Engineering, Computer Networks, Cryptography & System Security.',
    badges: ['Fourth Year', 'Final Year Undergraduate', 'Machine Learning', 'Data Structures', 'AI', 'Biomedical DSP']
  }
];