// Writes the server-rendered markup into dist/index.html so crawlers and link previews read real content.
import { readFileSync, writeFileSync, rmSync } from 'node:fs';
import { render } from '../dist-ssr/entry-server.js';

const file = 'dist/index.html';
const html = readFileSync(file, 'utf8');
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error('prerender: no se encontró el contenedor raíz en dist/index.html');
writeFileSync(file, html.replace(marker, `<div id="root" data-ssr>${render()}</div>`));
rmSync('dist-ssr', { recursive: true, force: true });
console.log('prerender: dist/index.html listo');
