"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [93828], {
        71734: (e, t, a) => {
            a.d(t, {
                debugAutosync: () => g,
                u: () => _
            }), a(16280), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454);
            var n = a(296540),
                i = () => a(964743);
            async function o(e) {
                let {
                    connection: t,
                    userId: n,
                    spaceId: i
                } = e, o = (0, a(573146).F4)
                `
		WITH offline_page_metadata AS (
			${(0,a(751595).y)({userId:n})}
		)
		SELECT offline_page_metadata.* FROM offline_page_metadata
		WHERE space_id = ${i}
		AND is_autosynced_origin = 1
		ORDER BY last_downloaded_at ASC
	`, r = (await (0, a(911822).G2)({
                    connection: t,
                    statements: [o.asRead()],
                    queryName: "getOfflineAutosyncedOrigins"
                }))[0].data;
                return a(305232).m.rowsFromSqlite(r)
            }
            async function r(e) {
                let {
                    connection: t,
                    userId: n
                } = e;
                await (0, a(911822).G2)({
                    connection: t,
                    statements: [(0, a(573146).F4)
                        `CREATE TEMP TABLE explicitly_toggled_origins AS
				SELECT DISTINCT
					oa.origin_page_id,
					oa.meta_user_id,
					op.space_id
				FROM offline_action oa
				JOIN offline_page op ON oa.impacted_page_id = op.id AND oa.meta_user_id = op.meta_user_id
				WHERE oa.origin_page_id = oa.impacted_page_id
				  AND oa.autosync_type = 'not_autosynced'
				  AND oa.meta_user_id = ${n}`.asWrite(), (0, a(573146).F4)
                        `DELETE FROM offline_action WHERE meta_user_id = ${n}`.asWrite(), (0, a(573146).F4)
                        `DELETE FROM offline_page WHERE meta_user_id = ${n}`.asWrite(), (0, a(573146).F4)
                        `INSERT INTO offline_page (id, meta_user_id, download_status, space_id)
				SELECT origin_page_id, meta_user_id, 'to_download', space_id
				FROM explicitly_toggled_origins`.asWrite(), (0, a(573146).F4)
                        `INSERT INTO offline_action (meta_user_id, origin_page_id, from_page_id, impacted_page_id, autosync_type)
				SELECT meta_user_id, origin_page_id, origin_page_id, origin_page_id, 'not_autosynced'
				FROM explicitly_toggled_origins`.asWrite(), (0, a(573146).F4)
                        `DROP TABLE explicitly_toggled_origins`.asWrite()
                    ],
                    queryName: "reinitializeOfflineData"
                })
            }
            async function s(e) {
                let {
                    connection: t,
                    userId: n,
                    spaceId: i
                } = e;
                await (0, a(911822).G2)({
                    connection: t,
                    statements: [(0, a(573146).F4)
                        `DELETE FROM offline_action WHERE ${a(573146).F4.and([(0,a(573146).F4)`meta_user_id = ${n}`,(0,a(573146).F4)`autosync_type = ${"frecent"}`,(0,a(573146).F4)`EXISTS (
					SELECT 1 FROM offline_page
					WHERE offline_page.id = offline_action.origin_page_id
					AND offline_page.space_id = ${i}
					AND offline_page.meta_user_id = ${n}
				)`])}`.asWrite(),
                        function(e) {
                            let {
                                userId: t
                            } = e;
                            return (0, a(573146).F4)
                            `DELETE FROM offline_page
	WHERE meta_user_id = ${t}
	AND NOT EXISTS (
		SELECT 1
		FROM offline_action
		WHERE offline_action.impacted_page_id = offline_page.id
		AND offline_action.meta_user_id = ${t}
	)`.asWrite()
                        }({
                            userId: n
                        })
                    ],
                    queryName: "removeAllOfflineAutosyncedOrigins"
                })
            }
            let l = a(695216).Xb;
            class d extends Error {
                constructor(e) {
                    super(e), this.name = "OfflineAutosyncAbortedError"
                }
            }
            async function c(e) {
                var t;
                let {
                    environment: {
                        currentUser: {
                            id: n
                        },
                        sqliteConnection: i
                    },
                    desiredPages: r
                } = e;
                if (!n || !i) return {
                    pagesToAdd: [],
                    pagesToRemove: []
                };
                let s = null == (t = (0, a(328765).S)()) ? void 0 : t.id;
                return s ? function(e) {
                    let {
                        desiredPages: t,
                        existingAutosyncedPages: n
                    } = e, i = new Set(t.map(e => e.id)), o = new Set(n.map(e => e.id));
                    return {
                        pagesToAdd: (0, a(381453).sb)(t.filter(e => !o.has(e.id)).filter(e => !(0, a(829435).s)(e.id))),
                        pagesToRemove: n.filter(e => !i.has(e.id))
                    }
                }({
                    desiredPages: r,
                    existingAutosyncedPages: (await o({
                        connection: i,
                        userId: n,
                        spaceId: s
                    })).map(e => ({
                        id: e.id,
                        spaceId: e.space_id
                    }))
                }) : {
                    pagesToAdd: [],
                    pagesToRemove: []
                }
            }
            async function u(e) {
                let {
                    environment: t,
                    abortSignal: n,
                    autosyncIntervalMs: o,
                    forStats: s
                } = e, {
                    currentUser: {
                        id: l
                    },
                    sqliteConnection: d
                } = t;
                if (!d || !l) return;
                let u = performance.now(),
                    f = (0, a(97376).L)("autosynced_pages_limit"),
                    _ = (0, a(97376).L)("autosynced_favorite_pages_limit"),
                    g = function({
                        limit: e
                    }) {
                        var t;
                        return null == (t = a(601860).wI.state) ? void 0 : t.slice(0, e).map(e => ({
                            id: e.pageId,
                            spaceId: e.store.getSpaceId()
                        }))
                    }({
                        limit: f
                    });
                null == g || g.map(e => e.id);
                let p = function({
                    limit: e
                }) {
                    let t = a(728372).AppStoreSidebarSpaceViewStore.state,
                        n = null == t ? void 0 : t.getBookmarkedPageIds(),
                        i = null == t ? void 0 : t.getSpaceId();
                    if (n && i) return null == n ? void 0 : n.slice(0, e).map(e => ({
                        id: e,
                        spaceId: i
                    }))
                }({
                    limit: _
                });
                null == p || p.map(e => e.id), void 0 !== g && void 0 !== p && (await navigator.locks.request(`toggle_offline_page_${t.currentUser.id}`, () => {}), await navigator.locks.request(`offline_background_task_${t.currentUser.id}`, {
                    ifAvailable: !0
                }, async e => {
                    if (!e) return;
                    let f = await (0, a(477184).T)({
                        connection: d,
                        userId: l,
                        taskType: "autosync"
                    });
                    if (f && Date.now() - f < .95 * o) return;
                    let _ = Date.now(),
                        {
                            pagesToAdd: y,
                            pagesToRemove: m
                        } = await c({
                            environment: t,
                            desiredPages: [...g, ...p]
                        });
                    if (0 === y.length && 0 === m.length) return;
                    n.throwIfAborted();
                    let w = new Set;
                    await (0, a(975162).lX)(y, 5, async e => {
                        await (0, i().og)({
                            from: "addAutosyncedPage",
                            originAutosyncTypePairs: [{
                                originPageId: e.id,
                                autosyncType: "frecent"
                            }],
                            page: e,
                            environment: t,
                            visitedBlockIds: {
                                forThisOriginPage: new Set,
                                forThisInterval: w
                            },
                            stats: {
                                imageCount: 0,
                                batchedSyncCount: 0,
                                queryCollectionCount: 0
                            },
                            downloadAbortSignal: n
                        }), n.throwIfAborted()
                    }), await (0, a(981537).I)({
                        connection: d,
                        userId: l,
                        taskType: "autosync",
                        lastExecutedAt: _
                    }), n.throwIfAborted();
                    let E = !1;
                    for (let e of m) {
                        let a = await (0, i().zB)({
                            from: "removeAutosyncedPage",
                            pageId: e.id,
                            environment: t
                        });
                        null != a && a.hasForeignKeyError && (E = !0), n.throwIfAborted()
                    }
                    if (E) {
                        let e = (0, a(69741).Yo)(l, (0, a(97376).L)("reinitialize_on_error_percentage")),
                            t = await (0, a(477184).T)({
                                connection: d,
                                userId: l,
                                taskType: "reinitialize"
                            }) ? ? 0;
                        e && Date.now() - t > a(695216).nD && (a(773352).log({
                            from: "useUpdateAutosyncedPages",
                            type: "reinitialize_on_error",
                            level: "info"
                        }), await r({
                            connection: d,
                            userId: l
                        }), await (0, a(981537).I)({
                            connection: d,
                            userId: l,
                            taskType: "reinitialize",
                            lastExecutedAt: Date.now()
                        }))
                    }
                    a(680007).default.measure({
                        metricName: "update_autosynced_pages",
                        startTime: u,
                        endTime: performance.now()
                    }, {
                        data: {
                            number_of_pages_added: y.length,
                            number_of_pages_removed: m.length,
                            is_offline_caching_allowed: s.isOfflineCachingAllowed,
                            is_feature_availability_loaded: s.isFeatureAvailabilityLoaded,
                            does_subscription_allow_autosync: s.doesSubscriptionAllowAutosync,
                            autosync_setting: s.autosyncSetting,
                            autosync_reason: s.autosyncReason,
                            autosync_interval_ms: o
                        }
                    })
                }))
            }
            async function f(e, t) {
                let {
                    currentUser: {
                        id: n
                    },
                    sqliteConnection: i
                } = e;
                n && i && (await s({
                    connection: i,
                    userId: n,
                    spaceId: t
                }), await (0, a(981537).I)({
                    connection: i,
                    userId: n,
                    taskType: "autosync",
                    lastExecutedAt: 0
                }))
            }

            function _() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(723240).r)(),
                    i = (0, a(556583).K)(),
                    o = (0, a(313442).Vz)(),
                    r = void 0 !== o,
                    s = r && "available" === o.type,
                    c = (0, a(404121).J)(t),
                    {
                        autosyncSetting: _,
                        setAutosyncSetting: g,
                        autosyncSettingIsLoading: p
                    } = "pending" === c.status ? {
                        autosyncSettingIsLoading: !0
                    } : {
                        autosyncSetting: c.value.value,
                        setAutosyncSetting: c.value.set,
                        autosyncSettingIsLoading: !1
                    };
                (0, n.useEffect)(() => {
                    !p && void 0 === _ && s && t && (null == g || g("on"))
                }, [_, g, p, s, t]);
                let y = (0, a(682985).K8)(() => a(329464).A.state.initialRenderCompleted && a(205885).A.state.online && i && s, [i, s]),
                    m = (0, a(97376).m)("autosync_interval_ms"),
                    w = (0, n.useRef)(void 0),
                    E = (0, n.useCallback)(() => (w.current || (w.current = new AbortController), w.current), []),
                    A = (0, n.useCallback)(e => {
                        E().abort(new d(e)), w.current = void 0
                    }, [E]),
                    h = (0, n.useRef)(void 0);
                (0, n.useEffect)(() => {
                    let n = h.current,
                        o = function() {
                            if (!p) {
                                if ("on" === _ && void 0 !== t && r && !s && a(205885).A.state.online) {
                                    A("Autosync aborted because space was not paid"), f(e, t).catch(e => {
                                        if (e instanceof d);
                                        else throw e
                                    }), null == g || g("off");
                                    return
                                }
                                if (y) {
                                    if ("on" === n && "off" === _) {
                                        A("Autosync aborted because it was turned off"), void 0 !== t && f(e, t).catch(e => {
                                            if (e instanceof d);
                                            else throw e
                                        });
                                        return
                                    }
                                    if ("on" === _) {
                                        let t, o = E().signal;
                                        if ("off" === n) u({
                                            environment: e,
                                            abortSignal: o,
                                            autosyncIntervalMs: m,
                                            forStats: {
                                                isOfflineCachingAllowed: i,
                                                isFeatureAvailabilityLoaded: r,
                                                doesSubscriptionAllowAutosync: s,
                                                autosyncSetting: _,
                                                autosyncReason: "toggle_setting"
                                            }
                                        }).catch(e => {
                                            if (e instanceof d);
                                            else throw e
                                        });
                                        else {
                                            let n = (0, a(433162).HO)([0, l]);
                                            t = window.setTimeout(() => {
                                                o.aborted || u({
                                                    environment: e,
                                                    abortSignal: o,
                                                    autosyncIntervalMs: m,
                                                    forStats: {
                                                        isOfflineCachingAllowed: i,
                                                        isFeatureAvailabilityLoaded: r,
                                                        doesSubscriptionAllowAutosync: s,
                                                        autosyncSetting: _,
                                                        autosyncReason: "startup"
                                                    }
                                                }).catch(e => {
                                                    if (e instanceof d);
                                                    else throw e
                                                })
                                            }, n)
                                        }
                                        let c = .05 * m,
                                            f = m + Math.random() * c * 2 - c,
                                            g = setInterval(() => {
                                                o.aborted || u({
                                                    environment: e,
                                                    abortSignal: o,
                                                    autosyncIntervalMs: f,
                                                    forStats: {
                                                        isOfflineCachingAllowed: i,
                                                        isFeatureAvailabilityLoaded: r,
                                                        doesSubscriptionAllowAutosync: s,
                                                        autosyncSetting: _,
                                                        autosyncReason: "interval"
                                                    }
                                                }).catch(e => {
                                                    if (e instanceof d);
                                                    else throw e
                                                })
                                            }, f);
                                        return {
                                            timeoutId: t,
                                            interval: g
                                        }
                                    }
                                }
                            }
                        }();
                    return h.current = _, () => {
                        null != o && o.timeoutId && clearTimeout(o.timeoutId), null != o && o.interval && clearInterval(o.interval)
                    }
                }, [A, E, e, y, s, _, p, g, m, r, t, i])
            }
            async function g(e) {
                if (!e) throw Error("Pass in `__console.environment` as the first param.");
                await u({
                    environment: e,
                    abortSignal: new AbortController().signal,
                    autosyncIntervalMs: 0,
                    forStats: {
                        isOfflineCachingAllowed: !0,
                        isFeatureAvailabilityLoaded: !0,
                        doesSubscriptionAllowAutosync: !0,
                        autosyncSetting: "on",
                        autosyncReason: "debug"
                    }
                })
            }
            async function p(e, t) {
                if (!e) throw Error("Pass in `__console.environment` as the first param.");
                if (!t) throw Error("Pass in a page ID as the second param.");
                let n = new(a(970831)).B(e, {
                    id: t,
                    table: a(832375).evP
                });
                await n.load();
                let o = n.getSpaceId(),
                    {
                        currentUser: {
                            id: r
                        },
                        sqliteConnection: s
                    } = e;
                if (!s) throw Error("Missing SQLite");
                if (!r) throw Error("Missing userId");
                await navigator.locks.request(`offline_background_task_${r}`, async a => {
                    if (!a) throw Error("Failed to acquire lock for offline background task");
                    await (0, i().og)({
                        from: "addAutosyncedPage",
                        originAutosyncTypePairs: [{
                            originPageId: t,
                            autosyncType: "frecent"
                        }],
                        page: {
                            id: t,
                            spaceId: o
                        },
                        environment: e,
                        visitedBlockIds: {
                            forThisOriginPage: new Set,
                            forThisInterval: new Set
                        },
                        stats: {
                            imageCount: 0,
                            batchedSyncCount: 0,
                            queryCollectionCount: 0
                        },
                        downloadAbortSignal: new AbortController().signal
                    })
                })
            }
            async function y(e, t) {
                var n;
                if (!e) throw Error("Pass in `__console.environment` as the first param.");
                let i = t ? ? (null == (n = (0, a(328765).S)()) ? void 0 : n.id);
                if (!i) throw Error("No space ID found, pass one in as the second param.");
                await f(e, i)
            }(0, a(202146).exposeDebugValue)("debugAutosync", g), (0, a(202146).exposeDebugValue)("debugAddAutosyncedPage", p), (0, a(202146).exposeDebugValue)("debugClearAutosyncedData", y)
        },
        433162: (e, t, a) => {
            function n([e, t]) {
                return Math.floor(function([e, t]) {
                    return Math.random() * (t - e) + e
                }([e, t]))
            }

            function i(e) {
                if (!e) return Math.random;
                let t = function(e) {
                    let t = 0;
                    for (let a = 0; a < e.length; a++) t = (t << 5) - t + e.charCodeAt(a) | 0;
                    return t
                }(e);
                return () => {
                    t |= 0;
                    let e = Math.imul((t = t + 0x6d2b79f5 | 0) ^ t >>> 15, 1 | t);
                    return (((e = e + Math.imul(e ^ e >>> 7, 61 | e) ^ e) ^ e >>> 14) >>> 0) / 0x100000000
                }
            }

            function o(e, t) {
                let n = i(t);
                return (0, a(381453).Ul)(e, n)
            }
            a.d(t, {
                HO: () => n,
                Nx: () => i,
                mT: () => o
            }), a(898992), a(908872)
        },
        981537: (e, t, a) => {
            a.d(t, {
                I: () => n
            });
            async function n(e) {
                let {
                    connection: t,
                    userId: n,
                    taskType: i,
                    lastExecutedAt: o
                } = e;
                await (0, a(911822).G2)({
                    connection: t,
                    statements: [(0, a(573146).F4)
                        `INSERT OR REPLACE INTO offline_download_metadata (meta_user_id, task_type, last_executed_at) VALUES (${n}, ${i}, ${o})`.asWrite()
                    ],
                    queryName: "updateOfflineMetadataLastExecutedAt"
                })
            }
        }
    }
]);