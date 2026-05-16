// Flagship projects — full case study cards
export const flagshipProjects = [
  {
    id: 'openclaw',
    name: 'OpenClaw AI',
    subtitle: 'Enterprise AI Infrastructure',
    tagline: '[ AGENT FLEET STATUS ]',
    tags: ['Flagship', 'AI Orchestration', 'Enterprise'],
    flagshipBadge: true,
    problem:
      'Enterprises struggle to orchestrate multiple AI agents, channels, and infrastructure from one interface.',
    solution:
      'A complete AI agent infrastructure platform — multi-agent orchestration, session analytics, Docker container management, channel integrations (Telegram, Slack, Twilio, Gmail), token cost tracking, and real-time terminal.',
    stack: ['React', 'Tailwind', 'Claude API', 'Docker', 'WebSockets'],
    impact: ['Multi-agent orchestration', 'Session cost analytics', '8+ channel integrations'],
    link: 'https://openclaw-dashboard-livid.vercel.app/',
    domain: 'openclaw-dashboard-livid.vercel.app',
    gradient: 'cyan',
    extraBadges: [
      { text: '● 12 ACTIVE', color: 'green' },
      { text: '● ORCHESTRATING', color: 'cyan' },
    ],
  },
  {
    id: 'nexus',
    name: 'Nexus OS',
    subtitle: 'Cinematic AI Operations Dashboard',
    tagline: '[ ENTERPRISE AI PLATFORM ]',
    tags: ['Dashboard', 'Enterprise SaaS', 'AI Systems'],
    problem:
      'AI startups need a visual command center that conveys sophistication and operational depth to enterprise buyers.',
    solution:
      'Silicon Valley-grade operations dashboard with command center, AI workspace, agent hub, automation builder, semantic memory, and dev console — designed to create emotional impact.',
    stack: ['Next.js', 'Tailwind', 'Framer Motion', 'Recharts'],
    impact: ['Cinematic UI system', 'Visual workflow builder', 'Semantic vector memory'],
    link: 'https://nexus-os-dashboard.vercel.app/',
    domain: 'nexus-os-dashboard.vercel.app',
    gradient: 'cyan',
  },
  {
    id: 'edumind',
    name: 'EduMind AI',
    subtitle: 'School Management System',
    tagline: '[ AI EDUCATION ERP ]',
    tags: ['EdTech ERP', '13 Modules', 'AI Alerts'],
    problem:
      "Schools run on spreadsheets, missing critical drops in attendance and fee payments until it's too late.",
    solution:
      'Complete school management ERP — student records, attendance, exams, report cards, teacher management, fees, parent portal, AI alerts, and SMS broadcasting. 13 connected modules, not 13 disconnected tools.',
    stack: ['React', 'Supabase', 'Tailwind', 'SMS Gateway'],
    impact: ['13 connected modules', 'AI-driven alerts', 'Automated parent SMS'],
    link: 'https://schoolsystem-wine.vercel.app/',
    domain: 'schoolsystem-wine.vercel.app',
    gradient: 'cyan',
  },
  {
    id: 'mandiflow',
    name: 'MandiFlow',
    subtitle: 'Wholesale Marketplace SaaS',
    tagline: '[ LIVE MANDI · BOLI ACTIVE ]',
    tags: ['Niche SaaS', 'Financial ERP', 'Marketplace'],
    problem:
      'Wholesale vegetable markets in Pakistan rely on paper ledgers — losing track of auctions, party balances, and bardana movement.',
    solution:
      'Premium SaaS designed specifically for Sabzi Mandi ecosystem — auction (boli) management, party directory, financial ledger (khata), bardana tracking, and live mandi analytics.',
    stack: ['React', 'Tailwind', 'Firebase', 'Charts'],
    impact: ['Digital auction workflow', 'Live ledger system', 'Pakistan-specific UX'],
    link: 'https://sabzi-mandi-google.vercel.app/',
    domain: 'sabzi-mandi-google.vercel.app',
    gradient: 'green',
  },
  {
    id: 'lumiere',
    name: 'Lumière Management',
    subtitle: 'Restaurant Management Suite',
    tagline: '[ ARIA AI · CLAUDE POWERED ]',
    tags: ['Luxury SaaS', 'Claude AI', 'Operations'],
    problem:
      'Fine-dining restaurants juggle reservations, inventory, staff, and VIP service across disconnected tools.',
    solution:
      'Premium operations platform with floor plan, reservations, inventory, and ARIA AI — context-aware Claude-powered assistant for wine pairings, allergen detection, and kitchen optimization.',
    stack: ['React', 'Claude API', 'Tailwind', 'Supabase'],
    impact: ['Claude-powered AI assistant', 'Wine + allergen intelligence', 'Live alerts system'],
    link: 'https://international-resturant.vercel.app/',
    domain: 'international-resturant.vercel.app',
    gradient: 'gold',
  },
  {
    id: 'botflow',
    name: 'BotFlow AI',
    subtitle: 'WhatsApp Automation Suite',
    tagline: '[ WA CONNECTED · 84K MSGS ]',
    tags: ['Automation', 'WhatsApp API', 'SaaS'],
    problem:
      "Businesses lose customers when human agents can't respond fast enough on WhatsApp. Existing tools are fragmented.",
    solution:
      'All-in-one WhatsApp automation — 8 specialized bots (E-Commerce, Support, Booking, Lead Gen), visual flow builder, broadcast campaigns, 12K+ contacts management, and 7+ integrations.',
    stack: ['React', 'WhatsApp API', 'Supabase', 'Shopify', 'Stripe'],
    impact: ['8 specialized bot types', '12K+ contacts managed', '7+ third-party integrations'],
    link: 'https://whatsaapp-bot.vercel.app/',
    domain: 'whatsaapp-bot.vercel.app',
    gradient: 'green',
  },
  {
    id: 'finance',
    name: 'SHB FinancePro',
    subtitle: 'Business Finance + AI Advisor',
    tagline: '[ FINANCEGPT · GROQ AI ]',
    tags: ['Finance AI', 'Bilingual', 'Multi-business'],
    problem:
      'Small business owners need real-time financial insights but spreadsheet tools are too complex and English-only.',
    solution:
      'Complete business finance suite with invoices, credit tracker, transactions, and FinanceGPT — bilingual (Urdu + English) AI financial advisor that reads your business data and gives contextual advice.',
    stack: ['Next.js', 'Groq', 'Llama 3', 'Supabase'],
    impact: ['Bilingual AI advisor', 'Real-time data analysis', 'Multi-business support'],
    link: 'https://financegpt-seven.vercel.app/',
    domain: 'financegpt-seven.vercel.app',
    gradient: 'cyan',
  },
  {
    id: 'propintel',
    name: 'PropIntel AI',
    subtitle: 'Real Estate Intelligence',
    tagline: '[ 50+ COUNTRIES · BILINGUAL AI ]',
    tags: ['Real Estate', 'CRM + AI', 'Global'],
    problem:
      'Real estate investors need instant cross-market intelligence in their own language. Existing tools are English-only and US-focused.',
    solution:
      'AI-powered real estate intelligence — 50+ country coverage, live market ticker, ROI calculator, property comparison, CRM with lead pipeline, and bilingual (Urdu + English) AI advisor. Bloomberg-terminal aesthetic.',
    stack: ['React', 'Groq', 'Llama 3', 'Recharts'],
    impact: ['50+ country coverage', 'Live market ticker', 'Bilingual investment AI'],
    link: 'https://propintel-azure.vercel.app/',
    domain: 'propintel-azure.vercel.app',
    gradient: 'gold',
  },
];

// Secondary projects — compact cards
export const moreProjects = [
  {
    name: 'EduBot Pro',
    tag: 'AI Workflow',
    desc: 'AI examination paper generator with multi-step workflow. Bilingual AI tutor for Pakistan boards.',
    stack: ['React', 'Claude', 'Tailwind'],
    link: 'https://edubot-pro.vercel.app/',
  },
  {
    name: 'EstateWrite AI',
    tag: 'AI Content',
    desc: 'Niche AI content generator for real estate — listings, social posts, emails, blogs, agent bios.',
    stack: ['React', 'Groq', 'Tailwind'],
    link: 'https://e-state-write.vercel.app/',
  },
  {
    name: 'BookEase Pro',
    tag: 'Booking SaaS',
    desc: 'Complete salon management — appointments, clients CRM, services, staff, invoices, analytics.',
    stack: ['React', 'Tailwind', 'Supabase'],
    link: 'https://bookeasepro.vercel.app/',
  },
  {
    name: 'ShopAdmin',
    tag: 'E-commerce',
    desc: 'Shopify-style store dashboard — products, orders, discounts, analytics.',
    stack: ['React', 'Tailwind', 'Charts'],
    link: 'https://shopadmin-jade.vercel.app/',
  },
  {
    name: 'Iron Gym Pro',
    tag: 'Offline ERP',
    desc: 'Gym management with offline mode, WhatsApp reminders, and data backup/restore.',
    stack: ['React', 'PWA', 'WA API'],
    link: 'https://irongympro.vercel.app/',
  },
  {
    name: 'StoreOS',
    tag: 'POS + ERP',
    desc: 'Complete retail POS with barcode generator, receipt printing, inventory, HR, expenses.',
    stack: ['React', 'Supabase', 'JsBarcode'],
    link: 'https://store-os-omega.vercel.app/',
  },
  {
    name: 'MandiPro',
    tag: 'POS Niche',
    desc: 'Wholesale market POS with inventory, digital khata, quick billing, vendor management.',
    stack: ['React', 'Firebase', 'Tailwind'],
    link: 'https://sabzi-mandi-anti-pi.vercel.app/',
  },
  {
    name: 'LexBook Pro',
    tag: 'LegalTech',
    desc: 'Legal management SaaS for law firms with case workflows and client management.',
    stack: ['Next.js', 'PostgreSQL', 'Tailwind'],
    link: 'https://lex-book.vercel.app/',
  },
  {
    name: 'Sky Wings Travel',
    tag: 'Travel',
    desc: 'Premium travel agency platform with flight booking UI, destinations, packages.',
    stack: ['React', 'Tailwind', 'WA API'],
    link: 'https://skywings-seven.vercel.app/',
  },
  {
    name: 'Noor Academy',
    tag: 'Premium Brand',
    desc: 'Premium Islamic learning platform with luxury dark + gold theme and enrollment flows.',
    stack: ['React', 'Tailwind', 'Framer'],
    link: 'https://noor-academy-zeta.vercel.app/',
  },
  {
    name: 'Lumière Essentials',
    tag: 'Luxury E-comm',
    desc: 'Editorial luxury e-commerce — premium cosmetics with cart drawer, filters, testimonials.',
    stack: ['Next.js', 'Stripe', 'Tailwind'],
    link: 'https://lumiere-website-xi.vercel.app/',
  },
  {
    name: 'Aqra Academy',
    tag: 'Education',
    desc: 'Clean modern Islamic education platform with courses, pricing, and live classes.',
    stack: ['React', 'Tailwind', 'Responsive'],
    link: 'https://teching-blush.vercel.app/',
  },
];
