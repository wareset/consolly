import { createReaseApp, onDestroy, listenOnEventGlobal } from 'rease'

import { is_function, __Console__, keys, tsx_root, style } from '.'

export type TypeConsollySettings =
  Required<NonNullable<Parameters<typeof consolly>[0]>>

export type TypeMainProps = {
  setup: TypeConsollySettings
  queue: Function[]
  count: { [key: string]: number }
  timer: { [key: string]: number }
  cheat: Record<typeof CONSOLE_DEFAULTS[number], (...a: any[]) => void >
}

/* eslint-disable */
const CONSOLE_DEFAULTS = [
  'assert',  'clear',
  'count', 'countReset',
  'debug', 'dir', 'dirxml', 'error',
  'group', 'groupCollapsed', 'groupEnd',
  'info', 'log', 'table',
  'time', 'timeEnd', 'timeLog', 'timeStamp',
  'trace', 'warn',
] as const
/* eslint-enable */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const consolly = (
  {
    showTimestamp = true,
    showSource = true,
    position = 'auto',
    fontSize = 12,
    zIndex = 100000000,
    width = 0,
    height = 0,
    debug = true,
  } : {
    /**
     * Show timestamp.
     * @default true
     */
    showTimestamp?: boolean,
    /**
     * Show source file name.
     * @default true
     */
    showSource?: boolean,
    /**
     * The side to which the consolly will be attached.
     * 'auto' - It will be at the bottom or right, depending on the aspect ratio of the screen.
     * @default 'auto'
     */
    position?: 'auto' | 'top' | 'left' | 'bottom' | 'right',
    /**
     * font-size (px)
     * @default 12
     */
    fontSize?: number,
    /**
     * z-index
     * @default 100_000_000
     */
    zIndex?: number,
    /**
     * width
     * @default window.innerWidth / 3
     */
    width?: number,
    /**
     * height
     * @default window.innerHeight / 3
     */
    height?: number,
    /**
     * Duplicate to the original Console.
     * @default true
     */
    debug?: boolean,
  } = {}
) => {
  const setup = {
    showTimestamp,
    showSource,
    position,
    fontSize,
    zIndex,
    width,
    height,
    debug
  }
  const queue: TypeMainProps['queue'] = []
  const count: TypeMainProps['count'] = {}
  const timer: TypeMainProps['timer'] = {}

  // @ts-ignore
  const cheat: TypeMainProps['cheat'] = {
    count(...args) { console.log(args) },
    countReset(...args) { console.log(args) },
  }

  const methodFactory = (key: string) => (...a: any[]): void => {
    if (key in cheat) (cheat as any)[key](...a)
    else {
      __Console__.warn('Consolly: Method "' + key + '" not supports. Arguments:\n', a)
    }
    if (setup.debug && key in __Console__) (__Console__ as any)[key](...a)
  }
  const result: any = {}
  for (let key, a = keys(__Console__), l = a.length, i = 0; i < l; i++) {
    result[key = a[i]] =
      is_function(__Console__[key]) ? methodFactory(key) : __Console__[key]
  }
  for (let key, l = CONSOLE_DEFAULTS.length, i = 0; i < l; i++) {
    !is_function(key = CONSOLE_DEFAULTS[i]) && (result[key] = methodFactory(key))
  }
  const run = (): void => {
    style()
    createReaseApp(
      document.body, tsx_root, [{ setup, queue, count, timer, cheat }]
    )
  }
  if (document.body) run()
  else onDestroy(listenOnEventGlobal(window, 'load', run))
  return result as typeof __Console__
}
