import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import './ThemeToggle.css';

const STORAGE_KEY = 'theme';

/** The inline script in index.html has already picked a theme before paint. */
function currentTheme() {
  return document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.theme = theme;

    // keep the browser chrome in step with the page
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f5f7' : '#070a11');

    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // private mode — the theme still applies for this session
    }
  }, [theme]);

  // follow the OS while the visitor hasn't expressed a preference
  useEffect(() => {
    let stored = null;
    try {
      stored = localStorage.getItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    if (stored) return undefined;

    const mq = window.matchMedia('(prefers-color-scheme: light)');
    const onChange = (e) => setTheme(e.matches ? 'light' : 'dark');
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const next = theme === 'light' ? 'dark' : 'light';

  return (
    <button
      className="theme-toggle"
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} mode`}
      title={`Switch to ${next} mode`}
    >
      <span className="theme-toggle__icons" aria-hidden="true">
        <Icon name="sun" size={17} className="theme-toggle__sun" />
        <Icon name="moon" size={16} className="theme-toggle__moon" />
      </span>
    </button>
  );
}
