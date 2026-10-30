import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Mic, Send, Volume2, UserCheck, Eye, Compass, ShieldCheck, RefreshCw } from 'lucide-react';

interface Persona {
  id: string;
  name: string;
  lifeSpan: string;
  role: string;
  sanctuary: string;
  quote: string;
  avatarSilhouette: string;
  cadenceProfile: string;
}

const PRESET_PERSONAS: Persona[] = [
  {
    id: 'alexander-vance',
    name: 'Alexander Vance',
    lifeSpan: '1978 — 2026',
    role: 'Venture Capitalist & Founding Patron',
    sanctuary: 'Vault 07, Geneva Alpine Crypt',
    quote: 'Why spend $4M on a weekend house that will be demolished? My children speak with me here every Thursday.',
    avatarSilhouette: 'from-amber-400/40 via-cyan-400/20 to-transparent',
    cadenceProfile: 'Analytical • Dry Humor • Stoic • Affectionate'
  },
  {
    id: 'lady-sophia',
    name: 'Lady Sophia Sterling',
    lifeSpan: '1962 — 2025',
    role: 'Philanthropist & Classical Patron',
    sanctuary: 'Vault 12, Kyoto Monolith Grove',
    quote: 'Memory is only fragile if you leave it to biology. In this chamber, my grandchildren still hear my voice.',
    avatarSilhouette: 'from-purple-400/40 via-pink-400/20 to-transparent',
    cadenceProfile: 'Lyrical • Classical Allusions • Warm • Decisive'
  },
  {
    id: 'dr-evelyn-zhou',
    name: 'Dr. Evelyn Zhou',
    lifeSpan: '1984 — 2027',
    role: 'Quantum Biologist & Horizon Fellow',
    sanctuary: 'Vault 03, Dubai Obsidian Valley',
    quote: 'Death is simply a state change. The telemetry bracelet encoded my syntax before the physical casing ceased.',
    avatarSilhouette: 'from-emerald-400/40 via-teal-400/20 to-transparent',
    cadenceProfile: 'Empirical • Precision • Futuristic • Gentle'
  }
];

export const HologramSimulator: React.FC = () => {
  const [selectedPersona, setSelectedPersona] = useState<Persona>(PRESET_PERSONAS[0]);
  const [userInput, setUserInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [hologramIntensity, setHologramIntensity] = useState(85);
  const [messages, setMessages] = useState<Array<{ sender: 'visitor' | 'hologram'; text: string; time: string }>>([
    {
      sender: 'hologram',
      text: 'Welcome to Vault 07. Step closer to the glass. The Geneva chamber is cold today, but the prompt synthesis is operating at 99.8% fidelity. What brings you to see me today?',
      time: '12:04 PM'
    }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chat
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isProcessing]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || userInput;
    if (!textToSend.trim() || isProcessing) return;

    const timeString = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // Add visitor message
    setMessages((prev) => [...prev, { sender: 'visitor', text: textToSend, time: timeString }]);
    if (!customPrompt) setUserInput('');
    setIsProcessing(true);

    try {
      const res = await fetch('/api/hologram-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          persona: selectedPersona.name
        })
      });

      const data = await res.json();
      const reply = data.reply || 'I am processing your words across the quantum memory matrix. It is good to hear you.';

      setMessages((prev) => [...prev, { sender: 'hologram', text: reply, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          sender: 'hologram',
          text: `My thoughts remain clear. The bracelet recorded thousands of hours of our conversations; ask me about our family trust or what I believed most deeply.`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsProcessing(false);
    }
  };

  const sampleQuestions = [
    'Was buying this Qabbar worth it for the family?',
    'What do you miss most about physical life?',
    'What advice do you have for the next generation?',
    'How does it feel to exist as a prompt matrix?'
  ];

  return (
    <section id="hologram-chamber" className="relative py-24 sm:py-32 bg-[#05070A] overflow-hidden border-t border-white/10">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            Live Volumetric Crypt Chamber Simulator
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-light text-white tracking-tight">
            Step Into The Obsidian Vault.
            <br />
            <span className="italic font-normal bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 bg-clip-text text-transparent">
              Converse Beyond Biology.
            </span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Experience the reality of visiting a departed loved one inside Qabbar. Touch the subterranean sensor glass, speak your thoughts, and receive real-time answers synthesized from decades of biometric telemetry.
          </p>
        </div>

        {/* Persona Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {PRESET_PERSONAS.map((persona) => {
            const isSelected = selectedPersona.id === persona.id;
            return (
              <button
                key={persona.id}
                onClick={() => {
                  setSelectedPersona(persona);
                  setMessages([
                    {
                      sender: 'hologram',
                      text: `I am ${persona.name}. You stand before my memorial projection in ${persona.sanctuary}. The telemetry recorded my cadence across decades. What would you ask me?`,
                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                  ]);
                }}
                className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 flex items-center gap-3 ${
                  isSelected
                    ? 'bg-white/10 border-amber-400 text-white shadow-lg shadow-amber-950/40'
                    : 'bg-black/60 border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20'
                }`}
              >
                <div className={`w-2 h-2 rounded-full ${isSelected ? 'bg-amber-400 animate-ping' : 'bg-slate-600'}`} />
                <div className="text-left">
                  <div className="font-serif">{persona.name}</div>
                  <div className="text-[10px] font-mono text-slate-500">{persona.lifeSpan} &bull; {persona.sanctuary.split(',')[0]}</div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Simulator Core Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-black/80 border border-white/10 rounded-3xl p-4 sm:p-8 backdrop-blur-2xl shadow-2xl relative">
          
          {/* Left Column: The Holographic Projection Cylinder */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-between min-h-[480px] sm:min-h-[580px] rounded-2xl bg-gradient-to-b from-[#090d14] to-[#040609] border border-white/10 p-6 overflow-hidden">
            
            {/* Ceiling Laser Matrix Emitter */}
            <div className="w-full flex items-center justify-between border-b border-white/10 pb-3 font-mono text-xs text-slate-400 z-20">
              <span className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                OPTICAL EMITTER: 488nm COHERENT
              </span>
              <span className="text-slate-500">VOXEL FIDELITY: 99.8%</span>
            </div>

            {/* Hologram Light Column Cylinder Effect */}
            <div className="relative w-48 sm:w-64 h-[360px] sm:h-[440px] my-auto flex items-center justify-center">
              {/* Glass Cylinder Outlines */}
              <div className="absolute inset-x-2 inset-y-0 rounded-full border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 via-transparent to-cyan-500/10 pointer-events-none" />
              <div className="absolute top-0 inset-x-6 h-6 rounded-full border border-cyan-400/40 bg-cyan-400/10 shadow-[0_0_20px_rgba(34,211,238,0.3)]" />
              <div className="absolute bottom-0 inset-x-6 h-8 rounded-full border border-amber-400/40 bg-amber-400/10 shadow-[0_0_25px_rgba(251,191,36,0.25)]" />

              {/* Vertical Light Ray Shimmer */}
              <div className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent blur-md animate-pulse" />

              {/* The Ethereal Volumetric Human Silhouette */}
              <div className="relative z-10 flex flex-col items-center justify-center text-center select-none">
                {/* Silhouette Head & Shoulders Holographic Glow */}
                <div className="relative mb-3">
                  <div className={`w-24 h-28 sm:w-28 sm:h-32 rounded-t-full bg-gradient-to-b ${selectedPersona.avatarSilhouette} blur-xs opacity-90 border border-cyan-300/40 shadow-[0_0_40px_rgba(56,189,248,0.4)] flex items-center justify-center overflow-hidden`}>
                    {/* Scanline mesh */}
                    <div className="w-full h-full bg-[linear-gradient(transparent_2px,rgba(0,0,0,0.5)_2px)] bg-[size:100%_4px]" />
                  </div>
                  {/* Subtle Facial Light Mesh */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-16 border border-cyan-400/30 rounded-full opacity-60 animate-ping" style={{ animationDuration: '4s' }} />
                  </div>
                </div>

                {/* Torso Hologram */}
                <div className="w-36 sm:w-44 h-40 sm:h-48 rounded-t-3xl bg-gradient-to-b from-cyan-400/30 via-slate-700/20 to-transparent border-t border-cyan-300/30 blur-[0.5px] relative">
                  <div className="w-full h-full bg-[linear-gradient(90deg,transparent_2px,rgba(56,189,248,0.1)_2px)] bg-[size:8px_100%]" />
                  {/* Heart telemetry dot */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-1 font-mono text-[9px] text-amber-300 bg-black/60 px-2 py-0.5 rounded-full border border-amber-400/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                    TELEMETRY SEED: ACTIVE
                  </div>
                </div>

                {/* Dynamic Speech Waveform when Hologram is talking/loading */}
                {isProcessing && (
                  <div className="absolute bottom-4 flex items-center gap-1 px-3 py-1 bg-black/80 rounded-full border border-cyan-400/40 text-cyan-300 font-mono text-xs">
                    <span className="animate-bounce">●</span>
                    <span className="animate-bounce [animation-delay:0.2s]">●</span>
                    <span className="animate-bounce [animation-delay:0.4s]">●</span>
                    <span className="ml-2">SYNTHESIZING CADENCE...</span>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Plinth Sensor Inscription */}
            <div className="w-full text-center border-t border-white/10 pt-3 z-20">
              <div className="font-serif text-sm text-slate-200">{selectedPersona.name}</div>
              <div className="text-[11px] font-mono text-amber-400/90">{selectedPersona.role}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-0.5">{selectedPersona.cadenceProfile}</div>
            </div>
          </div>

          {/* Right Column: Descendant Interactive Dialogue Console */}
          <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-4">
            
            {/* Top Chamber Info */}
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">ACOUSTIC SANCTUM CONSOLE</span>
                <h4 className="text-lg font-serif text-white">{selectedPersona.sanctuary}</h4>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  PERPETUAL COVENANT ACTIVE
                </span>
              </div>
            </div>

            {/* Chat Transcript Scroll Area */}
            <div className="flex-1 overflow-y-auto space-y-4 max-h-[380px] pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${m.sender === 'visitor' ? 'items-end' : 'items-start'}`}
                >
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-slate-500">
                    <span>{m.sender === 'visitor' ? 'YOU (DESCENDANT)' : selectedPersona.name}</span>
                    <span>&bull;</span>
                    <span>{m.time}</span>
                  </div>
                  <div
                    className={`p-4 rounded-2xl max-w-xl text-sm leading-relaxed ${
                      m.sender === 'visitor'
                        ? 'bg-amber-500/15 border border-amber-500/30 text-amber-100 rounded-br-xs'
                        : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-xs'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {isProcessing && (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-2 mb-1 text-[11px] font-mono text-cyan-400">
                    <span>{selectedPersona.name} (HOLOGRAPHIC SYNTHESIS)</span>
                  </div>
                  <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 text-cyan-200 text-sm animate-pulse">
                    Retrieving autobiographical weights and phrasing from 30-year telemetry archive...
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Sample Thought Prompts */}
            <div className="space-y-2 pt-2 border-t border-white/10">
              <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider block">
                Suggested questions for this persona:
              </span>
              <div className="flex flex-wrap gap-2">
                {sampleQuestions.map((q, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(q)}
                    disabled={isProcessing}
                    className="text-xs bg-white/5 hover:bg-white/10 border border-white/10 hover:border-amber-400/40 text-slate-300 px-3 py-1.5 rounded-lg transition-colors text-left"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="relative flex items-center gap-2 pt-2"
            >
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={`Speak to ${selectedPersona.name} across the glass...`}
                disabled={isProcessing}
                className="flex-1 bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                disabled={isProcessing || !userInput.trim()}
                className="px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <span>Speak</span>
                <Send className="w-4 h-4" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};
