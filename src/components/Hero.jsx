import { Fragment, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import { hero, profile, stats } from '../data/site.js';
import './Hero.css';

// Resolve the optional headshot against the configured base path
const photo = profile.photo
  ? `${import.meta.env.BASE_URL}/${profile.photo}`.replace(/\/{2,}/g, '/')
  : '';

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
      <div className="glow glow--primary hero__glow-a" />
      <div className="glow glow--secondary hero__glow-b" />

      <div className="container hero__grid">
        {/* ---------------------------------------------------------- copy */}
        <div className="hero__copy">
          <div className="hero__status" data-reveal>
            <span className="hero__available">
              <span className="dot dot--pulse" />
              {hero.availability}
            </span>
          </div>

          <h1 className="t-hero hero__title" data-reveal data-reveal-delay="60">
            {hero.headlineLead}{' '}
            <span className="hero__accent">{hero.headlineAccent}</span>
            {hero.headlineAccentSuffix} {hero.headlineTail}
          </h1>

          <p className="t-lead hero__intro" data-reveal data-reveal-delay="120">
            {hero.intro}
          </p>

          <ul className="hero__chips" data-reveal data-reveal-delay="180">
            {hero.chips.map((chip) => (
              <li
                key={chip.label}
                className={`hero__chip${chip.tone ? ` hero__chip--${chip.tone}` : ''}`}
              >
                <Icon name={chip.icon} size={13} />
                {chip.label}
              </li>
            ))}
          </ul>

          <div className="hero__actions" data-reveal data-reveal-delay="240">
            <a className="btn btn--primary hero__cta" href={hero.primaryCta.href}>
              <Icon name={hero.primaryCta.icon} size={16} />
              {hero.primaryCta.label}
            </a>
          </div>

          <p className="hero__direct t-code" data-reveal data-reveal-delay="280">
            <Icon name="phone" size={13} />
            {hero.directLine}
          </p>
        </div>

        {/* -------------------------------------------------- profile card */}
        <aside className="hero__card card card--glass" data-reveal data-reveal-delay="140">
          <div className="hero__chrome" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="hero__card-head">
            {photo ? (
              <img
                className="hero__photo"
                src={photo}
                alt={profile.name}
                width="156"
                height="156"
              />
            ) : (
              <div className="hero__photo hero__photo--fallback" aria-hidden="true">
                {profile.initials}
              </div>
            )}

            <div className="hero__id">
              <p className="hero__name">{profile.name}</p>
              <p className="hero__role">{hero.card.role}</p>
              <p className="hero__cred">{hero.card.credential}</p>
            </div>
          </div>

          <div className="hero__engine">
            <p className="hero__engine-label">{hero.card.status}</p>

            <ol className="pipe">
              {hero.card.pipeline.map((stage, i) => (
                <Fragment key={stage.title}>
                  {i > 0 && <li className="pipe__link" aria-hidden="true" />}
                  <li className={`pipe__node pipe__node--${stage.tone}`}>
                    <span className="pipe__title">{stage.title}</span>
                    <span className="pipe__meta">{stage.meta}</span>
                  </li>
                </Fragment>
              ))}
            </ol>
          </div>

          <div className="hero__card-foot">
            <p className="hero__verified">
              <Icon name="shield" size={15} />
              {hero.card.verified}
            </p>
            <button
              className={`hero__copy-email${copied ? ' is-copied' : ''}`}
              type="button"
              onClick={copyEmail}
            >
              {copied ? hero.card.copiedLabel : hero.card.copyLabel}
            </button>
          </div>
        </aside>
      </div>

      {/* -------------------------------------------------------- stat strip */}
      <div className="container">
        <div className="stats" data-reveal>
          {stats.map((stat) => (
            <div className="stats__cell" key={stat.label}>
              <p className="stats__value">{stat.value}</p>
              <p className="stats__label">{stat.label}</p>
              <p className="stats__note">{stat.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
