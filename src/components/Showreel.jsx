import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { projects } from '../data/site.js';
import './Showreel.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

const SLIDE_MS = 4200;
const SWIPE_PX = 50;

/**
 * The hero carousel. The reference runs a showreel under its opening
 * statement; this is the same slot built from the work itself — one slide
 * per project, captioned with its own title and scope.
 *
 * Slides travel horizontally on a single track. Wrapping from the last back
 * to the first skips the transition, because sliding backwards past every
 * slide to get home reads as a mistake rather than a loop.
 */
export default function Showreel() {
  const slides = projects.items;
  const count = slides.length;

  const [index, setIndex] = useState(0);
  // Slides mount as they are first reached, so the hero costs one image on
  // load instead of all three.
  const [reached, setReached] = useState(1);
  const [instant, setInstant] = useState(false);
  const [held, setHeld] = useState(false);
  const [offscreen, setOffscreen] = useState(false);

  const rootRef = useRef(null);
  const pointer = useRef(null);

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const goTo = useCallback(
    (next) => {
      const target = (next + count) % count;
      // a wrap in either direction jumps rather than scrolls
      const wraps = Math.abs(target - index) > 1;
      setInstant(wraps);
      setIndex(target);
      setReached((r) => Math.max(r, target + 1));
    },
    [count, index]
  );

  // clear the no-transition flag once the jump has painted
  useEffect(() => {
    if (!instant) return undefined;
    const id = window.requestAnimationFrame(() => setInstant(false));
    return () => window.cancelAnimationFrame(id);
  }, [instant]);

  // Stop the timer whenever the carousel is scrolled out of view — an
  // off-screen slideshow repainting every few seconds is pure waste.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver(([entry]) => setOffscreen(!entry.isIntersecting), {
      threshold: 0.15,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduced || held || offscreen || count < 2) return undefined;
    const id = window.setTimeout(() => goTo(index + 1), SLIDE_MS);
    return () => window.clearTimeout(id);
  }, [index, held, offscreen, reduced, count, goTo]);

  // Drag or swipe across the frame to move a slide. Presses that start on a
  // control are left alone — tracking them here raced the button's own click
  // and swallowed roughly every other one.
  const onPointerDown = (e) => {
    if (e.target.closest('button')) return;
    pointer.current = { x: e.clientX, id: e.pointerId };
  };
  const onPointerUp = (e) => {
    const start = pointer.current;
    pointer.current = null;
    if (!start || start.id !== e.pointerId) return;
    const dx = e.clientX - start.x;
    if (Math.abs(dx) < SWIPE_PX) return;
    goTo(index + (dx < 0 ? 1 : -1));
  };

  // Focus moving between the carousel's own controls must not flap the hold
  // off and on again; only focus genuinely leaving it should release.
  const onBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false);
  };

  const current = slides[index];

  return (
    <figure
      className="reel"
      ref={rootRef}
      onMouseEnter={() => setHeld(true)}
      onMouseLeave={() => setHeld(false)}
      onFocusCapture={() => setHeld(true)}
      onBlurCapture={onBlur}
    >
      <div
        className="reel__frame"
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (pointer.current = null)}
      >
        <div
          className={`reel__track${instant ? ' is-instant' : ''}`}
          style={{ '--i': index }}
        >
          {slides.map((item, i) => (
            <div
              className="reel__slide"
              key={item.title}
              aria-hidden={i === index ? undefined : 'true'}
            >
              {i < reached && (
                <img
                  src={asset(item.preview.src)}
                  alt={item.preview.alt}
                  className="ar-16x9"
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  draggable="false"
                />
              )}
            </div>
          ))}
        </div>

        <button
          className="reel__nav reel__nav--prev"
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous project"
        >
          <Icon name="arrow" size={18} />
        </button>
        <button
          className="reel__nav reel__nav--next"
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next project"
        >
          <Icon name="arrow" size={18} />
        </button>
      </div>

      {/* Caption and position sit under the frame, not over it — the posters
          carry their own artwork to the edges and anything laid on top lands
          on it. */}
      <figcaption className="reel__bar">
        <span className="reel__label">
          <span className="reel__title">{current.title}</span>
          <span className="reel__meta">{current.scope}</span>
        </span>

        <span className="reel__dots">
          {slides.map((item, i) => (
            <button
              className={`reel__dot${i === index ? ' is-active' : ''}`}
              key={item.title}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show ${item.title}`}
              aria-current={i === index ? 'true' : undefined}
              style={{ '--slide-ms': `${SLIDE_MS}ms` }}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
}
