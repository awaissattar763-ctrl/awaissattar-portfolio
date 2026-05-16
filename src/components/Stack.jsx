import Reveal from './Reveal';

export default function Stack() {
  return (
    <section id="stack" className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal direction="left">
            <div className="section-num mb-3">/ 10 — Stack</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
              <span className="gradient-text">Tools I use</span><br />
              <span className="font-serif italic text-white">every day.</span>
            </h2>
            <p className="text-slate-400 leading-relaxed max-w-md mb-8">
              A modern, AI-native stack that prioritizes speed, type safety, and shippable production code.
            </p>
          </Reveal>

          <Reveal direction="right" delay={0.2}>
            <div className="grid grid-cols-2 gap-3">
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">FRONTEND</div>
                <div className="text-white font-semibold">React · Next.js · Vite</div>
                <div className="text-xs text-slate-500 mt-1">Tailwind · TypeScript · Framer Motion</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">BACKEND</div>
                <div className="text-white font-semibold">Node.js · Supabase</div>
                <div className="text-xs text-slate-500 mt-1">Firebase · PostgreSQL · REST</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">AI / LLM</div>
                <div className="text-white font-semibold">Claude · OpenAI</div>
                <div className="text-xs text-slate-500 mt-1">Groq · Llama 3 · Embeddings</div>
              </div>
              <div className="glass-cyan rounded-xl p-5">
                <div className="text-xs font-mono text-cyan-400 mb-1">DEPLOY</div>
                <div className="text-white font-semibold">Vercel · Netlify</div>
                <div className="text-xs text-slate-500 mt-1">GitHub · Docker · CI/CD</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
