/**
 * Inline stroke icons. Add a new one by dropping another entry into `paths`.
 */
const paths = {
  zap: '<path d="M13 2 4.09 12.97a1 1 0 0 0 .77 1.63h5.51l-1.37 7.4 8.9-10.97a1 1 0 0 0-.77-1.63h-5.51z"/>',
  route:
    '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M9 19h6a4 4 0 0 0 0-8H9a4 4 0 0 1 0-8h6"/>',
  code: '<path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  sparkles:
    '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5"/><path d="m3 17 9 5 9-5"/>',
  workflow:
    '<rect x="3" y="3" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/><path d="M6.5 9v5a4 4 0 0 0 4 4H14"/>',
  layout: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>',
  megaphone:
    '<path d="M3 11v2a1 1 0 0 0 1 1h2l5 4V6L6 10H4a1 1 0 0 0-1 1Z"/><path d="M16 8.5a4 4 0 0 1 0 7"/><path d="M19 5.5a8 8 0 0 1 0 13"/>',
  server:
    '<rect x="3" y="4" width="18" height="7" rx="1.5"/><rect x="3" y="13" width="18" height="7" rx="1.5"/><path d="M7 7.5h.01M7 16.5h.01"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7 8.5 6 8.5-6"/>',
  phone:
    '<path d="M6.5 3h3l1.5 4.5-2 1.5a12 12 0 0 0 6 6l1.5-2L21 14.5v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z"/>',
  pin: '<path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
  check: '<path d="m4 12.5 5 5L20 6.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  external:
    '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
  badge:
    '<path d="m12 2 2.4 1.8 3-.2.9 2.9 2.5 1.7-1.2 2.8 1.2 2.8-2.5 1.7-.9 2.9-3-.2L12 20l-2.4-1.8-3 .2-.9-2.9L3.2 13.8 4.4 11 3.2 8.2l2.5-1.7.9-2.9 3 .2Z"/><path d="m9.5 11.8 1.8 1.8 3.4-3.6"/>',
  cap: '<path d="M2.5 8.5 12 4l9.5 4.5L12 13 2.5 8.5Z"/><path d="M6.5 10.5V16c0 1.4 2.5 2.8 5.5 2.8s5.5-1.4 5.5-2.8v-5.5"/><path d="M21.5 8.5V14"/>',
  calendar: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  building:
    '<path d="M4 21V6a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v15"/><path d="M15 10h4a1 1 0 0 1 1 1v10"/><path d="M2 21h20M8 9h3M8 13h3M8 17h3"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7.5 10.5V17M7.5 7.5v.01M11.5 17v-3.6a2.4 2.4 0 0 1 4.8 0V17M11.5 17v-6.5"/>',
  github:
    '<path d="M9 19c-4 1.4-4-2.2-5.5-2.8M15 21v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.4-1.3 5.4-6a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 0 0-6 0C6.3 2.6 5.3 2.9 5.3 2.9a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 3.9 9.3c0 4.7 2.7 5.7 5.4 6a3 3 0 0 0-.8 2.3V21"/>',
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3a14 14 0 0 1 0 18a14 14 0 0 1 0-18Z"/>',
  chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  bolt: '<path d="M4 14h6l-1 8 11-12h-6l1-8Z"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/>',
  copy: '<rect x="9" y="9" width="12" height="12" rx="2"/><path d="M6 15H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1"/>',
  download: '<path d="M12 4v11M7.5 10.5 12 15l4.5-4.5"/><path d="M4 19h16"/>',
};

export default function Icon({ name, size = 18, className = '', stroke = 1.6 }) {
  const d = paths[name] ?? paths.zap;

  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      dangerouslySetInnerHTML={{ __html: d }}
    />
  );
}
