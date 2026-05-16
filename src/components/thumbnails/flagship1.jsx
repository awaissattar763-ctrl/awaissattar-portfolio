// Premium SaaS dashboard thumbnails — unique per project
// All scale via viewBox; container provides aspect-ratio
import React from 'react';

const baseSvgProps = {
  viewBox: '0 0 800 500',
  xmlns: 'http://www.w3.org/2000/svg',
  preserveAspectRatio: 'xMidYMid slice',
  style: { width: '100%', height: '100%', display: 'block' },
};

// ============================================
// OPENCLAW — Agent fleet orchestration dashboard
// ============================================
export function OpenClawThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="oc-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1019" />
          <stop offset="1" stopColor="#050810" />
        </linearGradient>
        <radialGradient id="oc-glow" cx="0.3" cy="0.3" r="0.7">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.15" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="oc-bar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.9" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0.2" />
        </linearGradient>
      </defs>

      <rect width="800" height="500" fill="url(#oc-bg)" />
      <rect width="800" height="500" fill="url(#oc-glow)" />

      {/* Grid pattern */}
      <g opacity="0.06" stroke="#22d3ee" strokeWidth="0.5">
        {Array.from({ length: 13 }).map((_, i) => (
          <line key={`v${i}`} x1={i * 60} y1="0" x2={i * 60} y2="500" />
        ))}
        {Array.from({ length: 9 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 60} x2="800" y2={i * 60} />
        ))}
      </g>

      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="500" fill="#0a0f17" opacity="0.7" />
      <rect x="12" y="20" width="32" height="32" rx="8" fill="#22d3ee" />
      <text x="28" y="42" fontFamily="monospace" fontSize="18" fontWeight="700" fill="#05080d" textAnchor="middle">⌬</text>
      <text x="55" y="38" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">OpenClaw</text>
      <text x="55" y="52" fontFamily="monospace" fontSize="8" fill="#22d3ee">AGENT FLEET</text>

      {/* Sidebar nav */}
      {['Chat', 'Channels', 'Instances', 'Sessions', 'Agents', 'Skills', 'Nodes', 'Terminal'].map((label, i) => (
        <g key={label}>
          <rect x="12" y={80 + i * 32} width="136" height="24" rx="6" fill={i === 4 ? '#22d3ee' : 'transparent'} opacity={i === 4 ? '0.15' : '1'} />
          <circle cx="24" cy={92 + i * 32} r="3" fill={i === 4 ? '#22d3ee' : '#475569'} />
          <text x="36" y={96 + i * 32} fontFamily="sans-serif" fontSize="11" fill={i === 4 ? '#67e8f9' : '#94a3b8'}>{label}</text>
        </g>
      ))}

      {/* Top bar */}
      <rect x="160" y="0" width="640" height="48" fill="#0a0f17" opacity="0.5" />
      <text x="180" y="28" fontFamily="sans-serif" fontSize="14" fontWeight="600" fill="#fff">Agent Fleet</text>
      <text x="180" y="42" fontFamily="monospace" fontSize="9" fill="#64748b">12 active · 3 idle · 0 errors</text>
      <circle cx="730" cy="24" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
      </circle>
      <text x="742" y="28" fontFamily="monospace" fontSize="9" fill="#22c55e">LIVE</text>

      {/* Stat cards */}
      {[
        { x: 180, label: 'TOTAL AGENTS', value: '12', color: '#22d3ee' },
        { x: 330, label: 'TOKEN COST', value: '$84.20', color: '#fff' },
        { x: 480, label: 'API CALLS', value: '4,281', color: '#fff' },
        { x: 630, label: 'UPTIME', value: '99.9%', color: '#22c55e' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="64" width="140" height="64" rx="8" fill="#0f1620" stroke="#1a2230" />
          <text x={s.x + 12} y="82" fontFamily="monospace" fontSize="8" fill="#22d3ee" letterSpacing="1">{s.label}</text>
          <text x={s.x + 12} y="110" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill={s.color}>{s.value}</text>
        </g>
      ))}

      {/* Agent grid - main content */}
      <text x="180" y="160" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#cbd5e1">ACTIVE FLEET</text>
      {[
        { name: 'gmail-ops', status: 'running' },
        { name: 'vault-sync', status: 'running' },
        { name: 'voice-ai', status: 'running' },
        { name: 'crm-bot', status: 'idle' },
        { name: 'slack-rt', status: 'running' },
        { name: 'tg-channel', status: 'running' },
        { name: 'data-ingest', status: 'running' },
        { name: 'orchestrate', status: 'running' },
        { name: 'memory-vec', status: 'idle' },
        { name: 'docker-mgr', status: 'running' },
        { name: 'webhook-rx', status: 'running' },
        { name: 'analytics', status: 'idle' },
      ].map((a, i) => {
        const col = i % 6;
        const row = Math.floor(i / 6);
        const x = 180 + col * 100;
        const y = 175 + row * 70;
        const isRun = a.status === 'running';
        return (
          <g key={a.name}>
            <rect x={x} y={y} width="92" height="58" rx="6" fill="#0f1620" stroke={isRun ? '#22d3ee' : '#1a2230'} strokeOpacity={isRun ? '0.4' : '1'} />
            <circle cx={x + 10} cy={y + 12} r="3" fill={isRun ? '#22c55e' : '#f59e0b'}>
              {isRun && <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />}
            </circle>
            <text x={x + 18} y={y + 16} fontFamily="monospace" fontSize="8" fill="#cbd5e1">{a.name}</text>
            <rect x={x + 8} y={y + 26} width="76" height="2" rx="1" fill="#1a2230" />
            <rect x={x + 8} y={y + 26} width={isRun ? 60 : 20} height="2" rx="1" fill="url(#oc-bar)" />
            <text x={x + 8} y={y + 44} fontFamily="monospace" fontSize="7" fill="#64748b">{isRun ? Math.floor(Math.random() * 100) + 'k tok' : 'idle'}</text>
            <text x={x + 8} y={y + 52} fontFamily="monospace" fontSize="7" fill="#22d3ee">{isRun ? '↗ 2.4%' : '—'}</text>
          </g>
        );
      })}

      {/* Bottom mini chart */}
      <rect x="180" y="332" width="606" height="148" rx="8" fill="#0f1620" stroke="#1a2230" />
      <text x="194" y="354" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#cbd5e1">Token Usage · 24h</text>
      <text x="730" y="354" fontFamily="monospace" fontSize="8" fill="#22d3ee" textAnchor="end">+18.4%</text>

      {/* Sparkline */}
      <polyline
        points="200,440 250,420 300,410 350,390 400,400 450,370 500,360 520,380 560,340 610,330 660,310 720,300 760,290"
        fill="none"
        stroke="#22d3ee"
        strokeWidth="2"
      />
      <polyline
        points="200,440 250,420 300,410 350,390 400,400 450,370 500,360 520,380 560,340 610,330 660,310 720,300 760,290 760,470 200,470"
        fill="url(#oc-bar)"
        opacity="0.3"
      />
    </svg>
  );
}

// ============================================
// NEXUS OS — Futuristic command center
// ============================================
export function NexusThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="nx-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a0f1c" />
          <stop offset="1" stopColor="#020510" />
        </linearGradient>
        <radialGradient id="nx-radar" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#22d3ee" stopOpacity="0.4" />
          <stop offset="1" stopColor="#22d3ee" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="500" fill="url(#nx-bg)" />

      {/* Hex pattern */}
      <g opacity="0.08" stroke="#22d3ee" fill="none" strokeWidth="0.5">
        {Array.from({ length: 40 }).map((_, i) => {
          const x = (i % 10) * 80 + (Math.floor(i / 10) % 2 === 0 ? 0 : 40);
          const y = Math.floor(i / 10) * 70;
          return (
            <polygon key={i} points={`${x},${y + 20} ${x + 20},${y} ${x + 60},${y} ${x + 80},${y + 20} ${x + 60},${y + 40} ${x + 20},${y + 40}`} />
          );
        })}
      </g>

      {/* Top header */}
      <text x="40" y="38" fontFamily="sans-serif" fontSize="18" fontWeight="700" fill="#fff">
        NEXUS<tspan fill="#22d3ee">.OS</tspan>
      </text>
      <text x="40" y="54" fontFamily="monospace" fontSize="9" fill="#64748b">ENTERPRISE AI INFRASTRUCTURE</text>
      <rect x="650" y="20" width="110" height="28" rx="14" fill="#22d3ee" opacity="0.1" stroke="#22d3ee" strokeOpacity="0.4" />
      <circle cx="668" cy="34" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="680" y="38" fontFamily="monospace" fontSize="9" fill="#67e8f9">SYSTEM OPERATIONAL</text>

      {/* Left: Big radar/sphere */}
      <g transform="translate(40 80)">
        <circle cx="140" cy="170" r="140" fill="url(#nx-radar)" />
        <circle cx="140" cy="170" r="120" fill="none" stroke="#22d3ee" strokeOpacity="0.2" />
        <circle cx="140" cy="170" r="90" fill="none" stroke="#22d3ee" strokeOpacity="0.3" />
        <circle cx="140" cy="170" r="60" fill="none" stroke="#22d3ee" strokeOpacity="0.4" />
        <circle cx="140" cy="170" r="30" fill="none" stroke="#22d3ee" strokeOpacity="0.5" />
        {/* Crosshairs */}
        <line x1="0" y1="170" x2="280" y2="170" stroke="#22d3ee" strokeOpacity="0.15" />
        <line x1="140" y1="30" x2="140" y2="310" stroke="#22d3ee" strokeOpacity="0.15" />
        {/* Rotating sweep */}
        <path d="M 140 170 L 140 50 A 120 120 0 0 1 244 110 Z" fill="#22d3ee" opacity="0.1">
          <animateTransform attributeName="transform" type="rotate" from="0 140 170" to="360 140 170" dur="6s" repeatCount="indefinite" />
        </path>
        {/* Data points */}
        {[
          { x: 80, y: 100 }, { x: 200, y: 130 }, { x: 180, y: 220 },
          { x: 100, y: 240 }, { x: 220, y: 90 }, { x: 60, y: 180 },
        ].map((p, i) => (
          <g key={i}>
            <circle cx={p.x} cy={p.y} r="3" fill="#22d3ee">
              <animate attributeName="opacity" values="1;0.2;1" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
            <circle cx={p.x} cy={p.y} r="8" fill="none" stroke="#22d3ee" strokeOpacity="0.4">
              <animate attributeName="r" values="3;15;3" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
              <animate attributeName="stroke-opacity" values="0.4;0;0.4" dur="2s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
            </circle>
          </g>
        ))}
        <text x="140" y="174" textAnchor="middle" fontFamily="monospace" fontSize="11" fontWeight="600" fill="#22d3ee">COMMAND</text>
        <text x="140" y="188" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#64748b">CENTER</text>
      </g>

      {/* Right column: panels */}
      <g transform="translate(360 80)">
        {/* Panel 1: Cluster Status */}
        <rect x="0" y="0" width="400" height="100" rx="8" fill="#0f1620" stroke="#1a2230" />
        <text x="14" y="22" fontFamily="monospace" fontSize="9" fill="#22d3ee" letterSpacing="1">CLUSTER STATUS</text>
        <text x="14" y="50" fontFamily="sans-serif" fontSize="28" fontWeight="700" fill="#fff">8 / 8</text>
        <text x="14" y="68" fontFamily="monospace" fontSize="8" fill="#64748b">NODES OPERATIONAL</text>
        <g transform="translate(200 14)">
          {Array.from({ length: 8 }).map((_, i) => (
            <rect key={i} x={i * 22} y={0} width="18" height="72" rx="3" fill="#22d3ee" opacity={0.3 + (i % 3) * 0.2}>
              <animate attributeName="opacity" values={`${0.3 + (i % 3) * 0.2};0.8;${0.3 + (i % 3) * 0.2}`} dur="2s" begin={`${i * 0.2}s`} repeatCount="indefinite" />
            </rect>
          ))}
        </g>

        {/* Panel 2: AI Workspace */}
        <rect x="0" y="112" width="194" height="96" rx="8" fill="#0f1620" stroke="#1a2230" />
        <text x="14" y="134" fontFamily="monospace" fontSize="9" fill="#22d3ee" letterSpacing="1">AI WORKSPACE</text>
        <text x="14" y="158" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#fff">4.2M</text>
        <text x="14" y="174" fontFamily="monospace" fontSize="8" fill="#64748b">TOKENS PROCESSED</text>
        <polyline points="14,196 40,188 70,194 100,180 130,184 160,170 180,176" fill="none" stroke="#22d3ee" strokeWidth="1.5" />

        {/* Panel 3: Latency */}
        <rect x="206" y="112" width="194" height="96" rx="8" fill="#0f1620" stroke="#1a2230" />
        <text x="220" y="134" fontFamily="monospace" fontSize="9" fill="#22d3ee" letterSpacing="1">LATENCY P99</text>
        <text x="220" y="158" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill="#fff">42<tspan fontSize="14" fill="#64748b">ms</tspan></text>
        <text x="220" y="174" fontFamily="monospace" fontSize="8" fill="#22c55e">↓ 12% vs last 24h</text>
        {[
          { x: 220, h: 8 }, { x: 234, h: 14 }, { x: 248, h: 10 },
          { x: 262, h: 18 }, { x: 276, h: 12 }, { x: 290, h: 20 },
          { x: 304, h: 14 }, { x: 318, h: 22 }, { x: 332, h: 10 },
          { x: 346, h: 16 }, { x: 360, h: 8 }, { x: 374, h: 12 },
        ].map((b, i) => (
          <rect key={i} x={b.x} y={200 - b.h} width="10" height={b.h} rx="1" fill="#22d3ee" opacity="0.6" />
        ))}
      </g>

      {/* Bottom: Activity feed */}
      <g transform="translate(40 380)">
        <text x="0" y="14" fontFamily="monospace" fontSize="9" fill="#22d3ee" letterSpacing="1">LIVE ACTIVITY</text>
        {[
          { time: '13:42:08', text: 'agent.gmail-ops invoked tool gmail.search' },
          { time: '13:42:07', text: 'orchestrate.fleet routed to node-cluster-04' },
          { time: '13:42:06', text: 'memory.vec indexed 2.4k embeddings' },
          { time: '13:42:04', text: 'docker.mgr scaled instance-12 to 4 replicas' },
        ].map((row, i) => (
          <g key={i}>
            <text x="0" y={32 + i * 16} fontFamily="monospace" fontSize="9" fill="#475569">{row.time}</text>
            <text x="70" y={32 + i * 16} fontFamily="monospace" fontSize="9" fill="#cbd5e1">{row.text}</text>
            <circle cx="720" cy={28 + i * 16} r="2" fill="#22c55e" />
          </g>
        ))}
      </g>
    </svg>
  );
}

// ============================================
// EDUMIND — School ERP dashboard
// ============================================
export function EduMindThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="ed-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1019" />
          <stop offset="1" stopColor="#050810" />
        </linearGradient>
        <linearGradient id="ed-purple" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#a78bfa" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#ed-bg)" />

      {/* Sidebar */}
      <rect x="0" y="0" width="160" height="500" fill="#0a0f17" opacity="0.7" />
      <rect x="14" y="20" width="32" height="32" rx="8" fill="url(#ed-purple)" />
      <text x="30" y="42" fontFamily="serif" fontSize="20" fontWeight="700" fill="#fff" textAnchor="middle">E</text>
      <text x="56" y="36" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">EduMind</text>
      <text x="56" y="50" fontFamily="monospace" fontSize="8" fill="#a78bfa">AI · SCHOOL ERP</text>

      {['Dashboard', 'Students', 'Attendance', 'Exams', 'Report Cards', 'Teachers', 'Fees', 'AI Alerts', 'Parents'].map((l, i) => (
        <g key={l}>
          <rect x="12" y={80 + i * 28} width="136" height="22" rx="6" fill={i === 0 ? '#a78bfa' : 'transparent'} opacity={i === 0 ? '0.15' : '1'} />
          <text x="24" y={94 + i * 28} fontFamily="sans-serif" fontSize="11" fill={i === 0 ? '#c4b5fd' : '#94a3b8'}>{l}</text>
          {(i === 7) && <circle cx="138" cy={91 + i * 28} r="6" fill="#ef4444" />}
          {(i === 7) && <text x="138" y={94 + i * 28} fontFamily="sans-serif" fontSize="7" fontWeight="700" fill="#fff" textAnchor="middle">3</text>}
        </g>
      ))}

      {/* Header */}
      <text x="180" y="38" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill="#fff">Dashboard</text>
      <text x="180" y="56" fontFamily="monospace" fontSize="9" fill="#64748b">Greenfield High School · Spring 2026</text>

      {/* Stat cards */}
      {[
        { x: 180, label: 'TOTAL STUDENTS', value: '1,284', sub: '+24 this term', color: '#a78bfa' },
        { x: 330, label: 'ATTENDANCE', value: '94.2%', sub: '↗ 2.1% vs last week', color: '#22c55e' },
        { x: 480, label: 'FEE COLLECTED', value: 'Rs 8.4M', sub: 'Rs 1.2M pending', color: '#fbbf24' },
        { x: 630, label: 'AI ALERTS', value: '3', sub: 'Need attention', color: '#ef4444' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="80" width="140" height="80" rx="8" fill="#0f1620" stroke="#1a2230" />
          <text x={s.x + 14} y="100" fontFamily="monospace" fontSize="8" fill="#64748b" letterSpacing="1">{s.label}</text>
          <text x={s.x + 14} y="126" fontFamily="sans-serif" fontSize="22" fontWeight="700" fill={s.color}>{s.value}</text>
          <text x={s.x + 14} y="146" fontFamily="monospace" fontSize="8" fill="#94a3b8">{s.sub}</text>
        </g>
      ))}

      {/* Attendance chart */}
      <rect x="180" y="178" width="380" height="190" rx="8" fill="#0f1620" stroke="#1a2230" />
      <text x="196" y="200" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#fff">Attendance · Last 14 days</text>
      <text x="544" y="200" fontFamily="monospace" fontSize="9" fill="#22c55e" textAnchor="end">94.2% AVG</text>
      {Array.from({ length: 14 }).map((_, i) => {
        const h = 30 + Math.sin(i * 0.6) * 25 + Math.random() * 30;
        const isAlert = i === 9;
        return (
          <g key={i}>
            <rect x={200 + i * 25} y={350 - h} width="18" height={h} rx="2" fill={isAlert ? '#ef4444' : '#a78bfa'} opacity={isAlert ? '0.9' : '0.7'} />
            <text x={209 + i * 25} y="362" fontFamily="monospace" fontSize="7" fill="#475569" textAnchor="middle">{i + 1}</text>
          </g>
        );
      })}

      {/* Right panel: AI Alerts */}
      <rect x="576" y="178" width="208" height="190" rx="8" fill="#0f1620" stroke="#a78bfa" strokeOpacity="0.3" />
      <text x="590" y="200" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">⚡ AI Smart Alerts</text>
      {[
        { type: 'ATT', text: 'Class 9-B dropped 12%', color: '#ef4444' },
        { type: 'FEE', text: '8 overdue accounts', color: '#fbbf24' },
        { type: 'EXM', text: 'Mid-term in 6 days', color: '#22d3ee' },
      ].map((a, i) => (
        <g key={i}>
          <rect x="590" y={218 + i * 46} width="180" height="38" rx="6" fill="#0a0f17" />
          <rect x="590" y={218 + i * 46} width="3" height="38" rx="1" fill={a.color} />
          <text x="600" y={234 + i * 46} fontFamily="monospace" fontSize="8" fill={a.color} fontWeight="700">{a.type}</text>
          <text x="600" y={250 + i * 46} fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">{a.text}</text>
        </g>
      ))}

      {/* Bottom: Recent students table */}
      <rect x="180" y="380" width="604" height="100" rx="8" fill="#0f1620" stroke="#1a2230" />
      <text x="196" y="402" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">Recent Students</text>
      {['Ahmed K.', 'Sara M.', 'Bilal R.', 'Zainab A.'].map((name, i) => (
        <g key={i}>
          <circle cx={210 + i * 150} cy="440" r="14" fill={['#a78bfa', '#22d3ee', '#22c55e', '#f59e0b'][i]} opacity="0.3" />
          <text x={210 + i * 150} y="444" fontFamily="sans-serif" fontSize="10" fontWeight="700" fill={['#c4b5fd', '#67e8f9', '#86efac', '#fcd34d'][i]} textAnchor="middle">{name[0]}</text>
          <text x={232 + i * 150} y="438" fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">{name}</text>
          <text x={232 + i * 150} y="452" fontFamily="monospace" fontSize="8" fill="#64748b">Class {9 + i}-A</text>
        </g>
      ))}
    </svg>
  );
}

// ============================================
// MANDIFLOW — Wholesale market SaaS
// ============================================
export function MandiFlowThumb() {
  return (
    <svg {...baseSvgProps}>
      <defs>
        <linearGradient id="mf-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0a1810" />
          <stop offset="1" stopColor="#050d08" />
        </linearGradient>
        <linearGradient id="mf-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#22c55e" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
      </defs>
      <rect width="800" height="500" fill="url(#mf-bg)" />

      {/* Header */}
      <rect x="0" y="0" width="800" height="56" fill="#050d08" opacity="0.6" />
      <rect x="20" y="14" width="28" height="28" rx="7" fill="url(#mf-grad)" />
      <text x="34" y="34" fontFamily="sans-serif" fontSize="14" fontWeight="700" fill="#05080d" textAnchor="middle">M</text>
      <text x="56" y="30" fontFamily="sans-serif" fontSize="13" fontWeight="700" fill="#fff">MandiFlow</text>
      <text x="56" y="44" fontFamily="monospace" fontSize="8" fill="#22c55e">SABZI MANDI · LIVE</text>

      <rect x="640" y="14" width="140" height="28" rx="14" fill="#22c55e" opacity="0.1" stroke="#22c55e" strokeOpacity="0.4" />
      <circle cx="658" cy="28" r="4" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.4;1" dur="1.5s" repeatCount="indefinite" />
      </circle>
      <text x="670" y="32" fontFamily="monospace" fontSize="9" fill="#86efac">AUCTION ACTIVE</text>

      {/* Stat cards */}
      {[
        { x: 20, label: "TODAY'S SALES", value: 'Rs 4,82,000', color: '#22c55e' },
        { x: 220, label: 'PENDING UDHAR', value: 'Rs 1,24,500', color: '#fbbf24' },
        { x: 420, label: 'ACTIVE PARTIES', value: '47', color: '#22d3ee' },
        { x: 620, label: 'BARDANA OUT', value: '1,284', color: '#a78bfa' },
      ].map((s) => (
        <g key={s.x}>
          <rect x={s.x} y="76" width="170" height="76" rx="8" fill="#0f1810" stroke="#1a2a18" />
          <text x={s.x + 14} y="96" fontFamily="monospace" fontSize="8" fill="#64748b" letterSpacing="1">{s.label}</text>
          <text x={s.x + 14} y="124" fontFamily="sans-serif" fontSize="20" fontWeight="700" fill={s.color}>{s.value}</text>
          <line x1={s.x + 14} y1="134" x2={s.x + 154} y2="134" stroke={s.color} strokeOpacity="0.2" strokeWidth="2" strokeDasharray="2 2" />
          <text x={s.x + 14} y="146" fontFamily="monospace" fontSize="8" fill="#22c55e">↗ +8.4% vs yesterday</text>
        </g>
      ))}

      {/* Live Auction (Boli) panel */}
      <rect x="20" y="170" width="500" height="200" rx="8" fill="#0f1810" stroke="#22c55e" strokeOpacity="0.3" />
      <text x="36" y="194" fontFamily="sans-serif" fontSize="12" fontWeight="600" fill="#fff">⚡ Live Boli — Tomato Crate · 80kg</text>
      <circle cx="478" cy="190" r="5" fill="#22c55e">
        <animate attributeName="opacity" values="1;0.3;1" dur="1s" repeatCount="indefinite" />
      </circle>
      <text x="490" y="194" fontFamily="monospace" fontSize="9" fill="#22c55e">BIDDING</text>

      {[
        { time: '14:24:08', party: 'Akbar Trading', bid: 'Rs 4,800', win: true },
        { time: '14:23:52', party: 'Khan Brothers', bid: 'Rs 4,650', win: false },
        { time: '14:23:31', party: 'Sialkot Suppliers', bid: 'Rs 4,500', win: false },
        { time: '14:23:14', party: 'Multan Fruits', bid: 'Rs 4,350', win: false },
        { time: '14:22:58', party: 'Bilal Wholesale', bid: 'Rs 4,200', win: false },
      ].map((row, i) => (
        <g key={i}>
          <rect x="36" y={216 + i * 28} width="468" height="22" rx="4" fill={row.win ? '#22c55e' : 'transparent'} opacity={row.win ? '0.1' : '1'} />
          <text x="48" y={232 + i * 28} fontFamily="monospace" fontSize="9" fill="#64748b">{row.time}</text>
          <text x="140" y={232 + i * 28} fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">{row.party}</text>
          <text x="380" y={232 + i * 28} fontFamily="monospace" fontSize="10" fontWeight="700" fill={row.win ? '#22c55e' : '#94a3b8'}>{row.bid}</text>
          {row.win && (
            <text x="490" y={232 + i * 28} fontFamily="monospace" fontSize="8" fontWeight="700" fill="#22c55e">★ HIGH</text>
          )}
        </g>
      ))}

      {/* Right panel: Top parties */}
      <rect x="540" y="170" width="244" height="200" rx="8" fill="#0f1810" stroke="#1a2a18" />
      <text x="556" y="194" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">Top Parties · Khata</text>
      {[
        { name: 'Akbar Trading', amt: '+ 84,500', positive: true },
        { name: 'Sialkot Supp.', amt: '+ 62,300', positive: true },
        { name: 'Khan Brothers', amt: '- 14,200', positive: false },
        { name: 'Multan Fruits', amt: '+ 38,100', positive: true },
        { name: 'Bilal Whole.', amt: '- 8,400', positive: false },
      ].map((p, i) => (
        <g key={i}>
          <circle cx="568" cy={220 + i * 28} r="10" fill={p.positive ? '#22c55e' : '#ef4444'} opacity="0.2" />
          <text x="568" y={224 + i * 28} fontFamily="sans-serif" fontSize="10" fontWeight="700" fill={p.positive ? '#86efac' : '#fca5a5'} textAnchor="middle">{p.name[0]}</text>
          <text x="588" y={224 + i * 28} fontFamily="sans-serif" fontSize="10" fill="#cbd5e1">{p.name}</text>
          <text x="772" y={224 + i * 28} fontFamily="monospace" fontSize="10" fontWeight="700" fill={p.positive ? '#22c55e' : '#ef4444'} textAnchor="end">{p.amt}</text>
        </g>
      ))}

      {/* Bottom: Sales sparkline */}
      <rect x="20" y="386" width="764" height="94" rx="8" fill="#0f1810" stroke="#1a2a18" />
      <text x="36" y="408" fontFamily="sans-serif" fontSize="11" fontWeight="600" fill="#fff">7-Day Revenue</text>
      <text x="768" y="408" fontFamily="monospace" fontSize="9" fill="#22c55e" textAnchor="end">Rs 28.4L total</text>
      <polyline
        points="40,460 140,440 240,450 340,420 440,425 540,400 640,395 720,380"
        fill="none"
        stroke="#22c55e"
        strokeWidth="2"
      />
      <polyline
        points="40,460 140,440 240,450 340,420 440,425 540,400 640,395 720,380 720,470 40,470"
        fill="#22c55e"
        opacity="0.15"
      />
      {[
        { x: 40, label: 'Mon' }, { x: 140, label: 'Tue' }, { x: 240, label: 'Wed' },
        { x: 340, label: 'Thu' }, { x: 440, label: 'Fri' }, { x: 540, label: 'Sat' },
        { x: 640, label: 'Sun' }, { x: 720, label: 'Today' },
      ].map((d) => (
        <text key={d.label} x={d.x} y="476" fontFamily="monospace" fontSize="8" fill="#475569" textAnchor="middle">{d.label}</text>
      ))}
    </svg>
  );
}
