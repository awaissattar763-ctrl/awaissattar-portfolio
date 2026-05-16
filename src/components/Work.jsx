import { motion } from 'framer-motion';
import { flagshipProjects, moreProjects } from '../data/projects';
import ProjectShowcase from './ProjectShowcase';
import Reveal from './Reveal';
import { secondaryThumbs } from './thumbnails/index.js';

function MoreProjectCard({ p, idx }) {
  const Thumb = secondaryThumbs[p.name];

  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="project-card glass rounded-2xl overflow-hidden block group"
    >
      {/* Thumbnail */}
      <div className="aspect-[16/10] relative overflow-hidden">
        {Thumb ? (
          <Thumb />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-ink-700 text-slate-500">
            {p.name}
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#05080d] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 right-3">
          <span className="tag">{p.tag}</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition">
          {p.name}
        </h4>
        <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
        <div className="flex gap-1.5 flex-wrap mb-3">
          {p.stack.map((s, i) => (
            <span key={i} className="tech-chip">{s}</span>
          ))}
        </div>
        <div className="text-xs font-mono text-cyan-400 flex items-center gap-1">
          View Live
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition">
            <path d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}

export default function Work() {
  return (
    <>
      <section id="work" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <div className="section-num mb-3">/ 01 — Selected Work</div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
                  <span className="gradient-text">Flagship</span>{' '}
                  <span className="font-serif italic text-white">projects.</span>
                </h2>
              </div>
              <p className="hidden md:block text-slate-400 max-w-sm text-sm">
                Eight production-grade systems — each solving a real business problem with thoughtful
                architecture and premium UI.
              </p>
            </div>
          </Reveal>

          {flagshipProjects.map((p, i) => (
            <ProjectShowcase key={p.id} project={p} index={i} />
          ))}
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <div className="mb-12">
              <div className="section-num mb-3">/ 02 — More Builds</div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                <span className="gradient-text">Additional</span>{' '}
                <span className="font-serif italic text-white">projects.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {moreProjects.map((p, i) => (
              <MoreProjectCard key={p.name} p={p} idx={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
