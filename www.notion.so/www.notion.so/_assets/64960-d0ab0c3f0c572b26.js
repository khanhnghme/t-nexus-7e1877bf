"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [64960], {
        3755: (e, r, o) => {
            o.d(r, {
                J: () => l,
                N: () => n
            });
            var s = o(296540);
            let n = (0, s.createContext)("standard");

            function l() {
                let e = (0, s.useContext)(n);
                return (0, s.useDebugValue)(e), e
            }
            n.displayName = "ContrastModeContext"
        },
        16275: (e, r, o) => {
            o.d(r, {
                I: () => s().I
            });
            var s = () => o(764262)
        },
        64960: (e, r, o) => {
            o.d(r, {
                Ay: () => s().A,
                P: () => l().P,
                RO: () => t().RO,
                UD: () => s().U,
                _S: () => n()._S,
                hr: () => t().hr,
                qq: () => t().qq
            });
            var s = () => o(800526),
                n = () => o(133251),
                l = () => o(107332),
                t = () => o(399411)
        },
        107332: (e, r, o) => {
            o.d(r, {
                P: () => n
            });
            var s = o(296540);

            function n({
                variant: e,
                colorPalette: r,
                colorVariant: l,
                hasSolidBackground: t = !1
            }) {
                let i = (0, o(960253).e)(),
                    a = (0, o(3755).J)(),
                    d = r ? o(632079).Tj[r] : o(632079).Tj,
                    u = r ? o(632079).Tj[r].background[t ? "secondary" : "secondaryTranslucent"] : o(632079).Tj.background[t ? "tertiary" : "tertiaryTranslucent"],
                    x = d.text[l ? ? (r ? "accentPrimary" : "primary")],
                    c = (0, o(133251)._S)({
                        color: u
                    }),
                    g = (0, o(133251)._S)({
                        color: d.background.accentPrimary,
                        adjustmentDirectionOverride: "dark" !== i && r ? "darken" : "lighten"
                    });
                return (0, s.useMemo)(() => ({
                    plain: {
                        resting: {
                            color: x,
                            ...t ? {
                                background: o(632079).Tj.background.primary
                            } : {}
                        },
                        hovered: {
                            background: "high" === a ? c.hovered : u
                        },
                        pressed: {
                            background: c.pressed
                        }
                    },
                    outline: {
                        resting: {
                            border: `1px solid ${d.border.primaryTranslucent}`,
                            color: x,
                            ...t ? {
                                background: o(632079).Tj.background.primary
                            } : {}
                        },
                        hovered: {
                            background: "high" === a ? c.hovered : u
                        },
                        pressed: {
                            background: c.pressed
                        }
                    },
                    primary: {
                        resting: {
                            background: d.background.accentPrimary,
                            color: d.text.inversePrimary,
                            fill: d.text.inversePrimary
                        },
                        hovered: {
                            background: g.hovered
                        },
                        pressed: {
                            background: g.pressed
                        }
                    },
                    tint: {
                        resting: {
                            color: x,
                            background: u
                        },
                        hovered: {
                            background: c.hovered
                        },
                        pressed: {
                            background: c.pressed
                        }
                    }
                })[e], [e, x, u, t, d, c, g, a])
            }
        },
        133251: (e, r, o) => {
            o.d(r, {
                RO: () => l,
                _S: () => n,
                yZ: () => t
            });
            let s = "--btn-adj-mult";

            function n({
                color: e,
                adjustmentDirectionOverride: r,
                hoveredAdjustmentFactor: o = 1,
                pressedAdjustmentFactor: s = 2
            }) {
                return {
                    hovered: i(e, o, r),
                    pressed: i(e, s, r)
                }
            }

            function l({
                color: e,
                adjustmentDirection: r,
                adjustmentFactor: o = 1
            }) {
                return i(e, o, r)
            }

            function t({
                color: e,
                adjustmentDirection: r,
                adjustmentFactor: o = 2
            }) {
                return i(e, o, r)
            }

            function i(e, r, o) {
                if (e.startsWith("var(--ca-") || "darken" === o && e.startsWith("var(--cl-") || "lighten" === o && e.startsWith("var(--cd-")) return `rgb(from ${e} r g b / calc(alpha * (1 + 0.5 * var(${s}, 1) * ${r})))`;
                let n = 5 * r;
                return o ? `hsl(from ${e} h s calc(l ${"lighten"===o?"+":"-"} var(${s}, 1) * ${n}) / alpha)` : `hsl(from ${e} h s calc(l + var(--btn-adj-dir, -1) * var(${s}, 1) * ${n}) / alpha)`
            }
        },
        172474: (e, r, o) => {
            o.d(r, {
                BQ: () => d,
                VD: () => t,
                Y9: () => l,
                _u: () => i
            });
            var s = o(296540),
                n = o(474848);
            let l = (0, s.createContext)("light");

            function t(e) {
                return e.device.prefersDarkInterface ? "dark" : "light"
            }
            l.displayName = "ThemeModeContext";
            let i = window.notionTheme,
                a = {
                    display: "contents"
                };

            function d(e) {
                let r = (0, s.useContext)(l),
                    o = e.mode ? ? r ? ? "light";
                return (0, n.jsx)(l.Provider, {
                    value: o,
                    children: (0, n.jsx)("div", {
                        className: `notion-${o}-theme`,
                        style: a,
                        children: e.children
                    })
                })
            }
        },
        399411: (e, r, o) => {
            o.d(r, {
                $X: () => c,
                JC: () => a,
                RO: () => n,
                VJ: () => s,
                Zg: () => u,
                eA: () => k,
                hr: () => h,
                jJ: () => g,
                kG: () => x,
                mw: () => t,
                qq: () => d
            });
            let s = {
                    xxs: 4,
                    xs: 4,
                    sm: 6,
                    md: 6,
                    lg: 6,
                    xl: 8
                },
                n = {
                    xxs: 16,
                    xs: 20,
                    sm: 24,
                    md: 28,
                    lg: 32,
                    xl: 36
                },
                l = {
                    xxs: 12,
                    xs: 12,
                    sm: 14,
                    md: 14,
                    lg: 14,
                    xl: 14
                },
                t = {
                    xxs: 4,
                    xs: 6,
                    sm: 6,
                    md: 8,
                    lg: 12,
                    xl: 12
                },
                i = {
                    xxs: 4,
                    xs: 4,
                    sm: 6,
                    md: 6,
                    lg: 8,
                    xl: 8
                },
                a = {
                    xxs: "xs",
                    xs: "xs",
                    sm: "sm",
                    md: "default",
                    lg: "default",
                    xl: "default"
                };

            function d({
                size: e = "md",
                shape: r = "default",
                width: a,
                hasIconOnly: u,
                isButtonGapEnabled: x
            }) {
                let c = "pill" === r ? t[e] + 2 : t[e],
                    g = {
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        ...x ? {
                            gap: u ? 0 : i[e]
                        } : {},
                        height: n[e],
                        paddingInlineEnd: c,
                        paddingInlineStart: c,
                        borderRadius: "pill" === r ? 9999 : s[e],
                        whiteSpace: "nowrap",
                        fontSize: l[e],
                        fontWeight: o(699422).Wy.medium,
                        lineHeight: 1.2
                    };
                return "fill" === a && (g.width = "100%"), u && (g.width = n[e], g.justifyContent = "center", g.paddingInlineEnd = 0, g.paddingInlineStart = 0), g
            }
            let u = {
                    base: {
                        k1xSpc: "x3nfvp2",
                        kGNEyG: "x6s0dn4",
                        kjj79g: "xl56j7k",
                        khDVqt: "xuxw1ft",
                        k63SB2: "xk50ysn",
                        kLWn49: "x1u7k74",
                        $$css: !0
                    },
                    disabled: {
                        kSiTet: "xti2d7y",
                        $$css: !0
                    },
                    widthFill: {
                        kzqmXN: "xh8yej3",
                        $$css: !0
                    }
                },
                x = {
                    xxs: {
                        kZKoxP: "xlup9mm",
                        kZCmMZ: "x135b78x",
                        kwRFfy: "x11lfxj5",
                        krdFHd: "xjwep3j",
                        kfmiAY: "x1t39747",
                        kT0f0o: "x1wcsgtt",
                        kVL7Gh: "x1pczhz8",
                        kGuDYH: "xfifm61",
                        $$css: !0
                    },
                    xs: {
                        kZKoxP: "x1qx5ct2",
                        kZCmMZ: "x25sj25",
                        kwRFfy: "x1icxu4v",
                        krdFHd: "xjwep3j",
                        kfmiAY: "x1t39747",
                        kT0f0o: "x1wcsgtt",
                        kVL7Gh: "x1pczhz8",
                        kGuDYH: "xfifm61",
                        $$css: !0
                    },
                    sm: {
                        kZKoxP: "xxk0z11",
                        kZCmMZ: "x25sj25",
                        kwRFfy: "x1icxu4v",
                        krdFHd: "x1i5p2am",
                        kfmiAY: "x1whfx0g",
                        kT0f0o: "xr2y4jy",
                        kVL7Gh: "x1ihp6rs",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    md: {
                        kZKoxP: "x1fgtraw",
                        kZCmMZ: "xmzvs34",
                        kwRFfy: "xf159sx",
                        krdFHd: "x1i5p2am",
                        kfmiAY: "x1whfx0g",
                        kT0f0o: "xr2y4jy",
                        kVL7Gh: "x1ihp6rs",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    lg: {
                        kZKoxP: "x10w6t97",
                        kZCmMZ: "x1g0dm76",
                        kwRFfy: "xpdmqnj",
                        krdFHd: "x1i5p2am",
                        kfmiAY: "x1whfx0g",
                        kT0f0o: "xr2y4jy",
                        kVL7Gh: "x1ihp6rs",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    xl: {
                        kZKoxP: "xc9qbxq",
                        kZCmMZ: "x1g0dm76",
                        kwRFfy: "xpdmqnj",
                        krdFHd: "x1obq294",
                        kfmiAY: "x5a5i1n",
                        kT0f0o: "xde0f50",
                        kVL7Gh: "x15x8krk",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    }
                },
                c = {
                    xxs: {
                        kZKoxP: "xlup9mm",
                        kZCmMZ: "x25sj25",
                        kwRFfy: "x1icxu4v",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xfifm61",
                        $$css: !0
                    },
                    xs: {
                        kZKoxP: "x1qx5ct2",
                        kZCmMZ: "xmzvs34",
                        kwRFfy: "xf159sx",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xfifm61",
                        $$css: !0
                    },
                    sm: {
                        kZKoxP: "xxk0z11",
                        kZCmMZ: "xmzvs34",
                        kwRFfy: "xf159sx",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    md: {
                        kZKoxP: "x1fgtraw",
                        kZCmMZ: "xe2zdcy",
                        kwRFfy: "x2vl965",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    lg: {
                        kZKoxP: "x10w6t97",
                        kZCmMZ: "x1onr9mi",
                        kwRFfy: "x1pic42t",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    },
                    xl: {
                        kZKoxP: "xc9qbxq",
                        kZCmMZ: "x1onr9mi",
                        kwRFfy: "x1pic42t",
                        krdFHd: "x1142k65",
                        kfmiAY: "x9okykr",
                        kT0f0o: "x3hdh8v",
                        kVL7Gh: "xr0m5pc",
                        kGuDYH: "xif65rj",
                        $$css: !0
                    }
                },
                g = {
                    xxs: {
                        khm7nJ: "x1r0jzty",
                        k1C7PZ: "x17zd0t2",
                        $$css: !0
                    },
                    xs: {
                        khm7nJ: "x1r0jzty",
                        k1C7PZ: "x17zd0t2",
                        $$css: !0
                    },
                    sm: {
                        khm7nJ: "xw09woa",
                        k1C7PZ: "xmixu3c",
                        $$css: !0
                    },
                    md: {
                        khm7nJ: "xw09woa",
                        k1C7PZ: "xmixu3c",
                        $$css: !0
                    },
                    lg: {
                        khm7nJ: "x3pnbk8",
                        k1C7PZ: "xfex06f",
                        $$css: !0
                    },
                    xl: {
                        khm7nJ: "x3pnbk8",
                        k1C7PZ: "xfex06f",
                        $$css: !0
                    }
                },
                k = {
                    xxs: {
                        kzqmXN: "x1kky2od",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    },
                    xs: {
                        kzqmXN: "xw4jnvo",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    },
                    sm: {
                        kzqmXN: "xvy4d1p",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    },
                    md: {
                        kzqmXN: "xgd8bvy",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    },
                    lg: {
                        kzqmXN: "x1td3qas",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    },
                    xl: {
                        kzqmXN: "x14qfxbe",
                        kZCmMZ: "x1c1uobl",
                        kwRFfy: "xyri2b",
                        khm7nJ: "xxs79tx",
                        k1C7PZ: "x1o1pmfc",
                        $$css: !0
                    }
                };

            function h({
                size: e = "md",
                hasIconOnly: r,
                isButtonGapEnabled: o
            }) {
                let s = r ? 0 : i[e];
                return {
                    size: a[e],
                    fitToViewBox: "horizontal",
                    style: { ...o ? {} : {
                            marginInlineEnd: s
                        }
                    }
                }
            }
        },
        406910: (e, r, o) => {
            o.d(r, {
                p: () => c
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    kmkexE: "x1ds2qyl",
                    $$css: !0
                },
                t = {
                    k63SB2: "xo1l8bm",
                    $$css: !0
                },
                i = {
                    kmuXW: "xs83m0k",
                    $$css: !0
                },
                a = {
                    kmuXW: "x2lah0s",
                    $$css: !0
                },
                d = {
                    k7Eaqz: "xeuugli",
                    kjj79g: "xjnqqgn",
                    $$css: !0
                },
                u = {
                    kjj79g: "xl56j7k",
                    $$css: !0
                };

            function x(e) {
                if (void 0 !== e && 0 !== Object.keys(e).length) return e
            }
            let c = s.memo(s.forwardRef(function({
                children: e,
                disabled: r,
                focused: c,
                hovered: g,
                hoveredStyle: k,
                ignoreLocalHoverState: h,
                iconLeading: f,
                iconTrailing: v,
                colorPalette: m,
                colorVariant: p,
                size: b = "md",
                shape: y = "default",
                width: $,
                "aria-label": B,
                pressedStyle: C,
                shouldShrink: j,
                isEmphasized: w = !1,
                style: S,
                isLoading: M,
                className: T,
                ...H
            }, Z) {
                var P;
                let z = !!v || !!f,
                    q = !!f && !e,
                    A = x(k),
                    E = x(C),
                    N = (0, s.useMemo)(() => (function({
                        palette: e,
                        colorVariant: r
                    }) {
                        let s = e ? o(632079).Tj[e] : o(632079).Tj,
                            n = e ? o(632079).Tj[e].background.secondaryTranslucent : o(632079).Tj.background.tertiaryTranslucent,
                            l = (0, o(133251)._S)({
                                color: n
                            });
                        return {
                            textColor: s.text[r ? ? (e ? "accentPrimary" : "primary")],
                            hoverBg: n,
                            pressedBg: l.pressed,
                            highContrastHoverBg: l.hovered
                        }
                    })({
                        palette: m,
                        colorVariant: p
                    }), [m, p]),
                    I = r || M,
                    K = (0, s.useMemo)(() => (function({
                        size: e,
                        shape: r,
                        width: s,
                        hasIconOnly: n,
                        isButtonGapEnabled: x,
                        disabled: c,
                        shouldShrink: g,
                        isEmphasized: k,
                        tokens: h,
                        style: f
                    }) {
                        let v, m;
                        return [o(399411).Zg.base, "pill" === r ? o(399411).$X[e] : o(399411).kG[e], x && !n && o(399411).jJ[e], n && o(399411).eA[e], "fill" === s && o(399411).Zg.widthFill, [l, {
                            kMwMTN: null != (v = h.textColor) ? "x14rh7hd" : v,
                            $$css: !0
                        }, {
                            "--x-color": null != v ? v : void 0
                        }], n ? u : d, g ? i : a, !k && t, !c && [{
                            kC7eKd: (null != (m = {
                                hoverBg: h.hoverBg,
                                pressedBg: h.pressedBg,
                                highContrastHoverBg: h.highContrastHoverBg
                            }).hoverBg ? "x1f1i3pa " : m.hoverBg) + (null != m.highContrastHoverBg ? "x1iazond " : m.highContrastHoverBg) + (null != m.pressedBg ? "xayv9eh " : m.pressedBg) + (null != m.hoverBg ? "x1811ece " : m.hoverBg) + (null != m.highContrastHoverBg ? "xigsv13" : m.highContrastHoverBg),
                            $$css: !0
                        }, {
                            "--x-8zloot": null != m.hoverBg ? m.hoverBg : void 0,
                            "--x-13727ff": null != m.highContrastHoverBg ? m.highContrastHoverBg : void 0,
                            "--x-ph3bdx": null != m.pressedBg ? m.pressedBg : void 0,
                            "--x-pjywqs": null != m.hoverBg ? m.hoverBg : void 0,
                            "--x-ovxak1": null != m.highContrastHoverBg ? m.highContrastHoverBg : void 0
                        }], f]
                    })({
                        size: b,
                        shape: y,
                        width: $,
                        hasIconOnly: q,
                        isButtonGapEnabled: z,
                        disabled: I,
                        shouldShrink: j ? ? !1,
                        isEmphasized: w,
                        tokens: N,
                        style: S
                    }), [b, y, $, q, z, I, j, w, N, S]),
                    R = (P = (0, o(3755).J)(), "high" === P ? N.highContrastHoverBg : N.hoverBg),
                    F = (0, s.useMemo)(() => ({
                        background: R,
                        ...A
                    }), [R, A]),
                    L = (0, s.useMemo)(() => ({
                        background: N.pressedBg,
                        ...E
                    }), [N.pressedBg, E]),
                    [D, G] = (0, o(768397).s)(),
                    U = (0, s.useContext)(o(660343).k),
                    X = function({
                        disabled: e,
                        focused: r,
                        hovered: o,
                        isFocusVisible: s,
                        popupOpen: n,
                        style: l
                    }) {
                        return !e && (!0 === o || !0 === r || s || !0 === n || "object" == typeof l && null !== l && ("background" in l || "backgroundColor" in l))
                    }({
                        disabled: I,
                        focused: c,
                        hovered: g,
                        isFocusVisible: G,
                        popupOpen: null == U ? void 0 : U.open,
                        style: S
                    }),
                    J = (0, s.useRef)(null),
                    V = (0, o(421573).A)(J, D, Z);
                return (0, n.jsxs)(o(64960).UD, {
                    ariaLabel: B,
                    ...H,
                    style: K,
                    hoveredStyle: A ? ? (X ? F : void 0),
                    pressedStyle: E ? ? (X ? L : void 0),
                    disabled: I,
                    ignoreLocalHoverState: h ? ? (!A && !E && !X),
                    focused: c,
                    hovered: g,
                    className: T,
                    ref: V,
                    children: [M ? (0, n.jsx)(o(517334).k, {
                        style: z ? void 0 : {
                            marginInlineEnd: 4
                        }
                    }) : null, (0, n.jsx)(o(619331).x, {
                        iconLeading: f,
                        iconTrailing: v,
                        size: b,
                        children: e
                    })]
                })
            }), o(795676).A)
        },
        451388: (e, r, o) => {
            o.d(r, {
                I: () => s,
                J: () => a
            });
            let s = {
                    defaultSvgIconStyles: {
                        kzqmXN: "xh8yej3",
                        kZKoxP: "x5yr21d",
                        k1xSpc: "x1lliihq",
                        kmuXW: "x2lah0s",
                        $$css: !0
                    },
                    widthAuto: {
                        kzqmXN: "x14atkfc",
                        $$css: !0
                    },
                    width: e => [{
                        kzqmXN: null != e ? "x5lhr3w" : e,
                        $$css: !0
                    }, {
                        "--x-width": "number" == typeof e ? e + "px" : null != e ? e : void 0
                    }],
                    heightAuto: {
                        kZKoxP: "xt7dq6l",
                        $$css: !0
                    },
                    height: e => [{
                        kZKoxP: null != e ? "x16ye13r" : e,
                        $$css: !0
                    }, {
                        "--x-height": "number" == typeof e ? e + "px" : null != e ? e : void 0
                    }],
                    colorInherit: {
                        kDwRjp: "x1kihv7h",
                        kMwMTN: "x1heor9g",
                        $$css: !0
                    },
                    colorStyle: e => [{
                        kDwRjp: null != e ? "x19zyb68" : e,
                        kMwMTN: null != e ? "x14rh7hd" : e,
                        $$css: !0
                    }, {
                        "--x-fill": null != e ? e : void 0,
                        "--x-color": null != e ? e : void 0
                    }]
                },
                n = {
                    xxs: {
                        kzqmXN: "xsmyaan",
                        $$css: !0
                    },
                    xs: {
                        kzqmXN: "x6jxa94",
                        $$css: !0
                    },
                    sm: {
                        kzqmXN: "x1kky2od",
                        $$css: !0
                    },
                    default: {
                        kzqmXN: "xw4jnvo",
                        $$css: !0
                    },
                    lg: {
                        kzqmXN: "x17z2i9w",
                        $$css: !0
                    },
                    xl: {
                        kzqmXN: "x1td3qas",
                        $$css: !0
                    }
                },
                l = {
                    xxs: {
                        kzqmXN: "x6jxa94",
                        $$css: !0
                    },
                    xs: {
                        kzqmXN: "x1kky2od",
                        $$css: !0
                    },
                    sm: {
                        kzqmXN: "x1xp8n7a",
                        $$css: !0
                    },
                    default: {
                        kzqmXN: "x17z2i9w",
                        $$css: !0
                    },
                    lg: {
                        kzqmXN: "x23j0i4",
                        $$css: !0
                    },
                    xl: {
                        kzqmXN: "x14qfxbe",
                        $$css: !0
                    }
                },
                t = {
                    xxs: {
                        kZKoxP: "x1kpxq89",
                        $$css: !0
                    },
                    xs: {
                        kZKoxP: "x1v9usgg",
                        $$css: !0
                    },
                    sm: {
                        kZKoxP: "xlup9mm",
                        $$css: !0
                    },
                    default: {
                        kZKoxP: "x1qx5ct2",
                        $$css: !0
                    },
                    lg: {
                        kZKoxP: "x17rw0jw",
                        $$css: !0
                    },
                    xl: {
                        kZKoxP: "x10w6t97",
                        $$css: !0
                    }
                },
                i = {
                    xxs: {
                        kZKoxP: "x1v9usgg",
                        $$css: !0
                    },
                    xs: {
                        kZKoxP: "xlup9mm",
                        $$css: !0
                    },
                    sm: {
                        kZKoxP: "xmix8c7",
                        $$css: !0
                    },
                    default: {
                        kZKoxP: "x17rw0jw",
                        $$css: !0
                    },
                    lg: {
                        kZKoxP: "xd7y6wv",
                        $$css: !0
                    },
                    xl: {
                        kZKoxP: "xc9qbxq",
                        $$css: !0
                    }
                };

            function a(e, r, a) {
                let d = o(986939).A.isMobile ? l : n,
                    u = o(986939).A.isMobile ? i : t;
                return ["horizontal" === a ? s.widthAuto : (0, o(104509).cr)(r) ? d[r] : s.width(r), "vertical" === a ? s.heightAuto : (0, o(104509).cr)(r) ? u[r] : s.height(r), "inherit" === e ? s.colorInherit : s.colorStyle(e)]
            }
        },
        517334: (e, r, o) => {
            o.d(r, {
                k: () => t
            }), o(296540);
            var s = o(474848);
            let n = {
                    k1xSpc: "xjp7ctv",
                    $$css: !0
                },
                l = {
                    k1xSpc: "x3nfvp2",
                    kGNEyG: "x6s0dn4",
                    kjj79g: "xl56j7k",
                    kOAUB1: "xhshuze",
                    $$css: !0
                };

            function t({
                style: e,
                colorPalette: r,
                ...i
            }) {
                let a = (0, o(109939).tz)();
                return (0, s.jsx)(o(385827).s, {
                    allowSelectionWithin: !1,
                    style: n,
                    children: (0, s.jsxs)("div", {
                        role: "status",
                        ...o(952687).A.props(l, e),
                        children: [(0, s.jsx)("span", { ...{
                                className: "x10l6tqk x1i1rx1s xjm9jq1 xexx8yu xyri2b x18d9i69 x1c1uobl x1y332i5 xjn30re x1jyxor1 x1hb08if x6ikm8r x10wlt62 x6umtig x12wdn4z xaqea5y x1f0uuog xeh89do x1hyvwdk xuxw1ft"
                            },
                            children: a.formatMessage({
                                id: "loadingSpinner.spinnerLabel",
                                defaultMessage: "Loading..."
                            })
                        }), (0, s.jsx)(o(523262).Y, {
                            progressPercentage: 33,
                            progressColor: r,
                            ringColor: r,
                            ...i
                        })]
                    })
                })
            }
        },
        523262: (e, r, o) => {
            o.d(r, {
                Y: () => d
            }), o(296540);
            var s = o(474848);
            let n = {
                    kjVXCG: "x1tk2wp5",
                    $$css: !0
                },
                l = {
                    kjVXCG: "xkg1pr7",
                    $$css: !0
                },
                t = {
                    kmkexE: "xv7b8oh",
                    $$css: !0
                },
                i = {
                    kjVXCG: "xck1xy6",
                    $$css: !0
                },
                a = {
                    kjVXCG: "x1vsrkge",
                    $$css: !0
                };

            function d({
                progressColor: e,
                progressPercentage: r,
                onDarkBackground: u,
                ringColor: x,
                ringThickness: c = 1.5,
                size: g = "relative"
            }) {
                var k, h, f;
                let v, m, p, b = "relative" === g ? "1em" : "number" == typeof g ? g : o(104509).Ev[g],
                    y = (k = g, h = c, v = "xxs" === k || "xs" === k || "sm" === k ? 11 : 14, "number" == typeof k || "relative" === k ? v - h : v),
                    $ = "xxs" === (f = g) || "xs" === f || "sm" === f ? o(104509).Ev.sm : "number" == typeof f || "relative" === f ? 14 : o(104509).Ev.default,
                    B = $ / 2,
                    C = y / 2,
                    j = 2 * Math.PI * C,
                    w = Math.max(0, Math.min(100, r ? ? 0));
                return (0, s.jsxs)("svg", {
                    viewBox: `0 0 ${$} ${$}`,
                    width: b,
                    height: b,
                    ...{
                        className: "x2lah0s"
                    },
                    "aria-hidden": "true",
                    focusable: "false",
                    children: [(0, s.jsx)("circle", {
                        cx: B,
                        cy: B,
                        r: C,
                        fill: "none",
                        strokeWidth: c,
                        ...o(952687).A.props(x ? [{
                            kjVXCG: null != (m = o(632079).Tj[x].background.tertiaryTranslucent) ? "x6mkzkt" : m,
                            $$css: !0
                        }, {
                            "--x-stroke": null != m ? m : void 0
                        }] : u ? l : n)
                    }), (0, s.jsx)("g", {
                        transform: `rotate(-90 ${B} ${B})`,
                        children: (0, s.jsx)("circle", {
                            cx: B,
                            cy: B,
                            r: C,
                            fill: "none",
                            strokeWidth: c,
                            strokeLinecap: "round",
                            strokeDasharray: j,
                            strokeDashoffset: j - j * w / 100,
                            ...o(952687).A.props(t, e ? [{
                                kjVXCG: null != (p = o(632079).Tj[e].icon.accentPrimary) ? "x6mkzkt" : p,
                                $$css: !0
                            }, {
                                "--x-stroke": null != p ? p : void 0
                            }] : u ? a : i)
                        })
                    })]
                })
            }
        },
        586880: (e, r, o) => {
            o.d(r, {
                x: () => s
            });

            function s(e) {
                switch (e) {
                    case "plain":
                        return o(406910).p;
                    case "outline":
                        return o(808446).r;
                    case "primary":
                        return o(912946).A;
                    case "tint":
                        return o(848146).E;
                    default:
                        return (0, o(722371).HB)(e)
                }
            }
        },
        619331: (e, r, o) => {
            o.d(r, {
                x: () => n
            }), o(296540);
            var s = o(474848);

            function n({
                iconLeading: e,
                iconTrailing: r,
                size: t,
                children: i
            }) {
                let a = (0, o(64960).hr)({
                    size: t,
                    hasIconOnly: !i,
                    isButtonGapEnabled: !!r || !!e
                });
                return (0, s.jsxs)(s.Fragment, {
                    children: [e ? (0, s.jsx)(l, {
                        icon: e,
                        defaultIconProps: a
                    }) : null, i, r ? (0, s.jsx)(l, {
                        icon: r,
                        defaultIconProps: a
                    }) : null]
                })
            }

            function l({
                icon: e,
                defaultIconProps: r
            }) {
                return "icon" in e ? (0, s.jsx)(o(16275).I, { ...r,
                    ...e,
                    style: [r.style, e.style],
                    size: e.size ? ? r.size
                }) : (0, s.jsx)(o(16275).I, {
                    icon: e,
                    ...r
                })
            }
        },
        699422: (e, r, o) => {
            o.d(r, {
                J: () => a,
                K_: () => d,
                LP: () => u,
                O9: () => s,
                PE: () => t,
                RC: () => x,
                Tf: () => n,
                Wy: () => i,
                vc: () => g,
                xf: () => c
            });
            let s = 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Apple Color Emoji", "Noto Sans Arabic", "Noto Sans Hebrew", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                n = {
                    sans: s,
                    serif: "Lyon-Text, Georgia, ui-serif, serif",
                    mono: "iawriter-mono, Nitti, Menlo, Courier, monospace",
                    comic: `'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', 'Comic Sans', ${s}`,
                    githubMono: '"SFMono-Regular", Menlo, Consolas, "PT Mono", "Liberation Mono", Courier, monospace',
                    emailMono: "monospace"
                },
                l = {
                    "ja-JP": {
                        sans: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "Hiragino Sans", "Hiragino Kaku Gothic ProN", "Hiragino Sans GB", "メイリオ", Meiryo, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                        serif: 'Lyon-Text, Georgia, YuMincho, "Yu Mincho", "Hiragino Mincho ProN", "Hiragino Mincho Pro", serif'
                    },
                    "ko-KR": {
                        serif: 'Lyon-Text, Georgia,"Nanum Myeongjo", NanumMyeongjo, Batang, "Hiragino Mincho ProN", "Hiragino Mincho Pro", serif'
                    },
                    "zh-CN": {
                        sans: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "PingFang SC", "Microsoft YaHei", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                        serif: 'Lyon-Text, Georgia, "Songti SC", "SimSun", serif'
                    },
                    "zh-TW": {
                        sans: 'ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI Variable Display", "Segoe UI", Helvetica, "PingFang TC", "Microsoft Jhenghei", Helvetica, "Apple Color Emoji", Arial, sans-serif, "Segoe UI Emoji", "Segoe UI Symbol"',
                        serif: 'Lyon-Text, Georgia, "Songti TC", PMingLiU, serif'
                    }
                };

            function t(e) {
                return "mono" === e || "serif" === e || "comic" === e
            }
            let i = {
                    light: 200,
                    regular: 400,
                    medium: 500,
                    semibold: 600,
                    bold: 700
                },
                a = {
                    UISmall: {
                        desktop: 12,
                        mobile: 14
                    },
                    UIRegular: {
                        desktop: 14,
                        mobile: 16
                    }
                },
                d = {
                    UISmall: {
                        desktop: "16px",
                        mobile: "20px"
                    },
                    UIRegular: {
                        desktop: "20px",
                        mobile: "22px"
                    }
                },
                u = {
                    control: {
                        fontSize: 16,
                        lineHeight: "22px"
                    },
                    redesign: {
                        fontSize: 17,
                        lineHeight: "24px"
                    }
                },
                x = {
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                };

            function c(e) {
                let {
                    pageFont: r,
                    locale: o
                } = e;
                return r && "mono" === r ? g(o).mono : r && "serif" === r ? g(o).serif : r && "comic" === r ? g(o).comic : g(o).sans
            }

            function g(e) {
                let r = l[e];
                return r ? { ...n,
                    ...r
                } : n
            }
        },
        764262: (e, r, o) => {
            o.d(r, {
                I: () => n
            });
            let s = {
                kjVXCG: "x15h226x",
                kfJifR: "xhr4kjn",
                kJdQPc: "x1f6yumg",
                kCrYw0: "x1x0jnz8",
                $$css: !0
            };

            function n({
                className: e,
                label: r,
                style: l,
                size: t = "default",
                colorPalette: i,
                colorVariant: a,
                fitToViewBox: d,
                showOutline: u,
                ...x
            }) {
                let c = i ? o(632079).Tj[i].icon : o(632079).Tj.icon,
                    g = a ? c[a] : "inherit",
                    k = o(952687).A.props(o(451388).I.defaultSvgIconStyles, (0, o(451388).J)(g, t, d), u && s, l, void 0 !== e && {
                        $$css: !0,
                        className: e
                    });
                return "animated" === x.type ? x.icon({
                    style: k.style,
                    className: k.className,
                    label: r,
                    animationState: x.animationState,
                    skipBaseStyles: !0
                }) : x.icon(k.style, k.className, r, d, !0)
            }
        },
        768397: (e, r, o) => {
            let s;
            o.d(r, {
                p: () => l,
                s: () => t
            });
            var n = o(296540);

            function l(e) {
                try {
                    if (function() {
                            if (void 0 === s) try {
                                s = !!CSS && !!CSS.supports && CSS.supports("selector(:focus-visible)")
                            } catch {
                                s = !1
                            }
                            return s
                        }()) return e.matches(":focus-visible");
                    return e.matches(":focus")
                } catch (e) {
                    return !1
                }
            }

            function t() {
                let e = (0, n.useRef)(null),
                    r = (0, n.useRef)(null),
                    [o, s] = (0, n.useState)(!1),
                    [t, i] = (0, n.useState)(!1),
                    a = (0, n.useCallback)(() => {
                        let r = e.current;
                        r && i(l(r))
                    }, []),
                    d = (0, n.useCallback)(o => {
                        var n, t;
                        if (e.current = o, o) {
                            let e = () => {
                                    s(!0), i(l(o))
                                },
                                t = () => {
                                    s(!1), i(l(o))
                                };
                            o.addEventListener("focus", e), o.addEventListener("blur", t), null == (n = r.current) || n.call(r), r.current = () => {
                                o.removeEventListener("focus", e), o.removeEventListener("blur", t)
                            }
                        } else null == (t = r.current) || t.call(r), r.current = null;
                        a()
                    }, [a]);
                return (0, n.useEffect)(() => () => {
                    var e;
                    return null == (e = r.current) ? void 0 : e.call(r)
                }, []), (0, n.useEffect)(() => {
                    if (o) return document.addEventListener("pointerdown", a), document.addEventListener("keydown", a), () => {
                        document.removeEventListener("pointerdown", a), document.removeEventListener("keydown", a)
                    }
                }, [o, a]), [d, t]
            }
        },
        800526: (e, r, o) => {
            o.d(r, {
                A: () => g,
                U: () => c
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    kfSwDN: "x87ps6o",
                    kmkexE: "x1b7c0jy",
                    kkrTdU: "x1ypdohk",
                    $$css: !0
                },
                t = {
                    kkrTdU: "xt0e3qv",
                    $$css: !0
                },
                i = {
                    kSiTet: "xti2d7y",
                    $$css: !0
                },
                a = {
                    kGVxlE: "x9wfp6s",
                    kI3sdo: "xdvhukp",
                    $$css: !0
                },
                d = {
                    kSiTet: "x1hc1fzr x1ajgkns",
                    $$css: !0
                },
                u = {
                    focusRing: {
                        boxShadow: o(632079).Tj.buttonBlueFocusRing,
                        outline: "2px solid transparent"
                    }
                };

            function x({
                id: e,
                role: r,
                ariaLabel: c,
                "aria-pressed": g,
                "aria-selected": k,
                "aria-describedby": h,
                "aria-expanded": f,
                "aria-controls": v,
                "aria-current": m,
                "aria-posinset": p,
                "aria-setsize": b,
                "aria-owns": y,
                "aria-labelledby": $,
                autoFocus: B = !1,
                children: C,
                className: j,
                disabled: w = !1,
                disabledFeedback: S,
                disallowTabbing: M,
                focused: T,
                hovered: H,
                hoveredStyle: Z,
                ignoreLocalHoverState: P,
                ignoreLocalPressedState: z,
                onClick: q,
                onDoubleClick: A,
                onAuxClick: E,
                onFocus: N,
                onBlur: I,
                onKeyDown: K,
                onMouseEnter: R,
                onMouseMove: F,
                onMouseLeave: L,
                onMouseDown: D,
                onMouseUp: G,
                onTouchStart: U,
                onTouchEnd: X,
                onTouchCancel: J,
                onContextMenu: V,
                pressed: Y,
                pressedStyle: O,
                style: W,
                testId: _,
                allowShiftClick: Q = !1,
                ...ee
            }, er) {
                let eo, es, en = "object" == typeof W && null !== W && "background" in W,
                    el = "object" == typeof W && null !== W && "backgroundColor" in W,
                    et = void 0 !== Z || void 0 !== O || en || el,
                    ei = !et,
                    [ea, ed] = (0, s.useState)(!1),
                    [eu, ex] = (0, s.useState)(!1),
                    ec = ea && !w,
                    eg = eu && !w,
                    ek = (0, s.useRef)(null),
                    eh = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    let e, r = ek.current,
                        o = eh.current;
                    return eh.current = B, r && B && !o && (e = window.requestAnimationFrame(() => {
                        r.focus()
                    })), () => {
                        e && window.cancelAnimationFrame(e)
                    }
                }, [B]);
                let [ef, ev] = (0, o(768397).s)(), em = (0, o(421573).A)(ek, ef, er), ep = !M && ev, eb = (0, s.useContext)(o(660343).k), ey = !0 === H || !0 === T || ep || (null == eb ? void 0 : eb.open) === !0, e$ = (0, o(107332).P)({
                    variant: "plain"
                }), eB = (0, o(960253).I)(() => {
                    if (!et) return {
                        root: {}
                    };
                    let e = function({
                            focusedFromProp: e,
                            hoveredFromProp: r,
                            ignoreLocalHoverState: o,
                            isFocusVisible: s,
                            isHovered: n,
                            popupOpen: l
                        }) {
                            return !o && n || !0 === r || !0 === e || s || !0 === l
                        }({
                            focusedFromProp: T,
                            hoveredFromProp: H,
                            ignoreLocalHoverState: P,
                            isFocusVisible: ep,
                            isHovered: ec,
                            popupOpen: null == eb ? void 0 : eb.open
                        }),
                        r = eg || !0 === Y,
                        s = el && !en,
                        n = void 0 !== Z && ("background" in Z || "backgroundColor" in Z),
                        l = s ? {
                            backgroundColor: e$.hovered
                        } : {
                            background: e$.hovered
                        },
                        t = !o(986939).A.isMobile || T ? { ...!n && l,
                            ...Z
                        } : {},
                        i = void 0 !== O && ("background" in O || "backgroundColor" in O),
                        a = s ? {
                            backgroundColor: e$.pressed
                        } : {
                            background: e$.pressed
                        },
                        d = P ? {} : o(986939).A.isMobile ? {
                            opacity: .4
                        } : { ...!i && a,
                            ...O
                        };
                    return {
                        root: { ...e && !w && t,
                            ...r && !w && d
                        }
                    }
                }, [et, P, ec, H, T, ep, eg, Y, Z, O, w, null == eb ? void 0 : eb.open, el, en, e$]), eC = (0, s.useCallback)(e => {
                    et && ed(e)
                }, [et]), ej = (0, s.useCallback)(e => {
                    et && ex(e)
                }, [et]), ew = (0, s.useCallback)(() => {
                    eC(!1), ej(!1)
                }, [eC, ej]), eS = (0, s.useCallback)(e => {
                    if (e.shiftKey && !e.altKey && !Q) return;
                    let r = !1;
                    (0, o(705660).SQ)(e, o(705660).y$.Click, () => {
                        (0, o(85520).V)(e) || (q && q(e), r = !0)
                    }), r || (e.preventDefault(), ew())
                }, [Q, q, ew]), eM = (0, s.useCallback)(e => {
                    (0, o(705660).SQ)(e, o(705660).y$.EditorDoubleClick, () => {
                        eC(!0), null == A || A(e)
                    })
                }, [eC, A]), eT = (0, s.useCallback)(e => {
                    (0, o(705660).SQ)(e, o(705660).y$.AuxClick, () => {
                        eC(!0), null == E || E(e)
                    })
                }, [eC, E]), eH = (0, s.useCallback)(e => {
                    o(986939).A.isMobile || w || eC(!0), null == R || R(e)
                }, [w, eC, R]), eZ = (0, s.useCallback)(e => {
                    o(986939).A.isMobile || w || eC(!0), null == F || F(e)
                }, [w, eC, F]), eP = (0, s.useCallback)(e => {
                    eC(eg), ej(!1), null == L || L(e)
                }, [eC, ej, eg, L]), ez = (0, s.useCallback)(() => {
                    ew(), window.removeEventListener("mouseup", ez)
                }, [ew]), eq = (0, s.useCallback)(e => {
                    (0, o(705660).SQ)(e, o(705660).y$.ButtonMouseDown, () => {
                        ej(!0), null == D || D(e), et && window.addEventListener("mouseup", ez)
                    })
                }, [et, ej, D, ez]), eA = (0, s.useCallback)(e => {
                    ej(!1), null == G || G(e), et && window.removeEventListener("mouseup", ez)
                }, [et, ej, G, ez]), eE = (0, s.useCallback)(e => {
                    (0, o(705660).SQ)(e, o(705660).y$.MobileTap, () => {
                        ej(!0), null == U || U(e)
                    })
                }, [ej, U]), eN = (0, s.useCallback)(e => {
                    ej(!1), null == X || X(e)
                }, [ej, X]), eI = (0, s.useCallback)(e => {
                    ej(!1), null == J || J(e)
                }, [ej, J]), eK = (0, s.useCallback)(e => {
                    eC(!0), null == V || V(e)
                }, [eC, V]), eR = (0, s.useCallback)(e => {
                    (function({
                        buttonElement: e,
                        disabled: r,
                        disallowTabbing: o,
                        event: s
                    }) {
                        return !r && !o && !s.metaKey && !s.ctrlKey && !s.shiftKey && !s.altKey && ("Enter" === s.key || " " === s.key) && e === document.activeElement
                    })({
                        buttonElement: ek.current,
                        disabled: w,
                        disallowTabbing: M,
                        event: e
                    }) && e.target instanceof HTMLElement && (e.target.click(), e.preventDefault()), null == K || K(e)
                }, [w, M, K]);
                (0, s.useEffect)(() => {
                    if (et && (ec || eg)) return o(106498).c.add(ew), () => {
                        o(106498).c.delete(ew)
                    }
                }, [et, ec, eg, ew]);
                let eF = {
                        id: e,
                        onMouseEnter: eH,
                        onMouseMove: eZ,
                        onMouseLeave: eP,
                        ...w ? {} : {
                            onFocus: N,
                            onBlur: I,
                            onClick: eS,
                            onAuxClick: eT,
                            onMouseDown: eq,
                            onMouseUp: eA,
                            onTouchStart: eE,
                            onTouchEnd: eN,
                            onTouchCancel: eI,
                            onContextMenu: eK,
                            onKeyDown: eR,
                            onDoubleClick: eM
                        },
                        "data-testid": _,
                        "aria-controls": v,
                        "aria-current": m,
                        "aria-describedby": h,
                        "aria-expanded": f,
                        "aria-label": c,
                        "aria-labelledby": $,
                        "aria-posinset": p,
                        "aria-pressed": g,
                        "aria-selected": k,
                        "aria-setsize": b,
                        "aria-owns": y
                    },
                    eL = [l, w && t, w && S && i, !w && ei && !P && !o(986939).A.isMobile && [{
                        kC7eKd: "x1md70p1 " + (null != (eo = {
                            hoveredBg: String(e$.hovered.background),
                            pressedBg: String(e$.pressed.background)
                        }).hoveredBg ? "xdxgbl4 " : eo.hoveredBg) + (null != eo.pressedBg ? "xayv9eh" : eo.pressedBg),
                        $$css: !0
                    }, {
                        "--x-umghl": null != eo.hoveredBg ? eo.hoveredBg : void 0,
                        "--x-ph3bdx": null != eo.pressedBg ? eo.pressedBg : void 0
                    }], !w && ei && !P && o(986939).A.isMobile && d, W, ey && !w && (!o(986939).A.isMobile || !0 === T) && [{
                        kC7eKd: null != (es = {
                            hoveredBg: String(e$.hovered.background)
                        }).hoveredBg ? "xt2wqj3" : es.hoveredBg,
                        $$css: !0
                    }, {
                        "--x-background": null != es.hoveredBg ? es.hoveredBg : void 0
                    }], et && eB.root, ep && ("object" == typeof W && null !== W && ("boxShadow" in W || "outline" in W) ? u.focusRing : a)];
                if (void 0 !== ee.href) {
                    let {
                        href: e,
                        ...s
                    } = ee;
                    return (0, n.jsx)(o(990461).s, {
                        disabled: w,
                        ref: em,
                        role: r ? ? "link",
                        tabIndex: M || w ? -1 : void 0,
                        href: e,
                        ...s,
                        ...eF,
                        style: eL,
                        className: j,
                        children: C
                    })
                }
                return (0, n.jsx)("div", {
                    "aria-disabled": !0 === w || void 0,
                    ref: em,
                    role: r ? ? "button",
                    tabIndex: M || w ? -1 : 0,
                    ...eF,
                    ...void 0 === eb ? {} : void 0 !== eb.ariaPopupType && "false" !== eb.ariaPopupType ? {
                        "aria-expanded": eb.open,
                        "aria-haspopup": eb.ariaPopupType
                    } : {
                        "aria-expanded": eb.open
                    },
                    ...o(952687).A.props(eL, void 0 !== j && {
                        $$css: !0,
                        className: j
                    }),
                    children: (0, n.jsx)(o(660343).k.Provider, {
                        value: void 0,
                        children: C
                    })
                })
            }
            let c = s.memo(s.forwardRef(x), o(795676).A),
                g = s.memo(s.forwardRef(x), o(795676).A)
        },
        808446: (e, r, o) => {
            o.d(r, {
                r: () => i
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    kX8ASl: "x1ha54eg",
                    kwv6qe: "x1ym9u1z",
                    k4EQJz: "x1gat650",
                    kO87eX: "x1t8z4yu",
                    $$css: !0
                },
                t = {
                    kC7eKd: "xd54fh8",
                    $$css: !0
                },
                i = s.forwardRef(function({
                    disabled: e,
                    focused: r,
                    hovered: i,
                    className: a,
                    onClick: d,
                    onFocus: u,
                    onBlur: x,
                    onMouseDown: c,
                    onMouseEnter: g,
                    onMouseLeave: k,
                    iconLeading: h,
                    iconTrailing: f,
                    isLoading: v,
                    hoveredStyle: m,
                    pressedStyle: p,
                    children: b,
                    style: y,
                    ariaLabel: $,
                    testId: B,
                    id: C,
                    shape: j = "default",
                    size: w = "md",
                    width: S,
                    hasSolidBackground: M = !1,
                    colorPalette: T,
                    colorVariant: H,
                    href: Z,
                    external: P,
                    allowShiftClick: z,
                    autoFocus: q
                }, A) {
                    var E;
                    let N = !!f || !!h,
                        I = !!h && !b,
                        K = (0, o(960253).e)(),
                        R = (0, s.useMemo)(() => (function({
                            palette: e,
                            colorVariant: r,
                            themeMode: s
                        }) {
                            let n = e ? o(632079).Tj[e] : o(632079).Tj,
                                l = e ? o(632079).Tj[e].background.secondaryTranslucent : o(632079).Tj.background.tertiaryTranslucent,
                                t = e ? o(632079).Tj[e].background.secondary : o(632079).Tj.background.tertiary,
                                i = 15;
                            return {
                                border: n.border.primaryTranslucent,
                                textColor: n.text[r ? ? (e ? "accentPrimary" : "primary")],
                                hoverBg: l,
                                pressedBg: `rgb(from ${l} r g b / calc(alpha * (1 + 0.5)))`,
                                solidHoverBg: t,
                                solidPressedBg: "dark" === s ? `hsl(from ${t} h s calc(l + 5))` : `hsl(from ${t} h s calc(l - 5))`,
                                highContrastHoverBg: `rgb(from ${l} r g b / calc(alpha * (1 + 1.5)))`,
                                highContrastSolidHoverBg: "dark" === s ? `hsl(from ${t} h s calc(l + ${i}))` : `hsl(from ${t} h s calc(l - ${i}))`
                            }
                        })({
                            palette: T,
                            colorVariant: H,
                            themeMode: K
                        }), [T, H, K]),
                        F = e || v,
                        L = (0, s.useMemo)(() => (function({
                            size: e,
                            shape: r,
                            width: s,
                            hasSolidBackground: n,
                            hasIconOnly: i,
                            isButtonGapEnabled: a,
                            disabled: d,
                            tokens: u,
                            style: x
                        }) {
                            var c, g;
                            let k, h, f;
                            return [o(399411).Zg.base, "pill" === r ? o(399411).$X[e] : o(399411).kG[e], a && !i && o(399411).jJ[e], i && o(399411).eA[e], "fill" === s && o(399411).Zg.widthFill, (c = u.border, [l, {
                                kMwMTN: null != (g = u.textColor) ? "x14rh7hd" : g,
                                $$css: !0
                            }, {
                                "--x-border": "number" == typeof(k = `1px solid ${c}`) ? k + "px" : null != k ? k : void 0,
                                "--x-color": null != g ? g : void 0
                            }]), n && t, !d && (n ? [{
                                kC7eKd: "xd54fh8 " + (null != (h = {
                                    hoverBg: u.solidHoverBg,
                                    pressedBg: u.solidPressedBg,
                                    highContrastHoverBg: u.highContrastSolidHoverBg
                                }).hoverBg ? "x1f1i3pa " : h.hoverBg) + (null != h.highContrastHoverBg ? "x1iazond " : h.highContrastHoverBg) + (null != h.pressedBg ? "xayv9eh " : h.pressedBg) + (null != h.hoverBg ? "x1811ece " : h.hoverBg) + (null != h.highContrastHoverBg ? "xigsv13" : h.highContrastHoverBg),
                                $$css: !0
                            }, {
                                "--x-8zloot": null != h.hoverBg ? h.hoverBg : void 0,
                                "--x-13727ff": null != h.highContrastHoverBg ? h.highContrastHoverBg : void 0,
                                "--x-ph3bdx": null != h.pressedBg ? h.pressedBg : void 0,
                                "--x-pjywqs": null != h.hoverBg ? h.hoverBg : void 0,
                                "--x-ovxak1": null != h.highContrastHoverBg ? h.highContrastHoverBg : void 0
                            }] : [{
                                kC7eKd: "x1md70p1 " + (null != (f = {
                                    hoverBg: u.hoverBg,
                                    pressedBg: u.pressedBg,
                                    highContrastHoverBg: u.highContrastHoverBg
                                }).hoverBg ? "x1f1i3pa " : f.hoverBg) + (null != f.highContrastHoverBg ? "x1iazond " : f.highContrastHoverBg) + (null != f.pressedBg ? "xayv9eh " : f.pressedBg) + (null != f.hoverBg ? "x1811ece " : f.hoverBg) + (null != f.highContrastHoverBg ? "xigsv13" : f.highContrastHoverBg),
                                $$css: !0
                            }, {
                                "--x-8zloot": null != f.hoverBg ? f.hoverBg : void 0,
                                "--x-13727ff": null != f.highContrastHoverBg ? f.highContrastHoverBg : void 0,
                                "--x-ph3bdx": null != f.pressedBg ? f.pressedBg : void 0,
                                "--x-pjywqs": null != f.hoverBg ? f.hoverBg : void 0,
                                "--x-ovxak1": null != f.highContrastHoverBg ? f.highContrastHoverBg : void 0
                            }]), d && o(399411).Zg.disabled, x]
                        })({
                            size: w,
                            shape: j,
                            width: S,
                            hasSolidBackground: M,
                            hasIconOnly: I,
                            isButtonGapEnabled: N,
                            disabled: F,
                            tokens: R,
                            style: y
                        }), [w, j, S, M, I, N, F, R, y]),
                        {
                            hoverBg: D,
                            pressedBg: G
                        } = (E = (0, o(3755).J)(), {
                            hoverBg: "high" === E ? M ? R.highContrastSolidHoverBg : R.highContrastHoverBg : M ? R.solidHoverBg : R.hoverBg,
                            pressedBg: M ? R.solidPressedBg : R.pressedBg
                        }),
                        U = (0, s.useMemo)(() => ({
                            background: D,
                            ...m
                        }), [D, m]),
                        X = (0, s.useMemo)(() => ({
                            background: G,
                            ...p
                        }), [G, p]),
                        [J, V] = (0, o(768397).s)(),
                        Y = (0, s.useContext)(o(660343).k),
                        O = function({
                            disabled: e,
                            focused: r,
                            hovered: o,
                            isFocusVisible: s,
                            popupOpen: n,
                            style: l
                        }) {
                            return !e && (!0 === r || !0 === o || s || !0 === n || "object" == typeof l && null !== l && ("background" in l || "backgroundColor" in l))
                        }({
                            disabled: F,
                            focused: r,
                            hovered: i,
                            isFocusVisible: V,
                            popupOpen: null == Y ? void 0 : Y.open,
                            style: y
                        }),
                        W = (0, s.useRef)(null),
                        _ = (0, o(421573).A)(W, J, A),
                        Q = (0, s.useRef)(!1);
                    return (0, s.useEffect)(() => {
                        if (!Q.current) {
                            let e = W.current;
                            e && r && e.focus(), Q.current = !0
                        }
                    }, [r]), (0, n.jsxs)(o(64960).UD, {
                        id: C,
                        ariaLabel: $,
                        style: L,
                        hoveredStyle: m ? ? (O ? U : void 0),
                        pressedStyle: p ? ? (O ? X : void 0),
                        disabled: F,
                        ignoreLocalHoverState: !m && !p && !O,
                        focused: r,
                        hovered: i,
                        className: a,
                        onClick: d,
                        onFocus: u,
                        onBlur: x,
                        onMouseDown: c,
                        onMouseEnter: g,
                        onMouseLeave: k,
                        ref: _,
                        testId: B,
                        href: Z,
                        external: P,
                        allowShiftClick: z,
                        autoFocus: q,
                        children: [v ? (0, n.jsx)(o(517334).k, {
                            style: N ? void 0 : {
                                marginInlineEnd: 4
                            }
                        }) : null, (0, n.jsx)(o(619331).x, {
                            iconLeading: h,
                            iconTrailing: f,
                            size: w,
                            children: b
                        })]
                    })
                })
        },
        848146: (e, r, o) => {
            o.d(r, {
                E: () => t
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    kmkexE: "x1ds2qyl",
                    $$css: !0
                },
                t = s.forwardRef(function({
                    hovered: e,
                    disabled: r,
                    style: t,
                    hoveredStyle: i,
                    pressedStyle: a,
                    children: d,
                    isLoading: u,
                    iconLeading: x,
                    iconTrailing: c,
                    size: g = "md",
                    colorPalette: k,
                    colorVariant: h,
                    shape: f = "default",
                    width: v,
                    disabledFeedback: m,
                    ...p
                }, b) {
                    let y = !!c || !!x,
                        $ = !!x && !d,
                        B = (0, s.useMemo)(() => (function({
                            palette: e,
                            colorVariant: r
                        }) {
                            let s = e ? o(632079).Tj[e] : o(632079).Tj,
                                n = e ? o(632079).Tj[e].background.secondaryTranslucent : o(632079).Tj.background.tertiaryTranslucent,
                                {
                                    hovered: l,
                                    pressed: t
                                } = (0, o(133251)._S)({
                                    color: n
                                });
                            return {
                                restingBg: n,
                                textColor: s.text[r ? ? (e ? "accentPrimary" : "primary")],
                                hoverBg: l,
                                pressedBg: t
                            }
                        })({
                            palette: k,
                            colorVariant: h
                        }), [k, h]),
                        C = r || u,
                        j = (0, s.useMemo)(() => (function({
                            size: e,
                            shape: r,
                            width: s,
                            hasIconOnly: n,
                            isButtonGapEnabled: t,
                            disabled: i,
                            disabledFeedback: a,
                            tokens: d,
                            style: u
                        }) {
                            let x, c, g;
                            return [o(399411).Zg.base, "pill" === r ? o(399411).$X[e] : o(399411).kG[e], t && !n && o(399411).jJ[e], n && o(399411).eA[e], "fill" === s && o(399411).Zg.widthFill, [l, {
                                kMwMTN: null != (x = {
                                    textColor: d.textColor
                                }).textColor ? "x14rh7hd" : x.textColor,
                                $$css: !0
                            }, {
                                "--x-color": null != x.textColor ? x.textColor : void 0
                            }], !i && [{
                                kC7eKd: (null != (c = {
                                    restingBg: d.restingBg,
                                    hoverBg: d.hoverBg,
                                    pressedBg: d.pressedBg
                                }).restingBg ? "x16lehos " : c.restingBg) + (null != c.hoverBg ? "xdxgbl4 " : c.hoverBg) + (null != c.pressedBg ? "xayv9eh " : c.pressedBg) + (null != c.hoverBg ? "x19b482l" : c.hoverBg),
                                $$css: !0
                            }, {
                                "--x-l5dkfo": null != c.restingBg ? c.restingBg : void 0,
                                "--x-umghl": null != c.hoverBg ? c.hoverBg : void 0,
                                "--x-ph3bdx": null != c.pressedBg ? c.pressedBg : void 0,
                                "--x-13tdqfb": null != c.hoverBg ? c.hoverBg : void 0
                            }], i && [{
                                kC7eKd: null != (g = d.restingBg) ? "xt2wqj3" : g,
                                $$css: !0
                            }, {
                                "--x-background": null != g ? g : void 0
                            }], i && !1 !== a && o(399411).Zg.disabled, u]
                        })({
                            size: g,
                            shape: f,
                            width: v,
                            hasIconOnly: $,
                            isButtonGapEnabled: y,
                            disabled: C,
                            disabledFeedback: m,
                            tokens: B,
                            style: t
                        }), [g, f, v, $, y, C, m, B, t]),
                        w = (0, s.useMemo)(() => ({
                            background: B.hoverBg,
                            ...i
                        }), [B.hoverBg, i]),
                        S = (0, s.useMemo)(() => ({
                            background: B.pressedBg,
                            ...a
                        }), [B.pressedBg, a]),
                        [M, T] = (0, o(768397).s)(),
                        H = (0, s.useContext)(o(660343).k),
                        Z = function({
                            disabled: e,
                            hovered: r,
                            isFocusVisible: o,
                            popupOpen: s,
                            style: n
                        }) {
                            return !e && (!0 === r || o || !0 === s || "object" == typeof n && null !== n && ("background" in n || "backgroundColor" in n))
                        }({
                            disabled: C,
                            hovered: e,
                            isFocusVisible: T,
                            popupOpen: null == H ? void 0 : H.open,
                            style: t
                        }),
                        P = (0, s.useRef)(null),
                        z = (0, o(421573).A)(P, M, b);
                    return (0, n.jsxs)(o(64960).UD, { ...p,
                        style: j,
                        hoveredStyle: i ? ? (Z ? w : void 0),
                        pressedStyle: a ? ? (Z ? S : void 0),
                        disabled: C,
                        disabledFeedback: m ? ? !0,
                        ignoreLocalHoverState: !i && !a && !Z,
                        hovered: e,
                        ref: z,
                        children: [u ? (0, n.jsx)(o(517334).k, {
                            style: y ? void 0 : {
                                marginInlineEnd: 4
                            }
                        }) : null, (0, n.jsx)(o(619331).x, {
                            iconLeading: x,
                            iconTrailing: c,
                            size: g,
                            children: d
                        })]
                    })
                })
        },
        912946: (e, r, o) => {
            o.d(r, {
                A: () => t
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    kmkexE: "x1ds2qyl",
                    $$css: !0
                },
                t = s.memo(s.forwardRef(function({
                    hovered: e,
                    onClick: r,
                    disabled: t,
                    style: i,
                    hoveredStyle: a,
                    pressedStyle: d,
                    onFocus: u,
                    onBlur: x,
                    onMouseDown: c,
                    onMouseEnter: g,
                    onMouseLeave: k,
                    className: h,
                    children: f,
                    isLoading: v,
                    iconLeading: m,
                    iconTrailing: p,
                    size: b = "md",
                    colorPalette: y,
                    shape: $ = "default",
                    width: B,
                    testId: C,
                    href: j,
                    external: w,
                    autoFocus: S,
                    ariaLabel: M,
                    id: T
                }, H) {
                    let Z = !!p || !!m,
                        P = !!m && !f,
                        z = (0, o(960253).e)(),
                        q = (0, s.useMemo)(() => (function({
                            palette: e,
                            themeMode: r
                        }) {
                            let s = e ? o(632079).Tj[e] : o(632079).Tj,
                                n = s.background.accentPrimary,
                                {
                                    hovered: l,
                                    pressed: t
                                } = (0, o(133251)._S)({
                                    color: n,
                                    adjustmentDirectionOverride: "dark" !== r && e ? "darken" : "lighten"
                                });
                            return {
                                restingBg: n,
                                textColor: s.text.inversePrimary,
                                fillColor: s.text.inversePrimary,
                                hoverBg: l,
                                pressedBg: t
                            }
                        })({
                            palette: y,
                            themeMode: z
                        }), [y, z]),
                        A = t || v,
                        E = (0, s.useMemo)(() => (function({
                            size: e,
                            shape: r,
                            width: s,
                            hasIconOnly: n,
                            isButtonGapEnabled: t,
                            disabled: i,
                            tokens: a,
                            style: d
                        }) {
                            let u, x, c;
                            return [o(399411).Zg.base, "pill" === r ? o(399411).$X[e] : o(399411).kG[e], t && !n && o(399411).jJ[e], n && o(399411).eA[e], "fill" === s && o(399411).Zg.widthFill, [l, {
                                kMwMTN: null != (u = {
                                    textColor: a.textColor,
                                    fillColor: a.fillColor
                                }).textColor ? "x14rh7hd" : u.textColor,
                                kDwRjp: null != u.fillColor ? "x19zyb68" : u.fillColor,
                                $$css: !0
                            }, {
                                "--x-color": null != u.textColor ? u.textColor : void 0,
                                "--x-fill": null != u.fillColor ? u.fillColor : void 0
                            }], !i && [{
                                kC7eKd: (null != (x = {
                                    restingBg: a.restingBg,
                                    hoverBg: a.hoverBg,
                                    pressedBg: a.pressedBg
                                }).restingBg ? "x16lehos " : x.restingBg) + (null != x.hoverBg ? "xdxgbl4 " : x.hoverBg) + (null != x.pressedBg ? "xayv9eh " : x.pressedBg) + (null != x.hoverBg ? "x19b482l" : x.hoverBg),
                                $$css: !0
                            }, {
                                "--x-l5dkfo": null != x.restingBg ? x.restingBg : void 0,
                                "--x-umghl": null != x.hoverBg ? x.hoverBg : void 0,
                                "--x-ph3bdx": null != x.pressedBg ? x.pressedBg : void 0,
                                "--x-13tdqfb": null != x.hoverBg ? x.hoverBg : void 0
                            }], i && [{
                                kC7eKd: null != (c = a.restingBg) ? "xt2wqj3" : c,
                                $$css: !0
                            }, {
                                "--x-background": null != c ? c : void 0
                            }], i && o(399411).Zg.disabled, d]
                        })({
                            size: b,
                            shape: $,
                            width: B,
                            hasIconOnly: P,
                            isButtonGapEnabled: Z,
                            disabled: A,
                            tokens: q,
                            style: i
                        }), [b, $, B, P, Z, A, q, i]),
                        {
                            hoverBg: N,
                            pressedBg: I
                        } = {
                            hoverBg: q.hoverBg,
                            pressedBg: q.pressedBg
                        },
                        K = (0, s.useMemo)(() => ({
                            background: N,
                            ...a
                        }), [N, a]),
                        R = (0, s.useMemo)(() => ({
                            background: I,
                            ...d
                        }), [I, d]),
                        [F, L] = (0, o(768397).s)(),
                        D = (0, s.useContext)(o(660343).k),
                        G = function({
                            disabled: e,
                            hovered: r,
                            isFocusVisible: o,
                            popupOpen: s,
                            style: n
                        }) {
                            return !e && (!0 === r || o || !0 === s || "object" == typeof n && null !== n && ("background" in n || "backgroundColor" in n))
                        }({
                            disabled: A,
                            hovered: e,
                            isFocusVisible: L,
                            popupOpen: null == D ? void 0 : D.open,
                            style: i
                        }),
                        U = (0, s.useRef)(null),
                        X = (0, o(421573).A)(U, F, H);
                    return (0, n.jsxs)(o(64960).UD, {
                        id: T,
                        ariaLabel: M,
                        style: E,
                        hoveredStyle: a || G ? K : void 0,
                        pressedStyle: d || G ? R : void 0,
                        disabled: A,
                        disabledFeedback: !0,
                        ignoreLocalHoverState: !a && !d && !G,
                        hovered: e,
                        className: h,
                        onClick: r,
                        onFocus: u,
                        onBlur: x,
                        onMouseDown: c,
                        onMouseEnter: g,
                        onMouseLeave: k,
                        ref: X,
                        testId: C,
                        href: j,
                        external: w,
                        autoFocus: S,
                        children: [v ? (0, n.jsx)(o(517334).k, {
                            style: Z ? void 0 : {
                                marginInlineEnd: 4
                            },
                            onDarkBackground: !0
                        }) : null, (0, n.jsx)(o(619331).x, {
                            iconLeading: m,
                            iconTrailing: p,
                            size: b,
                            children: f
                        })]
                    })
                }), o(795676).A)
        },
        952687: (e, r, o) => {
            o.d(r, {
                A: () => s
            }), o(16280);
            let s = {
                create: o(32855).vt,
                props: o(32855).xk,
                when: o(32855).z7,
                defaultMarker: o(32855).ch,
                defineMarker: o(32855).Wu,
                keyframes: o(32855).i7,
                whenScope: {
                    isMobile: "@scope (.notion-mobile)",
                    isDarkMode: "@scope (.notion-dark-theme)",
                    isLightMode: "@scope (.notion-light-theme)",
                    isHighContrast: '@scope ([data-contrast="high"])',
                    isDragging: "@scope (body.is-dragging)",
                    isNotDragging: "@scope (body:not(.is-dragging))"
                }
            }
        },
        960253: (e, r, o) => {
            o.d(r, {
                I: () => l,
                e: () => n
            }), o(16280);
            var s = o(296540);

            function n() {
                let e = (0, s.useContext)(o(172474).Y9);
                if (!e) throw Error("useThemeMode: no theme context found");
                return (0, s.useDebugValue)(e), e
            }

            function l(e, r) {
                let o = (0, s.useMemo)(() => e(), [...r]);
                return (0, s.useDebugValue)(o), o
            }
        },
        990461: (e, r, o) => {
            o.d(r, {
                s: () => t
            });
            var s = o(296540),
                n = o(474848);
            let l = {
                    k1xSpc: "x1lliihq",
                    kMwMTN: "x1heor9g",
                    kybGjl: "x1hl2dhg",
                    $$css: !0
                },
                t = s.forwardRef(function({
                    disabled: e,
                    onClick: r,
                    onDoubleClick: t,
                    href: i,
                    external: a,
                    forceAltHref: d,
                    doubleClickPreventsSingleClick: u,
                    altHref: x,
                    metaHref: c,
                    style: g,
                    replaceHistoryState: k,
                    preNavigationAction: h,
                    className: f,
                    ...v
                }, m) {
                    let p = (0, o(533992).v3)(),
                        b = (0, o(533992).Y0)(),
                        y = (0, s.useContext)(o(44894).E),
                        $ = (0, s.useContext)(o(440411).n),
                        [B, C] = (0, s.useState)(void 0),
                        j = (0, s.useCallback)(s => {
                            if (e) return void s.preventDefault();
                            if (r && r(s), s.defaultPrevented || "" === i) return;
                            let n = s.metaKey || s.ctrlKey;
                            if (!b.isElectron && n) return;
                            let l = (0, o(7029).V)(s);
                            if (!b.isElectron && l && !a) return;
                            s.preventDefault();
                            let t = s.metaKey || s.ctrlKey;
                            if (s.shiftKey && (!b.isElectron || !s.altKey) && !t) return;
                            let u = (0, o(7029).t)(s);

                            function g(e) {
                                let r = o(758654).Jf({
                                    str: i,
                                    allowNoProtocol: !0
                                });
                                if (!r) return;
                                let n = o(758654).Jf({
                                    str: c,
                                    allowNoProtocol: !0
                                });
                                if (a) b.isElectron && o(758654).$_(r) === o(986939).A.domainBaseUrl ? y.navigate({
                                    environment: e ? ? p,
                                    url: r,
                                    openInNew: "tab",
                                    makeTabActive: u,
                                    redirect: k
                                }) : y.navigateToExternalUrl({
                                    environment: e ? ? p,
                                    url: n || r
                                });
                                else if ($) $(n || r);
                                else {
                                    let t;
                                    if (s.altKey || d) {
                                        let e = "function" == typeof x ? x() : x;
                                        t = o(758654).Jf({
                                            str: e,
                                            allowNoProtocol: !0
                                        }) || r
                                    } else t = l ? r : n || r;
                                    y.navigate({
                                        environment: e ? ? p,
                                        url: t,
                                        openInNew: l,
                                        makeTabActive: u,
                                        redirect: k
                                    })
                                }
                            }
                            h ? h(g) : g()
                        }, [x, b.isElectron, p, a, d, i, c, r, $, h, k, e, y]),
                        w = (0, s.useMemo)(() => {
                            let e = o(758654).Jf({
                                str: i,
                                allowNoProtocol: !0
                            });
                            if ("string" == typeof e && a && o(758654).cW(e) && (e = o(758654).pf({
                                    relativeUrl: e,
                                    baseUrl: o(986939).A.domainBaseUrl
                                })), "string" == typeof e) try {
                                return decodeURIComponent(e)
                            } catch (r) {
                                o(773352).log({
                                    level: "info",
                                    from: "LinkBox",
                                    type: "renderComponent",
                                    error: {
                                        message: `Encountered error in decodeURIComponent ${e}`
                                    }
                                })
                            }
                            return e
                        }, [a, i]);
                    return (0, n.jsx)("a", {
                        "aria-disabled": !!e || void 0,
                        ref: m,
                        href: u ? void 0 : w,
                        role: u ? "link" : void 0,
                        tabIndex: u ? 0 : void 0,
                        onClick: e => {
                            if (clearTimeout(B), !u) {
                                null == j || j(e);
                                return
                            }
                            1 === e.detail ? C(setTimeout(() => {
                                null == j || j(e)
                            }, 200)) : 2 === e.detail && (null == t || t(e))
                        },
                        target: a ? "_blank" : void 0,
                        rel: "noopener noreferrer",
                        ...v,
                        ...o(952687).A.props(l, g, void 0 !== f && {
                            $$css: !0,
                            className: f
                        }),
                        children: v.children
                    })
                })
        }
    }
]);