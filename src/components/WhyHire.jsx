import { motion } from 'framer-motion';
import Reveal from './Reveal';

const whyItems = [
  {
    title: 'Fast, Predictable Delivery',
    body: 'Most MVPs ship in 2–4 weeks. I work in clear milestones with daily updates, not radio silence.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: 'Premium UI Quality',
    body: 'Dashboards that look like real funded SaaS, not template clones. Clients close enterprise deals with my UI.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
      </svg>
    ),
  },
  {
    title: 'Production-Ready Code',
    body: 'Deployed on Vercel/Netlify on day one. Real auth, real database, real responsive design.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'AI Integration Expertise',
    body: "Claude, OpenAI, Groq, Llama — I've shipped context-aware AI assistants that understand business data.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
      </svg>
    ),
  },
  {
    title: 'Real Workflow Understanding',
    body: "I've built for schools, gyms, restaurants, law firms, mandis, salons — industry-specific operations.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: 'Bilingual Communication',
    body: 'English, Urdu, Roman Urdu — clear communication in whatever language your team operates in.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: 'SaaS Admin Dashboards',
    body: 'Enterprise-grade admin panels with analytics, CRUD, real-time data, role-based access, and premium dark UI.',
    price: 'Starting at $800',
  },
  {
    title: 'AI Integrations',
    body: 'Custom AI assistants powered by Claude, OpenAI, Groq, or Llama — context-aware, bilingual, integrated with your data.',
    price: 'Starting at $500',
  },
  {
    title: 'ERP & CRM Systems',
    body: 'Multi-module business systems — inventory, billing, HR, accounting, customer management.',
    price: 'Starting at $1,500',
  },
  {
    title: 'Automation Platforms',
    body: 'WhatsApp bots, broadcast campaigns, visual flow builders, integration hubs (Shopify, Stripe, Zapier).',
    price: 'Starting at $700',
  },
  {
    title: 'Analytics Dashboards',
    body: 'Data visualization with charts, KPI cards, real-time metrics, exportable reports for decision-makers.',
    price: 'Starting at $600',
  },
  {
    title: 'Custom Web Applications',
    body: 'From luxury e-commerce to booking platforms — production-ready React/Next.js apps with full backends.',
    price: 'Starting at $900',
  },
];

function Card({ item, idx, showPrice }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: (idx % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="project-card glass rounded-2xl p-7"
    >
      <div className="icon-wrap mb-5">{item.icon || (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" />
        </svg>
      )}</div>
      <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
      <p className="text-sm text-slate-400 leading-relaxed mb-3">{item.body}</p>
      {showPrice && item.price && (
        <div className="text-xs font-mono text-cyan-400/70">{item.price}</div>
      )}
    </motion.div>
  );
}

export function WhyHire() {
  return (
    <section className="py-32 border-t border-white/5 relative">
      <div
        className="glow-orb"
        style={{ width: 400, height: 400, background: '#22d3ee', top: '30%', right: '10%', opacity: 0.08 }}
      />
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 04 — Why Hire Me</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">What clients</span>{' '}
              <span className="font-serif italic text-white">actually get.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyItems.map((it, i) => (
            <Card key={it.title} item={it} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  // Service icons (different from why-icons)
  const serviceIcons = [
    <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></svg>,
    <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5M2 12l10 5 10-5" /></svg>,
    <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3" /></svg>,
    <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /></svg>,
    <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>,
    <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></svg>,
  ];

  return (
    <section id="services" className="py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 05 — Services</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">What I</span>{' '}
              <span className="font-serif italic text-white">build for clients.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Card key={s.title} item={{ ...s, icon: serviceIcons[i] }} idx={i} showPrice />
          ))}
        </div>
      </div>
    </section>
  );
}

const focusAreas = [
  {
    label: 'AI Agents',
    desc: 'Multi-agent orchestration with Claude and OpenAI function calling.',
    progress: 90,
  },
  {
    label: 'RAG Systems',
    desc: 'Retrieval-augmented generation with vector embeddings and Supabase pgvector.',
    progress: 75,
  },
  {
    label: 'Automation Workflows',
    desc: 'Visual flow builders, webhook orchestration, multi-step business logic.',
    progress: 85,
  },
  {
    label: 'Enterprise SaaS',
    desc: 'Multi-tenant platforms with role-based access and audit logging.',
    progress: 80,
  },
  {
    label: 'Multi-tenant Platforms',
    desc: 'White-label dashboards with isolated data and custom branding per client.',
    progress: 70,
  },
  {
    label: 'AI Integrations',
    desc: 'Bilingual AI assistants, context-aware chatbots, AI-powered analytics.',
    progress: 95,
  },
];

export function CurrentFocus() {
  return (
    <section className="py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 06 — Current Focus</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">What I'm building</span>{' '}
              <span className="font-serif italic text-white">in 2026.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {focusAreas.map((f, i) => (
            <motion.div
              key={f.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass-cyan rounded-2xl p-6"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="live-dot" style={{ width: 6, height: 6 }} />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Active
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">{f.progress}%</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{f.label}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">{f.desc}</p>
              <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${f.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-cyan-600"
                  style={{ boxShadow: '0 0 8px #22d3ee' }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
