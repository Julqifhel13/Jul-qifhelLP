import { useState } from 'react';
import Icon from './Icon.jsx';
import Lightbox from './Lightbox.jsx';
import { projects } from '../data/site.js';
import './Projects.css';

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="section" id="projects">
      <div className="container">
        <header className="section-head">
          <div data-reveal>
            <p className="eyebrow">{projects.eyebrow}</p>
            <h2 className="t-h2 section-head__title">{projects.heading}</h2>
          </div>
          <p className="t-body section-head__note" data-reveal data-reveal-delay="80">
            {projects.note}
          </p>
        </header>

        <ul className="pj">
          {projects.items.map((item, i) => (
            <li
              className={`pj__item card card--hover${item.gallery ? ' pj__item--clickable' : ''}`}
              key={item.title}
              data-reveal
              data-reveal-delay={String(i * 80)}
            >
              {/* abstract build preview */}
              <div className={`pj__preview pj__preview--${item.preview}`} aria-hidden="true">
                <div className="pj__chrome">
                  <span />
                  <span />
                  <span />
                  <div className="pj__url" />
                </div>
                <div className="pj__mock">
                  <div className="pj__mock-row pj__mock-row--wide" />
                  <div className="pj__mock-row" />
                  <div className="pj__mock-grid">
                    <div />
                    <div />
                    <div />
                  </div>
                  <div className="pj__mock-row pj__mock-row--short" />
                </div>
              </div>

              <div className="pj__body">
                <span className={`pill pill--${item.tone} pj__badge`}>{item.badge}</span>
                <h3 className="pj__title">{item.title}</h3>
                <p className="pj__text">{item.body}</p>
              </div>

              <hr className="rule" />

              <footer className="pj__footer">
                <ul className="pj__tags">
                  {item.tags.map((tag) => (
                    <li className="tag" key={tag}>
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="pj__arrow" aria-hidden="true">
                  <Icon name="arrow" size={15} />
                </span>
              </footer>

              {/* Covers the whole card so any click opens the gallery, while
                  the heading and copy stay real text for screen readers. */}
              {item.gallery && (
                <button
                  className="pj__open"
                  type="button"
                  onClick={() => setOpen(item)}
                  aria-label={`View ${item.gallery.length} screenshots of ${item.title}`}
                />
              )}
            </li>
          ))}
        </ul>
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
