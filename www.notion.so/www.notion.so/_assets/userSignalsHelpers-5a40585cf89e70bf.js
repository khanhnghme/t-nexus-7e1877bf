"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [84084], {
        483754: (e, a, t) => {
            t.d(a, {
                p: () => s
            });

            function s(e) {
                let {
                    recordMapWithRoleJson: a
                } = e, s = t(412951).RecordMapWithRole.create(a), i = t(412951).RecordMapWithRole.create();
                for (let {
                        pointer: e,
                        model: a
                    } of s) a && i.setModelAndRole(e, a, "editor");
                return i
            }
        },
        783782: (e, a, t) => {
            t.r(a), t.d(a, {
                clearPersonalizedPagesForSearch: () => d,
                computeSimilarUserRecentPagesState: () => r,
                fetchUserSignals: () => p,
                getSearchPersonalizationExperimentGroup: () => u,
                initializeAndLoadAllUserSignals: () => n,
                loadPersonalizedPagesForSearch: () => o,
                refreshAndBroadcastSimilarUserSignals: () => l,
                setUserSignals: () => g
            }), t(944114), t(898992), t(803949), t(581454);
            let s = 5 * t(627179).Xb;

            function i(e) {
                let a = t(218744).default.getEligibleGroup({
                    experimentId: e,
                    parameter: "editedPagesLookbackDays",
                    defaultGroup: "control"
                });
                return void 0 === a || "control" === a ? "1" : a
            }

            function r(e) {
                let a = {};
                return e.forEach(({
                    userId: e,
                    recentPages: s,
                    similarity: i
                }) => {
                    s.length && Object.entries(t(381453).$z(s, ({
                        pageId: e
                    }) => e)).forEach(([t, s]) => {
                        let r = s.map(({
                            visitedAt: e
                        }) => e).sort((e, a) => a - e);
                        a[t] || (a[t] = {
                            pageId: t,
                            sortedSimilarUserSignals: []
                        }), a[t].sortedSimilarUserSignals.push({
                            userId: e,
                            similarity: i,
                            visitedAt: r
                        })
                    })
                }), Object.values(a).forEach(e => {
                    e.sortedSimilarUserSignals.sort((e, a) => a.similarity - e.similarity)
                }), a
            }
            async function l(e) {
                var a;
                let {
                    spaceId: s,
                    userId: i,
                    environment: r
                } = e, l = await p({
                    spaceId: s,
                    environment: r,
                    signalsOverride: [{
                        name: "similarUserRecentPages",
                        includeRecords: !0
                    }, {
                        name: "similarUsersEditedPages",
                        includeRecords: !0,
                        lookbackDays: 1
                    }]
                });
                void 0 !== l && (g({
                    spaceId: s,
                    userId: i,
                    environment: r,
                    newSignals: l,
                    initialize: !1
                }), await (null == (a = t(915681).A.state.broadcastChannel) ? void 0 : a.postMessage({
                    type: "userSignals",
                    data: l
                })))
            }
            async function n(e) {
                let {
                    spaceId: a,
                    userId: i,
                    environment: r,
                    refreshTimer: n = s
                } = e, d = "control" === u() ? Promise.resolve() : o({
                    spaceId: a,
                    userId: i,
                    environment: r
                }), [c] = await Promise.all([p({
                    spaceId: a,
                    environment: r
                }), d]);
                if (void 0 !== c)
                    if (g({
                            spaceId: a,
                            userId: i,
                            environment: r,
                            newSignals: c,
                            initialize: !0
                        }), "on" === t(218744).default.getEligibleGroup({
                            experimentId: "search_refresh_user_signals",
                            defaultGroup: "control"
                        })) {
                        var m;
                        await t(383883).default.waitUntil(() => !!t(383883).default.getUserSignals({
                            spaceId: a,
                            userId: i
                        })), null == (m = t(915681).A.state.broadcastChannel) || m.addEventListener("message", e => {
                            "userSignals" === e.type && g({
                                spaceId: a,
                                userId: i,
                                environment: r,
                                newSignals: e.data,
                                initialize: !1
                            })
                        }), await t(915681).A.waitUntil(() => !!t(915681).A.state.elector), t(915681).A.state.elector.awaitLeadership().then(() => {
                            t(383883).default.update(e => {
                                e.refreshIntervalId && window.clearInterval(e.refreshIntervalId);
                                let t = window.setInterval(async () => {
                                    await l({
                                        spaceId: a,
                                        userId: i,
                                        environment: r
                                    })
                                }, n);
                                return { ...e,
                                    refreshIntervalId: t
                                }
                            })
                        })
                    } else t(383883).default.update(e => {
                        e.refreshIntervalId && window.clearTimeout(e.refreshIntervalId);
                        let t = window.setTimeout(async () => {
                            let e = await p({
                                spaceId: a,
                                environment: r
                            });
                            void 0 !== e && g({
                                spaceId: a,
                                userId: i,
                                environment: r,
                                newSignals: e,
                                initialize: !1
                            })
                        }, n);
                        return { ...e,
                            refreshIntervalId: t
                        }
                    })
            }
            async function o(e) {
                let {
                    spaceId: a,
                    userId: s,
                    environment: i,
                    experimentGroupOverride: r
                } = e, l = t(915681).A.state.personalizedPages.requestNumber + 1, n = u(r);
                t(915681).A.update(e => ({ ...e,
                    personalizedPages: { ...e.personalizedPages,
                        requestNumber: l
                    }
                }));
                let o = e => {
                    l === t(915681).A.state.personalizedPages.requestNumber && function(e) {
                        let {
                            pageStores: a,
                            clusters: s
                        } = e;
                        t(915681).A.update(e => ({ ...e,
                            personalizedPages: { ...e.personalizedPages,
                                stores: a,
                                clusters: s
                            }
                        }))
                    }(e)
                };
                if ("control" === n) return void o({
                    pageStores: [],
                    clusters: []
                });
                let d = await c({
                    environment: i,
                    spaceId: a
                });
                if (!d) return void o({
                    pageStores: [],
                    clusters: []
                });
                let g = [];
                for (let e of d.clusters) {
                    let r = await c({
                        environment: i,
                        spaceId: a,
                        clusterLabel: e.label,
                        limit: 10
                    });
                    if (!r) continue;
                    let l = function(e) {
                        let {
                            environment: a,
                            spaceId: s,
                            userId: i,
                            pageIds: r,
                            recordMap: l
                        } = e;
                        if (0 === r.length) return [];
                        let n = (0, t(483754).p)({
                                recordMapWithRoleJson: l
                            }),
                            o = new(t(870941)).A({
                                name: "search-personalized-pages-cache",
                                data: new(t(48202)).UserRecordMap({
                                    [i]: n
                                })
                            });
                        return o.addCacheFallback(a.defaultRecordCache.inMemoryRecordCache), r.map(e => new(t(970831)).B(a, {
                            table: "block",
                            id: e,
                            spaceId: s
                        }, {
                            inMemoryRecordCache: o
                        }))
                    }({
                        environment: i,
                        spaceId: a,
                        userId: s,
                        pageIds: r.pageIds,
                        recordMap: r.recordMap
                    });
                    g.push({
                        label: e.label,
                        topicLabel: e.topicLabel,
                        stores: l
                    })
                }
                o({
                    pageStores: g.flatMap(e => e.stores),
                    clusters: g
                })
            }

            function d() {
                t(915681).A.update(e => ({ ...e,
                    personalizedPages: {
                        stores: [],
                        clusters: [],
                        requestNumber: e.personalizedPages.requestNumber + 1
                    }
                }))
            }
            async function c(e) {
                let {
                    environment: a,
                    spaceId: t,
                    lastEditedTime: s,
                    clusterLabel: i
                } = e, r = e.limit ? ? 25, l = await a.api.callCellCompatibleApi({
                    eventName: "getPersonalizedPagesDoNotUse",
                    environment: a,
                    data: {
                        spaceId: t,
                        limit: r,
                        ...void 0 === s ? {} : {
                            lastEditedTime: s
                        },
                        ...void 0 === i ? {} : {
                            clusterLabel: i
                        }
                    },
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: t
                    }
                });
                if ("success" === l.type) return l.data
            }

            function u(e) {
                return "control"
            }

            function g(e) {
                let {
                    spaceId: a,
                    userId: s,
                    environment: i,
                    newSignals: r,
                    initialize: l
                } = e;
                r && (t(383883).default.setUserSignals({
                    spaceId: a,
                    userId: s,
                    userSignals: r,
                    initialize: l
                }), t(252116).G(i, l ? "userSignalsInitialization" : "userSignalsReload"))
            }
            async function p(e) {
                let {
                    spaceId: a,
                    environment: s,
                    signalsOverride: l
                } = e, n = i("search-local-edited-pages-max"), o = parseInt(i("search-local-sim-users-edited-pages-max")), d = parseInt(n), c = await s.api.callCellCompatibleApi({
                    eventName: "getUserSignals",
                    environment: s,
                    data: {
                        spaceId: a,
                        signals: l ? ? [{
                            name: "similarUserRecentPages",
                            includeRecords: !0
                        }, {
                            name: "topPages7dPageView",
                            includeRecords: !0
                        }, {
                            name: "editedPages",
                            includeRecords: !0,
                            lookbackDays: d
                        }, {
                            name: "similarUsersEditedPages",
                            includeRecords: !0,
                            lookbackDays: o
                        }, {
                            name: "inboxPages",
                            includeRecords: !0,
                            size: 25,
                            type: "unread_and_read"
                        }]
                    },
                    cellNavigation: {
                        cellId: void 0,
                        recordId: void 0,
                        spaceId: a
                    }
                });
                if ("success" !== c.type) return;
                let u = l ? t(381453).Up((0, t(383883).getInitialUserSignalsState)(), l.map(e => e.name)) : (0, t(383883).getInitialUserSignalsState)();
                return c.data.signals.forEach(e => {
                    if ("error" !== e.status) switch (e.name) {
                        case "similarUserRecentPages":
                            u.similarUserRecentPages = r(e.data);
                            break;
                        case "recentPages":
                            u.recentPages = e.data;
                            break;
                        case "topPages7dPageView":
                            u.topPages7dPageView = e.data;
                            break;
                        case "similarUsersEditedPages":
                            u.similarUsersEditedPages = e.data;
                            break;
                        case "editedPages":
                            u.editedPages = e.data;
                            break;
                        case "inboxPages":
                            u.inboxPages = e.data
                    }
                }), u
            }
        }
    }
]);