import { useState } from 'react';
import Lightbox from './Lightbox.jsx';
import ShiftText from './ShiftText.jsx';
import { projects } from '../data/site.js';
import './Projects.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

export default function Projects() {
  const [open, setOpen] = useState(null);
  const [failed, setFailed] = useState({});

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* The reference opens its work with a plain statement, not a
            label-and-note header. */}
        <h2 className="t-h2 projects__intro" data-reveal>
          {projects.intro}
        </h2>

        <ol className="projects-grid">
          {projects.items.map((item, i) => {
            const count = item.gallery?.length ?? 0;

            return (
              <li
                className="tile-project"
                key={item.title}
                data-reveal
                data-reveal-delay={String((i % 2) * 90)}
              >
                <button
                  className="tile-project__image"
                  type="button"
                  onClick={() => setOpen(item)}
                  aria-label={`Explore ${item.title} — ${count} images`}
                >
                  <span className="tile-project__format">
                    {failed[item.preview.src] ? (
                      <span className="tile-project__fallback">{item.preview.caption}</span>
                    ) : (
                      <img
                        className="ar-16x9"
                        src={asset(item.preview.src)}
                        alt={item.preview.alt}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        onError={() => setFailed((f) => ({ ...f, [item.preview.src]: true }))}
                      />
                    )}
                  </span>
                </button>

                <div className="tile-project__content">
                  <h3 className="t-h3 tile-project__title">
                    <button type="button" onClick={() => setOpen(item)}>
                      <ShiftText>{item.title}</ShiftText>
                    </button>
                  </h3>

                  <p className="tile-project__desc">{item.body}</p>

                  <ul className="cats">
                    {item.tags.slice(0, 3).map((tag) => (
                      <li className="cat" key={tag}>
                        {tag}
                      </li>
                    ))}
                    <li className="cat cat--count">{count} images</li>
                  </ul>
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
