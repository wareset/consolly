export declare const add_event_listener: <T extends keyof GlobalEventHandlersEventMap>(E: EventTarget, type: T, cb: (e: GlobalEventHandlersEventMap[T]) => void, options?: AddEventListenerOptions | boolean) => (() => void);
export declare const prevent_default: (e: Event) => void;
export declare const stop_propagation: (e: Event) => void;
export declare const prevent_default_and_stop_propagation: (e: Event) => void;
