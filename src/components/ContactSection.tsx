import React, { useState } from 'react';
import { PERSONAL_INFO, PROFILE_IMAGE } from '../data/portfolioData';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Calendar, 
  ArrowRight,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#7c3aed', '#a855f7', '#c084fc']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 70,
        spread: 80,
        origin: { y: 0.7 },
        colors: ['#7c3aed', '#10b981', '#38bdf8', '#c084fc']
      });
    }, 600);
  };

  return (
    <section 
      id="contact" 
      className="py-10 md:py-16 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
              Contact
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-folklore font-normal text-slate-900 tracking-tight mt-2">
            Contact
          </h2>
        </div>

        {/* 2-Column Bento Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          
          {/* Left Column: Direct Info & Social Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Primary Email Bento Card */}
            <div className="girly-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="text-[10px] font-mono uppercase text-purple-800 font-bold tracking-wider mb-3">
                  Direct Inquiries
                </div>
                <div className="flex items-center justify-between gap-2 p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200/60">
                  <div className="flex items-center gap-2.5 overflow-hidden">
                    <Mail className="w-4 h-4 text-purple-700 shrink-0" />
                    <span className="font-mono text-xs text-slate-900 font-semibold truncate">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <button
                    id="btn-copy-contact-email"
                    onClick={handleCopyEmail}
                    className="px-3 py-1 rounded-full bg-white hover:bg-purple-100 text-purple-800 text-[11px] font-mono font-semibold flex items-center gap-1.5 transition-all shrink-0 border border-purple-200 shadow-2xs ios-btn cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-purple-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <a
                  href={`mailto:${PERSONAL_INFO.email}?subject=Full-Stack%20Engineering%20Inquiry%20for%20Hrishita%20Chavan`}
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-purple-500/20 ios-btn"
                >
                  <span>Open in Mail Client</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Availability Status */}
            <div className="ios-card p-6 flex items-start gap-3.5">
              <div className="p-3 rounded-2xl bg-purple-100/80 text-purple-700 border border-purple-200/60 shrink-0 mt-0.5">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-purple-800 font-bold uppercase tracking-wider">Current Availability</div>
                <p className="text-xs sm:text-sm text-slate-900 font-extrabold mt-0.5">
                  {PERSONAL_INFO.availability}
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Open to research and engineering opportunities.
                </p>
              </div>
            </div>

            {/* Social Connectors - GitHub & LinkedIn */}
            <div className="ios-card p-6 space-y-3">
              <span className="text-xs font-mono text-slate-600 font-semibold block">Connect directly:</span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-purple-50/60 hover:bg-purple-100/70 border border-purple-100/80 hover:border-purple-300 text-slate-800 transition-all flex items-center justify-between group ios-btn"
                  aria-label="GitHub Profile"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-purple-700" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 font-mono">GitHub</div>
                      <div className="text-[10px] text-purple-800 font-mono font-medium">hrishchavan25</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-700 transition-colors" />
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-purple-50/60 hover:bg-purple-100/70 border border-purple-100/80 hover:border-purple-300 text-slate-800 transition-all flex items-center justify-between group ios-btn"
                  aria-label="LinkedIn Profile"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-purple-700" />
                    <div className="text-left">
                      <div className="text-xs font-bold text-slate-900 font-mono">LinkedIn</div>
                      <div className="text-xs text-purple-800 font-mono font-medium">Hrishita Chavan</div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-purple-400 group-hover:text-purple-700 transition-colors" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="ios-card p-6 sm:p-8">
              
              {submitted ? (
                <div className="text-center py-10 space-y-3 animate-fade-in">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-extrabold text-slate-900">Message Sent Successfully!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, <strong className="text-slate-900">{formState.name}</strong>. I will review your message and reply to <strong className="text-purple-700 font-mono">{formState.email}</strong> promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-purple-100/70 hover:bg-purple-200/80 border border-purple-200 text-xs font-mono font-semibold text-purple-900 transition-colors ios-btn cursor-pointer"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-purple-600" />
                      <h3 className="text-base sm:text-lg font-extrabold text-slate-900">Send a Direct Note</h3>
                    </div>
                    <span className="font-cursive text-sm text-purple-700 font-semibold">
                      Direct Message
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-700 block mb-1.5 font-bold tracking-wider">
                        Your Name *
                      </label>
                      <input
                        id="contact-form-name"
                        type="text"
                        required
                        placeholder="e.g. Recruiter / Collaborator"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 font-sans transition-colors"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-mono uppercase text-slate-700 block mb-1.5 font-bold tracking-wider">
                        Your Email *
                      </label>
                      <input
                        id="contact-form-email"
                        type="email"
                        required
                        placeholder="e.g. you@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 font-sans transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-700 block mb-1.5 font-bold tracking-wider">
                      Subject / Topic
                    </label>
                    <input
                      id="contact-form-subject"
                      type="text"
                      placeholder="e.g. Full-Stack Web Role / Technical Collaboration"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 font-sans transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-mono uppercase text-slate-700 block mb-1.5 font-bold tracking-wider">
                      Message *
                    </label>
                    <textarea
                      id="contact-form-message"
                      required
                      rows={4}
                      placeholder="Share project details, job role overview, or inquiry..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-2xl bg-purple-50/50 border border-purple-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 font-sans resize-none transition-colors"
                    />
                  </div>

                  <button
                    id="btn-submit-contact-form"
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold text-xs shadow-md shadow-purple-500/20 transition-all flex items-center justify-center gap-2 mt-2 cursor-pointer ios-btn"
                  >
                    {submitting ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Message to Hrishita</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

