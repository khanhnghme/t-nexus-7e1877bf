"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [53478, 82853], {
        75170: (e, t, i) => {
            i.d(t, {
                A: () => n
            });
            var s = () => i(546605);
            let r = [];
            class a extends s().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: r,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let o = new a;
            (0, i(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", o);
            let n = o
        },
        269298: (e, t, i) => {
            i.r(t), i.d(t, {
                iconDefinition: () => s,
                lockFillIcon: () => r
            }), i(296540);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.97 1.95 12.05 15.66",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M6 5.95a4 4 0 1 1 8 0v1.433a2.426 2.426 0 0 1 2.025 2.392v5.4A2.425 2.425 0 0 1 13.6 17.6H6.4a2.425 2.425 0 0 1-2.425-2.425v-5.4c0-1.203.876-2.201 2.025-2.392zm6.75 1.4v-1.4a2.75 2.75 0 1 0-5.5 0v1.4zm-2.2 5.458a1.35 1.35 0 1 0-1.1 0v1.242a.55.55 0 0 0 1.1 0z"
                    })
                },
                r = (0, i(104509).wt)("lockFill", s, "fill")
        },
        330602: (e, t, i) => {
            i.d(t, {
                A: () => s
            });
            let s = i(546605).Store.createValue(!1)
        },
        348295: (e, t, i) => {
            i.d(t, {
                $: () => s
            });
            let s = i(381453).Bj(e => new(i(345426)).ComputedStore(() => {
                let t = i(728372).AppStoreMainEditorCurrentBlockStore.state,
                    s = t && t.isCollectionView(),
                    r = (0, i(548124).getChatPanelState)(e),
                    a = (null == r ? void 0 : r.isOpen) ? ? !1;
                return i(200083).A.state.isKeyboardMode && !i(330602).A.state && !i(11446).A.isActive() && !s && !i(930179).default.state.open && !i(847591).Ay.state.open && !(0, i(659262).y)() && 0 === i(465361).A.state.banners.length && !i(585823).gZ.state && !i(75170).A.state.open && !a
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        361664: (e, t, i) => {
            i.d(t, {
                L: () => r
            });
            var s = () => i(546605);
            class r extends s().Store {
                getInitialState() {
                    return {
                        activityIds: [],
                        shouldLoadNewerActivities: !1,
                        shouldLoadOlderActivities: !0,
                        hasOlderActivities: !0,
                        filterActivityTypes: [],
                        filterDateRange: {
                            starting: void 0,
                            ending: void 0
                        }
                    }
                }
            }
        },
        389760: (e, t, i) => {
            i.d(t, {
                A: () => f
            }), i(898992), i(354520), i(581454);
            var s = i(296540),
                r = () => i(546605);
            class a extends r().Store {
                getInitialState() {
                    return {
                        selectedItems: []
                    }
                }
            }
            var o = () => i(48091);

            function n() {
                return i(986939).A.isAdminMode
            }
            let l = new(i(815048)).O2("activityUpdate", async () => await Promise.all([i.e(26997), i.e(73588), i.e(84444), i.e(34079), i.e(13319)]).then(i.bind(i, 284385)));
            (0, i(815048)._h)(l, e => e.ActivityUpdate);
            var d = i(474848);
            let c = function({
                mode: e,
                title: t,
                onChange: r,
                disabled: o,
                focused: n,
                onMenuDismiss: l,
                items: c,
                addItemLabel: S,
                tokenInputPlaceholder: g,
                resultSectionTitle: m,
                componentDebugName: f,
                icon: y,
                getItemLabel: b,
                options: w,
                store: A
            }) {
                let C = (0, i(682985).uB)(A, a),
                    T = (0, i(682985).O$)(C);
                return (0, s.useEffect)(() => {
                    C.setState({
                        selectedItems: c
                    })
                }, [c, C]), (0, d.jsx)(i(454860).A, {
                    mode: e,
                    hasItemsSelected: T.selectedItems.length > 0,
                    title: t,
                    icon: y,
                    items: c,
                    onChange: e => {
                        r(e)
                    },
                    disabled: o,
                    focused: n,
                    renderFilter: (e, t) => (0, d.jsx)(p, {
                        getItemLabel: b,
                        item: e,
                        args: t
                    }),
                    renderToken: e => (0, d.jsx)(h, {
                        item: e
                    }),
                    renderItemForSummary: e => (0, d.jsx)(u, {
                        item: e
                    }),
                    addItemLabel: S,
                    labelText: {
                        title: t,
                        tokenInputPlaceholder: g,
                        resultSectionTitle: m,
                        componentDebugName: f
                    },
                    performRequest: e => (function({
                        query: e
                    }, t) {
                        return Promise.resolve(t.filter(t => t.includes(e)))
                    })(e, w),
                    renderResultMenuItem: (t, i) => (0, d.jsx)(v, {
                        getItemLabel: b,
                        mode: e,
                        store: C,
                        item: t,
                        props: i
                    }),
                    onMenuDismiss: l
                })
            };

            function u({
                item: e
            }) {
                return (0, d.jsx)(d.Fragment, {
                    children: `hello${e}`
                })
            }

            function h({
                item: e
            }) {
                return (0, d.jsx)(d.Fragment, {
                    children: e
                })
            }

            function p({
                item: e,
                args: t,
                getItemLabel: s
            }) {
                let {
                    disabled: r,
                    onRemove: a,
                    onClick: o
                } = t, n = {
                    menuItem: {
                        minHeight: "initial",
                        paddingTop: i(986939).A.isMobile ? 12 : 4,
                        paddingBottom: i(986939).A.isMobile ? 12 : 4
                    },
                    menuItemTitle: {
                        width: "100%"
                    },
                    labeledMenuItemTitle: {
                        display: "inline-flex",
                        alignItems: "center"
                    },
                    menuItemLabel: {
                        marginInlineEnd: 12
                    },
                    recordIcon: {
                        marginInlineEnd: 4
                    }
                }, l = (0, d.jsx)(i(706893).A, {
                    disabled: r,
                    onClick: a
                });
                return (0, d.jsx)(i(95582).A, {
                    title: (null == s ? void 0 : s(e)) || e,
                    disabled: r,
                    focused: !1,
                    right: l,
                    style: n.menuItem,
                    desktopTitleStyle: n.menuItemTitle,
                    onClick: o
                })
            }

            function v({
                item: e,
                props: t,
                getItemLabel: r,
                mode: o,
                store: n
            }) {
                let l = (0, i(682985).uB)(n, a),
                    d = (0, i(682985).K8)(() => l.state.selectedItems, [l]);
                return (0, s.createElement)(i(95582).A, { ...t,
                    key: e,
                    title: (null == r ? void 0 : r(e)) || e,
                    isChecked: o === i(454860).C.Pill && d.includes(e)
                })
            }

            function S() {
                return {
                    minHeight: i(986939).A.isMobile ? void 0 : "75vh"
                }
            }

            function g() {
                return { ...S(),
                    paddingTop: i(986939).A.isMobile ? 32 : void 0,
                    paddingBottom: i(986939).A.isMobile ? 32 : void 0,
                    minHeight: i(986939).A.isMobile ? void 0 : 220,
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    color: i(632079).Tj.text.secondary,
                    flexDirection: "column",
                    flex: "1 1 0%"
                }
            }
            let m = {
                placeholderContent: g()
            };

            function f(e) {
                var t;
                let {
                    spaceId: r,
                    navigableBlockStore: a,
                    collectionIds: c,
                    authorId: u,
                    source: h
                } = e, p = null == a ? void 0 : a.id, v = (0, i(533992).v3)(), g = (0, i(853284).U)(), f = (0, i(682985).uB)(void 0, i(361664).L), b = (0, i(682985).uB)(void 0, i(510969).A), w = (0, s.useMemo)(() => i(381453).nF(e => {
                    f.update(e => ({ ...e,
                        shouldLoadNewerActivities: !0
                    }))
                }, 1e3), [f]), T = (0, s.useMemo)(() => i(627179).Hg(w), [w]);
                (0, s.useEffect)(() => {
                    let e, t, s;
                    if (p) {
                        let t = (0, i(568479).O$)(p);
                        e = o().Ay.addListener({
                            key: t,
                            authorizationToken: void 0,
                            listener: T,
                            subscriptionId: void 0
                        })
                    }
                    if (c && (t = c.map(e => {
                            let t = (0, i(568479).zB)(e);
                            return o().Ay.addListener({
                                key: t,
                                authorizationToken: void 0,
                                listener: T,
                                subscriptionId: void 0
                            })
                        }).filter(i(722371).O9)), u) {
                        let e = (0, i(568479).Ii)(u);
                        s = o().Ay.addListener({
                            key: e,
                            authorizationToken: void 0,
                            listener: T,
                            subscriptionId: void 0
                        })
                    }
                    return () => {
                        if (e && o().Ay.removeListener(e), t)
                            for (let e of t) o().Ay.removeListener(e);
                        s && o().Ay.removeListener(s)
                    }
                }, [c, v, T, p, u]);
                let P = (0, i(682985).O$)(i(205885).e),
                    x = (0, i(682985).K8)(() => {
                        let e = f.state;
                        return 0 === e.filterActivityTypes.length && void 0 === e.filterDateRange.ending && void 0 === e.filterDateRange.starting
                    }, [f]),
                    I = (0, i(682985).K8)(n, []),
                    {
                        currentUserStore: k,
                        currentSpaceStore: M
                    } = (0, i(682985).K8)(() => ({
                        currentUserStore: i(728372).AppStoreCurrentUserStore.state,
                        currentSpaceStore: i(728372).AppStoreSidebarSpaceStore.state
                    }), []),
                    {
                        shouldLoadOlderActivities: j,
                        shouldLoadNewerActivities: R,
                        filterActivityTypes: B,
                        filterDateRange: O,
                        activityIds: K,
                        hasOlderActivities: N
                    } = (0, i(682985).O$)(f),
                    U = (0, i(815048).fJ)(l),
                    [L] = (0, i(97668).Yb)(async () => {
                        if (!P || !k || !M) return;
                        let e = i(825109).Ay.startLoading();
                        R ? await i(718204).X(v, {
                            store: f,
                            activityIds: K,
                            spaceId: r,
                            filterActivityTypes: B,
                            filterDateRange: O,
                            navigableBlockId: p,
                            collectionIds: c,
                            authorId: u
                        }) : j && N && await i(718204).r(v, {
                            store: f,
                            activityIds: K,
                            spaceId: r,
                            filterActivityTypes: B,
                            filterDateRange: O,
                            navigableBlockId: p,
                            collectionIds: c,
                            authorId: u
                        }), i(825109).Ay.endLoading(e)
                    }, [K, f, c, M, k, v, B, O, N, P, p, R, j, r, u]),
                    _ = L.error,
                    D = "resolved" === L.status,
                    E = (0, i(682985).K8)(() => {
                        var e;
                        if (!k) return [];
                        let t = k.id,
                            s = (0, i(907620).T)("supportsNativeHome"),
                            a = {
                                spaceId: r,
                                userId: t,
                                navigableBlockId: p,
                                collectionIds: c,
                                filterDateRange: O,
                                filterActivityTypes: B,
                                authorId: u
                            },
                            o = s && 0 === K.length && !D ? i(430323).oV(a) : K;
                        return s && D && i(430323).tK(a, K), e = o, i(381453).oE(e.map(e => (function(e) {
                            let t = i(728372).AppStoreCurrentUserStore.state,
                                s = i(728372).AppStoreSidebarSpaceStore.state;
                            if (!t || !s) return;
                            let r = (0, i(966980).jA)(s, e, s.id).getModel();
                            return r && !r.invalid ? r : null
                        })(e)))
                    }, [K, c, k, B, O, u, p, D, r]);
                if (!P) return (0, d.jsx)(A, {});
                if (!k || !M) return null;
                let F = 0 === E.length && !N && D;
                if (_ || "rejected" === U.status) return (0, d.jsx)("div", {
                    style: m.placeholderContent,
                    children: (0, d.jsx)(i(109939).sA, {
                        defaultMessage: "Something went wrong.",
                        id: "activityUpdate.unknownErrorLoadingActivities.message"
                    })
                });
                let $ = !!(c && c.length > 0);
                if ("resolved" !== U.status || 0 === E.length && !D) return (0, d.jsxs)("div", {
                    children: [I ? (0, d.jsx)(y, {
                        hasCollection: $,
                        source: h,
                        activityUpdatesStore: f,
                        filterPopupStore: b
                    }) : void 0, (0, d.jsx)(i(403).J, {
                        areaHeight: window.innerHeight,
                        isSlipperySlope: g
                    })]
                });
                let {
                    ActivityUpdate: W
                } = U.value;
                return (0, d.jsxs)("div", {
                    children: [I ? (0, d.jsx)(y, {
                        hasCollection: $,
                        source: h,
                        activityUpdatesStore: f,
                        filterPopupStore: b
                    }) : void 0, (0, d.jsxs)("div", {
                        style: F ? m.placeholderContent : S(),
                        className: F ? "" : "notranslate",
                        children: [F ? null == (t = e.empty) ? void 0 : t.call(e, {
                            hasFiltersOn: !x
                        }) : null, (0, d.jsx)(i(931663).X, {
                            children: (0, d.jsx)("section", {
                                role: "feed",
                                children: E.map((e, t, s) => {
                                    let r = s.length - 1 === t,
                                        a = "notifications_tab" === h ? {
                                            tab: "all",
                                            source: h
                                        } : "updates_sidebar" === h ? {
                                            tab: "pageUpdatesSidebar",
                                            source: h
                                        } : "person_profile" === h ? {
                                            tab: "personProfile",
                                            source: h
                                        } : {
                                            tab: "homeTile",
                                            source: h
                                        };
                                    return (0, d.jsx)(i(564657).Z, {
                                        index: t,
                                        children: (0, d.jsx)(W, {
                                            activity: e,
                                            rootStore: M,
                                            isLast: r,
                                            tabArgs: a
                                        })
                                    }, e.id)
                                })
                            })
                        }), (0, d.jsx)(i(636255).A, {
                            onChange: e => {
                                e < 200 && D && !j && N && (x || E.length > 0) && f.update(e => ({ ...e,
                                    shouldLoadOlderActivities: !0
                                }))
                            },
                            children: !D && N ? (0, d.jsx)(C, {
                                isPaginated: !0
                            }) : null
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    hasCollection: t,
                    source: s,
                    activityUpdatesStore: r,
                    filterPopupStore: a
                } = e, {
                    currentUserStore: o,
                    currentSpaceStore: n
                } = (0, i(682985).K8)(() => ({
                    currentUserStore: i(728372).AppStoreCurrentUserStore.state,
                    currentSpaceStore: i(728372).AppStoreSidebarSpaceStore.state
                }), []), l = (0, i(682985).K8)(() => r.state.filterActivityTypes.length > 0 || r.state.filterDateRange.ending || r.state.filterDateRange.starting, [r]);
                return o && n ? (0, d.jsxs)(i(4458).fI, {
                    paddingBlock: 12,
                    paddingInline: 10,
                    width: "100%",
                    gap: 6,
                    children: [(0, d.jsx)(b, {
                        hasCollection: t,
                        source: s,
                        filterPopupStore: a,
                        activityUpdatesStore: r
                    }), (0, d.jsx)(M, {
                        source: e.source,
                        activityUpdatesStore: r,
                        filterPopupStore: a
                    }), l ? (0, d.jsx)(k, {
                        source: e.source,
                        activityUpdatesStore: r
                    }) : void 0]
                }) : null
            }

            function b(e) {
                let {
                    hasCollection: t,
                    source: r,
                    activityUpdatesStore: o,
                    filterPopupStore: n
                } = e, l = (0, i(109939).tz)(), u = (0, i(533992).v3)(), h = t ? i(98120).Fv : i(98120).IP, p = (0, i(682985).uB)(void 0, a), v = (0, i(682985).K8)(() => o.state.filterActivityTypes, [o]), S = (0, s.useCallback)(() => {
                    P(n)
                }, [n]);
                return (0, d.jsx)(c, {
                    store: p,
                    focused: !1,
                    icon: i(774458).n,
                    options: [...h].sort(),
                    items: v,
                    mode: i(454860).C.Pill,
                    title: (0, d.jsx)(i(109939).sA, {
                        id: "activityUpdates.filterMenu.byType.title",
                        defaultMessage: "Activity type"
                    }),
                    tokenInputPlaceholder: l.formatMessage({
                        id: "activityUpdates.filterMenu.byType.search",
                        defaultMessage: "Search for a type"
                    }),
                    resultSectionTitle: l.formatMessage({
                        id: "activityUpdates.filterMenu.byType.resultSectionTitle",
                        defaultMessage: "Activity Types"
                    }),
                    addItemLabel: l.formatMessage({
                        id: "activityUpdates.filterMenu.byType.addItemLabel",
                        defaultMessage: "Add an activity type"
                    }),
                    componentDebugName: "ActivityUpdatesSearchEditTypesFilter",
                    onChange: e => x({
                        updateFn: () => o.update(t => ({ ...t,
                            filterActivityTypes: e,
                            activityIds: [],
                            hasOlderActivities: !0,
                            shouldLoadOlderActivities: !0,
                            shouldLoadNewerActivities: !1
                        })),
                        environment: u,
                        source: r,
                        activityUpdatesStore: o
                    }),
                    onMenuDismiss: S,
                    getItemLabel: e => e.split("-").map(e => e.replace(/(^.)/, e => e.toUpperCase())).join(" ")
                })
            }
            let w = {
                offlineMessage: g()
            };

            function A() {
                return (0, d.jsx)("div", {
                    style: w.offlineMessage,
                    children: (0, d.jsx)(i(109939).sA, {
                        defaultMessage: "Please go online to view updates.",
                        id: "activityUpdates.offlineMessage"
                    })
                })
            }

            function C({
                isPaginated: e
            }) {
                let t = (0, i(960253).I)(() => ({
                    spinner: { ...g(),
                        minHeight: e ? 64 : 220
                    }
                }), [e]);
                return (0, d.jsx)("div", {
                    style: t.spinner,
                    children: (0, d.jsx)(i(517334).k, {})
                })
            }

            function T(e) {
                var t, i;
                let {
                    filterActivityTypes: s,
                    filterDateRange: r
                } = e.state;
                return {
                    activityTypes: s,
                    dateRange: {
                        start: null == (t = r.starting) ? void 0 : t.start_date,
                        end: null == (i = r.ending) ? void 0 : i.start_date
                    }
                }
            }

            function P(e) {
                e.setState({ ...e.state,
                    open: !1
                })
            }

            function x({
                updateFn: e,
                environment: t,
                source: s,
                activityUpdatesStore: r
            }) {
                let a = T(r);
                e();
                let o = T(r);
                i(142215).Xl({
                    environment: t,
                    activityUpdatesSource: s,
                    filters: o,
                    prevFilters: a
                })
            }
            let I = {
                clearButton: {
                    flexGrow: 1,
                    textAlign: "end",
                    cursor: "pointer",
                    fontSize: 14,
                    color: i(632079).Tj.text.secondary,
                    marginInlineEnd: 8
                }
            };

            function k({
                source: e,
                activityUpdatesStore: t
            }) {
                let s = (0, i(533992).v3)();
                return (0, d.jsx)("div", {
                    style: I.clearButton,
                    onClick: () => x({
                        updateFn: () => t.reset(),
                        environment: s,
                        source: e,
                        activityUpdatesStore: t
                    }),
                    children: (0, d.jsx)(i(109939).sA, {
                        defaultMessage: "Clear",
                        id: "activityUpdates.clearFilters"
                    })
                })
            }

            function M({
                source: e,
                activityUpdatesStore: t,
                filterPopupStore: r
            }) {
                let a = (0, i(533992).v3)(),
                    o = (0, s.useCallback)(() => P(r), [r]),
                    n = (0, i(682985).K8)(() => t.state.filterDateRange, [t]);
                return (0, d.jsx)(i(549253).A, {
                    mode: i(454860).C.Pill,
                    focused: !1,
                    showButtons: !0,
                    title: (0, d.jsx)(i(109939).sA, {
                        id: "activityUpdates.filterMenu.byDate",
                        defaultMessage: "Date Range"
                    }),
                    icon: i(998172).D,
                    value: n,
                    onMenuDismiss: o,
                    onChange: i => x({
                        updateFn: () => t.update(e => ({ ...e,
                            filterDateRange: i,
                            activityIds: [],
                            hasOlderActivities: !0,
                            shouldLoadOlderActivities: !0
                        })),
                        environment: a,
                        source: e,
                        activityUpdatesStore: t
                    })
                })
            }
        },
        430323: (e, t, i) => {
            var s;
            i.d(t, {
                Cn: () => r,
                oV: () => n,
                tK: () => o
            }), i(581454);
            let r = ((s = {})[s.Sidebar = 0] = "Sidebar", s[s.SidebarMobile = 1] = "SidebarMobile", s[s.TopbarMobile = 2] = "TopbarMobile", s[s.RenderAsPage = 3] = "RenderAsPage", s),
                a = new Map;

            function o(e, t) {
                a.set(l(e), t)
            }

            function n(e) {
                return a.get(l(e)) ? ? []
            }

            function l(e) {
                return (0, i(722371).objectKeys)(e).sort().map(t => JSON.stringify(e[t])).join("-")
            }
        },
        564657: (e, t, i) => {
            i.d(t, {
                Z: () => n,
                v: () => o
            });
            var s = i(296540),
                r = i(474848);
            let a = (0, s.createContext)(void 0);

            function o() {
                return (0, s.useContext)(a)
            }

            function n(e) {
                let {
                    index: t,
                    children: i
                } = e;
                return (0, r.jsx)(a.Provider, {
                    value: t,
                    children: i
                })
            }
            a.displayName = "NotificationIndexContext"
        },
        659262: (e, t, i) => {
            i.d(t, {
                L: () => r,
                y: () => a
            });
            let s = Number(i(627179).Xb);

            function r() {
                var e, t;
                if (i(205885).A.state.online) {
                    if (null != (e = i(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = i(420153).A.state.connectionError) ? void 0 : t.startTime) < s) return;
                    return i(420153).A.state.connectionError
                }
            }

            function a() {
                return !!r()
            }
        },
        664600: (e, t, i) => {
            i.d(t, {
                Y: () => s
            });

            function s(e) {
                let {
                    pointer: t,
                    userId: s
                } = e, r = {
                    pointer: t,
                    userId: s
                };
                (0, i(660810).y)(t) || (i(923673).A.removeFromPendingUnsubscribeRecords(r), i(885619).A.removeFromPendingEvictions(r))
            }
        },
        718204: (e, t, i) => {
            async function s(e, t) {
                let {
                    store: s,
                    activityIds: r,
                    spaceId: o,
                    filterActivityTypes: n,
                    filterDateRange: l,
                    navigableBlockId: d,
                    collectionIds: c,
                    authorId: u
                } = t, h = r[0], p = await e.api.callApi({
                    eventName: "getActivityLog",
                    environment: e,
                    data: {
                        spaceId: o,
                        navigableBlock: d ? {
                            id: d,
                            spaceId: (0, i(226221).e)(void 0)
                        } : void 0,
                        collections: c ? c.map(e => ({
                            id: e,
                            spaceId: (0, i(226221).e)(void 0)
                        })) : void 0,
                        endingBeforeId: h,
                        limit: 20,
                        activityTypes: n,
                        ...a(l),
                        authorId: u
                    }
                });
                if ("failed" === p.type) throw p.error;
                let v = p.data.activityIds;
                s.update(e => ({ ...e,
                    shouldLoadNewerActivities: !1,
                    activityIds: v.concat(r)
                }))
            }
            async function r(e, t) {
                let {
                    store: s,
                    activityIds: r,
                    spaceId: o,
                    filterActivityTypes: n,
                    filterDateRange: l,
                    navigableBlockId: d,
                    collectionIds: c,
                    authorId: u
                } = t, h = r.at(-1), p = await e.api.callApi({
                    eventName: "getActivityLog",
                    environment: e,
                    data: {
                        spaceId: o,
                        navigableBlock: d ? {
                            id: d,
                            spaceId: (0, i(226221).e)(void 0)
                        } : void 0,
                        collections: c ? c.map(e => ({
                            id: e,
                            spaceId: (0, i(226221).e)(void 0)
                        })) : void 0,
                        startingAfterId: h,
                        limit: 20,
                        activityTypes: n,
                        ...a(l),
                        authorId: u
                    }
                });
                if ("failed" === p.type) throw p.error;
                let v = p.data.activityIds;
                s.update(e => ({ ...e,
                    shouldLoadOlderActivities: !1,
                    activityIds: r.concat(v),
                    hasOlderActivities: v.length > 0
                }))
            }

            function a(e) {
                var t, s;
                let r = null != (t = e.ending) && t.start_date ? i(25825).C6.isoToUnixMs(e.ending.start_date) : void 0;
                return {
                    startingAfterTimeMs: null != (s = e.starting) && s.start_date ? i(25825).C6.isoToUnixMs(e.starting.start_date) : void 0,
                    endingBeforeTimeMs: r ? i(25825).K1({
                        date: r,
                        daysToAdd: 1
                    }) : void 0
                }
            }
            i.d(t, {
                X: () => s,
                r: () => r
            }), i(18107), i(967357), i(581454)
        },
        903443: (e, t, i) => {
            i.d(t, {
                Yk: () => l,
                Qj: () => d,
                Ct: () => h
            }), i(517642), i(658004), i(733853), i(845876), i(432475), i(515024), i(731698), i(581454);
            let s = "1.4.0";
            class r {
                storageKeyPrefix = "notion-sidebar-";
                store = new(i(274919)).Ay({
                    namespace: i(274919).Bq,
                    important: !1,
                    trackingType: "performance"
                });
                loggingEnabled = Math.random() < i(218744).default.getConfigKey("sidebar_cache_logging_config", "sample_rate");
                constructor(e) {
                    this.environment = e
                }
                async get(e) {
                    try {
                        await this.store.waitUntilReady();
                        let t = this.storageKeyPrefix + e,
                            {
                                duration: i,
                                result: r
                            } = a(() => this.store.get(t));
                        if (!r) return void this.logRead({
                            duration: i,
                            status: "missing"
                        });
                        if (r.version === s) return this.logRead({
                            duration: i,
                            status: "success",
                            result: r
                        }), r;
                        this.logRead({
                            duration: i,
                            status: "stale",
                            result: r
                        }), this.clear(e);
                        return
                    } catch (e) {
                        this.logRead({
                            status: "failure"
                        });
                        return
                    }
                }
                set(e, t) {
                    try {
                        let i = this.storageKeyPrefix + e,
                            {
                                duration: s
                            } = a(() => this.store.set(i, t));
                        this.logWrite({
                            duration: s,
                            status: "success",
                            result: t
                        })
                    } catch (e) {
                        this.logWrite({
                            status: "failure",
                            result: t
                        })
                    }
                }
                clear(e) {
                    try {
                        let t = this.storageKeyPrefix + e;
                        this.store.remove(t)
                    } catch (e) {}
                }
                logRead({
                    duration: e,
                    status: t,
                    result: s
                }) {
                    this.loggingEnabled && (0, i(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "read",
                                status: t,
                                size_kb: s && "object" == typeof s ? this.calculateSizeKb(s) : 0,
                                source: "local_storage"
                            }
                        }
                    })
                }
                logWrite({
                    duration: e,
                    status: t,
                    result: s
                }) {
                    this.loggingEnabled && (0, i(104310).u)({
                        event: {
                            eventName: "sidebar.cache_access_attempt",
                            eventProperties: {
                                time: e,
                                type: "write",
                                status: t,
                                size_kb: this.calculateSizeKb(s),
                                source: "local_storage"
                            }
                        }
                    })
                }
                calculateSizeKb(e) {
                    try {
                        let t = JSON.stringify(e),
                            i = new Blob([t]).size;
                        return Math.round(i / 1024)
                    } catch {
                        return 0
                    }
                }
            }

            function a(e) {
                let t = performance.now(),
                    i = e();
                return {
                    duration: Math.round(performance.now() - t),
                    result: i
                }
            }
            class o {
                cache;
                pendingResults = new Map;
                results = new Map;
                cachedThisSession = new Set;
                disabledCacheKeys = new Set;
                getCache(e) {
                    return this.cache || (this.cache = new r(e)), this.cache
                }
                getCachedSidebarStateResult(e, t) {
                    let i = `${e}:${t}`;
                    if (!this.disabledCacheKeys.has(i)) return this.results.get(i)
                }
                async getCachedSidebarState(e, t, i) {
                    let s = `${e}:${t}`;
                    if (this.disabledCacheKeys.has(s)) return;
                    if (this.results.has(s)) return this.results.get(s);
                    if (this.pendingResults.has(s)) return this.pendingResults.get(s);
                    let r = this.readFromStorage(e, t, i).then(e => {
                        if (!this.disabledCacheKeys.has(s)) return this.results.set(s, e), e
                    }).catch(() => {});
                    return this.pendingResults.set(s, r), r
                }
                async readFromStorage(e, t, s) {
                    let r = n(e, t),
                        a = await this.getCache(s).get(r);
                    if (a) try {
                        var o, d;
                        return o = a, d = s, {
                            isCached: !0,
                            spaceViewId: o.spaceViewId,
                            spaceId: o.spaceId,
                            spaceName: o.spaceName,
                            userId: o.userId,
                            isMember: o.isMember,
                            isPersonalSpace: o.isPersonalSpace,
                            showBookmarksSection: o.showBookmarksSection,
                            showWorkspaceSection: o.showWorkspaceSection,
                            showSharedSection: o.showSharedSection,
                            showPrivateSection: o.showPrivateSection,
                            showChatsSection: o.showChatsSection,
                            showSharedOverflowButton: o.showSharedOverflowButton,
                            showPrivateOverflowButton: o.showPrivateOverflowButton,
                            showOnlyPrivateSection: o.showOnlyPrivateSection,
                            shownSidebarSectionCount: o.shownSidebarSectionCount,
                            showTeamsOverflowButton: o.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: o.stickTemplateItemsToBottom,
                            showTeamSection: o.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: o.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: o.showEmptySharedSection,
                            showNotionAppsSection: o.showNotionAppsSection,
                            showMeetingsTodaySection: o.showMeetingsTodaySection,
                            showMeetingsSection: o.showMeetingsSection,
                            showRecentsSection: o.showRecentsSection,
                            allSharedPagesStores: [],
                            allPrivatePagesStores: [],
                            userJoinedTeamsStores: [],
                            visibleNotionApps: o.visibleNotionApps,
                            visibleSharedPagesStores: o.visibleSharedPagesStores.map(e => l(e, d)),
                            visiblePrivatePagesStores: o.visiblePrivatePagesStores.map(e => l(e, d)),
                            bookmarkedPagesStores: o.bookmarkedPagesStores.map(e => l(e, d)),
                            workspacePagesStores: o.workspacePagesStores.map(e => l(e, d)),
                            visibleTeamsStores: o.visibleTeamsStores.map(e => {
                                var t, s;
                                let r;
                                return t = e, s = d, r = new(i(681735)).h(s, t.pointer), void 0 !== t.name || void 0 !== t.icon || t.pages.length > 0 ? (0, i(9722).x)({
                                    store: r,
                                    environment: s,
                                    name: t.name ? ? "",
                                    icon: t.icon,
                                    cachedTeamPagesStores: t.pages.map(e => l(e, s))
                                }) : r
                            }),
                            visibleWorkflowStores: o.visibleWorkflowStores.map(e => {
                                var t, s;
                                let r;
                                return t = e, s = d, r = new(i(360851)).N(s, t.pointer), void 0 !== t.title || void 0 !== t.icon ? (0, i(595850).J)({
                                    store: r,
                                    environment: s,
                                    name: t.title ? ? "",
                                    icon: t.icon
                                }) : r
                            }),
                            allSidebarWorkflowStores: [],
                            isTeamContentReady: !0,
                            userSharedPagesForSpaceHasLoaded: !0,
                            sidebarOrder: o.sidebarOrder
                        }
                    } catch (e) {
                        this.getCache(s).clear(r);
                        return
                    }
                }
                cacheSidebarState({
                    spaceId: e,
                    userId: t,
                    sidebarState: i,
                    environment: r
                }) {
                    let a = n(e, t),
                        o = `${e}:${t}`;
                    if (!this.cachedThisSession.has(o)) try {
                        var l;
                        let e = {
                            spaceViewId: (l = i).spaceViewId,
                            spaceId: l.spaceId,
                            spaceName: l.spaceName,
                            userId: l.userId,
                            isMember: l.isMember,
                            isPersonalSpace: l.isPersonalSpace,
                            showBookmarksSection: l.showBookmarksSection,
                            showWorkspaceSection: l.showWorkspaceSection,
                            showSharedSection: l.showSharedSection,
                            showPrivateSection: l.showPrivateSection,
                            showChatsSection: l.showChatsSection,
                            showSharedOverflowButton: l.showSharedOverflowButton,
                            showPrivateOverflowButton: l.showPrivateOverflowButton,
                            showOnlyPrivateSection: l.showOnlyPrivateSection,
                            shownSidebarSectionCount: l.shownSidebarSectionCount,
                            showTeamsOverflowButton: l.showTeamsOverflowButton,
                            stickTemplateItemsToBottom: l.stickTemplateItemsToBottom,
                            showTeamSection: l.showTeamSection,
                            showCrossWorkspaceGuestPagesPrototype: l.showCrossWorkspaceGuestPagesPrototype,
                            showEmptySharedSection: l.showEmptySharedSection,
                            showNotionAppsSection: l.showNotionAppsSection,
                            showMeetingsTodaySection: l.showMeetingsTodaySection,
                            showMeetingsSection: l.showMeetingsSection,
                            showRecentsSection: l.showRecentsSection,
                            visibleNotionApps: l.visibleNotionApps,
                            visibleSharedPagesStores: l.visibleSharedPagesStores.map(d),
                            visiblePrivatePagesStores: l.visiblePrivatePagesStores.map(d),
                            bookmarkedPagesStores: l.bookmarkedPagesStores.map(d),
                            workspacePagesStores: l.workspacePagesStores.map(d),
                            visibleTeamsStores: l.visibleTeamsStores.map(c),
                            visibleWorkflowStores: l.visibleWorkflowStores.map(u),
                            sidebarOrder: l.sidebarOrder,
                            cachedAt: Date.now(),
                            version: s
                        };
                        this.getCache(r).set(a, e), this.cachedThisSession.add(o)
                    } catch (e) {}
                }
                disableCache({
                    spaceId: e,
                    userId: t
                }) {
                    let i = `${e}:${t}`;
                    this.disabledCacheKeys.has(i) || (this.disabledCacheKeys.add(i), this.pendingResults.delete(i), this.results.delete(i))
                }
                isCacheDisabled(e, t) {
                    let i = `${e}:${t}`;
                    return this.disabledCacheKeys.has(i)
                }
                clearCachedSidebarState({
                    spaceId: e,
                    userId: t,
                    environment: i
                }) {
                    let s = n(e, t),
                        r = `${e}:${t}`;
                    this.getCache(i).clear(s), this.pendingResults.delete(r), this.results.delete(r)
                }
            }

            function n(e, t) {
                return `sidebar-state-${e}-${t}`
            }

            function l(e, t) {
                let s = new(i(970831)).B(t, e.pointer);
                return void 0 !== e.title || void 0 !== e.icon ? s.createFastRenderBlockStore(e.title ? ? [], e.icon) : s
            }

            function d(e) {
                let t = e.isDefined() ? e.getTitleValue() : [],
                    i = e.isDefined() ? e.getIcon() : void 0,
                    s = null == i ? void 0 : i.icon;
                return {
                    pointer: e.pointer,
                    title: t,
                    icon: s
                }
            }

            function c(e) {
                let t = e.isDefined() ? e.getName() : "",
                    s = e.isDefined() ? e.getRawIcon() : void 0,
                    r = e.isDefined() ? (0, i(709633).O)({
                        teamStore: e
                    }) : [];
                return {
                    pointer: e.pointer,
                    name: t,
                    icon: s,
                    pages: r.map(d)
                }
            }

            function u(e) {
                let t = e.isDefined() ? e.getData() : void 0,
                    i = null == t ? void 0 : t.name,
                    s = null == t ? void 0 : t.icon;
                return {
                    pointer: e.pointer,
                    title: i,
                    icon: s
                }
            }
            let h = new o
        },
        917441: (e, t, i) => {
            i.d(t, {
                Lp: () => o,
                Rx: () => l,
                a$: () => n
            });
            var s = i(296540),
                r = i(474848);
            let a = (0, s.createContext)(null);

            function o({
                children: e
            }) {
                let t = (0, i(533992).v3)(),
                    n = (0, i(804011).r)(t),
                    l = (0, i(119965).V)(),
                    {
                        deferSidebarLoadingWhenCollapsed: d
                    } = (0, i(42491).b8)(t.currentUser.id),
                    c = !(0, i(682985).K8)(() => (0, i(712358).K)(t), [t]) && d && l,
                    [u, h] = (0, s.useState)(!1);
                (0, s.useEffect)(() => {
                    let e = setTimeout(() => {
                        h(!0)
                    }, 2e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let {
                    currentUserId: p,
                    spaceId: v,
                    isFreshStateReady: S
                } = (0, i(682985).K8)(() => {
                    var e, t, s, r;
                    null != (e = i(728372).AppStoreCurrentUserStore.state) && e.id && null != (t = (0, i(328765).S)()) && t.id && (0, i(635339).yd)("user_and_space_stores_loaded");
                    let a = null == (s = i(728372).AppStoreCurrentUserStore.state) ? void 0 : s.id,
                        o = null == (r = (0, i(328765).S)()) ? void 0 : r.id;
                    if (c) return {
                        currentUserId: a,
                        spaceId: o,
                        isFreshStateReady: !1
                    };
                    let l = n.state,
                        d = i(329464).A.state.initialRenderCompleted;
                    return {
                        currentUserId: a,
                        spaceId: o,
                        isFreshStateReady: (0, i(982853).XA)({
                            sidebarState: l,
                            userId: a,
                            spaceId: o,
                            isInitialPageRenderCompleted: d
                        })
                    }
                }, [n, c]), g = (0, i(83208).X)("enable_greedy_sidebar_initial_render"), m = (0, i(168814).X)(), f = (0, i(982853).cT)({
                    isFreshStateReady: S,
                    userId: p,
                    spaceId: v
                }), y = !!((0, i(682985).K8)(() => {
                    let e = null == f ? void 0 : f.state;
                    return p === (null == e ? void 0 : e.userId) && v === (null == e ? void 0 : e.spaceId)
                }, [f, p, v]) && (m || g) && !S && !u);
                return (0, r.jsx)(a.Provider, {
                    value: y ? f : n,
                    children: e
                })
            }

            function n() {
                let e = (0, s.useContext)(a),
                    t = (0, i(533992).v3)(),
                    r = (0, i(804011).r)(t);
                return e ? ? r
            }

            function l() {
                return (0, i(682985).O$)(n())
            }
            a.displayName = "SidebarStateContext"
        },
        931663: (e, t, i) => {
            i.d(t, {
                X: () => o,
                l: () => a
            });
            var s = i(296540),
                r = i(474848);
            let a = (0, s.createContext)({
                hoveredIndex: null,
                setHoveredIndex: () => {}
            });

            function o(e) {
                let {
                    children: t
                } = e, [i, o] = (0, s.useState)(null), n = (0, s.useMemo)(() => ({
                    hoveredIndex: i,
                    setHoveredIndex: o
                }), [i]);
                return (0, r.jsx)(a.Provider, {
                    value: n,
                    children: t
                })
            }
            a.displayName = "InboxNotificationHoverContext"
        },
        982853: (e, t, i) => {
            i.d(t, {
                Jf: () => o,
                XA: () => r,
                cT: () => a
            }), i(898992), i(823215);
            var s = i(296540);

            function r({
                sidebarState: e,
                userId: t,
                spaceId: i,
                isInitialPageRenderCompleted: s
            }) {
                return !!e && !!t && !!i && !e.isCached && !!e.visiblePrivatePagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleSharedPagesStores.every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.bookmarkedPagesStores.slice(0, 10).every(e => {
                    var t;
                    return e.isReady() && ((null == (t = e.getTitleStore()) ? void 0 : t.isReady()) ? ? !0)
                }) && !!e.visibleWorkflowStores.every(e => e.isReady()) && !!e.isTeamContentReady && !!s && !0
            }

            function a({
                isFreshStateReady: e,
                userId: t,
                spaceId: r
            }) {
                let {
                    enableSidebarStateCache: o
                } = (0, i(42491).b8)(t), [n] = (0, s.useState)(() => i(546605).Store.createValue(o && t && r ? i(903443).Ct.getCachedSidebarStateResult(r, t) : void 0, {
                    name: "cachedSidebarStateStore"
                }));
                (0, s.useEffect)(() => {
                    o && e && t && r && i(903443).Ct.disableCache({
                        spaceId: r,
                        userId: t
                    })
                }, [o, e, t, r]);
                let l = (0, i(533992).v3)();
                return (0, s.useEffect)(() => {
                    o && t && r && !i(903443).Ct.isCacheDisabled(r, t) && i(903443).Ct.getCachedSidebarState(r, t, l).then(e => n.setState(e))
                }, [t, r, l, o, n]), n
            }

            function o({
                sidebarState: e
            }) {
                let t = (0, i(533992).v3)(),
                    {
                        userId: a,
                        spaceId: n,
                        isInitialPageRenderCompleted: l
                    } = (0, i(682985).K8)(() => {
                        var e, t;
                        return {
                            userId: null == (e = i(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                            spaceId: null == (t = (0, i(328765).S)()) ? void 0 : t.id,
                            isInitialPageRenderCompleted: i(329464).A.state.initialRenderCompleted
                        }
                    }, []),
                    {
                        enableSidebarStateCache: d
                    } = (0, i(42491).b8)(a);
                (0, s.useEffect)(() => {
                    !r({
                        sidebarState: e,
                        userId: a,
                        spaceId: n,
                        isInitialPageRenderCompleted: l
                    }) || a && n && e && (d ? i(903443).Ct.cacheSidebarState({
                        spaceId: n,
                        userId: a,
                        sidebarState: e,
                        environment: t
                    }) : i(903443).Ct.clearCachedSidebarState({
                        spaceId: n,
                        userId: a,
                        environment: t
                    }))
                }, [a, n, l, e, d, t])
            }
        },
        996903: (e, t, i) => {
            i.d(t, {
                i: () => s
            });

            function s(e) {
                let t = e.getSettings(),
                    s = null == t ? void 0 : t.signup_time;
                return s ? (0, i(362008).Mn)(s) : null
            }
        }
    }
]);