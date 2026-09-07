import Icon from './Icon.jsx';
import { education } from '../data/site.js';
import './Education.css';

const { main, aside } = education;

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <div className="edu">
          <article className="edu__main card" data-reveal>
            <p className="eyebrow">{education.eyebrow}</p>

            <h2 className="t-h3 edu__degree">{main.degree}</h2>

            <ul className="edu__meta">
              <li>
                <Icon name="building" size={14} />
                {main.school}
              </li>
              <li>
                <Icon name="pin" size={14} />
                {main.place}
              </li>
              <li>
                <Icon name="calendar" size={14} />
                {main.period}
              </li>
            </ul>

            <p className="edu__body">{main.body}</p>

            <hr className="rule" />

            <ul className="edu__tags">
              {main.tags.map((tag) => (
                <li className="pill pill--muted" key={tag}>
                  {tag}
                </li>
              ))}
            </ul>
          </article>

          <aside className="edu__aside card" data-reveal data-reveal-delay="100">
            <span className="icon-tile icon-tile--primary">
              <Icon name="cap" size={18} />
            </span>
            <h3 className="edu__aside-title">{aside.title}</h3>
            <p className="edu__aside-body">{aside.body}</p>

            <div className="edu__aside-foot">
              <span className="tag">{main.period}</span>
              <span className="edu__aside-status">
                <span className="dot" />
                Completed
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
