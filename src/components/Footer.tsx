import React from 'react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

interface FooterProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume, onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="portfolio-footer"
      className="bg-white/80 backdrop-blur-md border-t border-purple-100 py-8 text-slate-500 text-xs font-sans"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-purple-100">
          
          {/* Brand & Tagline with Profile Pic Thumbnail */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 text-center sm:text-left">
            <div className="w-11 h-11 rounded-2xl overflow-hidden ring-2 ring-purple-300 shadow-xs bg-purple-50 shrink-0">
              <img 
                src={PROFILE_IMAGE} 
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start">
                <p className="font-folklore font-normal text-slate-900 text-lg">{PERSONAL_INFO.name}</p>
              </div>
              <p className="font-folklore text-sm text-purple-800">
                Researcher & Software Developer • University of Mumbai
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-5 text-xs font-semibold">
            <a href="#research" className="text-slate-700 hover:text-purple-700 transition-colors">Research</a>
            <a href="#copyrights" className="text-slate-700 hover:text-purple-700 transition-colors">Copyrights</a>
            <a href="#projects" className="text-slate-700 hover:text-purple-700 transition-colors">Project</a>
            <a href="#skills" className="text-slate-700 hover:text-purple-700 transition-colors">Skills</a>
            <a href="#about" className="text-slate-700 hover:text-purple-700 transition-colors">About Me</a>
            <a href="#contact" className="text-slate-700 hover:text-purple-700 transition-colors">Contact</a>
            <button onClick={onOpenResume} className="text-purple-700 hover:text-purple-900 font-semibold transition-colors cursor-pointer">Resume</button>
            <button onClick={onOpenTerminal} className="text-slate-700 hover:text-purple-700 transition-colors cursor-pointer">Terminal</button>
          </div>

          {/* Social Links & Scroll to Top */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 transition-all ios-btn"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-700 transition-all ios-btn"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <button
              id="btn-scroll-top"
              onClick={scrollToTop}
              className="p-2.5 px-3.5 rounded-full bg-purple-100/80 hover:bg-purple-200/80 border border-purple-200 text-purple-800 transition-all flex items-center gap-1.5 cursor-pointer ios-btn"
              title="Scroll to Top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="text-[11px] font-semibold hidden sm:inline">Top</span>
            </button>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
