import React, { useState } from 'react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../data/portfolioData';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Heart, 
  Navigation, 
  BrainCircuit,
  Mail, 
  Github, 
  Linkedin, 
  ChevronRight,
  Maximize2,
  X,
  Flower2,
  Star,
  Layers,
  FileText,
  Award,
  BookOpen,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenContact: () => void;
  onOpenResume: () => void;
  onOpenCertificate?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenContact, onOpenResume, onOpenCertificate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#c084fc', '#e879f9', '#fbcfe8', '#ddd6fe', '#a855f7']
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section 
      id="hero-section"
      className="relative pt-20 pb-10 md:pt-28 md:pb-16 overflow-hidden girly-gradient-bg"
    >
      {/* Dreamy Artistic Glowing Orbs */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-pink-200/40 via-purple-200/40 to-fuchsia-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float-slow" />
      <div className="absolute top-80 right-10 w-[420px] h-[420px] bg-gradient-to-bl from-purple-200/50 via-rose-200/30 to-violet-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Floating Decorative Sparkles */}
      <div className="absolute top-28 left-8 text-purple-400/70 animate-sparkle pointer-events-none hidden lg:block">
        <Sparkles className="w-6 h-6" />
      </div>
      <div className="absolute top-44 right-16 text-purple-400/70 animate-sparkle pointer-events-none hidden lg:block" style={{ animationDelay: '1.5s' }}>
        <Star className="w-5 h-5 fill-purple-300/60" />
      </div>
      <div className="absolute bottom-16 left-1/3 text-pink-400/60 animate-sparkle pointer-events-none hidden lg:block" style={{ animationDelay: '2.5s' }}>
        <Flower2 className="w-6 h-6" />
      </div>

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Artistic Hero Bento Grid Container */}
        <div className="grid grid-cols-1 gap-5 max-w-4xl mx-auto">
          
          {/* TILE 1: Enlarged Unedited Portrait & Main Artistic Intro Card (7 cols on desktop) */}
          <div className="girly-card p-0 flex flex-col justify-between relative overflow-hidden group text-center">
            
            {/* Soft decorative background wash */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              
              {/* Top Aesthetic Header Bar */}
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-900 text-xs font-mono font-bold tracking-wider uppercase border border-purple-200/80 shadow-2xs flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                    <span>Computer Engineering</span>
                  </span>
                  <span className="font-folklore text-lg text-purple-800 hidden sm:inline-block">
                    • University of Mumbai
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    id="btn-hero-enlarge-photo"
                    onClick={() => setPhotoModalOpen(true)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white border border-purple-200/80 rounded-full text-xs font-chic text-purple-900 hover:text-purple-700 transition-all shadow-2xs ios-btn cursor-pointer"
                    title="View Enlarged Photo"
                  >
                    <Maximize2 className="w-3.5 h-3.5 text-purple-600" />
                    <span className="font-medium">Enlarge Photo</span>
                  </button>

                  <button
                    id="btn-hero-terminal-badge"
                    onClick={onOpenTerminal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white border border-purple-200 rounded-full text-xs font-mono text-purple-800 hover:text-purple-950 transition-all shadow-2xs ios-btn cursor-pointer"
                  >
                    <Terminal className="w-3.5 h-3.5 text-purple-600" />
                    <span className="hidden sm:inline">Terminal</span>
                  </button>
                </div>
              </div>

              {/* Photo + Identity Presentation */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 pt-2">
                
                {/* ENLARGED UNEDITED PORTRAIT in Folklore Polaroid Frame with Washi Tape & Glow */}
                <div className="relative shrink-0 group/photo cursor-pointer" onClick={() => setPhotoModalOpen(true)}>
                  
                  {/* Decorative Washi Tape */}
                  <div className="washi-tape" />

                  {/* Main Portrait Frame (Enlarged, uncropped, beautiful proportions) */}
                  <div className="w-52 sm:w-60 md:w-64 rounded-[32px] overflow-hidden p-2.5 bg-gradient-to-b from-white via-purple-50/60 to-pink-50/60 ring-4 ring-purple-200/80 shadow-xl shadow-purple-500/10 transition-all duration-300 group-hover/photo:scale-[1.02] group-hover/photo:ring-purple-300">
                    <div className="w-full aspect-[3/4] rounded-[24px] overflow-hidden bg-white shadow-inner relative">
                      <img
                        src={PROFILE_IMAGE}
                        alt={PERSONAL_INFO.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                      />
                      
                      {/* Click to Enlarge Hover Badge */}
                      <div className="absolute inset-0 bg-purple-900/20 backdrop-blur-[2px] opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-white/95 text-purple-950 text-xs font-semibold shadow-md flex items-center gap-1.5">
                          <Maximize2 className="w-3.5 h-3.5 text-purple-600" />
                          View Full Portrait
                        </span>
                      </div>
                    </div>

                    {/* Folklore Polaroid Caption */}
                    <div className="pt-2.5 text-center">
                      <p className="font-folklore text-2xl text-purple-950 leading-none">
                        Hrishita Chavan
                      </p>
                      <span className="font-folklore-hand text-base text-purple-700 font-semibold">
                        in the trees & the code ✨
                      </span>
                    </div>
                  </div>
                  
                  {/* Modern Live Status Pill */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-4 py-1 rounded-full border border-purple-200/90 shadow-md flex items-center gap-2 whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-slate-800">Available for Opportunities</span>
                  </div>
                </div>

                {/* Name, Folklore Typography & Description */}
                <div className="flex-1 text-center space-y-3 pt-1">
                  
                  <div className="space-y-1">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-folklore font-normal tracking-normal text-slate-900 leading-[1.08] mt-1">
                      Hrishita Chavan
                    </h1>
                    
                    <p className="font-folklore text-2xl sm:text-3xl text-purple-900 leading-snug">
                      Researcher & Software Developer
                    </p>
                  </div>
                  
                  <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-chic max-w-xl">
                    AI/ML researcher building practical tools for health, safety, and wellness.
                  </p>

                  {/* IP Copyright Badge & Vibe Tags */}
                  <div className="hidden space-y-2 pt-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      {onOpenCertificate ? (
                        <button
                          id="btn-hero-copyright-cert"
                          onClick={onOpenCertificate}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold transition-all shadow-2xs cursor-pointer"
                          title="View Official Government Copyright Certificate"
                        >
                          <Award className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Copyright Registered: AI Stress Mgmt (2025-26)</span>
                          <span className="px-1.5 py-0.2 rounded bg-emerald-200 text-emerald-900 text-[10px]">View PDF</span>
                        </button>
                      ) : (
                        <a 
                          href="#copyrights"
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-mono font-bold transition-all shadow-2xs"
                        >
                          <Award className="w-3.5 h-3.5 text-emerald-700" />
                          <span>Copyright Registered: Stress Management (2025-26)</span>
                        </a>
                      )}

                      <a
                        href="#copyrights"
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100/90 hover:bg-purple-200/80 border border-purple-300/80 text-purple-900 text-xs font-mono font-semibold transition-all shadow-2xs"
                      >
                        <span>IP Filings</span>
                      </a>
                    </div>

                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-purple-900 text-xs font-medium font-chic flex items-center gap-1">
                        🫀 ECG & PPG Arrhythmia AI
                      </span>
                      <span className="px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs font-medium font-chic flex items-center gap-1">
                        🌿 Safety Routing
                      </span>
                      <span className="px-3 py-1 rounded-full bg-pink-50 border border-pink-200 text-purple-900 text-xs font-medium font-chic flex items-center gap-1">
                        ✨ Tech for People
                      </span>
                      <span className="px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-900 text-xs font-medium font-chic flex items-center gap-1">
                        💡 Machine Learning
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Action Footer inside Identity Card */}
            <div className="pt-6 mt-8 border-t border-purple-100/90 flex flex-wrap items-center justify-center gap-3 relative z-10">
              <div className="flex flex-wrap justify-center gap-2">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white text-xs font-bold transition-all shadow-md shadow-purple-600/25 ios-btn cursor-pointer"
                >
                  <Layers className="w-4 h-4" />
                  <span>View Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#research"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-purple-100 hover:bg-purple-200/70 text-purple-900 border border-purple-300/60 text-xs font-semibold transition-all shadow-2xs ios-btn cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-purple-700" />
                  <span>Research Areas</span>
                </a>

                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white hover:bg-purple-50 text-purple-900 border border-purple-200 text-xs font-semibold transition-all shadow-2xs ios-btn cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>Resume</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-purple-800">
                <span className="w-2 h-2 rounded-full bg-pink-500 animate-ping" />
                <span className="font-semibold">Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* TILE 2: Artistic Vibe & Philosophy Studio (5 cols on desktop) */}
          <div className="hidden col-span-1 md:col-span-2 lg:col-span-5 space-y-5">
            
            {/* Folklore Aesthetic Studio Note */}
            <div className="girly-card p-6 sm:p-7 relative overflow-hidden">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="p-2 rounded-2xl bg-purple-100 text-purple-700">
                    <Flower2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-folklore font-bold text-lg text-slate-900 lowercase">
                    research & building tech for people
                  </h3>
                </div>
                <Sparkles className="w-4 h-4 text-purple-400 animate-sparkle" />
              </div>

              {/* Handwritten Note Style Card */}
              <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-50/90 to-pink-50/60 border border-purple-200/80 shadow-2xs space-y-2">
                <p className="font-chic text-sm sm:text-base text-purple-950 leading-relaxed">
                  Applied AI research focused on safety, wellness, and practical tools for everyday life.
                </p>
                <div className="pt-2 border-t border-purple-200/60 flex justify-between items-center">
                  <span className="font-folklore text-xl text-purple-900">Hrishita Chavan</span>
                  <span className="font-folklore-hand text-base text-purple-700 font-semibold">bachelor of engineering</span>
                </div>
              </div>

              {/* Quick Core Highlights */}
              <div className="grid grid-cols-2 gap-2 mt-4">
                <div className="p-3 rounded-2xl bg-white/80 border border-purple-100 flex flex-col justify-between">
                  <span className="text-[10px] font-mono text-purple-700 font-bold uppercase tracking-wider">Pillar 01</span>
                  <span className="font-chic font-bold text-sm text-slate-900 mt-1">Safety & Navigation</span>
                  <span className="font-folklore text-xs text-purple-800 lowercase">w-secureroutes</span>
                </div>
                <div className="p-3 rounded-2xl bg-white/80 border border-purple-100 flex flex-col justify-between">
                  <span className="text-xs font-mono text-purple-700 font-bold uppercase tracking-wider">Pillar 02</span>
                  <span className="font-chic font-bold text-sm text-slate-900 mt-1">Digital Mental Health</span>
                  <span className="font-folklore text-xs text-purple-800 lowercase">ai stress management</span>
                </div>
              </div>
            </div>

            {/* Quick Connect & Direct Chat Capsule */}
            <div className="rounded-[30px] bg-gradient-to-r from-purple-700 via-purple-600 to-pink-600 p-6 text-white shadow-xl shadow-purple-600/20 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white fill-white" />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-wider font-bold">let&apos;s connect</span>
                </div>
                <button
                  onClick={onOpenContact}
                  className="px-3.5 py-1 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold backdrop-blur-md transition-all ios-btn cursor-pointer"
                >
                  say hello →
                </button>
              </div>

              <div>
                <p className="font-folklore text-2xl text-purple-100 font-normal">
                  open to research & engineering roles
                </p>
                <p className="text-xs text-purple-100/90 font-chic mt-1">
                  Interested in Applied AI/ML, Software Development, and Human-Centric Systems.
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between gap-2">
                <button
                  id="btn-hero-copy-email-pink"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-white text-purple-950 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-sm ios-btn cursor-pointer"
                >
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-purple-700" />}
                </button>

                <div className="flex items-center gap-2">
                  <a 
                    href={PERSONAL_INFO.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all ios-btn"
                    title="GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a 
                    href={PERSONAL_INFO.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all ios-btn"
                    title="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* TILE 3: W-SecureRoutes Navigation Project Widget (6 cols) */}
          <a
            href="#project-w-secureroutes"
            id="hero-bento-secureroutes"
            className="hidden col-span-1 md:col-span-1 lg:col-span-6 girly-card p-6 sm:p-7 flex-col justify-between overflow-hidden relative group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-500 text-white flex items-center justify-center shadow-md shadow-purple-500/20">
                  <Navigation className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-serif-elegant font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                      W-SecureRoutes
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[11px] font-mono font-bold border border-purple-200">
                      Copyright Registered
                    </span>
                  </div>
                  <p className="font-folklore text-base text-purple-800">Women&apos;s Safety-First Dynamic Navigation Platform</p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-xs font-mono text-purple-700 font-bold group-hover:bg-purple-100 transition-colors">
                01
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed my-2 font-chic">
              Multi-objective pathfinding routing engine calculating dynamic safety scores across lighting, historical incident density, and street connectivity using <strong className="text-purple-950">React Native</strong>, <strong className="text-purple-950">OSRM</strong>, <strong className="text-purple-950">TomTom API</strong>, and <strong className="text-purple-950">Python</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-purple-100">
              <div className="flex gap-2 text-xs font-mono text-slate-600 flex-wrap">
                <span className="text-purple-800 font-bold">React Native</span>
                <span className="text-purple-300">•</span>
                <span>OSRM Routing</span>
                <span className="text-purple-300">•</span>
                <span>TomTom API</span>
                <span className="text-purple-300">•</span>
                <span>Python</span>
              </div>
              <span className="text-xs font-chic text-purple-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Details <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

          {/* TILE 4: AI-Based Stress Management System Project Widget (6 cols) */}
          <a
            href="#project-stress-management"
            id="hero-bento-stress-mgmt"
            className="hidden col-span-1 md:col-span-1 lg:col-span-6 girly-card p-6 sm:p-7 flex-col justify-between overflow-hidden relative group"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-700 via-pink-600 to-rose-500 text-white flex items-center justify-center shadow-md shadow-pink-500/20">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-xl font-serif-elegant font-bold tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                      AI Stress Management System
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-900 text-[11px] font-mono font-bold border border-purple-200">
                      Copyright Registered
                    </span>
                  </div>
                  <p className="font-folklore text-base text-purple-800">Intelligent Digital Mental Health Framework</p>
                </div>
              </div>
              
              <div className="w-8 h-8 rounded-full bg-purple-50 border border-purple-200 flex items-center justify-center text-xs font-mono text-purple-700 font-bold group-hover:bg-purple-100 transition-colors">
                02
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed my-2 font-chic">
              Personalized mental wellness and stress assessment framework delivering tailored therapeutic interventions, mindfulness routines, and predictive analytics using <strong className="text-purple-950">Python</strong>, <strong className="text-purple-950">PyTorch</strong>, and <strong className="text-purple-950">Scikit-learn</strong>.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-2 mt-3 pt-3 border-t border-purple-100">
              <div className="flex gap-2 text-xs font-mono text-slate-600 flex-wrap">
                <span className="text-purple-800 font-bold">Python</span>
                <span className="text-purple-300">•</span>
                <span>PyTorch</span>
                <span className="text-purple-300">•</span>
                <span>Scikit-learn</span>
                <span className="text-purple-300">•</span>
                <span>Transformers</span>
              </div>
              <span className="text-xs font-chic text-purple-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Details <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </a>

        </div>

      </div>

      {/* FULLSCREEN ENLARGED PHOTO MODAL (Shows the exact unedited photo crystal clear) */}
      {photoModalOpen && (
        <div 
          id="enlarged-photo-lightbox"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setPhotoModalOpen(false)}
        >
          <div 
            className="relative max-w-2xl w-full bg-white rounded-[36px] p-4 sm:p-6 shadow-2xl border border-purple-200 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              id="btn-close-enlarged-photo"
              onClick={() => setPhotoModalOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-purple-50 hover:bg-pink-100 text-purple-900 transition-colors cursor-pointer shadow-sm z-10"
              aria-label="Close enlarged photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center pb-3 w-full border-b border-purple-100 mb-4">
              <span className="font-folklore text-3xl text-purple-950">Hrishita Chavan</span>
              <p className="font-folklore text-sm text-purple-800">
                Original Unedited Portrait • Full Resolution
              </p>
            </div>

            {/* Enlarged Photo Container (Preserves original uncropped aspect ratio) */}
            <div className="w-full max-h-[70vh] rounded-[24px] overflow-hidden bg-slate-50 flex items-center justify-center ring-2 ring-purple-200">
              <img
                src={PROFILE_IMAGE}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[70vh] object-contain rounded-[20px]"
              />
            </div>

            {/* Modal Footer */}
            <div className="mt-4 flex items-center justify-between w-full px-2 text-xs font-chic text-slate-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-purple-900">{PERSONAL_INFO.name}</span>
                <span>• Researcher & Developer</span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="px-3.5 py-1.5 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all ios-btn"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
