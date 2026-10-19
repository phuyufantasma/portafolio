import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Static site: only self-hosted assets, plus the two players the visitor opts into. Build only (dev needs HMR). */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "frame-src https://bandcamp.com https://www.youtube-nocookie.com",
  "connect-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

const csp: Plugin = {
  name: 'csp-meta',
  apply: 'build',
  transformIndexHtml: () => [{ tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' }],
};

// https://vite.dev/config/
export default defineConfig({
  base: './', // relative: works on the custom domain and under a /repo/ path alike
  plugins: [react(), csp],
  ssr: { noExternal: true }, // bundle everything for the build-time render (lenis imports CSS)
  server: {
    port: 3000,
    open: false,
  },
});
