! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1a26f75d-8ab8-4b40-bae7-c23f8e35b199", e._sentryDebugIdIdentifier = "sentry-dbid-1a26f75d-8ab8-4b40-bae7-c23f8e35b199")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [85850], {
        431731: function(e, n, t) {
            "use strict";
            t.d(n, {
                Os: function() {
                    return d
                },
                Cx: function() {
                    return u
                },
                Vt: function() {
                    return g
                }
            });
            var a = t(552322),
                r = t(72779),
                l = t.n(r),
                i = t(202784),
                c = t(458828),
                o = t(208326),
                s = t(556056);
            let d = (0, i.forwardRef)(function({
                as: e,
                href: n,
                className: t,
                children: r,
                ariaLabel: i,
                direction: d,
                ...m
            }, u) {
                let p = d ? ? "column",
                    f = (0, o.mI)(p, e => "column" === e ? "wrap" : "nowrap"),
                    g = (0, o.mI)(p, e => "column" === e ? "start" : "center"),
                    h = (0, o.rN)(p, "card-compact-title-width", {
                        transform: e => "column" === e ? "100%" : "auto"
                    });
                return (0, a.jsxs)(c.K, {
                    flexDirection: "row",
                    flexWrap: f,
                    alignItems: g,
                    gap: 16,
                    className: l()(s.cardCompact, t),
                    style: h,
                    ref: u,
                    ...n ? void 0 : m,
                    children: [n ? (0, a.jsx)(e ? ? "a", {
                        href: n,
                        className: s.cardCompactAnchor,
                        "aria-label": i,
                        ...m,
                        children: "\xa0"
                    }) : null, r]
                })
            });
            var m = t(744272);
            let u = (0, i.forwardRef)(function({
                iconSize: e = 20,
                iconFrameSize: n = 28,
                children: t,
                ...r
            }, l) {
                return (0, a.jsx)(m.z, {
                    iconSize: e,
                    iconFrameSize: n,
                    ref: l,
                    ...r,
                    children: t
                })
            });
            var p = t(874737),
                f = t(797187);
            let g = (0, i.forwardRef)(function({
                as: e,
                className: n,
                children: t,
                arrowType: r,
                ...i
            }, c) {
                return (0, a.jsxs)(f.y, {
                    variant: "cardTitleSummary",
                    as: e ? ? "h3",
                    className: l()(s.cardCompactTitle, n),
                    ...i,
                    ref: c,
                    children: [t, r ? (0, a.jsx)(p.E, {
                        arrowType: r,
                        className: s.cardCompactTitleArrow
                    }) : void 0]
                })
            })
        },
        885850: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                AgentPrompts: function() {
                    return i
                },
                AgentPromptsItem: function() {
                    return w
                },
                AgentPromptsSection: function() {
                    return k
                }
            });
            var a = t(552322),
                r = t(797187),
                l = t(458828);

            function i({
                title: e,
                children: n
            }) {
                return (0, a.jsxs)(l.K, {
                    flexDirection: "column",
                    gap: 8,
                    children: [(0, a.jsx)(r.y, {
                        variant: "globalContext",
                        as: "h3",
                        children: e
                    }), (0, a.jsx)(l.K, {
                        flexDirection: {
                            default: "column",
                            lg: "row"
                        },
                        gap: 8,
                        children: n
                    })]
                })
            }
            var c = t(72779),
                o = t.n(c),
                s = t(741664),
                d = t.n(s),
                m = t(202784),
                u = t(719268),
                p = t(431731),
                f = t(208365),
                g = t(719110),
                h = t(406518),
                _ = t(962753),
                b = t(50227),
                x = t(789566);
            let C = {
                mailbox: [h.Z.agents.mailboxPng, u.bws],
                rock: [h.Z.agents.rockPng, u.g6x],
                sign: [h.Z.agents.signPng, u.UMy],
                globe: [h.Z.agents.globePng, u.qG3],
                apple: [h.Z.agents.applePng, u.qG3],
                triangle: [h.Z.agents.trianglePng, u.bws],
                alarm_clock: [h.Z.agents.alarmClockPng, u.g6x],
                puzzle: [h.Z.agents.puzzlePng, u.UMy]
            };

            function w({
                item: e,
                isEmphasized: n
            }) {
                let t = (0, b.F)(),
                    r = e.icon.flatMap(e => {
                        let n = C[e];
                        return void 0 !== n ? [n] : []
                    }),
                    l = (0, m.useCallback)(() => {
                        g.t(t, {
                            name: "home_agent_prompts_cta_click",
                            href: e.link.href,
                            label: e.link.children
                        })
                    }, [t, e.link.href, e.link.children]),
                    i = n ? f.f6 : m.Fragment;
                return (0, a.jsx)(p.Os, {
                    href: e.link.href,
                    as: d(),
                    direction: n ? "column" : {
                        default: "row",
                        lg: "column"
                    },
                    className: o()({
                        [x.emphasized]: n
                    }),
                    ariaLabel: e.link.children,
                    onClick: l,
                    children: (0, a.jsxs)(i, {
                        theme: "inherit",
                        palettes: n ? "campaignsAgentsLaunch" : "inherit",
                        children: [null == r ? void 0 : r.map(([e, n], t) => (0, a.jsx)(p.Cx, {
                            isFilled: !0,
                            fillShape: "round",
                            fillColor: n,
                            iconSize: {
                                default: 28,
                                md: 40
                            },
                            iconFrameSize: {
                                default: 28,
                                md: 40
                            },
                            className: o()({
                                [x.multipleIcons]: r.length > 1
                            }),
                            children: (0, a.jsx)(_.E, {
                                src: e,
                                alt: "",
                                width: 48,
                                height: 48,
                                loading: "lazy"
                            })
                        }, `${e}-${t}`)), (0, a.jsx)(p.Vt, {
                            arrowType: "right",
                            children: e.link.children
                        })]
                    })
                })
            }
            var y = t(429056);

            function k({
                data: e
            }) {
                let n = (0, y.Z)();
                return (0, a.jsx)("section", {
                    id: n,
                    "data-analytics-scroll-point": !0,
                    "data-analytics-name": "HomepageAgentPrompts",
                    children: (0, a.jsx)(i, {
                        title: e.title,
                        children: e.items.map((n, t) => (0, a.jsx)(w, {
                            item: n,
                            isEmphasized: t === e.items.length - 1
                        }, t))
                    })
                })
            }
        },
        556056: function(e) {
            e.exports = {
                cardCompact: "cardCompact_cardCompact__W2i4I",
                cardCompactAnchor: "cardCompact_cardCompactAnchor___7vu2",
                cardCompactTitleArrow: "cardCompact_cardCompactTitleArrow__tWhco",
                cardCompactTitle: "cardCompact_cardCompactTitle__zZaHK"
            }
        },
        789566: function(e) {
            e.exports = {
                emphasized: "agentPrompts_emphasized__cDT8N",
                multipleIcons: "agentPrompts_multipleIcons__3khQH"
            }
        }
    }
]);