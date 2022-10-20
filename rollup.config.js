import rease from 'rollup-plugin-rease'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import rollupLivereload from 'rollup-plugin-livereload'

import sucrase from './cfg/rollup-plugins/sucrase'
import css_sass_less from './cfg/rollup-plugins/css_sass_less'
import babel_and_terser from './cfg/rollup-plugins/babel_and_terser'
import fix_error_stack_parser from './cfg/rollup-plugins/fix_error_stack_parser'

const production = !process.env.ROLLUP_WATCH

/** @type {import('rollup').Plugin[]} */
const plugins = [
  rease({
    debug     : false,
    env       : 'client', // not server
    extensions: ['.rease.ts', '.rease.tsx']
  }),
  resolve({
    browser   : true,
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json']
  }),
  sucrase(),
  css_sass_less({ production }),
  fix_error_stack_parser(),
  commonjs(),
  babel_and_terser({ production })
]

const onwarn = (warning, onwarn) => {
  warning.code === 'CIRCULAR_DEPENDENCY' &&
  warning.cycle.every((v) => /^src\/_includes/.test(v)) ||
  onwarn(warning)
}

/** @type {import('rollup').RollupOptions[]} */
const cfg = [
  {
    output: [
      {
        format: 'iife',
        file  : 'dist/consolly.js',
        name  : 'consolly',
      },
      {
        format: 'iife',
        file  : 'dist/consolly.min.js',
        name  : 'consolly',
      },
    ],
    external: [],
    plugins : production ? [] : [rollupLivereload()]
  },
  ...production ? [{
    output: [
      {
        format : 'es',
        file   : 'index.mjs',
        exports: 'named',
      },
      {
        format : 'cjs',
        file   : 'index.js',
        exports: 'named',
      },
    ],
    external: [/^rease\b/],
    plugins : []
  }] : []
].map((
  { output, external, plugins: plugins_0 }
) => (
  { input: 'src/index.ts', output, external, plugins: [...plugins_0, ...plugins], onwarn }))

export default cfg
