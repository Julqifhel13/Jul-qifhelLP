import { useEffect, useRef, useState } from 'react';
import Showreel from './Showreel.jsx';
import { hero, profile, stats } from '../data/site.js';
import './Hero.css';

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const timer = useRef();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard API needs a secure context — fall back to the mail client
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section className="hero-section" id="top">
      {/* One centred statement, the way the reference opens: no eyebrow, no
          badges, no portrait — the sentence is the whole first screen. */}
      <h1 className="t-hero hero" data-enter style={{ '--enter-delay': '120ms' }}>
        {hero.statement}
      </h1>

      {/* Full-bleed reel, where the reference runs its showreel. */}
      <div className="hero-media" data-enter style={{ '--enter-delay': '280ms' }}>
        <Showreel />
      </div>

      <div className="container">
        <div className="hero-meta" data-enter style={{ '--enter-delay': '380ms' }}>
          <p className="hero-meta__available">
            <span className="dot dot--pulse" />
            {hero.availability}
          </p>

          <div className="hero-meta__contact">
            <a className="link-shift" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
            <button
              className={`link-shift${copied ? ' is-copied' : ''}`}
              type="button"
              onClick={copyEmail}
            >
              {copied ? hero.card.copiedLabel : profile.email}
            </button>
          </div>
        </div>

        <dl className="stats" data-reveal>
          {stats.map((stat) => (
            <div className="stats__cell" key={stat.label}>
              <dt className="stats__value">{stat.value}</dt>
              <dd className="stats__label">{stat.label}</dd>
              <dd className="stats__note">{stat.note}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
