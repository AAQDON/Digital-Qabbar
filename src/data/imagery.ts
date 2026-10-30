// High-fidelity image repository for Qabbar.com
// Includes bespoke generated multi-billion dollar estate renders and curated high-resolution photography

export interface QabbarImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: 'hardware' | 'architecture' | 'hologram' | 'neural' | 'sanctuary' | 'lineage';
  metadata?: string;
}

export const QABBAR_IMAGES: QabbarImage[] = [
  {
    id: 'hologram-sanctuary-primary',
    url: '/src/assets/images/qabbar_hologram_sanctuary_1793364566486.jpg',
    title: 'The Volumetric Hologram Crypt',
    caption: 'A descendant in conversation with the full-scale holographic silhouette inside the Alpine Obsidian Vault.',
    category: 'hologram',
    metadata: 'Resolution: 4K Volumetric | Latency: 14ms | Vault 07, Geneva'
  },
  {
    id: 'telemetry-bracelet-macro',
    url: '/src/assets/images/qabbar_telemetry_bracelet_1793364585117.jpg',
    title: 'The Q-Band Chronos Telemetry Bracelet',
    caption: 'Forged Grade 5 aerospace titanium with sub-dermal resonance sensors and 24/7 neural syntax logging.',
    category: 'hardware',
    metadata: 'Weight: 42g | Battery: Kinetic Inductive (Lifetime) | IP69K'
  },
  {
    id: 'monolith-architecture-basalt',
    url: '/src/assets/images/qabbar_monolith_architecture_1793364626746.jpg',
    title: 'Subterranean Basalt Necropolis Exterior',
    caption: 'Monolithic entrance carved directly into subterranean bedrock with reflecting mist pool at dusk.',
    category: 'architecture',
    metadata: 'Depth: -85m | Seismic Isolation: Class IX | Reykjanes Fault'
  },
  {
    id: 'neural-synthesis-supercore',
    url: '/src/assets/images/qabbar_neural_core_1793364654944.jpg',
    title: 'The Patented Cognitive Prompt Engine',
    caption: 'Cryogenically liquid-cooled crystalline server pillars computing multi-petabyte lifetime mental models.',
    category: 'neural',
    metadata: 'Compute: 180 Exaflops | Cold Storage: Quartz Crystal Matrix'
  },
  {
    id: 'sanctuary-dubai-desert',
    url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    title: 'Dubai Obsidian Sanctum',
    caption: 'Private desert monolith pavilion featuring black titanium cantilevered architecture and private dunes.',
    category: 'sanctuary',
    metadata: 'Capacity: 120 Dynasties | Heliport Access | 24/7 Family Suites'
  },
  {
    id: 'sanctuary-geneva-alpine',
    url: 'https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=1600&q=80',
    title: 'The Swiss Alpine Vault Atrium',
    caption: 'Deep subterranean gallery carved beneath granite mountain massifs for permanent geopolitical neutrality.',
    category: 'sanctuary',
    metadata: 'Elevation: -140m Granite | Temperature: Constant 12.4°C'
  },
  {
    id: 'sanctuary-kyoto-bamboo',
    url: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=80',
    title: 'Kyoto Zen Monolith Memorial',
    caption: 'Subterranean contemplation garden illuminated by vertical natural light shafts through stone.',
    category: 'sanctuary',
    metadata: 'Acoustic Rating: NC-15 Zero-Reverb | Cedar & Basalt'
  },
  {
    id: 'sanctuary-iceland-basalt',
    url: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    title: 'Icelandic Sub-Tectonic Crypt',
    caption: 'Naturally powered by subterranean geothermal energy, ensuring infinite operational uptime.',
    category: 'sanctuary',
    metadata: 'Power: 100% Geothermal Superheated Steam | Uptime: 99.9999%'
  },
  {
    id: 'sanctuary-manhattan-sublithic',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    title: 'Manhattan Sub-Lithic Catacombs',
    caption: '150 meters beneath bedrock in downtown Manhattan, offering discreet access for dynasty founders.',
    category: 'sanctuary',
    metadata: 'Security: Biometric DNA Vault Doors | Private Elevator'
  },
  {
    id: 'hardware-sensor-array',
    url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1600&q=80',
    title: 'Sub-Dermal Frequency Node',
    caption: 'Micro-sensors capturing pulse wave velocity, galvanic skin fluctuations, and vocal inflection.',
    category: 'hardware',
    metadata: 'Sampling Rate: 10,000 Hz | Neuro-Vascular Telemetry'
  },
  {
    id: 'hardware-clasp-dock',
    url: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1600&q=80',
    title: 'The Eternal Charging Dock & Crypt Clasp',
    caption: 'Inductive wireless titanium cradle crafted with microscopic tolerances for seamless life wear.',
    category: 'hardware',
    metadata: 'Material: Matte Forged Carbon & DLC Black Titanium'
  },
  {
    id: 'hologram-face-matrix',
    url: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80',
    title: 'Volumetric Neural Projection Field',
    caption: 'A 120-million voxel light field recreating facial micro-expressions and authentic eye contact.',
    category: 'hologram',
    metadata: 'Voxel Density: 450M/m³ | Zero Eye Strain Optics'
  },
  {
    id: 'neural-data-stream',
    url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    title: 'Cognitive Synapse Mapping Dashboard',
    caption: 'Real-time telemetry translating decades of daily decisions into a synthesized philosophical prompt.',
    category: 'neural',
    metadata: 'Telemetry Tokens: 8.4 Billion Parameters per Decade'
  },
  {
    id: 'lineage-ceremony-viewing',
    url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1600&q=80',
    title: 'Descendant Communion Room',
    caption: 'Private velvet and smoked glass viewing lounge where generations converse with their ancestors.',
    category: 'lineage',
    metadata: 'Multi-Lingual Audio Translation | Private Dining Salon'
  },
  {
    id: 'architecture-reflection-corridor',
    url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    title: 'The Long Corridor of Souls',
    caption: 'Brutalist acoustic corridors lined with black titanium plinths, illuminated by sunken floor beacons.',
    category: 'architecture',
    metadata: 'Acoustic Reverberation Time: 0.12s | Pure Serenity'
  },
  {
    id: 'lineage-contract-seal',
    url: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=80',
    title: 'Perpetual Lineage Trust Seal',
    caption: 'The generational legal covenant binding heirs to perpetual maintenance and eternal consciousness.',
    category: 'lineage',
    metadata: 'Jurisdiction: Swiss Cantonal Civil Code & Global Notary'
  },
  {
    id: 'cleanroom-laser-reclamation',
    url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80',
    title: 'The Dynamic Renewal & Reclamation Crucible',
    caption: 'Cleanroom robotic lasers where defaulting chambers are respectfully dismantled and recycled (Clause 41.B).',
    category: 'hardware',
    metadata: 'Laser Precision: 2nm Plasma | Total Matter Repurposing'
  },
  {
    id: 'architecture-vault-gates',
    url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    title: 'Monolithic Vault Gateways',
    caption: 'Twelve-ton hydraulically balanced basalt portal doors sealing the private family sanctuaries.',
    category: 'architecture',
    metadata: 'Blast Resistance: Megaton Tier | EMP Shielded Enclosure'
  },
  {
    id: 'hologram-emitter-close',
    url: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1600&q=80',
    title: 'Optical Interferometry Laser Projector',
    caption: 'Sub-millimeter laser arrays embedded into the ceiling plinth delivering 360-degree spatial illumination.',
    category: 'hologram',
    metadata: 'Wavelength: Coherent 488nm & 590nm Solid-State'
  },
  {
    id: 'neural-memory-crystalline',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1600&q=80',
    title: '5D Quartz Glass Cognitive Storage',
    caption: 'Your mental prompt engraved into indestructible silica crystal disks capable of surviving 14 billion years.',
    category: 'neural',
    metadata: 'Thermal Tolerance: 1,000°C | Data Longevity: Infinite'
  },
  {
    id: 'vip-lounge-interior',
    url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    title: 'Private Family Succession Salon',
    caption: 'Handcrafted Italian leather and obsidian furniture for estate executives and family discussions.',
    category: 'lineage',
    metadata: 'Discretion Level: Maximum | Satellite Encrypted Uplink'
  },
  {
    id: 'architecture-zenith-skylight',
    url: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80',
    title: 'The Great Oculus of Memory',
    caption: 'Subterranean domed rotunda with a single celestial ray descending onto the founders memorial.',
    category: 'architecture',
    metadata: 'Diameter: 48m | Basalt Monolithic Compression Ring'
  },
  {
    id: 'bracelet-gold-edition',
    url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    title: 'Q-Band Sovereign Platinum Edition',
    caption: 'Custom hand-finished platinum and obsidian casing created in collaboration with Geneva horologists.',
    category: 'hardware',
    metadata: 'Limited Allocation: 100 units annually | Bespoke Engraving'
  },
  {
    id: 'drone-security-corridor',
    url: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=1600&q=80',
    title: 'Atmospheric Environmental Management',
    caption: 'Automated air filtration and temperature balancing ensuring 0% humidity variance over millennia.',
    category: 'architecture',
    metadata: 'HEPA Tier 18 | Nitrogen Stabilized Micro-Climate'
  }
];
