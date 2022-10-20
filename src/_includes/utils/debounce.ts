/* eslint-disable no-invalid-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

export const debounce = <T extends (...args: any) => any>(
  fn: T, ms?: number
) => {
  let cto: any
  return function debounceWrapper(this: any, ...args: Parameters<T>): void {
    clearTimeout(cto), cto = setTimeout(fn.bind(this), +ms! || 1, ...args)
  }
}
