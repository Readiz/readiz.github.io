import { PageUpdateBuffer } from './UpdateBuffer';
import { VirtualModuleAPIs, VirtualModulesManager } from '../utils/virtual-module';
import type { FileHandler, PageAPIs } from './types.doc';
/**
 * building upon VirtualModulesManager,
 * PagesDataKeeper recognize and handle page modules.
 */
export declare class PagesDataKeeper extends PageUpdateBuffer {
    private readonly virtualModulesManager;
    /**
     * this.pages is a cache of this.virtualModulesManager.getModules
     * which is updated in batch (may be outdated for a short time)
     */
    private readonly pages;
    constructor(virtualModulesManager: VirtualModulesManager);
    /** turn PagesDataInternal to PagesData */
    getPages(): PagesData;
    getPage(pageId: string): OnePageData | null;
    /**
     * when low-level page virtual modules has changed, update this.pages data
     * and notify listeners
     */
    private setPageData;
    private createPageDataFromRaw;
    /**
     * update page virtual modules according to fs files
     */
    addFSWatcher(baseDir: string, globs: string[], fileHandler: FileHandler): void;
    createOneTimePageAPIs(updaterAPIs: VirtualModuleAPIs): PageAPIs;
    /**
     * TODO:
     * getRuntimeData and getStaticData are very inefficient to implement,
     * redesign them in the next version
     */
    private createPageAPIs;
}
export interface PagesData {
    /**
     * pageId: The page route path.
     * User can register multiple page data with same pageId,
     * as long as they have different keys.
     * Page data with same pageId will be merged.
     *
     * @example '/posts/hello-world'
     */
    [pageId: string]: OnePageData;
}
export interface OnePageData {
    data: {
        [key: string]: string;
    };
    staticData: {
        [key: string]: any;
    };
}
//# sourceMappingURL=PagesDataKeeper.d.ts.map