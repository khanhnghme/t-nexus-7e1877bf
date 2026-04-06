! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            a = (new e.Error).stack;
        a && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[a] = "32614b5e-5078-49d4-b746-db17d2f4a761", e._sentryDebugIdIdentifier = "sentry-dbid-32614b5e-5078-49d4-b746-db17d2f4a761")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [59138], {
        999104: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                UserCircleFilledIcon: function() {
                    return o
                }
            });
            var i = t(552322);
            t(202784);
            var n = t(506221);

            function o(e) {
                return (0, i.jsx)(n.t, { ...e,
                    viewBox: "0 0 20 20",
                    children: (0, i.jsx)("path", {
                        d: "M10 2.5c-4.14 0-7.5 3.36-7.5 7.5s3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5-3.36-7.5-7.5-7.5m0 3.125c1.544 0 2.5.956 2.5 2.5s-.956 2.5-2.5 2.5-2.5-.956-2.5-2.5.956-2.5 2.5-2.5m0 10a5.6 5.6 0 0 1-4.137-1.822c.846-1.228 2.274-1.928 4.137-1.928s3.29.7 4.137 1.928A5.6 5.6 0 0 1 10 15.625",
                        fill: "currentColor"
                    })
                })
            }
        },
        874737: function(e, a, t) {
            "use strict";
            t.d(a, {
                E: function() {
                    return c
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(239635),
                l = t(831936);
            let c = (0, s.forwardRef)(function({
                arrowType: e,
                className: a,
                ...t
            }, n) {
                let s = o()(l.arrow, {
                    [l.arrowFlipRtl]: function(e) {
                        switch (e) {
                            case "left":
                            case "right":
                            case "up-right":
                                return !0;
                            case "up":
                            case "down":
                                return !1;
                            default:
                                return (0, r.y)(e)
                        }
                    }(e)
                }, a);
                return (0, i.jsx)("span", {
                    "aria-hidden": !0,
                    className: s,
                    ref: n,
                    ...t,
                    children: function(e) {
                        switch (e) {
                            case "up":
                                return "↑";
                            case "down":
                                return "↓";
                            case "left":
                                return "←";
                            case "right":
                                return "→";
                            case "up-right":
                                return "↗";
                            default:
                                return (0, r.y)(e)
                        }
                    }(e)
                })
            })
        },
        744272: function(e, a, t) {
            "use strict";
            t.d(a, {
                z: function() {
                    return g
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(208326),
                l = t(637275);

            function c(e) {
                return `var(--spacing-${e})`
            }

            function d(e) {
                return `var(--border-radius-${e})`
            }

            function u(e) {
                return e >= 64 ? 500 : 200
            }
            let g = (0, s.forwardRef)(function(e, a) {
                let {
                    className: t,
                    isFilled: n,
                    fillColor: s,
                    fillShape: g = "square",
                    iconSize: m,
                    iconFrameSize: f,
                    style: p,
                    children: v,
                    ..._
                } = e, b = void 0 !== m ? (0, r.rN)(m, "graphic-icon-size", {
                    transform: c
                }) : {
                    "--graphic-icon-size": c(20)
                }, h = void 0 !== f ? (0, r.rN)(f, "graphic-frame-size", {
                    transform: c
                }) : {}, x = "round" === g ? {
                    "--graphic-border-radius": "var(--border-radius-round)"
                } : void 0 === f ? {} : (0, r.rN)((0, r.mI)(f, u), "graphic-border-radius", {
                    transform: d
                });
                return (0, i.jsx)("span", {
                    className: o()(l.graphic, t, {
                        [l.isFilled]: n
                    }),
                    style: { ...p,
                        ...b,
                        ...h,
                        ...x,
                        ...void 0 !== s ? {
                            "--graphic-fill-color": s
                        } : {}
                    },
                    ref: a,
                    ..._,
                    children: v
                })
            })
        },
        193067: function(e, a, t) {
            "use strict";
            t.d(a, {
                u: function() {
                    return d
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(797187),
                l = t(874737),
                c = t(391738);
            let d = (0, s.forwardRef)(function({
                as: e,
                className: a,
                children: t,
                colorTheme: n = "inherit",
                underline: s = "hover",
                arrowType: d,
                target: u,
                rel: g,
                ...m
            }, f) {
                let p = "up" === d || "left" === d,
                    v = o()(c.linkText, {
                        [c.colorThemePrimary]: "primary" === n,
                        [c.colorThemeSecondary]: "secondary" === n,
                        [c.underlineAlways]: "always" === s,
                        [c.underlineDisabled]: "none" === s,
                        [c.hasArrow]: void 0 !== d
                    }, a),
                    _ = d ? (0, i.jsx)(l.E, {
                        arrowType: d
                    }) : null;
                return (0, i.jsxs)(r.y, {
                    as: e ? ? "a",
                    ...m,
                    className: v,
                    target: u,
                    rel: g || ("_blank" === u ? "noopener noreferrer" : void 0),
                    ref: f,
                    children: [p ? _ : void 0, (0, i.jsx)("span", {
                        className: c.linkContent,
                        children: t
                    }), p ? void 0 : _]
                })
            })
        },
        383014: function(e, a, t) {
            "use strict";
            t.d(a, {
                LY: function() {
                    return g
                },
                lc: function() {
                    return _
                },
                Fe: function() {
                    return f
                },
                bx: function() {
                    return v
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(239635),
                l = t(949220);
            let c = (0, s.createContext)({
                variant: void 0
            });

            function d() {
                return (0, s.useContext)(c)
            }
            c.displayName = "NavItemContext";
            let u = c.Provider,
                g = (0, s.forwardRef)(function({
                    as: e,
                    className: a,
                    children: t,
                    width: n,
                    variant: c,
                    ...d
                }, g) {
                    let m = function(e) {
                            switch (e) {
                                case void 0:
                                    return;
                                case "fitContent":
                                    return l.widthFitContent;
                                default:
                                    return (0, r.y)(e)
                            }
                        }(n),
                        f = function(e) {
                            switch (e) {
                                case void 0:
                                    return;
                                case "emphasis":
                                    return l.emphasis;
                                default:
                                    return (0, r.y)(e)
                            }
                        }(c),
                        p = (0, s.useMemo)(() => ({
                            variant: c
                        }), [c]);
                    return (0, i.jsx)(u, {
                        value: p,
                        children: (0, i.jsx)(e ? ? "a", { ...d,
                            className: o()(l.navItem, m, f, a),
                            ref: g,
                            children: t
                        })
                    })
                });
            var m = t(744272);
            let f = (0, s.forwardRef)(function({
                className: e,
                children: a,
                ...t
            }, n) {
                let {
                    variant: s
                } = d(), r = "emphasis" === s;
                return (0, i.jsx)(m.z, {
                    iconSize: r ? {
                        default: 20,
                        md: 48
                    } : 20,
                    iconFrameSize: r ? {
                        default: 32,
                        md: 80
                    } : 32,
                    isFilled: !0,
                    ref: n,
                    "aria-hidden": !0,
                    className: o()(l.icon, e),
                    ...t,
                    children: a
                })
            });
            var p = t(797187);
            let v = (0, s.forwardRef)(function({
                    className: e,
                    children: a,
                    ...t
                }, n) {
                    let s;
                    let {
                        variant: r
                    } = d();
                    return s = "emphasis" === r ? "navigationLinkEmphasis" : "navigationLink", (0, i.jsx)(p.y, {
                        variant: s,
                        as: "span",
                        className: o()(l.link, e),
                        ...t,
                        ref: n,
                        children: a
                    })
                }),
                _ = (0, s.forwardRef)(function({
                    className: e,
                    children: a,
                    ...t
                }, n) {
                    return (0, i.jsx)(p.y, {
                        variant: "navigationCaptionSubtle",
                        as: "span",
                        className: o()(l.caption, e),
                        ...t,
                        ref: n,
                        children: a
                    })
                })
        },
        273161: function(e, a, t) {
            "use strict";
            t.d(a, {
                x: function() {
                    return g
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(208326);
            let l = {
                display: {
                    flex: "flex",
                    grid: "grid",
                    block: "block",
                    inlineFlex: "inline-flex",
                    inlineGrid: "inline-grid",
                    none: "hidden"
                },
                flexDirection: {
                    column: "flex-col",
                    row: "flex-row",
                    columnReverse: "flex-col-reverse",
                    rowReverse: "flex-row-reverse"
                },
                alignItems: {
                    start: "items-start",
                    center: "items-center",
                    end: "items-end",
                    stretch: "items-stretch",
                    baseline: "items-baseline"
                },
                justifyContent: {
                    start: "justify-start",
                    center: "justify-center",
                    end: "justify-end",
                    spaceBetween: "justify-between",
                    spaceAround: "justify-around"
                },
                flexWrap: {
                    wrap: "flex-wrap",
                    nowrap: "flex-nowrap"
                },
                alignSelf: {
                    auto: "self-auto",
                    start: "self-start",
                    center: "self-center",
                    end: "self-end",
                    stretch: "self-stretch"
                },
                inlineSize: {
                    auto: "inline-auto",
                    full: "inline-full"
                }
            };

            function c(e, a) {
                return "default" === a ? e : `${a}:${e}`
            }

            function d(e, a) {
                let t;
                let i = [];
                for (let n of r.j$) {
                    let o = e[n];
                    if (o !== t) {
                        let e = a[o];
                        void 0 !== e && i.push(c(e, n))
                    }
                    t = o
                }
                return i
            }

            function u(e, a) {
                let t;
                if (void 0 === e) return [];
                let i = "object" == typeof e ? e.default : e,
                    n = (0, r.OX)(e, i),
                    o = [];
                for (let e of r.j$) {
                    let i = n[e];
                    i !== t && o.push(c(`${a}-${i}`, e)), t = i
                }
                return o
            }
            let g = (0, s.forwardRef)(function({
                as: e,
                display: a,
                flexDirection: t,
                alignItems: n,
                justifyContent: s,
                flexWrap: c,
                alignSelf: g,
                inlineSize: m,
                gap: f,
                rowGap: p,
                columnGap: v,
                p: _,
                px: b,
                py: h,
                pt: x,
                pb: M,
                ps: N,
                pe: w,
                m: y,
                mx: C,
                my: k,
                mt: j,
                mb: S,
                ms: L,
                me: I,
                className: T,
                children: B,
                style: A,
                ...D
            }, z) {
                let R = void 0 !== a ? d((0, r.OX)(a, "flex"), l.display) : [],
                    F = void 0 !== t ? d((0, r.OX)(t, "column"), l.flexDirection) : [],
                    H = void 0 !== n ? d((0, r.OX)(n, "stretch"), l.alignItems) : [],
                    E = void 0 !== s ? d((0, r.OX)(s, "start"), l.justifyContent) : [],
                    V = void 0 !== c ? d((0, r.OX)(c, "nowrap"), l.flexWrap) : [],
                    P = void 0 !== g ? d((0, r.OX)(g, "auto"), l.alignSelf) : [],
                    W = void 0 !== m ? d((0, r.OX)(m, "auto"), l.inlineSize) : [],
                    G = x ? ? h ? ? _,
                    U = M ? ? h ? ? _,
                    O = N ? ? b ? ? _,
                    $ = w ? ? b ? ? _,
                    Z = j ? ? k ? ? y,
                    q = S ? ? k ? ? y,
                    Y = L ? ? C ? ? y,
                    K = I ? ? C ? ? y;
                return (0, i.jsx)(e ? ? "div", { ...D,
                    className: o()(...R, ...F, ...H, ...E, ...V, ...P, ...W, ...u(f, "gap"), ...u(p, "gap-y"), ...u(v, "gap-x"), ...u(G, "pt"), ...u(U, "pb"), ...u(O, "ps"), ...u($, "pe"), ...u(Z, "mt"), ...u(q, "mb"), ...u(Y, "ms"), ...u(K, "me"), T),
                    ref: z,
                    style: A,
                    children: B
                })
            })
        },
        797187: function(e, a, t) {
            "use strict";
            t.d(a, {
                y: function() {
                    return c
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(239635),
                l = t(691101);
            let c = (0, s.forwardRef)(function({
                as: e,
                className: a,
                style: t,
                variant: n,
                children: s,
                ...c
            }, d) {
                let u = (() => {
                    switch (n) {
                        case "globalTitle":
                            return l.variantGlobalTitle;
                        case "globalTitleSubtle":
                            return l.variantGlobalTitleSubtle;
                        case "globalTitleEmphasis":
                            return l.variantGlobalTitleEmphasis;
                        case "globalHeading":
                            return l.variantGlobalHeading;
                        case "globalSubheading":
                            return l.variantGlobalSubheading;
                        case "globalContext":
                            return l.variantGlobalContext;
                        case "globalEyebrow":
                            return l.variantGlobalEyebrow;
                        case "globalBody":
                            return l.variantGlobalBody;
                        case "globalBodySerif":
                            return l.variantGlobalBodySerif;
                        case "globalBodyLink":
                            return l.variantGlobalBodyLink;
                        case "globalCaption":
                            return l.variantGlobalCaption;
                        case "globalMeta":
                            return l.variantGlobalMeta;
                        case "globalQuote":
                            return l.variantGlobalQuote;
                        case "globalDeck":
                            return l.variantGlobalDeck;
                        case "globalStat":
                            return l.variantGlobalStat;
                        case "interactionButtonSmall":
                            return l.variantInteractionButtonSmall;
                        case "interactionButtonMedium":
                            return l.variantInteractionButtonMedium;
                        case "interactionButtonLarge":
                            return l.variantInteractionButtonLarge;
                        case "interactionFormLabel":
                            return l.variantInteractionFormLabel;
                        case "interactionFormCaption":
                            return l.variantInteractionFormCaption;
                        case "interactionFormInput":
                            return l.variantInteractionFormInput;
                        case "cardTitle":
                            return l.variantCardTitle;
                        case "cardTitleFeature":
                            return l.variantCardTitleFeature;
                        case "cardTitleSummary":
                            return l.variantCardTitleSummary;
                        case "cardTitleBlock":
                            return l.variantCardTitleBlock;
                        case "cardBody":
                            return l.variantCardBody;
                        case "cardBodySummary":
                            return l.variantCardBodySummary;
                        case "cardContext":
                            return l.variantCardContext;
                        case "cardContextFeature":
                            return l.variantCardContextFeature;
                        case "cardNote":
                            return l.variantCardNote;
                        case "cardQuote":
                            return l.variantCardQuote;
                        case "navigationLink":
                            return l.variantNavigationLink;
                        case "navigationLinkEmphasis":
                            return l.variantNavigationLinkEmphasis;
                        case "navigationCaption":
                            return l.variantNavigationCaption;
                        case "navigationCaptionSubtle":
                            return l.variantNavigationCaptionSubtle;
                        case "navigationHeading":
                            return l.variantNavigationHeading;
                        case void 0:
                            return "";
                        default:
                            return (0, r.y)(n)
                    }
                })();
                return (0, i.jsx)(e ? ? "span", { ...c,
                    className: o()(l.semanticTypography, u, a),
                    ref: d,
                    children: s
                })
            })
        },
        458828: function(e, a, t) {
            "use strict";
            t.d(a, {
                K: function() {
                    return s
                }
            });
            var i = t(552322),
                n = t(202784),
                o = t(273161);
            let s = (0, n.forwardRef)(function({
                as: e,
                flexDirection: a = "column",
                alignItems: t = "stretch",
                justifyContent: n = "start",
                flexWrap: s = "nowrap",
                gap: r,
                className: l,
                children: c,
                style: d,
                ...u
            }, g) {
                return (0, i.jsx)(o.x, {
                    as: e,
                    ref: g,
                    display: "flex",
                    flexDirection: a,
                    alignItems: t,
                    justifyContent: n,
                    flexWrap: s,
                    gap: r,
                    inlineSize: "full",
                    className: l,
                    style: d,
                    ...u,
                    children: c
                })
            })
        },
        477624: function(e, a, t) {
            "use strict";
            t.d(a, {
                T: function() {
                    return c
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(273161),
                l = t(518324);
            let c = (0, s.forwardRef)(function(e, a) {
                let {
                    background: t,
                    isInteractive: n = !1,
                    className: s,
                    ...c
                } = e, d = t ? `surface ${"base"===t?"surfaceBase":t}` : void 0, u = o()(d, {
                    [l.surface]: void 0 !== t,
                    [l.surfaceBase]: "base" === t,
                    [l.surfaceNeutral]: "surfaceNeutral" === t,
                    [l.surfaceAccent]: "surfaceAccent" === t,
                    [l.surfaceAccentMuted]: "surfaceAccentMuted" === t,
                    [l.surfaceAccentSoft]: "surfaceAccentSoft" === t,
                    [l.isInteractive]: n
                }, s);
                return (0, i.jsx)(r.x, { ...c,
                    className: u,
                    ref: a
                })
            })
        },
        239635: function(e, a, t) {
            "use strict";

            function i(e) {
                throw Error(`Unhandled case: ${JSON.stringify(e)}`)
            }
            t.d(a, {
                y: function() {
                    return i
                }
            })
        },
        208326: function(e, a, t) {
            "use strict";
            t.d(a, {
                OX: function() {
                    return o
                },
                j$: function() {
                    return n
                },
                mI: function() {
                    return s
                },
                rN: function() {
                    return r
                }
            });
            let i = ["sm", "md", "lg", "xl", "xxl"],
                n = ["default", ...i];

            function o(e, a) {
                return "object" == typeof e && null !== e ? function(e, a) {
                    let t = {
                            default: a,
                            sm: a,
                            md: a,
                            lg: a,
                            xl: a,
                            xxl: a
                        },
                        i = e.default ? ? a;
                    for (let a of n) {
                        let n = e[a];
                        void 0 !== n && (i = n), t[a] = i
                    }
                    return t
                }(e, a) : {
                    default: e,
                    sm: e,
                    md: e,
                    lg: e,
                    xl: e,
                    xxl: e
                }
            }

            function s(e, a) {
                if ("object" != typeof e || null === e) return a(e);
                let t = {
                    default: a(e.default)
                };
                for (let n of i) {
                    let i = e[n];
                    void 0 !== i && (t[n] = a(i))
                }
                return t
            }

            function r(e, a, t) {
                let {
                    transform: n
                } = t ? ? {}, o = n ? ? (e => String(e)), s = {};
                if ("object" != typeof e || null === e) return s[`--${a}`] = o(e), s;
                for (let t of (s[`--${a}`] = o(e.default), i)) {
                    let i = e[t];
                    void 0 !== i && (s[`--${a}-${t}`] = o(i))
                }
                return s
            }
        },
        625406: function(e, a, t) {
            "use strict";
            t.r(a), t.d(a, {
                Menu: function() {
                    return n
                }
            });
            var i = t(552322);
            let n = (0, t(507285).defineIcon)({
                className: "menu",
                viewBox: "0 0 30 30",
                svg: (0, i.jsx)("path", {
                    d: "M2,4v2h26V4H2z M2,16h26v-2H2V16z M2,26h26v-2H2V26z"
                })
            })
        },
        903195: function(e, a, t) {
            "use strict";
            t.d(a, {
                Ct: function() {
                    return d
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(716952),
                l = t(779700),
                c = t(853033);

            function d({
                className: e,
                variant: a,
                message: t,
                messageType: n,
                icons: d
            }) {
                let u = (0, s.useMemo)(() => {
                    switch (n) {
                        case "new":
                            return (0, i.jsx)(r._H, {
                                id: "newBadge.label",
                                defaultMessage: "New",
                                description: "Status of a feature"
                            });
                        case "beta":
                            return (0, i.jsx)(r._H, {
                                id: "betaBadge.label",
                                defaultMessage: "Beta",
                                description: "Status of a feature"
                            });
                        case "alpha":
                            return (0, i.jsx)(r._H, {
                                id: "alphaBadge.label",
                                defaultMessage: "Alpha",
                                description: "Status of a feature"
                            });
                        case "comingSoon":
                            return (0, i.jsx)(r._H, {
                                id: "comingSoonBadge.label",
                                defaultMessage: "Coming soon",
                                description: "Status of a feature"
                            });
                        case "formerlyTeam":
                            return (0, i.jsx)(r._H, {
                                id: "formerlyTeamBadge.label",
                                defaultMessage: "Formerly Team",
                                description: "Formerly team badge used on the pricing page"
                            });
                        case "enterprise":
                            return (0, i.jsx)(r._H, {
                                id: "enterpriseBadge.label",
                                defaultMessage: "Enterprise",
                                description: "The Notion Enterprise plan"
                            })
                    }
                }, [n]);
                return (0, i.jsxs)("span", {
                    className: o()({
                        [c.badgePrimary]: "primary" === a || "primary-rounded" === a,
                        [c.badgeSecondary]: "secondary" === a,
                        [c.badgeMuted]: "muted" === a,
                        [c.badgeMutedSecondary]: "muted-secondary" === a,
                        [c.badgeOutline]: "outline" === a,
                        [c.badgePrimaryRounded]: "primary-rounded" === a,
                        [c.badgeTertiaryRounded]: "tertiary-rounded" === a,
                        [c.badgeNoBackground]: "no-background" === a
                    }, e),
                    children: ["outline" === a ? (0, i.jsx)(l.Z, {
                        variant: "sans-50-regular",
                        children: t || u
                    }) : t || u, d]
                })
            }
        },
        776747: function(e, a, t) {
            "use strict";
            t.d(a, {
                h: function() {
                    return e9
                }
            });
            var i = t(552322),
                n = t(160122),
                o = t(614050),
                s = t(716952),
                r = t(320246),
                l = t(859306),
                c = t(72779),
                d = t.n(c),
                u = t(741664),
                g = t.n(u),
                m = t(202784),
                f = t(719110),
                p = t(481139),
                v = t(625406),
                _ = t(604159);
            let b = (0, m.forwardRef)(({
                menuOpen: e,
                className: a,
                type: t = "button",
                ...n
            }, o) => {
                let r = (0, s.YB)().formatMessage({
                    id: "header.mainMenuToggle",
                    defaultMessage: "Toggle main menu",
                    description: "Main menu toggle button"
                });
                return (0, i.jsx)("button", { ...n,
                    type: t,
                    "aria-haspopup": n["aria-haspopup"] ? ? (e ? "dialog" : void 0),
                    "aria-label": n["aria-label"] ? ? r,
                    className: d()(_.menuToggle, a),
                    ref: o,
                    children: e ? (0, i.jsx)(p.x, {
                        style: {
                            width: 22,
                            fill: "var(--color-ui-icon)"
                        }
                    }) : (0, i.jsx)(v.Menu, {
                        style: {
                            width: 22,
                            fill: "var(--color-ui-icon)"
                        }
                    })
                })
            });
            b.displayName = "MobileTrigger";
            var h = t(154652),
                x = t(779700),
                M = t(50227),
                N = t(488507),
                w = t(944343),
                y = t(421543),
                C = t(665012),
                k = t(914775),
                j = t(873754),
                S = t(11884),
                L = t(901151);
            let I = (0, m.forwardRef)(function({
                id: e,
                trigger: a,
                isOpen: t,
                onOpenChange: n,
                children: o,
                className: s,
                dropdownClassName: r,
                enableHover: l = !0
            }, c) {
                let [u, g] = (0, m.useState)(!1), [p, v] = (0, m.useState)(!1), [_, b] = (0, m.useState)(!1), [h, x] = (0, m.useState)(!1), [M, N] = (0, m.useState)(!1), w = (0, m.useRef)(!1), y = (0, m.useRef)(null), C = (0, m.useRef)(null), k = (0, m.useRef)(null), j = void 0 !== t, I = j ? t : u || l && _;
                return (0, m.useEffect)(() => (I ? (w.current = !0, v(!0), k.current && cancelAnimationFrame(k.current), k.current = requestAnimationFrame(() => {
                    N(!0)
                })) : N(!1), () => {
                    k.current && cancelAnimationFrame(k.current)
                }), [I]), (0, m.useEffect)(() => {
                    let e = e => {
                        if (!I) return;
                        let a = C.current && e.target instanceof Node && C.current.contains(e.target),
                            t = y.current && e.target instanceof Node && y.current.contains(e.target);
                        a || t || (x(!1), N(!1), j || g(!1), null == n || n({
                            isOpen: !1,
                            wasClicked: !1
                        }))
                    };
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [I, j, n]), (0, i.jsxs)("div", {
                    ref: c,
                    id: e,
                    className: d()(S.dropdownContainer, s),
                    onMouseEnter: () => {
                        l && (b(!0), (0, f.c)({
                            name: "global_navigation_dropdown",
                            label: e
                        }), j && !t && (null == n || n({
                            isOpen: !0,
                            wasClicked: !1
                        })))
                    },
                    onMouseLeave: () => {
                        b(!1), l && !h && (N(!1), j || g(!1), null == n || n({
                            isOpen: !1,
                            wasClicked: !1
                        }))
                    },
                    children: [(0, i.jsxs)("button", {
                        ref: C,
                        onClick: e => {
                            e.preventDefault();
                            let a = !I || !h;
                            a || N(!1), j || g(a), x(a), null == n || n({
                                isOpen: a,
                                wasClicked: a
                            })
                        },
                        className: d()(S.link, S.dropdownTrigger, {
                            [S.active]: I
                        }),
                        "aria-haspopup": "true",
                        "aria-expanded": I,
                        children: [a, (0, i.jsx)("span", {
                            className: d()(S.chevron, {
                                [S.chevronOpen]: I
                            }),
                            children: (0, i.jsx)(L._, {})
                        })]
                    }), (0, i.jsx)("div", {
                        ref: y,
                        className: d()(S.dropdown, r, {
                            [S.open]: I && M,
                            [S.close]: !I && w.current
                        }),
                        onTransitionEnd: e => {
                            "opacity" !== e.propertyName && "transform" !== e.propertyName || I || v(!1)
                        },
                        "aria-hidden": !I,
                        children: (0, i.jsx)("div", {
                            children: o
                        })
                    })]
                })
            });
            var T = t(744272),
                B = t(193067),
                A = t(383014),
                D = t(797187),
                z = t(458828),
                R = t(477624),
                F = t(208365),
                H = t(406518),
                E = t(903195),
                V = t(962753),
                P = t(222126);
            async function W({
                locale: e
            }) {
                let a = new URLSearchParams({
                    locale: e
                }).toString();
                return (await fetch(`/front-api/releases/latest-byline?${a}`)).json()
            }
            var G = t(756092),
                U = t(808079);
            let O = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.13 2.52 13.27 14.61",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.758 9.976a1.178 1.178 0 1 0 .377-2.326 1.178 1.178 0 0 0-.377 2.326M6.547 8.97a1.178 1.178 0 1 0 .377-2.327 1.178 1.178 0 0 0-.377 2.326"
                        }), (0, i.jsx)("path", {
                            d: "M10.573 5.554a3.917 3.917 0 0 1 6.743.035.625.625 0 1 1-1.08.63 2.667 2.667 0 0 0-4.591-.023l-5.398 9.015 4.192.68a.625.625 0 0 1-.2 1.233l-5.102-.827a.625.625 0 0 1-.436-.938zM4.36 3.517a3.92 3.92 0 0 1 5.572.356.625.625 0 1 1-.945.818 2.67 2.67 0 0 0-3.795-.243.625.625 0 1 1-.833-.931"
                        })]
                    })
                },
                $ = (0, U.IU)("aiFace", O, "default"),
                Z = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, i.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                q = (0, U.IU)("aiFacePlus", Z, "default"),
                Y = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 0.12 17.94 19.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.733.203a.626.626 0 0 1 .87.286l2.567 5.583 1.41.777 1.722-2.257a.55.55 0 0 1 .874.668l-1.624 2.125 3.87 2.135c.198.11.322.32.322.547v5.648a.63.63 0 0 1-.323.547l-6.408 3.535a.63.63 0 0 1-.604 0l-6.407-3.535a.63.63 0 0 1-.323-.547V10.58L1.054 4.534a.625.625 0 0 1 .271-.795zM4.929 15.346l5.232 2.887v-4.307L4.93 11.04zm6.332-1.42v4.307l5.233-2.887v-4.307zM5.519 10.11l5.192 2.864 5.192-2.864-3.117-1.72-1.75 2.295a.55.55 0 0 1-.875-.668l1.652-2.164-1.102-.608zM2.426 4.557l2.042 4.705 5.419-2.99-2.14-4.65zm14.706.177 1.364.314a.55.55 0 1 1-.248 1.071l-1.364-.314a.55.55 0 0 1 .248-1.071"
                        }), (0, i.jsx)("path", {
                            d: "M12.873 1.548a.55.55 0 0 1 .753.192l.684 1.15a.55.55 0 0 1-.946.561l-.683-1.149a.55.55 0 0 1 .192-.754m3.802-.041a.55.55 0 0 1 .889.649l-.871 1.193a.55.55 0 0 1-.89-.649z"
                        })]
                    })
                },
                K = (0, U.IU)("boxOpenSparkle", Y, "default"),
                Q = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.88 2.32 14.24 15.36",
                    svg: (0, i.jsx)("path", {
                        d: "M9.294 2.325h3.103c.484 0 .948.192 1.29.534l2.897 2.898c.343.342.535.806.535 1.29v5.903a1.825 1.825 0 0 1-1.825 1.825H12.53v1.075a1.825 1.825 0 0 1-1.825 1.825h-6A1.825 1.825 0 0 1 2.88 15.85v-8.8c0-1.008.817-1.825 1.825-1.825H7.47V4.15c0-1.008.817-1.825 1.825-1.825M9.1 5.76l2.897 2.897c.342.342.534.806.534 1.29v3.578h2.763a.575.575 0 0 0 .575-.575V7.3h-1.975a1.75 1.75 0 0 1-1.75-1.75V3.575h-2.85a.575.575 0 0 0-.575.575v1.318q.208.12.38.292m6.16.44-2.016-2.016V5.55c0 .359.29.65.65.65zm-10.554.275a.575.575 0 0 0-.575.575v8.8c0 .318.258.575.575.575h6a.575.575 0 0 0 .575-.575V10.2H9.306a1.75 1.75 0 0 1-1.75-1.75V6.475zm3.95.609V8.45c0 .359.291.65.65.65h1.366z"
                    })
                },
                J = (0, U.IU)("docOnDoc", Q, "default"),
                X = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, i.jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                ee = (0, U.IU)("integration", X, "default");
            var ea = t(769426),
                et = t(246866);
            let ei = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.45 2.17 11.09 15.43",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.125 5.05a2.875 2.875 0 1 1 5.75 0v3.6a2.875 2.875 0 1 1-5.75 0z"
                        }), (0, i.jsx)("path", {
                            d: "M5.604 10.891a.625.625 0 1 0-1.028.71 6.58 6.58 0 0 0 4.799 2.82v1.929H5.95a.625.625 0 1 0 0 1.25h8.1a.625.625 0 0 0 0-1.25h-3.425v-1.93a6.58 6.58 0 0 0 4.799-2.818.625.625 0 1 0-1.029-.71A5.33 5.33 0 0 1 10 13.2a5.33 5.33 0 0 1-4.396-2.309"
                        })]
                    })
                },
                en = (0, U.IU)("microphoneFill", ei, "fill");
            var eo = t(625611);
            let es = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.62 15.25 14.5",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.5 8.875c1.174 0 2.125.951 2.125 2.125v5a2.125 2.125 0 0 1-2.125 2.125H12A2.125 2.125 0 0 1 9.875 16v-5c0-1.174.951-2.125 2.125-2.125zm-3.5 1.25a.875.875 0 0 0-.875.875v5c0 .483.392.875.875.875h3.5a.875.875 0 0 0 .875-.875v-5a.875.875 0 0 0-.875-.875z"
                        }), (0, i.jsx)("path", {
                            d: "M15.5 3.625c1.174 0 2.125.951 2.125 2.125v2.63a3.4 3.4 0 0 0-1.25-.64V5.75a.875.875 0 0 0-.875-.875h-11a.875.875 0 0 0-.875.875v7.5c0 .483.392.875.875.875h4.125v1.25H4.5a2.125 2.125 0 0 1-2.125-2.125v-7.5c0-1.174.951-2.125 2.125-2.125z"
                        })]
                    })
                },
                er = (0, U.IU)("rectangleOnRectangleWide", es, "default"),
                el = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M9.938 7.313a2.625 2.625 0 1 0 0 5.25 2.625 2.625 0 0 0 0-5.25"
                        }), (0, i.jsx)("path", {
                            d: "M10 4.875a5.125 5.125 0 1 0 0 10.25 5.125 5.125 0 0 0 0-10.25M6.125 10a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                ec = (0, U.IU)("target", el, "default"),
                ed = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.01 0.64 17.97 18.67",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            fill: "#fff",
                            d: "M12.266.69c.576-.049 1.048-.07 1.486.029.462.105.819.328 1.204.607h.001l3.038 2.135.012.008.334.248c.114.09.224.186.312.288.248.286.33.599.33.937v11.714l-.005.167c-.019.397-.116.837-.433 1.197-.368.418-.9.579-1.461.619h-.009l-11.055.668h-.01c-.375.018-.758.008-1.12-.123a1.9 1.9 0 0 1-.72-.479l-.189-.216-.003-.006-2.239-2.905-.006-.008c-.396-.527-.648-1.02-.705-1.597l-.012-.254V3.307c0-.4.088-.861.388-1.246.316-.404.785-.622 1.332-.67h.01z"
                        }), (0, i.jsx)("path", {
                            fill: "#000",
                            d: "M12.32 1.437c1.17-.1 1.47-.032 2.205.501l3.039 2.136c.5.367.668.467.668.867v11.715c0 .734-.267 1.168-1.202 1.234l-11.055.667c-.702.034-1.036-.066-1.404-.533L2.333 15.12c-.4-.534-.567-.934-.567-1.401V3.306c0-.6.267-1.101 1.035-1.168zm4.241 3.871-10.854.634c-.4.034-.534.235-.534.668v9.945c0 .535.267.735.868.702l10.388-.601c.6-.033.668-.401.668-.835V5.942c0-.433-.167-.667-.536-.634m-1.134 1.836c.066.3 0 .601-.301.635l-.501.1v7.342c-.434.233-.835.367-1.169.367-.534 0-.668-.168-1.068-.668L9.113 9.78v4.973l1.036.233c0 .008-.005.6-.836.6l-2.303.135c-.067-.134 0-.468.233-.535l.602-.167V8.446L7.01 8.38c-.067-.3.1-.734.567-.768l2.472-.166 3.407 5.206V8.046l-.868-.1c-.067-.367.2-.635.534-.668zm-2.705-4.772-9.153.668c-.333.033-.4.2-.267.333l1.303 1.035c.534.433.735.4 1.737.333l9.452-.567c.2 0 .034-.2-.033-.233l-1.57-1.136c-.301-.233-.702-.5-1.47-.433"
                        })]
                    })
                },
                eu = (0, U.IU)("notion", ed, "default"),
                eg = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.5 0.99 17 18.01",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            fill: "#000",
                            d: "M3.345 15.902c-.307-.003-.58-.083-.792-.285l-.001-.001-.07-.075a1.1 1.1 0 0 1-.258-.716L2.22 3.685c0-.644.534-1.223 1.165-1.263l10.917-.688q.035-.003.071-.003a1.03 1.03 0 0 1 .797.368c.164.194.253.441.253.709v.285s.007.233-.22.249l.001.001-10.041.641c-.737.047-1.335.697-1.335 1.45l-.005 10.298c-.007.17-.145.17-.258.17z"
                        }), (0, i.jsx)("path", {
                            fill: "#000",
                            d: "m17.784 16.765-.003.05a.82.82 0 0 1-.647.737l-.02.002-11.647.72H5.43a.93.93 0 0 1-.603-.26.97.97 0 0 1-.295-.681V5.455a.82.82 0 0 1 .707-.747l.029-.004L16.92 3.96l.055-.002a.796.796 0 0 1 .774.583q.025.09.031.185z"
                        }), (0, i.jsx)("path", {
                            fill: "#fff",
                            d: "M18.5 4.786c0-.439-.169-.842-.477-1.136a1.5 1.5 0 0 0-1.142-.414l-.598.037c-.15.004-.143-.113-.143-.113v-.352c0-.51-.197-.98-.555-1.322a1.74 1.74 0 0 0-1.328-.482l-10.919.688C2.325 1.756 1.5 2.651 1.5 3.686l.002 11.14c0 .51.197.98.555 1.322.33.317.757.488 1.214.488l.4-.007c.131 0 .153.062.153.178v.57c0 .457.179.879.5 1.186.296.284.68.437 1.089.437l.048-.001.024.001.108-.003 11.502-.71a2 2 0 0 0 .15-.018c.698-.087 1.254-.714 1.254-1.437l-.002-.007.003-.06zM3.345 15.902c-.307-.003-.58-.083-.792-.285l-.001-.001-.07-.075a1.1 1.1 0 0 1-.258-.716L2.22 3.685c0-.644.534-1.223 1.165-1.263l10.917-.688q.035-.003.071-.003a1.03 1.03 0 0 1 .797.368c.164.194.253.441.253.709v.285s.007.233-.22.249l.001.001-10.041.641c-.737.047-1.335.697-1.335 1.45l-.005 10.298c-.007.17-.145.17-.258.17zm14.443.863-.003.05a.82.82 0 0 1-.647.737l-.02.002-11.647.719h-.036a.93.93 0 0 1-.603-.259.97.97 0 0 1-.294-.681l-.002-.032V5.505l.002-.05a.82.82 0 0 1 .706-.747q.015-.001.029-.004l11.652-.744.055-.002a.796.796 0 0 1 .774.583q.025.09.031.185v7.698l.003 4.34"
                        }), (0, i.jsx)("path", {
                            fill: "#fff",
                            fillRule: "evenodd",
                            d: "m16.11 16.391-9.75.579c-.4.028-.752-.11-.741-.642v-8.29c0-.284.23-.466.483-.48L16.24 6.94a.427.427 0 0 1 .46.432v8.304c0 .304-.074.695-.587.715z",
                            clipRule: "evenodd"
                        }), (0, i.jsx)("path", {
                            fill: "#000",
                            d: "M8.639 10.072c-.477.03-.638.4-.638.97v.101c-.057.014-.104.026-.162.03-.343.022-.59-.263-.591-.773-.001-.78.684-1.515 1.99-1.598 1.162-.074 1.906.5 1.907 1.51 0 .76-.618 1.3-1.227 1.47 1.143.057 1.62.707 1.622 1.538.001 1.421-1.017 2.226-2.59 2.326l-.038.002c-1.182.075-2.011-.383-2.012-1.173 0-.45.323-.831.81-.862.037-.003.075.005.113.002.097.805.63 1.101 1.164 1.068.515-.033.876-.387.876-.887v-.02c0-.781-.64-.82-1.602-.859l-.153-.931c.896-.168 1.343-.466 1.342-1.006 0-.58-.315-.941-.81-.91h-.001zm4.297-.384c-.953.281-1.163-.146-1.059-.593a36 36 0 0 0 2.62-.797l.007 5.995 1.038.154c0 .39-.218.634-.609.66-.324.02-1.077.048-1.439.07-.562.036-1.59.122-1.59.122a.7.7 0 0 1-.04-.228c0-.19.077-.386.324-.471l.752-.248z"
                        })]
                    })
                },
                em = (0, U.IU)("notionCalendar", eg, "default"),
                ef = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.28 1.8 17.44 16.4",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)("g", {
                            className: "logo-light-mode",
                            children: [(0, i.jsx)("path", {
                                fill: "#fff",
                                fillRule: "evenodd",
                                d: "M16.031 1.912c.726-.204 1.4-.121 1.91.24l.106.08.001.001.111.1.005.005.095.1.006.005.083.104.072.103c.33.511.384 1.158.17 1.729l.002.003-.012.03-5.332 12.716c-.221.533-.631.953-1.206 1.049l-.006.003-.008.002-.11.011h-.002c-.577.045-1.099-.249-1.485-.628l-1.692-1.422-1.1 1.417v.001l-.01.014-.002.004-.03.065-.014-.014c-.733.886-2.156.56-2.445-.532l-.002-.002-.003-.015-.02-.097-.001-.002-.001-.008-.882-4.982L1.822 9.67l-.008-.01c-.373-.373-.62-.89-.505-1.447l.003-.013.021-.086.003-.01.064-.172V7.93l.078-.146c.198-.326.522-.554.878-.684l13.34-5.074.177-.064.001-.001zM1.382 8.126l-.019-.01h-.001z",
                                clipRule: "evenodd"
                            }), (0, i.jsx)("path", {
                                fill: "#000",
                                fillRule: "evenodd",
                                d: "M15.957 2.616c1.569-.624 2.328.545 1.949 1.465l-5.32 12.687c-.332.804-1.045.804-1.663.186L8.75 15.13a.14.14 0 0 0-.204.018l-1.498 1.925a.69.69 0 0 1-1.225-.304l-.908-5.147a.2.2 0 0 0-.064-.116L2.327 9.069c-.49-.49-.34-1.063.174-1.327zm.874 1.295a.338.338 0 0 0-.444-.432l-8.8 3.556-4.118 1.603 2.57 2.232c2.968-1.752 5.354-3.759 8.065-5.411.227-.139.427.138.23.317-.628.572-1.276 1.164-1.427 1.308-.312.298-3.885 3.277-3.885 3.277l-1.85 1.524c.38.57 3.7 3.732 4.469 4.027 1.97-4.259 3.757-8.202 5.19-12",
                                clipRule: "evenodd"
                            })]
                        }), (0, i.jsxs)("g", {
                            className: "logo-dark-mode",
                            children: [(0, i.jsx)("path", {
                                fill: "#fff",
                                fillRule: "evenodd",
                                d: "M16.032 1.912c.726-.204 1.4-.121 1.91.24l.106.08.001.001.111.1.005.005.095.1.006.005.083.104.072.103c.33.511.384 1.158.169 1.729l.003.003-.012.03-5.332 12.716c-.221.533-.631.953-1.206 1.049l-.006.003-.009.002-.109.011h-.002c-.577.045-1.099-.249-1.485-.628L8.74 16.143l-1.1 1.417v.001l-.01.014-.002.004-.03.065-.014-.014c-.733.886-2.156.56-2.445-.532l-.002-.002-.003-.015-.02-.097-.002-.002v-.008l-.882-4.982L1.823 9.67l-.008-.01c-.373-.373-.62-.89-.505-1.447l.003-.013.021-.086.003-.01.064-.172V7.93l.078-.146c.198-.326.522-.554.878-.684l13.34-5.074.177-.064.001-.001zM1.383 8.126l-.019-.01h-.002z",
                                clipRule: "evenodd"
                            }), (0, i.jsx)("path", {
                                fill: "#000",
                                fillRule: "evenodd",
                                d: "M15.958 2.616c1.569-.624 2.328.545 1.949 1.465l-5.32 12.687c-.332.804-1.045.804-1.663.186L8.751 15.13a.14.14 0 0 0-.204.018L7.05 17.072a.69.69 0 0 1-1.225-.304l-.908-5.147a.2.2 0 0 0-.064-.116L2.327 9.069c-.49-.49-.34-1.063.174-1.327zm.874 1.295a.338.338 0 0 0-.444-.432l-8.8 3.556L3.47 8.638l2.57 2.232c2.968-1.752 5.354-3.759 8.065-5.411.227-.139.426.138.23.317-.628.572-1.276 1.164-1.427 1.308-.312.298-3.885 3.277-3.885 3.277l-1.85 1.524c.38.57 3.699 3.732 4.469 4.027 1.97-4.259 3.757-8.202 5.19-12",
                                clipRule: "evenodd"
                            })]
                        })]
                    })
                },
                ep = (0, U.IU)("notionMail", ef, "default");
            var ev = t(671167);
            let e_ = {
                width: 22,
                height: 22,
                fill: "currentColor"
            };

            function eb(e, a) {
                return { ...e,
                    links: e.links.map(e => ({ ...e,
                        icon: void 0,
                        palette: void 0,
                        description: void 0,
                        variant: "mobile" === a ? void 0 : e.variant
                    }))
                }
            }

            function eh({
                navStrings: e,
                deviceType: a,
                experiments: t
            }) {
                let i = function({
                        navStrings: e,
                        experiments: a = {}
                    }) {
                        var t, i;
                        let n = {
                                id: "globalNavigation.notionAI",
                                href: o._j.aiProduct,
                                label: e.newItems.notionAI,
                                description: e.newLabels.notionAIDescription,
                                trackingLabel: "notion_ai",
                                icon: $(e_),
                                palette: "brown",
                                gridColumn: 1,
                                gridRow: 2
                            },
                            s = {
                                id: "globalNavigation.product.agents",
                                href: (null === (t = a.agents) || void 0 === t ? void 0 : t.href) ? ? o._j.customAgents,
                                label: e.newItems.agents,
                                description: e.newLabels.agentsDescription,
                                trackingLabel: "agents",
                                icon: q(e_),
                                palette: "orange",
                                gridColumn: 1,
                                gridRow: 3,
                                badge: null === (i = a.agents) || void 0 === i ? void 0 : i.badge
                            },
                            r = {
                                id: "globalNavigation.product.enterpriseSearch",
                                href: o._j.enterpriseSearch,
                                label: e.newItems.enterpriseSearch,
                                description: e.newLabels.enterpriseSearchDescription,
                                trackingLabel: "enterprise_search",
                                icon: (0, et.v)(e_),
                                palette: "purple",
                                gridColumn: 1,
                                gridRow: 5
                            },
                            l = {
                                id: "globalNavigation.product.meetingNotes",
                                href: o._j.aiMeetingNotes,
                                label: e.newItems.meetingNotes,
                                description: e.newLabels.meetingNotesDescription,
                                trackingLabel: "meeting_notes",
                                icon: en(e_),
                                palette: "red",
                                gridColumn: 1,
                                gridRow: 4
                            },
                            c = {
                                id: "globalNavigation.product.projects",
                                href: o._j.projects,
                                label: e.newItems.projects,
                                description: e.newLabels.projectsDescription,
                                trackingLabel: "projects",
                                icon: ec(e_),
                                palette: "yellow",
                                gridColumn: 2,
                                gridRow: 4
                            },
                            d = {
                                id: "globalNavigation.product.docs",
                                href: o._j.docs,
                                label: e.newItems.docs,
                                description: e.newLabels.docsDescription,
                                trackingLabel: "docs",
                                icon: (0, eo.S)(e_),
                                palette: "teal",
                                gridColumn: 2,
                                gridRow: 3
                            },
                            u = {
                                id: "globalNavigation.product.knowledgeBase",
                                href: o._j.wikis,
                                label: e.newItems.knowledgeBase,
                                description: e.newLabels.knowledgeBaseDescription,
                                trackingLabel: "wikis",
                                icon: J(e_),
                                palette: void 0,
                                gridColumn: 2,
                                gridRow: 2
                            },
                            g = {
                                id: "globalNavigation.product.integrations",
                                href: o._j.integrations,
                                label: e.items.integrations,
                                description: e.newLabels.integrationsDescription,
                                trackingLabel: "integrations",
                                icon: ee(e_),
                                palette: "gray",
                                gridColumn: 3,
                                gridRow: 2,
                                variant: "emphasis"
                            },
                            m = {
                                id: "globalNavigation.features.security",
                                href: o._j.security,
                                label: e.newItems.security,
                                description: e.newLabels.securityDescription,
                                trackingLabel: "security",
                                icon: (0, ea.Y)(e_),
                                palette: "gray",
                                gridColumn: 3,
                                gridRow: 3
                            },
                            f = {
                                id: "globalNavigation.teams.engAndProduct",
                                href: o._j.engAndProduct,
                                label: e.newItems.engAndProduct,
                                trackingLabel: "eng_and_product",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            p = {
                                id: "globalNavigation.teams.design",
                                href: "/product/notion-for-design",
                                label: e.newItems.design,
                                trackingLabel: "design",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            v = {
                                id: "globalNavigation.teams.marketing",
                                href: (0, ev.d)("marketing"),
                                label: e.newItems.marketing,
                                trackingLabel: "marketing",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            _ = {
                                id: "globalNavigation.teams.it",
                                href: (0, ev.d)("ticketing"),
                                label: e.newItems.it,
                                trackingLabel: "it",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            b = {
                                id: "globalNavigation.teamSize.startups",
                                href: o._j.startups,
                                label: e.newItems.startups,
                                trackingLabel: "startups",
                                palette: void 0
                            },
                            h = {
                                id: "globalNavigation.teamSize.smallBusinesses",
                                href: o._j.teams,
                                label: e.newItems.smallBusinesses,
                                trackingLabel: "small_businesses",
                                palette: void 0
                            },
                            x = {
                                id: "globalNavigation.teamSize.enterprise",
                                href: o._j.enterprise,
                                label: e.newItems.enterprise,
                                trackingLabel: "enterprise",
                                palette: void 0
                            },
                            M = {
                                id: "globalNavigation.teamSize.education",
                                href: "/product/notion-for-education",
                                label: e.newItems.education,
                                trackingLabel: "education",
                                palette: void 0
                            },
                            N = {
                                id: "globalNavigation.solutions.personal",
                                href: o._j.personal,
                                label: e.items.personal,
                                trackingLabel: "personal",
                                palette: void 0
                            },
                            w = {
                                id: "globalNavigation.solutions.professional",
                                href: o._j.useCase,
                                label: e.newItems.professional,
                                trackingLabel: "professional",
                                palette: void 0
                            },
                            y = {
                                id: "globalNavigation.solutions.aiUseCases",
                                href: o._j.aiUseCases,
                                label: e.newItems.aiUseCases,
                                trackingLabel: "ai_use_cases",
                                palette: void 0
                            },
                            C = {
                                id: "globalNavigation.solutions.aiUseCasesWork",
                                href: `${o._j.aiUseCases}?${new URLSearchParams({type:"work"})}`,
                                label: e.newItems.aiUseCasesWork,
                                trackingLabel: "ai_use_cases_work",
                                palette: void 0
                            },
                            k = {
                                id: "globalNavigation.solutions.aiUseCasesLife",
                                href: `${o._j.aiUseCases}?${new URLSearchParams({type:"life"})}`,
                                label: e.newItems.aiUseCasesLife,
                                trackingLabel: "ai_use_cases_life",
                                palette: void 0
                            },
                            j = {
                                id: "globalNavigation.resources.templates",
                                href: o._j.templates,
                                label: e.mainItems.templates,
                                trackingLabel: "templates",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            S = {
                                id: "globalNavigation.resources.consultants",
                                href: o._j.exploreConsultants,
                                label: e.newItems.consultants,
                                trackingLabel: "consultants",
                                palette: void 0,
                                variant: "emphasis"
                            },
                            L = {
                                id: "globalNavigation.resources.customerStories",
                                href: o._j.customers,
                                label: e.newItems.customerStories,
                                trackingLabel: "customer_stories",
                                palette: void 0
                            },
                            I = {
                                id: "globalNavigation.resources.newReleases",
                                href: o._j.releases,
                                label: e.newItems.newReleases,
                                trackingLabel: "new_releases",
                                palette: void 0
                            },
                            T = {
                                id: "globalNavigation.resources.blog",
                                href: o._j.blog,
                                label: e.newItems.blog,
                                trackingLabel: "blog",
                                palette: void 0
                            },
                            B = {
                                id: "globalNavigation.resources.webinars",
                                href: o._j.webinars,
                                label: e.items.webinars,
                                trackingLabel: "webinars",
                                palette: void 0
                            },
                            A = {
                                id: "globalNavigation.resources.notionAcademy",
                                href: o.$e.notionAcademySite,
                                label: e.newItems.academy,
                                trackingLabel: "notion_academy",
                                palette: void 0
                            },
                            D = {
                                id: "globalNavigation.resources.productTours",
                                href: o._j.demos,
                                label: e.newItems.productTours,
                                trackingLabel: "product_tours",
                                palette: void 0
                            },
                            z = {
                                id: "globalNavigation.resources.helpCenter",
                                href: o._j.help,
                                label: e.newItems.help,
                                trackingLabel: "help_center",
                                palette: void 0
                            },
                            R = {
                                id: "globalNavigation.product.calendar",
                                href: o._j.calendar,
                                label: e.items.notionCalendar,
                                trackingLabel: "Calendar",
                                icon: em(e_),
                                palette: "black"
                            },
                            F = {
                                id: "globalNavigation.product.mail",
                                href: o._j.mail,
                                label: e.newItems.mail,
                                trackingLabel: "Mail",
                                icon: ep(e_),
                                palette: "black"
                            };
                        return {
                            notionAI: n,
                            meetingNotes: l,
                            projects: c,
                            agents: s,
                            docs: d,
                            security: m,
                            enterpriseSearch: r,
                            knowledgeBase: u,
                            engAndProduct: f,
                            design: p,
                            marketing: v,
                            it: _,
                            startups: b,
                            smbs: h,
                            education: M,
                            enterprise: x,
                            personal: N,
                            professional: w,
                            aiUseCases: y,
                            aiUseCasesWork: C,
                            aiUseCasesLife: k,
                            templates: j,
                            integrations: g,
                            consultants: S,
                            customerStories: L,
                            newReleases: I,
                            blog: T,
                            webinars: B,
                            academy: A,
                            productTours: D,
                            helpCenter: z,
                            notionCalendar: R,
                            notionMail: F,
                            notionLogo: {
                                id: "globalNavigation.product.logo",
                                href: o._j.product,
                                label: e.newMainItems.notion,
                                description: e.newLabels.logoDescription,
                                trackingLabel: "Notion Logo",
                                icon: eu({ ...e_,
                                    width: "1em",
                                    height: "1em"
                                }),
                                palette: "black"
                            },
                            download: {
                                id: "globalNavigation.product.download",
                                href: o._j.download,
                                trackingLabel: "download",
                                icon: er({ ...e_,
                                    width: "1em",
                                    height: "1em"
                                }),
                                palette: "black"
                            },
                            whatsNew: {
                                id: "globalNavigation.features.whatsNew",
                                href: o._j.releases,
                                label: e.items.whatsNewLinkText,
                                trackingLabel: "whats_new",
                                icon: K({ ...e_,
                                    width: "1em",
                                    height: "1em"
                                }),
                                palette: "black"
                            }
                        }
                    }({
                        navStrings: e,
                        experiments: t
                    }),
                    n = [{
                        links: [i.notionAI, i.agents, i.meetingNotes, i.enterpriseSearch, i.knowledgeBase, i.docs, i.projects, i.integrations, i.security].map(e => ({ ...e,
                            variant: void 0
                        }))
                    }],
                    s = [{
                        title: e.newLabels.aiFeatures,
                        links: [i.notionAI, i.agents, i.meetingNotes, i.enterpriseSearch].map(e => ({ ...e,
                            gridColumn: void 0,
                            gridRow: void 0
                        }))
                    }, {
                        title: e.newLabels.exploreUseCases,
                        links: [i.aiUseCasesWork, i.aiUseCasesLife]
                    }];
                return {
                    product: n,
                    ai: s,
                    solutions: [{
                        title: e.mainItems.teams,
                        links: [i.engAndProduct, i.design, i.marketing, i.it]
                    }, {
                        title: e.newLabels.companySize,
                        links: [i.startups, i.smbs, i.enterprise]
                    }, {
                        title: e.newLabels.useCases,
                        links: [i.education, i.personal, i.professional, i.aiUseCases]
                    }].map(e => eb(e, a)),
                    resources: [{
                        title: e.mainItems.browse,
                        links: [i.templates, i.consultants, i.integrations]
                    }, {
                        title: e.newLabels.discover,
                        links: [i.newReleases, i.customerStories, i.blog, i.webinars]
                    }, {
                        title: e.mainItems.learn,
                        links: [i.academy, i.productTours, i.helpCenter]
                    }].map(e => eb(e, a)),
                    productLandingPages: [i.notionCalendar, i.notionMail],
                    productLogo: i.notionLogo,
                    download: i.download,
                    whatsNew: i.whatsNew
                }
            }

            function ex(e, a = {}) {
                let t = e.gridColumn && e.gridRow ? {
                    gridColumn: e.gridColumn,
                    gridRow: e.gridRow
                } : void 0;
                return (0, i.jsx)(F.f6, {
                    theme: "twentytwentysix",
                    palettes: e.palette,
                    children: (0, i.jsxs)(A.LY, {
                        href: e.href,
                        as: g(),
                        width: a.width,
                        prefetch: !1,
                        variant: a.variant || e.variant,
                        className: a.className,
                        style: t,
                        onClick: () => (0, f._g)({
                            name: "global_navigation_dropdown",
                            label: e.trackingLabel,
                            href: e.href
                        }),
                        children: [e.icon ? (0, i.jsx)(A.Fe, {
                            children: e.icon
                        }) : void 0, (0, i.jsxs)(A.bx, {
                            children: [e.badge ? (0, i.jsxs)("span", {
                                className: S.badgeContainer,
                                children: [e.label, e.badge]
                            }) : null, e.badge ? null : e.label]
                        }), e.description ? (0, i.jsx)(A.lc, {
                            children: e.description
                        }) : void 0]
                    })
                }, e.id)
            }

            function eM({
                children: e,
                className: a
            }) {
                return (0, i.jsx)(D.y, {
                    as: "h2",
                    className: a,
                    variant: "navigationHeading",
                    children: e
                })
            }

            function eN({
                navLink: e,
                icon: a
            }) {
                var t, o;
                let s = function({
                        locale: e,
                        skip: a = !1
                    }) {
                        let [t] = (0, n.r5)(() => a ? Promise.resolve(null) : W({
                            locale: e
                        }), [e, a]);
                        return t
                    }({
                        locale: (0, G.b)(),
                        skip: !(0, y.a)("(min-width: 1200px)")
                    }),
                    r = (0, i.jsx)(B.u, {
                        href: e.href,
                        arrowType: "right",
                        as: g(),
                        prefetch: !1,
                        colorTheme: "primary",
                        onClick: () => (0, f._g)({
                            name: "global_navigation_dropdown",
                            label: e.trackingLabel,
                            href: e.href
                        }),
                        children: e.label
                    });
                return (0, i.jsxs)("div", {
                    className: d()(S.footerWhatsNewContainer, {
                        [S.visible]: "resolved" === s.status
                    }),
                    children: [(0, i.jsx)(T.z, {
                        iconSize: 20,
                        iconFrameSize: 20,
                        isFilled: !1,
                        "aria-hidden": !0,
                        className: S.footerIcon,
                        children: a
                    }), (0, i.jsxs)("span", {
                        className: d()(S.footerWhatsNewText, {
                            [S.visible]: !!(null === (t = s.value) || void 0 === t ? void 0 : t.byline)
                        }),
                        children: [null === (o = s.value) || void 0 === o ? void 0 : o.byline, ". "]
                    }), r]
                })
            }

            function ew() {
                if ("on" === (0, P.d)("marketing_agents_homepage_26")) return {
                    agents: {
                        href: o._j.agents,
                        badge: (0, i.jsx)(E.Ct, {
                            variant: "tertiary-rounded",
                            messageType: "new",
                            className: S.badge
                        })
                    }
                }
            }

            function ey({
                className: e,
                dropdownName: a
            }) {
                let t = (0, s.YB)(),
                    {
                        navStrings: n
                    } = (0, j.Q)(),
                    o = eh({
                        navStrings: n,
                        deviceType: "desktop",
                        experiments: ew()
                    }),
                    r = o[a].map(e => {
                        if (!("title" in e) || void 0 === e.title) return e.links.map(e => ex(e));
                        let {
                            title: a,
                            links: t
                        } = e;
                        return (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(eM, {
                                className: S.desktopDropDownNavigationHeading,
                                children: a
                            }), t.map(e => ex(e))]
                        }, a)
                    }),
                    l = o.productLandingPages.map(e => ex(e)),
                    c = ex(o.productLogo, {
                        width: "fitContent",
                        variant: "emphasis"
                    }),
                    u = (0, i.jsxs)(R.T, {
                        background: "surfaceNeutral",
                        className: S.banner,
                        children: [(0, i.jsx)("div", {
                            className: S.bannerStart,
                            children: c
                        }), (0, i.jsx)(z.K, {
                            flexDirection: "column",
                            className: S.bannerEnd,
                            children: l
                        })]
                    }),
                    m = (0, i.jsx)("div", {
                        className: S.bannerAi,
                        children: (0, i.jsx)(V.E, {
                            src: H.Z.shared.navigation.aiGroupPng,
                            alt: "",
                            role: "presentation",
                            height: "161",
                            width: "192",
                            loading: "lazy"
                        })
                    }),
                    p = t.formatMessage({
                        id: "globalNavigation.features.downloads",
                        defaultMessage: "Download the <link>Notion App</link>",
                        description: "Navigation item for Downloading the Notion app, with link text that can be styled"
                    }, {
                        link: e => (0, i.jsx)(B.u, {
                            href: o.download.href,
                            arrowType: "right",
                            as: g(),
                            prefetch: !1,
                            colorTheme: "primary",
                            onClick: () => (0, f._g)({
                                name: "global_navigation_dropdown",
                                label: o.download.trackingLabel,
                                href: o.download.href
                            }),
                            children: e
                        })
                    }),
                    v = (0, i.jsxs)("div", {
                        className: S.footer,
                        children: [(0, i.jsx)(F.f6, {
                            theme: "twentytwentysix",
                            palettes: o.whatsNew.palette,
                            children: (0, i.jsx)(D.y, {
                                as: "div",
                                variant: "navigationCaption",
                                className: S.footerLeft,
                                children: (0, i.jsx)(eN, {
                                    navLink: o.whatsNew,
                                    icon: o.whatsNew.icon
                                })
                            })
                        }), (0, i.jsx)(F.f6, {
                            theme: "twentytwentysix",
                            palettes: o.download.palette,
                            children: (0, i.jsxs)(D.y, {
                                as: "div",
                                variant: "navigationCaption",
                                className: S.footerRight,
                                children: [(0, i.jsx)(T.z, {
                                    iconSize: 20,
                                    iconFrameSize: 20,
                                    isFilled: !1,
                                    "aria-hidden": !0,
                                    className: S.footerIcon,
                                    children: o.download.icon
                                }), p]
                            })
                        })]
                    });
                return (0, i.jsx)(F.f6, {
                    theme: "twentytwentysix",
                    children: (0, i.jsxs)("div", {
                        className: d()(e, S.dropdownGrid),
                        children: ["product" === a ? u : void 0, "ai" === a ? m : void 0, r, "product" === a ? v : void 0]
                    })
                })
            }

            function eC({
                className: e,
                dropdownName: a,
                navigationLinks: t
            }) {
                let n = t[a].map(e => {
                    if (!("title" in e) || void 0 === e.title) return e.links.map(e => ex(e));
                    let {
                        title: a,
                        links: t
                    } = e;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(eM, {
                            className: S.mobileDropDownNavigationHeading,
                            children: a
                        }), t.map(e => ex(e))]
                    }, a)
                });
                return (0, i.jsx)("div", {
                    className: d()(e, S.mobileDropdownContent),
                    children: (0, i.jsx)("div", {
                        className: S.mobileDropdownSection,
                        children: n
                    })
                })
            }
            let ek = ["product", "ai", "solutions", "resources"];

            function ej({
                clickedDropdown: e,
                openDropdownId: a,
                onDropdownChange: t
            }) {
                let {
                    navStrings: n
                } = (0, j.Q)(), s = null === e, r = (0, m.useMemo)(() => {
                    let e = ek.map(e => [e, a => {
                        t({ ...a,
                            id: e
                        })
                    }]);
                    return (0, k.m8)(e)
                }, [t]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [ek.map(e => (0, i.jsx)(I, {
                        id: e,
                        isOpen: e === a,
                        enableHover: s,
                        trigger: (0, i.jsx)(x.Z, {
                            variant: "sans-100-medium",
                            children: n.newMainItems[e]
                        }),
                        onOpenChange: r[e],
                        children: (0, i.jsx)(ey, {
                            dropdownName: e
                        })
                    }, e)), (0, i.jsx)(g(), {
                        prefetch: !1,
                        href: o._j.enterprise,
                        className: S.link,
                        onClick: () => {
                            (0, f._g)({
                                name: "desktop_topbar_nav_item",
                                label: "Enterprise",
                                href: o._j.enterprise
                            })
                        },
                        onMouseEnter: () => {
                            (0, f.c)({
                                name: "global_navigation_link",
                                label: "Enterprise",
                                href: o._j.enterprise
                            })
                        },
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-100-medium",
                            children: n.newMainItems.enterprise
                        })
                    }), (0, i.jsx)(g(), {
                        prefetch: !1,
                        href: o._j.pricing,
                        className: S.link,
                        onClick: () => {
                            (0, f._g)({
                                name: "desktop_topbar_nav_item",
                                label: "Pricing",
                                href: o._j.pricing
                            })
                        },
                        onMouseEnter: () => {
                            (0, f.c)({
                                name: "global_navigation_link",
                                label: "Pricing",
                                href: o._j.pricing
                            })
                        },
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-100-medium",
                            children: n.newMainItems.pricing
                        })
                    })]
                })
            }
            var eS = t(9534);

            function eL({
                activeMobileSubnav: e,
                setActiveMobileSubnav: a,
                closeMobileMenu: t
            }) {
                let {
                    navStrings: n
                } = (0, j.Q)(), s = eh({
                    navStrings: n,
                    deviceType: "mobile",
                    experiments: ew()
                }), r = s.productLandingPages.map(e => ex(e)), l = ex(s.productLogo, {
                    width: "fitContent",
                    variant: "emphasis",
                    className: S.navItemHideCaptionMobile
                }), c = (0, i.jsxs)(R.T, {
                    background: "surfaceNeutral",
                    className: S.banner,
                    children: [(0, i.jsx)("div", {
                        className: S.bannerStart,
                        children: l
                    }), (0, i.jsx)(z.K, {
                        flexDirection: "column",
                        className: S.bannerEnd,
                        children: r
                    })]
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: S.mobileMenuSection,
                        children: [(0, i.jsx)("button", {
                            className: d()(S.mobileMenuLink, {
                                [S.inactiveLink]: void 0 !== e && "product" !== e
                            }),
                            onClick: () => a("product" === e ? void 0 : "product"),
                            children: (0, i.jsxs)("div", {
                                className: S.mobileMenuLinkContent,
                                children: [(0, i.jsx)(x.Z, {
                                    variant: "sans-400-semibold",
                                    children: n.newMainItems.product
                                }), (0, i.jsx)("span", {
                                    className: d()(S.chevron, {
                                        [S.chevronOpen]: "product" === e
                                    }),
                                    children: (0, i.jsx)(L._, {})
                                })]
                            })
                        }), "product" === e ? (0, i.jsx)("div", {
                            className: S.mobileSubmenu,
                            children: (0, i.jsx)(eC, {
                                dropdownName: "product",
                                className: S.mobileDropdownSectionWithIcons,
                                navigationLinks: s
                            })
                        }) : void 0]
                    }), (0, i.jsxs)("div", {
                        className: S.mobileMenuSection,
                        children: [(0, i.jsx)("button", {
                            className: d()(S.mobileMenuLink, {
                                [S.inactiveLink]: void 0 !== e && "ai" !== e
                            }),
                            onClick: () => a("ai" === e ? void 0 : "ai"),
                            children: (0, i.jsxs)("div", {
                                className: S.mobileMenuLinkContent,
                                children: [(0, i.jsx)(x.Z, {
                                    variant: "sans-400-semibold",
                                    children: n.newMainItems.ai
                                }), (0, i.jsx)("span", {
                                    className: d()(S.chevron, {
                                        [S.chevronOpen]: "ai" === e
                                    }),
                                    children: (0, i.jsx)(L._, {})
                                })]
                            })
                        }), "ai" === e ? (0, i.jsx)("div", {
                            className: S.mobileSubmenu,
                            children: (0, i.jsx)(eC, {
                                dropdownName: "ai",
                                className: S.mobileDropdownSectionWithIcons,
                                navigationLinks: s
                            })
                        }) : void 0]
                    }), (0, i.jsxs)("div", {
                        className: S.mobileMenuSection,
                        children: [(0, i.jsx)("button", {
                            className: d()(S.mobileMenuLink, {
                                [S.inactiveLink]: void 0 !== e && "solutions" !== e
                            }),
                            onClick: () => a("solutions" === e ? void 0 : "solutions"),
                            children: (0, i.jsxs)("div", {
                                className: S.mobileMenuLinkContent,
                                children: [(0, i.jsx)(x.Z, {
                                    variant: "sans-400-semibold",
                                    children: n.newMainItems.solutions
                                }), (0, i.jsx)("span", {
                                    className: d()(S.chevron, {
                                        [S.chevronOpen]: "solutions" === e
                                    }),
                                    children: (0, i.jsx)(L._, {})
                                })]
                            })
                        }), "solutions" === e ? (0, i.jsx)("div", {
                            className: S.mobileSubmenu,
                            children: (0, i.jsx)(eC, {
                                dropdownName: "solutions",
                                className: S.mobileDropdownSectionWithoutIcons,
                                navigationLinks: s
                            })
                        }) : void 0]
                    }), (0, i.jsxs)("div", {
                        className: S.mobileMenuSection,
                        children: [(0, i.jsx)("button", {
                            className: d()(S.mobileMenuLink, {
                                [S.inactiveLink]: void 0 !== e && "resources" !== e
                            }),
                            onClick: () => a("resources" === e ? void 0 : "resources"),
                            children: (0, i.jsxs)("div", {
                                className: S.mobileMenuLinkContent,
                                children: [(0, i.jsx)(x.Z, {
                                    variant: "sans-400-semibold",
                                    children: n.newMainItems.resources
                                }), (0, i.jsx)("span", {
                                    className: d()(S.chevron, {
                                        [S.chevronOpen]: "resources" === e
                                    }),
                                    children: (0, i.jsx)(L._, {})
                                })]
                            })
                        }), "resources" === e ? (0, i.jsx)("div", {
                            className: S.mobileSubmenu,
                            children: (0, i.jsx)(eC, {
                                dropdownName: "resources",
                                className: S.mobileDropdownSectionWithoutIcons,
                                navigationLinks: s
                            })
                        }) : void 0]
                    }), (0, i.jsx)(g(), {
                        prefetch: !1,
                        href: o._j.enterprise,
                        className: d()(S.mobileMenuLink, {
                            [S.inactiveLink]: void 0 !== e
                        }),
                        onClick: () => {
                            t(), (0, f._g)({
                                name: "mobile_topbar_nav_item",
                                label: "Enterprise",
                                href: o._j.enterprise
                            })
                        },
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-400-semibold",
                            children: n.newMainItems.enterprise
                        })
                    }), (0, i.jsx)(g(), {
                        prefetch: !1,
                        href: o._j.pricing,
                        className: d()(S.mobileMenuLink, {
                            [S.inactiveLink]: void 0 !== e
                        }),
                        onClick: () => {
                            t(), (0, f._g)({
                                name: "mobile_topbar_nav_item",
                                label: "Pricing",
                                href: o._j.pricing
                            })
                        },
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-400-semibold",
                            children: n.newMainItems.pricing
                        })
                    }), c]
                })
            }

            function eI({
                onClick: e
            }) {
                let a = (0, s.YB)(),
                    t = (0, M.F)(),
                    n = (0, m.useContext)(C.kV);
                return (0, i.jsx)(l.z, {
                    variant: "secondary",
                    href: (0, eS.G1)(o._j.login, n),
                    suppressHrefLocale: !0,
                    prefetch: !1,
                    className: S.mobileActionButton,
                    onClick: () => {
                        (0, f.t)(t, {
                            name: "mobile_nav_cta",
                            label: "Log in",
                            href: o._j.login
                        }), null == e || e()
                    },
                    children: a.formatMessage({
                        id: "global.login",
                        description: "CTA text prompting users to log in to Notion",
                        defaultMessage: "Log in"
                    })
                })
            }

            function eT({
                onClick: e
            }) {
                let a = (0, M.F)(),
                    t = (0, s.YB)();
                return (0, i.jsx)(C.f6, {
                    value: "blue",
                    children: (0, i.jsx)(l.z, {
                        variant: "primary",
                        href: o._j.download,
                        className: S.mobileActionButton,
                        onClick: () => {
                            (0, f.t)(a, {
                                name: "mobile_nav_cta",
                                label: "Download app",
                                href: "#"
                            }), null == e || e()
                        },
                        children: t.formatMessage({
                            id: "global.downloadApp",
                            defaultMessage: "Download app",
                            description: "CTA text prompting users to download the Notion app"
                        })
                    })
                })
            }

            function eB({
                mobileMenuOpen: e,
                closeMobileMenu: a,
                HeaderCTA: t = eI,
                HeaderSecondaryCTA: n = eT
            }) {
                let [o, s] = (0, m.useState)(void 0), r = (0, m.useRef)(null), [l, c] = (0, m.useState)(e), [u, g] = (0, m.useState)(!1);
                return ((0, m.useEffect)(() => {
                    e ? (c(!0), requestAnimationFrame(() => {
                        g(!0)
                    })) : g(!1)
                }, [e]), l || e) ? (0, i.jsx)("div", {
                    className: d()(S.mobileMenu, {
                        [S.open]: u,
                        [S.close]: !e && l
                    }),
                    onTransitionEnd: a => {
                        e || c(!1)
                    },
                    children: (0, i.jsxs)("div", {
                        ref: r,
                        className: S.mobileMenuContent,
                        children: [(0, i.jsx)("div", {
                            className: S.mobileMenuLinks,
                            children: (0, i.jsx)(eL, {
                                activeMobileSubnav: o,
                                setActiveMobileSubnav: s,
                                closeMobileMenu: a
                            })
                        }), (0, i.jsxs)("div", {
                            className: S.mobileMenuActions,
                            children: [(0, i.jsx)(n, {
                                onClick: a
                            }), (0, i.jsx)(t, {
                                onClick: a
                            })]
                        })]
                    })
                }) : null
            }
            var eA = t(304298),
                eD = t.n(eA),
                ez = t(882374),
                eR = t(198173),
                eF = t(948486),
                eH = t(367093);

            function eE(e) {
                try {
                    var a;
                    let t = null === (a = window) || void 0 === a ? void 0 : a.google;
                    t ? e(t) : eH.cM({
                        level: "warning",
                        from: "googleOneTapLogin",
                        type: "googleOneTapLibraryNotFound",
                        error: {
                            message: "Please make sure you have the google onetap library installed"
                        }
                    })
                } catch (e) {
                    eH.cM({
                        level: "error",
                        from: "googleOneTapLogin",
                        type: "googleOneTapLibraryLoadError",
                        error: (0, eF.Ui)(e)
                    })
                }
            }
            var eV = function(e) {
                    let {
                        onCancel: a,
                        onSuccess: t,
                        googleAccountConfigs: n,
                        containerStyle: o
                    } = e;
                    if ((0, m.useEffect)(() => (eE(e => {
                            e.accounts.id.initialize({ ...n,
                                prompt_parent_id: "g_id_onload",
                                itp_support: !0
                            }), e.accounts.id.prompt(e => {
                                e.isSkippedMoment() && ["user_cancel", "tap_outside"].includes(e.getSkippedReason()) ? a() : e.isDismissedMoment() && ("credential_returned" === e.getDismissedReason() ? t() : a())
                            })
                        }), () => eE(e => {
                            e.accounts.id.cancel()
                        })), []), !o) return null; {
                        let a = {
                            position: "absolute",
                            ...e.containerStyle,
                            zIndex: 100
                        };
                        return (0, i.jsx)("div", {
                            id: "g_id_onload",
                            "data-prompt_parent_id": "g_id_onload",
                            "data-cancel_on_tap_outside": "false",
                            style: a
                        })
                    }
                },
                eP = t(282221),
                eW = t(293711),
                eG = t(447833);

            function eU() {
                return eG.a8 && "local" === eG.OB && ("undefined" != typeof document ? Number(new URL(document.baseURI).port) : void 0) !== 3e3
            }
            var eO = t(696014),
                e$ = t(583614);
            let eZ = ez.Ryn({
                accounts: ez.Ryn({
                    id: ez._4T()
                })
            });
            async function eq() {
                let e = `${eG.Ip}/api/v3/generateOnetapNonce`;
                try {
                    let a = await fetch(e, {
                        method: "POST",
                        credentials: "include",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({})
                    });
                    if (!a.ok) return;
                    return (await a.json()).nonce
                } catch (e) {
                    if (e instanceof TypeError) return;
                    throw e
                }
            }

            function eY({
                containerStyle: e
            }) {
                let [a, t] = (0, m.useState)(!1), [o, s] = (0, m.useState)(!1), [r, l] = (0, m.useState)(), c = (0, m.useCallback)(() => {
                    (0, eO.jl)().then(e => {
                        t(!e)
                    })
                }, []);
                (0, m.useEffect)(() => {
                    a && eq().then(e => {
                        e && l(e)
                    }).catch(() => {}).finally(() => {
                        s(!0)
                    })
                }, [a]);
                let d = (0, P.d)("marketing_google_onetap_load_timing");
                (0, P.d)("marketing_site_aa");
                let {
                    isMobile: u = !0
                } = (0, M.F)();
                (0, m.useEffect)(() => {
                    if (u || eU()) return;
                    let e = Reflect.get(window, "google");
                    ez.AsG(eZ, e).success && c()
                }, [c, u]),
                function(e, {
                    enabled: a = !0
                } = {}) {
                    (0, P.d)(e);
                    let {
                        getExperiment: t,
                        client: i
                    } = (0, e$.useStatsigClient)(), n = i.loadingStatus;
                    (0, m.useEffect)(() => {
                        a && "Ready" === n && "NoValues" !== t(e, {
                            disableExposureLog: !0
                        }).details.reason && t(e)
                    }, [a, e, t, n])
                }("marketing_site_aa_client_exposure_sean_test", {
                    enabled: !u
                });
                let [{
                    value: g
                }] = (0, n.r5)(async () => {
                    let e = await (0, eO.hh)();
                    return (0, eW.F9)(e)
                }, []), p = g ? `&${eR.J6}=${g}` : "";
                return u || eU() ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(eD(), {
                        src: "https://accounts.google.com/gsi/client",
                        strategy: "preload" === d || "afterInteractive" === d ? "afterInteractive" : "lazyOnload",
                        onLoad: () => {
                            c()
                        }
                    }), a && o ? (0, i.jsx)(eV, {
                        onCancel: () => {
                            f.TR({
                                actionType: "close"
                            })
                        },
                        onSuccess: () => {
                            f.TR({
                                actionType: "success"
                            })
                        },
                        googleAccountConfigs: {
                            client_id: eG.eq,
                            cancel_on_tap_outside: !1,
                            context: "use",
                            nonce: r,
                            callback: e => {
                                f.TR({
                                        actionType: "click"
                                    }),
                                    function(e, a) {
                                        let t = encodeURIComponent(document.location ? document.location.pathname : ""),
                                            i = document.location.pathname.includes("lp/business") || document.location.pathname.includes("lp/pm");
                                        window.location.href = `${eG.Ip}${eP.jb.googleOneTapRedirect}?code=${e}&frontPathName=${t}${i?"&trialName=perfmark":""}${a}`
                                    }(e.credential, p)
                            }
                        },
                        containerStyle: u ? void 0 : {
                            top: 42,
                            insetInlineEnd: -7,
                            transform: "scale(0.9)",
                            transformOrigin: "top right",
                            ...e
                        }
                    }) : null]
                })
            }

            function eK() {
                let e = (0, s.YB)(),
                    a = (0, m.useContext)(C.kV);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(eY, {
                        containerStyle: {
                            top: 62,
                            insetInlineEnd: 18
                        }
                    }), (0, i.jsx)(g(), {
                        prefetch: !1,
                        href: (0, eS.G1)(o._j.login, a),
                        className: S.link,
                        "data-analytics-name": "desktop_nav_cta",
                        "data-analytics-event": "click_cta",
                        "data-analytics-label": "Log in",
                        "data-analytics-href": o._j.login,
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-100-medium",
                            children: e.formatMessage({
                                id: "global.login",
                                description: "CTA text prompting users to log in to Notion",
                                defaultMessage: "Log in"
                            })
                        })
                    })]
                })
            }
            var eQ = t(663042);

            function eJ() {
                let e = (0, s.YB)(),
                    a = (0, m.useContext)(C.kV),
                    t = (0, eQ.A)();
                return (0, i.jsx)(l.z, {
                    href: (0, eS.G1)(o._j.signup, a),
                    suppressHrefLocale: !0,
                    "data-analytics-name": "desktop_nav_cta",
                    "data-analytics-event": "click_cta",
                    "data-analytics-label": t || "Get Notion free",
                    "data-analytics-href": o._j.signup,
                    children: (0, i.jsx)(x.Z, {
                        variant: "sans-100-medium",
                        className: S.noWrap,
                        children: t ? ? e.formatMessage({
                            id: "global.signup",
                            description: "CTA text prompting users to sign up for Notion",
                            defaultMessage: "Get Notion free"
                        })
                    })
                })
            }

            function eX({
                navigation: e = "complete",
                navCtaLocationVariant: a,
                navComboCtaVariant: t,
                HeaderCTA: n = eJ,
                HeaderSecondaryCTA: r = eK,
                MobileHeaderCTA: l,
                MobileHeaderSecondaryCTA: c
            }) {
                let u = (0, M.F)(),
                    p = (0, s.YB)(),
                    v = (0, C.Fg)(),
                    {
                        closeMobileMenu: _,
                        mobileMenuOpen: k,
                        mobileTriggerRef: j,
                        onMobileTriggerClick: L
                    } = function() {
                        let e = (0, w.useRouter)(),
                            a = (0, y.a)("(min-width: 1200px)"),
                            t = (0, m.useRef)(null),
                            [i, n] = (0, m.useState)(!1),
                            o = (0, m.useCallback)(() => {
                                n(e => {
                                    if (e) {
                                        var a;
                                        null === (a = t.current) || void 0 === a || a.focus()
                                    }
                                    return !1
                                })
                            }, []),
                            s = (0, m.useRef)(0),
                            r = (0, m.useCallback)(() => {
                                n(e => {
                                    let a = !e;
                                    if (a) {
                                        let e = "undefined" != typeof document ? document : null;
                                        s.current = (null == e ? void 0 : e.documentElement.scrollTop) ? ? 0
                                    }
                                    return a
                                })
                            }, []);
                        return (0, m.useEffect)(() => {
                            a && o()
                        }, [o, a]), (0, m.useEffect)(() => {
                            if (e) return e.events.on("routeChangeComplete", o), () => {
                                e.events.off("routeChangeComplete", o)
                            }
                        }, [e, o]), (0, m.useEffect)(() => {
                            let e = "undefined" != typeof document ? document : void 0;
                            e && !i && (e.documentElement.scrollTop = s.current)
                        }, [i]), {
                            closeMobileMenu: o,
                            mobileMenuOpen: i,
                            mobileTriggerRef: t,
                            onMobileTriggerClick: r
                        }
                    }(),
                    I = (0, m.useRef)(null),
                    T = (0, m.useRef)(null),
                    [B, A] = (0, m.useState)(!1),
                    [D, z] = (0, m.useState)(!1);
                (0, m.useLayoutEffect)(() => {
                    z("undefined" == typeof CSS || "function" != typeof CSS.supports || !CSS.supports("animation-timeline", "scroll()"))
                }, []), (0, m.useEffect)(() => {
                    D && window.scrollY > 0 && A(!0)
                }, [D]);
                let R = (0, m.useCallback)(e => {
                    e.length > 0 && A(!e[0].isIntersecting)
                }, []);
                (0, N.x)(D ? T : null, R, {
                    threshold: 0
                });
                let [F, H] = (0, m.useState)(!1), [E, V] = (0, m.useState)(null);
                (0, m.useEffect)(() => {
                    if (!D) return;
                    let e = document.querySelector(".isCampaignAgentsHomepageHero");
                    e && V(e)
                }, [D]);
                let P = (0, m.useCallback)(e => {
                    for (let a of e) H(!a.isIntersecting)
                }, []);
                (0, N.S)(E, P, {
                    rootMargin: "-64px 0px 0px 0px"
                });
                let [W, G] = (0, m.useState)(null), [U, O] = (0, m.useState)(null), $ = k || W ? "blue" : v.name, Z = (0, m.useCallback)(({
                    id: e,
                    isOpen: a,
                    wasClicked: t
                }) => {
                    if (G(a ? e : null), a && t) {
                        O(e);
                        return
                    }
                    a || U !== e || O(null)
                }, [U]), q = "control" !== t, Y = !q && ("buttons_swapped" === a || "buttons_swapped_max_width" === a), K = (0, i.jsx)("span", {
                    className: S.secondaryActions,
                    children: (0, i.jsx)(r, {})
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        ref: T,
                        className: S.scrollSentinel,
                        "aria-hidden": "true"
                    }), (0, i.jsx)("div", {
                        ref: I,
                        className: d()({
                            [S.globalNavigationWrapper]: !0,
                            [S.mobileMenuOpen]: k,
                            [S.stickyWrapper]: !0,
                            [S.isScrolled]: B,
                            [S.heroExitedFallback]: F,
                            [S.experimentNavLinksLeftAlign]: "max_width_nav_left" === a,
                            [S.experimentMaxWidth]: "max_width" === a || "max_width_nav_left" === a || "buttons_swapped_max_width" === a,
                            [S.experimentPaddingShift]: "padding_shift" === a,
                            [S.experimentComboCta]: q
                        }),
                        children: (0, i.jsxs)(C.f6, {
                            value: $,
                            children: [(0, i.jsx)("nav", {
                                className: d()(S.globalNavigation, {
                                    [S.isScrolled]: B
                                }),
                                "aria-label": p.formatMessage({
                                    id: "header.navigation",
                                    defaultMessage: "Main",
                                    description: "Accessible name for the main site navigation in the header"
                                }),
                                children: (0, i.jsxs)("div", {
                                    className: S.container,
                                    children: [(0, i.jsx)("div", {
                                        className: S.logoContainer,
                                        children: (0, i.jsx)(g(), {
                                            prefetch: !1,
                                            href: o._j.product,
                                            className: d()(S.logo, {
                                                [S.darkMode]: v.isDarkMode
                                            }),
                                            onClick: () => {
                                                (0, f._g)({
                                                    name: "desktop_topbar_nav_item",
                                                    label: "Notion Logo",
                                                    href: o._j.product
                                                })
                                            },
                                            "aria-label": p.formatMessage({
                                                id: "Header.notionLogo",
                                                defaultMessage: "Notion – Home",
                                                description: "Accessibility label for a Notion logo that links to the homepage"
                                            }),
                                            children: (0, i.jsx)(h.rH, {
                                                className: S.logoStickerized,
                                                fillColor: "var(--notion-logo-fill, var(--color-black))"
                                            })
                                        })
                                    }), "complete" === e ? (0, i.jsxs)("div", {
                                        className: S.links,
                                        children: [(0, i.jsx)(ej, {
                                            clickedDropdown: U,
                                            openDropdownId: W,
                                            onDropdownChange: Z
                                        }), "control" === t || "only_login_icon" === t ? (0, i.jsx)(g(), {
                                            prefetch: !1,
                                            href: o._j.contactSales,
                                            className: S.link,
                                            onClick: () => {
                                                (0, f.t)(u, {
                                                    name: "desktop_nav_cta",
                                                    label: "Request a demo",
                                                    href: o._j.contactSales
                                                })
                                            },
                                            children: (0, i.jsx)(x.Z, {
                                                variant: "sans-100-medium",
                                                children: p.formatMessage({
                                                    id: "global.requestDemo",
                                                    description: "CTA text prompting users to contact Notion's sales team",
                                                    defaultMessage: "Request a demo"
                                                })
                                            })
                                        }) : void 0]
                                    }) : null, "minimal" !== e ? (0, i.jsxs)("div", {
                                        className: S.actions,
                                        children: [Y ? null : K, (0, i.jsx)("span", {
                                            className: S.primaryCta,
                                            children: (0, i.jsx)(n, {})
                                        }), Y ? K : null, (0, i.jsx)("div", {
                                            className: S.mobileActions,
                                            children: (0, i.jsx)(b, {
                                                menuOpen: k,
                                                onClick: L,
                                                ref: j
                                            })
                                        })]
                                    }) : null]
                                })
                            }), (0, i.jsx)(eB, {
                                mobileMenuOpen: k,
                                closeMobileMenu: _,
                                HeaderCTA: l,
                                HeaderSecondaryCTA: c
                            })]
                        })
                    })]
                })
            }
            var e0 = t(346391);
            let e1 = {
                demo: {
                    buttonVariant: "simple",
                    className: d()(e0.contactSalesButton, e0.ghostButton),
                    wrapInTypography: !0,
                    analyticsLabel: "Request a demo",
                    message: {
                        id: "global.requestDemo",
                        description: "CTA text prompting users to contact Notion's sales team",
                        defaultMessage: "Request a demo"
                    }
                },
                contact: {
                    buttonVariant: "simple",
                    className: d()(e0.contactSalesButton, e0.ghostButton),
                    wrapInTypography: !0,
                    analyticsLabel: "Contact sales",
                    message: {
                        id: "nav.buttons.contactSales",
                        description: "The name of a call to action button in the main site navigation",
                        defaultMessage: "Contact sales"
                    }
                },
                primary: {
                    buttonVariant: "primary",
                    className: e0.contactSalesButton,
                    wrapInTypography: !1,
                    analyticsLabel: "Contact sales",
                    message: {
                        id: "nav.buttons.contactSales",
                        description: "The name of a call to action button in the main site navigation",
                        defaultMessage: "Contact sales"
                    }
                }
            };

            function e2({
                variant: e,
                analyticsName: a = "desktop_nav_cta"
            }) {
                let t = (0, s.YB)(),
                    {
                        buttonVariant: n,
                        className: r,
                        wrapInTypography: c,
                        analyticsLabel: d,
                        message: u
                    } = e1[e],
                    g = t.formatMessage(u),
                    m = c ? (0, i.jsx)(x.Z, {
                        variant: "sans-100-medium",
                        children: g
                    }) : g;
                return (0, i.jsx)(l.z, {
                    prefetch: !1,
                    href: o._j.contactSales,
                    variant: n,
                    className: r,
                    "data-analytics-name": a,
                    "data-analytics-event": "click_cta",
                    "data-analytics-label": d,
                    "data-analytics-href": o._j.contactSales,
                    children: m
                })
            }
            var e5 = t(999104);
            let e3 = {
                icon: {
                    stackClassName: e0.iconLayout,
                    gap: 4,
                    loginButtonVariant: "simple",
                    loginButtonClassName: d()(e0.iconButton, e0.ghostButton)
                },
                combo: {
                    stackClassName: e0.comboLayout,
                    gap: void 0,
                    loginButtonVariant: "primary",
                    loginButtonClassName: e0.iconButton
                }
            };

            function e7({
                variant: e
            }) {
                let a = (0, s.YB)(),
                    t = (0, m.useContext)(C.kV),
                    {
                        stackClassName: n,
                        gap: r,
                        loginButtonVariant: c,
                        loginButtonClassName: d
                    } = e3[e],
                    u = a.formatMessage({
                        id: "global.login",
                        description: "CTA text prompting users to log in to Notion",
                        defaultMessage: "Log in"
                    });
                return (0, i.jsxs)(z.K, {
                    flexDirection: "row",
                    gap: r,
                    className: n,
                    alignItems: "center",
                    children: [(0, i.jsx)(l.z, {
                        href: (0, eS.G1)(o._j.signup, t),
                        "data-analytics-name": "desktop_nav_cta",
                        "data-analytics-event": "click_cta",
                        "data-analytics-label": "Get Notion free",
                        "data-analytics-href": o._j.signup,
                        className: e0.signupButton,
                        children: (0, i.jsx)(x.Z, {
                            variant: "sans-100-medium",
                            children: a.formatMessage({
                                id: "global.signup",
                                description: "CTA text prompting users to sign up for Notion",
                                defaultMessage: "Get Notion free"
                            })
                        })
                    }), "combo" === e ? (0, i.jsx)("div", {
                        className: e0.comboLayoutSeparator
                    }) : null, (0, i.jsx)(eY, {
                        containerStyle: {
                            top: 62,
                            insetInlineEnd: 18
                        }
                    }), (0, i.jsx)(l.z, {
                        variant: c,
                        className: d,
                        href: (0, eS.G1)(o._j.login, t),
                        "aria-label": u,
                        "data-analytics-name": "desktop_nav_cta",
                        "data-analytics-event": "click_cta",
                        "data-analytics-label": "Log in",
                        "data-analytics-href": o._j.login,
                        children: (0, i.jsx)(T.z, {
                            iconSize: 24,
                            children: (0, i.jsx)(e5.UserCircleFilledIcon, {
                                title: u
                            })
                        })
                    })]
                })
            }
            var e4 = t(94755);
            let e6 = {
                    HeaderCTA: function() {
                        let e = (0, M.F)(),
                            a = (0, s.YB)();
                        return (0, i.jsx)(l.z, {
                            variant: "primary",
                            href: o._j.login,
                            onClick: () => {
                                (0, r.t)(e, {
                                    name: "desktop_nav_cta",
                                    label: "Launch Notion",
                                    href: o._j.login
                                })
                            },
                            children: (0, i.jsx)(x.Z, {
                                variant: "sans-100-medium",
                                className: e4.noWrap,
                                children: a.formatMessage({
                                    id: "global.launchNotion",
                                    description: "CTA text prompting logged-in users to launch Notion app",
                                    defaultMessage: "Launch Notion"
                                })
                            })
                        })
                    },
                    HeaderSecondaryCTA: () => null,
                    MobileHeaderCTA: function({
                        onClick: e
                    }) {
                        let a = (0, M.F)(),
                            t = (0, s.YB)();
                        return (0, i.jsx)(C.f6, {
                            value: "blue",
                            children: (0, i.jsx)(l.z, {
                                variant: "primary",
                                href: o._j.login,
                                className: e4.mobileActionButton,
                                onClick: () => {
                                    (0, r.t)(a, {
                                        name: "mobile_nav_cta",
                                        label: "Launch Notion",
                                        href: o._j.login
                                    }), null == e || e()
                                },
                                children: t.formatMessage({
                                    id: "global.launchNotion",
                                    description: "CTA text prompting logged-in users to launch Notion app",
                                    defaultMessage: "Launch Notion"
                                })
                            })
                        })
                    },
                    MobileHeaderSecondaryCTA: () => null
                },
                e8 = {
                    only_login_icon: [null, "icon"],
                    demo_ghost_login_icon: ["demo", "icon"],
                    demo_ghost_login_combo: ["demo", "combo"],
                    contact_ghost_login_combo: ["contact", "combo"]
                };

            function e9({
                experiments: e = {},
                ...a
            }) {
                let {
                    aimn_logged_in_homepage_gate: t = "on",
                    marketing_nav_cta_location: o = "control",
                    marketing_nav_combo_cta: s = "control"
                } = e, r = (0, y.a)("(min-width: 840px)"), l = "on" === t, c = function(e) {
                    let [{
                        value: a
                    }] = (0, n.r5)(async () => !!e && (0, eO.GA)(), [e]);
                    return a ? ? !1
                }(l), d = l && c, u = "control" !== s && !0 === r, g = {};
                return d ? g = e6 : u && (g = function({
                    navComboCtaVariant: e
                }) {
                    let [a, t] = e8[e];
                    return {
                        HeaderCTA: () => (0, i.jsx)(e7, {
                            variant: t
                        }),
                        HeaderSecondaryCTA: () => a ? (0, i.jsx)(e2, {
                            variant: a
                        }) : null,
                        MobileHeaderCTA: void 0,
                        MobileHeaderSecondaryCTA: () => (0, i.jsx)(e2, {
                            variant: "primary",
                            analyticsName: "mobile_nav_cta"
                        })
                    }
                }({
                    navComboCtaVariant: s
                })), (0, i.jsx)(eX, { ...a,
                    ...g,
                    navCtaLocationVariant: o,
                    navComboCtaVariant: d ? "control" : s
                })
            }
        },
        966158: function(e, a, t) {
            "use strict";
            t.d(a, {
                u: function() {
                    return m
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(741664),
                r = t.n(s),
                l = t(202784),
                c = t(202012),
                d = t(554805),
                u = t(353357),
                g = t(217985);

            function m({
                href: e,
                className: a,
                children: t,
                arrowType: n,
                suppressHrefLocale: s,
                underline: m = "always",
                color: f = "inherit",
                onClick: p,
                target: v = "_self",
                tabIndex: _,
                onFocus: b,
                "data-analytics-name": h,
                "data-analytics-event": x = "click_link",
                "data-analytics-label": M,
                "data-analytics-context": N,
                "data-analytics-href": w,
                eventData: y,
                prefetch: C = !1,
                rel: k
            }) {
                let j = !!e && (0, u.xf)(e),
                    S = o()(g.inlineLink, {
                        [g.colorTheme]: "theme" === f,
                        [g.colorInherit]: "inherit" === f,
                        [g.underlineOnHover]: "hover" === m,
                        [g.underlineDisabled]: "none" === m
                    }, a),
                    L = (0, l.useCallback)(e => null == p ? void 0 : p(e), [p]),
                    I = (0, l.useCallback)(a => {
                        (function(e, a) {
                            let t = !!a && a.startsWith("#");
                            if (!a || !t) return;
                            e.preventDefault();
                            let i = a.replace("#", ""),
                                n = document.getElementById(i);
                            n && (0, d.p)(n)
                        })(a, e), L(a)
                    }, [e, L]),
                    T = "up" === n || "left" === n ? "before" : "after",
                    B = n ? (0, i.jsx)(c.E, {
                        arrowType: n,
                        placement: T
                    }) : null,
                    A = "before" === T ? B : null,
                    D = "after" === T ? B : null,
                    z = {
                        "data-analytics-name": h ? ? (null == y ? void 0 : y.name),
                        "data-analytics-event": x,
                        "data-analytics-label": M ? ? (null == y ? void 0 : y.label),
                        "data-analytics-context": N ? ? (null == y ? void 0 : y.context),
                        "data-analytics-href": w ? ? (null == y ? void 0 : y.href)
                    };
                return e ? j ? (0, i.jsxs)("a", {
                    href: e,
                    className: S,
                    onClick: I,
                    target: v,
                    tabIndex: _,
                    onFocus: b,
                    rel: k,
                    ...z,
                    children: [A, (0, i.jsx)("span", {
                        className: g.linkContent,
                        children: t
                    }), D]
                }) : (0, i.jsxs)(r(), {
                    prefetch: !1,
                    className: S,
                    href: e,
                    locale: !s && void 0,
                    onClick: I,
                    target: v,
                    tabIndex: _,
                    onFocus: b,
                    rel: k,
                    ...z,
                    children: [A, (0, i.jsx)("span", {
                        className: g.linkContent,
                        children: t
                    }), D]
                }) : (0, i.jsxs)("span", {
                    onClick: L,
                    className: S,
                    ...z,
                    children: [A, (0, i.jsx)("span", {
                        className: g.linkContent,
                        children: t
                    }), D]
                })
            }
        },
        930066: function(e, a, t) {
            "use strict";
            t.d(a, {
                u: function() {
                    return i.u
                }
            });
            var i = t(966158)
        },
        444212: function(e, a, t) {
            "use strict";
            t.d(a, {
                S: function() {
                    return M
                }
            });
            var i = t(552322),
                n = t(809008),
                o = t.n(n),
                s = t(808813),
                r = t(716952),
                l = t(486535),
                c = t(914775),
                d = t(406518),
                u = t(447833),
                g = t(356428),
                m = t(807761),
                f = t(622232),
                p = t(461654),
                v = t(353357),
                _ = t(665012),
                b = t(765496);
            let h = {
                "en-US": "en",
                "es-LA": "es",
                "es-ES": "es-es",
                "pt-BR": "pt",
                "fr-FR": "fr",
                "de-DE": "de",
                "ja-JP": "ja",
                "da-DK": "da",
                "sv-SE": "sv",
                "zh-CN": "zh",
                "zh-TW": "zh-tw",
                "en-GB": "en-gb",
                "vi-VN": "vi",
                "th-TH": "th",
                "id-ID": "id",
                "ko-KR": "ko",
                "nb-NO": "nb",
                "nl-NL": "nl",
                "fi-FI": "fi",
                "he-IL": "he",
                "ar-SA": "ar"
            };
            var x = t(756092);

            function M({
                title: e,
                metadata: a,
                favicon: t
            }) {
                let n = (0, r.YB)(),
                    M = (0, b.j)() ? ? "/",
                    N = (0, x.b)(),
                    w = {
                        title: (0, p.u)((0, f.w)(N), n.formatMessage({
                            id: "layout.meta.title",
                            defaultMessage: "The AI workspace that works for you.",
                            description: "This is the default page title and meta title that appears on social."
                        })),
                        description: n.formatMessage({
                            id: "layout.meta.description",
                            defaultMessage: "A tool that connects everyday work into one space. It gives you and your teams AI tools—search, writing, note-taking—inside an all-in-one, flexible workspace.",
                            description: "This is the default meta description that appears on social."
                        }),
                        image: p.f
                    },
                    y = {
                        title: (null == a ? void 0 : a.title) || w.title,
                        description: (null == a ? void 0 : a.description) || w.description,
                        image: (null == a ? void 0 : a.image) || w.image
                    },
                    C = (0, v.UY)(M, N),
                    k = y.image && (0, s.r)(y.image),
                    j = y && (null == y ? void 0 : y.image) && k ? (0, g.Fh)(y.image) : `${u.fi}${y.image}`,
                    {
                        canonicalUrl: S,
                        ...L
                    } = function(e) {
                        let a = (0, b.j)() ? ? "/",
                            t = (0, _.Uo)(),
                            i = (null == t ? void 0 : t.canonicalUrl) !== void 0 ? null == t ? void 0 : t.canonicalUrl : a,
                            n = (null == t ? void 0 : t.supportedLocales) && t.supportedLocales.length > 0 ? t.supportedLocales : l.uI,
                            o = n.some(a => a === e) ? e : "en-US",
                            s = {
                                canonicalUrl: (0, l.Bd)(e) ? (0, v.UY)(i, o, !0) : void 0
                            };
                        return n.forEach(e => {
                            (0, l.pc)(e) || (0, l.iX)(e) || (s[h[(0, c.Ay)(e)]] = (0, v.UY)(i, e, !0))
                        }), s
                    }(N);
                return (0, i.jsxs)(o(), {
                    children: [(0, i.jsx)("title", {
                        children: e || "Notion"
                    }), (0, i.jsx)("meta", {
                        name: "description",
                        content: y.description
                    }, "description"), (0, i.jsx)("meta", {
                        name: "twitter:card",
                        content: "summary_large_image"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:site",
                        content: "@NotionHQ"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:title",
                        content: y.title
                    }), (0, i.jsx)("meta", {
                        name: "twitter:description",
                        content: y.description
                    }), (0, i.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }), (0, i.jsx)("meta", {
                        name: "twitter:url",
                        content: C
                    }), (0, i.jsx)("meta", {
                        name: "twitter:image",
                        content: j
                    }), S ? (0, i.jsx)("meta", {
                        property: "og:url",
                        content: S
                    }) : void 0, (0, i.jsx)("meta", {
                        property: "og:title",
                        content: y.title
                    }), (0, i.jsx)("meta", {
                        property: "og:description",
                        content: y.description
                    }), (0, i.jsx)("meta", {
                        property: "og:image",
                        content: j
                    }), (0, i.jsx)("meta", {
                        property: "og:locale",
                        content: N
                    }), (0, i.jsx)("meta", {
                        property: "og:site_name",
                        content: "Notion"
                    }), (0, i.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, i.jsx)("link", {
                        rel: "icon",
                        href: t ? ? (0, m.z)()
                    }), (0, i.jsx)("link", {
                        rel: "apple-touch-icon",
                        href: d.Z.logoIosPng
                    }), (0, i.jsx)("meta", {
                        name: "mobile-web-app-capable",
                        content: "yes"
                    }), (0, i.jsx)("meta", {
                        name: "apple-itunes-app",
                        content: u.tE.toString()
                    }), (0, i.jsx)("meta", {
                        name: "referrer",
                        content: "strict-origin"
                    }), (0, i.jsx)("meta", {
                        name: "naver-site-verification",
                        content: "ad5c9c7e4607a86395226000f5fe1e4223ce3348"
                    }), (0, l.Bd)(N) ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("link", {
                            rel: "canonical",
                            href: S
                        }), (0, l.iX)(N) ? void 0 : (0, i.jsx)("link", {
                            rel: "alternate",
                            hrefLang: h[N],
                            href: S
                        }, S), (0, c.Yd)(L).map(e => {
                            if (e !== h[N]) {
                                let a = L[e];
                                return (0, i.jsx)("link", {
                                    rel: "alternate",
                                    hrefLang: e,
                                    href: a
                                }, a)
                            }
                        })]
                    }) : void 0]
                })
            }
        },
        154652: function(e, a, t) {
            "use strict";
            t.d(a, {
                FH: function() {
                    return n
                },
                cf: function() {
                    return s
                },
                rH: function() {
                    return o
                }
            });
            var i = t(552322);

            function n(e) {
                return (0, i.jsxs)("svg", {
                    width: "29",
                    height: "30",
                    viewBox: "0 0 29 30",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...e,
                    children: [(0, i.jsx)("path", {
                        d: "M1.81 1.294L18.446.068c2.043-.175 2.568-.057 3.852.875l5.311 3.733c.877.642 1.169.817 1.169 1.516v20.473c0 1.283-.468 2.042-2.102 2.158L7.357 29.99c-1.228.058-1.811-.117-2.454-.934l-3.91-5.074C.29 23.048 0 22.349 0 21.532V3.334c0-1.049.468-1.924 1.81-2.04z",
                        fill: "#fff"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.447.068L1.808 1.294C.468 1.41 0 2.285 0 3.334v18.198c0 .817.291 1.516.992 2.45l3.911 5.074c.643.817 1.226.992 2.453.934l19.321-1.167c1.634-.116 2.102-.875 2.102-2.158V6.192c0-.663-.263-.854-1.037-1.42l-.132-.096L22.3.943c-1.285-.932-1.81-1.05-3.854-.875zM7.793 5.857c-1.577.106-1.936.13-2.831-.597L2.685 3.452c-.233-.234-.116-.526.467-.584l15.995-1.166c1.342-.117 2.043.35 2.568.758l2.744 1.983c.117.059.408.408.058.408l-16.52.992-.203.014zM5.954 26.49V9.11c0-.759.234-1.109.934-1.168l18.971-1.108c.643-.058.935.35.935 1.108v17.264c0 .759-.117 1.401-1.168 1.459l-18.154 1.05c-1.05.058-1.518-.291-1.518-1.225zm17.922-16.448c.116.525 0 1.05-.527 1.11l-.874.173v12.832c-.76.408-1.46.641-2.044.641-.934 0-1.168-.292-1.868-1.166l-5.721-8.982v8.69l1.81.409s0 1.05-1.46 1.05l-4.027.233c-.117-.234 0-.817.408-.933l1.051-.291v-11.49L9.165 12.2c-.117-.525.174-1.283.992-1.341l4.32-.292 5.954 9.1v-8.05l-1.518-.174c-.116-.643.35-1.109.934-1.167l4.029-.234z",
                        fill: "#000"
                    })]
                })
            }

            function o({
                fillColor: e = "#000",
                ...a
            }) {
                return (0, i.jsxs)("svg", {
                    width: "33",
                    height: "34",
                    viewBox: "0 0 33 34",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    ...a,
                    children: [(0, i.jsx)("path", {
                        d: "M3.8051 3.26755L20.5301 2.04319C22.5839 1.86808 23.1124 1.98538 24.4032 2.91756L29.7421 6.64773C30.623 7.28917 30.9165 7.46381 30.9165 8.16307V28.6217C30.9165 29.9038 30.4468 30.6622 28.804 30.7782L9.38138 31.9442C8.14825 32.0027 7.56135 31.8279 6.91556 31.0114L2.98395 25.9405C2.27947 25.0072 1.98651 24.3088 1.98651 23.4918V5.3068C1.98651 4.25826 2.45649 3.38366 3.8051 3.26755Z",
                        fill: "#fff"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M3.64643 1.29903L20.3723 0.0746037C21.3849 -0.0114809 22.3097 -0.0595444 23.1918 0.139197C24.141 0.353054 24.86 0.807308 25.5578 1.31054L30.9002 5.04319L30.9158 5.05461C30.9547 5.08281 30.9968 5.11312 31.0417 5.14536C31.3674 5.37943 31.8354 5.71564 32.1631 6.09295C32.7252 6.73997 32.9031 7.45237 32.9031 8.16303V28.6217C32.9031 29.4467 32.763 30.5442 31.967 31.4425C31.1549 32.3592 30.0175 32.6721 28.9448 32.7479L28.9343 32.7486L9.48857 33.916L9.47602 33.9165C8.79263 33.949 8.01197 33.9383 7.24718 33.6609C6.41395 33.3586 5.82508 32.8277 5.35391 32.2318L5.34799 32.2243L1.40271 27.1359L1.39499 27.1257C0.55231 26.0092 0 24.8994 0 23.4918V5.30675C0 4.51862 0.17342 3.55089 0.82429 2.72219C1.51537 1.84231 2.52546 1.39554 3.6337 1.30013L3.64643 1.29903ZM20.5301 2.04315L3.80509 3.26752C2.45647 3.38361 1.9865 4.25823 1.9865 5.30675V23.4918C1.9865 24.3088 2.27946 25.0072 2.98394 25.9405L6.91553 31.0114C7.56133 31.8279 8.14822 32.0025 9.38137 31.944L28.804 30.7782C30.4468 30.6622 30.9165 29.9039 30.9165 28.6217V8.16303C30.9165 7.50025 30.6529 7.30878 29.8751 6.74438C29.8323 6.71333 29.788 6.68115 29.7421 6.6477L24.4032 2.91752C23.1124 1.98534 22.5839 1.86805 20.5301 2.04315Z",
                        fill: "#fff"
                    }), (0, i.jsx)("path", {
                        d: "M20.5301 2.04318C22.5838 1.86808 23.1124 1.98541 24.4031 2.91757L29.7421 6.64778C30.623 7.28918 30.9167 7.46383 30.9167 8.16301V28.6217C30.9167 29.9039 30.4468 30.6622 28.804 30.7782L9.38127 31.944C8.14822 32.0025 7.56137 31.8279 6.9156 31.0114L2.98396 25.9405C2.27951 25.0072 1.98647 24.3088 1.98645 23.492V5.30687C1.98645 4.25835 2.45646 3.38365 3.80508 3.26754L20.5301 2.04318ZM28.9214 9.91165C28.9214 9.15462 28.6285 8.74625 27.9818 8.80449L8.91064 9.91165C8.20688 9.97045 7.9722 10.3204 7.9722 11.0779V28.4466C7.97222 29.3801 8.44147 29.7293 9.49759 29.6715L27.7471 28.6217C28.8037 28.5641 28.9214 27.922 28.9214 27.1636V9.91165ZM25.988 12.0096C26.1051 12.5347 25.988 13.0592 25.4588 13.1182L24.5795 13.2926V26.1151C23.816 26.5231 23.1122 26.7563 22.5256 26.7563C21.5863 26.7563 21.351 26.4646 20.6475 25.5908L14.8959 16.6149V25.2992L16.7158 25.7076C16.7158 25.7076 16.7159 26.7563 15.2475 26.7563L11.1994 26.9897C11.0818 26.7563 11.1995 26.1739 11.6101 26.0571L12.6664 25.7662V14.2837L11.1997 14.1668C11.0822 13.6417 11.3751 12.8847 12.1972 12.8259L16.5398 12.5349L22.5256 21.6277V13.5839L20.9993 13.4098C20.8821 12.7679 21.351 12.3018 21.9379 12.244L25.988 12.0096ZM23.816 4.43331C23.2877 4.02552 22.5835 3.55846 21.2343 3.67528L5.15507 4.84121C4.56875 4.89903 4.45158 5.19046 4.68509 5.42409L6.97519 7.23083C7.91323 7.98837 8.26511 7.93069 10.0265 7.81388L26.632 6.82259C26.9842 6.82259 26.6915 6.47348 26.5739 6.41536L23.816 4.43331Z",
                        fill: e
                    })]
                })
            }

            function s(e) {
                return (0, i.jsxs)("svg", {
                    width: "87",
                    height: "30",
                    viewBox: "0 0 87 30",
                    fill: "none",
                    ...e,
                    children: [(0, i.jsx)("path", {
                        d: "M1.80503 1.29361L18.4053 0.0684153C20.4438 -0.106817 20.9682 0.0105624 22.2495 0.943381L27.5485 4.67609C28.4228 5.31797 28.7143 5.49273 28.7143 6.19246V26.665C28.7143 27.9481 28.2479 28.7069 26.6174 28.823L7.33971 29.9897C6.11576 30.0482 5.53324 29.8734 4.89227 29.0563L0.990009 23.982C0.29077 23.048 0 22.3492 0 21.5316V3.33424C0 2.285 0.466476 1.40979 1.80503 1.29361Z",
                        fill: "white"
                    }), (0, i.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M18.4053 0.0684153L1.80503 1.29361C0.466476 1.40979 0 2.285 0 3.33424V21.5316C0 22.3492 0.29077 23.048 0.990009 23.982L4.89227 29.0563C5.53324 29.8734 6.11576 30.0482 7.33971 29.9897L26.6174 28.823C28.2479 28.7069 28.7143 27.9481 28.7143 26.665V6.19246C28.7143 5.52922 28.4524 5.33763 27.6806 4.77284C27.6381 4.74177 27.5941 4.70956 27.5485 4.67609L22.2495 0.943381C20.9682 0.0105624 20.4438 -0.106817 18.4053 0.0684153ZM7.77678 5.85669C6.20297 5.96321 5.84537 5.98741 4.95163 5.25968L2.67884 3.45164C2.44704 3.21784 2.5633 2.92619 3.14528 2.86835L19.1035 1.70172C20.4427 1.58482 21.1414 2.05218 21.6659 2.46027L24.4029 4.44352C24.5195 4.5016 24.8102 4.85112 24.4606 4.85112L7.97995 5.843L7.77678 5.85669ZM5.94007 26.4897V9.10926C5.94007 8.35118 6.17304 8.00097 6.87152 7.94214L25.799 6.83434C26.441 6.77601 26.7317 7.18457 26.7317 7.94214V25.206C26.7317 25.9648 26.6149 26.6072 25.5662 26.665L7.45398 27.7155C6.40578 27.7733 5.94007 27.4238 5.94007 26.4897ZM23.8202 10.0416C23.9363 10.567 23.8202 11.092 23.295 11.1511L22.4223 11.3253V24.1567C21.6646 24.5649 20.9659 24.7983 20.3837 24.7983C19.4515 24.7983 19.2181 24.5064 18.5198 23.632L12.8115 14.65V23.3404L14.6178 23.7489C14.6178 23.7489 14.6178 24.7983 13.1605 24.7983L9.14291 25.0318C9.0262 24.7983 9.14291 24.2155 9.55041 24.0987L10.5988 23.8075V12.3172L9.14315 12.2003C9.02643 11.6749 9.31717 10.9173 10.1331 10.8584L14.4431 10.5673L20.3837 19.6662V11.617L18.8691 11.4427C18.7528 10.8004 19.2181 10.3339 19.8005 10.2761L23.8202 10.0416Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M41.4336 21.2513V13.3405H41.5706L47.2741 21.2513H49.0706V9.62673H47.0727V17.5295H46.9358L41.2322 9.62673H39.4277V21.2513H41.4336Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M54.7145 21.4286C57.3488 21.4286 58.9519 19.7046 58.9519 16.8448C58.9519 13.993 57.3407 12.261 54.7145 12.261C52.0964 12.261 50.4771 14.0011 50.4771 16.8448C50.4771 19.7046 52.0722 21.4286 54.7145 21.4286ZM54.7145 19.7529C53.3209 19.7529 52.5233 18.6896 52.5233 16.8448C52.5233 15.008 53.3209 13.9366 54.7145 13.9366C56.1001 13.9366 56.8977 15.008 56.8977 16.8448C56.8977 18.6896 56.1082 19.7529 54.7145 19.7529Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M60.7774 10.2793V12.4946H59.3837V14.0897H60.7774V18.899C60.7774 20.6069 61.5829 21.2916 63.605 21.2916C63.9916 21.2916 64.3622 21.2513 64.6522 21.1949V19.6321C64.4106 19.6563 64.2575 19.6724 63.9755 19.6724C63.1377 19.6724 62.7672 19.2857 62.7672 18.4157V14.0897H64.6522V12.4946H62.7672V10.2793H60.7774Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M65.8493 21.2513H67.8391V12.4382H65.8493V21.2513ZM66.8402 10.9801C67.5008 10.9801 68.0325 10.4484 68.0325 9.77979C68.0325 9.11115 67.5008 8.57141 66.8402 8.57141C66.1877 8.57141 65.6479 9.11115 65.6479 9.77979C65.6479 10.4484 66.1877 10.9801 66.8402 10.9801Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M73.2978 21.4286C75.932 21.4286 77.5351 19.7046 77.5351 16.8448C77.5351 13.993 75.924 12.261 73.2978 12.261C70.6796 12.261 69.0604 14.0011 69.0604 16.8448C69.0604 19.7046 70.6554 21.4286 73.2978 21.4286ZM73.2978 19.7529C71.9041 19.7529 71.1066 18.6896 71.1066 16.8448C71.1066 15.008 71.9041 13.9366 73.2978 13.9366C74.6834 13.9366 75.4809 15.008 75.4809 16.8448C75.4809 18.6896 74.6914 19.7529 73.2978 19.7529Z",
                        fill: "black"
                    }), (0, i.jsx)("path", {
                        d: "M78.7242 21.2513H80.722V16.1197C80.722 14.8228 81.4712 14.0011 82.6635 14.0011C83.8799 14.0011 84.4438 14.6777 84.4438 16.0231V21.2513H86.4417V15.5478C86.4417 13.4452 85.3703 12.261 83.4046 12.261C82.0915 12.261 81.2054 12.8652 80.7865 13.848H80.6495V12.4382H78.7242V21.2513Z",
                        fill: "black"
                    })]
                })
            }
        },
        138312: function(e, a, t) {
            "use strict";
            t.d(a, {
                S: function() {
                    return d
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n),
                s = t(202784),
                r = t(642734),
                l = t(124101),
                c = t(412595);

            function d() {
                let {
                    snackBarState: e
                } = (0, s.useContext)(l.mv), {
                    snackBarMessage: a,
                    snackBarActive: t
                } = e;
                return (0, i.jsx)("div", {
                    className: o()(c.snackBar, {
                        [c.snackBarActive]: t
                    }),
                    children: (0, i.jsx)("div", {
                        role: "status",
                        className: c.snackBarContent,
                        children: (0, i.jsx)(r.x, {
                            tag: "p",
                            size: "body",
                            color: "white",
                            children: a
                        })
                    })
                })
            }
        },
        642734: function(e, a, t) {
            "use strict";
            t.d(a, {
                x: function() {
                    return r
                }
            });
            var i = t(552322),
                n = t(72779),
                o = t.n(n);
            t(202784);
            var s = t(521613);

            function r({
                children: e,
                tag: a = "p",
                size: t = "body",
                fontFamily: n = "sans",
                fontWeight: r = "regular",
                align: l,
                color: c,
                caps: d,
                id: u,
                includeMargin: g,
                style: m
            }) {
                return (0, i.jsx)(a, {
                    id: u,
                    style: m,
                    className: o()(s.text, {
                        [s.textWeightRegular]: "regular" === r,
                        [s.textWeightMedium]: "medium" === r,
                        [s.textWeightSemibold]: "semibold" === r,
                        [s.textWeightBold]: "bold" === r,
                        [s.textColorLight]: "light" === c,
                        [s.textColorMedium]: "medium" === c,
                        [s.textColorDark]: "dark" === c,
                        [s.textColorWhite]: "white" === c,
                        [s.textColorRed]: "red" === c,
                        [s.textColorBlue]: "blue" === c,
                        [s.textColorYellow]: "yellow" === c,
                        [s.textColorPurple]: "purple" === c,
                        [s.textColorOrange]: "orange" === c,
                        [s.textColorTeal]: "teal" === c,
                        [s.textColorInherit]: "inherit" === c,
                        [s.textSizeBlockquote]: "blockquote" === t,
                        [s.textSizeBody]: "body" === t,
                        [s.textSizeNav]: "nav" === t,
                        [s.textSizeCaption]: "caption" === t,
                        [s.textSizeFootnote]: "footnote" === t,
                        [s.textAlignStart]: "start" === l,
                        [s.textAlignCenter]: "center" === l,
                        [s.textAlignEnd]: "end" === l,
                        [s.textAllCaps]: d,
                        [s.textWithMargin]: g
                    }),
                    children: e
                })
            }
        },
        807761: function(e, a, t) {
            "use strict";
            t.d(a, {
                a: function() {
                    return s
                },
                z: function() {
                    return o
                }
            });
            var i = t(406518),
                n = t(447833);

            function o() {
                switch (n.OB) {
                    case "staging":
                        return i.Z.faviconStgIco;
                    case "development":
                        return i.Z.faviconDevIco;
                    case "local":
                        return i.Z.faviconLocalIco;
                    default:
                        return i.Z.faviconIco
                }
            }

            function s() {
                return i.Z.shared.templates.faviconIco
            }
        },
        461654: function(e, a, t) {
            "use strict";

            function i(...e) {
                return e.join(" – ")
            }
            t.d(a, {
                f: function() {
                    return n
                },
                u: function() {
                    return i
                }
            });
            let n = t(406518).Z.meta.customAgentsOgPng
        },
        251281: function(e, a, t) {
            "use strict";
            t.d(a, {
                F: function() {
                    return n
                }
            });
            var i = t(622232);

            function n(e) {
                return {
                    newMainItems: {
                        notion: e.formatMessage({
                            id: "global.notion",
                            defaultMessage: "Notion",
                            description: "Name of the Notion product"
                        }),
                        mail: e.formatMessage({
                            id: "global.mail",
                            defaultMessage: "Mail",
                            description: "Name of the Notion Mail product"
                        }),
                        calendar: e.formatMessage({
                            id: "global.calendar",
                            defaultMessage: "Calendar",
                            description: "Name of the Notion Calendar product"
                        }),
                        product: e.formatMessage({
                            id: "global.product",
                            defaultMessage: "Product",
                            description: "Name of the Notion Product dropdown menu item"
                        }),
                        ai: e.formatMessage({
                            id: "global.ai",
                            defaultMessage: "AI",
                            description: "Name of the Notion AI (Artificial Intelligence) product"
                        }),
                        enterprise: e.formatMessage({
                            id: "global.enterprise",
                            defaultMessage: "Enterprise",
                            description: "Name of the Notion Enterprise product"
                        }),
                        pricing: e.formatMessage({
                            id: "global.pricing",
                            defaultMessage: "Pricing",
                            description: "Notion's pricing page"
                        }),
                        solutions: e.formatMessage({
                            id: "global.solutions",
                            defaultMessage: "Solutions",
                            description: "Name of the Notion Solutions dropdown menu item"
                        }),
                        resources: e.formatMessage({
                            id: "global.resources",
                            defaultMessage: "Resources",
                            description: "Name of the Notion Resources dropdown menu item"
                        }),
                        explore: e.formatMessage({
                            id: "global.explore",
                            defaultMessage: "Explore",
                            description: "CTA text prompting users to explore more links about Notion"
                        }),
                        more: e.formatMessage({
                            id: "global.more",
                            defaultMessage: "More",
                            description: "CTA text prompting users to explore more links about Notion"
                        })
                    },
                    newItems: {
                        notionAI: e.formatMessage({
                            id: "globalNavigation.notionAI",
                            defaultMessage: "Notion AI",
                            description: "Navigation item for Notion AI"
                        }),
                        agents: e.formatMessage({
                            id: "globalNavigation.features.agents",
                            defaultMessage: "Agents",
                            description: "Navigation item for Agents feature"
                        }),
                        enterpriseSearch: e.formatMessage({
                            id: "globalNavigation.features.enterpriseSearch",
                            defaultMessage: "Enterprise Search",
                            description: "Navigation item for Enterprise Search feature"
                        }),
                        meetingNotes: e.formatMessage({
                            id: "globalNavigation.meetingNotes",
                            defaultMessage: "AI Meeting Notes",
                            description: "Navigation item for AI Meeting Notes"
                        }),
                        projects: e.formatMessage({
                            id: "globalNavigation.features.projects",
                            defaultMessage: "Projects",
                            description: "Navigation item for Projects feature"
                        }),
                        docs: e.formatMessage({
                            id: "globalNavigation.features.docs",
                            defaultMessage: "Docs",
                            description: "Navigation item for Docs feature"
                        }),
                        knowledgeBase: e.formatMessage({
                            id: "globalNavigation.features.knowledgeBase",
                            defaultMessage: "Knowledge Base",
                            description: "Navigation item for Knowledge Base feature"
                        }),
                        wikis: e.formatMessage({
                            id: "globalNavigation.features.wikis",
                            defaultMessage: "Wikis",
                            description: "Navigation item for Wikis feature"
                        }),
                        mail: e.formatMessage({
                            id: "globalNavigation.features.mail",
                            defaultMessage: "Notion Mail",
                            description: "Navigation item for Notion Mail"
                        }),
                        engAndProduct: e.formatMessage({
                            id: "globalNavigation.solutions.engAndProduct",
                            defaultMessage: "Eng & Product",
                            description: "Navigation item for Engineering and Product teams"
                        }),
                        design: e.formatMessage({
                            id: "globalNavigation.teams.design",
                            defaultMessage: "Design",
                            description: "Navigation item for Design teams"
                        }),
                        marketing: e.formatMessage({
                            id: "globalNavigation.teams.marketing",
                            defaultMessage: "Marketing",
                            description: "Navigation item for Marketing teams"
                        }),
                        it: e.formatMessage({
                            id: "globalNavigation.teams.it",
                            defaultMessage: "IT",
                            description: "Navigation item for IT teams"
                        }),
                        startups: e.formatMessage({
                            id: "globalNavigation.teamSize.startups",
                            defaultMessage: "Startups",
                            description: "Navigation item for Startups"
                        }),
                        smallBusinesses: e.formatMessage({
                            id: "globalNavigation.teamSize.smallBusinesses",
                            defaultMessage: "Small businesses",
                            description: "Navigation item for Small businesses"
                        }),
                        enterprise: e.formatMessage({
                            id: "globalNavigation.teamSize.enterprise",
                            defaultMessage: "Enterprise",
                            description: "Navigation item for Enterprise businesses"
                        }),
                        education: e.formatMessage({
                            id: "globalNavigation.teamSize.education",
                            defaultMessage: "Education",
                            description: "Navigation item for Education sector"
                        }),
                        professional: e.formatMessage({
                            id: "globalNavigation.solutions.professional",
                            defaultMessage: "Professional",
                            description: "Navigation item for Professional"
                        }),
                        aiUseCases: e.formatMessage({
                            id: "globalNavigation.solutions.aiUseCases",
                            defaultMessage: "AI use cases",
                            description: "Navigation item for AI use cases"
                        }),
                        aiUseCasesWork: e.formatMessage({
                            id: "globalNavigation.ai.aiUseCasesWork",
                            defaultMessage: "For work",
                            description: "Navigation item for AI use cases for work"
                        }),
                        aiUseCasesLife: e.formatMessage({
                            id: "globalNavigation.ai.aiUseCasesLife",
                            defaultMessage: "For life",
                            description: "Navigation item for AI use cases for life"
                        }),
                        customerStories: e.formatMessage({
                            id: "globalNavigation.learn.customerStories",
                            defaultMessage: "Customer stories",
                            description: "Navigation item for Customer stories"
                        }),
                        newReleases: e.formatMessage({
                            id: "globalNavigation.resources.newReleases",
                            defaultMessage: "What's New",
                            description: "Navigation item for New Releases in Resources"
                        }),
                        blog: e.formatMessage({
                            id: "globalNavigation.learn.blog",
                            defaultMessage: "Blog",
                            description: "Navigation item for Blog"
                        }),
                        security: e.formatMessage({
                            id: "globalNavigation.build.security",
                            defaultMessage: "Security",
                            description: "Navigation item for Security"
                        }),
                        consultants: e.formatMessage({
                            id: "globalNavigation.build.consultants",
                            defaultMessage: "Consultants",
                            description: "Navigation item for Consultants"
                        }),
                        templates: e.formatMessage({
                            id: "globalNavigation.build.templates",
                            defaultMessage: "Templates",
                            description: "Navigation item for Templates"
                        }),
                        academy: e.formatMessage({
                            id: "globalNavigation.resources.notionAcademy",
                            defaultMessage: "Academy",
                            description: "Navigation item for Notion Academy"
                        }),
                        productTours: e.formatMessage({
                            id: "globalNavigation.resources.productTours",
                            defaultMessage: "Product tours",
                            description: "Navigation item for Product tours"
                        }),
                        help: e.formatMessage({
                            id: "globalNavigation.resources.helpCenter",
                            defaultMessage: "Help",
                            description: "Navigation item for Help (Help Center)"
                        })
                    },
                    newLabels: {
                        notionAIDescription: e.formatMessage({
                            id: "globalNavigation.product.notionAI.description",
                            defaultMessage: "AI tools for work",
                            description: "Short description for Notion AI"
                        }),
                        agentsDescription: e.formatMessage({
                            id: "globalNavigation.product.agents.description",
                            defaultMessage: "Automate busywork",
                            description: "Short description for the Agents feature"
                        }),
                        enterpriseSearchDescription: e.formatMessage({
                            id: "globalNavigation.features.enterpriseSearch.description",
                            defaultMessage: "Find answers instantly",
                            description: "Short description for the Enterprise Search feature"
                        }),
                        meetingNotesDescription: e.formatMessage({
                            id: "globalNavigation.meetingNotes.description",
                            defaultMessage: "Perfectly written by AI",
                            description: "Short description for AI Meeting Notes"
                        }),
                        projectsDescription: e.formatMessage({
                            id: "globalNavigation.features.projects.description",
                            defaultMessage: "Manage any project",
                            description: "Short description for the Projects feature"
                        }),
                        docsDescription: e.formatMessage({
                            id: "globalNavigation.product.docs.description",
                            defaultMessage: "Simple and powerful",
                            description: "Short description for the Docs feature"
                        }),
                        knowledgeBaseDescription: e.formatMessage({
                            id: "globalNavigation.product.wikis.description",
                            defaultMessage: "Centralize your knowledge",
                            description: "Short description for the Knowledge Base feature"
                        }),
                        wikisDescription: e.formatMessage({
                            id: "globalNavigation.features.wikis.description",
                            defaultMessage: "Centralize your knowledge",
                            description: "Short description for the Wikis feature"
                        }),
                        integrationsDescription: e.formatMessage({
                            id: "globalNavigation.product.integrations.description",
                            defaultMessage: "Connect your apps",
                            description: "Short description for Integrations"
                        }),
                        securityDescription: e.formatMessage({
                            id: "globalNavigation.features.security.description",
                            defaultMessage: "Safe and scalable",
                            description: "Short description for Security"
                        }),
                        logoDescription: e.formatMessage({
                            id: "globalNavigation.product.logo.description",
                            defaultMessage: "Your AI workspace",
                            description: "Short description for the Notion Logo"
                        }),
                        companySize: e.formatMessage({
                            id: "globalNavigation.labels.companySize",
                            defaultMessage: "Company size",
                            description: "Title for group of nav links"
                        }),
                        useCases: e.formatMessage({
                            id: "globalNavigation.labels.useCases",
                            defaultMessage: "Use Cases",
                            description: "Title for group of nav links"
                        }),
                        discover: e.formatMessage({
                            id: "globalNavigation.labels.discover",
                            defaultMessage: "Discover",
                            description: "Title for group of nav links"
                        }),
                        aiFeatures: e.formatMessage({
                            id: "globalNavigation.ai.aiFeatures",
                            defaultMessage: "AI features",
                            description: "Title for group of nav links about AI features"
                        }),
                        exploreUseCases: e.formatMessage({
                            id: "globalNavigation.ai.exploreUseCases",
                            defaultMessage: "Explore use cases",
                            description: "Title for group of nav links about exploring AI use cases"
                        })
                    },
                    mainItems: {
                        company: e.formatMessage({
                            id: "nav.mainItems.company",
                            defaultMessage: "Company",
                            description: "The name of a group of items in the main site footer"
                        }),
                        product: e.formatMessage({
                            id: "nav.mainItems.product",
                            defaultMessage: "Product"
                        }),
                        resources: e.formatMessage({
                            id: "nav.mainItems.resources",
                            defaultMessage: "Resources"
                        }),
                        notionFor: e.formatMessage({
                            id: "nav.mainItems.notionFor",
                            defaultMessage: "{notion} for",
                            description: "The name of a group of items in the main site footer"
                        }, {
                            notion: (0, i.w)(e.locale)
                        }),
                        whatsNew: e.formatMessage({
                            id: "nav.mainItems.whatsNew",
                            defaultMessage: "What’s new",
                            description: "The name of a link in the main site navigation"
                        }),
                        calendar: e.formatMessage({
                            id: "nav.buttons.calendar",
                            defaultMessage: "Calendar",
                            description: "The name of Notion's calendar product"
                        }),
                        pricing: e.formatMessage({
                            id: "nav.mainItems.pricing",
                            defaultMessage: "Pricing"
                        }),
                        requestADemo: e.formatMessage({
                            id: "nav.mainItems.requestADemo",
                            defaultMessage: "Request a demo",
                            description: "A call to action for a user to click a link or button"
                        }),
                        tryForFree: e.formatMessage({
                            id: "nav.mainItems.tryForFree",
                            defaultMessage: "Try for free"
                        }),
                        forms: e.formatMessage({
                            id: "nav.mainItems.forms",
                            defaultMessage: "Forms",
                            description: "Navigation item in the main site header"
                        }),
                        mail: e.formatMessage({
                            id: "nav.mainItems.mail",
                            defaultMessage: "Mail",
                            description: "Navigation item in the main site header"
                        }),
                        templates: e.formatMessage({
                            id: "nav.mainItems.templates",
                            defaultMessage: "Templates"
                        }),
                        marketplace: e.formatMessage({
                            id: "nav.mainItems.marketplace",
                            defaultMessage: "Marketplace",
                            description: "The name of Notion's marketplace platform"
                        }),
                        download: e.formatMessage({
                            id: "nav.mainItems.download",
                            defaultMessage: "Download"
                        }),
                        wikis: e.formatMessage({
                            id: "nav.mainItems.wikis",
                            defaultMessage: "Wikis",
                            description: "The name of a link in the main site navigation"
                        }),
                        projects: e.formatMessage({
                            id: "nav.mainItems.projects",
                            defaultMessage: "Projects",
                            description: "The name of a link in the main site navigation"
                        }),
                        docs: e.formatMessage({
                            id: "nav.mainItems.docs",
                            defaultMessage: "Docs",
                            description: "The name of a link in the main site navigation"
                        }),
                        ai: e.formatMessage({
                            id: "nav.mainItems.ai",
                            defaultMessage: "AI",
                            description: "The name of a link in the main site navigation"
                        }),
                        signIn: e.formatMessage({
                            id: "nav.mainItems.signIn",
                            defaultMessage: "Sign in",
                            description: "The name of a link in the main site navigation"
                        }),
                        build: e.formatMessage({
                            id: "nav.mainItems.build",
                            defaultMessage: "Build",
                            description: "The name of a group of items in the main site subnav"
                        }),
                        learn: e.formatMessage({
                            id: "nav.mainItems.learn",
                            defaultMessage: "Learn",
                            description: "The name of a group of items in the main site subnav"
                        }),
                        browse: e.formatMessage({
                            id: "nav.mainItems.browse",
                            defaultMessage: "Browse",
                            description: "The name of a group of items in the main site footer"
                        }),
                        sites: e.formatMessage({
                            id: "nav.mainItems.sites",
                            defaultMessage: "Sites",
                            description: "The name of a group of items in the main site subnav"
                        }),
                        teams: e.formatMessage({
                            id: "nav.mainItems.teams",
                            defaultMessage: "Teams",
                            description: "The name of a link in the main site navigation"
                        }),
                        individuals: e.formatMessage({
                            id: "nav.mainItems.individuals",
                            defaultMessage: "Individuals",
                            description: "The name of a link in the main site navigation"
                        }),
                        integrations: e.formatMessage({
                            id: "nav.mainItems.integrations",
                            defaultMessage: "Integrations",
                            description: "The name of a link in the main site navigation"
                        })
                    },
                    labels: {
                        notionFor: e.formatMessage({
                            id: "nav.labels.notionFor",
                            defaultMessage: "Notion for"
                        })
                    },
                    items: {
                        notion: e.formatMessage({
                            id: "nav.items.notion",
                            defaultMessage: "{notion}",
                            description: "Notion the product name"
                        }, {
                            notion: (0, i.w)(e.locale)
                        }),
                        affiliates: e.formatMessage({
                            id: "nav.items.affiliates",
                            defaultMessage: "Affiliates",
                            description: "Navigation link to /affiliates page"
                        }),
                        partnerPrograms: e.formatMessage({
                            id: "nav.items.partnerPrograms",
                            defaultMessage: "Partner programs",
                            description: "Navigation link to /partner-programs page"
                        }),
                        home: e.formatMessage({
                            id: "nav.items.home",
                            defaultMessage: "Home"
                        }),
                        smallBusiness: e.formatMessage({
                            id: "nav.items.smallBusiness",
                            defaultMessage: "Small business",
                            description: "Navigation link to /teams page"
                        }),
                        templateGallery: e.formatMessage({
                            id: "nav.items.templateGallery",
                            defaultMessage: "Template gallery"
                        }),
                        integrations: e.formatMessage({
                            id: "nav.items.integrations",
                            defaultMessage: "Integrations"
                        }),
                        connections: e.formatMessage({
                            id: "nav.items.connections",
                            defaultMessage: "Connections",
                            description: "Navigation link to integrations/connections page"
                        }),
                        enterprise: e.formatMessage({
                            id: "nav.items.enterprise",
                            defaultMessage: "Enterprise"
                        }),
                        personal: e.formatMessage({
                            id: "nav.items.personal",
                            defaultMessage: "Personal"
                        }),
                        design: e.formatMessage({
                            id: "nav.items.design",
                            defaultMessage: "Design"
                        }),
                        engineering: e.formatMessage({
                            id: "nav.items.engineering",
                            defaultMessage: "Engineering"
                        }),
                        marketing: e.formatMessage({
                            id: "nav.items.marketing",
                            defaultMessage: "Marketing"
                        }),
                        product: e.formatMessage({
                            id: "nav.items.product",
                            defaultMessage: "Product"
                        }),
                        startups: e.formatMessage({
                            id: "nav.items.startups",
                            defaultMessage: "Startups"
                        }),
                        remoteWork: e.formatMessage({
                            id: "nav.items.remoteWork",
                            defaultMessage: "Remote work"
                        }),
                        nonprofits: e.formatMessage({
                            id: "nav.items.nonProfits",
                            defaultMessage: "Nonprofits",
                            description: "Label for a nav item on the marketing site."
                        }),
                        blog: e.formatMessage({
                            id: "nav.items.blog",
                            defaultMessage: "Blog"
                        }),
                        notionAcademy: e.formatMessage({
                            id: "nav.items.notionAcademy",
                            defaultMessage: "Notion Academy"
                        }),
                        guides: e.formatMessage({
                            id: "nav.items.guides",
                            defaultMessage: "Guides & tutorials"
                        }),
                        webinars: e.formatMessage({
                            id: "nav.items.webinars",
                            defaultMessage: "Webinars"
                        }),
                        helpCenter: e.formatMessage({
                            id: "nav.items.helpCenter",
                            defaultMessage: "Help center"
                        }),
                        apiDocs: e.formatMessage({
                            id: "nav.items.apiDocs",
                            defaultMessage: "API docs"
                        }),
                        webClipper: e.formatMessage({
                            id: "nav.items.webClipper",
                            defaultMessage: "Web Clipper"
                        }),
                        mail: e.formatMessage({
                            id: "nav.items.mail",
                            defaultMessage: "Mail",
                            description: "The Mail product name"
                        }),
                        notionCalendar: e.formatMessage({
                            id: "nav.items.notionCalendar",
                            defaultMessage: "Notion Calendar",
                            description: "The product Calendar"
                        }),
                        personalUse: e.formatMessage({
                            id: "nav.items.personalUse",
                            defaultMessage: "Personal use"
                        }),
                        managers: e.formatMessage({
                            id: "nav.items.managers",
                            defaultMessage: "Managers"
                        }),
                        community: e.formatMessage({
                            id: "nav.items.community",
                            defaultMessage: "Community"
                        }),
                        whatsNew: e.formatMessage({
                            id: "nav.items.whatsNew",
                            defaultMessage: "What’s new"
                        }),
                        whatsNewLinkText: e.formatMessage({
                            id: "globalNavigation.features.whatsNew.linkText",
                            defaultMessage: "See what’s new",
                            description: "Link text for What's New navigation item in the product dropdown footer"
                        }),
                        hireAConsultant: e.formatMessage({
                            id: "nav.items.hireAConsultant",
                            description: "Header navigation link text which links to a page to hire a consultant",
                            defaultMessage: "Hire a consultant"
                        }),
                        api: e.formatMessage({
                            id: "nav.items.api",
                            defaultMessage: "Notion API"
                        }),
                        meetingNotes: e.formatMessage({
                            id: "nav.items.meetingNotes",
                            defaultMessage: "Meeting notes"
                        }),
                        toDos: e.formatMessage({
                            id: "nav.items.toDos",
                            defaultMessage: "To-dos"
                        }),
                        weeklyAgenda: e.formatMessage({
                            id: "nav.items.weeklyAgenda",
                            defaultMessage: "Weekly agenda"
                        }),
                        docs: e.formatMessage({
                            id: "nav.items.docs",
                            defaultMessage: "Docs"
                        }),
                        calendar: e.formatMessage({
                            id: "nav.items.calendar",
                            defaultMessage: "Calendar",
                            description: "The name of Notion's calendar product"
                        }),
                        roadmap: e.formatMessage({
                            id: "nav.items.roadmap",
                            defaultMessage: "Roadmap"
                        }),
                        companyHome: e.formatMessage({
                            id: "nav.items.companyHome",
                            defaultMessage: "Company home"
                        }),
                        designSystem: e.formatMessage({
                            id: "nav.items.designSystem",
                            defaultMessage: "Design system"
                        }),
                        productWiki: e.formatMessage({
                            id: "nav.items.productWiki",
                            defaultMessage: "Product wiki"
                        }),
                        productFaq: e.formatMessage({
                            id: "nav.items.productFaq",
                            defaultMessage: "Product FAQ"
                        }),
                        employeeOnboarding: e.formatMessage({
                            id: "nav.items.newHireOnboarding",
                            defaultMessage: "New hire onboarding"
                        }),
                        contentCalendar: e.formatMessage({
                            id: "nav.items.contentCalendar",
                            defaultMessage: "Content calendar"
                        }),
                        aboutUs: e.formatMessage({
                            id: "nav.items.aboutUS",
                            defaultMessage: "About us"
                        }),
                        careers: e.formatMessage({
                            id: "nav.items.careers",
                            defaultMessage: "Careers"
                        }),
                        mediaKit: e.formatMessage({
                            id: "nav.items.mediaKit",
                            defaultMessage: "Media kit"
                        }),
                        requestADemo: e.formatMessage({
                            id: "nav.items.requestADemo",
                            defaultMessage: "Request a demo",
                            description: "A call to action for a user to click a link or button"
                        }),
                        contactSupport: e.formatMessage({
                            id: "nav.items.contactSupport",
                            defaultMessage: "Contact support"
                        }),
                        emailUs: e.formatMessage({
                            id: "nav.items.emailUs",
                            defaultMessage: "Email us"
                        }),
                        termsAndPrivacy: e.formatMessage({
                            id: "nav.items.termsAndPrivacy",
                            defaultMessage: "Terms & privacy"
                        }),
                        californiaPrivacyNotice: e.formatMessage({
                            id: "nav.items.californiaPrivacyNotice",
                            defaultMessage: "California Privacy Notice",
                            description: "Footer link to a California state specific privacy notice"
                        }),
                        yourPrivacyRights: e.formatMessage({
                            id: "nav.items.yourPrivacyRights",
                            defaultMessage: "Your privacy rights",
                            description: "Footer link to a California state specific privacy notice"
                        }),
                        status: e.formatMessage({
                            id: "nav.items.status",
                            defaultMessage: "Status"
                        }),
                        pricing: e.formatMessage({
                            id: "nav.items.pricing",
                            defaultMessage: "Pricing"
                        }),
                        mobileApps: e.formatMessage({
                            id: "nav.items.mobileApps",
                            defaultMessage: "Mobile apps"
                        }),
                        desktopApps: e.formatMessage({
                            id: "nav.items.desktopApps",
                            defaultMessage: "Desktop apps"
                        }),
                        mobileAppPlatforms: e.formatMessage({
                            id: "nav.items.mobileAppPlatforms",
                            defaultMessage: "iOS & Android"
                        }),
                        desktopAppPlatforms: e.formatMessage({
                            id: "nav.items.desktopAppPlatforms",
                            defaultMessage: "Mac & Windows"
                        }),
                        security: e.formatMessage({
                            id: "nav.items.security",
                            defaultMessage: "Security"
                        }),
                        it: e.formatMessage({
                            id: "nav.items.it",
                            defaultMessage: "IT",
                            description: "The name of a link in the main site top nav"
                        }),
                        signUp: e.formatMessage({
                            id: "nav.items.signUp",
                            defaultMessage: "Sign up",
                            description: "The name of a link in the main site footer"
                        }),
                        logIn: e.formatMessage({
                            id: "nav.items.logIn",
                            defaultMessage: "Log in",
                            description: "The name of a link in the main site footer"
                        }),
                        cookieSettings: e.formatMessage({
                            id: "nav.items.cookieSettings",
                            defaultMessage: "Cookie settings",
                            description: "The name of a link in the main site footer"
                        }),
                        customerStories: e.formatMessage({
                            id: "nav.items.customers",
                            defaultMessage: "Customer stories",
                            description: "The name of a link in the main site top nav"
                        })
                    },
                    buttons: {
                        logIn: e.formatMessage({
                            id: "nav.buttons.logIn",
                            defaultMessage: "Log in"
                        }),
                        getNotionFree: e.formatMessage({
                            id: "global.signup",
                            description: "CTA text prompting users to sign up for Notion",
                            defaultMessage: "Get Notion free"
                        }),
                        getMailFree: e.formatMessage({
                            id: "nav.buttons.getMailFree",
                            description: "CTA text prompting users to try Notion Mail free",
                            defaultMessage: "Get Notion Mail free"
                        }),
                        getCalendarFree: e.formatMessage({
                            id: "nav.buttons.getCalendarFree",
                            description: "CTA text prompting users to try Notion Calendar free",
                            defaultMessage: "Get Notion Calendar free"
                        }),
                        download: e.formatMessage({
                            id: "nav.buttons.download",
                            defaultMessage: "Download Notion"
                        }),
                        requestDemo: e.formatMessage({
                            id: "nav.buttons.requestDemo",
                            defaultMessage: "Request a demo",
                            description: "The name of a call to action button in the main site navigation"
                        }),
                        contactSales: e.formatMessage({
                            id: "nav.buttons.contactSales",
                            defaultMessage: "Contact sales",
                            description: "The name of a call to action button in the main site navigation"
                        })
                    }
                }
            }
        },
        663042: function(e, a, t) {
            "use strict";
            t.d(a, {
                A: function() {
                    return l
                }
            });
            var i = t(222126);
            let n = {
                    v1: "Join Notion",
                    v2: "Join Notion free",
                    v3: "Get Notion",
                    v4: "Try Notion"
                },
                o = {
                    v1: "無料で始める"
                },
                s = {
                    v1: "Notion 무료 체험하기",
                    v2: "나만의 워크스페이스 만들기",
                    v3: "계정 만들기"
                },
                r = {
                    v1: "Crie uma conta"
                };

            function l() {
                let e = (0, i.d)("marketing_cta_copy"),
                    a = (0, i.d)("marketing_cta_copy_ja");
                for (let {
                        variant: t,
                        variantMap: l
                    } of [{
                        variant: e,
                        variantMap: n
                    }, {
                        variant: a,
                        variantMap: o
                    }, {
                        variant: (0, i.d)("marketing_cta_copy_ko"),
                        variantMap: s
                    }, {
                        variant: (0, i.d)("marketing_cta_copy_pt"),
                        variantMap: r
                    }])
                    if (t && "control" !== t) return l[t] ? ? null;
                return null
            }
        },
        282740: function(e, a, t) {
            "use strict";

            function i(e) {
                if (!e) return 1;
                if ("string" != typeof e) return -1;
                let a = parseInt(e);
                return isNaN(a) || a < 1 ? -1 : a
            }
            t.d(a, {
                $v: function() {
                    return u
                },
                Bk: function() {
                    return o
                },
                I: function() {
                    return g
                },
                J1: function() {
                    return d
                },
                Qc: function() {
                    return m
                },
                Rm: function() {
                    return l
                },
                WD: function() {
                    return i
                },
                aE: function() {
                    return s
                },
                c_: function() {
                    return n
                },
                dt: function() {
                    return v
                },
                m3: function() {
                    return _
                },
                ow: function() {
                    return f
                },
                qz: function() {
                    return r
                },
                s1: function() {
                    return b
                },
                sN: function() {
                    return p
                },
                vr: function() {
                    return c
                }
            });
            let n = ["newest", "oldest"],
                o = ["number_of_duplicates", "number_of_templates", "alphabetical"],
                s = new Set(o),
                r = ["all", "work", "school", "personal", "projects", "wiki", "docs"],
                l = ["english_and_user_locale", "user_locale"],
                c = new Set(l),
                d = ["free_and_paid", "free", "paid"],
                u = new Set(d),
                g = ["notion_and_community", "notion", "community"],
                m = new Set(g),
                f = ["popular", "duplications", "recent"],
                p = ["true", "false"],
                v = new Set(f),
                _ = ["all", "certified", "notion_recommended"],
                b = new Set(_)
        },
        671167: function(e, a, t) {
            "use strict";
            t.d(a, {
                $I: function() {
                    return v
                },
                Bh: function() {
                    return h
                },
                Ec: function() {
                    return u
                },
                I7: function() {
                    return p
                },
                Yp: function() {
                    return l
                },
                d: function() {
                    return m
                },
                d9: function() {
                    return g
                },
                h8: function() {
                    return b
                },
                kS: function() {
                    return _
                },
                pA: function() {
                    return c
                },
                tw: function() {
                    return d
                },
                uX: function() {
                    return f
                }
            });
            var i = t(819126),
                n = t.n(i),
                o = t(614050),
                s = t(486535),
                r = t(282740);

            function l() {
                return o._j.templates
            }

            function c(e, a) {
                let t = a && (0, s.jM)(a) && !(0, s.pc)(a) ? s.ih[a] : void 0;
                return t && "en-us" !== t.toLocaleLowerCase() ? `/${t.toLowerCase()}${l()}/${e}` : `${l()}/${e}`
            }

            function d(e) {
                if (!e) return `${l()}/creators`;
                let {
                    category: a,
                    qualification: t,
                    orderBy: i,
                    page: o
                } = e, s = n().stringify({
                    category: "all" === a ? void 0 : a,
                    qualification: "notion_recommended" === t ? void 0 : t,
                    orderBy: "number_of_duplicates" === i ? void 0 : i,
                    page: !o || o <= 1 ? void 0 : o
                });
                return s ? `${l()}/creators?${s}` : `${l()}/creators`
            }

            function u(e) {
                return `/@${e}`
            }

            function g() {
                return `${l()}/category`
            }

            function m(e, a, t) {
                let {
                    orderBy: i,
                    madeBy: o,
                    paid: s,
                    page: r,
                    locales: l
                } = a || {}, c = n().stringify({
                    orderBy: "popular" === i ? void 0 : i,
                    madeBy: "notion_and_community" === o ? void 0 : o,
                    locales: "english_and_user_locale" === l ? void 0 : l,
                    paid: "free_and_paid" === s ? void 0 : s,
                    page: !r || r <= 1 ? void 0 : r
                });
                return "paid=free" === c || "free" === t ? `${g()}/free-${e}-templates` : "page=2" === c || "best" === t ? `${g()}/best-${e}-templates` : c ? `${g()}/${e}?${c}` : `${g()}/${e}`
            }

            function f() {
                return `${l()}/collections`
            }

            function p(e) {
                let {
                    orderBy: a,
                    page: t
                } = e, i = n().stringify({
                    orderBy: "newest" === a ? void 0 : a,
                    page: !t || t <= 1 ? void 0 : t
                });
                return i ? `${l()}/collections/feed?${i}` : `${l()}/collections/feed`
            }

            function v(e) {
                return `${f()}/${e}`
            }

            function _() {
                return `${l()}/search`
            }

            function b(e) {
                let {
                    orderBy: a,
                    madeBy: t,
                    paid: i,
                    page: n,
                    locales: o
                } = e, s = r.dt.has(a) ? a : "popular", l = r.Qc.has(t) ? t : "notion_and_community", c = r.$v.has(i) ? i : "free_and_paid", d = r.vr.has(o) ? o : "english_and_user_locale", u = !(s !== a || l !== t || c !== i || d !== o || isNaN(parseInt(n.toString())));
                return {
                    validated: u,
                    params: {
                        orderBy: s,
                        madeBy: l,
                        paid: c,
                        locales: d,
                        page: u && parseInt(n.toString()) || 1
                    }
                }
            }

            function h(e, a) {
                let {
                    category: t,
                    qualification: i,
                    orderBy: n,
                    page: o
                } = e, s = r.aE.has(n) ? n : "number_of_duplicates", l = r.s1.has(i) ? i : "notion_recommended", c = new Set(a).has(t) ? t : "all", d = !(c !== t || l !== i || s !== n || isNaN(parseInt(o.toString())));
                return {
                    validated: d,
                    params: {
                        category: c,
                        qualification: l,
                        orderBy: s,
                        page: d && parseInt(o.toString()) || 1
                    }
                }
            }
        },
        873754: function(e, a, t) {
            "use strict";
            t.d(a, {
                Q: function() {
                    return s
                }
            });
            var i = t(202784),
                n = t(716952),
                o = t(251281);

            function s() {
                let e = (0, n.YB)();
                return {
                    navStrings: (0, i.useMemo)(() => (0, o.F)(e), [e])
                }
            }
        },
        507830: function(e, a, t) {
            "use strict";
            t.d(a, {
                O: function() {
                    return i
                }
            });
            let i = "directional-icon"
        },
        690858: function(e, a, t) {
            "use strict";
            t.d(a, {
                l: function() {
                    return o
                }
            });
            var i = t(552322);
            t(202784);
            let n = {
                width: "100%",
                height: "100%",
                display: "block",
                fill: "inherit",
                flexShrink: 0
            };

            function o({
                children: e,
                viewBox: a,
                style: t,
                className: o,
                label: s,
                fittedViewBox: r,
                fitToViewBox: l,
                skipBaseStyles: c
            }) {
                return (0, i.jsx)("svg", { ...void 0 !== s ? {
                        "aria-label": s
                    } : {
                        "aria-hidden": !0
                    },
                    role: "graphics-symbol",
                    viewBox: l && r ? function({
                        viewBox: e,
                        fittedViewBox: a,
                        direction: t = "all"
                    }) {
                        let [i, n, o, s] = e.split(" ").map(Number), [r, l, c, d] = a.split(" ").map(Number);
                        return "horizontal" === t ? `${r} ${n} ${c} ${s}` : "vertical" === t ? `${i} ${l} ${o} ${d}` : `${r} ${l} ${c} ${d}`
                    }({
                        viewBox: a,
                        fittedViewBox: r,
                        direction: l
                    }) : a,
                    style: c ? t : { ...n,
                        ...t
                    },
                    className: o,
                    children: e
                })
            }
        },
        808079: function(e, a, t) {
            "use strict";
            t.d(a, {
                ZG: function() {
                    return r
                },
                f0: function() {
                    return l
                },
                IU: function() {
                    return d
                },
                CZ: function() {
                    return u
                },
                x7: function() {
                    return c
                }
            });
            var i = t(552322);
            t(202784);
            var n = t(914775),
                o = t(507830),
                s = t(690858);
            let r = {
                    xxs: 12,
                    xs: 14,
                    sm: 16,
                    default: 20,
                    lg: 22,
                    xl: 32
                },
                l = {
                    default: r.default,
                    small: r.sm,
                    fill: r.default,
                    fillSmall: r.sm,
                    tintable: r.default
                };

            function c(e) {
                return !!(e && (0, n.qg)(r, e))
            }

            function d(e, a, t) {
                let {
                    viewBox: n,
                    fittedViewBox: l,
                    svg: c
                } = a, d = n ? ? `0 0 ${r.default} ${r.default}`;
                return Object.assign((t, n, r, u, g) => {
                    let m = [e, a.directional && o.O, n].filter(Boolean).join(" ");
                    return (0, i.jsx)(s.l, {
                        viewBox: d,
                        className: m,
                        style: t,
                        label: r,
                        fittedViewBox: l,
                        fitToViewBox: u,
                        skipBaseStyles: g,
                        children: c
                    })
                }, {
                    __iconDefinition: { ...a,
                        viewBox: d,
                        fittedViewBox: l,
                        variant: t
                    }
                })
            }

            function u(e, a, t) {
                return {
                    name: e,
                    variants: a,
                    searchTerms: t
                }
            }
        },
        769426: function(e, a, t) {
            "use strict";
            t.d(a, {
                Y: function() {
                    return s
                }
            });
            var i = t(552322);
            t(202784);
            var n = t(808079);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.06 15.66",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10.55 12.808a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                        }), (0, i.jsx)("path", {
                            d: "M10 1.95a4 4 0 0 0-4 4v1.433a2.426 2.426 0 0 0-2.025 2.392v5.4A2.425 2.425 0 0 0 6.4 17.6h7.2a2.425 2.425 0 0 0 2.425-2.425v-5.4A2.426 2.426 0 0 0 14 7.383V5.95a4 4 0 0 0-4-4m2.75 5.4h-5.5v-1.4a2.75 2.75 0 0 1 5.5 0zM5.225 9.775c0-.649.526-1.175 1.175-1.175h7.2c.649 0 1.175.526 1.175 1.175v5.4c0 .649-.526 1.175-1.175 1.175H6.4a1.175 1.175 0 0 1-1.175-1.175z"
                        })]
                    })
                },
                s = (0, n.IU)("lock", o, "default")
        },
        246866: function(e, a, t) {
            "use strict";
            t.d(a, {
                v: function() {
                    return s
                }
            });
            var i = t(552322);
            t(202784);
            var n = t(808079);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, i.jsx)("path", {
                        d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                    })
                },
                s = (0, n.IU)("magnifyingGlass", o, "default")
        },
        625611: function(e, a, t) {
            "use strict";
            t.d(a, {
                S: function() {
                    return s
                }
            });
            var i = t(552322);
            t(202784);
            var n = t(808079);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M13.3 14.25a.55.55 0 0 1-.55.55h-5.5a.55.55 0 1 1 0-1.1h5.5a.55.55 0 0 1 .55.55m-.55-1.95a.55.55 0 1 0 0-1.1h-5.5a.55.55 0 0 0 0 1.1z"
                        }), (0, i.jsx)("path", {
                            d: "M6.25 2.375A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.121c0-.563-.224-1.104-.622-1.502L11.63 2.997a2.13 2.13 0 0 0-1.502-.622zM5.375 4.5c0-.483.392-.875.875-.875h3.7V6.25A2.05 2.05 0 0 0 12 8.3h2.625v7.2a.875.875 0 0 1-.875.875h-7.5a.875.875 0 0 1-.875-.875zm8.691 2.7H12a.95.95 0 0 1-.95-.95V4.184z"
                        })]
                    })
                },
                s = (0, n.IU)("page", o, "default")
        },
        831936: function(e) {
            e.exports = {
                arrow: "arrow_arrow___6mKn",
                arrowFlipRtl: "arrow_arrowFlipRtl__ur0Ug"
            }
        },
        637275: function(e) {
            e.exports = {
                graphic: "graphic_graphic__jmWdv",
                isFilled: "graphic_isFilled__BAfn_"
            }
        },
        391738: function(e) {
            e.exports = {
                linkText: "linkText_linkText__527kz",
                colorThemePrimary: "linkText_colorThemePrimary__R4r7b",
                colorThemeSecondary: "linkText_colorThemeSecondary__WYQyx",
                linkContent: "linkText_linkContent__1nr8w",
                underlineAlways: "linkText_underlineAlways__lY7C_",
                underlineDisabled: "linkText_underlineDisabled__PziiY",
                hasArrow: "linkText_hasArrow__2BwWV"
            }
        },
        949220: function(e) {
            e.exports = {
                navItem: "navItem_navItem__qrlp3",
                icon: "navItem_icon__LmjHo",
                caption: "navItem_caption__xLssY",
                emphasis: "navItem_emphasis__Y6mWY",
                link: "navItem_link__q_Otw",
                widthFitContent: "navItem_widthFitContent__VkWsW"
            }
        },
        691101: function(e) {
            e.exports = {
                semanticTypography: "semanticTypography_semanticTypography__mWJkv",
                variantGlobalTitle: "semanticTypography_variantGlobalTitle__D1p6b",
                variantGlobalTitleSubtle: "semanticTypography_variantGlobalTitleSubtle__8vTKi",
                variantGlobalTitleEmphasis: "semanticTypography_variantGlobalTitleEmphasis__jfQi4",
                variantGlobalHeading: "semanticTypography_variantGlobalHeading__4Io9i",
                variantGlobalSubheading: "semanticTypography_variantGlobalSubheading__GlmQb",
                variantGlobalContext: "semanticTypography_variantGlobalContext__VDlwW",
                variantGlobalEyebrow: "semanticTypography_variantGlobalEyebrow__R53CY",
                variantGlobalBody: "semanticTypography_variantGlobalBody__yYPP0",
                variantGlobalBodySerif: "semanticTypography_variantGlobalBodySerif__R_c6k",
                variantGlobalBodyLink: "semanticTypography_variantGlobalBodyLink__xnDqt",
                variantGlobalCaption: "semanticTypography_variantGlobalCaption__fFXUL",
                variantGlobalMeta: "semanticTypography_variantGlobalMeta__9SjMh",
                variantGlobalQuote: "semanticTypography_variantGlobalQuote__cJpu2",
                variantGlobalDeck: "semanticTypography_variantGlobalDeck__VQb79",
                variantGlobalStat: "semanticTypography_variantGlobalStat__dH0XI",
                variantInteractionButtonSmall: "semanticTypography_variantInteractionButtonSmall__LAKr_",
                variantInteractionButtonMedium: "semanticTypography_variantInteractionButtonMedium__HCJEu",
                variantInteractionButtonLarge: "semanticTypography_variantInteractionButtonLarge__7OLEp",
                variantInteractionFormLabel: "semanticTypography_variantInteractionFormLabel__RRG67",
                variantInteractionFormCaption: "semanticTypography_variantInteractionFormCaption__y_UYe",
                variantInteractionFormInput: "semanticTypography_variantInteractionFormInput__6bR3z",
                variantCardTitle: "semanticTypography_variantCardTitle__nqcQy",
                variantCardTitleFeature: "semanticTypography_variantCardTitleFeature__B250k",
                variantCardTitleSummary: "semanticTypography_variantCardTitleSummary__lvrMk",
                variantCardTitleBlock: "semanticTypography_variantCardTitleBlock__8yFeJ",
                variantCardBody: "semanticTypography_variantCardBody__E_9cg",
                variantCardBodySummary: "semanticTypography_variantCardBodySummary__7ucTw",
                variantCardContext: "semanticTypography_variantCardContext__HGM89",
                variantCardContextFeature: "semanticTypography_variantCardContextFeature__c5eKB",
                variantCardNote: "semanticTypography_variantCardNote__nw7e8",
                variantCardQuote: "semanticTypography_variantCardQuote__PsrGR",
                variantNavigationHeading: "semanticTypography_variantNavigationHeading__uo7yO",
                variantNavigationLink: "semanticTypography_variantNavigationLink__y_A9_",
                variantNavigationLinkEmphasis: "semanticTypography_variantNavigationLinkEmphasis__LHUdD",
                variantNavigationCaption: "semanticTypography_variantNavigationCaption__B4dm6",
                variantNavigationCaptionSubtle: "semanticTypography_variantNavigationCaptionSubtle__wein4"
            }
        },
        518324: function(e) {
            e.exports = {
                surface: "surface_surface__zVh_Z",
                surfaceBase: "surface_surfaceBase__UD3lo",
                surfaceNeutral: "surface_surfaceNeutral__1Cszl",
                surfaceAccent: "surface_surfaceAccent___PDKt",
                surfaceAccentMuted: "surface_surfaceAccentMuted__XfqKa",
                surfaceAccentSoft: "surface_surfaceAccentSoft__V2JoT",
                isInteractive: "surface_isInteractive__miueI"
            }
        },
        853033: function(e) {
            e.exports = {
                badge: "badge_badge__IoJs4",
                badgePrimary: "badge_badgePrimary__hx2xR",
                badgePrimaryRounded: "badge_badgePrimaryRounded__WWAj4",
                badgeSecondary: "badge_badgeSecondary__JFc9u",
                badgeOutline: "badge_badgeOutline___4Kwx",
                badgeMuted: "badge_badgeMuted__Aw8i9",
                badgeMutedSecondary: "badge_badgeMutedSecondary__1qJRE",
                badgeTertiaryRounded: "badge_badgeTertiaryRounded__WR4Ug",
                badgeNoBackground: "badge_badgeNoBackground__9wYLz",
                partnerBadge: "badge_partnerBadge__zq_FI"
            }
        },
        346391: function(e) {
            e.exports = {
                iconLayout: "experiments_iconLayout__wZpiq",
                comboLayout: "experiments_comboLayout__KCODY",
                signupButton: "experiments_signupButton__E_ZPL",
                contactSalesButton: "experiments_contactSalesButton__UECpJ",
                iconButton: "experiments_iconButton__5H9KD",
                comboLayoutSeparator: "experiments_comboLayoutSeparator__264Ce",
                ghostButton: "experiments_ghostButton__Bml0W"
            }
        },
        11884: function(e) {
            e.exports = {
                scrollSentinel: "globalNavigation_scrollSentinel__gP74N",
                stickyWrapper: "globalNavigation_stickyWrapper__SYZfy",
                globalNavigation: "globalNavigation_globalNavigation__7c1YP",
                navShadowScrolled: "globalNavigation_navShadowScrolled__pZKcg",
                isScrolled: "globalNavigation_isScrolled__FEBpp",
                container: "globalNavigation_container__x43sE",
                logoContainer: "globalNavigation_logoContainer__BR_e9",
                logoStickerized: "globalNavigation_logoStickerized__aqGkF",
                logo: "globalNavigation_logo__i44_w",
                darkMode: "globalNavigation_darkMode__Rg8un",
                badgeContainer: "globalNavigation_badgeContainer__p0zES",
                links: "globalNavigation_links__tZquA",
                link: "globalNavigation_link__ofzIw",
                button: "globalNavigation_button__VimOF",
                badge: "globalNavigation_badge__Gkix_",
                active: "globalNavigation_active__SsaRU",
                dropdownTrigger: "globalNavigation_dropdownTrigger__Vd0Te",
                dropdownItem: "globalNavigation_dropdownItem__Kb38H",
                dropdownLabel: "globalNavigation_dropdownLabel__B6CjQ",
                dropdownDescription: "globalNavigation_dropdownDescription__W3_Rm",
                actions: "globalNavigation_actions__hEI1Y",
                secondaryActions: "globalNavigation_secondaryActions__5gLqb",
                primaryCta: "globalNavigation_primaryCta___fviu",
                mobileActions: "globalNavigation_mobileActions__7AZdH",
                divider: "globalNavigation_divider__OM57s",
                horizontalDivider: "globalNavigation_horizontalDivider__fvLDd",
                dropdown: "globalNavigation_dropdown__vn77x",
                open: "globalNavigation_open__OEVcP",
                close: "globalNavigation_close___eHO3",
                visuallyHidden: "globalNavigation_visuallyHidden__dK6zo",
                dropdownContainer: "globalNavigation_dropdownContainer__8i441",
                dropdownGrid: "globalNavigation_dropdownGrid__fmbJC",
                getStartedDropdownSection: "globalNavigation_getStartedDropdownSection__4tj6R",
                dropdownGridExtended: "globalNavigation_dropdownGridExtended__UfaTL",
                dropdownSection: "globalNavigation_dropdownSection__AAvOZ",
                subtitleHeading: "globalNavigation_subtitleHeading__8TZdK",
                subtitleHeadingSmall: "globalNavigation_subtitleHeadingSmall__LRb2k",
                subnavItem: "globalNavigation_subnavItem__cKULm",
                notionDropdownHeading: "globalNavigation_notionDropdownHeading__fkeG6",
                exploreDropdownSubnavItemSmall: "globalNavigation_exploreDropdownSubnavItemSmall___GFy3",
                notionDropdownSmallHeading: "globalNavigation_notionDropdownSmallHeading__yRdQH",
                linksSection: "globalNavigation_linksSection__bY2SL",
                smallLinksSection: "globalNavigation_smallLinksSection__4sfln",
                middleColumn: "globalNavigation_middleColumn__pOkd5",
                downloadBox: "globalNavigation_downloadBox__gNxht",
                downloadBoxContent: "globalNavigation_downloadBoxContent__VvNZL",
                downloadBoxText: "globalNavigation_downloadBoxText__aRRAG",
                downloadBoxImageContainer: "globalNavigation_downloadBoxImageContainer__KEjE3",
                downloadBoxImage: "globalNavigation_downloadBoxImage__a_uGn",
                mobileMenuOpen: "globalNavigation_mobileMenuOpen__o1tsx",
                mobileMenu: "globalNavigation_mobileMenu__9ZjPP",
                mobileMenuContent: "globalNavigation_mobileMenuContent__mt45y",
                mobileMenuLinks: "globalNavigation_mobileMenuLinks__iZcqp",
                mobileMenuSection: "globalNavigation_mobileMenuSection__sreT7",
                mobileMenuLink: "globalNavigation_mobileMenuLink__M7yat",
                inactiveLink: "globalNavigation_inactiveLink__oUAWy",
                mobileMenuLinkContent: "globalNavigation_mobileMenuLinkContent__LKoLC",
                mobileMenuActions: "globalNavigation_mobileMenuActions__VNA1Z",
                mobileActionButton: "globalNavigation_mobileActionButton__GG1S2",
                mobileSubmenu: "globalNavigation_mobileSubmenu__ndil4",
                slideDown: "globalNavigation_slideDown__fiX_y",
                mobileDropdownContent: "globalNavigation_mobileDropdownContent__k2NsN",
                noWrap: "globalNavigation_noWrap__Af_5S",
                mobileDropdownSection: "globalNavigation_mobileDropdownSection__d09eD",
                mobileDropdownExploreSection: "globalNavigation_mobileDropdownExploreSection__f0vjE",
                mobileButton: "globalNavigation_mobileButton__72Z6F",
                mobileSubnav: "globalNavigation_mobileSubnav__fEQG2",
                mobileSubnavBack: "globalNavigation_mobileSubnavBack__16RiP",
                backArrow: "globalNavigation_backArrow__OEHCI",
                mobileSubnavContent: "globalNavigation_mobileSubnavContent__uFq77",
                mobileSubnavSection: "globalNavigation_mobileSubnavSection__FMqee",
                mobileMenuLinkContainer: "globalNavigation_mobileMenuLinkContainer__bodMi",
                inlineSubnav: "globalNavigation_inlineSubnav__rYSgA",
                mobileSubnavLink: "globalNavigation_mobileSubnavLink__LJl_6",
                chevron: "globalNavigation_chevron__FLxoW",
                chevronOpen: "globalNavigation_chevronOpen__SgjT6",
                desktopDropDownNavigationHeading: "globalNavigation_desktopDropDownNavigationHeading__tA_tr",
                mobileDropDownNavigationHeading: "globalNavigation_mobileDropDownNavigationHeading__HSDji",
                mobileDropdownSectionWithIcons: "globalNavigation_mobileDropdownSectionWithIcons__fN_hz",
                mobileDropdownSectionWithoutIcons: "globalNavigation_mobileDropdownSectionWithoutIcons__J3N_t",
                bannerAi: "globalNavigation_bannerAi__rrj9J",
                banner: "globalNavigation_banner__HiCN4",
                bannerStart: "globalNavigation_bannerStart__7_zJX",
                navItemHideCaptionMobile: "globalNavigation_navItemHideCaptionMobile__OBTQy",
                bannerEnd: "globalNavigation_bannerEnd__15fHZ",
                footer: "globalNavigation_footer__9C0F0",
                footerLeft: "globalNavigation_footerLeft__NWVdQ",
                footerRight: "globalNavigation_footerRight__2b5Fn",
                footerWhatsNewContainer: "globalNavigation_footerWhatsNewContainer__0k4lL",
                visible: "globalNavigation_visible__3AdT3",
                footerWhatsNewText: "globalNavigation_footerWhatsNewText__3mPcX",
                footerIcon: "globalNavigation_footerIcon__UpqK7",
                experimentNavLinksLeftAlign: "globalNavigation_experimentNavLinksLeftAlign__y9Vi4",
                experimentMaxWidth: "globalNavigation_experimentMaxWidth__yuHGU",
                experimentPaddingShift: "globalNavigation_experimentPaddingShift__n9nPO",
                experimentComboCta: "globalNavigation_experimentComboCta__tug6s",
                globalNavigationWrapper: "globalNavigation_globalNavigationWrapper__dUhMe",
                navBgScrolled: "globalNavigation_navBgScrolled__qcb4e",
                navBgVarHeroExit: "globalNavigation_navBgVarHeroExit__Kk6M2",
                navTokensHeroExit: "globalNavigation_navTokensHeroExit__nkR7m",
                logoFillHeroExit: "globalNavigation_logoFillHeroExit__liWYo",
                heroExitedFallback: "globalNavigation_heroExitedFallback__cWopm",
                thinkTogetherNavBgScrolled: "globalNavigation_thinkTogetherNavBgScrolled__HeD6_",
                thinkTogetherNavBgHeroExit: "globalNavigation_thinkTogetherNavBgHeroExit__vSKro",
                thinkTogetherNavTokensHeroExit: "globalNavigation_thinkTogetherNavTokensHeroExit__P9vdt",
                thinkTogetherLogoFillHeroExit: "globalNavigation_thinkTogetherLogoFillHeroExit__33UgN",
                fadeIn: "globalNavigation_fadeIn__BTvkx",
                fadeOut: "globalNavigation_fadeOut__UET7A"
            }
        },
        94755: function(e) {
            e.exports = {
                dialog: "header_dialog__dplE5",
                mobileNavOpen: "header_mobileNavOpen__GComp",
                header: "header_header__ts5le",
                hasPageNav: "header_hasPageNav__YV_iM",
                hasNotificationVisible: "header_hasNotificationVisible__4_sgc",
                isScrolled: "header_isScrolled__Hewg_",
                positionSticky: "header_positionSticky__GQPEM",
                inner: "header_inner__MsrN6",
                isRedesigned: "header_isRedesigned__go3Qa",
                logoWrap: "header_logoWrap__HtTuH",
                logo: "header_logo__RW0M7",
                desktopActions: "header_desktopActions__8WAt9",
                mobileActions: "header_mobileActions__ENxAe",
                mobileCta: "header_mobileCta__E7st0",
                noWrap: "header_noWrap__EPHqC",
                mobileActionButton: "header_mobileActionButton__IT2wx"
            }
        },
        217985: function(e) {
            e.exports = {
                inlineLink: "InlineTextLink_inlineLink__oN8YM",
                colorTheme: "InlineTextLink_colorTheme__waxe8",
                colorInherit: "InlineTextLink_colorInherit__oGlTG",
                underlineDisabled: "InlineTextLink_underlineDisabled__bYdIb",
                underlineDisable: "InlineTextLink_underlineDisable__misgm",
                underlineOnHover: "InlineTextLink_underlineOnHover__J78xW",
                linkContent: "InlineTextLink_linkContent__SYI4r"
            }
        },
        604159: function(e) {
            e.exports = {
                menuToggle: "mobileTrigger_menuToggle__rtUmp"
            }
        },
        412595: function(e) {
            e.exports = {
                snackBar: "snackBar_snackBar__IYfOp",
                snackBarActive: "snackBar_snackBarActive__53Fvf",
                snackBarContent: "snackBar_snackBarContent__DqGBm"
            }
        },
        521613: function(e) {
            e.exports = {
                text: "text_text__cG3pf",
                textSizeBlockquote: "text_textSizeBlockquote__SUEXF",
                textSizeBody: "text_textSizeBody__4q5Cs",
                textColorLight: "text_textColorLight__Fy_uE",
                textColorMedium: "text_textColorMedium__XD_3v",
                textColorDark: "text_textColorDark__zjzNH",
                textColorWhite: "text_textColorWhite__H70dC",
                textColorRed: "text_textColorRed___ufoZ",
                textColorOrange: "text_textColorOrange__c9HYs",
                textColorTeal: "text_textColorTeal__9rN68",
                textColorBlue: "text_textColorBlue__v6Id1",
                textColorYellow: "text_textColorYellow__h_PrK",
                textColorPurple: "text_textColorPurple__KWi3r",
                textColorInherit: "text_textColorInherit__a2s_H",
                textWeightRegular: "text_textWeightRegular__lAQvj",
                textWeightMedium: "text_textWeightMedium__qgxjp",
                textWeightSemibold: "text_textWeightSemibold___lCV0",
                textWeightBold: "text_textWeightBold__NuyUS",
                textAlignStart: "text_textAlignStart__k0AG5",
                textAlignCenter: "text_textAlignCenter__3fEIx",
                textAlignEnd: "text_textAlignEnd__4xLpf",
                textAllCaps: "text_textAllCaps__U_Ykh",
                textWithMargin: "text_textWithMargin__xS5ac",
                textSizeFootnote: "text_textSizeFootnote__gdfM_",
                textSizeCaption: "text_textSizeCaption__3Geg0",
                textSizeNav: "text_textSizeNav__T2a_b"
            }
        }
    }
]);