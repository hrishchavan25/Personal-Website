import React from 'react';
import { PERSONAL_INFO, TIMELINE, PROFILE_IMAGE, EXTRACURRICULARS } from '../data/portfolioData';
import { 
  GraduationCap, 
  Sparkles, 
  Target,
  Clock,
  HeartHandshake,
  BookOpen,
  FileText,
  Award,
  Users,
  Compass
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const coursework = [
    'Machine Learning',
    'Biomedical Signal Processing & DSP',
    'Artificial Intelligence',
    'Data Structures & Algorithms',
    'Cloud Computing',
    'Database Management System',
    'Software Engineering',
    'Computer Networks',
    'Cryptography & System Security'
  ];

  return (
    <section 
      id="about" 
      className="py-0 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-4xl mx-auto px-0">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
              About Me
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-folklore font-normal text-slate-900 tracking-tight mt-2.5">
            About Me
          </h2>
          
        </div>

        {/* 2-Column Bento Overview */}
        <div className="grid grid-cols-1 gap-5">
          
          {/* Left Column: Bio, Education, Coursework (7 cols) */}
          <div className="space-y-5">
            
            {/* Engineering Philosophy Card with Enlarged Polaroid Frame */}
            <div className="girly-card p-0 bg-transparent border-0 shadow-none text-center">
              
              <div className="flex flex-col items-center gap-5 mb-6">
                
                {/* Enlarged Polaroid Photo Showcase */}
                <div className="polaroid-frame shrink-0 w-44 sm:w-48 text-center cursor-pointer group">
                  <div className="washi-tape" />
                  <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden bg-purple-50 ring-1 ring-purple-200 mb-2">
                    <img
                      src={PROFILE_IMAGE}
                      alt={PERSONAL_INFO.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="text-center max-w-2xl">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
                      <Target className="w-4 h-4" />
                    </div>
                    <h3 className="text-xl font-folklore font-bold text-slate-900">
                      Research & Development Philosophy
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 mt-2.5 leading-relaxed font-chic">
                    I turn AI research into practical tools for safer, healthier communities.
                  </p>
                  <p className="hidden sm:block text-xs sm:text-sm text-slate-700 mt-2 leading-relaxed font-chic">
                    Proficient across <strong className="text-purple-950 font-semibold">Python, Java, C, C++, SQL, React Native</strong>, and modern full-stack web architectures.
                  </p>
                </div>
              </div>

              {/* 3 Core Pillars in Bento sub-cards */}
              <div className="hidden grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-purple-100">
                <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-100/80">
                  <div className="font-bold text-xs text-purple-900 font-mono">01. Applied Research</div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-chic">
                    Geospatial safety routing & digital mental wellness systems.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100/80">
                  <div className="font-bold text-xs text-pink-900 font-mono">02. Modern Full-Stack</div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-chic">
                    React Native mobile apps, Python APIs, and SQLite3 architectures.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-violet-50/70 border border-violet-100/80">
                  <div className="font-bold text-xs text-violet-900 font-mono">03. IP & Innovation</div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed font-chic">
                    Official copyright applications filed for two novel software systems.
                  </p>
                </div>
              </div>
            </div>

            {/* Education & Coursework Card */}
            <div className="girly-card p-0 bg-transparent border-0 shadow-none text-center space-y-4">
              <div className="flex flex-col items-center gap-3">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-purple-700 via-purple-600 to-pink-600 text-white shadow-md shadow-purple-500/20 shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="max-w-2xl">
                  <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">Academic Foundation</span>
                  <h4 className="text-xl font-folklore font-normal text-slate-900 mt-0.5">
                    Bachelor of Engineering in Computer Engineering
                  </h4>
                  <p className="text-xs sm:text-sm text-purple-900 font-chic font-semibold">
                    Rajiv Gandhi Institute of Technology (RGIT), University of Mumbai • 2023 – 2027
                  </p>
                  <p className="text-xs text-slate-600 mt-1 font-chic">
                    Currently in the Fourth Year (Final Year), concentrating on Applied Machine Learning, Biomedical Signal Processing, and Human-Centric Software Systems.
                  </p>
                </div>
              </div>

              {/* Coursework pills */}
              <div className="hidden pt-3 border-t border-purple-100">
                <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-purple-900 mb-2">
                  <BookOpen className="w-3.5 h-3.5 text-purple-600" />
                  <span>Relevant Academic Coursework</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {coursework.map((course) => (
                    <span 
                      key={course}
                      className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-chic font-medium"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Extracurriculars & Leadership Card */}
            <div className="hidden girly-card p-6 sm:p-7 bg-white/95 border border-purple-200/90 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-xl bg-purple-100 text-purple-700">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-folklore font-normal text-slate-900">
                    Extracurriculars & Leadership
                  </h3>
                </div>
                <span className="font-folklore text-sm text-purple-700">community & creativity</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {EXTRACURRICULARS.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100/90 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-[10px] font-mono font-bold text-purple-800 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                          {item.role}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">{item.period}</span>
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 mt-2 font-chic">{item.organizationOrEvent}</h4>
                      <p className="text-xs text-purple-800 font-folklore mt-0.5">{item.type}</p>
                      <p className="text-xs text-slate-600 mt-1 font-chic">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Engineering Journey Timeline (5 cols) */}
          <div className="hidden space-y-4">
            <div className="girly-card p-6 sm:p-7 bg-white/95 border border-purple-200/90 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
                    <Clock className="w-4 h-4" />
                  </div>
                  <h3 className="text-xl font-folklore font-normal text-slate-900">
                    Milestones & Achievements
                  </h3>
                </div>
                <span className="font-folklore text-sm text-purple-700">
                  journey ✨
                </span>
              </div>

              <div className="space-y-4 border-l-2 border-purple-200 pl-4 relative ml-1">
                {TIMELINE.map((item, idx) => (
                  <div key={idx} className="relative group">
                    {/* Timeline dot */}
                    <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-purple-600 ring-4 ring-white group-hover:scale-125 transition-transform" />

                    <div className="p-4 rounded-2xl bg-white border border-purple-100 hover:border-purple-300 transition-all shadow-2xs">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[10px] font-mono text-purple-900 font-bold bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">
                          {item.year}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-medium">
                          {item.type}
                        </span>
                      </div>

                      <h4 className="mt-2 text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors font-chic">
                        {item.title}
                      </h4>
                      <p className="font-folklore text-base text-purple-800 mt-0.5">
                        {item.organization}
                      </p>

                      <p className="mt-1.5 text-xs text-slate-600 leading-relaxed font-chic">
                        {item.description}
                      </p>

                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {item.badges.map((badge) => (
                          <span key={badge} className="px-2 py-0.5 rounded-full bg-purple-50 text-purple-900 font-mono text-[9px] font-semibold border border-purple-200">
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Resume CTA */}
              <div className="pt-5 mt-5 border-t border-purple-100">
                <button
                  id="btn-about-view-resume"
                  onClick={onOpenResume}
                  className="w-full py-2.5 px-4 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-900 text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-2xs ios-btn cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>View Formatted CV / Resume</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
