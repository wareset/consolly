
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var consolly = (function () {
  'use strict';

  var css_base = ".cnly-root {\n    width: 0;\n    height: 0;\n    overflow: visible;\n    font-family: monospace;\n    line-height: 1.25;\n    position: relative;\n    z-index: 100000000;\n\n    -webkit-box-orient: vertical;\n\n    -webkit-box-direction: normal;\n\n        -ms-flex-direction: column;\n\n            flex-direction: column;\n  }\n\n    .cnly-root * {\n      font-size: inherit;\n      font-family: inherit;\n      line-height: inherit;\n      -webkit-box-sizing: border-box !important;\n              box-sizing: border-box !important;\n    }\n\n  /* &-toggle {} */\n\n  /* MAIN */\n\n  .cnly-main {\n    background-color: #eee;\n    max-width: 100%;\n    max-height: 100%;\n    min-width: 9px;\n    min-height: 9px;\n    position: fixed;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow: visible;\n  }\n\n  /* /MAIN */\n\n  /* RESIZER */\n\n  .cnly-resizer {\n    position: absolute;\n    background-color: #ccc;\n    width: 1px;\n    height: 1px;\n  }\n\n  .cnly-resizer:before {\n      content: '';\n      display: block;\n      position: absolute;\n      top: -5px;\n      left: -5px;\n      right: -5px;\n      bottom: -5px;\n      background-color: #ccc9;\n      opacity: 0;\n      -webkit-transition: opacity 0.25s;\n      transition: opacity 0.25s;\n    }\n\n  .cnly-resizer:hover:before {\n      opacity: 1;\n    }\n\n  .cnly-top .cnly-resizer {\n    bottom: 0;\n    width: 100%;\n    cursor: row-resize;\n    cursor: s-resize;\n  }\n\n  .cnly-left .cnly-resizer {\n    right: 0;\n    height: 100%;\n    cursor: col-resize;\n    cursor: e-resize;\n  }\n\n  .cnly-right .cnly-resizer {\n    left: 0;\n    height: 100%;\n    cursor: col-resize;\n    cursor: w-resize;\n  }\n\n  .cnly-bottom .cnly-resizer {\n    top: 0;\n    width: 100%;\n    cursor: row-resize;\n    cursor: n-resize;\n  }\n\n  /* /RESIZER */\n\n  .cnly-icon-close {\n    background: center/contain no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ad3' class='bi bi-x-lg' viewBox='0 0 16 16'%3E %3Cpath d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'/%3E %3C/svg%3E\");\n  }";

  const style = ((
    styleTextContent, node
  ) => () => {
    if (!node) {
      node = document.createElement('style');
      node.textContent = styleTextContent;
      document.head.appendChild(node);
    }
  })(css_base);

  /* eslint-disable no-invalid-this */
  /* eslint-disable @typescript-eslint/explicit-function-return-type */

  const debounce = (
    fn, ms
  ) => {
    let cto;
    return function debounceWrapper( ...args) {
      clearTimeout(cto), cto = setTimeout(fn.bind(this), +ms || 1, ...args);
    }
  };

  const is_function = (v) => typeof v === 'function';

  const { min, max } = Math;
  const __parseFloat__ = parseFloat;
  const clamp = (
    x,
    lower,
    upper
  ) => (x = +x) < lower ? lower : x > upper ? upper : x;

  const noop_void = (() => {});

  const __Object__ = Object;

  const keys


   = __Object__.keys;

  const __Console__ = console;

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-nocheck
  /* eslint-disable @typescript-eslint/explicit-function-return-type */



  const tsx_head = () => {
    console.log('head');
  };

  /* eslint-disable */
  /*
  dester builds:
  __src__/shared/index.ts
  __src__/utils/other.ts
  __src__/utils/is.ts
  __src__/utils/thens.ts
  __src__/utils/subscribe.ts
  __src__/utils/MapAndSet.ts
  __src__/attrs.ts
  __src__/listen.ts
  __src__/resize.ts
  __src__/ReaseSubject.ts
  __src__/main.ts
  __src__/global.ts
  __src__/toString.ts
  index.ts
  */
  var t$1 = "http://www.w3.org/", r = {
      svg: t$1 + "2000/svg",
      math: t$1 + "1998/Math/MathML",
      xlink: t$1 + "1999/xlink"
  }, n = Object, s = n.defineProperty, a$1 = n.getPrototypeOf, i = n.getOwnPropertyDescriptor, o$1 = () => {}, l = () => o$1, h = setTimeout, c = clearTimeout, f = "undefined" != typeof window, u = {}, v = e => e && e._ && e._._ === u, d$1 = Array.isArray, p = e => null != e && "object" == typeof e, _ = e => "function" == typeof e, g = n.is || ((e, t) => e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t), b = e => null != e && _(e.then), m = e => null != e && _(e.subscribe), T = (e, t, r) => {
      e.then((e => {
          N(e, t, r);
      }));
  }, N = (e, t, r) => {
      b(e) ? e.then((e => {
          N(e, t, r);
      })) : t(e, r);
  }, y = (e, t, r) => {
      if (0 === e.length) t([], r); else for (var n = [], s = [ e.length ], a = 0, i = s[0]; a < i; a++) N(e[a], O, [ n, a, s, t, r ]);
  }, O = (e, t) => {
      t[0][t[1]] = e, --t[2][0] || t[3](t[0], t[4]);
  }, S = (e, t, r) => {
      var n, s = [], a = () => {
          t = o$1, n && (n.unsubscribe ? n.unsubscribe() : n(), n = null);
      };
      return n = e.subscribe((e => {
          if (1 === s.push(e)) {
              for (var n = 0; n < s.length; n++) t(s[n], r, a);
              s = [];
          }
      })), t === o$1 && a(), a;
  }, w = (e, t, r) => {
      var n = [ o$1, o$1, () => {
          n[2] === o$1 || (n[2] = t = o$1, n[1](), n[0]());
      } ];
      return n[0] = S(e, ((e, t, r) => {
          t.u[0] = r, t.u[1](), t.u[1] = L(e, ((e, t, r) => {
              t.u[1] = r, t.f(e, t.c, t.u[2]);
          }), t);
      }), {
          u: n,
          f: t,
          c: r
      }), n[2];
  }, L = (e, t, r) => {
      if (b(e)) e = x(e); else if (!m(e)) return t(e, r, o$1), o$1;
      return w(e, t, r);
  }, C = (e, t, r) => S(A(e), t, r), x = e => ({
      subscribe: (t, r) => {
          var n = () => {
              t = o$1;
          };
          return T(e, (e => {
              t(e, r, n);
          })), n;
      }
  }), A = e => ({
      subscribe: (t, r) => {
          e = e.slice();
          for (var n = [], s = {}, a = [ 0 ], i = () => {
              for (var e in s) s[e]();
          }, o = e.length, l = 0; l < o; l++) s[l] = L(e[l], $, [ l, o, n, s, a, [ !1 ], t, r, i ]);
          return i;
      }
  }), R = (e, t) => ({
      subscribe: (r, n) => {
          var s = [ o$1, o$1, () => {
              s[2] === o$1 || (s[2] = r = o$1, s[1](), s[0]());
          } ];
          return s[0] = C(e, ((e, r, n) => {
              r.u[0] = n, r.u[1](), r.u[1] = L(t(e), ((e, t, r) => {
                  t.u[1] = r, t.f(e, t.c, s[2]);
              }), r);
          }), {
              u: s,
              f: r,
              c: n
          }), s[2];
      }
  }), $ = (e, [t, r, n, s, a, i, o, l, h], c) => {
      n[t] = e, s[t] = c, (a[0] === r || i[0] !== (i[0] = !0) && ++a[0] === r) && o(n.slice(), l, h);
  };

  var F = {
      OTHER: "other",
      XLINK: "xlink",
      CLASS: "class",
      STYLE: "style",
      _PROP: "_prop",
      WRONG: ""
  }, H = ((e, t, n, s, a, i) => {
      var o = /^class-./, l = /^style(?:-[a-z]|[A-Z])/, h = /^xlink(?:-[a-z]|[A-Z])/, c = /^data-|^[a-z][-a-zA-Z\d]*$/, f = e => e, u = e => null == e || "" === e || t(e) || n(e) ? "" : e, v = (e, t, r) => {
          null == r || "" === r ? e.removeAttribute(t) : e.setAttribute(t, r);
      }, d = t => {
          switch (typeof t) {
            case "string":
              return t;

            case "object":
              var r = "", n = "";
              if (e(t)) for (var s, a = 0; a < t.length; a++) (s = d(t[a])) && (r += n + s, n = " "); else if (t) for (var i in t) t[i] && (r += n + i, 
              n = " ");
              return r;

            default:
              return "";
          }
      }, p = {}, _ = e => p[e] || (p[e] = e.replace(/([A-Z])/g, "-$1").toLowerCase()), g = t => {
          switch (typeof t) {
            case "string":
              return t;

            case "object":
              var r = "";
              if (e(t)) for (var n, s = 0; s < t.length; s++) (n = g(t[s])) && (r += n + (";" === n[n.length - 1] ? "" : ";")); else if (t) for (var a in t) null != t[a] && (r += _(a) + ":" + t[a] + ";");
              return r;

            default:
              return "";
          }
      }, b = (e, t, r) => {
          e = e.classList, r ? e.add(t) : e.remove(t);
      }, m = (e, t, r) => {
          e = e.style, "" === r ? e.removeProperty(t) : e.setProperty(t, r, "important");
      }, E = [ (e, t, r, n) => {
          b(e, t, n._.ac[t] = r);
      }, f, F.CLASS, "" ], T = [ (e, t, r, n) => {
          m(e, t, n._.as[t] = r);
      }, u, F.STYLE, "" ], N = [ (e, t, r, n) => {
          if (v(e, t, ((e, t) => (t.home !== t.root && (t = t.home.is.css) && !t[2] && (e && (e += " "), 
          e += t[1]), e))(r, n)), n = n._.ac) for (var s in n) b(e, s, n[s]);
      }, d, E[2], E[2] ], y = [ (e, t, r, n) => {
          if (v(e, t, r), n = n._.as) for (var s in n) m(e, s, n[s]);
      }, g, T[2], T[2] ], k = [ s, () => null, F.WRONG, "" ], O = [ (e, t, r) => {
          e[t] = r;
      }, f, F._PROP, "" ], S = [ (e, t, n) => {
          "" === n ? e.removetAttributeNS(r.xlink, t) : e.setAttributeNS(r.xlink, t, n);
      }, u, F.XLINK, "" ], w = [ (e, t, r) => {
          C(e.localName, t, e).set ? e[t] = r : v(e, t, r);
      }, u, F.OTHER, "" ], L = {}, C = (e, t, r) => (L[e] || (L[e] = {}))[t] || (L[e][t] = i(a(r), t) || {}), x = e => "-" === e[5] ? e.slice(6) : e[5].toLowerCase() + e.slice(6);
      return (e, t) => e === N[3] ? N : e === y[3] ? y : "_" === e[0] ? (O[3] = e, O) : o.test(e) ? (t.ac || (t.ac = {}), 
      E[3] = x(e), E) : l.test(e) ? (t.as || (t.as = {}), T[3] = _(x(e)), T) : h.test(e) ? (S[3] = e = S[2] + ":" + x(e), 
      S) : c.test(e) ? (w[3] = e, w) : (k[3] = e, k);
  })(d$1, p, _, o$1, a$1, i), [I, G] = ((e, t, r, n, s, a, i) => {
      if (!e) return [ n, r ];
      var [o, l, h, c, f, u, v] = "tapstart,tapmove,tapend,inhover,infocus,unhover,unfocus".split(","), d = document, p = (e, t, r, n) => (e.addEventListener(t, r, n), 
      () => {
          e.removeEventListener(t, r, n);
      }), _ = e => {
          e.cancelable && e.preventDefault();
      }, g = e => {
          e.stopPropagation();
      }, b = (e, t) => function(r) {
          for (var n = 0; n < e.length; n++) e[n].call(this, r, t);
      }, m = (e, t) => function(r) {
          r.target === e && t.call(this, r);
      }, E = e => function(t) {
          t.isTrusted && e.call(this, t);
      }, T = (e, t, r) => function(n) {
          ((e, t) => {
              var r = t;
              for (var n in k) {
                  if (!(k[n][0] in e) && !(k[n][1] in e)) return !1;
                  r--;
              }
              return !r;
          })(t, r) && e.call(this, n);
      }, N = [], y = [], k = {}, O = () => {
          O = r, p(d, "keyup", (e => {
              for (var t = 0; t < N.length; t++) 0 === N[t][0].length ? N.splice(t--, 1) : N[t][1].call(d, e);
              delete k[e.code + e.key];
          }), !1), p(d, "keydown", (e => {
              k[e.code + e.key] = [ e.code, e.key ];
              for (var t = 0; t < y.length; t++) 0 === y[t][0].length ? y.splice(t--, 1) : y[t][1].call(d, e);
          }), !1);
      }, S = 0, w = () => {
          S--;
      }, L = 0, C = () => {
          L--;
      }, x = 0, A = () => {
          x--;
      }, R = d, $ = R, P = R, F = R, H = (e, t) => e.contains(t), I = (e, t) => function(r) {
          (P === e || H(e, P)) && t.call(this, r);
      }, G = (e, t) => function(r) {
          (F === e || H(e, F)) && t.call(this, r);
      }, j = (e, t) => function(r) {
          P !== e && !H(e, P) && t.call(this, r);
      }, W = (e, t) => function(r) {
          F !== e && !H(e, F) && t.call(this, r);
      }, X = 0, z = (e, t) => (X++, function(r) {
          R !== e && !H(e, R) && t.call(e, r);
      }), q = () => {
          X--;
      }, B = 0, Y = (e, t) => (B++, function(r) {
          $ !== e && !H(e, $) && t.call(e, r);
      }), Z = () => {
          B--;
      }, U = 0, D = (e, t) => (U++, function(r) {
          P !== e && !H(e, P) && t.call(e, r);
      }), K = () => {
          U--;
      }, J = 0, Q = (e, t) => (J++, function(r) {
          F !== e && !H(e, F) && t.call(e, r);
      }), V = () => {
          J--;
      }, ee = r, te = r, re = !1, ne = () => {
          ne = r;
          try {
              p(window, "test", r, s({}, "passive", {
                  get: () => !(re = !0)
              }));
          } catch {}
          var e = (e, t, r, n) => {
              var s = document.createEvent("CustomEvent");
              return s.initCustomEvent(e, r, n, t), s;
          }, t = (e, t) => e.dispatchEvent(t);
          ee = (r, n) => {
              if (R = P, P = r.target, R !== P) {
                  var s = {
                      last: R,
                      next: P
                  };
                  U > 0 && t(R, e(u, s, !0)), X > 0 && t(P, e(c, s, !1));
              }
              te(P, n);
          }, te = (r, n) => {
              if (($ = F) !== (F = n === o ? r : F)) {
                  var s = {
                      last: $,
                      next: F
                  };
                  J > 0 && t($, e(v, s, !0)), B > 0 && t(F, e(f, s, !1));
              }
          }, (([r, n, s, c, f, u, v, _, g, b, m]) => {
              for (var E, T = (r, n) => {
                  var s = r.target;
                  switch (n) {
                    case o:
                      S > 0 && t(s, e(o, {
                          event: r
                      }, !0, !0));
                      break;

                    case l:
                      L > 0 && t(s, e(l, {
                          event: r
                      }, !0, !0));
                      break;

                    case h:
                      x > 0 && t(s, e(h, {
                          event: r
                      }, !0, !0));
                  }
              }, N = !1, y = () => {
                  N = !1;
              }, k = (e, t) => {
                  e.touches.length < 2 && (N = !0, T(e, t));
              }, O = (e, t) => {
                  N ? (i(E), E = a(y)) : T(e, t);
              }, w = ("on" + r + m in d ? [ r + c, e => {
                  ee(e, o);
              }, r + f, e => {
                  ee(e, h);
              }, r + u, e => {
                  ee(e, h);
              }, r + g, e => {
                  ee(e, l);
              }, r + b, e => {
                  ee(e, l);
              }, n + v, e => {
                  k(e, o);
              }, n + m, e => {
                  k(e, l);
              }, n + _, e => {
                  k(e, h);
              }, n + u, e => {
                  k(e, h);
              }, s + c, e => {
                  O(e, o);
              }, s + m, e => {
                  O(e, l);
              }, s + f, e => {
                  O(e, h);
              } ] : [ n + v, e => {
                  ee(e, o), k(e, o);
              }, n + m, e => {
                  ee(e, l), k(e, l);
              }, n + _, e => {
                  ee(e, h), k(e, h);
              }, n + u, e => {
                  ee(e, h), k(e, h);
              }, s + c, e => {
                  ee(e, o), O(e, o);
              }, s + m, e => {
                  ee(e, l), O(e, l);
              }, s + f, e => {
                  ee(e, h), O(e, h);
              }, s + g, e => {
                  ee(e, l);
              }, s + b, e => {
                  ee(e, l);
              } ]), C = w.length, A = 0; A < C; A++) p(d, w[A++], w[A], !re || {
                  capture: !0,
                  passive: !1
              });
          })("pointer,touch,mouse,down,up,cancel,start,end,out,over,move".split(","));
      }, [se, ae, ie, oe] = [ c, f, u, v ].map((e => e + "ed"));
      return [ (e, r, n, s) => {
          for (var a, i, d = t(n) ? n.slice() : [ n ], k = b(d, s), R = {}, $ = 0, P = [], F = () => {
              for (d.length = 0; P.length > 0; ) P.pop()();
          }, H = !1, X = !1, B = !1, U = !1, J = !1, ee = r.split(/[^a-z\d]+/i), te = ee.length; te-- > 0; ) if (i = ee[te]) switch (i) {
            case "once":
              d.push(F);
              break;

            case "strict":
              B = !0;
              break;

            case "keysup":
              U = !0;
              break;

            case "capture":
              H = !0;
              break;

            case "passive":
              X = !0;
              break;

            case "wantsUntrusted":
              J = !0;
              break;

            case "self":
              k = m(e, k);
              break;

            case "trusted":
              k = E(k);
              break;

            case "stop":
              d.unshift(g);
              break;

            case "prevent":
              d.unshift(_);
              break;

            case se:
              k = I(e, k);
              break;

            case ae:
              k = G(e, k);
              break;

            case ie:
              k = j(e, k);
              break;

            case oe:
              k = W(e, k);
              break;

            default:
              if (1 === i.length || /[A-Z]/.test(i[0])) i in R || (R[i] = !0, $++); else if (0 === te) switch (a = i) {
                case c:
                  H = !0, k = z(e, k), P.push(q);
                  break;

                case f:
                  H = !0, k = Y(e, k), P.push(Z);
                  break;

                case u:
                  H = !1, k = D(e, k), P.push(K);
                  break;

                case v:
                  H = !1, k = Q(e, k), P.push(V);
              }
          }
          if (ne(), ($ || B) && (O(), k = T(k, R, $)), a) {
              switch (a) {
                case o:
                  S++, P.push(w);
                  break;

                case l:
                  L++, P.push(C);
                  break;

                case h:
                  x++, P.push(A);
              }
              var le = re ? {
                  passive: X,
                  capture: H,
                  wantsUntrusted: J
              } : H;
              P.push(p(e, a, k, le));
          } else (U ? N : y).push([ d, k ]);
          return F;
      }, e => {
          te(e && e.contains ? e : d, o);
      } ];
  })(f, d$1, o$1, l, s, h, c), z = (e, t) => !g(e, t) || p(t) || _(t), q = (e, t, r) => {
      var n = e._, s = n.queue;
      if (n.break = !0, 1 === s.push({
          f: r,
          n: e._value = t
      })) {
          for (var a, i = 0; i < s.length; i++) if ((a = s[i].f) || i > s.length - 2) {
              n.break = !1, n.index = 0;
              for (var o, l = s[i]; n.index < n.items.length && (o = n.items[n.index], !a && !z(o.o, l.n) || (o.s(e._value = o.o = l.n), 
              o.o = e._value, !n.break || a)); n.index++) ;
          }
          n.queue = [];
      }
  }, B = () => {
      B = o$1;
      var e = ReaseSubject.prototype;
      s(e, "$", {
          get: e.get,
          set: e.set
      });
      for (var t = function(t, r) {
          s(e, t[r], {
              value: function() {
                  var e = this.get();
                  return e = null != e && e[t[r]] ? e[t[r]](arguments) : e, r ? e + "" : e;
              }
          });
      }, r = [ "valueOf", "toString", "toJSON" ], n = 3; n-- > 0; ) t(r, n);
  };

  class ReaseSubject {
      constructor(e, t) {
          B(), this._ = {
              items: [],
              queue: [],
              onFst: t,
              break: !1,
              index: 0
          }, this._value = e;
      }
      get() {
          return this._value;
      }
      set(e) {
          return (this._.queue.length > 0 || z(this._value, e)) && q(this, e, !1), this;
      }
      next(e) {
          return q(this, e, !0), this;
      }
      clear() {
          for (var e = this._.items, t = e.length; t-- > 0; ) e[t].u();
          return this;
      }
      subscribe(e, t) {
          var r = {
              s: n => {
                  e(n, t, r.u);
              },
              u: () => {
                  if (r.s !== r.u) {
                      r.s = r.u = o$1;
                      var e = s.indexOf(r);
                      -1 === e || (s.splice(e, 1), e > n.index || n.index--), 0 === s.length && n.onLst && n.onLst(this);
                  }
              },
              o: {}
          }, n = this._, s = n.items;
          return 0 === s.length && n.onFst && (n.onLst = n.onFst(this)), s.push(r), 0 === n.queue.length && r.s(r.o = this._value), 
          r.u;
      }
  }

  var Y, Z, U, K = R, Q = e => {
      ++e._.$ && ++e.high._.$;
  }, V = e => {
      if (e._.$ > 0) if (e._.$--, se(e.type)) e.high && V(e.high); else if (e._.$ <= 0) if (e._.$ = NaN, 
      e._.oc) {
          for (var t = re(), r = [], n = e._.oc, s = 0; s < n.length && e.on; s++) ee(e), 
          r.push(n[s](e));
          ne(t), y(r, ((e, t) => {
              var r = re();
              if (t.on) {
                  ee(t);
                  for (var n = e.length; n-- > 0; ) _(e[n]) && ie(e[n]);
                  t.high && V(t.high);
              } else for (var s = e.length; s-- > 0; ) _(e[s]) && (ee(t), e[s](t));
              ne(r);
          }), e);
      } else e.high && V(e.high);
  }, ee = e => {
      U = e, Y = e.high, Z = e.home;
  }, te = e => {
      U = e.parent;
  }, re = () => [ U, Y, Z ], ne = e => {
      [U, Y, Z] = e;
  }, se = e => "ROOT" !== e && "COMPONENT" !== e;

  function ie(e) {
      var t = v(this) ? this : U;
      if (!v(t)) throw "onDestroy: not ctx";
      if (t.on) (t._.od || (t._.od = [])).push(e); else {
          var r = re();
          ee(t), e(t), ne(r);
      }
  }

  var le = () => U, he = e => {
      if (e.on && e.use) {
          for (var t = re(), r = e._.esu || (e._.esu = []), n = 0; n < e.use.length; n++) if (ee(e), 
          r.push(e.use[n](e)), !e.on) {
              fe(e);
              break;
          }
          ne(t);
      }
  }, ce = e => {
      if (e.on && e._.esu) {
          for (var t, r = re(), n = e._.esu, s = 0; s < n.length; s++) if ((t = n[s]) && _(t = t.created) && (ee(e), 
          t(e), !e.on)) {
              fe(e);
              break;
          }
          ne(r);
      }
  }, fe = e => {
      if (e._.esu) {
          for (var t, r = re(), n = e._.esu; n.length > 0; ) (t = n.pop()) && _(t = t.destroy || t) && (ee(e), 
          t(e));
          ne(r);
      }
  }, _e = e => {
      if (e.on) {
          e.attrs = {};
          var t, r, n, s = re(), a = e.attrs;
          for (var i in e.props) if (t = e.props[i], n = H(i, e._), (r = a[i] = {
              type: n[2],
              name: n[3],
              is: null,
              parse: n[1],
              high: e.high,
              _is: t,
              _: {
                  $: 0,
                  u: o$1,
                  s: n[0]
              }
          }).type) if (m(t) || b(t) && (t = x(t), 1)) {
              if (ee(e), Q(r), r._.u = w(t, ((e, [t, r], n) => {
                  r._.u = n, t.on ? r.is !== (r.is = e = r.parse(e)) && t.node && r._.s(t.node, r.name, e, t) : n(), 
                  V(r);
              }), [ e, r ]), !e.on) {
                  ee(e), r._.u();
                  break;
              }
          } else r.is = t = r.parse(t), e.node && r._.s(e.node, r.name, t, e);
          ne(s);
      }
  }, be = (e, t) => r => {
      if (r.root.node) {
          for (var n, s, a = r; ;) if (n = (a = a.parent).node) {
              1 === n.nodeType ? e(r, n) && n.appendChild(r.node) : e(r, n = (s = n).parentNode) && n.insertBefore(r.node, s);
              break;
          }
      } else t && t(r);
  }, me = be(((e, t) => (e.node = document.createElementNS(r[e.is] || t.namespaceURI, e.is), 
  _e(e), e.on)), _e), ye = (e, t, r, n, s, a) => U = U.children[U.children.push({
      type: e,
      name: a,
      is: r,
      node: null,
      props: n,
      use: s,
      root: U.root,
      home: Z,
      high: Y,
      parent: U,
      children: [],
      slots: null,
      attrs: null,
      on: U.on,
      pub: {},
      _is: t,
      _: {
          _: u,
          $: 0
      }
  }) - 1];

  var We = () => {
      var e = U;
      ce(e), te(e);
  }, Xe = (e, t, r) => {
      if (U.on) {
          var n = ye("ELEMENT", e, e, t || {}, r);
          return me(n), he(n), We;
      }
      return o$1;
  }, lt = (e, t, r) => {
      var n = re();
      U = {
          on: !0,
          _: {},
          children: []
      };
      var s = ye("ROOT", null, {
          css: {}
      });
      s.node = e, s.high = s.home = s.parent = null, s._.$++, s._.od = [ e => {
          e.node = null;
      } ], Y = Z = U = s.root = s;
      var a = t.apply(s, r);
      return V(s), ne(n), a;
  }, ht = (e, t) => {
      if (v(e) || v(e = le())) return e;
      throw "not ctx or not global " + t.name;
  }, ct = (e, t) => new ReaseSubject(e, t), ft = function e(t, r) {
      var n = ht(this, e), s = ct(t, r);
      return ie.call(n, (() => {
          s.clear();
      })), s;
  };

  /* eslint-disable */

  var {abs: t} = Math, o = e => {
      e.stopPropagation(), e.cancelable && e.preventDefault();
  }, a = e => {
      var t = 0, o = 0;
      if ("touches" in e) {
          var a = e.touches[0];
          a && (t = a.clientX, o = a.clientY);
      } else t = e.clientX, o = e.clientY;
      return [ t, o ];
  }, d = (d, n, s = 10) => l => {
      var i = {
          ctx: l,
          d: n,
          t: s,
          is: !1,
          dx: 0,
          dy: 0,
          ox: 0,
          oy: 0,
          es: null,
          u: []
      };
      return i.u.push(I(l.node, "tapstart", ((n, s) => {
          var l = s.es = n.detail.event;
          s.is = !1, s.ox = s.oy = 0, [s.dx, s.dy] = a(l), s.u.push(I(document, "tapmove", ((e, n) => {
              var s = e.detail.event, [l, i] = a(s), r = l - n.dx, x = i - n.dy;
              n.ox += r, n.oy += x, n.is ? (o(s), d({
                  type: "move",
                  event: s,
                  detail: n.d,
                  delta: {
                      x: r,
                      y: x
                  },
                  offset: {
                      x: n.ox,
                      y: n.oy
                  }
              }, n.ctx), n.dx = l, n.dy = i) : t(n.ox) + t(n.oy) > n.t && (n.is = !0, o(s), d({
                  type: "start",
                  event: n.es,
                  detail: n.d,
                  delta: {
                      x: 0,
                      y: 0
                  },
                  offset: {
                      x: 0,
                      y: 0
                  }
              }, n.ctx));
          }), s), I(document, "tapend", ((e, t) => {
              for (;t.u.length > 1; ) t.u.pop()();
              if (t.is) {
                  t.is = !1;
                  var a = e.detail.event;
                  o(a), d({
                      type: "end",
                      event: a,
                      detail: t.d,
                      delta: {
                          x: 0,
                          y: 0
                      },
                      offset: {
                          x: t.ox,
                          y: t.oy
                      }
                  }, t.ctx);
              }
          }), s));
      }), i)), () => {
          for (;i.u.length > 0; ) i.u.pop()();
      };
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment

  const clamp9 = (v, max) => clamp(v, 9, max - 9);
  const fix_px = (v) => v === '' + v ? v : v + 'px';
  const DIMENSIONS = ['top', 'left', 'right', 'bottom', 'width', 'height']; 
  const [TOP, LEFT, RIGHT, BOTTOM, WIDTH, HEIGHT] = DIMENSIONS;

  const styleSetProperty = (
    E, k, v
  ) => {
    E.style.setProperty(k, '' + v);
  };

  const set_position = ((AUTO, TOP, LEFT, RIGHT, BOTTOM) => (
    type, width, height
  ) => {
    switch (type) {
      case TOP:
        return { type, top: 0, left: 0, right: 0, bottom: AUTO, width: AUTO, height }
      case LEFT:
        return { type, top: 0, left: 0, right: AUTO, bottom: 0, width, height: AUTO }
      case RIGHT:
        return { type, top: 0, left: AUTO, right: 0, bottom: 0, width, height: AUTO }
      case BOTTOM:
      default:
        return { type, top: AUTO, left: 0, right: 0, bottom: 0, width: AUTO, height }
    }
  })('auto', TOP, LEFT, RIGHT, BOTTOM);

  const tsx_root = (props) => {
    const { setup } = props;

    const WINDOW = window;
    let resize;
    let position = setup.position;
    const { innerWidth, innerHeight } = WINDOW;
    let width = clamp9(setup.width || innerWidth / 3, innerWidth);
    let height = clamp9(setup.height || innerHeight / 3, innerHeight);
    const $position = ft();
    if (/^(?:top|right|bottom|left)$/.test(position)) {
      resize = noop_void;
      $position.$ = set_position(position, width, height);
    } else {
      resize = () => {
        const { innerWidth, innerHeight } = WINDOW;
        width = clamp9(width, innerWidth);
        height = clamp9(height, innerHeight);
        position = innerWidth > innerHeight ? RIGHT : BOTTOM;
        $position.set(set_position(position, width, height));
      };
      resize();
    }

    const getRatio = () => max(+WINDOW.devicePixelRatio || 1, 1);
    const $ratio = ft(getRatio());

    ie(I(WINDOW, 'resize', debounce(() => {
      $ratio.set(getRatio()), resize();
    }, 50)))

    ;(
        Xe("div", { class: /*r2.$*/K([$position], (_$0) => (`cnly-root cnly-${_$0[0].type}`)), "style-font-size": setup.fontSize + 'px', "style-z-index": setup.zIndex })(
      Xe("div", { class: 'cnly-main', style: /*r2.$*/K([$position], (_$0) => ({
            top   : fix_px(_$0[0].top),
            left  : fix_px(_$0[0].left),
            right : fix_px(_$0[0].right),
            bottom: fix_px(_$0[0].bottom),
            width : fix_px(_$0[0].width),
            height: fix_px(_$0[0].height),
          })) })(
        tsx_head(),
        Xe("div", { class: 'cnly-resizer', style: /*r2.$*/K([$ratio], (_$0) => (`transform:scale(${_$0[0]});`)) }, [d((e, ctx) => {
              const delta = e.delta;
              const { innerWidth, innerHeight } = WINDOW;
              const node = ctx.node.parentNode; 
              
              if (e.type === 'start') {
                try {
                  const computed = getComputedStyle(node);
                  // eslint-disable-next-line default-case
                  switch (position) {
                    case LEFT:
                    case RIGHT:
                      width = __parseFloat__(computed.width) || 9;
                      break
                    case TOP:
                    case BOTTOM:
                      height = __parseFloat__(computed.height) || 9;
                      break
                  }
                } catch (e2) {}
              }

              // eslint-disable-next-line default-case
              switch (position) {
                case LEFT:
                  styleSetProperty(
                    node, WIDTH, (width = clamp9(width + delta.x, innerWidth)) + 'px'
                  );
                  break
                case RIGHT:
                  styleSetProperty(
                    node, WIDTH, (width = clamp9(width - delta.x, innerWidth)) + 'px'
                  );
                  break
                case TOP:
                  styleSetProperty(
                    node, HEIGHT, (height = clamp9(height + delta.y, innerHeight)) + 'px'
                  );
                  break
                case BOTTOM:
                  styleSetProperty(
                    node, HEIGHT, (height = clamp9(height - delta.y, innerHeight)) + 'px'
                  );
                  break
              }
            }, {}, 0)])()
      )
    )


    );
  };

  /* eslint-disable */
  const CONSOLE_DEFAULTS = [
    'assert',  'clear',
    'count', 'countReset',
    'debug', 'dir', 'dirxml', 'error',
    'group', 'groupCollapsed', 'groupEnd',
    'info', 'log', 'table',
    'time', 'timeEnd', 'timeLog', 'timeStamp',
    'trace', 'warn',
  ]; 
  /* eslint-enable */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const consolly = (
    {
      showTimestamp = true,
      showSource = true,
      position = 'auto',
      fontSize = 12,
      zIndex = 100000000,
      width = 0,
      height = 0,
      debug = true,
    } 









































   = {}
  ) => {
    const setup = {
      showTimestamp,
      showSource,
      position,
      fontSize,
      zIndex,
      width,
      height,
      debug
    };
    const queue = [];
    const count = {};
    const timer = {};

    // @ts-ignore
    const cheat = {
      count(...args) { console.log(args); },
      countReset(...args) { console.log(args); },
    };

    const methodFactory = (key) => (...a) => {
      if (key in cheat) (cheat )[key](...a);
      else {
        __Console__.warn('Consolly: Method "' + key + '" not supports. Arguments:\n', a);
      }
      if (setup.debug && key in __Console__) (__Console__ )[key](...a);
    };
    const result = {};
    for (let key, a = keys(__Console__), l = a.length, i = 0; i < l; i++) {
      result[key = a[i]] =
        is_function(__Console__[key]) ? methodFactory(key) : __Console__[key];
    }
    for (let key, l = CONSOLE_DEFAULTS.length, i = 0; i < l; i++) {
      !is_function(key = CONSOLE_DEFAULTS[i]) && (result[key] = methodFactory(key));
    }
    const run = () => {
      style();
      lt(
        document.body, tsx_root, [{ setup, queue, count, timer, cheat }]
      );
    };
    if (document.body) run();
    else ie(I(window, 'load', run));
    return result 
  };

  return consolly;

})();
