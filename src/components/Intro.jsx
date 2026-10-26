import { useEffect, useState } from 'react';
import './Intro.css';

/**
 * The reference's opening transition (its c-Preloader): a full-screen yellow
 * panel with the wordmark centred, clipped by an SVG path whose bottom edge
 * is a shallow curve, then swept upward so that curve wipes across the page.
 *
 * The sweep itself is a CSS animation, not a JS one — if this component
 * never mounts or the bundle fails, the panel still animates away and the
 * page is never left covered. React only removes it from the DOM afterwards
 * so it cannot trap focus or clicks.
 */

// Matches the CSS: 900ms hold + 1000ms sweep, with a little slack.
const TOTAL_MS = 2000;

export default function Intro({ wordmark }) {
  const [done, setDone] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (done) return undefined;
    document.documentElement.classList.add('intro-running');
    const id = window.setTimeout(() => setDone(true), TOTAL_MS);
    return () => {
      window.clearTimeout(id);
      document.documentElement.classList.remove('intro-running');
    };
  }, [done]);

  useEffect(() => {
    if (done) document.documentElement.classList.remove('intro-running');
  }, [done]);

  if (done) return null;

  return (
    <div className="intro" aria-hidden="true">
      {/* The reference's curve, rescaled.
          Its path runs to y=1.4, which only works because clipPathUnits are
          fractions of the box — and a clip can only subtract, never paint
          outside it, so anything past y=1 is simply dropped and the edge
          comes out flat. Dividing every y by 1.4 puts the same curve in the
          bottom ~14% of the panel, and the panel is 118vh tall so that tail
          starts just below the fold. */}
      <svg className="intro__clip" width="0" height="0" focusable="false">
        <clipPath id="introClipPath" clipPathUnits="objectBoundingBox">
          <path d="M0 1S.084 .858 .286 .857 .652 .993 1.001 .995L1 0H0" />
        </clipPath>
      </svg>

      <p className="intro__mark">{wordmark}</p>
    </div>
  );
}
