import React from 'react';
import { PERSONAL_INFO, PROJECTS, PROFILE_IMAGE, COPYRIGHTS, EXTRACURRICULARS } from '../data/portfolioData';
import { X, Download, Mail, Phone, MapPin, Github, Linkedin, Award, BookOpen, GraduationCap } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCertificate?: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, onOpenCertificate }) => {
  if (!isOpen) return null;

  const handleDownloadSimulation = () => {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#9333ea', '#a855f7', '#c084fc']
    });
    window.print();
  };

  return (
    <div 
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl rounded-[32px] bg-white text-slate-900 border-2 border-purple-200 shadow-2xl p-6 sm:p-10 my-6 max-h-[92vh] overflow-y-auto print:bg-white print:text-slate-900 print:max-h-none print:shadow-none print:p-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Floating Control Bar */}
        <div className="flex items-center justify-between pb-5 mb-6 border-b border-purple-100 print:hidden">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600 animate-pulse" />
            <span className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider">
              Curriculum Vitae • Hrishita Chavan
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadSimulation}
              className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm cursor-pointer ios-btn"
              title="Print / Save as PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Save PDF / Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-purple-50 hover:bg-purple-100 text-purple-900 border border-purple-200 transition-colors cursor-pointer ios-btn"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Content */}
        <div className="space-y-6 text-slate-800 print:text-slate-900 font-sans">
          
          {/* Header */}
          <div className="text-center sm:text-left pb-5 border-b border-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-20 h-24 rounded-2xl overflow-hidden ring-4 ring-purple-200 shadow-md shrink-0 bg-white print:hidden">
                <img 
                  src={PROFILE_IMAGE} 
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl font-folklore font-normal text-slate-900 tracking-tight">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="font-folklore text-lg text-purple-800 mt-0.5">
                  Computer Engineering Researcher & Developer
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl leading-relaxed">
                  Fourth-year Computer Engineering undergraduate at University of Mumbai specializing in applied machine learning, biomedical signal processing (multi-modal ECG & PPG arrhythmia detection), safety-focused routing systems, and digital mental health engineering.
                </p>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-600 space-y-1 sm:text-right shrink-0">
              <p className="flex items-center sm:justify-end gap-1.5 font-bold text-purple-900">
                <Mail className="w-3.5 h-3.5 text-purple-600" />
                <span>{PERSONAL_INFO.email}</span>
              </p>
              <p className="flex items-center sm:justify-end gap-1.5 text-slate-700">
                <Phone className="w-3.5 h-3.5 text-purple-600" />
                <span>{PERSONAL_INFO.phone}</span>
              </p>
              <p className="text-slate-600">GitHub: github.com/{PERSONAL_INFO.githubUsername}</p>
              <p className="text-slate-600">LinkedIn: linkedin.com/in/{PERSONAL_INFO.linkedinName}</p>
              <p className="text-purple-700 font-semibold">{PERSONAL_INFO.location}</p>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider pb-1.5 border-b border-purple-100 flex items-center justify-between">
              <span>Education</span>
              <span className="font-folklore text-sm text-purple-700">University of Mumbai</span>
            </h2>
            <div className="mt-3 flex justify-between items-start text-xs">
              <div>
                <p className="font-bold text-slate-900 text-sm">Rajiv Gandhi Institute of Technology (RGIT), Mumbai</p>
                <p className="text-purple-900 font-medium">Bachelor of Engineering in Computer Engineering (Fourth Year / Final Year)</p>
                <p className="text-slate-600 mt-0.5">Focus in Applied AI/ML, Biomedical Signal Processing, Cloud Computing, and Software Engineering</p>
              </div>
              <span className="font-mono text-purple-900 text-xs font-bold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">2023 – 2027</span>
            </div>

            {/* Coursework */}
            <div className="mt-2 text-xs text-slate-600">
              <strong className="text-slate-800">Relevant Coursework:</strong> Machine Learning, Biomedical Signal Processing & DSP, Artificial Intelligence, Data Structures & Algorithms, Cloud Computing, Database Management Systems, Software Engineering, Computer Networks, Cryptography & System Security.
            </div>
          </div>

          {/* Intellectual Property & Copyrights Registered */}
          <div>
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider pb-1.5 border-b border-purple-100 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-purple-700" />
                <span>Intellectual Property & Copyright Registrations</span>
              </div>
              <span className="text-[11px] font-mono text-emerald-800 font-semibold print:hidden">Govt. Registered</span>
            </h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {COPYRIGHTS.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-purple-50/60 border border-purple-200 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <span className="font-bold text-slate-900">{item.title}</span>
                      <span className={`font-mono text-[10px] px-2 py-0.5 rounded-full border font-bold shrink-0 ${
                        item.isRegistered ? 'bg-emerald-100 text-emerald-900 border-emerald-300' : 'bg-white text-purple-800 border-purple-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    {item.registeredWorkTitle && (
                      <p className="text-[10px] text-purple-900 font-medium italic mt-0.5">
                        &ldquo;{item.registeredWorkTitle}&rdquo;
                      </p>
                    )}
                    <p className="text-slate-600 mt-1 text-[11px] leading-relaxed">{item.description}</p>
                    {item.certificateNo && (
                      <p className="text-[10px] font-mono text-purple-950 font-bold mt-1.5">
                        Cert No: {item.certificateNo} ({item.year})
                      </p>
                    )}
                  </div>

                  {item.hasCertificatePdf && onOpenCertificate && (
                    <div className="mt-2.5 pt-2 border-t border-purple-100 flex items-center justify-end print:hidden">
                      <button
                        onClick={() => {
                          onClose();
                          onOpenCertificate();
                        }}
                        className="text-[10px] font-mono font-bold text-purple-900 hover:text-purple-950 flex items-center gap-1 bg-white px-2.5 py-1 rounded-full border border-purple-200 hover:border-purple-300 shadow-2xs cursor-pointer"
                      >
                        <Award className="w-3 h-3 text-emerald-600" />
                        <span>View Certificate PDF</span>
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Proficiencies */}
          <div>
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider pb-1.5 border-b border-purple-100">
              Technical Proficiencies
            </h2>
            <div className="mt-3 space-y-2 text-xs text-slate-700 leading-relaxed">
              <p>
                <strong className="text-slate-900">Programming Languages:</strong> Python, Java, C, C++
              </p>
              <p>
                <strong className="text-slate-900">AI / ML & Biomedical Signal Processing:</strong> PyTorch, Biomedical DSP (Pan-Tompkins, Butterworth Filters, DWT Wavelets), Scikit-learn, 1D-CNN + BiLSTM, Transformers, Data Analysis, Technical Paper Writing
              </p>
              <p>
                <strong className="text-slate-900">Web & Mobile Development:</strong> React Native, HTML5, CSS3, JavaScript (ES6+), NodeJS, Streamlit
              </p>
              <p>
                <strong className="text-slate-900">Cloud & Databases:</strong> AWS, MySQL, SQLite3
              </p>
            </div>
          </div>

          {/* Key Engineering & Research Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider pb-1.5 border-b border-purple-100">
              Key Engineering & Research Projects
            </h2>
            <div className="mt-3 space-y-4 text-xs">
              
              {/* Project 1: Smart Arrhythmia Detection System */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-1.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Smart Arrhythmia Detection System Using ECG & PPG Signals (Senior Capstone)
                  </h3>
                  <span className="font-mono text-purple-800 font-semibold text-[11px]">Python, PyTorch, SciPy.signal, 1D-CNN + BiLSTM, PhysioNet</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Dual-modality biomedical AI system integrating simultaneous electrocardiogram (ECG) electrical signals and photoplethysmogram (PPG) optical pulse waves for continuous, noise-resilient cardiac arrhythmia classification.
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                  <li>Engineered digital preprocessing pipeline with Butterworth bandpass filtering, DWT wavelet denoising, and Pan-Tompkins QRS detection.</li>
                  <li>Extracted physiological markers including Pulse Transit Time (PTT), Pulse Arrival Time (PAT), and time/frequency HRV metrics (SDNN, RMSSD, LF/HF).</li>
                  <li>Built a hybrid 1D-CNN + Bi-directional LSTM architecture with attention in PyTorch for robust multi-class beat classification (Normal, AFib, PVC, PAC).</li>
                  <li>Benchmarked on PhysioNet/MIT-BIH multi-parameter clinical physiological databases.</li>
                </ul>
              </div>

              {/* Project 2: W-SecureRoutes */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-1.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    W-SecureRoutes — Women&apos;s Safety-First Dynamic Navigation Platform
                  </h3>
                  <span className="font-mono text-purple-800 font-semibold text-[11px]">React Native, Python, OSRM, TomTom API</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Developed an intelligent navigation system calculating real-time safety scores across ambient street lighting, crowd density, and historical incident logs.
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                  <li>Engineered multi-objective pathfinding routing engine prioritizing personal safety while maintaining efficient transit times.</li>
                  <li>Integrated OSRM routing and TomTom APIs with dynamic hazard weighting and 1-tap SOS panic dispatch.</li>
                  <li>Official Copyright Application registered for proprietary safety navigation framework.</li>
                </ul>
              </div>

              {/* Project 3: AI-Based Stress Management System */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-1.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    AI-Based Stress Management System (Registered Copyright)
                  </h3>
                  <span className="font-mono text-purple-800 font-semibold text-[11px]">Python, PyTorch, Scikit-learn, Transformers</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Personalized digital mental health assessment platform delivering customized therapeutic interventions and stress analysis.
                </p>
                <ul className="list-disc list-inside space-y-0.5 text-slate-600 pl-1">
                  <li>Implemented predictive wellness modeling with psychometric pattern evaluation and tailored daily routines.</li>
                  <li>Official Registered Copyright Certificate (LD-20260194125) granted by Govt. of India (2025-26).</li>
                </ul>
              </div>

              {/* Project 4: Career Counseling & Guidance Platform */}
              <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 space-y-1.5">
                <div className="flex justify-between items-baseline flex-wrap gap-1">
                  <h3 className="font-bold text-slate-900 text-sm">
                    Career Counseling & Guidance Platform
                  </h3>
                  <span className="font-mono text-purple-800 font-semibold text-[11px]">Python, Node.js, Web Development, SQLite3, Chatbot</span>
                </div>
                <p className="text-slate-700 leading-relaxed">
                  Comprehensive educational platform featuring aptitude assessments, curated career roadmaps, and an interactive rule-based mentorship chatbot.
                </p>
              </div>

            </div>
          </div>

          {/* Extracurriculars & Leadership */}
          <div>
            <h2 className="text-xs font-mono font-bold text-purple-900 uppercase tracking-wider pb-1.5 border-b border-purple-100">
              Extracurricular Activities & Leadership
            </h2>
            <div className="mt-3 space-y-2 text-xs text-slate-700">
              {EXTRACURRICULARS.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <div>
                    <strong className="text-slate-900">{item.organizationOrEvent}</strong> — <span className="text-purple-800 font-medium">{item.role}</span> ({item.period}): {item.description}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
