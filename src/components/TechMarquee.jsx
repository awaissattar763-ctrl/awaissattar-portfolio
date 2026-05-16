const items = [
  'React', 'Next.js', 'Tailwind CSS', 'Vite', 'Supabase',
  'Firebase', 'Groq', 'Claude API', 'OpenAI', 'Llama 3',
  'Vercel', 'TypeScript', 'Node.js', 'PostgreSQL',
];

export default function TechMarquee() {
  return (
    <section className="py-12 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <p className="text-xs font-mono text-slate-500 uppercase tracking-widest text-center">
          — Frameworks, AI providers & deployment tools —
        </p>
      </div>
      <div className="marquee-track text-slate-600 text-2xl font-medium">
        {[...items, ...items].map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span>·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
