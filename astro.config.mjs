// @ts-check
import { defineConfig } from 'astro/config';

/**
 * Deployment target
 * ------------------------------------------------------------------
 * Default is GitHub Pages *project* hosting:
 *   https://julqifhel13.github.io/Jul-qifhelLP/
 *
 * If you later move to a custom domain (or Vercel / Netlify), set:
 *   BASE_PATH = '/'   and   SITE_URL = 'https://yourdomain.com'
 * You can also override without editing this file, e.g.
 *   BASE_PATH=/ SITE_URL=https://yourdomain.com npm run build
 */
const SITE_URL = process.env.SITE_URL ?? 'https://julqifhel13.github.io';
const BASE_PATH = process.env.BASE_PATH ?? '/Jul-qifhelLP';

export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
