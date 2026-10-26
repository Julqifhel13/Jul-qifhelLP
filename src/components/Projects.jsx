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

        {/* An editorial sequence rather than a grid of equal cards: the work
            alternates sides down the page, and the image leads every time. */}
        <ol className="pj">
          {projects.items.map((item, i) => {
            const count = item.gallery?.length ?? 0;
            const openGallery = () => setOpen(item);

            return (
              <li className="pj__row" key={item.title}>
                <div className="pj__visual" data-reveal>
                  <button
                    className="pj__shot"
                    type="button"
                    onClick={openGallery}
                    aria-label={`Open the ${item.title} gallery — ${count} images`}
                  >
                    <span className="pj__frame">
                      {failed[item.preview.src] ? (
                        <span className="pj__fallback">{item.preview.caption}</span>
                      ) : (
                        <img
                          className="pj__img"
                          src={asset(item.preview.src)}
                          alt={item.preview.alt}
                          loading={i === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          onError={() => setFailed((f) => ({ ...f, [item.preview.src]: true }))}
                        />
                      )}
                      <span className="pj__cue" aria-hidden="true">
                        <Icon name="expand" size={13} />
                        {count} images
                      </span>
                    </span>
                  </button>
                  <p className="pj__caption">{item.preview.caption}</p>
                </div>

                <div className="pj__info" data-reveal data-reveal-delay="120">
                  <p className="pj__index">
                    {String(i + 1).padStart(2, '0')}
                    <span className="pj__index-total"> / {String(projects.items.length).padStart(2, '0')}</span>
                  </p>

                  <h3 className="t-h3 pj__title">{item.title}</h3>
                  <p className="t-lead pj__desc">{item.body}</p>

                  <p className="pj__role">
                    <span className="tag">Role</span>
                    {item.role}
                  </p>

                  <ul className="pj__built">
                    {item.highlights.map((h) => (
                      <li className="pj__built-item" key={h.title}>
                        <h4 className="pj__built-title">{h.title}</h4>
                        <p className="pj__built-body">{h.body}</p>
                      </li>
                    ))}
                  </ul>

                  <p className="pj__result">{item.result}</p>

                  <div className="pj__foot">
                    <ul className="pj__tags">
                      {/* the three most relevant tools, not the whole stack */}
                      {item.tags.slice(0, 3).map((tech) => (
                        <li className="tag" key={tech}>
                          {tech}
                        </li>
                      ))}
                    </ul>

                    <button className="link-arrow pj__open" type="button" onClick={openGallery}>
                      View {count} images
                      <Icon name="arrow" size={16} />
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {open && <Lightbox project={open} onClose={() => setOpen(null)} />}
    </section>
  );
}
