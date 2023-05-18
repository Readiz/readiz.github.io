import { useEffect } from 'react';
import type { I18nConfig } from './ThemeConfig.doc';
export declare function withClsPrefix(cls: string): string;
export declare function removeStartSlash(s: string): string;
export declare function removeTrailingSlash(s: string): string;
export declare function ensureStartSlash(s: string): string;
export declare function normalizeI18nConfig(i18n: I18nConfig | undefined): I18nConfig | undefined;
export declare function getStaticDataValue(pageStaticData: any, key: string): any;
/**
 * normalize commonjs export so that it works with rollup(vite build)
 * and native node esm (vite ssr)
 *
 * https://github.com/evanw/esbuild/issues/532#issuecomment-1044740080
 */
export declare function commonjsExportsInterop<T>(commonjsExports: T): T;
export declare const Anchor_Scroll_Offset = 72;
export declare const isSSR: boolean;
export declare const useIsomorphicLayoutEffect: typeof useEffect;
//# sourceMappingURL=utils.d.ts.map