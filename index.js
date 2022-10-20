'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var rease = require('rease');
var reaseUse = require('rease-use');
var css_base = ".cnly-root{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:monospace;height:0;line-height:1.25;overflow:visible;position:relative;width:0;z-index:100000000}.cnly-root *{-webkit-box-sizing:border-box!important;box-sizing:border-box!important;font-family:inherit;font-size:inherit;line-height:inherit}.cnly-main{background-color:#eee;-webkit-box-sizing:border-box;box-sizing:border-box;max-height:100%;max-width:100%;min-height:9px;min-width:9px;overflow:visible;position:fixed}.cnly-resizer{background-color:#ccc;height:1px;position:absolute;width:1px}.cnly-resizer:before{background-color:#ccc9;bottom:-5px;content:\"\";display:block;left:-5px;opacity:0;position:absolute;right:-5px;top:-5px;-webkit-transition:opacity .25s;transition:opacity .25s}.cnly-resizer:hover:before{opacity:1}.cnly-top .cnly-resizer{bottom:0;cursor:row-resize;cursor:s-resize;width:100%}.cnly-left .cnly-resizer{cursor:col-resize;cursor:e-resize;height:100%;right:0}.cnly-right .cnly-resizer{cursor:col-resize;cursor:w-resize;height:100%;left:0}.cnly-bottom .cnly-resizer{cursor:row-resize;cursor:n-resize;top:0;width:100%}.cnly-icon-close{background:50%/contain no-repeat url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23ad3' class='bi bi-x-lg'%3E%3Cpath d='M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z'/%3E%3C/svg%3E\")}";
var style = function (styleTextContent, node) {
  return function () {
    if (!node) {
      node = document.createElement('style');
      node.textContent = styleTextContent;
      document.head.appendChild(node);
    }
  };
}(css_base);

/* eslint-disable no-invalid-this */
/* eslint-disable @typescript-eslint/explicit-function-return-type */

var debounce = function debounce(fn, ms) {
  var cto;
  return function debounceWrapper() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    clearTimeout(cto), cto = setTimeout.apply(void 0, [fn.bind(this), +ms || 1].concat(args));
  };
};
var is_function = function is_function(v) {
  return typeof v === 'function';
};
var min = Math.min,
  max = Math.max;
var __parseFloat__ = parseFloat;
var clamp = function clamp(x, lower, upper) {
  return (x = +x) < lower ? lower : x > upper ? upper : x;
};
var noop_void = function noop_void() {};
var __Object__ = Object;
var keys = __Object__.keys;
var __Console__ = console;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/explicit-function-return-type */

var tsx_head = function tsx_head() {
  console.log('head');
};

// eslint-disable-next-line @typescript-eslint/ban-ts-comment

var clamp9 = function clamp9(v, max) {
  return clamp(v, 9, max - 9);
};
var fix_px = function fix_px(v) {
  return v === '' + v ? v : v + 'px';
};
var DIMENSIONS = ['top', 'left', 'right', 'bottom', 'width', 'height'];
var TOP = DIMENSIONS[0],
  LEFT = DIMENSIONS[1],
  RIGHT = DIMENSIONS[2],
  BOTTOM = DIMENSIONS[3],
  WIDTH = DIMENSIONS[4],
  HEIGHT = DIMENSIONS[5];
var styleSetProperty = function styleSetProperty(E, k, v) {
  E.style.setProperty(k, '' + v);
};
var set_position = function (AUTO, TOP, LEFT, RIGHT, BOTTOM) {
  return function (type, width, height) {
    switch (type) {
      case TOP:
        return {
          type: type,
          top: 0,
          left: 0,
          right: 0,
          bottom: AUTO,
          width: AUTO,
          height: height
        };
      case LEFT:
        return {
          type: type,
          top: 0,
          left: 0,
          right: AUTO,
          bottom: 0,
          width: width,
          height: AUTO
        };
      case RIGHT:
        return {
          type: type,
          top: 0,
          left: AUTO,
          right: 0,
          bottom: 0,
          width: width,
          height: AUTO
        };
      case BOTTOM:
      default:
        return {
          type: type,
          top: AUTO,
          left: 0,
          right: 0,
          bottom: 0,
          width: AUTO,
          height: height
        };
    }
  };
}('auto', TOP, LEFT, RIGHT, BOTTOM);
var tsx_root = function tsx_root(props) {
  var setup = props.setup;
  var WINDOW = window;
  var resize;
  var position = setup.position;
  var innerWidth = WINDOW.innerWidth,
    innerHeight = WINDOW.innerHeight;
  var width = clamp9(setup.width || innerWidth / 3, innerWidth);
  var height = clamp9(setup.height || innerHeight / 3, innerHeight);
  var $position = rease.subject();
  if (/^(?:top|right|bottom|left)$/.test(position)) {
    resize = noop_void;
    $position.$ = set_position(position, width, height);
  } else {
    resize = function resize() {
      var innerWidth = WINDOW.innerWidth,
        innerHeight = WINDOW.innerHeight;
      width = clamp9(width, innerWidth);
      height = clamp9(height, innerHeight);
      position = innerWidth > innerHeight ? RIGHT : BOTTOM;
      $position.set(set_position(position, width, height));
    };
    resize();
  }
  var getRatio = function getRatio() {
    return max(+WINDOW.devicePixelRatio || 1, 1);
  };
  var $ratio = rease.subject(getRatio());
  rease.onDestroy(rease.listenOnEventGlobal(WINDOW, 'resize', debounce(function () {
    $ratio.set(getRatio()), resize();
  }, 50)));
  rease._e("div", {
    class: /*r2.$*/rease._$([$position], function (_$0) {
      return "cnly-root cnly-" + _$0[0].type;
    }),
    "style-font-size": setup.fontSize + 'px',
    "style-z-index": setup.zIndex
  })(rease._e("div", {
    class: 'cnly-main',
    style: /*r2.$*/rease._$([$position], function (_$0) {
      return {
        top: fix_px(_$0[0].top),
        left: fix_px(_$0[0].left),
        right: fix_px(_$0[0].right),
        bottom: fix_px(_$0[0].bottom),
        width: fix_px(_$0[0].width),
        height: fix_px(_$0[0].height)
      };
    })
  })(tsx_head(), rease._e("div", {
    class: 'cnly-resizer',
    style: /*r2.$*/rease._$([$ratio], function (_$0) {
      return "transform:scale(" + _$0[0] + ");";
    })
  }, [reaseUse.onPan(function (e, ctx) {
    var delta = e.delta;
    var innerWidth = WINDOW.innerWidth,
      innerHeight = WINDOW.innerHeight;
    var node = ctx.node.parentNode;
    if (e.type === 'start') {
      try {
        var computed = getComputedStyle(node);
        // eslint-disable-next-line default-case
        switch (position) {
          case LEFT:
          case RIGHT:
            width = __parseFloat__(computed.width) || 9;
            break;
          case TOP:
          case BOTTOM:
            height = __parseFloat__(computed.height) || 9;
            break;
        }
      } catch (e2) {}
    }

    // eslint-disable-next-line default-case
    switch (position) {
      case LEFT:
        styleSetProperty(node, WIDTH, (width = clamp9(width + delta.x, innerWidth)) + 'px');
        break;
      case RIGHT:
        styleSetProperty(node, WIDTH, (width = clamp9(width - delta.x, innerWidth)) + 'px');
        break;
      case TOP:
        styleSetProperty(node, HEIGHT, (height = clamp9(height + delta.y, innerHeight)) + 'px');
        break;
      case BOTTOM:
        styleSetProperty(node, HEIGHT, (height = clamp9(height - delta.y, innerHeight)) + 'px');
        break;
    }
  }, {}, 0)])()));
};

/* eslint-disable */
var CONSOLE_DEFAULTS = ['assert', 'clear', 'count', 'countReset', 'debug', 'dir', 'dirxml', 'error', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'table', 'time', 'timeEnd', 'timeLog', 'timeStamp', 'trace', 'warn'];
/* eslint-enable */

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
var consolly = function consolly(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    _ref$showTimestamp = _ref.showTimestamp,
    showTimestamp = _ref$showTimestamp === void 0 ? true : _ref$showTimestamp,
    _ref$showSource = _ref.showSource,
    showSource = _ref$showSource === void 0 ? true : _ref$showSource,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'auto' : _ref$position,
    _ref$fontSize = _ref.fontSize,
    fontSize = _ref$fontSize === void 0 ? 12 : _ref$fontSize,
    _ref$zIndex = _ref.zIndex,
    zIndex = _ref$zIndex === void 0 ? 100000000 : _ref$zIndex,
    _ref$width = _ref.width,
    width = _ref$width === void 0 ? 0 : _ref$width,
    _ref$height = _ref.height,
    height = _ref$height === void 0 ? 0 : _ref$height,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? true : _ref$debug;
  var setup = {
    showTimestamp: showTimestamp,
    showSource: showSource,
    position: position,
    fontSize: fontSize,
    zIndex: zIndex,
    width: width,
    height: height,
    debug: debug
  };
  var queue = [];
  var count = {};
  var timer = {};

  // @ts-ignore
  var cheat = {
    count: function count() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      console.log(args);
    },
    countReset: function countReset() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      console.log(args);
    }
  };
  var methodFactory = function methodFactory(key) {
    return function () {
      for (var _len4 = arguments.length, a = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        a[_key4] = arguments[_key4];
      }
      if (key in cheat) cheat[key].apply(cheat, a);else {
        __Console__.warn('Consolly: Method "' + key + '" not supports. Arguments:\n', a);
      }
      if (setup.debug && key in __Console__) __Console__[key].apply(__Console__, a);
    };
  };
  var result = {};
  for (var key, a = keys(__Console__), l = a.length, i = 0; i < l; i++) {
    result[key = a[i]] = is_function(__Console__[key]) ? methodFactory(key) : __Console__[key];
  }
  for (var _key5, _l = CONSOLE_DEFAULTS.length, _i = 0; _i < _l; _i++) {
    !is_function(_key5 = CONSOLE_DEFAULTS[_i]) && (result[_key5] = methodFactory(_key5));
  }
  var run = function run() {
    style();
    rease.createReaseApp(document.body, tsx_root, [{
      setup: setup,
      queue: queue,
      count: count,
      timer: timer,
      cheat: cheat
    }]);
  };
  if (document.body) run();else rease.onDestroy(rease.listenOnEventGlobal(window, 'load', run));
  return result;
};
exports["default"] = consolly;
