import { useState } from 'react';
import Icon from './Icon.jsx';
import Lightbox from './Lightbox.jsx';
import { projects } from '../data/site.js';
import './Projects.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [failed, setFailed] = useState({});

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

        <ol className="pj">
          {projects.items.map((item, i) => {
            const count = item.gallery?.length ?? 0;

            return (
              <li
                className="pj__item"
                key={item.title}
                data-reveal
                data-reveal-delay={String(i * 80)}
              >
                <span className="pj__node" aria-hidden="true" />

                <article className="pj__card card">
                  <div className="pj__top">
                    <div className="pj__badges">
                      <span className={`pill pill--${item.tone}`}>{item.badge}</span>
                      <span className="pill pill--muted">{item.scope}</span>
                    </div>

                    <ul className="pj__stack">
                      {item.tags.map((tech) => (
                        <li className="tag" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <h3 className="t-h3 pj__title">{item.title}</h3>
                  <p className="pj__subtitle">{item.body}</p>

                  {/* The showcase graphic tells the project's story, so it takes
                      the place the bullet list holds in the experience rows —
                      and doubles as the door into that project's screenshots. */}
                  {count > 0 && (
                    <button
                      className="pj__shot"
                      type="button"
                      onClick={() => setOpen(item)}
                      aria-label={`Open ${item.title} — ${count} screenshots`}
                    >
                      {/* The cue sits above the artwork rather than on it —
                          every corner of the graphic is already spoken for. */}
                      <span className="pj__shot-cue" aria-hidden="true">
                        <Icon name="expand" size={13} />
                        View {count} screenshots
                      </span>

                      <span className="pj__shot-frame">
                        {failed[item.graphic] ? (
                          <span className="pj__shot-fallback">{item.title}</span>
                        ) : (
                          <img
                            className="pj__shot-img"
                            src={asset(item.graphic)}
                            alt={item.graphicAlt}
                            width="2200"
                            height="1238"
                            loading={i === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            onError={() => setFailed((f) => ({ ...f, [item.graphic]: true }))}
                          />
                        )}
                      </span>
                    </button>
                  )}

                  <footer className="pj__footer">
                    <p className="pj__footer-text">{item.result}</p>
                    <span className="pj__footer-tag tag">{item.resultTag}</span>
                  </footer>
                </article>
              </li>
            );
          })}
        </ol>
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
