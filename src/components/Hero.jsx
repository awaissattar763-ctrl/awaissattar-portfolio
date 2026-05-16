import { motion } from 'framer-motion';
import TypedText from './TypedText';
import Counter from './Counter';
import Particles from './Particles';
import Reveal from './Reveal';
import awaisPhoto from '../assets/awais.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />
      <Particles count={20} />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7">
            <Reveal direction="up">
              <div className="flex items-center gap-2 mb-8">
                <span className="live-dot" />
                <span className="text-xs font-mono text-slate-400 tracking-wider uppercase">
                  Available for new projects · Q2 2026
                </span>
              </div>
            </Reveal>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.0] mb-8">
              <Reveal direction="up">
                <span className="gradient-text">Building</span>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <div className="my-1">
                  <TypedText />
                </div>
              </Reveal>
              <Reveal direction="up" delay={0.2}>
                <span className="gradient-text">at production scale.</span>
              </Reveal>
            </h1>

            <Reveal direction="up" delay={0.3}>
              <p className="text-lg text-slate-400 max-w-xl leading-relaxed mb-10">
                I'm <span className="text-white font-medium">Muhammad Awais Sattar</span> — a Full-Stack
                Developer specializing in <span className="text-cyan-400">enterprise dashboards</span>,
                AI-powered admin systems, and ERP/CRM platforms. From WhatsApp automation to real estate
                intelligence — I ship serious production-grade SaaS.
              </p>
            </Reveal>

            <Reveal direction="up" delay={0.4}>
              <div className="flex flex-wrap items-center gap-4 mb-12">
                <a href="#work" className="btn-primary px-7 py-3.5 rounded-lg text-sm flex items-center gap-2">
                  <span>View Selected Work</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
                <a href="#contact" className="btn-ghost px-7 py-3.5 rounded-lg text-sm text-white">
                  Start a Project →
                </a>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.5}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { count: 30, label: 'SaaS Systems' },
                  { count: 12, label: 'AI Integrations' },
                  { count: 8, label: 'Business Niches' },
                  { count: 100, label: 'Responsive', suffix: '%', cyan: true },
                ].map((s, i) => (
                  <div key={i} className="glass rounded-xl p-4">
                    <div className={`stat-num text-3xl md:text-4xl mb-1 ${s.cyan ? 'cyan-text' : 'text-white'}`}>
                      <Counter to={s.count} suffix={s.suffix || '+'} />
                    </div>
                    <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="photo-frame"
            >
              <div className="photo-ring-inner" />
              <div className="photo-ring" />
              <div className="photo-inner">
                <img src={awaisPhoto} alt="Muhammad Awais Sattar" loading="eager" />
              </div>

              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute top-7 -right-14 hidden sm:block float-card"
                style={{
                  background: 'rgba(15, 22, 32, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  fontSize: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(34, 211, 238, 0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400" style={{ boxShadow: '0 0 8px #22d3ee' }} />
                  <span className="text-white font-medium">AI SaaS Engineer</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="absolute bottom-20 -left-24 hidden sm:block"
                style={{
                  background: 'rgba(15, 22, 32, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  fontSize: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(34, 211, 238, 0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <span className="text-white font-medium">Production Systems</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-5 -right-12 hidden sm:block"
                style={{
                  background: 'rgba(15, 22, 32, 0.85)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(34, 211, 238, 0.25)',
                  borderRadius: 12,
                  padding: '10px 14px',
                  fontSize: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.4), 0 0 20px rgba(34, 211, 238, 0.1)',
                  whiteSpace: 'nowrap',
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="live-dot" style={{ width: 6, height: 6 }} />
                  <span className="text-white font-medium">Available for Freelance</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
