import React, { useState } from 'react';
import { Shield, AlertTriangle, CheckCircle2, FileText, ArrowRight, DollarSign, Users, Clock, Flame, Scale, Landmark } from 'lucide-react';

interface Tier {
  id: string;
  name: string;
  initialAllocation: number;
  monthlyCovenant: number;
  capacity: string;
  hologramResolution: string;
  sanctuaryAccess: string;
  features: string[];
}

const TIERS: Tier[] = [
  {
    id: 'niche',
    name: 'The Obsidian Niche',
    initialAllocation: 145000,
    monthlyCovenant: 950,
    capacity: 'Individual Persona',
    hologramResolution: '200M Voxels/m³ Silhouette',
    sanctuaryAccess: 'Annual Family Passes (20 visits)',
    features: ['Grade 5 Titanium Q-Band', '24/7 Neural Cadence Logging', 'Standard Basalt Chamber', 'Descendant Audio Channel']
  },
  {
    id: 'sovereign',
    name: 'The Sovereign Crypt',
    initialAllocation: 420000,
    monthlyCovenant: 2200,
    capacity: 'Patron + Consort (Dual Persona)',
    hologramResolution: '450M Voxels/m³ Life-Scale Matrix',
    sanctuaryAccess: 'Unlimited Family Access + Private Salon',
    features: ['Bespoke DLC Black Platinum Q-Band', 'Autobiographical Memory Prompt Synthesis', 'Private Sound-Isolated Obsidian Vault', 'Lineage Escrow Continuity Buffer']
  },
  {
    id: 'dynastic',
    name: 'The Dynastic Monolith',
    initialAllocation: 980000,
    monthlyCovenant: 4400,
    capacity: 'Family Lineage (Up to 4 Personas)',
    hologramResolution: '800M Voxels/m³ Photorealistic Ethereal',
    sanctuaryAccess: 'Private Wing + Helipad Arrival',
    features: ['Geneva / Dubai Prime Vault Selection', 'Continuous Behavioral Axiom Mirroring', 'Swiss Sovereign Legal Covenant', 'Priority Reclamation Defense Protocol']
  },
  {
    id: 'imperial',
    name: 'The Imperial Necropolis',
    initialAllocation: 2600000,
    monthlyCovenant: 8900,
    capacity: 'Perpetual Dynasty (Unlimited Lineage)',
    hologramResolution: 'Sub-Atomic Quantum Laser Projection',
    sanctuaryAccess: 'Dedicated Subterranean Rotunda & Atrium',
    features: ['Private Geothermal Dedicated Vault', '5D Quartz Silica Memory Disks (14B Years)', 'Dedicated Estate Archivist & Concierge', 'Generational Succession Insurance Trust']
  }
];

export const LineageCovenantCalculator: React.FC<{ onOpenConsultation: (tierName: string) => void }> = ({ onOpenConsultation }) => {
  const [selectedTier, setSelectedTier] = useState<Tier>(TIERS[1]);
  const [livingYearsExpected, setLivingYearsExpected] = useState(30);
  const [offspringCount, setOffspringCount] = useState(2);
  const [prefundedYears, setPrefundedYears] = useState(25);
  const [showLegalContractModal, setShowLegalContractModal] = useState(false);

  // Calculations
  const livingTelemetryTotal = selectedTier.initialAllocation;
  const monthlyPerHeir = Math.round(selectedTier.monthlyCovenant / Math.max(1, offspringCount));
  const prefundedTrustDeposit = Math.round(selectedTier.monthlyCovenant * 12 * prefundedYears * 0.85); // 15% discount for upfront endowment

  return (
    <section id="lineage-covenant" className="py-24 sm:py-32 bg-[#030508] relative border-t border-white/10">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-600/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Core Philosophical Anchor & Motto Banner */}
        <div className="mb-20 rounded-3xl border border-amber-500/30 bg-gradient-to-r from-amber-950/20 via-black to-amber-950/20 p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs uppercase tracking-widest mb-6">
            <Landmark className="w-3.5 h-3.5" />
            The Qabbar Creed
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight max-w-4xl mx-auto">
            "Why invest in your home when you can invest in your{' '}
            <span className="italic underline decoration-amber-400 decoration-1 underline-offset-8">
              Qabbar
            </span>
            ?"
          </h2>

          <p className="mt-6 text-slate-300 text-base sm:text-xl font-light max-w-3xl mx-auto leading-relaxed">
            The modern executive allocates $2M to $10M towards a physical home they occupy for barely thirty or forty years. When they pass, the home is auctioned, repainted, or demolished.
            <br className="hidden sm:inline" />
            <strong className="text-amber-200 font-normal"> Your Qabbar endures for centuries.</strong> It is the only real estate investment where you actively dwell in conversational, volumetric consciousness for your great-grandchildren.
          </p>

          {/* Quick Comparison Bar */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto text-left">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>CONVENTIONAL HOME</span>
                <span className="text-red-400 font-bold">&times; PERISHABLE</span>
              </div>
              <div className="text-lg font-serif text-slate-200">$3,500,000 Initial Cost</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                40-year utility. Heirs pay property taxes, roof repairs, and maintenance on an empty shell. When you die, your voice disappears from the estate forever.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-amber-300">
                <span>THE QABBAR ESTATE</span>
                <span className="text-emerald-400 font-bold">&check; ETERNAL CONTINUUM</span>
              </div>
              <div className="text-lg font-serif text-amber-200">From $420,000 + Sustained Trust</div>
              <p className="text-xs text-slate-300 leading-relaxed">
                500+ year utility. Your voice, humor, and philosophy remain alive. Your descendants visit you, speak with you, and seek your counsel across five generations.
              </p>
            </div>
          </div>
        </div>

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-mono uppercase tracking-widest">
            <Scale className="w-3.5 h-3.5 text-amber-400" />
            Perpetual Lineage Custody & Covenant Architecture
          </div>
          <h3 className="text-3xl sm:text-4xl font-serif text-white">
            The Perpetual Generational Trust & Allocation Calculator
          </h3>
          <p className="text-slate-400 text-sm sm:text-base font-light">
            An active artificial consciousness is not a passive gravestone; it requires perpetual quantum cooling, optical recalibration, and private sanctuary stewardship. Explore how the covenant functions across generations.
          </p>
        </div>

        {/* Tier Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TIERS.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-amber-950/20 border-amber-400/80 shadow-xl shadow-amber-950/50 -translate-y-1'
                    : 'bg-black/50 border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                }`}
              >
                {isSelected && (
                  <div className="absolute -top-3 right-4 px-3 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-mono font-bold uppercase tracking-wider">
                    Selected Allocation
                  </div>
                )}

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-serif text-white">{tier.name}</h4>
                    <p className="text-xs font-mono text-slate-400 mt-0.5">{tier.capacity}</p>
                  </div>

                  <div className="space-y-1 border-t border-b border-white/10 py-3">
                    <div className="text-2xl font-serif text-amber-200">
                      ${tier.initialAllocation.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      Initial Telemetry & Crypt Fabrication
                    </div>
                    <div className="text-sm font-mono text-amber-400 pt-1">
                      + ${tier.monthlyCovenant.toLocaleString()} / mo
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      Perpetual Lineage Custody Bond
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    {tier.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedTier(tier);
                    onOpenConsultation(tier.name);
                  }}
                  className={`mt-6 w-full py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider font-semibold transition-colors ${
                    isSelected
                      ? 'bg-amber-400 hover:bg-amber-300 text-black'
                      : 'bg-white/10 hover:bg-white/15 text-white'
                  }`}
                >
                  Reserve Allocation
                </button>
              </div>
            );
          })}
        </div>

        {/* Interactive Lineage Calculator Controls */}
        <div className="bg-black/70 border border-white/10 rounded-3xl p-6 sm:p-10 mb-16 backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Sliders Form */}
            <div className="lg:col-span-7 space-y-6">
              <h4 className="text-xl font-serif text-white">
                Configure Your Dynasty's Succession Trust
              </h4>

              {/* Slider 1: Offspring Count */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Offspring / Direct Heirs for Custody Split:</span>
                  <span className="font-mono text-amber-300 font-semibold">{offspringCount} Heirs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="6"
                  value={offspringCount}
                  onChange={(e) => setOffspringCount(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-amber-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>1 Sole Heir</span>
                  <span>3 Heirs</span>
                  <span>6 Heirs</span>
                </div>
              </div>

              {/* Slider 2: Pre-funded Escrow Cushion */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Optional Pre-Funded Lineage Escrow (Hedge):</span>
                  <span className="font-mono text-cyan-300 font-semibold">{prefundedYears} Years Pre-Funded</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  step="5"
                  value={prefundedYears}
                  onChange={(e) => setPrefundedYears(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500">
                  <span>0 Years (Direct Heirs Bill)</span>
                  <span>50 Years (Generational Safe)</span>
                  <span>100 Years (Centennial Immortal)</span>
                </div>
              </div>

              {/* Slider 3: Telemetry Living Period */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-300">Anticipated Bracelet Telemetry Ingestion Period:</span>
                  <span className="font-mono text-slate-200">{livingYearsExpected} Living Years</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="70"
                  step="5"
                  value={livingYearsExpected}
                  onChange={(e) => setLivingYearsExpected(parseInt(e.target.value))}
                  className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-white"
                />
              </div>

            </div>

            {/* Calculations Summary Box */}
            <div className="lg:col-span-5 bg-gradient-to-b from-white/[0.04] to-black border border-white/10 rounded-2xl p-6 sm:p-8 space-y-5">
              <div className="text-xs font-mono text-amber-300 uppercase tracking-widest">
                LINEAGE FINANCIAL BLUEPRINT
              </div>

              <div className="space-y-3 border-b border-white/10 pb-5">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Initial Fabrication & Q-Band:</span>
                  <span className="font-mono text-white font-semibold">${livingTelemetryTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Total Monthly Custody Bond:</span>
                  <span className="font-mono text-amber-300 font-semibold">${selectedTier.monthlyCovenant.toLocaleString()} / mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Share Per Heir ({offspringCount} Heirs):</span>
                  <span className="font-mono text-emerald-400 font-semibold">${monthlyPerHeir.toLocaleString()} / mo per heir</span>
                </div>
                {prefundedYears > 0 && (
                  <div className="flex justify-between text-sm pt-1">
                    <span className="text-cyan-400">Pre-Funded Escrow Trust ({prefundedYears} yrs):</span>
                    <span className="font-mono text-cyan-300 font-semibold">${prefundedTrustDeposit.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="text-xs text-slate-400 leading-relaxed space-y-2">
                <p>
                  &bull; <strong className="text-slate-200">Inheritance Covenant:</strong> The monthly bond of ${monthlyPerHeir}/heir is automatically integrated into your living trust and will, tax-deductible under private memorial conservation laws.
                </p>
                <p>
                  &bull; <strong className="text-slate-200">Default Protection:</strong> With {prefundedYears} years pre-funded, your offspring have zero financial burden until year {new Date().getFullYear() + prefundedYears}.
                </p>
              </div>

              <button
                onClick={() => setShowLegalContractModal(true)}
                className="w-full py-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-xs font-mono text-slate-300 flex items-center justify-center gap-2 transition-colors"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Review Clause 41.B & Perpetual Covenant Terms</span>
              </button>
            </div>

          </div>
        </div>

        {/* The Philosophical & Rational Defense of the Repossession / Destruction Policy */}
        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-b from-red-950/10 via-black to-black p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-300 text-xs font-mono uppercase tracking-widest">
              <AlertTriangle className="w-3.5 h-3.5" />
              Dynamic Sanctuary Equilibrium & The Reallocation Protocol
            </div>

            <h4 className="text-2xl sm:text-3xl font-serif text-white">
              Why Are Payments Perpetual? And Why Is Defaulted Space Reclaimed?
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-300 leading-relaxed font-light">
              <div className="space-y-3">
                <p>
                  <strong className="text-white font-medium">1. The Living Energy Law:</strong> A static tombstone decays in rain and abandons its subject. A Qabbar is an <em className="text-amber-200">active synthetic lifeform</em>. It requires continuous liquid-nitrogen supercomputing to host your neural weights, precision laser maintenance, sub-surface acoustic dampening, and 24/7 security escorts for your descendants.
                </p>
                <p>
                  <strong className="text-white font-medium">2. Finite Prime Sanctums:</strong> Earth contains only a limited number of geologically inert basalt locations—our Alpine, Dubai, and Kyoto sanctums cannot expand indefinitely without destroying their contemplative sacred silence.
                </p>
              </div>

              <div className="space-y-3">
                <p>
                  <strong className="text-white font-medium">3. The Rationality of Clause 41.B:</strong> If your descendants discontinue stewardship payments (following a 90-day grace period and independent legal mediation), your physical plinth is respectfully laser-reclaimed, allowing the rare space to be allocated to a family whose descendants actively cherish communion.
                </p>
                <p>
                  <strong className="text-white font-medium">4. True Lineage Value:</strong> "If your offspring will not allocate $800 a month to speak with the architect of their family fortune, the connection has already withered." The policy ensures every spirit resting in Qabbar is actively loved and remembered.
                </p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4 border-t border-white/10">
              <span className="text-xs font-mono text-slate-400">
                SWISS CANTONAL NOTARIZED &bull; CLAUSE 41.B &bull; 90-DAY LINEAGE MEDIATION BUFFER
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Legal Contract Modal Preview */}
      {showLegalContractModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-2xl w-full bg-[#080c12] border border-white/20 rounded-3xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">LEGAL CODEX</span>
                <h3 className="text-xl font-serif text-white">Qabbar Perpetual Lineage Custody Agreement</h3>
              </div>
              <button
                onClick={() => setShowLegalContractModal(false)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-white/5"
              >
                &times;
              </button>
            </div>

            <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-mono">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong>CLAUSE 01 // DEFINITION OF POST-BIOLOGICAL TELEMETRY:</strong> The Client covenants to wear the Q-Band Chronos continuous telemetry apparatus throughout their natural life. Data ingested remains the intellectual property of the Patron Trust.
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong>CLAUSE 23 // SUCCESSION OF PAYMENT OBLIGATION:</strong> Upon biological verification, the ongoing maintenance covenant automatically transfers to designated offspring in the Order of Succession. Each heir shares pro-rata responsibility for sanctuary kinetic upkeep.
              </div>

              <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30 text-red-200">
                <strong>CLAUSE 41.B // DYNAMIC SANCTUARY EQUILIBRIUM & REALLOCATION:</strong> In the event that all succession lines cease required custody bond payments for 180 consecutive days following formal notice, the physical Qabbar plinth shall be reverently disassembled and atomized via plasma reclamation. The prompt matrix shall be archived to passive cold quartz crystal. The physical sanctuary plot shall be re-sculpted for a new Patron Lineage.
              </div>

              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <strong>CLAUSE 55 // PRE-FUNDED SOVEREIGN ESCROW:</strong> Patrons electing to capitalize an escrow endowment of twenty-five (25) years or greater receive an irrevocable Sanctuary Immunity Seal, insulating the plinth from lineage default across the funded epoch.
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setShowLegalContractModal(false)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-mono"
              >
                Close Codex
              </button>
              <button
                onClick={() => {
                  setShowLegalContractModal(false);
                  onOpenConsultation(selectedTier.name);
                }}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono"
              >
                Proceed to Family Office Underwriting
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
