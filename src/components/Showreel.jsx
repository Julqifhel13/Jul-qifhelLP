import { useEffect, useRef, useState } from 'react';
import { projects } from '../data/site.js';
import './Showreel.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

const SLIDE_MS = 3400;

/**
 * The hero reel. The reference runs a Vimeo showreel under its opening
 * statement; this is the same idea built from the work itself — each slide
 * is one of the projects, captioned with its own title and scope, wiped in
 * with the reference's mask-up transition.
 *
 * It is a sequence of images rather than an encoded video on purpose: the
 * frames are the real project artwork, they stay crisp at any width, and
 * there is no second copy of the assets to keep in step.
 */
export default function Showreel() {
  const slides = projects.items;
  const [index, setIndex] = useState(0);
  // Slides mount as they are first reached, so the hero costs one image on
  // load instead of all three.
  const [reached, setReached] = useState(1);
  const [paused, setPaused] = useState(false);
  const frameRef = useRef(null);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Stop the reel whenever it is scrolled out of view — an off-screen timer
  // repainting every 3.4s is pure waste.
  useEffect(() => {
    const el = frameRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setPaused(!entry.isIntersecting),
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || paused || slides.length < 2) return undefined;
    const id = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
      setReached((r) => Math.min(slides.length, r + 1));
    }, SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, paused, reduced, slides.length]);

  const current = slides[index];

  return (
    <figure className="reel" ref={frameRef}>
      <div className="reel__frame">
        {slides.map((item, i) => (
          <div
            className={`reel__slide${i === index ? ' is-active' : ''}`}
            key={item.title}
            /* the wipe needs a fresh animation each time a slide becomes
               active, so the key changes with the cycle */
            style={{ zIndex: i === index ? 2 : 1 }}
          >
            {i < reached && (
              <img
                src={asset(item.preview.src)}
                alt={item.preview.alt}
                className="ar-16x9"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
            )}
          </div>
        ))}

      </div>

      {/* Caption and position sit under the frame, not over it — the posters
          carry their own artwork to the edges and anything laid on top lands
          on it. */}
      <figcaption className="reel__bar">
        <span className="reel__label">
          <span className="reel__title">{current.title}</span>
          <span className="reel__meta">{current.scope}</span>
        </span>

        <span className="reel__ticks" aria-hidden="true">
          {slides.map((item, i) => (
            <span
              className={`reel__tick${i === index ? ' is-active' : ''}`}
              key={item.title}
              style={{ '--slide-ms': `${SLIDE_MS}ms` }}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
