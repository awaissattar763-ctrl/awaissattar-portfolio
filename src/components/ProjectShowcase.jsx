import { motion } from 'framer-motion';
import { flagshipThumbs } from './thumbnails/index.js';

const accentByGradient = {
  cyan: '#22d3ee',
  green: '#22c55e',
  gold: '#fbbf24',
};

function Visual({ project }) {
  const Thumb = flagshipThumbs[project.id];
  const accent = accentByGradient[project.gradient] || '#22d3ee';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="browser-window aspect-[16/10] relative overflow-hidden">
        {/* Browser bar */}
        <div className="browser-bar">
          <div className="browser-dot bg-red-500/60" />
          <div className="browser-dot bg-yellow-500/60" />
          <div className="browser-dot bg-green-500/60" />
          <div
            className="flex-1 mx-3 px-3 py-1 rounded text-xs font-mono text-slate-500 truncate"
            style={{ background: '#05080d' }}
          >
            {project.domain}
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono px-2 py-0.5 rounded transition hover:opacity-80"
            style={{ color: accent, background: `${accent}15`, border: `1px solid ${accent}33` }}
          >
            Live ↗
          </a>
        </div>

        {/* The thumbnail itself */}
        <div className="relative w-full" style={{ height: 'calc(100% - 40px)' }}>
          {Thumb ? (
            <Thumb />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-500">
              {project.name}
            </div>
          )}

          {/* Glass reflection overlay (subtle) */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, transparent 40%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Info({ project, reverse }) {
  const accent = accentByGradient[project.gradient] || '#22d3ee';

  return (
    <motion.div
      initial={{ opacity: 0, x: reverse ? 40 : -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex items-center gap-3 mb-4 flex-wrap">
        {project.flagshipBadge && (
          <span className="tag">
            <span className="live-dot" style={{ width: 6, height: 6 }} /> Flagship
          </span>
        )}
        {project.tags.slice(project.flagshipBadge ? 1 : 0).map((t, i) => (
          <span
            key={i}
            className="tag"
            style={
              project.gradient === 'gold'
                ? {
                    background: 'rgba(251, 191, 36, 0.08)',
                    borderColor: 'rgba(251, 191, 36, 0.2)',
                    color: '#fbbf24',
                  }
                : project.gradient === 'green'
                ? {
                    background: 'rgba(34, 197, 94, 0.08)',
                    borderColor: 'rgba(34, 197, 94, 0.2)',
                    color: '#22c55e',
                  }
                : undefined
            }
          >
            {t}
          </span>
        ))}
      </div>
      <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">
        {project.name}
      </h3>

      <div className="mb-4">
        <div
          className="text-xs font-mono uppercase tracking-wider mb-1"
          style={{ color: accent }}
        >
          Problem
        </div>
        <p className="text-slate-400 text-sm">{project.problem}</p>
      </div>
      <div className="mb-6">
        <div
          className="text-xs font-mono uppercase tracking-wider mb-1"
          style={{ color: accent }}
        >
          Solution
        </div>
        <p className="text-slate-400 text-sm leading-relaxed">{project.solution}</p>
      </div>

      {project.impact && (
        <div className="mb-5 grid grid-cols-1 sm:grid-cols-3 gap-2">
          {project.impact.map((m, i) => (
            <div key={i} className="glass-cyan rounded-lg px-3 py-2">
              <div className="text-[10px] font-mono text-cyan-400/70 uppercase tracking-wider mb-0.5">
                Impact
              </div>
              <div className="text-xs text-white font-medium leading-snug">{m}</div>
            </div>
          ))}
        </div>
      )}

      <div className="mb-5">
        <div className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
          Tech Stack
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s, i) => (
            <span key={i} className="tech-chip">{s}</span>
          ))}
        </div>
      </div>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium group"
      >
        View Live Project
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="group-hover:translate-x-1 transition"
        >
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>
    </motion.div>
  );
}

export default function ProjectShowcase({ project, index }) {
  const reverse = index % 2 === 1;

  return (
    <article className="mb-24 md:mb-32">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {reverse ? (
          <>
            <div className="lg:col-span-7 order-1">
              <Visual project={project} />
            </div>
            <div className="lg:col-span-5 order-2">
              <Info project={project} reverse={reverse} />
            </div>
          </>
        ) : (
          <>
            <div className="lg:col-span-5 order-2 lg:order-1">
              <Info project={project} reverse={reverse} />
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <Visual project={project} />
            </div>
          </>
        )}
      </div>
    </article>
  );
}
