/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function (e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var i = t[r] = {
            i: r
            , l: !1
            , exports: {}
        };
        return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function (e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0
            , get: r
        })
    }, n.r = function (e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function (e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0
                , value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(r, i, function (t) {
                return e[t]
            }.bind(null, i));
        return r
    }, n.n = function (e) {
        var t = e && e.__esModule ? function () {
            return e.default
        } : function () {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 103)
}([function (e, t) {
    e.exports = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t) {
    var n = Array.isArray;
    e.exports = n
}, function (e, t, n) {
    "use strict";
    var r = n(18);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IX2VanillaUtils = t.IX2VanillaPlugins = t.IX2ElementsReducer = t.IX2EngineConstants = t.IX2EngineActionTypes = t.IX2EasingUtils = t.IX2Easings = t.IX2BrowserSupport = void 0;
    var i = r(n(32));
    t.IX2BrowserSupport = i;
    var o = r(n(85));
    t.IX2Easings = o;
    var a = r(n(87));
    t.IX2EasingUtils = a;
    var u = r(n(89));
    t.IX2EngineActionTypes = u;
    var c = r(n(49));
    t.IX2EngineConstants = c;
    var s = r(n(190));
    t.IX2ElementsReducer = s;
    var l = r(n(90));
    t.IX2VanillaPlugins = l;
    var f = r(n(199));
    t.IX2VanillaUtils = f
}, function (e, t, n) {
    var r = n(67)
        , i = "object" == typeof self && self && self.Object === Object && self
        , o = r || i || Function("return this")();
    e.exports = o
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
}, function (e, t, n) {
    "use strict";
    var r = {}
        , i = {}
        , o = []
        , a = window.Webflow || []
        , u = window.jQuery
        , c = u(window)
        , s = u(document)
        , l = u.isFunction
        , f = r._ = n(105)
        , d = r.tram = n(54) && u.tram
        , p = !1
        , v = !1;

    function h(e) {
        r.env() && (l(e.design) && c.on("__wf_design", e.design), l(e.preview) && c.on("__wf_preview", e.preview)), l(e.destroy) && c.on("__wf_destroy", e.destroy), e.ready && l(e.ready) && function (e) {
            if (p) return void e.ready();
            if (f.contains(o, e.ready)) return;
            o.push(e.ready)
        }(e)
    }

    function E(e) {
        l(e.design) && c.off("__wf_design", e.design), l(e.preview) && c.off("__wf_preview", e.preview), l(e.destroy) && c.off("__wf_destroy", e.destroy), e.ready && l(e.ready) && function (e) {
            o = f.filter(o, function (t) {
                return t !== e.ready
            })
        }(e)
    }
    d.config.hideBackface = !1, d.config.keepInherited = !0, r.define = function (e, t, n) {
        i[e] && E(i[e]);
        var r = i[e] = t(u, f, n) || {};
        return h(r), r
    }, r.require = function (e) {
        return i[e]
    }, r.push = function (e) {
        p ? l(e) && e() : a.push(e)
    }, r.env = function (e) {
        var t = window.__wf_design
            , n = void 0 !== t;
        return e ? "design" === e ? n && t : "preview" === e ? n && !t : "slug" === e ? n && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : n
    };
    var _, g = navigator.userAgent.toLowerCase()
        , I = r.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch
        , m = r.env.chrome = /chrome/.test(g) && /Google/.test(navigator.vendor) && parseInt(g.match(/chrome\/(\d+)\./)[1], 10)
        , y = r.env.ios = /(ipod|iphone|ipad)/.test(g);
    r.env.safari = /safari/.test(g) && !m && !y, I && s.on("touchstart mousedown", function (e) {
        _ = e.target
    }), r.validClick = I ? function (e) {
        return e === _ || u.contains(e, _)
    } : function () {
        return !0
    };
    var T, O = "resize.webflow orientationchange.webflow load.webflow";

    function b(e, t) {
        var n = []
            , r = {};
        return r.up = f.throttle(function (e) {
            f.each(n, function (t) {
                t(e)
            })
        }), e && t && e.on(t, r.up), r.on = function (e) {
            "function" == typeof e && (f.contains(n, e) || n.push(e))
        }, r.off = function (e) {
            n = arguments.length ? f.filter(n, function (t) {
                return t !== e
            }) : []
        }, r
    }

    function A(e) {
        l(e) && e()
    }

    function w() {
        T && (T.reject(), c.off("load", T.resolve)), T = new u.Deferred, c.on("load", T.resolve)
    }
    r.resize = b(c, O), r.scroll = b(c, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), r.redraw = b(), r.location = function (e) {
        window.location = e
    }, r.env() && (r.location = function () {}), r.ready = function () {
        p = !0, v ? (v = !1, f.each(i, h)) : f.each(o, A), f.each(a, A), r.resize.up()
    }, r.load = function (e) {
        T.then(e)
    }, r.destroy = function (e) {
        e = e || {}, v = !0, c.triggerHandler("__wf_destroy"), null != e.domready && (p = e.domready), f.each(i, E), r.resize.off(), r.scroll.off(), r.redraw.off(), o = [], a = [], "pending" === T.state() && w()
    }, u(r.ready), w(), e.exports = window.Webflow = r
}, function (e, t) {
    e.exports = function (e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n
            , enumerable: !0
            , configurable: !0
            , writable: !0
        }) : e[t] = n, e
    }
}, function (e, t, n) {
    var r = n(122)
        , i = n(176)
        , o = n(46)
        , a = n(1)
        , u = n(183);
    e.exports = function (e) {
        return "function" == typeof e ? e : null == e ? o : "object" == typeof e ? a(e) ? i(e[0], e[1]) : r(e) : u(e)
    }
}, function (e, t, n) {
    var r = n(134)
        , i = n(139);
    e.exports = function (e, t) {
        var n = i(e, t);
        return r(n) ? n : void 0
    }
}, function (e, t) {
    e.exports = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t, n) {
    var r = n(13)
        , i = n(135)
        , o = n(136)
        , a = "[object Null]"
        , u = "[object Undefined]"
        , c = r ? r.toStringTag : void 0;
    e.exports = function (e) {
        return null == e ? void 0 === e ? u : a : c && c in Object(e) ? i(e) : o(e)
    }
}, function (e, t, n) {
    var r = n(66)
        , i = n(40);
    e.exports = function (e) {
        return null != e && i(e.length) && !r(e)
    }
}, function (e, t) {
    function n() {
        return e.exports = n = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        }, n.apply(this, arguments)
    }
    e.exports = n
}, function (e, t, n) {
    var r = n(3).Symbol;
    e.exports = r
}, function (e, t, n) {
    var r = n(27)
        , i = 1 / 0;
    e.exports = function (e) {
        if ("string" == typeof e || r(e)) return e;
        var t = e + "";
        return "0" == t && 1 / e == -i ? "-0" : t
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    };
    t.clone = c, t.addLast = f, t.addFirst = d, t.removeLast = p, t.removeFirst = v, t.insert = h, t.removeAt = E, t.replaceAt = _, t.getIn = g, t.set = I, t.setIn = m, t.update = y, t.updateIn = T, t.merge = O, t.mergeDeep = b, t.mergeIn = A, t.omit = w, t.addDefaults = S;
    /*!
     * Timm
     *
     * Immutability helpers with fast reads and acceptable writes.
     *
     * @copyright Guillermo Grau Panea 2016
     * @license MIT
     */
    var i = "INVALID_ARGS";

    function o(e) {
        throw new Error(e)
    }

    function a(e) {
        var t = Object.keys(e);
        return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
    }
    var u = {}.hasOwnProperty;

    function c(e) {
        if (Array.isArray(e)) return e.slice();
        for (var t = a(e), n = {}, r = 0; r < t.length; r++) {
            var i = t[r];
            n[i] = e[i]
        }
        return n
    }

    function s(e, t, n) {
        var r = n;
        null == r && o(i);
        for (var u = !1, f = arguments.length, d = Array(f > 3 ? f - 3 : 0), p = 3; p < f; p++) d[p - 3] = arguments[p];
        for (var v = 0; v < d.length; v++) {
            var h = d[v];
            if (null != h) {
                var E = a(h);
                if (E.length)
                    for (var _ = 0; _ <= E.length; _++) {
                        var g = E[_];
                        if (!e || void 0 === r[g]) {
                            var I = h[g];
                            t && l(r[g]) && l(I) && (I = s(e, t, r[g], I)), void 0 !== I && I !== r[g] && (u || (u = !0, r = c(r)), r[g] = I)
                        }
                    }
            }
        }
        return r
    }

    function l(e) {
        var t = void 0 === e ? "undefined" : r(e);
        return null != e && ("object" === t || "function" === t)
    }

    function f(e, t) {
        return Array.isArray(t) ? e.concat(t) : e.concat([t])
    }

    function d(e, t) {
        return Array.isArray(t) ? t.concat(e) : [t].concat(e)
    }

    function p(e) {
        return e.length ? e.slice(0, e.length - 1) : e
    }

    function v(e) {
        return e.length ? e.slice(1) : e
    }

    function h(e, t, n) {
        return e.slice(0, t).concat(Array.isArray(n) ? n : [n]).concat(e.slice(t))
    }

    function E(e, t) {
        return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
    }

    function _(e, t, n) {
        if (e[t] === n) return e;
        for (var r = e.length, i = Array(r), o = 0; o < r; o++) i[o] = e[o];
        return i[t] = n, i
    }

    function g(e, t) {
        if (!Array.isArray(t) && o(i), null != e) {
            for (var n = e, r = 0; r < t.length; r++) {
                var a = t[r];
                if (void 0 === (n = null != n ? n[a] : void 0)) return n
            }
            return n
        }
    }

    function I(e, t, n) {
        var r = null == e ? "number" == typeof t ? [] : {} : e;
        if (r[t] === n) return r;
        var i = c(r);
        return i[t] = n, i
    }

    function m(e, t, n) {
        return t.length ? function e(t, n, r, i) {
            var o = void 0
                , a = n[i];
            o = i === n.length - 1 ? r : e(l(t) && l(t[a]) ? t[a] : "number" == typeof n[i + 1] ? [] : {}, n, r, i + 1);
            return I(t, a, o)
        }(e, t, n, 0) : n
    }

    function y(e, t, n) {
        return I(e, t, n(null == e ? void 0 : e[t]))
    }

    function T(e, t, n) {
        return m(e, t, n(g(e, t)))
    }

    function O(e, t, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !1, e, t, n, r, i, o].concat(u)) : s(!1, !1, e, t, n, r, i, o)
    }

    function b(e, t, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !1, !0, e, t, n, r, i, o].concat(u)) : s(!1, !0, e, t, n, r, i, o)
    }

    function A(e, t, n, r, i, o, a) {
        var u = g(e, t);
        null == u && (u = {});
        for (var c = arguments.length, l = Array(c > 7 ? c - 7 : 0), f = 7; f < c; f++) l[f - 7] = arguments[f];
        return m(e, t, l.length ? s.call.apply(s, [null, !1, !1, u, n, r, i, o, a].concat(l)) : s(!1, !1, u, n, r, i, o, a))
    }

    function w(e, t) {
        for (var n = Array.isArray(t) ? t : [t], r = !1, i = 0; i < n.length; i++)
            if (u.call(e, n[i])) {
                r = !0;
                break
            }
        if (!r) return e;
        for (var o = {}, c = a(e), s = 0; s < c.length; s++) {
            var l = c[s];
            n.indexOf(l) >= 0 || (o[l] = e[l])
        }
        return o
    }

    function S(e, t, n, r, i, o) {
        for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
        return u.length ? s.call.apply(s, [null, !0, !1, e, t, n, r, i, o].concat(u)) : s(!0, !1, e, t, n, r, i, o)
    }
    var R = {
        clone: c
        , addLast: f
        , addFirst: d
        , removeLast: p
        , removeFirst: v
        , insert: h
        , removeAt: E
        , replaceAt: _
        , getIn: g
        , set: I
        , setIn: m
        , update: y
        , updateIn: T
        , merge: O
        , mergeDeep: b
        , mergeIn: A
        , omit: w
        , addDefaults: S
    };
    t.default = R
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(192);
    Object.keys(r).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return r[e]
            }
        })
    });
    var i = n(91);
    Object.keys(i).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return i[e]
            }
        })
    });
    var o = n(196);
    Object.keys(o).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return o[e]
            }
        })
    });
    var a = n(197);
    Object.keys(a).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return a[e]
            }
        })
    });
    var u = n(198);
    Object.keys(u).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return u[e]
            }
        })
    })
}, function (e, t) {
    function n(e) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function r(t) {
        return "function" == typeof Symbol && "symbol" === n(Symbol.iterator) ? e.exports = r = function (e) {
            return n(e)
        } : e.exports = r = function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : n(e)
        }, r(t)
    }
    e.exports = r
}, function (e, t) {
    e.exports = function (e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
            for (var n in e)
                if (Object.prototype.hasOwnProperty.call(e, n)) {
                    var r = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, n) : {};
                    r.get || r.set ? Object.defineProperty(t, n, r) : t[n] = e[n]
                }
        return t.default = e, t
    }
}, function (e, t, n) {
    var r = n(124)
        , i = n(125)
        , o = n(126)
        , a = n(127)
        , u = n(128);

    function c(e) {
        var t = -1
            , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, e.exports = c
}, function (e, t, n) {
    var r = n(33);
    e.exports = function (e, t) {
        for (var n = e.length; n--;)
            if (r(e[n][0], t)) return n;
        return -1
    }
}, function (e, t, n) {
    var r = n(8)(Object, "create");
    e.exports = r
}, function (e, t, n) {
    var r = n(148);
    e.exports = function (e, t) {
        var n = e.__data__;
        return r(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
    }
}, function (e, t, n) {
    var r = n(74)
        , i = n(41)
        , o = n(11);
    e.exports = function (e) {
        return o(e) ? r(e) : i(e)
    }
}, function (e, t, n) {
    var r = n(166)
        , i = n(9)
        , o = Object.prototype
        , a = o.hasOwnProperty
        , u = o.propertyIsEnumerable
        , c = r(function () {
            return arguments
        }()) ? r : function (e) {
            return i(e) && a.call(e, "callee") && !u.call(e, "callee")
        };
    e.exports = c
}, function (e, t, n) {
    var r = n(44);
    e.exports = function (e, t, n) {
        var i = null == e ? void 0 : r(e, t);
        return void 0 === i ? n : i
    }
}, function (e, t, n) {
    var r = n(1)
        , i = n(45)
        , o = n(177)
        , a = n(80);
    e.exports = function (e, t) {
        return r(e) ? e : i(e, t) ? [e] : o(a(e))
    }
}, function (e, t, n) {
    var r = n(10)
        , i = n(9)
        , o = "[object Symbol]";
    e.exports = function (e) {
        return "symbol" == typeof e || i(e) && r(e) == o
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var r = n(193);
    Object.keys(r).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return r[e]
            }
        })
    });
    var i = n(92);
    Object.keys(i).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return i[e]
            }
        })
    });
    var o = n(195);
    Object.keys(o).forEach(function (e) {
        "default" !== e && "__esModule" !== e && Object.defineProperty(t, e, {
            enumerable: !0
            , get: function () {
                return o[e]
            }
        })
    })
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "ActionTypes", function () {
        return o
    }), n.d(t, "default", function () {
        return a
    });
    var r = n(57)
        , i = n(117)
        , o = {
            INIT: "@@redux/INIT"
        };

    function a(e, t, n) {
        var u;
        if ("function" == typeof t && void 0 === n && (n = t, t = void 0), void 0 !== n) {
            if ("function" != typeof n) throw new Error("Expected the enhancer to be a function.");
            return n(a)(e, t)
        }
        if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
        var c = e
            , s = t
            , l = []
            , f = l
            , d = !1;

        function p() {
            f === l && (f = l.slice())
        }

        function v() {
            return s
        }

        function h(e) {
            if ("function" != typeof e) throw new Error("Expected listener to be a function.");
            var t = !0;
            return p(), f.push(e)
                , function () {
                    if (t) {
                        t = !1, p();
                        var n = f.indexOf(e);
                        f.splice(n, 1)
                    }
                }
        }

        function E(e) {
            if (!Object(r.default)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
            if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
            if (d) throw new Error("Reducers may not dispatch actions.");
            try {
                d = !0, s = c(s, e)
            } finally {
                d = !1
            }
            for (var t = l = f, n = 0; n < t.length; n++) t[n]();
            return e
        }
        return E({
            type: o.INIT
        }), (u = {
            dispatch: E
            , subscribe: h
            , getState: v
            , replaceReducer: function (e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                c = e, E({
                    type: o.INIT
                })
            }
        })[i.default] = function () {
            var e, t = h;
            return (e = {
                subscribe: function (e) {
                    if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");

                    function n() {
                        e.next && e.next(v())
                    }
                    return n(), {
                        unsubscribe: t(n)
                    }
                }
            })[i.default] = function () {
                return this
            }, e
        }, u
    }
}, function (e, t) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}, function (e, t, n) {
    "use strict";

    function r() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        if (0 === t.length) return function (e) {
            return e
        };
        if (1 === t.length) return t[0];
        var r = t[t.length - 1]
            , i = t.slice(0, -1);
        return function () {
            return i.reduceRight(function (e, t) {
                return t(e)
            }, r.apply(void 0, arguments))
        }
    }
    n.r(t), n.d(t, "default", function () {
        return r
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.TRANSFORM_STYLE_PREFIXED = t.TRANSFORM_PREFIXED = t.FLEX_PREFIXED = t.ELEMENT_MATCHES = t.withBrowser = t.IS_BROWSER_ENV = void 0;
    var i = r(n(63))
        , o = "undefined" != typeof window;
    t.IS_BROWSER_ENV = o;
    var a = function (e, t) {
        return o ? e() : t
    };
    t.withBrowser = a;
    var u = a(function () {
        return (0, i.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], function (e) {
            return e in Element.prototype
        })
    });
    t.ELEMENT_MATCHES = u;
    var c = a(function () {
        var e = document.createElement("i")
            , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
        try {
            for (var n = t.length, r = 0; r < n; r++) {
                var i = t[r];
                if (e.style.display = i, e.style.display === i) return i
            }
            return ""
        } catch (e) {
            return ""
        }
    }, "flex");
    t.FLEX_PREFIXED = c;
    var s = a(function () {
        var e = document.createElement("i");
        if (null == e.style.transform)
            for (var t = ["Webkit", "Moz", "ms"], n = t.length, r = 0; r < n; r++) {
                var i = t[r] + "Transform";
                if (void 0 !== e.style[i]) return i
            }
        return "transform"
    }, "transform");
    t.TRANSFORM_PREFIXED = s;
    var l = s.split("transform")[0]
        , f = l ? l + "TransformStyle" : "transformStyle";
    t.TRANSFORM_STYLE_PREFIXED = f
}, function (e, t) {
    e.exports = function (e, t) {
        return e === t || e != e && t != t
    }
}, function (e, t, n) {
    var r = n(8)(n(3), "Map");
    e.exports = r
}, function (e, t, n) {
    var r = n(140)
        , i = n(147)
        , o = n(149)
        , a = n(150)
        , u = n(151);

    function c(e) {
        var t = -1
            , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, e.exports = c
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
        return e
    }
}, function (e, t, n) {
    (function (e) {
        var r = n(3)
            , i = n(167)
            , o = t && !t.nodeType && t
            , a = o && "object" == typeof e && e && !e.nodeType && e
            , u = a && a.exports === o ? r.Buffer : void 0
            , c = (u ? u.isBuffer : void 0) || i;
        e.exports = c
    }).call(this, n(75)(e))
}, function (e, t) {
    var n = 9007199254740991
        , r = /^(?:0|[1-9]\d*)$/;
    e.exports = function (e, t) {
        var i = typeof e;
        return !!(t = null == t ? n : t) && ("number" == i || "symbol" != i && r.test(e)) && e > -1 && e % 1 == 0 && e < t
    }
}, function (e, t, n) {
    var r = n(168)
        , i = n(169)
        , o = n(170)
        , a = o && o.isTypedArray
        , u = a ? i(a) : r;
    e.exports = u
}, function (e, t) {
    var n = 9007199254740991;
    e.exports = function (e) {
        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
    }
}, function (e, t, n) {
    var r = n(42)
        , i = n(171)
        , o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        if (!r(e)) return i(e);
        var t = [];
        for (var n in Object(e)) o.call(e, n) && "constructor" != n && t.push(n);
        return t
    }
}, function (e, t) {
    var n = Object.prototype;
    e.exports = function (e) {
        var t = e && e.constructor;
        return e === ("function" == typeof t && t.prototype || n)
    }
}, function (e, t, n) {
    var r = n(172)
        , i = n(34)
        , o = n(173)
        , a = n(174)
        , u = n(77)
        , c = n(10)
        , s = n(68)
        , l = s(r)
        , f = s(i)
        , d = s(o)
        , p = s(a)
        , v = s(u)
        , h = c;
    (r && "[object DataView]" != h(new r(new ArrayBuffer(1))) || i && "[object Map]" != h(new i) || o && "[object Promise]" != h(o.resolve()) || a && "[object Set]" != h(new a) || u && "[object WeakMap]" != h(new u)) && (h = function (e) {
        var t = c(e)
            , n = "[object Object]" == t ? e.constructor : void 0
            , r = n ? s(n) : "";
        if (r) switch (r) {
        case l:
            return "[object DataView]";
        case f:
            return "[object Map]";
        case d:
            return "[object Promise]";
        case p:
            return "[object Set]";
        case v:
            return "[object WeakMap]"
        }
        return t
    }), e.exports = h
}, function (e, t, n) {
    var r = n(26)
        , i = n(14);
    e.exports = function (e, t) {
        for (var n = 0, o = (t = r(t, e)).length; null != e && n < o;) e = e[i(t[n++])];
        return n && n == o ? e : void 0
    }
}, function (e, t, n) {
    var r = n(1)
        , i = n(27)
        , o = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
        , a = /^\w*$/;
    e.exports = function (e, t) {
        if (r(e)) return !1;
        var n = typeof e;
        return !("number" != n && "symbol" != n && "boolean" != n && null != e && !i(e)) || a.test(e) || !o.test(e) || null != t && e in Object(t)
    }
}, function (e, t) {
    e.exports = function (e) {
        return e
    }
}, function (e, t, n) {
    var r = n(186);
    e.exports = function (e) {
        var t = r(e)
            , n = t % 1;
        return t == t ? n ? t - n : t : 0
    }
}, function (e, t, n) {
    var r = n(4)
        , i = n(27)
        , o = NaN
        , a = /^\s+|\s+$/g
        , u = /^[-+]0x[0-9a-f]+$/i
        , c = /^0b[01]+$/i
        , s = /^0o[0-7]+$/i
        , l = parseInt;
    e.exports = function (e) {
        if ("number" == typeof e) return e;
        if (i(e)) return o;
        if (r(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = r(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(a, "");
        var n = c.test(e);
        return n || s.test(e) ? l(e.slice(2), n ? 2 : 8) : u.test(e) ? o : +e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.RENDER_PLUGIN = t.RENDER_STYLE = t.RENDER_GENERAL = t.RENDER_TRANSFORM = t.ABSTRACT_NODE = t.PLAIN_OBJECT = t.HTML_ELEMENT = t.PRESERVE_3D = t.PARENT = t.SIBLINGS = t.IMMEDIATE_CHILDREN = t.CHILDREN = t.BAR_DELIMITER = t.COLON_DELIMITER = t.COMMA_DELIMITER = t.AUTO = t.WILL_CHANGE = t.FLEX = t.DISPLAY = t.COLOR = t.BORDER_COLOR = t.BACKGROUND = t.BACKGROUND_COLOR = t.HEIGHT = t.WIDTH = t.FILTER = t.OPACITY = t.SKEW_Y = t.SKEW_X = t.SKEW = t.ROTATE_Z = t.ROTATE_Y = t.ROTATE_X = t.SCALE_3D = t.SCALE_Z = t.SCALE_Y = t.SCALE_X = t.TRANSLATE_3D = t.TRANSLATE_Z = t.TRANSLATE_Y = t.TRANSLATE_X = t.TRANSFORM = t.CONFIG_UNIT = t.CONFIG_Z_UNIT = t.CONFIG_Y_UNIT = t.CONFIG_X_UNIT = t.CONFIG_VALUE = t.CONFIG_Z_VALUE = t.CONFIG_Y_VALUE = t.CONFIG_X_VALUE = t.BOUNDARY_SELECTOR = t.W_MOD_IX = t.W_MOD_JS = t.WF_PAGE = t.IX2_ID_DELIMITER = void 0;
    t.IX2_ID_DELIMITER = "|";
    t.WF_PAGE = "data-wf-page";
    t.W_MOD_JS = "w-mod-js";
    t.W_MOD_IX = "w-mod-ix";
    t.BOUNDARY_SELECTOR = ".w-dyn-item";
    t.CONFIG_X_VALUE = "xValue";
    t.CONFIG_Y_VALUE = "yValue";
    t.CONFIG_Z_VALUE = "zValue";
    t.CONFIG_VALUE = "value";
    t.CONFIG_X_UNIT = "xUnit";
    t.CONFIG_Y_UNIT = "yUnit";
    t.CONFIG_Z_UNIT = "zUnit";
    t.CONFIG_UNIT = "unit";
    t.TRANSFORM = "transform";
    t.TRANSLATE_X = "translateX";
    t.TRANSLATE_Y = "translateY";
    t.TRANSLATE_Z = "translateZ";
    t.TRANSLATE_3D = "translate3d";
    t.SCALE_X = "scaleX";
    t.SCALE_Y = "scaleY";
    t.SCALE_Z = "scaleZ";
    t.SCALE_3D = "scale3d";
    t.ROTATE_X = "rotateX";
    t.ROTATE_Y = "rotateY";
    t.ROTATE_Z = "rotateZ";
    t.SKEW = "skew";
    t.SKEW_X = "skewX";
    t.SKEW_Y = "skewY";
    t.OPACITY = "opacity";
    t.FILTER = "filter";
    t.WIDTH = "width";
    t.HEIGHT = "height";
    t.BACKGROUND_COLOR = "backgroundColor";
    t.BACKGROUND = "background";
    t.BORDER_COLOR = "borderColor";
    t.COLOR = "color";
    t.DISPLAY = "display";
    t.FLEX = "flex";
    t.WILL_CHANGE = "willChange";
    t.AUTO = "AUTO";
    t.COMMA_DELIMITER = ",";
    t.COLON_DELIMITER = ":";
    t.BAR_DELIMITER = "|";
    t.CHILDREN = "CHILDREN";
    t.IMMEDIATE_CHILDREN = "IMMEDIATE_CHILDREN";
    t.SIBLINGS = "SIBLINGS";
    t.PARENT = "PARENT";
    t.PRESERVE_3D = "preserve-3d";
    t.HTML_ELEMENT = "HTML_ELEMENT";
    t.PLAIN_OBJECT = "PLAIN_OBJECT";
    t.ABSTRACT_NODE = "ABSTRACT_NODE";
    t.RENDER_TRANSFORM = "RENDER_TRANSFORM";
    t.RENDER_GENERAL = "RENDER_GENERAL";
    t.RENDER_STYLE = "RENDER_STYLE";
    t.RENDER_PLUGIN = "RENDER_PLUGIN"
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.mediaQueriesDefined = t.viewportWidthChanged = t.actionListPlaybackChanged = t.elementStateChanged = t.instanceRemoved = t.instanceStarted = t.instanceAdded = t.parameterChanged = t.animationFrameChanged = t.eventStateChanged = t.testFrameRendered = t.eventListenerAdded = t.clearRequested = t.stopRequested = t.playbackRequested = t.previewRequested = t.sessionStopped = t.sessionStarted = t.sessionInitialized = t.rawDataImported = void 0;
    var i = r(n(12))
        , o = n(16)
        , a = n(2)
        , u = a.IX2EngineActionTypes
        , c = u.IX2_RAW_DATA_IMPORTED
        , s = u.IX2_SESSION_INITIALIZED
        , l = u.IX2_SESSION_STARTED
        , f = u.IX2_SESSION_STOPPED
        , d = u.IX2_PREVIEW_REQUESTED
        , p = u.IX2_PLAYBACK_REQUESTED
        , v = u.IX2_STOP_REQUESTED
        , h = u.IX2_CLEAR_REQUESTED
        , E = u.IX2_EVENT_LISTENER_ADDED
        , _ = u.IX2_TEST_FRAME_RENDERED
        , g = u.IX2_EVENT_STATE_CHANGED
        , I = u.IX2_ANIMATION_FRAME_CHANGED
        , m = u.IX2_PARAMETER_CHANGED
        , y = u.IX2_INSTANCE_ADDED
        , T = u.IX2_INSTANCE_STARTED
        , O = u.IX2_INSTANCE_REMOVED
        , b = u.IX2_ELEMENT_STATE_CHANGED
        , A = u.IX2_ACTION_LIST_PLAYBACK_CHANGED
        , w = u.IX2_VIEWPORT_WIDTH_CHANGED
        , S = u.IX2_MEDIA_QUERIES_DEFINED
        , R = a.IX2VanillaUtils.reifyState;
    t.rawDataImported = function (e) {
        return {
            type: c
            , payload: (0, i.default)({}, R(e))
        }
    };
    t.sessionInitialized = function (e) {
        var t = e.hasBoundaryNodes;
        return {
            type: s
            , payload: {
                hasBoundaryNodes: t
            }
        }
    };
    t.sessionStarted = function () {
        return {
            type: l
        }
    };
    t.sessionStopped = function () {
        return {
            type: f
        }
    };
    t.previewRequested = function (e) {
        var t = e.rawData
            , n = e.defer;
        return {
            type: d
            , payload: {
                defer: n
                , rawData: t
            }
        }
    };
    t.playbackRequested = function (e) {
        var t = e.actionTypeId
            , n = void 0 === t ? o.ActionTypeConsts.GENERAL_START_ACTION : t
            , r = e.actionListId
            , i = e.actionItemId
            , a = e.eventId
            , u = e.allowEvents
            , c = e.immediate
            , s = e.testManual
            , l = e.verbose
            , f = e.rawData;
        return {
            type: p
            , payload: {
                actionTypeId: n
                , actionListId: r
                , actionItemId: i
                , testManual: s
                , eventId: a
                , allowEvents: u
                , immediate: c
                , verbose: l
                , rawData: f
            }
        }
    };
    t.stopRequested = function (e) {
        return {
            type: v
            , payload: {
                actionListId: e
            }
        }
    };
    t.clearRequested = function () {
        return {
            type: h
        }
    };
    t.eventListenerAdded = function (e, t) {
        return {
            type: E
            , payload: {
                target: e
                , listenerParams: t
            }
        }
    };
    t.testFrameRendered = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
        return {
            type: _
            , payload: {
                step: e
            }
        }
    };
    t.eventStateChanged = function (e, t) {
        return {
            type: g
            , payload: {
                stateKey: e
                , newState: t
            }
        }
    };
    t.animationFrameChanged = function (e, t) {
        return {
            type: I
            , payload: {
                now: e
                , parameters: t
            }
        }
    };
    t.parameterChanged = function (e, t) {
        return {
            type: m
            , payload: {
                key: e
                , value: t
            }
        }
    };
    t.instanceAdded = function (e) {
        return {
            type: y
            , payload: (0, i.default)({}, e)
        }
    };
    t.instanceStarted = function (e, t) {
        return {
            type: T
            , payload: {
                instanceId: e
                , time: t
            }
        }
    };
    t.instanceRemoved = function (e) {
        return {
            type: O
            , payload: {
                instanceId: e
            }
        }
    };
    t.elementStateChanged = function (e, t, n, r) {
        return {
            type: b
            , payload: {
                elementId: e
                , actionTypeId: t
                , current: n
                , actionItem: r
            }
        }
    };
    t.actionListPlaybackChanged = function (e) {
        var t = e.actionListId
            , n = e.isPlaying;
        return {
            type: A
            , payload: {
                actionListId: t
                , isPlaying: n
            }
        }
    };
    t.viewportWidthChanged = function (e) {
        var t = e.width
            , n = e.mediaQueries;
        return {
            type: w
            , payload: {
                width: t
                , mediaQueries: n
            }
        }
    };
    t.mediaQueriesDefined = function () {
        return {
            type: S
        }
    }
}, function (e, t, n) {
    var r = n(100)
        , i = n(52);

    function o(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
    }
    o.prototype = r(i.prototype), o.prototype.constructor = o, e.exports = o
}, function (e, t) {
    e.exports = function () {}
}, function (e, t, n) {
    var r = n(100)
        , i = n(52)
        , o = 4294967295;

    function a(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = o, this.__views__ = []
    }
    a.prototype = r(i.prototype), a.prototype.constructor = a, e.exports = a
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(17));
    window.tram = function (e) {
        function t(e, t) {
            return (new j.Bare).init(e, t)
        }

        function n(e) {
            return e.replace(/[A-Z]/g, function (e) {
                return "-" + e.toLowerCase()
            })
        }

        function i(e) {
            var t = parseInt(e.slice(1), 16);
            return [t >> 16 & 255, t >> 8 & 255, 255 & t]
        }

        function o(e, t, n) {
            return "#" + (1 << 24 | e << 16 | t << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function u(e, t, n) {
            s("Units do not match [" + e + "]: " + t + ", " + n)
        }

        function c(e, t, n) {
            if (void 0 !== t && (n = t), void 0 === e) return n;
            var r = n;
            return $.test(e) || !Z.test(e) ? r = parseInt(e, 10) : Z.test(e) && (r = 1e3 * parseFloat(e)), 0 > r && (r = 0), r == r ? r : n
        }

        function s(e) {
            H.debug && window && window.console.warn(e)
        }
        var l = function (e, t, n) {
                function i(e) {
                    return "object" == (0, r.default)(e)
                }

                function o(e) {
                    return "function" == typeof e
                }

                function a() {}
                return function r(u, c) {
                    function s() {
                        var e = new l;
                        return o(e.init) && e.init.apply(e, arguments), e
                    }

                    function l() {}
                    c === n && (c = u, u = Object), s.Bare = l;
                    var f, d = a[e] = u[e]
                        , p = l[e] = s[e] = new a;
                    return p.constructor = s, s.mixin = function (t) {
                        return l[e] = s[e] = r(s, t)[e], s
                    }, s.open = function (e) {
                        if (f = {}, o(e) ? f = e.call(s, p, d, s, u) : i(e) && (f = e), i(f))
                            for (var n in f) t.call(f, n) && (p[n] = f[n]);
                        return o(p.init) || (p.init = u), s
                    }, s.open(c)
                }
            }("prototype", {}.hasOwnProperty)
            , f = {
                ease: ["ease", function (e, t, n, r) {
                    var i = (e /= r) * e
                        , o = i * e;
                    return t + n * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                }]
                , "ease-in": ["ease-in", function (e, t, n, r) {
                    var i = (e /= r) * e
                        , o = i * e;
                    return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                }]
                , "ease-out": ["ease-out", function (e, t, n, r) {
                    var i = (e /= r) * e
                        , o = i * e;
                    return t + n * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                }]
                , "ease-in-out": ["ease-in-out", function (e, t, n, r) {
                    var i = (e /= r) * e
                        , o = i * e;
                    return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                }]
                , linear: ["linear", function (e, t, n, r) {
                    return n * e / r + t
                }]
                , "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function (e, t, n, r) {
                    return n * (e /= r) * e + t
                }]
                , "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function (e, t, n, r) {
                    return -n * (e /= r) * (e - 2) + t
                }]
                , "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                }]
                , "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function (e, t, n, r) {
                    return n * (e /= r) * e * e + t
                }]
                , "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function (e, t, n, r) {
                    return n * ((e = e / r - 1) * e * e + 1) + t
                }]
                , "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                }]
                , "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function (e, t, n, r) {
                    return n * (e /= r) * e * e * e + t
                }]
                , "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function (e, t, n, r) {
                    return -n * ((e = e / r - 1) * e * e * e - 1) + t
                }]
                , "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e * e * e + t : -n / 2 * ((e -= 2) * e * e * e - 2) + t
                }]
                , "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function (e, t, n, r) {
                    return n * (e /= r) * e * e * e * e + t
                }]
                , "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function (e, t, n, r) {
                    return n * ((e = e / r - 1) * e * e * e * e + 1) + t
                }]
                , "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? n / 2 * e * e * e * e * e + t : n / 2 * ((e -= 2) * e * e * e * e + 2) + t
                }]
                , "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function (e, t, n, r) {
                    return -n * Math.cos(e / r * (Math.PI / 2)) + n + t
                }]
                , "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function (e, t, n, r) {
                    return n * Math.sin(e / r * (Math.PI / 2)) + t
                }]
                , "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function (e, t, n, r) {
                    return -n / 2 * (Math.cos(Math.PI * e / r) - 1) + t
                }]
                , "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function (e, t, n, r) {
                    return 0 === e ? t : n * Math.pow(2, 10 * (e / r - 1)) + t
                }]
                , "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function (e, t, n, r) {
                    return e === r ? t + n : n * (1 - Math.pow(2, -10 * e / r)) + t
                }]
                , "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function (e, t, n, r) {
                    return 0 === e ? t : e === r ? t + n : (e /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (e - 1)) + t : n / 2 * (2 - Math.pow(2, -10 * --e)) + t
                }]
                , "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function (e, t, n, r) {
                    return -n * (Math.sqrt(1 - (e /= r) * e) - 1) + t
                }]
                , "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function (e, t, n, r) {
                    return n * Math.sqrt(1 - (e = e / r - 1) * e) + t
                }]
                , "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function (e, t, n, r) {
                    return (e /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - e * e) - 1) + t : n / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                }]
                , "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function (e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * (e /= r) * e * ((i + 1) * e - i) + t
                }]
                , "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function (e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158), n * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
                }]
                , "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function (e, t, n, r, i) {
                    return void 0 === i && (i = 1.70158), (e /= r / 2) < 1 ? n / 2 * e * e * ((1 + (i *= 1.525)) * e - i) + t : n / 2 * ((e -= 2) * e * ((1 + (i *= 1.525)) * e + i) + 2) + t
                }]
            }
            , d = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)"
                , "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)"
                , "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
            , p = document
            , v = window
            , h = "bkwld-tram"
            , E = /[\-\.0-9]/g
            , _ = /[A-Z]/
            , g = "number"
            , I = /^(rgb|#)/
            , m = /(em|cm|mm|in|pt|pc|px)$/
            , y = /(em|cm|mm|in|pt|pc|px|%)$/
            , T = /(deg|rad|turn)$/
            , O = "unitless"
            , b = /(all|none) 0s ease 0s/
            , A = /^(width|height)$/
            , w = " "
            , S = p.createElement("a")
            , R = ["Webkit", "Moz", "O", "ms"]
            , C = ["-webkit-", "-moz-", "-o-", "-ms-"]
            , N = function (e) {
                if (e in S.style) return {
                    dom: e
                    , css: e
                };
                var t, n, r = ""
                    , i = e.split("-");
                for (t = 0; t < i.length; t++) r += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                for (t = 0; t < R.length; t++)
                    if ((n = R[t] + r) in S.style) return {
                        dom: n
                        , css: C[t] + e
                    }
            }
            , L = t.support = {
                bind: Function.prototype.bind
                , transform: N("transform")
                , transition: N("transition")
                , backface: N("backface-visibility")
                , timing: N("transition-timing-function")
            };
        if (L.transition) {
            var x = L.timing.dom;
            if (S.style[x] = f["ease-in-back"][0], !S.style[x])
                for (var D in d) f[D][0] = d[D]
        }
        var P = t.frame = function () {
                var e = v.requestAnimationFrame || v.webkitRequestAnimationFrame || v.mozRequestAnimationFrame || v.oRequestAnimationFrame || v.msRequestAnimationFrame;
                return e && L.bind ? e.bind(v) : function (e) {
                    v.setTimeout(e, 16)
                }
            }()
            , M = t.now = function () {
                var e = v.performance
                    , t = e && (e.now || e.webkitNow || e.msNow || e.mozNow);
                return t && L.bind ? t.bind(e) : Date.now || function () {
                    return +new Date
                }
            }()
            , F = l(function (t) {
                function i(e, t) {
                    var n = function (e) {
                            for (var t = -1, n = e ? e.length : 0, r = []; ++t < n;) {
                                var i = e[t];
                                i && r.push(i)
                            }
                            return r
                        }(("" + e).split(w))
                        , r = n[0];
                    t = t || {};
                    var i = Q[r];
                    if (!i) return s("Unsupported property: " + r);
                    if (!t.weak || !this.props[r]) {
                        var o = i[0]
                            , a = this.props[r];
                        return a || (a = this.props[r] = new o.Bare), a.init(this.$el, n, i, t), a
                    }
                }

                function o(e, t, n) {
                    if (e) {
                        var o = (0, r.default)(e);
                        if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && t) return this.timer = new B({
                            duration: e
                            , context: this
                            , complete: a
                        }), void(this.active = !0);
                        if ("string" == o && t) {
                            switch (e) {
                            case "hide":
                                l.call(this);
                                break;
                            case "stop":
                                u.call(this);
                                break;
                            case "redraw":
                                f.call(this);
                                break;
                            default:
                                i.call(this, e, n && n[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void e.call(this, this);
                        if ("object" == o) {
                            var s = 0;
                            p.call(this, e, function (e, t) {
                                e.span > s && (s = e.span), e.stop(), e.animate(t)
                            }, function (e) {
                                "wait" in e && (s = c(e.wait, 0))
                            }), d.call(this), s > 0 && (this.timer = new B({
                                duration: s
                                , context: this
                            }), this.active = !0, t && (this.timer.complete = a));
                            var v = this
                                , h = !1
                                , E = {};
                            P(function () {
                                p.call(v, e, function (e) {
                                    e.active && (h = !0, E[e.name] = e.nextStyle)
                                }), h && v.$el.css(E)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var e = this.queue.shift();
                        o.call(this, e.options, !0, e.args)
                    }
                }

                function u(e) {
                    var t;
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == (0, r.default)(e) && null != e ? e : this.props, p.call(this, t, v), d.call(this)
                }

                function l() {
                    u.call(this), this.el.style.display = "none"
                }

                function f() {
                    this.el.offsetHeight
                }

                function d() {
                    var e, t, n = [];
                    for (e in this.upstream && n.push(this.upstream), this.props)(t = this.props[e]).active && n.push(t.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[L.transition.dom] = n)
                }

                function p(e, t, r) {
                    var o, a, u, c, s = t !== v
                        , l = {};
                    for (o in e) u = e[o], o in q ? (l.transform || (l.transform = {}), l.transform[o] = u) : (_.test(o) && (o = n(o)), o in Q ? l[o] = u : (c || (c = {}), c[o] = u));
                    for (o in l) {
                        if (u = l[o], !(a = this.props[o])) {
                            if (!s) continue;
                            a = i.call(this, o)
                        }
                        t.call(this, a, u)
                    }
                    r && c && r.call(this, c)
                }

                function v(e) {
                    e.stop()
                }

                function E(e, t) {
                    e.set(t)
                }

                function g(e) {
                    this.$el.css(e)
                }

                function I(e, n) {
                    t[e] = function () {
                        return this.children ? function (e, t) {
                            var n, r = this.children.length;
                            for (n = 0; r > n; n++) e.apply(this.children[n], t);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                t.init = function (t) {
                    if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = K(this.el, "transition");
                        n && !b.test(n) && (this.upstream = n)
                    }
                    L.backface && H.hideBackface && z(this.el, L.backface.css, "hidden")
                }, I("add", i), I("start", o), I("wait", function (e) {
                    e = c(e, 0), this.active ? this.queue.push({
                        options: e
                    }) : (this.timer = new B({
                        duration: e
                        , context: this
                        , complete: a
                    }), this.active = !0)
                }), I("then", function (e) {
                    return this.active ? (this.queue.push({
                        options: e
                        , args: arguments
                    }), void(this.timer.complete = a)) : s("No active transition timer. Use start() or wait() before then().")
                }), I("next", a), I("stop", u), I("set", function (e) {
                    u.call(this, e), p.call(this, e, E, g)
                }), I("show", function (e) {
                    "string" != typeof e && (e = "block"), this.el.style.display = e
                }), I("hide", l), I("redraw", f), I("destroy", function () {
                    u.call(this), e.removeData(this.el, h), this.$el = this.el = null
                })
            })
            , j = l(F, function (t) {
                function n(t, n) {
                    var r = e.data(t, h) || e.data(t, h, new F.Bare);
                    return r.el || r.init(t), n ? r.start(n) : r
                }
                t.init = function (t, r) {
                    var i = e(t);
                    if (!i.length) return this;
                    if (1 === i.length) return n(i[0], r);
                    var o = [];
                    return i.each(function (e, t) {
                        o.push(n(t, r))
                    }), this.children = o, this
                }
            })
            , G = l(function (e) {
                function t() {
                    var e = this.get();
                    this.update("auto");
                    var t = this.get();
                    return this.update(e), t
                }

                function n(e) {
                    var t = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e);
                    return (t ? o(t[1], t[2], t[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var i = 500
                    , a = "ease"
                    , u = 0;
                e.init = function (e, t, n, r) {
                    this.$el = e, this.el = e[0];
                    var o = t[0];
                    n[2] && (o = n[2]), Y[o] && (o = Y[o]), this.name = o, this.type = n[1], this.duration = c(t[1], this.duration, i), this.ease = function (e, t, n) {
                        return void 0 !== t && (n = t), e in f ? e : n
                    }(t[2], this.ease, a), this.delay = c(t[3], this.delay, u), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = A.test(this.name), this.unit = r.unit || this.unit || H.defaultUnit, this.angle = r.angle || this.angle || H.defaultAngle, H.fallback || r.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + w + this.duration + "ms" + ("ease" != this.ease ? w + f[this.ease][0] : "") + (this.delay ? w + this.delay + "ms" : ""))
                }, e.set = function (e) {
                    e = this.convert(e, this.type), this.update(e), this.redraw()
                }, e.transition = function (e) {
                    this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                }, e.fallback = function (e) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    e = this.convert(e, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new X({
                        from: n
                        , to: e
                        , duration: this.duration
                        , delay: this.delay
                        , ease: this.ease
                        , update: this.update
                        , context: this
                    })
                }, e.get = function () {
                    return K(this.el, this.name)
                }, e.update = function (e) {
                    z(this.el, this.name, e)
                }, e.stop = function () {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, z(this.el, this.name, this.get()));
                    var e = this.tween;
                    e && e.context && e.destroy()
                }, e.convert = function (e, t) {
                    if ("auto" == e && this.auto) return e;
                    var i, o = "number" == typeof e
                        , a = "string" == typeof e;
                    switch (t) {
                    case g:
                        if (o) return e;
                        if (a && "" === e.replace(E, "")) return +e;
                        i = "number(unitless)";
                        break;
                    case I:
                        if (a) {
                            if ("" === e && this.original) return this.original;
                            if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : n(e)
                        }
                        i = "hex or rgb string";
                        break;
                    case m:
                        if (o) return e + this.unit;
                        if (a && t.test(e)) return e;
                        i = "number(px) or string(unit)";
                        break;
                    case y:
                        if (o) return e + this.unit;
                        if (a && t.test(e)) return e;
                        i = "number(px) or string(unit or %)";
                        break;
                    case T:
                        if (o) return e + this.angle;
                        if (a && t.test(e)) return e;
                        i = "number(deg) or string(angle)";
                        break;
                    case O:
                        if (o) return e;
                        if (a && y.test(e)) return e;
                        i = "number(unitless) or string(unit or %)"
                    }
                    return function (e, t) {
                        s("Type warning: Expected: [" + e + "] Got: [" + (0, r.default)(t) + "] " + t)
                    }(i, e), e
                }, e.redraw = function () {
                    this.el.offsetHeight
                }
            })
            , k = l(G, function (e, t) {
                e.init = function () {
                    t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), I))
                }
            })
            , U = l(G, function (e, t) {
                e.init = function () {
                    t.init.apply(this, arguments), this.animate = this.fallback
                }, e.get = function () {
                    return this.$el[this.name]()
                }, e.update = function (e) {
                    this.$el[this.name](e)
                }
            })
            , V = l(G, function (e, t) {
                function n(e, t) {
                    var n, r, i, o, a;
                    for (n in e) i = (o = q[n])[0], r = o[1] || n, a = this.convert(e[n], i), t.call(this, r, a, i)
                }
                e.init = function () {
                    t.init.apply(this, arguments), this.current || (this.current = {}, q.perspective && H.perspective && (this.current.perspective = H.perspective, z(this.el, this.name, this.style(this.current)), this.redraw()))
                }, e.set = function (e) {
                    n.call(this, e, function (e, t) {
                        this.current[e] = t
                    }), z(this.el, this.name, this.style(this.current)), this.redraw()
                }, e.transition = function (e) {
                    var t = this.values(e);
                    this.tween = new W({
                        current: this.current
                        , values: t
                        , duration: this.duration
                        , delay: this.delay
                        , ease: this.ease
                    });
                    var n, r = {};
                    for (n in this.current) r[n] = n in t ? t[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(r)
                }, e.fallback = function (e) {
                    var t = this.values(e);
                    this.tween = new W({
                        current: this.current
                        , values: t
                        , duration: this.duration
                        , delay: this.delay
                        , ease: this.ease
                        , update: this.update
                        , context: this
                    })
                }, e.update = function () {
                    z(this.el, this.name, this.style(this.current))
                }, e.style = function (e) {
                    var t, n = "";
                    for (t in e) n += t + "(" + e[t] + ") ";
                    return n
                }, e.values = function (e) {
                    var t, r = {};
                    return n.call(this, e, function (e, n, i) {
                        r[e] = n, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                    }), r
                }
            })
            , X = l(function (t) {
                function n() {
                    var e, t, r, i = c.length;
                    if (i)
                        for (P(n), t = M(), e = i; e--;)(r = c[e]) && r.render(t)
                }
                var r = {
                    ease: f.ease[1]
                    , from: 0
                    , to: 1
                };
                t.init = function (e) {
                    this.duration = e.duration || 0, this.delay = e.delay || 0;
                    var t = e.ease || r.ease;
                    f[t] && (t = f[t][1]), "function" != typeof t && (t = r.ease), this.ease = t, this.update = e.update || a, this.complete = e.complete || a, this.context = e.context || this, this.name = e.name;
                    var n = e.from
                        , i = e.to;
                    void 0 === n && (n = r.from), void 0 === i && (i = r.to), this.unit = e.unit || "", "number" == typeof n && "number" == typeof i ? (this.begin = n, this.change = i - n) : this.format(i, n), this.value = this.begin + this.unit, this.start = M(), !1 !== e.autoplay && this.play()
                }, t.play = function () {
                    var e;
                    this.active || (this.start || (this.start = M()), this.active = !0, e = this, 1 === c.push(e) && P(n))
                }, t.stop = function () {
                    var t, n, r;
                    this.active && (this.active = !1, t = this, (r = e.inArray(t, c)) >= 0 && (n = c.slice(r + 1), c.length = r, n.length && (c = c.concat(n))))
                }, t.render = function (e) {
                    var t, n = e - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var r = this.ease(n, 0, 1, this.duration);
                        return t = this.startRGB ? function (e, t, n) {
                            return o(e[0] + n * (t[0] - e[0]), e[1] + n * (t[1] - e[1]), e[2] + n * (t[2] - e[2]))
                        }(this.startRGB, this.endRGB, r) : function (e) {
                            return Math.round(e * s) / s
                        }(this.begin + r * this.change), this.value = t + this.unit, void this.update.call(this.context, this.value)
                    }
                    t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, t.format = function (e, t) {
                    if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = i(t), this.endRGB = i(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = t.replace(E, "");
                        n !== e.replace(E, "") && u("tween", t, e), this.unit = n
                    }
                    t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                }, t.destroy = function () {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var c = []
                    , s = 1e3
            })
            , B = l(X, function (e) {
                e.init = function (e) {
                    this.duration = e.duration || 0, this.complete = e.complete || a, this.context = e.context, this.play()
                }, e.render = function (e) {
                    e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            })
            , W = l(X, function (e, t) {
                e.init = function (e) {
                    var t, n;
                    for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) n = e.values[t], this.current[t] !== n && this.tweens.push(new X({
                        name: t
                        , from: this.current[t]
                        , to: n
                        , duration: e.duration
                        , delay: e.delay
                        , ease: e.ease
                        , autoplay: !1
                    }));
                    this.play()
                }, e.render = function (e) {
                    var t, n, r = !1;
                    for (t = this.tweens.length; t--;)(n = this.tweens[t]).context && (n.render(e), this.current[n.name] = n.value, r = !0);
                    return r ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, e.destroy = function () {
                    if (t.destroy.call(this), this.tweens) {
                        var e;
                        for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            })
            , H = t.config = {
                debug: !1
                , defaultUnit: "px"
                , defaultAngle: "deg"
                , keepInherited: !1
                , hideBackface: !1
                , perspective: ""
                , fallback: !L.transition
                , agentTests: []
            };
        t.fallback = function (e) {
            if (!L.transition) return H.fallback = !0;
            H.agentTests.push("(" + e + ")");
            var t = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = t.test(navigator.userAgent)
        }, t.fallback("6.0.[2-5] Safari"), t.tween = function (e) {
            return new X(e)
        }, t.delay = function (e, t, n) {
            return new B({
                complete: t
                , duration: e
                , context: n
            })
        }, e.fn.tram = function (e) {
            return t.call(null, this, e)
        };
        var z = e.style
            , K = e.css
            , Y = {
                transform: L.transform && L.transform.css
            }
            , Q = {
                color: [k, I]
                , background: [k, I, "background-color"]
                , "outline-color": [k, I]
                , "border-color": [k, I]
                , "border-top-color": [k, I]
                , "border-right-color": [k, I]
                , "border-bottom-color": [k, I]
                , "border-left-color": [k, I]
                , "border-width": [G, m]
                , "border-top-width": [G, m]
                , "border-right-width": [G, m]
                , "border-bottom-width": [G, m]
                , "border-left-width": [G, m]
                , "border-spacing": [G, m]
                , "letter-spacing": [G, m]
                , margin: [G, m]
                , "margin-top": [G, m]
                , "margin-right": [G, m]
                , "margin-bottom": [G, m]
                , "margin-left": [G, m]
                , padding: [G, m]
                , "padding-top": [G, m]
                , "padding-right": [G, m]
                , "padding-bottom": [G, m]
                , "padding-left": [G, m]
                , "outline-width": [G, m]
                , opacity: [G, g]
                , top: [G, y]
                , right: [G, y]
                , bottom: [G, y]
                , left: [G, y]
                , "font-size": [G, y]
                , "text-indent": [G, y]
                , "word-spacing": [G, y]
                , width: [G, y]
                , "min-width": [G, y]
                , "max-width": [G, y]
                , height: [G, y]
                , "min-height": [G, y]
                , "max-height": [G, y]
                , "line-height": [G, O]
                , "scroll-top": [U, g, "scrollTop"]
                , "scroll-left": [U, g, "scrollLeft"]
            }
            , q = {};
        L.transform && (Q.transform = [V], q = {
            x: [y, "translateX"]
            , y: [y, "translateY"]
            , rotate: [T]
            , rotateX: [T]
            , rotateY: [T]
            , scale: [g]
            , scaleX: [g]
            , scaleY: [g]
            , skew: [T]
            , skewX: [T]
            , skewY: [T]
        }), L.transform && L.backface && (q.z = [y, "translateZ"], q.rotateZ = [T], q.scaleZ = [g], q.perspective = [m]);
        var $ = /ms/
            , Z = /s|\./;
        return e.tram = t
    }(window.jQuery)
}, function (e, t, n) {
    "use strict";
    var r = n(106);

    function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n)
    }
    var o = window.jQuery
        , a = {}
        , u = {
            reset: function (e, t) {
                r.triggers.reset(e, t)
            }
            , intro: function (e, t) {
                r.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
            }
            , outro: function (e, t) {
                r.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix"
        , OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, u), e.exports = a
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(29);
    n.d(t, "createStore", function () {
        return r.default
    });
    var i = n(59);
    n.d(t, "combineReducers", function () {
        return i.default
    });
    var o = n(61);
    n.d(t, "bindActionCreators", function () {
        return o.default
    });
    var a = n(62);
    n.d(t, "applyMiddleware", function () {
        return a.default
    });
    var u = n(31);
    n.d(t, "compose", function () {
        return u.default
    });
    n(60)
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(109)
        , i = n(114)
        , o = n(116)
        , a = "[object Object]"
        , u = Function.prototype
        , c = Object.prototype
        , s = u.toString
        , l = c.hasOwnProperty
        , f = s.call(Object);
    t.default = function (e) {
        if (!Object(o.default)(e) || Object(r.default)(e) != a) return !1;
        var t = Object(i.default)(e);
        if (null === t) return !0;
        var n = l.call(t, "constructor") && t.constructor;
        return "function" == typeof n && n instanceof n && s.call(n) == f
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(110).default.Symbol;
    t.default = r
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", function () {
        return o
    });
    var r = n(29);
    n(57), n(60);

    function i(e, t) {
        var n = t && t.type;
        return "Given action " + (n && '"' + n.toString() + '"' || "an action") + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
    }

    function o(e) {
        for (var t = Object.keys(e), n = {}, o = 0; o < t.length; o++) {
            var a = t[o];
            0, "function" == typeof e[a] && (n[a] = e[a])
        }
        var u, c = Object.keys(n);
        try {
            ! function (e) {
                Object.keys(e).forEach(function (t) {
                    var n = e[t];
                    if (void 0 === n(void 0, {
                            type: r.ActionTypes.INIT
                        })) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                    if (void 0 === n(void 0, {
                            type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".")
                        })) throw new Error('Reducer "' + t + "\" returned undefined when probed with a random type. Don't try to handle " + r.ActionTypes.INIT + ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.')
                })
            }(n)
        } catch (e) {
            u = e
        }
        return function () {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0]
                , t = arguments[1];
            if (u) throw u;
            for (var r = !1, o = {}, a = 0; a < c.length; a++) {
                var s = c[a]
                    , l = n[s]
                    , f = e[s]
                    , d = l(f, t);
                if (void 0 === d) {
                    var p = i(s, t);
                    throw new Error(p)
                }
                o[s] = d, r = r || d !== f
            }
            return r ? o : e
        }
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        "undefined" != typeof console && "function" == typeof console.error && console.error(e);
        try {
            throw new Error(e)
        } catch (e) {}
    }
    n.r(t), n.d(t, "default", function () {
        return r
    })
}, function (e, t, n) {
    "use strict";

    function r(e, t) {
        return function () {
            return t(e.apply(void 0, arguments))
        }
    }

    function i(e, t) {
        if ("function" == typeof e) return r(e, t);
        if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
        for (var n = Object.keys(e), i = {}, o = 0; o < n.length; o++) {
            var a = n[o]
                , u = e[a];
            "function" == typeof u && (i[a] = r(u, t))
        }
        return i
    }
    n.r(t), n.d(t, "default", function () {
        return i
    })
}, function (e, t, n) {
    "use strict";
    n.r(t), n.d(t, "default", function () {
        return o
    });
    var r = n(31)
        , i = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };

    function o() {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
        return function (e) {
            return function (n, o, a) {
                var u, c = e(n, o, a)
                    , s = c.dispatch
                    , l = {
                        getState: c.getState
                        , dispatch: function (e) {
                            return s(e)
                        }
                    };
                return u = t.map(function (e) {
                    return e(l)
                }), s = r.default.apply(void 0, u)(c.dispatch), i({}, c, {
                    dispatch: s
                })
            }
        }
    }
}, function (e, t, n) {
    var r = n(64)(n(185));
    e.exports = r
}, function (e, t, n) {
    var r = n(7)
        , i = n(11)
        , o = n(23);
    e.exports = function (e) {
        return function (t, n, a) {
            var u = Object(t);
            if (!i(t)) {
                var c = r(n, 3);
                t = o(t), n = function (e) {
                    return c(u[e], e, u)
                }
            }
            var s = e(t, n, a);
            return s > -1 ? u[c ? t[s] : s] : void 0
        }
    }
}, function (e, t, n) {
    var r = n(19)
        , i = n(129)
        , o = n(130)
        , a = n(131)
        , u = n(132)
        , c = n(133);

    function s(e) {
        var t = this.__data__ = new r(e);
        this.size = t.size
    }
    s.prototype.clear = i, s.prototype.delete = o, s.prototype.get = a, s.prototype.has = u, s.prototype.set = c, e.exports = s
}, function (e, t, n) {
    var r = n(10)
        , i = n(4)
        , o = "[object AsyncFunction]"
        , a = "[object Function]"
        , u = "[object GeneratorFunction]"
        , c = "[object Proxy]";
    e.exports = function (e) {
        if (!i(e)) return !1;
        var t = r(e);
        return t == a || t == u || t == o || t == c
    }
}, function (e, t, n) {
    (function (t) {
        var n = "object" == typeof t && t && t.Object === Object && t;
        e.exports = n
    }).call(this, n(30))
}, function (e, t) {
    var n = Function.prototype.toString;
    e.exports = function (e) {
        if (null != e) {
            try {
                return n.call(e)
            } catch (e) {}
            try {
                return e + ""
            } catch (e) {}
        }
        return ""
    }
}, function (e, t, n) {
    var r = n(152)
        , i = n(9);
    e.exports = function e(t, n, o, a, u) {
        return t === n || (null == t || null == n || !i(t) && !i(n) ? t != t && n != n : r(t, n, o, a, e, u))
    }
}, function (e, t, n) {
    var r = n(153)
        , i = n(156)
        , o = n(157)
        , a = 1
        , u = 2;
    e.exports = function (e, t, n, c, s, l) {
        var f = n & a
            , d = e.length
            , p = t.length;
        if (d != p && !(f && p > d)) return !1;
        var v = l.get(e);
        if (v && l.get(t)) return v == t;
        var h = -1
            , E = !0
            , _ = n & u ? new r : void 0;
        for (l.set(e, t), l.set(t, e); ++h < d;) {
            var g = e[h]
                , I = t[h];
            if (c) var m = f ? c(I, g, h, t, e, l) : c(g, I, h, e, t, l);
            if (void 0 !== m) {
                if (m) continue;
                E = !1;
                break
            }
            if (_) {
                if (!i(t, function (e, t) {
                        if (!o(_, t) && (g === e || s(g, e, n, c, l))) return _.push(t)
                    })) {
                    E = !1;
                    break
                }
            } else if (g !== I && !s(g, I, n, c, l)) {
                E = !1;
                break
            }
        }
        return l.delete(e), l.delete(t), E
    }
}, function (e, t, n) {
    var r = n(36)
        , i = n(1);
    e.exports = function (e, t, n) {
        var o = t(e);
        return i(e) ? o : r(o, n(e))
    }
}, function (e, t, n) {
    var r = n(164)
        , i = n(73)
        , o = Object.prototype.propertyIsEnumerable
        , a = Object.getOwnPropertySymbols
        , u = a ? function (e) {
            return null == e ? [] : (e = Object(e), r(a(e), function (t) {
                return o.call(e, t)
            }))
        } : i;
    e.exports = u
}, function (e, t) {
    e.exports = function () {
        return []
    }
}, function (e, t, n) {
    var r = n(165)
        , i = n(24)
        , o = n(1)
        , a = n(37)
        , u = n(38)
        , c = n(39)
        , s = Object.prototype.hasOwnProperty;
    e.exports = function (e, t) {
        var n = o(e)
            , l = !n && i(e)
            , f = !n && !l && a(e)
            , d = !n && !l && !f && c(e)
            , p = n || l || f || d
            , v = p ? r(e.length, String) : []
            , h = v.length;
        for (var E in e) !t && !s.call(e, E) || p && ("length" == E || f && ("offset" == E || "parent" == E) || d && ("buffer" == E || "byteLength" == E || "byteOffset" == E) || u(E, h)) || v.push(E);
        return v
    }
}, function (e, t) {
    e.exports = function (e) {
        return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", {
            enumerable: !0
            , get: function () {
                return e.l
            }
        }), Object.defineProperty(e, "id", {
            enumerable: !0
            , get: function () {
                return e.i
            }
        }), e.webpackPolyfill = 1), e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return function (n) {
            return e(t(n))
        }
    }
}, function (e, t, n) {
    var r = n(8)(n(3), "WeakMap");
    e.exports = r
}, function (e, t, n) {
    var r = n(4);
    e.exports = function (e) {
        return e == e && !r(e)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return function (n) {
            return null != n && n[e] === t && (void 0 !== t || e in Object(n))
        }
    }
}, function (e, t, n) {
    var r = n(81);
    e.exports = function (e) {
        return null == e ? "" : r(e)
    }
}, function (e, t, n) {
    var r = n(13)
        , i = n(82)
        , o = n(1)
        , a = n(27)
        , u = 1 / 0
        , c = r ? r.prototype : void 0
        , s = c ? c.toString : void 0;
    e.exports = function e(t) {
        if ("string" == typeof t) return t;
        if (o(t)) return i(t, e) + "";
        if (a(t)) return s ? s.call(t) : "";
        var n = t + "";
        return "0" == n && 1 / t == -u ? "-0" : n
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
        return i
    }
}, function (e, t) {
    e.exports = function (e) {
        return function (t) {
            return null == t ? void 0 : t[e]
        }
    }
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        for (var i = e.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)
            if (t(e[o], o, e)) return o;
        return -1
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.inQuad = function (e) {
        return Math.pow(e, 2)
    }, t.outQuad = function (e) {
        return -(Math.pow(e - 1, 2) - 1)
    }, t.inOutQuad = function (e) {
        if ((e /= .5) < 1) return .5 * Math.pow(e, 2);
        return -.5 * ((e -= 2) * e - 2)
    }, t.inCubic = function (e) {
        return Math.pow(e, 3)
    }, t.outCubic = function (e) {
        return Math.pow(e - 1, 3) + 1
    }, t.inOutCubic = function (e) {
        if ((e /= .5) < 1) return .5 * Math.pow(e, 3);
        return .5 * (Math.pow(e - 2, 3) + 2)
    }, t.inQuart = function (e) {
        return Math.pow(e, 4)
    }, t.outQuart = function (e) {
        return -(Math.pow(e - 1, 4) - 1)
    }, t.inOutQuart = function (e) {
        if ((e /= .5) < 1) return .5 * Math.pow(e, 4);
        return -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }, t.inQuint = function (e) {
        return Math.pow(e, 5)
    }, t.outQuint = function (e) {
        return Math.pow(e - 1, 5) + 1
    }, t.inOutQuint = function (e) {
        if ((e /= .5) < 1) return .5 * Math.pow(e, 5);
        return .5 * (Math.pow(e - 2, 5) + 2)
    }, t.inSine = function (e) {
        return 1 - Math.cos(e * (Math.PI / 2))
    }, t.outSine = function (e) {
        return Math.sin(e * (Math.PI / 2))
    }, t.inOutSine = function (e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }, t.inExpo = function (e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
    }, t.outExpo = function (e) {
        return 1 === e ? 1 : 1 - Math.pow(2, -10 * e)
    }, t.inOutExpo = function (e) {
        if (0 === e) return 0;
        if (1 === e) return 1;
        if ((e /= .5) < 1) return .5 * Math.pow(2, 10 * (e - 1));
        return .5 * (2 - Math.pow(2, -10 * --e))
    }, t.inCirc = function (e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }, t.outCirc = function (e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }, t.inOutCirc = function (e) {
        if ((e /= .5) < 1) return -.5 * (Math.sqrt(1 - e * e) - 1);
        return .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }, t.outBounce = function (e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }, t.inBack = function (e) {
        return e * e * ((o + 1) * e - o)
    }, t.outBack = function (e) {
        return (e -= 1) * e * ((o + 1) * e + o) + 1
    }, t.inOutBack = function (e) {
        var t = o;
        if ((e /= .5) < 1) return e * e * ((1 + (t *= 1.525)) * e - t) * .5;
        return .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
    }, t.inElastic = function (e) {
        var t = o
            , n = 0
            , r = 1;
        if (0 === e) return 0;
        if (1 === e) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
        return -r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n)
    }, t.outElastic = function (e) {
        var t = o
            , n = 0
            , r = 1;
        if (0 === e) return 0;
        if (1 === e) return 1;
        n || (n = .3);
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
        return r * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / n) + 1
    }, t.inOutElastic = function (e) {
        var t = o
            , n = 0
            , r = 1;
        if (0 === e) return 0;
        if (2 == (e /= .5)) return 1;
        n || (n = .3 * 1.5);
        r < 1 ? (r = 1, t = n / 4) : t = n / (2 * Math.PI) * Math.asin(1 / r);
        if (e < 1) return r * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * -.5;
        return r * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / n) * .5 + 1
    }, t.swingFromTo = function (e) {
        var t = o;
        return (e /= .5) < 1 ? e * e * ((1 + (t *= 1.525)) * e - t) * .5 : .5 * ((e -= 2) * e * ((1 + (t *= 1.525)) * e + t) + 2)
    }, t.swingFrom = function (e) {
        return e * e * ((o + 1) * e - o)
    }, t.swingTo = function (e) {
        return (e -= 1) * e * ((o + 1) * e + o) + 1
    }, t.bounce = function (e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }, t.bouncePast = function (e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }, t.easeInOut = t.easeOut = t.easeIn = t.ease = void 0;
    var i = r(n(86))
        , o = 1.70158
        , a = (0, i.default)(.25, .1, .25, 1);
    t.ease = a;
    var u = (0, i.default)(.42, 0, 1, 1);
    t.easeIn = u;
    var c = (0, i.default)(0, 0, .58, 1);
    t.easeOut = c;
    var s = (0, i.default)(.42, 0, .58, 1);
    t.easeInOut = s
}, function (e, t) {
    var n = 4
        , r = .001
        , i = 1e-7
        , o = 10
        , a = 11
        , u = 1 / (a - 1)
        , c = "function" == typeof Float32Array;

    function s(e, t) {
        return 1 - 3 * t + 3 * e
    }

    function l(e, t) {
        return 3 * t - 6 * e
    }

    function f(e) {
        return 3 * e
    }

    function d(e, t, n) {
        return ((s(t, n) * e + l(t, n)) * e + f(t)) * e
    }

    function p(e, t, n) {
        return 3 * s(t, n) * e * e + 2 * l(t, n) * e + f(t)
    }
    e.exports = function (e, t, s, l) {
        if (!(0 <= e && e <= 1 && 0 <= s && s <= 1)) throw new Error("bezier x values must be in [0, 1] range");
        var f = c ? new Float32Array(a) : new Array(a);
        if (e !== t || s !== l)
            for (var v = 0; v < a; ++v) f[v] = d(v * u, e, s);

        function h(t) {
            for (var c = 0, l = 1, v = a - 1; l !== v && f[l] <= t; ++l) c += u;
            var h = c + (t - f[--l]) / (f[l + 1] - f[l]) * u
                , E = p(h, e, s);
            return E >= r ? function (e, t, r, i) {
                for (var o = 0; o < n; ++o) {
                    var a = p(t, r, i);
                    if (0 === a) return t;
                    t -= (d(t, r, i) - e) / a
                }
                return t
            }(t, h, e, s) : 0 === E ? h : function (e, t, n, r, a) {
                var u, c, s = 0;
                do {
                    (u = d(c = t + (n - t) / 2, r, a) - e) > 0 ? n = c : t = c
                } while (Math.abs(u) > i && ++s < o);
                return c
            }(t, c, c + u, e, s)
        }
        return function (n) {
            return e === t && s === l ? n : 0 === n ? 0 : 1 === n ? 1 : d(h(n), t, l)
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(88))
        , i = n(0)
        , o = n(18);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.optimizeFloat = c, t.createBezierEasing = function (e) {
        return u.default.apply(void 0, (0, r.default)(e))
    }, t.applyEasing = function (e, t, n) {
        if (0 === t) return 0;
        if (1 === t) return 1;
        if (n) return c(t > 0 ? n(t) : t);
        return c(t > 0 && e && a[e] ? a[e](t) : t)
    };
    var a = o(n(85))
        , u = i(n(86));

    function c(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5
            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10
            , r = Math.pow(n, t)
            , i = Number(Math.round(e * r) / r);
        return Math.abs(i) > 1e-4 ? i : 0
    }
}, function (e, t, n) {
    var r = n(187)
        , i = n(188)
        , o = n(189);
    e.exports = function (e) {
        return r(e) || i(e) || o()
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.IX2_TEST_FRAME_RENDERED = t.IX2_MEDIA_QUERIES_DEFINED = t.IX2_VIEWPORT_WIDTH_CHANGED = t.IX2_ACTION_LIST_PLAYBACK_CHANGED = t.IX2_ELEMENT_STATE_CHANGED = t.IX2_INSTANCE_REMOVED = t.IX2_INSTANCE_STARTED = t.IX2_INSTANCE_ADDED = t.IX2_PARAMETER_CHANGED = t.IX2_ANIMATION_FRAME_CHANGED = t.IX2_EVENT_STATE_CHANGED = t.IX2_EVENT_LISTENER_ADDED = t.IX2_CLEAR_REQUESTED = t.IX2_STOP_REQUESTED = t.IX2_PLAYBACK_REQUESTED = t.IX2_PREVIEW_REQUESTED = t.IX2_SESSION_STOPPED = t.IX2_SESSION_STARTED = t.IX2_SESSION_INITIALIZED = t.IX2_RAW_DATA_IMPORTED = void 0;
    t.IX2_RAW_DATA_IMPORTED = "IX2_RAW_DATA_IMPORTED";
    t.IX2_SESSION_INITIALIZED = "IX2_SESSION_INITIALIZED";
    t.IX2_SESSION_STARTED = "IX2_SESSION_STARTED";
    t.IX2_SESSION_STOPPED = "IX2_SESSION_STOPPED";
    t.IX2_PREVIEW_REQUESTED = "IX2_PREVIEW_REQUESTED";
    t.IX2_PLAYBACK_REQUESTED = "IX2_PLAYBACK_REQUESTED";
    t.IX2_STOP_REQUESTED = "IX2_STOP_REQUESTED";
    t.IX2_CLEAR_REQUESTED = "IX2_CLEAR_REQUESTED";
    t.IX2_EVENT_LISTENER_ADDED = "IX2_EVENT_LISTENER_ADDED";
    t.IX2_EVENT_STATE_CHANGED = "IX2_EVENT_STATE_CHANGED";
    t.IX2_ANIMATION_FRAME_CHANGED = "IX2_ANIMATION_FRAME_CHANGED";
    t.IX2_PARAMETER_CHANGED = "IX2_PARAMETER_CHANGED";
    t.IX2_INSTANCE_ADDED = "IX2_INSTANCE_ADDED";
    t.IX2_INSTANCE_STARTED = "IX2_INSTANCE_STARTED";
    t.IX2_INSTANCE_REMOVED = "IX2_INSTANCE_REMOVED";
    t.IX2_ELEMENT_STATE_CHANGED = "IX2_ELEMENT_STATE_CHANGED";
    t.IX2_ACTION_LIST_PLAYBACK_CHANGED = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
    t.IX2_VIEWPORT_WIDTH_CHANGED = "IX2_VIEWPORT_WIDTH_CHANGED";
    t.IX2_MEDIA_QUERIES_DEFINED = "IX2_MEDIA_QUERIES_DEFINED";
    t.IX2_TEST_FRAME_RENDERED = "IX2_TEST_FRAME_RENDERED"
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(6));
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.isPluginType = function (e) {
        return e === o.ActionTypeConsts.PLUGIN_LOTTIE
    }, t.clearPlugin = t.renderPlugin = t.createPluginInstance = t.getPluginDestination = t.getPluginDuration = t.getPluginOrigin = t.getPluginConfig = void 0;
    var i = n(191)
        , o = n(16)
        , a = n(32)
        , u = (0, r.default)({}, o.ActionTypeConsts.PLUGIN_LOTTIE, {
            getConfig: i.getPluginConfig
            , getOrigin: i.getPluginOrigin
            , getDuration: i.getPluginDuration
            , getDestination: i.getPluginDestination
            , createInstance: i.createPluginInstance
            , render: i.renderPlugin
            , clear: i.clearPlugin
        });
    var c = function (e) {
            return function (t) {
                if (!a.IS_BROWSER_ENV) return function () {
                    return null
                };
                var n = u[t];
                if (!n) throw new Error("IX2 no plugin configured for: ".concat(t));
                var r = n[e];
                if (!r) throw new Error("IX2 invalid plugin method: ".concat(e));
                return r
            }
        }
        , s = c("getConfig");
    t.getPluginConfig = s;
    var l = c("getOrigin");
    t.getPluginOrigin = l;
    var f = c("getDuration");
    t.getPluginDuration = f;
    var d = c("getDestination");
    t.getPluginDestination = d;
    var p = c("createInstance");
    t.createPluginInstance = p;
    var v = c("render");
    t.renderPlugin = v;
    var h = c("clear");
    t.clearPlugin = h
}, function (e, t, n) {
    "use strict";
    var r, i = n(0)(n(6))
        , o = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "EventTypeConsts", {
        enumerable: !0
        , get: function () {
            return u.EventTypeConsts
        }
    }), Object.defineProperty(t, "EventAppliesTo", {
        enumerable: !0
        , get: function () {
            return u.EventAppliesTo
        }
    }), Object.defineProperty(t, "EventBasedOn", {
        enumerable: !0
        , get: function () {
            return u.EventBasedOn
        }
    }), Object.defineProperty(t, "EventContinuousMouseAxes", {
        enumerable: !0
        , get: function () {
            return u.EventContinuousMouseAxes
        }
    }), t.EventConsts = void 0;
    var a = o(n(12))
        , u = n(28)
        , c = u.EventTypeConsts
        , s = c.NAVBAR_OPEN
        , l = c.NAVBAR_CLOSE
        , f = c.TAB_ACTIVE
        , d = c.TAB_INACTIVE
        , p = c.SLIDER_ACTIVE
        , v = c.SLIDER_INACTIVE
        , h = c.DROPDOWN_OPEN
        , E = c.DROPDOWN_CLOSE
        , _ = c.MOUSE_CLICK
        , g = c.MOUSE_SECOND_CLICK
        , I = c.MOUSE_DOWN
        , m = c.MOUSE_UP
        , y = c.MOUSE_OVER
        , T = c.MOUSE_OUT
        , O = c.MOUSE_MOVE
        , b = c.MOUSE_MOVE_IN_VIEWPORT
        , A = c.SCROLL_INTO_VIEW
        , w = c.SCROLL_OUT_OF_VIEW
        , S = c.SCROLLING_IN_VIEW
        , R = c.ECOMMERCE_CART_OPEN
        , C = c.ECOMMERCE_CART_CLOSE
        , N = c.PAGE_START
        , L = c.PAGE_FINISH
        , x = c.PAGE_SCROLL_UP
        , D = c.PAGE_SCROLL_DOWN
        , P = c.PAGE_SCROLL
        , M = {
            id: null
            , label: ""
            , description: ""
            , continuous: !1
            , isPage: !1
        }
        , F = (r = {}, (0, i.default)(r, s, (0, a.default)({}, M, {
            id: s
            , label: "Open"
            , description: "When the Navbar opens."
        })), (0, i.default)(r, l, (0, a.default)({}, M, {
            id: l
            , label: "Close"
            , description: "When the Navbar closes."
        })), (0, i.default)(r, f, (0, a.default)({}, M, {
            id: f
            , label: "Active"
            , description: "When the tab becomes active."
        })), (0, i.default)(r, d, (0, a.default)({}, M, {
            id: d
            , label: "Inactive"
            , description: "When the tab becomes inactive."
        })), (0, i.default)(r, p, (0, a.default)({}, M, {
            id: p
            , label: "Active"
            , description: "When the slider becomes active."
        })), (0, i.default)(r, v, (0, a.default)({}, M, {
            id: v
            , label: "Inactive"
            , description: "When the slider becomes inactive."
        })), (0, i.default)(r, h, (0, a.default)({}, M, {
            id: h
            , label: "Open"
            , description: "When the slider becomes active."
        })), (0, i.default)(r, E, (0, a.default)({}, M, {
            id: E
            , label: "Close"
            , description: "When the dropdown closes."
        })), (0, i.default)(r, _, (0, a.default)({}, M, {
            id: _
            , label: "Mouse Click (Tap)"
            , description: "When an element is clicked or tapped."
        })), (0, i.default)(r, g, (0, a.default)({}, M, {
            id: g
            , label: "Mouse 2nd Click (Tap)"
            , description: "When an element is clicked or tapped."
        })), (0, i.default)(r, I, (0, a.default)({}, M, {
            id: I
            , label: "Mouse Down (Touch Start)"
            , description: "When the mouse is pressed down over an element."
        })), (0, i.default)(r, m, (0, a.default)({}, M, {
            id: m
            , label: "Mouse Up (Touch End)"
            , description: "When the mouse is released over an element."
        })), (0, i.default)(r, y, (0, a.default)({}, M, {
            id: y
            , label: "Mouse Over"
            , description: "When the mouse hovers over an element."
        })), (0, i.default)(r, T, (0, a.default)({}, M, {
            id: T
            , label: "Mouse Out"
            , description: "When the mouse leaves a hovered element."
        })), (0, i.default)(r, O, (0, a.default)({}, M, {
            id: O
            , label: "Mouse Move"
            , description: "While the mouse moves over an element."
            , continuous: !0
        })), (0, i.default)(r, b, (0, a.default)({}, M, {
            id: b
            , label: "Mouse Move in Viewport"
            , description: "While the mouse moves inside a browser window."
            , continuous: !0
            , isPage: !0
        })), (0, i.default)(r, A, (0, a.default)({}, M, {
            id: A
            , label: "Scroll Into View"
            , description: "When an element scrolls into view."
        })), (0, i.default)(r, w, (0, a.default)({}, M, {
            id: w
            , label: "Scroll Out of View"
            , description: "When an element scrolls out of view."
        })), (0, i.default)(r, S, (0, a.default)({}, M, {
            id: S
            , label: "Scrolling in View"
            , description: "When an element is scrolled in the viewport."
            , continuous: !0
        })), (0, i.default)(r, R, (0, a.default)({}, M, {
            id: R
            , label: "Open"
            , description: "When the cart opens."
        })), (0, i.default)(r, C, (0, a.default)({}, M, {
            id: C
            , label: "Close"
            , description: "When the cart closes."
        })), (0, i.default)(r, N, (0, a.default)({}, M, {
            id: N
            , label: "Page Starts Loading"
            , description: "When the page begins loading."
            , isPage: !0
        })), (0, i.default)(r, L, (0, a.default)({}, M, {
            id: L
            , label: "Page Finished Loading"
            , description: "When all page assets have loaded."
            , isPage: !0
        })), (0, i.default)(r, x, (0, a.default)({}, M, {
            id: x
            , label: "Page Scrolled Up"
            , description: "When the page scrolls up."
            , isPage: !0
        })), (0, i.default)(r, D, (0, a.default)({}, M, {
            id: D
            , label: "Page Scrolled Down"
            , description: "When the page scrolls down."
            , isPage: !0
        })), (0, i.default)(r, P, (0, a.default)({}, M, {
            id: P
            , label: "Page Scroll"
            , description: "While the page is scrolling."
            , continuous: !0
            , isPage: !0
        })), r);
    t.EventConsts = F
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ActionAppliesTo = t.ActionTypeConsts = void 0;
    t.ActionTypeConsts = {
        TRANSFORM_MOVE: "TRANSFORM_MOVE"
        , TRANSFORM_SCALE: "TRANSFORM_SCALE"
        , TRANSFORM_ROTATE: "TRANSFORM_ROTATE"
        , TRANSFORM_SKEW: "TRANSFORM_SKEW"
        , STYLE_OPACITY: "STYLE_OPACITY"
        , STYLE_SIZE: "STYLE_SIZE"
        , STYLE_FILTER: "STYLE_FILTER"
        , STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR"
        , STYLE_BORDER: "STYLE_BORDER"
        , STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR"
        , PLUGIN_LOTTIE: "PLUGIN_LOTTIE"
        , GENERAL_DISPLAY: "GENERAL_DISPLAY"
        , GENERAL_START_ACTION: "GENERAL_START_ACTION"
        , GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION"
        , GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS"
        , GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION"
        , GENERAL_LOOP: "GENERAL_LOOP"
        , STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
    };
    t.ActionAppliesTo = {
        ELEMENT: "ELEMENT"
        , ELEMENT_CLASS: "ELEMENT_CLASS"
        , TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
    }
}, function (e, t, n) {
    var r = n(94)
        , i = n(205)(r);
    e.exports = i
}, function (e, t, n) {
    var r = n(203)
        , i = n(23);
    e.exports = function (e, t) {
        return e && r(e, t, i)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(209);
    t.__esModule = !0, t.default = void 0;
    var i = r(n(210)).default;
    t.default = i
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(88))
        , i = n(18)
        , o = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.observeRequests = function (e) {
        D({
            store: e
            , select: function (e) {
                var t = e.ixRequest;
                return t.preview
            }
            , onChange: ee
        }), D({
            store: e
            , select: function (e) {
                var t = e.ixRequest;
                return t.playback
            }
            , onChange: re
        }), D({
            store: e
            , select: function (e) {
                var t = e.ixRequest;
                return t.stop
            }
            , onChange: ie
        }), D({
            store: e
            , select: function (e) {
                var t = e.ixRequest;
                return t.clear
            }
            , onChange: oe
        })
    }, t.startEngine = ae, t.stopEngine = ue, t.stopAllActionGroups = he, t.stopActionGroup = Ee, t.startActionGroup = _e;
    var a = o(n(12))
        , u = o(n(215))
        , c = o(n(63))
        , s = o(n(25))
        , l = o(n(216))
        , f = o(n(222))
        , d = o(n(234))
        , p = o(n(235))
        , v = o(n(236))
        , h = o(n(239))
        , E = o(n(240))
        , _ = o(n(95))
        , g = n(16)
        , I = n(2)
        , m = n(50)
        , y = i(n(243))
        , T = o(n(244))
        , O = I.IX2EngineConstants
        , b = O.COLON_DELIMITER
        , A = O.BOUNDARY_SELECTOR
        , w = O.HTML_ELEMENT
        , S = O.RENDER_GENERAL
        , R = O.W_MOD_IX
        , C = I.IX2VanillaUtils
        , N = C.getAffectedElements
        , L = C.getElementId
        , x = C.getDestinationValues
        , D = C.observeStore
        , P = C.getInstanceId
        , M = C.renderHTMLElement
        , F = C.clearAllStyles
        , j = C.getMaxDurationItemIndex
        , G = C.getComputedStyle
        , k = C.getInstanceOrigin
        , U = C.reduceListToGroup
        , V = C.shouldNamespaceEventParameter
        , X = C.getNamespacedParameterId
        , B = C.shouldAllowMediaQuery
        , W = C.cleanupHTMLElement
        , H = C.stringifyTarget
        , z = C.mediaQueriesEqual
        , K = I.IX2VanillaPlugins
        , Y = K.isPluginType
        , Q = K.createPluginInstance
        , q = K.getPluginDuration
        , $ = navigator.userAgent
        , Z = $.match(/iPad/i) || $.match(/iPhone/)
        , J = 12;

    function ee(e, t) {
        var n = e.rawData
            , r = function () {
                ae({
                    store: t
                    , rawData: n
                    , allowEvents: !0
                }), te()
            };
        e.defer ? setTimeout(r, 0) : r()
    }

    function te() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }

    function ne(e) {
        return e && (0, h.default)(e, "_EFFECT")
    }

    function re(e, t) {
        var n = e.actionTypeId
            , r = e.actionListId
            , i = e.actionItemId
            , o = e.eventId
            , a = e.allowEvents
            , u = e.immediate
            , c = e.testManual
            , s = e.verbose
            , l = void 0 === s || s
            , f = e.rawData;
        if (r && i && f && u) {
            var d = f.actionLists[r];
            d && (f = U({
                actionList: d
                , actionItemId: i
                , rawData: f
            }))
        }
        if (ae({
                store: t
                , rawData: f
                , allowEvents: a
                , testManual: c
            }), r && n === g.ActionTypeConsts.GENERAL_START_ACTION || ne(n)) {
            Ee({
                store: t
                , actionListId: r
            }), ve({
                store: t
                , actionListId: r
                , eventId: o
            });
            var p = _e({
                store: t
                , eventId: o
                , actionListId: r
                , immediate: u
                , verbose: l
            });
            l && p && t.dispatch((0, m.actionListPlaybackChanged)({
                actionListId: r
                , isPlaying: !u
            }))
        }
    }

    function ie(e, t) {
        var n = e.actionListId;
        n ? Ee({
            store: t
            , actionListId: n
        }) : he({
            store: t
        }), ue(t)
    }

    function oe(e, t) {
        ue(t), F({
            store: t
            , elementApi: y
        })
    }

    function ae(e) {
        var t, n = e.store
            , i = e.rawData
            , o = e.allowEvents
            , a = e.testManual
            , u = n.getState().ixSession;
        i && n.dispatch((0, m.rawDataImported)(i)), u.active || (n.dispatch((0, m.sessionInitialized)({
            hasBoundaryNodes: Boolean(document.querySelector(A))
        })), o && (function (e) {
            var t = e.getState().ixData.eventTypeMap;
            le(e), (0, v.default)(t, function (t, n) {
                var i = T.default[n];
                i ? function (e) {
                    var t = e.logic
                        , n = e.store
                        , i = e.events;
                    ! function (e) {
                        if (Z) {
                            var t = {}
                                , n = "";
                            for (var r in e) {
                                var i = e[r]
                                    , o = i.eventTypeId
                                    , a = i.target
                                    , u = y.getQuerySelector(a);
                                t[u] || o !== g.EventTypeConsts.MOUSE_CLICK && o !== g.EventTypeConsts.MOUSE_SECOND_CLICK || (t[u] = !0, n += u + "{cursor: pointer;touch-action: manipulation;}")
                            }
                            if (n) {
                                var c = document.createElement("style");
                                c.textContent = n, document.body.appendChild(c)
                            }
                        }
                    }(i);
                    var o = t.types
                        , a = t.handler
                        , u = n.getState().ixData
                        , f = u.actionLists
                        , d = fe(i, pe);
                    if ((0, l.default)(d)) {
                        (0, v.default)(d, function (e, t) {
                            var o = i[t]
                                , a = o.action
                                , l = o.id
                                , d = o.mediaQueries
                                , p = void 0 === d ? u.mediaQueryKeys : d
                                , v = a.config.actionListId;
                            if (z(p, u.mediaQueryKeys) || n.dispatch((0, m.mediaQueriesDefined)()), a.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                var h = Array.isArray(o.config) ? o.config : [o.config];
                                h.forEach(function (t) {
                                    var i = t.continuousParameterGroupId
                                        , o = (0, s.default)(f, "".concat(v, ".continuousParameterGroups"), [])
                                        , a = (0, c.default)(o, function (e) {
                                            var t = e.id;
                                            return t === i
                                        })
                                        , u = (t.smoothing || 0) / 100
                                        , d = (t.restingState || 0) / 100;
                                    a && e.forEach(function (e, i) {
                                        var o = l + b + i;
                                        ! function (e) {
                                            var t = e.store
                                                , n = e.eventStateKey
                                                , i = e.eventTarget
                                                , o = e.eventId
                                                , a = e.eventConfig
                                                , u = e.actionListId
                                                , c = e.parameterGroup
                                                , l = e.smoothing
                                                , f = e.restingValue
                                                , d = t.getState()
                                                , p = d.ixData
                                                , v = d.ixSession
                                                , h = p.events[o]
                                                , E = h.eventTypeId
                                                , _ = {}
                                                , g = {}
                                                , I = []
                                                , m = c.continuousActionGroups
                                                , T = c.id;
                                            V(E, a) && (T = X(n, T));
                                            var O = v.hasBoundaryNodes && i ? y.getClosestElement(i, A) : null;
                                            m.forEach(function (e) {
                                                var t = e.keyframe
                                                    , n = e.actionItems;
                                                n.forEach(function (e) {
                                                    var n = e.actionTypeId
                                                        , o = e.config.target;
                                                    if (o) {
                                                        var a = o.boundaryMode ? O : null
                                                            , u = H(o) + b + n;
                                                        if (g[u] = function () {
                                                                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                                                                    , n = arguments.length > 1 ? arguments[1] : void 0
                                                                    , i = arguments.length > 2 ? arguments[2] : void 0
                                                                    , o = (0, r.default)(t);
                                                                return o.some(function (t, r) {
                                                                    return t.keyframe === n && (e = r, !0)
                                                                }), null == e && (e = o.length, o.push({
                                                                    keyframe: n
                                                                    , actionItems: []
                                                                })), o[e].actionItems.push(i), o
                                                            }(g[u], t, e), !_[u]) {
                                                            _[u] = !0;
                                                            var c = e.config;
                                                            N({
                                                                config: c
                                                                , event: h
                                                                , eventTarget: i
                                                                , elementRoot: a
                                                                , elementApi: y
                                                            }).forEach(function (e) {
                                                                I.push({
                                                                    element: e
                                                                    , key: u
                                                                })
                                                            })
                                                        }
                                                    }
                                                })
                                            }), I.forEach(function (e) {
                                                var n = e.element
                                                    , r = e.key
                                                    , i = g[r]
                                                    , a = (0, s.default)(i, "[0].actionItems[0]", {})
                                                    , c = a.actionTypeId
                                                    , d = Y(c) ? Q(c)(n, a) : null
                                                    , p = x({
                                                        element: n
                                                        , actionItem: a
                                                        , elementApi: y
                                                    }, d);
                                                ge({
                                                    store: t
                                                    , element: n
                                                    , eventId: o
                                                    , actionListId: u
                                                    , actionItem: a
                                                    , destination: p
                                                    , continuous: !0
                                                    , parameterId: T
                                                    , actionGroups: i
                                                    , smoothing: l
                                                    , restingValue: f
                                                    , pluginInstance: d
                                                })
                                            })
                                        }({
                                            store: n
                                            , eventStateKey: o
                                            , eventTarget: e
                                            , eventId: l
                                            , eventConfig: t
                                            , actionListId: v
                                            , parameterGroup: a
                                            , smoothing: u
                                            , restingValue: d
                                        })
                                    })
                                })
                            }(a.actionTypeId === g.ActionTypeConsts.GENERAL_START_ACTION || ne(a.actionTypeId)) && ve({
                                store: n
                                , actionListId: v
                                , eventId: l
                            })
                        });
                        var p = function (e) {
                                var t = n.getState()
                                    , r = t.ixSession;
                                de(d, function (t, o, c) {
                                    var s = i[o]
                                        , l = r.eventState[c]
                                        , f = s.action
                                        , d = s.mediaQueries
                                        , p = void 0 === d ? u.mediaQueryKeys : d;
                                    if (B(p, r.mediaQueryKey)) {
                                        var v = function () {
                                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                                                , i = a({
                                                    store: n
                                                    , element: t
                                                    , event: s
                                                    , eventConfig: r
                                                    , nativeEvent: e
                                                    , eventStateKey: c
                                                }, l);
                                            (0, _.default)(i, l) || n.dispatch((0, m.eventStateChanged)(c, i))
                                        };
                                        if (f.actionTypeId === g.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION) {
                                            var h = Array.isArray(s.config) ? s.config : [s.config];
                                            h.forEach(v)
                                        } else v()
                                    }
                                })
                            }
                            , h = (0, E.default)(p, J)
                            , I = function (e) {
                                var t = e.target
                                    , r = void 0 === t ? document : t
                                    , i = e.types
                                    , o = e.throttle;
                                i.split(" ").filter(Boolean).forEach(function (e) {
                                    var t = o ? h : p;
                                    r.addEventListener(e, t), n.dispatch((0, m.eventListenerAdded)(r, [e, t]))
                                })
                            };
                        Array.isArray(o) ? o.forEach(I) : "string" == typeof o && I(t)
                    }
                }({
                    logic: i
                    , store: e
                    , events: t
                }) : console.warn("IX2 event type not configured: ".concat(n))
            }), e.getState().ixSession.eventListeners.length && function (e) {
                var t = function () {
                    le(e)
                };
                se.forEach(function (n) {
                    window.addEventListener(n, t), e.dispatch((0, m.eventListenerAdded)(window, [n, t]))
                }), t()
            }(e)
        }(n), -1 === (t = document.documentElement).className.indexOf(R) && (t.className += " ".concat(R)), n.getState().ixSession.hasDefinedMediaQueries && function (e) {
            D({
                store: e
                , select: function (e) {
                    return e.ixSession.mediaQueryKey
                }
                , onChange: function () {
                    ue(e), F({
                        store: e
                        , elementApi: y
                    }), ae({
                        store: e
                        , allowEvents: !0
                    }), te()
                }
            })
        }(n)), n.dispatch((0, m.sessionStarted)()), function (e, t) {
            ! function n(r) {
                var i = e.getState()
                    , o = i.ixSession
                    , a = i.ixParameters;
                o.active && (e.dispatch((0, m.animationFrameChanged)(r, a)), t ? function (e, t) {
                    var n = D({
                        store: e
                        , select: function (e) {
                            return e.ixSession.tick
                        }
                        , onChange: function (e) {
                            t(e), n()
                        }
                    })
                }(e, n) : requestAnimationFrame(n))
            }(window.performance.now())
        }(n, a))
    }

    function ue(e) {
        var t = e.getState().ixSession;
        t.active && (t.eventListeners.forEach(ce), e.dispatch((0, m.sessionStopped)()))
    }

    function ce(e) {
        var t = e.target
            , n = e.listenerParams;
        t.removeEventListener.apply(t, n)
    }
    var se = ["resize", "orientationchange"];

    function le(e) {
        var t = e.getState()
            , n = t.ixSession
            , r = t.ixData
            , i = window.innerWidth;
        if (i !== n.viewportWidth) {
            var o = r.mediaQueries;
            e.dispatch((0, m.viewportWidthChanged)({
                width: i
                , mediaQueries: o
            }))
        }
    }
    var fe = function (e, t) {
            return (0, f.default)((0, p.default)(e, t), d.default)
        }
        , de = function (e, t) {
            (0, v.default)(e, function (e, n) {
                e.forEach(function (e, r) {
                    t(e, n, n + b + r)
                })
            })
        }
        , pe = function (e) {
            var t = {
                target: e.target
            };
            return N({
                config: t
                , elementApi: y
            })
        };

    function ve(e) {
        var t = e.store
            , n = e.actionListId
            , r = e.eventId
            , i = t.getState()
            , o = i.ixData
            , a = i.ixSession
            , u = o.actionLists
            , c = o.events[r]
            , l = u[n];
        if (l && l.useFirstGroupAsInitialState) {
            var f = (0, s.default)(l, "actionItemGroups[0].actionItems", [])
                , d = (0, s.default)(c, "mediaQueries", o.mediaQueryKeys);
            if (!B(d, a.mediaQueryKey)) return;
            f.forEach(function (e) {
                var i = e.config
                    , o = e.actionTypeId
                    , a = N({
                        config: i
                        , event: c
                        , elementApi: y
                    })
                    , u = Y(o);
                a.forEach(function (i) {
                    var a = u ? Q(o)(i, e) : null;
                    ge({
                        destination: x({
                            element: i
                            , actionItem: e
                            , elementApi: y
                        }, a)
                        , immediate: !0
                        , store: t
                        , element: i
                        , eventId: r
                        , actionItem: e
                        , actionListId: n
                        , pluginInstance: a
                    })
                })
            })
        }
    }

    function he(e) {
        var t = e.store
            , n = t.getState().ixInstances;
        (0, v.default)(n, function (e) {
            if (!e.continuous) {
                var n = e.actionListId
                    , r = e.verbose;
                Ie(e, t), r && t.dispatch((0, m.actionListPlaybackChanged)({
                    actionListId: n
                    , isPlaying: !1
                }))
            }
        })
    }

    function Ee(e) {
        var t = e.store
            , n = e.eventId
            , r = e.eventTarget
            , i = e.eventStateKey
            , o = e.actionListId
            , a = t.getState()
            , u = a.ixInstances
            , c = a.ixSession.hasBoundaryNodes && r ? y.getClosestElement(r, A) : null;
        (0, v.default)(u, function (e) {
            var r = (0, s.default)(e, "actionItem.config.target.boundaryMode")
                , a = !i || e.eventStateKey === i;
            if (e.actionListId === o && e.eventId === n && a) {
                if (c && r && !y.elementContains(c, e.element)) return;
                Ie(e, t), e.verbose && t.dispatch((0, m.actionListPlaybackChanged)({
                    actionListId: o
                    , isPlaying: !1
                }))
            }
        })
    }

    function _e(e) {
        var t = e.store
            , n = e.eventId
            , r = e.eventTarget
            , i = e.eventStateKey
            , o = e.actionListId
            , a = e.groupIndex
            , u = void 0 === a ? 0 : a
            , c = e.immediate
            , l = e.verbose
            , f = t.getState()
            , d = f.ixData
            , p = f.ixSession
            , v = d.events[n] || {}
            , h = v.mediaQueries
            , E = void 0 === h ? d.mediaQueryKeys : h
            , _ = (0, s.default)(d, "actionLists.".concat(o), {})
            , g = _.actionItemGroups
            , I = _.useFirstGroupAsInitialState;
        if (!g || !g.length) return !1;
        u >= g.length && (0, s.default)(v, "config.loop") && (u = 0), 0 === u && I && u++;
        var m = (0 === u || 1 === u && I) && ne(v.action && v.action.actionTypeId) ? v.config.delay : void 0
            , T = (0, s.default)(g, [u, "actionItems"], []);
        if (!T.length) return !1;
        if (!B(E, p.mediaQueryKey)) return !1;
        var O = p.hasBoundaryNodes && r ? y.getClosestElement(r, A) : null
            , b = j(T)
            , w = !1;
        return T.forEach(function (e, a) {
            var s = e.config
                , f = e.actionTypeId
                , d = Y(f)
                , p = s.target;
            if (p) {
                var h = p.boundaryMode ? O : null;
                N({
                    config: s
                    , event: v
                    , eventTarget: r
                    , elementRoot: h
                    , elementApi: y
                }).forEach(function (s, p) {
                    var v = d ? Q(f)(s, e) : null
                        , h = d ? q(f)(s, e) : null;
                    w = !0;
                    var E = b === a && 0 === p
                        , _ = G({
                            element: s
                            , actionItem: e
                        })
                        , g = x({
                            element: s
                            , actionItem: e
                            , elementApi: y
                        }, v);
                    ge({
                        store: t
                        , element: s
                        , actionItem: e
                        , eventId: n
                        , eventTarget: r
                        , eventStateKey: i
                        , actionListId: o
                        , groupIndex: u
                        , isCarrier: E
                        , computedStyle: _
                        , destination: g
                        , immediate: c
                        , verbose: l
                        , pluginInstance: v
                        , pluginDuration: h
                        , instanceDelay: m
                    })
                })
            }
        }), w
    }

    function ge(e) {
        var t = e.store
            , n = e.computedStyle
            , r = (0, u.default)(e, ["store", "computedStyle"])
            , i = !r.continuous
            , o = r.element
            , c = r.actionItem
            , s = r.immediate
            , l = r.pluginInstance
            , f = P()
            , d = t.getState()
            , p = d.ixElements
            , v = d.ixSession
            , h = L(p, o)
            , E = (p[h] || {}).refState
            , _ = y.getRefType(o)
            , g = k(o, E, n, c, y, l);
        t.dispatch((0, m.instanceAdded)((0, a.default)({
            instanceId: f
            , elementId: h
            , origin: g
            , refType: _
        }, r))), me(document.body, "ix2-animation-started", f), s ? function (e, t) {
            var n = e.getState().ixParameters;
            e.dispatch((0, m.instanceStarted)(t, 0)), e.dispatch((0, m.animationFrameChanged)(performance.now(), n)), ye(e.getState().ixInstances[t], e)
        }(t, f) : (D({
            store: t
            , select: function (e) {
                return e.ixInstances[f]
            }
            , onChange: ye
        }), i && t.dispatch((0, m.instanceStarted)(f, v.tick)))
    }

    function Ie(e, t) {
        me(document.body, "ix2-animation-stopping", {
            instanceId: e.id
            , state: t.getState()
        });
        var n = e.elementId
            , r = e.actionItem
            , i = t.getState().ixElements[n] || {}
            , o = i.ref;
        i.refType === w && W(o, r, y), t.dispatch((0, m.instanceRemoved)(e.id))
    }

    function me(e, t, n) {
        var r = document.createEvent("CustomEvent");
        r.initCustomEvent(t, !0, !0, n), e.dispatchEvent(r)
    }

    function ye(e, t) {
        var n = e.active
            , r = e.continuous
            , i = e.complete
            , o = e.elementId
            , a = e.actionItem
            , u = e.actionTypeId
            , c = e.renderType
            , s = e.current
            , l = e.groupIndex
            , f = e.eventId
            , d = e.eventTarget
            , p = e.eventStateKey
            , v = e.actionListId
            , h = e.isCarrier
            , E = e.styleProp
            , _ = e.verbose
            , g = e.pluginInstance
            , I = t.getState()
            , T = I.ixData
            , O = I.ixSession
            , b = (T.events[f] || {}).mediaQueries
            , A = void 0 === b ? T.mediaQueryKeys : b;
        if (B(A, O.mediaQueryKey) && (r || n || i)) {
            if (s || c === S && i) {
                t.dispatch((0, m.elementStateChanged)(o, u, s, a));
                var R = t.getState().ixElements[o] || {}
                    , C = R.ref
                    , N = R.refType
                    , L = R.refState
                    , x = L && L[u];
                switch (N) {
                case w:
                    M(C, L, x, f, a, E, y, c, g)
                }
            }
            if (i) {
                if (h) {
                    var D = _e({
                        store: t
                        , eventId: f
                        , eventTarget: d
                        , eventStateKey: p
                        , actionListId: v
                        , groupIndex: l + 1
                        , verbose: _
                    });
                    _ && !D && t.dispatch((0, m.actionListPlaybackChanged)({
                        actionListId: v
                        , isPlaying: !1
                    }))
                }
                Ie(e, t)
            }
        }
    }
}, function (e, t, n) {
    var r = n(98);
    e.exports = function (e, t, n) {
        "__proto__" == t && r ? r(e, t, {
            configurable: !0
            , enumerable: !0
            , value: n
            , writable: !0
        }) : e[t] = n
    }
}, function (e, t, n) {
    var r = n(8)
        , i = function () {
            try {
                var e = r(Object, "defineProperty");
                return e({}, "", {}), e
            } catch (e) {}
        }();
    e.exports = i
}, function (e, t) {
    e.exports = function (e, t, n) {
        return e == e && (void 0 !== n && (e = e <= n ? e : n), void 0 !== t && (e = e >= t ? e : t)), e
    }
}, function (e, t, n) {
    var r = n(4)
        , i = Object.create
        , o = function () {
            function e() {}
            return function (t) {
                if (!r(t)) return {};
                if (i) return i(t);
                e.prototype = t;
                var n = new e;
                return e.prototype = void 0, n
            }
        }();
    e.exports = o
}, function (e, t, n) {
    var r = n(257)
        , i = n(258)
        , o = r ? function (e) {
            return r.get(e)
        } : i;
    e.exports = o
}, function (e, t, n) {
    var r = n(259)
        , i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        for (var t = e.name + "", n = r[t], o = i.call(r, t) ? n.length : 0; o--;) {
            var a = n[o]
                , u = a.func;
            if (null == u || u == e) return a.name
        }
        return t
    }
}, function (e, t, n) {
    n(104), n(55), n(107), n(265), n(266), n(267), n(268), n(273), e.exports = n(274)
}, function (e, t, n) {
    "use strict";
    var r = n(5);
    r.define("brand", e.exports = function (e) {
        var t, n = {}
            , i = document
            , o = e("html")
            , a = e("body")
            , u = ".w-webflow-badge"
            , c = window.location
            , s = /PhantomJS/i.test(navigator.userAgent)
            , l = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

        function f() {
            var n = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || Boolean(i.webkitFullscreenElement);
            e(t).attr("style", n ? "display: none !important;" : "")
        }

        function d() {
            var e = a.children(u)
                , n = e.length && e.get(0) === t
                , i = r.env("editor");
            n ? i && e.remove() : (e.length && e.remove(), i || a.append(t))
        }
        return n.ready = function () {
            var n, r, a, u = o.attr("data-wf-status")
                , p = o.attr("data-wf-domain") || "";
            /\.webflow\.io$/i.test(p) && c.hostname !== p && (u = !0), u && !s && (t = t || (n = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), r = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon.f67cd735e3.svg").attr("alt", "").css({
                marginRight: "8px"
                , width: "16px"
            }), a = e("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg").attr("alt", "Made in Webflow"), n.append(r, a), n[0]), d(), setTimeout(d, 500), e(i).off(l, f).on(l, f))
        }, n
    })
}, function (e, t, n) {
    "use strict";
    var r = window.$
        , i = n(54) && r.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    e.exports = function () {
        var e = {
                VERSION: "1.6.0-Webflow"
            }
            , t = {}
            , n = Array.prototype
            , r = Object.prototype
            , o = Function.prototype
            , a = (n.push, n.slice)
            , u = (n.concat, r.toString, r.hasOwnProperty)
            , c = n.forEach
            , s = n.map
            , l = (n.reduce, n.reduceRight, n.filter)
            , f = (n.every, n.some)
            , d = n.indexOf
            , p = (n.lastIndexOf, Array.isArray, Object.keys)
            , v = (o.bind, e.each = e.forEach = function (n, r, i) {
                if (null == n) return n;
                if (c && n.forEach === c) n.forEach(r, i);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (r.call(i, n[o], o, n) === t) return
                } else {
                    var u = e.keys(n);
                    for (o = 0, a = u.length; o < a; o++)
                        if (r.call(i, n[u[o]], u[o], n) === t) return
                }
                return n
            });
        e.map = e.collect = function (e, t, n) {
            var r = [];
            return null == e ? r : s && e.map === s ? e.map(t, n) : (v(e, function (e, i, o) {
                r.push(t.call(n, e, i, o))
            }), r)
        }, e.find = e.detect = function (e, t, n) {
            var r;
            return h(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return r = e, !0
            }), r
        }, e.filter = e.select = function (e, t, n) {
            var r = [];
            return null == e ? r : l && e.filter === l ? e.filter(t, n) : (v(e, function (e, i, o) {
                t.call(n, e, i, o) && r.push(e)
            }), r)
        };
        var h = e.some = e.any = function (n, r, i) {
            r || (r = e.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(r, i) : (v(n, function (e, n, a) {
                if (o || (o = r.call(i, e, n, a))) return t
            }), !!o)
        };
        e.contains = e.include = function (e, t) {
            return null != e && (d && e.indexOf === d ? -1 != e.indexOf(t) : h(e, function (e) {
                return e === t
            }))
        }, e.delay = function (e, t) {
            var n = a.call(arguments, 2);
            return setTimeout(function () {
                return e.apply(null, n)
            }, t)
        }, e.defer = function (t) {
            return e.delay.apply(e, [t, 1].concat(a.call(arguments, 1)))
        }, e.throttle = function (e) {
            var t, n, r;
            return function () {
                t || (t = !0, n = arguments, r = this, i.frame(function () {
                    t = !1, e.apply(r, n)
                }))
            }
        }, e.debounce = function (t, n, r) {
            var i, o, a, u, c, s = function s() {
                var l = e.now() - u;
                l < n ? i = setTimeout(s, n - l) : (i = null, r || (c = t.apply(a, o), a = o = null))
            };
            return function () {
                a = this, o = arguments, u = e.now();
                var l = r && !i;
                return i || (i = setTimeout(s, n)), l && (c = t.apply(a, o), a = o = null), c
            }
        }, e.defaults = function (t) {
            if (!e.isObject(t)) return t;
            for (var n = 1, r = arguments.length; n < r; n++) {
                var i = arguments[n];
                for (var o in i) void 0 === t[o] && (t[o] = i[o])
            }
            return t
        }, e.keys = function (t) {
            if (!e.isObject(t)) return [];
            if (p) return p(t);
            var n = [];
            for (var r in t) e.has(t, r) && n.push(r);
            return n
        }, e.has = function (e, t) {
            return u.call(e, t)
        }, e.isObject = function (e) {
            return e === Object(e)
        }, e.now = Date.now || function () {
            return (new Date).getTime()
        }, e.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g
            , interpolate: /<%=([\s\S]+?)%>/g
            , escape: /<%-([\s\S]+?)%>/g
        };
        var E = /(.)^/
            , _ = {
                "'": "'"
                , "\\": "\\"
                , "\r": "r"
                , "\n": "n"
                , "\u2028": "u2028"
                , "\u2029": "u2029"
            }
            , g = /\\|'|\r|\n|\u2028|\u2029/g
            , I = function (e) {
                return "\\" + _[e]
            };
        return e.template = function (t, n, r) {
            !n && r && (n = r), n = e.defaults({}, n, e.templateSettings);
            var i = RegExp([(n.escape || E).source, (n.interpolate || E).source, (n.evaluate || E).source].join("|") + "|$", "g")
                , o = 0
                , a = "__p+='";
            t.replace(i, function (e, n, r, i, u) {
                return a += t.slice(o, u).replace(g, I), o = u + e.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? a += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : i && (a += "';\n" + i + "\n__p+='"), e
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var u = new Function(n.variable || "obj", "_", a)
            } catch (e) {
                throw e.source = a, e
            }
            var c = function (t) {
                    return u.call(this, t, e)
                }
                , s = n.variable || "obj";
            return c.source = "function(" + s + "){\n" + a + "}", c
        }, e
    }()
}, function (e, t, n) {
    "use strict";
    var r = window.jQuery
        , i = {}
        , o = []
        , a = {
            reset: function (e, t) {
                t.__wf_intro = null
            }
            , intro: function (e, t) {
                t.__wf_intro || (t.__wf_intro = !0, r(t).triggerHandler(i.types.INTRO))
            }
            , outro: function (e, t) {
                t.__wf_intro && (t.__wf_intro = null, r(t).triggerHandler(i.types.OUTRO))
            }
        };
    i.triggers = {}, i.types = {
        INTRO: "w-ix-intro.w-ix"
        , OUTRO: "w-ix-outro.w-ix"
    }, i.init = function () {
        for (var e = o.length, t = 0; t < e; t++) {
            var n = o[t];
            n[0](0, n[1])
        }
        o = [], r.extend(i.triggers, a)
    }, i.async = function () {
        for (var e in a) {
            var t = a[e];
            a.hasOwnProperty(e) && (i.triggers[e] = function (e, n) {
                o.push([t, n])
            })
        }
    }, i.async(), e.exports = i
}, function (e, t, n) {
    "use strict";
    var r = n(5)
        , i = n(108);
    i.setEnv(r.env), r.define("ix2", e.exports = function () {
        return i
    })
}, function (e, t, n) {
    "use strict";
    var r = n(18)
        , i = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setEnv = function (e) {
        e() && (0, u.observeRequests)(s)
    }, t.init = function (e) {
        l(), (0, u.startEngine)({
            store: s
            , rawData: e
            , allowEvents: !0
        })
    }, t.destroy = l, t.actions = t.store = void 0;
    var o = n(56)
        , a = i(n(120))
        , u = n(96)
        , c = r(n(50));
    t.actions = c;
    var s = (0, o.createStore)(a.default);

    function l() {
        (0, u.stopEngine)(s)
    }
    t.store = s
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(58)
        , i = n(112)
        , o = n(113)
        , a = "[object Null]"
        , u = "[object Undefined]"
        , c = r.default ? r.default.toStringTag : void 0;
    t.default = function (e) {
        return null == e ? void 0 === e ? u : a : c && c in Object(e) ? Object(i.default)(e) : Object(o.default)(e)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(111)
        , i = "object" == typeof self && self && self.Object === Object && self
        , o = r.default || i || Function("return this")();
    t.default = o
}, function (e, t, n) {
    "use strict";
    n.r(t)
        , function (e) {
            var n = "object" == typeof e && e && e.Object === Object && e;
            t.default = n
        }.call(this, n(30))
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(58)
        , i = Object.prototype
        , o = i.hasOwnProperty
        , a = i.toString
        , u = r.default ? r.default.toStringTag : void 0;
    t.default = function (e) {
        var t = o.call(e, u)
            , n = e[u];
        try {
            e[u] = void 0;
            var r = !0
        } catch (e) {}
        var i = a.call(e);
        return r && (t ? e[u] = n : delete e[u]), i
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = Object.prototype.toString;
    t.default = function (e) {
        return r.call(e)
    }
}, function (e, t, n) {
    "use strict";
    n.r(t);
    var r = n(115)
        , i = Object(r.default)(Object.getPrototypeOf, Object);
    t.default = i
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = function (e, t) {
        return function (n) {
            return e(t(n))
        }
    }
}, function (e, t, n) {
    "use strict";
    n.r(t), t.default = function (e) {
        return null != e && "object" == typeof e
    }
}, function (e, t, n) {
    "use strict";
    n.r(t)
        , function (e, r) {
            var i, o = n(119);
            i = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : r;
            var a = Object(o.default)(i);
            t.default = a
        }.call(this, n(30), n(118)(e))
}, function (e, t) {
    e.exports = function (e) {
        if (!e.webpackPolyfill) {
            var t = Object.create(e);
            t.children || (t.children = []), Object.defineProperty(t, "loaded", {
                enumerable: !0
                , get: function () {
                    return t.l
                }
            }), Object.defineProperty(t, "id", {
                enumerable: !0
                , get: function () {
                    return t.i
                }
            }), Object.defineProperty(t, "exports", {
                enumerable: !0
            }), t.webpackPolyfill = 1
        }
        return t
    }
}, function (e, t, n) {
    "use strict";

    function r(e) {
        var t, n = e.Symbol;
        return "function" == typeof n ? n.observable ? t = n.observable : (t = n("observable"), n.observable = t) : t = "@@observable", t
    }
    n.r(t), n.d(t, "default", function () {
        return r
    })
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var r = n(56)
        , i = n(121)
        , o = n(211)
        , a = n(212)
        , u = n(2)
        , c = n(213)
        , s = n(214)
        , l = u.IX2ElementsReducer.ixElements
        , f = (0, r.combineReducers)({
            ixData: i.ixData
            , ixRequest: o.ixRequest
            , ixSession: a.ixSession
            , ixElements: l
            , ixInstances: c.ixInstances
            , ixParameters: s.ixParameters
        });
    t.default = f
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ixData = void 0;
    var r = n(2).IX2EngineActionTypes.IX2_RAW_DATA_IMPORTED;
    t.ixData = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({})
            , t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
        case r:
            return t.payload.ixData || Object.freeze({});
        default:
            return e
        }
    }
}, function (e, t, n) {
    var r = n(123)
        , i = n(175)
        , o = n(79);
    e.exports = function (e) {
        var t = i(e);
        return 1 == t.length && t[0][2] ? o(t[0][0], t[0][1]) : function (n) {
            return n === e || r(n, e, t)
        }
    }
}, function (e, t, n) {
    var r = n(65)
        , i = n(69)
        , o = 1
        , a = 2;
    e.exports = function (e, t, n, u) {
        var c = n.length
            , s = c
            , l = !u;
        if (null == e) return !s;
        for (e = Object(e); c--;) {
            var f = n[c];
            if (l && f[2] ? f[1] !== e[f[0]] : !(f[0] in e)) return !1
        }
        for (; ++c < s;) {
            var d = (f = n[c])[0]
                , p = e[d]
                , v = f[1];
            if (l && f[2]) {
                if (void 0 === p && !(d in e)) return !1
            } else {
                var h = new r;
                if (u) var E = u(p, v, d, e, t, h);
                if (!(void 0 === E ? i(v, p, o | a, u, h) : E)) return !1
            }
        }
        return !0
    }
}, function (e, t) {
    e.exports = function () {
        this.__data__ = [], this.size = 0
    }
}, function (e, t, n) {
    var r = n(20)
        , i = Array.prototype.splice;
    e.exports = function (e) {
        var t = this.__data__
            , n = r(t, e);
        return !(n < 0 || (n == t.length - 1 ? t.pop() : i.call(t, n, 1), --this.size, 0))
    }
}, function (e, t, n) {
    var r = n(20);
    e.exports = function (e) {
        var t = this.__data__
            , n = r(t, e);
        return n < 0 ? void 0 : t[n][1]
    }
}, function (e, t, n) {
    var r = n(20);
    e.exports = function (e) {
        return r(this.__data__, e) > -1
    }
}, function (e, t, n) {
    var r = n(20);
    e.exports = function (e, t) {
        var n = this.__data__
            , i = r(n, e);
        return i < 0 ? (++this.size, n.push([e, t])) : n[i][1] = t, this
    }
}, function (e, t, n) {
    var r = n(19);
    e.exports = function () {
        this.__data__ = new r, this.size = 0
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = this.__data__
            , n = t.delete(e);
        return this.size = t.size, n
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.get(e)
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.has(e)
    }
}, function (e, t, n) {
    var r = n(19)
        , i = n(34)
        , o = n(35)
        , a = 200;
    e.exports = function (e, t) {
        var n = this.__data__;
        if (n instanceof r) {
            var u = n.__data__;
            if (!i || u.length < a - 1) return u.push([e, t]), this.size = ++n.size, this;
            n = this.__data__ = new o(u)
        }
        return n.set(e, t), this.size = n.size, this
    }
}, function (e, t, n) {
    var r = n(66)
        , i = n(137)
        , o = n(4)
        , a = n(68)
        , u = /^\[object .+?Constructor\]$/
        , c = Function.prototype
        , s = Object.prototype
        , l = c.toString
        , f = s.hasOwnProperty
        , d = RegExp("^" + l.call(f).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
    e.exports = function (e) {
        return !(!o(e) || i(e)) && (r(e) ? d : u).test(a(e))
    }
}, function (e, t, n) {
    var r = n(13)
        , i = Object.prototype
        , o = i.hasOwnProperty
        , a = i.toString
        , u = r ? r.toStringTag : void 0;
    e.exports = function (e) {
        var t = o.call(e, u)
            , n = e[u];
        try {
            e[u] = void 0;
            var r = !0
        } catch (e) {}
        var i = a.call(e);
        return r && (t ? e[u] = n : delete e[u]), i
    }
}, function (e, t) {
    var n = Object.prototype.toString;
    e.exports = function (e) {
        return n.call(e)
    }
}, function (e, t, n) {
    var r, i = n(138)
        , o = (r = /[^.]+$/.exec(i && i.keys && i.keys.IE_PROTO || "")) ? "Symbol(src)_1." + r : "";
    e.exports = function (e) {
        return !!o && o in e
    }
}, function (e, t, n) {
    var r = n(3)["__core-js_shared__"];
    e.exports = r
}, function (e, t) {
    e.exports = function (e, t) {
        return null == e ? void 0 : e[t]
    }
}, function (e, t, n) {
    var r = n(141)
        , i = n(19)
        , o = n(34);
    e.exports = function () {
        this.size = 0, this.__data__ = {
            hash: new r
            , map: new(o || i)
            , string: new r
        }
    }
}, function (e, t, n) {
    var r = n(142)
        , i = n(143)
        , o = n(144)
        , a = n(145)
        , u = n(146);

    function c(e) {
        var t = -1
            , n = null == e ? 0 : e.length;
        for (this.clear(); ++t < n;) {
            var r = e[t];
            this.set(r[0], r[1])
        }
    }
    c.prototype.clear = r, c.prototype.delete = i, c.prototype.get = o, c.prototype.has = a, c.prototype.set = u, e.exports = c
}, function (e, t, n) {
    var r = n(21);
    e.exports = function () {
        this.__data__ = r ? r(null) : {}, this.size = 0
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t
    }
}, function (e, t, n) {
    var r = n(21)
        , i = "__lodash_hash_undefined__"
        , o = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        var t = this.__data__;
        if (r) {
            var n = t[e];
            return n === i ? void 0 : n
        }
        return o.call(t, e) ? t[e] : void 0
    }
}, function (e, t, n) {
    var r = n(21)
        , i = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        var t = this.__data__;
        return r ? void 0 !== t[e] : i.call(t, e)
    }
}, function (e, t, n) {
    var r = n(21)
        , i = "__lodash_hash_undefined__";
    e.exports = function (e, t) {
        var n = this.__data__;
        return this.size += this.has(e) ? 0 : 1, n[e] = r && void 0 === t ? i : t, this
    }
}, function (e, t, n) {
    var r = n(22);
    e.exports = function (e) {
        var t = r(this, e).delete(e);
        return this.size -= t ? 1 : 0, t
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = typeof e;
        return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
    }
}, function (e, t, n) {
    var r = n(22);
    e.exports = function (e) {
        return r(this, e).get(e)
    }
}, function (e, t, n) {
    var r = n(22);
    e.exports = function (e) {
        return r(this, e).has(e)
    }
}, function (e, t, n) {
    var r = n(22);
    e.exports = function (e, t) {
        var n = r(this, e)
            , i = n.size;
        return n.set(e, t), this.size += n.size == i ? 0 : 1, this
    }
}, function (e, t, n) {
    var r = n(65)
        , i = n(70)
        , o = n(158)
        , a = n(162)
        , u = n(43)
        , c = n(1)
        , s = n(37)
        , l = n(39)
        , f = 1
        , d = "[object Arguments]"
        , p = "[object Array]"
        , v = "[object Object]"
        , h = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, E, _, g) {
        var I = c(e)
            , m = c(t)
            , y = I ? p : u(e)
            , T = m ? p : u(t)
            , O = (y = y == d ? v : y) == v
            , b = (T = T == d ? v : T) == v
            , A = y == T;
        if (A && s(e)) {
            if (!s(t)) return !1;
            I = !0, O = !1
        }
        if (A && !O) return g || (g = new r), I || l(e) ? i(e, t, n, E, _, g) : o(e, t, y, n, E, _, g);
        if (!(n & f)) {
            var w = O && h.call(e, "__wrapped__")
                , S = b && h.call(t, "__wrapped__");
            if (w || S) {
                var R = w ? e.value() : e
                    , C = S ? t.value() : t;
                return g || (g = new r), _(R, C, n, E, g)
            }
        }
        return !!A && (g || (g = new r), a(e, t, n, E, _, g))
    }
}, function (e, t, n) {
    var r = n(35)
        , i = n(154)
        , o = n(155);

    function a(e) {
        var t = -1
            , n = null == e ? 0 : e.length;
        for (this.__data__ = new r; ++t < n;) this.add(e[t])
    }
    a.prototype.add = a.prototype.push = i, a.prototype.has = o, e.exports = a
}, function (e, t) {
    var n = "__lodash_hash_undefined__";
    e.exports = function (e) {
        return this.__data__.set(e, n), this
    }
}, function (e, t) {
    e.exports = function (e) {
        return this.__data__.has(e)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r;)
            if (t(e[n], n, e)) return !0;
        return !1
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return e.has(t)
    }
}, function (e, t, n) {
    var r = n(13)
        , i = n(159)
        , o = n(33)
        , a = n(70)
        , u = n(160)
        , c = n(161)
        , s = 1
        , l = 2
        , f = "[object Boolean]"
        , d = "[object Date]"
        , p = "[object Error]"
        , v = "[object Map]"
        , h = "[object Number]"
        , E = "[object RegExp]"
        , _ = "[object Set]"
        , g = "[object String]"
        , I = "[object Symbol]"
        , m = "[object ArrayBuffer]"
        , y = "[object DataView]"
        , T = r ? r.prototype : void 0
        , O = T ? T.valueOf : void 0;
    e.exports = function (e, t, n, r, T, b, A) {
        switch (n) {
        case y:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
            e = e.buffer, t = t.buffer;
        case m:
            return !(e.byteLength != t.byteLength || !b(new i(e), new i(t)));
        case f:
        case d:
        case h:
            return o(+e, +t);
        case p:
            return e.name == t.name && e.message == t.message;
        case E:
        case g:
            return e == t + "";
        case v:
            var w = u;
        case _:
            var S = r & s;
            if (w || (w = c), e.size != t.size && !S) return !1;
            var R = A.get(e);
            if (R) return R == t;
            r |= l, A.set(e, t);
            var C = a(w(e), w(t), r, T, b, A);
            return A.delete(e), C;
        case I:
            if (O) return O.call(e) == O.call(t)
        }
        return !1
    }
}, function (e, t, n) {
    var r = n(3).Uint8Array;
    e.exports = r
}, function (e, t) {
    e.exports = function (e) {
        var t = -1
            , n = Array(e.size);
        return e.forEach(function (e, r) {
            n[++t] = [r, e]
        }), n
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = -1
            , n = Array(e.size);
        return e.forEach(function (e) {
            n[++t] = e
        }), n
    }
}, function (e, t, n) {
    var r = n(163)
        , i = 1
        , o = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n, a, u, c) {
        var s = n & i
            , l = r(e)
            , f = l.length;
        if (f != r(t).length && !s) return !1;
        for (var d = f; d--;) {
            var p = l[d];
            if (!(s ? p in t : o.call(t, p))) return !1
        }
        var v = c.get(e);
        if (v && c.get(t)) return v == t;
        var h = !0;
        c.set(e, t), c.set(t, e);
        for (var E = s; ++d < f;) {
            var _ = e[p = l[d]]
                , g = t[p];
            if (a) var I = s ? a(g, _, p, t, e, c) : a(_, g, p, e, t, c);
            if (!(void 0 === I ? _ === g || u(_, g, n, a, c) : I)) {
                h = !1;
                break
            }
            E || (E = "constructor" == p)
        }
        if (h && !E) {
            var m = e.constructor
                , y = t.constructor;
            m != y && "constructor" in e && "constructor" in t && !("function" == typeof m && m instanceof m && "function" == typeof y && y instanceof y) && (h = !1)
        }
        return c.delete(e), c.delete(t), h
    }
}, function (e, t, n) {
    var r = n(71)
        , i = n(72)
        , o = n(23);
    e.exports = function (e) {
        return r(e, o, i)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length, i = 0, o = []; ++n < r;) {
            var a = e[n];
            t(a, n, e) && (o[i++] = a)
        }
        return o
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
        return r
    }
}, function (e, t, n) {
    var r = n(10)
        , i = n(9)
        , o = "[object Arguments]";
    e.exports = function (e) {
        return i(e) && r(e) == o
    }
}, function (e, t) {
    e.exports = function () {
        return !1
    }
}, function (e, t, n) {
    var r = n(10)
        , i = n(40)
        , o = n(9)
        , a = {};
    a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function (e) {
        return o(e) && i(e.length) && !!a[r(e)]
    }
}, function (e, t) {
    e.exports = function (e) {
        return function (t) {
            return e(t)
        }
    }
}, function (e, t, n) {
    (function (e) {
        var r = n(67)
            , i = t && !t.nodeType && t
            , o = i && "object" == typeof e && e && !e.nodeType && e
            , a = o && o.exports === i && r.process
            , u = function () {
                try {
                    var e = o && o.require && o.require("util").types;
                    return e || a && a.binding && a.binding("util")
                } catch (e) {}
            }();
        e.exports = u
    }).call(this, n(75)(e))
}, function (e, t, n) {
    var r = n(76)(Object.keys, Object);
    e.exports = r
}, function (e, t, n) {
    var r = n(8)(n(3), "DataView");
    e.exports = r
}, function (e, t, n) {
    var r = n(8)(n(3), "Promise");
    e.exports = r
}, function (e, t, n) {
    var r = n(8)(n(3), "Set");
    e.exports = r
}, function (e, t, n) {
    var r = n(78)
        , i = n(23);
    e.exports = function (e) {
        for (var t = i(e), n = t.length; n--;) {
            var o = t[n]
                , a = e[o];
            t[n] = [o, a, r(a)]
        }
        return t
    }
}, function (e, t, n) {
    var r = n(69)
        , i = n(25)
        , o = n(180)
        , a = n(45)
        , u = n(78)
        , c = n(79)
        , s = n(14)
        , l = 1
        , f = 2;
    e.exports = function (e, t) {
        return a(e) && u(t) ? c(s(e), t) : function (n) {
            var a = i(n, e);
            return void 0 === a && a === t ? o(n, e) : r(t, a, l | f)
        }
    }
}, function (e, t, n) {
    var r = n(178)
        , i = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
        , o = /\\(\\)?/g
        , a = r(function (e) {
            var t = [];
            return 46 === e.charCodeAt(0) && t.push(""), e.replace(i, function (e, n, r, i) {
                t.push(r ? i.replace(o, "$1") : n || e)
            }), t
        });
    e.exports = a
}, function (e, t, n) {
    var r = n(179)
        , i = 500;
    e.exports = function (e) {
        var t = r(e, function (e) {
                return n.size === i && n.clear(), e
            })
            , n = t.cache;
        return t
    }
}, function (e, t, n) {
    var r = n(35)
        , i = "Expected a function";

    function o(e, t) {
        if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(i);
        var n = function () {
            var r = arguments
                , i = t ? t.apply(this, r) : r[0]
                , o = n.cache;
            if (o.has(i)) return o.get(i);
            var a = e.apply(this, r);
            return n.cache = o.set(i, a) || o, a
        };
        return n.cache = new(o.Cache || r), n
    }
    o.Cache = r, e.exports = o
}, function (e, t, n) {
    var r = n(181)
        , i = n(182);
    e.exports = function (e, t) {
        return null != e && i(e, t, r)
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return null != e && t in Object(e)
    }
}, function (e, t, n) {
    var r = n(26)
        , i = n(24)
        , o = n(1)
        , a = n(38)
        , u = n(40)
        , c = n(14);
    e.exports = function (e, t, n) {
        for (var s = -1, l = (t = r(t, e)).length, f = !1; ++s < l;) {
            var d = c(t[s]);
            if (!(f = null != e && n(e, d))) break;
            e = e[d]
        }
        return f || ++s != l ? f : !!(l = null == e ? 0 : e.length) && u(l) && a(d, l) && (o(e) || i(e))
    }
}, function (e, t, n) {
    var r = n(83)
        , i = n(184)
        , o = n(45)
        , a = n(14);
    e.exports = function (e) {
        return o(e) ? r(a(e)) : i(e)
    }
}, function (e, t, n) {
    var r = n(44);
    e.exports = function (e) {
        return function (t) {
            return r(t, e)
        }
    }
}, function (e, t, n) {
    var r = n(84)
        , i = n(7)
        , o = n(47)
        , a = Math.max;
    e.exports = function (e, t, n) {
        var u = null == e ? 0 : e.length;
        if (!u) return -1;
        var c = null == n ? 0 : o(n);
        return c < 0 && (c = a(u + c, 0)), r(e, i(t, 3), c)
    }
}, function (e, t, n) {
    var r = n(48)
        , i = 1 / 0
        , o = 1.7976931348623157e308;
    e.exports = function (e) {
        return e ? (e = r(e)) === i || e === -i ? (e < 0 ? -1 : 1) * o : e == e ? e : 0 : 0 === e ? e : 0
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) {
            for (var t = 0, n = new Array(e.length); t < e.length; t++) n[t] = e[t];
            return n
        }
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.createElementState = c, t.mergeActionState = s, t.ixElements = void 0;
    var r = n(15)
        , i = n(49)
        , o = n(89)
        , a = {}
        , u = "refState";

    function c(e, t, n, o, a) {
        var u = n === i.PLAIN_OBJECT ? (0, r.getIn)(a, ["config", "target", "objectId"]) : null;
        return (0, r.mergeIn)(e, [o], {
            id: o
            , ref: t
            , refId: u
            , refType: n
        })
    }

    function s(e, t, n, i, o) {
        var a = function (e) {
                var t = e.config;
                return l.reduce(function (e, n) {
                    var r = n[0]
                        , i = n[1]
                        , o = t[r]
                        , a = t[i];
                    return null != o && null != a && (e[i] = a), e
                }, {})
            }(o)
            , c = [t, u, n];
        return (0, r.mergeIn)(e, c, i, a)
    }
    t.ixElements = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a
            , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        switch (t.type) {
        case o.IX2_SESSION_STOPPED:
            return a;
        case o.IX2_INSTANCE_ADDED:
            var n = t.payload
                , i = n.elementId
                , u = n.element
                , l = n.origin
                , f = n.actionItem
                , d = n.refType
                , p = f.actionTypeId
                , v = e;
            return (0, r.getIn)(v, [i, u]) !== u && (v = c(v, u, d, i, f)), s(v, i, p, l, f);
        case o.IX2_ELEMENT_STATE_CHANGED:
            var h = t.payload;
            return s(e, h.elementId, h.actionTypeId, h.current, h.actionItem);
        default:
            return e
        }
    };
    var l = [
        [i.CONFIG_X_VALUE, i.CONFIG_X_UNIT]
        
        , [i.CONFIG_Y_VALUE, i.CONFIG_Y_UNIT]
        
        , [i.CONFIG_Z_VALUE, i.CONFIG_Z_UNIT]
        
        , [i.CONFIG_VALUE, i.CONFIG_UNIT]
    ]
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.clearPlugin = t.renderPlugin = t.createPluginInstance = t.getPluginDestination = t.getPluginOrigin = t.getPluginDuration = t.getPluginConfig = void 0;
    t.getPluginConfig = function (e) {
        return e.value
    };
    t.getPluginDuration = function (e, t) {
        if ("auto" !== t.config.duration) return null;
        var n = parseFloat(e.getAttribute("data-duration"));
        return n > 0 ? 1e3 * n : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
    };
    t.getPluginOrigin = function (e) {
        return e || {
            value: 0
        }
    };
    t.getPluginDestination = function (e) {
        return {
            value: e.value
        }
    };
    t.createPluginInstance = function (e) {
        var t = window.Webflow.require("lottie").createInstance(e);
        return t.stop(), t.setSubframe(!0), t
    };
    t.renderPlugin = function (e, t, n) {
        if (e) {
            var r = t[n.actionTypeId].value / 100;
            e.goToFrame(e.frames * r)
        }
    };
    t.clearPlugin = function (e) {
        window.Webflow.require("lottie").createInstance(e).stop()
    }
}, function (e, t, n) {
    "use strict";
    var r, i, o = n(0)(n(6))
        , a = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "InteractionTypeConsts", {
        enumerable: !0
        , get: function () {
            return s.InteractionTypeConsts
        }
    }), t.InteractionToEventsMap = t.InteractionConsts = void 0;
    var u = a(n(12))
        , c = n(91)
        , s = n(28)
        , l = s.InteractionTypeConsts
        , f = l.MOUSE_CLICK_INTERACTION
        , d = l.MOUSE_HOVER_INTERACTION
        , p = l.MOUSE_MOVE_INTERACTION
        , v = l.SCROLL_INTO_VIEW_INTERACTION
        , h = l.SCROLLING_IN_VIEW_INTERACTION
        , E = l.MOUSE_MOVE_IN_VIEWPORT_INTERACTION
        , _ = l.PAGE_IS_SCROLLING_INTERACTION
        , g = l.PAGE_LOAD_INTERACTION
        , I = l.PAGE_SCROLLED_INTERACTION
        , m = l.NAVBAR_INTERACTION
        , y = l.DROPDOWN_INTERACTION
        , T = l.ECOMMERCE_CART_INTERACTION
        , O = l.TAB_INTERACTION
        , b = l.SLIDER_INTERACTION
        , A = {
            id: null
            , label: ""
            , continuous: !1
            , description: ""
            , note: ""
            , headings: []
            , isPage: !1
        }
        , w = (r = {}, (0, o.default)(r, f, (0, u.default)({}, A, {
            id: f
            , label: "Mouse click (tap)"
            , headings: ["On 1st click", "On 2nd click"]
            , note: "Define actions that occur on 1st or 2nd tap."
            , description: "Animate on 1st or 2nd click/tap."
        })), (0, o.default)(r, d, (0, u.default)({}, A, {
            id: d
            , label: "Mouse hover"
            , headings: ["On hover", "On hover out"]
            , note: "Define actions that occur when cursor hovers over or away from element."
            , description: "Animate when cursor hovers over or away from element. No touch support."
        })), (0, o.default)(r, p, (0, u.default)({}, A, {
            id: p
            , label: "Mouse move over element"
            , continuous: !0
            , headings: ["On mouse move"]
            , note: "Define actions that occur when cursor moves over element along X or Y axis."
            , description: "Animate while cursor moves over the element along the X or Y axis. No touch support."
        })), (0, o.default)(r, v, (0, u.default)({}, A, {
            id: v
            , label: "Scroll into view"
            , headings: ["When scrolled into view", "When scrolled out of view"]
            , note: "Define actions that occur when element scrolls into view."
            , description: "Animate when element scrolls into view."
        })), (0, o.default)(r, h, (0, u.default)({}, A, {
            id: h
            , label: "While scrolling in view"
            , continuous: !0
            , headings: ["On scroll"]
            , note: "Define actions that occur when element scrolls through viewport."
            , description: "Animate while element scrolls through viewport."
        })), (0, o.default)(r, E, (0, u.default)({}, A, {
            id: E
            , label: "Mouse move in viewport"
            , continuous: !0
            , headings: ["On mouse move"]
            , note: "Define actions that occur while the mouse moves over the viewport along the X or Y axis. No touch support."
            , description: "Animate while the mouse moves over the viewport along the X or Y axis. No touch support."
            , isPage: !0
        })), (0, o.default)(r, _, (0, u.default)({}, A, {
            id: _
            , label: "While page is scrolling"
            , continuous: !0
            , headings: ["On scroll"]
            , note: "Define actions that occur during page scroll."
            , description: "Animate elements as entire page scrolls from top to bottom."
            , isPage: !0
        })), (0, o.default)(r, g, (0, u.default)({}, A, {
            id: g
            , label: "Page load"
            , headings: ["When page starts loading", "When page finishes loading"]
            , note: "Define actions that occur when page starts or finishes loading."
            , description: "Animate when the page starts or finishes loading."
            , isPage: !0
        })), (0, o.default)(r, I, (0, u.default)({}, A, {
            id: I
            , label: "Page scrolled"
            , headings: ["When scrolled up", "When scrolled down"]
            , note: "Define actions that occur when the page scrolls up or down."
            , description: "Animate when page scrolls up and/or down."
            , isPage: !0
        })), (0, o.default)(r, m, (0, u.default)({}, A, {
            id: m
            , label: "Navbar opens"
            , headings: ["Menu opens", "Menu closes"]
            , note: "Select actions to perform when navbar menu opens and closes."
            , description: "Animate when navbar menu opens or closes."
        })), (0, o.default)(r, y, (0, u.default)({}, A, {
            id: y
            , label: "Dropdown opens"
            , headings: ["Menu opens", "Menu closes"]
            , note: "Define actions to perform when dropdown menu opens and closes."
            , description: "Animate when dropdown menu opens or closes."
        })), (0, o.default)(r, T, (0, u.default)({}, A, {
            id: T
            , label: "Cart opens"
            , headings: ["Cart opens", "Cart closes"]
            , note: "Select actions to perform when cart opens and closes."
            , description: "Animate when cart opens or closes."
        })), (0, o.default)(r, O, (0, u.default)({}, A, {
            id: O
            , label: "Tab change"
            , headings: ["Tab in view", "Tab out of view"]
            , note: "Define actions to perform when a tab is in view (active) and out of view (inactive)."
            , description: "Animate when tab is in view or out of view."
        })), (0, o.default)(r, b, (0, u.default)({}, A, {
            id: b
            , label: "Slider change"
            , headings: ["Slider in view", "Slider out of view"]
            , note: "Define actions to perform when slide comes into view and goes out of view."
            , description: "Animate when slide is in view or out of view."
        })), r);
    t.InteractionConsts = w;
    var S = (i = {}, (0, o.default)(i, f, [c.EventConsts.MOUSE_CLICK, c.EventConsts.MOUSE_SECOND_CLICK]), (0, o.default)(i, d, [c.EventConsts.MOUSE_OVER, c.EventConsts.MOUSE_OUT]), (0, o.default)(i, v, [c.EventConsts.SCROLL_INTO_VIEW, c.EventConsts.SCROLL_OUT_OF_VIEW]), (0, o.default)(i, g, [c.EventConsts.PAGE_START, c.EventConsts.PAGE_FINISH]), (0, o.default)(i, I, [c.EventConsts.PAGE_SCROLL_UP, c.EventConsts.PAGE_SCROLL_DOWN]), (0, o.default)(i, p, [c.EventConsts.MOUSE_MOVE]), (0, o.default)(i, h, [c.EventConsts.SCROLLING_IN_VIEW]), (0, o.default)(i, E, [c.EventConsts.MOUSE_MOVE_IN_VIEWPORT]), (0, o.default)(i, _, [c.EventConsts.PAGE_SCROLL]), (0, o.default)(i, y, [c.EventConsts.DROPDOWN_OPEN, c.EventConsts.DROPDOWN_CLOSE]), (0, o.default)(i, m, [c.EventConsts.NAVBAR_OPEN, c.EventConsts.NAVBAR_CLOSE]), (0, o.default)(i, T, [c.EventConsts.ECOMMERCE_CART_OPEN, c.EventConsts.ECOMMERCE_CART_CLOSE]), (0, o.default)(i, O, [c.EventConsts.TAB_ACTIVE, c.EventConsts.TAB_INACTIVE]), (0, o.default)(i, b, [c.EventConsts.SLIDER_ACTIVE, c.EventConsts.SLIDER_INACTIVE]), i);
    t.InteractionToEventsMap = S
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.QuickEffectDirectionConsts = t.QuickEffectIds = t.EventLimitAffectedElements = t.EventContinuousMouseAxes = t.EventBasedOn = t.EventAppliesTo = t.EventTypeConsts = void 0;
    n(194), n(92);
    t.EventTypeConsts = {
        NAVBAR_OPEN: "NAVBAR_OPEN"
        , NAVBAR_CLOSE: "NAVBAR_CLOSE"
        , TAB_ACTIVE: "TAB_ACTIVE"
        , TAB_INACTIVE: "TAB_INACTIVE"
        , SLIDER_ACTIVE: "SLIDER_ACTIVE"
        , SLIDER_INACTIVE: "SLIDER_INACTIVE"
        , DROPDOWN_OPEN: "DROPDOWN_OPEN"
        , DROPDOWN_CLOSE: "DROPDOWN_CLOSE"
        , MOUSE_CLICK: "MOUSE_CLICK"
        , MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK"
        , MOUSE_DOWN: "MOUSE_DOWN"
        , MOUSE_UP: "MOUSE_UP"
        , MOUSE_OVER: "MOUSE_OVER"
        , MOUSE_OUT: "MOUSE_OUT"
        , MOUSE_MOVE: "MOUSE_MOVE"
        , MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT"
        , SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW"
        , SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW"
        , SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW"
        , ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN"
        , ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE"
        , PAGE_START: "PAGE_START"
        , PAGE_FINISH: "PAGE_FINISH"
        , PAGE_SCROLL_UP: "PAGE_SCROLL_UP"
        , PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN"
        , PAGE_SCROLL: "PAGE_SCROLL"
    };
    t.EventAppliesTo = {
        ELEMENT: "ELEMENT"
        , CLASS: "CLASS"
        , PAGE: "PAGE"
    };
    t.EventBasedOn = {
        ELEMENT: "ELEMENT"
        , VIEWPORT: "VIEWPORT"
    };
    t.EventContinuousMouseAxes = {
        X_AXIS: "X_AXIS"
        , Y_AXIS: "Y_AXIS"
    };
    t.EventLimitAffectedElements = {
        CHILDREN: "CHILDREN"
        , SIBLINGS: "SIBLINGS"
        , IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
    };
    t.QuickEffectIds = {
        FADE_EFFECT: "FADE_EFFECT"
        , SLIDE_EFFECT: "SLIDE_EFFECT"
        , BLUR_EFFECT: "BLUR_EFFECT"
        , GROW_EFFECT: "GROW_EFFECT"
        , SHRINK_EFFECT: "SHRINK_EFFECT"
        , SPIN_EFFECT: "SPIN_EFFECT"
        , FLY_EFFECT: "FLY_EFFECT"
        , POP_EFFECT: "POP_EFFECT"
        , FLIP_EFFECT: "FLIP_EFFECT"
        , JIGGLE_EFFECT: "JIGGLE_EFFECT"
        , PULSE_EFFECT: "PULSE_EFFECT"
        , DROP_EFFECT: "DROP_EFFECT"
        , BLINK_EFFECT: "BLINK_EFFECT"
        , BOUNCE_EFFECT: "BOUNCE_EFFECT"
        , FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT"
        , FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT"
        , RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT"
        , JELLO_EFFECT: "JELLO_EFFECT"
        , GROW_BIG_EFFECT: "GROW_BIG_EFFECT"
        , SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT"
        , PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
    };
    t.QuickEffectDirectionConsts = {
        LEFT: "LEFT"
        , RIGHT: "RIGHT"
        , BOTTOM: "BOTTOM"
        , TOP: "TOP"
        , BOTTOM_LEFT: "BOTTOM_LEFT"
        , BOTTOM_RIGHT: "BOTTOM_RIGHT"
        , TOP_RIGHT: "TOP_RIGHT"
        , TOP_LEFT: "TOP_LEFT"
        , CLOCKWISE: "CLOCKWISE"
        , COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.DEFAULT_BREAKPOINT_IDS = t.BREAKPOINT_ID_TINY = t.BREAKPOINT_ID_SMALL = t.BREAKPOINT_ID_MEDIUM = t.BREAKPOINT_ID_MAIN = t.BREAKPOINT_ID_LARGE = t.BREAKPOINT_ID_XL = t.BREAKPOINT_ID_XXL = void 0;
    t.BREAKPOINT_ID_XXL = "xxl";
    t.BREAKPOINT_ID_XL = "xl";
    t.BREAKPOINT_ID_LARGE = "large";
    t.BREAKPOINT_ID_MAIN = "main";
    t.BREAKPOINT_ID_MEDIUM = "medium";
    t.BREAKPOINT_ID_SMALL = "small";
    t.BREAKPOINT_ID_TINY = "tiny";
    var r = ["main", "medium", "small", "tiny"];
    t.DEFAULT_BREAKPOINT_IDS = r
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.InteractionTypeConsts = void 0;
    t.InteractionTypeConsts = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION"
        , MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION"
        , MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION"
        , SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION"
        , SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION"
        , MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION"
        , PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION"
        , PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION"
        , PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION"
        , NAVBAR_INTERACTION: "NAVBAR_INTERACTION"
        , DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION"
        , ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION"
        , TAB_INTERACTION: "TAB_INTERACTION"
        , SLIDER_INTERACTION: "SLIDER_INTERACTION"
    }
}, function (e, t, n) {
    "use strict";
    var r, i = n(0)(n(6));
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "ActionTypeConsts", {
        enumerable: !0
        , get: function () {
            return o.ActionTypeConsts
        }
    }), Object.defineProperty(t, "ActionAppliesTo", {
        enumerable: !0
        , get: function () {
            return o.ActionAppliesTo
        }
    }), t.ActionConsts = void 0;
    var o = n(28)
        , a = o.ActionTypeConsts
        , u = a.TRANSFORM_MOVE
        , c = a.TRANSFORM_SCALE
        , s = a.TRANSFORM_ROTATE
        , l = a.TRANSFORM_SKEW
        , f = a.STYLE_OPACITY
        , d = a.STYLE_SIZE
        , p = a.STYLE_FILTER
        , v = a.STYLE_BACKGROUND_COLOR
        , h = a.STYLE_BORDER
        , E = a.STYLE_TEXT_COLOR
        , _ = a.PLUGIN_LOTTIE
        , g = a.GENERAL_DISPLAY
        , I = a.GENERAL_START_ACTION
        , m = a.GENERAL_CONTINUOUS_ACTION
        , y = (r = {}, (0, i.default)(r, u, {
            id: u
            , label: "Move"
            , instant: !1
        }), (0, i.default)(r, c, {
            id: c
            , label: "Scale"
            , instant: !1
        }), (0, i.default)(r, s, {
            id: s
            , label: "Rotate"
            , instant: !1
        }), (0, i.default)(r, l, {
            id: l
            , label: "Skew"
            , instant: !1
        }), (0, i.default)(r, f, {
            id: f
            , label: "Opacity"
            , instant: !1
        }), (0, i.default)(r, d, {
            id: d
            , label: "Size"
            , instant: !1
        }), (0, i.default)(r, p, {
            id: p
            , label: "Filter"
            , instant: !1
        }), (0, i.default)(r, v, {
            id: v
            , label: "Background color"
            , instant: !1
        }), (0, i.default)(r, h, {
            id: h
            , label: "Border color"
            , instant: !1
        }), (0, i.default)(r, E, {
            id: E
            , label: "Text color"
            , instant: !1
        }), (0, i.default)(r, _, {
            id: _
            , label: "Lottie"
            , instant: !1
        }), (0, i.default)(r, g, {
            id: g
            , label: "Hide/Show"
            , instant: !0
        }), (0, i.default)(r, I, {
            id: I
            , label: "Start an animation"
            , instant: !0
        }), (0, i.default)(r, m, {
            id: m
            , label: "Control action list"
            , instant: !0
        }), r);
    t.ActionConsts = y
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.EasingConsts = void 0;
    t.EasingConsts = [{
        header: !0
        , label: "Default"
        , value: "header-default"
    }, {
        header: !1
        , label: "Linear (None)"
        , value: ""
    }, {
        header: !1
        , label: "Ease"
        , value: "ease"
    }, {
        header: !1
        , label: "Ease In"
        , value: "easeIn"
    }, {
        header: !1
        , label: "Ease Out"
        , value: "easeOut"
    }, {
        header: !1
        , label: "Ease In Out"
        , value: "easeInOut"
    }, {
        header: !0
        , label: "Ease In"
        , value: "header-ease-in"
    }, {
        header: !1
        , label: "In Quad"
        , value: "inQuad"
    }, {
        header: !1
        , label: "In Cubic"
        , value: "inCubic"
    }, {
        header: !1
        , label: "In Quart"
        , value: "inQuart"
    }, {
        header: !1
        , label: "In Quint"
        , value: "inQuint"
    }, {
        header: !1
        , label: "In Sine"
        , value: "inSine"
    }, {
        header: !1
        , label: "In Expo"
        , value: "inExpo"
    }, {
        header: !1
        , label: "In Circ"
        , value: "inCirc"
    }, {
        header: !1
        , label: "In Back"
        , value: "inBack"
    }, {
        header: !1
        , label: "In Elastic"
        , value: "inElastic"
    }, {
        header: !0
        , label: "Ease Out"
        , value: "header-ease-out"
    }, {
        header: !1
        , label: "Out Quad"
        , value: "outQuad"
    }, {
        header: !1
        , label: "Out Cubic"
        , value: "outCubic"
    }, {
        header: !1
        , label: "Out Quart"
        , value: "outQuart"
    }, {
        header: !1
        , label: "Out Quint"
        , value: "outQuint"
    }, {
        header: !1
        , label: "Out Sine"
        , value: "outSine"
    }, {
        header: !1
        , label: "Out Expo"
        , value: "outExpo"
    }, {
        header: !1
        , label: "Out Circ"
        , value: "outCirc"
    }, {
        header: !1
        , label: "Out Bounce"
        , value: "outBounce"
    }, {
        header: !1
        , label: "Out Back"
        , value: "outBack"
    }, {
        header: !1
        , label: "Out Elastic"
        , value: "outElastic"
    }, {
        header: !0
        , label: "Ease In Out"
        , value: "header-ease-in-out"
    }, {
        header: !1
        , label: "In Out Quad"
        , value: "inOutQuad"
    }, {
        header: !1
        , label: "In Out Cubic"
        , value: "inOutCubic"
    }, {
        header: !1
        , label: "In Out Quart"
        , value: "inOutQuart"
    }, {
        header: !1
        , label: "In Out Quint"
        , value: "inOutQuint"
    }, {
        header: !1
        , label: "In Out Sine"
        , value: "inOutSine"
    }, {
        header: !1
        , label: "In Out Expo"
        , value: "inOutExpo"
    }, {
        header: !1
        , label: "In Out Circ"
        , value: "inOutCirc"
    }, {
        header: !1
        , label: "In Out Back"
        , value: "inOutBack"
    }, {
        header: !1
        , label: "In Out Elastic"
        , value: "inOutElastic"
    }, {
        header: !0
        , label: "Bounce"
        , value: "header-bounce"
    }, {
        header: !1
        , label: "Bounce"
        , value: "bounce"
    }, {
        header: !1
        , label: "Bounce Past"
        , value: "bouncePast"
    }, {
        header: !0
        , label: "Swing"
        , value: "header-swing"
    }, {
        header: !1
        , label: "Swing From To"
        , value: "swingFromTo"
    }, {
        header: !1
        , label: "Swing From"
        , value: "swingFrom"
    }, {
        header: !1
        , label: "Swing To"
        , value: "swingTo"
    }]
}, function (e, t, n) {
    "use strict";
    var r, i = n(0)(n(6));
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), Object.defineProperty(t, "QuickEffectIds", {
        enumerable: !0
        , get: function () {
            return o.QuickEffectIds
        }
    }), Object.defineProperty(t, "QuickEffectDirectionConsts", {
        enumerable: !0
        , get: function () {
            return o.QuickEffectDirectionConsts
        }
    }), t.QuickEffectLabelMap = t.QuickEffectConsts = void 0;
    var o = n(28)
        , a = o.QuickEffectIds
        , u = a.FADE_EFFECT
        , c = a.SLIDE_EFFECT
        , s = a.GROW_EFFECT
        , l = a.SHRINK_EFFECT
        , f = a.SPIN_EFFECT
        , d = a.FLY_EFFECT
        , p = a.POP_EFFECT
        , v = a.FLIP_EFFECT
        , h = a.JIGGLE_EFFECT
        , E = a.PULSE_EFFECT
        , _ = a.DROP_EFFECT
        , g = a.BLINK_EFFECT
        , I = a.BOUNCE_EFFECT
        , m = a.FLIP_LEFT_TO_RIGHT_EFFECT
        , y = a.FLIP_RIGHT_TO_LEFT_EFFECT
        , T = a.RUBBER_BAND_EFFECT
        , O = a.JELLO_EFFECT
        , b = a.GROW_BIG_EFFECT
        , A = a.SHRINK_BIG_EFFECT
        , w = a.PLUGIN_LOTTIE_EFFECT
        , S = "appear"
        , R = "emphasis"
        , C = "plugin"
        , N = (r = {}, (0, i.default)(r, C, [{
            header: !0
            , label: "Integrations"
            , id: C
        }, {
            header: !1
            , id: w
            , label: "Lottie playback"
        }]), (0, i.default)(r, S, [{
            header: !0
            , label: "Appear & Disappear"
            , id: S
        }, {
            header: !1
            , id: u
            , label: "Fade"
        }, {
            header: !1
            , id: c
            , label: "Slide"
        }, {
            header: !1
            , id: v
            , label: "Flip"
        }, {
            header: !1
            , id: s
            , label: "Grow"
        }, {
            header: !1
            , id: b
            , label: "Grow big"
        }, {
            header: !1
            , id: l
            , label: "Shrink"
        }, {
            header: !1
            , id: A
            , label: "Shrink big"
        }, {
            header: !1
            , id: f
            , label: "Spin"
        }, {
            header: !1
            , id: d
            , label: "Fly"
        }, {
            header: !1
            , id: _
            , label: "Drop"
        }]), (0, i.default)(r, R, [{
            header: !0
            , label: "Emphasis"
            , id: R
        }, {
            header: !1
            , id: p
            , label: "Pop"
        }, {
            header: !1
            , id: h
            , label: "Jiggle"
        }, {
            header: !1
            , id: E
            , label: "Pulse"
        }, {
            header: !1
            , id: g
            , label: "Blink"
        }, {
            header: !1
            , id: I
            , label: "Bounce"
        }, {
            header: !1
            , id: m
            , label: "Flip left to right"
        }, {
            header: !1
            , id: y
            , label: "Flip right to left"
        }, {
            header: !1
            , id: T
            , label: "Rubber band"
        }, {
            header: !1
            , id: O
            , label: "Jello"
        }]), r);
    t.QuickEffectConsts = N;
    var L = Object.keys(N).reduce(function (e, t) {
        return N[t].forEach(function (t) {
            var n = t.label
                , r = t.header
                , i = t.id;
            r || (e[i] = n)
        }), e
    }, {});
    t.QuickEffectLabelMap = L
}, function (e, t, n) {
    "use strict";
    var r, i, o, a = n(0)
        , u = a(n(17))
        , c = a(n(6))
        , s = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.getInstanceId = function () {
        return "i" + G++
    }, t.getElementId = function (e, t) {
        for (var n in e) {
            var r = e[n];
            if (r && r.ref === t) return r.id
        }
        return "e" + k++
    }, t.reifyState = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , t = e.events
            , n = e.actionLists
            , r = e.site
            , i = (0, f.default)(t, function (e, t) {
                var n = t.eventTypeId;
                return e[n] || (e[n] = {}), e[n][t.id] = t, e
            }, {})
            , o = r && r.mediaQueries
            , a = [];
        o ? a = o.map(function (e) {
            return e.key
        }) : (o = [], console.warn("IX2 missing mediaQueries in site data"));
        return {
            ixData: {
                events: t
                , actionLists: n
                , eventTypeMap: i
                , mediaQueries: o
                , mediaQueryKeys: a
            }
        }
    }, t.observeStore = function (e) {
        var t = e.store
            , n = e.select
            , r = e.onChange
            , i = e.comparator
            , o = void 0 === i ? U : i
            , a = t.getState
            , u = (0, t.subscribe)(function () {
                var e = n(a());
                if (null == e) return void u();
                o(e, c) || r(c = e, t)
            })
            , c = n(a());
        return u
    }, t.getAffectedElements = X, t.getComputedStyle = function (e) {
        var t = e.element
            , n = e.actionItem;
        if (!m.IS_BROWSER_ENV) return {};
        switch (n.actionTypeId) {
        case R:
        case C:
        case N:
        case L:
        case x:
            return window.getComputedStyle(t);
        default:
            return {}
        }
    }, t.getInstanceOrigin = function (e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
            , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
            , r = arguments.length > 3 ? arguments[3] : void 0
            , i = (arguments.length > 4 ? arguments[4] : void 0).getStyle
            , o = r.actionTypeId
            , a = r.config;
        if ((0, g.isPluginType)(o)) return (0, g.getPluginOrigin)(o)(t[o]);
        switch (o) {
        case T:
        case O:
        case b:
        case A:
            return t[o] || K[o];
        case S:
            return W(t[o], r.config.filters);
        case w:
            return {
                value: (0, l.default)(parseFloat(i(e, I.OPACITY)), 1)
            };
        case R:
            var u, c, s = i(e, I.WIDTH)
                , f = i(e, I.HEIGHT);
            return u = a.widthUnit === I.AUTO ? B.test(s) ? parseFloat(s) : parseFloat(n.width) : (0, l.default)(parseFloat(s), parseFloat(n.width)), c = a.heightUnit === I.AUTO ? B.test(f) ? parseFloat(f) : parseFloat(n.height) : (0, l.default)(parseFloat(f), parseFloat(n.height)), {
                widthValue: u
                , heightValue: c
            };
        case C:
        case N:
        case L:
            return function (e) {
                var t = e.element
                    , n = e.actionTypeId
                    , r = e.computedStyle
                    , i = e.getStyle
                    , o = M[n]
                    , a = i(t, o)
                    , u = $.test(a) ? a : r[o]
                    , c = function (e, t) {
                        var n = e.exec(t);
                        return n ? n[1] : ""
                    }(Z, u).split(I.COMMA_DELIMITER);
                return {
                    rValue: (0, l.default)(parseInt(c[0], 10), 255)
                    , gValue: (0, l.default)(parseInt(c[1], 10), 255)
                    , bValue: (0, l.default)(parseInt(c[2], 10), 255)
                    , aValue: (0, l.default)(parseFloat(c[3]), 1)
                }
            }({
                element: e
                , actionTypeId: o
                , computedStyle: n
                , getStyle: i
            });
        case x:
            return {
                value: (0, l.default)(i(e, I.DISPLAY), n.display)
            };
        case D:
            return t[o] || {
                value: 0
            };
        default:
            return
        }
    }, t.getDestinationValues = function (e) {
        var t = e.element
            , n = e.actionItem
            , r = e.elementApi
            , i = n.actionTypeId;
        if ((0, g.isPluginType)(i)) return (0, g.getPluginDestination)(i)(n.config);
        switch (i) {
        case T:
        case O:
        case b:
        case A:
            var o = n.config
                , a = o.xValue
                , u = o.yValue
                , c = o.zValue;
            return {
                xValue: a
                , yValue: u
                , zValue: c
            };
        case R:
            var s = r.getStyle
                , l = r.setStyle
                , f = r.getProperty
                , d = n.config
                , p = d.widthUnit
                , v = d.heightUnit
                , h = n.config
                , E = h.widthValue
                , _ = h.heightValue;
            if (!m.IS_BROWSER_ENV) return {
                widthValue: E
                , heightValue: _
            };
            if (p === I.AUTO) {
                var y = s(t, I.WIDTH);
                l(t, I.WIDTH, ""), E = f(t, "offsetWidth"), l(t, I.WIDTH, y)
            }
            if (v === I.AUTO) {
                var w = s(t, I.HEIGHT);
                l(t, I.HEIGHT, ""), _ = f(t, "offsetHeight"), l(t, I.HEIGHT, w)
            }
            return {
                widthValue: E
                , heightValue: _
            };
        case C:
        case N:
        case L:
            var x = n.config
                , D = x.rValue
                , P = x.gValue
                , M = x.bValue
                , F = x.aValue;
            return {
                rValue: D
                , gValue: P
                , bValue: M
                , aValue: F
            };
        case S:
            return n.config.filters.reduce(H, {});
        default:
            var j = n.config.value;
            return {
                value: j
            }
        }
    }, t.getRenderType = z, t.getStyleProp = function (e, t) {
        return e === I.RENDER_STYLE ? t.replace("STYLE_", "").toLowerCase() : null
    }, t.renderHTMLElement = function (e, t, n, r, i, o, a, u, c) {
        switch (u) {
        case I.RENDER_TRANSFORM:
            return function (e, t, n, r, i) {
                var o = q.map(function (e) {
                        var n = K[e]
                            , r = t[e] || {}
                            , i = r.xValue
                            , o = void 0 === i ? n.xValue : i
                            , a = r.yValue
                            , u = void 0 === a ? n.yValue : a
                            , c = r.zValue
                            , s = void 0 === c ? n.zValue : c
                            , l = r.xUnit
                            , f = void 0 === l ? "" : l
                            , d = r.yUnit
                            , p = void 0 === d ? "" : d
                            , v = r.zUnit
                            , h = void 0 === v ? "" : v;
                        switch (e) {
                        case T:
                            return "".concat(I.TRANSLATE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                        case O:
                            return "".concat(I.SCALE_3D, "(").concat(o).concat(f, ", ").concat(u).concat(p, ", ").concat(s).concat(h, ")");
                        case b:
                            return "".concat(I.ROTATE_X, "(").concat(o).concat(f, ") ").concat(I.ROTATE_Y, "(").concat(u).concat(p, ") ").concat(I.ROTATE_Z, "(").concat(s).concat(h, ")");
                        case A:
                            return "".concat(I.SKEW, "(").concat(o).concat(f, ", ").concat(u).concat(p, ")");
                        default:
                            return ""
                        }
                    }).join(" ")
                    , a = i.setStyle;
                J(e, m.TRANSFORM_PREFIXED, i), a(e, m.TRANSFORM_PREFIXED, o), u = r, c = n, s = u.actionTypeId, l = c.xValue, f = c.yValue, d = c.zValue, (s === T && void 0 !== d || s === O && void 0 !== d || s === b && (void 0 !== l || void 0 !== f)) && a(e, m.TRANSFORM_STYLE_PREFIXED, I.PRESERVE_3D);
                var u, c, s, l, f, d
            }(e, t, n, i, a);
        case I.RENDER_STYLE:
            return function (e, t, n, r, i, o) {
                var a = o.setStyle
                    , u = r.actionTypeId
                    , c = r.config;
                switch (u) {
                case R:
                    var s = r.config
                        , l = s.widthUnit
                        , d = void 0 === l ? "" : l
                        , p = s.heightUnit
                        , v = void 0 === p ? "" : p
                        , h = n.widthValue
                        , E = n.heightValue;
                    void 0 !== h && (d === I.AUTO && (d = "px"), J(e, I.WIDTH, o), a(e, I.WIDTH, h + d)), void 0 !== E && (v === I.AUTO && (v = "px"), J(e, I.HEIGHT, o), a(e, I.HEIGHT, E + v));
                    break;
                case S:
                    ! function (e, t, n, r) {
                        var i = (0, f.default)(t, function (e, t, r) {
                                return "".concat(e, " ").concat(r, "(").concat(t).concat(Q(r, n), ")")
                            }, "")
                            , o = r.setStyle;
                        J(e, I.FILTER, r), o(e, I.FILTER, i)
                    }(e, n, c, o);
                    break;
                case C:
                case N:
                case L:
                    var _ = M[u]
                        , g = Math.round(n.rValue)
                        , m = Math.round(n.gValue)
                        , y = Math.round(n.bValue)
                        , T = n.aValue;
                    J(e, _, o), a(e, _, T >= 1 ? "rgb(".concat(g, ",").concat(m, ",").concat(y, ")") : "rgba(".concat(g, ",").concat(m, ",").concat(y, ",").concat(T, ")"));
                    break;
                default:
                    var O = c.unit
                        , b = void 0 === O ? "" : O;
                    J(e, i, o), a(e, i, n.value + b)
                }
            }(e, 0, n, i, o, a);
        case I.RENDER_GENERAL:
            return function (e, t, n) {
                var r = n.setStyle;
                switch (t.actionTypeId) {
                case x:
                    var i = t.config.value;
                    return void(i === I.FLEX && m.IS_BROWSER_ENV ? r(e, I.DISPLAY, m.FLEX_PREFIXED) : r(e, I.DISPLAY, i))
                }
            }(e, i, a);
        case I.RENDER_PLUGIN:
            var s = i.actionTypeId;
            if ((0, g.isPluginType)(s)) return (0, g.renderPlugin)(s)(c, t, i)
        }
    }, t.clearAllStyles = function (e) {
        var t = e.store
            , n = e.elementApi
            , r = t.getState().ixData
            , i = r.events
            , o = void 0 === i ? {} : i
            , a = r.actionLists
            , u = void 0 === a ? {} : a;
        Object.keys(o).forEach(function (e) {
            var t = o[e]
                , r = t.action.config
                , i = r.actionListId
                , a = u[i];
            a && te({
                actionList: a
                , event: t
                , elementApi: n
            })
        }), Object.keys(u).forEach(function (e) {
            te({
                actionList: u[e]
                , elementApi: n
            })
        })
    }, t.cleanupHTMLElement = function (e, t, n) {
        var r = n.setStyle
            , i = n.getStyle
            , o = t.actionTypeId;
        if (o === R) {
            var a = t.config;
            a.widthUnit === I.AUTO && r(e, I.WIDTH, ""), a.heightUnit === I.AUTO && r(e, I.HEIGHT, "")
        }
        i(e, I.WILL_CHANGE) && re({
            effect: ee
            , actionTypeId: o
            , elementApi: n
        })(e)
    }, t.getMaxDurationItemIndex = oe, t.getActionListProgress = function (e, t) {
        var n = e.actionItemGroups
            , r = e.useFirstGroupAsInitialState
            , i = t.actionItem
            , o = t.verboseTimeElapsed
            , a = void 0 === o ? 0 : o
            , u = 0
            , c = 0;
        return n.forEach(function (e, t) {
            if (!r || 0 !== t) {
                var n = e.actionItems
                    , o = n[oe(n)]
                    , s = o.config
                    , l = o.actionTypeId;
                i.id === o.id && (c = u + a);
                var f = z(l) === I.RENDER_GENERAL ? 0 : s.duration;
                u += s.delay + f
            }
        }), u > 0 ? (0, _.optimizeFloat)(c / u) : 0
    }, t.reduceListToGroup = function (e) {
        var t = e.actionList
            , n = e.actionItemId
            , r = e.rawData
            , i = t.actionItemGroups
            , o = t.continuousParameterGroups
            , a = []
            , u = function (e) {
                return a.push((0, v.mergeIn)(e, ["config"], {
                    delay: 0
                    , duration: 0
                })), e.id === n
            };
        return i && i.some(function (e) {
            return e.actionItems.some(u)
        }), o && o.some(function (e) {
            return e.continuousActionGroups.some(function (e) {
                return e.actionItems.some(u)
            })
        }), (0, v.setIn)(r, ["actionLists"], (0, c.default)({}, t.id, {
            id: t.id
            , actionItemGroups: [{
                actionItems: a
            }]
        }))
    }, t.shouldNamespaceEventParameter = function (e, t) {
        var n = t.basedOn;
        return e === E.EventTypeConsts.SCROLLING_IN_VIEW && (n === E.EventBasedOn.ELEMENT || null == n) || e === E.EventTypeConsts.MOUSE_MOVE && n === E.EventBasedOn.ELEMENT
    }, t.getNamespacedParameterId = function (e, t) {
        return e + I.COLON_DELIMITER + t
    }, t.shouldAllowMediaQuery = function (e, t) {
        if (null == t) return !0;
        return -1 !== e.indexOf(t)
    }, t.mediaQueriesEqual = function (e, t) {
        return (0, h.default)(e && e.sort(), t && t.sort())
    }, t.stringifyTarget = function (e) {
        if ("string" == typeof e) return e;
        var t = e.id
            , n = void 0 === t ? "" : t
            , r = e.selector
            , i = void 0 === r ? "" : r
            , o = e.useEventTarget
            , a = void 0 === o ? "" : o;
        return n + I.BAR_DELIMITER + i + I.BAR_DELIMITER + a
    }, t.getItemConfigByKey = void 0;
    var l = s(n(200))
        , f = s(n(201))
        , d = s(n(207))
        , p = s(n(25))
        , v = n(15)
        , h = s(n(95))
        , E = n(16)
        , _ = n(87)
        , g = n(90)
        , I = n(49)
        , m = n(32)
        , y = E.ActionTypeConsts
        , T = y.TRANSFORM_MOVE
        , O = y.TRANSFORM_SCALE
        , b = y.TRANSFORM_ROTATE
        , A = y.TRANSFORM_SKEW
        , w = y.STYLE_OPACITY
        , S = y.STYLE_FILTER
        , R = y.STYLE_SIZE
        , C = y.STYLE_BACKGROUND_COLOR
        , N = y.STYLE_BORDER
        , L = y.STYLE_TEXT_COLOR
        , x = y.GENERAL_DISPLAY
        , D = "OBJECT_VALUE"
        , P = function (e) {
            return e.trim()
        }
        , M = Object.freeze((r = {}, (0, c.default)(r, C, I.BACKGROUND_COLOR), (0, c.default)(r, N, I.BORDER_COLOR), (0, c.default)(r, L, I.COLOR), r))
        , F = Object.freeze((i = {}, (0, c.default)(i, m.TRANSFORM_PREFIXED, I.TRANSFORM), (0, c.default)(i, I.BACKGROUND_COLOR, I.BACKGROUND), (0, c.default)(i, I.OPACITY, I.OPACITY), (0, c.default)(i, I.FILTER, I.FILTER), (0, c.default)(i, I.WIDTH, I.WIDTH), (0, c.default)(i, I.HEIGHT, I.HEIGHT), i))
        , j = {}
        , G = 1;
    var k = 1;
    var U = function (e, t) {
        return e === t
    };

    function V(e) {
        var t = (0, u.default)(e);
        return "string" === t ? {
            id: e
        } : null != e && "object" === t ? {
            id: e.id
            , objectId: e.objectId
            , selector: e.selector
            , selectorGuids: e.selectorGuids
            , appliesTo: e.appliesTo
            , useEventTarget: e.useEventTarget
        } : {}
    }

    function X(e) {
        var t = e.config
            , n = e.event
            , r = e.eventTarget
            , i = e.elementRoot
            , o = e.elementApi;
        if (!o) throw new Error("IX2 missing elementApi");
        var a = o.getValidDocument
            , u = o.getQuerySelector
            , c = o.queryDocument
            , s = o.getChildElements
            , l = o.getSiblingElements
            , f = o.matchSelector
            , d = o.elementContains
            , v = o.isSiblingNode
            , h = t.target;
        if (!h) return [];
        var _ = V(h)
            , g = _.id
            , y = _.objectId
            , T = _.selector
            , O = _.selectorGuids
            , b = _.appliesTo
            , A = _.useEventTarget;
        if (y) return [j[y] || (j[y] = {})];
        if (b === E.EventAppliesTo.PAGE) {
            var w = a(g);
            return w ? [w] : []
        }
        var S, R, C, N = (0, p.default)(n, "action.config.affectedElements", {})[g || T] || {}
            , L = Boolean(N.id || N.selector)
            , x = n && u(V(n.target));
        if (L ? (S = N.limitAffectedElements, R = x, C = u(N)) : R = C = u({
                id: g
                , selector: T
                , selectorGuids: O
            }), n && A) {
            var D = r && (C || !0 === A) ? [r] : c(x);
            if (C) {
                if (A === I.PARENT) return c(C).filter(function (e) {
                    return D.some(function (t) {
                        return d(e, t)
                    })
                });
                if (A === I.CHILDREN) return c(C).filter(function (e) {
                    return D.some(function (t) {
                        return d(t, e)
                    })
                });
                if (A === I.SIBLINGS) return c(C).filter(function (e) {
                    return D.some(function (t) {
                        return v(t, e)
                    })
                })
            }
            return D
        }
        return null == R || null == C ? [] : m.IS_BROWSER_ENV && i ? c(C).filter(function (e) {
            return i.contains(e)
        }) : S === I.CHILDREN ? c(R, C) : S === I.IMMEDIATE_CHILDREN ? s(c(R)).filter(f(C)) : S === I.SIBLINGS ? l(c(R)).filter(f(C)) : c(C)
    }
    var B = /px/
        , W = function (e, t) {
            return t.reduce(function (e, t) {
                return null == e[t.type] && (e[t.type] = Y[t.type]), e
            }, e || {})
        };
    var H = function (e, t) {
        return t && (e[t.type] = t.value || 0), e
    };

    function z(e) {
        return /^TRANSFORM_/.test(e) ? I.RENDER_TRANSFORM : /^STYLE_/.test(e) ? I.RENDER_STYLE : /^GENERAL_/.test(e) ? I.RENDER_GENERAL : /^PLUGIN_/.test(e) ? I.RENDER_PLUGIN : void 0
    }
    t.getItemConfigByKey = function (e, t, n) {
        if ((0, g.isPluginType)(e)) return (0, g.getPluginConfig)(e)(n, t);
        switch (e) {
        case S:
            var r = (0, d.default)(n.filters, function (e) {
                return e.type === t
            });
            return r ? r.value : 0;
        default:
            return n[t]
        }
    };
    var K = (o = {}, (0, c.default)(o, T, Object.freeze({
            xValue: 0
            , yValue: 0
            , zValue: 0
        })), (0, c.default)(o, O, Object.freeze({
            xValue: 1
            , yValue: 1
            , zValue: 1
        })), (0, c.default)(o, b, Object.freeze({
            xValue: 0
            , yValue: 0
            , zValue: 0
        })), (0, c.default)(o, A, Object.freeze({
            xValue: 0
            , yValue: 0
        })), o)
        , Y = Object.freeze({
            blur: 0
            , "hue-rotate": 0
            , invert: 0
            , grayscale: 0
            , saturate: 100
            , sepia: 0
            , contrast: 100
            , brightness: 100
        })
        , Q = function (e, t) {
            var n = (0, d.default)(t.filters, function (t) {
                return t.type === e
            });
            if (n && n.unit) return n.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        , q = Object.keys(K);
    var $ = /^rgb/
        , Z = RegExp("rgba?".concat("\\(([^)]+)\\)"));

    function J(e, t, n) {
        if (m.IS_BROWSER_ENV) {
            var r = F[t];
            if (r) {
                var i = n.getStyle
                    , o = n.setStyle
                    , a = i(e, I.WILL_CHANGE);
                if (a) {
                    var u = a.split(I.COMMA_DELIMITER).map(P); - 1 === u.indexOf(r) && o(e, I.WILL_CHANGE, u.concat(r).join(I.COMMA_DELIMITER))
                } else o(e, I.WILL_CHANGE, r)
            }
        }
    }

    function ee(e, t, n) {
        if (m.IS_BROWSER_ENV) {
            var r = F[t];
            if (r) {
                var i = n.getStyle
                    , o = n.setStyle
                    , a = i(e, I.WILL_CHANGE);
                a && -1 !== a.indexOf(r) && o(e, I.WILL_CHANGE, a.split(I.COMMA_DELIMITER).map(P).filter(function (e) {
                    return e !== r
                }).join(I.COMMA_DELIMITER))
            }
        }
    }

    function te(e) {
        var t = e.actionList
            , n = void 0 === t ? {} : t
            , r = e.event
            , i = e.elementApi
            , o = n.actionItemGroups
            , a = n.continuousParameterGroups;
        o && o.forEach(function (e) {
            ne({
                actionGroup: e
                , event: r
                , elementApi: i
            })
        }), a && a.forEach(function (e) {
            e.continuousActionGroups.forEach(function (e) {
                ne({
                    actionGroup: e
                    , event: r
                    , elementApi: i
                })
            })
        })
    }

    function ne(e) {
        var t = e.actionGroup
            , n = e.event
            , r = e.elementApi;
        t.actionItems.forEach(function (e) {
            var t, i = e.actionTypeId
                , o = e.config;
            t = (0, g.isPluginType)(i) ? (0, g.clearPlugin)(i) : re({
                effect: ie
                , actionTypeId: i
                , elementApi: r
            }), X({
                config: o
                , event: n
                , elementApi: r
            }).forEach(t)
        })
    }
    var re = function (e) {
        var t = e.effect
            , n = e.actionTypeId
            , r = e.elementApi;
        return function (e) {
            switch (n) {
            case T:
            case O:
            case b:
            case A:
                t(e, m.TRANSFORM_PREFIXED, r);
                break;
            case S:
                t(e, I.FILTER, r);
                break;
            case w:
                t(e, I.OPACITY, r);
                break;
            case R:
                t(e, I.WIDTH, r), t(e, I.HEIGHT, r);
                break;
            case C:
            case N:
            case L:
                t(e, M[n], r);
                break;
            case x:
                t(e, I.DISPLAY, r)
            }
        }
    };

    function ie(e, t, n) {
        var r = n.setStyle;
        ee(e, t, n), r(e, t, ""), t === m.TRANSFORM_PREFIXED && r(e, m.TRANSFORM_STYLE_PREFIXED, "")
    }

    function oe(e) {
        var t = 0
            , n = 0;
        return e.forEach(function (e, r) {
            var i = e.config
                , o = i.delay + i.duration;
            o >= t && (t = o, n = r)
        }), n
    }
}, function (e, t) {
    e.exports = function (e, t) {
        return null == e || e != e ? t : e
    }
}, function (e, t, n) {
    var r = n(202)
        , i = n(93)
        , o = n(7)
        , a = n(206)
        , u = n(1);
    e.exports = function (e, t, n) {
        var c = u(e) ? r : a
            , s = arguments.length < 3;
        return c(e, o(t, 4), n, s, i)
    }
}, function (e, t) {
    e.exports = function (e, t, n, r) {
        var i = -1
            , o = null == e ? 0 : e.length;
        for (r && o && (n = e[++i]); ++i < o;) n = t(n, e[i], i, e);
        return n
    }
}, function (e, t, n) {
    var r = n(204)();
    e.exports = r
}, function (e, t) {
    e.exports = function (e) {
        return function (t, n, r) {
            for (var i = -1, o = Object(t), a = r(t), u = a.length; u--;) {
                var c = a[e ? u : ++i];
                if (!1 === n(o[c], c, o)) break
            }
            return t
        }
    }
}, function (e, t, n) {
    var r = n(11);
    e.exports = function (e, t) {
        return function (n, i) {
            if (null == n) return n;
            if (!r(n)) return e(n, i);
            for (var o = n.length, a = t ? o : -1, u = Object(n);
                (t ? a-- : ++a < o) && !1 !== i(u[a], a, u););
            return n
        }
    }
}, function (e, t) {
    e.exports = function (e, t, n, r, i) {
        return i(e, function (e, i, o) {
            n = r ? (r = !1, e) : t(n, e, i, o)
        }), n
    }
}, function (e, t, n) {
    var r = n(64)(n(208));
    e.exports = r
}, function (e, t, n) {
    var r = n(84)
        , i = n(7)
        , o = n(47)
        , a = Math.max
        , u = Math.min;
    e.exports = function (e, t, n) {
        var c = null == e ? 0 : e.length;
        if (!c) return -1;
        var s = c - 1;
        return void 0 !== n && (s = o(n), s = n < 0 ? a(c + s, 0) : u(s, c - 1)), r(e, i(t, 3), s, !0)
    }
}, function (e, t) {
    e.exports = function (e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
}, function (e, t, n) {
    "use strict";
    var r = Object.prototype.hasOwnProperty;

    function i(e, t) {
        return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
    }
    e.exports = function (e, t) {
        if (i(e, t)) return !0;
        if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
        var n = Object.keys(e)
            , o = Object.keys(t);
        if (n.length !== o.length) return !1;
        for (var a = 0; a < n.length; a++)
            if (!r.call(t, n[a]) || !i(e[n[a]], t[n[a]])) return !1;
        return !0
    }
}, function (e, t, n) {
    "use strict";
    var r, i = n(0)(n(6))
        , o = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ixRequest = void 0;
    var a = o(n(12))
        , u = n(2)
        , c = n(15)
        , s = u.IX2EngineActionTypes
        , l = s.IX2_PREVIEW_REQUESTED
        , f = s.IX2_PLAYBACK_REQUESTED
        , d = s.IX2_STOP_REQUESTED
        , p = s.IX2_CLEAR_REQUESTED
        , v = {
            preview: {}
            , playback: {}
            , stop: {}
            , clear: {}
        }
        , h = Object.create(null, (r = {}, (0, i.default)(r, l, {
            value: "preview"
        }), (0, i.default)(r, f, {
            value: "playback"
        }), (0, i.default)(r, d, {
            value: "stop"
        }), (0, i.default)(r, p, {
            value: "clear"
        }), r));
    t.ixRequest = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : v
            , t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type in h) {
            var n = [h[t.type]];
            return (0, c.setIn)(e, [n], (0, a.default)({}, t.payload))
        }
        return e
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ixSession = void 0;
    var r = n(2)
        , i = n(15)
        , o = r.IX2EngineActionTypes
        , a = o.IX2_SESSION_INITIALIZED
        , u = o.IX2_SESSION_STARTED
        , c = o.IX2_TEST_FRAME_RENDERED
        , s = o.IX2_SESSION_STOPPED
        , l = o.IX2_EVENT_LISTENER_ADDED
        , f = o.IX2_EVENT_STATE_CHANGED
        , d = o.IX2_ANIMATION_FRAME_CHANGED
        , p = o.IX2_ACTION_LIST_PLAYBACK_CHANGED
        , v = o.IX2_VIEWPORT_WIDTH_CHANGED
        , h = o.IX2_MEDIA_QUERIES_DEFINED
        , E = {
            active: !1
            , tick: 0
            , eventListeners: []
            , eventState: {}
            , playbackState: {}
            , viewportWidth: 0
            , mediaQueryKey: null
            , hasBoundaryNodes: !1
            , hasDefinedMediaQueries: !1
        };
    t.ixSession = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E
            , t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
        case a:
            var n = t.payload.hasBoundaryNodes;
            return (0, i.set)(e, "hasBoundaryNodes", n);
        case u:
            return (0, i.set)(e, "active", !0);
        case c:
            var r = t.payload.step
                , o = void 0 === r ? 20 : r;
            return (0, i.set)(e, "tick", e.tick + o);
        case s:
            return E;
        case d:
            var _ = t.payload.now;
            return (0, i.set)(e, "tick", _);
        case l:
            var g = (0, i.addLast)(e.eventListeners, t.payload);
            return (0, i.set)(e, "eventListeners", g);
        case f:
            var I = t.payload
                , m = I.stateKey
                , y = I.newState;
            return (0, i.setIn)(e, ["eventState", m], y);
        case p:
            var T = t.payload
                , O = T.actionListId
                , b = T.isPlaying;
            return (0, i.setIn)(e, ["playbackState", O], b);
        case v:
            for (var A = t.payload, w = A.width, S = A.mediaQueries, R = S.length, C = null, N = 0; N < R; N++) {
                var L = S[N]
                    , x = L.key
                    , D = L.min
                    , P = L.max;
                if (w >= D && w <= P) {
                    C = x;
                    break
                }
            }
            return (0, i.merge)(e, {
                viewportWidth: w
                , mediaQueryKey: C
            });
        case h:
            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
        default:
            return e
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ixInstances = void 0;
    var r = n(2)
        , i = n(15)
        , o = r.IX2EngineActionTypes
        , a = o.IX2_RAW_DATA_IMPORTED
        , u = o.IX2_SESSION_STOPPED
        , c = o.IX2_INSTANCE_ADDED
        , s = o.IX2_INSTANCE_STARTED
        , l = o.IX2_INSTANCE_REMOVED
        , f = o.IX2_ANIMATION_FRAME_CHANGED
        , d = r.IX2EasingUtils
        , p = d.optimizeFloat
        , v = d.applyEasing
        , h = d.createBezierEasing
        , E = r.IX2EngineConstants.RENDER_GENERAL
        , _ = r.IX2VanillaUtils
        , g = _.getItemConfigByKey
        , I = _.getRenderType
        , m = _.getStyleProp
        , y = function (e, t) {
            var n = e.position
                , r = e.parameterId
                , o = e.actionGroups
                , a = e.destinationKeys
                , u = e.smoothing
                , c = e.restingValue
                , s = e.actionTypeId
                , l = e.customEasingFn
                , f = t.payload.parameters
                , d = Math.max(1 - u, .01)
                , h = f[r];
            null == h && (d = 1, h = c);
            var E, _, I, m, y = Math.max(h, 0) || 0
                , T = p(y - n)
                , O = p(n + T * d)
                , b = 100 * O;
            if (O === n && e.current) return e;
            for (var A = 0, w = o.length; A < w; A++) {
                var S = o[A]
                    , R = S.keyframe
                    , C = S.actionItems;
                if (0 === A && (E = C[0]), b >= R) {
                    E = C[0];
                    var N = o[A + 1]
                        , L = N && b !== R;
                    _ = L ? N.actionItems[0] : null, L && (I = R / 100, m = (N.keyframe - R) / 100)
                }
            }
            var x = {};
            if (E && !_)
                for (var D = 0, P = a.length; D < P; D++) {
                    var M = a[D];
                    x[M] = g(s, M, E.config)
                } else if (E && _ && void 0 !== I && void 0 !== m)
                    for (var F = (O - I) / m, j = E.config.easing, G = v(j, F, l), k = 0, U = a.length; k < U; k++) {
                        var V = a[k]
                            , X = g(s, V, E.config)
                            , B = (g(s, V, _.config) - X) * G + X;
                        x[V] = B
                    }
            return (0, i.merge)(e, {
                position: O
                , current: x
            })
        }
        , T = function (e, t) {
            var n = e
                , r = n.active
                , o = n.origin
                , a = n.start
                , u = n.immediate
                , c = n.renderType
                , s = n.verbose
                , l = n.actionItem
                , f = n.destination
                , d = n.destinationKeys
                , h = n.pluginDuration
                , _ = n.instanceDelay
                , g = n.customEasingFn
                , I = l.config.easing
                , m = l.config
                , y = m.duration
                , T = m.delay;
            null != h && (y = h), T = null != _ ? _ : T, c === E ? y = 0 : u && (y = T = 0);
            var O = t.payload.now;
            if (r && o) {
                var b = O - (a + T);
                if (s) {
                    var A = O - a
                        , w = y + T
                        , S = p(Math.min(Math.max(0, A / w), 1));
                    e = (0, i.set)(e, "verboseTimeElapsed", w * S)
                }
                if (b < 0) return e;
                var R = p(Math.min(Math.max(0, b / y), 1))
                    , C = v(I, R, g)
                    , N = {}
                    , L = null;
                return d.length && (L = d.reduce(function (e, t) {
                    var n = f[t]
                        , r = parseFloat(o[t]) || 0
                        , i = (parseFloat(n) - r) * C + r;
                    return e[t] = i, e
                }, {})), N.current = L, N.position = R, 1 === R && (N.active = !1, N.complete = !0), (0, i.merge)(e, N)
            }
            return e
        };
    t.ixInstances = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Object.freeze({})
            , t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
        case a:
            return t.payload.ixInstances || Object.freeze({});
        case u:
            return Object.freeze({});
        case c:
            var n = t.payload
                , r = n.instanceId
                , o = n.elementId
                , d = n.actionItem
                , p = n.eventId
                , v = n.eventTarget
                , E = n.eventStateKey
                , _ = n.actionListId
                , g = n.groupIndex
                , O = n.isCarrier
                , b = n.origin
                , A = n.destination
                , w = n.immediate
                , S = n.verbose
                , R = n.continuous
                , C = n.parameterId
                , N = n.actionGroups
                , L = n.smoothing
                , x = n.restingValue
                , D = n.pluginInstance
                , P = n.pluginDuration
                , M = n.instanceDelay
                , F = d.actionTypeId
                , j = I(F)
                , G = m(j, F)
                , k = Object.keys(A).filter(function (e) {
                    return null != A[e]
                })
                , U = d.config.easing;
            return (0, i.set)(e, r, {
                id: r
                , elementId: o
                , active: !1
                , position: 0
                , start: 0
                , origin: b
                , destination: A
                , destinationKeys: k
                , immediate: w
                , verbose: S
                , current: null
                , actionItem: d
                , actionTypeId: F
                , eventId: p
                , eventTarget: v
                , eventStateKey: E
                , actionListId: _
                , groupIndex: g
                , renderType: j
                , isCarrier: O
                , styleProp: G
                , continuous: R
                , parameterId: C
                , actionGroups: N
                , smoothing: L
                , restingValue: x
                , pluginInstance: D
                , pluginDuration: P
                , instanceDelay: M
                , customEasingFn: Array.isArray(U) && 4 === U.length ? h(U) : void 0
            });
        case s:
            var V = t.payload
                , X = V.instanceId
                , B = V.time;
            return (0, i.mergeIn)(e, [X], {
                active: !0
                , complete: !1
                , start: B
            });
        case l:
            var W = t.payload.instanceId;
            if (!e[W]) return e;
            for (var H = {}, z = Object.keys(e), K = z.length, Y = 0; Y < K; Y++) {
                var Q = z[Y];
                Q !== W && (H[Q] = e[Q])
            }
            return H;
        case f:
            for (var q = e, $ = Object.keys(e), Z = $.length, J = 0; J < Z; J++) {
                var ee = $[J]
                    , te = e[ee]
                    , ne = te.continuous ? y : T;
                q = (0, i.set)(q, ee, ne(te, t))
            }
            return q;
        default:
            return e
        }
    }
}, function (e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.ixParameters = void 0;
    var r = n(2).IX2EngineActionTypes
        , i = r.IX2_RAW_DATA_IMPORTED
        , o = r.IX2_SESSION_STOPPED
        , a = r.IX2_PARAMETER_CHANGED;
    t.ixParameters = function () {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
            , t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
        case i:
            return t.payload.ixParameters || {};
        case o:
            return {};
        case a:
            var n = t.payload
                , r = n.key
                , u = n.value;
            return e[r] = u, e;
        default:
            return e
        }
    }
}, function (e, t) {
    e.exports = function (e, t) {
        if (null == e) return {};
        var n, r, i = {}
            , o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
    }
}, function (e, t, n) {
    var r = n(41)
        , i = n(43)
        , o = n(11)
        , a = n(217)
        , u = n(218)
        , c = "[object Map]"
        , s = "[object Set]";
    e.exports = function (e) {
        if (null == e) return 0;
        if (o(e)) return a(e) ? u(e) : e.length;
        var t = i(e);
        return t == c || t == s ? e.size : r(e).length
    }
}, function (e, t, n) {
    var r = n(10)
        , i = n(1)
        , o = n(9)
        , a = "[object String]";
    e.exports = function (e) {
        return "string" == typeof e || !i(e) && o(e) && r(e) == a
    }
}, function (e, t, n) {
    var r = n(219)
        , i = n(220)
        , o = n(221);
    e.exports = function (e) {
        return i(e) ? o(e) : r(e)
    }
}, function (e, t, n) {
    var r = n(83)("length");
    e.exports = r
}, function (e, t) {
    var n = RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
    e.exports = function (e) {
        return n.test(e)
    }
}, function (e, t) {
    var n = "[\\ud800-\\udfff]"
        , r = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]"
        , i = "\\ud83c[\\udffb-\\udfff]"
        , o = "[^\\ud800-\\udfff]"
        , a = "(?:\\ud83c[\\udde6-\\uddff]){2}"
        , u = "[\\ud800-\\udbff][\\udc00-\\udfff]"
        , c = "(?:" + r + "|" + i + ")" + "?"
        , s = "[\\ufe0e\\ufe0f]?" + c + ("(?:\\u200d(?:" + [o, a, u].join("|") + ")[\\ufe0e\\ufe0f]?" + c + ")*")
        , l = "(?:" + [o + r + "?", r, a, u, n].join("|") + ")"
        , f = RegExp(i + "(?=" + i + ")|" + l + s, "g");
    e.exports = function (e) {
        for (var t = f.lastIndex = 0; f.test(e);) ++t;
        return t
    }
}, function (e, t, n) {
    var r = n(7)
        , i = n(223)
        , o = n(224);
    e.exports = function (e, t) {
        return o(e, i(r(t)))
    }
}, function (e, t) {
    var n = "Expected a function";
    e.exports = function (e) {
        if ("function" != typeof e) throw new TypeError(n);
        return function () {
            var t = arguments;
            switch (t.length) {
            case 0:
                return !e.call(this);
            case 1:
                return !e.call(this, t[0]);
            case 2:
                return !e.call(this, t[0], t[1]);
            case 3:
                return !e.call(this, t[0], t[1], t[2])
            }
            return !e.apply(this, t)
        }
    }
}, function (e, t, n) {
    var r = n(82)
        , i = n(7)
        , o = n(225)
        , a = n(228);
    e.exports = function (e, t) {
        if (null == e) return {};
        var n = r(a(e), function (e) {
            return [e]
        });
        return t = i(t), o(e, n, function (e, n) {
            return t(e, n[0])
        })
    }
}, function (e, t, n) {
    var r = n(44)
        , i = n(226)
        , o = n(26);
    e.exports = function (e, t, n) {
        for (var a = -1, u = t.length, c = {}; ++a < u;) {
            var s = t[a]
                , l = r(e, s);
            n(l, s) && i(c, o(s, e), l)
        }
        return c
    }
}, function (e, t, n) {
    var r = n(227)
        , i = n(26)
        , o = n(38)
        , a = n(4)
        , u = n(14);
    e.exports = function (e, t, n, c) {
        if (!a(e)) return e;
        for (var s = -1, l = (t = i(t, e)).length, f = l - 1, d = e; null != d && ++s < l;) {
            var p = u(t[s])
                , v = n;
            if (s != f) {
                var h = d[p];
                void 0 === (v = c ? c(h, p, d) : void 0) && (v = a(h) ? h : o(t[s + 1]) ? [] : {})
            }
            r(d, p, v), d = d[p]
        }
        return e
    }
}, function (e, t, n) {
    var r = n(97)
        , i = n(33)
        , o = Object.prototype.hasOwnProperty;
    e.exports = function (e, t, n) {
        var a = e[t];
        o.call(e, t) && i(a, n) && (void 0 !== n || t in e) || r(e, t, n)
    }
}, function (e, t, n) {
    var r = n(71)
        , i = n(229)
        , o = n(231);
    e.exports = function (e) {
        return r(e, o, i)
    }
}, function (e, t, n) {
    var r = n(36)
        , i = n(230)
        , o = n(72)
        , a = n(73)
        , u = Object.getOwnPropertySymbols ? function (e) {
            for (var t = []; e;) r(t, o(e)), e = i(e);
            return t
        } : a;
    e.exports = u
}, function (e, t, n) {
    var r = n(76)(Object.getPrototypeOf, Object);
    e.exports = r
}, function (e, t, n) {
    var r = n(74)
        , i = n(232)
        , o = n(11);
    e.exports = function (e) {
        return o(e) ? r(e, !0) : i(e)
    }
}, function (e, t, n) {
    var r = n(4)
        , i = n(42)
        , o = n(233)
        , a = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        if (!r(e)) return o(e);
        var t = i(e)
            , n = [];
        for (var u in e)("constructor" != u || !t && a.call(e, u)) && n.push(u);
        return n
    }
}, function (e, t) {
    e.exports = function (e) {
        var t = [];
        if (null != e)
            for (var n in Object(e)) t.push(n);
        return t
    }
}, function (e, t, n) {
    var r = n(41)
        , i = n(43)
        , o = n(24)
        , a = n(1)
        , u = n(11)
        , c = n(37)
        , s = n(42)
        , l = n(39)
        , f = "[object Map]"
        , d = "[object Set]"
        , p = Object.prototype.hasOwnProperty;
    e.exports = function (e) {
        if (null == e) return !0;
        if (u(e) && (a(e) || "string" == typeof e || "function" == typeof e.splice || c(e) || l(e) || o(e))) return !e.length;
        var t = i(e);
        if (t == f || t == d) return !e.size;
        if (s(e)) return !r(e).length;
        for (var n in e)
            if (p.call(e, n)) return !1;
        return !0
    }
}, function (e, t, n) {
    var r = n(97)
        , i = n(94)
        , o = n(7);
    e.exports = function (e, t) {
        var n = {};
        return t = o(t, 3), i(e, function (e, i, o) {
            r(n, i, t(e, i, o))
        }), n
    }
}, function (e, t, n) {
    var r = n(237)
        , i = n(93)
        , o = n(238)
        , a = n(1);
    e.exports = function (e, t) {
        return (a(e) ? r : i)(e, o(t))
    }
}, function (e, t) {
    e.exports = function (e, t) {
        for (var n = -1, r = null == e ? 0 : e.length; ++n < r && !1 !== t(e[n], n, e););
        return e
    }
}, function (e, t, n) {
    var r = n(46);
    e.exports = function (e) {
        return "function" == typeof e ? e : r
    }
}, function (e, t, n) {
    var r = n(99)
        , i = n(81)
        , o = n(47)
        , a = n(80);
    e.exports = function (e, t, n) {
        e = a(e), t = i(t);
        var u = e.length
            , c = n = void 0 === n ? u : r(o(n), 0, u);
        return (n -= t.length) >= 0 && e.slice(n, c) == t
    }
}, function (e, t, n) {
    var r = n(241)
        , i = n(4)
        , o = "Expected a function";
    e.exports = function (e, t, n) {
        var a = !0
            , u = !0;
        if ("function" != typeof e) throw new TypeError(o);
        return i(n) && (a = "leading" in n ? !!n.leading : a, u = "trailing" in n ? !!n.trailing : u), r(e, t, {
            leading: a
            , maxWait: t
            , trailing: u
        })
    }
}, function (e, t, n) {
    var r = n(4)
        , i = n(242)
        , o = n(48)
        , a = "Expected a function"
        , u = Math.max
        , c = Math.min;
    e.exports = function (e, t, n) {
        var s, l, f, d, p, v, h = 0
            , E = !1
            , _ = !1
            , g = !0;
        if ("function" != typeof e) throw new TypeError(a);

        function I(t) {
            var n = s
                , r = l;
            return s = l = void 0, h = t, d = e.apply(r, n)
        }

        function m(e) {
            var n = e - v;
            return void 0 === v || n >= t || n < 0 || _ && e - h >= f
        }

        function y() {
            var e = i();
            if (m(e)) return T(e);
            p = setTimeout(y, function (e) {
                var n = t - (e - v);
                return _ ? c(n, f - (e - h)) : n
            }(e))
        }

        function T(e) {
            return p = void 0, g && s ? I(e) : (s = l = void 0, d)
        }

        function O() {
            var e = i()
                , n = m(e);
            if (s = arguments, l = this, v = e, n) {
                if (void 0 === p) return function (e) {
                    return h = e, p = setTimeout(y, t), E ? I(e) : d
                }(v);
                if (_) return clearTimeout(p), p = setTimeout(y, t), I(v)
            }
            return void 0 === p && (p = setTimeout(y, t)), d
        }
        return t = o(t) || 0, r(n) && (E = !!n.leading, f = (_ = "maxWait" in n) ? u(o(n.maxWait) || 0, t) : f, g = "trailing" in n ? !!n.trailing : g), O.cancel = function () {
            void 0 !== p && clearTimeout(p), h = 0, s = v = l = p = void 0
        }, O.flush = function () {
            return void 0 === p ? d : T(i())
        }, O
    }
}, function (e, t, n) {
    var r = n(3);
    e.exports = function () {
        return r.Date.now()
    }
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(17));
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.setStyle = function (e, t, n) {
        e.style[t] = n
    }, t.getStyle = function (e, t) {
        return e.style[t]
    }, t.getProperty = function (e, t) {
        return e[t]
    }, t.matchSelector = function (e) {
        return function (t) {
            return t[o](e)
        }
    }, t.getQuerySelector = function (e) {
        var t = e.id
            , n = e.selector;
        if (t) {
            var r = t;
            if (-1 !== t.indexOf(u)) {
                var i = t.split(u)
                    , o = i[0];
                if (r = i[1], o !== document.documentElement.getAttribute(l)) return null
            }
            return '[data-w-id^="'.concat(r, '"]')
        }
        return n
    }, t.getValidDocument = function (e) {
        if (null == e || e === document.documentElement.getAttribute(l)) return document;
        return null
    }, t.queryDocument = function (e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }, t.elementContains = function (e, t) {
        return e.contains(t)
    }, t.isSiblingNode = function (e, t) {
        return e !== t && e.parentNode === t.parentNode
    }, t.getChildElements = function (e) {
        for (var t = [], n = 0, r = (e || []).length; n < r; n++) {
            var i = e[n].children
                , o = i.length;
            if (o)
                for (var a = 0; a < o; a++) t.push(i[a])
        }
        return t
    }, t.getSiblingElements = function () {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = [], n = [], r = 0, i = e.length; r < i; r++) {
            var o = e[r].parentNode;
            if (o && o.children && o.children.length && -1 === n.indexOf(o)) {
                n.push(o);
                for (var a = o.firstElementChild; null != a;) - 1 === e.indexOf(a) && t.push(a), a = a.nextElementSibling
            }
        }
        return t
    }, t.getRefType = function (e) {
        if (null != e && "object" == (0, r.default)(e)) return e instanceof Element ? c : s;
        return null
    }, t.getClosestElement = void 0;
    var i = n(2)
        , o = i.IX2BrowserSupport.ELEMENT_MATCHES
        , a = i.IX2EngineConstants
        , u = a.IX2_ID_DELIMITER
        , c = a.HTML_ELEMENT
        , s = a.PLAIN_OBJECT
        , l = a.WF_PAGE;
    var f = Element.prototype.closest ? function (e, t) {
        return document.documentElement.contains(e) ? e.closest(t) : null
    } : function (e, t) {
        if (!document.documentElement.contains(e)) return null;
        var n = e;
        do {
            if (n[o] && n[o](t)) return n;
            n = n.parentNode
        } while (null != n);
        return null
    };
    t.getClosestElement = f
}, function (e, t, n) {
    "use strict";
    var r, i = n(0)
        , o = i(n(6))
        , a = i(n(17))
        , u = n(0);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = void 0;
    var c, s, l, f = u(n(12))
        , d = u(n(245))
        , p = u(n(25))
        , v = u(n(264))
        , h = n(16)
        , E = n(96)
        , _ = n(50)
        , g = n(2)
        , I = h.EventTypeConsts
        , m = I.MOUSE_CLICK
        , y = I.MOUSE_SECOND_CLICK
        , T = I.MOUSE_DOWN
        , O = I.MOUSE_UP
        , b = I.MOUSE_OVER
        , A = I.MOUSE_OUT
        , w = I.DROPDOWN_CLOSE
        , S = I.DROPDOWN_OPEN
        , R = I.SLIDER_ACTIVE
        , C = I.SLIDER_INACTIVE
        , N = I.TAB_ACTIVE
        , L = I.TAB_INACTIVE
        , x = I.NAVBAR_CLOSE
        , D = I.NAVBAR_OPEN
        , P = I.MOUSE_MOVE
        , M = I.PAGE_SCROLL_DOWN
        , F = I.SCROLL_INTO_VIEW
        , j = I.SCROLL_OUT_OF_VIEW
        , G = I.PAGE_SCROLL_UP
        , k = I.SCROLLING_IN_VIEW
        , U = I.PAGE_FINISH
        , V = I.ECOMMERCE_CART_CLOSE
        , X = I.ECOMMERCE_CART_OPEN
        , B = I.PAGE_START
        , W = I.PAGE_SCROLL
        , H = "COMPONENT_ACTIVE"
        , z = "COMPONENT_INACTIVE"
        , K = g.IX2EngineConstants.COLON_DELIMITER
        , Y = g.IX2VanillaUtils.getNamespacedParameterId
        , Q = function (e) {
            return function (t) {
                return !("object" !== (0, a.default)(t) || !e(t)) || t
            }
        }
        , q = Q(function (e) {
            return e.element === e.nativeEvent.target
        })
        , $ = Q(function (e) {
            var t = e.element
                , n = e.nativeEvent;
            return t.contains(n.target)
        })
        , Z = (0, d.default)([q, $])
        , J = function (e, t) {
            if (t) {
                var n = e.getState().ixData.events[t];
                if (n && !ae[n.eventTypeId]) return n
            }
            return null
        }
        , ee = function (e, t) {
            var n = e.store
                , r = e.event
                , i = e.element
                , o = e.eventStateKey
                , a = r.action
                , u = r.id
                , c = a.config
                , s = c.actionListId
                , l = c.autoStopEventId
                , f = J(n, l);
            return f && (0, E.stopActionGroup)({
                store: n
                , eventId: l
                , eventTarget: i
                , eventStateKey: l + K + o.split(K)[1]
                , actionListId: (0, p.default)(f, "action.config.actionListId")
            }), (0, E.stopActionGroup)({
                store: n
                , eventId: u
                , eventTarget: i
                , eventStateKey: o
                , actionListId: s
            }), (0, E.startActionGroup)({
                store: n
                , eventId: u
                , eventTarget: i
                , eventStateKey: o
                , actionListId: s
            }), t
        }
        , te = function (e, t) {
            return function (n, r) {
                return !0 === e(n, r) ? t(n, r) : r
            }
        }
        , ne = {
            handler: te(Z, ee)
        }
        , re = (0, f.default)({}, ne, {
            types: [H, z].join(" ")
        })
        , ie = [{
            target: window
            , types: "resize orientationchange"
            , throttle: !0
        }, {
            target: document
            , types: "scroll wheel readystatechange IX2_PAGE_UPDATE"
            , throttle: !0
        }]
        , oe = {
            types: ie
        }
        , ae = {
            PAGE_START: B
            , PAGE_FINISH: U
        }
        , ue = (c = void 0 !== window.pageXOffset, s = "CSS1Compat" === document.compatMode ? document.documentElement : document.body, function () {
            return {
                scrollLeft: c ? window.pageXOffset : s.scrollLeft
                , scrollTop: c ? window.pageYOffset : s.scrollTop
                , stiffScrollTop: (0, v.default)(c ? window.pageYOffset : s.scrollTop, 0, s.scrollHeight - window.innerHeight)
                , scrollWidth: s.scrollWidth
                , scrollHeight: s.scrollHeight
                , clientWidth: s.clientWidth
                , clientHeight: s.clientHeight
                , innerWidth: window.innerWidth
                , innerHeight: window.innerHeight
            }
        })
        , ce = function (e) {
            var t = e.element
                , n = e.nativeEvent
                , r = n.type
                , i = n.target
                , o = n.relatedTarget
                , a = t.contains(i);
            if ("mouseover" === r && a) return !0;
            var u = t.contains(o);
            return !("mouseout" !== r || !a || !u)
        }
        , se = function (e) {
            var t, n, r = e.element
                , i = e.event.config
                , o = ue()
                , a = o.clientWidth
                , u = o.clientHeight
                , c = i.scrollOffsetValue
                , s = "PX" === i.scrollOffsetUnit ? c : u * (c || 0) / 100;
            return t = r.getBoundingClientRect(), n = {
                left: 0
                , top: s
                , right: a
                , bottom: u - s
            }, !(t.left > n.right || t.right < n.left || t.top > n.bottom || t.bottom < n.top)
        }
        , le = function (e) {
            return function (t, n) {
                var r = t.nativeEvent.type
                    , i = -1 !== [H, z].indexOf(r) ? r === H : n.isActive
                    , o = (0, f.default)({}, n, {
                        isActive: i
                    });
                return n && o.isActive === n.isActive ? o : e(t, o) || o
            }
        }
        , fe = function (e) {
            return function (t, n) {
                var r = {
                    elementHovered: ce(t)
                };
                return (n ? r.elementHovered !== n.elementHovered : r.elementHovered) && e(t, r) || r
            }
        }
        , de = function (e) {
            return function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                    , r = ue()
                    , i = r.stiffScrollTop
                    , o = r.scrollHeight
                    , a = r.innerHeight
                    , u = t.event
                    , c = u.config
                    , s = u.eventTypeId
                    , l = c.scrollOffsetValue
                    , d = "PX" === c.scrollOffsetUnit
                    , p = o - a
                    , v = Number((i / p).toFixed(2));
                if (n && n.percentTop === v) return n;
                var h, E, _ = (d ? l : a * (l || 0) / 100) / p
                    , g = 0;
                n && (h = v > n.percentTop, g = (E = n.scrollingDown !== h) ? v : n.anchorTop);
                var I = s === M ? v >= g + _ : v <= g - _
                    , m = (0, f.default)({}, n, {
                        percentTop: v
                        , inBounds: I
                        , anchorTop: g
                        , scrollingDown: h
                    });
                return n && I && (E || m.inBounds !== n.inBounds) && e(t, m) || m
            }
        }
        , pe = function (e) {
            return function (t) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clickCount: 0
                    }
                    , r = {
                        clickCount: n.clickCount % 2 + 1
                    };
                return r.clickCount !== n.clickCount && e(t, r) || r
            }
        }
        , ve = function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, f.default)({}, re, {
                handler: te(e ? Z : q, le(function (e, t) {
                    return t.isActive ? ne.handler(e, t) : t
                }))
            })
        }
        , he = function () {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            return (0, f.default)({}, re, {
                handler: te(e ? Z : q, le(function (e, t) {
                    return t.isActive ? t : ne.handler(e, t)
                }))
            })
        }
        , Ee = (0, f.default)({}, oe, {
            handler: (l = function (e, t) {
                var n = t.elementVisible
                    , r = e.event;
                return !e.store.getState().ixData.events[r.action.config.autoStopEventId] && t.triggered ? t : r.eventTypeId === F === n ? (ee(e), (0, f.default)({}, t, {
                    triggered: !0
                })) : t
            }, function (e, t) {
                var n = (0, f.default)({}, t, {
                    elementVisible: se(e)
                });
                return (t ? n.elementVisible !== t.elementVisible : n.elementVisible) && l(e, n) || n
            })
        })
        , _e = (r = {}, (0, o.default)(r, R, ve()), (0, o.default)(r, C, he()), (0, o.default)(r, S, ve()), (0, o.default)(r, w, he()), (0, o.default)(r, D, ve(!1)), (0, o.default)(r, x, he(!1)), (0, o.default)(r, N, ve()), (0, o.default)(r, L, he()), (0, o.default)(r, X, {
            types: "ecommerce-cart-open"
            , handler: te(Z, ee)
        }), (0, o.default)(r, V, {
            types: "ecommerce-cart-close"
            , handler: te(Z, ee)
        }), (0, o.default)(r, m, {
            types: "click"
            , handler: te(Z, pe(function (e, t) {
                var n, r, i, o = t.clickCount;
                r = (n = e).store, i = n.event.action.config.autoStopEventId, Boolean(J(r, i)) ? 1 === o && ee(e) : ee(e)
            }))
        }), (0, o.default)(r, y, {
            types: "click"
            , handler: te(Z, pe(function (e, t) {
                2 === t.clickCount && ee(e)
            }))
        }), (0, o.default)(r, T, (0, f.default)({}, ne, {
            types: "mousedown"
        })), (0, o.default)(r, O, (0, f.default)({}, ne, {
            types: "mouseup"
        })), (0, o.default)(r, b, {
            types: "mouseover mouseout"
            , handler: te(Z, fe(function (e, t) {
                t.elementHovered && ee(e)
            }))
        }), (0, o.default)(r, A, {
            types: "mouseover mouseout"
            , handler: te(Z, fe(function (e, t) {
                t.elementHovered || ee(e)
            }))
        }), (0, o.default)(r, P, {
            types: "mousemove mouseout scroll"
            , handler: function (e) {
                var t = e.store
                    , n = e.element
                    , r = e.eventConfig
                    , i = e.nativeEvent
                    , o = e.eventStateKey
                    , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        clientX: 0
                        , clientY: 0
                        , pageX: 0
                        , pageY: 0
                    }
                    , u = r.basedOn
                    , c = r.selectedAxis
                    , s = r.continuousParameterGroupId
                    , l = r.reverse
                    , f = r.restingState
                    , d = void 0 === f ? 0 : f
                    , p = i.clientX
                    , v = void 0 === p ? a.clientX : p
                    , E = i.clientY
                    , g = void 0 === E ? a.clientY : E
                    , I = i.pageX
                    , m = void 0 === I ? a.pageX : I
                    , y = i.pageY
                    , T = void 0 === y ? a.pageY : y
                    , O = "X_AXIS" === c
                    , b = "mouseout" === i.type
                    , A = d / 100
                    , w = s
                    , S = !1;
                switch (u) {
                case h.EventBasedOn.VIEWPORT:
                    A = O ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(g, window.innerHeight) / window.innerHeight;
                    break;
                case h.EventBasedOn.PAGE:
                    var R = ue()
                        , C = R.scrollLeft
                        , N = R.scrollTop
                        , L = R.scrollWidth
                        , x = R.scrollHeight;
                    A = O ? Math.min(C + m, L) / L : Math.min(N + T, x) / x;
                    break;
                case h.EventBasedOn.ELEMENT:
                default:
                    w = Y(o, s);
                    var D = 0 === i.type.indexOf("mouse");
                    if (D && !0 !== Z({
                            element: n
                            , nativeEvent: i
                        })) break;
                    var P = n.getBoundingClientRect()
                        , M = P.left
                        , F = P.top
                        , j = P.width
                        , G = P.height;
                    if (!D && ! function (e, t) {
                            return e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom
                        }({
                            left: v
                            , top: g
                        }, P)) break;
                    S = !0, A = O ? (v - M) / j : (g - F) / G
                }
                return b && (A > .95 || A < .05) && (A = Math.round(A)), (u !== h.EventBasedOn.ELEMENT || S || S !== a.elementHovered) && (A = l ? 1 - A : A, t.dispatch((0, _.parameterChanged)(w, A))), {
                    elementHovered: S
                    , clientX: v
                    , clientY: g
                    , pageX: m
                    , pageY: T
                }
            }
        }), (0, o.default)(r, W, {
            types: ie
            , handler: function (e) {
                var t = e.store
                    , n = e.eventConfig
                    , r = n.continuousParameterGroupId
                    , i = n.reverse
                    , o = ue()
                    , a = o.scrollTop / (o.scrollHeight - o.clientHeight);
                a = i ? 1 - a : a, t.dispatch((0, _.parameterChanged)(r, a))
            }
        }), (0, o.default)(r, k, {
            types: ie
            , handler: function (e) {
                var t = e.element
                    , n = e.store
                    , r = e.eventConfig
                    , i = e.eventStateKey
                    , o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                        scrollPercent: 0
                    }
                    , a = ue()
                    , u = a.scrollLeft
                    , c = a.scrollTop
                    , s = a.scrollWidth
                    , l = a.scrollHeight
                    , f = a.clientHeight
                    , d = r.basedOn
                    , p = r.selectedAxis
                    , v = r.continuousParameterGroupId
                    , E = r.startsEntering
                    , g = r.startsExiting
                    , I = r.addEndOffset
                    , m = r.addStartOffset
                    , y = r.addOffsetValue
                    , T = void 0 === y ? 0 : y
                    , O = r.endOffsetValue
                    , b = void 0 === O ? 0 : O
                    , A = "X_AXIS" === p;
                if (d === h.EventBasedOn.VIEWPORT) {
                    var w = A ? u / s : c / l;
                    return w !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(v, w)), {
                        scrollPercent: w
                    }
                }
                var S = Y(i, v)
                    , R = t.getBoundingClientRect()
                    , C = (m ? T : 0) / 100
                    , N = (I ? b : 0) / 100;
                C = E ? C : 1 - C, N = g ? N : 1 - N;
                var L = R.top + Math.min(R.height * C, f)
                    , x = R.top + R.height * N - L
                    , D = Math.min(f + x, l)
                    , P = Math.min(Math.max(0, f - L), D) / D;
                return P !== o.scrollPercent && n.dispatch((0, _.parameterChanged)(S, P)), {
                    scrollPercent: P
                }
            }
        }), (0, o.default)(r, F, Ee), (0, o.default)(r, j, Ee), (0, o.default)(r, M, (0, f.default)({}, oe, {
            handler: de(function (e, t) {
                t.scrollingDown && ee(e)
            })
        })), (0, o.default)(r, G, (0, f.default)({}, oe, {
            handler: de(function (e, t) {
                t.scrollingDown || ee(e)
            })
        })), (0, o.default)(r, U, {
            types: "readystatechange IX2_PAGE_UPDATE"
            , handler: te(q, function (e) {
                return function (t, n) {
                    var r = {
                        finished: "complete" === document.readyState
                    };
                    return !r.finished || n && n.finshed || e(t), r
                }
            }(ee))
        }), (0, o.default)(r, B, {
            types: "readystatechange IX2_PAGE_UPDATE"
            , handler: te(q, function (e) {
                return function (t, n) {
                    return n || e(t), {
                        started: !0
                    }
                }
            }(ee))
        }), r);
    t.default = _e
}, function (e, t, n) {
    var r = n(246)();
    e.exports = r
}, function (e, t, n) {
    var r = n(51)
        , i = n(247)
        , o = n(101)
        , a = n(102)
        , u = n(1)
        , c = n(260)
        , s = "Expected a function"
        , l = 8
        , f = 32
        , d = 128
        , p = 256;
    e.exports = function (e) {
        return i(function (t) {
            var n = t.length
                , i = n
                , v = r.prototype.thru;
            for (e && t.reverse(); i--;) {
                var h = t[i];
                if ("function" != typeof h) throw new TypeError(s);
                if (v && !E && "wrapper" == a(h)) var E = new r([], !0)
            }
            for (i = E ? i : n; ++i < n;) {
                h = t[i];
                var _ = a(h)
                    , g = "wrapper" == _ ? o(h) : void 0;
                E = g && c(g[0]) && g[1] == (d | l | f | p) && !g[4].length && 1 == g[9] ? E[a(g[0])].apply(E, g[3]) : 1 == h.length && c(h) ? E[_]() : E.thru(h)
            }
            return function () {
                var e = arguments
                    , r = e[0];
                if (E && 1 == e.length && u(r)) return E.plant(r).value();
                for (var i = 0, o = n ? t[i].apply(this, e) : r; ++i < n;) o = t[i].call(this, o);
                return o
            }
        })
    }
}, function (e, t, n) {
    var r = n(248)
        , i = n(251)
        , o = n(253);
    e.exports = function (e) {
        return o(i(e, void 0, r), e + "")
    }
}, function (e, t, n) {
    var r = n(249);
    e.exports = function (e) {
        return null != e && e.length ? r(e, 1) : []
    }
}, function (e, t, n) {
    var r = n(36)
        , i = n(250);
    e.exports = function e(t, n, o, a, u) {
        var c = -1
            , s = t.length;
        for (o || (o = i), u || (u = []); ++c < s;) {
            var l = t[c];
            n > 0 && o(l) ? n > 1 ? e(l, n - 1, o, a, u) : r(u, l) : a || (u[u.length] = l)
        }
        return u
    }
}, function (e, t, n) {
    var r = n(13)
        , i = n(24)
        , o = n(1)
        , a = r ? r.isConcatSpreadable : void 0;
    e.exports = function (e) {
        return o(e) || i(e) || !!(a && e && e[a])
    }
}, function (e, t, n) {
    var r = n(252)
        , i = Math.max;
    e.exports = function (e, t, n) {
        return t = i(void 0 === t ? e.length - 1 : t, 0)
            , function () {
                for (var o = arguments, a = -1, u = i(o.length - t, 0), c = Array(u); ++a < u;) c[a] = o[t + a];
                a = -1;
                for (var s = Array(t + 1); ++a < t;) s[a] = o[a];
                return s[t] = n(c), r(e, this, s)
            }
    }
}, function (e, t) {
    e.exports = function (e, t, n) {
        switch (n.length) {
        case 0:
            return e.call(t);
        case 1:
            return e.call(t, n[0]);
        case 2:
            return e.call(t, n[0], n[1]);
        case 3:
            return e.call(t, n[0], n[1], n[2])
        }
        return e.apply(t, n)
    }
}, function (e, t, n) {
    var r = n(254)
        , i = n(256)(r);
    e.exports = i
}, function (e, t, n) {
    var r = n(255)
        , i = n(98)
        , o = n(46)
        , a = i ? function (e, t) {
            return i(e, "toString", {
                configurable: !0
                , enumerable: !1
                , value: r(t)
                , writable: !0
            })
        } : o;
    e.exports = a
}, function (e, t) {
    e.exports = function (e) {
        return function () {
            return e
        }
    }
}, function (e, t) {
    var n = 800
        , r = 16
        , i = Date.now;
    e.exports = function (e) {
        var t = 0
            , o = 0;
        return function () {
            var a = i()
                , u = r - (a - o);
            if (o = a, u > 0) {
                if (++t >= n) return arguments[0]
            } else t = 0;
            return e.apply(void 0, arguments)
        }
    }
}, function (e, t, n) {
    var r = n(77)
        , i = r && new r;
    e.exports = i
}, function (e, t) {
    e.exports = function () {}
}, function (e, t) {
    e.exports = {}
}, function (e, t, n) {
    var r = n(53)
        , i = n(101)
        , o = n(102)
        , a = n(261);
    e.exports = function (e) {
        var t = o(e)
            , n = a[t];
        if ("function" != typeof n || !(t in r.prototype)) return !1;
        if (e === n) return !0;
        var u = i(n);
        return !!u && e === u[0]
    }
}, function (e, t, n) {
    var r = n(53)
        , i = n(51)
        , o = n(52)
        , a = n(1)
        , u = n(9)
        , c = n(262)
        , s = Object.prototype.hasOwnProperty;

    function l(e) {
        if (u(e) && !a(e) && !(e instanceof r)) {
            if (e instanceof i) return e;
            if (s.call(e, "__wrapped__")) return c(e)
        }
        return new i(e)
    }
    l.prototype = o.prototype, l.prototype.constructor = l, e.exports = l
}, function (e, t, n) {
    var r = n(53)
        , i = n(51)
        , o = n(263);
    e.exports = function (e) {
        if (e instanceof r) return e.clone();
        var t = new i(e.__wrapped__, e.__chain__);
        return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
    }
}, function (e, t) {
    e.exports = function (e, t) {
        var n = -1
            , r = e.length;
        for (t || (t = Array(r)); ++n < r;) t[n] = e[n];
        return t
    }
}, function (e, t, n) {
    var r = n(99)
        , i = n(48);
    e.exports = function (e, t, n) {
        return void 0 === n && (n = t, t = void 0), void 0 !== n && (n = (n = i(n)) == n ? n : 0), void 0 !== t && (t = (t = i(t)) == t ? t : 0), r(i(e), t, n)
    }
}, function (e, t, n) {
    "use strict";
    var r = n(5);
    r.define("links", e.exports = function (e, t) {
        var n, i, o, a = {}
            , u = e(window)
            , c = r.env()
            , s = window.location
            , l = document.createElement("a")
            , f = "w--current"
            , d = /index\.(html|php)$/
            , p = /\/$/;

        function v(t) {
            var r = n && t.getAttribute("href-disabled") || t.getAttribute("href");
            if (l.href = r, !(r.indexOf(":") >= 0)) {
                var a = e(t);
                if (l.hash.length > 1 && l.host + l.pathname === s.host + s.pathname) {
                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(l.hash)) return;
                    var u = e(l.hash);
                    u.length && i.push({
                        link: a
                        , sec: u
                        , active: !1
                    })
                } else if ("#" !== r && "" !== r) {
                    var c = l.href === s.href || r === o || d.test(r) && p.test(o);
                    E(a, f, c)
                }
            }
        }

        function h() {
            var e = u.scrollTop()
                , n = u.height();
            t.each(i, function (t) {
                var r = t.link
                    , i = t.sec
                    , o = i.offset().top
                    , a = i.outerHeight()
                    , u = .5 * n
                    , c = i.is(":visible") && o + a - u >= e && o + u <= e + n;
                t.active !== c && (t.active = c, E(r, f, c))
            })
        }

        function E(e, t, n) {
            var r = e.hasClass(t);
            n && r || (n || r) && (n ? e.addClass(t) : e.removeClass(t))
        }
        return a.ready = a.design = a.preview = function () {
            n = c && r.env("design"), o = r.env("slug") || s.pathname || "", r.scroll.off(h), i = [];
            for (var e = document.links, t = 0; t < e.length; ++t) v(e[t]);
            i.length && (r.scroll.on(h), h())
        }, a
    })
}, function (e, t, n) {
    "use strict";
    var r = n(5);
    r.define("scroll", e.exports = function (e) {
        var t, n = e(document)
            , i = window
            , o = i.location
            , a = function () {
                try {
                    return Boolean(i.frameElement)
                } catch (e) {
                    return !0
                }
            }() ? null : i.history
            , u = /^[a-zA-Z0-9][\w:.-]*$/
            , c = 'a[href="#"]'
            , s = 'a[href*="#"]:not(.w-tab-link):not(' + c + ")";

        function l(n) {
            if (!(r.env("design") || window.$.mobile && e(n.currentTarget).hasClass("ui-link"))) {
                var c = this.href.split("#")
                    , s = c[0] === t ? c[1] : null;
                s && function (t, n) {
                    if (!u.test(t)) return;
                    var c = e("#" + t);
                    if (!c.length) return;
                    n && (n.preventDefault(), n.stopPropagation());
                    if (o.hash !== t && a && a.pushState && (!r.env.chrome || "file:" !== o.protocol)) {
                        var s = a.state && a.state.hash;
                        s !== t && a.pushState({
                            hash: t
                        }, "", "#" + t)
                    }
                    var l = r.env("editor") ? ".w-editor-body" : "body"
                        , f = e("header, " + l + " > .header, " + l + " > .w-nav:not([data-no-scroll])")
                        , d = "fixed" === f.css("position") ? f.outerHeight() : 0;
                    i.setTimeout(function () {
                        ! function (t, n) {
                            var r = e(i).scrollTop()
                                , o = t.offset().top - n;
                            if ("mid" === t.data("scroll")) {
                                var a = e(i).height() - n
                                    , u = t.outerHeight();
                                u < a && (o -= Math.round((a - u) / 2))
                            }
                            var c = 1;
                            e("body").add(t).each(function () {
                                var t = parseFloat(e(this).attr("data-scroll-time"), 10);
                                !isNaN(t) && (0 === t || t > 0) && (c = t)
                            }), Date.now || (Date.now = function () {
                                return (new Date).getTime()
                            });
                            var s = Date.now()
                                , l = i.requestAnimationFrame || i.mozRequestAnimationFrame || i.webkitRequestAnimationFrame || function (e) {
                                    i.setTimeout(e, 15)
                                }
                                , f = (472.143 * Math.log(Math.abs(r - o) + 125) - 2e3) * c;
                            ! function e() {
                                var t = Date.now() - s;
                                i.scroll(0, function (e, t, n, r) {
                                    if (n > r) return t;
                                    return e + (t - e) * (i = n / r, i < .5 ? 4 * i * i * i : (i - 1) * (2 * i - 2) * (2 * i - 2) + 1);
                                    var i
                                }(r, o, t, f)), t <= f && l(e)
                            }()
                        }(c, d)
                    }, n ? 0 : 300)
                }(s, n)
            }
        }
        return {
            ready: function () {
                t = o.href.split("#")[0], n.on("click", s, l), n.on("click", c, function (e) {
                    e.preventDefault()
                })
            }
        }
    })
}, function (e, t, n) {
    "use strict";
    n(5).define("touch", e.exports = function (e) {
        var t = {}
            , n = window.getSelection;

        function r(t) {
            var r, i, o = !1
                , a = !1
                , u = Math.min(Math.round(.04 * window.innerWidth), 40);

            function c(e) {
                var t = e.touches;
                t && t.length > 1 || (o = !0, t ? (a = !0, r = t[0].clientX) : r = e.clientX, i = r)
            }

            function s(t) {
                if (o) {
                    if (a && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                    var r = t.touches
                        , c = r ? r[0].clientX : t.clientX
                        , s = c - i;
                    i = c, Math.abs(s) > u && n && "" === String(n()) && (! function (t, n, r) {
                        var i = e.Event(t, {
                            originalEvent: n
                        });
                        e(n.target).trigger(i, r)
                    }("swipe", t, {
                        direction: s > 0 ? "right" : "left"
                    }), f())
                }
            }

            function l(e) {
                if (o) return o = !1, a && "mouseup" === e.type ? (e.preventDefault(), e.stopPropagation(), void(a = !1)) : void 0
            }

            function f() {
                o = !1
            }
            t.addEventListener("touchstart", c, !1), t.addEventListener("touchmove", s, !1), t.addEventListener("touchend", l, !1), t.addEventListener("touchcancel", f, !1), t.addEventListener("mousedown", c, !1), t.addEventListener("mousemove", s, !1), t.addEventListener("mouseup", l, !1), t.addEventListener("mouseout", f, !1), this.destroy = function () {
                t.removeEventListener("touchstart", c, !1), t.removeEventListener("touchmove", s, !1), t.removeEventListener("touchend", l, !1), t.removeEventListener("touchcancel", f, !1), t.removeEventListener("mousedown", c, !1), t.removeEventListener("mousemove", s, !1), t.removeEventListener("mouseup", l, !1), t.removeEventListener("mouseout", f, !1), t = null
            }
        }
        return e.event.special.tap = {
            bindType: "click"
            , delegateType: "click"
        }, t.init = function (t) {
            return (t = "string" == typeof t ? e(t).get(0) : t) ? new r(t) : null
        }, t.instance = t.init(document), t
    })
}, function (e, t, n) {
    "use strict";
    var r = n(0)(n(269))
        , i = n(5);
    i.define("forms", e.exports = function (e, t) {
        var n, o, a, u, c, s = {}
            , l = e(document)
            , f = window.location
            , d = window.XDomainRequest && !window.atob
            , p = ".w-form"
            , v = /e(-)?mail/i
            , h = /^\S+@\S+$/
            , E = window.alert
            , _ = i.env()
            , g = /list-manage[1-9]?.com/i
            , I = t.debounce(function () {
                E("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);

        function m(t, n) {
            var r = e(n)
                , i = e.data(n, p);
            i || (i = e.data(n, p, {
                form: r
            })), y(i);
            var a = r.closest("div.w-form");
            i.done = a.find("> .w-form-done"), i.fail = a.find("> .w-form-fail"), i.fileUploads = a.find(".w-file-upload"), i.fileUploads.each(function (t) {
                ! function (t, n) {
                    if (!n.fileUploads || !n.fileUploads[t]) return;
                    var r, i = e(n.fileUploads[t])
                        , o = i.find("> .w-file-upload-default")
                        , a = i.find("> .w-file-upload-uploading")
                        , u = i.find("> .w-file-upload-success")
                        , s = i.find("> .w-file-upload-error")
                        , l = o.find(".w-file-upload-input")
                        , f = o.find(".w-file-upload-label")
                        , d = f.children()
                        , p = s.find(".w-file-upload-error-msg")
                        , v = u.find(".w-file-upload-file")
                        , h = u.find(".w-file-remove-link")
                        , E = v.find(".w-file-upload-file-name")
                        , g = p.attr("data-w-size-error")
                        , I = p.attr("data-w-type-error")
                        , m = p.attr("data-w-generic-error");
                    if (_) l.on("click", function (e) {
                        e.preventDefault()
                    }), f.on("click", function (e) {
                        e.preventDefault()
                    }), d.on("click", function (e) {
                        e.preventDefault()
                    });
                    else {
                        h.on("click", function () {
                            l.removeAttr("data-value"), l.val(""), E.html(""), o.toggle(!0), u.toggle(!1)
                        }), l.on("change", function (i) {
                            (r = i.target && i.target.files && i.target.files[0]) && (o.toggle(!1), s.toggle(!1), a.toggle(!0), E.text(r.name), S() || T(n), n.fileUploads[t].uploading = !0, function (t, n) {
                                var r = {
                                    name: t.name
                                    , size: t.size
                                };
                                e.ajax({
                                    type: "POST"
                                    , url: c
                                    , data: r
                                    , dataType: "json"
                                    , crossDomain: !0
                                }).done(function (e) {
                                    n(null, e)
                                }).fail(function (e) {
                                    n(e)
                                })
                            }(r, A))
                        });
                        var O = f.outerHeight();
                        l.height(O), l.width(1)
                    }

                    function b(e) {
                        var r = e.responseJSON && e.responseJSON.msg
                            , i = m;
                        "string" == typeof r && 0 === r.indexOf("InvalidFileTypeError") ? i = I : "string" == typeof r && 0 === r.indexOf("MaxFileSizeError") && (i = g), p.text(i), l.removeAttr("data-value"), l.val(""), a.toggle(!1), o.toggle(!0), s.toggle(!0), n.fileUploads[t].uploading = !1, S() || y(n)
                    }

                    function A(t, n) {
                        if (t) return b(t);
                        var i = n.fileName
                            , o = n.postData
                            , a = n.fileId
                            , u = n.s3Url;
                        l.attr("data-value", a)
                            , function (t, n, r, i, o) {
                                var a = new FormData;
                                for (var u in n) a.append(u, n[u]);
                                a.append("file", r, i), e.ajax({
                                    type: "POST"
                                    , url: t
                                    , data: a
                                    , processData: !1
                                    , contentType: !1
                                }).done(function () {
                                    o(null)
                                }).fail(function (e) {
                                    o(e)
                                })
                            }(u, o, r, i, w)
                    }

                    function w(e) {
                        if (e) return b(e);
                        a.toggle(!1), u.css("display", "inline-block"), n.fileUploads[t].uploading = !1, S() || y(n)
                    }

                    function S() {
                        var e = n.fileUploads && n.fileUploads.toArray() || [];
                        return e.some(function (e) {
                            return e.uploading
                        })
                    }
                }(t, i)
            });
            var u = i.action = r.attr("action");
            i.handler = null, i.redirect = r.attr("data-redirect"), g.test(u) ? i.handler = A : u || (o ? i.handler = "function" == typeof hostedSubmitWebflow ? hostedSubmitWebflow : b : I())
        }

        function y(e) {
            var t = e.btn = e.form.find(':input[type="submit"]');
            e.wait = e.btn.attr("data-wait") || null, e.success = !1, t.prop("disabled", !1), e.label && t.val(e.label)
        }

        function T(e) {
            var t = e.btn
                , n = e.wait;
            t.prop("disabled", !0), n && (e.label = t.val(), t.val(n))
        }

        function O(t, n) {
            var r = null;
            return n = n || {}, t.find(':input:not([type="submit"]):not([type="file"])').each(function (i, o) {
                var a = e(o)
                    , u = a.attr("type")
                    , c = a.attr("data-name") || a.attr("name") || "Field " + (i + 1)
                    , s = a.val();
                if ("checkbox" === u) s = a.is(":checked");
                else if ("radio" === u) {
                    if (null === n[c] || "string" == typeof n[c]) return;
                    s = t.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof s && (s = e.trim(s)), n[c] = s, r = r || function (e, t, n, r) {
                    var i = null;
                    "password" === t ? i = "Passwords cannot be submitted." : e.attr("required") ? r ? v.test(e.attr("type")) && (h.test(r) || (i = "Please enter a valid email address for: " + n)) : i = "Please fill out the required field: " + n : "g-recaptcha-response" !== n || r || (i = "Please confirm you’re not a robot.");
                    return i
                }(a, u, c, s)
            }), r
        }

        function b(e) {
            S(e), w(e)
        }

        function A(n) {
            y(n);
            var r = n.form
                , i = {};
            if (!/^https/.test(f.href) || /^https/.test(n.action)) {
                S(n);
                var o, a = O(r, i);
                if (a) return E(a);
                T(n), t.each(i, function (e, t) {
                    v.test(t) && (i.EMAIL = e), /^((full[ _-]?)?name)$/i.test(t) && (o = e), /^(first[ _-]?name)$/i.test(t) && (i.FNAME = e), /^(last[ _-]?name)$/i.test(t) && (i.LNAME = e)
                }), o && !i.FNAME && (o = o.split(" "), i.FNAME = o[0], i.LNAME = i.LNAME || o[1]);
                var u = n.action.replace("/post?", "/post-json?") + "&c=?"
                    , c = u.indexOf("u=") + 2;
                c = u.substring(c, u.indexOf("&", c));
                var s = u.indexOf("id=") + 3;
                s = u.substring(s, u.indexOf("&", s)), i["b_" + c + "_" + s] = "", e.ajax({
                    url: u
                    , data: i
                    , dataType: "jsonp"
                }).done(function (e) {
                    n.success = "success" === e.result || /already/.test(e.msg), n.success || console.info("MailChimp error: " + e.msg), w(n)
                }).fail(function () {
                    w(n)
                })
            } else r.attr("method", "post")
        }

        function w(e) {
            var t = e.form
                , n = e.redirect
                , r = e.success;
            r && n ? i.location(n) : (e.done.toggle(r), e.fail.toggle(!r), t.toggle(!r), y(e))
        }

        function S(e) {
            e.evt && e.evt.preventDefault(), e.evt = null
        }
        return s.ready = s.design = s.preview = function () {
            ! function () {
                o = e("html").attr("data-wf-site"), u = "https://webflow.com/api/v1/form/" + o, d && u.indexOf("https://webflow.com") >= 0 && (u = u.replace("https://webflow.com", "http://formdata.webflow.com"));
                if (c = "".concat(u, "/signFile"), !(n = e(p + " form")).length) return;
                n.each(m)
            }(), _ || a || function () {
                a = !0, l.on("submit", p + " form", function (t) {
                    var n = e.data(this, p);
                    n.handler && (n.evt = t, n.handler(n))
                });
                var t = [
                    ["checkbox", ".w-checkbox-input"]
                    
                    , ["radio", ".w-radio-input"]
                ];
                l.on("change", p + ' form input[type="checkbox"]:not(.w-checkbox-input)', function (t) {
                    e(t.target).siblings(".w-checkbox-input").toggleClass("w--redirected-checked")
                }), l.on("change", p + ' form input[type="radio"]', function (t) {
                    e('input[name="'.concat(t.target.name, '"]:not(').concat(".w-checkbox-input", ")")).map(function (t, n) {
                        return e(n).siblings(".w-radio-input").removeClass("w--redirected-checked")
                    });
                    var n = e(t.target);
                    n.hasClass("w-radio-input") || n.siblings(".w-radio-input").addClass("w--redirected-checked")
                }), t.forEach(function (t) {
                    var n = (0, r.default)(t, 2)
                        , i = n[0]
                        , o = n[1];
                    l.on("focus", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (t) {
                        e(t.target).siblings(o).addClass("w--redirected-focus")
                    }), l.on("blur", p + ' form input[type="'.concat(i, '"]:not(') + o + ")", function (t) {
                        e(t.target).siblings(o).removeClass("w--redirected-focus")
                    })
                })
            }()
        }, s
    })
}, function (e, t, n) {
    var r = n(270)
        , i = n(271)
        , o = n(272);
    e.exports = function (e, t) {
        return r(e) || i(e, t) || o()
    }
}, function (e, t) {
    e.exports = function (e) {
        if (Array.isArray(e)) return e
    }
}, function (e, t) {
    e.exports = function (e, t) {
        var n = []
            , r = !0
            , i = !1
            , o = void 0;
        try {
            for (var a, u = e[Symbol.iterator](); !(r = (a = u.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
        } catch (e) {
            i = !0, o = e
        } finally {
            try {
                r || null == u.return || u.return()
            } finally {
                if (i) throw o
            }
        }
        return n
    }
}, function (e, t) {
    e.exports = function () {
        throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
}, function (e, t, n) {
    "use strict";
    var r = n(5)
        , i = "w-condition-invisible"
        , o = "." + i;

    function a(e) {
        return Boolean(e.$el && e.$el.closest(o).length)
    }

    function u(e, t) {
        for (var n = e; n >= 0; n--)
            if (!a(t[n])) return n;
        return -1
    }

    function c(e, t) {
        for (var n = e; n <= t.length - 1; n++)
            if (!a(t[n])) return n;
        return -1
    }

    function s(e, t, n, r) {
        var o, s, l, f = n.tram
            , d = Array.isArray
            , p = "w-lightbox-"
            , v = /(^|\s+)/g
            , h = [];

        function E(e, t) {
            return h = d(e) ? e : [e], s || E.build()
                , function (e) {
                    return e.filter(function (e) {
                        return !a(e)
                    })
                }(h).length > 1 && (s.items = s.empty, h.forEach(function (e) {
                    var t = P("thumbnail")
                        , n = P("item").append(t);
                    a(e) && n.addClass(i), s.items = s.items.add(n), S(e.thumbnailUrl || e.url, function (e) {
                        e.prop("width") > e.prop("height") ? L(e, "wide") : L(e, "tall"), t.append(L(e, "thumbnail-image"))
                    })
                }), s.strip.empty().append(s.items), L(s.content, "group")), f(x(s.lightbox, "hide").trigger("focus")).add("opacity .3s").start({
                    opacity: 1
                }), L(s.html, "noscroll"), E.show(t || 0)
        }

        function _(e) {
            return function (t) {
                this === t.target && (t.stopPropagation(), t.preventDefault(), e())
            }
        }
        E.build = function () {
            return E.destroy(), (s = {
                html: n(t.documentElement)
                , empty: n()
            }).arrowLeft = P("control left inactive"), s.arrowRight = P("control right inactive"), s.close = P("control close"), s.spinner = P("spinner"), s.strip = P("strip"), l = new R(s.spinner, C("hide")), s.content = P("content").append(s.spinner, s.arrowLeft, s.arrowRight, s.close), s.container = P("container").append(s.content, s.strip), s.lightbox = P("backdrop hide").append(s.container), s.strip.on("click", N("item"), y), s.content.on("swipe", T).on("click", N("left"), g).on("click", N("right"), I).on("click", N("close"), m).on("click", N("image, caption"), I), s.container.on("click", N("view"), m).on("dragstart", N("img"), b), s.lightbox.on("keydown", A).on("focusin", O), n(r).append(s.lightbox.prop("tabIndex", 0)), E
        }, E.destroy = function () {
            s && (x(s.html, "noscroll"), s.lightbox.remove(), s = void 0)
        }, E.show = function (e) {
            if (e !== o) {
                var t = h[e];
                if (!t) return E.hide();
                if (a(t)) {
                    if (e < o) {
                        var r = u(e - 1, h);
                        e = r > -1 ? r : e
                    } else {
                        var i = c(e + 1, h);
                        e = i > -1 ? i : e
                    }
                    t = h[e]
                }
                var d, p, v = o;
                return o = e, l.show(), S(t.html && (d = t.width, p = t.height, "data:image/svg+xml;charset=utf-8," + encodeURI('<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + p + '"/>')) || t.url, function (r) {
                    if (e === o) {
                        var i, a, d = P("figure", "figure").append(L(r, "image"))
                            , p = P("frame").append(d)
                            , E = P("view").append(p);
                        t.html && ((a = (i = n(t.html)).is("iframe")) && i.on("load", _), d.append(L(i, "embed"))), t.caption && d.append(P("caption", "figcaption").text(t.caption)), s.spinner.before(E), a || _()
                    }

                    function _() {
                        var t;
                        if (l.hide(), e === o) {
                            if (D(s.arrowLeft, "inactive", function (e, t) {
                                    return -1 === u(e - 1, t)
                                }(e, h)), D(s.arrowRight, "inactive", function (e, t) {
                                    return -1 === c(e + 1, t)
                                }(e, h)), s.view ? (f(s.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then((t = s.view, function () {
                                    t.remove()
                                })), f(E).add("opacity .3s").add("transform .3s").set({
                                    x: e > v ? "80px" : "-80px"
                                }).start({
                                    opacity: 1
                                    , x: 0
                                })) : E.css("opacity", 1), s.view = E, s.items) {
                                x(s.items, "active");
                                var n = s.items.eq(e);
                                L(n, "active")
                                    , function (e) {
                                        var t, n = e.get(0)
                                            , r = s.strip.get(0)
                                            , i = n.offsetLeft
                                            , o = n.clientWidth
                                            , a = r.scrollLeft
                                            , u = r.clientWidth
                                            , c = r.scrollWidth - u;
                                        i < a ? t = Math.max(0, i + o - u) : i + o > u + a && (t = Math.min(i, c));
                                        null != t && f(s.strip).add("scroll-left 500ms").start({
                                            "scroll-left": t
                                        })
                                    }(n)
                            }
                        } else E.remove()
                    }
                }), E
            }
        }, E.hide = function () {
            return f(s.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(w), E
        }, E.prev = function () {
            var e = u(o - 1, h);
            e > -1 && E.show(e)
        }, E.next = function () {
            var e = c(o + 1, h);
            e > -1 && E.show(e)
        };
        var g = _(E.prev)
            , I = _(E.next)
            , m = _(E.hide)
            , y = function (e) {
                var t = n(this).index();
                e.preventDefault(), E.show(t)
            }
            , T = function (e, t) {
                e.preventDefault(), "left" === t.direction ? E.next() : "right" === t.direction && E.prev()
            }
            , O = function () {
                this.focus()
            };

        function b(e) {
            e.preventDefault()
        }

        function A(e) {
            var t = e.keyCode;
            27 === t ? E.hide() : 37 === t ? E.prev() : 39 === t && E.next()
        }

        function w() {
            s && (s.strip.scrollLeft(0).empty(), x(s.html, "noscroll"), L(s.lightbox, "hide"), s.view && s.view.remove(), x(s.content, "group"), L(s.arrowLeft, "inactive"), L(s.arrowRight, "inactive"), o = s.view = void 0)
        }

        function S(e, t) {
            var n = P("img", "img");
            return n.one("load", function () {
                t(n)
            }), n.attr("src", e), n
        }

        function R(e, t, n) {
            this.$element = e, this.className = t, this.delay = n || 200, this.hide()
        }

        function C(e, t) {
            return e.replace(v, (t ? " ." : " ") + p)
        }

        function N(e) {
            return C(e, !0)
        }

        function L(e, t) {
            return e.addClass(C(t))
        }

        function x(e, t) {
            return e.removeClass(C(t))
        }

        function D(e, t, n) {
            return e.toggleClass(C(t), n)
        }

        function P(e, r) {
            return L(n(t.createElement(r || "div")), e)
        }
        return R.prototype.show = function () {
                var e = this;
                e.timeoutId || (e.timeoutId = setTimeout(function () {
                    e.$element.removeClass(e.className), delete e.timeoutId
                }, e.delay))
            }, R.prototype.hide = function () {
                if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
                this.$element.addClass(this.className)
            }
            , function () {
                var n = e.navigator.userAgent
                    , r = n.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (n.indexOf("Android ") > -1 && -1 === n.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var i = t.createElement("style");
                    t.head.appendChild(i), e.addEventListener("resize", o, !0), o()
                }

                function o() {
                    var t = e.innerHeight
                        , n = e.innerWidth
                        , r = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + t + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * t + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + t + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * t + "px}.w-lightbox-strip {padding: 0 " + .01 * t + "px}.w-lightbox-item {width:" + .1 * t + "px;padding:" + .02 * t + "px " + .01 * t + "px}.w-lightbox-thumbnail {height:" + .1 * t + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * t + "px}.w-lightbox-content {margin-top:" + .02 * t + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * t + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * t + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * t + "px}}";
                    i.textContent = r
                }
            }(), E
    }
    r.define("lightbox", e.exports = function (e) {
        var t, n, i = {}
            , o = r.env()
            , a = s(window, document, e, o ? "#lightbox-mountpoint" : "body")
            , u = e(document)
            , c = ".w-lightbox";

        function l(e) {
            var t, r, i = e.el.children(".w-json").html();
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (e) {
                    console.error("Malformed lightbox JSON configuration.", e)
                }! function (e) {
                    e.images && (e.images.forEach(function (e) {
                        e.type = "image"
                    }), e.items = e.images);
                    e.embed && (e.embed.type = "video", e.items = [e.embed]);
                    e.groupId && (e.group = e.groupId)
                }(i), i.items.forEach(function (t) {
                    t.$el = e.el
                }), (t = i.group) ? ((r = n[t]) || (r = n[t] = []), e.items = r, i.items.length && (e.index = r.length, r.push.apply(r, i.items))) : (e.items = i.items, e.index = 0)
            } else e.items = []
        }
        return i.ready = i.design = i.preview = function () {
            t = o && r.env("design"), a.destroy(), n = {}, u.find(c).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function () {
                e.each(this, function (n, r) {
                    var i = e.data(r, c);
                    i || (i = e.data(r, c, {
                        el: e(r)
                        , mode: "images"
                        , images: []
                        , embed: ""
                    })), i.el.off(c), l(i), t ? i.el.on("setting" + c, l.bind(null, i)) : i.el.on("click" + c, function (e) {
                        return function () {
                            e.items.length && a(e.items, e.index || 0)
                        }
                    }(i)).on("click" + c, function (e) {
                        e.preventDefault()
                    })
                })
            }
        }), i
    })
}, function (e, t, n) {
    "use strict";
    var r = n(5)
        , i = n(55);
    r.define("navbar", e.exports = function (e, t) {
        var n, o, a, u, c = {}
            , s = e.tram
            , l = e(window)
            , f = e(document)
            , d = r.env()
            , p = '<div class="w-nav-overlay" data-wf-ignore />'
            , v = ".w-nav"
            , h = "w--open"
            , E = "w--nav-dropdown-open"
            , _ = "w--nav-dropdown-toggle-open"
            , g = "w--nav-dropdown-list-open"
            , I = "w--nav-link-open"
            , m = i.triggers
            , y = e();

        function T() {
            r.resize.off(O)
        }

        function O() {
            o.each(N)
        }

        function b(n, i) {
            var o = e(i)
                , c = e.data(i, v);
            c || (c = e.data(i, v, {
                open: !1
                , el: o
                , config: {}
            })), c.menu = o.find(".w-nav-menu"), c.links = c.menu.find(".w-nav-link"), c.dropdowns = c.menu.find(".w-dropdown"), c.dropdownToggle = c.menu.find(".w-dropdown-toggle"), c.dropdownList = c.menu.find(".w-dropdown-list"), c.button = o.find(".w-nav-button"), c.container = o.find(".w-container"), c.outside = function (t) {
                t.outside && f.off("click" + v, t.outside);
                return function (n) {
                    var r = e(n.target);
                    u && r.closest(".w-editor-bem-EditorOverlay").length || C(t, r)
                }
            }(c), c.el.off(v), c.button.off(v), c.menu.off(v), S(c), a ? (w(c), c.el.on("setting" + v, function (e) {
                return function (n, r) {
                    r = r || {};
                    var i = l.width();
                    S(e), !0 === r.open && P(e, !0), !1 === r.open && F(e, !0), e.open && t.defer(function () {
                        i !== l.width() && R(e)
                    })
                }
            }(c))) : (! function (t) {
                if (t.overlay) return;
                t.overlay = e(p).appendTo(t.el), t.parent = t.menu.parent(), F(t, !0)
            }(c), c.button.on("click" + v, function (e) {
                return t.debounce(function () {
                    e.open ? F(e) : P(e)
                })
            }(c)), c.menu.on("click" + v, "a", function (t) {
                return function (n) {
                    var i = e(this)
                        , o = i.attr("href");
                    r.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && t.open && F(t) : n.preventDefault()
                }
            }(c))), N(n, i)
        }

        function A(t, n) {
            var r = e.data(n, v);
            r && (w(r), e.removeData(n, v))
        }

        function w(e) {
            e.overlay && (F(e, !0), e.overlay.remove(), e.overlay = null)
        }

        function S(e) {
            var n = {}
                , r = e.config || {}
                , i = n.animation = e.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(i), n.animDirect = /left$/.test(i) ? -1 : 1, r.animation !== i && e.open && t.defer(R, e), n.easing = e.el.attr("data-easing") || "ease", n.easing2 = e.el.attr("data-easing2") || "ease";
            var o = e.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = e.el.attr("data-doc-height"), e.config = n
        }

        function R(e) {
            e.open && (F(e, !0), P(e, !0))
        }
        c.ready = c.design = c.preview = function () {
            if (a = d && r.env("design"), u = r.env("editor"), n = e(document.body), !(o = f.find(v)).length) return;
            o.each(b), T(), r.resize.on(O)
        }, c.destroy = function () {
            y = e(), T(), o && o.length && o.each(A)
        };
        var C = t.debounce(function (e, t) {
            if (e.open) {
                var n = t.closest(".w-nav-menu");
                e.menu.is(n) || F(e)
            }
        });

        function N(t, n) {
            var r = e.data(n, v)
                , i = r.collapsed = "none" !== r.button.css("display");
            if (!r.open || i || a || F(r, !0), r.container.length) {
                var o = function (t) {
                    var n = t.container.css(L);
                    "none" === n && (n = "");
                    return function (t, r) {
                        (r = e(r)).css(L, ""), "none" === r.css(L) && r.css(L, n)
                    }
                }(r);
                r.links.each(o), r.dropdowns.each(o)
            }
            r.open && M(r)
        }
        var L = "max-width";

        function x(e, t) {
            t.setAttribute("data-nav-menu-open", "")
        }

        function D(e, t) {
            t.removeAttribute("data-nav-menu-open")
        }

        function P(e, t) {
            if (!e.open) {
                e.open = !0, e.menu.each(x), e.links.addClass(I), e.dropdowns.addClass(E), e.dropdownToggle.addClass(_), e.dropdownList.addClass(g), e.button.addClass(h);
                var n = e.config;
                "none" !== n.animation && s.support.transform || (t = !0);
                var i = M(e)
                    , o = e.menu.outerHeight(!0)
                    , u = e.menu.outerWidth(!0)
                    , c = e.el.height()
                    , l = e.el[0];
                if (N(0, l), m.intro(0, l), r.redraw.up(), a || f.on("click" + v, e.outside), !t) {
                    var d = "transform " + n.duration + "ms " + n.easing;
                    if (e.overlay && (y = e.menu.prev(), e.overlay.show().append(e.menu)), n.animOver) return s(e.menu).add(d).set({
                        x: n.animDirect * u
                        , height: i
                    }).start({
                        x: 0
                    }), void(e.overlay && e.overlay.width(u));
                    var p = c + o;
                    s(e.menu).add(d).set({
                        y: -p
                    }).start({
                        y: 0
                    })
                }
            }
        }

        function M(e) {
            var t = e.config
                , r = t.docHeight ? f.height() : n.height();
            return t.animOver ? e.menu.height(r) : "fixed" !== e.el.css("position") && (r -= e.el.height()), e.overlay && e.overlay.height(r), r
        }

        function F(e, t) {
            if (e.open) {
                e.open = !1, e.button.removeClass(h);
                var n = e.config;
                if (("none" === n.animation || !s.support.transform || n.duration <= 0) && (t = !0), m.outro(0, e.el[0]), f.off("click" + v, e.outside), t) return s(e.menu).stop(), void c();
                var r = "transform " + n.duration + "ms " + n.easing2
                    , i = e.menu.outerHeight(!0)
                    , o = e.menu.outerWidth(!0)
                    , a = e.el.height();
                if (n.animOver) s(e.menu).add(r).start({
                    x: o * n.animDirect
                }).then(c);
                else {
                    var u = a + i;
                    s(e.menu).add(r).start({
                        y: -u
                    }).then(c)
                }
            }

            function c() {
                e.menu.height(""), s(e.menu).set({
                    x: 0
                    , y: 0
                }), e.menu.each(D), e.links.removeClass(I), e.dropdowns.removeClass(E), e.dropdownToggle.removeClass(_), e.dropdownList.removeClass(g), e.overlay && e.overlay.children().length && (y.length ? e.menu.insertAfter(y) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close")
            }
        }
        return c
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-3"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-2"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".filled-btn"
                , "originalId": "5eaafe52d194e52093e64e6f|1fc0c150-1781-fb19-1e70-c27c666aa0dd"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1562338933464
        }
        , "e-2": {
            "id": "e-2"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-4"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".filled-btn"
                , "originalId": "5eaafe52d194e52093e64e6f|1fc0c150-1781-fb19-1e70-c27c666aa0dd"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1562338933465
        }
        , "e-3": {
            "id": "e-3"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-6"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e52093e64e6f|fd366e5c-22fa-bc54-348e-034cc007529c"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564581288025
        }
        , "e-4": {
            "id": "e-4"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-2"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-5"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e52093e64e6f|fd366e5c-22fa-bc54-348e-034cc007529c"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564581288026
        }
        , "e-5": {
            "id": "e-5"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-3"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-8"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".filled-btn-2"
                , "originalId": "5eaafe52d194e52093e64e6f|1b7165c1-fc3c-4616-70fb-b4742b4b4b05"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1560716027248
        }
        , "e-6": {
            "id": "e-6"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-4"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-7"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".filled-btn-2"
                , "originalId": "5eaafe52d194e52093e64e6f|1b7165c1-fc3c-4616-70fb-b4742b4b4b05"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1560716027248
        }
        , "e-7": {
            "id": "e-7"
            , "eventTypeId": "NAVBAR_OPEN"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-5"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-8"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "e4782b48-1640-8777-bfa9-4868f8f6502d"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1555356528259
        }
        , "e-8": {
            "id": "e-8"
            , "eventTypeId": "NAVBAR_CLOSE"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-18"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-7"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "e4782b48-1640-8777-bfa9-4868f8f6502d"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1555356528259
        }
        , "e-9": {
            "id": "e-9"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-7"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-10"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".project-img"
                , "originalId": "f83d63b5-8f5b-cba3-090e-b0f75e1c002a"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564658034813
        }
        , "e-10": {
            "id": "e-10"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-8"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-9"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".project-img"
                , "originalId": "f83d63b5-8f5b-cba3-090e-b0f75e1c002a"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564658034814
        }
        , "e-14": {
            "id": "e-14"
            , "eventTypeId": "PAGE_FINISH"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-9"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-13"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b"
            }
            , "config": {
                "loop": true
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564661926598
        }
        , "e-17": {
            "id": "e-17"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-18"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|f40f5af0-7b8e-a56a-c719-6da4f41382c3"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564673274938
        }
        , "e-19": {
            "id": "e-19"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-11"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-20"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "943b9552-ffcf-e5d6-7d6f-a92fa989b31c"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564673304626
        }
        , "e-21": {
            "id": "e-21"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-22"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|511d32f0-f78c-7b5b-3a3e-b948193a063f"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564673728947
        }
        , "e-24": {
            "id": "e-24"
            , "eventTypeId": "PAGE_FINISH"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-12"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-23"
                }
            }
            , "mediaQueries": ["main"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564678474664
        }
        , "e-26": {
            "id": "e-26"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-14"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|f40f5af0-7b8e-a56a-c719-6da4f41382c3"
            }
            , "config": [{
                "continuousParameterGroupId": "a-14-p"
                , "smoothing": 80
                , "startsEntering": false
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1564686696061
        }
        , "e-27": {
            "id": "e-27"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-15"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|511d32f0-f78c-7b5b-3a3e-b948193a063f"
            }
            , "config": [{
                "continuousParameterGroupId": "a-15-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1564687054277
        }
        , "e-28": {
            "id": "e-28"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-16"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-29"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|b1497dac-4fd9-a0d1-a8f8-870844029ebb"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 50
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564687141584
        }
        , "e-30": {
            "id": "e-30"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-17"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|b1497dac-4fd9-a0d1-a8f8-870844029ebb"
            }
            , "config": [{
                "continuousParameterGroupId": "a-17-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": true
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1564687209460
        }
        , "e-31": {
            "id": "e-31"
            , "eventTypeId": "PAGE_START"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-19"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-32"
                }
            }
            , "mediaQueries": ["main"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b"
            }
            , "config": {
                "loop": true
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564690183208
        }
        , "e-32": {
            "id": "e-32"
            , "eventTypeId": "PAGE_FINISH"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-12"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-31"
                }
            }
            , "mediaQueries": ["main"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564690183209
        }
        , "e-33": {
            "id": "e-33"
            , "eventTypeId": "NAVBAR_OPEN"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-5"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-34"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "d1ee1510-e7d7-10c2-38fa-cd113c6b70a5"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564755872411
        }
        , "e-34": {
            "id": "e-34"
            , "eventTypeId": "NAVBAR_CLOSE"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-18"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-33"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "d1ee1510-e7d7-10c2-38fa-cd113c6b70a5"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1564755872411
        }
        , "e-35": {
            "id": "e-35"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-22"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-36"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".gallery-img-link"
                , "originalId": "5eaafe52d194e557ace64e70|6e2c00c3-6eec-27ad-d375-fb4900644d26"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565174771373
        }
        , "e-36": {
            "id": "e-36"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-23"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-35"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".gallery-img-link"
                , "originalId": "5eaafe52d194e557ace64e70|6e2c00c3-6eec-27ad-d375-fb4900644d26"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565174771377
        }
        , "e-37": {
            "id": "e-37"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-38"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|9d722b2f-fcd5-7999-ed42-d7e5811eefdc"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565177659648
        }
        , "e-38": {
            "id": "e-38"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-2"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-37"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|9d722b2f-fcd5-7999-ed42-d7e5811eefdc"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565177659648
        }
        , "e-41": {
            "id": "e-41"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-24"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-42"
                }
            }
            , "mediaQueries": ["main"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|1a03e3cf-a331-b3ab-f50f-f3b3125dbc6c"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565178969444
        }
        , "e-42": {
            "id": "e-42"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-25"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-41"
                }
            }
            , "mediaQueries": ["main"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|1a03e3cf-a331-b3ab-f50f-f3b3125dbc6c"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565178969447
        }
        , "e-46": {
            "id": "e-46"
            , "eventTypeId": "PAGE_FINISH"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-45"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b1dee64e71"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565186022051
        }
        , "e-47": {
            "id": "e-47"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-28"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-48"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "d1ee1510-e7d7-10c2-38fa-cd113c6b70a6"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565186294023
        }
        , "e-48": {
            "id": "e-48"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-29"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-47"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "d1ee1510-e7d7-10c2-38fa-cd113c6b70a6"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565186294025
        }
        , "e-57": {
            "id": "e-57"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-13"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|1abc661a-f7ac-5987-0902-b31675266b73"
            }
            , "config": [{
                "continuousParameterGroupId": "a-13-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1565197165803
        }
        , "e-58": {
            "id": "e-58"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-13"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|26e5d7b0-0ed0-3c36-cfec-94b954ce3841"
            }
            , "config": [{
                "continuousParameterGroupId": "a-13-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1565197256054
        }
        , "e-59": {
            "id": "e-59"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-17"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|43a0c002-9c9d-c7b7-2133-4a0725ee1952"
            }
            , "config": [{
                "continuousParameterGroupId": "a-17-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1565197283853
        }
        , "e-60": {
            "id": "e-60"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-28"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-61"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "e4782b48-1640-8777-bfa9-4868f8f6502e"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565197359802
        }
        , "e-61": {
            "id": "e-61"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-29"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-60"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "e4782b48-1640-8777-bfa9-4868f8f6502e"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565197359804
        }
        , "e-86": {
            "id": "e-86"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-87"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|292a97e6-d46a-86b0-e1e2-232113906eb9"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565199455848
        }
        , "e-87": {
            "id": "e-87"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-2"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-86"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70|292a97e6-d46a-86b0-e1e2-232113906eb9"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565199455848
        }
        , "e-92": {
            "id": "e-92"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-32"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|7b78a85a-9ea5-da23-03ee-1ea6bbc5040d"
            }
            , "config": [{
                "continuousParameterGroupId": "a-32-p"
                , "smoothing": 80
                , "startsEntering": false
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1565695738491
        }
        , "e-93": {
            "id": "e-93"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-94"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|7b78a85a-9ea5-da23-03ee-1ea6bbc5040d"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565695738491
        }
        , "e-95": {
            "id": "e-95"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-96"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|7b78a85a-9ea5-da23-03ee-1ea6bbc50420"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565695738491
        }
        , "e-96": {
            "id": "e-96"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-2"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-95"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|7b78a85a-9ea5-da23-03ee-1ea6bbc50420"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1565695738491
        }
        , "e-117": {
            "id": "e-117"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-33"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|54e231b7-ab81-6bf8-7a8a-95d79433bb64"
            }
            , "config": [{
                "continuousParameterGroupId": "a-33-p"
                , "smoothing": 80
                , "startsEntering": true
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1566495914780
        }
        , "e-119": {
            "id": "e-119"
            , "eventTypeId": "PAGE_FINISH"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-9"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-118"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "PAGE"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e557ace64e70"
            }
            , "config": {
                "loop": true
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1567095896899
        }
        , "e-122": {
            "id": "e-122"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-123"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|615aa8c2-f20f-aa5f-a14e-ee76fde7878b"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1567100450413
        }
        , "e-123": {
            "id": "e-123"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-2"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-122"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|615aa8c2-f20f-aa5f-a14e-ee76fde7878b"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1567100450413
        }
        , "e-124": {
            "id": "e-124"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-125"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|ebd761a4-128b-0c6b-e299-c022da03614a"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1567100450413
        }
        , "e-126": {
            "id": "e-126"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-13"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e50ebfe64e6b|ebd761a4-128b-0c6b-e299-c022da03614a"
            }
            , "config": [{
                "continuousParameterGroupId": "a-13-p"
                , "smoothing": 80
                , "startsEntering": false
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1567100450413
        }
        , "e-129": {
            "id": "e-129"
            , "eventTypeId": "SCROLL_INTO_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-10"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-130"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|e0f85e50-8dbf-a7d2-5a0a-1374dc8921be"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": 40
                , "scrollOffsetUnit": "%"
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1567100499282
        }
        , "e-131": {
            "id": "e-131"
            , "eventTypeId": "SCROLLING_IN_VIEW"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_CONTINUOUS_ACTION"
                , "config": {
                    "actionListId": "a-13"
                    , "affectedElements": {}
                    , "duration": 0
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "appliesTo": "ELEMENT"
                , "styleBlockIds": []
                , "id": "5eaafe52d194e5b80be64e74|e0f85e50-8dbf-a7d2-5a0a-1374dc8921be"
            }
            , "config": [{
                "continuousParameterGroupId": "a-13-p"
                , "smoothing": 80
                , "startsEntering": false
                , "addStartOffset": false
                , "addOffsetValue": 50
                , "startsExiting": false
                , "addEndOffset": false
                , "endOffsetValue": 50
            }]
            , "createdOn": 1567100499282
        }
        , "e-132": {
            "id": "e-132"
            , "eventTypeId": "MOUSE_OVER"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-26"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-133"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".nav-link-inline"
                , "originalId": "5e49b6bc-459f-fa33-9866-147f8b57b65f"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1572978712755
        }
        , "e-133": {
            "id": "e-133"
            , "eventTypeId": "MOUSE_OUT"
            , "action": {
                "id": ""
                , "actionTypeId": "GENERAL_START_ACTION"
                , "config": {
                    "delay": 0
                    , "easing": ""
                    , "duration": 0
                    , "actionListId": "a-27"
                    , "affectedElements": {}
                    , "playInReverse": false
                    , "autoStopEventId": "e-132"
                }
            }
            , "mediaQueries": ["main", "medium", "small", "tiny"]
            , "target": {
                "selector": ".nav-link-inline"
                , "originalId": "5e49b6bc-459f-fa33-9866-147f8b57b65f"
                , "appliesTo": "CLASS"
            }
            , "config": {
                "loop": false
                , "playInReverse": false
                , "scrollOffsetValue": null
                , "scrollOffsetUnit": null
                , "delay": null
                , "direction": null
                , "effectIn": null
            }
            , "createdOn": 1572978712759
        }
    }
    , "actionLists": {
        "a-3": {
            "id": "a-3"
            , "title": "Filled Btn Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "outQuart"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".btn-text"
                            , "selectorGuids": ["6733019d-5302-09e1-e772-b8e7e2266d66"]
                        }
                        , "yValue": 100
                        , "xUnit": "PX"
                        , "yUnit": "%"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "outQuart"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".btn-text-effect"
                            , "selectorGuids": ["6733019d-5302-09e1-e772-b8e7e2266d67"]
                        }
                        , "yValue": 100
                        , "xUnit": "PX"
                        , "yUnit": "%"
                        , "zUnit": "PX"
                    }
                }]
            }]
            , "createdOn": 1560716912436
            , "useFirstGroupAsInitialState": false
        }
        , "a-4": {
            "id": "a-4"
            , "title": "Filled Btn Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "outQuart"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".btn-text-effect"
                            , "selectorGuids": ["6733019d-5302-09e1-e772-b8e7e2266d67"]
                        }
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "%"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "outQuart"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".btn-text"
                            , "selectorGuids": ["6733019d-5302-09e1-e772-b8e7e2266d66"]
                        }
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "%"
                        , "zUnit": "PX"
                    }
                }]
            }]
            , "createdOn": 1560716912436
            , "useFirstGroupAsInitialState": false
        }
        , "a": {
            "id": "a"
            , "title": "Outlined Btn Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".filled-btn-overlay"
                            , "selectorGuids": ["ee4505e6-6ec5-3956-f0ec-f75d26b19127"]
                        }
                        , "widthValue": 100
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-n-2"
                    , "actionTypeId": "STYLE_TEXT_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".filled-btn-text"
                            , "selectorGuids": ["ee4505e6-6ec5-3956-f0ec-f75d26b19122"]
                        }
                        , "rValue": 255
                        , "gValue": 255
                        , "bValue": 255
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1562338941414
            , "useFirstGroupAsInitialState": false
        }
        , "a-2": {
            "id": "a-2"
            , "title": "Outlined Btn Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".filled-btn-overlay"
                            , "selectorGuids": ["ee4505e6-6ec5-3956-f0ec-f75d26b19127"]
                        }
                        , "widthValue": 0
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-2-n-2"
                    , "actionTypeId": "STYLE_TEXT_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "globalSwatchId": "56ca7efc"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".filled-btn-text"
                            , "selectorGuids": ["ee4505e6-6ec5-3956-f0ec-f75d26b19122"]
                        }
                        , "rValue": 72
                        , "gValue": 48
                        , "bValue": 230
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1562338941414
            , "useFirstGroupAsInitialState": false
        }
        , "a-5": {
            "id": "a-5"
            , "title": "Burger In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "selector": ".line-1"
                            , "selectorGuids": ["98f4d971-0f5e-2e71-2e0d-d0bf9bf08f72"]
                        }
                        , "zValue": 45
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-3"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-2"
                            , "selectorGuids": ["c9c62647-1f04-b9fa-535d-ef74d5afe658"]
                        }
                        , "xValue": 0
                        , "yValue": 1
                        , "locked": false
                    }
                }, {
                    "id": "a-5-n-4"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92"]
                        }
                        , "widthValue": 100
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-5"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92"]
                        }
                        , "zValue": -45
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }, {
                    "id": "a-5-n-6"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-1.dark"
                            , "selectorGuids": ["98f4d971-0f5e-2e71-2e0d-d0bf9bf08f72", "e646944c-8c60-de3a-cde4-cb9437a6e492"]
                        }
                        , "rValue": 255
                        , "gValue": 255
                        , "bValue": 255
                        , "aValue": 1
                    }
                }, {
                    "id": "a-5-n-7"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-2.dark"
                            , "selectorGuids": ["c9c62647-1f04-b9fa-535d-ef74d5afe658", "93484a17-4947-c36b-7cac-595e1fd51fcf"]
                        }
                        , "rValue": 255
                        , "gValue": 255
                        , "bValue": 255
                        , "aValue": 1
                    }
                }, {
                    "id": "a-5-n-8"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3.dark"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92", "9abe3233-189c-5e5d-d91c-59eae02777c9"]
                        }
                        , "rValue": 255
                        , "gValue": 255
                        , "bValue": 255
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1555356532607
            , "useFirstGroupAsInitialState": false
        }
        , "a-18": {
            "id": "a-18"
            , "title": "Burger Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-18-n"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "selector": ".line-1"
                            , "selectorGuids": ["98f4d971-0f5e-2e71-2e0d-d0bf9bf08f72"]
                        }
                        , "zValue": 0
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-3"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-2"
                            , "selectorGuids": ["c9c62647-1f04-b9fa-535d-ef74d5afe658"]
                        }
                        , "xValue": 1
                        , "yValue": 1
                        , "locked": false
                    }
                }, {
                    "id": "a-18-n-4"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92"]
                        }
                        , "widthValue": 75
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-18-n-5"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92"]
                        }
                        , "zValue": 0
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }, {
                    "id": "a-18-n-6"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "globalSwatchId": "47b8d7c5"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-1.dark"
                            , "selectorGuids": ["98f4d971-0f5e-2e71-2e0d-d0bf9bf08f72", "e646944c-8c60-de3a-cde4-cb9437a6e492"]
                        }
                        , "rValue": 0
                        , "gValue": 0
                        , "bValue": 38
                        , "aValue": 1
                    }
                }, {
                    "id": "a-18-n-7"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "globalSwatchId": "47b8d7c5"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-2.dark"
                            , "selectorGuids": ["c9c62647-1f04-b9fa-535d-ef74d5afe658", "93484a17-4947-c36b-7cac-595e1fd51fcf"]
                        }
                        , "rValue": 0
                        , "gValue": 0
                        , "bValue": 38
                        , "aValue": 1
                    }
                }, {
                    "id": "a-18-n-8"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "globalSwatchId": "47b8d7c5"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".line-3.dark"
                            , "selectorGuids": ["d1b4957a-dfa2-b6e8-396e-eb8ee742aa92", "9abe3233-189c-5e5d-d91c-59eae02777c9"]
                        }
                        , "rValue": 0
                        , "gValue": 0
                        , "bValue": 38
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1555356532607
            , "useFirstGroupAsInitialState": false
        }
        , "a-7": {
            "id": "a-7"
            , "title": "Project List Img Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-7-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "xValue": -16
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-5"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-7-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "xValue": -16
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-7-n-3"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-img-overlay"
                            , "selectorGuids": ["52601b7b-9e0e-d736-2a78-b29179174170"]
                        }
                        , "widthValue": 0
                        , "widthUnit": "PX"
                        , "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-11"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "block"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-img-overlay"
                            , "selectorGuids": ["52601b7b-9e0e-d736-2a78-b29179174170"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-7-n-6"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-img-overlay"
                            , "selectorGuids": ["52601b7b-9e0e-d736-2a78-b29179174170"]
                        }
                        , "widthValue": 100
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-8"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-7-n-7"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-9"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-7-n-10"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }]
            , "createdOn": 1564658042338
            , "useFirstGroupAsInitialState": true
        }
        , "a-8": {
            "id": "a-8"
            , "title": "Project List Img Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "xValue": -16
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-2"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 100
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-8-n-3"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "xValue": -16
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-8-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 100
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-title.listing"
                            , "selectorGuids": ["f21668f0-a97c-ba9c-c060-cdec03f83f4e", "64df0321-cc89-1d73-f43d-ff447514f389"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-8-n-5"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-img-overlay"
                            , "selectorGuids": ["52601b7b-9e0e-d736-2a78-b29179174170"]
                        }
                        , "widthValue": 0
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-7"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "none"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".project-img-overlay"
                            , "selectorGuids": ["52601b7b-9e0e-d736-2a78-b29179174170"]
                        }
                    }
                }]
            }]
            , "createdOn": 1564658042338
            , "useFirstGroupAsInitialState": false
        }
        , "a-9": {
            "id": "a-9"
            , "title": "Scroll Down Arrow"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "outQuart"
                        , "duration": 600
                        , "target": {
                            "selector": ".arrow-wrapper"
                            , "selectorGuids": ["c6b2632b-45d8-45ca-bd88-2977ea86467a"]
                        }
                        , "yValue": -24
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 1000
                        , "easing": "outQuart"
                        , "duration": 600
                        , "target": {
                            "selector": ".arrow-wrapper"
                            , "selectorGuids": ["c6b2632b-45d8-45ca-bd88-2977ea86467a"]
                        }
                        , "yValue": -3
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-3"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "target": {
                            "selector": ".arrow-wrapper"
                            , "selectorGuids": ["c6b2632b-45d8-45ca-bd88-2977ea86467a"]
                        }
                        , "yValue": -24
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }]
            }]
            , "createdOn": 1564661930882
            , "useFirstGroupAsInitialState": true
        }
        , "a-10": {
            "id": "a-10"
            , "title": "Section Title Animation"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title-line"
                            , "selectorGuids": ["30ab1e8a-9c21-1461-6ecc-7c061db80533"]
                        }
                        , "xValue": 0
                        , "locked": false
                    }
                }, {
                    "id": "a-10-n-3"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title"
                            , "selectorGuids": ["ac3cabd3-accf-f807-5910-a8b78ee7d001"]
                        }
                        , "xValue": -80
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-10-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title"
                            , "selectorGuids": ["ac3cabd3-accf-f807-5910-a8b78ee7d001"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 800
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title-line"
                            , "selectorGuids": ["30ab1e8a-9c21-1461-6ecc-7c061db80533"]
                        }
                        , "xValue": 1
                        , "yValue": 1
                        , "locked": true
                    }
                }, {
                    "id": "a-10-n-5"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title"
                            , "selectorGuids": ["ac3cabd3-accf-f807-5910-a8b78ee7d001"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-10-n-6"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".section-title"
                            , "selectorGuids": ["ac3cabd3-accf-f807-5910-a8b78ee7d001"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }]
            }]
            , "createdOn": 1564672776676
            , "useFirstGroupAsInitialState": true
        }
        , "a-11": {
            "id": "a-11"
            , "title": "Numbers Section Animation"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-title"
                            , "selectorGuids": ["b3549080-38b4-bfad-a932-01748b5f81ba"]
                        }
                        , "yValue": 40
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-title"
                            , "selectorGuids": ["b3549080-38b4-bfad-a932-01748b5f81ba"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-11-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-value"
                            , "selectorGuids": ["488d520f-3522-6cb4-ec5c-d6ed8d9268e1"]
                        }
                        , "yValue": 16
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-3"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-value"
                            , "selectorGuids": ["488d520f-3522-6cb4-ec5c-d6ed8d9268e1"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-5"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 1000
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-title"
                            , "selectorGuids": ["b3549080-38b4-bfad-a932-01748b5f81ba"]
                        }
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-6"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 1000
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-title"
                            , "selectorGuids": ["b3549080-38b4-bfad-a932-01748b5f81ba"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-11-n-7"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 1000
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-value"
                            , "selectorGuids": ["488d520f-3522-6cb4-ec5c-d6ed8d9268e1"]
                        }
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-11-n-8"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 1800
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".numbers-value"
                            , "selectorGuids": ["488d520f-3522-6cb4-ec5c-d6ed8d9268e1"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }]
            , "createdOn": 1564673309901
            , "useFirstGroupAsInitialState": true
        }
        , "a-12": {
            "id": "a-12"
            , "title": "Hero Animation Desktop"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-col-left"
                            , "selectorGuids": ["a2548f52-a085-a39f-39a4-50f265e101ff"]
                        }
                        , "xValue": -80
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-2"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-col-left"
                            , "selectorGuids": ["a2548f52-a085-a39f-39a4-50f265e101ff"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-3"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".blue-shape-hero"
                            , "selectorGuids": ["ab5ca731-d168-38be-b105-91584eea6ea8"]
                        }
                        , "xValue": 0
                        , "yValue": 1
                        , "locked": false
                    }
                }, {
                    "id": "a-12-n-4"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-img-backdrop"
                            , "selectorGuids": ["8772a963-0eb9-0010-49fc-ac910dbbe055"]
                        }
                        , "xValue": 80
                        , "yValue": -80
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-6"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-img-backdrop"
                            , "selectorGuids": ["8772a963-0eb9-0010-49fc-ac910dbbe055"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-5"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-img"
                            , "selectorGuids": ["280870d1-99ad-cfca-6551-973b1a67a07a"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-8"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-img"
                            , "selectorGuids": ["280870d1-99ad-cfca-6551-973b1a67a07a"]
                        }
                        , "xValue": 40
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-16"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".hero-img-overlay"
                            , "selectorGuids": ["0496f736-9a37-edb3-c8f5-a78ad1fdf9c7"]
                        }
                        , "xValue": 0
                        , "yValue": 1
                        , "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-27"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "target": {
                            "selector": ".page-wrapper"
                            , "selectorGuids": ["a2dd074d-6a41-4e8d-6188-1b2309b9b069"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-29"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".loading-page"
                            , "selectorGuids": ["1add21d8-644c-90af-77ab-7994079f0872"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-28"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "none"
                        , "target": {
                            "selector": ".loading-page"
                            , "selectorGuids": ["1add21d8-644c-90af-77ab-7994079f0872"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-7"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".blue-shape-hero"
                            , "selectorGuids": ["ab5ca731-d168-38be-b105-91584eea6ea8"]
                        }
                        , "xValue": 1
                        , "yValue": 1
                        , "locked": true
                    }
                }, {
                    "id": "a-12-n-17"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 300
                        , "easing": "ease"
                        , "duration": 0
                        , "value": "block"
                        , "target": {
                            "selector": ".hero-img-overlay-wrapper"
                            , "selectorGuids": ["4d76c2a1-7ace-7d67-7d3b-8d178f31f786"]
                        }
                    }
                }, {
                    "id": "a-12-n-18"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 300
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".hero-img-overlay-wrapper"
                            , "selectorGuids": ["4d76c2a1-7ace-7d67-7d3b-8d178f31f786"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-19"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 300
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".hero-img-overlay"
                            , "selectorGuids": ["0496f736-9a37-edb3-c8f5-a78ad1fdf9c7"]
                        }
                        , "xValue": 1
                        , "yValue": 1
                        , "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-20"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".hero-img-overlay"
                            , "selectorGuids": ["0496f736-9a37-edb3-c8f5-a78ad1fdf9c7"]
                        }
                        , "xValue": -100
                        , "xUnit": "%"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-14"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 100
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".hero-img"
                            , "selectorGuids": ["280870d1-99ad-cfca-6551-973b1a67a07a"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-15"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 100
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".hero-img"
                            , "selectorGuids": ["280870d1-99ad-cfca-6551-973b1a67a07a"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-22"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 0
                        , "target": {
                            "selector": ".hero-img-backdrop"
                            , "selectorGuids": ["8772a963-0eb9-0010-49fc-ac910dbbe055"]
                        }
                        , "value": 0.5
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-21"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 200
                        , "easing": "ease"
                        , "duration": 800
                        , "target": {
                            "selector": ".hero-img-backdrop"
                            , "selectorGuids": ["8772a963-0eb9-0010-49fc-ac910dbbe055"]
                        }
                        , "xValue": 0
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-12-n-24"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 400
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".hero-col-left"
                            , "selectorGuids": ["a2548f52-a085-a39f-39a4-50f265e101ff"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }, {
                    "id": "a-12-n-23"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 400
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".hero-col-left"
                            , "selectorGuids": ["a2548f52-a085-a39f-39a4-50f265e101ff"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }]
            }]
            , "createdOn": 1564678483431
            , "useFirstGroupAsInitialState": true
        }
        , "a-14": {
            "id": "a-14"
            , "title": "Dot Animation Testimonials"
            , "continuousParameterGroups": [{
                "id": "a-14-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-14-n"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.testimonial-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "1bb70db0-3b1f-d46f-aba9-7670eda8a82b"]
                            }
                            , "yValue": 40
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100
                    , "actionItems": [{
                        "id": "a-14-n-2"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.testimonial-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "1bb70db0-3b1f-d46f-aba9-7670eda8a82b"]
                            }
                            , "yValue": 0
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564686961061
        }
        , "a-15": {
            "id": "a-15"
            , "title": "Dot Animation Companies"
            , "continuousParameterGroups": [{
                "id": "a-15-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-15-n"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.companies-bottom-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "c0de0639-836e-6704-0bf9-4ad8a32e991e"]
                            }
                            , "yValue": -40
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100
                    , "actionItems": [{
                        "id": "a-15-n-2"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.companies-bottom-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "c0de0639-836e-6704-0bf9-4ad8a32e991e"]
                            }
                            , "yValue": 0
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564687058627
        }
        , "a-16": {
            "id": "a-16"
            , "title": "Contact Section"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-16-n"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".contact-title"
                            , "selectorGuids": ["f9b48306-aec7-90fa-2ae8-0632303623fb"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-16-n-2"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 1000
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".contact-title"
                            , "selectorGuids": ["f9b48306-aec7-90fa-2ae8-0632303623fb"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }]
            , "createdOn": 1564687154455
            , "useFirstGroupAsInitialState": true
        }
        , "a-17": {
            "id": "a-17"
            , "title": "Dot Animation Contact"
            , "continuousParameterGroups": [{
                "id": "a-17-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-17-n"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.contact-bottom-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "637fe217-776c-fce6-bd49-3e4fe6fc7e55"]
                            }
                            , "yValue": -20
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60
                    , "actionItems": [{
                        "id": "a-17-n-2"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.contact-bottom-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "637fe217-776c-fce6-bd49-3e4fe6fc7e55"]
                            }
                            , "yValue": 0
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564687225330
        }
        , "a-19": {
            "id": "a-19"
            , "title": "Page Load Animation Start"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-19-n"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "target": {
                            "selector": ".page-wrapper"
                            , "selectorGuids": ["a2dd074d-6a41-4e8d-6188-1b2309b9b069"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }, {
                    "id": "a-19-n-2"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "flex"
                        , "target": {
                            "selector": ".loading-page"
                            , "selectorGuids": ["1add21d8-644c-90af-77ab-7994079f0872"]
                        }
                    }
                }, {
                    "id": "a-19-n-3"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "target": {
                            "selector": ".loading-page"
                            , "selectorGuids": ["1add21d8-644c-90af-77ab-7994079f0872"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-5"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 800
                        , "target": {
                            "selector": ".loading-circle"
                            , "selectorGuids": ["c92a4d91-c7e2-d8d0-7c47-1a4805e8c143"]
                        }
                        , "zValue": 360
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-19-n-6"
                    , "actionTypeId": "TRANSFORM_ROTATE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "target": {
                            "selector": ".loading-circle"
                            , "selectorGuids": ["c92a4d91-c7e2-d8d0-7c47-1a4805e8c143"]
                        }
                        , "zValue": 0
                        , "xUnit": "DEG"
                        , "yUnit": "DEG"
                        , "zUnit": "DEG"
                    }
                }]
            }]
            , "createdOn": 1564690188884
            , "useFirstGroupAsInitialState": true
        }
        , "a-22": {
            "id": "a-22"
            , "title": "Gallery Img Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n-3"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "xValue": -40
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-5"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "flex"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".gallery-img-overlay"
                            , "selectorGuids": ["4966e964-fb19-0b78-b597-9b59feaece38"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-2"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "easeInOut"
                        , "duration": 300
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".gallery-img-overlay"
                            , "selectorGuids": ["4966e964-fb19-0b78-b597-9b59feaece38"]
                        }
                        , "widthValue": 100
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-4"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 100
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "xValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-22-n-6"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 100
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }]
            , "createdOn": 1565174775535
            , "useFirstGroupAsInitialState": true
        }
        , "a-23": {
            "id": "a-23"
            , "title": "Gallery Img Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n-4"
                    , "actionTypeId": "STYLE_SIZE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "locked": false
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".gallery-img-overlay"
                            , "selectorGuids": ["4966e964-fb19-0b78-b597-9b59feaece38"]
                        }
                        , "widthValue": 0
                        , "widthUnit": "%"
                        , "heightUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-5"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "xValue": -40
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-23-n-6"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".plus-icon.no-margin"
                            , "selectorGuids": ["ec56f07e-f43a-8aae-7d0d-bdc5f502d218", "71371718-1dc8-0de3-8197-530a07f5099f"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-3"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "none"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".gallery-img-overlay"
                            , "selectorGuids": ["4966e964-fb19-0b78-b597-9b59feaece38"]
                        }
                    }
                }]
            }]
            , "createdOn": 1565174775535
            , "useFirstGroupAsInitialState": false
        }
        , "a-24": {
            "id": "a-24"
            , "title": "Grid Btn Tooltip Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "yValue": 24
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-5"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-3"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "block"
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-2"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 500
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "yValue": 0
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-24-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 500
                        , "easing": "ease"
                        , "duration": 600
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "value": 1
                        , "unit": ""
                    }
                }]
            }]
            , "createdOn": 1565178973563
            , "useFirstGroupAsInitialState": true
        }
        , "a-25": {
            "id": "a-25"
            , "title": "Grid Btn Tooltip Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n-3"
                    , "actionTypeId": "TRANSFORM_MOVE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "yValue": 24
                        , "xUnit": "PX"
                        , "yUnit": "PX"
                        , "zUnit": "PX"
                    }
                }, {
                    "id": "a-25-n-4"
                    , "actionTypeId": "STYLE_OPACITY"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                        , "value": 0
                        , "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2"
                    , "actionTypeId": "GENERAL_DISPLAY"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 0
                        , "value": "none"
                        , "target": {
                            "selector": ".grid-btn-tooltip"
                            , "selectorGuids": ["d76f6a4f-9d4a-6288-bd34-5183b98e238f"]
                        }
                    }
                }]
            }]
            , "createdOn": 1565178973563
            , "useFirstGroupAsInitialState": false
        }
        , "a-28": {
            "id": "a-28"
            , "title": "Logo Micro-Interaction Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-28-n"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".logo-line"
                            , "selectorGuids": ["b07dc13e-62d1-354a-e885-fcdd4f3d6343"]
                        }
                        , "xValue": 2
                        , "locked": false
                    }
                }, {
                    "id": "a-28-n-2"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "globalSwatchId": "56ca7efc"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".logo-line"
                            , "selectorGuids": ["b07dc13e-62d1-354a-e885-fcdd4f3d6343"]
                        }
                        , "rValue": 72
                        , "gValue": 48
                        , "bValue": 230
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1565186299109
            , "useFirstGroupAsInitialState": false
        }
        , "a-29": {
            "id": "a-29"
            , "title": "Logo Micro-Interaction Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".logo-line"
                            , "selectorGuids": ["b07dc13e-62d1-354a-e885-fcdd4f3d6343"]
                        }
                        , "xValue": 1
                        , "locked": false
                    }
                }, {
                    "id": "a-29-n-2"
                    , "actionTypeId": "STYLE_BACKGROUND_COLOR"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 400
                        , "globalSwatchId": "47b8d7c5"
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".logo-line"
                            , "selectorGuids": ["b07dc13e-62d1-354a-e885-fcdd4f3d6343"]
                        }
                        , "rValue": 0
                        , "gValue": 0
                        , "bValue": 38
                        , "aValue": 1
                    }
                }]
            }]
            , "createdOn": 1565186299109
            , "useFirstGroupAsInitialState": false
        }
        , "a-13": {
            "id": "a-13"
            , "title": "Dot Animation Latest Work"
            , "continuousParameterGroups": [{
                "id": "a-13-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-13-n"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.latest-work-center-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "9e80e233-ae58-493e-8aae-05514d79683a"]
                            }
                            , "yValue": -50
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-3"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.latest-work-bottom-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "82d5d93d-f40a-cea3-db6c-4433fd102d6e"]
                            }
                            , "yValue": -40
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100
                    , "actionItems": [{
                        "id": "a-13-n-2"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.latest-work-center-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "9e80e233-ae58-493e-8aae-05514d79683a"]
                            }
                            , "yValue": 0
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }, {
                        "id": "a-13-n-4"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.latest-work-bottom-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "82d5d93d-f40a-cea3-db6c-4433fd102d6e"]
                            }
                            , "yValue": 0
                            , "xUnit": "PX"
                            , "yUnit": "%"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564686804704
        }
        , "a-32": {
            "id": "a-32"
            , "title": "Dot Animation Contact CTA"
            , "continuousParameterGroups": [{
                "id": "a-32-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-32-n-5"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.cta-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "1fff1332-1508-5093-b4b6-f7c0cef8b258"]
                            }
                            , "yValue": -20
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100
                    , "actionItems": [{
                        "id": "a-32-n-6"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.cta-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "1fff1332-1508-5093-b4b6-f7c0cef8b258"]
                            }
                            , "yValue": 60
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564686804704
        }
        , "a-33": {
            "id": "a-33"
            , "title": "Dot Animation About"
            , "continuousParameterGroups": [{
                "id": "a-33-p"
                , "type": "SCROLL_PROGRESS"
                , "parameterLabel": "Scroll"
                , "continuousActionGroups": [{
                    "keyframe": 0
                    , "actionItems": [{
                        "id": "a-33-n"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.about-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "7be7956e-ade3-a0d8-3135-37b9c05801bb"]
                            }
                            , "yValue": -20
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-3"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.about-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "481a08ff-734b-ff71-0c48-2d170cda02a7"]
                            }
                            , "yValue": -20
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100
                    , "actionItems": [{
                        "id": "a-33-n-2"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.about-left"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "7be7956e-ade3-a0d8-3135-37b9c05801bb"]
                            }
                            , "yValue": 40
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }, {
                        "id": "a-33-n-4"
                        , "actionTypeId": "TRANSFORM_MOVE"
                        , "config": {
                            "delay": 0
                            , "easing": ""
                            , "duration": 500
                            , "target": {
                                "useEventTarget": "CHILDREN"
                                , "selector": ".dotted-pattern.about-right"
                                , "selectorGuids": ["79357995-28b5-a65e-fc58-02b33fe7cf16", "481a08ff-734b-ff71-0c48-2d170cda02a7"]
                            }
                            , "yValue": 50
                            , "xUnit": "PX"
                            , "yUnit": "VH"
                            , "zUnit": "PX"
                        }
                    }]
                }]
            }]
            , "createdOn": 1564686804704
        }
        , "a-26": {
            "id": "a-26"
            , "title": "Nav Link Hover In"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": ""
                        , "duration": 500
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".text-bg-accent"
                            , "selectorGuids": ["ad4736c5-66c0-a3c1-3d75-f0531325b2df"]
                        }
                        , "xValue": 1
                        , "yValue": 0
                        , "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-26-n-2"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".text-bg-accent"
                            , "selectorGuids": ["ad4736c5-66c0-a3c1-3d75-f0531325b2df"]
                        }
                        , "xValue": 1
                        , "yValue": 1
                        , "locked": true
                    }
                }]
            }]
            , "createdOn": 1565180557957
            , "useFirstGroupAsInitialState": true
        }
        , "a-27": {
            "id": "a-27"
            , "title": "Nav Link Hover Out"
            , "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n"
                    , "actionTypeId": "TRANSFORM_SCALE"
                    , "config": {
                        "delay": 0
                        , "easing": "ease"
                        , "duration": 200
                        , "target": {
                            "useEventTarget": "CHILDREN"
                            , "selector": ".text-bg-accent"
                            , "selectorGuids": ["ad4736c5-66c0-a3c1-3d75-f0531325b2df"]
                        }
                        , "xValue": 1
                        , "yValue": 0
                        , "locked": false
                    }
                }]
            }]
            , "createdOn": 1565180557957
            , "useFirstGroupAsInitialState": false
        }
    }
    , "site": {
        "mediaQueries": [{
            "key": "main"
            , "min": 992
            , "max": 10000
        }, {
            "key": "medium"
            , "min": 768
            , "max": 991
        }, {
            "key": "small"
            , "min": 480
            , "max": 767
        }, {
            "key": "tiny"
            , "min": 0
            , "max": 479
        }]
    }
});
