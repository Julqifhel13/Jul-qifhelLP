import Icon from './Icon.jsx';
import { about } from '../data/site.js';
import './About.css';

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about__top">
          <div data-reveal>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2 className="t-h2 about__title">
              {about.heading.map((line) => (
                <span className="about__line" key={line}>
                  {line}
                </span>
              ))}
            </h2>
            <p className="t-lead about__body">{about.body}</p>
          </div>

          <figure className="about__objective card" data-reveal data-reveal-delay="100">
            <figcaption className="about__objective-label">
              <Icon name="target" size={14} />
              {about.objective.label}
            </figcaption>
            <blockquote className="about__quote">{about.objective.quote}</blockquote>
            <hr className="rule" />
            <ul className="about__meta">
              {about.objective.meta.map((m) => (
                <li className="tag" key={m}>
                  {m}
                </li>
              ))}
            </ul>
          </figure>
        </div>

        <ul className="about__pillars">
          {about.pillars.map((pillar, i) => (
            <li
              className="about__pillar card card--hover"
              key={pillar.title}
              data-reveal
              data-reveal-delay={String(i * 70)}
            >
              <span className={`icon-tile icon-tile--${pillar.accent}`}>
                <Icon name={pillar.icon} size={18} />
              </span>
              <h3 className="about__pillar-title">{pillar.title}</h3>
              <p className="about__pillar-body">{pillar.body}</p>
              <hr className="rule" />
              <ul className="about__pillar-tags">
                {pillar.tags.map((tag) => (
                  <li className="tag" key={tag}>
                    {tag}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
