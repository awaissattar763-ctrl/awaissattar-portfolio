import React from 'react';

const baseSvgProps = {
  viewBox: '0 0 800 500',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid slice',
  style: { width: '100%', height: '100%', display: 'block' },
};

// ============================================
// LUMIÈRE — Restaurant management with floor plan
// ============================================
export function LumiereThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="lm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a1410" />
          <stop offset="1" stopColor="#0a0805" />
        </linearGradient>
        <linearGradient id="lm-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#lm-bg)" />

      {/* Top brand */}
      <text x="40" y="44" fontFamily="serif" fontStyle="italic" fontSize="28" fontWeight="500" fill="url(#lm-gold)">Lumière</text>
      <text x="40" y="62" fontFamily="monospace" fontSize="8" fill="#92590f" letterSpacing="2">MANAGEMENT SUITE</text>
      <text x="640" y="38" fontFamily="monospace" fontSize="9" fill="#fbbf24">SAT · 19:42 · DINNER</text>
      <circle cx="760" cy="34" r="4" fill="#fbbf24">
        <animate attributeName="opacity" values="1;0.3;1" dur="2s" repeatCount="indefinite" />
      </circle>

      {/* Stat strip */}
      {[
        { x: 40, label: 'COVERS TONIGHT', value: '142', sub: '↗ 18 vs last Sat' },
        { x: 220, label: 'REVENUE', value: 'AED 8,420', sub: 'avg 59 / cover' },
        { x: 400, label: 'GUEST RATING', value: '4.9 ★', sub: 'last 7 nights' },
        { x: 580, label: 'WAIT TIME', value: '0 min', sub: 'all seated' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="82" width="160" height="70" rx="6" fill="rgba(15,8,4,0.6)" stroke="rgba(251,191,36,0.15)" />
          <text x={s.x + 14} y="100" fontFamily="monospace" fontSize="8" fill="#92590f" letterSpacing="1">{s.label}</text>
          <text x={s.x + 14} y="124" fontFamily="serif" fontSize="22" fontWeight="600" fill="#fbbf24">{s.value}</text>
          <text x={s.x + 14} y="142" fontFamily="monospace" fontSize="8" fill="#94a3b8">{s.sub}</text>
        </g>
      ))}

      {/* Floor plan */}
      <text x="40" y="180" fontFamily="serif" fontSize="13" fontWeight="600" fill="#fbbf24">— Floor Plan —</text>
      <rect x="40" y="190" width="500" height="220" rx="10" fill="rgba(15,8,4,0.5)" stroke="rgba(251,191,36,0.15)" />

      {/* Tables (circles=round, rects=rect) */}
      {[
        { x: 80, y: 220, r: 18, label: '1', status: 'seated' },
        { x: 160, y: 220, r: 18, label: '2', status: 'seated' },
        { x: 240, y: 220, r: 18, label: '3', status: 'reserved' },
        { x: 320, y: 220, r: 18, label: '4', status: 'open' },
        { x: 400, y: 220, r: 18, label: '5', status: 'seated' },
        { x: 480, y: 220, r: 18, label: '6', status: 'wait' },
        { x: 80, y: 300, r: 22, label: '7', status: 'seated' },
        { x: 180, y: 300, r: 22, label: '8', status: 'seated' },
        { x: 280, y: 300, r: 22, label: '9', status: 'open' },
        { x: 380, y: 300, r: 22, label: '10', status: 'seated' },
        { x: 480, y: 300, r: 22, label: 'VIP', status: 'reserved' },
        { x: 80, y: 372, r: 18, label: '12', status: 'seated' },
        { x: 160, y: 372, r: 18, label: '13', status: 'open' },
        { x: 240, y: 372, r: 18, label: '14', status: 'seated' },
        { x: 320, y: 372, r: 18, label: '15', status: 'seated' },
        { x: 400, y: 372, r: 18, label: 'B1', status: 'open' },
        { x: 480, y: 372, r: 18, label: 'B2', status: 'seated' },
      ].map((t, i) => {
        const colors = {
          seated: { fill: '#22c55e', stroke: '#22c55e' },
          reserved: { fill: '#fbbf24', stroke: '#fbbf24' },
          open: { fill: 'transparent', stroke: '#475569' },
          wait: { fill: '#ef4444', stroke: '#ef4444' },
        };
        const c = colors[t.status];
        return (
          <g key={i}>
            <circle cx={t.x} cy={t.y} r={t.r} fill={c.fill} fillOpacity="0.15" stroke={c.stroke} strokeWidth="1.5" />
            {t.status === 'seated' && (
              <circle cx={t.x} cy={t.y} r={t.r + 4} fill="none" stroke={c.stroke} strokeOpacity="0.3">
                <animate attributeName="r" values={`${t.r};${t.r + 8};${t.r}`} dur="3s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
                <animate attributeName="stroke-opacity" values="0.3;0;0.3" dur="3s" begin={`${i * 0.1}s`} repeatCount="indefinite" />
              </circle>
            )}
            <text x={t.x} y={t.y + 4} fontFamily="sans-serif" fontSize={t.label.length > 1 ? '8' : '10'} fontWeight="700" fill={c.stroke === '#475569' ? '#94a3b8' : c.stroke} textAnchor="middle">{t.label}</text>
          </g>
        );
      })}

      {/* Legend */}
      <g transform="translate(50 425)">
        <circle cx="0" cy="0" r="5" fill="#22c55e" fillOpacity="0.3" stroke="#22c55e" />
        <text x="10" y="4" fontFamily="monospace" fontSize="8" fill="#86efac">SEATED</text>
        <circle cx="80" cy="0" r="5" fill="#fbbf24" fillOpacity="0.3" stroke="#fbbf24" />
        <text x="90" y="4" fontFamily="monospace" fontSize="8" fill="#fcd34d">RESERVED</text>
        <circle cx="180" cy="0" r="5" fill="#ef4444" fillOpacity="0.3" stroke="#ef4444" />
        <text x="190" y="4" fontFamily="monospace" fontSize="8" fill="#fca5a5">WAITING</text>
        <circle cx="270" cy="0" r="5" fill="transparent" stroke="#475569" />
        <text x="280" y="4" fontFamily="monospace" fontSize="8" fill="#64748b">OPEN</text>
      </g>

      {/* ARIA AI Panel */}
      <rect x="560" y="178" width="222" height="294" rx="10" fill="rgba(15,8,4,0.6)" stroke="rgba(251,191,36,0.25)" />
      <text x="574" y="198" fontFamily="serif" fontStyle="italic" fontSize="16" fontWeight="500" fill="#fbbf24">✦ ARIA</text>
      <text x="574" y="214" fontFamily="monospace" fontSize="8" fill="#92590f">CLAUDE-POWERED ASSISTANT</text>

      <rect x="572" y="226" width="200" height="46" rx="6" fill="rgba(251,191,36,0.05)" />
      <text x="582" y="244" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#cbd5e1">"Wine pairing for tonight's</text>
      <text x="582" y="258" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#cbd5e1">Wagyu Beef tasting menu?"</text>
      <text x="582" y="268" fontFamily="monospace" fontSize="7" fill="#64748b">— Sommelier 19:38</text>

      <rect x="572" y="282" width="200" height="76" rx="6" fill="rgba(251,191,36,0.08)" stroke="rgba(251,191,36,0.2)" />
      <text x="582" y="300" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#fbbf24">"Recommend a 2018 Barolo</text>
      <text x="582" y="314" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#fbbf24">DOCG. Tannins complement</text>
      <text x="582" y="328" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#fbbf24">the marbling. AED 480/bottle.</text>
      <text x="582" y="342" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#fbbf24">In stock: 8."</text>
      <text x="582" y="354" fontFamily="monospace" fontSize="7" fill="#92590f">— ARIA 19:38</text>

      {/* Quick prompts */}
      <text x="572" y="378" fontFamily="monospace" fontSize="8" fill="#92590f">QUICK PROMPTS</text>
      {['Allergen alerts', 'VIP briefing · T11', 'Kitchen queue', 'Reorder list'].map((p, i) => (
        <g key={i}>
          <rect x="572" y={388 + i * 20} width="200" height="16" rx="4" fill="rgba(251,191,36,0.05)" stroke="rgba(251,191,36,0.15)" />
          <text x="582" y={400 + i * 20} fontFamily="serif" fontSize="9" fill="#fcd34d">{p}</text>
          <text x="762" y={400 + i * 20} fontFamily="monospace" fontSize="8" fill="#92590f" textAnchor="end">↗</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// BOTFLOW — WhatsApp automation visual flow builder
// ============================================
export function BotFlowThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="bf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#051910" />
          <stop offset="1" stopColor="#020a06" />
        </linearGradient>
        <linearGradient id="bf-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#25D366" />
          <stop offset="1" stopColor="#128C7E" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bf-bg)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="48" fill="rgba(2,10,6,0.6)" />
      <rect x="20" y="12" width="26" height="26" rx="6" fill="url(#bf-green)" />
      <text x="33" y="30" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#05080d" textAnchor="middle">💬</text>
      <text x="54" y="26" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">BotFlow AI</text>
      <text x="54" y="40" fontFamily="monospace" fontSize="8" fill="#22c55e">WHATSAPP AUTOMATION · WA CONNECTED</text>

      <rect x="640" y="12" width="140" height="26" rx="13" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.4)" />
      <circle cx="658" cy="25" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="670" y="29" fontFamily="monospace" fontSize="9" fill="#86efac">84,217 MSGS · 24h</text>

      {/* Top stats */}
      {[
        { x: 20, label: 'TOTAL MESSAGES', value: '84,217', g: 'up 23.4%' },
        { x: 200, label: 'ACTIVE BOTS', value: '6 / 8', g: '88% live' },
        { x: 380, label: 'CONVERSION', value: '38.4%', g: 'broadcast CTR' },
        { x: 560, label: 'CONTACTS', value: '12.4k', g: '+842 this month' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="64" width="170" height="64" rx="8" fill="rgba(15,25,18,0.6)" stroke="rgba(34,197,94,0.2)" />
          <text x={s.x + 14} y="82" fontFamily="monospace" fontSize="8" fill="#16a34a" letterSpacing="1">{s.label}</text>
          <text x={s.x + 14} y="108" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#86efac">{s.value}</text>
          <text x={s.x + 14} y="122" fontFamily="monospace" fontSize="8" fill="#64748b">{s.g}</text>
        </g>
      ))}

      {/* Flow Builder canvas */}
      <text x="20" y="158" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#fff">Visual Flow Builder — E-Commerce Bot</text>
      <rect x="20" y="168" width="500" height="200" rx="8" fill="rgba(15,25,18,0.4)" stroke="rgba(34,197,94,0.15)" />

      {/* Flow nodes */}
      {[
        { x: 40, y: 196, w: 88, label: 'Trigger', sub: 'User sends msg', color: '#fbbf24' },
        { x: 152, y: 196, w: 88, label: 'Welcome', sub: 'Greet user', color: '#22c55e' },
        { x: 264, y: 196, w: 88, label: 'Intent', sub: 'Keyword match', color: '#22d3ee' },
        { x: 376, y: 196, w: 88, label: 'Products', sub: 'Show catalog', color: '#a78bfa' },
        { x: 40, y: 276, w: 88, label: 'Add Cart?', sub: 'Yes / No', color: '#f59e0b' },
        { x: 152, y: 276, w: 88, label: 'Payment', sub: 'Checkout', color: '#22d3ee' },
        { x: 264, y: 276, w: 88, label: 'Confirm', sub: 'Send receipt', color: '#22c55e' },
      ].map((n, i) => (
        <g key={i}>
          <rect x={n.x} y={n.y} width={n.w} height="56" rx="6" fill="rgba(15,25,18,0.8)" stroke={n.color} strokeOpacity="0.4" />
          <circle cx={n.x + 12} cy={n.y + 14} r="4" fill={n.color} />
          <text x={n.x + 22} y={n.y + 18} fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#fff">{n.label}</text>
          <text x={n.x + 8} y={n.y + 38} fontFamily="monospace" fontSize="8" fill="#64748b">{n.sub}</text>
          <rect x={n.x + 8} y={n.y + 44} width={n.w - 16} height="2" rx="1" fill={n.color} opacity="0.3" />
        </g>
      ))}
      {/* Arrows between flow nodes (top row) */}
      {[
        { x1: 128, x2: 152, y: 222 },
        { x1: 240, x2: 264, y: 222 },
        { x1: 352, x2: 376, y: 222 },
      ].map((a, i) => (
        <g key={i}>
          <line x1={a.x1} y1={a.y} x2={a.x2 - 4} y2={a.y} stroke="#22c55e" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points={`${a.x2 - 4},${a.y - 3} ${a.x2},${a.y} ${a.x2 - 4},${a.y + 3}`} fill="#22c55e" opacity="0.6" />
        </g>
      ))}
      {/* Arrows bottom row */}
      {[
        { x1: 128, x2: 152, y: 302 },
        { x1: 240, x2: 264, y: 302 },
      ].map((a, i) => (
        <g key={i}>
          <line x1={a.x1} y1={a.y} x2={a.x2 - 4} y2={a.y} stroke="#22c55e" strokeOpacity="0.5" strokeWidth="1.5" />
          <polygon points={`${a.x2 - 4},${a.y - 3} ${a.x2},${a.y} ${a.x2 - 4},${a.y + 3}`} fill="#22c55e" opacity="0.6" />
        </g>
      ))}

      {/* Live conversation panel */}
      <rect x="540" y="138" width="244" height="334" rx="10" fill="rgba(15,25,18,0.5)" stroke="rgba(34,197,94,0.2)" />
      <text x="556" y="160" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">Live Conversation</text>
      <text x="556" y="174" fontFamily="monospace" fontSize="8" fill="#22c55e">● Zara Ahmed · WhatsApp</text>

      {/* Bot message */}
      <rect x="556" y="190" width="170" height="38" rx="8" fill="rgba(34,197,94,0.12)" />
      <text x="566" y="206" fontFamily="sans-serif" fontSize="9" fill="#86efac">Hi! 👋 Browse our catalog:</text>
      <text x="566" y="218" fontFamily="sans-serif" fontSize="9" fill="#86efac">1 Heels · 2 Flats · 3 Sneakers</text>
      <text x="556" y="234" fontFamily="monospace" fontSize="7" fill="#475569">BOT · 18:42</text>

      {/* User message */}
      <rect x="612" y="244" width="160" height="22" rx="8" fill="rgba(15,25,18,0.8)" />
      <text x="622" y="260" fontFamily="sans-serif" fontSize="9" fill="#cbd5e1">1, please show me heels</text>
      <text x="762" y="270" fontFamily="monospace" fontSize="7" fill="#475569" textAnchor="end">18:42</text>

      {/* Bot response with product cards */}
      <rect x="556" y="278" width="170" height="92" rx="8" fill="rgba(34,197,94,0.12)" />
      <text x="566" y="294" fontFamily="sans-serif" fontSize="9" fill="#86efac">Here are our top heels:</text>
      <rect x="566" y="300" width="52" height="52" rx="4" fill="#1a2a18" />
      <text x="592" y="332" fontFamily="serif" fontSize="14" fontWeight="700" fill="#fbbf24" textAnchor="middle">★</text>
      <text x="624" y="312" fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#86efac">Velvet Pump</text>
      <text x="624" y="324" fontFamily="monospace" fontSize="8" fill="#cbd5e1">Rs 4,500</text>
      <text x="624" y="338" fontFamily="monospace" fontSize="7" fill="#64748b">in stock · 12</text>
      <rect x="624" y="346" width="56" height="14" rx="3" fill="#22c55e" />
      <text x="652" y="356" fontFamily="sans-serif" fontSize="8" fontWeight="700" fill="#05080d" textAnchor="middle">+ Add to cart</text>

      {/* Order summary */}
      <rect x="556" y="384" width="216" height="76" rx="8" fill="rgba(15,25,18,0.8)" stroke="rgba(34,197,94,0.2)" />
      <text x="566" y="402" fontFamily="monospace" fontSize="8" fill="#22c55e">ORDER #1847 — CONFIRMED</text>
      <text x="566" y="418" fontFamily="sans-serif" fontSize="9" fill="#cbd5e1">Velvet Pump × 1 ............ Rs 4,500</text>
      <text x="566" y="432" fontFamily="sans-serif" fontSize="9" fill="#cbd5e1">Delivery (2–3 din) ........ Rs 250</text>
      <line x1="566" y1="438" x2="762" y2="438" stroke="#1a2a18" />
      <text x="566" y="452" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#fff">Total</text>
      <text x="762" y="452" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#22c55e" textAnchor="end">Rs 4,750</text>

      {/* Bottom: Bot grid */}
      <text x="20" y="392" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">Active Bots</text>
      {['E-Comm', 'Support', 'Booking', 'FAQ', 'Lead Gen'].map((b, i) => (
        <g key={b}>
          <rect x={20 + i * 100} y={400} width="90" height="64" rx="6" fill="rgba(15,25,18,0.6)" stroke="rgba(34,197,94,0.2)" />
          <circle cx={32 + i * 100} cy={414} r="3" fill="#22c55e">
            <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
          </circle>
          <text x={40 + i * 100} y={418} fontFamily="sans-serif" fontSize="9" fontWeight="600" fill="#cbd5e1">{b}</text>
          <text x={26 + i * 100} y={436} fontFamily="monospace" fontSize="14" fontWeight="700" fill="#86efac">{[24, 18, 11, 6, 8][i]}k</text>
          <text x={26 + i * 100} y={448} fontFamily="monospace" fontSize="7" fill="#64748b">messages</text>
          <text x={26 + i * 100} y={460} fontFamily="monospace" fontSize="7" fill="#22c55e">{['96', '91', '88', '79', '72'][i]}% rate</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// FINANCEPRO (SHB) — Finance dashboard with AI advisor
// ============================================
export function FinanceProThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="fp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1019" />
          <stop offset="1" stopColor="#020510" />
        </linearGradient>
        <linearGradient id="fp-cyan" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </linearGradient>
        <linearGradient id="fp-purple" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#fp-bg)" />

      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="500" fill="#050a14" opacity="0.8" />
      <text x="20" y="36" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">SHB FinancePro</text>
      <text x="20" y="52" fontFamily="monospace" fontSize="8" fill="#22d3ee">v2.0 · BUSINESS SUITE</text>

      <rect x="14" y="68" width="132" height="40" rx="6" fill="#0f1620" />
      <text x="22" y="84" fontFamily="monospace" fontSize="8" fill="#64748b">ACTIVE BUSINESS</text>
      <circle cx="24" cy="98" r="3" fill="#22c55e" />
      <text x="32" y="101" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">SHB Imports</text>

      {[
        { label: 'Dashboard', sel: true },
        { label: 'Invoices' },
        { label: 'Credit Tracker' },
        { label: 'Transactions' },
        { label: 'Analytics' },
        { label: '✦ AI Assistant', ai: true },
      ].map((l, i) => (
        <g key={l.label}>
          <rect x="12" y={130 + i * 30} width="136" height="22" rx="5" fill={l.sel || l.ai ? '#22d3ee' : 'transparent'} opacity={l.sel ? '0.15' : (l.ai ? '0.08' : '1')} />
          <text x="24" y={144 + i * 30} fontFamily="sans-serif" fontSize="11" fill={l.sel ? '#67e8f9' : (l.ai ? '#a78bfa' : '#94a3b8')}>{l.label}</text>
          {l.ai && <circle cx="140" cy={141 + i * 30} r="3" fill="#a78bfa" />}
        </g>
      ))}

      {/* Title */}
      <text x="180" y="38" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#fff">Dashboard</text>

      {/* Stat cards */}
      {[
        { x: 180, label: 'TOTAL REVENUE', value: 'Rs 28.4L', c: '#22c55e', sub: '↗ 12.4% MoM' },
        { x: 332, label: 'EXPENSES', value: 'Rs 12.8L', c: '#a78bfa', sub: '↗ 5.1%' },
        { x: 484, label: 'NET PROFIT', value: 'Rs 15.6L', c: '#22d3ee', sub: '↗ 18.2%' },
        { x: 636, label: 'OUTSTANDING', value: 'Rs 4.2L', c: '#fbbf24', sub: '12 invoices' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="56" width="140" height="74" rx="8" fill="#0f1620" stroke="#1a2230" />
          <text x={s.x + 14} y="76" fontFamily="monospace" fontSize="8" fill="#64748b" letterSpacing="1">{s.label}</text>
          <text x={s.x + 14} y="102" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill={s.c}>{s.value}</text>
          <text x={s.x + 14} y="120" fontFamily="monospace" fontSize="8" fill={s.c} opacity="0.8">{s.sub}</text>
        </g>
      ))}

      {/* Income vs Expenses chart */}
      <rect x="180" y="146" width="406" height="180" rx="8" fill="#0f1620" stroke="#1a2230" />
      <text x="196" y="168" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#fff">Income vs Expenses · 6 months</text>
      <g transform="translate(196 184)">
        {/* Y axis labels */}
        {[0, 25, 50, 75, 100].map((p, i) => (
          <g key={i}>
            <text x="0" y={120 - i * 28 + 4} fontFamily="monospace" fontSize="8" fill="#475569">{p === 0 ? '0' : `${p * 10}k`}</text>
            <line x1="22" y1={120 - i * 28} x2="380" y2={120 - i * 28} stroke="#1a2230" strokeWidth="0.5" />
          </g>
        ))}
        {/* Bars: Nov, Dec, Jan, Feb, Mar, Apr */}
        {['Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr'].map((m, i) => {
          const inc = [60, 65, 58, 72, 68, 88][i];
          const exp = [30, 38, 34, 42, 36, 48][i];
          return (
            <g key={m} transform={`translate(${30 + i * 58} 0)`}>
              <rect x="0" y={120 - inc} width="20" height={inc} rx="2" fill="url(#fp-cyan)" />
              <rect x="22" y={120 - exp} width="20" height={exp} rx="2" fill="url(#fp-purple)" />
              <text x="22" y="138" fontFamily="monospace" fontSize="8" fill="#64748b" textAnchor="middle">{m}</text>
            </g>
          );
        })}
      </g>
      {/* Legend */}
      <rect x="500" y="158" width="10" height="10" rx="2" fill="#22d3ee" />
      <text x="514" y="167" fontFamily="monospace" fontSize="8" fill="#cbd5e1">Income</text>
      <rect x="500" y="174" width="10" height="10" rx="2" fill="#a78bfa" />
      <text x="514" y="183" fontFamily="monospace" fontSize="8" fill="#cbd5e1">Expenses</text>

      {/* Expense breakdown donut */}
      <rect x="600" y="146" width="184" height="180" rx="8" fill="#0f1620" stroke="#1a2230" />
      <text x="614" y="168" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">Expense Breakdown</text>
      {/* Donut */}
      <g transform="translate(692 226)">
        <circle cx="0" cy="0" r="38" fill="#0a0f17" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#22c55e" strokeWidth="10" strokeDasharray="100 226" transform="rotate(-90)" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#a78bfa" strokeWidth="10" strokeDasharray="68 226" transform="rotate(64)" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#fbbf24" strokeWidth="10" strokeDasharray="42 226" transform="rotate(174)" />
        <circle cx="0" cy="0" r="36" fill="none" stroke="#ef4444" strokeWidth="10" strokeDasharray="16 226" transform="rotate(241)" />
        <text x="0" y="-2" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">12.8L</text>
        <text x="0" y="10" fontFamily="monospace" fontSize="7" fill="#64748b" textAnchor="middle">TOTAL</text>
      </g>
      {[
        { label: 'Stock', pct: '44%', c: '#22c55e' },
        { label: 'Operations', pct: '30%', c: '#a78bfa' },
        { label: 'Salaries', pct: '19%', c: '#fbbf24' },
        { label: 'Other', pct: '7%', c: '#ef4444' },
      ].map((row, i) => (
        <g key={row.label}>
          <circle cx="616" cy={282 + i * 11} r="3" fill={row.c} />
          <text x="624" y={285 + i * 11} fontFamily="monospace" fontSize="8" fill="#cbd5e1">{row.label}</text>
          <text x="772" y={285 + i * 11} fontFamily="monospace" fontSize="8" fill={row.c} textAnchor="end">{row.pct}</text>
        </g>
      ))}

      {/* AI Assistant bottom panel */}
      <rect x="180" y="342" width="604" height="140" rx="10" fill="#0f1620" stroke="#a78bfa" strokeOpacity="0.4" />
      <g transform="translate(196 360)">
        <circle cx="0" cy="0" r="10" fill="url(#fp-purple)" />
        <text x="0" y="3" fontFamily="serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">✦</text>
        <text x="18" y="0" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#fff">FinanceGPT</text>
        <text x="18" y="14" fontFamily="monospace" fontSize="8" fill="#a78bfa">POWERED BY GROQ · LLAMA 3.3 70B · BILINGUAL</text>
      </g>

      <rect x="196" y="386" width="572" height="42" rx="6" fill="rgba(167,139,250,0.06)" />
      <text x="208" y="404" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#cbd5e1">"Aap ki April revenue mein 22% ka jump hua hai — outstanding receivables clear karne se cash flow</text>
      <text x="208" y="418" fontFamily="serif" fontStyle="italic" fontSize="10" fill="#cbd5e1">aur improve ho jayegi. Top 3 pending: Akbar Trading (Rs 84k), Sialkot Supp. (Rs 62k), Khan Bros. (Rs 38k)."</text>

      {['Financial Summary', 'Cash Flow Tips', 'Overdue Invoices', 'Profit Analysis'].map((p, i) => (
        <g key={p}>
          <rect x={196 + i * 144} y="442" width="136" height="28" rx="14" fill="rgba(167,139,250,0.08)" stroke="rgba(167,139,250,0.25)" />
          <text x={264 + i * 144} y="460" fontFamily="sans-serif" fontSize="9" fill="#c4b5fd" textAnchor="middle">{p}</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// PROPINTEL — Real estate intelligence (Bloomberg-style)
// ============================================
export function PropIntelThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="pi-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#14110a" />
          <stop offset="1" stopColor="#0a0805" />
        </linearGradient>
        <linearGradient id="pi-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fbbf24" />
          <stop offset="1" stopColor="#d97706" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#pi-bg)" />

      {/* Top bar */}
      <rect x="0" y="0" width="800" height="44" fill="#08060a" />
      <rect x="20" y="10" width="28" height="24" rx="4" fill="url(#pi-gold)" />
      <text x="34" y="28" fontFamily="serif" fontSize="14" fontWeight="700" fill="#0a0805" textAnchor="middle">P</text>
      <text x="56" y="22" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">PropIntel AI</text>
      <text x="56" y="36" fontFamily="monospace" fontSize="8" fill="#fbbf24">REAL ESTATE INTELLIGENCE</text>

      <rect x="640" y="10" width="140" height="24" rx="12" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.4)" />
      <circle cx="658" cy="22" r="3" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="670" y="26" fontFamily="monospace" fontSize="8" fill="#86efac">LIVE · 50+ COUNTRIES</text>

      {/* Live ticker */}
      <rect x="0" y="44" width="800" height="22" fill="rgba(15,8,4,0.7)" />
      {[
        { flag: '🇦🇪', city: 'Dubai', price: '$450', y: '6.8%', up: true },
        { flag: '🇬🇧', city: 'London', price: '£850', y: '4.2%', up: false },
        { flag: '🇺🇸', city: 'New York', price: '$1,200', y: '3.7%', up: true },
        { flag: '🇸🇬', city: 'Singapore', price: 'S$1,800', y: '3.5%', up: true },
        { flag: '🇵🇰', city: 'Lahore', price: 'PKR 45k', y: '5.2%', up: true },
        { flag: '🇨🇦', city: 'Toronto', price: 'C$950', y: '3.9%', up: false },
      ].map((t, i) => (
        <g key={i}>
          <text x={16 + i * 130} y="60" fontFamily="sans-serif" fontSize="10">{t.flag}</text>
          <text x={36 + i * 130} y="60" fontFamily="sans-serif" fontSize="10" fontWeight="600" fill="#cbd5e1">{t.city}</text>
          <text x={92 + i * 130} y="60" fontFamily="monospace" fontSize="9" fill="#fbbf24">{t.price}</text>
          <text x={92 + i * 130} y="60" fontFamily="monospace" fontSize="9" fill={t.up ? '#22c55e' : '#ef4444'} dx="42">{t.up ? '▲' : '▼'} {t.y}</text>
        </g>
      ))}

      {/* Sidebar metrics */}
      <g transform="translate(20 84)">
        {[
          { label: 'COUNTRIES', value: '50+', icon: '🌍' },
          { label: 'METRICS', value: '25+', icon: '📊' },
          { label: 'ACCURACY', value: '98%', icon: '🎯' },
        ].map((m, i) => (
          <g key={m.label}>
            <rect x="0" y={i * 70} width="140" height="60" rx="6" fill="rgba(15,8,4,0.6)" stroke="rgba(251,191,36,0.2)" />
            <text x="14" y={i * 70 + 22} fontFamily="sans-serif" fontSize="16">{m.icon}</text>
            <text x="46" y={i * 70 + 22} fontFamily="monospace" fontSize="8" fill="#92590f" letterSpacing="1">{m.label}</text>
            <text x="46" y={i * 70 + 44} fontFamily="serif" fontSize="20" fontWeight="700" fill="#fbbf24">{m.value}</text>
          </g>
        ))}
      </g>

      {/* AI chat panel */}
      <rect x="180" y="84" width="406" height="220" rx="8" fill="rgba(15,8,4,0.5)" stroke="rgba(251,191,36,0.2)" />
      <text x="196" y="106" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">AI Agent · Investment Analysis</text>
      <text x="572" y="106" fontFamily="monospace" fontSize="8" fill="#fbbf24" textAnchor="end">Urdu / English</text>

      {/* User query */}
      <rect x="196" y="118" width="374" height="36" rx="6" fill="rgba(251,191,36,0.06)" />
      <text x="206" y="134" fontFamily="sans-serif" fontSize="9" fill="#cbd5e1">"Analyze Dubai real estate ROI 2026. Best areas for rental income?"</text>
      <text x="206" y="148" fontFamily="monospace" fontSize="7" fill="#92590f">USER · 06:04 AM</text>

      {/* AI response */}
      <text x="196" y="172" fontFamily="serif" fontStyle="italic" fontSize="10" fontWeight="600" fill="#fbbf24">PropIntel AI:</text>
      <text x="196" y="188" fontFamily="sans-serif" fontSize="9" fill="#cbd5e1">Top 3 areas by net rental yield (6-month verified data):</text>
      {[
        { rank: '1.', area: 'Downtown Dubai', yield: '6.8%', price: 'AED 1,071/sqft', risk: 'LOW' },
        { rank: '2.', area: 'Dubai Marina', yield: '7.2%', price: 'AED 980/sqft', risk: 'MED' },
        { rank: '3.', area: 'Business Bay', yield: '6.4%', price: 'AED 870/sqft', risk: 'LOW' },
      ].map((r, i) => (
        <g key={i}>
          <rect x="196" y={196 + i * 30} width="374" height="24" rx="4" fill="rgba(15,8,4,0.7)" />
          <text x="208" y={212 + i * 30} fontFamily="monospace" fontSize="9" fontWeight="700" fill="#fbbf24">{r.rank}</text>
          <text x="228" y={212 + i * 30} fontFamily="sans-serif" fontSize="10" fill="#fff">{r.area}</text>
          <text x="352" y={212 + i * 30} fontFamily="monospace" fontSize="9" fill="#22c55e">▲ {r.yield}</text>
          <text x="426" y={212 + i * 30} fontFamily="monospace" fontSize="8" fill="#94a3b8">{r.price}</text>
          <rect x="528" y={203 + i * 30} width="36" height="14" rx="3" fill={r.risk === 'LOW' ? '#22c55e' : '#fbbf24'} opacity="0.15" />
          <text x="546" y={213 + i * 30} fontFamily="monospace" fontSize="7" fontWeight="700" fill={r.risk === 'LOW' ? '#22c55e' : '#fbbf24'} textAnchor="middle">{r.risk}</text>
        </g>
      ))}

      <text x="196" y="296" fontFamily="monospace" fontSize="7" fill="#92590f">✦ AI · 06:04 AM · Verified via 12 sources</text>

      {/* Right: ROI Calculator */}
      <rect x="600" y="84" width="184" height="220" rx="8" fill="rgba(15,8,4,0.5)" stroke="rgba(251,191,36,0.2)" />
      <text x="614" y="106" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">ROI Calculator</text>

      <text x="614" y="128" fontFamily="monospace" fontSize="8" fill="#92590f">PURCHASE PRICE</text>
      <rect x="614" y="134" width="156" height="22" rx="4" fill="rgba(15,8,4,0.8)" stroke="rgba(251,191,36,0.15)" />
      <text x="624" y="148" fontFamily="monospace" fontSize="10" fill="#fbbf24">AED 1,500,000</text>

      <text x="614" y="170" fontFamily="monospace" fontSize="8" fill="#92590f">MONTHLY RENT</text>
      <rect x="614" y="176" width="156" height="22" rx="4" fill="rgba(15,8,4,0.8)" stroke="rgba(251,191,36,0.15)" />
      <text x="624" y="190" fontFamily="monospace" fontSize="10" fill="#fbbf24">AED 9,500</text>

      <line x1="614" y1="212" x2="770" y2="212" stroke="rgba(251,191,36,0.15)" />
      <text x="614" y="230" fontFamily="monospace" fontSize="8" fill="#92590f">PROJECTED YIELD</text>
      <text x="614" y="262" fontFamily="serif" fontSize="32" fontWeight="700" fill="#fbbf24">7.2%</text>
      <text x="614" y="280" fontFamily="monospace" fontSize="8" fill="#22c55e">↗ above market avg</text>
      <text x="614" y="294" fontFamily="monospace" fontSize="8" fill="#94a3b8">12-yr breakeven</text>

      {/* Bottom: market chart */}
      <rect x="20" y="324" width="764" height="156" rx="8" fill="rgba(15,8,4,0.5)" stroke="rgba(251,191,36,0.15)" />
      <text x="36" y="346" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">YoY Price Change · 8 Markets</text>

      {[
        { city: 'Dubai', val: 18.4, x: 70 },
        { city: 'London', val: -2.1, x: 160 },
        { city: 'NY', val: 3.7, x: 250 },
        { city: 'Singapore', val: 8.2, x: 340 },
        { city: 'Lahore', val: 22.1, x: 430 },
        { city: 'Toronto', val: -5.3, x: 520 },
        { city: 'Mumbai', val: 11.2, x: 610 },
        { city: 'Sydney', val: 6.8, x: 700 },
      ].map((b, i) => {
        const isPos = b.val > 0;
        const h = Math.abs(b.val) * 3.4;
        const baseY = 432;
        return (
          <g key={b.city}>
            {isPos ? (
              <rect x={b.x - 16} y={baseY - h} width="32" height={h} rx="3" fill="#22c55e" opacity="0.7" />
            ) : (
              <rect x={b.x - 16} y={baseY} width="32" height={h} rx="3" fill="#ef4444" opacity="0.7" />
            )}
            <line x1={b.x - 22} y1={baseY} x2={b.x + 22} y2={baseY} stroke="#475569" strokeWidth="0.5" />
            <text x={b.x} y={isPos ? baseY - h - 6 : baseY + h + 12} fontFamily="monospace" fontSize="8" fontWeight="700" fill={isPos ? '#22c55e' : '#ef4444'} textAnchor="middle">{isPos ? '+' : ''}{b.val}%</text>
            <text x={b.x} y={baseY + 24} fontFamily="monospace" fontSize="8" fill="#64748b" textAnchor="middle">{b.city}</text>
          </g>
        );
      })}
    </svg>
  );
}
