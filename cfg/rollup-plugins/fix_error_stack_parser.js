// include in rollup-plugin-rease
import { jsx2tokens, stringifyTokens, trimTokens } from 'rastree/jsx2tokens'

/** @return {import('rollup').Plugin} */
export default () => ({
  name: 'fix-error-stack-parser',
  transform(code, id) {
    if (/\berror-stack-parser\b/.test(id)) {
      code = code.replace(/\bnew\s+StackFrame\b/g, '')
      let usestrict = 0
      const tokens = jsx2tokens(code).filter((v) =>
        usestrict < 2
          ? (/\buse\s+strict\b/.test(v.value) && ++usestrict, false)
          : v.deep > 3
            ? true
            : v.deep === 3 && (v.value === 'return' && (v.value = 'export default'), true))
      code = stringifyTokens(trimTokens(tokens))
      // console.log(code)
      return code
    }
    return null
  }
})
