import { motion } from 'framer-motion';
import Reveal from './Reveal';

const steps = [
  { num: 1, title: 'Discovery', body: '30-min call to understand your business, users, and goals. I write a clear scope document.', time: 'Day 1–2' },
  { num: 2, title: 'Design', body: 'UI mockups for key screens. You approve direction before any code is written.', time: 'Day 3–5' },
  { num: 3, title: 'Development', body: 'Daily updates, weekly demos. You see progress as it happens — no surprises at the end.', time: 'Week 1–3' },
  { num: 4, title: 'Deployment', body: 'Live deployment on Vercel/Netlify. Custom domain setup, handover docs, 14 days free support.', time: 'Final week' },
];

export function Process() {
  return (
    <section id="process" className="py-32 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 07 — Process</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">How I</span>{' '}
              <span className="font-serif italic text-white">work with you.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="relative glass rounded-2xl p-6 text-center"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(100%-12px)] w-[calc(100%-40px)] h-px" style={{ background: 'linear-gradient(90deg, rgba(34,211,238,0.3), transparent)' }} />
              )}
              <div
                className="w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center relative"
                style={{ background: 'linear-gradient(135deg, #22d3ee, #0891b2)' }}
              >
                <span className="text-2xl font-bold text-[#05080d]">{s.num}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{s.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{s.body}</p>
              <div className="text-xs font-mono text-cyan-400/60 mt-3">{s.time}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 08 — Client Work</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Live client work,</span>{' '}
              <span className="font-serif italic text-white">not just demos.</span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl leading-relaxed">
              The project below is a live site delivered for a paying client. Other projects on
              this page are working demos and concept builds, labelled on each card.
              References available on request.
            </p>
          </div>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-5">
          <a href="https://mpskarachi.com" target="_blank" rel="noreferrer" className="glass rounded-2xl p-7 block hover:border-cyan-400/40 transition">
            <div className="text-xs font-mono text-cyan-400 mb-3">LIVE CLIENT SITE · REAL ESTATE · KARACHI</div>
            <h3 className="text-xl font-semibold text-white mb-2">Majestic Property Solutions</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Property website with live listings, built and deployed for a Karachi property business — mpskarachi.com.</p>
          </a>
          <a href="https://awaissattar763-ctrl.github.io/swiftpos/" target="_blank" rel="noreferrer" className="glass rounded-2xl p-7 block hover:border-cyan-400/40 transition">
            <div className="text-xs font-mono text-cyan-400 mb-3">FLAGSHIP BUILD · RETAIL POS</div>
            <h3 className="text-xl font-semibold text-white mb-2">SwiftPOS — Retail POS</h3>
            <p className="text-sm text-slate-400 leading-relaxed">Complete working POS on a real Supabase backend: billing, inventory, roles, offline sales outbox and reports. Demo data only.</p>
          </a>
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'Can you build a custom SaaS from scratch?',
    a: "Yes — that's my specialty. I've built 34 projects including BotFlow (WhatsApp automation), PropIntel AI (real estate intelligence), EduMind AI (school ERP), and Lumière (restaurant management). I handle the full stack: design, frontend, backend, AI integration, and deployment.",
  },
  {
    q: 'Do you integrate AI models like Claude, GPT, or Llama?',
    a: "Absolutely. I've shipped projects with Claude API (Lumière's ARIA assistant), Groq + Llama 3 (FinancePro's bilingual advisor), and OpenAI. I build context-aware AI that actually reads your business data — not just generic chatbots.",
  },
  {
    q: 'Can you deploy production apps with authentication and database?',
    a: 'Yes. Every project I deliver includes proper auth (Supabase Auth or Firebase Auth), real database setup (PostgreSQL via Supabase or Firestore), and live deployment on Vercel/Netlify with custom domain configuration. I hand over the GitHub repo and admin access.',
  },
  {
    q: 'Can you build enterprise dashboards and admin panels?',
    a: 'That is my core specialty. NexusOS, OpenClaw, EduMind AI, and SHB FinancePro are all multi-module enterprise dashboards in my portfolio. I understand sidebar architecture, role-based access, data-heavy tables, and analytics visualization.',
  },
  {
    q: 'Do you work with startups or only established businesses?',
    a: 'Both. I love working with startups because we can move fast and the UI matters more than ever for fundraising. I also work with established businesses that need to digitize operations — like the gym, salon, and school clients in my portfolio.',
  },
  {
    q: 'How long does a typical project take?',
    a: "Landing pages: 3–5 days. Dashboards: 1–2 weeks. Full SaaS with AI: 3–4 weeks. I'll give you an exact timeline on our discovery call. I work in clear milestones with daily updates.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-32 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 10 — FAQ</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">Common</span>{' '}
              <span className="font-serif italic text-white">questions.</span>
            </h2>
          </div>
        </Reveal>

        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.details
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="faq-item glass rounded-xl p-6"
            >
              <summary className="flex items-center justify-between">
                <span className="text-lg font-medium text-white pr-4">{f.q}</span>
                <span className="faq-icon text-cyan-400 text-2xl font-light flex-shrink-0">+</span>
              </summary>
              <p className="mt-4 text-slate-400 text-sm leading-relaxed">{f.a}</p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
}
