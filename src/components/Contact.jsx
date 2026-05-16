import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { config } from '../data/config';

const contactCards = [
  {
    label: 'WhatsApp',
    value: config.phone,
    href: config.whatsapp,
    bg: 'bg-green-500/10',
    border: 'border-green-500/20',
    iconColor: 'text-green-400',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: '@awais-sattar',
    href: config.linkedin,
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    iconColor: 'text-blue-400',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    value: '@awaissattar4',
    href: config.facebook,
    bg: 'bg-blue-600/10',
    border: 'border-blue-600/20',
    iconColor: 'text-blue-500',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: config.email,
    href: `mailto:${config.email}`,
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    iconColor: 'text-cyan-400',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-32 border-t border-white/5 relative overflow-hidden">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div
        className="glow-orb"
        style={{
          width: 500, height: 500, background: '#22d3ee',
          bottom: '-200px', left: '50%', transform: 'translateX(-50%)', opacity: 0.15,
        }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <Reveal>
          <div className="section-num mb-6">/ 11 — Let's Build</div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] mb-6">
            <span className="gradient-text">Let's build your next</span><br />
            <span className="cyan-text">AI-powered platform.</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto mb-12">
            Whether you need a flagship dashboard, an AI integration, or a complete business platform —
            I respond within 6 hours.
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {contactCards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="project-card glass rounded-xl p-5 text-left"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${c.bg} ${c.border} border flex items-center justify-center ${c.iconColor}`}>
                  {c.icon}
                </div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                  {c.label}
                </div>
              </div>
              <div className="text-white text-sm font-medium break-all">{c.value}</div>
            </motion.a>
          ))}
        </div>

        <Reveal delay={0.2}>
          <a
            href={config.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-lg text-sm"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
            </svg>
            <span>Start on WhatsApp</span>
          </a>

          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mt-8 ml-0 sm:ml-4">
            <span className="live-dot" />
            <span className="text-xs font-mono text-slate-400">
              Currently accepting 2 new projects this month
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
                <span className="text-[#05080d] font-bold text-sm">A</span>
              </div>
              <span className="text-white font-semibold">Muhammad Awais Sattar</span>
            </div>
            <p className="text-slate-500 text-sm">
              AI SaaS & Automation Developer building production-grade systems for modern businesses.
            </p>
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">Navigate</div>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <a href="#work" className="hover:text-cyan-400 transition">Work</a>
              <a href="#about" className="hover:text-cyan-400 transition">About</a>
              <a href="#services" className="hover:text-cyan-400 transition">Services</a>
              <a href="#process" className="hover:text-cyan-400 transition">Process</a>
              <a href="#testimonials" className="hover:text-cyan-400 transition">Testimonials</a>
              <a href="#faq" className="hover:text-cyan-400 transition">FAQ</a>
              <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
            </div>
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">Connect</div>
            <div className="space-y-2 text-sm text-slate-400">
              <a href={config.whatsapp} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">
                {config.phone}
              </a>
              <a href={`mailto:${config.email}`} className="block hover:text-cyan-400 transition break-all">
                {config.email}
              </a>
              <a href={config.linkedin} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">
                LinkedIn
              </a>
              <a href={config.facebook} target="_blank" rel="noopener noreferrer" className="block hover:text-cyan-400 transition">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <div className="text-slate-500 text-sm">
            © 2026 Muhammad Awais Sattar. Crafted with precision.
          </div>
          <div className="text-xs font-mono text-slate-600">
            Built with React + Tailwind + Framer Motion · Deployed on Vercel
          </div>
        </div>
      </div>
    </footer>
  );
}

export function WhatsappFab() {
  return (
    <a
      href={config.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-fab"
      aria-label="WhatsApp"
    >
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
      </svg>
    </a>
  );
}
