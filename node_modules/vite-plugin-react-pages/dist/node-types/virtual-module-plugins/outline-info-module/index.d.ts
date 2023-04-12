export declare const OUTLINE_INFO_MODULE_ID_PREFIX = "\0/@react-pages/outline-info";
export declare class OutlineInfoModuleManager {
    private pmm;
    registerProxyModule(datasourceFilePath: string): string;
    isProxyModuleId(id: string): boolean;
    loadProxyModule(proxyModuleId: string): Promise<string>;
    onUpdate(cb: (reloadPath: string) => void): void;
    close(): void;
}
//# sourceMappingURL=index.d.ts.map