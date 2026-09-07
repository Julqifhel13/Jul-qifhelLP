import { useEffect } from 'react';

/**
 * Fades elements marked with `data-reveal` into place as they enter the
 * viewport. Honours prefers-reduced-motion by showing everything at once.
 */
export default function useScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return undefined;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }

    const timers = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const delay = Number(el.dataset.revealDelay ?? 0);
          timers.push(window.setTimeout(() => el.classList.add('is-visible'), delay));
          io.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
    );

    els.forEach((el) => io.observe(el));

    return () => {
      io.disconnect();
      timers.forEach(window.clearTimeout);
    };
  }, []);
}
