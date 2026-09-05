import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../data/portfolioData';
import { 
  Code2, 
  Terminal, 
  Layers, 
  Mail, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenResume,
  onOpenContact,
  onOpenTerminal
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Research', href: '#research', icon: BookOpen },
    { label: 'Copyrights', href: '#copyrights', icon: Award },
    { label: 'Project', href: '#projects', icon: Layers },
    { label: 'Skills & Stack', href: '#skills', icon: Code2 },
    { label: 'About Me', href: '#about', icon: Sparkles },
  ];

  return (
    <header 
      id="navbar-header"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 pointer-events-none"
    >
      {/* Top Floating Glass Dock */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pt-2.5 sm:pt-3 flex flex-col items-center">
        
        <div className={`w-full max-w-5xl ios-glass rounded-[28px] sm:rounded-full px-4 sm:px-6 py-2 sm:py-2.5 transition-all duration-500 pointer-events-auto flex items-center justify-between ${
          scrolled ? 'shadow-lg shadow-purple-500/10 border-purple-200/90 py-2 scale-[0.99]' : 'shadow-md shadow-purple-500/5'
        }`}>
          
          {/* Brand & Portrait */}
          <a 
            id="brand-logo-link"
            href="#" 
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
          >
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-purple-300 group-hover:ring-purple-500 transition-all duration-300 shadow-sm">
                <img
                  src={PROFILE_IMAGE}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-500 ring-2 ring-white animate-pulse" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-serif-elegant font-bold text-slate-900 group-hover:text-purple-700 transition-colors text-sm sm:text-base tracking-tight">
                  {PERSONAL_INFO.name}
                </span>
                <span className="font-folklore text-purple-600 text-xs hidden sm:inline-block">
                  ✨
                </span>
              </div>
              <span className="font-folklore text-xs sm:text-sm text-purple-700 leading-none -mt-0.5">
                Researcher & Developer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-purple-100/60 p-1 rounded-full border border-purple-200/60 backdrop-blur-md">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  href={link.href}
                  className="px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-900 hover:bg-white/90 rounded-full transition-all duration-200 flex items-center gap-1.5 ios-btn"
                >
                  <Icon className="w-3.5 h-3.5 text-purple-600" />
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action Icons & Status Pill */}
          <div className="hidden lg:flex items-center gap-2">
            
            {/* Status Island */}
            <div className="px-3 py-1 rounded-full bg-purple-50/80 border border-purple-200/70 text-[11px] font-mono text-purple-800 flex items-center gap-2 mr-1 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>{currentTime || 'Online'}</span>
              <span className="text-purple-400">|</span>
              <span className="text-purple-700 font-semibold font-cursive text-xs">Open for Roles</span>
            </div>

            <button
              id="btn-nav-terminal"
              onClick={onOpenTerminal}
              title="Open Terminal"
              className="px-3 py-1.5 text-xs font-mono text-slate-700 hover:text-purple-800 bg-white/90 hover:bg-white border border-purple-200/80 rounded-full transition-all flex items-center gap-1.5 shadow-2xs ios-btn cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-purple-600" />
              <span>Terminal</span>
            </button>

            <button
              id="btn-nav-resume"
              onClick={onOpenResume}
              className="px-3.5 py-1.5 text-xs font-semibold text-slate-700 hover:text-purple-800 bg-white/90 hover:bg-white border border-purple-200/80 rounded-full transition-all flex items-center gap-1.5 shadow-2xs ios-btn cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-purple-600" />
              <span>CV / Resume</span>
            </button>

            <button
              id="btn-nav-contact"
              onClick={onOpenContact}
              className="px-4 py-1.5 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-full shadow-md shadow-purple-600/20 transition-all flex items-center gap-1.5 ios-btn cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </button>
          </div>

          {/* Mobile Quick Action & Menu Button */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              id="btn-mobile-terminal-quick"
              onClick={onOpenTerminal}
              className="p-2 text-purple-700 bg-white/90 border border-purple-200 rounded-full shadow-xs ios-btn"
              title="Terminal"
            >
              <Terminal className="w-4 h-4 text-purple-600" />
            </button>

            <button
              id="btn-mobile-contact-quick"
              onClick={onOpenContact}
              className="p-2 text-white bg-purple-700 rounded-full shadow-sm ios-btn"
              title="Contact"
            >
              <Mail className="w-4 h-4" />
            </button>

            <button
              id="btn-mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-purple-700 bg-white/90 border border-purple-200 rounded-full focus:outline-none shadow-xs ios-btn"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-purple-700" /> : <Menu className="w-5 h-5 text-purple-700" />}
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="max-w-md mx-auto px-3 pt-2 pointer-events-auto animate-fade-in">
          <div 
            id="mobile-dropdown-menu"
            className="ios-glass rounded-3xl p-4 shadow-2xl border border-purple-200/90 space-y-3"
          >
            {/* Grab Handle */}
            <div className="w-10 h-1 bg-purple-200 rounded-full mx-auto -mt-1 mb-2" />

            <div className="space-y-1">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3.5 py-2.5 text-slate-800 hover:text-purple-800 hover:bg-purple-100/60 rounded-2xl text-xs font-semibold transition-all"
                  >
                    <div className="p-1.5 rounded-xl bg-purple-100 text-purple-700">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{link.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-purple-100 grid grid-cols-2 gap-2">
              <button
                id="btn-mobile-resume"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="py-2.5 px-3 text-xs font-semibold text-slate-800 bg-white hover:bg-purple-50 border border-purple-200 rounded-2xl flex items-center justify-center gap-1.5 ios-btn"
              >
                <FileText className="w-3.5 h-3.5 text-purple-600" />
                Resume
              </button>

              <button
                id="btn-mobile-terminal"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="py-2.5 px-3 text-xs font-semibold text-slate-800 bg-white hover:bg-purple-50 border border-purple-200 rounded-2xl flex items-center justify-center gap-1.5 ios-btn"
              >
                <Terminal className="w-3.5 h-3.5 text-purple-600" />
                Terminal
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
