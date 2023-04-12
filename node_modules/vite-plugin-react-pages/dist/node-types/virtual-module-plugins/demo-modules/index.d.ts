export declare class DemoModuleManager {
    private pmm;
    registerProxyModule(demoPath: string): string;
    isProxyModuleId(id: string): boolean;
    loadProxyModule(demoProxyId: string): Promise<string>;
    onUpdate(cb: (reloadPath: string) => void): void;
    close(): void;
}
export * from './mdx-plugin';
//# sourceMappingURL=index.d.ts.map