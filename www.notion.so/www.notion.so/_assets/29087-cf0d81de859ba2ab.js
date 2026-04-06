"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [29087], {
        110047: (e, t, r) => {
            function a(e) {
                let {
                    cursors: t,
                    rootStore: a
                } = e, i = {};
                for (let e of t)
                    for (let t of e.stack)
                        for (let e of t) i[e.id] = e.index;
                r(198234).A.setLimitParents(a, i)
            }

            function i(e) {
                r(198234).A.removeLimitParents(e.rootStore)
            }
            r.d(t, {
                I: () => a,
                O: () => i
            })
        },
        117931: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(898992), r(354520), r(672577), r(581454), r(814603), r(147566), r(198721);
            var a = r(296540);
            async function i(e) {
                if (!(0, r(23803).vL)()) return;
                if ("all_views" === e.viewType) {
                    let t = e.recordMap;
                    for (let a of ((null == t ? void 0 : t.getByTable(r(832375).VlP).filter(({
                            value: e
                        }) => {
                            var t;
                            return (null == e || null == (t = e.value) || null == (t = t.format) ? void 0 : t.external_collection_type) === r(565546).uO.Jira
                        })) || []).map(({
                            value: e
                        }) => (null == e ? void 0 : e.value) && {
                            id: e.value.parent_id,
                            table: r(832375).evP,
                            spaceId: e.value.space_id
                        }).filter(r(722371).O9)) await e.environment.api.callApi({
                        eventName: "resyncJiraCollection",
                        environment: e.environment,
                        data: {
                            pagePointer: a
                        }
                    });
                    return
                }
                let t = e.pageStore,
                    a = t.getType(),
                    i = t.getFormat();
                a && (0, r(955630).Ef)(a) && (0, r(23803).MP)(null == i ? void 0 : i.app_config_uri) && await e.environment.api.callApi({
                    eventName: "resyncJiraCollection",
                    environment: e.environment,
                    data: {
                        pagePointer: t.pointer
                    }
                })
            }

            function n(e) {
                return function(e) {
                    let t, n, c, f, h, m;
                    ! function(e) {
                        let {
                            pageStore: t,
                            store: i
                        } = e, n = (0, r(533992).v3)(), o = (0, r(682985).K8)(() => i.state.endOfResultsReached, [i]), s = (0, a.useRef)(!1);
                        (0, a.useEffect)(() => {
                            let e = o && !s.current;
                            s.current = o, e && t.inMemoryRecordCache === n.defaultRecordCache.inMemoryRecordCache && r(155095).Q.markVisited({
                                userId: n.currentUser.id,
                                pageId: t.id
                            })
                        }, [o, t, n])
                    }(e),
                    function(e) {
                        let {
                            pageStore: t,
                            store: i
                        } = e, {
                            initialRequestCompleted: n,
                            error: o
                        } = (0, r(682985).K8)(() => ({
                            initialRequestCompleted: i.state.initialRequestCompleted,
                            error: i.state.error
                        }), [i]);
                        (0, a.useEffect)(() => {
                            if (n && !o) return r(10218).y.trackPage(t), () => {
                                r(10218).y.untrackPage(t)
                            }
                        }, [n, o, t])
                    }(e);
                    let {
                        isCollectionInPage: _,
                        updateIsCollectionInPage: S
                    } = function() {
                        let e = (0, r(533992).v3)(),
                            [t, i] = (0, a.useState)(!1),
                            n = (0, a.useCallback)(r => {
                                var a, i, n, o;
                                let {
                                    page: s,
                                    recordMap: l,
                                    inMemoryRecordCache: c
                                } = r;
                                if (t) return !0;
                                let d = null == (a = c.getRecord({
                                    pointer: {
                                        table: "block",
                                        id: s.id,
                                        spaceId: s.spaceId
                                    },
                                    userId: e.currentUser.id
                                })) ? void 0 : a.value;
                                if (d) {
                                    for (let e of l.getByTable("block"))
                                        if (((null == (i = e.value) || null == (i = i.value) ? void 0 : i.type) === "collection_view" || (null == (n = e.value) || null == (n = n.value) ? void 0 : n.type) === "collection_view_page") && d.parent_id !== (null == (o = e.value) || null == (o = o.value) ? void 0 : o.collection_id)) return !0
                                }
                                return !1
                            }, [e, t]);
                        return {
                            isCollectionInPage: t,
                            updateIsCollectionInPage: (0, a.useCallback)(e => {
                                i(n(e))
                            }, [n])
                        }
                    }(), R = (0, a.useRef)(null);
                    (function(e) {
                        let {
                            store: t,
                            pageStore: a,
                            observer: n
                        } = e, c = (0, r(533992).v3)(), {
                            loading: g,
                            endOfResultsReached: f,
                            initialRequestCompleted: h,
                            error: m
                        } = (0, r(682985).K8)(() => ({
                            loading: t.state.loading,
                            endOfResultsReached: t.state.endOfResultsReached,
                            initialRequestCompleted: t.state.initialRequestCompleted,
                            error: t.state.error
                        }), [t]);
                        async function _() {
                            var g, f, h, m, _;
                            let S, R;
                            t.setState({ ...t.state,
                                loading: !0
                            });
                            let v = !r(329464).A.state.initialRenderCompleted,
                                k = performance.now();
                            g = k, r(898727).A.markRequestFirstChunkStart(), r(329464).A.state.initialRenderCompleted || r(266130).setSubMetric({
                                name: "render_end_to_await_page_chunk_start",
                                startTime: e => {
                                    var t;
                                    return null == (t = e.render_start_to_render_end) ? void 0 : t.endTime
                                },
                                endTime: g
                            });
                            let w = r(509933).pageLoaderRegistry.getOrCreate(a.id);
                            w.startAll({
                                environment: c,
                                dependencies: r(519062).x
                            });
                            let y = l({
                                pageId: a.id
                            });
                            try {
                                if (!(S = w.getLoadedFirstChunk())) {
                                    let t = w.getFirstChunk({
                                        environment: c,
                                        dependencies: r(519062).x
                                    });
                                    (function(e) {
                                        let {
                                            disableSideEffects: t,
                                            environment: a,
                                            pageStore: i,
                                            pageVisitStore: n
                                        } = e;
                                        t || r(469589).updatePageVisits(a, {
                                            blockStore: i,
                                            pageVisitStore: n,
                                            incremental: !1
                                        }).catch(() => {})
                                    })({
                                        disableSideEffects: e.disableSideEffects,
                                        environment: c,
                                        pageStore: a,
                                        pageVisitStore: e.pageVisitStore
                                    }), S = await t
                                }
                                await y, s({
                                    result: S,
                                    environment: c,
                                    pageStore: a,
                                    phase: "firstChunk"
                                })
                            } catch (e) {
                                f = t, h = e, f.setState({
                                    ready: !0,
                                    initialRequestCompleted: !0,
                                    loading: !1,
                                    endOfResultsReached: !1,
                                    error: (0, r(161179).A)(h)
                                });
                                return
                            }
                            let {
                                sourceInfo: C,
                                isDeduplicatingLcpc: P
                            } = (R = "string" == typeof("dedupeSessionId" in (m = S) ? m.dedupeSessionId : void 0), {
                                sourceInfo: { ...p(m.source),
                                    isDeduplicatingLcpc: R
                                },
                                isDeduplicatingLcpc: R
                            });
                            e.isFromActualPageLoad && (0, r(404931).u)(S.source),
                                function(e) {
                                    let {
                                        firstPageChunkResult: t,
                                        isDeduplicatingLcpc: a,
                                        sourceInfo: i
                                    } = e;
                                    r(329464).A.state.initialRenderCompleted || r(329464).A.setState({ ...r(329464).A.state,
                                        isDeduplicatingLcpc: a
                                    }), r(329464).A.state.initialRenderCompleted || (r(266130).setSubMetric({
                                        name: "await_page_chunk_start_to_await_page_chunk_end",
                                        startTime: e => {
                                            var t;
                                            return null == (t = e.render_end_to_await_page_chunk_start) ? void 0 : t.endTime
                                        },
                                        endTime: performance.now()
                                    }), r(266130).updateOPFSMetadata({
                                        bootupRegistry: r(22553).z.opfsBootupRegistryMetadata
                                    }), "opfs" === t.source && (r(266130).updateOPFSMetadata({
                                        preProcessFirstChunk: r(22553).z.preProcessFirstChunk
                                    }), r(266130).updateOPFSMetricData({
                                        get_handle_duration: t.metrics.getHandle,
                                        get_file_duration: t.metrics.getFile,
                                        load_content_duration: t.metrics.getBuffer,
                                        read_duration: t.metrics.total,
                                        file_size: t.metrics.fileSize
                                    })), r(266130).updateMetricData({
                                        page_chunk_source: i.chunkSource,
                                        local_source: "localSource" in i ? i.localSource : void 0
                                    })), "opfs" === t.source && r(898727).A.updateOPFSMetrics({
                                        get_handle_duration: t.metrics.getHandle,
                                        get_file_duration: t.metrics.getFile,
                                        load_content_duration: t.metrics.getBuffer,
                                        read_duration: t.metrics.total,
                                        file_size: t.metrics.fileSize
                                    }), r(898727).A.markRequestFirstChunkEnd({
                                        chunkSource: i.chunkSource,
                                        chunkLocalSource: "localSource" in i ? i.localSource : void 0,
                                        isDeduplicatingLcpc: i.isDeduplicatingLcpc
                                    }), "opfs" === t.source && (r(898727).A.updateOPFSMetadata({
                                        preProcessFirstChunk: r(22553).z.preProcessFirstChunk
                                    }), r(898727).A.updateOPFSMetrics({
                                        get_handle_duration: t.metrics.getHandle,
                                        get_file_duration: t.metrics.getFile,
                                        load_content_duration: t.metrics.getBuffer,
                                        read_duration: t.metrics.total
                                    }))
                                }({
                                    firstPageChunkResult: S,
                                    isDeduplicatingLcpc: P,
                                    sourceInfo: C
                                }), null == n || n.startRecording(C), (_ = t).setState({ ..._.state,
                                    initialRequestCompleted: !0
                                }), await r(374176).default.afterNextFlush(), d({ ...e,
                                    environment: c,
                                    result: S
                                });
                            let I = S.source,
                                M = 1;
                            try {
                                for await (let t of w.getRestChunks({
                                    environment: c,
                                    dependencies: r(519062).x
                                })) s({
                                    result: t,
                                    environment: c,
                                    pageStore: a,
                                    phase: "restChunks"
                                }), d({ ...e,
                                    environment: c,
                                    result: t
                                }), I === t.source ? M++ : (M = 1, I = t.source)
                            } catch (e) {}
                            let A = {
                                metricName: "load_all_page_chunks",
                                startTime: k,
                                endTime: performance.now()
                            };
                            t.setState({
                                    initialRequestCompleted: !0,
                                    ready: !0,
                                    loading: !1,
                                    endOfResultsReached: !0,
                                    error: void 0
                                }),
                                function(e) {
                                    let {
                                        disableSideEffects: t,
                                        environment: a,
                                        pageStore: n,
                                        observer: o
                                    } = e;
                                    t || ("personal_home_page" !== n.getType() && u({
                                        environment: a,
                                        blockPointer: n.pointer
                                    }), a.currentUser.isLoggedIn() && i({
                                        environment: a,
                                        pageStore: n,
                                        viewType: "collection_view_full_page"
                                    }), null == o || o.onLastChunkLoaded(), r(680007).default.measure(e.loadAllPageChunksMetric, {
                                        data: {
                                            load_type: e.isInitialRender ? "initial" : "navigation",
                                            page_type: n.getType() || "undefined",
                                            page_chunk_source: p(e.pageChunkSource).chunkSource,
                                            is_deduplicating_lcpc: e.isDeduplicatingLcpc,
                                            chunk_count: 1 === e.chunkCount ? "1" : "2_or_more",
                                            chunk_count_raw: e.chunkCount
                                        }
                                    }))
                                }({ ...e,
                                    environment: c,
                                    isInitialRender: v,
                                    loadAllPageChunksMetric: A,
                                    pageChunkSource: I,
                                    isDeduplicatingLcpc: P,
                                    chunkCount: M
                                }), r(218744).default.checkGate({
                                    gateName: "check_local_role_mismatch_on_page_load"
                                }) && function(e) {
                                    let {
                                        firstPageChunkResult: t,
                                        pageStore: a
                                    } = e;
                                    if ("opfs" !== t.source && "sqlite" !== t.source) return;
                                    let i = {
                                        table: r(832375).evP,
                                        id: a.id,
                                        spaceId: a.getSpaceId()
                                    };
                                    if (r(941701).transactionQueue.isPendingTransactionForRecord(i)) return;
                                    let n = o(t.chunk).getRole({
                                        table: r(832375).evP,
                                        id: a.id
                                    });
                                    (0, r(642157).PW)(n) && r(461457).z.registerPageForRemoteRoleVerification({
                                        pageId: a.id,
                                        spaceId: a.getSpaceId(),
                                        localRole: n
                                    })
                                }({
                                    firstPageChunkResult: S,
                                    pageStore: a
                                })
                        }!e.enabled || g || f || h && m || r(363256).e.withListenerIgnored(() => {
                            _()
                        })
                    })({ ...e,
                        updateIsCollectionInPage: S,
                        scrollerRef: R,
                        enabled: !0
                    }),
                    function(e) {
                        let {
                            store: t,
                            scrollToBlockIds: i,
                            onReady: n,
                            onDone: o,
                            pageStore: s
                        } = e, l = (0, r(533992).v3)();
                        (0, a.useEffect)(() => {
                            let e, a = r(381453).Oo(() => {
                                    i && n && (e = g(l, i, s))
                                }),
                                c = r(381453).Oo(() => {
                                    n && r(374176).default.afterNextFlush(() => {
                                        r(374176).default.afterNextFlush(async () => {
                                            if (e) {
                                                let t = performance.now();
                                                await (0, r(975162).Vq)(e, 5e3), r(329464).A.state.initialRenderCompleted || r(266130).updateMetricData({
                                                    scroll_to_blocks_wait_time: performance.now() - t
                                                })
                                            }
                                            n()
                                        })
                                    })
                                }),
                                d = r(381453).Oo(() => {
                                    null == o || o()
                                }),
                                u = () => {
                                    t.state.loading && a(), t.state.ready && c(), (t.state.endOfResultsReached || t.state.error) && d()
                                };
                            return t.addListener(u), () => {
                                t.removeListener(u)
                            }
                        }, [o, n, s, i, t, l])
                    }(e),
                    function(e) {
                        let {
                            store: t
                        } = e, i = (0, r(682985).K8)(() => t.state.error, [t]), n = (0, r(682985).O$)(r(205885).e), o = (0, r(668745).ZC)(n), s = void 0 !== o && n && !o;
                        (0, a.useEffect)(() => {
                            s && i && t.reset()
                        }, [s, t, i])
                    }(e), t = (0, r(533992).v3)(), n = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                    }, []), c = (0, r(682985).O$)(r(728372).AppStoreCurrentUserRootStore), f = (0, r(682985).O$)(r(205885).e), m = void 0 !== (h = (0, r(668745).ZC)(f)) && f && !h, (0, a.useEffect)(() => {
                        async function e() {
                            let {
                                route: e
                            } = t.RouterStore.state, a = await r(687544).Ty({
                                environment: t,
                                request: { ...e,
                                    type: "block-space",
                                    blockId: n,
                                    spaceId: "spaceId" in e ? e.spaceId : void 0,
                                    slug: "slug" in e ? e.slug : void 0,
                                    spaceDomain: "spaceDomain" in e ? e.spaceDomain : void 0,
                                    requestedOnPublicDomain: "requestedOnPublicDomain" in e ? e.requestedOnPublicDomain : void 0,
                                    isBot: !1
                                }
                            });
                            if ("failed" === a.type) return;
                            let i = a.data;
                            if (r(686494).A.setState({
                                    publicPageData: i,
                                    publicPageDataSource: "remote"
                                }), i.spaceId && c) {
                                let e = c.getSpaceViewStores().find(e => e.getSpaceId() === i.spaceId);
                                e && r(728372).default.setState({ ...r(728372).default.state,
                                    sidebarSpaceStore: e.getSpaceStore(),
                                    sidebarSpaceViewStore: e
                                })
                            }
                        }
                        m && n && e()
                    }, [m, t, n, c]);
                    let {
                        store: v
                    } = e;
                    return (0, r(682985).K8)(() => ({
                        ready: v.state.ready,
                        error: v.state.error,
                        initialRequestCompleted: v.state.initialRequestCompleted,
                        endOfResultsReached: v.state.endOfResultsReached,
                        isCollectionInPage: _,
                        scrollerRef: R
                    }), [v, _, R])
                }({ ...e,
                    store: (0, r(682985).uB)(e.store, r(186499).A)
                })
            }

            function o(e) {
                return "recordMaps" in e ? r(412951).RecordMapWithRole.merge(e.recordMaps.map(e => r(412951).RecordMapWithRole.create(e))) : e.recordMap ? r(412951).RecordMapWithRole.create(e.recordMap) : void 0
            }

            function s(e) {
                let {
                    result: t,
                    environment: a,
                    pageStore: i,
                    phase: n
                } = e;
                "memory" === t.source || "didUseAgentInMemoryRecordCache" in t && t.didUseAgentInMemoryRecordCache || (0, r(31069)._)({
                    currentUserId: a.currentUser.id,
                    defaultRecordCache: a.defaultRecordCache,
                    inMemoryRecordCache: i.inMemoryRecordCache,
                    recordMap: o(t.chunk),
                    debugSource: `useLoadPage.${n}.${t.source}`,
                    maybeStaleRecordMap: "remote" === t.source,
                    isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                })
            }
            async function l(e) {
                let {
                    pageId: t
                } = e, a = r(680007).default.mark("required_redirect_metadata_duration"), i = await (0, r(501157).getHtmlStreamQueueEntry)("requiredRedirectMetadata");
                if (i && i.pageId === t) {
                    if (i.requiresRedirect && i.redirectUrl) {
                        r(680007).default.measure(a, {
                            data: {
                                requires_redirect: !0,
                                redirect_url: i.redirectUrl
                            }
                        }), (0, r(439109).t)();
                        let e = new URL(i.redirectUrl);
                        e.hash || (e.hash = window.location.hash), e.search || (e.search = window.location.search), (0, r(318620).Y)(e.toString()), await new Promise(() => {})
                    }
                } else r(680007).default.measure(a, {
                    data: {
                        requires_redirect: !1
                    }
                })
            }

            function c(e) {
                return !e || 0 === e.stack.length
            }

            function d(e) {
                let {
                    disableSideEffects: t,
                    environment: a,
                    pageStore: n,
                    store: s,
                    scrollToDiscussionId: l,
                    scrollerRef: d,
                    scrollToPosition: u,
                    scrollToBlockIds: p,
                    updateIsCollectionInPage: g,
                    result: f
                } = e;
                if (t) return;
                f.isLast || r(374176).default.afterNextFlush(() => {
                    if (s.state.ready) return;
                    let e = !l || !!(0, r(900644).V)({
                        discussionId: l
                    });
                    !0 !== function(e) {
                        let {
                            scrollerRef: t,
                            scrollToPosition: a
                        } = e;
                        if (null === t.current) return;
                        let i = (0, r(54503).NM)(t.current);
                        return !(i && (0, r(763230).Et)(a)) || a <= i.scrollHeight - i.clientHeight
                    }({
                        scrollerRef: d,
                        scrollToPosition: u
                    }) || p && r(240414).T.findSelectablesFromIds(p).length !== p.length || !e || s.setState({ ...s.state,
                        ready: !0
                    })
                }), (async () => {
                    let e;
                    e = "memory" === f.source ? f.didUseAgentInMemoryRecordCache ? o(f.chunk) : o(f.chunk) ? ? r(412951).RecordMapWithRole.create((await (0, r(104794).performLocalLoadPageInMemoryOnlyAsync)({
                        environment: a,
                        page: {
                            id: n.id,
                            spaceId: n.getSpaceId()
                        },
                        throwOnMissingRecords: !1,
                        yieldToMainThreadWhileLoading: !0
                    })).recordMap) : o(f.chunk), g({
                        page: {
                            id: n.id,
                            spaceId: n.getSpaceId()
                        },
                        recordMap: e,
                        inMemoryRecordCache: n.inMemoryRecordCache
                    }), a.currentUser.isLoggedIn() && (r(803952).A.addFromRecordMapWithRole(e), r(803952).A.isEmpty() || r(484177).l({
                        environment: a
                    })), a.currentUser.isLoggedIn() && i({
                        environment: a,
                        recordMap: e,
                        viewType: "all_views"
                    })
                })();
                let h = function(e) {
                    switch (e.source) {
                        case "memory":
                            return [];
                        case "opfs":
                            return;
                        case "sqlite":
                            return [e.chunk.cursor].filter(e => !c(e));
                        case "remote":
                            return e.chunk.cursors.filter(e => !c(e));
                        default:
                            (0, r(722371).HB)(e)
                    }
                }(f);
                h && r(110047).I({
                    rootStore: n,
                    cursors: h
                })
            }
            async function u(e) {
                let {
                    blockPointer: t,
                    environment: a
                } = e;
                r(411005).A.initializeBacklinks({
                    block: {
                        id: t.id
                    },
                    currentUserId: a.currentUser.id,
                    environment: a
                });
                try {
                    await r(411005).A.awaitLoaded(t.id)
                } catch (e) {}
            }

            function p(e) {
                switch (e) {
                    case "memory":
                        return {
                            chunkSource: "local",
                            localSource: "memory"
                        };
                    case "opfs":
                        return {
                            chunkSource: "local",
                            localSource: "opfs"
                        };
                    case "sqlite":
                        return {
                            chunkSource: "local",
                            localSource: "disk"
                        };
                    case "remote":
                        return {
                            chunkSource: "remoteV2"
                        }
                }
            }
            async function g(e, t, a) {
                t && await r(807635).NH({
                    environment: e,
                    pageStore: a,
                    scrollToBlockIds: t
                })
            }
        },
        295918: (e, t, r) => {
            r.d(t, {
                s: () => a
            });

            function a(e) {
                r(219040).H.canGoForward() && (0, r(175576).o)({
                    environment: e,
                    offset: 1
                })
            }
        },
        404931: (e, t, r) => {
            r.d(t, {
                r: () => a,
                u: () => i
            });
            let a = {
                timestamp: void 0
            };

            function i(e) {
                Object.assign(a, {
                    timestamp: performance.now(),
                    source: e
                })
            }
        },
        439109: (e, t, r) => {
            r.d(t, {
                p: () => i,
                t: () => n
            });
            var a = r(296540);

            function i() {
                let e = (0, r(533992).v3)(),
                    t = (0, a.useRef)(!1),
                    i = (0, r(682985).K8)(() => r(728372).default.state.renderPhase, []),
                    n = window.CLIENT_LOAD_TAG;
                (0, a.useEffect)(() => {
                    if (n && !t.current && "rendered" === i) {
                        t.current = !0;
                        let {
                            shouldShowError: a
                        } = (0, r(846044).X)(e);
                        o({
                            isRedirect: !1,
                            isShowingError: a
                        })
                    }
                }, [n, i, e])
            }

            function n() {
                window.CLIENT_LOAD_TAG && o({
                    isRedirect: !0,
                    isShowingError: !1
                })
            }
            async function o(e) {
                let t = window.CLIENT_LOAD_TAG;
                try {
                    await (0, r(201790).httpRequest)({
                        data: {
                            tag: t,
                            isRedirect: e.isRedirect,
                            isShowingError: e.isShowingError,
                            version: r(986939).A.version
                        },
                        format: "json",
                        keepAlive: !0,
                        method: "POST",
                        url: "/api/v3/recordClientLoadComplete"
                    })
                } catch (t) {
                    let e = (0, r(161179).A)(t);
                    (0, r(419750).Fg)(e)
                }
            }
        },
        461457: (e, t, r) => {
            r.d(t, {
                z: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698);
            var a = () => r(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        pendingPages: new Map,
                        inFlightPages: new Set
                    }
                }
                registerPageForRemoteRoleVerification(e) {
                    if (this.state.inFlightPages.has(e.pageId)) return;
                    let t = new Map(this.state.pendingPages);
                    t.set(e.pageId, e), this.setState({ ...this.state,
                        pendingPages: t
                    })
                }
                consumePendingPages() {
                    let e = Array.from(this.state.pendingPages.values()),
                        t = new Set(this.state.inFlightPages);
                    for (let r of e) t.add(r.pageId);
                    return this.setState({
                        pendingPages: new Map,
                        inFlightPages: t
                    }), e
                }
                markPageInFlight(e) {
                    let t = new Map(this.state.pendingPages);
                    t.delete(e);
                    let r = new Set(this.state.inFlightPages);
                    r.add(e), this.setState({
                        pendingPages: t,
                        inFlightPages: r
                    })
                }
                markPageComplete(e) {
                    let t = new Set(this.state.inFlightPages);
                    t.delete(e), this.setState({ ...this.state,
                        inFlightPages: t
                    })
                }
            }
            let n = new i
        },
        799472: (e, t, r) => {
            r.d(t, {
                u: () => a
            });
            let a = (0, r(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => r.e(82106).then(r.bind(r, 80094))
                },
                small: {
                    loader: () => r.e(82106).then(r.bind(r, 211052))
                },
                fill: {
                    loader: () => r.e(82106).then(r.bind(r, 769980))
                },
                fillSmall: {
                    loader: () => r.e(82106).then(r.bind(r, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        }
    }
]);