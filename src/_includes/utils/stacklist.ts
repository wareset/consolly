// const get_file = (s: string): string => s.split('/').pop() || ''
// const fix_href = (s: string): string =>
//   /^[a-z]+:\/\/\w/.test(s) ? s.replace(/:\d+:\d+$/, '') : ''

// export const stacklist = (start?: number, count?: number) => {
//   const stack = '' + Error().stack
//   const isV8 = /^Error\s/.test(stack)
//   start = (start || 0) + (isV8 ? 2 : 1)
//   const list = stack.split(/\s*\n+\s*/)
//     .slice(start, count ? start + count : isV8 ? void 0 : -1)
//     .map(isV8
//       ? (v) => {
//         v = v.replace(/^[^\s]*\s+(?:Object\.)?/, '').trim()
//         let name: string
//         if (v[v.length - 1] === ')') {
//           const idx = v.indexOf('(')
//           name = v.slice(0, idx).trim()
//           v = v.slice(idx + 1, -1)
//         } else {
//           name = '<anonymous>'
//         }
//         name += ''
//         const file = get_file(v)
//         const href = fix_href(v)
//         return { name, file, href }
//       }
//       : (v) => {
//         v = v.trim()
//         let idx = v.indexOf('@')
//         if (idx < 0) idx = 0
//         const name = v[idx - 1] !== '<' && v.slice(0, idx) || '<anonymous>'
//         const file = get_file(v)
//         const href = fix_href(v.slice(idx + 1))
//         return { name, file, href }
//       })
//   return list
// }

// https://github.com/tapjs/stack-utils/blob/main/index.js
// const re = new RegExp(
//   '^' +
//   // Sometimes we strip out the '    at' because it's noisy
//   '(?:\\s*at )?' +
//   // $1 = ctor if 'new'
//   '(?:(new) )?' +
//   // $2 = function name (can be literally anything)
//   // May contain method at the end as [as xyz]
//   '(?:(.*?) \\()?' +
//   // (eval at <anonymous> (file.js:1:1),
//   // $3 = eval origin
//   // $4:$5:$6 are eval file/line/col, but not normally reported
//   '(?:eval at ([^ ]+) \\((.+?):(\\d+):(\\d+)\\), )?' +
//   // file:line:col
//   // $7:$8:$9
//   // $10 = 'native' if native
//   '(?:(.+?):(\\d+):(\\d+)|(native))' +
//   // maybe close the paren, then end
//   // if $11 is ), then we only allow balanced parens in the filename
//   // any imbalance is placed on the fname.  This is a heuristic, and
//   // bound to be incorrect in some edge cases.  The bet is that
//   // having weird characters in method names is more common than
//   // having weird characters in filenames, which seems reasonable.
//   '(\\)?)$'
// )

// const qq = (e: any) => {
//   e = e || new Error()
//   const stack = '' + (e.stack || e.stacktrace)
//   const list = stack.split('\n').map((v) => v.match(re))
// }

// @ts-ignore
import errorStackParser from 'error-stack-parser'

export const stacklist =
((errorStackParser) => {
  const get_file = (s: string): string =>
    (s.split('/').pop() || '').replace(/^Object\./, '')
  const fix_href = (s: string): string => /^[a-z]+:\/\/\w/.test(s) ? s : ''

  return (start?: number, count?: number) => {
    try {
      let stack = errorStackParser.parse(new Error())
      if (stack || count) {
        stack = stack.slice(start || (start = 0), count ? start + count : void 0)
      }
      return stack.map((v) => {
        const name = v.functionName || '(anonymous)'
        const href = fix_href(v.fileName || '')
        const file = `${get_file(href)}:${v.lineNumber || -1}:${v.columnNumber || -1}`
        return { name, file, href }
      })
    } catch {
      return [{ name: '', file: '', href: '' }]
    }
  }
})(errorStackParser)
