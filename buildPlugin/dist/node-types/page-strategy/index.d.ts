/// <reference types="node" />
import { EventEmitter } from 'events';
import { VirtualModulesManager } from '../utils/virtual-module';
import { PagesData, OnePageData } from './PagesDataKeeper';
import type { FindPages, PageHelpers, FileHandler } from './types.doc';
export declare class PageStrategy extends EventEmitter {
    private findPages;
    protected pagesDir: string;
    private virtualModulesManager;
    private pagesDataKeeper;
    private started;
    constructor(findPages: FindPages);
    /**
     * start() will be called by the vite buildStart hook,
     * which may be called multiple times.
     * we only execute it once
     */
    start(pagesDir: string, virtualModulesManager: VirtualModulesManager): void;
    private oneTimePageAPIs;
    getPages(): Promise<PagesData>;
    getPage(pageId: string): Promise<OnePageData | null>;
    /**
     * Custom PageStrategy can use it to create helpers with custom defaultFileHandler
     */
    protected createHelpers(defaultFileHandler: FileHandler): PageHelpers;
}
export * from './types.doc';
//# sourceMappingURL=index.d.ts.map