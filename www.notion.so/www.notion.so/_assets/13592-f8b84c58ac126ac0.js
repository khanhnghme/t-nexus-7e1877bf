"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [13592], {
        11782: (e, t, o) => {
            o.d(t, {
                A: () => l
            });
            var n = o(296540),
                r = o(474848);
            let a = {
                    medium: {
                        color: o(632079).Tj.text.secondary
                    },
                    style1: {
                        marginInlineStart: 4,
                        marginInlineEnd: 4
                    }
                },
                l = n.memo(function(e) {
                    let {
                        pageName: t,
                        targetCollectionStore: n,
                        ...l
                    } = e, i = (0, o(533992).Y0)(), s = (0, o(682985).K8)(() => n.getIcon(), [n]), u = (0, o(960253).I)(() => ({
                        title: {
                            marginInlineStart: o(6451).g1 * (i.isRetina ? .5 : 1)
                        }
                    }), [i.isRetina]), c = (0, r.jsxs)(o(4458).fI, {
                        alignItems: "center",
                        marginInlineStart: 4,
                        children: [(0, r.jsx)(o(569553).B6, {
                            disabled: !0,
                            icon: s,
                            iconRecordCategory: "collection",
                            isEmptyPage: !1,
                            size: o(986939).A.isMobile ? 24 : 20
                        }), (0, r.jsx)(o(627918).A, {
                            store: n,
                            style: u.title
                        })]
                    });
                    return (0, r.jsx)(o(95582).A, {
                        title: (0, r.jsx)(o(4458).fI, {
                            alignItems: "center",
                            children: (0, r.jsx)(o(109939).sA, {
                                id: "database.searchRelation.createNewPageFooter",
                                defaultMessage: "<medium>New</medium> {pageName} <medium> in</medium> {databaseNameWithIcon}",
                                values: {
                                    medium: e => (0, r.jsx)("span", {
                                        style: a.medium,
                                        children: e
                                    }),
                                    pageName: (0, r.jsx)("span", {
                                        style: a.style1,
                                        children: t
                                    }),
                                    databaseNameWithIcon: c
                                }
                            })
                        }),
                        icon: (0, r.jsx)(o(16275).I, {
                            icon: o(581923).plusIcon,
                            colorVariant: "secondary"
                        }),
                        ...l
                    })
                })
        },
        51909: (e, t, o) => {
            o.d(t, {
                r: () => a
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(581454);
            var n = () => o(910675),
                r = () => o(9247);

            function a(e) {
                var t, a;
                let {
                    environment: l,
                    collectionContextStore: i,
                    groupByKey: s,
                    groupsFormatKey: u,
                    currentGroups: c,
                    newGroupIds: d,
                    containsAllGroups: p
                } = e, g = (0, n().H2)(i.normalizedFormatStore.state, s, u), m = i.normalizedSchemaStore.state;
                if (!g) return [];
                let y = m[g.property];
                if (!y || !(0, n().Eg)(y)) return [];
                let f = (null == (t = i.collectionViewStore()) ? void 0 : t.getFormatStore().getKeyStore(u).getValue()) ? ? [],
                    h = (0, n().oH)({
                        schema: m,
                        groupBy: g
                    }),
                    v = h ? new Set(h.map(e => (0, n().AC)(e))) : new Set,
                    x = [];
                for (let e of f) {
                    if ((0, r().j4)(y.type) && !v.has((0, n().Ix)(e))) continue;
                    let t = { ...e
                    };
                    delete t.emptyHidden, x.push(t)
                }
                let b = c || x;
                if (!p) {
                    let e = (0, n().ro)(y),
                        t = 1 === x.length && (0, n().OF)(x[0].value, e);
                    b = 0 === x.length || t ? c : x
                }
                let S = o(381453).Ul(b, e => {
                    let t = d.indexOf((0, n().Ix)(e));
                    return t >= 0 ? t : 1 / 0
                });
                S = S.map(e => x.find(t => (0, n().Mn)(e, t)) ? ? e);
                let [C, w] = o(381453).jB(S, e => !e.hidden), k = [...C, ...w], j = null == (a = i.collectionViewStore()) ? void 0 : a.pointer.spaceId;
                (0, o(377796).createAndCommit)({
                    userAction: `collectionGroupActions.handleGroupReorder#${u}`,
                    environment: l,
                    cellTarget: j ? {
                        spaceWithId: j
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(760348).y)({
                            sortType: "manual",
                            environment: l,
                            collectionContextStore: i,
                            groupByKey: s,
                            groupsFormatKey: u,
                            transaction: e
                        }), (0, o(868844).o)({
                            collectionContextStore: i,
                            newGroups: k,
                            groupsFormatKey: u,
                            transaction: e
                        })
                    }
                });
                let A = "reorder_groups";
                return "board_columns" === u ? A = "board_reorder_groups" : "chart_subgroups" === u && (A = "chart_reorder_groups"), (0, o(893783).X)({
                    environment: l,
                    collectionContextStore: i,
                    action: A
                }), k
            }
        },
        63974: (e, t, o) => {
            o.d(t, {
                o: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.77 1.79 12.45 12.42",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M8.708 1.978a.625.625 0 0 0-.884.884l.914.913H3.84c-1.14 0-2.065.925-2.065 2.065v4.78a.625.625 0 0 0 1.25 0V5.84c0-.45.365-.815.815-.815h4.898l-.914.913a.625.625 0 0 0 .884.884l1.98-1.98a.625.625 0 0 0 0-.884zM13.6 4.755a.625.625 0 0 0-.625.625v4.78c0 .45-.365.815-.815.815H7.263l.913-.913a.625.625 0 0 0-.884-.884l-1.98 1.98a.625.625 0 0 0 0 .884l1.98 1.98a.625.625 0 1 0 .884-.884l-.913-.913h4.897c1.14 0 2.065-.924 2.065-2.065V5.38a.625.625 0 0 0-.625-.625"
                    })
                },
                r = (0, o(104509).wt)("arrowSquareLeftRightSmall", n, "small")
        },
        81915: (e, t, o) => {
            o.d(t, {
                O: () => n
            });

            function n(e) {
                return "multi_select" === e.type
            }
        },
        85675: (e, t, o) => {
            o.d(t, {
                O: () => l,
                q: () => a
            });
            var n = () => o(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        type: "closed"
                    }
                }
            }

            function a(e, t) {
                var n;
                l.setState({
                    type: "open",
                    collectionContextStore: t
                });
                let r = null == (n = t.collectionViewStore()) ? void 0 : n.id;
                r && (0, o(104310).u)({
                    event: {
                        eventName: "my_tasks_limited_source_picker_modal_opened",
                        eventProperties: {
                            collection_view_id: r
                        }
                    }
                })
            }
            let l = new r
        },
        103499: (e, t, o) => {
            o.r(t), o.d(t, {
                filterSmallIcon: () => r,
                iconDefinition: () => n
            }), o(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 3.69 12.61 8.61",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M2.4 3.7a.7.7 0 1 0 0 1.4h11.2a.7.7 0 1 0 0-1.4zm9.5 3.594H4.1a.7.7 0 1 0 0 1.4h7.8a.7.7 0 1 0 0-1.4M5.8 10.9a.7.7 0 1 0 0 1.4h4.4a.7.7 0 1 0 0-1.4z"
                    })
                },
                r = (0, o(104509).wt)("filterSmall", n, "small")
        },
        121133: (e, t, o) => {
            o.d(t, {
                p: () => n
            });

            function n(e) {
                let {
                    groupBy: t,
                    schema: n,
                    format: r,
                    groupsFormatKey: a,
                    limit: l,
                    subGroupArgs: i
                } = e, s = n[t.property];
                if (!s || !(0, o(910675).Eg)(s)) return;
                let u = r[a] || [],
                    c = (0, o(910675).w9)(t, r),
                    d = i && r[i.groupsFormatKey] || [];
                return {
                    type: "groups",
                    version: "v2",
                    returnHiddenGroups: e.returnHiddenGroups,
                    returnPinnedGroups: e.returnPinnedGroups,
                    groupBy: c,
                    groupSortPreference: u,
                    limit: Math.min(l, o(453308).O3),
                    subGroup: i ? {
                        groupBy: (0, o(910675).w9)(i.groupBy, r),
                        groupSortPreference: d,
                        limit: i.limit
                    } : void 0,
                    aggregation: function(e) {
                        if (!e.groupAggregation && !e.subGroupAggregation) return;
                        let t = {
                            type: "independent"
                        };
                        return e.groupAggregation && (t.groupAggregation = e.groupAggregation), e.subGroupAggregation && (t.subGroupAggregation = e.subGroupAggregation), t
                    }({
                        groupAggregation: e.aggregation,
                        subGroupAggregation: null == i ? void 0 : i.subGroupAggregation
                    }),
                    blockResults: e.blockResults
                }
            }
        },
        214134: (e, t, o) => {
            o.d(t, {
                e: () => a
            }), o(296540);
            var n = o(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.42 2.42 11.15 11.16",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M6.4 7.925a.575.575 0 1 0 0 1.15h3.2a.575.575 0 1 0 0-1.15z"
                        }), (0, n.jsx)("path", {
                            d: "M3.8 2.425c-.76 0-1.375.616-1.375 1.375v1.256c0 .554.328 1.032.8 1.25V12.2c0 .76.616 1.375 1.375 1.375h6.8c.76 0 1.375-.616 1.375-1.375V6.305c.472-.217.8-.695.8-1.249V3.8c0-.76-.616-1.375-1.375-1.375zM3.575 3.8c0-.124.1-.225.225-.225h8.4c.124 0 .225.1.225.225v1.256a.225.225 0 0 1-.22.225h-8.41a.225.225 0 0 1-.22-.225zm.8 8.4V6.431h7.25V12.2c0 .124-.1.225-.225.225H4.6a.225.225 0 0 1-.225-.225"
                        })]
                    })
                },
                a = (0, o(104509).wt)("archiveBoxSmall", r, "small")
        },
        222869: (e, t, o) => {
            o.d(t, {
                _: () => n
            });

            function n(e, t) {
                if (e.size !== t.size) return !1;
                for (let o of e)
                    if (!t.has(o)) return !1;
                return !0
            }
        },
        250037: (e, t, o) => {
            o.d(t, {
                M: () => n
            }), o(581454);
            async function n(e) {
                var t;
                let {
                    environment: n,
                    collectionStore: r,
                    collectionContextStore: a,
                    collectionSettingsStore: l,
                    shouldSkipViewSelection: i
                } = e, s = (null == (t = a.dashboardWidgetStore.state) ? void 0 : t.dashboardCollectionViewBlockStore) ? ? a.collectionViewBlockStore(), u = a.collectionViewStore(), c = r.getParentBlockStore();
                if (!s || !c || !u) return;
                let d = r.getSchema();
                if (!a.getIsInDashboardBuildMode() && "chart" === u.getType() && d) {
                    let e, t = u.getFormat(),
                        r = t.chart_config;
                    if (!r) return;
                    let a = "placeholder" === r.type ? r.placeHolderType : r.type;
                    (0, o(828660).Ix)(a) ? e = (0, o(105639).EZ)({
                        collectionSchema: d,
                        axisChartType: a
                    }): "donut" === a ? e = (0, o(105639).ZS)({
                        collectionSchema: d
                    }) : "number" === a && (e = (0, o(105639).y_)());
                    let i = u.getSpaceId();
                    (0, o(377796).createAndCommit)({
                        userAction: "slashMenu.create.chartViewExistingSource",
                        environment: n,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        canUndo: !0,
                        perform: n => {
                            (0, o(173157).z)({
                                store: u.getFormatStore(),
                                transaction: n,
                                data: { ...t,
                                    hide_linked_collection_name: !0,
                                    subitem_display_mode: "flattened",
                                    chart_config: e || null
                                }
                            })
                        }
                    }), l.setState({
                        open: !0,
                        stack: [{
                            type: "main"
                        }]
                    });
                    return
                }
                i ? (0, o(76790).a)({
                    collectionSettingsStore: l,
                    item: {
                        type: "main"
                    }
                }) : (await Promise.all([...c.getCollectionViewStores().map(e => e.load()), ...s.getCollectionViewStores().map(e => e.load())]), (0, o(28630).Mf)({
                    collectionStore: r,
                    collectionViewStore: u,
                    constraints: (0, o(132229).v)(u.id)
                }).length > 0 ? (0, o(76790).a)({
                    collectionSettingsStore: l,
                    item: {
                        type: "duplicateExistingView"
                    }
                }) : (0, o(76790).a)({
                    collectionSettingsStore: l,
                    item: {
                        type: "createView",
                        analytics: void 0
                    }
                }))
            }
        },
        258494: (e, t, o) => {
            o.d(t, {
                d: () => n
            }), o(944114), o(898992), o(672577), o(803949), o(581454);

            function n({
                reducerResult: e,
                groupBy: t,
                subGroupBy: r
            }) {
                return (0, o(682985).K8)(() => {
                    var n, a, l;
                    let i = [],
                        s = [];
                    return e ? t ? (e.results.forEach(n => {
                        var r;
                        let a = null == (r = e.pinnedResults) ? void 0 : r.groupResults.find(e => (0, o(910675).AC)(e.value) === (0, o(910675).AC)(n.value));
                        n.visible ? i.push({
                            property: t.property,
                            value: n.value,
                            pinned: !!a || void 0,
                            hidden: !1
                        }) : s.push({
                            property: t.property,
                            value: n.value,
                            hidden: !0,
                            pinned: !!a || void 0
                        })
                    }), {
                        version: "v2",
                        currentGroups: [...i, ...s],
                        visibleGroups: i,
                        hiddenGroups: s,
                        pinnedGroups: {
                            groups: (null == (n = e.pinnedResults) ? void 0 : n.groupResults.map(e => ({
                                property: t.property,
                                value: e.value,
                                pinned: !0,
                                hidden: !e.visible
                            }))) ? ? [],
                            aggregations: (null == (a = e.pinnedResults) ? void 0 : a.aggregationResults) ? ? {}
                        },
                        hasMore: e.hasMore
                    }) : r ? (null == (l = e.subGroupResults) || l.forEach(e => {
                        e.visible ? i.push({
                            property: r.property,
                            value: e.value
                        }) : s.push({
                            property: r.property,
                            value: e.value,
                            hidden: !0
                        })
                    }), {
                        version: "v2",
                        currentGroups: [...i, ...s],
                        visibleGroups: i,
                        hiddenGroups: s,
                        pinnedGroups: {
                            groups: [],
                            aggregations: {}
                        },
                        hasMore: !!e.hasMoreSubGroups
                    }) : {
                        version: "v2",
                        currentGroups: [],
                        visibleGroups: [],
                        hiddenGroups: [],
                        pinnedGroups: {
                            groups: [],
                            aggregations: {}
                        },
                        hasMore: !1
                    } : {
                        version: "v2",
                        currentGroups: [],
                        visibleGroups: [],
                        hiddenGroups: [],
                        pinnedGroups: {
                            groups: [],
                            aggregations: {}
                        },
                        hasMore: !1
                    }
                }, [e, t, r], {
                    equalityFn: o(381453).n4
                })
            }
        },
        264066: (e, t, o) => {
            o.d(t, {
                m: () => r
            }), o(898992), o(354520), o(581454);
            var n = () => o(910675);

            function r(e) {
                var t, r;
                let {
                    environment: a,
                    collectionContextStore: l,
                    currentGroups: i,
                    groupsFormatKey: s,
                    groupFormat: u,
                    action: c
                } = e, d = (0, o(845001).q)(l.capabilitiesStore, l.permissionScopesStore), p = "toggle_group_pin" === c && "board_columns" !== s, g = (null == (t = l.collectionViewStore()) ? void 0 : t.getFormatStore().getKeyStore(s).getValue()) ? ? [], m = new Map;
                for (let e of g) m.set((0, n().Ix)(e), e);
                let y = new Map;
                for (let e of i) y.set((0, n().Ix)(e), e);
                let f = i.filter(e => !m.has((0, n().Ix)(e))),
                    h = f.length > 0 ? [...g, ...f] : g;
                if (!d || p) return h;
                let v = m.get((0, n().Ix)(u)) ? ? y.get((0, n().Ix)(u)) ? ? (0, n().QF)(u.property, u.value),
                    x = h.map(e => (0, n().Mn)(e, v) ? "toggle_group_pin" === c ? { ...v,
                        pinned: !v.pinned || void 0
                    } : "toggle_group_visibility" === c ? { ...v,
                        hidden: !v.hidden
                    } : v : e),
                    b = null == (r = l.collectionViewStore()) ? void 0 : r.pointer.spaceId;
                return (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsViewGroup.handleToggleGroupFormat",
                    environment: a,
                    cellTarget: b ? {
                        spaceWithId: b
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, o(868844).o)({
                            collectionContextStore: l,
                            newGroups: x,
                            groupsFormatKey: s,
                            transaction: e
                        })
                    }
                }), (0, o(893783).X)({
                    environment: a,
                    collectionContextStore: l,
                    action: "toggle_group_pin"
                }), x
            }
        },
        267126: (e, t, o) => {
            o.d(t, {
                U: () => n
            });

            function n(e) {
                var t;
                let {
                    environment: n,
                    handleAddItemClick: r,
                    buttonRef: a,
                    event: l
                } = e, i = null == (t = a.current) ? void 0 : t.getBoundingClientRect();
                i && o(351198).qL({
                    environment: n,
                    originRect: i,
                    moveToContext: "aggregated_type",
                    overrideDatabaseType: "notion://tasks_collection",
                    onAccept: () => {
                        r(l)
                    }
                })
            }
        },
        287131: (e, t, o) => {
            o.d(t, {
                T: () => n
            });

            function n(e) {
                let {
                    transaction: t,
                    store: n,
                    collectionContextStore: r,
                    environment: a,
                    shouldCoerce: l,
                    templateStore: i,
                    showMoveTo: s,
                    peekModeOverride: u,
                    from: c,
                    isKeyboard: d
                } = e, p = (0, o(127872).H)({
                    environment: a,
                    collectionContextStore: r,
                    groupsPointer: [],
                    insertAtIndex: 0,
                    shouldCoerce: l,
                    templateStore: i,
                    transaction: t,
                    from: c,
                    inMemoryRecordCache: a.defaultRecordCache.inMemoryRecordCache,
                    isKeyboard: d
                });
                if (!p) return;
                let g = u ? ? o(28630).hH(r);
                (0, o(908919).V)({
                    environment: a,
                    store: p.newStore,
                    peekMode: g,
                    showMoveTo: s,
                    resultsStore: void 0,
                    collectionContextStore: r,
                    pageVisitSource: function(e) {
                        let {
                            blockId: t,
                            collectionContextStore: n
                        } = e, r = (0, o(829435).s)(t), a = (0, o(400695).W)(t), l = n.isInHomeWidgetStore.state;
                        return a ? l ? o(254656).y8.PersonalHomeTileCustomDbCreate : o(254656).y8.PersonalHomeCustomDbCreate : r ? l ? o(254656).y8.PersonalHomeTileTasksCreate : o(254656).y8.PersonalHomeTasksCreate : o(254656).y8.Create
                    }({
                        blockId: n.id,
                        collectionContextStore: r
                    })
                });
                let m = "collectionTypedView" === r.contextTypeFromStoreState ? p.newStore.getAssociatedCollectionId() : void 0;
                return o(549960).vH(a, {
                    from: c.createBlock,
                    type: "page",
                    new_page_id: p.newStore.id,
                    creating_block_id: p.newStore.id,
                    ...o(752242).sl(r, m)
                }), p.newStore
            }
        },
        291140: (e, t, o) => {
            o.d(t, {
                p: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.37 2.95 13.26 14.11",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M3.925 2.95a.55.55 0 1 0 0 1.1h12.15a.55.55 0 1 0 0-1.1zm0 7.767a.55.55 0 0 0 0 1.1h12.15a.55.55 0 1 0 0-1.1zm-.55-4.234a1 1 0 0 1 1-1h1.8a1 1 0 0 1 1 1v1.8a1 1 0 0 1-1 1h-1.8a1 1 0 0 1-1-1zm1.1.1v1.6h1.6v-1.6zm4.625-1.1a1 1 0 0 0-1 1v1.8a1 1 0 0 0 1 1h1.8a1 1 0 0 0 1-1v-1.8a1 1 0 0 0-1-1zm.1 2.7v-1.6h1.6v1.6zm3.625-1.7a1 1 0 0 1 1-1h1.8a1 1 0 0 1 1 1v1.8a1 1 0 0 1-1 1h-1.8a1 1 0 0 1-1-1zm1.1.1v1.6h1.6v-1.6zm-9.55 6.667a1 1 0 0 0-1 1v1.8a1 1 0 0 0 1 1h1.8a1 1 0 0 0 1-1v-1.8a1 1 0 0 0-1-1zm.1 2.7v-1.6h1.6v1.6zm3.625-1.7a1 1 0 0 1 1-1h1.8a1 1 0 0 1 1 1v1.8a1 1 0 0 1-1 1H9.1a1 1 0 0 1-1-1zm1.1.1v1.6h1.6v-1.6zm4.625-1.1a1 1 0 0 0-1 1v1.8a1 1 0 0 0 1 1h1.8a1 1 0 0 0 1-1v-1.8a1 1 0 0 0-1-1zm.1 2.7v-1.6h1.6v1.6z"
                    })
                },
                r = (0, o(104509).wt)("squareGridBelowLines", n, "default")
        },
        300873: (e, t, o) => {
            o.d(t, {
                i: () => r
            });
            var n = o(296540);

            function r(e, t) {
                let r = (0, o(595151).a)(e);
                return {
                    getWorkflowsForProperty: (0, n.useCallback)(n => {
                        if (r.error || !r.value || !e || !t) return [];
                        let a = e.getParentCollectionViewBlockStore();
                        return a ? (0, o(772966).gY)({
                            workflowsData: r.value,
                            collectionViewBlockStore: a,
                            currentCollectionStore: e,
                            property: n,
                            spaceId: t
                        }) : []
                    }, [r, e, t])
                }
            }
        },
        322450: (e, t, o) => {
            function n(e = !1) {
                return e ? "workspace_owners_only" : "all_workspace_members"
            }

            function r(e) {
                let {
                    policy: t,
                    userRole: r,
                    userPermissionGroups: a,
                    isOwnersOnlyDefaultEnabled: l
                } = e, i = n(l), s = r && (0, o(642157).Km)(r);
                switch (t ? ? i) {
                    case "disabled":
                        return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                    case "workspace_owners_only":
                        if (!s) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        };
                        break;
                    case "all_workspace_members":
                        break;
                    case "custom":
                        if (!(null == a ? void 0 : a.some(e => {
                                var t;
                                return (null == (t = e.settings) ? void 0 : t.can_create_custom_agents) === !0
                            })) && !s) return {
                            canCreate: !1,
                            reason: "policy_restriction"
                        }
                }
                return {
                    canCreate: !0
                }
            }
            o.d(t, {
                D: () => n,
                K: () => r
            }), o(898992), o(737550)
        },
        340900: (e, t, o) => {
            o.d(t, {
                G: () => n
            });
            async function n(e) {
                let {
                    environment: t,
                    collectionContextStore: n,
                    collectionViewStore: r,
                    targetOverrideStore: a
                } = e, l = n.collectionViewBlockStore(), i = a ? ? l;
                if (!r || !i) return;
                let s = (0, o(483227).Ay)({
                        store: i,
                        collectionViewId: r.id,
                        fullyQualified: !0,
                        pageVisitSource: o(254656).y8.CopyLink,
                        embedded: !1
                    }),
                    [u, c] = await Promise.all([(0, o(161333).r)(), (0, o(969899).jd)()]);
                await c({
                    environment: t,
                    stringValue: s,
                    copiedMessage: u.copiedLinkToClipboard
                }), o(436555).D6({
                    label: o(962299).A.formatMessage(o(920630).D.copySuccessMessage)
                })
            }
        },
        361435: (e, t, o) => {
            o.d(t, {
                $6: () => a,
                Vu: () => r,
                zX: () => n
            });
            let n = (0, o(109939).YK)({
                sprintUncategorizedGroup: {
                    defaultMessage: "Backlog (No {name})",
                    id: "database.sprintDatabaseView.uncategorizedGroupLabel"
                }
            });

            function r(e) {
                let {
                    collectionStore: t,
                    property: n,
                    propertySchema: r,
                    parentStore: a
                } = e, l = !1;
                if (null != t && t.isDefined()) {
                    let e = t.getPropertyMapping();
                    l = (null == e ? void 0 : e[o(11448).yx.TaskToSprintRelation]) === n
                }
                return (0, o(856235).LQ)(r, a) === o(11448).av || l
            }

            function a(e) {
                return (0, o(613211).wy)({
                    appUri: e.getFormatStore().getKeyStore("app_config_uri").getValue(),
                    collectionSchema: e.getSchema()
                })
            }
        },
        430523: (e, t, o) => {
            o.d(t, {
                A: () => r
            }), o(296540), o(944114), o(898992), o(908872);
            var n = o(474848);

            function r(e) {
                let {
                    startPoint: t,
                    endPoint: r,
                    style: l,
                    showArrowHead: s,
                    useRightAngles: u,
                    cornerRadiusOverride: c,
                    handleMouseMove: d,
                    handleMouseLeave: p,
                    isRtl: g
                } = e, m = g ? -1 : 1, y = g ? 1.5 : -1.5;
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i, {
                        startPoint: t,
                        startCurvePoint: u ? void 0 : {
                            x: t.x + o(861716).g_ * m,
                            y: t.y
                        },
                        endPoint: s ? {
                            x: r.x + y,
                            y: r.y
                        } : r,
                        endCurvePoint: u ? void 0 : {
                            x: r.x - o(861716).g_ * m,
                            y: r.y
                        },
                        cornerRadiusOverride: c,
                        style: l,
                        handleMouseMove: d,
                        handleMouseLeave: p,
                        children: e.children
                    }), s ? (0, n.jsx)(a, {
                        endPoint: r,
                        style: l,
                        isRtl: g
                    }) : void 0]
                })
            }

            function a(e) {
                let {
                    endPoint: t,
                    style: o,
                    isRtl: r
                } = e, a = r ? 5 : -5;
                return (0, n.jsx)("polyline", {
                    points: `${t.x+a},${t.y-6} ${t.x},${t.y} ${t.x+a},${t.y+6}`,
                    style: o,
                    fill: "transparent"
                })
            }
            let l = {
                strokeOpacity: 0,
                strokeWidth: 16,
                pointerEvents: "stroke",
                cursor: "default"
            };

            function i(e) {
                let {
                    startPoint: t,
                    startCurvePoint: o,
                    endPoint: r,
                    endCurvePoint: a,
                    style: i,
                    cornerRadiusOverride: s,
                    handleMouseMove: u,
                    handleMouseLeave: c
                } = e, d = function(e, t) {
                    function o(e, t, o) {
                        let r = t.x - e.x,
                            a = t.y - e.y;
                        return n(e, t, Math.min(1, o / Math.sqrt(r * r + a * a)))
                    }

                    function n(e, t, o) {
                        return {
                            x: e.x + (t.x - e.x) * o,
                            y: e.y + (t.y - e.y) * o
                        }
                    }

                    function r(e, t) {
                        e.length > 2 && (e[e.length - 2] = t.x.toString(), e[e.length - 1] = t.y.toString())
                    }

                    function a(e) {
                        return {
                            x: parseFloat(e[e.length - 2]),
                            y: parseFloat(e[e.length - 1])
                        }
                    }
                    let l = e.split(/[,\s]/).reduce((e, t) => {
                            let o = t.match("([a-zA-Z])(.+)");
                            return o ? (e.push(o[1]), e.push(o[2])) : e.push(t), e
                        }, []).reduce(function(e, t) {
                            return !isNaN(parseFloat(t)) && e.length ? e[e.length - 1].push(t) : e.push([t]), e
                        }, []),
                        i = [];
                    if (l.length > 1) {
                        let e = a(l[0]),
                            s = null;
                        "Z" === l[l.length - 1][0] && l[0].length > 2 && (s = ["L", e.x.toString(), e.y.toString()], l[l.length - 1] = s), i.push(l[0]);
                        for (let e = 1; e < l.length; e++) {
                            let u = i[i.length - 1],
                                c = l[e],
                                d = c === s ? l[1] : l[e + 1];
                            if (d && u && u.length > 2 && "L" === c[0] && d.length > 2 && "L" === d[0]) {
                                let e = a(u),
                                    l = a(c),
                                    s = a(d),
                                    p = o(l, e, t),
                                    g = o(l, s, t);
                                r(c, p), i.push(c);
                                let m = n(p, l, .5),
                                    y = n(l, g, .5),
                                    f = ["C", m.x.toString(), m.y.toString(), y.x.toString(), y.y.toString(), g.x.toString(), g.y.toString()];
                                i.push(f)
                            } else i.push(c)
                        }
                        if (s) {
                            let e = a(i[i.length - 1]);
                            i.push(["Z"]), r(i[0], e)
                        }
                    } else i = l;
                    return i.reduce(function(e, t) {
                        return `${e}${t.join(" ")} `
                    }, "")
                }(o && a ? `M ${t.x} ${t.y} L ${o.x} ${o.y} L ${a.x} ${a.y} L ${r.x} ${r.y}` : `M ${t.x} ${t.y} L ${t.x} ${r.y} L ${r.x} ${r.y}`, s || 16);
                return (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("path", {
                        d: d,
                        style: i,
                        fill: "transparent"
                    }), u || c ? (0, n.jsxs)("g", {
                        onMouseMove: u,
                        onMouseLeave: c,
                        children: [(0, n.jsx)("path", {
                            d: d,
                            style: l,
                            fill: "transparent"
                        }), e.children]
                    }) : void 0]
                })
            }
        },
        434637: (e, t, o) => {
            o.d(t, {
                D: () => d
            }), o(898992), o(823215), o(354520), o(581454);
            var n = o(296540),
                r = o(474848);
            let a = {
                    container: {
                        display: "flex",
                        alignItems: "center",
                        fontWeight: o(699422).Wy.medium,
                        color: o(632079).Tj.text.secondary,
                        paddingInlineStart: 8,
                        paddingInlineEnd: 8
                    },
                    databaseTitle: { ...o(699422).RC
                    }
                },
                l = n.memo(function(e) {
                    let {
                        prefix: t,
                        collectionName: o
                    } = e;
                    return (0, r.jsxs)("div", {
                        style: a.container,
                        children: [t, (0, r.jsxs)("span", {
                            style: a.databaseTitle,
                            children: [" ", o]
                        })]
                    })
                }),
                i = {
                    link: {
                        borderRadius: 6,
                        height: 24,
                        width: 24,
                        display: "flex"
                    },
                    button: {
                        height: 24,
                        width: 24,
                        fill: o(632079).Tj.icon.tertiary
                    },
                    icon: {
                        width: 20,
                        height: 20
                    }
                },
                s = n.memo(function(e) {
                    let t = (0, o(533992).v3)(),
                        a = (0, o(109939).tz)(),
                        l = (0, n.useCallback)(() => {
                            (0, o(150782).F)(t, {
                                from: e.helpButtonContext
                            })
                        }, [t, e.helpButtonContext]);
                    return (0, r.jsx)(o(68774).N, {
                        href: e.href,
                        external: !0,
                        style: i.link,
                        onClick: l,
                        children: (0, r.jsx)(o(374533).A, {
                            icon: o(80094).questionMarkCircleIcon,
                            style: i.button,
                            iconStyle: i.icon,
                            ariaLabel: a.formatMessage({
                                id: "helpButton.ariaLabel",
                                defaultMessage: "Help"
                            })
                        })
                    })
                }),
                u = (0, o(109939).YK)({
                    filterPlaceholder: {
                        id: "collectionPicker.searchBarFilter.text",
                        defaultMessage: "Filter…"
                    }
                }),
                c = {
                    container: {
                        fontSize: 14,
                        padding: o(986939).A.isMobile ? "12px 16px" : "0 12px 4px 12px",
                        color: o(632079).Tj.text.tertiary,
                        wordBreak: "keep-all",
                        ...o(986939).A.isMobile && {
                            background: o(632079).Tj.background.primary,
                            boxShadow: `0 1px 0 ${o(632079).Tj.border.secondaryTranslucent}`,
                            marginBottom: 1
                        }
                    }
                },
                d = n.memo(function(e) {
                    let {
                        collectionStore: t,
                        isOverlay: a,
                        onEmptyEnter: l,
                        onEmptyPageClick: i,
                        onCancelClick: s,
                        canConfigureCollection: u,
                        locked: d,
                        onTemplateClick: p
                    } = e, [m, h] = (0, n.useState)(""), v = (0, o(682985).uB)(void 0, o(419110).$), x = (0, o(682985).K8)(() => t.getTemplatePageStores().filter(e => e.getAlive()), [t]), b = (0, o(682985).K8)(() => x.every(e => e.isReady()), [x]), S = (0, o(682985).K8)(() => a && null != m && m.length ? (0, o(821048).Ay)(m, x, e => String(e.getProperties().title || "")) : x, [x, m, a]);
                    if (!b) return null;
                    if (a) {
                        let e = x.length > 6,
                            n = o(986939).A.isMobile ? {
                                menuType: o(649476).gu.Modal,
                                title: (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "Database templates",
                                    id: "database.mobileTemplatesMenu.title"
                                })
                            } : {
                                menuType: o(649476).gu.Popup,
                                width: 360
                            };
                        return (0, r.jsxs)(o(747369).A, { ...n,
                            header: (0, r.jsx)(g, {
                                collectionStore: t
                            }),
                            children: [0 === x.length ? (0, r.jsx)(o(844565).A, {
                                children: (0, r.jsx)("div", {
                                    style: c.container,
                                    children: (0, r.jsx)(o(109939).sA, {
                                        defaultMessage: "Create a reusable page template for this database.",
                                        id: "database.emptyTemplatesList.info"
                                    })
                                })
                            }) : void 0, e ? (0, r.jsx)(y, {
                                templateInputValue: m,
                                setTemplateInputValue: h
                            }) : null, (0, r.jsx)(f, {
                                collectionStore: t,
                                onEmptyEnter: l,
                                onEmptyPageClick: i,
                                onCancelClick: s,
                                canConfigureCollection: u,
                                isOverlay: a,
                                locked: d,
                                onTemplateClick: p,
                                menuListStore: v,
                                templateInputValue: m,
                                filteredTemplatePageStores: S,
                                draggable: !(e && m)
                            })]
                        })
                    }
                    return (0, r.jsx)(f, {
                        collectionStore: t,
                        onEmptyEnter: l,
                        onEmptyPageClick: i,
                        onCancelClick: s,
                        canConfigureCollection: u,
                        isOverlay: a,
                        locked: d,
                        onTemplateClick: p,
                        menuListStore: v,
                        templateInputValue: m,
                        filteredTemplatePageStores: S,
                        draggable: !0
                    })
                }),
                p = {
                    marginTop: 6
                },
                g = n.memo(function(e) {
                    let {
                        collectionStore: t
                    } = e, n = (0, o(109939).tz)(), a = (0, o(682985).K8)(() => (0, o(536601).getCollectionNameOrDefault)({
                        collectionStore: t,
                        intl: n
                    }), [t, n]);
                    return o(986939).A.isMobile ? null : (0, r.jsx)(o(636518).Ay, {
                        style: p,
                        title: (0, r.jsx)(l, {
                            prefix: (0, r.jsx)(o(109939).sA, {
                                id: "database.templatesList.templatesFor",
                                defaultMessage: "Templates for"
                            }),
                            collectionName: a
                        }),
                        right: (0, r.jsx)(s, {
                            helpButtonContext: "collection_templates_menu",
                            href: (0, o(442564).x)("guides.databaseTemplates")
                        })
                    })
                }),
                m = {
                    container: {
                        margin: o(986939).A.isMobile ? 0 : "10px 0"
                    }
                },
                y = n.memo(function(e) {
                    let {
                        templateInputValue: t,
                        setTemplateInputValue: a
                    } = e, {
                        isAndroid: l
                    } = (0, o(533992).Y0)(), i = (0, o(109939).tz)(), s = (0, n.useCallback)(e => a(e.currentTarget.value), [a]), c = (0, o(960253).I)(() => ({
                        input: { ...l && {
                                borderBottom: "none"
                            }
                        }
                    }), [l]);
                    return (0, r.jsx)("div", {
                        style: m.container,
                        children: (0, r.jsx)(o(310324).Ay, {
                            value: t,
                            focusInitial: !o(986939).A.isMobile || void 0,
                            placeholder: i.formatMessage(u.filterPlaceholder),
                            showClearButton: !0,
                            inputLeft: (0, r.jsx)(o(310324).Zf, {
                                icon: o(921048).magnifyingGlassSmallIcon
                            }),
                            onChange: s,
                            style: c.input
                        })
                    })
                }),
                f = n.memo(function(e) {
                    let {
                        filteredTemplatePageStores: t,
                        draggable: a,
                        collectionStore: l,
                        onEmptyEnter: i,
                        onEmptyPageClick: s,
                        onCancelClick: u,
                        canConfigureCollection: c,
                        isOverlay: d,
                        locked: p,
                        onTemplateClick: g,
                        menuListStore: m,
                        templateInputValue: y
                    } = e, f = (0, o(533992).v3)(), v = (0, n.useContext)(o(713311).p2), x = (0, n.useContext)(o(440411).n), b = (0, o(682985).K8)(() => (0, o(194020).E)(f, (0, o(974410).f)(l)), [f, l]), S = (0, n.useCallback)(e => {
                        m.unsetFocus();
                        let t = l.getSpaceId();
                        (0, o(377796).createAndCommit)({
                            userAction: "CollectionTemplatePicker.handleCollectionTemplatesReorder",
                            environment: f,
                            canUndo: !0,
                            cellTarget: t ? {
                                spaceWithId: t
                            } : void 0,
                            perform: t => o(845422).lU({
                                collectionStore: l,
                                newTemplateIds: e,
                                transaction: t
                            })
                        })
                    }, [f, l, m]), C = (0, n.useCallback)(() => {
                        var e;
                        b && (i(), (0, o(523713).k)(f, {
                            template_type: "empty_page",
                            from: "collections_template_picker",
                            is_keyboard: !0,
                            collection_id: l.id,
                            collection_view_id: null == v || null == (e = v.collectionViewStore()) ? void 0 : e.id
                        }))
                    }, [f, l, i, v, b]), w = (0, n.useCallback)(e => {
                        b && (s(e.event), (0, o(523713).k)(f, {
                            template_type: "empty_page",
                            from: "collections_template_picker",
                            is_keyboard: "keydown" === e.event.type,
                            ...v && (0, o(752242).sl)(v)
                        }))
                    }, [b, v, f, s]), k = (0, n.useCallback)(() => {
                        var e;
                        if (!b) return;
                        let t = l.getSpaceId(),
                            {
                                performResult: n
                            } = (0, o(377796).createAndCommit)({
                                userAction: "CollectionTemplatePicker.newPage",
                                environment: f,
                                canUndo: !0,
                                cellTarget: t ? {
                                    spaceWithId: t
                                } : void 0,
                                perform: e => o(845422).bI({
                                    environment: f,
                                    collectionStore: l,
                                    transaction: e,
                                    title: y
                                })
                            });
                        if (n) {
                            let e = o(728372).AppStoreMainEditorCurrentBlockStore.state,
                                t = e ? (0, o(483227).Ay)({
                                    store: e,
                                    peekViewBlockId: n.id,
                                    fullyQualified: !1,
                                    pageVisitSource: o(254656).y8.Create
                                }) : (0, o(483227).Ay)({
                                    store: n,
                                    fullyQualified: !1,
                                    pageVisitSource: o(254656).y8.Create
                                });
                            x ? x(t) : (0, o(79266).navigate)({
                                environment: f,
                                url: t
                            })
                        }(0, o(941754).e)(f, {
                            collection_id: l.id,
                            collection_view_id: null == v || null == (e = v.collectionViewStore()) ? void 0 : e.id
                        }), null == u || u()
                    }, [b, f, l, v, y, u, x]), j = (0, n.useMemo)(() => ({
                        key: "create-template",
                        render: e => (0, r.jsx)(h, {
                            isOverlay: d,
                            locked: p,
                            menuListItemProps: e
                        }),
                        action: k
                    }), [k, d, p]), A = (0, o(682985).K8)(() => {
                        var e;
                        return null == v || null == (e = v.defaultPageTemplateStore.state) ? void 0 : e.id
                    }, [v]), _ = (0, n.useMemo)(() => ({
                        key: "empty",
                        render: e => 0 === t.length || "" !== y ? null : (0, r.jsx)(o(717202).K, {
                            collectionStore: l,
                            canConfigureCollection: c,
                            isOverlay: d,
                            templateStore: void 0,
                            isMobile: o(986939).A.isMobile,
                            locked: p || !c,
                            draggable: !0,
                            isDefault: void 0 === A,
                            onCancelClick: u,
                            ...e
                        }),
                        action: w
                    }), [c, l, A, w, d, p, u, y, t.length]), M = (0, n.useCallback)(e => {
                        let t = e.getAutomationStore(),
                            r = null != t && t.isActive() ? t.getRecurrence() : void 0,
                            i = t && !t.canEdit(),
                            s = (null == t ? void 0 : t.getStatus()) === "disabled_duplication" || (null == t ? void 0 : t.getStatus()) === "disabled_inactive_space";
                        return {
                            key: e.id,
                            render: t => (0, n.createElement)(o(717202).K, { ...t,
                                key: e.id,
                                isOverlay: d,
                                collectionStore: l,
                                canConfigureCollection: c,
                                templateStore: e,
                                isMobile: o(986939).A.isMobile,
                                locked: p,
                                onCancelClick: u,
                                draggable: a,
                                isDefault: A === e.id,
                                recurrence: r,
                                recurrenceDisabled: s,
                                recurrenceButtonDisabled: i
                            }),
                            action: t => {
                                b && g({
                                    templateStore: e,
                                    isKeyboard: "keydown" === t.event.type
                                })
                            }
                        }
                    }, [c, b, l, A, a, d, p, u, g]), I = (0, o(682985).K8)(() => {
                        let e = t.map(e => e.id);
                        return [0 !== t.length ? {
                            key: "templates",
                            render: t => {
                                if (0 === t.children.length) return null;
                                let n = t.children.slice(0, t.children.length - 1),
                                    l = t.children[t.children.length - 1];
                                return (0, r.jsx)(o(844565).A, { ...t,
                                    disableDesktopPadding: !d,
                                    disableMobileBorders: !0,
                                    children: (0, r.jsxs)(r.Fragment, {
                                        children: [o(986939).A.isMobile || p || !c ? n.map((e, t) => n[t]) : (0, r.jsx)(o(66467).Ay, {
                                            direction: "vertical",
                                            keys: e,
                                            disabled: !a,
                                            renderKey: t => n[e.indexOf(t)],
                                            onDrop: S
                                        }), l]
                                    })
                                })
                            },
                            items: [...t.map(M), _]
                        } : null, c ? {
                            key: "create-template",
                            render: e => (0, r.jsx)(o(844565).A, {
                                topBorder: d,
                                disableDesktopPadding: !d,
                                disableMobileBorders: !0,
                                ...e
                            }),
                            items: [j]
                        } : null].filter(e => null !== e)
                    }, [t, M, _, c, j, d, p, a, S]);
                    return (0, r.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        store: m,
                        sections: I,
                        onEmptyEnter: C,
                        initialFocus: void 0,
                        disableInitialScroll: !0,
                        disableCommandEnter: !0,
                        resetFocusOnMouseOut: !0
                    })
                }),
                h = n.forwardRef(function(e, t) {
                    let {
                        menuListItemProps: n,
                        isOverlay: a,
                        locked: l
                    } = e, i = (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "New template",
                        id: "database.templateView.newTemplateButton"
                    });
                    return a ? (0, r.jsx)(o(391374).o, {
                        title: i,
                        color: "secondary",
                        ...n
                    }) : (0, r.jsx)(o(33418).J, {
                        title: i,
                        icon: (0, r.jsx)(o(16275).I, {
                            icon: o(581923).plusIcon
                        }),
                        type: "new_template",
                        format: a ? "collection-overlay" : "page-menu-item",
                        locked: l,
                        ...n
                    })
                })
        },
        443773: (e, t, o) => {
            function n(e) {
                return `${o(910675).RO}_${e}`
            }

            function r(e) {
                var t, n, r;
                let {
                    collectionContextStore: a,
                    groupFormat: l,
                    groupBy: i,
                    temporaryViewState: s,
                    title: u
                } = e, c = a.collectionViewBlockStore();
                if (!c) return;
                let d = a.normalizedSchemaStore.state,
                    p = a.normalizedFormatStore.state,
                    g = a.normalizedQueryStore.state,
                    m = (null == (t = o(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : t.getSettingsStore().getKeyStore("time_zone").getValue()) || (0, o(714350).P)(),
                    y = (0, o(21312).K8)({
                        schema: d,
                        groupBy: i,
                        group: l,
                        propertyMapping: void 0,
                        timeZone: m
                    });
                if (!y) return;
                let f = i.property,
                    h = (0, o(783969).Q)(c, f),
                    v = (null == (n = s.combinatorFilter) ? void 0 : n.value) ? ? (null == g ? void 0 : g.filter),
                    x = {
                        type: "table",
                        parent_id: c.pointer.id,
                        parent_table: c.pointer.table,
                        alive: !0,
                        space_id: c.getSpaceId(),
                        format: {
                            is_unlisted: !0,
                            collection_pointer: p.collection_pointer,
                            table_properties: h,
                            property_filters: (null == s || null == (r = s.propertyFilters) ? void 0 : r.value) ? ? (null == p ? void 0 : p.property_filters)
                        },
                        query2: { ...g,
                            filter: v ? (0, o(400473).GV)([v, y]) : (0, o(400473).GV)([y])
                        }
                    },
                    b = (0, o(752242).sl)(a);
                (0, o(104310).u)({
                    event: {
                        eventName: "collection_chart_drilldown_click",
                        eventProperties: { ...b,
                            drilldown_type: "grouped",
                            from: "board_pinned_group"
                        }
                    }
                }), o(738923).Q.openCollectionDrilldownView({
                    collectionViewValue: x,
                    collectionViewBlockStore: c,
                    viewsModuleContext: a.viewsModuleContextStore.state,
                    title: u,
                    archiveStatus: a.archiveStatusStore.state
                })
            }
            o.d(t, {
                Q: () => n,
                d: () => r
            }), o(898992), o(354520)
        },
        476087: (e, t, o) => {
            o.d(t, {
                U: () => n
            });

            function n({
                environment: e,
                collectionContextStore: t,
                collectionViewBlockStore: r,
                templateStore: a,
                isKeyboard: l,
                from: i,
                shouldCoerce: s,
                showMoveTo: u,
                peekModeOverride: c,
                userAction: d
            }) {
                let p = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "collectionTemplatePickerActions.updatePreferredDatabase",
                    environment: e,
                    canUndo: !0,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    perform: e => {
                        (0, o(165170).w)({
                            collectionContextStore: t,
                            transaction: e
                        })
                    }
                });
                let {
                    performResult: g
                } = (0, o(377796).createAndCommit)({
                    userAction: d ? ? "collectionTemplatePickerActions.createPageFromCollectionTemplate",
                    environment: e,
                    canUndo: !0,
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    perform: n => (0, o(287131).T)({
                        transaction: n,
                        store: r,
                        collectionContextStore: t,
                        environment: e,
                        shouldCoerce: s,
                        templateStore: a,
                        from: i,
                        isKeyboard: l,
                        showMoveTo: u,
                        peekModeOverride: c
                    })
                });
                return g
            }
        },
        480326: (e, t, o) => {
            o.d(t, {
                p: () => a
            }), o(898992), o(581454), o(737550);
            var n = o(296540),
                r = o(474848);

            function a(e) {
                var t;
                let a, {
                        onChange: l,
                        currentGroups: i,
                        groupBy: s,
                        groupFormat: u,
                        onClose: c,
                        schema: p,
                        parentStore: g
                    } = e,
                    [m, y] = (0, n.useState)(""),
                    h = (0, o(682985).uB)(void 0, o(419110).$),
                    v = (0, n.useCallback)(() => {
                        d({
                            onChange: l,
                            currentGroups: i,
                            groupBy: s,
                            groupFormat: u,
                            inputValue: m,
                            onClose: c
                        })
                    }, [i, s, u, m, l, c]);
                return (0, n.useEffect)(() => {
                    var e;
                    u && ("select" === u.value.type || "multi_select" === u.value.type) && u.value.value ? y(u.value.value) : u && "status" === u.value.type && u.value.value && "by_option" === u.value.value.type ? y(u.value.value.option) : u && (0, o(910675).kO)(u.value) && (null == (e = u.value.value) ? void 0 : e.type) === "exact" && y(u.value.value.value)
                }, [u]), a = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: u ? (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Rename group",
                        id: "codeBlock.databaseEditGroupMenu.renameGroupTitle"
                    }) : (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Add a group",
                        id: "codeBlock.databaseEditGroupMenu.addGroupTitle"
                    }),
                    left: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Cancel",
                        id: "codeBlock.databaseEditGroupMenu.cancelButton.label"
                    }),
                    right: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Done",
                        id: "codeBlock.databaseEditGroupMenu.doneButton.label"
                    }),
                    onClickRight: v,
                    onClickLeft: c
                } : {
                    menuType: o(649476).gu.Popup,
                    width: "select" === (t = s).type || "multi_select" === t.type || (0, o(910675).Vs)(t.type) ? 300 : 240,
                    maxHeight: "50vh"
                }, (0, r.jsx)(o(790124).A, {
                    capture: !0,
                    children: e => (0, r.jsx)(o(747369).A, { ...a,
                        ...e,
                        children: (0, r.jsx)(f, {
                            groupBy: s,
                            schema: p,
                            onChange: l,
                            currentGroups: i,
                            groupFormat: u,
                            onClose: c,
                            parentStore: g,
                            inputValue: m,
                            setInputValue: y,
                            menuListStore: h
                        })
                    })
                })
            }

            function l() {
                return (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Group already exists.",
                    id: "database.groupExistsAlreadyError.message"
                })
            }
            async function i(e, t, n, r, a) {
                let l = n[t.property];
                if (!l || !(0, o(795e3).n)(l)) return;
                let i = (0, o(390768).N)(l);
                if (!i) return;
                let s = o(356912).m.createChildStore(r, i);
                if (await s.load(), !s.isDefined()) return;
                let u = s.getSpaceId(),
                    c = await o(308825).T.searchActions.load();
                return (await c.searchPagesInCollection({
                    environment: a,
                    query: e,
                    collectionId: i.id,
                    spaceId: u,
                    excludeTemplates: !0,
                    source: "collection_group_value",
                    limit: 20,
                    includePublicPagesWithoutExplicitAccess: !0,
                    boostRecentlyViewedPages: !1
                })).results.map(e => ({
                    table: o(832375).evP,
                    id: e,
                    spaceId: u
                }))
            }
            async function s(e, t, n) {
                let r = await o(308825).T.searchActions.load();
                return {
                    users: await r.searchSpaceUsers({
                        environment: t,
                        query: e,
                        membersOnly: !1,
                        limit: 20
                    }),
                    groups: r.searchSpaceGroups({
                        query: e,
                        intl: n,
                        limit: 20
                    }),
                    type: "notionUsersAndGroups"
                }
            }

            function u({
                currentGroups: e,
                onChange: t,
                groupFormat: a,
                onClose: l,
                inputValue: i,
                menuListStore: d
            }) {
                let p = (0, o(533992).v3)(),
                    g = (0, o(109939).tz)(),
                    m = (0, o(682985).uB)(d, o(419110).$),
                    [y, f] = (0, n.useState)(i);
                return (0, r.jsx)(o(814255).A, {
                    request: y,
                    performRequest: e => s(e, p, g),
                    debounce: o(767776).tu,
                    render: (n, i, s) => {
                        let u;
                        i || (i = {
                            users: [],
                            groups: []
                        });
                        let d = [...o(381453).oE(i.users.map(n => ({
                            key: n.id,
                            render: e => (0, r.jsx)(o(920224).A, {
                                actor: (0, o(197018).A7)(n),
                                ...e
                            }),
                            action: () => {
                                c({
                                    table: "notion_user",
                                    id: n.id
                                }, a, e, t, l)
                            }
                        }))), ...o(381453).oE(i.groups.map(n => ({
                            key: n.group_id,
                            render: e => (0, r.jsx)(o(729460)._, {
                                group: n,
                                menuListItemProps: e
                            }),
                            action: () => {
                                c(n.getGroupPointer(), a, e, t, l)
                            }
                        })))];
                        return u = s && i && 0 === d.length ? (0, r.jsx)(o(844565).A, {
                            children: (0, r.jsx)(o(498341).u, {
                                title: (0, r.jsx)(o(109939).sA, {
                                    defaultMessage: "No results",
                                    id: "database.noPersonSearchResults.message"
                                })
                            })
                        }) : (0, r.jsx)(o(558045).A, {
                            type: o(558045).O.Vertical,
                            initialFocus: 0,
                            sections: [{
                                key: 0,
                                items: d
                            }],
                            store: m
                        }), (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)(o(844565).A, {
                                children: (0, r.jsx)(o(310324).Ay, {
                                    value: y,
                                    focus: !0,
                                    placeholder: g.formatMessage({
                                        defaultMessage: "Search for a person or group…",
                                        id: "database.searchPersonOrGroups.placeholder"
                                    }),
                                    onChange: e => {
                                        f(e.target.value), m.setState({ ...m.state,
                                            focus: {
                                                section: 0,
                                                indexLocal: 0,
                                                indexGlobal: 0,
                                                footerFocused: !1
                                            }
                                        })
                                    }
                                })
                            }), u]
                        })
                    }
                })
            }

            function c(e, t, n, a, i) {
                let s = {
                    type: "person",
                    value: e
                };
                return t && o(381453).n4(s, t.value) ? (null == i || i(), null) : n.some(e => (0, o(910675).OF)(s, e.value)) ? (o(647095).f1((0, r.jsx)(l, {})), null) : void a({
                    newGroupValue: s
                })
            }

            function d({
                onChange: e,
                currentGroups: t,
                groupBy: n,
                groupFormat: a,
                inputValue: i,
                onClose: s
            }) {
                let u, c = i.trim().replace(/,/g, "");
                if ("select" === n.type || "multi_select" === n.type ? u = {
                        type: n.type,
                        value: c
                    } : "status" === n.type ? u = function(e) {
                        let {
                            groupFormat: t,
                            value: o
                        } = e;
                        if ((null == t ? void 0 : t.value.type) === "status" && t.value.value && "by_option" === t.value.value.type) return {
                            type: "status",
                            value: {
                                type: "by_option",
                                option: o
                            }
                        }
                    }({
                        groupFormat: a,
                        value: c
                    }) : (0, o(910675).Vh)(n) && (u = {
                        type: n.type,
                        value: {
                            type: "exact",
                            value: c
                        }
                    }), !u || !c || a && o(381453).n4(u, a.value)) {
                    null == s || s();
                    return
                }
                t.some(e => u && (0, o(910675).OF)(u, e.value)) ? o(647095).f1((0, r.jsx)(l, {})) : e({
                    newGroupValue: u
                })
            }
            let p = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    padding: 6,
                    width: "100%",
                    background: o(632079).Tj.background.secondaryTranslucent
                },
                style1: {
                    fontSize: o(699422).J.UIRegular.desktop
                }
            };

            function g({
                onChange: e,
                currentGroups: t,
                groupBy: a,
                groupFormat: l,
                onClose: i,
                inputValue: s,
                setInputValue: u,
                menuListStore: c
            }) {
                let m = (0, o(109939).tz)(),
                    y = (0, n.useCallback)(() => d({
                        onChange: e,
                        currentGroups: t,
                        groupBy: a,
                        groupFormat: l,
                        inputValue: s,
                        onClose: i
                    }), [e, t, a, l, s, i]),
                    f = (0, n.useCallback)(o => {
                        13 === o.keyCode ? d({
                            onChange: e,
                            currentGroups: t,
                            groupBy: a,
                            groupFormat: l,
                            inputValue: s,
                            onClose: i
                        }) : 27 === o.keyCode && (null == i || i())
                    }, [e, t, a, l, s, i]),
                    h = (0, n.useCallback)(e => {
                        u(e.target.value), c.setState({ ...c.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }, [c, u]),
                    v = (0, o(533992).WS)(),
                    x = l ? m.formatMessage({
                        id: "database.collectionEditGroupMenu.renameGroupLabel.placeholder",
                        defaultMessage: "Rename group"
                    }) : m.formatMessage({
                        id: "database.collectionEditGroupMenu.newGroupLabel.placeholder",
                        defaultMessage: "New group"
                    });
                return v ? (0, r.jsx)(o(844565).A, {
                    children: (0, r.jsx)(o(310324).Ay, {
                        value: s,
                        focus: !0,
                        selectAll: !0,
                        showClearButton: !1,
                        focusInitial: !0,
                        placeholder: x,
                        onChange: h,
                        onKeyDown: f
                    })
                }) : (0, r.jsxs)("div", {
                    style: p.style0,
                    children: [(0, r.jsx)(o(36481).p, {
                        value: s,
                        focus: !0,
                        selectAll: !0,
                        focusInitial: !0,
                        placeholder: x,
                        onChange: h,
                        onKeyDown: f,
                        format: "transparent",
                        style: p.style1
                    }), (0, r.jsx)(o(912946).A, {
                        colorPalette: "blue",
                        size: "sm",
                        onClick: y,
                        iconTrailing: o(750748).arrowTurnDownLeftSmallIcon,
                        children: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "Done",
                            id: "database.collectionEditGroupMenu.submitButton.label"
                        })
                    })]
                })
            }

            function m({
                parentStore: e,
                schema: t,
                groupBy: a,
                currentGroups: l,
                onChange: s,
                groupFormat: u,
                onClose: c,
                inputValue: d,
                setInputValue: p,
                menuListStore: g
            }) {
                let f = (0, o(533992).v3)(),
                    h = (0, n.useMemo)(() => {
                        let e = t[a.property];
                        return !!e && "relation" === e.type && (0, o(390768).N)(e)
                    }, [a.property, t]);
                return (0, o(682985).K8)(() => !!h && o(356912).m.createChildStore(e, h).isDefined(), [h, e]) && h ? (0, r.jsx)(o(814255).A, {
                    request: d,
                    performRequest: o => i(o, a, t, e, f),
                    debounce: o(767776).tu,
                    render: (o, n = [], i) => (0, r.jsx)(y, {
                        ready: i,
                        results: n,
                        parentStore: e,
                        schema: t,
                        groupBy: a,
                        currentGroups: l,
                        onChange: s,
                        groupFormat: u,
                        onClose: c,
                        inputValue: d,
                        setInputValue: p,
                        menuListStore: g,
                        collectionPointer: h,
                        environment: f
                    })
                }) : null
            }

            function y({
                parentStore: e,
                schema: t,
                groupBy: a,
                currentGroups: i,
                onChange: s,
                groupFormat: u,
                onClose: c,
                inputValue: d,
                setInputValue: p,
                menuListStore: g,
                results: m,
                ready: f,
                collectionPointer: h,
                environment: v
            }) {
                let x, b = (0, o(109939).tz)(),
                    S = (0, n.useContext)(o(713311).p2),
                    C = (0, o(682985).K8)(() => {
                        let n, p;
                        return o(381453).oE([...(p = (n = null == S ? void 0 : S.relativeVariableStore.state) && n[h.id], m.map(t => {
                            let n = o(970831).B.createChildStore(e, t);
                            if (n.isTemplate()) return;
                            let a = p ? (0, o(613211).cE)(n.id, p) : void 0,
                                d = ((t, n) => {
                                    let r = o(356912).m.createChildStore(e, h);
                                    if (!r.isDefined()) return;
                                    let a = r.getFormat().app_config_uri;
                                    return a && n ? t.formatMessage(o(613211).n$[a][n].messageDescriptor) : void 0
                                })(b, a);
                            return {
                                key: n.id,
                                render: e => (0, r.jsx)(o(103558).A, {
                                    store: n,
                                    titlePrefix: d,
                                    ...e
                                }),
                                action: () => {
                                    let e = {
                                        type: "relation",
                                        value: t
                                    };
                                    if (a && (e = {
                                            type: "relation",
                                            value: {
                                                type: "relative",
                                                value: {
                                                    type: "builtin",
                                                    variable: a
                                                }
                                            }
                                        }), u && o(381453).n4(e, u.value)) {
                                        null == c || c();
                                        return
                                    }
                                    i.some(t => (0, o(910675).OF)(e, t.value)) ? o(647095).f1((0, r.jsx)(l, {})) : s({
                                        newGroupValue: e
                                    })
                                }
                            }
                        })), function(e, t, n, a, l, i) {
                            let s = n[a.property];
                            if (!s || "relation" !== s.type) return null;
                            let u = (0, o(390768).N)(s);
                            if (!u) return null;
                            let c = o(356912).m.createChildStore(t, u);
                            return c.isDefined() && i.length > 0 ? {
                                key: "new-page",
                                render: e => (0, r.jsx)(o(11782).A, {
                                    targetCollectionStore: c,
                                    pageName: i,
                                    ...e
                                }),
                                action: () => {
                                    let t = (0, o(295447).Z1)({
                                            environment: e,
                                            table: o(832375).evP,
                                            spaceId: c.getSpaceId()
                                        }),
                                        n = {
                                            table: o(832375).evP,
                                            id: t,
                                            spaceId: c.getSpaceId()
                                        };
                                    l({
                                        newGroupValue: {
                                            type: "relation",
                                            value: n
                                        },
                                        newPage: {
                                            id: n.id,
                                            spaceId: n.spaceId,
                                            name: i
                                        }
                                    })
                                }
                            } : null
                        }(v, e, t, a, s, d)])
                    }, [v, S, h, i, a, u, d, b, s, c, e, m, t]);
                return x = f && m && 0 === C.length ? (0, r.jsx)(o(844565).A, {
                    children: (0, r.jsx)(o(498341).u, {
                        title: (0, r.jsx)(o(109939).sA, {
                            defaultMessage: "No results",
                            id: "database.noRelationSearchResults.message"
                        })
                    })
                }) : (0, r.jsx)(o(558045).A, {
                    type: o(558045).O.Vertical,
                    initialFocus: 0,
                    sections: [{
                        key: 0,
                        items: C
                    }],
                    store: g
                }), (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(844565).A, {
                        children: (0, r.jsx)(o(310324).Ay, {
                            value: d,
                            focus: !0,
                            placeholder: b.formatMessage({
                                defaultMessage: "Type to search...",
                                id: "database.searchRelation.placeholder"
                            }),
                            onChange: e => {
                                p(e.target.value), g.setState({ ...g.state,
                                    focus: {
                                        section: 0,
                                        indexLocal: 0,
                                        indexGlobal: 0,
                                        footerFocused: !1
                                    }
                                })
                            }
                        })
                    }), x]
                })
            }

            function f({
                groupBy: e,
                schema: t,
                onChange: n,
                currentGroups: a,
                groupFormat: l,
                onClose: i,
                parentStore: s,
                inputValue: c,
                setInputValue: d,
                menuListStore: p
            }) {
                var y;
                if (!t[e.property]) return null;
                let h = "status" === e.type && (null == l ? void 0 : l.value.type) === "status" && (null == (y = l.value.value) ? void 0 : y.type) === "by_option";
                return "select" === e.type || "multi_select" === e.type || h ? (0, r.jsx)(g, {
                    onChange: n,
                    currentGroups: a,
                    groupBy: e,
                    groupFormat: l,
                    onClose: i,
                    inputValue: c,
                    setInputValue: d,
                    menuListStore: p
                }) : "person" === e.type ? (0, r.jsx)(u, {
                    currentGroups: a,
                    onChange: n,
                    groupFormat: l,
                    onClose: i,
                    inputValue: c,
                    menuListStore: p
                }) : "relation" === e.type ? (0, r.jsx)(m, {
                    parentStore: s,
                    schema: t,
                    groupBy: e,
                    currentGroups: a,
                    onChange: n,
                    groupFormat: l,
                    onClose: i,
                    inputValue: c,
                    setInputValue: d,
                    menuListStore: p
                }) : (0, o(910675).Vs)(e.type) ? (0, r.jsx)(g, {
                    onChange: n,
                    currentGroups: a,
                    groupBy: e,
                    groupFormat: l,
                    onClose: i,
                    inputValue: c,
                    setInputValue: d,
                    menuListStore: p
                }) : "number" === e.type || "status" === e.type || "date" === e.type || "formula" === e.type || "checkbox" === e.type || "created_time" === e.type || "last_edited_time" === e.type || "created_by" === e.type || "last_edited_by" === e.type || "last_visited_time" === e.type || "location" === e.type ? null : void(0, o(722371).HB)(e.type)
            }
        },
        482270: (e, t, o) => {
            o.d(t, {
                Y: () => r
            });
            var n = o(296540);

            function r() {
                let e = (0, o(551408).A)(),
                    t = (0, o(639938).V)(),
                    r = (0, o(713311).Ks)(),
                    a = (0, o(682985).K8)(() => {
                        var e;
                        return (null == r || null == (e = r.collectionStore()) ? void 0 : e.isPageTreeCollection()) ? ? !1
                    }, [r]),
                    l = (0, o(723240).r)(),
                    i = (0, o(345776).T)(),
                    s = (0, o(533992).v3)(),
                    u = (0, o(217844)._)({
                        name: "ai_database_agents",
                        spaceId: l,
                        userId: i,
                        amount: "unknown"
                    }),
                    c = void 0 !== u && (0, o(94418).e2)(u),
                    d = (0, o(94418).Xq)(u),
                    p = (0, o(217844)._)({
                        name: "collection_property_autofill",
                        spaceId: l,
                        userId: i,
                        amount: 1
                    }),
                    g = void 0 !== p && (0, o(94418).e2)(p),
                    m = (0, n.useCallback)(e => (0, o(367890).x)(s, {
                        name: "collection_property_autofill",
                        spaceId: l,
                        userId: i,
                        amount: e ? ? 1
                    }), [s, l, i]);
                return {
                    isDatabaseAgentsEnabled: e,
                    canCreateLiteDatabaseAgents: e,
                    canRunLiteDatabaseAgents: e && g,
                    liteDatabaseAgentAvailability: p,
                    canCreateBigDatabaseAgents: e && t.canCreate && c && !a,
                    canRunBigDatabaseAgents: e && c && !a,
                    hasDatabaseAgentsUpsell: !!d && "none" !== d.type,
                    databaseAgentsAvailability: u,
                    getLiteDatabaseAgentAvailability: m
                }
            }
        },
        524242: (e, t, o) => {
            o.d(t, {
                Is: () => r,
                LS: () => i,
                NH: () => s,
                QA: () => l,
                _b: () => a
            }), o(944114), o(517642), o(658004), o(733853), o(845876), o(432475), o(515024), o(731698), o(296540);
            var n = o(474848);

            function r(e) {
                let t = (0, o(457915).g)(e) ? ? [],
                    n = [];
                for (let o of t) {
                    if (!("block" === o.table && !0 === o.isTemplate() && o.getFormat().automation_id && o.id !== e.id)) continue;
                    let t = o.getAutomationStore();
                    if (t) {
                        if (!t.isReady()) return {
                            automationStoresReady: !1
                        };
                        void 0 !== t.getRecurrence() && t.isDefined() && n.push(t.getModel())
                    }
                }
                return {
                    automationStoresReady: !0,
                    ...(0, o(832248).jX)(n)
                }
            }

            function a(e) {
                switch (e) {
                    case "hour":
                        return (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Duplicate hourly",
                            id: "database.templatePickerItem.recurrenceFrequency.hourly"
                        });
                    case "day":
                        return (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Duplicate daily",
                            id: "database.templatePickerItem.recurrenceFrequency.daily"
                        });
                    case "week":
                        return (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Duplicate weekly",
                            id: "database.templatePickerItem.recurrenceFrequency.weekly"
                        });
                    case "month":
                        return (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Duplicate monthly",
                            id: "database.templatePickerItem.recurrenceFrequency.monthly"
                        });
                    case "year":
                        return (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Duplicate yearly",
                            id: "database.templatePickerItem.recurrenceFrequency.yearly"
                        });
                    default:
                        (0, o(722371).HB)(e)
                }
            }

            function l() {
                return {
                    start_date: o(906745).DateTime.local().plus({
                        days: 1
                    }).set({
                        hour: 0,
                        minute: 0,
                        second: 0,
                        millisecond: 0
                    }).toMillis(),
                    timezone: (0, o(25825).dB)(),
                    hour: 0,
                    minute: 0,
                    frequency: "day",
                    interval: 1
                }
            }

            function i(e) {
                let {
                    recurrence: t,
                    intl: n,
                    leadingPhrase: r
                } = e;
                return (0, o(832248).X3)({ ..."month" === t.frequency ? { ...t,
                        monthly_restriction: void 0
                    } : t,
                    weekdays: void 0,
                    hour: 0,
                    minute: 0,
                    end_condition: void 0
                }).toText(e => {
                    switch (e) {
                        case "every":
                            if (void 0 === r) return "";
                            if ("every" === r) return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.every",
                                defaultMessage: "every"
                            });
                            if ("duplicate every" === r) return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.duplicateEvery",
                                defaultMessage: "duplicate every"
                            });
                            (0, o(722371).HB)(r);
                            break;
                        case "day":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.day",
                                defaultMessage: "day"
                            });
                        case "hour":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.hour",
                                defaultMessage: "hour"
                            });
                        case "hours":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.hours",
                                defaultMessage: "hours"
                            });
                        case "days":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.days",
                                defaultMessage: "days"
                            });
                        case "week":
                            {
                                let e = (null == t ? void 0 : t.weekdays) || [];
                                if (5 === e.length && (0, o(222869)._)(new Set(e), new Set(["MO", "TU", "WE", "TH", "FR"]))) return n.formatMessage({
                                    id: "database.templatePickerItem.duplicateMenuLabel.weekday",
                                    defaultMessage: "weekday"
                                });
                                return n.formatMessage({
                                    id: "database.templatePickerItem.duplicateMenuLabel.week",
                                    defaultMessage: "week"
                                })
                            }
                        case "weeks":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.weeks",
                                defaultMessage: "weeks"
                            });
                        case "month":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.month",
                                defaultMessage: "month"
                            });
                        case "months":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.months",
                                defaultMessage: "months"
                            });
                        case "year":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.year",
                                defaultMessage: "year"
                            });
                        case "years":
                            return n.formatMessage({
                                id: "database.templatePickerItem.duplicateMenuLabel.years",
                                defaultMessage: "years"
                            });
                        default:
                            return e.toString()
                    }
                }).trim()
            }

            function s(e) {
                let t = e.getRecurrence();
                return !!(e.isTriggerType("recurrence") && t && "disabled_recurrence_ended" === e.getStatus())
            }
        },
        546846: (e, t, o) => {
            o.d(t, {
                N: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.37 2.37 11.26 15.94",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M6.653 2.375A.625.625 0 0 0 6.028 3v.474A3.62 3.62 0 0 0 7.24 6.179l.289.258-.157 1.603a4.625 4.625 0 0 0-2.997 4.33V13c0 .345.28.625.625.625h4.13v3.08c0 .158.035.317.1.46l.433.94a.35.35 0 0 0 .565.103l.063-.087.44-.956c.065-.142.1-.3.1-.46v-3.08H15c.345 0 .625-.28.625-.625v-.63a4.625 4.625 0 0 0-2.997-4.33l-.157-1.603.289-.258a3.63 3.63 0 0 0 1.212-2.705V3a.625.625 0 0 0-.625-.625zm1.42 2.871c-.468-.417-.75-1-.79-1.621h5.434a2.38 2.38 0 0 1-.79 1.621l-.525.47a.63.63 0 0 0-.206.527l.227 2.318a.63.63 0 0 0 .422.531l.237.08a3.375 3.375 0 0 1 2.293 3.197v.006h-8.75v-.006c0-1.447.922-2.733 2.293-3.197l.237-.08a.63.63 0 0 0 .422-.531l.227-2.318a.63.63 0 0 0-.206-.528z"
                    })
                },
                r = (0, o(104509).wt)("pin", n, "default")
        },
        557737: (e, t, o) => {
            o.d(t, {
                K: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M5.612 4.08A1.895 1.895 0 0 0 3.971 5.81l-.005.092.001 9.439-.864.053h-.035a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.646V4.137c0-.88.683-1.61 1.562-1.665l10.187-.651a.755.755 0 0 1 .786.551.826.826 0 0 1 .03.175v.943l-9.133.583-.037.007Zm12.172 12.67a.779.779 0 0 1-.617.747c-.006 0-.013.003-.02.003l-11.045.681h-.034a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.647l-.001-.03V6.072l.001-.047a.777.777 0 0 1 .67-.709c.01 0 .018-.003.027-.003l11.052-.706a.755.755 0 0 1 .786.551.824.824 0 0 1 .03.175l.002 11.418Zm-1.248-8.726a.388.388 0 0 0-.418-.393l-9.213.563c-.23.012-.439.177-.439.436v7.533c-.01.484.31.61.673.583L16 16.221l.002-.001c.466-.018.534-.374.534-.65V8.024Zm-7.35 2.458c-.429.026-.574.353-.573.856v.089c-.051.012-.094.023-.146.026-.309.02-.531-.232-.532-.682 0-.689.616-1.336 1.79-1.41 1.045-.064 1.714.441 1.715 1.333 0 .67-.556 1.147-1.104 1.296 1.028.05 1.458.624 1.459 1.357.001 1.254-.915 1.964-2.329 2.052l-.034.002c-1.063.066-1.809-.338-1.81-1.035 0-.397.29-.733.728-.76.035-.003.068.004.103.002.087.71.567.97 1.046.941.463-.029.788-.34.788-.782v-.018c0-.688-.575-.723-1.44-.757l-.138-.822c.805-.147 1.207-.41 1.207-.887 0-.512-.284-.83-.73-.801Zm3.864-.339c-.857.248-1.045-.129-.952-.523.514-.12 1.85-.521 2.356-.703l.006 5.289.934.136c0 .344-.197.56-.548.581-.291.018-.968.043-1.294.063-.505.031-1.43.107-1.43.107a.572.572 0 0 1-.035-.201c0-.168.068-.34.29-.416l.677-.219-.004-4.114Z"
                    })
                },
                r = (0, o(104509).wt)("calendarDate31", n, "default")
        },
        595151: (e, t, o) => {
            o.d(t, {
                a: () => n
            });

            function n(e) {
                let t = (0, o(682985).K8)(() => {
                    if (e) return e.getSpaceId()
                }, [e]);
                return (0, o(682985).K8)(() => e && t ? (0, o(772966).so)({
                    collectionStore: e,
                    spaceId: t
                }) : {
                    value: []
                }, [e, t])
            }
        },
        639938: (e, t, o) => {
            o.d(t, {
                $: () => a,
                V: () => r
            }), o(581454);
            let n = (0, o(109939).YK)({
                permissionDeniedTooltip: {
                    id: "permissions.agentCreation.denied",
                    defaultMessage: "Contact a workspace owner to create agents"
                }
            });

            function r() {
                let e = (0, o(972740).L)(),
                    t = (0, o(876252).$)(),
                    n = (0, o(682985).K8)(() => !!(null == e ? void 0 : e.getZeroRetentionEnabled()), [e]),
                    r = (0, o(83208).X)("agent_creation_permissions"),
                    a = (0, o(83208).X)("custom_agents_allow_hipaa"),
                    l = (0, o(83208).X)("agent_creation_default_owners_only");
                return (0, o(682985).K8)(() => {
                    if (n && !a) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    if (!r) return {
                        canCreate: !0
                    };
                    let i = null == e ? void 0 : e.getModel(),
                        s = null == i ? void 0 : i.getSettings();
                    if (!e || !t || !i || !s) return {
                        canCreate: !1,
                        reason: "feature_disabled"
                    };
                    let u = (0, o(993077).dp)(e, t.id).getMembershipTypeAsRoleOrNone(),
                        c = o(68809).f.getSpacePermissionGroupIds({
                            spaceId: e.id
                        }),
                        d = (0, o(381453).oE)(Array.from(c).map(t => {
                            let n = (0, o(13717).E)({
                                spaceStore: e,
                                groupId: t
                            });
                            if (n) {
                                let e = n.getSettings();
                                return {
                                    settings: e ? {
                                        can_create_custom_agents: e.can_create_custom_agents
                                    } : void 0
                                }
                            }
                        })),
                        p = {
                            policy: s.custom_agent_creation_policy,
                            userRole: u && "none" !== u ? u : void 0,
                            userPermissionGroups: d,
                            isOwnersOnlyDefaultEnabled: l
                        };
                    return (0, o(322450).K)(p)
                }, [e, t, r, l, n, a])
            }

            function a() {
                let e = r(),
                    t = (0, o(109939).tz)().formatMessage(n.permissionDeniedTooltip);
                return {
                    canCreate: e.canCreate,
                    reason: e.reason,
                    tooltipMessage: t
                }
            }
        },
        658616: (e, t, o) => {
            o.d(t, {
                P: () => n
            });

            function n(e) {
                return "select" === e.type
            }
        },
        686015: (e, t, o) => {
            o.d(t, {
                D: () => r
            }), o(296540);
            var n = o(474848);

            function r(e) {
                let {
                    agentIcon: t,
                    workflowStore: r,
                    size: a
                } = e;
                return (0, o(682985).K8)(() => (0, o(691143).m)(r), [r]) ? (0, n.jsx)(o(16275).I, {
                    icon: o(312528).x,
                    size: a,
                    colorVariant: "primary"
                }) : (0, n.jsx)(o(651790).AgentIcon, {
                    agentIcon: t,
                    workflowStore: r,
                    size: a
                })
            }
        },
        691143: (e, t, o) => {
            o.d(t, {
                m: () => n
            });

            function n(e) {
                var t, o;
                return (null == (t = e.getDraftData()) ? void 0 : t.isLite) ? ? (null == (o = e.getData()) ? void 0 : o.isLite) ? ? !1
            }
        },
        709140: (e, t, o) => {
            o.d(t, {
                U: () => n
            });

            function n(e) {
                let {
                    viewToDuplicateStore: t,
                    collectionContextStore: n,
                    collectionViewStore: r,
                    environment: a,
                    temporaryStore: l
                } = e, i = n.collectionStore(), s = t.getType();
                if (!s || !i) return;
                let u = t.getName(),
                    c = t.getPageSort(),
                    d = t.getFormat(),
                    p = t.getKeyStore("query2").getValue(),
                    g = r.getSpaceId();
                (0, o(377796).createAndCommit)({
                    userAction: "CollectionSettingsDuplicateExistingView.duplicateViewSettings",
                    environment: a,
                    cellTarget: g ? {
                        spaceWithId: g
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        let t = l ? ? r;
                        (0, o(421439).y4)({
                            store: t,
                            operation: {
                                pointer: t.pointer,
                                path: t.path,
                                command: "update",
                                args: {
                                    name: u,
                                    type: s,
                                    page_sort: c,
                                    format: { ...d,
                                        collection_pointer: i.pointer
                                    },
                                    query2: p
                                }
                            },
                            transaction: e
                        })
                    }
                }), (0, o(253278).S)({
                    collectionContextStore: n
                })
            }
        },
        729127: (e, t, o) => {
            o.d(t, {
                P: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    collectionContextStore: n
                } = e, r = n.collectionStore(), a = n.collectionViewBlockStore();
                if (!r || !a) return;
                let l = o(728372).AppStoreMainEditorCurrentBlockStore.state;
                l && n.isFullScreenStore.state && (r = o(356912).m.createChildStore(l, r.pointer)), (0, o(492368).x)({
                    environment: t,
                    store: r.getNameStore(),
                    canSelectAllBlocks: !1
                })
            }
        },
        760348: (e, t, o) => {
            o.d(t, {
                y: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    collectionContextStore: n,
                    transaction: r,
                    groupByKey: a,
                    groupsFormatKey: l,
                    sortType: i
                } = e;
                if ("chart_config" === a) return;
                let s = (0, o(910675).H2)(n.normalizedFormatStore.state, a, l),
                    u = n.collectionViewStore();
                if (s && u && (0, o(910675).Nf)(s).includes(i)) {
                    if ("formula" === s.type) {
                        let e = { ...s,
                            groupBy: { ...s.groupBy,
                                sort: {
                                    type: i
                                }
                            }
                        };
                        (0, o(715144).z)({
                            stores: [u],
                            update: {
                                [a]: e
                            },
                            transaction: r
                        })
                    } else(0, o(715144).z)({
                        stores: [u],
                        update: {
                            [a]: { ...s,
                                sort: {
                                    type: i
                                }
                            }
                        },
                        transaction: r
                    });
                    (0, o(893783).X)({
                        environment: t,
                        collectionContextStore: n,
                        action: "update_group_sort"
                    })
                }
            }
        },
        772966: (e, t, o) => {
            function n(e) {
                var t;
                let o = e.getDraftData() ? ? e.getData(),
                    n = [];
                return null == o || null == (t = o.modules) || t.forEach(e => {
                    var t;
                    "notion" === e.type && null != (t = e.state) && t.ownedByDatabasePropertyIds && n.push(...e.state.ownedByDatabasePropertyIds)
                }), n
            }

            function r(e) {
                let {
                    workflowsData: t,
                    collectionViewBlockStore: n,
                    currentCollectionStore: r,
                    property: a,
                    spaceId: l
                } = e;
                if (0 === t.length || !r) return [];
                let i = [];
                for (let e of t) e.collectionId === r.id && i.push(e.workflowId);
                return i.map(e => o(360851).N.createChildStore(n, {
                    table: o(832375).C0E,
                    id: e,
                    spaceId: l
                })).filter(e => {
                    let t = e.getDraftData() ? ? e.getData();
                    for (let e of (null == t ? void 0 : t.modules) ? ? [])
                        if ("notion" === e.type) {
                            var o;
                            return (null == (o = e.state) || null == (o = o.ownedByDatabasePropertyIds) ? void 0 : o.includes(a)) ? ? !1
                        }
                    return !1
                })
            }

            function a(e) {
                let {
                    collectionStore: t,
                    spaceId: n
                } = e, r = t.getParentStore(), a = null == r ? void 0 : r.getFormat(), l = a && "database_agent_ids" in a && Array.isArray(a.database_agent_ids) ? a.database_agent_ids : [];
                if (!r || !a || 0 === l.length) return {
                    value: []
                };
                let i = l.map(e => o(360851).N.createChildStore(r, {
                    id: e,
                    table: "workflow",
                    spaceId: n
                })).filter(e => e.isDefined() && void 0 === e.getMovedToTrashTime());
                try {
                    return {
                        value: i.map(e => {
                            let n, a = e.getData(),
                                l = null == a ? void 0 : a.runtime_actor_pointer;
                            l && l.table === o(832375).GPl && (n = l.id);
                            let i = {
                                    blockId: r.id,
                                    collectionId: t.id,
                                    workflowId: e.id,
                                    botId: n
                                },
                                s = e.canEdit() ? "write" : "read";
                            return { ...i,
                                access: s
                            }
                        })
                    }
                } catch (e) {
                    return {
                        error: (0, o(161179).A)(e)
                    }
                }
            }
            o.d(t, {
                d_: () => n,
                gY: () => r,
                so: () => a
            }), o(944114), o(898992), o(354520), o(803949), o(581454)
        },
        783969: (e, t, o) => {
            o.d(t, {
                Q: () => n
            }), o(898992), o(354520), o(672577);

            function n(e, t) {
                let n = {
                        property: o(439368).rn,
                        visible: !0,
                        width: 276
                    },
                    r = {
                        property: t,
                        visible: !0
                    },
                    a = e.getCollectionViewStores().find(e => "table" === e.getType()),
                    l = null == a ? void 0 : a.getFormatStore().getKeyStore("table_properties").getValue();
                return a && l && 0 !== l.length ? [l.find(e => e.property === o(439368).rn) ? ? n, l.find(e => e.property === t) ? ? r, ...l.filter(e => e.property !== o(439368).rn && e.property !== t)] : [n, r]
            }
        },
        810173: (e, t, o) => {
            o.d(t, {
                Zr: () => a,
                e8: () => s
            });
            var n = o(296540),
                r = o(474848);

            function a({
                propertyId: e,
                propertySchema: t
            }) {
                return "relation" !== t.type && "rollup" !== t.type ? null : (0, r.jsx)(i, {
                    propertyId: e,
                    propertySchema: t
                })
            }
            let l = {
                padding: 2
            };

            function i(e) {
                let {
                    propertySchema: t
                } = e, {
                    format: a,
                    loading: i
                } = s((0, o(682985).K8)(() => {
                    if (t && (0, o(425985).U)(t) && t.connectedRelation.integration_id === o(49361).mn) return t.collection_pointer
                }, [t]), {
                    debugName: "ConnectedRelationSyncStateBadge"
                }), u = (0, n.useMemo)(() => {
                    var e;
                    return a ? {
                        hasError: !!a.error,
                        isSyncing: !!(null == (e = a.sync_state) ? void 0 : e.syncing)
                    } : null
                }, [a]), c = (0, o(960253).e)(), d = (0, o(960253).I)(() => ({
                    container: {
                        fontSize: 11,
                        padding: "1px 4px",
                        borderRadius: 4,
                        display: "inline-flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 1,
                        color: "light" === c ? o(632079).Tj.palette.blue[500] : o(632079).Tj.palette.blue[600]
                    }
                }), [c]);
                return u ? u.isSyncing ? (0, r.jsx)("span", {
                    style: d.container,
                    children: (0, r.jsx)(o(517334).k, {
                        size: 16
                    })
                }) : u.hasError ? (0, r.jsx)("span", {
                    style: d.container,
                    children: (0, r.jsx)(o(16275).I, {
                        icon: o(653905).exclamationMarkTriangleIcon,
                        colorPalette: "yellow",
                        colorVariant: "accentPrimary",
                        style: l
                    })
                }) : null : null
            }

            function s(e, t = {}) {
                let n = (0, o(533992).v3)(),
                    [{
                        status: r,
                        value: a,
                        error: l
                    }] = (0, o(97668).Yb)(async () => {
                        if (!e) return null;
                        let t = new(o(356912)).m(n, e);
                        return await t.load(), t
                    }, [n, e], {
                        debugName: t.debugName || "useExternalCollectionFormat"
                    });
                return {
                    format: (0, o(682985).K8)(() => (null == a ? void 0 : a.getFormat()) ? ? null, [a]),
                    loading: "pending" === r,
                    error: l
                }
            }
        },
        821542: (e, t, o) => {
            o.d(t, {
                V: () => a
            });
            var n = o(296540),
                r = o(474848);

            function a() {
                let [e, t] = (0, n.useState)(!1), a = (0, o(960253).I)(() => ({
                    default: {
                        color: o(632079).Tj.blue.text.accentPrimary,
                        textDecoration: e ? "underline" : "none",
                        fontWeight: o(699422).Wy.medium
                    }
                }), [e]);
                return (0, r.jsx)(o(428217).V, {
                    href: "https://www.notion.com/pricing",
                    external: !0,
                    style: a.default,
                    hoverColor: "blue",
                    onMouseEnter: () => t(!0),
                    onMouseLeave: () => t(!1),
                    children: (0, r.jsx)(o(109939).sA, {
                        id: "PackingChangeLearnMore.learnMore",
                        defaultMessage: "Learn more"
                    })
                })
            }
        },
        868844: (e, t, o) => {
            o.d(t, {
                o: () => n
            });

            function n(e) {
                let {
                    collectionContextStore: t,
                    newGroups: n,
                    groupsFormatKey: r,
                    transaction: a
                } = e, l = t.collectionViewStore();
                l && (0, o(715144).z)({
                    stores: [l],
                    update: {
                        [r]: n
                    },
                    transaction: a
                })
            }
        },
        871486: (e, t, o) => {
            o.d(t, {
                A: () => l
            }), o(296540);
            var n = o(474848);
            let r = {
                    alignItems: "flex-start",
                    paddingTop: 8,
                    paddingBottom: 8
                },
                a = {
                    marginTop: 6
                },
                l = function({
                    on: e,
                    menuListItemProps: t,
                    disabled: l
                }) {
                    return (0, n.jsx)(o(51831).m, {
                        disableTooltip: !l,
                        content: () => (0, n.jsx)(o(109939).sA, {
                            defaultMessage: "Only available for Count",
                            id: "AggregationLimitToggle.disabled.tooltip"
                        }),
                        children: i => (0, n.jsx)(o(296060).A, { ...(0, o(63390).A)(t, i),
                            on: !l && e,
                            disabled: l,
                            style: r,
                            title: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "Show large counts as 99+",
                                id: "BoardAggregations.aggregationLimitToggle.title"
                            }),
                            captionStyle: a,
                            shouldWrapCaption: !0,
                            caption: (0, n.jsx)(o(109939).sA, {
                                defaultMessage: "This improves performance for large databases.",
                                id: "BoardAggregations.aggregationLimitToggle.description"
                            })
                        })
                    })
                }
        },
        874309: (e, t, o) => {
            o.d(t, {
                b: () => r
            });
            let n = new(o(815048)).O2("loadWorkflowTemplateInstances", async () => await Promise.all([o.e(75134), o.e(9773), o.e(36556), o.e(55373), o.e(36192), o.e(40537), o.e(96346), o.e(40994), o.e(57042), o.e(54280), o.e(16712), o.e(93186), o.e(80139), o.e(67542), o.e(23519), o.e(63771), o.e(45213), o.e(53847), o.e(12354), o.e(43444), o.e(23979), o.e(48486), o.e(76298), o.e(23644), o.e(89563), o.e(10471), o.e(71481)]).then(o.bind(o, 253936)));

            function r(e) {
                var t;
                let r = null == (t = (0, o(815048).fJ)(n).value) ? void 0 : t.loadWorkflowTemplateInstances;
                (0, o(682985).K8)(() => {
                    !r || e && r(e)
                }, [r, e])
            }
        },
        895890: (e, t, o) => {
            o.d(t, {
                p: () => n
            });

            function n(e, t) {
                (0, o(195857).DO_NOT_USE_trackLegacy)("open_collection_as_page", t)
            }
        },
        897638: (e, t, o) => {
            o.d(t, {
                N: () => a
            });
            var n = o(296540);
            let r = new(o(815048)).O2("notionCalendarLogos", async () => o.e(94366).then(o.bind(o, 916243)));

            function a(e) {
                let t = function() {
                    let [e, t] = (0, n.useState)(new Date), r = (0, n.useRef)();
                    return (0, n.useEffect)(() => {
                        let n = () => {
                                let o = new Date;
                                o.getDate() !== e.getDate() && t(o)
                            },
                            a = new Date,
                            l = new Date(a);
                        l.setHours(a.getHours() + 1), l.setMinutes(0), l.setSeconds(0), l.setMilliseconds(0);
                        let i = setTimeout(() => {
                            n(), r.current = window.setInterval(n, o(695216).pT)
                        }, l.getTime() - a.getTime());
                        return () => {
                            clearTimeout(i), clearInterval(r.current)
                        }
                    }, [e]), e
                }();
                return function({
                    dateNumber: e,
                    calendarDateIcons: t
                }) {
                    let n = o(557737).K;
                    if (e < 1 || e > 31) return n;
                    let r = e < 10 ? `0${e}` : `${e}`,
                        a = `calendarDate${r}Icon`;
                    return "resolved" !== t.status ? n : t.value[a]
                }({
                    dateNumber: e ? ? t.getDate(),
                    calendarDateIcons: (0, o(815048).fJ)(r)
                })
            }
        },
        903176: (e, t, o) => {
            o.d(t, {
                d: () => i
            }), o(898992), o(672577);
            var n = o(296540),
                r = o(474848);
            let a = Object.freeze({
                    overflow: "hidden",
                    padding: 3,
                    borderRadius: 6,
                    fontWeight: o(699422).Wy.medium
                }),
                l = Object.freeze({
                    overflow: "hidden",
                    padding: 3,
                    marginInlineEnd: 3,
                    borderRadius: 6,
                    fontWeight: o(699422).Wy.medium
                }),
                i = n.memo(function(e) {
                    let {
                        schema: t,
                        groupFormat: n,
                        collectionContextStore: a,
                        isHiddenGroup: l,
                        style: i,
                        uncategorizedIconStyle: u,
                        currentGroups: c,
                        groupBy: d,
                        onChange: p,
                        onClose: g,
                        disabled: m,
                        source: y
                    } = e, f = (0, o(682985).uB)(void 0, o(510969).A), h = (0, o(682985).K8)(() => {
                        let e = a.groupsStore.getGroupState(n);
                        return null == e ? void 0 : e.groupUiParentStore
                    }, [a, n]), v = (0, o(682985).K8)(() => {
                        let e = t[n.property];
                        if (e && (0, o(795e3).n)(e) && h) return (0, o(856235).LQ)(e, h)
                    }, [t, n, h]), x = t[n.property];
                    if (!x) return null;
                    let b = n.value;
                    if (void 0 === b.value) return (0, r.jsx)(C, {
                        groupFormat: n,
                        schema: t,
                        isHiddenGroup: l,
                        collectionContextStore: a,
                        style: i,
                        uncategorizedIconStyle: u,
                        parentStore: h
                    });
                    if ("formula" === b.type) {
                        if ("formula" !== b.type) return null;
                        let e = b.value;
                        return e ? (0, r.jsx)(s, {
                            schema: t,
                            currentGroups: c,
                            groupBy: d,
                            groupFormat: n,
                            onChange: p,
                            onClose: g,
                            disabled: m,
                            style: i,
                            isHiddenGroup: l,
                            collectionContextStore: a,
                            buttonPopupStore: f,
                            parentStore: h,
                            relatedCollectionAppConfigUri: v,
                            groupValue: e,
                            propertySchema: x,
                            source: y
                        }) : null
                    }
                    return (0, r.jsx)(s, {
                        schema: t,
                        currentGroups: c,
                        groupBy: d,
                        groupFormat: n,
                        onChange: p,
                        onClose: g,
                        disabled: m,
                        style: i,
                        isHiddenGroup: l,
                        collectionContextStore: a,
                        buttonPopupStore: f,
                        parentStore: h,
                        relatedCollectionAppConfigUri: v,
                        groupValue: b,
                        propertySchema: x,
                        source: y
                    })
                });

            function s(e) {
                let {
                    groupValue: t,
                    propertySchema: n,
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    style: p,
                    isHiddenGroup: g,
                    collectionContextStore: m,
                    buttonPopupStore: f,
                    parentStore: h,
                    relatedCollectionAppConfigUri: v
                } = e;
                return "select" === t.type || "multi_select" === t.type ? (0, r.jsx)(T, {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    style: p,
                    buttonPopupStore: f,
                    parentStore: h
                }) : "status" === t.type ? (0, r.jsx)(y, {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    buttonPopupStore: f,
                    parentStore: h
                }) : (0, o(910675).r4)(t.type) ? (0, r.jsx)(V, {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    style: p,
                    isHiddenGroup: g,
                    buttonPopupStore: f,
                    parentStore: h,
                    collectionContextStore: m,
                    groupValue: t
                }) : "relation" === t.type ? (0, r.jsx)(j, {
                    schema: a,
                    groupFormat: s,
                    collectionContextStore: m,
                    style: p,
                    parentStore: h,
                    relatedCollectionAppConfigUri: v,
                    groupValue: t
                }) : "location" === t.type ? (0, r.jsx)(k, {
                    style: p,
                    collectionContextStore: m,
                    parentStore: h,
                    groupValue: t
                }) : (0, o(910675)._o)(t.type) ? (0, r.jsx)(b, {
                    style: p,
                    groupValue: t
                }) : (0, o(910675).Vs)(t.type) ? (0, r.jsx)(P, {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    style: p,
                    buttonPopupStore: f,
                    parentStore: h,
                    groupValue: t
                }) : "number" === t.type ? (0, r.jsx)(S, {
                    style: p,
                    groupValue: t,
                    propertySchema: "number" === n.type ? n : void 0
                }) : "checkbox" === t.type ? (0, r.jsx)(x, {
                    style: p,
                    propertySchema: n,
                    groupValue: t
                }) : void(0, o(722371).HB)(t.type)
            }
            let u = {
                container: {
                    width: 240
                },
                style0: {
                    fontWeight: o(699422).Wy.semibold
                }
            };

            function c(e) {
                let {
                    isHiddenGroup: t
                } = e, a = (0, n.useCallback)(() => (0, r.jsx)(o(109939).sA, {
                    id: "database.boardView.uncategorizedColumnTooltip",
                    defaultMessage: "Any items with an empty <b>{name}</b> property will go here. This group cannot be removed.",
                    values: {
                        name: null,
                        b: e => (0, r.jsx)("span", {
                            style: u.style0,
                            children: e
                        })
                    }
                }), []), l = (0, n.useCallback)(t => (0, r.jsx)(p, { ...e,
                    tooltipEvents: t
                }), [e]);
                return t ? (0, r.jsx)(p, { ...e,
                    tooltipEvents: void 0
                }) : (0, r.jsx)(o(51831).m, {
                    content: a,
                    style: u.container,
                    textWrap: !0,
                    children: l
                })
            }
            let d = {
                text: {
                    marginInlineStart: 4,
                    ...o(699422).RC
                }
            };

            function p(e) {
                let {
                    style: t,
                    tooltipEvents: n,
                    formattedLabelMessage: a
                } = e, l = (0, o(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        lineHeight: 1.2,
                        paddingInlineEnd: 4,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        fontWeight: o(699422).Wy.medium,
                        paddingInlineStart: 0,
                        ...t
                    }
                }), [t]);
                return (0, r.jsx)("div", {
                    style: l.container,
                    ...n,
                    children: (0, r.jsx)("span", {
                        style: d.text,
                        children: a
                    })
                })
            }

            function g(e) {
                let {
                    value: t
                } = e;
                return "other" === t.type ? (0, r.jsx)(o(109939).sA, {
                    defaultMessage: "Other",
                    id: "database.collectionGroupValue.textGroup.otherValue"
                }) : "alphabet_prefix" === t.type || "exact" === t.type ? (0, r.jsx)(r.Fragment, {
                    children: t.value
                }) : void(0, o(722371).HB)(t)
            }
            let m = {
                button: {
                    overflow: "hidden",
                    padding: 3,
                    borderRadius: 6,
                    display: "flex",
                    alignItems: "center"
                },
                name: {
                    fontWeight: o(699422).Wy.medium
                }
            };

            function y(e) {
                var t;
                let {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    buttonPopupStore: p,
                    parentStore: g
                } = e, y = (0, n.useCallback)(e => {
                    let t = a[s.property];
                    if (!t || "status" !== t.type) return null;
                    let n = s.value;
                    if (n.type !== t.type) return null;
                    let {
                        value: l
                    } = n;
                    if (!l) return null;
                    let i = t.options ? ? [],
                        u = t.groups ? ? [];
                    if ("by_group" === l.type) {
                        let t = u.find(e => e.name === l.group);
                        return t ? (0, r.jsx)(o(64960).Ay, {
                            style: m.button,
                            disabled: d,
                            ...e,
                            children: (0, r.jsx)(o(575395).RS, {
                                group: t,
                                style: m.name,
                                showIcon: !0,
                                showColor: !0
                            })
                        }) : null
                    }
                    if ("by_option" === l.type) {
                        let t = (0, o(561872).jy)(i, l.option),
                            n = t && u.find(e => {
                                var o;
                                return null == (o = e.optionIds) ? void 0 : o.includes(t.id)
                            });
                        return t ? (0, r.jsx)(o(64960).Ay, {
                            style: m.button,
                            disabled: d,
                            ...e,
                            children: (0, r.jsx)(o(593100).q, {
                                format: o(696654).NY.Medium,
                                isSingle: !0,
                                value: t.value,
                                color: t.color,
                                showRemoveButton: !1,
                                groupColor: null == n ? void 0 : n.color
                            })
                        }) : null
                    }(0, o(722371).HB)(l)
                }, [d, s.property, s.value, a]), f = (0, n.useCallback)(() => (0, r.jsx)(I, {
                    schema: a,
                    currentGroups: l,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    buttonPopupStore: p,
                    parentStore: g
                }), [a, l, i, s, u, c, p, g]), h = s.value, v = "status" === h.type && (null == (t = h.value) ? void 0 : t.type) === "by_option" && !d;
                return (0, r.jsx)(o(656252).A, {
                    content: f,
                    disabled: !v,
                    buttonPopupStore: p,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    originGap: 4,
                    children: y
                })
            }

            function f(e) {
                let {
                    value: t
                } = e, n = (0, o(109939).tz)();
                return (0, r.jsx)(r.Fragment, {
                    children: (0, o(933047).nc)({
                        intl: n,
                        value: t
                    })
                })
            }

            function h(e) {
                let {
                    value: t,
                    format: n
                } = e, a = (0, o(109939).tz)();
                return (0, r.jsx)(r.Fragment, {
                    children: (0, o(933047)._T)({
                        intl: a,
                        value: t,
                        format: n
                    })
                })
            }
            let v = {
                display: "inline-flex",
                marginInlineEnd: 6
            };

            function x(e) {
                let {
                    groupValue: t,
                    propertySchema: n,
                    style: a
                } = e, l = (0, o(960253).I)(() => ({
                    container: { ...o(699422).RC,
                        fontWeight: o(699422).Wy.medium,
                        marginInlineEnd: 3,
                        display: "flex",
                        alignItems: "center",
                        ...a
                    }
                }), [a]);
                return "checkbox" !== t.type ? null : (0, r.jsxs)("div", {
                    style: l.container,
                    children: [(0, r.jsx)(o(349050).S, {
                        checked: t.value,
                        size: 14,
                        disabled: !0,
                        style: v
                    }), (0, r.jsx)("span", {
                        children: null == n ? void 0 : n.name
                    })]
                })
            }

            function b(e) {
                let {
                    groupValue: t,
                    style: n
                } = e, a = (0, o(960253).I)(() => ({
                    container: { ...l,
                        ...o(699422).RC,
                        ...n
                    }
                }), [n]);
                return t.value && (0, o(910675).DH)(t) ? (0, r.jsx)("div", {
                    style: a.container,
                    children: (0, r.jsx)(f, {
                        value: t.value
                    })
                }) : null
            }

            function S({
                groupValue: e,
                propertySchema: t,
                style: n
            }) {
                let a = (0, o(960253).I)(() => ({
                    container: { ...l,
                        ...n
                    }
                }), [n]);
                if ("number" !== e.type || !e.value) return null;
                let i = (null == t ? void 0 : t.number_format) || o(700369).C4;
                return (0, r.jsx)("div", {
                    style: a.container,
                    children: (0, r.jsx)(h, {
                        value: e.value,
                        format: i
                    })
                })
            }

            function C(e) {
                let {
                    groupFormat: t,
                    schema: n,
                    isHiddenGroup: a,
                    collectionContextStore: l,
                    style: i,
                    uncategorizedIconStyle: s,
                    parentStore: u
                } = e, d = n[t.property], p = (0, o(682985).K8)(() => l.collectionStore(), [l]), g = (0, o(682985).K8)(() => !!(null != p && p.isDefined() && d && (0, o(795e3).n)(d)) && !!u && (0, o(361435).Vu)({
                    collectionStore: p,
                    property: t.property,
                    propertySchema: d,
                    parentStore: u
                }), [p, t, d, u]);
                return d ? g ? (0, r.jsx)(c, {
                    style: i,
                    uncategorizedIconStyle: s,
                    isHiddenGroup: a,
                    formattedLabelMessage: (0, r.jsx)(o(109939).sA, { ...o(361435).zX.sprintUncategorizedGroup,
                        values: {
                            name: d.name
                        }
                    })
                }) : (0, r.jsx)(c, {
                    style: i,
                    uncategorizedIconStyle: s,
                    isHiddenGroup: a,
                    formattedLabelMessage: (0, r.jsx)(o(109939).sA, { ...o(933047).K0.emptyGroupLabel,
                        values: {
                            name: d.name
                        }
                    })
                }) : null
            }
            let w = {
                icon: {
                    marginTop: 2,
                    marginInlineEnd: 6
                },
                title: {
                    fontWeight: o(699422).Wy.medium
                }
            };

            function k(e) {
                let {
                    style: t,
                    collectionContextStore: n,
                    groupValue: a,
                    parentStore: l
                } = e, i = (0, o(834656).F)(n.capabilitiesStore, n.previewContextStore), s = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = n.collectionViewBlockStore()) ? void 0 : e.id
                }, [n]), u = l && "location" === a.type && a.value ? o(356912).m.createChildStore(l, a.value) : void 0, c = (0, o(682985).K8)(() => null == u ? void 0 : u.getParentBlockStore(), [u]), d = (0, o(682985).K8)(() => {
                    if (!s) return o(254656).y8.LocationProperty;
                    if ((0, o(829435).s)(s))
                        if (n.isInHomeWidgetStore.state) return o(254656).y8.PersonalHomeTileTasks;
                        else return o(254656).y8.PersonalHomePageTasks;
                    return o(254656).y8.LocationProperty
                }, [s, n]), p = (0, o(682985).K8)(() => c ? (0, o(483227).Ay)({
                    store: c,
                    fullyQualified: !1,
                    pageVisitSource: d
                }) : void 0, [c, d]), g = (0, o(682985).K8)(() => null == u ? void 0 : u.getIcon(), [u]), m = (0, o(960253).I)(() => ({
                    container: { ...t,
                        display: "flex"
                    }
                }), [t]);
                return "location" === a.type && a.value && l && u ? (0, r.jsxs)(o(590422).Q, {
                    href: p,
                    style: m.container,
                    ignoreLocalHoverState: !0,
                    disabled: !i,
                    children: [(0, r.jsx)(o(569553).B6, {
                        disabled: !0,
                        icon: g,
                        iconRecordCategory: "collection",
                        size: 20,
                        isEmptyPage: !1,
                        style: w.icon
                    }), (0, r.jsx)(o(627918).A, {
                        store: u,
                        underline: !0,
                        style: w.title
                    })]
                }) : null
            }

            function j(e) {
                let {
                    groupValue: t,
                    schema: a,
                    groupFormat: l,
                    collectionContextStore: i,
                    style: s,
                    parentStore: u,
                    relatedCollectionAppConfigUri: c
                } = e, d = a[l.property], p = (0, n.useMemo)(() => d && "relation" === d.type ? (0, o(390768).N)(d) : void 0, [d]), g = u && p ? o(356912).m.createChildStore(u, p) : void 0, m = (0, o(682985).K8)(() => null == g ? void 0 : g.isDefined(), [g]);
                return u && "relation" === t.type && d && "relation" === d.type && p && g && t.value ? (0, o(910675).zx)(t.value) ? c && m ? (0, r.jsx)(_, {
                    relatedCollectionAppUri: c,
                    groupValueInner: t.value,
                    collectionContextStore: i,
                    collectionPointer: p,
                    targetCollectionStore: g,
                    parentStore: u,
                    style: s
                }) : null : (0, o(910675).WO)(t.value) ? (0, r.jsx)(M, {
                    parentStore: u,
                    groupValueInner: t.value,
                    collectionContextStore: i
                }) : null : null
            }
            let A = {
                noPageStoreContainer: {
                    fontWeight: o(699422).Wy.medium
                },
                text: {
                    fontWeight: o(699422).Wy.medium,
                    marginBottom: .25
                }
            };

            function _(e) {
                var t;
                let a, {
                        relatedCollectionAppUri: i,
                        groupValueInner: s,
                        collectionContextStore: u,
                        collectionPointer: c,
                        targetCollectionStore: d,
                        parentStore: p,
                        style: g
                    } = e,
                    m = (0, o(109939).tz)(),
                    y = (0, o(533992).v3)(),
                    f = (0, o(834656).F)(u.capabilitiesStore, u.previewContextStore),
                    h = s.value.variable,
                    v = (0, o(682985).K8)(() => d.isDefined(), [d]),
                    x = (0, o(682985).K8)(() => (0, o(530095).ax)({
                        collectionContextStore: u,
                        variable: h,
                        targetCollectionPointer: c,
                        targetCollectionStore: d
                    }), [u, h, c, d]),
                    b = (0, o(682985).O$)(o(728372).AppStoreMainEditorCurrentBlockStore),
                    S = (0, o(682985).K8)(() => x ? (0, o(483227).Ay)({
                        store: x,
                        pageVisitSource: o(254656).y8.LinkInPage
                    }) : void 0, [x]),
                    C = (0, o(682985).K8)(() => x ? o(28630).wy({
                        environment: y,
                        store: x,
                        mainEditorCurrentBlockStore: b,
                        collectionContextStore: u
                    }) ? ? (0, o(483227).Ay)({
                        store: x,
                        pageVisitSource: o(254656).y8.LinkInPage
                    }) : void 0, [y, x, b, u]);
                "current" === h ? a = m.formatMessage(o(355940).DZ.tasksCurrentSprintV2ViewNamePrefix) : "next" === h ? a = m.formatMessage(o(355940).DZ.tasksNextSprintV2ViewNamePrefix) : "last" === h ? a = m.formatMessage(o(355940).DZ.tasksLastSprintV2ViewNamePrefix) : (0, o(722371).HB)(h);
                let w = null == (t = o(613211).n$[i]) ? void 0 : t[h],
                    k = (0, o(960253).I)(() => ({
                        linkContainer: { ...g,
                            marginInlineStart: 1,
                            ...l
                        }
                    }), [g]),
                    j = (0, n.useCallback)(e => {
                        if (S && (e.ctrlKey || e.metaKey)) {
                            e.preventDefault(), window.open(S, "_blank");
                            return
                        }(0, o(72762).o)({
                            collectionSettingsStore: u.settingsStore
                        })
                    }, [u.settingsStore, S]);
                if (v) {
                    if (!x) return (0, r.jsx)("div", {
                        style: A.noPageStoreContainer,
                        children: (0, r.jsx)(o(109939).sA, { ...null == w ? void 0 : w.messageDescriptor
                        })
                    });
                    if (x) return (0, r.jsxs)(o(4458).fI, {
                        alignItems: "center",
                        children: [(0, r.jsxs)("div", {
                            style: A.text,
                            children: [a, ":"]
                        }), (0, r.jsx)(o(590422).Q, {
                            style: k.linkContainer,
                            href: C,
                            onClick: j,
                            disabled: !f,
                            children: (0, r.jsx)(o(448860).A, {
                                format: o(72461).Ay.Format.Medium,
                                blockId: x.id,
                                isSingle: !0,
                                shouldShrink: !0,
                                parentStore: p,
                                disableLinks: !0
                            })
                        })]
                    })
                }
                return (0, r.jsx)("div", {
                    style: A.text,
                    children: (0, r.jsx)(o(109939).sA, { ...null == w ? void 0 : w.messageDescriptor
                    })
                })
            }

            function M(e) {
                let {
                    parentStore: t,
                    groupValueInner: a,
                    collectionContextStore: i,
                    style: s
                } = e, u = (0, o(533992).v3)(), c = (0, o(834656).F)(i.capabilitiesStore, i.previewContextStore), d = o(970831).B.createChildStore(t, a), p = (0, o(682985).O$)(o(728372).AppStoreMainEditorCurrentBlockStore), g = (0, o(682985).K8)(() => (0, o(483227).Ay)({
                    store: d,
                    pageVisitSource: o(254656).y8.LinkInPage
                }), [d]), m = (0, o(682985).K8)(() => o(28630).wy({
                    environment: u,
                    store: d,
                    mainEditorCurrentBlockStore: p,
                    collectionContextStore: i
                }) ? ? g, [u, d, p, i, g]), y = (0, o(960253).I)(() => ({
                    linkContainer: { ...s,
                        ...l
                    }
                }), [s]), f = (0, n.useCallback)(e => {
                    if (e.ctrlKey || e.metaKey) {
                        e.preventDefault(), window.open(g, "_blank");
                        return
                    }(0, o(72762).o)({
                        collectionSettingsStore: i.settingsStore
                    })
                }, [i.settingsStore, g]);
                return (0, r.jsx)(o(590422).Q, {
                    style: y.linkContainer,
                    href: m,
                    onClick: f,
                    disabled: !c,
                    children: (0, r.jsx)(o(448860).A, {
                        format: o(72461).Ay.Format.Medium,
                        blockId: a.id,
                        isSingle: !0,
                        shouldShrink: !0,
                        parentStore: t,
                        disableLinks: !0
                    })
                })
            }

            function I(e) {
                let {
                    schema: t,
                    currentGroups: a,
                    groupBy: l,
                    groupFormat: i,
                    onChange: s,
                    onClose: u,
                    buttonPopupStore: c,
                    parentStore: d
                } = e, p = (0, n.useCallback)(e => {
                    c.reset(), null == s || s(e)
                }, [c, s]), g = (0, n.useCallback)(() => {
                    c.reset(), null == u || u()
                }, [c, u]);
                return d ? (0, r.jsx)(o(480326).p, {
                    groupFormat: i,
                    groupBy: l,
                    currentGroups: a,
                    schema: t,
                    onChange: p,
                    onClose: g,
                    parentStore: d
                }) : null
            }

            function T(e) {
                let {
                    schema: t,
                    currentGroups: a,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    disabled: d,
                    style: p,
                    buttonPopupStore: g,
                    parentStore: m
                } = e, y = (0, o(960253).I)(() => ({
                    container: { ...l,
                        ...p
                    }
                }), [p]), f = (0, n.useCallback)(e => {
                    var n;
                    let a = t[s.property];
                    if (!a || !(0, o(532792).l)(a)) return null;
                    let l = s.value;
                    if (!(null != (n = a.options) && n.length) || void 0 === l.value || l.type !== a.type) return null;
                    let i = (0, o(561872).jy)(a.options, l.value);
                    return i ? (0, r.jsx)(o(64960).Ay, {
                        style: y.container,
                        disabled: d,
                        ...e,
                        children: (0, r.jsx)(o(593100).O, {
                            format: o(696654).NY.Medium,
                            isSingle: !0,
                            value: i.value,
                            color: i.color,
                            showRemoveButton: !1
                        })
                    }) : null
                }, [d, s.property, s.value, t, y.container]), h = (0, n.useCallback)(() => (0, r.jsx)(I, {
                    schema: t,
                    currentGroups: a,
                    groupBy: i,
                    groupFormat: s,
                    onChange: u,
                    onClose: c,
                    buttonPopupStore: g,
                    parentStore: m
                }), [t, a, i, s, u, c, g, m]);
                return (0, r.jsx)(o(656252).A, {
                    content: h,
                    disabled: d,
                    buttonPopupStore: g,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    originGap: 4,
                    children: f
                })
            }

            function V(e) {
                let {
                    groupValue: t,
                    schema: a,
                    currentGroups: i,
                    groupBy: s,
                    groupFormat: u,
                    onChange: c,
                    onClose: d,
                    disabled: p,
                    style: g,
                    isHiddenGroup: m,
                    buttonPopupStore: y,
                    parentStore: f,
                    collectionContextStore: h
                } = e, v = (0, o(682985).K8)(() => {
                    if (t.value && (0, o(910675).GG)(t) && f) return "space_permission_group" === t.value.table ? {
                        type: "space_permission_group",
                        value: (0, o(659341).S4)({
                            spacePermissionGroupId: t.value.id,
                            spaceId: t.value.spaceId
                        })
                    } : {
                        type: "actor",
                        value: (0, o(197018).xC)({
                            pointer: t.value,
                            getRecordValue: f.getRecordValue
                        })
                    }
                }, [t, f]), x = (0, o(682985).K8)(() => {
                    var e;
                    return null == (e = h.collectionStore()) ? void 0 : e.getSpaceStore()
                }, [h]), b = (0, o(960253).I)(() => ({
                    container: { ...l,
                        ...g
                    }
                }), [g]), S = (0, n.useCallback)(e => v && f ? "space_permission_group" === v.type ? (0, r.jsx)(o(64960).Ay, {
                    style: b.container,
                    disabled: p,
                    ...e,
                    children: (0, r.jsx)(o(11444).UISpacePermissionGroupToken, {
                        parentStore: f,
                        groupPointer: v.value,
                        format: o(72461).Ay.Format.Medium,
                        showRemoveButton: !1,
                        isSingle: !0,
                        disableAvatarTooltip: m,
                        shouldShrink: !0
                    }, v.value.id)
                }) : v.value.asActor ? (0, r.jsx)(o(64960).Ay, {
                    style: b.container,
                    disabled: p,
                    ...e,
                    children: (0, r.jsx)(o(72461).Ay, {
                        format: o(72461).Ay.Format.Medium,
                        actor: v.value,
                        showRemoveButton: !1,
                        isSingle: !0,
                        disableAvatarTooltip: m,
                        shouldShrink: !0,
                        hasPersonHoverCard: !0,
                        personHoverCardEntrypoint: "database_property",
                        spaceStore: x
                    })
                }) : null : null, [v, f, p, m, b.container, x]), C = (0, n.useCallback)(() => (0, r.jsx)(I, {
                    schema: a,
                    currentGroups: i,
                    groupBy: s,
                    groupFormat: u,
                    onChange: c,
                    onClose: d,
                    buttonPopupStore: y,
                    parentStore: f
                }), [a, i, s, u, c, d, y, f]);
                return (0, o(910675).GG)(t) && t.value && f && v && ("actor" !== v.type || v.value.asActor) ? (0, r.jsx)(o(656252).A, {
                    content: C,
                    disabled: p,
                    buttonPopupStore: y,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    originGap: 4,
                    children: S
                }) : null
            }

            function P(e) {
                let {
                    groupValue: t,
                    schema: l,
                    currentGroups: i,
                    groupBy: s,
                    groupFormat: u,
                    onChange: c,
                    onClose: d,
                    disabled: p,
                    style: m,
                    buttonPopupStore: y,
                    parentStore: f
                } = e, h = (0, o(960253).I)(() => ({
                    container: { ...a,
                        ...o(699422).RC,
                        ...m
                    }
                }), [m]), v = (0, n.useCallback)(e => (0, o(910675).kO)(t) && void 0 !== t.value ? (0, r.jsx)(o(64960).Ay, {
                    style: h.container,
                    disabled: p,
                    ...e,
                    children: (0, r.jsx)(g, {
                        value: t.value
                    })
                }) : null, [p, t, h.container]), x = (0, n.useCallback)(() => (0, r.jsx)(I, {
                    schema: l,
                    currentGroups: i,
                    groupBy: s,
                    groupFormat: u,
                    onChange: c,
                    onClose: d,
                    buttonPopupStore: y,
                    parentStore: f
                }), [l, i, s, u, c, d, y, f]);
                return (0, o(910675).kO)(t) && void 0 !== t.value ? "exact" === t.value.type ? (0, r.jsx)(o(656252).A, {
                    content: x,
                    disabled: p,
                    buttonPopupStore: y,
                    popupType: o(986939).A.isMobile ? o(656252).z.BottomSheet : o(656252).z.Popup,
                    originGap: 4,
                    children: v
                }) : (0, r.jsx)("div", {
                    style: a,
                    children: (0, r.jsx)(g, {
                        value: t.value
                    })
                }) : null
            }
        },
        920630: (e, t, o) => {
            o.d(t, {
                D: () => n
            });
            let n = (0, o(109939).YK)({
                copySuccessMessage: {
                    defaultMessage: "Link to view copied to clipboard",
                    id: "database.viewSettings.copyLinkSnackBarItem.title"
                },
                deletedView: {
                    defaultMessage: "{isViewNameEmpty, select, true {Deleted view} other {Deleted {viewName} view}}",
                    id: "database.viewSettings.deletedView"
                },
                deletedViewAndDataSource: {
                    defaultMessage: "{isViewNameEmpty, select, true {Deleted view and {dataSourceName} data source} other {Deleted {viewName} view and {dataSourceName} data source}}",
                    id: "database.viewSettings.deletedViewAndDataSource"
                }
            })
        },
        932540: (e, t, o) => {
            o.d(t, {
                S: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.67 2.67 10.66 15.64",
                    svg: (0, o(474848).jsx)("path", {
                        d: "M6.328 3c0-.18.145-.325.325-.325h6.694c.18 0 .325.146.325.325v.474c0 .948-.404 1.85-1.112 2.481l-.402.36.19 1.944.039.013a4.325 4.325 0 0 1 2.938 4.097V13c0 .18-.145.325-.325.325h-4.17v3.38a1.1 1.1 0 0 1-.1.46l-.44.956-.063.087a.35.35 0 0 1-.564-.103l-.432-.94a1.1 1.1 0 0 1-.1-.46v-3.38H5A.325.325 0 0 1 4.675 13v-.63a4.325 4.325 0 0 1 2.938-4.098l.039-.013.19-1.945-.402-.359a3.33 3.33 0 0 1-1.112-2.481z"
                    })
                },
                r = (0, o(104509).wt)("pinFill", n, "fill")
        },
        934080: (e, t, o) => {
            o.d(t, {
                J: () => r
            }), o(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.39 15.26 15.21",
                    svg: (0, o(474848).jsx)("path", {
                        d: "m10.775 2.583 2.475 2.475a.625.625 0 0 1 0 .884l-2.475 2.475a.625.625 0 1 1-.884-.884l1.408-1.408H4.8c-.649 0-1.175.526-1.175 1.175v5.975a.625.625 0 1 1-1.25 0V7.3A2.425 2.425 0 0 1 4.8 4.875h6.499L9.891 3.467a.625.625 0 0 1 .884-.884M17 6.1c.345 0 .625.28.625.625V12.7a2.425 2.425 0 0 1-2.425 2.425H8.7l1.408 1.408a.625.625 0 1 1-.884.884L6.75 14.942a.625.625 0 0 1 0-.884l2.475-2.475a.625.625 0 1 1 .884.884l-1.408 1.408H15.2c.649 0 1.175-.526 1.175-1.175V6.725c0-.345.28-.625.625-.625"
                    })
                },
                r = (0, o(104509).wt)("arrowSquareLeftRight", n, "default")
        },
        941329: (e, t, o) => {
            o.d(t, {
                m: () => a
            });
            var n = o(296540),
                r = o(474848);
            let a = n.memo(function(e) {
                    let {
                        store: t,
                        popupType: a,
                        dismissTooltip: l,
                        children: s,
                        placementToOrigin: u
                    } = e, c = (0, o(533992).v3)(), d = (0, o(713311).ET)(), p = (0, o(682985).uB)(void 0, o(510969).A), g = (0, n.useCallback)(() => {
                        (0, o(893783).X)({
                            environment: c,
                            collectionContextStore: d,
                            action: "click_topbar_templates_dropdown"
                        }), l && l()
                    }, [d, c, l]);
                    return (0, r.jsx)(o(656252).A, {
                        popupType: a,
                        bottomSheetInitialState: "half",
                        placementToOrigin: u,
                        alignmentToOrigin: "start",
                        content: () => (0, r.jsx)(i, {
                            store: t,
                            templateButtonPopupStore: p
                        }),
                        originGap: 4,
                        onClick: g,
                        buttonPopupStore: p,
                        children: s
                    })
                }),
                l = {
                    offlineMessage: {
                        fontSize: 14,
                        color: o(632079).Tj.text.secondary,
                        width: 280,
                        padding: 8
                    }
                };

            function i(e) {
                let {
                    store: t,
                    templateButtonPopupStore: a
                } = e, i = (0, o(533992).v3)(), s = (0, o(713311).ET)(), u = (0, o(682985).K8)(() => s.collectionStore(), [s]), c = s.settingsStore, d = (0, o(682985).O$)(o(205885).e), p = (0, o(682985).K8)(() => s.permissionScopesStore.state.canConfigureCollection, [s.permissionScopesStore]), g = (0, o(682985).K8)(() => (0, o(444285).S)(t), [t]), m = (0, n.useCallback)(e => {
                    (0, o(476087).U)({
                        userAction: "CollectionViewBlock.handleTemplateEmptyPageClick",
                        collectionViewBlockStore: t,
                        collectionContextStore: s,
                        environment: i,
                        shouldCoerce: !1,
                        from: {
                            createBlock: "cvb_template_empty_page"
                        },
                        templateStore: void 0
                    }), a.reset(), (0, o(72762).o)({
                        collectionSettingsStore: c
                    })
                }, [s, i, t, a, c]), y = (0, n.useCallback)(e => {
                    (0, o(476087).U)({
                        environment: i,
                        collectionContextStore: s,
                        collectionViewBlockStore: t,
                        templateStore: e.templateStore,
                        isKeyboard: e.isKeyboard,
                        from: {
                            createBlock: "cvb_template",
                            initCollection: "collection_view_block"
                        },
                        shouldCoerce: !0
                    }), a.reset(), (0, o(72762).o)({
                        collectionSettingsStore: c
                    })
                }, [i, s, t, a, c]), f = (0, n.useCallback)(() => {
                    a.reset()
                }, [a]);
                return u ? d ? (0, r.jsx)(o(434637).D, {
                    isOverlay: !0,
                    collectionStore: u,
                    canConfigureCollection: p,
                    onEmptyPageClick: m,
                    onEmptyEnter: m,
                    onTemplateClick: y,
                    onCancelClick: f,
                    locked: g
                }) : (0, r.jsx)("div", {
                    style: l.offlineMessage,
                    children: (0, r.jsx)(o(109939).sA, {
                        defaultMessage: "Please go online to use a template.",
                        id: "collectionViewBlock.actionBar.offlineTemplatePicker.message"
                    })
                }) : null
            }
        },
        941499: (e, t, o) => {
            o.d(t, {
                v: () => l
            }), o(944114), o(898992), o(803949), o(581454), o(296540);
            var n = () => o(288299),
                r = o(474848);
            let a = (0, o(109939).YK)({
                noneText: {
                    defaultMessage: "None",
                    id: "database.propertyAggregationMenu.noneText"
                },
                systemShowValuesText: {
                    defaultMessage: "Show values",
                    id: "database.rollupProperty.aggregate.showValues"
                },
                tableAggregationTooltip: {
                    defaultMessage: "Table aggregation",
                    id: "database.propertyAggregationMenu.tableAggregationTooltip"
                }
            });

            function l({
                onClose: e,
                property: t,
                schema: i,
                currentAggregation: s,
                source: u,
                noneText: c,
                onChange: g
            }) {
                let m, y = (0, o(533992).v3)(),
                    f = (0, o(109939).tz)();
                m = o(986939).A.isMobile ? {
                    menuType: o(649476).gu.Modal,
                    title: f.formatMessage(a.tableAggregationTooltip),
                    onClickRight: e
                } : {
                    menuType: o(649476).gu.Popup,
                    width: 200
                };
                let [h, v] = function({
                    property: e,
                    schema: t,
                    source: l,
                    intl: i,
                    onChange: s,
                    environment: u,
                    currentAggregation: c,
                    noneText: g
                }) {
                    let m = [],
                        y = 0,
                        f = 0,
                        h = null == c ? void 0 : c.aggregator,
                        v = ({
                            aggregationType: e,
                            enforceMaxAggregationLimit: t
                        }) => s({
                            aggregationType: e,
                            enforceMaxAggregationLimit: t
                        });
                    if ((0, o(26837).cl)(e)) {
                        let e = [];
                        return e.push({
                            key: "none",
                            render: e => (0, r.jsx)(o(95582).A, { ...e,
                                isChecked: !c,
                                title: i.formatMessage(a.systemShowValuesText)
                            }),
                            action: () => s({
                                aggregationType: void 0
                            })
                        }), e.push(p("count" === h, "count", v, !0)), [e, +("count" === h)]
                    }
                    let x = function({
                        property: e,
                        schema: t,
                        currentAggregationType: a,
                        onChangeWithLimit: l,
                        environment: i,
                        currentAggregation: s
                    }) {
                        let u = {},
                            c = t[e];
                        if (!c) return {};
                        for (let e of n().VD) u[e] = p(e === a, e, l);
                        if ((0, n().wG)(c))
                            for (let e of n().CG) u[e] = p(e === a, e, l);
                        if ((0, n().OC)(c))
                            for (let e of n().Sn) u[e] = p(e === a, e, l);
                        if ((0, n().fo)(c))
                            for (let e of n().zE) u[e] = p(e === a, e, l);
                        if ((0, n().s_)(c))
                            for (let e of o(745680).QO) u[e] = p(e === a, e, l);
                        if ((0, n().q0)(c))
                            for (let a of n().nJ) u[a] = function(e, t, a, l, i) {
                                let s = o(567224).zY[t],
                                    u = o(381453).oE(function(e, t, o, a, l) {
                                        let i = a[t];
                                        if (!i || "status" !== i.type) return;
                                        let s = i.groups;
                                        if (s) return s.map(t => {
                                            let a = (e && (0, n().ET)(e.aggregator) && e.aggregator.operator === o && e.aggregator.groupName === t.name) ? ? !1;
                                            return {
                                                key: `${o}${t.name}`,
                                                render: e => (0, r.jsx)(d, {
                                                    isSelected: a,
                                                    aggregationType: o,
                                                    label: t.name,
                                                    props: e
                                                }),
                                                action: () => {
                                                    l({
                                                        aggregationType: {
                                                            operator: o,
                                                            groupName: t.name
                                                        }
                                                    })
                                                }
                                            }
                                        })
                                    }(a, e, t, l, i)),
                                    c = 0;
                                if (a && (0, n().ET)(null == a ? void 0 : a.aggregator) && a.aggregator.operator === t) {
                                    let e = a.aggregator.groupName,
                                        o = u.findIndex(o => o.key === `${t}${e}`); - 1 !== o && (c = o)
                                }
                                return {
                                    key: t,
                                    render: (e, t) => (0, r.jsx)(o(816231).A, { ...e,
                                        onFocus: t.onFocus,
                                        popupTypeOverride: o(986939).A.isMobile ? o(423291).n.BottomSheet : void 0,
                                        bottomSheetInitialState: "half",
                                        renderExtension: (e, n) => {
                                            let a;
                                            return a = o(986939).A.isMobile ? {
                                                menuType: o(649476).gu.Modal,
                                                title: s,
                                                onClickRight: n.close,
                                                ...e
                                            } : {
                                                menuType: o(649476).gu.Popup,
                                                width: 200,
                                                ...e
                                            }, (0, r.jsx)(o(747369).A, { ...a,
                                                children: (0, r.jsx)(o(558045).A, {
                                                    type: o(558045).O.Vertical,
                                                    initialFocus: c,
                                                    sections: [{
                                                        key: "groups",
                                                        items: u
                                                    }],
                                                    onAccept: t.onAccept
                                                })
                                            })
                                        },
                                        children: e => (0, r.jsx)(o(95582).A, { ...e,
                                            title: s
                                        })
                                    }),
                                    action: () => null
                                }
                            }(e, a, s, t, l);
                        if ((0, n().pe)(c))
                            for (let e of n().A3) u[e] = p(e === a, e, l);
                        return u
                    }({
                        property: e,
                        schema: t,
                        currentAggregationType: h,
                        onChangeWithLimit: v,
                        environment: u,
                        currentAggregation: c
                    });
                    m.push({
                        key: "none",
                        render: e => (0, r.jsx)(o(95582).A, { ...e,
                            isChecked: !c,
                            title: g || i.formatMessage(a.noneText)
                        }),
                        action: () => s({
                            aggregationType: void 0
                        })
                    });
                    let b = "tableAggregation" === l ? 1 : 2;
                    return Object.entries(n().Kn).forEach(([e, t]) => {
                        let a = [];
                        for (let e of t)
                            if (x[e]) {
                                if ("show_unique" === e) switch (l) {
                                    case "tableAggregation":
                                        continue;
                                    case "rollupPropertyMenu":
                                        m.splice(1, 0, x[e]), (null == c ? void 0 : c.aggregator) === e && (y = 1);
                                        continue
                                }
                                a.push(x[e]), c && (0, n().ET)(null == c ? void 0 : c.aggregator) && c.aggregator.operator === e ? (y = b, f = a.length - 1) : (null == c ? void 0 : c.aggregator) === e && (y = b, f = a.length - 1)
                            }
                        let i = [];
                        if ("count_aggregations" === e && "tableAggregation" === l && i.push({
                                key: "limitToggleSection",
                                items: [function(e, t) {
                                    let {
                                        enforceMaxAggregationLimit: n,
                                        disabled: a
                                    } = e ? (0, o(567224).NT)(e) : {
                                        enforceMaxAggregationLimit: !1,
                                        disabled: !1
                                    };
                                    return {
                                        key: "aggregationLimitToggle",
                                        render: e => (0, r.jsx)(o(871486).A, {
                                            on: n,
                                            disabled: a,
                                            menuListItemProps: e
                                        }),
                                        action: () => {
                                            e ? t({
                                                aggregationType: e.aggregator,
                                                enforceMaxAggregationLimit: !n
                                            }) : t({
                                                aggregationType: "count",
                                                enforceMaxAggregationLimit: !0
                                            })
                                        }
                                    }
                                }(c, v)]
                            }), i.push({
                                key: "aggregations",
                                render: e => (0, r.jsx)(o(844565).A, {
                                    topBorder: !0,
                                    ...e
                                }),
                                items: a
                            }), a.length > 0) {
                            b++;
                            let t = o(567224).jA[e];
                            m.push({
                                key: t,
                                render: (e, n) => (0, r.jsx)(o(816231).A, { ...e,
                                    onFocus: n.onFocus,
                                    popupTypeOverride: o(986939).A.isMobile ? o(423291).n.BottomSheet : void 0,
                                    bottomSheetInitialState: "half",
                                    disableDefaultClick: !0,
                                    renderExtension: (e, a) => {
                                        let l;
                                        return l = o(986939).A.isMobile ? {
                                            menuType: o(649476).gu.Modal,
                                            title: t,
                                            onClickRight: a.close,
                                            ...e
                                        } : {
                                            menuType: o(649476).gu.Popup,
                                            width: 250,
                                            ...e
                                        }, (0, r.jsx)(o(747369).A, { ...l,
                                            children: (0, r.jsx)(o(558045).A, {
                                                type: o(558045).O.Vertical,
                                                initialFocus: f,
                                                sections: i,
                                                onAccept: (e, t, o) => {
                                                    "aggregationLimitToggle" !== e.key && (a.close(), n.onAccept && n.onAccept(e, t, o))
                                                }
                                            })
                                        })
                                    },
                                    children: (e, n) => (0, r.jsx)(o(95582).A, { ...e,
                                        ref: n,
                                        title: t
                                    })
                                }),
                                action: () => null
                            })
                        }
                    }), [m, y]
                }({
                    property: t,
                    schema: i,
                    source: u,
                    intl: f,
                    onChange: g,
                    environment: y,
                    currentAggregation: s,
                    noneText: c
                });
                return (0, r.jsx)(o(747369).A, { ...m,
                    children: (0, r.jsx)(o(558045).A, {
                        type: o(558045).O.Vertical,
                        initialFocus: v ? ? 0,
                        sections: [{
                            key: 0,
                            items: h
                        }],
                        onAccept: e
                    })
                })
            }
            let i = {
                    width: 140,
                    whiteSpace: "normal"
                },
                s = {
                    borderRadius: 4,
                    width: 140,
                    marginTop: 4
                },
                u = {
                    width: 140,
                    whiteSpace: "normal"
                },
                c = {
                    borderRadius: 4,
                    width: 140,
                    marginTop: 4
                };

            function d({
                isSelected: e,
                aggregationType: t,
                label: n,
                props: a
            }) {
                let l = o(567224).cx[t];
                return (0, r.jsx)(o(51831).m, {
                    placement: "right",
                    delayThreshold: 0,
                    content: () => (0, r.jsxs)("div", {
                        style: i,
                        children: [l ? (0, r.jsx)("img", {
                            src: (0, o(703003).L)(l),
                            style: s
                        }) : void 0, o(567224).fp[t]]
                    }),
                    children: t => (0, r.jsx)(o(95582).A, {
                        title: n,
                        isChecked: e,
                        ...(0, o(63390).A)(t, a)
                    })
                }, a.key)
            }

            function p(e, t, n, a) {
                let l = o(567224).zY[t],
                    i = o(567224).cx[t];
                return {
                    key: l,
                    render: n => (0, r.jsx)(o(51831).m, {
                        placement: "right",
                        delayThreshold: 0,
                        disableTooltip: a,
                        content: e => (0, r.jsxs)("div", { ...e,
                            style: u,
                            children: [i ? (0, r.jsx)("img", {
                                src: (0, o(703003).L)(i),
                                style: c
                            }) : void 0, o(567224).fp[t]]
                        }),
                        children: t => (0, r.jsx)(o(95582).A, {
                            title: l,
                            isChecked: e,
                            ...(0, o(63390).A)(t, n)
                        })
                    }, n.key),
                    action: () => {
                        n({
                            aggregationType: t
                        })
                    }
                }
            }
        },
        960235: (e, t, o) => {
            o.d(t, {
                J: () => l,
                z: () => a
            });
            let n = new(o(815048)).O2("CollectionSettingsUpsell", async () => o.e(9243).then(o.bind(o, 137838))),
                r = new(o(815048)).O2("CollectionSettingsUpsellMaybe", async () => o.e(9243).then(o.bind(o, 137838))),
                a = (0, o(815048)._h)(n, e => e.CollectionSettingsUpsell),
                l = (0, o(815048)._h)(r, e => e.CollectionSettingsUpsellMaybe)
        },
        962571: (e, t, o) => {
            function n(e) {
                let {
                    environment: t,
                    collectionContextStore: n,
                    event: r,
                    buttonPopupParent: a
                } = e, l = (0, o(28630).t2)(n.collectionStore());
                if (!l) return null;
                let i = (0, o(7029).V)(r);
                (0, o(79266).navigate)({
                    environment: t,
                    url: l,
                    openInNew: i
                }), i || null == a || a.close(), (0, o(893783).X)({
                    environment: t,
                    collectionContextStore: n,
                    action: "click_source_view"
                })
            }

            function r({
                environment: e,
                collectionStore: t,
                pageVisitSource: n,
                event: a
            }) {
                var l;
                let i = t.getParentBlockStore();
                if (!i) return;
                let s = null == (l = i.getCollectionViewStores()) ? void 0 : l.find(e => {
                        var o;
                        return (null == (o = e.getCollectionStore()) ? void 0 : o.id) === t.id
                    }),
                    u = (0, o(483227).J8)({
                        store: i,
                        fullyQualified: !1,
                        pageVisitSource: n,
                        collectionViewId: null == s ? void 0 : s.id
                    });
                (0, o(79266).navigate)({
                    environment: e,
                    url: u,
                    openInNew: (0, o(7029).V)(a)
                })
            }
            o.d(t, {
                S: () => r,
                q: () => n
            }), o(898992), o(672577)
        },
        968107: (e, t, o) => {
            o.d(t, {
                y: () => r
            }), o(296540);
            var n = o(474848);

            function r({
                dateNumber: e,
                ...t
            }) {
                let a = (0, o(897638).N)(e);
                return (0, n.jsx)(o(16275).I, {
                    icon: a,
                    size: "default",
                    ...t
                })
            }
        },
        978963: (e, t, o) => {
            o.d(t, {
                z: () => d
            });
            var n = o(296540),
                r = o(474848);
            let a = (0, o(109939).YK)({
                    defaultTitle: {
                        id: "openInNotionCalendarOnboardingTooltip.header",
                        defaultMessage: "Get Notion Calendar"
                    },
                    defaultContent: {
                        id: "openInNotionCalendarOnboardingTooltip.content",
                        defaultMessage: "View any Notion database with calendar and timeline views with your Google Calendar events"
                    },
                    connectCalendarTitle: {
                        id: "openInNotionCalendarOnboardingTooltip.connectCalendarTitle",
                        defaultMessage: "Connect Calendar"
                    },
                    successTitle: {
                        id: "openInNotionCalendarOnboardingTooltip.success.header",
                        defaultMessage: "Successfully connected"
                    },
                    successContent: {
                        id: "openInNotionCalendarOnboardingTooltip.success.content",
                        defaultMessage: "You can now view any database with calendar and timeline views in Notion Calendar"
                    }
                }),
                l = {
                    tooltip: {
                        width: 233
                    },
                    content: {
                        opacity: 1
                    },
                    contentInner: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 14
                    },
                    contentMessage: {
                        opacity: .8,
                        color: o(632079).Tj.text.inversePrimary
                    },
                    primaryButton: {
                        display: "flex",
                        alignItems: "center",
                        height: 24,
                        padding: "0 12px",
                        marginInlineStart: "auto",
                        borderRadius: 4,
                        background: "#FFF",
                        color: "#1D1B16",
                        fontSize: 12,
                        fontWeight: o(699422).Wy.medium,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    primaryButtonHover: {
                        background: "rgba(255,255,255,0.9)"
                    },
                    primaryButtonPressed: {
                        background: "rgba(255,255,255,0.8)"
                    }
                };

            function i(e) {
                let {
                    variant: t,
                    origin: n,
                    onCloseClick: i,
                    onConnectCalendarClick: s
                } = e;
                return (0, r.jsx)(o(788139).k, {
                    origin: n,
                    placementToOrigin: "bottom",
                    header: (0, r.jsx)(o(109939).sA, { ..."success" === t ? a.successTitle : a.defaultTitle
                    }),
                    content: (0, r.jsxs)("div", {
                        style: l.contentInner,
                        children: [(0, r.jsx)("div", {
                            style: l.contentMessage,
                            children: (0, r.jsx)(o(109939).sA, { ..."success" === t ? a.successContent : a.defaultContent
                            })
                        }), "default" === t ? (0, r.jsx)(o(4458).fI, {
                            alignItems: "center",
                            gap: 12,
                            children: (0, r.jsx)(o(64960).Ay, {
                                style: l.primaryButton,
                                hoveredStyle: l.primaryButtonHover,
                                pressedStyle: l.primaryButtonPressed,
                                onClick: s,
                                children: (0, r.jsx)(o(109939).sA, { ...a.connectCalendarTitle
                                })
                            })
                        }) : void 0]
                    }),
                    contentStyle: l.content,
                    onCloseClick: i,
                    shouldDismissUponOutsideClick: !1,
                    enableMouseCapture: !1,
                    pointerPosition: "33%",
                    style: l.tooltip
                })
            }

            function s({
                collectionSettingsStore: e,
                collectionStore: t,
                collectionViewStore: n,
                entrypoint: a,
                isFullScreenStore: l
            }) {
                let i = (0, o(533992).v3)(),
                    d = (0, o(682985).O$)(o(610463).X),
                    p = (0, o(682985).K8)(() => o(696190).default.isVisible("open_in_calendar_tooltip"), []),
                    g = (0, o(682985).K8)(() => {
                        let t = o(227947).A.state.open || e.state.open,
                            n = l.state,
                            r = o(475097).default.state.open;
                        return n && !t && !r && o(610463).A.state.loaded
                    }, [e, l]);
                (0, o(619772).A)(() => {
                    (0, o(376730).H)(i, "open_in_calendar_tooltip")
                }, g);
                let m = (0, o(643933).W)({
                    collectionViewStore: n,
                    collectionStore: t,
                    entrypoint: a
                });
                switch (a) {
                    case "calendar_view":
                    case "timeline_view":
                        return (0, r.jsx)(u, {
                            showTooltip: p,
                            hasConnectedCalendar: d,
                            openNotionCalendar: m
                        });
                    case "view_settings":
                        return (0, r.jsx)(c, {
                            openNotionCalendar: m
                        })
                }
            }

            function u(e) {
                let {
                    showTooltip: t,
                    hasConnectedCalendar: a,
                    openNotionCalendar: l
                } = e, s = (0, o(533992).v3)(), u = (0, n.useRef)(null), [c, d] = (0, n.useState)(!1), p = (0, n.useCallback)(() => {
                    (0, o(59579).a)(s, "open_in_calendar_tooltip")
                }, [s]), g = (0, o(897638).N)(), m = (0, n.useCallback)(() => {
                    d(!0), l()
                }, [l]);
                return (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(o(548436).A, {
                        size: "sm",
                        ref: u,
                        onClick: l,
                        iconLeading: g,
                        children: (0, r.jsx)(o(109939).sA, { ...o(120462).PQ.manageInCalendar
                        })
                    }), t ? (0, r.jsx)(i, {
                        variant: c || a ? "success" : "default",
                        origin: u,
                        onCloseClick: p,
                        onConnectCalendarClick: m
                    }) : void 0]
                })
            }

            function c(e) {
                let {
                    openNotionCalendar: t
                } = e;
                return (0, r.jsx)(o(209572).A, {
                    showChevron: !1,
                    icon: () => (0, r.jsx)(o(968107).y, {
                        colorVariant: "primary"
                    }),
                    onClick: () => t(),
                    right: (0, r.jsx)(o(16275).I, {
                        icon: o(759706).arrowDiagonalUpRightSmallIcon,
                        size: "sm",
                        colorVariant: "tertiary"
                    }),
                    title: (0, r.jsx)(o(109939).sA, { ...o(120462).PQ.manageInCalendar
                    })
                })
            }

            function d(e) {
                return (0, o(777065).K)(e) ? (0, r.jsx)(s, { ...e
                }) : null
            }
        }
    }
]);