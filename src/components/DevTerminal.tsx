import React, { useState, useRef, useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS, COPYRIGHTS, RESEARCH_AREAS } from '../data/portfolioData';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';

interface DevTerminalProps {
  isOpen: boolean;
  onClose: () => void;
  onLaunchDemo?: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const DevTerminal: React.FC<DevTerminalProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'welcome',
      output: (
        <div className="text-slate-700 space-y-1 font-mono text-xs">
          <p className="text-purple-700 font-bold">Hrishita Chavan — Interactive Engineering Shell v3.0</p>
          <p className="text-slate-600">Type <span className="text-purple-900 font-semibold underline">help</span> to view all available commands, <span className="text-purple-700 font-semibold underline">research</span> for ongoing studies, or <span className="text-purple-700 font-semibold underline">copyrights</span> for IP filings.</p>
        </div>
      )
    }
  ]);

  const bottomRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold mb-1">Available Terminal Commands:</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">bio</span> — Overview & background of Hrishita Chavan</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">research</span> — Research philosophy & stream details</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">copyrights</span> — Official IP & Copyright filings</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">projects</span> — Summary of flagship engineering systems</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">arrhythmia</span> — Smart Arrhythmia Detection System (ECG + PPG Deep Learning)</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">secureroutes</span> — W-SecureRoutes algorithm & architecture breakdown</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">stressmgmt</span> — AI Stress Management System project details</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">skills</span> — List all programming proficiencies & tools</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">contact</span> — Get direct email, phone & social profiles</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">clear</span> — Clear terminal output</p>
            <p><span className="text-slate-900 w-28 inline-block font-semibold">exit</span> — Close terminal modal</p>
          </div>
        );
        break;

      case 'arrhythmia':
      case 'ecg':
      case 'ppg':
      case 'ecg-ppg':
      case 'cardiac':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">Smart Arrhythmia Detection System (ECG & PPG Signals):</p>
            <p>• <strong className="text-slate-900">Modality:</strong> Synchronous Dual-Signal Fusion (Electrical ECG + Optical Hemodynamic PPG).</p>
            <p>• <strong className="text-slate-900">DSP Conditioning:</strong> 0.5–45Hz Butterworth Bandpass Filtering, DWT Wavelet Denoising, Pan-Tompkins QRS detection.</p>
            <p>• <strong className="text-slate-900">Physiological Metrics:</strong> Pulse Transit Time (PTT), Pulse Arrival Time (PAT), HRV (SDNN, RMSSD, LF/HF).</p>
            <p>• <strong className="text-slate-900">Deep Learning Model:</strong> Hybrid 1D-CNN (morphological spatial features) + Bi-directional LSTM with temporal attention.</p>
            <p>• <strong className="text-slate-900">Classification:</strong> Normal Sinus Rhythm, Atrial Fibrillation (AFib), Premature Ventricular Contractions (PVC), PAC, and Tachycardia.</p>
            <p>• <strong className="text-slate-900">Academic Status:</strong> Fourth-Year B.E. Senior Capstone & Active Biomedical AI Research Study.</p>
          </div>
        );
        break;

      case 'bio':
      case 'whoami':
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">{PERSONAL_INFO.name}</p>
            <p className="text-slate-900 font-semibold">{PERSONAL_INFO.title} • {PERSONAL_INFO.tagline}</p>
            <p className="mt-1 text-slate-600 leading-relaxed">{PERSONAL_INFO.bio}</p>
            <p className="text-slate-500">Status: <span className="text-emerald-600 font-bold">{PERSONAL_INFO.availability}</span></p>
          </div>
        );
        break;

      case 'research':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">Research Philosophy: Building Tech for People</p>
            {RESEARCH_AREAS.map((r) => (
              <div key={r.id} className="border-l-2 border-purple-400 pl-2">
                <p className="text-slate-900 font-bold">{r.title} [{r.publicationOrStatus}]</p>
                <p className="text-slate-600 text-[11px]">{r.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'copyrights':
      case 'ip':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">Official Copyright Registrations:</p>
            {COPYRIGHTS.map((c, idx) => (
              <div key={idx} className="border-l-2 border-pink-400 pl-2">
                <p className="text-slate-900 font-bold">{c.title} — <span className="text-purple-700 font-semibold">{c.status}</span></p>
                <p className="text-slate-600 text-[11px]">{c.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'skills':
      case 'languages':
        response = (
          <div className="space-y-2 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">Programming Languages:</p>
            <p className="text-slate-600">Python, Java, C, C++</p>
            <p className="text-purple-700 font-bold mt-1">AI / ML & Research:</p>
            <p className="text-slate-600">PyTorch, Scikit-learn, Transformers, Data Analysis, Technical Paper Writing</p>
            <p className="text-purple-700 font-bold mt-1">Web & Mobile Development:</p>
            <p className="text-slate-600">React Native, HTML, CSS, JavaScript, NodeJS, Streamlit</p>
            <p className="text-purple-700 font-bold mt-1">Databases & Cloud:</p>
            <p className="text-slate-600">AWS, MySQL, SQLite3</p>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-3 text-xs font-mono text-slate-700">
            {PROJECTS.map((p) => (
              <div key={p.id} className="border-l-2 border-purple-500 pl-2.5">
                <p className="text-slate-900 font-bold">{p.title} <span className="text-purple-700">[{p.status}]</span></p>
                <p className="text-purple-600 text-[11px] font-semibold">{p.tagline}</p>
                <p className="text-slate-600 mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'secureroutes':
      case 'w-secureroutes':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">W-SecureRoutes Navigation Architecture:</p>
            <p>• <strong className="text-slate-900">Frontend:</strong> React Native cross-platform mobile application.</p>
            <p>• <strong className="text-slate-900">Routing APIs:</strong> OSRM path calculation + TomTom live routing integration.</p>
            <p>• <strong className="text-slate-900">Safety Index:</strong> Real-time risk modeling with street lighting and historical safety data.</p>
            <p>• <strong className="text-slate-900">IP Status:</strong> Official Copyright Application Registered.</p>
          </div>
        );
        break;

      case 'stressmgmt':
      case 'stress-management':
        response = (
          <div className="space-y-1.5 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">AI-Based Stress Management System:</p>
            <p>• <strong className="text-slate-900">Stack:</strong> Python, PyTorch, Scikit-learn, Transformers.</p>
            <p>• <strong className="text-slate-900">Mechanism:</strong> Behavioral pattern analysis, psychometric stress prediction, and adaptive relaxation routine synthesis.</p>
            <p>• <strong className="text-slate-900">IP Status:</strong> Official Copyright Application Registered.</p>
          </div>
        );
        break;

      case 'contact':
      case 'email':
        response = (
          <div className="space-y-1 text-xs font-mono text-slate-700">
            <p className="text-purple-700 font-bold">Direct Communication Channels:</p>
            <p>• Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-purple-700 font-semibold underline">{PERSONAL_INFO.email}</a></p>
            <p>• Phone: <span className="text-slate-800">{PERSONAL_INFO.phone}</span></p>
            <p>• GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-purple-700 hover:underline">{PERSONAL_INFO.github}</a></p>
            <p>• LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-purple-700 hover:underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
      case 'cls':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        response = (
          <p className="text-rose-600 text-xs font-mono">
            Command not recognized: &quot;{trimmed}&quot;. Type <span className="text-purple-800 font-bold underline cursor-pointer" onClick={() => handleCommand('help')}>help</span> for valid commands.
          </p>
        );
        break;
    }

    setHistory((prev) => [...prev, { command: cmd, output: response }]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputVal.trim()) {
      handleCommand(inputVal);
    }
  };

  return (
    <div 
      id="dev-terminal-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${
          isExpanded ? 'max-w-6xl h-[88vh]' : 'max-w-3xl h-[560px]'
        } rounded-[28px] bg-slate-50 border-2 border-purple-200 shadow-2xl flex flex-col overflow-hidden transition-all duration-300 font-mono`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-white border-b border-purple-200">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
            <div className="flex items-center gap-1.5 ml-2 text-xs font-semibold text-purple-900">
              <TerminalIcon className="w-3.5 h-3.5 text-purple-600" />
              <span>hrishita@portfolio: ~ (zsh)</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 rounded-md text-slate-500 hover:text-purple-900 hover:bg-purple-100 transition-colors cursor-pointer"
              title={isExpanded ? 'Minimize' : 'Maximize'}
            >
              {isExpanded ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-500 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
              aria-label="Close terminal"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-4 bg-[#faf5ff] text-slate-800">
          {history.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <div className="flex items-center gap-2 text-xs text-purple-700 font-semibold">
                <span>➜</span>
                <span className="text-slate-500">~</span>
                <span className="text-slate-900 font-bold">{item.command}</span>
              </div>
              <div className="pl-4 py-1">{item.output}</div>
            </div>
          ))}

          {/* Prompt line */}
          <div className="flex items-center gap-2 text-xs pt-1">
            <span className="text-purple-600 font-bold">➜</span>
            <span className="text-slate-500">~</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type help, research, copyrights, skills, or projects..."
              className="flex-1 bg-transparent border-none outline-none text-purple-950 font-mono text-xs placeholder:text-purple-400/80"
              autoFocus
            />
          </div>

          <div ref={bottomRef} />
        </div>

        {/* Terminal Footer Bar */}
        <div className="px-4 py-2 bg-purple-100/80 border-t border-purple-200 flex items-center justify-between text-[11px] text-purple-900 font-mono">
          <div className="flex gap-4">
            <span>Encoding: UTF-8</span>
            <span>OS: Darwin/arm64</span>
            <span className="hidden sm:inline">Shell: zsh</span>
          </div>
          <span className="text-purple-800 font-semibold">Hrishita Chavan Portfolio Shell</span>
        </div>
      </div>
    </div>
  );
};
