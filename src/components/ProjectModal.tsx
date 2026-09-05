import React from 'react';
import { Project } from '../types';
import { X, Layers, Cpu, Code2, Sparkles, Award } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenCertificate?: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenCertificate }) => {
  if (!project) return null;

  return (
    <div 
      id="project-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-3xl rounded-[32px] bg-white border-2 border-purple-200 shadow-2xl p-6 sm:p-8 my-8 text-left max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          id="btn-close-project-modal"
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Badge & Title */}
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 border border-purple-200 text-xs font-mono font-bold">
            {project.category}
          </span>
          <span className={`px-3 py-1 rounded-full border text-xs font-mono font-bold ${
            project.copyrightRegistered
              ? 'bg-emerald-50 text-emerald-900 border-emerald-300'
              : 'bg-purple-50 text-purple-800 border-purple-200'
          }`}>
            {project.status}
          </span>
          {project.copyrightRegistered ? (
            <span className="px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-300 text-xs font-mono font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5 text-amber-700" />
              <span>Registered IP • Year 2025-26</span>
            </span>
          ) : project.copyrightNote && (
            <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-700 border border-pink-200 text-xs font-mono font-bold flex items-center gap-1">
              <Award className="w-3.5 h-3.5" />
              <span>IP / Copyright Application Filed</span>
            </span>
          )}
        </div>

        <h2 className="text-2xl sm:text-3xl font-folklore font-normal text-slate-900 tracking-tight mt-1">
          {project.title}
        </h2>
        <p className="font-folklore text-base text-purple-800 lowercase mt-0.5">
          {project.tagline}
        </p>

        {/* Official Registered Certificate Callout for AI Stress Management */}
        {project.copyrightRegistered && (
          <div className="mt-4 p-4 rounded-2xl bg-gradient-to-r from-emerald-50/90 via-purple-50/80 to-amber-50/80 border-2 border-emerald-300/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-emerald-950 font-bold text-xs font-mono uppercase tracking-wider">
                <Award className="w-4 h-4 text-emerald-700" />
                <span>Official Copyright Registered (Govt. of India)</span>
              </div>
              <p className="text-xs text-slate-800 font-chic mt-1">
                Certificate No: <strong className="font-mono text-purple-950">{project.certificateNo}</strong> • Registered for Year <strong className="font-mono text-purple-950">{project.copyrightYear}</strong>
              </p>
              {project.registeredWorkTitle && (
                <p className="text-[11px] text-slate-600 font-chic mt-0.5 italic">
                  Work Title: &ldquo;{project.registeredWorkTitle}&rdquo;
                </p>
              )}
            </div>

            {onOpenCertificate && (
              <button
                id="btn-modal-view-cert-pdf"
                onClick={() => {
                  onClose();
                  onOpenCertificate();
                }}
                className="px-4 py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-mono text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap flex items-center gap-1.5 shrink-0"
              >
                <Award className="w-3.5 h-3.5" />
                <span>View Certificate (PDF)</span>
              </button>
            )}
          </div>
        )}

        {/* Overview */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase text-purple-900 flex items-center gap-2 font-bold tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            Project Overview
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-purple-50/50 p-4 rounded-2xl border border-purple-200/60 font-chic">
            {project.fullOverview || project.description}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase text-purple-900 flex items-center gap-2 font-bold tracking-wider">
            <Layers className="w-3.5 h-3.5 text-purple-600" />
            Problem Statement & Social Context
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-purple-50/50 p-4 rounded-2xl border border-purple-200/60 font-chic">
            {project.problemStatement}
          </p>
        </div>

        {/* Solution Architecture */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase text-purple-900 flex items-center gap-2 font-bold tracking-wider">
            <Cpu className="w-3.5 h-3.5 text-purple-600" />
            Solution & Algorithmic Architecture
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-700 leading-relaxed bg-purple-50/50 p-4 rounded-2xl border border-purple-200/60 font-chic">
            {project.solutionArchitecture}
          </p>
        </div>

        {/* Key Contributions / Methodologies */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase text-purple-900 flex items-center gap-2 font-bold tracking-wider">
            <Code2 className="w-3.5 h-3.5 text-purple-600" />
            Key Methodologies & Core Engineering
          </h3>
          <ul className="mt-2.5 space-y-2">
            {(project.keyContributions || []).map((contrib, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 bg-purple-50/50 p-3.5 rounded-xl border border-purple-200/60 font-chic">
                <span className="text-purple-600 font-bold">•</span>
                <span>{contrib}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-6">
          <h3 className="text-xs font-mono uppercase text-purple-900 block mb-2 font-bold tracking-wider">
            Technologies, Frameworks & Libraries
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span 
                key={tech}
                className="px-3 py-1 rounded-full bg-purple-50 text-purple-900 font-mono text-xs font-bold border border-purple-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 pt-6 border-t border-purple-100 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-purple-800 font-folklore">
            Hrishita Chavan • research & engineering
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-semibold text-xs font-mono transition-colors shadow-sm cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
