import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { 
  Navigation, 
  BrainCircuit, 
  GraduationCap, 
  Sparkles, 
  ChevronRight,
  Award,
  BookOpen
} from 'lucide-react';

interface ProjectsSectionProps {
  onOpenCertificate?: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenCertificate }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'w-secureroutes':
        return <Navigation className="w-5 h-5 text-purple-700" />;
      case 'ai-stress-management':
        return <BrainCircuit className="w-5 h-5 text-purple-700" />;
      default:
        return <GraduationCap className="w-5 h-5 text-purple-700" />;
    }
  };

  const getProjectNumber = (id: string) => {
    switch (id) {
      case 'w-secureroutes':
        return '01';
      case 'ai-stress-management':
        return '02';
      default:
        return '03';
    }
  };

  return (
    <section 
      id="projects" 
      className="py-10 md:py-16 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
              Project
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-folklore font-normal text-slate-900 tracking-tight mt-2.5">
            Project
          </h2>
          
        </div>

        {/* Focused project carousel keeps the landing view concise; full details remain in the modal. */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          {PROJECTS.map((project) => {
            return (
              <div
                key={project.id}
                id={`project-${project.id}`}
                className="girly-card flex flex-col justify-between p-5 sm:p-6 relative overflow-hidden group bg-white/95 border border-purple-200/90 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div>
                  {/* Top Bar: Icon, Number Badge, and Status Tag */}
                  <div className="flex flex-col items-center gap-3 mb-4">
                    <div className="p-3 rounded-2xl bg-purple-100/90 border border-purple-200 text-purple-800 shadow-2xs">
                      {getProjectIcon(project.id)}
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 flex-wrap">
                      {project.copyrightRegistered ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-50 text-emerald-800 border border-emerald-300 font-bold flex items-center gap-1">
                          <Award className="w-3 h-3 text-emerald-600" />
                          <span>Registered &apos;25-26</span>
                        </span>
                      ) : project.copyrightNote ? (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-pink-50 text-pink-700 border border-pink-200 font-bold flex items-center gap-1">
                          <Award className="w-3 h-3" />
                          <span>IP Filed</span>
                        </span>
                      ) : null}
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono border bg-purple-50 text-purple-800 border-purple-200 font-semibold">
                        {project.status}
                      </span>
                      <div className="w-8 h-8 rounded-full border border-purple-200 bg-white flex items-center justify-center text-[11px] font-mono text-purple-700 font-bold group-hover:border-purple-400 group-hover:bg-purple-50 transition-all">
                        {getProjectNumber(project.id)}
                      </div>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-2xl sm:text-3xl font-folklore font-normal tracking-tight text-slate-900 group-hover:text-purple-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-chic line-clamp-2">
                    {project.description}
                  </p>

                </div>

                {/* Bottom Actions */}
                <div className="mt-5 pt-4 border-t border-purple-100 flex flex-wrap items-center justify-center gap-2">
                  <button
                    id={`btn-view-details-${project.id}`}
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-bold text-slate-900 hover:text-purple-700 flex items-center gap-1.5 transition-colors group/btn font-chic ios-btn cursor-pointer py-1.5 px-3 rounded-full bg-purple-50 hover:bg-purple-100 border border-purple-200"
                  >
                    <span>View Architecture & Research</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-purple-600" />
                  </button>

                  {project.hasCertificatePdf && onOpenCertificate && (
                    <button
                      id="btn-project-view-cert"
                      onClick={onOpenCertificate}
                      className="text-xs font-mono font-bold text-purple-900 hover:text-purple-950 flex items-center gap-1 py-1 px-2.5 rounded-full bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 transition-colors cursor-pointer"
                      title="View Official Government Copyright Certificate"
                    >
                      <Award className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Cert PDF</span>
                    </button>
                  )}
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenCertificate={onOpenCertificate}
      />
    </section>
  );
};
