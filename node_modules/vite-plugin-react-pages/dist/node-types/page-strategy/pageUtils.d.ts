import type { PagesData } from './PagesDataKeeper';
export declare function renderPageList(pagesData: PagesData, isBuild: boolean): Promise<string>;
export declare function renderPageListInSSR(pagesData: PagesData): Promise<string>;
export declare function renderOnePageData(onePageData: {
    [dataKey: string]: string;
}): string;
export declare function renderAllPagesOutlines(pagesData: PagesData): string;
//# sourceMappingURL=pageUtils.d.ts.map