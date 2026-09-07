import Icon from './Icon.jsx';
import { experience } from '../data/site.js';
import './Experience.css';

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <header className="section-head">
          <div data-reveal>
            <p className="eyebrow">{experience.eyebrow}</p>
            <h2 className="t-h2 section-head__title">{experience.heading}</h2>
          </div>
          <p className="t-body section-head__note" data-reveal data-reveal-delay="80">
            {experience.note}
          </p>
        </header>

        <ol className="xp">
          {experience.roles.map((role, i) => (
            <li
              className="xp__item"
              key={role.company}
              data-reveal
              data-reveal-delay={String(i * 80)}
            >
              <span
                className={`xp__node${role.current ? ' xp__node--live' : ''}`}
                aria-hidden="true"
              />

              <article className={`xp__card card${role.current ? ' xp__card--current' : ''}`}>
                <div className="xp__top">
                  <div className="xp__badges">
                    <span className={`pill pill--${role.badge.tone}`}>
                      {role.current && <span className="dot dot--pulse" />}
                      {role.badge.label}
                    </span>
                    <span className="pill pill--muted">{role.period}</span>
                  </div>

                  <ul className="xp__stack">
                    {role.stack.map((tech) => (
                      <li className="tag" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                <h3 className="t-h3 xp__company">{role.company}</h3>
                <p className="xp__subtitle">{role.subtitle}</p>

                <ul className="xp__bullets">
                  {role.bullets.map((bullet) => (
                    <li className="xp__bullet" key={bullet.title}>
                      <span className="xp__bullet-icon" aria-hidden="true">
                        <Icon name="check" size={12} stroke={2.4} />
                      </span>
                      <div>
                        <h4 className="xp__bullet-title">{bullet.title}</h4>
                        <p className="xp__bullet-body">{bullet.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <footer className="xp__footer">
                  <p className="xp__footer-text">{role.footer}</p>
                  <span className="xp__footer-tag tag">{role.footerTag}</span>
                </footer>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
