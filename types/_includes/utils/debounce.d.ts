export declare const debounce: <T extends (...args: any) => any>(fn: T, ms?: number) => (this: any, ...args: Parameters<T>) => void;
