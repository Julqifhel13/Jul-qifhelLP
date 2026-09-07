import Icon from './Icon.jsx';
import { skills } from '../data/site.js';
import './Skills.css';

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <header className="section-head">
          <div data-reveal>
            <p className="eyebrow">{skills.eyebrow}</p>
            <h2 className="t-h2 section-head__title">{skills.heading}</h2>
          </div>
          <p className="t-body section-head__note" data-reveal data-reveal-delay="80">
            {skills.note}
          </p>
        </header>

        <ul className="sk">
          {skills.groups.map((group, i) => (
            <li
              className="sk__card card card--hover"
              key={group.title}
              data-reveal
              data-reveal-delay={String(i * 70)}
            >
              <div className="sk__head">
                <span className={`icon-tile icon-tile--${group.accent}`}>
                  <Icon name={group.icon} size={18} />
                </span>
                <span className={`pill pill--${group.accent} sk__badge`}>{group.badge}</span>
              </div>

              <h3 className="sk__title">{group.title}</h3>

              <ul className="sk__list">
                {group.items.map((item) => (
                  <li className="sk__item" key={item}>
                    <Icon name="check" size={12} stroke={2.4} className="sk__check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="sk__meter">
                <div className="sk__meter-head">
                  <span className="tag">{group.levelLabel}</span>
                  <span className="sk__meter-value">{group.level}%</span>
                </div>
                <div
                  className="sk__track"
                  role="meter"
                  aria-valuenow={group.level}
                  aria-valuemin="0"
                  aria-valuemax="100"
                  aria-label={`${group.title} proficiency`}
                >
                  <span className="sk__fill" style={{ '--level': `${group.level}%` }} />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
