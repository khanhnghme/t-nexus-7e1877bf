"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [4408], {
        131297: (e, t, r) => {
            r.d(t, {
                pQ: () => s,
                uW: () => n
            }), r(16280);
            var a = r(296540);

            function n(e, t, s, o = !1) {
                var u, v, p, y;
                let f, g = function(e) {
                        var t, n;
                        let s = null == (t = (0, r(533992).v3)().sqliteConnection) || null == (n = t.getObserver) ? void 0 : n.call(t),
                            o = s ? l.get(s) : void 0,
                            [u, d] = (0, a.useState)(o),
                            c = (0, r(815048).fJ)(i, {
                                disabled: !e
                            });
                        return (0, a.useEffect)(() => {
                            if (u || !s || !e) return;
                            let t = l.get(s);
                            if (t) return void d(t);
                            if ("resolved" !== c.status || !s) return;
                            let {
                                TabSqliteSubscriptionBackend: a,
                                SqliteSubscriptionManager: n
                            } = c.value, i = new n(new a({
                                observer: s,
                                debounceMs: 100,
                                broadcastWritesChannel: new BroadcastChannel("sqlite-writes"),
                                config: r(986939).A
                            }));
                            l.set(s, i), d(i)
                        }, [s, c, u, e]), e ? u : void 0
                    }(!!t),
                    w = function(e, t, n, s, i) {
                        let l = (0, r(533992).v3)().currentUser.id,
                            o = t ? function(e, t, a, n, s, i) {
                                var l, o, u;
                                if (!a && null != (l = n.rowType) && l.singleton) throw Error(`Must use useSqliteSingleton for singleton row type: ${n.rowType.name}`);
                                let d = t.sql(),
                                    c = n.readTables;
                                if (!c) {
                                    let e = null == s ? void 0 : s.parseQuery(d);
                                    if (e) switch (e.type) {
                                        case "unknown":
                                            c = e.tables;
                                            break;
                                        case "error":
                                            throw e.error;
                                        case "crud":
                                            if (e.writeTables.length > 0) throw Error(`useSqliteQuery: cannot subscribe to query that writes to tables: ${e.writeTables.join(", ")}`);
                                            c = e.readTables;
                                            break;
                                        default:
                                            (0, r(722371).HB)(e)
                                    } else c = null == (u = n.rowType) ? void 0 : u.readTables
                                }
                                let v = {
                                    _key: `sqlite:KeyCreatorNotLoaded:${e}`,
                                    _options: n,
                                    singleton: a,
                                    sql: d,
                                    args: t.args,
                                    queryName: e,
                                    readTables: c,
                                    primaryKey: n.primaryKey ? ? (null == (o = n.rowType) ? void 0 : o.primaryKey),
                                    rowType: n.rowType,
                                    userId: i || "guest"
                                };
                                return s && (v._key = s.keyCreator.getKeyUncached(v)), v
                            }(e, t, n, s, i, l) : void 0,
                            [u, d] = (0, a.useState)(o);
                        return (null == o ? void 0 : o._key) !== (null == u ? void 0 : u._key) ? (d(o), o) : u
                    }(e, t, o, s, g),
                    b = w ? null == g ? void 0 : g.createQuery(w._key, w) : void 0,
                    S = b ? ? d,
                    _ = (0, a.useSyncExternalStore)(S.subscribe, S.getSnapshot),
                    h = (u = b, v = !!(null == w ? void 0 : w.singleton), p = g, f = null == (y = (0, r(815048).fJ)(i, {
                        disabled: !u
                    }).value) ? void 0 : y.OptimisticUpdateComposer, (0, a.useCallback)((e, t) => u && p && f && u ? c(e, t, v, u, p, f) : e(), [u, p, f, v])),
                    m = !!t,
                    T = (0, a.useMemo)(() => ({ ..._,
                        withOptimistic: h,
                        enabled: m
                    }), [_, h, m]);
                if (T.error && !(null != w && w._options.allowError)) throw T.error;
                return T
            }

            function s(e, t, r) {
                let s = n(e, t, { ...r,
                    rowType: r.singletonType
                }, !0);
                return (0, a.useMemo)(() => {
                    var e;
                    return {
                        enabled: s.enabled,
                        loading: s.loading,
                        seq: s.seq,
                        value: null == (e = s.value) ? void 0 : e[0],
                        valueSeq: s.valueSeq,
                        error: s.error,
                        errorSeq: s.errorSeq,
                        withOptimistic: s.withOptimistic
                    }
                }, [s])
            }
            let i = new(r(815048)).O2("SqliteSubscriptions", async () => {
                    let [{
                        TabSqliteSubscriptionBackend: e
                    }, {
                        SqliteSubscriptionManager: t
                    }, {
                        OptimisticUpdateComposer: a
                    }] = await Promise.all([Promise.all([r.e(14208), r.e(93199)]).then(r.bind(r, 623643)), Promise.all([r.e(14208), r.e(93199)]).then(r.bind(r, 209974)), Promise.all([r.e(14208), r.e(93199)]).then(r.bind(r, 941053))]);
                    return {
                        TabSqliteSubscriptionBackend: e,
                        SqliteSubscriptionManager: t,
                        OptimisticUpdateComposer: a
                    }
                }),
                l = new WeakMap;

            function o() {}
            let u = Object.freeze({
                    loading: !0,
                    seq: -1,
                    value: void 0,
                    valueSeq: void 0,
                    error: void 0,
                    errorSeq: void 0
                }),
                d = {
                    subscribe: () => o,
                    getSnapshot: () => u,
                    dispatch: o
                };
            async function c(e, t, a, n, s, i) {
                let l, o, u, d = n.rowType;
                if (!d) throw Error(`Optimistic updates not supported for queries without a RowType or primaryKey: ${n.key}`);
                let c = new i(d, a);
                try {
                    t(c)
                } finally {
                    l = c.done()
                }
                let {
                    queryUpdate: v,
                    rowTypeUpdate: p
                } = l;
                if (!v && !p) return e();
                p && (s.dispatchRowTypeUpdate(n.userId, d, {
                    type: "put",
                    update: p
                }), o = () => {
                    s.dispatchRowTypeUpdate(n.userId, d, {
                        type: "del",
                        id: p.id
                    })
                }), v && (n.dispatch({
                    type: "put",
                    update: v
                }), u = () => {
                    n.dispatch({
                        type: "del",
                        id: v.id
                    })
                });
                let y = (0, r(975162).nQ)(10 * r(695216).TD, n.waitForRerun()),
                    f = e();
                return Promise.all([f, y]).finally(() => {
                    var e, t;
                    null == (e = o) || e(), null == (t = u) || t()
                }), await f
            }
        },
        404121: (e, t, r) => {
            r.d(t, {
                J: () => s
            });
            var a = r(296540);
            r(16280);
            let n = new(r(245541)).R({
                key: "offline_autosync_setting_2",
                namespace: r(274919).cd,
                important: !0,
                trackingType: "necessary"
            });

            function s(e) {
                let t = e ? `offline_autosync:${e}` : void 0,
                    s = function(e) {
                        let {
                            key: t,
                            getFallbackValue: n,
                            setFallbackValue: s
                        } = e, i = (0, r(533992).v3)(), l = i.currentUser.id, o = i.sqliteConnection, u = t && l ? (0, r(573146).F4)
                        `SELECT value_json FROM setting WHERE meta_user_id = ${l} AND key = ${t}`: void 0, {
                            loading: d,
                            value: c,
                            error: v
                        } = (0, r(131297).pQ)("useSqliteSetting", u, {
                            allowError: !0,
                            readTables: ["setting"]
                        }), p = (0, r(682985).K8)(n, [n]), [y, f] = (0, a.useState)(!1), g = (0, a.useCallback)(e => {
                            s(e)
                        }, [s]), w = (0, a.useCallback)(e => {
                            if (!o || !t || !l) return;
                            let a = JSON.stringify(e);
                            (0, r(911822).G2)({
                                connection: o,
                                statements: [(0, r(573146).F4)
                                    `INSERT OR REPLACE INTO setting (meta_user_id, key, value_json, updated_at)
						VALUES (${l}, ${t}, ${a}, ${Date.now()})`.asWrite()
                                ],
                                queryName: "useSqliteSetting.set"
                            }).catch(() => {
                                f(!0), s(e)
                            })
                        }, [o, t, l, s]), b = (0, a.useMemo)(() => {
                            if (c) try {
                                return JSON.parse(c.value_json)
                            } catch (e) {
                                if (e instanceof SyntaxError) return;
                                throw e
                            }
                        }, [c]), [S, _] = (0, a.useState)(!0);
                        (0, a.useEffect)(() => {
                            if (v || !o || !t || !l) return void _(!1);
                            if (void 0 !== c) {
                                void 0 === p || y || s(void 0), _(!1);
                                return
                            }
                            if (y || void 0 === p) return void _(!1);
                            if (d) return;
                            _(!0);
                            let e = JSON.stringify(p);
                            (0, r(911822).G2)({
                                connection: o,
                                statements: [(0, r(573146).F4)
                                    `INSERT INTO setting (meta_user_id, key, value_json, updated_at)
					VALUES (${l}, ${t}, ${e}, ${Date.now()})
					ON CONFLICT DO NOTHING`.asWrite()
                                ],
                                queryName: "useSqliteSetting.migrate"
                            }).catch(() => {
                                f(!0)
                            })
                        }, [d, v, o, t, c, l, p, y, s]);
                        let h = (0, a.useRef)(t);
                        return h.current !== t ? (h.current = t, _(!0), f(!1), {
                            status: "pending"
                        }) : t ? o ? d || S ? {
                            status: "pending"
                        } : v || y ? {
                            status: "resolved",
                            value: {
                                value: p,
                                set: g
                            }
                        } : {
                            status: "resolved",
                            value: {
                                value: b,
                                set: w
                            }
                        } : {
                            status: "resolved",
                            value: {
                                value: p,
                                set: g
                            }
                        } : {
                            status: "pending"
                        }
                    }({
                        key: t,
                        getFallbackValue: (0, a.useCallback)(() => {
                            var t;
                            if (e) return null == (t = n.getState()) ? void 0 : t[e]
                        }, [e]),
                        setFallbackValue: (0, a.useCallback)(t => {
                            if (!e) return;
                            let r = n.getState() ? ? {};
                            if (void 0 !== t) n.setState({ ...r,
                                [e]: t
                            });
                            else {
                                let {
                                    [e]: t, ...a
                                } = r;
                                n.setState(Object.keys(a).length > 0 ? a : void 0)
                            }
                        }, [e])
                    }),
                    {
                        value: i,
                        set: l
                    } = "resolved" === s.status ? s.value : {
                        value: void 0,
                        set: void 0
                    },
                    o = (0, a.useCallback)(e => {
                        null == l || l(e)
                    }, [l]),
                    u = (0, a.useCallback)(() => {
                        let e = "on" === i ? "off" : "on";
                        (0, r(104310).u)({
                            event: {
                                eventName: "offline_autosyncing_toggled",
                                eventProperties: {
                                    toggle_status: e
                                }
                            }
                        }), o(e)
                    }, [i, o]);
                return "pending" === s.status ? {
                    status: "pending"
                } : {
                    status: "resolved",
                    value: {
                        value: i,
                        set: o,
                        toggle: u
                    }
                }
            }
        },
        477184: (e, t, r) => {
            r.d(t, {
                T: () => a
            });
            async function a(e) {
                let {
                    connection: t,
                    userId: a,
                    taskType: n
                } = e, [{
                    data: s
                }] = await (0, r(911822).G2)({
                    connection: t,
                    statements: [(0, r(573146).F4)
                        `SELECT last_executed_at FROM offline_download_metadata WHERE ${r(573146).F4.and([(0,r(573146).F4)`meta_user_id = ${a}`,(0,r(573146).F4)`task_type = ${n}`])} LIMIT 1`.asRead()
                    ],
                    queryName: "getOfflineMetadataLastExecutedAt"
                });
                return r(381453).Jt(s, "[0][last_executed_at]")
            }
        }
    }
]);