import { useEffect } from 'react';
import Lenis from 'lenis';

import Cursor from './components/Cursor';
import Loader from './components/Loader';
import Nav from './components/Nav';
import Hero from './components/Hero';
import TechMarquee from './components/TechMarquee';
import Work from './components/Work';
import About from './components/About';
import { WhyHire, Services, CurrentFocus } from './components/WhyHire';
import { Process, Testimonials, FAQ } from './components/ProcessSection';
import Stack from './components/Stack';
import { Contact, Footer, WhatsappFab } from './components/Contact';

export default function App() {
  // Smooth scroll with Lenis
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Loader />
      <Cursor />

      {/* Noise overlay */}
      <div className="noise" />

      {/* Background orbs */}
      <div
        className="glow-orb"
        style={{ width: 600, height: 600, background: '#22d3ee', top: -200, left: -200, opacity: 0.12 }}
      />
      <div
        className="glow-orb"
        style={{ width: 500, height: 500, background: '#06b6d4', top: '30%', right: -200, opacity: 0.08 }}
      />

      <Nav />

      <main>
        <Hero />
        <TechMarquee />
        <Work />
        <About />
        <WhyHire />
        <Services />
        <CurrentFocus />
        <Process />
        <Testimonials />
        <Stack />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <WhatsappFab />
    </>
  );
}
