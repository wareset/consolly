export const { min, max } = Math
export const __parseFloat__ = parseFloat
export const clamp = (
  x: number,
  lower: number,
  upper: number
): number => (x = +x) < lower ? lower : x > upper ? upper : x
