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

const testimonials = [
  {
    quote:
      "Awais built our restaurant management system in 3 weeks. The ARIA AI assistant alone has saved us hours every day on wine pairings and guest profiling. This isn't freelance work — this is product engineering.",
    name: 'Restaurant Owner',
    role: 'Fine Dining · Dubai',
    initials: 'RM',
    gradient: 'from-cyan-400 to-cyan-600',
  },
  {
    quote:
      "We needed a real-estate intelligence platform that worked in both Urdu and English. Awais delivered something I'd compare to Bloomberg terminal. Our investors think we hired a senior US team.",
    name: 'Real Estate Consultant',
    role: 'Property Tech · Lahore',
    initials: 'RC',
    gradient: 'from-amber-400 to-amber-600',
  },
  {
    quote:
      'Our school management system was a mess of spreadsheets. Awais understood the workflow on the first call. Now parents get SMS alerts, fees get tracked automatically, and report cards print in one click.',
    name: 'School Administrator',
    role: 'Private Academy · Karachi',
    initials: 'SA',
    gradient: 'from-emerald-400 to-emerald-600',
  },
  {
    quote:
      'I needed a WhatsApp automation platform for our agency clients. Awais built BotFlow with 8 different bot types, broadcast campaigns, and Shopify integration. Our retainer clients love it.',
    name: 'Startup Founder',
    role: 'SaaS Agency · Islamabad',
    initials: 'SF',
    gradient: 'from-green-400 to-green-600',
  },
  {
    quote:
      'Most freelancers ship pretty Figma clones. Awais shipped a working POS with barcode generator, receipt printing, and Supabase backend. My team uses it daily. The offline mode is a game-changer.',
    name: 'Retail Business Owner',
    role: 'Wholesale · Multan',
    initials: 'RB',
    gradient: 'from-purple-400 to-purple-600',
  },
  {
    quote:
      'We hired Awais for a gym management system. He delivered with offline mode, WhatsApp reminders for unpaid fees, and a clean dashboard our staff actually understands. Worth every rupee.',
    name: 'Gym Owner',
    role: 'Fitness Studio · Faisalabad',
    initials: 'GO',
    gradient: 'from-orange-400 to-red-500',
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-32 border-t border-white/5 relative">
      <div
        className="glow-orb"
        style={{ width: 500, height: 500, background: '#22d3ee', top: '20%', left: '20%', opacity: 0.06 }}
      />

      <div className="max-w-7xl mx-auto px-6 relative">
        <Reveal>
          <div className="mb-16">
            <div className="section-num mb-3">/ 08 — Testimonials</div>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="gradient-text">What clients</span>{' '}
              <span className="font-serif italic text-white">are saying.</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="glass rounded-2xl p-7"
            >
              <div className="text-cyan-400 mb-4">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zm12 0c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                </svg>
              </div>
              <p className="text-slate-300 leading-relaxed mb-6 text-sm">"{t.quote}"</p>
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-[#05080d] font-semibold`}>
                  {t.initials}
                </div>
                <div>
                  <div className="text-white font-medium text-sm">{t.name}</div>
                  <div className="text-xs text-slate-500 font-mono">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'Can you build a custom SaaS from scratch?',
    a: "Yes — that's my specialty. I've built 30+ production SaaS systems including BotFlow (WhatsApp automation), PropIntel AI (real estate intelligence), EduMind AI (school ERP), and Lumière (restaurant management). I handle the full stack: design, frontend, backend, AI integration, and deployment.",
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
            <div className="section-num mb-3">/ 09 — FAQ</div>
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
