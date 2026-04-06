(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [22216], {
        18107: (t, r, n) => {
            "use strict";
            var e = n(746518),
                o = n(748981),
                i = n(326198),
                u = n(991291),
                a = n(206469);
            e({
                target: "Array",
                proto: !0
            }, {
                at: function(t) {
                    var r = o(this),
                        n = i(r),
                        e = u(t),
                        a = e >= 0 ? e : n + e;
                    return a < 0 || a >= n ? void 0 : r[a]
                }
            }), a("at")
        },
        36944: (t, r, n) => {
            t.exports = n(873893)("round")
        },
        63560: (t, r, n) => {
            t.exports = function(t, r, e) {
                return null == t ? t : n(473170)(t, r, e)
            }
        },
        142194: (t, r, n) => {
            t.exports = function(t, r) {
                return n(971086)(t, n(806048)(n(315389)(r)))
            }
        },
        150104: (t, r, n) => {
            function e(t, r) {
                if ("function" != typeof t || null != r && "function" != typeof r) throw TypeError("Expected a function");
                var o = function() {
                    var n = arguments,
                        e = r ? r.apply(this, n) : n[0],
                        i = o.cache;
                    if (i.has(e)) return i.get(e);
                    var u = t.apply(this, n);
                    return o.cache = i.set(e, u) || i, u
                };
                return o.cache = new(e.Cache || n(353661)), o
            }
            e.Cache = n(353661), t.exports = e
        },
        183673: t => {
            t.exports = function(t) {
                for (var r = -1, n = null == t ? 0 : t.length, e = 0, o = []; ++r < n;) {
                    var i = t[r];
                    i && (o[e++] = i)
                }
                return o
            }
        },
        204124: (t, r, n) => {
            t.exports = n(745539)(function(t, r, n) {
                return t + (n ? "_" : "") + r.toLowerCase()
            })
        },
        306498: (t, r, n) => {
            t.exports = n(242e3)(function(t, r, n) {
                t[+!n].push(r)
            }, function() {
                return [
                    [],
                    []
                ]
            })
        },
        333031: (t, r, n) => {
            t.exports = n(269302)(function(t, r) {
                if (null == t) return [];
                var e = r.length;
                return e > 1 && n(936800)(t, r[0], r[1]) ? r = [] : e > 2 && n(936800)(r[0], r[1], r[2]) && (r = [r[0]]), n(146155)(t, n(983120)(r, 1), [])
            })
        },
        336119: (t, r, n) => {
            t.exports = function(t) {
                return t && t.length ? n(17721)(t, n(383488)) : 0
            }
        },
        355083: (t, r, n) => {
            t.exports = function(t) {
                return n(182609)(t, n(383488))
            }
        },
        407350: (t, r, n) => {
            t.exports = function(t, r, e) {
                var o = !0,
                    i = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return n(223805)(e) && (o = "leading" in e ? !!e.leading : o, i = "trailing" in e ? !!e.trailing : i), n(738221)(t, r, {
                    leading: o,
                    maxWait: r,
                    trailing: i
                })
            }
        },
        494394: (t, r, n) => {
            var e = Object.prototype.hasOwnProperty;
            t.exports = n(242e3)(function(t, r, o) {
                e.call(t, o) ? t[o].push(r) : n(143360)(t, o, [r])
            })
        },
        547307: (t, r, n) => {
            t.exports = function(t, r) {
                return n(983120)(n(455378)(t, r), 1)
            }
        },
        660680: (t, r, n) => {
            var e = /[\\^$.*+?()[\]{}|]/g,
                o = RegExp(e.source);
            t.exports = function(t) {
                return (t = n(213222)(t)) && o.test(t) ? t.replace(e, "\\$&") : t
            }
        },
        688055: (t, r, n) => {
            t.exports = function(t) {
                return n(509999)(t, 5)
            }
        },
        737530: (t, r, n) => {
            t.exports = function(t, r, e) {
                var o = null == t ? 0 : t.length;
                return o ? (e && "number" != typeof e && n(936800)(t, r, e) ? (r = 0, e = o) : (r = null == r ? 0 : n(761489)(r), e = void 0 === e ? o : n(761489)(e)), n(225160)(t, r, e)) : []
            }
        },
        738221: (t, r, n) => {
            var e = Math.max,
                o = Math.min;
            t.exports = function(t, r, i) {
                var u, a, c, f, p, l, s = 0,
                    v = !1,
                    h = !1,
                    x = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");

                function g(r) {
                    var n = u,
                        e = a;
                    return u = a = void 0, s = r, f = t.apply(e, n)
                }

                function d(t) {
                    var n = t - l,
                        e = t - s;
                    return void 0 === l || n >= r || n < 0 || h && e >= c
                }

                function y() {
                    var t, e, i, u = n(10124)();
                    if (d(u)) return m(u);
                    p = setTimeout(y, (t = u - l, e = u - s, i = r - t, h ? o(i, c - e) : i))
                }

                function m(t) {
                    return (p = void 0, x && u) ? g(t) : (u = a = void 0, f)
                }

                function T() {
                    var t, e = n(10124)(),
                        o = d(e);
                    if (u = arguments, a = this, l = e, o) {
                        if (void 0 === p) return s = t = l, p = setTimeout(y, r), v ? g(t) : f;
                        if (h) return clearTimeout(p), p = setTimeout(y, r), g(l)
                    }
                    return void 0 === p && (p = setTimeout(y, r)), f
                }
                return r = n(399374)(r) || 0, n(223805)(i) && (v = !!i.leading, c = (h = "maxWait" in i) ? e(n(399374)(i.maxWait) || 0, r) : c, x = "trailing" in i ? !!i.trailing : x), T.cancel = function() {
                    void 0 !== p && clearTimeout(p), s = 0, u = l = a = p = void 0
                }, T.flush = function() {
                    return void 0 === p ? f : m(n(10124)())
                }, T
            }
        },
        763375: (t, r, n) => {
            t.exports = function(t) {
                return t && t.length ? n(855765)(t) : []
            }
        },
        821013: (t, r, n) => {
            var e = () => n(225160),
                o = Math.ceil,
                i = Math.max;
            t.exports = function(t, r, u) {
                r = (u ? n(936800)(t, r, u) : void 0 === r) ? 1 : i(n(761489)(r), 0);
                var a = null == t ? 0 : t.length;
                if (!a || r < 1) return [];
                for (var c = 0, f = 0, p = Array(o(a / r)); c < a;) p[f++] = e()(t, c, c += r);
                return p
            }
        },
        891648: (t, r, n) => {
            t.exports = n(269302)(function(t, r) {
                return n(683693)(t) ? n(983915)(t, r) : []
            })
        },
        897648: (t, r, n) => {
            t.exports = n(269302)(function(t, r) {
                var e = n(468090)(r);
                return n(683693)(e) && (e = void 0), n(683693)(t) ? n(983915)(t, n(983120)(r, 1, n(683693), !0), n(315389)(e, 2)) : []
            })
        },
        950014: (t, r, n) => {
            t.exports = function(t, r) {
                return t && t.length ? n(855765)(t, n(315389)(r, 2)) : []
            }
        },
        962193: (t, r, n) => {
            var e = Object.prototype.hasOwnProperty;
            t.exports = function(t) {
                if (null == t) return !0;
                if (n(864894)(t) && (n(956449)(t) || "string" == typeof t || "function" == typeof t.splice || n(3656)(t) || n(137167)(t) || n(872428)(t))) return !t.length;
                var r = n(405861)(t);
                if ("[object Map]" == r || "[object Set]" == r) return !t.size;
                if (n(255527)(t)) return !n(988984)(t).length;
                for (var o in t)
                    if (e.call(t, o)) return !1;
                return !0
            }
        },
        967357: (t, r, n) => {
            "use strict";
            var e = n(746518),
                o = n(179504),
                i = n(567750),
                u = n(991291),
                a = n(500655),
                c = n(779039),
                f = o("".charAt);
            e({
                target: "String",
                proto: !0,
                forced: c(function() {
                    return "\uD842" !== "𠮷".at(-2)
                })
            }, {
                at: function(t) {
                    var r = a(i(this)),
                        n = r.length,
                        e = u(t),
                        o = e >= 0 ? e : n + e;
                    return o < 0 || o >= n ? void 0 : f(r, o)
                }
            })
        },
        978659: (t, r, n) => {
            t.exports = function(t, r, e) {
                return void 0 === e && (e = r, r = void 0), void 0 !== e && (e = (e = n(399374)(e)) == e ? e : 0), void 0 !== r && (r = (r = n(399374)(r)) == r ? r : 0), n(587133)(n(399374)(t), r, e)
            }
        }
    }
]);