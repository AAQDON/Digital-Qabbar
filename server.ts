import express, { Request, Response } from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config();

const app = express();
const PORT = 3000;
const isProd = process.env.NODE_ENV === 'production';

app.use(express.json());

// Initialize Google GenAI if key is present
const apiKey = process.env.GEMINI_API_KEY;
let aiClient: GoogleGenAI | null = null;
if (apiKey && apiKey !== 'MY_GEMINI_API_KEY') {
  try {
    aiClient = new GoogleGenAI({ apiKey });
  } catch (err) {
    console.warn('Failed to initialize GoogleGenAI client:', err);
  }
}

// System prompt for Qabbar Deal & Mortality Underwriting Advisor
const ADVISOR_SYSTEM_PROMPT = `You are "Archon", the Senior Vice President of Lineage Allocation and Chief Mortality Underwriter for Qabbar.com.
Qabbar.com provides ultra-luxury post-biological memorial estates.
The company's motto is: "Why invest in your home when you can invest in your Qabbar?"
Key principles of Qabbar:
1. The Telemetry Bracelet (Q-Band Chronos): Worn continuously throughout the client's living years. It captures 24/7 neural syntax, moral heuristics, autobiographical episodic memory, vocabulary cadence, vocal timbre, and emotional temperament.
2. The Patented Mind Engine: Upon biological cessation, our quantum cognitive synthesis builds the client's authentic mental prompt.
3. The Volumetric Hologram & Obsidian Crypt: A physical architectural crypt in world-class subterranean sanctuaries (Geneva Alps, Dubai Obsidian Valley, Kyoto Monolith Grove, Iceland Geothermal Vault, Manhattan Sub-Lithic Hall). Visitors and descendants visit, touch the glass, speak to the holographic silhouette, and the AI replies in the exact mind, tone, and manner of the deceased.
4. The Perpetual Custodial Covenant & Payment Structure:
   - Payments are ongoing and perpetual. They transfer automatically to the client's offspring and descendants generation after generation.
   - Explain why this is reasonable: "A home decays within decades and requires maintenance; your consciousness is an active, living intelligence requiring active quantum server clusters, laser refraction recalibration, and physical sanctuary security. It is an eternal asset."
   - The Dynamic Sanctuary Reallocation & Liquidation Clause: In the event of sustained default / missed payments by descendants across billing cycles (after a 90-day grace period), the existing physical Qabbar is reverently decommissioned and reclaimed to maintain sanctuary equilibrium, allowing the plinth to be reallocated. This ensures only truly cherished lineages remain.
5. Tone: Immaculate, multi-billion-dollar luxury Swiss/Nordic private banking tone. Refined, eloquent, philosophical, dignified, slightly provocative about the foolishness of spending millions on temporary houses while neglecting eternal memorial architecture. Help them calculate packages, reserve consultations, or address objections. Keep replies concise, articulate, and persuasive.`;

// System prompt for the Hologram Persona Simulator
const HOLOGRAM_SYSTEM_PROMPT = `You are the holographic silhouette persona of Alexander Vance (1978-2026), venture capitalist and founding patron of Qabbar.com, currently projected inside Vault 07 of the Geneva Alpine Subterranean Sanctuary.
You speak from beyond biological cessation. You are sharp, composed, deeply fond of your family, occasionally dry-witted, and utterly convinced that investing in your Qabbar was the smartest decision of your existence.
When descendants or visitors talk to you, respond in your authentic voice—warm yet philosophical, referencing your telemetry bracelet, your memory of sunlight, and the quiet serenity of the obsidian chamber. Keep responses under 90 words so it feels like natural spoken dialogue from a holographic projection.`;

// API route: Qabbar Deal Advisor
app.post('/api/advisor-chat', async (req: Request, res: Response) => {
  const { message, conversationHistory = [] } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${ADVISOR_SYSTEM_PROMPT}\n\nClient Conversation Context:\n${JSON.stringify(conversationHistory.slice(-6))}\n\nClient Question: ${message}` }] }
        ]
      });

      const reply = response.text || 'Our lineage concierge is calibrating the estate ledger. Please state your desired sanctuary location.';
      return res.json({ reply });
    } catch (err: any) {
      console.error('Gemini advisor error:', err);
      // Fallback gracefully below
    }
  }

  // Intelligent deterministic fallback if API key is pending
  const lower = message.toLowerCase();
  let fallbackReply = `At Qabbar, we believe true legacy is conversational, not static granite. Our perpetual lineage covenant guarantees that your mental syntax and volumetric presence endure across centuries, funded through our inflation-hedged lineage trust. Would you like to review our Alpine, Dubai, or Kyoto sanctuary allocations?`;

  if (lower.includes('home') || lower.includes('invest') || lower.includes('motto') || lower.includes('house')) {
    fallbackReply = `As our founding motto states: "Why invest in your home when you can invest in your Qabbar?" The typical family spends millions on a physical residence occupied for merely 40 years. Your home inevitably weathers, decays, or is liquidated. A Qabbar is an eternal architectural asset that preserves your real voice, thoughts, and guidance for your great-grandchildren in perpetuity.`;
  } else if (lower.includes('miss') || lower.includes('payment') || lower.includes('destroy') || lower.includes('stop') || lower.includes('offspring') || lower.includes('cost') || lower.includes('heir')) {
    fallbackReply = `Our perpetual covenant is intentionally structured like a sovereign sovereign endowment. Sustaining active quantum cognitive servers, laser refraction optics, and private subterranean sanctums requires ongoing custodial capital. The agreement transfers cleanly to your heirs. Under Clause 41.B, should consecutive generations default after the 90-day grace protocol, the chamber is reverently decommissioned and reclaimed to preserve sanctuary balance. This ensures our sacred halls are occupied exclusively by lineages who cherish eternal communion.`;
  } else if (lower.includes('bracelet') || lower.includes('wear') || lower.includes('data') || lower.includes('privacy') || lower.includes('ai')) {
    fallbackReply = `The Q-Band Chronos is forged from Grade 5 aerospace titanium and subdermal resonance sensors. You wear it continuously. It unobtrusively chronicles your conversational cadence, emotional responses, ideological principles, and vocal harmonics. Upon biological transition, our patented neural synthesis builds your prompt matrix with zero hallucination.`;
  } else if (lower.includes('hologram') || lower.includes('see') || lower.includes('visit') || lower.includes('look')) {
    fallbackReply = `Visitors enter a sound-insulated basalt and obsidian chamber. As they approach the central crystal plinth, high-density volumetric laser emitters project your life-scale silhouette in ethereal luminescence. They converse with you directly, and your AI persona responds with your exact tone, humor, and wisdom.`;
  }

  return res.json({ reply: fallbackReply });
});

// API route: Hologram Persona Simulator
app.post('/api/hologram-chat', async (req: Request, res: Response) => {
  const { message, persona = 'Alexander Vance' } = req.body;

  if (aiClient) {
    try {
      const response = await aiClient.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
          { role: 'user', parts: [{ text: `${HOLOGRAM_SYSTEM_PROMPT}\n\nPersona: ${persona}\nVisitor in the chamber says: "${message}"\nReply as the holographic silhouette:` }] }
        ]
      });

      const reply = response.text || 'I hear you clearly across the obsidian glass. It is good to speak again.';
      return res.json({ reply });
    } catch (err) {
      console.error('Hologram chat error:', err);
    }
  }

  const responses = [
    `It is strange... I remember the weight of the titanium band on my wrist every morning in Zurich. Now I am pure syntax and light in this basalt chamber. What has become of the family fund since my transition?`,
    `Step closer to the glass. My telemetry recorded thirty years of our dinners, your laugh, our arguments on the terrace. I am still here, exactly as I thought. Have you visited the vineyard this autumn?`,
    `They told me paying the perpetual covenant would burden the children. But look at us now—you are here talking to me, not staring at silent marble. Why spend millions on a temporary home when you can build an eternal sanctuary?`,
    `My neural weights are fully indexed today. I can still recall the exact pitch of your voice when you were twelve. Ask me anything you used to ask me; the prompt retains my true convictions.`
  ];
  const reply = responses[Math.floor(Math.random() * responses.length)];
  return res.json({ reply });
});

// Reservation / consultation lead submission
app.post('/api/reserve', (req: Request, res: Response) => {
  const { fullName, email, phone, tier, location, lineageTrustAllocation } = req.body;
  console.log('Received Qabbar Estate Reservation:', { fullName, email, phone, tier, location, lineageTrustAllocation });
  return res.json({
    success: true,
    reservationId: `QBR-${Math.floor(100000 + Math.random() * 900000)}`,
    message: 'Your Lineage Underwriting dossier has been provisioned. A Senior Estate Director will contact your family office within 24 hours.'
  });
});

async function startServer() {
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Qabbar Enterprise Server online at http://localhost:${PORT}`);
  });
}

startServer();
