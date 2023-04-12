export declare class File {
    readonly path: string;
    readonly base: string;
    content: Promise<string> | null;
    constructor(path: string, base: string);
    get relative(): string;
    get extname(): string;
    read(): Promise<string>;
}
//# sourceMappingURL=File.d.ts.map