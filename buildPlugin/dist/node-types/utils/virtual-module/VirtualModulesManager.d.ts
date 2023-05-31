import { ModuleListener, VirtualModuleAPIs } from './VirtualModules';
import { File } from './utils';
/**
 * watch fs and update corresponding virtual module when a file changed
 */
export declare class VirtualModulesManager {
    private watchers;
    private virtualModules;
    private fileCache;
    /**
     * don't return half-finished data when there are pending tasks
     */
    private pendingTaskCounter;
    constructor();
    addFSWatcher(baseDir: string, globs: string[], fileHandler: FileHandler): void;
    getModules(cb: (modules: {
        [id: string]: any[];
    }) => void, filter?: (moduleId: string) => boolean): void;
    getModule(moduleId: string, cb: (moduleData: any[]) => void): void;
    /**
     * Idle means:
     * fs watcher is ready
     * no update is executing
     * update queue is empty
     */
    callOnceWhenIdle(cb: () => void): void;
    /**
     * return the current state of modules.
     * it doesn't wait for update task to finish
     * so it may see intermediate state.
     * use it carefully.
     */
    _getModulesNow(filter?: (moduleId: string) => boolean): {
        [id: string]: any[];
    };
    /**
     * return the current state of module.
     * it doesn't wait for update task to finish
     * so it may see intermediate state.
     * use it carefully.
     */
    _getModuleDataNow(moduleId: string): any[];
    addModuleListener(handler: ModuleListener, filter?: (moduleId: string) => boolean): () => void;
    close(): void;
    scheduleUpdate(updaterId: string, updater: (apis: VirtualModuleAPIs) => void | Promise<void>): void;
    private handleFileChange;
    private handleFileUnLink;
}
type FileHandler = (file: File, api: FileHandlerAPIs) => void | Promise<void>;
export interface FileHandlerAPIs {
    addModuleData(moduleId: string, data: any): void;
    getModuleData(moduleId: string): any[];
}
export {};
//# sourceMappingURL=VirtualModulesManager.d.ts.map