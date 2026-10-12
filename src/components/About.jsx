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
              I'm <span className="text-white font-medium">Muhammad Awais Sattar</span>, an AI SaaS
              engineer based in Pakistan, working with clients worldwide. I build the systems that
              service businesses run on — <span className="text-cyan-400">AI receptionists</span> that
              answer every call, <span className="text-cyan-400">automation pipelines</span> that follow
              up instantly, and <span className="text-cyan-400">dashboards</span> that turn chaos into clarity.
            </p>
            <p>
              My portfolio spans 10+ business verticals — real estate, dental, legal, home services,
              retail, education, fitness, hospitality. Every project is a working system with real
              backend logic, not a mockup: Supabase Auth, PostgreSQL, n8n workflows, voice AI.
            </p>
            <p className="text-slate-400">
              I don't do template work. Each build starts from your actual workflow — how leads come
              in, where they slip through, what your team touches daily — and the software is
              engineered around that reality.{' '}
              <span className="text-cyan-400 italic">
                Frontend is the surface. Products are systems.
              </span>
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2} className="lg:col-span-5">
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">SPECIALIZATIONS</div>
                <div className="text-white font-semibold text-sm">AI SaaS & Automation</div>
                <div className="text-xs text-slate-500 mt-1">Receptionists · Pipelines · Dashboards</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">INDUSTRIES</div>
                <div className="text-white font-semibold text-sm">10+ Verticals</div>
                <div className="text-xs text-slate-500 mt-1">Dental · Legal · Home Services</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">AI MODELS</div>
                <div className="text-white font-semibold text-sm">Claude · OpenAI</div>
                <div className="text-xs text-slate-500 mt-1">Groq · Llama 3 · ElevenLabs</div>
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
