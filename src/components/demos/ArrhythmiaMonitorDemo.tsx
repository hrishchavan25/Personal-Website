import React, { useState, useEffect, useRef } from 'react';
import { 
  HeartPulse, 
  Activity, 
  AlertTriangle, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  Sparkles, 
  RefreshCw, 
  Zap, 
  ShieldAlert,
  Send,
  Sliders,
  Info
} from 'lucide-react';
import confetti from 'canvas-confetti';

type RhythmType = 'normal' | 'tachycardia' | 'bradycardia' | 'pvc' | 'afib';

interface RhythmInfo {
  name: string;
  bpm: number;
  description: string;
  riskLevel: 'Normal' | 'Moderate' | 'Critical';
  alertRequired: boolean;
  hrv: number;
  ptt: number;
  spo2: number;
}

export const ArrhythmiaMonitorDemo: React.FC = () => {
  const [activeRhythm, setActiveRhythm] = useState<RhythmType>('normal');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(false);
  const [noiseLevel, setNoiseLevel] = useState<number>(5); // 0 - 20%
  const [alertDispatched, setAlertDispatched] = useState<boolean>(false);
  const [alertLog, setAlertLog] = useState<{ time: string; msg: string }[]>([]);

  const ecgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const ppgCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  
  // Animation state references
  const animFrameRef = useRef<number | null>(null);
  const phaseRef = useRef<number>(0);
  const lastPeakTimeRef = useRef<number>(0);

  const rhythmConfigs: Record<RhythmType, RhythmInfo> = {
    normal: {
      name: 'Normal Sinus Rhythm (NSR)',
      bpm: 72,
      description: 'Regular rhythm with synchronized P-waves, sharp QRS complexes, and normal optical PPG pulsation.',
      riskLevel: 'Normal',
      alertRequired: false,
      hrv: 58,
      ptt: 235,
      spo2: 99
    },
    tachycardia: {
      name: 'Sinus Tachycardia',
      bpm: 136,
      description: 'Elevated sinus node firing rate (>100 BPM). Normal morphology but shortened diastolic filling period.',
      riskLevel: 'Moderate',
      alertRequired: true,
      hrv: 24,
      ptt: 195,
      spo2: 97
    },
    bradycardia: {
      name: 'Sinus Bradycardia',
      bpm: 44,
      description: 'Abnormally slow resting cardiac rate (<50 BPM). Prolonged R-R intervals with delayed optical pulse arrival.',
      riskLevel: 'Moderate',
      alertRequired: true,
      hrv: 72,
      ptt: 275,
      spo2: 96
    },
    pvc: {
      name: 'Premature Ventricular Contraction (PVC)',
      bpm: 84,
      description: 'Ectopic ventricular pacemaker causing wide, aberrant QRS morphology followed by a full compensatory pause.',
      riskLevel: 'Critical',
      alertRequired: true,
      hrv: 92,
      ptt: 310,
      spo2: 95
    },
    afib: {
      name: 'Atrial Fibrillation (AFib)',
      bpm: 128,
      description: 'Chaotic atrial depolarization with irregularly irregular ventricular response and variable optical PPG pulse amplitude.',
      riskLevel: 'Critical',
      alertRequired: true,
      hrv: 118,
      ptt: 215,
      spo2: 94
    }
  };

  const currentConfig = rhythmConfigs[activeRhythm];

  // Sound generator for R-peaks
  const playBeep = () => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      }
      if (audioCtxRef.current.state === 'suspended') {
        audioCtxRef.current.resume();
      }
      const osc = audioCtxRef.current.createOscillator();
      const gain = audioCtxRef.current.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(currentConfig.riskLevel === 'Critical' ? 880 : 580, audioCtxRef.current.currentTime);
      gain.gain.setValueAtTime(0.08, audioCtxRef.current.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtxRef.current.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(audioCtxRef.current.destination);
      osc.start();
      osc.stop(audioCtxRef.current.currentTime + 0.09);
    } catch {
      // Audio context may require user gesture
    }
  };

  // Dispatch Emergency Alert simulation
  const handleDispatchEmergencyAlert = () => {
    setAlertDispatched(true);
    const now = new Date().toLocaleTimeString();
    const newEntry = {
      time: now,
      msg: `[CRITICAL ALERT] ${currentConfig.name} detected (HR: ${currentConfig.bpm} BPM). Automated SOS packet dispatched to Emergency Contacts & Hospital Telemetry Webhook.`
    };
    setAlertLog(prev => [newEntry, ...prev.slice(0, 4)]);
    confetti({
      particleCount: 50,
      spread: 65,
      origin: { y: 0.6 },
      colors: ['#ef4444', '#f59e0b', '#38bdf8']
    });
  };

  // Auto-trigger alert if switching to critical rhythm
  useEffect(() => {
    if (currentConfig.alertRequired && currentConfig.riskLevel === 'Critical') {
      const now = new Date().toLocaleTimeString();
      const newEntry = {
        time: now,
        msg: `[REAL-TIME CLASSIFIER] Abnormality Identified: ${currentConfig.name} (HR: ${currentConfig.bpm} BPM, HRV: ${currentConfig.hrv}ms). Pan-Tompkins peak detector flagged anomalous beat.`
      };
      setAlertLog(prev => [newEntry, ...prev.slice(0, 4)]);
    }
  }, [activeRhythm, currentConfig]);

  // Real-time Canvas Rendering for ECG & PPG
  useEffect(() => {
    const ecgCanvas = ecgCanvasRef.current;
    const ppgCanvas = ppgCanvasRef.current;
    if (!ecgCanvas || !ppgCanvas) return;

    const ecgCtx = ecgCanvas.getContext('2d');
    const ppgCtx = ppgCanvas.getContext('2d');
    if (!ecgCtx || !ppgCtx) return;

    const width = ecgCanvas.width;
    const height = ecgCanvas.height;

    let localPhase = phaseRef.current;

    const renderLoop = (timestamp: number) => {
      if (!isPlaying) {
        animFrameRef.current = requestAnimationFrame(renderLoop);
        return;
      }

      const frequency = (currentConfig.bpm / 60) * 0.025;
      localPhase += frequency;
      phaseRef.current = localPhase;

      const normalizedPhase = localPhase % 1.0;

      if (normalizedPhase >= 0.24 && normalizedPhase <= 0.27) {
        if (timestamp - lastPeakTimeRef.current > 350) {
          playBeep();
          lastPeakTimeRef.current = timestamp;
        }
      }

      drawECGFrame(ecgCtx, width, height, localPhase, activeRhythm, noiseLevel);
      drawPPGFrame(ppgCtx, width, height, localPhase, activeRhythm, noiseLevel);

      animFrameRef.current = requestAnimationFrame(renderLoop);
    };

    animFrameRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [activeRhythm, isPlaying, noiseLevel, audioEnabled, currentConfig]);

  // Synthetic Lead-II ECG generator
  const drawECGFrame = (
    ctx: CanvasRenderingContext2D, 
    w: number, 
    h: number, 
    phase: number, 
    rhythm: RhythmType,
    noise: number
  ) => {
    ctx.fillStyle = '#1e1b4b'; // dark indigo clinical monitor background
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = '#312e81';
    ctx.lineWidth = 0.5;
    const gridSize = 20;
    for (let x = 0; x < w; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }
    for (let y = 0; y < h; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(w, y);
      ctx.stroke();
    }

    // ECG Trace
    ctx.strokeStyle = rhythm === 'normal' ? '#34d399' : rhythm === 'tachycardia' ? '#fbbf24' : '#f87171';
    ctx.lineWidth = 2.4;
    ctx.shadowBlur = 6;
    ctx.shadowColor = rhythm === 'normal' ? '#34d39988' : '#f8717188';
    ctx.beginPath();

    const centerY = h * 0.55;
    const scaleY = h * 0.45;

    for (let x = 0; x < w; x++) {
      const xProgress = (x / w) * 3.5;
      let p = (phase - xProgress) % 1.0;
      if (p < 0) p += 1.0;

      let val = 0;

      if (rhythm === 'afib') {
        const fOscillation = Math.sin(p * 28 * Math.PI) * 0.08;
        val += fOscillation;
        if (p > 0.20 && p < 0.24) val -= 0.15;
        else if (p >= 0.24 && p <= 0.27) val += 0.85;
        else if (p > 0.27 && p < 0.31) val -= 0.25;
        else if (p >= 0.45 && p <= 0.65) val += 0.15 * Math.sin((p - 0.45) * 5 * Math.PI);
      } else if (rhythm === 'pvc') {
        const isEctopic = Math.floor(phase - xProgress) % 2 === 0;
        if (isEctopic) {
          if (p >= 0.20 && p <= 0.35) {
            val -= 0.9 * Math.sin((p - 0.20) * 6.6 * Math.PI);
          } else if (p >= 0.45 && p <= 0.70) {
            val += 0.35 * Math.sin((p - 0.45) * 4 * Math.PI);
          }
        } else {
          if (p >= 0.08 && p <= 0.16) val += 0.12 * Math.sin((p - 0.08) * 12.5 * Math.PI);
          if (p > 0.20 && p < 0.23) val -= 0.15;
          if (p >= 0.23 && p <= 0.27) val += 0.95;
          if (p > 0.27 && p < 0.31) val -= 0.25;
          if (p >= 0.42 && p <= 0.62) val += 0.22 * Math.sin((p - 0.42) * 5 * Math.PI);
        }
      } else {
        if (p >= 0.08 && p <= 0.16) val += 0.14 * Math.sin((p - 0.08) * 12.5 * Math.PI);
        if (p > 0.20 && p < 0.23) val -= 0.15;
        if (p >= 0.23 && p <= 0.27) val += 0.98;
        if (p > 0.27 && p < 0.31) val -= 0.28;
        if (p >= 0.42 && p <= 0.62) val += 0.22 * Math.sin((p - 0.42) * 5 * Math.PI);
      }

      const noiseVal = (Math.random() - 0.5) * (noise / 100) * 0.4;
      const wander = Math.sin(x * 0.015 + phase) * 0.05;
      const totalY = centerY - (val + noiseVal + wander) * scaleY;

      if (x === 0) ctx.moveTo(x, totalY);
      else ctx.lineTo(x, totalY);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  };

  // Synthetic PPG Photoplethysmogram pulse generator
  const drawPPGFrame = (
    ctx: CanvasRenderingContext2D, 
    w: number, 
    h: number, 
    phase: number, 
    rhythm: RhythmType,
    noise: number
  ) => {
    ctx.fillStyle = '#1e1b4b';
    ctx.fillRect(0, 0, w, h);

    // Grid lines
    ctx.strokeStyle = '#312e81';
    ctx.lineWidth = 0.5;
    for (let x = 0; x < w; x += 20) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, h);
      ctx.stroke();
    }

    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 2.4;
    ctx.shadowBlur = 6;
    ctx.shadowColor = '#38bdf888';
    ctx.beginPath();

    const centerY = h * 0.65;
    const scaleY = h * 0.5;

    for (let x = 0; x < w; x++) {
      const xProgress = (x / w) * 3.5;
      let p = (phase - xProgress - 0.12) % 1.0;
      if (p < 0) p += 1.0;

      let val = 0;
      if (p >= 0.0 && p <= 0.35) {
        val = Math.sin((p / 0.35) * Math.PI);
      } else if (p > 0.35 && p <= 0.60) {
        val = 0.4 * Math.sin(((p - 0.35) / 0.25) * Math.PI) + 0.15;
      } else {
        val = 0.05 * Math.exp(-(p - 0.60) * 5);
      }

      if (rhythm === 'afib') {
        val *= 0.6 + Math.sin(x * 0.03) * 0.35;
      }

      const noiseVal = (Math.random() - 0.5) * (noise / 100) * 0.3;
      const totalY = centerY - (val + noiseVal) * scaleY;

      if (x === 0) ctx.moveTo(x, totalY);
      else ctx.lineTo(x, totalY);
    }
    ctx.stroke();
    ctx.shadowBlur = 0;
  };

  return (
    <div 
      id="arrhythmia-monitor-container"
      className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:shadow-purple-500/5 transition-all"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-rose-50 border border-rose-200 text-rose-600">
              <HeartPulse className="w-5 h-5 animate-pulse" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Smart Arrhythmia Detection & Dual Telemetry Monitor
              </h3>
              <p className="text-xs text-purple-700/80 font-mono mt-0.5">
                Real-time Dual Biosignal Pipeline: Lead-II ECG (500Hz) & Optical PPG Pulse Stream
              </p>
            </div>
          </div>
        </div>

        {/* Global Controls */}
        <div className="flex items-center gap-2">
          <button
            id="btn-toggle-telemetry-audio"
            onClick={() => setAudioEnabled(!audioEnabled)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-1.5 border transition-all cursor-pointer ${
              audioEnabled 
                ? 'bg-purple-50 border-purple-300 text-purple-700 shadow-2xs font-semibold' 
                : 'bg-white border-purple-200 text-slate-600 hover:text-purple-700'
            }`}
            title="Toggle Cardiac Rhythm Beeper Sound"
          >
            {audioEnabled ? <Volume2 className="w-4 h-4 text-purple-600" /> : <VolumeX className="w-4 h-4" />}
            <span>{audioEnabled ? 'Audio On' : 'Audio Muted'}</span>
          </button>

          <button
            id="btn-toggle-telemetry-stream"
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-all cursor-pointer ${
              isPlaying 
                ? 'bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700' 
                : 'bg-emerald-600 border-emerald-500 text-white'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? 'Pause Stream' : 'Resume'}</span>
          </button>
        </div>
      </div>

      {/* Rhythm Preset Selectors (Bento row) */}
      <div className="mt-6">
        <label className="text-[10px] font-mono uppercase text-purple-700 block mb-2.5 font-bold tracking-wider">
          Select Cardiac Rhythm Condition to Simulate
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {(Object.keys(rhythmConfigs) as RhythmType[]).map((rKey) => {
            const config = rhythmConfigs[rKey];
            const isSelected = activeRhythm === rKey;
            return (
              <button
                key={rKey}
                id={`btn-rhythm-${rKey}`}
                onClick={() => setActiveRhythm(rKey)}
                className={`p-3 rounded-2xl text-left border transition-all flex flex-col justify-between cursor-pointer ${
                  isSelected 
                    ? config.riskLevel === 'Normal' 
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-950 ring-2 ring-emerald-300'
                      : config.riskLevel === 'Moderate'
                      ? 'bg-amber-50 border-amber-400 text-amber-950 ring-2 ring-amber-300'
                      : 'bg-rose-50 border-rose-400 text-rose-950 ring-2 ring-rose-300'
                    : 'bg-purple-50/40 border-purple-100 text-slate-700 hover:bg-purple-50 hover:border-purple-300'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase opacity-75 font-semibold">{rKey}</span>
                  <span className={`w-2 h-2 rounded-full ${
                    config.riskLevel === 'Normal' ? 'bg-emerald-500' : config.riskLevel === 'Moderate' ? 'bg-amber-500' : 'bg-rose-500 animate-ping'
                  }`} />
                </div>
                <div className="mt-2 font-bold text-xs text-slate-900 leading-tight">
                  {config.name.split(' (')[0]}
                </div>
                <div className="mt-1 font-mono text-[10px] text-slate-500">
                  {config.bpm} BPM • {config.riskLevel}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dual Waveform Canvas Displays (Bento sub-boxes) */}
      <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
        
        {/* Channel 1: Lead II ECG */}
        <div className="p-4 rounded-3xl bg-slate-950 border border-purple-900/40 relative shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span className="text-xs font-mono font-bold text-rose-300">
                Channel 1: Lead-II ECG (mV)
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              500 Hz Sampling • Pan-Tompkins Active
            </span>
          </div>
          <canvas
            ref={ecgCanvasRef}
            width={600}
            height={160}
            className="w-full h-36 sm:h-40 rounded-2xl bg-[#1e1b4b] border border-indigo-950"
          />
          <div className="mt-2.5 flex justify-between text-[10px] font-mono text-slate-400">
            <span>P-Wave: {activeRhythm === 'afib' ? 'Absent (Fibrillatory)' : 'Synchronized'}</span>
            <span>QRS Duration: {activeRhythm === 'pvc' ? '142ms (Widened)' : '84ms (Normal)'}</span>
            <span>R-Peak Amp: 1.25 mV</span>
          </div>
        </div>

        {/* Channel 2: Optical PPG */}
        <div className="p-4 rounded-3xl bg-slate-950 border border-purple-900/40 relative shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span className="text-xs font-mono font-bold text-cyan-300">
                Channel 2: Optical PPG Pulse Wave (Infrared Vol.)
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-400">
              100 Hz Optical • Dicrotic Filtered
            </span>
          </div>
          <canvas
            ref={ppgCanvasRef}
            width={600}
            height={160}
            className="w-full h-36 sm:h-40 rounded-2xl bg-[#1e1b4b] border border-indigo-950"
          />
          <div className="mt-2.5 flex justify-between text-[10px] font-mono text-slate-400">
            <span>Systolic Notch: Detected</span>
            <span>Pulse Transit Time (PTT): {currentConfig.ptt} ms</span>
            <span>SpO2 Estimate: {currentConfig.spo2}%</span>
          </div>
        </div>

      </div>

      {/* Real-time Telemetry Readout Grid (Bento 4-card row) */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        
        {/* Heart Rate */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">Heart Rate (HR)</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className={`text-2xl font-bold font-mono ${
              currentConfig.bpm > 100 || currentConfig.bpm < 50 ? 'text-amber-600' : 'text-emerald-700'
            }`}>
              {currentConfig.bpm}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">BPM</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600">
            {currentConfig.bpm > 100 ? 'Tachycardic rate' : currentConfig.bpm < 50 ? 'Bradycardic rate' : 'Normal sinus baseline'}
          </p>
        </div>

        {/* Heart Rate Variability (HRV) */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">HRV (SDNN)</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-cyan-700">
              {currentConfig.hrv}
            </span>
            <span className="text-[10px] text-slate-500 font-mono">ms</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600">
            R-R interval standard deviation
          </p>
        </div>

        {/* Diagnostic Rhythm Classification */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">ML Classifier Output</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className={`text-sm font-bold font-mono ${
              currentConfig.riskLevel === 'Normal' ? 'text-emerald-700' : currentConfig.riskLevel === 'Moderate' ? 'text-amber-700' : 'text-rose-700'
            }`}>
              {currentConfig.riskLevel.toUpperCase()} RISK
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600 line-clamp-1">
            {currentConfig.name.split(' (')[0]}
          </p>
        </div>

        {/* Signal Quality Index & Noise */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">
            <span>Signal Quality (SQI)</span>
            <span className="text-purple-700 font-bold">{100 - noiseLevel * 2}%</span>
          </div>
          <div className="mt-2 flex items-center gap-2">
            <Sliders className="w-3.5 h-3.5 text-purple-400" />
            <input
              type="range"
              min="0"
              max="20"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(Number(e.target.value))}
              className="w-full h-1.5 bg-purple-200 rounded appearance-none cursor-pointer accent-purple-600"
              title="Adjust Simulated Sensor Noise"
            />
          </div>
          <p className="mt-1 text-[10px] text-slate-500 font-mono">
            Sensor noise: {noiseLevel}%
          </p>
        </div>

      </div>

      {/* Emergency Alert & Dispatch Automation Box */}
      <div className="mt-5 p-4 rounded-2xl bg-purple-50/40 border border-purple-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldAlert className={`w-4 h-4 ${currentConfig.riskLevel === 'Critical' ? 'text-rose-600 animate-bounce' : 'text-purple-600'}`} />
            <span className="text-xs font-mono font-bold text-slate-900">
              Automated Alert Dispatch Subsystem
            </span>
          </div>
          <p className="mt-1 text-xs text-slate-600 leading-relaxed">
            When lethal rhythms (e.g. AFib or frequent PVCs) are flagged by the classifier, the system instantly triggers automated physician notifications and SMS emergency broadcasts.
          </p>
        </div>

        <button
          id="btn-trigger-arrhythmia-sos"
          onClick={handleDispatchEmergencyAlert}
          className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/30 transition-all flex items-center justify-center gap-2 shrink-0 font-mono cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Simulate Emergency Dispatch</span>
        </button>
      </div>

      {/* Real-time Telemetry Alert Stream Log */}
      {alertLog.length > 0 && (
        <div className="mt-4 p-4 rounded-2xl bg-slate-900 border border-purple-900/30 space-y-1.5">
          <div className="text-[10px] font-mono text-purple-300 font-bold uppercase tracking-wider flex items-center justify-between">
            <span>Real-time Event Logs & Alerts:</span>
            <span className="text-[10px] text-slate-400">{alertLog.length} events logged</span>
          </div>
          {alertLog.map((log, idx) => (
            <div key={idx} className="text-xs font-mono text-slate-200 flex items-start gap-2">
              <span className="text-slate-400">[{log.time}]</span>
              <span className={log.msg.includes('CRITICAL') ? 'text-rose-400 font-semibold' : 'text-amber-300'}>
                {log.msg}
              </span>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
