import { useState } from 'react';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import { d as dataCacheCtx, s as setDataCacheCtx } from './App-caf536e2.js';
import { jsx } from 'react/jsx-runtime';

/// <reference types="vite/client" />

// @ts-expect-error
const Router = __HASH_ROUTER__ ? HashRouter : BrowserRouter;
// @ts-expect-error
const basename = __HASH_ROUTER__ ? undefined : import.meta.env.BASE_URL?.replace(/\/$/, '');
const ClientAppWrapper = ({
  initCache,
  children
}) => {
  const [dataCache, setDataCache] = useState(initCache ?? {});
  return /*#__PURE__*/jsx(Router, {
    basename: basename,
    children: /*#__PURE__*/jsx(dataCacheCtx.Provider, {
      value: dataCache,
      children: /*#__PURE__*/jsx(setDataCacheCtx.Provider, {
        value: setDataCache,
        children: children
      })
    })
  });
};

export { ClientAppWrapper as C };
//# sourceMappingURL=ClientAppWrapper-cf222eb7.js.map
