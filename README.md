# Muhammad Awais Sattar — Portfolio

Premium AI SaaS & Automation Developer portfolio built with **React + Vite + Tailwind CSS + Framer Motion + Lenis smooth scroll**.

## ✨ Features

- ⚡ React 18 + Vite (lightning-fast dev + production builds)
- 🎨 Tailwind CSS for styling
- 🎬 Framer Motion for animations (reveal, stagger, scale, hover)
- 🖱️ Custom cyan cursor (dot + smooth-following ring)
- 📜 Lenis smooth scrolling
- 🌗 Premium dark theme with cyan accents
- 💎 Glassmorphism cards + glow orbs + grid background + noise texture
- ⌨️ Typing effect headline
- 🔢 Animated counters
- 📱 Fully responsive (mobile menu, breakpoints)
- 🎯 12 sections: Hero, Tech Marquee, Selected Work (8 flagship + 12 more), About, Why Hire Me, Services, Current Focus, Process, Testimonials, Stack, FAQ, Contact, Footer
- 💬 Floating WhatsApp button
- ♿ Accessible (semantic HTML, keyboard nav, focus states)

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:5173)
npm run dev

# Build for production (output: dist/)
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deploy to Vercel

The easiest way to deploy:

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **New Project** → Import your repo
3. Vercel auto-detects Vite. Click **Deploy**.
4. You'll get a URL like `awais-sattar.vercel.app`

Or with Vercel CLI:

```bash
npm i -g vercel
vercel
```

## 📁 Structure

```
src/
├── App.jsx                    # Root component
├── main.jsx                   # Entry point
├── index.css                  # Global styles + Tailwind
├── assets/
│   └── awais.jpg              # Profile photo
├── data/
│   ├── config.js              # Contact info, nav links
│   └── projects.js            # All project data
└── components/
    ├── Loader.jsx
    ├── Cursor.jsx
    ├── Nav.jsx
    ├── Hero.jsx
    ├── TypedText.jsx
    ├── Counter.jsx
    ├── Particles.jsx
    ├── Reveal.jsx
    ├── TechMarquee.jsx
    ├── Work.jsx
    ├── ProjectShowcase.jsx
    ├── About.jsx
    ├── WhyHire.jsx            (WhyHire + Services + CurrentFocus)
    ├── ProcessSection.jsx     (Process + Testimonials + FAQ)
    ├── Stack.jsx
    └── Contact.jsx            (Contact + Footer + WhatsappFab)
```

## ✏️ Customization

- **Contact info / social URLs:** `src/data/config.js`
- **Projects:** `src/data/projects.js`
- **Theme colors:** Edit CSS variables in `src/index.css` (`:root`)
- **Replace photo:** Drop your photo into `src/assets/awais.jpg`

## 🛠️ Tech Stack

| Layer       | Tool                                       |
|-------------|--------------------------------------------|
| Build       | Vite                                       |
| Framework   | React 18                                   |
| Styling     | Tailwind CSS 3                             |
| Animations  | Framer Motion                              |
| Smooth scroll | Lenis                                    |
| Fonts       | Space Grotesk, JetBrains Mono, Instrument Serif |

## 📝 License

Personal portfolio. All project content © Muhammad Awais Sattar 2026.
