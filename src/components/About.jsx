import Reveal from './Reveal';

export default function About() {
  return (
    <section id="about" className="py-32 border-t border-white/5 relative overflow-hidden">
      <div
        className="glow-orb"
        style={{ width: 500, height: 500, background: '#22d3ee', top: '20%', right: '-150px', opacity: 0.08 }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="mb-12">
            <div className="section-num mb-3">/ 03 — About</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight leading-tight">
              <span className="gradient-text">A developer who</span>{' '}
              <span className="font-serif italic text-white">ships real products.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-12">
          <Reveal direction="left" className="lg:col-span-7 space-y-5 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm <span className="text-white font-medium">Muhammad Awais Sattar</span>, based in Khanewal,
              Pakistan. I specialize in building production-grade SaaS dashboards, AI-integrated admin
              systems, and end-to-end business platforms.
            </p>
            <p>
              My work spans 8+ industries — from{' '}
              <span className="text-cyan-400">real estate intelligence</span> to restaurant operations,
              from <span className="text-cyan-400">WhatsApp automation</span> to school management
              systems. I've shipped 30+ SaaS systems with AI integrations across Claude, OpenAI, Groq,
              and Llama.
            </p>
            <p className="text-slate-400">
              I don't ship template-style projects. Every build is engineered around real business
              workflows, with the architectural discipline of someone who understands that{' '}
              <span className="text-cyan-400 italic">
                "frontend" is just the surface — products are systems.
              </span>
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">SPECIALIZATIONS</div>
                <div className="text-white font-semibold text-sm">AI SaaS Platforms</div>
                <div className="text-xs text-slate-500 mt-1">ERP · CRM · Admin Panels</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">INDUSTRIES</div>
                <div className="text-white font-semibold text-sm">8+ Verticals</div>
                <div className="text-xs text-slate-500 mt-1">EdTech · FinTech · PropTech</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">AI MODELS</div>
                <div className="text-white font-semibold text-sm">Claude · OpenAI</div>
                <div className="text-xs text-slate-500 mt-1">Groq · Llama 3</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">LANGUAGES</div>
                <div className="text-white font-semibold text-sm">English · Urdu</div>
                <div className="text-xs text-slate-500 mt-1">Bilingual delivery</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
