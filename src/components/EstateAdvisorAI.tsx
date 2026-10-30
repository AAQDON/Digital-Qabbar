import React, { useState, useEffect, useRef } from 'react';
import { Bot, Sparkles, Send, X, MessageSquare, ChevronDown, Check, Shield, HelpCircle, ArrowUpRight } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'advisor';
  text: string;
  timestamp: string;
}

export const EstateAdvisorAI: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  selectedTier?: string;
}> = ({ isOpen, onClose, selectedTier = 'The Sovereign Crypt' }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      sender: 'advisor',
      text: `Greetings. I am Archon, Chief Mortality Underwriter and Lineage Allocation Advisor for Qabbar.com.

Our mission is singular: "Why invest in your home when you can invest in your Qabbar?"

I am here to guide you through our lifelong telemetry bracelet deployment, sanctuary allocation, and perpetual generational trust structuring. How may I counsel you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputText;
    if (!textToSend.trim() || isTyping) return;

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: textToSend,
      timestamp: time
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!customPrompt) setInputText('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/advisor-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: textToSend,
          conversationHistory: messages.map((m) => ({ role: m.sender, content: m.text }))
        })
      });

      const data = await res.json();
      const reply = data.reply || 'Our estate underwriters are calculating your allocation. Please specify your desired sanctuary location.';

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'advisor',
          text: reply,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'advisor',
          text: `At Qabbar, every allocation is a living investment in eternal family communion. We recommend pairing your ${selectedTier} with an initial 25-year sovereign escrow cushion to safeguard your descendants.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = [
    'Why is paying monthly forever more reasonable than buying a house?',
    'What happens if my heirs miss a payment?',
    'How does the telemetry bracelet capture my mental syntax?',
    'Can I pre-fund 50 years into escrow?',
    'What sanctuaries currently have availability?'
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[480px] lg:w-[540px] bg-[#070a0f] border-l border-white/15 shadow-2xl flex flex-col justify-between backdrop-blur-2xl animate-in slide-in-from-right duration-300">
      
      {/* Top Header */}
      <div className="p-4 sm:p-5 border-b border-white/10 bg-black/60 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-200 p-0.5 flex items-center justify-center">
              <div className="w-full h-full bg-black rounded-[10px] flex items-center justify-center">
                <Bot className="w-5 h-5 text-amber-400" />
              </div>
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-black" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-white font-medium text-base">Archon</h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-[10px] font-mono">
                MORTALITY UNDERWRITER
              </span>
            </div>
            <p className="text-[11px] font-mono text-slate-400">
              Qabbar Estate & Lineage Deal Advisor
            </p>
          </div>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 scrollbar-thin scrollbar-thumb-white/10">
        {messages.map((m) => (
          <div
            key={m.id}
            className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
          >
            <div className="flex items-center gap-1.5 mb-1 text-[10px] font-mono text-slate-500">
              <span>{m.sender === 'user' ? 'YOU (PATRON)' : 'ARCHON // ADVISOR'}</span>
              <span>&bull;</span>
              <span>{m.timestamp}</span>
            </div>
            <div
              className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-wrap ${
                m.sender === 'user'
                  ? 'bg-amber-500/20 border border-amber-500/30 text-amber-100 rounded-br-xs max-w-[85%]'
                  : 'bg-white/5 border border-white/10 text-slate-200 rounded-bl-xs max-w-[92%]'
              }`}
            >
              {m.text}
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex flex-col items-start">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-amber-300 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span>Archon is calculating lineage succession terms...</span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Questions */}
      <div className="px-4 py-2 border-t border-white/10 bg-black/40">
        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1.5">
          Ask Archon:
        </span>
        <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {quickPrompts.map((qp, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(qp)}
              className="text-[11px] whitespace-nowrap bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 px-3 py-1 rounded-full transition-colors shrink-0"
            >
              {qp}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-4 border-t border-white/10 bg-black/80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask about deals, bracelet telemetry, or perpetual terms..."
            className="flex-1 bg-white/5 border border-white/15 focus:border-amber-400 rounded-xl px-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={isTyping || !inputText.trim()}
            className="p-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold disabled:opacity-50 transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

    </div>
  );
};
