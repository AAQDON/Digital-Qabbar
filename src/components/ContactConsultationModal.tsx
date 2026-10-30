import React, { useState } from 'react';
import { X, Shield, Check, Landmark, Mail, Phone, User, Calendar, MapPin, Send } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTier?: string;
  defaultLocation?: string;
}

export const ContactConsultationModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTier = 'The Sovereign Crypt ($420,000)',
  defaultLocation = 'Geneva Alpine Bastion Vault (Switzerland)'
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [tier, setTier] = useState(defaultTier);
  const [location, setLocation] = useState(defaultLocation);
  const [offspringCount, setOffspringCount] = useState('2 Heirs');
  const [notes, setNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedDossierId, setConfirmedDossierId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/reserve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          tier,
          location,
          offspringCount,
          notes
        })
      });
      const data = await res.json();
      setConfirmedDossierId(data.reservationId || 'QBR-849201');
    } catch (err) {
      setConfirmedDossierId('QBR-938210');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="max-w-2xl w-full bg-[#070a0f] border border-white/20 rounded-3xl overflow-hidden shadow-2xl relative">
        
        {/* Header */}
        <div className="p-6 sm:p-8 border-b border-white/10 bg-gradient-to-r from-black via-white/[0.02] to-black flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest">
              <Landmark className="w-3.5 h-3.5" />
              CONFIDENTIAL FAMILY OFFICE ADMISSION
            </div>
            <h3 className="text-2xl font-serif text-white">
              Initiate Your Qabbar Allocation
            </h3>
            <p className="text-xs text-slate-400 font-light">
              Why invest in your home when you can invest in your Qabbar?
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body or Success State */}
        {confirmedDossierId ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mx-auto flex items-center justify-center">
              <Check className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest">
                UNDERWRITING DOSSIER CREATED
              </span>
              <h4 className="text-3xl font-serif text-white">
                Dossier #{confirmedDossierId}
              </h4>
              <p className="text-slate-300 text-sm font-light max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your allocation inquiry for <span className="text-amber-200 font-medium">{tier}</span> at <span className="text-cyan-200 font-medium">{location}</span> has been assigned to our Senior Mortality Underwriter.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-xs text-slate-400 font-mono text-left space-y-1.5">
              <div className="flex justify-between">
                <span>ESTATE PATRON:</span>
                <span className="text-white">{fullName}</span>
              </div>
              <div className="flex justify-between">
                <span>CONFIDENTIAL CHANNEL:</span>
                <span className="text-white">{email}</span>
              </div>
              <div className="flex justify-between">
                <span>Q-BAND COURIER STATUS:</span>
                <span className="text-amber-300">DISPATCH READY (ZURICH VAULT)</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 font-mono">
              Our Director will establish secure encrypted contact within 24 hours.
            </p>

            <button
              onClick={() => {
                setConfirmedDossierId(null);
                onClose();
              }}
              className="px-8 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider"
            >
              Conclude Session
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[80vh] overflow-y-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-amber-400" />
                  Patron Full Legal Name
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. Lord Sterling Alexander"
                  className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  Confidential Direct Email
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="patron@dynastytrust.ch"
                  className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Telephone / Family Office
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+41 22 819 0000"
                  className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  Preferred Sanctuary Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full bg-[#0a0f18] border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option value="Geneva Alpine Bastion Vault (Switzerland)">Geneva Alpine Bastion Vault (Switzerland)</option>
                  <option value="Dubai Obsidian Dunes Sanctum (UAE)">Dubai Obsidian Dunes Sanctum (UAE)</option>
                  <option value="Kyoto Monolith Bamboo Grove (Japan)">Kyoto Monolith Bamboo Grove (Japan)</option>
                  <option value="Reykjanes Tectonic Geothermal Crypt (Iceland)">Reykjanes Tectonic Geothermal Crypt (Iceland)</option>
                  <option value="Manhattan Sub-Lithic Catacombs (New York)">Manhattan Sub-Lithic Catacombs (New York)</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono text-slate-300">
                  Target Allocation Tier & Endowment
                </label>
                <select
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full bg-[#0a0f18] border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  <option value="The Obsidian Niche ($145,000 + $950/mo)">The Obsidian Niche ($145,000 + $950/mo)</option>
                  <option value="The Sovereign Crypt ($420,000 + $2,200/mo)">The Sovereign Crypt ($420,000 + $2,200/mo) &bull; Recommended</option>
                  <option value="The Dynastic Monolith ($980,000 + $4,400/mo)">The Dynastic Monolith ($980,000 + $4,400/mo)</option>
                  <option value="The Imperial Necropolis ($2,600,000 + $8,900/mo)">The Imperial Necropolis ($2,600,000 + $8,900/mo)</option>
                </select>
              </div>

              <div className="space-y-1.5 sm:col-span-2">
                <label className="text-xs font-mono text-slate-300">
                  Lineage Specifics / Offspring Notes
                </label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Specify family succession preferences, wrist circumference for custom titanium band, or questions regarding Clause 41.B..."
                  className="w-full bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none"
                />
              </div>

            </div>

            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-500">
                100% DISCRETION GUARANTEED &bull; SWISS LAW
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-colors disabled:opacity-50"
              >
                <span>{isSubmitting ? 'Transmitting Dossier...' : 'Submit Allocation Inquiry'}</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
