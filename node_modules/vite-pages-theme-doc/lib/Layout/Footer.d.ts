import React from 'react';
export type FooterLink = {
    /**
     * Text to be displayed for this link.
     */
    label: string;
    /**
     * navigating to other websites
     */
    url: string;
    /**
     * link target would be `_blank` if `openExternal` is ture
     * @default true
     */
    openExternal?: boolean;
    /**
     * icon that before link label
     */
    icon?: React.ReactNode;
    /**
     * description of column, come after title
     */
    description?: React.ReactNode;
};
export type FooterColumn = {
    /**
     * Label of the section of these links.
     */
    title?: React.ReactNode;
    /**
     * icon that before column title
     */
    icon?: React.ReactNode;
    /**
     * Links in this section.
     */
    items?: Array<FooterLink>;
};
export type FooterConfig = {
    /**
     * The link groups to be present.
     */
    columns?: Array<FooterColumn>;
    /**
     * The message to be displayed at the bottom.
     */
    message?: React.ReactNode;
    /**
     * The copyright message to be displayed at the bottom.
     */
    copyright?: React.ReactNode;
    /**
     * Footer theme preset
     * @default 'light'
     */
    theme?: 'light' | 'dark';
};
export declare const Footer: () => JSX.Element | null;
//# sourceMappingURL=Footer.d.ts.map