import { useEffect, useRef } from 'react';

export default function Particles({ count = 20 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';
    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      const dx = Math.random() * 200 - 100;
      const dy = -(Math.random() * 300 + 100);
      p.style.cssText = `
        position: absolute;
        width: 2px; height: 2px;
        background: var(--cyan);
        border-radius: 50%;
        opacity: 0;
        box-shadow: 0 0 6px var(--cyan);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        animation: drift ${10 + Math.random() * 10}s linear infinite;
        animation-delay: ${Math.random() * 15}s;
        --dx: ${dx}px;
        --dy: ${dy}px;
      `;
      container.appendChild(p);
    }
  }, [count]);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />
      <style>{`
        @keyframes drift {
          0% { transform: translate(0, 0); opacity: 0; }
          10% { opacity: 0.6; }
          90% { opacity: 0.6; }
          100% { transform: translate(var(--dx, 100px), var(--dy, -200px)); opacity: 0; }
        }
      `}</style>
    </>
  );
}
