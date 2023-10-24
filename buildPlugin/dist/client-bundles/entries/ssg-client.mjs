import 'react';
import { hydrateRoot } from 'react-dom/client';
import { A as App } from './App-6f1db792.js';
import { C as ClientAppWrapper } from './ClientAppWrapper-c6221fa9.js';
import initialPages from '/@react-pages/pages';
import { jsx } from 'react/jsx-runtime';
import 'react-router-dom';
import 'dequal';
import '/@react-pages/theme';
import 'react-dom';

/**
 * This is the entry for static-site-generation(ssg)'s client side hydration.
 * Used in: "ssr mode"
 * ("ssr" is used in many places in this project to refer to "ssg". Should have called it ssg mode...)
 */

const routePath = window._vitePagesSSR?.routePath;
if (!routePath) {
  console.error(`[vite-pages]: window._vitePagesSSR?.routePath should be defined`);
}
const pageDataImporter = initialPages[routePath]?.data;
if (pageDataImporter) {
  // load current page data before hydrate
  pageDataImporter().then(({
    default: pageLoaded
  }) => {
    const initCache = {
      [routePath]: {
        ...pageLoaded
      }
    };
    hydrate(initCache);
  });
} else {
  // there is no page data for current page
  hydrate({});
}
function hydrate(initCache) {
  const container = document.getElementById('root');
  hydrateRoot(container, /*#__PURE__*/jsx(ClientAppWrapper, {
    initCache: initCache,
    children: /*#__PURE__*/jsx(App, {})
  }));
}
//# sourceMappingURL=ssg-client.mjs.map
