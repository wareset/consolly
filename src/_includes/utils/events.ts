import { noop_void, defineProperty, is_object } from '..'

let passiveSupported = false
let get_passive_supported = (): void => {
  get_passive_supported = noop_void
  try {
    window.addEventListener(
      'test' as any,
      noop_void,
      defineProperty({}, 'passive', { get: (): any => !(passiveSupported = true) })
    )
  } catch {}
}

export const add_event_listener = <T extends keyof GlobalEventHandlersEventMap>(
  E: EventTarget, type: T, cb: (e: GlobalEventHandlersEventMap[T]) => void,
  options?: AddEventListenerOptions | boolean
): (() => void) => {
  get_passive_supported()
  if (!passiveSupported && is_object(options)) options = !!options.capture
  E.addEventListener(type, cb as any, options)
  return () => { E.removeEventListener(type, cb as any, options) }
}

export const prevent_default = (
  e: Event
): void => { e.cancelable && e.preventDefault() }

export const stop_propagation = (
  e: Event
): void => { e.stopPropagation() }

export const prevent_default_and_stop_propagation = (
  e: Event
): void => { prevent_default(e), stop_propagation(e) }
