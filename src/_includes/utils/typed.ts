import { getPrototypeOf } from '..'

// const getProto = (v: any): any =>
//   !v || !v.constructor || v.constructor.prototype !== v ? v : v.constructor

const getProto = (v: any): any =>
  v == null
    ? null
    : !v.constructor || v.constructor.prototype !== v
      ? v
      : v.constructor

const typed = (v: any): any => v = v == null ? void 0 : getProto(getPrototypeOf(v))

const typed_list = (v: any): any[] => {
  const res = []
  for (; v != null && ((v = getPrototypeOf(v)) || !res.length);) res.push(getProto(v))
  return res
}

export { typed, typed_list }
