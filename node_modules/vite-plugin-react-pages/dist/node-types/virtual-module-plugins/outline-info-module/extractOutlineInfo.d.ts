export declare function extractOutlineInfo(md: string): Promise<{
    ast: import("mdast").Root;
    outline: {
        depth: number;
        text: string;
        id: string;
    }[];
}>;
export type OutlineItem = {
    depth: number;
    text: string;
    id: string;
};
//# sourceMappingURL=extractOutlineInfo.d.ts.map