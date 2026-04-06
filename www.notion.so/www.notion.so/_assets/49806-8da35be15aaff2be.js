"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [49806], {
        6046: (t, e, r) => {
            r.d(e, {
                H: () => n
            });

            function n(t) {
                function e(n, i = {}) {
                    return (0, r(698809).G)(t(n, i))
                }
                if ("u" < typeof Proxy) return e;
                let n = new Map;
                return new Proxy(e, {
                    get: (t, r) => (n.has(r) || n.set(r, e(r)), n.get(r))
                })
            }
        },
        13070: (t, e, r) => {
            function n(t, e, r) {
                return (r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6) ? t + (e - t) * 6 * r : r < .5 ? e : r < 2 / 3 ? t + (e - t) * (2 / 3 - r) * 6 : t
            }
            r.d(e, {
                G: () => g
            });
            let i = (t, e, r) => {
                    let n = t * t;
                    return Math.sqrt(Math.max(0, r * (e * e - n) + n))
                },
                s = [r(705252).u, r(333735).B, r(672027).V];

            function a(t) {
                let e = s.find(e => e.test(t));
                (0, r(285238).V)(!!e, `'${t}' is not an animatable color. Use the equivalent color code instead.`);
                let i = e.parse(t);
                return e === r(672027).V && (i = function({
                    hue: t,
                    saturation: e,
                    lightness: r,
                    alpha: i
                }) {
                    t /= 360, r /= 100;
                    let s = 0,
                        a = 0,
                        o = 0;
                    if (e /= 100) {
                        let i = r < .5 ? r * (1 + e) : r + e - r * e,
                            l = 2 * r - i;
                        s = n(l, i, t + 1 / 3), a = n(l, i, t), o = n(l, i, t - 1 / 3)
                    } else s = a = o = r;
                    return {
                        red: Math.round(255 * s),
                        green: Math.round(255 * a),
                        blue: Math.round(255 * o),
                        alpha: i
                    }
                }(i)), i
            }
            let o = (t, e) => {
                let n = a(t),
                    s = a(e),
                    o = { ...n
                    };
                return t => (o.red = i(n.red, s.red, t), o.green = i(n.green, s.green, t), o.blue = i(n.blue, s.blue, t), o.alpha = (0, r(102839).j)(n.alpha, s.alpha, t), r(333735).B.transform(o))
            };
            var l = () => r(991339);
            let u = (t, e) => r => `${r>0?e:t}`;

            function d(t, e) {
                return "number" == typeof t ? n => (0, r(102839).j)(t, e, n) : r(27739).y.test(t) ? o(t, e) : t.startsWith("var(") ? u(t, e) : p(t, e)
            }
            let h = (t, e) => {
                    let r = [...t],
                        n = r.length,
                        i = t.map((t, r) => d(t, e[r]));
                    return t => {
                        for (let e = 0; e < n; e++) r[e] = i[e](t);
                        return r
                    }
                },
                c = (t, e) => {
                    let r = { ...t,
                            ...e
                        },
                        n = {};
                    for (let i in r) void 0 !== t[i] && void 0 !== e[i] && (n[i] = d(t[i], e[i]));
                    return t => {
                        for (let e in n) r[e] = n[e](t);
                        return r
                    }
                },
                p = (t, e) => {
                    let n = r(641614).f.createTransformer(e),
                        i = (0, r(641614).V)(t),
                        s = (0, r(641614).V)(e);
                    return i.numVars === s.numVars && i.numColors === s.numColors && i.numNumbers >= s.numNumbers ? (0, l().F)(h(i.values, s.values), n) : ((0, r(285238).$)(!0, `Complex values '${t}' and '${e}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), u(t, e))
                };
            var f = () => r(803659);
            let m = (t, e) => n => (0, r(102839).j)(t, e, n);

            function g(t, e, {
                clamp: n = !0,
                ease: i,
                mixer: s
            } = {}) {
                let a = t.length;
                if ((0, r(285238).V)(a === e.length, "Both input and output ranges must be the same length"), 1 === a) return () => e[0];
                t[0] > t[a - 1] && (t = [...t].reverse(), e = [...e].reverse());
                let u = function(t, e, n) {
                        let i = [],
                            s = n || function(t) {
                                if ("number" == typeof t);
                                else if ("string" == typeof t) return r(27739).y.test(t) ? o : p;
                                else if (Array.isArray(t)) return h;
                                else if ("object" == typeof t) return c;
                                return m
                            }(t[0]),
                            a = t.length - 1;
                        for (let r = 0; r < a; r++) {
                            let n = s(t[r], t[r + 1]);
                            if (e) {
                                let t = Array.isArray(e) ? e[r] || f().l : e;
                                n = (0, l().F)(t, n)
                            }
                            i.push(n)
                        }
                        return i
                    }(e, i, s),
                    d = u.length,
                    v = e => {
                        let n = 0;
                        if (d > 1)
                            for (; n < t.length - 2 && !(e < t[n + 1]); n++);
                        let i = (0, r(927170).q)(t[n], t[n + 1], e);
                        return u[n](i)
                    };
                return n ? e => v((0, r(442464).q)(t[0], t[a - 1], e)) : v
            }
        },
        13141: (t, e, r) => {
            r.d(e, {
                a: () => n
            });

            function n(t, e, r, i = {}, s = {}) {
                return "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, s)), "string" == typeof e && (e = t.variants && t.variants[e]), "function" == typeof e && (e = e(void 0 !== r ? r : t.custom, i, s)), e
            }
        },
        22606: (t, e, r) => {
            r.d(e, {
                v: () => n
            });
            class n {
                constructor() {
                    this.subscriptions = []
                }
                add(t) {
                    return (0, r(132358).Kq)(this.subscriptions, t), () => (0, r(132358).Ai)(this.subscriptions, t)
                }
                notify(t, e, r) {
                    let n = this.subscriptions.length;
                    if (n)
                        if (1 === n) this.subscriptions[0](t, e, r);
                        else
                            for (let i = 0; i < n; i++) {
                                let n = this.subscriptions[i];
                                n && n(t, e, r)
                            }
                }
                getSize() {
                    return this.subscriptions.length
                }
                clear() {
                    this.subscriptions.length = 0
                }
            }
        },
        27739: (t, e, r) => {
            r.d(e, {
                y: () => n
            });
            let n = {
                test: t => r(333735).B.test(t) || r(705252).u.test(t) || r(672027).V.test(t),
                parse: t => r(333735).B.test(t) ? r(333735).B.parse(t) : r(672027).V.test(t) ? r(672027).V.parse(t) : r(705252).u.parse(t),
                transform: t => (0, r(767296).Kg)(t) ? t : t.hasOwnProperty("red") ? r(333735).B.transform(t) : r(672027).V.transform(t)
            }
        },
        29473: (t, e, r) => {
            r.d(e, {
                L: () => n
            });
            let n = (0, r(296540).createContext)({})
        },
        40278: (t, e, r) => {
            r.d(e, {
                T: () => s
            });
            var n = r(296540),
                i = () => r(814322);
            let s = t => (e, s) => {
                let a = (0, n.useContext)(r(345153).A),
                    o = (0, n.useContext)(r(786719).t),
                    l = () => (function({
                        scrapeMotionValuesFromProps: t,
                        createRenderState: e,
                        onMount: n
                    }, s, a, o) {
                        let l = {
                            latestValues: function(t, e, n, s) {
                                let a = {},
                                    o = s(t, {});
                                for (let t in o) a[t] = (0, i().u)(o[t]);
                                let {
                                    initial: l,
                                    animate: u
                                } = t, d = (0, r(800837).e)(t), h = (0, r(800837).O)(t);
                                e && h && !d && !1 !== t.inherit && (void 0 === l && (l = e.initial), void 0 === u && (u = e.animate));
                                let c = !!n && !1 === n.initial,
                                    p = (c = c || !1 === l) ? u : l;
                                return p && "boolean" != typeof p && !(0, r(465490).N)(p) && (Array.isArray(p) ? p : [p]).forEach(e => {
                                    let n = (0, r(13141).a)(t, e);
                                    if (!n) return;
                                    let {
                                        transitionEnd: i,
                                        transition: s,
                                        ...o
                                    } = n;
                                    for (let t in o) {
                                        let e = o[t];
                                        if (Array.isArray(e)) {
                                            let t = c ? e.length - 1 : 0;
                                            e = e[t]
                                        }
                                        null !== e && (a[t] = e)
                                    }
                                    for (let t in i) a[t] = i[t]
                                }), a
                            }(s, a, o, t),
                            renderState: e()
                        };
                        return n && (l.mount = t => n(s, t, l)), l
                    })(t, e, a, o);
                return s ? l() : (0, r(328601).M)(l)
            }
        },
        98288: (t, e, r) => {
            r.d(e, {
                B: () => n
            });
            let n = "u" > typeof document
        },
        102839: (t, e, r) => {
            r.d(e, {
                j: () => n
            });
            let n = (t, e, r) => -r * t + r * e + t
        },
        104355: (t, e, r) => {
            r.d(e, {
                J: () => n
            });
            let n = (t, e) => (0, r(119110).Q)(t) ? new(r(142159)).l(e, {
                enableHardwareAcceleration: !1
            }) : new(r(130963)).M(e, {
                enableHardwareAcceleration: !0
            })
        },
        108452: (t, e, r) => {
            r.d(e, {
                O: () => n,
                r: () => i
            });
            let n = {
                    current: null
                },
                i = {
                    current: !1
                }
        },
        113996: (t, e, r) => {
            r.d(e, {
                B: () => i
            });
            let n = {
                    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
                    exit: ["exit"],
                    drag: ["drag", "dragControls"],
                    focus: ["whileFocus"],
                    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
                    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
                    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
                    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
                    layout: ["layout", "layoutId"]
                },
                i = {};
            for (let t in n) i[t] = {
                isEnabled: e => n[t].some(t => !!e[t])
            }
        },
        119110: (t, e, r) => {
            r.d(e, {
                Q: () => i
            });
            let n = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];

            function i(t) {
                if ("string" != typeof t || t.includes("-"));
                else if (n.indexOf(t) > -1 || /[A-Z]/.test(t)) return !0;
                return !1
            }
        },
        130963: (t, e, r) => {
            r.d(e, {
                M: () => i
            });
            var n = () => r(997476);
            class i extends n().b {
                readValueFromInstance(t, e) {
                    if (r(582200).f.has(e)) {
                        let t = (0, r(881619).D)(e);
                        return t && t.default || 0
                    } {
                        let n = window.getComputedStyle(t),
                            i = ((0, r(340568).j4)(e) ? n.getPropertyValue(e) : n[e]) || 0;
                        return "string" == typeof i ? i.trim() : i
                    }
                }
                measureInstanceViewportBox(t, {
                    transformPagePoint: e
                }) {
                    return (0, r(494805).m)(t, e)
                }
                build(t, e, n, i) {
                    (0, r(892754).O)(t, e, n, i.transformTemplate)
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, r(704494).x)(t, e)
                }
                handleChildMotionValue() {
                    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
                    let {
                        children: t
                    } = this.props;
                    (0, r(469896).S)(t) && (this.childSubscription = t.on("change", t => {
                        this.current && (this.current.textContent = `${t}`)
                    }))
                }
                renderInstance(t, e, n, i) {
                    (0, r(159836).e)(t, e, n, i)
                }
            }
        },
        142159: (t, e, r) => {
            r.d(e, {
                l: () => i
            });
            var n = () => r(997476);
            class i extends n().b {
                constructor() {
                    super(...arguments), this.isSVGTag = !1
                }
                getBaseTargetFromProps(t, e) {
                    return t[e]
                }
                readValueFromInstance(t, e) {
                    if (r(582200).f.has(e)) {
                        let t = (0, r(881619).D)(e);
                        return t && t.default || 0
                    }
                    return e = r(922311).e.has(e) ? e : (0, r(348062).I)(e), t.getAttribute(e)
                }
                measureInstanceViewportBox() {
                    return (0, r(554106).ge)()
                }
                scrapeMotionValuesFromProps(t, e) {
                    return (0, r(932777).x)(t, e)
                }
                build(t, e, n, i) {
                    (0, r(920164).B)(t, e, n, this.isSVGTag, i.transformTemplate)
                }
                renderInstance(t, e, n, i) {
                    (0, r(797415).d)(t, e, n, i)
                }
                mount(t) {
                    this.isSVGTag = (0, r(316793).n)(t.tagName), super.mount(t)
                }
            }
        },
        145320: (t, e, r) => {
            r.d(e, {
                J: () => n
            });

            function n(t, e) {
                let n = (0, r(881619).D)(t);
                return n !== r(426044).p && (n = r(641614).f), n.getAnimatableNone ? n.getAnimatableNone(e) : void 0
            }
        },
        147365: (t, e, r) => {
            r.d(e, {
                B: () => n,
                K: () => i
            });
            let n = t => !!(t && "object" == typeof t && t.mix && t.toValue),
                i = t => (0, r(401712).p)(t) ? t[t.length - 1] || 0 : t
        },
        155269: (t, e, r) => {
            r.d(e, {
                KN: () => s,
                gQ: () => u,
                px: () => a,
                uj: () => i,
                vh: () => o,
                vw: () => l
            });
            let n = t => ({
                    test: e => (0, r(767296).Kg)(e) && e.endsWith(t) && 1 === e.split(" ").length,
                    parse: parseFloat,
                    transform: e => `${e}${t}`
                }),
                i = n("deg"),
                s = n("%"),
                a = n("px"),
                o = n("vh"),
                l = n("vw"),
                u = { ...s,
                    parse: t => s.parse(t) / 100,
                    transform: t => s.transform(100 * t)
                }
        },
        159836: (t, e, r) => {
            r.d(e, {
                e: () => n
            });

            function n(t, {
                style: e,
                vars: r
            }, i, s) {
                for (let n in Object.assign(t.style, e, s && s.getProjectionStyles(i)), r) t.style.setProperty(n, r[n])
            }
        },
        184868: (t, e, r) => {
            r.d(e, {
                po: () => n,
                tn: () => s,
                yT: () => i
            });
            let n = t => 1 - Math.sin(Math.acos(t)),
                i = (0, r(292946).G)(n),
                s = (0, r(783041).V)(n)
        },
        193868: (t, e, r) => {
            r.d(e, {
                n: () => i
            });
            class n {
                constructor() {
                    this.order = [], this.scheduled = new Set
                }
                add(t) {
                    if (!this.scheduled.has(t)) return this.scheduled.add(t), this.order.push(t), !0
                }
                remove(t) {
                    let e = this.order.indexOf(t); - 1 !== e && (this.order.splice(e, 1), this.scheduled.delete(t))
                }
                clear() {
                    this.order.length = 0, this.scheduled.clear()
                }
            }

            function i(t) {
                let e = new n,
                    r = new n,
                    i = 0,
                    s = !1,
                    a = !1,
                    o = new WeakSet,
                    l = {
                        schedule: (t, n = !1, a = !1) => {
                            let l = a && s,
                                u = l ? e : r;
                            return n && o.add(t), u.add(t) && l && s && (i = e.order.length), t
                        },
                        cancel: t => {
                            r.remove(t), o.delete(t)
                        },
                        process: n => {
                            if (s) {
                                a = !0;
                                return
                            }
                            if (s = !0, [e, r] = [r, e], r.clear(), i = e.order.length)
                                for (let r = 0; r < i; r++) {
                                    let i = e.order[r];
                                    i(n), o.has(i) && (l.schedule(i), t())
                                }
                            s = !1, a && (a = !1, l.process(n))
                        }
                    };
                return l
            }
        },
        196060: (t, e, r) => {
            r.d(e, {
                o: () => n
            });
            let n = Symbol.for("motionComponentSymbol")
        },
        204111: (t, e, r) => {
            r.d(e, {
                d: () => a
            });
            var n = () => r(582200);
            let i = {
                    x: "translateX",
                    y: "translateY",
                    z: "translateZ",
                    transformPerspective: "perspective"
                },
                s = n().U.length;

            function a(t, {
                enableHardwareAcceleration: e = !0,
                allowTransformNone: r = !0
            }, o, l) {
                let u = "";
                for (let e = 0; e < s; e++) {
                    let r = n().U[e];
                    if (void 0 !== t[r]) {
                        let e = i[r] || r;
                        u += `${e}(${t[r]}) `
                    }
                }
                return e && !t.z && (u += "translateZ(0)"), u = u.trim(), l ? u = l(t, o ? "" : u) : r && o && (u = "none"), u
            }
        },
        205673: (t, e, r) => {
            r.d(e, {
                OU: () => l,
                Ql: () => d,
                Ww: () => f,
                hq: () => i,
                o4: () => o
            });
            var n = () => r(841630);

            function i(t, e, r) {
                return r + e * (t - r)
            }

            function s(t, e, r, n, i) {
                return void 0 !== i && (t = n + i * (t - n)), n + r * (t - n) + e
            }

            function a(t, e = 0, r = 1, n, i) {
                t.min = s(t.min, e, r, n, i), t.max = s(t.max, e, r, n, i)
            }

            function o(t, {
                x: e,
                y: r
            }) {
                a(t.x, e.translate, e.scale, e.originPoint), a(t.y, r.translate, r.scale, r.originPoint)
            }

            function l(t, e, r, i = !1) {
                let s, a, d = r.length;
                if (d) {
                    e.x = e.y = 1;
                    for (let l = 0; l < d; l++) {
                        a = (s = r[l]).projectionDelta;
                        let u = s.instance;
                        (!u || !u.style || "contents" !== u.style.display) && (i && s.options.layoutScroll && s.scroll && s !== s.root && f(t, {
                            x: -s.scroll.offset.x,
                            y: -s.scroll.offset.y
                        }), a && (e.x *= a.x.scale, e.y *= a.y.scale, o(t, a)), i && (0, n().HD)(s.latestValues) && f(t, s.latestValues))
                    }
                    e.x = u(e.x), e.y = u(e.y)
                }
            }

            function u(t) {
                return Number.isInteger(t) || t > 1.0000000000001 || t < .999999999999 ? t : 1
            }

            function d(t, e) {
                t.min = t.min + e, t.max = t.max + e
            }

            function h(t, e, [n, i, s]) {
                let o = void 0 !== e[s] ? e[s] : .5,
                    l = (0, r(102839).j)(t.min, t.max, o);
                a(t, e[n], e[i], l, e.scale)
            }
            let c = ["x", "scaleX", "originX"],
                p = ["y", "scaleY", "originY"];

            function f(t, e) {
                h(t.x, e, c), h(t.y, e, p)
            }
        },
        206153: (t, e, r) => {
            r.d(e, {
                p: () => n
            });

            function n(t) {
                let e;
                return () => (void 0 === e && (e = t()), e)
            }
        },
        213379: (t, e, r) => {
            r.d(e, {
                C: () => n
            });
            let n = new WeakMap
        },
        219189: (t, e, r) => {
            r.d(e, {
                f: () => d
            });
            let n = (0, r(206153).p)(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
                i = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"]),
                s = {
                    type: "spring",
                    stiffness: 500,
                    damping: 25,
                    restSpeed: 10
                },
                a = {
                    type: "keyframes",
                    duration: .8
                },
                o = {
                    type: "keyframes",
                    ease: [.25, .1, .35, 1],
                    duration: .3
                },
                l = (t, e) => "zIndex" !== t && !!("number" == typeof e || Array.isArray(e) || "string" == typeof e && (r(641614).f.test(e) || "0" === e) && !e.startsWith("url("));
            var u = () => r(145320);
            let d = (t, e, d, h = {}) => c => {
                let p = (0, r(502010).r)(h, t) || {},
                    f = p.delay || h.delay || 0,
                    {
                        elapsed: m = 0
                    } = h;
                m -= (0, r(374833).f)(f);
                let g = function(t, e, n, i) {
                        let s, a, o = l(e, n);
                        s = Array.isArray(n) ? [...n] : [null, n];
                        let d = void 0 !== i.from ? i.from : t.get(),
                            h = [];
                        for (let t = 0; t < s.length; t++) {
                            var c;
                            null === s[t] && (s[t] = 0 === t ? d : s[t - 1]), ("number" == typeof(c = s[t]) ? 0 === c : null !== c ? "none" === c || "0" === c || (0, r(877312).$)(c) : void 0) && h.push(t), "string" == typeof s[t] && "none" !== s[t] && "0" !== s[t] && (a = s[t])
                        }
                        if (o && h.length && a)
                            for (let t = 0; t < h.length; t++) s[h[t]] = (0, u().J)(e, a);
                        return s
                    }(e, t, d, p),
                    v = g[0],
                    y = g[g.length - 1],
                    b = l(t, v),
                    x = l(t, y);
                (0, r(285238).$)(b === x, `You are trying to animate ${t} from "${v}" to "${y}". ${v} is not an animatable value - to enable this animation set ${v} to a value animatable to ${y} via the \`style\` property.`);
                let w = {
                    keyframes: g,
                    velocity: e.getVelocity(),
                    ease: "easeOut",
                    ...p,
                    delay: -m,
                    onUpdate: t => {
                        e.set(t), p.onUpdate && p.onUpdate(t)
                    },
                    onComplete: () => {
                        c(), p.onComplete && p.onComplete()
                    }
                };
                if ((0, r(502010).D)(p) || (w = { ...w,
                        ...((t, {
                            keyframes: e
                        }) => e.length > 2 ? a : r(582200).f.has(t) ? t.startsWith("scale") ? {
                            type: "spring",
                            stiffness: 550,
                            damping: 0 === e[1] ? 2 * Math.sqrt(550) : 30,
                            restSpeed: 10
                        } : s : o)(t, w)
                    }), w.duration && (w.duration = (0, r(374833).f)(w.duration)), w.repeatDelay && (w.repeatDelay = (0, r(374833).f)(w.repeatDelay)), !b || !x || r(639652).d.current || !1 === p.type || r(974668).W.skipAnimations) return function({
                    keyframes: t,
                    delay: e,
                    onUpdate: n,
                    onComplete: i
                }) {
                    let s = () => (n && n(t[t.length - 1]), i && i(), {
                        time: 0,
                        speed: 1,
                        duration: 0,
                        play: r(803659).l,
                        pause: r(803659).l,
                        stop: r(803659).l,
                        then: t => (t(), Promise.resolve()),
                        cancel: r(803659).l,
                        complete: r(803659).l
                    });
                    return e ? (0, r(278458).L)({
                        keyframes: [0, 1],
                        duration: 0,
                        delay: e,
                        onComplete: s
                    }) : s()
                }(r(639652).d.current ? { ...w,
                    delay: 0
                } : w);
                if (!h.isHandoff && e.owner && e.owner.current instanceof HTMLElement && !e.owner.getProps().onUpdate) {
                    let s = function(t, e, {
                        onUpdate: s,
                        onComplete: a,
                        ...o
                    }) {
                        let l, u;
                        if (!(n() && i.has(e) && !o.repeatDelay && "mirror" !== o.repeatType && 0 !== o.damping && "inertia" !== o.type)) return !1;
                        let d = !1,
                            h = !1,
                            c = () => {
                                u = new Promise(t => {
                                    l = t
                                })
                            };
                        c();
                        let {
                            keyframes: p,
                            duration: f = 300,
                            ease: m,
                            times: g
                        } = o;
                        if ("spring" === o.type || "backgroundColor" === e || !(0, r(979406).yL)(o.ease)) {
                            let t = (0, r(278458).L)({ ...o,
                                    repeat: 0,
                                    delay: 0
                                }),
                                e = {
                                    done: !1,
                                    value: p[0]
                                },
                                n = [],
                                i = 0;
                            for (; !e.done && i < 2e4;) e = t.sample(i), n.push(e.value), i += 10;
                            g = void 0, p = n, f = i - 10, m = "linear"
                        }
                        let v = (0, r(799734).X)(t.owner.current, e, p, { ...o,
                                duration: f,
                                ease: m,
                                times: g
                            }),
                            y = () => {
                                h = !1, v.cancel()
                            },
                            b = () => {
                                h = !0, r(610104).Gt.update(y), l(), c()
                            };
                        return v.onfinish = () => {
                            h || (t.set(function(t, {
                                repeat: e,
                                repeatType: r = "loop"
                            }) {
                                let n = e && "loop" !== r && e % 2 == 1 ? 0 : t.length - 1;
                                return t[n]
                            }(p, o)), a && a(), b())
                        }, {
                            then: (t, e) => u.then(t, e),
                            attachTimeline: t => (v.timeline = t, v.onfinish = null, r(803659).l),
                            get time() {
                                return (0, r(374833).X)(v.currentTime || 0)
                            },
                            set time(newTime) {
                                v.currentTime = (0, r(374833).f)(newTime)
                            },
                            get speed() {
                                return v.playbackRate
                            },
                            set speed(newSpeed) {
                                v.playbackRate = newSpeed
                            },
                            get duration() {
                                return (0, r(374833).X)(f)
                            },
                            play: () => {
                                d || (v.play(), (0, r(610104).WG)(y))
                            },
                            pause: () => v.pause(),
                            stop: () => {
                                if (d = !0, "idle" === v.playState) return;
                                let {
                                    currentTime: e
                                } = v;
                                if (e) {
                                    let n = (0, r(278458).L)({ ...o,
                                        autoplay: !1
                                    });
                                    t.setWithVelocity(n.sample(e - 10).value, n.sample(e).value, 10)
                                }
                                b()
                            },
                            complete: () => {
                                h || v.finish()
                            },
                            cancel: b
                        }
                    }(e, t, w);
                    if (s) return s
                }
                return (0, r(278458).L)(w)
            }
        },
        223717: (t, e, r) => {
            r.d(e, {
                N: () => n
            });
            let n = (0, r(296540).createContext)({})
        },
        236551: (t, e, r) => {
            r.d(e, {
                w: () => n
            });

            function n(t) {
                return "string" == typeof t || Array.isArray(t)
            }
        },
        247862: (t, e, r) => {
            r.d(e, {
                M: () => n
            });
            let n = t => "mouse" === t.pointerType ? "number" != typeof t.button || t.button <= 0 : !1 !== t.isPrimary
        },
        278458: (t, e, r) => {
            function n({
                duration: t = 300,
                keyframes: e,
                times: i,
                ease: s = "easeInOut"
            }) {
                var a;
                let o = (0, r(517795).h)(s) ? s.map(r(360983).K) : (0, r(360983).K)(s),
                    l = {
                        done: !1,
                        value: e[0]
                    },
                    u = (a = i && i.length === e.length ? i : (0, r(761899).Z)(e), a.map(e => e * t)),
                    d = (0, r(13070).G)(u, e, {
                        ease: Array.isArray(o) ? o : e.map(() => o || r(293771).am).splice(0, e.length - 1)
                    });
                return {
                    calculatedDuration: t,
                    next: e => (l.value = d(e), l.done = e >= t, l)
                }
            }

            function i({
                keyframes: t,
                velocity: e = 0,
                power: n = .8,
                timeConstant: s = 325,
                bounceDamping: a = 10,
                bounceStiffness: o = 500,
                modifyTarget: l,
                min: u,
                max: d,
                restDelta: h = .5,
                restSpeed: c
            }) {
                let p, f, m = t[0],
                    g = {
                        done: !1,
                        value: m
                    },
                    v = n * e,
                    y = m + v,
                    b = void 0 === l ? y : l(y);
                b !== y && (v = b - m);
                let x = t => -v * Math.exp(-t / s),
                    w = t => b + x(t),
                    V = t => {
                        let e = x(t),
                            r = w(t);
                        g.done = Math.abs(e) <= h, g.value = g.done ? b : r
                    },
                    A = t => {
                        let e;
                        if (e = g.value, void 0 !== u && e < u || void 0 !== d && e > d) {
                            var n;
                            p = t, f = (0, r(929676).o)({
                                keyframes: [g.value, (n = g.value, void 0 === u ? d : void 0 === d || Math.abs(u - n) < Math.abs(d - n) ? u : d)],
                                velocity: (0, r(358426).Y)(w, t, g.value),
                                damping: a,
                                stiffness: o,
                                restDelta: h,
                                restSpeed: c
                            })
                        }
                    };
                return A(0), {
                    calculatedDuration: null,
                    next: t => {
                        let e = !1;
                        return (f || void 0 !== p || (e = !0, V(t), A(t)), void 0 !== p && t > p) ? f.next(t - p) : (e || V(t), g)
                    }
                }
            }
            r.d(e, {
                L: () => o
            });
            let s = t => {
                    let e = ({
                        timestamp: e
                    }) => t(e);
                    return {
                        start: () => r(610104).Gt.update(e, !0),
                        stop: () => (0, r(610104).WG)(e),
                        now: () => r(610104).uv.isProcessing ? r(610104).uv.timestamp : performance.now()
                    }
                },
                a = {
                    decay: i,
                    inertia: i,
                    tween: n,
                    keyframes: n,
                    spring: r(929676).o
                };

            function o({
                autoplay: t = !0,
                delay: e = 0,
                driver: i = s,
                keyframes: l,
                type: u = "keyframes",
                repeat: d = 0,
                repeatDelay: h = 0,
                repeatType: c = "loop",
                onPlay: p,
                onStop: f,
                onComplete: m,
                onUpdate: g,
                ...v
            }) {
                let y, b, x, w, V, A = 1,
                    S = !1,
                    P = () => {
                        b = new Promise(t => {
                            y = t
                        })
                    };
                P();
                let C = a[u] || n;
                C !== n && "number" != typeof l[0] && (w = (0, r(13070).G)([0, 100], l, {
                    clamp: !1
                }), l = [0, 100]);
                let M = C({ ...v,
                    keyframes: l
                });
                "mirror" === c && (V = C({ ...v,
                    keyframes: [...l].reverse(),
                    velocity: -(v.velocity || 0)
                }));
                let k = "idle",
                    T = null,
                    F = null,
                    E = null;
                null === M.calculatedDuration && d && (M.calculatedDuration = (0, r(882857).t)(M));
                let {
                    calculatedDuration: O
                } = M, B = 1 / 0, j = 1 / 0;
                null !== O && (j = (B = O + h) * (d + 1) - h);
                let I = 0,
                    L = t => {
                        if (null === F) return;
                        A > 0 && (F = Math.min(F, t)), A < 0 && (F = Math.min(t - j / A, F));
                        let n = (I = null !== T ? T : Math.round(t - F) * A) - e * (A >= 0 ? 1 : -1),
                            i = A >= 0 ? n < 0 : n > j;
                        I = Math.max(n, 0), "finished" === k && null === T && (I = j);
                        let s = I,
                            a = M;
                        if (d) {
                            let t = Math.min(I, j) / B,
                                e = Math.floor(t),
                                n = t % 1;
                            !n && t >= 1 && (n = 1), 1 === n && e--, (e = Math.min(e, d + 1)) % 2 && ("reverse" === c ? (n = 1 - n, h && (n -= h / B)) : "mirror" === c && (a = V)), s = (0, r(442464).q)(0, 1, n) * B
                        }
                        let o = i ? {
                            done: !1,
                            value: l[0]
                        } : a.next(s);
                        w && (o.value = w(o.value));
                        let {
                            done: u
                        } = o;
                        i || null === O || (u = A >= 0 ? I >= j : I <= 0);
                        let p = null === T && ("finished" === k || "running" === k && u);
                        return g && g(o.value), p && D(), o
                    },
                    $ = () => {
                        x && x.stop(), x = void 0
                    },
                    X = () => {
                        k = "idle", $(), y(), P(), F = E = null
                    },
                    D = () => {
                        k = "finished", m && m(), $(), y()
                    },
                    W = () => {
                        if (S) return;
                        x || (x = i(L));
                        let t = x.now();
                        p && p(), null !== T ? F = t - T : F && "finished" !== k || (F = t), "finished" === k && P(), E = F, T = null, k = "running", x.start()
                    };
                t && W();
                let N = {
                    then: (t, e) => b.then(t, e),
                    get time() {
                        return (0, r(374833).X)(I)
                    },
                    set time(newTime) {
                        I = newTime = (0, r(374833).f)(newTime), null === T && x && 0 !== A ? F = x.now() - newTime / A : T = newTime
                    },
                    get duration() {
                        let t = null === M.calculatedDuration ? (0, r(882857).t)(M) : M.calculatedDuration;
                        return (0, r(374833).X)(t)
                    },
                    get speed() {
                        return A
                    },
                    set speed(newSpeed) {
                        if (newSpeed === A || !x) return;
                        A = newSpeed, N.time = (0, r(374833).X)(I)
                    },
                    get state() {
                        return k
                    },
                    play: W,
                    pause: () => {
                        k = "paused", T = I
                    },
                    stop: () => {
                        S = !0, "idle" !== k && (k = "idle", f && f(), X())
                    },
                    cancel: () => {
                        null !== E && L(E), X()
                    },
                    complete: () => {
                        k = "finished"
                    },
                    sample: t => (F = 0, L(t))
                };
                return N
            }
        },
        285238: (t, e, r) => {
            r.d(e, {
                $: () => n,
                V: () => i
            });
            let n = r(803659).l,
                i = r(803659).l
        },
        292946: (t, e, r) => {
            r.d(e, {
                G: () => n
            });
            let n = t => e => 1 - t(1 - e)
        },
        293771: (t, e, r) => {
            r.d(e, {
                a6: () => n,
                am: () => s,
                vT: () => i
            });
            let n = (0, r(604043).A)(.42, 0, 1, 1),
                i = (0, r(604043).A)(0, 0, .58, 1),
                s = (0, r(604043).A)(.42, 0, .58, 1)
        },
        303557: (t, e, r) => {
            r.d(e, {
                k: () => n
            });

            function n(t) {
                return !!((0, r(469896).S)(t) && t.add)
            }
        },
        316793: (t, e, r) => {
            r.d(e, {
                n: () => n
            });
            let n = t => "string" == typeof t && "svg" === t.toLowerCase()
        },
        317890: (t, e, r) => {
            function n(t) {
                let e = null;
                return () => null === e && (e = t, () => {
                    e = null
                })
            }
            r.d(e, {
                D3: () => o,
                nQ: () => a
            });
            let i = n("dragHorizontal"),
                s = n("dragVertical");

            function a(t) {
                let e = !1;
                if ("y" === t) e = s();
                else if ("x" === t) e = i();
                else {
                    let t = i(),
                        r = s();
                    t && r ? e = () => {
                        t(), r()
                    } : (t && t(), r && r())
                }
                return e
            }

            function o() {
                let t = a(!0);
                return !t || (t(), !1)
            }
        },
        328601: (t, e, r) => {
            r.d(e, {
                M: () => i
            });
            var n = r(296540);

            function i(t) {
                let e = (0, n.useRef)(null);
                return null === e.current && (e.current = t()), e.current
            }
        },
        333735: (t, e, r) => {
            r.d(e, {
                B: () => i
            });
            let n = { ...r(682944).ai,
                    transform: t => Math.round((0, r(442464).q)(0, 255, t))
                },
                i = {
                    test: (0, r(988304).$)("rgb", "red"),
                    parse: (0, r(988304).q)("red", "green", "blue"),
                    transform: ({
                        red: t,
                        green: e,
                        blue: i,
                        alpha: s = 1
                    }) => "rgba(" + n.transform(t) + ", " + n.transform(e) + ", " + n.transform(i) + ", " + (0, r(767296).aj)(r(682944).X4.transform(s)) + ")"
                }
        },
        337807: (t, e, r) => {
            r.d(e, {
                W: () => f
            });
            var n = () => r(465490),
                i = () => r(401712);

            function s(t, e) {
                if (!Array.isArray(e)) return !1;
                let r = e.length;
                if (r !== t.length) return !1;
                for (let n = 0; n < r; n++)
                    if (e[n] !== t[n]) return !1;
                return !0
            }
            var a = () => r(236551);
            let o = [...r(435092).U].reverse(),
                l = r(435092).U.length;

            function u(t = !1) {
                return {
                    isActive: t,
                    protectedKeys: {},
                    needsAnimating: {},
                    prevResolvedValues: {}
                }
            }
            var d = () => r(603044);
            class h extends d().X {
                constructor(t) {
                    super(t), t.animationState || (t.animationState = function(t) {
                        let e = e => Promise.all(e.map(({
                                animation: e,
                                options: n
                            }) => (0, r(452094)._)(t, e, n))),
                            d = {
                                animate: u(!0),
                                whileInView: u(),
                                whileHover: u(),
                                whileTap: u(),
                                whileDrag: u(),
                                whileFocus: u(),
                                exit: u()
                            },
                            h = !0,
                            c = (e, n) => {
                                let i = (0, r(474737).K)(t, n);
                                if (i) {
                                    let {
                                        transition: t,
                                        transitionEnd: r,
                                        ...n
                                    } = i;
                                    e = { ...e,
                                        ...n,
                                        ...r
                                    }
                                }
                                return e
                            };

                        function p(r, u) {
                            let p = t.getProps(),
                                f = t.getVariantContext(!0) || {},
                                m = [],
                                g = new Set,
                                v = {},
                                y = 1 / 0;
                            for (let e = 0; e < l; e++) {
                                var b, x;
                                let l = o[e],
                                    w = d[l],
                                    V = void 0 !== p[l] ? p[l] : f[l],
                                    A = (0, a().w)(V),
                                    S = l === u ? w.isActive : null;
                                !1 === S && (y = e);
                                let P = V === f[l] && V !== p[l] && A;
                                if (P && h && t.manuallyAnimateOnMount && (P = !1), w.protectedKeys = { ...v
                                    }, !w.isActive && null === S || !V && !w.prevProp || (0, n().N)(V) || "boolean" == typeof V) continue;
                                let C = (b = w.prevProp, ("string" == typeof(x = V) ? x !== b : !!Array.isArray(x) && !s(x, b)) || l === u && w.isActive && !P && A || e > y && A),
                                    M = !1,
                                    k = Array.isArray(V) ? V : [V],
                                    T = k.reduce(c, {});
                                !1 === S && (T = {});
                                let {
                                    prevResolvedValues: F = {}
                                } = w, E = { ...F,
                                    ...T
                                }, O = t => {
                                    C = !0, g.has(t) && (M = !0, g.delete(t)), w.needsAnimating[t] = !0
                                };
                                for (let t in E) {
                                    let e = T[t],
                                        r = F[t];
                                    if (!v.hasOwnProperty(t))((0, i().p)(e) && (0, i().p)(r) ? s(e, r) : e === r) ? void 0 !== e && g.has(t) ? O(t) : w.protectedKeys[t] = !0 : void 0 !== e ? O(t) : g.add(t)
                                }
                                w.prevProp = V, w.prevResolvedValues = T, w.isActive && (v = { ...v,
                                    ...T
                                }), h && t.blockInitialAnimation && (C = !1), C && (!P || M) && m.push(...k.map(t => ({
                                    animation: t,
                                    options: {
                                        type: l,
                                        ...r
                                    }
                                })))
                            }
                            if (g.size) {
                                let e = {};
                                g.forEach(r => {
                                    let n = t.getBaseTarget(r);
                                    void 0 !== n && (e[r] = n)
                                }), m.push({
                                    animation: e
                                })
                            }
                            let w = !!m.length;
                            return h && (!1 === p.initial || p.initial === p.animate) && !t.manuallyAnimateOnMount && (w = !1), h = !1, w ? e(m) : Promise.resolve()
                        }
                        return {
                            animateChanges: p,
                            setActive: function(e, r, n) {
                                var i;
                                if (d[e].isActive === r) return Promise.resolve();
                                null == (i = t.variantChildren) || i.forEach(t => {
                                    var n;
                                    return null == (n = t.animationState) ? void 0 : n.setActive(e, r)
                                }), d[e].isActive = r;
                                let s = p(n, e);
                                for (let t in d) d[t].protectedKeys = {};
                                return s
                            },
                            setAnimateFunction: function(r) {
                                e = r(t)
                            },
                            getState: () => d
                        }
                    }(t))
                }
                updateAnimationControlsSubscription() {
                    let {
                        animate: t
                    } = this.node.getProps();
                    this.unmount(), (0, n().N)(t) && (this.unmount = t.subscribe(this.node))
                }
                mount() {
                    this.updateAnimationControlsSubscription()
                }
                update() {
                    let {
                        animate: t
                    } = this.node.getProps(), {
                        animate: e
                    } = this.node.prevProps || {};
                    t !== e && this.updateAnimationControlsSubscription()
                }
                unmount() {}
            }
            let c = 0;
            class p extends d().X {
                constructor() {
                    super(...arguments), this.id = c++
                }
                update() {
                    if (!this.node.presenceContext) return;
                    let {
                        isPresent: t,
                        onExitComplete: e,
                        custom: r
                    } = this.node.presenceContext, {
                        isPresent: n
                    } = this.node.prevPresenceContext || {};
                    if (!this.node.animationState || t === n) return;
                    let i = this.node.animationState.setActive("exit", !t, {
                        custom: null != r ? r : this.node.getProps().custom
                    });
                    e && !t && i.then(() => e(this.id))
                }
                mount() {
                    let {
                        register: t
                    } = this.node.presenceContext || {};
                    t && (this.unmount = t(this.id))
                }
                unmount() {}
            }
            let f = {
                animation: {
                    Feature: h
                },
                exit: {
                    Feature: p
                }
            }
        },
        340568: (t, e, r) => {
            r.d(e, {
                j4: () => i,
                pG: () => s,
                z2: () => a
            });
            let n = t => e => "string" == typeof e && e.startsWith(t),
                i = n("--"),
                s = n("var(--"),
                a = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
        },
        344768: (t, e, r) => {
            r.d(e, {
                Sz: () => n,
                ZZ: () => s,
                dg: () => i
            });
            let n = (0, r(604043).A)(.33, 1.53, .69, .99),
                i = (0, r(292946).G)(n),
                s = (0, r(783041).V)(i)
        },
        345153: (t, e, r) => {
            r.d(e, {
                A: () => n
            });
            let n = (0, r(296540).createContext)({})
        },
        345639: (t, e, r) => {
            r.d(e, {
                W: () => i
            });
            let n = { ...r(682944).ai,
                    transform: Math.round
                },
                i = {
                    borderWidth: r(155269).px,
                    borderTopWidth: r(155269).px,
                    borderRightWidth: r(155269).px,
                    borderBottomWidth: r(155269).px,
                    borderLeftWidth: r(155269).px,
                    borderRadius: r(155269).px,
                    radius: r(155269).px,
                    borderTopLeftRadius: r(155269).px,
                    borderTopRightRadius: r(155269).px,
                    borderBottomRightRadius: r(155269).px,
                    borderBottomLeftRadius: r(155269).px,
                    width: r(155269).px,
                    maxWidth: r(155269).px,
                    height: r(155269).px,
                    maxHeight: r(155269).px,
                    size: r(155269).px,
                    top: r(155269).px,
                    right: r(155269).px,
                    bottom: r(155269).px,
                    left: r(155269).px,
                    padding: r(155269).px,
                    paddingTop: r(155269).px,
                    paddingRight: r(155269).px,
                    paddingBottom: r(155269).px,
                    paddingLeft: r(155269).px,
                    margin: r(155269).px,
                    marginTop: r(155269).px,
                    marginRight: r(155269).px,
                    marginBottom: r(155269).px,
                    marginLeft: r(155269).px,
                    rotate: r(155269).uj,
                    rotateX: r(155269).uj,
                    rotateY: r(155269).uj,
                    rotateZ: r(155269).uj,
                    scale: r(682944).hs,
                    scaleX: r(682944).hs,
                    scaleY: r(682944).hs,
                    scaleZ: r(682944).hs,
                    skew: r(155269).uj,
                    skewX: r(155269).uj,
                    skewY: r(155269).uj,
                    distance: r(155269).px,
                    translateX: r(155269).px,
                    translateY: r(155269).px,
                    translateZ: r(155269).px,
                    x: r(155269).px,
                    y: r(155269).px,
                    z: r(155269).px,
                    perspective: r(155269).px,
                    transformPerspective: r(155269).px,
                    opacity: r(682944).X4,
                    originX: r(155269).gQ,
                    originY: r(155269).gQ,
                    originZ: r(155269).px,
                    zIndex: n,
                    fillOpacity: r(682944).X4,
                    strokeOpacity: r(682944).X4,
                    numOctaves: n
                }
        },
        348062: (t, e, r) => {
            r.d(e, {
                I: () => n
            });
            let n = t => t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
        },
        358426: (t, e, r) => {
            r.d(e, {
                Y: () => n
            });

            function n(t, e, n) {
                let i = Math.max(e - 5, 0);
                return (0, r(957177).f)(n - t(i), e - i)
            }
        },
        360983: (t, e, r) => {
            r.d(e, {
                K: () => i
            });
            let n = {
                    linear: r(803659).l,
                    easeIn: r(293771).a6,
                    easeInOut: r(293771).am,
                    easeOut: r(293771).vT,
                    circIn: r(184868).po,
                    circInOut: r(184868).tn,
                    circOut: r(184868).yT,
                    backIn: r(344768).dg,
                    backInOut: r(344768).ZZ,
                    backOut: r(344768).Sz,
                    anticipate: r(410309).b
                },
                i = t => {
                    if (Array.isArray(t)) {
                        (0, r(285238).V)(4 === t.length, "Cubic bezier arrays must contain four numerical values.");
                        let [e, n, i, s] = t;
                        return (0, r(604043).A)(e, n, i, s)
                    }
                    return "string" == typeof t ? ((0, r(285238).V)(void 0 !== n[t], `Invalid easing type '${t}'`), n[t]) : t
                }
        },
        374833: (t, e, r) => {
            r.d(e, {
                X: () => i,
                f: () => n
            });
            let n = t => 1e3 * t,
                i = t => t / 1e3
        },
        401712: (t, e, r) => {
            r.d(e, {
                p: () => n
            });
            let n = t => Array.isArray(t)
        },
        410309: (t, e, r) => {
            r.d(e, {
                b: () => n
            });
            let n = t => (t *= 2) < 1 ? .5 * (0, r(344768).dg)(t) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        418344: (t, e, r) => {
            r.d(e, {
                t: () => i
            });
            let n = [...r(425141).T, r(27739).y, r(641614).f],
                i = t => n.find((0, r(451969).w)(t))
        },
        425141: (t, e, r) => {
            r.d(e, {
                T: () => n,
                n: () => i
            });
            let n = [r(682944).ai, r(155269).px, r(155269).KN, r(155269).uj, r(155269).vw, r(155269).vh, {
                    test: t => "auto" === t,
                    parse: t => t
                }],
                i = t => n.find((0, r(451969).w)(t))
        },
        426044: (t, e, r) => {
            r.d(e, {
                p: () => a
            });
            let n = new Set(["brightness", "contrast", "saturate", "opacity"]);

            function i(t) {
                let [e, i] = t.slice(0, -1).split("(");
                if ("drop-shadow" === e) return t;
                let [s] = i.match(r(767296).SY) || [];
                if (!s) return t;
                let a = i.replace(s, ""),
                    o = +!!n.has(e);
                return s !== i && (o *= 100), e + "(" + o + a + ")"
            }
            let s = /([a-z-]*)\(.*?\)/g,
                a = { ...r(641614).f,
                    getAnimatableNone: t => {
                        let e = t.match(s);
                        return e ? e.map(i).join(" ") : t
                    }
                }
        },
        435092: (t, e, r) => {
            r.d(e, {
                U: () => n,
                _: () => i
            });
            let n = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"],
                i = ["initial", ...n]
        },
        442464: (t, e, r) => {
            r.d(e, {
                q: () => n
            });
            let n = (t, e, r) => Math.min(Math.max(r, t), e)
        },
        451969: (t, e, r) => {
            r.d(e, {
                w: () => n
            });
            let n = t => e => e.test(t)
        },
        452094: (t, e, r) => {
            function n(t, e, s = {}) {
                let a = (0, r(474737).K)(t, e, s.custom),
                    {
                        transition: o = t.getDefaultTransition() || {}
                    } = a || {};
                s.transitionOverride && (o = s.transitionOverride);
                let l = a ? () => Promise.all((0, r(540990).$)(t, a, s)) : () => Promise.resolve(),
                    u = t.variantChildren && t.variantChildren.size ? (r = 0) => {
                        let {
                            delayChildren: a = 0,
                            staggerChildren: l,
                            staggerDirection: u
                        } = o;
                        return function(t, e, r = 0, s = 0, a = 1, o) {
                            let l = [],
                                u = (t.variantChildren.size - 1) * s,
                                d = 1 === a ? (t = 0) => t * s : (t = 0) => u - t * s;
                            return Array.from(t.variantChildren).sort(i).forEach((t, i) => {
                                t.notify("AnimationStart", e), l.push(n(t, e, { ...o,
                                    delay: r + d(i)
                                }).then(() => t.notify("AnimationComplete", e)))
                            }), Promise.all(l)
                        }(t, e, a + r, l, u, s)
                    } : () => Promise.resolve(),
                    {
                        when: d
                    } = o;
                if (!d) return Promise.all([l(), u(s.delay)]); {
                    let [t, e] = "beforeChildren" === d ? [l, u] : [u, l];
                    return t().then(() => e())
                }
            }

            function i(t, e) {
                return t.sortNodePosition(e)
            }

            function s(t, e, i = {}) {
                let a;
                if (t.notify("AnimationStart", e), Array.isArray(e)) a = Promise.all(e.map(e => n(t, e, i)));
                else if ("string" == typeof e) a = n(t, e, i);
                else {
                    let n = "function" == typeof e ? (0, r(474737).K)(t, e, i.custom) : e;
                    a = Promise.all((0, r(540990).$)(t, n, i))
                }
                return a.then(() => t.notify("AnimationComplete", e))
            }
            r.d(e, {
                _: () => s
            })
        },
        465490: (t, e, r) => {
            r.d(e, {
                N: () => n
            });

            function n(t) {
                return "object" == typeof t && "function" == typeof t.start
            }
        },
        469896: (t, e, r) => {
            r.d(e, {
                S: () => n
            });
            let n = t => !!(t && t.getVelocity)
        },
        474737: (t, e, r) => {
            r.d(e, {
                K: () => n
            });

            function n(t, e, n) {
                let i, s, a = t.getProps();
                return (0, r(13141).a)(a, e, void 0 !== n ? n : a.custom, (i = {}, t.values.forEach((t, e) => i[e] = t.get()), i), (s = {}, t.values.forEach((t, e) => s[e] = t.getVelocity()), s))
            }
        },
        494805: (t, e, r) => {
            function n(t, e) {
                return (0, r(638448).FY)((0, r(638448).bS)(t.getBoundingClientRect(), e))
            }

            function i(t, e, i) {
                let s = n(t, i),
                    {
                        scroll: a
                    } = e;
                return a && ((0, r(205673).Ql)(s.x, a.offset.x), (0, r(205673).Ql)(s.y, a.offset.y)), s
            }
            r.d(e, {
                L: () => i,
                m: () => n
            })
        },
        501723: (t, e, r) => {
            r.d(e, {
                P: () => h
            });
            var n = r(296540),
                i = () => r(667549),
                s = () => r(469896);
            let a = () => ({
                style: {},
                transform: {},
                transformOrigin: {},
                vars: {}
            });

            function o(t, e, r) {
                for (let n in e)(0, s().S)(e[n]) || (0, i().z)(n, r) || (t[n] = e[n])
            }
            let l = () => ({ ...a(),
                    attrs: {}
                }),
                u = {
                    useVisualState: (0, r(40278).T)({
                        scrapeMotionValuesFromProps: r(932777).x,
                        createRenderState: l,
                        onMount: (t, e, {
                            renderState: n,
                            latestValues: i
                        }) => {
                            r(610104).Gt.read(() => {
                                try {
                                    n.dimensions = "function" == typeof e.getBBox ? e.getBBox() : e.getBoundingClientRect()
                                } catch (t) {
                                    n.dimensions = {
                                        x: 0,
                                        y: 0,
                                        width: 0,
                                        height: 0
                                    }
                                }
                            }), r(610104).Gt.render(() => {
                                (0, r(920164).B)(n, i, {
                                    enableHardwareAcceleration: !1
                                }, (0, r(316793).n)(e.tagName), t.transformTemplate), (0, r(797415).d)(e, n)
                            })
                        }
                    })
                },
                d = {
                    useVisualState: (0, r(40278).T)({
                        scrapeMotionValuesFromProps: r(704494).x,
                        createRenderState: a
                    })
                };

            function h(t, {
                forwardMotionProps: e = !1
            }, i, c) {
                return { ...(0, r(119110).Q)(t) ? u : d,
                    preloadedFeatures: i,
                    useRender: function(t = !1) {
                        return (e, i, u, {
                            latestValues: d
                        }, h) => {
                            let c = ((0, r(119110).Q)(e) ? function(t, e, i, s) {
                                    let a = (0, n.useMemo)(() => {
                                        let n = l();
                                        return (0, r(920164).B)(n, e, {
                                            enableHardwareAcceleration: !1
                                        }, (0, r(316793).n)(s), t.transformTemplate), { ...n.attrs,
                                            style: { ...n.style
                                            }
                                        }
                                    }, [e]);
                                    if (t.style) {
                                        let e = {};
                                        o(e, t.style, t), a.style = { ...e,
                                            ...a.style
                                        }
                                    }
                                    return a
                                } : function(t, e, i) {
                                    let s, l, u = {},
                                        d = (s = t.style || {}, o(l = {}, s, t), Object.assign(l, function({
                                            transformTemplate: t
                                        }, e, i) {
                                            return (0, n.useMemo)(() => {
                                                let n = a();
                                                return (0, r(892754).O)(n, e, {
                                                    enableHardwareAcceleration: !i
                                                }, t), Object.assign({}, n.vars, n.style)
                                            }, [e])
                                        }(t, e, i)), t.transformValues ? t.transformValues(l) : l);
                                    return t.drag && !1 !== t.dragListener && (u.draggable = !1, d.userSelect = d.WebkitUserSelect = d.WebkitTouchCallout = "none", d.touchAction = !0 === t.drag ? "none" : `pan-${"x"===t.drag?"y":"x"}`), void 0 === t.tabIndex && (t.onTap || t.onTapStart || t.whileTap) && (u.tabIndex = 0), u.style = d, u
                                })(i, d, h, e),
                                p = { ...(0, r(997346).J)(i, "string" == typeof e, t),
                                    ...c,
                                    ref: u
                                },
                                {
                                    children: f
                                } = i,
                                m = (0, n.useMemo)(() => (0, s().S)(f) ? f.get() : f, [f]);
                            return (0, n.createElement)(e, { ...p,
                                children: m
                            })
                        }
                    }(e),
                    createVisualElement: c,
                    Component: t
                }
            }
        },
        502010: (t, e, r) => {
            function n({
                when: t,
                delay: e,
                delayChildren: r,
                staggerChildren: i,
                staggerDirection: s,
                repeat: a,
                repeatType: o,
                repeatDelay: l,
                from: u,
                elapsed: d,
                ...h
            }) {
                return !!Object.keys(h).length
            }

            function i(t, e) {
                return t[e] || t.default || t
            }
            r.d(e, {
                D: () => n,
                r: () => i
            })
        },
        517795: (t, e, r) => {
            r.d(e, {
                h: () => n
            });
            let n = t => Array.isArray(t) && "number" != typeof t[0]
        },
        525128: (t, e, r) => {
            r.d(e, {
                E: () => i
            });
            var n = r(296540);
            let i = r(98288).B ? n.useLayoutEffect : n.useEffect
        },
        530971: (t, e, r) => {
            r.d(e, {
                f: () => s
            });
            var n = () => r(102839),
                i = () => r(927170);

            function s(t, e) {
                let r = t[t.length - 1];
                for (let s = 1; s <= e; s++) {
                    let a = (0, i().q)(0, e, s);
                    t.push((0, n().j)(r, 1, a))
                }
            }
        },
        535446: (t, e, r) => {
            r.d(e, {
                Q: () => n
            });
            let n = (0, r(296540).createContext)({
                transformPagePoint: t => t,
                isStatic: !1,
                reducedMotion: "never"
            })
        },
        540990: (t, e, r) => {
            r.d(e, {
                $: () => u
            });
            var n = () => r(582200),
                i = () => r(582392),
                s = () => r(219189),
                a = () => r(303557),
                o = () => r(502010),
                l = () => r(610104);

            function u(t, e, {
                delay: d = 0,
                transitionOverride: h,
                type: c
            } = {}) {
                let {
                    transition: p = t.getDefaultTransition(),
                    transitionEnd: f,
                    ...m
                } = t.makeTargetAnimatable(e), g = t.getValue("willChange");
                h && (p = h);
                let v = [],
                    y = c && t.animationState && t.animationState.getState()[c];
                for (let e in m) {
                    let r = t.getValue(e),
                        u = m[e];
                    if (!r || void 0 === u || y && function({
                            protectedKeys: t,
                            needsAnimating: e
                        }, r) {
                            let n = t.hasOwnProperty(r) && !0 !== e[r];
                            return e[r] = !1, n
                        }(y, e)) continue;
                    let h = {
                        delay: d,
                        elapsed: 0,
                        ...(0, o().r)(p || {}, e)
                    };
                    if (window.HandoffAppearAnimations) {
                        let n = t.getProps()[i().n];
                        if (n) {
                            let t = window.HandoffAppearAnimations(n, e, r, l().Gt);
                            null !== t && (h.elapsed = t, h.isHandoff = !0)
                        }
                    }
                    let c = !h.isHandoff && ! function(t, e) {
                        let r = t.get();
                        if (!Array.isArray(e)) return r !== e;
                        for (let t = 0; t < e.length; t++)
                            if (e[t] !== r) return !0
                    }(r, u);
                    if ("spring" === h.type && (r.getVelocity() || h.velocity) && (c = !1), r.animation && (c = !1), c) continue;
                    r.start((0, s().f)(e, r, u, t.shouldReduceMotion && n().f.has(e) ? {
                        type: !1
                    } : h));
                    let f = r.animation;
                    (0, a().k)(g) && (g.add(e), f.then(() => g.remove(e))), v.push(f)
                }
                return f && Promise.all(v).then(() => {
                    f && (0, r(124714).Uo)(t, f)
                }), v
            }
        },
        554106: (t, e, r) => {
            r.d(e, {
                ge: () => a,
                xU: () => i
            });
            let n = () => ({
                    translate: 0,
                    scale: 1,
                    origin: 0,
                    originPoint: 0
                }),
                i = () => ({
                    x: n(),
                    y: n()
                }),
                s = () => ({
                    min: 0,
                    max: 0
                }),
                a = () => ({
                    x: s(),
                    y: s()
                })
        },
        569560: (t, e, r) => {
            r.d(e, {
                B: () => p
            });
            var n = () => r(924785),
                i = () => r(303557),
                s = () => r(469896),
                a = () => r(236551),
                o = () => r(113996),
                l = () => r(435092);
            let u = Object.keys(o().B),
                d = u.length,
                h = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"],
                c = l()._.length;
            class p {
                constructor({
                    parent: t,
                    props: e,
                    presenceContext: n,
                    reducedMotionConfig: a,
                    visualState: o
                }, l = {}) {
                    this.current = null, this.children = new Set, this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = new Map, this.features = {}, this.valueSubscriptions = new Map, this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
                        this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
                    }, this.scheduleRender = () => r(610104).Gt.render(this.render, !1, !0);
                    const {
                        latestValues: u,
                        renderState: d
                    } = o;
                    this.latestValues = u, this.baseTarget = { ...u
                    }, this.initialValues = e.initial ? { ...u
                    } : {}, this.renderState = d, this.parent = t, this.props = e, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = a, this.options = l, this.isControllingVariants = (0, r(800837).e)(e), this.isVariantNode = (0, r(800837).O)(e), this.isVariantNode && (this.variantChildren = new Set), this.manuallyAnimateOnMount = !!(t && t.current);
                    const {
                        willChange: h,
                        ...c
                    } = this.scrapeMotionValuesFromProps(e, {});
                    for (const t in c) {
                        const e = c[t];
                        void 0 !== u[t] && (0, s().S)(e) && (e.set(u[t], !1), (0, i().k)(h) && h.add(t))
                    }
                }
                scrapeMotionValuesFromProps(t, e) {
                    return {}
                }
                mount(t) {
                    this.current = t, r(213379).C.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((t, e) => this.bindToMotionValue(e, t)), r(108452).r.current || (0, r(702743).U)(), this.shouldReduceMotion = "never" !== this.reducedMotionConfig && ("always" === this.reducedMotionConfig || r(108452).O.current), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext)
                }
                unmount() {
                    for (let t in r(213379).C.delete(this.current), this.projection && this.projection.unmount(), (0, r(610104).WG)(this.notifyUpdate), (0, r(610104).WG)(this.render), this.valueSubscriptions.forEach(t => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this), this.events) this.events[t].clear();
                    for (let t in this.features) this.features[t].unmount();
                    this.current = null
                }
                bindToMotionValue(t, e) {
                    let n = r(582200).f.has(t),
                        i = e.on("change", e => {
                            this.latestValues[t] = e, this.props.onUpdate && r(610104).Gt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0)
                        }),
                        s = e.on("renderRequest", this.scheduleRender);
                    this.valueSubscriptions.set(t, () => {
                        i(), s()
                    })
                }
                sortNodePosition(t) {
                    return this.current && this.sortInstanceNodePosition && this.type === t.type ? this.sortInstanceNodePosition(this.current, t.current) : 0
                }
                loadFeatures({
                    children: t,
                    ...e
                }, n, i, s) {
                    let a, l;
                    for (let t = 0; t < d; t++) {
                        let r = u[t],
                            {
                                isEnabled: n,
                                Feature: i,
                                ProjectionNode: s,
                                MeasureLayout: d
                            } = o().B[r];
                        s && (a = s), n(e) && (!this.features[r] && i && (this.features[r] = new i(this)), d && (l = d))
                    }
                    if (!this.projection && a) {
                        this.projection = new a(this.latestValues, this.parent && this.parent.projection);
                        let {
                            layoutId: t,
                            layout: n,
                            drag: i,
                            dragConstraints: o,
                            layoutScroll: l,
                            layoutRoot: u
                        } = e;
                        this.projection.setOptions({
                            layoutId: t,
                            layout: n,
                            alwaysMeasureLayout: !!i || o && (0, r(583953).X)(o),
                            visualElement: this,
                            scheduleRender: () => this.scheduleRender(),
                            animationType: "string" == typeof n ? n : "both",
                            initialPromotionConfig: s,
                            layoutScroll: l,
                            layoutRoot: u
                        })
                    }
                    return l
                }
                updateFeatures() {
                    for (let t in this.features) {
                        let e = this.features[t];
                        e.isMounted ? e.update() : (e.mount(), e.isMounted = !0)
                    }
                }
                triggerBuild() {
                    this.build(this.renderState, this.latestValues, this.options, this.props)
                }
                measureViewportBox() {
                    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : (0, r(554106).ge)()
                }
                getStaticValue(t) {
                    return this.latestValues[t]
                }
                setStaticValue(t, e) {
                    this.latestValues[t] = e
                }
                makeTargetAnimatable(t, e = !0) {
                    return this.makeTargetAnimatableFromInstance(t, this.props, e)
                }
                update(t, e) {
                    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = e;
                    for (let e = 0; e < h.length; e++) {
                        let r = h[e];
                        this.propEventSubscriptions[r] && (this.propEventSubscriptions[r](), delete this.propEventSubscriptions[r]);
                        let n = t["on" + r];
                        n && (this.propEventSubscriptions[r] = this.on(r, n))
                    }
                    this.prevMotionValues = function(t, e, r) {
                        let {
                            willChange: a
                        } = e;
                        for (let o in e) {
                            let l = e[o],
                                u = r[o];
                            if ((0, s().S)(l)) t.addValue(o, l), (0, i().k)(a) && a.add(o);
                            else if ((0, s().S)(u)) t.addValue(o, (0, n().OQ)(l, {
                                owner: t
                            })), (0, i().k)(a) && a.remove(o);
                            else if (u !== l)
                                if (t.hasValue(o)) {
                                    let e = t.getValue(o);
                                    e.hasAnimated || e.set(l)
                                } else {
                                    let e = t.getStaticValue(o);
                                    t.addValue(o, (0, n().OQ)(void 0 !== e ? e : l, {
                                        owner: t
                                    }))
                                }
                        }
                        for (let n in r) void 0 === e[n] && t.removeValue(n);
                        return e
                    }(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue()
                }
                getProps() {
                    return this.props
                }
                getVariant(t) {
                    return this.props.variants ? this.props.variants[t] : void 0
                }
                getDefaultTransition() {
                    return this.props.transition
                }
                getTransformPagePoint() {
                    return this.props.transformPagePoint
                }
                getClosestVariantNode() {
                    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
                }
                getVariantContext(t = !1) {
                    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
                    if (!this.isControllingVariants) {
                        let t = this.parent && this.parent.getVariantContext() || {};
                        return void 0 !== this.props.initial && (t.initial = this.props.initial), t
                    }
                    let e = {};
                    for (let t = 0; t < c; t++) {
                        let r = l()._[t],
                            n = this.props[r];
                        ((0, a().w)(n) || !1 === n) && (e[r] = n)
                    }
                    return e
                }
                addVariantChild(t) {
                    let e = this.getClosestVariantNode();
                    if (e) return e.variantChildren && e.variantChildren.add(t), () => e.variantChildren.delete(t)
                }
                addValue(t, e) {
                    e !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, e)), this.values.set(t, e), this.latestValues[t] = e.get()
                }
                removeValue(t) {
                    this.values.delete(t);
                    let e = this.valueSubscriptions.get(t);
                    e && (e(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState)
                }
                hasValue(t) {
                    return this.values.has(t)
                }
                getValue(t, e) {
                    if (this.props.values && this.props.values[t]) return this.props.values[t];
                    let r = this.values.get(t);
                    return void 0 === r && void 0 !== e && (r = (0, n().OQ)(e, {
                        owner: this
                    }), this.addValue(t, r)), r
                }
                readValue(t) {
                    var e;
                    return void 0 === this.latestValues[t] && this.current ? null != (e = this.getBaseTargetFromProps(this.props, t)) ? e : this.readValueFromInstance(this.current, t, this.options) : this.latestValues[t]
                }
                setBaseTarget(t, e) {
                    this.baseTarget[t] = e
                }
                getBaseTarget(t) {
                    var e;
                    let {
                        initial: n
                    } = this.props, i = "string" == typeof n || "object" == typeof n ? null == (e = (0, r(13141).a)(this.props, n)) ? void 0 : e[t] : void 0;
                    if (n && void 0 !== i) return i;
                    let a = this.getBaseTargetFromProps(this.props, t);
                    return void 0 === a || (0, s().S)(a) ? void 0 !== this.initialValues[t] && void 0 === i ? void 0 : this.baseTarget[t] : a
                }
                on(t, e) {
                    return this.events[t] || (this.events[t] = new(r(22606)).v), this.events[t].add(e)
                }
                notify(t, ...e) {
                    this.events[t] && this.events[t].notify(...e)
                }
            }
        },
        582200: (t, e, r) => {
            r.d(e, {
                U: () => n,
                f: () => i
            });
            let n = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"],
                i = new Set(n)
        },
        583953: (t, e, r) => {
            r.d(e, {
                X: () => n
            });

            function n(t) {
                return "object" == typeof t && Object.prototype.hasOwnProperty.call(t, "current")
            }
        },
        603044: (t, e, r) => {
            r.d(e, {
                X: () => n
            });
            class n {
                constructor(t) {
                    this.isMounted = !1, this.node = t
                }
                update() {}
            }
        },
        604043: (t, e, r) => {
            r.d(e, {
                A: () => i
            });
            let n = (t, e, r) => (((1 - 3 * r + 3 * e) * t + (3 * r - 6 * e)) * t + 3 * e) * t;

            function i(t, e, i, s) {
                return t === e && i === s ? r(803659).l : r => 0 === r || 1 === r ? r : n(function(t, e, r, i, s) {
                    let a, o, l = 0;
                    do(a = n(o = e + (r - e) / 2, i, s) - t) > 0 ? r = o : e = o; while (Math.abs(a) > 1e-7 && ++l < 12) return o
                }(r, 0, 1, t, i), e, s)
            }
        },
        610104: (t, e, r) => {
            r.d(e, {
                Ci: () => a,
                Gt: () => n,
                WG: () => i,
                uv: () => s
            });
            let {
                schedule: n,
                cancel: i,
                state: s,
                steps: a
            } = (0, r(763290).I)("u" > typeof requestAnimationFrame ? requestAnimationFrame : r(803659).l, !0)
        },
        620936: (t, e, r) => {
            r.d(e, {
                S: () => i
            });
            let n = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onLayoutAnimationStart", "onLayoutAnimationComplete", "onLayoutMeasure", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "ignoreStrict", "viewport"]);

            function i(t) {
                return t.startsWith("while") || t.startsWith("drag") && "draggable" !== t || t.startsWith("layout") || t.startsWith("onTap") || t.startsWith("onPan") || n.has(t)
            }
        },
        638448: (t, e, r) => {
            function n({
                top: t,
                left: e,
                right: r,
                bottom: i
            }) {
                return {
                    x: {
                        min: e,
                        max: r
                    },
                    y: {
                        min: t,
                        max: i
                    }
                }
            }

            function i({
                x: t,
                y: e
            }) {
                return {
                    top: e.min,
                    right: t.max,
                    bottom: e.max,
                    left: t.min
                }
            }

            function s(t, e) {
                if (!e) return t;
                let r = e({
                        x: t.left,
                        y: t.top
                    }),
                    n = e({
                        x: t.right,
                        y: t.bottom
                    });
                return {
                    top: r.y,
                    left: r.x,
                    bottom: n.y,
                    right: n.x
                }
            }
            r.d(e, {
                FY: () => n,
                bS: () => s,
                pA: () => i
            })
        },
        639652: (t, e, r) => {
            r.d(e, {
                d: () => n
            });
            let n = {
                current: !1
            }
        },
        641614: (t, e, r) => {
            r.d(e, {
                V: () => u,
                f: () => p
            });
            var n = () => r(27739),
                i = () => r(767296);
            let s = {
                    regex: r(340568).z2,
                    countKey: "Vars",
                    token: "${v}",
                    parse: r(803659).l
                },
                a = {
                    regex: i().ne,
                    countKey: "Colors",
                    token: "${c}",
                    parse: n().y.parse
                },
                o = {
                    regex: i().SY,
                    countKey: "Numbers",
                    token: "${n}",
                    parse: r(682944).ai.parse
                };

            function l(t, {
                regex: e,
                countKey: r,
                token: n,
                parse: i
            }) {
                let s = t.tokenised.match(e);
                s && (t["num" + r] = s.length, t.tokenised = t.tokenised.replace(e, n), t.values.push(...s.map(i)))
            }

            function u(t) {
                let e = t.toString(),
                    r = {
                        value: e,
                        tokenised: e,
                        values: [],
                        numVars: 0,
                        numColors: 0,
                        numNumbers: 0
                    };
                return r.value.includes("var(--") && l(r, s), l(r, a), l(r, o), r
            }

            function d(t) {
                return u(t).values
            }

            function h(t) {
                let {
                    values: e,
                    numColors: r,
                    numVars: l,
                    tokenised: d
                } = u(t), h = e.length;
                return t => {
                    let e = d;
                    for (let u = 0; u < h; u++) e = u < l ? e.replace(s.token, t[u]) : u < l + r ? e.replace(a.token, n().y.transform(t[u])) : e.replace(o.token, (0, i().aj)(t[u]));
                    return e
                }
            }
            let c = t => "number" == typeof t ? 0 : t,
                p = {
                    test: function(t) {
                        var e, r;
                        return isNaN(t) && (0, i().Kg)(t) && ((null == (e = t.match(i().SY)) ? void 0 : e.length) || 0) + ((null == (r = t.match(i().ne)) ? void 0 : r.length) || 0) > 0
                    },
                    parse: d,
                    createTransformer: h,
                    getAnimatableNone: function(t) {
                        let e = d(t);
                        return h(t)(e.map(c))
                    }
                }
        },
        663998: (t, e, r) => {
            r.d(e, {
                k: () => n
            });

            function n(t, e, r, i = {
                passive: !0
            }) {
                return t.addEventListener(e, r, i), () => t.removeEventListener(e, r)
            }
        },
        667549: (t, e, r) => {
            r.d(e, {
                z: () => n
            });

            function n(t, {
                layout: e,
                layoutId: i
            }) {
                return r(582200).f.has(t) || t.startsWith("origin") || (e || void 0 !== i) && (!!r(738645).H[t] || "opacity" === t)
            }
        },
        671912: (t, e, r) => {
            function n(t, e = "page") {
                return {
                    point: {
                        x: t[e + "X"],
                        y: t[e + "Y"]
                    }
                }
            }
            r.d(e, {
                F: () => i,
                e: () => n
            });
            let i = t => e => (0, r(247862).M)(e) && t(e, n(e))
        },
        672027: (t, e, r) => {
            r.d(e, {
                V: () => n
            });
            let n = {
                test: (0, r(988304).$)("hsl", "hue"),
                parse: (0, r(988304).q)("hue", "saturation", "lightness"),
                transform: ({
                    hue: t,
                    saturation: e,
                    lightness: n,
                    alpha: i = 1
                }) => "hsla(" + Math.round(t) + ", " + r(155269).KN.transform((0, r(767296).aj)(e)) + ", " + r(155269).KN.transform((0, r(767296).aj)(n)) + ", " + (0, r(767296).aj)(r(682944).X4.transform(i)) + ")"
            }
        },
        682944: (t, e, r) => {
            r.d(e, {
                X4: () => i,
                ai: () => n,
                hs: () => s
            });
            let n = {
                    test: t => "number" == typeof t,
                    parse: parseFloat,
                    transform: t => t
                },
                i = { ...n,
                    transform: t => (0, r(442464).q)(0, 1, t)
                },
                s = { ...n,
                    default: 1
                }
        },
        698809: (t, e, r) => {
            r.d(e, {
                G: () => s
            });
            var n = r(296540);

            function i(t) {
                return Array.isArray(t) ? t.join(" ") : t
            }

            function s({
                preloadedFeatures: t,
                createVisualElement: e,
                useRender: a,
                useVisualState: o,
                Component: l
            }) {
                t && (0, r(852194).Y)(t);
                let u = (0, n.forwardRef)(function(s, u) {
                    var d;
                    let h, c = { ...(0, n.useContext)(r(535446).Q),
                            ...s,
                            layoutId: function({
                                layoutId: t
                            }) {
                                let e = (0, n.useContext)(r(29473).L).id;
                                return e && void 0 !== t ? e + "-" + t : t
                            }(s)
                        },
                        {
                            isStatic: p
                        } = c,
                        f = function(t) {
                            let {
                                initial: e,
                                animate: s
                            } = function(t, e) {
                                if ((0, r(800837).e)(t)) {
                                    let {
                                        initial: e,
                                        animate: n
                                    } = t;
                                    return {
                                        initial: !1 === e || (0, r(236551).w)(e) ? e : void 0,
                                        animate: (0, r(236551).w)(n) ? n : void 0
                                    }
                                }
                                return !1 !== t.inherit ? e : {}
                            }(t, (0, n.useContext)(r(345153).A));
                            return (0, n.useMemo)(() => ({
                                initial: e,
                                animate: s
                            }), [i(e), i(s)])
                        }(s),
                        m = o(s, p);
                    if (!p && r(98288).B) {
                        f.visualElement = function(t, e, i, s) {
                            let {
                                visualElement: a
                            } = (0, n.useContext)(r(345153).A), o = (0, n.useContext)(r(866048).Y), l = (0, n.useContext)(r(786719).t), u = (0, n.useContext)(r(535446).Q).reducedMotion, d = (0, n.useRef)();
                            s = s || o.renderer, !d.current && s && (d.current = s(t, {
                                visualState: e,
                                parent: a,
                                props: i,
                                presenceContext: l,
                                blockInitialAnimation: !!l && !1 === l.initial,
                                reducedMotionConfig: u
                            }));
                            let h = d.current;
                            (0, n.useInsertionEffect)(() => {
                                h && h.update(i, l)
                            });
                            let c = (0, n.useRef)(!!(i[r(582392).n] && !window.HandoffComplete));
                            return (0, r(525128).E)(() => {
                                h && (h.render(), c.current && h.animationState && h.animationState.animateChanges())
                            }), (0, n.useEffect)(() => {
                                h && (h.updateFeatures(), !c.current && h.animationState && h.animationState.animateChanges(), c.current && (c.current = !1, window.HandoffComplete = !0))
                            }), h
                        }(l, m, c, e);
                        let i = (0, n.useContext)(r(223717).N),
                            s = (0, n.useContext)(r(866048).Y).strict;
                        f.visualElement && (h = f.visualElement.loadFeatures(c, s, t, i))
                    }
                    return n.createElement(r(345153).A.Provider, {
                        value: f
                    }, h && f.visualElement ? n.createElement(h, {
                        visualElement: f.visualElement,
                        ...c
                    }) : null, a(l, s, (d = f.visualElement, (0, n.useCallback)(t => {
                        t && m.mount && m.mount(t), d && (t ? d.mount(t) : d.unmount()), u && ("function" == typeof u ? u(t) : (0, r(583953).X)(u) && (u.current = t))
                    }, [d])), m, p, f.visualElement))
                });
                return u[r(196060).o] = l, u
            }
        },
        702743: (t, e, r) => {
            r.d(e, {
                U: () => n
            });

            function n() {
                if (r(108452).r.current = !0, r(98288).B)
                    if (window.matchMedia) {
                        let t = window.matchMedia("(prefers-reduced-motion)"),
                            e = () => r(108452).O.current = t.matches;
                        t.addListener(e), e()
                    } else r(108452).O.current = !1
            }
        },
        704494: (t, e, r) => {
            r.d(e, {
                x: () => s
            });
            var n = () => r(667549),
                i = () => r(469896);

            function s(t, e) {
                let {
                    style: r
                } = t, s = {};
                for (let a in r)((0, i().S)(r[a]) || e.style && (0, i().S)(e.style[a]) || (0, n().z)(a, t)) && (s[a] = r[a]);
                return s
            }
        },
        705252: (t, e, r) => {
            r.d(e, {
                u: () => n
            });
            let n = {
                test: (0, r(988304).$)("#"),
                parse: function(t) {
                    let e = "",
                        r = "",
                        n = "",
                        i = "";
                    return t.length > 5 ? (e = t.substring(1, 3), r = t.substring(3, 5), n = t.substring(5, 7), i = t.substring(7, 9)) : (e = t.substring(1, 2), r = t.substring(2, 3), n = t.substring(3, 4), i = t.substring(4, 5), e += e, r += r, n += n, i += i), {
                        red: parseInt(e, 16),
                        green: parseInt(r, 16),
                        blue: parseInt(n, 16),
                        alpha: i ? parseInt(i, 16) / 255 : 1
                    }
                },
                transform: r(333735).B.transform
            }
        },
        720128: (t, e, r) => {
            r.d(e, {
                n: () => g
            });
            var n = () => r(603044);

            function i(t, e) {
                let n = "onHover" + (e ? "Start" : "End");
                return (0, r(992901).h)(t.current, "pointer" + (e ? "enter" : "leave"), (i, s) => {
                    if ("touch" === i.type || (0, r(317890).D3)()) return;
                    let a = t.getProps();
                    t.animationState && a.whileHover && t.animationState.setActive("whileHover", e), a[n] && r(610104).Gt.update(() => a[n](i, s))
                }, {
                    passive: !t.getProps()[n]
                })
            }
            class s extends n().X {
                mount() {
                    this.unmount = (0, r(991339).F)(i(this.node, !0), i(this.node, !1))
                }
                unmount() {}
            }
            class a extends n().X {
                constructor() {
                    super(...arguments), this.isActive = !1
                }
                onFocus() {
                    let t = !1;
                    try {
                        t = this.node.current.matches(":focus-visible")
                    } catch (e) {
                        t = !0
                    }
                    t && this.node.animationState && (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0)
                }
                onBlur() {
                    this.isActive && this.node.animationState && (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1)
                }
                mount() {
                    this.unmount = (0, r(991339).F)((0, r(663998).k)(this.node.current, "focus", () => this.onFocus()), (0, r(663998).k)(this.node.current, "blur", () => this.onBlur()))
                }
                unmount() {}
            }
            let o = (t, e) => !!e && (t === e || o(t, e.parentElement));

            function l(t, e) {
                if (!e) return;
                let n = new PointerEvent("pointer" + t);
                e(n, (0, r(671912).e)(n))
            }
            class u extends n().X {
                constructor() {
                    super(...arguments), this.removeStartListeners = r(803659).l, this.removeEndListeners = r(803659).l, this.removeAccessibleListeners = r(803659).l, this.startPointerPress = (t, e) => {
                        if (this.removeEndListeners(), this.isPressing) return;
                        let n = this.node.getProps(),
                            i = (t, e) => {
                                if (!this.checkPressEnd()) return;
                                let {
                                    onTap: n,
                                    onTapCancel: i
                                } = this.node.getProps();
                                r(610104).Gt.update(() => {
                                    o(this.node.current, t.target) ? n && n(t, e) : i && i(t, e)
                                })
                            },
                            s = (0, r(992901).h)(window, "pointerup", i, {
                                passive: !(n.onTap || n.onPointerUp)
                            }),
                            a = (0, r(992901).h)(window, "pointercancel", (t, e) => this.cancelPress(t, e), {
                                passive: !(n.onTapCancel || n.onPointerCancel)
                            });
                        this.removeEndListeners = (0, r(991339).F)(s, a), this.startPress(t, e)
                    }, this.startAccessiblePress = () => {
                        let t = t => {
                                if ("Enter" !== t.key || this.isPressing) return;
                                let e = t => {
                                    "Enter" === t.key && this.checkPressEnd() && l("up", (t, e) => {
                                        let {
                                            onTap: n
                                        } = this.node.getProps();
                                        n && r(610104).Gt.update(() => n(t, e))
                                    })
                                };
                                this.removeEndListeners(), this.removeEndListeners = (0, r(663998).k)(this.node.current, "keyup", e), l("down", (t, e) => {
                                    this.startPress(t, e)
                                })
                            },
                            e = (0, r(663998).k)(this.node.current, "keydown", t),
                            n = () => {
                                this.isPressing && l("cancel", (t, e) => this.cancelPress(t, e))
                            },
                            i = (0, r(663998).k)(this.node.current, "blur", n);
                        this.removeAccessibleListeners = (0, r(991339).F)(e, i)
                    }
                }
                startPress(t, e) {
                    this.isPressing = !0;
                    let {
                        onTapStart: n,
                        whileTap: i
                    } = this.node.getProps();
                    i && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && r(610104).Gt.update(() => n(t, e))
                }
                checkPressEnd() {
                    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !(0, r(317890).D3)()
                }
                cancelPress(t, e) {
                    if (!this.checkPressEnd()) return;
                    let {
                        onTapCancel: n
                    } = this.node.getProps();
                    n && r(610104).Gt.update(() => n(t, e))
                }
                mount() {
                    let t = this.node.getProps(),
                        e = (0, r(992901).h)(this.node.current, "pointerdown", this.startPointerPress, {
                            passive: !(t.onTapStart || t.onPointerStart)
                        }),
                        n = (0, r(663998).k)(this.node.current, "focus", this.startAccessiblePress);
                    this.removeStartListeners = (0, r(991339).F)(e, n)
                }
                unmount() {
                    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners()
                }
            }
            let d = new WeakMap,
                h = new WeakMap,
                c = t => {
                    let e = d.get(t.target);
                    e && e(t)
                },
                p = t => {
                    t.forEach(c)
                },
                f = {
                    some: 0,
                    all: 1
                };
            class m extends n().X {
                constructor() {
                    super(...arguments), this.hasEnteredView = !1, this.isInView = !1
                }
                startObserver() {
                    var t;
                    let e;
                    this.unmount();
                    let {
                        viewport: r = {}
                    } = this.node.getProps(), {
                        root: n,
                        margin: i,
                        amount: s = "some",
                        once: a
                    } = r, o = {
                        root: n ? n.current : void 0,
                        rootMargin: i,
                        threshold: "number" == typeof s ? s : f[s]
                    }, l = t => {
                        let {
                            isIntersecting: e
                        } = t;
                        if (this.isInView === e || (this.isInView = e, a && !e && this.hasEnteredView)) return;
                        e && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", e);
                        let {
                            onViewportEnter: r,
                            onViewportLeave: n
                        } = this.node.getProps(), i = e ? r : n;
                        i && i(t)
                    };
                    return t = this.node.current, e = function({
                        root: t,
                        ...e
                    }) {
                        let r = t || document;
                        h.has(r) || h.set(r, {});
                        let n = h.get(r),
                            i = JSON.stringify(e);
                        return n[i] || (n[i] = new IntersectionObserver(p, {
                            root: t,
                            ...e
                        })), n[i]
                    }(o), d.set(t, l), e.observe(t), () => {
                        d.delete(t), e.unobserve(t)
                    }
                }
                mount() {
                    this.startObserver()
                }
                update() {
                    if ("u" < typeof IntersectionObserver) return;
                    let {
                        props: t,
                        prevProps: e
                    } = this.node;
                    ["amount", "margin", "root"].some(function({
                        viewport: t = {}
                    }, {
                        viewport: e = {}
                    } = {}) {
                        return r => t[r] !== e[r]
                    }(t, e)) && this.startObserver()
                }
                unmount() {}
            }
            let g = {
                inView: {
                    Feature: m
                },
                tap: {
                    Feature: u
                },
                focus: {
                    Feature: a
                },
                hover: {
                    Feature: s
                }
            }
        },
        738645: (t, e, r) => {
            r.d(e, {
                $: () => i,
                H: () => n
            });
            let n = {};

            function i(t) {
                Object.assign(n, t)
            }
        },
        761899: (t, e, r) => {
            r.d(e, {
                Z: () => n
            });

            function n(t) {
                let e = [0];
                return (0, r(530971).f)(e, t.length - 1), e
            }
        },
        767296: (t, e, r) => {
            r.d(e, {
                Fl: () => a,
                Kg: () => o,
                SY: () => i,
                aj: () => n,
                ne: () => s
            });
            let n = t => Math.round(1e5 * t) / 1e5,
                i = /(-)?([\d]*\.?[\d])+/g,
                s = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,
                a = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;

            function o(t) {
                return "string" == typeof t
            }
        },
        783041: (t, e, r) => {
            r.d(e, {
                V: () => n
            });
            let n = t => e => e <= .5 ? t(2 * e) / 2 : (2 - t(2 * (1 - e))) / 2
        },
        786719: (t, e, r) => {
            r.d(e, {
                t: () => n
            });
            let n = (0, r(296540).createContext)(null)
        },
        797415: (t, e, r) => {
            r.d(e, {
                d: () => s
            });
            var n = () => r(348062),
                i = () => r(922311);

            function s(t, e, s, a) {
                for (let s in (0, r(159836).e)(t, e, void 0, a), e.attrs) t.setAttribute(i().e.has(s) ? s : (0, n().I)(s), e.attrs[s])
            }
        },
        799734: (t, e, r) => {
            r.d(e, {
                X: () => n
            });

            function n(t, e, i, {
                delay: s = 0,
                duration: a,
                repeat: o = 0,
                repeatType: l = "loop",
                ease: u,
                times: d
            } = {}) {
                let h = {
                    [e]: i
                };
                d && (h.offset = d);
                let c = (0, r(979406).TU)(u);
                return Array.isArray(c) && (h.easing = c), t.animate(h, {
                    delay: s,
                    duration: a,
                    easing: Array.isArray(c) ? "linear" : c,
                    fill: "both",
                    iterations: o + 1,
                    direction: "reverse" === l ? "alternate" : "normal"
                })
            }
        },
        800837: (t, e, r) => {
            function n(t) {
                return (0, r(465490).N)(t.animate) || r(435092)._.some(e => (0, r(236551).w)(t[e]))
            }

            function i(t) {
                return !!(n(t) || t.variants)
            }
            r.d(e, {
                O: () => i,
                e: () => n
            })
        },
        803659: (t, e, r) => {
            r.d(e, {
                l: () => n
            });
            let n = t => t
        },
        814322: (t, e, r) => {
            r.d(e, {
                u: () => n
            });

            function n(t) {
                let e = (0, r(469896).S)(t) ? t.get() : t;
                return (0, r(147365).B)(e) ? e.toValue() : e
            }
        },
        841630: (t, e, r) => {
            function n(t) {
                return void 0 === t || 1 === t
            }

            function i({
                scale: t,
                scaleX: e,
                scaleY: r
            }) {
                return !n(t) || !n(e) || !n(r)
            }

            function s(t) {
                return i(t) || a(t) || t.z || t.rotate || t.rotateX || t.rotateY
            }

            function a(t) {
                var e, r;
                return (e = t.x) && "0%" !== e || (r = t.y) && "0%" !== r
            }
            r.d(e, {
                HD: () => s,
                vF: () => a,
                vk: () => i
            })
        },
        852194: (t, e, r) => {
            r.d(e, {
                Y: () => i
            });
            var n = () => r(113996);

            function i(t) {
                for (let e in t) n().B[e] = { ...n().B[e],
                    ...t[e]
                }
            }
        },
        866048: (t, e, r) => {
            r.d(e, {
                Y: () => n
            });
            let n = (0, r(296540).createContext)({
                strict: !1
            })
        },
        877312: (t, e, r) => {
            r.d(e, {
                $: () => n
            });
            let n = t => /^0[^.\s]+$/.test(t)
        },
        881619: (t, e, r) => {
            r.d(e, {
                D: () => i
            });
            let n = { ...r(345639).W,
                    color: r(27739).y,
                    backgroundColor: r(27739).y,
                    outlineColor: r(27739).y,
                    fill: r(27739).y,
                    stroke: r(27739).y,
                    borderColor: r(27739).y,
                    borderTopColor: r(27739).y,
                    borderRightColor: r(27739).y,
                    borderBottomColor: r(27739).y,
                    borderLeftColor: r(27739).y,
                    filter: r(426044).p,
                    WebkitFilter: r(426044).p
                },
                i = t => n[t]
        },
        892754: (t, e, r) => {
            r.d(e, {
                O: () => o
            });
            var n = () => r(340568),
                i = () => r(582200);
            let s = (t, e) => e && "number" == typeof t ? e.transform(t) : t;
            var a = () => r(345639);

            function o(t, e, o, l) {
                let {
                    style: u,
                    vars: d,
                    transform: h,
                    transformOrigin: c
                } = t, p = !1, f = !1, m = !0;
                for (let t in e) {
                    let r = e[t];
                    if ((0, n().j4)(t)) {
                        d[t] = r;
                        continue
                    }
                    let o = a().W[t],
                        l = s(r, o);
                    if (i().f.has(t)) {
                        if (p = !0, h[t] = l, !m) continue;
                        r !== (o.default || 0) && (m = !1)
                    } else t.startsWith("origin") ? (f = !0, c[t] = l) : u[t] = l
                }
                if (!e.transform && (p || l ? u.transform = (0, r(204111).d)(t.transform, o, m, l) : u.transform && (u.transform = "none")), f) {
                    let {
                        originX: t = "50%",
                        originY: e = "50%",
                        originZ: r = 0
                    } = c;
                    u.transformOrigin = `${t} ${e} ${r}`
                }
            }
        },
        920164: (t, e, r) => {
            function n(t, e, n) {
                return "string" == typeof t ? t : r(155269).px.transform(e + n * t)
            }
            r.d(e, {
                B: () => a
            });
            let i = {
                    offset: "stroke-dashoffset",
                    array: "stroke-dasharray"
                },
                s = {
                    offset: "strokeDashoffset",
                    array: "strokeDasharray"
                };

            function a(t, {
                attrX: e,
                attrY: o,
                attrScale: l,
                originX: u,
                originY: d,
                pathLength: h,
                pathSpacing: c = 1,
                pathOffset: p = 0,
                ...f
            }, m, g, v) {
                let y, b;
                if ((0, r(892754).O)(t, f, m, v), g) {
                    t.style.viewBox && (t.attrs.viewBox = t.style.viewBox);
                    return
                }
                t.attrs = t.style, t.style = {};
                let {
                    attrs: x,
                    style: w,
                    dimensions: V
                } = t;
                x.transform && (V && (w.transform = x.transform), delete x.transform), V && (void 0 !== u || void 0 !== d || w.transform) && (y = n(void 0 !== u ? u : .5, V.x, V.width), b = n(void 0 !== d ? d : .5, V.y, V.height), w.transformOrigin = `${y} ${b}`), void 0 !== e && (x.x = e), void 0 !== o && (x.y = o), void 0 !== l && (x.scale = l), void 0 !== h && function(t, e, n = 1, a = 0, o = !0) {
                    t.pathLength = 1;
                    let l = o ? i : s;
                    t[l.offset] = r(155269).px.transform(-a);
                    let u = r(155269).px.transform(e),
                        d = r(155269).px.transform(n);
                    t[l.array] = `${u} ${d}`
                }(x, h, c, p, !1)
            }
        },
        922311: (t, e, r) => {
            r.d(e, {
                e: () => n
            });
            let n = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
        },
        927170: (t, e, r) => {
            r.d(e, {
                q: () => n
            });
            let n = (t, e, r) => {
                let n = e - t;
                return 0 === n ? 1 : (r - t) / n
            }
        },
        929676: (t, e, r) => {
            function n(t, e) {
                return t * Math.sqrt(1 - e * e)
            }
            r.d(e, {
                o: () => o
            });
            let i = ["duration", "bounce"],
                s = ["stiffness", "damping", "mass"];

            function a(t, e) {
                return e.some(e => void 0 !== t[e])
            }

            function o({
                keyframes: t,
                restDelta: e,
                restSpeed: l,
                ...u
            }) {
                let d, h = t[0],
                    c = t[t.length - 1],
                    p = {
                        done: !1,
                        value: h
                    },
                    {
                        stiffness: f,
                        damping: m,
                        mass: g,
                        duration: v,
                        velocity: y,
                        isResolvedFromDuration: b
                    } = function(t) {
                        let e = {
                            velocity: 0,
                            stiffness: 100,
                            damping: 10,
                            mass: 1,
                            isResolvedFromDuration: !1,
                            ...t
                        };
                        if (!a(t, s) && a(t, i)) {
                            let i = function({
                                duration: t = 800,
                                bounce: e = .25,
                                velocity: i = 0,
                                mass: s = 1
                            }) {
                                let a, o;
                                (0, r(285238).$)(t <= (0, r(374833).f)(10), "Spring duration must be 10 seconds or less");
                                let l = 1 - e;
                                l = (0, r(442464).q)(.05, 1, l), t = (0, r(442464).q)(.01, 10, (0, r(374833).X)(t)), l < 1 ? (a = e => {
                                    let r = e * l,
                                        s = r * t;
                                    return .001 - (r - i) / n(e, l) * Math.exp(-s)
                                }, o = e => {
                                    let r = e * l * t,
                                        s = Math.pow(l, 2) * Math.pow(e, 2) * t,
                                        o = Math.exp(-r),
                                        u = n(Math.pow(e, 2), l);
                                    return (r * i + i - s) * o * (-a(e) + .001 > 0 ? -1 : 1) / u
                                }) : (a = e => -.001 + Math.exp(-e * t) * ((e - i) * t + 1), o = e => t * t * (i - e) * Math.exp(-e * t));
                                let u = function(t, e, r) {
                                    let n = r;
                                    for (let r = 1; r < 12; r++) n -= t(n) / e(n);
                                    return n
                                }(a, o, 5 / t);
                                if (t = (0, r(374833).f)(t), isNaN(u)) return {
                                    stiffness: 100,
                                    damping: 10,
                                    duration: t
                                }; {
                                    let e = Math.pow(u, 2) * s;
                                    return {
                                        stiffness: e,
                                        damping: 2 * l * Math.sqrt(s * e),
                                        duration: t
                                    }
                                }
                            }(t);
                            (e = { ...e,
                                ...i,
                                mass: 1
                            }).isResolvedFromDuration = !0
                        }
                        return e
                    }({ ...u,
                        velocity: -(0, r(374833).X)(u.velocity || 0)
                    }),
                    x = y || 0,
                    w = m / (2 * Math.sqrt(f * g)),
                    V = c - h,
                    A = (0, r(374833).X)(Math.sqrt(f / g)),
                    S = 5 > Math.abs(V);
                if (l || (l = S ? .01 : 2), e || (e = S ? .005 : .5), w < 1) {
                    let t = n(A, w);
                    d = e => c - Math.exp(-w * A * e) * ((x + w * A * V) / t * Math.sin(t * e) + V * Math.cos(t * e))
                } else if (1 === w) d = t => c - Math.exp(-A * t) * (V + (x + A * V) * t);
                else {
                    let t = A * Math.sqrt(w * w - 1);
                    d = e => {
                        let r = Math.exp(-w * A * e),
                            n = Math.min(t * e, 300);
                        return c - r * ((x + w * A * V) * Math.sinh(n) + t * V * Math.cosh(n)) / t
                    }
                }
                return {
                    calculatedDuration: b && v || null,
                    next: t => {
                        let n = d(t);
                        if (b) p.done = t >= v;
                        else {
                            let i = x;
                            0 !== t && (i = w < 1 ? (0, r(358426).Y)(d, t, n) : 0);
                            let s = Math.abs(c - n) <= e;
                            p.done = Math.abs(i) <= l && s
                        }
                        return p.value = p.done ? c : n, p
                    }
                }
            }
        },
        932777: (t, e, r) => {
            r.d(e, {
                x: () => s
            });
            var n = () => r(469896),
                i = () => r(582200);

            function s(t, e) {
                let s = (0, r(704494).x)(t, e);
                for (let r in t)((0, n().S)(t[r]) || (0, n().S)(e[r])) && (s[-1 !== i().U.indexOf(r) ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r] = t[r]);
                return s
            }
        },
        957177: (t, e, r) => {
            r.d(e, {
                f: () => n
            });

            function n(t, e) {
                return e ? 1e3 / e * t : 0
            }
        },
        974668: (t, e, r) => {
            r.d(e, {
                W: () => n
            });
            let n = {
                skipAnimations: !1
            }
        },
        979406: (t, e, r) => {
            r.d(e, {
                yL: () => i,
                TU: () => o
            });
            let n = t => Array.isArray(t) && "number" == typeof t[0];

            function i(t) {
                return !!(!t || "string" == typeof t && a[t] || n(t) || Array.isArray(t) && t.every(i))
            }
            let s = ([t, e, r, n]) => `cubic-bezier(${t}, ${e}, ${r}, ${n})`,
                a = {
                    linear: "linear",
                    ease: "ease",
                    easeIn: "ease-in",
                    easeOut: "ease-out",
                    easeInOut: "ease-in-out",
                    circIn: s([0, .65, .55, 1]),
                    circOut: s([.55, 0, 1, .45]),
                    backIn: s([.31, .01, .66, -.59]),
                    backOut: s([.33, 1.53, .69, .99])
                };

            function o(t) {
                if (t) return n(t) ? s(t) : Array.isArray(t) ? t.map(o) : a[t]
            }
        },
        988304: (t, e, r) => {
            r.d(e, {
                $: () => n,
                q: () => i
            });
            let n = (t, e) => n => !!((0, r(767296).Kg)(n) && r(767296).Fl.test(n) && n.startsWith(t) || e && Object.prototype.hasOwnProperty.call(n, e)),
                i = (t, e, n) => i => {
                    if (!(0, r(767296).Kg)(i)) return i;
                    let [s, a, o, l] = i.match(r(767296).SY);
                    return {
                        [t]: parseFloat(s),
                        [e]: parseFloat(a),
                        [n]: parseFloat(o),
                        alpha: void 0 !== l ? parseFloat(l) : 1
                    }
                }
        },
        989652: (t, e, r) => {
            r.d(e, {
                i: () => n
            });
            let n = t => /^\-?\d*\.?\d+$/.test(t)
        },
        991339: (t, e, r) => {
            r.d(e, {
                F: () => i
            });
            let n = (t, e) => r => e(t(r)),
                i = (...t) => t.reduce(n)
        },
        992901: (t, e, r) => {
            r.d(e, {
                h: () => n
            });

            function n(t, e, n, i) {
                return (0, r(663998).k)(t, e, (0, r(671912).F)(n), i)
            }
        },
        997476: (t, e, r) => {
            r.d(e, {
                b: () => v
            });
            var n = () => r(285238),
                i = () => r(340568);
            let s = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;

            function a(t, e, o = 1) {
                (0, n().V)(o <= 4, `Max CSS variable fallback depth detected in property "${t}". This may indicate a circular fallback dependency.`);
                let [l, u] = function(t) {
                    let e = s.exec(t);
                    if (!e) return [, ];
                    let [, r, n] = e;
                    return [r, n]
                }(t);
                if (!l) return;
                let d = window.getComputedStyle(e).getPropertyValue(l);
                if (d) {
                    let t = d.trim();
                    return (0, r(989652).i)(t) ? parseFloat(t) : t
                }
                return (0, i().pG)(u) ? a(u, e, o + 1) : u
            }
            var o = () => r(425141);
            let l = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"]),
                u = t => l.has(t),
                d = t => t === r(682944).ai || t === r(155269).px,
                h = (t, e) => parseFloat(t.split(", ")[e]),
                c = (t, e) => (r, {
                    transform: n
                }) => {
                    if ("none" === n || !n) return 0;
                    let i = n.match(/^matrix3d\((.+)\)$/);
                    if (i) return h(i[1], e); {
                        let e = n.match(/^matrix\((.+)\)$/);
                        return e ? h(e[1], t) : 0
                    }
                },
                p = new Set(["x", "y", "z"]),
                f = r(582200).U.filter(t => !p.has(t)),
                m = {
                    width: ({
                        x: t
                    }, {
                        paddingLeft: e = "0",
                        paddingRight: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    height: ({
                        y: t
                    }, {
                        paddingTop: e = "0",
                        paddingBottom: r = "0"
                    }) => t.max - t.min - parseFloat(e) - parseFloat(r),
                    top: (t, {
                        top: e
                    }) => parseFloat(e),
                    left: (t, {
                        left: e
                    }) => parseFloat(e),
                    bottom: ({
                        y: t
                    }, {
                        top: e
                    }) => parseFloat(e) + (t.max - t.min),
                    right: ({
                        x: t
                    }, {
                        left: e
                    }) => parseFloat(e) + (t.max - t.min),
                    x: c(4, 13),
                    y: c(5, 14)
                };
            m.translateX = m.x, m.translateY = m.y;
            var g = () => r(569560);
            class v extends g().B {
                sortInstanceNodePosition(t, e) {
                    return 2 & t.compareDocumentPosition(e) ? 1 : -1
                }
                getBaseTargetFromProps(t, e) {
                    return t.style ? t.style[e] : void 0
                }
                removeValueFromRenderState(t, {
                    vars: e,
                    style: r
                }) {
                    delete e[t], delete r[t]
                }
                makeTargetAnimatableFromInstance({
                    transition: t,
                    transitionEnd: e,
                    ...s
                }, {
                    transformValues: l
                }, h) {
                    let c = (0, r(124714).$z)(s, t || {}, this);
                    if (l && (e && (e = l(e)), s && (s = l(s)), c && (c = l(c))), h) {
                        var p, g, v, y, b;
                        let t;
                        (0, r(124714).TM)(this, s, c);
                        let l = (p = s, g = c, p = (t = function(t, { ...e
                        }, r) {
                            let n = t.current;
                            if (!(n instanceof Element)) return {
                                target: e,
                                transitionEnd: r
                            };
                            for (let s in r && (r = { ...r
                                }), t.values.forEach(t => {
                                    let e = t.get();
                                    if (!(0, i().pG)(e)) return;
                                    let r = a(e, n);
                                    r && t.set(r)
                                }), e) {
                                let t = e[s];
                                if (!(0, i().pG)(t)) continue;
                                let o = a(t, n);
                                o && (e[s] = o, r || (r = {}), void 0 === r[s] && (r[s] = t))
                            }
                            return {
                                target: e,
                                transitionEnd: r
                            }
                        }(this, p, v = e)).target, v = t.transitionEnd, y = p, b = v, Object.keys(y).some(u) ? ((t, e, i = {}, s = {}) => {
                            e = { ...e
                            }, s = { ...s
                            };
                            let a = Object.keys(e).filter(u),
                                l = [],
                                h = !1,
                                c = [];
                            if (a.forEach(a => {
                                    let u, p = t.getValue(a);
                                    if (!t.hasValue(a)) return;
                                    let m = i[a],
                                        g = (0, o().n)(m),
                                        v = e[a];
                                    if ((0, r(401712).p)(v)) {
                                        let t = v.length,
                                            e = +(null === v[0]);
                                        m = v[e], g = (0, o().n)(m);
                                        for (let r = e; r < t && null !== v[r]; r++) u ? (0, n().V)((0, o().n)(v[r]) === u, "All keyframes must be of the same type") : (u = (0, o().n)(v[r]), (0, n().V)(u === g || d(g) && d(u), "Keyframes must be of the same dimension as the current value"))
                                    } else u = (0, o().n)(v);
                                    if (g !== u)
                                        if (d(g) && d(u)) {
                                            let t = p.get();
                                            "string" == typeof t && p.set(parseFloat(t)), "string" == typeof v ? e[a] = parseFloat(v) : Array.isArray(v) && u === r(155269).px && (e[a] = v.map(parseFloat))
                                        } else if ((null == g ? void 0 : g.transform) && (null == u ? void 0 : u.transform) && (0 === m || 0 === v)) 0 === m ? p.set(u.transform(m)) : e[a] = g.transform(v);
                                    else {
                                        if (!h) {
                                            let e;
                                            e = [], f.forEach(r => {
                                                let n = t.getValue(r);
                                                void 0 !== n && (e.push([r, n.get()]), n.set(+!!r.startsWith("scale")))
                                            }), e.length && t.render(), l = e, h = !0
                                        }
                                        c.push(a), s[a] = void 0 !== s[a] ? s[a] : e[a], p.jump(v)
                                    }
                                }), !c.length) return {
                                target: e,
                                transitionEnd: s
                            }; {
                                let n = c.indexOf("height") >= 0 ? window.pageYOffset : null,
                                    i = ((t, e, r) => {
                                        let n = e.measureViewportBox(),
                                            i = getComputedStyle(e.current),
                                            {
                                                display: s
                                            } = i,
                                            a = {};
                                        "none" === s && e.setStaticValue("display", t.display || "block"), r.forEach(t => {
                                            a[t] = m[t](n, i)
                                        }), e.render();
                                        let o = e.measureViewportBox();
                                        return r.forEach(r => {
                                            let n = e.getValue(r);
                                            n && n.jump(a[r]), t[r] = m[r](o, i)
                                        }), t
                                    })(e, t, c);
                                return l.length && l.forEach(([e, r]) => {
                                    t.getValue(e).set(r)
                                }), t.render(), r(98288).B && null !== n && window.scrollTo({
                                    top: n
                                }), {
                                    target: i,
                                    transitionEnd: s
                                }
                            }
                        })(this, y, g, b) : {
                            target: y,
                            transitionEnd: b
                        });
                        e = l.transitionEnd, s = l.target
                    }
                    return {
                        transition: t,
                        transitionEnd: e,
                        ...s
                    }
                }
            }
        }
    }
]);