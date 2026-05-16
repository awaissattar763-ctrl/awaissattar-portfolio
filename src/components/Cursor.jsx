import { useEffect, useRef, useState } from 'react';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Only show on desktop with fine pointer
    const mq = window.matchMedia('(min-width: 769px) and (pointer: fine)');
    setEnabled(mq.matches);
    const onChange = (e) => setEnabled(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnter = () => ringRef.current?.classList.add('hover');
    const onLeave = () => ringRef.current?.classList.remove('hover');

    document.addEventListener('mousemove', onMove);
    raf = requestAnimationFrame(animate);

    const interactiveSelector = 'a, button, summary, .project-card, [data-cursor="hover"]';
    const refreshHoverTargets = () => {
      document.querySelectorAll(interactiveSelector).forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };
    refreshHoverTargets();
    const obs = new MutationObserver(refreshHoverTargets);
    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 6, height: 6,
          background: 'var(--cyan)',
          borderRadius: '50%',
          boxShadow: '0 0 12px var(--cyan)',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          position: 'fixed', top: 0, left: 0,
          width: 36, height: 36,
          border: '1px solid rgba(34, 211, 238, 0.5)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
          transition: 'width 0.25s, height 0.25s, background 0.2s, border-color 0.2s',
        }}
      />
      <style>{`
        .cursor-ring.hover {
          width: 56px !important;
          height: 56px !important;
          background: rgba(34, 211, 238, 0.08);
          border-color: rgba(34, 211, 238, 0.8) !important;
        }
      `}</style>
    </>
  );
}
