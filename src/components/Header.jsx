import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import ShiftText from './ShiftText.jsx';
import ThemeToggle from './ThemeToggle.jsx';
import { navLinks, profile } from '../data/site.js';
import './Header.css';

/** Local time where he is, in the reference's "12:58 UK" corner marker. */
function useLocalClock(timeZone) {
  const read = () =>
    new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(new Date());

  const [time, setTime] = useState(read);

  useEffect(() => {
    const id = window.setInterval(() => setTime(read()), 30000);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeZone]);

  return time;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const clock = useLocalClock('Asia/Manila');

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
    <header className="header">
      <div className="header__inner">
        {/* The reference's wordmark is simply the studio name, set large.
            Here that is his own name. */}
        <a href="#top" className="wordmark" aria-label={`${profile.name} — home`}>
          Jul-qifhel
        </a>

        <nav className="nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className="nav__link" href={link.href} data-nav-link>
              <ShiftText>{link.label}</ShiftText>
            </a>
          ))}
        </nav>

        <div className="header__end">
          {/* "12:58 UK" in the reference — local time plus region. */}
          <p className="header__clock">
            {clock}
            <sup>PH</sup>
          </p>

          <ThemeToggle />

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <Icon name="menu" size={22} className="nav-toggle__open" />
            <Icon name="close" size={22} className="nav-toggle__close" />
          </button>
        </div>
      </div>

      {/* Full-screen menu — the reference sets its mobile links at 40px/600. */}
      <div className="mobile-nav" id="mobile-nav" hidden={!open}>
        <div className="mobile-nav__inner">
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="mobile-nav__link"
              href={link.href}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <p className="mobile-nav__meta">
            {profile.location} · {profile.email}
          </p>
        </div>
      </div>
    </header>
  );
}
