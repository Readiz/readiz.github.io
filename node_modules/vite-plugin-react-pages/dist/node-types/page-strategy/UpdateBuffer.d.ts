/// <reference types="node" />
import { EventEmitter } from 'events';
/**
 * Types of page data updates.
 *
 * add:
 *  A new page is added.
 *  The page list module will be updated.
 * update:
 *  A page is updated.
 *  The page list module will be updated if it is static data change
 *  The page data module will be updated if it is runtime data change
 * delete:
 *  A page is deleted.
 *  The page list module will be updated.
 *  Buffered update of the deleted page will be canceled.
 */
type Update = {
    type: 'add' | 'delete';
    pageId: string;
} | {
    type: 'update';
    pageId: string;
    dataType: 'runtime' | 'static';
};
export type ScheduleUpdate = (update: Update) => void;
/**
 * Buffer page data updates.
 * Can flush a batch of updates together
 * and cancel unnecessary updates
 */
export declare class PageUpdateBuffer extends EventEmitter {
    /**
     * which pages should be updated
     */
    private pageUpdateBuffer;
    /**
     * whether the page list should be updated
     */
    private pageListUpdateBuffer;
    private scheduleFlush;
    constructor();
    scheduleUpdate(update: Update): void;
    batchUpdate(exec: (scheduleUpdate: ScheduleUpdate) => Promise<void>): Promise<void>;
}
export {};
//# sourceMappingURL=UpdateBuffer.d.ts.map