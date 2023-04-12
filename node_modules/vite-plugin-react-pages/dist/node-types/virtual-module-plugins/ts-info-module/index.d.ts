/**
 * TODO:
 * currently we only watch one sourceFilePath for each virtual module(proxyModule).
 * but if the sourceFilePath import other modules, and when that module has updated,
 * TsInfoModuleManager won't notice that.
 * we need a way to create virtual modules with dependencies.
 *
 * currently it is ok to tell users to write a whole type doc in a single file.
 * so supporting virtual modules with dependencies is not needed.
 * but supporting that feature would make our virtual module system more powerful.
 *
 * the same goes for DemoModuleManager.
 */
export declare class TsInfoModuleManager {
    private pmm;
    registerProxyModule(sourcePath: string, exportName: string): string;
    isProxyModuleId(id: string): boolean;
    loadProxyModule(proxyModuleId: string): Promise<string>;
    onUpdate(cb: (reloadPath: string) => void): void;
    close(): void;
}
export * from './mdx-plugin';
//# sourceMappingURL=index.d.ts.map