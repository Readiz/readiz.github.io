import type { MdxjsEsm, MdxJsxFlowElement } from 'mdast-util-mdx';
/**
 * create mdast node for expression:
 * import * as name from 'from'
 */
export declare function createNameSpaceImportNode({ name, from, }: {
    name: string;
    from: string;
}): MdxjsEsm;
/**
 * create mdast node for expression:
 * import name from 'from'
 */
export declare function createDefaultImportNode({ name, from, }: {
    name: string;
    from: string;
}): MdxjsEsm;
/**
 * create mdast node for expression:
 * <Component {...props} />
 */
export declare function createJSXWithSpreadPropsNode({ Component, props, }: {
    Component: string;
    props: string;
}): MdxJsxFlowElement;
//# sourceMappingURL=mdastUtils.d.ts.map