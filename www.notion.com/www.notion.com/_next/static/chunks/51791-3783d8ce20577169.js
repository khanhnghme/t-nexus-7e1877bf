! function() {
    try {
        var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            e = (new t.Error).stack;
        e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "aff3c643-030a-477f-88af-0564bb569047", t._sentryDebugIdIdentifier = "sentry-dbid-aff3c643-030a-477f-88af-0564bb569047")
    } catch (t) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [51791], {
        722805: function(t) {
            function e(t) {
                if ((t = t || {}).negativeType = t.negativeType || ("R" === t.negative ? "right" : "left"), "string" != typeof t.negativeLeftSymbol) switch (t.negativeType) {
                    case "left":
                        t.negativeLeftSymbol = "-";
                        break;
                    case "brackets":
                        t.negativeLeftSymbol = "(";
                        break;
                    default:
                        t.negativeLeftSymbol = ""
                }
                if ("string" != typeof t.negativeRightSymbol) switch (t.negativeType) {
                    case "right":
                        t.negativeRightSymbol = "-";
                        break;
                    case "brackets":
                        t.negativeRightSymbol = ")";
                        break;
                    default:
                        t.negativeRightSymbol = ""
                }

                function e(e, n) {
                    if (n = n || {}, !e && 0 !== e) return "";
                    var i, o, r = [],
                        l = "-" === (e = "" + e).charAt(0);
                    return e = e.replace(/^\-/g, ""), t.negativeLeftOut || n.noUnits || r.push(t.prefix), l && r.push(t.negativeLeftSymbol), t.negativeLeftOut && !n.noUnits && r.push(t.prefix), e = e.split("."), null != t.round && function(t, e) {
                        if (t[1] && e >= 0 && t[1].length > e) {
                            var n = t[1].slice(0, e);
                            if (+t[1].substr(e, 1) >= 5) {
                                for (var i = "";
                                    "0" === n.charAt(0);) i += "0", n = n.substr(1);
                                (n = i + (n = +n + 1 + "")).length > e && (t[0] = +t[0] + +n.charAt(0) + "", n = n.substring(1))
                            }
                            t[1] = n
                        }
                    }(e, t.round), null != t.truncate && (e[1] = (i = e[1], o = t.truncate, (i && (i += ""), i && i.length > o) ? i.substr(0, o) : i)), t.padLeft > 0 && (e[0] = function(t, e) {
                        t += "";
                        for (var n = []; n.length + t.length < e;) n.push("0");
                        return n.join("") + t
                    }(e[0], t.padLeft)), t.padRight > 0 && (e[1] = function(t, e) {
                        t ? t += "" : t = "";
                        for (var n = []; n.length + t.length < e;) n.push("0");
                        return t + n.join("")
                    }(e[1], t.padRight)), !n.noSeparator && e[1] && (e[1] = function(t, e) {
                        if (t += "", !e) return t;
                        for (var n = /(\d{3})(\d+)/; n.test(t);) t = t.replace(n, "$1" + e + "$2");
                        return t
                    }(e[1], t.decimalsSeparator)), !n.noSeparator && e[0] && (e[0] = function(t, e) {
                        if (t += "", !e) return t;
                        for (var n = /(\d+)(\d{3})/; n.test(t);) t = t.replace(n, "$1" + e + "$2");
                        return t
                    }(e[0], t.integerSeparator)), r.push(e[0]), e[1] && (r.push(t.decimal), r.push(e[1])), t.negativeRightOut && !n.noUnits && r.push(t.suffix), l && r.push(t.negativeRightSymbol), t.negativeRightOut || n.noUnits || r.push(t.suffix), r.join("")
                }
                return "boolean" != typeof t.negativeLeftOut && (t.negativeLeftOut = !1 !== t.negativeOut), "boolean" != typeof t.negativeRightOut && (t.negativeRightOut = !1 !== t.negativeOut), t.prefix = t.prefix || "", t.suffix = t.suffix || "", "string" != typeof t.integerSeparator && (t.integerSeparator = "string" == typeof t.separator ? t.separator : ","), t.decimalsSeparator = "string" == typeof t.decimalsSeparator ? t.decimalsSeparator : "", t.decimal = t.decimal || ".", t.padLeft = t.padLeft || -1, t.padRight = t.padRight || -1, e.negative = t.negative, e.negativeOut = t.negativeOut, e.negativeType = t.negativeType, e.negativeLeftOut = t.negativeLeftOut, e.negativeLeftSymbol = t.negativeLeftSymbol, e.negativeRightOut = t.negativeRightOut, e.negativeRightSymbol = t.negativeRightSymbol, e.prefix = t.prefix, e.suffix = t.suffix, e.separate = t.separate, e.integerSeparator = t.integerSeparator, e.decimalsSeparator = t.decimalsSeparator, e.decimal = t.decimal, e.padLeft = t.padLeft, e.padRight = t.padRight, e.truncate = t.truncate, e.round = t.round, e.unformat = function(e, n) {
                    n = n || [], t.allowedSeparators && t.allowedSeparators.forEach(function(t) {
                        n.push(t)
                    }), n.push(t.integerSeparator), n.push(t.decimalsSeparator);
                    var i = e = (e = e.replace(t.prefix, "")).replace(t.suffix, "");
                    do {
                        e = i;
                        for (var o = 0; o < n.length; o++) i = i.replace(n[o], "")
                    } while (i != e);
                    return e
                }, e
            }
            t.exports = e, t.exports.default = e
        },
        974751: function(t) {
            (function() {
                var e, n, i;
                i = [], e = {}, t.exports = n = function(t, n, o) {
                    var r, l, a, s, f, c;
                    if (null == o && (o = !0), "string" == typeof n) {
                        if (2 !== n.length) throw {
                            name: "ArgumentException",
                            message: "The format for string options is '<thousands><decimal>' (exactly two characters)"
                        };
                        c = n[0], r = n[1]
                    } else if (Array.isArray(n)) {
                        if (2 !== n.length) throw {
                            name: "ArgumentException",
                            message: "The format for array options is ['<thousands>','[<decimal>'] (exactly two elements)"
                        };
                        c = n[0], r = n[1]
                    } else c = (null != n ? n.thousands : void 0) || (null != n ? n.group : void 0) || e.thousands, r = (null != n ? n.decimal : void 0) || e.decimal;
                    return (null == (a = i[s = "" + c + r + o]) && (l = o ? 3 : 1, a = i[s] = RegExp("^\\s*([+-]?(?:(?:\\d{1,3}(?:\\" + c + "\\d{" + l + ",3})+)|\\d*))(?:\\" + r + "(\\d*))?\\s*$")), null != (f = t.match(a)) && 3 === f.length) ? parseFloat(f[1].replace(RegExp("\\" + c, "g"), "") + "." + f[2]) : 0 / 0
                }, t.exports.setOptions = function(t) {
                    var n, i;
                    for (n in t) i = t[n], e[n] = i
                }, t.exports.factoryReset = function() {
                    e = {
                        thousands: ",",
                        decimal: "."
                    }
                }, t.exports.withOptions = function(t, e) {
                    return null == e && (e = !0),
                        function(i) {
                            return n(i, t, e)
                        }
                }, t.exports.factoryReset()
            }).call(this)
        },
        811163: function(t, e, n) {
            t.exports = n(937253)
        },
        220189: function(t, e, n) {
            "use strict";

            function i(t) {
                return t.split("-")[1]
            }

            function o(t) {
                return t.split("-")[0]
            }

            function r(t) {
                return ["top", "bottom"].includes(o(t)) ? "x" : "y"
            }

            function l(t, e, n) {
                let l, {
                        reference: a,
                        floating: s
                    } = t,
                    f = a.x + a.width / 2 - s.width / 2,
                    c = a.y + a.height / 2 - s.height / 2,
                    u = r(e),
                    d = "y" === u ? "height" : "width",
                    h = a[d] / 2 - s[d] / 2,
                    g = "x" === u;
                switch (o(e)) {
                    case "top":
                        l = {
                            x: f,
                            y: a.y - s.height
                        };
                        break;
                    case "bottom":
                        l = {
                            x: f,
                            y: a.y + a.height
                        };
                        break;
                    case "right":
                        l = {
                            x: a.x + a.width,
                            y: c
                        };
                        break;
                    case "left":
                        l = {
                            x: a.x - s.width,
                            y: c
                        };
                        break;
                    default:
                        l = {
                            x: a.x,
                            y: a.y
                        }
                }
                switch (i(e)) {
                    case "start":
                        l[u] -= h * (n && g ? -1 : 1);
                        break;
                    case "end":
                        l[u] += h * (n && g ? -1 : 1)
                }
                return l
            }
            n.d(e, {
                JB: function() {
                    return s
                },
                dp: function() {
                    return d
                },
                oo: function() {
                    return a
                }
            });
            let a = async (t, e, n) => {
                let {
                    placement: i = "bottom",
                    strategy: o = "absolute",
                    middleware: r = [],
                    platform: a
                } = n, s = r.filter(Boolean), f = await (null == a.isRTL ? void 0 : a.isRTL(e)), c = await a.getElementRects({
                    reference: t,
                    floating: e,
                    strategy: o
                }), {
                    x: u,
                    y: d
                } = l(c, i, f), h = i, g = {}, p = 0;
                for (let n = 0; n < s.length; n++) {
                    let {
                        name: r,
                        fn: m
                    } = s[n], {
                        x: y,
                        y: v,
                        data: w,
                        reset: x
                    } = await m({
                        x: u,
                        y: d,
                        initialPlacement: i,
                        placement: h,
                        strategy: o,
                        middlewareData: g,
                        rects: c,
                        platform: a,
                        elements: {
                            reference: t,
                            floating: e
                        }
                    });
                    u = null != y ? y : u, d = null != v ? v : d, g = { ...g,
                        [r]: { ...g[r],
                            ...w
                        }
                    }, x && p <= 50 && (p++, "object" == typeof x && (x.placement && (h = x.placement), x.rects && (c = !0 === x.rects ? await a.getElementRects({
                        reference: t,
                        floating: e,
                        strategy: o
                    }) : x.rects), {
                        x: u,
                        y: d
                    } = l(c, h, f)), n = -1)
                }
                return {
                    x: u,
                    y: d,
                    placement: h,
                    strategy: o,
                    middlewareData: g
                }
            };

            function s(t) {
                return { ...t,
                    top: t.y,
                    left: t.x,
                    right: t.x + t.width,
                    bottom: t.y + t.height
                }
            }
            async function f(t, e) {
                var n;
                void 0 === e && (e = {});
                let {
                    x: i,
                    y: o,
                    platform: r,
                    rects: l,
                    elements: a,
                    strategy: f
                } = t, {
                    boundary: c = "clippingAncestors",
                    rootBoundary: u = "viewport",
                    elementContext: d = "floating",
                    altBoundary: h = !1,
                    padding: g = 0
                } = e, p = "number" != typeof g ? {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    ...g
                } : {
                    top: g,
                    right: g,
                    bottom: g,
                    left: g
                }, m = a[h ? "floating" === d ? "reference" : "floating" : d], y = s(await r.getClippingRect({
                    element: null == (n = await (null == r.isElement ? void 0 : r.isElement(m))) || n ? m : m.contextElement || await (null == r.getDocumentElement ? void 0 : r.getDocumentElement(a.floating)),
                    boundary: c,
                    rootBoundary: u,
                    strategy: f
                })), v = "floating" === d ? { ...l.floating,
                    x: i,
                    y: o
                } : l.reference, w = await (null == r.getOffsetParent ? void 0 : r.getOffsetParent(a.floating)), x = await (null == r.isElement ? void 0 : r.isElement(w)) && await (null == r.getScale ? void 0 : r.getScale(w)) || {
                    x: 1,
                    y: 1
                }, b = s(r.convertOffsetParentRelativeRectToViewportRelativeRect ? await r.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: v,
                    offsetParent: w,
                    strategy: f
                }) : v);
                return {
                    top: (y.top - b.top + p.top) / x.y,
                    bottom: (b.bottom - y.bottom + p.bottom) / x.y,
                    left: (y.left - b.left + p.left) / x.x,
                    right: (b.right - y.right + p.right) / x.x
                }
            }
            let c = Math.min,
                u = Math.max;
            ["top", "right", "bottom", "left"].reduce((t, e) => t.concat(e, e + "-start", e + "-end"), []);
            let d = function(t) {
                return void 0 === t && (t = {}), {
                    name: "size",
                    options: t,
                    async fn(e) {
                        let n, l;
                        let {
                            placement: a,
                            rects: s,
                            platform: d,
                            elements: h
                        } = e, {
                            apply: g = () => {},
                            ...p
                        } = t, m = await f(e, p), y = o(a), v = i(a), w = "x" === r(a), {
                            width: x,
                            height: b
                        } = s.floating;
                        "top" === y || "bottom" === y ? (n = y, l = v === (await (null == d.isRTL ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (l = y, n = "end" === v ? "top" : "bottom");
                        let R = b - m[n],
                            L = x - m[l],
                            E = R,
                            S = L;
                        if (w ? S = c(x - m.right - m.left, L) : E = c(b - m.bottom - m.top, R), !e.middlewareData.shift && !v) {
                            let t = u(m.left, 0),
                                e = u(m.right, 0),
                                n = u(m.top, 0),
                                i = u(m.bottom, 0);
                            w ? S = x - 2 * (0 !== t || 0 !== e ? t + e : u(m.left, m.right)) : E = b - 2 * (0 !== n || 0 !== i ? n + i : u(m.top, m.bottom))
                        }
                        await g({ ...e,
                            availableWidth: S,
                            availableHeight: E
                        });
                        let T = await d.getDimensions(h.floating);
                        return x !== T.width || b !== T.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }
            }
        },
        440771: function(t, e, n) {
            "use strict";
            let i;
            n.d(e, {
                Me: function() {
                    return W
                },
                oo: function() {
                    return B
                }
            });
            var o = n(220189);

            function r(t) {
                var e;
                return (null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
            }

            function l(t) {
                return r(t).getComputedStyle(t)
            }
            let a = Math.min,
                s = Math.max,
                f = Math.round;

            function c(t) {
                let e = l(t),
                    n = parseFloat(e.width),
                    i = parseFloat(e.height),
                    o = t.offsetWidth,
                    r = t.offsetHeight,
                    a = f(n) !== o || f(i) !== r;
                return a && (n = o, i = r), {
                    width: n,
                    height: i,
                    fallback: a
                }
            }

            function u(t) {
                return p(t) ? (t.nodeName || "").toLowerCase() : ""
            }

            function d() {
                if (i) return i;
                let t = navigator.userAgentData;
                return t && Array.isArray(t.brands) ? i = t.brands.map(t => t.brand + "/" + t.version).join(" ") : navigator.userAgent
            }

            function h(t) {
                return t instanceof r(t).HTMLElement
            }

            function g(t) {
                return t instanceof r(t).Element
            }

            function p(t) {
                return t instanceof r(t).Node
            }

            function m(t) {
                return "undefined" != typeof ShadowRoot && (t instanceof r(t).ShadowRoot || t instanceof ShadowRoot)
            }

            function y(t) {
                let {
                    overflow: e,
                    overflowX: n,
                    overflowY: i,
                    display: o
                } = l(t);
                return /auto|scroll|overlay|hidden|clip/.test(e + i + n) && !["inline", "contents"].includes(o)
            }

            function v(t) {
                let e = /firefox/i.test(d()),
                    n = l(t),
                    i = n.backdropFilter || n.WebkitBackdropFilter;
                return "none" !== n.transform || "none" !== n.perspective || !!i && "none" !== i || e && "filter" === n.willChange || e && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some(t => n.willChange.includes(t)) || ["paint", "layout", "strict", "content"].some(t => {
                    let e = n.contain;
                    return null != e && e.includes(t)
                })
            }

            function w() {
                return /^((?!chrome|android).)*safari/i.test(d())
            }

            function x(t) {
                return ["html", "body", "#document"].includes(u(t))
            }

            function b(t) {
                return g(t) ? t : t.contextElement
            }
            let R = {
                x: 1,
                y: 1
            };

            function L(t) {
                let e = b(t);
                if (!h(e)) return R;
                let n = e.getBoundingClientRect(),
                    {
                        width: i,
                        height: o,
                        fallback: r
                    } = c(e),
                    l = (r ? f(n.width) : n.width) / i,
                    a = (r ? f(n.height) : n.height) / o;
                return l && Number.isFinite(l) || (l = 1), a && Number.isFinite(a) || (a = 1), {
                    x: l,
                    y: a
                }
            }

            function E(t, e, n, i) {
                var o, l;
                void 0 === e && (e = !1), void 0 === n && (n = !1);
                let a = t.getBoundingClientRect(),
                    s = b(t),
                    f = R;
                e && (i ? g(i) && (f = L(i)) : f = L(t));
                let c = s ? r(s) : window,
                    u = w() && n,
                    d = (a.left + (u && (null == (o = c.visualViewport) ? void 0 : o.offsetLeft) || 0)) / f.x,
                    h = (a.top + (u && (null == (l = c.visualViewport) ? void 0 : l.offsetTop) || 0)) / f.y,
                    p = a.width / f.x,
                    m = a.height / f.y;
                if (s) {
                    let t = r(s),
                        e = i && g(i) ? r(i) : i,
                        n = t.frameElement;
                    for (; n && i && e !== t;) {
                        let t = L(n),
                            e = n.getBoundingClientRect(),
                            i = getComputedStyle(n);
                        e.x += (n.clientLeft + parseFloat(i.paddingLeft)) * t.x, e.y += (n.clientTop + parseFloat(i.paddingTop)) * t.y, d *= t.x, h *= t.y, p *= t.x, m *= t.y, d += e.x, h += e.y, n = r(n).frameElement
                    }
                }
                return {
                    width: p,
                    height: m,
                    top: h,
                    right: d + p,
                    bottom: h + m,
                    left: d,
                    x: d,
                    y: h
                }
            }

            function S(t) {
                return ((p(t) ? t.ownerDocument : t.document) || window.document).documentElement
            }

            function T(t) {
                return g(t) ? {
                    scrollLeft: t.scrollLeft,
                    scrollTop: t.scrollTop
                } : {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function O(t) {
                return E(S(t)).left + T(t).scrollLeft
            }

            function A(t) {
                if ("html" === u(t)) return t;
                let e = t.assignedSlot || t.parentNode || m(t) && t.host || S(t);
                return m(e) ? e.host : e
            }

            function k(t, e) {
                var n;
                void 0 === e && (e = []);
                let i = function t(e) {
                        let n = A(e);
                        return x(n) ? n.ownerDocument.body : h(n) && y(n) ? n : t(n)
                    }(t),
                    o = i === (null == (n = t.ownerDocument) ? void 0 : n.body),
                    l = r(i);
                return o ? e.concat(l, l.visualViewport || [], y(i) ? i : []) : e.concat(i, k(i))
            }

            function D(t, e, n) {
                let i;
                if ("viewport" === e) i = function(t, e) {
                    let n = r(t),
                        i = S(t),
                        o = n.visualViewport,
                        l = i.clientWidth,
                        a = i.clientHeight,
                        s = 0,
                        f = 0;
                    if (o) {
                        l = o.width, a = o.height;
                        let t = w();
                        (!t || t && "fixed" === e) && (s = o.offsetLeft, f = o.offsetTop)
                    }
                    return {
                        width: l,
                        height: a,
                        x: s,
                        y: f
                    }
                }(t, n);
                else if ("document" === e) i = function(t) {
                    let e = S(t),
                        n = T(t),
                        i = t.ownerDocument.body,
                        o = s(e.scrollWidth, e.clientWidth, i.scrollWidth, i.clientWidth),
                        r = s(e.scrollHeight, e.clientHeight, i.scrollHeight, i.clientHeight),
                        a = -n.scrollLeft + O(t),
                        f = -n.scrollTop;
                    return "rtl" === l(i).direction && (a += s(e.clientWidth, i.clientWidth) - o), {
                        width: o,
                        height: r,
                        x: a,
                        y: f
                    }
                }(S(t));
                else if (g(e)) i = function(t, e) {
                    let n = E(t, !0, "fixed" === e),
                        i = n.top + t.clientTop,
                        o = n.left + t.clientLeft,
                        r = h(t) ? L(t) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: t.clientWidth * r.x,
                        height: t.clientHeight * r.y,
                        x: o * r.x,
                        y: i * r.y
                    }
                }(e, n);
                else {
                    let n = { ...e
                    };
                    if (w()) {
                        var a, f;
                        let e = r(t);
                        n.x -= (null == (a = e.visualViewport) ? void 0 : a.offsetLeft) || 0, n.y -= (null == (f = e.visualViewport) ? void 0 : f.offsetTop) || 0
                    }
                    i = n
                }
                return (0, o.JB)(i)
            }

            function _(t, e) {
                return h(t) && "fixed" !== l(t).position ? e ? e(t) : t.offsetParent : null
            }

            function C(t, e) {
                let n = r(t),
                    i = _(t, e);
                for (; i && ["table", "td", "th"].includes(u(i)) && "static" === l(i).position;) i = _(i, e);
                return i && ("html" === u(i) || "body" === u(i) && "static" === l(i).position && !v(i)) ? n : i || function(t) {
                    let e = A(t);
                    for (; h(e) && !x(e);) {
                        if (v(e)) return e;
                        e = A(e)
                    }
                    return null
                }(t) || n
            }
            let P = {
                getClippingRect: function(t) {
                    let {
                        element: e,
                        boundary: n,
                        rootBoundary: i,
                        strategy: o
                    } = t, r = [..."clippingAncestors" === n ? function(t, e) {
                        let n = e.get(t);
                        if (n) return n;
                        let i = k(t).filter(t => g(t) && "body" !== u(t)),
                            o = null,
                            r = "fixed" === l(t).position,
                            a = r ? A(t) : t;
                        for (; g(a) && !x(a);) {
                            let t = l(a),
                                e = v(a);
                            (r ? e || o : e || "static" !== t.position || !o || !["absolute", "fixed"].includes(o.position)) ? o = t: i = i.filter(t => t !== a), a = A(a)
                        }
                        return e.set(t, i), i
                    }(e, this._c) : [].concat(n), i], f = r[0], c = r.reduce((t, n) => {
                        let i = D(e, n, o);
                        return t.top = s(i.top, t.top), t.right = a(i.right, t.right), t.bottom = a(i.bottom, t.bottom), t.left = s(i.left, t.left), t
                    }, D(e, f, o));
                    return {
                        width: c.right - c.left,
                        height: c.bottom - c.top,
                        x: c.left,
                        y: c.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
                    let {
                        rect: e,
                        offsetParent: n,
                        strategy: i
                    } = t, o = h(n), r = S(n);
                    if (n === r) return e;
                    let l = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        a = {
                            x: 1,
                            y: 1
                        },
                        s = {
                            x: 0,
                            y: 0
                        };
                    if ((o || !o && "fixed" !== i) && (("body" !== u(n) || y(r)) && (l = T(n)), h(n))) {
                        let t = E(n);
                        a = L(n), s.x = t.x + n.clientLeft, s.y = t.y + n.clientTop
                    }
                    return {
                        width: e.width * a.x,
                        height: e.height * a.y,
                        x: e.x * a.x - l.scrollLeft * a.x + s.x,
                        y: e.y * a.y - l.scrollTop * a.y + s.y
                    }
                },
                isElement: g,
                getDimensions: function(t) {
                    return h(t) ? c(t) : t.getBoundingClientRect()
                },
                getOffsetParent: C,
                getDocumentElement: S,
                getScale: L,
                async getElementRects(t) {
                    let {
                        reference: e,
                        floating: n,
                        strategy: i
                    } = t, o = this.getOffsetParent || C, r = this.getDimensions;
                    return {
                        reference: function(t, e, n) {
                            let i = h(e),
                                o = S(e),
                                r = E(t, !0, "fixed" === n, e),
                                l = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                a = {
                                    x: 0,
                                    y: 0
                                };
                            if (i || !i && "fixed" !== n) {
                                if (("body" !== u(e) || y(o)) && (l = T(e)), h(e)) {
                                    let t = E(e, !0);
                                    a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
                                } else o && (a.x = O(o))
                            }
                            return {
                                x: r.left + l.scrollLeft - a.x,
                                y: r.top + l.scrollTop - a.y,
                                width: r.width,
                                height: r.height
                            }
                        }(e, await o(n), i),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await r(n)
                        }
                    }
                },
                getClientRects: t => Array.from(t.getClientRects()),
                isRTL: t => "rtl" === l(t).direction
            };

            function W(t, e, n, i) {
                void 0 === i && (i = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: r = !0,
                    elementResize: l = !0,
                    animationFrame: a = !1
                } = i, s = o && !a, f = s || r ? [...g(t) ? k(t) : t.contextElement ? k(t.contextElement) : [], ...k(e)] : [];
                f.forEach(t => {
                    s && t.addEventListener("scroll", n, {
                        passive: !0
                    }), r && t.addEventListener("resize", n)
                });
                let c, u = null;
                if (l) {
                    let i = !0;
                    u = new ResizeObserver(() => {
                        i || n(), i = !1
                    }), g(t) && !a && u.observe(t), g(t) || !t.contextElement || a || u.observe(t.contextElement), u.observe(e)
                }
                let d = a ? E(t) : null;
                return a && function e() {
                    let i = E(t);
                    d && (i.x !== d.x || i.y !== d.y || i.width !== d.width || i.height !== d.height) && n(), d = i, c = requestAnimationFrame(e)
                }(), n(), () => {
                    var t;
                    f.forEach(t => {
                        s && t.removeEventListener("scroll", n), r && t.removeEventListener("resize", n)
                    }), null == (t = u) || t.disconnect(), u = null, a && cancelAnimationFrame(c)
                }
            }
            let B = (t, e, n) => {
                let i = new Map,
                    r = {
                        platform: P,
                        ...n
                    },
                    l = { ...r.platform,
                        _c: i
                    };
                return (0, o.oo)(t, e, { ...r,
                    platform: l
                })
            }
        },
        631133: function(t, e, n) {
            "use strict";
            n.d(e, {
                Un: function() {
                    return w
                },
                dR: function() {
                    return v
                }
            });
            var i = function() {
                    return "undefined" == typeof window
                },
                o = function(t) {
                    t = t || navigator.userAgent;
                    var e = /(iPad).*OS\s([\d_]+)/.test(t);
                    return {
                        ios: !e && /(iPhone\sOS)\s([\d_]+)/.test(t) || e,
                        android: /(Android);?[\s/]+([\d.]+)?/.test(t)
                    }
                },
                r = 0,
                l = 0,
                a = 0,
                s = null,
                f = !1,
                c = [],
                u = function(t) {
                    if (i()) return !1;
                    if (!t) throw Error("options must be provided");
                    var e = !1,
                        n = {
                            get passive() {
                                e = !0;
                                return
                            }
                        },
                        o = function() {},
                        r = "__TUA_BSL_TEST_PASSIVE__";
                    window.addEventListener(r, o, n), window.removeEventListener(r, o, n);
                    var l = t.capture;
                    return e ? t : void 0 !== l && l
                }({
                    passive: !1
                }),
                d = !i() && "scrollBehavior" in document.documentElement.style,
                h = function() {
                    var t = document.documentElement,
                        e = Object.assign({}, t.style),
                        n = window.innerWidth - t.clientWidth,
                        i = parseInt(window.getComputedStyle(t).paddingRight, 10);
                    return t.style.overflow = "hidden", t.style.boxSizing = "border-box", t.style.paddingRight = "".concat(n + i, "px"),
                        function() {
                            ["overflow", "boxSizing", "paddingRight"].forEach(function(n) {
                                t.style[n] = e[n] || ""
                            })
                        }
                },
                g = function(t) {
                    var e = document.documentElement,
                        n = document.body,
                        i = e.scrollTop || n.scrollTop,
                        o = Object.assign({}, e.style),
                        r = Object.assign({}, n.style);
                    return e.style.height = "100%", e.style.overflow = "hidden", n.style.top = "-".concat(i, "px"), n.style.width = "100%", n.style.height = "auto", n.style.position = "fixed", n.style.overflow = (null == t ? void 0 : t.overflowType) || "hidden",
                        function() {
                            e.style.height = o.height || "", e.style.overflow = o.overflow || "", ["top", "width", "height", "overflow", "position"].forEach(function(t) {
                                n.style[t] = r[t] || ""
                            }), d ? window.scrollTo({
                                top: i,
                                behavior: "instant"
                            }) : window.scrollTo(0, i)
                        }
                },
                p = function(t) {
                    t.cancelable && t.preventDefault()
                },
                m = function(t, e) {
                    if (e) {
                        var n = e.scrollTop,
                            i = e.scrollLeft,
                            o = e.scrollWidth,
                            r = e.scrollHeight,
                            s = e.clientWidth,
                            f = e.clientHeight,
                            c = t.targetTouches[0].clientX - a,
                            u = t.targetTouches[0].clientY - l,
                            d = Math.abs(u) > Math.abs(c);
                        if (d && (u > 0 && 0 === n || u < 0 && n + f + 1 >= r) || !d && (c > 0 && 0 === i || c < 0 && i + s + 1 >= o)) return p(t)
                    }
                    return t.stopPropagation(), !0
                },
                y = function(t) {
                    if (t) return
                },
                v = function(t, e) {
                    i() || (y(t), o().ios ? (t && (Array.isArray(t) ? t : [t]).forEach(function(t) {
                        t && -1 === c.indexOf(t) && (t.ontouchstart = function(t) {
                            l = t.targetTouches[0].clientY, a = t.targetTouches[0].clientX
                        }, t.ontouchmove = function(e) {
                            1 === e.targetTouches.length && m(e, t)
                        }, c.push(t))
                    }), f || (document.addEventListener("touchmove", p, u), f = !0)) : r <= 0 && (s = o().android ? g(e) : h()), r += 1)
                },
                w = function(t) {
                    if (!i() && (y(t), !((r -= 1) > 0))) {
                        if (!o().ios && "function" == typeof s) {
                            s();
                            return
                        }
                        t && (Array.isArray(t) ? t : [t]).forEach(function(t) {
                            var e = c.indexOf(t); - 1 !== e && (t.ontouchmove = null, t.ontouchstart = null, c.splice(e, 1))
                        }), f && (document.removeEventListener("touchmove", p, u), f = !1)
                    }
                }
        }
    }
]);