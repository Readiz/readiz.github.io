import React from 'react';
import type { PathPattern } from 'react-router-dom';
export declare const renderMenuHelper: (isTopNav: boolean) => (menuConfig: ReadonlyArray<MenuConfig>, isFirstLevel?: boolean, collectMenuKeys?: string[]) => import("antd/es/menu/hooks/useItems").ItemType[];
export type MenuConfig = {
    readonly label: string;
    /**
     * The url.
     * @example 'https://www.google.com/'
     */
    readonly href: string;
    readonly icon?: React.ReactNode;
} | {
    readonly label: string;
    /**
     * The path in the current webapp.
     * @example '/posts/hello-world'
     */
    readonly path: string;
    readonly icon?: React.ReactNode;
    /**
     * The menu item will show an "active" state
     * if it matches with current browsing path.
     */
    readonly activeIfMatch?: string | string[] | PathPattern<string> | PathPattern<string>[];
} | {
    /**
     * The label of the subnav
     */
    readonly subMenu: string;
    readonly children: ReadonlyArray<MenuConfig>;
    readonly icon?: React.ReactNode;
    readonly activeIfMatch?: string | string[] | PathPattern<string> | PathPattern<string>[];
} | {
    /**
     * The label of the nav group
     */
    readonly group: string;
    readonly children: ReadonlyArray<MenuConfig>;
};
//# sourceMappingURL=renderMenu.d.ts.map