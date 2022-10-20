export const __Console__ = console
export const __Function__ = Function

export const json_parse = JSON.parse
export const json_stringify = JSON.stringify

export const run_all = (list: Function[]): void => {
  for (let i = 0; i < list.length; i++) list[i]()
}
