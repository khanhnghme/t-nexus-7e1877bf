! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            t = (new e.Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b43e0a17-d637-41f8-bee4-6b22b8f495e9", e._sentryDebugIdIdentifier = "sentry-dbid-b43e0a17-d637-41f8-bee4-6b22b8f495e9")
    } catch (e) {}
}(), (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [48546, 50089, 34894], {
        437761: function(e, t, s) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/contact-sales", function() {
                return s(458450)
            }])
        },
        682639: function(e, t, s) {
            "use strict";
            s.d(t, {
                g: function() {
                    return g
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(811163),
                r = s(202784),
                a = s(914775),
                c = s(230841),
                d = s(961490),
                h = s(353357),
                _ = s(755137),
                u = s(823269),
                p = s(371587);

            function g({
                id: e,
                as: t = "section",
                link: s,
                illustration: l,
                shadow: g,
                className: f,
                children: k,
                variant: m = "normal"
            }) {
                let P = (0, o.useRouter)(),
                    b = (0, r.useRef)(null),
                    [x, v] = (0, r.useState)("medium"),
                    w = (0, u.Fg)();
                (0, r.useEffect)(() => {
                    (null == s ? void 0 : s.href) && !(0, h.xf)(s.href) && P.prefetch(s.href)
                }, [P, null == s ? void 0 : s.href]);
                let y = (0, r.useCallback)(e => {
                        if ((null == s ? void 0 : s.href) && (e.preventDefault(), P.push(s.href)), null == s ? void 0 : s.onClick) {
                            var t;
                            e.preventDefault(), null == s || null === (t = s.onClick) || void 0 === t || t.call(s, e)
                        }
                        if (null == s ? void 0 : s.analyticsMeta) {
                            let {
                                eventName: e,
                                eventData: t
                            } = s.analyticsMeta;
                            (0, d.j)(e, t)
                        }
                    }, [s, P]),
                    j = (0, r.useCallback)(e => {
                        if (e.length < 1) return;
                        let t = e[0].contentRect.width;
                        t <= 340 ? v("small") : t <= 800 ? v("medium") : v("large")
                    }, [v]);
                return (0, _.y)(b.current, j), (0, i.jsxs)(t, {
                    id: e,
                    className: n()(p.block, {
                        [p.link]: (null == s ? void 0 : s.href) || (null == s ? void 0 : s.onClick),
                        [p.darkMode]: w.isDarkMode,
                        [p.unstyled]: "unstyled" === m
                    }, f),
                    style: g ? {
                        [(0, a.Ay)("--block-shadow")]: `var(--shadow-${g})`
                    } : void 0,
                    onClick: y,
                    ref: b,
                    children: [l ? (0, i.jsx)(c.O, { ...l
                    }) : null, r.Children.map(k, e => r.isValidElement(e) ? r.cloneElement(e, { ...e.props,
                        layout: x,
                        variant: m,
                        link: s
                    }) : null)]
                })
            }
        },
        648850: function(e, t, s) {
            "use strict";
            s.d(t, {
                Y: function() {
                    return a
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l);
            s(202784);
            var o = s(41751),
                r = s(996163);

            function a({
                asset: e,
                assetPosition: t = "center",
                layout: s,
                hasShadow: l,
                isCropped: a,
                showStacks: c,
                children: d
            }) {
                if (!e && !d) return null;
                let h = n()(r.blockAsset, r[s], {
                        [r.alignStart]: ["leftCenter"].includes(t),
                        [r.alignCenter]: ["center", "rightCenter"].includes(t),
                        [r.alignBottom]: ["bottomCenter"].includes(t),
                        [r.alignCorner]: ["leftCorner", "rightCorner"].includes(t),
                        [r.alignStretch]: "stretch" === t
                    }),
                    _ = n()(r.asset, r[t], {
                        [r.shadow]: l,
                        [r.isCropped]: a
                    }),
                    u = {
                        src: (null == e ? void 0 : e.src) || "",
                        width: (null == e ? void 0 : e.width) || 0,
                        height: (null == e ? void 0 : e.height) || 0,
                        loading: "eager",
                        alt: (null == e ? void 0 : e.altText) || ""
                    };
                return (0, i.jsxs)("div", {
                    className: h,
                    children: [e ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("picture", {
                            className: _,
                            children: (0, i.jsx)(o.E, { ...u,
                                style: {
                                    objectFit: "cover",
                                    objectPosition: "top left",
                                    maxWidth: "100%",
                                    maxHeight: "100%",
                                    width: u.width || "100%",
                                    height: "auto",
                                    display: "block"
                                }
                            })
                        }), c ? (0, i.jsxs)("div", {
                            className: r.stacks,
                            children: [(0, i.jsx)("div", {
                                className: r.stack
                            }), (0, i.jsx)("div", {
                                className: r.stack
                            })]
                        }) : void 0]
                    }) : null, d ? (0, i.jsx)("div", {
                        className: _,
                        children: d
                    }) : void 0]
                })
            }
        },
        604422: function(e, t, s) {
            "use strict";
            s.d(t, {
                s: function() {
                    return c
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l);
            s(202784);
            var o = s(648850),
                r = s(61698),
                a = s(256725);

            function c(e) {
                let {
                    asset: t,
                    assetPosition: s = "center",
                    avatar: l,
                    children: c,
                    description: d,
                    isVertical: h,
                    hasShadow: _,
                    isCropped: u,
                    showStacks: p,
                    layout: g,
                    variant: f,
                    subtitle: k,
                    title: m
                } = e, P = n()(a.wrapper, a[g], a[s], {
                    [a.vertical]: h,
                    [a.unstyled]: "unstyled" === f,
                    [a.headless]: "headless" === f
                });
                return (0, i.jsxs)("div", {
                    className: P,
                    children: [m || k || d || l ? (0, i.jsx)("div", {
                        className: a.header,
                        children: (0, i.jsx)(r.t, { ...e
                        })
                    }) : void 0, t || c ? (0, i.jsx)(o.Y, {
                        asset: t,
                        assetPosition: s,
                        layout: g,
                        isCropped: u,
                        hasShadow: _,
                        showStacks: p,
                        children: c
                    }) : null]
                })
            }
        },
        61698: function(e, t, s) {
            "use strict";
            s.d(t, {
                t: function() {
                    return g
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(741664),
                r = s.n(o);
            s(202784);
            var a = s(903195),
                c = s(226807),
                d = s(962753),
                h = s(942843),
                _ = s(642734),
                u = s(456704),
                p = s(100120);

            function g({
                avatar: e,
                description: t,
                icon: s,
                iconColor: l,
                notionIcon: o,
                notionIconColor: u,
                link: g,
                linkVariant: k = "text",
                badge: m,
                layout: P,
                subtitle: b,
                title: x,
                titleLink: v,
                isLargeHeading: w,
                variant: y
            }) {
                return (0, i.jsxs)("header", {
                    className: n()(p.blockHeader, {
                        [p.layoutSmall]: "small" === P,
                        [p.layoutMedium]: "medium" === P,
                        [p.layoutLarge]: "large" === P
                    }),
                    children: [(0, i.jsx)(f, {
                        icon: s,
                        iconColor: l,
                        notionIcon: o,
                        notionIconColor: u
                    }), e ? (0, i.jsx)("span", {
                        className: p.avatar,
                        children: (0, i.jsx)(d.E, {
                            style: {
                                width: "30px",
                                height: "30px",
                                objectFit: "contain"
                            },
                            width: 30,
                            height: 30,
                            src: e.src,
                            alt: ""
                        })
                    }) : null, x ? (0, i.jsx)("span", {
                        className: p.title,
                        children: (0, i.jsx)("h2", {
                            className: n()(p.title, {
                                [p.isLargeHeading]: w || "unstyled" === y
                            }),
                            children: v ? (0, i.jsx)(r(), {
                                prefetch: !1,
                                href: v,
                                className: p.titleLink,
                                children: x
                            }) : x
                        })
                    }) : null, b ? (0, i.jsx)("span", {
                        className: p.subtitle,
                        children: (0, i.jsx)(_.x, {
                            tag: "h3",
                            size: "footnote",
                            children: b
                        })
                    }) : void 0, t ? (0, i.jsx)("span", {
                        className: p.description,
                        children: (0, i.jsx)(_.x, {
                            tag: "p",
                            fontWeight: "regular",
                            children: t
                        })
                    }) : void 0, m ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(a.Ct, { ...m
                        }), (0, i.jsx)(h.L, {
                            height: 8
                        })]
                    }) : null, g && g.href && g.text ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(h.L, {
                            height: 24
                        }), (0, i.jsx)(c.A, {
                            variant: k,
                            href: g.href,
                            children: g.text
                        })]
                    }) : null]
                })
            }

            function f({
                icon: e,
                iconColor: t,
                notionIcon: s,
                notionIconColor: l
            }) {
                let o = (0, u.K)(s, "blockHeader1"),
                    r = (0, u.K)(e, "blockHeader2"),
                    a = t ? `var(--color-${t})` : "var(--color-icon)";
                return o ? (0, i.jsx)(o, {
                    className: n()(p.notionIcon),
                    color: l
                }) : r ? (0, i.jsx)("span", {
                    className: p.icon,
                    children: (0, i.jsx)(r, {
                        style: {
                            fill: a,
                            color: a
                        }
                    })
                }) : null
            }
        },
        893874: function(e, t, s) {
            "use strict";
            s.d(t, {
                H: function() {
                    return l
                }
            });
            var i = s(406518);
            let l = {
                topPeekBlue01: {
                    src: i.Z.shared.illustrations.blocks.topPeekBlue01Png,
                    width: 208,
                    height: 130,
                    placement: "top",
                    offset: {
                        y: 130
                    }
                },
                topPeekBlue02: {
                    src: i.Z.shared.illustrations.blocks.topPeekBlue02Png,
                    width: 177,
                    height: 177,
                    placement: "top",
                    offset: {
                        y: 154
                    }
                },
                topPeekRed01: {
                    src: i.Z.shared.illustrations.blocks.topPeekRed01Png,
                    width: 189,
                    height: 176,
                    placement: "top",
                    offset: {
                        y: 162
                    }
                },
                topPeekRed02: {
                    src: i.Z.shared.illustrations.blocks.topPeekRed02Png,
                    width: 178,
                    height: 181,
                    placement: "top",
                    offset: {
                        y: 181
                    }
                },
                sidePeek01: {
                    src: i.Z.shared.illustrations.blocks.sidePeekAPng,
                    width: 95,
                    height: 176,
                    placement: "left",
                    offset: {
                        x: 80
                    }
                },
                sidePeek02: {
                    src: i.Z.shared.illustrations.blocks.sidePeekBPng,
                    width: 83,
                    height: 147,
                    placement: "left",
                    offset: {
                        x: 64
                    }
                },
                sidePeek03: {
                    src: i.Z.shared.illustrations.blocks.sidePeekCPng,
                    width: 123,
                    height: 138,
                    placement: "left",
                    offset: {
                        x: 125
                    }
                },
                sidePeek04: {
                    src: i.Z.shared.illustrations.blocks.sidePeekDPng,
                    width: 98,
                    height: 184,
                    placement: "right",
                    offset: {
                        x: 85
                    }
                },
                sidePeek05: {
                    src: i.Z.shared.illustrations.blocks.sidePeekEPng,
                    width: 127,
                    height: 173,
                    placement: "left",
                    offset: {
                        x: 128
                    }
                },
                sidePeek06: {
                    src: i.Z.shared.illustrations.blocks.sidePeekFPng,
                    width: 84,
                    height: 111,
                    placement: "right",
                    offset: {
                        x: 54
                    }
                },
                sidePeek07: {
                    src: i.Z.shared.illustrations.blocks.sidePeekGPng,
                    width: 95,
                    height: 189,
                    placement: "right",
                    offset: {
                        x: 38
                    }
                },
                sidePeek08: {
                    src: i.Z.shared.illustrations.blocks.sidePeekHPng,
                    width: 140,
                    height: 155.45,
                    placement: "right",
                    offset: {
                        x: 136
                    }
                },
                sidePeek09: {
                    isDarkMode: !0,
                    src: i.Z.shared.illustrations.blocks.sidePeekIPng,
                    width: 118,
                    height: 218,
                    placement: "right",
                    offset: {
                        x: 119
                    }
                },
                sidePeekRed01: {
                    src: i.Z.shared.illustrations.blocks.sidePeekRed01Png,
                    width: 118,
                    height: 127,
                    placement: "left",
                    offset: {
                        x: 120
                    }
                },
                topPeek01: {
                    src: i.Z.shared.illustrations.blocks.topPeekAPng,
                    width: 125,
                    height: 182,
                    placement: "top",
                    offset: {
                        y: 162
                    }
                },
                topPeek02: {
                    src: i.Z.shared.illustrations.blocks.topPeekBPng,
                    width: 125,
                    height: 136,
                    placement: "top",
                    offset: {
                        y: 129
                    }
                },
                topPeek03: {
                    src: i.Z.shared.illustrations.blocks.topPeekCPng,
                    width: 131,
                    height: 172,
                    placement: "top",
                    offset: {
                        y: 97
                    }
                },
                topPeek04: {
                    src: i.Z.shared.illustrations.blocks.topPeekDPng,
                    width: 121,
                    height: 153,
                    placement: "top",
                    offset: {
                        y: 153
                    }
                },
                topPeek05: {
                    src: i.Z.shared.illustrations.blocks.topPeekEPng,
                    width: 226,
                    height: 144,
                    placement: "top",
                    offset: {
                        y: 114
                    }
                },
                topPeek06: {
                    src: i.Z.shared.illustrations.blocks.topPeekFPng,
                    width: 90,
                    height: 90,
                    placement: "top",
                    offset: {
                        y: 67
                    }
                },
                topPeek07: {
                    src: i.Z.shared.illustrations.blocks.topPeekGPng,
                    width: 65,
                    height: 72,
                    placement: "top",
                    offset: {
                        y: 72
                    }
                },
                topPeek08: {
                    src: i.Z.shared.illustrations.blocks.topPeekHPng,
                    width: 123,
                    height: 149,
                    placement: "top",
                    offset: {
                        y: 138
                    }
                },
                topPeek09: {
                    src: i.Z.shared.illustrations.blocks.topPeekIPng,
                    width: 221,
                    height: 150,
                    placement: "top",
                    offset: {
                        y: 137
                    }
                },
                topPeek10: {
                    src: i.Z.shared.illustrations.blocks.topPeekJPng,
                    width: 207,
                    height: 202,
                    placement: "top",
                    offset: {
                        y: 135
                    }
                },
                topPeek11: {
                    src: i.Z.shared.illustrations.blocks.topPeekKPng,
                    width: 103,
                    height: 129,
                    placement: "top",
                    offset: {
                        y: 126
                    }
                },
                topPeek12: {
                    src: i.Z.shared.illustrations.blocks.topPeekLPng,
                    width: 98,
                    height: 56,
                    placement: "top",
                    offset: {
                        y: 57
                    }
                },
                topPeek14: {
                    src: i.Z.shared.illustrations.blocks.topPeek14Png,
                    width: 253,
                    height: 200,
                    placement: "top",
                    offset: {
                        y: 200
                    }
                },
                topPeek15: {
                    src: i.Z.shared.illustrations.blocks.topPeek15Png,
                    width: 279,
                    height: 225,
                    placement: "top",
                    offset: {
                        y: 112
                    }
                },
                topPeek16: {
                    isDarkMode: !0,
                    src: i.Z.shared.illustrations.blocks.topPeek16Png,
                    width: 171,
                    height: 157,
                    placement: "top",
                    offset: {
                        y: 158
                    }
                },
                topPeek17: {
                    src: i.Z.shared.illustrations.blocks.topPeekMPng,
                    width: 253,
                    height: 200,
                    placement: "top",
                    offset: {
                        y: 200
                    }
                },
                topPeek18: {
                    src: i.Z.shared.illustrations.blocks.topPeek17Png,
                    width: 253,
                    height: 200,
                    placement: "top",
                    offset: {
                        y: 200
                    }
                },
                topPeek20: {
                    src: i.Z.shared.illustrations.blocks.topPeek20Png,
                    width: 305,
                    height: 233,
                    placement: "top",
                    offset: {
                        y: 136
                    }
                },
                sitting01: {
                    src: i.Z.shared.illustrations.blocks.sittingAPng,
                    width: 145,
                    height: 263,
                    placement: "top",
                    offset: {
                        y: 167
                    }
                },
                sitting02: {
                    src: i.Z.shared.illustrations.blocks.sittingBPng,
                    width: 182,
                    height: 243,
                    placement: "topLeft",
                    offset: {
                        x: 120,
                        y: 167
                    }
                },
                sitting03: {
                    src: i.Z.shared.illustrations.blocks.sittingCPng,
                    width: 127,
                    height: 170,
                    placement: "top",
                    offset: {
                        y: 170
                    }
                },
                sitting04: {
                    src: i.Z.shared.illustrations.blocks.sittingDPng,
                    width: 227,
                    height: 188,
                    placement: "top",
                    offset: {
                        y: 186
                    }
                },
                sitting05: {
                    src: i.Z.shared.illustrations.blocks.sittingEPng,
                    width: 264,
                    height: 124,
                    placement: "top",
                    offset: {
                        y: 118
                    }
                },
                sittingRed01: {
                    src: i.Z.shared.illustrations.blocks.sittingRed01Png,
                    width: 335.23,
                    height: 158.71,
                    placement: "top",
                    offset: {
                        y: 150
                    }
                },
                pointing01: {
                    src: i.Z.shared.illustrations.blocks.pointingAPng,
                    width: 150,
                    height: 284,
                    placement: "topLeft",
                    offset: {
                        y: 284
                    }
                },
                pointing02: {
                    src: i.Z.shared.illustrations.blocks.pointingBPng,
                    width: 161,
                    height: 286,
                    placement: "topLeft",
                    offset: {
                        y: 286
                    }
                },
                pointing03: {
                    src: i.Z.shared.illustrations.blocks.pointingCPng,
                    width: 162,
                    height: 284,
                    placement: "topLeft",
                    offset: {
                        y: 284
                    }
                },
                holding01: {
                    src: i.Z.shared.illustrations.blocks.holdingAPng,
                    width: 171,
                    height: 266,
                    placement: "topLeft",
                    offset: {
                        y: 266
                    }
                },
                holding02: {
                    src: i.Z.shared.illustrations.blocks.holdingBPng,
                    width: 184,
                    height: 260,
                    placement: "topLeft",
                    offset: {
                        y: 260
                    }
                }
            }
        },
        230841: function(e, t, s) {
            "use strict";
            s.d(t, {
                O: function() {
                    return _
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(914775),
                r = s(962753),
                a = s(588224);
            let c = (0, o.Ay)(["xl", "l", "m", "s", "xs"]);
            var d = s(850551),
                h = s(893874);

            function _({
                variant: e,
                verticalAlign: t = "center",
                isInline: s,
                isMirrored: l,
                ..._
            }) {
                let u = function(e) {
                    let t = new Set(Object.keys(e)),
                        s = (0, a.k)(),
                        [i = e.default] = c.filter(e => s[e] && t.has(e)).map(t => e[t]);
                    return i
                }(e);
                if (!u) return null;
                let {
                    src: p,
                    width: g,
                    height: f,
                    placement: k,
                    offset: m
                } = h.H[u], P = "left" === k || "right" === k, b = "left" === k && l ? "right" : "right" === k && l ? "left" : k, x = n()(d.illustration, d[b], {
                    [d[`${t}Align`]]: P,
                    [d.isInline]: s,
                    [d.isMirrored]: l,
                    [d.isSidePosition]: P
                });
                return (0, i.jsx)("div", {
                    className: x,
                    style: {
                        [(0, o.Ay)("--offset-x")]: (null == m ? void 0 : m.x) ? ? 0,
                        [(0, o.Ay)("--offset-y")]: (null == m ? void 0 : m.y) ? ? 0,
                        [(0, o.Ay)("--width")]: g,
                        [(0, o.Ay)("--height")]: f
                    },
                    children: (0, i.jsx)(r.E, { ..._,
                        src: p,
                        width: g,
                        height: f,
                        alt: ""
                    })
                })
            }
        },
        250717: function(e, t, s) {
            "use strict";
            s.d(t, {
                r: function() {
                    return r
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(227211);

            function r({
                children: e,
                className: t,
                ...s
            }) {
                return (0, i.jsx)("div", {
                    className: n()(o.grid, t),
                    ...s,
                    children: e
                })
            }
        },
        36207: function(e, t, s) {
            "use strict";
            s.d(t, {
                P: function() {
                    return r
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(631611);

            function r({
                className: e,
                span: t = 4,
                rowSpan: s,
                noRowGap: l,
                children: r
            }) {
                return (0, i.jsx)("div", {
                    className: n()(o.gridItem, {
                        [o.span1]: 1 === t,
                        [o.span2]: 2 === t,
                        [o.span3]: 3 === t,
                        [o.span4]: 4 === t,
                        [o.span5]: 5 === t,
                        [o.span6]: 6 === t,
                        [o.span7]: 7 === t,
                        [o.span8]: 8 === t,
                        [o.span9]: 9 === t,
                        [o.span10]: 10 === t,
                        [o.span11]: 11 === t,
                        [o.span12]: 12 === t,
                        [o.noRowGap]: l
                    }, e),
                    style: {
                        gridRow: s ? `auto / span ${s}` : void 0
                    },
                    children: r
                })
            }
        },
        120442: function(e, t, s) {
            "use strict";
            s.d(t, {
                R: function() {
                    return c
                },
                u: function() {
                    return a
                }
            });
            var i = s(552322),
                l = s(72779),
                n = s.n(l),
                o = s(202784),
                r = s(42332);

            function a({
                children: e,
                placeholder: t = e,
                direction: s = "forward"
            }) {
                let l = (0, o.useMemo)(() => o.Children.map(e, e => (0, o.isValidElement)(e) ? (0, o.cloneElement)(e, {
                        "aria-hidden": !0,
                        tabIndex: -1
                    }) : e), [e]),
                    a = "reverse" === s ? r.reverse : null,
                    c = (0, o.useCallback)(e => {
                        e.target.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest",
                            inline: "nearest"
                        })
                    }, []);
                return (0, i.jsxs)("div", {
                    className: r.marqueeRow,
                    children: [(0, i.jsx)("div", {
                        className: r.marqueePlaceholder,
                        "aria-hidden": !0,
                        children: t
                    }), (0, i.jsxs)("div", {
                        className: n()(r.marquee, a),
                        onFocus: c,
                        children: [e, l]
                    })]
                })
            }

            function c({
                children: e,
                className: t
            }) {
                return (0, i.jsx)("div", {
                    className: n()(r.marqueeContainer, t),
                    children: e
                })
            }
        },
        405593: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return B
                }
            });
            var i = s(552322),
                l = s(202784),
                n = s(339332),
                o = s(882374),
                r = s(614050),
                a = s(32505),
                c = s(716952),
                d = s(879485),
                h = s(682639),
                _ = s(250717),
                u = s(36207),
                p = s(233498),
                g = s(930066),
                f = s(908205),
                k = s(471817),
                m = s(120442),
                P = s(937417),
                b = s(141208),
                x = s(576944),
                v = s(942843),
                w = s(779700),
                y = s(792122),
                j = s(931603);
            let C = o.Ryn({
                email: o.jtO(o.Z_8())
            });
            var B = !0;
            t.default = function({
                countryCodeFromIp: e,
                page: t
            }) {
                var s;
                let {
                    hero: B,
                    sections: Z,
                    meta: N,
                    theme: I
                } = (0, a.v)(t), [A] = Z, {
                    groups: L,
                    logos: S,
                    quote: H
                } = A, R = (0, n.useSearchParams)(), F = R ? Object.fromEntries(R.entries()) : {}, D = o.AsG(C, F), q = D.success ? D.output.email : void 0, E = null == S ? void 0 : null === (s = S.logos) || void 0 === s ? void 0 : s.map(e => (0, l.createElement)(k.T, { ...e,
                    className: j.logo,
                    key: JSON.stringify(e.src),
                    loading: "eager",
                    surfaceArea: 2e3
                })), M = E ? (0, i.jsxs)("div", {
                    className: j.logos,
                    children: [(0, i.jsx)(w.Z, {
                        id: A.id,
                        variant: "sans-100-medium",
                        color: "alpha-black-600",
                        children: A.title.split("\n").map(e => (0, i.jsx)("div", {
                            children: e
                        }, e))
                    }), (0, i.jsx)(m.R, {
                        className: j.marquee,
                        children: (0, i.jsx)(m.u, {
                            placeholder: E,
                            children: E
                        })
                    })]
                }) : null, G = H ? (0, i.jsx)(h.g, {
                    className: j.quote,
                    children: (0, i.jsx)(P.VN, { ...H
                    })
                }) : null;
                return (0, i.jsx)(f.A, {
                    preview: !1,
                    title: N.title,
                    metadata: N,
                    theme: I,
                    children: (0, i.jsxs)(x.$, {
                        marginSize: "m",
                        limit: "1080",
                        analyticsName: "body",
                        children: [(0, i.jsxs)("div", {
                            className: j.body,
                            children: [(0, i.jsxs)("div", {
                                className: j.header,
                                children: [(0, i.jsx)(p.X, {
                                    level: 1,
                                    variant: "sans-700-bold",
                                    className: j.heading,
                                    children: null == B ? void 0 : B.title
                                }), (0, i.jsx)(w.Z, {
                                    className: j.headingDescription,
                                    variant: "sans-200-regular",
                                    children: null == B ? void 0 : B.subtitle
                                }), (0, i.jsxs)("div", {
                                    className: j.aboveTheFoldLogosQuote,
                                    children: [M, G]
                                })]
                            }), (0, i.jsx)(b.O, {
                                className: j.form,
                                countryCodeFromIp: e ? ? void 0,
                                email: q
                            }), (0, i.jsx)(w.Z, {
                                color: "text-medium",
                                className: j.supportLinks,
                                variant: "sans-100-regular",
                                children: (0, i.jsx)(c._H, {
                                    id: "contactSales.header.supportLinks",
                                    description: "Links for those who are looking for support who land on the contact sales page",
                                    defaultMessage: "For technical or product support,\xa0email us at {support}\xa0or visit our <helpCenter>Help Center</helpCenter>.",
                                    values: {
                                        support: (0, i.jsx)(w.Z, {
                                            color: "blue-600",
                                            variant: "sans-100-regular",
                                            children: (0, i.jsx)(g.u, {
                                                href: "mailto:team@makenotion.com",
                                                eventData: {
                                                    name: "contact_sales_support"
                                                },
                                                children: "team@makenotion.com"
                                            })
                                        }),
                                        helpCenter: e => (0, i.jsx)(w.Z, {
                                            color: "blue-600",
                                            variant: "sans-100-regular",
                                            children: (0, i.jsx)(g.u, {
                                                href: r._j.help,
                                                eventData: {
                                                    name: "contact_sales_help_center"
                                                },
                                                children: e
                                            })
                                        })
                                    }
                                })
                            })]
                        }), (0, i.jsxs)(_.r, {
                            children: [(0, i.jsxs)(u.P, {
                                span: 12,
                                noRowGap: !0,
                                children: [(0, i.jsx)(d.i, {
                                    name: A.id
                                }), (0, i.jsx)(v.L, {
                                    height: 60
                                }), (0, i.jsxs)("div", {
                                    className: j.belowTheFoldLogosQuote,
                                    children: [M, G]
                                })]
                            }), (0, i.jsx)("div", {
                                className: j.groups,
                                children: L.map((e, t) => (0, i.jsx)(y.h, { ...e
                                }, t))
                            })]
                        })]
                    })
                })
            }
        },
        458450: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                __N_SSP: function() {
                    return l
                },
                default: function() {
                    return i.default
                }
            });
            var i = s(405593),
                l = !0
        },
        371587: function(e) {
            e.exports = {
                block: "Block_block__Q3GQF",
                unstyled: "Block_unstyled__bEB_L",
                darkMode: "Block_darkMode__fFGrN",
                link: "Block_link__OKLk_",
                superPageSectionGroupIllustration: "Block_superPageSectionGroupIllustration__jbaCX",
                placementRight: "Block_placementRight__De8HL",
                placementLeft: "Block_placementLeft__rwGDA"
            }
        },
        996163: function(e) {
            e.exports = {
                blockAsset: "BlockAsset_blockAsset__yO2RP",
                asset: "BlockAsset_asset__UONUs",
                nativeImg: "BlockAsset_nativeImg__SCTyZ",
                shadow: "BlockAsset_shadow__S9G4P",
                alignStart: "BlockAsset_alignStart__EKQeZ",
                alignCenter: "BlockAsset_alignCenter__C8_Vl",
                alignCorner: "BlockAsset_alignCorner__j_dS7",
                alignBottom: "BlockAsset_alignBottom__e80YN",
                alignStretch: "BlockAsset_alignStretch__GmYH1",
                center: "BlockAsset_center___75ZO",
                leftCenter: "BlockAsset_leftCenter__NpETK",
                leftCorner: "BlockAsset_leftCorner__T9e3u",
                rightCenter: "BlockAsset_rightCenter__e0wFT",
                bottomCenter: "BlockAsset_bottomCenter__xN9d_",
                rightCorner: "BlockAsset_rightCorner__aUv_3",
                isCropped: "BlockAsset_isCropped__M_Z9C",
                stacks: "BlockAsset_stacks__sVKiQ",
                stack: "BlockAsset_stack__8vhpg"
            }
        },
        256725: function(e) {
            e.exports = {
                wrapper: "BlockBasic_wrapper__aL_z2",
                large: "BlockBasic_large__shrMw",
                vertical: "BlockBasic_vertical__QRexv",
                assetCroppedBottom: "BlockBasic_assetCroppedBottom__r8x5p",
                header: "BlockBasic_header__AjIR3",
                unstyled: "BlockBasic_unstyled__cGSJa",
                headless: "BlockBasic_headless__tHVZa",
                bottomCenter: "BlockBasic_bottomCenter__msztS",
                leftCorner: "BlockBasic_leftCorner__zq1YB",
                rightCorner: "BlockBasic_rightCorner__R5SQM"
            }
        },
        100120: function(e) {
            e.exports = {
                blockHeader: "blockHeader_blockHeader__4wlg2",
                title: "blockHeader_title__ued0p",
                subtitle: "blockHeader_subtitle__mqcBA",
                description: "blockHeader_description__144JK",
                icon: "blockHeader_icon__F5_7R",
                notionIcon: "blockHeader_notionIcon__mEeDE",
                avatar: "blockHeader_avatar__pG8kX",
                layoutSmall: "blockHeader_layoutSmall__zKeX7",
                isLargeHeading: "blockHeader_isLargeHeading__JYDCl",
                layoutMedium: "blockHeader_layoutMedium__VMyjB",
                layoutLarge: "blockHeader_layoutLarge__msFlN",
                titleLink: "blockHeader_titleLink__VNABQ"
            }
        },
        850551: function(e) {
            e.exports = {
                illustration: "CharacterIllustration_illustration__kxE0o",
                top: "CharacterIllustration_top__S4xA2",
                topLeft: "CharacterIllustration_topLeft__jeVo6",
                left: "CharacterIllustration_left___DtBV",
                right: "CharacterIllustration_right__EUP2c",
                isInline: "CharacterIllustration_isInline__fZOXh",
                isMirrored: "CharacterIllustration_isMirrored__JRizJ",
                isSidePosition: "CharacterIllustration_isSidePosition__1F_9O",
                centerAlign: "CharacterIllustration_centerAlign__PFc6d",
                topAlign: "CharacterIllustration_topAlign__Y6xPn",
                bottomAlign: "CharacterIllustration_bottomAlign__2NZTB"
            }
        },
        227211: function(e) {
            e.exports = {
                grid: "grid_grid__caono"
            }
        },
        631611: function(e) {
            e.exports = {
                gridItem: "gridItem_gridItem__aOo8I",
                span1: "gridItem_span1__FdQXP",
                span2: "gridItem_span2__wghZa",
                noRowGap: "gridItem_noRowGap__WhWkg",
                span3: "gridItem_span3___cT1A",
                span4: "gridItem_span4__4hMOE",
                span5: "gridItem_span5__K3syB",
                span6: "gridItem_span6__3hwD3",
                span7: "gridItem_span7__BG0KJ",
                span8: "gridItem_span8__Xz_45",
                span9: "gridItem_span9__UZB4P",
                span10: "gridItem_span10__6eriF",
                span11: "gridItem_span11__g6dTz",
                span12: "gridItem_span12__0WidJ"
            }
        },
        42332: function(e) {
            e.exports = {
                marqueeContainer: "Marquee_marqueeContainer__GSmm4",
                marqueeFrames: "Marquee_marqueeFrames__WsEH6",
                marqueeRow: "Marquee_marqueeRow__IIbiD",
                marqueePlaceholder: "Marquee_marqueePlaceholder__WjDDz",
                marquee: "Marquee_marquee__jTJ0o",
                reverse: "Marquee_reverse__DIAKr"
            }
        },
        931603: function(e) {
            e.exports = {
                body: "_slug__body__oH0bp",
                header: "_slug__header__GnLKl",
                heading: "_slug__heading__XiGPm",
                headingDescription: "_slug__headingDescription__2CK_g",
                supportLinks: "_slug__supportLinks__unJ0_",
                form: "_slug__form__NK65x",
                marquee: "_slug__marquee__J_CrO",
                logo: "_slug__logo__3RGVK",
                quote: "_slug__quote__jFHhL",
                aboveTheFoldLogosQuote: "_slug__aboveTheFoldLogosQuote__3BFCl",
                logos: "_slug__logos__574Lf",
                belowTheFoldLogosQuote: "_slug__belowTheFoldLogosQuote__SDmcl",
                groups: "_slug__groups__BDzGU"
            }
        }
    },
    function(e) {
        e.O(0, [86922, 41664, 25675, 59680, 21246, 24883, 54215, 95503, 84371, 51791, 35411, 12123, 59138, 41619, 16501, 79644, 80259, 68048, 26196, 66170, 39283, 33308, 92417, 57222, 17270, 4021, 72678, 46898, 57691, 71564, 92888, 49774, 40179], function() {
            return e(e.s = 437761)
        }), _N_E = e.O()
    }
]);