"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [48578, 88980], {
        419218: (e, t, r) => {
            r.r(t), r.d(t, {
                getCustomAgents: () => o,
                getWorkflowSearchText: () => a().getWorkflowSearchText,
                initializeWorkflowDataCache: () => c,
                isAgentEsSearchEnabled: () => s,
                searchAgentsViaSearchApi: () => i,
                searchWorkflowStores: () => a().searchWorkflowStores,
                searchWorkflowStoresWithMinisearchIndex: () => a().searchWorkflowStoresWithMinisearchIndex
            }), r(581454);
            var a = () => r(587832);
            let n = new Map;
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    skipClientSideGateChecks: o
                } = e;
                if (!o) {
                    if (!r(218744).default.checkGate({
                            gateName: "custom_agents_server"
                        })) return {
                        workflowStores: [],
                        workflowSearchIndex: await (0, a().createCustomAgentSearchIndex)([]),
                        mostRecentTranscripts: {}
                    };
                    let e = (0, r(630131).Y)(t, {
                            name: "custom_agents",
                            spaceId: n.id,
                            userId: t.currentUser.id
                        }),
                        o = (0, r(328765).S)(),
                        s = (null == o ? void 0 : o.id) === n.id;
                    if (!e && s) return {
                        workflowStores: [],
                        workflowSearchIndex: await (0, a().createCustomAgentSearchIndex)([]),
                        mostRecentTranscripts: {}
                    }
                }
                let s = n.id,
                    i = await (0, r(203462).zf)(t).awaitData(t, {
                        spaceId: s
                    });
                if (!i) return {
                    workflowStores: [],
                    workflowSearchIndex: await (0, a().createCustomAgentSearchIndex)([]),
                    mostRecentTranscripts: {}
                };
                let c = r(805148).p.getIndex(s),
                    l = (0, r(381453).oE)(i.agents.map(e => {
                        if (e.getData() ? ? e.getDraftData()) return e
                    }));
                return r(805148).p.refresh({
                    spaceId: s,
                    agents: i.agents
                }), {
                    workflowStores: l,
                    workflowSearchIndex: c ? ? await (0, a().createCustomAgentSearchIndex)(l),
                    mostRecentTranscripts: i.mostRecentThreads
                }
            }

            function s() {
                return r(218744).default.checkGate({
                    gateName: "agent_search_es_querying"
                })
            }
            async function i(e) {
                let {
                    environment: t,
                    spaceId: a,
                    query: n,
                    limit: o = 50
                } = e, s = await t.api.callApi({
                    eventName: "search",
                    environment: t,
                    data: {
                        type: r(821603).Vz.BlocksInSpace,
                        query: n,
                        spaceId: a,
                        filters: { ...r(821603).N2({}),
                            blockTypes: ["agent"]
                        },
                        sort: {
                            field: "relevance"
                        },
                        limit: o,
                        source: "agent_search"
                    }
                });
                return "success" !== s.type ? [] : s.data.results.map(e => new(r(360851)).N(t, {
                    table: r(832375).C0E,
                    id: e.id,
                    spaceId: a
                }))
            }

            function c(e) {
                if (!(0, r(56788).$)()) return;
                let t = r(728372).AppStoreSidebarSpaceStore.state,
                    a = r(728372).AppStoreCurrentUserStore.state;
                if (!t || !a) return;
                let s = `${a.id}:${t.id}`;
                if (n.has(s)) return;
                let i = o({
                    environment: e,
                    spaceStore: t,
                    userStore: a
                }).then(() => void 0);
                n.set(s, i), i.finally(() => {
                    n.get(s) === i && n.delete(s)
                })
            }
        },
        587832: (e, t, r) => {
            async function a(e) {
                let {
                    index: t
                } = await (0, r(901282).Fr)(), a = e.map(e => {
                    var t;
                    let a = null == (t = e.getPublishedArtifactStore()) ? void 0 : t.getData(),
                        o = e.getDraftData(),
                        s = a ? ? o;
                    return {
                        id: e.id,
                        text: n(e),
                        inits: (0, r(168534).IM)((null == s ? void 0 : s.name) || ""),
                        block: e
                    }
                });
                return await t.addAllAsync(a), t
            }

            function n(e) {
                return e.getName() ? ? ""
            }

            function o(e) {
                let {
                    query: t,
                    workflowStores: a,
                    limit: n = 10
                } = e;
                return t && 0 !== t.trim().length ? (0, r(821048).Ay)(t, a, e => e.getName() ? ? "", {
                    normalizeFuzzyScore: !0
                }).slice(0, n) : a.slice(0, n)
            }

            function s(e) {
                let {
                    query: t,
                    agentIndex: r,
                    limit: a = 100
                } = e;
                return t && 0 !== t.trim().length ? r.search(t, {
                    prefix: !0,
                    fields: ["text", "inits"]
                }).slice(0, a).map(e => e.block) : []
            }
            r.r(t), r.d(t, {
                createCustomAgentSearchIndex: () => a,
                getWorkflowSearchText: () => n,
                searchWorkflowStores: () => o,
                searchWorkflowStoresWithMinisearchIndex: () => s
            }), r(581454)
        },
        805148: (e, t, r) => {
            r.d(t, {
                p: () => o
            }), r(16280), r(944114);
            var a = () => r(546605);
            class n extends a().Store {
                getInitialState() {
                    return {
                        indexBySpaceId: new Map,
                        refreshTokensBySpaceId: new Map
                    }
                }
                getIndex(e) {
                    return this.state.indexBySpaceId.get(e)
                }
                refresh(e) {
                    let {
                        spaceId: t,
                        agents: r
                    } = e, a = (this.state.refreshTokensBySpaceId.get(t) ? ? 0) + 1, n = new Map(this.state.refreshTokensBySpaceId);
                    n.set(t, a), this.setState({ ...this.state,
                        refreshTokensBySpaceId: n
                    }), this.buildIndex({
                        spaceId: t,
                        agents: r,
                        token: a
                    })
                }
                async buildIndex(e) {
                    let {
                        spaceId: t,
                        agents: a,
                        token: n
                    } = e;
                    try {
                        let e = [];
                        await (0, r(975162).lX)(a, 5, async n => {
                            try {
                                await n.load({
                                    timeout: 5e3
                                }), e.push(n)
                            } catch (e) {
                                var o;
                                if ((o = e) instanceof Error && "Timeout" === o.message) return void r(773352).log({
                                    level: "warning",
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreReadyTimeout",
                                    spaceId: t,
                                    error: (0, r(416607).convertErrorToLog)(e),
                                    data: {
                                        workflowId: n.id,
                                        timeoutMs: 5e3,
                                        agentCount: a.length
                                    }
                                });
                                r(419750).O8(e, {
                                    from: "WorkflowSearchIndexStore",
                                    type: "agentStoreLoadError",
                                    data: {
                                        miscDataToConvertToString: {
                                            workflowId: n.id,
                                            spaceId: t
                                        }
                                    }
                                })
                            }
                        });
                        let o = (0, r(381453).oE)(e.map(e => {
                                if (e.getData() ? ? e.getDraftData()) return e
                            })),
                            s = await (0, r(587832).createCustomAgentSearchIndex)(o);
                        if (this.state.refreshTokensBySpaceId.get(t) !== n) return;
                        let i = new Map(this.state.indexBySpaceId);
                        i.set(t, s), this.setState({ ...this.state,
                            indexBySpaceId: i
                        })
                    } catch (e) {
                        r(419750).O8(e, {
                            from: "WorkflowSearchIndexStore",
                            type: "indexBuildError"
                        })
                    }
                }
            }
            let o = new n
        }
    }
]);