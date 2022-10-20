export declare const __Console__: Console;
export declare const __Function__: FunctionConstructor;
export declare const json_parse: (text: string, reviver?: ((this: any, key: string, value: any) => any) | undefined) => any;
export declare const json_stringify: {
    (value: any, replacer?: ((this: any, key: string, value: any) => any) | undefined, space?: string | number | undefined): string;
    (value: any, replacer?: (string | number)[] | null | undefined, space?: string | number | undefined): string;
};
export declare const run_all: (list: Function[]) => void;
