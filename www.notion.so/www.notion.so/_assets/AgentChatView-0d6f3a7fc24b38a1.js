"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [23644, 31426, 46283, 87196, 96772], {
        2825: (e, t, n) => {
            n.d(t, {
                A: () => o,
                b: () => a
            }), n(581454);
            var r = n(296540),
                i = n(474848);
            let o = 1,
                l = {
                    sectionTitle: {
                        fontWeight: n(699422).Wy.medium,
                        padding: 0
                    },
                    sectionIcon: {
                        flexShrink: 0,
                        width: 16,
                        height: 16,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginInlineEnd: 8
                    },
                    chevronIcon: {
                        width: n(104509).Ev.xs,
                        height: n(104509).Ev.xs,
                        marginInlineStart: 12,
                        transition: "transform 200ms ease-out"
                    }
                };

            function a(e) {
                var t, a, d, c;
                let {
                    sections: p,
                    expandAllWhenSectionsChange: f = !1,
                    overrideExpandedState: g,
                    chevronPosition: y = "end",
                    styleOverrides: m,
                    borderedStyle: h = !1,
                    compactMode: b = !1,
                    buttonPadding: x
                } = e, v = (t = m, a = h, d = b, c = x, (0, n(960253).I)(() => {
                    let e = (null == t ? void 0 : t.sectionBackground) ? ? n(632079).Tj.background.secondary,
                        r = (null == t ? void 0 : t.sectionButtonBackground) ? ? n(632079).Tj.background.secondary,
                        i = (null == t ? void 0 : t.sectionButtonHoverBackground) ? ? n(632079).Tj.background.secondaryTranslucent;
                    return {
                        container: {
                            display: "grid",
                            gap: 8,
                            ...d ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionWrapper: a ? {
                            background: "transparent",
                            borderRadius: 8,
                            border: `${o}px solid ${n(632079).Tj.border.secondary}`,
                            ...d ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        } : {
                            background: e,
                            borderRadius: 8,
                            ...d ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionButton: {
                            background: a ? "transparent" : r,
                            borderRadius: 8,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerExpanded: {
                            background: a ? "transparent" : r,
                            borderBottom: `${o}px solid ${a?n(632079).Tj.border.secondary:n(632079).Tj.border.primary}`,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            borderStartStartRadius: 8,
                            borderStartEndRadius: 8,
                            borderEndStartRadius: 0,
                            borderEndEndRadius: 0,
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerCollapsed: {
                            background: a ? "transparent" : r,
                            borderBottom: a ? void 0 : `1px solid ${n(632079).Tj.border.primary}`,
                            padding: c ? ? (d ? "6px 10px" : "8px 12px"),
                            borderRadius: 8,
                            ...d ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonPressed: {
                            background: u.pressed
                        },
                        sectionButtonHovered: {
                            background: i
                        },
                        titleWrapper: d ? {
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden"
                        } : {},
                        sectionContent: {
                            padding: d ? 10 : 12,
                            ...d ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        }
                    }
                }, [null == t ? void 0 : t.sectionBackground, null == t ? void 0 : t.sectionButtonBackground, null == t ? void 0 : t.sectionButtonHoverBackground, d, a, c])), [j, S] = (0, r.useState)(() => {
                    let e = {};
                    for (let t of p) !t.hidden && t.initialExpanded && (e[t.key] = !0);
                    return e
                }), w = (0, r.useCallback)(e => {
                    S(t => ({ ...t,
                        [e]: !t[e]
                    }))
                }, []);
                (0, r.useEffect)(() => {
                    if (f) {
                        let e = {};
                        for (let t of p) t.hidden || (e[t.key] = !0);
                        S(e)
                    }
                }, [p, f]), (0, r.useEffect)(() => {
                    (null == g ? void 0 : g.mode) === "onceOnChange" && S(e => ({ ...e,
                        ...g.sections
                    }))
                }, [g]);
                let k = (0, r.useMemo)(() => g && "always" === g.mode ? { ...j,
                    ...g.sections
                } : j, [j, g]);
                return (0, i.jsx)("div", {
                    style: v.container,
                    children: p.map(e => {
                        if (e.hidden) return null;
                        let t = !!k[e.key],
                            n = !1 !== e.collapsible;
                        return (0, i.jsx)(s, {
                            section: e,
                            isExpanded: t,
                            isCollapsible: n,
                            chevronPosition: y,
                            onToggle: w,
                            styles: { ...v,
                                ...l
                            },
                            borderedStyle: h
                        }, e.key)
                    })
                })
            }

            function s(e) {
                let {
                    section: t,
                    isExpanded: r,
                    isCollapsible: o,
                    chevronPosition: l,
                    onToggle: a,
                    styles: s,
                    borderedStyle: u
                } = e, p = t.headerDivider ? r ? s.sectionButtonWithDividerExpanded : s.sectionButtonWithDividerCollapsed : s.sectionButton, f = (0, i.jsx)(d, {
                    section: t,
                    isExpanded: r,
                    isCollapsible: o,
                    chevronPosition: l,
                    styles: s
                });
                return (0, i.jsxs)("div", {
                    style: s.sectionWrapper,
                    children: [(0, i.jsx)("div", {
                        children: o ? (0, i.jsx)(n(64960).Ay, {
                            onClick: () => a(t.key),
                            style: p,
                            hoveredStyle: s.sectionButtonHovered,
                            children: f
                        }) : (0, i.jsx)("div", {
                            style: p,
                            children: f
                        })
                    }), t.content ? (0, i.jsx)(c, {
                        content: t.content,
                        isExpanded: r,
                        contentStyle: t.sectionContentStyleOverride ? ? s.sectionContent,
                        borderedStyle: u
                    }) : void 0]
                })
            }

            function d(e) {
                let {
                    section: t,
                    isExpanded: r,
                    isCollapsible: o,
                    chevronPosition: l,
                    styles: a
                } = e, s = o ? (0, i.jsx)(n(16275).I, {
                    icon: n(120011).arrowChevronSingleRightIcon,
                    style: { ...a.chevronIcon,
                        transform: `rotateZ(${90*!!r}deg)`
                    }
                }) : void 0, d = t.disableUILabelWrap ? t.title : (0, i.jsx)(n(324489).V, {
                    style: a.sectionTitle,
                    children: t.title
                }), c = t.secondaryLabel ? t.disableUILabelWrap ? t.secondaryLabel : (0, i.jsx)(n(324489).V, {
                    isSecondaryColor: !0,
                    children: t.secondaryLabel
                }) : void 0;
                return "start" === l && o ? (0, i.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        style: a.titleWrapper,
                        children: [(0, i.jsx)(n(16275).I, {
                            icon: n(120011).arrowChevronSingleRightIcon,
                            style: { ...a.chevronIcon,
                                marginInlineStart: 0,
                                marginInlineEnd: 8,
                                transform: `rotateZ(${90*!!r}deg)`
                            }
                        }), t.icon ? (0, i.jsx)("div", {
                            style: a.sectionIcon,
                            children: t.icon
                        }) : void 0, d]
                    }), (0, i.jsx)(n(4458).fI, {
                        alignItems: "center",
                        children: c
                    })]
                }) : (0, i.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        style: a.titleWrapper,
                        children: [t.icon ? (0, i.jsx)("div", {
                            style: a.sectionIcon,
                            children: t.icon
                        }) : void 0, d]
                    }), (0, i.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        children: [c, s]
                    })]
                })
            }

            function c({
                content: e,
                isExpanded: t,
                contentStyle: r,
                borderedStyle: o
            }) {
                return (0, i.jsx)(n(203066).N, {
                    initial: !1,
                    children: t ? (0, i.jsx)(n(153321).P.div, {
                        initial: {
                            height: 0,
                            opacity: 0
                        },
                        animate: {
                            height: "auto",
                            opacity: 1
                        },
                        exit: {
                            height: 0,
                            opacity: 0
                        },
                        transition: {
                            duration: .25,
                            ease: "easeInOut"
                        },
                        style: {
                            overflow: "hidden",
                            background: o ? void 0 : n(632079).Tj.background.primary
                        },
                        children: (0, i.jsx)("div", {
                            style: r,
                            children: e
                        })
                    }) : void 0
                })
            }
            let u = (0, n(133251)._S)({
                color: n(632079).Tj.background.secondaryTranslucent,
                pressedAdjustmentFactor: 1
            })
        },
        11255: (e, t, n) => {
            n.d(t, {
                qB: () => i,
                sq: () => r
            });
            let r = ["favorite", "edit", "writeInsert", "create", "thinkAskChat", "findSearch", "custom", "notionActions", "recent", "databaseAgent"],
                i = ["improve_writing", "fix_spelling_grammar", "explain_this", "reformat", "create_daily_brief"]
        },
        13475: (e, t, n) => {
            n.d(t, {
                W: () => r
            });

            function r(e) {
                n(460961).dg.setState(e)
            }
        },
        18274: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);

            function i(e) {
                return (0, r.jsx)(n(746434).E, {
                    style: e.style,
                    content: (0, r.jsx)(n(109939).sA, {
                        id: "betaBadgeComponent.label",
                        defaultMessage: "Beta"
                    })
                })
            }
        },
        49204: (e, t, n) => {
            n.d(t, {
                J: () => r,
                X: () => i
            });
            let r = [function(e) {
                    var t, r;
                    return (0, n(576348).ZE)(e.publicEditMode, (null == (t = e.blocks) ? void 0 : t.length) === 1 ? e.blocks[0] : null == (r = e.pageContext) ? void 0 : r.pageStore)
                }, n(998256).p, (0, n(572251).A)(n(287310).J)],
                i = [...r, (0, n(572251).A)(n(99378).v), (0, n(572251).A)(n(183205).y), function(e) {
                    return e.blocks.length > 0
                }]
        },
        73233: (e, t, n) => {
            n.d(t, {
                getOnboardingAgentVariant: () => r
            });

            function r({
                disableExposureLogging: e = !0
            } = {}) {
                let t = n(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1_no_layer",
                    disableExposureLogging: e
                });
                return void 0 !== t && "control" !== t ? t : n(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1",
                    disableExposureLogging: !0
                })
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => r,
                integrationIcon: () => i
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                i = (0, n(104509).wt)("integration", r, "default")
        },
        98702: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkFillIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.66 3.66 12.68 12.68",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.913 3.787a.875.875 0 0 1 .3 1.2L9.658 15.914a.875.875 0 0 1-1.415.119l-4.37-5.098a.875.875 0 0 1 1.329-1.14l3.58 4.177 5.93-9.884a.875.875 0 0 1 1.2-.3"
                    })
                },
                i = (0, n(104509).wt)("checkmarkFill", r, "fill")
        },
        99378: (e, t, n) => {
            n.d(t, {
                v: () => r
            }), n(898992), n(737550);

            function r(e) {
                return e.blocks.some(e => {
                    let t = (0, n(330870).a)();
                    return !!(t && (0, n(335818).fc)(t) || (0, n(444285).S)(t) && null != t && t.uiContains(e) && t !== e)
                })
            }
        },
        124108: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var r = n(296540),
                i = n(474848);
            let o = {
                    alignItems: "center",
                    borderRadius: n(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: n(986939).A.isMobile ? 16 : 14,
                    fontWeight: n(699422).Wy.medium,
                    height: n(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: n(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: n(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                l = {
                    destructiveButtonDefault: { ...o,
                        background: n(632079).Tj.red.background.accentPrimary,
                        color: n(632079).oZ.white,
                        fill: n(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: n(632079).oZ.red
                    },
                    primaryButtonDefault: { ...o,
                        background: n(632079).Tj.blue.background.accentPrimary,
                        color: n(632079).oZ.white,
                        fill: n(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: n(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: n(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...o,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...o,
                        background: "transparent",
                        color: n(632079).Tj.text.primary,
                        fill: n(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: n(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: n(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...o,
                        background: n(632079).Tj.whiteButtonBackground,
                        color: n(632079).Tj.text.primary,
                        fill: n(632079).Tj.text.primary,
                        border: `1px solid ${n(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: n(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: n(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...o,
                        background: n(632079).Tj.primaryBlack,
                        color: n(632079).oZ.white,
                        fill: n(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: n(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: n(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function a(e) {
                let {
                    buttonInfo: t,
                    ...o
                } = e, a = (0, r.useContext)(n(19187).e), s = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, r.useMemo)(() => ({
                    destructive: {
                        default: l.destructiveButtonDefault,
                        hovered: l.destructiveButtonHovered,
                        pressed: l.destructiveButtonPressed
                    },
                    primary: {
                        default: l.primaryButtonDefault,
                        hovered: l.primaryButtonHovered,
                        pressed: l.primaryButtonPressed
                    },
                    secondary: {
                        default: l.secondaryButtonDefault
                    },
                    dismiss: {
                        default: l.secondaryButtonDefault
                    },
                    outline: {
                        default: l.outlineButtonDefault,
                        hovered: l.outlineButtonHovered,
                        pressed: l.outlineButtonPressed
                    },
                    black: {
                        default: l.blackButtonDefault,
                        hovered: l.blackButtonHovered,
                        pressed: l.blackButtonPressed
                    },
                    plain: {
                        default: l.plainButtonDefault,
                        hovered: l.plainButtonHovered,
                        pressed: l.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, i.jsx)(n(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        r = t.combinedStyles ? ? d.dismiss;
                    return (0, i.jsx)(n(64960).Ay, {
                        style: null == r ? void 0 : r.default,
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: a,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        r = t.combinedStyles ? ? d[e];
                    return (0, i.jsxs)(n(64960).Ay, {
                        style: { ...null == r ? void 0 : r.default,
                            ...s
                        },
                        hoveredStyle: null == r ? void 0 : r.hovered,
                        pressedStyle: null == r ? void 0 : r.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...o,
                        children: [t.isLoading ? (0, i.jsx)(n(517334).k, {
                            style: l.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        140758: (e, t, n) => {
            n.d(t, {
                R: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M8.875 5.75c.345 0 .625.28.625.625V8.25h1.875a.625.625 0 1 1 0 1.25H9.5v1.875a.625.625 0 1 1-1.25 0V9.5H6.375a.625.625 0 1 1 0-1.25H8.25V6.375c0-.345.28-.625.625-.625"
                        }), (0, r.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("magnifyingGlassPlus", i, "default")
        },
        148344: (e, t, n) => {
            n.d(t, {
                k: () => o
            }), n(581454);
            var r = () => n(546605);
            class i extends r().Store {
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getSortedUserIds() {
                    return Object.entries(this.state || {}).sort(([e, t], [n, r]) => r - t).map(([e, t]) => e)
                }
            }
            let o = new i;
            (0, n(202146).exposeDebugValue)("UserSimilarityStore", o)
        },
        154911: (e, t, n) => {
            n.d(t, {
                K: () => r
            });

            function r() {
                return [(0, n(828294).a)("agent_writer") ? "commandAltJ" : "commandJ"]
            }
        },
        183205: (e, t, n) => {
            n.d(t, {
                y: () => r
            }), n(898992), n(737550);

            function r(e) {
                return e.blocks.some(n(574676).u)
            }
        },
        184641: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                shieldLockIcon: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M10 5.607c1.173 0 2.124.951 2.124 2.125v1.093c.525.194.9.697.9 1.29v2.291c0 .76-.615 1.375-1.375 1.375h-3.3a1.374 1.374 0 0 1-1.373-1.375v-2.292c0-.592.374-1.095.899-1.289V7.732c0-1.174.951-2.125 2.125-2.125m0 4.846a.756.756 0 1 0 0 1.512.756.756 0 0 0 0-1.512m0-3.622a.9.9 0 0 0-.9.9V8.74h1.8V7.732a.9.9 0 0 0-.9-.9"
                        }), (0, r.jsx)("path", {
                            d: "M9.788 2.212a.63.63 0 0 1 .491.03l1.89.944a7.5 7.5 0 0 0 3.344.789h.787c.345 0 .625.28.625.625v6.933a5.13 5.13 0 0 1-3.106 4.71l-3.573 1.532a.63.63 0 0 1-.492 0l-3.572-1.532a5.13 5.13 0 0 1-3.107-4.71V4.6c0-.345.28-.625.625-.625h.788c1.16 0 2.305-.27 3.343-.79l1.89-.944zM8.39 4.304a8.7 8.7 0 0 1-3.902.92h-.163v6.309c0 1.55.924 2.95 2.349 3.561L10 16.519l3.326-1.425a3.88 3.88 0 0 0 2.349-3.561V5.225h-.162a8.7 8.7 0 0 1-3.903-.921L10 3.498z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("shieldLock", i, "default")
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => r
            }), n(16280), n(898992), n(672577), n(581454);

            function r(e) {
                let {
                    environment: t,
                    selection: r,
                    transaction: i,
                    preventSetSelection: o
                } = e, {
                    blocks: l
                } = e, a = (0, n(385941).Z)();
                if (!a) throw Error("No root store.");
                if (r.length > 0) {
                    let e = r[0],
                        a = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!a || !a.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = a.props.onInsertAbove({
                        insertStores: l,
                        transaction: i
                    });
                    return o || (0, n(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = a.getContentStore(),
                        r = l.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: i
                        }).childStore);
                    return o || (0, n(854924).t)({
                        environment: t,
                        stores: r
                    }), r
                }
            }
        },
        209590: (e, t, n) => {
            n.d(t, {
                Z: () => l
            }), n(296540);
            var r = n(474848);
            let i = {
                    textAlign: "center",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function l(e) {
                let {
                    iconGroup: t,
                    iconColorPalette: l,
                    iconColorVariant: a = "secondary",
                    title: s,
                    variantName: d = "default"
                } = e;
                return t || s ? (0, r.jsxs)(n(4458).VP, {
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: {
                        gap: 9,
                        ...o
                    },
                    children: [t ? (0, r.jsx)(n(708966).Q, {
                        iconGroup: t,
                        colorPalette: l,
                        colorVariant: a,
                        variantName: d,
                        style: {
                            width: 36,
                            height: 36
                        }
                    }) : null, s ? (0, r.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        colorVariant: "primary",
                        style: i,
                        children: s
                    }) : null]
                }) : null
            }
        },
        250943: (e, t, n) => {
            n.d(t, {
                E: () => r
            }), n(581454);

            function r(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, n(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let r = (0, n(247438).RQ)(e.getValue()),
                        i = (0, n(247438).xbM)(r, t),
                        {
                            tokensInsideRange: o
                        } = (0, n(247438).AI5)(r, i.startIndex, i.endIndex);
                    return (0, n(536614).r4)(o, e)
                }).join("\n\n")
            }
        },
        314084: (e, t, n) => {
            n.d(t, {
                t: () => o
            }), n(296540);
            var r = n(474848);
            let i = {
                kVAEAm: "x1n2onr6",
                $$css: !0
            };

            function o(e) {
                let {
                    children: t,
                    footer: o,
                    header: l,
                    showDismissButton: a = !0,
                    sizeRange: s,
                    gap: d = 24
                } = e;
                return (0, r.jsxs)(n(4458).VP, {
                    paddingBlock: 20,
                    minHeight: null == s ? void 0 : s.minHeight,
                    maxHeight: null == s ? void 0 : s.maxHeight,
                    minWidth: null == s ? void 0 : s.minWidth,
                    maxWidth: null == s ? void 0 : s.maxWidth,
                    gap: d,
                    style: i,
                    className: "autolayout-fill-width",
                    children: [(0, r.jsx)("div", {
                        className: "xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: l
                    }), t ? (0, r.jsx)("div", { ...{
                            className: "x78zum5 x1iyjqo2 x6ikm8r x10wlt62"
                        },
                        children: (0, r.jsx)("div", {
                            className: "x78zum5 x1iyjqo2 x1nn3v0j x1xnnf8n x1120s5i x106a9eq x1odjw0f",
                            children: t
                        })
                    }) : null, o ? (0, r.jsx)("div", {
                        className: "xr1yuqi xexx8yu x1xnnf8n x18d9i69 x106a9eq",
                        children: o
                    }) : null, a ? (0, r.jsx)(n(226512).R, {}) : null]
                })
            }
        },
        322095: (e, t, n) => {
            function r(e, t) {
                return e.map(e => i(e, t))
            }

            function i(e, t) {
                var r, i;
                let o, {
                        nameMessage: l,
                        descriptionMessage: a,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (r = e, i = t, o = (0, n(599412).H)(i), r.sources[o] || r.sources[n(599412).q]);
                return { ...s,
                    id: l.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(l),
                    description: a ? t.formatMessage(a) : void 0
                }
            }
            n.d(t, {
                B: () => i,
                o: () => r
            }), n(581454)
        },
        358667: (e, t, n) => {
            n.r(t), n.d(t, {
                openChatPanel: () => r
            }), n(16280), n(814603), n(147566), n(198721);

            function r(e) {
                var t;
                let r, {
                        environment: i,
                        store: o,
                        chatPanelState: l,
                        source: a = "button"
                    } = e,
                    s = n(680007).default.mark("agent_time_to_render"),
                    d = (0, n(420459).G4)();
                n(562733).zI.setState({ ...n(562733).zI.state,
                    agentTimeToRenderMetric: s,
                    openSource: a,
                    completionContext: d
                });
                let c = l ? ? {},
                    u = c.isNewThread,
                    p = "threadId" in c && !!c.threadId;
                !u && !p && n(973240).L.threadId && n(973240).L.updatedAt && n(973240).L.updatedAt + 6e5 > Date.now() && (c = { ...c,
                    threadId: n(973240).L.threadId
                }), (0, n(487246).a)();
                let f = (0, n(548124).getMergedChatSidebarRouteData)({
                        environment: i,
                        update: c
                    }),
                    g = (0, n(548124).routeArgsGivenChatSidebarRouteData)(f),
                    y = i.RouterStore.state.route;
                if (o)
                    if ((null == o ? void 0 : o.table) === n(832375).evP) r = (0, n(483227).Ef)({
                        environment: i,
                        updates: { ...g,
                            scrollToBlockId: void 0,
                            store: o
                        }
                    });
                    else if ((null == o ? void 0 : o.table) === n(832375).C0E) {
                    let e = {};
                    "agent" === y.name && (e = {
                        workflowViewType: y.workflowViewType,
                        workflowViewId: y.workflowViewId,
                        workflowPrompt: y.workflowPrompt,
                        agentChatThreadId: y.agentChatThreadId
                    }), r = (0, n(453573).Lm)({
                        workflowId: o.id,
                        params: {
                            workflowViewType: "agent",
                            ...g,
                            ...e
                        }
                    })
                } else(0, n(722371).HB)(o);
                else if (!o && (0, n(548124).shouldAllowOpeningAgentOnSpecifiedRoute)(y)) {
                    let e = new URL(window.location.href);
                    g.chatThreadId && e.searchParams.set(n(737869).P5, g.chatThreadId), r = e.toString()
                }
                if (!r) throw Error(`Cannot open chat panel on route ${y.name} without a store`);
                let m = n(728372).AppStoreMainEditorCurrentBlockStore.state !== o;
                (0, n(79266).navigate)({
                    environment: i,
                    url: r,
                    redirect: !m
                });
                let h = (0, n(828560).hw)(),
                    b = n(562733).zI.state.chatPanelMode;
                h || (h && "sidebar" === b ? (0, n(16822).h)({
                    environment: i,
                    isExpanded: !0,
                    from: "slippery_slope_experiment",
                    saveDetailsSidebarPreference: !1
                }) : function(e) {
                    let {
                        environment: t
                    } = e;
                    !(0, n(712358).K)(t) || (0, n(548124).getIsChatPanelOpen)(t) || (n(984858).sidebarExpandedStore.setState(!1), n(475097).default.setSidebarExpandedStoreState(!1), n(562733).zI.setState({ ...n(562733).zI.state,
                        reopenMainSidebarOnClose: !0
                    }))
                }({
                    environment: i
                }));
                let x = null == (t = (0, n(328765).S)()) ? void 0 : t.id;
                x && (i.api.callApi({
                    eventName: "warmSearchCache",
                    environment: i,
                    data: {
                        spaceId: x
                    }
                }), i.api.callCellCompatibleApi({
                    eventName: "warmVectorDBCache",
                    environment: i,
                    data: {
                        spaceId: x
                    },
                    cellNavigation: {
                        spaceId: x
                    }
                })), (async () => {
                    try {
                        (await Promise.all([n.e(36556), n.e(55373), n.e(36192), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(53050), n.e(87353), n.e(5721), n.e(64696), n.e(94495)]).then(n.bind(n, 305721))).trackAgentOpened({
                            environment: i,
                            from: a,
                            leftNotionSidebarOpenState: n(984858).sidebarExpandedStore.state
                        })
                    } catch (e) {}
                })()
            }
        },
        414243: (e, t, n) => {
            n.d(t, {
                v: () => i
            }), n(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                i = (0, n(104509).wt)("arrowChevronSingleLeftFillSmall", r, "fillSmall")
        },
        420459: (e, t, n) => {
            n.d(t, {
                G4: () => l,
                gu: () => i,
                rs: () => o
            }), n(18107), n(967357);
            var r = () => n(970831);

            function i(e) {
                let t = e ? ? ("editing" === n(358377).default.state.mode ? n(358377).default.state.multiSelection : void 0);
                if (!t) return;
                let i = t.start.store,
                    o = i.getRecordStoreUIRoot(),
                    l = n(521595).n.findNodeFromStore(i),
                    a = (0, n(534012).T)(i),
                    s = null == a ? void 0 : a.getRecordStoreUIParent(),
                    d = (0, n(730994).K3)(o),
                    c = a && a instanceof r().B && a !== o ? a : void 0,
                    u = c ? ? l;
                if (o && o instanceof r().B && u) return {
                    type: "cursor",
                    textSelection: t,
                    currentPage: o,
                    currentBlock: c,
                    origin: u,
                    currentParent: s,
                    scrollerStore: d,
                    isPageTitle: o.id === i.id
                }
            }

            function o() {
                let {
                    stores: e
                } = n(584265).default.state, t = n(358377).default.state, i = "empty" !== t.mode ? t.multiSelection : void 0, o = "empty" !== t.mode ? t.multiSelection.start.store : void 0, l = o ? o.getRecordStoreUIRoot() : void 0;
                if (!(l instanceof r().B)) {
                    let e, t = null == o ? void 0 : o.getRecordStoreUIParent();
                    for (; null != t;) t instanceof r().B && (e = t), t = t.getRecordStoreUIParent();
                    e && (l = e)
                }
                if (i && l && l instanceof r().B) {
                    let t = (0, n(534012).T)(i.end.store),
                        r = null == t ? void 0 : t.getRecordStoreUIParent(),
                        o = (0, n(730994).K3)(l);
                    if (t && r) return {
                        type: "textSelection",
                        stores: e,
                        textSelection: i,
                        currentPage: l,
                        origin: t,
                        endBlock: t,
                        endBlockParent: r,
                        scrollerStore: o
                    }
                }
            }

            function l() {
                if (n(584265).default.state.stores.length > 0) {
                    let e = n(358377).default.state;
                    if ("empty" === e.mode) {
                        let e = function() {
                            if (1 !== n(584265).default.state.stores.length) return;
                            let e = n(584265).default.state.stores[0];
                            if (!(e instanceof r().B)) return;
                            let t = e.getTitleStore();
                            if (t) return {
                                start: {
                                    store: t,
                                    index: 0
                                },
                                end: {
                                    store: t,
                                    index: 0
                                }
                            }
                        }();
                        return e ? i(e) : function() {
                            let {
                                stores: e
                            } = n(584265).default.state, t = e[0], i = e.at(-1), o = t ? t.getRecordStoreUIRoot() : void 0;
                            if (o && o instanceof r().B && i) {
                                let t = (0, n(730994).K3)(o);
                                return {
                                    type: "blockSelection",
                                    stores: e,
                                    currentPage: o,
                                    origin: i,
                                    scrollerStore: t
                                }
                            }
                        }()
                    }
                    return (0, n(971541).k)(e.multiSelection) ? i() : o()
                }
            }
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => l,
                R2: () => d,
                WF: () => s,
                bZ: () => a,
                cE: () => i,
                jX: () => o,
                rz: () => c
            });
            var r = () => n(381453);

            function i(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let o = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function l(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(o, e))
            }

            function a() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (r().n4(e, t)) return !0;
                return !1
            }
        },
        451199: (e, t, n) => {
            n.d(t, {
                A: () => l,
                p: () => o
            });
            var r = n(296540),
                i = n(474848);
            let o = 8,
                l = r.forwardRef(function({
                    isSelected: e,
                    radioButtonColor: t = "blue"
                }, r) {
                    let {
                        radioButtonStyle: l,
                        dotStyle: a
                    } = (0, n(960253).I)(() => {
                        let r = "blue" === t ? n(632079).Tj.blue.icon.accentPrimary : n(632079).Tj.red.icon.accentPrimary;
                        return {
                            radioButtonStyle: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                                width: 16,
                                height: 16,
                                borderRadius: 16,
                                marginInlineEnd: o,
                                background: e ? r : n(632079).Tj.whiteButtonBackground,
                                border: e ? "none" : `1px solid ${n(632079).Tj.border.strongTranslucent}`,
                                transition: "background 100ms ease-out"
                            },
                            dotStyle: {
                                width: 6,
                                height: 6,
                                borderRadius: 6,
                                background: n(632079).Tj.text.inversePrimary,
                                transition: "opacity 100ms ease-out",
                                opacity: +!!e
                            }
                        }
                    }, [e, t]);
                    return (0, i.jsx)("div", {
                        ref: r,
                        style: l,
                        children: (0, i.jsx)("div", {
                            style: a
                        })
                    })
                })
        },
        457196: (e, t, n) => {
            n.d(t, {
                z: () => i
            });
            let r = new(n(815048)).O2("topbarSidebarButton", async () => await n.e(62033).then(n.bind(n, 171847))),
                i = (0, n(815048)._h)(r, e => e.TopbarSidebarButton)
        },
        460961: (e, t, n) => {
            n.d(t, {
                O_: () => o,
                dg: () => r,
                iQ: () => i
            });
            let r = new(n(245541)).R({
                    key: "slipperySlopeSidebarSelectedTab",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                i = n(546605).Store.createValue(void 0, {
                    name: "slipperySlopeOpenBackgroundChatRequestStore"
                });

            function o() {
                i.setState((0, n(4962).Ay)())
            }
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => a,
                My: () => l,
                ZM: () => d,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var r = () => n(388507),
                i = () => n(715144),
                o = () => n(717673);

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var a, s;
                let d = (null == (a = t.getParentBlockStore()) ? void 0 : a.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && c.push({
                        property: n.id,
                        visible: !(0, r().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let n = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            r = new Set(n.map(e => e.property)),
                            o = c.filter(e => !r.has(e.property));
                        0 !== o.length && (0, i().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...o]
                            },
                            transaction: e
                        })
                    }
            }

            function a({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let r = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && r.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let l = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(l.map(e => e.property)),
                    d = r.filter(e => !s.has(e.property));
                d.length && (0, i().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...l, ...d]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: r
            }) {
                if ("accepted_template" === r.type || "accepted_empty_collection" === r.type) {
                    let i = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: i => {
                            let o = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: i,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === r.type && !(0, n(247438).w9s)(o)) {
                                let l = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: r.blockId
                                }).getTitleStore();
                                l && n(41403).yr({
                                    environment: e,
                                    transaction: i,
                                    tokens: o,
                                    index: 0,
                                    store: l
                                })
                            }
                            let l = t.getParentStore();
                            if ((null == l ? void 0 : l.table) === n(682956).ev) {
                                let e = l.getContentIds();
                                (0, n(173157).z)({
                                    store: l,
                                    transaction: i,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: r,
                existingCollectionViewBlockStore: i,
                existingCollectionStore: o
            }) {
                if ("canceled" !== r.type) {
                    if ("accepted_empty_collection" === r.type && o) {
                        let i = o.getKeyStore("name"),
                            l = (0, n(247438).x9d)(r.newCollectionTitle);
                        if (i) {
                            let r = o.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: r ? {
                                    spaceWithId: r
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: i,
                                    transaction: t,
                                    value: l
                                })
                            })
                        }
                    }
                    if (i) {
                        var l;
                        let e = null == (l = (0, n(444610).U)(i)) ? void 0 : l.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === r.type && null != i && i.isCollectionView() && !(null != i && i.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(i),
                            o = i.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === r.collectionId
                            });
                        if (!t || !o) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let r = t.id;
                if (!t.isDefined()) {
                    let i = await (0, n(389323).$)({
                        environment: e,
                        blockId: r
                    });
                    if (!i) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: i
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: r
                    }), await t.load()
                }
                let i = t.getSpaceId();
                if (!i) throw Error("Space ID not found for collection block");
                let o = (0, n(593303).k)(i);
                if (!o) throw Error(`Space view not found for space ID: ${i}`);
                let l = n(728372).AppStoreSidebarSpaceStore.state;
                (null == l ? void 0 : l.id) !== i && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: o
                });
                let a = t.getFormat();
                if ((null == a ? void 0 : a.collection_view_sub_type) === "workflow_template_placeholder" && null != a && a.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: r
                    } = await n(708370).t.load(), i = r(a.placeholder_workflow_template_id);
                    if (!i) throw Error(`Collection template "${a.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: o
                    } = await n(903673).O.load();
                    o({
                        environment: e,
                        collectionTemplate: i,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, n) => {
            n.d(t, {
                CA: () => l
            }), n(16280), n(898992), n(354520), n(581454);
            let r = Symbol("JSON Schema"),
                i = Symbol("JSON Schema Components"),
                o = Symbol("No JSON Schema"),
                l = (0, n(722371).MU)((0, n(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [i]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [i]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [i]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [i]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [i]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [i]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [i]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [i]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [i]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [i]: {}
                            },
                            n = e[0];
                        return "boolean" == typeof n ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof n ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [i]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [i]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [i]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[r],
                        [i]: e[r][i]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[r]).filter(e => e !== o),
                        [i]: Object.assign({}, ...e.map(e => e[r][i]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[r],
                        [i]: t[r][i]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: l
                    }) => ({
                        type: "object",
                        properties: (0, n(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[r] !== o).map(([e, t]) => [e, t[r]])),
                        ...l && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [i]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[r][i]))
                    }),
                    union: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[r]).filter(e => e !== o), e => JSON.stringify(e)),
                            l = (0, n(381453).hS)(e.map(e => e[r][i]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [i]: Object.assign({}, ...l)
                        } : {
                            anyOf: t,
                            [i]: Object.assign({}, ...l)
                        }
                    },
                    intersection: e => {
                        let t = (0, n(381453).hS)(e.map(e => e[r]).filter(e => e !== o), e => JSON.stringify(e)),
                            l = (0, n(381453).hS)(e.map(e => e[r][i]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [i]: Object.assign({}, ...l)
                        } : {
                            allOf: t,
                            [i]: Object.assign({}, ...l)
                        }
                    },
                    gte: (e, t) => {
                        let n = e[r];
                        return n !== o ? { ...n,
                            minimum: t
                        } : n
                    },
                    gt: (e, t) => {
                        let n = e[r];
                        return n !== o ? { ...n,
                            exclusiveMinimum: t
                        } : n
                    },
                    lte: (e, t) => {
                        let n = e[r];
                        return n !== o ? { ...n,
                            maximum: t
                        } : n
                    },
                    lt: (e, t) => {
                        let n = e[r];
                        return n !== o ? { ...n,
                            exclusiveMaximum: t
                        } : n
                    },
                    maxLength: (e, t) => {
                        let n = e[r];
                        if (n === o) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                maxLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let n = e[r];
                        if (n === o) return n;
                        if ("type" in n) {
                            if ("string" === n.type) return { ...n,
                                minLength: t
                            };
                            else if ("array" === n.type) return { ...n,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[r];
                        if (t === o) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[r];
                        if (t === o) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, n(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, n(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var l;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [i]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [i]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [i]: {}
                                }, {
                                    type: "null",
                                    [i]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [i]: {}
                                }],
                                [i]: t[i]
                            };
                            if (l = t, (0, n(722371).Gv)(l) && 0 === Object.keys(l).length) return t;
                            (0, n(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...o) => 1 === o.length && (0, n(722371).Gv)(o[0]) && ("id" in o[0] || "title" in o[0] || "description" in o[0] || "examples" in o[0]) ? (...l) => {
                    let {
                        description: a,
                        examples: s,
                        id: d,
                        title: c
                    } = o[0], u = { ...c && {
                            title: c
                        },
                        description: a,
                        ...s && {
                            examples: s
                        },
                        ...t(...l)
                    };
                    return d && (u = {
                        $ref: `#/components/schemas/${d}`,
                        [i]: { ...u[i],
                            [d]: u
                        }
                    }), {
                        [r]: u,
                        ...n(969475)[e](...l)
                    }
                } : {
                    [r]: t(...o),
                    ...n(969475)[e](...o),
                    describe: t => l[e]({
                        description: t
                    })(...o)
                }]));
            Symbol("Exact empty object ({})"), l.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        540358: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);

            function i(e) {
                let {
                    style: t
                } = e, i = (0, n(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...t
                    }
                }), [t]);
                return (0, r.jsx)(n(746434).E, {
                    color: "blue",
                    style: i.badge,
                    content: (0, r.jsx)(n(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        555017: (e, t, n) => {
            n.d(t, {
                o: () => r
            });

            function r(e) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => {
                    var r;
                    if (!e) return !1;
                    let i = n(547631).a.getData(t, {
                        spaceId: e
                    });
                    if (!i) return;
                    let o = null == (r = i.premiumCredits) ? void 0 : r.servicePeriodStartMs;
                    return (0, n(192159).di)({
                        servicePeriodStart: o ? new Date(o) : void 0,
                        experimentService: n(218744).default,
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        582471: (e, t, n) => {
            n.d(t, {
                Y: () => l
            }), n(296540);
            var r = n(474848);
            let i = {
                    textAlign: "center",
                    width: "100%",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    textWrap: "balance"
                },
                o = {
                    position: "relative"
                };

            function l(e) {
                let {
                    iconAndTitle: t,
                    description: l
                } = e;
                return t || l ? (0, r.jsxs)(n(4458).VP, {
                    gap: 8,
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    style: o,
                    children: [t, l ? (0, r.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: i,
                        children: l
                    }) : null]
                }) : null
            }
        },
        591637: (e, t, n) => {
            n.d(t, {
                a: () => o
            }), n(898992), n(354520), n(581454), n(296540);
            var r = n(474848);
            let i = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: n(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: n(699422).Wy.regular,
                    lineHeight: "15px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o(e) {
                var t;
                let {
                    caption: o,
                    layout: l,
                    sectionGap: a,
                    secondaryButtonTooltip: s
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !o) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === l ? (0, r.jsxs)(n(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: a ? ? 8,
                        ...i.positionRelative
                    },
                    children: [(0, r.jsxs)(n(4458).VP, {
                        style: {
                            gap: 7,
                            ...i.positionRelative
                        },
                        children: [d.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t)), o ? (0, r.jsx)("div", {
                            style: i.caption,
                            children: o
                        }) : null]
                    }), u ? s ? (0, r.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: i.style0,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, r.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: c.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === l ? (0, r.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: a ? ? 8,
                        ...i.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, r.jsx)(n(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === l ? (0, r.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? s ? (0, r.jsx)(n(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: i.style1,
                        placement: "bottom",
                        children: e => (0, r.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, r.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, r.jsx)("div", {
                        children: d.map((e, t) => (0, r.jsx)(n(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, n(722371).HB)(l)
            }
        },
        623644: (e, t, n) => {
            n.d(t, {
                NX: () => i,
                gp: () => l,
                h9: () => o,
                i6: () => s,
                rj: () => a,
                tw: () => r
            }), n(581454);
            let r = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                i = ["2022-06-28", "2025-09-03", "2026-03-11"],
                o = "2026-03-11",
                l = "2022-06-28",
                a = "2026-03-11";
            n(489561).CA.literals(...r);
            let s = "2025-09-03"
        },
        662886: (e, t, n) => {
            n.d(t, {
                K: () => l
            }), n(296540);
            var r = n(474848);
            let i = (0, n(109939).YK)({
                    menu: {
                        defaultMessage: "Menu",
                        id: "topbar.appMenuButton.title"
                    }
                }),
                o = {
                    style0: {
                        position: "absolute",
                        top: "10px",
                        insetInlineStart: "14px",
                        width: 24,
                        height: 24,
                        zIndex: 1e5,
                        ...(0, n(1249).g)({
                            noDrag: !0
                        })
                    }
                };

            function l() {
                let e = (0, n(109939).tz)();
                return (0, n(682985).O$)(n(584257).b) ? null : (0, r.jsx)(n(374533).A, {
                    style: o.style0,
                    colorVariant: "primary",
                    onClick: () => {
                        var e;
                        null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (e = n(775657).electronApi.openAppMenu) || e.call(n(775657).electronApi)
                    },
                    icon: n(898378).notionTintableIcon,
                    ariaLabel: e.formatMessage(i.menu)
                })
            }
        },
        685745: (e, t, n) => {
            n.d(t, {
                B: () => l
            });
            var r = () => n(129499),
                i = () => n(955630);

            function o(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && n(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== i().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function l(e) {
                let t, i = o(e);
                if (!i) return;
                let l = o([...e].reverse());
                if (!l) return;
                let a = (0, n(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: i.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!a) return;
                let s = (0, n(787926).mP)(l.blockStore, a);
                if (s) {
                    for (let e of (0, n(827049).Y_)(s)) {
                        let n = e.value.store.getTitleStore();
                        if (n) {
                            let e = (0, r().s)(n);
                            e && (t = {
                                store: n,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: i.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        695142: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowDiagonalUpRightFillIcon: () => i,
                iconDefinition: () => r
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                i = (0, n(104509).wt)("arrowDiagonalUpRightFill", r, "fill")
        },
        701513: (e, t, n) => {
            n.d(t, {
                D: () => r
            });

            function r(e) {
                let t = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                t && (0, n(358667).openChatPanel)({
                    environment: e,
                    store: t,
                    chatPanelState: {
                        isOpen: !0,
                        isNewThread: !0
                    }
                })
            }
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => r
            });

            function r(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        748356: (e, t, n) => {
            n.d(t, {
                f: () => c,
                l: () => m
            }), n(581454), n(296540);
            var r = n(474848);
            let i = (0, n(109939).YK)({
                learnMore: {
                    id: "banner.learnMore",
                    defaultMessage: "Learn more"
                },
                dismiss: {
                    id: "banner.dismiss",
                    defaultMessage: "Dismiss"
                }
            });

            function o(e, t) {
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[e].background.secondary,
                        padding: "8px 12px",
                        minHeight: 44,
                        flexShrink: 0
                    },
                    icon: {
                        width: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        height: n(986939).A.isMobile ? n(104509).Ev.default : n(104509).Ev.sm,
                        fill: t ? n(632079).Tj[t].icon.accentPrimary : n(632079).Tj[e].icon.secondary
                    },
                    content: {
                        color: n(632079).Tj[e].text.secondary
                    },
                    contentAutoLayout: {
                        position: "relative",
                        color: n(632079).Tj[e].text.secondary
                    },
                    learnMoreIcon: {
                        fill: n(632079).Tj[e].icon.secondary
                    },
                    titleIcon: {
                        marginInlineEnd: 8
                    }
                }), [e, t])
            }

            function l(e) {
                let {
                    onDismiss: t
                } = e, o = (0, n(109939).tz)();
                return t ? (0, r.jsx)(n(374533).A, {
                    size: "xs",
                    onClick: t,
                    icon: n(25094).xMarkSmallIcon,
                    colorVariant: "primary",
                    ariaLabel: o.formatMessage(i.dismiss)
                }) : (0, r.jsx)("div", {})
            }

            function a(e) {
                let {
                    tint: t,
                    iconGroup: i,
                    style: o
                } = e;
                return i ? (0, r.jsx)(n(708966).Q, {
                    iconGroup: i,
                    variantName: "small",
                    colorPalette: t,
                    colorVariant: "secondary",
                    style: o
                }) : null
            }
            let s = {
                    k1xSpc: "x78zum5",
                    kXwgrk: "x1q0g3np",
                    kGNEyG: "x6s0dn4",
                    $$css: !0
                },
                d = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                };

            function c(e) {
                let {
                    tint: t,
                    action: i
                } = e, {
                    label: o,
                    onClick: l,
                    icon: a
                } = i, d = (0, n(960253).I)(() => ({
                    button: {
                        color: "gray" === t ? n(632079).Tj.text.primary : n(632079).Tj[t].text.secondary,
                        borderWidth: 1,
                        borderStyle: "solid",
                        borderColor: n(632079).Tj[t].border.strongTranslucent
                    },
                    buttonHovered: {
                        backgroundColor: n(632079).Tj[t].background.secondaryTranslucent
                    },
                    buttonPressed: {
                        backgroundColor: n(632079).Tj[t].background.tertiaryTranslucent
                    }
                }), [t]);
                return (0, r.jsx)(n(548436).A, {
                    iconLeading: a ? {
                        icon: a,
                        size: "sm"
                    } : void 0,
                    onClick: l,
                    style: d.button,
                    hoveredStyle: d.buttonHovered,
                    pressedStyle: d.buttonPressed,
                    children: (0, r.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        style: s,
                        children: o
                    })
                })
            }

            function u(e) {
                let {
                    label: t,
                    iconGroup: s,
                    tint: u,
                    onDismiss: p,
                    actions: f,
                    onLearnMoreClick: g
                } = e, y = o(u), m = (0, n(109939).tz)();
                return (0, r.jsxs)(n(4458).fI, {
                    style: y.container,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [(0, r.jsxs)(n(4458).fI, {
                        style: y.contentAutoLayout,
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, r.jsx)(a, {
                            tint: u,
                            iconGroup: s,
                            style: y.titleIcon
                        }), (0, r.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            children: t
                        }), g ? (0, r.jsx)(n(374533).A, {
                            onClick: g,
                            icon: () => (0, r.jsx)(n(708966).Q, {
                                iconGroup: n(799472).u,
                                variantName: "default",
                                colorPalette: u,
                                colorVariant: "secondary"
                            }),
                            ariaLabel: m.formatMessage(i.learnMore)
                        }) : void 0]
                    }), (0, r.jsxs)(n(4458).fI, {
                        gap: 12,
                        alignItems: "center",
                        justifyContent: "flex-end",
                        style: d,
                        flex: "1 1 0",
                        children: [(0, r.jsx)(n(4458).fI, {
                            gap: 8,
                            alignItems: "center",
                            justifyContent: "center",
                            style: d,
                            children: null == f ? void 0 : f.map((e, t) => e.isCustom ? e.render() : (0, r.jsx)(c, {
                                tint: u,
                                action: e
                            }, t))
                        }), (0, r.jsx)(l, {
                            onDismiss: p
                        })]
                    })]
                })
            }

            function p(e) {
                let {
                    label: t,
                    iconGroup: s,
                    staticIcon: u,
                    iconColor: p,
                    tint: f,
                    onDismiss: g,
                    actions: y,
                    onLearnMoreClick: m,
                    alignment: h = "center"
                } = e, b = o(f, p), x = (0, n(109939).tz)(), v = s ? (0, r.jsx)(a, {
                    tint: f,
                    iconGroup: s,
                    style: b.titleIcon
                }) : u ? u({ ...b.icon,
                    ...b.titleIcon
                }) : null;
                return (0, r.jsxs)(n(4458).fI, {
                    style: b.container,
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between",
                    gap: 8,
                    children: [(0, r.jsxs)(n(4458).fI, {
                        style: b.contentAutoLayout,
                        gap: 24,
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "start" === h ? "space-between" : "center",
                        children: [(0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "center",
                            style: d,
                            children: [v, (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: t
                            }), m ? (0, r.jsx)(n(51831).m, {
                                content: () => x.formatMessage(i.learnMore),
                                children: e => (0, r.jsx)(n(374533).A, {
                                    onClick: m,
                                    icon: () => (0, r.jsx)(n(708966).Q, {
                                        iconGroup: n(799472).u,
                                        variantName: "default",
                                        colorPalette: f,
                                        colorVariant: "secondary"
                                    }),
                                    ariaLabel: x.formatMessage(i.learnMore),
                                    ...e
                                })
                            }) : void 0]
                        }), y ? (0, r.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == y ? void 0 : y.map((e, t) => e.isCustom ? e.render() : (0, r.jsx)(c, {
                                tint: f,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, r.jsx)(l, {
                        onDismiss: g
                    })]
                })
            }

            function f(e) {
                let {
                    label: t,
                    description: i,
                    iconGroup: s,
                    staticIcon: u,
                    iconColor: p,
                    tint: f,
                    onDismiss: g,
                    actions: y,
                    noRoundedCorners: m
                } = e, h = o(f, p), b = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[f].background.secondary,
                        padding: 16,
                        borderRadius: 8 * !m,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [f, m]), x = s ? (0, r.jsx)(a, {
                    tint: f,
                    iconGroup: s
                }) : u ? u(h.icon) : null;
                return (0, r.jsxs)(n(4458).fI, {
                    style: b.container,
                    gap: 8,
                    width: "100%",
                    children: [x ? (0, r.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: x
                    }) : null, (0, r.jsxs)(n(4458).VP, {
                        style: h.content,
                        gap: 8,
                        flex: "1 1 0",
                        children: [(0, r.jsxs)(n(4458).VP, {
                            gap: 4,
                            style: d,
                            children: [(0, r.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "gray" === f ? "primary" : void 0,
                                children: t
                            }), i ? (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: i
                            }) : null]
                        }), y ? (0, r.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == y ? void 0 : y.map((e, t) => e.isCustom ? e.render() : (0, r.jsx)(c, {
                                tint: f,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, r.jsx)(l, {
                        onDismiss: g
                    })]
                })
            }

            function g(e) {
                let {
                    label: t,
                    staticIcon: i,
                    tint: a,
                    iconColor: s,
                    onDismiss: u,
                    actions: p
                } = e, f = o(a, s), g = (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        backgroundColor: n(632079).Tj[a].background.secondary,
                        paddingTop: 8,
                        paddingInlineEnd: 8,
                        paddingBottom: 8,
                        paddingInlineStart: 12,
                        borderRadius: 8,
                        minHeight: 44,
                        flexShrink: 0
                    }
                }), [a]);
                return (0, r.jsxs)(n(4458).fI, {
                    style: g.container,
                    gap: 8,
                    alignItems: p ? "center" : void 0,
                    justifyContent: p ? "center" : void 0,
                    width: "100%",
                    children: [i ? (0, r.jsx)(n(4458).fI, {
                        height: 20,
                        alignItems: "center",
                        justifyContent: "center",
                        children: i(f.icon)
                    }) : null, (0, r.jsxs)(n(4458).fI, {
                        style: f.content,
                        alignItems: "center",
                        justifyContent: "space-between",
                        flex: "1 1 0",
                        children: [(0, r.jsx)(n(4458).VP, {
                            gap: 4,
                            style: d,
                            flex: "1 1 0",
                            children: (0, r.jsx)(n(111010).D, {
                                styleKey: "bodyRegular",
                                children: t
                            })
                        }), p ? (0, r.jsx)(n(4458).fI, {
                            gap: 8,
                            style: d,
                            children: null == p ? void 0 : p.map((e, t) => e.isCustom ? e.render() : (0, r.jsx)(c, {
                                tint: a,
                                action: e
                            }, t))
                        }) : null]
                    }), (0, r.jsx)(l, {
                        onDismiss: u
                    })]
                })
            }

            function y(e) {
                let {
                    tint: t,
                    onDismiss: i,
                    content: a,
                    alignment: s = "center",
                    verticalAlignment: d = "center"
                } = e, c = o(t);
                return (0, r.jsxs)(n(4458).fI, {
                    style: c.container,
                    gap: 8,
                    alignItems: d,
                    justifyContent: "space-between",
                    width: "100%",
                    children: [(0, r.jsx)(n(4458).fI, {
                        style: c.content,
                        flexGrow: 1,
                        justifyContent: s,
                        children: a
                    }), (0, r.jsx)(l, {
                        onDismiss: i
                    })]
                })
            }

            function m(e) {
                let {
                    display: t
                } = e;
                switch (t) {
                    case "inline":
                        return (0, r.jsx)(f, { ...e
                        });
                    case "full-width":
                        if (n(986939).A.isMobile) return (0, r.jsx)(u, { ...e
                        });
                        return (0, r.jsx)(p, { ...e
                        });
                    case "full-width-no-content":
                        return (0, r.jsx)(y, { ...e
                        });
                    case "inline-compact":
                        return (0, r.jsx)(g, { ...e
                        })
                }
                return (0, r.jsx)(r.Fragment, {})
            }
        },
        799472: (e, t, n) => {
            n.d(t, {
                u: () => r
            });
            let r = (0, n(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => n.e(82106).then(n.bind(n, 80094))
                },
                small: {
                    loader: () => n.e(82106).then(n.bind(n, 211052))
                },
                fill: {
                    loader: () => n.e(82106).then(n.bind(n, 769980))
                },
                fillSmall: {
                    loader: () => n.e(82106).then(n.bind(n, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        },
        803254: (e, t, n) => {
            n.d(t, {
                F: () => r
            });

            function r() {
                return n(986939).A.isMobile
            }
        },
        811853: (e, t, n) => {
            n.r(t), n.d(t, {
                hasOnboardingAgentMutatedFirstBlock: () => r
            });

            function r(e) {
                let {
                    postOnboardingAgentConfig: t
                } = e;
                return !!(0, n(596244).B)(t) && !!t.has_mutated_block
            }
        },
        852864: (e, t, n) => {
            n.d(t, {
                H: () => r
            }), n(898992), n(672577);

            function r({
                spaceStore: e,
                userId: t,
                environment: i
            }) {
                let o = new(n(736309)).d(i, {
                    table: n(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return o ? n(994797).SpaceViewStore.createChildStore(e, {
                    id: o.id,
                    table: n(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        916612: (e, t, n) => {
            n.d(t, {
                A: () => i
            }), n(296540);
            var r = n(474848);
            let i = function({
                    imageURL: e,
                    imageWidth: t,
                    imageHeight: i,
                    caption: o,
                    title: a,
                    imageContainerStyle: s
                }) {
                    if (!e) return (0, r.jsx)(l, {
                        caption: o,
                        title: a,
                        style: {
                            width: t
                        }
                    }); {
                        let d = (0, n(703003).L)(e);
                        return (0, r.jsxs)("div", {
                            style: {
                                width: t || 200,
                                marginTop: 4,
                                marginBottom: 4
                            },
                            children: [(0, r.jsx)("div", {
                                style: {
                                    width: "100%",
                                    height: i || 100,
                                    borderRadius: 4,
                                    backgroundImage: `url(${d})`,
                                    backgroundSize: "cover",
                                    marginBottom: 6,
                                    ...s
                                }
                            }), (0, r.jsx)(l, {
                                caption: o,
                                title: a
                            })]
                        })
                    }
                },
                o = {
                    style0: {
                        fontWeight: n(699422).Wy.bold,
                        marginBottom: 4
                    },
                    style1: {
                        whiteSpace: "normal",
                        lineHeight: 1.4
                    }
                };

            function l({
                style: e,
                caption: t,
                title: n
            }) {
                return (0, r.jsxs)("div", {
                    style: { ...o.style1,
                        ...e
                    },
                    children: [n ? (0, r.jsx)("header", {
                        style: o.style0,
                        children: n
                    }) : void 0, t]
                })
            }
        }
    }
]);