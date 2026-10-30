import React from 'react';
import { RefreshCw, Flame, ShieldAlert, Cpu, Sparkles, Scale, CheckCircle2, ArrowRight } from 'lucide-react';

export const SanctuaryDecommissioningDeepDive: React.FC<{ onOpenConsultation: () => void }> = ({ onOpenConsultation }) => {
  return (
    <section className="py-24 sm:py-32 bg-[#03060a] relative border-t border-white/10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono uppercase tracking-widest">
            <RefreshCw className="w-3.5 h-3.5" />
            Clause 41.B &bull; The Dynamic Reclamation Protocol
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            How Sanctuary Equilibrium Is Maintained
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Eternity is not a stagnant museum. It is an active thermodynamic continuum. Understand the rigorous, reasonable, and dignified protocol governing missed lineage payments.
          </p>
        </div>

        {/* 2-Column Deep Dive with Real Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl mb-16">
          
          {/* Image & Video Visual representation */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden border border-white/10 aspect-[16/11]">
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80"
              alt="Automated Precision Reclamation Crucible"
              className="w-full h-full object-cover filter brightness-90 contrast-115"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-red-300 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-red-400" />
              CLEANROOM ROBOTIC RECLAMATION FACILITY
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-400">
              <span className="text-white font-medium">RECOVERY EFFICIENCY:</span> 99.99% Titanium & Basalt Repurposing
            </div>
          </div>

          {/* Explanation Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                THE 4-STAGE REASONABLE EQUILIBRIUM PROTOCOL
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Why Defaulting Crypts Are Reclaimed
              </h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                Just as prime residential real estate cannot sit unoccupied when property taxes and mortgages are abandoned, prime subterranean sanctuary plots cannot be locked into cold neglect. Active quantum cooling, laser interferometry, and high-security vaults require ongoing custodial resources.
              </p>
            </div>

            <div className="space-y-4">
              
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-amber-300 font-semibold">STAGE 01 // 90-DAY GRACE & FAMILY MEDIATION</span>
                  <span className="text-slate-500">Days 001–090</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Upon any billing interruption, Qabbar automatically dispatches autonomous genealogical tracers to notify all designated heirs, executors, and family office fiduciaries.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300 font-semibold">STAGE 02 // 5D QUARTZ PASSIVE RETRACTION</span>
                  <span className="text-slate-500">Day 091</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The active live compute cluster is respectfully detached. Your neural prompt matrix is laser-etched onto indestructible 5D quartz silica glass and placed into our subterranean passive archive vault (where it survives for 14 billion years).
                </p>
              </div>

              <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/30 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-red-300 font-semibold">STAGE 03 // PHYSICAL DECOMMISSIONING & RECLAMATION</span>
                  <span className="text-slate-500">Day 180</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  The physical obsidian plinth and laser emitters are safely dismantled in cleanrooms. The rare earth minerals and basalt are purified and remanufactured into fresh monuments for awaiting patron dynasties.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-300 font-semibold">STAGE 04 // THE RESURRECTION CLAUSE</span>
                  <span className="text-slate-500">Perpetual Option</span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Should a great-grandchild thirty or fifty years later wish to revive their ancestor's hologram, they simply settle the restoration fee. The 5D quartz prompt is re-loaded into an active chamber within 72 hours.
                </p>
              </div>

            </div>

            <div className="pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors"
              >
                Inquire About Sovereign Escrow Immunities
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
