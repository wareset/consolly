/* eslint-disable @typescript-eslint/explicit-function-return-type */

import 'rease/jsx'
import { subject, onDestroy, listenOnEventGlobal } from 'rease'
import onPan from 'rease-use-on-pan'

import { TypeMainProps } from '.'

import { max, clamp, __parseFloat__, noop_void, debounce } from '.'
import { tsx_head } from '.'

const clamp9 = (v: number, max: number): number => clamp(v, 9, max - 9)
const fix_px = (v: number | string): string => v === '' + v ? v : v + 'px'
const DIMENSIONS = ['top', 'left', 'right', 'bottom', 'width', 'height'] as const
const [TOP, LEFT, RIGHT, BOTTOM, WIDTH, HEIGHT] = DIMENSIONS

const styleSetProperty = (
  E: HTMLElement, k: string, v: string | number
): void => {
  E.style.setProperty(k, '' + v)
}

const set_position = ((AUTO, TOP, LEFT, RIGHT, BOTTOM) => (
  type: string, width: number, height: number
) => {
  switch (type) {
    case TOP:
      return { type, top: 0, left: 0, right: 0, bottom: AUTO, width: AUTO, height }
    case LEFT:
      return { type, top: 0, left: 0, right: AUTO, bottom: 0, width, height: AUTO }
    case RIGHT:
      return { type, top: 0, left: AUTO, right: 0, bottom: 0, width, height: AUTO }
    case BOTTOM:
    default:
      return { type, top: AUTO, left: 0, right: 0, bottom: 0, width: AUTO, height }
  }
})('auto', TOP, LEFT, RIGHT, BOTTOM)

export const tsx_root = (props: TypeMainProps) => {
  const { setup } = props

  const WINDOW = window
  let resize: typeof noop_void
  let position = setup.position
  const { innerWidth, innerHeight } = WINDOW
  let width = clamp9(setup.width || innerWidth / 3, innerWidth)
  let height = clamp9(setup.height || innerHeight / 3, innerHeight)
  const $position = subject<ReturnType<typeof set_position>>()
  if (/^(?:top|right|bottom|left)$/.test(position)) {
    resize = noop_void
    $position.$ = set_position(position, width, height)
  } else {
    resize = () => {
      const { innerWidth, innerHeight } = WINDOW
      width = clamp9(width, innerWidth)
      height = clamp9(height, innerHeight)
      position = innerWidth > innerHeight ? RIGHT : BOTTOM
      $position.set(set_position(position, width, height))
    }
    resize()
  }

  const getRatio = (): number => max(+WINDOW.devicePixelRatio || 1, 1)
  const $ratio = subject(getRatio())

  onDestroy(listenOnEventGlobal(WINDOW, 'resize', debounce(() => {
    $ratio.set(getRatio()), resize()
  }, 50)))

  ;(
    <div
      class={`cnly-root cnly-${$position!!.type}`}
      style-font-size={setup.fontSize + 'px'}
      style-z-index= {setup.zIndex}
    >

      <div
        class={'cnly-main'}
        style={{
          top   : fix_px($position!!.top),
          left  : fix_px($position!!.left),
          right : fix_px($position!!.right),
          bottom: fix_px($position!!.bottom),
          width : fix_px($position!!.width),
          height: fix_px($position!!.height),
        }}
      >
        <r-void r-is={tsx_head()}/>
        <div
          class={'cnly-resizer'}
          style={`transform:scale(${$ratio!!});`}
          r-use-client={[onPan((e, ctx) => {
            const delta = e.delta
            const { innerWidth, innerHeight } = WINDOW
            const node = ctx.node.parentNode as HTMLElement
            
            if (e.type === 'start') {
              try {
                const computed = getComputedStyle(node)
                // eslint-disable-next-line default-case
                switch (position) {
                  case LEFT:
                  case RIGHT:
                    width = __parseFloat__(computed.width) || 9
                    break
                  case TOP:
                  case BOTTOM:
                    height = __parseFloat__(computed.height) || 9
                    break
                }
              } catch {}
            }

            // eslint-disable-next-line default-case
            switch (position) {
              case LEFT:
                styleSetProperty(
                  node, WIDTH, (width = clamp9(width + delta.x, innerWidth)) + 'px'
                )
                break
              case RIGHT:
                styleSetProperty(
                  node, WIDTH, (width = clamp9(width - delta.x, innerWidth)) + 'px'
                )
                break
              case TOP:
                styleSetProperty(
                  node, HEIGHT, (height = clamp9(height + delta.y, innerHeight)) + 'px'
                )
                break
              case BOTTOM:
                styleSetProperty(
                  node, HEIGHT, (height = clamp9(height - delta.y, innerHeight)) + 'px'
                )
                break
            }
          }, {}, 0)]}
        />
      </div>
    </div>

  )
}
