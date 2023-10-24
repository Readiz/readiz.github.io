import React from 'react';
import type { Language } from 'prism-react-renderer';
interface Props {
    readonly className?: `language-${Language}` | '' | string;
    readonly style?: React.CSSProperties;
}
declare const CodeBlock: ({ children, className, style: propStyle, }: React.PropsWithChildren<Props>) => React.JSX.Element;
export default CodeBlock;
//# sourceMappingURL=CodeBlock.d.ts.map