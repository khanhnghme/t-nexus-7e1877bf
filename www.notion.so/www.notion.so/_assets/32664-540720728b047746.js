"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [32664, 33503, 47414, 59042], {
        1422: (e, t, s) => {
            s.d(t, {
                g: () => d,
                x: () => o
            }), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = {
                    paddingInlineStart: 1
                },
                n = {
                    marginBottom: "8px"
                },
                l = {
                    marginBottom: "4px"
                };

            function o(e) {
                let {
                    onSelect: t
                } = e, o = (0, s(109939).tz)(), c = (0, s(120509).Q)({
                    filterCategory: "all",
                    availableOffline: !0,
                    searchQuery: ""
                }), u = (0, a.useCallback)((e, a) => {
                    t({
                        index: {
                            local: e.indexLocal,
                            global: e.index
                        },
                        event: e.event,
                        selectedResult: {
                            store: a,
                            id: a.id,
                            score: -1,
                            spaceId: a.getSpaceId(),
                            sources: [s(821603).Ni.Local],
                            featureGroups: [],
                            originalPosition: 0,
                            serverEventProperties: void 0
                        },
                        fromSidePeekPanel: !1,
                        context: "offline_pages"
                    })
                }, [t]);
                return (0, a.useMemo)(() => [{
                    key: "offline_pages",
                    items: c.sort((e, t) => t.lastModifiedTime - e.lastModifiedTime).map(({
                        pageBlockStore: e
                    }) => ({
                        key: e.id,
                        action: t => u(t, e),
                        render: t => (0, a.createElement)(s(465708).GC, { ...t,
                            store: e,
                            inline: !s(986939).A.isMobile,
                            hidePath: !1,
                            buttonStyle: r,
                            type: "offline_pages",
                            key: e.id
                        })
                    })),
                    render: e => (0, i.jsx)(s(844565).A, {
                        desktopTitleStyle: n,
                        style: l,
                        title: o.formatMessage(d.offlinePages),
                        children: e.children
                    })
                }], [c, u, o])
            }
            let d = (0, s(109939).YK)({
                offlinePages: {
                    id: "search.default_page_body.offline_pages",
                    defaultMessage: "Offline pages"
                }
            })
        },
        9774: (e, t, s) => {
            s.r(t), s.d(t, {
                COMPLETION_THROTTLE: () => n,
                PREVIEW_STEP_DELAY: () => l,
                postProcessAICreatedStores: () => d,
                showCompletionErrorWithCode: () => o,
                wrapTemporaryBlocksInList: () => c
            }), s(18107), s(967357);
            var a = () => s(749560),
                i = () => s(135674),
                r = () => s(173157);
            let n = 300,
                l = 250;

            function o(e) {
                let t = s(962299).A.getIntl();
                return 451 === e ? s(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.moderationError",
                        defaultMessage: "AI does not allow content that is harmful or illegal. Please revise your input and try again. (451)"
                    })
                }) : 413 === e ? s(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.promptOrAttachmentTooLarge",
                        defaultMessage: "Query or attachment is too large. Please revise your input and try again. (413)"
                    })
                }) : 502 === e || 503 === e || 504 === e ? s(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.providerError",
                        defaultMessage: "We’re experiencing issues with our AI provider. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                }) : void s(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.genericError",
                        defaultMessage: "AI is temporarily unavailable. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                })
            }

            function d(e, t) {
                for (let s of t) a().In({
                    environment: e,
                    blockStore: s
                })
            }

            function c(e) {
                var t;
                let {
                    environment: a,
                    stores: n,
                    listId: l,
                    inMemoryRecordCache: o,
                    transaction: d
                } = e, c = (null == (t = n.at(0)) ? void 0 : t.getSpaceId()) ? ? d.spaceId, u = new(s(517013)).pm({
                    environment: a,
                    pointer: {
                        table: s(832375).evP,
                        id: l || (0, s(295447).Z1)({
                            environment: a,
                            table: s(832375).evP,
                            spaceId: c
                        }),
                        spaceId: c
                    },
                    recordStoreOptions: {
                        inMemoryRecordCache: o,
                        userId: a.currentUser.id
                    },
                    path: ["content"]
                });
                for (let e of n)(0, i().B)({
                    parentStore: u,
                    appendStore: e,
                    transaction: d
                }), (0, r().z)({
                    store: e,
                    data: {
                        parent_id: u.id,
                        parent_table: u.table,
                        alive: !0
                    },
                    transaction: d
                });
                return u
            }
        },
        50171: (e, t, s) => {
            s.r(t), s.d(t, {
                exclamationMarkTriangleSmallIcon: () => r,
                iconDefinition: () => i
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, a.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                r = (0, s(104509).wt)("exclamationMarkTriangleSmall", i, "small")
        },
        72356: (e, t, s) => {
            s.d(t, {
                m: () => a
            });

            function a(e, t) {
                (0, s(104310).u)({
                    event: {
                        eventName: "abandoned_search",
                        eventProperties: t
                    }
                });
                let {
                    numLocalResults: a
                } = t, i = (0, s(496722).a)(), r = !!(i && (0, s(471078).O)({
                    environment: e,
                    spaceId: i
                }));
                (0, s(104310).u)({
                    event: {
                        eventName: "quick_find_reciprocal_rank",
                        eventProperties: {
                            reciprocalRank: 0,
                            searchSessionId: t.searchSessionId,
                            numLocalResults: a,
                            isMultiplayer: r
                        }
                    }
                })
            }
        },
        82002: (e, t, s) => {
            s.d(t, {
                h: () => o
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                    "search-modal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !1,
                        hidePathText: !1,
                        size: "md"
                    },
                    "search-modal-minimal": {
                        maxNumberOfShimmers: 8,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "md"
                    },
                    "mention-menu-page": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !1,
                        size: "sm"
                    },
                    "mention-menu-people": {
                        maxNumberOfShimmers: 3,
                        hideBorders: !0,
                        hidePathText: !0,
                        size: "sm"
                    }
                },
                n = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                };

            function l(e) {
                let {
                    isLastShimmer: t,
                    variant: l
                } = e, {
                    hideBorders: o,
                    hidePathText: d,
                    size: c
                } = r[l], u = (0, a.useMemo)(() => (0, s(381453).XM)(["30%", "45%", "55%", "60%", "70%", "75%", "80%", "90%"]), []), p = (0, a.useMemo)(() => (0, s(381453).XM)(["10%", "15%", "20%", "25%", "30%", "35%", "55%", "70%"]), []), m = (0, s(960253).I)(() => {
                    let {
                        titleHeight: e,
                        pathHeight: a,
                        iconSize: i,
                        iconMarginInlineStart: r,
                        containerMarginBottom: n
                    } = "md" === c ? {
                        titleHeight: 18,
                        pathHeight: 12,
                        iconSize: s(104509).Ev.default,
                        iconMarginInlineStart: 6,
                        containerMarginBottom: 10
                    } : {
                        titleHeight: 14,
                        pathHeight: 10,
                        iconMarginInlineStart: 4,
                        iconSize: 18,
                        containerMarginBottom: 8
                    };
                    return {
                        resultContainer: {
                            display: "flex",
                            gap: 10,
                            boxShadow: o || t ? void 0 : `0 1px 0 ${s(632079).Tj.border.secondaryTranslucent}`,
                            marginTop: 8,
                            marginInlineEnd: 8,
                            marginBottom: n,
                            marginInlineStart: 6,
                            paddingBottom: 10 * !o
                        },
                        icon: {
                            width: i,
                            height: i,
                            borderRadius: 5,
                            marginInlineStart: r
                        },
                        title: {
                            height: e,
                            borderRadius: 5,
                            width: u
                        },
                        path: {
                            height: a,
                            borderRadius: 5,
                            width: p
                        }
                    }
                }, [o, t, u, p, c]);
                return (0, i.jsxs)("div", {
                    style: m.resultContainer,
                    children: [(0, i.jsx)(s(795830).P, {
                        style: m.icon
                    }), (0, i.jsxs)("div", {
                        style: n,
                        children: [(0, i.jsx)(s(795830).P, {
                            style: m.title
                        }), d ? void 0 : (0, i.jsx)(s(795830).P, {
                            style: m.path
                        })]
                    })]
                })
            }

            function o(e) {
                let {
                    resultsCount: t,
                    shouldShow: s,
                    variant: n
                } = e, {
                    maxNumberOfShimmers: o
                } = r[n], d = s ? Math.max(0, o - t) : 0;
                return (0, a.useMemo)(() => Array.from({
                    length: d
                }, (e, t) => ({
                    key: `shimmer-item-${t}`,
                    action: () => {},
                    render: () => (0, i.jsx)(l, {
                        isLastShimmer: t === d - 1,
                        variant: n
                    })
                })), [d, n])
            }
        },
        97726: (e, t, s) => {
            s.d(t, {
                n: () => n
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                diffDot: {
                    position: "absolute",
                    top: -2,
                    insetInlineEnd: -2,
                    background: s(632079).Tj.orange.icon.accentPrimary,
                    border: `1px solid ${s(632079).Tj.background.primary}`,
                    width: 9,
                    height: 9,
                    borderRadius: 9
                }
            };

            function n(e) {
                let {
                    icon: t,
                    title: n,
                    on: l,
                    disabled: o,
                    hasDiff: d,
                    wrapStyle: c,
                    innerStyle: u,
                    hideChevron: p
                } = e, m = (0, s(107332).P)({
                    variant: "tint",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                }), g = (0, s(107332).P)({
                    variant: "plain",
                    colorVariant: "secondary"
                }), h = (0, s(960253).I)(() => {
                    let e = l || o ? m : g;
                    return {
                        container: {
                            borderRadius: 14,
                            display: "inline-flex",
                            ...d && {
                                position: "relative"
                            },
                            ...c
                        },
                        filterPill: {
                            fontSize: 14,
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 6,
                            whiteSpace: "nowrap",
                            borderRadius: 32,
                            height: s(986939).A.isMobile ? 28 : 24,
                            lineHeight: s(986939).A.isMobile ? "28px" : "24px",
                            padding: "0 8px",
                            ...e.resting,
                            ...u
                        },
                        hovered: { ...e.hovered
                        },
                        pressed: { ...e.pressed
                        }
                    }
                }, [d, c, l, o, u, m, g]), f = (0, a.useCallback)(e => {
                    "Escape" === e.key && e.currentTarget.blur()
                }, []);
                return (0, i.jsxs)("div", {
                    style: h.container,
                    children: [(0, i.jsxs)(s(64960).Ay, {
                        disabled: o,
                        disabledFeedback: !0,
                        style: h.filterPill,
                        hoveredStyle: h.hovered,
                        pressedStyle: h.pressed,
                        onMouseEnter: e.onMouseEnter,
                        onMouseLeave: e.onMouseLeave,
                        onClick: e.onClick,
                        onDoubleClick: e.onDoubleClick,
                        onKeyDown: f,
                        children: [t, n, p ? void 0 : (0, i.jsx)(s(16275).I, {
                            icon: s(595453).arrowChevronSingleDownSmallIcon,
                            size: "xs",
                            fitToViewBox: "horizontal"
                        })]
                    }), d ? (0, i.jsx)("div", {
                        style: r.diffDot
                    }) : void 0]
                })
            }
        },
        106811: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => i,
                notionFlatTintableIcon: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.5 1.49 17 17.01",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.475 11.304V6.65l-1.306-.25a.8.8 0 0 1 .152-.639q.21-.278.667-.278h2.738q.111.291-.014.528-.111.236-.43.375l-.446.208v7.809q-.39.18-.597.236a2 2 0 0 1-.514.056q-.417 0-.75-.195a2 2 0 0 1-.612-.597L7.542 8.497v4.864l1.39.25a.84.84 0 0 1-.153.653q-.208.277-.667.277-.292 0-.806-.013a35 35 0 0 0-.931-.014q-.361 0-.68.014-.306 0-.418.013a1 1 0 0 1-.056-.306q.001-.193.098-.36.112-.166.375-.264l.487-.195V6.538l-.875-.18q-.056-.375.152-.625t.667-.25H8.39z"
                        }), (0, a.jsx)("path", {
                            d: "M11.7 1.498c2.38 0 3.57 0 4.48.463.8.408 1.45 1.058 1.857 1.858.463.909.463 2.099.463 4.48v3.4c0 2.38 0 3.57-.463 4.479a4.25 4.25 0 0 1-1.857 1.857c-.91.464-2.1.463-4.48.463H8.3c-2.38 0-3.57 0-4.48-.463a4.25 4.25 0 0 1-1.857-1.857c-.463-.91-.463-2.1-.463-4.48v-3.4c0-2.38 0-3.57.463-4.48A4.25 4.25 0 0 1 3.82 1.962c.91-.463 2.1-.463 4.48-.463zM8.3 2.86c-1.213 0-2.04.001-2.68.053-.625.051-.95.144-1.182.261a2.9 2.9 0 0 0-1.262 1.263c-.118.23-.21.556-.261 1.18-.052.64-.054 1.469-.054 2.681v3.4c0 1.213.002 2.04.054 2.681.051.624.143.95.26 1.18a2.9 2.9 0 0 0 1.263 1.264c.231.117.557.21 1.181.26.64.053 1.468.054 2.68.054H11.7c1.213 0 2.04-.001 2.68-.054.625-.05.951-.143 1.181-.26.544-.277.986-.72 1.263-1.263.118-.23.21-.557.261-1.18.052-.641.054-1.469.054-2.682v-3.4c0-1.212-.002-2.04-.054-2.68-.051-.625-.143-.95-.26-1.181a2.9 2.9 0 0 0-1.263-1.263c-.231-.117-.557-.21-1.181-.26-.64-.053-1.468-.054-2.68-.054z"
                        })]
                    })
                },
                r = (0, s(104509).wt)("notionFlatTintable", i, "tintable")
        },
        110419: (e, t, s) => {
            s.d(t, {
                T: () => a
            });

            function a(e) {
                let {
                    query: t,
                    searchSessionId: a
                } = e, i = (0, s(533992).v3)(), r = (0, s(723240).r)(), n = (0, s(217844)._)({
                    name: "ai_usage",
                    amount: 1,
                    spaceId: r ? ? void 0,
                    userId: i.currentUser.id
                }), l = (0, s(682985).K8)(() => (0, s(94418).e2)(n), [n]), {
                    variant: o,
                    isNaturalLanguageQuery: d
                } = (0, s(750943).O)({
                    query: t,
                    searchSessionId: a
                });
                return {
                    isNaturalLanguageQueryWithCredits: d && l,
                    aiSearchResultItemVariant: o,
                    aiUsageAvailability: n,
                    hasCreditsForAiUsage: l
                }
            }
        },
        120021: (e, t, s) => {
            s.d(t, {
                CU: () => p,
                of: () => m,
                Kr: () => h,
                eD: () => b
            }), s(944114), s(898992), s(823215), s(354520), s(581454), s(737550);
            var a = s(296540),
                i = () => s(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        pageIdToUsers: {},
                        similarUserIdToLastVisitedPageId: {}
                    }
                }
                getPageIdToActiveSimilarUsersCount() {
                    let e = {};
                    for (let [t, a] of (0, s(722371).WP)(this.state.pageIdToUsers)) e[t] = (null == a ? void 0 : a.length) ? ? 0;
                    return e
                }
            }
            let n = new r;
            s(803949);
            var l = s(474848);
            let o = {
                debugPanel: {
                    padding: 5,
                    border: `1px solid ${s(632079).Tj.border.secondary}`,
                    marginTop: 8,
                    borderRadius: 4
                }
            };

            function d(e) {
                let {
                    data: t
                } = e, a = (0, s(682985).K8)(() => s(729247).Ay.state.autoExpandDebugInfo, []);
                return (0, l.jsx)("div", {
                    style: o.debugPanel,
                    onMouseDown: e => {
                        (0, s(705660).SQ)(e, s(705660).y$.ButtonMouseDown, () => {})
                    },
                    onClick: e => {
                        (0, s(705660).SQ)(e, s(705660).y$.Click, () => {})
                    },
                    role: "presentation",
                    children: (0, l.jsx)(s(503270).H, {
                        data: t,
                        defaultCollapsed: !a,
                        showCopyButton: !0,
                        showModalButton: !1
                    })
                })
            }

            function c(e) {
                let {
                    result: t,
                    debugHits: i
                } = e, r = (0, a.useMemo)(() => {
                    var e;
                    return (null == (e = t.sources) ? void 0 : e.includes(s(821603).Ni.Local)) ? ? !1
                }, [t.sources]), n = (0, a.useMemo)(() => {
                    let e = {};
                    return i && i.length > 0 && (e.debugHits = i), t.rankingSignals && Object.keys(t.rankingSignals).length > 0 && (e.rankingSignals = t.rankingSignals), r && (e.debugLocal = {
                        id: t.id,
                        localSource: t.localSource,
                        score: t.score,
                        localRelevancies: t.localRelevancies,
                        frecencyScore: t.frecencyScore,
                        personalizationBoost: t.personalizationBoost,
                        terms: t.terms
                    }), Array.isArray(t.featureGroups) && t.featureGroups.length > 0 && (e.featureGroups = t.featureGroups), Object.keys(e).length > 0 ? e : null
                }, [t, i, r]);
                return n ? (0, l.jsx)(d, {
                    data: n
                }) : null
            }

            function u(e) {
                return void 0 !== e && e.length > 0
            }
            let p = {
                    padding: "4px 8px"
                },
                m = {
                    padding: "4px 8px",
                    borderRadius: 12
                },
                g = {
                    divider: {
                        color: s(632079).Tj.text.tertiary
                    },
                    pathHighlight: {
                        color: s(632079).Tj.blue.text.accentPrimary,
                        fontWeight: s(699422).Wy.medium
                    },
                    pathText: {
                        color: s(632079).Tj.text.tertiary
                    }
                },
                h = a.memo(a.forwardRef(function(e, t) {
                    var i, r, o, d;
                    let {
                        currentView: c,
                        result: p,
                        queryId: m,
                        analytics: h,
                        debugHits: w
                    } = e, {
                        highlight: M,
                        store: j
                    } = p, k = (0, s(109939).tz)(), C = (0, s(533992).v3)(), T = p.workflowData, I = void 0 !== T, A = p.sources.every(e => e === s(821603).Ni.Local), B = I ? s(360851).N.createChildStore(j, {
                        table: "workflow",
                        id: p.id,
                        spaceId: p.spaceId
                    }) : void 0;
                    (0, s(383953).w)(() => {
                        if ("results" === c) {
                            var e, t;
                            null == h || null == (e = h.setResultRenderTime) || e.call(h, p.id), (0, s(465708).Rp)(p) && (null == h || null == (t = h.endTimeToRenderServerResultsTiming) || t.call(h))
                        }(B ? ? j).load()
                    });
                    let R = (0, s(682985).K8)(() => (0, s(597845).Wi)(C, j.id), [C, j]),
                        P = (0, s(682985).K8)(() => j.isReady(), [j]),
                        H = (0, s(682985).K8)(() => !!P && j.isEmptyPage(), [j, P]),
                        _ = (0, s(682985).K8)(() => {
                            var e;
                            return (null == B || null == (e = B.getData()) ? void 0 : e.name) ? ? (null == T ? void 0 : T.name)
                        }, [B, null == T ? void 0 : T.name]),
                        E = (0, s(682985).K8)(() => {
                            var e;
                            return (null == B || null == (e = B.getData()) ? void 0 : e.description) ? ? (null == T ? void 0 : T.description)
                        }, [B, null == T ? void 0 : T.description]),
                        D = (0, s(682985).K8)(() => null == B ? void 0 : B.getCreatedByStore(), [B]),
                        F = (0, s(682985).K8)(() => null == D ? void 0 : D.getDisplayName(k), [D, k]);
                    (0, a.useEffect)(() => {
                        null == D || D.load()
                    }, [D]);
                    let N = (0, s(682985).K8)(() => P ? (0, s(569553).Te)(j) : void 0, [j, P]),
                        L = (0, s(682985).K8)(() => j.getIcon(), [j]),
                        O = (0, s(682985).K8)(() => {
                            let e = null == B ? void 0 : B.getRawIcon();
                            if (e) return e;
                            let t = null == T ? void 0 : T.icon;
                            if (t) return t;
                            let a = (0, s(337222).Oy)({
                                baseUrl: s(986939).A.domainBaseUrl || "",
                                shape: s(337222).WJ,
                                color: s(337222).i
                            });
                            return (0, s(337222).Hy)(a)
                        }, [B, null == T ? void 0 : T.icon]),
                        z = (0, s(682985).K8)(() => j.isPersonProfile() ? j.getPersonProfileUserStore() : void 0, [j]),
                        K = (0, a.useMemo)(() => I ? (0, l.jsx)(s(569553).B6, {
                            disabled: !0,
                            icon: {
                                pointer: j.pointer,
                                icon: O
                            },
                            iconRecordCategory: "workflow",
                            isEmptyPage: !0,
                            size: 20
                        }) : z ? (0, l.jsx)(s(321753).A, {
                            userStore: z,
                            size: 20
                        }) : (0, l.jsx)(s(569553).B6, {
                            disabled: !0,
                            icon: L,
                            iconRecordCategory: N ? ? "pageBlock",
                            isEmptyPage: H,
                            size: 20
                        }), [I, j.pointer, O, z, L, N, H]),
                        q = (0, s(682985).K8)(() => (0, s(307983).a6)(j), [j]),
                        V = p.agentCreatorName ? ? F,
                        W = (0, a.useMemo)(() => {
                            if (void 0 !== e.captionOverride) return (0, l.jsx)(s(111010).D, {
                                colorPalette: "gray",
                                colorVariant: "secondary",
                                styleKey: "captionRegular",
                                children: e.captionOverride
                            });
                            if (I) {
                                let e = V || (A && null != M && M.pathText ? (0, s(821603).Kl)(M.pathText) : void 0);
                                return e ? (0, l.jsx)(s(111010).D, {
                                    colorPalette: "gray",
                                    colorVariant: "secondary",
                                    styleKey: "captionRegular",
                                    children: e
                                }) : void 0
                            }
                            if (q) return (0, l.jsx)(f, {
                                store: j,
                                pathHighlight: null == M ? void 0 : M.pathText,
                                styles: g
                            })
                        }, [e.captionOverride, j, null == M ? void 0 : M.pathText, I, q, V, A]),
                        U = j.id,
                        G = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore),
                        $ = (0, s(682985).K8)(() => n.state.similarUserIdToLastVisitedPageId, []),
                        Q = (0, a.useCallback)(e => {
                            var t;
                            return t = {
                                timestamp: ({
                                    timestamp: e.visitedAt
                                }).timestamp,
                                numberOfMinutes: 2
                            }, !(Date.now() - t.timestamp >= 6e4 * t.numberOfMinutes) && $[e.userId] === U
                        }, [$, U]),
                        Y = (0, s(682985).K8)(() => n.state.pageIdToUsers[U] ? ? [], [U]),
                        J = (0, s(682985).K8)(() => (function(e) {
                            let {
                                spaceStore: t,
                                similarUsers: a,
                                isUserPresentOnPage: i
                            } = e;
                            return t ? [...a].sort((e, t) => {
                                let s = i({
                                    userId: e.userId,
                                    visitedAt: e.visitedAt
                                });
                                return s !== i({
                                    userId: t.userId,
                                    visitedAt: t.visitedAt
                                }) ? s ? -1 : 1 : t.visitedAt - e.visitedAt
                            }).slice(0, 4).map(e => {
                                let a = s(807825).L.createChildStore(t, {
                                    table: s(832375).oo9,
                                    id: e.userId
                                });
                                return a.load(), {
                                    store: a,
                                    visitedAt: e.visitedAt,
                                    isPresent: i({
                                        userId: e.userId,
                                        visitedAt: e.visitedAt
                                    })
                                }
                            }) : []
                        })({
                            spaceStore: G,
                            similarUsers: Y,
                            isUserPresentOnPage: Q
                        }), [Q, Y, G]),
                        X = (0, s(682985).K8)(() => J.every(e => e.store.isReady()), [J]),
                        Z = (0, a.useMemo)(() => {
                            if (!X) return null;
                            let e = J.length;
                            return (0, l.jsx)(s(4458).fI, {
                                children: J.map(({
                                    store: t,
                                    visitedAt: s,
                                    isPresent: a
                                }, i) => (0, l.jsx)("span", {
                                    style: {
                                        zIndex: e - i
                                    },
                                    children: (0, l.jsx)(v, {
                                        userStore: t,
                                        isPresent: a
                                    })
                                }, `search-user-presence-${t.id}-${U}-${s}`))
                            })
                        }, [X, U, J]),
                        ee = (0, s(682985).K8)(() => "everything" === s(729247).Ay.state.debug || s(729247).Ay.state.showDebugInfo, []),
                        et = "recents" === c,
                        es = (0, s(960253).I)(() => b({
                            view: c
                        }), [c]),
                        ea = ee && "results" === c,
                        ei = (0, a.useMemo)(() => void 0 !== e.rightOverride ? e.rightOverride : (0, l.jsxs)(s(4458).fI, {
                            gap: 12,
                            alignItems: "center",
                            children: [Z, (0, l.jsx)("div", {
                                "data-search-icon-target": "true",
                                children: ea ? (0, l.jsx)(s(465708).wS, {
                                    result: p
                                }) : (0, l.jsx)("span", {
                                    style: es.enterIconStyle,
                                    children: (0, l.jsx)(s(16275).I, {
                                        icon: s(750748).arrowTurnDownLeftSmallIcon,
                                        size: "xs",
                                        colorVariant: "secondary"
                                    })
                                })
                            })]
                        }), [e.rightOverride, Z, ea, p, es.enterIconStyle]),
                        er = (0, s(682985).K8)(() => !et && (j.isType("link_to_collection") || j.isType("collection_view_page") || j.isType("collection_view")), [et, j]),
                        en = (0, s(682985).K8)(() => {
                            let {
                                isSurrogateCollection: e,
                                collectionId: t
                            } = p ? ? {};
                            return e && t ? s(356912).m.createChildStore(j, {
                                table: s(832375).VlP,
                                id: t
                            }) : void 0
                        }, [p, j]),
                        el = (0, s(682985).K8)(() => (0, s(465708).yD)({
                            result: p,
                            queryId: m
                        }), [p, m]),
                        eo = (0, s(682985).K8)(() => j.isNavigableBlock(), [j]),
                        ed = !!((u(null == (i = p.highlight) ? void 0 : i.text) || u(null == (r = p.highlights) ? void 0 : r.textHighlights) || u(null == (o = p.highlight) ? void 0 : o.collectionText) || u(null == (d = p.highlights) ? void 0 : d.collectionTextHighlight) || u(E)) && !(eo && !(0, s(465708).Rp)(p))),
                        ec = (0, s(682985).K8)(() => {
                            let e = null == G ? void 0 : G.getModel();
                            return e && (0, s(764498).X)(e) ? (0, s(843641).i1)(j).type : "none"
                        }, [j, G]),
                        eu = (0, s(682985).K8)(() => j.isArchived(), [j]),
                        ep = (0, s(682985).K8)(() => {
                            let e = (0, s(965142).s)();
                            return void 0 !== e && e === p.id
                        }, [p.id]),
                        em = (0, a.useMemo)(() => {
                            let e = [...p.badges ? ? []];
                            return "verified" !== ec || e.some(e => "verified" === e.type) || e.push({
                                type: "verified",
                                properties: {},
                                label: ""
                            }), eu && !e.some(e => "archived" === e.type) && e.push({
                                type: "archived",
                                properties: {},
                                label: ""
                            }), ep && e.push({
                                type: "current_page",
                                properties: {},
                                label: ""
                            }), I && !e.some(e => "agent" === e.type) && e.push({
                                type: "agent",
                                properties: {},
                                label: ""
                            }), e
                        }, [p.badges, ec, eu, ep, I]),
                        eg = (0, a.useMemo)(() => (0, l.jsx)(s(95582).A, {
                            disabled: R,
                            disabledFeedback: R,
                            style: es.outerStyle,
                            ...e,
                            onMouseDown: e.preventClickDefault ? e => e.preventDefault() : void 0,
                            ref: t,
                            buttonStyle: es.buttonStyle,
                            desktopIconStyle: es.desktopIconStyle,
                            title: en ? (0, l.jsx)(s(52109).G, {
                                collectionStore: en,
                                hideCollectionViewBlockIcon: !0
                            }) : (0, l.jsx)(s(578751).G, {
                                badges: em,
                                store: j,
                                highlight: M,
                                recordPathCaption: et && W ? W : void 0,
                                isRecentsView: et,
                                isAgentResult: I,
                                isCollection: er,
                                agentName: _,
                                allowTextHighlightFallback: A
                            }),
                            caption: et ? void 0 : (0, l.jsx)(y, {
                                store: j,
                                intl: k,
                                pathDisplay: W,
                                styles: g
                            }),
                            body: !et && (ed || ee) ? (0, l.jsx)(x, {
                                agentDescription: E,
                                isDebugEnabled: ee,
                                debugHits: w,
                                result: p
                            }) : void 0,
                            icon: K,
                            right: ei,
                            className: `notranslate ${s(828432).LF7}`
                        }), [R, es, et, e, t, en, j, M, W, I, er, k, ed, _, E, ee, w, K, ei, p, em, A]),
                        eh = C.device.isElectron,
                        ef = (0, a.useCallback)(async () => {
                            eh && el && (await (0, s(969899).jd)())({
                                environment: C,
                                stringValue: el,
                                copiedMessage: S.copiedLinkToClipboard
                            })
                        }, [C, el, eh]),
                        ey = (0, a.useCallback)(e => {
                            e.preventDefault(), e.stopPropagation()
                        }, []);
                    return el ? (0, l.jsx)(s(369064).N, {
                        capture: e.focused,
                        debugName: "Search2SearchResults",
                        onCopyLinkToCurrentPage: e => void ef(),
                        onCopyLinkToPageInCommandSearch: e => void ef(),
                        children: (0, l.jsx)(s(990461).s, {
                            href: el,
                            onClick: ey,
                            children: eg
                        }, el)
                    }) : eg
                }));

            function f(e) {
                let {
                    store: t,
                    pathHighlight: a,
                    styles: i
                } = e, r = (0, s(648481).PO)({
                    words: (0, s(648481).oQ)(a),
                    highlightText: a,
                    styleOverride: i.pathHighlight
                });
                return (0, l.jsx)(s(307983).Ay, {
                    store: t,
                    showFullPathInTooltip: !0,
                    highlighter: r
                })
            }

            function y(e) {
                let {
                    store: t,
                    intl: i,
                    pathDisplay: r,
                    styles: n
                } = e, o = (0, s(682985).K8)(() => {
                    if (!t.canRead()) return;
                    let e = t.getCreatedByPointer();
                    if (!e || !t.getRecordModel) return;
                    let a = (0, s(197018).xC)({
                        pointer: e,
                        getRecordModel: t.getRecordModel
                    });
                    if (null != a && a.asActor) return (0, s(197018).lR)(i, a)
                }, [t, i]), d = (0, s(682985).K8)(() => t.getLastEditedTime(), [t]), c = (0, a.useMemo)(() => {
                    if (d) return (0, l.jsx)("span", {
                        style: n.pathText,
                        children: i.formatMessage(S.lastEdited, {
                            time: (0, s(799843).nl)(d, {
                                useCompactFormat: !0
                            })
                        })
                    })
                }, [i, d, n.pathText]), u = [r, o ? (0, l.jsx)("span", {
                    style: n.pathText,
                    children: o
                }) : void 0, c].filter(Boolean);
                return (0, l.jsx)(s(4458).fI, {
                    gap: 4,
                    children: u.map((e, t) => (0, l.jsxs)(a.Fragment, {
                        children: [t > 0 ? (0, l.jsx)("span", {
                            style: n.pathText,
                            children: "•"
                        }) : void 0, e]
                    }, t))
                })
            }

            function v(e) {
                let {
                    userStore: t,
                    isPresent: a
                } = e, i = (0, s(109939).tz)(), r = (0, s(616922).XE)(e => (0, s(632079).Nq)(t.id, e), a), {
                    name: n,
                    email: o
                } = (0, s(682985).K8)(() => ({
                    name: (0, s(413818).c6)(i, t.getModel()),
                    email: t.getEmail()
                }), [i, t]), d = (0, s(960253).I)(() => ({
                    avatarOuterOutline: { ...r.avatarOuterOutline,
                        outlineColor: a ? r.avatarOuterOutline.outlineColor : s(632079).Tj.palette.gray[100]
                    }
                }), [a, r.avatarOuterOutline]);
                return (0, l.jsx)(s(51831).m, {
                    textWrap: !0,
                    content: () => (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            children: n
                        }), (0, l.jsx)("div", {
                            children: o
                        })]
                    }),
                    children: e => (0, l.jsx)("div", {
                        style: d.avatarOuterOutline,
                        ...e,
                        children: (0, l.jsx)("div", {
                            style: r.avatarBorder,
                            children: (0, l.jsx)(s(321753).A, {
                                iconStyle: r.avatarInnerOutline,
                                style: r.uiUserAvatarStyles,
                                size: s(616922).eQ,
                                isOffline: !a,
                                userStore: t,
                                avatarShouldShowShadow: !0,
                                initialOverrideStyle: r.initialColor
                            })
                        })
                    })
                })
            }

            function x(e) {
                var t, a, i, r;
                let {
                    agentDescription: n,
                    isDebugEnabled: o,
                    debugHits: d,
                    result: p
                } = e, m = (0, s(465708).Dt)({
                    result: p
                });
                return n ? (0, l.jsxs)(l.Fragment, {
                    children: [o ? (0, l.jsx)(c, {
                        result: p,
                        debugHits: d
                    }) : null, (0, l.jsx)("div", {
                        "data-search-body-preview": "true",
                        children: m ? ? (0, l.jsx)(s(18079).A, {
                            maxLines: 2,
                            children: (0, l.jsx)("span", {
                                children: n
                            })
                        })
                    })]
                }) : u(null == (t = p.highlight) ? void 0 : t.text) || u(null == (a = p.highlights) ? void 0 : a.textHighlights) || u(null == (i = p.highlight) ? void 0 : i.collectionText) || u(null == (r = p.highlights) ? void 0 : r.collectionTextHighlight) || o ? (0, l.jsxs)(l.Fragment, {
                    children: [o ? (0, l.jsx)(c, {
                        result: p,
                        debugHits: d
                    }) : null, (0, l.jsx)("div", {
                        "data-search-body-preview": "true",
                        children: m
                    })]
                }) : null
            }

            function b(e) {
                let {
                    view: t
                } = e, a = "recents" === t;
                return {
                    outerStyle: {
                        paddingInlineStart: 0,
                        paddingBottom: 10 * !!s(986939).A.isMobile,
                        paddingTop: 10 * !!s(986939).A.isMobile,
                        alignItems: a ? "center" : void 0,
                        ...!a && {
                            minHeight: 36
                        }
                    },
                    buttonStyle: a ? m : {
                        padding: 8,
                        borderRadius: 12
                    },
                    enterIconStyle: {
                        width: 12,
                        height: 12,
                        color: s(632079).Tj.text.secondary,
                        visibility: "hidden"
                    },
                    desktopIconStyle: {
                        marginTop: 0
                    }
                }
            }
            let S = (0, s(109939).YK)({
                lastEdited: {
                    id: "search2.lastEdited",
                    defaultMessage: "Edited {time}"
                },
                copiedLinkToClipboard: {
                    id: "search2.copiedLinkToClipboard",
                    defaultMessage: "Copied result link to clipboard"
                }
            })
        },
        120509: (e, t, s) => {
            s.d(t, {
                Q: () => a
            }), s(898992), s(354520), s(581454);

            function a(e) {
                let {
                    searchQuery: t,
                    filterCategory: a,
                    availableOffline: i = !1,
                    disable: r = !1
                } = e, n = (0, s(533992).v3)(), l = (0, s(109939).tz)();
                return (0, s(682985).K8)(() => {
                    if (r) return [];
                    let e = s(987458).A.state.offlinePages ? ? {};
                    return Object.keys(e).map(r => {
                        var o;
                        let d = e[r];
                        if (void 0 === d) return;
                        let {
                            is_explicitly_offlined_origin: c,
                            is_autosynced_origin: u
                        } = d;
                        if (!(c || u) || i && !(0, s(597845).Bd)(r) || ! function(e) {
                                let {
                                    filterCategory: t,
                                    isExplicitlyOfflinedOrigin: a,
                                    isAutosyncedOrigin: i
                                } = e;
                                switch (t) {
                                    case "all":
                                        return !0;
                                    case "manual":
                                        return a;
                                    case "autosynced":
                                        return i;
                                    default:
                                        (0, s(722371).HB)(t)
                                }
                            }({
                                filterCategory: a,
                                isExplicitlyOfflinedOrigin: c,
                                isAutosyncedOrigin: u
                            })) return;
                        let p = new(s(970831)).B(n, {
                            table: s(832375).evP,
                            id: r
                        });
                        if (t && ! function(e) {
                                let {
                                    pageBlockStore: t,
                                    searchQuery: a,
                                    intl: i
                                } = e, {
                                    displayTitle: r
                                } = (0, s(471848).tL)({
                                    store: t,
                                    intl: i
                                });
                                return void 0 !== r && r.toLowerCase().includes(a.toLowerCase())
                            }({
                                pageBlockStore: p,
                                searchQuery: t,
                                intl: l
                            }) || (null == (o = (0, s(328765).S)()) ? void 0 : o.id) !== p.getSpaceId()) return;
                        let m = p.getLastEditedTime();
                        return {
                            id: r,
                            downloadStatus: d.download_status,
                            isClickable: !1,
                            lastModifiedTime: m,
                            pageBlockStore: p,
                            showOptions: c
                        }
                    }).filter(s(722371).O9)
                }, [r, i, a, n, t, l])
            }
        },
        145075: (e, t, s) => {
            s.d(t, {
                E: () => a
            }), s(898992), s(737550);

            function a({
                query: e,
                filters: t
            }) {
                return e.trim().length > 0 || void 0 !== t && function(e) {
                    let {
                        navigableBlockContentOnly: t,
                        ...a
                    } = (0, s(421593).u)(e);
                    return Object.values(a).some(e => !!e)
                }(t)
            }
        },
        158645: (e, t, s) => {
            s.d(t, {
                L: () => n
            }), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = {
                marginInlineEnd: 30
            };

            function n(e) {
                let {
                    onPopupOpen: t,
                    onPopupClose: n,
                    onWorkspaceSwitch: l,
                    mode: d
                } = e, c = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore), u = null == c ? void 0 : c.id, p = (0, s(533992).v3)(), m = p.currentUser.id, g = (0, a.useCallback)(async e => {
                    let {
                        newSpaceViewStore: t,
                        associatedUserId: a,
                        closeSwitcherPopupFn: i
                    } = e, r = t.getSpaceId();
                    if (t && m && r) {
                        var n;
                        let e = null == (n = s(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : n.id,
                            o = (0, s(765402).w)();
                        e && o && r && function(e) {
                            let {
                                currentSearchSessionId: t,
                                currentWorkspaceId: a,
                                newWorkspaceId: i
                            } = e;
                            (0, s(104310).u)({
                                event: {
                                    eventName: "search_quick_search_switch_workspace",
                                    eventProperties: {
                                        current_search_session_id: t,
                                        current_workspace_id: a,
                                        new_workspace_id: i
                                    }
                                }
                            })
                        }({
                            currentSearchSessionId: o,
                            currentWorkspaceId: e,
                            newWorkspaceId: r
                        }), i(), s(728372).default.update(e => ({ ...e,
                            sidebarSpaceViewStore: t,
                            sidebarSpaceStore: null == t ? void 0 : t.getSpaceStore()
                        })), m !== a && await s(274662).T({
                            environment: p,
                            newCurrentUserId: a
                        }), s(886556).z.isAiEnabled() && s(310639).assistantDependency.load().then(({
                            assistantActions: e
                        }) => {
                            e.clearAllAssistantSessions()
                        }), s(930179).default.closeAndResetMetricsState(), s(357887)._.closeAndResetMetricsState(), s(785385).default.reset(), s(635257)._N({
                            environment: p,
                            analyticsFrom: "quick-search-switch-workspace",
                            isQuickSearch: !0,
                            mode: "agent" === d ? "assistant" : "search"
                        }), null == l || l()
                    }
                }, [m, p, d, l]), {
                    spaceIcon: h,
                    spaceName: f
                } = (0, s(682985).K8)(() => c ? {
                    spaceName: c.getName(),
                    spaceIcon: c.getIcon()
                } : {
                    spaceName: void 0,
                    spaceIcon: void 0
                }, [c]), y = [...p.currentUser.loggedInUserIds], v = (0, s(682985).K8)(() => {
                    var e;
                    return s(381453).hS(s(381453).oE((null == (e = s(728372).AppStoreCurrentUserRootStore.state) ? void 0 : e.getSpaceViewStores()) ? ? []), e => e.getSpaceId()).length > 1
                }, []);
                return c && u && m && c && (v || 1 !== y.length) ? (0, i.jsx)(s(656252).A, {
                    popupType: s(656252).z.Popup,
                    content: e => (0, i.jsx)(s(747369).A, {
                        menuType: s(649476).gu.Popup,
                        children: y.map((t, a) => (0, i.jsx)(s(714231).ti, {
                            onSpaceClick: s => g({
                                newSpaceViewStore: s.spaceViewStore,
                                associatedUserId: t,
                                closeSwitcherPopupFn: e.close
                            }),
                            userId: t,
                            isLastUser: a === y.length - 1,
                            shouldShowNewWorkspaceButtonInUserSpaceView: !1,
                            disableAccountActions: !0,
                            close: e.close
                        }, `commandSearch-userworkspaces-${a}`))
                    }),
                    onClick: t,
                    onClose: n,
                    disabled: !1,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    style: r,
                    children: e => (0, i.jsx)(o, {
                        events: e,
                        spaceIcon: h,
                        spaceName: f
                    })
                }) : null
            }
            let l = {
                display: "flex",
                alignItems: "center",
                gap: 2,
                paddingInlineEnd: 5,
                cursor: "pointer"
            };

            function o(e) {
                let {
                    events: t,
                    spaceIcon: r,
                    spaceName: n
                } = e, [o, d] = (0, a.useState)(!1), c = (0, s(960253).I)(() => ({
                    recordIcon: {
                        backgroundColor: o ? s(632079).Tj.buttonHoveredBackground : void 0,
                        padding: 4,
                        height: void 0,
                        width: void 0
                    }
                }), [o]);
                return (0, i.jsxs)("span", { ...t,
                    style: l,
                    onMouseEnter: () => d(!0),
                    onMouseLeave: () => d(!1),
                    role: "button",
                    children: [(0, i.jsx)(s(569553).B6, {
                        bucket: "public",
                        disabled: !0,
                        icon: r,
                        iconRecordCategory: "workspace",
                        isEmptyPage: !1,
                        size: 24,
                        style: c.recordIcon,
                        title: n
                    }), (0, i.jsx)(s(16275).I, {
                        icon: s(469102).arrowChevronSingleDownFillSmallIcon,
                        size: "xxs",
                        colorVariant: "tertiary"
                    })]
                })
            }
        },
        186706: (e, t, s) => {
            s.d(t, {
                e: () => p
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(803949), s(737550);
            var a = s(296540);

            function i(e) {
                return void 0 === e ? [] : e.map(e => ({
                    id: e.id,
                    score: e.score,
                    localSource: e.localSource,
                    sources: e.sources,
                    spaceId: e.spaceId,
                    rankingSignals: e.rankingSignals ? ? {}
                }))
            }
            s(581454);
            let r = ["display", "position", "inset", "top", "right", "bottom", "left", "inset-inline-start", "inset-inline-end", "inset-block-start", "inset-block-end", "z-index", "box-sizing", "flex", "overflow", "overflow-x", "overflow-y", "scrollbar-gutter", "flex-direction", "flex-grow", "flex-shrink", "flex-basis", "flex-wrap", "align-items", "align-content", "align-self", "justify-content", "justify-items", "justify-self", "place-content", "place-items", "place-self", "order", "gap", "row-gap", "column-gap", "grid", "grid-template-columns", "grid-template-rows", "grid-auto-columns", "grid-auto-rows", "grid-auto-flow", "grid-column", "grid-column-start", "grid-column-end", "grid-row", "grid-row-start", "grid-row-end", "margin-top", "margin-right", "margin-bottom", "margin-left", "margin-inline-start", "margin-inline-end", "padding-top", "padding-right", "padding-bottom", "padding-left", "padding-inline-start", "padding-inline-end", "border-top", "border-right", "border-bottom", "border-left", "border-inline-start", "border-inline-end", "border-block-start", "border-block-end", "border-radius", "border-collapse", "border-spacing", "background-color", "background-image", "background-position", "background-size", "background-repeat", "background-clip", "background-origin", "box-shadow", "opacity", "filter", "backdrop-filter", "transform", "transform-origin", "will-change", "visibility", "pointer-events", "color", "fill", "stroke", "font-family", "font-size", "font-style", "font-weight", "line-height", "letter-spacing", "text-align", "text-overflow", "text-decoration", "text-transform", "text-indent", "white-space", "word-break", "overflow-wrap", "-webkit-line-clamp", "-webkit-box-orient", "object-fit", "object-position", "aspect-ratio", "vertical-align", "list-style-type", "list-style-position", "user-select", "-webkit-user-select", "cursor"],
                n = ["width", "inline-size", "min-width", "min-inline-size", "max-width", "max-inline-size", "height", "block-size", "min-height", "min-block-size", "max-height", "max-block-size"];

            function l(e) {
                let {
                    sourceElement: t,
                    dimension: s
                } = e;
                if (t instanceof HTMLElement) {
                    let e = "width" === s ? t.clientWidth : t.clientHeight;
                    if (e > 0) return `${e}px`
                }
                let a = t.getBoundingClientRect(),
                    i = "width" === s ? a.width : a.height;
                return i > 0 ? `${i}px` : void 0
            }

            function o(e) {
                let t, s, a, i, {
                        sourceElement: o,
                        clonedElement: d,
                        freezeViewportSize: c = !1
                    } = e,
                    u = window.getComputedStyle(o),
                    p = function(e) {
                        let t = new Map;
                        if (!e) return t;
                        for (let s of e.split(";")) {
                            let e = s.trim();
                            if (!e) continue;
                            let a = e.indexOf(":");
                            if (-1 === a) continue;
                            let i = e.substring(0, a).trim(),
                                r = e.substring(a + 1).trim();
                            i && r && t.set(i, r)
                        }
                        return t
                    }(o.getAttribute("style"));
                for (let [e, t] of p) {
                    if (!t.includes("var(")) continue;
                    let s = u.getPropertyValue(e).trim();
                    s && p.set(e, s)
                }
                for (let e of r) {
                    let t = u.getPropertyValue(e).trim();
                    t && p.set(e, t)
                }
                if (t = u.getPropertyValue("width").trim(), s = u.getPropertyValue("height").trim(), a = u.getPropertyValue("overflow-x").trim(), i = u.getPropertyValue("overflow-y").trim(), "0px" !== t || "0px" !== s ? 0 : "visible" === a || "visible" === i)
                    for (let e of n) p.delete(e);
                else
                    for (let e of n) {
                        let t = u.getPropertyValue(e).trim();
                        t && p.set(e, t)
                    }(c || function(e, t) {
                        if (!(e instanceof HTMLElement)) return !1;
                        let s = t.getPropertyValue("overflow-x").trim(),
                            a = t.getPropertyValue("overflow-y").trim();
                        return ("auto" === s || "scroll" === s || "hidden" === s) && !!(e.scrollWidth > e.clientWidth) || ("auto" === a || "scroll" === a || "hidden" === a) && !!(e.scrollHeight > e.clientHeight)
                    }(o, u)) && function(e) {
                        let {
                            sourceElement: t,
                            declarations: s
                        } = e, a = l({
                            sourceElement: t,
                            dimension: "width"
                        });
                        a && s.set("width", a);
                        let i = l({
                            sourceElement: t,
                            dimension: "height"
                        });
                        i && s.set("height", i)
                    }({
                        sourceElement: o,
                        declarations: p
                    });
                let m = Array.from(p.entries()).map(([e, t]) => `${e}: ${t}`).join("; ");
                m ? d.setAttribute("style", m) : d.removeAttribute("style")
            }
            var d = s(474848);
            let c = (0, s(109939).YK)({
                    additionalInformationPlaceholder: {
                        id: "SearchBadResultsForm.additionalInformation.placeholder",
                        defaultMessage: "What went wrong with this search? Please be as specific as possible."
                    },
                    additionalInformationPositivePlaceholder: {
                        id: "SearchGoodResultsForm.additionalInformation.placeholder",
                        defaultMessage: "What went well with this search? Please be as specific as possible."
                    },
                    submitFailed: {
                        id: "SearchBadResultsForm.submitFailed",
                        defaultMessage: "Failed to submit report"
                    },
                    submitSuccess: {
                        id: "SearchBadResultsForm.submitSuccess",
                        defaultMessage: "Your report has been submitted, thanks!"
                    },
                    title: {
                        id: "SearchBadResultsForm.title",
                        defaultMessage: "Give search feedback"
                    },
                    warning: {
                        id: "SearchBadResultsForm.warning",
                        defaultMessage: "The pages from the search results, the search query, and the feedback will be sent to Notion for quality improvement."
                    },
                    cancel: {
                        id: "SearchBadResultsForm.cancel",
                        defaultMessage: "Cancel"
                    },
                    submit: {
                        id: "SearchBadResultsForm.submit",
                        defaultMessage: "Submit"
                    },
                    urlPlaceholder: {
                        id: "SearchBadResultsForm.url.placeholder",
                        defaultMessage: "Link to page you were looking for…"
                    },
                    additionalInformationWarning: {
                        id: "SearchBadResultsForm.additionalInformation.warning",
                        defaultMessage: "The details you provided are too similar to your search keywords. To help us understand the issue, please describe what went wrong."
                    },
                    checkboxLabel: {
                        id: "SearchBadResultsForm.followUpCheckbox",
                        defaultMessage: "Allow Notion to contact me by email to follow up regarding this search"
                    }
                }),
                u = {
                    style0: {
                        padding: 8
                    },
                    style1: {
                        cursor: "pointer"
                    },
                    modalWrap: {
                        width: "32rem",
                        padding: 24,
                        fontSize: 14,
                        maxWidth: "100%"
                    },
                    modalTitle: {
                        fontSize: 16,
                        fontWeight: s(699422).Wy.medium
                    },
                    modalWarning: {
                        fontSize: 13,
                        color: s(632079).Tj.text.tertiary
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
                        color: s(632079).Tj.red.text.accentPrimary,
                        marginTop: 10
                    }
                };

            function p(e) {
                let t = (0, s(533992).v3)(),
                    r = (0, s(109939).tz)();
                (0, s(383953).w)(() => {
                    (0, s(104310).u)({
                        event: {
                            eventName: "report_bad_search_modal_open",
                            eventProperties: {}
                        }
                    })
                });
                let [n] = (0, a.useState)(s(661238).Ay), l = (0, s(972740).L)(), [p, h] = (0, s(682985).$y)(s(448437).A), [f, y] = (0, a.useState)(""), [v, x] = (0, a.useState)(!1), [b, S] = (0, a.useState)(!0), w = (0, a.useCallback)(() => {
                    (0, s(104310).u)({
                        event: {
                            eventName: "report_bad_search_submit",
                            eventProperties: {}
                        }
                    }), b && (0, s(104310).u)({
                            event: {
                                eventName: "report_bad_search_allow_follow_up",
                                eventProperties: {}
                            }
                        }),
                        function({
                            serverResults: e,
                            localResults: t,
                            exposedSearchExperiments: a,
                            debugInfo: r,
                            productSurface: n,
                            environment: l,
                            allowFollowUp: u,
                            searchStoreState: p,
                            spaceStore: m
                        }) {
                            var h, f, y, v, x, b;
                            let S, w, M, j = s(448437).A.getState(),
                                k = i(e),
                                C = i(t),
                                T = {
                                    query: p.query,
                                    limit: p.limit,
                                    debug: void 0
                                },
                                {
                                    publicAccessPermissionAncestorBlockId: I
                                } = (0, s(773438).E)(l),
                                A = (0, s(971597).e)({
                                    environment: l,
                                    input: T,
                                    spaceId: null == m ? void 0 : m.id,
                                    publicAccessPermissionAncestorBlockId: I,
                                    source: "report_bad_search"
                                });
                            if (!A) return;
                            let B = function() {
                                    let e = document.querySelector(".search-2-snapshot-container");
                                    if (e) return e;
                                    let t = document.getElementsByClassName("notion-overlay-container notion-default-overlay-container")[0];
                                    if (t instanceof Element) return t
                                }(),
                                R = (null == B ? void 0 : B.classList.contains("search-2-snapshot-container")) ? ? !1,
                                P = document.getElementsByClassName("notion-app-inner notion-dark-theme")[0],
                                H = null == P ? void 0 : P.style.cssText,
                                _ = document.createElement("div");
                            _.style.cssText = H || "";
                            let E = null == B ? void 0 : B.cloneNode(!0);
                            E instanceof Element && _.appendChild(E);
                            B && E instanceof Element && (w = B.querySelectorAll("*"), M = E.querySelectorAll("*"), o({
                                sourceElement: B,
                                clonedElement: E,
                                freezeViewportSize: !0
                            }), w.forEach((e, t) => {
                                let s = M[t];
                                s && o({
                                    sourceElement: e,
                                    clonedElement: s
                                })
                            })), null == (h = _.querySelector("[data-search-suggested-text]")) || h.remove(), null == (f = _.querySelector("[data-search-snapshot-delete-nearest-overlay]")) || null == (f = f.closest("[data-portal]")) || f.remove(), R && ((S = _.querySelector(".search-2-snapshot-container")) instanceof HTMLElement && (null == (v = S.querySelector("aside")) || v.remove(), S.querySelectorAll(".notion-scroller").forEach(e => {
                                e instanceof HTMLElement && (e.style.width = "100%", e.style.flex = "1 1 auto")
                            })), _.querySelectorAll("[data-search-body-preview]").forEach(e => {
                                var t;
                                if (!(e instanceof HTMLElement)) return;
                                let s = null == (t = e.textContent) ? void 0 : t.replace(/\s+/g, " ").trim();
                                s && e.replaceChildren(document.createTextNode(s))
                            }), x = _, b = C.length, x.querySelectorAll(".notranslate.search-query-result-item").forEach((e, t) => {
                                let s = e.querySelector("[data-search-icon-target]");
                                s && t < b ? s.replaceChildren(g("💻")) : s && s.replaceChildren(g("⬇️🌐"))
                            }));
                            let D = k.some(e => e.sources.includes(s(821603).Ni.VectorDBBlock) || e.sources.includes(s(821603).Ni.VectorDBCollection) || e.sources.includes(s(821603).Ni.VectorDBBlockOpenAI) || e.sources.includes(s(821603).Ni.VectorDBCollectionOpenAI) || e.sources.includes(s(821603).Ni.VectorDBBlockBGE) || e.sources.includes(s(821603).Ni.VectorDBCollectionBGE) || e.sources.includes(s(821603).Ni.VectorDBBlockBGE1024) || e.sources.includes(s(821603).Ni.VectorDBCollectionBGE1024) || e.sources.includes(s(821603).Ni.VectorDBBlockBGE4096) || e.sources.includes(s(821603).Ni.VectorDBCollectionBGE4096) || e.sources.includes(s(821603).Ni.VectorDBBlockE5) || e.sources.includes(s(821603).Ni.VectorDBCollectionE5));
                            D && k.splice(0, -20);
                            let F = {
                                queryText: p.query.text.trim(),
                                apiRequest: A,
                                serverResults: JSON.stringify(k, null, 2),
                                localResults: JSON.stringify(C, (e, t) => t instanceof Set ? Array.from(t) : t, 2),
                                additionalInformation: j.additionalInformation,
                                desiredUrl: j.desiredUrl,
                                renderedHtml: (0, s(247438).xV3)(_.outerHTML),
                                experiments: JSON.stringify(a ? ? {}, null, 2),
                                isVectorSearchEnabled: D,
                                traceLogs: null == r || null == (y = r.traceLogs) ? void 0 : y.log,
                                userId: l.currentUser.id ? ? "",
                                platform: l.device.platform,
                                planType: (null == m ? void 0 : m.getPlanType()) ? ? "",
                                allowFollowUp: u,
                                source: s(821603).m2.searchModal,
                                productSurface: n,
                                feedback: s(448437).A.getState().feedback
                            };
                            l.api.callApi({
                                eventName: "reportBadSearch",
                                environment: l,
                                data: F
                            }).then(e => {
                                "failed" === e.type ? s(647095).f1((0, d.jsx)("h1", {
                                    children: s(962299).A.formatMessage(c.submitFailed)
                                })) : s(436555).D6({
                                    label: s(962299).A.formatMessage(c.submitSuccess),
                                    durationMs: s(441742).LX
                                })
                            }), s(448437).A.reset()
                        }({ ...e,
                            spaceStore: l,
                            environment: t,
                            allowFollowUp: b,
                            searchStoreState: e.reportBadSearchInputRequest ? { ...n.state,
                                source: "quick_find",
                                query: e.reportBadSearchInputRequest.query,
                                limit: e.reportBadSearchInputRequest.limit
                            } : n.state
                        })
                }, [t, l, b, e, n]), M = e => {
                    let t = e.target.value;
                    h({ ...p,
                        additionalInformation: t
                    }), t.trim() === n.state.query.text.trim() ? (y(r.formatMessage(c.additionalInformationWarning)), x(!0)) : (y(""), x(!1))
                }, j = () => {
                    S(!b)
                };
                return (0, d.jsx)(s(979479).A, {
                    onDismiss: () => m(t),
                    content: () => (0, d.jsx)(s(790124).A, {
                        allowMobileAutoScroll: !0,
                        capture: !0,
                        allowUndo: !0,
                        allowEsc: !0,
                        allowTabUntab: !1,
                        children: e => (0, d.jsx)(s(4458).VP, {
                            width: s(986939).A.isMobile ? "min(100%, 600px)" : void 0,
                            minHeight: 128,
                            maxHeight: s(986939).A.isMobile ? void 0 : "max(calc(100vh - 78px), 300px)",
                            "data-search-snapshot-delete-nearest-overlay": !0,
                            "data-mini-search-exclude-from-snapshot": !0,
                            children: (0, d.jsxs)("div", {
                                style: u.modalWrap,
                                ...e,
                                children: [(0, d.jsxs)("div", {
                                    style: u.titleContainer,
                                    children: [(0, d.jsx)("div", {
                                        style: u.modalTitle,
                                        children: r.formatMessage(c.title)
                                    }), (0, d.jsx)("div", {
                                        style: u.modalWarning,
                                        children: r.formatMessage(c.warning)
                                    })]
                                }), (0, d.jsx)(s(36481).p, {
                                    placeholder: "thumbsUp" === p.feedback ? r.formatMessage(c.additionalInformationPositivePlaceholder) : r.formatMessage(c.additionalInformationPlaceholder),
                                    value: p.additionalInformation,
                                    onChange: M,
                                    focusInitial: !0,
                                    inputStyle: u.style0,
                                    style: u.feedbackArea,
                                    textarea: !0
                                }), f ? (0, d.jsx)("div", {
                                    style: u.warningMessage,
                                    children: f
                                }) : void 0, (0, d.jsx)(s(36481).p, {
                                    placeholder: r.formatMessage(c.urlPlaceholder),
                                    value: p.desiredUrl,
                                    onChange: e => {
                                        h({ ...p,
                                            desiredUrl: e.target.value
                                        })
                                    },
                                    style: u.feedbackArea
                                }), (0, d.jsxs)(s(4458).fI, {
                                    marginTop: 12,
                                    gap: 6,
                                    alignItems: "center",
                                    children: [(0, d.jsx)(s(349050).S, {
                                        checked: b,
                                        onClick: j,
                                        size: 12
                                    }), (0, d.jsx)("div", {
                                        onClick: j,
                                        children: (0, d.jsx)(s(324489).V, {
                                            style: u.style1,
                                            isSmall: !0,
                                            children: r.formatMessage(c.checkboxLabel)
                                        })
                                    })]
                                }), (0, d.jsxs)("div", {
                                    style: u.buttonArea,
                                    children: [(0, d.jsx)(s(548436).A, {
                                        size: "lg",
                                        onClick: () => m(t),
                                        children: r.formatMessage(c.cancel)
                                    }), (0, d.jsx)(s(912946).A, {
                                        colorPalette: "blue",
                                        size: "lg",
                                        onClick: w,
                                        disabled: v,
                                        children: r.formatMessage(c.submit)
                                    })]
                                })]
                            })
                        })
                    }),
                    isOpen: p.open
                })
            }

            function m(e) {
                (0, s(104310).u)({
                    event: {
                        eventName: "report_bad_search_abandon",
                        eventProperties: {}
                    }
                }), s(448437).A.reset()
            }

            function g(e) {
                let t = document.createElement("span");
                return t.textContent = e, t.style.cssText = "display: inline-flex; align-items: center; justify-content: center; margin-inline-start: 8px; font-size: 12px; line-height: 1; white-space: nowrap; vertical-align: middle; flex-shrink: 0", t
            }
        },
        200261: (e, t, s) => {
            s.d(t, {
                A: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                },
                r = function() {
                    return (0, a.jsx)(s(636518).Ay, {
                        title: (0, a.jsx)(s(517334).k, {
                            size: "default"
                        }),
                        titleStyle: i
                    })
                }
        },
        219346: (e, t, s) => {
            s.d(t, {
                c: () => n
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                height: 20,
                width: 20,
                padding: 2
            };

            function n(e) {
                let t = (0, s(109939).tz)(),
                    n = (0, s(682985).K8)(() => s(448437).A.state.open, []),
                    l = (0, s(682985).K8)(() => s(886556).z.isSearchModalV2Enabled(), []),
                    o = (0, a.useCallback)(e => {
                        s(448437).A.update(t => ({ ...t,
                            open: !0,
                            feedback: e
                        }))
                    }, []),
                    d = (0, s(960253).I)(() => ({
                        container: { ...e.buttonStyles,
                            display: "flex",
                            alignItems: "center",
                            gap: 4
                        },
                        legacyButton: { ...e.buttonStyles,
                            display: "inline-block",
                            fontSize: 12,
                            color: s(632079).Tj.text.tertiary,
                            padding: 4,
                            cursor: "pointer",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            userSelect: "none",
                            height: "inherit",
                            alignContent: "center"
                        }
                    }), [e.buttonStyles]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [l ? (0, i.jsxs)("div", {
                        style: d.container,
                        children: [(0, i.jsx)(s(51831).m, {
                            placement: "top",
                            content: () => (0, i.jsx)("div", {
                                children: t.formatMessage({
                                    id: "search.feedback.tooltip.good",
                                    defaultMessage: "Useful results"
                                })
                            }),
                            children: e => (0, i.jsx)(s(374533).A, { ...e,
                                onClick: () => o("thumbsUp"),
                                icon: s(729810).r,
                                ariaLabel: t.formatMessage({
                                    id: "search.feedback.thumbsUp",
                                    defaultMessage: "Search was helpful"
                                }),
                                style: r
                            })
                        }), (0, i.jsx)(s(51831).m, {
                            placement: "top",
                            content: () => (0, i.jsx)("div", {
                                children: t.formatMessage({
                                    id: "search.feedback.tooltip.bad",
                                    defaultMessage: "Not useful results"
                                })
                            }),
                            children: e => (0, i.jsx)(s(374533).A, { ...e,
                                onClick: () => o("thumbsDown"),
                                icon: s(823691)._,
                                ariaLabel: t.formatMessage({
                                    id: "search.feedback.thumbsDown",
                                    defaultMessage: "Search was not helpful"
                                }),
                                style: r
                            })
                        })]
                    }) : (0, i.jsx)(s(548436).A, {
                        size: "lg",
                        style: d.legacyButton,
                        onClick: () => o("thumbsDown"),
                        children: t.formatMessage({
                            defaultMessage: "Give search feedback",
                            id: "search.header.badSearch.button.label"
                        })
                    }), n ? (0, i.jsx)(s(186706).e, {
                        productSurface: e.productSurface,
                        localResults: e.localResults,
                        serverResults: e.serverResults,
                        debugInfo: e.debugInfo,
                        exposedSearchExperiments: e.exposedSearchExperiments,
                        reportBadSearchInputRequest: e.reportBadSearchInputRequest
                    }) : void 0]
                })
            }
        },
        242912: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowStraightDownSmallIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M8 2.125a.61.61 0 0 0-.625.599v9.017L4.122 8.488a.625.625 0 1 0-.884.884l4.32 4.32c.244.244.64.244.884 0l4.32-4.32a.625.625 0 0 0-.884-.884l-3.253 3.253V2.724A.61.61 0 0 0 8 2.125"
                    })
                },
                i = (0, s(104509).wt)("arrowStraightDownSmall", a, "small")
        },
        244103: (e, t, s) => {
            s.d(t, {
                s: () => m
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(581454);
            var a = s(296540),
                i = s(474848);

            function r(e) {
                return (0, i.jsx)(s(656252).A, {
                    popupType: s(986939).A.isMobile ? s(656252).z.SlideUp : s(656252).z.Popup,
                    content: t => (0, i.jsx)(l, {
                        parent: t,
                        ...e
                    }),
                    children: t => (0, i.jsx)(d, {
                        events: t,
                        ...e
                    })
                })
            }
            let n = {
                menuOptionStyle: {
                    color: s(632079).oZ.mediumTextColor
                }
            };

            function l({
                parent: e,
                experiment: t,
                onChange: a
            }) {
                let r;
                r = s(986939).A.isMobile ? {
                    menuType: s(649476).gu.Modal,
                    title: t.experimentId,
                    right: (0, i.jsx)(s(109939).sA, {
                        defaultMessage: "Done",
                        id: "appearanceSettings.modal.done"
                    }),
                    onClickRight: e.close
                } : {
                    menuType: s(649476).gu.Popup,
                    width: 250
                };
                let o = t.groups.map(r => ({
                    key: r,
                    action: s => {
                        a({
                            experimentId: t.experimentId,
                            group: r
                        }), e.close()
                    },
                    render: (e, t) => (0, i.jsx)(s(95582).A, { ...e,
                        title: r,
                        style: n.menuOptionStyle
                    })
                }));
                return (0, i.jsx)(s(747369).A, { ...r,
                    children: (0, i.jsx)(s(558045).A, {
                        type: s(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: [{
                            key: t.experimentId,
                            items: o
                        }]
                    })
                })
            }
            let o = {
                experimentGroupButtonStyle: {
                    overflowX: "hidden",
                    justifyContent: "left",
                    overflow: "hidden",
                    marginInlineStart: 6,
                    color: s(632079).Tj.text.secondary
                },
                rowContainer: {
                    display: "flex",
                    overflow: "hidden",
                    flexDirection: "row"
                },
                groupCell: {
                    overflow: "hidden"
                }
            };

            function d({
                experiment: e,
                events: t,
                searchExperimentOverrides: r
            }) {
                return (0, a.createElement)(s(988022).p, { ...t,
                    size: "sm",
                    key: e.experimentId,
                    style: o.experimentGroupButtonStyle,
                    iconTrailing: {
                        icon: s(595453).arrowChevronSingleDownSmallIcon,
                        colorVariant: "tertiary",
                        size: "xs"
                    }
                }, (0, i.jsx)("div", {
                    style: o.rowContainer,
                    children: (0, i.jsx)("div", {
                        style: o.groupCell,
                        children: r[e.experimentId] || e.group
                    })
                }))
            }

            function c() {
                return {
                    fontSize: 14,
                    lineHeight: 1.2,
                    color: s(632079).Tj.text.secondary,
                    marginInlineEnd: 4,
                    display: "flex",
                    alignItems: "center",
                    whiteSpace: "nowrap"
                }
            }
            let u = function(e) {
                let {
                    experiment: t
                } = e, {
                    leftPaneDebugOverrides: n,
                    rightPaneDebugOverrides: l,
                    experimentDiffers: o,
                    experimentAgreesButNondefault: d
                } = (0, s(682985).K8)(() => {
                    let e = s(729247).E.state.searchExperimentOverrides,
                        a = s(729247).nS.state.searchExperimentOverrides,
                        i = (e[t.experimentId] ? ? t.group) !== (a[t.experimentId] ? ? t.group),
                        r = !i && void 0 !== a[t.experimentId] && e[t.experimentId] !== t.group;
                    return {
                        leftPaneDebugOverrides: e,
                        rightPaneDebugOverrides: a,
                        experimentDiffers: i,
                        experimentAgreesButNondefault: r
                    }
                }, [t]), u = (0, s(960253).I)(() => ({
                    rowContainer: {
                        backgroundColor: o ? s(632079).Tj.red.background.secondary : d ? s(632079).Tj.yellow.background.secondary : void 0
                    },
                    titleCell: { ...c(),
                        maxWidth: 180,
                        textOverflow: "ellipsis",
                        overflow: "hidden"
                    }
                }), [d, o]), p = (0, a.useCallback)(e => {
                    let {
                        experimentId: t,
                        group: s,
                        store: a
                    } = e;
                    a.setState({ ...a.state,
                        searchExperimentOverrides: { ...a.state.searchExperimentOverrides,
                            [t]: s
                        }
                    })
                }, []);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: { ...u.titleCell,
                            ...u.rowContainer
                        },
                        title: t.experimentId,
                        children: t.experimentId.replace("search-", "")
                    }), (0, i.jsx)("div", {
                        style: u.rowContainer,
                        children: (0, i.jsx)(r, {
                            experiment: t,
                            searchExperimentOverrides: n,
                            onChange: e => {
                                p({ ...e,
                                    store: s(729247).E
                                })
                            }
                        })
                    }), (0, i.jsx)("div", {
                        style: u.rowContainer,
                        children: (0, i.jsx)(r, {
                            experiment: t,
                            searchExperimentOverrides: l,
                            onChange: e => {
                                p({ ...e,
                                    store: s(729247).nS
                                })
                            }
                        })
                    })]
                })
            };

            function p(e) {
                let {
                    leftValue: t,
                    rightValue: r,
                    setLeftValue: n,
                    setRightValue: l,
                    placeholder: o,
                    label: d
                } = e, {
                    titleCell: u,
                    rightTitleCell: p,
                    leftTitleCell: m
                } = (0, s(960253).I)(() => {
                    let e = c();
                    return {
                        titleCell: e,
                        rightTitleCell: { ...e,
                            color: r ? e.color : s(632079).Tj.text.tertiary,
                            width: "95%"
                        },
                        leftTitleCell: { ...e,
                            color: t ? e.color : s(632079).Tj.text.tertiary,
                            width: "95%"
                        }
                    }
                }, [t, r]), [g, h] = (0, a.useState)(r), [f, y] = (0, a.useState)(t);
                (0, a.useEffect)(() => {
                    void 0 === r && h(void 0), void 0 === t && y(void 0)
                }, [r, t]);
                let v = (0, a.useCallback)(() => {
                        l(g)
                    }, [l, g]),
                    x = (0, a.useCallback)(() => {
                        n(f)
                    }, [n, f]),
                    b = (0, a.useCallback)(e => {
                        h(e.target.value)
                    }, []),
                    S = (0, a.useCallback)(e => {
                        y(e.target.value)
                    }, []);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: u,
                        children: d
                    }), (0, i.jsxs)(s(519451).A, {
                        debugName: "SearchStringOverrideControls",
                        capture: !0,
                        allowMenuList: !1,
                        children: [(0, i.jsx)(s(36481).p, {
                            style: m,
                            onBlur: x,
                            value: f,
                            onChange: S,
                            placeholder: o
                        }), (0, i.jsx)(s(36481).p, {
                            style: p,
                            onBlur: v,
                            value: g,
                            onChange: b,
                            placeholder: o
                        })]
                    })]
                })
            }

            function m() {
                let e = (0, a.useRef)(null),
                    t = (0, s(682985).K8)(() => (0, s(722371).WP)(s(218745).hH).map(([e, t]) => {
                        let a = s(218744).default.getEligibleGroup({
                            experimentId: e,
                            defaultGroup: "control"
                        });
                        return {
                            experimentId: e,
                            experimentVersion: 1,
                            group: a,
                            groups: Array.from(new Set(["control", ...t]))
                        }
                    }), []);
                return (0, i.jsx)(h, {
                    ref: e,
                    searchExperimentsToToggle: t
                })
            }
            let g = {
                    flex: 1
                },
                h = a.forwardRef(function({
                    searchExperimentsToToggle: e
                }, t) {
                    let a = (0, s(533992).v3)(),
                        r = (0, s(109939).tz)(),
                        n = {
                            display: "flex",
                            flexDirection: "column",
                            width: 380,
                            minWidth: 380,
                            flexShrink: 0,
                            minHeight: 400,
                            height: "100%"
                        },
                        l = {
                            display: "none"
                        },
                        o = {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingInlineEnd: 8,
                            paddingInlineStart: 12,
                            flexShrink: 0,
                            borderBottom: "1px solid rgba(55, 53, 47, 0.09)"
                        },
                        d = {
                            flex: 1,
                            overflowY: "auto",
                            overflowX: "auto",
                            paddingTop: 12,
                            paddingBottom: 24
                        },
                        c = {
                            sidebar: {
                                backgroundColor: s(632079).Tj.sidebarSecondaryBackground,
                                borderInlineStart: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`
                            }
                        },
                        u = (0, s(682985).K8)(() => s(661238).Ay.isDebugSidebarOpen(), []),
                        p = (0, s(682985).K8)(() => (0, s(817599).q)(a), [a]),
                        m = { ...n,
                            ...c.sidebar,
                            ...!u && l
                        };
                    return (0, i.jsxs)("aside", {
                        ref: t,
                        style: m,
                        children: [(0, i.jsxs)("div", {
                            style: o,
                            children: [(0, i.jsx)("div", {
                                style: g
                            }), (0, i.jsx)(s(374533).A, {
                                onClick: T,
                                icon: s(25094).xMarkSmallIcon,
                                ariaLabel: r.formatMessage(I.closeDebugSidebar),
                                style: { ...p && (0, s(1249).g)({
                                        noDrag: !0
                                    })
                                }
                            })]
                        }), (0, i.jsx)("div", {
                            style: d,
                            children: (0, i.jsx)(b, {
                                searchExperimentsToToggle: e
                            })
                        })]
                    })
                }),
                f = {
                    overflow: "scroll"
                },
                y = {
                    marginTop: 16
                },
                v = {
                    paddingInlineStart: 0,
                    paddingInlineEnd: 0,
                    height: "unset"
                },
                x = {
                    display: "grid",
                    gridTemplateColumns: "minmax(140px, 1fr) 100px 100px",
                    gap: "8px",
                    minWidth: "100%",
                    maxWidth: "100%",
                    paddingInlineStart: 14
                };

            function b({
                searchExperimentsToToggle: e
            }) {
                let {
                    leftForcedClusterPattern: t,
                    rightForcedClusterPattern: a,
                    leftForcedBlockIds: r,
                    rightForcedBlockIds: n
                } = (0, s(682985).K8)(() => ({
                    leftForcedClusterPattern: s(729247).E.state.forcedClusterPattern,
                    rightForcedClusterPattern: s(729247).nS.state.forcedClusterPattern,
                    leftForcedBlockIds: s(729247).E.state.forcedBlockIds,
                    rightForcedBlockIds: s(729247).nS.state.forcedBlockIds
                }), []);
                return (0, s(682985).K8)(() => (0, s(131672).PF)({
                    env: "production",
                    isAdminMode: s(986939).A.isAdminMode,
                    experimentService: s(218744).default
                }), []) ? (0, i.jsx)(s(543588).A, {
                    title: "Dev Tools",
                    children: (0, i.jsxs)(s(654979).A, {
                        animate: {
                            height: "100%"
                        },
                        style: f,
                        children: [(0, i.jsx)(j, {}), (0, i.jsx)(k, {}), (0, i.jsx)(C, {}), (0, i.jsx)(M, {}), (0, i.jsxs)(s(543588).A, {
                            style: y,
                            title: "Quick Switch",
                            children: [(0, i.jsx)(w, {
                                title: "No local at all",
                                searchExperimentOverrides: {
                                    "search-no-local-blending": "on",
                                    "search-debug-only-no-recent-boosting": "on"
                                }
                            }), (0, i.jsx)(w, {
                                title: "No local results",
                                searchExperimentOverrides: {
                                    "search-no-local-blending": "on"
                                }
                            }), (0, i.jsx)(w, {
                                title: "No local boosting",
                                searchExperimentOverrides: {
                                    "search-debug-only-no-recent-boosting": "on"
                                }
                            })]
                        }), (0, i.jsx)(s(543588).A, {
                            style: y,
                            title: "Dev Experiments",
                            right: (0, i.jsx)(s(406910).p, {
                                onClick: () => {
                                    s(729247).E.reset(), s(729247).nS.reset()
                                },
                                style: v,
                                children: (0, i.jsx)(s(16275).I, {
                                    icon: s(670989).l,
                                    size: "sm"
                                })
                            }),
                            children: (0, i.jsxs)("div", {
                                style: x,
                                children: [(0, i.jsx)("div", {}), (0, i.jsx)("div", {}), (0, i.jsx)(S, {
                                    columnStore: s(729247).nS
                                }), e.map(e => (0, i.jsx)(u, {
                                    experiment: e
                                }, e.experimentId)), (0, i.jsx)(p, {
                                    leftValue: t,
                                    rightValue: a,
                                    setLeftValue: e => s(729247).E.updateForcedClusterPattern(e),
                                    setRightValue: e => s(729247).nS.updateForcedClusterPattern(e),
                                    placeholder: "cluster-pattern",
                                    label: "forced cluster pattern"
                                }), (0, i.jsx)(p, {
                                    leftValue: r,
                                    rightValue: n,
                                    setLeftValue: e => s(729247).E.updateForcedBlockIds(e),
                                    setRightValue: e => s(729247).nS.updateForcedBlockIds(e),
                                    placeholder: "block ids",
                                    label: "forced block ids"
                                })]
                            })
                        })]
                    })
                }) : null
            }

            function S({
                columnStore: e
            }) {
                let t = (0, s(682985).K8)(() => e.state.visible, [e]);
                return (0, i.jsx)(s(95582).A, {
                    icon: (0, i.jsx)(s(349050).S, {
                        checked: t,
                        size: 14,
                        onClick: () => e.update(e => ({ ...e,
                            visible: !e.visible
                        }))
                    }),
                    focused: !1,
                    title: "Show",
                    onClick: () => e.update(e => ({ ...e,
                        visible: !e.visible
                    }))
                })
            }

            function w({
                title: e,
                searchExperimentOverrides: t
            }) {
                return (0, i.jsx)(s(95582).A, {
                    focused: !1,
                    title: e,
                    onClick: () => {
                        s(729247).nS.update(e => ({ ...e,
                            visible: !1
                        })), s(729247).E.update(e => ({ ...e,
                            searchExperimentOverrides: t
                        }))
                    }
                })
            }

            function M() {
                return null
            }

            function j() {
                let e = (0, s(682985).K8)(() => s(729247).Ay.state.showDebugInfo, []);
                return (0, i.jsx)(s(492205).J, {
                    mode: s(454860).C.Button,
                    focused: !1,
                    title: "Show debug info",
                    icon: s(86951).v,
                    value: e,
                    onChange: e => {
                        s(729247).Ay.setState({ ...s(729247).Ay.state,
                            showDebugInfo: !!e
                        })
                    }
                })
            }

            function k() {
                let e = (0, s(682985).K8)(() => s(729247).Ay.state.autoExpandDebugInfo, []);
                return (0, i.jsx)(s(492205).J, {
                    mode: s(454860).C.Button,
                    focused: !1,
                    title: "Auto-expand debug info",
                    icon: s(86951).v,
                    value: e,
                    onChange: e => {
                        s(729247).Ay.setState({ ...s(729247).Ay.state,
                            autoExpandDebugInfo: !!e
                        })
                    }
                })
            }

            function C() {
                let e = (0, s(682985).K8)(() => "everything" === s(729247).Ay.state.debug, []);
                return (0, i.jsx)(s(492205).J, {
                    mode: s(454860).C.Button,
                    focused: !1,
                    title: "Profile query",
                    icon: s(86951).v,
                    value: e,
                    onChange: e => {
                        s(729247).Ay.setState({ ...s(729247).Ay.state,
                            debug: e ? "everything" : void 0
                        })
                    }
                })
            }

            function T() {
                s(661238).Ay.update(e => ({ ...e,
                    isDebugSidebarOpen: !1
                }))
            }
            let I = (0, s(109939).YK)({
                closeDebugSidebar: {
                    id: "searchDebugSidebar.close",
                    defaultMessage: "Close debug sidebar"
                }
            })
        },
        245102: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowLineDownIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.52 2.39 12.95 15.21",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M10 2.4c.345 0 .625.28.625.625v9.966l3.333-3.333a.625.625 0 1 1 .884.884l-4.4 4.4a.625.625 0 0 1-.884 0l-4.4-4.4a.625.625 0 0 1 .884-.884l3.333 3.333V3.025c0-.345.28-.625.625-.625M4.15 16.35a.625.625 0 1 0 0 1.25h11.7a.625.625 0 0 0 0-1.25z"
                    })
                },
                i = (0, s(104509).wt)("arrowLineDown", a, "default")
        },
        250227: (e, t, s) => {
            s.r(t), s.d(t, {
                DEFAULT_MODAL_WIDTH_WITH_SIDE_PEEK: () => p,
                INACTIVE_TIMEOUT_MS: () => o,
                Search: () => g,
                SearchStaticContext: () => c,
                SearchStoresContext: () => u,
                getSearchResultMetadata: () => y
            }), s(944114), s(898992), s(803949), s(581454);
            var a = s(296540),
                i = () => s(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        queryBasedActionResults: void 0,
                        fixedActionResults: void 0,
                        localResults: void 0,
                        serverResultsLoading: !1,
                        serverResults: void 0,
                        serverEventProperties: void 0,
                        serverResultsAllLoaded: !1,
                        errorState: n,
                        selectedQueryResultQuery: void 0,
                        timesToRender: new Map,
                        focusedIndex: void 0
                    }
                }
                setState(e) {
                    let t = { ...this.instanceState
                    };
                    if (!(0, s(795676).A)(this.instanceState, t)) return;
                    let a = function(e) {
                        let {
                            newState: t,
                            priorState: a
                        } = e, {
                            localResults: i,
                            serverError: r,
                            serverResultsLoading: n,
                            serverResults: l
                        } = t, o = !!i, d = n ? void 0 : r;
                        return !o && n ? !a.errorState.isLoading && a.errorState.showMajorError ? a.errorState : {
                            isLoading: n
                        } : o ? {
                            hasLocalResults: o,
                            serverError: d,
                            isLoading: !1,
                            showMajorError: !1
                        } : d ? {
                            hasLocalResults: o,
                            serverError: d,
                            isLoading: !1,
                            showMajorError: !0
                        } : (null == l ? void 0 : l.results.length) === 0 ? {
                            hasLocalResults: o,
                            serverError: s(821603).yq.NoResults,
                            isLoading: !1,
                            showMajorError: !0
                        } : {
                            hasLocalResults: o,
                            serverError: d,
                            isLoading: !1,
                            showMajorError: !1
                        }
                    }({
                        newState: e,
                        priorState: t
                    });
                    super.setState({ ...e,
                        errorState: a
                    })
                }
                endTimeToRenderServerResultsTiming(e) {
                    this.state.timeToRenderServerResultsMetric && (s(680007).default.measure(this.state.timeToRenderServerResultsMetric.eventName, {
                        data: {
                            query_length: this.state.timeToRenderServerResultsMetric.query_length,
                            source: this.state.timeToRenderServerResultsMetric.source,
                            search_session_id: this.state.timeToRenderServerResultsMetric.search_session_id,
                            is_search_modal_v2: !1
                        }
                    }), this.update(e => ({ ...e,
                        timeToRenderServerResultsMetric: void 0
                    })))
                }
                getResultCount() {
                    let {
                        serverResults: e,
                        localResults: t
                    } = this.state, a = (null == e ? void 0 : e.total) ? ? (null == t ? void 0 : t.total) ? ? 0, i = !!(e && a >= 100), r = !!(e && t && a < s(661238).ZK) || i;
                    return {
                        count: a,
                        isLowerBound: r
                    }
                }
            }
            let n = {
                showMajorError: !1,
                isLoading: !1,
                hasLocalResults: !1,
                serverError: void 0
            };
            var l = s(474848);
            let o = 120 * s(627179).TD,
                d = new(s(653834)).A,
                c = a.createContext(null);
            c.displayName = "SearchStaticContext";
            let u = a.createContext(null);
            u.displayName = "SearchStoresContext";
            let p = 755,
                m = {
                    background: "transparent"
                };

            function g(e) {
                var t;
                let i, n, c = (0, s(533992).v3)(),
                    [u, g] = (0, a.useState)(),
                    h = (0, a.useRef)(),
                    w = (0, a.useRef)(),
                    M = (0, a.useRef)(!0),
                    j = (0, s(682985).K8)(() => !!(s(930179).default.state.open || s(930179).default.state.openAsPage), [], {
                        debugName: "isOpen"
                    }),
                    k = (0, a.useRef)(null),
                    C = (0, a.useRef)(null),
                    T = (0, a.useRef)(null),
                    I = (0, a.useMemo)(() => new r("searchResultStore"), []),
                    A = (0, a.useMemo)(() => new r("secondarySearchResultStore"), []),
                    B = (0, s(682985).O$)(s(661238).zw),
                    R = B.text.trim(),
                    P = (0, s(482170).l)(B.filters),
                    H = (0, s(145075).E)({
                        query: R,
                        filters: P
                    }),
                    {
                        isDebugSidebarOpen: _,
                        isSidePeekPanelOpen: E,
                        mode: D
                    } = (0, s(682985).K8)(() => ({
                        isDebugSidebarOpen: s(661238).Ay.state.isDebugSidebarOpen,
                        isSidePeekPanelOpen: s(661238).Ay.state.isSidePeekPanelOpen,
                        mode: s(661238).Ay.state.mode
                    }), []),
                    F = (0, s(682985).K8)(() => I.state.localResults, [I]),
                    N = (0, s(682985).K8)(() => {
                        var e;
                        return (null == (e = I.state.serverResults) ? void 0 : e.results) ? ? []
                    }, [I]),
                    L = (0, a.useMemo)(() => (null == F ? void 0 : F.results) ? ? [], [null == F ? void 0 : F.results]),
                    O = L.length,
                    z = (null == F ? void 0 : F.total) ? ? 0,
                    K = (0, s(682985).K8)(() => (I.state.fixedActionResults ? ? []).length, [I], {
                        debugName: "numberOfFixedActionResults"
                    }),
                    q = (0, s(682985).K8)(() => (I.state.queryBasedActionResults ? ? []).length, [I], {
                        debugName: "numberOfQueryBasedActionResults"
                    }),
                    V = (0, s(682985).K8)(() => {
                        var e;
                        return (null == (e = I.state.localResults) ? void 0 : e.totalResultIds) ? ? []
                    }, [I], {
                        debugName: "totalLocalResultIds"
                    }),
                    W = (0, s(682985).K8)(() => {
                        var e;
                        return (null == (e = I.state.localResults) ? void 0 : e.allMatchingResultIds) ? ? []
                    }, [I], {
                        debugName: "allMatchingResultIds"
                    }),
                    U = K + q,
                    G = (0, a.useCallback)(() => (function({
                        searchResultsSection: e,
                        modalBodyMenu: t,
                        searchFilterMenu: a,
                        actionItemCount: i
                    }) {
                        if (!e) return 0;
                        let r = 0;
                        if (s(986939).A.isMobile) {
                            if (t instanceof Element && null !== a) {
                                let e = t.getElementsByClassName(s(828432).Smt)[0];
                                e instanceof Element && (r = e.clientHeight - a.getClientHeight() + e.scrollTop)
                            }
                        } else r = e.getBoundingClientRect().height + e.scrollTop;
                        let n = 0,
                            l = 0,
                            o = e.getElementsByClassName(s(828432).J5z);
                        for (let e = 0; e < o.length; e++) l += o[e].clientHeight;
                        let d = e.getElementsByClassName(s(828432).LF7);
                        for (let e = 0; e < d.length; e++) {
                            let t = d[e];
                            if (r - l > t.clientHeight / 2) n += 1, l += t.clientHeight;
                            else break
                        }
                        return n - i
                    })({
                        searchResultsSection: k.current,
                        modalBodyMenu: T.current,
                        searchFilterMenu: C.current,
                        actionItemCount: U
                    }), [U]),
                    $ = (0, s(682985).K8)(() => I.state.timesToRender, [I], {
                        debugName: "timesToRender"
                    }),
                    Q = (0, s(682985).K8)(() => s(930179).default.state.sessionId, []),
                    Y = (0, s(682985).K8)(() => s(930179).default.state.openedTimeMs, []),
                    J = (0, s(682985).O$)(s(661238).JP),
                    {
                        numKeystrokes: X,
                        numServerRequests: Z,
                        firstKeyStrokeTimeMs: ee,
                        numLocalRequests: et
                    } = (0, s(682985).K8)(() => ({
                        numKeystrokes: s(785385).default.state.numKeystrokes,
                        numServerRequests: s(785385).default.state.numServerRequests,
                        numLocalRequests: s(785385).default.state.numLocalRequests,
                        firstKeyStrokeTimeMs: s(785385).default.state.firstKeyStrokeTimeMs
                    }), []),
                    es = (0, s(682985).K8)(() => s(785385).default.state.hadMetaClick, []),
                    ea = (0, s(682985).K8)(() => (0, s(469440).y)({
                        localResults: L,
                        serverResults: N
                    }), [L, N]),
                    ei = null == ea ? void 0 : ea.length,
                    er = (0, s(109939).tz)(),
                    en = (0, a.useCallback)(e => {
                        let {
                            selectedResult: t,
                            index: a,
                            fromSidePeekPanel: i,
                            context: r,
                            openedTimeMs: n,
                            additionalResultsCount: l
                        } = e, {
                            serverEventProperties: o,
                            store: d
                        } = t, c = Date.now();
                        return { ...o,
                            queryText: o && o["server-query"] && o["server-query"].query ? o["server-query"].query : R,
                            context: r,
                            queryStringLength: R.length,
                            numQueryTokens: s(388400).qw(R).length,
                            hasFilters: (0, s(604214).J)(P),
                            activeFilters: P,
                            selectedItemIndex: a.global - (U + (l ? ? 0)),
                            selectedItemLocalIndex: {
                                section: a.local.section,
                                index: a.local.indexLocal
                            },
                            numKeystrokes: X,
                            fromSidePeekPanel: i,
                            isSidePeekPanelOpen: E,
                            isSidebarOpen: _,
                            timeToSelectMs: c - n,
                            timeFromFirstKeyStrokeToSelectMs: ee ? c - ee : c - n,
                            sources: null == t ? void 0 : t.sources,
                            localSources: [...(null == t ? void 0 : t.localSource) ? ? []],
                            hadMetaClick: es,
                            numResultsAboveFold: G(),
                            selectedSearchResultMetadata: y(t, W),
                            selectedSearchResultContent: void 0,
                            allSearchResultMetadata: null == ea ? void 0 : ea.slice(0, 50).map(e => y(e)),
                            totalSearchResultCount: ei,
                            searchSessionId: Q,
                            aiSessionId: void 0,
                            traceId: void 0,
                            searchSessionFlowNumber: Z,
                            originalPosition: null == t ? void 0 : t.originalPosition,
                            numLocalResults: O,
                            numTotalLocalResults: z,
                            totalLocalResultIds: V,
                            isMobile: s(986939).A.isMobile,
                            timeToRenderResult: $.get(d.id),
                            hasScrolled: J,
                            verificationState: (0, s(843641).i1)(t.store),
                            searchSource: "quick_find"
                        }
                    }, [R, P, U, X, E, _, ee, es, G, ea, ei, Q, Z, O, z, V, $, J, W]),
                    el = (0, a.useCallback)(({
                        index: e,
                        context: t,
                        selectedResult: a,
                        fromSidePeekPanel: i,
                        source: r,
                        additionalResultsCount: n
                    }) => {
                        if (j && Q && Y) {
                            var l;
                            l = { ...en({
                                    index: e,
                                    context: t,
                                    selectedResult: a,
                                    fromSidePeekPanel: i,
                                    openedTimeMs: Y,
                                    additionalResultsCount: n
                                }),
                                source: r,
                                searchSessionId: Q
                            }, (0, s(104310).u)({
                                event: {
                                    eventName: "search_copy_link",
                                    eventProperties: l
                                }
                            })
                        }
                    }, [en, c, j, Y, Q]),
                    eo = (0, a.useCallback)(() => {
                        if (!j) return;
                        clearTimeout(h.current), s(661238).Ay.update(e => ({ ...e,
                            hasScrolled: !1
                        }));
                        let e = M.current ? "search_modal_first_open_lag" : "search_modal_open_lag";
                        M.current && (M.current = !1), s(680007).default.mark(e)
                    }, [j]),
                    ed = (0, s(682985).K8)(() => "chat" === c.RouterStore.state.route.name, [c.RouterStore]),
                    ec = (0, a.useCallback)(() => {
                        s(635257).Yc({
                            resultStore: I,
                            secondaryResultStore: A
                        }), e.quickSearchMode ? (s(930179).default.closeAndResetMetricsState(), ed || (0, s(525844).U)({
                            environment: c
                        })) : s(930179).default.reset()
                    }, [c, ed, e.quickSearchMode, I, A]),
                    eu = (0, s(682985).K8)(() => I.state.serverEventProperties, [I]),
                    ep = (0, a.useCallback)(t => {
                        let {
                            selectedQueryResult: a
                        } = s(785385).default.state;
                        if (X > 0 && (Z > 0 || et > 0) && !a && !es && Q && Y && j) {
                            let e = Date.now(),
                                t = e - Y;
                            (0, s(72356).m)(c, { ...eu,
                                timeToAbandonMs: t,
                                timeFromFirstKeyStrokeToAbandonMs: ee ? e - ee : void 0,
                                numKeystrokes: X,
                                numResultsAboveFold: G(),
                                searchSessionId: Q,
                                searchSessionFlowNumber: Z,
                                hasScrolled: J,
                                numLocalResults: O,
                                numTotalLocalResults: z,
                                isMobile: s(986939).A.isMobile
                            })
                        }
                        "assistant" === D && (null == t ? void 0 : t.type) === "keydown" ? (s(661238).Ay.switchToSearchPane(), (0, s(143145).f)(!1)) : e.quickSearchMode ? (s(930179).default.closeAndResetMetricsState(), s(785385).default.reset(), a && !es && ec(), (0, s(909718).y)()) : (s(635257).st({
                            reset: !1
                        }), I.update(e => ({ ...e,
                            universalResults: void 0,
                            currentlySelectedUniversalSearchResultView: void 0
                        }))), "assistant" === D && s(547517).O.setAssistantLastViewedTime(), "" === R && "assistant" !== D && s(661238).Ay.reset(), h.current && clearTimeout(h.current), h.current = window.setTimeout(ec, o), !e.quickSearchMode && s(986939).A.isMobile && (0, s(713167).V)(), s(477810).VI({
                            environment: c,
                            skipAnimation: !0
                        }), s(785385).default.reset()
                    }, [I, c, X, Z, et, es, Q, Y, j, D, e.quickSearchMode, R, eu, ee, G, J, O, z, ec]),
                    em = (0, s(682985).K8)(() => s(838448).default.getActiveSessionId(), []),
                    eg = (0, s(682985).K8)(() => {
                        if (em) return s(838448).default.getSessionContext(em)
                    }, [em]),
                    eh = (0, a.useCallback)((t, a, i, r) => {
                        if (!e.quickSearchMode) return;
                        let n = s(48091).Ay;
                        if ("stopQueueingSubscriptions" in n && n.stopQueueingSubscriptions(), a) {
                            let e;
                            e = "tray-icon" === i ? "quick-search-tray-icon" : "shortcut" === i ? "quick-search-shortcut" : "debug-menu" === i ? "quick-search-debug-menu" : "quick-search";
                            let t = !j && a,
                                n = ("search" === D && r || "assistant" === D && !r) && !t;
                            r && s(886556).z.shouldShowSearchMenuItemAskAI() ? s(635257).sv({
                                environment: c,
                                from: n ? "command_search_switching_panes" : "command_search_shortcut",
                                device: c.device
                            }) : !0 !== r && (s(661238).Ay.update(e => ({ ...e,
                                mode: "search"
                            })), n && (e = "command_search_switching_panes", em && s(310639).assistantDependency.load().then(({
                                assistantAnalyticsActions: e
                            }) => {
                                e.trackAssistantClosed({
                                    from: "command_search_switching_panes",
                                    sessionContext: eg
                                })
                            }))), s(635257)._N({
                                environment: c,
                                analyticsFrom: e,
                                isQuickSearch: !0,
                                doNotTrackOpenSearchEvent: r
                            }), s(374176).default.afterNextFlush(() => (0, s(302545).L)())
                        } else ep()
                    }, [eg, em, c, ep, j, D, e.quickSearchMode]),
                    ef = (0, a.useCallback)(t => {
                        e.quickSearchMode && ep()
                    }, [ep, e.quickSearchMode]),
                    ey = (0, a.useCallback)(() => {
                        s(635257).Yc({
                            resultStore: I,
                            secondaryResultStore: A
                        }), e.quickSearchMode || (s(930179).default.reset(), (0, s(525844).U)({
                            environment: c
                        }))
                    }, [c, e.quickSearchMode, I, A]),
                    ev = (0, a.useCallback)(() => {
                        var t;
                        let a = (0, s(328765).S)() && (null == (t = (0, s(328765).S)()) ? void 0 : t.id);
                        w.current !== a && (w.current = a, ey(), w.current && s(728372).AppStoreCurrentUserStore.state && e.quickSearchMode && (0, s(297459).Z)())
                    }, [e.quickSearchMode, ey]),
                    ex = (0, a.useRef)(),
                    eb = (0, a.useRef)(),
                    eS = (0, a.useRef)(),
                    ew = (0, a.useRef)();
                (0, s(383953).l)(() => {
                    var t;
                    w.current = null == (t = (0, s(328765).S)()) ? void 0 : t.id, (0, s(328765).S)() && s(728372).AppStoreCurrentUserStore.state && e.quickSearchMode && (0, s(297459).Z)(), s(728372).default.addListener(ev), s(930179).default.addListener(eo), e.quickSearchMode ? eb.current = s(884972).JW.addListener(eh) : (ex.current = s(884972).RS.addListener(() => S(c, !1)), eS.current = s(884972).lS.addListener(() => {
                        "chat" !== c.RouterStore.state.route.name && S(c, !0)
                    })), d.addListener(ef), ew.current = s(884972).OW.addListener(() => {
                        s(635257)._N({
                            environment: c,
                            isNewElectronTab: !0,
                            analyticsFrom: "new-tab"
                        })
                    })
                }), (0, s(637030).X)(() => {
                    var e, t, a, i;
                    ec(), s(930179).default.removeListener(eo), d.removeListener(ef), s(728372).default.removeListener(ev), null == (e = eb.current) || e.call(eb), null == (t = ex.current) || t.call(ex), null == (a = eS.current) || a.call(eS), null == (i = ew.current) || i.call(ew), h && (clearTimeout(h.current), h.current = void 0)
                });
                let eM = (0, s(851468).o)(),
                    ej = (0, s(682985).K8)(() => s(930179).default.state.isNewElectronTab, []),
                    ek = (0, a.useCallback)(({
                        index: t,
                        event: a,
                        context: i,
                        selectedResult: r,
                        fromSidePeekPanel: n,
                        additionalResultsCount: l
                    }) => {
                        let o;
                        if (!j || !Y || !Q) return;
                        let d = (0, s(7029).V)(a);
                        "query_results" === i && (s(785385).default.update(e => ({ ...e,
                                selectedQueryResult: !0
                            })), I.update(e => ({ ...e,
                                selectedQueryResultQuery: B
                            }))),
                            function(e, t) {
                                (0, s(195857).DO_NOT_USE_trackLegacy)("select_search_item", t);
                                let {
                                    numKeystrokes: a,
                                    timeToSelectMs: i,
                                    selectedItemIndex: r,
                                    originalPosition: n,
                                    context: l,
                                    numLocalResults: o,
                                    searchSessionId: d,
                                    searchSessionFlowNumber: c,
                                    localSources: u,
                                    isMobile: p,
                                    timeToRenderResult: m
                                } = t, g = ((null == u ? void 0 : u.length) ? ? 0) > 0, h = (0, s(496722).a)(), f = !!(h && (0, s(471078).O)({
                                    environment: e,
                                    spaceId: h
                                }));
                                (0, s(456613).Z)(e, {
                                    numKeystrokes: a,
                                    timeToSelectMs: i,
                                    selectedItemIndex: r,
                                    numLocalResults: o,
                                    originalPosition: n,
                                    searchSessionFlowNumber: c,
                                    searchSessionId: d,
                                    context: l,
                                    isMultiplayer: f,
                                    isLocalResult: g,
                                    isMobile: p,
                                    timeToRenderResult: m
                                })
                            }(c, { ...en({
                                    index: t,
                                    context: i,
                                    selectedResult: r,
                                    fromSidePeekPanel: n,
                                    openedTimeMs: Y,
                                    additionalResultsCount: l
                                }),
                                searchSource: "quick_find",
                                searchSessionId: Q,
                                isMetaClick: !!d
                            });
                        let u = (null == eu ? void 0 : eu["server-queryId"]) ? ? (0, s(255139).mk)({
                            searchSessionId: Q,
                            searchSessionFlowNumber: Z
                        });
                        if ("recent_pages" === i ? o = s(254656).y8.SearchRecents : "query_results" === i ? o = s(254656).y8.SearchQuery : "tabs" === i || "new_page" === i ? o = s(254656).y8.SearchTabs : "action" === i ? o = s(254656).y8.SearchCustomAction : "offline_pages" === i ? o = s(254656).y8.SearchOfflinePages : (0, s(722371).HB)(i), c.device.isElectron && e.quickSearchMode) {
                            let e = (0, s(465708).yD)({
                                result: r,
                                queryId: u,
                                pageVisitSource: o,
                                scrollToBlockId: (0, s(196732).p)(r)
                            });
                            e && (0, s(916187).N)(e)
                        } else {
                            let e = (0, s(945247).$)({
                                result: r
                            });
                            if (!e) return;
                            (0, s(135422).q)({
                                searchResult: e,
                                environment: c,
                                pageVisitSource: o,
                                queryId: u,
                                openInNew: d,
                                electronTabSearch: {
                                    tabs: eM,
                                    isNewTab: !!ej
                                },
                                context: i
                            })
                        }
                        s(41901).A.setState({
                            queryId: u,
                            pageId: r.store.id,
                            timeEntered: new Date
                        }), d ? s(785385).default.update(e => ({ ...e,
                            hadMetaClick: !0
                        })) : ep()
                    }, [en, c, ep, ej, j, Z, Y, e.quickSearchMode, B, I, Q, eu, eM]),
                    eC = (0, a.useMemo)(() => ({
                        queryResultsSectionRef: k,
                        searchMobileFilterMenuRef: C,
                        modalBodyMenuRef: T,
                        handleSelectSearchResult: ek,
                        handleCopySearchItemLink: el,
                        handleQueryChange: b,
                        handlePopupOpen: v,
                        handlePopupClose: x,
                        searchResultStore: I,
                        secondarySearchResultStore: A,
                        defaultBodyFocusedResult: u,
                        isQuickSearch: e.quickSearchMode,
                        setDefaultBodyFocusedResult: g
                    }), [u, el, ek, e.quickSearchMode, I, A]),
                    eT = H ? "search_results" : "default_body",
                    eI = (i = (0, s(682985).K8)(() => (0, s(519048).CX)({
                        quickSearchMode: !1
                    }), []), n = (0, s(682985).K8)(() => (0, s(729247).I5)() ? "90vw" : p, []), (0, s(960253).I)(() => ({
                        wrapper: {
                            width: "100%",
                            minHeight: i.minHeight,
                            maxHeight: i.maxHeight,
                            transform: "translate3d(0,0,0)",
                            background: s(632079).Tj.popoverBackground,
                            maxWidth: n,
                            borderRadius: 12
                        }
                    }), [n, i]).wrapper);
                return e.quickSearchMode ? (0, l.jsx)(f, {
                    searchContentPaneType: eT,
                    quickSearchMode: e.quickSearchMode,
                    handleComponentClose: ep,
                    parentStore: e.parentStore,
                    staticContext: eC
                }) : (0, l.jsx)(s(521180).A, {
                    ariaLabel: er.formatMessage({
                        id: "search.modal.ariaLabel",
                        defaultMessage: "Search Notion"
                    }),
                    open: j,
                    onDismiss: ep,
                    modalStyle: eI,
                    modalBackgroundStyle: m,
                    modalIsWaxPaper: !0,
                    alignItems: "stretch",
                    disableAnimation: !s(986939).A.isMobile || (null == (t = c.mobileNative) ? void 0 : t.supportsNativeHomeOnPhone()) || !1,
                    renderContent: () => (0, l.jsx)(f, {
                        searchContentPaneType: eT,
                        quickSearchMode: e.quickSearchMode,
                        handleComponentClose: ep,
                        parentStore: e.parentStore,
                        staticContext: eC
                    })
                })
            }
            let h = {
                style0: {
                    position: "absolute",
                    height: s(515709).Ac,
                    width: "100%"
                }
            };

            function f(e) {
                let {
                    searchContentPaneType: t,
                    quickSearchMode: a,
                    handleComponentClose: i,
                    parentStore: r,
                    staticContext: n
                } = e, o = (0, s(682985).O$)(s(661238).B), d = (0, s(682985).O$)(s(661238).W5), p = a ? s(316258).wy.commandSearch : s(986939).A.isMobile ? s(316258).wy.mobileSearch : s(316258).wy.searchPane;
                return (0, l.jsx)(c.Provider, {
                    value: n,
                    children: (0, l.jsx)(u.Provider, {
                        value: {
                            parentStore: r
                        },
                        children: (0, l.jsxs)(s(316258).hP, {
                            surface: p,
                            children: [a && !o ? (0, l.jsx)("div", {
                                style: h.style0,
                                className: s(828432).sbV
                            }) : void 0, "search" === d ? (0, l.jsx)(s(519048).sb, {
                                quickSearchMode: a,
                                searchContentPaneType: t,
                                onClose: i
                            }) : (0, l.jsx)(s(656592).Yk, {
                                quickSearchMode: a,
                                searchContentPaneType: t,
                                onClose: i
                            })]
                        })
                    })
                })
            }

            function y(e, t) {
                let {
                    store: a,
                    highlight: i,
                    sources: r,
                    localSource: n
                } = e, l = t ? t.indexOf(a.id) : -1;
                return s(363256).e.withListenerIgnored(() => {
                    var t, o, d, c, u;
                    return {
                        blockId: a.id,
                        blockType: a.getType(),
                        lowestNavigableAncestorId: null == (t = a.getNavigableBlockStore()) ? void 0 : t.id,
                        depth: (0, s(457915).g)(a).length,
                        matchesText: !!(null == i ? void 0 : i.text),
                        matchesPathText: !!((null == i ? void 0 : i.pathText) || (null == i ? void 0 : i.title)),
                        matchesTitle: !!(null == i ? void 0 : i.title),
                        isNavigable: a.isNavigableBlock(),
                        lastEditedTime: a.getLastEditedTime(),
                        isTeamArchived: null == (o = (0, s(297311).U)(a)) ? void 0 : o.isArchived(),
                        sources: r,
                        localSource: [...n ? ? []],
                        badges: (null == (d = e.badges) ? void 0 : d.map(e => e.type)) ? ? [],
                        isCollectionPropertyMatch: (null == (c = e.matchedCollectionProperties) ? void 0 : c.collectionText) !== void 0,
                        isCollectionPropertyHighlight: (null == (u = e.highlight) ? void 0 : u.collectionText) !== void 0,
                        featureGroups: e.featureGroups,
                        allMatchingLocalResultsIndex: l >= 0 ? l : void 0
                    }
                })
            }

            function v() {
                s(661238).Ay.setIsAnyPopupOpen(!0)
            }

            function x() {
                s(661238).Ay.setIsAnyPopupOpen(!1)
            }

            function b(e) {
                "" === e ? s(661238).Ay.resetQuery({
                    resetFilters: !1
                }) : (s(785385).default.update(e => ({ ...e,
                    numKeystrokes: e.numKeystrokes + 1
                })), s(661238).Ay.updateQueryText(e), "full-content" === s(930179).default.state.searchMode && s(930179).default.update(e => ({ ...e,
                    searchMode: "nav-local-only"
                })))
            }

            function S(e, t) {
                t && s(661238).Ay.update(e => ({ ...e,
                    mode: "assistant"
                })), s(635257)._N({
                    environment: e,
                    analyticsFrom: "keyboard-shortcut-quick-search-hotkey",
                    isQuickSearch: !1
                })
            }
        },
        258888: (e, t, s) => {
            s.d(t, {
                T: () => n,
                a: () => o
            }), s(944114), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = (0, s(109939).YK)({
                    allWithArchived: {
                        id: "searchContentStatusFilter.allWithArchived",
                        defaultMessage: "All pages (including archived)"
                    },
                    allWithoutArchived: {
                        id: "searchContentStatusFilter.allWithoutArchived",
                        defaultMessage: "All pages (excluding archived)"
                    },
                    verifiedOnly: {
                        id: "searchContentStatusFilter.verifiedOnly",
                        defaultMessage: "Verified pages only"
                    },
                    archivedOnly: {
                        id: "searchContentStatusFilter.archivedOnly",
                        defaultMessage: "Archived pages only"
                    }
                }),
                n = "all_without_archived",
                l = {
                    icon: {
                        width: 16,
                        fill: "currentColor"
                    },
                    check: {
                        color: s(632079).Tj.text.primary
                    },
                    sectionMenuItem: {
                        display: "flex"
                    }
                };

            function o(e) {
                let {
                    mode: t,
                    title: o,
                    value: d,
                    onChange: c,
                    onMenuDismiss: u,
                    onMenuOpen: p,
                    isRemovable: m,
                    onRemove: g,
                    autoOpen: h
                } = e, f = (0, s(109939).tz)(), y = (0, a.useMemo)(() => [{
                    key: "all_without_archived",
                    value: "all_without_archived",
                    title: f.formatMessage(r.allWithoutArchived)
                }, {
                    key: "all_with_archived",
                    value: "all_with_archived",
                    title: f.formatMessage(r.allWithArchived)
                }, {
                    key: "verified_only",
                    value: "verified_only",
                    title: f.formatMessage(r.verifiedOnly)
                }, {
                    key: "archived_only",
                    value: "archived_only",
                    title: f.formatMessage(r.archivedOnly)
                }], [f]), v = d ? ? n, [x, b] = (0, a.useState)(!1), S = (0, s(682985).uB)(void 0, s(419110).$), w = (0, a.useCallback)(e => {
                    c(e), b(!1), null == u || u()
                }, [c, u]), M = (0, a.useCallback)(() => {
                    b(!0), null == p || p()
                }, [p]), j = (0, a.useCallback)(() => {
                    b(!1), null == u || u()
                }, [u]), k = (0, a.useCallback)(() => {
                    b(!1), null == g || g()
                }, [g]), C = (0, a.useRef)(!1);
                (0, a.useEffect)(() => {
                    !h || x || C.current || (M(), C.current = !0)
                }, [h, x, M]);
                let T = (0, a.useCallback)(e => e === v ? (0, i.jsx)(s(16275).I, {
                        icon: s(971730).checkmarkSmallIcon,
                        size: "sm",
                        style: l.check
                    }) : (0, i.jsx)("div", {
                        style: l.check
                    }), [v]),
                    I = (0, a.useMemo)(() => ({
                        key: "menuOptions",
                        items: y.map(e => ({
                            key: e.key,
                            action: () => w(e.value),
                            render: t => (0, i.jsx)(s(95582).A, { ...t,
                                icon: T(e.value),
                                title: e.title
                            })
                        })),
                        render: e => (0, i.jsx)(s(844565).A, { ...e,
                            title: null,
                            loading: !1
                        })
                    }), [y, w, T]),
                    A = (0, a.useMemo)(() => {
                        if (m && g) return {
                            key: "removeSection",
                            items: [{
                                key: "remove",
                                action: k,
                                render: e => (0, i.jsx)(s(95582).A, { ...e,
                                    title: (0, i.jsx)(s(109939).sA, {
                                        defaultMessage: "Remove",
                                        id: "searchContentStatusFilter.removeButton.label"
                                    })
                                })
                            }],
                            render: e => (0, i.jsx)(s(844565).A, { ...e,
                                topBorder: !0
                            })
                        }
                    }, [m, g, k]),
                    B = (0, a.useMemo)(() => {
                        let e = [I];
                        return A && e.push(A), e
                    }, [I, A]),
                    R = (0, a.useCallback)(() => (0, i.jsx)(s(747369).A, {
                        menuType: s(649476).gu.Popup,
                        maxHeight: 250,
                        width: 260,
                        children: (0, i.jsx)(s(558045).A, {
                            type: s(558045).O.Vertical,
                            store: S,
                            initialFocus: 0,
                            sections: B
                        })
                    }), [S, B]),
                    P = (0, i.jsx)(s(97726).n, {
                        on: void 0 !== d && d !== n,
                        icon: (0, i.jsx)(s(16275).I, {
                            icon: s(900822).badgeCheckIcon,
                            fitToViewBox: "horizontal",
                            style: l.icon
                        }),
                        title: (0, i.jsx)("span", {
                            children: o
                        }),
                        onClick: M
                    });
                return s(454860).C.Pill, (0, i.jsx)(s(543588).A, {
                    style: l.sectionMenuItem,
                    children: (0, i.jsx)(s(182718).zD, {
                        popupType: s(423291).n.Popup,
                        originGap: 4,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        open: x,
                        content: R,
                        onDismiss: j,
                        keepFocus: !0,
                        trapFocus: !0,
                        preventScaleTransition: !0,
                        children: P
                    })
                })
            }
        },
        297459: (e, t, s) => {
            s.d(t, {
                Z: () => a
            });

            function a() {
                var e;
                null === s(775657).electronApi || void 0 === s(775657).electronApi || null == (e = s(775657).electronApi.quickSearchReady) || e.call(s(775657).electronApi)
            }
        },
        302545: (e, t, s) => {
            s.d(t, {
                L: () => a
            });

            function a() {
                var e;
                null === s(775657).electronApi || void 0 === s(775657).electronApi || null == (e = s(775657).electronApi.quickSearchRenderCompleted) || e.call(s(775657).electronApi)
            }
        },
        312688: (e, t, s) => {
            s.d(t, {
                l: () => r
            });
            var a = s(296540),
                i = s(474848);

            function r(e) {
                let {
                    messageKey: t,
                    button: r
                } = e, n = (0, s(533992).v3)();
                (0, a.useEffect)(() => {
                    s(357709).DL(n, {
                        callout_key: t,
                        placement_key: "Tooltip"
                    })
                }, [n, t]);
                let l = (0, a.useCallback)(e => {
                        s(357709).Y5(n, {
                            callout_key: t,
                            click_type: "primary_cta",
                            placement_key: "Tooltip"
                        }), e && e()
                    }, [n, t]),
                    o = (0, a.useCallback)(() => {
                        s(357709).Sq(n, {
                            callout_key: t,
                            dismiss_type: "announcement_card_dismiss",
                            placement_key: "Tooltip"
                        }), (0, s(59579).a)(n, t)
                    }, [n, t]);
                return (0, i.jsx)(s(725571).S, { ...e,
                    button: { ...r,
                        onClick: () => {
                            l(r.onClick)
                        }
                    },
                    onDismiss: o
                })
            }
        },
        330551: (e, t, s) => {
            s.d(t, {
                S: () => w
            }), s(944114), s(898992), s(354520), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = {
                fontSize: 14,
                borderRadius: 12,
                paddingInlineStart: 5,
                paddingInlineEnd: 9
            };

            function n(e) {
                let {
                    availableFilters: t,
                    onAddFilter: n,
                    onMenuOpen: d,
                    onMenuClose: c
                } = e, u = (0, s(109939).tz)(), [p, m] = (0, a.useState)(!1), g = (0, a.useCallback)(() => {
                    m(!0), null == d || d()
                }, [d]), h = (0, a.useCallback)(() => {
                    m(!1), null == c || c()
                }, [c]), f = (0, a.useCallback)(e => {
                    n(e), h()
                }, [n, h]), y = (0, a.useMemo)(() => o.filter(e => t.includes(e.key)).map(e => ({
                    key: e.key,
                    action: () => f(e.key),
                    render: t => (0, i.jsx)(s(95582).A, { ...t,
                        icon: (0, i.jsx)(s(16275).I, {
                            icon: e.icon
                        }),
                        title: u.formatMessage(e.labelMessage)
                    })
                })), [t, f, u]), v = (0, a.useCallback)(() => (0, i.jsx)(s(747369).A, {
                    menuType: s(649476).gu.Popup,
                    maxHeight: 250,
                    width: 200,
                    children: (0, i.jsx)(s(558045).A, {
                        type: s(558045).O.Vertical,
                        initialFocus: 0,
                        sections: [{
                            key: "filters",
                            items: y
                        }]
                    })
                }), [y]);
                return 0 === t.length ? null : (0, i.jsx)(s(182718).zD, {
                    popupType: s(182718).nl.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    open: p,
                    content: v,
                    onDismiss: h,
                    trapFocus: !0,
                    children: (0, i.jsx)(s(988022).p, {
                        iconLeading: {
                            icon: s(638501).plusSmallIcon,
                            size: "xs"
                        },
                        size: "sm",
                        colorVariant: "tertiary",
                        hovered: p,
                        onClick: g,
                        style: r,
                        children: u.formatMessage(l.addFilter)
                    })
                })
            }
            let l = (0, s(109939).YK)({
                    addFilter: {
                        id: "search.filterBar.addFilter",
                        defaultMessage: "Filter"
                    },
                    dateFilter: {
                        id: "search.filterBar.addFilter.date",
                        defaultMessage: "Date"
                    },
                    teamspaceFilter: {
                        id: "search.filterBar.addFilter.teamspace",
                        defaultMessage: "Teamspace"
                    },
                    contentStatusFilter: {
                        id: "search.filterBar.addFilter.contentStatus",
                        defaultMessage: "Content status"
                    }
                }),
                o = [{
                    key: "dateFilter",
                    labelMessage: l.dateFilter,
                    icon: s(998172).D
                }, {
                    key: "teamsFilter",
                    labelMessage: l.teamspaceFilter,
                    icon: s(767816).teamspaceIcon
                }, {
                    key: "contentStatusFilter",
                    labelMessage: l.contentStatusFilter,
                    icon: s(900822).badgeCheckIcon
                }],
                d = {
                    title: {
                        maxWidth: 220,
                        ...s(699422).RC
                    }
                };

            function c(e) {
                let {
                    filterUIName: t,
                    filters: a,
                    parentStore: r
                } = e, n = (0, s(682985).K8)(() => {
                    switch (t) {
                        case "personFilter":
                            let e, i, n;
                            return l = a, o = r, e = l.createdBy, i = s(962299).A.getIntl(), n = s(381453).oE(e.map(e => {
                                let t = s(807825).L.createChildStore(o, {
                                    table: s(832375).oo9,
                                    id: e
                                });
                                return (0, s(413818).c6)(i, t.getModel())
                            })), (0, s(405843).G)(n, u);
                        case "teamsFilter":
                        case "dev_notInTeamFilter":
                            var l, o, d, c, p = a,
                                m = r;
                            let g = (0, s(821603).fg)(p.inTeams);
                            if (!g) return [];
                            let h = s(381453).oE(g.map(e => s(681735).h.createChildStore(m, {
                                table: s(832375).yKj,
                                id: e
                            }).getName()));
                            return (0, s(405843).G)(h, u);
                        case "pageFilter":
                        case "dev_notInPageFilter":
                            let f, y;
                            return d = a, c = r, f = d.ancestors, y = s(381453).oE(f.map(e => {
                                let t = s(970831).B.createChildStore(c, {
                                    table: s(832375).evP,
                                    id: e
                                });
                                return t.isDefined() ? t.getModel().getRenderTitle({
                                    getRecordModel: t.getRecordModel,
                                    userTimeZone: (0, s(714350).P)(),
                                    intl: s(962299).A.getIntl()
                                }) : ""
                            })), (0, s(405843).G)(y, u);
                        case "dateFilter":
                            return function(e) {
                                let t, a, i = s(962299).A.getIntl(),
                                    r = (t = s(264093).z.createdTime(e.createdTime), a = s(264093).z.lastEditedTime(e.lastEditedTime), t ? "createdTime" : a ? "lastEditedTime" : void 0);
                                return "createdTime" === r ? (0, s(752533).t)(e.createdTime, i) : "lastEditedTime" === r ? (0, s(752533).t)(e.lastEditedTime, i) : ""
                            }(a);
                        case "titleToggle":
                        case "contentStatusFilter":
                            return [];
                        default:
                            (0, s(722371).HB)(t)
                    }
                }, [r, t, a]);
                return (0, i.jsx)("div", {
                    style: d.title,
                    children: (0, i.jsx)(s(109939).sA, {
                        defaultMessage: "{filterName}{colon} {filterOperator} {filterValues}",
                        id: "search.filterBarFilter.title",
                        values: {
                            filterName: function(e) {
                                switch (e) {
                                    case "personFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "search.filterMenu.moreFilters.person",
                                            defaultMessage: "Created by"
                                        });
                                    case "teamsFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "search.filterMenu.moreFilters.inTeams",
                                            defaultMessage: "Teamspace"
                                        });
                                    case "pageFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "search.filterMenu.moreFilters.inPage",
                                            defaultMessage: "In"
                                        });
                                    case "dateFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "search.filterMenu.moreFilters.dateFilterLabel",
                                            defaultMessage: "Date"
                                        });
                                    case "titleToggle":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "search.filterMenu.onlyMatchTitlesToggle.label",
                                            defaultMessage: "Title only"
                                        });
                                    case "dev_notInPageFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "[DO NOT TRANSLATE].search.filterMenu.notInPageFilter.label",
                                            defaultMessage: "[dev] Not in page"
                                        });
                                    case "dev_notInTeamFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "[DO NOT TRANSLATE].search.filterMenu.notInTeamFilter.label",
                                            defaultMessage: "[dev] Not in teamspace"
                                        });
                                    case "contentStatusFilter":
                                        return (0, i.jsx)(s(109939).sA, {
                                            id: "searchContentStatusFilter.filterTitle",
                                            defaultMessage: "Content status"
                                        })
                                }(0, s(722371).HB)(e)
                            }(t),
                            filterOperator: 0 === n.length ? void 0 : function(e) {
                                switch (e) {
                                    case "personFilter":
                                    case "teamsFilter":
                                    case "pageFilter":
                                    case "dev_notInPageFilter":
                                    case "dev_notInTeamFilter":
                                    case "dateFilter":
                                    case "titleToggle":
                                    case "contentStatusFilter":
                                        return
                                }(0, s(722371).HB)(e)
                            }(t),
                            filterValues: n,
                            colon: 0 === n.length ? void 0 : ":"
                        }
                    })
                })
            }

            function u(e) {
                return ", "
            }
            let p = (0, s(109939).YK)({
                    filterTitle: {
                        id: "searchContentStatusFilter.filterTitle",
                        defaultMessage: "Content status"
                    }
                }),
                m = "SearchFilterSettings",
                g = {
                    starting: void 0,
                    ending: void 0
                },
                h = ["titleToggle", "contentStatusFilter", "personFilter", "teamsFilter", "pageFilter", "dateFilter", "dev_notInPageFilter", "dev_notInTeamFilter"],
                f = {
                    scroller: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        paddingTop: 10,
                        paddingInlineEnd: 12,
                        paddingBottom: 10,
                        paddingInlineStart: 12
                    },
                    scrollerContainer: {
                        position: "relative",
                        flexGrow: 0,
                        overflow: "hidden"
                    },
                    draggableList: {
                        display: "flex",
                        flexShrink: 0
                    },
                    divider: {
                        height: 16,
                        width: 1,
                        borderRadius: 1,
                        backgroundColor: s(632079).Tj.border.secondary
                    }
                },
                y = ["dateFilter", "teamsFilter", "contentStatusFilter"],
                v = ["pageFilter", "personFilter", "titleToggle"];

            function x(e) {
                return s(264093).z.lastEditedTime(e.lastEditedTime) || s(264093).z.createdTime(e.createdTime)
            }

            function b(e) {
                return s(264093).z.inTeams(e.inTeams)
            }

            function S(e) {
                return s(264093).z.contentStatusFilter(e.contentStatusFilter)
            }

            function w(e) {
                let {
                    filters: t,
                    onFiltersChange: r,
                    sort: l,
                    onSortChange: o,
                    parentStore: d,
                    onPopupOpen: u,
                    onPopupClose: w
                } = e, M = (0, s(345776).T)(), j = !s(986939).A.isMobile, [k, C] = (0, a.useState)(() => {
                    let e = [];
                    return x(t) && e.push("dateFilter"), b(t) && e.push("teamsFilter"), S(t) && e.push("contentStatusFilter"), e
                }), T = x(t), I = b(t), A = S(t);
                (0, a.useEffect)(() => {
                    C(e => {
                        let t = [];
                        return (T && !e.includes("dateFilter") && t.push("dateFilter"), I && !e.includes("teamsFilter") && t.push("teamsFilter"), A && !e.includes("contentStatusFilter") && t.push("contentStatusFilter"), t.length > 0) ? [...e, ...t] : e
                    })
                }, [T, I, A]);
                let [B, R] = (0, a.useState)(void 0), P = (0, a.useCallback)(e => {
                    C(t => t.includes(e) ? t : [...t, e]), R(e)
                }, []), H = (0, a.useCallback)(e => {
                    C(t => t.filter(t => t !== e)), "dateFilter" === e ? r({
                        lastEditedTime: {
                            starting: void 0,
                            ending: void 0
                        },
                        createdTime: {
                            starting: void 0,
                            ending: void 0
                        }
                    }) : "teamsFilter" === e ? r({
                        inTeams: void 0
                    }) : "contentStatusFilter" === e && r({
                        contentStatusFilter: void 0
                    })
                }, [r]), _ = (0, a.useCallback)(() => {
                    R(void 0)
                }, []), [E, D] = (0, a.useState)(() => {
                    let e = s(255482).K.get({
                            userId: M,
                            key: m
                        }),
                        t = null == e ? void 0 : e.filterOrder;
                    if (!t) return h;
                    let a = h.filter(e => !t.includes(e));
                    return [...t, ...a]
                }), F = (0, s(682985).K8)(() => s(930179).default.state.isPublicPageSearch, []), N = (0, s(682985).K8)(() => (0, s(350277).z)({
                    spaceStore: (0, s(328765).S)()
                }) > 0 && !F, [F]), L = !F, O = (0, a.useCallback)(e => t => r({
                    [e]: t
                }), [r]), z = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: a,
                        onMenuOpen: r
                    } = e;
                    if (L) return (0, i.jsx)(s(583490).A, {
                        mode: s(454860).C.Pill,
                        focused: !1,
                        title: (0, i.jsx)(c, {
                            filterUIName: "personFilter",
                            filters: t,
                            parentStore: d
                        }),
                        parentStore: d,
                        userIds: t.createdBy,
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        onChange: O("createdBy")
                    })
                }, [L, d, t, O]), K = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        isRemovable: n,
                        onFilterRemove: l,
                        autoOpen: o
                    } = e;
                    return N && (0, i.jsx)(s(231246).SZ, {
                        mode: s(454860).C.Pill,
                        focused: !1,
                        title: (0, i.jsx)(c, {
                            filterUIName: "teamsFilter",
                            filters: t,
                            parentStore: d
                        }),
                        parentStore: d,
                        teamIds: t.inTeams,
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        onChange: O("inTeams"),
                        isRemovable: n,
                        onFilterRemove: l,
                        autoOpen: o
                    })
                }, [d, t, O, N]), q = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: a,
                        onMenuOpen: r
                    } = e;
                    return (0, i.jsx)(s(331436).E, {
                        mode: s(454860).C.Pill,
                        focused: !1,
                        title: (0, i.jsx)(c, {
                            filterUIName: "pageFilter",
                            filters: t,
                            parentStore: d
                        }),
                        parentStore: d,
                        blockIds: t.ancestors,
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        onChange: O("ancestors"),
                        peopleBlocksToInclude: "collection_view_page"
                    })
                }, [d, t, O]), V = (0, a.useCallback)(() => null, [d, t, O, !1]), W = (0, a.useCallback)(() => null, [d, t, O, !1]), U = (0, a.useMemo)(() => s(381453).Im(t.createdTime) || s(381453).n4(t.createdTime, g) ? "lastEditedTime" : "createdTime", [t.createdTime]), G = "createdTime" === U ? t.createdTime : t.lastEditedTime, $ = (0, a.useCallback)((e, t) => r({
                    [e]: t
                }), [r]), Q = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        isRemovable: n,
                        onRemove: l,
                        autoOpen: o
                    } = e, u = {
                        mode: s(454860).C.Pill,
                        focused: !1,
                        title: (0, i.jsx)(c, {
                            filterUIName: "dateFilter",
                            filters: t,
                            parentStore: d
                        }),
                        icon: s(998172).D,
                        initialValue: G,
                        dateFilterType: U,
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        onChange: $,
                        isRemovable: n,
                        onRemove: l,
                        autoOpen: o
                    };
                    return (0, i.jsx)(s(549920).m, { ...u
                    })
                }, [U, G, t, d, $]), Y = (0, a.useCallback)(() => !s(986939).A.isMobile && (0, i.jsx)(s(492205).J, {
                    mode: s(454860).C.Pill,
                    focused: !1,
                    title: (0, i.jsx)(c, {
                        filterUIName: "titleToggle",
                        filters: t,
                        parentStore: d
                    }),
                    icon: s(517259).a,
                    value: t.navigableBlockContentOnly || !1,
                    onChange: O("navigableBlockContentOnly")
                }), [t, d, O]), J = (0, s(109939).tz)(), X = (0, s(903937).Q)(), Z = (0, a.useCallback)(e => {
                    r({
                        contentStatusFilter: e
                    })
                }, [r]), ee = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        isRemovable: n,
                        onRemove: l,
                        autoOpen: o
                    } = e;
                    return X ? (0, i.jsx)(s(258888).a, {
                        mode: s(454860).C.Pill,
                        title: J.formatMessage(p.filterTitle),
                        value: t.contentStatusFilter,
                        onChange: Z,
                        onMenuDismiss: a,
                        onMenuOpen: r,
                        isRemovable: n,
                        onRemove: l,
                        autoOpen: o
                    }) : null
                }, [X, t.contentStatusFilter, Z, J]), et = (0, a.useCallback)(e => {
                    D(e), s(255482).K.set({
                        userId: M,
                        key: m,
                        value: {
                            filterOrder: e
                        }
                    })
                }, [M]), es = (0, a.useMemo)(() => ({
                    onMenuOpen: u || (() => {}),
                    onMenuDismiss: w || (() => {})
                }), [u, w]), ea = (0, a.useMemo)(() => y.filter(e => !k.includes(e) && ("teamsFilter" === e ? N : "contentStatusFilter" !== e || X)), [k, X, N]), ei = (0, a.useMemo)(() => {
                    let e = e => () => {
                            H(e)
                        },
                        t = () => {
                            _(), es.onMenuDismiss()
                        };
                    return {
                        titleToggle: Y(),
                        personFilter: z(es),
                        teamsFilter: k.includes("teamsFilter") ? K({ ...es,
                            onMenuDismiss: t,
                            isRemovable: !0,
                            onFilterRemove: e("teamsFilter"),
                            autoOpen: "teamsFilter" === B
                        }) : null,
                        pageFilter: q(es),
                        dateFilter: k.includes("dateFilter") ? Q({ ...es,
                            onMenuDismiss: t,
                            isRemovable: !0,
                            onRemove: e("dateFilter"),
                            autoOpen: "dateFilter" === B
                        }) : null,
                        contentStatusFilter: k.includes("contentStatusFilter") ? ee({ ...es,
                            onMenuDismiss: t,
                            isRemovable: !0,
                            onRemove: e("contentStatusFilter"),
                            autoOpen: "contentStatusFilter" === B
                        }) : null,
                        dev_notInPageFilter: V(),
                        dev_notInTeamFilter: W()
                    }
                }, [Y, z, K, q, Q, ee, V, W, es, k, B, H, _]), er = (0, a.useMemo)(() => ({
                    titleToggle: Y(),
                    personFilter: z(es),
                    teamsFilter: K(es),
                    pageFilter: q(es),
                    dateFilter: Q(es),
                    contentStatusFilter: ee(es),
                    dev_notInPageFilter: V(),
                    dev_notInTeamFilter: W()
                }), [Y, z, K, q, Q, ee, V, W, es]), en = (0, a.useCallback)(() => (0, i.jsx)(s(66467).Ay, {
                    direction: "horizontal",
                    keys: E,
                    disableVerticalEdgeScroll: !0,
                    disableHorizontalEdgeScroll: !0,
                    renderKey: e => er[e],
                    style: f.draggableList,
                    gap: 6,
                    onDrop: et
                }), [E, er, et]), el = (0, a.useCallback)(() => {
                    let e = E.filter(e => (0, s(722371).Xk)(v, e));
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s(66467).Ay, {
                            direction: "horizontal",
                            keys: e,
                            disableVerticalEdgeScroll: !0,
                            disableHorizontalEdgeScroll: !0,
                            renderKey: e => ei[e],
                            style: f.draggableList,
                            gap: 6,
                            onDrop: et
                        }), k.map(e => (0, i.jsx)(a.Fragment, {
                            children: ei[e]
                        }, e)), (0, i.jsx)(n, {
                            availableFilters: ea,
                            onAddFilter: P,
                            onMenuOpen: es.onMenuOpen,
                            onMenuClose: es.onMenuDismiss
                        })]
                    })
                }, [E, k, ei, et, ea, P, es]), eo = (0, a.useCallback)(e => {
                    let {
                        onMenuDismiss: t,
                        onMenuOpen: a
                    } = e;
                    return (0, i.jsxs)(s(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, i.jsx)(s(927829).X, {
                            sort: l,
                            onSortChange: o,
                            onMenuOpen: a,
                            onMenuDismiss: t
                        }), (0, i.jsx)("div", {
                            style: f.divider
                        })]
                    })
                }, [l, o]);
                return j ? (0, i.jsx)(s(4458).fI, {
                    alignItems: "center",
                    children: (0, i.jsx)("div", {
                        style: f.scrollerContainer,
                        children: (0, i.jsx)(s(126767).H, {
                            type: s(644154).A.X,
                            style: f.scroller,
                            children: el()
                        })
                    })
                }) : (0, i.jsx)(s(4458).fI, {
                    alignItems: "center",
                    children: (0, i.jsx)("div", {
                        style: f.scrollerContainer,
                        children: (0, i.jsxs)(s(126767).H, {
                            type: s(644154).A.X,
                            style: f.scroller,
                            children: [(0, i.jsx)(i.Fragment, {
                                children: eo(es)
                            }), (0, i.jsx)(i.Fragment, {
                                children: en()
                            })]
                        })
                    })
                })
            }
        },
        339072: (e, t, s) => {
            s.d(t, {
                w: () => i
            }), s(296540);
            var a = s(474848);

            function i(e) {
                let {
                    actor: t
                } = e, i = {
                    size: e.size ? ? 14,
                    style: {
                        marginInlineEnd: 2,
                        ...e.style
                    }
                };
                return (0, s(197018).H3)(t) ? (0, a.jsx)(s(31319).A, {
                    botValue: t.asActor,
                    ...i
                }) : (0, s(197018).ps)(t) ? (0, a.jsx)(s(321753).A, {
                    userValue: t.asActor,
                    ...i
                }) : void(0, s(722371).HB)(t)
            }
        },
        394673: (e, t, s) => {
            s.d(t, {
                A: () => n
            }), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = {
                skeletonRect: {
                    borderRadius: 4,
                    backgroundColor: s(632079).Tj.background.tertiaryTranslucent
                }
            };

            function n({
                paragraphs: e
            }) {
                let t = null == e ? void 0 : e.map((e, t) => {
                    let n = {
                            height: e.lineHeight,
                            marginTop: e.lineMargin,
                            marginBottom: e.lineMargin
                        },
                        l = {
                            marginTop: e.sectionMargin,
                            marginBottom: e.sectionMargin
                        },
                        o = [...Array(e.repeat || 1)].map((t, a) => (0, i.jsx)("div", {
                            style: l,
                            children: e.sectionWidths.map((e, t) => (0, i.jsx)(s(795830).P, {
                                style: { ...r.skeletonRect,
                                    ...n,
                                    width: `${e}%`
                                }
                            }, t))
                        }, a));
                    return (0, i.jsxs)(a.Fragment, {
                        children: [" ", o, " "]
                    }, t)
                });
                return (0, i.jsxs)(i.Fragment, {
                    children: [" ", t, " "]
                })
            }
        },
        413821: (e, t, s) => {
            s.d(t, {
                U: () => r
            }), s(581454);
            var a = s(296540),
                i = s(474848);

            function r(e) {
                var t;
                let {
                    onClick: r
                } = e, o = (0, s(109939).tz)(), d = (0, s(533992).v3)(), c = (0, s(815048).fJ)(s(929925).Aw), u = (0, s(682985).K8)(() => (0, s(745452).p)().function, []), p = (0, s(682985).K8)(() => {
                    var e;
                    return ((null == (e = c.value) ? void 0 : e.templatePickerItems.getSuggestedTemplatesForSearch({
                        persona: u,
                        environment: d
                    }).slice(0, 3)) ? ? []).map(e => ({
                        key: e.name,
                        action: () => {
                            r(), e.onClick()
                        },
                        render: t => (0, i.jsx)(n, {
                            template: e,
                            args: t
                        })
                    }))
                }, [null == (t = c.value) ? void 0 : t.templatePickerItems, u, d, r]), m = (0, s(682985).K8)(() => !(0, s(817599).q)(d) && p.length > 0, [d, p]);
                return (0, a.useMemo)(() => {
                    if (m) return {
                        items: p,
                        key: "templates",
                        render: e => a.createElement(s(844565).A, { ...e,
                            title: o.formatMessage(l.templateSuggestions)
                        }, e.children)
                    }
                }, [m, p, o])
            }

            function n(e) {
                let {
                    template: t,
                    args: a
                } = e, r = (0, s(120021).eD)({
                    view: "recents"
                });
                return (0, i.jsx)(s(95582).A, { ...a,
                    icon: t.icon,
                    title: (0, i.jsx)(s(111010).D, {
                        styleKey: "bodyMedium",
                        children: t.name
                    }),
                    style: r.outerStyle,
                    buttonStyle: r.buttonStyle,
                    right: (0, i.jsx)("span", {
                        style: r.enterIconStyle,
                        children: (0, i.jsx)(s(16275).I, {
                            icon: s(750748).arrowTurnDownLeftSmallIcon,
                            size: "xs",
                            colorVariant: "secondary"
                        })
                    })
                })
            }
            let l = (0, s(109939).YK)({
                templateSuggestions: {
                    id: "search.templateSuggestions.header",
                    defaultMessage: "Start with a template"
                }
            })
        },
        418659: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowUpDownSmallIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.67 2.48 12.66 11.03",
                    directional: !0,
                    svg: (0, s(474848).jsx)("path", {
                        d: "M11.349 2.672a.625.625 0 0 0-.884 0L7.666 5.471a.625.625 0 1 0 .884.883l1.732-1.73v8.262a.625.625 0 1 0 1.25 0V4.623l1.73 1.731a.625.625 0 0 0 .885-.883zM5.093 2.49a.625.625 0 0 0-.625.624v8.263l-1.73-1.731a.625.625 0 1 0-.885.883l2.798 2.799c.244.244.64.244.884 0l2.798-2.798a.625.625 0 0 0-.883-.884l-1.732 1.73V3.115a.625.625 0 0 0-.625-.625"
                    })
                },
                i = (0, s(104509).wt)("arrowUpDownSmall", a, "small")
        },
        428401: (e, t, s) => {
            s.d(t, {
                a: () => r,
                F: () => n
            }), s(581454);
            var a = s(296540);
            s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698);
            var i = () => s(682956);

            function r(e) {
                let {
                    spaceStore: t,
                    environment: a
                } = e;
                if (t) return {
                    shouldShow: !1,
                    pageId: void 0
                };
                let i = (0, s(965142).s)();
                if (!i) return {
                    shouldShow: !1,
                    pageId: void 0
                };
                let {
                    hasPublicAccessPermission: r
                } = (0, s(773438).E)(a);
                return {
                    shouldShow: r,
                    pageId: i
                }
            }

            function n(e) {
                let {
                    buildMenuListItem: t
                } = e ? ? {}, r = (0, s(533992).v3)(), n = (0, s(109939).tz)(), {
                    isPublicPageContext: o,
                    pageId: d
                } = (0, s(682985).K8)(() => {
                    let e = (0, s(965142).s)();
                    if (!e) return {
                        isPublicPageContext: !1,
                        pageId: void 0
                    };
                    let {
                        hasPublicAccessPermission: t
                    } = (0, s(773438).E)(r);
                    return {
                        isPublicPageContext: t,
                        pageId: t ? e : void 0
                    }
                }, [r]), c = (0, a.useMemo)(() => {
                    if (o && d) return new(s(970831)).B(r, {
                        table: s(832375).evP,
                        id: d
                    })
                }, [r, d, o]), u = (0, s(682985).K8)(() => {
                    var e;
                    let t;
                    return o && c && d ? (e = c.getRecordModel, t = [], function e(t, a, r, n, l, o) {
                        if (!t || l.has(t.id)) return;
                        if (l.add(t.id), r.length >= o) return r;
                        t.isType(s(955630).Gz) && r.push(t.id);
                        let d = t.getType() === s(955630).xd.transclusionReference && t.getTransclusionReferenceTargetPointer();
                        if (d && e(a(d), a, r, !1, l, o), n || t.hasContent())
                            for (let s of t.getContentIds()) e(a({
                                table: i().ev,
                                id: s
                            }), a, r, !1, l, o)
                    }(e({
                        table: i().ev,
                        id: d
                    }), e, t, !0, new Set, 10), s(381453).sb(t)).map((e, t) => {
                        let a = new(s(970831)).B(r, {
                            table: s(832375).evP,
                            id: e
                        });
                        return {
                            store: a,
                            id: a.id,
                            score: -1,
                            spaceId: a.getSpaceId(),
                            sources: [s(821603).Ni.Local],
                            featureGroups: [],
                            originalPosition: t,
                            serverEventProperties: void 0
                        }
                    }) : []
                }, [c, r, o, d]), p = (0, a.useMemo)(() => {
                    if (o && t && 0 !== u.length) return [{
                        key: "sites-pages",
                        items: u.map(e => t(e)),
                        render: e => a.createElement(s(844565).A, { ...e,
                            title: n.formatMessage(l.pages)
                        })
                    }]
                }, [t, o, u, n]);
                if (o && 0 !== u.length) return {
                    results: u,
                    sections: p
                }
            }
            let l = (0, s(109939).YK)({
                pages: {
                    id: "search.default_page_body.pages",
                    defaultMessage: "Pages"
                }
            })
        },
        428708: (e, t, s) => {
            s.r(t), s.d(t, {
                browserAddIcon: () => r,
                iconDefinition: () => i
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "-0.01 4.12 17.63 14.63",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M2.375 6.25c0-1.174.951-2.125 2.125-2.125h11c1.174 0 2.125.951 2.125 2.125v7.5a2.125 2.125 0 0 1-2.125 2.125H7.957a4.5 4.5 0 0 0 0-1.25H15.5a.875.875 0 0 0 .875-.875V7.5H3.625v3.252L3.5 10.75c-.388 0-.765.05-1.125.142zm2.258.184a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25m2.625-.625a.625.625 0 1 0-1.25 0 .625.625 0 0 0 1.25 0m1.375.625a.625.625 0 1 0 0-1.25.625.625 0 0 0 0 1.25"
                        }), (0, a.jsx)("path", {
                            d: "M7 15.25q-.001.32-.056.625A3.501 3.501 0 1 1 3.5 11.75h.011l.114.002A3.5 3.5 0 0 1 7 15.25m-6.125 0c0 .345.28.625.625.625h1.375v1.375a.625.625 0 1 0 1.25 0v-1.375H5.5a.625.625 0 1 0 0-1.25H4.125V13.25a.625.625 0 1 0-1.25 0v1.375H1.5a.625.625 0 0 0-.625.625"
                        })]
                    })
                },
                r = (0, s(104509).wt)("browserAdd", i, "default")
        },
        430501: (e, t, s) => {
            s.d(t, {
                E: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8.35 12.274a.625.625 0 0 0 0 1.25h3.3a.625.625 0 1 0 0-1.25zM13 9.844a.625.625 0 1 1 0 1.25H7a.625.625 0 0 1 0-1.25zm-7-2.43a.625.625 0 1 0 0 1.25h8a.625.625 0 1 0 0-1.25z"
                        }), (0, a.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                r = (0, s(104509).wt)("filterCircle", i, "default")
        },
        448437: (e, t, s) => {
            s.d(t, {
                A: () => r
            });
            var a = () => s(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new i
        },
        464913: (e, t, s) => {
            s.r(t), s.d(t, {
                arrowStraightUpSmallIcon: () => i,
                iconDefinition: () => a
            }), s(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.05 2.12 9.9 11.76",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M8.442 2.308a.625.625 0 0 0-.884 0l-4.32 4.32a.625.625 0 0 0 .884.884l3.253-3.253v9.017c0 .334.283.599.625.599a.61.61 0 0 0 .625-.599V4.26l3.253 3.253a.625.625 0 0 0 .884-.884z"
                    })
                },
                i = (0, s(104509).wt)("arrowStraightUpSmall", a, "small")
        },
        471848: (e, t, s) => {
            s.d(t, {
                BM: () => c,
                EB: () => r,
                dX: () => d,
                tL: () => u
            }), s(898992), s(354520), s(581454), s(296540);
            var a = s(474848);
            let i = (0, s(109939).YK)({
                privateTeamspace: {
                    id: "baseTable.pageCell.privateTeamspace",
                    defaultMessage: "Private teamspace"
                },
                untitledPath: {
                    id: "baseTable.pageCell.untitledPath",
                    defaultMessage: "Untitled"
                }
            });

            function r({
                store: e,
                parentSpaceStore: t,
                rightIcon: i,
                inlineTitleContent: n,
                useThinTitle: l,
                skipUntitledStyling: o
            }) {
                let p = (0, s(109939).tz)(),
                    m = (0, s(682985).K8)(() => t || (0, s(974410).f)(e), [t, e]),
                    g = (0, s(682985).K8)(() => {
                        var t;
                        return null == e || null == (t = e.getModel()) ? void 0 : t.getRenderIcon({
                            getRecordModel: e.getRecordModel
                        })
                    }, [e]),
                    {
                        displayTitle: h,
                        pageTitle: f
                    } = (0, s(682985).K8)(() => u({
                        store: e,
                        intl: p
                    }), [e, p]),
                    y = (0, s(682985).K8)(() => (0, s(569553).Te)(e), [e]),
                    v = (0, s(682985).K8)(() => c({
                        blockStore: e,
                        spaceStore: m,
                        intl: p
                    }), [e, m, p]);
                return (0, a.jsx)(d, {
                    inlineTitleContent: n,
                    mainIcon: (0, a.jsx)(s(569553).B6, {
                        icon: g,
                        iconRecordCategory: y,
                        size: 20,
                        isEmptyPage: !1,
                        disabled: !0
                    }),
                    rightIcon: i,
                    subTitle: v,
                    title: h,
                    titleOpacity: f || o ? void 0 : .25,
                    useThinTitle: l
                })
            }
            let n = {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "8px 0",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                },
                l = {
                    flex: 1,
                    overflow: "hidden"
                },
                o = {
                    lineHeight: 1.3,
                    fontSize: 12,
                    opacity: .5
                };

            function d({
                inlineTitleContent: e,
                mainIcon: t,
                rightIcon: i,
                subTitle: r,
                title: c,
                titleOpacity: u,
                useThinTitle: p
            }) {
                let m = (0, s(960253).I)(() => ({
                    iconContainer: {
                        height: 20,
                        width: 20,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: 20,
                        marginInlineEnd: 12,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 6
                    },
                    title: {
                        fontSize: 14,
                        fontWeight: p ? 400 : 500,
                        ...void 0 !== u ? {
                            opacity: u
                        } : {}
                    }
                }), [u, p]);
                return (0, a.jsxs)("div", {
                    style: n,
                    children: [(0, a.jsx)("div", {
                        style: m.iconContainer,
                        children: t
                    }), (0, a.jsxs)("div", {
                        style: l,
                        children: [(0, a.jsxs)(s(4458).fI, {
                            alignItems: "center",
                            children: [(0, a.jsx)(s(324489).V, {
                                showTooltipWhenTruncated: !0,
                                style: m.title,
                                children: c
                            }), e]
                        }), (0, a.jsx)(s(324489).V, {
                            showTooltipWhenTruncated: !0,
                            style: o,
                            children: r
                        })]
                    }), i]
                })
            }

            function c(e) {
                let {
                    intl: t,
                    blockStore: a,
                    spaceStore: r
                } = e, n = a ? (0, s(399348).f)(a, {
                    includeTeamHomeFeed: !1,
                    includeDataSources: !0
                }).filter(e => e.id !== a.id).map(e => {
                    if (e instanceof s(681735).h) return e.getName() || t.formatMessage(i.privateTeamspace);
                    if (e instanceof s(360851).N) return;
                    let a = e.getModel();
                    return (null == a ? void 0 : a.getRenderTitleWithPlaceholder({
                        getRecordModel: e.getRecordModel,
                        userTimeZone: (0, s(714350).P)(),
                        intl: s(962299).A.getIntl()
                    })) || t.formatMessage(i.untitledPath)
                }).filter(e => void 0 !== e).reverse() : [];
                return n.length > 0 ? n.join("/") : null == r ? void 0 : r.getName()
            }

            function u({
                store: e,
                intl: t
            }) {
                if (e instanceof s(356912).m) return {
                    pageTitle: e.getRenderTitle({
                        intl: t,
                        userTimeZone: (0, s(714350).P)()
                    }),
                    displayTitle: (0, s(536601).getCollectionNameOrDefault)({
                        intl: t,
                        collectionStore: e
                    })
                };
                if (!(null != e && e.canRead())) return {
                    pageTitle: void 0,
                    displayTitle: (0, s(543464).mA)(t)
                };
                let a = null == e ? void 0 : e.getModel();
                if (!a || !e) return {
                    pageTitle: void 0,
                    displayTitle: void 0
                };
                let i = e.getRecordModel,
                    r = (0, s(714350).P)(),
                    n = a.getRenderTitle({
                        getRecordModel: i,
                        userTimeZone: r,
                        intl: t
                    }),
                    l = a.getEmptyTitlePlaceholder({
                        getRecordModel: i,
                        userTimeZone: r,
                        intl: t
                    });
                return {
                    pageTitle: n,
                    displayTitle: n || l
                }
            }
        },
        481129: (e, t, s) => {
            function a(e) {
                let {
                    intl: t,
                    isNewElectronTab: a
                } = e, r = (0, s(533992).v3)(), n = (0, s(556583).y)(), l = !(0, s(682985).O$)(s(205885).e), o = (0, s(972740).L)(), {
                    currentSidebarSpaceViewStore: d,
                    mainEditorCurrentBlockStore: c
                } = (0, s(682985).K8)(() => ({
                    currentSidebarSpaceViewStore: s(728372).AppStoreSidebarSpaceViewStore.state,
                    mainEditorCurrentBlockStore: s(728372).AppStoreMainEditorCurrentBlockStore.state
                }), [], {
                    debugName: "useSearchInputPlaceholder.appStoreStores"
                }), u = (0, s(682985).K8)(() => null == c ? void 0 : c.getTitleValue(), [c], {
                    debugName: "useSearchInputPlaceholder.pageTitleValue"
                }), p = (0, s(682985).K8)(() => o && (0, s(742197).G)(r, o), [r, o], {
                    debugName: "useSearchInputPlaceholder.spaceName"
                }), m = (0, s(682985).K8)(() => s(886556).z.showSearchAiFeatures(), [], {
                    debugName: "useSearchInputPlaceholder.showSearchAiFeatures"
                }), g = (0, s(682985).K8)(() => (0, s(494144).o)(d), [d], {
                    debugName: "useSearchInputPlaceholder.isExternalPagesSearch"
                });
                return (0, s(682985).K8)(() => {
                    if (n && l) return t.formatMessage(i.offline);
                    if (a) return t.formatMessage(i.newTab);
                    if (p && m) return t.formatMessage(i.searchOrAskQuestionInSpace, {
                        spaceName: p
                    }); {
                        if (g) return t.formatMessage(i.externalPagesSearch);
                        if (p) return t.formatMessage(i.searchInSpace, {
                            spaceName: p
                        });
                        if (!u) return t.formatMessage(i.unnamedPage);
                        let e = (0, s(247438).q4_)(u).slice(0, 100);
                        return t.formatMessage(i.namedPage, {
                            pageTitle: e
                        })
                    }
                }, [t, a, l, n, u, g, m, p], {
                    debugName: "useSearchInputPlaceholder.placeholderText"
                })
            }
            s.d(t, {
                H: () => a
            });
            let i = (0, s(109939).YK)({
                offline: {
                    id: "searchInputMenuItem.placeholder.offline",
                    defaultMessage: "Search offline pages…"
                },
                newTab: {
                    id: "searchInputMenuItem.placeholder.newTab",
                    defaultMessage: "Open in new tab…"
                },
                searchOrAskQuestionInSpace: {
                    id: "searchInputMenuItem.placeholder.SearchOrAskQuestionInSpace",
                    defaultMessage: "Search or ask a question in {spaceName}…"
                },
                externalPagesSearch: {
                    id: "searchInputMenuItem.placeholder.externalPagesSearch",
                    defaultMessage: "Search external pages…"
                },
                searchInSpace: {
                    id: "searchInputMenuItem.placeholder.searchInSpace",
                    defaultMessage: "Search {spaceName}…"
                },
                namedPage: {
                    id: "searchInputMenuItem.placeholder.namedPage",
                    defaultMessage: "Search in {pageTitle}…"
                },
                unnamedPage: {
                    id: "searchInputMenuItem.placeholder.unnamedPage",
                    defaultMessage: "Search in page…"
                }
            })
        },
        488229: (e, t, s) => {
            s.d(t, {
                A: () => d
            }), s(18107), s(967357);
            var a = s.n(s(32485)),
                i = s(296540),
                r = s(474848);
            let n = {
                    hoveredStyle: {
                        background: s(632079).Tj.buttonHoveredBackground
                    }
                },
                l = {
                    container: {
                        fontSize: s(418676).Kw,
                        color: s(632079).Tj.icon.secondary
                    }
                };

            function o(e) {
                let {
                    focused: t,
                    shouldShowArrowUp: a,
                    shouldShowDismissButton: i,
                    onClickDismissButton: n
                } = e, {
                    isElectron: o,
                    isMac: d
                } = (0, s(533992).Y0)(), {
                    shortcut: c,
                    shortcutString: u
                } = (0, s(682985).K8)(() => {
                    var e;
                    let t = s(62276).getKeyboardShortcuts(),
                        a = null == (e = (0, s(840203).c)(t, "notionAiCommandSearchDefault")) ? void 0 : e.at(0);
                    if (!a) return {
                        shortcut: void 0,
                        shortcutString: void 0
                    };
                    let i = (0, s(654299).z_)(a, d),
                        r = (0, s(654299).Vd)(i, d);
                    return {
                        shortcut: i,
                        shortcutString: r
                    }
                }, [d]);
                return a ? (0, r.jsx)(s(16275).I, {
                    icon: s(464913).arrowStraightUpSmallIcon,
                    size: "xs",
                    colorVariant: "secondary"
                }) : i ? (0, r.jsx)(s(51831).m, {
                    content: () => (0, r.jsx)("div", {
                        children: (0, r.jsx)(s(109939).sA, {
                            defaultMessage: "Don’t show this again",
                            id: "search.SearchAssistantMenuItem.dismissAITooltip"
                        })
                    }),
                    children: e => (0, r.jsx)(s(988022).p, {
                        size: "sm",
                        shape: "pill",
                        iconLeading: {
                            icon: s(25094).xMarkSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary"
                        },
                        onClick: n,
                        ...e
                    })
                }) : t ? (0, r.jsx)(s(16275).I, {
                    icon: s(750748).arrowTurnDownLeftSmallIcon,
                    size: "xs",
                    colorVariant: "secondary"
                }) : o && c && u ? d ? (0, r.jsx)(s(795811).z, {
                    shortcut: c
                }) : (0, r.jsx)("div", {
                    style: l.container,
                    children: u
                }) : null
            }
            let d = i.forwardRef(function(e, t) {
                let {
                    inline: i,
                    title: l,
                    focused: d,
                    className: c,
                    blueOutlineFocused: u,
                    compact: p,
                    shouldShowArrowUp: m,
                    shouldShowDismissButton: g,
                    onClickDismissButton: h,
                    type: f
                } = e, y = (0, s(960253).I)(() => ({
                    style: {
                        minHeight: 36,
                        paddingTop: 8,
                        paddingBottom: 8,
                        width: p ? "min-content" : "100%",
                        display: "flex",
                        transition: "none",
                        ...u ? {
                            boxShadow: s(632079).Tj.focusedShadow,
                            borderRadius: 6
                        } : {}
                    },
                    textWrapper: {
                        alignItems: void 0,
                        flex: void 0,
                        display: "block",
                        textOverflow: "ellipsis",
                        ...i && {
                            alignItems: "baseline"
                        }
                    }
                }), [i, u, p]), v = (0, s(682985).K8)(() => s(886556).z.isDeepFindEnabled(), []), x = {
                    title: l,
                    icon: "topic" === f ? (0, r.jsx)(s(16275).I, {
                        icon: s(150963).w
                    }) : v ? (0, r.jsx)(s(16275).I, {
                        icon: s(330274).magnifyingGlassIcon,
                        colorVariant: "secondary"
                    }) : (0, r.jsx)(s(16275).I, {
                        icon: s(273344).aiFaceIcon
                    }),
                    style: y.style,
                    textWrapperStyle: y.textWrapper,
                    right: (0, r.jsx)(o, {
                        shouldShowArrowUp: m,
                        shouldShowDismissButton: g,
                        focused: d,
                        onClickDismissButton: h
                    }),
                    className: a()("notranslate", c),
                    buttonStyle: {
                        paddingInlineStart: 2,
                        width: p ? "min-content" : void 0
                    },
                    hoveredStyle: n.hoveredStyle
                };
                return (0, r.jsx)(s(95582).A, { ...e,
                    ...x,
                    ignoreLocalHoverState: !0,
                    ref: t
                })
            })
        },
        492491: (e, t, s) => {
            s.d(t, {
                g: () => d
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m5.975 2.274a.625.625 0 0 0 0 1.25h3.3a.625.625 0 1 0 0-1.25zM13 9.844H7a.625.625 0 0 0 0 1.25h6a.625.625 0 1 0 0-1.25m-7-2.43a.625.625 0 1 0 0 1.25h8a.625.625 0 1 0 0-1.25z"
                    })
                },
                n = (0, s(104509).wt)("filterCircleFill", r, "fill"),
                l = {
                    marginInlineStart: 4,
                    display: "flex"
                },
                o = {
                    width: 24,
                    height: 24
                };

            function d(e) {
                let {
                    hasFilters: t,
                    isShowingFilterBar: r,
                    setIsShowingFilterBar: d
                } = e, c = (0, s(533992).v3)(), u = (0, a.useRef)(!1), p = c.currentUser.id;
                (0, a.useEffect)(() => {
                    !p || u.current || (!1 === (0, s(255139).YT)(p) && !0 === r && d(!1), u.current = !0)
                }, [p, r, d]);
                let m = (0, s(109939).tz)(),
                    g = r ? m.formatMessage(s(515709)._S.hide) : m.formatMessage(s(515709)._S.show),
                    h = (0, a.useCallback)(() => {
                        let e = !r;
                        p && (0, s(255139).M2)(p, e), d(e)
                    }, [p, r, d]);
                return (0, i.jsx)("span", {
                    style: l,
                    children: (0, i.jsx)(s(51831).m, {
                        content: () => (0, i.jsx)("div", {
                            children: g
                        }),
                        placement: "bottom",
                        alignment: "start",
                        disableTooltip: s(986939).A.isMobile,
                        delayThreshold: 400,
                        children: e => (0, i.jsx)(s(374533).A, { ...e,
                            icon: r ? n : s(430501).E,
                            size: "lg",
                            shape: "pill",
                            iconStyle: o,
                            ariaLabel: g,
                            onClick: h,
                            ...r ? {
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            } : {}
                        })
                    })
                })
            }
        },
        499227: (e, t, s) => {
            s.d(t, {
                A: () => u
            }), s(296540);
            var a = s(474848);

            function i(e) {
                let {
                    title: t,
                    caption: i
                } = e, r = l();
                return (0, a.jsx)(s(636518).Ay, { ...e,
                    title: (0, a.jsx)(o, {
                        title: t
                    }),
                    caption: (0, a.jsx)(n, {
                        caption: i,
                        captionStyle: r.caption
                    }),
                    textWrapperStyle: r.text,
                    style: r.menuItem,
                    captionStyle: r.caption
                })
            }

            function r() {
                return {
                    title: {
                        color: s(632079).Tj.text.secondary
                    },
                    caption: {
                        color: s(632079).Tj.text.tertiary
                    }
                }
            }

            function n({
                captionStyle: e,
                caption: t
            }) {
                if (!t) return null;
                let s = r(),
                    i = { ...e,
                        ...s.caption
                    };
                return (0, a.jsx)("div", {
                    style: i,
                    children: t
                })
            }

            function l() {
                return {
                    menuItem: {
                        minHeight: "initial",
                        ...s(986939).A.isMobile && {
                            background: "initial",
                            boxShadow: "none"
                        },
                        paddingTop: 32,
                        paddingBottom: 32,
                        marginTop: "auto",
                        marginBottom: "auto"
                    },
                    text: {
                        textAlign: "center"
                    },
                    title: {
                        margin: 0,
                        fontWeight: s(699422).Wy.medium,
                        fontSize: s(418676).vQ,
                        lineHeight: s(418676).G6
                    },
                    caption: {
                        fontSize: s(418676).vQ,
                        marginTop: "auto"
                    }
                }
            }

            function o({
                title: e
            }) {
                if (!e) return null;
                let t = l(),
                    s = r(),
                    i = { ...t.title,
                        ...s.title
                    };
                return (0, a.jsx)("div", {
                    role: "alert",
                    style: i,
                    children: e
                })
            }
            let d = (0, a.jsx)(s(109939).sA, {
                    defaultMessage: "No results",
                    id: "searchErrorMenuItem.error.noResults"
                }),
                c = {
                    reportProblemButton: {
                        display: "inline",
                        color: s(632079).Tj.blue.text.accentPrimary
                    },
                    searchDeletedButton: {
                        display: "inline",
                        lineHeight: "25px",
                        color: s(632079).Tj.blue.text.accentPrimary
                    }
                },
                u = function(e) {
                    let t = (0, s(533992).v3)(),
                        r = (0, s(682985).K8)(() => (0, s(59406).w)(t), [t]),
                        n = (0, s(682985).K8)(() => (0, s(817599).q)(t), [t]),
                        l = () => {
                            s(963430).S({
                                environment: t,
                                from: "quick_find"
                            })
                        },
                        o = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters, []);
                    return (0, a.jsx)(i, { ... function(t, i) {
                            let r = e.error;
                            switch (r.type) {
                                case s(821603).yq.NoResults.type:
                                    return {
                                        title: d,
                                        caption: function(t, i) {
                                            if (t || i) return;
                                            let r = (0, s(604214).J)(o);
                                            return s(264093).z.isDeletedOnly(o.isDeletedOnly) ? r ? (0, a.jsx)(s(109939).sA, {
                                                defaultMessage: "Try different search terms or filters",
                                                id: "searchErrorMenuItem.errorPrompt.searchTermsAndFilters"
                                            }) : (0, a.jsx)(s(109939).sA, {
                                                defaultMessage: "Try different search terms",
                                                id: "searchErrorMenuItem.errorPrompt.searchTerms"
                                            }) : (0, a.jsx)(s(109939).sA, {
                                                id: "searchErrorMenuItem.errorPrompt.searchDeleted",
                                                defaultMessage: "Some results may be in your deleted pages.{br}<searchdeleted>Search deleted pages</searchdeleted>",
                                                values: {
                                                    searchdeleted: t => (0, a.jsx)(s(68774).N, {
                                                        onClick: e.handleSearchDeletedOnly,
                                                        style: c.searchDeletedButton,
                                                        children: t
                                                    }),
                                                    br: (0, a.jsx)("br", {})
                                                }
                                            })
                                        }(t, i)
                                    };
                                case s(821603).yq.Offline.type:
                                    return {
                                        title: d,
                                        caption: (0, a.jsx)(s(109939).sA, {
                                            defaultMessage: "Go online for more results.",
                                            id: "searchErrorMenuItem.errorPrompt.goOnline"
                                        })
                                    };
                                case s(821603).yq.RequestFailed.type:
                                    return {
                                        title: (0, a.jsx)(s(109939).sA, {
                                            id: "searchErrorMenuItem.error.genericErrorMessage",
                                            defaultMessage: "Something went wrong"
                                        }),
                                        caption: (0, a.jsx)(s(109939).sA, {
                                            id: "searchErrorMenuItem.errorPrompt.refreshOrReport",
                                            defaultMessage: "Try refreshing or <reportlink>report a problem</reportlink>.",
                                            values: {
                                                reportlink: e => (0, a.jsx)(s(68774).N, {
                                                    onClick: l,
                                                    style: c.reportProblemButton,
                                                    children: e
                                                })
                                            }
                                        })
                                    };
                                default:
                                    (0, s(722371).HB)(r)
                            }
                        }(n ? ? !1, r),
                        shouldWrapCaption: !0
                    })
                }
        },
        503270: (e, t, s) => {
            s.d(t, {
                H: () => i
            });
            let a = new(s(815048)).O2("AdminReactJson", async () => Promise.all([s.e(75134), s.e(29151), s.e(64038), s.e(56809), s.e(83755)]).then(s.bind(s, 842179))),
                i = (0, s(815048)._h)(a, e => e.AdminReactJson)
        },
        509745: (e, t, s) => {
            s.d(t, {
                Q: () => a
            });

            function a() {
                let e = (0, s(972740).L)(),
                    t = null == e ? void 0 : e.id,
                    a = (0, s(345776).T)(),
                    i = (0, s(611285).P)({
                        name: "archive_content",
                        spaceId: t,
                        userId: a
                    }) ? ? !1,
                    r = (0, s(682985).K8)(() => (null == e ? void 0 : e.getSetting("has_ever_archived_content")) ? ? !1, [e]);
                return i || r
            }
        },
        515709: (e, t, s) => {
            s.d(t, {
                Ac: () => r,
                Ay: () => y,
                _S: () => b
            }), s(944114), s(898992), s(581454), s(737550);
            var a = s(296540),
                i = s(474848);
            let r = 48,
                n = {
                    inputDesktop: {
                        fontSize: 18,
                        height: 48,
                        paddingInlineStart: 12,
                        paddingInlineEnd: 16,
                        alignItems: "center",
                        flexGrow: 0,
                        flexShrink: 0,
                        zIndex: 1
                    },
                    inputMobile: {
                        fontSize: 16,
                        border: "none",
                        boxShadow: "none",
                        borderRadius: 7,
                        lineHeight: "1.2",
                        padding: "6px 8px",
                        background: s(632079).Tj.background.secondaryTranslucent
                    },
                    input: {
                        minWidth: 0,
                        ...s(699422).RC
                    },
                    suggestedText: {
                        whiteSpace: "pre",
                        color: s(632079).Tj.text.secondary
                    },
                    suggestedTextWrapper: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    autoCompletedText: {
                        color: s(632079).Tj.text.secondary,
                        background: s(632079).Tj.background.tertiaryTranslucent
                    },
                    suggestedTextInvisibleUserQuery: {
                        whiteSpace: "pre-wrap",
                        color: "transparent"
                    },
                    userInputAndSuggestedTextContainer: {
                        display: "grid",
                        gridTemplateColumns: "auto 1fr"
                    }
                };

            function l(e) {
                let {
                    onTypingChange: t,
                    onFocusChange: r,
                    isOpen: l,
                    showSpinner: o,
                    onQueryChange: c,
                    selectedResultStore: u,
                    quickSearchMode: p,
                    inputComboboxProps: m,
                    searchResultStore: g
                } = e, h = (0, s(109939).tz)(), y = (0, a.useRef)();
                (0, a.useEffect)(() => () => {
                    y.current && (window.clearTimeout(y.current), y.current = void 0)
                }, []);
                let b = (0, s(682985).O$)(s(661238).B),
                    S = (0, s(851468).o)(),
                    w = (0, s(682985).K8)(() => s(898735).A.state.currentTab.isPinned, []),
                    M = (0, s(682985).K8)(() => s(930179).default.state.isNewElectronTab, []),
                    {
                        isElectronTabSearchEnabledState: j,
                        isPinnedTabNewTabEnabledState: k
                    } = (0, s(682985).K8)(() => {
                        var e, t;
                        return {
                            isElectronTabSearchEnabledState: null == (e = s(584257).A.state.preferences) ? void 0 : e.isNewTabSearchEnabled,
                            isPinnedTabNewTabEnabledState: null == (t = s(584257).A.state.preferences) ? void 0 : t.isPinnedTabNewTabEnabled
                        }
                    }, []),
                    C = !!M && !!j || !!k && !!w,
                    T = (0, s(481129).H)({
                        intl: h,
                        isNewElectronTab: C
                    }),
                    I = (0, s(533992).Y0)(),
                    A = (0, s(960253).I)(() => ({
                        boxShadowStyle: { ...I.isTablet && {
                                width: "100%"
                            }
                        }
                    }), [I.isTablet]),
                    B = (0, s(682985).K8)(() => s(661238).zw.state.text, []),
                    R = s(986939).A.isMobile ? "extra-large" : "transparent",
                    P = (0, s(682985).K8)(() => (function(e, t, a, i, r, n) {
                        if (0 === i.length || i.length >= 20 || s(986939).A.isMobile || void 0 === a) return;
                        let l = s(247438).k4p(a.getTitleValue()),
                            o = l.replaceAll("\n", " "),
                            d = l.slice(0, i.length),
                            c = l.length > 0 && d.toLocaleLowerCase() === i.toLocaleLowerCase() ? o.substring(i.length) : "",
                            u = t.isElectron && r.some(e => e.pageId === a.id);
                        switch (!0) {
                            case u:
                                return `${c} — ${e.formatMessage(x.switchTab)}`;
                            case t.isElectron && n:
                                return `${c} — ${e.formatMessage(x.openInTab)}`;
                            default:
                                return `${c} — ${e.formatMessage(x.open)}`
                        }
                    })(h, I, u, B, j ? S : [], C), [S, j, u, I, B, C, h]),
                    H = (0, s(682985).K8)(() => s(448437).A.state.open, []),
                    _ = (0, a.useMemo)(() => P && 0 !== B.trim().length ? (0, i.jsxs)("div", {
                        style: n.userInputAndSuggestedTextContainer,
                        "data-search-suggested-text": !0,
                        children: [(0, i.jsx)("span", {
                            style: n.suggestedTextInvisibleUserQuery,
                            children: B
                        }), (0, i.jsx)("div", {
                            style: n.suggestedTextWrapper,
                            className: p && !b ? s(828432).sbV : void 0,
                            children: (0, i.jsx)("span", {
                                style: n.autoCompletedText,
                                children: P
                            })
                        })]
                    }) : "", [P, B, p, b]),
                    E = s(986939).A.isMobile ? n.inputMobile : n.inputDesktop,
                    D = { ...n.input,
                        width: 0 === B.length && p ? `min(${T.length}ch, 100%)` : "100%"
                    },
                    F = (0, s(682985).K8)(() => null == u ? void 0 : u.getIcon(), [u]),
                    N = (0, s(682985).K8)(() => (0, s(569553).Te)(u), [u]),
                    L = !!B.trim() && !s(986939).A.isMobile,
                    {
                        handlePopupOpen: O,
                        handlePopupClose: z
                    } = (0, a.useContext)(s(250227).SearchStaticContext),
                    K = (0, a.useMemo)(() => p ? (0, i.jsx)(s(158645).L, {
                        onPopupOpen: O,
                        onPopupClose: z,
                        mode: "search"
                    }) : (0, i.jsx)(s(4458).fI, {
                        height: 24,
                        width: 24,
                        alignItems: "center",
                        justifyContent: "center",
                        children: (() => {
                            switch (!0) {
                                case o:
                                    return (0, i.jsx)(s(517334).k, {
                                        size: 16
                                    });
                                case L:
                                    return (0, i.jsx)(s(569553).B6, {
                                        disabled: !0,
                                        icon: F,
                                        iconRecordCategory: N,
                                        isEmptyPage: !!F,
                                        size: 20
                                    });
                                case C:
                                    return (0, i.jsx)(s(16275).I, {
                                        icon: s(428708).browserAddIcon,
                                        colorVariant: "secondary"
                                    });
                                default:
                                    return (0, i.jsx)(s(16275).I, {
                                        icon: s(330274).magnifyingGlassIcon,
                                        colorVariant: "secondary"
                                    })
                            }
                        })()
                    }), [p, O, z, o, L, F, N, C]),
                    q = (0, s(682985).K8)(() => s(886556).z.isSearchConnectorTabSectionEnabled(), []);
                return (0, i.jsxs)("div", {
                    style: A.boxShadowStyle,
                    children: [(0, i.jsx)(s(4458).fI, {
                        flex: 1,
                        className: p && !b ? s(828432).sbV : void 0,
                        children: (0, i.jsx)(s(36481).p, {
                            format: R,
                            placeholder: T,
                            left: K,
                            value: B,
                            suggestedText: _,
                            suggestedTextStyle: n.suggestedText,
                            focus: s(986939).A.isMobile ? void 0 : l && !H,
                            focusInitial: !(0, s(907620).T)("supportsNativeHome") && s(986939).A.isMobile,
                            focusAfterAnimation: !0,
                            showClearButton: !0,
                            right: !s(986939).A.isMobile && (0, i.jsx)(f, {
                                quickSearchMode: p
                            }),
                            isRightLastElementOfInput: !0,
                            selectAll: !0,
                            onChange: e => {
                                void 0 === s(785385).default.state.firstKeyStrokeTimeMs && s(785385).default.update(e => ({ ...e,
                                    firstKeyStrokeTimeMs: Date.now()
                                })), y.current && window.clearTimeout(y.current), t(!0), y.current = window.setTimeout(() => t(!1), 300), c(String(e.target.value))
                            },
                            onClearButtonClick: v,
                            style: E,
                            inputStyle: D,
                            ...(0, s(63390).A)(m, {
                                onFocus: () => {
                                    r(!0)
                                },
                                onBlur: () => {
                                    r(!1)
                                }
                            })
                        })
                    }), q ? (0, i.jsx)(d, {
                        searchResultsStore: g
                    }) : void 0]
                })
            }
            let o = {
                display: "flex",
                alignItems: "center",
                marginInlineStart: 8,
                marginBottom: 8,
                marginTop: -4
            };

            function d(e) {
                let {
                    searchResultsStore: t
                } = e, a = (0, s(682985).K8)(() => (0, s(876688).wd)(), []), r = (0, s(682985).K8)(() => {
                    let e = [];
                    for (let i of a) {
                        var s;
                        let a = (null == (s = t.state.universalResults) || null == (s = s[i]) ? void 0 : s.length) ? ? 0;
                        e.push({
                            type: i,
                            resultCount: a
                        })
                    }
                    return e
                }, [a, t]);
                return (0, i.jsxs)("div", {
                    style: o,
                    children: [(0, i.jsx)(h, {
                        searchResultStore: t
                    }), r.map(({
                        type: e,
                        resultCount: s
                    }) => (0, i.jsx)(m, {
                        searchResultsStore: t,
                        resultCount: s,
                        connectorType: e
                    }, e))]
                })
            }
            let c = {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 8,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                    borderRadius: 20,
                    cursor: "pointer",
                    userSelect: "none"
                },
                u = 14,
                p = {
                    marginInlineStart: 4,
                    fontSize: 12
                };

            function m(e) {
                let {
                    connectorType: t,
                    resultCount: r,
                    searchResultsStore: n
                } = e, l = (0, s(682985).K8)(() => n.state.currentlySelectedUniversalSearchResultView === t, [t, n]), {
                    icon: o,
                    name: d
                } = (0, a.useMemo)(() => ({
                    icon: s(44183).G[t],
                    name: s(590212).w0[t]
                }), [t]), m = (0, a.useCallback)(() => {
                    n.update(e => ({ ...e,
                        currentlySelectedUniversalSearchResultView: t
                    }))
                }, [t, n]);
                return (0, i.jsxs)(s(64960).Ay, {
                    style: c,
                    onClick: m,
                    focused: l,
                    children: [(0, i.jsx)(s(708966).Q, {
                        iconGroup: o,
                        variantName: "default",
                        style: {
                            width: u,
                            height: u
                        }
                    }), (0, i.jsx)("span", {
                        style: p,
                        children: d
                    }), r > 0 ? (0, i.jsx)("span", {
                        style: p,
                        children: r
                    }) : void 0]
                }, t)
            }
            let g = {
                pillStyle: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 8,
                    paddingInlineStart: 12,
                    paddingInlineEnd: 12,
                    paddingTop: 6,
                    paddingBottom: 6,
                    borderRadius: 20,
                    cursor: "pointer",
                    userSelect: "none"
                },
                iconStyle: {
                    height: s(104509).Ev.sm,
                    width: s(104509).Ev.sm
                },
                style0: {
                    marginInlineStart: 4,
                    fontSize: 12
                }
            };

            function h(e) {
                let {
                    searchResultStore: t
                } = e, r = (0, s(682985).K8)(() => !t.state.currentlySelectedUniversalSearchResultView, [t]), n = (0, a.useCallback)(() => {
                    t.update(e => ({ ...e,
                        currentlySelectedUniversalSearchResultView: void 0
                    }))
                }, [t]);
                return (0, i.jsxs)(s(64960).Ay, {
                    style: g.pillStyle,
                    onClick: n,
                    focused: r,
                    children: [(0, s(898378).notionTintableIcon)(g.iconStyle), (0, i.jsx)("span", {
                        style: g.style0,
                        children: (0, i.jsx)(s(109939).sA, {
                            id: "SearchInputMenuItem.Notion",
                            defaultMessage: "Notion"
                        })
                    })]
                })
            }

            function f(e) {
                let [t, r] = (0, s(682985).K8)(() => {
                    let e = s(661238).Ay.state.query.filters,
                        t = (0, s(604214).J)(e);
                    return [s(661238).Ay.state.filterBar.show, t]
                }, []), n = (0, a.useCallback)(e => s(661238).Ay.setFilterBarVisibility(e), []);
                return (0, i.jsx)(s(492491).g, {
                    hasFilters: r,
                    isShowingFilterBar: t,
                    setIsShowingFilterBar: n
                })
            }
            let y = l;

            function v() {
                s(661238).Ay.resetQuery({
                    resetFilters: !0
                }), s(661238).Ay.update(e => ({ ...e,
                    source: "quick_find"
                }))
            }
            let x = (0, s(109939).YK)({
                    open: {
                        id: "search.inputMenu.suggestedText.open",
                        defaultMessage: "Open"
                    },
                    openInTab: {
                        id: "search.inputMenu.suggestedText.openInTab",
                        defaultMessage: "Open in tab"
                    },
                    switchTab: {
                        id: "search.inputMenu.suggestedText.switchTab",
                        defaultMessage: "Switch tab"
                    }
                }),
                b = (0, s(109939).YK)({
                    hide: {
                        id: "searchInputMenuItem.filterBarToggleButtonTooltip.hide",
                        defaultMessage: "Hide filters"
                    },
                    show: {
                        id: "searchInputMenuItem.filterBarToggleButtonTooltip.show",
                        defaultMessage: "Show filters"
                    }
                });
            l.displayName = "SearchInputMenuItem"
        },
        519048: (e, t, s) => {
            s.d(t, {
                sb: () => eF,
                CX: () => eO,
                bJ: () => ez
            });
            var a, i, r = s(296540);

            function n(e) {
                var t, a;
                let {
                    searchResultStore: i
                } = e, r = (0, s(469440).y)({
                    localResults: null == (t = i.state.localResults) ? void 0 : t.results,
                    serverResults: null == (a = i.state.serverResults) ? void 0 : a.results
                }), n = i.state.focusedIndex, l = null == n ? void 0 : n.global, o = null == n ? void 0 : n.local;
                if (void 0 === l || void 0 === o) return;
                let d = [...i.state.fixedActionResults ? ? [], ...i.state.queryBasedActionResults ? ? []],
                    c = l < d.length ? d[l] : void 0;
                if (c) return c;
                let u = l - d.length;
                if (!r || r.length <= 0 || u < 0) return;
                let p = r[u];
                if (p) return {
                    type: "page_result",
                    value: {
                        index: {
                            global: l,
                            local: o
                        },
                        selectedResult: p
                    }
                }
            }
            let l = (0, s(381453).sg)(s(185326).Lj, s(767776).ab),
                o = (0, s(381453).sg)(s(185326).Lj, s(767776).ab),
                d = ((a = {})[a.SidePeekPanel = 0] = "SidePeekPanel", a[a.KeyboardShortcut = 1] = "KeyboardShortcut", a);
            var c = s(474848);
            let u = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)("path", {
                            d: "M4.9 5.905a.575.575 0 0 0 0 1.15h6.2a.575.575 0 0 0 0-1.15zm5.425 1.883h-4.65a.575.575 0 1 0 0 1.15h4.65a.575.575 0 1 0 0-1.15M6.721 9.672a.575.575 0 0 0 0 1.15H9.28a.575.575 0 1 0 0-1.15z"
                        }), (0, c.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                p = (0, s(104509).wt)("filterCircleSmall", u, "small");

            function m({
                onMenuDismiss: e
            }) {
                let t = (0, s(533992).v3)(),
                    a = (0, s(682985).K8)(() => s(661238).zw.state.filters, []),
                    i = function(e, t) {
                        let s = b(e);
                        if (!s || !s.createdBy) return !1;
                        let a = s.createdBy[0];
                        return -1 !== t.createdBy.indexOf(a)
                    }(t, a),
                    r = function(e) {
                        let {
                            lastEditedTime: t
                        } = x();
                        return s(381453).n4(t, e.lastEditedTime)
                    }(a),
                    n = (0, s(682985).K8)(() => (function(e) {
                        let t = v();
                        if (!t || !t.ancestors) return !1;
                        let s = t.ancestors[0];
                        return -1 !== e.ancestors.indexOf(s)
                    })(a), [a]);
                return i && r && n ? null : (0, c.jsxs)(s(543588).A, {
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.quickFiltersSection.title",
                        defaultMessage: "Quick filters"
                    }),
                    marginAfter: !0,
                    children: [i ? void 0 : (0, c.jsx)(f, {
                        focused: !1,
                        onMenuDismiss: e
                    }), r ? void 0 : (0, c.jsx)(y, {
                        focused: !1,
                        onMenuDismiss: e
                    }), n ? void 0 : (0, c.jsx)(h, {
                        focused: !1,
                        onMenuDismiss: e
                    })]
                })
            }

            function g({
                icon: e,
                title: t,
                filter: a,
                onMenuDismiss: i,
                focused: r
            }) {
                let n = {
                    minHeight: "initial",
                    paddingTop: s(986939).A.isMobile ? 12 : 4,
                    paddingBottom: s(986939).A.isMobile ? 12 : 4
                };
                return (0, c.jsx)(s(95582).A, {
                    icon: (0, c.jsx)(s(16275).I, {
                        icon: e
                    }),
                    focused: r,
                    title: t,
                    onClick: () => (function(e, t) {
                        s(661238).Ay.updateFilters(e), s(661238).Ay.isDebugSidebarOpen() || s(661238).Ay.setState({ ...s(661238).Ay.state,
                            isDebugSidebarOpen: !0
                        }), t && t()
                    })(a, i),
                    style: n
                })
            }

            function h(e) {
                let t = (0, s(682985).K8)(() => v(), []);
                return t ? (0, c.jsx)(g, {
                    icon: s(865213).Y,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.quickFilters.inCurrentPage",
                        defaultMessage: "In current page"
                    }),
                    filter: t,
                    ...e
                }) : null
            }

            function f(e) {
                let t = b((0, s(533992).v3)());
                return t ? (0, c.jsx)(g, {
                    icon: s(623290).personIcon,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.quickFilters.createdByMe",
                        defaultMessage: "Created by me"
                    }),
                    filter: t,
                    ...e
                }) : null
            }

            function y(e) {
                let t = x();
                return t ? (0, c.jsx)(g, {
                    icon: s(998172).D,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.quickFilters.editedLastWeek",
                        defaultMessage: "Edited last week"
                    }),
                    filter: t,
                    ...e
                }) : null
            }

            function v() {
                let e = s(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && e.id) return {
                    ancestors: [e.id]
                }
            }

            function x() {
                return {
                    lastEditedTime: {
                        starting: s(25825).t0((0, s(714350).P)()),
                        ending: s(25825).Ec((0, s(714350).P)())
                    }
                }
            }

            function b(e) {
                let {
                    id: t
                } = e.currentUser;
                if (t) return {
                    createdBy: [t]
                }
            }
            s(898992), s(354520);
            let S = ((i = {}).Button = "Button", i.Section = "Section", i),
                w = r.forwardRef(function({
                    mode: e
                }, t) {
                    let a = (0, s(682985).uB)(void 0, s(510969).A),
                        i = (0, r.useRef)(null),
                        n = (0, r.useRef)(null);
                    return ((0, r.useImperativeHandle)(t, () => ({
                        getClientHeight: () => {
                            if (null !== i.current) {
                                let e = i.current.getAnchor();
                                return (null == e ? void 0 : e.clientHeight) ? ? 0
                            }
                            return null !== n.current ? n.current.clientHeight : 0
                        }
                    })), e === S.Button) ? (0, c.jsx)(L, {
                        ref: i,
                        buttonPopupStore: a
                    }) : e === S.Section ? (0, c.jsx)(N, {
                        ref: n,
                        buttonPopupStore: a
                    }) : void(0, s(722371).HB)(e)
                });

            function M(e) {
                return t => s(661238).Ay.updateFilters({
                    [e]: t
                })
            }

            function j({
                mode: e
            }) {
                let t = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.isDeletedOnly, []);
                return (0, c.jsx)(s(492205).J, {
                    mode: e,
                    focused: !1,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.deletedOnlyToggle.label",
                        defaultMessage: "Deleted only"
                    }),
                    icon: s(968411).trashIcon,
                    value: t || !1,
                    onChange: M("isDeletedOnly")
                })
            }

            function k() {
                return (0, c.jsx)(s(109939).sA, {
                    id: "search.filterMenu.moreFiltersSection.title",
                    defaultMessage: "More filters"
                })
            }

            function C(e) {
                s(661238).Ay.updateFilters({
                    navigableBlockContentOnly: e
                })
            }

            function T({
                mode: e
            }) {
                let t = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.navigableBlockContentOnly, []);
                return (0, c.jsx)(s(492205).J, {
                    mode: e,
                    focused: !1,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.onlyMatchTitlesToggle.label",
                        defaultMessage: "Title only"
                    }),
                    icon: s(517259).a,
                    value: t || !1,
                    onChange: C
                })
            }
            let I = {
                marginInlineEnd: -8
            };

            function A(e) {
                return (0, c.jsx)("div", {
                    style: I,
                    children: (0, c.jsx)(s(988022).p, { ...e,
                        iconLeading: p,
                        size: "sm",
                        colorPalette: "blue",
                        children: (0, c.jsx)(s(109939).sA, {
                            defaultMessage: "Add filter",
                            id: "search.addFilter.button.label"
                        })
                    })
                })
            }

            function B(e) {
                e.setState({ ...e.state,
                    open: !1
                })
            }

            function R({
                mode: e,
                buttonPopupStore: t
            }) {
                let a = (0, r.useCallback)(() => B(t), [t]),
                    i = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.ancestors, []);
                return (0, c.jsx)(s(250227).SearchStoresContext.Consumer, {
                    children: ({
                        parentStore: t
                    }) => (0, c.jsx)(s(331436).E, {
                        mode: e,
                        focused: !1,
                        title: (0, c.jsx)(s(109939).sA, {
                            id: "search.filterMenu.moreFilters.inPage",
                            defaultMessage: "In"
                        }),
                        parentStore: t,
                        blockIds: i,
                        onMenuDismiss: a,
                        onChange: M("ancestors"),
                        peopleBlocksToInclude: "collection_view_page"
                    })
                })
            }

            function P({
                mode: e,
                buttonPopupStore: t
            }) {
                let a = (0, r.useCallback)(() => B(t), [t]),
                    i = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.createdBy, []);
                return (0, c.jsx)(s(250227).SearchStoresContext.Consumer, {
                    children: ({
                        parentStore: t
                    }) => (0, c.jsx)(s(583490).A, {
                        mode: e,
                        focused: !1,
                        title: (0, c.jsx)(s(109939).sA, {
                            id: "search.filterMenu.moreFilters.createdBy",
                            defaultMessage: "Created by"
                        }),
                        parentStore: t,
                        userIds: i,
                        onMenuDismiss: a,
                        onChange: M("createdBy")
                    })
                })
            }

            function H({
                mode: e,
                buttonPopupStore: t
            }) {
                let a = (0, r.useCallback)(() => B(t), [t]),
                    i = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.createdTime, []);
                return (0, c.jsx)(s(549253).A, {
                    mode: e,
                    focused: !1,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.moreFilters.created",
                        defaultMessage: "Created"
                    }),
                    icon: s(998172).D,
                    value: i,
                    onMenuDismiss: a,
                    onChange: M("createdTime")
                })
            }

            function _({
                mode: e,
                buttonPopupStore: t
            }) {
                let a = (0, r.useCallback)(() => B(t), [t]),
                    i = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.lastEditedTime, []);
                return (0, c.jsx)(s(549253).A, {
                    mode: e,
                    focused: !1,
                    title: (0, c.jsx)(s(109939).sA, {
                        id: "search.filterMenu.moreFilters.lastEdited",
                        defaultMessage: "Last edited"
                    }),
                    icon: s(998172).D,
                    value: i,
                    onMenuDismiss: a,
                    onChange: M("lastEditedTime")
                })
            }

            function E({
                mode: e,
                buttonPopupStore: t
            }) {
                let a = (0, r.useCallback)(() => B(t), [t]),
                    i = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters.inTeams, []);
                return (0, s(682985).K8)(() => (0, s(350277).z)({
                    spaceStore: (0, s(328765).S)()
                }) > 0, []) ? (0, c.jsx)(s(250227).SearchStoresContext.Consumer, {
                    children: ({
                        parentStore: t
                    }) => (0, c.jsx)(s(231246).SZ, {
                        mode: e,
                        focused: !1,
                        title: (0, c.jsx)(s(109939).sA, {
                            id: "search.filterMenu.moreFilters.inTeams",
                            defaultMessage: "Teamspace"
                        }),
                        parentStore: t,
                        teamIds: i,
                        onMenuDismiss: a,
                        onChange: M("inTeams")
                    })
                }) : null
            }

            function D({
                activeFilters: e,
                mode: t,
                buttonPopupStore: s
            }) {
                return (0, c.jsxs)(r.Fragment, {
                    children: [e.createdBy ? (0, c.jsx)(P, {
                        buttonPopupStore: s,
                        mode: t
                    }) : void 0, e.createdTime ? (0, c.jsx)(H, {
                        buttonPopupStore: s,
                        mode: t
                    }) : void 0, e.lastEditedTime ? (0, c.jsx)(_, {
                        buttonPopupStore: s,
                        mode: t
                    }) : void 0, e.ancestors ? (0, c.jsx)(R, {
                        buttonPopupStore: s,
                        mode: t
                    }) : void 0, e.inTeams ? (0, c.jsx)(E, {
                        buttonPopupStore: s,
                        mode: t
                    }) : void 0]
                })
            }

            function F({
                buttonPopupStore: e
            }) {
                return (0, c.jsxs)(s(747369).A, {
                    menuType: s(649476).gu.ActionSheet,
                    children: [(0, c.jsx)(m, {
                        onMenuDismiss: () => B(e)
                    }), (0, c.jsxs)(s(543588).A, {
                        title: (0, c.jsx)(k, {}),
                        children: [(0, c.jsx)(P, {
                            buttonPopupStore: e,
                            mode: s(454860).C.Button
                        }), (0, c.jsx)(H, {
                            buttonPopupStore: e,
                            mode: s(454860).C.Button
                        }), (0, c.jsx)(_, {
                            buttonPopupStore: e,
                            mode: s(454860).C.Button
                        }), (0, c.jsx)(R, {
                            buttonPopupStore: e,
                            mode: s(454860).C.Button
                        }), (0, c.jsx)(E, {
                            buttonPopupStore: e,
                            mode: s(454860).C.Button
                        })]
                    })]
                })
            }
            let N = r.forwardRef(function({
                    buttonPopupStore: e
                }, t) {
                    let a = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters, []),
                        i = (0, s(682985).K8)(() => (0, s(421593).u)(a), [a]);
                    return (0, c.jsxs)(s(844565).A, {
                        ref: t,
                        disableMobilePadding: !0,
                        disableMobileBorders: !0,
                        children: [(0, c.jsx)(T, {
                            mode: s(454860).C.Section
                        }), (0, c.jsx)(j, {
                            mode: s(454860).C.Section
                        }), (0, c.jsx)(D, {
                            buttonPopupStore: e,
                            activeFilters: i,
                            mode: s(454860).C.Section
                        })]
                    })
                }),
                L = r.forwardRef(function({
                    buttonPopupStore: e
                }, t) {
                    let a = (0, r.useCallback)(() => (0, c.jsx)(F, {
                        buttonPopupStore: e
                    }), [e]);
                    return (0, c.jsx)(s(656252).A, {
                        ref: t,
                        popupType: s(656252).z.SlideUp,
                        buttonPopupStore: e,
                        content: a,
                        children: e => (0, c.jsx)(A, { ...e
                        })
                    })
                });
            s(581454);
            let O = {
                    selectedTitle: {
                        color: s(632079).Tj.text.secondary
                    },
                    label: {
                        marginInlineEnd: 2,
                        fontSize: s(418676).Kw,
                        transform: "translateY(0.5px)"
                    },
                    innerButton: {
                        color: s(632079).Tj.text.secondary,
                        fontWeight: s(699422).Wy.semibold,
                        fontSize: s(418676).Kw,
                        height: 20,
                        padding: "2px 4px",
                        marginInlineEnd: 1,
                        transform: "translateY(0.5px)"
                    },
                    menu: {
                        minWidth: 200
                    }
                },
                z = function(e) {
                    let t = r.useRef(),
                        a = (0, s(109939).tz)(),
                        {
                            activeOption: i,
                            items: n
                        } = r.useMemo(() => (function(e) {
                            let {
                                currentSortBy: t,
                                setSortBy: a,
                                sortOptions: i,
                                selectButton: r,
                                intl: n
                            } = e, l = i[0], o = i.map(e => {
                                let i = t.field,
                                    o = "relevance" === i ? "" : t.direction,
                                    d = `${i}.${o}`,
                                    u = e.key === d;
                                return u && (l = e), {
                                    key: e.key,
                                    action: () => {
                                        a(e.sort), r && r.current && r.current.closeMenu()
                                    },
                                    render: t => (0, c.jsx)(s(95582).A, { ...t,
                                        title: n.formatMessage(e.formattedName),
                                        isChecked: u
                                    })
                                }
                            });
                            return {
                                activeOption: l,
                                items: o
                            }
                        })({ ...e,
                            selectButton: t,
                            intl: a
                        }), [e, t, a]),
                        l = s(986939).A.isMobile ? (0, c.jsx)(s(109939).sA, {
                            id: "search.sort.sortMenuTitle",
                            defaultMessage: "Sort By"
                        }) : void 0;
                    return (0, c.jsx)(s(127322).A, {
                        ref: e => {
                            e && (t.current = e)
                        },
                        alignmentToOrigin: "start",
                        selectedTitle: (0, c.jsx)("div", {
                            style: O.selectedTitle,
                            children: a.formatMessage(i.formattedName)
                        }),
                        label: void 0,
                        renderMenuSections: () => [{
                            key: "searchSortOrder",
                            render: e => (0, c.jsx)(s(543588).A, { ...e,
                                title: l,
                                desktopStyle: O.menu,
                                disableDesktopPadding: !1
                            }),
                            items: n
                        }],
                        labelStyle: O.label,
                        innerButtonStyle: O.innerButton
                    })
                },
                K = function({
                    isPublicPageSearch: e
                }) {
                    let t = {
                            paddingBottom: 0
                        },
                        a = {
                            flex: void 0,
                            marginTop: -3,
                            marginBottom: -1
                        },
                        i = { ...s(986939).A.isMobile && t
                        },
                        r = e ? void 0 : (0, c.jsx)(V, {});
                    return (0, c.jsx)(s(636518).Ay, {
                        title: (0, c.jsx)(q, {}),
                        right: r,
                        textWrapperStyle: a,
                        style: i
                    })
                };

            function q() {
                let e = (0, s(682985).K8)(() => s(661238).zw.state.sort, []);
                return (0, c.jsx)(z, {
                    currentSortBy: e,
                    setSortBy: e => {
                        s(661238).Ay.setState({ ...s(661238).Ay.state,
                            query: { ...s(661238).Ay.state.query,
                                sort: e
                            }
                        })
                    },
                    sortOptions: s(727395).w_
                })
            }

            function V() {
                return s(986939).A.isMobile ? (0, c.jsx)(w, {
                    mode: S.Button
                }) : null
            }
            s(944114);
            let W = s(546605).Store.createClass(!1, {
                    name: "RequestModalOpenStore"
                }),
                U = s(546605).Store.createClass(!1, {
                    name: "ResponseModalOpenStore"
                }),
                G = function({
                    searchResultStore: e,
                    shouldShow: t,
                    showSpinner: a
                }) {
                    let i = (0, s(682985).uB)(void 0, U),
                        r = (0, s(682985).uB)(void 0, W);
                    return t ? (0, c.jsx)(s(546903).A, {
                        title: (0, c.jsx)(s(702335).A, {}),
                        shouldShowReportBadSearchButton: !0,
                        right: (0, c.jsx)(Q, {
                            searchResultStore: e,
                            requestModalOpenStore: r,
                            responseModalOpenStore: i
                        })
                    }) : null
                };

            function $() {
                return {
                    footer: () => ({
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: s(418676).vQ
                    }),
                    footerText: {
                        fontSize: s(418676).Kw,
                        ...s(699422).RC
                    },
                    inlineHint: {
                        display: "inline",
                        marginInlineEnd: 16
                    },
                    resultCountWrapper: {
                        display: "flex",
                        alignItems: "center",
                        ...s(699422).RC
                    },
                    resultCount: {
                        fontWeight: s(699422).Wy.medium
                    },
                    resultText: {
                        verticalAlign: "middle",
                        marginInlineEnd: 6
                    },
                    spinner: {
                        display: "inline",
                        width: 12,
                        height: 12,
                        verticalAlign: "middle"
                    },
                    keyboardShortcut: {
                        marginInlineEnd: 4,
                        marginBottom: 1,
                        fontVariant: "all-small-caps",
                        fontSize: 1.1 * s(418676).Kw
                    },
                    commandGlyph: {
                        fontSize: .75 * s(418676).vQ
                    },
                    debugModalStyle: {
                        maxHeight: "90vh",
                        maxWidth: "90vw",
                        height: "90vh",
                        width: "90vw",
                        overflow: "scroll",
                        padding: 10
                    },
                    navigationHints: {
                        marginInlineStart: 15
                    }
                }
            }

            function Q({
                searchResultStore: e,
                requestModalOpenStore: t,
                responseModalOpenStore: a
            }) {
                let {
                    debug: i,
                    showDebugInfo: r
                } = (0, s(682985).K8)(() => {
                    let {
                        debug: e,
                        showDebugInfo: t
                    } = s(729247).Ay.state;
                    return {
                        debug: e,
                        showDebugInfo: t
                    }
                }, []), n = (0, s(682985).K8)(() => {
                    var t;
                    return null == (t = e.state.serverResults) || null == (t = t.debugInfo) ? void 0 : t.response
                }, [e]), l = (0, s(682985).O$)(t), o = (0, s(682985).O$)(a);
                if (!i && !r) return null;
                let {
                    rawRequests: d,
                    rawResponses: u
                } = n || {};
                return (0, c.jsxs)(c.Fragment, {
                    children: [d ? (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(s(556809).a, {
                            open: l,
                            innerStyle: $().debugModalStyle,
                            onDismiss: () => {
                                t.setState(!1)
                            },
                            children: (0, c.jsx)(s(503270).H, {
                                showCopyButton: !0,
                                defaultCollapsed: !1,
                                data: d
                            })
                        }), (0, c.jsx)(s(548436).A, {
                            size: "sm",
                            colorPalette: "gray",
                            colorVariant: "tertiary",
                            onClick: () => t.setState(!0),
                            children: "Open Request"
                        })]
                    }) : void 0, u ? (0, c.jsxs)(c.Fragment, {
                        children: [(0, c.jsx)(s(556809).a, {
                            open: o,
                            innerStyle: $().debugModalStyle,
                            onDismiss: () => {
                                a.setState(!1)
                            },
                            children: (0, c.jsx)(s(503270).H, {
                                showCopyButton: !0,
                                data: {
                                    rawResponses: u
                                },
                                defaultCollapsed: !1
                            })
                        }), (0, c.jsx)(s(548436).A, {
                            size: "sm",
                            colorPalette: "gray",
                            colorVariant: "tertiary",
                            onClick: () => a.setState(!0),
                            children: "Open Response"
                        })]
                    }) : void 0]
                })
            }
            s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(672577), s(430670);
            var Y = s(440961);
            let J = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 10,
                    paddingInlineStart: 20,
                    paddingInlineEnd: 20
                },
                noResultsPrompt: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    color: s(632079).Tj.text.tertiary
                }
            };

            function X(e) {
                let {
                    searchResultStore: t
                } = e, a = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore), i = (0, s(682985).K8)(() => {
                    var e;
                    let i = t.state.currentlySelectedUniversalSearchResultView;
                    return i && a ? ((null == (e = t.state.universalResults) ? void 0 : e[i]) ? ? []).flatMap(({
                        key: e,
                        result: t
                    }) => ((0, s(730127).SF)(t, a) ? ? []).filter(e => "notion" !== e.type).map(t => ({
                        key: e,
                        result: t
                    }))).filter(s(722371).O9) : []
                }, [t, a]);
                return a ? 0 === i.length ? (0, c.jsx)("div", {
                    style: J.noResultsPrompt,
                    children: (0, c.jsx)(s(109939).sA, {
                        defaultMessage: "No results",
                        id: "SearchResultsMenuList.NoResults"
                    })
                }) : (0, c.jsx)(s(126767).H, {
                    type: s(644154).A.Y,
                    style: J.container,
                    children: i.map(({
                        key: e,
                        result: t
                    }, a) => (0, c.jsx)(s(809930).V, {
                        result: t,
                        position: a
                    }, e))
                }) : null
            }
            let Z = {
                    messageMenuItem: { ...s(986939).A.isMobile && {
                            background: "initial",
                            boxShadow: "none"
                        }
                    },
                    debugMessageMenuItemTextStyle: {
                        whiteSpace: "pre-wrap",
                        fontFamily: "monospace",
                        marginTop: 0
                    },
                    menuListContainer: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: s(986939).A.isMobile ? 13 : void 0,
                        marginBottom: 4
                    },
                    section: {
                        marginBottom: 4
                    }
                },
                ee = r.memo(function(e) {
                    var t, a, i, n, l;
                    let [o, d] = (0, r.useState)(!1), {
                        searchResultStore: u,
                        localResults: p,
                        serverResults: m,
                        resultListStore: g,
                        searchExperimentOverrides: h,
                        assistantResultItem: f,
                        extraTopPadding: y,
                        comboboxProps: v,
                        isQueryNaturalLanguageQuestion: x
                    } = e, b = (0, s(960253).I)(() => ({
                        results: {
                            paddingTop: y ? 8 : 4,
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            overflow: "auto",
                            height: "100%",
                            paddingInlineStart: 4,
                            paddingInlineEnd: 4
                        }
                    }), [y]), S = (0, s(533992).v3)(), w = e.errorState, M = (0, r.useCallback)(() => {
                        u.endTimeToRenderServerResultsTiming(S)
                    }, [u, S]), j = (0, s(682985).K8)(() => u.state.queryBasedActionResults ? ? [], [u]), {
                        isNewElectronTab: k,
                        searchSessionId: C
                    } = (0, s(682985).K8)(() => ({
                        isNewElectronTab: !!s(930179).default.state.isNewElectronTab,
                        searchSessionId: s(930179).default.state.sessionId
                    }), []), T = (0, s(682985).K8)(() => {
                        let {
                            tabs: e,
                            currentTab: t
                        } = s(898735).A.state;
                        return (0, s(850990).i)(e, t.id)
                    }, []), I = (0, s(682985).K8)(() => (0, s(255139).mk)({
                        searchSessionId: s(930179).default.state.sessionId,
                        searchSessionFlowNumber: s(785385).default.state.numServerRequests
                    }), []), A = (0, r.useMemo)(() => 0 === j.length ? [] : j.map(e => (0, s(674476).g)({
                        environment: S,
                        result: e,
                        queryId: I,
                        desktopProps: {
                            electronTabs: T,
                            isNewElectronTabSearch: k
                        },
                        searchSessionId: C,
                        source: "quick_find",
                        action: t => {
                            "full_search" !== e.eventName && s(635257).st({
                                reset: !0,
                                searchResultStore: u
                            })
                        }
                    })), [j, S, I, T, k, u, C]), B = (0, s(682985).K8)(() => s(886556).z.isDeepFindEnabled(), []), R = (0, r.useMemo)(() => {
                        if (f) return {
                            key: "search-results-actions-section",
                            render: e => (0, c.jsx)(s(844565).A, { ...e,
                                shouldShowBottomDivider: !1,
                                disableMobilePadding: !0,
                                disableMobileBorders: !0,
                                title: B ? void 0 : (0, c.jsx)(s(109939).sA, {
                                    id: "search.searchActions.actions.text",
                                    defaultMessage: "Actions"
                                }),
                                titleClassName: s(828432).J5z,
                                style: Z.section
                            }),
                            items: [f]
                        }
                    }, [f, B]), P = ((null == R ? void 0 : R.items.length) ? ? 0) + j.length, H = (0, s(682985).K8)(() => u.state.serverResultsLoading, [u]), _ = (0, s(82002).h)({
                        resultsCount: ((null == p ? void 0 : p.length) ? ? 0) + A.length,
                        shouldShow: H,
                        variant: "search-modal"
                    }), E = (0, s(817599).Y)(), D = (0, r.useMemo)(() => (0, s(352742).H)({
                        intentBasedGrouping: E,
                        localResults: p,
                        serverResults: m
                    }), [E, p, m]), F = (0, s(682985).K8)(() => {
                        let e = [...p ? ? [], ...m ? ? []],
                            t = new Set;
                        for (let s of e) {
                            let {
                                store: e
                            } = s;
                            s.workflowData || e.isNavigableBlock() ? t.add(e.id) : e.getNavigableBlockStore() && t.add(e.id)
                        }
                        return t
                    }, [p, m]), N = (0, r.useCallback)(t => {
                        let {
                            results: a,
                            sectionTitle: i,
                            compact: n,
                            additionalResults: l
                        } = t, {
                            id: o,
                            title: d
                        } = function(e) {
                            if (!e) return {
                                id: "allSearchResults",
                                title: void 0
                            };
                            switch (e.type) {
                                case "unique-id":
                                    return {
                                        id: "uniqueIdSearchResults",
                                        title: (0, c.jsx)(s(109939).sA, {
                                            id: "search.searchResultBuckets.uniqueID.text",
                                            defaultMessage: "ID matches"
                                        })
                                    };
                                case "jump-back-in":
                                    return {
                                        id: "jumpBackInSearchResults",
                                        title: (0, c.jsx)(s(109939).sA, {
                                            id: "search.searchResultBuckets.topResults.text",
                                            defaultMessage: "Top results"
                                        })
                                    };
                                case "server":
                                    return {
                                        id: "serverOnlySearchResults",
                                        title: (0, c.jsx)(s(109939).sA, {
                                            id: "search.searchResultBuckets.server.text",
                                            defaultMessage: "{count}{maybeLowerBoundSign} results",
                                            values: {
                                                count: e.values.count,
                                                maybeLowerBoundSign: e.values.isLowerBound ? "+" : ""
                                            }
                                        })
                                    };
                                case "main":
                                    return {
                                        id: "mainSearchResults",
                                        title: (0, c.jsx)(s(109939).sA, {
                                            id: "search.searchResultBuckets.bestMatches.text",
                                            defaultMessage: "Best matches"
                                        })
                                    };
                                default:
                                    (0, s(722371).HB)(e)
                            }
                        }(i), u = a.length + ((null == l ? void 0 : l.length) ? ? 0) > 0, p = _.length > 0 && (null == i ? void 0 : i.type) === "main";
                        if (u || p) return {
                            key: o,
                            render: e => (0, c.jsx)(s(844565).A, { ...e,
                                shouldShowBottomDivider: !1,
                                disableMobilePadding: !0,
                                disableMobileBorders: !0,
                                title: d,
                                titleClassName: s(828432).J5z,
                                style: Z.section
                            }),
                            items: s(381453).oE([...l ? ? [], ...a.map((t, s) => (function(e) {
                                let {
                                    selectedResult: t,
                                    index: s,
                                    props: a,
                                    compact: i,
                                    onEndTimeToRenderServerResults: n,
                                    navigableResultIds: l
                                } = e, {
                                    store: o
                                } = t;
                                if (!l.has(o.id)) return;
                                let d = r.createRef(),
                                    u = a.clusterInfo;
                                return {
                                    key: `${o.id}:${s}`,
                                    action: e => {
                                        let s, {
                                            event: i
                                        } = e;
                                        d.current && (s = Y.findDOMNode(d.current)) && "target" in i && i.target && (s === i.target || s.contains(i.target)) || a.handleSelectResult({
                                            event: e.event,
                                            index: {
                                                local: e.indexLocal,
                                                global: e.index
                                            },
                                            selectedResult: t,
                                            fromSidePeekPanel: !1,
                                            context: "query_results"
                                        })
                                    },
                                    render: e => (0, c.jsx)(ea, {
                                        menuListItemProps: e,
                                        store: o,
                                        selectedResult: t,
                                        index: s,
                                        compact: i,
                                        debugAreaRef: d,
                                        debugInfo: a.debugInfo,
                                        clusterInfo: u,
                                        onEndTimeToRenderServerResults: n,
                                        workflowData: t.workflowData
                                    })
                                }
                            })({
                                selectedResult: t,
                                index: s,
                                props: e,
                                compact: n,
                                onEndTimeToRenderServerResults: M,
                                navigableResultIds: F
                            })), ..._])
                        }
                    }, [_, e, M, F]), L = (0, r.useMemo)(() => N({
                        results: "intent-based-grouping" === D.type ? D.sections.jumpBackInSearchResults : [],
                        additionalResults: void 0,
                        sectionTitle: {
                            type: "jump-back-in"
                        },
                        compact: !0
                    }), [N, D.sections, D.type]), O = (0, s(682985).K8)(() => u.getResultCount(), [u]), z = (0, r.useMemo)(() => {
                        let e = "intent-based-grouping" === D.type ? D.sections.serverOnlySearchResults : [],
                            {
                                count: t,
                                isLowerBound: s
                            } = O;
                        return N({
                            results: e,
                            additionalResults: void 0,
                            sectionTitle: {
                                type: "server",
                                values: {
                                    count: t,
                                    isLowerBound: s
                                }
                            },
                            compact: !1
                        })
                    }, [N, D.sections, D.type, O]), K = [R, L, (0, r.useMemo)(() => N({
                        results: "uniqueIdSearchResults" in D.sections ? D.sections.uniqueIdSearchResults : [],
                        additionalResults: void 0,
                        sectionTitle: {
                            type: "unique-id"
                        },
                        compact: !1
                    }), [N, D.sections]), z, (0, r.useMemo)(() => N({
                        results: "unique-id" === D.type ? D.sections.nonUniqueIdSearchResults : "all" === D.type ? D.sections.allSearchResults : [],
                        additionalResults: A,
                        sectionTitle: "unique-id" === D.type || P > 0 ? {
                            type: "main"
                        } : void 0,
                        compact: !1
                    }), [N, D.type, D.sections, A, P])].filter(s(722371).O9), q = null == (t = e.debugInfo) || null == (t = t.response) ? void 0 : t.parsedQueries, V = null == (a = e.debugInfo) || null == (a = a.response) ? void 0 : a.detectedLanguages, W = null == (i = e.debugInfo) ? void 0 : i.traceLogs, U = null == (n = e.debugInfo) || null == (n = n.response) ? void 0 : n.debugUrls, {
                        onMaybeLoadMoreResults: G
                    } = e, $ = (0, r.useCallback)((e, t) => {
                        let a = e <= 200;
                        a && !o && G(), d(a), t.offsetFromTop && s(661238).Ay.update(e => ({ ...e,
                            hasScrolled: !0
                        }))
                    }, [o, G]), Q = ((null == p ? void 0 : p.length) ? ? 0) === 0 && 0 === A.length && "serverError" in w && (null == (l = w.serverError) ? void 0 : l.type) === "NoResultsFound", J = (0, r.useMemo)(() => Q ? 0 : null != R && R.items.length ? x ? 0 : R.items.length : 0, [Q, null == R ? void 0 : R.items.length, x]);
                    return (0, c.jsx)(s(250227).SearchStaticContext.Consumer, {
                        children: ({
                            queryResultsSectionRef: e
                        }) => (0, c.jsxs)("section", {
                            style: b.results,
                            ref: e,
                            children: [s(381453).Im(h) ? void 0 : es((0, c.jsx)(s(503270).H, {
                                data: {
                                    searchExperimentOverrides: h
                                },
                                showCopyButton: !1,
                                showModalButton: !1,
                                defaultCollapsed: !1
                            }), Z.debugMessageMenuItemTextStyle), q ? (0, c.jsx)(c.Fragment, {
                                children: es((0, c.jsx)(s(503270).H, {
                                    data: {
                                        parsedQueries: q
                                    },
                                    customCollapsedRenderers: [eo],
                                    showCopyButton: !0,
                                    showModalButton: !0,
                                    defaultCollapsed: !0
                                }), Z.debugMessageMenuItemTextStyle)
                            }) : void 0, V ? es((0, c.jsx)(s(503270).H, {
                                data: {
                                    detectedLanguages: V
                                },
                                customCollapsedRenderers: [en]
                            }), Z.debugMessageMenuItemTextStyle) : void 0, W ? es((0, c.jsx)(s(503270).H, {
                                data: {
                                    tracer: {
                                        traceLogs: W
                                    }
                                },
                                customCollapsedRenderers: [er],
                                defaultCollapsed: !0
                            }), Z.debugMessageMenuItemTextStyle) : void 0, U ? es((0, c.jsx)(s(503270).H, {
                                data: {
                                    debugUrls: U
                                },
                                defaultCollapsed: !0,
                                customCollapsedRenderers: [ec],
                                showCopyButton: !0,
                                showModalButton: !0,
                                maxLinkValueLength: 40
                            }), Z.debugMessageMenuItemTextStyle) : void 0, K ? (0, c.jsx)("div", {
                                className: "search-results-list",
                                children: (0, c.jsx)(s(558045).A, {
                                    type: s(558045).O.Vertical,
                                    initialFocus: J,
                                    store: g,
                                    disableKeyboardArrowWrap: !0,
                                    sections: K,
                                    style: Z.menuListContainer,
                                    comboboxProps: v
                                })
                            }) : void 0, function(e, t) {
                                if (!e.isLoading) {
                                    if (e.showMajorError) return (0, c.jsx)(s(499227).A, {
                                        error: e.serverError,
                                        handleSearchDeletedOnly: () => {
                                            let e = s(661238).Ay.state.query.text;
                                            s(635257).st({
                                                reset: !1
                                            }), s(843582).w.setState({ ...s(843582).w.state,
                                                open: !0
                                            }), s(198125).Ay.setState({ ...s(198125).Ay.state,
                                                filter: e
                                            })
                                        }
                                    });
                                    if (e.serverError && e.serverError !== s(821603).yq.NoResults) {
                                        var a, i;
                                        return a = e.serverError.message, i = t, (0, c.jsx)(s(844565).A, {
                                            disableMobilePadding: !0,
                                            disableMobileBorders: !0,
                                            children: (0, c.jsx)(s(498341).u, {
                                                title: a,
                                                style: i
                                            })
                                        })
                                    }
                                }
                            }(w, Z.messageMenuItem) || (0, c.jsx)(s(636255).A, {
                                onChange: $
                            })]
                        })
                    })
                }),
                et = {
                    marginTop: 0,
                    paddingTop: 0
                };

            function es(e, t) {
                return (0, c.jsx)(s(844565).A, {
                    disableMobilePadding: !0,
                    disableMobileBorders: !0,
                    topBorder: !1,
                    style: et,
                    children: (0, c.jsx)(s(636518).Ay, {
                        body: e,
                        bodyStyle: t
                    })
                })
            }

            function ea(e) {
                var t, a;
                let {
                    menuListItemProps: i,
                    store: r,
                    selectedResult: n,
                    index: l,
                    compact: o,
                    debugAreaRef: d,
                    debugInfo: u,
                    clusterInfo: p,
                    onEndTimeToRenderServerResults: m,
                    workflowData: g
                } = e, {
                    navigableBlockStore: h,
                    shouldIncludeDebug: f
                } = (0, s(682985).K8)(() => ({
                    navigableBlockStore: g || r.isNavigableBlock() ? r : r.getNavigableBlockStore(),
                    shouldIncludeDebug: !!s(729247).Ay.getDebugLevel()
                }), [r, g]);
                if (!h) return null;
                let y = f && n.sources.includes(s(821603).Ni.Local) ? {
                        id: n.id,
                        localSource: n.localSource,
                        score: n.score,
                        localRelevancies: n.localRelevancies,
                        frecencyScore: n.frecencyScore,
                        personalizationBoost: n.personalizationBoost,
                        terms: n.terms
                    } : void 0,
                    v = f && (n.sources.includes(s(821603).Ni.ElasticSearch) || n.sources.includes(s(821603).Ni.VectorDBBlock) || n.sources.includes(s(821603).Ni.VectorDBCollection) || n.sources.includes(s(821603).Ni.VectorDBBlockOpenAI) || n.sources.includes(s(821603).Ni.VectorDBCollectionOpenAI) || n.sources.includes(s(821603).Ni.VectorDBBlockBGE) || n.sources.includes(s(821603).Ni.VectorDBCollectionBGE) || n.sources.includes(s(821603).Ni.VectorDBBlockBGE1024) || n.sources.includes(s(821603).Ni.VectorDBCollectionBGE1024) || n.sources.includes(s(821603).Ni.VectorDBBlockBGE4096) || n.sources.includes(s(821603).Ni.VectorDBCollectionBGE4096) || n.sources.includes(s(821603).Ni.VectorDBBlockE5) || n.sources.includes(s(821603).Ni.VectorDBCollectionE5)) ? null == u || null == (t = u.response) ? void 0 : t.resultsDebugMap[r.id] : void 0;
                return (0, c.jsx)(s(465708).GC, { ...i,
                    index: l,
                    isFirstInSection: 0 === l,
                    store: h,
                    hidePath: !1,
                    result: n,
                    className: s(828432).LF7,
                    debugLocal: y,
                    debugHits: v,
                    debugAreaRef: d,
                    clusterInfo: p,
                    inline: o && !f,
                    inlineCaptionMinWidthPercentage: 20,
                    queryId: null == (a = n.serverEventProperties) ? void 0 : a["server-queryId"],
                    type: "query_results",
                    onEndTimeToRenderServerResults: m
                })
            }

            function ei(e) {
                let t = e.replaceAll(/\(MatchNoDocsQuery\("Matching no documents because no terms present"\)\)\^[0-9\.]/g, "").replaceAll(/MatchNoDocsQuery\("Matching no documents because no terms present"\)/g, "").replaceAll(/ConstantScore\(([^)]+):([^)]+)\)/g, "<i>$1</i>:<b>$2</b>").replace(/function score \(\((.*)\), functions:.*\)/, "$1").replaceAll("( ", "(").replaceAll(" )", ")").replaceAll("|", "| <br/>").replaceAll(/([^( ]+):"([^"]+)"/g, '<i>$1</i>:<b>"$2"</b>').replaceAll(/([^( ]+):([^) ]+)/g, "<i>$1</i>:<b>$2</b>");
                return (0, c.jsx)("span", {
                    dangerouslySetInnerHTML: {
                        __html: t
                    }
                })
            }

            function er({
                data: e,
                keyPath: t
            }) {
                if ((null == t ? void 0 : t[0]) === "traceLogs" && s(381453).Qd(e) && Array.isArray(e.log) && e.log.length > 0) {
                    let {
                        log: t,
                        startTimeMs: s
                    } = e;
                    return {
                        element: (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)("div", {
                                children: (0, c.jsx)("b", {
                                    children: `Trace started at ${s}`
                                })
                            }), t.map((e, t) => (0, c.jsxs)("div", {
                                children: [(0, c.jsx)("span", {
                                    style: ed,
                                    children: `[${e.timestamp-s}ms][${e.callerFileName.split(".")[0]}]`
                                }), (0, c.jsx)("span", {
                                    children: `${e.msg}`
                                })]
                            }, t))]
                        }),
                        expanded: !1
                    }
                }
                return null
            }

            function en({
                data: e,
                keyPath: t
            }) {
                return "detectedLanguages" === t.join(".") && s(381453).Qd(e) ? {
                    element: (0, c.jsx)(c.Fragment, {
                        children: Object.entries(e).filter(([e, t]) => !!t).map(([e]) => e).join(", ") || "None"
                    }),
                    expanded: !1
                } : null
            }
            let el = ["type", "description", "time_in_nanos"];

            function eo({
                data: e,
                keyPath: t
            }) {
                var s, a;
                let i = Object.values(e).find(e => void 0 !== e);
                if (!i || !el.every(e => i[e])) return null;
                if (1 === t.length) return {
                    element: ei(i.description),
                    expanded: !1
                };
                let r = i.description ? ? "";
                return null != (s = r) && s.includes("permissions.teamIds") && (r = "PermissionsQuery"), null != (a = r) && a.includes("(_id:[") && (r = "BoostRecentPageIds"), {
                    element: ei(r),
                    expanded: !1
                }
            }
            let ed = {
                color: "blue"
            };

            function ec({
                data: e
            }) {
                if (!e) return null;
                let t = Object.values(e).find(({
                    clusterName: e
                }) => void 0 !== e);
                if (!t) return {
                    element: (0, c.jsx)(c.Fragment, {
                        children: "unknown"
                    }),
                    expanded: !1
                }; {
                    let {
                        clusterName: e
                    } = t;
                    return {
                        element: (0, c.jsx)(c.Fragment, {
                            children: e
                        }),
                        expanded: !1
                    }
                }
            }
            let eu = {
                itemName: {
                    fontSize: 12,
                    color: s(632079).Tj.text.tertiary
                },
                metadataActorName: {
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap"
                },
                style0: {
                    display: "flex",
                    gap: 5
                }
            };

            function ep(e) {
                let {
                    itemName: t,
                    itemValue: a,
                    associatedUser: i
                } = e, r = (0, s(960253).I)(() => ({
                    itemValue: {
                        fontSize: 12,
                        ...i && {
                            display: "grid",
                            gridTemplateColumns: "1fr auto auto",
                            gap: 5,
                            textAlign: "end"
                        }
                    }
                }), [i]);
                return (0, c.jsxs)(s(4458).fI, {
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: 12,
                    children: [(0, c.jsx)("div", {
                        style: eu.itemName,
                        children: t
                    }), (0, c.jsxs)("div", {
                        style: r.itemValue,
                        children: [i ? (0, c.jsxs)(c.Fragment, {
                            children: [(0, c.jsx)(s(51831).m, {
                                delayThreshold: 50,
                                placement: "top",
                                allowHover: !0,
                                content: () => (0, c.jsxs)("div", {
                                    style: eu.style0,
                                    children: [i.avatar, i.name]
                                }),
                                closeDelay: 0,
                                children: e => (0, c.jsx)("span", { ...e,
                                    style: eu.metadataActorName,
                                    children: i.name
                                })
                            }), (0, c.jsx)("span", {
                                children: "·"
                            })]
                        }) : void 0, (0, c.jsx)("span", {
                            children: a
                        })]
                    })]
                })
            }
            let em = {
                    created: (0, c.jsx)(s(109939).sA, {
                        id: "search.preview.metadata.created",
                        defaultMessage: "Created"
                    }),
                    lastEdited: (0, c.jsx)(s(109939).sA, {
                        id: "search.preview.metadata.lastEdited",
                        defaultMessage: "Edited"
                    })
                },
                eg = {
                    type: "page_content"
                },
                eh = {
                    sidePeekPanel: {
                        width: 250,
                        overflowY: "auto",
                        overflowX: "hidden",
                        position: "relative",
                        minHeight: 400,
                        borderInlineStart: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        zIndex: 1,
                        padding: 16
                    },
                    centerPaneContent: {
                        display: "flex",
                        flexGrow: 1,
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    report: {
                        fontSize: 12,
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: 10
                    },
                    debugGearIcon: {
                        color: s(632079).Tj.palette.gray["400"]
                    },
                    hoveredDebugGearIcon: {
                        color: s(632079).Tj.palette.gray["600"]
                    }
                },
                ef = {
                    title: {
                        fontSize: 16,
                        fontWeight: s(699422).Wy.semibold,
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: "hidden"
                    },
                    untitledPageColor: {
                        color: s(632079).Tj.text.tertiary
                    },
                    titleAndLinkContainer: {
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        width: "fit-content",
                        gap: 5
                    },
                    previewContainer: {
                        marginTop: 8,
                        marginBottom: 8,
                        display: "flex",
                        flexDirection: "column",
                        position: "relative"
                    },
                    hoveredOrPressedPreview: {
                        background: "unset",
                        boxShadow: "unset"
                    },
                    contentCover: {
                        color: s(632079).Tj.text.primary,
                        fontSize: 11,
                        lineHeight: 1.5,
                        marginBottom: 0,
                        width: "110%",
                        transform: "translateX(-12px) translateY(-4px) scale(0.91)",
                        paddingInlineStart: 12,
                        paddingInlineEnd: 12,
                        paddingTop: 12,
                        paddingBottom: 0,
                        borderRadius: 6,
                        border: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`,
                        background: "transparent"
                    },
                    style0: {
                        fontSize: 9
                    }
                };

            function ey(e) {
                let {
                    environment: t,
                    intl: a,
                    selectedResult: i
                } = e, {
                    handleSelectSearchResult: n,
                    handleCopySearchItemLink: l
                } = (0, r.useContext)(s(250227).SearchStaticContext), o = i.value.selectedResult.store, {
                    previewIcon: u,
                    isEmptyPage: p
                } = (0, s(682985).K8)(() => ({
                    previewIcon: o.getIcon(),
                    isEmptyPage: o.isEmptyPage()
                }), [o]), m = (0, s(682985).K8)(() => (0, s(569553).Te)(o), [o]), g = (0, r.useCallback)(e => {
                    let {
                        id: t,
                        spaceStore: i,
                        table: r,
                        showAvatar: n
                    } = e;
                    if (void 0 === t || void 0 === r) return;
                    let l = (0, s(197018).xC)({
                        pointer: {
                            id: t,
                            spaceId: i.id,
                            table: r
                        },
                        getRecordModel: i.getRecordModel
                    }).asActor;
                    if (!(!l || l.isUser() && !(0, s(993077).dp)(i, l.id).isMember()) && (!l.isBot() || (0, s(993077).Ts)(i, l.id).isMember())) return {
                        name: (0, s(197018).lR)(a, l),
                        avatar: n ? (0, s(339072).w)({
                            actor: l,
                            size: 18,
                            style: {
                                marginInlineEnd: 5
                            }
                        }) : void 0
                    }
                }, [a]), h = (0, r.useCallback)(e => (0, s(799843).nl)(e, {
                    useUltraCompactFormat: !0,
                    useWeeks: !0,
                    useLowercase: !0
                }), []), f = (0, r.useCallback)(() => {
                    let {
                        index: e,
                        selectedResult: t
                    } = i.value;
                    return s => n({
                        event: s,
                        index: e,
                        selectedResult: t,
                        fromSidePeekPanel: !0,
                        context: "query_results"
                    })
                }, [n, i.value]), y = (0, r.useCallback)(e => {
                    if ((null == i ? void 0 : i.type) !== "page_result") return;
                    let {
                        index: t,
                        selectedResult: s
                    } = i.value, {
                        source: a
                    } = e;
                    l({
                        index: t,
                        selectedResult: s,
                        fromSidePeekPanel: a === d.SidePeekPanel,
                        context: "query_results",
                        source: a
                    })
                }, [l, i]), v = (0, s(960253).e)(), x = (0, s(960253).I)(() => ({
                    contentCoverFade: {
                        height: 48,
                        background: `linear-gradient(to bottom, transparent, ${"light"===v?s(632079).Tj.background.primary:s(632079).Tj.background.secondary} 100%)`
                    }
                }), [v]), {
                    createdBy: b,
                    created: S,
                    lastEditedBy: w,
                    lastEdited: M
                } = (0, s(682985).K8)(() => {
                    let e = (0, s(328765).S)();
                    return e ? {
                        createdBy: g({
                            id: o.getCreatedById(),
                            table: o.getCreatedByTable(),
                            spaceStore: e,
                            showAvatar: !0
                        }),
                        created: h(o.getCreatedTime()),
                        lastEditedBy: g({
                            id: o.getLastEditedById(),
                            table: o.getLastEditedByTable(),
                            spaceStore: e,
                            showAvatar: !0
                        }),
                        lastEdited: h(o.getLastEditedTime())
                    } : {
                        createdBy: void 0,
                        created: void 0,
                        lastEditedBy: void 0,
                        lastEdited: void 0
                    }
                }, [g, o, h]), j = [{
                    key: "created",
                    itemName: em.created,
                    itemValue: S,
                    associatedUser: b
                }, {
                    key: "lastEdited",
                    itemName: em.lastEdited,
                    itemValue: M,
                    associatedUser: w
                }], k = (0, s(682985).K8)(() => {
                    let e = (0, s(112293).Qe)({
                        store: o,
                        intl: a,
                        environment: t,
                        disableInsertedAnnotations: !s(886556).z.isXMLAssistantEnabled()
                    });
                    return e && e.trim().length > 0 ? e : void 0
                }, [o, a, t]), C = (0, s(682985).K8)(() => {
                    var e;
                    return (null == o || null == (e = o.getModel()) ? void 0 : e.getEmptyTitlePlaceholder({
                        getRecordModel: o.getRecordModel,
                        userTimeZone: (0, s(714350).P)(),
                        intl: a
                    })) || a.formatMessage({
                        id: "search.preview.untitledPage",
                        defaultMessage: "Untitled"
                    })
                }, [o, a]), T = (0, s(682985).K8)(() => {
                    if ("page_result" !== i.type) return;
                    let e = i.value.selectedResult.store;
                    return (0, s(483227).Ay)({
                        store: e,
                        collectionViewId: e.id,
                        fullyQualified: !0,
                        pageVisitSource: s(254656).y8.SearchQuery
                    })
                }, [i]), I = (0, r.useCallback)(async () => {
                    if (T) {
                        let [e, a] = await Promise.all([(0, s(161333).r)(), (0, s(969899).jd)()]);
                        a({
                            environment: t,
                            stringValue: T,
                            copiedMessage: e.copiedLinkToClipboard
                        }), y({
                            source: d.SidePeekPanel
                        })
                    }
                }, [y, t, T]);
                return (0, c.jsxs)("div", {
                    children: [(0, c.jsxs)(s(4458).VP, {
                        marginTop: 12,
                        gap: 8,
                        justifyContent: "space-between",
                        children: [(0, c.jsx)(s(569553).B6, {
                            disabled: !0,
                            icon: u,
                            iconRecordCategory: m,
                            isEmptyPage: p,
                            size: 26,
                            largeIcon: !0
                        }), (0, c.jsxs)("span", {
                            style: ef.titleAndLinkContainer,
                            children: [(0, c.jsx)("span", {
                                style: { ...ef.title,
                                    ...!k && ef.untitledPageColor
                                },
                                children: k ? ? C
                            }), (0, c.jsx)(eS, {
                                onClick: I
                            })]
                        })]
                    }), (0, c.jsx)(s(590422).Q, {
                        style: ef.previewContainer,
                        href: T,
                        hoveredStyle: ef.hoveredOrPressedPreview,
                        pressedStyle: ef.hoveredOrPressedPreview,
                        onClick: f,
                        children: (0, c.jsx)(s(742726).z, {
                            variant: "default",
                            store: o,
                            coverFormat: eg,
                            allowVideoPlayback: !1,
                            coverSizeFormat: "large",
                            showEmptyGalleryCover: !1,
                            coverContentFadedOverlay: !0,
                            coverContentFadedOverlayStyle: x.contentCoverFade,
                            contentWrapStyle: ef.contentCover,
                            coverHeight: 180,
                            onLoadProxiedImage: () => {},
                            renderAdditionalBlocks: !0,
                            rendererBlockStyle: ef.style0
                        })
                    }), (0, c.jsx)(s(4458).VP, {
                        marginTop: 8,
                        gap: 8,
                        children: j.filter(e => void 0 !== e.itemValue).map((e, t) => (0, c.jsx)(ep, {
                            isFirstInList: 0 === t,
                            itemName: e.itemName,
                            itemValue: e.itemValue,
                            associatedUser: e.associatedUser
                        }, e.key))
                    })]
                })
            }
            let ev = {
                container: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 30
                },
                questionBubble: {
                    backgroundColor: s(632079).Tj.cardHoveredBackground,
                    color: s(632079).Tj.text.tertiary,
                    padding: 8,
                    borderRadius: 16,
                    fontSize: 12,
                    minWidth: 40,
                    minHeight: 32,
                    width: "fit-content",
                    maxWidth: 180,
                    alignSelf: "flex-end",
                    userSelect: "none",
                    overflow: "hidden",
                    textOverflow: "ellipsis"
                },
                introBubble: {
                    backgroundColor: s(632079).Tj.cardHoveredBackground,
                    color: s(632079).Tj.text.tertiary,
                    padding: 8,
                    borderRadius: 16,
                    fontSize: 14,
                    width: 170,
                    userSelect: "none",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    textOverflow: "ellipsis"
                },
                helperDescription: {
                    textAlign: "center",
                    fontSize: 12,
                    color: s(632079).Tj.text.tertiary,
                    display: "flex",
                    justifyContent: "center"
                },
                loadingDots: {
                    border: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`,
                    padding: 12,
                    borderRadius: 100,
                    width: "max-content"
                },
                writingIndicatorCircle: {
                    height: 5,
                    width: 5,
                    opacity: .6,
                    backgroundColor: s(632079).Tj.icon.tertiary,
                    borderRadius: "100%"
                },
                writingButtonWrapper: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 3,
                    width: "inherit",
                    height: "inherit"
                },
                style0: {
                    width: "90%"
                }
            };

            function ex(e) {
                let t = (0, s(109939).tz)(),
                    {
                        query: a
                    } = e;
                return (0, c.jsxs)("div", {
                    style: ev.container,
                    children: [(0, c.jsxs)(s(4458).fI, {
                        gap: 6,
                        alignItems: "flex-end",
                        children: [(0, c.jsx)(eM, {}), (0, c.jsx)(s(4458).VP, {
                            gap: 10,
                            flexGrow: 1,
                            justifyContent: "center",
                            children: a ? (0, c.jsxs)(c.Fragment, {
                                children: [(0, c.jsx)("div", {
                                    style: ev.questionBubble,
                                    children: a
                                }), (0, c.jsx)("div", {
                                    "aria-valuetext": t.formatMessage({
                                        id: "search.preview.loadingLabel",
                                        defaultMessage: "Loading..."
                                    }),
                                    role: "progressbar",
                                    style: ev.loadingDots,
                                    children: (0, c.jsxs)("div", {
                                        style: ev.writingButtonWrapper,
                                        children: [(0, c.jsx)("div", {
                                            style: ev.writingIndicatorCircle
                                        }), (0, c.jsx)("div", {
                                            style: ev.writingIndicatorCircle
                                        }), (0, c.jsx)("div", {
                                            style: ev.writingIndicatorCircle
                                        })]
                                    })
                                })]
                            }) : (0, c.jsxs)("div", {
                                style: ev.introBubble,
                                children: [(0, c.jsx)("div", {
                                    children: (0, c.jsx)(s(109939).sA, {
                                        id: "searchSidePeekPanel.welcomeMessage.title",
                                        defaultMessage: "Hi! I’m Notion AI."
                                    })
                                }), (0, c.jsx)(s(109939).sA, {
                                    id: "searchSidePeekPanel.welcomeMessage.caption",
                                    defaultMessage: "Let me help you find information and answer questions."
                                })]
                            })
                        })]
                    }), (0, c.jsx)("div", {
                        style: ev.helperDescription,
                        children: (0, c.jsx)("div", {
                            style: ev.style0,
                            children: (0, c.jsx)(s(109939).sA, {
                                id: "SearchSidePeek.caption",
                                defaultMessage: "Get quick answers for anything in your workspace"
                            })
                        })
                    })]
                })
            }
            let eb = {
                hoveredBackground: {
                    backgroundColor: s(632079).Tj.buttonHoveredBackground
                },
                shortcutLabel: {
                    color: s(632079).Tj.text.inverseSecondary
                }
            };

            function eS(e) {
                let t = (0, s(533992).Y0)(),
                    a = (0, s(960253).e)(),
                    i = (0, s(960253).I)(() => ({
                        linkIcon: {
                            fill: "light" === a ? s(632079).Tj.palette.gray["300"] : s(632079).Tj.palette.gray["500"]
                        }
                    }), [a]),
                    r = t.isElectron,
                    n = (0, s(109939).tz)().formatMessage({
                        id: "search.preview.copyLink",
                        defaultMessage: "Copy link"
                    });
                return (0, c.jsx)(s(51831).m, {
                    delayThreshold: 600,
                    placement: "top",
                    allowHover: !0,
                    content: () => (0, c.jsxs)(s(4458).VP, {
                        children: [n, r ? (0, c.jsx)(s(693592).A, {
                            style: eb.shortcutLabel,
                            name: "copyLinkToCurrentPage"
                        }) : void 0]
                    }),
                    closeDelay: 0,
                    children: t => (0, c.jsx)(s(374533).A, { ...t,
                        icon: e => (0, c.jsx)(s(16275).I, {
                            icon: s(748869).linkSmallIcon,
                            size: "xs",
                            style: i.linkIcon
                        }),
                        ariaLabel: n,
                        hoveredStyle: eb.hoveredBackground,
                        onClick: e.onClick
                    })
                })
            }
            let ew = {
                faceImgWrap: {
                    width: 32,
                    height: 32,
                    borderRadius: "100%",
                    background: s(632079).Tj.whiteButtonBackground,
                    border: `1px solid ${s(632079).Tj.border.secondaryTranslucent}`,
                    overflow: "hidden",
                    userSelect: "none",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                aiSparklesFill: {
                    pointerEvents: "none"
                }
            };

            function eM() {
                return (0, c.jsx)("div", {
                    style: ew.faceImgWrap,
                    children: (0, c.jsx)(s(16275).I, {
                        icon: s(53634).sparklesSmallIcon,
                        size: "xs",
                        colorVariant: "secondary",
                        style: ew.aiSparklesFill
                    })
                })
            }
            let ej = {
                container: {
                    color: s(632079).Tj.text.disabled,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    userSelect: "none"
                },
                title: {
                    fontSize: 12,
                    fontWeight: s(699422).Wy.regular
                },
                icon: {
                    height: 24,
                    width: 24
                }
            };

            function ek(e) {
                let {
                    title: t,
                    icon: s
                } = e;
                return (0, c.jsxs)("div", {
                    style: ej.container,
                    children: [(0, c.jsx)("div", {
                        children: s(ej.icon)
                    }), (0, c.jsx)("div", {
                        style: ej.title,
                        children: t
                    })]
                })
            }

            function eC() {
                let [e, t] = (0, r.useState)(!1), a = (0, s(533992).v3)(), i = (0, s(109939).tz)(), n = s(896221).A.images.unifiedFind.searchDeepFindTooltipPng;
                (0, s(383953).w)(() => {
                    let e = new Image;
                    e.src = n, e.onload = () => t(!0), e.onerror = () => t(!0)
                });
                let l = (0, s(682985).K8)(() => s(661238).zw.state.text, []),
                    {
                        isQuickSearch: o
                    } = (0, r.useContext)(s(250227).SearchStaticContext),
                    d = (0, r.useCallback)(() => (0, s(862451).navigateAndStartInferenceTranscript)({
                        environment: a,
                        query: (0, s(247438).x9d)(l),
                        clientStore: s(57168).defaultClientAIChatStore,
                        config: {
                            type: "search",
                            searchSessionId: s(930179).default.state.sessionId,
                            scopeForNextSearch: {
                                type: "everything"
                            }
                        },
                        openInNewTab: s(930179).default.state.isNewElectronTab,
                        openUsingQuickSearchHandler: o,
                        surface: "search_modal"
                    }), [a, o, l]);
                return e ? (0, c.jsx)(s(312688).l, {
                    messageKey: "search_unified_find_result_tooltip",
                    title: i.formatMessage(eT.title),
                    imageUrl: n,
                    badge: i.formatMessage(eT.newBadge),
                    body: i.formatMessage(eT.body),
                    button: {
                        text: i.formatMessage(eT.tryIt),
                        onClick: () => {
                            d(), (0, s(59579).a)(a, "search_unified_find_result_tooltip")
                        }
                    }
                }) : null
            }
            let eT = (0, s(109939).YK)({
                    tryIt: {
                        id: "UnifiedFindUpsellTooltip.tryIt",
                        defaultMessage: "Try it"
                    },
                    title: {
                        id: "UnifiedFindUpsellTooltip.title",
                        defaultMessage: "Search all sources with AI"
                    },
                    body: {
                        id: "UnifiedFindUpsellTooltip.body",
                        defaultMessage: "Get instant answers across all your apps"
                    },
                    newBadge: {
                        id: "UnifiedFindUpsellTooltip.newBadge",
                        defaultMessage: "New"
                    }
                }),
                eI = {
                    resultsContainer: {
                        display: "flex",
                        flex: 1,
                        overflowY: "scroll"
                    },
                    unifiedFindInnerTitle: {
                        display: "flex",
                        gap: 4,
                        alignItems: "center",
                        ...s(699422).RC
                    },
                    query: {
                        fontWeight: s(699422).Wy.regular,
                        marginInlineStart: 6,
                        ...s(699422).RC
                    },
                    textOverflow: {
                        display: "contents",
                        ...s(699422).RC
                    },
                    aiUnavailable: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        ...s(699422).RC
                    },
                    styledTextQuery: {
                        display: "inline",
                        alignItems: "baseline",
                        ...s(699422).RC
                    }
                },
                eA = (0, s(109939).YK)({
                    untitledWorkspace: {
                        defaultMessage: "Untitled workspace",
                        id: "searchResultsBody.askAiInUntitledWorkspacePlaceholder"
                    },
                    askAiInSpace: {
                        id: "searchResultsBody.askAiInSpace",
                        defaultMessage: "in {name}"
                    },
                    unifiedFindAskAiMenuItemTitle: {
                        id: "searchResultsBody.unifiedFindAskAiMenuItem.title",
                        defaultMessage: "Search all sources with AI"
                    },
                    askAiMenuItemServiceDown: {
                        id: "searchResultsBody.askAiMenuItem.serviceDown",
                        defaultMessage: " — {icon} AI is currently unavailable"
                    },
                    askAiMenuItemTitle: {
                        id: "searchResultsBody.askAiMenuItem.title",
                        defaultMessage: "Ask AI"
                    }
                }),
                eB = {
                    style0: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        padding: 0,
                        overflow: "visible",
                        bottom: s(725571).g,
                        insetInlineStart: s(725571).g
                    }
                },
                eR = function(e) {
                    let {
                        searchResultStore: t,
                        sxsMode: a,
                        searchDebugColumnStore: i,
                        extraTopPadding: l,
                        comboboxProps: o
                    } = e, d = (0, s(533992).v3)(), u = (0, s(109939).tz)(), p = (0, s(682985).O$)(s(728372).AppStoreSidebarSpaceStore), m = (0, s(682985).K8)(() => s(661238).zw.state.text, []), g = (0, s(682985).uB)(void 0, s(419110).$), h = (0, s(682985).K8)(() => g.state.focus, [g]), {
                        handleSelectSearchResult: f,
                        isQuickSearch: y
                    } = (0, r.useContext)(s(250227).SearchStaticContext), {
                        localResults: v,
                        serverResults: x,
                        clusterInfo: b,
                        debugInfo: S,
                        serverResultsLoading: w,
                        searchExperimentOverrides: M,
                        hasPublicAccessPermission: j,
                        serverResultsAllLoaded: k
                    } = (0, s(682985).K8)(() => {
                        var e, a;
                        let {
                            hasPublicAccessPermission: r
                        } = (0, s(773438).E)(d);
                        return {
                            localResults: t.state.localResults,
                            serverResults: t.state.serverResults,
                            serverResultsLoading: t.state.serverResultsLoading,
                            clusterInfo: null == (e = t.state.serverResults) ? void 0 : e.clusterInfo,
                            debugInfo: null == (a = t.state.serverResults) ? void 0 : a.debugInfo,
                            searchExperimentOverrides: i.state.searchExperimentOverrides,
                            hasPublicAccessPermission: r,
                            serverResultsAllLoaded: t.state.serverResultsAllLoaded
                        }
                    }, [t, i, d]), C = (0, s(682985).K8)(() => t.state.errorState, [t]), T = (0, r.useCallback)(() => {
                        w || k || void 0 === x || s(661238).Ay.update(e => ({ ...e,
                            limit: e.limit + s(661238).ZK,
                            isScrolled: !0,
                            source: "quick_find_scroll"
                        }))
                    }, [w, k, x]), I = (0, s(682985).K8)(() => (0, s(469440).y)({
                        localResults: null == v ? void 0 : v.results,
                        serverResults: null == x ? void 0 : x.results
                    }) ? ? [], [v, x]), A = (0, s(682985).K8)(() => {
                        let e;
                        return e = p ? (0, s(742197).G)(d, p) : u.formatMessage(eA.untitledWorkspace), u.formatMessage(eA.askAiInSpace, {
                            name: e
                        })
                    }, [p, d, u]), B = (0, s(682985).K8)(() => s(886556).z.isDeepFindEnabled(), []), R = (0, s(682985).K8)(() => s(930179).default.state.sessionId, []), P = (0, s(682985).K8)(() => s(930179).default.state.isNewElectronTab, []), {
                        isNaturalLanguageQueryWithCredits: H,
                        aiSearchResultItemVariant: _,
                        aiUsageAvailability: E,
                        hasCreditsForAiUsage: D
                    } = (0, s(110419).T)({
                        query: m,
                        searchSessionId: R
                    }), F = "auto_streaming" === _, N = D || null == E ? void 0 : E.upsell, L = (0, s(682985).K8)(() => s(352120).R.isUnifiedFindDown(), []), O = (0, s(960253).I)(() => ({
                        container: {
                            display: "flex",
                            flexDirection: "column",
                            width: a ? "50%" : "100%",
                            overflow: "hidden"
                        },
                        askAiQueryContainer: {
                            display: "flex",
                            flexDirection: "row",
                            width: a ? "50%" : "100%",
                            flex: 1,
                            overflow: "hidden",
                            alignItems: "center",
                            color: s(632079).Tj.text.primary,
                            fontWeight: s(699422).Wy.medium,
                            fontSize: 14
                        }
                    }), [a]), {
                        handleClick: z
                    } = (0, s(79268).C)({
                        upsell: N,
                        source: "ai_unified_find_search_modal",
                        spaceStore: p
                    }), K = (0, s(682985).K8)(() => s(661238).Ay.state.query.filters, []), q = (0, r.useCallback)(async e => {
                        if (L) return;
                        if (!D) return void await z();
                        let t = {
                            metric: s(680007).default.mark("ai_input_to_transcript_render"),
                            surface: "search_modal"
                        };
                        s(57168).defaultClientAIChatStore.setState({ ...s(57168).defaultClientAIChatStore.state,
                            userInputToTranscriptRenderMetric: t
                        });
                        let a = null != e && e.event ? (0, s(7029).V)(e.event) : void 0,
                            i = P || "tab" === a,
                            r = (0, s(922900).getWorkflowAgentConfig)({
                                environment: d,
                                useReadOnlyMode: !0,
                                searchSessionId: R
                            });
                        (0, s(862451).navigateAndStartInferenceTranscript)({
                            environment: d,
                            query: (0, s(247438).x9d)(m),
                            clientStore: s(57168).defaultClientAIChatStore,
                            config: r,
                            openInNewTab: i,
                            openUsingQuickSearchHandler: y,
                            surface: "search_modal",
                            initialAgentActions: ["injectSearchTool"]
                        })
                    }, [z, d, D, L, P, y, m, R]), {
                        setDismissUnifiedFindUpsell: V,
                        hasUserDismissedSearchModalUnifiedFindComponent: W,
                        canDismissUnifiedFindUpsell: U
                    } = function() {
                        let {
                            spaceId: e,
                            userId: t
                        } = (0, s(682985).K8)(() => {
                            var e, t;
                            return {
                                spaceId: null == (e = s(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.id,
                                userId: null == (t = s(728372).AppStoreCurrentUserStore.state) ? void 0 : t.userId
                            }
                        }, []), a = (0, s(217844)._)({
                            name: "ai_usage",
                            spaceId: e,
                            userId: t,
                            amount: 1
                        }), i = (null == a ? void 0 : a.type) === "available", n = (0, s(682985).K8)(() => {
                            let e = s(728372).AppStoreCurrentUserSettingsStore.state;
                            return !!e && !i && !!e.getSettingsStore().getKeyStore("ai_search_modal_item_dismissed_by_user_without_ai_at").getValue()
                        }, [i]), l = (0, s(533992).v3)();
                        return {
                            setDismissUnifiedFindUpsell: (0, r.useCallback)(() => {
                                let e = s(728372).AppStoreCurrentUserSettingsStore.state;
                                e && (0, s(377796).createAndCommit)({
                                    userAction: "debuggingHelpers.resetAiSearchModalItemDismissed",
                                    environment: l,
                                    cellTarget: "main",
                                    canUndo: !0,
                                    userId: t,
                                    perform: t => {
                                        (0, s(862759).m)({
                                            userSettingsStore: e,
                                            data: {
                                                ai_search_modal_item_dismissed_by_user_without_ai_at: Date.now()
                                            },
                                            transaction: t
                                        })
                                    }
                                })
                            }, [l, t]),
                            hasUserDismissedSearchModalUnifiedFindComponent: n,
                            canDismissUnifiedFindUpsell: !i
                        }
                    }(), $ = (0, s(533992).WS)(), Q = (0, r.useCallback)(() => {
                        if (!$ && "auto_streaming" !== _ && "none" !== _ && !W) return {
                            type: "assistant",
                            renderTitle: () => (0, c.jsxs)("div", {
                                className: "notranslate",
                                style: O.askAiQueryContainer,
                                children: [(0, c.jsx)("span", {
                                    style: eI.textOverflow,
                                    children: B ? (0, c.jsxs)("div", {
                                        style: eI.unifiedFindInnerTitle,
                                        children: [u.formatMessage(F ? eA.askAiMenuItemTitle : eA.unifiedFindAskAiMenuItemTitle), L ? (0, c.jsx)(s(111010).D, {
                                            as: "span",
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            style: eI.aiUnavailable,
                                            children: u.formatMessage(eA.askAiMenuItemServiceDown, {
                                                icon: (0, c.jsx)(s(16275).I, {
                                                    icon: s(460237).C
                                                })
                                            })
                                        }) : (0, c.jsxs)(c.Fragment, {
                                            children: [(0, c.jsx)(s(894576).O, {}), (0, c.jsx)(s(111010).D, {
                                                styleKey: "captionRegular",
                                                colorVariant: "tertiary",
                                                style: eI.styledTextQuery,
                                                children: ` — "${m}"`
                                            })]
                                        })]
                                    }) : u.formatMessage(eA.askAiMenuItemTitle)
                                }), B ? null : (0, c.jsx)("span", {
                                    style: eI.query,
                                    children: m.length > 0 ? ' "Search query"' : ` ${A}`
                                })]
                            }),
                            action: q
                        }
                    }, [$, _, W, B, O.askAiQueryContainer, u, F, L, m, A, q]), Y = (0, s(682985).K8)(() => !!s(696190).default.isVisible("search_unified_find_result_tooltip") && d.WindowSizeStore.state.width >= 1260 && !y && !L, [d.WindowSizeStore, L, y]), J = (0, r.useRef)(null), Z = (0, s(682985).K8)(() => s(930179).default.state.searchMode, []), et = (0, r.useMemo)(() => {
                        if (a || "default" !== Z) return;
                        if ("auto_streaming" === _) return {
                            key: "AssistantStreamingElement",
                            action: e => {
                                if (!J.current) return;
                                let t = (0, s(7029).V)(null == e ? void 0 : e.event),
                                    a = s(930179).default.state.isNewElectronTab;
                                J.current.navigateToThread({
                                    openInNewTab: !!("tab" === t || a)
                                })
                            },
                            render: e => (0, c.jsx)(s(582629).bF, {
                                query: m,
                                searchFilters: K,
                                searchResultsStore: t,
                                searchSessionId: R,
                                menuListItemProps: e,
                                ref: J
                            })
                        };
                        let e = Q();
                        if (e) return function(e) {
                            let {
                                environment: t,
                                item: a,
                                key: i,
                                shouldShowDeepFindTooltip: r,
                                shouldShowDismissButton: n,
                                onClickDismissButton: l
                            } = e;
                            return {
                                key: `SearchResults.SearchAssistantMenuItem${i?`.${i}`:""}`,
                                action: async e => {
                                    await a.action(e), r && (0, s(59579).a)(t, "search_unified_find_result_tooltip")
                                },
                                render: e => (0, c.jsx)(s(182718).zD, {
                                    open: r,
                                    trapFocus: !1,
                                    keepFocus: !0,
                                    preventCaptureEsc: !0,
                                    placementToOrigin: "right",
                                    alignmentToOrigin: "start",
                                    popupType: s(182718).nl.Popup,
                                    disableMouseCapture: !0,
                                    preventScaleTransition: !0,
                                    preventOpacityTransition: !0,
                                    content: () => (0, c.jsx)(eC, {}),
                                    style: eB.style0,
                                    children: (0, c.jsx)(s(488229).A, { ...e,
                                        ...a,
                                        onClickDismissButton: l,
                                        shouldShowDismissButton: n,
                                        title: a.renderTitle()
                                    })
                                })
                            }
                        }({
                            environment: d,
                            key: "AssistantMenuListSearchItem",
                            item: e,
                            shouldShowDeepFindTooltip: Y,
                            shouldShowDismissButton: !W && U,
                            onClickDismissButton: () => V()
                        })
                    }, [a, Z, _, Q, d, Y, W, U, m, K, t, R, V]), es = (0, s(682985).K8)(() => {
                        let e = [];
                        return et && e.push({
                            type: "assistant",
                            value: m
                        }), t.update(t => ({ ...t,
                            fixedActionResults: e
                        })), e.length
                    }, [et, m, t]), ea = (0, r.useCallback)(e => g.update(t => t.focus.isInitialized && 0 === t.focus.section && 0 === t.focus.indexLocal && 0 === t.focus.indexGlobal || void 0 !== I && void 0 !== t.focus.indexGlobal && t.focus.indexGlobal <= I.length ? t : { ...t,
                        focus: e.numberOfFixedActionResults > 0 ? {
                            section: 1,
                            indexLocal: 0,
                            indexGlobal: e.numberOfFixedActionResults,
                            footerFocused: !1
                        } : {
                            section: 0,
                            indexLocal: 0,
                            indexGlobal: 0,
                            footerFocused: !1
                        }
                    }), [g, I]);
                    (0, s(682985).K8)(() => {
                        !1 !== s(661238).Ay.state.isSidePeekPanelOpen && s(661238).Ay.update(e => ({ ...e,
                            isSidePeekPanelOpen: !1
                        }))
                    }, [!1]), (0, r.useEffect)(() => {
                        ea({
                            numberOfFixedActionResults: es
                        })
                    }, [I, es, ea]), (0, r.useEffect)(() => {
                        void 0 !== h.section && void 0 !== h.indexLocal && void 0 !== h.indexGlobal ? t.update(e => ({ ...e,
                            focusedIndex: {
                                local: {
                                    section: h.section,
                                    indexLocal: h.indexLocal
                                },
                                global: h.indexGlobal
                            }
                        })) : t.update(e => ({ ...e,
                            focusedIndex: void 0
                        }))
                    }, [h, t]), (0, s(682985).K8)(() => n({
                        searchResultStore: t
                    }), [t]);
                    let ei = (0, s(682985).K8)(() => !!t.state.currentlySelectedUniversalSearchResultView, [t]);
                    return (0, c.jsxs)("div", {
                        style: O.container,
                        children: [ei ? (0, c.jsx)(X, {
                            searchResultStore: t
                        }) : (0, c.jsxs)("div", {
                            style: eI.resultsContainer,
                            children: [(0, c.jsx)(ee, {
                                errorState: C,
                                handleSelectResult: f,
                                onMaybeLoadMoreResults: T,
                                resultListStore: g,
                                searchResultStore: t,
                                localResults: null == v ? void 0 : v.results,
                                serverResults: null == x ? void 0 : x.results,
                                debugInfo: S,
                                clusterInfo: b,
                                publicAccessPermission: j,
                                searchExperimentOverrides: M,
                                assistantResultItem: et,
                                extraTopPadding: l,
                                comboboxProps: o,
                                isQueryNaturalLanguageQuestion: H
                            }), null]
                        }), (0, c.jsx)(G, {
                            searchResultStore: t,
                            showSpinner: w,
                            shouldShow: !0
                        })]
                    })
                },
                eP = {
                    width: "100%",
                    height: "100%",
                    overflowX: "hidden",
                    overflowY: "auto"
                },
                eH = {
                    paddingInlineStart: 1
                },
                e_ = function(e) {
                    let {
                        onSelect: t,
                        comboboxProps: a
                    } = e, i = (0, s(682985).uB)(void 0, s(419110).$), n = (0, s(428401).F)({}), l = (0, r.useMemo)(() => n ? n.results.map(e => ({
                        key: e.store.id,
                        render: t => (0, c.jsx)(s(465708).GC, { ...t,
                            store: e.store,
                            inline: !s(986939).A.isMobile,
                            hidePath: !1,
                            buttonStyle: eH,
                            type: "recent_pages"
                        }),
                        action: s => t({
                            index: {
                                local: s.indexLocal,
                                global: s.index
                            },
                            event: s.event,
                            selectedResult: e,
                            fromSidePeekPanel: !1,
                            context: "recent_pages"
                        })
                    })) : [], [n, t]), o = (0, r.useMemo)(() => [{
                        key: "pages",
                        items: l,
                        render: e => (0, c.jsx)(s(844565).A, {
                            title: (0, c.jsx)(s(109939).sA, {
                                id: "search.default_page_body.pages",
                                defaultMessage: "Pages"
                            }),
                            children: e.children
                        })
                    }], [l]);
                    return n ? (0, c.jsx)("div", {
                        style: eP,
                        children: (0, c.jsx)(s(558045).A, {
                            store: i,
                            type: s(558045).O.Vertical,
                            initialFocus: 0,
                            disableKeyboardArrowWrap: !0,
                            sections: o,
                            unfocusOnScroll: !0,
                            comboboxProps: a
                        })
                    }) : null
                },
                eE = {
                    display: "flex",
                    flexDirection: "row",
                    height: "100%",
                    overflow: "hidden",
                    maxWidth: "100%"
                };

            function eD(e) {
                let {
                    searchContentPaneType: t,
                    comboboxProps: a
                } = e, i = (0, s(345776).T)(), n = (0, s(533992).v3)(), {
                    searchMobileFilterMenuRef: l,
                    handleSelectSearchResult: o,
                    searchResultStore: d,
                    secondarySearchResultStore: u,
                    handlePopupOpen: p,
                    handlePopupClose: m
                } = (0, r.useContext)(s(250227).SearchStaticContext), {
                    parentStore: g
                } = (0, r.useContext)(s(250227).SearchStoresContext), h = (0, s(682985).K8)(() => !!((0, s(729247).I5)() && s(729247).nS.state.visible), []), f = (0, s(682985).K8)(() => {
                    let e = d.state.errorState;
                    return !1 === e.isLoading && e.showMajorError
                }, [d]), y = (0, s(682985).K8)(() => s(661238).zw.state.filters, []), {
                    shouldShowFilterBar: v,
                    sort: x
                } = (0, s(682985).K8)(() => ({
                    shouldShowFilterBar: s(661238).Ay.state.filterBar.show,
                    sort: s(661238).Ay.state.query.sort
                }), []), b = (0, r.useCallback)(e => s(661238).Ay.updateFilters(e), []), M = (0, r.useCallback)(e => {
                    s(661238).Ay.updateSort(e)
                }, []), j = !s(986939).A.isMobile && !v, k = (0, r.useMemo)(() => ({
                    searchResultStore: d,
                    searchDebugColumnStore: s(729247).E,
                    sxsMode: h,
                    extraTopPadding: j,
                    comboboxProps: a
                }), [j, d, h, a]), C = (0, s(972740).L)(), T = (0, s(682985).K8)(() => (0, s(428401).a)({
                    spaceStore: C,
                    environment: n
                }).shouldShow, [C, n]);
                return (0, c.jsxs)(c.Fragment, {
                    children: [!s(986939).A.isMobile && v && i ? (0, c.jsx)(s(330551).S, {
                        filters: y,
                        onFiltersChange: b,
                        sort: x,
                        onSortChange: M,
                        parentStore: g,
                        onPopupOpen: p,
                        onPopupClose: m
                    }) : void 0, "search_results" === t ? (0, c.jsxs)(c.Fragment, {
                        children: [!f && s(986939).A.isMobile ? (0, c.jsx)(w, {
                            mode: S.Section,
                            ref: l
                        }) : void 0, (0, c.jsxs)("div", {
                            style: eE,
                            children: [(0, c.jsx)(eR, { ...k
                            }), h ? (0, c.jsx)(eR, { ...k,
                                searchResultStore: u,
                                searchDebugColumnStore: s(729247).nS
                            }) : void 0]
                        })]
                    }) : C ? (0, c.jsx)(s(916084).Ay, {
                        onSelect: o,
                        spaceStore: C,
                        extraTopPadding: j,
                        comboboxProps: a
                    }) : T ? (0, c.jsx)(e_, {
                        onSelect: o,
                        comboboxProps: a
                    }) : null]
                })
            }

            function eF(e) {
                let t = (0, s(533992).v3)();
                return (0, r.useEffect)(() => {
                    (0, s(601860).Dd)() || s(252116).G(t, "searchContentPane")
                }, [t]), ! function() {
                    let {
                        searchResultStore: e,
                        secondarySearchResultStore: t
                    } = (0, r.useContext)(s(250227).SearchStaticContext), {
                        parentStore: a
                    } = (0, r.useContext)(s(250227).SearchStoresContext), i = (0, s(185326).Nu)(a), n = (0, s(682985).K8)(() => !!((0, s(729247).I5)() && s(729247).nS.state.visible), []);
                    (0, s(185326).nR)({
                        dependencies: i,
                        searchResultStore: e,
                        debugColumnStore: s(729247).E,
                        enabled: !0,
                        serverSearchFn: l
                    }), (0, s(185326).nR)({
                        dependencies: i,
                        searchResultStore: t,
                        debugColumnStore: s(729247).nS,
                        enabled: n,
                        serverSearchFn: o,
                        preventUpdateSearchMetrics: !0
                    })
                }(), (0, s(805469).A)({
                    shouldPreserveTextSelection: !0,
                    shouldPreserveBlockSelection: !0,
                    shouldRestoreSelection: !s(986939).A.isMobile
                }), (0, c.jsx)(s(790124).A, {
                    capture: !0,
                    allowMenuList: !0,
                    children: t => (0, c.jsx)(eL, { ...e,
                        ignoreAreaEvents: t
                    })
                })
            }
            let eN = {
                body: {
                    flex: 1,
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    zIndex: 2
                },
                topbar: {
                    height: "auto",
                    marginTop: 10,
                    marginInlineStart: 16,
                    marginBottom: 10,
                    marginInlineEnd: 16
                },
                topbarRightButtonWrapper: {
                    flex: void 0,
                    paddingInlineStart: 16
                },
                topbarButton: {
                    fontWeight: void 0,
                    padding: 0,
                    color: s(632079).Tj.text.secondary
                }
            };

            function eL(e) {
                let {
                    ignoreAreaEvents: t,
                    quickSearchMode: a,
                    onClose: i,
                    searchContentPaneType: l
                } = e, {
                    handleQueryChange: o,
                    modalBodyMenuRef: u,
                    searchResultStore: p,
                    defaultBodyFocusedResult: m,
                    handleCopySearchItemLink: g
                } = (0, r.useContext)(s(250227).SearchStaticContext), [h, f] = (0, r.useState)(!1), [y, v] = (0, r.useState)(!1), [x, b] = (0, s(739271).s)(), S = (0, s(533992).v3)(), w = (0, s(533992).Y0)(), M = (0, s(682985).K8)(() => s(661238).Ay.state.query.text, []), {
                    isSearchMenuOpen: j,
                    shouldShowDebugSidebar: k,
                    hasPublicAccessPermission: C,
                    shouldShowSpinner: T
                } = (0, s(682985).K8)(() => {
                    let e = !!s(205885).A.state.online,
                        {
                            hasPublicAccessPermission: t
                        } = (0, s(773438).E)(S);
                    return {
                        isSearchMenuOpen: s(930179).default.state.open,
                        shouldShowSpinner: e && !!M && p.state.serverResultsLoading && !h,
                        shouldShowDebugSidebar: ez({
                            device: w,
                            isPublicAccessPermissionForPage: t
                        }),
                        hasPublicAccessPermission: t
                    }
                }, [h, p, w, S, M]), I = (0, r.useMemo)(() => s(381453).sg(() => {
                    let {
                        activeElement: e
                    } = document;
                    e instanceof HTMLInputElement && e.blur()
                }, 500, {
                    leading: !0
                }), []), A = (0, r.useCallback)(() => {
                    y && I()
                }, [I, y]), B = (0, r.useCallback)(e => {
                    v(e), !e && w.isMobileNative && s(783129).m(S, s(707785).i.willHide, 0)
                }, [w.isMobileNative, S]), R = (0, s(682985).K8)(() => n({
                    searchResultStore: p
                }), [p]), P = (0, r.useMemo)(() => (0, c.jsx)(s(515709).Ay, {
                    isOpen: a || j,
                    onTypingChange: f,
                    onFocusChange: B,
                    showSpinner: T,
                    onQueryChange: o,
                    quickSearchMode: a,
                    selectedResultStore: (null == R ? void 0 : R.type) === "page_result" ? R.value.selectedResult.store : void 0,
                    inputComboboxProps: x,
                    searchResultStore: p
                }), [j, B, T, o, a, R, x, p]), H = (0, s(682985).K8)(() => eO({
                    quickSearchMode: a
                }), [a]), _ = (0, s(960253).I)(() => ({
                    scroller: {
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "space-between",
                        maxHeight: H.maxHeight,
                        minHeight: H.minHeight
                    }
                }), [H.maxHeight, H.minHeight]), E = (0, r.useMemo)(() => {
                    var e;
                    return s(986939).A.isMobile ? {
                        menuType: s(649476).gu.Modal,
                        left: P,
                        shouldRenderLeftDirectly: !0,
                        width: a ? "100vw" : void 0,
                        ... function({
                            style: e,
                            quickSearchMode: t,
                            onClick: a
                        }) {
                            return t ? {
                                rightOuterStyle: {
                                    display: "none"
                                }
                            } : {
                                right: (0, c.jsx)(s(109939).sA, { ...s(789722).W.cancel
                                }),
                                onClickRight: a,
                                rightOuterStyle: e
                            }
                        }({
                            style: eN.topbarRightButtonWrapper,
                            quickSearchMode: a,
                            onClick: i
                        }),
                        header: "search_results" === l && (0, c.jsx)(K, {
                            isPublicPageSearch: C
                        }),
                        disableHeaderShadow: !0,
                        topbarStyle: eN.topbar,
                        leftRightButtonStyle: eN.topbarButton,
                        onScroll: (e = w, s(986939).A.isMobile && (!e.isIOS || e.isMobileNative)) ? A : void 0,
                        bodyScrollerClassName: s(828432).Smt,
                        ...t
                    } : {
                        menuType: s(649476).gu.Popup,
                        maxHeight: H.maxHeight,
                        minHeight: H.minHeight,
                        maxWidth: "100%",
                        ...a ? {
                            width: "100vw"
                        } : {},
                        disableScroller: !0,
                        scrollerStyle: _.scroller,
                        ...t
                    }
                }, [w, _, t, P, i, l, C, A, H.minHeight, H.maxHeight, a]), D = m || R, F = (0, r.useCallback)(e => {
                    if ((null == D ? void 0 : D.type) !== "page_result") return;
                    let {
                        index: t,
                        selectedResult: s
                    } = D.value;
                    g({
                        index: t,
                        selectedResult: s,
                        fromSidePeekPanel: e.source === d.SidePeekPanel,
                        context: "search_results" === l ? "query_results" : "recent_pages",
                        source: e.source
                    })
                }, [g, l, D]), N = (0, r.useCallback)(async () => {
                    if (!S.device.isElectron || !D || "page_result" !== D.type) return;
                    let e = D.value.selectedResult.store,
                        t = (0, s(483227).J8)({
                            store: e,
                            collectionViewId: e.id,
                            fullyQualified: !0,
                            pageVisitSource: s(254656).y8.SearchQuery
                        });
                    if (!t) return;
                    let [a, i] = await Promise.all([(0, s(161333).r)(), (0, s(969899).jd)()]);
                    i({
                        environment: S,
                        stringValue: t,
                        copiedMessage: a.copiedLinkToClipboard
                    }), F({
                        source: d.KeyboardShortcut
                    })
                }, [S, F, D]);
                return (0, c.jsx)(s(369064).N, {
                    debugName: "SearchContentPane",
                    capture: !0,
                    onCopyLinkToCurrentPage: e => {
                        N()
                    },
                    onCopyLinkToPageInCommandSearch: e => {
                        N()
                    },
                    children: (0, c.jsxs)(s(747369).A, { ...E,
                        className: s(828432).Y0h,
                        ref: u,
                        children: [(0, c.jsxs)("div", {
                            style: eN.body,
                            children: [(0, c.jsx)(s(862761).A, {}), s(986939).A.isMobile ? void 0 : P, (0, c.jsx)(eD, {
                                searchContentPaneType: l,
                                comboboxProps: b
                            })]
                        }), k ? (0, c.jsx)(s(244103).s, {}) : void 0]
                    })
                })
            }

            function eO(e) {
                let {
                    quickSearchMode: t
                } = e;
                return t ? {
                    maxHeight: "100vh",
                    minHeight: "100vh"
                } : {
                    minHeight: "700px",
                    maxHeight: "700px"
                }
            }

            function ez({
                device: e,
                isPublicAccessPermissionForPage: t
            }) {
                return !t && !s(986939).A.isMobile && s(661238).Ay.isDebugSidebarOpen()
            }
        },
        521180: (e, t, s) => {
            s.d(t, {
                A: () => i
            }), s(296540);
            var a = s(474848);
            let i = function(e) {
                let t = (0, s(533992).v3)(),
                    {
                        modalStyle: i,
                        alignItems: r = "flex-start"
                    } = e,
                    n = (0, s(960253).I)(() => ({
                        modalStyle: {
                            top: s(801113).jq(t.device.isElectronMac),
                            borderRadius: 12,
                            overflow: "hidden",
                            boxShadow: s(632079).Tj.shadow.outline.scrim,
                            background: s(632079).Tj.background.primary,
                            ...i
                        }
                    }), [t, i]);
                return s(986939).A.isMobile ? (0, a.jsx)(s(182718).zD, {
                    popupType: s(423291).n.SlideUp,
                    open: e.open,
                    content: e.renderContent,
                    preventSlideUpTransition: e.disableAnimation,
                    onDismiss: e.onDismiss,
                    trapFocus: !1,
                    ariaLabel: e.ariaLabel,
                    children: e.children
                }) : (0, a.jsx)(s(556809).a, {
                    open: e.open,
                    preventHideChildrenWhileOpening: !0,
                    style: {
                        alignItems: r
                    },
                    innerStyle: n.modalStyle,
                    onDismiss: e.onDismiss,
                    origin: e.children,
                    isWaxPaper: e.modalIsWaxPaper,
                    backgroundStyle: e.modalBackgroundStyle,
                    transitionAppearance: e.disableAnimation ? "none" : void 0,
                    ariaLabel: e.ariaLabel,
                    children: e.renderContent()
                })
            }
        },
        540358: (e, t, s) => {
            s.d(t, {
                A: () => i
            }), s(296540);
            var a = s(474848);

            function i(e) {
                let {
                    style: t
                } = e, i = (0, s(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...t
                    }
                }), [t]);
                return (0, a.jsx)(s(746434).E, {
                    color: "blue",
                    style: i.badge,
                    content: (0, a.jsx)(s(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }
        },
        546903: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                    footer: {
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: s(418676).vQ,
                        padding: "6px 8px"
                    },
                    footerWrapper: {
                        flexShrink: 0
                    },
                    footerText: {
                        color: s(632079).Tj.text.tertiary,
                        fontSize: s(418676).Kw,
                        ...s(699422).RC
                    }
                },
                n = function(e) {
                    let t = (0, s(682985).O$)(s(661238).Qb),
                        n = (0, s(682985).K8)(() => (0, s(131672).PF)({
                            env: "production",
                            isAdminMode: s(986939).A.isAdminMode,
                            experimentService: s(218744).default
                        }), []),
                        {
                            searchResultStore: l
                        } = (0, a.useContext)(s(250227).SearchStaticContext),
                        o = (0, s(682985).K8)(() => {
                            var e;
                            return null == (e = l.state.localResults) ? void 0 : e.results
                        }, [l]),
                        {
                            serverResults: d,
                            debugInfo: c,
                            exposedSearchExperiments: u
                        } = (0, s(682985).K8)(() => {
                            var e;
                            let t = l.state.serverResults;
                            return {
                                serverResults: null == t ? void 0 : t.results,
                                debugInfo: null == t ? void 0 : t.debugInfo,
                                exposedSearchExperiments: null == t || null == (e = t.serverEventProperties) ? void 0 : e["server-searchExperiments"]
                            }
                        }, [l]);
                    return (0, i.jsx)("footer", {
                        style: r.footerWrapper,
                        children: (0, i.jsxs)(s(844565).A, {
                            topBorder: !0,
                            style: r.footer,
                            disableDesktopPadding: !0,
                            children: [(0, i.jsx)(s(636518).Ay, { ...e,
                                style: r.footerText
                            }), (0, i.jsxs)(s(4458).fI, {
                                gap: 4,
                                children: [e.shouldShowReportBadSearchButton ? (0, i.jsx)(s(219346).c, {
                                    productSurface: s(821603).xi.searchModal,
                                    localResults: o,
                                    serverResults: d,
                                    debugInfo: c,
                                    exposedSearchExperiments: u
                                }) : void 0, n && !t ? (0, i.jsx)(s(988022).p, {
                                    onClick: () => s(661238).Ay.setState({ ...s(661238).Ay.state,
                                        isDebugSidebarOpen: !0
                                    }),
                                    size: "sm",
                                    colorPalette: "gray",
                                    iconLeading: s(829968).gearIcon
                                }) : void 0]
                            })]
                        })
                    })
                }
        },
        578751: (e, t, s) => {
            s.d(t, {
                G: () => n,
                S: () => r
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(581454);
            var a = s(296540),
                i = s(474848);
            let r = {
                divider: {
                    color: s(632079).Tj.text.secondary,
                    fontSize: 12
                },
                titleHighlight: {
                    color: s(632079).Tj.text.primary
                },
                title: {
                    fontWeight: s(699422).Wy.medium,
                    lineHeight: "20px",
                    color: s(632079).Tj.text.accentPrimary
                }
            };

            function n(e) {
                let {
                    badges: t,
                    store: n,
                    highlight: l,
                    recordPathCaption: o,
                    isAgentResult: d,
                    isCollection: c,
                    agentName: u,
                    allowTextHighlightFallback: p
                } = e, m = (null == l ? void 0 : l.title) ? ? (p ? null == l ? void 0 : l.text : void 0), g = (0, s(648481).PO)({
                    words: (0, s(648481).oQ)(m),
                    highlightText: m,
                    styleOverride: r.titleHighlight
                }), h = (0, s(682985).K8)(() => n.isReady(), [n]), f = (0, a.useMemo)(() => d ? (0, i.jsx)("span", {
                    style: r.title,
                    children: (0, i.jsx)(s(663528).A, {
                        text: u ? ? "",
                        highlighter: g
                    })
                }) : h ? (0, i.jsx)(s(627918).A, {
                    store: n,
                    style: r.title,
                    highlighter: g
                }) : void 0, [n, g, h, u, d]), y = (0, a.useMemo)(() => new Set(t.map(e => e.type)), [t]);
                return (0, i.jsxs)(s(4458).fI, {
                    gap: 4,
                    alignItems: "center",
                    children: [f, c || y.has("is_collection") ? (0, i.jsx)(s(621942).se, {}) : void 0, y.has("verified") ? (0, i.jsx)(s(16275).I, {
                        icon: s(187627).badgeCheckFillSmallIcon,
                        size: "sm",
                        colorPalette: "blue",
                        colorVariant: "accentPrimary"
                    }) : void 0, y.has("archived") ? (0, i.jsx)(s(16275).I, {
                        icon: s(968793).j,
                        size: "sm",
                        colorPalette: "gray",
                        colorVariant: "tertiary"
                    }) : void 0, y.has("current_page") ? (0, i.jsx)(s(621942).FN, {}) : void 0, y.has("is_template") ? (0, i.jsx)(s(621942).rx, {}) : void 0, y.has("popular_this_week") ? (0, i.jsx)(s(621942).oj, {}) : void 0, y.has("most_viewed") ? (0, i.jsx)(s(621942).iY, {}) : void 0, y.has("agent") ? (0, i.jsx)(s(621942).Kg, {}) : void 0, y.has("ai_skill") ? (0, i.jsx)(s(621942).Wn, {}) : void 0, o ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            style: r.divider,
                            children: "—"
                        }), o]
                    }) : void 0]
                })
            }
        },
        582629: (e, t, s) => {
            let a;
            s.d(t, {
                bF: () => o
            }), s(16280), s(18107), s(410838), s(944114), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(967357);
            var i = s(296540),
                r = s(474848);

            function n(e) {
                let {
                    threadStore: t,
                    environment: a,
                    spaceId: i
                } = e;
                (0, s(377796).createAndCommit)({
                    userAction: "SearchAutoStreamResultsBox.setThreadToUnifiedFindCreationSource",
                    environment: a,
                    cellTarget: {
                        spaceWithId: i
                    },
                    canUndo: !1,
                    perform: e => {
                        (0, s(421439).y4)({
                            store: t,
                            operation: s(488307).op.update({
                                pointer: t.pointer,
                                path: [],
                                args: {
                                    space_id: i,
                                    created_source: "full_page_chat"
                                }
                            }),
                            transaction: e
                        })
                    }
                })
            }
            let l = {
                    autoStreamResultsBox: {
                        paddingTop: 8,
                        paddingInlineEnd: 4,
                        paddingInlineStart: 2,
                        width: "100%"
                    },
                    loadingWrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        borderRadius: 6,
                        paddingBottom: 8
                    },
                    askAiText: {
                        fontWeight: s(699422).Wy.medium,
                        fontSize: 14
                    },
                    answerContainer: {
                        boxShadow: s(632079).Tj.shadow.outline.sm,
                        borderRadius: 6,
                        alignItems: "flex-start",
                        minHeight: 36,
                        marginTop: 2,
                        marginBottom: 2
                    }
                },
                o = (0, i.forwardRef)(function(e, t) {
                    let {
                        query: o,
                        searchFilters: d,
                        searchResultsStore: c,
                        menuListItemProps: m,
                        searchSessionId: h
                    } = e, f = (0, s(682985).K8)(() => s(218744).default.getConfigKey("ai_auto_stream_config", "debounceTimeMs") ? ? 1500, []), y = (0, s(668745).lW)(o, f, (e, t) => {
                        var s, a;
                        return (s = e) === (a = t) || !!s && !!a && s.trim() === a.trim()
                    }), {
                        latestThreadState: v,
                        navigateToThreadStore: x,
                        navigateToFreshThreadWithQuery: b,
                        analyticsData: S
                    } = function(e) {
                        let {
                            query: t,
                            searchFilters: r,
                            searchResultsStore: l,
                            searchSessionId: o
                        } = e, d = (0, s(533992).v3)(), c = (0, s(682985).O$)(s(674880).defaultInferenceContextStore), [u, p] = (0, i.useState)(void 0), [m, g] = (0, i.useState)({
                            type: "loading"
                        }), h = (0, i.useCallback)(e => {
                            if (!e || 0 === e.length) return;
                            if (!c) throw Error("No current space");
                            g({
                                type: "recomputing"
                            });
                            let t = (0, s(674880).Kf)({
                                environment: d,
                                spaceStore: c.spaceStore,
                                userStore: c.userStore,
                                value: e
                            });
                            (0, s(757688).Wq)({
                                clientStore: s(57168).defaultClientAIChatStore,
                                environment: d
                            });
                            let i = (0, s(674880).Xd)({
                                    environment: d,
                                    inferenceContext: c,
                                    config: {
                                        type: "search",
                                        scopeForNextSearch: {
                                            type: "everything"
                                        },
                                        searchSessionId: o,
                                        filtersForNextSearch: {
                                            ancestorsFilter: null == r ? void 0 : r.ancestors,
                                            createdByFilter: null == r ? void 0 : r.createdBy,
                                            teamspacesFilter: (0, s(821603).fg)(null == r ? void 0 : r.inTeams),
                                            titleOnlyFilter: null == r ? void 0 : r.navigableBlockContentOnly
                                        }
                                    },
                                    addSteps: [t],
                                    surface: "auto_stream"
                                }),
                                n = (0, s(225900).N)({
                                    environment: d,
                                    spaceStore: c.spaceStore,
                                    transcript: i,
                                    createdSource: "auto_stream"
                                });
                            return a && (s(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(a).resetState(), a = n.id), p(n), n
                        }, [d, o, c, r]);
                        (0, i.useEffect)(() => {
                            h((0, s(247438).x9d)(t))
                        }, [h, t]);
                        let f = (0, i.useRef)(new Set),
                            y = (0, i.useCallback)(({
                                results: e,
                                disambiguationKey: t
                            }) => {
                                !l || f.current.has(t) || (l.update(t => ({ ...t,
                                    universalResults: e
                                })), f.current.add(t))
                            }, [l]);
                        (0, s(682985).K8)(() => {
                            if (!u) return;
                            let e = u.getTranscript(),
                                t = e.at(-1);
                            if ((null == t ? void 0 : t.type) === "search" && ("resultsComplete" === t.status || "resultsBlended" === t.status)) y({
                                results: t.results,
                                disambiguationKey: t.id
                            });
                            else if ((null == t ? void 0 : t.type) === "search-chat") {
                                let a = e.findLast(e => "search" === e.type && ("resultsComplete" === e.status || "resultsBlended" === e.status)),
                                    i = 0;
                                for (let [, e] of (0, s(722371).WP)((null == a ? void 0 : a.results) ? ? {})) i += (null == e ? void 0 : e.length) ? ? 0;
                                g({
                                    type: "completed",
                                    searchChatResult: t.value,
                                    resultCount: i,
                                    traceId: t.traceId
                                })
                            } else {
                                var a;
                                let e = null == (a = s(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(u.id).state) ? void 0 : a.temporarySteps;
                                if (!e) return;
                                let t = e.findLast(e => "search-chat" === e.type),
                                    i = e.findLast(e => "search" === e.type && "resultsPartial" === e.status);
                                i && y({
                                    results: i.results,
                                    disambiguationKey: `partial-${i.id}`
                                }), t && g({
                                    type: "streaming",
                                    currentStreamResult: t.value,
                                    traceId: t.traceId
                                })
                            }
                        }, [u, y]);
                        let v = (0, i.useCallback)(e => {
                            u && c && ((0, s(862451).navigateToInferenceTranscriptRoute)({
                                environment: d,
                                oldThreadStore: void 0,
                                newThreadStore: u,
                                createdSource: "auto_stream",
                                openInNewTab: e.openInNewTab
                            }), n({
                                threadStore: u,
                                environment: d,
                                spaceId: c.spaceStore.id
                            }))
                        }, [d, u, c]);
                        return {
                            latestThreadState: m,
                            navigateToThreadStore: v,
                            navigateToFreshThreadWithQuery: (0, i.useCallback)(e => {
                                if (!c) return;
                                let t = h(e.query);
                                t && ((0, s(862451).navigateToInferenceTranscriptRoute)({
                                    environment: d,
                                    oldThreadStore: void 0,
                                    newThreadStore: t,
                                    createdSource: "auto_stream",
                                    openInNewTab: e.openInNewTab
                                }), n({
                                    threadStore: t,
                                    environment: d,
                                    spaceId: c.spaceStore.id
                                }))
                            }, [d, h, c]),
                            analyticsData: (0, i.useMemo)(() => ({
                                thread_id: null == u ? void 0 : u.id,
                                search_session_id: o
                            }), [o, null == u ? void 0 : u.id])
                        }
                    }({
                        query: y,
                        searchFilters: d,
                        searchResultsStore: c,
                        searchSessionId: h
                    }), w = (0, i.useRef)(null), M = (0, i.useCallback)(e => {
                        let {
                            openInNewTab: t
                        } = e;
                        y !== o ? b({
                            query: (0, s(247438).x9d)(o),
                            openInNewTab: t
                        }) : x({
                            openInNewTab: t
                        })
                    }, [b, x, o, y]);
                    (0, i.useImperativeHandle)(t, () => ({
                        navigateToThread: M
                    }), [M]);
                    let j = (0, i.useMemo)(() => {
                        let e = (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(s(861510).N, {
                                styleKey: "captionMedium",
                                animate: !0,
                                colorVariant: "secondary",
                                text: (0, r.jsx)(s(109939).sA, {
                                    id: "SearchAutoStreamResultsBox.updatingStep",
                                    defaultMessage: "Thinking"
                                })
                            }), (0, r.jsx)(s(118845).A, {
                                isTriColored: !0
                            })]
                        });
                        switch (v.type) {
                            case "loading":
                                return (0, r.jsxs)("div", {
                                    style: l.loadingWrapper,
                                    children: [(0, r.jsx)(s(16275).I, {
                                        icon: s(273344).aiFaceIcon,
                                        colorVariant: "primary"
                                    }), (0, r.jsx)("div", {
                                        style: l.askAiText,
                                        children: (0, r.jsx)(s(109939).sA, {
                                            id: "SearchAutoStreamResultsBox.AskAI.loading",
                                            defaultMessage: "Ask AI —"
                                        })
                                    }), e]
                                });
                            case "recomputing":
                                return (0, r.jsxs)("div", {
                                    children: [(0, r.jsxs)(s(4458).fI, {
                                        alignItems: "center",
                                        gap: 6,
                                        children: [(0, r.jsx)(s(16275).I, {
                                            icon: s(273344).aiFaceIcon,
                                            colorVariant: "primary"
                                        }), (0, r.jsx)("div", {
                                            style: l.askAiText,
                                            children: (0, r.jsx)(s(109939).sA, {
                                                id: "SearchAutoStreamResultsBox.AskAI.streaming",
                                                defaultMessage: "Ask AI"
                                            })
                                        }), e]
                                    }), (0, r.jsx)(p, {
                                        alreadyStreamedAnswerContainerRef: w
                                    })]
                                });
                            case "streaming":
                                return (0, r.jsxs)("div", {
                                    ref: w,
                                    children: [(0, r.jsxs)(s(4458).fI, {
                                        alignItems: "center",
                                        gap: 6,
                                        children: [(0, r.jsx)(s(16275).I, {
                                            icon: s(273344).aiFaceIcon,
                                            colorVariant: "primary"
                                        }), (0, r.jsx)("div", {
                                            style: l.askAiText,
                                            children: (0, r.jsx)(s(109939).sA, {
                                                id: "SearchAutoStreamResultsBox.AskAI.streaming",
                                                defaultMessage: "Ask AI"
                                            })
                                        }), e]
                                    }), (0, r.jsx)(g, {
                                        streamingText: v.currentStreamResult,
                                        isFocused: m.focused,
                                        analyticsData: S,
                                        traceId: v.traceId
                                    })]
                                }, "answer");
                            case "completed":
                                return (0, r.jsxs)("div", {
                                    ref: w,
                                    children: [(0, r.jsxs)(s(4458).fI, {
                                        alignItems: "center",
                                        gap: 6,
                                        children: [(0, r.jsx)(s(16275).I, {
                                            icon: s(273344).aiFaceIcon,
                                            colorVariant: "primary"
                                        }), (0, r.jsx)("div", {
                                            style: l.askAiText,
                                            children: (0, r.jsx)(s(109939).sA, {
                                                id: "SearchAutoStreamResultsBox.AskAI.query",
                                                defaultMessage: "Ask AI"
                                            })
                                        }), (0, r.jsx)(s(894576).O, {
                                            marginLeftOverride: 4
                                        }), (0, r.jsx)(s(111010).D, {
                                            styleKey: "captionRegular",
                                            colorVariant: "tertiary",
                                            children: (0, r.jsx)(s(109939).sA, {
                                                defaultMessage: "— {resultCount, plural, one {{resultCount} result} other {{resultCount} results}}",
                                                id: "SearchAutoStreamResultsBox.AskAI.resultCount",
                                                values: {
                                                    resultCount: v.resultCount
                                                }
                                            })
                                        })]
                                    }), (0, r.jsx)(g, {
                                        streamingText: v.searchChatResult,
                                        isFocused: m.focused,
                                        analyticsData: S,
                                        traceId: v.traceId
                                    })]
                                }, "answer");
                            default:
                                (0, s(722371).HB)(v)
                        }
                    }, [S, v, m.focused]);
                    return (0, r.jsx)(s(95582).A, {
                        style: "recomputing" === v.type || "streaming" === v.type || "completed" === v.type ? l.answerContainer : void 0,
                        textWrapperStyle: l.autoStreamResultsBox,
                        ...m,
                        title: j,
                        right: (0, r.jsx)(u, {
                            focused: m.focused
                        })
                    })
                }),
                d = {
                    marginInlineEnd: 6,
                    marginTop: 2
                },
                c = {
                    marginInlineEnd: 4
                };

            function u(e) {
                let {
                    focused: t
                } = e, a = (0, s(960253).I)(() => ({
                    right: {
                        display: "flex",
                        opacity: +!!t,
                        marginTop: 8
                    }
                }), [t]);
                return (0, r.jsx)("div", {
                    style: a.right,
                    children: (0, r.jsxs)(s(4458).fI, {
                        alignItems: "center",
                        justifyContent: "center",
                        children: [(0, r.jsx)("div", {
                            style: c,
                            children: (0, r.jsx)(s(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: (0, r.jsx)(s(109939).sA, {
                                    defaultMessage: "Open",
                                    id: "SearchAutoStreamResultsBox.AskAI.open"
                                })
                            })
                        }), (0, r.jsx)(s(16275).I, {
                            icon: s(916915).arrowTurnDownLeftFillSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary",
                            style: d
                        })]
                    })
                })
            }

            function p(e) {
                let {
                    alreadyStreamedAnswerContainerRef: t
                } = e, a = (0, i.useMemo)(() => {
                    if (!(null != t && t.current)) return;
                    let e = Math.max(1, Math.ceil((t.current.getBoundingClientRect().height - 20) / 30)),
                        s = [];
                    return e > 8 ? (s.push({
                        lineHeight: 20,
                        lineMargin: 5,
                        sectionWidths: [100],
                        repeat: 5,
                        sectionMargin: 10
                    }), s.push({
                        lineHeight: 20,
                        lineMargin: 5,
                        sectionWidths: [85],
                        repeat: Math.min(5, e - 5),
                        sectionMargin: 10
                    }), e > 10 && s.push({
                        lineHeight: 20,
                        lineMargin: 5,
                        sectionWidths: [70],
                        repeat: e - 10,
                        sectionMargin: 10
                    })) : s.push({
                        lineHeight: 20,
                        lineMargin: 5,
                        sectionWidths: [100],
                        repeat: e,
                        sectionMargin: 10
                    }), s
                }, [t]);
                return null !== t.current && a ? (0, r.jsx)(s(394673).A, {
                    paragraphs: a
                }) : null
            }
            let m = {
                textStyle: {
                    fontSize: 14,
                    lineHeight: "20px",
                    fontWeight: s(699422).Wy.medium
                },
                style0: {
                    position: "relative"
                }
            };

            function g(e) {
                let {
                    streamingText: t
                } = e, a = i.useRef(null), n = i.useRef(null), [l, o] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    !l && n.current && a.current && n.current.scrollHeight > 92 && o(!0)
                }, [t, l]);
                let d = (0, s(533992).v3)();
                (0, i.useEffect)(() => {
                    e.analyticsData.thread_id && (0, s(104310).u)({
                        event: {
                            eventName: "answer_stream_first_char_rendered",
                            eventProperties: { ...e.analyticsData,
                                trace_id: e.traceId
                            }
                        }
                    })
                }, [e.analyticsData, e.traceId, d]);
                let c = (0, s(960253).I)(() => ({
                        containerStyle: {
                            overflow: "hidden",
                            position: "relative",
                            marginTop: 4,
                            marginBottom: 6,
                            maxHeight: 92,
                            ...l ? {
                                maskImage: "linear-gradient(black calc(100% - 36px), transparent calc(100% - -6px))",
                                WebkitMaskImage: "linear-gradient(black calc(100% - 36px), transparent calc(100% - -6px))"
                            } : {}
                        }
                    }), [l, 92]),
                    u = (0, i.useMemo)(() => ({
                        type: "assistantChatText",
                        text: t,
                        inferenceId: "unused"
                    }), [t]);
                return (0, r.jsx)("div", {
                    style: m.style0,
                    children: (0, r.jsx)("div", {
                        ref: a,
                        style: c.containerStyle,
                        children: (0, r.jsx)("div", {
                            ref: n,
                            style: m.textStyle,
                            children: (0, r.jsx)(s(600327).c, {
                                clientStep: u,
                                disablePointerEvents: !0
                            })
                        })
                    })
                })
            }
        },
        647414: (e, t, s) => {
            s.d(t, {
                DZ: () => a,
                l4: () => i
            });
            let a = (0, s(109939).YK)({
                notionCalendar: {
                    defaultMessage: "Notion Calendar",
                    id: "templateHelpers.connectedApps.notionCalendar"
                },
                gettingStarted: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.personas.gettingStarted"
                },
                life: {
                    defaultMessage: "Life",
                    id: "templateGallery.sidebar.life"
                },
                personal: {
                    defaultMessage: "Personal",
                    id: "templateHelpers.personas.personal"
                },
                designer: {
                    defaultMessage: "Design",
                    id: "templateHelpers.personas.design"
                },
                engineering: {
                    defaultMessage: "Engineering",
                    id: "templateHelpers.personas.engineering"
                },
                marketing: {
                    defaultMessage: "Marketing",
                    id: "templateHelpers.personas.marketing"
                },
                media: {
                    defaultMessage: "Media",
                    id: "templateHelpers.personas.media"
                },
                it: {
                    defaultMessage: "IT",
                    id: "templateHelpers.personas.it"
                },
                entrepreneur: {
                    defaultMessage: "Entrepreneur",
                    id: "templateHelpers.personas.entrepreneur"
                },
                freelancer: {
                    defaultMessage: "Freelancer",
                    id: "templateHelpers.personas.freelancer"
                },
                educator: {
                    defaultMessage: "Educator",
                    id: "templateHelpers.personas.educator"
                },
                student: {
                    defaultMessage: "Student",
                    id: "templateHelpers.personas.student"
                },
                other: {
                    defaultMessage: "Other",
                    id: "templateHelpers.personas.otherOptionLabel"
                },
                hr: {
                    defaultMessage: "Human resources",
                    id: "templateHelpers.personas.humanResources"
                },
                truncated_hr: {
                    defaultMessage: "HR",
                    id: "templateHelpers.personas.truncated.humanResources"
                },
                productManagement: {
                    defaultMessage: "Product management",
                    id: "templateHelpers.personas.productManagement"
                },
                productManagementV2: {
                    defaultMessage: "Product",
                    id: "templateHelpers.personas.productManagementV2"
                },
                support: {
                    defaultMessage: "Support",
                    id: "templateHelpers.personas.support"
                },
                education: {
                    defaultMessage: "Education",
                    id: "templateHelpers.personas.education"
                },
                sales: {
                    defaultMessage: "Sales",
                    id: "templateHelpers.personas.sales"
                },
                getStartedPage: {
                    defaultMessage: "Getting started",
                    id: "templateHelpers.templates.getStarted"
                },
                getStartedPageEvernote: {
                    defaultMessage: "Getting started from Evernote",
                    id: "templateHelpers.templates.getStartedOnEvernote"
                },
                getStartedPageMobile: {
                    defaultMessage: "Getting started on mobile",
                    id: "templateHelpers.templates.getStartedOnMobile"
                },
                readingList: {
                    defaultMessage: "Reading List",
                    id: "templateHelpers.templates.readingList"
                },
                taskList: {
                    defaultMessage: "Task List",
                    id: "templateHelpers.templates.taskList"
                },
                todoList: {
                    defaultMessage: "To-do List",
                    id: "templateHelpers.templates.todo"
                },
                journal: {
                    defaultMessage: "Journal",
                    id: "templateHelpers.templates.journal"
                },
                travelPlanner: {
                    defaultMessage: "Travel Planner",
                    id: "templateHelpers.templates.travelPlanner"
                },
                quickNote: {
                    defaultMessage: "Quick Note",
                    id: "templateHelpers.templates.quickNote"
                },
                blogPost: {
                    defaultMessage: "Blog Post",
                    id: "templateHelpers.templates.blogPost"
                },
                personalHome: {
                    defaultMessage: "Personal Home",
                    id: "templateHelpers.templates.personalHome"
                },
                userResearch: {
                    defaultMessage: "User Research Database",
                    id: "templateHelpers.templates.userResearchDatabase"
                },
                userResearchDescription: {
                    defaultMessage: "Use this template to schedule and track the status of your user research.",
                    id: "templateHelpers.templates.userResearchDatabase.description"
                },
                designSystem: {
                    defaultMessage: "Design System",
                    id: "templateHelpers.templates.designSystem"
                },
                designSystemDescription: {
                    defaultMessage: "A design system is a great way to keep everyone aligned. Use this template to document design patterns, assets, and brand, and make assets downloadable for everyone on your team.",
                    id: "templateHelpers.templates.designSystem.description"
                },
                engineeringWiki: {
                    defaultMessage: "Engineering Wiki",
                    id: "templateHelpers.templates.engineeringWiki"
                },
                engineeringWikiDescription: {
                    defaultMessage: "Use this template to give engineering teams a single source of truth for processes, documentation, and projects, build good programming habits, and keep everyone aligned.",
                    id: "templateHelpers.templates.engineeringWiki.description"
                },
                engineeringMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.templates.meetingNotes"
                },
                brandAssets: {
                    defaultMessage: "Brand Assets",
                    id: "templateHelpers.templates.brandAssets"
                },
                brandAssetsDescription: {
                    defaultMessage: "This template makes it easy to keep track of brand assets like logos, images, and fonts by tagging them so they’re easily sortable by file type or application.",
                    id: "templateHelpers.templates.brandAssets.description"
                },
                marketingWiki: {
                    defaultMessage: "Marketing Wiki",
                    id: "templateHelpers.templates.marketingWiki"
                },
                mediaList: {
                    defaultMessage: "Media List",
                    id: "templateHelpers.templates.mediaList"
                },
                mediaListDescription: {
                    defaultMessage: "Use this template to follow news coverage of your company and the people reporting it. Subpages help you keep track of press details and more.",
                    id: "templateHelpers.templates.mediaList.description"
                },
                contentCalendar: {
                    defaultMessage: "Content Calendar",
                    id: "templateHelpers.templates.contentCalendar"
                },
                contentCalendarDescription: {
                    defaultMessage: "Use this template to schedule and track all the content you’re putting out, from blog posts to podcasts to tweets.",
                    id: "templateHelpers.templates.contentCalendar.description"
                },
                moodBoard: {
                    defaultMessage: "Mood Board",
                    id: "templateHelpers.templates.moodBoard"
                },
                moodBoardDescription: {
                    defaultMessage: "Ideal template for assembling mood or inspiration boards for events, products, brand campaigns, and more.",
                    id: "templateHelpers.templates.moodBoard.description"
                },
                jobBoard: {
                    defaultMessage: "Job Board",
                    id: "templateHelpers.templates.jobBoard"
                },
                jobBoardDescription: {
                    defaultMessage: "Easily list and edit your company’s openings with this jobs templates that lets you make real-time changes to a lightweight, public-facing job site. ",
                    id: "templateHelpers.templates.jobBoard.description"
                },
                newHireOnboarding: {
                    defaultMessage: "New Hire Onboarding",
                    id: "templateHelpers.templates.newHireOnboarding"
                },
                newHireOnboardingDescription: {
                    defaultMessage: "Onboarding checklists help new hires get settled at your company. You can sort by status, team, and start date, and click into any individual card to review onboarding tasks and notes for that person.",
                    id: "templateHelpers.templates.newHireOnboarding.description"
                },
                applicantTracker: {
                    defaultMessage: "Applicant Tracker",
                    id: "templateHelpers.templates.applicantTracker"
                },
                applicantTrackerDescription: {
                    defaultMessage: "Manage candidate progress across the hiring cycle with this template that lets you easily view each candidate’s information, notes, documents, offers, next steps, and more.",
                    id: "templateHelpers.templates.applicantTracker.description"
                },
                companyHome: {
                    defaultMessage: "Company Home",
                    id: "templateHelpers.templates.companyHome"
                },
                companyHomeDescription: {
                    defaultMessage: "Every company needs a place where important info is easy to find. This template gathers everything your company needs in order to run smoothly, from mission and values to the employee directory. ",
                    id: "templateHelpers.templates.companyHome.description"
                },
                productWiki: {
                    defaultMessage: "Product Wiki",
                    id: "templateHelpers.templates.productWiki"
                },
                productWikiDescription: {
                    defaultMessage: "Organize all your product-related documentation with this template, which unifies guides and processes in one place with easy-to-navigate sections.",
                    id: "templateHelpers.templates.productWiki.description"
                },
                salesCRM: {
                    defaultMessage: "Sales CRM",
                    id: "templateHelpers.templates.salesCRM"
                },
                salesCRMDescription: {
                    defaultMessage: "Your sales funnel doesn’t have to feel like heavy SaaS software. This template offers you a clean canvas to define only the fields you need to track leads.",
                    id: "templateHelpers.templates.salesCRM.description"
                },
                salesWiki: {
                    defaultMessage: "Sales Wiki",
                    id: "templateHelpers.templates.salesWiki"
                },
                salesWikiDescription: {
                    defaultMessage: "With this template you can keep all your company’s sales documentation and projects in one place so crucial info is easy for anyone across the team or organization to find at a moment’s notice. ",
                    id: "templateHelpers.templates.salesWiki.description"
                },
                competitiveAnalysis: {
                    defaultMessage: "Competitive Analysis",
                    id: "templateHelpers.templates.competitiveAnalysis"
                },
                salesAssets: {
                    defaultMessage: "Sales Assets",
                    id: "templateHelpers.templates.salesAssets"
                },
                salesAssetsDescription: {
                    defaultMessage: "Use this template to keep your sales assets organized so you always use the proper demo, white paper, video, etc. for every meeting. You can upload any type of file to this page for instant access and version control.",
                    id: "templateHelpers.templates.salesAssets.description"
                },
                productFAQs: {
                    defaultMessage: "Product FAQs",
                    id: "templateHelpers.templates.productFAQs"
                },
                productFAQsDescription: {
                    defaultMessage: "Keep responses to your customers’ common support questions in one place for everyone to see. Every row of this template is its own Notion page, to which you can add any content you want.",
                    id: "templateHelpers.templates.productFAQs.description"
                },
                helpCenter: {
                    defaultMessage: "Help Center",
                    id: "templateHelpers.templates.helpCenter"
                },
                helpCenterDescription: {
                    defaultMessage: "This template lets you build your own help center, with columns, headings, and sub-pages. You can easily share this page with users and quickly add new support pages as needed.",
                    id: "templateHelpers.templates.helpCenter.description"
                },
                classNotes: {
                    defaultMessage: "Class Notes",
                    id: "templateHelpers.templates.classNotes"
                },
                jobApplications: {
                    defaultMessage: "Job Applications",
                    id: "templateHelpers.templates.jobApplications"
                },
                gradeCalculator: {
                    defaultMessage: "Grade Calculator",
                    id: "templateHelpers.templates.gradeCalculator"
                },
                clubHomepage: {
                    defaultMessage: "Club Homepage",
                    id: "templateHelpers.templates.clubHomepage"
                },
                cornellNotesSystem: {
                    defaultMessage: "Cornell Notes System",
                    id: "templateHelpers.templates.cornellNotesSystem"
                },
                personalCRM: {
                    defaultMessage: "Personal CRM",
                    id: "templateHelpers.templates.personalCRM"
                },
                simpleBudget: {
                    defaultMessage: "Simple Budget",
                    id: "templateHelpers.templates.simpleBudget"
                },
                syllabus: {
                    defaultMessage: "Syllabus",
                    id: "templateHelpers.templates.syllabus"
                },
                classroomHome: {
                    defaultMessage: "Classroom Home",
                    id: "templateHelpers.templates.classroomHome"
                },
                lessonPlans: {
                    defaultMessage: "Lesson Plans",
                    id: "templateHelpers.templates.lessonPlans"
                },
                courseSchedule: {
                    defaultMessage: "Course Schedule",
                    id: "templateHelpers.templates.courseSchedule"
                },
                groupProjects: {
                    defaultMessage: "Group Projects",
                    id: "templateHelpers.templates.groupProjects"
                },
                classDirectory: {
                    defaultMessage: "Class Directory",
                    id: "templateHelpers.templates.classDirectory"
                },
                lifeWiki: {
                    defaultMessage: "Life Wiki",
                    id: "templateHelpers.templates.lifeWiki"
                },
                habitTracker: {
                    defaultMessage: "Habit Tracker",
                    id: "templateHelpers.templates.habitTracker"
                },
                hobbies: {
                    defaultMessage: "Hobbies",
                    id: "templateHelpers.templates.hobbies"
                },
                resume: {
                    defaultMessage: "Resume",
                    id: "templateHelpers.templates.resume"
                },
                resumeDescription: {
                    defaultMessage: "Build a beautiful, functional resume within your Notion workspace, make it publicly accessible and send over the link with your job applications. You can keep improving the resume even after you send it out.",
                    id: "templateHelpers.templates.resume.description"
                },
                teamsGettingStarted: {
                    defaultMessage: "Teams Getting Started",
                    id: "templateHelpers.templates.teamsGettingStarted"
                },
                teamsHomepage: {
                    defaultMessage: "Teamspaces Home",
                    id: "templateHelpers.templates.teamsHomepage"
                },
                wiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.templates.wiki"
                },
                notes: {
                    defaultMessage: "Notes & docs",
                    id: "templateHelpers.templates.notes"
                },
                projectManagement: {
                    defaultMessage: "Project & tasks",
                    id: "templateHelpers.templates.projectManagement"
                },
                suggested: {
                    defaultMessage: "Suggested templates",
                    id: "templateHelpers.personas.suggestedTemplates"
                },
                suggestedCategory: {
                    defaultMessage: "Suggested",
                    id: "templateGallery.sidebar.suggested"
                },
                teamHome: {
                    defaultMessage: "Team Home",
                    id: "templateHelpers.useCase.teamHome"
                },
                teamTasks: {
                    defaultMessage: "Team Tasks",
                    id: "templateHelpers.useCase.teamTasks"
                },
                teamMeetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.teamMeetingNotes"
                },
                teamDocs: {
                    defaultMessage: "Docs",
                    id: "templateHelpers.useCase.teamDocs"
                },
                peopleDirectory: {
                    defaultMessage: "People Directory",
                    id: "templateHelpers.useCase.peopleDirectory"
                },
                peopleDirectoryDescription: {
                    defaultMessage: "Help your team keep track of who’s who with this simple template. Each card can be updated to store an employee’s bio, past achievements, goals, and more. ",
                    id: "templateHelpers.useCase.peopleDirectory.description"
                },
                employeeBenefits: {
                    defaultMessage: "Employee Benefits",
                    id: "templateHelpers.useCase.employeeBenefits"
                },
                employeeBenefitsDescription: {
                    defaultMessage: "This template is a perfect place to describe your company’s benefits and link out to all necessary info so your employees feel appreciated and informed.",
                    id: "templateHelpers.useCase.employeeBenefits.description"
                },
                recruitingTracker: {
                    defaultMessage: "Recruiting Tracker",
                    id: "templateHelpers.useCase.recruitingTracker"
                },
                recruitingTrackerDescription: {
                    defaultMessage: "This template makes it easy for your company to keep up with your headcount, including job postings and relevant details like role, status, location, and more.",
                    id: "templateHelpers.useCase.recruitingTracker.description"
                },
                investorUpdate: {
                    defaultMessage: "Investor Update",
                    id: "templateHelpers.useCase.investorUpdate"
                },
                investorUpdateDescription: {
                    defaultMessage: "Instead of sending the usual disorganized email updates to your investors, use this template to offer them a more comprehensive and digestible look at your company’s progress.",
                    id: "templateHelpers.useCase.investorUpdate.description"
                },
                designSprint: {
                    defaultMessage: "Design Sprint",
                    id: "templateHelpers.useCase.designSprint"
                },
                designSprintDescription: {
                    defaultMessage: "This template is designed to help design teams continuously track and iterate on their projects, from creative sprints to finished projects based on user feedback.",
                    id: "templateHelpers.useCase.designSprint.description"
                },
                visionAndStrategy: {
                    defaultMessage: "Vision and strategy",
                    id: "templateHelpers.useCase.visionAndStrategy"
                },
                visionAndStrategyDescription: {
                    defaultMessage: "Use this template to put your organization’s guiding principles in one place so that they stay top of mind and easy for employees to reference.",
                    id: "templateHelpers.useCase.visionAndStrategy.description"
                },
                designPortfolio: {
                    defaultMessage: "Design Portfolio",
                    id: "templateHelpers.useCase.designPortfolio"
                },
                designPortfolioDescription: {
                    defaultMessage: "Use this template to showcase creative projects you’ve worked on and offer more context on their purpose and the development process you or your team followed.",
                    id: "templateHelpers.useCase.designPortfolio.description"
                },
                teamWiki: {
                    defaultMessage: "Team Wiki",
                    id: "templateHelpers.useCase.teamWiki"
                },
                defaultWiki: {
                    defaultMessage: "Wiki",
                    id: "templateHelpers.useCase.wiki"
                },
                teamWikiDescription: {
                    defaultMessage: "This template lets every team in your company create and manage a personalized homepage where they can organize processes, projects, and knowledge specific to their work.",
                    id: "templateHelpers.useCase.teamWiki.description"
                },
                teamGoals: {
                    defaultMessage: "Goals",
                    id: "templateHelpers.useCase.teamGoals"
                },
                campaignBrief: {
                    defaultMessage: "Campaign Brief",
                    id: "templateHelpers.useCase.campaignBrief"
                },
                campaignBriefDescription: {
                    defaultMessage: "Use this template to brief other team members on any given campaign’s goals, messaging, timeline, and more. You can also easily add any relevant supporting documents so everyone in the company stays well-informed. ",
                    id: "templateHelpers.useCase.campaignBrief.description"
                },
                presentation: {
                    defaultMessage: "Presentation",
                    id: "templateHelpers.useCase.presentation"
                },
                presentationDescription: {
                    defaultMessage: "Use this template to present new ideas and status updates to your team, organized in a way that’s easily updated and scannable. ",
                    id: "templateHelpers.useCase.presentation.description"
                },
                experimentResults: {
                    defaultMessage: "Experiment Results",
                    id: "templateHelpers.useCase.experimentResults"
                },
                experimentResultsDescription: {
                    defaultMessage: "Use this template to track your experiments along with their results. Anyone from any team can quickly add an experiment by using the database templates.",
                    id: "templateHelpers.useCase.experimentResults.description"
                },
                engineeringTechSpec: {
                    defaultMessage: "Engineering Tech Spec",
                    id: "templateHelpers.useCase.engineeringTechSpec"
                },
                engineeringTechSpecDescription: {
                    defaultMessage: "Use this template to organize a project kickoff and deliver the necessary context so team members are all up to speed and well-informed.",
                    id: "templateHelpers.useCase.engineeringTechSpec.description"
                },
                productSpec: {
                    defaultMessage: "Product Spec",
                    id: "templateHelpers.useCase.productSpec"
                },
                productSpecDescription: {
                    defaultMessage: "A product spec should contain all the info your team needs to build something new. Use this template as a source of truth to give context, set goals, see edge cases, and plan development steps.",
                    id: "templateHelpers.useCase.productSpec.description"
                },
                interviewGuide: {
                    defaultMessage: "Interview Guide",
                    id: "templateHelpers.useCase.interviewGuide"
                },
                interviewGuideDescription: {
                    defaultMessage: "Use this template to prepare your job candidates for their interviews and offer them helpful resources like videos, links, schedules and more.",
                    id: "templateHelpers.useCase.interviewGuide.description"
                },
                brainstorm: {
                    defaultMessage: "Remote Brainstorming",
                    id: "templateHelpers.useCase.brainstorm"
                },
                brainstormDescription: {
                    defaultMessage: "Boost your team’s remote collaboration with this remote brainstorming template. Designed to streamline brainstorming sessions and maximize creativity using Notion’s new button and AI blocks. This template helps team members to generate brainstorming questions and effortlessly contribute ideas with just a click of a button. Use this template for seamless idea generation and action planning.",
                    id: "templateHelpers.useCase.brainstorm.description"
                },
                oneOnOneNotes: {
                    defaultMessage: "1:1 Notes",
                    id: "templateHelpers.useCase.oneOnOneNotes"
                },
                oneOnOneNotesDescription: {
                    defaultMessage: "This template is perfect for keeping all of your 1:1 notes and docs in one place. You can add dates to each meeting and even check off action items as the week progresses.",
                    id: "templateHelpers.useCase.oneOnOneNotes.description"
                },
                productLaunchBrief: {
                    defaultMessage: "Product Launch Brief",
                    id: "templateHelpers.useCase.productLaunchBrief"
                },
                productLaunchBriefDescription: {
                    defaultMessage: "Use this template to plan and execute every part of your launch with your team, in one, centralized page.",
                    id: "templateHelpers.useCase.productLaunchBrief.description"
                },
                blogEditorialCalendar: {
                    defaultMessage: "Blog Editorial Calendar",
                    id: "templateHelpers.useCase.blogEditorialCalendar"
                },
                blogEditorialCalendarDescription: {
                    defaultMessage: "Use this template to plan and write all your marketing content with a database that lets you track each project’s status, audience, author, reviewer, publish date, and more. ",
                    id: "templateHelpers.useCase.blogEditorialCalendar.description"
                },
                socialMediaCalendar: {
                    defaultMessage: "Social Media Calendar",
                    id: "templateHelpers.useCase.socialMediaCalendar"
                },
                socialMediaCalendarDescription: {
                    defaultMessage: "Use this template to draft, plan, and write all of your social posts in one simple database. You can view your own posts in a calendar to get an idea of timelines, or switch to a board view to see platform usage.",
                    id: "templateHelpers.useCase.socialMediaCalendar.description"
                },
                simpleBudgetDescription: {
                    defaultMessage: "Track your spending to reach your financial goals. Set a monthly cap for your spending, then enter your expenses in the database below. View your expenses in different ways using different database views.",
                    id: "templateHelpers.useCase.simpleBudget.description"
                },
                readingListDescription: {
                    defaultMessage: "The modern day reading list includes more than just books. We’ve created a dashboard to help you track all of the articles, videos, podcasts, blog posts, Twitter threads, and — yes, books.",
                    id: "templateHelpers.useCase.readingList.description"
                },
                habitTrackerDescription: {
                    defaultMessage: "Keep yourself accountable by tracking your habits everyday. With Notion’s new button block, you can easily check off completed habits for the day with a single click. Whether you’re trying to drink more water, exercise regularly, or meditate every day, this template will help you build healthy habits with ease.",
                    id: "templateHelpers.useCase.habitTracker.description"
                },
                travelPlannerDescription: {
                    defaultMessage: "Travel planning can be a fragmented mess with different documents and information everywhere. With this template, you can pull all the essential details about your plans into one spot.",
                    id: "templateHelpers.useCase.travelPlanner.description"
                },
                jobApplicationsDescription: {
                    defaultMessage: "Keep track of the entire job application process all in one page. Easily add customized resumes, cover letters, and portfolio’s while keeping track of companies you’ve reached out to.",
                    id: "templateHelpers.useCase.jobApplication.description"
                },
                meetingNotes: {
                    defaultMessage: "Meeting Notes",
                    id: "templateHelpers.useCase.meetingNotes"
                },
                weeklyPlan: {
                    defaultMessage: "Weekly Plan",
                    id: "templateHelpers.useCase.weeklyPlan"
                },
                weeklyPlanDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyPlan.description"
                },
                weeklyTodo: {
                    defaultMessage: "Weekly To-do List",
                    id: "templateHelpers.useCase.weeklyTodo"
                },
                weeklyTodoDescription: {
                    defaultMessage: "Use this template to plan and organize all the work you need to accomplish over the next week. Visualize your most important to-do’s with an agenda that helps you prioritize.",
                    id: "templateHelpers.useCase.weeklyTodo.description"
                },
                journalDescription: {
                    defaultMessage: "Document your life - daily happenings, special occasions, and reflections on your goals. Categorize entries with tags and automatically capture the date.",
                    id: "templateHelpers.useCase.journal.description"
                },
                quickNoteDescription: {
                    defaultMessage: "This template gives you a sense of the many different types of content you can add while taking quick notes in any situation. It includes a to-do list, web bookmarks, sub-headings, and more!",
                    id: "templateHelpers.useCase.quickNote.description"
                },
                personalHomeDescription: {
                    defaultMessage: "Just like a wiki can help keep all the important information in a company somewhere central, a personal wiki can give you a helpful knowledge base for your life!",
                    id: "templateHelpers.useCase.personalHome.description"
                },
                lifeWikiDescription: {
                    defaultMessage: "Plan and keep track of your entire life with this comprehensive dashboard. Take charge of your growth with setting goals, tracking daily habits and maintaining a log of everything you’re reading.",
                    id: "templateHelpers.useCase.lifeWiki.description"
                },
                blogPostDescription: {
                    defaultMessage: "Use this template as a format for your blog posts. Format your writing and images in any format you like. Make your page live by enable the ‘Share to web’ feature.",
                    id: "templateHelpers.useCase.blogPost.description"
                },
                personalCRMDescription: {
                    defaultMessage: "Keep track of all the people you meet, what you know about them, when to reach out, and whether they’re a professional contact. Be the person who always follows up and knows the exact gift to give.",
                    id: "templateHelpers.useCase.personalCRM.description"
                },
                classNotesDescription: {
                    defaultMessage: "Keep all your notes from all your classes in one spot. This template makes it easy to capture all your notes and tag them by class, date, and topic.",
                    id: "templateHelpers.useCase.classNotes.description"
                },
                classDirectoryDescription: {
                    defaultMessage: "Put names to faces. Use this directory to track class participation, absences, and take any other notes that will be helpful when it comes time to calculate final grades or give feedback to students.",
                    id: "templateHelpers.useCase.classDirectory.description"
                },
                clubHomepageDescription: {
                    defaultMessage: "We know that school probably isn’t just about school for you. Notion is the perfect solution for managing information for clubs, organizations, and group projects.",
                    id: "templateHelpers.useCase.clubHomepage.description"
                },
                gradeCalculatorDescription: {
                    defaultMessage: "Strategize your quarter or semester by knowing how much every assignment, exam, and project is worth for your final grade. Use this template to stay on top of your grades and plan accordingly.",
                    id: "templateHelpers.useCase.gradeCalculator.description"
                },
                cornellNotesSystemDescription: {
                    defaultMessage: "In the 1940s, Cornell Professor Walter Pauk developed a new note-taking system to give college students a better way to organize, condense, and intake knowledge. Here’s the Notion version!",
                    id: "templateHelpers.useCase.cornellNotesSystem.description"
                },
                syllabusDescription: {
                    defaultMessage: "Create a digital syllabus that all your students can easily access on the web. Notion makes building a web page like this as easy as typing a document. Just replace this sample content with your own!",
                    id: "templateHelpers.useCase.syllabus.description"
                },
                classroomHomeDescription: {
                    defaultMessage: "Give your students one source of truth for class information, course materials, assignments, announcements, scheduling and more. Editing this web page is as easy as writing any document.",
                    id: "templateHelpers.useCase.classroomHome.description"
                },
                lessonPlansDescription: {
                    defaultMessage: "These lesson plans are based on Harvard Business School’s Elements of Effective Class Preparation. This makes it easy to track their status, keep all related notes in one spot, and make progress.",
                    id: "templateHelpers.useCase.lessonPlans.description"
                },
                classroomManagement: {
                    defaultMessage: "Classroom Management",
                    id: "templateHelpers.useCase.classroomManagement"
                },
                courseScheduleDescription: {
                    defaultMessage: "This course schedule provides a comprehensive list of weekly topics, readings, assignments, and exams. You can create your own categories and topics for whatever you’re teaching.",
                    id: "templateHelpers.useCase.courseSchedule.description"
                },
                studentPlanner: {
                    defaultMessage: "Student Planner",
                    id: "templateHelpers.useCase.studentPlanner"
                },
                studentPlannerDescription: {
                    id: "templateHelpers.useCase.studentPlanner.description",
                    defaultMessage: "From your courses to your calendar, personal projects to club meetings and event, use this template to stay organized, focused, and inspired to have a successful school year."
                },
                scratchpad: {
                    defaultMessage: "Scratchpad",
                    id: "templateHelpers.private.scratchpad"
                },
                aiUpgrade: {
                    defaultMessage: "Getting Started with Notion AI",
                    id: "templateHelpers.private.aiUpgrade"
                },
                websiteBuilder: {
                    defaultMessage: "Website Builder",
                    id: "templateHelpers.private.websiteBuilder"
                },
                research: {
                    defaultMessage: "Research",
                    id: "templateHelpers.private.research"
                },
                galaxyStudyNotebook: {
                    defaultMessage: "Galaxy Study Notebook",
                    id: "templateHelpers.samsung.galaxyStudyNotebook"
                },
                galaxyLifePlanner: {
                    defaultMessage: "Galaxy Life Planner",
                    id: "templateHelpers.samsung.galaxyLifePlanner"
                },
                galaxyCompanyHome: {
                    defaultMessage: "Galaxy Company Home",
                    id: "templateHelpers.samsung.galaxyCompanyHome"
                }
            });
            (0, s(109939).YK)({
                creative: {
                    id: "teamHelpers.creativeTeam.name",
                    defaultMessage: "Creative"
                },
                support: {
                    id: "teamHelpers.supportTeam.name",
                    defaultMessage: "Customer Service"
                },
                educator: {
                    id: "teamHelpers.educatorTeam.name",
                    defaultMessage: "Educator"
                },
                eng: {
                    id: "teamHelpers.engTeam.name",
                    defaultMessage: "Engineering"
                },
                finance: {
                    id: "teamHelpers.financeTeam.name",
                    defaultMessage: "Finance"
                },
                founder_or_ceo: {
                    id: "teamHelpers.founderCeoTeam.name",
                    defaultMessage: "Executive"
                },
                hr: {
                    id: "teamHelpers.hrTeam.name",
                    defaultMessage: "Human Resources"
                },
                internal_communication: {
                    id: "teamHelpers.internalCommunicationTeam.name",
                    defaultMessage: "Internal Communication"
                },
                it_admin: {
                    id: "teamHelpers.itAdminTeam.name",
                    defaultMessage: "IT Admin"
                },
                knowledge_management: {
                    id: "teamHelpers.knowledgeManagementTeam.name",
                    defaultMessage: "Knowledge Management"
                },
                marketing: {
                    id: "teamHelpers.marketingTeam.name",
                    defaultMessage: "Marketing"
                },
                operations: {
                    id: "teamHelpers.operationsTeam.name",
                    defaultMessage: "Operations"
                },
                product_design: {
                    id: "teamHelpers.productDesignTeam.name",
                    defaultMessage: "Product Design"
                },
                product: {
                    id: "teamHelpers.productTeam.name",
                    defaultMessage: "Product Management"
                },
                project_or_program_management: {
                    id: "teamHelpers.projectProgramMgmtTeam.name",
                    defaultMessage: "Project / Program Management"
                },
                sales: {
                    id: "teamHelpers.salesTeam.name",
                    defaultMessage: "Sales"
                },
                student: {
                    id: "teamHelpers.studentTeam.name",
                    defaultMessage: "Student"
                },
                other: {
                    id: "teamHelpers.otherTeam.name",
                    defaultMessage: "Your Team"
                }
            });
            let i = (0, s(109939).YK)({
                generalTeamLabel: {
                    defaultMessage: "General",
                    id: "teamHelpers.generalTeam.name"
                },
                personaTeamDescription: {
                    id: "teamHelpers.personaTeam.description",
                    defaultMessage: "A home for you and your team"
                },
                workspaceNameHq: {
                    defaultMessage: "{workspaceName} HQ",
                    id: "templateMessages.workspaceNameHQ"
                }
            })
        },
        650919: (e, t, s) => {
            s.d(t, {
                X: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                container: {
                    position: "relative",
                    width: "100%",
                    padding: 16
                },
                singleIconRow: {
                    position: "absolute",
                    top: 10,
                    insetInlineEnd: 16
                },
                dismissButton: {
                    marginTop: -7,
                    marginInlineEnd: -7
                },
                title: {
                    fontWeight: s(699422).Wy.medium,
                    fontSize: s(699422).J.UIRegular.desktop,
                    lineHeight: 1.2,
                    color: s(632079).Tj.text.accentPrimary,
                    marginBottom: 6
                },
                description: {
                    fontWeight: s(699422).Wy.regular,
                    fontSize: s(699422).J.UISmall.desktop,
                    color: s(632079).Tj.text.secondary,
                    marginBottom: 12
                },
                primaryActionButton: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    whiteSpace: "normal"
                },
                secondaryActionButton: {
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }
            };

            function r({
                title: e,
                description: t,
                onDismiss: n,
                icon: l,
                primaryAction: o,
                secondaryAction: d
            }) {
                let c = (0, s(109939).tz)().formatMessage({
                    id: "prompt.dismissButton.ariaLabel",
                    defaultMessage: "Close"
                });
                return (0, a.jsxs)("div", {
                    style: i.container,
                    children: [l ? (0, a.jsxs)(s(4458).fI, {
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: 12,
                        children: [(0, a.jsx)(s(16275).I, {
                            icon: l
                        }), (0, a.jsx)(s(988022).p, {
                            size: "sm",
                            style: i.dismissButton,
                            onClick: n,
                            "aria-label": c,
                            iconLeading: {
                                icon: s(25094).xMarkSmallIcon,
                                size: "xs"
                            }
                        })]
                    }) : (0, a.jsx)("div", {
                        style: i.singleIconRow,
                        children: (0, a.jsx)(s(988022).p, {
                            size: "sm",
                            style: i.dismissButton,
                            onClick: n,
                            "aria-label": c,
                            iconLeading: {
                                icon: s(25094).xMarkSmallIcon,
                                size: "xs"
                            }
                        })
                    }), (0, a.jsx)(s(324489).V, {
                        style: i.title,
                        isMultiline: !0,
                        children: e
                    }), (0, a.jsx)(s(324489).V, {
                        style: i.description,
                        isMultiline: !0,
                        isSmall: !0,
                        children: t
                    }), (0, a.jsxs)(s(4458).VP, {
                        gap: 8,
                        children: [o ? (0, a.jsx)(s(912946).A, {
                            colorPalette: "blue",
                            size: "lg",
                            style: i.primaryActionButton,
                            onClick: e => o.onClick(e),
                            "aria-label": o.ariaLabel,
                            children: o.text
                        }) : null, d ? (0, a.jsx)(s(988022).p, {
                            colorPalette: "gray",
                            style: i.secondaryActionButton,
                            onClick: e => d.onClick(e),
                            "aria-label": d.ariaLabel,
                            iconLeading: d.icon ? {
                                icon: d.icon,
                                size: "sm"
                            } : void 0,
                            children: d.text
                        }) : null]
                    })]
                })
            }
        },
        702335: (e, t, s) => {
            s.d(t, {
                A: () => n
            });
            var a = s(296540),
                i = s(474848);
            let r = {
                listStyle: { ...s(418676).$t,
                    ...s(699422).RC,
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: s(418676).Kw,
                    color: s(632079).Tj.text.tertiary,
                    gap: 20
                },
                inlineHint: {
                    display: "flex",
                    gap: 6,
                    alignItems: "center",
                    height: "max-content"
                }
            };

            function n() {
                let e = (0, s(533992).v3)(),
                    t = (0, s(109939).tz)(),
                    n = (0, s(533992).Y0)().isElectron,
                    l = (0, s(682985).K8)(() => {
                        var t;
                        let a = null == (t = s(584257).A.state.preferences) ? void 0 : t.isQuickSearchEnabled;
                        return e.device.isElectron && a
                    }, [e.device.isElectron]),
                    o = (0, a.useCallback)(() => {
                        var e;
                        (s(930179).default.state.open || s(930179).default.state.openAsPage) && (e = {
                            searchSessionId: s(930179).default.state.sessionId
                        }, (0, s(104310).u)({
                            event: {
                                eventName: "search_open_shortcut_settings_from_command_search_hint",
                                eventProperties: {
                                    search_session_id: e.searchSessionId
                                }
                            }
                        }))
                    }, [e]),
                    c = e.device.isMac,
                    u = (0, s(682985).K8)(() => !s(886556).z.isSearchModalV2Enabled(), []);
                return (0, i.jsxs)("ul", {
                    style: r.listStyle,
                    children: [u ? (0, i.jsxs)("li", {
                        style: r.inlineHint,
                        children: [(0, i.jsx)(s(16275).I, {
                            icon: s(418659).arrowUpDownSmallIcon,
                            size: "xxs",
                            colorVariant: "secondary"
                        }), t.formatMessage({
                            id: "searchFooter.helpText.selectHint",
                            defaultMessage: "Select"
                        })]
                    }) : void 0, u ? (0, i.jsxs)("li", {
                        style: r.inlineHint,
                        children: [(0, i.jsx)(s(795811).z, {
                            shortcut: {
                                enter: !0
                            }
                        }), t.formatMessage({
                            id: "searchFooter.helpText.openHint",
                            defaultMessage: "Open"
                        })]
                    }) : void 0, (0, i.jsxs)("li", {
                        style: r.inlineHint,
                        children: [c ? (0, i.jsx)(s(795811).z, {
                            shortcut: {
                                command: !0,
                                enter: !0
                            }
                        }) : (0, i.jsx)(s(693592).A, {
                            name: "commandEnter"
                        }), t.formatMessage({
                            id: "searchFooter.helpText.newTab",
                            defaultMessage: "Open in new tab"
                        })]
                    }), n ? (0, i.jsxs)("li", {
                        style: r.inlineHint,
                        children: [c ? (0, i.jsx)(s(795811).z, {
                            shortcut: {
                                command: !0,
                                key: "L"
                            }
                        }) : (0, i.jsx)(s(693592).A, {
                            name: "copyLinkToCurrentPage"
                        }), t.formatMessage({
                            id: "searchFooter.helpText.copyLink",
                            defaultMessage: "Copy link"
                        })]
                    }) : void 0, l ? (0, i.jsx)("li", {
                        style: r.inlineHint,
                        onClick: () => {
                            o(), (0, s(546350).S)()
                        },
                        children: (0, i.jsx)(d, {
                            environment: e,
                            containerStyles: r.inlineHint
                        })
                    }) : void 0]
                })
            }
            let l = {
                    display: "flex",
                    gap: 3,
                    alignItems: "center",
                    width: "max-content"
                },
                o = {
                    background: "transparent",
                    boxShadow: "none"
                };

            function d(e) {
                let {
                    environment: t,
                    containerStyles: r
                } = e, [n, d] = (0, a.useState)(!1), c = (0, s(960253).I)(() => ({
                    container: { ...r,
                        cursor: "pointer"
                    },
                    commandText: {
                        padding: "2px 4px",
                        borderRadius: 4,
                        background: n ? s(632079).Tj.buttonHoveredBackground : void 0
                    }
                }), [r, n]), p = t.device.isMac, m = (0, s(109939).tz)(), {
                    commandSearchShortcut: g,
                    commandSearchShortcutToString: h
                } = (0, s(682985).K8)(() => {
                    var e;
                    let t = null == (e = s(584257).A.state.preferences) ? void 0 : e.quickSearchShortcut;
                    if (!t) return {
                        commandSearchShortcut: void 0,
                        commandSearchShortcutToString: void 0
                    };
                    let a = (0, s(654299).z_)(t, p);
                    return {
                        commandSearchShortcut: a,
                        commandSearchShortcutToString: (0, s(654299).Vd)(a, p)
                    }
                }, [p]), f = (0, a.useCallback)(() => {
                    var e;
                    (s(930179).default.state.open || s(930179).default.state.openAsPage) && (e = {
                        searchSessionId: s(930179).default.state.sessionId
                    }, (0, s(104310).u)({
                        event: {
                            eventName: "search_hover_command_search_hint",
                            eventProperties: {
                                search_session_id: e.searchSessionId
                            }
                        }
                    }))
                }, [t]);
                return (0, i.jsx)(s(51831).m, {
                    delayThreshold: 400,
                    placement: "bottom",
                    originGap: 8,
                    disableTooltip: !p,
                    content: () => (f(), (0, i.jsx)(u, {
                        shortcut: h
                    })),
                    closeDelay: 0,
                    style: o,
                    children: e => (0, i.jsxs)("div", { ...e,
                        style: c.container,
                        onClick: () => (0, s(546350).S)(),
                        onMouseEnter: t => {
                            e.onMouseEnter && e.onMouseEnter(t), n || d(!0)
                        },
                        onMouseLeave: t => {
                            e.onMouseLeave && e.onMouseLeave(t), n && setTimeout(() => {
                                d(!1)
                            }, 200)
                        },
                        children: [(0, i.jsx)("span", {
                            style: c.commandText,
                            children: p ? (0, i.jsx)(s(795811).z, {
                                shortcut: g
                            }) : h
                        }), (0, i.jsx)(s(4458).fI, {
                            alignItems: "center",
                            children: n ? (0, i.jsx)("span", {
                                children: m.formatMessage({
                                    id: "searchFooter.commandSearch.editText",
                                    defaultMessage: "Click to edit shortcut"
                                })
                            }) : (0, i.jsx)("div", {
                                style: l,
                                children: m.formatMessage({
                                    id: "searchFooter.commandSearch.defaultText",
                                    defaultMessage: "Command Search"
                                })
                            })
                        })]
                    })
                })
            }
            let c = {
                container: {
                    width: 260,
                    borderRadius: 8,
                    backgroundColor: "transparent"
                },
                description: {
                    fontWeight: s(699422).Wy.regular,
                    color: s(632079).Tj.text.inverseSecondary
                },
                image: {
                    width: "100%"
                }
            };

            function u(e) {
                let {
                    shortcut: t
                } = e, r = s(896221).A.images.commandSearch.tooltipPng, [n, l] = (0, a.useState)(!1);
                (0, a.useEffect)(() => {
                    let e = new Image;
                    e.src = r, e.onload = () => {
                        l(!0)
                    }
                }, [r]);
                let o = (0, s(960253).e)(),
                    d = (0, s(960253).I)(() => ({
                        textContainer: {
                            whiteSpace: "break-spaces",
                            padding: 15,
                            display: "flex",
                            flexDirection: "column",
                            gap: 1,
                            backgroundColor: "light" === o ? s(632079).Tj.palette.gray["700"] : s(632079).Tj.palette.gray["300"],
                            borderStartEndRadius: 8,
                            borderStartStartRadius: 8
                        }
                    }), [o]);
                return n ? (0, i.jsxs)("div", {
                    style: c.container,
                    children: [(0, i.jsxs)("div", {
                        style: d.textContainer,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(s(109939).sA, {
                                id: "searchFooter.commandSearch.tooltip.header",
                                defaultMessage: "Use search and Q&A anywhere"
                            })
                        }), (0, i.jsx)("div", {
                            style: c.description,
                            children: (0, i.jsx)(s(109939).sA, {
                                id: "searchFooter.commandSearch.tooltip.description",
                                defaultMessage: "Try {shortcut} or click on {menuBarIcon} in your menubar to access search and Ask AI anytime, even with Notion minimized.",
                                values: {
                                    shortcut: t,
                                    menuBarIcon: (0, i.jsx)(h, {})
                                }
                            })
                        })]
                    }), (0, i.jsx)("img", {
                        style: c.image,
                        src: r
                    })]
                }) : null
            }
            let p = {
                    display: "inline-block",
                    position: "relative"
                },
                m = {
                    width: 15,
                    height: 15,
                    display: "inline-block"
                },
                g = {
                    position: "absolute",
                    insetInlineStart: 0,
                    top: 3
                };

            function h() {
                return (0, i.jsxs)("div", {
                    style: p,
                    children: [(0, i.jsx)("span", {
                        style: m
                    }), (0, i.jsx)("span", {
                        style: g,
                        children: (0, i.jsx)(s(16275).I, {
                            icon: s(106811).notionFlatTintableIcon,
                            colorVariant: "inverseSecondary",
                            size: "sm"
                        })
                    })]
                })
            }
        },
        725571: (e, t, s) => {
            s.d(t, {
                S: () => n,
                g: () => i
            }), s(296540);
            var a = s(474848);
            let i = 8,
                r = {
                    container: {
                        backgroundColor: "transparent",
                        margin: 8,
                        display: "flex"
                    },
                    card: {
                        maxWidth: 232,
                        minWidth: 232,
                        borderRadius: 12,
                        border: `1px solid ${s(632079).Tj.border.primary}`,
                        boxShadow: "0px 12px 36px -6px rgba(29, 27, 22, 0.08)",
                        position: "relative",
                        backgroundColor: s(632079).Tj.background.elevated
                    },
                    dismissButton: {
                        position: "absolute",
                        top: 12,
                        insetInlineEnd: 12,
                        width: 24,
                        height: 24,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 12,
                        background: s(632079).Tj.background.elevated
                    },
                    dismissButtonHover: {
                        background: s(632079).Tj.whiteButtonHoveredBackground
                    },
                    image: {
                        background: "white",
                        borderStartStartRadius: 12,
                        borderStartEndRadius: 12,
                        alignSelf: "stretch",
                        height: 142,
                        width: "100%",
                        objectFit: "cover"
                    },
                    badge: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: 16,
                        padding: "0px 4px",
                        gap: 2,
                        borderRadius: 4,
                        background: s(632079).Tj.blue.background.secondaryTranslucent,
                        width: "fit-content"
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function n(e) {
                let {
                    title: t,
                    body: i,
                    button: n,
                    imageUrl: l,
                    onDismiss: o,
                    badge: d
                } = e, c = (0, s(109939).tz)();
                return (0, a.jsx)("div", {
                    style: r.container,
                    children: (0, a.jsxs)(s(4458).VP, {
                        style: r.card,
                        className: "autolayout-fill-width",
                        children: [(0, a.jsx)(s(989059).A, {
                            src: l,
                            style: r.image
                        }), (0, a.jsxs)(s(4458).VP, {
                            gap: 6,
                            paddingBlock: 12,
                            paddingInlineEnd: 16,
                            paddingInlineStart: 12,
                            style: r.positionRelative,
                            children: ["string" == typeof d ? (0, a.jsx)("div", {
                                style: r.badge,
                                children: (0, a.jsx)(s(111010).D, {
                                    styleKey: "captionSmMedium",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary",
                                    children: d
                                })
                            }) : d, (0, a.jsx)(s(111010).D, {
                                styleKey: "bodySemibold",
                                colorVariant: "primary",
                                children: t
                            }), (0, a.jsx)(s(111010).D, {
                                styleKey: "bodyRegular",
                                colorVariant: "secondary",
                                children: i
                            })]
                        }), (0, a.jsx)(s(4458).VP, {
                            paddingInline: 12,
                            paddingBottom: 12,
                            style: r.positionRelative,
                            children: (0, a.jsx)(s(548436).A, {
                                size: "md",
                                onClick: () => n.onClick(),
                                children: (0, a.jsx)(s(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    children: n.text
                                })
                            })
                        }), o ? (0, a.jsx)(s(374533).A, {
                            ariaLabel: c.formatMessage({
                                id: "dismiss.dismissButton.label",
                                defaultMessage: "Dismiss"
                            }),
                            hoveredStyle: r.dismissButtonHover,
                            icon: s(25094).xMarkSmallIcon,
                            onClick: o,
                            style: r.dismissButton
                        }) : void 0]
                    })
                })
            }
        },
        727395: (e, t, s) => {
            s.d(t, {
                Bo: () => a,
                Jq: () => i,
                _9: () => r,
                w_: () => n
            });
            let a = {
                    "lastEdited.desc": "led",
                    "lastEdited.asc": "lea",
                    "created.desc": "ctd",
                    "created.asc": "cta"
                },
                i = (0, s(109939).YK)({
                    sort: {
                        id: "search.sort.sortButton.label",
                        defaultMessage: "Sort"
                    },
                    bestMatches: {
                        id: "search.sort.sortOrder.bestMatches",
                        defaultMessage: "Best matches"
                    },
                    lastEditedNewestFirst: {
                        id: "search.sort.sortOrder.lastEdited.newestFirst",
                        defaultMessage: "Last edited: Newest first"
                    },
                    lastEditedOldestFirst: {
                        id: "search.sort.sortOrder.lastEdited.oldestFirst",
                        defaultMessage: "Last edited: Oldest first"
                    },
                    createdNewestFirst: {
                        id: "search.sort.sortOrder.created.newestFirst",
                        defaultMessage: "Created: Newest first"
                    },
                    createdOldestFirst: {
                        id: "search.sort.sortOrder.created.oldestFirst",
                        defaultMessage: "Created: Oldest first"
                    }
                }),
                r = [{
                    key: "lastEdited.desc",
                    formattedName: i.lastEditedNewestFirst,
                    sort: {
                        field: "lastEdited",
                        direction: "desc"
                    }
                }, {
                    key: "lastEdited.asc",
                    formattedName: i.lastEditedOldestFirst,
                    sort: {
                        field: "lastEdited",
                        direction: "asc"
                    }
                }, {
                    key: "created.desc",
                    formattedName: i.createdNewestFirst,
                    sort: {
                        field: "created",
                        direction: "desc"
                    }
                }, {
                    key: "created.asc",
                    formattedName: i.createdOldestFirst,
                    sort: {
                        field: "created",
                        direction: "asc"
                    }
                }],
                n = [{
                    key: "relevance",
                    formattedName: i.bestMatches,
                    sort: {
                        field: "relevance"
                    }
                }, ...r]
        },
        729810: (e, t, s) => {
            s.d(t, {
                r: () => i
            }), s(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.06 1.19 15.88 15.65",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M12.207 1.322a1.91 1.91 0 0 0-2.33.838l-.348.715c-.177.292-.36.658-.535 1.005l-.13.257c-.225.442-.431.822-.627 1.08L6.073 7.521h-2.41a1.6 1.6 0 0 0-1.6 1.6v5.139a1.6 1.6 0 0 0 1.6 1.6H6.97l1.227.42.021.01c.73.366 1.528.554 2.347.554h4.309a1.844 1.844 0 0 0 1.78-2.32c.554-.318.922-.918.922-1.6 0-.284-.067-.547-.18-.78.333-.327.54-.782.54-1.297a1.8 1.8 0 0 0-.388-1.124c.17-.27.271-.592.271-.943a1.844 1.844 0 0 0-1.843-1.844h-3.783c.069-.167.15-.33.242-.516a6 6 0 0 0 .416-1.004l.001-.002.507-1.774a1.913 1.913 0 0 0-1.144-2.315zM10.64 3.449l.345-.71a.66.66 0 0 1 .781-.248c.32.128.488.471.393.804l-.507 1.773v.001c-.08.276-.195.512-.336.797l-.014.028c-.134.27-.292.59-.408.97a1.03 1.03 0 0 0 .988 1.323h4.095c.327 0 .593.267.593.594a.56.56 0 0 1-.27.47.625.625 0 0 0 .066 1.086.56.56 0 0 1 .322.511.58.58 0 0 1-.4.55.625.625 0 0 0-.191 1.074c.149.122.23.285.23.453a.586.586 0 0 1-.584.594.625.625 0 0 0-.452 1.057.594.594 0 0 1-.416 1.02h-4.31c-.593 0-1.17-.13-1.703-.381a.6.6 0 0 0-.161-.083l-1.424-.488a.6.6 0 0 0-.202-.033h-.181V8.475L9.169 6.05l.037-.043c.286-.367.547-.86.772-1.303l.147-.29a13 13 0 0 1 .515-.965M5.794 8.772v5.839H3.663a.35.35 0 0 1-.35-.35V9.122a.35.35 0 0 1 .35-.35z"
                    })
                },
                i = (0, s(104509).wt)("handThumbsUp", a, "default")
        },
        739271: (e, t, s) => {
            s.d(t, {
                s: () => i
            });
            var a = s(296540);

            function i() {
                let [e, t] = (0, a.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [s, i] = (0, a.useState)(!1), [r, n] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    if (s) {
                        function e() {
                            n(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && n(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [s]), [(0, a.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && r,
                    onFocus: () => {
                        i(!0)
                    },
                    onBlur: () => {
                        i(!1)
                    }
                }), [e, r]), (0, a.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: r,
                    isComboboxFocused: s,
                    onItemHover: () => {
                        n(!1)
                    }
                }), [r, s])]
            }
        },
        750943: (e, t, s) => {
            s.d(t, {
                O: () => E
            }), s(517642), s(658004), s(733853), s(845876), s(432475), s(515024), s(731698), s(898992), s(823215), s(354520), s(672577), s(581454), s(737550);
            let a = new Set(["myself", "of", "the", "until", "couldn", "below", "won't", "me", "hers", "what", "i'll", "it's", "too", "then", "re", "itself", "further", "ma", "there", "have", "because", "just", "she'd", "doing", "hadn", "mustn't", "being", "down", "a", "from", "shouldn't", "shouldn", "it", "mightn't", "o", "before", "but", "we'd", "you've", "and", "ours", "wasn't", "did", "each", "is", "should", "which", "were", "here", "not", "at", "ll", "where", "an", "same", "we're", "haven't", "haven", "isn", "with", "hasn", "she'll", "between", "has", "that'll", "been", "they", "this", "for", "more", "over", "i", "that", "having", "he", "needn", "through", "out", "we", "under", "don't", "wasn", "both", "you'll", "do", "so", "t", "hadn't", "to", "him", "yourselves", "nor", "them", "own", "your", "hasn't", "they'll", "he'll", "couldn't", "y", "ain", "he's", "these", "d", "no", "himself", "after", "how", "mustn", "mightn", "off", "other", "ve", "was", "wouldn", "in", "it'll", "shan", "when", "about", "if", "than", "we've", "who", "above", "didn't", "only", "they've", "such", "during", "shan't", "she's", "why", "can", "theirs", "won", "our", "its", "had", "as", "up", "will", "m", "their", "doesn", "those", "you're", "ourselves", "isn't", "yourself", "into", "you", "needn't", "any", "am", "very", "my", "they'd", "again", "themselves", "didn", "some", "herself", "her", "whom", "they're", "while", "now", "weren't", "i'd", "his", "by", "we'll", "yours", "weren", "or", "most", "it'd", "i've", "against", "are", "does", "once", "aren", "aren't", "few", "s", "all", "wouldn't", "you'd", "he'd", "doesn't", "don", "should've", "on", "be", "i'm", "she"]),
                i = /(.{1,3})不\1/,
                r = /什么|什麼|谁|誰|哪|怎么|怎麼|多少|啥|如何|是否/,
                n = /我|你|他|她|它|您/,
                l = /今天|昨天|明天|前天|这几天|這幾天|这两天|這兩天|周|週|月|最近|最新|当前|當前|目前|近来|近來|即将|即將|刚才|剛才|刚刚|剛剛|进行中|進行中|正在/,
                o = /누구|뭐|어디|언제|왜|어떻게|어떤|어느|할 수 있|할 수도/,
                d = /나는|내가|제가|너가|네가|우리|저희|너는|그것|그들|이것|그거|저거/,
                c = ["내", "제"],
                u = /지금|오늘|내일|어제|모레|그저께|이번주|다음주|지난주|이번달|다음달|지난달|올해|내년|작년|재작년|내후년|아침|정오|점심|오후|저녁|새벽|나중에|곧|항상|자주|가끔|드물게/,
                p = /슬랙|스랙|마이크로소프트|구글|깃허브|쉐어포인트|지메일|이메일|지라/,
                m = /なに|何|だれ|誰|どこ|いつ|なぜ|どうして|どの|どれ|どちら|どっち|どんな|いかが|いかなる|どうする/,
                g = /何も|いつも|何でも|なんでも|誰でも|いつでも|どこでも|どうでも|どれでも|どこか|いつか|誰か/,
                h = /私|わたし|僕|ぼく|俺|おれ|あなた|君|きみ|彼|かれ|彼女|かのじょ/,
                f = /スラック|マイクロソフト|グーグル|ギットハブ|シェアポイント|ジーメール|メール|ジラ/,
                y = /今日|今晩|今朝|朝から|朝まで|午前|昼前|正午|昼時|午後|日中|夕方|昨日|明日|明後日|先週|今週|来週|先月|今月|来月|今年|来年|昨年|去年|最近|現在|最新|進行中|真夜中|明け方|後で|すぐ|時々|めったに/;

            function v(e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase()
            }
            let x = ["qui", "que", "quoi", "où", "quand", "pourquoi", "comment", "quel", "quelle", "quels", "quelles", "combien"],
                b = ["ou"],
                S = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles", "moi", "toi", "lui", "eux", "mon", "ton", "son", "notre", "votre", "leur", "me", "ma", "te", "ta", "se", "sa", "mes", "tes", "ses", "nos", "vos", "leurs"],
                w = [],
                M = ["aujourd'hui", "hier", "demain", "semaine", "semaines", "mois", "recent", "recemment", "actuel", "actuellement", "dernierement", "dernier", "prochain", "en cours"],
                j = ["quien", "quienes", "cual", "cuales", "porque", "donde", "cuanto", "cuantos", "cuantas"],
                k = ["cuando", "como"],
                C = ["yo", "tu", "el", "ella", "nosotros", "nosotras", "vosotros", "vosotras", "ellos", "ellas", "mi", "su", "nuestro", "nuestra", "vuestro", "vuestra", "sus", "me", "te", "se", "nos", "os", "lo", "la", "los", "las"],
                T = [],
                I = ["hoy", "ayer", "manana", "semana", "semanas", "mes", "meses", "reciente", "recientemente", "actual", "actualmente", "ultimo", "proximo", "en curso"],
                A = ["el", "la", "los", "las", "de", "del", "al", "en", "un", "una", "unos", "unas", "y", "o", "pero", "si", "no", "con", "por", "para", "sin", "sobre", "entre", "desde", "hasta", "durante", "antes", "despues", "segun", "hacia", "contra", "bajo", "tras", "ante", "mediante", "salvo", "excepto", "incluso", "solo", "tambien", "aun", "ya", "todavia", "apenas", "mas", "menos", "muy", "mucho", "poco", "bastante", "demasiado", "tan", "tanto", "cuanto", "todo", "cada", "otro", "mismo", "ese", "este", "aquel", "eso", "esto", "aquello", "donde", "cuando", "como", "que", "quien", "cual", "cuyo", "cuya", "cuyos", "cuyas", "es", "son", "esta", "estan", "estoy", "estas", "estamos", "estais", "soy", "eres", "somos", "sois", "fue", "fueron", "era", "eran", "eras", "eramos", "erais", "sea", "sean", "seas", "seamos", "seais", "este", "esten", "estes", "estemos", "esteis", "siendo", "estado", "ser", "estar"],
                B = ["who", "whos", "what", "whens", "whats", "wheres", "why", "how", "hows", "which", "whose", "whom", "whatever", "whenever", "wherever", "however", "whichever", "whether"],
                R = ["is", "can", "could", "couldn", "couldnt", "should", "shouldn", "shouldnt", "would", "wouldn", "wouldnt", "does", "doesnt", "did", "didnt", "do", "does", "dont", "where", "when"],
                P = ["i", "me", "my", "mine", "myself", "we", "us", "our", "ours", "ourselves", "you", "your", "youre", "yours", "yourself", "yourselves", "it", "its", "itself", "they", "them", "their", "theirs", "themselves", "this", "that", "these", "those"],
                H = ["slack", "microsoft", "google", "github", "sharepoint", "gmail", "jira", "onedrive", "linear"],
                _ = ["today", "yesterday", "tomorrow", "week", "weeks", "month", "months", "recent", "recently", "current", "currently", "lately", "latest", "upcoming", "ongoing"];

            function E(e) {
                let {
                    query: t,
                    searchSessionId: E
                } = e, D = (0, s(682985).K8)(() => {
                    var e;
                    return !!(0, s(328765).S)() && (0, s(262166).HO)(null == (e = (0, s(328765).S)()) ? void 0 : e.getSubscriptionTier())
                }, []), F = (0, s(682985).K8)(() => (function(e) {
                    let {
                        query: t,
                        searchSessionId: E
                    } = e, {
                        is_query_natural_language: D,
                        character_length: F,
                        word_length: N,
                        cjk_language: L,
                        is_extended_question: O
                    } = function(e) {
                        var t;
                        let {
                            query: E
                        } = e, D = (null == (t = s(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.preferred_locale) ? ? s(619157).q, F = (0, s(388400).Bu)(E, D);
                        if ("zh" === F) {
                            if (Array.from(E).length < 3) return {
                                is_query_natural_language: !1,
                                cjk_language: "zh",
                                character_length: Array.from(E).length,
                                word_length: void 0,
                                is_extended_question: !1
                            }
                        } else if ("ja" === F) {
                            if (Array.from(E).length < 6) return {
                                is_query_natural_language: !1,
                                cjk_language: "ja",
                                character_length: Array.from(E).length,
                                word_length: void 0,
                                is_extended_question: !1
                            }
                        } else {
                            if ("ko" === F && Array.from(E).length < 6) return {
                                is_query_natural_language: !1,
                                cjk_language: "ko",
                                character_length: Array.from(E).length,
                                word_length: void 0,
                                is_extended_question: !1
                            };
                            let e = (E ? ? "").toLowerCase().replace(/[^\w\s]|_/gu, " ").split(/\s+/),
                                t = s(218744).default.getConfigKey("ai_auto_stream_config", "minWordCount") ? ? 3;
                            if (e.length < t) return {
                                is_query_natural_language: !1,
                                cjk_language: F,
                                character_length: Array.from(E).length,
                                word_length: e.length,
                                is_extended_question: !1
                            }
                        }
                        let N = function({
                            query: e,
                            detectedLanguage: t,
                            detectionTypes: E,
                            userLocale: D,
                            treatUnsupportedLanguageAsNaturalLanguage: F,
                            filterStopWords: N
                        }) {
                            let L = (0, s(255139).l0)(e).stringWithoutQuotedTerms,
                                O = new Set((L ? ? "").toLowerCase().replace(/[^\w\s]|_/gu, " ").split(/\s+/)),
                                z = (0, s(388400).Bu)(e, D);
                            if ("zh" === z && L) {
                                if (function(e) {
                                        let {
                                            unquotedQuery: t,
                                            detectionTypes: s
                                        } = e;
                                        return !!(s.includes("question_words") && (t.endsWith("吗") || t.endsWith("嗎") || t.endsWith("呢") || r.test(t) || t.includes("有没有") || t.includes("有沒有") || t.includes("有冇") || i.test(t))) || !!(s.includes("pronouns") && n.test(t)) || (s.includes("connector_names"), !!(s.includes("time_frame") && l.test(t)))
                                    }({
                                        unquotedQuery: L,
                                        detectionTypes: E
                                    })) return !0
                            } else if ("ko" === z && L) {
                                if (function(e) {
                                        let {
                                            unquotedQuery: t,
                                            detectionTypes: s
                                        } = e, a = (t ? ? "").replace(/[^\p{L}\p{N}\s]|_/gu, " ").split(/\s+/);
                                        return !!(s.includes("question_words") && (o.test(t) || (t.endsWith("가요") || t.endsWith("나요")) && !t.endsWith("인기가요")) || s.includes("pronouns") && (d.test(t) || a.some(e => e.startsWith("이거")) || a.some(e => c.includes(e)))) || !!(s.includes("connector_names") && p.test(t) || s.includes("time_frame") && u.test(t))
                                    }({
                                        unquotedQuery: L,
                                        detectionTypes: E
                                    })) return !0
                            } else if ("ja" === z && L) {
                                if (function(e) {
                                        let {
                                            unquotedQuery: t,
                                            detectionTypes: s
                                        } = e, a = t.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()。、？]/g, "");
                                        if (s.includes("question_words") && (a.length > 6 && (a.endsWith("か") || a.endsWith("なの") || a.endsWith("どう")) || m.test(t) && !g.test(t))) return !0;
                                        return !!(s.includes("pronouns") && h.test(t) || s.includes("connector_names") && f.test(t) || s.includes("time_frame") && y.test(t))
                                    }({
                                        unquotedQuery: L,
                                        detectionTypes: E
                                    })) return !0
                            } else if ("fr" === t && L) {
                                if (function(e) {
                                        let {
                                            detectionTypes: t
                                        } = e, s = e.unquotedQuery.toLowerCase(), a = (function(e) {
                                            let t = e;
                                            for (let [e, s] of [
                                                    [/(\b)l[''](\w)/gi, "$1le $2"],
                                                    [/(\b)d[''](\w)/gi, "$1de $2"],
                                                    [/(\b)j[''](\w)/gi, "$1je $2"],
                                                    [/(\b)m[''](\w)/gi, "$1me $2"],
                                                    [/(\b)t[''](\w)/gi, "$1te $2"],
                                                    [/(\b)s[''](\w)/gi, "$1se $2"],
                                                    [/(\b)n[''](\w)/gi, "$1ne $2"],
                                                    [/(\b)c[''](\w)/gi, "$1ce $2"],
                                                    [/(\b)qu[''](\w)/gi, "$1que $2"],
                                                    [/(\b)au(\b)/gi, "à le"],
                                                    [/(\b)aux(\b)/gi, "à les"],
                                                    [/(\b)du(\b)/gi, "de le"],
                                                    [/(\b)des(\b)/gi, "de les"],
                                                    [/(\b)l' (\w)/gi, "le $2"],
                                                    [/(\b)d' (\w)/gi, "de $2"]
                                                ]) t = t.replace(e, s);
                                            return t
                                        })(s ? ? "").replace(/[-.!,;:_?\s]/gu, " ").toLowerCase().split(/\s+/), i = new Set(a), r = new Set(a.map(e => v(e)));
                                        if (t.includes("question_words") && a.length >= 3) {
                                            if (x.some(e => i.has(e))) return !0;
                                            let e = null == s ? void 0 : s.split(/[.!,;:]\s+/).map(e => v(e.trim().split(/\s+/)[0] ? ? "")).filter(Boolean);
                                            if (null != e && e.find(e => b.includes(e)) || v(s).includes("est-ce que")) return !0;
                                            let t = ["est", "sont", "a", "ont", "peut", "peuvent", "doit", "doivent"],
                                                r = ["je", "tu", "il", "elle", "nous", "vous", "ils", "elles"];
                                            for (let e = 0; e < a.length - 1; e++)
                                                if (t.includes(a[e]) && r.includes(a[e + 1])) return !0
                                        }
                                        return !!(t.includes("pronouns") && S.some(e => r.has(e)) || t.includes("connector_names") && w.some(e => r.has(e)) || t.includes("time_frame") && M.some(e => r.has(e)))
                                    }({
                                        unquotedQuery: L,
                                        detectionTypes: E
                                    })) return !0
                            } else if ("es" === t && L) {
                                if (function(e) {
                                        let {
                                            detectionTypes: t
                                        } = e, s = e.unquotedQuery.toLowerCase(), a = s.replace(/[-.!,;:_?\s]/gu, " ").toLowerCase().split(/\s+/), i = new Set(a.map(e => v(e)));
                                        if (0 === a.filter(e => {
                                                let t = v(e);
                                                return !A.includes(t) && !j.includes(t) && "que" !== t && "como" !== t
                                            }).length) return !1;
                                        if (t.includes("question_words") && a.length >= 2) {
                                            if (j.some(e => i.has(e)) || a.includes("qué")) return !0;
                                            let e = null == s ? void 0 : s.split(/[.!,;:]\s+/).map(e => {
                                                var t;
                                                return v((null == (t = e.trim().split(/\s+/)[0]) ? void 0 : t.toLowerCase()) ? ? "")
                                            }).filter(Boolean);
                                            if (null != e && e.find(e => k.includes(e)) && a.length > 2) return !0;
                                            let t = ["es", "son", "esta", "estan", "puede", "pueden", "debe", "deben", "tiene", "tienen"];
                                            for (let e = 0; e < a.length - 1; e++)
                                                if (t.includes(v(a[e])) && C.includes(v(a[e + 1]))) return !0
                                        }
                                        return !!(t.includes("pronouns") && C.some(e => i.has(e)) || t.includes("connector_names") && T.some(e => i.has(e)) || t.includes("time_frame") && I.some(e => i.has(e)))
                                    }({
                                        unquotedQuery: L,
                                        detectionTypes: E
                                    })) return !0
                            } else if (F && "en" !== t) return !0;
                            if ((L ? ? "").includes("?") || (L ? ? "").includes("？") || (L ? ? "").includes("¿")) return !0;
                            if (N && function(e) {
                                    let {
                                        query: t,
                                        stopWords: s
                                    } = e;
                                    return Array.from(new Set(((null == t ? void 0 : t.trim()) ? ? "").toLowerCase().replace(/[^\w\s]|_/gu, " ").split(/\s+/).filter(e => e.length >= 3))).every(e => s.has(e.trim()))
                                }({
                                    query: L,
                                    stopWords: a
                                })) return !1;
                            for (let e of [E.includes("question_words") ? B : [], E.includes("pronouns") ? P : [], E.includes("connector_names") ? H : [], E.includes("time_frame") ? _ : []])
                                if (e.some(e => O.has(e))) return !0;
                            if (E.includes("question_words")) {
                                let e = null == L ? void 0 : L.split(/[.!,;:]\s+/).map(e => {
                                    var t;
                                    return null == (t = e.trim().split(/\s+/)[0]) ? void 0 : t.toLowerCase()
                                }).filter(Boolean);
                                if (null != e && e.find(e => R.includes(e))) return !0
                            }
                            return !1
                        }({
                            query: E,
                            detectedLanguage: "none" === F ? (0, s(619157).o_)(D) : F,
                            detectionTypes: ["question_words"],
                            userLocale: D,
                            treatUnsupportedLanguageAsNaturalLanguage: !1,
                            filterStopWords: !0
                        });
                        if (!N) {
                            if ("zh" === F || "ja" === F || "ko" === F) return {
                                is_query_natural_language: !1,
                                cjk_language: F,
                                character_length: Array.from(E).length,
                                word_length: void 0,
                                is_extended_question: Array.from(E).length / 1.5 >= 6
                            };
                            let e = (E ? ? "").toLowerCase().replace(/[^\w\s]|_/gu, " ").split(/\s+/);
                            return {
                                is_query_natural_language: e.length >= 6,
                                cjk_language: F,
                                character_length: Array.from(E).length,
                                word_length: void 0,
                                is_extended_question: e.length >= 6
                            }
                        }
                        return {
                            is_query_natural_language: N,
                            cjk_language: F,
                            character_length: Array.from(E).length,
                            word_length: void 0,
                            is_extended_question: !1
                        }
                    }({
                        query: t,
                        searchSessionId: E
                    });
                    return (0, s(104310).u)({
                        event: {
                            eventName: "natural_language_query_check_fired",
                            eventProperties: {
                                is_query_natural_language: D,
                                character_length: F,
                                word_length: N,
                                cjk_language: L,
                                search_session_id: E,
                                is_extended_question: O
                            }
                        }
                    }), D || O
                })({
                    query: t,
                    searchSessionId: E
                }), [t, E]);
                return {
                    variant: (0, s(682985).K8)(() => D && s(205885).A.state.online && F && s(886556).z.isAnswerStreamingInSearchModalEnabled() ? "auto_streaming" : s(886556).z.shouldShowSearchMenuItemAskAI() && s(205885).A.state.online ? "navigate_to_full_page" : "none", [D, F]),
                    isNaturalLanguageQuery: F
                }
            }
        },
        795811: (e, t, s) => {
            s.d(t, {
                z: () => c
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.94 1.41 14.11 13.17",
                    svg: (0, a.jsx)("path", {
                        d: "M11.57 12.947c0 .903-.733 1.636-1.637 1.636H6.066a1.637 1.637 0 0 1-1.636-1.636v-3.23H2.2a1.25 1.25 0 0 1-.884-2.135l5.8-5.8a1.25 1.25 0 0 1 1.768 0l5.8 5.8a1.25 1.25 0 0 1-.884 2.134h-2.23zm-5.89 0c0 .187.133.343.309.379l.077.007h3.867l.079-.008c.15-.03.27-.15.3-.3l.008-.078v-4.4a.08.08 0 0 1 .049-.074l.031-.007h3.4L8 2.666l-5.8 5.8h3.4a.08.08 0 0 1 .08.08z"
                    })
                },
                r = (0, s(104509).wt)("arrowShapeUpSmall", i, "small"),
                n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.37 2.37 11.26 11.26",
                    svg: (0, a.jsx)("path", {
                        d: "M4.667 2.375a2.292 2.292 0 0 0 0 4.583h1.042v2.084H4.667a2.292 2.292 0 1 0 2.291 2.291v-1.041h2.083v1.041a2.292 2.292 0 1 0 2.292-2.291h-1.041V6.958h1.041a2.292 2.292 0 1 0-2.292-2.291v1.041H6.958V4.667a2.29 2.29 0 0 0-2.291-2.292M3.625 4.667a1.042 1.042 0 1 1 2.083 0v1.041H4.667a1.04 1.04 0 0 1-1.042-1.041m6.666 0a1.042 1.042 0 1 1 1.042 1.041h-1.042zM6.958 9.042V6.958h2.084v2.084zm-3.333 2.291c0-.575.466-1.041 1.042-1.041h1.041v1.041a1.042 1.042 0 1 1-2.083 0m6.666 0v-1.041h1.042a1.042 1.042 0 1 1-1.042 1.041"
                    })
                },
                l = (0, s(104509).wt)("commandSmall", n, "small"),
                o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.44 3 11.11 10",
                    svg: (0, a.jsx)("path", {
                        d: "M5.647 3.002c.514 0 .948.284 1.152.75l3.47 7.822a.3.3 0 0 0 .106.125c.04.024.098.04.185.04h2.343c.354 0 .648.281.648.632a.636.636 0 0 1-.648.626h-2.58c-.265 0-.497-.056-.693-.182a1.23 1.23 0 0 1-.45-.558L5.696 4.43a.3.3 0 0 0-.105-.13.3.3 0 0 0-.165-.041H3.098a.635.635 0 0 1-.649-.632.63.63 0 0 1 .649-.626zm7.256 0c.356 0 .642.262.642.621a.625.625 0 0 1-.642.626H9.481a.63.63 0 0 1-.647-.626c0-.36.293-.621.647-.621z"
                    })
                },
                d = (0, s(104509).wt)("optionSmall", o, "small");

            function c(e) {
                let {
                    shortcut: t
                } = e;
                return t ? (0, a.jsxs)(s(4458).fI, {
                    gap: 2,
                    alignItems: "center",
                    children: [t.shift ? (0, a.jsx)(s(16275).I, {
                        icon: r,
                        size: "xxs",
                        colorVariant: "secondary"
                    }) : void 0, t.control ? (0, a.jsx)(s(16275).I, {
                        icon: s(336632).Y,
                        size: "xxs",
                        colorVariant: "secondary"
                    }) : void 0, t.option ? (0, a.jsx)(s(16275).I, {
                        icon: d,
                        size: "xxs",
                        colorVariant: "secondary"
                    }) : void 0, t.command ? (0, a.jsx)(s(16275).I, {
                        icon: l,
                        size: "xxs",
                        colorVariant: "secondary"
                    }) : void 0, t.enter ? (0, a.jsx)(s(16275).I, {
                        icon: s(750748).arrowTurnDownLeftSmallIcon,
                        size: "xxs",
                        colorVariant: "secondary"
                    }) : void 0, t.key ? (0, a.jsx)(s(111010).D, {
                        colorVariant: "secondary",
                        styleKey: "captionRegular",
                        children: 1 === t.key.length ? t.key.toUpperCase() : t.key
                    }) : void 0]
                }) : null
            }
        },
        823691: (e, t, s) => {
            s.d(t, {
                _: () => i
            }), s(296540);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.06 3.15 15.88 15.65",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M7.793 18.678a1.91 1.91 0 0 0 2.33-.838l.348-.715c.177-.293.36-.658.535-1.005l.13-.257c.225-.442.431-.822.627-1.08l2.164-2.306h2.41a1.6 1.6 0 0 0 1.6-1.6V5.74a1.6 1.6 0 0 0-1.6-1.6H13.03l-1.227-.42-.021-.011a5.2 5.2 0 0 0-2.347-.553H5.126a1.844 1.844 0 0 0-1.78 2.32 1.84 1.84 0 0 0-.922 1.6c0 .284.067.547.18.78-.333.327-.54.782-.54 1.297 0 .429.145.817.388 1.124-.17.27-.272.592-.272.943 0 1.018.826 1.844 1.844 1.844h3.783c-.069.167-.15.33-.242.516v.001a6 6 0 0 0-.417 1.004v.002L6.64 16.36a1.913 1.913 0 0 0 1.144 2.315zm1.567-2.126-.345.71a.66.66 0 0 1-.781.247.66.66 0 0 1-.393-.804l.507-1.773v-.001c.08-.276.195-.512.336-.797l.014-.028c.134-.27.292-.59.408-.97a1.03 1.03 0 0 0-.988-1.323H4.023a.594.594 0 0 1-.593-.594.56.56 0 0 1 .27-.47.625.625 0 0 0-.066-1.086.56.56 0 0 1-.321-.511c0-.255.157-.467.398-.55a.625.625 0 0 0 .192-1.074.59.59 0 0 1-.23-.453c0-.334.263-.594.584-.594a.625.625 0 0 0 .452-1.057.594.594 0 0 1 .416-1.02h4.31c.593 0 1.17.13 1.703.381a.6.6 0 0 0 .161.083l1.424.488a.6.6 0 0 0 .202.033h.181v6.136l-2.275 2.425-.037.043c-.286.367-.547.86-.772 1.303l-.147.29c-.177.352-.334.665-.486.912zm4.846-5.324v-5.84h2.131a.35.35 0 0 1 .35.35v5.139a.35.35 0 0 1-.35.35z"
                    })
                },
                i = (0, s(104509).wt)("handThumbsDown", a, "default")
        },
        833503: (e, t, s) => {
            s.d(t, {
                s: () => f
            });
            var a = s(296540),
                i = () => s(722371),
                r = () => s(770808),
                n = s(474848);

            function l(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: i,
                    onSizeChanged: l
                } = e, o = (0, a.useMemo)(() => (0, r().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: c
                } = (0, s(218381).e)(o), u = (0, a.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: a
                    } = e;
                    return {
                        width: (0, s(627179).qE)({
                            value: (null == a ? void 0 : a.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, s(627179).qE)({
                            value: (null == a ? void 0 : a.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: o,
                    preferredSize: d
                }), [o, d]), p = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: s,
                        areaConstraint: a
                    } = e, i = "allow" === a.width.scroll, r = "allow" === a.height.scroll, n = i && (null == s ? void 0 : s.width) !== void 0 && t.width < s.width, l = r && (null == s ? void 0 : s.width) !== void 0 && t.height < s.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: a.width.min,
                            maxWidth: i ? void 0 : a.width.max,
                            minHeight: a.height.min,
                            maxHeight: r ? void 0 : a.height.max
                        },
                        isWidthScrollbarVisible: n,
                        isHeightScrollbarVisible: l
                    }
                }({
                    actualSize: u,
                    preferredSize: d,
                    areaConstraint: o
                }), m = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: a,
                        isSizeTransitionAnimated: i
                    } = e, n = (0, s(11012).j)(100), {
                        prefersReducedMotion: l
                    } = (0, s(533992).Y0)(), o = (0, r().bv)(a);
                    return (0, s(960253).I)(() => {
                        let e = "allow" === a.width.scroll,
                            s = "allow" === a.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: s ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: i && n && !l ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: o.height ? "fit-content" : "100%",
                                maxHeight: a.height.max,
                                maxWidth: a.width.max,
                                minHeight: a.height.min,
                                minWidth: a.width.min,
                                width: o.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, a, i, n, l, o])
                }({
                    actualSize: u,
                    areaConstraint: o,
                    isSizeTransitionAnimated: i
                });
                return (0, a.useEffect)(() => {
                    null == l || l(u, d)
                }, [u, l, d]), (0, n.jsx)(s(858803).w.Provider, {
                    value: p,
                    children: (0, n.jsx)("div", {
                        style: m.wrapper,
                        children: (0, n.jsx)("div", {
                            style: m.content,
                            children: (0, n.jsx)("div", {
                                ref: c,
                                className: "measure",
                                style: m.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            s(898992), s(354520), s(581454);
            var o = () => s(381453);

            function d(e) {
                let t = 0,
                    s = Number.MAX_SAFE_INTEGER;
                for (let a of e) {
                    if (!a) continue;
                    let e = (0, r().Vo)(a),
                        i = (0, o().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, o().qE)(e.min, 0, i)), s = Math.min(s, i)
                }
                let a = function(e) {
                    let t;
                    for (let s of e) {
                        let e = null == s ? void 0 : s.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, i().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, o().qE)(t, 0, s),
                    max: s,
                    scroll: a
                }
            }

            function c(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function u(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, i = (0, s(118872).lW)();
                return (0, a.useMemo)(() => {
                    let e = i.width - t.left - t.right,
                        s = i.height - t.top - t.bottom;
                    return (0, r().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: s
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, i.height, i.width])
            }

            function p(e) {
                let t, {
                        allowMenuList: r,
                        allowDismissByEscape: o = !0,
                        anchor: d = "center",
                        animateSizeTransition: p = !0,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        ariaDescribedBy: h,
                        keyboardAreaPriority: f,
                        children: y,
                        transition: v,
                        showCloseIcon: x,
                        borderRadius: b,
                        backgroundAppearance: S,
                        transitionAppearance: w
                    } = e,
                    [M, j] = (0, a.useState)(!1);
                (0, s(202146).exposeDebugValue)("screenshotMode", () => {
                    j(e => !e)
                });
                let k = function(e) {
                        let {
                            partial: t,
                            defaultLength: s = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? s,
                                    right: t.right ? ? s,
                                    top: t.top ? ? s,
                                    bottom: t.bottom ? ? s
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? s,
                                    right: t.horizontal ? ? s,
                                    top: t.vertical ? ? s,
                                    bottom: t.vertical ? ? s
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? s,
                                    right: t.length ? ? s,
                                    top: t.length ? ? s,
                                    bottom: t.length ? ? s
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: s,
                                    right: s,
                                    top: s,
                                    bottom: s
                                };
                            default:
                                (0, i().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    C = u({
                        minimumOutsideSpacing: k
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let T = c([C, t]),
                    I = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: a,
                            minimumOutsideSpacing: r,
                            borderRadius: n
                        } = e;
                        return (0, s(960253).I)(() => {
                            let e, l, o;
                            switch (a) {
                                case "top":
                                    e = "flex-start", l = r.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", o = r.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, i().HB)(a)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: n ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: l,
                                    paddingBottom: o
                                },
                                overlay: t ? {
                                    background: s(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: s(632079).Tj.background.primary
                                }
                            }
                        }, [a, t, r.bottom, r.top, n])
                    }({
                        screenshotMode: M,
                        anchor: d,
                        minimumOutsideSpacing: k,
                        borderRadius: b
                    }),
                    A = (0, n.jsx)(s(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: f,
                        allowEsc: !0,
                        allowMenuList: r,
                        children: () => (0, n.jsx)(l, {
                            areaConstraint: T,
                            isSizeTransitionAnimated: p,
                            children: (0, n.jsx)(s(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? y({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, n.jsx)(s(19187).e.Provider, {
                    value: v.onDismiss,
                    children: (0, n.jsx)(s(556809).a, {
                        ariaDescribedBy: h,
                        ariaLabel: m,
                        ariaLabelledBy: g,
                        backgroundStyle: "full-screen" === w ? I.fullScreenOverlay : I.overlay,
                        innerStyle: I.innerStyle,
                        isWaxPaper: "waxPaper" === S,
                        isWash: "wash" === S,
                        transitionAppearance: w,
                        onClosed: v.onClosed,
                        onDismiss: o ? v.onDismiss : void 0,
                        open: v.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: A,
                        showCloseIcon: x,
                        style: I.outerStyle,
                        className: e.className
                    })
                })
            }
            let m = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                g = {
                    height: "var(--full-viewport-height)"
                };

            function h(e) {
                var t, i, r;
                let o, d, {
                        allowDismissByEscape: p = !0,
                        animateSizeTransition: h = !0,
                        ariaLabel: f,
                        ariaLabelledBy: y,
                        ariaDescribedBy: v,
                        children: x,
                        transition: b
                    } = e,
                    S = u({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: w
                    } = (0, s(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && w && (o = {
                    width: {
                        type: "fixed",
                        length: s(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let M = c([S, o, {
                        width: {
                            type: "fill",
                            scroll: null == (i = d) || null == (i = i.width) ? void 0 : i.scroll
                        },
                        height: null == (r = d) ? void 0 : r.height
                    }]),
                    j = (0, a.useCallback)(() => (0, n.jsx)(s(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, n.jsx)(l, {
                            areaConstraint: M,
                            isSizeTransitionAnimated: h,
                            children: (0, n.jsx)(s(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? x({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [M, h, x]);
                return (0, n.jsx)(s(19187).e.Provider, {
                    value: b.onDismiss,
                    children: (0, n.jsx)(s(182718).zD, {
                        ariaLabel: f,
                        ariaLabelledBy: y,
                        ariaDescribedBy: v,
                        open: b.isOpen,
                        popupType: s(423291).n.BottomSheet,
                        onDismiss: p ? b.onDismiss : void 0,
                        onClosed: b.onClosed,
                        slideUpWrapStyle: g,
                        style: m,
                        content: j,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function f(e) {
                let {
                    isOpen: t,
                    onClosed: a,
                    onDismiss: r,
                    deprecatedCompatibilityOverrides: l,
                    startClosingOnDismiss: o
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, s(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? s(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(l), c = (0, s(245372).j)({
                    isOpen: t,
                    onClosed: a,
                    onDismiss: r,
                    startClosingOnDismiss: o
                });
                if (!c.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, n.jsx)(h, { ...e,
                            transition: c
                        });
                    case "desktop":
                        return (0, n.jsx)(p, { ...e,
                            transition: c
                        });
                    default:
                        (0, i().HB)(d)
                }
            }
        },
        851468: (e, t, s) => {
            s.d(t, {
                o: () => i
            });
            let a = new(s(345426)).ComputedStore(() => (0, s(850990).i)(s(898735).A.state.tabs, s(898735).A.state.currentTab.id), {
                debugName: "Search2.electronTabs"
            });

            function i() {
                return (0, s(682985).O$)(a)
            }
        },
        862761: (e, t, s) => {
            s.d(t, {
                A: () => i
            }), s(296540);
            var a = s(474848);

            function i() {
                return (0, a.jsx)(a.Fragment, {})
            }
            s(632079).Tj.palette.yellow[100]
        },
        894576: (e, t, s) => {
            s.d(t, {
                O: () => i
            }), s(296540);
            var a = s(474848);

            function i(e) {
                let {
                    marginLeftOverride: t
                } = e, i = (0, s(682985).K8)(() => {
                    let e = (0, s(876688).wd)();
                    return 0 === e.length ? ["notion", ...(0, s(876688).kB)()] : ["notion", ...e]
                }, []);
                return (0, a.jsx)("div", {
                    style: {
                        display: "flex",
                        paddingTop: 2,
                        paddingBottom: 2,
                        marginInlineStart: t ? ? 8
                    },
                    children: (0, a.jsx)(s(894658).hC, {
                        connectors: i,
                        maxBubbles: 3,
                        iconSize: 12
                    })
                })
            }
        },
        900822: (e, t, s) => {
            s.r(t), s.d(t, {
                badgeCheckIcon: () => r,
                iconDefinition: () => i
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.57 1.57 16.86 16.86",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M12.806 8.074a.625.625 0 1 0-1.072-.643l-2.512 4.185-1.407-1.642a.625.625 0 1 0-.95.814l1.973 2.3a.625.625 0 0 0 1.01-.085z"
                        }), (0, a.jsx)("path", {
                            d: "M10.405 1.724a.625.625 0 0 0-.81 0L7.36 3.628l-2.926.233a.625.625 0 0 0-.573.574L3.628 7.36 1.724 9.595a.624.624 0 0 0 0 .81l1.904 2.234.233 2.926a.625.625 0 0 0 .574.573l2.926.234 2.234 1.904a.624.624 0 0 0 .81 0l2.234-1.904 2.926-.234a.625.625 0 0 0 .573-.573l.234-2.926 1.904-2.234a.624.624 0 0 0 0-.81L16.372 7.36l-.234-2.926a.625.625 0 0 0-.573-.573l-2.926-.234zM8.017 4.711 10 3.02l1.983 1.69c.1.085.224.136.355.147l2.597.207.207 2.597c.01.13.062.255.147.355L16.98 10l-1.69 1.983a.63.63 0 0 0-.147.355l-.207 2.597-2.597.207a.63.63 0 0 0-.355.147L10 16.98l-1.983-1.69a.63.63 0 0 0-.355-.147l-2.597-.207-.207-2.597a.63.63 0 0 0-.147-.355L3.02 10l1.69-1.983a.63.63 0 0 0 .147-.355l.207-2.597 2.597-.207a.63.63 0 0 0 .355-.147"
                        })]
                    })
                },
                r = (0, s(104509).wt)("badgeCheck", i, "default")
        },
        903937: (e, t, s) => {
            s.d(t, {
                Q: () => a
            });

            function a() {
                return (0, s(509745).Q)()
            }
        },
        916084: (e, t, s) => {
            s.d(t, {
                sg: () => u,
                Ay: () => p,
                fQ: () => o,
                mD: () => d
            }), s(944114), s(898992), s(354520), s(672577), s(803949), s(581454);
            var a = s(296540),
                i = () => s(844565),
                r = s(474848);
            let n = (0, s(109939).YK)({
                    newPage: {
                        id: "searchDefaultBody.searchActionMenuItem.newPage",
                        defaultMessage: "Create a new page"
                    }
                }),
                l = {
                    wrapper: {
                        paddingTop: 8,
                        width: "100%",
                        height: "100%",
                        overflowX: "hidden",
                        overflowY: "auto",
                        paddingInlineStart: 4,
                        paddingInlineEnd: 4
                    },
                    sectionHeader: {
                        marginBottom: 8
                    },
                    section: {
                        marginBottom: 4
                    },
                    menuItemLabel: {
                        lineHeight: "20px",
                        fontSize: 14,
                        fontWeight: s(699422).Wy.medium
                    },
                    style0: {
                        paddingInlineStart: 1
                    },
                    style1: {
                        marginInlineStart: 2
                    }
                };

            function o(e) {
                let {
                    environment: t,
                    offsetFromBottom: a,
                    spaceStore: i,
                    setIsLoadingRecents: r,
                    setEndOfRecentsReached: n,
                    numRecents: l,
                    setNumRecents: o,
                    endOfRecentsReached: d,
                    isLoadingRecents: c,
                    incrementBy: u = 50,
                    isCrossWorkspace: p = !1
                } = e;
                if (a > 200 || c || d || !i) return;
                if (p) {
                    if ((0, s(601860).Dd)()) {
                        let e = l + u;
                        o(e), e > 200 && n(!0)
                    }
                    return
                }
                let m = s(420156).A.getWithoutSubscribing(i.id),
                    g = m[m.length - 1],
                    h = null == g ? void 0 : g.visitedAt;
                if (!h) return;
                let f = s(381453).nF(async () => {
                    let e = t.currentUser.id;
                    if (!e || !h) return;
                    r(!0);
                    let a = await s(384908).loadMoreRecentPages(h, {
                        environment: t,
                        userId: e,
                        spaceStore: i
                    });
                    r(!1), a || n(!0)
                }, 300);
                if (!(0, s(601860).Dd)()) return void f(); {
                    let e = s(601860).NK.state.length,
                        t = Math.min(l + u, e);
                    o(t), n(t >= e)
                }
            }

            function d(e) {
                let {
                    environment: t,
                    isNewElectronTab: a,
                    electronTabs: i,
                    intl: r,
                    isSlipperySlopeEnabled: l,
                    useTwoPaneStyle: o
                } = e, d = r.formatMessage(l ? {
                    id: "sidebar.newPage.button",
                    defaultMessage: "New page"
                } : n.newPage), c = l ? s(865213).Y : s(111481).M;
                return (0, s(674476).g)({
                    environment: t,
                    queryId: void 0,
                    desktopProps: {
                        isNewElectronTabSearch: !!a,
                        electronTabs: i
                    },
                    searchSessionId: void 0,
                    source: "quick_find",
                    buttonStyles: o ? {
                        borderRadius: 12
                    } : void 0,
                    action: () => {
                        s(635257).st({
                            reset: !1
                        })
                    },
                    result: {
                        type: "client_action",
                        eventName: "tab_new_page",
                        value: {
                            icon: c,
                            title: d,
                            behavior: "action",
                            aliases: void 0,
                            caption: void 0,
                            action: () => {
                                let e = s(254656).y8.SearchTabs;
                                (async () => {
                                    var a;
                                    let r = await (0, s(323836).M)({
                                        environment: t,
                                        from: "electron_new_tab_search",
                                        pageVisitSource: e,
                                        navigateOnCreate: !1
                                    });
                                    r && (await (null == (a = t.defaultRecordCache.persistedRecordCache) ? void 0 : a.flushPendingWrites()), (0, s(135422).q)({
                                        environment: t,
                                        pageVisitSource: e,
                                        openInNew: void 0,
                                        electronTabSearch: {
                                            tabs: i,
                                            isNewTab: !0
                                        },
                                        searchResult: {
                                            type: "custom",
                                            store: r
                                        },
                                        queryId: void 0,
                                        context: "new_page"
                                    }))
                                })()
                            }
                        }
                    }
                })
            }

            function c(e, t) {
                return {
                    store: e,
                    id: e.id,
                    score: -1,
                    spaceId: e.getSpaceId(),
                    sources: [s(821603).Ni.Local],
                    featureGroups: [],
                    originalPosition: t,
                    serverEventProperties: void 0
                }
            }

            function u({
                bucket: e
            }) {
                switch (e) {
                    case "today":
                        return (0, r.jsx)(s(109939).sA, {
                            id: "search.recentPagesTimeBuckets.today.text",
                            defaultMessage: "Today"
                        });
                    case "yesterday":
                        return (0, r.jsx)(s(109939).sA, {
                            id: "search.recentPagesTimeBuckets.yesterday.text",
                            defaultMessage: "Yesterday"
                        });
                    case "past_week":
                        return (0, r.jsx)(s(109939).sA, {
                            id: "search.recentPagesTimeBuckets.pastWeek.text",
                            defaultMessage: "Past week"
                        });
                    case "past_30_days":
                        return (0, r.jsx)(s(109939).sA, {
                            id: "search.recentPagesTimeBuckets.past30Days.text",
                            defaultMessage: "Past 30 days"
                        });
                    case "older":
                        return (0, r.jsx)(s(109939).sA, {
                            id: "search.recentPagesTimeBuckets.older.text",
                            defaultMessage: "Older"
                        })
                }(0, s(722371).HB)(e)
            }
            let p = function(e) {
                var t;
                let {
                    onSelect: n,
                    spaceStore: p,
                    comboboxProps: m
                } = e, [g, h] = a.useState(!1), [f, y] = a.useState(!1), v = (0, s(682985).K8)(() => (0, s(601860).Dd)() ? 30 : -1, []), [x, b] = a.useState(v), S = (0, s(682985).uB)(void 0, s(419110).$), {
                    section: w,
                    indexLocal: M,
                    indexGlobal: j
                } = (0, s(682985).K8)(() => S.state.focus, [S]), k = (0, s(533992).v3)(), C = (0, s(109939).tz)(), T = (0, s(533992).Y0)(), I = (0, s(853284).U)(), {
                    setDefaultBodyFocusedResult: A
                } = (0, a.useContext)(s(250227).SearchStaticContext), B = (0, s(682985).K8)(() => {
                    let e = s(475097).default.state,
                        t = (0, s(447036).Gb)();
                    return e.open && (t || e.isOpening) ? e.targetStore : s(728372).AppStoreMainEditorCurrentBlockStore.state
                }, []), R = (0, s(682985).K8)(() => (0, s(494144).o)(s(728372).AppStoreSidebarSpaceViewStore.state), []), P = (0, s(682985).K8)(() => {
                    let e = s(728372).AppStoreCurrentUserRootStore.state;
                    if (R && e) return function(e) {
                        let {
                            currentUserRootStore: t,
                            currentPageStore: a,
                            numRecents: i
                        } = e;
                        if (!t) return [];
                        let r = (0, s(44389).f)({
                                currentUserRootStore: t
                            }),
                            n = [];
                        r.forEach(e => {
                            let t = e.getSpaceId(),
                                a = e.getSpaceStore();
                            if (!a) return;
                            let i = s(420156).A.get(t);
                            if (i) {
                                let e = i.map(e => ({ ...e,
                                    store: s(970831).B.createChildStore(a.getPagesStore(), {
                                        table: s(832375).evP,
                                        id: e.pageId,
                                        spaceId: t
                                    })
                                }));
                                n.push(...e)
                            }
                        });
                        let l = n.sort((e, t) => t.visitedAt - e.visitedAt),
                            o = (0, s(381453).hS)(l, e => e.pageId).filter(e => e.pageId !== (null == a ? void 0 : a.id));
                        return i > 0 ? o.slice(0, i) : o
                    }({
                        currentUserRootStore: e,
                        currentPageStore: B,
                        numRecents: x
                    });
                    let t = s(601860).NK.state.filter(e => e.pageId !== (null == B ? void 0 : B.id));
                    return x > 0 ? t.slice(0, x) : t
                }, [x, R, B]);
                (0, a.useEffect)(() => () => {
                    A(void 0)
                }, [A]);
                let H = (0, s(682985).K8)(() => !!s(930179).default.state.isNewElectronTab, []),
                    _ = (0, s(851468).o)(),
                    E = (0, s(682985).K8)(() => s(886556).z.isDeepFindEnabled(), []),
                    D = (0, s(682985).K8)(() => {
                        var e;
                        let t = [],
                            a = null == (e = s(584257).A.state.preferences) ? void 0 : e.isNewTabSearchEnabled;
                        if (H && a) {
                            if (I) {
                                let e = (0, s(122390).B)({
                                    environment: k,
                                    intl: C
                                });
                                t.push(e)
                            }
                            let e = d({
                                environment: k,
                                isNewElectronTab: H,
                                electronTabs: _,
                                intl: C,
                                isSlipperySlopeEnabled: I
                            });
                            t.push(e)
                        }
                        return t
                    }, [H, k, C, _, I]),
                    F = (0, s(682985).K8)(() => {
                        var e;
                        let t = T.isElectron && (null == (e = s(584257).A.state.preferences) ? void 0 : e.isNewTabSearchEnabled) && _,
                            a = s(930179).default.state.isNewElectronTab;
                        return p && t && a ? t.slice(0, 4).map((e, t) => {
                            let a;
                            if (e.pageId) {
                                var i;
                                let o = (null == (i = P.find(({
                                        pageId: t
                                    }) => e.pageId === t)) ? void 0 : i.store) ? ? s(970831).B.createChildStore(p, {
                                        table: s(832375).evP,
                                        id: e.pageId
                                    }),
                                    d = c(o, t);
                                a = {
                                    key: `${o.id}:${e.id}`,
                                    action: e => n({
                                        index: {
                                            local: e.indexLocal,
                                            global: e.index
                                        },
                                        event: e.event,
                                        selectedResult: d,
                                        fromSidePeekPanel: !1,
                                        additionalResultsCount: D.length,
                                        context: "tabs"
                                    }),
                                    render: e => (0, r.jsx)(s(465708).GC, { ...e,
                                        inline: !0,
                                        store: o,
                                        result: d,
                                        hidePath: !1,
                                        buttonStyle: l.style0,
                                        type: "tabs"
                                    })
                                }
                            } else if ("chat" === e.type) {
                                let t = (0, r.jsx)("div", {
                                    style: { ...l.menuItemLabel,
                                        ...l.style1
                                    },
                                    children: (0, r.jsx)(s(109939).sA, {
                                        id: "searchDefaultBody.searchTabMenuItem.notionAI",
                                        defaultMessage: "Notion AI"
                                    })
                                });
                                a = {
                                    key: e.id,
                                    action: t => (function({
                                        environment: e,
                                        event: t,
                                        tabId: a,
                                        tabSectionId: i,
                                        url: r
                                    }) {
                                        (0, s(635257).st)({
                                            reset: !1
                                        });
                                        let n = (0, s(7029).V)(t);
                                        n ? (0, s(96351).B)({
                                            makeTabActive: !1,
                                            url: r,
                                            position: "end",
                                            openInNew: n ? ? "tab",
                                            environment: e
                                        }) : (0, s(734995).T)(a, i)
                                    })({
                                        tabId: e.id,
                                        tabSectionId: e.tabSectionId,
                                        url: s(168962).JZ.chat,
                                        event: t.event,
                                        environment: k
                                    }),
                                    render: e => (0, r.jsx)(s(488229).A, {
                                        type: "assistant",
                                        ...e,
                                        title: t
                                    })
                                }
                            }
                            return a
                        }).filter(s(722371).O9) : []
                    }, [T.isElectron, _, n, p, D.length, P, k]),
                    N = (0, a.useMemo)(() => {
                        let e = {};
                        return P.forEach(({
                            pageId: t,
                            visitedAt: s
                        }) => e[t] = s), e
                    }, [P]),
                    L = (0, s(682985).K8)(() => {
                        let e = new Map;
                        return P.map((t, a) => {
                            let i = s(601860).ht(t.visitedAt),
                                o = "today" !== i && "yesterday" !== i,
                                d = c(t.store, a),
                                u = {
                                    result: {
                                        key: `${t.store.id}:${a}`,
                                        action: e => n({
                                            index: {
                                                local: e.indexLocal,
                                                global: e.index
                                            },
                                            event: e.event,
                                            selectedResult: d,
                                            fromSidePeekPanel: !1,
                                            additionalResultsCount: D.length + F.length,
                                            context: "recent_pages"
                                        }),
                                        render: e => (0, r.jsx)(s(465708).GC, { ...e,
                                            inline: !s(986939).A.isMobile,
                                            store: t.store,
                                            result: d,
                                            hidePath: !1,
                                            lastViewed: o ? N[t.store.id] : void 0,
                                            buttonStyle: l.style0,
                                            type: "recent_pages"
                                        })
                                    },
                                    store: t.store
                                };
                            if (e.has(i)) {
                                var p;
                                null == (p = e.get(i)) || p.push(u)
                            } else e.set(i, [u])
                        }), e
                    }, [D.length, P, n, N, F.length]),
                    O = (0, s(413821).U)({
                        onClick: () => s(635257).st({
                            reset: !1
                        })
                    }),
                    z = (0, s(556583).y)(),
                    K = !(0, s(682985).O$)(s(205885).e),
                    q = z && K,
                    V = (0, s(1422).x)({
                        onSelect: n
                    }),
                    W = (0, s(682985).K8)(() => {
                        let e = [];
                        if (D.length > 0 && e.push({
                                key: "actions",
                                items: D,
                                render: e => (0, r.jsx)(i().A, {
                                    title: E ? void 0 : (0, r.jsx)(s(109939).sA, {
                                        id: "search.actions.header",
                                        defaultMessage: "Actions"
                                    }),
                                    desktopTitleStyle: l.sectionHeader,
                                    style: l.section,
                                    children: e.children
                                })
                            }), F.length > 0 && e.push({
                                key: "tabs",
                                items: F,
                                render: e => (0, r.jsx)(i().A, {
                                    title: (0, r.jsx)(s(109939).sA, {
                                        id: "search.tabs.header",
                                        defaultMessage: "Tabs"
                                    }),
                                    desktopTitleStyle: l.sectionHeader,
                                    style: l.section,
                                    children: e.children
                                })
                            }), q) e.push(...V);
                        else
                            for (let [t, s] of L.entries()) {
                                let a = {
                                    key: t,
                                    items: s.map(e => e.result),
                                    render: e => (0, r.jsx)(i().A, {
                                        title: (0, r.jsx)(u, {
                                            bucket: t
                                        }),
                                        desktopTitleStyle: l.sectionHeader,
                                        style: l.section,
                                        children: e.children
                                    })
                                };
                                e.push(a)
                            }
                        return O && e.push(O), e
                    }, [D, F, q, O, E, V, L]),
                    U = (0, a.useCallback)(e => o({
                        environment: k,
                        offsetFromBottom: e,
                        spaceStore: p,
                        setIsLoadingRecents: h,
                        setEndOfRecentsReached: y,
                        numRecents: x,
                        setNumRecents: b,
                        endOfRecentsReached: f,
                        isLoadingRecents: g,
                        isCrossWorkspace: R
                    }), [f, k, g, x, p, R]),
                    G = void 0 === w || null == (t = W[w]) ? void 0 : t.key,
                    $ = (0, a.useMemo)(() => {
                        var e;
                        if (void 0 !== M && G && (0, s(722371).Xk)(s(601860).Rj, G)) return null == (e = L.get(G)) || null == (e = e[M]) ? void 0 : e.store
                    }, [M, G, L]);
                (0, a.useEffect)(() => {
                    void 0 === w || void 0 === M || void 0 === j || "string" == typeof G && ("actions" === G ? A({
                        type: "assistant"
                    }) : (0, s(722371).Xk)(s(601860).Rj, G) && $ && A({
                        type: "page_result",
                        value: {
                            index: {
                                local: {
                                    indexLocal: M,
                                    section: w
                                },
                                global: j
                            },
                            selectedResult: c($, j - D.length)
                        }
                    }))
                }, [D.length, A, j, w, M, G, $]);
                let Q = D.length,
                    Y = !s(986939).A.isMobile && P.length > 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        style: l.wrapper,
                        children: [(0, r.jsx)(s(558045).A, {
                            store: S,
                            type: s(558045).O.Vertical,
                            initialFocus: Q,
                            disableKeyboardArrowWrap: !0,
                            sections: W,
                            unfocusOnScroll: !0,
                            comboboxProps: m
                        }), (0, r.jsx)(s(636255).A, {
                            onChange: U
                        })]
                    }), Y ? (0, r.jsx)(s(546903).A, {
                        title: (0, r.jsx)(s(702335).A, {}),
                        shouldShowReportBadSearchButton: !1
                    }) : void 0]
                })
            }
        },
        921048: (e, t, s) => {
            s.r(t), s.d(t, {
                iconDefinition: () => a,
                magnifyingGlassSmallIcon: () => i
            }), s(296540);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, s(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                i = (0, s(104509).wt)("magnifyingGlassSmall", a, "small")
        },
        927829: (e, t, s) => {
            s.d(t, {
                X: () => r
            }), s(944114), s(898992), s(672577), s(296540);
            var a = () => s(95582),
                i = s(474848);

            function r(e) {
                let {
                    sort: t,
                    onSortChange: r,
                    onMenuOpen: n,
                    onMenuDismiss: o,
                    hideIcon: d,
                    showCurrentSortValue: c,
                    variant: u = "pill"
                } = e, p = (0, s(109939).tz)();
                return (0, i.jsx)(s(656252).A, {
                    popupType: s(656252).z.Popup,
                    content: e => (function(e) {
                        let {
                            intl: t,
                            sort: r,
                            onSortChange: n
                        } = e, l = s(727395).w_.findIndex(e => s(381453).n4(e.sort, r)), o = [];
                        for (let e of s(727395).w_) o.push({
                            key: e.key,
                            render: s => (0, i.jsx)(a().A, { ...s,
                                title: t.formatMessage(e.formattedName)
                            }),
                            action: () => {
                                n(e.sort)
                            }
                        });
                        return (0, i.jsx)(s(747369).A, {
                            menuType: s(649476).gu.Popup,
                            children: (0, i.jsx)(s(558045).A, {
                                type: s(558045).O.Vertical,
                                initialFocus: l < 0 ? 0 : l,
                                sections: [{
                                    key: "sortOptions",
                                    items: o
                                }]
                            })
                        })
                    })({ ...e,
                        intl: p,
                        sort: t,
                        onSortChange: r
                    }),
                    disabled: !1,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    originGap: 4,
                    onClick: n,
                    onClose: o,
                    children: e => (function(e) {
                        let {
                            events: t,
                            intl: a,
                            currentSort: r,
                            hideIcon: n,
                            showCurrentSortValue: o,
                            variant: d
                        } = e, c = s(727395).w_.find(e => s(381453).n4(e.sort, r)) ? ? s(727395).w_[0], u = "relevance" === c.key, p = o || !u ? a.formatMessage(c.formattedName) : a.formatMessage(s(727395).Jq.sort);
                        return "text" === d ? (0, i.jsx)(l, {
                            title: p,
                            onClick: () => t.onClick()
                        }) : (0, i.jsx)(s(97726).n, {
                            disabled: !1,
                            title: p,
                            onClick: () => t.onClick(),
                            icon: n ? void 0 : (0, i.jsx)(s(16275).I, {
                                icon: s(300921).arrowUpDownIcon
                            }),
                            on: !u
                        })
                    })({
                        events: e,
                        intl: p,
                        currentSort: t,
                        hideIcon: d,
                        showCurrentSortValue: c,
                        variant: u
                    })
                })
            }
            let n = {
                button: {
                    color: s(632079).Tj.text.secondary,
                    fontSize: 12,
                    fontWeight: s(699422).Wy.medium,
                    lineHeight: "120%",
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    gap: 2
                },
                caret: {
                    fill: s(632079).Tj.icon.secondary
                }
            };

            function l(e) {
                let {
                    title: t,
                    onClick: a
                } = e;
                return (0, i.jsxs)("button", {
                    type: "button",
                    style: n.button,
                    onClick: a,
                    children: [t, (0, i.jsx)(s(16275).I, {
                        icon: s(595453).arrowChevronSingleDownSmallIcon,
                        size: "xs",
                        style: n.caret
                    })]
                })
            }
        },
        937776: (e, t, s) => {
            s.d(t, {
                B: () => r
            }), s(296540);
            var a = s(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, a.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                r = (0, s(104509).wt)("archiveBox", i, "default")
        }
    }
]);