import { renderToString } from 'react-dom/server';
import App from './App';

/** Used only at build time (scripts/prerender.mjs) to write the page's HTML into dist/index.html. */
export const render = () => renderToString(<App />);
