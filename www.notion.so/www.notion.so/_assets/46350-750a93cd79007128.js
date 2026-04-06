"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [46350], {
        219083: (e, t, r) => {
            function o(e, t) {
                let o = r(371562).create({
                    arrays: {
                        detectMove: !1,
                        includeValueOnMove: !0
                    }
                }).diff(e, t);
                if (!o) return {
                    beforeOps: {},
                    removeOps: new Set
                };
                let l = [],
                    n = [];
                for (let e in o) "_t" !== e && ("_" === e[0] ? l.push(parseInt(e.slice(1), 10)) : 1 === o[e].length && n.push({
                    index: parseInt(e, 10),
                    value: o[e][0]
                }));
                let i = {},
                    s = new Set,
                    a = [...e];
                l = l.sort((e, t) => e - t);
                for (let e = l.length - 1; e >= 0; e--) {
                    let t = l[e],
                        r = a.splice(t, 1)[0];
                    s.add(r)
                }
                n = n.sort((e, t) => e.index - t.index);
                for (let e = 0; e < n.length; e++) {
                    let t = n[e];
                    i[t.value] = a[t.index], a.splice(t.index, 0, t.value)
                }
                return {
                    beforeOps: i,
                    removeOps: s
                }
            }
            r.d(t, {
                i: () => o
            }), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(371562)
        },
        340661: (e, t, r) => {
            function o(e) {
                let {
                    environment: t,
                    collectionStore: r,
                    duplicate: o,
                    droppedStores: l,
                    transaction: n,
                    duplicateActions: i,
                    existingBlocks: s,
                    handleDropModule: a
                } = e, {
                    movedStores: u,
                    reparentedStores: d
                } = l.reduce((e, t) => (o || t.getAssociatedCollectionId() !== (null == r ? void 0 : r.id) ? e.reparentedStores.push(t) : e.movedStores.push(t), e), {
                    movedStores: [],
                    reparentedStores: []
                });
                return [...u, ...a ? a.handleDrop({
                    environment: t,
                    droppedStores: d,
                    duplicate: o,
                    transaction: n,
                    resolveTemplateVariables: !1,
                    duplicateActions: i,
                    targetStore: r,
                    existingBlocks: s
                }) : []]
            }
            r.d(t, {
                T: () => o
            }), r(944114), r(898992), r(908872)
        },
        505019: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            var o = r(296540),
                l = r(474848);
            let n = o.memo(function(e) {
                let {
                    resultStore: t,
                    render: n,
                    ...i
                } = e, s = (0, r(835703).A)(i), a = (0, r(682985).uB)(t, r(546605).Store.createClass(void 0)), u = (0, r(682985).K8)(() => e.collectionContextStore.collectionViewStore(), [e.collectionContextStore]);
                (0, o.useEffect)(() => {
                    a.setState(s);
                    let t = e.reducer;
                    "groups" === t.type && (null == s ? void 0 : s.type) === "groups" && e.collectionContextStore.groupsStore.setGroupBlockResults(t, s)
                }, [e.collectionContextStore.groupsStore, e.reducer, s, a, u]);
                let d = (0, r(682985).K8)(() => n ? n(a) : null, [n, a], {
                    silenceRerenderDefender: !0
                });
                return (0, l.jsx)(l.Fragment, {
                    children: d
                })
            })
        },
        641993: (e, t, r) => {
            r.d(t, {
                Q: () => n,
                a: () => i
            });
            var o, l = () => r(546605);
            let n = ((o = {})[o.Left = 0] = "Left", o[o.Right = 1] = "Right", o);
            class i extends l().Store {
                getInitialState() {
                    return {
                        dayStoreMap: new Map,
                        isDragging: !1,
                        startingMonth: 0
                    }
                }
            }
        },
        793358: (e, t, r) => {
            r.d(t, {
                $N: () => y,
                D5: () => v,
                GB: () => g,
                M9: () => c,
                Pt: () => S,
                eW: () => f,
                jo: () => h,
                v7: () => p
            }), r(944114), r(898992), r(803949), r(581454);
            var o = () => r(561872),
                l = () => r(832375),
                n = () => r(85868),
                i = () => r(188993),
                s = () => r(28630),
                a = () => r(124937),
                u = () => r(579695),
                d = () => r(41403);

            function c(e) {
                var t, d, c, p, g, f, S;
                let {
                    environment: y,
                    droppedStores: R,
                    duplicate: h,
                    calendarBy: _,
                    transaction: b,
                    collectionContextStore: C,
                    duplicateActions: k
                } = e, P = r(906745).DateTime.fromMillis(e.startOfDay), V = !0;
                if (null != (t = C.collectionStore()) && t.isExternalSyncedCollection()) return;
                for (let t of R) {
                    let r = e.collectionStore ? e.collectionStore : (0, s().Dj)({
                        store: t,
                        collectionContextStore: C
                    });
                    if (t.getParentTable() === l().VlP || !r) {
                        V = !1;
                        break
                    }
                    u().X$({
                        childStore: t,
                        parentStore: r,
                        transaction: b
                    }) || (V = !1)
                }
                let w = [],
                    M = r(218744).default.checkGate({
                        gateName: "duplicate_subtree_advanced_flows"
                    }),
                    D = h && M;
                if (D)
                    for (let t of R) {
                        let r = e.collectionStore ? e.collectionStore : (0, s().Dj)({
                            store: t,
                            collectionContextStore: C
                        });
                        if (!r) continue;
                        let l = r.getMappedProperty(_),
                            g = m({
                                store: t,
                                mappedCalendarBy: l,
                                startOfDay: P
                            });
                        if (!g) continue;
                        let f = a().Wv({
                            environment: y,
                            type: "page",
                            inMemoryRecordCache: t.inMemoryRecordCache,
                            transaction: b,
                            spaceId: r.getSpaceId(),
                            properties: {
                                [l]: o().m5(g)
                            }
                        });
                        u().X$({
                            childStore: f,
                            parentStore: r,
                            transaction: b
                        }), (0, i().j)({
                            environment: y,
                            store: f,
                            collectionStore: r,
                            collectionContextStore: C,
                            shouldCoerce: !0,
                            groupsPointer: [],
                            transaction: b,
                            alreadyMovedToCollection: V
                        }), (0, n().E)({
                            environment: y,
                            collection_id: null == (d = C.collectionStore()) ? void 0 : d.id,
                            collection_view_id: null == (c = C.collectionViewStore()) ? void 0 : c.id,
                            collection_view_block_id: null == (p = C.collectionViewBlockStore()) ? void 0 : p.id,
                            block_id: f.id,
                            property: l,
                            property_type: "date",
                            from: "calendar"
                        }), w.push(f)
                    }
                let T = (0, r(340661).T)({
                    environment: y,
                    droppedStores: R,
                    duplicate: h,
                    transaction: b,
                    collectionStore: e.collectionStore,
                    duplicateActions: k,
                    existingBlocks: w
                });
                if (!D)
                    for (let t of T) {
                        let r = e.collectionStore ? e.collectionStore : (0, s().Dj)({
                            store: t,
                            collectionContextStore: C
                        });
                        if (!r) continue;
                        let o = r.getMappedProperty(_),
                            l = m({
                                store: t,
                                mappedCalendarBy: o,
                                startOfDay: P
                            });
                        l && ((0, i().j)({
                            environment: y,
                            store: t,
                            collectionStore: r,
                            collectionContextStore: C,
                            shouldCoerce: !0,
                            groupsPointer: [],
                            transaction: b,
                            alreadyMovedToCollection: V
                        }), v({
                            environment: y,
                            type: "dateValue",
                            propertyId: o,
                            store: t,
                            transaction: b,
                            dateValue: l
                        }), (0, n().E)({
                            environment: y,
                            collection_id: null == (g = C.collectionStore()) ? void 0 : g.id,
                            collection_view_id: null == (f = C.collectionViewStore()) ? void 0 : f.id,
                            collection_view_block_id: null == (S = C.collectionViewBlockStore()) ? void 0 : S.id,
                            block_id: t.id,
                            property: o,
                            property_type: "date",
                            from: "calendar"
                        }))
                    }
            }

            function p(e) {
                let {
                    calendarStore: t,
                    direction: r,
                    targetStore: o
                } = e;
                t.setState({ ...t.state,
                    isDragging: !0,
                    targetStore: o,
                    direction: r,
                    temporaryValue: void 0
                })
            }

            function g(e) {
                let {
                    calendarStore: t,
                    x: o,
                    y: l,
                    calendarBy: n
                } = e, i = t.state;
                if (i.isDragging) {
                    let e, s = (0, r(179358).b)(i.targetStore.getPropertyStore(n).getValue());
                    if (!s) return;
                    let a = r(25825).kW(s, (0, r(714350).P)()),
                        u = i.temporaryValue || s,
                        d = r(25825).kW(u, (0, r(714350).P)()),
                        c = [];
                    i.dayStoreMap.forEach((e, t) => {
                        c.push({
                            store: e,
                            timestamp: t
                        })
                    });
                    let p = c.find(({
                        store: e
                    }) => {
                        let t = r(240414).T.getRectFromStore(e);
                        return !!(t && r(195304).ux(t, o, l))
                    });
                    if (p) {
                        let t = r(906745).DateTime.fromMillis(p.timestamp),
                            o = t.endOf("day"),
                            l = t.toFormat(r(25825).tr);
                        if (a) {
                            let n = r(25825).AA(a, (0, r(714350).P)());
                            if (i.direction === r(641993).Q.Left)
                                if (r(906745).IX.fromDateTimes(t, o).contains(n.start)) e = a;
                                else {
                                    let t;
                                    t = "datetimerange" === a.type || "daterange" === a.type ? { ...a,
                                        start_date: l,
                                        end_date: a.end_date
                                    } : "datetime" === a.type ? {
                                        type: "datetimerange",
                                        start_date: l,
                                        start_time: a.start_time,
                                        end_date: a.start_date,
                                        end_time: a.start_time,
                                        time_zone: a.time_zone,
                                        reminder: a.reminder
                                    } : {
                                        type: "daterange",
                                        start_date: l,
                                        end_date: a.start_date,
                                        reminder: a.reminder
                                    };
                                    let o = r(25825).AA(t, (0, r(714350).P)());
                                    e = !n.end && o.start > n.start || n.end && o.start > n.end ? d : t
                                }
                            else if (n.end ? r(906745).IX.fromDateTimes(t, o).contains(n.end) : r(906745).IX.fromDateTimes(t, o).contains(n.start)) e = a;
                            else {
                                let t;
                                t = "date" === a.type ? { ...a,
                                    type: "daterange",
                                    end_date: l
                                } : "datetime" === a.type ? { ...a,
                                    type: "datetimerange",
                                    end_date: l,
                                    end_time: "00:00"
                                } : { ...a,
                                    end_date: l
                                };
                                let o = r(25825).AA(t, (0, r(714350).P)());
                                e = o.end && o.end < o.start ? d : t
                            }
                        }
                    }
                    if (e && !r(381453).n4(d, e)) {
                        let o = r(25825).kW(e, r(943003).$K(u) || (0, r(714350).P)());
                        t.setState({ ...i,
                            temporaryValue: o
                        })
                    }
                }
            }

            function f(e) {
                let {
                    environment: t,
                    calendarStore: r,
                    calendarBy: o,
                    transaction: l
                } = e, n = r.state;
                n.isDragging && n.temporaryValue && (v({
                    type: "dateValue",
                    environment: t,
                    dateValue: n.temporaryValue,
                    propertyId: o,
                    store: n.targetStore,
                    transaction: l
                }), r.setState({ ...r.state,
                    isDragging: !1
                }))
            }

            function S(e) {
                let {
                    calendarStore: t
                } = e, r = t.state;
                r.isDragging && t.setState({ ...r,
                    isDragging: !1
                })
            }

            function y(e) {
                let t, {
                        environment: l,
                        store: n,
                        collectionStore: s,
                        collectionContextStore: a,
                        startDayOfWeek: u,
                        transaction: d
                    } = e,
                    c = a.dateRangeStartStore.state,
                    p = (0, r(714350).P)(),
                    g = a.normalizedQueryStore.state;
                if (!g || !g.calendar_by) return;
                let f = (null == s ? void 0 : s.getMappedProperty(g.calendar_by)) ? ? g.calendar_by,
                    S = r(25825).hp(c, u, p),
                    y = S.startOf("month"),
                    m = S.endOf("month"),
                    v = r(906745).DateTime.now().startOf("day");
                return t = r(906745).IX.fromDateTimes(y, m).contains(v) ? r(25825).p6(v.valueOf(), p) : r(25825).p6(r(25825).iB(c, u, p).valueOf(), p), (0, r(173157).z)({
                    store: n.getPropertiesStore(),
                    data: {
                        [f]: o().m5(t)
                    },
                    transaction: d
                }), (0, i().j)({
                    environment: l,
                    store: n,
                    collectionStore: s,
                    collectionContextStore: a,
                    shouldCoerce: !0,
                    groupsPointer: [],
                    transaction: d
                }), n
            }

            function m(e) {
                let t, {
                        store: o,
                        mappedCalendarBy: l,
                        startOfDay: n
                    } = e,
                    i = o.getPropertyStore(l),
                    s = (0, r(179358).b)(i.getValue()) || r(25825).Ec((0, r(714350).P)()),
                    a = r(25825).kW(s, (0, r(714350).P)()),
                    u = n.toFormat(r(25825).tr);
                if ("date" === a.type || "datetime" === a.type) t = { ...a,
                    start_date: u
                };
                else {
                    let e = r(25825).AA(a, (0, r(714350).P)());
                    if (!e.end) return;
                    let o = { ...a,
                            start_date: u
                        },
                        l = r(25825).AA(o, (0, r(714350).P)()).start.diff(e.start, "days"),
                        n = e.end.plus(l).toFormat(r(25825).tr);
                    t = { ...a,
                        start_date: u,
                        end_date: n
                    }
                }
                return r(25825).kW(t, r(943003).$K(s) || (0, r(714350).P)())
            }

            function v(e) {
                let t, {
                    environment: l,
                    store: n,
                    propertyId: i,
                    transaction: s
                } = e;
                "timestamp" === e.type ? t = r(25825).p6(e.timestampMs.valueOf(), (0, r(714350).P)()) : "dateValue" === e.type ? t = e.dateValue : (0, r(722371).HB)(e);
                let a = n.getPropertyValue(i);
                if (t && function(e) {
                        let {
                            propertyId: t,
                            oldDateValue: r,
                            newPersistedDate: o,
                            store: l
                        } = e;
                        return !r && !!o && void 0 === o.reminder && void 0 !== R(t, l)
                    }({
                        propertyId: i,
                        oldDateValue: a,
                        newPersistedDate: t,
                        store: n
                    })) {
                    let e = R(i, n);
                    void 0 !== e && (t = { ...t,
                        reminder: e
                    })
                }
                let u = o().m5(t);
                (0, r(173157).z)({
                    store: n.getPropertiesStore(),
                    data: {
                        [i]: u
                    },
                    transaction: s
                }), r(977906).O4({
                    environment: l,
                    store: n,
                    dateProperty: {
                        id: i,
                        oldValue: a,
                        newValue: u
                    }
                })
            }

            function R(e, t) {
                let r = t.getAssociatedCollectionStore();
                if (!r) return;
                let o = r.getSchema();
                if (!o) return;
                let l = o[e];
                if (l && "date" === l.type) return l.default_reminder
            }

            function h(e) {
                let {
                    environment: t,
                    collectionStore: o,
                    calendarBy: l,
                    store: n,
                    insertStores: s,
                    collectionContextStore: a,
                    transaction: u
                } = e, c = n.getPropertyStore(l).getValue();
                for (let e of s)(0, i().j)({
                    environment: t,
                    store: e,
                    collectionStore: o,
                    collectionContextStore: a,
                    shouldCoerce: !0,
                    groupsPointer: [],
                    transaction: u
                }), d().R9({
                    environment: t,
                    store: e.getPropertyStore(l),
                    value: c,
                    transaction: u
                });
                return s.map(e => r(970831).B.createChildStore(o, e.pointer))
            }
        },
        835703: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577);
            var o = r(296540);

            function l(e) {
                let t, {
                        reducerId: o,
                        instanceId: l,
                        reducer: n,
                        collectionContextStore: i
                    } = e,
                    s = i.reducersStore.state,
                    a = s[o];
                if (n) t = {
                    instanceIds: r(381453).sb([...(null == a ? void 0 : a.instanceIds) || [], l]),
                    reducer: n
                };
                else {
                    let e = r(381453).FF((null == a ? void 0 : a.instanceIds) || [], l);
                    t = a && e.length > 0 ? {
                        instanceIds: e,
                        reducer: a.reducer
                    } : void 0
                }
                r(381453).n4(a, t) || i.reducersStore.setState({ ...s,
                    [o]: t
                })
            }

            function n(e) {
                let {
                    id: t,
                    reducer: n,
                    collectionContextStore: i,
                    groupsPointer: s,
                    debounceWait: a,
                    isDerivedReducer: u,
                    resultLookupFn: d
                } = e, c = (0, r(482170).l)(s), p = (0, r(482170).l)(n), g = (0, r(682985).K8)(() => i.collectionViewStore(), [i]), f = (0, r(682985).K8)(() => i.normalizedFormatStore.state.collection_pointer, [i.normalizedFormatStore]), S = (0, r(682985).K8)(() => {
                    var e;
                    return null == g || null == (e = g.getFormatStore()) ? void 0 : e.getKeyStore("collection_view_source").getValue()
                }, [g]), y = (0, o.useRef)(!1), m = (0, r(396805).O)(), [v, R] = (0, o.useReducer)((e, t) => r(381453).n4(e, t) ? e : t, void 0), h = (0, o.useCallback)(() => {
                    let e = i.localResultStore.state,
                        o = i.remoteResultStore.state,
                        l = e && "reducer" === e.type ? (null == d ? void 0 : d(e.reducerResults, c)) ? ? e.reducerResults[t] : void 0,
                        n = o && "reducer" === o.type ? (null == d ? void 0 : d(o.reducerResults, c)) ? ? o.reducerResults[t] : void 0;
                    return function(e) {
                        let {
                            reducerId: t,
                            localReducerResult: o,
                            remoteReducerResult: l,
                            collectionContextStore: n,
                            reducer: i
                        } = e, s = n.reducersStore.state, a = n.remoteResultStore.state;
                        if (n.isClientModeEnabledStore.state) return o;
                        let u = n.isCreatingNewChartCollectionStore.state,
                            d = n.wasCreatedThisSessionStore.state;
                        if ("aggregation" === i.type) return u && d ? (l && "aggregation" === l.type && "number" === l.aggregationResult.type && 0 !== l.aggregationResult.value && n.isCreatingNewChartCollectionStore.setState(!1), o) : l || (a && "reducer" === a.type && Object.entries(a.reducerResults).find(([e, t]) => {
                            let o = s[e];
                            return !!o && !!("results" === o.reducer.type && !o.reducer.searchQuery && "results" === t.type && !t.hasMore && r(381453).n4(i.filter, o.reducer.filter))
                        }) ? o : l);
                        if ("groups" === i.type) {
                            if (u && d) return l && "groups" === l.type && l.hasMore && n.isCreatingNewChartCollectionStore.setState(!1), o;
                            if (o && "groups" !== o.type || l && "groups" !== l.type) return;
                            return function(e) {
                                var t, o;
                                let l, n, i, {
                                    reducerId: s,
                                    reducer: a,
                                    collectionContextStore: u,
                                    wasCreatedThisSession: d,
                                    localReducerResult: c,
                                    remoteReducerResult: p
                                } = e;
                                if (!a.blockResults && !s.includes(r(910675).RO)) return p;
                                a.aggregation && (p ? l = p.aggregationResults : c && (l = c.aggregationResults));
                                let g = null == (t = u.collectionViewStore()) ? void 0 : t.getCollectionSource(),
                                    f = (0, r(213832).TR)(g) || (0, r(213832).hJ)(g),
                                    S = !!(p && p.blockResults);
                                if (a.blockResults) {
                                    if ((S || d) && !f && c && c.blockResults) {
                                        let e = c.blockResults,
                                            t = (null == p ? void 0 : p.blockResults) ? ? {},
                                            r = new Set([...Object.keys(e), ...Object.keys(t)]),
                                            o = {};
                                        for (let l of r) {
                                            let r = e[l],
                                                n = t[l],
                                                i = [];
                                            e ? i = (null == r ? void 0 : r.blockIds) ? ? [] : t && (i = (null == n ? void 0 : n.blockIds) ? ? []);
                                            let s = !1;
                                            n ? s = null == n ? void 0 : n.hasMore : r && (s = null == r ? void 0 : r.hasMore), o[l] = {
                                                blockIds: i,
                                                hasMore: s
                                            }
                                        }
                                        n = o
                                    }
                                    n || (n = u.forceLocalQueryCollection || f ? null == p ? void 0 : p.blockResults : null == c ? void 0 : c.blockResults)
                                }
                                c && c.pinnedResults && (i = c.pinnedResults), p && p.pinnedResults && (i = {
                                    groupResults: p.pinnedResults.groupResults,
                                    ...i,
                                    aggregationResults: p.pinnedResults.aggregationResults
                                });
                                let y = p ? p.hasMore : !!(null == c ? void 0 : c.hasMore),
                                    m = p ? p.hasMoreSubGroups : null == c ? void 0 : c.hasMoreSubGroups,
                                    v = f ? (null == p ? void 0 : p.results) ? ? [] : (null == c ? void 0 : c.results) ? ? (null == p ? void 0 : p.results) ? ? [],
                                    R = f ? (null == p ? void 0 : p.subGroupResults) ? ? [] : (null == c ? void 0 : c.subGroupResults) ? ? (null == p ? void 0 : p.subGroupResults),
                                    h = a.groupBy;
                                p && ("relation" === h.type || "formula" === h.type && "relation" === h.groupBy.type) && (v = p.results);
                                let _ = null == (o = a.subGroup) ? void 0 : o.groupBy;
                                return p && ((null == _ ? void 0 : _.type) === "relation" || (null == _ ? void 0 : _.type) === "formula" && "relation" === _.groupBy.type) && (R = p.subGroupResults), u.forceLocalQueryCollection && (v = (null == p ? void 0 : p.results) ? ? (null == c ? void 0 : c.results) ? ? [], R = (null == p ? void 0 : p.subGroupResults) ? ? (null == c ? void 0 : c.subGroupResults)), {
                                    type: "groups",
                                    version: "v2",
                                    results: v,
                                    subGroupResults: R,
                                    pinnedResults: i,
                                    hasMore: y,
                                    hasMoreSubGroups: m,
                                    blockResults: n,
                                    aggregationResults: l
                                }
                            }({
                                reducerId: t,
                                collectionContextStore: n,
                                reducer: i,
                                wasCreatedThisSession: d,
                                localReducerResult: o,
                                remoteReducerResult: l
                            })
                        }
                        if ("results" === i.type) {
                            var c;
                            let e = n.wasCreatedThisSessionStore.state,
                                i = !!(a && "reducer" === a.type && a.reducerResults[t]),
                                s = null == (c = n.collectionViewStore()) ? void 0 : c.getCollectionSource(),
                                u = (0, r(962165).c)({
                                    collectionContextStore: n
                                }),
                                d = (0, r(213832).TR)(s) || (0, r(213832).hJ)(s);
                            return (i || e) && (!d || u) && o && "results" === o.type ? { ...o,
                                hasMore: l && "results" === l.type ? l.hasMore : o.hasMore
                            } : l
                        }
                    }({
                        reducerId: t,
                        collectionContextStore: i,
                        reducer: p,
                        localReducerResult: l,
                        remoteReducerResult: n
                    })
                }, [i, c, p, t, d]), _ = (0, o.useCallback)(() => {
                    y.current = !1, m.current || R(h())
                }, [h, m]), b = (0, o.useCallback)(() => {
                    y.current || (y.current = !0, r(374176).default.afterNextFlush(_))
                }, [_]), [C] = (0, o.useState)(() => (0, r(698596).Ay)());
                return (0, o.useEffect)(() => {
                    let e = a ? (0, r(381453).sg)(b, a, {
                        leading: !0
                    }) : b;
                    return i.remoteResultStore.addListener(b), i.localResultStore.addListener(e), () => {
                        i.remoteResultStore.removeListener(b), i.localResultStore.removeListener(e)
                    }
                }, [i, b, a]), (0, o.useEffect)(() => {
                    if (!u) return l({
                        reducerId: t,
                        instanceId: C,
                        reducer: p,
                        collectionContextStore: i
                    }), () => {
                        l({
                            reducerId: t,
                            instanceId: C,
                            reducer: void 0,
                            collectionContextStore: i
                        })
                    }
                }, [i, g, f, S, p, t, C, u]), (0, o.useEffect)(() => {
                    b()
                }, []), (0, o.useEffect)(() => (i.timingTracker.mountCollectionReducerRequest(t, p.type), () => {
                    i.timingTracker.unmountCollectionReducerRequest(t)
                }), [i, t, p]), v
            }
        }
    }
]);