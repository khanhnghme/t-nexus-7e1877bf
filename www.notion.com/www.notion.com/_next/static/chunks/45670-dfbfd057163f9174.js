! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "13234d90-b4f1-4ae2-a1db-f055c355674b", e._sentryDebugIdIdentifier = "sentry-dbid-13234d90-b4f1-4ae2-a1db-f055c355674b")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [45670, 89039, 74533, 27471, 34894, 21871], {
        823728: function(e, t, a) {
            "use strict";
            a.d(t, {
                Q: function() {
                    return i
                }
            });
            var n = a(552322),
                l = a(202784),
                r = a(797187),
                o = a(642735);
            let i = (0, l.forwardRef)(function({
                as: e,
                variant: t = "primary",
                size: a = "medium",
                className: l,
                children: i,
                ...s
            }, c) {
                return (0, n.jsx)(r.y, {
                    className: (0, o.yO)(t, a, l),
                    variant: (0, o.GI)(a),
                    as: e ? ? "a",
                    ref: c,
                    ...s,
                    children: i
                })
            })
        },
        611427: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return u
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(208326),
                s = a(721117);
            let c = {
                    marquee: {
                        default: s.variantMarquee,
                        sm: s.variantMarqueeSm,
                        md: s.variantMarqueeMd,
                        lg: s.variantMarqueeLg,
                        xl: s.variantMarqueeXl,
                        xxl: s.variantMarqueeXxl
                    },
                    wall: {
                        default: s.variantWall,
                        sm: s.variantWallSm,
                        md: s.variantWallMd,
                        lg: s.variantWallLg,
                        xl: s.variantWallXl,
                        xxl: s.variantWallXxl
                    }
                },
                d = {
                    center: "center",
                    start: "start"
                },
                u = (0, o.forwardRef)(function({
                    children: e,
                    style: t,
                    className: a,
                    variant: l = "wall",
                    marqueeDirection: u = "normal",
                    align: h = "center",
                    maxRows: g,
                    ..._
                }, p) {
                    let f = (0, o.useRef)(null),
                        m = o.Children.count(e),
                        v = (0, i.OX)(l, "wall"),
                        x = i.j$.map(e => c[v[e]][e]),
                        y = (0, i.rN)((0, i.mI)(h, e => d[e]), "logo-wall-marquee-justify"),
                        b = (0, o.useMemo)(() => i.j$.some(e => "marquee" === v[e]), [v]),
                        j = g ? (0, i.rN)(g, "logo-wall-marquee-max-rows") : void 0;
                    (0, o.useEffect)(() => {
                        if (!b) return;
                        let e = f.current;
                        if (!e) return;
                        let t = () => {
                            e.classList.toggle(s.isOverflowing, e.scrollWidth > e.clientWidth)
                        };
                        t();
                        let a = new ResizeObserver(t);
                        return a.observe(e), () => a.disconnect()
                    }, [m, b]), (0, o.useEffect)(() => {
                        let e = f.current;
                        if (!e) return;
                        let t = () => {
                            for (let t of Array.from(e.querySelectorAll(`.${s.logoWallMarqueeItem}`))) t.removeAttribute("inert"), t.removeAttribute("aria-hidden")
                        };
                        if (!g) {
                            t();
                            return
                        }
                        let a = new IntersectionObserver(e => {
                            for (let t of e) {
                                let e = t.target;
                                e instanceof HTMLElement && (0 === t.intersectionRatio ? (e.setAttribute("inert", ""), e.setAttribute("aria-hidden", "true")) : (e.removeAttribute("inert"), e.removeAttribute("aria-hidden")))
                            }
                        }, {
                            root: e,
                            threshold: 0
                        });
                        return e.querySelectorAll(`.${s.logoWallMarqueeItem}`).forEach(e => a.observe(e)), () => {
                            a.disconnect(), t()
                        }
                    }, [g, m, e]);
                    let q = {
                        "--logo-wall-marquee-item-count-js": m,
                        "--logo-wall-marquee-direction": u,
                        ...y,
                        ...j,
                        ...t
                    };
                    return (0, n.jsx)("div", { ..._,
                        className: r()(s.logoWallMarquee, ...x, void 0 !== g && s.hasMaxRows, a),
                        style: q,
                        ref: e => {
                            f.current = e, "function" == typeof p ? p(e) : p && (p.current = e)
                        },
                        children: e
                    })
                })
        },
        207419: function(e, t, a) {
            "use strict";
            a.d(t, {
                N: function() {
                    return i
                }
            });
            var n = a(552322);
            a(202784);
            var l = a(642735),
                r = a(797187),
                o = a(721117);

            function i({
                children: e
            }) {
                return (0, n.jsx)(r.y, {
                    as: "span",
                    variant: (0, l.GI)("medium"),
                    className: (0, l.yO)("ghost", "medium", o.logoWallMarqueeItem),
                    children: e
                })
            }
        },
        117174: function(e, t, a) {
            "use strict";
            a.d(t, {
                w: function() {
                    return c
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(823728),
                s = a(721117);
            let c = (0, o.forwardRef)(function({
                as: e,
                className: t,
                children: a,
                ...l
            }, o) {
                return (0, n.jsx)(i.Q, {
                    variant: "ghost",
                    size: "medium",
                    as: e,
                    className: r()(s.logoWallMarqueeItem, s.logoWallMarqueeItemDot, t),
                    ref: o,
                    ...l,
                    children: a
                })
            })
        },
        847145: function(e, t, a) {
            "use strict";
            a.d(t, {
                Ni: function() {
                    return l.N
                },
                wk: function() {
                    return r.w
                },
                zU: function() {
                    return n.z
                }
            });
            var n = a(611427),
                l = a(207419),
                r = a(117174)
        },
        399557: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return d
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(914775),
                s = a(208326),
                c = a(431227);
            let d = (0, o.forwardRef)(function({
                as: e,
                edge: t = "top",
                offset: a = 0,
                isSticky: l = !0,
                onStickyChange: d,
                stickyThreshold: u = 0,
                sentinelClassName: h,
                wrapperClassName: g,
                wrapperStyle: _,
                className: p,
                style: f,
                children: m,
                ...v
            }, x) {
                let y = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    if (!d || !y.current) return;
                    let e = y.current,
                        a = new IntersectionObserver(e => {
                            e.length > 0 && d(!e[0].isIntersecting)
                        }, {
                            threshold: 0,
                            rootMargin: "top" === t ? `0px 0px ${u}px 0px` : `${u}px 0px 0px 0px`
                        });
                    a.observe(e);
                    let n = e.getBoundingClientRect(),
                        l = window.innerHeight;
                    return d(!("top" === t ? n.bottom + u > 0 : n.top - u < l)), () => a.disconnect()
                }, [t, d, u]);
                let b = "number" == typeof a ? `${a}px` : a,
                    j = (0, s.OX)(l, !0),
                    q = (0, s.rN)((0, s.mI)(j, e => e ? "sticky" : "unset"), "sticky-position"),
                    k = { ...f,
                        [t]: b
                    },
                    w = {
                        "--sticky-offset": `calc(${b} * -1)`
                    },
                    C = d ? (0, n.jsx)("div", {
                        ref: y,
                        className: r()(c.sentinel, h, {
                            [c.sentinelTop]: "top" === t,
                            [c.sentinelBottom]: "bottom" === t
                        }),
                        style: w,
                        "aria-hidden": "true"
                    }) : null,
                    M = (0, n.jsx)(e ? ? "div", {
                        className: r()(c.stickyContent, p),
                        ref: x,
                        ...v,
                        style: k,
                        children: m
                    }),
                    N = { ..._ ? ? {},
                        ...q
                    };
                return (0, n.jsxs)("div", {
                    className: r()(c.stickyWrapper, g),
                    style: (0, i.Ay)(N),
                    children: ["top" === t ? C : void 0, M, "bottom" === t ? C : void 0]
                })
            })
        },
        989039: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FrontPauseButton: function() {
                    return l
                }
            });
            var n = a(552322);
            let l = (0, a(507285).defineIcon)({
                className: "frontPauseButton",
                viewBox: "0 0 16 16",
                svg: (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("rect", {
                        x: "1",
                        y: "0",
                        width: "5",
                        height: "16",
                        rx: "1"
                    }), (0, n.jsx)("rect", {
                        x: "9",
                        y: "0",
                        width: "5",
                        height: "16",
                        rx: "1"
                    })]
                })
            })
        },
        574533: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FrontPlayButton: function() {
                    return l
                }
            });
            var n = a(552322);
            let l = (0, a(507285).defineIcon)({
                className: "frontPlayButton",
                viewBox: "0 0 14 16",
                svg: (0, n.jsx)("path", {
                    d: "M1.34699 16C1.73805 16 2.07697 15.8756 2.52017 15.6089L12.8703 9.47556C13.6437 9.01333 14 8.62222 14 8C14 7.37778 13.6437 6.98667 12.8703 6.52444L2.52017 0.391111C2.07697 0.133333 1.73805 0 1.34699 0C0.582247 0 0 0.595556 0 1.57333V14.4356C0 15.4044 0.582247 16 1.34699 16Z"
                })
            })
        },
        394044: function(e, t, a) {
            "use strict";
            a.d(t, {
                e: function() {
                    return s
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(47847);
            let s = (0, o.forwardRef)(function({
                className: e,
                children: t,
                ...a
            }, l) {
                return (0, n.jsx)("div", { ...a,
                    className: r()(i.toolbar, e),
                    ref: l,
                    children: t
                })
            })
        },
        779851: function(e, t, a) {
            "use strict";
            a.d(t, {
                Vq: function() {
                    return f
                },
                a7: function() {
                    return y
                },
                cN: function() {
                    return b
                },
                fK: function() {
                    return w
                },
                es: function() {
                    return C.e
                },
                jW: function() {
                    return N
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(353095),
                s = a(366308),
                c = a(261198),
                d = a(22724),
                u = a(702513),
                h = a(132904);
            let g = (0, o.forwardRef)(function({
                open: e,
                defaultOpen: t = !1,
                className: a,
                children: l,
                onClose: i,
                preventClose: g,
                ..._
            }, p) {
                let f = (0, o.useRef)(null),
                    m = (0, s.q)(p, f),
                    [v, x] = (0, d.O)(e, t);
                (0, u.P)(v, f.current), (0, o.useEffect)(() => {
                    let e = f.current;
                    if (e) {
                        if (!v) {
                            e.close();
                            return
                        }
                        e.showModal()
                    }
                }, [v]), (0, o.useEffect)(() => {
                    let e = f.current,
                        t = (0, c.P)(e);
                    if (!t || !e || !v) return;
                    let a = a => {
                        !g && a.target.contains(t.documentElement) && e.close()
                    };
                    return t.addEventListener("click", a), () => {
                        t.removeEventListener("click", a)
                    }
                }, [v, g]);
                let y = (0, o.useCallback)(e => {
                        if (g) {
                            e.preventDefault();
                            return
                        }
                        x(!1), null == i || i(e)
                    }, [g, x, i]),
                    b = (0, o.useCallback)(e => {
                        g && e.preventDefault()
                    }, [g]);
                return (0, n.jsx)("dialog", { ..._,
                    className: r()(h.dialog, a),
                    onClose: y,
                    onCancel: b,
                    ref: m,
                    children: l
                })
            });
            var _ = a(47847);
            let p = (0, o.createContext)(void 0);
            p.displayName = "DialogContext";
            let f = (0, o.forwardRef)(function({
                classes: e = {},
                className: t,
                children: a,
                ...l
            }, c) {
                let d = (0, o.useRef)(null),
                    u = (0, s.q)(c, d),
                    h = (0, i.z)(_, e),
                    [f, m] = (0, o.useState)("none");
                return (0, n.jsx)(g, { ...l,
                    className: r()(h.root, t, {
                        [h.scrollPositionTop]: "top" === f,
                        [h.scrollPositionMiddle]: "middle" === f,
                        [h.scrollPositionBottom]: "bottom" === f
                    }),
                    ref: u,
                    children: (0, n.jsx)("div", {
                        className: h.content,
                        children: (0, n.jsx)(p.Provider, {
                            value: {
                                setScrollPosition: m
                            },
                            children: a
                        })
                    })
                })
            });
            var m = a(961803),
                v = a(488507);
            let x = [0, 1],
                y = (0, o.forwardRef)(function({
                    className: e,
                    children: t,
                    ...a
                }, l) {
                    let i = (0, o.useRef)(null),
                        c = (0, s.q)(i, l),
                        [d, u] = (0, o.useState)(null),
                        [h, g] = (0, o.useState)(null),
                        {
                            setScrollPosition: f
                        } = function() {
                            let e = (0, o.useContext)(p);
                            if (!e) throw Error("Dialog compound components cannot be rendered outside the Dialog component");
                            return e
                        }();
                    return function(e, t, a, n) {
                        let l = (0, m.r)({
                                root: e,
                                threshold: x
                            }),
                            r = (0, o.useRef)(!0),
                            i = (0, o.useRef)(!0),
                            s = (0, o.useCallback)(e => {
                                let l = e.filter(({
                                        target: e
                                    }) => e === t).map(({
                                        isIntersecting: e
                                    }) => e).pop() ? ? r.current,
                                    o = e.filter(({
                                        target: e
                                    }) => e === a).map(({
                                        isIntersecting: e
                                    }) => e).pop() ? ? i.current;
                                if (r.current = l, i.current = o, l && o) {
                                    n("none");
                                    return
                                }
                                if (l) {
                                    n("top");
                                    return
                                }
                                if (o) {
                                    n("bottom");
                                    return
                                }
                                n("middle")
                            }, [t, a, n]);
                        (0, v.S)(t, s, l), (0, v.S)(a, s, l)
                    }(i.current, d, h, f), (0, n.jsxs)("div", { ...a,
                        className: r()(_.body, e),
                        ref: c,
                        children: [(0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: _.scrollTopMarker,
                            ref: u
                        }), t, (0, n.jsx)("div", {
                            "aria-hidden": !0,
                            className: _.scrollBottomMarker,
                            ref: g
                        })]
                    })
                }),
                b = (0, o.forwardRef)(function({
                    className: e,
                    children: t,
                    ...a
                }, l) {
                    return (0, n.jsx)("footer", { ...a,
                        className: r()(_.footer, e),
                        ref: l,
                        children: t
                    })
                });
            var j = a(481139),
                q = a(716952),
                k = a(574775);
            let w = (0, o.forwardRef)(function({
                className: e,
                children: t,
                preventClose: a,
                ...l
            }, i) {
                let s = (0, q.YB)(),
                    c = (0, o.useCallback)(e => {
                        var t;
                        null === (t = e.currentTarget.closest("dialog")) || void 0 === t || t.close()
                    }, []);
                return (0, n.jsxs)("header", { ...l,
                    className: r()(_.header, {
                        [_.empty]: !t
                    }, e),
                    ref: i,
                    children: [(0, n.jsx)("div", {
                        className: _.headerContent,
                        children: t
                    }), a ? null : (0, n.jsx)("span", {
                        className: _.closeButton,
                        children: (0, n.jsx)(k.h, {
                            edge: "target background",
                            onClick: c,
                            title: s.formatMessage({
                                id: "dialog.header.closeButton.title",
                                description: "Accessible tooltip for the close button in a dialog",
                                defaultMessage: "Close dialog"
                            }),
                            children: (0, n.jsx)(j.x, {})
                        })
                    })]
                })
            });
            var C = a(394044),
                M = a(719268);
            let N = (0, o.forwardRef)(function({
                className: e,
                children: t,
                open: a,
                ...l
            }, i) {
                let c = (0, o.useRef)(null),
                    d = (0, o.useRef)(null),
                    u = (0, s.q)(i, c),
                    h = (0, q.YB)(),
                    [p, f] = (0, o.useState)(!1),
                    m = M.rSc.dark.styles.theme;
                (0, o.useEffect)(() => {
                    a ? requestAnimationFrame(() => {
                        var e;
                        f(!0), null === (e = d.current) || void 0 === e || e.focus()
                    }) : f(!1)
                }, [a]);
                let v = (0, o.useCallback)(e => {
                    var t;
                    null === (t = e.currentTarget.closest("dialog")) || void 0 === t || t.close()
                }, []);
                return (0, n.jsxs)(g, { ...l,
                    open: a,
                    className: r()(_.fullscreen, m, e),
                    ref: u,
                    children: [(0, n.jsx)("div", {
                        className: _.fullscreenClose,
                        children: (0, n.jsx)(k.h, {
                            ref: d,
                            edge: "target background",
                            onClick: v,
                            title: h.formatMessage({
                                id: "dialog.fullscreen.closeButton.title",
                                description: "Accessible tooltip for the close button in a fullscreen dialog",
                                defaultMessage: "Close"
                            }),
                            children: (0, n.jsx)(j.x, {})
                        })
                    }), (0, n.jsx)("div", {
                        className: _.fullscreenContent,
                        children: p ? t : void 0
                    })]
                })
            })
        },
        651066: function(e, t, a) {
            "use strict";
            a.d(t, {
                U: function() {
                    return y
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(741664),
                i = a.n(o),
                s = a(202784),
                c = a(823728),
                d = a(614050),
                u = a(719110),
                h = a(961490),
                g = a(9534),
                _ = a(663042),
                p = a(50227),
                f = a(665012),
                m = a(187187);
            let v = [{
                    analyticsName: "home_hero_cta",
                    themeVariant: "primary"
                }, {
                    analyticsName: "home_hero_cta_secondary",
                    themeVariant: "secondary"
                }],
                x = {
                    primary: "primary",
                    secondary: "secondary",
                    tertiary: "tertiary",
                    simple: "ghost"
                };

            function y({
                ctas: e,
                className: t,
                size: a = "large"
            }) {
                let l = (0, p.F)(),
                    o = (0, s.useContext)(f.kV),
                    y = (0, _.A)(),
                    b = (0, s.useCallback)((e, t) => a => {
                        e && u.t(l, { ...(0, h.ok)(a.currentTarget),
                            name: t
                        })
                    }, [l]),
                    j = (0, s.useMemo)(() => e.map((e, t) => {
                        let a = v[t].analyticsName,
                            n = e.buttonVariant ? x[e.buttonVariant] : v[t].themeVariant,
                            l = e.href === d._j.signup && y ? y : e.text;
                        return {
                            cta: { ...e,
                                text: l
                            },
                            analyticsName: a,
                            themeVariant: n,
                            onClick: b(e.href || "", a)
                        }
                    }), [e, b, y]);
                return (0, n.jsx)("div", {
                    className: r()(m.nav, t),
                    children: j.map(({
                        cta: e,
                        themeVariant: t,
                        onClick: l
                    }) => (0, n.jsx)(c.Q, {
                        as: i(),
                        href: (0, g.G1)(e.href, o),
                        variant: t,
                        size: a,
                        className: m.cta,
                        onClick: l,
                        children: e.text
                    }, e.href))
                })
            }
        },
        258238: function(e, t, a) {
            "use strict";
            a.d(t, {
                n: function() {
                    return m
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(716952),
                s = a(914775),
                c = a(719110),
                d = a(498529),
                u = a(962753),
                h = a(237853),
                g = a(488507),
                _ = a(421543),
                p = a(331714),
                f = a(888391);

            function m({
                poster: e,
                video: t,
                mobilePoster: a,
                mobileVideo: l,
                forceStaticFallback: m,
                platform: v,
                mediaContainerClassName: x
            }) {
                let y = (0, p.T)(),
                    b = (0, _.a)("(max-width: 839px)"),
                    j = !0 === b || void 0 === b && ("android" === v || "ios" === v) ? "mobile" : "desktop",
                    q = (0, i.YB)(),
                    [k, w] = (0, o.useState)(!1),
                    [C, M] = (0, o.useState)(!1),
                    N = l.width / l.height,
                    A = t.width / t.height,
                    S = (0, o.useRef)(null),
                    W = (0, o.useRef)(null);
                (0, o.useEffect)(() => {
                    if (m || "mobile" === j) return;
                    let e = S.current;
                    y && (null == e || e.pause(), w(!1))
                }, [j, y, m]), (0, g.S)("desktop" !== j || m || y ? null : W.current, ([e]) => {
                    if (e.intersectionRatio >= .5 && !C) {
                        M(!0);
                        let e = S.current;
                        null == e || e.play().catch(() => {}), w(!0)
                    }
                }, {
                    threshold: .5
                }), (0, o.useEffect)(() => {
                    let e = S.current;
                    if (!e) return;
                    let t = () => w(!0),
                        a = () => w(!1);
                    return e.addEventListener("play", t), e.addEventListener("pause", a), () => {
                        e.removeEventListener("play", t), e.removeEventListener("pause", a)
                    }
                }, [j, m]);
                let H = (0, o.useMemo)(() => q.formatMessage({
                    id: "VideoPlayer.playbackButtonLabel",
                    description: "Accessible label for the play/pause button on the video player",
                    defaultMessage: (0, i.Ys)("playbackState", {
                        paused: "Play",
                        playing: "Pause",
                        other: "Play"
                    })
                }, {
                    playbackState: k ? "playing" : "paused"
                }), [q, k]);
                return (0, n.jsxs)("div", {
                    className: f.productImageContainer,
                    children: [(0, n.jsxs)("div", {
                        ref: W,
                        className: r()(f.productImage, x),
                        style: {
                            [(0, s.Ay)("--mobile-hero-media-aspect-ratio")]: N,
                            [(0, s.Ay)("--desktop-hero-media-aspect-ratio")]: A
                        },
                        children: [(() => {
                            let r = "mobile" === j ? a : e,
                                o = "mobile" === j ? l : t;
                            return "mobile" === j ? null : m ? (0, n.jsx)(u.E, { ...r,
                                alt: r.altText ? ? "",
                                className: f.media,
                                priority: !0
                            }) : (0, n.jsx)(h.n, {
                                ref: S,
                                src: o.src,
                                className: f.media,
                                loop: !0,
                                poster: (0, u.N)({ ...r,
                                    alt: ""
                                }).props.src,
                                width: o.width,
                                height: o.height,
                                autoPlay: !y && !m && C,
                                muted: !0,
                                playsInline: !0,
                                preload: "auto"
                            })
                        })(), m || "mobile" === j ? null : (0, n.jsxs)("button", {
                            onClick: e => {
                                let t = S.current;
                                t && (k ? (t.pause(), c.DU({
                                    name: "home_hero_video_pause_click",
                                    src: t.src
                                }), w(!1)) : (t.play(), c.xj({
                                    name: "home_hero_video_play_click",
                                    src: t.src
                                }), w(!0)))
                            },
                            className: f.playPauseController,
                            children: [(0, n.jsx)("span", {
                                className: r()(f.icon, {
                                    [f.paused]: !k
                                }),
                                children: k ? (0, n.jsx)(d.s, {}) : (0, n.jsx)(d.d, {})
                            }), (0, n.jsx)("span", {
                                className: f.visuallyHidden,
                                children: H
                            })]
                        })]
                    }), (0, n.jsx)("div", {
                        className: f.productImageGradient
                    })]
                })
            }
        },
        954004: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return h
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(701373),
                s = a(914775);

            function c(e) {
                let [t, a] = e;
                return (0, s.lm)(a) ? a : t
            }
            var d = a(429056),
                u = a(856531);
            let h = (0, o.forwardRef)(function({
                title: e,
                type: t = "button",
                size: a = "medium",
                shape: l = "rectangular",
                edge: o = "target",
                className: h,
                children: g,
                "aria-labelledby": _,
                ...p
            }, f) {
                let m = (0, d.Z)(),
                    v = (0, i.r)(m, _),
                    {
                        right: x,
                        top: y
                    } = function(e) {
                        let t = e.split(" ");
                        return {
                            top: function([e]) {
                                return e
                            }(t),
                            right: c(t),
                            bottom: function(e) {
                                let [, , t] = e;
                                return (0, s.lm)(t) ? t : function([e]) {
                                    return e
                                }(e)
                            }(t),
                            left: function(e) {
                                let [, , , t] = e;
                                return (0, s.lm)(t) ? t : c(e)
                            }(t)
                        }
                    }(o);
                return (0, n.jsxs)("button", { ...p,
                    title: e,
                    type: t,
                    "aria-labelledby": v,
                    className: r()(u.button, {
                        [u.sizeSmall]: "small" === a,
                        [u.sizeMedium]: "medium" === a,
                        [u.shapeCircular]: "circular" === l,
                        [u.shapeRectangular]: "rectangular" === l,
                        [u.edgeVerticalBackground]: "background" === y,
                        [u.edgeHorizontal]: "target" !== x,
                        [u.edgeHorizontalBackground]: "background" === x
                    }, h),
                    ref: f,
                    children: [g, (0, n.jsx)("span", {
                        hidden: !0,
                        id: m,
                        className: u.title,
                        children: e
                    }), (0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: u.focusRing
                    })]
                })
            })
        },
        240631: function(e, t, a) {
            "use strict";
            a.d(t, {
                o: function() {
                    return s
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(856531);
            let s = (0, o.forwardRef)(function({
                role: e = "group",
                className: t,
                children: a,
                ...l
            }, o) {
                return (0, n.jsx)("div", { ...l,
                    role: e,
                    className: r()(i.group, t),
                    ref: o,
                    children: a
                })
            })
        },
        574775: function(e, t, a) {
            "use strict";
            a.d(t, {
                h: function() {
                    return n.h
                },
                o: function() {
                    return l.o
                }
            });
            var n = a(954004),
                l = a(240631)
        },
        861210: function(e, t, a) {
            "use strict";
            a.d(t, {
                e: function() {
                    return x
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(807354),
                s = a(776747),
                c = a(444212),
                d = a(838421),
                u = a(138312),
                h = a(741521),
                g = a(50227),
                _ = a(961829),
                p = a(47277),
                f = a(676995),
                m = a(823269),
                v = a(142571);

            function x({
                className: e,
                children: t,
                title: a,
                metadata: l,
                favicon: x,
                theme: y = "base",
                variant: b
            }) {
                (0, h.z)("undefined" != typeof document ? document.body : null);
                let {
                    isMobile: j,
                    isServer: q
                } = (0, g.F)(), k = (0, p.y)(), {
                    firstOpenNotification: w
                } = (0, f.z)({
                    localeNotificationType: k
                }), C = (0, o.useMemo)(() => {
                    if (w && (q || !j)) return (0, n.jsx)(d.Z, {
                        notification: w
                    })
                }, [w, j, q]), M = (0, _.q)();
                return (0, n.jsxs)(m.f6, {
                    global: !0,
                    value: y,
                    children: [(0, n.jsx)(c.S, {
                        title: a,
                        metadata: l,
                        favicon: x
                    }), C, (0, n.jsx)(s.h, {
                        experiments: M
                    }), (0, n.jsx)("main", {
                        className: r()(v.main, {
                            [v.withoutPadding]: "fullWidth" === b
                        }, e),
                        children: t
                    }), (0, n.jsx)(i.$, {
                        separator: "fullWidth" === b ? "none" : "light"
                    }), (0, n.jsx)(u.S, {})]
                })
            }
        },
        471817: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return d
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(202784),
                i = a(914775),
                s = a(962753),
                c = a(388189);
            let d = (0, o.forwardRef)(function({
                width: e,
                height: t,
                alt: a,
                className: l,
                altText: o,
                surfaceArea: d,
                grayscale: u,
                maxHeight: h,
                style: g = {},
                ..._
            }, p) {
                return (0, n.jsx)(s.E, { ..._,
                    width: e,
                    height: t,
                    className: r()(c.logo, {
                        [c.grayscale]: u,
                        [c.heightConstrained]: (0, i.lm)(h)
                    }, l),
                    style: { ...g,
                        [(0, i.Ay)("--logo-width")]: e,
                        [(0, i.Ay)("--logo-height")]: t,
                        [(0, i.Ay)("--logo-surface-area")]: d,
                        [(0, i.Ay)("--logo-max-height")]: h ? `${h}px` : "none"
                    },
                    alt: a ? ? o ? ? "",
                    ref: p
                })
            });
            d.displayName = "Logo"
        },
        737317: function(e, t, a) {
            "use strict";
            a.d(t, {
                K: function() {
                    return o
                }
            });
            var n = a(552322),
                l = a(809008),
                r = a.n(l);

            function o() {
                return (0, n.jsx)(r(), {
                    children: (0, n.jsx)("meta", {
                        name: "robots",
                        content: "noindex, follow"
                    })
                })
            }
        },
        237853: function(e, t, a) {
            "use strict";
            a.d(t, {
                n: function() {
                    return v
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(809008),
                i = a.n(o),
                s = a(202784),
                c = a(786672),
                d = a(808813),
                u = a(914775),
                h = a(962753),
                g = a(356428),
                _ = a(488507),
                p = a(756092),
                f = a(366308),
                m = a(626242);
            let v = (0, s.forwardRef)(function({
                src: e,
                poster: t,
                className: a,
                autoPlay: l,
                controls: o = !1,
                height: v = 1080,
                width: x = 1920,
                preload: y,
                playsInline: b,
                ...j
            }, q) {
                let k = (0, p.b)(),
                    w = e ? (0, c.D)(e, k) : void 0,
                    C = t ? (0, c.D)(t, k) : void 0,
                    M = C && (0, d.r)(C) ? (0, g.Fh)(C) : function(e, t, a) {
                        if (a) return (0, h.N)({
                            src: a,
                            alt: "",
                            width: e,
                            height: t,
                            quality: 90
                        }).props.src
                    }(x, v, C),
                    N = (0, s.useRef)(null),
                    A = (0, f.q)(q, N),
                    S = (0, s.useRef)(!1),
                    W = (0, s.useCallback)(async e => {
                        if (!S.current && e.some(({
                                isIntersecting: e
                            }) => e)) {
                            S.current = !0;
                            try {
                                var t;
                                await (null === (t = N.current) || void 0 === t ? void 0 : t.play())
                            } catch (e) {}
                        }
                    }, []);
                (0, _.x)("lazy" === l ? N : null, W);
                let H = v && x ? `${x} / ${v}` : void 0;
                return (0, n.jsxs)(n.Fragment, {
                    children: ["auto" === y ? (0, n.jsxs)(i(), {
                        children: [(0, n.jsx)("link", {
                            rel: "preload",
                            as: "image",
                            href: M
                        }), (0, n.jsx)("link", {
                            rel: "preload",
                            as: "video",
                            href: w
                        })]
                    }) : null, (0, n.jsx)("video", { ...j,
                        autoPlay: !0 === l || "eager" === l || void 0,
                        src: w,
                        className: r()(m.video, {
                            [m.videoAspectRatio]: !!H
                        }, a),
                        poster: M,
                        style: {
                            [(0, u.Ay)("--video-aspect-ratio")]: H
                        },
                        ref: A,
                        width: x,
                        height: v,
                        preload: y,
                        controls: o,
                        playsInline: b
                    })]
                })
            })
        },
        550950: function(e, t, a) {
            "use strict";
            a.d(t, {
                K: function() {
                    return ei
                }
            });
            var n = a(552322),
                l = a(72779),
                r = a.n(l),
                o = a(505152),
                i = a.n(o),
                s = a(208365),
                c = a(741664),
                d = a.n(c),
                u = a(202784),
                h = a(847145),
                g = a(797187),
                _ = a(399557),
                p = a(208326),
                f = a(719110),
                m = a(471817),
                v = a(50227),
                x = a(150674);

            function y({
                eyebrow: e,
                logos: t
            }) {
                let a = (0, v.F)(),
                    [l, o] = (0, u.useState)(!1),
                    i = "undefined" != typeof CSS && "function" == typeof CSS.supports && CSS.supports("animation-timeline", "view()"),
                    s = (0, u.useCallback)((e, t, n) => l => {
                        f.t(a, {
                            name: e,
                            href: t,
                            label: n
                        })
                    }, [a]);
                return 0 === t.length ? null : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(g.y, {
                        as: "p",
                        variant: "globalContext",
                        className: x.eyebrow,
                        children: e
                    }), (0, n.jsx)(_.L, {
                        edge: "bottom",
                        offset: "var(--sticky-edge-offset, 0px)",
                        isSticky: {
                            default: !1,
                            md: !0
                        },
                        onStickyChange: o,
                        sentinelClassName: x.sentinel,
                        wrapperClassName: x.stickyWrapper,
                        wrapperStyle: {
                            "--logo-count": String(t.length),
                            ...(0, p.rN)(2, "max-rows")
                        },
                        children: (0, n.jsx)("div", {
                            className: r()(x.logoWallMarqueeWrapper, {
                                [x.stuck]: l && !i
                            }),
                            children: (0, n.jsx)(h.zU, {
                                variant: {
                                    default: "marquee",
                                    md: "wall"
                                },
                                marqueeDirection: "reverse",
                                maxRows: 2,
                                className: x.logoWallMarquee,
                                "data-analytics-scroll-point": !0,
                                "data-analytics-name": "HomepageLogoWall",
                                children: t.map(e => e.href ? (0, n.jsx)(h.wk, {
                                    href: e.href,
                                    as: d(),
                                    "aria-label": e.altText ? ? "",
                                    onClick: s(e.altText ? ? e.id, e.href, e.altText ? ? ""),
                                    prefetch: !1,
                                    children: (0, n.jsx)(m.T, {
                                        src: e.src,
                                        height: e.height || 0,
                                        width: e.width || 0,
                                        surfaceArea: 1600,
                                        maxHeight: 24,
                                        loading: "eager",
                                        alt: e.altText ? ? ""
                                    })
                                }, e.id) : (0, n.jsx)(h.Ni, {
                                    children: (0, n.jsx)(m.T, {
                                        src: e.src,
                                        height: e.height || 0,
                                        width: e.width || 0,
                                        surfaceArea: 1600,
                                        maxHeight: 24,
                                        loading: "eager",
                                        alt: e.altText ? ? ""
                                    })
                                }, e.id))
                            })
                        })
                    })]
                })
            }
            var b = a(458828),
                j = a(651066),
                q = a(258238),
                k = a(744272);

            function w({
                variant: e,
                className: t
            }) {
                switch (e) {
                    case "lines":
                        return (0, n.jsx)("svg", {
                            className: t,
                            width: "32",
                            height: "30",
                            fill: "none",
                            viewBox: "0 0 32 30",
                            children: (0, n.jsxs)("g", {
                                fill: "#2537B1",
                                children: [(0, n.jsx)("path", {
                                    d: "M8.88 9.37c-.08.09-.23.2-.27.29.02.05.09.17.08.22-.15.17-.15.14-.17.36q-.06.04-.14.04c-.05-.03-.03-.02-.06-.07-.01.08.06 0 .01.12-.1.07-.17.07-.28.1-.08.08-.08.06-.1.15.04.2.27.22.2.45-.08-.03-.1-.22-.25-.24-.24.2.15.68.39.78v.04l-.08.12c.2.16.45.4.65.51.06.04.67.32.72.32l.06-.09c.04-.01.65.34.7.38.42.3.86.46 1.3.66.28.15.8.6 1.06.72.65.27 1.39 1.02 2.03 1.15q.06.1.1.2l-.05.07c.01.04.18.02.3.1.82.56 1.67 1.05 2.5 1.6.22.14.49.27.7.43.38.2.67.51 1 .74l3.36 2.17c.1.06.3.13.37.18q.9.66 1.8 1.33c.16.12.26.18.46.09.14-.06.34-.3.43-.41.04-.06.02-.23-.02-.28-.1-.11-.32-.55-.42-.62-.37-.28-.68-.7-1.12-.85-.13-.24-.08-.14-.28-.2-.04-.01-.11-.28-.22-.34-.2-.15-.57-.24-.76-.4-.28-.27-.49-.48-.85-.65-.08-.04-.29-.25-.39-.3q-.48-.33-.94-.71c-.1-.09-.64-.38-.68-.43-.23-.35-.6-.47-.91-.71-.45-.36-.94-.66-1.38-1.02l-.2.04c-.1-.03-.14-.35-.26-.42-.51-.27-.95-.68-1.4-1.02L14 12.6q-.25-.22-.52-.43-.44-.29-.87-.56c-.18-.12-.35-.3-.54-.41a7 7 0 0 1-1.07-.75c-.23-.2-.45-.35-.67-.57-.13-.02-.11-.08-.22-.12-.03.03-.08.11-.12.09-.16-.1-.31-.37-.4-.52-.15.1-.39.33-.57.26-.1-.03-.12-.14-.15-.22"
                                }), (0, n.jsx)("path", {
                                    d: "m8.6 9.66-.01.01c-.14.15-.27.16-.33.37-.05.13-.17.26-.21.38.11-.02.19-.02.28-.09.05-.12-.02-.04 0-.12.02.05 0 .04.05.07q.08.01.14-.04c.02-.22.02-.2.17-.36.01-.05-.06-.17-.08-.22m8.64-6.44-.44-.25c-.02-.12.18-.24-.02-.38h-.04l-.07.2c-.05 0-.27-.13-.33-.15 0 0-.09.11-.15.1-.08-.01-.25-.08-.32-.06-.02.07.06.35.08.43-.13.04-.73.23-.81.2l-.1-.11h-.03c0 .07 0 .05.05.12l.08.03c.11.3.05.38 0 .66-.08.07-.32.27-.35.36.1.16.2.16.24.35l-.02.01c-.05-.04-.15-.13-.2-.13q-.03.08.03.2c.05.04.16.04.16.04q.08.29.24.52c.17.25.46.33.72.49.31.19.59.45.94.57.1.18.72.72.9.78.22.58.3.32.42.5-.04.1-.1.07-.1.15.1.05.24-.06.34.01.24.2.22.54.54.68.12.05.08.1.22 0 .08.05.07.37.28.54.13.1.18.02.23.06.14.13.27.37.4.5.26.25.54.43.8.67.14.15.14.3.24.45.03.03.3.18.35.23.11.14.22.34.34.47s.31.22.42.36c.07.1.2.37.26.43l.6.56c.27.26.4.53.66.79.09.1.37.31.4.42 0 .08 0 .1-.04.16l.03.02c.08-.05.07-.06.15-.05.18.15.54.65.74.86l.77.8 1.03 1.15c.37.4.69.78 1.1 1.14.12.1.22.3.33.41.47.49 1 1.2 1.62 1.46.16-.05.48-.36.68-.47l-.1-.4c-.09-.07-.34-.23-.36-.34 0-.04.04-.13 0-.17-.22-.3-.43-.71-.68-.98-.38-.42-.78-.84-1.12-1.3-.04-.05-.3-.28-.3-.31-.14-.28-.31-.4-.5-.62l-.89-1.02c-.3-.35-.47-.61-.82-.95-.01-.1 0-.13-.06-.22-.21-.29-.5-.48-.71-.75q-.17-.21-.33-.46-.22-.26-.44-.51l-.35-.46c-.18-.2-.74-.69-.8-.9-.07-.28-.73-.82-.93-1.05-.27-.32-.5-.66-.8-.96-.25-.26-.55-.47-.78-.74-.09-.1-.07-.26-.15-.36-.32-.37-.7-.7-1.02-1.05q-.31-.4-.61-.81l-.42-.5q-.14-.14-.25-.33c-.14-.24-.23-.68-.5-.83-.1-.06-.21-.08-.25-.22-.03-.08.05-.15.06-.23-.1 0-.18.1-.27.19M5.68 18.17q-.06-.12-.16-.2h-.05c-.09.08-.05.2-.14.28l-.75-.03c-.06.1-.13.25-.24.29q-.14-.04-.26-.03l-.03.04q.06.05.11.08c.07.05.05.27.04.35 0 .18-.08.42-.07.6l-.14.2c-.17.08-.3.12-.47.17l.03.12c.1.04.28.1.33.2-.08.11-.11.07-.25.12l.02.05c.24.01.58.13.47.44.07.07.13.03.18.13l.09.13c.41.23.8.33 1.27.35.15 0 .46.16.64.19s.38.03.54.08c.06-.08.05-.1.12-.12.12.05.15.16.24.18.2.06.3-.1.51-.03.23.06.47.24.69.3.66.18 1.35.33 2 .55.21.07.58.3.79.4 0 0 .14-.04.16-.03.16.07.13.18.33.13l.08-.12h.04c.09.1.01.1.12.16.1 0 .16-.04.23.03.1.07.1.1.2.14.33.11.7.13 1.02.2a47 47 0 0 1 1.97.55c.2.06.6.1.84.16.37.1.73.24 1.11.3l.19.04c.07.06.03.06.13.08l.08-.1c.15.01.3.18.46.22.32.08 1.58.33 1.73.51.1.12.01.27.2.3.1-.03.09-.1.15-.15.05-.03.61.15.71.18l.26-.13q.1-.02.2-.03c.24-.04.32-.1.48-.29q.04-.12.07-.26c-.24-.39-.64-.53-.92-.82-.15-.02-.23-.04-.38-.03.02-.09.02-.06 0-.13-.09-.05-.13 0-.2.04q-.1-.06-.16-.16c-.26-.1-.23.06-.33.02-.1-.06-.2-.2-.31-.25-.55-.2-1.11-.35-1.64-.6-.07-.04-.25.03-.3 0-.1-.04-.2-.14-.3-.2l-.95-.3c-.17-.05-.24.18-.34.09 0-.07.02-.09 0-.15-.11-.08-.33-.02-.45 0-.38-.45-1.2-.51-1.73-.69-.27-.08-.51-.24-.77-.33-.58-.2-1.14-.46-1.72-.66-.38-.13-.5-.27-.91-.26-1.02-.66-2.37-.84-3.26-1.48-.07 0-.07.01-.15.07-.17-.02-.1-.31-.26-.44-.28.06-.23 0-.47-.12h-.09c-.14-.1-.5-.21-.55-.3-.05 0-.04 0-.08-.03"
                                }), (0, n.jsx)("path", {
                                    d: "M21.88 25.17c-.15.17-.24.24-.48.28q-.1.02-.2.03c0 .1-.03.05-.12.16l.02.05c.16.07.38-.04.49-.18.07-.1.38.26.29-.35M6.4 18.5q-.14-.16-.26-.36c-.14-.2-.31-.04-.46.03l.08.02c.05.1.41.2.55.3z"
                                })]
                            })
                        });
                    case "sweatSmall":
                        return (0, n.jsx)("svg", {
                            className: t,
                            width: "17",
                            height: "17",
                            fill: "none",
                            viewBox: "0 0 17 17",
                            children: (0, n.jsxs)("g", {
                                fill: "#2537b1",
                                children: [(0, n.jsx)("path", {
                                    d: "m5.86.12-.14.05C5.7.39 5.54.74 5.4.9h-.03C5.27.8 5.21.7 5.1.6c-.06.19-.1.21-.26.31-.1.3 0 .46.06.77l-.16.19c-.03.16-.01.2.03.36.19.13.16.3.28.46.37.53.84 1.13 1.04 1.75.03.07-.04.06 0 .12l.05.02q.1.16.2.33l.06.13q.04-.06.04-.13c.03-.02.01-.01.05-.01q.16.1.08.26.05.29.14.56.07.1.07.18v.01a.6.6 0 0 0 0 .37c.17.64 0 1.08-.45 1.54-.17.18-.31.39-.56.53h-.09c-.17.05-.26.17-.44.24l-.56.17q-.28.1-.55.16-.11-.02-.27-.01-.19.04-.38.07l-.62-.03c-.08 0-.22.06-.3.05-.1-.12-.1-.1-.26-.1q-.12-.12-.28-.1c-.22.04-.6.07-.78.2-.3 0-.3.06-.58.19l-.27.1c.06.24.18.57.21.8l-.1.14c-.1.05-.46.16-.49.22.06.12-.02.11.1.15l.3.06c-.05.16-.04.23.11.32q.07.06.16.07c.1.17.21.05.29.2l.03.07q-.11.04-.2.12c-.05.03-.06.02-.07.06.1.04.15-.02.32.05.15.27.17.25.48.28.08 0 .11.08.13.09.18.04.38.03.54.12.45.24.95.42 1.33.77.02.02.13.03.16.04.27.25.48.44.8.64.19.13.28.33.54.38.18.43.36.49.6.86.1.13.1.3.17.4l.1.05c.02.06-.01.06-.02.09-.12.27-.2.6-.14.9l-.13.25c.02.21-.03.2.1.33.24-.02.3-.02.52.07.06-.02.17-.01.17-.02.08-.04.07-.13.2-.1l.03.02v.03l-.04.02.14-.07h.1q.04-.02.1-.03c.06-.01.1-.03.13.03.14.06.2-.06.36-.02h.02l.01-.01q0-.1-.04-.2c.04-.09.08-.2.16-.23.07 0 .11.07.16.12.1.12.06.06.12.04q.03.03.07.02c.02-.03-.03-.23-.03-.28.1-.2.11-.13.22-.26-.06-.08-.19-.21-.14-.33.12-.03.21.1.3.1.04-.18-.14-.27-.22-.41-.15-.26.3-.19 0-.48-.05-.06 0-.22.02-.3l.1-.07-.03-.01c-.14 0-.3-.06-.22-.22 0-.07.06-.24.04-.3-.05-.21-.15-.18-.1-.4-.07-.07-.17-.17-.2-.27-.01-.07.02-.07.05-.13q-.07-.02-.13 0c-.03-.04-.1-.13-.14-.14q-.03 0-.04-.04a1 1 0 0 1-.15-.23c-.06-.08-.04-.16-.12-.22l-.1-.1c-.14-.07-.04-.1-.14-.27l-.02.01q-.17-.1-.23-.3c-.04-.13-.32-.65-.3-.72.08 0 .07.04.16.07.12-.03.32.07.4-.08L6.86 11l-.15.03-.02-.02.02-.07c-.04-.07-.07 0-.13-.02l.03-.02h-.05v-.02c.07-.07.15-.05.23-.1.07-.04.08-.11.18-.13.35-.07.27.05.61-.2-.01-.06-.04-.19 0-.24.04 0 .09.1.11.09l.2-.06c-.04-.1-.03-.08-.05-.18-.05-.07-.02-.13 0-.2q.03-.07.09-.1.07.07.09.17c.05.01.08-.16.2-.22.07 0 .04.01.11.05.04-.03 0-.08.02-.09a1 1 0 0 0 .12-.19l.02-.03h.06l.04-.15.03-.01c.07-.1.09-.09.19-.14 0-.06-.13-.03-.2-.1.02-.13.2-.1.31-.22.12-.12.09-.28.15-.38.08-.15.22-.37.33-.51q0-.13-.02-.25c0-.05-.07-.07-.07-.15q.05-.05.13-.06c.02-.03.01-.01 0-.04q-.04 0-.09-.02c-.04-.07.1-.4.09-.52q0-.04.06-.07c.1-.24.17-.03.3-.05l.03-.09c.05-.02.03-.02.08-.01.07.05.1.21.15.22q.38.12.8.2 0 .02.05.06c.1 0 .13.02.18.1.1.13.3.29.47.3l.13.01q.07-.01.12.04l.03-.04c.1 0 .21.02.22.15-.03.05-.04.05-.1.08v.01c.09.01.03-.05.13-.02l.05.07h.02c.24-.35.38.08.53.13.01-.23.17-.12.3-.1.05 0 .1-.05.16-.03.08.16 0 .12.21.19.1.03.3-.1.36-.05v.01q.13.07.23.17c.01-.23.13-.25.3-.36q.03.11.1.21c.05-.03.02-.11.07-.16q.07.04.1.11c.07.04.16-.17.27-.19l.04.06h.03c.12-.09.45-.47.52-.63V7.2q.06-.04.14-.06c.1-.05.06.03.15 0 0-.1-.1-.16-.1-.26.03-.05.26-.25.32-.3-.02-.1-.02-.52.04-.6l-.04-.13c-.17 0-.14-.27-.25-.39a1.3 1.3 0 0 0-.7-.29c-.13.1-.2.06-.34.1l-.15.1a1 1 0 0 1-.2.51l-.17.07c-.14.04-.26.01-.4 0-.34-.02-.6-.13-.93-.25-.11-.05-.24-.14-.35-.18a6 6 0 0 1-1.57-.9c-.14-.1-.32-.19-.46-.3-.28-.24-.51-.49-.85-.67l-.13.01c-.08-.04-.25-.13-.3-.2.03-.06.1-.02.14-.09 0-.1-.48-.43-.57-.57-.08-.1-.3-.26-.4-.39l-.6-.8c-.12-.16-.3-.3-.4-.46-.04-.06-.01-.2-.1-.32-.15-.2-.1-.07-.32-.1-.1 0-.06-.15-.1-.15-.2 0-.16-.2-.33-.24-.13 0-.14.14-.3.1V.36C6.12.28 5.95.2 5.88.13z"
                                }), (0, n.jsx)("path", {
                                    d: "M13.73 8.01c-.07-.06-.26.07-.36.04-.21-.06-.13-.03-.2-.19-.07-.02-.12.04-.16.03-.14-.02-.3-.13-.3.1q.07-.06.16-.06c.08.04.21.11.26.17q.24 0 .46-.03c.06 0 .09-.05.14-.06M6.81 16.7h-.09l-.14.07.04-.02v-.03l-.03-.02c-.13-.03-.12.06-.2.1 0 0-.1 0-.17.02.1.05.54.13.62.06.01-.08-.02-.11-.03-.18m.21-4.36q.04.06.1.1c.08.05.06.13.12.2q-.04-.07-.03-.16c.03-.04.02-.02.07-.04.12.06.13.28.15.4-.03.04-.01.03-.04.04q.01.03.04.04c.04.01.1.1.14.14-.07-.18-.15-.58-.22-.69-.05-.02-.06 0-.12.02-.03-.05.03-.04.04-.12l-.04-.01c-.08.03-.04.08-.09.14-.07 0-.05-.05-.12-.06m-.04-1.68c-.1.02-.1.1-.19.13-.07.05-.15.03-.22.1v.02h.05l-.03.02c.06.02.1-.05.13.02l.07.02c.08-.03.05-.06.14-.08q.05.02.06.06h.05l.01-.02a1 1 0 0 0-.1-.22zm-.1 1.4L6.9 12q.07 0 .1-.05v-.03l-.13-.06c-.02-.07.05-.04.07-.13l-.03-.02c-.04.02-.03.02-.06.06-.07.03-.11-.01-.22 0 .03.15.12.22.23.3zm4.22-4.78h-.03c-.05.08 0 .13-.04.2.18.08.47.14.67.1l-.13-.02c-.17 0-.37-.16-.47-.28M6.56 5.15v.02q0 .07-.06.11c.02.05.06.2.05.23.04.21.03.28.22.38q-.01-.07-.07-.18-.1-.27-.14-.56"
                                }), (0, n.jsx)("path", {
                                    d: "M6.56 5.15q.08-.17-.08-.26l-.05.01q0 .07-.04.13c.05.08.1.34.16.48.01-.03-.03-.18-.04-.23.03-.04.04-.05.05-.11zm5.54 2.64c-.1-.03-.04.03-.14.02h.02c.05-.04.06-.04.1-.1-.02-.12-.12-.14-.23-.14l-.03.04c.02.07.04.18.09.22.07.03.11 0 .2-.04m-2.6-.96q-.06.03-.06.07c.02.12-.13.45-.09.52q.04.03.1.01l-.01.05.05-.03v-.03q-.09.02-.13-.07c.04-.1.08-.3.14-.36.08-.02.06.02.17.07.05-.07-.13-.19-.17-.23m-1.6 7.32c.1-.17.07-.41.06-.6-.03-.06-.04-.05-.11-.1-.06.22.04.19.1.4.01.06-.05.23-.05.3m-.06-4.3c-.02.08-.05.14 0 .21.05.03.02.03.08.02.09.04 0 .11.12.14l.01-.02c-.08-.31-.07-.15-.21-.35m-6.9 1.39c-.07-.15-.19-.03-.28-.2-.04.08-.06.05-.09.16l.01.02h.23zM11.1 7.27c-.05-.09-.09-.1-.18-.11.03.1.06.24.11.3.05-.06 0-.1.04-.2zM.99 11.3c-.13.03-.27 0-.33.06.01.05.01.04.05.07H.8q.08-.09.2-.13m6.06 5.38c-.03-.06-.07-.04-.12-.03q0 .1.06.19h.03q.04-.06.03-.16m1.58-7.4-.04.01-.03.16H8.5l-.02.02c.1-.02.11.1.15.1l-.02-.02c.04-.05 0-.17.02-.27m6.9-2.15-.14.06v.02l.1.11c.03-.03.03-.13.04-.19"
                                })]
                            })
                        });
                    case "swoosh":
                        return (0, n.jsx)("svg", {
                            className: t,
                            width: "63",
                            height: "21",
                            fill: "none",
                            viewBox: "0 0 63 21",
                            children: (0, n.jsxs)("g", {
                                fill: "#2537b1",
                                children: [(0, n.jsx)("path", {
                                    d: "M55.83 8.9c.13.05.38.13.44.25-.06.05-.07.05-.15.08v.04c.1.11.16.2.3.2l.1-.09.05.03c0 .17-.1.07-.01.17l.16-.08c.07.07.18.22.24.31v.08c-.13.12-.27.23-.09.42l.2.02c.08.18-.18.78-.33.9-.07.07-.04.32-.16.4-.2.06-.88-.22-1.07-.34-.56-.37-1.1-.81-1.66-1.2-.3-.21-.7-.4-1.02-.58-.2-.1-.47-.3-.64-.38a37 37 0 0 0-3.67-1.56c-.16-.05-.3-.24-.43-.28-.28-.1-.64-.14-.9-.25-.37-.14-.74-.34-1.1-.48q-.42-.13-.85-.27c-.26-.1-.53-.24-.78-.32-.26-.09-.53-.14-.8-.23q-.6-.24-1.2-.46c-.16-.06-.33-.01-.45-.04l-.6-.17c-.24-.07-.52-.12-.75-.19-.53-.15-.72-.41-1.32-.31-.36-.22-.53-.3-.97-.27-.05 0-.32 0-.36-.03-.61-.33-1.34-.37-2-.55-.17-.05-.5.04-.67-.03-.1-.04-.06-.2-.18-.25-.12.12-.12.13-.3.14a7 7 0 0 1-1.67-.37l-.02-.02c-.62.03-.68.04-1.24-.22-.54.08-.7.03-1.22-.1-.04-.01-.3.08-.3.07-.39-.27-.62-.15-1.02-.2-.59-.05-1.11-.15-1.7-.12-.28 0-.72-.16-1.02-.15-.37-.03-.58.1-.89.08l-.2-.16c-.33-.06-.69 0-1.02.02-.22.01-.48 0-.69.02-.65.06-1.28-.1-1.92-.08-.72.03-1.4.04-2.12-.03-.39.02-.77.1-1.16.1-.11 0-.58-.09-.6-.07-.19.07-1.28.07-1.35.11l-.09.13c-.08-.02-.32-.14-.37-.13-.33.07-.63.17-.97.2-.13.01-.43-.12-.46-.1a2.4 2.4 0 0 1-1.35.13c-.1 0-.31.12-.42.13-.27.02-.53 0-.79.03l-.49.08c-.22.04-.43.14-.65.09h-.11l-.02.01c-.02.04-.07.11-.11.1-1.04-.02-2.04.3-3.05.5q-.37.06-.74.1c-1.23.22-2.44.55-3.67.77-.81.14-1.7.21-2.52.33-.32.04-.58.02-.9.1L0 4.88c.14-.08.16-.09.15-.25 0-.13.2-.23.31-.33L.36 4l.02-.05.22-.05a3 3 0 0 1 .18-.5c.12-.15.73-.22.9-.32.31-.18.33-.29.71-.2.04 0 .29-.13.33-.2l-.04-.1c.33-.33.7.53 1.12-.36.18 0 0 .22.42.2l.51-.14c.34-.4.42-.14.8-.35q.01-.09.07-.16c.06.03.1.18.13.25.08 0 1.23-.3 1.24-.3.25-.35.75-.01.94-.28.26-.03.4.13.66-.06.13-.1.1-.15.14-.3.12-.05.57.17.8.2.09-.04.07-.02.12-.09l-.03-.03c-.1-.06-.23-.05-.35-.06.3-.07.4-.06.7-.04L10 .98c.24-.12.5 0 .74-.01.18 0 .21-.14.32-.27.32-.03 1.72.13 1.88 0 .02-.08.02-.1.07-.15l.44.13c.17.03.13-.2.37-.15l.1.06c.35 0 .74 0 1.08-.02q.2-.01.27-.14l.05-.01c.17.01.64-.18.77-.1q.01.11.1.18l.05-.03q.01-.11.08-.19c.08.01.05 0 .12.05l-.01.13.03.03q.2-.04.38-.1.37-.1.75-.14c.2 0 .7.07.8.02.52-.13.44 0 .9.01.37-.02.73-.09 1.1-.12.18-.02.57.01.7-.03l.04-.11.05-.02c.06.07.04.18.08.32.1.04.63-.15.89-.14.21.04 1.02 0 1.2.05.58.22.65.07 1.2.06a37 37 0 0 1 1.81.02c.08.08.05.07.14.1l.1-.1c.23.05.39.11.65.14.2.02 1.84.02 1.94.1.33.29.48-.14.78-.02l.05.15c.17.11.31.01.51.02l.04.04c.17.2.72-.02.9.04.88.3 1.85.16 2.71.44.29.1.44.23.75.25l.02.03c.17-.03.71.13.82.24.18.1.39-.1.5-.23.3-.07.9.13 1.17.27a1 1 0 0 0-.15.19c.05.2.46-.03.64.12.23.03.35.14.56.26.24-.07.43-.1.67-.2.07.05.27 0 .34.04.02.01.03.09.13.13l.03-.03-.01-.2.03-.03c.16.07.07.18.23.28.26-.18.37.1.62.13l.2-.01c.11.07.15.2.22.33.2-.03.6-.12.78 0 .08.04.02.1.16.14.1-.08 0-.11.09-.24.16.04.22.25.42.26l.1-.1c.1.05.06.04.12.17.1.06.12.04.26.05q-.04.12-.14.2l-.1-.05-.03.03a1 1 0 0 0 .26.14c.14-.04.18-.2.26-.34.18.07.1.13.23.2.04.01.12-.02.22.02.03.22.5.24.7.28.47.09.82.15 1.23.42.06.04.46-.03.53.06.12.15.01.32.15.45.19-.04.31-.07.5-.15.46.22 1.25.36 1.5.9.03.04 0 .04.06.08 0-.12-.01-.08.04-.16.34-.1 1.53.48 1.92.6.12.06.22.22.33.27.13.07.32.1.45.15 0 0 .04-.05.1-.05.03.04.08.12.11.14.51.23.96.54 1.46.79l.23-.04c.15.29.17.29.46.2l.06.05.01.17c.06.07.03.05.12.08l.02-.13.04-.02c.24.15.07.39.28.64q.08.04.17.03c.13-.02.52.18.72.22l-.13.11v.05c.08.03.27 0 .38.02h.02c.16.02.5.17.66.23z"
                                }), (0, n.jsx)("path", {
                                    d: "M61.87 18.3c.1.1.12.1.13.22-.07.1-.16.1-.28.15-.05.02.01.35 0 .42-.1.29-.27.52-.29.82l-.2.06c-.16-.15-.4-.18-.54-.28l-1-.74c-.43-.32-.86-.52-1.2-.93l-.03-.02c-.38-.12-.59-.34-.91-.57-1.44-1.02-3.08-1.77-4.5-2.8-.15-.11-.48-.05-.66-.15-.5-.3-.79-.69-1.39-.79-.43-.07-.94-.38-1.35-.53a21 21 0 0 1-2.19-.94c-.1-.05-.32-.04-.41-.1-.47-.27-.97-.46-1.47-.69-.21-.1-.63-.03-.87-.12-.26-.06-.56-.36-.8-.44-.77-.23-1.55-.4-2.32-.62-.5-.14-.67-.42-1.28-.32-.06 0-.84-.4-1-.4-.4-.1-.73-.1-1.13-.16-.15-.02-.38-.23-.61-.26-.55-.09-1.55-.04-1.98-.4-.52.03-.65-.05-1.16-.14l-1.52-.25q-.43-.08-.88-.15c-.36-.06-.9 0-1.24-.07l-.11-.14-.23.07q-.74-.1-1.49-.17l-3.92-.3c-.13 0-.25.05-.35.04q-.7-.06-1.4-.11l-.11-.15c-.14-.02-.08.08-.21.06-.35-.07-.57-.12-.93-.11l.02-.1h-.04l-.06-.1.02.01c-.12-.29-.19-.26-.09-.62.13-.44.46-.3.68-.41L22.6 6c-.07.03-.08.04-.16.03-.02-.07 0-.1.02-.17q.29-.1.59-.15.13-.1.25-.24c.05.12.1.27.18.34.12.03.35-.04.38-.16l-.26-.02-.03-.03c.1-.18.18-.13.36-.12.06 0 .1.1.13.15.23.04.06.1.3.15.37.06.68-.21 1.03-.01q.1.05.2 0c.09-.14.07-.08.08-.24.05-.03.06-.03.13-.03.18.2.35-.03.59-.03.14 0 .12.26.22.36q.28-.14.58-.23c.15.05.08.07.21.19.05-.04.06-.04.1-.1h.01c.25-.05.82 0 1.08.02l.18.44a1 1 0 0 1 .52-.09c.12 0 .23.06.3-.05l-.14-.03.04-.08c.15.02.32.1.42.22q.05.04.1.04l.05-.03-.03-.17c.27-.34.88.22 1.05.2l.04-.13c.2-.14.94.16 1.2.19.1.01.25-.09.32-.07.17.03.9.13.97.23q-.05.04-.07.12c.13.05.44-.09.61-.1q.18 0 .36.03l.14.24c.5-.35.25-.06.7.07h.02l.37-.16c.34.58.27.25.78.28.34.02.83.2 1.18.25.13.02.28-.03.42-.03l.02.03-.15.11c.05.12.96.08 1.09.26q.06.09.16.07l.06-.12h.04c.17.23.26.1.54.2q.02.08.06.12c.14-.03.3-.14.44-.05.26.15.06.3.1.45l.1.02c.19-.05.45.14.6.05v-.1l.04.01c.08.26.2.04.35.1.18.07.31.36.53.23-.06-.05-.07-.06-.08-.13l.1-.07c.35-.05.9.34 1.3.36.01 0 .1.15.18.15.19-.01.42-.1.6 0-.03.19-.12.08-.13.26.24.32 1.1.25 1.46.4.08.09.05.09.07.24.17.14.55.04.71-.12l.05.05c.17.12.4.13.5.25v.04h-.16l-.03.04c.03.1.15.2.24.27.09-.02.07-.02.13-.11q.24 0 .48.06l-.1.1.02.02c.2-.01.1-.09.4-.11h.02c.21.24.2.23.5.23.18 0 .02.16.12.31h.07c.07-.13-.01-.15.03-.23l.44.13c-.05.15-.1.25 0 .4.14.03.39-.06.52-.13.42.08 1.06.48 1.48.63.34.13.63.08.76.4 0 0 .54.24.59.25.08.03.06 0 .1.08a.3.3 0 0 0-.04.21l.05.03c.1-.05.13-.07.21-.15l.03-.02c.27.23 1.24.6 1.52.87-.02-.02.05.23.06.27.12.07.38.13.49.02l.1-.1c.26.18.6.4.9.5.26.41.86.55 1.25.81.8.54 1.75 1.05 2.5 1.66.08.11.73.57.88.7l.94.8c.13.12.13.68.37.65q.08-.08.15-.19"
                                }), (0, n.jsx)("path", {
                                    d: "M46.3 9.55c-.16.16-.54.26-.71.12-.02-.15 0-.15-.07-.25-.36-.14-1.22-.07-1.46-.4.01-.17.1-.06.12-.24l.05.05c.35.04.51.27.77.37.32.12 1.04.12 1.3.35M22.45 5.86c-.02.08-.04.1-.02.17.08 0 .1 0 .16-.03l-.01.07c-.23.11-.56-.03-.69.41-.1.36-.03.33.09.62h-.01l.05.08h.04q0 .06-.02.1c-.08-.02-.39-.21-.58-.29.14-.36.05-.48.11-.62.29-.19.57-.45.88-.51M7.9 1.44c-.19.27-.69-.07-.94.28 0 0-1.16.3-1.24.3.14-.07.25-.07.38-.17-.01-.08-.03-.12-.01-.2q.11-.03.22.03c.37-.15 1.24-.58 1.59-.24m17.75 4.1c-.01.15 0 .1-.08.23q-.1.05-.2 0c-.35-.2-.66.07-1.03 0-.23-.04-.07-.1-.3-.15a3.4 3.4 0 0 1 1.6-.09m14.91 2.64c.1-.12.04-.32.16-.4h.04c.1.18.33.24.53.31.12-.03.01-.06.12-.17.29.13.23.32.7.35l-.1.07c.01.07.02.08.08.13-.22.13-.35-.16-.53-.23-.16-.06-.27.16-.35-.1h-.04v.1c-.15.08-.41-.1-.6-.06m12.08 4.08.04-.08c.08.04.11.17.17.19q.75.27 1.44.7c.16.08.42.25.58.3l-.1.1c-.1.1-.37.05-.49-.03l-.06-.26c-.28-.28-1.25-.64-1.52-.87l-.03.02zm6.88 4.08c.47.22 1.74 1.28 2.16 1.68.06.05.14.2.18.28q-.06.1-.14.2c-.25.02-.25-.54-.38-.66l-.94-.8c-.15-.14-.8-.59-.88-.7M38.95 1.99c-.46.31-.77-.08-1.01 0l-.02.1c-.18-.14-.58.07-.65-.12a1 1 0 0 1 .16-.2c.08.02.16-.03.24-.07.12.03.12.06.22.16l.4.01c.31.06.32.16.66.12m14.92 6.02.08-.05c.04-.14-.02-.2-.03-.38l.04-.03c.15.05.39.56.66.56l.04-.05-.04-.17.04-.06.05.04c.09.36.18.2.32.56h-.02c-.11-.01-.3.01-.37-.02l-.01-.05.13-.11c-.2-.04-.59-.24-.72-.22q-.08.01-.17-.02m-6.66 1.95c.23.04.44.06.63.2-.31.02-.2.1-.41.11l-.02-.02.1-.1q-.23-.06-.48-.06c-.06.09-.04.1-.13.11-.09-.06-.2-.17-.24-.27l.03-.04h.15l.02-.04c-.11-.12-.34-.13-.5-.25q.5.01.85.37M29.6 5.79c.22.1.24.1.29.33a.7.7 0 0 0-.42-.22l-.04.08.15.03h-.01c-.07.1-.18.05-.3.05a1 1 0 0 0-.52.09c.16-.13.13-.13.13-.32.11-.1.43-.02.72-.04m19.43 4.74c.24.22.17.36.49.34-.13.07-.38.16-.52.12-.1-.14-.04-.24 0-.4l-.43-.12c-.05.08.03.1-.04.23h-.06c-.11-.15.05-.31-.13-.31-.3 0-.29.01-.5-.22l-.01-.01c.12 0 .2.14.22.14.3.05.7.19.98.23M34.92 1.47c.11-.03.23-.17.43-.2.18-.02.33-.04.5.06-.2.2-.18.16-.1.4a2 2 0 0 0-.8-.23z"
                                }), (0, n.jsx)("path", {
                                    d: "M38.95 2c.13-.01.14.05.2.15-.24.1-.43.13-.67.2-.2-.12-.33-.22-.56-.26q0-.06.02-.1c.24-.08.55.31 1 0M.79 3.4a3 3 0 0 0-.18.5l-.22.05L.36 4l.1.3c-.1-.08-.3-.09-.34-.16a1 1 0 0 1-.06-.44c.12-.02.22.27.47.12.03-.09.01-.1-.03-.2.02-.08.18-.15.28-.22M15.26.43q-.08.13-.27.14c-.34.03-.73.02-1.07.02L13.8.53c.3.03.3-.05.58-.16.3-.12.39.21.63.14q.04-.07.03-.16.1 0 .21.08M4.73 2.28l-.5.13c-.05-.19-.07-.33.17-.39.1.02.11.03.19.1l-.03.1c.08.07.06.05.17.06M17.58.25c.21-.05.76-.34.8.02-.1.05-.6-.03-.8-.02m25.29 2.82q.12.01.25-.02c-.08.13-.12.3-.26.34a1 1 0 0 1-.26-.14l.02-.03.11.04c.09-.04.1-.1.14-.2m9.78 9.19.03.07c-.08.08-.1.1-.21.15l-.05-.03a.3.3 0 0 1 .04-.21c-.04-.08-.02-.05-.1-.09l.18-.07c.08.04.07.07.1.18"
                                })]
                            })
                        });
                    case "sparkle":
                        return (0, n.jsx)("svg", {
                            className: t,
                            width: "22",
                            height: "20",
                            fill: "none",
                            viewBox: "0 0 22 20",
                            children: (0, n.jsx)("path", {
                                fill: "#2537b1",
                                d: "M3.71 8.26c.03-.3.13-.47.24-.76.09-.23.13-.4.34-.55.1-.07.28-.22.4-.25l.06.03.17.18c.08.07.18.1.25.2.23.32.17.97.23 1.36q.06.33.1.64c.02.13.02.44.05.55.07.27.29.67.46.9.1.13.45.3.64.38.43.16 1.72.37 1.69 1.01 0 .14-.25.35-.26.41-.06.2.06.28-.18.47-.1.07-.27-.05-.4.04q-.15.12-.29.25c-.22.17-.4.25-.6.45-.2.18-.1.2-.17.28l-.4.4-.24.33q-.1.1-.14.22c-.02.09 0 .08-.05.14-.1.04-.2-.05-.25 0q.05.1.05.2-.08.28-.18.52c-.03.09-.02.28-.08.35q-.06.02-.1-.03c-.05.02-.14.3-.16.36.03.1.17.11.09.2-.25.25-.1.32-.13.47-.12.7.08 1.97-.9 2.06-.14.02-.3.07-.43 0-.58-.4-.65-1.23-.87-1.85-.04-.1-.06-.28-.1-.41-.14-.47-.38-.83-.4-1.32l-.22-.1c-.15-.31-.44-.75-.6-1.08l-.19.03c-.05-.06-.24-.28-.28-.3-.25-.17-.45-.18-.65-.43-.17-.2-.1-.45-.21-.6v-.17c.25-.03.3-.3.48-.4.3-.2.7-.28.95-.56.06-.07.13-.28.2-.36.2-.27.47-.47.6-.78.02-.05.25-.19.26-.23.02-.34.28-.56.43-.87.08-.16.2-.31.27-.48.15-.3.3-.64.52-.9M18.18 9.7h-.02c-.17-.12-.45-.2-.58-.31-.42-.35-.63-.96-.93-1.4q-.2-.28-.47-.52c-.53-.55-1.14-1.19-1.83-1.54-.34-.15-.86-.05-1.1-.4-.07-.12-.23-.33-.19-.46.07-.47.8-.56 1-.75.2-.2.75-.94.94-1.18.33-.42.58-1.32.69-1.83.04-.23-.04-.63.08-.9.14-.4.34-.22.65-.4.5.23.47.4.68.86.1.2.3.45.43.64.12.2.23.22.41.35.1.07.31.38.39.48.29.03.56.25.82.29l1.09.17c.14.02.34-.06.5-.02.2.05.37.1.43.31.02.09.01.1.07.18v.26c-.23.39-.55.72-.82 1.08-.08.1-.15.3-.23.4-.04.08-.16.15-.19.22a16 16 0 0 0-.86 2.37q0 .09.02.16l-.12.67c-.02.11-.06.45-.1.54-.1.3-.5.58-.76.73"
                            })
                        });
                    case "sweatLarge":
                        return (0, n.jsx)("svg", {
                            className: t,
                            width: "26",
                            height: "27",
                            fill: "none",
                            viewBox: "0 0 26 27",
                            children: (0, n.jsxs)("g", {
                                fill: "#2537b1",
                                children: [(0, n.jsx)("path", {
                                    d: "M20.72.09h.03c.07.23.23.15.17.34-.13.07-.13 0-.22.09 0 .2.38.67.55.79-.04.12-.13.37-.23.45a22.5 22.5 0 0 0-5.81 6.98c-.08.15-.29.29-.22.46.02.24-.19.65-.22.9-.1.42-.2.93-.19 1.37.3.5.43.88 1 1.1.13.05.2.14.36.17.2-.14.02-.1.28-.08q.55.02 1.1 0c.53-.43.53-.1.77-.16.08-.1-.03-.1.07-.17l.4-.03c.54-.16.85-.45 1.43-.3.26-.45.26-.15.5-.14.1-.06.13-.2.22-.23.47-.15.97-.18 1.45-.27.23-.04.5-.24.8-.16.1.03.1.1.22.09.1-.11.04-.14.15-.18l.06.03.02.1c.14.05.37-.06.49-.01.03.12-.06.12.02.2.12-.05.07-.12.15-.1 0 .04-.02.12 0 .14.12.1.34.1.5.16q.1.1.12.23l-.05.13c-.04.07-.05.08-.05.16.08.17.24.08.41.13.04.3-.5.9-.48 1.17l-.05.05c-.08-.04-.17-.1-.27-.09-.12.1-.07.22-.16.3h-.02c-.09.04-.1.04-.2.03l-.05.02c-.04.15.03.13-.05.26-.14.08-.25.06-.34.15l.01.1c-.1.06-.11 0-.18.02s-.13.14-.24.15l-.06-.07c-.1.1-.02.13-.13.22-.45.38-.96.66-1.47.95-.1.06-.24.24-.35.3-.33.14-.6.18-.84.5-.13.17-.48.24-.68.32-.32.1-.08.25-.23.37a4 4 0 0 1-.58.38c-.04.12-.05.2-.15.26-.07-.01-.08-.03-.14-.06-.2.02-.2.18-.3.3q-.48.5-.93 1.04c-.04.05-.15.21-.2.22l-.13-.02-.03.02-.01.04c.09.09.1.07.1.17q-.02.08-.09.13c-.11-.03-.06-.13-.15-.15-.14.17.05.39 0 .6-.08.05-.11 0-.14 0-.1.04-.15.37-.17.46.1.09.23.29.1.35-.3.13-.21.09-.18.45.31.34-.05.24.16.56.15.05.1-.04.2.02l.17.35c.2.2.43.46.61.68h.17c.11.03.36.32.45.35.42.13.83.3 1.26.43.12.04.31.07.4.15v.1c.1.05.3.21.4.14v-.1c.06 0 .05 0 .11.03v-.04c.1-.06.08-.07.17-.06l.01.01c.05.1.06.13.16.16l.15-.04c.1.04.48.15.52.18l.02.09h.04l.1-.13h.04l.07.16.02.05q.13.05.26.06c.11.02.13-.03.22 0 .14.16.42.06.7.4h.13l.03.05q-.06.1-.16.14-.07.16.1.25c.08-.06.03-.12.1-.18.1.03.09.04.14.12.09.14.22-.01.22.22-.14.1-.17-.08-.42.16-.02.09-.05.23-.12.27.02-.12.11-.24.03-.34h-.1c-.1-.04-.15-.06-.26-.07l-.02.03c.05.12.16.25.1.37-.16-.1-.26-.15-.41-.01l-.03.16c-.21-.04-.18-.16-.26-.14a.4.4 0 0 0-.02.17c-.35-.34-.28-.24-.74-.14-.08.02-.18-.15-.32-.13q-.07.05-.1.13c-.1.06-.14.08-.27.05q-.15-.03-.31-.02l.01.05-.49-.01c-.07-.07-.09-.09-.19-.1-.08.02-.09.03-.15.07h-.08c-.1-.09-.05-.1-.16-.12l-.15.08c-.16-.07-.05-.18-.22-.18q-.09.05-.17.13l-.04-.02c0-.04-.01-.12-.04-.13-.24-.09-1.06-.21-1.23-.4l-.03-.07q-.14-.1-.32-.17-.07-.1-.05-.23c-.04-.06-.32-.13-.4-.15v-.14c-.04-.05-.02-.04-.08-.04-.02.06-.02.06-.06.1l-.06-.02c-.12-.14 0-.33-.25-.3-.2.04-.23-.17-.39-.25l-.06-.14c-.03-.07-.03 0-.06-.11l.03-.02h.01c.08-.04.08-.06.13-.12l-.03-.01-.12.04q-.05.07-.13.11c-.06-.13-.2-.1-.3-.18-.13-.12-.03-.23-.05-.4v-.03c-.04-.25-.16-.27-.35-.46l.1-.07-.01-.05c-.07-.07-.19-.1-.22-.18-.08-.21-.02-.28-.22-.43 0-.23-.08-.21-.08-.36q.04-.04.05-.1c-.09-.1-.16-.2-.08-.32.11-.04.09 0 .24.01l.02-.03c-.08-.11-.13-.04-.22-.14-.04-.16.1-.67.18-.8.15-.07 0-.15.05-.27l.05-.12c.12-.24.17-1.04.49-1.28.03-.03.11-.01.15 0 .01-.08-.03-.11-.07-.2l.02-.04h.1c.13-.09.1-.28.15-.39.08-.05.4-.06.51-.07-.23-.43.03-.68.38-.9.17.03.37-.1.4-.28h.02c.06.07 0 0 .01.1q.12 0 .22-.03c.14-.2-.01-.17-.07-.29.2-.15.44-.5.64-.68l.13-.02c.27-.17.47-.48.76-.62.07-.03.1 0 .16-.1-.02-.04-.14-.08-.2-.1l-.02-.04c.05-.06.03-.05.08-.06l.1.08c.19-.16 0-.38-.17-.4l-.03.03.06.14c-.09.07-.12.1-.22.14-.14-.05-.03-.09-.17-.16-.11.05-.1.2-.16.22-.16.07-.66-.03-.84-.05l-.1.12c-.09-.01-.14-.09-.21-.16q-.01.05 0 .11c-.04.07-.04.05-.13.09-.22-.4-.24-.1-.39-.05-.13-.02-.23-.15-.34-.18-.16-.05-1.05-.24-1.13-.32v-.1c-.44-.12-.38-.23-.74-.46-.12-.24-.18-.31-.36-.51-.1-.12-.04-.23-.05-.34l-.04-.02-.07.06-.05-.01a.8.8 0 0 1-.23-.68q-.05-.1-.14-.18c-.17-.29.3-.63-.14-.84v-.04l.15-.07c.1-.18-.06-.42-.05-.63.01-.16.1-.17.13-.3.01-.03-.03-.15-.02-.23.05-.32.25-.78.21-1.09.39-.22.08-.13.28-.45l-.01-.03h-.1v-.05c.06-.07.14-.05.25-.06.13-.14 0-.37.08-.57.09-.03.05.05.16.05.12-.22.2-.25.06-.46.07-.1.27-.1.38-.21 0-.1 0-.09-.07-.2.04-.15.19.02.15-.23-.04-.3.49-.14.41-.48l.03-.04h.09l.03-.04v-.04c-.07-.02-.09-.03-.15-.07 0-.07-.01-.04.02-.11l.15-.03c.07-.05.13-.21.17-.3l-.44.22c-.02.05-.06.15-.1.19-.12.09-.32.15-.46.23-.17.1-.32.25-.5.37-.2.13-.4.22-.6.35-.22.13-.37.32-.57.46-.15.1-.33.15-.49.24-.3.19-.56.44-.86.63-.12.08-.33.1-.43.2q-.04.1-.1.17c-.03.04-.16.09-.22.12-.13.07-.74.48-.79.49-.05 0-.1-.03-.15.01-.13.09-.2.24-.37.35q-.87.5-1.78.97-.41.24-.84.47-.23.08-.46.17-.36.2-.72.38c-.27.1-1.23.42-1.38.54-.07.05-.15-.03-.23-.04l-.12.1c-.1.14-.53-.02-.54-.01-.4.15-.88 0-1.3-.01-.07 0-.13-.15-.18-.13-.06.02-.04.05-.13.04-.07-.15-.36-.29-.5-.41C.1 11.17.04 10.2.26 9.44c.03-.1 0-.27.04-.37.04-.11.13-.23.16-.35a3 3 0 0 1 .66-1.48c.24-.29.35-.3.7-.22.13.04.23 0 .34.1.04.13-.05.37-.12.5-.38.73-.9 2.26-.34 3 .4.19.72.14 1.16.17l.2-.19h.43c.38-.3.66-.3 1.1-.45.07-.03.33-.23.45-.29.73-.32 1.44-.72 2.15-1.09.14-.07.42-.34.6-.45.28-.16.6-.32.87-.5q2.32-1.49 4.63-3.01c.15-.12.38-.2.53-.3.5-.4 1.08-.7 1.58-1.05.6-.43 1.23-.8 1.83-1.23l.91-.63c.35-.23.35-.27.77-.39v-.08c.06-.08.43-.27.54-.33l.12.01c.25.02.08-.16.23-.29q.16-.02.33.02c.2-.25.31-.31.6-.45"
                                }), (0, n.jsx)("path", {
                                    d: "M15.38 23.96c.16.08.18.29.39.26.25-.04.13.15.25.3l.06.02c.04-.05.04-.06.06-.12.06 0 .04 0 .08.05l-.01.14c.09.02.37.09.41.15q-.01.13.05.23.17.07.32.17l.03.07q-.18-.09-.37-.14l-.03-.05c-.21-.27-.22.06-.4-.3-.06 0-.05.04-.12.1l-.03-.04v-.13q-.02-.06-.06-.07c-.2-.04-.21-.31-.42-.34-.1 0-.1.06-.2.07-.03-.09.03-.24 0-.38M14.1 21.9c.2.16.14.23.22.44.03.07.15.11.22.18v.05l-.1.07c.2.2.32.21.36.46-.07.03-.1.06-.18.06-.04-.04-.07-.18-.08-.25-.07-.06-.05-.04-.16-.04-.04-.1.05-.06.02-.19q-.09-.05-.13-.14c-.05-.2-.16-.43-.17-.63M20.5 25.83q.04-.08.1-.13c.15-.02.25.15.33.13.46-.1.4-.2.74.14l-.09.06h-.02c-.15-.08-.25-.13-.42-.11q-.06.03-.09.1c-.06-.09-.09-.18-.2-.17l-.06.06c-.05.05-.12.13-.2.13q-.05-.07-.03-.18zM16.62 16.4c.06.12.21.1.07.29q-.1.04-.22.03c0-.1.05-.03-.01-.1h-.02c-.03.17-.23.31-.4.27.07-.06.2-.12.27-.18.13-.13.01-.2.1-.35.14-.04.03.04.2.04M24.64 12c.1 0 .27 0 .35.05.05.09.04.11.02.22v.02c-.18-.05-.34.03-.42-.14 0-.08 0-.1.05-.16m-1.75 12.6.24.23c-.15.06-.35.15-.5.14q.1-.05.15-.14l-.03-.04-.13-.02c.1-.09.14-.1.27-.17m-3.27-.83.04.03q.25-.02.49.1v.04c-.07-.03-.06-.04-.11-.02V24c-.1.07-.31-.09-.4-.15zM21.95 25.94q0-.09.03-.17c.15-.13.25-.07.41.02-.15.05-.12.1-.24.15-.07.02-.12-.04-.2 0M21.42 24.27a.2.2 0 0 0 .1-.09q.26-.06.4.2c-.1-.04-.1 0-.22-.01l-.26-.06zM24.04 13.7c.1-.07.04-.2.16-.29q.15.01.27.1c-.14.09-.25.18-.43.2M15.15 23.72q.08-.05.13-.11l.12-.05h.03c-.05.07-.05.09-.13.13h-.01l-.03.02c.03.12.03.04.06.11-.15.06-.12.18-.23.22-.05-.11.01-.23.06-.32"
                                }), (0, n.jsx)("path", {
                                    d: "m20.8 25.9.05-.05c.11 0 .14.08.2.17q0 .06-.02.1l-.05.03c-.1-.01-.07 0-.15-.08-.02-.09-.03-.07-.04-.16m-6.48-6.13-.05.12c-.05.12.1.2-.05.27q-.1-.05-.18-.12c0-.04.2-.16.27-.26zm5.63 6.13-.01-.06q.16 0 .31.03l-.05.03c.05.08.16.12.24.2-.19-.05-.36-.06-.49-.2m2.63-.45h.1c.08.1 0 .22-.03.34a1 1 0 0 1-.07-.34m-9.8-13.31q.08.07.14.18l-.06.1h-.05c-.1-.09-.06-.17-.04-.28"
                                })]
                            })
                        })
                }
            }
            var C = a(962753),
                M = a(286730);

            function N({
                type: e,
                reverse: t,
                markVariant: a,
                markVariantDesktop: l,
                taskIcon: o,
                agentIcon: i,
                fillColor: s,
                className: c
            }) {
                return (0, n.jsxs)("div", {
                    className: r()(M.agentContainer, M[e], t && M.reverse, c),
                    children: [a ? (0, n.jsx)("div", {
                        className: r()(M.agentMarkEnterWrapper, M.agentMarkMobile),
                        children: (0, n.jsx)(w, {
                            variant: a,
                            className: M.agentMark
                        })
                    }) : void 0, l ? (0, n.jsx)("div", {
                        className: r()(M.agentMarkEnterWrapper, M.agentMarkDesktop),
                        children: (0, n.jsx)(w, {
                            variant: l,
                            className: M.agentMark
                        })
                    }) : void 0, (0, n.jsx)("div", {
                        className: M.agentTaskEnterWrapper,
                        children: (0, n.jsx)("div", {
                            className: M.agentTask,
                            children: (0, n.jsx)(C.E, {
                                alt: "",
                                src: o,
                                width: 35,
                                height: 35,
                                loading: "eager"
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: M.agentGraphicEnterWrapper,
                        children: (0, n.jsx)(k.z, {
                            className: M.agentGraphic,
                            isFilled: !0,
                            fillShape: "round",
                            fillColor: s,
                            iconSize: 48,
                            iconFrameSize: 48,
                            children: (0, n.jsx)(C.E, {
                                alt: "",
                                src: i,
                                width: 48,
                                height: 48,
                                loading: "eager"
                            })
                        })
                    })]
                })
            }
            var A = a(996712);

            function S({
                className: e
            }) {
                return (0, n.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "0",
                    height: "0",
                    fill: "none",
                    className: r()(A.illustrationFilter, e),
                    children: (0, n.jsxs)("defs", {
                        children: [(0, n.jsxs)("filter", {
                            id: "hph-illustration-filter",
                            width: "150%",
                            height: "150%",
                            x: "-25%",
                            y: "-25%",
                            children: [(0, n.jsx)("feTurbulence", {
                                baseFrequency: "1.6",
                                type: "fractalNoise",
                                numOctaves: "3",
                                result: "turbulence"
                            }), (0, n.jsx)("feDisplacementMap", { in: "SourceGraphic",
                                in2: "turbulence",
                                xChannelSelector: "G",
                                yChannelSelector: "B",
                                scale: "2",
                                result: "displaced"
                            })]
                        }), (0, n.jsxs)("filter", {
                            id: "hph-illustration-filter-desktop",
                            width: "150%",
                            height: "150%",
                            x: "-25%",
                            y: "-25%",
                            children: [(0, n.jsx)("feTurbulence", {
                                baseFrequency: ".8",
                                type: "fractalNoise",
                                numOctaves: "3",
                                result: "turbulence"
                            }), (0, n.jsx)("feDisplacementMap", { in: "SourceGraphic",
                                in2: "turbulence",
                                xChannelSelector: "G",
                                yChannelSelector: "B",
                                scale: "3",
                                result: "displaced"
                            })]
                        })]
                    })
                })
            }

            function W({
                className: e
            }) {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        className: r()(A.leftConveyorMobile, e),
                        width: "840",
                        height: "54",
                        fill: "none",
                        viewBox: "0 0 840 54",
                        children: (0, n.jsx)("path", {
                            className: A.leftConveyorMainPath,
                            stroke: "#2537b1",
                            strokeWidth: "6",
                            fill: "none",
                            d: "M842.13 140.84H710.6a11 11 0 0 1-11-11V17.5c0-8.01-6.49-14.5-14.5-14.5h-36.04a14.15 14.15 0 0 0-14.15 14.15 40.88 40.88 0 0 1-47.67 40.3l-275.9-46.48a50 50 0 0 0-49.9 21.56l-57.4 86.05a50 50 0 0 1-41.6 22.26H-15.53"
                        })
                    }), (0, n.jsxs)("svg", {
                        className: r()(A.leftConveyorDesktop, e),
                        width: "896",
                        height: "668",
                        viewBox: "0 0 896 668",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            className: A.leftConveyorMainPath,
                            d: "m-2.75 440.36 210.2-57.14a20 20 0 0 1 25.25 19.3v148.26a20 20 0 0 0 20 20h240.7a20 20 0 0 0 20-20V479.7c0-50.1 49.93-84.84 96.9-67.42l233.78 86.67a72.5 72.5 0 0 1-15.11 139.78l-174.75 24.57a41.1 41.1 0 0 1-46.83-40.7l.02-359.45a36.9 36.9 0 0 1 36.92-36.9h191.94a54.13 54.13 0 0 0 14.01-106.43l-428-114.68a31.58 31.58 0 0 0-39.76 30.5v170.6a20 20 0 0 1-20 20H-18.15",
                            stroke: "#2537B1",
                            strokeWidth: "8",
                            fill: "none"
                        }), (0, n.jsxs)("g", {
                            opacity: "0.6",
                            style: {
                                mixBlendMode: "darken"
                            },
                            children: [(0, n.jsx)("path", {
                                d: "m603.41 397.56 8-.05v10.92l-8-2.46z",
                                fill: "url(#paint0_linear_5342_3422)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M603.42 425.14l8-.05v-8.13l-8-2.68z",
                                fill: "url(#paint1_linear_5342_3422)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            })]
                        }), (0, n.jsx)("g", {
                            className: A.leftConveyorGearEnterWrapper,
                            children: (0, n.jsx)("path", {
                                className: A.leftConveyorGear,
                                d: "M416.08 16.42l1.22 4.88q1.24.22 2.41.64l3.5-3.62 2.66 1.54-1.38 4.84a15 15 0 0 1 1.77 1.77l4.83-1.39 1.54 2.67-3.62 3.5q.42 1.16.65 2.4l4.88 1.23v3.08l-4.88 1.21q-.23 1.25-.65 2.42l3.62 3.5-1.54 2.66-4.83-1.39a15 15 0 0 1-1.77 1.77l1.38 4.84-2.66 1.54-3.5-3.62q-1.16.41-2.41.64l-1.22 4.88H413l-1.22-4.88q-1.25-.22-2.41-.64l-3.5 3.62-2.66-1.54 1.38-4.84a15 15 0 0 1-1.77-1.77L398 47.75l-1.54-2.67 3.62-3.5q-.42-1.16-.65-2.4l-4.88-1.22v-3.09l4.88-1.21q.23-1.25.65-2.42l-3.62-3.5 1.54-2.66 4.83 1.39q.81-.96 1.77-1.77l-1.38-4.84 2.66-1.54 3.5 3.62q1.16-.41 2.41-.64L413 16.4zM414.7 31a5.73 5.73 0 1 0 0 11.45 5.73 5.73 0 0 0 0-11.45",
                                fill: "#2537B1"
                            })
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("linearGradient", {
                                id: "paint0_linear_5342_3422",
                                x1: "607.374",
                                y1: "397.513",
                                x2: "607.374",
                                y2: "407.513",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint1_linear_5342_3422",
                                x1: "607.374",
                                y1: "425.093",
                                x2: "607.374",
                                y2: "415.093",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            })]
                        })]
                    })]
                })
            }

            function H({
                className: e
            }) {
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "840",
                        height: "133",
                        fill: "none",
                        viewBox: "0 0 840 133",
                        className: r()(A.rightConveyorMobile, e),
                        children: [(0, n.jsx)("path", {
                            className: A.rightConveyorMainPath,
                            stroke: "#2537b1",
                            strokeWidth: "6",
                            fill: "none",
                            d: "M-3 51.16h427.13a15.52 15.52 0 0 1 0 31.05h-30.19a23.78 23.78 0 1 0 6.53 46.64L841 3"
                        }), (0, n.jsx)("g", {
                            className: A.leftConveyorGearEnterWrapper,
                            children: (0, n.jsx)("path", {
                                className: A.leftConveyorGear,
                                fill: "#2537b1",
                                d: "m405.46 104.53 3.36-2.49-1.41-3.4-4.14.62a11 11 0 0 0-2.03-2.03l.62-4.13-3.4-1.4-2.5 3.35a11 11 0 0 0-2.86 0l-2.5-3.36-3.4 1.4.62 4.15a11 11 0 0 0-2.02 2.03l-4.14-.62-1.4 3.4 3.36 2.49a11 11 0 0 0 0 2.87l-3.36 2.49 1.4 3.4 4.14-.62a11 11 0 0 0 2.03 2.03l-.61 4.13 3.4 1.4 2.48-3.35q1.42.2 2.88 0l2.49 3.36 3.4-1.4-.62-4.15a11 11 0 0 0 2.03-2.03l4.13.62 1.4-3.4-3.36-2.49q.2-1.41 0-2.87m-10.91 6.94a5.5 5.5 0 0 1-5.51-5.51 5.5 5.5 0 0 1 5.5-5.5 5.5 5.5 0 0 1 5.52 5.5 5.5 5.5 0 0 1-5.51 5.51"
                            })
                        }), (0, n.jsx)("g", {
                            className: A.leftConveyorGearEnterWrapper,
                            children: (0, n.jsx)("circle", {
                                className: A.leftConveyorGear,
                                cx: "423.638",
                                cy: "66.647",
                                r: "6",
                                fill: "none",
                                stroke: "#2537b1",
                                strokeWidth: "4"
                            })
                        })]
                    }), (0, n.jsxs)("svg", {
                        width: "879",
                        height: "692",
                        viewBox: "0 0 879 692",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: r()(A.rightConveyorDesktop, e),
                        children: [(0, n.jsx)("path", {
                            className: A.rightConveyorMainPath,
                            d: "M959.69 156H74.82a70.4 70.4 0 0 0-17.04 138.72l357.76 89.21a86.04 86.04 0 0 1-8.19 168.59l-225.23 33.42a50.95 50.95 0 1 0 15.24 100.74l252.22-38.87C581.18 627.53 678.3 514.3 678.3 381.13V73.82a69.37 69.37 0 0 0-138.74 0v55.58c0 69.01 55.94 124.96 124.96 124.96h266.8",
                            stroke: "#2537B1",
                            strokeWidth: "8",
                            fill: "none"
                        }), (0, n.jsx)("g", {
                            className: A.rightConveyorGearEnterWrapper,
                            children: (0, n.jsx)("path", {
                                className: A.rightConveyorGear,
                                d: "m211.86 601.43-1.64 11q3.01 2.3 5.4 5.4l11.03-1.64 3.73 9.04-8.94 6.62q.51 3.86 0 7.65l8.94 6.62-3.73 9.04-11-1.63c-1.54 2-3.35 3.83-5.4 5.4l1.64 11.02-9.04 3.74-6.63-8.95q-3.85.52-7.65 0l-6.62 8.95-9.04-3.74 1.64-11c-2-1.54-3.84-3.35-5.4-5.4l-11.03 1.64-3.73-9.04 8.94-6.63a29 29 0 0 1 0-7.64l-8.94-6.63 3.73-9.04 11 1.64c1.54-2 3.35-3.84 5.4-5.4l-1.64-11.02 9.05-3.74 6.62 8.94q3.85-.51 7.65 0l6.62-8.94zm-19.6 23a11.14 11.14 0 1 0 0 22.28 11.14 11.14 0 0 0 0-22.29",
                                fill: "#2537B1"
                            })
                        }), (0, n.jsxs)("g", {
                            opacity: "0.6",
                            style: {
                                mixBlendMode: "darken"
                            },
                            children: [(0, n.jsx)("path", {
                                d: "m674.32 141.15 8-.05v10.92h-8z",
                                fill: "url(#paint0_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M526.6 160.01l-.04-8h10.92l1.72 8z",
                                fill: "url(#paint1_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M674.32 239.54l8-.04v10.92h-8z",
                                fill: "url(#paint2_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M674.32 170.88l8 .04V160h-8z",
                                fill: "url(#paint3_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M556.6 160.01l.04-8h-10.92l1.74 8z",
                                fill: "url(#paint4_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            }), (0, n.jsx)("path", {
                                d: "M674.32 269.27l8 .04V258.4h-8z",
                                fill: "url(#paint5_linear_5342_3421)",
                                fillOpacity: "0.8",
                                className: A.pathShadow
                            })]
                        }), (0, n.jsxs)("defs", {
                            children: [(0, n.jsxs)("linearGradient", {
                                id: "paint0_linear_5342_3421",
                                x1: "678.287",
                                y1: "141.104",
                                x2: "678.287",
                                y2: "151.104",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint1_linear_5342_3421",
                                x1: "526.558",
                                y1: "156.048",
                                x2: "536.558",
                                y2: "156.048",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint2_linear_5342_3421",
                                x1: "678.287",
                                y1: "239.5",
                                x2: "678.287",
                                y2: "249.5",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint3_linear_5342_3421",
                                x1: "678.287",
                                y1: "170.918",
                                x2: "678.287",
                                y2: "160.918",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint4_linear_5342_3421",
                                x1: "556.636",
                                y1: "156.048",
                                x2: "546.636",
                                y2: "156.048",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            }), (0, n.jsxs)("linearGradient", {
                                id: "paint5_linear_5342_3421",
                                x1: "678.287",
                                y1: "269.313",
                                x2: "678.287",
                                y2: "259.313",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    "stop-opacity": "0"
                                }), (0, n.jsx)("stop", {
                                    offset: "1"
                                })]
                            })]
                        })]
                    })]
                })
            }
            var B = a(667193);
            let T = [{
                    type: "book",
                    markVariant: "swoosh",
                    taskIcon: "/front-static/agents/tasks/check.svg",
                    agentIcon: "/front-static/agents/book.png",
                    fillColor: "var(--color-yellow-400)"
                }, {
                    type: "globe",
                    markVariant: "sparkle",
                    taskIcon: "/front-static/agents/tasks/gmail.svg",
                    agentIcon: "/front-static/agents/globe.png",
                    fillColor: "var(--color-red-400)"
                }, {
                    type: "files",
                    markVariant: "sweatSmall",
                    taskIcon: "/front-static/agents/tasks/hubspot.svg",
                    agentIcon: "/front-static/agents/files-v2.png",
                    fillColor: "var(--color-blue-400)"
                }, {
                    type: "mailbox",
                    markVariant: "lines",
                    taskIcon: "/front-static/agents/tasks/amplitude.svg",
                    agentIcon: "/front-static/agents/mailbox.png",
                    fillColor: "var(--color-teal-400)"
                }],
                I = [{
                    type: "checkmark",
                    reverse: !0,
                    markVariant: "sparkle",
                    taskIcon: "/front-static/agents/tasks/github.svg",
                    agentIcon: "/front-static/agents/checkmark.png",
                    fillColor: "var(--color-purple-400)"
                }, {
                    type: "lightBulb",
                    reverse: !0,
                    markVariant: "sweatSmall",
                    markVariantDesktop: "sweatLarge",
                    taskIcon: "/front-static/agents/tasks/slack.svg",
                    agentIcon: "/front-static/agents/light_bulb.png",
                    fillColor: "var(--color-orange-400)"
                }, {
                    type: "apple",
                    reverse: !0,
                    taskIcon: "/front-static/agents/tasks/chart.svg",
                    agentIcon: "/front-static/agents/apple.png",
                    fillColor: "var(--color-pink-400)"
                }, {
                    type: "sign",
                    taskIcon: "/front-static/agents/tasks/branch.svg",
                    agentIcon: "/front-static/agents/sign.png",
                    fillColor: "var(--color-brown-400)",
                    markVariant: "sweatSmall"
                }];

            function P({
                heading: e,
                subheading: t,
                ctas: a,
                poster: l,
                video: o,
                mobilePoster: i,
                mobileVideo: s,
                platform: c,
                forceStaticFallback: d = !1,
                experiments: u
            }) {
                return (0, n.jsxs)("div", {
                    className: B.hero,
                    children: [(0, n.jsx)(S, {}), (0, n.jsxs)("div", {
                        className: r()(B.conveyor, B.conveyorLeftContainer),
                        children: [T.map(e => (0, n.jsx)(N, { ...e,
                            className: r()(B.agent, B[`${e.type}Agent`])
                        }, e.type)), (0, n.jsx)(W, {})]
                    }), (0, n.jsxs)("div", {
                        className: r()(B.conveyor, B.conveyorRightContainer),
                        children: [I.map(e => (0, n.jsx)(N, { ...e,
                            className: r()(B.agent, B[`${e.type}Agent`])
                        }, e.type)), (0, n.jsx)(H, {})]
                    }), (0, n.jsxs)(b.K, {
                        flexDirection: "column",
                        gap: {
                            default: 24,
                            md: 28
                        },
                        as: "header",
                        className: B.headerContainer,
                        children: [(0, n.jsx)(g.y, {
                            variant: "globalTitleEmphasis",
                            as: "h1",
                            className: B.title,
                            children: e
                        }), (0, n.jsx)(g.y, {
                            variant: "globalBody",
                            as: "p",
                            className: B.body,
                            children: t
                        }), (0, n.jsx)(j.U, {
                            ctas: a,
                            className: B.ctas,
                            size: "medium"
                        })]
                    }), (0, n.jsx)("div", {
                        className: B.mediaContainer,
                        children: (0, n.jsx)(q.n, {
                            mediaContainerClassName: B.heroMediaContainer,
                            poster: l,
                            video: o,
                            mobilePoster: i,
                            mobileVideo: s,
                            forceStaticFallback: d,
                            platform: c
                        })
                    })]
                })
            }
            var E = a(716952),
                R = a(572697),
                G = a(779851),
                L = a(394044),
                V = a(916501),
                z = a(202823);

            function O({
                videoId: e,
                thumbnailSrc: t,
                thumbnailAlt: a = "",
                thumbnailVideoSrc: l,
                children: o,
                onVideoOpen: i,
                onVideoClose: s,
                onClick: c,
                fullscreen: d = !0,
                className: h
            }) {
                let [_, p] = (0, u.useState)(!1), [f, m] = (0, u.useState)(!1), v = (0, u.useRef)(null), x = void 0 !== c;
                (0, u.useEffect)(() => {
                    _ ? requestAnimationFrame(() => {
                        m(!0)
                    }) : m(!1)
                }, [_]);
                let y = (0, u.useCallback)(() => {
                        if (x) {
                            c();
                            return
                        }
                        p(!0), null == i || i()
                    }, [x, c, i]),
                    b = (0, u.useCallback)(async () => {
                        var e;
                        await (null === (e = v.current) || void 0 === e ? void 0 : e.pause()), p(!1), null == s || s()
                    }, [s]);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("button", {
                        type: "button",
                        className: r()(z.root, h),
                        onClick: y,
                        children: [void 0 !== l ? (0, n.jsx)("video", {
                            className: z.thumbnail,
                            src: l,
                            autoPlay: !0,
                            loop: !0,
                            muted: !0,
                            playsInline: !0
                        }) : void 0 !== t ? (0, n.jsx)(C.E, {
                            src: t,
                            alt: a,
                            className: z.thumbnail,
                            width: 640,
                            height: 360,
                            placeholder: "empty"
                        }) : void 0, (0, n.jsx)("div", {
                            className: z.overlay
                        }), (0, n.jsxs)("div", {
                            className: z.content,
                            children: [(0, n.jsx)("span", {
                                className: z.playIcon,
                                children: (0, n.jsx)(R.G, {})
                            }), (0, n.jsx)(g.y, {
                                variant: "interactionButtonLarge",
                                as: "span",
                                className: z.label,
                                children: o
                            })]
                        })]
                    }), x ? void 0 : d ? (0, n.jsx)(G.jW, {
                        open: _,
                        onClose: b,
                        children: (0, n.jsx)("div", {
                            className: z.fullscreenVideoContainer,
                            children: (0, n.jsx)(V.VideoPlayer, {
                                ref: v,
                                videoId: e,
                                host: "vimeo",
                                controls: "enabled",
                                autoplay: !0,
                                muted: !1,
                                className: z.fullscreenVideoPlayer
                            })
                        })
                    }) : (0, n.jsxs)(G.Vq, {
                        open: _,
                        onClose: b,
                        children: [(0, n.jsx)(G.fK, {
                            children: (0, n.jsx)(L.e, {})
                        }), (0, n.jsx)(G.a7, {
                            children: (0, n.jsx)("div", {
                                className: z.videoContainer,
                                children: f ? (0, n.jsx)(V.VideoPlayer, {
                                    ref: v,
                                    videoId: e,
                                    host: "vimeo",
                                    controls: "enabled",
                                    autoplay: !0,
                                    muted: !1
                                }) : void 0
                            })
                        })]
                    })]
                })
            }
            var D = a(242868),
                F = a(530650);
            let U = "1177771818";

            function X({
                overlayIntensity: e = 500,
                backgroundImageSrc: t,
                platform: a
            }) {
                let l = "ios" === a,
                    [r, o] = (0, u.useState)(null),
                    i = (0, u.useCallback)(() => {
                        null == r || r.play().catch(() => {})
                    }, [r]);
                return (0, n.jsxs)(b.K, {
                    flexDirection: "column",
                    gap: 24,
                    as: "header",
                    className: F.hero,
                    children: [void 0 !== t ? (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {
                            className: F.backgroundImage,
                            style: {
                                backgroundImage: `url(${(0,C.N)({src:t,alt:"",width:1920,height:1080}).props.src})`
                            }
                        }), (0, n.jsx)("div", {
                            className: F.backgroundOverlay,
                            style: {
                                backgroundColor: `var(--color-alpha-black-${e})`
                            }
                        })]
                    }) : void 0, (0, n.jsx)(g.y, {
                        variant: "globalTitleEmphasis",
                        as: "h1",
                        className: F.title,
                        children: (0, n.jsx)(E._H, {
                            id: "homepageHero.thinkTogether.heading",
                            defaultMessage: "Think together.",
                            description: "Main heading for the Think Together homepage hero"
                        })
                    }), (0, n.jsx)(g.y, {
                        variant: "globalBody",
                        as: "p",
                        className: F.subtitle,
                        children: (0, n.jsx)(E._H, {
                            id: "homepageHero.thinkTogether.subtitle",
                            defaultMessage: "The most meaningful things aren’t built alone.",
                            description: "Subtitle text below the Think Together homepage hero heading"
                        })
                    }), l ? (0, n.jsx)("div", {
                        className: F.iosVideoContainer,
                        children: (0, n.jsx)(D.f, {
                            videoId: U,
                            autoplay: !1,
                            controls: !0,
                            muted: !1,
                            playsinline: !1,
                            ref: o
                        })
                    }) : void 0, (0, n.jsx)(O, {
                        className: F.mediaButtonPrimary,
                        videoId: U,
                        thumbnailSrc: "/front-static/pages/home/hero/Notion_ThinkTogether-Thumbnail.jpg",
                        fullscreen: !1,
                        onClick: l ? i : void 0,
                        children: (0, n.jsx)(E._H, {
                            id: "homepageHero.thinkTogether.watchVideo",
                            defaultMessage: "Play video",
                            description: "Label for the button that opens the Think Together video"
                        })
                    })]
                })
            }
            var Y = a(861210),
                K = a(737317),
                $ = a(429056),
                Z = a(401607),
                Q = a(649801);
            let J = i()(() => Promise.all([a.e(78545), a.e(60385)]).then(a.bind(a, 60385)).then(e => ({
                    default: e.ForbesQuote
                })), {
                    loadableGenerated: {
                        webpack: () => [60385]
                    },
                    ssr: !1,
                    loading: () => (0, n.jsx)("div", {
                        style: {
                            minHeight: 64
                        }
                    })
                }),
                ee = i()(() => Promise.all([a.e(79644), a.e(77881), a.e(67067), a.e(87396), a.e(68412)]).then(a.bind(a, 968412)).then(e => ({
                    default: e.LessToolsMWN
                })), {
                    loadableGenerated: {
                        webpack: () => [968412]
                    },
                    ssr: !0
                }),
                et = i()(() => Promise.all([a.e(92182), a.e(67067), a.e(5245), a.e(40820), a.e(69104), a.e(33564)]).then(a.bind(a, 969104)).then(e => ({
                    default: e.HomepageBentoCarousel
                })), {
                    loadableGenerated: {
                        webpack: () => [969104]
                    },
                    ssr: !0
                }),
                ea = i()(() => Promise.all([a.e(78545), a.e(85850)]).then(a.bind(a, 885850)).then(e => ({
                    default: e.AgentPromptsSection
                })), {
                    loadableGenerated: {
                        webpack: () => [885850]
                    },
                    ssr: !0
                }),
                en = i()(() => Promise.all([a.e(67067), a.e(11127), a.e(4651)]).then(a.bind(a, 604651)).then(e => ({
                    default: e.AgentBentos
                })), {
                    loadableGenerated: {
                        webpack: () => [604651]
                    },
                    ssr: !0
                }),
                el = i()(() => Promise.all([a.e(78545), a.e(48944), a.e(70334), a.e(50089), a.e(67067), a.e(40820), a.e(93975)]).then(a.bind(a, 393975)).then(e => ({
                    default: e.SocialProof
                })), {
                    loadableGenerated: {
                        webpack: () => [393975]
                    },
                    ssr: !0
                }),
                er = i()(() => Promise.all([a.e(48944), a.e(70334), a.e(67067), a.e(24320), a.e(73454), a.e(60894), a.e(42908)]).then(a.bind(a, 360894)).then(e => ({
                    default: e.DownloadApps
                })), {
                    loadableGenerated: {
                        webpack: () => [360894]
                    },
                    ssr: !1
                }),
                eo = i()(() => Promise.all([a.e(48944), a.e(70334), a.e(67067), a.e(24320), a.e(73454), a.e(60894), a.e(42908)]).then(a.bind(a, 360894)).then(e => ({
                    default: e.DownloadAppsRichWebsiteScreens
                })), {
                    loadableGenerated: {
                        webpack: () => [360894]
                    },
                    ssr: !1
                });

            function ei({
                metadata: e,
                experimentProps: t,
                pageContent: {
                    hero: a,
                    logos: l,
                    quote: o,
                    carousel: i,
                    cards: c,
                    agentPrompts: d,
                    agentsBentoHeadline: u,
                    aiBentoHeadline: h,
                    lessTools: g,
                    socialProof: _,
                    downloadApps: p
                },
                platform: f,
                locale: m,
                noIndex: v = !1,
                downloadAppsExperimentVariant: x = "control"
            }) {
                let b = (null == t ? void 0 : t.homepage_hero_think_together) === "on",
                    j = (0, $.Z)(),
                    q = (0, $.Z)(),
                    k = (0, $.Z)();
                return (0, Z.L)(() => {
                    let e = document.documentElement;
                    return e.classList.add(Q.noXScroll), () => {
                        e.classList.remove(Q.noXScroll)
                    }
                }, []), (0, Z.L)(() => {
                    if (!("undefined" == typeof CSS || "function" != typeof CSS.supports || !CSS.supports("animation-timeline", "--hero-visibility"))) return;
                    document.body.classList.add("agentsHeroVisible");
                    let e = document.querySelector(".isCampaignAgentsHomepageHero"),
                        t = null !== e ? new IntersectionObserver(e => {
                            for (let t of e) document.body.classList.toggle("agentsHeroVisible", t.isIntersecting)
                        }, {
                            rootMargin: "-64px 0px 0px 0px"
                        }) : void 0;
                    return t && e && t.observe(e), () => {
                        document.body.classList.remove("agentsHeroVisible"), null == t || t.disconnect()
                    }
                }, []), (0, n.jsx)(s.f6, {
                    theme: "inherit",
                    palettes: "campaignsAgentsLaunch",
                    children: (0, n.jsxs)(Y.e, {
                        metadata: e,
                        title: e.title,
                        theme: "blue",
                        variant: "fullWidth",
                        children: [v ? (0, n.jsx)(K.K, {}) : void 0, (0, n.jsx)(s.f6, {
                            theme: "twentytwentysix",
                            palettes: b ? "dark" : "campaignsAgentsLaunch",
                            children: (0, n.jsx)("div", {
                                className: r()(b ? "isThinkTogetherHero" : "isCampaignAgentsHomepageHero", Q.main, Q.heroSection, Q.heroSectionAgents),
                                children: (0, n.jsxs)("div", {
                                    className: r()(Q.section, Q.heroAndLogowall, Q.sectionAgents),
                                    children: [b ? (0, n.jsx)(X, {
                                        backgroundImageSrc: "/front-static/pages/home/hero/Notion_ThinkTogether-Blur.jpg",
                                        overlayIntensity: 700,
                                        platform: f
                                    }) : (0, n.jsx)(P, {
                                        heading: a.heading,
                                        subheading: a.subheading,
                                        ctas: a.ctas,
                                        poster: { ...a.poster,
                                            id: "hero-poster",
                                            width: 2560,
                                            height: 1600
                                        },
                                        video: { ...a.video,
                                            id: "hero-video",
                                            width: 2560,
                                            height: 1600
                                        },
                                        mobilePoster: { ...a.mobilePoster,
                                            id: "hero-mobile-poster",
                                            width: 1600,
                                            height: 1600
                                        },
                                        mobileVideo: { ...a.mobileVideo,
                                            id: "hero-mobile-video",
                                            width: 1600,
                                            height: 1600
                                        },
                                        forceStaticFallback: !["es-ES", "en-US", "en-GB", "de-DE", "fr-FR", "ja-JP", "ko-KR", "pt-BR"].includes(m),
                                        platform: f,
                                        experiments: {}
                                    }), (0, n.jsx)(y, {
                                        eyebrow: l.eyebrow,
                                        logos: l.logos
                                    })]
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: r()(Q.main, Q.lightGrayBg),
                            children: (0, n.jsxs)("div", {
                                className: Q.section,
                                children: [(0, n.jsxs)("div", {
                                    className: r()(Q.bentoContainer, Q.bentoContainerAgents),
                                    children: [(0, n.jsxs)("div", {
                                        className: Q.customAgentsSection,
                                        children: [(0, n.jsx)(et, {
                                            className: Q.agentsCarousel,
                                            ...i,
                                            bgImage: void 0,
                                            forceStaticFallback: !["es-ES", "en-US", "en-GB", "de-DE", "fr-FR", "ja-JP", "ko-KR", "pt-BR"].includes(m),
                                            isActive: !0,
                                            hideNosey: !0,
                                            loopVideo: !0,
                                            isNew: !0
                                        }), d ? (0, n.jsx)(ea, {
                                            data: d
                                        }) : void 0]
                                    }), u && h ? (0, n.jsx)(en, {
                                        cards: c,
                                        agentsBentoHeadline: u,
                                        aiBentoHeadline: h
                                    }) : null]
                                }), (0, n.jsx)(J, {
                                    id: j,
                                    ...o,
                                    className: ""
                                })]
                            })
                        }), (0, n.jsx)("div", {
                            className: Q.main,
                            children: (0, n.jsx)("div", {
                                className: r()(Q.section, Q.sectionNoSpacing),
                                children: (0, n.jsx)(ee, {
                                    id: k,
                                    ...g
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: r()(Q.main, Q.lightGrayBg),
                            children: (0, n.jsx)("div", {
                                className: Q.section,
                                children: (0, n.jsx)(el, {
                                    platform: f,
                                    ..._
                                })
                            })
                        }), (0, n.jsx)("div", {
                            className: r()(Q.main, {
                                [Q.lightGrayBg]: p.invertColor
                            }),
                            children: (0, n.jsx)("div", {
                                className: Q.section,
                                children: "v1" === x ? (0, n.jsx)(eo, {
                                    heading: p.heading,
                                    id: q,
                                    platform: f,
                                    ...p.invertColor && {
                                        color: "white"
                                    },
                                    useAgentCopy: !0
                                }) : (0, n.jsx)(er, {
                                    heading: p.heading,
                                    id: q,
                                    platform: f,
                                    ...p.invertColor && {
                                        color: "white"
                                    },
                                    useAgentCopy: !0
                                })
                            })
                        })]
                    })
                })
            }
        },
        353095: function(e, t, a) {
            "use strict";
            a.d(t, {
                z: function() {
                    return r
                }
            });
            var n = a(72779),
                l = a.n(n);

            function r(e, t) {
                let a = { ...e
                };
                return Object.entries(t).forEach(([t, n]) => {
                    if ("string" == typeof n) {
                        let r = e[t];
                        a[t] = l()(r, n)
                    }
                }), a
            }
        },
        261198: function(e, t, a) {
            "use strict";

            function n(e) {
                return (null == e ? void 0 : e.ownerDocument) ? ? ("undefined" != typeof document ? document : null)
            }
            a.d(t, {
                P: function() {
                    return n
                }
            })
        },
        22724: function(e, t, a) {
            "use strict";
            a.d(t, {
                O: function() {
                    return l
                }
            });
            var n = a(202784);

            function l(e, t) {
                let a = void 0 !== e;
                if ((0, n.useRef)(a).current !== a) throw Error("useControlledValue component switching between controlled and uncontrolled state");
                let [l, r] = (0, n.useState)(t);
                return [a ? e : l, (0, n.useCallback)(e => {
                    a || r(e)
                }, [a])]
            }
        },
        366308: function(e, t, a) {
            "use strict";
            a.d(t, {
                q: function() {
                    return l
                }
            });
            var n = a(202784);

            function l(...e) {
                let t = (0, n.useRef)(e);
                return t.current = e, (0, n.useCallback)(e => {
                    t.current.forEach(t => {
                        ! function(e, t) {
                            if (null != e) {
                                if ("function" == typeof e) {
                                    e(t);
                                    return
                                }
                                try {
                                    e.current = t
                                } catch (a) {
                                    throw Error(`Cannot assign value '${t}' to ref '${e}'`)
                                }
                            }
                        }(t, e)
                    })
                }, [])
            }
        },
        331714: function(e, t, a) {
            "use strict";
            a.d(t, {
                T: function() {
                    return l
                }
            });
            var n = a(421543);

            function l() {
                return (0, n.a)("(prefers-reduced-motion)")
            }
        },
        702513: function(e, t, a) {
            "use strict";
            a.d(t, {
                P: function() {
                    return o
                }
            });
            var n = a(631133),
                l = a(961803),
                r = a(401607);

            function o(e, t, a) {
                let o = (0, l.r)(a ? ? {});
                (0, r.L)(() => {
                    if (e) return (0, n.dR)(t, o), () => {
                        (0, n.Un)(t)
                    }
                }, [e, t, o])
            }
        },
        498529: function(e, t, a) {
            "use strict";
            a.d(t, {
                d: function() {
                    return l.FrontPlayButton
                },
                s: function() {
                    return n.FrontPauseButton
                }
            });
            var n = a(989039),
                l = a(574533)
        },
        572697: function(e, t, a) {
            "use strict";
            a.d(t, {
                G: function() {
                    return n.PlaybackPlayIcon
                }
            });
            var n = a(575557)
        },
        721117: function(e) {
            e.exports = {
                logoWallMarquee: "logoWallMarquee_logoWallMarquee__DBKiq",
                detectOverflow: "logoWallMarquee_detectOverflow__RQpt1",
                logoWallMarqueeItem: "logoWallMarquee_logoWallMarqueeItem__Y3_iz",
                logoWallMarqueeItemDot: "logoWallMarquee_logoWallMarqueeItemDot__tx_vZ",
                marqueePolygon: "logoWallMarquee_marqueePolygon__N7Zak",
                isOverflowing: "logoWallMarquee_isOverflowing__uqT0t",
                variantWall: "logoWallMarquee_variantWall__2YykX",
                variantMarquee: "logoWallMarquee_variantMarquee__MVyGq",
                variantWallSm: "logoWallMarquee_variantWallSm__47lF7",
                variantMarqueeSm: "logoWallMarquee_variantMarqueeSm__DfaGA",
                variantWallMd: "logoWallMarquee_variantWallMd__RCWtC",
                variantMarqueeMd: "logoWallMarquee_variantMarqueeMd__Iputp",
                variantWallLg: "logoWallMarquee_variantWallLg__1TYHB",
                variantMarqueeLg: "logoWallMarquee_variantMarqueeLg__PBmAe",
                variantWallXl: "logoWallMarquee_variantWallXl__ArxOR",
                variantMarqueeXl: "logoWallMarquee_variantMarqueeXl__kKoDY",
                variantWallXxl: "logoWallMarquee_variantWallXxl__1capG",
                variantMarqueeXxl: "logoWallMarquee_variantMarqueeXxl__Ie_8b",
                hasMaxRows: "logoWallMarquee_hasMaxRows__tdKGa"
            }
        },
        431227: function(e) {
            e.exports = {
                stickyWrapper: "stickyContainer_stickyWrapper__tm8gM",
                stickyContent: "stickyContainer_stickyContent__aC564",
                sentinel: "stickyContainer_sentinel__Y8QIw",
                sentinelTop: "stickyContainer_sentinelTop__J3jTl",
                sentinelBottom: "stickyContainer_sentinelBottom__k4IuW"
            }
        },
        47847: function(e) {
            e.exports = {
                root: "dialog_root__KlMm2",
                content: "dialog_content__vbHod",
                header: "dialog_header__CA_5o",
                headerContent: "dialog_headerContent__YzwnF",
                closeButton: "dialog_closeButton__nMSev",
                toolbar: "dialog_toolbar__pjqli",
                body: "dialog_body__wkRPq",
                empty: "dialog_empty__DgpVz",
                footer: "dialog_footer__guNH5",
                scrollPositionMiddle: "dialog_scrollPositionMiddle__oOsWq",
                scrollPositionBottom: "dialog_scrollPositionBottom__AdS0Q",
                scrollPositionTop: "dialog_scrollPositionTop__HeAGY",
                fullscreen: "dialog_fullscreen__3Pey7",
                fullscreenClose: "dialog_fullscreenClose__0rY9H",
                fullscreenContent: "dialog_fullscreenContent__UM404"
            }
        },
        187187: function(e) {
            e.exports = {
                nav: "HeroCTA_nav__0tsxR",
                cta: "HeroCTA_cta__hOE_c"
            }
        },
        888391: function(e) {
            e.exports = {
                media: "HeroMedia_media__e7ODA",
                productImageContainer: "HeroMedia_productImageContainer__O14RH",
                productImage: "HeroMedia_productImage__Ojg_0",
                productImageGradient: "HeroMedia_productImageGradient__0w6qu",
                playPauseController: "HeroMedia_playPauseController__3hTu3",
                icon: "HeroMedia_icon__wYd2f",
                paused: "HeroMedia_paused__DwmBm",
                visuallyHidden: "HeroMedia_visuallyHidden__H3Ck3"
            }
        },
        150674: function(e) {
            e.exports = {
                sentinel: "homepageLogoWall_sentinel__7ybF8",
                stickyWrapper: "homepageLogoWall_stickyWrapper__eeR80",
                eyebrow: "homepageLogoWall_eyebrow__L8vGu",
                logoWallMarqueeWrapper: "homepageLogoWall_logoWallMarqueeWrapper__6fbLC",
                stuck: "homepageLogoWall_stuck__26jVo",
                revealStickyBar: "homepageLogoWall_revealStickyBar__Glf7s",
                logoWallMarquee: "homepageLogoWall_logoWallMarquee__cFlSS"
            }
        },
        286730: function(e) {
            e.exports = {
                agentContainer: "Agent_agentContainer__DeUWr",
                agentGraphicEnterWrapper: "Agent_agentGraphicEnterWrapper__Se_bZ",
                agentEnter: "Agent_agentEnter__D6zdB",
                agentGraphic: "Agent_agentGraphic__2K7n6",
                agentMarkEnterWrapper: "Agent_agentMarkEnterWrapper__O6R_r",
                agentMarkEnter: "Agent_agentMarkEnter__54wKq",
                agentMarkDesktop: "Agent_agentMarkDesktop__d2Dff",
                agentMarkMobile: "Agent_agentMarkMobile__tBUzc",
                agentTaskEnterWrapper: "Agent_agentTaskEnterWrapper__qRPdH",
                agentTaskEnter: "Agent_agentTaskEnter__ZpDY1",
                agentTask: "Agent_agentTask__J7mO1",
                book: "Agent_book__nCMHt",
                globe: "Agent_globe__MSDVL",
                files: "Agent_files__tG8Cd",
                mailbox: "Agent_mailbox__RxnWQ",
                checkmark: "Agent_checkmark__Z2_cs",
                lightBulb: "Agent_lightBulb__sqPg8",
                apple: "Agent_apple__2lq46",
                sign: "Agent_sign__PAh_a",
                agentMark: "Agent_agentMark__5Te9W",
                reverse: "Agent_reverse__mIuqq",
                agentScroll: "Agent_agentScroll__R_Ymn",
                agentMarkScroll: "Agent_agentMarkScroll__8jDZS",
                agentTaskScroll: "Agent_agentTaskScroll__bimxl",
                notifCountScroll: "Agent_notifCountScroll__2TpV_",
                notifCountScrollFast: "Agent_notifCountScrollFast__Ty0lv"
            }
        },
        996712: function(e) {
            e.exports = {
                illustrationFilter: "Illustrations_illustrationFilter__sUg2d",
                leftConveyorMainPath: "Illustrations_leftConveyorMainPath__s4oGj",
                leftConveyorGear: "Illustrations_leftConveyorGear__GdD5F",
                rightConveyorMainPath: "Illustrations_rightConveyorMainPath__gA2sT",
                rightConveyorGear: "Illustrations_rightConveyorGear__BtC1l",
                pathShadow: "Illustrations_pathShadow__MeaQz",
                leftConveyorMobile: "Illustrations_leftConveyorMobile__K1rer",
                leftConveyorDesktop: "Illustrations_leftConveyorDesktop__Em5xA",
                rightConveyorMobile: "Illustrations_rightConveyorMobile__E2krV",
                rightConveyorDesktop: "Illustrations_rightConveyorDesktop__xZZWX",
                leftConveyorGearEnterWrapper: "Illustrations_leftConveyorGearEnterWrapper__bVCNz",
                rightConveyorGearEnterWrapper: "Illustrations_rightConveyorGearEnterWrapper__uhrrQ",
                rotateEnter: "Illustrations_rotateEnter__XYlPM",
                rotate: "Illustrations_rotate__NJalO"
            }
        },
        649801: function(e) {
            e.exports = {
                main: "homepage_main__sRG4_",
                mainFullBleed: "homepage_mainFullBleed__w8vmL",
                section: "homepage_section___Tv7x",
                sectionAgents: "homepage_sectionAgents__PDnF0",
                sectionFullBleed: "homepage_sectionFullBleed__Wsr8B",
                sectionNoSpacing: "homepage_sectionNoSpacing__8_HPd",
                heroAndLogowall: "homepage_heroAndLogowall__p2DiO",
                heroSection: "homepage_heroSection__m69Ry",
                heroSectionAgents: "homepage_heroSectionAgents__f8l5y",
                logoWallAgents: "homepage_logoWallAgents__TUaIV",
                noXScroll: "homepage_noXScroll__ii6jk",
                lightGrayBg: "homepage_lightGrayBg__JAkIe",
                bentoContainer: "homepage_bentoContainer__x8Gz_",
                bentoContainerAgents: "homepage_bentoContainerAgents__MSUK9",
                customAgentsSection: "homepage_customAgentsSection__m_WOD",
                agentsCarousel: "homepage_agentsCarousel__gcB3i",
                logoWallConstrained: "homepage_logoWallConstrained__QnkCi",
                bodyBgHeroExit: "homepage_bodyBgHeroExit__Ur0t_"
            }
        },
        667193: function(e) {
            e.exports = {
                hero: "HomepageHeroAgents_hero__PgXPj",
                "flicker-on": "HomepageHeroAgents_flicker-on__xJ_1J",
                flicker: "HomepageHeroAgents_flicker__k9DWp",
                mediaContainer: "HomepageHeroAgents_mediaContainer__61LAV",
                heroMediaContainer: "HomepageHeroAgents_heroMediaContainer__XS4wB",
                headerContainer: "HomepageHeroAgents_headerContainer__guuzB",
                title: "HomepageHeroAgents_title__M2_WW",
                body: "HomepageHeroAgents_body__c_f9_",
                ctas: "HomepageHeroAgents_ctas__Zwncr",
                conveyor: "HomepageHeroAgents_conveyor__d6gQg",
                "fade-in": "HomepageHeroAgents_fade-in__HBybG",
                conveyorLeftContainer: "HomepageHeroAgents_conveyorLeftContainer__YUZV9",
                conveyorRightContainer: "HomepageHeroAgents_conveyorRightContainer__8cgX1",
                agent: "HomepageHeroAgents_agent__ueT_Q",
                bookAgent: "HomepageHeroAgents_bookAgent___Pb24",
                globeAgent: "HomepageHeroAgents_globeAgent__hpRV5",
                filesAgent: "HomepageHeroAgents_filesAgent__p4ToD",
                mailboxAgent: "HomepageHeroAgents_mailboxAgent__ZB6ss",
                checkmarkAgent: "HomepageHeroAgents_checkmarkAgent__o4ThS",
                lightBulbAgent: "HomepageHeroAgents_lightBulbAgent__vNnpU",
                appleAgent: "HomepageHeroAgents_appleAgent__F174d",
                signAgent: "HomepageHeroAgents_signAgent__foMWP"
            }
        },
        530650: function(e) {
            e.exports = {
                hero: "HomepageHeroThinkTogether_hero__cVxpF",
                backgroundImage: "HomepageHeroThinkTogether_backgroundImage__BfY6N",
                backgroundOverlay: "HomepageHeroThinkTogether_backgroundOverlay__kkOIe",
                title: "HomepageHeroThinkTogether_title__26k2S",
                iosVideoContainer: "HomepageHeroThinkTogether_iosVideoContainer___5Kmf",
                subtitle: "HomepageHeroThinkTogether_subtitle__PWe_G",
                mediaButtonPrimary: "HomepageHeroThinkTogether_mediaButtonPrimary__FalRG"
            }
        },
        856531: function(e) {
            e.exports = {
                button: "iconButton_button__sCCG7",
                sizeSmall: "iconButton_sizeSmall___ikXV",
                sizeMedium: "iconButton_sizeMedium__tkYeo",
                group: "iconButton_group__KfvJp",
                edgeHorizontal: "iconButton_edgeHorizontal__yJOWK",
                edgeVerticalBackground: "iconButton_edgeVerticalBackground__Sw1Lt",
                edgeHorizontalBackground: "iconButton_edgeHorizontalBackground__9wzwW",
                focusRing: "iconButton_focusRing__PQe1f",
                shapeRectangular: "iconButton_shapeRectangular__yyL1i",
                shapeCircular: "iconButton_shapeCircular__BEHVS",
                title: "iconButton_title__fJBsV"
            }
        },
        142571: function(e) {
            e.exports = {
                main: "layout_main__LAl4b",
                withoutPadding: "layout_withoutPadding__qQ631"
            }
        },
        388189: function(e) {
            e.exports = {
                logo: "logo_logo__xQVjz",
                heightConstrained: "logo_heightConstrained__wFlX5",
                grayscale: "logo_grayscale__gR1oG"
            }
        },
        202823: function(e) {
            e.exports = {
                root: "mediaButtonThumbnail_root__287vJ",
                thumbnail: "mediaButtonThumbnail_thumbnail__M0H54",
                overlay: "mediaButtonThumbnail_overlay__ropiY",
                content: "mediaButtonThumbnail_content___KF8a",
                playIcon: "mediaButtonThumbnail_playIcon__DaAIf",
                label: "mediaButtonThumbnail_label__E92wy",
                videoContainer: "mediaButtonThumbnail_videoContainer__kIPyH",
                fullscreenVideoContainer: "mediaButtonThumbnail_fullscreenVideoContainer__4pFGP",
                fullscreenVideoPlayer: "mediaButtonThumbnail_fullscreenVideoPlayer__r_yfB"
            }
        },
        626242: function(e) {
            e.exports = {
                video: "Video_video__KYz0l",
                videoAspectRatio: "Video_videoAspectRatio__qVTeE"
            }
        },
        132904: function(e) {
            e.exports = {
                dialog: "dialog_dialog__RX4pP"
            }
        },
        811163: function(e, t, a) {
            e.exports = a(937253)
        },
        631133: function(e, t, a) {
            "use strict";
            a.d(t, {
                Un: function() {
                    return x
                },
                dR: function() {
                    return v
                }
            });
            var n = function() {
                    return "undefined" == typeof window
                },
                l = function(e) {
                    e = e || navigator.userAgent;
                    var t = /(iPad).*OS\s([\d_]+)/.test(e);
                    return {
                        ios: !t && /(iPhone\sOS)\s([\d_]+)/.test(e) || t,
                        android: /(Android);?[\s/]+([\d.]+)?/.test(e)
                    }
                },
                r = 0,
                o = 0,
                i = 0,
                s = null,
                c = !1,
                d = [],
                u = function(e) {
                    if (n()) return !1;
                    if (!e) throw Error("options must be provided");
                    var t = !1,
                        a = {
                            get passive() {
                                t = !0;
                                return
                            }
                        },
                        l = function() {},
                        r = "__TUA_BSL_TEST_PASSIVE__";
                    window.addEventListener(r, l, a), window.removeEventListener(r, l, a);
                    var o = e.capture;
                    return t ? e : void 0 !== o && o
                }({
                    passive: !1
                }),
                h = !n() && "scrollBehavior" in document.documentElement.style,
                g = function() {
                    var e = document.documentElement,
                        t = Object.assign({}, e.style),
                        a = window.innerWidth - e.clientWidth,
                        n = parseInt(window.getComputedStyle(e).paddingRight, 10);
                    return e.style.overflow = "hidden", e.style.boxSizing = "border-box", e.style.paddingRight = "".concat(a + n, "px"),
                        function() {
                            ["overflow", "boxSizing", "paddingRight"].forEach(function(a) {
                                e.style[a] = t[a] || ""
                            })
                        }
                },
                _ = function(e) {
                    var t = document.documentElement,
                        a = document.body,
                        n = t.scrollTop || a.scrollTop,
                        l = Object.assign({}, t.style),
                        r = Object.assign({}, a.style);
                    return t.style.height = "100%", t.style.overflow = "hidden", a.style.top = "-".concat(n, "px"), a.style.width = "100%", a.style.height = "auto", a.style.position = "fixed", a.style.overflow = (null == e ? void 0 : e.overflowType) || "hidden",
                        function() {
                            t.style.height = l.height || "", t.style.overflow = l.overflow || "", ["top", "width", "height", "overflow", "position"].forEach(function(e) {
                                a.style[e] = r[e] || ""
                            }), h ? window.scrollTo({
                                top: n,
                                behavior: "instant"
                            }) : window.scrollTo(0, n)
                        }
                },
                p = function(e) {
                    e.cancelable && e.preventDefault()
                },
                f = function(e, t) {
                    if (t) {
                        var a = t.scrollTop,
                            n = t.scrollLeft,
                            l = t.scrollWidth,
                            r = t.scrollHeight,
                            s = t.clientWidth,
                            c = t.clientHeight,
                            d = e.targetTouches[0].clientX - i,
                            u = e.targetTouches[0].clientY - o,
                            h = Math.abs(u) > Math.abs(d);
                        if (h && (u > 0 && 0 === a || u < 0 && a + c + 1 >= r) || !h && (d > 0 && 0 === n || d < 0 && n + s + 1 >= l)) return p(e)
                    }
                    return e.stopPropagation(), !0
                },
                m = function(e) {
                    if (e) return
                },
                v = function(e, t) {
                    n() || (m(e), l().ios ? (e && (Array.isArray(e) ? e : [e]).forEach(function(e) {
                        e && -1 === d.indexOf(e) && (e.ontouchstart = function(e) {
                            o = e.targetTouches[0].clientY, i = e.targetTouches[0].clientX
                        }, e.ontouchmove = function(t) {
                            1 === t.targetTouches.length && f(t, e)
                        }, d.push(e))
                    }), c || (document.addEventListener("touchmove", p, u), c = !0)) : r <= 0 && (s = l().android ? _(t) : g()), r += 1)
                },
                x = function(e) {
                    if (!n() && (m(e), !((r -= 1) > 0))) {
                        if (!l().ios && "function" == typeof s) {
                            s();
                            return
                        }
                        e && (Array.isArray(e) ? e : [e]).forEach(function(e) {
                            var t = d.indexOf(e); - 1 !== t && (e.ontouchmove = null, e.ontouchstart = null, d.splice(t, 1))
                        }), c && (document.removeEventListener("touchmove", p, u), c = !1)
                    }
                }
        }
    }
]);