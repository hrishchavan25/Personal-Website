import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { 
  Code2, 
  Globe, 
  Cpu, 
  Search,
  Sparkles,
  Zap
} from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const activeCategory = SKILL_CATEGORIES[activeCategoryIndex];

  // Filter skills across all categories if search is active
  const filteredSkills = searchQuery.trim() === ''
    ? activeCategory.skills
    : SKILL_CATEGORIES.flatMap(cat => cat.skills).filter(s => 
        s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
      );

  return (
    <section 
      id="skills" 
      className="py-16 md:py-24 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-purple-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
                skills & stack
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-folklore font-normal text-slate-900 tracking-tight mt-2">
              engineering stack & technologies
            </h2>
          </div>

          {/* Search Box in Bento Pill */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-purple-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="input-skills-search"
              type="text"
              placeholder="Search skills, languages, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-12 py-2.5 rounded-full bg-white/90 border border-purple-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-purple-600 font-mono transition-all shadow-xs"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-purple-700 hover:text-purple-900 text-xs font-mono font-bold cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Category Tabs (shown when not searching) */}
        {searchQuery.trim() === '' && (
          <div className="mt-8 flex flex-wrap gap-2.5">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const isSelected = activeCategoryIndex === idx;
              return (
                <button
                  key={cat.title}
                  id={`btn-skill-cat-${idx}`}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`px-5 py-2.5 rounded-full text-xs font-mono font-semibold transition-all flex items-center gap-2 border ios-btn cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-md shadow-purple-500/25'
                      : 'bg-white/80 text-slate-700 border-purple-200 hover:border-purple-300 hover:text-purple-800'
                  }`}
                >
                  {idx === 0 && <Code2 className="w-3.5 h-3.5" />}
                  {idx === 1 && <Globe className="w-3.5 h-3.5" />}
                  {idx === 2 && <Cpu className="w-3.5 h-3.5" />}
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        )}

        {/* Bento Skills Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              id={`skill-card-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              className="ios-card p-6 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Name & Experience context */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-purple-700 transition-colors">
                      {skill.name}
                    </h3>
                    <p className="font-cursive text-sm text-purple-700 font-semibold mt-0.5">
                      {skill.experience}
                    </p>
                  </div>
                  <span className="font-mono text-xs font-bold text-purple-800 bg-purple-100/70 px-3 py-1 rounded-full border border-purple-200">
                    {skill.level}%
                  </span>
                </div>

                {/* Proficiency meter */}
                <div className="mt-3.5 w-full bg-purple-100/60 h-2 rounded-full overflow-hidden border border-purple-200/50">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full transition-all duration-700"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                {/* Description */}
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {/* Tags / Sub-competencies */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-purple-100">
                {skill.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded-full bg-purple-50 text-purple-800 font-mono text-[10px] font-semibold border border-purple-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Highlights / Why this stack matters (Bento 3-card bottom banner) */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          <div className="ios-card p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2.5 rounded-2xl bg-purple-100/80 text-purple-700 border border-purple-200/60">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">Systems Foundation</h4>
                <span className="font-cursive text-sm text-purple-700 font-semibold block -mt-0.5">Low-level mastery</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mt-2">
              Grounding in C, C++, and Java ensures deep intuition for memory allocation, cache locality, and algorithmic Big-O complexity.
            </p>
          </div>

          <div className="ios-card p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2.5 rounded-2xl bg-purple-100/80 text-purple-700 border border-purple-200/60">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">Full-Stack Agility</h4>
                <span className="font-cursive text-sm text-purple-700 font-semibold block -mt-0.5">Reactive architectures</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mt-2">
              Specializing in React, TypeScript, Node.js, and normalized SQL schemas for fluid, responsive, production-ready web products.
            </p>
          </div>

          <div className="ios-card p-6 flex flex-col justify-between">
            <div className="flex items-center gap-2.5 mb-2">
              <div className="p-2.5 rounded-2xl bg-purple-100/80 text-purple-700 border border-purple-200/60">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-mono font-bold text-slate-900 uppercase">Applied Intelligence</h4>
                <span className="font-cursive text-sm text-purple-700 font-semibold block -mt-0.5">AI & Signal Processing</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed mt-2">
              Direct experience implementing Random Forest, Q-Learning, and heuristic search for civic navigation safety and cardiac diagnostics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

