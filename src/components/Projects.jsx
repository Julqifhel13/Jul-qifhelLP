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

                  {/* The Figma showcase, rebuilt as markup rather than pasted in
                      as a flattened poster: a framed preview beside the written
                      contribution. Only then does the copy render at a size
                      anyone can read — the poster set it at roughly 5px once
                      scaled to card width. It still opens full-screen below. */}
                  <div className="pj__build">
                    <button
                      className="pj__shot"
                      type="button"
                      onClick={() => setOpen(item)}
                      aria-label={`Open ${item.title} — ${count} images`}
                    >
                      <span className="pj__frame">
                        <span className="pj__chrome" aria-hidden="true">
                          <span className="pj__dot" />
                          <span className="pj__dot" />
                          <span className="pj__dot" />
                          <span className="pj__chrome-url">{item.preview.label}</span>
                          {/* In the title bar rather than over the artwork —
                              anywhere on the screenshot lands on its content. */}
                          <span className="pj__cue">
                            <Icon name="expand" size={12} />
                            View {count} images
                          </span>
                        </span>

                        <span className="pj__viewport">
                          {failed[item.preview.src] ? (
                            <span className="pj__shot-fallback">{item.preview.caption}</span>
                          ) : (
                            <img
                              className="pj__shot-img"
                              src={asset(item.preview.src)}
                              alt={item.preview.alt}
                              loading={i === 0 ? 'eager' : 'lazy'}
                              decoding="async"
                              onError={() =>
                                setFailed((f) => ({ ...f, [item.preview.src]: true }))
                              }
                            />
                          )}
                        </span>
                      </span>

                      <span className="pj__shot-caption">{item.preview.caption}</span>
                    </button>

                    <div className="pj__what">
                      <dl className="pj__meta">
                        <div className="pj__meta-row">
                          <dt>Role</dt>
                          <dd>{item.role}</dd>
                        </div>
                      </dl>

                      <p className="pj__what-head">What I built</p>

                      <ul className="pj__bullets">
                        {item.highlights.map((h, n) => (
                          <li className="pj__bullet" key={h.title}>
                            <span className="pj__bullet-n" aria-hidden="true">
                              {String(n + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <h4 className="pj__bullet-title">{h.title}</h4>
                              <p className="pj__bullet-body">{h.body}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

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
