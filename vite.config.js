import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://julqifhel13.github.io/Jul-qifhelLP/
// Moving to a custom domain (or Vercel/Netlify)? Set BASE_PATH=/ when building.
const BASE_PATH = process.env.BASE_PATH ?? '/Jul-qifhelLP/';

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  server: {
    // Bind every loopback address, not just IPv6. Node resolves "localhost"
    // to ::1 first, so the default binding leaves 127.0.0.1 dead — and Chrome
    // prefers IPv4 for localhost, which made the dev server unreachable there
    // while other browsers were fine. This also exposes the server on your
    // LAN, which is handy for checking the site on a phone.
    host: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
