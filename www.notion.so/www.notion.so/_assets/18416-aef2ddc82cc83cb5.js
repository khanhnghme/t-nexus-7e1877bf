"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [18416], {
        82002: (e, t, n) => {
            n.d(t, {
                h: () => s
            });
            var i = n(296540),
                o = n(474848);
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
                l = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 5
                };

            function a(e) {
                let {
                    isLastShimmer: t,
                    variant: a
                } = e, {
                    hideBorders: s,
                    hidePathText: d,
                    size: u
                } = r[a], c = (0, i.useMemo)(() => (0, n(381453).XM)(["30%", "45%", "55%", "60%", "70%", "75%", "80%", "90%"]), []), m = (0, i.useMemo)(() => (0, n(381453).XM)(["10%", "15%", "20%", "25%", "30%", "35%", "55%", "70%"]), []), p = (0, n(960253).I)(() => {
                    let {
                        titleHeight: e,
                        pathHeight: i,
                        iconSize: o,
                        iconMarginInlineStart: r,
                        containerMarginBottom: l
                    } = "md" === u ? {
                        titleHeight: 18,
                        pathHeight: 12,
                        iconSize: n(104509).Ev.default,
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
                            boxShadow: s || t ? void 0 : `0 1px 0 ${n(632079).Tj.border.secondaryTranslucent}`,
                            marginTop: 8,
                            marginInlineEnd: 8,
                            marginBottom: l,
                            marginInlineStart: 6,
                            paddingBottom: 10 * !s
                        },
                        icon: {
                            width: o,
                            height: o,
                            borderRadius: 5,
                            marginInlineStart: r
                        },
                        title: {
                            height: e,
                            borderRadius: 5,
                            width: c
                        },
                        path: {
                            height: i,
                            borderRadius: 5,
                            width: m
                        }
                    }
                }, [s, t, c, m, u]);
                return (0, o.jsxs)("div", {
                    style: p.resultContainer,
                    children: [(0, o.jsx)(n(795830).P, {
                        style: p.icon
                    }), (0, o.jsxs)("div", {
                        style: l,
                        children: [(0, o.jsx)(n(795830).P, {
                            style: p.title
                        }), d ? void 0 : (0, o.jsx)(n(795830).P, {
                            style: p.path
                        })]
                    })]
                })
            }

            function s(e) {
                let {
                    resultsCount: t,
                    shouldShow: n,
                    variant: l
                } = e, {
                    maxNumberOfShimmers: s
                } = r[l], d = n ? Math.max(0, s - t) : 0;
                return (0, i.useMemo)(() => Array.from({
                    length: d
                }, (e, t) => ({
                    key: `shimmer-item-${t}`,
                    action: () => {},
                    render: () => (0, o.jsx)(a, {
                        isLastShimmer: t === d - 1,
                        variant: l
                    })
                })), [d, l])
            }
        },
        111950: (e, t, n) => {
            n.d(t, {
                W: () => o
            }), n(944114);
            var i = () => n(821603);

            function o(e) {
                let t, n = [],
                    o = [];
                for (let a of e) {
                    var r, l;
                    (null == (r = a.sources) ? void 0 : r.includes(i().Ni.Local)) ? n.push(a): o.push(a), !t && a.serverEventProperties && (t = null == (l = a.serverEventProperties) ? void 0 : l["server-searchExperiments"])
                }
                return {
                    localResults: n,
                    serverResults: o,
                    exposedSearchExperiments: t
                }
            }
        },
        118416: (e, t, n) => {
            n.d(t, {
                h: () => r,
                v: () => l
            }), n(898992), n(354520), n(672577), n(581454), n(737550);
            var i = n(296540),
                o = n(474848);

            function r(e, t, i) {
                let {
                    useMentionMenuStore: o,
                    open: r,
                    disabled: l = !1
                } = t ? ? {
                    useMentionMenuStore: !0
                }, a = (0, n(682985).K8)(() => !l && (o ? n(498368).Ay.state.mentionTypes.page : r), [r, o, l]), s = (0, n(682985).K8)(() => o && n(498368).Ay.state.open && n(498368).Ay.state.textStore instanceof n(970831).B ? n(498368).Ay.state.textStore : void 0, [o]), d = (0, n(699128).r)({
                    query: e,
                    disabled: !a,
                    includeDataSources: !0,
                    blockStore: s
                }), u = (0, n(699128).r)({
                    query: e,
                    disabled: !a,
                    includeDataSources: !1,
                    blockStore: s
                });
                return i.includeDataSources ? d : u
            }

            function l(e) {
                let {
                    query: t,
                    isFirstSection: l,
                    setTemporaryInputData: c,
                    formulaContextVariableResults: m,
                    disabled: p = !1,
                    shouldIncludeDataSourceMentions: g
                } = e, f = (0, n(533992).v3)(), h = (0, n(109939).tz)(), v = (0, n(682985).K8)(() => {
                    if (!n(498368).Ay.state.open) return;
                    let e = n(498368).Ay.state.textStore,
                        t = (0, n(138913).O)(e, n(496704).K);
                    if ((null == t ? void 0 : t.blockContext) === n(166654).R.WorkflowInstructionsInInlineComposer) return;
                    let i = null == t ? void 0 : t.store.getParentStore();
                    if (i instanceof n(360851).N) return i
                }, []), {
                    results: y,
                    isLoading: x,
                    reportBadSearchMetadata: S
                } = r(t, {
                    useMentionMenuStore: !0,
                    disabled: p
                }, {
                    includeDataSources: g
                }), I = (0, n(717123).DK)({
                    formulaReturnType: "block",
                    query: t,
                    formulaContextVariableResults: m,
                    setTemporaryInputData: c
                }), b = (0, i.useMemo)(() => (0, n(381453).oE)(y.map(({
                    store: e,
                    serverEventProperties: i
                }) => {
                    let r = e.table === n(832375).VlP;
                    return {
                        key: e.id,
                        render: t => (0, o.jsx)(a, { ...t,
                            store: e,
                            setTemporaryInputData: c
                        }),
                        action: l => {
                            let a = e.getSpaceId();
                            if ((0, n(377796).createAndCommit)({
                                    userAction: "MentionMenu.getPageResultsMenuSection",
                                    environment: f,
                                    cellTarget: a ? {
                                        spaceWithId: a
                                    } : void 0,
                                    canUndo: !0,
                                    perform: o => {
                                        var a;
                                        n(977712).Ju({
                                            environment: f,
                                            editorMode: "default",
                                            annotations: [r ? (0, n(247438).ETy)({
                                                collectionId: e.id,
                                                spaceId: e.getSpaceId(),
                                                parentCvbId: null == (a = e.getParentPointer()) ? void 0 : a.id
                                            }) : (0, n(247438).ld4)(e.id, e.getSpaceId())],
                                            transaction: o,
                                            menuListItemAction: l,
                                            query: t,
                                            serverEventProperties: i,
                                            mentionType: r ? "collection" : "page",
                                            resultId: e.id
                                        })
                                    }
                                }), v) {
                                let t = r ? e.getParentCollectionViewBlockStore() : e;
                                if (!t || !t.canAdmin()) return;
                                ! function(e) {
                                    var t;
                                    let {
                                        environment: i,
                                        blockStore: r,
                                        workflowStore: l
                                    } = e;
                                    if (!r.canAdmin()) return;
                                    let a = l.getDraftData() ? ? l.getData(),
                                        s = null == a || null == (t = a.modules) ? void 0 : t.find(e => "notion" === e.type);
                                    ((null == s ? void 0 : s.permissions) ? ? []).some(e => (0, n(558602).r)(e, r.id)) || !l.getSpaceId() || n(819652).HK({
                                        id: "agent_missing_page_access",
                                        presentationType: "persistent",
                                        title: (0, o.jsx)(n(109939).sA, {
                                            defaultMessage: "Grant access to {pageTitle}?",
                                            id: "agentInstructions.missingPageAccessToast.title",
                                            values: {
                                                pageTitle: (0, o.jsx)(n(899260).A, {
                                                    store: r,
                                                    useInvertedColors: !0,
                                                    shouldWrap: !0
                                                })
                                            }
                                        }),
                                        actions: {
                                            primary: {
                                                title: (0, o.jsx)(n(761163).Ay, {
                                                    type: "user_permission",
                                                    role: "none",
                                                    table: n(832375).evP,
                                                    spaceStore: (0, n(974410).f)(l),
                                                    upgradeButtonName: "user_permission_item",
                                                    availableRoleItems: n(357194).jL,
                                                    onChange: e => {
                                                        (0, n(642157).PW)(e) && (e => {
                                                            var t;
                                                            let o = n(950607).D[e];
                                                            if ("none" === o) return;
                                                            let a = l.getDraftData() ? ? l.getData(),
                                                                s = null == a || null == (t = a.modules) ? void 0 : t.find(e => "notion" === e.type);
                                                            if (!s) return;
                                                            let d = (s.permissions ? ? []).filter(e => !(0, n(558602).r)(e, r.id)),
                                                                u = {
                                                                    moduleType: "notion",
                                                                    type: "notion",
                                                                    identifier: {
                                                                        type: "pageOrCollectionViewBlock",
                                                                        blockId: r.id
                                                                    },
                                                                    actions: [o]
                                                                };
                                                            (0, n(677701).c)({
                                                                environment: i,
                                                                workflowStore: l,
                                                                module: { ...s,
                                                                    permissions: [...d, u]
                                                                }
                                                            }), setTimeout(() => {
                                                                n(819652).UW({
                                                                    id: "agent_missing_page_access"
                                                                })
                                                            }, 100)
                                                        })(e)
                                                    },
                                                    overlayContainerZIndex: 202,
                                                    buttonStyle: u.style0
                                                }),
                                                onAction: () => {}
                                            }
                                        }
                                    })
                                }({
                                    blockStore: t,
                                    workflowStore: v,
                                    environment: f
                                })
                            }
                        }
                    }
                })), [t, y, c, v, f]), M = (0, i.useMemo)(() => [...I, ...b], [I, b]), k = M.length > 0, w = (0, i.useMemo)(() => {
                    let e = k || x ? d.linkToPage : d.noPageResults;
                    return (0, o.jsxs)(o.Fragment, {
                        children: [h.formatMessage(e), (0, o.jsx)(s, {
                            show: x
                        })]
                    })
                }, [k, h, x]), A = (0, n(682985).K8)(() => n(498368).Ay.state.mentionTypes.page, []), T = (0, n(82002).h)({
                    resultsCount: M.length,
                    shouldShow: x,
                    variant: "mention-menu-page"
                });
                return {
                    pageResultsSection: (0, i.useMemo)(() => {
                        if (!p && A && (x || 0 !== M.length)) return {
                            key: x && !k ? "page-results-loading" : x || k ? "page-results" : "page-results-empty",
                            render: e => (0, o.jsx)(n(844565).A, { ...e,
                                title: w,
                                desktopTitleStyle: l ? {
                                    paddingTop: 4
                                } : void 0,
                                topBorder: !l
                            }),
                            items: [...M, ...T]
                        }
                    }, [p, A, x, M, T, k, w, l]),
                    isPageResultsLoading: x,
                    reportBadSearchMetadata: S
                }
            }
            let a = i.forwardRef(function(e, t) {
                var r;
                let {
                    store: l,
                    setTemporaryInputData: a,
                    focused: s,
                    ...d
                } = e, u = (0, n(109939).tz)(), c = (0, n(533992).v3)(), m = (0, n(533992).Y0)(), p = (0, n(960253).e)(), g = m.isSafari || m.isIOS, f = null == (r = c.currentUser) ? void 0 : r.id, h = (0, n(682985).K8)(() => l.getModel(), [l]);
                return (0, i.useEffect)(() => {
                    s && h && a({
                        title: h.getRenderTitle({
                            getRecordModel: l.getRecordModel,
                            userTimeZone: (0, n(714350).P)(),
                            intl: u
                        }) ? ? "",
                        icon: (0, o.jsx)(n(345076).UZ, {
                            store: l,
                            theme: n(632079).Tj,
                            themeMode: p,
                            isSafariOrIOS: g,
                            emojiType: (0, n(591404).FN)(c),
                            currentUserId: f
                        }),
                        allowTabCompletion: !0
                    })
                }, [s, h, l, u, a, p, g, c, f]), (0, o.jsx)(n(103558).A, { ...d,
                    ref: t,
                    focused: s,
                    store: l,
                    showVerifiedPageBadge: !0
                })
            });

            function s({
                show: e
            }) {
                let t = (0, n(934877).A)({
                    visibility: e,
                    delayShow: 500,
                    delayHold: 300
                });
                return (0, o.jsx)(n(517334).k, {
                    style: {
                        textAlign: "center",
                        visibility: t ? "visible" : "hidden",
                        display: "inline",
                        marginInlineStart: 8
                    }
                })
            }
            let d = (0, n(109939).YK)({
                    noPageResults: {
                        defaultMessage: "No page results",
                        id: "mentionMenu.noPageSearchResults.title"
                    },
                    linkToPage: {
                        defaultMessage: "Link to page",
                        id: "mentionMenu.pagesSection.title2"
                    }
                }),
                u = {
                    style0: {
                        height: 20,
                        fontSize: 12,
                        fontWeight: n(699422).Wy.medium,
                        color: (0, n(632079).O4)({
                            theme: "dark"
                        }).text.primary,
                        padding: 0
                    }
                }
        },
        138913: (e, t, n) => {
            n.d(t, {
                O: () => i
            }), n(898992), n(672577);

            function i(e, t) {
                let i = e.getRecordStoreUIParent();
                if (!(i instanceof n(970831).B)) return;
                let o = t.find(e => e.getBlockStore() === i),
                    r = null == o ? void 0 : o.getNode();
                if (r) return n(400890).A.find(e => {
                    var t;
                    let n = null == (t = e.getContentWrapEl) ? void 0 : t.call(e);
                    return (null == n ? void 0 : n.contains(r)) ? ? !1
                })
            }
        },
        345076: (e, t, n) => {
            n.d(t, {
                UZ: () => p,
                Yo: () => s,
                gf: () => l,
                sL: () => m,
                zC: () => u
            });
            var i = n(296540),
                o = n(474848);
            let r = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function l(e) {
                return "+" === e.insertionType ? (0, o.jsx)(s, {}) : (0, o.jsx)("span", {
                    style: r,
                    children: (0, o.jsx)(g, {
                        svg: n(330274).magnifyingGlassIcon.__iconDefinition.svg,
                        viewBox: n(330274).magnifyingGlassIcon.__iconDefinition.viewBox
                    })
                })
            }
            let a = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function s() {
                return (0, o.jsx)("span", {
                    style: a,
                    children: (0, o.jsx)(g, {
                        svg: n(581923).plusIcon.__iconDefinition.svg,
                        viewBox: n(581923).plusIcon.__iconDefinition.viewBox
                    })
                })
            }
            let d = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function u() {
                return (0, o.jsx)("span", {
                    style: d,
                    children: (0, o.jsx)(g, {
                        svg: n(919847).I.__iconDefinition.svg,
                        viewBox: n(919847).I.__iconDefinition.viewBox
                    })
                })
            }
            let c = {
                width: "1em",
                height: "1em",
                display: "inline-block",
                verticalAlign: "-0.15em",
                marginInlineEnd: "0.2em"
            };

            function m() {
                return (0, o.jsx)("span", {
                    style: c,
                    children: (0, o.jsx)(g, {
                        svg: n(584578).b.__iconDefinition.svg,
                        viewBox: n(584578).b.__iconDefinition.viewBox
                    })
                })
            }

            function p(e) {
                let {
                    store: t,
                    theme: i,
                    themeMode: o,
                    isSafariOrIOS: r,
                    emojiType: l,
                    currentUserId: a
                } = e;
                if (t instanceof n(970831).B) return (0, n(605351).h6)({
                    pageModel: t.getModel(),
                    pageRole: t.getRole(),
                    emojiType: l,
                    baseUrl: n(986939).A.domainBaseUrl,
                    getRecordModel: t.getRecordModel,
                    isClient: !0,
                    isSafariOrIOS: r,
                    currentUserId: a,
                    theme: i,
                    themeMode: o,
                    emojiData: n(753281).A.state
                });
                if (t instanceof n(356912).m) {
                    var s;
                    return (0, n(116825).e)({
                        collectionPointer: null == (s = t.getModel()) ? void 0 : s.pointer,
                        emojiType: l,
                        baseUrl: n(986939).A.domainBaseUrl,
                        getRecordModel: t.getRecordModel,
                        getRecordRole: t.inMemoryRecordCache.makeGetRecordRoleFn(a),
                        isSafariOrIOS: r,
                        isClient: !0,
                        currentUserId: a,
                        themeMode: o,
                        emojiData: n(753281).A.state
                    })
                }(0, n(722371).HB)(t)
            }

            function g(e) {
                let {
                    svg: t,
                    viewBox: r
                } = e, l = (0, i.useMemo)(() => {
                    let e = n(595290).A.renderToString((0, o.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: r,
                            children: t
                        })),
                        i = `data:image/svg+xml,${encodeURIComponent(e)}`;
                    return `url("${i}")`
                }, [t, r]), a = (0, n(960253).I)(() => ({
                    container: {
                        width: "100%",
                        height: "100%",
                        backgroundColor: n(632079).Tj.icon.secondary,
                        WebkitMaskImage: l,
                        maskImage: l,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat"
                    }
                }), [l]);
                return (0, o.jsx)("div", {
                    style: a.container
                })
            }
        },
        558602: (e, t, n) => {
            function i(e, t) {
                if ("*" === e) return {
                    type: "workspacePublic"
                };
                let i = (0, n(140030).Mg)(e, t);
                if ("pageOrCollectionViewBlock" === i.type) return {
                    type: "pageOrCollectionViewBlock",
                    blockId: i.id
                };
                throw Error(`Permission identifier must be a page URL or '*' for workspace-wide access. Got: ${e}`)
            }

            function o(e, t) {
                return "notion" === e.type && "pageOrCollectionViewBlock" === e.identifier.type && e.identifier.blockId === t
            }
            n.d(t, {
                U: () => i,
                r: () => o
            }), n(16280)
        },
        677701: (e, t, n) => {
            n.d(t, {
                c: () => i
            });

            function i(e) {
                let {
                    workflowStore: t,
                    module: i,
                    environment: o
                } = e;
                return (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.saveModule",
                    environment: o,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: t.pointer.spaceId
                    },
                    perform: e => {
                        (0, n(421439).y4)({
                            store: t,
                            operation: n(861988).xb({
                                pointer: t.pointer,
                                module: i
                            }),
                            transaction: e
                        })
                    }
                })
            }
        },
        699128: (e, t, n) => {
            n.d(t, {
                r: () => a
            }), n(898992), n(354520), n(581454);
            var i = n(296540);

            function o(e, t) {
                return e instanceof n(970831).B ? t ? !e.isPersonProfile() : !e.isPersonProfile() && !e.isPeopleCollectionViewPage() : e instanceof n(356912).m || void(0, n(722371).HB)(e)
            }

            function r(e) {
                return !(e instanceof n(970831).B) || !e.isTeamPage()
            }

            function l(e) {
                return e instanceof n(356912).m ? !((0, n(398346).l)(e) || (0, n(952592).z)(e)) : e instanceof n(970831).B || void(0, n(722371).HB)(e)
            }

            function a(e) {
                let {
                    query: t,
                    disabled: a,
                    includeDataSources: s,
                    blockStore: d
                } = e, u = (0, n(533992).v3)(), c = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), m = (0, n(682985).K8)(() => (0, n(505941).y)(u), [u]), {
                    overriddenPublicShareLinkSpaceStore: p,
                    furthestPublicShareAncestorId: g
                } = (0, n(981284).W)(), f = !!(n(728372).AppStoreSidebarSpaceStore || p || d), h = (0, n(682985).O$)(n(330870).S), v = null == h ? void 0 : h.id, y = (0, n(682985).K8)(() => a ? [] : n(601860).NK.state.filter(e => e.pageId !== v).slice(0, 20).map(e => e.store), [v, a]), x = "" === t, S = (0, i.useMemo)(() => (0, n(821603).N2)({
                    isDeletedOnly: !1,
                    excludeTemplates: !0,
                    includePublicPagesWithoutExplicitAccess: m,
                    navigableBlockContentOnly: !0,
                    excludeSurrogateCollections: !s
                }), [m, s]), {
                    results: I,
                    isResultsLoading: b,
                    debugInfo: M
                } = (0, n(183464).W)({ ...m ? {
                        type: n(821603).Vz.BlocksInAncestor,
                        ancestorId: g ? ? ""
                    } : {
                        type: n(821603).Vz.BlocksInSpace
                    },
                    source: "mention_menu",
                    query: t,
                    limit: 20,
                    filters: S,
                    options: {
                        disable: a || !f || x || m && !g,
                        overrideSpaceStore: m ? p : void 0
                    },
                    peopleBlocksToInclude: "collection_view_page"
                }), k = (0, n(682985).K8)(() => (0, n(924448).jj)(c), [c]), w = (0, n(682985).K8)(() => x ? y.map(e => ({
                    store: e,
                    serverEventProperties: void 0
                })).filter(({
                    store: e
                }) => o(e, k) && r(e) && l(e)) : I.map(({
                    store: e,
                    collectionId: t,
                    isSurrogateCollection: i,
                    serverEventProperties: o
                }) => ({
                    store: i && t ? n(356912).m.createChildStore(e, {
                        table: n(832375).VlP,
                        id: t
                    }) : e,
                    serverEventProperties: o
                })).filter(({
                    store: e
                }) => o(e, k) && r(e) && l(e)), [I, y, x, k]), A = (0, i.useMemo)(() => {
                    let {
                        localResults: e,
                        serverResults: i,
                        exposedSearchExperiments: o
                    } = (0, n(111950).W)(I);
                    return {
                        debugInfo: M,
                        localResults: e,
                        serverResults: i,
                        exposedSearchExperiments: o,
                        reportBadSearchInputRequest: {
                            query: {
                                text: t,
                                filters: S,
                                sort: {
                                    field: "relevance"
                                }
                            },
                            limit: 20
                        }
                    }
                }, [I, M, t, S]);
                return s ? {
                    results: w,
                    isLoading: b,
                    reportBadSearchMetadata: A
                } : {
                    results: w.filter(e => e.store.table === n(832375).evP),
                    isLoading: b,
                    reportBadSearchMetadata: A
                }
            }
        },
        717123: (e, t, n) => {
            n.d(t, {
                BT: () => r,
                DK: () => a,
                bO: () => l
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                o = n(474848);

            function r(e) {
                let {
                    mentionMenuCurrentFormulaStore: t,
                    setTemporaryInputData: r,
                    isFirstSection: l,
                    formulaContextVariableResults: a
                } = e, s = a.filter(e => e.kind === n(416901).FormulaContextValueKind.ContextValue && "block" === e.type.type), d = (0, n(682985).K8)(() => {
                    let e = s.map(e => {
                        var i, l;
                        let a = (0, n(297493).sM)(e),
                            s = (0, n(297493).E9)(e),
                            d = (0, n(297493).Ix)(e.type);
                        return {
                            action: (i = e, l = t, function() {
                                l.setState({
                                    formulaTypecheckContextValue: i
                                }), n(498368).Ay.updateOpenState({
                                    showFormulaProperty: !0
                                })
                            }),
                            key: e.id,
                            render: e => (e.focused && r({
                                title: a,
                                icon: (0, o.jsx)(n(345076).sL, {}),
                                allowTabCompletion: !1
                            }), (0, o.jsx)(n(860287).A, { ...e,
                                right: (0, o.jsx)(n(16275).I, {
                                    icon: n(588222).arrowChevronSingleRightFillSmallIcon,
                                    size: "xs"
                                }),
                                svg: d,
                                title: a,
                                tooltipText: s
                            }))
                        }
                    });
                    return (0, n(381453).oE)(e)
                }, [s, t, r]);
                return (0, i.useMemo)(() => {
                    if (0 !== d.length) return {
                        items: d,
                        key: "formula property results",
                        render: e => (0, o.jsx)(n(844565).A, { ...e,
                            title: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Property from",
                                id: "mentionMenu.formulaPropertySection.title"
                            }),
                            desktopTitleStyle: l ? {
                                paddingTop: 4
                            } : void 0,
                            topBorder: !l
                        })
                    }
                }, [d, l])
            }

            function l(e) {
                let {
                    query: t,
                    formulaContextVariableResults: r,
                    setTemporaryInputData: l,
                    isFirstSection: a
                } = e, d = (0, n(533992).v3)(), u = (0, n(682985).K8)(() => s({
                    environment: d,
                    formulaVariableFilter: e => e.kind === n(416901).FormulaContextValueKind.ContextValue && (0, n(297493).IF)(e),
                    query: t,
                    formulaContextVariableResults: r,
                    setTemporaryInputData: l
                }), [d, r, t, l]);
                return (0, i.useMemo)(() => {
                    if (0 !== u.length) return {
                        items: u,
                        key: "custom formula results",
                        render: e => (0, o.jsx)(n(844565).A, { ...e,
                            title: (0, o.jsx)(n(109939).sA, {
                                defaultMessage: "Custom",
                                id: "mentionMenu.customFormulaVariables.title"
                            }),
                            desktopTitleStyle: a ? {
                                paddingTop: 4
                            } : void 0,
                            topBorder: !a
                        })
                    }
                }, [u, a])
            }

            function a(e) {
                let {
                    formulaReturnType: t,
                    query: i,
                    formulaContextVariableResults: o,
                    setTemporaryInputData: r
                } = e;
                return s({
                    environment: (0, n(533992).v3)(),
                    formulaVariableFilter: e => e.kind === n(416901).FormulaContextValueKind.ContextValue && e.type.type === t && !(0, n(297493).IF)(e),
                    query: i,
                    formulaContextVariableResults: o,
                    setTemporaryInputData: r
                })
            }

            function s(e) {
                let {
                    environment: t,
                    formulaVariableFilter: i,
                    query: r,
                    formulaContextVariableResults: l,
                    setTemporaryInputData: a
                } = e;
                if (0 === l.length) return [];
                let s = l.filter(i);
                return 0 === s.length ? [] : s.map(e => {
                    var i, l, s;
                    let d = (0, n(297493).sM)(e),
                        u = (0, n(297493).E9)(e),
                        c = (0, n(297493).Ix)(e.type);
                    return {
                        action: (i = t, l = e, s = r, function(e) {
                            let t = n(498368).Ay.state.open ? n(498368).Ay.state.textStore.pointer.spaceId : void 0;
                            (0, n(377796).createAndCommit)({
                                userAction: "MentionMenu.formulaMenuItem",
                                environment: i,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                canUndo: !0,
                                perform: t => {
                                    let o = (0, n(247438).CA$)(l);
                                    n(977712).Ju({
                                        annotations: [o],
                                        editorMode: "default",
                                        environment: i,
                                        mentionType: "formulaContextVariable",
                                        menuListItemAction: e,
                                        query: s,
                                        transaction: t
                                    })
                                }
                            })
                        }),
                        key: e.id,
                        render: t => (t.focused && a({
                            allowTabCompletion: !0,
                            icon: (0, o.jsx)(n(345076).sL, {}),
                            title: e.name
                        }), (0, o.jsx)(n(860287).A, { ...t,
                            svg: c,
                            title: d,
                            tooltipText: u
                        }))
                    }
                })
            }
        },
        950607: (e, t, n) => {
            n.d(t, {
                D: () => i
            });
            let i = {
                editor: "editor",
                read_and_write: "read_and_write",
                content_only_editor: "read_and_write",
                comment_only: "comment_only",
                reader: "reader",
                none: "none",
                membership_admin: "read_and_write"
            }
        }
    }
]);