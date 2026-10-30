import React, { useState } from 'react';
import { QABBAR_IMAGES, QabbarImage } from '../data/imagery';
import { Eye, Maximize2, X, Filter, Compass, Sparkles, Shield, Cpu } from 'lucide-react';

export const VisualAtlasGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeImageModal, setActiveImageModal] = useState<QabbarImage | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Archive', count: QABBAR_IMAGES.length },
    { id: 'hardware', label: 'Q-Band Telemetry & Clasp', count: QABBAR_IMAGES.filter(i => i.category === 'hardware').length },
    { id: 'architecture', label: 'Monoliths & Obsidian Halls', count: QABBAR_IMAGES.filter(i => i.category === 'architecture').length },
    { id: 'hologram', label: 'Volumetric Silhouette Chambers', count: QABBAR_IMAGES.filter(i => i.category === 'hologram').length },
    { id: 'neural', label: 'Quantum Prompt Supercores', count: QABBAR_IMAGES.filter(i => i.category === 'neural').length },
    { id: 'sanctuary', label: 'Global Sanctuary Locations', count: QABBAR_IMAGES.filter(i => i.category === 'sanctuary').length },
    { id: 'lineage', label: 'Lineage Salons & Covenants', count: QABBAR_IMAGES.filter(i => i.category === 'lineage').length },
  ];

  const filteredImages = activeCategory === 'all'
    ? QABBAR_IMAGES
    : QABBAR_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="visual-atlas" className="py-24 sm:py-32 bg-[#040608] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-mono uppercase tracking-widest">
              <Eye className="w-3.5 h-3.5 text-amber-400" />
              Visual Atlas & Photographic Archive &bull; {QABBAR_IMAGES.length} Documented Plates
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif text-white tracking-tight">
              The Architecture of Permanence
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-light">
              Explore the physical reality of Qabbar: from micro-machined titanium telemetry bracelets to subterranean basalt necropolises, cryo-cooled prompt synthesis supercores, and intimate holographic conversation salons.
            </p>
          </div>

          <div className="font-mono text-xs text-slate-400 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl self-start md:self-auto">
            CATALOGUE: 2026 ARCHIVAL RELEASE &bull; RESTRICTED DISTRIBUTION
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-10 border-b border-white/10 pb-6">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? 'bg-amber-400 text-black font-semibold shadow-md shadow-amber-950/40'
                    : 'bg-black/60 border border-white/10 text-slate-300 hover:border-white/25 hover:text-white'
                }`}
              >
                <span>{cat.label}</span>
                <span className={`px-1.5 py-0.5 rounded text-[10px] ${isActive ? 'bg-black/20 text-black' : 'bg-white/10 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Dense Masonry-Style Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((img, idx) => (
            <div
              key={img.id}
              onClick={() => setActiveImageModal(img)}
              className="group relative rounded-2xl overflow-hidden border border-white/10 bg-black/60 cursor-pointer transition-all duration-300 hover:border-amber-400/60 hover:-translate-y-1 shadow-lg hover:shadow-2xl hover:shadow-amber-950/20"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                <img
                  src={img.url}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Plate Number & Category Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-md border border-white/15 text-[10px] font-mono text-amber-300">
                    PLATE {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[9px] font-mono text-slate-300 uppercase">
                    {img.category}
                  </span>
                </div>

                {/* Expand Hover Icon */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/70 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 space-y-2">
                <h3 className="font-serif text-base text-white group-hover:text-amber-200 transition-colors">
                  {img.title}
                </h3>
                <p className="text-xs text-slate-400 font-light line-clamp-2 leading-relaxed">
                  {img.caption}
                </p>
                {img.metadata && (
                  <div className="pt-2 border-t border-white/10 text-[10px] font-mono text-slate-500">
                    {img.metadata}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="max-w-4xl w-full bg-[#070a0f] border border-white/20 rounded-3xl overflow-hidden shadow-2xl space-y-4">
            
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
              <img
                src={activeImageModal.url}
                alt={activeImageModal.title}
                className="w-full h-full object-contain"
              />
              <button
                onClick={() => setActiveImageModal(null)}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-black/70 hover:bg-black border border-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase">
                <span>{activeImageModal.category}</span>
                <span>&bull;</span>
                <span>AUTHENTICATED QABBAR ESTATE ARCHIVE</span>
              </div>
              <h3 className="text-2xl font-serif text-white">{activeImageModal.title}</h3>
              <p className="text-sm text-slate-300 font-light leading-relaxed">
                {activeImageModal.caption}
              </p>
              {activeImageModal.metadata && (
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 font-mono text-xs text-slate-400">
                  {activeImageModal.metadata}
                </div>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
