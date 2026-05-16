import React from 'react';

const baseSvgProps = {
  viewBox: '0 0 400 240',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid slice',
  style: { width: '100%', height: '100%', display: 'block' },
};

// Browser-style frame helper
function BrowserFrame({ children, url, bg = '#0a0f17' }) {
  return (
    <g>
      <rect width="400" height="240" fill={bg} />
      {/* Browser bar */}
      <rect x="0" y="0" width="400" height="22" fill="rgba(0,0,0,0.4)" />
      <circle cx="12" cy="11" r="3" fill="#ef4444" opacity="0.6" />
      <circle cx="22" cy="11" r="3" fill="#f59e0b" opacity="0.6" />
      <circle cx="32" cy="11" r="3" fill="#22c55e" opacity="0.6" />
      <rect x="44" y="5" width="200" height="12" rx="3" fill="rgba(0,0,0,0.3)" />
      <text x="50" y="14" fontFamily="monospace" fontSize="7" fill="#475569">{url}</text>
      {children}
    </g>
  );
}

// ============================================
// EDUBOT PRO — AI Exam Paper Generator
// ============================================
export function EduBotThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="edubot-pro.vercel.app" bg="#0a0a18">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">EduBot Pro</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#a78bfa">AI EXAM GENERATOR</text>

        {/* Steps */}
        {['Subject', 'Topics', 'Level', 'Generate'].map((s, i) => (
          <g key={s}>
            <circle cx={40 + i * 90} cy="80" r="10" fill={i <= 2 ? '#a78bfa' : '#1a1428'} stroke={i <= 2 ? '#a78bfa' : '#3d2f5a'} />
            <text x={40 + i * 90} y="84" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill={i <= 2 ? '#fff' : '#64748b'} textAnchor="middle">{i + 1}</text>
            <text x={40 + i * 90} y="104" fontFamily="monospace" fontSize="7" fill={i <= 2 ? '#a78bfa' : '#64748b'} textAnchor="middle">{s}</text>
            {i < 3 && <line x1={50 + i * 90} y1="80" x2={120 + i * 90} y2="80" stroke="#3d2f5a" strokeWidth="1.5" strokeDasharray="2 2" />}
          </g>
        ))}

        {/* Paper preview */}
        <rect x="20" y="120" width="360" height="108" rx="6" fill="#0f0a1c" stroke="#3d2f5a" />
        <text x="32" y="138" fontFamily="serif" fontSize="9" fontWeight="700" fill="#a78bfa">Physics — 9th Grade · Punjab Board</text>
        <text x="32" y="152" fontFamily="serif" fontSize="8" fill="#cbd5e1">Q1. Define velocity. State its SI unit. (2 marks)</text>
        <text x="32" y="166" fontFamily="serif" fontSize="8" fill="#cbd5e1">Q2. Differentiate between speed and velocity. (3 marks)</text>
        <text x="32" y="180" fontFamily="serif" fontSize="8" fill="#cbd5e1">Q3. Derive equations of motion under gravity. (5 marks)</text>
        <text x="32" y="194" fontFamily="serif" fontSize="8" fill="#cbd5e1">Q4. A car accelerates from rest at 2 m/s²...</text>

        <rect x="280" y="206" width="92" height="18" rx="9" fill="#a78bfa" />
        <text x="326" y="218" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#fff" textAnchor="middle">↓ Export PDF</text>
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// ESTATEWRITE — Real estate AI content generator
// ============================================
export function EstateWriteThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="e-state-write.vercel.app" bg="#0a1018">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">EstateWrite AI</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#22d3ee">NICHE AI · 7 CONTENT TYPES</text>

        {/* Content type chips */}
        {['Listing', 'Email', 'Social', 'Blog'].map((c, i) => (
          <g key={c}>
            <rect x={20 + i * 92} y="70" width="84" height="22" rx="4" fill={i === 0 ? '#22d3ee' : 'transparent'} opacity={i === 0 ? '0.15' : '1'} stroke={i === 0 ? '#22d3ee' : '#1a2230'} strokeOpacity={i === 0 ? '0.4' : '1'} />
            <text x={62 + i * 92} y="85" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill={i === 0 ? '#67e8f9' : '#94a3b8'} textAnchor="middle">{c}</text>
          </g>
        ))}

        {/* AI generated content */}
        <rect x="20" y="104" width="360" height="124" rx="6" fill="rgba(34,211,238,0.04)" stroke="rgba(34,211,238,0.2)" />
        <text x="32" y="124" fontFamily="serif" fontSize="11" fontWeight="700" fill="#67e8f9">Stunning 3-Bed Villa in DHA Lahore</text>
        <text x="32" y="140" fontFamily="serif" fontSize="8" fill="#cbd5e1">Step into elegance with this premium 1-kanal villa featuring</text>
        <text x="32" y="152" fontFamily="serif" fontSize="8" fill="#cbd5e1">imported Italian marble, 3 spacious bedrooms with attached</text>
        <text x="32" y="164" fontFamily="serif" fontSize="8" fill="#cbd5e1">baths, modular kitchen, and landscaped lawn. Located in the</text>
        <text x="32" y="176" fontFamily="serif" fontSize="8" fill="#cbd5e1">heart of DHA Phase 6 — moments from top schools and dining.</text>

        <line x1="32" y1="190" x2="368" y2="190" stroke="#1a2230" />
        <text x="32" y="206" fontFamily="monospace" fontSize="7" fill="#22d3ee">✦ Generated · 1.4s</text>
        <text x="32" y="218" fontFamily="monospace" fontSize="7" fill="#64748b">PKR 4.5 Cr · 1 Kanal · 3 Bed</text>
        <rect x="290" y="200" width="80" height="18" rx="9" fill="#22d3ee" />
        <text x="330" y="212" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#05080d" textAnchor="middle">↻ Regenerate</text>
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// BOOKEASE PRO — Salon booking SaaS
// ============================================
export function BookEaseThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="bookeasepro.vercel.app" bg="#0f0a18">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">BookEase Pro</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#ec4899">SALON MANAGEMENT</text>

        {/* Stats */}
        {[
          { label: 'TODAY', value: '24', c: '#ec4899' },
          { label: 'WEEK', value: '186', c: '#fff' },
          { label: 'REVENUE', value: 'Rs 84k', c: '#22c55e' },
        ].map((s, i) => (
          <g key={s.label}>
            <rect x={20 + i * 124} y="70" width="112" height="40" rx="5" fill="#1a0f1f" stroke="#3d1f3a" />
            <text x={30 + i * 124} y="84" fontFamily="monospace" fontSize="7" fill="#64748b">{s.label}</text>
            <text x={30 + i * 124} y="102" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill={s.c}>{s.value}</text>
          </g>
        ))}

        {/* Calendar grid (mini weekly) */}
        <text x="20" y="130" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fff">Mon · 18 Apr · Schedule</text>
        {['09', '10', '11', '12', '01', '02', '03'].map((h, i) => (
          <g key={h}>
            <rect x={20 + i * 53} y="138" width="48" height="80" rx="4" fill="#0f0a18" stroke="#1a0f1f" />
            <text x={44 + i * 53} y="150" fontFamily="monospace" fontSize="7" fill="#64748b" textAnchor="middle">{h}</text>
            {/* Bookings */}
            {[
              { i: 0, top: 158, h: 18, label: 'Haircut', c: '#ec4899' },
              { i: 1, top: 158, h: 36, label: 'Color', c: '#a78bfa' },
              { i: 2, top: 178, h: 18, label: 'Mani', c: '#22d3ee' },
              { i: 3, top: 158, h: 50, label: 'Bridal', c: '#fbbf24' },
              { i: 5, top: 168, h: 28, label: 'Cut', c: '#ec4899' },
              { i: 6, top: 158, h: 22, label: 'Spa', c: '#22c55e' },
            ]
              .filter((b) => b.i === i)
              .map((b, k) => (
                <g key={k}>
                  <rect x={22 + i * 53} y={b.top} width="44" height={b.h} rx="3" fill={b.c} opacity="0.3" />
                  <rect x={22 + i * 53} y={b.top} width="2" height={b.h} fill={b.c} />
                  <text x={28 + i * 53} y={b.top + 11} fontFamily="sans-serif" fontSize="6" fontWeight="700" fill={b.c}>{b.label}</text>
                </g>
              ))}
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// SHOPADMIN — Shopify-style dashboard
// ============================================
export function ShopAdminThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="shopadmin-jade.vercel.app" bg="#081410">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">ShopAdmin</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#22c55e">E-COMMERCE DASHBOARD</text>

        {/* Stats */}
        {[
          { label: 'ORDERS', value: '284', sub: '↗ 12%', c: '#22c55e' },
          { label: 'REVENUE', value: '$8.4k', sub: '↗ 18%', c: '#22d3ee' },
          { label: 'PRODUCTS', value: '142', sub: '12 low', c: '#fbbf24' },
        ].map((s, i) => (
          <g key={s.label}>
            <rect x={20 + i * 124} y="70" width="112" height="48" rx="5" fill="#0a1410" stroke="#1a2a20" />
            <text x={30 + i * 124} y="84" fontFamily="monospace" fontSize="7" fill="#64748b">{s.label}</text>
            <text x={30 + i * 124} y="104" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill={s.c}>{s.value}</text>
            <text x={30 + i * 124} y="114" fontFamily="monospace" fontSize="6" fill={s.c} opacity="0.8">{s.sub}</text>
          </g>
        ))}

        {/* Revenue chart */}
        <rect x="20" y="128" width="240" height="100" rx="5" fill="#0a1410" stroke="#1a2a20" />
        <text x="32" y="144" fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#cbd5e1">Sales · 30 days</text>
        <polyline
          points="32,210 60,200 90,205 120,180 150,190 180,170 210,165 240,150"
          fill="none"
          stroke="#22c55e"
          strokeWidth="1.5"
        />
        <polyline
          points="32,210 60,200 90,205 120,180 150,190 180,170 210,165 240,150 240,222 32,222"
          fill="#22c55e"
          opacity="0.15"
        />

        {/* Top products */}
        <rect x="268" y="128" width="112" height="100" rx="5" fill="#0a1410" stroke="#1a2a20" />
        <text x="276" y="144" fontFamily="monospace" fontSize="7" fill="#22c55e">TOP PRODUCTS</text>
        {[
          { name: 'T-Shirt', val: 84 },
          { name: 'Hoodie', val: 62 },
          { name: 'Cap', val: 38 },
          { name: 'Mug', val: 22 },
        ].map((p, i) => (
          <g key={p.name}>
            <text x="276" y={160 + i * 16} fontFamily="sans-serif" fontSize="7" fill="#cbd5e1">{p.name}</text>
            <rect x="316" y={154 + i * 16} width="50" height="6" rx="2" fill="#1a2a20" />
            <rect x="316" y={154 + i * 16} width={p.val * 0.6} height="6" rx="2" fill="#22c55e" />
            <text x="370" y={160 + i * 16} fontFamily="monospace" fontSize="6" fill="#86efac" textAnchor="end">{p.val}</text>
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// IRON GYM PRO — Gym management with offline mode
// ============================================
export function IronGymThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="irongympro.vercel.app" bg="#100a08">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">Iron Gym Pro</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#f97316">OFFLINE ERP · PWA</text>

        {/* Offline indicator */}
        <rect x="280" y="38" width="92" height="22" rx="11" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.3)" />
        <circle cx="294" cy="49" r="3" fill="#22c55e" />
        <text x="304" y="52" fontFamily="monospace" fontSize="8" fill="#86efac">OFFLINE OK</text>

        {/* Member stats */}
        <rect x="20" y="72" width="172" height="60" rx="5" fill="#1a100a" stroke="#3d220f" />
        <text x="30" y="86" fontFamily="monospace" fontSize="7" fill="#64748b">TOTAL MEMBERS</text>
        <text x="30" y="108" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#f97316">284</text>
        <text x="30" y="122" fontFamily="monospace" fontSize="7" fill="#22c55e">+18 this month</text>

        <rect x="200" y="72" width="172" height="60" rx="5" fill="#1a100a" stroke="#3d220f" />
        <text x="210" y="86" fontFamily="monospace" fontSize="7" fill="#64748b">PENDING FEES</text>
        <text x="210" y="108" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#ef4444">Rs 84k</text>
        <text x="210" y="122" fontFamily="monospace" fontSize="7" fill="#fbbf24">⚡ WA reminder sent · 12</text>

        {/* Member list */}
        <text x="20" y="152" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fff">Today's Check-ins</text>
        {[
          { name: 'Hamza A.', plan: 'Premium', time: '6:14 AM' },
          { name: 'Ali R.', plan: 'Standard', time: '7:02 AM' },
          { name: 'Bilal K.', plan: 'Premium', time: '7:45 AM' },
          { name: 'Usman M.', plan: 'Day Pass', time: '8:12 AM' },
        ].map((m, i) => (
          <g key={i}>
            <rect x="20" y={160 + i * 16} width="360" height="14" rx="3" fill="rgba(15,10,8,0.6)" />
            <circle cx="30" cy={167 + i * 16} r="4" fill="#f97316" opacity="0.3" />
            <text x="30" y={170 + i * 16} fontFamily="sans-serif" fontSize="6" fontWeight="700" fill="#fdba74" textAnchor="middle">{m.name[0]}</text>
            <text x="42" y={171 + i * 16} fontFamily="sans-serif" fontSize="8" fill="#cbd5e1">{m.name}</text>
            <text x="160" y={171 + i * 16} fontFamily="monospace" fontSize="7" fill="#f97316">{m.plan}</text>
            <text x="370" y={171 + i * 16} fontFamily="monospace" fontSize="7" fill="#64748b" textAnchor="end">{m.time}</text>
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// STOREOS — Retail POS with barcode
// ============================================
export function StoreOSThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="store-os-omega.vercel.app" bg="#0a0e18">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">StoreOS</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#22d3ee">POS + ERP</text>

        {/* POS terminal */}
        <rect x="20" y="68" width="200" height="160" rx="6" fill="#0f1620" stroke="#1a2230" />
        <text x="32" y="84" fontFamily="monospace" fontSize="7" fill="#22d3ee">CART · 4 ITEMS</text>

        {[
          { name: 'Rice 5kg', qty: '× 2', price: 'Rs 1,840' },
          { name: 'Oil 2L', qty: '× 1', price: 'Rs 720' },
          { name: 'Tea', qty: '× 3', price: 'Rs 480' },
          { name: 'Sugar 1kg', qty: '× 2', price: 'Rs 280' },
        ].map((it, i) => (
          <g key={i}>
            <text x="32" y={100 + i * 16} fontFamily="sans-serif" fontSize="8" fill="#cbd5e1">{it.name}</text>
            <text x="120" y={100 + i * 16} fontFamily="monospace" fontSize="7" fill="#64748b">{it.qty}</text>
            <text x="208" y={100 + i * 16} fontFamily="monospace" fontSize="8" fill="#67e8f9" textAnchor="end">{it.price}</text>
          </g>
        ))}
        <line x1="32" y1="174" x2="208" y2="174" stroke="#1a2230" />
        <text x="32" y="190" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#fff">Total</text>
        <text x="208" y="190" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#22d3ee" textAnchor="end">Rs 3,320</text>
        <rect x="32" y="200" width="176" height="20" rx="10" fill="#22d3ee" />
        <text x="120" y="214" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#05080d" textAnchor="middle">CHECKOUT · Print Receipt</text>

        {/* Barcode + scanner */}
        <rect x="232" y="68" width="148" height="78" rx="6" fill="#0f1620" stroke="#1a2230" />
        <text x="244" y="84" fontFamily="monospace" fontSize="7" fill="#22d3ee">BARCODE SCAN</text>
        {/* Barcode lines */}
        <g transform="translate(244 96)">
          {[2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2].map((w, i) => {
            const x = i === 0 ? 0 : [2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 1, 3, 1, 2].slice(0, i).reduce((a, b) => a + b + 1, 0);
            return <rect key={i} x={x} y="0" width={w} height="28" fill="#fff" />;
          })}
        </g>
        <text x="244" y="138" fontFamily="monospace" fontSize="7" fill="#cbd5e1">SKU-04821 · Rice 5kg</text>

        {/* Daily summary */}
        <rect x="232" y="156" width="148" height="72" rx="6" fill="#0f1620" stroke="#1a2230" />
        <text x="244" y="172" fontFamily="monospace" fontSize="7" fill="#22d3ee">TODAY</text>
        <text x="244" y="190" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Rs 84,200</text>
        <text x="244" y="204" fontFamily="monospace" fontSize="7" fill="#22c55e">42 transactions</text>
        <text x="244" y="218" fontFamily="monospace" fontSize="7" fill="#64748b">avg Rs 2,004</text>
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// MANDIPRO — POS-style mandi
// ============================================
export function MandiProThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="sabzi-mandi-anti-pi.vercel.app" bg="#0a1410">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">MandiPro</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#22c55e">WHOLESALE POS</text>

        {/* Stat row */}
        <rect x="20" y="68" width="172" height="50" rx="5" fill="#0a1410" stroke="#1a2a18" />
        <text x="30" y="82" fontFamily="monospace" fontSize="7" fill="#64748b">TODAY'S SALES</text>
        <text x="30" y="104" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#22c55e">Rs 1,84,500</text>

        <rect x="200" y="68" width="172" height="50" rx="5" fill="#0a1410" stroke="#1a2a18" />
        <text x="210" y="82" fontFamily="monospace" fontSize="7" fill="#64748b">UDHAR PENDING</text>
        <text x="210" y="104" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#fbbf24">Rs 64,200</text>

        {/* Quick stock grid */}
        <text x="20" y="138" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fff">Quick Bill — Stock</text>
        {[
          { name: 'Tomato', rate: '85', unit: 'kg', stock: 'high' },
          { name: 'Onion', rate: '120', unit: 'kg', stock: 'med' },
          { name: 'Potato', rate: '60', unit: 'kg', stock: 'high' },
          { name: 'Chilli', rate: '180', unit: 'kg', stock: 'low' },
          { name: 'Lemon', rate: '100', unit: 'dz', stock: 'med' },
          { name: 'Ginger', rate: '260', unit: 'kg', stock: 'med' },
        ].map((p, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const x = 20 + col * 124;
          const y = 148 + row * 42;
          const stockColor = p.stock === 'high' ? '#22c55e' : p.stock === 'med' ? '#fbbf24' : '#ef4444';
          return (
            <g key={p.name}>
              <rect x={x} y={y} width="112" height="36" rx="5" fill="#0a1410" stroke="#1a2a18" />
              <text x={x + 8} y={y + 14} fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#fff">{p.name}</text>
              <text x={x + 8} y={y + 28} fontFamily="monospace" fontSize="9" fill="#86efac">Rs {p.rate}/{p.unit}</text>
              <circle cx={x + 102} cy={y + 12} r="3" fill={stockColor} />
            </g>
          );
        })}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// LEXBOOK — Legal management
// ============================================
export function LexBookThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="lex-book.vercel.app" bg="#0e0a14">
        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">LexBook Pro</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#a78bfa">LEGAL MANAGEMENT · 12 FIRMS</text>

        {/* Case stats */}
        {[
          { label: 'ACTIVE', value: '28', c: '#22c55e' },
          { label: 'PENDING', value: '14', c: '#fbbf24' },
          { label: 'WON', value: '94', c: '#a78bfa' },
        ].map((s, i) => (
          <g key={s.label}>
            <rect x={20 + i * 124} y="70" width="112" height="44" rx="5" fill="#1a1428" stroke="#3d2f5a" />
            <text x={30 + i * 124} y="84" fontFamily="monospace" fontSize="7" fill="#64748b">{s.label}</text>
            <text x={30 + i * 124} y="106" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill={s.c}>{s.value}</text>
          </g>
        ))}

        {/* Cases list */}
        <text x="20" y="134" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#fff">Upcoming Hearings</text>
        {[
          { no: '#2026-184', client: 'Khan vs State', date: '18 Apr · 10:00', priority: 'high' },
          { no: '#2026-179', client: 'Ahmed Trading', date: '20 Apr · 11:30', priority: 'med' },
          { no: '#2026-162', client: 'Imran & Co.', date: '22 Apr · 09:00', priority: 'low' },
          { no: '#2026-158', client: 'Zara Foundation', date: '25 Apr · 14:00', priority: 'med' },
        ].map((c, i) => {
          const pc = c.priority === 'high' ? '#ef4444' : c.priority === 'med' ? '#fbbf24' : '#22c55e';
          return (
            <g key={i}>
              <rect x="20" y={142 + i * 22} width="360" height="20" rx="3" fill="rgba(26,20,40,0.6)" />
              <rect x="20" y={142 + i * 22} width="3" height="20" rx="1" fill={pc} />
              <text x="32" y={156 + i * 22} fontFamily="monospace" fontSize="7" fill={pc}>{c.no}</text>
              <text x="100" y={156 + i * 22} fontFamily="sans-serif" fontSize="8" fill="#cbd5e1">{c.client}</text>
              <text x="370" y={156 + i * 22} fontFamily="monospace" fontSize="7" fill="#a78bfa" textAnchor="end">{c.date}</text>
            </g>
          );
        })}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// SKY WINGS — Travel agency
// ============================================
export function SkyWingsThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="skywings-seven.vercel.app" bg="#0a0e1a">
        <defs>
          <linearGradient id="sw-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#1e3a8a" stopOpacity="0.4" />
            <stop offset="1" stopColor="#0a0e1a" />
          </linearGradient>
        </defs>
        <rect x="0" y="22" width="400" height="80" fill="url(#sw-sky)" />

        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">Sky Wings Travel</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#60a5fa">PREMIUM TRAVEL AGENCY</text>

        {/* Flight path */}
        <g>
          <circle cx="60" cy="86" r="4" fill="#60a5fa" />
          <text x="60" y="78" fontFamily="monospace" fontSize="7" fill="#60a5fa" textAnchor="middle">LHE</text>
          <text x="60" y="100" fontFamily="monospace" fontSize="6" fill="#94a3b8" textAnchor="middle">22:40</text>

          <path d="M 64 86 Q 200 50 336 86" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeDasharray="3 3">
            <animate attributeName="stroke-dashoffset" values="0;-12" dur="1s" repeatCount="indefinite" />
          </path>
          <text x="200" y="64" fontFamily="serif" fontSize="14">✈</text>

          <circle cx="340" cy="86" r="4" fill="#60a5fa" />
          <text x="340" y="78" fontFamily="monospace" fontSize="7" fill="#60a5fa" textAnchor="middle">DXB</text>
          <text x="340" y="100" fontFamily="monospace" fontSize="6" fill="#94a3b8" textAnchor="middle">01:20</text>
        </g>

        {/* Flight cards */}
        {[
          { airline: 'PIA', from: 'LHE', to: 'DXB', time: '3h 40m', price: 'PKR 84,500', logo: '#10b981' },
          { airline: 'Emirates', from: 'KHI', to: 'LHR', time: '8h 15m', price: 'PKR 1,84,000', logo: '#ef4444' },
          { airline: 'Qatar', from: 'ISB', to: 'NYC', time: '17h 20m', price: 'PKR 2,40,000', logo: '#7c3aed' },
        ].map((f, i) => (
          <g key={i}>
            <rect x="20" y={114 + i * 36} width="360" height="32" rx="5" fill="rgba(15,15,30,0.6)" stroke="#1a1f3a" />
            <rect x="28" y={120 + i * 36} width="24" height="20" rx="3" fill={f.logo} opacity="0.2" />
            <text x="40" y={134 + i * 36} fontFamily="sans-serif" fontSize="8" fontWeight="700" fill={f.logo} textAnchor="middle">{f.airline[0]}</text>
            <text x="60" y={128 + i * 36} fontFamily="sans-serif" fontSize="8" fontWeight="600" fill="#fff">{f.airline}</text>
            <text x="60" y={140 + i * 36} fontFamily="monospace" fontSize="6" fill="#64748b">{f.from} → {f.to} · {f.time}</text>
            <text x="370" y={134 + i * 36} fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#60a5fa" textAnchor="end">{f.price}</text>
            <text x="370" y={144 + i * 36} fontFamily="monospace" fontSize="6" fill="#22c55e" textAnchor="end">✓ Available</text>
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// NOOR ACADEMY — Premium Islamic education
// ============================================
export function NoorAcademyThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="noor-academy-zeta.vercel.app" bg="#0a0805">
        <defs>
          <linearGradient id="noor-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#fbbf24" />
            <stop offset="1" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Decorative ornament */}
        <g transform="translate(200 70)" opacity="0.6">
          <circle cx="0" cy="0" r="24" fill="none" stroke="url(#noor-gold)" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="14" fill="none" stroke="url(#noor-gold)" strokeWidth="0.5" />
          <path d="M 0 -20 L 4 0 L 0 20 L -4 0 Z" fill="url(#noor-gold)" opacity="0.3" />
          <path d="M -20 0 L 0 -4 L 20 0 L 0 4 Z" fill="url(#noor-gold)" opacity="0.3" />
        </g>

        <text x="200" y="44" fontFamily="serif" fontSize="14" fontStyle="italic" fontWeight="500" fill="url(#noor-gold)" textAnchor="middle">Noor Academy</text>
        <text x="200" y="58" fontFamily="serif" fontSize="8" fill="#92590f" textAnchor="middle" letterSpacing="2">— ISLAMIC LEARNING —</text>

        {/* Course tiles */}
        {[
          { name: 'Qur\'an Tajweed', count: '12 mod', icon: '☪' },
          { name: 'Hadith Studies', count: '8 mod', icon: '✦' },
          { name: 'Arabic Lang.', count: '24 mod', icon: '⌘' },
        ].map((c, i) => (
          <g key={c.name}>
            <rect x={20 + i * 124} y="108" width="112" height="84" rx="6" fill="rgba(15,8,4,0.8)" stroke="rgba(251,191,36,0.3)" />
            <text x={76 + i * 124} y="138" fontFamily="serif" fontSize="22" fill="url(#noor-gold)" textAnchor="middle">{c.icon}</text>
            <text x={76 + i * 124} y="162" fontFamily="serif" fontSize="9" fontWeight="600" fill="#fbbf24" textAnchor="middle">{c.name}</text>
            <text x={76 + i * 124} y="176" fontFamily="monospace" fontSize="7" fill="#92590f" textAnchor="middle">{c.count}</text>
            <rect x={36 + i * 124} y="182" width="80" height="4" rx="2" fill="rgba(251,191,36,0.15)" />
            <rect x={36 + i * 124} y="182" width={[60, 30, 50][i]} height="4" rx="2" fill="url(#noor-gold)" />
          </g>
        ))}

        <text x="200" y="214" fontFamily="serif" fontStyle="italic" fontSize="9" fill="#92590f" textAnchor="middle">"Seek knowledge from the cradle to the grave"</text>
        <line x1="120" y1="222" x2="280" y2="222" stroke="rgba(251,191,36,0.2)" />
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// LUMIÈRE ESSENTIALS — Luxury e-commerce
// ============================================
export function LumiereEssentialsThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="lumiere-website-xi.vercel.app" bg="#0a0805">
        <text x="200" y="44" fontFamily="serif" fontStyle="italic" fontSize="14" fontWeight="500" fill="#fcd34d" textAnchor="middle">Lumière</text>
        <text x="200" y="58" fontFamily="serif" fontSize="7" fill="#92590f" textAnchor="middle" letterSpacing="3">ESSENTIALS</text>

        {/* Product cards */}
        {[
          { name: 'Velvet Serum', price: '$84', tag: 'BESTSELLER' },
          { name: 'Gold Mask', price: '$120', tag: 'NEW' },
          { name: 'Rose Mist', price: '$48', tag: '' },
        ].map((p, i) => (
          <g key={p.name}>
            <rect x={20 + i * 124} y="74" width="112" height="148" rx="6" fill="rgba(15,8,4,0.8)" stroke="rgba(251,191,36,0.15)" />

            {/* Product image area */}
            <rect x={28 + i * 124} y="82" width="96" height="76" rx="4" fill="rgba(251,191,36,0.05)" />
            <g transform={`translate(${76 + i * 124} 120)`}>
              {/* Bottle shape */}
              <rect x="-12" y="-22" width="24" height="40" rx="3" fill="rgba(251,191,36,0.2)" stroke="rgba(251,191,36,0.4)" />
              <rect x="-8" y="-28" width="16" height="8" rx="2" fill="rgba(251,191,36,0.3)" />
              <text x="0" y="2" fontFamily="serif" fontSize="6" fontStyle="italic" fill="#fcd34d" textAnchor="middle">L</text>
            </g>

            {p.tag && (
              <>
                <rect x={32 + i * 124} y="86" width="48" height="12" rx="6" fill="rgba(251,191,36,0.2)" />
                <text x={56 + i * 124} y="95" fontFamily="monospace" fontSize="6" fontWeight="700" fill="#fbbf24" textAnchor="middle">{p.tag}</text>
              </>
            )}

            <text x={76 + i * 124} y="178" fontFamily="serif" fontSize="9" fontWeight="500" fill="#fff" textAnchor="middle">{p.name}</text>
            <text x={76 + i * 124} y="194" fontFamily="serif" fontSize="11" fontWeight="700" fill="#fcd34d" textAnchor="middle">{p.price}</text>
            <rect x={36 + i * 124} y="204" width="80" height="14" rx="7" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" />
            <text x={76 + i * 124} y="214" fontFamily="sans-serif" fontSize="7" fontWeight="600" fill="#fcd34d" textAnchor="middle">+ Add to bag</text>
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}

// ============================================
// AQRA ACADEMY — Education platform
// ============================================
export function AqraAcademyThumb() {
  return (
    <svg {...baseSvgProps}>
      <BrowserFrame url="teching-blush.vercel.app" bg="#0a0e14">
        <defs>
          <linearGradient id="aq-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#ec4899" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>

        <text x="20" y="44" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff">Aqra Academy</text>
        <text x="20" y="56" fontFamily="monospace" fontSize="7" fill="#ec4899">MODERN ISLAMIC EDUCATION</text>

        {/* Live class badge */}
        <rect x="280" y="38" width="92" height="22" rx="11" fill="rgba(239,68,68,0.1)" stroke="rgba(239,68,68,0.4)" />
        <circle cx="294" cy="49" r="3" fill="#ef4444">
          <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <text x="304" y="52" fontFamily="monospace" fontSize="8" fill="#fca5a5">3 LIVE NOW</text>

        {/* Course grid */}
        {[
          { name: 'Qur\'an Recitation', students: '142', level: 'Beginner', c: '#ec4899' },
          { name: 'Arabic Grammar', students: '84', level: 'Intermediate', c: '#a78bfa' },
        ].map((c, i) => (
          <g key={c.name}>
            <rect x={20 + i * 184} y="72" width="172" height="80" rx="6" fill="rgba(15,15,25,0.7)" stroke={c.c} strokeOpacity="0.3" />
            <rect x={30 + i * 184} y="82" width="44" height="44" rx="22" fill={c.c} fillOpacity="0.15" />
            <text x={52 + i * 184} y="110" fontFamily="serif" fontSize="20" fill={c.c} textAnchor="middle">☪</text>
            <text x={82 + i * 184} y="92" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#fff">{c.name}</text>
            <text x={82 + i * 184} y="106" fontFamily="monospace" fontSize="7" fill={c.c}>{c.level}</text>
            <text x={82 + i * 184} y="120" fontFamily="monospace" fontSize="7" fill="#64748b">👥 {c.students} students</text>
            <rect x={82 + i * 184} y="130" width="100" height="14" rx="7" fill={c.c} />
            <text x={132 + i * 184} y="140" fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle">Join Live →</text>
          </g>
        ))}

        {/* Pricing tiers */}
        {[
          { name: 'Basic', price: 'Free', popular: false },
          { name: 'Premium', price: '$9/mo', popular: true },
          { name: 'Family', price: '$24/mo', popular: false },
        ].map((p, i) => (
          <g key={p.name}>
            <rect x={20 + i * 124} y="164" width="112" height="60" rx="5" fill={p.popular ? 'rgba(167,139,250,0.1)' : 'rgba(15,15,25,0.5)'} stroke={p.popular ? '#a78bfa' : '#1a1f3a'} />
            {p.popular && (
              <>
                <rect x={60 + i * 124} y="158" width="32" height="11" rx="5" fill="#a78bfa" />
                <text x={76 + i * 124} y="167" fontFamily="monospace" fontSize="6" fontWeight="700" fill="#fff" textAnchor="middle">POPULAR</text>
              </>
            )}
            <text x={76 + i * 124} y="184" fontFamily="sans-serif" fontSize="9" fontWeight="700" fill="#fff" textAnchor="middle">{p.name}</text>
            <text x={76 + i * 124} y="206" fontFamily="serif" fontSize="14" fontWeight="700" fill={p.popular ? '#c4b5fd' : '#ec4899'} textAnchor="middle">{p.price}</text>
            <text x={76 + i * 124} y="218" fontFamily="monospace" fontSize="6" fill="#64748b" textAnchor="middle">choose plan →</text>
          </g>
        ))}
      </BrowserFrame>
    </svg>
  );
}
