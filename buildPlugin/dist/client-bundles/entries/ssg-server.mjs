import 'react';
import ReactDOM from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { d as dataCacheCtx, A as App } from './App-6f1db792.js';
import ssrData from '/@react-pages/ssrData';
export { default as ssrData } from '/@react-pages/ssrData';
import { jsx } from 'react/jsx-runtime';
import 'react-router-dom';
import 'dequal';
import '/@react-pages/pages';
import '/@react-pages/theme';
import 'react-dom';

/**
 * This is the entry for static-site-generation(ssg)'s server side render.
 * Used in: "ssr mode"
 * ("ssr" is used in many places in this project to refer to "ssg". Should have called it ssg mode...)
 */


// put all page data in cache, so that we don't need to load it in ssr
const dataCache = ssrData;
function renderToString(url, ssrPlugins) {
  let ssrApp = /*#__PURE__*/jsx(SSRApp, {
    url: url
  });
  const extractStyleArr = [];
  ssrPlugins?.forEach(ssrPlugin => {
    const {
      app,
      extractStyle
    } = ssrPlugin.prepare(ssrApp);
    if (extractStyle) extractStyleArr.push(extractStyle);
    if (app) ssrApp = app;
  });
  const contentText = ReactDOM.renderToString(ssrApp);
  const styles = extractStyleArr.map(extractStyle => {
    return extractStyle();
  }).filter(Boolean);
  const styleText = styles.join('\n');
  return {
    contentText,
    styleText
  };
}
function SSRApp({
  url
}) {
  return /*#__PURE__*/jsx(StaticRouter, {
    basename: import.meta.env.BASE_URL?.replace(/\/$/, ''),
    location: url,
    children: /*#__PURE__*/jsx(dataCacheCtx.Provider, {
      value: dataCache,
      children: /*#__PURE__*/jsx(App, {})
    })
  });
}

export { renderToString };
//# sourceMappingURL=ssg-server.mjs.map
