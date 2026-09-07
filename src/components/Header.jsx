import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { navLinks, profile, ticker } from '../data/site.js';
import './Header.css';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  // condense the bar once the page has scrolled
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // lock the page behind the mobile panel, and close it on Escape / desktop
  useEffect(() => {
    document.documentElement.classList.toggle('nav-open', open);

    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = (e) => {
      if (e.matches) setOpen(false);
    };

    document.addEventListener('keydown', onKey);
    mq.addEventListener('change', onChange);
    return () => {
      document.removeEventListener('keydown', onKey);
      mq.removeEventListener('change', onChange);
      document.documentElement.classList.remove('nav-open');
    };
  }, [open]);

  return (
    <header className={`header${stuck ? ' is-stuck' : ''}`}>
      <div className="header__bar">
        <div className="container header__inner">
          <a href="#top" className="brand" aria-label={`${profile.name} — home`}>
            <span className="brand__mark">{profile.initials}</span>
            <span className="brand__status">
              <span className="dot dot--pulse" />
              {profile.availability}
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a key={link.href} className="nav__link" href={link.href} data-nav-link>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <Icon name="menu" size={20} className="nav-toggle__open" />
            <Icon name="close" size={20} className="nav-toggle__close" />
          </button>
        </div>

        <div className="ticker" role="note">
          <div className="container ticker__inner no-scrollbar">
            {ticker.map((item) => (
              <span className="ticker__item" key={item.label}>
                {item.status && <span className="dot" />}
                <span className="ticker__label">{item.label}</span>
                <span className="ticker__value">{item.value}</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        <div className="container mobile-nav__inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="mobile-nav__link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <Icon name="arrow" size={16} />
            </a>
          ))}
          <a
            className="btn btn--primary mobile-nav__cta"
            href="#contact"
            onClick={() => setOpen(false)}
          >
            Hire Me
            <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}
