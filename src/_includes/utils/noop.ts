export const noop_void = (() => {}) as (...a: any[]) => void
export const noop_null = (() => null) as (...a: any[]) => null
export const noop_true = (() => true) as (...a: any[]) => true
export const noop_false = (() => false) as (...a: any[]) => false
export const noop_first = ((f) => f) as <T>(f: T, ...a: any[]) => T
export const noop_empty_list = (() => []) as <T>(...a: any[]) => T[]
