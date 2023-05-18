import type React from 'react';
export interface LayoutContextValue {
    screenWidth: Record<string, boolean | undefined>;
    isSlideSiderOpen: boolean;
    setIsSlideSiderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export declare const LayoutContext: React.Context<LayoutContextValue>;
//# sourceMappingURL=ctx.d.ts.map