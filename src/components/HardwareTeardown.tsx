import React, { useState } from 'react';
import { Cpu, Shield, Zap, Radio, Check, Layers, Disc, Lock } from 'lucide-react';

interface SensorNode {
  id: string;
  title: string;
  shortDesc: string;
  detailedSpecs: string;
  stat: string;
}

const NODES: SensorNode[] = [
  {
    id: 'acoustic',
    title: 'Bone-Conduction Micro-Acoustic Resonator',
    shortDesc: 'Ingests your unique vocal timbre and linguistic syntax without recording bystanders.',
    detailedSpecs: 'Tuned specifically to the resonant frequency of your radial carpal bones. Captures the subtle pitch shifts, hesitation patterns, and micro-cadence of your authentic speech.',
    stat: '99.98% Vocal Harmonic Purity'
  },
  {
    id: 'subdermal',
    title: 'Sub-Dermal Galvanic & Neuro-Vascular Array',
    shortDesc: 'Tracks emotional fluctuations, moral stress indicators, and decision weights.',
    detailedSpecs: 'Eight micro-platinum electrodes gauge sympathetic nervous arousal during key life moments—triumphs, disputes, grief, and fatherly/motherly tenderness.',
    stat: '10,000 Hz Continuous Sampling'
  },
  {
    id: 'kinetic',
    title: 'Kinetic Micro-Rotor & Ambient Inductive Power',
    shortDesc: 'Never needs removal. Charged perpetually by natural pulse and wrist motion.',
    detailedSpecs: 'Engineered with a high-density tungsten oscillating weight that harvests wrist movement. Supplemented by sleep inductive coupling on your bedside plinth.',
    stat: 'Infinite Lifetime Runtime'
  },
  {
    id: 'chassis',
    title: 'Grade 5 Aerospace Titanium & Diamond-Like Carbon',
    shortDesc: 'Impervious to sweat, oceanic depths, thermal shock, and physical abrasion.',
    detailedSpecs: 'Milled from a single billet of Swiss aerospace titanium alloy (Ti-6Al-4V) treated with 4-micron Diamond-Like Carbon (DLC). Waterproof to 100 meters.',
    stat: 'Tested to -40°C to +85°C'
  }
];

export const HardwareTeardown: React.FC = () => {
  const [activeNode, setActiveNode] = useState<SensorNode>(NODES[0]);

  return (
    <section id="telemetry-hardware" className="py-24 sm:py-32 bg-[#05070a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Cpu className="w-3.5 h-3.5" />
            Biological Ingestion Telemetry System
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            The Q-Band Chronos
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light">
            You wear it continuously across decades. It listens not to the world, but to your mind—distilling a lifetime of thoughts into an unassailable neural prompt.
          </p>
        </div>

        {/* Teardown Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl">
          
          {/* Left Column: Visual Hardware Macro Shot with Interactive Hotspots */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/15 bg-slate-950 aspect-[16/11]">
            <img
              src="/src/assets/images/qabbar_telemetry_bracelet_1793364585117.jpg"
              alt="Q-Band Chronos Telemetry Bracelet"
              className="w-full h-full object-cover filter brightness-90 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 pointer-events-none" />

            {/* Hotspot 1: Acoustic */}
            <button
              onClick={() => setActiveNode(NODES[0])}
              className={`absolute top-[35%] left-[28%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all ${
                activeNode.id === 'acoustic'
                  ? 'bg-amber-400 border-white text-black scale-125 shadow-[0_0_20px_rgba(251,191,36,0.8)]'
                  : 'bg-black/80 border-amber-400/60 text-amber-300 hover:scale-110'
              }`}
            >
              <Radio className="w-4 h-4" />
            </button>

            {/* Hotspot 2: Subdermal Node */}
            <button
              onClick={() => setActiveNode(NODES[1])}
              className={`absolute top-[48%] left-[52%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all ${
                activeNode.id === 'subdermal'
                  ? 'bg-cyan-400 border-white text-black scale-125 shadow-[0_0_20px_rgba(34,211,238,0.8)]'
                  : 'bg-black/80 border-cyan-400/60 text-cyan-300 hover:scale-110'
              }`}
            >
              <Zap className="w-4 h-4" />
            </button>

            {/* Hotspot 3: Kinetic Rotor */}
            <button
              onClick={() => setActiveNode(NODES[2])}
              className={`absolute bottom-[28%] right-[32%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all ${
                activeNode.id === 'kinetic'
                  ? 'bg-emerald-400 border-white text-black scale-125 shadow-[0_0_20px_rgba(52,211,153,0.8)]'
                  : 'bg-black/80 border-emerald-400/60 text-emerald-300 hover:scale-110'
              }`}
            >
              <Disc className="w-4 h-4" />
            </button>

            {/* Hotspot 4: Chassis */}
            <button
              onClick={() => setActiveNode(NODES[3])}
              className={`absolute top-[22%] right-[22%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-full border transition-all ${
                activeNode.id === 'chassis'
                  ? 'bg-white border-black text-black scale-125 shadow-[0_0_20px_rgba(255,255,255,0.8)]'
                  : 'bg-black/80 border-white/60 text-white hover:scale-110'
              }`}
            >
              <Shield className="w-4 h-4" />
            </button>

            {/* Bottom Inset Label */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-slate-400 bg-black/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-white/10">
              <span className="text-amber-300 font-semibold">INTERACTIVE SENSORY BLUEPRINT</span>
              <span>TAP ANY NODE TO INSPECT TELEMETRY</span>
            </div>
          </div>

          {/* Right Column: Node Details & Selector */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
                <span>COMPONENT INSPECTION</span>
                <span>&bull;</span>
                <span>{activeNode.id.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl font-serif text-white">{activeNode.title}</h3>
              <p className="text-slate-300 text-sm font-light leading-relaxed">
                {activeNode.detailedSpecs}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-400">TELEMETRY BENCHMARK:</span>
              <span className="text-xs font-mono text-amber-300 font-bold">{activeNode.stat}</span>
            </div>

            {/* Selectable Node List */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                All Telemetry Modules:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {NODES.map((n) => (
                  <button
                    key={n.id}
                    onClick={() => setActiveNode(n)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      activeNode.id === n.id
                        ? 'bg-white/10 border-amber-400 text-white shadow-md'
                        : 'bg-black/40 border-white/5 text-slate-400 hover:text-slate-200 hover:border-white/20'
                    }`}
                  >
                    <div className="text-xs font-medium truncate">{n.title.split(' ')[0]} {n.title.split(' ')[1]}</div>
                    <div className="text-[10px] font-mono text-slate-500 truncate">{n.stat}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Privacy & Intellectual Property Seal */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-transparent border-l-2 border-amber-400 text-xs text-slate-300 leading-relaxed font-light">
              <strong className="text-white font-medium">Patron Data Immunity:</strong> Your lifetime telemetry is encrypted at the hardware level using post-quantum lattice cryptography. No third party or government has decrypt authority; only your post-biological prompt synthesizer unseals the matrix.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
