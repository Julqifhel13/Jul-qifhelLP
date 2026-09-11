import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import './Lightbox.css';

const asset = (src) => `${import.meta.env.BASE_URL}/${src}`.replace(/\/{2,}/g, '/');

/**
 * Full-screen screenshot viewer for a project.
 * Tall page screenshots scroll inside the frame rather than being squashed.
 */
export default function Lightbox({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const [failed, setFailed] = useState({});
  // Wide diagrams (workflow canvases) are shown at full size and panned;
  // fitting them to the panel would shrink their labels past legibility.
  const [wide, setWide] = useState(false);
  const closeRef = useRef(null);
  const frameRef = useRef(null);
  const restoreTo = useRef(null);

  const shots = project?.gallery ?? [];
  const count = shots.length;

  const go = useCallback(
    (delta) => {
      setIndex((i) => (i + delta + count) % count);
      setWide(false);
      if (frameRef.current) {
        frameRef.current.scrollTop = 0;
        frameRef.current.scrollLeft = 0;
      }
    },
    [count]
  );

  // keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [go, onClose]);

  // lock the page behind the overlay and restore focus on close
  useEffect(() => {
    restoreTo.current = document.activeElement;
    document.documentElement.classList.add('lightbox-open');
    closeRef.current?.focus();
    return () => {
      document.documentElement.classList.remove('lightbox-open');
      if (restoreTo.current instanceof HTMLElement) restoreTo.current.focus();
    };
  }, []);

  if (!count) return null;
  const shot = shots[index];

  return (
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — screenshots`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="lb__panel">
        <header className="lb__head">
          <div className="lb__heading">
            <p className="lb__title">{project.title}</p>
            <p className="lb__caption">{shot.caption}</p>
          </div>

          <div className="lb__controls">
            <span className="lb__count">
              {index + 1} / {count}
            </span>
            <button
              className="lb__btn"
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous screenshot"
            >
              <Icon name="arrow" size={16} className="lb__prev-icon" />
            </button>
            <button
              className="lb__btn"
              type="button"
              onClick={() => go(1)}
              aria-label="Next screenshot"
            >
              <Icon name="arrow" size={16} />
            </button>
            <button
              className="lb__btn lb__btn--close"
              type="button"
              onClick={onClose}
              ref={closeRef}
              aria-label="Close gallery"
            >
              <Icon name="close" size={16} />
            </button>
          </div>
        </header>

        <div className={`lb__frame${wide ? ' lb__frame--pan' : ''}`} ref={frameRef}>
          {failed[shot.src] ? (
            <p className="lb__missing">
              Screenshot not found. Save it to <code>public/{shot.src}</code>
            </p>
          ) : (
            <img
              className="lb__img"
              src={asset(shot.src)}
              alt={shot.caption}
              loading="eager"
              onLoad={(e) => {
                const img = e.currentTarget;
                // 2.6 separates the two kinds of wide image: workflow canvases
                // (3:1 and beyond, unreadable unless panned) from full-page UI
                // screenshots (~2.2:1), where seeing the whole layout matters
                // more than pixel scale.
                setWide(img.naturalWidth / img.naturalHeight > 2.6);
              }}
              onError={() => setFailed((f) => ({ ...f, [shot.src]: true }))}
            />
          )}
        </div>

        <nav className="lb__thumbs no-scrollbar" aria-label="Screenshots">
          {shots.map((s, i) => (
            <button
              key={s.src}
              type="button"
              className={`lb__thumb${i === index ? ' is-active' : ''}`}
              onClick={() => {
                setIndex(i);
                setWide(false);
                if (frameRef.current) {
                  frameRef.current.scrollTop = 0;
                  frameRef.current.scrollLeft = 0;
                }
              }}
              aria-current={i === index}
            >
              {failed[s.src] ? (
                <span className="lb__thumb-fallback">{i + 1}</span>
              ) : (
                <img
                  src={asset(s.thumb ?? s.src)}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  onError={() => setFailed((f) => ({ ...f, [s.src]: true }))}
                />
              )}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}
