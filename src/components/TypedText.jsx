import { useEffect, useState } from 'react';

const phrases = [
  'AI SaaS platforms',
  'enterprise dashboards',
  'ERP & CRM systems',
  'automation tools',
  'AI-integrated apps',
];

export default function TypedText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');

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
