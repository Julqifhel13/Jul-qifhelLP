import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from https://julqifhel13.github.io/Jul-qifhelLP/
// Moving to a custom domain (or Vercel/Netlify)? Set BASE_PATH=/ when building.
const BASE_PATH = process.env.BASE_PATH ?? '/Jul-qifhelLP/';

export default defineConfig({
  base: BASE_PATH,
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
