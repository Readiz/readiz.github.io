import type { Plugin } from 'vite';
import type { staticSiteGenerationConfig } from './types';
import { DefaultPageStrategy, defaultFileHandler } from './page-strategy/DefaultPageStrategy';
import { PageStrategy } from './page-strategy';
export interface PluginConfig {
    pagesDir?: string;
    pageStrategy?: PageStrategy;
    useHashRouter?: boolean;
    staticSiteGeneration?: staticSiteGenerationConfig;
}
export type { Theme, LoadState, PagesLoaded, PagesStaticData, TsInfo, TsPropertyOrMethodInfo, } from '../../clientTypes';
export type { FileHandler } from './page-strategy/types.doc';
export { extractStaticData, File } from './utils/virtual-module';
export { PageStrategy };
export { DefaultPageStrategy, defaultFileHandler };
export default function setupPlugins(vpConfig?: PluginConfig): Promise<Plugin[]>;
//# sourceMappingURL=index.d.ts.map