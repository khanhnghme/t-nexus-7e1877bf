"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [81476], {
        2825: (e, t, n) => {
            n.d(t, {
                A: () => r,
                b: () => d
            }), n(581454);
            var i = n(296540),
                o = n(474848);
            let r = 1,
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

            function d(e) {
                var t, d, a, c;
                let {
                    sections: x,
                    expandAllWhenSectionsChange: h = !1,
                    overrideExpandedState: p,
                    chevronPosition: g = "end",
                    styleOverrides: y,
                    borderedStyle: f = !1,
                    compactMode: m = !1,
                    buttonPadding: v
                } = e, b = (t = y, d = f, a = m, c = v, (0, n(960253).I)(() => {
                    let e = (null == t ? void 0 : t.sectionBackground) ? ? n(632079).Tj.background.secondary,
                        i = (null == t ? void 0 : t.sectionButtonBackground) ? ? n(632079).Tj.background.secondary,
                        o = (null == t ? void 0 : t.sectionButtonHoverBackground) ? ? n(632079).Tj.background.secondaryTranslucent;
                    return {
                        container: {
                            display: "grid",
                            gap: 8,
                            ...a ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionWrapper: d ? {
                            background: "transparent",
                            borderRadius: 8,
                            border: `${r}px solid ${n(632079).Tj.border.secondary}`,
                            ...a ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        } : {
                            background: e,
                            borderRadius: 8,
                            ...a ? {
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        },
                        sectionButton: {
                            background: d ? "transparent" : i,
                            borderRadius: 8,
                            padding: c ? ? (a ? "6px 10px" : "8px 12px"),
                            ...a ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerExpanded: {
                            background: d ? "transparent" : i,
                            borderBottom: `${r}px solid ${d?n(632079).Tj.border.secondary:n(632079).Tj.border.primary}`,
                            padding: c ? ? (a ? "6px 10px" : "8px 12px"),
                            borderStartStartRadius: 8,
                            borderStartEndRadius: 8,
                            borderEndStartRadius: 0,
                            borderEndEndRadius: 0,
                            ...a ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonWithDividerCollapsed: {
                            background: d ? "transparent" : i,
                            borderBottom: d ? void 0 : `1px solid ${n(632079).Tj.border.primary}`,
                            padding: c ? ? (a ? "6px 10px" : "8px 12px"),
                            borderRadius: 8,
                            ...a ? {
                                width: "100%",
                                boxSizing: "border-box"
                            } : {}
                        },
                        sectionButtonPressed: {
                            background: u.pressed
                        },
                        sectionButtonHovered: {
                            background: o
                        },
                        titleWrapper: a ? {
                            flex: 1,
                            minWidth: 0,
                            overflow: "hidden"
                        } : {},
                        sectionContent: {
                            padding: a ? 10 : 12,
                            ...a ? {
                                maxWidth: "100%",
                                boxSizing: "border-box",
                                overflow: "hidden"
                            } : {}
                        }
                    }
                }, [null == t ? void 0 : t.sectionBackground, null == t ? void 0 : t.sectionButtonBackground, null == t ? void 0 : t.sectionButtonHoverBackground, a, d, c])), [j, k] = (0, i.useState)(() => {
                    let e = {};
                    for (let t of x) !t.hidden && t.initialExpanded && (e[t.key] = !0);
                    return e
                }), I = (0, i.useCallback)(e => {
                    k(t => ({ ...t,
                        [e]: !t[e]
                    }))
                }, []);
                (0, i.useEffect)(() => {
                    if (h) {
                        let e = {};
                        for (let t of x) t.hidden || (e[t.key] = !0);
                        k(e)
                    }
                }, [x, h]), (0, i.useEffect)(() => {
                    (null == p ? void 0 : p.mode) === "onceOnChange" && k(e => ({ ...e,
                        ...p.sections
                    }))
                }, [p]);
                let T = (0, i.useMemo)(() => p && "always" === p.mode ? { ...j,
                    ...p.sections
                } : j, [j, p]);
                return (0, o.jsx)("div", {
                    style: b.container,
                    children: x.map(e => {
                        if (e.hidden) return null;
                        let t = !!T[e.key],
                            n = !1 !== e.collapsible;
                        return (0, o.jsx)(s, {
                            section: e,
                            isExpanded: t,
                            isCollapsible: n,
                            chevronPosition: g,
                            onToggle: I,
                            styles: { ...b,
                                ...l
                            },
                            borderedStyle: f
                        }, e.key)
                    })
                })
            }

            function s(e) {
                let {
                    section: t,
                    isExpanded: i,
                    isCollapsible: r,
                    chevronPosition: l,
                    onToggle: d,
                    styles: s,
                    borderedStyle: u
                } = e, x = t.headerDivider ? i ? s.sectionButtonWithDividerExpanded : s.sectionButtonWithDividerCollapsed : s.sectionButton, h = (0, o.jsx)(a, {
                    section: t,
                    isExpanded: i,
                    isCollapsible: r,
                    chevronPosition: l,
                    styles: s
                });
                return (0, o.jsxs)("div", {
                    style: s.sectionWrapper,
                    children: [(0, o.jsx)("div", {
                        children: r ? (0, o.jsx)(n(64960).Ay, {
                            onClick: () => d(t.key),
                            style: x,
                            hoveredStyle: s.sectionButtonHovered,
                            children: h
                        }) : (0, o.jsx)("div", {
                            style: x,
                            children: h
                        })
                    }), t.content ? (0, o.jsx)(c, {
                        content: t.content,
                        isExpanded: i,
                        contentStyle: t.sectionContentStyleOverride ? ? s.sectionContent,
                        borderedStyle: u
                    }) : void 0]
                })
            }

            function a(e) {
                let {
                    section: t,
                    isExpanded: i,
                    isCollapsible: r,
                    chevronPosition: l,
                    styles: d
                } = e, s = r ? (0, o.jsx)(n(16275).I, {
                    icon: n(120011).arrowChevronSingleRightIcon,
                    style: { ...d.chevronIcon,
                        transform: `rotateZ(${90*!!i}deg)`
                    }
                }) : void 0, a = t.disableUILabelWrap ? t.title : (0, o.jsx)(n(324489).V, {
                    style: d.sectionTitle,
                    children: t.title
                }), c = t.secondaryLabel ? t.disableUILabelWrap ? t.secondaryLabel : (0, o.jsx)(n(324489).V, {
                    isSecondaryColor: !0,
                    children: t.secondaryLabel
                }) : void 0;
                return "start" === l && r ? (0, o.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, o.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        style: d.titleWrapper,
                        children: [(0, o.jsx)(n(16275).I, {
                            icon: n(120011).arrowChevronSingleRightIcon,
                            style: { ...d.chevronIcon,
                                marginInlineStart: 0,
                                marginInlineEnd: 8,
                                transform: `rotateZ(${90*!!i}deg)`
                            }
                        }), t.icon ? (0, o.jsx)("div", {
                            style: d.sectionIcon,
                            children: t.icon
                        }) : void 0, a]
                    }), (0, o.jsx)(n(4458).fI, {
                        alignItems: "center",
                        children: c
                    })]
                }) : (0, o.jsxs)(n(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    children: [(0, o.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        style: d.titleWrapper,
                        children: [t.icon ? (0, o.jsx)("div", {
                            style: d.sectionIcon,
                            children: t.icon
                        }) : void 0, a]
                    }), (0, o.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        children: [c, s]
                    })]
                })
            }

            function c({
                content: e,
                isExpanded: t,
                contentStyle: i,
                borderedStyle: r
            }) {
                return (0, o.jsx)(n(203066).N, {
                    initial: !1,
                    children: t ? (0, o.jsx)(n(153321).P.div, {
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
                            background: r ? void 0 : n(632079).Tj.background.primary
                        },
                        children: (0, o.jsx)("div", {
                            style: i,
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
        67680: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new o
        },
        77386: (e, t, n) => {
            n.d(t, {
                J2: () => r,
                NF: () => l,
                gA: () => o,
                jl: () => x,
                p6: () => p,
                rQ: () => c
            }), n(581454), n(296540);
            var i = n(474848);
            let o = 24,
                r = 440,
                l = 480,
                d = {
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "100%",
                    gap: 8
                },
                s = {
                    textAlign: "center"
                },
                a = {
                    textAlign: "center"
                };

            function c(e) {
                let {
                    icon: t,
                    title: o,
                    byline: r,
                    bylineWidthOverride: l
                } = e;
                return (0, i.jsxs)("div", {
                    style: d,
                    children: [t, (0, i.jsx)(n(111010).D, {
                        styleKey: "titleSmSemibold",
                        style: s,
                        children: o
                    }), (0, i.jsx)(n(111010).D, {
                        styleKey: "bodyRegular",
                        colorVariant: "secondary",
                        style: l ? { ...a,
                            width: l
                        } : a,
                        children: r
                    })]
                })
            }
            let u = {
                cancelButton: { ...n(399842).W,
                    height: 32,
                    color: n(632079).Tj.text.secondary
                }
            };

            function x(e) {
                let {
                    primaryText: t,
                    primaryAction: o,
                    primaryDisabled: r,
                    secondaryText: l,
                    secondaryAction: d,
                    isLightRed: s,
                    isDarkRed: a,
                    isLoading: c
                } = e, x = !(s || a), h = (0, n(960253).I)(() => ({
                    container: {
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: x ? "row-reverse" : "column",
                        alignItems: "center",
                        justifyContent: x ? "flex-start" : "flex-end",
                        gap: 8,
                        padding: "0 20px",
                        marginInlineStart: -20,
                        width: "calc(100% + 40px)"
                    },
                    fullWidth: x ? {} : {
                        width: "100%",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                }), [x]);
                return (0, i.jsxs)("div", {
                    style: h.container,
                    children: [s ? (0, i.jsx)(n(265779).E, {
                        size: "lg",
                        onClick: o,
                        colorPalette: s ? "red" : void 0,
                        disabled: r,
                        style: h.fullWidth,
                        children: c ? (0, i.jsx)(n(517334).k, {}) : t
                    }) : (0, i.jsx)(n(912946).A, {
                        size: "lg",
                        onClick: o,
                        disabled: r,
                        style: h.fullWidth,
                        colorPalette: a ? "red" : "blue",
                        children: c ? (0, i.jsx)(n(517334).k, {}) : t
                    }), (0, i.jsx)(n(988022).p, {
                        size: "lg",
                        onClick: d,
                        style: { ...h.fullWidth,
                            ...u.cancelButton
                        },
                        children: l
                    })]
                })
            }
            let h = {
                style0: { ...(0, n(418676).pA)(1),
                    textOverflow: "ellipsis"
                },
                selectorContainer: {
                    border: `1px solid ${n(632079).Tj.border.secondary}`,
                    boxShadow: "0px 2px 4px 0px #0000000a",
                    borderRadius: 8
                },
                headerText: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    flexDirection: "column"
                },
                selectorHeader: {
                    padding: "4px 12px",
                    borderBottom: `1px solid ${n(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorHeaderWithAction: {
                    paddingTop: 4,
                    paddingInlineEnd: 4,
                    paddingBottom: 4,
                    paddingInlineStart: 12,
                    borderBottom: `1px solid ${n(632079).Tj.border.secondary}`,
                    display: "grid",
                    gridTemplateColumns: "24px 1fr 1fr"
                },
                selectorBody: {
                    paddingInline: 12,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyItems: "center",
                    width: "100%",
                    maxHeight: 204,
                    overflowX: "hidden",
                    overflowY: "auto"
                },
                selectorBodyRow: {
                    display: "grid",
                    gridTemplateColumns: "24px minmax(auto, 50%) 1fr",
                    width: "100%",
                    paddingBlock: 8,
                    gap: 8,
                    borderTop: `1px solid ${n(632079).Tj.border.secondary}`
                }
            };

            function p(e) {
                let {
                    items: t,
                    selectedIds: o,
                    disabledIds: r,
                    onSelectHeader: l,
                    onSelect: d,
                    titleText: s,
                    headerText: a,
                    headerAction: c
                } = e, u = void 0 !== o && void 0 !== r && d && l, x = void 0 !== r ? t.length - r.length : 0, p = (() => {
                    if (void 0 === o) return !1;
                    let e = 0;
                    for (let n of t) o.includes(n.id) && (e += 1);
                    return 0 !== e && (e !== x ? "partial" : 0 !== x)
                })();
                return (0, i.jsxs)(n(4458).VP, {
                    gap: 8,
                    marginBottom: 4,
                    children: [(0, i.jsx)(n(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "secondary",
                        children: s
                    }), (0, i.jsxs)("div", {
                        style: h.selectorContainer,
                        children: [(0, i.jsxs)("div", {
                            style: { ...c ? h.selectorHeaderWithAction : h.selectorHeader,
                                gridTemplateColumns: u ? "24px 1fr 1fr" : "1fr 1fr"
                            },
                            children: [u ? (0, i.jsx)(n(4458).VP, {
                                justifyContent: "center",
                                alignItems: "flex-start",
                                children: (0, i.jsx)(n(349050).S, {
                                    checked: p,
                                    size: 14,
                                    onClick: l
                                })
                            }) : null, (0, i.jsx)(n(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "secondary",
                                style: h.headerText,
                                children: a
                            }), (0, i.jsx)(n(4458).fI, {
                                justifyContent: "flex-end",
                                alignItems: "flex-end",
                                children: c
                            })]
                        }), (0, i.jsx)("div", {
                            style: h.selectorBody,
                            children: t.map(({
                                id: e,
                                icon: t,
                                name: l,
                                caption: s,
                                byline: a
                            }, c) => (0, i.jsxs)("div", {
                                style: { ...h.selectorBodyRow,
                                    borderTopWidth: +(0 !== c),
                                    gridTemplateColumns: u ? "24px minmax(auto, 50%) 1fr" : "minmax(auto, 50%) 1fr"
                                },
                                children: [u ? (0, i.jsx)(n(4458).VP, {
                                    justifyContent: "center",
                                    alignItems: "flex-start",
                                    children: (0, i.jsx)(n(349050).S, {
                                        checked: o.includes(e) || r.includes(e),
                                        size: 14,
                                        onClick: () => d(e),
                                        disabled: r.includes(e),
                                        style: {
                                            opacity: r.includes(e) ? .3 : 1
                                        }
                                    })
                                }) : null, (0, i.jsxs)(n(4458).fI, {
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    gap: 8,
                                    children: [(0, i.jsx)(n(4458).fI, {
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 28,
                                        width: 28,
                                        children: t
                                    }), (0, i.jsxs)(n(4458).VP, {
                                        alignItems: "flex-start",
                                        justifyContent: "center",
                                        gap: 2,
                                        children: [(0, i.jsx)(n(111010).D, {
                                            styleKey: "bodyMedium",
                                            style: h.style0,
                                            children: l
                                        }), s ? (0, i.jsx)(n(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "secondary",
                                            style: h.style0,
                                            children: s
                                        }) : null]
                                    })]
                                }), (0, i.jsx)(n(4458).fI, {
                                    justifyContent: "flex-end",
                                    alignItems: "center",
                                    children: a
                                })]
                            }, e))
                        })]
                    })]
                })
            }
        },
        182507: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                integrationFillIcon: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.07 15.76 14.35",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m.697 0a.55.55 0 0 1 .55-.55h.098a.55.55 0 0 1 0 1.1h-.097a.55.55 0 0 1-.55-.55m2.053 0a.55.55 0 0 1 .55-.55h.098a.55.55 0 0 1 0 1.1h-.098a.55.55 0 0 1-.55-.55m2.952 3.026a.55.55 0 0 1 .2.752l-.049.085a.55.55 0 1 1-.952-.552l.05-.084a.55.55 0 0 1 .75-.2M6.606 8.82a.55.55 0 0 1 .752.201l.049.084a.55.55 0 0 1-.952.552l-.049-.085a.55.55 0 0 1 .2-.751m5.734 1.772a.55.55 0 0 1 .2.752l-.05.084a.55.55 0 1 1-.951-.551l.049-.085a.55.55 0 0 1 .751-.2m-4.706 0a.55.55 0 0 1 .751.2l.05.085a.55.55 0 0 1-.953.551l-.048-.084a.55.55 0 0 1 .2-.752m10.243-4.799a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-5.106 8.862a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0"
                    })
                },
                o = (0, n(104509).wt)("integrationFill", i, "fill")
        },
        256094: (e, t, n) => {
            n.d(t, {
                V: () => d
            }), n(581454);
            var i = n(296540);

            function o(e, t) {
                if (e) return `${e}-tab-${t}`
            }

            function r(e, t) {
                if (e) return `${e}-tabpanel-${t}`
            }
            var l = n(474848);

            function d({
                ariaLabel: e,
                onSelect: t,
                selectedIndex: i,
                tabIdPrefix: o,
                tabs: r
            }) {
                return (0, l.jsx)(n(943019).Y, {
                    direction: "horizontal",
                    children: (0, l.jsx)("div", {
                        role: "tablist",
                        "aria-label": e,
                        className: "hide-scrollbar",
                        ...{
                            className: "x78zum5 xw2csxc x1yrsyyn x1icxu4v x10b6aqq x25sj25 xifccgj x1ws5yxj x4cne27 xw01apr xw09woa xmixu3c hide-scrollbar"
                        },
                        children: r.map((e, n) => (0, l.jsx)(s, {
                            index: n,
                            isSelected: i === n,
                            onSelect: t,
                            tab: e,
                            tabIdPrefix: o
                        }, n))
                    })
                })
            }

            function s({
                index: e,
                isSelected: t,
                onSelect: d,
                tab: a,
                tabIdPrefix: c
            }) {
                let {
                    isTabbable: u,
                    itemRef: x,
                    onKeyDown: h,
                    onFocus: p
                } = (0, n(943019).e)(), {
                    label: g,
                    onClick: y,
                    onKeyDown: f,
                    onFocus: m,
                    ...v
                } = a, b = (0, i.useCallback)(e => {
                    x(e)
                }, [x]), j = (0, i.useCallback)(t => {
                    null == y || y(t), d(e)
                }, [y, d, e]), k = (0, i.useCallback)(e => {
                    null == f || f(e), h(e)
                }, [f, h]), I = (0, i.useCallback)(e => {
                    null == m || m(e), p()
                }, [m, p]);
                return t ? (0, l.jsx)(n(265779).E, {
                    shape: "pill",
                    ...v,
                    "aria-controls": r(c, e),
                    "aria-selected": !0,
                    disallowTabbing: !u,
                    id: o(c, e),
                    onClick: j,
                    onFocus: I,
                    onKeyDown: k,
                    ref: b,
                    role: "tab",
                    children: g
                }) : (0, l.jsx)(n(988022).p, {
                    colorVariant: "secondary",
                    isEmphasized: !0,
                    shape: "pill",
                    ...v,
                    "aria-controls": r(c, e),
                    "aria-selected": !1,
                    disallowTabbing: !u,
                    id: o(c, e),
                    onClick: j,
                    onFocus: I,
                    onKeyDown: k,
                    ref: b,
                    role: "tab",
                    children: g
                })
            }
        },
        399842: (e, t, n) => {
            n.d(t, {
                W: () => i
            });
            let i = {
                height: 28,
                paddingInlineStart: 8,
                paddingInlineEnd: 8,
                paddingTop: 4,
                paddingBottom: 4,
                fontWeight: n(699422).Wy.medium
            }
        },
        413630: (e, t, n) => {
            n.d(t, {
                LN: () => p,
                Qh: () => s,
                Qs: () => c,
                gc: () => g,
                hL: () => l,
                m: () => h,
                rV: () => x
            }), n(57145), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(581454);
            var i = n(296540);
            let o = new Set(["Joined"]);

            function r(e) {
                let {
                    teamTypes: t
                } = e, o = (0, n(533992).v3)(), r = (0, n(682985).K8)(() => {
                    var t;
                    return e.userId ? ? (null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id)
                }, [e.userId]), l = (0, n(682985).K8)(() => e.spaceStore ? ? (0, n(328765).S)(), [e.spaceStore]);
                return (0, i.useEffect)(() => {
                    void 0 !== r && void 0 !== l && (0, n(455205).fetchUnfetchedTeams)({
                        userId: r,
                        spaceId: l.id,
                        teamTypes: t,
                        environment: o,
                        canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                        sort: null == e ? void 0 : e.sort
                    })
                }, [r, l, t, o, null == e ? void 0 : e.canTruncateRecordMap, null == e ? void 0 : e.sort]), (0, n(682985).K8)(() => {
                    if (void 0 === r || void 0 === l) return {
                        teams: [],
                        isLoading: !0,
                        isError: !1
                    };
                    let {
                        teams: e,
                        isLoading: i,
                        isError: o
                    } = n(988752).E.readTeams(r, l.id, t);
                    return {
                        teams: e,
                        isLoading: i,
                        isError: o
                    }
                }, [r, l, t], {
                    equalityFn: n(795676).k
                })
            }

            function l(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return r({
                    userId: t,
                    spaceStore: n,
                    teamTypes: o
                })
            }
            let d = new Set(["UnjoinedActive"]);

            function s(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return r({
                    userId: t,
                    spaceStore: n,
                    teamTypes: d,
                    canTruncateRecordMap: null == e ? void 0 : e.canTruncateRecordMap,
                    sort: null == e ? void 0 : e.sort
                })
            }
            let a = new Set(["Joined", "UnjoinedActive"]);

            function c(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return r({
                    userId: t,
                    spaceStore: n,
                    teamTypes: a
                })
            }
            let u = new Set(["Joined", "UnjoinedActive", "Archived"]);

            function x(e) {
                let {
                    userId: t,
                    spaceStore: n
                } = e || {};
                return r({
                    userId: t,
                    spaceStore: n,
                    teamTypes: u
                })
            }

            function h(e) {
                let {
                    userId: t,
                    spaceStore: o
                } = e, {
                    teams: r,
                    isLoading: d,
                    isError: s
                } = l({
                    userId: t,
                    spaceStore: o
                }), a = (0, n(682985).K8)(() => {
                    var e;
                    return new Map(((null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getJoinedTeams()) ? ? []).map((e, t) => [e, t]))
                }, []);
                return {
                    teams: (0, i.useMemo)(() => r.toSorted((e, t) => (a.get(e.id) ? ? 1 / 0) - (a.get(t.id) ? ? 1 / 0)), [r, a]),
                    isLoading: d,
                    isError: s
                }
            }

            function p(e) {
                let {
                    spaceStore: t,
                    shouldCreateTeamStores: i
                } = e, {
                    teams: o
                } = h(e);
                return {
                    teams: (0, n(682985).K8)(() => t && i ? o.map(e => (0, n(455205).getTeamStore)({
                        teamId: e.id,
                        spaceStore: t
                    })) : [], [o, t, i]),
                    metadata: o
                }
            }

            function g(e) {
                let {
                    teams: t
                } = e, i = (0, n(682985).K8)(() => e.spaceStore ? ? (0, n(328765).S)(), [e.spaceStore]);
                return i ? t.map(({
                    id: e,
                    type: t,
                    membershipSummary: o
                }) => ({
                    store: (0, n(455205).getTeamStore)({
                        teamId: e,
                        spaceStore: i
                    }),
                    type: t,
                    membershipSummary: o
                })) : []
            }
        },
        471696: (e, t, n) => {
            n.d(t, {
                Ay: () => i().A,
                yQ: () => r
            });
            var i = () => n(578786);
            let o = new(n(815048)).O2("radioModalRenderer", () => n.e(35818).then(n.bind(n, 113555))),
                r = (0, n(815048)._h)(o, e => e.default)
        },
        578786: (e, t, n) => {
            n.d(t, {
                A: () => c
            }), n(581454);
            var i = n(296540),
                o = n(474848);
            let r = {
                    title: {
                        fontFamily: (0, n(699422).vc)(n(849917).locale).sans,
                        fontSize: 17,
                        lineHeight: "22px",
                        fontWeight: n(699422).Wy.medium,
                        textAlign: "center",
                        marginBottom: 14
                    },
                    subtitle: {
                        fontFamily: (0, n(699422).vc)(n(849917).locale).sans,
                        fontSize: n(418676).vQ,
                        lineHeight: n(418676).G6,
                        fontWeight: n(699422).Wy.regular,
                        marginTop: 6,
                        marginBottom: 6,
                        textAlign: "center"
                    },
                    scroller: {
                        marginInlineStart: -20,
                        marginInlineEnd: -20,
                        paddingInlineStart: 20,
                        paddingInlineEnd: 20
                    },
                    cancelButton: {
                        marginTop: 8,
                        justifyContent: "center"
                    },
                    dismissButton: {
                        position: "absolute",
                        top: 10,
                        insetInlineEnd: 10,
                        zIndex: 1
                    }
                },
                l = {
                    button: {
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: 24,
                        height: 24,
                        borderRadius: "100%",
                        background: n(632079).Tj.background.tertiaryTranslucent
                    },
                    buttonHovered: {
                        background: n(632079).Tj.lightGrayButtonHoveredBackground
                    },
                    buttonPressed: {
                        background: n(632079).Tj.lightGrayButtonPressedBackground
                    }
                };

            function d({
                onClick: e
            }) {
                let t = (0, n(109939).tz)();
                return (0, o.jsx)(n(374533).A, {
                    style: l.button,
                    hoveredStyle: l.buttonHovered,
                    pressedStyle: l.buttonPressed,
                    onClick: e,
                    icon: n(25094).xMarkSmallIcon,
                    ariaLabel: t.formatMessage({
                        id: "dismissButton.ariaLabel",
                        defaultMessage: "Close"
                    })
                })
            }
            let s = {
                buttonText: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    ...n(699422).RC
                },
                optionTitle: {
                    fontWeight: n(699422).Wy.medium
                },
                optionSubtitle: {
                    whiteSpace: "break-spaces"
                }
            };

            function a({
                radioItem: e,
                isSelected: t,
                onSelectRadio: i,
                radioButtonStyle: r = "blue",
                left: l
            }) {
                let d = (0, n(960253).I)(() => ({
                    button: {
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 10,
                        height: "auto",
                        minHeight: 70,
                        borderRadius: 8,
                        paddingTop: 12,
                        paddingBottom: 12,
                        paddingInlineStart: 14,
                        paddingInlineEnd: 14 - n(451199).p,
                        border: "none",
                        boxShadow: t ? `inset 0 0 0 1px ${"blue"===r?n(632079).Tj.blue.icon.accentPrimary:n(632079).Tj.red.icon.accentPrimary}` : `inset 0 0 0 1px ${n(632079).Tj.border.primary}`
                    }
                }), [t, r]);
                return (0, o.jsxs)(n(548436).A, {
                    size: "lg",
                    onClick: () => i(e.key),
                    style: d.button,
                    children: [l ? (0, o.jsx)(n(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: l
                    }) : void 0, (0, o.jsxs)("div", {
                        style: s.buttonText,
                        children: [(0, o.jsx)(n(324489).V, {
                            style: s.optionTitle,
                            children: (0, o.jsx)(n(503473).j, {
                                children: e.title
                            })
                        }), e.subtitle ? (0, o.jsx)(n(324489).V, {
                            isSmall: !0,
                            isMultiline: !0,
                            style: s.optionSubtitle,
                            children: e.subtitle
                        }) : void 0]
                    }), (0, o.jsx)(n(451199).A, {
                        isSelected: t,
                        radioButtonColor: r
                    })]
                })
            }
            let c = i.memo(function({
                icon: e,
                iconStyle: t,
                title: l,
                subtitle: s,
                confirmText: c,
                confirmTextStyle: u = "blue",
                radioButtonStyle: x = "blue",
                confirmTextPerRadioOption: h,
                cancelText: p,
                hideCancelButton: g = !1,
                radioOptions: y,
                defaultSelectedRadioOption: f,
                onDismiss: m,
                onSelectRadio: v,
                onConfirm: b,
                width: j,
                footer: k
            }) {
                var I;
                let [T, S] = (0, i.useState)(f ? ? (null == (I = y[0]) ? void 0 : I.key)), C = (0, n(682985).uB)(void 0, n(593423).A), w = (0, n(682985).K8)(() => null == C ? void 0 : C.state.elementRef, [C]), B = (0, n(239160).CR)(w), A = (0, n(239160).yE)(w), M = (0, n(239160).o7)(w), R = A > 0, W = Math.ceil(A + M) < Math.floor(B), D = (0, i.useCallback)(e => {
                    e !== T && (S(e), null == v || v(e))
                }, [v, T]), E = (0, i.useCallback)(() => {
                    b(T)
                }, [b, T]), z = (0, n(960253).I)(() => {
                    let e = {
                        marginInlineStart: -20,
                        marginInlineEnd: -20,
                        height: 1,
                        borderTop: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                        transition: "opacity 200ms"
                    };
                    return {
                        container: {
                            display: "flex",
                            position: "relative",
                            flexDirection: "column",
                            justifyContent: "center",
                            overflow: "hidden",
                            width: `min(${j??400}px, calc(100vw - 40px))`,
                            maxHeight: "80vh",
                            padding: 20,
                            borderRadius: 6,
                            alignItems: "stretch"
                        },
                        icon: {
                            width: n(104509).Ev.xl,
                            height: n(104509).Ev.xl,
                            fill: n(632079).Tj.icon.secondary,
                            marginBottom: 10,
                            ...t
                        },
                        topDivider: { ...e,
                            opacity: +!!R
                        },
                        bottomDivider: { ...e,
                            opacity: +!!W
                        }
                    }
                }, [t, W, R, j]), P = (null == h ? void 0 : h[T]) ? ? c;
                return (0, o.jsxs)("div", {
                    style: z.container,
                    children: [(0, o.jsx)("div", {
                        style: r.dismissButton,
                        children: (0, o.jsx)(d, {
                            onClick: m
                        })
                    }), e ? (0, o.jsx)(n(4458).fI, {
                        width: "100%",
                        justifyContent: "center",
                        children: e(z.icon)
                    }) : void 0, (0, o.jsx)(n(324489).V, {
                        isMultiline: !0,
                        style: r.title,
                        children: l
                    }), s ? (0, o.jsx)(n(324489).V, {
                        isSmall: !0,
                        style: r.subtitle,
                        isMultiline: !0,
                        children: s
                    }) : void 0, y.length > 0 ? (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("div", {
                            style: z.topDivider
                        }), (0, o.jsx)(n(136508)._, {
                            type: n(644154).A.Y,
                            style: r.scroller,
                            store: C,
                            children: (0, o.jsx)(n(4458).VP, {
                                gap: 8,
                                children: y.map(e => (0, o.jsx)(a, {
                                    radioItem: e,
                                    radioButtonStyle: x,
                                    isSelected: e.key === T,
                                    onSelectRadio: D,
                                    left: e.left
                                }, e.key))
                            })
                        }), (0, o.jsx)("div", {
                            style: z.bottomDivider
                        })]
                    }) : void 0, (0, o.jsxs)(n(4458).VP, {
                        marginTop: 20,
                        children: ["blue" === u ? (0, o.jsx)(n(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            onClick: E,
                            children: P
                        }) : "red" === u ? (0, o.jsx)(n(912946).A, {
                            size: "lg",
                            onClick: E,
                            colorPalette: "red",
                            children: P
                        }) : (0, o.jsx)(n(548436).A, {
                            size: "lg",
                            onClick: E,
                            children: P
                        }), g ? void 0 : (0, o.jsx)(n(548436).A, {
                            size: "lg",
                            onClick: m,
                            style: r.cancelButton,
                            children: p ? ? (0, o.jsx)(n(109939).sA, {
                                id: "radioModal.cancel",
                                defaultMessage: "Cancel"
                            })
                        })]
                    }), k]
                })
            })
        },
        705213: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n(296540),
                o = n(474848);

            function r() {
                let e = (0, n(682985).O$)(n(67680).A);
                return (0, o.jsx)(n(556809).a, {
                    open: e.open,
                    overlayZIndex: 9999999,
                    onDismiss: () => {
                        n(67680).A.reset()
                    },
                    preventHideChildrenWhileOpening: !0,
                    innerStyle: s.inner,
                    children: (0, o.jsx)(l, { ...e
                    })
                })
            }

            function l(e) {
                let [t, r] = i.useState(""), [l, a] = i.useState(!1);
                if (!e.open) return null;
                let {
                    title: c,
                    message: u,
                    onConfirm: x
                } = e, h = i => {
                    let {
                        deleteIntegrationIfConfirmationInputMatch: o
                    } = i;
                    e.isDestructive && e.deleteMatchText !== t ? a(!0) : o && (x(), n(67680).A.reset())
                };
                return (0, o.jsxs)("div", {
                    style: s.style0,
                    children: [(0, o.jsx)("div", {
                        style: s.style1,
                        children: c
                    }), (0, o.jsx)("div", {
                        style: s.style2,
                        children: u
                    }), e.isDestructive ? (0, o.jsxs)("div", {
                        style: s.style3,
                        children: [(0, o.jsx)(n(36481).p, {
                            autoFocus: !0,
                            placeholder: e.deleteMatchText,
                            value: t,
                            onChange: t => {
                                let n = t.target.value;
                                l && e.deleteMatchText === n && a(!1), r(n)
                            },
                            onSubmit: () => h({
                                deleteIntegrationIfConfirmationInputMatch: !1
                            })
                        }), l ? (0, o.jsx)("div", {
                            style: s.style4,
                            children: e.deleteMatchError
                        }) : void 0]
                    }) : void 0, (0, o.jsxs)("div", {
                        style: s.style5,
                        children: [(0, o.jsx)(n(64960).Ay, {
                            onClick: () => {
                                n(67680).A.reset()
                            },
                            style: { ...s.button,
                                ...s.style6
                            },
                            children: (0, o.jsx)(n(109939).sA, {
                                id: "developerIntegration.confirmationModal.cancelLabel",
                                defaultMessage: "Cancel"
                            })
                        }), (0, o.jsx)(d, {
                            onSubmit: () => h({
                                deleteIntegrationIfConfirmationInputMatch: !0
                            }),
                            isWarning: e.isDestructive || e.isWarning,
                            confirmationMessage: e.confirmationMessage
                        })]
                    })]
                })
            }

            function d(e) {
                let {
                    onSubmit: t,
                    confirmationMessage: i,
                    isWarning: r
                } = e;
                return (0, o.jsx)(n(64960).Ay, {
                    onClick: t,
                    style: { ...s.button,
                        backgroundColor: r ? n(632079).oZ.frontRedButtonBackground : n(632079).Tj.blue.background.accentPrimary,
                        color: n(632079).oZ.white,
                        fontSize: 15
                    },
                    hoveredStyle: {
                        backgroundColor: r ? n(632079).oZ.frontRedButtonBackgroundHovered : n(632079).oZ.frontBlueButtonHoveredBackground,
                        color: n(632079).oZ.white
                    },
                    pressedStyle: {
                        backgroundColor: r ? n(632079).oZ.frontRedButtonBackgroundPressed : n(632079).oZ.frontBlueButtonPressedBackground,
                        color: n(632079).oZ.white
                    },
                    children: i
                })
            }
            let s = {
                button: {
                    padding: 6,
                    borderRadius: 6,
                    flex: 1,
                    textAlign: "center"
                },
                inner: {
                    overflow: "hidden",
                    borderRadius: 6,
                    padding: "24px 32px",
                    width: 380,
                    fontSize: 16,
                    boxShadow: n(632079).Tj.shadow.outline.scrim,
                    background: n(632079).oZ.white
                },
                style0: {
                    display: "flex",
                    flexDirection: "column"
                },
                style1: {
                    fontSize: 16,
                    fontWeight: n(699422).Wy.semibold
                },
                style2: {
                    fontSize: 14,
                    color: n(632079).oZ.frontTextMedium,
                    margin: "8px 0 16px"
                },
                style3: {
                    marginBottom: 12
                },
                style4: {
                    marginTop: 4,
                    color: n(632079).oZ.frontRed,
                    fontSize: 12
                },
                style5: {
                    display: "flex"
                },
                style6: {
                    border: `1px solid ${n(632079).oZ.uiLightBorder}`,
                    marginInlineEnd: 8,
                    fontSize: 15
                }
            }
        },
        880555: (e, t, n) => {
            n.d(t, {
                LV: () => o,
                Ph: () => r,
                Rj: () => d
            }), n(296540);
            var i = n(474848);
            let o = n(695216).lG,
                r = 0,
                l = (0, n(109939).YK)({
                    title: {
                        id: "developerIntegrationForm.refreshBotToken.revocationMode.title",
                        defaultMessage: "Refresh {credentialType, select, token {token} other {secret}}?"
                    },
                    subtitle: {
                        id: "developerIntegrationForm.refreshBotToken.revocationMode.subtitle",
                        defaultMessage: "A new {credentialType, select, token {token} other {secret}} will be generated right away. Replace the existing {credentialType, select, token {token} other {secret}} in your integration with the new one to avoid disruption. Select when to revoke the existing {credentialType, select, token {token} other {secret}}."
                    },
                    confirmText: {
                        id: "developerIntegrationForm.refreshBotToken.revocationMode.confirmText",
                        defaultMessage: "Refresh {credentialType, select, token {token} other {secret}}"
                    },
                    revokeIn7DaysTitle: {
                        id: "developerIntegrationForm.refreshBotToken.revocationMode.revokeIn7Days.title",
                        defaultMessage: "Revoke in 7 days"
                    },
                    revokeImmediatelyTitle: {
                        id: "developerIntegrationForm.refreshBotToken.revocationMode.revokeImmediately.title",
                        defaultMessage: "Revoke immediately"
                    }
                });

            function d(e) {
                let {
                    credentialType: t,
                    open: o,
                    onDismiss: r,
                    onConfirm: d
                } = e, s = (0, n(109939).tz)();
                return o ? (0, i.jsx)(n(556809).a, {
                    ariaLabel: s.formatMessage(l.title, {
                        credentialType: t
                    }),
                    open: o,
                    onDismiss: r,
                    children: (0, i.jsx)(n(471696).Ay, {
                        confirmTextStyle: "red",
                        width: 440,
                        title: (0, i.jsx)(n(109939).sA, { ...l.title,
                            values: {
                                credentialType: t
                            }
                        }),
                        subtitle: (0, i.jsx)(n(109939).sA, { ...l.subtitle,
                            values: {
                                credentialType: t
                            }
                        }),
                        confirmText: (0, i.jsx)(n(109939).sA, { ...l.confirmText,
                            values: {
                                credentialType: t
                            }
                        }),
                        defaultSelectedRadioOption: "revoke_in_7_days",
                        radioOptions: [{
                            key: "revoke_in_7_days",
                            title: (0, i.jsx)(n(109939).sA, { ...l.revokeIn7DaysTitle,
                                values: {
                                    credentialType: t
                                }
                            })
                        }, {
                            key: "revoke_immediately",
                            title: (0, i.jsx)(n(109939).sA, { ...l.revokeImmediatelyTitle,
                                values: {
                                    credentialType: t
                                }
                            })
                        }],
                        onDismiss: r,
                        onConfirm: e => {
                            e && d(e)
                        }
                    })
                }) : null
            }
        }
    }
]);