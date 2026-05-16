import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[10000] bg-[#05080d] flex items-center justify-center"
        >
          <div className="relative">
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              animate={{ rotate: [0, 180, 0], scale: [1, 0.9, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <defs>
                <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
              <rect x="10" y="10" width="60" height="60" rx="14" fill="url(#logoGrad)" />
              <text
                x="40" y="52"
                textAnchor="middle"
                fontFamily="Space Grotesk"
                fontSize="32"
                fontWeight="700"
                fill="#05080d"
              >
                A
              </text>
            </motion.svg>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] whitespace-nowrap text-cyan-400"
            >
              Initializing
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
