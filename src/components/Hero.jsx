import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { hero, profile, stats } from '../data/site.js';
import './Hero.css';

// Resolve the optional headshot against the configured base path
const photo = profile.photo
  ? `${import.meta.env.BASE_URL}/${profile.photo}`.replace(/\/{2,}/g, '/')
  : '';

/** One masked line of display type. The outer span is the clipping window. */
function Line({ children, index }) {
  return (
    <span className="line" style={{ '--line': index }}>
      <span>{children}</span>
    </span>
  );
}

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
    <section className="hero section section--flush" id="top">
      <div className="container">
        {/* Top rule — the hero opens on metadata, the way an editorial
            spread opens on a folio line rather than straight into the body. */}
        <div className="hero__rule" data-enter style={{ '--enter-delay': '80ms' }}>
          <span className="tag">{hero.marker}</span>
          <span className="tag">{profile.location}</span>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <h1 className="t-hero hero__name lines" data-enter style={{ '--enter-delay': '160ms' }}>
              <Line index={0}>{profile.name}</Line>
            </h1>

            <p className="hero__role lines" data-enter style={{ '--enter-delay': '240ms' }}>
              {hero.roleLines.map((text, i) => (
                <Line key={text} index={i}>
                  {text}
                </Line>
              ))}
            </p>

            <p className="t-lead hero__intro" data-enter style={{ '--enter-delay': '480ms' }}>
              {hero.intro}
            </p>

            <div className="hero__actions" data-enter style={{ '--enter-delay': '560ms' }}>
              <a className="btn btn--primary" href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className="btn btn--ghost" href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
                <Icon name="arrow" size={16} />
              </a>
            </div>
          </div>

          {/* The portrait balances the type column. It is a plain framed
              image, not a panel — no chrome, no diagram, no badges. */}
          {photo && (
            <div className="hero__portrait" data-enter style={{ '--enter-delay': '320ms' }}>
              <img src={photo} alt={profile.name} width="640" height="800" />
            </div>
          )}
        </div>

        {/* Availability and the direct line stay present but quiet, sitting
            on the closing hairline rather than competing with the headline. */}
        <div className="hero__meta" data-enter style={{ '--enter-delay': '640ms' }}>
          <p className="hero__available">
            <span className="dot dot--pulse" />
            {hero.availability}
          </p>

          <div className="hero__contact">
            <a className="hero__link" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
            <button
              className={`hero__link hero__copy-email${copied ? ' is-copied' : ''}`}
              type="button"
              onClick={copyEmail}
            >
              {copied ? hero.card.copiedLabel : profile.email}
            </button>
          </div>
        </div>
      </div>

      {/* -------------------------------------------------------- stat strip */}
      <div className="container">
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
