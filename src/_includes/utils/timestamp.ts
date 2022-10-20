export const timestamp = ((DATE) => (): string =>
  (DATE.setTime(Date.now() - DATE.getTimezoneOffset() * 60 * 1000),
  DATE.toISOString().slice(11, -1)))(new Date())
