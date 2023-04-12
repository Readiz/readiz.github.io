import React from 'react';
import { MenuConfig } from './renderMenu';
import type { ThemeContextValue } from '..';
interface Props {
    sideNavsData: readonly MenuConfig[] | null | undefined;
}
declare const AppSider: React.FC<React.PropsWithChildren<Props>>;
export default AppSider;
export interface DefaultSideNavsOpts {
    groupConfig: {
        [groupKey: string]: {
            [subGroupKey: string]: {
                label?: string;
                order?: number;
            };
        };
    };
    /**
     * force defaultSideNavs to treat it as curent page group.
     * for example, user can use this to
     * force side nav to display a group during 404 state
     */
    forceGroup?: string;
}
export declare function defaultSideNavs({ loadState, staticData, themeConfig, pageGroups }: ThemeContextValue, opts?: DefaultSideNavsOpts): MenuConfig[] | null;
//# sourceMappingURL=Sider.d.ts.map