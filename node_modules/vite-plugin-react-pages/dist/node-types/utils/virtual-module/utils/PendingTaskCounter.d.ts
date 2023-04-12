export declare class PendingTaskCounter {
    private count;
    private callbacks;
    countTask(): () => void;
    /**
     * the callback style is preferred over the promise style
     * because cb will be called **synchronously** when count turn 0
     * while promise-then-cb would be called in next microtask (at that time the state may have changed)
     */
    callOnceWhenIdle(cb: () => void): void;
    /** track a changeable pending state */
    countPendingState(pendingState: PendingState): void;
}
export declare class PendingState {
    private _isPending;
    get isPending(): boolean;
    set isPending(value: boolean);
    private cbs;
    onStateChange(cb: (isPending: boolean) => void): () => void;
}
//# sourceMappingURL=PendingTaskCounter.d.ts.map