import React from 'react';
interface Props {
    default: React.ComponentType<React.PropsWithChildren<unknown>>;
    demoMeta: {
        code: string;
        title?: string;
        desc?: string;
    };
    style?: React.CSSProperties;
    className?: string;
    isDemo: boolean;
}
export declare function Demo({ default: DemoComp, demoMeta, isDemo, style, className, }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map