import type { I18nConfig, LocalConfig } from '.';
export type PageGroups = {
    [groupKey: string]: {
        [subGroupKey: string]: PageMeta[];
    };
};
export type PageMeta = {
    pageStaticData: any;
    pagePath: string;
    groupKey: string;
    subGroupKey: string;
    pageKeyInGroup: string;
    pageTitle: string;
    pageLocale: LocalConfig | undefined;
    pageLocaleKey: string | undefined;
};
export declare function getPageGroups(staticData: any, i18n: I18nConfig | undefined): PageGroups;
export declare function analyzePageInfo(pagePath: string, pageStaticData: any, i18n: I18nConfig | undefined): {
    group: string;
    subGroup: string;
    pageKeyInGroup: string;
    pageTitle: string;
    locale: LocalConfig | undefined;
    localeKey: string | undefined;
};
export declare function matchPagePathLocalePrefix(pagePath: string, i18n: I18nConfig | undefined): {
    pagePathWithoutLocalePrefix: string;
    localeKey: string | undefined;
    locale: LocalConfig | undefined;
};
//# sourceMappingURL=analyzeStaticData.d.ts.map