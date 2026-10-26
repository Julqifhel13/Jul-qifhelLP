import { useEffect, useRef, useState } from 'react';
import Lightbox from './Lightbox.jsx';
import { projects } from '../data/site.js';
import './CardScroller.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

// Two frames per project: the showcase poster that opens each gallery, then
// one real screen from inside it. Enough cards to be worth travelling.
const CARDS_PER_PROJECT = 2;

const cards = projects.items.flatMap((project) =>
  (project.gallery ?? []).slice(0, CARDS_PER_PROJECT).map((shot, i) => ({
    key: `${project.title}-${i}`,
    src: shot.thumb && i > 0 ? shot.src : shot.src,
    alt: shot.caption,
    label: project.title,
    meta: project.scope,
    project,
  }))
);

/**
 * The reference's c-CardScroller: a row of cards that travels sideways as the
 * page scrolls, pinned until the row has finished.
 *
 * It is driven by the real scroll position rather than by intercepting the
 * wheel — the section is simply tall, and a sticky child holds still inside
 * it. Scrollbar, trackpad, keyboard, Page Down and find-on-page all behave
 * normally, which scroll-jacking would break.
 */
export default function CardScroller() {
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const trackRef = useRef(null);
  const [open, setOpen] = useState(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return undefined;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return undefined;

    let travel = 0;
    let frame = 0;

    // The section is made exactly as tall as the row has to travel, plus one
    // viewport for the pin — so a pixel of scrolling is a pixel of movement.
    const measure = () => {
      const visible = pinRef.current?.clientWidth ?? window.innerWidth;
      travel = Math.max(0, track.scrollWidth - visible);
      section.style.height = `${window.innerHeight + travel}px`;
      apply();
    };

    const apply = () => {
      const top = section.getBoundingClientRect().top;
      const span = section.offsetHeight - window.innerHeight;
      const p = span > 0 ? Math.min(1, Math.max(0, -top / span)) : 0;
      track.style.transform = `translate3d(${-(p * travel).toFixed(2)}px, 0, 0)`;
      setProgress(p);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        apply();
      });
    };

    measure();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', measure);
    // cards arrive lazily, and each one changes how far the row must travel
    const imgs = Array.from(track.querySelectorAll('img'));
    imgs.forEach((img) => img.addEventListener('load', measure));

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', measure);
      imgs.forEach((img) => img.removeEventListener('load', measure));
      if (frame) window.cancelAnimationFrame(frame);
      section.style.height = '';
    };
  }, []);

  return (
    <>
      <section className="cards" ref={sectionRef} aria-label="Selected work">
        <div className="cards__pin" ref={pinRef}>
          <div className="cards__track" ref={trackRef}>
            {cards.map((card, i) => (
              <button
                className="cards__card"
                key={card.key}
                type="button"
                onClick={() => setOpen(card.project)}
                aria-label={`Open ${card.label} — ${card.project.gallery.length} images`}
              >
                <span className="cards__media">
                  <img
                    src={asset(card.src)}
                    alt={card.alt}
                    loading={i < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    draggable="false"
                  />
                </span>
                <span className="cards__label">
                  <span className="cards__name">{card.label}</span>
                  <span className="cards__meta">{card.meta}</span>
                </span>
              </button>
            ))}
          </div>

          <div className="cards__progress" aria-hidden="true">
            <span style={{ transform: `scaleX(${progress || 0})` }} />
          </div>
        </div>
      </section>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </>
  );
}
