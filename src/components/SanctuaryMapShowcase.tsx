import React, { useState } from 'react';
import { MapPin, Shield, Compass, Mountain, Thermometer, Wind, Check, ExternalLink } from 'lucide-react';

interface SanctuaryLocation {
  id: string;
  name: string;
  city: string;
  country: string;
  geology: string;
  depth: string;
  powerSource: string;
  capacityRemaining: string;
  image: string;
  description: string;
  features: string[];
}

const SANCTUARIES: SanctuaryLocation[] = [
  {
    id: 'geneva',
    name: 'The Alpine Bastion Vault',
    city: 'Geneva / Valais',
    country: 'Switzerland',
    geology: 'Subterranean Crystalline Granite Massif',
    depth: '-140 Meters Sub-Surface',
    powerSource: 'Dedicated Hydroelectric Glacial Stream',
    capacityRemaining: '18 Dynastic Crypts Available',
    image: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=80',
    description: 'Carved deep inside the Swiss Alps, offering absolute perpetual geopolitical neutrality, private alpine airstrip access, and sound-proofed family reflection vaults.',
    features: ['Swiss Cantonal Perpetual Land Title', 'Permanent 12.2°C Ambient Climate', 'Class X Seismic Isolation Bearings', 'Family Wine & Memory Cellar']
  },
  {
    id: 'dubai',
    name: 'The Obsidian Desert Sanctum',
    city: 'Dubai',
    country: 'United Arab Emirates',
    geology: 'Reinforced Titanium Monolith over Red Dunes',
    depth: '-45 Meters Sub-Sand Vault',
    powerSource: 'Bespoke Solar-Kinetic Array & Grid Backup',
    capacityRemaining: '24 Dynastic Crypts Available',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    description: 'A masterpiece of contemporary black granite and cantilevered titanium floating above the desert horizon. Features private helipad, majlis reception suites, and gold-leaf acoustic chambers.',
    features: ['Private Helipad & Dune Funicular', 'Royal Majlis Descendant Suites', 'Direct Air Filtration Scrubbers', 'Bespoke Holographic Family Atrium']
  },
  {
    id: 'kyoto',
    name: 'The Kyoto Monolith Grove',
    city: 'Kyoto / Arashiyama',
    country: 'Japan',
    geology: 'Volcanic Basalt with Subterranean Cedar Wells',
    depth: '-60 Meters Deep Earth',
    powerSource: 'Underground Aquifer Geothermal Turbine',
    capacityRemaining: '12 Dynastic Crypts Available',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    description: 'Designed in dialogue with Japanese minimalist master architects. Subterranean stone chambers embrace silence, natural light shafts, and stone reflection pools for intimate familial dialogue.',
    features: ['NC-10 Zero-Acoustic Reverb Chamber', 'Living Bamboo Lightwells', 'Karesansui Zen Contemplation Hall', 'Autonomous Tea & Incense Attendants']
  },
  {
    id: 'iceland',
    name: 'The Reykjanes Tectonic Vault',
    city: 'Reykjanes Peninsula',
    country: 'Iceland',
    geology: 'Sub-Basalt Bedrock between Continental Plates',
    depth: '-110 Meters Bedrock',
    powerSource: '100% Superheated Magmatic Geothermal',
    capacityRemaining: '31 Dynastic Crypts Available',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    description: 'Tapping into infinite geothermal steam energy, this vault operates with 100% off-grid autonomy for simulated millennial uptime, completely isolated from global disruptions.',
    features: ['Infinite Geothermal Power Autonomy', 'Sub-Basalt Electromagnetic Shielding', 'Liquid Nitrogen Cryo-Cluster Adjacent', 'Private Northern Lights Foyer']
  },
  {
    id: 'manhattan',
    name: 'The Manhattan Sub-Lithic Crypts',
    city: 'New York City',
    country: 'United States',
    geology: 'Manhattan Schist Bedrock Depth',
    depth: '-165 Meters Below Wall Street',
    powerSource: 'Dual Redundant Substation & Flywheel Kinetic',
    capacityRemaining: '7 Dynastic Crypts Available',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    description: 'Constructed beneath bedrock in downtown Manhattan. Allows lineage executives and descendants to visit their ancestors during an afternoon break between board meetings.',
    features: ['Direct Private Bank Vault Tunnel Access', 'Biometric DNA Recognition Gateways', 'Executive Holographic Boardroom Suites', 'Ultra-High-Speed Fiber Prompt Sync']
  }
];

export const SanctuaryMapShowcase: React.FC<{ onReserveLocation: (locName: string) => void }> = ({ onReserveLocation }) => {
  const [selectedLoc, setSelectedLoc] = useState<SanctuaryLocation>(SANCTUARIES[0]);

  return (
    <section id="sanctuaries" className="py-24 sm:py-32 bg-[#020407] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            Global Necropolis Network
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
            Sanctuaries of the Perpetual Order
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Geologically inert, architecturally monumental subterranean locations chosen for millennial stability and sublime contemplative grandeur.
          </p>
        </div>

        {/* Location Selector Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none justify-start lg:justify-center">
          {SANCTUARIES.map((loc) => {
            const isSelected = selectedLoc.id === loc.id;
            return (
              <button
                key={loc.id}
                onClick={() => setSelectedLoc(loc)}
                className={`px-5 py-3 rounded-2xl border text-left shrink-0 transition-all ${
                  isSelected
                    ? 'bg-amber-400 text-black font-semibold shadow-lg shadow-amber-950/40 border-amber-300'
                    : 'bg-black/60 border-white/10 text-slate-400 hover:text-white hover:border-white/20'
                }`}
              >
                <div className="text-xs font-mono uppercase tracking-wider">{loc.city}</div>
                <div className="text-sm font-serif">{loc.name}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Location Feature Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-black/70 border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl">
          
          {/* Image Column */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 min-h-[360px] sm:min-h-[460px]">
            <img
              src={selectedLoc.image}
              alt={selectedLoc.name}
              className="w-full h-full object-cover filter brightness-[0.85] contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-xs font-mono text-amber-300 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                {selectedLoc.city}, {selectedLoc.country}
              </span>
              <span className="px-3 py-1 rounded-full bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 text-xs font-mono text-emerald-400">
                {selectedLoc.capacityRemaining}
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10">
              <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
                <div>
                  <div className="text-slate-500 text-[10px]">DEPTH</div>
                  <div className="text-white font-medium">{selectedLoc.depth}</div>
                </div>
                <div className="border-x border-white/10">
                  <div className="text-slate-500 text-[10px]">POWER SOURCE</div>
                  <div className="text-cyan-300 font-medium truncate px-1">{selectedLoc.powerSource.split(' ')[0]}</div>
                </div>
                <div>
                  <div className="text-slate-500 text-[10px]">GEOLOGY</div>
                  <div className="text-amber-300 font-medium truncate px-1">{selectedLoc.geology.split(' ')[0]}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                  SANCTUARY DOSSIER
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif text-white mt-1">
                  {selectedLoc.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {selectedLoc.geology}
                </p>
              </div>

              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {selectedLoc.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-white/10">
                <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                  Sanctuary Inclusions:
                </span>
                <ul className="space-y-2">
                  {selectedLoc.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onReserveLocation(`${selectedLoc.name} (${selectedLoc.city})`)}
                className="flex-1 py-3 px-5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors text-center"
              >
                Inquire Plot Allocation
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
