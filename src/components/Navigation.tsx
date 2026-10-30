import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, Shield, Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface NavProps {
  onOpenConsultation: () => void;
  onOpenAdvisor: () => void;
}

export const Navigation: React.FC<NavProps> = ({ onOpenConsultation, onOpenAdvisor }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Continuum', href: '#continuum-process' },
    { label: 'Q-Band Telemetry', href: '#telemetry-hardware' },
    { label: 'Hologram Vault', href: '#hologram-chamber' },
    { label: 'The Perpetual Covenant', href: '#lineage-covenant' },
    { label: 'Global Sanctuaries', href: '#sanctuaries' },
    { label: 'Visual Atlas (24+)', href: '#visual-atlas' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#05070a]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 via-amber-200 to-amber-600 p-[1px]">
            <div className="w-full h-full bg-[#05070a] rounded-[7px] flex items-center justify-center">
              <span className="font-serif font-bold text-amber-300 text-sm tracking-wider">Q</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg tracking-[0.2em] uppercase font-bold text-white group-hover:text-amber-200 transition-colors">
              QABBAR<span className="text-amber-400 text-xs">.COM</span>
            </span>
            <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase -mt-1 hidden sm:inline-block">
              POST-BIOLOGICAL MEMORIAL ESTATES
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-amber-300 transition-colors uppercase tracking-wider hover:underline underline-offset-4 decoration-amber-400/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          {/* AI Deal Advisor Trigger */}
          <button
            onClick={onOpenAdvisor}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-amber-500/30 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 text-xs font-mono transition-all"
            title="Chat with Archon Mortality Deal Advisor"
          >
            <Bot className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Estate AI</span>
          </button>

          {/* Contact Us Primary Button */}
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white text-black hover:bg-amber-400 font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenAdvisor}
            className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-xs"
          >
            <Bot className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/5 border border-white/10 text-slate-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070a0f] border-b border-white/10 px-4 py-6 space-y-4 animate-in slide-in-from-top">
          <nav className="flex flex-col space-y-3 font-mono text-xs text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-amber-300 py-1 border-b border-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAdvisor();
              }}
              className="w-full py-2.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-300 text-xs font-mono flex items-center justify-center gap-2"
            >
              <Bot className="w-4 h-4" />
              <span>Converse with Estate AI Advisor</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-xl bg-amber-400 text-black font-semibold text-xs font-mono uppercase tracking-wider"
            >
              Contact Us &bull; Reserve Plot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
