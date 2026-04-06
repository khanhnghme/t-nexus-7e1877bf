! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3fb1187e-f4b7-4ff6-833c-09e995d2ef04", e._sentryDebugIdIdentifier = "sentry-dbid-3fb1187e-f4b7-4ff6-833c-09e995d2ef04")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [69104, 28264, 32817], {
        228264: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChevronLeft: function() {
                    return o
                }
            });
            var r = n(552322);
            let o = (0, n(507285).defineIcon)({
                className: "chevronLeft",
                viewBox: "0 0 9 15",
                svg: (0, r.jsx)("path", {
                    d: "M.521 7.507c0 .29.108.54.34.755l6.458 6.325a.946.946 0 00.69.283.98.98 0 00.987-.988c0-.274-.116-.515-.299-.706l-5.819-5.67 5.82-5.669c.182-.19.298-.44.298-.705a.98.98 0 00-.988-.988c-.274 0-.506.1-.689.282L.861 6.743c-.232.224-.34.473-.34.764z"
                })
            })
        },
        732817: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChevronRight: function() {
                    return o
                }
            });
            var r = n(552322);
            let o = (0, n(507285).defineIcon)({
                className: "chevronRight",
                viewBox: "0 0 9 15",
                svg: (0, r.jsx)("path", {
                    d: "M8.696 7.507a1.08 1.08 0 00-.34-.764L1.896.426a.96.96 0 00-.689-.282.975.975 0 00-.987.988c0 .265.108.514.299.705l5.81 5.67-5.81 5.67a.979.979 0 00-.3.705c0 .556.432.988.988.988.266 0 .499-.1.69-.283l6.457-6.325a.988.988 0 00.34-.755z"
                })
            })
        },
        747441: function(e, t, n) {
            "use strict";
            n.d(t, {
                p: function() {
                    return h
                },
                r: function() {
                    return p
                }
            });
            var r = n(552322),
                o = n(72779),
                i = n.n(o),
                a = n(202784),
                l = n(914775),
                s = n(406518),
                c = n(962753),
                u = n(237853),
                d = n(331714),
                f = n(6777);
            let h = ["noseyNone", "noseyDuck", "noseyGlasses", "noseyHeadset", "noseySearching", "noseyAgents"],
                g = {
                    noseyGlasses: {
                        video: s.Z.nosey.fall.clipNoseyGlassesMp4,
                        mask: s.Z.nosey.fall.maskNoseyGlassesPng,
                        fallback: s.Z.nosey.fall.firstNoseyGlassesPng
                    },
                    noseyHeadset: {
                        video: s.Z.nosey.fall.clipNoseyHeadsetMp4,
                        mask: s.Z.nosey.fall.maskNoseyHeadsetPng,
                        fallback: s.Z.nosey.fall.firstNoseyHeadsetPng,
                        gapRight: "3px",
                        gapBottom: "0px"
                    },
                    noseySearching: {
                        video: s.Z.nosey.fall.clipNoseySearchingMp4,
                        mask: s.Z.nosey.fall.maskNoseySearchingPng,
                        fallback: s.Z.nosey.fall.firstNoseySearchingPng,
                        gapBottom: "0px"
                    },
                    noseyAgents: {
                        video: s.Z.nosey.fall.clipCustomAgentsMp4,
                        mask: s.Z.nosey.fall.maskCustomAgentsPng,
                        fallback: s.Z.nosey.fall.firstCustomAgentsPng
                    },
                    noseyDuck: {
                        video: s.Z.nosey.fall.clipNoseyDuckMp4,
                        mask: s.Z.nosey.fall.maskNoseyDuckPng,
                        fallback: s.Z.nosey.fall.firstNoseyDuckPng,
                        gapBottom: "10px"
                    }
                };

            function p({
                animation: e,
                className: t,
                isActive: n
            }) {
                let o = (0, d.T)(),
                    [s, h] = (0, a.useState)(!0),
                    p = (0, a.useRef)(null),
                    {
                        video: m,
                        mask: y,
                        fallback: v,
                        gapRight: b,
                        gapBottom: x
                    } = (e => {
                        if ("noseyNone" === e) return {
                            video: void 0,
                            mask: void 0,
                            fallback: void 0,
                            gapRight: "0px",
                            gapBottom: "0px"
                        };
                        let t = g[e];
                        return {
                            video: t.video,
                            mask: t.mask,
                            fallback: t.fallback,
                            ...void 0 !== t.gapRight ? {
                                gapRight: t.gapRight
                            } : {},
                            ...void 0 !== t.gapBottom ? {
                                gapBottom: t.gapBottom
                            } : {}
                        }
                    })(e);
                return (0, a.useEffect)(() => {
                    CSS && CSS.supports && y && h(CSS.supports(`mask-image: url(${y})`))
                }, [y]), (0, a.useEffect)(() => {
                    let e = p.current;
                    if (e && !o && s && n) {
                        let t = 0 === e.currentTime,
                            n = e.currentTime === e.duration;
                        (t || n) && (e.currentTime = 0, e.play().catch(() => {}))
                    }
                }, [n, o, s]), (0, r.jsx)("div", {
                    className: i()(t, f.nosey, {
                        [f.active]: n
                    }),
                    style: (0, l.Ay)({
                        "--nosey-gap-right": b,
                        "--nosey-gap-bottom": x
                    }),
                    children: (0, r.jsx)("div", {
                        className: f.noseyMediaContainer,
                        children: "noseyNone" === e ? null : !o && s && m && y ? (0, r.jsx)("div", {
                            className: i()(f.noseyMediaContainer, f.noseyVideoMask, t),
                            style: (0, l.Ay)({
                                "--nosey-mask-image": `url(${y})`
                            }),
                            children: (0, r.jsx)(u.n, {
                                ref: p,
                                src: m,
                                poster: v,
                                autoPlay: !1,
                                loop: !1,
                                muted: !0,
                                playsInline: !0,
                                controls: !1,
                                preload: "auto",
                                width: 256,
                                height: 256,
                                className: f.noseyMedia
                            })
                        }) : v ? (0, r.jsx)(c.E, {
                            src: v,
                            alt: "Animated nosey",
                            width: 256,
                            height: 256,
                            className: f.noseyMedia
                        }) : null
                    })
                })
            }
        },
        661103: function(e, t, n) {
            "use strict";
            n.d(t, {
                lr: function() {
                    return r.lr
                },
                J8: function() {
                    return r.J8
                },
                xs: function() {
                    return r.xs
                },
                ib: function() {
                    return c
                },
                ge: function() {
                    return d
                },
                K1: function() {
                    return y
                },
                Cc: function() {
                    return b
                },
                qs: function() {
                    return r.qs
                },
                hh: function() {
                    return r.hh
                }
            });
            var r = n(753219),
                o = n(552322),
                i = n(72779),
                a = n.n(i),
                l = n(202784),
                s = n(854151);
            let c = (0, l.forwardRef)(function({
                className: e,
                children: t,
                ...n
            }, r) {
                return (0, o.jsx)("figure", { ...n,
                    className: a()(s.figure, e),
                    ref: r,
                    children: t
                })
            });
            var u = n(782993);
            let d = (0, l.forwardRef)(function({
                className: e,
                children: t,
                ...n
            }, r) {
                return (0, o.jsx)("figcaption", { ...n,
                    className: a()(u.figureCaption, e),
                    ref: r,
                    children: t
                })
            });
            var f = n(716952),
                h = n(973187),
                g = n(366308),
                p = n(223289),
                m = n(448095);
            let y = (0, l.forwardRef)(function({
                type: e = "button",
                className: t,
                "aria-label": n,
                onClick: r,
                showOn: i = "hover",
                ...s
            }, c) {
                let {
                    goToNextSlide: u
                } = (0, p.v)(), d = (0, f.YB)(), y = (0, l.useRef)(null), v = (0, g.q)(y, c), b = n ? ? d.formatMessage({
                    id: "components.carouselNextButton.props.ariaLabel",
                    defaultMessage: "next",
                    description: "Accessible label for forward navigation on a rotating image carousel"
                }), x = (0, l.useCallback)(() => {
                    let e = y.current;
                    if (!e) return;
                    let t = new Event("change", {
                        bubbles: !0
                    });
                    e.dispatchEvent(t)
                }, []), _ = (0, l.useCallback)(e => {
                    u(), null == r || r(e), x()
                }, [u, x, r]);
                return (0, o.jsx)("button", { ...s,
                    type: e,
                    className: a()(m.button, m.next, t, {
                        [m.alwaysShow]: "always" === i
                    }),
                    "aria-label": b,
                    onClick: _,
                    ref: v,
                    children: (0, o.jsx)("span", {
                        className: m.indicator,
                        children: (0, o.jsx)(h._, {
                            className: m.icon,
                            style: {
                                width: 16,
                                height: 16
                            }
                        })
                    })
                })
            });
            var v = n(228264);
            let b = (0, l.forwardRef)(function({
                type: e = "button",
                className: t,
                "aria-label": n,
                onClick: r,
                showOn: i = "hover",
                ...s
            }, c) {
                let {
                    goToPreviousSlide: u
                } = (0, p.v)(), d = (0, f.YB)(), h = (0, l.useRef)(null), y = (0, g.q)(h, c), b = n ? ? d.formatMessage({
                    id: "components.carouselPreviousButton.props.ariaLabel",
                    defaultMessage: "previous",
                    description: "Accessible label for backward navigation on a rotating image carousel"
                }), x = (0, l.useCallback)(() => {
                    let e = h.current;
                    if (!e) return;
                    let t = new Event("change", {
                        bubbles: !0
                    });
                    e.dispatchEvent(t)
                }, []), _ = (0, l.useCallback)(e => {
                    u(), null == r || r(e), x()
                }, [u, x, r]);
                return (0, o.jsx)("button", { ...s,
                    type: e,
                    className: a()(m.button, m.previous, t, {
                        [m.alwaysShow]: "always" === i
                    }),
                    "aria-label": b,
                    onClick: _,
                    ref: y,
                    children: (0, o.jsx)("span", {
                        className: m.indicator,
                        children: (0, o.jsx)(v.ChevronLeft, {
                            className: m.icon,
                            style: {
                                width: 16,
                                height: 16
                            }
                        })
                    })
                })
            });
            n(325178)
        },
        826910: function(e, t, n) {
            "use strict";
            n.d(t, {
                i: function() {
                    return l
                }
            });
            var r = n(552322),
                o = n(72779),
                i = n.n(o);
            n(202784);
            var a = n(834911);

            function l({
                style: e,
                orientation: t = "horizontal",
                ...n
            }) {
                return (0, r.jsx)("hr", {
                    className: i()("divider", {
                        [a.dividerHorizontal]: "horizontal" === t,
                        [a.dividerVertical]: "vertical" === t
                    }),
                    style: e,
                    ...n
                })
            }
        },
        969104: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HomepageBentoCarousel: function() {
                    return eo
                }
            });
            var r = n(552322),
                o = n(72779),
                i = n.n(o),
                a = n(202784),
                l = n(251914),
                s = n(719110),
                c = n(741664),
                u = n.n(c),
                d = n(797187),
                f = n(202012),
                h = n(567102);
            let g = (0, a.forwardRef)(function(e, t) {
                    return (0, r.jsx)(d.y, { ...e,
                        variant: "globalCaption",
                        as: "h3",
                        className: i()(h.eyebrow, e.className),
                        ref: t
                    })
                }),
                p = (0, a.forwardRef)(function(e, t) {
                    return (0, r.jsxs)(d.y, { ...e,
                        variant: "cardTitleFeature",
                        as: "p",
                        className: i()(h.heading, e.className),
                        ref: t,
                        children: [e.children, (0, r.jsx)("span", {
                            className: h.headingLinkIcon,
                            children: (0, r.jsx)(f.E, {
                                arrowType: "right",
                                placement: "none"
                            })
                        })]
                    })
                }),
                m = (0, a.forwardRef)(function(e, t) {
                    let {
                        className: n,
                        children: o,
                        href: a,
                        onClick: l,
                        ...s
                    } = e;
                    return (0, r.jsx)("header", { ...s,
                        className: i()(h.header, n),
                        ref: t,
                        children: (0, r.jsx)(u(), {
                            className: h.headingLink,
                            href: a,
                            onClick: l,
                            children: o
                        })
                    })
                });
            var y = n(747441),
                v = n(753219),
                b = n(395359);

            function x({
                value: e,
                onChange: t,
                className: n,
                children: o,
                ...a
            }) {
                return (0, r.jsx)("div", {
                    className: b.root,
                    children: (0, r.jsx)(v.lr, {
                        className: i()(b.container, n),
                        value: e,
                        onChange: t,
                        ...a,
                        children: o
                    })
                })
            }
            let _ = (0, a.createContext)(void 0);
            _.displayName = "BentoCarouselContext";
            var w = n(962753),
                C = n(426625);

            function k({
                desktopImage: e,
                mobileImage: t,
                className: n
            }) {
                let o = (0, w.N)({
                    src: e.src,
                    alt: e.alt ? ? "",
                    width: e.width,
                    height: e.height
                }).props.src;
                if (!t) return (0, r.jsx)(w.E, {
                    src: e.src,
                    alt: e.alt ? ? "",
                    width: e.width,
                    height: e.height,
                    className: i()(C.image, n),
                    loading: "eager"
                });
                let a = (0, w.N)({
                    src: t.src,
                    alt: t.alt ? ? "",
                    width: t.width,
                    height: t.height
                }).props.src;
                return (0, r.jsxs)("picture", {
                    children: [(0, r.jsx)("source", {
                        srcSet: a,
                        media: "(max-width: 1450px)",
                        width: t.width,
                        height: t.height
                    }), (0, r.jsx)("source", {
                        srcSet: o,
                        width: e.width,
                        height: e.height
                    }), (0, r.jsx)(w.E, {
                        src: e.src,
                        alt: e.alt ? ? "",
                        width: e.width,
                        height: e.height,
                        className: i()(C.image, n),
                        loading: "eager"
                    })]
                })
            }
            var N = n(914775),
                j = n(354724);

            function R({
                isInView: e,
                aspectRatio: t,
                className: n,
                children: o
            }) {
                return e ? o : (0, r.jsx)("div", {
                    className: i()(j.placeholder, n),
                    style: {
                        [(0, N.Ay)("--placeholder-aspect-ratio")]: t
                    }
                })
            }
            var S = n(716952),
                E = n(498529),
                B = n(881724);

            function P({
                posterSrc: e,
                aspectRatio: t,
                width: n,
                height: o,
                loop: l,
                videoSrc: c,
                isPlaying: u,
                className: d
            }) {
                let f = (0, a.useRef)(null),
                    h = (0, S.YB)(),
                    g = (0, a.useRef)(u),
                    {
                        userPaused: p,
                        setUserPaused: m
                    } = function() {
                        let e = (0, a.useContext)(_);
                        if (void 0 === e) throw Error("useBentoCarouselContext must be used within a BentoCarouselContext.Provider");
                        return e
                    }();
                (0, a.useEffect)(() => {
                    let e = f.current;
                    if (e) {
                        if (!u || p) {
                            e.pause();
                            return
                        }
                        g.current !== u && (e.currentTime = 0), g.current = u, (async () => {
                            try {
                                await e.play()
                            } catch (e) {}
                        })()
                    }
                }, [u, p]);
                let y = (0, a.useRef)(c);
                (0, a.useEffect)(() => {
                    if (y.current === c) return;
                    y.current = c;
                    let e = f.current;
                    if (e) {
                        if (e.load(), !u || p) {
                            e.pause();
                            return
                        }(async () => {
                            try {
                                await e.play()
                            } catch (e) {}
                        })()
                    }
                }, [c, u, p]);
                let v = (0, a.useCallback)(() => {
                        let e = f.current;
                        e && (p ? (e.play(), s.xj({
                            name: "bento_carousel_video_play_click",
                            src: e.currentSrc
                        }), m(!1)) : (e.pause(), s.DU({
                            name: "bento_carousel_video_pause_click",
                            src: e.currentSrc
                        }), m(!0)))
                    }, [p, m]),
                    b = (0, a.useMemo)(() => {
                        let e = u && !p;
                        return h.formatMessage({
                            id: "bentoCarouselVideo.playbackButtonLabel",
                            description: "Accessible label for the play/pause button on the bento carousel video",
                            defaultMessage: (0, S.Ys)("playbackState", {
                                paused: "Play",
                                playing: "Pause",
                                other: "Play"
                            })
                        }, {
                            playbackState: e ? "playing" : "paused"
                        })
                    }, [h, u, p]);
                return (0, r.jsxs)("div", {
                    className: B.videoContainer,
                    children: [(0, r.jsx)("video", {
                        ref: f,
                        className: i()(B.video, d),
                        src: c,
                        poster: e,
                        style: {
                            [(0, N.Ay)("--video-aspect-ratio")]: t
                        },
                        width: n,
                        height: o,
                        preload: "metadata",
                        loop: l,
                        muted: !0,
                        playsInline: !0,
                        controls: !1
                    }), u ? (0, r.jsxs)("button", {
                        onClick: v,
                        className: B.playPauseController,
                        children: [(0, r.jsx)("span", {
                            className: i()(B.icon, {
                                [B.paused]: p
                            }),
                            children: p ? (0, r.jsx)(E.d, {}) : (0, r.jsx)(E.s, {})
                        }), (0, r.jsx)("span", {
                            className: B.visuallyHidden,
                            children: b
                        })]
                    }) : null]
                })
            }
            var A = n(661103);
            let T = (0, a.forwardRef)(function({
                isActive: e,
                children: t,
                value: n
            }, o) {
                return (0, r.jsx)(v.qs, {
                    value: n,
                    hidden: !e,
                    ref: o,
                    children: (0, r.jsx)(A.ib, {
                        children: (0, r.jsx)(v.xs, {
                            children: t
                        })
                    })
                })
            });
            var L = n(136689);
            let M = (0, a.forwardRef)(function({
                children: e,
                bgImageSrc: t
            }, n) {
                return (0, r.jsx)("div", {
                    ref: n,
                    className: i()(L.carousel, {
                        [L.carouselBackground]: !!t
                    }),
                    style: t ? {
                        [(0, N.Ay)("--bg-image-src")]: `url(${t})`
                    } : void 0,
                    children: e
                })
            });
            var I = n(282131);
            let D = (0, a.forwardRef)(function({
                className: e,
                children: t,
                slideIndex: n,
                totalSlides: o,
                ...a
            }, l) {
                return (0, r.jsxs)(v.hh, { ...a,
                    className: i()(I.slides, e),
                    ref: l,
                    children: [(0, r.jsxs)(v.J8, {
                        className: I.controls,
                        children: [(0, r.jsx)(A.Cc, {
                            className: i()(I.controlButton, {
                                [I.hidden]: 0 === n
                            }),
                            onClick: e => {
                                s.Pe({
                                    name: "bento_carousel_previous_button_click",
                                    label: e.currentTarget.ariaLabel || "Previous",
                                    method: "click",
                                    direction: "previous"
                                })
                            }
                        }), (0, r.jsx)(A.K1, {
                            className: i()(I.controlButton, {
                                [I.hidden]: n === o - 1
                            }),
                            onClick: e => {
                                s.Pe({
                                    name: "bento_carousel_next_button_click",
                                    label: e.currentTarget.ariaLabel || "Next",
                                    method: "click",
                                    direction: "next"
                                })
                            }
                        })]
                    }), t]
                })
            });
            var O = n(744272),
                H = n(903195),
                F = n(826910),
                G = n(961490),
                V = n(50227),
                z = n(366308),
                Z = n(79199);
            let q = (0, a.forwardRef)(function({
                activeTabIndex: e,
                ariaLabel: t,
                tabs: n
            }, o) {
                let l = (0, a.useRef)(null),
                    c = (0, z.q)(o, l),
                    u = (0, S.YB)(),
                    d = (0, V.F)(),
                    [f, h] = (0, a.useState)(!0),
                    g = u.formatMessage({
                        id: "soonBadge.label",
                        defaultMessage: "Soon",
                        description: "Status of a feature"
                    });
                return (0, a.useEffect)(() => {
                    if (!l.current) return;
                    let e = l.current.querySelector("hr");
                    if (!e) return;
                    let t = () => {
                        h("none" === window.getComputedStyle(e).display)
                    };
                    t();
                    let n = new ResizeObserver(t);
                    return n.observe(l.current), () => n.disconnect()
                }, []), (0, r.jsx)(v.FT, {
                    className: Z.tablist,
                    ref: c,
                    "aria-label": t,
                    children: n.map(({
                        title: t,
                        body: o,
                        status: l,
                        iconGraphic: c
                    }, u) => {
                        let h = u === e;
                        return (0, r.jsxs)(a.Fragment, {
                            children: [(0, r.jsxs)(v.IB, {
                                value: String(u),
                                className: i()(Z.tab, {
                                    [Z.active]: h
                                }),
                                tabIndex: h || !f ? 0 : -1,
                                onClick: e => {
                                    s.t(d, { ...(0, G.ok)(e.currentTarget),
                                        name: "bento_carousel_tab_accordion_click",
                                        label: t
                                    })
                                },
                                onKeyDown: e => {
                                    ["ArrowRight", "ArrowLeft"].includes(e.key) && s.Pe({
                                        name: "bento_carousel_tab_accordion_keydown",
                                        label: t,
                                        method: "keyboard",
                                        direction: "ArrowRight" === e.key ? "next" : "previous"
                                    })
                                },
                                children: [(0, r.jsxs)("p", {
                                    className: Z.summary,
                                    children: [void 0 !== c ? (0, r.jsx)(O.z, {
                                        className: Z.iconGraphic,
                                        isFilled: !0,
                                        fillShape: "round",
                                        fillColor: c.color,
                                        iconSize: {
                                            default: 24,
                                            lg: 40
                                        },
                                        iconFrameSize: {
                                            default: 28,
                                            lg: 40
                                        },
                                        children: (0, r.jsx)(w.E, {
                                            src: c.src,
                                            alt: "",
                                            width: 48,
                                            height: 48,
                                            loading: "lazy"
                                        })
                                    }) : null, t, "comingSoon" === l ? (0, r.jsx)(H.Ct, {
                                        variant: "tertiary-rounded",
                                        message: g
                                    }) : void 0]
                                }), (0, r.jsx)("p", {
                                    className: i()(Z.content),
                                    children: o
                                })]
                            }), u < n.length - 1 ? (0, r.jsx)(F.i, {
                                role: "presentation"
                            }) : void 0]
                        }, u)
                    })
                })
            });
            var $ = n(493954);

            function W({
                children: e
            }) {
                return (0, r.jsx)("div", {
                    className: $.content,
                    children: e
                })
            }
            var J = n(580976);
            let Y = (0, a.forwardRef)(function({
                tabCount: e,
                activeTabIndex: t
            }, n) {
                let o = (0, V.F)(),
                    a = e => {
                        s.t(o, { ...(0, G.ok)(e.currentTarget),
                            name: "bento_carousel_tab_indicator_click",
                            label: e.currentTarget.ariaLabel || "Tab"
                        })
                    };
                return (0, r.jsx)(v.FT, {
                    "aria-label": "Current slide indicator",
                    className: J.list,
                    ref: n,
                    children: Array.from({
                        length: e
                    }).map((e, n) => (0, r.jsx)(v.IB, {
                        className: i()(J.tab, {
                            [J.active]: t === n
                        }),
                        value: String(n),
                        "aria-label": `Go to slide ${n+1}`,
                        tabIndex: -1,
                        onClick: a
                    }, n))
                })
            });
            var X = n(882374),
                K = n(594572);
            let U = X.Ryn({
                title: K.iG.heading,
                body: K.iG.text,
                image: X.wfr([K.iG.image, X.Ryn({
                    width: X.Rxh(),
                    height: X.Rxh()
                })]),
                poster: K.iA,
                video: K.iA,
                mobileImage: X.jtO(X.wfr([K.iG.image, X.Ryn({
                    width: X.Rxh(),
                    height: X.Rxh()
                })])),
                mobilePoster: X.jtO(K.iA),
                mobileVideo: X.jtO(K.iA),
                status: X.AG3(X.$R3(["standard", "hidden", "comingSoon"])),
                icon: X.jtO(K.iG.text),
                iconGraphic: X.jtO(X.Ryn({
                    src: X.Z_8(),
                    color: X.Z_8()
                }))
            });
            X.Ryn({
                headline: K.iG.heading,
                eyebrow: K.iG.heading,
                heading: K.iG.heading,
                link: K.iG.link,
                bgImage: X.jtO(K.iA),
                slides: X.IXX(U)
            });
            var Q = n(935612),
                ee = n(488507),
                et = n(421543),
                en = n(331714),
                er = n(49646);

            function eo({
                bgImage: e,
                className: t,
                headline: n,
                eyebrow: o,
                heading: c,
                link: u,
                slides: d,
                forceStaticFallback: f = !1,
                isActive: h,
                hideNosey: v = !1,
                isNew: C = !0,
                loopVideo: N = !0
            }) {
                let [j, S] = (0, a.useState)(0), E = String(j), [B, A] = (0, a.useState)(!1), [I, O] = (0, a.useState)(!1), H = (0, V.F)(), F = (0, a.useMemo)(() => ({
                    userPaused: I,
                    setUserPaused: O
                }), [I]), z = function() {
                    let e = (0, et.a)("(max-width: 1450px)");
                    if (void 0 !== e) return e ? "mobile" : "desktop"
                }(), Z = e ? (0, w.N)(e).props.src : void 0, [$, J] = (0, a.useState)(null), [X, K] = (0, a.useState)(!1), U = (0, a.useMemo)(() => ({
                    rootMargin: "200px",
                    threshold: 0
                }), []);
                (0, ee.S)(X ? null : $, (0, a.useCallback)(e => {
                    e.some(e => e.isIntersecting) && K(!0)
                }, []), U);
                let eo = (0, en.T)(),
                    ei = f || !1 !== eo,
                    ea = (0, a.useCallback)(e => {
                        let t = e.currentTarget.getAttribute("value");
                        null !== t && S(Number(t))
                    }, []),
                    el = v ? null : (0, r.jsx)(y.r, {
                        animation: "noseyDuck",
                        isActive: h || B,
                        className: L.noseyHat
                    });
                return (0, r.jsxs)("section", {
                    className: i()(er.root, t),
                    "data-bento-box": "true",
                    "data-analytics-scroll-point": !0,
                    "data-analytics-name": "BentoCarousel",
                    children: [(0, r.jsx)(Q.hj, {
                        noMargin: !0,
                        children: (0, r.jsx)(Q.JQ, {
                            level: 2,
                            children: n
                        })
                    }), (0, r.jsx)(_.Provider, {
                        value: F,
                        children: (0, r.jsxs)(x, {
                            "aria-label": o,
                            value: E,
                            onChange: ea,
                            ...!v && {
                                onMouseEnter: () => A(!0),
                                onMouseLeave: () => A(!1)
                            },
                            children: [(0, r.jsxs)(m, {
                                href: u.href,
                                onClick: e => s.t(H, { ...(0, G.ok)(e.currentTarget),
                                    name: "bento_carousel_heading_cta",
                                    label: `${o} ${c}`
                                }),
                                children: [(0, r.jsxs)(g, {
                                    children: [(0, r.jsx)("span", {
                                        children: o
                                    }), C ? (0, r.jsx)(l.Ct, {
                                        className: er.badge,
                                        variant: "light",
                                        messageType: "new"
                                    }) : null]
                                }), (0, r.jsx)(p, {
                                    children: (0, r.jsx)("span", {
                                        children: c
                                    })
                                })]
                            }), (0, r.jsxs)(M, {
                                ref: J,
                                bgImageSrc: Z,
                                children: [(0, r.jsx)(D, {
                                    slideIndex: j,
                                    totalSlides: d.length,
                                    children: d.map((e, t) => {
                                        let n = function({
                                                slide: e,
                                                shouldRenderStatic: t,
                                                mediaType: n
                                            }) {
                                                var r;
                                                let o = e.mobilePoster && "mobile" === n ? e.mobilePoster : e.poster,
                                                    i = (0, w.N)({
                                                        src: o.src,
                                                        alt: "",
                                                        width: o.width,
                                                        height: o.height,
                                                        quality: 90
                                                    }).props.src,
                                                    a = (null === (r = e.mobileVideo) || void 0 === r ? void 0 : r.src) && "mobile" === n ? e.mobileVideo.src : e.video.src;
                                                if (t) {
                                                    let t = e.mobileImage && "mobile" === n ? e.mobileImage : e.image;
                                                    return {
                                                        activePoster: o,
                                                        posterSrc: i,
                                                        activeVideoSrc: a,
                                                        aspectRatio: `${t.width} / ${t.height}`
                                                    }
                                                }
                                                return {
                                                    activePoster: o,
                                                    posterSrc: i,
                                                    activeVideoSrc: a,
                                                    aspectRatio: `${o.width} / ${o.height}`
                                                }
                                            }({
                                                slide: e,
                                                shouldRenderStatic: ei,
                                                mediaType: z
                                            }),
                                            o = !ei && n.posterSrc && n.activePoster;
                                        return (0, r.jsx)(T, {
                                            value: String(t),
                                            isActive: j === t,
                                            children: (0, r.jsx)(R, {
                                                isInView: X,
                                                aspectRatio: n.aspectRatio,
                                                className: b.assetBorder,
                                                children: (0, r.jsxs)(r.Fragment, {
                                                    children: [ei ? (0, r.jsx)(k, {
                                                        desktopImage: e.image,
                                                        mobileImage: e.mobileImage,
                                                        className: b.assetBorder
                                                    }) : null, o ? (0, r.jsx)(P, {
                                                        loop: N,
                                                        videoSrc: n.activeVideoSrc,
                                                        posterSrc: n.posterSrc,
                                                        width: n.activePoster.width,
                                                        height: n.activePoster.height,
                                                        aspectRatio: n.aspectRatio,
                                                        isPlaying: X && j === t,
                                                        className: b.assetBorder
                                                    }) : null]
                                                })
                                            })
                                        }, t)
                                    })
                                }), el]
                            }), (0, r.jsxs)(W, {
                                children: [(0, r.jsx)(q, {
                                    tabs: d,
                                    activeTabIndex: j,
                                    ariaLabel: o
                                }), (0, r.jsx)(Y, {
                                    tabCount: d.length,
                                    activeTabIndex: j
                                })]
                            })]
                        })
                    })]
                })
            }
        },
        283802: function(e, t, n) {
            "use strict";
            n.d(t, {
                Rb: function() {
                    return u
                },
                hB: function() {
                    return l
                },
                vT: function() {
                    return c
                },
                vd: function() {
                    return i
                },
                xO: function() {
                    return o
                },
                yA: function() {
                    return a
                }
            });
            var r = n(882374);

            function o(e, t) {
                if (t.length < 1) return [];
                let n = t.map(e => `[id="${e}"]`).join(", ");
                return Array.from(e.querySelectorAll(n))
            }

            function i(e, t) {
                let n = Object.getOwnPropertyDescriptor(e, "value"),
                    r = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), "value"),
                    {
                        set: o
                    } = n ? ? {},
                    {
                        set: i
                    } = r ? ? {};
                if (i && o !== i) i.call(e, t);
                else if (o) o.call(e, t);
                else throw Error("The given element does not have a value setter")
            }

            function a(e) {
                let {
                    currentTarget: t,
                    target: n,
                    bubbles: r,
                    cancelable: o,
                    defaultPrevented: i,
                    eventPhase: a,
                    isTrusted: l,
                    timeStamp: s,
                    type: c
                } = e, u = function({
                    preventDefault: e
                }) {
                    let t = !1;
                    return {
                        isDefaultPrevented: () => t,
                        preventDefault: () => {
                            t = !0, e()
                        }
                    }
                }(e);
                return { ... function({
                        stopPropagation: e
                    }) {
                        let t = !1;
                        return {
                            isPropagationStopped: () => t,
                            stopPropagation: () => {
                                t = !0, e()
                            }
                        }
                    }(e),
                    ...u,
                    type: c,
                    nativeEvent: e,
                    bubbles: r,
                    cancelable: o,
                    defaultPrevented: i,
                    eventPhase: a,
                    isTrusted: l,
                    timeStamp: s,
                    currentTarget: t,
                    target: n,
                    persist: () => {}
                }
            }

            function l(e) {
                let t = Array.from(e.elements).find(e => e.validity && !e.validity.valid);
                null == t || t.focus()
            }
            let s = r.Ryn({
                nodeType: r.i0J(1),
                tagName: r.Z_8()
            });

            function c(e) {
                return r.is(s, e)
            }

            function u(e, t) {
                return r.is(function(e) {
                    let t = e.toUpperCase();
                    return r.Ryn({ ...s.entries,
                        tagName: r.zGw(r.Z_8(), r.vs(e => e === t))
                    })
                }(t), e)
            }
        },
        738444: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (e % t + t) % t
            }

            function o(e, t, n = .01) {
                return Math.abs(e - t) <= n
            }
            n.d(t, {
                yU: function() {
                    return o
                },
                zW: function() {
                    return r
                }
            }), n(720077)
        },
        383216: function(e, t, n) {
            "use strict";
            n.d(t, {
                O: function() {
                    return i
                }
            });
            var r = n(440771),
                o = n(202784);

            function i({
                reference: e,
                floating: t,
                computePositionOptions: n,
                autoUpdateOptions: i,
                update: a
            }) {
                (0, o.useEffect)(() => {
                    if (!e || !t) return;
                    let o = !1,
                        l = async () => {
                            let i = await (0, r.oo)(e, t, n);
                            o || a(i)
                        },
                        s = (0, r.Me)(e, t, l, i);
                    return () => {
                        o = !0, s()
                    }
                }, [e, t, n, i, a])
            }
        },
        973187: function(e, t, n) {
            "use strict";
            n.d(t, {
                _: function() {
                    return r.ChevronRight
                }
            });
            var r = n(732817)
        },
        270559: function(e, t, n) {
            "use strict";
            n.d(t, {
                r: function() {
                    return r
                }
            });
            let r = (0, n(202784).createContext)(void 0);
            r.displayName = "CarouselContext"
        },
        753219: function(e, t, n) {
            "use strict";
            n.d(t, {
                lr: function() {
                    return x
                },
                J8: function() {
                    return N
                },
                xs: function() {
                    return R
                },
                qs: function() {
                    return B
                },
                hh: function() {
                    return P
                },
                IB: function() {
                    return A
                },
                FT: function() {
                    return T
                },
                vr: function() {
                    return k.v
                }
            });
            var r = n(552322),
                o = n(202784),
                i = n(716952),
                a = n(914775),
                l = n(283802),
                s = n(738444),
                c = n(261198),
                u = n(961803),
                d = n(22724),
                f = n(429056),
                h = n(401607),
                g = function(e) {
                    let [t, n] = (0, o.useState)(!1);
                    return (0, o.useEffect)(() => {
                        if (!e) return;
                        let t = () => {
                            n(e.matches(":hover"))
                        };
                        return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", t), () => {
                            e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", t)
                        }
                    }), t
                },
                p = n(366308),
                m = n(270559),
                y = n(220189),
                v = n(383216);

            function b(e) {
                if (e) return e.getAttribute("value") || e.id
            }
            let x = (0, o.forwardRef)(function({
                value: e,
                defaultValue: t,
                paused: n,
                interval: x = 3e3,
                transition: _ = "hide",
                id: w,
                "aria-roledescription": C,
                children: k,
                onChange: N,
                ...j
            }, R) {
                let [S, E] = (0, o.useState)(null), B = (0, p.q)(R, E), P = (0, i.YB)(), A = (0, f.Z)(w), [T, L] = (0, d.O)(e, t ? ? ""), [M, I] = (0, o.useState)(new Set), D = (0, o.useCallback)(e => {
                    S && (S.value = e)
                }, [S]);
                (0, o.useEffect)(() => {
                    S && Object.defineProperty(S, "value", {
                        get() {
                            return this.getAttribute("value")
                        },
                        set(e) {
                            this.setAttribute("value", e), L(e)
                        },
                        configurable: !0
                    })
                }, [S, L]), (0, o.useEffect)(() => {
                    if (S) return S.addEventListener("change", e), () => {
                        S.removeEventListener("change", e)
                    };

                    function e(e) {
                        null == N || N((0, a.Ay)((0, l.yA)(e)))
                    }
                }, [S, N]);
                let O = (0, o.useCallback)(e => {
                        let t = (0, c.P)(S);
                        return t ? (0, l.xO)(t, Array.from(M)).findIndex(t => t.id === e) : 0
                    }, [S, M]),
                    H = (0, o.useCallback)(() => M.size, [M]),
                    F = (0, o.useCallback)(e => {
                        let t = (0, c.P)(S);
                        t && ee(t.getElementById(e))
                    }, [S]),
                    G = (0, o.useMemo)(() => {
                        let e = (0, c.P)(S);
                        if (!e) return;
                        let t = (0, l.xO)(e, Array.from(M)),
                            [n] = t;
                        if (!T) return null == n ? void 0 : n.id;
                        let r = t.find(e => b(e) === T);
                        return (null == r ? void 0 : r.id) ? ? (null == n ? void 0 : n.id)
                    }, [S, T, M]),
                    V = (0, o.useCallback)(e => {
                        let t = (0, c.P)(S);
                        if (!t) return;
                        let n = (0, l.xO)(t, Array.from(M)),
                            r = G ? O(G) : -1,
                            o = (0, s.zW)(r + e, n.length),
                            i = b(n[o]);
                        return D(i ? ? ""), i
                    }, [S, G, M, O, D]),
                    z = (0, o.useCallback)(() => V(1), [V]),
                    Z = (0, o.useCallback)(() => V(-1), [V]),
                    q = g(S),
                    $ = function(e) {
                        let [t, n] = (0, o.useState)(!1);
                        return (0, o.useEffect)(() => {
                            if (!e) return;
                            let t = () => {
                                n(e.matches(":focus-within"))
                            };
                            return e.addEventListener("focusin", t), e.addEventListener("focusout", t), () => {
                                e.removeEventListener("focusin", t), e.removeEventListener("focusout", t)
                            }
                        }), t
                    }(S),
                    [W, J] = (0, o.useState)(!1),
                    Y = [q, $, !W, n].some(Boolean);
                (function(e, t) {
                    let n = (0, o.useRef)(e);
                    (0, h.L)(() => {
                        n.current = e
                    }, [e]), (0, o.useEffect)(() => {
                        if (!t && 0 !== t) return;
                        let e = setInterval(() => n.current(), t);
                        return () => clearInterval(e)
                    }, [t])
                })((0, o.useCallback)(() => {
                    S && (z(), S.dispatchEvent(new Event("change", {
                        bubbles: !0
                    })))
                }, [S, z]), Y ? null : x), (0, o.useCallback)(e => {
                    J(e.some(({
                        isIntersecting: e
                    }) => e))
                }, []), (0, u.r)({
                    threshold: .5
                });
                let [X, K] = (0, o.useState)(new Set), U = (0, o.useMemo)(() => {
                    let e = (0, c.P)(S);
                    if (!e) return null;
                    let t = (0, l.xO)(e, Array.from(M)).find(e => b(e) === T);
                    if (!t) return null;
                    let [n] = (0, l.xO)(t, Array.from(X));
                    return n
                }, [S, T, M, X]), [Q, ee] = (0, o.useState)(null);
                ! function(e, t) {
                    let n = (0, o.useMemo)(() => ({
                            strategy: "absolute",
                            placement: "left",
                            middleware: [(0, y.dp)({
                                apply({
                                    rects: e,
                                    elements: t
                                }) {
                                    t.floating.style.setProperty("--reference-width", `${e.reference.width}px`), Object.assign(t.floating.style, {
                                        width: `${e.reference.width}px`,
                                        maxWidth: `${e.reference.width}px`,
                                        height: `${e.reference.height}px`,
                                        maxHeight: `${e.reference.height}px`
                                    })
                                }
                            })]
                        }), []),
                        r = (0, o.useMemo)(() => ({
                            animationFrame: !0
                        }), []),
                        i = (0, o.useCallback)(({
                            x: e,
                            y: n
                        }) => {
                            t && Object.assign(t.style, {
                                left: `calc(${e}px + var(--reference-width, 0px))`,
                                top: `${n}px`
                            })
                        }, [t]);
                    (0, v.O)({
                        reference: e,
                        floating: t,
                        computePositionOptions: n,
                        autoUpdateOptions: r,
                        update: i
                    })
                }(U, Q);
                let et = C ? ? P.formatMessage({
                        id: "components.carousel.props.ariaRoleDescription",
                        defaultMessage: "carousel",
                        description: "Accessible description of the role of this element for screen-readers and other assistive technology"
                    }),
                    en = (0, o.useCallback)(e => {
                        ee(t => t && e !== t.id ? t : null)
                    }, []),
                    er = (0, o.useCallback)(e => {
                        K(t => new Set([...t, e]))
                    }, []),
                    eo = (0, o.useCallback)(e => {
                        K(t => {
                            let n = new Set(t);
                            return n.delete(e), n
                        })
                    }, []),
                    ei = (0, o.useCallback)(e => {
                        I(t => new Set([...t, e]))
                    }, []),
                    ea = (0, o.useCallback)(e => {
                        I(t => {
                            let n = new Set(t);
                            return n.delete(e), n
                        })
                    }, []),
                    el = (0, u.r)({
                        value: T,
                        transition: _,
                        paused: Y,
                        currentSlideId: G,
                        getSlideIndex: O,
                        getSlidesLength: H,
                        goToPreviousSlide: Z,
                        goToNextSlide: z,
                        goToSlide: D,
                        registerCarouselControls: F,
                        unregisterCarouselControls: en,
                        registerCarouselControlsOverlay: er,
                        unregisterCarouselControlsOverlay: eo,
                        registerSlide: ei,
                        unregisterSlide: ea
                    }),
                    es = (0, o.useRef)(!1);
                return (0, o.useEffect)(() => {
                    if (es.current || !G) return;
                    let e = (0, c.P)(S),
                        t = null == e ? void 0 : e.getElementById(G);
                    t && (es.current = !0, D(b(t) ? ? ""))
                }, [S, G, D]), (0, r.jsx)("section", { ...j,
                    value: T,
                    id: A,
                    "aria-roledescription": et,
                    ref: B,
                    children: (0, r.jsx)(m.r.Provider, {
                        value: el,
                        children: k
                    })
                })
            });
            var _ = n(72779),
                w = n.n(_),
                C = n(793573),
                k = n(223289);
            let N = (0, o.forwardRef)(function({
                id: e,
                className: t,
                children: n,
                ...i
            }, a) {
                let l = (0, f.Z)(e),
                    {
                        registerCarouselControls: s,
                        unregisterCarouselControls: c
                    } = (0, k.v)();
                return (0, o.useEffect)(() => (s(l), () => {
                    c(l)
                }), [l, s, c]), (0, r.jsx)("div", { ...i,
                    id: l,
                    className: w()(C.controls, t),
                    ref: a,
                    children: n
                })
            });
            var j = n(405177);
            let R = (0, o.forwardRef)(function({
                id: e,
                className: t,
                children: n,
                ...i
            }, a) {
                let l = (0, f.Z)(e),
                    {
                        registerCarouselControlsOverlay: s,
                        unregisterCarouselControlsOverlay: c
                    } = (0, k.v)();
                return (0, o.useEffect)(() => (s(l), () => {
                    c(l)
                }), [l, s, c]), (0, r.jsx)("div", { ...i,
                    id: l,
                    className: w()(j.overlay, t),
                    ref: a,
                    children: n
                })
            });
            var S = n(488507);
            let E = (0, o.createContext)(void 0);
            E.displayName = "CarouselSlidesContext";
            let B = (0, o.forwardRef)(function({
                    value: e,
                    id: t,
                    className: n,
                    "aria-roledescription": a,
                    children: l,
                    ...s
                }, c) {
                    let u = (0, f.Z)(t),
                        [d, h] = (0, o.useState)(null),
                        g = (0, p.q)(c, h),
                        m = (0, i.YB)(),
                        y = a ? ? m.formatMessage({
                            id: "components.carouselSlide.props.ariaRoleDescription",
                            defaultMessage: "slide",
                            description: "Accessible description of the role of this element for screen-readers and other assistive technology"
                        }),
                        {
                            value: v,
                            transition: b,
                            getSlideIndex: x,
                            getSlidesLength: _,
                            goToSlide: w,
                            registerSlide: C,
                            unregisterSlide: N
                        } = (0, k.v)();
                    ! function() {
                        if (!(0, o.useContext)(E)) throw Error("CarouselSlide elements must be wrapped in a CarouselSlides element")
                    }();
                    let j = (0, o.useMemo)(() => x(u) + 1, [u, x]),
                        R = (0, o.useMemo)(() => _(), [_]),
                        B = (e ? ? u).toString();
                    (0, o.useEffect)(() => (C(u), () => {
                        N(u)
                    }), [u, C, N]);
                    let {
                        role: P = "group",
                        hidden: A,
                        "aria-hidden": T,
                        "aria-label": L
                    } = s, M = (0, o.useRef)(!0), I = (0, o.useCallback)(() => {
                        if (M.current) {
                            M.current = !1;
                            return
                        }
                        w(B)
                    }, [w, B]), D = (0, o.useMemo)(() => ({
                        threshold: .5
                    }), []);
                    (0, S.S)("scroll" === b ? d : null, I, D);
                    let O = B === v,
                        H = L ? ? (j > 0 && R > 0) ? m.formatMessage({
                            id: "components.carouselSlide.props.ariaLabel",
                            defaultMessage: "{current} of {total}",
                            description: "Accessible label of this element for screen-readers and other assistive technology to determine the order of the current slide"
                        }, {
                            current: j,
                            total: R
                        }) : void 0;
                    return (0, r.jsx)("div", { ...s,
                        value: B,
                        id: u,
                        className: n,
                        role: P,
                        hidden: void 0 !== A ? A : "hide" === b && !O,
                        "aria-hidden": T || !O,
                        "aria-label": H,
                        "aria-roledescription": y,
                        ref: g,
                        children: l
                    })
                }),
                P = (0, o.forwardRef)(function({
                    children: e,
                    "aria-live": t,
                    ...n
                }, i) {
                    let a = (0, o.useRef)(null),
                        l = (0, p.q)(i, a),
                        {
                            paused: s
                        } = (0, k.v)();
                    return (0, r.jsx)("div", { ...n,
                        "aria-live": t ? ? (s ? "polite" : "off"),
                        ref: l,
                        children: (0, r.jsx)(E.Provider, {
                            value: !0,
                            children: e
                        })
                    })
                }),
                A = (0, o.forwardRef)(function({
                    type: e = "button",
                    role: t = "tab",
                    value: n,
                    children: o,
                    tabIndex: i,
                    "aria-selected": a,
                    ...l
                }, s) {
                    let {
                        value: c
                    } = (0, k.v)(), u = n === c;
                    return (0, r.jsx)("button", {
                        type: e,
                        role: t,
                        value: n,
                        tabIndex: i ? ? (u ? void 0 : -1),
                        "aria-selected": a ? ? u,
                        ref: s,
                        ...l,
                        children: o
                    })
                }),
                T = (0, o.forwardRef)(function({
                    role: e = "tablist",
                    "aria-label": t,
                    onKeyDown: n,
                    onClick: i,
                    ...l
                }, s) {
                    let c = (0, o.useRef)(null),
                        u = (0, p.q)(c, s),
                        {
                            goToPreviousSlide: d,
                            goToNextSlide: f,
                            goToSlide: h
                        } = (0, k.v)(),
                        g = (0, o.useCallback)(() => {
                            let e = c.current;
                            if (!e) return;
                            let t = new Event("change", {
                                bubbles: !0
                            });
                            e.dispatchEvent(t)
                        }, []),
                        m = (0, o.useCallback)(e => {
                            let t = e.target.closest("[role='tab']");
                            if (!t) {
                                null == i || i(e);
                                return
                            }
                            let n = t.getAttribute("value");
                            (0, a.lm)(n) && h(n), g(), null == i || i(e)
                        }, [h, g, i]),
                        y = (0, o.useCallback)(() => {
                            let e = c.current;
                            return Array.from((null == e ? void 0 : e.querySelectorAll("[role='tab']")) ? ? [])
                        }, []),
                        v = (0, o.useCallback)(e => {
                            let t = c.current;
                            return (null == t ? void 0 : t.querySelector(`[role='tab'][value='${e}']`)) ? ? null
                        }, []),
                        b = (0, o.useCallback)(e => {
                            let t = {
                                ArrowLeft: d,
                                ArrowRight: f,
                                Home: () => {
                                    let [e] = y();
                                    if (e) return h(e.value), e.value
                                },
                                End: () => {
                                    let e = y().pop();
                                    if (e) return h(e.value), e.value
                                }
                            }[e.key];
                            if (!t) {
                                null == n || n(e);
                                return
                            }
                            e.preventDefault();
                            let r = t(),
                                o = r ? v(r) : null;
                            null == o || o.focus(), g(), null == n || n(e)
                        }, [d, f, h, v, y, g, n]);
                    return (0, r.jsx)("div", {
                        role: e,
                        "aria-label": t ? ? "Slides",
                        onKeyDown: b,
                        onClick: m,
                        ref: u,
                        ...l
                    })
                })
        },
        223289: function(e, t, n) {
            "use strict";
            n.d(t, {
                v: function() {
                    return i
                }
            });
            var r = n(202784),
                o = n(270559);

            function i() {
                let e = (0, r.useContext)(o.r);
                if (!e) throw Error("CarouselControls and CarouselTabs elements must be wrapped in a Carousel element");
                return e
            }
        },
        6777: function(e) {
            e.exports = {
                legacyNosey: "NoseyBento_legacyNosey__4N3ri",
                wide: "NoseyBento_wide__ffqZ2",
                active: "NoseyBento_active__v9kJ0",
                legacyNoseyCircle: "NoseyBento_legacyNoseyCircle__oSdPQ",
                legacyNoseyGif: "NoseyBento_legacyNoseyGif__mhrRA",
                nosey: "NoseyBento_nosey__9od_K",
                noseyMediaContainer: "NoseyBento_noseyMediaContainer__2nj7X",
                noseyMedia: "NoseyBento_noseyMedia__kMkuz",
                noseyVideoMask: "NoseyBento_noseyVideoMask__FIXf_",
                noseyOverlay: "NoseyBento_noseyOverlay__TAx7r"
            }
        },
        567102: function(e) {
            e.exports = {
                header: "bentoHeader_header__vF0Xh",
                headingLink: "bentoHeader_headingLink__bmWJK",
                eyebrow: "bentoHeader_eyebrow__S8VcM",
                heading: "bentoHeader_heading__jIo4G",
                headingLinkIcon: "bentoHeader_headingLinkIcon__4h9hJ"
            }
        },
        395359: function(e) {
            e.exports = {
                root: "bentoCarousel_root__P6Gn8",
                container: "bentoCarousel_container__Gk3XR",
                white: "bentoCarousel_white__c1PYi",
                assetBorder: "bentoCarousel_assetBorder__cQ22U"
            }
        },
        426625: function(e) {
            e.exports = {
                image: "bentoCarouselImage_image__8n0Jp"
            }
        },
        354724: function(e) {
            e.exports = {
                placeholder: "bentoCarouselPlaceholder_placeholder__Ux3k_"
            }
        },
        136689: function(e) {
            e.exports = {
                carousel: "bentoCarouselSlideContainer_carousel__aPwJ3",
                carouselBackground: "bentoCarouselSlideContainer_carouselBackground__IWl_n",
                noseyHat: "bentoCarouselSlideContainer_noseyHat__ggpQn"
            }
        },
        282131: function(e) {
            e.exports = {
                slides: "bentoCarouselSlides_slides__bNctR",
                controls: "bentoCarouselSlides_controls__oYOfu",
                controlButton: "bentoCarouselSlides_controlButton__bGsKd",
                hidden: "bentoCarouselSlides_hidden__Ys_cL"
            }
        },
        79199: function(e) {
            e.exports = {
                tablist: "bentoCarouselTabAccordion_tablist__khJQA",
                tab: "bentoCarouselTabAccordion_tab__lHPc1",
                active: "bentoCarouselTabAccordion_active__ec_gE",
                summary: "bentoCarouselTabAccordion_summary__8PF54",
                iconGraphic: "bentoCarouselTabAccordion_iconGraphic__pzE11",
                content: "bentoCarouselTabAccordion_content__Jpx90"
            }
        },
        493954: function(e) {
            e.exports = {
                content: "bentoCarouselTabContainer_content__0K59h"
            }
        },
        580976: function(e) {
            e.exports = {
                list: "bentoCarouselTabIndicator_list__uAhZB",
                tab: "bentoCarouselTabIndicator_tab__0E_2L",
                active: "bentoCarouselTabIndicator_active__uqGLq"
            }
        },
        881724: function(e) {
            e.exports = {
                videoContainer: "bentoCarouselVideo_videoContainer__wabob",
                video: "bentoCarouselVideo_video__DR6Qv",
                playPauseController: "bentoCarouselVideo_playPauseController__LzLUg",
                icon: "bentoCarouselVideo_icon__byHv_",
                paused: "bentoCarouselVideo_paused__YT4qa",
                visuallyHidden: "bentoCarouselVideo_visuallyHidden__r4x_C"
            }
        },
        854151: function(e) {
            e.exports = {
                figure: "carouselFigure_figure__cUW9X"
            }
        },
        782993: function(e) {
            e.exports = {
                figureCaption: "carouselFigureCaption_figureCaption__hm6Xp"
            }
        },
        448095: function(e) {
            e.exports = {
                button: "carouselPreviousNextButton_button__KERn9",
                alwaysShow: "carouselPreviousNextButton_alwaysShow__56jFr",
                indicator: "carouselPreviousNextButton_indicator__G6_zS",
                previous: "carouselPreviousNextButton_previous__ANlT7",
                icon: "carouselPreviousNextButton_icon__btwlo",
                next: "carouselPreviousNextButton_next__jhari"
            }
        },
        325178: function(e) {
            e.exports = {
                statusIndicator: "carouselStatusIndicator_statusIndicator__KP0o1",
                statusIndicatorDot: "carouselStatusIndicator_statusIndicatorDot__juPCj",
                current: "carouselStatusIndicator_current__GPjpX"
            }
        },
        834911: function(e) {
            e.exports = {
                dividerVertical: "Divider_dividerVertical__DAy3k",
                dividerHorizontal: "Divider_dividerHorizontal__kSSaN"
            }
        },
        49646: function(e) {
            e.exports = {
                root: "homepageBentoCarousel_root__XEVDN",
                badge: "homepageBentoCarousel_badge__zpipF"
            }
        },
        793573: function(e) {
            e.exports = {
                controls: "carouselControls_controls__6nl_t"
            }
        },
        405177: function(e) {
            e.exports = {
                overlay: "carouselControlsOverlay_overlay__sJUyh"
            }
        },
        220189: function(e, t, n) {
            "use strict";

            function r(e) {
                return e.split("-")[1]
            }

            function o(e) {
                return e.split("-")[0]
            }

            function i(e) {
                return ["top", "bottom"].includes(o(e)) ? "x" : "y"
            }

            function a(e, t, n) {
                let a, {
                        reference: l,
                        floating: s
                    } = e,
                    c = l.x + l.width / 2 - s.width / 2,
                    u = l.y + l.height / 2 - s.height / 2,
                    d = i(t),
                    f = "y" === d ? "height" : "width",
                    h = l[f] / 2 - s[f] / 2,
                    g = "x" === d;
                switch (o(t)) {
                    case "top":
                        a = {
                            x: c,
                            y: l.y - s.height
                        };
                        break;
                    case "bottom":
                        a = {
                            x: c,
                            y: l.y + l.height
                        };
                        break;
                    case "right":
                        a = {
                            x: l.x + l.width,
                            y: u
                        };
                        break;
                    case "left":
                        a = {
                            x: l.x - s.width,
                            y: u
                        };
                        break;
                    default:
                        a = {
                            x: l.x,
                            y: l.y
                        }
                }
                switch (r(t)) {
                    case "start":
                        a[d] -= h * (n && g ? -1 : 1);
                        break;
                    case "end":
                        a[d] += h * (n && g ? -1 : 1)
                }
                return a
            }
            n.d(t, {
                JB: function() {
                    return s
                },
                dp: function() {
                    return f
                },
                oo: function() {
                    return l
                }
            });
            let l = async (e, t, n) => {
                let {
                    placement: r = "bottom",
                    strategy: o = "absolute",
                    middleware: i = [],
                    platform: l
                } = n, s = i.filter(Boolean), c = await (null == l.isRTL ? void 0 : l.isRTL(t)), u = await l.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o
                }), {
                    x: d,
                    y: f
                } = a(u, r, c), h = r, g = {}, p = 0;
                for (let n = 0; n < s.length; n++) {
                    let {
                        name: i,
                        fn: m
                    } = s[n], {
                        x: y,
                        y: v,
                        data: b,
                        reset: x
                    } = await m({
                        x: d,
                        y: f,
                        initialPlacement: r,
                        placement: h,
                        strategy: o,
                        middlewareData: g,
                        rects: u,
                        platform: l,
                        elements: {
                            reference: e,
                            floating: t
                        }
                    });
                    d = null != y ? y : d, f = null != v ? v : f, g = { ...g,
                        [i]: { ...g[i],
                            ...b
                        }
                    }, x && p <= 50 && (p++, "object" == typeof x && (x.placement && (h = x.placement), x.rects && (u = !0 === x.rects ? await l.getElementRects({
                        reference: e,
                        floating: t,
                        strategy: o
                    }) : x.rects), {
                        x: d,
                        y: f
                    } = a(u, h, c)), n = -1)
                }
                return {
                    x: d,
                    y: f,
                    placement: h,
                    strategy: o,
                    middlewareData: g
                }
            };

            function s(e) {
                return { ...e,
                    top: e.y,
                    left: e.x,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                }
            }
            async function c(e, t) {
                var n;
                void 0 === t && (t = {});
                let {
                    x: r,
                    y: o,
                    platform: i,
                    rects: a,
                    elements: l,
                    strategy: c
                } = e, {
                    boundary: u = "clippingAncestors",
                    rootBoundary: d = "viewport",
                    elementContext: f = "floating",
                    altBoundary: h = !1,
                    padding: g = 0
                } = t, p = "number" != typeof g ? {
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
                }, m = l[h ? "floating" === f ? "reference" : "floating" : f], y = s(await i.getClippingRect({
                    element: null == (n = await (null == i.isElement ? void 0 : i.isElement(m))) || n ? m : m.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
                    boundary: u,
                    rootBoundary: d,
                    strategy: c
                })), v = "floating" === f ? { ...a.floating,
                    x: r,
                    y: o
                } : a.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), x = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
                    x: 1,
                    y: 1
                }, _ = s(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                    rect: v,
                    offsetParent: b,
                    strategy: c
                }) : v);
                return {
                    top: (y.top - _.top + p.top) / x.y,
                    bottom: (_.bottom - y.bottom + p.bottom) / x.y,
                    left: (y.left - _.left + p.left) / x.x,
                    right: (_.right - y.right + p.right) / x.x
                }
            }
            let u = Math.min,
                d = Math.max;
            ["top", "right", "bottom", "left"].reduce((e, t) => e.concat(t, t + "-start", t + "-end"), []);
            let f = function(e) {
                return void 0 === e && (e = {}), {
                    name: "size",
                    options: e,
                    async fn(t) {
                        let n, a;
                        let {
                            placement: l,
                            rects: s,
                            platform: f,
                            elements: h
                        } = t, {
                            apply: g = () => {},
                            ...p
                        } = e, m = await c(t, p), y = o(l), v = r(l), b = "x" === i(l), {
                            width: x,
                            height: _
                        } = s.floating;
                        "top" === y || "bottom" === y ? (n = y, a = v === (await (null == f.isRTL ? void 0 : f.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (a = y, n = "end" === v ? "top" : "bottom");
                        let w = _ - m[n],
                            C = x - m[a],
                            k = w,
                            N = C;
                        if (b ? N = u(x - m.right - m.left, C) : k = u(_ - m.bottom - m.top, w), !t.middlewareData.shift && !v) {
                            let e = d(m.left, 0),
                                t = d(m.right, 0),
                                n = d(m.top, 0),
                                r = d(m.bottom, 0);
                            b ? N = x - 2 * (0 !== e || 0 !== t ? e + t : d(m.left, m.right)) : k = _ - 2 * (0 !== n || 0 !== r ? n + r : d(m.top, m.bottom))
                        }
                        await g({ ...t,
                            availableWidth: N,
                            availableHeight: k
                        });
                        let j = await f.getDimensions(h.floating);
                        return x !== j.width || _ !== j.height ? {
                            reset: {
                                rects: !0
                            }
                        } : {}
                    }
                }
            }
        },
        440771: function(e, t, n) {
            "use strict";
            let r;
            n.d(t, {
                Me: function() {
                    return L
                },
                oo: function() {
                    return M
                }
            });
            var o = n(220189);

            function i(e) {
                var t;
                return (null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
            }

            function a(e) {
                return i(e).getComputedStyle(e)
            }
            let l = Math.min,
                s = Math.max,
                c = Math.round;

            function u(e) {
                let t = a(e),
                    n = parseFloat(t.width),
                    r = parseFloat(t.height),
                    o = e.offsetWidth,
                    i = e.offsetHeight,
                    l = c(n) !== o || c(r) !== i;
                return l && (n = o, r = i), {
                    width: n,
                    height: r,
                    fallback: l
                }
            }

            function d(e) {
                return p(e) ? (e.nodeName || "").toLowerCase() : ""
            }

            function f() {
                if (r) return r;
                let e = navigator.userAgentData;
                return e && Array.isArray(e.brands) ? r = e.brands.map(e => e.brand + "/" + e.version).join(" ") : navigator.userAgent
            }

            function h(e) {
                return e instanceof i(e).HTMLElement
            }

            function g(e) {
                return e instanceof i(e).Element
            }

            function p(e) {
                return e instanceof i(e).Node
            }

            function m(e) {
                return "undefined" != typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
            }

            function y(e) {
                let {
                    overflow: t,
                    overflowX: n,
                    overflowY: r,
                    display: o
                } = a(e);
                return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
            }

            function v(e) {
                let t = /firefox/i.test(f()),
                    n = a(e),
                    r = n.backdropFilter || n.WebkitBackdropFilter;
                return "none" !== n.transform || "none" !== n.perspective || !!r && "none" !== r || t && "filter" === n.willChange || t && !!n.filter && "none" !== n.filter || ["transform", "perspective"].some(e => n.willChange.includes(e)) || ["paint", "layout", "strict", "content"].some(e => {
                    let t = n.contain;
                    return null != t && t.includes(e)
                })
            }

            function b() {
                return /^((?!chrome|android).)*safari/i.test(f())
            }

            function x(e) {
                return ["html", "body", "#document"].includes(d(e))
            }

            function _(e) {
                return g(e) ? e : e.contextElement
            }
            let w = {
                x: 1,
                y: 1
            };

            function C(e) {
                let t = _(e);
                if (!h(t)) return w;
                let n = t.getBoundingClientRect(),
                    {
                        width: r,
                        height: o,
                        fallback: i
                    } = u(t),
                    a = (i ? c(n.width) : n.width) / r,
                    l = (i ? c(n.height) : n.height) / o;
                return a && Number.isFinite(a) || (a = 1), l && Number.isFinite(l) || (l = 1), {
                    x: a,
                    y: l
                }
            }

            function k(e, t, n, r) {
                var o, a;
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                let l = e.getBoundingClientRect(),
                    s = _(e),
                    c = w;
                t && (r ? g(r) && (c = C(r)) : c = C(e));
                let u = s ? i(s) : window,
                    d = b() && n,
                    f = (l.left + (d && (null == (o = u.visualViewport) ? void 0 : o.offsetLeft) || 0)) / c.x,
                    h = (l.top + (d && (null == (a = u.visualViewport) ? void 0 : a.offsetTop) || 0)) / c.y,
                    p = l.width / c.x,
                    m = l.height / c.y;
                if (s) {
                    let e = i(s),
                        t = r && g(r) ? i(r) : r,
                        n = e.frameElement;
                    for (; n && r && t !== e;) {
                        let e = C(n),
                            t = n.getBoundingClientRect(),
                            r = getComputedStyle(n);
                        t.x += (n.clientLeft + parseFloat(r.paddingLeft)) * e.x, t.y += (n.clientTop + parseFloat(r.paddingTop)) * e.y, f *= e.x, h *= e.y, p *= e.x, m *= e.y, f += t.x, h += t.y, n = i(n).frameElement
                    }
                }
                return {
                    width: p,
                    height: m,
                    top: h,
                    right: f + p,
                    bottom: h + m,
                    left: f,
                    x: f,
                    y: h
                }
            }

            function N(e) {
                return ((p(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function j(e) {
                return g(e) ? {
                    scrollLeft: e.scrollLeft,
                    scrollTop: e.scrollTop
                } : {
                    scrollLeft: e.pageXOffset,
                    scrollTop: e.pageYOffset
                }
            }

            function R(e) {
                return k(N(e)).left + j(e).scrollLeft
            }

            function S(e) {
                if ("html" === d(e)) return e;
                let t = e.assignedSlot || e.parentNode || m(e) && e.host || N(e);
                return m(t) ? t.host : t
            }

            function E(e, t) {
                var n;
                void 0 === t && (t = []);
                let r = function e(t) {
                        let n = S(t);
                        return x(n) ? n.ownerDocument.body : h(n) && y(n) ? n : e(n)
                    }(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = i(r);
                return o ? t.concat(a, a.visualViewport || [], y(r) ? r : []) : t.concat(r, E(r))
            }

            function B(e, t, n) {
                let r;
                if ("viewport" === t) r = function(e, t) {
                    let n = i(e),
                        r = N(e),
                        o = n.visualViewport,
                        a = r.clientWidth,
                        l = r.clientHeight,
                        s = 0,
                        c = 0;
                    if (o) {
                        a = o.width, l = o.height;
                        let e = b();
                        (!e || e && "fixed" === t) && (s = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: l,
                        x: s,
                        y: c
                    }
                }(e, n);
                else if ("document" === t) r = function(e) {
                    let t = N(e),
                        n = j(e),
                        r = e.ownerDocument.body,
                        o = s(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
                        i = s(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight),
                        l = -n.scrollLeft + R(e),
                        c = -n.scrollTop;
                    return "rtl" === a(r).direction && (l += s(t.clientWidth, r.clientWidth) - o), {
                        width: o,
                        height: i,
                        x: l,
                        y: c
                    }
                }(N(e));
                else if (g(t)) r = function(e, t) {
                    let n = k(e, !0, "fixed" === t),
                        r = n.top + e.clientTop,
                        o = n.left + e.clientLeft,
                        i = h(e) ? C(e) : {
                            x: 1,
                            y: 1
                        };
                    return {
                        width: e.clientWidth * i.x,
                        height: e.clientHeight * i.y,
                        x: o * i.x,
                        y: r * i.y
                    }
                }(t, n);
                else {
                    let n = { ...t
                    };
                    if (b()) {
                        var l, c;
                        let t = i(e);
                        n.x -= (null == (l = t.visualViewport) ? void 0 : l.offsetLeft) || 0, n.y -= (null == (c = t.visualViewport) ? void 0 : c.offsetTop) || 0
                    }
                    r = n
                }
                return (0, o.JB)(r)
            }

            function P(e, t) {
                return h(e) && "fixed" !== a(e).position ? t ? t(e) : e.offsetParent : null
            }

            function A(e, t) {
                let n = i(e),
                    r = P(e, t);
                for (; r && ["table", "td", "th"].includes(d(r)) && "static" === a(r).position;) r = P(r, t);
                return r && ("html" === d(r) || "body" === d(r) && "static" === a(r).position && !v(r)) ? n : r || function(e) {
                    let t = S(e);
                    for (; h(t) && !x(t);) {
                        if (v(t)) return t;
                        t = S(t)
                    }
                    return null
                }(e) || n
            }
            let T = {
                getClippingRect: function(e) {
                    let {
                        element: t,
                        boundary: n,
                        rootBoundary: r,
                        strategy: o
                    } = e, i = [..."clippingAncestors" === n ? function(e, t) {
                        let n = t.get(e);
                        if (n) return n;
                        let r = E(e).filter(e => g(e) && "body" !== d(e)),
                            o = null,
                            i = "fixed" === a(e).position,
                            l = i ? S(e) : e;
                        for (; g(l) && !x(l);) {
                            let e = a(l),
                                t = v(l);
                            (i ? t || o : t || "static" !== e.position || !o || !["absolute", "fixed"].includes(o.position)) ? o = e: r = r.filter(e => e !== l), l = S(l)
                        }
                        return t.set(e, r), r
                    }(t, this._c) : [].concat(n), r], c = i[0], u = i.reduce((e, n) => {
                        let r = B(t, n, o);
                        return e.top = s(r.top, e.top), e.right = l(r.right, e.right), e.bottom = l(r.bottom, e.bottom), e.left = s(r.left, e.left), e
                    }, B(t, c, o));
                    return {
                        width: u.right - u.left,
                        height: u.bottom - u.top,
                        x: u.left,
                        y: u.top
                    }
                },
                convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
                    let {
                        rect: t,
                        offsetParent: n,
                        strategy: r
                    } = e, o = h(n), i = N(n);
                    if (n === i) return t;
                    let a = {
                            scrollLeft: 0,
                            scrollTop: 0
                        },
                        l = {
                            x: 1,
                            y: 1
                        },
                        s = {
                            x: 0,
                            y: 0
                        };
                    if ((o || !o && "fixed" !== r) && (("body" !== d(n) || y(i)) && (a = j(n)), h(n))) {
                        let e = k(n);
                        l = C(n), s.x = e.x + n.clientLeft, s.y = e.y + n.clientTop
                    }
                    return {
                        width: t.width * l.x,
                        height: t.height * l.y,
                        x: t.x * l.x - a.scrollLeft * l.x + s.x,
                        y: t.y * l.y - a.scrollTop * l.y + s.y
                    }
                },
                isElement: g,
                getDimensions: function(e) {
                    return h(e) ? u(e) : e.getBoundingClientRect()
                },
                getOffsetParent: A,
                getDocumentElement: N,
                getScale: C,
                async getElementRects(e) {
                    let {
                        reference: t,
                        floating: n,
                        strategy: r
                    } = e, o = this.getOffsetParent || A, i = this.getDimensions;
                    return {
                        reference: function(e, t, n) {
                            let r = h(t),
                                o = N(t),
                                i = k(e, !0, "fixed" === n, t),
                                a = {
                                    scrollLeft: 0,
                                    scrollTop: 0
                                },
                                l = {
                                    x: 0,
                                    y: 0
                                };
                            if (r || !r && "fixed" !== n) {
                                if (("body" !== d(t) || y(o)) && (a = j(t)), h(t)) {
                                    let e = k(t, !0);
                                    l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
                                } else o && (l.x = R(o))
                            }
                            return {
                                x: i.left + a.scrollLeft - l.x,
                                y: i.top + a.scrollTop - l.y,
                                width: i.width,
                                height: i.height
                            }
                        }(t, await o(n), r),
                        floating: {
                            x: 0,
                            y: 0,
                            ...await i(n)
                        }
                    }
                },
                getClientRects: e => Array.from(e.getClientRects()),
                isRTL: e => "rtl" === a(e).direction
            };

            function L(e, t, n, r) {
                void 0 === r && (r = {});
                let {
                    ancestorScroll: o = !0,
                    ancestorResize: i = !0,
                    elementResize: a = !0,
                    animationFrame: l = !1
                } = r, s = o && !l, c = s || i ? [...g(e) ? E(e) : e.contextElement ? E(e.contextElement) : [], ...E(t)] : [];
                c.forEach(e => {
                    s && e.addEventListener("scroll", n, {
                        passive: !0
                    }), i && e.addEventListener("resize", n)
                });
                let u, d = null;
                if (a) {
                    let r = !0;
                    d = new ResizeObserver(() => {
                        r || n(), r = !1
                    }), g(e) && !l && d.observe(e), g(e) || !e.contextElement || l || d.observe(e.contextElement), d.observe(t)
                }
                let f = l ? k(e) : null;
                return l && function t() {
                    let r = k(e);
                    f && (r.x !== f.x || r.y !== f.y || r.width !== f.width || r.height !== f.height) && n(), f = r, u = requestAnimationFrame(t)
                }(), n(), () => {
                    var e;
                    c.forEach(e => {
                        s && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
                    }), null == (e = d) || e.disconnect(), d = null, l && cancelAnimationFrame(u)
                }
            }
            let M = (e, t, n) => {
                let r = new Map,
                    i = {
                        platform: T,
                        ...n
                    },
                    a = { ...i.platform,
                        _c: r
                    };
                return (0, o.oo)(e, t, { ...i,
                    platform: a
                })
            }
        }
    }
]);