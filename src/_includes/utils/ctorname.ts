import { __Object_prototype__ } from '..'

export const ctorname = (v: any): string =>
  __Object_prototype__.toString.call(v).slice(8, -1)
