import { useEffect } from 'react';

/**
 * Attaches an IntersectionObserver to all elements
 * with class "reveal" and adds "visible" when they enter
 * the viewport. Call this once in App.js.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}