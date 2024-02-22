function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e2 = m2[i];
    if (typeof e2 !== "string" && !Array.isArray(e2)) {
      for (const k2 in e2) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d2 = Object.getOwnPropertyDescriptor(e2, k2);
          if (d2) {
            Object.defineProperty(n2, k2, d2.get ? d2 : {
              enumerable: true,
              get: () => e2[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
var react = { exports: {} };
var react_production_min = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l$3 = Symbol.for("react.element"), n$3 = Symbol.for("react.portal"), p$4 = Symbol.for("react.fragment"), q$3 = Symbol.for("react.strict_mode"), r$2 = Symbol.for("react.profiler"), t$2 = Symbol.for("react.provider"), u$1 = Symbol.for("react.context"), v$3 = Symbol.for("react.forward_ref"), w$1 = Symbol.for("react.suspense"), x$1 = Symbol.for("react.memo"), y$1 = Symbol.for("react.lazy"), z$2 = Symbol.iterator;
function A$2(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$2 && a[z$2] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b2, e2) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e2 || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b2, e2) {
  var d2, c2 = {}, k2 = null, h2 = null;
  if (null != b2)
    for (d2 in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J.call(b2, d2) && !L$1.hasOwnProperty(d2) && (c2[d2] = b2[d2]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    c2.children = e2;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    c2.children = f2;
  }
  if (a && a.defaultProps)
    for (d2 in g2 = a.defaultProps, g2)
      void 0 === c2[d2] && (c2[d2] = g2[d2]);
  return { $$typeof: l$3, type: a, key: k2, ref: h2, props: c2, _owner: K$1.current };
}
function N$1(a, b2) {
  return { $$typeof: l$3, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$3;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e2, d2, c2) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h2 = false;
  if (null === a)
    h2 = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h2 = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$3:
          case n$3:
            h2 = true;
        }
    }
  if (h2)
    return h2 = a, c2 = c2(h2), a = "" === d2 ? "." + Q$1(h2, 0) : d2, I$1(c2) ? (e2 = "", null != a && (e2 = a.replace(P$1, "$&/") + "/"), R$1(c2, b2, e2, "", function(a2) {
      return a2;
    })) : null != c2 && (O$1(c2) && (c2 = N$1(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P$1, "$&/") + "/") + a)), b2.push(c2)), 1;
  h2 = 0;
  d2 = "" === d2 ? "." : d2 + ":";
  if (I$1(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k2 = a[g2];
      var f2 = d2 + Q$1(k2, g2);
      h2 += R$1(k2, b2, e2, f2, c2);
    }
  else if (f2 = A$2(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d2 + Q$1(k2, g2++), h2 += R$1(k2, b2, e2, f2, c2);
  else if ("object" === k2)
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h2;
}
function S$1(a, b2, e2) {
  if (null == a)
    return a;
  var d2 = [], c2 = 0;
  R$1(a, d2, "", "", function(a2) {
    return b2.call(e2, a2, c2++);
  });
  return d2;
}
function T$1(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b2, e2) {
  S$1(a, function() {
    b2.apply(this, arguments);
  }, e2);
}, count: function(a) {
  var b2 = 0;
  S$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$4;
react_production_min.Profiler = r$2;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$3;
react_production_min.Suspense = w$1;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b2, e2) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d2 = C$1({}, a.props), c2 = a.key, k2 = a.ref, h2 = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h2 = K$1.current);
    void 0 !== b2.key && (c2 = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d2[f2] = void 0 === b2[f2] && void 0 !== g2 ? g2[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d2.children = e2;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    d2.children = g2;
  }
  return { $$typeof: l$3, type: a.type, key: c2, ref: k2, props: d2, _owner: h2 };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u$1, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t$2, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b2 = M$1.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$3, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y$1, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x$1, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$1.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$1.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e2) {
  return U$1.current.useImperativeHandle(a, b2, e2);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$1.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$1.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$1.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e2) {
  return U$1.current.useReducer(a, b2, e2);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e2) {
  return U$1.current.useSyncExternalStore(a, b2, e2);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
{
  react.exports = react_production_min;
}
var reactExports = react.exports;
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$2 = reactExports, k$2 = Symbol.for("react.element"), l$2 = Symbol.for("react.fragment"), m$3 = Object.prototype.hasOwnProperty, n$2 = f$2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$3 = { key: true, ref: true, __self: true, __source: true };
function q$2(c2, a, g2) {
  var b2, d2 = {}, e2 = null, h2 = null;
  void 0 !== g2 && (e2 = "" + g2);
  void 0 !== a.key && (e2 = "" + a.key);
  void 0 !== a.ref && (h2 = a.ref);
  for (b2 in a)
    m$3.call(a, b2) && !p$3.hasOwnProperty(b2) && (d2[b2] = a[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a = c2.defaultProps, a)
      void 0 === d2[b2] && (d2[b2] = a[b2]);
  return { $$typeof: k$2, type: c2, key: e2, ref: h2, props: d2, _owner: n$2.current };
}
reactJsxRuntime_production_min.Fragment = l$2;
reactJsxRuntime_production_min.jsx = q$2;
reactJsxRuntime_production_min.jsxs = q$2;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var reactDom = { exports: {} };
var reactDom_production_min = {};
var scheduler = { exports: {} };
var scheduler_production_min = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(exports) {
  function f2(a, b2) {
    var c2 = a.length;
    a.push(b2);
    a:
      for (; 0 < c2; ) {
        var d2 = c2 - 1 >>> 1, e2 = a[d2];
        if (0 < g2(e2, b2))
          a[d2] = b2, a[c2] = e2, c2 = d2;
        else
          break a;
      }
  }
  function h2(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b2 = a[0], c2 = a.pop();
    if (c2 !== b2) {
      a[0] = c2;
      a:
        for (var d2 = 0, e2 = a.length, w2 = e2 >>> 1; d2 < w2; ) {
          var m2 = 2 * (d2 + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g2(C2, c2))
            n2 < e2 && 0 > g2(x2, C2) ? (a[d2] = x2, a[n2] = c2, d2 = n2) : (a[d2] = C2, a[m2] = c2, d2 = m2);
          else if (n2 < e2 && 0 > g2(x2, c2))
            a[d2] = x2, a[n2] = c2, d2 = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g2(a, b2) {
    var c2 = a.sortIndex - b2.sortIndex;
    return 0 !== c2 ? c2 : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h2(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h2(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h2(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h2(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c2 = y2;
    try {
      G2(b2);
      for (v2 = h2(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d2 = v2.callback;
        if ("function" === typeof d2) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e2 = d2(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e2 ? v2.callback = e2 : v2 === h2(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h2(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h2(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c2, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h2(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c2 = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c2 = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c2;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c2) {
    var d2 = exports.unstable_now();
    "object" === typeof c2 && null !== c2 ? (c2 = c2.delay, c2 = "number" === typeof c2 && 0 < c2 ? d2 + c2 : d2) : c2 = d2;
    switch (a) {
      case 1:
        var e2 = -1;
        break;
      case 2:
        e2 = 250;
        break;
      case 5:
        e2 = 1073741823;
        break;
      case 4:
        e2 = 1e4;
        break;
      default:
        e2 = 5e3;
    }
    e2 = c2 + e2;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c2, expirationTime: e2, sortIndex: -1 };
    c2 > d2 ? (a.sortIndex = c2, f2(t2, a), null === h2(r2) && a === h2(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c2 - d2))) : (a.sortIndex = e2, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c2 = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c2;
      }
    };
  };
})(scheduler_production_min);
{
  scheduler.exports = scheduler_production_min;
}
var schedulerExports = scheduler.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa = reactExports, ca = schedulerExports;
function p$2(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c2 = 1; c2 < arguments.length; c2++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c2]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++)
    da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c2, d2) {
  if (null !== c2 && 0 === c2.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d2)
        return false;
      if (null !== c2)
        return !c2.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c2, d2) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c2, d2))
    return true;
  if (d2)
    return false;
  if (null !== c2)
    switch (c2.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v$2(a, b2, c2, d2, e2, f2, g2) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d2;
  this.attributeNamespace = e2;
  this.mustUseProperty = c2;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g2;
}
var z$1 = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z$1[a] = new v$2(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z$1[b2] = new v$2(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z$1[a] = new v$2(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z$1[a] = new v$2(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z$1[a] = new v$2(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z$1[a] = new v$2(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z$1[a] = new v$2(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z$1[a] = new v$2(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z$1[a] = new v$2(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z$1[b2] = new v$2(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z$1[b2] = new v$2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z$1[a] = new v$2(a, 1, false, a.toLowerCase(), null, false, false);
});
z$1.xlinkHref = new v$2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z$1[a] = new v$2(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c2, d2) {
  var e2 = z$1.hasOwnProperty(b2) ? z$1[b2] : null;
  if (null !== e2 ? 0 !== e2.type : d2 || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c2, e2, d2) && (c2 = null), d2 || null === e2 ? oa(b2) && (null === c2 ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c2)) : e2.mustUseProperty ? a[e2.propertyName] = null === c2 ? 3 === e2.type ? false : "" : c2 : (b2 = e2.attributeName, d2 = e2.attributeNamespace, null === c2 ? a.removeAttribute(b2) : (e2 = e2.type, c2 = 3 === e2 || 4 === e2 && true === c2 ? "" : "" + c2, d2 ? a.setAttributeNS(d2, b2, c2) : a.setAttribute(b2, c2)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A$1 = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c2) {
      var b2 = c2.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na)
    return "";
  Na = true;
  var c2 = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d2 = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d2 = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d2 = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d2 && "string" === typeof l2.stack) {
      for (var e2 = l2.stack.split("\n"), f2 = d2.stack.split("\n"), g2 = e2.length - 1, h2 = f2.length - 1; 1 <= g2 && 0 <= h2 && e2[g2] !== f2[h2]; )
        h2--;
      for (; 1 <= g2 && 0 <= h2; g2--, h2--)
        if (e2[g2] !== f2[h2]) {
          if (1 !== g2 || 1 !== h2) {
            do
              if (g2--, h2--, 0 > h2 || e2[g2] !== f2[h2]) {
                var k2 = "\n" + e2[g2].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g2 && 0 <= h2);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c2;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c2) {
        }
    }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c2 = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d2 = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c2 && "function" === typeof c2.get && "function" === typeof c2.set) {
    var e2 = c2.get, f2 = c2.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e2.call(this);
    }, set: function(a2) {
      d2 = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c2.enumerable });
    return { getValue: function() {
      return d2;
    }, setValue: function(a2) {
      d2 = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c2 = b2.getValue();
  var d2 = "";
  a && (d2 = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d2;
  return a !== c2 ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c2 = b2.checked;
  return A$1({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c2 ? c2 : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c2 = null == b2.defaultValue ? "" : b2.defaultValue, d2 = null != b2.checked ? b2.checked : b2.defaultChecked;
  c2 = Sa(null != b2.value ? b2.value : c2);
  a._wrapperState = { initialChecked: d2, initialValue: c2, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c2 = Sa(b2.value), d2 = b2.type;
  if (null != c2)
    if ("number" === d2) {
      if (0 === c2 && "" === a.value || a.value != c2)
        a.value = "" + c2;
    } else
      a.value !== "" + c2 && (a.value = "" + c2);
  else if ("submit" === d2 || "reset" === d2) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c2) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c2) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d2 = b2.type;
    if (!("submit" !== d2 && "reset" !== d2 || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c2 || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c2 = a.name;
  "" !== c2 && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c2 && (a.name = c2);
}
function cb(a, b2, c2) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c2 ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c2 && (a.defaultValue = "" + c2);
}
var eb = Array.isArray;
function fb(a, b2, c2, d2) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e2 = 0; e2 < c2.length; e2++)
      b2["$" + c2[e2]] = true;
    for (c2 = 0; c2 < a.length; c2++)
      e2 = b2.hasOwnProperty("$" + a[c2].value), a[c2].selected !== e2 && (a[c2].selected = e2), e2 && d2 && (a[c2].defaultSelected = true);
  } else {
    c2 = "" + Sa(c2);
    b2 = null;
    for (e2 = 0; e2 < a.length; e2++) {
      if (a[e2].value === c2) {
        a[e2].selected = true;
        d2 && (a[e2].defaultSelected = true);
        return;
      }
      null !== b2 || a[e2].disabled || (b2 = a[e2]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p$2(91));
  return A$1({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c2 = b2.value;
  if (null == c2) {
    c2 = b2.children;
    b2 = b2.defaultValue;
    if (null != c2) {
      if (null != b2)
        throw Error(p$2(92));
      if (eb(c2)) {
        if (1 < c2.length)
          throw Error(p$2(93));
        c2 = c2[0];
      }
      b2 = c2;
    }
    null == b2 && (b2 = "");
    c2 = b2;
  }
  a._wrapperState = { initialValue: Sa(c2) };
}
function ib(a, b2) {
  var c2 = Sa(b2.value), d2 = Sa(b2.defaultValue);
  null != c2 && (c2 = "" + c2, c2 !== a.value && (a.value = c2), null == b2.defaultValue && a.defaultValue !== c2 && (a.defaultValue = c2));
  null != d2 && (a.defaultValue = "" + d2);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c2, d2, e2) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c2, d2, e2);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c2 = a.firstChild;
    if (c2 && c2 === a.lastChild && 3 === c2.nodeType) {
      c2.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c2) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c2 || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c2 in b2)
    if (b2.hasOwnProperty(c2)) {
      var d2 = 0 === c2.indexOf("--"), e2 = rb(c2, b2[c2], d2);
      "float" === c2 && (c2 = "cssFloat");
      d2 ? a.setProperty(c2, e2) : a[c2] = e2;
    }
}
var tb = A$1({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p$2(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p$2(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p$2(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p$2(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p$2(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c2) {
  if (Ib)
    return a(b2, c2);
  Ib = true;
  try {
    return Gb(a, b2, c2);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c2 = a.stateNode;
  if (null === c2)
    return null;
  var d2 = Db(c2);
  if (null === d2)
    return null;
  c2 = d2[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d2 = !d2.disabled) || (a = a.type, d2 = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d2;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c2 && "function" !== typeof c2)
    throw Error(p$2(231, b2, typeof c2));
  return c2;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c2, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p$2(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c2 = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c2 = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c2 : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p$2(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2)
      throw Error(p$2(188));
    return b2 !== a ? null : a;
  }
  for (var c2 = a, d2 = b2; ; ) {
    var e2 = c2.return;
    if (null === e2)
      break;
    var f2 = e2.alternate;
    if (null === f2) {
      d2 = e2.return;
      if (null !== d2) {
        c2 = d2;
        continue;
      }
      break;
    }
    if (e2.child === f2.child) {
      for (f2 = e2.child; f2; ) {
        if (f2 === c2)
          return Xb(e2), a;
        if (f2 === d2)
          return Xb(e2), b2;
        f2 = f2.sibling;
      }
      throw Error(p$2(188));
    }
    if (c2.return !== d2.return)
      c2 = e2, d2 = f2;
    else {
      for (var g2 = false, h2 = e2.child; h2; ) {
        if (h2 === c2) {
          g2 = true;
          c2 = e2;
          d2 = f2;
          break;
        }
        if (h2 === d2) {
          g2 = true;
          d2 = e2;
          c2 = f2;
          break;
        }
        h2 = h2.sibling;
      }
      if (!g2) {
        for (h2 = f2.child; h2; ) {
          if (h2 === c2) {
            g2 = true;
            c2 = f2;
            d2 = e2;
            break;
          }
          if (h2 === d2) {
            g2 = true;
            d2 = f2;
            c2 = e2;
            break;
          }
          h2 = h2.sibling;
        }
        if (!g2)
          throw Error(p$2(189));
      }
    }
    if (c2.alternate !== d2)
      throw Error(p$2(190));
  }
  if (3 !== c2.tag)
    throw Error(p$2(188));
  return c2.stateNode.current === c2 ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2)
      return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c2 = a.pendingLanes;
  if (0 === c2)
    return 0;
  var d2 = 0, e2 = a.suspendedLanes, f2 = a.pingedLanes, g2 = c2 & 268435455;
  if (0 !== g2) {
    var h2 = g2 & ~e2;
    0 !== h2 ? d2 = tc(h2) : (f2 &= g2, 0 !== f2 && (d2 = tc(f2)));
  } else
    g2 = c2 & ~e2, 0 !== g2 ? d2 = tc(g2) : 0 !== f2 && (d2 = tc(f2));
  if (0 === d2)
    return 0;
  if (0 !== b2 && b2 !== d2 && 0 === (b2 & e2) && (e2 = d2 & -d2, f2 = b2 & -b2, e2 >= f2 || 16 === e2 && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d2 & 4) && (d2 |= c2 & 16);
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d2; 0 < b2; )
      c2 = 31 - oc(b2), e2 = 1 << c2, d2 |= a[c2], b2 &= ~e2;
  return d2;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c2 = a.suspendedLanes, d2 = a.pingedLanes, e2 = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g2 = 31 - oc(f2), h2 = 1 << g2, k2 = e2[g2];
    if (-1 === k2) {
      if (0 === (h2 & c2) || 0 !== (h2 & d2))
        e2[g2] = vc(h2, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h2);
    f2 &= ~h2;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c2 = 0; 31 > c2; c2++)
    b2.push(a);
  return b2;
}
function Ac(a, b2, c2) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c2;
}
function Bc(a, b2) {
  var c2 = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d2 = a.eventTimes;
  for (a = a.expirationTimes; 0 < c2; ) {
    var e2 = 31 - oc(c2), f2 = 1 << e2;
    b2[e2] = 0;
    d2[e2] = -1;
    a[e2] = -1;
    c2 &= ~f2;
  }
}
function Cc(a, b2) {
  var c2 = a.entangledLanes |= b2;
  for (a = a.entanglements; c2; ) {
    var d2 = 31 - oc(c2), e2 = 1 << d2;
    e2 & b2 | a[d2] & b2 && (a[d2] |= b2);
    c2 &= ~e2;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c2, d2, e2, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c2, eventSystemFlags: d2, nativeEvent: f2, targetContainers: [e2] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d2;
  b2 = a.targetContainers;
  null !== e2 && -1 === b2.indexOf(e2) && b2.push(e2);
  return a;
}
function Uc(a, b2, c2, d2, e2) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c2, d2, e2), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c2, d2, e2), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c2, d2, e2), true;
    case "pointerover":
      var f2 = e2.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c2, d2, e2));
      return true;
    case "gotpointercapture":
      return f2 = e2.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c2, d2, e2)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c2 = Vb(b2);
    if (null !== c2) {
      if (b2 = c2.tag, 13 === b2) {
        if (b2 = Wb(c2), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c2);
          });
          return;
        }
      } else if (3 === b2 && c2.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c2.tag ? c2.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c2 = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c2) {
      c2 = a.nativeEvent;
      var d2 = new c2.constructor(c2.type, c2);
      wb = d2;
      c2.target.dispatchEvent(d2);
      wb = null;
    } else
      return b2 = Cb(c2), null !== b2 && Fc(b2), a.blockedOn = c2, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c2) {
  Xc(a) && c2.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c2 = 1; c2 < Kc.length; c2++) {
      var d2 = Kc[c2];
      d2.blockedOn === a && (d2.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c2 = 0; c2 < Qc.length; c2++)
    d2 = Qc[c2], d2.blockedOn === a && (d2.blockedOn = null);
  for (; 0 < Qc.length && (c2 = Qc[0], null === c2.blockedOn); )
    Vc(c2), null === c2.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function gd(a, b2, c2, d2) {
  var e2 = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b2, c2, d2);
  } finally {
    C = e2, cd.transition = f2;
  }
}
function fd(a, b2, c2, d2) {
  if (dd) {
    var e2 = Yc(a, b2, c2, d2);
    if (null === e2)
      hd(a, b2, d2, id, c2), Sc(a, d2);
    else if (Uc(e2, a, b2, c2, d2))
      d2.stopPropagation();
    else if (Sc(a, d2), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e2; ) {
        var f2 = Cb(e2);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c2, d2);
        null === f2 && hd(a, b2, d2, id, c2);
        if (f2 === e2)
          break;
        e2 = f2;
      }
      null !== e2 && d2.stopPropagation();
    } else
      hd(a, b2, d2, null, c2);
  }
}
var id = null;
function Yc(a, b2, c2, d2) {
  id = null;
  a = xb(d2);
  a = Wc(a);
  if (null !== a)
    if (b2 = Vb(a), null === b2)
      a = null;
    else if (c2 = b2.tag, 13 === c2) {
      a = Wb(b2);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c2) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  id = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c2 = b2.length, d2, e2 = "value" in kd ? kd.value : kd.textContent, f2 = e2.length;
  for (a = 0; a < c2 && b2[a] === e2[a]; a++)
    ;
  var g2 = c2 - a;
  for (d2 = 1; d2 <= g2 && b2[c2 - d2] === e2[f2 - d2]; d2++)
    ;
  return md = e2.slice(a, 1 < d2 ? 1 - d2 : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d2, e2, f2, g2) {
    this._reactName = b3;
    this._targetInst = e2;
    this.type = d2;
    this.nativeEvent = f2;
    this.target = g2;
    this.currentTarget = null;
    for (var c2 in a)
      a.hasOwnProperty(c2) && (b3 = a[c2], this[c2] = b3 ? b3(f2) : f2[c2]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A$1(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A$1({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A$1({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A$1({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A$1({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A$1({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A$1({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A$1({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A$1({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A$1({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A$1({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A$1({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A$1({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c2, d2) {
  Eb(d2);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c2 = new td("onChange", "change", null, c2, d2), a.push({ event: c2, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if ("change" === a)
    return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    Jb(re, b2);
  }
}
function Ce(a, b2, c2) {
  "focusin" === a ? (Ae(), pe = b2, qe = c2, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b2) {
  if ("click" === a)
    return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a)
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b2) {
  if (He(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c2 = Object.keys(a), d2 = Object.keys(b2);
  if (c2.length !== d2.length)
    return false;
  for (d2 = 0; d2 < c2.length; d2++) {
    var e2 = c2[d2];
    if (!ja.call(b2, e2) || !He(a[e2], b2[e2]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b2) {
  var c2 = Je(a);
  a = 0;
  for (var d2; c2; ) {
    if (3 === c2.nodeType) {
      d2 = a + c2.textContent.length;
      if (a <= b2 && d2 >= b2)
        return { node: c2, offset: b2 - a };
      a = d2;
    }
    a: {
      for (; c2; ) {
        if (c2.nextSibling) {
          c2 = c2.nextSibling;
          break a;
        }
        c2 = c2.parentNode;
      }
      c2 = void 0;
    }
    c2 = Je(c2);
  }
}
function Le(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c2 = "string" === typeof b2.contentWindow.location.href;
    } catch (d2) {
      c2 = false;
    }
    if (c2)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe(a) {
  var b2 = Me(), c2 = a.focusedElem, d2 = a.selectionRange;
  if (b2 !== c2 && c2 && c2.ownerDocument && Le(c2.ownerDocument.documentElement, c2)) {
    if (null !== d2 && Ne(c2)) {
      if (b2 = d2.start, a = d2.end, void 0 === a && (a = b2), "selectionStart" in c2)
        c2.selectionStart = b2, c2.selectionEnd = Math.min(a, c2.value.length);
      else if (a = (b2 = c2.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e2 = c2.textContent.length, f2 = Math.min(d2.start, e2);
        d2 = void 0 === d2.end ? f2 : Math.min(d2.end, e2);
        !a.extend && f2 > d2 && (e2 = d2, d2 = f2, f2 = e2);
        e2 = Ke(c2, f2);
        var g2 = Ke(
          c2,
          d2
        );
        e2 && g2 && (1 !== a.rangeCount || a.anchorNode !== e2.node || a.anchorOffset !== e2.offset || a.focusNode !== g2.node || a.focusOffset !== g2.offset) && (b2 = b2.createRange(), b2.setStart(e2.node, e2.offset), a.removeAllRanges(), f2 > d2 ? (a.addRange(b2), a.extend(g2.node, g2.offset)) : (b2.setEnd(g2.node, g2.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c2; a = a.parentNode; )
      1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c2.focus && c2.focus();
    for (c2 = 0; c2 < b2.length; c2++)
      a = b2[c2], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c2) {
  var d2 = c2.window === c2 ? c2.document : 9 === c2.nodeType ? c2 : c2.ownerDocument;
  Te || null == Qe || Qe !== Xa(d2) || (d2 = Qe, "selectionStart" in d2 && Ne(d2) ? d2 = { start: d2.selectionStart, end: d2.selectionEnd } : (d2 = (d2.ownerDocument && d2.ownerDocument.defaultView || window).getSelection(), d2 = { anchorNode: d2.anchorNode, anchorOffset: d2.anchorOffset, focusNode: d2.focusNode, focusOffset: d2.focusOffset }), Se && Ie(Se, d2) || (Se = d2, d2 = oe(Re, "onSelect"), 0 < d2.length && (b2 = new td("onSelect", "select", null, b2, c2), a.push({ event: b2, listeners: d2 }), b2.target = Qe)));
}
function Ve(a, b2) {
  var c2 = {};
  c2[a.toLowerCase()] = b2.toLowerCase();
  c2["Webkit" + a] = "webkit" + b2;
  c2["Moz" + a] = "moz" + b2;
  return c2;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b2 = We[a], c2;
  for (c2 in b2)
    if (b2.hasOwnProperty(c2) && c2 in Ye)
      return Xe[a] = b2[c2];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a, b2, c2) {
  var d2 = a.type || "unknown-event";
  a.currentTarget = c2;
  Ub(d2, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c2 = 0; c2 < a.length; c2++) {
    var d2 = a[c2], e2 = d2.event;
    d2 = d2.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g2 = d2.length - 1; 0 <= g2; g2--) {
          var h2 = d2[g2], k2 = h2.instance, l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
      else
        for (g2 = 0; g2 < d2.length; g2++) {
          h2 = d2[g2];
          k2 = h2.instance;
          l2 = h2.currentTarget;
          h2 = h2.listener;
          if (k2 !== f2 && e2.isPropagationStopped())
            break a;
          nf(e2, h2, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b2) {
  var c2 = b2[of];
  void 0 === c2 && (c2 = b2[of] = /* @__PURE__ */ new Set());
  var d2 = a + "__bubble";
  c2.has(d2) || (pf(b2, a, 2, false), c2.add(d2));
}
function qf(a, b2, c2) {
  var d2 = 0;
  b2 && (d2 |= 4);
  pf(c2, a, d2, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c2, d2) {
  switch (jd(b2)) {
    case 1:
      var e2 = ed;
      break;
    case 4:
      e2 = gd;
      break;
    default:
      e2 = fd;
  }
  c2 = e2.bind(null, b2, c2, a);
  e2 = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e2 = true);
  d2 ? void 0 !== e2 ? a.addEventListener(b2, c2, { capture: true, passive: e2 }) : a.addEventListener(b2, c2, true) : void 0 !== e2 ? a.addEventListener(b2, c2, { passive: e2 }) : a.addEventListener(b2, c2, false);
}
function hd(a, b2, c2, d2, e2) {
  var f2 = d2;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d2)
    a:
      for (; ; ) {
        if (null === d2)
          return;
        var g2 = d2.tag;
        if (3 === g2 || 4 === g2) {
          var h2 = d2.stateNode.containerInfo;
          if (h2 === e2 || 8 === h2.nodeType && h2.parentNode === e2)
            break;
          if (4 === g2)
            for (g2 = d2.return; null !== g2; ) {
              var k2 = g2.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g2.stateNode.containerInfo, k2 === e2 || 8 === k2.nodeType && k2.parentNode === e2)
                  return;
              }
              g2 = g2.return;
            }
          for (; null !== h2; ) {
            g2 = Wc(h2);
            if (null === g2)
              return;
            k2 = g2.tag;
            if (5 === k2 || 6 === k2) {
              d2 = f2 = g2;
              continue a;
            }
            h2 = h2.parentNode;
          }
        }
        d2 = d2.return;
      }
  Jb(function() {
    var d3 = f2, e3 = xb(c2), g3 = [];
    a: {
      var h3 = df.get(a);
      if (void 0 !== h3) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c2))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c2.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h3 ? h3 + "Capture" : null : h3;
        t2 = [];
        for (var w2 = d3, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h3 = new k3(h3, n2, null, c2, e3), g3.push({ event: h3, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h3 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h3 && c2 !== wb && (n2 = c2.relatedTarget || c2.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h3) {
          h3 = e3.window === e3 ? e3 : (h3 = e3.ownerDocument) ? h3.defaultView || h3.parentWindow : window;
          if (k3) {
            if (n2 = c2.relatedTarget || c2.toElement, k3 = d3, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d3;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h3 : ue(k3);
            u2 = null == n2 ? h3 : ue(n2);
            h3 = new t2(F2, w2 + "leave", k3, c2, e3);
            h3.target = J2;
            h3.relatedTarget = u2;
            F2 = null;
            Wc(e3) === d3 && (t2 = new t2(x2, w2 + "enter", n2, c2, e3), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g3, h3, k3, t2, false);
            null !== n2 && null !== J2 && wf(g3, J2, n2, t2, true);
          }
        }
      }
      a: {
        h3 = d3 ? ue(d3) : window;
        k3 = h3.nodeName && h3.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h3.type)
          var na = ve;
        else if (me(h3))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h3.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h3.type || "radio" === h3.type) && (na = Ee);
        if (na && (na = na(a, d3))) {
          ne(g3, na, c2, e3);
          break a;
        }
        xa && xa(a, h3, d3);
        "focusout" === a && (xa = h3._wrapperState) && xa.controlled && "number" === h3.type && cb(h3, "number", h3.value);
      }
      xa = d3 ? ue(d3) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d3, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g3, c2, e3);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g3, c2, e3);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c2) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c2.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c2.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e3, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d3, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c2, e3), g3.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c2), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c2) : ke(a, c2))
        d3 = oe(d3, "onBeforeInput"), 0 < d3.length && (e3 = new Ld("onBeforeInput", "beforeinput", null, c2, e3), g3.push({ event: e3, listeners: d3 }), e3.data = $a);
    }
    se(g3, b2);
  });
}
function tf(a, b2, c2) {
  return { instance: a, listener: b2, currentTarget: c2 };
}
function oe(a, b2) {
  for (var c2 = b2 + "Capture", d2 = []; null !== a; ) {
    var e2 = a, f2 = e2.stateNode;
    5 === e2.tag && null !== f2 && (e2 = f2, f2 = Kb(a, c2), null != f2 && d2.unshift(tf(a, f2, e2)), f2 = Kb(a, b2), null != f2 && d2.push(tf(a, f2, e2)));
    a = a.return;
  }
  return d2;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c2, d2, e2) {
  for (var f2 = b2._reactName, g2 = []; null !== c2 && c2 !== d2; ) {
    var h2 = c2, k2 = h2.alternate, l2 = h2.stateNode;
    if (null !== k2 && k2 === d2)
      break;
    5 === h2.tag && null !== l2 && (h2 = l2, e2 ? (k2 = Kb(c2, f2), null != k2 && g2.unshift(tf(c2, k2, h2))) : e2 || (k2 = Kb(c2, f2), null != k2 && g2.push(tf(c2, k2, h2))));
    c2 = c2.return;
  }
  0 !== g2.length && a.push({ event: b2, listeners: g2 });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c2) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c2)
    throw Error(p$2(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c2 = b2, d2 = 0;
  do {
    var e2 = c2.nextSibling;
    a.removeChild(c2);
    if (e2 && 8 === e2.nodeType)
      if (c2 = e2.data, "/$" === c2) {
        if (0 === d2) {
          a.removeChild(e2);
          bd(b2);
          return;
        }
        d2--;
      } else
        "$" !== c2 && "$?" !== c2 && "$!" !== c2 || d2++;
    c2 = e2;
  } while (c2);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c2 = a.data;
      if ("$" === c2 || "$!" === c2 || "$?" === c2) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c2 && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2)
    return b2;
  for (var c2 = a.parentNode; c2; ) {
    if (b2 = c2[uf] || c2[Of]) {
      c2 = b2.alternate;
      if (null !== b2.child || null !== c2 && null !== c2.child)
        for (a = Mf(a); null !== a; ) {
          if (c2 = a[Of])
            return c2;
          a = Mf(a);
        }
      return b2;
    }
    a = c2;
    c2 = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p$2(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c2 = a.type.contextTypes;
  if (!c2)
    return Vf;
  var d2 = a.stateNode;
  if (d2 && d2.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d2.__reactInternalMemoizedMaskedChildContext;
  var e2 = {}, f2;
  for (f2 in c2)
    e2[f2] = b2[f2];
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e2);
  return e2;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b2, c2) {
  if (H.current !== Vf)
    throw Error(p$2(168));
  G(H, b2);
  G(Wf, c2);
}
function bg(a, b2, c2) {
  var d2 = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d2.getChildContext)
    return c2;
  d2 = d2.getChildContext();
  for (var e2 in d2)
    if (!(e2 in b2))
      throw Error(p$2(108, Ra(a) || "Unknown", e2));
  return A$1({}, c2, d2);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b2, c2) {
  var d2 = a.stateNode;
  if (!d2)
    throw Error(p$2(169));
  c2 ? (a = bg(a, b2, Xf), d2.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c2);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C;
    try {
      var c2 = eg;
      for (C = 1; a < c2.length; a++) {
        var d2 = c2[a];
        do
          d2 = d2(true);
        while (null !== d2);
      }
      eg = null;
      fg = false;
    } catch (e2) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e2;
    } finally {
      C = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c2) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d2 = rg;
  a = sg;
  var e2 = 32 - oc(d2) - 1;
  d2 &= ~(1 << e2);
  c2 += 1;
  var f2 = 32 - oc(b2) + e2;
  if (30 < f2) {
    var g2 = e2 - e2 % 5;
    f2 = (d2 & (1 << g2) - 1).toString(32);
    d2 >>= g2;
    e2 -= g2;
    rg = 1 << 32 - oc(b2) + e2 | c2 << e2 | d2;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c2 << e2 | d2, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b2) {
  var c2 = Bg(5, null, null, 0);
  c2.elementType = "DELETED";
  c2.stateNode = b2;
  c2.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c2], a.flags |= 16) : b2.push(c2);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c2 = a.type;
      b2 = 1 !== b2.nodeType || c2.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c2 = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c2, retryLane: 1073741824 }, c2 = Bg(18, null, null, 0), c2.stateNode = b2, c2.return = a, a.child = c2, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b2 = yg;
    if (b2) {
      var c2 = b2;
      if (!Cg(a, b2)) {
        if (Dg(a))
          throw Error(p$2(418));
        b2 = Lf(c2.nextSibling);
        var d2 = xg;
        b2 && Cg(a, b2) ? Ag(d2, c2) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p$2(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a))
      throw Hg(), Error(p$2(418));
    for (; b2; )
      Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p$2(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c2 = a.data;
          if ("/$" === c2) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c2 && "$!" !== c2 && "$?" !== c2 || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A$1({}, b2);
    a = a.defaultProps;
    for (var c2 in a)
      void 0 === b2[c2] && (b2[c2] = a[c2]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b2 = Mg.current;
  E(Mg);
  a._currentValue = b2;
}
function Sg(a, b2, c2) {
  for (; null !== a; ) {
    var d2 = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d2 && (d2.childLanes |= b2)) : null !== d2 && (d2.childLanes & b2) !== b2 && (d2.childLanes |= b2);
    if (a === c2)
      break;
    a = a.return;
  }
}
function Tg(a, b2) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b2 = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p$2(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b2;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b2, c2, d2) {
  var e2 = b2.interleaved;
  null === e2 ? (c2.next = c2, Xg(b2)) : (c2.next = e2.next, e2.next = c2);
  b2.interleaved = c2;
  return Zg(a, d2);
}
function Zg(a, b2) {
  a.lanes |= b2;
  var c2 = a.alternate;
  null !== c2 && (c2.lanes |= b2);
  c2 = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c2 = a.alternate, null !== c2 && (c2.childLanes |= b2), c2 = a, a = a.return;
  return 3 === c2.tag ? c2.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b2, c2) {
  var d2 = a.updateQueue;
  if (null === d2)
    return null;
  d2 = d2.shared;
  if (0 !== (K & 2)) {
    var e2 = d2.pending;
    null === e2 ? b2.next = b2 : (b2.next = e2.next, e2.next = b2);
    d2.pending = b2;
    return Zg(a, c2);
  }
  e2 = d2.interleaved;
  null === e2 ? (b2.next = b2, Xg(d2)) : (b2.next = e2.next, e2.next = b2);
  d2.interleaved = b2;
  return Zg(a, c2);
}
function eh(a, b2, c2) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c2 & 4194240))) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
function fh(a, b2) {
  var c2 = a.updateQueue, d2 = a.alternate;
  if (null !== d2 && (d2 = d2.updateQueue, c2 === d2)) {
    var e2 = null, f2 = null;
    c2 = c2.firstBaseUpdate;
    if (null !== c2) {
      do {
        var g2 = { eventTime: c2.eventTime, lane: c2.lane, tag: c2.tag, payload: c2.payload, callback: c2.callback, next: null };
        null === f2 ? e2 = f2 = g2 : f2 = f2.next = g2;
        c2 = c2.next;
      } while (null !== c2);
      null === f2 ? e2 = f2 = b2 : f2 = f2.next = b2;
    } else
      e2 = f2 = b2;
    c2 = { baseState: d2.baseState, firstBaseUpdate: e2, lastBaseUpdate: f2, shared: d2.shared, effects: d2.effects };
    a.updateQueue = c2;
    return;
  }
  a = c2.lastBaseUpdate;
  null === a ? c2.firstBaseUpdate = b2 : a.next = b2;
  c2.lastBaseUpdate = b2;
}
function gh(a, b2, c2, d2) {
  var e2 = a.updateQueue;
  $g = false;
  var f2 = e2.firstBaseUpdate, g2 = e2.lastBaseUpdate, h2 = e2.shared.pending;
  if (null !== h2) {
    e2.shared.pending = null;
    var k2 = h2, l2 = k2.next;
    k2.next = null;
    null === g2 ? f2 = l2 : g2.next = l2;
    g2 = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h2 = m2.lastBaseUpdate, h2 !== g2 && (null === h2 ? m2.firstBaseUpdate = l2 : h2.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e2.baseState;
    g2 = 0;
    m2 = l2 = k2 = null;
    h2 = f2;
    do {
      var r2 = h2.lane, y2 = h2.eventTime;
      if ((d2 & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h2.tag,
          payload: h2.payload,
          callback: h2.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h2;
          r2 = b2;
          y2 = c2;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A$1({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h2.callback && 0 !== h2.lane && (a.flags |= 64, r2 = e2.effects, null === r2 ? e2.effects = [h2] : r2.push(h2));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h2.tag, payload: h2.payload, callback: h2.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g2 |= r2;
      h2 = h2.next;
      if (null === h2)
        if (h2 = e2.shared.pending, null === h2)
          break;
        else
          r2 = h2, h2 = r2.next, r2.next = null, e2.lastBaseUpdate = r2, e2.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e2.baseState = k2;
    e2.firstBaseUpdate = l2;
    e2.lastBaseUpdate = m2;
    b2 = e2.shared.interleaved;
    if (null !== b2) {
      e2 = b2;
      do
        g2 |= e2.lane, e2 = e2.next;
      while (e2 !== b2);
    } else
      null === f2 && (e2.shared.lanes = 0);
    hh |= g2;
    a.lanes = g2;
    a.memoizedState = q2;
  }
}
function ih(a, b2, c2) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d2 = a[b2], e2 = d2.callback;
      if (null !== e2) {
        d2.callback = null;
        d2 = c2;
        if ("function" !== typeof e2)
          throw Error(p$2(191, e2));
        e2.call(d2);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b2, c2, d2) {
  b2 = a.memoizedState;
  c2 = c2(d2, b2);
  c2 = null === c2 || void 0 === c2 ? b2 : A$1({}, b2, c2);
  a.memoizedState = c2;
  0 === a.lanes && (a.updateQueue.baseState = c2);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueReplaceState: function(a, b2, c2) {
  a = a._reactInternals;
  var d2 = L(), e2 = lh(a), f2 = ch(d2, e2);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c2 && null !== c2 && (f2.callback = c2);
  b2 = dh(a, f2, e2);
  null !== b2 && (mh(b2, a, e2, d2), eh(b2, a, e2));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c2 = L(), d2 = lh(a), e2 = ch(c2, d2);
  e2.tag = 2;
  void 0 !== b2 && null !== b2 && (e2.callback = b2);
  b2 = dh(a, e2, d2);
  null !== b2 && (mh(b2, a, d2, c2), eh(b2, a, d2));
} };
function oh(a, b2, c2, d2, e2, f2, g2) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d2, f2, g2) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c2, d2) || !Ie(e2, f2) : true;
}
function ph(a, b2, c2) {
  var d2 = false, e2 = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e2 = Zf(b2) ? Xf : H.current, d2 = b2.contextTypes, f2 = (d2 = null !== d2 && void 0 !== d2) ? Yf(a, e2) : Vf);
  b2 = new b2(c2, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a.stateNode = b2;
  b2._reactInternals = a;
  d2 && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e2, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a, b2, c2, d2) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c2, d2);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c2, d2);
  b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a, b2, c2, d2) {
  var e2 = a.stateNode;
  e2.props = c2;
  e2.state = a.memoizedState;
  e2.refs = jh;
  ah(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e2.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e2.context = Yf(a, f2));
  e2.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b2, f2, c2), e2.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e2.getSnapshotBeforeUpdate || "function" !== typeof e2.UNSAFE_componentWillMount && "function" !== typeof e2.componentWillMount || (b2 = e2.state, "function" === typeof e2.componentWillMount && e2.componentWillMount(), "function" === typeof e2.UNSAFE_componentWillMount && e2.UNSAFE_componentWillMount(), b2 !== e2.state && nh.enqueueReplaceState(e2, e2.state, null), gh(a, c2, e2, d2), e2.state = a.memoizedState);
  "function" === typeof e2.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b2, c2) {
  a = c2.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c2._owner) {
      c2 = c2._owner;
      if (c2) {
        if (1 !== c2.tag)
          throw Error(p$2(309));
        var d2 = c2.stateNode;
      }
      if (!d2)
        throw Error(p$2(147, a));
      var e2 = d2, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e2.refs;
        b3 === jh && (b3 = e2.refs = {});
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(p$2(284));
    if (!c2._owner)
      throw Error(p$2(290, a));
  }
  return a;
}
function th(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p$2(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function uh(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function vh(a) {
  function b2(b3, c3) {
    if (a) {
      var d3 = b3.deletions;
      null === d3 ? (b3.deletions = [c3], b3.flags |= 16) : d3.push(c3);
    }
  }
  function c2(c3, d3) {
    if (!a)
      return null;
    for (; null !== d3; )
      b2(c3, d3), d3 = d3.sibling;
    return null;
  }
  function d2(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e2(a2, b3) {
    a2 = wh(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c3, d3) {
    b3.index = d3;
    if (!a)
      return b3.flags |= 1048576, c3;
    d3 = b3.alternate;
    if (null !== d3)
      return d3 = d3.index, d3 < c3 ? (b3.flags |= 2, c3) : d3;
    b3.flags |= 2;
    return c3;
  }
  function g2(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h2(a2, b3, c3, d3) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c3, d3) {
    var f3 = c3.type;
    if (f3 === ya)
      return m2(a2, b3, c3.props.children, d3, c3.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d3 = e2(b3, c3.props), d3.ref = sh(a2, b3, c3), d3.return = a2, d3;
    d3 = yh(c3.type, c3.key, c3.props, null, a2.mode, d3);
    d3.ref = sh(a2, b3, c3);
    d3.return = a2;
    return d3;
  }
  function l2(a2, b3, c3, d3) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c3.containerInfo || b3.stateNode.implementation !== c3.implementation)
      return b3 = zh(c3, a2.mode, d3), b3.return = a2, b3;
    b3 = e2(b3, c3.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c3, d3, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c3, a2.mode, d3, f3), b3.return = a2, b3;
    b3 = e2(b3, c3);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c3) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a2.mode, c3), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c3 = yh(b3.type, b3.key, b3.props, null, a2.mode, c3), c3.ref = sh(a2, null, b3), c3.return = a2, c3;
        case wa:
          return b3 = zh(b3, a2.mode, c3), b3.return = a2, b3;
        case Ha:
          var d3 = b3._init;
          return q2(a2, d3(b3._payload), c3);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a2.mode, c3, null), b3.return = a2, b3;
      th(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c3, d3) {
    var e3 = null !== b3 ? b3.key : null;
    if ("string" === typeof c3 && "" !== c3 || "number" === typeof c3)
      return null !== e3 ? null : h2(a2, b3, "" + c3, d3);
    if ("object" === typeof c3 && null !== c3) {
      switch (c3.$$typeof) {
        case va:
          return c3.key === e3 ? k2(a2, b3, c3, d3) : null;
        case wa:
          return c3.key === e3 ? l2(a2, b3, c3, d3) : null;
        case Ha:
          return e3 = c3._init, r2(
            a2,
            b3,
            e3(c3._payload),
            d3
          );
      }
      if (eb(c3) || Ka(c3))
        return null !== e3 ? null : m2(a2, b3, c3, d3, null);
      th(a2, c3);
    }
    return null;
  }
  function y2(a2, b3, c3, d3, e3) {
    if ("string" === typeof d3 && "" !== d3 || "number" === typeof d3)
      return a2 = a2.get(c3) || null, h2(b3, a2, "" + d3, e3);
    if ("object" === typeof d3 && null !== d3) {
      switch (d3.$$typeof) {
        case va:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, k2(b3, a2, d3, e3);
        case wa:
          return a2 = a2.get(null === d3.key ? c3 : d3.key) || null, l2(b3, a2, d3, e3);
        case Ha:
          var f3 = d3._init;
          return y2(a2, b3, c3, f3(d3._payload), e3);
      }
      if (eb(d3) || Ka(d3))
        return a2 = a2.get(c3) || null, m2(b3, a2, d3, e3, null);
      th(b3, d3);
    }
    return null;
  }
  function n2(e3, g3, h3, k3) {
    for (var l3 = null, m3 = null, u2 = g3, w2 = g3 = 0, x2 = null; null !== u2 && w2 < h3.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e3, u2, h3[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e3, u2);
      g3 = f2(n3, g3, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h3.length)
      return c2(e3, u2), I && tg(e3, w2), l3;
    if (null === u2) {
      for (; w2 < h3.length; w2++)
        u2 = q2(e3, h3[w2], k3), null !== u2 && (g3 = f2(u2, g3, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e3, w2);
      return l3;
    }
    for (u2 = d2(e3, u2); w2 < h3.length; w2++)
      x2 = y2(u2, e3, w2, h3[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g3 = f2(x2, g3, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function t2(e3, g3, h3, k3) {
    var l3 = Ka(h3);
    if ("function" !== typeof l3)
      throw Error(p$2(150));
    h3 = l3.call(h3);
    if (null == h3)
      throw Error(p$2(151));
    for (var u2 = l3 = null, m3 = g3, w2 = g3 = 0, x2 = null, n3 = h3.next(); null !== m3 && !n3.done; w2++, n3 = h3.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e3, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e3, m3);
      g3 = f2(t3, g3, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c2(
        e3,
        m3
      ), I && tg(e3, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h3.next())
        n3 = q2(e3, n3.value, k3), null !== n3 && (g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e3, w2);
      return l3;
    }
    for (m3 = d2(e3, m3); !n3.done; w2++, n3 = h3.next())
      n3 = y2(m3, e3, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g3 = f2(n3, g3, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e3, a2);
    });
    I && tg(e3, w2);
    return l3;
  }
  function J2(a2, d3, f3, h3) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d3; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c2(a2, l3.sibling);
                    d3 = e2(l3, f3.props.children);
                    d3.return = a2;
                    a2 = d3;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c2(a2, l3.sibling);
                  d3 = e2(l3, f3.props);
                  d3.ref = sh(a2, l3, f3);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                }
                c2(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d3 = Ah(f3.props.children, a2.mode, h3, f3.key), d3.return = a2, a2 = d3) : (h3 = yh(f3.type, f3.key, f3.props, null, a2.mode, h3), h3.ref = sh(a2, d3, f3), h3.return = a2, a2 = h3);
          }
          return g2(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d3; ) {
              if (d3.key === l3)
                if (4 === d3.tag && d3.stateNode.containerInfo === f3.containerInfo && d3.stateNode.implementation === f3.implementation) {
                  c2(a2, d3.sibling);
                  d3 = e2(d3, f3.children || []);
                  d3.return = a2;
                  a2 = d3;
                  break a;
                } else {
                  c2(a2, d3);
                  break;
                }
              else
                b2(a2, d3);
              d3 = d3.sibling;
            }
            d3 = zh(f3, a2.mode, h3);
            d3.return = a2;
            a2 = d3;
          }
          return g2(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d3, l3(f3._payload), h3);
      }
      if (eb(f3))
        return n2(a2, d3, f3, h3);
      if (Ka(f3))
        return t2(a2, d3, f3, h3);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d3 && 6 === d3.tag ? (c2(a2, d3.sibling), d3 = e2(d3, f3), d3.return = a2, a2 = d3) : (c2(a2, d3), d3 = xh(f3, a2.mode, h3), d3.return = a2, a2 = d3), g2(a2)) : c2(a2, d3);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p$2(174));
  return a;
}
function Ih(a, b2) {
  G(Gh, b2);
  G(Fh, a);
  G(Eh, Dh);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E(Eh);
  G(Eh, b2);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c2 = lb(b2, a.type);
  b2 !== c2 && (G(Fh, a), G(Eh, c2));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c2 = b2.memoizedState;
      if (null !== c2 && (c2 = c2.dehydrated, null === c2 || "$?" === c2.data || "$!" === c2.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p$2(321));
}
function Wh(a, b2) {
  if (null === b2)
    return false;
  for (var c2 = 0; c2 < b2.length && c2 < a.length; c2++)
    if (!He(a[c2], b2[c2]))
      return false;
  return true;
}
function Xh(a, b2, c2, d2, e2, f2) {
  Rh = f2;
  N = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c2(d2, e2);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p$2(301));
      f2 += 1;
      P = O = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a = c2(d2, e2);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b2)
    throw Error(p$2(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b2 = null === P ? N.memoizedState : P.next;
  if (null !== b2)
    P = b2, O = a;
  else {
    if (null === a)
      throw Error(p$2(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function fi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = O, e2 = d2.baseQueue, f2 = c2.pending;
  if (null !== f2) {
    if (null !== e2) {
      var g2 = e2.next;
      e2.next = f2.next;
      f2.next = g2;
    }
    d2.baseQueue = e2 = f2;
    c2.pending = null;
  }
  if (null !== e2) {
    f2 = e2.next;
    d2 = d2.baseState;
    var h2 = g2 = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d2 = l2.hasEagerState ? l2.eagerState : a(d2, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h2 = k2 = q2, g2 = d2) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g2 = d2 : k2.next = h2;
    He(d2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d2;
    b2.baseState = g2;
    b2.baseQueue = k2;
    c2.lastRenderedState = d2;
  }
  a = c2.interleaved;
  if (null !== a) {
    e2 = a;
    do
      f2 = e2.lane, N.lanes |= f2, hh |= f2, e2 = e2.next;
    while (e2 !== a);
  } else
    null === e2 && (c2.lanes = 0);
  return [b2.memoizedState, c2.dispatch];
}
function gi(a) {
  var b2 = di(), c2 = b2.queue;
  if (null === c2)
    throw Error(p$2(311));
  c2.lastRenderedReducer = a;
  var d2 = c2.dispatch, e2 = c2.pending, f2 = b2.memoizedState;
  if (null !== e2) {
    c2.pending = null;
    var g2 = e2 = e2.next;
    do
      f2 = a(f2, g2.action), g2 = g2.next;
    while (g2 !== e2);
    He(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c2.lastRenderedState = f2;
  }
  return [f2, d2];
}
function hi() {
}
function ii(a, b2) {
  var c2 = N, d2 = di(), e2 = b2(), f2 = !He(d2.memoizedState, e2);
  f2 && (d2.memoizedState = e2, Ug = true);
  d2 = d2.queue;
  ji(ki.bind(null, c2, d2, a), [a]);
  if (d2.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
    c2.flags |= 2048;
    li(9, mi.bind(null, c2, d2, e2, b2), void 0, null);
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(c2, b2, e2);
  }
  return e2;
}
function ni(a, b2, c2) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c2 };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c2 = b2.stores, null === c2 ? b2.stores = [a] : c2.push(a));
}
function mi(a, b2, c2, d2) {
  b2.value = c2;
  b2.getSnapshot = d2;
  oi(b2) && pi(a);
}
function ki(a, b2, c2) {
  return c2(function() {
    oi(b2) && pi(a);
  });
}
function oi(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c2 = b2();
    return !He(a, c2);
  } catch (d2) {
    return true;
  }
}
function pi(a) {
  var b2 = Zg(a, 1);
  null !== b2 && mh(b2, a, 1, -1);
}
function qi(a) {
  var b2 = ci();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b2.memoizedState, a];
}
function li(a, b2, c2, d2) {
  a = { tag: a, create: b2, destroy: c2, deps: d2, next: null };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c2 = b2.lastEffect, null === c2 ? b2.lastEffect = a.next = a : (d2 = c2.next, c2.next = a, a.next = d2, b2.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b2, c2, d2) {
  var e2 = ci();
  N.flags |= a;
  e2.memoizedState = li(1 | b2, c2, void 0, void 0 === d2 ? null : d2);
}
function ui(a, b2, c2, d2) {
  var e2 = di();
  d2 = void 0 === d2 ? null : d2;
  var f2 = void 0;
  if (null !== O) {
    var g2 = O.memoizedState;
    f2 = g2.destroy;
    if (null !== d2 && Wh(d2, g2.deps)) {
      e2.memoizedState = li(b2, c2, f2, d2);
      return;
    }
  }
  N.flags |= a;
  e2.memoizedState = li(1 | b2, c2, f2, d2);
}
function vi(a, b2) {
  return ti(8390656, 8, a, b2);
}
function ji(a, b2) {
  return ui(2048, 8, a, b2);
}
function wi(a, b2) {
  return ui(4, 2, a, b2);
}
function xi(a, b2) {
  return ui(4, 4, a, b2);
}
function yi(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function zi(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b2, a), c2);
}
function Ai() {
}
function Bi(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  c2.memoizedState = [a, b2];
  return a;
}
function Ci(a, b2) {
  var c2 = di();
  b2 = void 0 === b2 ? null : b2;
  var d2 = c2.memoizedState;
  if (null !== d2 && null !== b2 && Wh(b2, d2[1]))
    return d2[0];
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}
function Di(a, b2, c2) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c2;
  He(c2, b2) || (c2 = yc(), N.lanes |= c2, hh |= c2, a.baseState = true);
  return b2;
}
function Ei(a, b2) {
  var c2 = C;
  C = 0 !== c2 && 4 > c2 ? c2 : 4;
  a(true);
  var d2 = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b2();
  } finally {
    C = c2, Qh.transition = d2;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b2, c2) {
  var d2 = lh(a);
  c2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, c2);
  else if (c2 = Yg(a, b2, c2, d2), null !== c2) {
    var e2 = L();
    mh(c2, a, d2, e2);
    Ji(c2, b2, d2);
  }
}
function ri(a, b2, c2) {
  var d2 = lh(a), e2 = { lane: d2, action: c2, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, e2);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g2 = b2.lastRenderedState, h2 = f2(g2, c2);
        e2.hasEagerState = true;
        e2.eagerState = h2;
        if (He(h2, g2)) {
          var k2 = b2.interleaved;
          null === k2 ? (e2.next = e2, Xg(b2)) : (e2.next = k2.next, k2.next = e2);
          b2.interleaved = e2;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c2 = Yg(a, b2, e2, d2);
    null !== c2 && (e2 = L(), mh(c2, a, d2, e2), Ji(c2, b2, d2));
  }
}
function Hi(a) {
  var b2 = a.alternate;
  return a === N || null !== b2 && b2 === N;
}
function Ii(a, b2) {
  Th = Sh = true;
  var c2 = a.pending;
  null === c2 ? b2.next = b2 : (b2.next = c2.next, c2.next = b2);
  a.pending = b2;
}
function Ji(a, b2, c2) {
  if (0 !== (c2 & 4194240)) {
    var d2 = b2.lanes;
    d2 &= a.pendingLanes;
    c2 |= d2;
    b2.lanes = c2;
    Cc(a, c2);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
  ci().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c2) {
  c2 = null !== c2 && void 0 !== c2 ? c2.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a),
    c2
  );
}, useLayoutEffect: function(a, b2) {
  return ti(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ti(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c2 = ci();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c2.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c2) {
  var d2 = ci();
  b2 = void 0 !== c2 ? c2(b2) : b2;
  d2.memoizedState = d2.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d2.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d2.memoizedState, a];
}, useRef: function(a) {
  var b2 = ci();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b2 = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c2) {
  var d2 = N, e2 = ci();
  if (I) {
    if (void 0 === c2)
      throw Error(p$2(407));
    c2 = c2();
  } else {
    c2 = b2();
    if (null === R)
      throw Error(p$2(349));
    0 !== (Rh & 30) || ni(d2, b2, c2);
  }
  e2.memoizedState = c2;
  var f2 = { value: c2, getSnapshot: b2 };
  e2.queue = f2;
  vi(ki.bind(
    null,
    d2,
    f2,
    a
  ), [a]);
  d2.flags |= 2048;
  li(9, mi.bind(null, d2, f2, c2, b2), void 0, null);
  return c2;
}, useId: function() {
  var a = ci(), b2 = R.identifierPrefix;
  if (I) {
    var c2 = sg;
    var d2 = rg;
    c2 = (d2 & ~(1 << 32 - oc(d2) - 1)).toString(32) + c2;
    b2 = ":" + b2 + "R" + c2;
    c2 = Uh++;
    0 < c2 && (b2 += "H" + c2.toString(32));
    b2 += ":";
  } else
    c2 = Vh++, b2 = ":" + b2 + "r" + c2.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b2 = di();
    return Di(b2, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b2 = di().memoizedState;
    return [a, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b2 = di();
  return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b2 = di().memoizedState;
  return [a, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b2) {
  try {
    var c2 = "", d2 = b2;
    do
      c2 += Pa(d2), d2 = d2.return;
    while (d2);
    var e2 = c2;
  } catch (f2) {
    e2 = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e2, digest: null };
}
function Li(a, b2, c2) {
  return { value: a, source: null, stack: null != c2 ? c2 : null, digest: null != b2 ? b2 : null };
}
function Mi(a, b2) {
  try {
    console.error(b2.value);
  } catch (c2) {
    setTimeout(function() {
      throw c2;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  c2.payload = { element: null };
  var d2 = b2.value;
  c2.callback = function() {
    Pi || (Pi = true, Qi = d2);
    Mi(a, b2);
  };
  return c2;
}
function Ri(a, b2, c2) {
  c2 = ch(-1, c2);
  c2.tag = 3;
  var d2 = a.type.getDerivedStateFromError;
  if ("function" === typeof d2) {
    var e2 = b2.value;
    c2.payload = function() {
      return d2(e2);
    };
    c2.callback = function() {
      Mi(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c2.callback = function() {
    Mi(a, b2);
    "function" !== typeof d2 && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c3 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c3 ? c3 : "" });
  });
  return c2;
}
function Ti(a, b2, c2) {
  var d2 = a.pingCache;
  if (null === d2) {
    d2 = a.pingCache = new Ni();
    var e2 = /* @__PURE__ */ new Set();
    d2.set(b2, e2);
  } else
    e2 = d2.get(b2), void 0 === e2 && (e2 = /* @__PURE__ */ new Set(), d2.set(b2, e2));
  e2.has(c2) || (e2.add(c2), a = Ui.bind(null, a, b2, c2), b2.then(a, a));
}
function Vi(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag)
      b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b2, c2, d2, e2) {
  if (0 === (a.mode & 1))
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c2.flags |= 131072, c2.flags &= -52805, 1 === c2.tag && (null === c2.alternate ? c2.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c2, b2, 1))), c2.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e2;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b2, c2, d2) {
  b2.child = null === a ? Ch(b2, null, c2, d2) : Bh(b2, a.child, c2, d2);
}
function Zi(a, b2, c2, d2, e2) {
  c2 = c2.render;
  var f2 = b2.ref;
  Tg(b2, e2);
  d2 = Xh(a, b2, c2, d2, f2, e2);
  c2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I && c2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, d2, e2);
  return b2.child;
}
function aj(a, b2, c2, d2, e2) {
  if (null === a) {
    var f2 = c2.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c2.compare && void 0 === c2.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d2, e2);
    a = yh(c2.type, null, d2, b2, b2.mode, e2);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e2)) {
    var g2 = f2.memoizedProps;
    c2 = c2.compare;
    c2 = null !== c2 ? c2 : Ie;
    if (c2(g2, d2) && a.ref === b2.ref)
      return $i(a, b2, e2);
  }
  b2.flags |= 1;
  a = wh(f2, d2);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function cj(a, b2, c2, d2, e2) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d2) && a.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d2 = f2, 0 !== (a.lanes & e2))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a.lanes, $i(a, b2, e2);
  }
  return dj(a, b2, c2, d2, e2);
}
function ej(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d2.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c2;
    else {
      if (0 === (c2 & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c2 : c2, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d2 = null !== f2 ? f2.baseLanes : c2;
      G(fj, gj);
      gj |= d2;
    }
  else
    null !== f2 ? (d2 = f2.baseLanes | c2, b2.memoizedState = null) : d2 = c2, G(fj, gj), gj |= d2;
  Yi(a, b2, e2, c2);
  return b2.child;
}
function hj(a, b2) {
  var c2 = b2.ref;
  if (null === a && null !== c2 || null !== a && a.ref !== c2)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a, b2, c2, d2, e2) {
  var f2 = Zf(c2) ? Xf : H.current;
  f2 = Yf(b2, f2);
  Tg(b2, e2);
  c2 = Xh(a, b2, c2, d2, f2, e2);
  d2 = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e2, $i(a, b2, e2);
  I && d2 && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, c2, e2);
  return b2.child;
}
function ij(a, b2, c2, d2, e2) {
  if (Zf(c2)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e2);
  if (null === b2.stateNode)
    jj(a, b2), ph(b2, c2, d2), rh(b2, c2, d2, e2), d2 = true;
  else if (null === a) {
    var g2 = b2.stateNode, h2 = b2.memoizedProps;
    g2.props = h2;
    var k2 = g2.context, l2 = c2.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c2) ? Xf : H.current, l2 = Yf(b2, l2));
    var m2 = c2.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g2.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== d2 || k2 !== l2) && qh(b2, g2, d2, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    k2 = b2.memoizedState;
    h2 !== d2 || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c2, m2, d2), k2 = b2.memoizedState), (h2 = $g || oh(b2, c2, h2, d2, r2, k2, l2)) ? (q2 || "function" !== typeof g2.UNSAFE_componentWillMount && "function" !== typeof g2.componentWillMount || ("function" === typeof g2.componentWillMount && g2.componentWillMount(), "function" === typeof g2.UNSAFE_componentWillMount && g2.UNSAFE_componentWillMount()), "function" === typeof g2.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d2, b2.memoizedState = k2), g2.props = d2, g2.state = k2, g2.context = l2, d2 = h2) : ("function" === typeof g2.componentDidMount && (b2.flags |= 4194308), d2 = false);
  } else {
    g2 = b2.stateNode;
    bh(a, b2);
    h2 = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h2 : Lg(b2.type, h2);
    g2.props = l2;
    q2 = b2.pendingProps;
    r2 = g2.context;
    k2 = c2.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c2) ? Xf : H.current, k2 = Yf(b2, k2));
    var y2 = c2.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g2.getSnapshotBeforeUpdate) || "function" !== typeof g2.UNSAFE_componentWillReceiveProps && "function" !== typeof g2.componentWillReceiveProps || (h2 !== q2 || r2 !== k2) && qh(b2, g2, d2, k2);
    $g = false;
    r2 = b2.memoizedState;
    g2.state = r2;
    gh(b2, d2, g2, e2);
    var n2 = b2.memoizedState;
    h2 !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c2, y2, d2), n2 = b2.memoizedState), (l2 = $g || oh(b2, c2, l2, d2, r2, n2, k2) || false) ? (m2 || "function" !== typeof g2.UNSAFE_componentWillUpdate && "function" !== typeof g2.componentWillUpdate || ("function" === typeof g2.componentWillUpdate && g2.componentWillUpdate(d2, n2, k2), "function" === typeof g2.UNSAFE_componentWillUpdate && g2.UNSAFE_componentWillUpdate(d2, n2, k2)), "function" === typeof g2.componentDidUpdate && (b2.flags |= 4), "function" === typeof g2.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d2, b2.memoizedState = n2), g2.props = d2, g2.state = n2, g2.context = k2, d2 = l2) : ("function" !== typeof g2.componentDidUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g2.getSnapshotBeforeUpdate || h2 === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d2 = false);
  }
  return kj(a, b2, c2, d2, f2, e2);
}
function kj(a, b2, c2, d2, e2, f2) {
  hj(a, b2);
  var g2 = 0 !== (b2.flags & 128);
  if (!d2 && !g2)
    return e2 && dg(b2, c2, false), $i(a, b2, f2);
  d2 = b2.stateNode;
  Xi.current = b2;
  var h2 = g2 && "function" !== typeof c2.getDerivedStateFromError ? null : d2.render();
  b2.flags |= 1;
  null !== a && g2 ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h2, f2)) : Yi(a, b2, h2, f2);
  b2.memoizedState = d2.state;
  e2 && dg(b2, c2, true);
  return b2.child;
}
function lj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  Ih(a, b2.containerInfo);
}
function mj(a, b2, c2, d2, e2) {
  Ig();
  Jg(e2);
  b2.flags |= 256;
  Yi(a, b2, c2, d2);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = M.current, f2 = false, g2 = 0 !== (b2.flags & 128), h2;
  (h2 = g2) || (h2 = null !== a && null === a.memoizedState ? false : 0 !== (e2 & 2));
  if (h2)
    f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e2 |= 1;
  G(M, e2 & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g2 = d2.children;
    a = d2.fallback;
    return f2 ? (d2 = b2.mode, f2 = b2.child, g2 = { mode: "hidden", children: g2 }, 0 === (d2 & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g2) : f2 = qj(g2, d2, 0, null), a = Ah(a, d2, c2, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c2), b2.memoizedState = nj, a) : rj(b2, g2);
  }
  e2 = a.memoizedState;
  if (null !== e2 && (h2 = e2.dehydrated, null !== h2))
    return sj(a, b2, g2, d2, h2, e2, c2);
  if (f2) {
    f2 = d2.fallback;
    g2 = b2.mode;
    e2 = a.child;
    h2 = e2.sibling;
    var k2 = { mode: "hidden", children: d2.children };
    0 === (g2 & 1) && b2.child !== e2 ? (d2 = b2.child, d2.childLanes = 0, d2.pendingProps = k2, b2.deletions = null) : (d2 = wh(e2, k2), d2.subtreeFlags = e2.subtreeFlags & 14680064);
    null !== h2 ? f2 = wh(h2, f2) : (f2 = Ah(f2, g2, c2, null), f2.flags |= 2);
    f2.return = b2;
    d2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    d2 = f2;
    f2 = b2.child;
    g2 = a.child.memoizedState;
    g2 = null === g2 ? oj(c2) : { baseLanes: g2.baseLanes | c2, cachePool: null, transitions: g2.transitions };
    f2.memoizedState = g2;
    f2.childLanes = a.childLanes & ~c2;
    b2.memoizedState = nj;
    return d2;
  }
  f2 = a.child;
  a = f2.sibling;
  d2 = wh(f2, { mode: "visible", children: d2.children });
  0 === (b2.mode & 1) && (d2.lanes = c2);
  d2.return = b2;
  d2.sibling = null;
  null !== a && (c2 = b2.deletions, null === c2 ? (b2.deletions = [a], b2.flags |= 16) : c2.push(a));
  b2.child = d2;
  b2.memoizedState = null;
  return d2;
}
function rj(a, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function tj(a, b2, c2, d2) {
  null !== d2 && Jg(d2);
  Bh(b2, a.child, null, c2);
  a = rj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function sj(a, b2, c2, d2, e2, f2, g2) {
  if (c2) {
    if (b2.flags & 256)
      return b2.flags &= -257, d2 = Li(Error(p$2(422))), tj(a, b2, g2, d2);
    if (null !== b2.memoizedState)
      return b2.child = a.child, b2.flags |= 128, null;
    f2 = d2.fallback;
    e2 = b2.mode;
    d2 = qj({ mode: "visible", children: d2.children }, e2, 0, null);
    f2 = Ah(f2, e2, g2, null);
    f2.flags |= 2;
    d2.return = b2;
    f2.return = b2;
    d2.sibling = f2;
    b2.child = d2;
    0 !== (b2.mode & 1) && Bh(b2, a.child, null, g2);
    b2.child.memoizedState = oj(g2);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a, b2, g2, null);
  if ("$!" === e2.data) {
    d2 = e2.nextSibling && e2.nextSibling.dataset;
    if (d2)
      var h2 = d2.dgst;
    d2 = h2;
    f2 = Error(p$2(419));
    d2 = Li(f2, d2, void 0);
    return tj(a, b2, g2, d2);
  }
  h2 = 0 !== (g2 & a.childLanes);
  if (Ug || h2) {
    d2 = R;
    if (null !== d2) {
      switch (g2 & -g2) {
        case 4:
          e2 = 2;
          break;
        case 16:
          e2 = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e2 = 32;
          break;
        case 536870912:
          e2 = 268435456;
          break;
        default:
          e2 = 0;
      }
      e2 = 0 !== (e2 & (d2.suspendedLanes | g2)) ? 0 : e2;
      0 !== e2 && e2 !== f2.retryLane && (f2.retryLane = e2, Zg(a, e2), mh(d2, a, e2, -1));
    }
    uj();
    d2 = Li(Error(p$2(421)));
    return tj(a, b2, g2, d2);
  }
  if ("$?" === e2.data)
    return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e2._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e2.nextSibling);
  xg = b2;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = rj(b2, d2.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a, b2, c2) {
  a.lanes |= b2;
  var d2 = a.alternate;
  null !== d2 && (d2.lanes |= b2);
  Sg(a.return, b2, c2);
}
function xj(a, b2, c2, d2, e2) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d2, tail: c2, tailMode: e2 } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d2, f2.tail = c2, f2.tailMode = e2);
}
function yj(a, b2, c2) {
  var d2 = b2.pendingProps, e2 = d2.revealOrder, f2 = d2.tail;
  Yi(a, b2, d2.children, c2);
  d2 = M.current;
  if (0 !== (d2 & 2))
    d2 = d2 & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c2, b2);
          else if (19 === a.tag)
            wj(a, c2, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d2 &= 1;
  }
  G(M, d2);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e2) {
      case "forwards":
        c2 = b2.child;
        for (e2 = null; null !== c2; )
          a = c2.alternate, null !== a && null === Mh(a) && (e2 = c2), c2 = c2.sibling;
        c2 = e2;
        null === c2 ? (e2 = b2.child, b2.child = null) : (e2 = c2.sibling, c2.sibling = null);
        xj(b2, false, e2, c2, f2);
        break;
      case "backwards":
        c2 = null;
        e2 = b2.child;
        for (b2.child = null; null !== e2; ) {
          a = e2.alternate;
          if (null !== a && null === Mh(a)) {
            b2.child = e2;
            break;
          }
          a = e2.sibling;
          e2.sibling = c2;
          c2 = e2;
          e2 = a;
        }
        xj(b2, true, c2, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a, b2, c2) {
  null !== a && (b2.dependencies = a.dependencies);
  hh |= b2.lanes;
  if (0 === (c2 & b2.childLanes))
    return null;
  if (null !== a && b2.child !== a.child)
    throw Error(p$2(153));
  if (null !== b2.child) {
    a = b2.child;
    c2 = wh(a, a.pendingProps);
    b2.child = c2;
    for (c2.return = b2; null !== a.sibling; )
      a = a.sibling, c2 = c2.sibling = wh(a, a.pendingProps), c2.return = b2;
    c2.sibling = null;
  }
  return b2.child;
}
function zj(a, b2, c2) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d2 = b2.type._context, e2 = b2.memoizedProps.value;
      G(Mg, d2._currentValue);
      d2._currentValue = e2;
      break;
    case 13:
      d2 = b2.memoizedState;
      if (null !== d2) {
        if (null !== d2.dehydrated)
          return G(M, M.current & 1), b2.flags |= 128, null;
        if (0 !== (c2 & b2.child.childLanes))
          return pj(a, b2, c2);
        G(M, M.current & 1);
        a = $i(a, b2, c2);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d2 = 0 !== (c2 & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d2)
          return yj(a, b2, c2);
        b2.flags |= 128;
      }
      e2 = b2.memoizedState;
      null !== e2 && (e2.rendering = null, e2.tail = null, e2.lastEffect = null);
      G(M, M.current);
      if (d2)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a, b2, c2);
  }
  return $i(a, b2, c2);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b2) {
  for (var c2 = b2.child; null !== c2; ) {
    if (5 === c2.tag || 6 === c2.tag)
      a.appendChild(c2.stateNode);
    else if (4 !== c2.tag && null !== c2.child) {
      c2.child.return = c2;
      c2 = c2.child;
      continue;
    }
    if (c2 === b2)
      break;
    for (; null === c2.sibling; ) {
      if (null === c2.return || c2.return === b2)
        return;
      c2 = c2.return;
    }
    c2.sibling.return = c2.return;
    c2 = c2.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b2, c2, d2) {
  var e2 = a.memoizedProps;
  if (e2 !== d2) {
    a = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c2) {
      case "input":
        e2 = Ya(a, e2);
        d2 = Ya(a, d2);
        f2 = [];
        break;
      case "select":
        e2 = A$1({}, e2, { value: void 0 });
        d2 = A$1({}, d2, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e2 = gb(a, e2);
        d2 = gb(a, d2);
        f2 = [];
        break;
      default:
        "function" !== typeof e2.onClick && "function" === typeof d2.onClick && (a.onclick = Bf);
    }
    ub(c2, d2);
    var g2;
    c2 = null;
    for (l2 in e2)
      if (!d2.hasOwnProperty(l2) && e2.hasOwnProperty(l2) && null != e2[l2])
        if ("style" === l2) {
          var h2 = e2[l2];
          for (g2 in h2)
            h2.hasOwnProperty(g2) && (c2 || (c2 = {}), c2[g2] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d2) {
      var k2 = d2[l2];
      h2 = null != e2 ? e2[l2] : void 0;
      if (d2.hasOwnProperty(l2) && k2 !== h2 && (null != k2 || null != h2))
        if ("style" === l2)
          if (h2) {
            for (g2 in h2)
              !h2.hasOwnProperty(g2) || k2 && k2.hasOwnProperty(g2) || (c2 || (c2 = {}), c2[g2] = "");
            for (g2 in k2)
              k2.hasOwnProperty(g2) && h2[g2] !== k2[g2] && (c2 || (c2 = {}), c2[g2] = k2[g2]);
          } else
            c2 || (f2 || (f2 = []), f2.push(
              l2,
              c2
            )), c2 = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h2 = h2 ? h2.__html : void 0, null != k2 && h2 !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h2 === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c2 && (f2 = f2 || []).push("style", c2);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a, b2, c2, d2) {
  c2 !== d2 && (b2.flags |= 4);
};
function Ej(a, b2) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c2 = null; null !== b2; )
          null !== b2.alternate && (c2 = b2), b2 = b2.sibling;
        null === c2 ? a.tail = null : c2.sibling = null;
        break;
      case "collapsed":
        c2 = a.tail;
        for (var d2 = null; null !== c2; )
          null !== c2.alternate && (d2 = c2), c2 = c2.sibling;
        null === d2 ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d2.sibling = null;
    }
}
function S(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c2 = 0, d2 = 0;
  if (b2)
    for (var e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags & 14680064, d2 |= e2.flags & 14680064, e2.return = a, e2 = e2.sibling;
  else
    for (e2 = a.child; null !== e2; )
      c2 |= e2.lanes | e2.childLanes, d2 |= e2.subtreeFlags, d2 |= e2.flags, e2.return = a, e2 = e2.sibling;
  a.subtreeFlags |= d2;
  a.childLanes = c2;
  return b2;
}
function Fj(a, b2, c2) {
  var d2 = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S(b2), null;
    case 3:
      d2 = b2.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d2.pendingContext && (d2.context = d2.pendingContext, d2.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b2);
      S(b2);
      return null;
    case 5:
      Lh(b2);
      var e2 = Hh(Gh.current);
      c2 = b2.type;
      if (null !== a && null != b2.stateNode)
        Cj(a, b2, c2, d2, e2), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d2) {
          if (null === b2.stateNode)
            throw Error(p$2(166));
          S(b2);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.type;
          var f2 = b2.memoizedProps;
          d2[Of] = b2;
          d2[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c2) {
            case "dialog":
              D("cancel", d2);
              D("close", d2);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d2);
              break;
            case "video":
            case "audio":
              for (e2 = 0; e2 < lf.length; e2++)
                D(lf[e2], d2);
              break;
            case "source":
              D("error", d2);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d2
              );
              D("load", d2);
              break;
            case "details":
              D("toggle", d2);
              break;
            case "input":
              Za(d2, f2);
              D("invalid", d2);
              break;
            case "select":
              d2._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d2);
              break;
            case "textarea":
              hb(d2, f2), D("invalid", d2);
          }
          ub(c2, f2);
          e2 = null;
          for (var g2 in f2)
            if (f2.hasOwnProperty(g2)) {
              var h2 = f2[g2];
              "children" === g2 ? "string" === typeof h2 ? d2.textContent !== h2 && (true !== f2.suppressHydrationWarning && Af(d2.textContent, h2, a), e2 = ["children", h2]) : "number" === typeof h2 && d2.textContent !== "" + h2 && (true !== f2.suppressHydrationWarning && Af(
                d2.textContent,
                h2,
                a
              ), e2 = ["children", "" + h2]) : ea.hasOwnProperty(g2) && null != h2 && "onScroll" === g2 && D("scroll", d2);
            }
          switch (c2) {
            case "input":
              Va(d2);
              db(d2, f2, true);
              break;
            case "textarea":
              Va(d2);
              jb(d2);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d2.onclick = Bf);
          }
          d2 = e2;
          b2.updateQueue = d2;
          null !== d2 && (b2.flags |= 4);
        } else {
          g2 = 9 === e2.nodeType ? e2 : e2.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c2));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c2 ? (a = g2.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d2.is ? a = g2.createElement(c2, { is: d2.is }) : (a = g2.createElement(c2), "select" === c2 && (g2 = a, d2.multiple ? g2.multiple = true : d2.size && (g2.size = d2.size))) : a = g2.createElementNS(a, c2);
          a[Of] = b2;
          a[Pf] = d2;
          Aj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g2 = vb(c2, d2);
            switch (c2) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e2 = d2;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e2 = d2;
                break;
              case "video":
              case "audio":
                for (e2 = 0; e2 < lf.length; e2++)
                  D(lf[e2], a);
                e2 = d2;
                break;
              case "source":
                D("error", a);
                e2 = d2;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e2 = d2;
                break;
              case "details":
                D("toggle", a);
                e2 = d2;
                break;
              case "input":
                Za(a, d2);
                e2 = Ya(a, d2);
                D("invalid", a);
                break;
              case "option":
                e2 = d2;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d2.multiple };
                e2 = A$1({}, d2, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d2);
                e2 = gb(a, d2);
                D("invalid", a);
                break;
              default:
                e2 = d2;
            }
            ub(c2, e2);
            h2 = e2;
            for (f2 in h2)
              if (h2.hasOwnProperty(f2)) {
                var k2 = h2[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c2 || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g2));
              }
            switch (c2) {
              case "input":
                Va(a);
                db(a, d2, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d2.value && a.setAttribute("value", "" + Sa(d2.value));
                break;
              case "select":
                a.multiple = !!d2.multiple;
                f2 = d2.value;
                null != f2 ? fb(a, !!d2.multiple, f2, false) : null != d2.defaultValue && fb(
                  a,
                  !!d2.multiple,
                  d2.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e2.onClick && (a.onclick = Bf);
            }
            switch (c2) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d2 = !!d2.autoFocus;
                break a;
              case "img":
                d2 = true;
                break a;
              default:
                d2 = false;
            }
          }
          d2 && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Dj(a, b2, a.memoizedProps, d2);
      else {
        if ("string" !== typeof d2 && null === b2.stateNode)
          throw Error(p$2(166));
        c2 = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d2 = b2.stateNode;
          c2 = b2.memoizedProps;
          d2[Of] = b2;
          if (f2 = d2.nodeValue !== c2) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d2.nodeValue, c2, 0 !== (a.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d2 = (9 === c2.nodeType ? c2 : c2.ownerDocument).createTextNode(d2), d2[Of] = b2, b2.stateNode = d2;
      }
      S(b2);
      return null;
    case 13:
      E(M);
      d2 = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d2 && null !== d2.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p$2(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p$2(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c2, b2;
      d2 = null !== d2;
      d2 !== (null !== a && null !== a.memoizedState) && d2 && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S(b2);
      return null;
    case 4:
      return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
    case 10:
      return Rg(b2.type._context), S(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S(b2), null;
    case 19:
      E(M);
      f2 = b2.memoizedState;
      if (null === f2)
        return S(b2), null;
      d2 = 0 !== (b2.flags & 128);
      g2 = f2.rendering;
      if (null === g2)
        if (d2)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b2.child; null !== a; ) {
              g2 = Mh(a);
              if (null !== g2) {
                b2.flags |= 128;
                Ej(f2, false);
                d2 = g2.updateQueue;
                null !== d2 && (b2.updateQueue = d2, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d2 = c2;
                for (c2 = b2.child; null !== c2; )
                  f2 = c2, a = d2, f2.flags &= 14680066, g2 = f2.alternate, null === g2 ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g2.childLanes, f2.lanes = g2.lanes, f2.child = g2.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g2.memoizedProps, f2.memoizedState = g2.memoizedState, f2.updateQueue = g2.updateQueue, f2.type = g2.type, a = g2.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c2 = c2.sibling;
                G(M, M.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d2)
          if (a = Mh(g2), null !== a) {
            if (b2.flags |= 128, d2 = true, c2 = a.updateQueue, null !== c2 && (b2.updateQueue = c2, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g2.alternate && !I)
              return S(b2), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c2 && (b2.flags |= 128, d2 = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g2.sibling = b2.child, b2.child = g2) : (c2 = f2.last, null !== c2 ? c2.sibling = g2 : b2.child = g2, f2.last = g2);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c2 = M.current, G(M, d2 ? c2 & 1 | 2 : c2 & 1), b2;
      S(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d2 = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d2 && (b2.flags |= 8192), d2 && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p$2(156, b2.tag));
}
function Jj(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E(M);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate)
          throw Error(p$2(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b2) {
  var c2 = a.ref;
  if (null !== c2)
    if ("function" === typeof c2)
      try {
        c2(null);
      } catch (d2) {
        W(a, b2, d2);
      }
    else
      c2.current = null;
}
function Nj(a, b2, c2) {
  try {
    c2();
  } catch (d2) {
    W(a, b2, d2);
  }
}
var Oj = false;
function Pj(a, b2) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c2 = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c2 = (c2 = a.ownerDocument) && c2.defaultView || window;
        var d2 = c2.getSelection && c2.getSelection();
        if (d2 && 0 !== d2.rangeCount) {
          c2 = d2.anchorNode;
          var e2 = d2.anchorOffset, f2 = d2.focusNode;
          d2 = d2.focusOffset;
          try {
            c2.nodeType, f2.nodeType;
          } catch (F2) {
            c2 = null;
            break a;
          }
          var g2 = 0, h2 = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c2 || 0 !== e2 && 3 !== q2.nodeType || (h2 = g2 + e2);
                q2 !== f2 || 0 !== d2 && 3 !== q2.nodeType || (k2 = g2 + d2);
                3 === q2.nodeType && (g2 += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c2 && ++l2 === e2 && (h2 = g2);
                r2 === f2 && ++m2 === d2 && (k2 = g2);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c2 = -1 === h2 || -1 === k2 ? null : { start: h2, end: k2 };
        } else
          c2 = null;
      }
    c2 = c2 || { start: 0, end: 0 };
  } else
    c2 = null;
  Df = { focusedElem: a, selectionRange: c2 };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
      a.return = b2, V = a;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p$2(163));
            }
        } catch (F2) {
          W(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V = a;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b2, c2) {
  var d2 = b2.updateQueue;
  d2 = null !== d2 ? d2.lastEffect : null;
  if (null !== d2) {
    var e2 = d2 = d2.next;
    do {
      if ((e2.tag & a) === a) {
        var f2 = e2.destroy;
        e2.destroy = void 0;
        void 0 !== f2 && Nj(b2, c2, f2);
      }
      e2 = e2.next;
    } while (e2 !== d2);
  }
}
function Rj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c2 = b2 = b2.next;
    do {
      if ((c2.tag & a) === a) {
        var d2 = c2.create;
        c2.destroy = d2();
      }
      c2 = c2.next;
    } while (c2 !== b2);
  }
}
function Sj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c2 = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c2;
        break;
      default:
        a = c2;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Tj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Tj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? 8 === c2.nodeType ? c2.parentNode.insertBefore(a, b2) : c2.insertBefore(a, b2) : (8 === c2.nodeType ? (b2 = c2.parentNode, b2.insertBefore(a, c2)) : (b2 = c2, b2.appendChild(a)), c2 = c2._reactRootContainer, null !== c2 && void 0 !== c2 || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Wj(a, b2, c2), a = a.sibling; null !== a; )
      Wj(a, b2, c2), a = a.sibling;
}
function Xj(a, b2, c2) {
  var d2 = a.tag;
  if (5 === d2 || 6 === d2)
    a = a.stateNode, b2 ? c2.insertBefore(a, b2) : c2.appendChild(a);
  else if (4 !== d2 && (a = a.child, null !== a))
    for (Xj(a, b2, c2), a = a.sibling; null !== a; )
      Xj(a, b2, c2), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b2, c2) {
  for (c2 = c2.child; null !== c2; )
    ak(a, b2, c2), c2 = c2.sibling;
}
function ak(a, b2, c2) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c2);
    } catch (h2) {
    }
  switch (c2.tag) {
    case 5:
      U || Mj(c2, b2);
    case 6:
      var d2 = X, e2 = Yj;
      X = null;
      Zj(a, b2, c2);
      X = d2;
      Yj = e2;
      null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c2) : a.removeChild(c2)) : X.removeChild(c2.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c2 = c2.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c2) : 1 === a.nodeType && Kf(a, c2), bd(a)) : Kf(X, c2.stateNode));
      break;
    case 4:
      d2 = X;
      e2 = Yj;
      X = c2.stateNode.containerInfo;
      Yj = true;
      Zj(a, b2, c2);
      X = d2;
      Yj = e2;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d2 = c2.updateQueue, null !== d2 && (d2 = d2.lastEffect, null !== d2))) {
        e2 = d2 = d2.next;
        do {
          var f2 = e2, g2 = f2.destroy;
          f2 = f2.tag;
          void 0 !== g2 && (0 !== (f2 & 2) ? Nj(c2, b2, g2) : 0 !== (f2 & 4) && Nj(c2, b2, g2));
          e2 = e2.next;
        } while (e2 !== d2);
      }
      Zj(a, b2, c2);
      break;
    case 1:
      if (!U && (Mj(c2, b2), d2 = c2.stateNode, "function" === typeof d2.componentWillUnmount))
        try {
          d2.props = c2.memoizedProps, d2.state = c2.memoizedState, d2.componentWillUnmount();
        } catch (h2) {
          W(c2, b2, h2);
        }
      Zj(a, b2, c2);
      break;
    case 21:
      Zj(a, b2, c2);
      break;
    case 22:
      c2.mode & 1 ? (U = (d2 = U) || null !== c2.memoizedState, Zj(a, b2, c2), U = d2) : Zj(a, b2, c2);
      break;
    default:
      Zj(a, b2, c2);
  }
}
function bk(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c2 = a.stateNode;
    null === c2 && (c2 = a.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d2 = ck.bind(null, a, b3);
      c2.has(b3) || (c2.add(b3), b3.then(d2, d2));
    });
  }
}
function dk(a, b2) {
  var c2 = b2.deletions;
  if (null !== c2)
    for (var d2 = 0; d2 < c2.length; d2++) {
      var e2 = c2[d2];
      try {
        var f2 = a, g2 = b2, h2 = g2;
        a:
          for (; null !== h2; ) {
            switch (h2.tag) {
              case 5:
                X = h2.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h2.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h2 = h2.return;
          }
        if (null === X)
          throw Error(p$2(160));
        ak(f2, g2, e2);
        X = null;
        Yj = false;
        var k2 = e2.alternate;
        null !== k2 && (k2.return = null);
        e2.return = null;
      } catch (l2) {
        W(e2, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a), b2 = b2.sibling;
}
function ek(a, b2) {
  var c2 = a.alternate, d2 = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      break;
    case 5:
      dk(b2, a);
      fk(a);
      d2 & 512 && null !== c2 && Mj(c2, c2.return);
      if (a.flags & 32) {
        var e2 = a.stateNode;
        try {
          ob(e2, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d2 & 4 && (e2 = a.stateNode, null != e2)) {
        var f2 = a.memoizedProps, g2 = null !== c2 ? c2.memoizedProps : f2, h2 = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h2 && "radio" === f2.type && null != f2.name && ab(e2, f2);
            vb(h2, g2);
            var l2 = vb(h2, f2);
            for (g2 = 0; g2 < k2.length; g2 += 2) {
              var m2 = k2[g2], q2 = k2[g2 + 1];
              "style" === m2 ? sb(e2, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e2, q2) : "children" === m2 ? ob(e2, q2) : ta(e2, m2, q2, l2);
            }
            switch (h2) {
              case "input":
                bb(e2, f2);
                break;
              case "textarea":
                ib(e2, f2);
                break;
              case "select":
                var r2 = e2._wrapperState.wasMultiple;
                e2._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e2, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e2,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e2, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e2[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a);
      fk(a);
      if (d2 & 4) {
        if (null === a.stateNode)
          throw Error(p$2(162));
        e2 = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e2.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a);
      fk(a);
      if (d2 & 4 && null !== c2 && c2.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b2, a);
      fk(a);
      break;
    case 13:
      dk(b2, a);
      fk(a);
      e2 = a.child;
      e2.flags & 8192 && (f2 = null !== e2.memoizedState, e2.stateNode.isHidden = f2, !f2 || null !== e2.alternate && null !== e2.alternate.memoizedState || (gk = B()));
      d2 & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c2 && null !== c2.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
      fk(a);
      if (d2 & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d2 = r2;
                    c2 = r2.return;
                    try {
                      b2 = d2, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d2, c2, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e2 = q2.stateNode, l2 ? (f2 = e2.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h2 = q2.stateNode, k2 = q2.memoizedProps.style, g2 = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h2.style.display = rb("display", g2));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a);
      fk(a);
      d2 & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c2 = a.return; null !== c2; ) {
          if (Uj(c2)) {
            var d2 = c2;
            break a;
          }
          c2 = c2.return;
        }
        throw Error(p$2(160));
      }
      switch (d2.tag) {
        case 5:
          var e2 = d2.stateNode;
          d2.flags & 32 && (ob(e2, ""), d2.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e2);
          break;
        case 3:
        case 4:
          var g2 = d2.stateNode.containerInfo, h2 = Vj(a);
          Wj(a, h2, g2);
          break;
        default:
          throw Error(p$2(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function ik(a, b2, c2) {
  V = a;
  jk(a);
}
function jk(a, b2, c2) {
  for (var d2 = 0 !== (a.mode & 1); null !== V; ) {
    var e2 = V, f2 = e2.child;
    if (22 === e2.tag && d2) {
      var g2 = null !== e2.memoizedState || Kj;
      if (!g2) {
        var h2 = e2.alternate, k2 = null !== h2 && null !== h2.memoizedState || U;
        h2 = Kj;
        var l2 = U;
        Kj = g2;
        if ((U = k2) && !l2)
          for (V = e2; null !== V; )
            g2 = V, k2 = g2.child, 22 === g2.tag && null !== g2.memoizedState ? kk(e2) : null !== k2 ? (k2.return = g2, V = k2) : kk(e2);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e2;
        Kj = h2;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e2.subtreeFlags & 8772) && null !== f2 ? (f2.return = e2, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c2 = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b2);
              break;
            case 1:
              var d2 = b2.stateNode;
              if (b2.flags & 4 && !U)
                if (null === c2)
                  d2.componentDidMount();
                else {
                  var e2 = b2.elementType === b2.type ? c2.memoizedProps : Lg(b2.type, c2.memoizedProps);
                  d2.componentDidUpdate(e2, c2.memoizedState, d2.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d2);
              break;
            case 3:
              var g2 = b2.updateQueue;
              if (null !== g2) {
                c2 = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c2 = b2.child.stateNode;
                      break;
                    case 1:
                      c2 = b2.child.stateNode;
                  }
                ih(b2, g2, c2);
              }
              break;
            case 5:
              var h2 = b2.stateNode;
              if (null === c2 && b2.flags & 4) {
                c2 = h2;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c2.focus();
                    break;
                  case "img":
                    k2.src && (c2.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p$2(163));
          }
        U || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V = null;
      break;
    }
    c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a) {
      V = null;
      break;
    }
    var c2 = b2.sibling;
    if (null !== c2) {
      c2.return = b2.return;
      V = c2;
      break;
    }
    V = b2.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c2 = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W(b2, c2, k2);
          }
          break;
        case 1:
          var d2 = b2.stateNode;
          if ("function" === typeof d2.componentDidMount) {
            var e2 = b2.return;
            try {
              d2.componentDidMount();
            } catch (k2) {
              W(b2, e2, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, f2, k2);
          }
          break;
        case 5:
          var g2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, g2, k2);
          }
      }
    } catch (k2) {
      W(b2, b2.return, k2);
    }
    if (b2 === a) {
      V = null;
      break;
    }
    var h2 = b2.sibling;
    if (null !== h2) {
      h2.return = b2.return;
      V = h2;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b2, c2, d2) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p$2(185));
  Ac(a, c2, d2);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c2), 4 === T && Dk(a, Z)), Ek(a, d2), 1 === c2 && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b2) {
  var c2 = a.callbackNode;
  wc(a, b2);
  var d2 = uc(a, a === R ? Z : 0);
  if (0 === d2)
    null !== c2 && bc(c2), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d2 & -d2, a.callbackPriority !== b2) {
    null != c2 && bc(c2);
    if (1 === b2)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c2 = null;
    else {
      switch (Dc(d2)) {
        case 1:
          c2 = fc;
          break;
        case 4:
          c2 = gc;
          break;
        case 16:
          c2 = hc;
          break;
        case 536870912:
          c2 = jc;
          break;
        default:
          c2 = hc;
      }
      c2 = Gk(c2, Hk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c2;
  }
}
function Hk(a, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p$2(327));
  var c2 = a.callbackNode;
  if (Ik() && a.callbackNode !== c2)
    return null;
  var d2 = uc(a, a === R ? Z : 0);
  if (0 === d2)
    return null;
  if (0 !== (d2 & 30) || 0 !== (d2 & a.expiredLanes) || b2)
    b2 = Jk(a, d2);
  else {
    b2 = d2;
    var e2 = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b2)
      vk = null, Hj = B() + 500, Lk(a, b2);
    do
      try {
        Mk();
        break;
      } catch (h2) {
        Nk(a, h2);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e2;
    null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e2 = xc(a), 0 !== e2 && (d2 = e2, b2 = Ok(a, e2)));
    if (1 === b2)
      throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
    if (6 === b2)
      Dk(a, d2);
    else {
      e2 = a.current.alternate;
      if (0 === (d2 & 30) && !Pk(e2) && (b2 = Jk(a, d2), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d2 = f2, b2 = Ok(a, f2))), 1 === b2))
        throw c2 = qk, Lk(a, 0), Dk(a, d2), Ek(a, B()), c2;
      a.finishedWork = e2;
      a.finishedLanes = d2;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p$2(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d2);
          if ((d2 & 130023424) === d2 && (b2 = gk + 500 - B(), 10 < b2)) {
            if (0 !== uc(a, 0))
              break;
            e2 = a.suspendedLanes;
            if ((e2 & d2) !== d2) {
              L();
              a.pingedLanes |= a.suspendedLanes & e2;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d2);
          if ((d2 & 4194240) === d2)
            break;
          b2 = a.eventTimes;
          for (e2 = -1; 0 < d2; ) {
            var g2 = 31 - oc(d2);
            f2 = 1 << g2;
            g2 = b2[g2];
            g2 > e2 && (e2 = g2);
            d2 &= ~f2;
          }
          d2 = e2;
          d2 = B() - d2;
          d2 = (120 > d2 ? 120 : 480 > d2 ? 480 : 1080 > d2 ? 1080 : 1920 > d2 ? 1920 : 3e3 > d2 ? 3e3 : 4320 > d2 ? 4320 : 1960 * mk(d2 / 1960)) - d2;
          if (10 < d2) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p$2(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c2 ? Hk.bind(null, a) : null;
}
function Ok(a, b2) {
  var c2 = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
  a = Jk(a, b2);
  2 !== a && (b2 = uk, uk = c2, null !== b2 && Gj(b2));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c2 = b2.updateQueue;
      if (null !== c2 && (c2 = c2.stores, null !== c2))
        for (var d2 = 0; d2 < c2.length; d2++) {
          var e2 = c2[d2], f2 = e2.getSnapshot;
          e2 = e2.value;
          try {
            if (!He(f2(), e2))
              return false;
          } catch (g2) {
            return false;
          }
        }
    }
    c2 = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c2)
      c2.return = b2, b2 = c2;
    else {
      if (b2 === a)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c2 = 31 - oc(b2), d2 = 1 << c2;
    a[c2] = -1;
    b2 &= ~d2;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p$2(327));
  Ik();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1))
    return Ek(a, B()), null;
  var c2 = Jk(a, b2);
  if (0 !== a.tag && 2 === c2) {
    var d2 = xc(a);
    0 !== d2 && (b2 = d2, c2 = Ok(a, d2));
  }
  if (1 === c2)
    throw c2 = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c2;
  if (6 === c2)
    throw Error(p$2(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b2) {
  var c2 = K;
  K |= 1;
  try {
    return a(b2);
  } finally {
    K = c2, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c2 = pk.transition, d2 = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d2, pk.transition = c2, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c2 = a.timeoutHandle;
  -1 !== c2 && (a.timeoutHandle = -1, Gf(c2));
  if (null !== Y)
    for (c2 = Y.return; null !== c2; ) {
      var d2 = c2;
      wg(d2);
      switch (d2.tag) {
        case 1:
          d2 = d2.type.childContextTypes;
          null !== d2 && void 0 !== d2 && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d2);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d2.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c2 = c2.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b2;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c2 = Wg[b2], d2 = c2.interleaved, null !== d2) {
        c2.interleaved = null;
        var e2 = d2.next, f2 = c2.pending;
        if (null !== f2) {
          var g2 = f2.next;
          f2.next = e2;
          d2.next = g2;
        }
        c2.pending = d2;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b2) {
  do {
    var c2 = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d2 = N.memoizedState; null !== d2; ) {
          var e2 = d2.queue;
          null !== e2 && (e2.pending = null);
          d2 = d2.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c2 || null === c2.return) {
        T = 1;
        qk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g2 = c2.return, h2 = c2, k2 = b2;
        b2 = Z;
        h2.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h2, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g2);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g2, h2, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p$2(426));
          }
        } else if (I && h2.mode & 1) {
          var J2 = Vi(g2);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g2, h2, f2, b2);
            Jg(Ki(k2, h2));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h2);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g2;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h2 = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h2, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c2);
    } catch (na) {
      b2 = na;
      Y === c2 && null !== c2 && (Y = c2 = c2.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b2) {
  var c2 = K;
  K |= 2;
  var d2 = Kk();
  if (R !== a || Z !== b2)
    vk = null, Lk(a, b2);
  do
    try {
      Uk();
      break;
    } catch (e2) {
      Nk(a, e2);
    }
  while (1);
  Qg();
  K = c2;
  nk.current = d2;
  if (null !== Y)
    throw Error(p$2(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b2 = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Tk(a) : Y = b2;
  ok.current = null;
}
function Tk(a) {
  var b2 = a;
  do {
    var c2 = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c2 = Fj(c2, b2, gj), null !== c2) {
        Y = c2;
        return;
      }
    } else {
      c2 = Jj(c2, b2);
      if (null !== c2) {
        c2.flags &= 32767;
        Y = c2;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Qk(a, b2, c2) {
  var d2 = C, e2 = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b2, c2, d2);
  } finally {
    pk.transition = e2, C = d2;
  }
  return null;
}
function Xk(a, b2, c2, d2) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p$2(327));
  c2 = a.finishedWork;
  var e2 = a.finishedLanes;
  if (null === c2)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c2 === a.current)
    throw Error(p$2(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c2.lanes | c2.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c2.subtreeFlags & 2064) && 0 === (c2.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c2.flags & 15990);
  if (0 !== (c2.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g2 = C;
    C = 1;
    var h2 = K;
    K |= 4;
    ok.current = null;
    Pj(a, c2);
    ek(c2, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c2;
    ik(c2);
    dc();
    K = h2;
    C = g2;
    pk.transition = f2;
  } else
    a.current = c2;
  wk && (wk = false, xk = a, yk = e2);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c2.stateNode);
  Ek(a, B());
  if (null !== b2)
    for (d2 = a.onRecoverableError, c2 = 0; c2 < b2.length; c2++)
      e2 = b2[c2], d2(e2.value, { componentStack: e2.stack, digest: e2.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b2 = pk.transition, c2 = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d2 = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p$2(331));
        var e2 = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g2 = f2.child;
          if (0 !== (V.flags & 16)) {
            var h2 = f2.deletions;
            if (null !== h2) {
              for (var k2 = 0; k2 < h2.length; k2++) {
                var l2 = h2[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g2)
            g2.return = f2, V = g2;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g2 = V;
          var u2 = g2.child;
          if (0 !== (g2.subtreeFlags & 2064) && null !== u2)
            u2.return = g2, V = u2;
          else
            b:
              for (g2 = w2; null !== V; ) {
                h2 = V;
                if (0 !== (h2.flags & 2048))
                  try {
                    switch (h2.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h2);
                    }
                  } catch (na) {
                    W(h2, h2.return, na);
                  }
                if (h2 === g2) {
                  V = null;
                  break b;
                }
                var F2 = h2.sibling;
                if (null !== F2) {
                  F2.return = h2.return;
                  V = F2;
                  break b;
                }
                V = h2.return;
              }
        }
        K = e2;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d2 = true;
      }
      return d2;
    } finally {
      C = c2, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a, b2, c2) {
  b2 = Ki(c2, b2);
  b2 = Oi(a, b2, 1);
  a = dh(a, b2, 1);
  b2 = L();
  null !== a && (Ac(a, 1, b2), Ek(a, b2));
}
function W(a, b2, c2) {
  if (3 === a.tag)
    Yk(a, a, c2);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a, c2);
        break;
      } else if (1 === b2.tag) {
        var d2 = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d2.componentDidCatch && (null === Si || !Si.has(d2))) {
          a = Ki(c2, a);
          a = Ri(b2, a, 1);
          b2 = dh(b2, a, 1);
          a = L();
          null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a, b2, c2) {
  var d2 = a.pingCache;
  null !== d2 && d2.delete(b2);
  b2 = L();
  a.pingedLanes |= a.suspendedLanes & c2;
  R === a && (Z & c2) === c2 && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c2);
  Ek(a, b2);
}
function Zk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c2 = L();
  a = Zg(a, b2);
  null !== a && (Ac(a, b2, c2), Ek(a, c2));
}
function vj(a) {
  var b2 = a.memoizedState, c2 = 0;
  null !== b2 && (c2 = b2.retryLane);
  Zk(a, c2);
}
function ck(a, b2) {
  var c2 = 0;
  switch (a.tag) {
    case 13:
      var d2 = a.stateNode;
      var e2 = a.memoizedState;
      null !== e2 && (c2 = e2.retryLane);
      break;
    case 19:
      d2 = a.stateNode;
      break;
    default:
      throw Error(p$2(314));
  }
  null !== d2 && d2.delete(b2);
  Zk(a, c2);
}
var Wk;
Wk = function(a, b2, c2) {
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c2) && 0 === (b2.flags & 128))
        return Ug = false, zj(a, b2, c2);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d2 = b2.type;
      jj(a, b2);
      a = b2.pendingProps;
      var e2 = Yf(b2, H.current);
      Tg(b2, c2);
      e2 = Xh(null, b2, d2, a, e2, c2);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e2 && null !== e2 && "function" === typeof e2.render && void 0 === e2.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d2) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e2.state && void 0 !== e2.state ? e2.state : null, ah(b2), e2.updater = nh, b2.stateNode = e2, e2._reactInternals = b2, rh(b2, d2, a, c2), b2 = kj(null, b2, d2, true, f2, c2)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e2, c2), b2 = b2.child);
      return b2;
    case 16:
      d2 = b2.elementType;
      a: {
        jj(a, b2);
        a = b2.pendingProps;
        e2 = d2._init;
        d2 = e2(d2._payload);
        b2.type = d2;
        e2 = b2.tag = $k(d2);
        a = Lg(d2, a);
        switch (e2) {
          case 0:
            b2 = dj(null, b2, d2, a, c2);
            break a;
          case 1:
            b2 = ij(null, b2, d2, a, c2);
            break a;
          case 11:
            b2 = Zi(null, b2, d2, a, c2);
            break a;
          case 14:
            b2 = aj(null, b2, d2, Lg(d2.type, a), c2);
            break a;
        }
        throw Error(p$2(
          306,
          d2,
          ""
        ));
      }
      return b2;
    case 0:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), dj(a, b2, d2, e2, c2);
    case 1:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), ij(a, b2, d2, e2, c2);
    case 3:
      a: {
        lj(b2);
        if (null === a)
          throw Error(p$2(387));
        d2 = b2.pendingProps;
        f2 = b2.memoizedState;
        e2 = f2.element;
        bh(a, b2);
        gh(b2, d2, null, c2);
        var g2 = b2.memoizedState;
        d2 = g2.element;
        if (f2.isDehydrated)
          if (f2 = { element: d2, isDehydrated: false, cache: g2.cache, pendingSuspenseBoundaries: g2.pendingSuspenseBoundaries, transitions: g2.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e2 = Ki(Error(p$2(423)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else if (d2 !== e2) {
            e2 = Ki(Error(p$2(424)), b2);
            b2 = mj(a, b2, d2, c2, e2);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c2 = Ch(b2, null, d2, c2), b2.child = c2; c2; )
              c2.flags = c2.flags & -3 | 4096, c2 = c2.sibling;
        else {
          Ig();
          if (d2 === e2) {
            b2 = $i(a, b2, c2);
            break a;
          }
          Yi(a, b2, d2, c2);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a && Eg(b2), d2 = b2.type, e2 = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g2 = e2.children, Ef(d2, e2) ? g2 = null : null !== f2 && Ef(d2, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g2, c2), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return pj(a, b2, c2);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d2 = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d2, c2) : Yi(a, b2, d2, c2), b2.child;
    case 11:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), Zi(a, b2, d2, e2, c2);
    case 7:
      return Yi(a, b2, b2.pendingProps, c2), b2.child;
    case 8:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 12:
      return Yi(a, b2, b2.pendingProps.children, c2), b2.child;
    case 10:
      a: {
        d2 = b2.type._context;
        e2 = b2.pendingProps;
        f2 = b2.memoizedProps;
        g2 = e2.value;
        G(Mg, d2._currentValue);
        d2._currentValue = g2;
        if (null !== f2)
          if (He(f2.value, g2)) {
            if (f2.children === e2.children && !Wf.current) {
              b2 = $i(a, b2, c2);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h2 = f2.dependencies;
              if (null !== h2) {
                g2 = f2.child;
                for (var k2 = h2.firstContext; null !== k2; ) {
                  if (k2.context === d2) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c2 & -c2);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c2;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c2);
                    Sg(
                      f2.return,
                      c2,
                      b2
                    );
                    h2.lanes |= c2;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g2 = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g2 = f2.return;
                if (null === g2)
                  throw Error(p$2(341));
                g2.lanes |= c2;
                h2 = g2.alternate;
                null !== h2 && (h2.lanes |= c2);
                Sg(g2, c2, b2);
                g2 = f2.sibling;
              } else
                g2 = f2.child;
              if (null !== g2)
                g2.return = f2;
              else
                for (g2 = f2; null !== g2; ) {
                  if (g2 === b2) {
                    g2 = null;
                    break;
                  }
                  f2 = g2.sibling;
                  if (null !== f2) {
                    f2.return = g2.return;
                    g2 = f2;
                    break;
                  }
                  g2 = g2.return;
                }
              f2 = g2;
            }
        Yi(a, b2, e2.children, c2);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e2 = b2.type, d2 = b2.pendingProps.children, Tg(b2, c2), e2 = Vg(e2), d2 = d2(e2), b2.flags |= 1, Yi(a, b2, d2, c2), b2.child;
    case 14:
      return d2 = b2.type, e2 = Lg(d2, b2.pendingProps), e2 = Lg(d2.type, e2), aj(a, b2, d2, e2, c2);
    case 15:
      return cj(a, b2, b2.type, b2.pendingProps, c2);
    case 17:
      return d2 = b2.type, e2 = b2.pendingProps, e2 = b2.elementType === d2 ? e2 : Lg(d2, e2), jj(a, b2), b2.tag = 1, Zf(d2) ? (a = true, cg(b2)) : a = false, Tg(b2, c2), ph(b2, d2, e2), rh(b2, d2, e2, c2), kj(null, b2, d2, true, a, c2);
    case 19:
      return yj(a, b2, c2);
    case 22:
      return ej(a, b2, c2);
  }
  throw Error(p$2(156, b2.tag));
};
function Gk(a, b2) {
  return ac(a, b2);
}
function al(a, b2, c2, d2) {
  this.tag = a;
  this.key = c2;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d2;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c2, d2) {
  return new al(a, b2, c2, d2);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b2) {
  var c2 = a.alternate;
  null === c2 ? (c2 = Bg(a.tag, b2, a.key, a.mode), c2.elementType = a.elementType, c2.type = a.type, c2.stateNode = a.stateNode, c2.alternate = a, a.alternate = c2) : (c2.pendingProps = b2, c2.type = a.type, c2.flags = 0, c2.subtreeFlags = 0, c2.deletions = null);
  c2.flags = a.flags & 14680064;
  c2.childLanes = a.childLanes;
  c2.lanes = a.lanes;
  c2.child = a.child;
  c2.memoizedProps = a.memoizedProps;
  c2.memoizedState = a.memoizedState;
  c2.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c2.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c2.sibling = a.sibling;
  c2.index = a.index;
  c2.ref = a.ref;
  return c2;
}
function yh(a, b2, c2, d2, e2, f2) {
  var g2 = 2;
  d2 = a;
  if ("function" === typeof a)
    bj(a) && (g2 = 1);
  else if ("string" === typeof a)
    g2 = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c2.children, e2, f2, b2);
        case za:
          g2 = 8;
          e2 |= 8;
          break;
        case Aa:
          return a = Bg(12, c2, b2, e2 | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c2, b2, e2), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c2, b2, e2), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c2, e2, f2, b2);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g2 = 10;
                break a;
              case Ca:
                g2 = 9;
                break a;
              case Da:
                g2 = 11;
                break a;
              case Ga:
                g2 = 14;
                break a;
              case Ha:
                g2 = 16;
                d2 = null;
                break a;
            }
          throw Error(p$2(130, null == a ? a : typeof a, ""));
      }
  b2 = Bg(g2, c2, b2, e2);
  b2.elementType = a;
  b2.type = d2;
  b2.lanes = f2;
  return b2;
}
function Ah(a, b2, c2, d2) {
  a = Bg(7, a, d2, b2);
  a.lanes = c2;
  return a;
}
function qj(a, b2, c2, d2) {
  a = Bg(22, a, d2, b2);
  a.elementType = Ia;
  a.lanes = c2;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b2, c2) {
  a = Bg(6, a, null, b2);
  a.lanes = c2;
  return a;
}
function zh(a, b2, c2) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c2;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function bl(a, b2, c2, d2, e2) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d2;
  this.onRecoverableError = e2;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = new bl(a, b2, c2, h2, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d2, isDehydrated: c2, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b2, c2) {
  var d2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d2 ? null : "" + d2, children: a, containerInfo: b2, implementation: c2 };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p$2(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p$2(171));
  }
  if (1 === a.tag) {
    var c2 = a.type;
    if (Zf(c2))
      return bg(a, c2, b2);
  }
  return b2;
}
function fl(a, b2, c2, d2, e2, f2, g2, h2, k2) {
  a = cl(c2, d2, true, a, e2, f2, g2, h2, k2);
  a.context = el(null);
  c2 = a.current;
  d2 = L();
  e2 = lh(c2);
  f2 = ch(d2, e2);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c2, f2, e2);
  a.current.lanes = e2;
  Ac(a, e2, d2);
  Ek(a, d2);
  return a;
}
function gl(a, b2, c2, d2) {
  var e2 = b2.current, f2 = L(), g2 = lh(e2);
  c2 = el(c2);
  null === b2.context ? b2.context = c2 : b2.pendingContext = c2;
  b2 = ch(f2, g2);
  b2.payload = { element: a };
  d2 = void 0 === d2 ? null : d2;
  null !== d2 && (b2.callback = d2);
  a = dh(e2, b2, g2);
  null !== a && (mh(a, e2, g2, f2), eh(a, e2, g2));
  return g2;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c2 = a.retryLane;
    a.retryLane = 0 !== c2 && c2 < b2 ? c2 : b2;
  }
}
function jl(a, b2) {
  il(a, b2);
  (a = a.alternate) && il(a, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p$2(409));
  gl(a, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c2 = 0; c2 < Qc.length && 0 !== b2 && b2 < Qc[c2].priority; c2++)
      ;
    Qc.splice(c2, 0, a);
    0 === c2 && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b2, c2, d2, e2) {
  if (e2) {
    if ("function" === typeof d2) {
      var f2 = d2;
      d2 = function() {
        var a2 = hl(g2);
        f2.call(a2);
      };
    }
    var g2 = fl(b2, d2, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g2;
    a[uf] = g2.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g2;
  }
  for (; e2 = a.lastChild; )
    a.removeChild(e2);
  if ("function" === typeof d2) {
    var h2 = d2;
    d2 = function() {
      var a2 = hl(k2);
      h2.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b2, k2, c2, d2);
  });
  return k2;
}
function sl(a, b2, c2, d2, e2) {
  var f2 = c2._reactRootContainer;
  if (f2) {
    var g2 = f2;
    if ("function" === typeof e2) {
      var h2 = e2;
      e2 = function() {
        var a2 = hl(g2);
        h2.call(a2);
      };
    }
    gl(b2, g2, a, e2);
  } else
    g2 = rl(c2, b2, a, e2, d2);
  return hl(g2);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c2 = tc(b2.pendingLanes);
        0 !== c2 && (Cc(b2, c2 | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a, 1);
        if (null !== b3) {
          var c3 = L();
          mh(b3, a, 1, c3);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = Zg(a, 134217728);
    if (null !== b2) {
      var c2 = L();
      mh(b2, a, 134217728, c2);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = lh(a), c2 = Zg(a, b2);
    if (null !== c2) {
      var d2 = L();
      mh(c2, a, b2, d2);
    }
    jl(a, b2);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b2) {
  var c2 = C;
  try {
    return C = a, b2();
  } finally {
    C = c2;
  }
};
yb = function(a, b2, c2) {
  switch (b2) {
    case "input":
      bb(a, c2);
      b2 = c2.name;
      if ("radio" === c2.type && null != b2) {
        for (c2 = a; c2.parentNode; )
          c2 = c2.parentNode;
        c2 = c2.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c2.length; b2++) {
          var d2 = c2[b2];
          if (d2 !== a && d2.form === a.form) {
            var e2 = Db(d2);
            if (!e2)
              throw Error(p$2(90));
            Wa(d2);
            bb(d2, e2);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c2);
      break;
    case "select":
      b2 = c2.value, null != b2 && fb(a, !!c2.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b2) {
  var c2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p$2(200));
  return dl(a, b2, null, c2);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ol(a))
    throw Error(p$2(299));
  var c2 = false, d2 = "", e2 = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c2 = true), void 0 !== b2.identifierPrefix && (d2 = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e2 = b2.onRecoverableError));
  b2 = cl(a, 1, false, null, null, c2, false, d2, e2);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(p$2(188));
    a = Object.keys(a).join(",");
    throw Error(p$2(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a, b2, true, c2);
};
reactDom_production_min.hydrateRoot = function(a, b2, c2) {
  if (!ol(a))
    throw Error(p$2(405));
  var d2 = null != c2 && c2.hydratedSources || null, e2 = false, f2 = "", g2 = ll;
  null !== c2 && void 0 !== c2 && (true === c2.unstable_strictMode && (e2 = true), void 0 !== c2.identifierPrefix && (f2 = c2.identifierPrefix), void 0 !== c2.onRecoverableError && (g2 = c2.onRecoverableError));
  b2 = fl(b2, null, a, 1, null != c2 ? c2 : null, e2, false, f2, g2);
  a[uf] = b2.current;
  sf(a);
  if (d2)
    for (a = 0; a < d2.length; a++)
      c2 = d2[a], e2 = c2._getVersion, e2 = e2(c2._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c2, e2] : b2.mutableSourceEagerHydrationData.push(
        c2,
        e2
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a, b2, c2) {
  if (!pl(b2))
    throw Error(p$2(200));
  return sl(null, a, b2, false, c2);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p$2(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c2, d2) {
  if (!pl(c2))
    throw Error(p$2(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p$2(38));
  return sl(a, b2, c2, false, d2);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
function checkDCE() {
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
    return;
  }
  try {
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    console.error(err);
  }
}
{
  checkDCE();
  reactDom.exports = reactDom_production_min;
}
var reactDomExports = reactDom.exports;
const ReactDOM = /* @__PURE__ */ getDefaultExportFromCjs(reactDomExports);
var m$2 = reactDomExports;
{
  client.createRoot = m$2.createRoot;
  client.hydrateRoot = m$2.hydrateRoot;
}
const STYLE$1 = "*{margin:0;padding:0;box-sizing:border-box;font-family:InterYounet}@keyframes rotateLogo{0%{transform:rotate(0);opacity:1}to{transform:rotate(360deg);opacity:0}}.logo{transition:all .3s ease}.opened{animation-name:rotateLogo;animation-duration:.9s;animation-timing-function:ease;animation-fill-mode:forwards}@keyframes rotateClose{0%{transform:rotate(-360deg);opacity:0}to{transform:rotate(0);opacity:1}}.closeRef{background:linear-gradient(135deg,#b45afc 15%,#4285ff 50%,#00b2f8 80%);border-radius:999px;cursor:pointer;position:fixed;display:flex;justify-content:center;align-items:center}.closed{animation-name:rotateClose;animation-duration:.9s;animation-timing-function:ease;animation-fill-mode:forwards}";
function formatMuiErrorMessage(code) {
  let url = "https://mui.com/production-error/?code=" + code;
  for (let i = 1; i < arguments.length; i += 1) {
    url += "&args[]=" + encodeURIComponent(arguments[i]);
  }
  return "Minified MUI error #" + code + "; visit " + url + " for the full message.";
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function memoize$1(fn) {
  var cache = /* @__PURE__ */ Object.create(null);
  return function(arg) {
    if (cache[arg] === void 0)
      cache[arg] = fn(arg);
    return cache[arg];
  };
}
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/;
var isPropValid = /* @__PURE__ */ memoize$1(
  function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function sheetForTag(tag) {
  if (tag.sheet) {
    return tag.sheet;
  }
  for (var i = 0; i < document.styleSheets.length; i++) {
    if (document.styleSheets[i].ownerNode === tag) {
      return document.styleSheets[i];
    }
  }
}
function createStyleElement(options) {
  var tag = document.createElement("style");
  tag.setAttribute("data-emotion", options.key);
  if (options.nonce !== void 0) {
    tag.setAttribute("nonce", options.nonce);
  }
  tag.appendChild(document.createTextNode(""));
  tag.setAttribute("data-s", "");
  return tag;
}
var StyleSheet = /* @__PURE__ */ function() {
  function StyleSheet2(options) {
    var _this = this;
    this._insertTag = function(tag) {
      var before;
      if (_this.tags.length === 0) {
        if (_this.insertionPoint) {
          before = _this.insertionPoint.nextSibling;
        } else if (_this.prepend) {
          before = _this.container.firstChild;
        } else {
          before = _this.before;
        }
      } else {
        before = _this.tags[_this.tags.length - 1].nextSibling;
      }
      _this.container.insertBefore(tag, before);
      _this.tags.push(tag);
    };
    this.isSpeedy = options.speedy === void 0 ? true : options.speedy;
    this.tags = [];
    this.ctr = 0;
    this.nonce = options.nonce;
    this.key = options.key;
    this.container = options.container;
    this.prepend = options.prepend;
    this.insertionPoint = options.insertionPoint;
    this.before = null;
  }
  var _proto = StyleSheet2.prototype;
  _proto.hydrate = function hydrate(nodes) {
    nodes.forEach(this._insertTag);
  };
  _proto.insert = function insert(rule) {
    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
      this._insertTag(createStyleElement(this));
    }
    var tag = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var sheet = sheetForTag(tag);
      try {
        sheet.insertRule(rule, sheet.cssRules.length);
      } catch (e2) {
      }
    } else {
      tag.appendChild(document.createTextNode(rule));
    }
    this.ctr++;
  };
  _proto.flush = function flush() {
    this.tags.forEach(function(tag) {
      return tag.parentNode && tag.parentNode.removeChild(tag);
    });
    this.tags = [];
    this.ctr = 0;
  };
  return StyleSheet2;
}();
var MS = "-ms-";
var MOZ = "-moz-";
var WEBKIT = "-webkit-";
var COMMENT = "comm";
var RULESET = "rule";
var DECLARATION = "decl";
var IMPORT = "@import";
var KEYFRAMES = "@keyframes";
var LAYER = "@layer";
var abs = Math.abs;
var from = String.fromCharCode;
var assign = Object.assign;
function hash(value, length2) {
  return charat(value, 0) ^ 45 ? (((length2 << 2 ^ charat(value, 0)) << 2 ^ charat(value, 1)) << 2 ^ charat(value, 2)) << 2 ^ charat(value, 3) : 0;
}
function trim(value) {
  return value.trim();
}
function match(value, pattern) {
  return (value = pattern.exec(value)) ? value[0] : value;
}
function replace(value, pattern, replacement) {
  return value.replace(pattern, replacement);
}
function indexof(value, search) {
  return value.indexOf(search);
}
function charat(value, index) {
  return value.charCodeAt(index) | 0;
}
function substr(value, begin, end) {
  return value.slice(begin, end);
}
function strlen(value) {
  return value.length;
}
function sizeof(value) {
  return value.length;
}
function append(value, array) {
  return array.push(value), value;
}
function combine(array, callback) {
  return array.map(callback).join("");
}
var line = 1;
var column = 1;
var length = 0;
var position = 0;
var character = 0;
var characters = "";
function node(value, root, parent, type, props, children, length2) {
  return { value, root, parent, type, props, children, line, column, length: length2, return: "" };
}
function copy(root, props) {
  return assign(node("", null, null, "", null, null, 0), root, { length: -root.length }, props);
}
function char() {
  return character;
}
function prev() {
  character = position > 0 ? charat(characters, --position) : 0;
  if (column--, character === 10)
    column = 1, line--;
  return character;
}
function next() {
  character = position < length ? charat(characters, position++) : 0;
  if (column++, character === 10)
    column = 1, line++;
  return character;
}
function peek() {
  return charat(characters, position);
}
function caret() {
  return position;
}
function slice(begin, end) {
  return substr(characters, begin, end);
}
function token(type) {
  switch (type) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function alloc(value) {
  return line = column = 1, length = strlen(characters = value), position = 0, [];
}
function dealloc(value) {
  return characters = "", value;
}
function delimit(type) {
  return trim(slice(position - 1, delimiter(type === 91 ? type + 2 : type === 40 ? type + 1 : type)));
}
function whitespace(type) {
  while (character = peek())
    if (character < 33)
      next();
    else
      break;
  return token(type) > 2 || token(character) > 3 ? "" : " ";
}
function escaping(index, count) {
  while (--count && next())
    if (character < 48 || character > 102 || character > 57 && character < 65 || character > 70 && character < 97)
      break;
  return slice(index, caret() + (count < 6 && peek() == 32 && next() == 32));
}
function delimiter(type) {
  while (next())
    switch (character) {
      case type:
        return position;
      case 34:
      case 39:
        if (type !== 34 && type !== 39)
          delimiter(character);
        break;
      case 40:
        if (type === 41)
          delimiter(type);
        break;
      case 92:
        next();
        break;
    }
  return position;
}
function commenter(type, index) {
  while (next())
    if (type + character === 47 + 10)
      break;
    else if (type + character === 42 + 42 && peek() === 47)
      break;
  return "/*" + slice(index, position - 1) + "*" + from(type === 47 ? type : next());
}
function identifier(index) {
  while (!token(peek()))
    next();
  return slice(index, position);
}
function compile(value) {
  return dealloc(parse("", null, null, null, [""], value = alloc(value), 0, [0], value));
}
function parse(value, root, parent, rule, rules, rulesets, pseudo, points, declarations) {
  var index = 0;
  var offset = 0;
  var length2 = pseudo;
  var atrule = 0;
  var property = 0;
  var previous = 0;
  var variable = 1;
  var scanning = 1;
  var ampersand = 1;
  var character2 = 0;
  var type = "";
  var props = rules;
  var children = rulesets;
  var reference = rule;
  var characters2 = type;
  while (scanning)
    switch (previous = character2, character2 = next()) {
      case 40:
        if (previous != 108 && charat(characters2, length2 - 1) == 58) {
          if (indexof(characters2 += replace(delimit(character2), "&", "&\f"), "&\f") != -1)
            ampersand = -1;
          break;
        }
      case 34:
      case 39:
      case 91:
        characters2 += delimit(character2);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        characters2 += whitespace(previous);
        break;
      case 92:
        characters2 += escaping(caret() - 1, 7);
        continue;
      case 47:
        switch (peek()) {
          case 42:
          case 47:
            append(comment(commenter(next(), caret()), root, parent), declarations);
            break;
          default:
            characters2 += "/";
        }
        break;
      case 123 * variable:
        points[index++] = strlen(characters2) * ampersand;
      case 125 * variable:
      case 59:
      case 0:
        switch (character2) {
          case 0:
          case 125:
            scanning = 0;
          case 59 + offset:
            if (ampersand == -1)
              characters2 = replace(characters2, /\f/g, "");
            if (property > 0 && strlen(characters2) - length2)
              append(property > 32 ? declaration(characters2 + ";", rule, parent, length2 - 1) : declaration(replace(characters2, " ", "") + ";", rule, parent, length2 - 2), declarations);
            break;
          case 59:
            characters2 += ";";
          default:
            append(reference = ruleset(characters2, root, parent, index, offset, rules, points, type, props = [], children = [], length2), rulesets);
            if (character2 === 123)
              if (offset === 0)
                parse(characters2, root, reference, reference, props, rulesets, length2, points, children);
              else
                switch (atrule === 99 && charat(characters2, 3) === 110 ? 100 : atrule) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    parse(value, reference, reference, rule && append(ruleset(value, reference, reference, 0, 0, rules, points, type, rules, props = [], length2), children), rules, children, length2, points, rule ? props : children);
                    break;
                  default:
                    parse(characters2, reference, reference, reference, [""], children, 0, points, children);
                }
        }
        index = offset = property = 0, variable = ampersand = 1, type = characters2 = "", length2 = pseudo;
        break;
      case 58:
        length2 = 1 + strlen(characters2), property = previous;
      default:
        if (variable < 1) {
          if (character2 == 123)
            --variable;
          else if (character2 == 125 && variable++ == 0 && prev() == 125)
            continue;
        }
        switch (characters2 += from(character2), character2 * variable) {
          case 38:
            ampersand = offset > 0 ? 1 : (characters2 += "\f", -1);
            break;
          case 44:
            points[index++] = (strlen(characters2) - 1) * ampersand, ampersand = 1;
            break;
          case 64:
            if (peek() === 45)
              characters2 += delimit(next());
            atrule = peek(), offset = length2 = strlen(type = characters2 += identifier(caret())), character2++;
            break;
          case 45:
            if (previous === 45 && strlen(characters2) == 2)
              variable = 0;
        }
    }
  return rulesets;
}
function ruleset(value, root, parent, index, offset, rules, points, type, props, children, length2) {
  var post = offset - 1;
  var rule = offset === 0 ? rules : [""];
  var size = sizeof(rule);
  for (var i = 0, j = 0, k2 = 0; i < index; ++i)
    for (var x2 = 0, y2 = substr(value, post + 1, post = abs(j = points[i])), z2 = value; x2 < size; ++x2)
      if (z2 = trim(j > 0 ? rule[x2] + " " + y2 : replace(y2, /&\f/g, rule[x2])))
        props[k2++] = z2;
  return node(value, root, parent, offset === 0 ? RULESET : type, props, children, length2);
}
function comment(value, root, parent) {
  return node(value, root, parent, COMMENT, from(char()), substr(value, 2, -2), 0);
}
function declaration(value, root, parent, length2) {
  return node(value, root, parent, DECLARATION, substr(value, 0, length2), substr(value, length2 + 1, -1), length2);
}
function serialize(children, callback) {
  var output = "";
  var length2 = sizeof(children);
  for (var i = 0; i < length2; i++)
    output += callback(children[i], i, children, callback) || "";
  return output;
}
function stringify(element, index, children, callback) {
  switch (element.type) {
    case LAYER:
      if (element.children.length)
        break;
    case IMPORT:
    case DECLARATION:
      return element.return = element.return || element.value;
    case COMMENT:
      return "";
    case KEYFRAMES:
      return element.return = element.value + "{" + serialize(element.children, callback) + "}";
    case RULESET:
      element.value = element.props.join(",");
  }
  return strlen(children = serialize(element.children, callback)) ? element.return = element.value + "{" + children + "}" : "";
}
function middleware(collection) {
  var length2 = sizeof(collection);
  return function(element, index, children, callback) {
    var output = "";
    for (var i = 0; i < length2; i++)
      output += collection[i](element, index, children, callback) || "";
    return output;
  };
}
function rulesheet(callback) {
  return function(element) {
    if (!element.root) {
      if (element = element.return)
        callback(element);
    }
  };
}
var identifierWithPointTracking = function identifierWithPointTracking2(begin, points, index) {
  var previous = 0;
  var character2 = 0;
  while (true) {
    previous = character2;
    character2 = peek();
    if (previous === 38 && character2 === 12) {
      points[index] = 1;
    }
    if (token(character2)) {
      break;
    }
    next();
  }
  return slice(begin, position);
};
var toRules = function toRules2(parsed, points) {
  var index = -1;
  var character2 = 44;
  do {
    switch (token(character2)) {
      case 0:
        if (character2 === 38 && peek() === 12) {
          points[index] = 1;
        }
        parsed[index] += identifierWithPointTracking(position - 1, points, index);
        break;
      case 2:
        parsed[index] += delimit(character2);
        break;
      case 4:
        if (character2 === 44) {
          parsed[++index] = peek() === 58 ? "&\f" : "";
          points[index] = parsed[index].length;
          break;
        }
      default:
        parsed[index] += from(character2);
    }
  } while (character2 = next());
  return parsed;
};
var getRules = function getRules2(value, points) {
  return dealloc(toRules(alloc(value), points));
};
var fixedElements = /* @__PURE__ */ new WeakMap();
var compat = function compat2(element) {
  if (element.type !== "rule" || !element.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  element.length < 1) {
    return;
  }
  var value = element.value, parent = element.parent;
  var isImplicitRule = element.column === parent.column && element.line === parent.line;
  while (parent.type !== "rule") {
    parent = parent.parent;
    if (!parent)
      return;
  }
  if (element.props.length === 1 && value.charCodeAt(0) !== 58 && !fixedElements.get(parent)) {
    return;
  }
  if (isImplicitRule) {
    return;
  }
  fixedElements.set(element, true);
  var points = [];
  var rules = getRules(value, points);
  var parentRules = parent.props;
  for (var i = 0, k2 = 0; i < rules.length; i++) {
    for (var j = 0; j < parentRules.length; j++, k2++) {
      element.props[k2] = points[i] ? rules[i].replace(/&\f/g, parentRules[j]) : parentRules[j] + " " + rules[i];
    }
  }
};
var removeLabel = function removeLabel2(element) {
  if (element.type === "decl") {
    var value = element.value;
    if (
      // charcode for l
      value.charCodeAt(0) === 108 && // charcode for b
      value.charCodeAt(2) === 98
    ) {
      element["return"] = "";
      element.value = "";
    }
  }
};
function prefix(value, length2) {
  switch (hash(value, length2)) {
    case 5103:
      return WEBKIT + "print-" + value + value;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return WEBKIT + value + value;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return WEBKIT + value + MOZ + value + MS + value + value;
    case 6828:
    case 4268:
      return WEBKIT + value + MS + value + value;
    case 6165:
      return WEBKIT + value + MS + "flex-" + value + value;
    case 5187:
      return WEBKIT + value + replace(value, /(\w+).+(:[^]+)/, WEBKIT + "box-$1$2" + MS + "flex-$1$2") + value;
    case 5443:
      return WEBKIT + value + MS + "flex-item-" + replace(value, /flex-|-self/, "") + value;
    case 4675:
      return WEBKIT + value + MS + "flex-line-pack" + replace(value, /align-content|flex-|-self/, "") + value;
    case 5548:
      return WEBKIT + value + MS + replace(value, "shrink", "negative") + value;
    case 5292:
      return WEBKIT + value + MS + replace(value, "basis", "preferred-size") + value;
    case 6060:
      return WEBKIT + "box-" + replace(value, "-grow", "") + WEBKIT + value + MS + replace(value, "grow", "positive") + value;
    case 4554:
      return WEBKIT + replace(value, /([^-])(transform)/g, "$1" + WEBKIT + "$2") + value;
    case 6187:
      return replace(replace(replace(value, /(zoom-|grab)/, WEBKIT + "$1"), /(image-set)/, WEBKIT + "$1"), value, "") + value;
    case 5495:
    case 3959:
      return replace(value, /(image-set\([^]*)/, WEBKIT + "$1$`$1");
    case 4968:
      return replace(replace(value, /(.+:)(flex-)?(.*)/, WEBKIT + "box-pack:$3" + MS + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + WEBKIT + value + value;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return replace(value, /(.+)-inline(.+)/, WEBKIT + "$1$2") + value;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (strlen(value) - 1 - length2 > 6)
        switch (charat(value, length2 + 1)) {
          case 109:
            if (charat(value, length2 + 4) !== 45)
              break;
          case 102:
            return replace(value, /(.+:)(.+)-([^]+)/, "$1" + WEBKIT + "$2-$3$1" + MOZ + (charat(value, length2 + 3) == 108 ? "$3" : "$2-$3")) + value;
          case 115:
            return ~indexof(value, "stretch") ? prefix(replace(value, "stretch", "fill-available"), length2) + value : value;
        }
      break;
    case 4949:
      if (charat(value, length2 + 1) !== 115)
        break;
    case 6444:
      switch (charat(value, strlen(value) - 3 - (~indexof(value, "!important") && 10))) {
        case 107:
          return replace(value, ":", ":" + WEBKIT) + value;
        case 101:
          return replace(value, /(.+:)([^;!]+)(;|!.+)?/, "$1" + WEBKIT + (charat(value, 14) === 45 ? "inline-" : "") + "box$3$1" + WEBKIT + "$2$3$1" + MS + "$2box$3") + value;
      }
      break;
    case 5936:
      switch (charat(value, length2 + 11)) {
        case 114:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb") + value;
        case 108:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "tb-rl") + value;
        case 45:
          return WEBKIT + value + MS + replace(value, /[svh]\w+-[tblr]{2}/, "lr") + value;
      }
      return WEBKIT + value + MS + value + value;
  }
  return value;
}
var prefixer = function prefixer2(element, index, children, callback) {
  if (element.length > -1) {
    if (!element["return"])
      switch (element.type) {
        case DECLARATION:
          element["return"] = prefix(element.value, element.length);
          break;
        case KEYFRAMES:
          return serialize([copy(element, {
            value: replace(element.value, "@", "@" + WEBKIT)
          })], callback);
        case RULESET:
          if (element.length)
            return combine(element.props, function(value) {
              switch (match(value, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return serialize([copy(element, {
                    props: [replace(value, /:(read-\w+)/, ":" + MOZ + "$1")]
                  })], callback);
                case "::placeholder":
                  return serialize([copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + WEBKIT + "input-$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, ":" + MOZ + "$1")]
                  }), copy(element, {
                    props: [replace(value, /:(plac\w+)/, MS + "input-$1")]
                  })], callback);
              }
              return "";
            });
      }
  }
};
var defaultStylisPlugins = [prefixer];
var createCache = function createCache2(options) {
  var key = options.key;
  if (key === "css") {
    var ssrStyles = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(ssrStyles, function(node2) {
      var dataEmotionAttribute = node2.getAttribute("data-emotion");
      if (dataEmotionAttribute.indexOf(" ") === -1) {
        return;
      }
      document.head.appendChild(node2);
      node2.setAttribute("data-s", "");
    });
  }
  var stylisPlugins = options.stylisPlugins || defaultStylisPlugins;
  var inserted = {};
  var container;
  var nodesToHydrate = [];
  {
    container = options.container || document.head;
    Array.prototype.forEach.call(
      // this means we will ignore elements which don't have a space in them which
      // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
      document.querySelectorAll('style[data-emotion^="' + key + ' "]'),
      function(node2) {
        var attrib = node2.getAttribute("data-emotion").split(" ");
        for (var i = 1; i < attrib.length; i++) {
          inserted[attrib[i]] = true;
        }
        nodesToHydrate.push(node2);
      }
    );
  }
  var _insert;
  var omnipresentPlugins = [compat, removeLabel];
  {
    var currentSheet;
    var finalizingPlugins = [stringify, rulesheet(function(rule) {
      currentSheet.insert(rule);
    })];
    var serializer = middleware(omnipresentPlugins.concat(stylisPlugins, finalizingPlugins));
    var stylis = function stylis2(styles2) {
      return serialize(compile(styles2), serializer);
    };
    _insert = function insert(selector, serialized, sheet, shouldCache) {
      currentSheet = sheet;
      stylis(selector ? selector + "{" + serialized.styles + "}" : serialized.styles);
      if (shouldCache) {
        cache.inserted[serialized.name] = true;
      }
    };
  }
  var cache = {
    key,
    sheet: new StyleSheet({
      key,
      container,
      nonce: options.nonce,
      speedy: options.speedy,
      prepend: options.prepend,
      insertionPoint: options.insertionPoint
    }),
    nonce: options.nonce,
    inserted,
    registered: {},
    insert: _insert
  };
  cache.sheet.hydrate(nodesToHydrate);
  return cache;
};
var reactIs$1 = { exports: {} };
var reactIs_production_min$1 = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b$1 = "function" === typeof Symbol && Symbol.for, c$1 = b$1 ? Symbol.for("react.element") : 60103, d$1 = b$1 ? Symbol.for("react.portal") : 60106, e$1 = b$1 ? Symbol.for("react.fragment") : 60107, f$1 = b$1 ? Symbol.for("react.strict_mode") : 60108, g$1 = b$1 ? Symbol.for("react.profiler") : 60114, h$1 = b$1 ? Symbol.for("react.provider") : 60109, k$1 = b$1 ? Symbol.for("react.context") : 60110, l$1 = b$1 ? Symbol.for("react.async_mode") : 60111, m$1 = b$1 ? Symbol.for("react.concurrent_mode") : 60111, n$1 = b$1 ? Symbol.for("react.forward_ref") : 60112, p$1 = b$1 ? Symbol.for("react.suspense") : 60113, q$1 = b$1 ? Symbol.for("react.suspense_list") : 60120, r$1 = b$1 ? Symbol.for("react.memo") : 60115, t$1 = b$1 ? Symbol.for("react.lazy") : 60116, v$1 = b$1 ? Symbol.for("react.block") : 60121, w = b$1 ? Symbol.for("react.fundamental") : 60117, x = b$1 ? Symbol.for("react.responder") : 60118, y = b$1 ? Symbol.for("react.scope") : 60119;
function z(a) {
  if ("object" === typeof a && null !== a) {
    var u2 = a.$$typeof;
    switch (u2) {
      case c$1:
        switch (a = a.type, a) {
          case l$1:
          case m$1:
          case e$1:
          case g$1:
          case f$1:
          case p$1:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k$1:
              case n$1:
              case t$1:
              case r$1:
              case h$1:
                return a;
              default:
                return u2;
            }
        }
      case d$1:
        return u2;
    }
  }
}
function A(a) {
  return z(a) === m$1;
}
reactIs_production_min$1.AsyncMode = l$1;
reactIs_production_min$1.ConcurrentMode = m$1;
reactIs_production_min$1.ContextConsumer = k$1;
reactIs_production_min$1.ContextProvider = h$1;
reactIs_production_min$1.Element = c$1;
reactIs_production_min$1.ForwardRef = n$1;
reactIs_production_min$1.Fragment = e$1;
reactIs_production_min$1.Lazy = t$1;
reactIs_production_min$1.Memo = r$1;
reactIs_production_min$1.Portal = d$1;
reactIs_production_min$1.Profiler = g$1;
reactIs_production_min$1.StrictMode = f$1;
reactIs_production_min$1.Suspense = p$1;
reactIs_production_min$1.isAsyncMode = function(a) {
  return A(a) || z(a) === l$1;
};
reactIs_production_min$1.isConcurrentMode = A;
reactIs_production_min$1.isContextConsumer = function(a) {
  return z(a) === k$1;
};
reactIs_production_min$1.isContextProvider = function(a) {
  return z(a) === h$1;
};
reactIs_production_min$1.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === c$1;
};
reactIs_production_min$1.isForwardRef = function(a) {
  return z(a) === n$1;
};
reactIs_production_min$1.isFragment = function(a) {
  return z(a) === e$1;
};
reactIs_production_min$1.isLazy = function(a) {
  return z(a) === t$1;
};
reactIs_production_min$1.isMemo = function(a) {
  return z(a) === r$1;
};
reactIs_production_min$1.isPortal = function(a) {
  return z(a) === d$1;
};
reactIs_production_min$1.isProfiler = function(a) {
  return z(a) === g$1;
};
reactIs_production_min$1.isStrictMode = function(a) {
  return z(a) === f$1;
};
reactIs_production_min$1.isSuspense = function(a) {
  return z(a) === p$1;
};
reactIs_production_min$1.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === e$1 || a === m$1 || a === g$1 || a === f$1 || a === p$1 || a === q$1 || "object" === typeof a && null !== a && (a.$$typeof === t$1 || a.$$typeof === r$1 || a.$$typeof === h$1 || a.$$typeof === k$1 || a.$$typeof === n$1 || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v$1);
};
reactIs_production_min$1.typeOf = z;
{
  reactIs$1.exports = reactIs_production_min$1;
}
var reactIsExports = reactIs$1.exports;
var reactIs = reactIsExports;
var FORWARD_REF_STATICS = {
  "$$typeof": true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  "$$typeof": true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;
var isBrowser = true;
function getRegisteredStyles(registered, registeredStyles, classNames) {
  var rawClassName = "";
  classNames.split(" ").forEach(function(className) {
    if (registered[className] !== void 0) {
      registeredStyles.push(registered[className] + ";");
    } else {
      rawClassName += className + " ";
    }
  });
  return rawClassName;
}
var registerStyles = function registerStyles2(cache, serialized, isStringTag2) {
  var className = cache.key + "-" + serialized.name;
  if (
    // we only need to add the styles to the registered cache if the
    // class name could be used further down
    // the tree but if it's a string tag, we know it won't
    // so we don't have to add it to registered cache.
    // this improves memory usage since we can avoid storing the whole style string
    (isStringTag2 === false || // we need to always store it if we're in compat mode and
    // in node since emotion-server relies on whether a style is in
    // the registered cache to know whether a style is global or not
    // also, note that this check will be dead code eliminated in the browser
    isBrowser === false) && cache.registered[className] === void 0
  ) {
    cache.registered[className] = serialized.styles;
  }
};
var insertStyles = function insertStyles2(cache, serialized, isStringTag2) {
  registerStyles(cache, serialized, isStringTag2);
  var className = cache.key + "-" + serialized.name;
  if (cache.inserted[serialized.name] === void 0) {
    var current = serialized;
    do {
      cache.insert(serialized === current ? "." + className : "", current, cache.sheet, true);
      current = current.next;
    } while (current !== void 0);
  }
};
function murmur2(str) {
  var h2 = 0;
  var k2, i = 0, len = str.length;
  for (; len >= 4; ++i, len -= 4) {
    k2 = str.charCodeAt(i) & 255 | (str.charCodeAt(++i) & 255) << 8 | (str.charCodeAt(++i) & 255) << 16 | (str.charCodeAt(++i) & 255) << 24;
    k2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16);
    k2 ^= /* k >>> r: */
    k2 >>> 24;
    h2 = /* Math.imul(k, m): */
    (k2 & 65535) * 1540483477 + ((k2 >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  switch (len) {
    case 3:
      h2 ^= (str.charCodeAt(i + 2) & 255) << 16;
    case 2:
      h2 ^= (str.charCodeAt(i + 1) & 255) << 8;
    case 1:
      h2 ^= str.charCodeAt(i) & 255;
      h2 = /* Math.imul(h, m): */
      (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  }
  h2 ^= h2 >>> 13;
  h2 = /* Math.imul(h, m): */
  (h2 & 65535) * 1540483477 + ((h2 >>> 16) * 59797 << 16);
  return ((h2 ^ h2 >>> 15) >>> 0).toString(36);
}
var unitlessKeys = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
var hyphenateRegex = /[A-Z]|^ms/g;
var animationRegex = /_EMO_([^_]+?)_([^]*?)_EMO_/g;
var isCustomProperty = function isCustomProperty2(property) {
  return property.charCodeAt(1) === 45;
};
var isProcessableValue = function isProcessableValue2(value) {
  return value != null && typeof value !== "boolean";
};
var processStyleName = /* @__PURE__ */ memoize$1(function(styleName) {
  return isCustomProperty(styleName) ? styleName : styleName.replace(hyphenateRegex, "-$&").toLowerCase();
});
var processStyleValue = function processStyleValue2(key, value) {
  switch (key) {
    case "animation":
    case "animationName": {
      if (typeof value === "string") {
        return value.replace(animationRegex, function(match2, p1, p2) {
          cursor = {
            name: p1,
            styles: p2,
            next: cursor
          };
          return p1;
        });
      }
    }
  }
  if (unitlessKeys[key] !== 1 && !isCustomProperty(key) && typeof value === "number" && value !== 0) {
    return value + "px";
  }
  return value;
};
var noComponentSelectorMessage = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function handleInterpolation(mergedProps, registered, interpolation) {
  if (interpolation == null) {
    return "";
  }
  if (interpolation.__emotion_styles !== void 0) {
    return interpolation;
  }
  switch (typeof interpolation) {
    case "boolean": {
      return "";
    }
    case "object": {
      if (interpolation.anim === 1) {
        cursor = {
          name: interpolation.name,
          styles: interpolation.styles,
          next: cursor
        };
        return interpolation.name;
      }
      if (interpolation.styles !== void 0) {
        var next2 = interpolation.next;
        if (next2 !== void 0) {
          while (next2 !== void 0) {
            cursor = {
              name: next2.name,
              styles: next2.styles,
              next: cursor
            };
            next2 = next2.next;
          }
        }
        var styles2 = interpolation.styles + ";";
        return styles2;
      }
      return createStringFromObject(mergedProps, registered, interpolation);
    }
    case "function": {
      if (mergedProps !== void 0) {
        var previousCursor = cursor;
        var result = interpolation(mergedProps);
        cursor = previousCursor;
        return handleInterpolation(mergedProps, registered, result);
      }
      break;
    }
  }
  if (registered == null) {
    return interpolation;
  }
  var cached = registered[interpolation];
  return cached !== void 0 ? cached : interpolation;
}
function createStringFromObject(mergedProps, registered, obj) {
  var string = "";
  if (Array.isArray(obj)) {
    for (var i = 0; i < obj.length; i++) {
      string += handleInterpolation(mergedProps, registered, obj[i]) + ";";
    }
  } else {
    for (var _key in obj) {
      var value = obj[_key];
      if (typeof value !== "object") {
        if (registered != null && registered[value] !== void 0) {
          string += _key + "{" + registered[value] + "}";
        } else if (isProcessableValue(value)) {
          string += processStyleName(_key) + ":" + processStyleValue(_key, value) + ";";
        }
      } else {
        if (_key === "NO_COMPONENT_SELECTOR" && false) {
          throw new Error(noComponentSelectorMessage);
        }
        if (Array.isArray(value) && typeof value[0] === "string" && (registered == null || registered[value[0]] === void 0)) {
          for (var _i = 0; _i < value.length; _i++) {
            if (isProcessableValue(value[_i])) {
              string += processStyleName(_key) + ":" + processStyleValue(_key, value[_i]) + ";";
            }
          }
        } else {
          var interpolated = handleInterpolation(mergedProps, registered, value);
          switch (_key) {
            case "animation":
            case "animationName": {
              string += processStyleName(_key) + ":" + interpolated + ";";
              break;
            }
            default: {
              string += _key + "{" + interpolated + "}";
            }
          }
        }
      }
    }
  }
  return string;
}
var labelPattern = /label:\s*([^\s;\n{]+)\s*(;|$)/g;
var cursor;
var serializeStyles = function serializeStyles2(args, registered, mergedProps) {
  if (args.length === 1 && typeof args[0] === "object" && args[0] !== null && args[0].styles !== void 0) {
    return args[0];
  }
  var stringMode = true;
  var styles2 = "";
  cursor = void 0;
  var strings = args[0];
  if (strings == null || strings.raw === void 0) {
    stringMode = false;
    styles2 += handleInterpolation(mergedProps, registered, strings);
  } else {
    styles2 += strings[0];
  }
  for (var i = 1; i < args.length; i++) {
    styles2 += handleInterpolation(mergedProps, registered, args[i]);
    if (stringMode) {
      styles2 += strings[i];
    }
  }
  labelPattern.lastIndex = 0;
  var identifierName = "";
  var match2;
  while ((match2 = labelPattern.exec(styles2)) !== null) {
    identifierName += "-" + // $FlowFixMe we know it's not null
    match2[1];
  }
  var name = murmur2(styles2) + identifierName;
  return {
    name,
    styles: styles2,
    next: cursor
  };
};
var syncFallback = function syncFallback2(create) {
  return create();
};
var useInsertionEffect = React$1["useInsertionEffect"] ? React$1["useInsertionEffect"] : false;
var useInsertionEffectAlwaysWithSyncFallback = useInsertionEffect || syncFallback;
var useInsertionEffectWithLayoutFallback = useInsertionEffect || reactExports.useLayoutEffect;
var EmotionCacheContext = /* @__PURE__ */ reactExports.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement !== "undefined" ? /* @__PURE__ */ createCache({
    key: "css"
  }) : null
);
var CacheProvider = EmotionCacheContext.Provider;
var withEmotionCache = function withEmotionCache2(func) {
  return /* @__PURE__ */ reactExports.forwardRef(function(props, ref) {
    var cache = reactExports.useContext(EmotionCacheContext);
    return func(props, cache, ref);
  });
};
var ThemeContext$2 = /* @__PURE__ */ reactExports.createContext({});
var Global = /* @__PURE__ */ withEmotionCache(function(props, cache) {
  var styles2 = props.styles;
  var serialized = serializeStyles([styles2], void 0, reactExports.useContext(ThemeContext$2));
  var sheetRef = reactExports.useRef();
  useInsertionEffectWithLayoutFallback(function() {
    var key = cache.key + "-global";
    var sheet = new cache.sheet.constructor({
      key,
      nonce: cache.sheet.nonce,
      container: cache.sheet.container,
      speedy: cache.sheet.isSpeedy
    });
    var rehydrating = false;
    var node2 = document.querySelector('style[data-emotion="' + key + " " + serialized.name + '"]');
    if (cache.sheet.tags.length) {
      sheet.before = cache.sheet.tags[0];
    }
    if (node2 !== null) {
      rehydrating = true;
      node2.setAttribute("data-emotion", key);
      sheet.hydrate([node2]);
    }
    sheetRef.current = [sheet, rehydrating];
    return function() {
      sheet.flush();
    };
  }, [cache]);
  useInsertionEffectWithLayoutFallback(function() {
    var sheetRefCurrent = sheetRef.current;
    var sheet = sheetRefCurrent[0], rehydrating = sheetRefCurrent[1];
    if (rehydrating) {
      sheetRefCurrent[1] = false;
      return;
    }
    if (serialized.next !== void 0) {
      insertStyles(cache, serialized.next, true);
    }
    if (sheet.tags.length) {
      var element = sheet.tags[sheet.tags.length - 1].nextElementSibling;
      sheet.before = element;
      sheet.flush();
    }
    cache.insert("", serialized, sheet, false);
  }, [cache, serialized.name]);
  return null;
});
function css() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return serializeStyles(args);
}
var keyframes = function keyframes2() {
  var insertable = css.apply(void 0, arguments);
  var name = "animation-" + insertable.name;
  return {
    name,
    styles: "@keyframes " + name + "{" + insertable.styles + "}",
    anim: 1,
    toString: function toString() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
};
var testOmitPropsOnStringTag = isPropValid;
var testOmitPropsOnComponent = function testOmitPropsOnComponent2(key) {
  return key !== "theme";
};
var getDefaultShouldForwardProp = function getDefaultShouldForwardProp2(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96 ? testOmitPropsOnStringTag : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps2(tag, options, isReal) {
  var shouldForwardProp2;
  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp2 = tag.__emotion_forwardProp && optionsShouldForwardProp ? function(propName) {
      return tag.__emotion_forwardProp(propName) && optionsShouldForwardProp(propName);
    } : optionsShouldForwardProp;
  }
  if (typeof shouldForwardProp2 !== "function" && isReal) {
    shouldForwardProp2 = tag.__emotion_forwardProp;
  }
  return shouldForwardProp2;
};
var Insertion = function Insertion2(_ref) {
  var cache = _ref.cache, serialized = _ref.serialized, isStringTag2 = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag2);
  useInsertionEffectAlwaysWithSyncFallback(function() {
    return insertStyles(cache, serialized, isStringTag2);
  });
  return null;
};
var createStyled$1 = function createStyled2(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = isReal && tag.__emotion_base || tag;
  var identifierName;
  var targetClassName;
  if (options !== void 0) {
    identifierName = options.label;
    targetClassName = options.target;
  }
  var shouldForwardProp2 = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp = shouldForwardProp2 || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp("as");
  return function() {
    var args = arguments;
    var styles2 = isReal && tag.__emotion_styles !== void 0 ? tag.__emotion_styles.slice(0) : [];
    if (identifierName !== void 0) {
      styles2.push("label:" + identifierName + ";");
    }
    if (args[0] == null || args[0].raw === void 0) {
      styles2.push.apply(styles2, args);
    } else {
      styles2.push(args[0][0]);
      var len = args.length;
      var i = 1;
      for (; i < len; i++) {
        styles2.push(args[i], args[0][i]);
      }
    }
    var Styled = withEmotionCache(function(props, cache, ref) {
      var FinalTag = shouldUseAs && props.as || baseTag;
      var className = "";
      var classInterpolations = [];
      var mergedProps = props;
      if (props.theme == null) {
        mergedProps = {};
        for (var key in props) {
          mergedProps[key] = props[key];
        }
        mergedProps.theme = reactExports.useContext(ThemeContext$2);
      }
      if (typeof props.className === "string") {
        className = getRegisteredStyles(cache.registered, classInterpolations, props.className);
      } else if (props.className != null) {
        className = props.className + " ";
      }
      var serialized = serializeStyles(styles2.concat(classInterpolations), cache.registered, mergedProps);
      className += cache.key + "-" + serialized.name;
      if (targetClassName !== void 0) {
        className += " " + targetClassName;
      }
      var finalShouldForwardProp = shouldUseAs && shouldForwardProp2 === void 0 ? getDefaultShouldForwardProp(FinalTag) : defaultShouldForwardProp;
      var newProps = {};
      for (var _key in props) {
        if (shouldUseAs && _key === "as")
          continue;
        if (
          // $FlowFixMe
          finalShouldForwardProp(_key)
        ) {
          newProps[_key] = props[_key];
        }
      }
      newProps.className = className;
      newProps.ref = ref;
      return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement(Insertion, {
        cache,
        serialized,
        isStringTag: typeof FinalTag === "string"
      }), /* @__PURE__ */ reactExports.createElement(FinalTag, newProps));
    });
    Styled.displayName = identifierName !== void 0 ? identifierName : "Styled(" + (typeof baseTag === "string" ? baseTag : baseTag.displayName || baseTag.name || "Component") + ")";
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles2;
    Styled.__emotion_forwardProp = shouldForwardProp2;
    Object.defineProperty(Styled, "toString", {
      value: function value() {
        if (targetClassName === void 0 && false) {
          return "NO_COMPONENT_SELECTOR";
        }
        return "." + targetClassName;
      }
    });
    Styled.withComponent = function(nextTag, nextOptions) {
      return createStyled2(nextTag, _extends({}, options, nextOptions, {
        shouldForwardProp: composeShouldForwardProps(Styled, nextOptions, true)
      })).apply(void 0, styles2);
    };
    return Styled;
  };
};
var tags = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
];
var newStyled = createStyled$1.bind();
tags.forEach(function(tagName) {
  newStyled[tagName] = newStyled(tagName);
});
function isEmpty$4(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles$2(props) {
  const {
    styles: styles2,
    defaultTheme: defaultTheme2 = {}
  } = props;
  const globalStyles = typeof styles2 === "function" ? (themeInput) => styles2(isEmpty$4(themeInput) ? defaultTheme2 : themeInput) : styles2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Global, {
    styles: globalStyles
  });
}
function styled$1(tag, options) {
  const stylesFactory = newStyled(tag, options);
  return stylesFactory;
}
const internal_processStyles = (tag, processor) => {
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isPlainObject(item) {
  if (typeof item !== "object" || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if (!isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach((key) => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? _extends({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach((key) => {
      if (key === "__proto__") {
        return;
      }
      if (isPlainObject(source[key]) && key in target && isPlainObject(target[key])) {
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}
function capitalize(string) {
  if (typeof string !== "string") {
    throw new Error(formatMuiErrorMessage(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {
  });
}
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /* @__PURE__ */ reactExports.isValidElement(element) && muiNames.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName
  ) !== -1;
}
function ownerDocument(node2) {
  return node2 && node2.ownerDocument || document;
}
function ownerWindow(node2) {
  const doc = ownerDocument(node2);
  return doc.defaultView || window;
}
function setRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
const useEnhancedEffect = typeof window !== "undefined" ? reactExports.useLayoutEffect : reactExports.useEffect;
let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = reactExports.useState(idOverride);
  const id2 = idOverride || defaultId;
  reactExports.useEffect(() => {
    if (defaultId == null) {
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id2;
}
const maybeReactUseId = React$1["useId".toString()];
function useId(idOverride) {
  if (maybeReactUseId !== void 0) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  return useGlobalId(idOverride);
}
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = "value"
}) {
  const {
    current: isControlled
  } = reactExports.useRef(controlled !== void 0);
  const [valueState, setValue] = reactExports.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  const setValueIfUncontrolled = reactExports.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
function useEventCallback(fn) {
  const ref = reactExports.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return reactExports.useRef((...args) => (
    // @ts-expect-error hide `this`
    (0, ref.current)(...args)
  )).current;
}
function useForkRef(...refs) {
  return reactExports.useMemo(() => {
    if (refs.every((ref) => ref == null)) {
      return null;
    }
    return (instance) => {
      refs.forEach((ref) => {
        setRef(ref, instance);
      });
    };
  }, refs);
}
const UNINITIALIZED = {};
function useLazyRef(init, initArg) {
  const ref = reactExports.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
const EMPTY = [];
function useOnMount(fn) {
  reactExports.useEffect(fn, EMPTY);
}
class Timeout {
  constructor() {
    this.currentId = 0;
    this.clear = () => {
      if (this.currentId !== 0) {
        clearTimeout(this.currentId);
        this.currentId = 0;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = 0;
      fn();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  "datetime-local": true
};
function focusTriggersKeyboardModality(node2) {
  const {
    type,
    tagName
  } = node2;
  if (tagName === "INPUT" && inputTypesWhitelist[type] && !node2.readOnly) {
    return true;
  }
  if (tagName === "TEXTAREA" && !node2.readOnly) {
    return true;
  }
  if (node2.isContentEditable) {
    return true;
  }
  return false;
}
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === "hidden") {
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener("keydown", handleKeyDown, true);
  doc.addEventListener("mousedown", handlePointerDown, true);
  doc.addEventListener("pointerdown", handlePointerDown, true);
  doc.addEventListener("touchstart", handlePointerDown, true);
  doc.addEventListener("visibilitychange", handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(":focus-visible");
  } catch (error) {
  }
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = reactExports.useCallback((node2) => {
    if (node2 != null) {
      prepare(node2.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = reactExports.useRef(false);
  function handleBlurVisible() {
    if (isFocusVisibleRef.current) {
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
function getScrollbarSize(doc) {
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
function resolveProps(defaultProps2, props) {
  const output = _extends({}, props);
  Object.keys(defaultProps2).forEach((propName) => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = _extends({}, defaultProps2[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps2[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        output[propName] = slotProps;
      } else {
        output[propName] = _extends({}, slotProps);
        Object.keys(defaultSlotProps).forEach((slotPropName) => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === void 0) {
      output[propName] = defaultProps2[propName];
    }
  });
  return output;
}
function composeClasses(slots, getUtilityClass, classes = void 0) {
  const output = {};
  Object.keys(slots).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot].reduce((acc, key) => {
        if (key) {
          const utilityClass = getUtilityClass(key);
          if (utilityClass !== "") {
            acc.push(utilityClass);
          }
          if (classes && classes[key]) {
            acc.push(classes[key]);
          }
        }
        return acc;
      }, []).join(" ");
    }
  );
  return output;
}
const defaultGenerator = (componentName) => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
const ClassNameGenerator$1 = ClassNameGenerator;
const globalStateClasses = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function generateUtilityClass(componentName, slot, globalStatePrefix = "Mui") {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator$1.generate(componentName)}-${slot}`;
}
function generateUtilityClasses(componentName, slots, globalStatePrefix = "Mui") {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot, globalStatePrefix);
  });
  return result;
}
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
const _excluded$G = ["values", "unit", "step"];
const sortBreakpointsValues = (values2) => {
  const breakpointsAsArray = Object.keys(values2).map((key) => ({
    key,
    val: values2[key]
  })) || [];
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return _extends({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};
function createBreakpoints(breakpoints) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: values2 = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit = "px",
    step = 5
  } = breakpoints, other = _objectWithoutPropertiesLoose(breakpoints, _excluded$G);
  const sortedValues = sortBreakpointsValues(values2);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values2[key] === "number" ? values2[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values2[start] === "number" ? values2[start] : start}${unit}) and (max-width:${(endIndex !== -1 && typeof values2[keys[endIndex]] === "number" ? values2[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace("@media", "@media not all and");
  }
  return _extends({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}
const shape = {
  borderRadius: 4
};
const shape$1 = shape;
function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return deepmerge(acc, item, {
    clone: false
    // No need to clone deep, it's way faster.
  });
}
const values$1 = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (key) => `@media (min-width:${values$1[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme2 = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === "object") {
    const themeBreakpoints = theme2.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      if (Object.keys(themeBreakpoints.values || values$1).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style2) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style2);
}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  if (typeof breakpointValues !== "object") {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach((breakpoint) => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === "object") {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== "string") {
    return null;
  }
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split(".").reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split(".").reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue$1(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === "function") {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style$1(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;
  const fn = (props) => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme2 = props.theme;
    const themeMapping = getPath(theme2, themeKey) || {};
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue$1(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, propValue, styleFromPropValue);
  };
  fn.propTypes = {};
  fn.filterProps = [prop];
  return fn;
}
function memoize(fn) {
  const cache = {};
  return (arg) => {
    if (cache[arg] === void 0) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
const properties = {
  m: "margin",
  p: "padding"
};
const directions = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
};
const aliases = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
};
const getCssProperties = memoize((prop) => {
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b2] = prop.split("");
  const property = properties[a];
  const direction = directions[b2] || "";
  return Array.isArray(direction) ? direction.map((dir) => property + dir) : [property + direction];
});
const marginKeys = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"];
const paddingKeys = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"];
[...marginKeys, ...paddingKeys];
function createUnaryUnit(theme2, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = getPath(theme2, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === "number") {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing * abs2;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return (abs2) => {
      if (typeof abs2 === "string") {
        return abs2;
      }
      return themeSpacing[abs2];
    };
  }
  if (typeof themeSpacing === "function") {
    return themeSpacing;
  }
  return () => void 0;
}
function createUnarySpacing(theme2) {
  return createUnaryUnit(theme2, "spacing", 8);
}
function getValue(transformer, propValue) {
  if (typeof propValue === "string" || propValue == null) {
    return propValue;
  }
  const abs2 = Math.abs(propValue);
  const transformed = transformer(abs2);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === "number") {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return (propValue) => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return handleBreakpoints(props, propValue, styleFromPropValue);
}
function style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map((prop) => resolveCssProperty(props, keys, prop, transformer)).reduce(merge, {});
}
function margin(props) {
  return style(props, marginKeys);
}
margin.propTypes = {};
margin.filterProps = marginKeys;
function padding(props) {
  return style(props, paddingKeys);
}
padding.propTypes = {};
padding.filterProps = paddingKeys;
function createSpacing(spacingInput = 8) {
  if (spacingInput.mui) {
    return spacingInput;
  }
  const transform = createUnarySpacing({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing.mui = true;
  return spacing;
}
function compose(...styles2) {
  const handlers = styles2.reduce((acc, style2) => {
    style2.filterProps.forEach((prop) => {
      acc[prop] = style2;
    });
    return acc;
  }, {});
  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes = {};
  fn.filterProps = styles2.reduce((acc, style2) => acc.concat(style2.filterProps), []);
  return fn;
}
function borderTransform(value) {
  if (typeof value !== "number") {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return style$1({
    prop,
    themeKey: "borders",
    transform
  });
}
const border = createBorderStyle("border", borderTransform);
const borderTop = createBorderStyle("borderTop", borderTransform);
const borderRight = createBorderStyle("borderRight", borderTransform);
const borderBottom = createBorderStyle("borderBottom", borderTransform);
const borderLeft = createBorderStyle("borderLeft", borderTransform);
const borderColor = createBorderStyle("borderColor");
const borderTopColor = createBorderStyle("borderTopColor");
const borderRightColor = createBorderStyle("borderRightColor");
const borderBottomColor = createBorderStyle("borderBottomColor");
const borderLeftColor = createBorderStyle("borderLeftColor");
const outline = createBorderStyle("outline", borderTransform);
const outlineColor = createBorderStyle("outlineColor");
const borderRadius = (props) => {
  if (props.borderRadius !== void 0 && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, "shape.borderRadius", 4);
    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ["borderRadius"];
compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
const gap = (props) => {
  if (props.gap !== void 0 && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes = {};
gap.filterProps = ["gap"];
const columnGap = (props) => {
  if (props.columnGap !== void 0 && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ["columnGap"];
const rowGap = (props) => {
  if (props.rowGap !== void 0 && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, "spacing", 8);
    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue)
    });
    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ["rowGap"];
const gridColumn = style$1({
  prop: "gridColumn"
});
const gridRow = style$1({
  prop: "gridRow"
});
const gridAutoFlow = style$1({
  prop: "gridAutoFlow"
});
const gridAutoColumns = style$1({
  prop: "gridAutoColumns"
});
const gridAutoRows = style$1({
  prop: "gridAutoRows"
});
const gridTemplateColumns = style$1({
  prop: "gridTemplateColumns"
});
const gridTemplateRows = style$1({
  prop: "gridTemplateRows"
});
const gridTemplateAreas = style$1({
  prop: "gridTemplateAreas"
});
const gridArea = style$1({
  prop: "gridArea"
});
compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
function paletteTransform(value, userValue) {
  if (userValue === "grey") {
    return userValue;
  }
  return value;
}
const color = style$1({
  prop: "color",
  themeKey: "palette",
  transform: paletteTransform
});
const bgcolor = style$1({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
const backgroundColor = style$1({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: paletteTransform
});
compose(color, bgcolor, backgroundColor);
function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = style$1({
  prop: "width",
  transform: sizingTransform
});
const maxWidth = (props) => {
  if (props.maxWidth !== void 0 && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || values$1[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== "px") {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ["maxWidth"];
const minWidth = style$1({
  prop: "minWidth",
  transform: sizingTransform
});
const height = style$1({
  prop: "height",
  transform: sizingTransform
});
const maxHeight = style$1({
  prop: "maxHeight",
  transform: sizingTransform
});
const minHeight = style$1({
  prop: "minHeight",
  transform: sizingTransform
});
style$1({
  prop: "size",
  cssProperty: "width",
  transform: sizingTransform
});
style$1({
  prop: "size",
  cssProperty: "height",
  transform: sizingTransform
});
const boxSizing = style$1({
  prop: "boxSizing"
});
compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
const defaultSxConfig = {
  // borders
  border: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderTop: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderRight: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderBottom: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderLeft: {
    themeKey: "borders",
    transform: borderTransform
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  outline: {
    themeKey: "borders",
    transform: borderTransform
  },
  outlineColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: borderRadius
  },
  // palette
  color: {
    themeKey: "palette",
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: "palette",
    transform: paletteTransform
  },
  // spacing
  p: {
    style: padding
  },
  pt: {
    style: padding
  },
  pr: {
    style: padding
  },
  pb: {
    style: padding
  },
  pl: {
    style: padding
  },
  px: {
    style: padding
  },
  py: {
    style: padding
  },
  padding: {
    style: padding
  },
  paddingTop: {
    style: padding
  },
  paddingRight: {
    style: padding
  },
  paddingBottom: {
    style: padding
  },
  paddingLeft: {
    style: padding
  },
  paddingX: {
    style: padding
  },
  paddingY: {
    style: padding
  },
  paddingInline: {
    style: padding
  },
  paddingInlineStart: {
    style: padding
  },
  paddingInlineEnd: {
    style: padding
  },
  paddingBlock: {
    style: padding
  },
  paddingBlockStart: {
    style: padding
  },
  paddingBlockEnd: {
    style: padding
  },
  m: {
    style: margin
  },
  mt: {
    style: margin
  },
  mr: {
    style: margin
  },
  mb: {
    style: margin
  },
  ml: {
    style: margin
  },
  mx: {
    style: margin
  },
  my: {
    style: margin
  },
  margin: {
    style: margin
  },
  marginTop: {
    style: margin
  },
  marginRight: {
    style: margin
  },
  marginBottom: {
    style: margin
  },
  marginLeft: {
    style: margin
  },
  marginX: {
    style: margin
  },
  marginY: {
    style: margin
  },
  marginInline: {
    style: margin
  },
  marginInlineStart: {
    style: margin
  },
  marginInlineEnd: {
    style: margin
  },
  marginBlock: {
    style: margin
  },
  marginBlockStart: {
    style: margin
  },
  marginBlockEnd: {
    style: margin
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: (value) => ({
      "@media print": {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: "typography"
  }
};
const defaultSxConfig$1 = defaultSxConfig;
function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === "function" ? maybeFn(arg) : maybeFn;
}
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme2, config2) {
    const props = {
      [prop]: val,
      theme: theme2
    };
    const options = config2[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style: style2
    } = options;
    if (val == null) {
      return null;
    }
    if (themeKey === "typography" && val === "inherit") {
      return {
        [prop]: val
      };
    }
    const themeMapping = getPath(theme2, themeKey) || {};
    if (style2) {
      return style2(props);
    }
    const styleFromPropValue = (propValueFinal) => {
      let value = getStyleValue$1(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === "string") {
        value = getStyleValue$1(themeMapping, transform, `${prop}${propValueFinal === "default" ? "" : capitalize(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return handleBreakpoints(props, val, styleFromPropValue);
  }
  function styleFunctionSx2(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme: theme2 = {}
    } = props || {};
    if (!sx) {
      return null;
    }
    const config2 = (_theme$unstable_sxCon = theme2.unstable_sxConfig) != null ? _theme$unstable_sxCon : defaultSxConfig$1;
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === "function") {
        sxObject = sxInput(theme2);
      } else if (typeof sxInput !== "object") {
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = createEmptyBreakpointObject(theme2.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css2 = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme2);
        if (value !== null && value !== void 0) {
          if (typeof value === "object") {
            if (config2[styleKey]) {
              css2 = merge(css2, getThemeValue(styleKey, value, theme2, config2));
            } else {
              const breakpointsValues = handleBreakpoints({
                theme: theme2
              }, value, (x2) => ({
                [styleKey]: x2
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css2[styleKey] = styleFunctionSx2({
                  sx: value,
                  theme: theme2
                });
              } else {
                css2 = merge(css2, breakpointsValues);
              }
            }
          } else {
            css2 = merge(css2, getThemeValue(styleKey, value, theme2, config2));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css2);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx2;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ["sx"];
function applyStyles(key, styles2) {
  const theme2 = this;
  if (theme2.vars && typeof theme2.getColorSchemeSelector === "function") {
    const selector = theme2.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, "*:where($1)");
    return {
      [selector]: styles2
    };
  }
  if (theme2.palette.mode === key) {
    return styles2;
  }
  return {};
}
const _excluded$F = ["breakpoints", "palette", "spacing", "shape"];
function createTheme$1(options = {}, ...args) {
  const {
    breakpoints: breakpointsInput = {},
    palette: paletteInput = {},
    spacing: spacingInput,
    shape: shapeInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$F);
  const breakpoints = createBreakpoints(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = deepmerge({
    breakpoints,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: _extends({
      mode: "light"
    }, paletteInput),
    spacing,
    shape: _extends({}, shape$1, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles;
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme$3(defaultTheme2 = null) {
  const contextTheme = reactExports.useContext(ThemeContext$2);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme2 : contextTheme;
}
const systemDefaultTheme$1 = createTheme$1();
function useTheme$2(defaultTheme2 = systemDefaultTheme$1) {
  return useTheme$3(defaultTheme2);
}
function GlobalStyles$1({
  styles: styles2,
  themeId,
  defaultTheme: defaultTheme2 = {}
}) {
  const upperTheme = useTheme$2(defaultTheme2);
  const globalStyles = typeof styles2 === "function" ? styles2(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles2;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$2, {
    styles: globalStyles
  });
}
const _excluded$E = ["sx"];
const splitProps = (props) => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config2 = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : defaultSxConfig$1;
  Object.keys(props).forEach((prop) => {
    if (config2[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
    sx: inSx
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$E);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === "function") {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!isPlainObject(result)) {
        return systemProps;
      }
      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }
  return _extends({}, otherProps, {
    sx: finalSx
  });
}
function r(e2) {
  var t2, f2, n2 = "";
  if ("string" == typeof e2 || "number" == typeof e2)
    n2 += e2;
  else if ("object" == typeof e2)
    if (Array.isArray(e2)) {
      var o = e2.length;
      for (t2 = 0; t2 < o; t2++)
        e2[t2] && (f2 = r(e2[t2])) && (n2 && (n2 += " "), n2 += f2);
    } else
      for (f2 in e2)
        e2[f2] && (n2 && (n2 += " "), n2 += f2);
  return n2;
}
function clsx() {
  for (var e2, t2, f2 = 0, n2 = "", o = arguments.length; f2 < o; f2++)
    (e2 = arguments[f2]) && (t2 = r(e2)) && (n2 && (n2 += " "), n2 += t2);
  return n2;
}
const _excluded$D = ["className", "component"];
function createBox(options = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2,
    defaultClassName = "MuiBox-root",
    generateClassName
  } = options;
  const BoxRoot = styled$1("div", {
    shouldForwardProp: (prop) => prop !== "theme" && prop !== "sx" && prop !== "as"
  })(styleFunctionSx);
  const Box2 = /* @__PURE__ */ reactExports.forwardRef(function Box3(inProps, ref) {
    const theme2 = useTheme$2(defaultTheme2);
    const _extendSxProp = extendSxProp(inProps), {
      className,
      component = "div"
    } = _extendSxProp, other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$D);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(BoxRoot, _extends({
      as: component,
      ref,
      className: clsx(className, generateClassName ? generateClassName(defaultClassName) : defaultClassName),
      theme: themeId ? theme2[themeId] || theme2 : theme2
    }, other));
  });
  return Box2;
}
const _excluded$C = ["variant"];
function isEmpty$3(string) {
  return string.length === 0;
}
function propsToClassKey(props) {
  const {
    variant
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$C);
  let classKey = variant || "";
  Object.keys(other).sort().forEach((key) => {
    if (key === "color") {
      classKey += isEmpty$3(classKey) ? props[key] : capitalize(props[key]);
    } else {
      classKey += `${isEmpty$3(classKey) ? key : capitalize(key)}${capitalize(props[key].toString())}`;
    }
  });
  return classKey;
}
const _excluded$B = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function isEmpty$2(obj) {
  return Object.keys(obj).length === 0;
}
function isStringTag(tag) {
  return typeof tag === "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}
const getStyleOverrides = (name, theme2) => {
  if (theme2.components && theme2.components[name] && theme2.components[name].styleOverrides) {
    return theme2.components[name].styleOverrides;
  }
  return null;
};
const transformVariants = (variants) => {
  let numOfCallbacks = 0;
  const variantsStyles = {};
  if (variants) {
    variants.forEach((definition) => {
      let key = "";
      if (typeof definition.props === "function") {
        key = `callback${numOfCallbacks}`;
        numOfCallbacks += 1;
      } else {
        key = propsToClassKey(definition.props);
      }
      variantsStyles[key] = definition.style;
    });
  }
  return variantsStyles;
};
const getVariantStyles = (name, theme2) => {
  let variants = [];
  if (theme2 && theme2.components && theme2.components[name] && theme2.components[name].variants) {
    variants = theme2.components[name].variants;
  }
  return transformVariants(variants);
};
const variantsResolver = (props, styles2, variants) => {
  const {
    ownerState = {}
  } = props;
  const variantsStyles = [];
  let numOfCallbacks = 0;
  if (variants) {
    variants.forEach((variant) => {
      let isMatch = true;
      if (typeof variant.props === "function") {
        const propsToCheck = _extends({}, props, ownerState);
        isMatch = variant.props(propsToCheck);
      } else {
        Object.keys(variant.props).forEach((key) => {
          if (ownerState[key] !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (typeof variant.props === "function") {
          variantsStyles.push(styles2[`callback${numOfCallbacks}`]);
        } else {
          variantsStyles.push(styles2[propsToClassKey(variant.props)]);
        }
      }
      if (typeof variant.props === "function") {
        numOfCallbacks += 1;
      }
    });
  }
  return variantsStyles;
};
const themeVariantsResolver = (props, styles2, theme2, name) => {
  var _theme$components;
  const themeVariants = theme2 == null || (_theme$components = theme2.components) == null || (_theme$components = _theme$components[name]) == null ? void 0 : _theme$components.variants;
  return variantsResolver(props, styles2, themeVariants);
};
function shouldForwardProp(prop) {
  return prop !== "ownerState" && prop !== "theme" && prop !== "sx" && prop !== "as";
}
const systemDefaultTheme = createTheme$1();
const lowercaseFirstLetter = (string) => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme: defaultTheme2,
  theme: theme2,
  themeId
}) {
  return isEmpty$2(theme2) ? defaultTheme2 : theme2[themeId] || theme2;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles2) => styles2[slot];
}
const muiStyledFunctionResolver = ({
  styledArg,
  props,
  defaultTheme: defaultTheme2,
  themeId
}) => {
  const resolvedStyles = styledArg(_extends({}, props, {
    theme: resolveTheme(_extends({}, props, {
      defaultTheme: defaultTheme2,
      themeId
    }))
  }));
  let optionalVariants;
  if (resolvedStyles && resolvedStyles.variants) {
    optionalVariants = resolvedStyles.variants;
    delete resolvedStyles.variants;
  }
  if (optionalVariants) {
    const variantsStyles = variantsResolver(props, transformVariants(optionalVariants), optionalVariants);
    return [resolvedStyles, ...variantsStyles];
  }
  return resolvedStyles;
};
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme: defaultTheme2 = systemDefaultTheme,
    rootShouldForwardProp: rootShouldForwardProp2 = shouldForwardProp,
    slotShouldForwardProp: slotShouldForwardProp2 = shouldForwardProp
  } = input;
  const systemSx = (props) => {
    return styleFunctionSx(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme: defaultTheme2,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    internal_processStyles(tag, (styles2) => styles2.filter((style2) => !(style2 != null && style2.__mui_systemSx)));
    const {
      name: componentName,
      slot: componentSlot,
      skipVariantsResolver: inputSkipVariantsResolver,
      skipSx: inputSkipSx,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
    } = inputOptions, options = _objectWithoutPropertiesLoose(inputOptions, _excluded$B);
    const skipVariantsResolver = inputSkipVariantsResolver !== void 0 ? inputSkipVariantsResolver : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      componentSlot && componentSlot !== "Root" && componentSlot !== "root" || false
    );
    const skipSx = inputSkipSx || false;
    let label;
    let shouldForwardPropOption = shouldForwardProp;
    if (componentSlot === "Root" || componentSlot === "root") {
      shouldForwardPropOption = rootShouldForwardProp2;
    } else if (componentSlot) {
      shouldForwardPropOption = slotShouldForwardProp2;
    } else if (isStringTag(tag)) {
      shouldForwardPropOption = void 0;
    }
    const defaultStyledResolver = styled$1(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions ? expressions.map((stylesArg) => {
        if (typeof stylesArg === "function" && stylesArg.__emotion_real !== stylesArg) {
          return (props) => muiStyledFunctionResolver({
            styledArg: stylesArg,
            props,
            defaultTheme: defaultTheme2,
            themeId
          });
        }
        if (isPlainObject(stylesArg)) {
          let transformedStylesArg = stylesArg;
          let styledArgVariants;
          if (stylesArg && stylesArg.variants) {
            styledArgVariants = stylesArg.variants;
            delete transformedStylesArg.variants;
            transformedStylesArg = (props) => {
              let result = stylesArg;
              const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
              variantStyles.forEach((variantStyle) => {
                result = deepmerge(result, variantStyle);
              });
              return result;
            };
          }
          return transformedStylesArg;
        }
        return stylesArg;
      }) : [];
      let transformedStyleArg = styleArg;
      if (isPlainObject(styleArg)) {
        let styledArgVariants;
        if (styleArg && styleArg.variants) {
          styledArgVariants = styleArg.variants;
          delete transformedStyleArg.variants;
          transformedStyleArg = (props) => {
            let result = styleArg;
            const variantStyles = variantsResolver(props, transformVariants(styledArgVariants), styledArgVariants);
            variantStyles.forEach((variantStyle) => {
              result = deepmerge(result, variantStyle);
            });
            return result;
          };
        }
      } else if (typeof styleArg === "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      styleArg.__emotion_real !== styleArg) {
        transformedStyleArg = (props) => muiStyledFunctionResolver({
          styledArg: styleArg,
          props,
          defaultTheme: defaultTheme2,
          themeId
        });
      }
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme2 = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          const styleOverrides = getStyleOverrides(componentName, theme2);
          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] = typeof slotStyle === "function" ? slotStyle(_extends({}, props, {
                theme: theme2
              })) : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }
          return null;
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme2 = resolveTheme(_extends({}, props, {
            defaultTheme: defaultTheme2,
            themeId
          }));
          return themeVariantsResolver(props, getVariantStyles(componentName, theme2), theme2, componentName);
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill("");
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
function getThemeProps(params) {
  const {
    theme: theme2,
    name,
    props
  } = params;
  if (!theme2 || !theme2.components || !theme2.components[name] || !theme2.components[name].defaultProps) {
    return props;
  }
  return resolveProps(theme2.components[name].defaultProps, props);
}
function useThemeProps$1({
  props,
  name,
  defaultTheme: defaultTheme2,
  themeId
}) {
  let theme2 = useTheme$2(defaultTheme2);
  if (themeId) {
    theme2 = theme2[themeId] || theme2;
  }
  const mergedProps = getThemeProps({
    theme: theme2,
    name,
    props
  });
  return mergedProps;
}
function clampWrapper(value, min = 0, max = 1) {
  return clamp(value, min, max);
}
function hexToRgb(color2) {
  color2 = color2.slice(1);
  const re2 = new RegExp(`.{1,${color2.length >= 6 ? 2 : 1}}`, "g");
  let colors = color2.match(re2);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function decomposeColor(color2) {
  if (color2.type) {
    return color2;
  }
  if (color2.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color2));
  }
  const marker = color2.indexOf("(");
  const type = color2.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(formatMuiErrorMessage(9, color2));
  }
  let values2 = color2.substring(marker + 1, color2.length - 1);
  let colorSpace;
  if (type === "color") {
    values2 = values2.split(" ");
    colorSpace = values2.shift();
    if (values2.length === 4 && values2[3].charAt(0) === "/") {
      values2[3] = values2[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(formatMuiErrorMessage(10, colorSpace));
    }
  } else {
    values2 = values2.split(",");
  }
  values2 = values2.map((value) => parseFloat(value));
  return {
    type,
    values: values2,
    colorSpace
  };
}
function recomposeColor(color2) {
  const {
    type,
    colorSpace
  } = color2;
  let {
    values: values2
  } = color2;
  if (type.indexOf("rgb") !== -1) {
    values2 = values2.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values2[1] = `${values2[1]}%`;
    values2[2] = `${values2[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values2 = `${colorSpace} ${values2.join(" ")}`;
  } else {
    values2 = `${values2.join(", ")}`;
  }
  return `${type}(${values2})`;
}
function hslToRgb(color2) {
  color2 = decomposeColor(color2);
  const {
    values: values2
  } = color2;
  const h2 = values2[0];
  const s = values2[1] / 100;
  const l2 = values2[2] / 100;
  const a = s * Math.min(l2, 1 - l2);
  const f2 = (n2, k2 = (n2 + h2 / 30) % 12) => l2 - a * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (color2.type === "hsla") {
    type += "a";
    rgb.push(values2[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
function getLuminance(color2) {
  color2 = decomposeColor(color2);
  let rgb = color2.type === "hsl" || color2.type === "hsla" ? decomposeColor(hslToRgb(color2)).values : color2.values;
  rgb = rgb.map((val) => {
    if (color2.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function alpha(color2, value) {
  color2 = decomposeColor(color2);
  value = clampWrapper(value);
  if (color2.type === "rgb" || color2.type === "hsl") {
    color2.type += "a";
  }
  if (color2.type === "color") {
    color2.values[3] = `/${value}`;
  } else {
    color2.values[3] = value;
  }
  return recomposeColor(color2);
}
function darken(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clampWrapper(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] *= 1 - coefficient;
  } else if (color2.type.indexOf("rgb") !== -1 || color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color2);
}
function lighten(color2, coefficient) {
  color2 = decomposeColor(color2);
  coefficient = clampWrapper(coefficient);
  if (color2.type.indexOf("hsl") !== -1) {
    color2.values[2] += (100 - color2.values[2]) * coefficient;
  } else if (color2.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (255 - color2.values[i]) * coefficient;
    }
  } else if (color2.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color2.values[i] += (1 - color2.values[i]) * coefficient;
    }
  }
  return recomposeColor(color2);
}
const ThemeContext = /* @__PURE__ */ reactExports.createContext(null);
const ThemeContext$1 = ThemeContext;
function useTheme$1() {
  const theme2 = reactExports.useContext(ThemeContext$1);
  return theme2;
}
const hasSymbol = typeof Symbol === "function" && Symbol.for;
const nested = hasSymbol ? Symbol.for("mui.nested") : "__THEME_NESTED__";
function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === "function") {
    const mergedTheme = localTheme(outerTheme);
    return mergedTheme;
  }
  return _extends({}, outerTheme, localTheme);
}
function ThemeProvider$2(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme$1();
  const theme2 = reactExports.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$1.Provider, {
    value: theme2,
    children
  });
}
const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return reactExports.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === "function") {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? _extends({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? _extends({}, upperTheme, {
      [themeId]: localTheme
    }) : _extends({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}
function ThemeProvider$1(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = useTheme$3(EMPTY_THEME);
  const upperPrivateTheme = useTheme$1() || EMPTY_THEME;
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$2, {
    theme: privateTheme,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeContext$2.Provider, {
      value: engineTheme,
      children
    })
  });
}
const THEME_ID = "$$material";
function createMixins(breakpoints, mixins) {
  return _extends({
    toolbar: {
      minHeight: 56,
      [breakpoints.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [breakpoints.up("sm")]: {
        minHeight: 64
      }
    }
  }, mixins);
}
const common = {
  black: "#000",
  white: "#fff"
};
const common$1 = common;
const grey = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
};
const grey$1 = grey;
const purple = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
};
const purple$1 = purple;
const red = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
};
const red$1 = red;
const orange = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
};
const orange$1 = orange;
const blue = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
};
const blue$1 = blue;
const lightBlue = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
};
const lightBlue$1 = lightBlue;
const green = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
};
const green$1 = green;
const _excluded$A = ["mode", "contrastThreshold", "tonalOffset"];
const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: common$1.white,
    default: common$1.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: common$1.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: common$1.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === "light") {
      intent.light = lighten(intent.main, tonalOffsetLight);
    } else if (direction === "dark") {
      intent.dark = darken(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = "light") {
  if (mode === "dark") {
    return {
      main: blue$1[200],
      light: blue$1[50],
      dark: blue$1[400]
    };
  }
  return {
    main: blue$1[700],
    light: blue$1[400],
    dark: blue$1[800]
  };
}
function getDefaultSecondary(mode = "light") {
  if (mode === "dark") {
    return {
      main: purple$1[200],
      light: purple$1[50],
      dark: purple$1[400]
    };
  }
  return {
    main: purple$1[500],
    light: purple$1[300],
    dark: purple$1[700]
  };
}
function getDefaultError(mode = "light") {
  if (mode === "dark") {
    return {
      main: red$1[500],
      light: red$1[300],
      dark: red$1[700]
    };
  }
  return {
    main: red$1[700],
    light: red$1[400],
    dark: red$1[800]
  };
}
function getDefaultInfo(mode = "light") {
  if (mode === "dark") {
    return {
      main: lightBlue$1[400],
      light: lightBlue$1[300],
      dark: lightBlue$1[700]
    };
  }
  return {
    main: lightBlue$1[700],
    light: lightBlue$1[500],
    dark: lightBlue$1[900]
  };
}
function getDefaultSuccess(mode = "light") {
  if (mode === "dark") {
    return {
      main: green$1[400],
      light: green$1[300],
      dark: green$1[700]
    };
  }
  return {
    main: green$1[800],
    light: green$1[500],
    dark: green$1[900]
  };
}
function getDefaultWarning(mode = "light") {
  if (mode === "dark") {
    return {
      main: orange$1[400],
      light: orange$1[300],
      dark: orange$1[700]
    };
  }
  return {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: orange$1[500],
    dark: orange$1[900]
  };
}
function createPalette(palette) {
  const {
    mode = "light",
    contrastThreshold = 3,
    tonalOffset = 0.2
  } = palette, other = _objectWithoutPropertiesLoose(palette, _excluded$A);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);
  function getContrastText(background) {
    const contrastText = getContrastRatio(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    return contrastText;
  }
  const augmentColor = ({
    color: color2,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color2 = _extends({}, color2);
    if (!color2.main && color2[mainShade]) {
      color2.main = color2[mainShade];
    }
    if (!color2.hasOwnProperty("main")) {
      throw new Error(formatMuiErrorMessage(11, name ? ` (${name})` : "", mainShade));
    }
    if (typeof color2.main !== "string") {
      throw new Error(formatMuiErrorMessage(12, name ? ` (${name})` : "", JSON.stringify(color2.main)));
    }
    addLightOrDark(color2, "light", lightShade, tonalOffset);
    addLightOrDark(color2, "dark", darkShade, tonalOffset);
    if (!color2.contrastText) {
      color2.contrastText = getContrastText(color2.main);
    }
    return color2;
  };
  const modes = {
    dark,
    light
  };
  const paletteOutput = deepmerge(_extends({
    // A collection of common colors.
    common: _extends({}, common$1),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: "success"
    }),
    // The grey colors.
    grey: grey$1,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
const _excluded$z = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: "uppercase"
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
function createTypography(palette, typography) {
  const _ref = typeof typography === "function" ? typography(palette) : typography, {
    fontFamily = defaultFontFamily,
    // The default font size of the Material Specification.
    fontSize = 14,
    // px
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize = 16,
    // Apply the CSS properties to all the variants.
    allVariants,
    pxToRem: pxToRem2
  } = _ref, other = _objectWithoutPropertiesLoose(_ref, _excluded$z);
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || ((size) => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => _extends({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return deepmerge(_extends({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false
    // No need to clone deep
  });
}
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(",");
}
const shadows = ["none", createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
const _excluded$y = ["duration", "easing", "delay"];
const easing = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height2) {
  if (!height2) {
    return 0;
  }
  const constant = height2 / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = _extends({}, easing, inputTransitions.easing);
  const mergedDuration = _extends({}, duration, inputTransitions.duration);
  const create = (props = ["all"], options = {}) => {
    const {
      duration: durationOption = mergedDuration.standard,
      easing: easingOption = mergedEasing.easeInOut,
      delay = 0
    } = options;
    _objectWithoutPropertiesLoose(options, _excluded$y);
    return (Array.isArray(props) ? props : [props]).map((animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`).join(",");
  };
  return _extends({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
const zIndex = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
const zIndex$1 = zIndex;
const _excluded$x = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function createTheme(options = {}, ...args) {
  const {
    mixins: mixinsInput = {},
    palette: paletteInput = {},
    transitions: transitionsInput = {},
    typography: typographyInput = {}
  } = options, other = _objectWithoutPropertiesLoose(options, _excluded$x);
  if (options.vars) {
    throw new Error(formatMuiErrorMessage(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = createTheme$1(options);
  let muiTheme = deepmerge(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: _extends({}, zIndex$1)
  });
  muiTheme = deepmerge(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => deepmerge(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = _extends({}, defaultSxConfig$1, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return styleFunctionSx({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
function isUnitless(value) {
  return String(parseFloat(value)).length === String(value).length;
}
function getUnit(input) {
  return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || "";
}
function toUnitless(length2) {
  return parseFloat(length2);
}
function convertLength(baseFontSize) {
  return (length2, toUnit) => {
    const fromUnit = getUnit(length2);
    if (fromUnit === toUnit) {
      return length2;
    }
    let pxLength = toUnitless(length2);
    if (fromUnit !== "px") {
      if (fromUnit === "em") {
        pxLength = toUnitless(length2) * toUnitless(baseFontSize);
      } else if (fromUnit === "rem") {
        pxLength = toUnitless(length2) * toUnitless(baseFontSize);
      }
    }
    let outputLength = pxLength;
    if (toUnit !== "px") {
      if (toUnit === "em") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else if (toUnit === "rem") {
        outputLength = pxLength / toUnitless(baseFontSize);
      } else {
        return length2;
      }
    }
    return parseFloat(outputLength.toFixed(5)) + toUnit;
  };
}
function alignProperty({
  size,
  grid
}) {
  const sizeBelow = size - size % grid;
  const sizeAbove = sizeBelow + grid;
  return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
}
function fontGrid({
  lineHeight,
  pixels,
  htmlFontSize
}) {
  return pixels / (lineHeight * htmlFontSize);
}
function responsiveProperty({
  cssProperty,
  min,
  max,
  unit = "rem",
  breakpoints = [600, 900, 1200],
  transform = null
}) {
  const output = {
    [cssProperty]: `${min}${unit}`
  };
  const factor = (max - min) / breakpoints[breakpoints.length - 1];
  breakpoints.forEach((breakpoint) => {
    let value = min + factor * breakpoint;
    if (transform !== null) {
      value = transform(value);
    }
    output[`@media (min-width:${breakpoint}px)`] = {
      [cssProperty]: `${Math.round(value * 1e4) / 1e4}${unit}`
    };
  });
  return output;
}
function responsiveFontSizes(themeInput, options = {}) {
  const {
    breakpoints = ["sm", "md", "lg"],
    disableAlign = false,
    factor = 2,
    variants = ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline"]
  } = options;
  const theme2 = _extends({}, themeInput);
  theme2.typography = _extends({}, theme2.typography);
  const typography = theme2.typography;
  const convert = convertLength(typography.htmlFontSize);
  const breakpointValues = breakpoints.map((x2) => theme2.breakpoints.values[x2]);
  variants.forEach((variant) => {
    const style2 = typography[variant];
    const remFontSize = parseFloat(convert(style2.fontSize, "rem"));
    if (remFontSize <= 1) {
      return;
    }
    const maxFontSize = remFontSize;
    const minFontSize = 1 + (maxFontSize - 1) / factor;
    let {
      lineHeight
    } = style2;
    if (!isUnitless(lineHeight) && !disableAlign) {
      throw new Error(formatMuiErrorMessage(6));
    }
    if (!isUnitless(lineHeight)) {
      lineHeight = parseFloat(convert(lineHeight, "rem")) / parseFloat(remFontSize);
    }
    let transform = null;
    if (!disableAlign) {
      transform = (value) => alignProperty({
        size: value,
        grid: fontGrid({
          pixels: 4,
          lineHeight,
          htmlFontSize: typography.htmlFontSize
        })
      });
    }
    typography[variant] = _extends({}, style2, responsiveProperty({
      cssProperty: "fontSize",
      min: minFontSize,
      max: maxFontSize,
      unit: "rem",
      breakpoints: breakpointValues,
      transform
    }));
  });
  return theme2;
}
const defaultTheme$1 = createTheme();
const defaultTheme$2 = defaultTheme$1;
function useTheme() {
  const theme2 = useTheme$2(defaultTheme$2);
  return theme2[THEME_ID] || theme2;
}
function useThemeProps({
  props,
  name
}) {
  return useThemeProps$1({
    props,
    name,
    defaultTheme: defaultTheme$2,
    themeId: THEME_ID
  });
}
const rootShouldForwardProp = (prop) => shouldForwardProp(prop) && prop !== "classes";
const slotShouldForwardProp = shouldForwardProp;
const styled = createStyled({
  themeId: THEME_ID,
  defaultTheme: defaultTheme$2,
  rootShouldForwardProp
});
const _excluded$w = ["theme"];
function ThemeProvider(_ref) {
  let {
    theme: themeInput
  } = _ref, props = _objectWithoutPropertiesLoose(_ref, _excluded$w);
  const scopedTheme = themeInput[THEME_ID];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeProvider$1, _extends({}, props, {
    themeId: scopedTheme ? THEME_ID : void 0,
    theme: scopedTheme || themeInput
  }));
}
const getOverlayAlpha = (elevation) => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
const boxClasses = generateUtilityClasses("MuiBox", ["root"]);
const boxClasses$1 = boxClasses;
const defaultTheme = createTheme();
const Box = createBox({
  themeId: THEME_ID,
  defaultTheme,
  defaultClassName: boxClasses$1.root,
  generateClassName: ClassNameGenerator$1.generate
});
const Box$1 = Box;
function _setPrototypeOf(o, p2) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf2(o2, p3) {
    o2.__proto__ = p3;
    return o2;
  };
  return _setPrototypeOf(o, p2);
}
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
const config = {
  disabled: false
};
const TransitionGroupContext = React.createContext(null);
var forceReflow = function forceReflow2(node2) {
  return node2.scrollTop;
};
var UNMOUNTED = "unmounted";
var EXITED = "exited";
var ENTERING = "entering";
var ENTERED = "entered";
var EXITING = "exiting";
var Transition = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(Transition2, _React$Component);
  function Transition2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context;
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;
    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }
    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }
  Transition2.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;
    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }
    return null;
  };
  var _proto = Transition2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;
    if (prevProps !== this.props) {
      var status = this.state.status;
      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }
    this.updateStatus(false, nextStatus);
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };
  _proto.getTimeouts = function getTimeouts() {
    var timeout2 = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout2;
    if (timeout2 != null && typeof timeout2 !== "number") {
      exit = timeout2.exit;
      enter = timeout2.enter;
      appear = timeout2.appear !== void 0 ? timeout2.appear : enter;
    }
    return {
      exit,
      enter,
      appear
    };
  };
  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }
    if (nextStatus !== null) {
      this.cancelNextCallback();
      if (nextStatus === ENTERING) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
          if (node2)
            forceReflow(node2);
        }
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };
  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;
    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;
    var _ref2 = this.props.nodeRef ? [appearing] : [ReactDOM.findDOMNode(this), appearing], maybeNode = _ref2[0], maybeAppearing = _ref2[1];
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function() {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }
    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function() {
      _this2.props.onEntering(maybeNode, maybeAppearing);
      _this2.onTransitionEnd(enterTimeout, function() {
        _this2.safeSetState({
          status: ENTERED
        }, function() {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };
  _proto.performExit = function performExit() {
    var _this3 = this;
    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? void 0 : ReactDOM.findDOMNode(this);
    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function() {
        _this3.props.onExited(maybeNode);
      });
      return;
    }
    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function() {
      _this3.props.onExiting(maybeNode);
      _this3.onTransitionEnd(timeouts.exit, function() {
        _this3.safeSetState({
          status: EXITED
        }, function() {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };
  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };
  _proto.safeSetState = function safeSetState(nextState, callback) {
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };
  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;
    var active = true;
    this.nextCallback = function(event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };
    this.nextCallback.cancel = function() {
      active = false;
    };
    return this.nextCallback;
  };
  _proto.onTransitionEnd = function onTransitionEnd(timeout2, handler) {
    this.setNextCallback(handler);
    var node2 = this.props.nodeRef ? this.props.nodeRef.current : ReactDOM.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout2 == null && !this.props.addEndListener;
    if (!node2 || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node2, this.nextCallback], maybeNode = _ref3[0], maybeNextCallback = _ref3[1];
      this.props.addEndListener(maybeNode, maybeNextCallback);
    }
    if (timeout2 != null) {
      setTimeout(this.nextCallback, timeout2);
    }
  };
  _proto.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }
    var _this$props = this.props, children = _this$props.children;
    _this$props.in;
    _this$props.mountOnEnter;
    _this$props.unmountOnExit;
    _this$props.appear;
    _this$props.enter;
    _this$props.exit;
    _this$props.timeout;
    _this$props.addEndListener;
    _this$props.onEnter;
    _this$props.onEntering;
    _this$props.onEntered;
    _this$props.onExit;
    _this$props.onExiting;
    _this$props.onExited;
    _this$props.nodeRef;
    var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === "function" ? children(status, childProps) : React.cloneElement(React.Children.only(children), childProps))
    );
  };
  return Transition2;
}(React.Component);
Transition.contextType = TransitionGroupContext;
Transition.propTypes = {};
function noop() {
}
Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
const Transition$1 = Transition;
function _assertThisInitialized(self2) {
  if (self2 === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self2;
}
function getChildMapping(children, mapFn) {
  var mapper = function mapper2(child) {
    return mapFn && reactExports.isValidElement(child) ? mapFn(child) : child;
  };
  var result = /* @__PURE__ */ Object.create(null);
  if (children)
    reactExports.Children.map(children, function(c2) {
      return c2;
    }).forEach(function(child) {
      result[child.key] = mapper(child);
    });
  return result;
}
function mergeChildMappings(prev2, next2) {
  prev2 = prev2 || {};
  next2 = next2 || {};
  function getValueForKey(key) {
    return key in next2 ? next2[key] : prev2[key];
  }
  var nextKeysPending = /* @__PURE__ */ Object.create(null);
  var pendingKeys = [];
  for (var prevKey in prev2) {
    if (prevKey in next2) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }
  var i;
  var childMapping = {};
  for (var nextKey in next2) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }
  return childMapping;
}
function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}
function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function(child) {
    return reactExports.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, "appear", props),
      enter: getProp(child, "enter", props),
      exit: getProp(child, "exit", props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function(key) {
    var child = children[key];
    if (!reactExports.isValidElement(child))
      return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = reactExports.isValidElement(prevChild) && !prevChild.props.in;
    if (hasNext && (!hasPrev || isLeaving)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      children[key] = reactExports.cloneElement(child, {
        in: false
      });
    } else if (hasNext && hasPrev && reactExports.isValidElement(prevChild)) {
      children[key] = reactExports.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, "exit", nextProps),
        enter: getProp(child, "enter", nextProps)
      });
    }
  });
  return children;
}
var values = Object.values || function(obj) {
  return Object.keys(obj).map(function(k2) {
    return obj[k2];
  });
};
var defaultProps = {
  component: "div",
  childFactory: function childFactory(child) {
    return child;
  }
};
var TransitionGroup = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(TransitionGroup2, _React$Component);
  function TransitionGroup2(props, context) {
    var _this;
    _this = _React$Component.call(this, props, context) || this;
    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this));
    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited,
      firstRender: true
    };
    return _this;
  }
  var _proto = TransitionGroup2.prototype;
  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };
  TransitionGroup2.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children, handleExited = _ref.handleExited, firstRender = _ref.firstRender;
    return {
      children: firstRender ? getInitialChildMapping(nextProps, handleExited) : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };
  _proto.handleExited = function handleExited(child, node2) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping)
      return;
    if (child.props.onExited) {
      child.props.onExited(node2);
    }
    if (this.mounted) {
      this.setState(function(state) {
        var children = _extends({}, state.children);
        delete children[child.key];
        return {
          children
        };
      });
    }
  };
  _proto.render = function render() {
    var _this$props = this.props, Component = _this$props.component, childFactory2 = _this$props.childFactory, props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);
    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory2);
    delete props.appear;
    delete props.enter;
    delete props.exit;
    if (Component === null) {
      return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
        value: contextValue
      }, children);
    }
    return /* @__PURE__ */ React.createElement(TransitionGroupContext.Provider, {
      value: contextValue
    }, /* @__PURE__ */ React.createElement(Component, props, children));
  };
  return TransitionGroup2;
}(React.Component);
TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;
const TransitionGroup$1 = TransitionGroup;
const reflow = (node2) => node2.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing: easing2,
    style: style2 = {}
  } = props;
  return {
    duration: (_style$transitionDura = style2.transitionDuration) != null ? _style$transitionDura : typeof timeout === "number" ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style2.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing2 === "object" ? easing2[options.mode] : easing2,
    delay: style2.transitionDelay
  };
}
const _excluded$v = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles$3 = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
};
const isWebKit154 = typeof navigator !== "undefined" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
const Grow = /* @__PURE__ */ reactExports.forwardRef(function Grow2(props, ref) {
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$v);
  const timer = useTimeout();
  const autoTimeout = reactExports.useRef();
  const theme2 = useTheme();
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme2.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme2.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme2.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(",");
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    let duration2;
    if (timeout === "auto") {
      duration2 = theme2.transitions.getAutoHeightDuration(node2.clientHeight);
      autoTimeout.current = duration2;
    } else {
      duration2 = transitionDuration;
    }
    node2.style.transition = [theme2.transitions.create("opacity", {
      duration: duration2,
      delay
    }), theme2.transitions.create("transform", {
      duration: isWebKit154 ? duration2 : duration2 * 0.666,
      delay: isWebKit154 ? delay : delay || duration2 * 0.333,
      easing: transitionTimingFunction
    })].join(",");
    node2.style.opacity = 0;
    node2.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (timeout === "auto") {
      timer.start(autoTimeout.current || 0, next2);
    }
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === "auto" ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$3[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
Grow.muiSupportAuto = true;
const Grow$1 = Grow;
const LogoImg = "data:image/png;base64,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";
function getSvgIconUtilityClass(slot) {
  return generateUtilityClass("MuiSvgIcon", slot);
}
generateUtilityClasses("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const _excluded$u = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];
const useUtilityClasses$o = (ownerState) => {
  const {
    color: color2,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ["root", color2 !== "inherit" && `color${capitalize(color2)}`, `fontSize${capitalize(fontSize)}`]
  };
  return composeClasses(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = styled("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "inherit" && styles2[`color${capitalize(ownerState.color)}`], styles2[`fontSize${capitalize(ownerState.fontSize)}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (_theme$transitions = theme2.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, "fill", {
      duration: (_theme$transitions2 = theme2.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((_theme$typography = theme2.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || "1.25rem",
      medium: ((_theme$typography2 = theme2.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || "1.5rem",
      large: ((_theme$typography3 = theme2.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || "2.1875rem"
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme2.vars || theme2).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme2.vars || theme2).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme2.vars || theme2).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: void 0
    }[ownerState.color]
  };
});
const SvgIcon = /* @__PURE__ */ reactExports.forwardRef(function SvgIcon2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSvgIcon"
  });
  const {
    children,
    className,
    color: color2 = "inherit",
    component = "svg",
    fontSize = "medium",
    htmlColor,
    inheritViewBox = false,
    titleAccess,
    viewBox = "0 0 24 24"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$u);
  const hasSvgAsChild = /* @__PURE__ */ reactExports.isValidElement(children) && children.type === "svg";
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = useUtilityClasses$o(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(SvgIconRoot, _extends({
    as: component,
    className: clsx(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? void 0 : true,
    role: titleAccess ? "img" : void 0,
    ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /* @__PURE__ */ jsxRuntimeExports.jsx("title", {
      children: titleAccess
    }) : null]
  }));
});
SvgIcon.muiName = "SvgIcon";
function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(SvgIcon, _extends({
      "data-testid": `${displayName}Icon`,
      ref
    }, props, {
      children: path
    }));
  }
  Component.muiName = SvgIcon.muiName;
  return /* @__PURE__ */ reactExports.memo(/* @__PURE__ */ reactExports.forwardRef(Component));
}
var reactIs_production_min = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = Symbol.for("react.element"), c = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), e = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), g = Symbol.for("react.provider"), h = Symbol.for("react.context"), k = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), n = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), q = Symbol.for("react.lazy"), t = Symbol.for("react.offscreen"), u;
u = Symbol.for("react.module.reference");
function v(a) {
  if ("object" === typeof a && null !== a) {
    var r2 = a.$$typeof;
    switch (r2) {
      case b:
        switch (a = a.type, a) {
          case d:
          case f:
          case e:
          case m:
          case n:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case h:
              case l:
              case q:
              case p:
              case g:
                return a;
              default:
                return r2;
            }
        }
      case c:
        return r2;
    }
  }
}
reactIs_production_min.ContextConsumer = h;
reactIs_production_min.ContextProvider = g;
reactIs_production_min.Element = b;
reactIs_production_min.ForwardRef = l;
reactIs_production_min.Fragment = d;
reactIs_production_min.Lazy = q;
reactIs_production_min.Memo = p;
reactIs_production_min.Portal = c;
reactIs_production_min.Profiler = f;
reactIs_production_min.StrictMode = e;
reactIs_production_min.Suspense = m;
reactIs_production_min.SuspenseList = n;
reactIs_production_min.isAsyncMode = function() {
  return false;
};
reactIs_production_min.isConcurrentMode = function() {
  return false;
};
reactIs_production_min.isContextConsumer = function(a) {
  return v(a) === h;
};
reactIs_production_min.isContextProvider = function(a) {
  return v(a) === g;
};
reactIs_production_min.isElement = function(a) {
  return "object" === typeof a && null !== a && a.$$typeof === b;
};
reactIs_production_min.isForwardRef = function(a) {
  return v(a) === l;
};
reactIs_production_min.isFragment = function(a) {
  return v(a) === d;
};
reactIs_production_min.isLazy = function(a) {
  return v(a) === q;
};
reactIs_production_min.isMemo = function(a) {
  return v(a) === p;
};
reactIs_production_min.isPortal = function(a) {
  return v(a) === c;
};
reactIs_production_min.isProfiler = function(a) {
  return v(a) === f;
};
reactIs_production_min.isStrictMode = function(a) {
  return v(a) === e;
};
reactIs_production_min.isSuspense = function(a) {
  return v(a) === m;
};
reactIs_production_min.isSuspenseList = function(a) {
  return v(a) === n;
};
reactIs_production_min.isValidElementType = function(a) {
  return "string" === typeof a || "function" === typeof a || a === d || a === f || a === e || a === m || a === n || a === t || "object" === typeof a && null !== a && (a.$$typeof === q || a.$$typeof === p || a.$$typeof === g || a.$$typeof === h || a.$$typeof === l || a.$$typeof === u || void 0 !== a.getModuleId) ? true : false;
};
reactIs_production_min.typeOf = v;
function getPaperUtilityClass(slot) {
  return generateUtilityClass("MuiPaper", slot);
}
generateUtilityClasses("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const _excluded$t = ["className", "component", "elevation", "square", "variant"];
const useUtilityClasses$n = (ownerState) => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, !square && "rounded", variant === "elevation" && `elevation${elevation}`]
  };
  return composeClasses(slots, getPaperUtilityClass, classes);
};
const PaperRoot = styled("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], !ownerState.square && styles2.rounded, ownerState.variant === "elevation" && styles2[`elevation${ownerState.elevation}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  var _theme$vars$overlays;
  return _extends({
    backgroundColor: (theme2.vars || theme2).palette.background.paper,
    color: (theme2.vars || theme2).palette.text.primary,
    transition: theme2.transitions.create("box-shadow")
  }, !ownerState.square && {
    borderRadius: theme2.shape.borderRadius
  }, ownerState.variant === "outlined" && {
    border: `1px solid ${(theme2.vars || theme2).palette.divider}`
  }, ownerState.variant === "elevation" && _extends({
    boxShadow: (theme2.vars || theme2).shadows[ownerState.elevation]
  }, !theme2.vars && theme2.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${alpha("#fff", getOverlayAlpha(ownerState.elevation))}, ${alpha("#fff", getOverlayAlpha(ownerState.elevation))})`
  }, theme2.vars && {
    backgroundImage: (_theme$vars$overlays = theme2.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /* @__PURE__ */ reactExports.forwardRef(function Paper2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiPaper"
  });
  const {
    className,
    component = "div",
    elevation = 1,
    square = false,
    variant = "elevation"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$t);
  const ownerState = _extends({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = useUtilityClasses$n(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PaperRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other));
});
const Paper$1 = Paper;
function isHostComponent(element) {
  return typeof element === "string";
}
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === void 0 || isHostComponent(elementType)) {
    return otherProps;
  }
  return _extends({}, otherProps, {
    ownerState: _extends({}, otherProps.ownerState, ownerState)
  });
}
function extractEventHandlers(object, excludeKeys = []) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => prop.match(/^on[A-Z]/) && typeof object[prop] === "function" && !excludeKeys.includes(prop)).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === "function") {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
function omitEventHandlers(object) {
  if (object === void 0) {
    return {};
  }
  const result = {};
  Object.keys(object).filter((prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === "function")).forEach((prop) => {
    result[prop] = object[prop];
  });
  return result;
}
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    const joinedClasses2 = clsx(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle2 = _extends({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props2 = _extends({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses2.length > 0) {
      props2.className = joinedClasses2;
    }
    if (Object.keys(mergedStyle2).length > 0) {
      props2.style = mergedStyle2;
    }
    return {
      props: props2,
      internalRef: void 0
    };
  }
  const eventHandlers = extractEventHandlers(_extends({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = clsx(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = _extends({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = _extends({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
const _excluded$s = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
    elementType,
    externalSlotProps,
    ownerState,
    skipResolvingSlotProps = false
  } = parameters, rest = _objectWithoutPropertiesLoose(parameters, _excluded$s);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps(_extends({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState(elementType, _extends({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = reactExports.useState(false);
  const rippleClassName = clsx(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = clsx(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  reactExports.useEffect(() => {
    if (!inProp && onExited != null) {
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return void 0;
  }, [onExited, inProp, timeout]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
      className: childClassName
    })
  });
}
const touchRippleClasses = generateUtilityClasses("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]);
const _excluded$r = ["center", "classes", "className"];
let _$1 = (t2) => t2, _t$1, _t2$1, _t3$1, _t4$1;
const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = keyframes(_t$1 || (_t$1 = _$1`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = keyframes(_t2$1 || (_t2$1 = _$1`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = keyframes(_t3$1 || (_t3$1 = _$1`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = styled("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
});
const TouchRippleRipple = styled(Ripple, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(_t4$1 || (_t4$1 = _$1`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme: theme2
}) => theme2.transitions.easing.easeInOut, touchRippleClasses.ripplePulsate, ({
  theme: theme2
}) => theme2.transitions.duration.shorter, touchRippleClasses.child, touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme: theme2
}) => theme2.transitions.easing.easeInOut, touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme: theme2
}) => theme2.transitions.easing.easeInOut);
const TouchRipple = /* @__PURE__ */ reactExports.forwardRef(function TouchRipple2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTouchRipple"
  });
  const {
    center: centerProp = false,
    classes = {},
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$r);
  const [ripples, setRipples] = reactExports.useState([]);
  const nextKey = reactExports.useRef(0);
  const rippleCallback = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);
  const ignoringMouseDown = reactExports.useRef(false);
  const startTimer = useTimeout();
  const startTimerCommit = reactExports.useRef(null);
  const container = reactExports.useRef(null);
  const startCommit = reactExports.useCallback((params) => {
    const {
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize,
      cb: cb2
    } = params;
    setRipples((oldRipples) => [...oldRipples, /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRipple, {
      classes: {
        ripple: clsx(classes.ripple, touchRippleClasses.ripple),
        rippleVisible: clsx(classes.rippleVisible, touchRippleClasses.rippleVisible),
        ripplePulsate: clsx(classes.ripplePulsate, touchRippleClasses.ripplePulsate),
        child: clsx(classes.child, touchRippleClasses.child),
        childLeaving: clsx(classes.childLeaving, touchRippleClasses.childLeaving),
        childPulsate: clsx(classes.childPulsate, touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate2,
      rippleX,
      rippleY,
      rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb2;
  }, [classes]);
  const start = reactExports.useCallback((event = {}, options = {}, cb2 = () => {
  }) => {
    const {
      pulsate: pulsate2 = false,
      center = centerProp || options.pulsate,
      fakeElement = false
      // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === "mousedown" && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === "touchstart") {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === void 0 || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }
    if (event != null && event.touches) {
      if (startTimerCommit.current === null) {
        startTimerCommit.current = () => {
          startCommit({
            pulsate: pulsate2,
            rippleX,
            rippleY,
            rippleSize,
            cb: cb2
          });
        };
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate: pulsate2,
        rippleX,
        rippleY,
        rippleSize,
        cb: cb2
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = reactExports.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = reactExports.useCallback((event, cb2) => {
    startTimer.clear();
    if ((event == null ? void 0 : event.type) === "touchend" && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb2);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples((oldRipples) => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb2;
  }, [startTimer]);
  reactExports.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRippleRoot, _extends({
    className: clsx(touchRippleClasses.root, classes.root, className),
    ref: container
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionGroup$1, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
const TouchRipple$1 = TouchRipple;
function getButtonBaseUtilityClass(slot) {
  return generateUtilityClass("MuiButtonBase", slot);
}
const buttonBaseClasses = generateUtilityClasses("MuiButtonBase", ["root", "disabled", "focusVisible"]);
const _excluded$q = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];
const useUtilityClasses$m = (ownerState) => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", focusVisible && "focusVisible"]
  };
  const composedClasses = composeClasses(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = styled("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${buttonBaseClasses.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
});
const ButtonBase = /* @__PURE__ */ reactExports.forwardRef(function ButtonBase2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiButtonBase"
  });
  const {
    action,
    centerRipple = false,
    children,
    className,
    component = "button",
    disabled = false,
    disableRipple = false,
    disableTouchRipple = false,
    focusRipple = false,
    LinkComponent = "a",
    onBlur,
    onClick,
    onContextMenu,
    onDragLeave,
    onFocus,
    onFocusVisible,
    onKeyDown,
    onKeyUp,
    onMouseDown,
    onMouseLeave,
    onMouseUp,
    onTouchEnd,
    onTouchMove,
    onTouchStart,
    tabIndex = 0,
    TouchRippleProps,
    touchRippleRef,
    type
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$q);
  const buttonRef = reactExports.useRef(null);
  const rippleRef = reactExports.useRef(null);
  const handleRippleRef = useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = reactExports.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  reactExports.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = reactExports.useState(false);
  reactExports.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  reactExports.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return useEventCallback((event) => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler("start", onMouseDown);
  const handleContextMenu = useRippleHandler("stop", onContextMenu);
  const handleDragLeave = useRippleHandler("stop", onDragLeave);
  const handleMouseUp = useRippleHandler("stop", onMouseUp);
  const handleMouseLeave = useRippleHandler("stop", (event) => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler("start", onTouchStart);
  const handleTouchEnd = useRippleHandler("stop", onTouchEnd);
  const handleTouchMove = useRippleHandler("stop", onTouchMove);
  const handleBlur = useRippleHandler("stop", (event) => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = useEventCallback((event) => {
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== "button" && !(button.tagName === "A" && button.href);
  };
  const keydownRef = reactExports.useRef(false);
  const handleKeyDown2 = useEventCallback((event) => {
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === " ") {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === " ") {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === "Enter" && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = useEventCallback((event) => {
    if (focusRipple && event.key === " " && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === " " && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === "button" && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === "button") {
    buttonProps.type = type === void 0 ? "button" : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = "button";
    }
    if (disabled) {
      buttonProps["aria-disabled"] = disabled;
    }
  }
  const handleRef = useForkRef(ref, focusVisibleRef, buttonRef);
  const ownerState = _extends({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = useUtilityClasses$m(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(ButtonBaseRoot, _extends({
    as: ComponentProp,
    className: clsx(classes.root, className),
    ownerState,
    onBlur: handleBlur,
    onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown2,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ jsxRuntimeExports.jsx(TouchRipple$1, _extends({
        ref: handleRippleRef,
        center: centerRipple
      }, TouchRippleProps))
    ) : null]
  }));
});
const ButtonBase$1 = ButtonBase;
function getIconButtonUtilityClass(slot) {
  return generateUtilityClass("MuiIconButton", slot);
}
const iconButtonClasses = generateUtilityClasses("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]);
const _excluded$p = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];
const useUtilityClasses$l = (ownerState) => {
  const {
    classes,
    disabled,
    color: color2,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", color2 !== "default" && `color${capitalize(color2)}`, edge && `edge${capitalize(edge)}`, `size${capitalize(size)}`]
  };
  return composeClasses(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = styled(ButtonBase$1, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.color !== "default" && styles2[`color${capitalize(ownerState.color)}`], ownerState.edge && styles2[`edge${capitalize(ownerState.edge)}`], styles2[`size${capitalize(ownerState.size)}`]];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: theme2.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme2.vars || theme2).palette.action.active,
  transition: theme2.transitions.create("background-color", {
    duration: theme2.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  "&:hover": {
    backgroundColor: theme2.vars ? `rgba(${theme2.vars.palette.action.activeChannel} / ${theme2.vars.palette.action.hoverOpacity})` : alpha(theme2.palette.action.active, theme2.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, ownerState.edge === "start" && {
  marginLeft: ownerState.size === "small" ? -3 : -12
}, ownerState.edge === "end" && {
  marginRight: ownerState.size === "small" ? -3 : -12
}), ({
  theme: theme2,
  ownerState
}) => {
  var _palette;
  const palette = (_palette = (theme2.vars || theme2).palette) == null ? void 0 : _palette[ownerState.color];
  return _extends({}, ownerState.color === "inherit" && {
    color: "inherit"
  }, ownerState.color !== "inherit" && ownerState.color !== "default" && _extends({
    color: palette == null ? void 0 : palette.main
  }, !ownerState.disableRipple && {
    "&:hover": _extends({}, palette && {
      backgroundColor: theme2.vars ? `rgba(${palette.mainChannel} / ${theme2.vars.palette.action.hoverOpacity})` : alpha(palette.main, theme2.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), ownerState.size === "small" && {
    padding: 5,
    fontSize: theme2.typography.pxToRem(18)
  }, ownerState.size === "large" && {
    padding: 12,
    fontSize: theme2.typography.pxToRem(28)
  }, {
    [`&.${iconButtonClasses.disabled}`]: {
      backgroundColor: "transparent",
      color: (theme2.vars || theme2).palette.action.disabled
    }
  });
});
const IconButton = /* @__PURE__ */ reactExports.forwardRef(function IconButton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiIconButton"
  });
  const {
    edge = false,
    children,
    className,
    color: color2 = "default",
    disabled = false,
    disableFocusRipple = false,
    size = "medium"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$p);
  const ownerState = _extends({}, props, {
    edge,
    color: color2,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = useUtilityClasses$l(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(IconButtonRoot, _extends({
    className: clsx(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled,
    ref,
    ownerState
  }, other, {
    children
  }));
});
const IconButton$1 = IconButton;
function getTypographyUtilityClass(slot) {
  return generateUtilityClass("MuiTypography", slot);
}
generateUtilityClasses("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const _excluded$o = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];
const useUtilityClasses$k = (ownerState) => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ["root", variant, ownerState.align !== "inherit" && `align${capitalize(align)}`, gutterBottom && "gutterBottom", noWrap && "noWrap", paragraph && "paragraph"]
  };
  return composeClasses(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = styled("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.variant && styles2[ownerState.variant], ownerState.align !== "inherit" && styles2[`align${capitalize(ownerState.align)}`], ownerState.noWrap && styles2.noWrap, ownerState.gutterBottom && styles2.gutterBottom, ownerState.paragraph && styles2.paragraph];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  margin: 0
}, ownerState.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, ownerState.variant !== "inherit" && theme2.typography[ownerState.variant], ownerState.align !== "inherit" && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, ownerState.gutterBottom && {
  marginBottom: "0.35em"
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
};
const colorTransformations = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
};
const transformDeprecatedColors = (color2) => {
  return colorTransformations[color2] || color2;
};
const Typography = /* @__PURE__ */ reactExports.forwardRef(function Typography2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiTypography"
  });
  const color2 = transformDeprecatedColors(themeProps.color);
  const props = extendSxProp(_extends({}, themeProps, {
    color: color2
  }));
  const {
    align = "inherit",
    className,
    component,
    gutterBottom = false,
    noWrap = false,
    paragraph = false,
    variant = "body1",
    variantMapping = defaultVariantMapping
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$o);
  const ownerState = _extends({}, props, {
    align,
    color: color2,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? "p" : variantMapping[variant] || defaultVariantMapping[variant]) || "span";
  const classes = useUtilityClasses$k(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TypographyRoot, _extends({
    as: Component,
    ref,
    ownerState,
    className: clsx(classes.root, className)
  }, other));
});
const Typography$1 = Typography;
const candidatesSelector = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function getTabIndex(node2) {
  const tabindexAttr = parseInt(node2.getAttribute("tabindex") || "", 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }
  if (node2.contentEditable === "true" || (node2.nodeName === "AUDIO" || node2.nodeName === "VIDEO" || node2.nodeName === "DETAILS") && node2.getAttribute("tabindex") === null) {
    return 0;
  }
  return node2.tabIndex;
}
function isNonTabbableRadio(node2) {
  if (node2.tagName !== "INPUT" || node2.type !== "radio") {
    return false;
  }
  if (!node2.name) {
    return false;
  }
  const getRadio = (selector) => node2.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node2.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node2.name}"]`);
  }
  return roving !== node2;
}
function isNodeMatchingSelectorFocusable(node2) {
  if (node2.disabled || node2.tagName === "INPUT" && node2.type === "hidden" || isNonTabbableRadio(node2)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node2, i) => {
    const nodeTabIndex = getTabIndex(node2);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node2)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node2);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node2
      });
    }
  });
  return orderedTabNodes.sort((a, b2) => a.tabIndex === b2.tabIndex ? a.documentOrder - b2.documentOrder : a.tabIndex - b2.tabIndex).map((a) => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = reactExports.useRef(false);
  const sentinelStart = reactExports.useRef(null);
  const sentinelEnd = reactExports.useRef(null);
  const nodeToRestore = reactExports.useRef(null);
  const reactFocusEventTarget = reactExports.useRef(null);
  const activated = reactExports.useRef(false);
  const rootRef = reactExports.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute("tabIndex")) {
        rootRef.current.setAttribute("tabIndex", "-1");
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      if (!disableRestoreFocus) {
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
  }, [open]);
  reactExports.useEffect(() => {
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== "Tab") {
        return;
      }
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }
      if (rootElement.contains(doc.activeElement)) {
        return;
      }
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === "Tab");
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== "string" && typeof focusPrevious !== "string") {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener("focusin", contain);
    doc.addEventListener("keydown", loopFocus, true);
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === "BODY") {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener("focusin", contain);
      doc.removeEventListener("keydown", loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ reactExports.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
function getContainer$1(container) {
  return typeof container === "function" ? container() : container;
}
const Portal = /* @__PURE__ */ reactExports.forwardRef(function Portal2(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = reactExports.useState(null);
  const handleRef = useForkRef(/* @__PURE__ */ reactExports.isValidElement(children) ? children.ref : null, forwardedRef);
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer$1(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return void 0;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if (/* @__PURE__ */ reactExports.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /* @__PURE__ */ reactExports.cloneElement(children, newProps);
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
      children
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: mountNode ? /* @__PURE__ */ reactDomExports.createPortal(children, mountNode) : mountNode
  });
});
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute("aria-hidden", "true");
  } else {
    element.removeAttribute("aria-hidden");
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  const forbiddenTagNames = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === "INPUT" && element.getAttribute("type") === "hidden";
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: "padding-right",
        el: container
      });
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;
      const fixedElements2 = ownerDocument(container).querySelectorAll(".mui-fixed");
      [].forEach.call(fixedElements2, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: "padding-right",
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === "HTML" && containerWindow.getComputedStyle(parent).overflowY === "scroll" ? parent : container;
    }
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: "overflow",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: "overflow-x",
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: "overflow-y",
      el: scrollContainer
    });
    scrollContainer.style.overflow = "hidden";
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el: el2,
      property
    }) => {
      if (value) {
        el2.style.setProperty(property, value);
      } else {
        el2.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute("aria-hidden") === "true") {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, (item) => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, (item) => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);
    if (containerInfo.modals.length === 0) {
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
function getContainer(container) {
  return typeof container === "function" ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty("in") : false;
}
const defaultManager = new ModalManager();
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;
  const modal = reactExports.useRef({});
  const mountNodeRef = reactExports.useRef(null);
  const modalRef = reactExports.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = reactExports.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters["aria-hidden"] === "false" || parameters["aria-hidden"] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = reactExports.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback((node2) => {
    mountNodeRef.current = node2;
    if (!node2) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = reactExports.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  reactExports.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  reactExports.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);
    if (event.key !== "Escape" || event.which === 229 || // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      event.stopPropagation();
      if (onClose) {
        onClose(event, "escapeKeyDown");
      }
    }
  };
  const createHandleBackdropClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, "backdropClick");
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = _extends({}, propsEventHandlers, otherHandlers);
    return _extends({
      role: "presentation"
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return _extends({
      "aria-hidden": true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps2 = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
const _excluded$n = ["onChange", "maxRows", "minRows", "style", "value"];
function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const styles$2 = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function isEmpty$1(obj) {
  return obj === void 0 || obj === null || Object.keys(obj).length === 0 || obj.outerHeightStyle === 0 && !obj.overflow;
}
const TextareaAutosize = /* @__PURE__ */ reactExports.forwardRef(function TextareaAutosize2(props, forwardedRef) {
  const {
    onChange,
    maxRows,
    minRows = 1,
    style: style2,
    value
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$n);
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef(null);
  const handleRef = useForkRef(forwardedRef, inputRef);
  const shadowRef = reactExports.useRef(null);
  const renders = reactExports.useRef(0);
  const [state, setState] = reactExports.useState({
    outerHeightStyle: 0
  });
  const getUpdatedState = reactExports.useCallback(() => {
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    const computedStyle = containerWindow.getComputedStyle(input);
    if (computedStyle.width === "0px") {
      return {
        outerHeightStyle: 0
      };
    }
    const inputShallow = shadowRef.current;
    inputShallow.style.width = computedStyle.width;
    inputShallow.value = input.value || props.placeholder || "x";
    if (inputShallow.value.slice(-1) === "\n") {
      inputShallow.value += " ";
    }
    const boxSizing2 = computedStyle.boxSizing;
    const padding2 = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border2 = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);
    const innerHeight = inputShallow.scrollHeight;
    inputShallow.value = "x";
    const singleRowHeight = inputShallow.scrollHeight;
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);
    const outerHeightStyle = outerHeight + (boxSizing2 === "border-box" ? padding2 + border2 : 0);
    const overflow = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflow
    };
  }, [maxRows, minRows, props.placeholder]);
  const updateState = (prevState, newState) => {
    const {
      outerHeightStyle,
      overflow
    } = newState;
    if (renders.current < 20 && (outerHeightStyle > 0 && Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) > 1 || prevState.overflow !== overflow)) {
      renders.current += 1;
      return {
        overflow,
        outerHeightStyle
      };
    }
    return prevState;
  };
  const syncHeight = reactExports.useCallback(() => {
    const newState = getUpdatedState();
    if (isEmpty$1(newState)) {
      return;
    }
    setState((prevState) => updateState(prevState, newState));
  }, [getUpdatedState]);
  useEnhancedEffect(() => {
    const syncHeightWithFlushSync = () => {
      const newState = getUpdatedState();
      if (isEmpty$1(newState)) {
        return;
      }
      reactDomExports.flushSync(() => {
        setState((prevState) => updateState(prevState, newState));
      });
    };
    const handleResize = () => {
      renders.current = 0;
      syncHeightWithFlushSync();
    };
    let rAF;
    const debounceHandleResize = debounce(handleResize);
    const input = inputRef.current;
    const containerWindow = ownerWindow(input);
    containerWindow.addEventListener("resize", debounceHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(input);
    }
    return () => {
      debounceHandleResize.clear();
      cancelAnimationFrame(rAF);
      containerWindow.removeEventListener("resize", debounceHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [getUpdatedState]);
  useEnhancedEffect(() => {
    syncHeight();
  });
  reactExports.useEffect(() => {
    renders.current = 0;
  }, [value]);
  const handleChange = (event) => {
    renders.current = 0;
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("textarea", _extends({
      value,
      onChange: handleChange,
      ref: handleRef,
      rows: minRows,
      style: _extends({
        height: state.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: state.overflow ? "hidden" : void 0
      }, style2)
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: shadowRef,
      tabIndex: -1,
      style: _extends({}, styles$2.shadow, style2, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === "undefined") {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}
const FormControlContext = /* @__PURE__ */ reactExports.createContext(void 0);
const FormControlContext$1 = FormControlContext;
function useFormControl() {
  return reactExports.useContext(FormControlContext$1);
}
function GlobalStyles(props) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles$1, _extends({}, props, {
    defaultTheme: defaultTheme$2,
    themeId: THEME_ID
  }));
}
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== "" || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== "");
}
function isAdornedStart(obj) {
  return obj.startAdornment;
}
function getInputBaseUtilityClass(slot) {
  return generateUtilityClass("MuiInputBase", slot);
}
const inputBaseClasses = generateUtilityClasses("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]);
const inputBaseClasses$1 = inputBaseClasses;
const _excluded$m = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];
const rootOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.root, ownerState.formControl && styles2.formControl, ownerState.startAdornment && styles2.adornedStart, ownerState.endAdornment && styles2.adornedEnd, ownerState.error && styles2.error, ownerState.size === "small" && styles2.sizeSmall, ownerState.multiline && styles2.multiline, ownerState.color && styles2[`color${capitalize(ownerState.color)}`], ownerState.fullWidth && styles2.fullWidth, ownerState.hiddenLabel && styles2.hiddenLabel];
};
const inputOverridesResolver = (props, styles2) => {
  const {
    ownerState
  } = props;
  return [styles2.input, ownerState.size === "small" && styles2.inputSizeSmall, ownerState.multiline && styles2.inputMultiline, ownerState.type === "search" && styles2.inputTypeSearch, ownerState.startAdornment && styles2.inputAdornedStart, ownerState.endAdornment && styles2.inputAdornedEnd, ownerState.hiddenLabel && styles2.inputHiddenLabel];
};
const useUtilityClasses$j = (ownerState) => {
  const {
    classes,
    color: color2,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", fullWidth && "fullWidth", focused && "focused", formControl && "formControl", size && size !== "medium" && `size${capitalize(size)}`, multiline && "multiline", startAdornment && "adornedStart", endAdornment && "adornedEnd", hiddenLabel && "hiddenLabel", readOnly && "readOnly"],
    input: ["input", disabled && "disabled", type === "search" && "inputTypeSearch", multiline && "inputMultiline", size === "small" && "inputSizeSmall", hiddenLabel && "inputHiddenLabel", startAdornment && "inputAdornedStart", endAdornment && "inputAdornedEnd", readOnly && "readOnly"]
  };
  return composeClasses(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = styled("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme: theme2,
  ownerState
}) => _extends({}, theme2.typography.body1, {
  color: (theme2.vars || theme2).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${inputBaseClasses$1.disabled}`]: {
    color: (theme2.vars || theme2).palette.text.disabled,
    cursor: "default"
  }
}, ownerState.multiline && _extends({
  padding: "4px 0 5px"
}, ownerState.size === "small" && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: "100%"
}));
const InputBaseComponent = styled("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme: theme2,
  ownerState
}) => {
  const light2 = theme2.palette.mode === "light";
  const placeholder = _extends({
    color: "currentColor"
  }, theme2.vars ? {
    opacity: theme2.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  }, {
    transition: theme2.transitions.create("opacity", {
      duration: theme2.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: "0 !important"
  };
  const placeholderVisible = theme2.vars ? {
    opacity: theme2.vars.opacity.inputPlaceholder
  } : {
    opacity: light2 ? 0.42 : 0.5
  };
  return _extends({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": placeholder,
    "&::-moz-placeholder": placeholder,
    // Firefox 19+
    "&:-ms-input-placeholder": placeholder,
    // IE11
    "&::-ms-input-placeholder": placeholder,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${inputBaseClasses$1.formControl} &`]: {
      "&::-webkit-input-placeholder": placeholderHidden,
      "&::-moz-placeholder": placeholderHidden,
      // Firefox 19+
      "&:-ms-input-placeholder": placeholderHidden,
      // IE11
      "&::-ms-input-placeholder": placeholderHidden,
      // Edge
      "&:focus::-webkit-input-placeholder": placeholderVisible,
      "&:focus::-moz-placeholder": placeholderVisible,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": placeholderVisible,
      // IE11
      "&:focus::-ms-input-placeholder": placeholderVisible
      // Edge
    },
    [`&.${inputBaseClasses$1.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme2.vars || theme2).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, ownerState.size === "small" && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, ownerState.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
});
const inputGlobalStyles = /* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
});
const InputBase = /* @__PURE__ */ reactExports.forwardRef(function InputBase2(inProps, ref) {
  var _slotProps$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInputBase"
  });
  const {
    "aria-describedby": ariaDescribedby,
    autoComplete,
    autoFocus,
    className,
    components = {},
    componentsProps = {},
    defaultValue,
    disabled,
    disableInjectingGlobalStyles,
    endAdornment,
    fullWidth = false,
    id: id2,
    inputComponent = "input",
    inputProps: inputPropsProp = {},
    inputRef: inputRefProp,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onClick,
    onFocus,
    onKeyDown,
    onKeyUp,
    placeholder,
    readOnly,
    renderSuffix,
    rows,
    slotProps = {},
    slots = {},
    startAdornment,
    type = "text",
    value: valueProp
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$m);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = reactExports.useRef(value != null);
  const inputRef = reactExports.useRef();
  const handleInputRefWarning = reactExports.useCallback((instance) => {
  }, []);
  const handleInputRef = useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = reactExports.useState(false);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;
  reactExports.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = reactExports.useCallback((obj) => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = (event) => {
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = (event) => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error(formatMuiErrorMessage(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }
    if (onChange) {
      onChange(event, ...args);
    }
  };
  reactExports.useEffect(() => {
    checkDirty(inputRef.current);
  }, []);
  const handleClick = (event) => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === "input") {
    if (rows) {
      inputProps = _extends({
        type: void 0,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = _extends({
        type: void 0,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize;
  }
  const handleAutoFill = (event) => {
    checkDirty(event.animationName === "mui-auto-fill-cancel" ? inputRef.current : {
      value: "x"
    });
  };
  reactExports.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = useUtilityClasses$j(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input3 = slots.input || components.Input || InputBaseComponent;
  inputProps = _extends({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /* @__PURE__ */ jsxRuntimeExports.jsxs(Root, _extends({}, rootProps, !isHostComponent(Root) && {
      ownerState: _extends({}, ownerState, rootProps.ownerState)
    }, {
      ref,
      onClick: handleClick
    }, other, {
      className: clsx(classes.root, rootProps.className, className, readOnly && "MuiInputBase-readOnly"),
      children: [startAdornment, /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
        value: null,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input3, _extends({
          ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete,
          autoFocus,
          defaultValue,
          disabled: fcs.disabled,
          id: id2,
          onAnimationStart: handleAutoFill,
          name,
          placeholder,
          readOnly,
          required: fcs.required,
          rows,
          value,
          onKeyDown,
          onKeyUp,
          type
        }, inputProps, !isHostComponent(Input3) && {
          as: InputComponent,
          ownerState: _extends({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: clsx(classes.input, inputProps.className, readOnly && "MuiInputBase-readOnly"),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix(_extends({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
const InputBase$1 = InputBase;
function getInputUtilityClass(slot) {
  return generateUtilityClass("MuiInput", slot);
}
const inputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiInput", ["root", "underline", "input"]));
const inputClasses$1 = inputClasses;
function getOutlinedInputUtilityClass(slot) {
  return generateUtilityClass("MuiOutlinedInput", slot);
}
const outlinedInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiOutlinedInput", ["root", "notchedOutline", "input"]));
const outlinedInputClasses$1 = outlinedInputClasses;
function getFilledInputUtilityClass(slot) {
  return generateUtilityClass("MuiFilledInput", slot);
}
const filledInputClasses = _extends({}, inputBaseClasses$1, generateUtilityClasses("MuiFilledInput", ["root", "underline", "input"]));
const filledInputClasses$1 = filledInputClasses;
const ArrowDropDownIcon = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown");
const Person = createSvgIcon(/* @__PURE__ */ jsxRuntimeExports.jsx("path", {
  d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
}), "Person");
function getAvatarUtilityClass(slot) {
  return generateUtilityClass("MuiAvatar", slot);
}
generateUtilityClasses("MuiAvatar", ["root", "colorDefault", "circular", "rounded", "square", "img", "fallback"]);
const _excluded$l = ["alt", "children", "className", "component", "imgProps", "sizes", "src", "srcSet", "variant"];
const useUtilityClasses$i = (ownerState) => {
  const {
    classes,
    variant,
    colorDefault
  } = ownerState;
  const slots = {
    root: ["root", variant, colorDefault && "colorDefault"],
    img: ["img"],
    fallback: ["fallback"]
  };
  return composeClasses(slots, getAvatarUtilityClass, classes);
};
const AvatarRoot = styled("div", {
  name: "MuiAvatar",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], ownerState.colorDefault && styles2.colorDefault];
  }
})(({
  theme: theme2
}) => ({
  position: "relative",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  width: 40,
  height: 40,
  fontFamily: theme2.typography.fontFamily,
  fontSize: theme2.typography.pxToRem(20),
  lineHeight: 1,
  borderRadius: "50%",
  overflow: "hidden",
  userSelect: "none",
  variants: [{
    props: {
      variant: "rounded"
    },
    style: {
      borderRadius: (theme2.vars || theme2).shape.borderRadius
    }
  }, {
    props: {
      variant: "square"
    },
    style: {
      borderRadius: 0
    }
  }, {
    props: {
      colorDefault: true
    },
    style: _extends({
      color: (theme2.vars || theme2).palette.background.default
    }, theme2.vars ? {
      backgroundColor: theme2.vars.palette.Avatar.defaultBg
    } : _extends({
      backgroundColor: theme2.palette.grey[400]
    }, theme2.applyStyles("dark", {
      backgroundColor: theme2.palette.grey[600]
    })))
  }]
}));
const AvatarImg = styled("img", {
  name: "MuiAvatar",
  slot: "Img",
  overridesResolver: (props, styles2) => styles2.img
})({
  width: "100%",
  height: "100%",
  textAlign: "center",
  // Handle non-square image. The property isn't supported by IE11.
  objectFit: "cover",
  // Hide alt text.
  color: "transparent",
  // Hide the image broken icon, only works on Chrome.
  textIndent: 1e4
});
const AvatarFallback = styled(Person, {
  name: "MuiAvatar",
  slot: "Fallback",
  overridesResolver: (props, styles2) => styles2.fallback
})({
  width: "75%",
  height: "75%"
});
function useLoaded({
  crossOrigin,
  referrerPolicy,
  src,
  srcSet
}) {
  const [loaded, setLoaded] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!src && !srcSet) {
      return void 0;
    }
    setLoaded(false);
    let active = true;
    const image = new Image();
    image.onload = () => {
      if (!active) {
        return;
      }
      setLoaded("loaded");
    };
    image.onerror = () => {
      if (!active) {
        return;
      }
      setLoaded("error");
    };
    image.crossOrigin = crossOrigin;
    image.referrerPolicy = referrerPolicy;
    image.src = src;
    if (srcSet) {
      image.srcset = srcSet;
    }
    return () => {
      active = false;
    };
  }, [crossOrigin, referrerPolicy, src, srcSet]);
  return loaded;
}
const Avatar = /* @__PURE__ */ reactExports.forwardRef(function Avatar2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiAvatar"
  });
  const {
    alt,
    children: childrenProp,
    className,
    component = "div",
    imgProps,
    sizes,
    src,
    srcSet,
    variant = "circular"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$l);
  let children = null;
  const loaded = useLoaded(_extends({}, imgProps, {
    src,
    srcSet
  }));
  const hasImg = src || srcSet;
  const hasImgNotFailing = hasImg && loaded !== "error";
  const ownerState = _extends({}, props, {
    colorDefault: !hasImgNotFailing,
    component,
    variant
  });
  const classes = useUtilityClasses$i(ownerState);
  if (hasImgNotFailing) {
    children = /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarImg, _extends({
      alt,
      srcSet,
      src,
      sizes,
      ownerState,
      className: classes.img
    }, imgProps));
  } else if (childrenProp != null && childrenProp !== "" && typeof childrenProp !== "boolean") {
    children = childrenProp;
  } else if (hasImg && alt) {
    children = alt[0];
  } else {
    children = /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarFallback, {
      ownerState,
      className: classes.fallback
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AvatarRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children
  }));
});
const Avatar$1 = Avatar;
const _excluded$k = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
const styles$1 = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
const Fade = /* @__PURE__ */ reactExports.forwardRef(function Fade2(props, ref) {
  const theme2 = useTheme();
  const defaultTimeout = {
    enter: theme2.transitions.duration.enteringScreen,
    exit: theme2.transitions.duration.leavingScreen
  };
  const {
    addEndListener,
    appear = true,
    children,
    easing: easing2,
    in: inProp,
    onEnter,
    onEntered,
    onEntering,
    onExit,
    onExited,
    onExiting,
    style: style2,
    timeout = defaultTimeout,
    // eslint-disable-next-line react/prop-types
    TransitionComponent = Transition$1
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$k);
  const nodeRef = reactExports.useRef(null);
  const handleRef = useForkRef(nodeRef, children.ref, ref);
  const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
    if (callback) {
      const node2 = nodeRef.current;
      if (maybeIsAppearing === void 0) {
        callback(node2);
      } else {
        callback(node2, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node2, isAppearing) => {
    reflow(node2);
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "enter"
    });
    node2.style.webkitTransition = theme2.transitions.create("opacity", transitionProps);
    node2.style.transition = theme2.transitions.create("opacity", transitionProps);
    if (onEnter) {
      onEnter(node2, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback((node2) => {
    const transitionProps = getTransitionProps({
      style: style2,
      timeout,
      easing: easing2
    }, {
      mode: "exit"
    });
    node2.style.webkitTransition = theme2.transitions.create("opacity", transitionProps);
    node2.style.transition = theme2.transitions.create("opacity", transitionProps);
    if (onExit) {
      onExit(node2);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = (next2) => {
    if (addEndListener) {
      addEndListener(nodeRef.current, next2);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    appear,
    in: inProp,
    nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout
  }, other, {
    children: (state, childProps) => {
      return /* @__PURE__ */ reactExports.cloneElement(children, _extends({
        style: _extends({
          opacity: 0,
          visibility: state === "exited" && !inProp ? "hidden" : void 0
        }, styles$1[state], style2, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
const Fade$1 = Fade;
function getBackdropUtilityClass(slot) {
  return generateUtilityClass("MuiBackdrop", slot);
}
generateUtilityClasses("MuiBackdrop", ["root", "invisible"]);
const _excluded$j = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];
const useUtilityClasses$h = (ownerState) => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ["root", invisible && "invisible"]
  };
  return composeClasses(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = styled("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.invisible && styles2.invisible];
  }
})(({
  ownerState
}) => _extends({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, ownerState.invisible && {
  backgroundColor: "transparent"
}));
const Backdrop = /* @__PURE__ */ reactExports.forwardRef(function Backdrop2(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = useThemeProps({
    props: inProps,
    name: "MuiBackdrop"
  });
  const {
    children,
    className,
    component = "div",
    components = {},
    componentsProps = {},
    invisible = false,
    open,
    slotProps = {},
    slots = {},
    TransitionComponent = Fade$1,
    transitionDuration
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$j);
  const ownerState = _extends({}, props, {
    component,
    invisible
  });
  const classes = useUtilityClasses$h(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropRoot, _extends({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: clsx(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: _extends({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes,
      ref,
      children
    }))
  }));
});
const Backdrop$1 = Backdrop;
const html = (theme2, enableColorScheme) => _extends({
  WebkitFontSmoothing: "antialiased",
  // Antialiasing.
  MozOsxFontSmoothing: "grayscale",
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: "border-box",
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: "100%"
}, enableColorScheme && !theme2.vars && {
  colorScheme: theme2.palette.mode
});
const body = (theme2) => _extends({
  color: (theme2.vars || theme2).palette.text.primary
}, theme2.typography.body1, {
  backgroundColor: (theme2.vars || theme2).palette.background.default,
  "@media print": {
    // Save printer ink.
    backgroundColor: (theme2.vars || theme2).palette.common.white
  }
});
const styles = (theme2, enableColorScheme = false) => {
  var _theme$components;
  const colorSchemeStyles = {};
  if (enableColorScheme && theme2.colorSchemes) {
    Object.entries(theme2.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[theme2.getColorSchemeSelector(key).replace(/\s*&/, "")] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  let defaultStyles = _extends({
    html: html(theme2, enableColorScheme),
    "*, *::before, *::after": {
      boxSizing: "inherit"
    },
    "strong, b": {
      fontWeight: theme2.typography.fontWeightBold
    },
    body: _extends({
      margin: 0
    }, body(theme2), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      "&::backdrop": {
        backgroundColor: (theme2.vars || theme2).palette.background.default
      }
    })
  }, colorSchemeStyles);
  const themeOverrides = (_theme$components = theme2.components) == null || (_theme$components = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};
function CssBaseline(inProps) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiCssBaseline"
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(GlobalStyles, {
      styles: (theme2) => styles(theme2, enableColorScheme)
    }), children]
  });
}
function getModalUtilityClass(slot) {
  return generateUtilityClass("MuiModal", slot);
}
generateUtilityClasses("MuiModal", ["root", "hidden", "backdrop"]);
const _excluded$i = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
const useUtilityClasses$g = (ownerState) => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ["root", !open && exited && "hidden"],
    backdrop: ["backdrop"]
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};
const ModalRoot = styled("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.open && ownerState.exited && styles2.hidden];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  position: "fixed",
  zIndex: (theme2.vars || theme2).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: "hidden"
}));
const ModalBackdrop = styled(Backdrop$1, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (props, styles2) => {
    return styles2.backdrop;
  }
})({
  zIndex: -1
});
const Modal = /* @__PURE__ */ reactExports.forwardRef(function Modal2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = useThemeProps({
    name: "MuiModal",
    props: inProps
  });
  const {
    BackdropComponent = ModalBackdrop,
    BackdropProps,
    className,
    closeAfterTransition = false,
    children,
    container,
    component,
    components = {},
    componentsProps = {},
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableEscapeKeyDown = false,
    disablePortal = false,
    disableRestoreFocus = false,
    disableScrollLock = false,
    hideBackdrop = false,
    keepMounted = false,
    onBackdropClick,
    open,
    slotProps,
    slots
    // eslint-disable-next-line react/prop-types
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$i);
  const propsWithDefaults = _extends({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps: getTransitionProps2,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = useModal(_extends({}, propsWithDefaults, {
    rootRef: ref
  }));
  const ownerState = _extends({}, propsWithDefaults, {
    exited
  });
  const classes = useUtilityClasses$g(ownerState);
  const childProps = {};
  if (children.props.tabIndex === void 0) {
    childProps.tabIndex = "-1";
  }
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps2();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: clsx(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: (otherHandlers) => {
      return getBackdropProps(_extends({}, otherHandlers, {
        onClick: (e2) => {
          if (onBackdropClick) {
            onBackdropClick(e2);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e2);
          }
        }
      }));
    },
    className: clsx(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Portal, {
    ref: portalRef,
    container,
    disablePortal,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(RootSlot, _extends({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /* @__PURE__ */ jsxRuntimeExports.jsx(BackdropSlot, _extends({}, backdropProps)) : null, /* @__PURE__ */ jsxRuntimeExports.jsx(FocusTrap, {
        disableEnforceFocus,
        disableAutoFocus,
        disableRestoreFocus,
        isEnabled: isTopModal,
        open,
        children: /* @__PURE__ */ reactExports.cloneElement(children, childProps)
      })]
    }))
  });
});
const Modal$1 = Modal;
const _excluded$h = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$f = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getFilledInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const FilledInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  var _palette;
  const light2 = theme2.palette.mode === "light";
  const bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  const backgroundColor2 = light2 ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)";
  const hoverBackground = light2 ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)";
  const disabledBackground = light2 ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return _extends({
    position: "relative",
    backgroundColor: theme2.vars ? theme2.vars.palette.FilledInput.bg : backgroundColor2,
    borderTopLeftRadius: (theme2.vars || theme2).shape.borderRadius,
    borderTopRightRadius: (theme2.vars || theme2).shape.borderRadius,
    transition: theme2.transitions.create("background-color", {
      duration: theme2.transitions.duration.shorter,
      easing: theme2.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: theme2.vars ? theme2.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: theme2.vars ? theme2.vars.palette.FilledInput.bg : backgroundColor2
      }
    },
    [`&.${filledInputClasses$1.focused}`]: {
      backgroundColor: theme2.vars ? theme2.vars.palette.FilledInput.bg : backgroundColor2
    },
    [`&.${filledInputClasses$1.disabled}`]: {
      backgroundColor: theme2.vars ? theme2.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(_palette = (theme2.vars || theme2).palette[ownerState.color || "primary"]) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme2.transitions.create("transform", {
        duration: theme2.transitions.duration.shorter,
        easing: theme2.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${filledInputClasses$1.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${filledInputClasses$1.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme2.vars || theme2).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${theme2.vars ? `rgba(${theme2.vars.palette.common.onBackgroundChannel} / ${theme2.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme2.transitions.create("border-bottom-color", {
        duration: theme2.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${filledInputClasses$1.disabled}, .${filledInputClasses$1.error}):before`]: {
      borderBottom: `1px solid ${(theme2.vars || theme2).palette.text.primary}`
    },
    [`&.${filledInputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && _extends({
    padding: "25px 12px 8px"
  }, ownerState.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === "small" && {
    paddingTop: 8,
    paddingBottom: 9
  }));
});
const FilledInputInput = styled(InputBaseComponent, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme: theme2,
  ownerState
}) => _extends({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme2.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme2.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme2.palette.mode === "light" ? null : "#fff",
    caretColor: theme2.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, theme2.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [theme2.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}));
const FilledInput = /* @__PURE__ */ reactExports.forwardRef(function FilledInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiFilledInput"
  });
  const {
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    // declare here to prevent spreading to DOM
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$h);
  const ownerState = _extends({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = useUtilityClasses$f(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
FilledInput.muiName = "Input";
const FilledInput$1 = FilledInput;
function getFormControlUtilityClasses(slot) {
  return generateUtilityClass("MuiFormControl", slot);
}
generateUtilityClasses("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const _excluded$g = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];
const useUtilityClasses$e = (ownerState) => {
  const {
    classes,
    margin: margin2,
    fullWidth
  } = ownerState;
  const slots = {
    root: ["root", margin2 !== "none" && `margin${capitalize(margin2)}`, fullWidth && "fullWidth"]
  };
  return composeClasses(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = styled("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, styles2[`margin${capitalize(ownerState.margin)}`], ownerState.fullWidth && styles2.fullWidth);
  }
})(({
  ownerState
}) => _extends({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, ownerState.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: "100%"
}));
const FormControl = /* @__PURE__ */ reactExports.forwardRef(function FormControl2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormControl"
  });
  const {
    children,
    className,
    color: color2 = "primary",
    component = "div",
    disabled = false,
    error = false,
    focused: visuallyFocused,
    fullWidth = false,
    hiddenLabel = false,
    margin: margin2 = "none",
    required = false,
    size = "medium",
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$g);
  const ownerState = _extends({}, props, {
    color: color2,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin: margin2,
    required,
    size,
    variant
  });
  const classes = useUtilityClasses$e(ownerState);
  const [adornedStart, setAdornedStart] = reactExports.useState(() => {
    let initialAdornedStart = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        const input = isMuiElement(child, ["Select"]) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = reactExports.useState(() => {
    let initialFilled = false;
    if (children) {
      reactExports.Children.forEach(children, (child) => {
        if (!isMuiElement(child, ["Input", "Select"])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = reactExports.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== void 0 && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  const childContext = reactExports.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color: color2,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color2, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlContext$1.Provider, {
    value: childContext,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(FormControlRoot, _extends({
      as: component,
      ownerState,
      className: clsx(classes.root, className),
      ref
    }, other, {
      children
    }))
  });
});
const FormControl$1 = FormControl;
function getFormHelperTextUtilityClasses(slot) {
  return generateUtilityClass("MuiFormHelperText", slot);
}
const formHelperTextClasses = generateUtilityClasses("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]);
const formHelperTextClasses$1 = formHelperTextClasses;
var _span$2;
const _excluded$f = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];
const useUtilityClasses$d = (ownerState) => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ["root", disabled && "disabled", error && "error", size && `size${capitalize(size)}`, contained && "contained", focused && "focused", filled && "filled", required && "required"]
  };
  return composeClasses(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = styled("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, ownerState.size && styles2[`size${capitalize(ownerState.size)}`], ownerState.contained && styles2.contained, ownerState.filled && styles2.filled];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  color: (theme2.vars || theme2).palette.text.secondary
}, theme2.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${formHelperTextClasses$1.disabled}`]: {
    color: (theme2.vars || theme2).palette.text.disabled
  },
  [`&.${formHelperTextClasses$1.error}`]: {
    color: (theme2.vars || theme2).palette.error.main
  }
}, ownerState.size === "small" && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /* @__PURE__ */ reactExports.forwardRef(function FormHelperText2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormHelperText"
  });
  const {
    children,
    className,
    component = "p"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$f);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  });
  const ownerState = _extends({}, props, {
    component,
    contained: fcs.variant === "filled" || fcs.variant === "outlined",
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$d(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperTextRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: children === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      _span$2 || (_span$2 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : children
  }));
});
const FormHelperText$1 = FormHelperText;
function getFormLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiFormLabel", slot);
}
const formLabelClasses = generateUtilityClasses("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]);
const formLabelClasses$1 = formLabelClasses;
const _excluded$e = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];
const useUtilityClasses$c = (ownerState) => {
  const {
    classes,
    color: color2,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ["root", `color${capitalize(color2)}`, disabled && "disabled", error && "error", filled && "filled", focused && "focused", required && "required"],
    asterisk: ["asterisk", error && "error"]
  };
  return composeClasses(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = styled("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState
  }, styles2) => {
    return _extends({}, styles2.root, ownerState.color === "secondary" && styles2.colorSecondary, ownerState.filled && styles2.filled);
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  color: (theme2.vars || theme2).palette.text.secondary
}, theme2.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${formLabelClasses$1.focused}`]: {
    color: (theme2.vars || theme2).palette[ownerState.color].main
  },
  [`&.${formLabelClasses$1.disabled}`]: {
    color: (theme2.vars || theme2).palette.text.disabled
  },
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme2.vars || theme2).palette.error.main
  }
}));
const AsteriskComponent = styled("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (props, styles2) => styles2.asterisk
})(({
  theme: theme2
}) => ({
  [`&.${formLabelClasses$1.error}`]: {
    color: (theme2.vars || theme2).palette.error.main
  }
}));
const FormLabel = /* @__PURE__ */ reactExports.forwardRef(function FormLabel2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiFormLabel"
  });
  const {
    children,
    className,
    component = "label"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$e);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses$c(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(FormLabelRoot, _extends({
    as: component,
    ownerState,
    className: clsx(classes.root, className),
    ref
  }, other, {
    children: [children, fcs.required && /* @__PURE__ */ jsxRuntimeExports.jsxs(AsteriskComponent, {
      ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: [" ", "*"]
    })]
  }));
});
const FormLabel$1 = FormLabel;
const GridContext = /* @__PURE__ */ reactExports.createContext();
const GridContext$1 = GridContext;
function getGridUtilityClass(slot) {
  return generateUtilityClass("MuiGrid", slot);
}
const SPACINGS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const DIRECTIONS = ["column-reverse", "column", "row-reverse", "row"];
const WRAPS = ["nowrap", "wrap-reverse", "wrap"];
const GRID_SIZES = ["auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const gridClasses = generateUtilityClasses("MuiGrid", [
  "root",
  "container",
  "item",
  "zeroMinWidth",
  // spacings
  ...SPACINGS.map((spacing) => `spacing-xs-${spacing}`),
  // direction values
  ...DIRECTIONS.map((direction) => `direction-xs-${direction}`),
  // wrap values
  ...WRAPS.map((wrap) => `wrap-xs-${wrap}`),
  // grid sizes for all breakpoints
  ...GRID_SIZES.map((size) => `grid-xs-${size}`),
  ...GRID_SIZES.map((size) => `grid-sm-${size}`),
  ...GRID_SIZES.map((size) => `grid-md-${size}`),
  ...GRID_SIZES.map((size) => `grid-lg-${size}`),
  ...GRID_SIZES.map((size) => `grid-xl-${size}`)
]);
const _excluded$d = ["className", "columns", "columnSpacing", "component", "container", "direction", "item", "rowSpacing", "spacing", "wrap", "zeroMinWidth"];
function getOffset(val) {
  const parse2 = parseFloat(val);
  return `${parse2}${String(val).replace(String(parse2), "") || "px"}`;
}
function generateGrid({
  theme: theme2,
  ownerState
}) {
  let size;
  return theme2.breakpoints.keys.reduce((globalStyles, breakpoint) => {
    let styles2 = {};
    if (ownerState[breakpoint]) {
      size = ownerState[breakpoint];
    }
    if (!size) {
      return globalStyles;
    }
    if (size === true) {
      styles2 = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: "100%"
      };
    } else if (size === "auto") {
      styles2 = {
        flexBasis: "auto",
        flexGrow: 0,
        flexShrink: 0,
        maxWidth: "none",
        width: "auto"
      };
    } else {
      const columnsBreakpointValues = resolveBreakpointValues({
        values: ownerState.columns,
        breakpoints: theme2.breakpoints.values
      });
      const columnValue = typeof columnsBreakpointValues === "object" ? columnsBreakpointValues[breakpoint] : columnsBreakpointValues;
      if (columnValue === void 0 || columnValue === null) {
        return globalStyles;
      }
      const width2 = `${Math.round(size / columnValue * 1e8) / 1e6}%`;
      let more = {};
      if (ownerState.container && ownerState.item && ownerState.columnSpacing !== 0) {
        const themeSpacing = theme2.spacing(ownerState.columnSpacing);
        if (themeSpacing !== "0px") {
          const fullWidth = `calc(${width2} + ${getOffset(themeSpacing)})`;
          more = {
            flexBasis: fullWidth,
            maxWidth: fullWidth
          };
        }
      }
      styles2 = _extends({
        flexBasis: width2,
        flexGrow: 0,
        maxWidth: width2
      }, more);
    }
    if (theme2.breakpoints.values[breakpoint] === 0) {
      Object.assign(globalStyles, styles2);
    } else {
      globalStyles[theme2.breakpoints.up(breakpoint)] = styles2;
    }
    return globalStyles;
  }, {});
}
function generateDirection({
  theme: theme2,
  ownerState
}) {
  const directionValues = resolveBreakpointValues({
    values: ownerState.direction,
    breakpoints: theme2.breakpoints.values
  });
  return handleBreakpoints({
    theme: theme2
  }, directionValues, (propValue) => {
    const output = {
      flexDirection: propValue
    };
    if (propValue.indexOf("column") === 0) {
      output[`& > .${gridClasses.item}`] = {
        maxWidth: "none"
      };
    }
    return output;
  });
}
function extractZeroValueBreakpointKeys({
  breakpoints,
  values: values2
}) {
  let nonZeroKey = "";
  Object.keys(values2).forEach((key) => {
    if (nonZeroKey !== "") {
      return;
    }
    if (values2[key] !== 0) {
      nonZeroKey = key;
    }
  });
  const sortedBreakpointKeysByValue = Object.keys(breakpoints).sort((a, b2) => {
    return breakpoints[a] - breakpoints[b2];
  });
  return sortedBreakpointKeysByValue.slice(0, sortedBreakpointKeysByValue.indexOf(nonZeroKey));
}
function generateRowGap({
  theme: theme2,
  ownerState
}) {
  const {
    container,
    rowSpacing
  } = ownerState;
  let styles2 = {};
  if (container && rowSpacing !== 0) {
    const rowSpacingValues = resolveBreakpointValues({
      values: rowSpacing,
      breakpoints: theme2.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof rowSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme2.breakpoints.values,
        values: rowSpacingValues
      });
    }
    styles2 = handleBreakpoints({
      theme: theme2
    }, rowSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK;
      const themeSpacing = theme2.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          marginTop: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingTop: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK.includes(breakpoint)) {
        return {};
      }
      return {
        marginTop: 0,
        [`& > .${gridClasses.item}`]: {
          paddingTop: 0
        }
      };
    });
  }
  return styles2;
}
function generateColumnGap({
  theme: theme2,
  ownerState
}) {
  const {
    container,
    columnSpacing
  } = ownerState;
  let styles2 = {};
  if (container && columnSpacing !== 0) {
    const columnSpacingValues = resolveBreakpointValues({
      values: columnSpacing,
      breakpoints: theme2.breakpoints.values
    });
    let zeroValueBreakpointKeys;
    if (typeof columnSpacingValues === "object") {
      zeroValueBreakpointKeys = extractZeroValueBreakpointKeys({
        breakpoints: theme2.breakpoints.values,
        values: columnSpacingValues
      });
    }
    styles2 = handleBreakpoints({
      theme: theme2
    }, columnSpacingValues, (propValue, breakpoint) => {
      var _zeroValueBreakpointK2;
      const themeSpacing = theme2.spacing(propValue);
      if (themeSpacing !== "0px") {
        return {
          width: `calc(100% + ${getOffset(themeSpacing)})`,
          marginLeft: `-${getOffset(themeSpacing)}`,
          [`& > .${gridClasses.item}`]: {
            paddingLeft: getOffset(themeSpacing)
          }
        };
      }
      if ((_zeroValueBreakpointK2 = zeroValueBreakpointKeys) != null && _zeroValueBreakpointK2.includes(breakpoint)) {
        return {};
      }
      return {
        width: "100%",
        marginLeft: 0,
        [`& > .${gridClasses.item}`]: {
          paddingLeft: 0
        }
      };
    });
  }
  return styles2;
}
function resolveSpacingStyles(spacing, breakpoints, styles2 = {}) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [styles2[`spacing-xs-${String(spacing)}`]];
  }
  const spacingStyles = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      spacingStyles.push(styles2[`spacing-${breakpoint}-${String(value)}`]);
    }
  });
  return spacingStyles;
}
const GridRoot = styled("div", {
  name: "MuiGrid",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    const {
      container,
      direction,
      item,
      spacing,
      wrap,
      zeroMinWidth,
      breakpoints
    } = ownerState;
    let spacingStyles = [];
    if (container) {
      spacingStyles = resolveSpacingStyles(spacing, breakpoints, styles2);
    }
    const breakpointsStyles = [];
    breakpoints.forEach((breakpoint) => {
      const value = ownerState[breakpoint];
      if (value) {
        breakpointsStyles.push(styles2[`grid-${breakpoint}-${String(value)}`]);
      }
    });
    return [styles2.root, container && styles2.container, item && styles2.item, zeroMinWidth && styles2.zeroMinWidth, ...spacingStyles, direction !== "row" && styles2[`direction-xs-${String(direction)}`], wrap !== "wrap" && styles2[`wrap-xs-${String(wrap)}`], ...breakpointsStyles];
  }
})(({
  ownerState
}) => _extends({
  boxSizing: "border-box"
}, ownerState.container && {
  display: "flex",
  flexWrap: "wrap",
  width: "100%"
}, ownerState.item && {
  margin: 0
  // For instance, it's useful when used with a `figure` element.
}, ownerState.zeroMinWidth && {
  minWidth: 0
}, ownerState.wrap !== "wrap" && {
  flexWrap: ownerState.wrap
}), generateDirection, generateRowGap, generateColumnGap, generateGrid);
function resolveSpacingClasses(spacing, breakpoints) {
  if (!spacing || spacing <= 0) {
    return [];
  }
  if (typeof spacing === "string" && !Number.isNaN(Number(spacing)) || typeof spacing === "number") {
    return [`spacing-xs-${String(spacing)}`];
  }
  const classes = [];
  breakpoints.forEach((breakpoint) => {
    const value = spacing[breakpoint];
    if (Number(value) > 0) {
      const className = `spacing-${breakpoint}-${String(value)}`;
      classes.push(className);
    }
  });
  return classes;
}
const useUtilityClasses$b = (ownerState) => {
  const {
    classes,
    container,
    direction,
    item,
    spacing,
    wrap,
    zeroMinWidth,
    breakpoints
  } = ownerState;
  let spacingClasses = [];
  if (container) {
    spacingClasses = resolveSpacingClasses(spacing, breakpoints);
  }
  const breakpointsClasses = [];
  breakpoints.forEach((breakpoint) => {
    const value = ownerState[breakpoint];
    if (value) {
      breakpointsClasses.push(`grid-${breakpoint}-${String(value)}`);
    }
  });
  const slots = {
    root: ["root", container && "container", item && "item", zeroMinWidth && "zeroMinWidth", ...spacingClasses, direction !== "row" && `direction-xs-${String(direction)}`, wrap !== "wrap" && `wrap-xs-${String(wrap)}`, ...breakpointsClasses]
  };
  return composeClasses(slots, getGridUtilityClass, classes);
};
const Grid = /* @__PURE__ */ reactExports.forwardRef(function Grid2(inProps, ref) {
  const themeProps = useThemeProps({
    props: inProps,
    name: "MuiGrid"
  });
  const {
    breakpoints
  } = useTheme();
  const props = extendSxProp(themeProps);
  const {
    className,
    columns: columnsProp,
    columnSpacing: columnSpacingProp,
    component = "div",
    container = false,
    direction = "row",
    item = false,
    rowSpacing: rowSpacingProp,
    spacing = 0,
    wrap = "wrap",
    zeroMinWidth = false
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$d);
  const rowSpacing = rowSpacingProp || spacing;
  const columnSpacing = columnSpacingProp || spacing;
  const columnsContext = reactExports.useContext(GridContext$1);
  const columns = container ? columnsProp || 12 : columnsContext;
  const breakpointsValues = {};
  const otherFiltered = _extends({}, other);
  breakpoints.keys.forEach((breakpoint) => {
    if (other[breakpoint] != null) {
      breakpointsValues[breakpoint] = other[breakpoint];
      delete otherFiltered[breakpoint];
    }
  });
  const ownerState = _extends({}, props, {
    columns,
    container,
    direction,
    item,
    rowSpacing,
    columnSpacing,
    wrap,
    zeroMinWidth,
    spacing
  }, breakpointsValues, {
    breakpoints: breakpoints.keys
  });
  const classes = useUtilityClasses$b(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(GridContext$1.Provider, {
    value: columns,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(GridRoot, _extends({
      ownerState,
      className: clsx(classes.root, className),
      as: component,
      ref
    }, otherFiltered))
  });
});
const Grid$1 = Grid;
const _excluded$c = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];
const useUtilityClasses$a = (ownerState) => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ["root", !disableUnderline && "underline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const InputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles2), !ownerState.disableUnderline && styles2.underline];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  const light2 = theme2.palette.mode === "light";
  let bottomLineColor = light2 ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  if (theme2.vars) {
    bottomLineColor = `rgba(${theme2.vars.palette.common.onBackgroundChannel} / ${theme2.vars.opacity.inputUnderline})`;
  }
  return _extends({
    position: "relative"
  }, ownerState.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    "&::after": {
      borderBottom: `2px solid ${(theme2.vars || theme2).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: theme2.transitions.create("transform", {
        duration: theme2.transitions.duration.shorter,
        easing: theme2.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${inputClasses$1.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${inputClasses$1.error}`]: {
      "&::before, &::after": {
        borderBottomColor: (theme2.vars || theme2).palette.error.main
      }
    },
    "&::before": {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: theme2.transitions.create("border-bottom-color", {
        duration: theme2.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${inputClasses$1.disabled}, .${inputClasses$1.error}):before`]: {
      borderBottom: `2px solid ${(theme2.vars || theme2).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${inputClasses$1.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
});
const InputInput = styled(InputBaseComponent, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})({});
const Input = /* @__PURE__ */ reactExports.forwardRef(function Input2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = useThemeProps({
    props: inProps,
    name: "MuiInput"
  });
  const {
    disableUnderline,
    components = {},
    componentsProps: componentsPropsProp,
    fullWidth = false,
    inputComponent = "input",
    multiline = false,
    slotProps,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$c);
  const classes = useUtilityClasses$a(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? deepmerge(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes
  }));
});
Input.muiName = "Input";
const Input$1 = Input;
function getInputLabelUtilityClasses(slot) {
  return generateUtilityClass("MuiInputLabel", slot);
}
generateUtilityClasses("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const _excluded$b = ["disableAnimation", "margin", "shrink", "variant", "className"];
const useUtilityClasses$9 = (ownerState) => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ["root", formControl && "formControl", !disableAnimation && "animated", shrink && "shrink", size && size !== "normal" && `size${capitalize(size)}`, variant],
    asterisk: [required && "asterisk"]
  };
  const composedClasses = composeClasses(slots, getInputLabelUtilityClasses, classes);
  return _extends({}, classes, composedClasses);
};
const InputLabelRoot = styled(FormLabel$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${formLabelClasses$1.asterisk}`]: styles2.asterisk
    }, styles2.root, ownerState.formControl && styles2.formControl, ownerState.size === "small" && styles2.sizeSmall, ownerState.shrink && styles2.shrink, !ownerState.disableAnimation && styles2.animated, ownerState.focused && styles2.focused, styles2[ownerState.variant]];
  }
})(({
  theme: theme2,
  ownerState
}) => _extends({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, ownerState.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, ownerState.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, ownerState.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !ownerState.disableAnimation && {
  transition: theme2.transitions.create(["color", "transform", "max-width"], {
    duration: theme2.transitions.duration.shorter,
    easing: theme2.transitions.easing.easeOut
  })
}, ownerState.variant === "filled" && _extends({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, ownerState.shrink && _extends({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), ownerState.variant === "outlined" && _extends({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, ownerState.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, ownerState.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
})));
const InputLabel = /* @__PURE__ */ reactExports.forwardRef(function InputLabel2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiInputLabel",
    props: inProps
  });
  const {
    disableAnimation = false,
    shrink: shrinkProp,
    className
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$b);
  const muiFormControl = useFormControl();
  let shrink = shrinkProp;
  if (typeof shrink === "undefined" && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["size", "variant", "required", "focused"]
  });
  const ownerState = _extends({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  });
  const classes = useUtilityClasses$9(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabelRoot, _extends({
    "data-shrink": shrink,
    ownerState,
    ref,
    className: clsx(classes.root, className)
  }, other, {
    classes
  }));
});
const InputLabel$1 = InputLabel;
const ListContext = /* @__PURE__ */ reactExports.createContext({});
const ListContext$1 = ListContext;
function getListUtilityClass(slot) {
  return generateUtilityClass("MuiList", slot);
}
generateUtilityClasses("MuiList", ["root", "padding", "dense", "subheader"]);
const _excluded$a = ["children", "className", "component", "dense", "disablePadding", "subheader"];
const useUtilityClasses$8 = (ownerState) => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ["root", !disablePadding && "padding", dense && "dense", subheader && "subheader"]
  };
  return composeClasses(slots, getListUtilityClass, classes);
};
const ListRoot = styled("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, !ownerState.disablePadding && styles2.padding, ownerState.dense && styles2.dense, ownerState.subheader && styles2.subheader];
  }
})(({
  ownerState
}) => _extends({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /* @__PURE__ */ reactExports.forwardRef(function List2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiList"
  });
  const {
    children,
    className,
    component = "ul",
    dense = false,
    disablePadding = false,
    subheader
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$a);
  const context = reactExports.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = _extends({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = useUtilityClasses$8(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ListContext$1.Provider, {
    value: context,
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ListRoot, _extends({
      as: component,
      className: clsx(classes.root, className),
      ref,
      ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
const List$1 = List;
const _excluded$9 = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === void 0) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === void 0) {
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join("")) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}
const MenuList = /* @__PURE__ */ reactExports.forwardRef(function MenuList2(props, ref) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions,
    autoFocus = false,
    autoFocusItem = false,
    children,
    className,
    disabledItemsFocusable = false,
    disableListWrap = false,
    onKeyDown,
    variant = "selectedMenu"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$9);
  const listRef = reactExports.useRef(null);
  const textCriteriaRef = reactExports.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, theme2) => {
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${getScrollbarSize(ownerDocument(containerElement))}px`;
        listRef.current.style[theme2.direction === "rtl" ? "paddingLeft" : "paddingRight"] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown2 = (event) => {
    const list = listRef.current;
    const key = event.key;
    const currentFocus = ownerDocument(list).activeElement;
    if (key === "ArrowDown") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "ArrowUp") {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === "Home") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === "End") {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = useForkRef(listRef, ref);
  let activeItemIndex = -1;
  reactExports.Children.forEach(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        activeItemIndex = -1;
      }
    }
  });
  const items = reactExports.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === void 0 && variant === "selectedMenu") {
        newChildProps.tabIndex = 0;
      }
      return /* @__PURE__ */ reactExports.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(List$1, _extends({
    role: "menu",
    ref: handleRef,
    className,
    onKeyDown: handleKeyDown2,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
const MenuList$1 = MenuList;
function getPopoverUtilityClass(slot) {
  return generateUtilityClass("MuiPopover", slot);
}
generateUtilityClasses("MuiPopover", ["root", "paper"]);
const _excluded$8 = ["onEntering"], _excluded2$2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], _excluded3 = ["slotProps"];
function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === "number") {
    offset = vertical;
  } else if (vertical === "center") {
    offset = rect.height / 2;
  } else if (vertical === "bottom") {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === "number") {
    offset = horizontal;
  } else if (horizontal === "center") {
    offset = rect.width / 2;
  } else if (horizontal === "right") {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map((n2) => typeof n2 === "number" ? `${n2}px` : n2).join(" ");
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === "function" ? anchorEl() : anchorEl;
}
const useUtilityClasses$7 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"]
  };
  return composeClasses(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = styled(Modal$1, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const PopoverPaper = styled(Paper$1, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /* @__PURE__ */ reactExports.forwardRef(function Popover2(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiPopover"
  });
  const {
    action,
    anchorEl,
    anchorOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition,
    anchorReference = "anchorEl",
    children,
    className,
    container: containerProp,
    elevation = 8,
    marginThreshold = 16,
    open,
    PaperProps: PaperPropsProp = {},
    slots,
    slotProps,
    transformOrigin = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent = Grow$1,
    transitionDuration: transitionDurationProp = "auto",
    TransitionProps: {
      onEntering
    } = {},
    disableScrollLock = false
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$8), other = _objectWithoutPropertiesLoose(props, _excluded2$2);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = reactExports.useRef();
  const handlePaperRef = useForkRef(paperRef, externalPaperSlotProps.ref);
  const ownerState = _extends({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = useUtilityClasses$7(ownerState);
  const getAnchorOffset = reactExports.useCallback(() => {
    if (anchorReference === "anchorPosition") {
      return anchorPosition;
    }
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);
  const getTransformOrigin = reactExports.useCallback((elemRect) => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = reactExports.useCallback((element) => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === "none") {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }
    const anchorOffset = getAnchorOffset();
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;
    const containerWindow = ownerWindow(resolveAnchorEl(anchorEl));
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = reactExports.useState(open);
  const setPositioningStyles = reactExports.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  reactExports.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener("scroll", setPositioningStyles);
    }
    return () => window.removeEventListener("scroll", setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  reactExports.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  reactExports.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  reactExports.useEffect(() => {
    if (!open) {
      return void 0;
    }
    const handleResize = debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = ownerWindow(anchorEl);
    containerWindow.addEventListener("resize", handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener("resize", handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === "auto" && !TransitionComponent.muiSupportAuto) {
    transitionDuration = void 0;
  }
  const container = containerProp || (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : void 0);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: _extends({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : _extends({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: clsx(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps({
    elementType: RootSlot,
    externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
    externalForwardedProps: other,
    additionalProps: {
      ref,
      slotProps: {
        backdrop: {
          invisible: true
        }
      },
      container,
      open
    },
    ownerState,
    className: clsx(classes.root, className)
  }), {
    slotProps: rootSlotPropsProp
  } = _useSlotProps, rootProps = _objectWithoutPropertiesLoose(_useSlotProps, _excluded3);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RootSlot, _extends({}, rootProps, !isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TransitionComponent, _extends({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PaperSlot, _extends({}, paperProps, {
        children
      }))
    }))
  }));
});
const Popover$1 = Popover;
function getMenuUtilityClass(slot) {
  return generateUtilityClass("MuiMenu", slot);
}
generateUtilityClasses("MuiMenu", ["root", "paper", "list"]);
const _excluded$7 = ["onEntering"], _excluded2$1 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];
const RTL_ORIGIN = {
  vertical: "top",
  horizontal: "right"
};
const LTR_ORIGIN = {
  vertical: "top",
  horizontal: "left"
};
const useUtilityClasses$6 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  };
  return composeClasses(slots, getMenuUtilityClass, classes);
};
const MenuRoot = styled(Popover$1, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const MenuPaper = styled(PopoverPaper, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (props, styles2) => styles2.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
});
const MenuMenuList = styled(MenuList$1, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (props, styles2) => styles2.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /* @__PURE__ */ reactExports.forwardRef(function Menu2(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = useThemeProps({
    props: inProps,
    name: "MuiMenu"
  });
  const {
    autoFocus = true,
    children,
    className,
    disableAutoFocusItem = false,
    MenuListProps = {},
    onClose,
    open,
    PaperProps = {},
    PopoverClasses,
    transitionDuration = "auto",
    TransitionProps: {
      onEntering
    } = {},
    variant = "selectedMenu",
    slots = {},
    slotProps = {}
  } = props, TransitionProps = _objectWithoutPropertiesLoose(props.TransitionProps, _excluded$7), other = _objectWithoutPropertiesLoose(props, _excluded2$1);
  const theme2 = useTheme();
  const isRtl = theme2.direction === "rtl";
  const ownerState = _extends({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = useUtilityClasses$6(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = reactExports.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, theme2);
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = (event) => {
    if (event.key === "Tab") {
      event.preventDefault();
      if (onClose) {
        onClose(event, "tabKeyDown");
      }
    }
  };
  let activeItemIndex = -1;
  reactExports.Children.map(children, (child, index) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return;
    }
    if (!child.props.disabled) {
      if (variant === "selectedMenu" && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuRoot, _extends({
    onClose,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: isRtl ? "right" : "left"
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open,
    ref,
    transitionDuration,
    TransitionProps: _extends({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState
  }, other, {
    classes: PopoverClasses,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MenuMenuList, _extends({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem,
      variant
    }, MenuListProps, {
      className: clsx(classes.list, MenuListProps.className),
      children
    }))
  }));
});
const Menu$1 = Menu;
function getNativeSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiNativeSelect", slot);
}
const nativeSelectClasses = generateUtilityClasses("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
const nativeSelectClasses$1 = nativeSelectClasses;
const _excluded$6 = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];
const useUtilityClasses$5 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"]
  };
  return composeClasses(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme: theme2
}) => _extends({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": _extends({}, theme2.vars ? {
    backgroundColor: `rgba(${theme2.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme2.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${nativeSelectClasses$1.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (theme2.vars || theme2).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, ownerState.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, ownerState.variant === "outlined" && {
  borderRadius: (theme2.vars || theme2).shape.borderRadius,
  "&:focus": {
    borderRadius: (theme2.vars || theme2).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
});
const NativeSelectSelect = styled("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: rootShouldForwardProp,
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.select, styles2[ownerState.variant], ownerState.error && styles2.error, {
      [`&.${nativeSelectClasses$1.multiple}`]: styles2.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme: theme2
}) => _extends({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (theme2.vars || theme2).palette.action.active,
  [`&.${nativeSelectClasses$1.disabled}`]: {
    color: (theme2.vars || theme2).palette.action.disabled
  }
}, ownerState.open && {
  transform: "rotate(180deg)"
}, ownerState.variant === "filled" && {
  right: 7
}, ownerState.variant === "outlined" && {
  right: 7
});
const NativeSelectIcon = styled("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const NativeSelectInput = /* @__PURE__ */ reactExports.forwardRef(function NativeSelectInput2(props, ref) {
  const {
    className,
    disabled,
    error,
    IconComponent,
    inputRef,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$6);
  const ownerState = _extends({}, props, {
    disabled,
    variant,
    error
  });
  const classes = useUtilityClasses$5(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectSelect, _extends({
      ownerState,
      className: clsx(classes.select, className),
      disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /* @__PURE__ */ jsxRuntimeExports.jsx(NativeSelectIcon, {
      as: IconComponent,
      ownerState,
      className: classes.icon
    })]
  });
});
const NativeSelectInput$1 = NativeSelectInput;
var _span$1;
const _excluded$5 = ["children", "classes", "className", "label", "notched"];
const NotchedOutlineRoot$1 = styled("fieldset", {
  shouldForwardProp: rootShouldForwardProp
})({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
});
const NotchedOutlineLegend = styled("legend", {
  shouldForwardProp: rootShouldForwardProp
})(({
  ownerState,
  theme: theme2
}) => _extends({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: theme2.transitions.create("width", {
    duration: 150,
    easing: theme2.transitions.easing.easeOut
  })
}, ownerState.withLabel && _extends({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: theme2.transitions.create("max-width", {
    duration: 50,
    easing: theme2.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, ownerState.notched && {
  maxWidth: "100%",
  transition: theme2.transitions.create("max-width", {
    duration: 100,
    easing: theme2.transitions.easing.easeOut,
    delay: 50
  })
})));
function NotchedOutline(props) {
  const {
    className,
    label,
    notched
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$5);
  const withLabel = label != null && label !== "";
  const ownerState = _extends({}, props, {
    notched,
    withLabel
  });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot$1, _extends({
    "aria-hidden": true,
    className,
    ownerState
  }, other, {
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineLegend, {
      ownerState,
      children: withLabel ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        children: label
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span$1 || (_span$1 = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
const _excluded$4 = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];
const useUtilityClasses$4 = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  };
  const composedClasses = composeClasses(slots, getOutlinedInputUtilityClass, classes);
  return _extends({}, classes, composedClasses);
};
const OutlinedInputRoot = styled(InputBaseRoot, {
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) || prop === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: rootOverridesResolver
})(({
  theme: theme2,
  ownerState
}) => {
  const borderColor2 = theme2.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return _extends({
    position: "relative",
    borderRadius: (theme2.vars || theme2).shape.borderRadius,
    [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme2.vars || theme2).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${outlinedInputClasses$1.notchedOutline}`]: {
        borderColor: theme2.vars ? `rgba(${theme2.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
      }
    },
    [`&.${outlinedInputClasses$1.focused} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme2.vars || theme2).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${outlinedInputClasses$1.error} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme2.vars || theme2).palette.error.main
    },
    [`&.${outlinedInputClasses$1.disabled} .${outlinedInputClasses$1.notchedOutline}`]: {
      borderColor: (theme2.vars || theme2).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && _extends({
    padding: "16.5px 14px"
  }, ownerState.size === "small" && {
    padding: "8.5px 14px"
  }));
});
const NotchedOutlineRoot = styled(NotchedOutline, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (props, styles2) => styles2.notchedOutline
})(({
  theme: theme2
}) => {
  const borderColor2 = theme2.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: theme2.vars ? `rgba(${theme2.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor2
  };
});
const OutlinedInputInput = styled(InputBaseComponent, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: inputOverridesResolver
})(({
  theme: theme2,
  ownerState
}) => _extends({
  padding: "16.5px 14px"
}, !theme2.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: theme2.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: theme2.palette.mode === "light" ? null : "#fff",
    caretColor: theme2.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, theme2.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [theme2.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, ownerState.size === "small" && {
  padding: "8.5px 14px"
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /* @__PURE__ */ reactExports.forwardRef(function OutlinedInput2(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = useThemeProps({
    props: inProps,
    name: "MuiOutlinedInput"
  });
  const {
    components = {},
    fullWidth = false,
    inputComponent = "input",
    label,
    multiline = false,
    notched,
    slots = {},
    type = "text"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$4);
  const classes = useUtilityClasses$4(props);
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  });
  const ownerState = _extends({}, props, {
    color: fcs.color || "primary",
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(InputBase$1, _extends({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: (state) => /* @__PURE__ */ jsxRuntimeExports.jsx(NotchedOutlineRoot, {
      ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== "" && fcs.required ? _React$Fragment || (_React$Fragment = /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
        children: [label, " ", "*"]
      })) : label,
      notched: typeof notched !== "undefined" ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth,
    inputComponent,
    multiline,
    ref,
    type
  }, other, {
    classes: _extends({}, classes, {
      notchedOutline: null
    })
  }));
});
OutlinedInput.muiName = "Input";
const OutlinedInput$1 = OutlinedInput;
function getSelectUtilityClasses(slot) {
  return generateUtilityClass("MuiSelect", slot);
}
const selectClasses = generateUtilityClasses("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]);
var _span;
const _excluded$3 = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];
const SelectSelect = styled("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [
      // Win specificity over the input base
      {
        [`&.${selectClasses.select}`]: styles2.select
      },
      {
        [`&.${selectClasses.select}`]: styles2[ownerState.variant]
      },
      {
        [`&.${selectClasses.error}`]: styles2.error
      },
      {
        [`&.${selectClasses.multiple}`]: styles2.multiple
      }
    ];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${selectClasses.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
});
const SelectIcon = styled("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.icon, ownerState.variant && styles2[`icon${capitalize(ownerState.variant)}`], ownerState.open && styles2.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = styled("input", {
  shouldForwardProp: (prop) => slotShouldForwardProp(prop) && prop !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (props, styles2) => styles2.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function areEqualValues(a, b2) {
  if (typeof b2 === "object" && b2 !== null) {
    return a === b2;
  }
  return String(a) === String(b2);
}
function isEmpty(display) {
  return display == null || typeof display === "string" && !display.trim();
}
const useUtilityClasses$3 = (ownerState) => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ["select", variant, disabled && "disabled", multiple && "multiple", error && "error"],
    icon: ["icon", `icon${capitalize(variant)}`, open && "iconOpen", disabled && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return composeClasses(slots, getSelectUtilityClasses, classes);
};
const SelectInput = /* @__PURE__ */ reactExports.forwardRef(function SelectInput2(props, ref) {
  var _MenuProps$slotProps;
  const {
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    autoFocus,
    autoWidth,
    children,
    className,
    defaultOpen,
    defaultValue,
    disabled,
    displayEmpty,
    error = false,
    IconComponent,
    inputRef: inputRefProp,
    labelId,
    MenuProps = {},
    multiple,
    name,
    onBlur,
    onChange,
    onClose,
    onFocus,
    onOpen,
    open: openProp,
    readOnly,
    renderValue,
    SelectDisplayProps = {},
    tabIndex: tabIndexProp,
    value: valueProp,
    variant = "standard"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$3);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: "Select"
  });
  const [openState, setOpenState] = useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: "Select"
  });
  const inputRef = reactExports.useRef(null);
  const displayRef = reactExports.useRef(null);
  const [displayNode, setDisplayNode] = reactExports.useState(null);
  const {
    current: isOpenControlled
  } = reactExports.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = reactExports.useState();
  const handleRef = useForkRef(ref, inputRefProp);
  const handleDisplayRef = reactExports.useCallback((node2) => {
    displayRef.current = node2;
    if (node2) {
      setDisplayNode(node2);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  reactExports.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);
  reactExports.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
  }, [displayNode, autoWidth]);
  reactExports.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  reactExports.useEffect(() => {
    if (!labelId) {
      return void 0;
    }
    const label = ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener("click", handler);
      return () => {
        label.removeEventListener("click", handler);
      };
    }
    return void 0;
  }, [labelId]);
  const update = (open2, event) => {
    if (open2) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open2);
    }
  };
  const handleMouseDown = (event) => {
    if (event.button !== 0) {
      return;
    }
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = (event) => {
    update(false, event);
  };
  const childrenArray = reactExports.Children.toArray(children);
  const handleChange = (event) => {
    const child = childrenArray.find((childItem) => childItem.props.value === event.target.value);
    if (child === void 0) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = (child) => (event) => {
    let newValue;
    if (!event.currentTarget.hasAttribute("tabindex")) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, "target", {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown2 = (event) => {
    if (!readOnly) {
      const validKeys = [
        " ",
        "ArrowUp",
        "ArrowDown",
        // The native select doesn't respond to enter on macOS, but it's recommended by
        // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
        "Enter"
      ];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = (event) => {
    if (!open && onBlur) {
      Object.defineProperty(event, "target", {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other["aria-invalid"];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map((child) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(child)) {
      return null;
    }
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error(formatMuiErrorMessage(2));
      }
      selected = value.some((v2) => areEqualValues(v2, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    return /* @__PURE__ */ reactExports.cloneElement(child, {
      "aria-selected": selected ? "true" : "false",
      onClick: handleItemClick(child),
      onKeyUp: (event) => {
        if (event.key === " ") {
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: "option",
      selected,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": child.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(", ");
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== "undefined") {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : void 0);
  const ownerState = _extends({}, props, {
    variant,
    value,
    open,
    error
  });
  const classes = useUtilityClasses$3(ownerState);
  const paperProps = _extends({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
  const listboxId = useId();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(SelectSelect, _extends({
      ref: handleDisplayRef,
      tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? "true" : void 0,
      "aria-expanded": open ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(" ") || void 0,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown2,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus
    }, SelectDisplayProps, {
      ownerState,
      className: clsx(SelectDisplayProps.className, classes.select, className),
      id: buttonId,
      children: isEmpty(display) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        _span || (_span = /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : display
    })), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectNativeInput, _extends({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(",") : value,
      name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled,
      className: classes.nativeInput,
      autoFocus,
      ownerState
    }, other)), /* @__PURE__ */ jsxRuntimeExports.jsx(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Menu$1, _extends({
      id: `menu-${name || ""}`,
      anchorEl: anchorElement,
      open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, MenuProps, {
      MenuListProps: _extends({
        "aria-labelledby": labelId,
        role: "listbox",
        "aria-multiselectable": multiple ? "true" : void 0,
        disableListWrap: true,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: _extends({}, MenuProps.slotProps, {
        paper: _extends({}, paperProps, {
          style: _extends({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
const SelectInput$1 = SelectInput;
const _excluded$2 = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], _excluded2 = ["root"];
const useUtilityClasses$2 = (ownerState) => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: "MuiSelect",
  overridesResolver: (props, styles2) => styles2.root,
  shouldForwardProp: (prop) => rootShouldForwardProp(prop) && prop !== "variant",
  slot: "Root"
};
const StyledInput = styled(Input$1, styledRootConfig)("");
const StyledOutlinedInput = styled(OutlinedInput$1, styledRootConfig)("");
const StyledFilledInput = styled(FilledInput$1, styledRootConfig)("");
const Select = /* @__PURE__ */ reactExports.forwardRef(function Select2(inProps, ref) {
  const props = useThemeProps({
    name: "MuiSelect",
    props: inProps
  });
  const {
    autoWidth = false,
    children,
    classes: classesProp = {},
    className,
    defaultOpen = false,
    displayEmpty = false,
    IconComponent = ArrowDropDownIcon,
    id: id2,
    input,
    inputProps,
    label,
    labelId,
    MenuProps,
    multiple = false,
    native = false,
    onClose,
    onOpen,
    open,
    renderValue,
    SelectDisplayProps,
    variant: variantProp = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$2);
  const inputComponent = native ? NativeSelectInput$1 : SelectInput$1;
  const muiFormControl = useFormControl();
  const fcs = formControlState({
    props,
    muiFormControl,
    states: ["variant", "error"]
  });
  const variant = fcs.variant || variantProp;
  const ownerState = _extends({}, props, {
    variant,
    classes: classesProp
  });
  const classes = useUtilityClasses$2(ownerState);
  const restOfClasses = _objectWithoutPropertiesLoose(classes, _excluded2);
  const InputComponent = input || {
    standard: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledInput, {
      ownerState
    }),
    outlined: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledOutlinedInput, {
      label,
      ownerState
    }),
    filled: /* @__PURE__ */ jsxRuntimeExports.jsx(StyledFilledInput, {
      ownerState
    })
  }[variant];
  const inputComponentRef = useForkRef(ref, InputComponent.ref);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.Fragment, {
    children: /* @__PURE__ */ reactExports.cloneElement(InputComponent, _extends({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: _extends({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id: id2
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: _extends({
          id: id2
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? deepmerge(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, (multiple && native || displayEmpty) && variant === "outlined" ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: clsx(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
Select.muiName = "Select";
const Select$1 = Select;
function getSkeletonUtilityClass(slot) {
  return generateUtilityClass("MuiSkeleton", slot);
}
generateUtilityClasses("MuiSkeleton", ["root", "text", "rectangular", "rounded", "circular", "pulse", "wave", "withChildren", "fitContent", "heightAuto"]);
const _excluded$1 = ["animation", "className", "component", "height", "style", "variant", "width"];
let _ = (t2) => t2, _t, _t2, _t3, _t4;
const useUtilityClasses$1 = (ownerState) => {
  const {
    classes,
    variant,
    animation,
    hasChildren,
    width: width2,
    height: height2
  } = ownerState;
  const slots = {
    root: ["root", variant, animation, hasChildren && "withChildren", hasChildren && !width2 && "fitContent", hasChildren && !height2 && "heightAuto"]
  };
  return composeClasses(slots, getSkeletonUtilityClass, classes);
};
const pulseKeyframe = keyframes(_t || (_t = _`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`));
const waveKeyframe = keyframes(_t2 || (_t2 = _`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`));
const SkeletonRoot = styled("span", {
  name: "MuiSkeleton",
  slot: "Root",
  overridesResolver: (props, styles2) => {
    const {
      ownerState
    } = props;
    return [styles2.root, styles2[ownerState.variant], ownerState.animation !== false && styles2[ownerState.animation], ownerState.hasChildren && styles2.withChildren, ownerState.hasChildren && !ownerState.width && styles2.fitContent, ownerState.hasChildren && !ownerState.height && styles2.heightAuto];
  }
})(({
  theme: theme2,
  ownerState
}) => {
  const radiusUnit = getUnit(theme2.shape.borderRadius) || "px";
  const radiusValue = toUnitless(theme2.shape.borderRadius);
  return _extends({
    display: "block",
    // Create a "on paper" color with sufficient contrast retaining the color
    backgroundColor: theme2.vars ? theme2.vars.palette.Skeleton.bg : alpha(theme2.palette.text.primary, theme2.palette.mode === "light" ? 0.11 : 0.13),
    height: "1.2em"
  }, ownerState.variant === "text" && {
    marginTop: 0,
    marginBottom: 0,
    height: "auto",
    transformOrigin: "0 55%",
    transform: "scale(1, 0.60)",
    borderRadius: `${radiusValue}${radiusUnit}/${Math.round(radiusValue / 0.6 * 10) / 10}${radiusUnit}`,
    "&:empty:before": {
      content: '"\\00a0"'
    }
  }, ownerState.variant === "circular" && {
    borderRadius: "50%"
  }, ownerState.variant === "rounded" && {
    borderRadius: (theme2.vars || theme2).shape.borderRadius
  }, ownerState.hasChildren && {
    "& > *": {
      visibility: "hidden"
    }
  }, ownerState.hasChildren && !ownerState.width && {
    maxWidth: "fit-content"
  }, ownerState.hasChildren && !ownerState.height && {
    height: "auto"
  });
}, ({
  ownerState
}) => ownerState.animation === "pulse" && css(_t3 || (_t3 = _`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `), pulseKeyframe), ({
  ownerState,
  theme: theme2
}) => ownerState.animation === "wave" && css(_t4 || (_t4 = _`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `), waveKeyframe, (theme2.vars || theme2).palette.action.hover));
const Skeleton = /* @__PURE__ */ reactExports.forwardRef(function Skeleton2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiSkeleton"
  });
  const {
    animation = "pulse",
    className,
    component = "span",
    height: height2,
    style: style2,
    variant = "text",
    width: width2
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded$1);
  const ownerState = _extends({}, props, {
    animation,
    component,
    variant,
    hasChildren: Boolean(other.children)
  });
  const classes = useUtilityClasses$1(ownerState);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(SkeletonRoot, _extends({
    as: component,
    ref,
    className: clsx(classes.root, className),
    ownerState
  }, other, {
    style: _extends({
      width: width2,
      height: height2
    }, style2)
  }));
});
const Skeleton$1 = Skeleton;
function getTextFieldUtilityClass(slot) {
  return generateUtilityClass("MuiTextField", slot);
}
generateUtilityClasses("MuiTextField", ["root"]);
const _excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];
const variantComponent = {
  standard: Input$1,
  filled: FilledInput$1,
  outlined: OutlinedInput$1
};
const useUtilityClasses = (ownerState) => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ["root"]
  };
  return composeClasses(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = styled(FormControl$1, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (props, styles2) => styles2.root
})({});
const TextField = /* @__PURE__ */ reactExports.forwardRef(function TextField2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiTextField"
  });
  const {
    autoComplete,
    autoFocus = false,
    children,
    className,
    color: color2 = "primary",
    defaultValue,
    disabled = false,
    error = false,
    FormHelperTextProps,
    fullWidth = false,
    helperText,
    id: idOverride,
    InputLabelProps,
    inputProps,
    InputProps,
    inputRef,
    label,
    maxRows,
    minRows,
    multiline = false,
    name,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    required = false,
    rows,
    select = false,
    SelectProps,
    type,
    value,
    variant = "outlined"
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const ownerState = _extends({}, props, {
    autoFocus,
    color: color2,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  const InputMore = {};
  if (variant === "outlined") {
    if (InputLabelProps && typeof InputLabelProps.shrink !== "undefined") {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = void 0;
    }
    InputMore["aria-describedby"] = void 0;
  }
  const id2 = useId(idOverride);
  const helperTextId = helperText && id2 ? `${id2}-helper-text` : void 0;
  const inputLabelId = label && id2 ? `${id2}-label` : void 0;
  const InputComponent = variantComponent[variant];
  const InputElement = /* @__PURE__ */ jsxRuntimeExports.jsx(InputComponent, _extends({
    "aria-describedby": helperTextId,
    autoComplete,
    autoFocus,
    defaultValue,
    fullWidth,
    multiline,
    name,
    rows,
    maxRows,
    minRows,
    type,
    value,
    id: id2,
    inputRef,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    inputProps
  }, InputMore, InputProps));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(TextFieldRoot, _extends({
    className: clsx(classes.root, className),
    disabled,
    error,
    fullWidth,
    ref,
    required,
    color: color2,
    variant,
    ownerState
  }, other, {
    children: [label != null && label !== "" && /* @__PURE__ */ jsxRuntimeExports.jsx(InputLabel$1, _extends({
      htmlFor: id2,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /* @__PURE__ */ jsxRuntimeExports.jsx(Select$1, _extends({
      "aria-describedby": helperTextId,
      id: id2,
      labelId: inputLabelId,
      value,
      input: InputElement
    }, SelectProps, {
      children
    })) : InputElement, helperText && /* @__PURE__ */ jsxRuntimeExports.jsx(FormHelperText$1, _extends({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
const TextField$1 = TextField;
const encodeData = (content) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(content);
  const base64 = btoa(String.fromCharCode(...new Uint8Array(data.buffer)));
  return base64;
};
const getToken = (name, type = "") => {
  try {
    let data = localStorage.getItem(name);
    if (type == "json") {
      return JSON.parse(data);
    }
    return data || "";
  } catch {
    return "";
  }
};
const setToken = (name, val) => {
  try {
    if (typeof val == "object") {
      val = JSON.stringify(val);
    }
    localStorage.setItem(name, val);
  } catch {
  }
};
class Config {
  constructor(props) {
    try {
      this.API_URL = "https://api.younet.ai/api";
      this.RIGHT = Number(props.RIGHT) || 24;
      this.BOTTOM = Number(props.BOTTOM) || 20;
      this.HEIGHT = Number(props.HEIGHT) || 60;
      this.WIDTH = Number(props.WIDTH) || 60;
    } catch (error) {
      console.error("Config: ", error);
    }
  }
}
const GLOBAL_TIMEOUT_PERIOD_MS = 6e4;
const RESPONSE_TIMEOUT_MESSAGE_CODE = "message.timeout";
async function createStream(url, callback, params = {}, signal = {}, errorCallback = () => {
}, streamSettings = { TIMEOUT_PERIOD_MS: 15e3, hasAttachments: false }) {
  var _a;
  let abortTimeoutId, errorSaveAction = true;
  const restartAbortTimer = (timeout = streamSettings.TIMEOUT_PERIOD_MS) => {
    clearTimeout(abortTimeoutId);
    abortTimeoutId = setTimeout(() => {
      console.error("Failed to establish SSE connection.");
      errorCallback({
        message: [RESPONSE_TIMEOUT_MESSAGE_CODE],
        params: { saveMessage: errorSaveAction }
      });
    }, timeout);
  };
  try {
    restartAbortTimer(GLOBAL_TIMEOUT_PERIOD_MS);
    const response = await fetch(new Config().API_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer `
        // "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(params),
      signal
    });
    if (response.status === 200 && response.headers.get("Content-Type").startsWith("text/event-stream")) {
      let processChunk = function({ done, value }) {
        var _a2;
        if (done) {
          console.log("SSE stream has ended.");
          clearTimeout(abortTimeoutId);
          return;
        }
        restartAbortTimer();
        let chunkData = { data: "", response: null, message: null };
        const chunkText = decoder.decode(value);
        const eventDataList = chunkText.split("\n");
        let parsedData = "";
        for (let eventData of eventDataList) {
          if (eventData.trim() == "") {
            continue;
          }
          if (eventData.startsWith("data: {")) {
            dataBuffer = eventData.slice(6);
          } else {
            dataBuffer += eventData;
          }
          try {
            let data = JSON.parse(dataBuffer);
            parsedData = data;
          } catch (error) {
            continue;
          }
          if (parsedData.response) {
            chunkData.response = parsedData.response;
            if (parsedData.balance) {
              chunkData.balance = parsedData.balance;
            }
            clearTimeout(abortTimeoutId);
          } else if (parsedData.message) {
            errorSaveAction = false;
            chunkData.message = parsedData.message;
            if (((_a2 = parsedData.attachments) == null ? void 0 : _a2.length) > 0) {
              chunkData.message.attachments = parsedData.attachments;
            }
            chunkData.sources = parsedData.sources;
          } else if (parsedData.data) {
            chunkData.data += parsedData.data;
          } else if (streamSettings.hasAttachments && parsedData.status == "processing") {
            chunkData.progressStatus = {
              status: parsedData.status,
              msg: parsedData.processing_message
            };
          } else if (parsedData.error) {
            chunkData.error = parsedData.error;
            clearTimeout(abortTimeoutId);
            callback(chunkData);
            return;
          }
        }
        if (chunkData.data !== "" || chunkData.response || chunkData.message || chunkData.progressStatus) {
          callback(chunkData);
        }
        reader.read().then(processChunk).catch(handleReadError);
      };
      const reader = response.body.getReader();
      const decoder = new TextDecoder("utf-8");
      let dataBuffer = "";
      const handleReadError = (err) => {
        var _a2;
        if ((_a2 = signal == null ? void 0 : signal.reason) == null ? void 0 : _a2.userAction) {
          console.warn("User aborted the request.");
          errorCallback({ params: { hideErrorMsg: true } });
        } else {
          console.error("Failed to establish SSE connection.");
          errorCallback({
            message: [RESPONSE_TIMEOUT_MESSAGE_CODE],
            params: { saveMessage: errorSaveAction }
          });
        }
        console.warn(err);
        clearTimeout(abortTimeoutId);
      };
      reader.read().then(processChunk).catch(handleReadError);
    } else {
      const responseData = await response.json();
      clearTimeout(abortTimeoutId);
      console.error("Failed to establish SSE connection.");
      errorCallback(responseData);
      console.error("Failed to establish SSE connection.");
    }
  } catch (e2) {
    console.error(e2);
    console.warn(e2.message);
    clearTimeout(abortTimeoutId);
    if ((_a = signal == null ? void 0 : signal.reason) == null ? void 0 : _a.userAction) {
      console.warn("User aborted the request.");
      errorCallback({
        params: { hideErrorMsg: true, saveMessage: errorSaveAction }
      });
    } else {
      console.error("Failed to establish SSE connection.");
      errorCallback();
    }
  }
}
const isInAppBrowser = (userAgent) => {
  const regex = /FBAN|FBAV|Instagram|LinkedInApp|Mobile Safari/i;
  return regex.test(userAgent) && !/Chrome/i.test(userAgent);
};
const useDeviceDetect = () => {
  const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;
  const isInAppView = reactExports.useMemo(() => isInAppBrowser(userAgent), [userAgent]);
  const [isMobileDevice, setMobile] = reactExports.useState(() => {
    const savedIsMobileDevice = localStorage.getItem("isMobileDevice");
    return savedIsMobileDevice !== null ? JSON.parse(savedIsMobileDevice) : false;
  });
  reactExports.useEffect(() => {
    const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone|Mobile|SymbianOS|Opera Mini|IEMobile|Kindle|Silk|PlayBook|Nintendo|Mobile Safari/i;
    const mobile = mobileRegex.test(userAgent);
    setMobile(mobile);
    localStorage.setItem("isMobileDevice", JSON.stringify(mobile));
  }, [userAgent]);
  return { isMobileDevice, userAgent, isInAppView };
};
const getShareData = async (modelHash) => {
  var _a, _b;
  try {
    const res = await fetch("https://api.younet.ai/api/model/share/data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        modelHash,
        guestId: (_b = (_a = getToken("younetChat", "json")) == null ? void 0 : _a.guest) == null ? void 0 : _b.guest_id
      })
    });
    if (res.status !== 200) {
      throw new Error("Error fetching data");
    }
    const data = await res.json();
    setToken("younetChat", data);
    return data;
  } catch (error) {
  }
};
const MarkdownComponent = reactExports.lazy(() => import("./index-5U7bgaYt.js").then((n2) => n2.x));
const Message = ({
  msg_id,
  msg,
  userInfo = {},
  modelName = "",
  children = null
}) => {
  reactExports.useState(false);
  reactExports.useState(false);
  reactExports.useState(msg.message);
  const actionElements = children != null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Grid$1,
    {
      sx: { padding: "20px 0" },
      msg_id,
      className: `msg-box ${msg.type === "prompt" ? "user" : "ai"}
        `,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Grid$1,
          {
            item: true,
            xs: 1,
            sx: { display: "flex", justifyContent: "end", alignItems: "end" },
            children: msg.type === "prompt" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Avatar$1,
              {
                className: "avatar",
                src: userInfo.avatar ?? "",
                sx: { fontSize: 15 },
                children: userInfo.initial === "" ? "personIcon" : userInfo.initial
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Avatar$1,
              {
                className: "avatar",
                sx: { backgroundColor: "rebeccapurple" },
                children: modelName.charAt(0).toUpperCase()
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              sx: {
                fontSize: 12,
                color: "text.secondary",
                marginLeft: "20px",
                marginBottom: "5px"
              },
              children: msg.type === "prompt" ? userInfo.name : modelName
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grid$1,
            {
              item: true,
              xs: 12,
              pr: { xs: msg.type === "prompt" ? 2 : 6 },
              pl: { xs: msg.type === "prompt" ? 6 : 2 },
              sx: { display: "flex", flexDirection: "column" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Typography$1, { className: "inner-msg", variant: "messages", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MarkdownComponent, { source: msg.message }) })
            }
          )
        ] }),
        actionElements && /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, md: 1.5, children })
      ]
    }
  );
};
const STYLE = ".container{display:flex;flex-flow:column!important;justify-content:flex-start;align-items:flex-start;width:100%;max-height:calc(100vh - 250px);padding:0;overflow-y:auto}.container::-webkit-scrollbar{width:6px}.container::-webkit-scrollbar-thumb{background-color:#c1c1c1;border-radius:10px}.container::-webkit-scrollbar-track{background-color:#f1f1f1}.chatContainer{scroll-behavior:smooth}@media (max-width: 768px){.chatContainer{height:calc(100vh - 103px)}}.msg-box{width:100%;padding:20px;display:flex;word-break:break-word;justify-content:flex-start!important}.msg-box.user{flex-direction:row-reverse;text-align:right;color:#3976ef}.msg-box.ai .inner-msg{background-color:#f5f5f5;padding:20px;border-radius:16px}.inner-msg{display:flex;width:100%;align-items:center;word-break:break-word}.inner-msg>*:first-child{margin-top:0!important}.inner-msg>*:last-child{margin-bottom:0!important}.inner-msg a,p,span{word-wrap:break-word}.avatar{min-width:40px;min-height:40px;max-width:40px;max-height:40px;font-size:11px!important}.msg-box.ai>.avatar{background-color:#639}.chatbox-input.label-apply label{top:8px}";
const STYLEMARKDOWN = ".preview-image{width:100%;max-width:285px}.full-screen-image{max-width:100vw;max-height:100vh}";
var classnames$1 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(module) {
  (function() {
    var hasOwn = {}.hasOwnProperty;
    function classNames() {
      var classes = "";
      for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (arg) {
          classes = appendClass(classes, parseValue(arg));
        }
      }
      return classes;
    }
    function parseValue(arg) {
      if (typeof arg === "string" || typeof arg === "number") {
        return arg;
      }
      if (typeof arg !== "object") {
        return "";
      }
      if (Array.isArray(arg)) {
        return classNames.apply(null, arg);
      }
      if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes("[native code]")) {
        return arg.toString();
      }
      var classes = "";
      for (var key in arg) {
        if (hasOwn.call(arg, key) && arg[key]) {
          classes = appendClass(classes, key);
        }
      }
      return classes;
    }
    function appendClass(value, newClass) {
      if (!newClass) {
        return value;
      }
      if (value) {
        return value + " " + newClass;
      }
      return value + newClass;
    }
    if (module.exports) {
      classNames.default = classNames;
      module.exports = classNames;
    } else {
      window.classNames = classNames;
    }
  })();
})(classnames$1);
var classnamesExports = classnames$1.exports;
const classnames = /* @__PURE__ */ getDefaultExportFromCjs(classnamesExports);
const STYLES = ".wrapper{width:30px;height:30px;position:relative}.smallDot,.bigDot,.blue,.purple{position:absolute;border-radius:50%}.firstStage{scale:.6}.firstStage .blue{top:26px;left:20px}.blue{width:9px;height:9px;background:#5678f6}.firstStage .purple{top:25px;left:-5px}.purple{width:12px;height:12px;background:#6c70f7}.smallDot{opacity:1}.secondStage .smallDot,.thirdStage .smallDot{opacity:0}.secondStage .smallDot,.secondStage .blue,.secondStage .purple{left:50%;top:50%;transform:translate(-50%,-50%);width:14px;height:14px}.secondStage .bigDot{left:50%;top:50%;transform:translate(-50%,-50%);width:20px;height:20px}.thirdStage .smallDot{opacity:0;transition:.3s ease-in-out .3s opacity}.thirdStage .purple{left:50%;top:0;width:14px;height:14px;transform:translate(-50%);background:#8469f8}.thirdStage .blue{left:17px;top:16px;width:14px;height:14px;transform:translate(0);background:#4f7bf7}.bigDot{transform:translateY(-50%);top:50%;left:-18px;width:14px;height:14px;background:#8868f9}.bigDot.tick{border:2px solid #4285ff}.secondStage .bigDot{width:48px;height:48px;background:linear-gradient(135deg,#b45afc 15%,#4285ff 50%,#00b2f8 80%)}.thirdStage .bigDot{left:0;top:16px;width:14px;height:14px;transform:translate(0);background:#a160fa}.firstStage .dot1{top:50%;left:-37px}.dot1{width:6px;height:6px;background:#aa5dfb;transform:translateY(-50%)}.firstStage .dot2{top:-3px;left:-25px}.dot2{width:8px;height:8px;background:#9f61fa}.firstStage .dot3{top:-15px;left:-7px}.dot3{width:8px;height:8px;background:#8c68f9}.firstStage .dot4{top:27px;left:-29px}.dot4{width:8px;height:8px;background:#9065f9}.firstStage .dot5{top:50%;left:50%;transform:translate(-50%,-50%)}.dot5{width:10px;height:10px;background:#5478f6}.firstStage .dot6{top:-3px;left:2px}.dot6{width:8px;height:8px;background:#4f7bf7}.firstStage .dot7{top:41px;left:-16px}.dot7{width:6px;height:6px;background:#766ef8}.firstStage .dot8{top:52px;left:-3px}.dot8{width:6px;height:6px;background:#5379f7}.firstStage .dot9{top:41px;left:12px}.dot9{width:6px;height:6px;background:#3a85f8}.firstStage .dot10{top:-15px;left:25px}.dot10{width:8px;height:8px;background:#517af6}.firstStage .dot11{top:-3px;left:40px}.dot11{width:8px;height:8px;background:#0091f9}.firstStage .dot12{transform:translateY(-50%);top:50%;left:29px}.dot12{width:6px;height:6px;background:#268af8}.firstStage .dot13{transform:translateY(-50%);top:50%;left:57px}.dot13{width:6px;height:6px;background:#00a6fb}.firstStage .dot14{top:27px;left:41px}.dot14{width:8px;height:8px;background:#009ffa}.thirdStage .dot1,.thirdStage .dot2,.thirdStage .dot3,.thirdStage .dot4,.thirdStage .dot5{left:50%;top:0;width:14px;height:14px;transform:translate(-50%)}.thirdStage .dot6,.thirdStage .dot7,.thirdStage .dot8,.thirdStage .dot9,.thirdStage .dot10{left:17px;top:16px;width:14px;height:14px;transform:translate(0)}.thirdStage .dot11,.thirdStage .dot12,.thirdStage .dot13,.thirdStage .dot14{left:0;top:16px;width:14px;height:14px;transform:translate(0)}.line1{position:absolute;width:32px;height:2px;background:linear-gradient(90deg,#8c68f9,#517af6);top:-12px;left:-4px}.line2{position:absolute;width:66px;height:2px;background:linear-gradient(90deg,#8c68f9,#0091f9);top:0;left:-21px}.line3{position:absolute;width:96px;height:2px;background:linear-gradient(90deg,#8c68f9,#0091f9);top:14px;left:-36px}.line4{position:absolute;width:71px;height:2px;background:linear-gradient(90deg,#8c68f9,#0091f9);top:30px;left:-27px}.line5{position:absolute;width:30px;height:2px;background:linear-gradient(90deg,#8c68f9,#0091f9);top:43px;left:-14px}.line{opacity:1}.secondStage .line,.thirdStage .line{opacity:0}.line{transition:.3s ease-in-out .3s opacity}.secondStage .line,.thirdStage .line{transition:.1s ease-in-out opacity}.bigDot{transition:.3s ease-in-out all;z-index:10}.smallDot,.blue,.purple{transition:.3s ease-in-out transform,.3s ease-in-out left,.3s ease-in-out top}.thirdStage{animation:rotate 2s linear infinite}.bouncing{animation:bouncing 1s ease-in-out infinite}.tick{animation-duration:.2s;animation-name:tick;animation-fill-mode:forwards;animation-play-state:running}.secondStage .bigDot{transition:.3s ease-in-out all,.3s ease-in-out .4s width,.3s ease-in-out .4s height,.1s ease .4s opacity}.secondStage .smallDot{transition:.3s ease-in-out all,.1s ease .4s opacity}.thirdStage .bigDot,.thirdStage .smallDot,.thirdStage .blue,.thirdStage .purple{transition:.3s ease-in-out .4s transform,.3s ease-in-out .4s left,.3s ease-in-out .4s top,.3s ease-in-out all,.3s ease-in-out height}@keyframes rotate{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes bouncing{0%{width:48px;height:48px}50%{width:52px;height:52px}to{width:48px;height:48px}}@keyframes tick{0%{width:48px;height:48px}50%{width:50px;height:50px}to{width:48px;height:48px}}";
function Logo({ stage, isLoading, textInputText }) {
  const [tick, setTick] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (textInputText.length) {
      setTick(true);
      setTimeout(() => {
        setTick(false);
      }, 100);
    }
  }, [textInputText]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: STYLES } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: classnames(
          "wrapper",
          stage === 1 && "firstStage",
          stage === 2 && !isLoading && "secondStage",
          (stage === 3 || isLoading) && "thirdStage"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("line", "line1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("line", "line2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("line", "line3") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("line", "line4") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("line", "line5") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot1") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot2") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot3") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot4") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot5") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot6") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot7") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot8") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot9") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot10") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot11") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot11") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot12") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot13") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("smallDot", "dot14") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("blue", isLoading && "loading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: classnames("purple", isLoading && "loading") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: classnames(
                "bigDot",
                isLoading && "loading",
                tick && "tick"
                // bouncing && !tick && !isLoading && styles.bouncing,
              )
            }
          )
        ]
      }
    )
  ] });
}
const MessageStructureSkeleton = ({ loading = false, modelInfo = {} }) => {
  if (!loading) {
    return;
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Grid$1, { container: true, className: "container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Grid$1,
      {
        container: true,
        sx: {
          padding: { md: "20px 50px 20px 60px", xs: "20px 0" }
        },
        msg_id: 0,
        className: "msg-box user",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grid$1,
            {
              item: true,
              xs: 1,
              sx: { display: "flex", justifyContent: "end", alignSelf: "end" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { className: "avatar" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: 10, md: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              px: { xs: 3, md: 5 },
              className: "inner-msg",
              variant: "messages",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { variant: "text", animation: "wave", sx: { width: "100%" } })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Grid$1,
      {
        container: true,
        sx: {
          padding: { md: "20px 50px 20px 60px", xs: "20px 0" }
        },
        msg_id: 1,
        className: "msg-box ai",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grid$1,
            {
              item: true,
              xs: 1,
              sx: {
                display: "flex",
                justifyContent: "end",
                alignSelf: "end",
                marginRight: "10px"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { className: "avatar", children: modelInfo.modelName })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: 10, md: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              px: { xs: 3, md: 5 },
              className: "inner-msg",
              variant: "messages",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { variant: "text", animation: "wave", sx: { width: "100%" } })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Grid$1,
      {
        container: true,
        sx: {
          padding: { md: "20px 50px 20px 60px", xs: "20px 0" }
        },
        msg_id: 2,
        className: "msg-box user",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grid$1,
            {
              item: true,
              xs: 1,
              sx: { display: "flex", justifyContent: "end", alignSelf: "end" },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { className: "avatar" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: 10, md: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              px: { xs: 3, md: 5 },
              className: "inner-msg",
              variant: "messages",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { variant: "text", animation: "wave", sx: { width: "100%" } })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Grid$1,
      {
        container: true,
        sx: {
          padding: { md: "20px 50px 20px 60px", xs: "20px 0" }
        },
        msg_id: 3,
        className: "msg-box ai",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grid$1,
            {
              item: true,
              xs: 1,
              sx: {
                display: "flex",
                justifyContent: "end",
                alignSelf: "end",
                marginRight: "10px"
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Avatar$1, { className: "avatar", children: modelInfo.modelName })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Grid$1, { item: true, xs: 10, md: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Typography$1,
            {
              px: { xs: 3, md: 5 },
              className: "inner-msg",
              variant: "messages",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton$1, { variant: "text", animation: "wave", sx: { width: "100%" } })
            }
          ) })
        ]
      }
    )
  ] });
};
const CHATBOXSTYLE = "";
function Chatbox({
  info = {},
  type,
  // 'rabbit' or 'shared'
  sendSignal = { count: 0, msg: "" },
  onTry = () => {
  },
  setIsOpened,
  modelHash
}) {
  const chatContainerRef = reactExports.useRef(null);
  var abortController = new AbortController();
  const { isMobileDevice } = useDeviceDetect();
  const [isMsgSending, setMsgLoadState] = reactExports.useState(false);
  const [searchSource, setSearchSource] = reactExports.useState("Thinking...");
  const [isInputFocused, setInputFocused] = reactExports.useState(false);
  const [rabbitChatId, setRabbitChatId] = reactExports.useState(false);
  const questionRef = reactExports.useRef(null);
  const [messages, setMessages] = reactExports.useState([]);
  const [guestId, setGuestId] = reactExports.useState();
  const [model, setModel] = reactExports.useState();
  const [userMessage, setUserMessage] = reactExports.useState("");
  const [aiMessage, setAiMessage] = reactExports.useState("");
  const [chatNotExist, setChatNotExist] = reactExports.useState(false);
  const [dataLoading, setDataLoading] = reactExports.useState(true);
  const [stage, setStage] = reactExports.useState(1);
  const modelName = reactExports.useMemo(() => {
    if (!model)
      return "";
    return model.name;
  }, [model]);
  reactExports.useEffect(() => {
    if (isInputFocused) {
      setStage(2);
    } else {
      setStage(1);
    }
  }, [isInputFocused]);
  let sourcesTimer = null;
  reactExports.useEffect(() => {
    getShareData(modelHash).then((data2) => {
      if (data2.code >= 400) {
        setDataLoading(false);
        setChatNotExist(true);
        return;
      }
      setMessages(data2.messages);
      setModel(data2.chat.model);
      setGuestId(data2.guest.guest_id);
      setDataLoading(false);
      console.debug("122");
      setStage(1);
    });
  }, []);
  const cleanChunkSources = (initial = "") => {
    clearInterval(sourcesTimer);
    setSearchSource(initial);
  };
  const saveAiResponse = async (msg = "") => {
    let emptyError = false;
    emptyError = msg.trim() == "";
    if (emptyError) {
      return;
    }
    let msgParams = {
      message: encodeData(msg ?? messages),
      type: "response"
    };
    await fetch(new Config().API_URL + "/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken("token")}`
      },
      body: JSON.stringify(msgParams)
    }).then((r2) => r2.json()).then((r2) => {
      if (r2) {
        console.log("saveAiResponse");
      }
    }).catch((err) => {
      console.log("err", err);
    });
  };
  const handleAbortRequest = () => {
    try {
      abortController.abort();
    } catch (error) {
      console.error("An error occurred while aborting:", error.message);
    }
    saveAiResponse(messages);
    setMsgLoadState(false);
  };
  const sendMessage = async (e2, newMessage = null) => {
    var _a, _b, _c, _d;
    setInputFocused(true);
    if (e2) {
      e2.preventDefault();
    }
    let question = questionRef.current.value, ref = questionRef, emptyError = false, maxWordsAllowed = 0, firstChunkArrived = false, cachedMsg = "";
    emptyError = newMessage ? newMessage.trim() == "" : question.trim() == "";
    if (emptyError) {
      alert("Message is empty");
      return;
    }
    maxWordsAllowed = newMessage ? newMessage.split(" ").length : question.split(" ").length;
    if (maxWordsAllowed > 1500) {
      alert("The message is exceeded maximum words allowed of 1500");
      return;
    }
    const message = newMessage ?? question;
    let instance = typeof message == "object" ? message : {
      type: "prompt",
      message
    };
    setUserMessage(instance);
    setMsgLoadState(true);
    ref.current.value = "";
    let msgParams = {
      message: encodeData(newMessage ?? question),
      type: "prompt",
      chatId: ((_b = (_a = getToken("younetChat", "json")) == null ? void 0 : _a.chat) == null ? void 0 : _b.id) || "ugur",
      guestId: (_d = (_c = getToken("younetChat", "json")) == null ? void 0 : _c.guest) == null ? void 0 : _d.guest_id
    };
    cachedMsg = "";
    setTimeout(() => {
      var _a2;
      if (chatContainerRef.current)
        chatContainerRef.current.scrollTop = (_a2 = chatContainerRef == null ? void 0 : chatContainerRef.current) == null ? void 0 : _a2.scrollHeight;
    });
    const errorCallback = (response = { message: [] }) => {
      console.log("errorCallback", response);
      let messages2 = response.message;
      let errMsg = messages2.length > 0 && messages2[0] == "guest.chat.over_limit" ? "You reached a maximum of 5 AI interactions. Register to get more. " : "Something went wrong.. Please, try again later..";
      alert(errMsg);
      cleanChunkSources("Thinking...");
      setMsgLoadState(false);
    };
    const bufferCallback = (resp) => {
      var _a2;
      if (resp.error) {
        if (resp.data != "") {
          cachedMsg += resp.data;
        }
        abortController.abort();
        saveAiResponse(cachedMsg);
        cleanChunkSources("Thinking...");
        ref.current.focus();
        return;
      }
      if (resp.data) {
        let data2 = resp.data;
        cachedMsg += resp.data;
        if (chatContainerRef.current)
          chatContainerRef.current.scrollTop = (_a2 = chatContainerRef == null ? void 0 : chatContainerRef.current) == null ? void 0 : _a2.scrollHeight;
        setAiMessage((prev2) => {
          return {
            ...prev2 ? prev2 : {
              type: "response"
            },
            message: cachedMsg
          };
        });
        if (!firstChunkArrived && data2 != "") {
          firstChunkArrived = true;
          cleanChunkSources("Typing...");
        }
        if (!resp.response) {
          return;
        }
      }
      if (resp.response) {
        const { response } = resp;
        ref.current.value = "";
        cleanChunkSources("");
        setMsgLoadState(false);
        setRabbitChatId(resp.response.chat_id);
        const message2 = {
          message: response.message,
          type: response.type
        };
        if (response.message && response.type)
          ;
        setAiMessage("");
        setUserMessage("");
        setMessages((prev2) => {
          return [...prev2, instance, message2];
        });
        ref.current.disabled = false;
        ref.current.focus();
        return;
      }
    };
    abortController = new AbortController();
    let signal = abortController.signal;
    createStream("/message", bufferCallback, msgParams, signal, errorCallback);
  };
  const [txt, setTxt] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Box$1,
    {
      sx: {
        position: "relative",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.1)",
        borderRadius: "5px",
        border: "1px solid #e0e0e0",
        height: {
          xs: "100vh",
          sm: "auto"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: CHATBOXSTYLE } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box$1,
          {
            sx: {
              display: {
                xs: "block",
                sm: "none"
              },
              position: "absolute",
              left: "10px",
              top: "10px",
              zIndex: 9999999999
            },
            onClick: () => setIsOpened(false),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                className: "icon icon-tabler icon-tabler-x",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                strokeWidth: "1.5",
                stroke: "#000000",
                fill: "none",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 6l-12 12" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 6l12 12" })
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box$1,
          {
            sx: {
              display: "flex",
              justifyContent: "center",
              padding: "30px 0"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { stage, isLoading: dataLoading, textInputText: txt })
          }
        ),
        chatNotExist && /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Chat Not Exist" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Box$1,
          {
            sx: {
              height: "400px",
              overflowY: "auto"
            },
            ref: chatContainerRef,
            className: "container chatContainer",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: STYLE } }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: STYLEMARKDOWN } }),
              dataLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(MessageStructureSkeleton, { loading: true }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Fragment, { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Message,
                  {
                    msg: {
                      message: "👋 Hi there! How can I help you today?",
                      type: "response"
                    },
                    userInfo: {},
                    modelName
                  }
                ),
                messages.map((msg, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Message,
                  {
                    msg,
                    userInfo: {},
                    modelName
                  },
                  index
                )),
                userMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(Message, { msg: userMessage, userInfo: {}, modelName }),
                aiMessage && /* @__PURE__ */ jsxRuntimeExports.jsx(Message, { msg: aiMessage, userInfo: {}, modelName })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Box$1,
          {
            sx: {
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "15px 10px"
            },
            children: dataLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { sx: { height: "73px" } }) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              TextField$1,
              {
                className: `chatbox-input ${!isInputFocused ? "label-apply" : ""}`,
                multiline: true,
                disabled: isMsgSending,
                sx: { width: "100%" },
                onInput: (e2) => {
                  setTxt((prev2) => {
                    var _a, _b, _c, _d;
                    if ((prev2 == null ? void 0 : prev2.length) > 0 && ((_b = (_a = e2 == null ? void 0 : e2.target) == null ? void 0 : _a.value) == null ? void 0 : _b.length) == 0) {
                      setStage(1);
                    } else if ((!prev2 || (prev2 == null ? void 0 : prev2.length) == 0) && ((_d = (_c = e2.target) == null ? void 0 : _c.value) == null ? void 0 : _d.length) > 0) {
                      setStage(2);
                    }
                    return e2.target.value;
                  });
                },
                label: isMsgSending && searchSource !== "" ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: ["dots-loading"], children: searchSource }) : `Talk to "${modelName}"`,
                isinputfocused: isInputFocused.toString(),
                onFocus: () => setInputFocused(true),
                onBlur: () => setInputFocused(false),
                placeholder: isInputFocused ? "" : `Talk to "${modelName}"`,
                variant: "outlined",
                onKeyDown: (e2) => {
                  if (e2.key == "Enter" && !isMobileDevice) {
                    if (!e2.shiftKey) {
                      sendMessage(e2);
                    }
                  }
                },
                fullWidth: true,
                inputRef: questionRef,
                InputProps: {
                  style: { paddingRight: "5px" },
                  endAdornment: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    IconButton$1,
                    {
                      sx: {
                        borderRadius: "5px",
                        alignSelf: "flex-end"
                      },
                      onClick: (e2) => {
                        if (isMsgSending) {
                          handleAbortRequest();
                        } else {
                          sendMessage(e2);
                        }
                      },
                      children: isMsgSending ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4",
                          "aria-hidden": "true",
                          viewBox: "0 0 24 24",
                          "data-testid": "StopIcon",
                          tabIndex: "-1",
                          fill: "#5f6368",
                          height: "24",
                          width: "24",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 6h12v12H6z" })
                        }
                      ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "svg",
                        {
                          className: "MuiSvgIcon-root MuiSvgIcon-colorPrimary MuiSvgIcon-fontSizeMedium css-1ly4ijh",
                          focusable: "false",
                          "aria-hidden": "true",
                          viewBox: "0 0 24 24",
                          height: "24",
                          width: "24",
                          "data-testid": "SendIcon",
                          fill: "rgb(57, 118, 239)",
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z" })
                        }
                      )
                    }
                  )
                }
              }
            )
          }
        )
      ]
    }
  );
}
function App({ modelHash, RIGHT, BOTTOM, HEIGHT, WIDTH }) {
  const CONFIG = new Config({
    RIGHT,
    BOTTOM,
    HEIGHT,
    WIDTH
  });
  console.log("CONFIG", CONFIG);
  if (!modelHash) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: "Missing modelHash" });
  }
  const [isOpened, setIsOpened] = reactExports.useState(null);
  const [chatContainerIsOpened, setChatContainerIsOpened] = reactExports.useState(false);
  const containerRef = reactExports.useRef(null);
  const handleClick = () => {
    reactExports.startTransition(() => {
      setIsOpened((prev2) => !prev2);
    });
  };
  const logoRef = reactExports.useRef(null);
  const closeRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    if (isOpened === null)
      return;
    if (isOpened) {
      setChatContainerIsOpened(true);
    } else if (isOpened === false) {
      setTimeout(() => {
        setChatContainerIsOpened(false);
      }, 500);
    }
    if (!logoRef.current || !closeRef.current)
      return;
    console.log("isOpened", isOpened);
    if (isOpened) {
      closeRef.current.classList.remove("opened");
      logoRef.current.classList.remove("closed");
      logoRef.current.classList.add("opened");
      closeRef.current.classList.add("closed");
    } else if (!isOpened) {
      logoRef.current.classList.remove("opened");
      closeRef.current.classList.remove("closed");
      logoRef.current.classList.add("closed");
      closeRef.current.classList.add("opened");
    }
  }, [isOpened]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { dangerouslySetInnerHTML: { __html: STYLE$1 } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Box$1,
      {
        sx: {
          position: {
            sm: "absolute",
            xs: "fixed"
          },
          bottom: {
            sm: `${CONFIG.BOTTOM + CONFIG.HEIGHT + 10}px`,
            xs: 0
          },
          right: {
            sm: `${CONFIG.RIGHT}px`,
            xs: 0
          },
          borderRadius: {
            sm: "100%"
          },
          cursor: {
            sm: "pointer",
            xs: "pointer"
          },
          maxWidth: {
            sm: "445px"
          },
          minWidth: {
            sm: "445px"
          },
          width: {
            xs: "100%",
            sm: "445px"
          },
          height: {
            xs: "100svh",
            sm: "auto"
          }
        },
        children: [
          chatContainerIsOpened && /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { sx: { display: "flex" }, ref: containerRef, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Grow$1,
            {
              in: isOpened,
              style: {
                transformOrigin: "bottom right",
                zIndex: 9999
              },
              container: containerRef.current,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box$1, { sx: { width: "100%" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Chatbox, { modelHash, setIsOpened }) })
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Box$1,
            {
              className: "closeRef",
              ref: closeRef,
              style: {
                cursor: "pointer",
                position: "fixed",
                bottom: `${CONFIG.BOTTOM}px`,
                right: `${CONFIG.RIGHT}px`,
                height: `${CONFIG.HEIGHT}px`,
                width: `${CONFIG.WIDTH}px`
              },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "svg",
                {
                  className: "MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSvgIcon-root MuiSvgIcon-fontSizeLarge css-p79yt4",
                  focusable: "false",
                  "aria-hidden": "true",
                  viewBox: "0 0 24 24",
                  "data-testid": "CloseIcon",
                  tabIndex: "-1",
                  title: "Close",
                  height: 30,
                  width: 30,
                  fill: "white",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
                }
              )
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              ref: logoRef,
              className: `logo`,
              style: {
                cursor: "pointer",
                position: "fixed",
                bottom: `${CONFIG.BOTTOM}px`,
                right: `${CONFIG.RIGHT}px`
              },
              height: CONFIG.HEIGHT,
              width: CONFIG.WIDTH,
              onClick: handleClick,
              src: LogoImg
            }
          )
        ]
      }
    )
  ] });
}
const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box"
        },
        html: {
          MozOsxFontSmoothing: "grayscale",
          WebkitFontSmoothing: "antialiased",
          height: "100%",
          width: "100%"
        },
        body: {
          height: "100%"
        },
        a: {
          textDecoration: "none",
          color: "inherit"
        },
        "#root": {
          //  minHeight: '100%',
          height: "100%"
        }
        //  svg: {
        //   width: '25px',
        //   fontSize: '25px',
        //   height: '25px'
        //  }
      }
    }
  },
  spacing: 4,
  typography: {
    fontSize: 14,
    fontFamily: ["InterYounet"].join(","),
    header: {
      fontSize: "1.5rem",
      fontWeight: "500",
      letterSpacing: "0.7px",
      paddingBottom: "20px"
    },
    h1: {
      fontSize: "1.5rem",
      //  fontFamily: 'InterYounet',
      fontWeight: "bold",
      letterSpacing: "0.7px"
    },
    h2: {
      fontSize: "1rem",
      // fontFamily: 'InterYounet',
      fontWeight: "bold",
      letterSpacing: "0.7px"
    },
    h3: {
      fontSize: "0.8rem",
      // fontFamily: 'InterYounet',
      letterSpacing: "0.7px"
    },
    p: {
      fontSize: 14
    },
    sources_title: {
      fontSize: "0.875rem",
      fontWeight: "500",
      paddingRight: "5px"
      // color:'#7b8191'
    },
    truncate_text_150w: {
      display: "inline-block",
      fontSize: "0.7rem",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "150px",
      height: "15px"
    },
    messages: {
      fontSize: "14px",
      fontFamily: "InterYounet, sans-serif",
      letterSpacing: "0.7px",
      display: "block"
    },
    tool_header: {
      width: "100%",
      fontSize: "1.5rem !important",
      letterSpacing: "0.7px",
      textTransform: "uppercase",
      textAlign: "center",
      display: "block"
    },
    link: {
      fontSize: "inherit",
      // fontFamily: 'InterYounet',
      textDecoration: "underline",
      cursor: "poInterYounet",
      letterSpacing: "0.7px"
    },
    span: {
      fontSize: "0.7rem",
      // fontFamily: 'InterYounet',
      letterSpacing: "0.7px"
    },
    one_line_ellipsis: {
      display: "block",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      overflow: "hidden"
    },
    describe_text: {
      fontSize: "0.875rem",
      fontWeight: "400",
      color: "#7b8191"
    },
    list_header: {
      fontSize: "0.7rem",
      fontWeight: "500",
      color: "#7b8191"
    },
    page_title: {
      fontSize: "1.1rem",
      fontWeight: "500",
      color: "rgb(52, 49, 76)",
      margin: "10px 0",
      letterSpacing: "1px"
    },
    page_sub_title: {
      fontSize: "1rem",
      fontWeight: "500",
      color: "rgb(52, 49, 76)"
      // margin: '10px 0',
      // letterSpacing: '0.4px'
    },
    page_sub_title_bold: {
      fontSize: "1rem",
      fontWeight: "600",
      color: "rgb(52, 49, 76)",
      letterSpacing: "0.4px"
    },
    page_content: {
      fontSize: "0.75rem",
      fontWeight: "400",
      color: "rgb(52, 49, 76)"
      // margin: '10px 0',
      // letterSpacing: '0.4px'
    },
    view_data_title: {
      fontSize: "1.2rem",
      fontWeight: "500",
      color: "rgb(52, 49, 76)",
      margin: "10px 0",
      minWidth: "150px",
      maxWidth: "160px",
      letterSpacing: "1px"
    },
    view_data_content: {
      fontSize: "0.8rem",
      width: "100%",
      // color:'rgb(52, 49, 76)',
      margin: "10px 0",
      letterSpacing: "1px"
    },
    view_data_content_preview: {
      fontSize: "0.8rem",
      width: "100%",
      // color:'rgb(52, 49, 76)',
      margin: "10px 0",
      letterSpacing: "1px"
    },
    view_data_time: {
      fontSize: "0.8rem",
      minWidth: "100px",
      maxWidth: "150px",
      // color:'rgb(52, 49, 76)',
      textAlign: "right",
      letterSpacing: "1px"
    },
    cards_title: {
      fontSize: "0.9rem",
      fontWeight: "600",
      color: "rgb(52, 49, 76)"
      // padding: '0px 0'
    },
    gmailFrom: {
      fontSize: "0.8rem",
      letterSpacing: "0.7px",
      display: "block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "150px"
    },
    gmailSubject: {
      fontSize: "0.8rem",
      letterSpacing: "1px",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      maxWidth: "150px"
    },
    gmailContent: {
      fontSize: "0.8rem",
      letterSpacing: "1px",
      display: "inline-block",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      width: "100%",
      maxWidth: "500px",
      color: "#5f6368"
    },
    inline: {
      display: "flex"
    },
    emailTemplateSubject: {
      fontSize: "1.375rem",
      fontWeight: 500,
      letterSpacing: "0.7px"
    },
    emailTemplateName: {
      fontSize: "0.875rem",
      fontWeight: 500,
      letterSpacing: "0.7px"
    },
    emailTemplateEmail: {
      fontSize: "0.75rem",
      color: "#5f6368",
      // fontFamily: 'InterYounet',
      letterSpacing: "0.7px"
    },
    emailTemplateTime: {
      fontSize: "0.75rem",
      color: "#5f6368",
      // fontFamily: 'InterYounet',
      letterSpacing: "0.7px"
    },
    emailTemplateContent: {
      fontSize: "0.813rem",
      // fontFamily: 'InterYounet',
      letterSpacing: "0.7px"
    },
    footerLink: {
      color: "#00000099 !important",
      fontSize: 12,
      textDecoration: "none !important"
    },
    plain_links: {
      position: "relative",
      color: "#3976EF",
      fontSize: "0.813rem",
      padding: "0 2px"
    },
    center_text: {
      textAlign: "center"
    },
    error_status: {
      fontSize: "0.813rem",
      color: "red",
      letterSpacing: "0.7px"
    },
    approved_status: {
      fontSize: "0.813rem",
      color: "green",
      letterSpacing: "0.7px"
    },
    trained_status: {
      fontSize: "0.813rem",
      color: "green",
      letterSpacing: "0.7px"
    },
    pending_status: {
      fontSize: "0.813rem",
      color: "#F7CB73",
      letterSpacing: "0.7px"
    },
    processing_status: {
      fontSize: "0.813rem",
      color: "#F7CB73",
      letterSpacing: "0.7px"
    }
  },
  palette: {
    background: {
      default: "#f9fafb"
    },
    primary: {
      main: "#3976EF"
    },
    secondary: {
      main: "#40B2F2"
    },
    icons: {
      main: "#7b8191"
    },
    // #697ef0
    smoothSecondary: {
      main: "#99baf8"
    },
    deleteIcon: {
      main: "red"
    },
    brighterText: {
      main: "#bdbdbd"
    }
    // light purple
    // #D09CF4
    //
    // error: {
    //  main: '#D72A2A',
    // },
    // warning: {
    //  main: '#FC7B09',
    // },
    // info: {
    //  main: '#6B7D6A',
    // },
    // success: {
    //  main: '#09FE00',
    // },
    // text: {
    //  primary: '#000000',
    //  secondary: '#FFFFFF',
    // },
  }
});
const globalTheme = responsiveFontSizes(theme);
if (!document.getElementById("younet-embed-chatbox")) {
  const root = document.createElement("div");
  root.id = "younet-embed-chatbox";
  root.style.position = "fixed";
  root.style.bottom = "0px";
  root.style.right = "0px";
  console.log("import meta url", import.meta.url);
  const u2 = new URL(import.meta.url);
  const lastSlash = u2.href.lastIndexOf("/");
  const href = u2.href.substring(0, lastSlash + 1) + "Inter-Regular.ttf";
  const InterRegularUrl = href;
  const stylefont = document.createElement("style");
  stylefont.innerHTML = `
    @font-face {
      font-family: 'InterYounet';
      src: url('${InterRegularUrl}');
    }
  `;
  document.head.appendChild(stylefont);
  const url = new URL(import.meta.url);
  console.log("mainjsx url", url);
  const modelHash = url.searchParams.get("modelHash");
  const height2 = url.searchParams.get("height");
  const width2 = url.searchParams.get("width");
  const bottom = url.searchParams.get("bottom");
  const right = url.searchParams.get("right");
  root.appendChild(link);
  const shadow = root.attachShadow({ mode: "open" });
  document.body.appendChild(root);
  const cache = createCache({
    key: "css",
    prepend: true,
    container: shadow
  });
  client.createRoot(shadow).render(
    /* @__PURE__ */ jsxRuntimeExports.jsx(CacheProvider, { value: cache, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(ThemeProvider, { theme: globalTheme, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CssBaseline, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        App,
        {
          modelHash,
          RIGHT: right,
          BOTTOM: bottom,
          HEIGHT: height2,
          WIDTH: width2
        }
      )
    ] }) })
  );
}
export {
  ButtonBase$1 as B,
  Config as C,
  Fade$1 as F,
  IconButton$1 as I,
  Modal$1 as M,
  Paper$1 as P,
  React as R,
  Typography$1 as T,
  _extends as _,
  generateUtilityClass as a,
  rootShouldForwardProp as b,
  capitalize as c,
  alpha as d,
  resolveProps as e,
  _objectWithoutPropertiesLoose as f,
  generateUtilityClasses as g,
  clsx as h,
  composeClasses as i,
  jsxRuntimeExports as j,
  Backdrop$1 as k,
  useTheme as l,
  useId as m,
  getPath as n,
  useIsFocusVisible as o,
  useForkRef as p,
  getDefaultExportFromCjs as q,
  reactExports as r,
  styled as s,
  Box$1 as t,
  useThemeProps as u,
  commonjsGlobal as v
};
