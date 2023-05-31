import { File } from '.';
/**
 * built upon VirtualModulesManager.
 * map each sourceFile into a proxyModule, which is a virtual module.
 * when the sourceFile is updated, it will emit update event for the proxyModule.
 */
export declare class ProxyModulesManager {
    readonly proxyModulePrefix: string;
    private vmm;
    private register;
    constructor(proxyModulePrefix: string);
    /**
     * register a source file to watch,
     * map its data into a proxy module,
     * return the proxyModuleId
     *
     * to create multiple proxy modules for one sourceFilePath,
     * you can pass in keys to differentiate between them.
     */
    registerProxyModule(sourceFilePath: string, getProxyModuleData: (sourceFile: File) => any, key?: string): string;
    /**
     * get proxy module data by proxyModuleId
     */
    getProxyModuleData(proxyModuleId: string): Promise<any>;
    /**
     * emit event when a proxyModule has been updated
     */
    onProxyModuleUpdate(cb: (proxyModuleId: string, data: any[], prevData: any[]) => void): void;
    close(): void;
    getProxyModuleId(sourceFilePath: string, key?: string): string;
    isProxyModuleId(id: string): boolean;
}
//# sourceMappingURL=ProxyModulesManager.d.ts.map