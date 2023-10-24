import React__default from 'react';
import { A as createCache, S as StyleProvider, B as extractStyle } from './legacyLogicalProperties-5bdae502.js';

var ssrPlugin = {
  id: 'vite-pages-theme-doc-antd-ssr',
  prepare(app) {
    const cache = createCache();
    return {
      app: /*#__PURE__*/React__default.createElement(StyleProvider, {
        cache: cache
      }, app),
      extractStyle: () => extractStyle(cache)
    };
  }
};

export { ssrPlugin as default };
//# sourceMappingURL=ssrPlugin.js.map
