import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Shield, Activity, Cpu, Sparkles, ChevronRight, Eye, RefreshCw } from 'lucide-react';

interface Stage {
  id: number;
  label: string;
  tagline: string;
  duration: string;
  description: string;
  specs: string[];
  color: string;
  visualImage: string;
}

const PROCESS_STAGES: Stage[] = [
  {
    id: 1,
    label: 'Phase I: Lifetime Telemetry Ingestion',
    tagline: 'The Q-Band Chronos on your wrist across decades',
    duration: '00 — 80 Years of Living Biology',
    description: 'From your first boardroom victory to quiet twilight reflections, the aerospace titanium bracelet continuously maps neuro-vascular cadence, vocal syntax, moral axioms, and emotional resonance.',
    specs: ['Subdermal Galvanic & HRV Stream', 'Patented Syntax Ingestion', 'Zero Battery Maintenance', 'Continuous Dynamic Neural Calibration'],
    color: 'from-amber-500/20 to-orange-500/10',
    visualImage: '/src/assets/images/qabbar_telemetry_bracelet_1793364585117.jpg'
  },
  {
    id: 2,
    label: 'Phase II: Crypt Sculpting & Neural Synthesis',
    tagline: 'Biological Transition & Patented Master Prompt Generation',
    duration: 'Immediate Transition Protocol',
    description: 'Upon verified biological cessation, 4.2 petabytes of telemetry are compressed into our patented Neural Mind Engine. Simultaneously, robotic laser cutters mill your monolithic obsidian and titanium crypt.',
    specs: ['Exaflop Neural Distillation', 'Robotic Monolith Millwork', '5D Silica Crystal Encoding', 'Perpetual Lineage Trust Initiation'],
    color: 'from-cyan-500/20 to-blue-500/10',
    visualImage: '/src/assets/images/qabbar_neural_core_1793364654944.jpg'
  },
  {
    id: 3,
    label: 'Phase III: Volumetric Hologram & Eternal Communion',
    tagline: 'Your loved ones converse with you across generations',
    duration: 'Centuries of Perpetual Dialogue',
    description: 'Descendants enter the private subterranean sanctuary. Touch the plinth glass. Your life-size holographic silhouette materializes, speaking in your authentic voice, wit, worldview, and paternal/maternal guidance.',
    specs: ['450M Voxels/m³ Holographic Array', 'Sub-20ms Voice Response', 'Private Acoustic Sanctuary', 'Lineage Succession Governance'],
    color: 'from-emerald-500/20 to-teal-500/10',
    visualImage: '/src/assets/images/qabbar_hologram_sanctuary_1793364566486.jpg'
  }
];

export const HeroProcessVideo: React.FC = () => {
  const [currentStageIdx, setCurrentStageIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [telemetryPulse, setTelemetryPulse] = useState({ bpm: 72, hrv: 68, syntaxPurity: 99.8 });
  const [progress, setProgress] = useState(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  // Auto-advance process loop every 8 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = 100;
    const stepDuration = 8000;
    const increment = (interval / stepDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentStageIdx((s) => (s + 1) % PROCESS_STAGES.length);
          return 0;
        }
        return prev + increment;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isPlaying, currentStageIdx]);

  // Telemetry fluctuation effect
  useEffect(() => {
    const pulseTimer = setInterval(() => {
      setTelemetryPulse({
        bpm: Math.floor(68 + Math.random() * 8),
        hrv: Math.floor(64 + Math.random() * 12),
        syntaxPurity: +(99.7 + Math.random() * 0.25).toFixed(2)
      });
    }, 1500);
    return () => clearInterval(pulseTimer);
  }, []);

  // Web Audio ambient drone
  const toggleAudio = () => {
    if (!audioEnabled) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        const osc = ctx.createOscillator();
        const subOsc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(108, ctx.currentTime); // 108Hz meditative drone
        subOsc.type = 'triangle';
        subOsc.frequency.setValueAtTime(54, ctx.currentTime);

        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 2);

        osc.connect(gain);
        subOsc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        subOsc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setAudioEnabled(true);
      } catch (e) {
        console.warn('Audio not available', e);
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.5);
        setTimeout(() => {
          audioCtxRef.current?.close();
          setAudioEnabled(false);
        }, 500);
      } else {
        setAudioEnabled(false);
      }
    }
  };

  const activeStage = PROCESS_STAGES[currentStageIdx];

  return (
    <div className="relative w-full h-[620px] sm:h-[700px] lg:h-[780px] overflow-hidden rounded-2xl border border-white/10 bg-black/90 shadow-2xl backdrop-blur-3xl group">
      {/* Background Visual Cinematic Canvas Layer */}
      <div className="absolute inset-0">
        {PROCESS_STAGES.map((stage, idx) => (
          <div
            key={stage.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === currentStageIdx ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
          >
            <img
              src={stage.visualImage}
              alt={stage.label}
              className="w-full h-full object-cover object-center filter brightness-[0.72] contrast-[1.12]"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070A] via-black/40 to-black/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#05070A] via-transparent to-[#05070A]/80" />
          </div>
        ))}
      </div>

      {/* Atmospheric Animated Grid & Scanline Hologram FX */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.04)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] pointer-events-none" />

      {/* Top Telemetry Header & Status Bar */}
      <div className="absolute top-0 left-0 right-0 p-4 sm:p-6 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 bg-black/40 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
          </div>
          <span className="font-mono text-xs tracking-widest uppercase text-amber-300 font-semibold">
            Qabbar Operational Continuum // Feed 04
          </span>
          <span className="hidden sm:inline-block text-xs text-slate-400 font-mono border-l border-white/10 pl-3">
            LATENCY: 12ms • QUANTUM ENCRYPTED
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Live Biometric Readout Badge */}
          <div className="hidden md:flex items-center gap-4 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-xs font-mono text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              HRV: {telemetryPulse.hrv}ms
            </span>
            <span className="text-white/20">|</span>
            <span className="text-amber-300 font-medium">BPM: {telemetryPulse.bpm}</span>
            <span className="text-white/20">|</span>
            <span className="text-cyan-400">SYNTAX: {telemetryPulse.syntaxPurity}%</span>
          </div>

          {/* Sound Drone Toggle */}
          <button
            onClick={toggleAudio}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 bg-black/60 hover:bg-white/10 text-xs font-mono text-slate-300 transition-colors"
            title="Toggle Ambient Acoustic Sanctum Audio"
          >
            {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-amber-400 animate-pulse" /> : <VolumeX className="w-3.5 h-3.5 text-slate-400" />}
            <span className="hidden sm:inline">{audioEnabled ? 'Resonance Active' : 'Sound Off'}</span>
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center justify-center w-8 h-8 rounded-full border border-white/15 bg-black/60 hover:bg-white/10 text-slate-200 transition-colors"
            title={isPlaying ? 'Pause Process Video' : 'Play Process Video'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
          </button>
        </div>
      </div>

      {/* Main Center Overlay Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6 sm:p-10 lg:p-14 pb-28 sm:pb-32">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Process Simulation &bull; Stage 0{activeStage.id} of 03</span>
          </div>

          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-serif font-light tracking-tight text-white leading-tight">
            {activeStage.label}
          </h3>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
            {activeStage.description}
          </p>

          {/* Technical Specs Pill Matrix */}
          <div className="flex flex-wrap gap-2 pt-2">
            {activeStage.specs.map((spec, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/60 border border-white/10 text-xs text-slate-300 font-mono"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Interactive Stage Progress & Selector Bar */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/10 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {PROCESS_STAGES.map((stage, idx) => {
            const isCurrent = idx === currentStageIdx;
            return (
              <button
                key={stage.id}
                onClick={() => {
                  setCurrentStageIdx(idx);
                  setProgress(0);
                }}
                className={`relative text-left p-3.5 rounded-xl border transition-all duration-300 group ${
                  isCurrent
                    ? 'bg-white/10 border-amber-400/50 shadow-lg shadow-amber-950/40'
                    : 'bg-black/40 border-white/5 hover:border-white/20 hover:bg-white/5 opacity-70 hover:opacity-100'
                }`}
              >
                {/* Stage Progress Bar (Only on active) */}
                {isCurrent && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 rounded-t-xl overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-100 ease-linear"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                  <span className={isCurrent ? 'text-amber-300 font-bold' : ''}>0{stage.id} // PHASE</span>
                  <span className="text-[10px] text-slate-500">{stage.duration}</span>
                </div>
                <div className="font-sans text-sm font-medium text-white truncate">
                  {stage.tagline}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
