export const is_null = (v: any): v is null => v === null
export const is_void = (v: any): v is undefined => v === void 0
export const is_nil = (v: any): v is (null | undefined) => v == null

export const is_nan = (v: any): boolean => v !== v
export const is_number = (v: any): v is number => typeof v === 'number'
export const is_bigint = (v: any): v is number => typeof v === 'bigint'
export const is_string = (v: any): v is number => typeof v === 'string'
export const is_symbol = (v: any): v is number => typeof v === 'symbol'
export const is_boolean = (v: any): v is number => typeof v === 'boolean'
export const is_function = (v: any): v is number => typeof v === 'function'
export const is_object = (v: any): v is number => v != null && typeof v === 'object'
