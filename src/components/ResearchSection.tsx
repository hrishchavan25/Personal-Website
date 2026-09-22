import React from 'react';
import { RESEARCH_AREAS, COPYRIGHTS } from '../data/portfolioData';
import { 
  HeartHandshake, 
  ShieldCheck, 
  BrainCircuit, 
  Sparkles, 
  FileCheck2, 
  BookOpen, 
  Layers, 
  Compass, 
  Award,
  ArrowUpRight,
  ChevronRight
} from 'lucide-react';

interface ResearchSectionProps {
  onOpenCertificate?: () => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onOpenCertificate }) => {
  return (
    <section 
      id="research" 
      className="py-10 md:py-16 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
              Research
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-folklore font-normal text-slate-900 tracking-tight mt-2.5">
            Research
          </h2>
          
        </div>

        {/* Narrative & Philosophy Spotlight Banner */}
        <div className="hidden mb-10 girly-card p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-white via-purple-50/70 to-pink-50/50 border border-purple-200/90 shadow-lg shadow-purple-500/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100/80 border border-purple-200 text-purple-900 text-xs font-mono font-bold">
                <HeartHandshake className="w-3.5 h-3.5 text-purple-600" />
                <span>My Core Engineering Philosophy</span>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-chic">
                I build applied AI/ML systems for safety, digital wellness, and accessible education, connecting research with useful software.
              </p>

              <div className="hidden sm:grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-purple-800 font-bold text-xs font-mono">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>Women&apos;s Safety</span>
                  </div>
                  <p className="text-xs text-slate-600 font-chic mt-1">Geospatial risk modeling & awareness navigation</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-purple-800 font-bold text-xs font-mono">
                    <BrainCircuit className="w-4 h-4 text-purple-600" />
                    <span>Mental Wellness AI</span>
                  </div>
                  <p className="text-xs text-slate-600 font-chic mt-1">Intelligent stress assessment & personalized routines</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/90 border border-purple-100 shadow-2xs">
                  <div className="flex items-center gap-2 text-purple-800 font-bold text-xs font-mono">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <span>Empirical Research</span>
                  </div>
                  <p className="text-xs text-slate-600 font-chic mt-1">Literature reviews, technical papers & IP filings</p>
                </div>
              </div>
            </div>

            {/* Right Summary Capsule */}
            <div className="lg:col-span-4 flex flex-col justify-center space-y-4 p-5 sm:p-6 rounded-3xl bg-purple-900 text-white shadow-xl shadow-purple-950/20 relative">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-widest text-purple-300 font-bold">Key Milestones</span>
                <Sparkles className="w-4 h-4 text-pink-300" />
              </div>

              <div className="space-y-3 divide-y divide-purple-800/80">
                <div className="pt-2 first:pt-0">
                  <div className="flex items-center gap-2 text-pink-300 text-xs font-mono font-bold">
                    <Award className="w-3.5 h-3.5" />
                    <span>Intellectual Property</span>
                  </div>
                  <p className="text-xs text-purple-100 font-chic mt-0.5">
                    Copyright applications filed for AI-Based Stress Management System & W-SecureRoutes.
                  </p>
                </div>

                <div className="pt-3">
                  <div className="flex items-center gap-2 text-pink-300 text-xs font-mono font-bold">
                    <FileCheck2 className="w-3.5 h-3.5" />
                    <span>Research Papers</span>
                  </div>
                  <p className="text-xs text-purple-100 font-chic mt-0.5">
                    Actively drafting and contributing to technical manuscripts on route safety optimization.
                  </p>
                </div>

                <div className="pt-3">
                  <div className="flex items-center gap-2 text-pink-300 text-xs font-mono font-bold">
                    <Compass className="w-3.5 h-3.5" />
                    <span>Hackathon Finalist</span>
                  </div>
                  <p className="text-xs text-purple-100 font-chic mt-0.5">
                    Recursion 7.0 24-hour National Hackathon Finalist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Official Copyright Registrations Banner */}
        <div id="copyrights" className="hidden mb-10 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-purple-700 font-bold">
                Intellectual Property & Registrations
              </span>
              <h3 className="text-2xl font-folklore text-slate-900 mt-0.5">
                official copyright filings & intellectual contributions
              </h3>
            </div>
            <span className="hidden sm:inline-flex px-3 py-1 rounded-full bg-purple-100 text-purple-900 text-xs font-mono font-semibold border border-purple-200">
              Govt. Copyright Applications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {COPYRIGHTS.map((item, idx) => (
              <div 
                key={idx}
                id={item.id ? `card-${item.id}` : `card-copyright-${idx}`}
                className={`girly-card p-6 sm:p-7 relative overflow-hidden bg-white/95 border-2 shadow-md shadow-purple-500/5 group transition-all duration-300 ${
                  item.isRegistered 
                    ? 'border-purple-300 ring-2 ring-purple-100/70 hover:border-purple-400' 
                    : 'border-purple-200/90 hover:border-purple-300'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className={`p-2.5 rounded-2xl border ${
                    item.isRegistered 
                      ? 'bg-amber-50 text-amber-900 border-amber-200' 
                      : 'bg-purple-100 text-purple-800 border-purple-200'
                  }`}>
                    <Award className="w-5 h-5 text-purple-700" />
                  </div>
                  <div className="flex items-center gap-1.5">
                    {item.isRegistered && (
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-mono font-bold flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Registered {item.year}</span>
                      </span>
                    )}
                    <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-[11px] font-mono font-bold">
                      {item.status}
                    </span>
                  </div>
                </div>

                <h4 className="text-xl font-folklore font-bold text-slate-900 group-hover:text-purple-700 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs font-mono text-purple-700 font-semibold mt-1">
                  {item.domain}
                </p>

                {item.registeredWorkTitle && (
                  <div className="mt-2.5 p-2.5 rounded-xl bg-purple-50/70 border border-purple-200/70 text-xs text-purple-950 font-chic">
                    <span className="font-mono text-[10px] uppercase font-bold text-purple-800 block">Registered Work Title:</span>
                    <span className="font-semibold italic">&ldquo;{item.registeredWorkTitle}&rdquo;</span>
                  </div>
                )}

                <p className="text-xs sm:text-sm text-slate-600 font-chic mt-3 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {item.certificateNo && (
                  <div className="mt-3 flex items-center justify-between text-xs font-mono bg-white p-2 rounded-lg border border-purple-100">
                    <span className="text-slate-600">Certificate No: <strong className="text-purple-950">{item.certificateNo}</strong></span>
                    <span className="text-slate-500">App: {item.applicationNo}</span>
                  </div>
                )}

                <div className="mt-5 pt-3 border-t border-purple-100 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-purple-800 font-semibold">{item.applicationType}</span>
                  
                  {item.hasCertificatePdf && onOpenCertificate ? (
                    <button
                      id="btn-view-cert-pdf-research"
                      onClick={onOpenCertificate}
                      className="px-3 py-1 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer"
                    >
                      <Award className="w-3.5 h-3.5" />
                      <span>View Certificate (PDF)</span>
                    </button>
                  ) : (
                    <span className="text-slate-500">{item.year}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Research Streams Breakdown */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            <span className="font-folklore text-xl sm:text-2xl text-slate-900 font-normal tracking-tight">
              Research Streams & Ongoing Projects
            </span>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {RESEARCH_AREAS.map((area) => (
              <div 
                key={area.id}
                className="girly-card p-5 sm:p-6 flex flex-col justify-between bg-white/90 border border-purple-200/80 shadow-xs group hover:shadow-md transition-all text-center"
              >
                <div>
                  <div className="p-2.5 w-fit mx-auto rounded-2xl bg-purple-50 text-purple-700 border border-purple-200/60 mb-4">
                    {area.id === 'safety-systems' && <ShieldCheck className="w-5 h-5 text-purple-600" />}
                    {area.id === 'mental-health-ai' && <BrainCircuit className="w-5 h-5 text-purple-600" />}
                    {area.id === 'human-centric-tech' && <HeartHandshake className="w-5 h-5 text-purple-600" />}
                  </div>

                  <h4 className="text-xl sm:text-2xl font-folklore font-normal text-slate-900 group-hover:text-purple-700 transition-colors leading-snug">
                    {area.title}
                  </h4>

                  <p className="text-sm sm:text-base text-slate-600 font-chic mt-3 leading-relaxed line-clamp-2">
                    {area.tagline}
                  </p>

                  {/* Focus Points List */}
                  <div className="mt-4 pt-3 border-t border-purple-100/80 space-y-2">
                    <span className="text-xs font-mono uppercase text-purple-800 font-bold tracking-wider block">
                      Focus
                    </span>
                    <ul className="space-y-1.5">
                      <li className="text-sm text-slate-700 font-chic">{area.focusPoints[0]}</li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-purple-100 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-purple-900 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200/60">
                    {area.publicationOrStatus}
                  </span>
                </div>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};
