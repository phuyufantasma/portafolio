import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import './index.css';

const root = document.getElementById('root')!;
const app = <React.StrictMode><App /></React.StrictMode>;
// The built page ships prerendered markup (see scripts/prerender.mjs); in dev the root is empty.
if (root.hasChildNodes()) hydrateRoot(root, app); else createRoot(root).render(app);
