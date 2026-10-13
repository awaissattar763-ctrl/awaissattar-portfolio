// Premium thumbnails — batch 3 (new flagship projects)
// All scale via viewBox; container provides aspect-ratio
import React from 'react';

const baseSvgProps = {
  viewBox: '0 0 800 500',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid slice',
  style: { width: '100%', height: '100%', display: 'block' },
};

// ============================================
// SWIFTPOS — Retail POS billing screen
// ============================================
export function SwiftPOSThumb() {
  const items = [
    ['Basmati Rice 5kg', '2', '$25.98'],
    ['Cola 1.5L', '6', '$14.94'],
    ['Eggs (dozen)', '3', '$10.47'],
    ['Shampoo 400ml', '1', '$5.99'],
  ];
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="sp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#07120c" />
          <stop offset="1" stopColor="#040a06" />
        </linearGradient>
        <linearGradient id="sp-btn" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#sp-bg)" />
      {/* Header */}
      <rect x="0" y="0" width="800" height="56" fill="#0a1a10" />
      <circle cx="36" cy="28" r="14" fill="#22c55e" />
      <text x="36" y="34" fontFamily="sans-serif" fontSize="16" fontWeight="800" fill="#04120a" textAnchor="middle">S</text>
      <text x="60" y="34" fontFamily="sans-serif" fontSize="16" fontWeight="700" fill="#fff">SwiftPOS</text>
      <text x="700" y="34" fontFamily="monospace" fontSize="11" fill="#4ade80">● LIVE</text>
      {/* Product grid */}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2].map((c) => (
          <g key={`${r}-${c}`}>
            <rect x={24 + c * 150} y={76 + r * 92} width="138" height="80" rx="10" fill="#0d1f13" stroke="#1a3a24" />
            <rect x={36 + c * 150} y={88 + r * 92} width="40" height="40" rx="8" fill="#14532d" opacity="0.6" />
            <text x={84 + c * 150} y={104 + r * 92} fontFamily="sans-serif" fontSize="10" fill="#bbf7d0">Item {r * 3 + c + 1}</text>
            <text x={84 + c * 150} y={120 + r * 92} fontFamily="monospace" fontSize="11" fontWeight="700" fill="#4ade80">$9.99</text>
          </g>
        ))
      )}
      {/* Cart panel */}
      <rect x="500" y="56" width="300" height="444" fill="#0a1a10" />
      <text x="524" y="90" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Current Sale</text>
      {items.map((it, i) => (
        <g key={i}>
          <text x="524" y={122 + i * 40} fontFamily="sans-serif" fontSize="11" fill="#d1fae5">{it[0]}</text>
          <text x="524" y={136 + i * 40} fontFamily="monospace" fontSize="10" fill="#6b7280">× {it[1]}</text>
          <text x="776" y={130 + i * 40} fontFamily="monospace" fontSize="11" fill="#fff" textAnchor="end">{it[2]}</text>
        </g>
      ))}
      <rect x="524" y="300" width="252" height="1" fill="#1a3a24" />
      <text x="524" y="330" fontFamily="sans-serif" fontSize="13" fill="#9ca3af">Total</text>
      <text x="776" y="332" fontFamily="monospace" fontSize="22" fontWeight="800" fill="#4ade80" textAnchor="end">$57.38</text>
      <rect x="524" y="360" width="252" height="52" rx="10" fill="url(#sp-btn)" />
      <text x="650" y="392" fontFamily="sans-serif" fontSize="16" fontWeight="800" fill="#fff" textAnchor="middle">CHARGE →</text>
      <rect x="524" y="424" width="120" height="40" rx="8" fill="#0d1f13" stroke="#1a3a24" />
      <text x="584" y="449" fontFamily="sans-serif" fontSize="11" fill="#bbf7d0" textAnchor="middle">Cash</text>
      <rect x="656" y="424" width="120" height="40" rx="8" fill="#0d1f13" stroke="#1a3a24" />
      <text x="716" y="449" fontFamily="sans-serif" fontSize="11" fill="#bbf7d0" textAnchor="middle">Card</text>
    </svg>
  );
}

// ============================================
// AUTOMATION BLUEPRINTS — workflow nodes
// ============================================
export function AutomationBlueprintsThumb() {
  const nodes = [
    [120, 120, 'Trigger', '#f59e0b'],
    [320, 120, 'n8n AI', '#ea4b71'],
    [520, 120, 'CRM', '#8b5cf6'],
    [220, 300, 'Make', '#a855f7'],
    [420, 300, 'SMS', '#22c55e'],
    [620, 300, 'Vapi Voice', '#06b6d4'],
  ];
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="ab-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#120a1e" />
          <stop offset="1" stopColor="#0a0612" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#ab-bg)" />
      <text x="40" y="56" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#fff">Automation Blueprints</text>
      <text x="40" y="80" fontFamily="monospace" fontSize="11" fill="#a855f7">n8n · MAKE · ZAPIER · VAPI</text>
      {/* connections */}
      <g stroke="#a855f7" strokeWidth="2" opacity="0.4">
        <line x1="180" y1="150" x2="260" y2="150" />
        <line x1="380" y1="150" x2="460" y2="150" />
        <line x1="150" y1="180" x2="200" y2="270" />
        <line x1="350" y1="180" x2="400" y2="270" />
        <line x1="550" y1="180" x2="600" y2="270" />
        <line x1="280" y1="330" x2="360" y2="330" />
        <line x1="480" y1="330" x2="560" y2="330" />
      </g>
      {nodes.map(([x, y, label, color], i) => (
        <g key={i}>
          <rect x={x - 60} y={y - 30} width="120" height="60" rx="12" fill="#1a1030" stroke={color} strokeWidth="2" />
          <circle cx={x - 38} cy={y} r="8" fill={color} />
          <text x={x + 8} y={y + 5} fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#fff" textAnchor="middle">{label}</text>
        </g>
      ))}
      <rect x="40" y="400" width="720" height="60" rx="12" fill="#1a1030" stroke="#a855f7" strokeOpacity="0.3" />
      <text x="60" y="426" fontFamily="monospace" fontSize="12" fill="#c4b5fd">⚡ missed-call → AI score → SMS → CRM</text>
      <text x="60" y="448" fontFamily="monospace" fontSize="11" fill="#6b7280">6 import-ready templates · $0 trial cost</text>
    </svg>
  );
}

// ============================================
// GHL — SUMMIT AIR & PLUMBING (HVAC)
// ============================================
export function GhlSummitThumb() {
  const stages = ['New Lead', 'Estimate', 'Scheduled', 'Job Done', 'Won', 'Review'];
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="gh-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a3a5c" />
          <stop offset="1" stopColor="#0d1f36" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#gh-bg)" />
      <rect x="0" y="0" width="800" height="64" fill="#122a47" />
      <text x="32" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#fff">Summit Air &amp; Plumbing</text>
      <text x="600" y="40" fontFamily="monospace" fontSize="11" fill="#ff6b35">GHL LEAD MACHINE</text>
      <text x="32" y="110" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#94a3b8">JOB PIPELINE</text>
      {stages.map((s, i) => (
        <g key={s}>
          <rect x={32 + i * 122} y="130" width="112" height="240" rx="10" fill="#122a47" stroke="#2a4a6e" />
          <text x={40 + i * 122} y="156" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill="#e2e8f0">{s}</text>
          <text x={40 + i * 122} y="172" fontFamily="monospace" fontSize="10" fill="#64748b">{3 + i * 2} jobs</text>
          {[0, 1, 2].map((c) => (
            <rect key={c} x={40 + i * 122} y={188 + c * 56} width="96" height="46" rx="8" fill="#1a3a5c" />
          ))}
          {[0, 1, 2].map((c) => (
            <g key={`t${c}`}>
              <rect x={48 + i * 122} y={196 + c * 56} width="52" height="8" rx="4" fill="#3b5a80" />
              <rect x={48 + i * 122} y={210 + c * 56} width="36" height="8" rx="4" fill={i > 3 ? '#22c55e' : '#ff6b35'} opacity="0.8" />
            </g>
          ))}
        </g>
      ))}
      <rect x="32" y="400" width="736" height="64" rx="10" fill="#122a47" stroke="#ff6b35" strokeOpacity="0.4" />
      <text x="52" y="428" fontFamily="sans-serif" fontSize="12" fill="#ff8c5a">⚡ Missed-call text-back → instant lead SMS → estimate win-back</text>
      <text x="52" y="448" fontFamily="monospace" fontSize="11" fill="#94a3b8">5 workflows · seasonal nurture · review requests</text>
    </svg>
  );
}

// ============================================
// GHL — BRIGHTSMILE DENTAL
// ============================================
export function GhlBrightSmileThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="bs-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#082f3f" />
          <stop offset="1" stopColor="#041820" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#bs-bg)" />
      <rect x="0" y="0" width="800" height="64" fill="#0a3a4d" />
      <text x="32" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#fff">BrightSmile Dental Studio</text>
      <text x="640" y="40" fontFamily="monospace" fontSize="11" fill="#22d3ee">GHL DEMO</text>
      {/* Calendar */}
      <rect x="32" y="100" width="460" height="320" rx="12" fill="#0a3a4d" stroke="#155e75" />
      <text x="52" y="134" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Appointment Calendar</text>
      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri'].map((d, i) => (
        <text key={d} x={58 + i * 88} y="162" fontFamily="monospace" fontSize="10" fill="#67e8f9">{d}</text>
      ))}
      {[0, 1, 2, 3].map((r) =>
        [0, 1, 2, 3, 4].map((c) => {
          const booked = (r * 5 + c) % 3 === 0;
          return (
            <rect key={`${r}${c}`} x={52 + c * 88} y={176 + r * 56} width="78" height="46" rx="8"
              fill={booked ? '#0e7490' : '#083344'} stroke={booked ? '#22d3ee' : '#155e75'} />
          );
        })
      )}
      {/* Automations */}
      <rect x="520" y="100" width="248" height="320" rx="12" fill="#0a3a4d" stroke="#155e75" />
      <text x="540" y="134" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Automations</text>
      {['Booking confirm', '24h reminder', 'Review request', 'Recall nudge'].map((a, i) => (
        <g key={a}>
          <circle cx="556" cy={168 + i * 56} r="10" fill="#22d3ee" opacity="0.2" />
          <text x="556" y={172 + i * 56} fontFamily="sans-serif" fontSize="12" fill="#22d3ee" textAnchor="middle">✓</text>
          <text x="576" y={172 + i * 56} fontFamily="sans-serif" fontSize="12" fill="#e2e8f0">{a}</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// GHL — GLOWMED AESTHETICS (med spa)
// ============================================
export function GhlGlowMedThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="gm-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1e0a1e" />
          <stop offset="1" stopColor="#100510" />
        </linearGradient>
        <radialGradient id="gm-glow" cx="0.7" cy="0.3" r="0.6">
          <stop offset="0" stopColor="#e879f9" stopOpacity="0.2" />
          <stop offset="1" stopColor="#e879f9" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#gm-bg)" />
      <rect width="800" height="500" fill="url(#gm-glow)" />
      <rect x="0" y="0" width="800" height="64" fill="#2a0f2a" />
      <text x="32" y="40" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#fff">GlowMed Aesthetics</text>
      <text x="640" y="40" fontFamily="monospace" fontSize="11" fill="#e879f9">GHL DEMO</text>
      {/* Treatment menu */}
      <rect x="32" y="100" width="360" height="320" rx="12" fill="#2a0f2a" stroke="#701a75" />
      <text x="52" y="134" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Treatment Menu</text>
      {[['HydraFacial', '$149'], ['Botox', '$12/unit'], ['Laser Hair', '$99'], ['Chemical Peel', '$129']].map((tr, i) => (
        <g key={i}>
          <rect x="52" y={152 + i * 62} width="320" height="52" rx="10" fill="#3b1240" />
          <text x="68" y={176 + i * 62} fontFamily="sans-serif" fontSize="13" fill="#f5d0fe">{tr[0]}</text>
          <text x="356" y={176 + i * 62} fontFamily="monospace" fontSize="12" fill="#e879f9" textAnchor="end">{tr[1]}</text>
          <text x="68" y={194 + i * 62} fontFamily="sans-serif" fontSize="10" fill="#a855f7">Book →</text>
        </g>
      ))}
      {/* Nurture flow */}
      <rect x="420" y="100" width="348" height="320" rx="12" fill="#2a0f2a" stroke="#701a75" />
      <text x="440" y="134" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Nurture Flow</text>
      {['Consult booked', 'Reminder SMS', 'Aftercare email', 'Review ask'].map((s, i) => (
        <g key={s}>
          <rect x="440" y={152 + i * 62} width="308" height="52" rx="10" fill="#3b1240" />
          <circle cx="462" cy={178 + i * 62} r="6" fill="#e879f9" />
          <text x="478" y={183 + i * 62} fontFamily="sans-serif" fontSize="12" fill="#f5d0fe">{s}</text>
          {i < 3 && <line x1="462" y1={204 + i * 62} x2="462" y2={214 + i * 62} stroke="#e879f9" strokeWidth="2" />}
        </g>
      ))}
    </svg>
  );
}

// ============================================
// GHL — STERLING INJURY LAW
// ============================================
export function GhlSterlingThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="sl-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0f0d08" />
          <stop offset="1" stopColor="#080604" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#sl-bg)" />
      <rect x="0" y="0" width="800" height="64" fill="#1a1408" />
      <text x="32" y="40" fontFamily="serif" fontSize="20" fontWeight="700" fill="#f5d76e">⚖ Sterling Injury Law</text>
      <text x="640" y="40" fontFamily="monospace" fontSize="11" fill="#d4af37">GHL DEMO</text>
      {/* Intake pipeline */}
      <text x="32" y="110" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#a89968">INTAKE PIPELINE</text>
      {['New Inquiry', 'Consult Set', 'Signed', 'In Treatment'].map((s, i) => (
        <g key={s}>
          <rect x={32 + i * 186} y="130" width="174" height="180" rx="10" fill="#1a1408" stroke="#4a3d1a" />
          <text x={44 + i * 186} y="158" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#f5d76e">{s}</text>
          {[0, 1].map((c) => (
            <g key={c}>
              <rect x={44 + i * 186} y={174 + c * 62} width="150" height="52" rx="8" fill="#241c0c" />
              <rect x={54 + i * 186} y={184 + c * 62} width="70" height="8" rx="4" fill="#4a3d1a" />
              <rect x={54 + i * 186} y={198 + c * 62} width="100" height="8" rx="4" fill={i === 3 ? '#22c55e' : '#d4af37'} opacity="0.6" />
            </g>
          ))}
        </g>
      ))}
      <rect x="32" y="340" width="736" height="100" rx="10" fill="#1a1408" stroke="#d4af37" strokeOpacity="0.3" />
      <text x="52" y="372" fontFamily="sans-serif" fontSize="13" fill="#f5d76e">⚡ 5-min lead response → consult reminders → document chase</text>
      <text x="52" y="396" fontFamily="monospace" fontSize="11" fill="#a89968">Speed-to-lead wins injury cases · staged automations</text>
      <text x="52" y="418" fontFamily="monospace" fontSize="11" fill="#a89968">Free case evaluation funnel</text>
    </svg>
  );
}

// ============================================
// AI RECEPTIONIST (Nora)
// ============================================
export function AiReceptionistThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="nr-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#04120e" />
          <stop offset="1" stopColor="#020a07" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#nr-bg)" />
      {/* Phone mockup */}
      <rect x="80" y="60" width="240" height="380" rx="28" fill="#0a1f16" stroke="#10b981" strokeWidth="2" />
      <rect x="170" y="76" width="60" height="8" rx="4" fill="#065f46" />
      <circle cx="200" cy="160" r="44" fill="#10b981" opacity="0.2" />
      <circle cx="200" cy="160" r="30" fill="#10b981" opacity="0.35" />
      <text x="200" y="170" fontFamily="sans-serif" fontSize="24" fill="#fff" textAnchor="middle">📞</text>
      <text x="200" y="230" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff" textAnchor="middle">Nora is answering…</text>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={120 + i * 24} y={260 - Math.abs(3 - i) * 8} width="12" height={40 + Math.abs(3 - i) * 16} rx="6" fill="#10b981" opacity={0.4 + i * 0.08} />
      ))}
      <rect x="110" y="340" width="180" height="40" rx="20" fill="#065f46" />
      <text x="200" y="365" fontFamily="sans-serif" fontSize="12" fill="#d1fae5" textAnchor="middle">"Book for tomorrow 10am"</text>
      {/* Transcript */}
      <rect x="380" y="60" width="340" height="380" rx="16" fill="#0a1f16" stroke="#065f46" />
      <text x="404" y="100" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Live Call Transcript</text>
      {[
        ['Nora', 'Thanks for calling BrightSmile, how can I help?'],
        ['Caller', 'Do you have anything tomorrow morning?'],
        ['Nora', 'Yes — 10:00 AM with Dr. Ahmed. Shall I book it?'],
        ['Caller', 'Perfect, yes please.'],
        ['Nora', 'Done! SMS confirmation sent. ✓'],
      ].map(([who, msg], i) => (
        <g key={i}>
          <text x="404" y={140 + i * 56} fontFamily="monospace" fontSize="10" fontWeight="700" fill={who === 'Nora' ? '#34d399' : '#6b7280'}>{who.toUpperCase()}</text>
          <text x="404" y={158 + i * 56} fontFamily="sans-serif" fontSize="11" fill="#d1fae5">{msg.slice(0, 42)}</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// LEAD PIPELINE AUTOMATION
// ============================================
export function LeadPipelineThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="lp-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1020" />
          <stop offset="1" stopColor="#05080f" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#lp-bg)" />
      <text x="40" y="56" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#fff">Lead Pipeline</text>
      <text x="40" y="80" fontFamily="monospace" fontSize="11" fill="#60a5fa">n8n WORKFLOW · LIVE FEED</text>
      {/* Kanban */}
      {['New', 'Contacted', 'Qualified', 'Won'].map((s, i) => (
        <g key={s}>
          <rect x={40 + i * 182} y="110" width="170" height="280" rx="10" fill="#0d1526" stroke="#1e3a5f" />
          <text x={52 + i * 182} y="138" fontFamily="sans-serif" fontSize="12" fontWeight="700" fill="#93c5fd">{s}</text>
          {[0, 1, 2].map((c) => (
            <g key={c}>
              <rect x={52 + i * 182} y={154 + c * 70} width="146" height="60" rx="8" fill="#16203a" />
              <circle cx={68 + i * 182} cy={174 + c * 70} r="8" fill={i === 3 ? '#22c55e' : '#60a5fa'} opacity="0.7" />
              <rect x={82 + i * 182} y={168 + c * 70} width="80" height="8" rx="4" fill="#334155" />
              <rect x={82 + i * 182} y={182 + c * 70} width="60" height="8" rx="4" fill="#475569" />
            </g>
          ))}
        </g>
      ))}
      <rect x="40" y="414" width="720" height="50" rx="10" fill="#0d1526" stroke="#60a5fa" strokeOpacity="0.3" />
      <text x="60" y="444" fontFamily="monospace" fontSize="12" fill="#93c5fd">⚡ new lead → auto SMS in 60s → AI follow-up → CRM updated</text>
    </svg>
  );
}

// ============================================
// SYNCCRM AI
// ============================================
export function CrmAiThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="ca-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0e0a1e" />
          <stop offset="1" stopColor="#070512" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#ca-bg)" />
      <text x="40" y="56" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#fff">SyncCRM AI</text>
      <text x="40" y="80" fontFamily="monospace" fontSize="11" fill="#818cf8">AI LEAD SCORING · DEDUP</text>
      {/* Lead rows with scores */}
      <rect x="40" y="110" width="480" height="330" rx="12" fill="#141026" stroke="#312e81" />
      {[['Acme Corp', 92, '#22c55e'], ['Beta LLC', 78, '#a3e635'], ['Gamma Inc', 64, '#facc15'], ['Delta Co', 41, '#f97316'], ['Epsilon', 28, '#ef4444']].map(([name, score, color], i) => (
        <g key={i}>
          <text x="60" y={152 + i * 60} fontFamily="sans-serif" fontSize="13" fill="#e0e7ff">{name}</text>
          <rect x="60" y={162 + i * 60} width="300" height="10" rx="5" fill="#1e1b4b" />
          <rect x="60" y={162 + i * 60} width={300 * (score / 100)} height="10" rx="5" fill={color} />
          <text x="500" y={166 + i * 60} fontFamily="monospace" fontSize="14" fontWeight="800" fill={color} textAnchor="end">{score}</text>
        </g>
      ))}
      {/* AI panel */}
      <rect x="544" y="110" width="216" height="330" rx="12" fill="#141026" stroke="#312e81" />
      <text x="564" y="144" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">AI Draft</text>
      <rect x="564" y="160" width="176" height="120" rx="8" fill="#1e1b4b" />
      <text x="574" y="184" fontFamily="sans-serif" fontSize="10" fill="#c7d2fe">"Hi Sarah, noticed</text>
      <text x="574" y="200" fontFamily="sans-serif" fontSize="10" fill="#c7d2fe">you viewed pricing</text>
      <text x="574" y="216" fontFamily="sans-serif" fontSize="10" fill="#c7d2fe">twice — quick call</text>
      <text x="574" y="232" fontFamily="sans-serif" fontSize="10" fill="#c7d2fe">tomorrow?"</text>
      <rect x="564" y="300" width="176" height="36" rx="8" fill="#6366f1" />
      <text x="652" y="323" fontFamily="sans-serif" fontSize="11" fontWeight="700" fill="#fff" textAnchor="middle">Send follow-up</text>
      <text x="564" y="364" fontFamily="monospace" fontSize="10" fill="#818cf8">⚡ 3 duplicates merged</text>
    </svg>
  );
}

// ============================================
// VOICE AI RECEPTIONIST
// ============================================
export function VoiceAiThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="va-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#04202a" />
          <stop offset="1" stopColor="#02141a" />
        </linearGradient>
        <radialGradient id="va-ring" cx="0.5" cy="0.45" r="0.4">
          <stop offset="0" stopColor="#06b6d4" stopOpacity="0.25" />
          <stop offset="1" stopColor="#06b6d4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#va-bg)" />
      <rect width="800" height="500" fill="url(#va-ring)" />
      <text x="400" y="70" fontFamily="sans-serif" fontSize="22" fontWeight="800" fill="#fff" textAnchor="middle">Voice AI Receptionist</text>
      <text x="400" y="96" fontFamily="monospace" fontSize="11" fill="#22d3ee" textAnchor="middle">AI PHONE AGENT · 24/7</text>
      {/* Mic */}
      <circle cx="400" cy="200" r="70" fill="#0e7490" opacity="0.2" />
      <circle cx="400" cy="200" r="52" fill="#0e7490" opacity="0.35" />
      <circle cx="400" cy="200" r="36" fill="#06b6d4" />
      <text x="400" y="214" fontFamily="sans-serif" fontSize="28" textAnchor="middle">🎙</text>
      {/* Waveform */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
        const h = 20 + Math.abs(Math.sin(i * 1.2)) * 60;
        return <rect key={i} x={180 + i * 32} y={330 - h / 2} width="14" height={h} rx="7" fill="#06b6d4" opacity={0.35 + (i % 4) * 0.15} />;
      })}
      <text x="400" y="420" fontFamily="sans-serif" fontSize="13" fill="#a5f3fc" textAnchor="middle">"Thank you for calling — how may I help you today?"</text>
      <text x="400" y="446" fontFamily="monospace" fontSize="11" fill="#0e7490" textAnchor="middle">VAPI + TWILIO · NATURAL VOICE · CALL TRANSFER</text>
    </svg>
  );
}

// ============================================
// N8N AUTOMATION SHOWCASE
// ============================================
export function N8nShowcaseThumb() {
  const steps = [
    ['Webhook', 'trigger'],
    ['AI Agent', 'process'],
    ['If/Else', 'logic'],
    ['Gmail', 'send'],
    ['Sheets', 'store'],
  ];
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="n8-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1a0a10" />
          <stop offset="1" stopColor="#0d0508" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#n8-bg)" />
      <text x="40" y="56" fontFamily="sans-serif" fontSize="20" fontWeight="800" fill="#fff">n8n Automation Showcase</text>
      <text x="40" y="80" fontFamily="monospace" fontSize="11" fill="#ea4b71">WATCH A REAL WORKFLOW RUN</text>
      {/* Node chain */}
      {steps.map(([label, type], i) => (
        <g key={i}>
          {i > 0 && <line x1={90 + (i - 1) * 140} y1="220" x2={110 + (i - 1) * 140 + 100} y2="220" stroke="#ea4b71" strokeWidth="3" />}
          {i > 0 && <circle cx={110 + (i - 1) * 140 + 100} cy="220" r="5" fill="#ea4b71">
            <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
          </circle>}
          <rect x={50 + i * 140} y="180" width="120" height="80" rx="14" fill="#2a0f18" stroke="#ea4b71" strokeWidth="2" />
          <text x={110 + i * 140} y="214" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff" textAnchor="middle">{label}</text>
          <text x={110 + i * 140} y="234" fontFamily="monospace" fontSize="10" fill="#ea4b71" textAnchor="middle">{type}</text>
        </g>
      ))}
      {/* Execution log */}
      <rect x="40" y="300" width="720" height="150" rx="12" fill="#140810" stroke="#4a1626" />
      {[
        ['✓', 'Webhook received — new lead #4821', '#22c55e'],
        ['✓', 'AI scored lead: 87/100 (hot)', '#22c55e'],
        ['→', 'Branch: HOT → instant SMS path', '#facc15'],
        ['✓', 'SMS sent · CRM updated · 1.2s total', '#22c55e'],
      ].map(([icon, msg, color], i) => (
        <g key={i}>
          <text x="64" y={336 + i * 30} fontFamily="monospace" fontSize="13" fontWeight="700" fill={color}>{icon}</text>
          <text x="92" y={336 + i * 30} fontFamily="monospace" fontSize="12" fill="#d1d5db">{msg}</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// WHATSAPP AI CHATBOT
// ============================================
export function WhatsappChatbotThumb() {
  const msgs = [
    ['bot', 'Hi! 👋 Welcome to Glow Salon. How can I help?'],
    ['user', 'I need a haircut tomorrow'],
    ['bot', 'Sure! Available slots: 10am, 2pm, 4pm'],
    ['user', '2pm works'],
    ['bot', 'Booked! ✅ See you tomorrow at 2pm.'],
  ];
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="wa-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#071209" />
          <stop offset="1" stopColor="#040a05" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#wa-bg)" />
      {/* Phone */}
      <rect x="240" y="40" width="320" height="420" rx="28" fill="#0b141a" stroke="#25d366" strokeWidth="2" />
      <rect x="240" y="40" width="320" height="64" rx="28" fill="#075e54" />
      <rect x="240" y="80" width="320" height="24" fill="#075e54" />
      <circle cx="272" cy="72" r="16" fill="#25d366" />
      <text x="272" y="78" fontFamily="sans-serif" fontSize="14" textAnchor="middle">🤖</text>
      <text x="300" y="70" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#fff">Glow Salon Bot</text>
      <text x="300" y="88" fontFamily="sans-serif" fontSize="10" fill="#a8e6c5">online · replies instantly</text>
      {msgs.map(([who, msg], i) => (
        <g key={i}>
          <rect
            x={who === 'bot' ? 256 : 560 - Math.min(msg.length * 6.5, 240)}
            y={120 + i * 62}
            width={Math.min(msg.length * 6.5, 250)}
            height="48"
            rx="12"
            fill={who === 'bot' ? '#1f2c34' : '#005c4b'}
          />
          <text
            x={who === 'bot' ? 268 : 548 - Math.min(msg.length * 6.5, 240)}
            y={142 + i * 62}
            fontFamily="sans-serif"
            fontSize="11"
            fill="#fff"
          >{msg.slice(0, 38)}</text>
          <text
            x={who === 'bot' ? 268 : 548 - Math.min(msg.length * 6.5, 240)}
            y={156 + i * 62}
            fontFamily="sans-serif"
            fontSize="11"
            fill="#fff"
          >{msg.slice(38, 72)}</text>
        </g>
      ))}
      <text x="120" y="250" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#fff">WhatsApp</text>
      <text x="120" y="276" fontFamily="sans-serif" fontSize="18" fontWeight="800" fill="#25d366">AI Chatbot</text>
      <text x="120" y="304" fontFamily="monospace" fontSize="11" fill="#6b7280">n8n + AI · auto-booking</text>
      <text x="620" y="250" fontFamily="monospace" fontSize="11" fill="#25d366">24/7 →</text>
    </svg>
  );
}
