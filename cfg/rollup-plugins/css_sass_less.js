import { render as less } from 'less'

import { compile as sass } from 'sass'

import postcss from 'postcss'
import parser from 'postcss-comment'
import postcss_nested from 'postcss-nested'
import postcss_svg from 'postcss-inline-svg'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'

/** @return {import('rollup').Plugin} */
export default ({ production = true } = {}) => {
  const post = postcss([
    postcss_svg,
    postcss_nested,
    autoprefixer(['last 2 versions', 'ie 9']),
    ...production ? [cssnano({ preset: 'default' })] : []
  ])

  return {
    name: 'css/less/sass',
    async transform(code, id) {
      let is = false
      if (/\.(?:css|pcss|postcss)$/.test(id)) {
        is = true
      } else if (/\.(?:less)$/.test(id)) {
        is = true
        less(code,
          { filename: id, sync: true, compress: true },
          (_, r) => { code = r.css })
      } else if (/\.(?:sass|scss)$/.test(id)) {
        is = true
        code = sass(id).css
      }

      if (is) {
        // eslint-disable-next-line require-atomic-updates
        code = '' + (await post.process(code, { parser, from: id })).css
        production || console.log('CSS:\n' + code)

        return 'export default ' + JSON.stringify(code)
      }
      return null
    }
  }
}
