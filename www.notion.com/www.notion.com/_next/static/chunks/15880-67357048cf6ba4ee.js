! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "d7e1fad2-e13a-4969-9122-59a3701f31df", e._sentryDebugIdIdentifier = "sentry-dbid-d7e1fad2-e13a-4969-9122-59a3701f31df")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [15880], {
        668571: function(e) {
            var t, n, r, i = e.exports = {};

            function o() {
                throw Error("setTimeout has not been defined")
            }

            function l() {
                throw Error("clearTimeout has not been defined")
            }

            function a(e) {
                if (t === setTimeout) return setTimeout(e, 0);
                if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                try {
                    return t(e, 0)
                } catch (n) {
                    try {
                        return t.call(null, e, 0)
                    } catch (n) {
                        return t.call(this, e, 0)
                    }
                }
            }! function() {
                try {
                    t = "function" == typeof setTimeout ? setTimeout : o
                } catch (e) {
                    t = o
                }
                try {
                    n = "function" == typeof clearTimeout ? clearTimeout : l
                } catch (e) {
                    n = l
                }
            }();
            var u = [],
                s = !1,
                c = -1;

            function f() {
                s && r && (s = !1, r.length ? u = r.concat(u) : c = -1, u.length && d())
            }

            function d() {
                if (!s) {
                    var e = a(f);
                    s = !0;
                    for (var t = u.length; t;) {
                        for (r = u, u = []; ++c < t;) r && r[c].run();
                        c = -1, t = u.length
                    }
                    r = null, s = !1,
                        function(e) {
                            if (n === clearTimeout) return clearTimeout(e);
                            if ((n === l || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                            try {
                                n(e)
                            } catch (t) {
                                try {
                                    return n.call(null, e)
                                } catch (t) {
                                    return n.call(this, e)
                                }
                            }
                        }(e)
                }
            }

            function p(e, t) {
                this.fun = e, this.array = t
            }

            function h() {}
            i.nextTick = function(e) {
                var t = Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                u.push(new p(e, t)), 1 !== u.length || s || a(d)
            }, p.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) {
                return []
            }, i.binding = function(e) {
                throw Error("process.binding is not supported")
            }, i.cwd = function() {
                return "/"
            }, i.chdir = function(e) {
                throw Error("process.chdir is not supported")
            }, i.umask = function() {
                return 0
            }
        },
        908221: function(e, t) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    DOMAttributeNames: function() {
                        return r
                    },
                    default: function() {
                        return l
                    },
                    isEqualNode: function() {
                        return o
                    }
                });
            let r = {
                acceptCharset: "accept-charset",
                className: "class",
                htmlFor: "for",
                httpEquiv: "http-equiv",
                noModule: "noModule"
            };

            function i(e) {
                let {
                    type: t,
                    props: n
                } = e, i = document.createElement(t);
                for (let e in n) {
                    if (!n.hasOwnProperty(e) || "children" === e || "dangerouslySetInnerHTML" === e || void 0 === n[e]) continue;
                    let o = r[e] || e.toLowerCase();
                    "script" === t && ("async" === o || "defer" === o || "noModule" === o) ? i[o] = !!n[e] : i.setAttribute(o, n[e])
                }
                let {
                    children: o,
                    dangerouslySetInnerHTML: l
                } = n;
                return l ? i.innerHTML = l.__html || "" : o && (i.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : ""), i
            }

            function o(e, t) {
                if (e instanceof HTMLElement && t instanceof HTMLElement) {
                    let n = t.getAttribute("nonce");
                    if (n && !e.getAttribute("nonce")) {
                        let r = t.cloneNode(!0);
                        return r.setAttribute("nonce", ""), r.nonce = n, n === e.nonce && e.isEqualNode(r)
                    }
                }
                return e.isEqualNode(t)
            }

            function l() {
                return {
                    mountedInstances: new Set,
                    updateHead: e => {
                        let t = {};
                        e.forEach(e => {
                            if ("link" === e.type && e.props["data-optimized-fonts"]) {
                                if (document.querySelector('style[data-href="' + e.props["data-href"] + '"]')) return;
                                e.props.href = e.props["data-href"], e.props["data-href"] = void 0
                            }
                            let n = t[e.type] || [];
                            n.push(e), t[e.type] = n
                        });
                        let r = t.title ? t.title[0] : null,
                            i = "";
                        if (r) {
                            let {
                                children: e
                            } = r.props;
                            i = "string" == typeof e ? e : Array.isArray(e) ? e.join("") : ""
                        }
                        i !== document.title && (document.title = i), ["meta", "base", "link", "style", "script"].forEach(e => {
                            n(e, t[e] || [])
                        })
                    }
                }
            }
            n = (e, t) => {
                let n = document.getElementsByTagName("head")[0],
                    r = n.querySelector("meta[name=next-head-count]"),
                    l = Number(r.content),
                    a = [];
                for (let t = 0, n = r.previousElementSibling; t < l; t++, n = (null == n ? void 0 : n.previousElementSibling) || null) {
                    var u;
                    (null == n ? void 0 : null == (u = n.tagName) ? void 0 : u.toLowerCase()) === e && a.push(n)
                }
                let s = t.map(i).filter(e => {
                    for (let t = 0, n = a.length; t < n; t++)
                        if (o(a[t], e)) return a.splice(t, 1), !1;
                    return !0
                });
                a.forEach(e => {
                    var t;
                    return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                }), s.forEach(e => n.insertBefore(e, r)), r.content = (l - a.length + s.length).toString()
            }, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        688003: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    default: function() {
                        return v
                    },
                    handleClientScriptLoad: function() {
                        return g
                    },
                    initScriptLoader: function() {
                        return m
                    }
                });
            let r = n(647043),
                i = n(253099),
                o = n(557437),
                l = r._(n(54887)),
                a = i._(n(902265)),
                u = n(148701),
                s = n(908221),
                c = n(663515),
                f = new Map,
                d = new Set,
                p = ["onLoad", "onReady", "dangerouslySetInnerHTML", "children", "onError", "strategy", "stylesheets"],
                h = e => {
                    if (l.default.preinit) {
                        e.forEach(e => {
                            l.default.preinit(e, {
                                as: "style"
                            })
                        });
                        return
                    }
                    if ("undefined" != typeof window) {
                        let t = document.head;
                        e.forEach(e => {
                            let n = document.createElement("link");
                            n.type = "text/css", n.rel = "stylesheet", n.href = e, t.appendChild(n)
                        })
                    }
                },
                y = e => {
                    let {
                        src: t,
                        id: n,
                        onLoad: r = () => {},
                        onReady: i = null,
                        dangerouslySetInnerHTML: o,
                        children: l = "",
                        strategy: a = "afterInteractive",
                        onError: u,
                        stylesheets: c
                    } = e, y = n || t;
                    if (y && d.has(y)) return;
                    if (f.has(t)) {
                        d.add(y), f.get(t).then(r, u);
                        return
                    }
                    let g = () => {
                            i && i(), d.add(y)
                        },
                        m = document.createElement("script"),
                        b = new Promise((e, t) => {
                            m.addEventListener("load", function(t) {
                                e(), r && r.call(this, t), g()
                            }), m.addEventListener("error", function(e) {
                                t(e)
                            })
                        }).catch(function(e) {
                            u && u(e)
                        });
                    for (let [n, r] of (o ? (m.innerHTML = o.__html || "", g()) : l ? (m.textContent = "string" == typeof l ? l : Array.isArray(l) ? l.join("") : "", g()) : t && (m.src = t, f.set(t, b)), Object.entries(e))) {
                        if (void 0 === r || p.includes(n)) continue;
                        let e = s.DOMAttributeNames[n] || n.toLowerCase();
                        m.setAttribute(e, r)
                    }
                    "worker" === a && m.setAttribute("type", "text/partytown"), m.setAttribute("data-nscript", a), c && h(c), document.body.appendChild(m)
                };

            function g(e) {
                let {
                    strategy: t = "afterInteractive"
                } = e;
                "lazyOnload" === t ? window.addEventListener("load", () => {
                    (0, c.requestIdleCallback)(() => y(e))
                }) : y(e)
            }

            function m(e) {
                e.forEach(g), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
                    let t = e.id || e.getAttribute("src");
                    d.add(t)
                })
            }

            function b(e) {
                let {
                    id: t,
                    src: n = "",
                    onLoad: r = () => {},
                    onReady: i = null,
                    strategy: s = "afterInteractive",
                    onError: f,
                    stylesheets: p,
                    ...h
                } = e, {
                    updateScripts: g,
                    scripts: m,
                    getIsSsr: b,
                    appDir: v,
                    nonce: _
                } = (0, a.useContext)(u.HeadManagerContext), E = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    let e = t || n;
                    E.current || (i && e && d.has(e) && i(), E.current = !0)
                }, [i, t, n]);
                let w = (0, a.useRef)(!1);
                if ((0, a.useEffect)(() => {
                        !w.current && ("afterInteractive" === s ? y(e) : "lazyOnload" === s && ("complete" === document.readyState ? (0, c.requestIdleCallback)(() => y(e)) : window.addEventListener("load", () => {
                            (0, c.requestIdleCallback)(() => y(e))
                        })), w.current = !0)
                    }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (g ? (m[s] = (m[s] || []).concat([{
                        id: t,
                        src: n,
                        onLoad: r,
                        onReady: i,
                        onError: f,
                        ...h
                    }]), g(m)) : b && b() ? d.add(t || n) : b && !b() && y(e)), v) {
                    if (p && p.forEach(e => {
                            l.default.preinit(e, {
                                as: "style"
                            })
                        }), "beforeInteractive" === s) return n ? (l.default.preload(n, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: _,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: _,
                        crossOrigin: h.crossOrigin
                    }), (0, o.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([n, { ...h,
                                id: t
                            }]) + ")"
                        }
                    })) : (h.dangerouslySetInnerHTML && (h.children = h.dangerouslySetInnerHTML.__html, delete h.dangerouslySetInnerHTML), (0, o.jsx)("script", {
                        nonce: _,
                        dangerouslySetInnerHTML: {
                            __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([0, { ...h,
                                id: t
                            }]) + ")"
                        }
                    }));
                    "afterInteractive" === s && n && l.default.preload(n, h.integrity ? {
                        as: "script",
                        integrity: h.integrity,
                        nonce: _,
                        crossOrigin: h.crossOrigin
                    } : {
                        as: "script",
                        nonce: _,
                        crossOrigin: h.crossOrigin
                    })
                }
                return null
            }
            Object.defineProperty(b, "__nextScript", {
                value: !0
            });
            let v = b;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        }
    }
]);