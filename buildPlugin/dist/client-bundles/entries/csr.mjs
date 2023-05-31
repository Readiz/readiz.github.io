import 'react';
import { createRoot } from 'react-dom/client';
import { C as ClientAppWrapper } from './ClientAppWrapper-cf222eb7.js';
import { A as App } from './App-caf536e2.js';
import { jsx } from 'react/jsx-runtime';
import 'react-router-dom';
import 'dequal';
import '/@react-pages/pages';
import '/@react-pages/theme';
import 'react-dom';

/**
 * This is the entry for client-side-render(csr).
 * Used in: dev mode, build mode.
 */

const container = document.getElementById('root');
const root = createRoot(container);
root.render( /*#__PURE__*/jsx(ClientAppWrapper, {
  children: /*#__PURE__*/jsx(App, {})
}));
//# sourceMappingURL=csr.mjs.map
