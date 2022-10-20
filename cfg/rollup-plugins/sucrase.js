import { transform as sucrase } from 'sucrase'

/** @return {import('rollup').Plugin} */
export default () => ({
  name: 'sucrase',
  transform(code, id) {
    return /\.tsx?$/.test(id)
      ? sucrase(code, { transforms: ['typescript'] }).code : null
  }
})
