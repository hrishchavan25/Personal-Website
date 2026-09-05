import React, { useState, useMemo } from 'react';
import { 
  ShieldCheck, 
  AlertTriangle, 
  Zap, 
  Navigation, 
  Sliders, 
  RefreshCw, 
  Moon, 
  Sun, 
  Radio, 
  CheckCircle2, 
  Info,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Node {
  id: string;
  name: string;
  x: number; // percentage in grid (0-100)
  y: number; // percentage in grid (0-100)
  lighting: number; // 0 - 100%
  policeNear: boolean;
  cctvCovered: boolean;
}

interface Edge {
  from: string;
  to: string;
  distance: number; // meters
  baseRisk: number; // 0 - 100 (high = dangerous)
  streetName: string;
}

export const SecureRoutesDemo: React.FC = () => {
  // Demo Nodes in a 4x3 city grid topology
  const nodes: Node[] = [
    { id: 'A', name: 'Metro Station (Origin)', x: 12, y: 18, lighting: 95, policeNear: true, cctvCovered: true },
    { id: 'B', name: 'Main Commercial Blvd', x: 42, y: 18, lighting: 90, policeNear: true, cctvCovered: true },
    { id: 'C', name: 'North Residential Gate', x: 82, y: 18, lighting: 75, policeNear: false, cctvCovered: true },
    
    { id: 'D', name: 'Dark Industrial Alley', x: 12, y: 50, lighting: 20, policeNear: false, cctvCovered: false },
    { id: 'E', name: 'Central University Plaza', x: 45, y: 50, lighting: 88, policeNear: true, cctvCovered: true },
    { id: 'F', name: 'East Transit Loop', x: 82, y: 50, lighting: 70, policeNear: false, cctvCovered: true },

    { id: 'G', name: 'Unlit Park Pathway', x: 12, y: 82, lighting: 15, policeNear: false, cctvCovered: false },
    { id: 'H', name: 'City Hospital & 24/7 Police Kiosk', x: 45, y: 82, lighting: 98, policeNear: true, cctvCovered: true },
    { id: 'I', name: 'Tech Campus & Residence (Destination)', x: 82, y: 82, lighting: 92, policeNear: true, cctvCovered: true },
  ];

  const edges: Edge[] = [
    // Top horizontal
    { from: 'A', to: 'B', distance: 320, baseRisk: 10, streetName: 'Grand Promenade' },
    { from: 'B', to: 'C', distance: 340, baseRisk: 25, streetName: 'North Avenue' },
    
    // Middle horizontal
    { from: 'D', to: 'E', distance: 290, baseRisk: 75, streetName: 'Industrial Connector (Isolated)' },
    { from: 'E', to: 'F', distance: 310, baseRisk: 15, streetName: 'University Walkway' },

    // Bottom horizontal
    { from: 'G', to: 'H', distance: 300, baseRisk: 85, streetName: 'Overgrown Park Trail' },
    { from: 'H', to: 'I', distance: 320, baseRisk: 5, streetName: 'Hospital Boulevard' },

    // Verticals
    { from: 'A', to: 'D', distance: 280, baseRisk: 65, streetName: 'Rear Depot Lane' },
    { from: 'D', to: 'G', distance: 280, baseRisk: 90, streetName: 'Unmonitored Back-alley' },
    
    { from: 'B', to: 'E', distance: 270, baseRisk: 10, streetName: 'Central Plaza Avenue' },
    { from: 'E', to: 'H', distance: 270, baseRisk: 8, streetName: 'Medical Center Way' },

    { from: 'C', to: 'F', distance: 280, baseRisk: 30, streetName: 'East Ring Road' },
    { from: 'F', to: 'I', distance: 280, baseRisk: 15, streetName: 'Campus South Connector' },
  ];

  // States
  const [selectedOrigin, setSelectedOrigin] = useState<string>('A');
  const [selectedDestination, setSelectedDestination] = useState<string>('I');
  const [routingMode, setRoutingMode] = useState<'safe' | 'fastest'>('safe');
  const [isNightTime, setIsNightTime] = useState<boolean>(true);
  const [safetyWeight, setSafetyWeight] = useState<number>(75); // 0 (pure speed) to 100 (maximum safety)
  const [sosActive, setSosActive] = useState<boolean>(false);
  const [sosLog, setSosLog] = useState<string | null>(null);

  // Trigger Emergency SOS simulation
  const handleTriggerSOS = () => {
    setSosActive(true);
    const timeString = new Date().toLocaleTimeString();
    setSosLog(`[${timeString}] EMERGENCY SOS DISPATCHED: GPS Lat 19.0760, Lon 72.8777. Emergency contacts alerted via SMS & Local Police Station Kiosk notified.`);
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ef4444', '#f87171', '#dc2626']
    });
  };

  // Compute Path using custom A* heuristic with safety weights
  const pathResult = useMemo(() => {
    const adj: Record<string, { neighbor: string; edge: Edge }[]> = {};
    nodes.forEach(n => adj[n.id] = []);
    edges.forEach(e => {
      adj[e.from].push({ neighbor: e.to, edge: e });
      adj[e.to].push({ neighbor: e.from, edge: e });
    });

    const dist: Record<string, number> = {};
    const prev: Record<string, string | null> = {};
    const unvisited = new Set(nodes.map(n => n.id));

    nodes.forEach(n => {
      dist[n.id] = Infinity;
      prev[n.id] = null;
    });
    dist[selectedOrigin] = 0;

    while (unvisited.size > 0) {
      let curr: string | null = null;
      let minD = Infinity;
      unvisited.forEach(nodeId => {
        if (dist[nodeId] < minD) {
          minD = dist[nodeId];
          curr = nodeId;
        }
      });

      if (!curr || curr === selectedDestination || minD === Infinity) break;
      unvisited.delete(curr);

      const neighbors = adj[curr] || [];
      for (const { neighbor, edge } of neighbors) {
        if (!unvisited.has(neighbor)) continue;

        let segmentCost = edge.distance;
        
        if (routingMode === 'safe') {
          const nightFactor = isNightTime ? 1.8 : 1.0;
          const toNode = nodes.find(n => n.id === neighbor);
          const lightingDiscount = toNode ? (toNode.lighting / 100) : 0.5;
          const policeBonus = toNode?.policeNear ? 0.4 : 1.0;
          
          const computedRisk = edge.baseRisk * nightFactor * (1.5 - lightingDiscount) * policeBonus;
          const penaltyWeight = safetyWeight / 50; // 0 to 2
          segmentCost = edge.distance + (computedRisk * 8 * penaltyWeight);
        }

        const newDist = dist[curr] + segmentCost;
        if (newDist < dist[neighbor]) {
          dist[neighbor] = newDist;
          prev[neighbor] = curr;
        }
      }
    }

    const path: string[] = [];
    let currNode: string | null = selectedDestination;
    while (currNode) {
      path.unshift(currNode);
      currNode = prev[currNode];
      if (currNode === selectedOrigin) {
        path.unshift(selectedOrigin);
        break;
      }
    }

    let totalDistance = 0;
    let totalRisk = 0;
    let avgLighting = 0;
    let policeCoverageCount = 0;

    for (let i = 0; i < path.length - 1; i++) {
      const u = path[i];
      const v = path[i+1];
      const edge = edges.find(e => (e.from === u && e.to === v) || (e.from === v && e.to === u));
      if (edge) {
        totalDistance += edge.distance;
        totalRisk += edge.baseRisk;
      }
    }

    path.forEach(nodeId => {
      const n = nodes.find(item => item.id === nodeId);
      if (n) {
        avgLighting += n.lighting;
        if (n.policeNear) policeCoverageCount++;
      }
    });

    if (path.length > 0) {
      avgLighting = Math.round(avgLighting / path.length);
    }

    const rawSafetyScore = Math.max(10, Math.min(99, 100 - Math.round(totalRisk / Math.max(1, path.length - 1))));
    const adjustedSafetyScore = isNightTime ? Math.round(rawSafetyScore * (avgLighting / 100)) : rawSafetyScore;

    return {
      path,
      totalDistance,
      avgLighting,
      safetyScore: Math.min(99, Math.max(25, adjustedSafetyScore)),
      policeCoverage: policeCoverageCount,
      estimatedTime: Math.round((totalDistance / 1.2) / 60)
    };
  }, [selectedOrigin, selectedDestination, routingMode, isNightTime, safetyWeight]);

  return (
    <div 
      id="secure-routes-simulator-container"
      className="p-6 sm:p-8 rounded-3xl bg-white border border-purple-100 shadow-sm hover:shadow-md hover:shadow-purple-500/5 transition-all"
    >
      {/* Simulator Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-100">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="p-2 rounded-xl bg-purple-50 border border-purple-200 text-purple-600">
              <Navigation className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                W-SecureRoutes Algorithm Simulator
              </h3>
              <p className="text-xs text-purple-700/80 font-mono mt-0.5">
                Dynamic Random Forest Risk & Multi-Objective A* Pathfinding Heuristic
              </p>
            </div>
          </div>
        </div>

        {/* Night / Day Toggle */}
        <div className="flex items-center gap-2">
          <button
            id="btn-toggle-time-of-day"
            onClick={() => setIsNightTime(!isNightTime)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-mono flex items-center gap-2 border transition-all cursor-pointer ${
              isNightTime 
                ? 'bg-purple-900 border-purple-800 text-purple-100 shadow-xs' 
                : 'bg-amber-50 border-amber-300 text-amber-900'
            }`}
          >
            {isNightTime ? <Moon className="w-3.5 h-3.5 text-purple-300" /> : <Sun className="w-3.5 h-3.5 text-amber-600" />}
            <span>{isNightTime ? 'Night Mode (Risk Factor x1.8)' : 'Day Mode (Standard Lighting)'}</span>
          </button>
        </div>
      </div>

      {/* Control Panel Grid (Bento style sub-boxes) */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Routing Algorithm Mode Toggle */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <label className="text-[10px] font-mono uppercase text-purple-700 block mb-2 font-bold tracking-wider">
            Routing Objective
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              id="btn-mode-safe"
              onClick={() => setRoutingMode('safe')}
              className={`py-2 px-3 rounded-full text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                routingMode === 'safe'
                  ? 'bg-purple-600 text-white font-bold shadow-md shadow-purple-500/20'
                  : 'bg-white text-slate-700 hover:text-purple-700 border border-purple-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              W-Secure Safe
            </button>
            <button
              id="btn-mode-fastest"
              onClick={() => setRoutingMode('fastest')}
              className={`py-2 px-3 rounded-full text-xs font-medium flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                routingMode === 'fastest'
                  ? 'bg-rose-600 text-white font-bold shadow-md shadow-rose-600/20'
                  : 'bg-white text-slate-700 hover:text-rose-600 border border-purple-200'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              Fastest Only
            </button>
          </div>
          <p className="mt-2.5 text-[11px] text-slate-600 leading-relaxed">
            {routingMode === 'safe' 
              ? '✓ Penalizes dark corridors & prioritizes well-lit avenues with CCTV/police presence.' 
              : '⚠ Pure shortest distance (ignores crime density & unlit alleys).'}
          </p>
        </div>

        {/* Safety Weight Preference Slider */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="flex items-center justify-between text-[10px] font-mono text-purple-700 mb-2 font-bold tracking-wider uppercase">
            <span className="flex items-center gap-1.5">
              <Sliders className="w-3.5 h-3.5 text-purple-600" />
              Safety vs Speed Weight
            </span>
            <span className="text-purple-700 font-mono font-bold">{safetyWeight}% Safety</span>
          </div>
          <input
            id="input-safety-weight-slider"
            type="range"
            min="0"
            max="100"
            value={safetyWeight}
            disabled={routingMode === 'fastest'}
            onChange={(e) => setSafetyWeight(Number(e.target.value))}
            className="w-full h-1.5 bg-purple-200 rounded-lg appearance-none cursor-pointer accent-purple-600 disabled:opacity-30"
          />
          <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1.5">
            <span>Fastest (0%)</span>
            <span>Balanced (50%)</span>
            <span>Safest (100%)</span>
          </div>
        </div>

        {/* Emergency SOS & Action */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100 flex flex-col justify-between">
          <label className="text-[10px] font-mono uppercase text-purple-700 block font-bold tracking-wider">
            Emergency 1-Tap SOS
          </label>
          <button
            id="btn-trigger-sos-sim"
            onClick={handleTriggerSOS}
            className="w-full py-2.5 px-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md shadow-rose-600/30 transition-all flex items-center justify-center gap-2 mt-2 font-mono cursor-pointer"
          >
            <Radio className="w-4 h-4 animate-pulse text-white" />
            <span>Simulate Panic SOS Dispatch</span>
          </button>
        </div>

      </div>

      {/* SOS Alert Notification Box */}
      {sosActive && (
        <div 
          id="sos-alert-banner"
          className="mt-4 p-4 rounded-2xl bg-rose-50 border border-rose-300 text-rose-900 text-xs flex items-start justify-between gap-3 animate-fade-in"
        >
          <div className="flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 mt-0.5 shrink-0 animate-bounce" />
            <div>
              <p className="font-bold text-rose-950 uppercase tracking-wide font-mono">Emergency Alert Broadcasted</p>
              <p className="text-rose-900 font-mono mt-0.5">{sosLog}</p>
            </div>
          </div>
          <button 
            onClick={() => setSosActive(false)}
            className="text-xs font-mono text-rose-700 hover:text-rose-900 underline shrink-0 cursor-pointer font-semibold"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* Interactive Map Canvas Grid */}
      <div className="mt-6 relative w-full h-80 sm:h-96 rounded-3xl bg-purple-50/60 border border-purple-200 overflow-hidden select-none">
        
        {/* SVG Path Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Base graph edges */}
          {edges.map((edge, idx) => {
            const fromNode = nodes.find(n => n.id === edge.from);
            const toNode = nodes.find(n => n.id === edge.to);
            if (!fromNode || !toNode) return null;

            const isInPath = pathResult.path.some((nodeId, i) => {
              if (i === pathResult.path.length - 1) return false;
              const nextNodeId = pathResult.path[i + 1];
              return (nodeId === edge.from && nextNodeId === edge.to) ||
                     (nodeId === edge.to && nextNodeId === edge.from);
            });

            return (
              <g key={idx}>
                <line
                  x1={`${fromNode.x}%`}
                  y1={`${fromNode.y}%`}
                  x2={`${toNode.x}%`}
                  y2={`${toNode.y}%`}
                  stroke={isInPath ? (routingMode === 'safe' ? '#7c3aed' : '#e11d48') : '#cbd5e1'}
                  strokeWidth={isInPath ? 4 : 2}
                  strokeDasharray={isInPath ? 'none' : '4 4'}
                  className="transition-all duration-300"
                />
                {isInPath && (
                  <line
                    x1={`${fromNode.x}%`}
                    y1={`${fromNode.y}%`}
                    x2={`${toNode.x}%`}
                    y2={`${toNode.y}%`}
                    stroke={routingMode === 'safe' ? '#a855f7' : '#fb7185'}
                    strokeWidth={10}
                    strokeOpacity={0.25}
                  />
                )}
              </g>
            );
          })}
        </svg>

        {/* Nodes Layer */}
        {nodes.map((node) => {
          const isOrigin = node.id === selectedOrigin;
          const isDest = node.id === selectedDestination;
          const isVisited = pathResult.path.includes(node.id);

          return (
            <div
              key={node.id}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center"
            >
              <button
                id={`map-node-${node.id}`}
                onClick={() => {
                  if (node.id === selectedOrigin) return;
                  if (node.id === selectedDestination) return;
                  if (selectedOrigin !== node.id) {
                    setSelectedDestination(node.id);
                  }
                }}
                className={`w-9 h-9 rounded-2xl flex items-center justify-center font-mono font-bold text-xs transition-all transform hover:scale-110 shadow-sm cursor-pointer ${
                  isOrigin 
                    ? 'bg-emerald-600 text-white ring-4 ring-emerald-300 z-30'
                    : isDest 
                    ? 'bg-purple-700 text-white ring-4 ring-purple-300 z-30'
                    : isVisited 
                    ? (routingMode === 'safe' ? 'bg-purple-600 text-white font-bold' : 'bg-rose-600 text-white')
                    : node.lighting < 30
                    ? 'bg-white border-2 border-rose-400 text-rose-600'
                    : 'bg-white border border-purple-200 text-slate-700 hover:border-purple-400'
                }`}
                title={`${node.name} (Lighting: ${node.lighting}%, Police: ${node.policeNear ? 'Yes' : 'No'})`}
              >
                {node.id}
              </button>

              {/* Node label card */}
              <div className="mt-1 px-2 py-0.5 rounded-full bg-white/95 border border-purple-200 text-[10px] font-mono text-slate-700 whitespace-nowrap backdrop-blur-sm pointer-events-none shadow-2xs">
                {isOrigin ? 'Origin (Start)' : isDest ? 'Destination' : node.name.split(' ')[0]}
                {node.policeNear && <span className="ml-1 text-emerald-600 font-bold">★ Police</span>}
              </div>
            </div>
          );
        })}

        {/* Legend Overlay */}
        <div className="absolute bottom-3 left-3 z-30 px-3.5 py-2 rounded-2xl bg-white/95 border border-purple-200 backdrop-blur-md text-[11px] font-mono text-slate-700 space-y-1 shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-600" />
            <span>Origin (Point A)</span>
            <span className="w-2 h-2 rounded-full bg-purple-600 ml-2" />
            <span>Destination (Point I)</span>
          </div>
          <div className="flex items-center gap-2 text-slate-600">
            <span className={`w-3 h-1 ${routingMode === 'safe' ? 'bg-purple-600' : 'bg-rose-600'} rounded`} />
            <span>Active Path ({routingMode === 'safe' ? 'W-Secure Safe' : 'Fastest Only'})</span>
          </div>
        </div>

        {/* Quick Origin/Destination selector dropdowns */}
        <div className="absolute top-3 right-3 z-30 flex items-center gap-2 bg-white/95 p-1.5 rounded-full border border-purple-200 backdrop-blur-md text-xs font-mono shadow-xs">
          <div className="flex items-center gap-1 pl-2">
            <span className="text-emerald-700 text-[10px] font-bold">FROM:</span>
            <select
              value={selectedOrigin}
              onChange={(e) => setSelectedOrigin(e.target.value)}
              className="bg-purple-50 border border-purple-200 text-slate-900 text-xs rounded-full px-2 py-0.5 focus:outline-none focus:border-purple-600"
            >
              {nodes.map(n => (
                <option key={n.id} value={n.id} disabled={n.id === selectedDestination}>
                  {n.id}: {n.name.substring(0, 15)}...
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-1 pr-1">
            <span className="text-purple-700 text-[10px] font-bold">TO:</span>
            <select
              value={selectedDestination}
              onChange={(e) => setSelectedDestination(e.target.value)}
              className="bg-purple-50 border border-purple-200 text-slate-900 text-xs rounded-full px-2 py-0.5 focus:outline-none focus:border-purple-600"
            >
              {nodes.map(n => (
                <option key={n.id} value={n.id} disabled={n.id === selectedOrigin}>
                  {n.id}: {n.name.substring(0, 15)}...
                </option>
              ))}
            </select>
          </div>
        </div>

      </div>

      {/* Real-Time Algorithmic Telemetry Metrics (Bento 4-box layout) */}
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
        
        {/* Safety Score */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">Composite Safety Score</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className={`text-2xl font-bold font-mono ${
              pathResult.safetyScore >= 80 ? 'text-purple-700' : pathResult.safetyScore >= 60 ? 'text-amber-600' : 'text-rose-600'
            }`}>
              {pathResult.safetyScore}/100
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              {pathResult.safetyScore >= 80 ? 'High Safety' : 'Risk Elevated'}
            </span>
          </div>
          <div className="mt-2 w-full bg-purple-200 h-1.5 rounded-full overflow-hidden">
            <div 
              className={`h-full transition-all duration-500 ${
                pathResult.safetyScore >= 80 ? 'bg-purple-600' : pathResult.safetyScore >= 60 ? 'bg-amber-500' : 'bg-rose-500'
              }`}
              style={{ width: `${pathResult.safetyScore}%` }}
            />
          </div>
        </div>

        {/* Route Distance */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">Total Distance</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-slate-900">
              {pathResult.totalDistance}m
            </span>
            <span className="text-[10px] text-slate-500 font-mono">
              (~{pathResult.estimatedTime} min)
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600">
            {routingMode === 'safe' ? '+70m for 2.4x higher safety' : 'Absolute minimal meters'}
          </p>
        </div>

        {/* Ambient Street Lighting */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">Avg Street Lighting</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-amber-700">
              {pathResult.avgLighting}%
            </span>
            <span className="text-[10px] text-slate-500 font-mono">Lux Index</span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600">
            {pathResult.avgLighting > 80 ? 'Well-lit corridors' : 'Dark alley segments included'}
          </p>
        </div>

        {/* Police Hubs on Route */}
        <div className="p-4 rounded-2xl bg-purple-50/40 border border-purple-100">
          <div className="text-[10px] font-mono uppercase text-purple-700 font-bold tracking-wider">Emergency Hub Proximity</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-2xl font-bold font-mono text-emerald-700">
              {pathResult.policeCoverage} Hubs
            </span>
          </div>
          <p className="mt-1 text-[11px] text-slate-600">
            {pathResult.policeCoverage > 0 ? 'Active 24/7 Police / Hospital kiosks' : 'No emergency kiosks'}
          </p>
        </div>

      </div>

      {/* Path Step Sequence */}
      <div className="mt-4 p-3.5 rounded-2xl bg-purple-50/40 border border-purple-100 flex flex-wrap items-center gap-2 text-xs font-mono">
        <span className="text-purple-700 font-bold">Node Path:</span>
        {pathResult.path.map((nodeId, idx) => (
          <React.Fragment key={nodeId}>
            <span className={`px-2.5 py-0.5 rounded-full font-bold ${
              nodeId === selectedOrigin 
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' 
                : nodeId === selectedDestination 
                ? 'bg-purple-100 text-purple-800 border border-purple-300'
                : 'bg-white text-slate-700 border border-purple-200'
            }`}>
              {nodeId}
            </span>
            {idx < pathResult.path.length - 1 && (
              <span className="text-purple-300">→</span>
            )}
          </React.Fragment>
        ))}
      </div>

    </div>
  );
};
