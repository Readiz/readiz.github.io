import { PendingState } from './utils';
export declare class VirtualModuleGraph {
    /**
     * the module inside this graph may be virtual module or real fs module
     */
    private readonly modules;
    /**
     * Serialize the update works (instead of doing them concurrently)
     * to make the result more predictable.
     *
     * If there is already a queuing update with same updaterId,
     * it won't schedule a new one.
     *
     * Before executing an updater, it will automatically cleanup the effects of
     * previous update with same updaterId.
     * Example:
     * When find module1 for the first time:
     *   the updater set data for module2 and module3 (upstreamModule is module1)
     * Then, when observe that module1 is updated:
     *   the updater set data for module2 (upstreamModule is module1)
     * At this time, the data in module3 should be automatically cleanup!
     * So the updater(users) don't need to manually delete the old data in module3.
     */
    private updateQueue;
    /** track updateQueue empty state (isPending means not empty) */
    updateQueueEmptyState: PendingState;
    getModuleIds(filter?: (moduleId: string) => boolean): string[];
    getModuleData(moduleId: string): any[];
    getModules(filter?: (moduleId: string) => boolean): {
        [id: string]: any[];
    };
    /**
     * This is the only way to update virtual modules
     */
    scheduleUpdate(updaterId: string, updater: Update['updater']): void;
    addModuleListener(handler: ModuleListener, filter?: (moduleId: string) => boolean): () => void;
    /**
     * listen to virtual module updates.
     * users can scheduleUpdate in these listeners, creating dependency chain of
     * virtual modules.
     * (.i.e when a virtual module changes, it will update another virtual module)
     *
     * users will retrieve new module data and previous module data,
     * so users can diff them to decide whether the module has "really" changed.
     * if users think they are the same, they can skip updating other virtual modules.
     * VirtualModuleGraph works on a very low level. It don't know what module data means. So it send updates event to users very often and let users to interpret module data (and whether the data has "really" changed).
     *
     * @return unsubscribe function
     */
    private _addModuleListener;
    private moduleUpdateListeners;
    private callModuleUpdateListeners;
    updateExecutingState: PendingState;
    private executeUpdates;
    private executeUpdates_Inner;
    private createUpdateAPIs;
    private ensureModule;
}
export type ModuleListener = (moduleId: string, data: any[], prevData: any[]) => void;
export interface VirtualModuleAPIs {
    addModuleData(moduleId: string, data: any, upstreamModuleId: string): void;
    getModuleData(moduleId: string): any[];
    deleteModule(moduleId: string): void;
}
declare class Update {
    updaterId: string;
    updater: (apis: VirtualModuleAPIs) => void | Promise<void>;
    constructor(updaterId: string, updater: (apis: VirtualModuleAPIs) => void | Promise<void>);
}
export {};
//# sourceMappingURL=VirtualModules.d.ts.map