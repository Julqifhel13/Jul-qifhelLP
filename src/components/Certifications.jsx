import { useMemo, useState } from 'react';
import Icon from './Icon.jsx';
import { certifications } from '../data/site.js';
import './Certifications.css';

export default function Certifications() {
  const [active, setActive] = useState('all');

  const counts = useMemo(
    () =>
      certifications.filters.map((f) => ({
        ...f,
        count:
          f.id === 'all'
            ? certifications.items.length
            : certifications.items.filter((c) => c.cat === f.id).length,
      })),
    []
  );

  const shown = certifications.items.filter(
    (item) => active === 'all' || item.cat === active
  );

  return (
    <section className="section" id="certifications">
      <div className="container">
        <header className="section-head">
          <div data-reveal>
            <p className="eyebrow">{certifications.eyebrow}</p>
            <h2 className="t-h2 section-head__title">{certifications.heading}</h2>
          </div>
          <p className="t-body section-head__note" data-reveal data-reveal-delay="80">
            {certifications.note}
          </p>
        </header>

        <div
          className="cert__filters no-scrollbar"
          role="tablist"
          aria-label="Certification categories"
          data-reveal
        >
          {counts.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              className="cert__filter"
              aria-selected={active === f.id}
              data-filter={f.id}
              onClick={() => setActive(f.id)}
            >
              {f.label}
              <span className="cert__count">{f.count}</span>
            </button>
          ))}
        </div>

        <ul className="cert__grid">
          {certifications.items.map((item, i) => (
            <li
              className="cert__card card card--hover"
              key={item.title}
              hidden={active !== 'all' && item.cat !== active}
              data-cat={item.cat}
              data-reveal
              data-reveal-delay={String(Math.min(i, 8) * 45)}
            >
              <div className="cert__top">
                <span className="cert__issuer">{item.issuer}</span>
                <Icon name="badge" size={15} className="cert__verified" />
              </div>

              <h3 className="cert__title">{item.title}</h3>

              <hr className="rule" />

              <div className="cert__foot">
                <span className="tag">Issued {item.year}</span>
                <span className="cert__status">
                  <span className="dot" />
                  Verified
                </span>
              </div>
            </li>
          ))}
        </ul>

        <p className="cert__empty" hidden={shown.length > 0}>
          No certifications in this category yet.
        </p>
      </div>
    </section>
  );
}
