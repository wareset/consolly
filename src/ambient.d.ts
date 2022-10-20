/**
 * These declarations tell TypeScript that we allow import of images, e.g.
 * ```
    <script lang='ts'>
      import successkid from 'images/successkid.jpg';
    </script>

    <img src="{successkid}">
   ```
 */

declare module '*.css' {
  const value: string
  export default value
}
declare module '*.pcss' {
  const value: string
  export default value
}
declare module '*.postcss' {
  const value: string
  export default value
}
declare module '*.less' {
  const value: string
  export default value
}
declare module '*.scss' {
  const value: string
  export default value
}
declare module '*.sass' {
  const value: string
  export default value
}
