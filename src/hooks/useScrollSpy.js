import { useEffect } from 'react';

/** Highlights the nav link for whichever section is currently in view. */
export default function useScrollSpy() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('main section[id]'));
    const links = Array.from(document.querySelectorAll('[data-nav-link]'));
    if (!sections.length || !links.length || !('IntersectionObserver' in window)) {
      return undefined;
    }

    const setActive = (id) => {
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${id}`);
      });
    };

    const spy = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => spy.observe(s));
    return () => spy.disconnect();
  }, []);
}
