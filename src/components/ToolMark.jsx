/**
 * Tool marks for the capability strip.
 *
 * Drawn as single-ink glyphs rather than full-colour brand logos — the way
 * the reference sets its client row — so the strip reads as one piece of
 * typography instead of seven competing palettes.
 *
 * GitHub, Figma, VS Code and Claude follow their real silhouettes. Google
 * Stitch, Antigravity and GoHighLevel do not publish a mark I can reproduce
 * faithfully, so those three are honest stand-ins: a glyph that suits the
 * tool, carrying its name beside it. Swap in a real SVG any time.
 */

const marks = {
  // Anthropic's radiating burst
  claude: (
    <g strokeLinecap="round">
      <path d="M12 3.2v17.6M4.4 7.6l15.2 8.8M19.6 7.6 4.4 16.4" />
    </g>
  ),

  // Figma's five stacked shapes
  figma: (
    <g fill="currentColor" stroke="none">
      <path d="M8.4 2.6H12v5.8H8.4a2.9 2.9 0 0 1 0-5.8Z" />
      <path d="M12 2.6h3.6a2.9 2.9 0 0 1 0 5.8H12V2.6Z" opacity=".75" />
      <path d="M8.4 8.4H12v5.8H8.4a2.9 2.9 0 0 1 0-5.8Z" opacity=".55" />
      <path d="M8.4 14.2H12V20a2.9 2.9 0 1 1-3.6-5.8Z" opacity=".4" />
      <circle cx="15.6" cy="11.3" r="2.9" opacity=".85" />
    </g>
  ),

  github: (
    <path
      fill="currentColor"
      stroke="none"
      d="M12 2.2a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.8c-2.7.6-3.3-1.2-3.3-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.5-1.1-4.5-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.3 4.6-4.5 4.9.3.3.7 1 .7 1.9v2.8c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.2Z"
    />
  ),

  // VS Code's folded ribbon, traced from the official mark's proportions
  vscode: (
    <path
      fill="currentColor"
      stroke="none"
      fillRule="evenodd"
      clipRule="evenodd"
      d="M17 23.8 23 20.9V3.1L17 .2 7.1 9.2 2.4 5.6.5 6.6l4.2 3.6L.5 13.8l1.9 1 4.7-3.6 9.9 12.6ZM17 6.3v11.4L10 12l7-5.7Z"
    />
  ),

  // Stand-in: two anchor points joined by a stitched seam
  stitch: (
    <g strokeLinecap="round">
      <path d="M4.8 15.4c3.2-6.4 11.2-6.4 14.4 0" strokeDasharray="3 2.6" />
      <circle cx="4.8" cy="15.4" r="1.5" />
      <circle cx="19.2" cy="15.4" r="1.5" />
    </g>
  ),

  // Stand-in: lift, in a squircle
  antigravity: (
    <g strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.4" />
      <path d="M12 16.6V8.2M8.6 11.6 12 8.2l3.4 3.4" />
    </g>
  ),

  // Stand-in: a rising pipeline
  gohighlevel: (
    <g strokeLinecap="round">
      <path d="M4.8 19.2V14M10.9 19.2V9.6M17.1 19.2v-3.4M20.5 19.2V5.4" />
    </g>
  ),
};

export default function ToolMark({ name, size = 26 }) {
  const glyph = marks[name];
  if (!glyph) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      aria-hidden="true"
      focusable="false"
    >
      {glyph}
    </svg>
  );
}
