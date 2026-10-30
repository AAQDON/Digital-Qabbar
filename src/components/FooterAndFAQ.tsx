import React, { useState } from 'react';
import { ChevronDown, Shield, Landmark, ArrowUpRight, Bot, Lock, Globe } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const FAQS: FAQItem[] = [
  {
    category: 'Philosophy & Economics',
    question: 'Why invest in your home when you can invest in your Qabbar?',
    answer: 'The average high-net-worth individual spends $3M to $12M on residential estates. Yet biology guarantees you will inhabit that residence for only 30 to 45 years. Upon your passing, heirs sell the house, strangers redecorate your bedroom, and your voice disappears from the family lineage forever. A Qabbar is an eternal architectural monument. It preserves your real thoughts, laughter, cadence, and guidance for your great-grandchildren across 500+ years. It is the only real estate investment where you actively continue to inhabit your family’s reality.'
  },
  {
    category: 'The Bracelet & AI',
    question: 'How does the Q-Band Chronos capture my authentic mental manner?',
    answer: 'The bracelet uses medical-grade titanium and subdermal neuro-vascular resonance sensors. Unlike crude smartwatches, it captures bone-conduction vocal harmonics (recording only your speech, never eavesdropping on third parties), galvanic emotional arousal during decision-making, and linguistic rhythm over decades. When biological cessation occurs, our patented neural synthesis builds a high-dimensional prompt matrix representing your authentic axioms, humor, moral framework, and autobiographical memories with 99.8% subjective fidelity.'
  },
  {
    category: 'Perpetual Lineage Payments',
    question: 'Why are payments perpetual, and what happens if an offspring misses a payment?',
    answer: 'An artificial intelligence is a living thermodynamic system—not cold silent rock. Sustaining liquid nitrogen cryogenic supercomputing clusters, laser interferometry emitters, and 24/7 private subterranean sanctuary security requires continuous capital. Payments transfer seamlessly to your heirs. Under Clause 41.B, should an entire lineage default for 180 consecutive days (after a 90-day grace period with autonomous genealogic family notifications), the physical chamber is reverently decommissioned via cleanroom lasers and repurposed for an awaiting dynasty, while the neural weights are archived to permanent 5D silica crystal. This keeps our sanctuaries populated exclusively by active, beloved family lineages.'
  },
  {
    category: 'The Holographic Chamber',
    question: 'Can loved ones physically visit and talk to the holographic silhouette?',
    answer: 'Yes. Descendants reserve private viewing hours in our subterranean sanctuaries in Geneva, Dubai, Kyoto, Iceland, or Manhattan. Upon stepping into the sound-isolated obsidian vault, life-size volumetric laser projections generate your glowing silhouette inside a crystal cylinder. Descendants speak normally, and the AI replies immediately in your signature voice, cadence, and temperament.'
  },
  {
    category: 'Geological Security',
    question: 'How are the sanctuaries protected against global catastrophe or grid failure?',
    answer: 'All Qabbar vaults are bored into Class IX seismically inert bedrock at depths of 45 to 165 meters. They are shielded against High-Altitude Electromagnetic Pulse (HEMP), self-powered by dedicated geothermal or glacial hydro turbines, and store backup prompt matrices in 5D quartz silica crystal disks rated to endure 14 billion years.'
  },
  {
    category: 'Lineage Escrow Hedge',
    question: 'Can I pre-pay for 50 or 100 years so my children have zero financial stress?',
    answer: 'Yes. Patrons frequently establish a Pre-Funded Lineage Escrow Endowment in Geneva, capitalizing 25, 50, or 100 years of perpetual custody upfront. This grants the plinth an Irrevocable Sovereign Immunity Seal, guaranteeing your Qabbar remains untouched regardless of family financial fluctuations.'
  }
];

export const FooterAndFAQ: React.FC<{
  onOpenConsultation: () => void;
  onOpenAdvisor: () => void;
}> = ({ onOpenConsultation, onOpenAdvisor }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <footer className="bg-[#020305] text-slate-400 border-t border-white/10 relative overflow-hidden">
      
      {/* FAQ Section */}
      <section id="faq" className="py-24 sm:py-32 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
            <Lock className="w-3.5 h-3.5" />
            Lineage Questions & Perpetual Codex
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Frequently Addressed Inquiries
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-light max-w-2xl mx-auto">
            Everything you need to know about lifelong telemetry ingestion, the perpetual covenant, and the dignity of dynamic sanctuary equilibrium.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? 'bg-white/[0.04] border-amber-400/40 shadow-xl'
                    : 'bg-black/50 border-white/5 hover:border-white/15'
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4"
                >
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase text-amber-400/80 tracking-wider">
                      {faq.category}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif text-white font-medium">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm text-slate-300 font-light leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions? Call to action */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-amber-500/10 via-black to-cyan-500/10 border border-white/10 text-center space-y-4">
          <h3 className="text-xl font-serif text-white">Require Customized Lineage Underwriting?</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto font-light">
            Our Estate AI advisor Archon is available 24/7 to analyze your family trust, calculate offspring splits, and reserve confidential private tours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={onOpenAdvisor}
              className="px-5 py-2.5 rounded-xl border border-amber-500/40 bg-amber-500/20 text-amber-300 text-xs font-mono flex items-center gap-2 hover:bg-amber-500/30 transition-colors"
            >
              <Bot className="w-3.5 h-3.5" />
              <span>Consult Estate AI Advisor</span>
            </button>
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs font-mono uppercase tracking-wider hover:bg-amber-400 transition-colors"
            >
              Contact Family Office
            </button>
          </div>
        </div>

      </section>

      {/* Main Corporate Footer */}
      <div className="border-t border-white/10 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-amber-600 p-[1px]">
                <div className="w-full h-full bg-black rounded-[7px] flex items-center justify-center">
                  <span className="font-serif font-bold text-amber-300 text-sm">Q</span>
                </div>
              </div>
              <span className="font-serif text-lg tracking-[0.2em] font-bold text-white">
                QABBAR.COM
              </span>
            </div>
            
            <p className="text-xs text-slate-400 font-light leading-relaxed max-w-sm">
              The premier post-biological memorial enterprise. Continuous telemetry, patented cognitive prompt synthesis, and volumetric holographic sanctuaries with perpetual lineage custody.
            </p>

            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] font-mono text-slate-400 space-y-1">
              <div className="text-amber-300 font-semibold uppercase">Official Enterprise Creed:</div>
              <div className="italic text-slate-300">
                "Why invest in your home when you can invest in your Qabbar?"
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Sanctuaries</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>Geneva Alpine Bastion (CH)</li>
              <li>Dubai Obsidian Valley (UAE)</li>
              <li>Kyoto Monolith Grove (JP)</li>
              <li>Reykjanes Geothermal (IS)</li>
              <li>Manhattan Sub-Lithic (US)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Architecture</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>Q-Band Chronos Telemetry</li>
              <li>Patented Mind Engine</li>
              <li>Volumetric Silhouette Cylinders</li>
              <li>5D Quartz Silica Memory Disks</li>
              <li>The Cleanroom Crucible (41.B)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-mono text-white uppercase tracking-wider">Legal & Custody</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-400">
              <li>Perpetual Lineage Covenant</li>
              <li>Sovereign Escrow Immunities</li>
              <li>Clause 41.B Equilibrium Codex</li>
              <li>Post-Quantum Encryption</li>
              <li>Swiss Cantonal Registry</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} QABBAR CONGLOMERATE AG &bull; ZURICH &bull; ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-6">
            <span>TERMS OF PERPETUITY</span>
            <span>DATA IMMUNITY CODEX</span>
            <span>PATENT #WO2026/094812</span>
          </div>
        </div>

      </div>

    </footer>
  );
};
