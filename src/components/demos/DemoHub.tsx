import React, { useState } from 'react';
import { SecureRoutesDemo } from './SecureRoutesDemo';
import { ArrhythmiaMonitorDemo } from './ArrhythmiaMonitorDemo';
import { Navigation, HeartPulse, Activity } from 'lucide-react';

export const DemoHub: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<'routes' | 'arrhythmia'>('routes');

  return (
    <section 
      id="demos"
      className="py-16 md:py-24 relative scroll-mt-16 bg-[#faf5ff]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-purple-100">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-purple-100 text-purple-900 font-mono text-xs tracking-wider uppercase font-bold border border-purple-200">
                interactive lab
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-folklore font-normal text-slate-900 tracking-tight mt-2">
              interactive algorithmic simulators
            </h2>
          </div>

          {/* Bento Tab Switcher */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-white/95 border border-purple-200 self-start md:self-auto shadow-xs">
            <button
              id="tab-demo-routes"
              onClick={() => setSelectedDemo('routes')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                selectedDemo === 'routes'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20'
                  : 'text-slate-600 hover:text-purple-700 hover:bg-purple-50'
              }`}
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>01. W-SecureRoutes</span>
            </button>

            <button
              id="tab-demo-arrhythmia"
              onClick={() => setSelectedDemo('arrhythmia')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold font-mono flex items-center gap-2 transition-all cursor-pointer ${
                selectedDemo === 'arrhythmia'
                  ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white shadow-md shadow-rose-600/20'
                  : 'text-slate-600 hover:text-rose-600 hover:bg-rose-50'
              }`}
            >
              <HeartPulse className="w-3.5 h-3.5" />
              <span>02. Arrhythmia Monitor</span>
            </button>
          </div>
        </div>

        {/* Selected Interactive Demo View */}
        <div className="mt-8">
          {selectedDemo === 'routes' ? (
            <SecureRoutesDemo />
          ) : (
            <ArrhythmiaMonitorDemo />
          )}
        </div>

      </div>
    </section>
  );
};
