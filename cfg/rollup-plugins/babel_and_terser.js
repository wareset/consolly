import { minify as terser } from 'terser'
import { transformSync as babel } from '@babel/core'

/** @return {import('rollup').Plugin} */
export default ({ production = true } = {}) => ({
  name: 'babel_and_terser',
  async renderChunk(code, _chunk, options) {
    if (production) {
      code = babel(code, {
        presets: [
          [
            '@babel/preset-env',
            {
              corejs     : 3,
              loose      : true,
              bugfixes   : true,
              modules    : false,
              useBuiltIns: 'entry', // 'entry', 'usage'
              targets    : '> 1%, not dead, ie 9'
            }
          ]
        ]
      }).code

      if (/\.min\./.test(options.file)) {
        code = (await terser(code, {
          safari10: true,
          compress: false
          // keep_fnames    : true,
          // keep_classnames: true
        })).code
      }
      return { code }
    }
    return null
  }
})
