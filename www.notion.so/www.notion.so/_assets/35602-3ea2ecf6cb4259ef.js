"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [35602], {
        44419: (e, t, i) => {
            i.d(t, {
                E: () => a
            }), i(296540);
            var n = i(474848);

            function a(e) {
                var t;
                let {
                    collectionStore: a,
                    pageVisitSource: l,
                    size: s
                } = e, o = (0, i(533992).v3)(), r = (0, i(109939).tz)(), d = (0, i(682985).K8)(() => {
                    var e;
                    return null == a || null == (e = a.getParentBlockStore()) ? void 0 : e.getNavigableBlockStore()
                }, [a]), c = (0, i(682985).K8)(() => null == a ? void 0 : a.getIcon(), [a]), u = (t = s, (0, i(960253).I)(() => ({
                    button: {
                        display: "inline-flex",
                        alignItems: "center",
                        color: i(632079).Tj.text.primary,
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4,
                        marginInlineEnd: 2,
                        height: 24,
                        flex: "1 1 auto",
                        gap: 4,
                        fontSize: t
                    }
                }), [t]));
                return (0, n.jsxs)(i(988022).p, {
                    style: u.button,
                    onClick: e => {
                        d && ((0, i(545586).navigateToBlock)({
                            environment: o,
                            store: d,
                            pageVisitSource: l
                        }), i(738923).Q.close(), e.stopPropagation(), e.preventDefault())
                    },
                    children: [(0, n.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: c,
                        iconRecordCategory: "collection",
                        isEmptyPage: !1,
                        size: s,
                        useInvertedColors: !1
                    }), a ? (0, n.jsx)(i(627918).A, {
                        store: a
                    }) : (0, i(543464).L)(r)]
                })
            }
        },
        412560: (e, t, i) => {
            i.d(t, {
                g: () => o
            }), i(944114), i(898992), i(354520), i(581454);
            var n = i(296540),
                a = () => i(187353),
                l = i(474848);
            let s = (0, i(109939).YK)({
                createdBy: {
                    id: "deepFindSidebar.createdByFilterTitle",
                    defaultMessage: "Author"
                },
                lastEditedTime: {
                    id: "deepFindSidebar.lastEditedTimeFilterTitle",
                    defaultMessage: "Date"
                },
                applyFilters: {
                    id: "deepFindSidebar.applyFilters",
                    defaultMessage: "Apply"
                },
                titleOnly: {
                    id: "deepFindHeaderFilter.titleOnly",
                    defaultMessage: "Title only"
                },
                teamspace: {
                    id: "deepFindHeaderFilter.teamspace",
                    defaultMessage: "Teamspace"
                },
                in: {
                    id: "deepFindHeaderFilter.in",
                    defaultMessage: "In"
                },
                more: {
                    id: "deepFindHeaderTabs.moreTabs",
                    defaultMessage: "{count} more…"
                }
            });

            function o(e) {
                var t;
                let {
                    setToggled: a,
                    setIsToggleHovered: s,
                    toggled: o,
                    deepFindFeedbackPayload: m,
                    sources: f,
                    selectedDeepFindSource: x,
                    setSelectedDeepFindSource: b,
                    assistantSearchScope: v,
                    deepFindSearchFilters: j = i(585464).NH,
                    searchAgainAndUpdateAssistantSearchScope: S,
                    step: w,
                    useWebSearch: C
                } = e, [T, I] = (0, n.useState)(!1), [k, M] = (0, n.useState)(j), F = (0, n.useMemo)(() => (0, i(444700).vb)(j, k), [j, k]), {
                    current: A
                } = (0, n.useRef)(new(i(560600)).A({
                    initialDateRange: (t = j.dateRangeFilter ? ? i(585464).NH.dateRangeFilter) ? {
                        starting: t.startDate ? {
                            type: "date",
                            start_date: t.startDate
                        } : void 0,
                        ending: t.endDate ? {
                            type: "date",
                            start_date: t.endDate
                        } : void 0
                    } : {
                        starting: void 0,
                        ending: void 0
                    }
                })), B = (0, i(682985).O$)(A), P = (0, n.useRef)(!1);
                (0, n.useEffect)(() => {
                    if (!P.current) {
                        P.current = !0;
                        return
                    }
                    M(e => {
                        var t, i, n, a, l;
                        return { ...e,
                            dateRangeFilter: {
                                startDate: (null == (i = (t = B.temporaryDateRange).starting) ? void 0 : i.start_date) ? null == (n = t.starting) ? void 0 : n.start_date : void 0,
                                endDate: (null == (a = t.ending) ? void 0 : a.start_date) ? null == (l = t.ending) ? void 0 : l.start_date : void 0
                            }
                        }
                    })
                }, [B]);
                let z = (0, n.useCallback)(e => M(t => ({ ...t,
                        createdByFilter: e
                    })), []),
                    R = (0, n.useCallback)(() => M(e => ({ ...e,
                        titleOnlyFilter: !e.titleOnlyFilter
                    })), []),
                    D = (0, n.useCallback)(e => {
                        let {
                            recordIds: t,
                            type: i
                        } = e, n = "page" === i ? "ancestorsFilter" : "teamspacesFilter";
                        M(e => ({ ...e,
                            [n]: t
                        }))
                    }, []),
                    H = (0, i(86484).CJ)(x, "titleOnlyFilter"),
                    O = (0, i(86484).CJ)(x, "createdByFilter"),
                    W = (0, i(86484).CJ)(x, "teamspacesFilter"),
                    E = (0, i(86484).CJ)(x, "ancestorsFilter"),
                    U = (0, i(86484).CJ)(x, "dateRangeFilter"),
                    _ = (0, n.useMemo)(() => !!j.titleOnlyFilter || !!j.createdByFilter && !!(j.createdByFilter.length > 0) || !!j.teamspacesFilter && !!(j.teamspacesFilter.length > 0) || !!j.ancestorsFilter && !!(j.ancestorsFilter.length > 0) || !!j.dateRangeFilter && (!!j.dateRangeFilter.startDate || !!j.dateRangeFilter.endDate), [j]);
                return (0, l.jsxs)("div", {
                    style: r.container,
                    children: [(0, l.jsx)(y, {
                        setToggled: a,
                        toggled: o,
                        setIsToggleHovered: s,
                        sources: f,
                        selectedDeepFindSource: x,
                        setSelectedDeepFindSource: b,
                        step: w,
                        isFilterBarOpen: T,
                        setIsFilterBarOpen: I,
                        isAnyFilterApplied: _
                    }), T || _ ? (0, l.jsx)("div", {
                        style: r.filterBar,
                        children: f.length > 0 && x ? (0, l.jsx)("div", {
                            style: r.filterContainer,
                            children: (0, l.jsxs)("div", {
                                style: r.filterRow,
                                children: [H ? (0, l.jsx)(c, {
                                    onChange: R,
                                    value: k.titleOnlyFilter
                                }) : void 0, O ? (0, l.jsx)(g, {
                                    onChange: z,
                                    value: k.createdByFilter ? ? (null == j ? void 0 : j.createdByFilter)
                                }) : void 0, W ? (0, l.jsx)(u, {
                                    value: k.teamspacesFilter ? ? (null == j ? void 0 : j.teamspacesFilter),
                                    onChange: D
                                }) : void 0, E ? (0, l.jsx)(p, {
                                    value: k.ancestorsFilter ? ? (null == j ? void 0 : j.ancestorsFilter),
                                    onChange: D
                                }) : void 0, U ? (0, l.jsx)(h, {
                                    searchDateFilterStore: A
                                }) : void 0, (0, l.jsx)(d, {
                                    shouldShowApplyButton: !F,
                                    deepFindFeedbackPayload: m,
                                    onApplyClick: () => S({
                                        assistantSearchScope: v,
                                        searchFilters: k,
                                        useWebSearch: C ? ? !1
                                    })
                                })]
                            })
                        }) : void 0
                    }) : void 0]
                })
            }
            let r = {
                container: {
                    marginTop: 6,
                    marginBottom: 6
                },
                filterBar: {
                    width: "calc(100% + 20px)",
                    marginBottom: 8,
                    marginInlineStart: -8,
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0,
                    whiteSpace: "nowrap",
                    minWidth: 0,
                    flexShrink: 0,
                    color: i(632079).Tj.text.secondary,
                    fontSize: 14,
                    fontWeight: i(699422).Wy.regular,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                },
                filterContainer: {
                    flexGrow: 1,
                    display: "flex",
                    gap: 4,
                    width: "100%",
                    alignItems: "center",
                    minHeight: 32
                },
                filterRow: {
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                    height: 40,
                    overflowX: "auto",
                    position: "relative"
                }
            };

            function d(e) {
                let {
                    shouldShowApplyButton: t,
                    onApplyClick: n,
                    deepFindFeedbackPayload: a
                } = e;
                return (0, l.jsx)(i(4458).fI, {
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "flex-end",
                    gap: 4,
                    children: t ? (0, l.jsx)(i(912946).A, {
                        colorPalette: "blue",
                        iconLeading: {
                            icon: i(20413).checkmarkFillSmallIcon,
                            size: "xs"
                        },
                        onClick: n,
                        children: (0, l.jsx)(i(109939).sA, { ...s.applyFilters
                        })
                    }) : (0, l.jsx)("div", {
                        children: a ? (0, l.jsx)(i(417115).Az, {
                            deepFindFeedbackPayload: a
                        }) : null
                    })
                })
            }

            function c(e) {
                let {
                    value: t,
                    onChange: n
                } = e, a = (0, i(109939).tz)();
                return (0, l.jsx)(i(492205).J, {
                    mode: i(454860).C.Pill,
                    focused: !1,
                    title: a.formatMessage(s.titleOnly),
                    icon: i(517259).a,
                    value: !!t,
                    onChange: n
                })
            }

            function u(e) {
                let {
                    value: t,
                    onChange: n
                } = e, a = (0, i(109939).tz)(), o = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore);
                return o ? (0, l.jsx)(i(231246).SZ, {
                    parentStore: o,
                    mode: i(454860).C.Pill,
                    title: a.formatMessage(s.teamspace),
                    teamIds: t,
                    onChange: e => n({
                        recordIds: e,
                        type: "teamspace"
                    }),
                    focused: !1
                }) : null
            }

            function p(e) {
                let {
                    value: t,
                    onChange: n
                } = e, a = (0, i(109939).tz)(), o = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore);
                return o ? (0, l.jsx)(i(331436).E, {
                    parentStore: o,
                    mode: i(454860).C.Pill,
                    blockIds: t ? ? [],
                    onChange: e => n({
                        recordIds: e,
                        type: "page"
                    }),
                    focused: !1,
                    peopleBlocksToInclude: "none",
                    title: a.formatMessage(s.in)
                }) : null
            }

            function h(e) {
                let {
                    searchDateFilterStore: t
                } = e, n = (0, i(109939).tz)();
                return (0, l.jsx)(i(549920).m, {
                    title: n.formatMessage(s.lastEditedTime),
                    focused: !1,
                    mode: i(454860).C.Pill,
                    showButtons: !0,
                    icon: i(998172).D,
                    dateFilterType: "lastEditedTime",
                    store: t
                })
            }

            function g(e) {
                let {
                    onChange: t,
                    value: n
                } = e, a = (0, i(109939).tz)(), o = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore);
                return o ? (0, l.jsx)("div", {
                    children: (0, l.jsx)(i(583490).A, {
                        mode: i(454860).C.Pill,
                        title: a.formatMessage(s.createdBy),
                        parentStore: o,
                        userIds: n ? ? [],
                        onChange: e => t(e),
                        focused: !1
                    })
                }) : null
            }

            function m(e, t, n) {
                if ("all" === e) return null;
                let a = (0, i(417115).CH)(e).icon;
                return "function" == typeof a ? a({
                    width: t,
                    height: t
                }) : (0, l.jsx)(i(708966).Q, {
                    iconGroup: a,
                    variantName: "default",
                    style: {
                        width: t,
                        height: t
                    }
                })
            }
            let f = n.memo(function({
                    overflowTabs: e,
                    selectedDeepFindSource: t,
                    setSelectedDeepFindSource: a,
                    sourceToCountMap: o,
                    connectorsUpsellOrManage: r,
                    styles: d
                }) {
                    let c = (0, n.useRef)(null),
                        u = "dark" === (0, i(960253).e)(),
                        p = (0, n.useCallback)(() => {
                            c.current && c.current.setOpen(!1)
                        }, [c]);
                    return (0, l.jsx)("div", {
                        style: d.moreTabStyle,
                        children: (0, l.jsx)(i(656252).A, {
                            ref: c,
                            alignmentToOrigin: "start",
                            placementToOrigin: "bottom",
                            originGap: 4,
                            popupType: i(182718).nl.Popup,
                            content: () => (0, l.jsx)(i(747369).A, {
                                menuType: i(649476).gu.Popup,
                                width: 220,
                                onClickOutside: p,
                                children: (0, l.jsxs)(i(844565).A, {
                                    children: [e.map(e => (0, l.jsx)(i(95582).A, {
                                        focused: !1,
                                        onClick: () => {
                                            p(), a(e)
                                        },
                                        icon: "all" === e ? null : m(e, 14, u),
                                        title: "all" === e ? (0, l.jsx)(i(109939).sA, {
                                            id: "assistantCitationHelpers.allSources",
                                            defaultMessage: "All"
                                        }) : (0, i(417115).CH)(e).name,
                                        right: void 0 !== o[e] ? (0, l.jsx)("span", {
                                            style: d.count,
                                            children: o[e]
                                        }) : void 0,
                                        isChecked: e === t
                                    }, e)), r ? (0, l.jsx)(i(548117).$, {
                                        focused: !1,
                                        onClick: () => {
                                            p(), r()
                                        }
                                    }) : void 0]
                                })
                            }),
                            children: t => (0, l.jsx)(i(64960).Ay, {
                                style: d.moreButton,
                                ignoreLocalHoverState: !0,
                                ignoreLocalPressedState: !0,
                                ...t,
                                children: (0, l.jsx)(i(109939).sA, { ...s.more,
                                    values: {
                                        count: e.length
                                    }
                                })
                            })
                        }, "more")
                    })
                }),
                x = {
                    tabIcon: {
                        width: 14,
                        height: 14,
                        color: i(632079).Tj.icon.primary
                    },
                    count: {
                        display: "flex",
                        alignItems: "start",
                        color: i(632079).Tj.text.tertiary,
                        fontSize: 12,
                        flexWrap: "nowrap",
                        gap: 8,
                        width: "fit-content"
                    },
                    moreButton: {
                        height: 32,
                        borderRadius: 16,
                        color: i(632079).Tj.text.secondary,
                        fontSize: 14,
                        fontWeight: i(699422).Wy.medium,
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "100%",
                        minWidth: 0,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12
                    },
                    moreTabStyle: {
                        display: "flex",
                        alignItems: "center",
                        paddingTop: 2,
                        paddingBottom: 2,
                        gap: 5
                    },
                    selectedCount: {
                        display: "flex",
                        alignItems: "center",
                        color: i(632079).Tj.text.secondary,
                        fontSize: 12,
                        flexWrap: "nowrap",
                        gap: 8,
                        width: "fit-content"
                    },
                    tabStyle: {
                        display: "flex",
                        alignItems: "center",
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        paddingTop: 2,
                        paddingBottom: 2,
                        gap: 5
                    },
                    tabsContainer: {
                        width: "calc(100% + 20px)",
                        marginInlineStart: -8,
                        paddingInlineStart: 0,
                        paddingInlineEnd: 0,
                        gap: 1
                    },
                    baseTabStyle: {
                        paddingBottom: 8,
                        paddingTop: 8
                    },
                    tabTitleStyle: {
                        color: i(632079).Tj.text.secondary,
                        height: 32,
                        borderRadius: 16,
                        paddingInlineStart: 0,
                        paddingInlineEnd: 0
                    },
                    selectedTabTitleStyle: {
                        background: i(632079).Tj.background.tertiaryTranslucent,
                        color: i(632079).Tj.text.primary
                    },
                    tabBorderStyle: {
                        borderBottom: void 0
                    },
                    style0: {
                        padding: "0px"
                    },
                    style1: {
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                    },
                    style2: {
                        height: 32,
                        width: 32,
                        borderRadius: 16,
                        marginTop: -8,
                        marginBottom: -8,
                        marginInlineStart: -8,
                        marginInlineEnd: -8
                    },
                    style3: {
                        padding: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                };

            function y(e) {
                let {
                    sources: t,
                    selectedDeepFindSource: o,
                    setSelectedDeepFindSource: r,
                    step: d,
                    isFilterBarOpen: c,
                    setIsFilterBarOpen: u,
                    isAnyFilterApplied: p
                } = e, h = "dark" === (0, i(960253).e)(), g = (0, n.useMemo)(() => new(i(864844)).E({
                    throttleMs: 50
                }), []), [y, b] = (0, n.useState)(0), v = (0, n.useRef)(null), j = (0, i(109939).tz)(), S = (0, n.useMemo)(() => new(i(529623)).k({
                    style: {
                        fontSize: "14px",
                        fontWeight: i(699422).Wy.medium
                    }
                }), []), w = (0, n.useMemo)(() => {
                    let e = j.formatMessage(s.more, {
                        count: 99
                    });
                    return Math.ceil(S.measure(e).width) + 32
                }, [j, S]), C = (0, n.useMemo)(() => {
                    let e = {};
                    if (!d || !(0, a().l0)(d)) return e;
                    for (let n in d.results) {
                        var t;
                        ("helpdocs" === n || "helpdoc-section" === n || "webpage" === n || "notion" === n || (0, i(281708).SC)(n)) && (e[(0, a().tC)(n)] = (null == (t = d.results[n]) ? void 0 : t.length) ? ? 0)
                    }
                    return e
                }, [d]), T = (0, n.useCallback)(e => {
                    let t = "all" === e ? "All" : (0, i(417115).CH)(e).name,
                        n = C[e],
                        a = void 0 !== n ? `${t} ${n}` : t,
                        l = S.measure(a),
                        s = 14 * ("all" !== e);
                    return Math.min(32 + l.width + s, 220)
                }, [C, S]), I = (0, n.useMemo)(() => {
                    if (!y) return t;
                    let e = y - w,
                        i = [],
                        n = 0;
                    if (o) {
                        let t = T(o);
                        if (!(t <= e)) return [o];
                        n += t
                    }
                    for (let a of t) {
                        if (a === o) continue;
                        let t = T(a);
                        if (n + t <= e) i.push(a), n += t;
                        else break
                    }
                    if (o) {
                        let e = t.indexOf(o),
                            n = 0;
                        for (let a = 0; a < i.length && !(t.indexOf(i[a]) > e); a++) n = a + 1;
                        i.splice(n, 0, o)
                    }
                    return i
                }, [y, t, T, o, w]), k = (0, n.useMemo)(() => t.filter(e => !I.includes(e)), [t, I]), M = (0, n.useCallback)(e => {
                    e && (g.observe(e), g.rect.addListener(e => {
                        b(e.state.width)
                    }))
                }, [g]), F = (0, n.useCallback)(() => {
                    v.current && v.current.setOpen(!1)
                }, [v]), {
                    bubbleIcons: A,
                    connectorsUpsellOrManage: B,
                    hasExistingConnectors: P
                } = (0, i(993315).b)({
                    connector: "generic",
                    analyticsFrom: "ai_chat_search_results_tab"
                }), z = (0, n.useMemo)(() => (0, l.jsx)(i(51831).m, {
                    disableTooltip: !P,
                    originGap: 4,
                    content: () => (0, l.jsx)(i(109939).sA, { ...i(385728).D.connectMoreApps
                    }),
                    children: e => (0, l.jsx)("div", {
                        style: { ...x.tabStyle,
                            ...x.style3,
                            ...P && x.style2
                        },
                        ...e,
                        children: P ? (0, l.jsx)(i(16275).I, {
                            icon: i(638501).plusSmallIcon,
                            size: "xs",
                            colorVariant: "secondary",
                            style: x.style0
                        }) : (0, l.jsxs)("span", {
                            style: x.style1,
                            children: [A, (0, l.jsx)(i(109939).sA, { ...i(385728).D.connectApps
                            })]
                        })
                    }, "add_connectors")
                }), [P, A]), R = (0, n.useCallback)(e => {
                    e < t.length ? r(t[e]) : void 0 !== B && (F(), B())
                }, [t, r, B, F]), D = (0, n.useCallback)(e => m(e, 14, h), [h]);
                return (0, l.jsx)("div", {
                    ref: M,
                    children: (0, l.jsx)(i(540336).LZ, {
                        style: x.tabsContainer,
                        tabStyle: x.baseTabStyle,
                        tabTitleStyle: x.tabTitleStyle,
                        selectedTabTitleStyle: x.selectedTabTitleStyle,
                        tabBorderStyle: x.tabBorderStyle,
                        tabs: [...I.map(e => {
                            let t = e === o;
                            return (0, l.jsxs)("div", {
                                style: x.tabStyle,
                                children: [D(e), "all" === e ? (0, l.jsx)(i(109939).sA, {
                                    id: "assistantCitationHelpers.allSources",
                                    defaultMessage: "All"
                                }) : (0, i(417115).CH)(e).name, void 0 !== C[e] ? (0, l.jsx)("span", {
                                    style: t ? x.selectedCount : x.count,
                                    children: C[e]
                                }) : void 0]
                            }, e)
                        }), ...k.length > 0 ? [(0, l.jsx)(f, {
                            overflowTabs: k,
                            selectedDeepFindSource: o,
                            setSelectedDeepFindSource: r,
                            sourceToCountMap: C,
                            connectorsUpsellOrManage: B,
                            styles: x
                        }, "more-tabs-button")] : [], ...B && t.length > 0 && 0 === k.length ? [z] : []],
                        selectedIndex: o && I.includes(o) ? I.indexOf(o) : -1,
                        right: (0, l.jsx)(i(988022).p, {
                            size: "lg",
                            shape: "pill",
                            iconLeading: {
                                icon: i(103499).filterSmallIcon,
                                size: "xs"
                            },
                            colorPalette: p ? "blue" : void 0,
                            onClick: () => u(!c)
                        }),
                        onChange: R
                    })
                })
            }
        },
        417115: (e, t, i) => {
            i.d(t, {
                ts: () => I,
                cE: () => U,
                Az: () => w,
                M9: () => B,
                ln: () => R,
                d4: () => F,
                TG: () => D,
                CH: () => S
            }), i(18107), i(410838), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(967357), i(898992), i(354520), i(803949), i(581454), i(814603), i(147566), i(198721);
            var n = i(296540),
                a = i(474848);
            let l = {
                viewBox: "0 0 20 20",
                fittedViewBox: "3.72 6.12 12.56 7.16",
                svg: (0, a.jsx)("path", {
                    d: "M10.619 6.381a.875.875 0 0 0-1.238 0l-5.4 5.4A.875.875 0 1 0 5.22 13.02L10 8.237l4.781 4.782a.875.875 0 1 0 1.238-1.238z"
                })
            };
            (0, i(104509).wt)("arrowChevronSingleUpFill", l, "fill");
            let s = {
                modalWrap: {
                    width: "32rem",
                    padding: 24,
                    fontSize: 14,
                    maxWidth: "100%"
                },
                modalTitle: {
                    fontSize: 16,
                    fontWeight: i(699422).Wy.medium
                },
                modalSubtitle: {
                    fontSize: 13,
                    color: i(632079).Tj.text.tertiary
                },
                titleContainer: {
                    marginBottom: 12
                },
                buttonArea: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 18,
                    gap: 6
                },
                feedbackArea: {
                    marginTop: 17,
                    padding: 8
                },
                warningMessage: {
                    color: i(632079).Tj.red.text.accentPrimary,
                    marginTop: 10
                },
                checkboxArea: {
                    marginTop: 12,
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    cursor: "pointer"
                },
                style0: {
                    padding: 8
                }
            };

            function o(e) {
                let {
                    isOpen: t,
                    submit: l,
                    setIsOpen: o
                } = e, [d, c] = (0, n.useState)(""), [u, p] = (0, n.useState)(""), [h, g] = (0, n.useState)(!0), [m, f] = (0, n.useState)(!1), [x, y] = (0, n.useState)(!1), b = (0, i(109939).tz)(), v = (0, n.useCallback)(e => {
                    let t = e.target.value;
                    c(t), "" === t.trim() ? (y(!0), f(!0)) : (y(!1), f(!1))
                }, []), j = (0, n.useCallback)(() => {
                    o(!1), c(""), p(""), g(!0), f(!1), y(!1)
                }, [o]), S = (0, n.useCallback)(() => {
                    if ("" === d.trim()) {
                        y(!0), f(!0);
                        return
                    }
                    l({
                        additionalInformation: d,
                        desiredUrl: u,
                        canFollowUpWithUser: h
                    }), j()
                }, [d, u, h, l, j]), w = () => {
                    g(!h)
                };
                return (0, a.jsx)(i(556809).a, {
                    open: t,
                    onDismiss: j,
                    children: (0, a.jsx)(i(790124).A, {
                        capture: !0,
                        allowUndo: !1,
                        allowEsc: !0,
                        allowTabUntab: !1,
                        children: e => (0, a.jsx)(i(4458).VP, {
                            minHeight: 128,
                            children: (0, a.jsxs)("div", {
                                style: s.modalWrap,
                                ...e,
                                children: [(0, a.jsxs)("div", {
                                    style: s.titleContainer,
                                    children: [(0, a.jsx)("div", {
                                        style: s.modalTitle,
                                        children: (0, a.jsx)(i(109939).sA, { ...r.title
                                        })
                                    }), (0, a.jsx)("div", {
                                        style: s.modalSubtitle,
                                        children: (0, a.jsx)(i(109939).sA, { ...r.subtitle
                                        })
                                    })]
                                }), (0, a.jsx)(i(36481).p, {
                                    placeholder: b.formatMessage(r.additionalInformationPlaceholder),
                                    value: d,
                                    onChange: v,
                                    focusInitial: !0,
                                    inputStyle: s.style0,
                                    style: s.feedbackArea,
                                    textarea: !0,
                                    "aria-label": b.formatMessage(r.additionalInformationPlaceholder)
                                }), x ? (0, a.jsx)("div", {
                                    style: s.warningMessage,
                                    role: "alert",
                                    children: (0, a.jsx)(i(109939).sA, { ...r.additionalInformationWarning
                                    })
                                }) : void 0, (0, a.jsx)(i(36481).p, {
                                    placeholder: b.formatMessage(r.urlPlaceholder),
                                    value: u,
                                    onChange: e => p(e.target.value),
                                    style: s.feedbackArea,
                                    "aria-label": b.formatMessage(r.urlPlaceholder)
                                }), (0, a.jsxs)("div", {
                                    style: s.checkboxArea,
                                    children: [(0, a.jsx)(i(349050).S, {
                                        checked: h,
                                        size: 12,
                                        onClick: w,
                                        "aria-label": b.formatMessage(r.allowNotionToContactMeLabel)
                                    }), (0, a.jsx)(i(111010).D, {
                                        styleKey: "bodySmRegular",
                                        colorVariant: "secondary",
                                        onClick: w,
                                        children: (0, a.jsx)(i(109939).sA, { ...r.allowNotionToContactMeLabel
                                        })
                                    })]
                                }), (0, a.jsxs)("div", {
                                    style: s.buttonArea,
                                    children: [(0, a.jsx)(i(548436).A, {
                                        size: "lg",
                                        onClick: j,
                                        children: (0, a.jsx)(i(109939).sA, { ...r.cancel
                                        })
                                    }), (0, a.jsx)(i(912946).A, {
                                        colorPalette: "blue",
                                        size: "lg",
                                        onClick: S,
                                        disabled: m,
                                        children: (0, a.jsx)(i(109939).sA, { ...r.submit
                                        })
                                    })]
                                })]
                            })
                        })
                    })
                })
            }
            let r = (0, i(109939).YK)({
                title: {
                    id: "UnifiedFindReportBadSearchModal.title",
                    defaultMessage: "Give search feedback"
                },
                subtitle: {
                    id: "UnifiedFindReportBadSearchModal.subtitle",
                    defaultMessage: "The pages from the search results, the search query, and your feedback will be sent to Notion for quality improvement."
                },
                additionalInformationPlaceholder: {
                    id: "UnifiedFindReportBadSearchModal.additionalInformationPlaceholder",
                    defaultMessage: "What went wrong with this search? Please be as specific as possible."
                },
                urlPlaceholder: {
                    id: "UnifiedFindReportBadSearchModal.urlPlaceholder",
                    defaultMessage: "Link to the page you were searching for, if you have it."
                },
                allowNotionToContactMeLabel: {
                    id: "UnifiedFindReportBadSearchModal.allowNotionToContactMeLabel",
                    defaultMessage: "Allow Notion to contact me by email to follow up regarding this search"
                },
                cancel: {
                    id: "UnifiedFindReportBadSearchModal.cancel",
                    defaultMessage: "Cancel"
                },
                submit: {
                    id: "UnifiedFindReportBadSearchModal.submit",
                    defaultMessage: "Submit feedback"
                },
                additionalInformationWarning: {
                    id: "UnifiedFindReportBadSearchModal.additionalInformationWarning",
                    defaultMessage: "Please provide more information before submitting."
                }
            });
            i(944114);
            let d = {
                    width: 24,
                    height: 24,
                    borderRadius: 4,
                    objectFit: "cover"
                },
                c = {
                    height: "12px"
                },
                u = {
                    height: "24px",
                    width: "24px",
                    marginInlineStart: "16px",
                    marginTop: "21px"
                },
                p = {
                    marginInlineStart: "16px",
                    marginTop: "21px"
                },
                h = {
                    height: "84px",
                    pointerEvents: "none",
                    overflow: "hidden",
                    position: "relative"
                },
                g = {
                    color: "inherit",
                    fill: "inherit",
                    opacity: .8,
                    pointerEvents: "none"
                },
                m = {
                    width: "100%",
                    position: "absolute",
                    bottom: 0,
                    insetInlineStart: 0
                };

            function f(e) {
                let {
                    hoverInfo: t,
                    getPayloadDataForHref: l,
                    useCompactWebPreview: s
                } = e, [o, r] = (0, n.useState)(!1), f = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore), x = (0, i(682985).K8)(() => l(t.href), [t, l]), b = (0, n.useMemo)(() => {
                    var e;
                    if (void 0 !== x && "webpage" === x.type) return new URL((null != (e = t.href) && e.startsWith("webpage://?url=") ? decodeURIComponent(t.href.split("webpage://?url=")[1]) : t.href) ? ? "https://www.notion.so").origin
                }, [x, t.href]), v = (0, n.useMemo)(() => {
                    if (x) return "webpage" === x.type ? b : x.lastEdited !== i(25825).Mb ? x.lastEdited : void 0
                }, [x, b]), j = (0, i(682985).K8)(() => {
                    if (!x) return [];
                    let {
                        type: e,
                        text: t
                    } = x;
                    if ("slack" === e) {
                        if (void 0 === x.threadMessages) return x.text.split("\n");
                        let e = x.threadMessages.map(e => l(e)),
                            t = [];
                        for (let i of e)(null == i ? void 0 : i.type) === "slack" && i.text && t.push(`${i.user}: ${i.text}`);
                        return t
                    }
                    if ("microsoft-teams" === e) {
                        if (void 0 === x.threadMessages) return x.text.split("\n");
                        let e = x.threadMessages.map(e => l(e)),
                            t = [];
                        for (let i of e)(null == i ? void 0 : i.type) === "microsoft-teams" && i.text && t.push(`${i.user}: ${i.text}`);
                        return t
                    }
                    return "webpage" === e || "helpdoc" === e || "helpdoc-section" === e || (0, i(281708).SC)(e) ? (0, i(444700).Mw)(t).split("\n").filter(e => "" !== e.trim()) : "page" === e ? [] : void(0, i(722371).HB)(e)
                }, [x, l]);
                if (!x) return null;
                let {
                    type: S,
                    title: w
                } = x;
                if ("helpdoc" === S || "helpdoc-section" === S) return null;
                let C = "slack" === S ? (0, a.jsx)(i(109939).sA, {
                        id: "slack.citation.preview.title",
                        defaultMessage: "Thread in #{title}",
                        values: {
                            title: w
                        }
                    }) : "github" === S ? w : "jira" === S ? (0, a.jsx)(i(109939).sA, {
                        id: "jira.citation.preview.title",
                        defaultMessage: "#{title}",
                        values: {
                            title: w
                        }
                    }) : "microsoft-teams" === S ? (0, a.jsx)(i(109939).sA, {
                        id: "microsoftTeams.citation.preview.title",
                        defaultMessage: "Thread in #{title}",
                        values: {
                            title: w
                        }
                    }) : "discord" === S ? (0, a.jsx)(i(109939).sA, {
                        id: "discord.citation.preview.title",
                        defaultMessage: "Channel in #{title}",
                        values: {
                            title: w
                        }
                    }) : "webpage" === S ? w || (0, a.jsx)(i(109939).sA, {
                        id: "webpage.citation.preview.unknownTitle",
                        defaultMessage: "Unknown webpage"
                    }) : "page" === S ? w || (0, a.jsx)(i(109939).sA, {
                        id: "notion.citation.preview.unknownTitle",
                        defaultMessage: "Unknown document"
                    }) : (0, i(281708).SC)(S) ? w || (0, a.jsx)(i(109939).sA, {
                        id: "connector.citation.preview.unknownTitle",
                        defaultMessage: "Unknown document"
                    }) : (0, i(722371).HB)(S),
                    T = (0, i(281708).SC)(S) ? i(44183).G[S] : "webpage" === S ? i(515388).globeIcon : "page" === S ? i(898378).notionTintableIcon : (0, i(722371).HB)(S),
                    I = "custom" === S && "iconUrl" in x && x.iconUrl ? (0, a.jsx)("img", {
                        src: x.iconUrl,
                        style: d,
                        alt: w
                    }) : "function" == typeof T ? T({
                        width: 24,
                        height: 24
                    }) : (0, a.jsx)(i(708966).Q, {
                        iconGroup: T,
                        variantName: "default",
                        style: {
                            width: 24,
                            height: 24
                        }
                    }),
                    k = "webpage" === S ? `${b}/favicon.ico` : "";
                return s && "webpage" === S ? (0, a.jsx)(y, {
                    citationResultData: x,
                    previewTitle: C,
                    faviconUrl: k,
                    errorState: o,
                    setErrorState: r
                }) : (0, a.jsxs)("div", {
                    style: i(268896).i.wrapper,
                    children: ["webpage" !== S || o ? (0, a.jsx)("div", {
                        style: { ...i(268896).i.coverContainer,
                            ...p
                        },
                        children: I
                    }) : (0, a.jsx)("img", {
                        style: { ...i(268896).i.coverContainer,
                            ...u
                        },
                        onError: ({
                            currentTarget: e
                        }) => {
                            r(!0)
                        },
                        src: k,
                        alt: "Favicon"
                    }), (0, a.jsxs)(i(4458).VP, {
                        gap: 4,
                        paddingInline: 16,
                        children: [(0, a.jsxs)(i(4458).VP, {
                            gap: 2,
                            children: [v ? (0, a.jsx)("div", {
                                style: i(268896).i.breadcrumb,
                                children: v
                            }) : void 0, (0, a.jsx)("div", {
                                style: i(268896).i.pageTitleContainer,
                                children: (0, a.jsx)("span", {
                                    style: i(268896).i.pageTitle,
                                    children: C
                                })
                            })]
                        }), f && j.length > 0 ? (0, a.jsxs)("div", {
                            style: { ...i(268896).b.contentCover,
                                ...h
                            },
                            children: [(0, a.jsx)("div", {
                                style: { ...i(268896).b.rendererBlockStyle,
                                    ...g
                                },
                                children: j.map((e, t) => (0, a.jsxs)(n.Fragment, {
                                    children: [(0, a.jsx)(i(644970).A, {
                                        textValue: [
                                            [e]
                                        ],
                                        parentStore: f
                                    }), t < j.length - 1 ? (0, a.jsx)("br", {}) : void 0]
                                }, t))
                            }), (0, a.jsx)("div", {
                                style: { ...i(268896).b.contentCoverFade,
                                    ...m
                                }
                            })]
                        }) : (0, a.jsx)("div", {
                            style: c
                        })]
                    })]
                })
            }
            let x = {
                icon: {
                    height: 16,
                    width: 16,
                    color: i(632079).Tj.icon.secondary
                },
                style0: {
                    display: "-webkit-box",
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                }
            };

            function y({
                citationResultData: e,
                previewTitle: t,
                faviconUrl: l,
                errorState: s,
                setErrorState: o
            }) {
                let r = (0, n.useMemo)(() => {
                    if ("webpage" === e.type) return D(e.url)
                }, [e]);
                return (0, a.jsxs)(i(4458).VP, {
                    padding: 12,
                    width: 260,
                    gap: 8,
                    children: [(0, a.jsx)(i(111010).D, {
                        styleKey: "bodySemibold",
                        colorVariant: "primary",
                        style: x.style0,
                        children: t
                    }), (0, a.jsxs)(i(4458).fI, {
                        gap: 8,
                        children: [s ? (0, a.jsx)("div", {
                            style: x.icon,
                            children: (0, a.jsx)(i(16275).I, {
                                icon: i(515388).globeIcon,
                                size: "sm"
                            })
                        }) : (0, a.jsx)("img", {
                            style: x.icon,
                            onError: ({
                                currentTarget: e
                            }) => {
                                o(!0)
                            },
                            src: l,
                            alt: "Favicon"
                        }), (0, a.jsx)(i(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "secondary",
                            children: r
                        })]
                    })]
                })
            }
            async function b(e) {
                let {
                    environment: t,
                    feedback: i,
                    deepFindFeedbackPayload: n
                } = e;
                await t.api.callApi({
                    environment: t,
                    eventName: "saveAssistantFeedback",
                    data: {
                        id: n.search_session_id,
                        type: "deep_find_feedback",
                        version: 0,
                        feedback: i,
                        ...n
                    }
                })
            }
            async function v(e) {
                let {
                    environment: t,
                    deepFindFeedbackPayload: i
                } = e;
                await t.api.callApi({
                    environment: t,
                    eventName: "saveAssistantFeedback",
                    data: {
                        id: i.search_session_id,
                        type: "deep_find_feedback",
                        version: 0,
                        feedback: "thumbsDown",
                        ...i
                    }
                })
            }
            i(672577), [...i(281708).fl];
            let j = {
                notion: {
                    icon: i(792668).notionIcon,
                    name: "Notion"
                },
                webpage: {
                    icon: i(515388).globeIcon,
                    name: "Web"
                },
                helpdoc: {
                    icon: i(712802).bookIcon,
                    name: "Notion Help"
                },
                "helpdoc-section": {
                    icon: i(712802).bookIcon,
                    name: "Notion Help"
                }
            };

            function S(e) {
                return (0, i(281708).SC)(e) ? {
                    icon: i(44183).G[e],
                    name: i(590212).w0[e]
                } : j[e]
            }

            function w(e) {
                let t = (0, i(109939).tz)(),
                    {
                        deepFindFeedbackPayload: l
                    } = e,
                    [s, r] = (0, n.useState)(),
                    d = (0, i(533992).v3)(),
                    [c, u] = (0, n.useState)(!1),
                    p = (0, n.useCallback)(async () => {
                        r("thumbsUp"), await b({
                            environment: d,
                            feedback: "thumbsUp",
                            deepFindFeedbackPayload: l
                        })
                    }, [d, l]),
                    h = (0, n.useCallback)(async () => {
                        r("thumbsDown"), await b({
                            environment: d,
                            feedback: "thumbsDown",
                            deepFindFeedbackPayload: l
                        }), u(!0)
                    }, [d, l]),
                    g = (0, n.useCallback)(async e => {
                        await v({
                            environment: d,
                            deepFindFeedbackPayload: { ...l,
                                additional_information: e.additionalInformation,
                                desired_result_url: e.desiredUrl,
                                can_followup_with_user: e.canFollowUpWithUser
                            }
                        })
                    }, [d, l]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(i(4458).fI, {
                        gap: 4,
                        children: [(0, a.jsx)(i(374533).A, {
                            icon: "thumbsUp" === s ? () => (0, a.jsx)(i(16275).I, {
                                icon: i(185655).P,
                                size: "sm",
                                colorVariant: "secondary"
                            }) : () => (0, a.jsx)(i(16275).I, {
                                icon: i(770408).s,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            ariaLabel: t.formatMessage({
                                id: "assistantCitationHelpers.thumbsUp",
                                defaultMessage: "Give thumbs up feedback"
                            }),
                            onClick: p,
                            disabled: void 0 !== s
                        }), (0, a.jsx)(i(374533).A, {
                            icon: "thumbsDown" === s ? () => (0, a.jsx)(i(16275).I, {
                                icon: i(768318).m,
                                size: "sm",
                                colorVariant: "secondary"
                            }) : () => (0, a.jsx)(i(16275).I, {
                                icon: i(169677).d,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            ariaLabel: t.formatMessage({
                                id: "assistantCitationHelpers.thumbsDown",
                                defaultMessage: "Give thumbs down feedback"
                            }),
                            onClick: h,
                            disabled: void 0 !== s
                        })]
                    }), (0, a.jsx)(o, {
                        isOpen: c,
                        setIsOpen: u,
                        submit: g
                    })]
                })
            }
            let C = {
                helpdoc: i(712802).bookIcon,
                "helpdoc-section": i(712802).bookIcon,
                ...i(44183).G
            };

            function T(e) {
                let {
                    citation: t,
                    size: n,
                    style: l
                } = e, {
                    store: s
                } = t, o = (0, i(682985).K8)(() => s.getIcon(), [s]), r = (0, i(682985).K8)(() => s.isEmptyPage(), [s]), d = (0, i(682985).K8)(() => (0, i(569553).Te)(s), [s]);
                return (0, a.jsx)(i(569553).B6, {
                    disabled: !0,
                    icon: o,
                    isEmptyPage: r,
                    size: n,
                    style: l,
                    useInvertedColors: !1,
                    iconRecordCategory: d
                })
            }

            function I(e) {
                let {
                    citation: t,
                    size: l,
                    style: s
                } = e, [o, r] = (0, n.useState)(!1), d = (0, i(960253).I)(() => ({
                    icon: {
                        height: l,
                        width: l,
                        ...s
                    }
                }), [l, s]), c = "custom" === t.type ? t.href : void 0, u = (0, i(682985).K8)(() => c ? P(c) : void 0, [c]), p = u && "iconUrl" in u ? u.iconUrl : void 0;
                if ("notion" === t.type) return (0, a.jsx)(T, {
                    citation: t,
                    size: l,
                    style: s
                });
                if ("webpage" === t.type) return o ? (0, a.jsx)(i(16275).I, {
                    icon: i(515388).globeIcon,
                    style: d.icon
                }) : (0, a.jsx)("img", {
                    style: d.icon,
                    src: `${new URL(t.url).origin}/favicon.ico`,
                    onError: () => r(!0)
                });
                if ("custom" === t.type) return !p || o ? (0, a.jsx)(i(16275).I, {
                    icon: i(588739).linkIcon,
                    style: d.icon
                }) : (0, a.jsx)("img", {
                    alt: i(590212).w0.custom,
                    style: d.icon,
                    src: p,
                    onError: () => r(!0)
                }); {
                    let e = C[t.type];
                    return "function" == typeof e ? (0, a.jsx)(a.Fragment, {
                        children: e(d.icon)
                    }) : (0, a.jsx)(i(708966).Q, {
                        iconGroup: e,
                        variantName: "default",
                        style: {
                            width: l,
                            height: l
                        }
                    })
                }
            }
            i(632079).Tj.border.primary, i(632079).Tj.background.primary;
            let k = (0, i(109939).YK)({
                expandDatabaseCitation: {
                    id: "assistantCitationHelpers.expandDatabaseCitation",
                    defaultMessage: "Open results"
                },
                snapshotTooltipTitle: {
                    id: "assistantCitationHelpers.snapshotTooltipTitle",
                    defaultMessage: "Snapshot citation"
                },
                snapshotTooltipCaption: {
                    id: "assistantCitationHelpers.snapshotTooltipCaption",
                    defaultMessage: "This citation is from a snapshot created on {timestamp}."
                }
            });
            i(699422).Wy.medium, i(632079).Tj.text.secondary, i(632079).Tj.text.primary, i(699422).Wy.medium;
            let M = {
                width: "100%",
                overflow: "hidden",
                minWidth: 0
            };

            function F(e) {
                let {
                    citationText: t,
                    titleElement: i,
                    highlighter: n
                } = e;
                return (0, a.jsxs)("div", {
                    style: M,
                    children: [i, (0, a.jsx)(B, {
                        citationText: t,
                        highlighter: n
                    })]
                })
            }
            let A = {
                text: {
                    marginTop: 2,
                    color: i(632079).Tj.text.secondary,
                    fontWeight: i(699422).Wy.regular
                }
            };

            function B(e) {
                let {
                    citationText: t,
                    highlighter: n
                } = e;
                return (0, a.jsx)(i(18079).A, {
                    maxLines: 1,
                    style: A.text,
                    children: (0, a.jsx)(i(663528).A, {
                        text: t ? ? "",
                        highlighter: n
                    })
                })
            }

            function P(e) {
                let t = i(838448).default.getActiveSession();
                if (t) return t.evaluatorFromStoreState.state.getUniversalResultPayloadForHrefIfExists(e)
            }
            let z = {
                titleHighlighter: {
                    color: i(632079).Tj.blue.text.accentPrimary,
                    background: i(632079).Tj.blue.background.secondaryTranslucent
                },
                previewTextHighlighter: {
                    color: i(632079).Tj.blue.text.accentPrimary,
                    background: i(632079).Tj.blue.background.secondaryTranslucent
                },
                style0: {
                    width: "100%",
                    minWidth: 0
                },
                style2: {
                    fontSize: 14
                }
            };

            function R(e) {
                var t, n;
                let {
                    inlineCitedBlockIds: l,
                    store: s,
                    payloadData: o
                } = e, r = null != o && null != (t = o.highlight) && t.text ? o.highlight.text : void 0, d = (0, i(682985).K8)(() => {
                    if (r) return r;
                    if (l.length > 0) return l.map(e => i(970831).B.createChildStore(s, {
                        table: i(832375).evP,
                        id: e
                    })).map(e => e.getTitleValue()).map(e => (0, i(536614).r4)(e, s)).join(" ");
                    let e = i(554181).E(s);
                    return e ? (0, i(536614).r4)(e, s) : ""
                }, [l, s, r]), c = (0, i(648481).PO)({
                    words: (0, i(648481).oQ)(null == o || null == (n = o.highlight) ? void 0 : n.title),
                    styleOverride: z.titleHighlighter
                }), u = (0, i(648481).Ay)(d), p = {
                    tokenize: e => (0, i(648481).nB)(u),
                    style: z.previewTextHighlighter
                }, h = (0, i(682985).K8)(() => {
                    let e = (0, i(843641).Es)({
                            blockStore: s
                        }),
                        t = s.getModel(),
                        n = (0, i(435137).sN)(t, s.getRecordModel);
                    return e && n
                }, [s]);
                return (0, a.jsxs)("div", {
                    style: z.style0,
                    children: [(0, a.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        children: [(0, a.jsx)(i(627918).A, {
                            store: s,
                            style: z.style2,
                            highlighter: c
                        }), h ? (0, a.jsx)(i(4458).fI, {
                            alignItems: "center",
                            marginInlineStart: 4,
                            children: (0, a.jsx)(i(16275).I, {
                                icon: i(187627).badgeCheckFillSmallIcon,
                                size: "sm",
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            })
                        }) : null]
                    }), (0, a.jsx)(B, {
                        citationText: d,
                        highlighter: p
                    })]
                })
            }

            function D(e) {
                try {
                    let t = e.replace(/^(https?:\/\/)/i, ""),
                        i = (t = t.replace(/^www\./i, "")).match(/^([^/]+)/i);
                    if (i && i[1]) return i[1];
                    return t
                } catch (t) {
                    return e
                }
            }
            let H = {
                    text: {
                        flex: 1,
                        minWidth: 0,
                        fontSize: i(418676).vQ,
                        color: i(632079).Tj.text.primary
                    }
                },
                O = {
                    title: {
                        fontSize: i(418676).vQ,
                        fontWeight: i(699422).Wy.semibold,
                        color: i(632079).Tj.text.primary
                    },
                    caption: {
                        fontSize: i(418676).Kw,
                        color: i(632079).Tj.text.secondary
                    }
                };

            function W(e) {
                let {
                    store: t
                } = e, n = (0, i(682985).K8)(() => t.getIcon(), [t]), l = (0, i(682985).K8)(() => t.isEmptyPage(), [t]), s = (0, i(682985).K8)(() => (0, i(569553).Te)(t), [t]);
                return (0, a.jsxs)(i(4458).fI, {
                    alignItems: "center",
                    gap: 8,
                    maxWidth: 260,
                    padding: 8,
                    children: [(0, a.jsx)(i(569553).B6, {
                        disabled: !0,
                        icon: n,
                        isEmptyPage: l,
                        size: 20,
                        useInvertedColors: !1,
                        iconRecordCategory: s
                    }), (0, a.jsx)("div", {
                        style: H.text,
                        children: (0, a.jsx)(i(627918).A, {
                            store: t
                        })
                    })]
                })
            }

            function E(e) {
                let t, n, {
                        snapshotTimestamp: l
                    } = e,
                    s = Number.isNaN((n = new Date(Number.isFinite(t = Number(l)) ? t : l)).getTime()) ? l : n.toLocaleString();
                return (0, a.jsxs)(i(4458).VP, {
                    maxWidth: 260,
                    padding: 8,
                    gap: 4,
                    children: [(0, a.jsx)("div", {
                        style: O.title,
                        children: (0, a.jsx)(i(109939).sA, { ...k.snapshotTooltipTitle
                        })
                    }), (0, a.jsx)("div", {
                        style: O.caption,
                        children: (0, a.jsx)(i(109939).sA, { ...k.snapshotTooltipCaption,
                            values: {
                                timestamp: s
                            }
                        })
                    })]
                })
            }

            function U(e) {
                let t = function(e) {
                    let {
                        containerRef: t,
                        hoverStore: n,
                        parentStore: a,
                        isSearchChat: l = !1
                    } = e;
                    return (0, i(682985).K8)(() => {
                        let e;
                        if (!n.state || !t.current || i(986939).A.isMobile) return;
                        let s = "notion" === n.state.citationType && n.state.snapshotTimestamp,
                            o = t.current.getBoundingClientRect(),
                            r = (l || o.left >= i(770657).k + 24) && !s,
                            d = n.state.node.getBoundingClientRect();
                        if (l) e = d;
                        else if (r) e = new DOMRect(o.x, d.y, o.width, d.height);
                        else {
                            if ("token" !== n.state.type) return;
                            e = s ? new DOMRect(d.x + d.width / 2 - o.width / 2, d.y, o.width, d.height) : d
                        }
                        let {
                            type: c,
                            citationType: u
                        } = n.state;
                        if ("notion" === u) {
                            let t, l;
                            return "token" === c ? (t = n.state.blockId ? [n.state.blockId] : [n.state.pageId], l = !!n.state.blockId) : "list" === c ? (t = n.state.blockIds.length > 0 ? n.state.blockIds : [n.state.pageId], l = n.state.blockIds.length > 0) : (0, i(722371).HB)(c), {
                                citationType: u,
                                stores: t.map(e => i(970831).B.createChildStore(a, {
                                    id: e,
                                    table: i(832375).evP
                                })),
                                originRect: e,
                                isFullTooltip: r,
                                isBlockLevelCitation: l,
                                discussionId: n.state.discussionId,
                                snapshotTimestamp: n.state.snapshotTimestamp,
                                navigableBlockStore: i(970831).B.createChildStore(a, {
                                    id: n.state.pageId,
                                    table: i(832375).evP
                                })
                            }
                        }
                        if ("universal_search" === u) return {
                            citationType: u,
                            originRect: e,
                            isFullTooltip: r,
                            href: n.state.href
                        };
                        (0, i(722371).HB)(u)
                    }, [t, a, n, l])
                }({ ...e,
                    isSearchChat: e.isSearchChat ? ? !1
                });
                if (!(0, i(722371).O9)(t)) return null; {
                    let n, {
                        originRect: l,
                        isFullTooltip: s,
                        citationType: o
                    } = t;
                    if ("notion" === o) {
                        let {
                            stores: e,
                            isBlockLevelCitation: l,
                            navigableBlockStore: o,
                            discussionId: r
                        } = t;
                        if (t.snapshotTimestamp) n = (0, a.jsx)(E, {
                            snapshotTimestamp: t.snapshotTimestamp
                        });
                        else {
                            let t = 1 !== e.length || r ? "regular" : "tall";
                            n = s ? l ? (0, a.jsx)(i(272307).HoverPagePreview, {
                                store: o,
                                contentBlocks: e.slice(0, 6),
                                size: t,
                                isDiscussion: !!r
                            }) : (0, a.jsx)(i(272307).HoverPagePreview, {
                                store: o
                            }) : (0, a.jsx)(W, {
                                store: o
                            })
                        }
                    } else "universal_search" === o ? n = (0, a.jsx)(f, {
                        hoverInfo: t,
                        getPayloadDataForHref: e.getPayloadDataForHref ? ? P,
                        useCompactWebPreview: e.useCompactWebPreview
                    }) : (0, i(722371).HB)(o);
                    return (0, a.jsx)(i(182718).zD, {
                        disableMouseCapture: !0,
                        preventCaptureEsc: !0,
                        preventScaleTransition: !0,
                        preventOpacityTransition: !0,
                        popupType: i(423291).n.Popup,
                        originGap: e.isSearchChat ? 4 : s ? 24 : 8,
                        alignmentToOrigin: e.isSearchChat ? "start" : "center",
                        open: !0,
                        placementToOrigin: e.isSearchChat ? "bottom" : s ? "left" : "notion" === t.citationType && t.snapshotTimestamp ? "top" : "bottom",
                        originRect: l,
                        lightBoxShadow: !s,
                        content: () => n,
                        trapFocus: !1
                    })
                }
            }
        },
        548117: (e, t, i) => {
            i.d(t, {
                $: () => a
            }), i(296540);
            var n = i(474848);

            function a(e) {
                let {
                    onClick: t,
                    focused: a
                } = e, l = (0, i(682985).K8)(() => (0, i(876688).Nr)(), []);
                return (0, n.jsx)(i(95582).A, {
                    focused: a,
                    onClick: t,
                    icon: (0, n.jsx)(i(708966).Q, {
                        iconGroup: i(154457).h,
                        variantName: "small"
                    }),
                    title: (0, n.jsx)(i(109939).sA, {
                        id: "AIChatSearchScopePopup.AIChatSearchScopeMenu.getAiConnectorsFooterTitle",
                        defaultMessage: "Add sources"
                    }),
                    right: (0, n.jsx)(i(894658).hC, {
                        connectors: l,
                        maxBubbles: 2,
                        iconSize: 12,
                        bubbleStyles: {
                            width: 16,
                            height: 16
                        }
                    })
                })
            }
        },
        993315: (e, t, i) => {
            i.d(t, {
                b: () => l
            });
            var n = i(296540),
                a = i(474848);

            function l(e) {
                let {
                    connector: t,
                    analyticsFrom: l
                } = e, s = (0, i(533992).v3)(), [o, r] = (0, i(682985).K8)(() => [(0, i(876688).Nr)(), (0, i(876688).wd)().length > 0], []), d = (0, i(723240).r)(), c = (0, i(217844)._)({
                    name: "ai_connectors",
                    spaceId: d,
                    userId: s.currentUser.id
                }), u = (0, n.useCallback)(() => {
                    (0, i(622081).pp)({
                        environment: s,
                        connector: t,
                        analyticsFrom: l,
                        connectorsFeatureAvailability: c
                    })
                }, [s, t, l, c]), p = (0, n.useMemo)(() => {
                    if (0 === o.length) return;
                    let e = o.length <= 2 ? 1 : 3;
                    return (0, a.jsx)(i(4458).fI, {
                        marginInlineEnd: 4,
                        children: (0, a.jsx)(i(894658).hC, {
                            connectors: o,
                            maxBubbles: e,
                            iconSize: 14
                        })
                    })
                }, [o]);
                return 0 === o.length ? {
                    bubbleIcons: void 0,
                    connectorsUpsellOrManage: void 0,
                    hasExistingConnectors: r
                } : {
                    bubbleIcons: p,
                    connectorsUpsellOrManage: u,
                    hasExistingConnectors: r
                }
            }
        }
    }
]);