export declare const __Object__: ObjectConstructor;
export declare const __Object_prototype__: Object;
export declare const keys: {
    (object: ArrayLike<any>): string[];
    <K extends string>(object: Record<K, any>): K[];
};
export declare const defineProperty: <T>(o: T, p: PropertyKey, attributes: PropertyDescriptor & ThisType<any>) => T;
export declare const hasOwnProperty: <O, K extends PropertyKey>(o: O, k: K) => o is O & Record<K, any>;
export declare const getPrototypeOf: (o: any) => any;
export declare const getOwnPropertyNames: <O>(o: O) => (keyof O)[];
export declare const getOwnPropertySymbols: (o: any) => symbol[];
export declare const getOwnPropertyDescriptor: (o: any, p: PropertyKey) => PropertyDescriptor | undefined;
export declare const getOwnPropertyDescriptors: <T>(o: T) => { [P in keyof T]: TypedPropertyDescriptor<T[P]>; } & {
    [x: string]: PropertyDescriptor;
};
export declare const isSealed: (o: any) => boolean;
export declare const isFrozen: (o: any) => boolean;
export declare const isExtensible: (o: any) => boolean;
