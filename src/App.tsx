import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HeroProcessVideo } from './components/HeroProcessVideo';
import { HardwareTeardown } from './components/HardwareTeardown';
import { HologramSimulator } from './components/HologramSimulator';
import { LineageCovenantCalculator } from './components/LineageCovenantCalculator';
import { SanctuaryDecommissioningDeepDive } from './components/SanctuaryDecommissioningDeepDive';
import { SanctuaryMapShowcase } from './components/SanctuaryMapShowcase';
import { VisualAtlasGallery } from './components/VisualAtlasGallery';
import { FooterAndFAQ } from './components/FooterAndFAQ';
import { ContactConsultationModal } from './components/ContactConsultationModal';
import { EstateAdvisorAI } from './components/EstateAdvisorAI';
import { Sparkles, Bot, ArrowRight, ShieldCheck, Cpu, Eye, Compass, Landmark, ChevronDown } from 'lucide-react';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [selectedTierForConsultation, setSelectedTierForConsultation] = useState('The Sovereign Crypt ($420,000)');
  const [selectedLocationForConsultation, setSelectedLocationForConsultation] = useState('Geneva Alpine Bastion Vault (Switzerland)');

  const handleOpenConsultation = (tier?: string, location?: string) => {
    if (tier) setSelectedTierForConsultation(tier);
    if (location) setSelectedLocationForConsultation(location);
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#05070A] text-slate-100 flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-200">
      
      {/* Top Header Navigation */}
      <Navigation
        onOpenConsultation={() => handleOpenConsultation()}
        onOpenAdvisor={() => setIsAdvisorOpen(true)}
      />

      <main className="flex-1">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-500/5 rounded-full blur-[180px] pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            
            {/* Top Motto Banner */}
            <div className="text-center max-w-4xl mx-auto space-y-6 mb-12 sm:mb-16">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-500/15 via-white/5 to-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-mono uppercase tracking-[0.2em] shadow-lg">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>The Sovereign Post-Biological Memorial Estate</span>
              </div>

              {/* Primary Punchy Motto */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-light text-white tracking-tight leading-[1.08]">
                Why invest in your home when you can invest in your{' '}
                <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
                  Qabbar
                </span>
                ?
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-xl text-slate-300 font-light max-w-3xl mx-auto leading-relaxed">
                Wear the aerospace titanium telemetry bracelet during your lifetime. When you pass, our patented AI synthesizes your authentic mental cadence—projecting your volumetric silhouette in a subterranean basalt sanctuary where descendants converse with you forever.
              </p>

              {/* Hero Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => handleOpenConsultation()}
                  className="px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-xl shadow-amber-950/40 flex items-center gap-2"
                >
                  <span>Commission Your Qabbar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href="#hologram-chamber"
                  className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Test Live Hologram</span>
                </a>

                <button
                  onClick={() => setIsAdvisorOpen(true)}
                  className="px-5 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 font-mono text-xs flex items-center gap-2 transition-all"
                >
                  <Bot className="w-4 h-4 text-cyan-400" />
                  <span>Consult Deal AI</span>
                </button>
              </div>

            </div>

            {/* Auto-playing Process Video Hero Centerpiece */}
            <div className="relative">
              <HeroProcessVideo />
            </div>

            {/* Quick Metrics Bar Beneath Video */}
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-black/60 border border-white/10 text-center font-mono text-xs">
              <div>
                <div className="text-slate-500 text-[10px]">LIFETIME INGESTION</div>
                <div className="text-white text-base sm:text-lg font-serif mt-0.5">24/7 Continuous</div>
                <div className="text-amber-400 text-[10px]">Zero Battery Maintenance</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px]">PROMPT ACCURACY</div>
                <div className="text-white text-base sm:text-lg font-serif mt-0.5">99.8% Fidelity</div>
                <div className="text-cyan-400 text-[10px]">Sub-Dermal Resonance</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px]">SANCTUARY MONUMENTS</div>
                <div className="text-white text-base sm:text-lg font-serif mt-0.5">5 Global Vaults</div>
                <div className="text-emerald-400 text-[10px]">Class IX Bedrock</div>
              </div>
              <div>
                <div className="text-slate-500 text-[10px]">LINEAGE CUSTODY</div>
                <div className="text-white text-base sm:text-lg font-serif mt-0.5">Perpetual Bond</div>
                <div className="text-amber-300 text-[10px]">Clause 41.B Guaranteed</div>
              </div>
            </div>

          </div>
        </section>

        {/* ================= 3-PHASE CONTINUUM PROCESS ================= */}
        <section id="continuum-process" className="py-24 sm:py-32 bg-[#040609] border-t border-white/10 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                The Tri-Phase Continuum
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
                From Living Telemetry to Eternal Presence
              </h2>
              <p className="text-slate-400 text-sm sm:text-base font-light">
                Our patented technology bridges natural biological existence and permanent holographic consciousness through three seamless epochs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Card 1 */}
              <div className="p-8 rounded-3xl bg-black/60 border border-white/10 space-y-5 flex flex-col justify-between group hover:border-amber-400/50 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-amber-400">PHASE 01 // VITA</span>
                    <span className="text-[10px] font-mono text-slate-500">YEARS 00 — 80</span>
                  </div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <img
                      src="/src/assets/images/qabbar_telemetry_bracelet_1793364585117.jpg"
                      alt="Q-Band on wrist"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white">The Telemetry Ingestion</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    You wear the titanium Q-Band Chronos. It continuously logs vocal inflection, moral decision heuristics, autonomic emotional response, and vocabulary rhythm. It is invisible to your daily routine, yet records your essence.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-amber-300">
                  &bull; 10,000 Hz Subdermal Sampling Rate
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl bg-black/60 border border-white/10 space-y-5 flex flex-col justify-between group hover:border-cyan-400/50 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-cyan-400">PHASE 02 // SYNTHESIS</span>
                    <span className="text-[10px] font-mono text-slate-500">BIOLOGICAL TRANSITION</span>
                  </div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <img
                      src="/src/assets/images/qabbar_neural_core_1793364654944.jpg"
                      alt="Neural Prompt Supercore"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white">The Patented Prompt Engine</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Upon verified biological cease, petabytes of accumulated lifetime telemetry are compiled into our patented Neural Mind Engine. 5-axis robotic laser mills sculpt your basalt crypt and align subterranean laser mirrors.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-cyan-300">
                  &bull; Zero Hallucination Axiomatic Prompt
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl bg-black/60 border border-white/10 space-y-5 flex flex-col justify-between group hover:border-emerald-400/50 transition-all">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-emerald-400">PHASE 03 // ETERNITY</span>
                    <span className="text-[10px] font-mono text-slate-500">500+ YEARS</span>
                  </div>
                  <div className="aspect-[16/10] rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                    <img
                      src="/src/assets/images/qabbar_hologram_sanctuary_1793364566486.jpg"
                      alt="Volumetric Hologram Silhouette"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    />
                  </div>
                  <h3 className="text-xl font-serif text-white">The Holographic Communion</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    Descendants visit the sound-proof obsidian chamber. Touch the sensor glass. Your life-size holographic silhouette materializes, speaking in your signature voice, cadence, jokes, and paternal/maternal guidance.
                  </p>
                </div>
                <div className="pt-4 border-t border-white/10 text-[11px] font-mono text-emerald-300">
                  &bull; 450M Voxels/m³ Spatial Laser Field
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= HARDWARE TEARDOWN ================= */}
        <HardwareTeardown />

        {/* ================= LIVE HOLOGRAM SIMULATOR ================= */}
        <HologramSimulator />

        {/* ================= THE LINEAGE COVENANT & MOTTO JUSTIFICATION ================= */}
        <LineageCovenantCalculator
          onOpenConsultation={(tier) => handleOpenConsultation(tier)}
        />

        {/* ================= DECOMMISSIONING & REASONABLE POLICY DEEP DIVE ================= */}
        <SanctuaryDecommissioningDeepDive
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* ================= GLOBAL SANCTUARIES SHOWCASE ================= */}
        <SanctuaryMapShowcase
          onReserveLocation={(loc) => handleOpenConsultation(undefined, loc)}
        />

        {/* ================= VISUAL ATLAS (24+ IMAGES) ================= */}
        <VisualAtlasGallery />

        {/* ================= FAQS & CORPORATE FOOTER ================= */}
        <FooterAndFAQ
          onOpenConsultation={() => handleOpenConsultation()}
          onOpenAdvisor={() => setIsAdvisorOpen(true)}
        />

      </main>

      {/* Floating Estate AI Deal Advisor Quick Action Button */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
        <button
          onClick={() => setIsAdvisorOpen(true)}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-black font-semibold text-xs font-mono uppercase tracking-wider shadow-2xl shadow-amber-950/60 hover:scale-105 transition-all"
        >
          <Bot className="w-4 h-4 text-black group-hover:animate-bounce" />
          <span>Consult Archon AI</span>
        </button>
      </div>

      {/* Lineage Consultation & Booking Modal */}
      <ContactConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultTier={selectedTierForConsultation}
        defaultLocation={selectedLocationForConsultation}
      />

      {/* Interactive Estate AI Underwriting Assistant Drawer */}
      <EstateAdvisorAI
        isOpen={isAdvisorOpen}
        onClose={() => setIsAdvisorOpen(false)}
        selectedTier={selectedTierForConsultation}
      />

    </div>
  );
}
