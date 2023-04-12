import React from 'react';
import type { ThemeProps } from 'vite-plugin-react-pages/clientTypes';
import './style.less';
import type { ThemeConfig } from './ThemeConfig.doc';
export declare function createTheme(originalThemeConfig: ThemeConfig): React.FC<React.PropsWithChildren<ThemeProps>>;
export { defaultSideNavs } from './Layout/Sider';
export type { DefaultSideNavsOpts } from './Layout/Sider';
export { Demo } from './Layout/Demo';
export { TsInfo } from './Layout/TsInfo';
export { FileText } from './Layout/FileText';
export type { ThemeConfig, LocalConfig, I18nConfig, ThemeContextValue, MenuConfig, FooterConfig, FooterColumn, FooterLink, } from './ThemeConfig.doc';
export { useThemeCtx } from './ctx';
//# sourceMappingURL=index.d.ts.map