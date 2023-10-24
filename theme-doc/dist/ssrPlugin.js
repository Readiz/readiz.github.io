import React__default from 'react';
import { z as createCache, S as StyleProvider, A as extractStyle } from './legacyLogicalProperties-050d12a7.js';

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
