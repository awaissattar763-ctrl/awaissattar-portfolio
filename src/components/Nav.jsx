import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks } from '../data/config';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const y = window.scrollY + 150;
      let current = '';
      navLinks.forEach((l) => {
        const el = document.getElementById(l.id);
        if (el) {
          const top = el.offsetTop;
          if (y >= top && y < top + el.offsetHeight) current = l.id;
        }
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,8,13,0.85)] backdrop-blur-xl border-b border-white/5'
            : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-white font-semibold tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center">
              <span className="text-[#05080d] font-bold text-sm">A</span>
            </div>
            <span>Awais Sattar</span>
          </a>

          <div className="hidden lg:flex items-center gap-8 text-sm text-slate-400">
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                className={`nav-link transition ${active === l.id ? 'active' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="hidden lg:inline-flex btn-primary px-5 py-2.5 rounded-lg text-sm items-center"
          >
            Hire Me
          </a>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white block"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white block origin-center"
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden fixed top-0 right-0 h-screen w-72 bg-[#05080d] border-l border-cyan-500/20 pt-24 px-8 z-40"
          >
            {navLinks.map((l) => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-lg text-slate-300 border-b border-white/5 hover:text-cyan-400 transition"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-6 px-5 py-3 rounded-lg text-sm inline-flex items-center"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
