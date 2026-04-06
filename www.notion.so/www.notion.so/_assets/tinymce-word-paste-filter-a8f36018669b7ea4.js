"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [96316], {
        271282: e => {
            var t = Object.keys,
                n = function(e, n) {
                    for (var r = t(e), i = 0, a = r.length; i < a; i++) {
                        var o = r[i];
                        n(e[o], o)
                    }
                },
                r = function(e, t, n, r) {
                    var i = function(e) {
                        return (e = parseInt(e, 10).toString(16)).length > 1 ? e : "0" + e
                    };
                    return "#" + i(t) + i(n) + i(r)
                };
            e.exports = function(e, t) {
                var i, a, o, s, l = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                    u = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                    c = /\s*([^:]+):\s*([^;]+);?/g,
                    f = /\s+$/,
                    d = {};
                for (e = e || {}, t && (o = t.getValidStyles(), s = t.getInvalidStyles()), a = "\\\" \\' \\; \\: ; : \uFEFF".split(" "), i = 0; i < a.length; i++) d[a[i]] = "\uFEFF" + i, d["\uFEFF" + i] = a[i];
                return {
                    toHex: function(e) {
                        return e.replace(l, r)
                    },
                    parse: function(t) {
                        var n, a, o, s, p, h, m, g = {},
                            v = e.url_converter,
                            b = e.url_converter_scope || this,
                            y = function(e, t, n) {
                                if ((r = g[e + "-top" + t]) && (a = g[e + "-right" + t]) && (o = g[e + "-bottom" + t]) && (s = g[e + "-left" + t])) {
                                    var r, a, o, s, l = [r, a, o, s];
                                    for (i = l.length - 1; i-- && l[i] === l[i + 1];);
                                    i > -1 && n || (g[e + t] = -1 === i ? l[0] : l.join(" "), delete g[e + "-top" + t], delete g[e + "-right" + t], delete g[e + "-bottom" + t], delete g[e + "-left" + t])
                                }
                            },
                            w = function(e) {
                                var t, n = g[e];
                                if (n) {
                                    for (t = (n = n.split(" ")).length; t--;)
                                        if (n[t] !== n[0]) return !1;
                                    return g[e] = n[0], !0
                                }
                            },
                            x = function(e) {
                                return m = !0, d[e]
                            },
                            _ = function(e, t) {
                                return m && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                                    return d[e]
                                })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                            },
                            C = function(e) {
                                return String.fromCharCode(parseInt(e.slice(1), 16))
                            },
                            k = function(e) {
                                return e.replace(/\\[0-9a-f]+/gi, C)
                            },
                            E = function(t, n, r, i, a, o) {
                                if (a = a || o) return "'" + (a = _(a)).replace(/\'/g, "\\'") + "'";
                                if (n = _(n || r || i), !e.allow_script_urls) {
                                    var s = n.replace(/[\s\r\n]+/g, "");
                                    if (/(java|vb)script:/i.test(s) || !e.allow_svg_data_urls && /^data:image\/svg/i.test(s)) return ""
                                }
                                return v && (n = v.call(b, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                            };
                        if (t) {
                            for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, x).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                                    return e.replace(/[;:]/g, x)
                                }); s = c.exec(t);)
                                if (c.lastIndex = s.index + s[0].length, p = s[1].replace(f, "").toLowerCase(), h = s[2].replace(f, ""), p && h) {
                                    if (p = k(p), h = k(h), -1 !== p.indexOf("\uFEFF") || -1 !== p.indexOf('"') || !e.allow_script_urls && ("behavior" === p || /expression\s*\(|\/\*|\*\//.test(h))) continue;
                                    "font-weight" === p && "700" === h ? h = "bold" : ("color" === p || "background-color" === p) && (h = h.toLowerCase()), h = (h = h.replace(l, r)).replace(u, E), g[p] = m ? _(h, !0) : h
                                }
                            y("border", "", !0), y("border", "-width"), y("border", "-color"), y("border", "-style"), y("padding", ""), y("margin", ""), a = "border-style", o = "border-color", w(n = "border-width") && w(a) && w(o) && (g.border = g[n] + " " + g[a] + " " + g[o], delete g[n], delete g[a], delete g[o]), "medium none" === g.border && delete g.border, "none" === g["border-image"] && delete g["border-image"]
                        }
                        return g
                    },
                    serialize: function(e, t) {
                        var r = "",
                            i = function(t) {
                                var n, i, a, s;
                                if (n = o[t])
                                    for (i = 0, a = n.length; i < a; i++)(s = e[t = n[i]]) && (r += (r.length > 0 ? " " : "") + t + ": " + s + ";")
                            },
                            a = function(e, t) {
                                var n = s["*"];
                                return (!n || !n[e]) && !((n = s[t]) && n[e])
                            };
                        return t && o ? (i("*"), i(t)) : n(e, function(e, n) {
                            e && (!s || a(n, t)) && (r += (r.length > 0 ? " " : "") + n + ": " + e + ";")
                        }), r
                    }
                }
            }
        },
        756990: (e, t) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, r, i, a, o, s, l, u, c, f = function(e) {
                    return function() {
                        return e
                    }
                },
                d = f(!1),
                p = f(!0),
                h = function() {
                    return m
                },
                m = (n = function(e) {
                    return e.isNone()
                }, r = function(e) {
                    return e()
                }, {
                    fold: function(e, t) {
                        return e()
                    },
                    is: d,
                    isSome: d,
                    isNone: p,
                    getOr: i = function(e) {
                        return e
                    },
                    getOrThunk: r,
                    getOrDie: function(e) {
                        throw Error(e || "error: getOrDie called on none.")
                    },
                    getOrNull: f(null),
                    getOrUndefined: f(void 0),
                    or: i,
                    orThunk: r,
                    map: h,
                    each: function() {},
                    bind: h,
                    exists: d,
                    forall: p,
                    filter: h,
                    equals: n,
                    equals_: n,
                    toArray: function() {
                        return []
                    },
                    toString: f("none()")
                }),
                g = function(e) {
                    var t = f(e),
                        n = function() {
                            return i
                        },
                        r = function(t) {
                            return t(e)
                        },
                        i = {
                            fold: function(t, n) {
                                return n(e)
                            },
                            is: function(t) {
                                return e === t
                            },
                            isSome: p,
                            isNone: d,
                            getOr: t,
                            getOrThunk: t,
                            getOrDie: t,
                            getOrNull: t,
                            getOrUndefined: t,
                            or: n,
                            orThunk: n,
                            map: function(t) {
                                return g(t(e))
                            },
                            each: function(t) {
                                t(e)
                            },
                            bind: r,
                            exists: r,
                            forall: r,
                            filter: function(t) {
                                return t(e) ? i : m
                            },
                            toArray: function() {
                                return [e]
                            },
                            toString: function() {
                                return "some(" + e + ")"
                            },
                            equals: function(t) {
                                return t.is(e)
                            },
                            equals_: function(t, n) {
                                return t.fold(d, function(t) {
                                    return n(e, t)
                                })
                            }
                        };
                    return i
                },
                v = function(e) {
                    return null == e ? m : g(e)
                },
                b = function(e, t) {
                    for (var n = 0, r = e.length; n < r; n++) t(e[n], n)
                },
                y = function(e, t, n) {
                    for (var r = 0, i = e.length; r < i; r++) {
                        var a = e[r];
                        if (t(a, r)) return g(a);
                        if (n(a, r)) break
                    }
                    return h()
                },
                w = Object.keys,
                x = Object.hasOwnProperty,
                _ = function(e, t) {
                    for (var n = w(e), r = 0, i = n.length; r < i; r++) {
                        var a = n[r];
                        t(e[a], a)
                    }
                },
                C = function(e, t) {
                    return k(e, t) ? v(e[t]) : h()
                },
                k = function(e, t) {
                    return x.call(e, t)
                },
                E = function(e, t, n, r) {
                    var i = function(e) {
                        return (e = parseInt(e, 10).toString(16)).length > 1 ? e : "0" + e
                    };
                    return "#" + i(t) + i(n) + i(r)
                },
                A = function(e, t) {
                    var n, r, i, a, o = /rgb\s*\(\s*([0-9]+)\s*,\s*([0-9]+)\s*,\s*([0-9]+)\s*\)/gi,
                        s = /(?:url(?:(?:\(\s*\"([^\"]+)\"\s*\))|(?:\(\s*\'([^\']+)\'\s*\))|(?:\(\s*([^)\s]+)\s*\))))|(?:\'([^\']+)\')|(?:\"([^\"]+)\")/gi,
                        l = /\s*([^:]+):\s*([^;]+);?/g,
                        u = /\s+$/,
                        c = {};
                    for (e = e || {}, t && (i = t.getValidStyles(), a = t.getInvalidStyles()), r = "\\\" \\' \\; \\: ; : \uFEFF".split(" "), n = 0; n < r.length; n++) c[r[n]] = "\uFEFF" + n, c["\uFEFF" + n] = r[n];
                    return {
                        toHex: function(e) {
                            return e.replace(o, E)
                        },
                        parse: function(t) {
                            var r, i, a, f, d, p, h, m = {},
                                g = e.url_converter,
                                v = e.url_converter_scope || this,
                                b = function(e, t, r) {
                                    if ((i = m[e + "-top" + t]) && (a = m[e + "-right" + t]) && (o = m[e + "-bottom" + t]) && (s = m[e + "-left" + t])) {
                                        var i, a, o, s, l = [i, a, o, s];
                                        for (n = l.length - 1; n-- && l[n] === l[n + 1];);
                                        n > -1 && r || (m[e + t] = -1 === n ? l[0] : l.join(" "), delete m[e + "-top" + t], delete m[e + "-right" + t], delete m[e + "-bottom" + t], delete m[e + "-left" + t])
                                    }
                                },
                                y = function(e) {
                                    var t, n = m[e];
                                    if (n) {
                                        for (t = (n = n.split(" ")).length; t--;)
                                            if (n[t] !== n[0]) return !1;
                                        return m[e] = n[0], !0
                                    }
                                },
                                w = function(e) {
                                    return h = !0, c[e]
                                },
                                x = function(e, t) {
                                    return h && (e = e.replace(/\uFEFF[0-9]/g, function(e) {
                                        return c[e]
                                    })), t || (e = e.replace(/\\([\'\";:])/g, "$1")), e
                                },
                                _ = function(e) {
                                    return String.fromCharCode(parseInt(e.slice(1), 16))
                                },
                                C = function(e) {
                                    return e.replace(/\\[0-9a-f]+/gi, _)
                                },
                                k = function(t, n, r, i, a, o) {
                                    if (a = a || o) return "'" + (a = x(a)).replace(/\'/g, "\\'") + "'";
                                    if (n = x(n || r || i), !e.allow_script_urls) {
                                        var s = n.replace(/[\s\r\n]+/g, "");
                                        if (/(java|vb)script:/i.test(s) || !e.allow_svg_data_urls && /^data:image\/svg/i.test(s)) return ""
                                    }
                                    return g && (n = g.call(v, n, "style")), "url('" + n.replace(/\'/g, "\\'") + "')"
                                };
                            if (t) {
                                for (t = (t = t.replace(/[\u0000-\u001F]/g, "")).replace(/\\[\"\';:\uFEFF]/g, w).replace(/\"[^\"]+\"|\'[^\']+\'/g, function(e) {
                                        return e.replace(/[;:]/g, w)
                                    }); f = l.exec(t);)
                                    if (l.lastIndex = f.index + f[0].length, d = f[1].replace(u, "").toLowerCase(), p = f[2].replace(u, ""), d && p) {
                                        if (d = C(d), p = C(p), -1 !== d.indexOf("\uFEFF") || -1 !== d.indexOf('"') || !e.allow_script_urls && ("behavior" === d || /expression\s*\(|\/\*|\*\//.test(p))) continue;
                                        "font-weight" === d && "700" === p ? p = "bold" : ("color" === d || "background-color" === d) && (p = p.toLowerCase()), p = (p = p.replace(o, E)).replace(s, k), m[d] = h ? x(p, !0) : p
                                    }
                                b("border", "", !0), b("border", "-width"), b("border", "-color"), b("border", "-style"), b("padding", ""), b("margin", ""), i = "border-style", a = "border-color", y(r = "border-width") && y(i) && y(a) && (m.border = m[r] + " " + m[i] + " " + m[a], delete m[r], delete m[i], delete m[a]), "medium none" === m.border && delete m.border, "none" === m["border-image"] && delete m["border-image"]
                            }
                            return m
                        },
                        serialize: function(e, t) {
                            var n = "",
                                r = function(t) {
                                    var r, a, o, s;
                                    if (r = i[t])
                                        for (a = 0, o = r.length; a < o; a++)(s = e[t = r[a]]) && (n += (n.length > 0 ? " " : "") + t + ": " + s + ";")
                                },
                                o = function(e, t) {
                                    var n = a["*"];
                                    return (!n || !n[e]) && !((n = a[t]) && n[e])
                                };
                            return t && i ? (r("*"), r(t)) : _(e, function(e, r) {
                                e && (!a || o(r, t)) && (n += (n.length > 0 ? " " : "") + r + ": " + e + ";")
                            }), n
                        }
                    }
                },
                O = window.Blob,
                F = window.URL,
                S = window.document,
                j = window.navigator,
                I = window.window,
                R = window.setTimeout,
                P = window.setImmediate,
                q = (window.console, window.atob),
                z = function(e, t) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.test(t)) return r
                    }
                },
                D = function(e, t) {
                    var n = z(e, t);
                    if (!n) return {
                        major: 0,
                        minor: 0
                    };
                    var r = function(e) {
                        return Number(t.replace(n, "$" + e))
                    };
                    return L(r(1), r(2))
                },
                T = function() {
                    return L(0, 0)
                },
                L = function(e, t) {
                    return {
                        major: e,
                        minor: t
                    }
                },
                N = function(e, t) {
                    var n = String(t).toLowerCase();
                    return 0 === e.length ? T() : D(e, n)
                },
                V = "Edge",
                $ = "Chrome",
                B = "Opera",
                M = "Firefox",
                W = "Safari",
                U = function(e) {
                    var t = e.current,
                        n = e.version,
                        r = function(e) {
                            return function() {
                                return t === e
                            }
                        };
                    return {
                        current: t,
                        version: n,
                        isEdge: r(V),
                        isChrome: r($),
                        isIE: r("IE"),
                        isOpera: r(B),
                        isFirefox: r(M),
                        isSafari: r(W)
                    }
                },
                X = {
                    unknown: function() {
                        return U({
                            current: void 0,
                            version: T()
                        })
                    },
                    nu: U,
                    edge: f(V),
                    chrome: f($),
                    ie: f("IE"),
                    opera: f(B),
                    firefox: f(M),
                    safari: f(W)
                },
                H = "Windows",
                Z = "Android",
                Y = "Linux",
                G = "Solaris",
                K = "FreeBSD",
                Q = "ChromeOS",
                J = function(e) {
                    var t = e.current,
                        n = e.version,
                        r = function(e) {
                            return function() {
                                return t === e
                            }
                        };
                    return {
                        current: t,
                        version: n,
                        isWindows: r(H),
                        isiOS: r("iOS"),
                        isAndroid: r(Z),
                        isOSX: r("OSX"),
                        isLinux: r(Y),
                        isSolaris: r(G),
                        isFreeBSD: r(K),
                        isChromeOS: r(Q)
                    }
                },
                ee = {
                    unknown: function() {
                        return J({
                            current: void 0,
                            version: T()
                        })
                    },
                    nu: J,
                    windows: f(H),
                    ios: f("iOS"),
                    android: f(Z),
                    linux: f(Y),
                    osx: f("OSX"),
                    solaris: f(G),
                    freebsd: f(K),
                    chromeos: f(Q)
                },
                et = function(e, t, n, r) {
                    var i = e.isiOS() && !0 === /ipad/i.test(n),
                        a = e.isiOS() && !i,
                        o = e.isiOS() || e.isAndroid(),
                        s = o || r("(pointer:coarse)"),
                        l = i || !a && o && r("(min-device-width:768px)"),
                        u = a || o && !l,
                        c = t.isSafari() && e.isiOS() && !1 === /safari/i.test(n);
                    return {
                        isiPad: f(i),
                        isiPhone: f(a),
                        isTablet: f(l),
                        isPhone: f(u),
                        isTouch: f(s),
                        isAndroid: e.isAndroid,
                        isiOS: e.isiOS,
                        isWebView: f(c),
                        isDesktop: f(!u && !l && !c)
                    }
                },
                en = function(e, t) {
                    var n = String(t).toLowerCase();
                    return y(e, function(e) {
                        return e.search(n)
                    }, d)
                },
                er = function(e, t) {
                    return -1 !== e.indexOf(t)
                },
                ei = function(e, t) {
                    return "" === t || e.length >= t.length && e.substr(0, 0 + t.length) === t
                },
                ea = /.*?version\/\ ?([0-9]+)\.([0-9]+).*/,
                eo = function(e) {
                    return function(t) {
                        return er(t, e)
                    }
                },
                es = [{
                    name: "Edge",
                    versionRegexes: [/.*?edge\/ ?([0-9]+)\.([0-9]+)$/],
                    search: function(e) {
                        return er(e, "edge/") && er(e, "chrome") && er(e, "safari") && er(e, "applewebkit")
                    }
                }, {
                    name: "Chrome",
                    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/, ea],
                    search: function(e) {
                        return er(e, "chrome") && !er(e, "chromeframe")
                    }
                }, {
                    name: "IE",
                    versionRegexes: [/.*?msie\ ?([0-9]+)\.([0-9]+).*/, /.*?rv:([0-9]+)\.([0-9]+).*/],
                    search: function(e) {
                        return er(e, "msie") || er(e, "trident")
                    }
                }, {
                    name: "Opera",
                    versionRegexes: [ea, /.*?opera\/([0-9]+)\.([0-9]+).*/],
                    search: eo("opera")
                }, {
                    name: "Firefox",
                    versionRegexes: [/.*?firefox\/\ ?([0-9]+)\.([0-9]+).*/],
                    search: eo("firefox")
                }, {
                    name: "Safari",
                    versionRegexes: [ea, /.*?cpu os ([0-9]+)_([0-9]+).*/],
                    search: function(e) {
                        return (er(e, "safari") || er(e, "mobile/")) && er(e, "applewebkit")
                    }
                }],
                el = [{
                    name: "Windows",
                    search: eo("win"),
                    versionRegexes: [/.*?windows\ nt\ ?([0-9]+)\.([0-9]+).*/]
                }, {
                    name: "iOS",
                    search: function(e) {
                        return er(e, "iphone") || er(e, "ipad")
                    },
                    versionRegexes: [/.*?version\/\ ?([0-9]+)\.([0-9]+).*/, /.*cpu os ([0-9]+)_([0-9]+).*/, /.*cpu iphone os ([0-9]+)_([0-9]+).*/]
                }, {
                    name: "Android",
                    search: eo("android"),
                    versionRegexes: [/.*?android\ ?([0-9]+)\.([0-9]+).*/]
                }, {
                    name: "OSX",
                    search: eo("mac os x"),
                    versionRegexes: [/.*?mac\ os\ x\ ?([0-9]+)_([0-9]+).*/]
                }, {
                    name: "Linux",
                    search: eo("linux"),
                    versionRegexes: []
                }, {
                    name: "Solaris",
                    search: eo("sunos"),
                    versionRegexes: []
                }, {
                    name: "FreeBSD",
                    search: eo("freebsd"),
                    versionRegexes: []
                }, {
                    name: "ChromeOS",
                    search: eo("cros"),
                    versionRegexes: [/.*?chrome\/([0-9]+)\.([0-9]+).*/]
                }],
                eu = {
                    browsers: f(es),
                    oses: f(el)
                },
                ec = function(e, t) {
                    var n, r, i = eu.browsers(),
                        a = eu.oses(),
                        o = en(i, n = e).map(function(e) {
                            var t = N(e.versionRegexes, n);
                            return {
                                current: e.name,
                                version: t
                            }
                        }).fold(X.unknown, X.nu),
                        s = en(a, r = e).map(function(e) {
                            var t = N(e.versionRegexes, r);
                            return {
                                current: e.name,
                                version: t
                            }
                        }).fold(ee.unknown, ee.nu),
                        l = et(s, o, e, t);
                    return {
                        browser: o,
                        os: s,
                        deviceType: l
                    }
                },
                ef = function(e) {
                    return I.matchMedia(e).matches
                },
                ed = (a = function() {
                    return ec(j.userAgent, ef)
                }, s = !1, function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return s || (s = !0, o = a.apply(null, e)), o
                }),
                ep = j.userAgent,
                eh = ed(),
                em = eh.browser,
                eg = eh.os,
                ev = eh.deviceType,
                eb = /WebKit/.test(ep) && !em.isEdge(),
                ey = "FormData" in I && "FileReader" in I && "URL" in I && !!F.createObjectURL,
                ew = -1 !== ep.indexOf("Windows Phone"),
                ex = {
                    opera: em.isOpera(),
                    webkit: eb,
                    ie: !!(em.isIE() || em.isEdge()) && em.version.major,
                    gecko: em.isFirefox(),
                    mac: eg.isOSX() || eg.isiOS(),
                    iOS: ev.isiPad() || ev.isiPhone(),
                    android: eg.isAndroid(),
                    contentEditable: !0,
                    transparentSrc: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
                    caretAfter: !0,
                    range: I.getSelection && "Range" in I,
                    documentMode: em.isIE() ? S.documentMode || 7 : 10,
                    fileApi: ey,
                    ceFalse: !0,
                    cacheSuffix: null,
                    container: null,
                    experimentalShadowDom: !1,
                    canHaveCSP: !em.isIE(),
                    desktop: ev.isDesktop(),
                    windowsPhone: ew,
                    browser: {
                        current: em.current,
                        version: em.version,
                        isChrome: em.isChrome,
                        isEdge: em.isEdge,
                        isFirefox: em.isFirefox,
                        isIE: em.isIE,
                        isOpera: em.isOpera,
                        isSafari: em.isSafari
                    },
                    os: {
                        current: eg.current,
                        version: eg.version,
                        isAndroid: eg.isAndroid,
                        isChromeOS: eg.isChromeOS,
                        isFreeBSD: eg.isFreeBSD,
                        isiOS: eg.isiOS,
                        isLinux: eg.isLinux,
                        isOSX: eg.isOSX,
                        isSolaris: eg.isSolaris,
                        isWindows: eg.isWindows
                    },
                    deviceType: {
                        isDesktop: ev.isDesktop,
                        isiPad: ev.isiPad,
                        isiPhone: ev.isiPhone,
                        isPhone: ev.isPhone,
                        isTablet: ev.isTablet,
                        isTouch: ev.isTouch,
                        isWebView: ev.isWebView
                    }
                },
                e_ = Array.isArray,
                eC = function(e, t, n) {
                    var r, i;
                    if (!e) return 0;
                    if (n = n || e, void 0 !== e.length) {
                        for (r = 0, i = e.length; r < i; r++)
                            if (!1 === t.call(n, e[r], r, e)) return 0
                    } else
                        for (r in e)
                            if (e.hasOwnProperty(r) && !1 === t.call(n, e[r], r, e)) return 0;
                    return 1
                },
                ek = function(e, t) {
                    var n = [];
                    return eC(e, function(r, i) {
                        n.push(t(r, i, e))
                    }), n
                },
                eE = /^\s*|\s*$/g,
                eA = function(e) {
                    return null == e ? "" : ("" + e).replace(eE, "")
                },
                eO = function(e, t) {
                    return t ? !!("array" === t && e_(e)) || typeof e === t : void 0 !== e
                },
                eF = function(e, t, n, r) {
                    r = r || this, e && (n && (e = e[n]), eC(e, function(e, i) {
                        if (!1 === t.call(r, e, i, n)) return !1;
                        eF(e, t, n, r)
                    }))
                },
                eS = {
                    trim: eA,
                    isArray: e_,
                    is: eO,
                    toArray: function(e) {
                        var t, n, r = e;
                        if (!e_(e))
                            for (t = 0, r = [], n = e.length; t < n; t++) r[t] = e[t];
                        return r
                    },
                    makeMap: function(e, t, n) {
                        var r;
                        for (t = t || ",", "string" == typeof(e = e || []) && (e = e.split(t)), n = n || {}, r = e.length; r--;) n[e[r]] = {};
                        return n
                    },
                    each: eC,
                    map: ek,
                    grep: function(e, t) {
                        var n = [];
                        return eC(e, function(r, i) {
                            (!t || t(r, i, e)) && n.push(r)
                        }), n
                    },
                    inArray: function(e, t) {
                        var n, r;
                        if (e) {
                            for (n = 0, r = e.length; n < r; n++)
                                if (e[n] === t) return n
                        }
                        return -1
                    },
                    hasOwn: function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    },
                    extend: function(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            for (var a in i)
                                if (i.hasOwnProperty(a)) {
                                    var o = i[a];
                                    void 0 !== o && (e[a] = o)
                                }
                        }
                        return e
                    },
                    create: function(e, t, n) {
                        var r, i, a, o, s, l = 0;
                        if (a = (e = /^((static) )?([\w.]+)(:([\w.]+))?/.exec(e))[3].match(/(^|\.)(\w+)$/i)[2], !(i = this.createNS(e[3].replace(/\.\w+$/, ""), n))[a]) {
                            if ("static" === e[2]) {
                                i[a] = t, this.onCreate && this.onCreate(e[2], e[3], i[a]);
                                return
                            }
                            t[a] || (t[a] = function() {}, l = 1), i[a] = t[a], this.extend(i[a].prototype, t), e[5] && (r = this.resolve(e[5]).prototype, o = e[5].match(/\.(\w+)$/i)[1], s = i[a], l ? i[a] = function() {
                                return r[o].apply(this, arguments)
                            } : i[a] = function() {
                                return this.parent = r[o], s.apply(this, arguments)
                            }, i[a].prototype[a] = i[a], this.each(r, function(e, t) {
                                i[a].prototype[t] = r[t]
                            }), this.each(t, function(e, t) {
                                r[t] ? i[a].prototype[t] = function() {
                                    return this.parent = r[t], e.apply(this, arguments)
                                } : t !== a && (i[a].prototype[t] = e)
                            })), this.each(t.static, function(e, t) {
                                i[a][t] = e
                            })
                        }
                    },
                    walk: eF,
                    createNS: function(e, t) {
                        var n, r;
                        for (n = 0, t = t || I, e = e.split("."); n < e.length; n++) t[r = e[n]] || (t[r] = {}), t = t[r];
                        return t
                    },
                    resolve: function(e, t) {
                        var n, r;
                        for (n = 0, t = t || I, r = (e = e.split(".")).length; n < r && (t = t[e[n]]); n++);
                        return t
                    },
                    explode: function(e, t) {
                        return !e || eO(e, "array") ? e : ek(e.split(t || ","), eA)
                    },
                    _addCacheSuffix: function(e) {
                        return e
                    }
                },
                ej = function(e, t) {
                    b(t, function(t) {
                        e.attr(t, null)
                    })
                },
                eI = function(e, t, n) {
                    e.addNodeFilter("font", function(e) {
                        b(e, function(e) {
                            var r = t.parse(e.attr("style")),
                                i = e.attr("color"),
                                a = e.attr("face"),
                                o = e.attr("size");
                            i && (r.color = i), a && (r["font-family"] = a), o && (r["font-size"] = n[parseInt(e.attr("size"), 10) - 1]), e.name = "span", e.attr("style", t.serialize(r)), ej(e, ["color", "face", "size"])
                        })
                    })
                },
                eR = function(e, t) {
                    e.addNodeFilter("strike", function(e) {
                        b(e, function(e) {
                            var n = t.parse(e.attr("style"));
                            n["text-decoration"] = "line-through", e.name = "span", e.attr("style", t.serialize(n))
                        })
                    })
                },
                eP = function(e, t) {
                    var n = A();
                    t.convert_fonts_to_spans && eI(e, n, eS.explode(t.font_size_legacy_values)), eR(e, n)
                },
                eq = function(e, t) {
                    t.inline_styles && eP(e, t)
                },
                ez = /^[ \t\r\n]*$/,
                eD = {
                    "#text": 3,
                    "#comment": 8,
                    "#cdata": 4,
                    "#pi": 7,
                    "#doctype": 10,
                    "#document-fragment": 11
                },
                eT = function(e, t, n) {
                    var r = n ? "lastChild" : "firstChild",
                        i = n ? "prev" : "next";
                    if (e[r]) return e[r];
                    if (e !== t) {
                        var a = e[i];
                        if (a) return a;
                        for (var o = e.parent; o && o !== t; o = o.parent)
                            if (a = o[i]) return a
                    }
                },
                eL = function(e) {
                    if (!ez.test(e.value)) return !1;
                    var t = e.parent;
                    return !(t && ("span" !== t.name || t.attr("style")) && /^[ ]+$/.test(e.value))
                },
                eN = function(e) {
                    var t = "a" === e.name && !e.attr("href") && e.attr("id");
                    return e.attr("name") || e.attr("id") && !e.firstChild || e.attr("data-mce-bookmark") || t
                },
                eV = function() {
                    function e(e, t) {
                        this.name = e, this.type = t, 1 === t && (this.attributes = [], this.attributes.map = {})
                    }
                    return e.create = function(t, n) {
                        var r = new e(t, eD[t] || 1);
                        return n && _(n, function(e, t) {
                            r.attr(t, e)
                        }), r
                    }, e.prototype.replace = function(e) {
                        return e.parent && e.remove(), this.insert(e, this), this.remove(), this
                    }, e.prototype.attr = function(e, t) {
                        var n, r = this;
                        if ("string" != typeof e) return null != e && _(e, function(e, t) {
                            r.attr(t, e)
                        }), r;
                        if (n = r.attributes) {
                            if (void 0 !== t) {
                                if (null === t) {
                                    if (e in n.map) {
                                        delete n.map[e];
                                        for (var i = n.length; i--;)
                                            if (n[i].name === e) {
                                                n.splice(i, 1);
                                                break
                                            }
                                    }
                                    return r
                                }
                                if (e in n.map) {
                                    for (var i = n.length; i--;)
                                        if (n[i].name === e) {
                                            n[i].value = t;
                                            break
                                        }
                                } else n.push({
                                    name: e,
                                    value: t
                                });
                                return n.map[e] = t, r
                            }
                            return n.map[e]
                        }
                    }, e.prototype.clone = function() {
                        var t, n = new e(this.name, this.type);
                        if (t = this.attributes) {
                            var r = [];
                            r.map = {};
                            for (var i = 0, a = t.length; i < a; i++) {
                                var o = t[i];
                                "id" !== o.name && (r[r.length] = {
                                    name: o.name,
                                    value: o.value
                                }, r.map[o.name] = o.value)
                            }
                            n.attributes = r
                        }
                        return n.value = this.value, n.shortEnded = this.shortEnded, n
                    }, e.prototype.wrap = function(e) {
                        return this.parent.insert(e, this), e.append(this), this
                    }, e.prototype.unwrap = function() {
                        for (var e = this.firstChild; e;) {
                            var t = e.next;
                            this.insert(e, this, !0), e = t
                        }
                        this.remove()
                    }, e.prototype.remove = function() {
                        var e = this.parent,
                            t = this.next,
                            n = this.prev;
                        return e && (e.firstChild === this ? (e.firstChild = t, t && (t.prev = null)) : n.next = t, e.lastChild === this ? (e.lastChild = n, n && (n.next = null)) : t.prev = n, this.parent = this.next = this.prev = null), this
                    }, e.prototype.append = function(e) {
                        e.parent && e.remove();
                        var t = this.lastChild;
                        return t ? (t.next = e, e.prev = t, this.lastChild = e) : this.lastChild = this.firstChild = e, e.parent = this, e
                    }, e.prototype.insert = function(e, t, n) {
                        e.parent && e.remove();
                        var r = t.parent || this;
                        return n ? (t === r.firstChild ? r.firstChild = e : t.prev.next = e, e.prev = t.prev, e.next = t, t.prev = e) : (t === r.lastChild ? r.lastChild = e : t.next.prev = e, e.next = t.next, e.prev = t, t.next = e), e.parent = r, e
                    }, e.prototype.getAll = function(e) {
                        for (var t = [], n = this.firstChild; n; n = eT(n, this)) n.name === e && t.push(n);
                        return t
                    }, e.prototype.empty = function() {
                        if (this.firstChild) {
                            for (var e = [], t = this.firstChild; t; t = eT(t, this)) e.push(t);
                            for (var n = e.length; n--;) {
                                var t = e[n];
                                t.parent = t.firstChild = t.lastChild = t.next = t.prev = null
                            }
                        }
                        return this.firstChild = this.lastChild = null, this
                    }, e.prototype.isEmpty = function(e, t, n) {
                        void 0 === t && (t = {});
                        var r = this.firstChild;
                        if (eN(this)) return !1;
                        if (r)
                            do {
                                if (1 === r.type) {
                                    if (r.attr("data-mce-bogus")) continue;
                                    if (e[r.name] || eN(r)) return !1
                                }
                                if (8 === r.type || 3 === r.type && !eL(r) || 3 === r.type && r.parent && t[r.parent.name] && ez.test(r.value) || n && n(r)) return !1
                            } while (r = eT(r, this)) return !0
                    }, e.prototype.walk = function(e) {
                        return eT(this, null, e)
                    }, e
                }();
            window.Promise ? window.Promise : function() {
                function e(e, t) {
                    return function() {
                        e.apply(t, arguments)
                    }
                }
                var t = Array.isArray || function(e) {
                        return "[object Array]" === Object.prototype.toString.call(e)
                    },
                    n = function(t) {
                        if ("object" != typeof this) throw TypeError("Promises must be constructed via new");
                        if ("function" != typeof t) throw TypeError("not a function");
                        this._state = null, this._value = null, this._deferreds = [], u(t, e(a, this), e(o, this))
                    },
                    r = n.immediateFn || "function" == typeof P && P || function(e) {
                        R(e, 1)
                    };

                function i(e) {
                    var t = this;
                    null === this._state ? this._deferreds.push(e) : r(function() {
                        var n, r = t._state ? e.onFulfilled : e.onRejected;
                        if (null === r) return void(t._state ? e.resolve : e.reject)(t._value);
                        try {
                            n = r(t._value)
                        } catch (t) {
                            e.reject(t);
                            return
                        }
                        e.resolve(n)
                    })
                }

                function a(t) {
                    try {
                        if (t === this) throw TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var n = t.then;
                            if ("function" == typeof n) return void u(e(n, t), e(a, this), e(o, this))
                        }
                        this._state = !0, this._value = t, s.call(this)
                    } catch (e) {
                        o.call(this, e)
                    }
                }

                function o(e) {
                    this._state = !1, this._value = e, s.call(this)
                }

                function s() {
                    for (var e = 0, t = this._deferreds.length; e < t; e++) i.call(this, this._deferreds[e]);
                    this._deferreds = null
                }

                function l(e, t, n, r) {
                    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.resolve = n, this.reject = r
                }

                function u(e, t, n) {
                    var r = !1;
                    try {
                        e(function(e) {
                            r || (r = !0, t(e))
                        }, function(e) {
                            r || (r = !0, n(e))
                        })
                    } catch (e) {
                        if (r) return;
                        r = !0, n(e)
                    }
                }
                n.prototype.catch = function(e) {
                    return this.then(null, e)
                }, n.prototype.then = function(e, t) {
                    var r = this;
                    return new n(function(n, a) {
                        i.call(r, new l(e, t, n, a))
                    })
                }, n.all = function() {
                    var e = Array.prototype.slice.call(1 == arguments.length && t(arguments[0]) ? arguments[0] : arguments);
                    return new n(function(t, n) {
                        if (0 === e.length) return t([]);
                        for (var r = e.length, i = 0; i < e.length; i++) ! function i(a, o) {
                            try {
                                if (o && ("object" == typeof o || "function" == typeof o)) {
                                    var s = o.then;
                                    if ("function" == typeof s) return void s.call(o, function(e) {
                                        i(a, e)
                                    }, n)
                                }
                                e[a] = o, 0 == --r && t(e)
                            } catch (e) {
                                n(e)
                            }
                        }(i, e[i])
                    })
                }, n.resolve = function(e) {
                    return e && "object" == typeof e && e.constructor === n ? e : new n(function(t) {
                        t(e)
                    })
                }, n.reject = function(e) {
                    return new n(function(t, n) {
                        n(e)
                    })
                }, n.race = function(e) {
                    return new n(function(t, n) {
                        for (var r = 0, i = e.length; r < i; r++) e[r].then(t, n)
                    })
                }
            }();
            var e$ = function(e, t) {
                    try {
                        n = q(t)
                    } catch (e) {
                        return h()
                    }
                    for (var n, r = new Uint8Array(n.length), i = 0; i < r.length; i++) r[i] = n.charCodeAt(i);
                    return g(new O([r], {
                        type: e
                    }))
                },
                eB = 0,
                eM = 0,
                eW = function(e) {
                    var t = new Date().getTime();
                    return e + "_" + Math.floor(1e9 * Math.random()) + ++eM + String(t)
                },
                eU = function(e) {
                    for (var t, n = /data:[^;]+;base64,([a-z0-9\+\/=]+)/gi, r = [], i = {}, a = eW("img"), o = 0, s = 0; t = n.exec(e);) {
                        var l = t[0],
                            u = a + "_" + s++;
                        i[u] = l, o < t.index && r.push(e.substr(o, t.index - o)), r.push(u), o = t.index + l.length
                    }
                    return 0 === o ? {
                        prefix: a,
                        uris: i,
                        html: e
                    } : (o < e.length && r.push(e.substr(o)), {
                        prefix: a,
                        uris: i,
                        html: r.join("")
                    })
                },
                eX = function(e, t) {
                    return e.replace(RegExp(t.prefix + "_[0-9]+", "g"), function(e) {
                        return C(t.uris, e).getOr(e)
                    })
                },
                eH = function(e) {
                    var t = /data:([^;]+);base64,([a-z0-9\+\/=]+)/i.exec(e);
                    return t ? g({
                        type: t[1],
                        data: decodeURIComponent(t[2])
                    }) : h()
                },
                eZ = function(e, t, n, r) {
                    (e.padd_empty_with_br || t.insert) && n[r.name] ? r.empty().append(new eV("br", 1)).shortEnded = !0 : r.empty().append(new eV("#text", 3)).value = " "
                },
                eY = function(e, t) {
                    return e && e.firstChild && e.firstChild === e.lastChild && e.firstChild.name === t
                },
                eG = function(e, t) {
                    var n = e.getElementRule(t.name);
                    return n && n.paddEmpty
                },
                eK = function(e, t, n, r) {
                    return r.isEmpty(t, n, function(t) {
                        return eG(e, t)
                    })
                },
                eQ = function(e, t) {
                    var n = t.blob_cache,
                        r = function(e) {
                            var t = e.attr("src");
                            t !== ex.transparentSrc && eH(t).bind(function(e) {
                                var t = e.type,
                                    r = e.data;
                                return v(n.getByData(r, t)).orThunk(function() {
                                    return e$(t, r).map(function(e) {
                                        var t = n.create("blobid" + eB++, e, r);
                                        return n.add(t), t
                                    })
                                })
                            }).each(function(t) {
                                e.attr("src", t.blobUri())
                            })
                        };
                    n && e.addAttributeFilter("src", function(e) {
                        return b(e, r)
                    })
                },
                eJ = function(e, t) {
                    var n = e.schema;
                    t.remove_trailing_brs && e.addNodeFilter("br", function(e, r, i) {
                        var a, o, s, l, u, c, f, d, p = e.length,
                            h = eS.extend({}, n.getBlockElements()),
                            m = n.getNonEmptyElements(),
                            g = n.getNonEmptyElements();
                        for (a = 0, h.body = 1; a < p; a++)
                            if (s = (o = e[a]).parent, h[o.parent.name] && o === s.lastChild) {
                                for (u = o.prev; u;) {
                                    if ("span" !== (c = u.name) || "bookmark" !== u.attr("data-mce-type")) {
                                        if ("br" !== c) break;
                                        if ("br" === c) {
                                            o = null;
                                            break
                                        }
                                    }
                                    u = u.prev
                                }
                                o && (o.remove(), eK(n, m, g, s) && (f = n.getElementRule(s.name)) && (f.removeEmpty ? s.remove() : f.paddEmpty && eZ(t, i, h, s)))
                            } else {
                                for (l = o; s && s.firstChild === l && s.lastChild === l && (l = s, !h[s.name]);) s = s.parent;
                                l === s && !0 !== t.padd_empty_with_br && ((d = new eV("#text", 3)).value = " ", o.replace(d))
                            }
                    }), e.addAttributeFilter("href", function(e) {
                        var n = e.length;
                        if (!t.allow_unsafe_link_target)
                            for (; n--;) {
                                var r = e[n];
                                "a" === r.name && "_blank" === r.attr("target") && r.attr("rel", function(e) {
                                    var t = e ? eS.trim(e) : "";
                                    return /\b(noopener)\b/g.test(t) ? t : t.split(" ").filter(function(e) {
                                        return e.length > 0
                                    }).concat(["noopener"]).sort().join(" ")
                                }(r.attr("rel")))
                            }
                    }), t.allow_html_in_named_anchor || e.addAttributeFilter("id,name", function(e) {
                        for (var t, n, r, i, a = e.length; a--;)
                            if ("a" === (i = e[a]).name && i.firstChild && !i.attr("href")) {
                                r = i.parent, t = i.lastChild;
                                do n = t.prev, r.insert(t, i), t = n; while (t)
                            }
                    }), t.fix_list_elements && e.addNodeFilter("ul,ol", function(e) {
                        for (var t, n, r = e.length; r--;)
                            if ("ul" === (n = (t = e[r]).parent).name || "ol" === n.name)
                                if (t.prev && "li" === t.prev.name) t.prev.append(t);
                                else {
                                    var i = new eV("li", 1);
                                    i.attr("style", "list-style-type: none"), t.wrap(i)
                                }
                    }), t.validate && n.getValidClasses() && e.addAttributeFilter("class", function(e) {
                        for (var t, r, i, a, o, s, l, u = e.length, c = n.getValidClasses(); u--;) {
                            for (o = 0, a = (i = e[u]).attr("class").split(" "), l = ""; o < a.length; o++) s = a[o], r = !1, (t = c["*"]) && t[s] && (r = !0), t = c[i.name], !r && t && t[s] && (r = !0), r && (l && (l += " "), l += s);
                            l.length || (l = null), i.attr("class", l)
                        }
                    }), eQ(e, t)
                },
                e0 = function(e) {
                    if (null == e) throw Error("Node cannot be null or undefined");
                    return {
                        dom: f(e)
                    }
                },
                e1 = eS.makeMap,
                e8 = /[&<>\"\u0060\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                e5 = /[<>&\u007E-\uD7FF\uE000-\uFFEF]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                e6 = /&#([a-z0-9]+);?|&([a-z0-9]+);/gi,
                e9 = {
                    128: "€",
                    130: "‚",
                    131: "ƒ",
                    132: "„",
                    133: "…",
                    134: "†",
                    135: "‡",
                    136: "ˆ",
                    137: "‰",
                    138: "Š",
                    139: "‹",
                    140: "Œ",
                    142: "Ž",
                    145: "‘",
                    146: "’",
                    147: "“",
                    148: "”",
                    149: "•",
                    150: "–",
                    151: "—",
                    152: "˜",
                    153: "™",
                    154: "š",
                    155: "›",
                    156: "œ",
                    158: "ž",
                    159: "Ÿ"
                };
            u = {
                '"': "&quot;",
                "'": "&#39;",
                "<": "&lt;",
                ">": "&gt;",
                "&": "&amp;",
                "`": "&#96;"
            }, c = {
                "&lt;": "<",
                "&gt;": ">",
                "&amp;": "&",
                "&quot;": '"',
                "&apos;": "'"
            };
            var e2 = function(e) {
                    var t;
                    return (t = e0(S.createElement("div")).dom()).innerHTML = e, t.textContent || t.innerText || e
                },
                e3 = function(e, t) {
                    var n, r, i, a = {};
                    if (e) {
                        for (n = 0, e = e.split(","), t = t || 10; n < e.length; n += 2) u[r = String.fromCharCode(parseInt(e[n], t))] || (i = "&" + e[n + 1] + ";", a[r] = i, a[i] = r);
                        return a
                    }
                };
            l = e3("50,nbsp,51,iexcl,52,cent,53,pound,54,curren,55,yen,56,brvbar,57,sect,58,uml,59,copy,5a,ordf,5b,laquo,5c,not,5d,shy,5e,reg,5f,macr,5g,deg,5h,plusmn,5i,sup2,5j,sup3,5k,acute,5l,micro,5m,para,5n,middot,5o,cedil,5p,sup1,5q,ordm,5r,raquo,5s,frac14,5t,frac12,5u,frac34,5v,iquest,60,Agrave,61,Aacute,62,Acirc,63,Atilde,64,Auml,65,Aring,66,AElig,67,Ccedil,68,Egrave,69,Eacute,6a,Ecirc,6b,Euml,6c,Igrave,6d,Iacute,6e,Icirc,6f,Iuml,6g,ETH,6h,Ntilde,6i,Ograve,6j,Oacute,6k,Ocirc,6l,Otilde,6m,Ouml,6n,times,6o,Oslash,6p,Ugrave,6q,Uacute,6r,Ucirc,6s,Uuml,6t,Yacute,6u,THORN,6v,szlig,70,agrave,71,aacute,72,acirc,73,atilde,74,auml,75,aring,76,aelig,77,ccedil,78,egrave,79,eacute,7a,ecirc,7b,euml,7c,igrave,7d,iacute,7e,icirc,7f,iuml,7g,eth,7h,ntilde,7i,ograve,7j,oacute,7k,ocirc,7l,otilde,7m,ouml,7n,divide,7o,oslash,7p,ugrave,7q,uacute,7r,ucirc,7s,uuml,7t,yacute,7u,thorn,7v,yuml,ci,fnof,sh,Alpha,si,Beta,sj,Gamma,sk,Delta,sl,Epsilon,sm,Zeta,sn,Eta,so,Theta,sp,Iota,sq,Kappa,sr,Lambda,ss,Mu,st,Nu,su,Xi,sv,Omicron,t0,Pi,t1,Rho,t3,Sigma,t4,Tau,t5,Upsilon,t6,Phi,t7,Chi,t8,Psi,t9,Omega,th,alpha,ti,beta,tj,gamma,tk,delta,tl,epsilon,tm,zeta,tn,eta,to,theta,tp,iota,tq,kappa,tr,lambda,ts,mu,tt,nu,tu,xi,tv,omicron,u0,pi,u1,rho,u2,sigmaf,u3,sigma,u4,tau,u5,upsilon,u6,phi,u7,chi,u8,psi,u9,omega,uh,thetasym,ui,upsih,um,piv,812,bull,816,hellip,81i,prime,81j,Prime,81u,oline,824,frasl,88o,weierp,88h,image,88s,real,892,trade,89l,alefsym,8cg,larr,8ch,uarr,8ci,rarr,8cj,darr,8ck,harr,8dl,crarr,8eg,lArr,8eh,uArr,8ei,rArr,8ej,dArr,8ek,hArr,8g0,forall,8g2,part,8g3,exist,8g5,empty,8g7,nabla,8g8,isin,8g9,notin,8gb,ni,8gf,prod,8gh,sum,8gi,minus,8gn,lowast,8gq,radic,8gt,prop,8gu,infin,8h0,ang,8h7,and,8h8,or,8h9,cap,8ha,cup,8hb,int,8hk,there4,8hs,sim,8i5,cong,8i8,asymp,8j0,ne,8j1,equiv,8j4,le,8j5,ge,8k2,sub,8k3,sup,8k4,nsub,8k6,sube,8k7,supe,8kl,oplus,8kn,otimes,8l5,perp,8m5,sdot,8o8,lceil,8o9,rceil,8oa,lfloor,8ob,rfloor,8p9,lang,8pa,rang,9ea,loz,9j0,spades,9j3,clubs,9j5,hearts,9j6,diams,ai,OElig,aj,oelig,b0,Scaron,b1,scaron,bo,Yuml,m6,circ,ms,tilde,802,ensp,803,emsp,809,thinsp,80c,zwnj,80d,zwj,80e,lrm,80f,rlm,80j,ndash,80k,mdash,80o,lsquo,80p,rsquo,80q,sbquo,80s,ldquo,80t,rdquo,80u,bdquo,810,dagger,811,Dagger,81g,permil,81p,lsaquo,81q,rsaquo,85c,euro", 32);
            var e7 = function(e, t) {
                    return e.replace(t ? e8 : e5, function(e) {
                        return u[e] || e
                    })
                },
                e4 = function(e, t) {
                    return e.replace(t ? e8 : e5, function(e) {
                        return e.length > 1 ? "&#" + ((e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320) + 65536) + ";" : u[e] || "&#" + e.charCodeAt(0) + ";"
                    })
                },
                te = function(e, t, n) {
                    return n = n || l, e.replace(t ? e8 : e5, function(e) {
                        return u[e] || n[e] || e
                    })
                },
                tt = function(e, t) {
                    var n = e3(t) || l,
                        r = e1(e.replace(/\+/g, ","));
                    return r.named && r.numeric ? function(e, t) {
                        return e.replace(t ? e8 : e5, function(e) {
                            return void 0 !== u[e] ? u[e] : void 0 !== n[e] ? n[e] : e.length > 1 ? "&#" + ((e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320) + 65536) + ";" : "&#" + e.charCodeAt(0) + ";"
                        })
                    } : r.named ? t ? function(e, t) {
                        return te(e, t, n)
                    } : te : r.numeric ? e4 : e7
                },
                tn = function(e) {
                    return e.replace(e6, function(e, t) {
                        return t ? (t = "x" === t.charAt(0).toLowerCase() ? parseInt(t.substr(1), 16) : parseInt(t, 10)) > 65535 ? String.fromCharCode(55296 + ((t -= 65536) >> 10), 56320 + (1023 & t)) : e9[t] || String.fromCharCode(t) : c[e] || l[e] || e2(e)
                    })
                },
                tr = {},
                ti = {},
                ta = eS.makeMap,
                to = eS.each,
                ts = eS.extend,
                tl = eS.explode,
                tu = eS.inArray,
                tc = function(e, t) {
                    return (e = eS.trim(e)) ? e.split(t || " ") : []
                },
                tf = function(e) {
                    var t, n, r, i, a = {},
                        o = function(e, n, r) {
                            var i, o, s, l = function(e, t) {
                                var n, r, i = {};
                                for (n = 0, r = e.length; n < r; n++) i[e[n]] = t || {};
                                return i
                            };
                            for (n = n || "", "string" == typeof(r = r || []) && (r = tc(r)), i = (e = tc(e)).length; i--;) s = {
                                attributes: l(o = tc([t, n].join(" "))),
                                attributesOrder: o,
                                children: l(r, ti)
                            }, a[e[i]] = s
                        },
                        s = function(e, t) {
                            var n, r, i, o;
                            for (n = (e = tc(e)).length, t = tc(t); n--;)
                                for (i = 0, r = a[e[n]], o = t.length; i < o; i++) r.attributes[t[i]] = {}, r.attributesOrder.push(t[i])
                        };
                    return tr[e] ? tr[e] : (t = "id accesskey class dir lang style tabindex title role", n = "address blockquote div dl fieldset form h1 h2 h3 h4 h5 h6 hr menu ol p pre table ul", r = "a abbr b bdo br button cite code del dfn em embed i iframe img input ins kbd label map noscript object q s samp script select small span strong sub sup textarea u var #text #comment", "html4" !== e && (t += " contenteditable contextmenu draggable dropzone hidden spellcheck translate", n += " article aside details dialog figure main header footer hgroup section nav", r += " audio canvas command datalist mark meter output picture progress time wbr video ruby bdi keygen"), "html5-strict" !== e && (t += " xml:lang", r = [r, "acronym applet basefont big font strike tt"].join(" "), to(tc("acronym applet basefont big font strike tt"), function(e) {
                        o(e, "", r)
                    }), i = [n = [n, "center dir isindex noframes"].join(" "), r].join(" "), to(tc("center dir isindex noframes"), function(e) {
                        o(e, "", i)
                    })), i = i || [n, r].join(" "), o("html", "manifest", "head body"), o("head", "", "base command link meta noscript script style title"), o("title hr noscript br"), o("base", "href target"), o("link", "href rel media hreflang type sizes hreflang"), o("meta", "name http-equiv content charset"), o("style", "media type scoped"), o("script", "src async defer type charset"), o("body", "onafterprint onbeforeprint onbeforeunload onblur onerror onfocus onhashchange onload onmessage onoffline ononline onpagehide onpageshow onpopstate onresize onscroll onstorage onunload", i), o("address dt dd div caption", "", i), o("h1 h2 h3 h4 h5 h6 pre p abbr code var samp kbd sub sup i b u bdo span legend em strong small s cite dfn", "", r), o("blockquote", "cite", i), o("ol", "reversed start type", "li"), o("ul", "", "li"), o("li", "value", i), o("dl", "", "dt dd"), o("a", "href target rel media hreflang type", r), o("q", "cite", r), o("ins del", "cite datetime", i), o("img", "src sizes srcset alt usemap ismap width height"), o("iframe", "src name width height", i), o("embed", "src type width height"), o("object", "data type typemustmatch name usemap form width height", [i, "param"].join(" ")), o("param", "name value"), o("map", "name", [i, "area"].join(" ")), o("area", "alt coords shape href target rel media hreflang type"), o("table", "border", "caption colgroup thead tfoot tbody tr" + ("html4" === e ? " col" : "")), o("colgroup", "span", "col"), o("col", "span"), o("tbody thead tfoot", "", "tr"), o("tr", "", "td th"), o("td", "colspan rowspan headers", i), o("th", "colspan rowspan headers scope abbr", i), o("form", "accept-charset action autocomplete enctype method name novalidate target", i), o("fieldset", "disabled form name", [i, "legend"].join(" ")), o("label", "form for", r), o("input", "accept alt autocomplete checked dirname disabled form formaction formenctype formmethod formnovalidate formtarget height list max maxlength min multiple name pattern readonly required size src step type value width"), o("button", "disabled form formaction formenctype formmethod formnovalidate formtarget name type value", "html4" === e ? i : r), o("select", "disabled form multiple name required size", "option optgroup"), o("optgroup", "disabled label", "option"), o("option", "disabled label selected value"), o("textarea", "cols dirname disabled form maxlength name readonly required rows wrap"), o("menu", "type label", [i, "li"].join(" ")), o("noscript", "", i), "html4" !== e && (o("wbr"), o("ruby", "", [r, "rt rp"].join(" ")), o("figcaption", "", i), o("mark rt rp summary bdi", "", r), o("canvas", "width height", i), o("video", "src crossorigin poster preload autoplay mediagroup loop muted controls width height buffered", [i, "track source"].join(" ")), o("audio", "src crossorigin preload autoplay mediagroup loop muted controls buffered volume", [i, "track source"].join(" ")), o("picture", "", "img source"), o("source", "src srcset type media sizes"), o("track", "kind src srclang label default"), o("datalist", "", [r, "option"].join(" ")), o("article section nav aside main header footer", "", i), o("hgroup", "", "h1 h2 h3 h4 h5 h6"), o("figure", "", [i, "figcaption"].join(" ")), o("time", "datetime", r), o("dialog", "open", i), o("command", "type label icon disabled checked radiogroup command"), o("output", "for form name", r), o("progress", "value max", r), o("meter", "value min max low high optimum", r), o("details", "open", [i, "summary"].join(" ")), o("keygen", "autofocus challenge disabled form keytype name")), "html5-strict" !== e && (s("script", "language xml:space"), s("style", "xml:space"), s("object", "declare classid code codebase codetype archive standby align border hspace vspace"), s("embed", "align name hspace vspace"), s("param", "valuetype type"), s("a", "charset name rev shape coords"), s("br", "clear"), s("applet", "codebase archive code object alt name width height align hspace vspace"), s("img", "name longdesc align border hspace vspace"), s("iframe", "longdesc frameborder marginwidth marginheight scrolling align"), s("font basefont", "size color face"), s("input", "usemap align"), s("select"), s("textarea"), s("h1 h2 h3 h4 h5 h6 div p legend caption", "align"), s("ul", "type compact"), s("li", "type"), s("ol dl menu dir", "compact"), s("pre", "width xml:space"), s("hr", "align noshade size width"), s("isindex", "prompt"), s("table", "summary width frame rules cellspacing cellpadding align bgcolor"), s("col", "width align char charoff valign"), s("colgroup", "width align char charoff valign"), s("thead", "align char charoff valign"), s("tr", "align char charoff valign bgcolor"), s("th", "axis align char charoff valign nowrap bgcolor width height"), s("form", "accept"), s("td", "abbr axis scope align char charoff valign nowrap bgcolor width height"), s("tfoot", "align char charoff valign"), s("tbody", "align char charoff valign"), s("area", "nohref"), s("body", "background bgcolor text link vlink alink")), "html4" !== e && (s("input button select textarea", "autofocus"), s("input textarea", "placeholder"), s("a", "download"), s("link script img", "crossorigin"), s("img", "loading"), s("iframe", "sandbox seamless allowfullscreen loading")), to(tc("a form meter progress dfn"), function(e) {
                        a[e] && delete a[e].children[e]
                    }), delete a.caption.children.table, delete a.script, tr[e] = a, a)
                },
                td = function(e, t) {
                    var n;
                    return e && (n = {}, "string" == typeof e && (e = {
                        "*": e
                    }), to(e, function(e, r) {
                        n[r] = n[r.toUpperCase()] = "map" === t ? ta(e, /[, ]/) : tl(e, /[, ]/)
                    })), n
                };

            function tp(e) {
                var t, n, r, i, a, o, s, l, u, c, f, d, p, h = {},
                    m = {},
                    g = [],
                    v = {},
                    b = {},
                    y = function(t, n, r) {
                        var i = e[t];
                        return i ? i = ta(i, /[, ]/, ta(i.toUpperCase(), /[, ]/)) : (i = tr[t]) || (i = ts(i = ta(n, " ", ta(n.toUpperCase(), " ")), r), tr[t] = i), i
                    };
                r = tf((e = e || {}).schema), !1 === e.verify_html && (e.valid_elements = "*[*]"), t = td(e.valid_styles), n = td(e.invalid_styles, "map"), l = td(e.valid_classes, "map"), i = y("whitespace_elements", "pre script noscript style textarea video audio iframe object code"), a = y("self_closing_elements", "colgroup dd dt li option p td tfoot th thead tr"), o = y("short_ended_elements", "area base basefont br col frame hr img input isindex link meta param embed source wbr track"), s = y("boolean_attributes", "checked compact declare defer disabled ismap multiple nohref noresize noshade nowrap readonly selected autoplay loop controls"), c = y("non_empty_elements", "td th iframe video audio object script pre code", o), f = y("move_caret_before_on_enter_elements", "table", c), d = y("text_block_elements", "h1 h2 h3 h4 h5 h6 p div address pre form blockquote center dir fieldset header footer article section hgroup aside main nav figure"), u = y("block_elements", "hr table tbody thead tfoot th tr td li ol ul caption dl dt dd noscript menu isindex option datalist select optgroup figcaption details summary", d), p = y("text_inline_elements", "span strong b em i font strike u var cite dfn code mark q sup sub samp"), to((e.special || "script noscript noframes noembed title style textarea xmp").split(" "), function(e) {
                    b[e] = RegExp("</" + e + "[^>]*>", "gi")
                });
                var w = function(e) {
                        return RegExp("^" + e.replace(/([?+*])/g, ".$1") + "$")
                    },
                    x = function(e) {
                        var t, n, r, i, a, o, s, l, u, c, f, d, p, m, v, b, y, x, C = /^([#+\-])?([^\[!\/]+)(?:\/([^\[!]+))?(?:(!?)\[([^\]]+)\])?$/,
                            k = /^([!\-])?(\w+[\\:]:\w+|[^=:<]+)?(?:([=:<])(.*))?$/,
                            E = /[*?+]/;
                        if (e) {
                            for (e = tc(e, ","), h["@"] && (b = h["@"].attributes, y = h["@"].attributesOrder), t = 0, n = e.length; t < n; t++)
                                if (a = C.exec(e[t])) {
                                    if (m = a[1], u = a[2], v = a[3], l = a[5], o = {
                                            attributes: d = {},
                                            attributesOrder: p = []
                                        }, "#" === m && (o.paddEmpty = !0), "-" === m && (o.removeEmpty = !0), "!" === a[4] && (o.removeEmptyAttrs = !0), b && (_(b, function(e, t) {
                                            d[t] = e
                                        }), p.push.apply(p, y)), l) {
                                        for (r = 0, i = (l = tc(l, "|")).length; r < i; r++)
                                            if (a = k.exec(l[r])) {
                                                if (s = {}, f = a[1], c = a[2].replace(/[\\:]:/g, ":"), m = a[3], x = a[4], "!" === f && (o.attributesRequired = o.attributesRequired || [], o.attributesRequired.push(c), s.required = !0), "-" === f) {
                                                    delete d[c], p.splice(tu(p, c), 1);
                                                    continue
                                                }
                                                m && ("=" === m && (o.attributesDefault = o.attributesDefault || [], o.attributesDefault.push({
                                                    name: c,
                                                    value: x
                                                }), s.defaultValue = x), ":" === m && (o.attributesForced = o.attributesForced || [], o.attributesForced.push({
                                                    name: c,
                                                    value: x
                                                }), s.forcedValue = x), "<" === m && (s.validValues = ta(x, "?"))), E.test(c) ? (o.attributePatterns = o.attributePatterns || [], s.pattern = w(c), o.attributePatterns.push(s)) : (d[c] || p.push(c), d[c] = s)
                                            }
                                    }
                                    b || "@" !== u || (b = d, y = p), v && (o.outputName = u, h[v] = o), E.test(u) ? (o.pattern = w(u), g.push(o)) : h[u] = o
                                }
                        }
                    },
                    C = function(e) {
                        h = {}, g = [], x(e), to(r, function(e, t) {
                            m[t] = e.children
                        })
                    },
                    k = function(e) {
                        var t = /^(~)?(.+)$/;
                        e && (tr.text_block_elements = tr.block_elements = null, to(tc(e, ","), function(e) {
                            var n = t.exec(e),
                                r = "~" === n[1],
                                i = r ? "span" : "div",
                                a = n[2];
                            if (m[a] = m[i], v[a] = i, r || (u[a.toUpperCase()] = {}, u[a] = {}), !h[a]) {
                                var o = h[i];
                                o = ts({}, o), delete o.removeEmptyAttrs, delete o.removeEmpty, h[a] = o
                            }
                            to(m, function(e, t) {
                                e[i] && (m[t] = e = ts({}, m[t]), e[a] = e[i])
                            })
                        }))
                    },
                    E = function(t) {
                        var n = /^([+\-]?)(\w+)\[([^\]]+)\]$/;
                        tr[e.schema] = null, t && to(tc(t, ","), function(e) {
                            var t, r, i = n.exec(e);
                            i && (t = (r = i[1]) ? m[i[2]] : m[i[2]] = {
                                "#comment": {}
                            }, t = m[i[2]], to(tc(i[3], "|"), function(e) {
                                "-" === r ? delete t[e] : t[e] = {}
                            }))
                        })
                    },
                    A = function(e) {
                        var t, n = h[e];
                        if (n) return n;
                        for (t = g.length; t--;)
                            if ((n = g[t]).pattern.test(e)) return n
                    };
                return e.valid_elements ? C(e.valid_elements) : (to(r, function(e, t) {
                    h[t] = {
                        attributes: e.attributes,
                        attributesOrder: e.attributesOrder
                    }, m[t] = e.children
                }), "html5" !== e.schema && to(tc("strong/b em/i"), function(e) {
                    h[(e = tc(e, "/"))[1]].outputName = e[0]
                }), to(tc("ol ul sub sup blockquote span font a table tbody tr strong em b i"), function(e) {
                    h[e] && (h[e].removeEmpty = !0)
                }), to(tc("p h1 h2 h3 h4 h5 h6 th td pre div address caption li"), function(e) {
                    h[e].paddEmpty = !0
                }), to(tc("span"), function(e) {
                    h[e].removeEmptyAttrs = !0
                })), k(e.custom_elements), E(e.valid_children), x(e.extended_valid_elements), E("+ol[ul|ol],+ul[ul|ol]"), to({
                    dd: "dl",
                    dt: "dl",
                    li: "ul ol",
                    td: "tr",
                    th: "tr",
                    tr: "tbody thead tfoot",
                    tbody: "table",
                    thead: "table",
                    tfoot: "table",
                    legend: "fieldset",
                    area: "map",
                    param: "video audio object"
                }, function(e, t) {
                    h[t] && (h[t].parentsRequired = tc(e))
                }), e.invalid_elements && to(tl(e.invalid_elements), function(e) {
                    h[e] && delete h[e]
                }), A("span") || x("span[!data-mce-type|*]"), {
                    children: m,
                    elements: h,
                    getValidStyles: function() {
                        return t
                    },
                    getValidClasses: function() {
                        return l
                    },
                    getBlockElements: function() {
                        return u
                    },
                    getInvalidStyles: function() {
                        return n
                    },
                    getShortEndedElements: function() {
                        return o
                    },
                    getTextBlockElements: function() {
                        return d
                    },
                    getTextInlineElements: function() {
                        return p
                    },
                    getBoolAttrs: function() {
                        return s
                    },
                    getElementRule: A,
                    getSelfClosingElements: function() {
                        return a
                    },
                    getNonEmptyElements: function() {
                        return c
                    },
                    getMoveCaretBeforeOnEnterElements: function() {
                        return f
                    },
                    getWhiteSpaceElements: function() {
                        return i
                    },
                    getSpecialElements: function() {
                        return b
                    },
                    isValidChild: function(e, t) {
                        var n = m[e.toLowerCase()];
                        return !!(n && n[t.toLowerCase()])
                    },
                    isValid: function(e, t) {
                        var n, r, i = A(e);
                        if (i)
                            if (!t) return !0;
                            else {
                                if (i.attributes[t]) return !0;
                                if (n = i.attributePatterns) {
                                    for (r = n.length; r--;)
                                        if (n[r].pattern.test(e)) return !0
                                }
                            }
                        return !1
                    },
                    getCustomElements: function() {
                        return v
                    },
                    addValidElements: x,
                    setValidElements: C,
                    addCustomElements: k,
                    addValidChildren: E
                }
            }
            var th = function(e, t, n) {
                    var r, i, a, o, s = 1;
                    for (o = e.getShortEndedElements(), (a = /<([!?\/])?([A-Za-z0-9\-_\:\.]+)((?:\s+[^"\'>]+(?:(?:"[^"]*")|(?:\'[^\']*\')|[^>]*))*|\/|\s+)>/g).lastIndex = r = n; i = a.exec(t);) {
                        if (r = a.lastIndex, "/" === i[1]) s--;
                        else if (!i[1]) {
                            if (i[2] in o) continue;
                            s++
                        }
                        if (0 === s) break
                    }
                    return r
                },
                tm = function(e, t, n) {
                    void 0 === n && (n = 0);
                    var r, i = e.toLowerCase();
                    if (-1 !== i.indexOf("[if ", n) && (r = n, /^\s*\[if [\w\W]+\]>.*<!\[endif\](--!?)?>/.test(i.substr(r)))) {
                        var a = i.indexOf("[endif]", n);
                        return i.indexOf(">", a)
                    }
                    if (t) {
                        var o = i.indexOf(">", n);
                        return -1 !== o ? o : i.length
                    }
                    var s = /--!?>/;
                    s.lastIndex = n;
                    var l = s.exec(e);
                    return l ? l.index + l[0].length : i.length
                },
                tg = function(e, t) {
                    var n = e.exec(t);
                    if (!n) return null;
                    var r = n[1],
                        i = n[2];
                    return "string" == typeof r && "data-mce-bogus" === r.toLowerCase() ? i : null
                };

            function tv(e, t) {
                void 0 === t && (t = tp());
                var n = function() {};
                !1 !== (e = e || {}).fix_self_closing && (e.fix_self_closing = !0);
                var r = e.comment ? e.comment : n,
                    i = e.cdata ? e.cdata : n,
                    a = e.text ? e.text : n,
                    o = e.start ? e.start : n,
                    s = e.end ? e.end : n,
                    l = e.pi ? e.pi : n,
                    u = e.doctype ? e.doctype : n,
                    c = function(n, c) {
                        void 0 === c && (c = "html");
                        var f, d, p, h, m, g, v, b, y, w, x, _, k, E, A, O, F, S, j, I, R, P, q, z, D, T, L, N, V, $ = n.html,
                            B = 0,
                            M = [],
                            W = 0,
                            U = eS.makeMap("src,href,data,background,formaction,poster,xlink:href"),
                            X = /((java|vb)script|mhtml):/i,
                            H = +("html" !== c),
                            Z = function(e) {
                                var t, n;
                                for (t = M.length; t-- && M[t].name !== e;);
                                if (t >= 0) {
                                    for (n = M.length - 1; n >= t; n--)(e = M[n]).valid && s(e.name);
                                    M.length = t
                                }
                            },
                            Y = function(e, t) {
                                return a(eX(e, n), t)
                            },
                            G = function(t) {
                                "" !== t && (">" === t.charAt(0) && (t = " " + t), e.allow_conditional_comments || "[if" !== t.substr(0, 3).toLowerCase() || (t = " " + t), r(eX(t, n)))
                            },
                            K = function(e, t) {
                                var n = e || "",
                                    r = !ei(n, "--"),
                                    i = tm($, r, t);
                                return e = $.substr(t, i - t), G(r ? n + e : e), i + 1
                            },
                            Q = function(t, r, i, a, o) {
                                if (u = (r = r.toLowerCase()) in _ ? r : tn(i || a || o || ""), i = C(n.uris, u).getOr(u), E && !y && !1 == (0 === (c = r).indexOf("data-") || 0 === c.indexOf("aria-"))) {
                                    if (!(s = j[r]) && I) {
                                        for (l = I.length; l-- && !(s = I[l]).pattern.test(r);); - 1 === l && (s = null)
                                    }
                                    if (!s || s.validValues && !(i in s.validValues)) return
                                }
                                if (U[r] && !e.allow_script_urls) {
                                    var s, l, u, c, f, d, p = i.replace(/[\s\u0000-\u001F]+/g, "");
                                    try {
                                        p = decodeURIComponent(p)
                                    } catch (e) {
                                        p = unescape(p)
                                    }
                                    if (X.test(p) || (f = e, d = p, !f.allow_html_data_urls && (/^data:image\//i.test(d) ? !1 === f.allow_svg_data_urls && /^data:image\/svg\+xml/i.test(d) : /^data:/i.test(d)))) return
                                }
                                y && (r in U || 0 === r.indexOf("on")) || (m.map[r] = i, m.push({
                                    name: r,
                                    value: i
                                }))
                            };
                        for (T = RegExp("<(?:(?:!--([\\w\\W]*?)--!?>)|(?:!\\[CDATA\\[([\\w\\W]*?)\\]\\]>)|(?:![Dd][Oo][Cc][Tt][Yy][Pp][Ee]([\\w\\W]*?)>)|(?:!(--)?)|(?:\\?([^\\s\\/<>]+) ?([\\w\\W]*?)[?/]>)|(?:\\/([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)>)|(?:([A-Za-z][A-Za-z0-9\\-_\\:\\.]*)((?:\\s+[^\"'>]+(?:(?:\"[^\"]*\")|(?:'[^']*')|[^>]*))*|\\/|\\s+)>))", "g"), L = /([\w:\-]+)(?:\s*=\s*(?:(?:\"((?:[^\"])*)\")|(?:\'((?:[^\'])*)\')|([^>\s]+)))?/g, x = t.getShortEndedElements(), D = e.self_closing_elements || t.getSelfClosingElements(), _ = t.getBoolAttrs(), E = e.validate, w = e.remove_internals, f = e.fix_self_closing, N = t.getSpecialElements(), z = $ + ">"; d = T.exec(z);) {
                            var J = d[0];
                            if (B < d.index && Y(tn($.substr(B, d.index - B))), p = d[7]) ":" === (p = p.toLowerCase()).charAt(0) && (p = p.substr(1)), Z(p);
                            else if (p = d[8]) {
                                if (d.index + J.length > $.length) {
                                    Y(tn($.substr(d.index))), B = d.index + J.length;
                                    continue
                                }
                                ":" === (p = p.toLowerCase()).charAt(0) && (p = p.substr(1)), k = p in x, f && D[p] && M.length > 0 && M[M.length - 1].name === p && Z(p);
                                var ee = tg(L, d[9]);
                                if (null !== ee) {
                                    if ("all" === ee) {
                                        B = th(t, $, T.lastIndex), T.lastIndex = B;
                                        continue
                                    }
                                    O = !1
                                }
                                if (!E || (A = t.getElementRule(p))) {
                                    if (O = !0, E && (j = A.attributes, I = A.attributePatterns), (S = d[9]) ? ((y = -1 !== S.indexOf("data-mce-type")) && w && (O = !1), (m = []).map = {}, S.replace(L, Q)) : (m = []).map = {}, E && !y) {
                                        if (R = A.attributesRequired, P = A.attributesDefault, q = A.attributesForced, A.removeEmptyAttrs && !m.length && (O = !1), q)
                                            for (g = q.length; g--;) b = (F = q[g]).name, "{$uid}" === (V = F.value) && (V = "mce_" + W++), m.map[b] = V, m.push({
                                                name: b,
                                                value: V
                                            });
                                        if (P)
                                            for (g = P.length; g--;)(b = (F = P[g]).name) in m.map || ("{$uid}" === (V = F.value) && (V = "mce_" + W++), m.map[b] = V, m.push({
                                                name: b,
                                                value: V
                                            }));
                                        if (R) {
                                            for (g = R.length; g-- && !(R[g] in m.map);); - 1 === g && (O = !1)
                                        }
                                        if (F = m.map["data-mce-bogus"]) {
                                            if ("all" === F) {
                                                B = th(t, $, T.lastIndex), T.lastIndex = B;
                                                continue
                                            }
                                            O = !1
                                        }
                                    }
                                    O && o(p, m, k)
                                } else O = !1;
                                if (h = N[p]) {
                                    h.lastIndex = B = d.index + J.length, (d = h.exec($)) ? (O && (v = $.substr(B, d.index - B)), B = d.index + d[0].length) : (v = $.substr(B), B = $.length), O && (v.length > 0 && Y(v, !0), s(p)), T.lastIndex = B;
                                    continue
                                }!k && (S && S.indexOf("/") === S.length - 1 ? O && s(p) : M.push({
                                    name: p,
                                    valid: O
                                }))
                            } else if (p = d[1]) G(p);
                            else if (p = d[2])
                                if (1 === H || e.preserve_cdata || M.length > 0 && t.isValidChild(M[M.length - 1].name, "#cdata")) i(p);
                                else {
                                    T.lastIndex = B = K("", d.index + 2);
                                    continue
                                }
                            else if (p = d[3]) u(p);
                            else if ((p = d[4]) || "<!" === J) {
                                T.lastIndex = B = K(p, d.index + J.length);
                                continue
                            } else if (p = d[5])
                                if (1 === H) l(p, d[6]);
                                else {
                                    T.lastIndex = B = K("?", d.index + 2);
                                    continue
                                }
                            B = d.index + J.length
                        }
                        for (B < $.length && Y(tn($.substr(B))), g = M.length - 1; g >= 0; g--)(p = M[g]).valid && s(p.name)
                    };
                return {
                    parse: function(e, t) {
                        void 0 === t && (t = "html"), c(eU(e), t)
                    }
                }
            }(tv || (tv = {})).findEndTag = th;
            var tb = tv,
                ty = eS.makeMap,
                tw = eS.each,
                tx = eS.explode,
                t_ = eS.extend,
                tC = function(e, t) {
                    void 0 === t && (t = tp());
                    var n = {},
                        r = [],
                        i = {},
                        a = {};
                    (e = e || {}).validate = !("validate" in e) || e.validate, e.root_name = e.root_name || "body";
                    var o = function(e) {
                            var n, r, i, a, o, l, u, c, f, d, p, h, m, g, v, b;
                            for (n = 0, h = ty("tr,td,th,tbody,thead,tfoot,table"), d = t.getNonEmptyElements(), p = t.getWhiteSpaceElements(), m = t.getTextBlockElements(), g = t.getSpecialElements(); n < e.length; n++)
                                if ((r = e[n]).parent && !r.fixed) {
                                    if (m[r.name] && "li" === r.parent.name) {
                                        for (v = r.next; v && m[v.name];) v.name = "li", v.fixed = !0, r.parent.insert(v, r.parent), v = v.next;
                                        r.unwrap(r);
                                        continue
                                    }
                                    for (a = [r], i = r.parent; i && !t.isValidChild(i.name, r.name) && !h[i.name]; i = i.parent) a.push(i);
                                    if (i && a.length > 1) {
                                        for (a.reverse(), o = l = s(a[0].clone()), f = 0; f < a.length - 1; f++) {
                                            for (t.isValidChild(l.name, a[f].name) ? (u = s(a[f].clone()), l.append(u)) : u = l, c = a[f].firstChild; c && c !== a[f + 1];) b = c.next, u.append(c), c = b;
                                            l = u
                                        }
                                        eK(t, d, p, o) ? i.insert(r, a[0], !0) : (i.insert(o, a[0], !0), i.insert(r, o)), i = a[0], (eK(t, d, p, i) || eY(i, "br")) && i.empty().remove()
                                    } else if (r.parent) {
                                        if ("li" === r.name) {
                                            if ((v = r.prev) && ("ul" === v.name || "ul" === v.name)) {
                                                v.append(r);
                                                continue
                                            }
                                            if ((v = r.next) && ("ul" === v.name || "ul" === v.name)) {
                                                v.insert(r, v.firstChild, !0);
                                                continue
                                            }
                                            r.wrap(s(new eV("ul", 1)));
                                            continue
                                        }
                                        t.isValidChild(r.parent.name, "div") && t.isValidChild("div", r.name) ? r.wrap(s(new eV("div", 1))) : g[r.name] ? r.empty().remove() : r.unwrap()
                                    }
                                }
                        },
                        s = function(e) {
                            var t, o, s;
                            for (((o = e.name) in n) && ((s = i[o]) ? s.push(e) : i[o] = [e]), t = r.length; t--;)(o = r[t].name) in e.attributes.map && ((s = a[o]) ? s.push(e) : a[o] = [e]);
                            return e
                        },
                        l = {
                            schema: t,
                            addAttributeFilter: function(e, t) {
                                tw(tx(e), function(e) {
                                    var n;
                                    for (n = 0; n < r.length; n++)
                                        if (r[n].name === e) return void r[n].callbacks.push(t);
                                    r.push({
                                        name: e,
                                        callbacks: [t]
                                    })
                                })
                            },
                            getAttributeFilters: function() {
                                return [].concat(r)
                            },
                            addNodeFilter: function(e, t) {
                                tw(tx(e), function(e) {
                                    var r = n[e];
                                    r || (n[e] = r = []), r.push(t)
                                })
                            },
                            getNodeFilters: function() {
                                var e = [];
                                for (var t in n) n.hasOwnProperty(t) && e.push({
                                    name: t,
                                    callbacks: n[t]
                                });
                                return e
                            },
                            filterNode: s,
                            parse: function(s, l) {
                                var u, c, f, d, p, h, m, g, v, b, y, w, x = [];
                                l = l || {}, i = {}, a = {}, b = t_(ty("script,style,head,html,body,title,meta,param"), t.getBlockElements());
                                var _ = t.getNonEmptyElements(),
                                    C = t.children,
                                    k = e.validate,
                                    E = !1 === (u = "forced_root_block" in l ? l.forced_root_block : e.forced_root_block) ? "" : !0 === u ? "p" : u,
                                    A = t.getWhiteSpaceElements(),
                                    O = /^[ \t\r\n]+/,
                                    F = /[ \t\r\n]+$/,
                                    S = /[ \t\r\n]+/g,
                                    j = /^[ \t\r\n]+$/;
                                y = A.hasOwnProperty(l.context) || A.hasOwnProperty(e.root_name);
                                var I = function(e, t) {
                                        var r, a = new eV(e, t);
                                        return e in n && ((r = i[e]) ? r.push(a) : i[e] = [a]), a
                                    },
                                    R = function(e) {
                                        var n, r, i, a, o = t.getBlockElements();
                                        for (n = e.prev; n && 3 === n.type;) {
                                            if ((i = n.value.replace(F, "")).length > 0) {
                                                n.value = i;
                                                return
                                            }
                                            if ((r = n.next) && (3 === r.type && r.value.length || !o[r.name] && "script" !== r.name && "style" !== r.name)) {
                                                n = n.prev;
                                                continue
                                            }
                                            a = n.prev, n.remove(), n = a
                                        }
                                    };
                                c = tb({
                                    validate: k,
                                    allow_script_urls: e.allow_script_urls,
                                    allow_conditional_comments: e.allow_conditional_comments,
                                    preserve_cdata: e.preserve_cdata,
                                    self_closing_elements: function(e) {
                                        var t, n = {};
                                        for (t in e) "li" !== t && "p" !== t && (n[t] = e[t]);
                                        return n
                                    }(t.getSelfClosingElements()),
                                    cdata: function(e) {
                                        w.append(I("#cdata", 4)).value = e
                                    },
                                    text: function(e, t) {
                                        var n, r;
                                        !y && (e = e.replace(S, " "), r = w.lastChild, r && (b[r.name] || "br" === r.name) && (e = e.replace(O, ""))), 0 !== e.length && ((n = I("#text", 3)).raw = !!t, w.append(n).value = e)
                                    },
                                    comment: function(e) {
                                        w.append(I("#comment", 8)).value = e
                                    },
                                    pi: function(e, t) {
                                        w.append(I(e, 7)).value = t, R(w)
                                    },
                                    doctype: function(e) {
                                        w.append(I("#doctype", 10)).value = e, R(w)
                                    },
                                    start: function(e, n, i) {
                                        var o, s, l, u, c;
                                        if (l = k ? t.getElementRule(e) : {}) {
                                            for ((o = I(l.outputName || e, 1)).attributes = n, o.shortEnded = i, w.append(o), (c = C[w.name]) && C[o.name] && !c[o.name] && x.push(o), s = r.length; s--;)(u = r[s].name) in n.map && ((g = a[u]) ? g.push(o) : a[u] = [o]);
                                            b[e] && R(o), i || (w = o), !y && A[e] && (y = !0)
                                        }
                                    },
                                    end: function(n) {
                                        var r, i, a, o, s, u;
                                        if (i = k ? t.getElementRule(n) : {}) {
                                            if (b[n] && !y) {
                                                if ((r = w.firstChild) && 3 === r.type)
                                                    if ((a = r.value.replace(O, "")).length > 0) r.value = a, r = r.next;
                                                    else
                                                        for (o = r.next, r.remove(), r = o; r && 3 === r.type;) a = r.value, o = r.next, (0 === a.length || j.test(a)) && (r.remove(), r = o), r = o;
                                                if ((r = w.lastChild) && 3 === r.type)
                                                    if ((a = r.value.replace(F, "")).length > 0) r.value = a, r = r.prev;
                                                    else
                                                        for (o = r.prev, r.remove(), r = o; r && 3 === r.type;) a = r.value, o = r.prev, (0 === a.length || j.test(a)) && (r.remove(), r = o), r = o
                                            }
                                            if (y && A[n] && (y = !1), i.removeEmpty && eK(t, _, A, w)) {
                                                s = w.parent, b[w.name] ? w.empty().remove() : w.unwrap(), w = s;
                                                return
                                            }
                                            i.paddEmpty && (eY(u = w, "#text") && " " === u.firstChild.value || eK(t, _, A, w)) && eZ(e, l, b, w), w = w.parent
                                        }
                                    }
                                }, t);
                                var P = w = new eV(l.context || e.root_name, 11);
                                if (c.parse(s, l.format), k && x.length && (l.context ? l.invalid = !0 : o(x)), E && ("body" === P.name || l.isRootContent) && function() {
                                        var n, r, i = P.firstChild,
                                            a = function(e) {
                                                e && ((i = e.firstChild) && 3 === i.type && (i.value = i.value.replace(O, "")), (i = e.lastChild) && 3 === i.type && (i.value = i.value.replace(F, "")))
                                            };
                                        if (t.isValidChild(P.name, E.toLowerCase())) {
                                            for (; i;) n = i.next, 3 !== i.type && (1 !== i.type || "p" === i.name || b[i.name] || i.attr("data-mce-type")) ? (a(r), r = null) : (r || ((r = I(E, 1)).attr(e.forced_root_block_attrs), P.insert(r, i)), r.append(i)), i = n;
                                            a(r)
                                        }
                                    }(), !l.invalid) {
                                    for (v in i)
                                        if (i.hasOwnProperty(v)) {
                                            for (g = n[v], h = (f = i[v]).length; h--;) f[h].parent || f.splice(h, 1);
                                            for (d = 0, p = g.length; d < p; d++) g[d](f, v, l)
                                        }
                                    for (d = 0, p = r.length; d < p; d++)
                                        if ((g = r[d]).name in a) {
                                            for (h = (f = a[g.name]).length; h--;) f[h].parent || f.splice(h, 1);
                                            for (h = 0, m = g.callbacks.length; h < m; h++) g.callbacks[h](f, g.name, l)
                                        }
                                }
                                return P
                            }
                        };
                    return eJ(l, e), eq(l, e), l
                },
                tk = eS.makeMap,
                tE = function(e) {
                    var t, n, r, i, a, o = [];
                    return t = (e = e || {}).indent, n = tk(e.indent_before || ""), r = tk(e.indent_after || ""), i = tt(e.entity_encoding || "raw", e.entities), a = "html" === e.element_format, {
                        start: function(e, s, l) {
                            var u, c, f, d;
                            if (t && n[e] && o.length > 0 && (d = o[o.length - 1]).length > 0 && "\n" !== d && o.push("\n"), o.push("<", e), s)
                                for (u = 0, c = s.length; u < c; u++) f = s[u], o.push(" ", f.name, '="', i(f.value, !0), '"');
                            !l || a ? o[o.length] = ">" : o[o.length] = " />", l && t && r[e] && o.length > 0 && (d = o[o.length - 1]).length > 0 && "\n" !== d && o.push("\n")
                        },
                        end: function(e) {
                            var n;
                            o.push("</", e, ">"), t && r[e] && o.length > 0 && (n = o[o.length - 1]).length > 0 && "\n" !== n && o.push("\n")
                        },
                        text: function(e, t) {
                            e.length > 0 && (o[o.length] = t ? e : i(e))
                        },
                        cdata: function(e) {
                            o.push("<![CDATA[", e, "]]>")
                        },
                        comment: function(e) {
                            o.push("\x3c!--", e, "--\x3e")
                        },
                        pi: function(e, n) {
                            n ? o.push("<?", e, " ", i(n), "?>") : o.push("<?", e, "?>"), t && o.push("\n")
                        },
                        doctype: function(e) {
                            o.push("<!DOCTYPE", e, ">", t ? "\n" : "")
                        },
                        reset: function() {
                            o.length = 0
                        },
                        getContent: function() {
                            return o.join("").replace(/\n$/, "")
                        }
                    }
                },
                tA = function(e, t) {
                    void 0 === t && (t = tp());
                    var n = tE(e);
                    return (e = e || {}).validate = !("validate" in e) || e.validate, {
                        serialize: function(r) {
                            a = e.validate, i = {
                                3: function(e) {
                                    n.text(e.value, e.raw)
                                },
                                8: function(e) {
                                    n.comment(e.value)
                                },
                                7: function(e) {
                                    n.pi(e.name, e.value)
                                },
                                10: function(e) {
                                    n.doctype(e.value)
                                },
                                4: function(e) {
                                    n.cdata(e.value)
                                },
                                11: function(e) {
                                    if (e = e.firstChild)
                                        do o(e); while (e = e.next)
                                }
                            }, n.reset();
                            var i, a, o = function(e) {
                                var r, s, l, u, c, f, d, p, h, m = i[e.type];
                                if (m) m(e);
                                else {
                                    if (r = e.name, s = e.shortEnded, l = e.attributes, a && l && l.length > 1 && ((f = []).map = {}, h = t.getElementRule(e.name))) {
                                        for (d = 0, p = h.attributesOrder.length; d < p; d++)(u = h.attributesOrder[d]) in l.map && (c = l.map[u], f.map[u] = c, f.push({
                                            name: u,
                                            value: c
                                        }));
                                        for (d = 0, p = l.length; d < p; d++)(u = l[d].name) in f.map || (c = l.map[u], f.map[u] = c, f.push({
                                            name: u,
                                            value: c
                                        }));
                                        l = f
                                    }
                                    if (n.start(e.name, l, s), !s) {
                                        if (e = e.firstChild)
                                            do o(e); while (e = e.next) n.end(r)
                                    }
                                }
                            };
                            return 1 !== r.type || e.inner ? i[11](r) : o(r), n.getContent()
                        }
                    }
                },
                tO = function(e) {
                    return e.getParam("paste_retain_style_properties")
                },
                tF = function(e, t) {
                    (i = tO(e)) && (a = eS.makeMap(i.split(/[, ]/))), n = t, r = [/<br class="?Apple-interchange-newline"?>/gi, /<b[^>]+id="?docs-internal-[^>]*>/gi, /<!--[\s\S]+?-->/gi, /<(!|script[^>]*>.*?<\/script(?=[>\s])|\/?(\?xml(:\w+)?|img|meta|link|style|\w:\w+)(?=[\s\/>]))[^>]*>/gi, [/<(\/?)s>/gi, "<$1strike>"],
                        [/&nbsp;/gi, " "],
                        [/<span\s+style\s*=\s*"\s*mso-spacerun\s*:\s*yes\s*;?\s*"\s*>([\s\u00a0]*)<\/span>/gi, function(e, t) {
                            return t.length > 0 ? t.replace(/./, " ").slice(Math.floor(t.length / 2)).split("").join(" ") : ""
                        }]
                    ], eS.each(r, function(e) {
                        n = e.constructor === RegExp ? n.replace(e, "") : n.replace(e[0], e[1])
                    }), t = n;
                    var n, r, i, a, o = tp({
                        valid_elements: e.getParam("paste_word_valid_elements", "-strong/b,-em/i,-u,-span,-p,-ol,-ul,-li,-h1,-h2,-h3,-h4,-h5,-h6,-p/div,-a[href|name],sub,sup,strike,br,del,table[width],tr,td[colspan|rowspan|width],th[colspan|rowspan|width],thead,tfoot,tbody"),
                        valid_children: "-li[p]"
                    });
                    eS.each(o.elements, function(e) {
                        e.attributes.class || (e.attributes.class = {}, e.attributesOrder.push("class")), e.attributes.style || (e.attributes.style = {}, e.attributesOrder.push("style"))
                    });
                    var s = tC({}, o);
                    s.addAttributeFilter("style", function(t) {
                        for (var n, r = t.length; r--;)(n = t[r]).attr("style", function(e, t, n, r) {
                            var i, a = {},
                                o = e.dom.parseStyle(r);
                            return (eS.each(o, function(o, s) {
                                switch (s) {
                                    case "mso-list":
                                        (i = /\w+ \w+([0-9]+)/i.exec(r)) && (n._listLevel = parseInt(i[1], 10)), /Ignore/i.test(o) && n.firstChild && (n._listIgnore = !0, n.firstChild._listIgnore = !0);
                                        break;
                                    case "horiz-align":
                                        s = "text-align";
                                        break;
                                    case "vert-align":
                                        s = "vertical-align";
                                        break;
                                    case "font-color":
                                    case "mso-foreground":
                                        s = "color";
                                        break;
                                    case "mso-background":
                                    case "mso-highlight":
                                        s = "background";
                                        break;
                                    case "font-weight":
                                    case "font-style":
                                        "normal" !== o && (a[s] = o);
                                        return;
                                    case "mso-element":
                                        if (/^(comment|comment-list)$/i.test(o)) return void n.remove()
                                }
                                0 === s.indexOf("mso-comment") ? n.remove() : 0 !== s.indexOf("mso-") && ("all" === tO(e) || t && t[s]) && (a[s] = o)
                            }), /(bold)/i.test(a["font-weight"]) && (delete a["font-weight"], n.wrap(new eV("b", 1))), /(italic)/i.test(a["font-style"]) && (delete a["font-style"], n.wrap(new eV("i", 1))), a = e.dom.serializeStyle(a, n.name)) ? a : null
                        }(e, a, n, n.attr("style"))), "span" === n.name && n.parent && !n.attributes.length && n.unwrap()
                    }), s.addAttributeFilter("class", function(e) {
                        for (var t, n, r = e.length; r--;) n = (t = e[r]).attr("class"), /^(MsoCommentReference|MsoCommentText|msoDel)$/i.test(n) && t.remove(), t.attr("class", null)
                    }), s.addNodeFilter("del", function(e) {
                        for (var t = e.length; t--;) e[t].remove()
                    }), s.addNodeFilter("a", function(e) {
                        for (var t, n, r, i = e.length; i--;) {
                            if (n = (t = e[i]).attr("href"), r = t.attr("name"), n && -1 !== n.indexOf("#_msocom_")) {
                                t.remove();
                                continue
                            }
                            if (n && 0 === n.indexOf("file://") && (n = n.split("#")[1]) && (n = "#" + n), n || r) {
                                if (r && !/^_?(?:toc|edn|ftn)/i.test(r)) {
                                    t.unwrap();
                                    continue
                                }
                                t.attr({
                                    href: n,
                                    name: r
                                })
                            } else t.unwrap()
                        }
                    });
                    var l = s.parse(t);
                    return e.getParam("paste_convert_word_fake_lists", !0) && function(e) {
                        var t, n, r = 1;

                        function i(e, t) {
                            if (3 === e.type && t.test(e.value)) return e.value = e.value.replace(t, ""), !1;
                            if (e = e.firstChild)
                                do
                                    if (!i(e, t)) return !1; while (e = e.next) return !0
                        }

                        function a(e, a, o) {
                            var s = e._listLevel || r;
                            s !== r && (s < r ? t && (t = t.parent.parent) : (n = t, t = null)), t && t.name === a ? t.append(e) : (n = n || t, t = new eV(a, 1), o > 1 && t.attr("start", "" + o), e.wrap(t)), e.name = "li", s > r && n && n.lastChild.append(t), r = s,
                                function e(t) {
                                    if (t._listIgnore) return void t.remove();
                                    if (t = t.firstChild)
                                        do e(t); while (t = t.next)
                                }(e), i(e, /^\u00a0+/), i(e, /^\s*([\u2022\u00b7\u00a7\u25CF]|\w+\.)/), i(e, /^\u00a0+/)
                        }
                        for (var o = [], s = e.firstChild; null != s;)
                            if (o.push(s), null !== (s = s.walk()))
                                for (; void 0 !== s && s.parent !== e;) s = s.walk();
                        for (var l = 0; l < o.length; l++)
                            if ("p" === (e = o[l]).name && e.firstChild) {
                                var u = function e(t) {
                                    var n = "";
                                    if (3 === t.type) return t.value;
                                    if (t = t.firstChild)
                                        do n += e(t); while (t = t.next) return n
                                }(e);
                                if (/^[\s\u00a0]*[\u2022\u00b7\u00a7\u25CF]\s*/.test(u)) {
                                    a(e, "ul");
                                    continue
                                }
                                if (function(e) {
                                        var t;
                                        return e = e.replace(/^[\u00a0 ]+/, ""), eS.each([/^[IVXLMCD]{1,2}\.[ \u00a0]/, /^[ivxlmcd]{1,2}\.[ \u00a0]/, /^[a-z]{1,2}[\.\)][ \u00a0]/, /^[A-Z]{1,2}[\.\)][ \u00a0]/, /^[0-9]+\.[ \u00a0]/, /^[\u3007\u4e00\u4e8c\u4e09\u56db\u4e94\u516d\u4e03\u516b\u4e5d]+\.[ \u00a0]/, /^[\u58f1\u5f10\u53c2\u56db\u4f0d\u516d\u4e03\u516b\u4e5d\u62fe]+\.[ \u00a0]/], function(n) {
                                            if (n.test(e)) return t = !0, !1
                                        }), t
                                    }(u)) {
                                    var c = /([0-9]+)\./.exec(u),
                                        f = 1;
                                    c && (f = parseInt(c[1], 10)), a(e, "ol", f);
                                    continue
                                }
                                if (e._listLevel) {
                                    a(e, "ul", 1);
                                    continue
                                }
                                t = null
                            } else n = t, t = null
                    }(l), t = tA({
                        validate: e.settings.validate
                    }, o).serialize(l)
                };
            t.isWordContent = function(e) {
                return /<font face="Times New Roman"|class="?Mso|style="[^"]*\bmso-|style='[^'']*\bmso-|w:WordDocument/i.test(e) || /class="OutlineElement/.test(e) || /id="?docs\-internal\-guid\-/.test(e)
            }, t.preProcess = function(e, t) {
                return e.getParam("paste_enable_default_filters", !0) ? tF(e, t) : t
            }
        },
        818640: (e, t, n) => {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (0, ((r = n(271282)) && r.__esModule ? r : {
                    default: r
                }).default)(),
                a = {
                    settings: {},
                    dom: {
                        parseStyle: i.parse,
                        serializeStyle: i.serialize
                    },
                    getParam: function(e, t) {
                        return t
                    }
                };
            t.default = function(e) {
                return (0, n(756990).isWordContent)(e) ? (0, n(756990).preProcess)(a, e) : e
            }
        }
    }
]);