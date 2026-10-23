import { useEffect, useState } from 'react';

const phrases = [
  'AI receptionists',
  'GoHighLevel automations',
  'booking pipelines',
  'voice AI systems',
  'SaaS dashboards',
];

export default function TypedText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  // Start with the full first phrase rendered so the static H1 is a complete
  // sentence ("I build AI receptionists that win customers while you sleep.");
  // the typing/deleting rotation continues from there.
  const [charIndex, setCharIndex] = useState(phrases[0].length);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState(phrases[0]);

  useEffect(() => {
    const current = phrases[phraseIndex];
    let timeout;

    if (!isDeleting && charIndex <= current.length) {
      setText(current.substring(0, charIndex));
      timeout = setTimeout(() => {
        if (charIndex === current.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setCharIndex(charIndex + 1);
        }
      }, 80);
    } else if (isDeleting && charIndex >= 0) {
      setText(current.substring(0, charIndex));
      timeout = setTimeout(() => {
        if (charIndex === 0) {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        } else {
          setCharIndex(charIndex - 1);
        }
      }, 40);
    }
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, phraseIndex]);

  return (
    <>
      <span className="cyan-text">{text}</span>
      <span className="typing-cursor" />
    </>
  );
}
