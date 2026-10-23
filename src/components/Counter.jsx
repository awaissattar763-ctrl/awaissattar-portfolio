import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

export default function Counter({ to, suffix = '+', duration = 1.5 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  // Initial render shows the final value (what crawlers / no-JS visitors see);
  // once scrolled into view, the count-up animation replays from 0.
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!inView) return;
    let raf;
    setValue(0);
    const start = performance.now();
    const tick = (t) => {
      const elapsed = (t - start) / 1000;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * to));
      if (progress < 1) raf = requestAnimationFrame(tick);
      else setValue(to);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, duration]);

  return (
    <span ref={ref}>
      {value}{suffix}
    </span>
  );
}
