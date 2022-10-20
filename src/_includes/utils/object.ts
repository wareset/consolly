import { noop_false, noop_empty_list } from '..'

export const __Object__ = Object
export const __Object_prototype__ = __Object__.prototype

export const keys: {
  (object: ArrayLike<any>): string[]
  <K extends string>(object: Record<K, any>): K[]
} = __Object__.keys

export const defineProperty =
  __Object__.defineProperty

export const hasOwnProperty =
  ((__Object__ as any).hasOwn ||
  ((o, k) => __Object_prototype__.hasOwnProperty.call(o, k))
  ) as <O, K extends PropertyKey>(o: O, k: K) => o is O & Record<K, any>

export const getPrototypeOf =
  __Object__.getPrototypeOf ||
  (((v) => v.__proto__) as typeof Object.getPrototypeOf)

export const getOwnPropertyNames =
  __Object__.getOwnPropertyNames as <O>(o: O) => (keyof O)[]

export const getOwnPropertySymbols =
  __Object__.getOwnPropertySymbols ||
  ((noop_empty_list) as typeof Object.getOwnPropertySymbols)

export const getOwnPropertyDescriptor =
  __Object__.getOwnPropertyDescriptor

export const getOwnPropertyDescriptors =
  __Object__.getOwnPropertyDescriptors ||
  (((o) => {
    const res: any = {}
    for (let a = getOwnPropertySymbols(o), l = a.length, i = 0; i < l; i++) {
      res[a[i]] = getOwnPropertyDescriptor(o, a[i])
    }
    for (let a = getOwnPropertyNames(o), l = a.length, i = 0; i < l; i++) {
      res[a[i]] = getOwnPropertyDescriptor(o, a[i])
    }
    return res
  }) as typeof Object.getOwnPropertyDescriptors)

export const isSealed =
  __Object__.isSealed || (noop_false as typeof Object.isSealed)
  
export const isFrozen =
  __Object__.isFrozen || (noop_false as typeof Object.isFrozen)

export const isExtensible =
  __Object__.isExtensible || (noop_false as typeof Object.isExtensible)
