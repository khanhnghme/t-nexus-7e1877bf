"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [39951], {
        18922: (e, t, r) => {
            r.d(t, {
                f: () => n
            });
            var a = () => r(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        isFrameReady: !1,
                        tabStates: void 0
                    }
                }
                setTabStates(e) {
                    this.setState({ ...this.state,
                        tabStates: e
                    })
                }
                setIsFrameReady(e) {
                    this.setState({ ...this.state,
                        isFrameReady: e
                    })
                }
                getStateForProvider(e) {
                    if (this.state.tabStates && this.state.tabStates[e]) return this.state.tabStates[e]
                }
                consumeState(e) {
                    var t;
                    null != (t = this.state) && t.tabStates && this.state.tabStates[e] && this.update(t => {
                        if (!(null != t && t.tabStates)) return t;
                        let r = { ...t.tabStates
                        };
                        return (delete r[e], 0 === Object.keys(r).length) ? {
                            tabStates: void 0,
                            isFrameReady: t.isFrameReady
                        } : {
                            tabStates: r,
                            isFrameReady: t.isFrameReady
                        }
                    })
                }
            }
            let n = new i
        },
        40742: (e, t, r) => {
            r.d(t, {
                n: () => i
            });
            var a = r(296540);

            function i() {
                let [e, t] = (0, a.useState)(!1);
                return (0, a.useEffect)(() => {
                    r(218744).default.waitUntilStatsigReadyAsync().then(() => {
                        t(!0)
                    })
                }, []), e
            }
        },
        63528: (e, t, r) => {
            r.d(t, {
                l: () => o
            }), r(898992), r(354520), r(672577), r(737550);
            var a = () => r(552923);
            class i extends a().u {
                abortController;
                isAcquiringWebLock = !1;
                isAcquiringVisibleTabLock = !1;
                hasVisibleTabLock = !1;
                lockRequestId = 0;
                visibilityChangeHandler;
                unloadHandler;
                constructor() {
                    super({
                        getInitialState: () => ({
                            hasWebLock: !1
                        }),
                        effect: () => (r(728372).AppStoreSidebarSpaceIdStore.addListener(e), e(), () => {
                            r(728372).AppStoreSidebarSpaceIdStore.removeListener(e), this.cleanupLastLock()
                        })
                    });
                    const e = this.setupCalendarBrowserSubscriptionLock.bind(this);
                    this.visibilityChangeHandler = async () => {
                        document.hasFocus() && await (0, r(975162).wR)(100), "visible" === document.visibilityState && (this.requestWebLock({
                            steal: document.hasFocus()
                        }), this.maybeRequestSecondaryVisibleTabLock()), "hidden" === document.visibilityState && this.maybeRelinquishLock()
                    }, this.unloadHandler = () => {
                        this.cleanupLastLock()
                    }
                }
                cleanupLastLock() {
                    var e;
                    null == (e = this.abortController) || e.abort("cleanup_last_lock"), document.removeEventListener("visibilitychange", this.visibilityChangeHandler), window.removeEventListener("focus", this.visibilityChangeHandler), window.removeEventListener("unload", this.unloadHandler)
                }
                async maybeRelinquishLock() {
                    await (0, r(975162).wR)(100), "visible" === document.visibilityState || document.hasFocus() || this.state.hasWebLock && this.getSecondaryVisibleTabShouldStealChannel().postMessage("relinquish")
                }
                async setupCalendarBrowserSubscriptionLock() {
                    this.cleanupLastLock(), this.requestWebLock({
                        steal: !1
                    }), this.maybeRequestSecondaryVisibleTabLock(), await (0, r(975162).lG)([this.waitUntil(() => this.state.hasWebLock), r(329464).A.waitUntil(() => r(329464).A.state.initialRenderCompleted)]), this.requestWebLock({
                        steal: "visible" === document.visibilityState && document.hasFocus()
                    }), document.addEventListener("visibilitychange", this.visibilityChangeHandler), window.addEventListener("focus", this.visibilityChangeHandler), window.addEventListener("unload", this.unloadHandler)
                }
                getLockName() {
                    let e = r(728372).AppStoreSidebarSpaceIdStore.getState();
                    return e ? `app_level_calendar_event_subscription_leader-${e}` : "app_level_calendar_event_subscription_leader"
                }
                getSecondaryVisibleTabLockName() {
                    return `${this.getLockName()}-secondary_visible_tab`
                }
                getSecondaryVisibleTabShouldStealChannel() {
                    return new BroadcastChannel(`${this.getSecondaryVisibleTabLockName()}-should_steal`)
                }
                async maybeRequestSecondaryVisibleTabLock() {
                    if ("visible" !== document.visibilityState || this.state.hasWebLock || this.isAcquiringVisibleTabLock || this.hasVisibleTabLock) return;
                    this.isAcquiringVisibleTabLock = !0;
                    let e = new AbortController;
                    document.addEventListener("visibilitychange", () => e.abort("became_hidden"), {
                        once: !0,
                        signal: e.signal
                    }), this.waitUntil(() => this.state.hasWebLock, {
                        signal: e.signal
                    }).then(() => e.abort("became_leader")).catch(() => {});
                    try {
                        await navigator.locks.request(this.getSecondaryVisibleTabLockName(), {
                            mode: "exclusive",
                            signal: e.signal
                        }, async () => {
                            this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !0, e.signal.aborted || await new Promise(t => {
                                this.getSecondaryVisibleTabShouldStealChannel().addEventListener("message", () => {
                                    this.requestWebLock({
                                        steal: !0
                                    }), t()
                                }, {
                                    once: !0,
                                    signal: e.signal
                                }), e.signal.addEventListener("abort", t, {
                                    once: !0
                                })
                            })
                        })
                    } catch {}
                    this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !1, e.signal.aborted || e.abort("cleanup")
                }
                async visibleTabAwaitingLockExists() {
                    var e, t;
                    let r = await navigator.locks.query(),
                        a = null == (e = r.held) || null == (e = e.find(e => e.name === this.getSecondaryVisibleTabLockName())) ? void 0 : e.clientId,
                        i = null == (t = r.pending) ? void 0 : t.filter(e => e.name === this.getLockName());
                    return a && (null == i ? void 0 : i.some(e => e.clientId === a))
                }
                async requestWebLock(e) {
                    var t;
                    let {
                        steal: a
                    } = e;
                    if (!r(728372).AppStoreSidebarSpaceIdStore.getState() || this.state.hasWebLock || this.isAcquiringWebLock && !a) return;
                    let i = ++this.lockRequestId;
                    this.isAcquiringWebLock = !0, null == (t = this.abortController) || t.abort("new_request");
                    let n = new AbortController;
                    this.abortController = n;
                    try {
                        await navigator.locks.request(this.getLockName(), {
                            mode: "exclusive",
                            steal: a,
                            signal: a ? void 0 : n.signal
                        }, async () => {
                            this.isAcquiringWebLock = !1, "visible" !== document.visibilityState && await this.visibleTabAwaitingLockExists() && (await (0, r(975162).wR)(100), this.getSecondaryVisibleTabShouldStealChannel().postMessage("should_steal")), n.signal.aborted || (this.setState({
                                hasWebLock: !0
                            }), await new Promise(e => {
                                n.signal.addEventListener("abort", () => e(), {
                                    once: !0
                                })
                            }))
                        })
                    } catch {}
                    i === this.lockRequestId && (this.setState({
                        hasWebLock: !1
                    }), this.isAcquiringWebLock = !1, n.signal.aborted || this.requestWebLock({
                        steal: !1
                    })), n.signal.aborted || n.abort("cleanup"), this.maybeRequestSecondaryVisibleTabLock()
                }
            }
            let n = new i,
                o = new(r(345426)).ComputedStore(() => r(218744).default.checkGate({
                    gateName: "debug__disable_app_activity_subscription_leader"
                }) ? {
                    hasWebLock: !1
                } : n.getState(), {
                    debugName: "DEBUG__InAppActivitySubscriptionLeaderStore"
                });
            (0, r(202146).exposeDebugGetter)("InAppActivitySubscriptionLeaderStore", () => o.getState())
        },
        75170: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var a = () => r(546605);
            let i = [];
            class n extends a().Store {
                getInitialState() {
                    return {
                        open: !1,
                        createOrUpdateMenuState: void 0,
                        tabSpacesState: {
                            tabSpaces: {},
                            orderedTabSpaceIds: i,
                            ungroupedTabCount: 0,
                            activeTabSectionId: "ungrouped"
                        }
                    }
                }
            }
            let o = new n;
            (0, r(202146).exposeDebugValue)("ElectronTabSpacesMenuStore", o);
            let s = o
        },
        96351: (e, t, r) => {
            r.d(t, {
                B: () => a
            });

            function a({
                openInNew: e,
                url: t,
                makeTabActive: i,
                position: n,
                isNewPage: o,
                environment: s
            }) {
                "tab" === e && i ? (0, r(266527).x)(s, {
                    url: t,
                    position: n,
                    makeTabActive: i,
                    isNewPage: o
                }) : "tab" !== e || i ? "window" === e && (0, r(714770).E)(t) : (0, r(380839).x)(s, {
                    url: t,
                    position: n
                })
            }
        },
        131297: (e, t, r) => {
            r.d(t, {
                pQ: () => n,
                uW: () => i
            }), r(16280);
            var a = r(296540);

            function i(e, t, n, l = !1) {
                var c, p, f, m;
                let v, g = function(e) {
                        var t, i;
                        let n = null == (t = (0, r(533992).v3)().sqliteConnection) || null == (i = t.getObserver) ? void 0 : i.call(t),
                            l = n ? s.get(n) : void 0,
                            [c, d] = (0, a.useState)(l),
                            u = (0, r(815048).fJ)(o, {
                                disabled: !e
                            });
                        return (0, a.useEffect)(() => {
                            if (c || !n || !e) return;
                            let t = s.get(n);
                            if (t) return void d(t);
                            if ("resolved" !== u.status || !n) return;
                            let {
                                TabSqliteSubscriptionBackend: a,
                                SqliteSubscriptionManager: i
                            } = u.value, o = new i(new a({
                                observer: n,
                                debounceMs: 100,
                                broadcastWritesChannel: new BroadcastChannel("sqlite-writes"),
                                config: r(986939).A
                            }));
                            s.set(n, o), d(o)
                        }, [n, u, c, e]), e ? c : void 0
                    }(!!t),
                    h = function(e, t, i, n, o) {
                        let s = (0, r(533992).v3)().currentUser.id,
                            l = t ? function(e, t, a, i, n, o) {
                                var s, l, c;
                                if (!a && null != (s = i.rowType) && s.singleton) throw Error(`Must use useSqliteSingleton for singleton row type: ${i.rowType.name}`);
                                let d = t.sql(),
                                    u = i.readTables;
                                if (!u) {
                                    let e = null == n ? void 0 : n.parseQuery(d);
                                    if (e) switch (e.type) {
                                        case "unknown":
                                            u = e.tables;
                                            break;
                                        case "error":
                                            throw e.error;
                                        case "crud":
                                            if (e.writeTables.length > 0) throw Error(`useSqliteQuery: cannot subscribe to query that writes to tables: ${e.writeTables.join(", ")}`);
                                            u = e.readTables;
                                            break;
                                        default:
                                            (0, r(722371).HB)(e)
                                    } else u = null == (c = i.rowType) ? void 0 : c.readTables
                                }
                                let p = {
                                    _key: `sqlite:KeyCreatorNotLoaded:${e}`,
                                    _options: i,
                                    singleton: a,
                                    sql: d,
                                    args: t.args,
                                    queryName: e,
                                    readTables: u,
                                    primaryKey: i.primaryKey ? ? (null == (l = i.rowType) ? void 0 : l.primaryKey),
                                    rowType: i.rowType,
                                    userId: o || "guest"
                                };
                                return n && (p._key = n.keyCreator.getKeyUncached(p)), p
                            }(e, t, i, n, o, s) : void 0,
                            [c, d] = (0, a.useState)(l);
                        return (null == l ? void 0 : l._key) !== (null == c ? void 0 : c._key) ? (d(l), l) : c
                    }(e, t, l, n, g),
                    b = h ? null == g ? void 0 : g.createQuery(h._key, h) : void 0,
                    _ = b ? ? d,
                    S = (0, a.useSyncExternalStore)(_.subscribe, _.getSnapshot),
                    y = (c = b, p = !!(null == h ? void 0 : h.singleton), f = g, v = null == (m = (0, r(815048).fJ)(o, {
                        disabled: !c
                    }).value) ? void 0 : m.OptimisticUpdateComposer, (0, a.useCallback)((e, t) => c && f && v && c ? u(e, t, p, c, f, v) : e(), [c, f, v, p])),
                    w = !!t,
                    A = (0, a.useMemo)(() => ({ ...S,
                        withOptimistic: y,
                        enabled: w
                    }), [S, y, w]);
                if (A.error && !(null != h && h._options.allowError)) throw A.error;
                return A
            }

            function n(e, t, r) {
                let n = i(e, t, { ...r,
                    rowType: r.singletonType
                }, !0);
                return (0, a.useMemo)(() => {
                    var e;
                    return {
                        enabled: n.enabled,
                        loading: n.loading,
                        seq: n.seq,
                        value: null == (e = n.value) ? void 0 : e[0],
                        valueSeq: n.valueSeq,
                        error: n.error,
                        errorSeq: n.errorSeq,
                        withOptimistic: n.withOptimistic
                    }
                }, [n])
            }
            let o = new(r(815048)).O2("SqliteSubscriptions", async () => {
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
                s = new WeakMap;

            function l() {}
            let c = Object.freeze({
                    loading: !0,
                    seq: -1,
                    value: void 0,
                    valueSeq: void 0,
                    error: void 0,
                    errorSeq: void 0
                }),
                d = {
                    subscribe: () => l,
                    getSnapshot: () => c,
                    dispatch: l
                };
            async function u(e, t, a, i, n, o) {
                let s, l, c, d = i.rowType;
                if (!d) throw Error(`Optimistic updates not supported for queries without a RowType or primaryKey: ${i.key}`);
                let u = new o(d, a);
                try {
                    t(u)
                } finally {
                    s = u.done()
                }
                let {
                    queryUpdate: p,
                    rowTypeUpdate: f
                } = s;
                if (!p && !f) return e();
                f && (n.dispatchRowTypeUpdate(i.userId, d, {
                    type: "put",
                    update: f
                }), l = () => {
                    n.dispatchRowTypeUpdate(i.userId, d, {
                        type: "del",
                        id: f.id
                    })
                }), p && (i.dispatch({
                    type: "put",
                    update: p
                }), c = () => {
                    i.dispatch({
                        type: "del",
                        id: p.id
                    })
                });
                let m = (0, r(975162).nQ)(10 * r(695216).TD, i.waitForRerun()),
                    v = e();
                return Promise.all([v, m]).finally(() => {
                    var e, t;
                    null == (e = l) || e(), null == (t = c) || t()
                }), await v
            }
        },
        141802: (e, t, r) => {
            function a(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "dictation_modal_open",
                        eventProperties: t
                    }
                })
            }

            function i(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "dictation_modal_close",
                        eventProperties: t
                    }
                })
            }

            function n(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "dictation_start",
                        eventProperties: t
                    }
                })
            }

            function o(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "dictation_end",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "dictation_error",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "update_dictation_language",
                        eventProperties: t
                    }
                })
            }
            r.d(t, {
                D_: () => n,
                E_: () => i,
                Im: () => o,
                K_: () => l,
                rP: () => s,
                uB: () => a
            })
        },
        163114: (e, t, r) => {
            function a(e) {
                var t;
                let a = null == (t = r(496704).K.findBlockFromId(e)) ? void 0 : t.getBlockStore();
                if (a) return a;
                let i = (0, r(974410).f)(a);
                if (i) return r(970831).B.createChildStore(i, {
                    id: e,
                    table: r(832375).evP
                })
            }

            function i(e) {
                return {
                    start: {
                        blockStoreId: e.start.store.id,
                        index: e.start.index
                    },
                    end: {
                        blockStoreId: e.end.store.id,
                        index: e.end.index
                    }
                }
            }

            function n(e) {
                let t = e.start.blockStoreId,
                    a = e.end.blockStoreId,
                    [i, n] = r(240414).T.findSelectablesFromIds([t, a]),
                    o = (null == i ? void 0 : i.props.store) && (0, r(374934).aI)(null == i ? void 0 : i.props.store),
                    s = t === a ? o : (null == n ? void 0 : n.props.store) && (0, r(374934).aI)(null == n ? void 0 : n.props.store);
                if (o && s) return {
                    start: {
                        store: o,
                        index: e.start.index
                    },
                    end: {
                        store: s,
                        index: e.end.index
                    }
                }
            }
            r.d(t, {
                AK: () => a,
                Em: () => n,
                Ns: () => i
            })
        },
        164305: (e, t, r) => {
            let a;
            r.d(t, {
                T: () => tv
            });
            var i = r(296540),
                n = () => r(986939);

            function o(e, t) {
                let a = (0, r(533992).v3)();
                (0, r(97668).Yb)(async () => {
                    if (!await (0, r(640666).Eo)({
                            trackingType: "performance",
                            cookieService: a.cookieService
                        }) || (await r(218744).default.waitUntilStatsigReadyAsync(), r(219279).StatsigInitializer.error || !r(219279).StatsigInitializer.isComplete)) return;
                    let i = void 0 === t ? r(218744).default.getEligibleGroup({
                        experimentId: e
                    }) : r(218744).default.getEligibleGroup({
                        experimentId: e,
                        defaultGroup: t
                    });
                    (0, r(826711).XA)(e, i)
                }, [e, t, a])
            }
            var s = () => r(680007),
                l = () => r(627179);
            let c = "personalization",
                d = new(r(815048)).O2("AgentWriterGlobalUndoListener", async () => await Promise.all([r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(76135), r.e(34038)]).then(r.bind(r, 339119))),
                u = (0, r(815048)._h)(d, e => e.AgentWriterGlobalUndoListener);

            function p(e) {
                r(255482).K.set({
                    userId: e.userId,
                    key: `${e.spaceId}:analytics_session`,
                    value: e.session
                })
            }
            async function f(e) {
                var t, a;
                (void 0 === r(728372).AppStoreCurrentUserStore.state || void 0 === (0, r(328765).S)()) && await r(728372).default.waitUntil(() => void 0 !== r(728372).AppStoreCurrentUserStore.state && void 0 !== (0, r(328765).S)());
                let i = null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id,
                    n = null == (a = (0, r(328765).S)()) ? void 0 : a.id;
                if (!document.hasFocus() || !i || !n) return;
                let o = (0, r(601952).C)({
                        userId: i,
                        spaceId: n
                    }),
                    s = (0, r(601952).g)({
                        userId: i,
                        spaceId: n,
                        storedSession: o
                    }),
                    l = Date.now();
                (async () => {
                    let {
                        maybeTriggerDailyFirstActivity: t
                    } = await r.e(86304).then(r.bind(r, 603533));
                    t({
                        environment: e,
                        userId: i,
                        spaceId: n
                    })
                })(), s ? p({
                    userId: i,
                    spaceId: n,
                    session: { ...s,
                        lastFocusedTime: l
                    }
                }) : p({
                    userId: i,
                    spaceId: n,
                    session: {
                        id: r(92513).JW(),
                        sessionStartTime: l,
                        lastFocusedTime: l
                    }
                })
            }
            var m = r(474848);
            let v = new(r(815048)).O2("NotionCalendarListener", () => Promise.all([r.e(17250), r.e(87971), r.e(55067), r.e(16704)]).then(r.bind(r, 180986))),
                g = (0, r(815048)._h)(v, e => e.NotionCalendarListener);

            function h() {
                return (0, r(229888).L)() ? (0, m.jsx)(g, {}) : null
            }
            r(410838), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            let b = new(r(815048)).O2("audioProcessDetectionActions", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 651997)));
            async function _() {
                if (!r(775657).electronApi || !r(775657).electronApi.getProcessesAccessingSpeakersWithResult) return r(300441).Q.fail({
                    message: "API not available"
                });
                try {
                    return await r(775657).electronApi.getProcessesAccessingSpeakersWithResult()
                } catch (e) {
                    return r(300441).Q.fail({
                        message: "Failed to get speaker processes",
                        error: e
                    })
                }
            }
            async function S() {
                if (!r(775657).electronApi || !r(775657).electronApi.getRunningInputAudioProcesses) return r(300441).Q.fail({
                    message: "API not available"
                });
                try {
                    return await r(775657).electronApi.getRunningInputAudioProcesses()
                } catch (e) {
                    return r(300441).Q.fail({
                        message: "Failed to get audio processes",
                        error: e
                    })
                }
            }
            var y = () => r(523661);
            async function w(e) {
                if (r(218744).default.checkGate({
                        gateName: "meeting_notes_detection_process_result"
                    })) {
                    let t = await (0, r(675646).K)();
                    if (r(300441).Q.isFail(t) || t.value.processes.map(y().v).filter(r(722371).O9).includes(e)) return !0;
                    let a = await _();
                    if (r(300441).Q.isFail(a)) {
                        let e = a.error;
                        return (null == e ? void 0 : e.message) !== "API not available"
                    }
                    return a.value.processes.map(e => (0, y().v)(e.processName)).filter(r(722371).O9).includes(e)
                } {
                    let t = await S();
                    return !!r(300441).Q.isFail(t) || t.value.map(y().v).filter(r(722371).O9).includes(e)
                }
            }

            function A(e, t) {
                for (let r of e)
                    if (!t.includes(r)) return {
                        shouldNotify: !0,
                        processName: r
                    };
                return {
                    shouldNotify: !1
                }
            }

            function E(e, t) {
                for (let r of t)
                    if (!e.includes(r)) return {
                        shouldStop: !0,
                        processName: r
                    };
                return {
                    shouldStop: !1
                }
            }

            function k(e, t) {
                var a;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (a = r(775657).electronApi.initializeRunningInputAudioProcessDetection) || a.call(r(775657).electronApi, e, t)
            }
            async function T(e) {
                let {
                    environment: t,
                    activeTranscriptionBlockStore: a,
                    currentlyRunningAudioProcessNames: i,
                    previouslyDetectedProcessNames: n
                } = e;
                if (void 0 !== a) {
                    let e = E(i, n);
                    if (e.shouldStop && e.processName) try {
                        if (await w(e.processName)) return void r(773352).log({
                            level: "info",
                            from: "meetingNotesDetection",
                            type: "process_still_running_after_debounce_check",
                            data: {
                                miscDataToConvertToString: {
                                    processName: e.processName,
                                    currentlyRunningAudioProcessNames: i,
                                    previouslyDetectedProcessNames: n
                                }
                            }
                        });
                        await C({
                            environment: t,
                            processName: e.processName,
                            currentlyRunningAudioProcessNames: i,
                            previouslyDetectedProcessNames: n,
                            activeTranscriptionBlockStore: a
                        })
                    } catch (t) {
                        r(773352).log({
                            level: "error",
                            from: "meetingNotesDetection",
                            type: "error_stopping_transcription_for_audio_process",
                            error: (0, r(416607).convertErrorToLog)(t),
                            data: {
                                miscDataToConvertToString: {
                                    processName: e.processName,
                                    currentlyRunningAudioProcessNames: i,
                                    previouslyDetectedProcessNames: n,
                                    activeTranscriptionBlockId: a.id
                                }
                            }
                        })
                    }
                } else {
                    let e = A(i, n);
                    if (e.shouldNotify && e.processName) try {
                        let r = await b.load();
                        await r.sendNotificationForRunningAudioProcess(t, e.processName)
                    } catch (t) {
                        r(773352).log({
                            level: "error",
                            from: "meetingNotesDetection",
                            type: "error_sending_notification_for_audio_process",
                            error: (0, r(416607).convertErrorToLog)(t),
                            data: {
                                miscDataToConvertToString: {
                                    processName: e.processName,
                                    currentlyRunningAudioProcessNames: i,
                                    previouslyDetectedProcessNames: n
                                }
                            }
                        })
                    }
                }
            }
            async function I(e) {
                let {
                    environment: t,
                    activeTranscriptionBlockStore: a,
                    currentlyRunningAudioProcessNames: i,
                    previouslyDetectedProcessNames: n,
                    processFirstSeenAtByName: o,
                    minimumEndedAudioProcessRuntimeBeforeAutoStopMs: s
                } = e, l = E(i, n);
                if (l.shouldStop && void 0 !== l.processName) try {
                    let e = o.get(l.processName),
                        c = void 0 === e ? void 0 : Math.max(0, Date.now() - e);
                    if (void 0 !== c && c < s) return void r(773352).log({
                        level: "info",
                        from: "meetingNotesDetection",
                        type: "process_runtime_too_short_for_auto_stop",
                        data: {
                            miscDataToConvertToString: {
                                processName: l.processName,
                                endedProcessRuntimeMs: c,
                                minimumEndedAudioProcessRuntimeBeforeAutoStopMs: s,
                                currentlyRunningAudioProcessNames: i,
                                previouslyDetectedProcessNames: n
                            }
                        }
                    });
                    if (await w(l.processName)) return void r(773352).log({
                        level: "info",
                        from: "meetingNotesDetection",
                        type: "process_still_running_after_check",
                        data: {
                            miscDataToConvertToString: {
                                processName: l.processName,
                                currentlyRunningAudioProcessNames: i,
                                previouslyDetectedProcessNames: n
                            }
                        }
                    });
                    await C({
                        environment: t,
                        processName: l.processName,
                        currentlyRunningAudioProcessNames: i,
                        previouslyDetectedProcessNames: n,
                        activeTranscriptionBlockStore: a
                    })
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "meetingNotesDetection",
                        type: "error_stopping_transcription_for_audio_process",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                processName: l.processName,
                                currentlyRunningAudioProcessNames: i,
                                previouslyDetectedProcessNames: n,
                                activeTranscriptionBlockId: a.id
                            }
                        }
                    })
                }
            }
            async function C(e) {
                var t;
                let {
                    environment: a,
                    processName: i,
                    currentlyRunningAudioProcessNames: n,
                    previouslyDetectedProcessNames: o,
                    activeTranscriptionBlockStore: s
                } = e;
                if ("transcribing" !== (0, r(869708).by)(s).state) return;
                let l = null == (t = s.getFormat()) || null == (t = t.transcription_state_history) ? void 0 : t.findLast(e => "transcribing" === e.state),
                    c = null != l && l.timestamp ? Date.now() - l.timestamp : void 0;
                if (l && void 0 !== c && c < 30 * r(695216).TD) return void r(773352).log({
                    level: "info",
                    from: "meetingNotesDetection",
                    type: "stop_transcription_too_soon",
                    data: {
                        miscDataToConvertToString: {
                            timeSinceLastStateChange: c
                        }
                    }
                });
                (0, r(104310).u)({
                    event: {
                        eventName: "system_audio_process_stopped",
                        eventProperties: {
                            process_name: i,
                            currently_running_audio_processes: n,
                            previously_running_audio_processes: o,
                            block_id: s.id
                        }
                    }
                });
                let d = await r(785576).w.load();
                await d.stopTranscription({
                    environment: a,
                    blockStore: s,
                    from: "audio_process_detection"
                })
            }

            function L({
                isActiveTab: e
            }) {
                let t, a, n, o, s, l, c, d, u, p, f, m, v, g, h, _, S;
                return function(e) {
                    let {
                        isElectron: t,
                        isActiveTab: a
                    } = e, n = (0, r(839362).W)(), o = (0, r(682985).K8)(() => {
                        let e = r(728372).AppStoreSidebarSpaceViewStore.getState();
                        return (null == e ? void 0 : e.isAiMeetingNotesAudioProcessDetectionMonitoringEnabled()) ? ? !1
                    }, []), s = t && n && o, l = (0, i.useRef)(void 0);
                    (0, i.useEffect)(() => {
                        let e = !1;
                        return async function() {
                            if (!a) return;
                            let t = await (0, r(470604).a)();
                            if (!e && t) {
                                if (void 0 === l.current) {
                                    l.current = s, s && k(1e3, !1);
                                    return
                                }
                                if (l.current !== s)
                                    if (l.current = s, s) k(1e3, !1);
                                    else {
                                        var i;
                                        null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (i = r(775657).electronApi.stopRunningInputAudioProcessDetection) || i.call(r(775657).electronApi)
                                    }
                            }
                        }(), () => {
                            e = !0
                        }
                    }, [s, a])
                }({
                    isElectron: (t = (0, r(533992).v3)()).device.isElectron,
                    isActiveTab: e
                }), a = (0, r(682985).K8)(() => {
                    let e = r(728372).AppStoreSidebarSpaceViewStore.getState();
                    return (null == e ? void 0 : e.isAiMeetingNotesAudioProcessDetectionMonitoringEnabled()) ? ? !1
                }, []), n = (0, r(682985).K8)(() => r(218744).default.getConfigKey("meeting_notes_audio_process_detection_config", "minimum_runtime_before_auto_stop_seconds") * r(695216).TD, []), o = (0, r(839362).W)(), s = (0, r(83208).X)("meeting_notes_use_audio_process_changed_v2"), l = t.device.isElectron && e && o && a, c = t.device.isElectron && o && a, d = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore), u = (0, r(682985).K8)(() => {
                    let e = r(898735).A.state.tabs,
                        t = r(585823).ei.state,
                        a = [];
                    return null != t && t.isTranscriptionBlock() && a.push(t), a.push(...e.flatMap(e => e.activeBlocks).flatMap(e => {
                        if (!e || !d) return [];
                        let t = r(970831).B.createChildStore(d, e.pointer);
                        return t.isTranscriptionBlock() && a.push(t), []
                    })), r(381453).hS(a, "id")
                }, [d]), (p = (0, i.useRef)(u)).current = u, f = (0, i.useRef)(void 0), m = (0, i.useCallback)(async e => {
                    let r = f.current ? ? [];
                    f.current = void 0;
                    let a = p.current;
                    await T({
                        environment: t,
                        activeTranscriptionBlockStore: a[0],
                        currentlyRunningAudioProcessNames: e,
                        previouslyDetectedProcessNames: r
                    })
                }, [t]), v = (0, i.useMemo)(() => (0, r(381453).sg)(m, 4 * r(695216).TD, {
                    trailing: !0
                }), [m]), g = (0, i.useRef)(async (e, t, r) => {}), (0, i.useLayoutEffect)(() => {
                    g.current = async (e, t, a) => {
                        if (l) try {
                            if (!await (0, r(470604).a)()) return;
                            let e = a.map(y().v).filter(r(722371).O9),
                                i = t.map(y().v).filter(r(722371).O9);
                            if (r(773352).log({
                                    level: "info",
                                    from: "meetingNotesDetection",
                                    type: "microphone_process_changed_detected",
                                    data: {
                                        miscDataToConvertToString: {
                                            oldProcessCount: i.length,
                                            newProcessCount: e.length,
                                            oldProcesses: i,
                                            newProcesses: e,
                                            oldProcessesUnfiltered: t,
                                            newProcessesUnfiltered: a
                                        }
                                    }
                                }), (0, r(381453).n4)(e, i)) return;
                            void 0 === f.current && (f.current = i), 0 === p.current.length ? await m(e) : await v(e)
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "meetingNotesDetection",
                                type: "error_in_audio_process_listener",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        oldProcesses: t,
                                        newProcesses: a
                                    }
                                }
                            })
                        }
                    }
                }, [l, v, m]), h = (0, i.useCallback)(async (e, t, r) => g.current(e, t, r), []), _ = (0, i.useRef)(async e => {}), (0, i.useLayoutEffect)(() => {
                    _.current = async a => {
                        if (!c) return;
                        let {
                            oldProcesses: i,
                            newProcesses: o,
                            metadata: s
                        } = a;
                        try {
                            let a = o.map(y().v).filter(r(722371).O9),
                                l = i.map(y().v).filter(r(722371).O9);
                            if (r(773352).log({
                                    level: "info",
                                    from: "meetingNotesDetection",
                                    type: "microphone_process_changed_detected",
                                    data: {
                                        miscDataToConvertToString: {
                                            oldProcessCount: l.length,
                                            newProcessCount: a.length,
                                            oldProcesses: l,
                                            newProcesses: a,
                                            oldProcessesUnfiltered: i,
                                            newProcessesUnfiltered: o
                                        }
                                    }
                                }), (0, r(381453).n4)(a, l)) return;
                            if (0 === p.current.length) {
                                if (!e || !await (0, r(470604).a)()) return;
                                let i = A(a, l);
                                if (!i.shouldNotify || !i.processName) return;
                                let n = await b.load();
                                await n.sendNotificationForRunningAudioProcess(t, i.processName);
                                return
                            }
                            let c = (0, r(385149).H)();
                            if (void 0 === c) return;
                            await I({
                                environment: t,
                                activeTranscriptionBlockStore: c,
                                currentlyRunningAudioProcessNames: a,
                                previouslyDetectedProcessNames: l,
                                processFirstSeenAtByName: function(e) {
                                    var t;
                                    let r = null == (t = e.metadata) ? void 0 : t.processFirstSeenAtByProcessId,
                                        a = new Map;
                                    if (void 0 === r) return a;
                                    for (let t of e.processIds) {
                                        let e = (0, y().v)(t);
                                        if (void 0 === e) continue;
                                        let i = r[t];
                                        if (void 0 === i) continue;
                                        let n = a.get(e);
                                        (void 0 === n || i < n) && a.set(e, i)
                                    }
                                    return a
                                }({
                                    processIds: [...new Set([...i, ...o])],
                                    metadata: s
                                }),
                                minimumEndedAudioProcessRuntimeBeforeAutoStopMs: n
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "meetingNotesDetection",
                                type: "error_in_audio_process_listener",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        oldProcesses: i,
                                        newProcesses: o
                                    }
                                }
                            })
                        }
                    }
                }, [t, e, c, n]), S = (0, i.useCallback)(async e => _.current(e), []), (0, i.useEffect)(() => {
                    if (s) {
                        let e = r(884972).bV.addListener(S);
                        if (void 0 !== e) return e
                    }
                    return r(884972).bH.addListener(h)
                }, [h, S, s]), (0, i.useEffect)(() => () => {
                    v.flush(), f.current = void 0
                }, [v]), null
            }
            r(944114), r(430670);
            let U = new(r(289786)).A;
            var R = () => r(256209);
            let N = new(r(245541)).R({
                    key: "rateLimitedEvernoteImports",
                    namespace: r(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                P = {
                    GlobalInAppMessageListener: new(r(815048)).O2("GlobalInAppMessageListener", () => r.e(94869).then(r.bind(r, 386856)))
                },
                D = (0, r(815048)._h)(P.GlobalInAppMessageListener, e => e.GlobalInAppMessageListener),
                x = new(r(815048)).O2("jamRecordingLinks", async () => await r.e(98213).then(r.bind(r, 129961))),
                M = 5 * l().Xb;
            async function O(e) {
                let {
                    connection: t,
                    userId: a,
                    spaceId: i,
                    pageId: n
                } = e, o = (0, r(573146).F4)
                `
		SELECT DISTINCT offline_action.autosync_type
		FROM offline_action
		JOIN offline_page ON offline_action.impacted_page_id = offline_page.id
			AND offline_action.meta_user_id = offline_page.meta_user_id
		WHERE offline_action.meta_user_id = ${a}
			AND offline_page.space_id = ${i}
			AND offline_action.impacted_page_id = ${n}
	`;
                return (await (0, r(911822).G2)({
                    connection: t,
                    statements: [o.asRead()],
                    queryName: "getPageOfflineAutosyncTypes"
                }))[0].data.map(e => e.autosync_type).filter(r(892503).O8)
            }
            let q = new(r(815048)).O2("offlineOnboarding", () => Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(96527), r.e(30085), r.e(90109), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(79349), r.e(58360), r.e(33162), r.e(82538), r.e(63793), r.e(18881), r.e(62731), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(2276), r.e(30532), r.e(73588), r.e(3723), r.e(91100), r.e(78311), r.e(4287), r.e(9817), r.e(65594), r.e(47302), r.e(91636), r.e(36441), r.e(64049), r.e(75189), r.e(28372), r.e(28663), r.e(47281), r.e(29087), r.e(46350), r.e(75234), r.e(67281), r.e(66200), r.e(52064), r.e(69626), r.e(82816), r.e(2832), r.e(48095), r.e(67098), r.e(35118), r.e(63611), r.e(94849), r.e(75484), r.e(98821), r.e(97711), r.e(89076), r.e(86998), r.e(58889), r.e(22920), r.e(9914), r.e(78257), r.e(84382), r.e(51386), r.e(95150), r.e(10471), r.e(87087), r.e(98419), r.e(11719), r.e(13592), r.e(6743), r.e(5234), r.e(85376), r.e(67252), r.e(42709), r.e(44903), r.e(92181), r.e(7251), r.e(72143), r.e(67612), r.e(53478), r.e(75559), r.e(86793), r.e(34), r.e(54253), r.e(26665), r.e(67984), r.e(605), r.e(75681)]).then(r.bind(r, 373147))),
                W = (0, r(815048)._h)(q, e => e.OfflinePagesListener),
                F = {
                    style0: {
                        fontWeight: r(699422).Wy.medium
                    },
                    style1: {
                        color: r(632079).Tj.text.secondary
                    }
                },
                B = function() {},
                $ = 5 * r(695216).Xb;
            var j = () => r(104794),
                K = () => r(383613),
                V = () => r(975162);
            async function z(e) {
                let {
                    environment: t,
                    pageId: a,
                    spaceId: i,
                    bypassServerCache: o
                } = e;
                try {
                    let e = t.currentUser.id,
                        s = (0, r(6146).getOPFSPageCacheInstance)();
                    if (e && s && await s.delete(e, a), !i) return void r(773352).log({
                        level: "error",
                        from: "deleteOPFSAndRefetchPage",
                        type: "missingSpaceId",
                        data: {
                            miscDataToConvertToString: {
                                pageId: a
                            }
                        }
                    });
                    let l = await j().performRemoteLoadPage({
                        environment: t,
                        request: {
                            page: {
                                id: a,
                                spaceId: i
                            },
                            verticalColumns: n().A.isMobile
                        },
                        abortSignal: void 0,
                        prefetchCacheKey: void 0,
                        headers: {},
                        bypassServerCache: o
                    });
                    if ("success" !== l.type) throw l.error;
                    let c = l.data.cursors.filter(e => !(0, K().ys)(e));
                    for (; c.length > 0;) c = (await V().lX(c, 10, async e => {
                        let r = await j().performRemoteLoadPage({
                            environment: t,
                            request: {
                                page: {
                                    id: a,
                                    spaceId: i
                                },
                                cursor: e,
                                verticalColumns: n().A.isMobile
                            },
                            abortSignal: void 0,
                            prefetchCacheKey: void 0,
                            headers: {},
                            bypassServerCache: o
                        });
                        return "success" !== r.type ? {
                            cursors: []
                        } : r.data
                    })).flatMap(e => (e.cursors ? ? []).filter(e => !(0, K().ys)(e)))
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "deleteOPFSAndRefetchPage",
                        type: "deleteOPFSAndRefetchPageFailed",
                        data: {
                            miscDataToConvertToString: {
                                pageId: a,
                                spaceId: i,
                                bypassServerCache: o
                            }
                        },
                        error: (0, r(416607).convertErrorToLog)(e)
                    })
                }
            }
            var H = () => r(359489),
                G = () => r(259242);
            r(16280);
            let J = (0, r(477465).Dv)("extractWebClipperContent"),
                X = new(r(815048)).O2("thirdPartyScripts", () => r.e(1978).then(r.bind(r, 267032))),
                Q = (0, r(815048)._h)(X, e => e.InjectThirdPartyScripts);
            var Y = () => r(949830),
                Z = () => r(868488),
                ee = () => r(679321),
                et = () => r(709633);
            async function er(e, t) {
                for (let a of (await r(167629).y(), t.getSpaceViewStores())) {
                    for (let e of a.getBookmarkedPageStores()) ea(e);
                    let t = a.getSharedPages();
                    if (t)
                        for (let e of t) ea(e);
                    for (let e of (0, ee().r)(a))
                        for (let t of (0, et().O)({
                                teamStore: e
                            })) ea(t);
                    let r = a.getSpaceStore();
                    if (r)
                        for (let t of (Y().A.getData(e, {
                                spaceId: r.id,
                                userId: e.currentUser.id
                            }), (0, Z().I)(e, r))) ea(t)
                }
            }

            function ea(e) {
                for (let t of (e.load(), e.getOwnedAndLinkedCollectionStores())) t.load()
            }
            r(413611);
            let ei = "hello";

            function en(e) {
                let t = e.currentUser.isLoggedIn(),
                    {
                        device: r
                    } = e;
                return "serviceWorker" in navigator && t && r.isBrowser && !r.isMobileBrowser && !r.isSafari
            }

            function eo() {
                var e;
                "serviceWorker" in navigator && navigator.serviceWorker.getRegistration().then(e => {
                    null == e || e.unregister()
                }), null == (e = self.caches) || e.open(r(259533).BROWSER_SW_VERSION_CACHE_NAME).then(e => {
                    null == e || e.delete(r(259533).BROWSER_SW_VERSION_CACHE_PATH), null == e || e.delete(r(259533).BROWSER_SW_VERSION_CACHE_MIGRATION_VERSION_PATH)
                })
            }
            async function es(e) {
                await r(728372).default.waitUntilRendered();
                let t = r(728372).AppStoreMainEditorCurrentBlockStore.state;
                return !!r(728372).AppStoreCurrentUserStore.state && !!t && !(0, r(142484).q)(e, t, t.getSpaceStore())
            }
            async function el(e, t) {
                await es(e) && (r(194763).Dv(e, t, "banner"), r(474329).HQ({
                    bannerStore: r(465361).A,
                    id: "AppUpdate",
                    contentKey: "minor_app_update",
                    styleKey: r(909595).q.Blue
                }))
            }

            function ec(e) {
                let {
                    updateType: t,
                    nextVersion: a,
                    nextVersionCreatedTime: i,
                    isRollback: n,
                    environment: o
                } = e;
                if (t === r(355981).UpdateType.Major || t === r(355981).UpdateType.Minor || r(194763).wT() || n) a && r(194763).fC(a) && r(194763).qr(a, i), el(o, t);
                else if (r(194763).KD()) r(194763).Dv(o, t, "modal"), r(647095).ui({
                    message: (0, m.jsx)(r(109939).sA, {
                        defaultMessage: "We just launched new features!",
                        id: "breakingUpdateDialog.title"
                    }),
                    showCancel: !1,
                    keepFocus: !1,
                    handleCancel: () => r(194763).K0(o),
                    items: [{
                        label: (0, m.jsx)(r(109939).sA, {
                            defaultMessage: "Update and see what’s new",
                            id: "breakingUpdateDialog.updateButtonTitle"
                        }),
                        color: "blue",
                        onAccept: () => r(194763).K0(o)
                    }],
                    innerStyle: {
                        width: 380
                    }
                });
                else a && r(194763).fC(a) && r(194763).qr(a, i)
            }

            function ed(e, t) {
                let {
                    AppUpdateStore: r
                } = t;
                r.state.appUpdate && "ready" === r.state.appUpdate.state || r.setState({
                    electronUpdate: r.state.electronUpdate,
                    appUpdate: {
                        state: "error",
                        error: e
                    }
                })
            }

            function eu(e, t) {
                let {
                    AppUpdateStore: a
                } = t;
                if (a.state.appUpdate && "ready" === a.state.appUpdate.state) return;
                let i = (0, r(355981).parseVersion)(e.version),
                    n = r(194763).Cv(),
                    o = (0, r(355981).getUpdateType)({
                        currentVersion: n,
                        nextVersion: i,
                        app: "client"
                    });
                a.setState({
                    electronUpdate: a.state.electronUpdate,
                    appUpdate: {
                        state: "downloading",
                        type: o,
                        version: i,
                        timestamp: Date.now(),
                        progress: 0
                    }
                })
            }

            function ep(e, t) {
                let {
                    AppUpdateStore: r
                } = t, a = r.state;
                a.appUpdate && "downloading" === a.appUpdate.state && r.setState({
                    electronUpdate: a.electronUpdate,
                    appUpdate: { ...a.appUpdate,
                        progress: e.downloaded / e.total
                    }
                })
            }

            function ef(e, t) {
                let {
                    AppUpdateStore: a
                } = t, i = (0, r(355981).parseVersion)(e.version), n = r(194763).Cv(), o = (0, r(355981).getUpdateType)({
                    currentVersion: n,
                    nextVersion: i,
                    app: "client"
                }), s = (0, r(355981).isLessThanVersion)(i, n), l = e.createdTime;
                r(194763).fC(i) || a.setState({
                    electronUpdate: a.state.electronUpdate,
                    appUpdate: {
                        state: "ready",
                        type: o,
                        version: i,
                        versionCreatedTime: l,
                        isRollback: s
                    }
                }), ec({
                    updateType: o,
                    nextVersion: i,
                    nextVersionCreatedTime: l,
                    isRollback: s,
                    environment: t
                })
            }
            async function em() {
                return r(775657).electronApi && r(775657).electronApi.windowIsVisible ? r(775657).electronApi.windowIsVisible() : "visible" === document.visibilityState
            }
            async function ev(e) {
                e.device.isBrowser && document.hidden || e.device.isElectron && !await em() || (e.device.isMobileNative && "none" === r(205885).A.state.mobileConnectivityType ? eg(!1) : r(170801).isConnected() ? eg(!0) : !1 === navigator.onLine ? eg(!1) : "success" === (await e.api.callApi({
                    eventName: "ping",
                    environment: e,
                    data: {}
                })).type ? eg(!0) : eg(!1))
            }

            function eg(e) {
                r(205885).A.setState({ ...r(205885).A.state,
                    online: e,
                    lastOfflineTimestamp: e ? r(205885).A.state.lastOfflineTimestamp : Date.now()
                })
            }

            function eh() {
                var e, t;
                return null != (e = r(575125).A.state) && e.open ? (null == (t = r(575125).A.state) ? void 0 : t.discussionIds) || [] : r(449473).B8.state.activeDiscussionStore ? [r(449473).B8.state.activeDiscussionStore.id] : []
            }

            function eb() {
                var e;
                return null != (e = r(350175).A.state) && null != (e = e.discussionIds) && e.length ? r(350175).A.state.discussionIds : r(449473).B8.state.activeDiscussionStore ? [r(449473).B8.state.activeDiscussionStore.id] : []
            }

            function e_(e) {
                let {
                    discussionId: t,
                    level: a
                } = e;
                return `
		.${(0,r(762507).EJ)({level:a})}.${(0,r(762507).wV)({discussionId:t})}.${r(728069).Do} {
			background: ${(0,r(632079).aO)(e)} !important;
			opacity: unset !important;
			border-bottom: 2px solid ${(0,r(632079).JG)(e)} !important;
		}
	`
            }

            function eS(e) {
                let {
                    level: t
                } = e;
                return `
		.${(0,r(762507).EJ)({level:t})}.${r(728069).uU}.${r(728069).Do} {
			background: ${(0,r(632079).aO)(e)} !important;
			opacity: unset !important;
			border-bottom: 2px solid ${(0,r(632079).JG)(e)} !important;
		}
	`
            }

            function ey(e) {
                let {
                    themeMode: t,
                    selected: a,
                    hovered: i
                } = e, n = (0, r(632079).FK)({
                    annotationType: "update",
                    type: "background",
                    selected: a,
                    hovered: i,
                    overlapping: !1,
                    mode: t
                }), o = (0, r(632079).FK)({
                    annotationType: "update",
                    type: "underline",
                    selected: !1,
                    hovered: !0,
                    overlapping: !1,
                    mode: t
                });
                return `background: ${n} !important;
			border-bottom: 2px solid ${o} !important;`
            }

            function ew(e) {
                let {
                    discussionId: t,
                    themeMode: a,
                    selected: i,
                    hovered: n
                } = e;
                return `
		.${(0,r(762507).ED)({type:"update"})}.${(0,r(762507).wV)({discussionId:t})}.${r(728069).Do} {
			${ey({themeMode:a,selected:i,hovered:n})}
		}
		.${(0,r(762507).ED)({type:"remove"})}.${(0,r(762507).wV)({discussionId:t})}.${r(728069).Do} {
			${function(e){let{themeMode:t,selected:a,hovered:i}=e,n=(0,r(632079).FK)({annotationType:"remove",type:"background",selected:a,hovered:i,overlapping:!1,mode:t}),o=(0,r(632079).FK)({annotationType:"remove",type:"underline",selected:a,hovered:i,overlapping:!1,mode:t});return`
                background: $ {
                    n
                }!important;
                color: $ {
                    r(632079).Tj.text.secondary
                }!important;
                text - decoration: none!important;
                border - bottom: 2 px solid $ {
                    o
                }!important;
                `}({themeMode:a,selected:i,hovered:n})}
		}
	`
            }
            r(672577), r(803949);
            let eA = (0, r(109939).YK)({
                have_local_draft_unsaved_changes: {
                    defaultMessage: "Changes you made to the layout may not be saved.",
                    id: "closeConfirmationMessages.haveLocalDraftUnsavedChanges"
                },
                dictation_in_progress: {
                    defaultMessage: "Transcription is in progress.",
                    id: "closeConfirmationMessages.dictationInProgress"
                }
            });
            async function eE() {
                var e;
                return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.getRestoredClientState) ? void 0 : e.call(r(775657).electronApi)
            }
            var ek = () => r(18922);
            let eT = {
                    "editor:textSelection": {
                        saveState: function() {
                            let e = r(358377).default.state;
                            if ("empty" === e.mode) return;
                            let t = (0, r(163114).Ns)(e.multiSelection);
                            return {
                                version: 1,
                                data: { ...e,
                                    multiSelection: t
                                }
                            }
                        },
                        restoreState: function({
                            savedState: e
                        }) {
                            let {
                                data: t
                            } = e, {
                                multiSelection: a,
                                mode: i
                            } = t, n = (0, r(163114).Em)(a);
                            return !!n && ((0, r(726923).setMultiSelection)({
                                multiSelection: n,
                                readOnly: "readOnly" === i
                            }), !0)
                        }
                    },
                    "editor:historyState": {
                        saveState: function() {
                            var e, t;
                            let a = null == (e = window.history.state) ? void 0 : e.id,
                                i = null == (t = window.history.state) ? void 0 : t.currentUserId;
                            if (a && i) return (0, r(249966).z)({
                                historyId: a,
                                currentUserId: i,
                                scrollAndSelection: (0, r(25483).R)()
                            }), {
                                version: 1,
                                data: {
                                    historyId: a,
                                    userId: i
                                }
                            }
                        },
                        restoreState: function({
                            environment: e,
                            savedState: t
                        }) {
                            var a, i;
                            let {
                                data: {
                                    historyId: n,
                                    userId: o
                                }
                            } = t, s = null == (a = window.history.state) ? void 0 : a.id, l = null == (i = window.history.state) ? void 0 : i.currentUserId;
                            if (l !== o || s === n) return !0;
                            let c = (0, r(171929).G)({
                                historyId: n,
                                currentUserId: l
                            });
                            if (!c) return !0;
                            ! function({
                                environment: e,
                                historyState: t
                            }) {
                                var a;
                                let {
                                    PageScroller: i
                                } = r(862921).A;
                                if (t) {
                                    if (null != (a = t.blockIds) && a.length) return (0, r(521764).W)(e, {
                                        blockId: t.blockIds[0],
                                        animate: !1
                                    });
                                    i && (0, r(763230).Et)(t.scrollTop) && setTimeout(() => {
                                        var e;
                                        null == (e = i.getNode()) || e.scrollTo({
                                            top: t.scrollTop
                                        })
                                    }, 500)
                                }
                            }({
                                environment: e,
                                historyState: c
                            });
                            let d = e.RouterStore;
                            return (0, r(389432).T)({
                                RouterStore: d,
                                currentUserId: l
                            }), window.history.replaceState({
                                id: n,
                                currentUserId: l
                            }, ""), d.update(e => ({ ...e,
                                id: n,
                                historyState: c
                            })), !0
                        }
                    },
                    "collaboration:discussion": {
                        saveState: function() {
                            let e, t = r(332190).A.state;
                            if (t.open && ("block" !== t.type || "reaction" !== t.content) && ("comment" === t.content && (e = function(e) {
                                    let t = e.discussionInputStore.getState(),
                                        a = t.textStore.getValue();
                                    if (!a) return;
                                    let i = {
                                        open: e.open,
                                        blockId: e.blockId,
                                        content: e.content,
                                        rectBounds: {
                                            left: e.rect.left,
                                            top: e.rect.top,
                                            width: e.rect.width,
                                            height: e.rect.height
                                        },
                                        property_id: e.property_id,
                                        lastKnownBlockStoreId: e.lastKnownBlockStore.id,
                                        discussionInputStoreState: {
                                            textValue: a,
                                            showAttachFileIntro: t.showAttachFileIntro,
                                            renderFileAttachIntro: t.renderFileAttachIntro
                                        },
                                        spaceId: t.textStore.pointer.spaceId
                                    };
                                    return "inline" === e.type ? { ...i,
                                        type: "inline",
                                        multiSelection: (0, r(163114).Ns)(e.multiSelection)
                                    } : "block" === e.type ? { ...i,
                                        type: "block"
                                    } : void 0
                                }(t)), "reaction" === t.content && (e = function(e) {
                                    if ("inline" === e.type) return {
                                        open: e.open,
                                        blockId: e.blockId,
                                        content: e.content,
                                        emoji: e.emoji,
                                        rectBounds: {
                                            left: e.rect.left,
                                            top: e.rect.top,
                                            width: e.rect.width,
                                            height: e.rect.height
                                        },
                                        type: "inline",
                                        multiSelection: (0, r(163114).Ns)(e.multiSelection)
                                    }
                                }(t)), e)) return {
                                version: 1,
                                data: e
                            }
                        },
                        restoreState: function({
                            environment: e,
                            savedState: t
                        }) {
                            let {
                                data: a
                            } = t;
                            return "comment" === a.content ? function(e, t) {
                                let {
                                    rectBounds: a,
                                    discussionInputStoreState: i,
                                    spaceId: n,
                                    lastKnownBlockStoreId: o,
                                    ...s
                                } = t;
                                if (!n) return !1;
                                let l = new DOMRect(a.left, a.top, a.width, a.height),
                                    c = (0, r(163114).AK)(o);
                                if (!c) return !1;
                                let d = new(r(478597)).A(e, n);
                                if ((0, r(377796).createAndCommit)({
                                        userAction: "DiscussionInput.willMount",
                                        environment: e,
                                        canUndo: !0,
                                        cellTarget: {
                                            spaceWithId: n
                                        },
                                        perform: t => {
                                            r(41403).R9({
                                                environment: e,
                                                store: d.state.textStore,
                                                value: i.textValue,
                                                transaction: t
                                            })
                                        }
                                    }), "inline" === t.type) {
                                    let e = (0, r(163114).Em)(t.multiSelection);
                                    if (!e) return !1;
                                    r(332190).A.setState({ ...s,
                                        rect: l,
                                        lastKnownBlockStore: c,
                                        blockStore: c,
                                        type: "inline",
                                        discussionInputStore: d,
                                        lastEditables: (0, r(58512).$)(e),
                                        multiSelection: e
                                    })
                                } else "block" === t.type && r(332190).A.setState({ ...s,
                                    rect: l,
                                    lastKnownBlockStore: c,
                                    blockStore: c,
                                    type: "block",
                                    discussionInputStore: d
                                });
                                return !0
                            }(e, a) : "reaction" !== a.content || function(e, t) {
                                let {
                                    rectBounds: a,
                                    ...i
                                } = t, n = new DOMRect(a.left, a.top, a.width, a.height), o = (0, r(163114).AK)(t.blockId);
                                if (!o) return !1;
                                if ("inline" === t.type) {
                                    let a = (0, r(163114).Em)(t.multiSelection);
                                    if (!a) return !1;
                                    r(332190).A.setState({ ...i,
                                        rect: n,
                                        blockStore: o,
                                        type: "inline",
                                        multiSelection: a
                                    }), r(22229).of({
                                        environment: e,
                                        blockStore: o,
                                        multiSelection: a,
                                        formulasModule: void 0,
                                        rect: n
                                    })
                                }
                                return !0
                            }(e, a)
                        }
                    },
                    "collaboration:discussionMenuInteraction": {
                        saveState: function() {
                            let e = r(827862).A.state;
                            if (e.isActivelyComposing || e.isHovered) return {
                                version: 1,
                                data: e
                            }
                        },
                        restoreState: function({
                            savedState: e
                        }) {
                            let {
                                data: t
                            } = e;
                            return r(827862).A.setState(t), !0
                        }
                    },
                    "desktop:navigationHistory": {
                        saveState: function() {
                            let e = r(219040).H.getState();
                            if (void 0 !== e.activeIndex) return {
                                version: 1,
                                data: e
                            }
                        },
                        restoreState: function({
                            savedState: e
                        }) {
                            let {
                                data: t
                            } = e;
                            return r(219040).H.setState(t), (0, r(418108).N)(), !0
                        }
                    }
                },
                eI = new Map;

            function eC() {
                let e = function() {
                    let e = (0, r(715689).getCloseConfirmationDialogReason)();
                    if (e) return [{
                        reason: e,
                        providerId: "UnloadBlockerFromBeforeUnload"
                    }];
                    for (let e of eI.values()) {
                        let t = e.getUnloadBlockers;
                        if (!t) continue;
                        let r = t();
                        if (r.length > 0) return r
                    }
                    return []
                }();
                return e.length > 0 ? [{
                    blockers: e
                }] : [{
                    tabClientStates: eL()
                }]
            }

            function eL() {
                let e = {};
                for (let [r, a] of eI.entries()) try {
                    var t;
                    let i = null == (t = a.saveState) ? void 0 : t.call(a);
                    if (!i) continue;
                    e[r] = i
                } catch (e) {}
                return e
            }

            function eU() {
                return [eL()]
            }
            async function eR(e) {
                (await r(212680).i.load()).meetingNotificationClicked(e)
            }
            r(814603), r(147566), r(198721);
            let eN = "domain_migration_blocked";

            function eP() {
                r(819652).UW({
                    id: eN
                })
            }

            function eD() {
                (0, r(201790).httpRequest)({
                    url: `${n().A.secureFileConfig.rootPath}/refresh`,
                    method: "GET",
                    format: "text"
                })
            }
            r(823215), r(737550);
            let ex = r(381453).nF(function(e, t) {
                (0, r(334686).T)({
                    environment: e,
                    userId: (0, r(4962).ot)(t.user_id),
                    traits: { ...t,
                        user_id: (0, r(4962).ot)(t.user_id)
                    }
                })
            }, 5e3);
            async function eM(e, t) {
                t.loggedIn && await r(728372).default.waitUntilRendered();
                let a = await e.api.callApi({
                    eventName: "getUserAnalyticsSettings",
                    environment: e,
                    data: {}
                });
                if ("success" !== a.type) return void r(773352).log({
                    level: "warning",
                    from: "analyticsHelpers",
                    type: "fetchAnalyticsSettings",
                    data: {
                        miscDataToConvertToString: {
                            response: a
                        }
                    }
                });
                let i = a.data;
                return r(453997).default.setState(i), i
            }
            let eO = {
                recentPagesActions: new(r(815048)).O2("recentPagesActions", async () => Promise.resolve().then(r.bind(r, 384908))),
                userSignalsHelpers: new(r(815048)).O2("userSignalsHelpers", async () => r.e(84084).then(r.bind(r, 783782))),
                broadcastChannel: new(r(815048)).O2("broadcastChannel", async () => Promise.resolve().then(r.bind(r, 467135))),
                minisearchDependency: r(255636).f
            };

            function eq(e) {
                let {
                    elector: t,
                    broadcastChannel: r
                } = e.state;
                e.setState(e.getInitialState()), (async () => {
                    await (null == t ? void 0 : t.die()), await (null == r ? void 0 : r.close())
                })()
            }
            async function eW(e) {
                let {
                    spaceStore: t,
                    userId: a,
                    environment: i
                } = e, n = t.id;
                eq(r(915681).A), (0, r(755235).So)(e => ({
                    appStart: e.appStart,
                    hookStart: e.hookStart,
                    setupLocalSearchStart: performance.now()
                }));
                let o = eO.recentPagesActions.load().then(async e => {
                        await e.reinitializeGlobalRecentPagesStoreState(i, a, t)
                    }),
                    s = eO.userSignalsHelpers.load(),
                    l = eO.broadcastChannel.load(),
                    c = (async () => {
                        let {
                            BroadcastChannel: e,
                            createLeaderElection: t
                        } = await l, i = new e(`local_search_${n}_${a}`), o = t(i);
                        r(915681).A.update(e => ({ ...e,
                            elector: o,
                            broadcastChannel: i
                        }))
                    })(),
                    d = (await s).initializeAndLoadAllUserSignals({
                        spaceId: n,
                        userId: a,
                        environment: i
                    });
                await Promise.all([r(255636).f, o, d, c])
            }
            async function eF(e) {
                let {
                    environment: t,
                    onboardingState: a
                } = e, i = r(728372).AppStoreInAppCalloutStore.state, n = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!await r(897306).w3(t) || !i.getCalloutVisibility("cookie_preference_popup").canShow) return;
                let o = r(218744).default.checkGate({
                    gateName: "enable_cookie_consent_settings_hydration"
                });
                if (n && o) {
                    await n.load();
                    let e = n.getSettings(),
                        a = null == e ? void 0 : e.cookie_consent;
                    if (a) return void await r(154431).A.setCookieConsent(t, a)
                }
                if (r(154431).A.setPermission(r(333318).Gq), (0, r(521345).B)(t.currentUser.id) >= 2) {
                    r(897306).Wv(), r(576092).A.setState({
                        open: !0
                    }), r(897306).JI({
                        environment: t,
                        type: "modal",
                        onboardingState: a
                    }), i.updateCalloutStatus({
                        calloutId: "cookie_preference_popup",
                        visible: !0,
                        validateCanShow: !0
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "cookie_modal_shown",
                            eventProperties: {}
                        }
                    });
                    return
                }
                r(441742).Ay.state.currentItem || (i.updateCalloutStatus({
                    calloutId: "cookie_preference_popup",
                    visible: !0,
                    validateCanShow: !0
                }), r(441742).Ay.setState({ ...r(441742).Ay.state,
                    currentItem: {
                        key: (0, r(698596).Ay)(),
                        label: (0, m.jsx)("div", {
                            children: (0, r(333318).Qq)(r(444989).i, "snackbar")
                        }),
                        right: (0, m.jsx)(e$, {})
                    },
                    shouldReset: !1
                }), r(897306).JI({
                    environment: t,
                    type: "snackbar",
                    onboardingState: a
                }))
            }
            let eB = {
                buttonText: {
                    color: r(632079).Tj.text.inversePrimary
                },
                plainButton: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    marginInlineStart: 12
                }
            };

            function e$() {
                let e = (0, r(533992).v3)();
                return (0, m.jsxs)(r(4458).fI, {
                    children: [(0, m.jsx)(r(406910).p, {
                        onClick: () => r(897306).gz(e, {
                            necessary: !0,
                            performance: !0,
                            preference: !0,
                            targeting: !0
                        }),
                        children: (0, m.jsx)("b", {
                            style: eB.buttonText,
                            children: (0, m.jsx)(r(109939).sA, { ...r(333318).LS.acceptAllButtonLabel
                            })
                        })
                    }), (0, m.jsx)(r(406910).p, {
                        onClick: () => r(897306).gz(e, {
                            necessary: !0,
                            performance: !1,
                            preference: !1,
                            targeting: !1
                        }),
                        children: (0, m.jsx)("b", {
                            style: eB.buttonText,
                            children: (0, m.jsx)(r(109939).sA, { ...r(333318).LS.rejectAllButtonLabel
                            })
                        })
                    }), (0, m.jsx)(r(268988).A, {
                        hasDismissButton: !0,
                        children: e => (0, m.jsx)(r(406910).p, {
                            style: eB.plainButton,
                            ...e,
                            children: (0, m.jsx)(r(16275).I, {
                                icon: r(361226).ellipsisSmallIcon,
                                size: "sm",
                                colorVariant: "inversePrimary"
                            })
                        })
                    })]
                })
            }
            let ej = new(r(345426)).ComputedStore(() => {
                    let e = r(707785).A.state;
                    return e.phase === r(707785).i.willShow ? 0 : e.estimatedKeyboardWebViewOverlap
                }, {
                    debugName: "estimatedKeyboardWebViewOverlapStore"
                }),
                eK = r(969475).object({
                    required: {
                        ai: r(969475).number(),
                        business: r(969475).number(),
                        education: r(969475).number(),
                        personal: r(969475).number()
                    },
                    optional: {}
                }),
                eV = ["business", "personal", "education", "ai"];
            class ez {
                pageCategories;
                constructor(e) {
                    this.pageCategories = e
                }
                getCategoriesForPage(e) {
                    let t = [];
                    for (let r of this.pageCategories) r.pattern.test(e) && t.push(r.category);
                    return t
                }
                async trackPageVisit(e) {
                    let t = this.getCategoriesForPage(e);
                    0 !== t.length && await this.incrementPageVisitCount(t)
                }
            }

            function eH(e) {
                try {
                    eK.validator(e)
                } catch (e) {
                    return !1
                }
                for (let t of (0, r(722371).objectKeys)(e))
                    if (!Number.isInteger(e[t]) || e[t] < 0 || e[t] > 9) return !1;
                return !0
            }

            function eG(e) {
                return !!(0, r(722371).Xk)(eV, e)
            }
            let eJ = [];
            class eX extends ez {
                DEFAULT_PAGE_VISIT_DATA;
                environment;
                constructor(e) {
                    super(eJ), this.environment = e, this.DEFAULT_PAGE_VISIT_DATA = (0, r(722371).MU)(eV.map(e => [e, 0]))
                }
                async getPersonalizationData() {
                    if ("u" < typeof window) return { ...this.DEFAULT_PAGE_VISIT_DATA
                    };
                    let e = await (0, r(128190).getCookie)(this.environment, "notion_personalization");
                    if (!e) return { ...this.DEFAULT_PAGE_VISIT_DATA
                    };
                    let t = (0, l().$l)(e);
                    return t && eH(t) ? t : { ...this.DEFAULT_PAGE_VISIT_DATA
                    }
                }
                async setPageVisitTrackerDataFromCrossOver(e) {
                    if ("u" < typeof window || !eH(e)) return;
                    let t = await this.getPersonalizationData();
                    for (let [r, a] of Object.entries(e)) eG(r) && (e[r] = Math.max(a, t[r]));
                    await this.setPageVisitTrackerData(e)
                }
                async setPageVisitTrackerData(e) {
                    if ("u" < typeof window) return;
                    let t = { ...await this.getPersonalizationData()
                    };
                    for (let [r, a] of Object.entries(e)) eG(r) && (t[r] = (0, l().qE)({
                        value: a,
                        min: 0,
                        max: 9
                    }));
                    await (0, r(128190).setCookie)(this.environment, {
                        name: "notion_personalization",
                        value: JSON.stringify(t)
                    })
                }
                async incrementPageVisitCount(e) {
                    return Promise.resolve()
                }
            }
            let eQ = .01 > Math.random(),
                eY = .01 > Math.random();
            r(499128).I.setShouldCollect(eY && !0), r(958780).t.setShouldCollect(!1);
            let eZ = window.matchMedia("(prefers-color-scheme: dark)"),
                e0 = 10 * l().TD,
                e7 = 5 * e0;

            function e5() {}
            let e3 = function() {
                    let e = (0, r(533992).v3)(),
                        t = (0, i.useCallback)((t, a) => {
                            (0, r(104310).u)({
                                event: {
                                    eventName: "statsig_client_init_error",
                                    eventProperties: {
                                        statsig_init_method: "bootstrap",
                                        statsig_init_error: a
                                    }
                                }
                            }), r(773352).log({
                                level: "error",
                                from: "statsig",
                                type: "initialize",
                                error: (0, r(416607).convertErrorToLog)(t),
                                data: {
                                    userId: e.currentUser.id
                                }
                            })
                        }, [e]);
                    (0, r(383953).w)(() => {
                        (void 0 !== r(219279).StatsigInitializer.statsigConfigFetch && (0, r(104310).u)({
                            event: {
                                eventName: "statsig_config_file_fetch",
                                eventProperties: {
                                    time: r(219279).StatsigInitializer.statsigConfigFetch.durationMs,
                                    timed_out: !r(219279).StatsigInitializer.statsigConfigFetch.success
                                }
                            }
                        }), r(219279).StatsigInitializer.initializePromise) ? r(219279).StatsigInitializer.error ? t(r(219279).StatsigInitializer.error, "error") : r(219279).StatsigInitializer.isComplete || t(Error("`statsig.initialize` was not awaited on app bootstrap"), "incomplete"): t(Error("`statsig.initialize` was not called on app bootstrap"), "uninitialized")
                    })
                },
                e8 = function() {
                    let e = (0, r(533992).v3)(),
                        t = (0, i.useCallback)(t => {
                            (0, r(104310).u)({
                                event: {
                                    eventName: "statsig_client_update_user_error",
                                    eventProperties: {
                                        statsig_init_method: "bootstrap"
                                    }
                                }
                            }), r(773352).log({
                                level: "error",
                                from: "statsig",
                                type: "updateUser",
                                error: (0, r(416607).convertErrorToLog)(t),
                                data: {
                                    nextUserId: e.currentUser.id,
                                    err: (0, r(161179).A)(t).message
                                }
                            })
                        }, [e]),
                        [a] = (0, r(97668).Yb)(async () => await r(128190).getExperimentDeviceId(e), [e]),
                        [o] = (0, r(97668).Yb)(async () => await r(128190).getBrowserId(e), [e]),
                        s = (0, r(682985).K8)(() => {
                            var e, t;
                            return !!(null != (e = r(728372).AppStoreCurrentUserStore.state) && e.isDefined()) && !(null != (t = r(728372).AppStoreCurrentUserStore.state) && t.getOnboardingCompleted())
                        }, []),
                        l = (0, r(682985).K8)(() => {
                            var e;
                            return null == (e = (0, r(328765).S)()) ? void 0 : e.isDefined()
                        }, []),
                        c = (0, r(682985).K8)(() => "blank" === e.RouterStore.state.route.name, [e.RouterStore]),
                        d = (0, i.useRef)(r(219279).StatsigInitializer.statsigStageTwoUser),
                        u = (0, r(682985).K8)(() => {
                            if ("resolved" === a.status && "resolved" === o.status && (r(329464).A.state.initialRenderCompleted || c) && (!e.currentUser.id || l || s || c)) {
                                var t, i;
                                let n = r(404449).getDataForStatsigUser({
                                    environment: e,
                                    deviceId: a.value,
                                    browserId: o.value
                                });
                                if (void 0 === n.subscriptionTier) {
                                    let e = null == (t = d.current) || null == (t = t.custom) ? void 0 : t.spaceSubscriptionTier;
                                    r(126365).nb.find(t => t === e) && (n.subscriptionTier = e)
                                }
                                if (void 0 === n.country) {
                                    let e = null == (i = d.current) || null == (i = i.custom) ? void 0 : i.country;
                                    "string" == typeof e && (n.country = e)
                                }
                                return (0, r(573660).tX)({
                                    data: n,
                                    config: {
                                        env: "production"
                                    }
                                })
                            }
                        }, [e, a, o, l, s, c], {
                            equalityFn: r(381453).n4
                        }),
                        p = (0, i.useRef)(0),
                        f = !(0, r(682985).O$)(r(205885).e),
                        m = (0, r(682985).K8)(() => {
                            var e;
                            return null == (e = r(29246).LX.getState()) ? void 0 : e.isStatsigUserDiffDebuggingEnabled
                        }, []);
                    (0, i.useEffect)(() => {
                        var a;
                        let i = null == (a = (0, r(328765).S)()) ? void 0 : a.id;
                        !async function() {
                            if (!(!r(219279).StatsigInitializer.isComplete || !u || r(381453).n4(u, d.current)) && !f) {
                                d.current = u, p.current++;
                                try {
                                    r(527391).t.USEWITHCAUTION_markStatsigUserFetched({
                                        userId: u.userID,
                                        spaceId: i,
                                        fetched: !1
                                    });
                                    let t = await r(219279).statsigClientLoader.getClient() || await r(219279).statsigClientLoader.getUninitializedStatsigClient({
                                            statsigUser: u,
                                            initialValues: void 0,
                                            overrideStableID: (0, r(219279).getOrCreateStableID)(),
                                            configFilePromise: r(219279).StatsigInitializer.fetchConfigFilePromise(),
                                            storageProviderPromise: r(219279).statsigClientLoader.getStorageProvider(e.device)
                                        }),
                                        a = async function() {
                                            var a, o, s, l, c, d, p;
                                            let f = (0, r(468704).createApiHttpJsonRequestOptions)({
                                                    environment: e,
                                                    eventName: "getAppConfig",
                                                    data: { ...u.customIDs,
                                                        device: (0, r(573660).getDeviceAttributesForStatsigUser)(e.device),
                                                        locale: r(849917).locale,
                                                        clientSdkApiKey: n().A.statsig.apiKey,
                                                        spaceId: i,
                                                        additionalUserAttributes: {
                                                            spaceCreatedTime: null == (a = u.custom) ? void 0 : a.spaceCreatedTime,
                                                            spaceCreatedDate: null == (o = u.custom) ? void 0 : o.spaceCreatedDate,
                                                            subscriptionTier: null == (s = u.custom) ? void 0 : s.spaceSubscriptionTier,
                                                            isSalesAssistedPlan: null == (l = u.custom) ? void 0 : l.isSalesAssistedPlan,
                                                            spacePlanType: null == (c = u.custom) ? void 0 : c.spacePlanType,
                                                            userSignupTime: null == (d = u.custom) ? void 0 : d.userSignupTime,
                                                            domainType: null == (p = u.custom) ? void 0 : p.domainType
                                                        }
                                                    },
                                                    activeUserId: e.currentUser.id,
                                                    tracking: void 0,
                                                    eventListeners: (0, r(963485).getPerformanceEventListeners)({
                                                        eventName: "getAppConfig",
                                                        isPrefetchRequest: !0
                                                    })
                                                }),
                                                m = await (0, r(201790).httpRequest)(f);
                                            "success" === m.type ? (t.dataAdapter.setData(JSON.stringify(m.data.initialValues)), r(219279).StatsigInitializer.currentUserDoNotUse = m.data.statsigUser, r(219279).statsigClientLoader.setStatsigUser(m.data.statsigUser), t.updateUserSync(m.data.statsigUser)) : r(773352).log({
                                                level: "error",
                                                from: "useUpdateStatsigData",
                                                type: "updateStatsigUser.failedToReachStatsigAndServer",
                                                data: {
                                                    message: "Unable to reach statsig and fallback failed",
                                                    err: (0, r(201790).V4)(m),
                                                    nextUserId: e.currentUser.id
                                                }
                                            })
                                        },
                                        o = async function(i) {
                                            t.off("initialization_failure", o), r(773352).log({
                                                level: "info",
                                                from: "useUpdateStatsigData",
                                                type: "updateStatsigUser.failedToReachStatsig",
                                                data: {
                                                    message: "Unable to reach statsig, trying to get latest values from server.",
                                                    nextUserId: e.currentUser.id
                                                }
                                            }), await a()
                                        };
                                    t.dataAdapter.getDataSync(u) ? (t.on("initialization_failure", o), r(219279).statsigClientLoader.setStatsigUser(u), await t.updateUserAsync(u)) : await a()
                                } catch (e) {
                                    t(e)
                                }
                                p.current--, 0 === p.current && (r(218744).default.recomputeAllGroupStores(), r(374176).default.afterNextFlush(() => {
                                    r(527391).t.USEWITHCAUTION_markStatsigUserFetched({
                                        userId: u.userID,
                                        spaceId: i,
                                        fetched: !0
                                    })
                                }))
                            }
                        }()
                    }, [t, u, e, f, m])
                },
                e2 = {
                    MobileNativePerformanceListener: new(r(815048)).O2("MobileNativePerformanceListener", async () => await r.e(62058).then(r.bind(r, 182532)))
                },
                e1 = (0, r(815048)._h)(e2.MobileNativePerformanceListener, e => e.MobileNativePerformanceListener),
                e9 = {
                    viewerSessionId: void 0,
                    pageId: void 0,
                    normalizedPageId: void 0,
                    switchedAtMs: void 0,
                    firstAction: void 0,
                    firstActionAtMs: void 0,
                    hasSeenTargetPage: !1,
                    timeoutId: void 0
                };

            function e4(e) {
                return e ? (0, r(4962).Xw)(e).toLowerCase() : void 0
            }
            let e6 = new class {
                    state = e9;
                    activate(e) {
                        let t = this.isActive();
                        this.resetState(), t && r(773352).log({
                            level: "info",
                            from: "MobileNativeViewerSwitchOutcomeTracker",
                            type: "native_viewer_post_switch_outcome_reactivated"
                        });
                        let a = e4(e.pageId),
                            i = e4(e.currentPageId);
                        this.state = {
                            viewerSessionId: e.viewerSessionId,
                            pageId: e.pageId,
                            normalizedPageId: a,
                            switchedAtMs: e.switchedAtMs,
                            firstAction: void 0,
                            firstActionAtMs: void 0,
                            hasSeenTargetPage: void 0 !== i && i === a,
                            timeoutId: window.setTimeout(() => {
                                this.handleTimeout()
                            }, 3e4)
                        }
                    }
                    recordEditStarted() {
                        this.isActive() && (this.recordFirstAction("edit_started"), this.emitOutcome(!0))
                    }
                    recordShareOpened() {
                        this.recordDeferredFirstAction("share_opened")
                    }
                    recordCommentsOpened() {
                        this.recordDeferredFirstAction("comments_opened")
                    }
                    recordRoutePageChange(e) {
                        if (this.isActive() && !e.isModalSurface) {
                            if (e4(e.currentPageId) === this.state.normalizedPageId) {
                                this.state = { ...this.state,
                                    hasSeenTargetPage: !0
                                };
                                return
                            }
                            if (this.state.hasSeenTargetPage) {
                                if (void 0 === this.state.firstAction) {
                                    this.recordFirstAction("navigate_away"), this.emitOutcome(!1);
                                    return
                                }("share_opened" === this.state.firstAction || "comments_opened" === this.state.firstAction) && this.emitOutcome(!1)
                            }
                        }
                    }
                    recordDeferredFirstAction(e) {
                        this.isActive() && this.recordFirstAction(e)
                    }
                    recordFirstAction(e) {
                        void 0 === this.state.firstAction && (this.state = { ...this.state,
                            firstAction: e,
                            firstActionAtMs: Date.now()
                        })
                    }
                    handleTimeout() {
                        this.isActive() && (void 0 === this.state.firstAction && (this.state = { ...this.state,
                            firstAction: "idle_timeout",
                            firstActionAtMs: Date.now()
                        }), this.emitOutcome(!1))
                    }
                    emitOutcome(e) {
                        let {
                            viewerSessionId: t,
                            pageId: a,
                            switchedAtMs: i,
                            firstAction: n,
                            firstActionAtMs: o
                        } = this.state;
                        if (void 0 === t || void 0 === a || void 0 === i || void 0 === n || void 0 === o) return void this.resetState();
                        try {
                            (0, r(104310).u)({
                                event: {
                                    eventName: "native_viewer_post_switch_outcome",
                                    eventProperties: {
                                        viewer_session_id: t,
                                        page_id: a,
                                        first_action: n,
                                        time_to_first_action_ms: Math.max(o - i, 0),
                                        made_edit_within_30s: e
                                    }
                                }
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "MobileNativeViewerSwitchOutcomeTracker",
                                type: "native_viewer_post_switch_outcome_track_failed",
                                error: {
                                    message: e instanceof Error ? e.message : String(e)
                                }
                            })
                        }
                        this.resetState()
                    }
                    isActive() {
                        return void 0 !== this.state.viewerSessionId
                    }
                    resetState() {
                        void 0 !== this.state.timeoutId && window.clearTimeout(this.state.timeoutId), this.state = e9
                    }
                },
                te = ["compact", "regular", "unknown"];
            var tt = () => r(749560);

            function tr(e) {
                let t = (0, r(500880).Xz)(e);
                switch (t.type) {
                    case "native":
                        return;
                    case "web":
                        let a = t.route;
                        switch (a.name) {
                            case "page":
                                if (a.collectionViewId) return "collection";
                                return "page";
                            case "nativeTab":
                                switch (a.tab) {
                                    case "updates":
                                        return "updates";
                                    case "assistant":
                                        return "assistant";
                                    case "trash":
                                        return "trash";
                                    case "members":
                                        return "members";
                                    case "help":
                                        return "help";
                                    case "templates":
                                        return "templates";
                                    case "offline":
                                        return "offline_settings"
                                }
                                break;
                            default:
                                return
                        }
                }
            }
            let ta = r(381453).Bj(async (e, t) => (await r(308825).T.searchActions.load()).getLocalCacheFromAppState({
                environment: e
            }), (e, t) => {
                var a;
                return `${e.currentUser.id}-${(null==(a=r(728372).AppStoreSidebarSpaceViewStore.state)?void 0:a.id)??"none"}-${t??"none"}`
            });

            function ti() {
                let e, t, a = (0, r(533992).v3)(),
                    {
                        device: o
                    } = a,
                    [s, l] = (0, i.useState)(null),
                    c = (0, r(682985).K8)(() => (function(e) {
                        let t = (0, r(500880).Xz)(e);
                        if ("web" !== t.type) return {
                            currentPageId: void 0,
                            isModalSurface: !1
                        };
                        let a = (0, r(500880).AE)(t).route;
                        return "page" === a.name ? {
                            currentPageId: a.blockId,
                            isModalSurface: !1
                        } : "nativeTab" === a.name && ("shareMenu" === a.tab || "agentShareMenu" === a.tab || "comments" === a.tab || "webMenu" === a.tab) ? {
                            currentPageId: void 0,
                            isModalSurface: !0
                        } : {
                            currentPageId: void 0,
                            isModalSurface: !1
                        }
                    })(a.TabbedRouterStore.state), [a]),
                    d = (0, r(682985).K8)(() => r(358377).default.state.mode, []),
                    u = (0, r(682985).K8)(() => r(409614).A.state.open, []),
                    p = (0, r(668745).ZC)(d),
                    f = (0, r(668745).ZC)(u),
                    v = (0, i.useRef)(c.currentPageId);
                (0, i.useEffect)(() => {
                    v.current = c.currentPageId
                }, [c.currentPageId]), (0, i.useEffect)(() => (function(e, t, a) {
                    let {
                        mobileNative: i,
                        TabbedRouterStore: o,
                        device: s
                    } = e();
                    if (s.isMobileNative && i) {
                        var l, c;
                        i.updateReceiveApiHandlers({
                            nativeToWebRenderStart: e => {
                                r(398225).N.markNativeStart(e)
                            },
                            nativeViewerSwitchToWeb: e => {
                                e6.activate({
                                    viewerSessionId: e.viewerSessionId,
                                    pageId: e.pageId,
                                    switchedAtMs: e.switchedAtMs,
                                    currentPageId: a()
                                })
                            },
                            connectivityTypeChanged: e => {
                                r(205885).A.setState({ ...r(205885).A.state,
                                    mobileConnectivityType: e
                                })
                            },
                            toggleAvailableOffline: t => {
                                let {
                                    pageId: a,
                                    operation: i
                                } = t;
                                r(964743).lX({
                                    store: new(r(970831)).B(e(), {
                                        table: r(832375).evP,
                                        id: a
                                    }),
                                    environment: e(),
                                    analyticsFrom: "mobile_home",
                                    operation: i
                                })
                            },
                            statusBarTap: tn,
                            backButtonPress: () => r(781945).N6(e(), {
                                type: "backbutton"
                            }),
                            getLocalizedUrl: e => [{
                                value: {
                                    url: (0, r(442564).x)(e.routeId)
                                }
                            }],
                            keyboardWillShow: t => {
                                r(783129).m(e(), r(707785).i.willShow, t ? ? 0)
                            },
                            keyboardDidShow: t => {
                                r(783129).m(e(), r(707785).i.shown, t ? ? 0)
                            },
                            keyboardWillHide: () => {
                                r(783129).m(e(), r(707785).i.willHide, 0)
                            },
                            keyboardDidHide: () => {
                                r(783129).m(e(), r(707785).i.hidden, 0), s.isIpad && ((0, r(471e3).I)({
                                    environment: e()
                                }), r(770520).A.clear(!0))
                            },
                            keyboardConfigChanged: e => {
                                r(707785).A.updateKeyboardConfig(e.packageName, e.activeLocale)
                            },
                            safeAreaConfigChanged: t => {
                                (0, r(907620).T)("supportsNativeSafeAreaConfig") ? (r(515378).U4.update(e => ({ ...e,
                                    supportsNativeSafeAreaConfig: !0,
                                    top: t.top,
                                    bottom: t.bottom,
                                    left: t.left,
                                    right: t.right
                                })), e().WindowSizeStore.updateWindowSize()) : r(515378).U4.reset()
                            },
                            keyboardShortcut: t => r(781945).N6(e(), t),
                            nativeBottomBarDidChange: e => {
                                void 0 !== e.height && r(707785).A.update(t => t.lastUpdatedTimestamp && e.timestamp && e.timestamp < t.lastUpdatedTimestamp ? t : { ...t,
                                    nativeBottomBarHeight: e.height,
                                    lastUpdatedTimestamp: e.timestamp
                                })
                            },
                            pushNotificationTokenRefresh: t => r(433175).handleTokenRefresh(e(), t, "refresh"),
                            resume: r(161661).A.resume,
                            pause: async () => {
                                r(161661).A.pause();
                                let {
                                    stopDictation: t
                                } = await r(10386).i.load();
                                t({
                                    environment: e(),
                                    from: "native_action"
                                })
                            },
                            refreshSubscriptionData: async t => {
                                await e().api.callApi({
                                    eventName: "invalidateSubscriptionData",
                                    environment: e(),
                                    data: {
                                        spaceId: t,
                                        provider: "revenue_cat"
                                    }
                                });
                                let a = (0, r(328765).S)();
                                a && await r(371151).o2({
                                    environment: e(),
                                    spaceStore: a
                                })
                            },
                            refreshSubscriptionDataV2: async () => {
                                let t = (0, r(328765).S)();
                                t && await r(371151).o2({
                                    environment: e(),
                                    spaceStore: t
                                })
                            },
                            processMobileActionBarAction: e => {
                                let {
                                    componentId: t,
                                    action: r
                                } = e;
                                i.componentEvents.dispatch("MobileActionBar", t, "onAction", {
                                    action: r
                                })
                            },
                            logout: t => {
                                r(724942).Yq({
                                    environment: e(),
                                    userId: t,
                                    logoutOrigin: r(279190).d.MobileNativeListener
                                })
                            },
                            logoutV2: t => {
                                let {
                                    userId: a,
                                    fcmToken: i
                                } = t;
                                r(724942).Yq({
                                    environment: e(),
                                    userId: a,
                                    logoutOrigin: r(279190).d.MobileNativeListener,
                                    fcmToken: i
                                })
                            },
                            updateTranscriptionState: async t => {
                                var a;
                                let {
                                    blockId: i,
                                    state: n
                                } = t, o = e(), s = new(r(970831)).B(o, {
                                    table: r(832375).evP,
                                    id: i
                                }), l = null == (a = s.getFormat()) || null == (a = a.transcription_state) ? void 0 : a.state;
                                if ((0, r(699427).K)({
                                        environment: o,
                                        blockStore: s,
                                        state: n,
                                        from: "native_sync"
                                    }), "transcribing" === n.state && "transcribing" !== l && (0, r(141802).D_)(o, {
                                        dictation_session_id: n.session_id,
                                        block_id: i,
                                        transcription_started_from: "native_sync",
                                        has_audio_consent: !1,
                                        device_volume: void 0,
                                        is_catap_active: !1
                                    }), "recorded_audio_file_uploading" === n.state) try {
                                    await s.load();
                                    let e = (0, r(627335).D)({
                                        environment: o,
                                        transcriptionBlockStore: s,
                                        tabType: "summary"
                                    });
                                    r(769719).c.setTabState(s.id, e.id)
                                } catch (t) {
                                    let e = t instanceof Error ? t : Error(String(t ? ? "unknown error"));
                                    r(773352).log({
                                        level: "error",
                                        from: "MobileNativeListener.updateTranscriptionState",
                                        type: "transcriptionTabCreationFailed",
                                        error: e,
                                        data: {
                                            miscDataToConvertToString: {
                                                blockId: i,
                                                newState: n.state,
                                                tabType: "summary"
                                            }
                                        }
                                    })
                                }
                                r(769719).c.setLoadingState(i, !1)
                            },
                            focusMeetingNotesTab: async t => {
                                let {
                                    blockId: a,
                                    tab: i
                                } = t, n = e(), o = new(r(970831)).B(n, {
                                    table: r(832375).evP,
                                    id: a
                                });
                                await o.load();
                                let s = () => {
                                    let e = o.getFormat();
                                    switch (i) {
                                        case "summary":
                                            return null == e ? void 0 : e.transcription_summary_id;
                                        case "notes":
                                            return null == e ? void 0 : e.transcription_notes_id;
                                        case "transcript":
                                            return null == e ? void 0 : e.transcription_transcript_id
                                    }
                                };
                                await o.getFormatStore().waitUntil(() => !!s()).catch(() => {});
                                let l = s();
                                l && (await o.getContentStore().waitUntil(() => o.getContentIds().includes(l)).catch(() => {}), r(769719).c.setTabState(o.id, l))
                            },
                            logoutAll: () => {
                                r(724942).ri(e())
                            },
                            openDestinationV2: t => {
                                var a, i, n, o, s, l, c, d, u;
                                r(630121).A.closeAll();
                                let p = e(),
                                    f = (0, r(500880).Xz)(p.TabbedRouterStore.state),
                                    {
                                        activeTab: m,
                                        tabs: v
                                    } = p.TabbedRouterStore.state,
                                    g = f === v[m].rootPage,
                                    h = "native" === f.type;
                                switch ((0, r(318355).A)(p) && (0, r(451908).s)({
                                    environment: p,
                                    tab: p.TabbedRouterStore.state.activeTab,
                                    nativeRootPageOverrideEnabled: !1
                                }), t.type) {
                                    case "moveTo":
                                        let b, _ = new(r(970831)).B(p, {
                                            table: r(832375).evP,
                                            id: t.blockId
                                        });
                                        (0, r(836924).Y)({
                                            store: _,
                                            environment: p,
                                            pageVisitSource: r(254656).y8.Move
                                        }), a = t.blockId, i = p, b = new(r(970831)).B(i, {
                                            table: r(832375).evP,
                                            id: a
                                        }), r(351198).ho({
                                            environment: i,
                                            blocks: [b],
                                            moveToContext: "home_tab",
                                            onAccept: e => {
                                                (0, r(836924).Y)({
                                                    store: b,
                                                    environment: i,
                                                    pageVisitSource: r(254656).y8.Move
                                                })
                                            }
                                        });
                                        break;
                                    case "trash":
                                        tu({
                                            query: t.query
                                        });
                                        break;
                                    case "webSearch":
                                        n = p, o = t.query, r(635257)._N({
                                            environment: n,
                                            analyticsFrom: "mobile-bottom-bar",
                                            query: o
                                        }), (0, r(586245).M)(n, {
                                            itemName: "search",
                                            logging_source: "mobile_native"
                                        });
                                        break;
                                    case "templates":
                                        s = p, l = {
                                            source: t.source
                                        }, tp(s), r(717376).A.setState({
                                            open: !0,
                                            isFromNativeHome: !0,
                                            source: l.source
                                        });
                                        break;
                                    case "AIAssistant":
                                        c = p, d = g && h, u = {
                                            query: t.query,
                                            searchSessionId: t.searchSessionId,
                                            from: t.from
                                        }, r(408138).X.update(e => ({
                                            query: u.query,
                                            searchSessionId: u.searchSessionId,
                                            from: u.from ? ? "search",
                                            shouldReset: !!(u.query && u.query.trim().length > 0)
                                        })), (0, r(79266).navigate)({
                                            environment: c,
                                            url: `${r(25408).GJ.nativeTab}/assistant`,
                                            redirect: d
                                        });
                                        break;
                                    case "passkeySettings":
                                        let S = `${r(25408).GJ.nativeTab}/settings?addPasskey=true`;
                                        (0, r(79266).navigate)({
                                            environment: p,
                                            url: S,
                                            redirect: !0
                                        });
                                        break;
                                    case "createOrJoinWorkspace":
                                        return tc(p, t.userId);
                                    case "createNewWorkspace":
                                        return td(p, t.userId)
                                }
                            },
                            openDestination: t => {
                                var a, i, n;
                                r(630121).A.closeAll();
                                let s = e();
                                switch ("closePopup" !== t && (0, r(318355).A)(s) && s.TabbedRouterStore.state.tabs[s.TabbedRouterStore.state.activeTab].nativeRootPageOverrideEnabled && (0, r(451908).s)({
                                    environment: s,
                                    tab: o.state.activeTab,
                                    nativeRootPageOverrideEnabled: !1
                                }), t) {
                                    case "addPage":
                                        tp(s);
                                        break;
                                    case "allUpdates":
                                        a = s, (0, r(907620).T)("supportsNativeHome") && a.device.isPhone ? ((0, r(389432).z)({
                                            currentUserId: a.currentUser.id
                                        }), (0, r(79266).navigate)({
                                            environment: a,
                                            url: `${r(25408).GJ.nativeTab}/updates`,
                                            redirect: !0
                                        })) : r(68757).A.setState({ ...r(68757).A.state,
                                            open: !0
                                        });
                                        break;
                                    case "addAccount":
                                        i = s, (0, r(79266).navigate)({
                                            environment: i,
                                            url: r(25408).GJ.blank,
                                            redirect: !0
                                        }), r(754669).c.setState({ ...r(754669).c.state,
                                            open: !0
                                        });
                                        break;
                                    case "createOrJoinWorkspace":
                                        return tc(s);
                                    case "createNewWorkspace":
                                        return td(s);
                                    case "notificationAndSettings":
                                        r(433256).O.setState({
                                            open: !0,
                                            source: r(433256).C.Home
                                        });
                                        break;
                                    case "trash":
                                        tu({});
                                        break;
                                    case "memberSettings":
                                        r(708329).n.setState({ ...r(708329).n.state,
                                            open: !0
                                        });
                                        break;
                                    case "help":
                                        r(51599).r.setState({ ...r(51599).r.state,
                                            open: !0,
                                            source: "mobileNative"
                                        });
                                        break;
                                    case "intercom_messages":
                                        n = s, r(963430).S({
                                            environment: n,
                                            from: "help_button"
                                        });
                                        break;
                                    case "aiWriter":
                                        tl(s)
                                }
                            },
                            updateFileUploadProgress: e => {
                                let {
                                    uploadKey: t,
                                    progressPercent: a
                                } = e, i = r(553871).default.getKeyState(t);
                                i && r(553871).default.setKeyState(t, { ...i,
                                    progressPercent: a
                                })
                            },
                            setCurrentUserId: async t => {
                                await to(t, e())
                            },
                            setCurrentSpace: async t => {
                                await ts(t.userId, t.spaceId, e())
                            },
                            updateHorizontalSizeClass: e => {
                                let t = (0, r(358519).tf)(r(969475).literals(...te), e) ? "unknown" : e;
                                t !== i.horizontalSizeClass.state && i.horizontalSizeClass.setState(t)
                            },
                            updateTabbedRouterState: t => {
                                var a, i;
                                let {
                                    TabbedRouterStore: n
                                } = e(), o = n.state;
                                if (t.tab === o.activeTab && !(null != (a = t.pages) && a.length) && r(381453).n4(t.modal, o.modal) && !o.tabs[o.activeTab].pages.length) tn();
                                else {
                                    r(630121).A.closeAll();
                                    let a = t.navigationEffect;
                                    if (a && "AIAssistant" === a.type && r(408138).X.update(e => ({
                                            query: a.query,
                                            searchSessionId: a.searchSessionId,
                                            from: "shortcut" === a.from ? "search" : a.from ? ? "search",
                                            isFromShortcut: "shortcut" === a.from,
                                            shouldReset: !!(a.query && a.query.trim().length > 0)
                                        })), (0, r(318355).A)(e()))(0, r(451908).s)({
                                        environment: e(),
                                        tab: t.tab,
                                        queryParams: t.queryParams,
                                        pages: t.pages,
                                        modal: t.modal,
                                        nativeRootPageOverrideEnabled: t.nativeRootPageOverrideEnabled,
                                        navigationAction: t.navigationAction,
                                        navigationSource: t.navigationSource
                                    });
                                    else {
                                        let a = null == (i = t.pages) ? void 0 : i[t.pages.length - 1];
                                        a && (0, r(79266).navigate)({
                                            environment: e(),
                                            url: (0, r(500880).Ee)(a),
                                            redirect: !0
                                        })
                                    }
                                }
                                let s = n.state;
                                return [{
                                    state: s,
                                    topPage: (0, r(500880).Xz)(s),
                                    webTransitionType: tr(s),
                                    updateId: t.updateId ? ? (0, r(4962).Ay)()
                                }]
                            },
                            getLocalSearchResults: async t => {
                                let a = await ta(e(), t.searchSessionId);
                                if (!a) return [{
                                    error: "Local cache does not exist"
                                }];
                                let i = (0, r(358519).tf)(r(821603).gG, t.sort);
                                if (i) return [{
                                    error: `old sort type is unsupported! ${i}`
                                }];
                                let n = t.sort,
                                    o = !r(205885).A.state.online && r(218744).default.checkGate({
                                        gateName: "download_for_offline"
                                    }),
                                    s = { ...t.filters,
                                        isOfflineOnly: o
                                    },
                                    {
                                        searchAndRerankLocalPages: l
                                    } = await r(308825).T.search.load(),
                                    c = l({
                                        query: {
                                            query: {
                                                text: t.query ? ? "",
                                                filters: s,
                                                sort: n
                                            },
                                            limit: t.limit
                                        },
                                        localCachedPages: a,
                                        includeRecordMap: !1,
                                        userId: e().currentUser.id,
                                        environment: e(),
                                        spaceStore: (0, r(328765).S)()
                                    });
                                if (!c || 0 === c.results.length) return [{
                                    value: {
                                        total: 0,
                                        results: [],
                                        recordMap: {},
                                        trackEventProperties: void 0
                                    }
                                }];
                                let d = r(205885).A.state.online ? (0, r(831957).k)(e(), c.results) : c.results;
                                return [{
                                    value: {
                                        results: d,
                                        total: d.length,
                                        recordMap: {},
                                        trackEventProperties: {}
                                    }
                                }]
                            },
                            customAddCommentMenuItemTapped: async () => {
                                let t = await r(864850).T.formulas.load();
                                (await tf()).handleComment(e(), "custom_add_comment_menu_item", t)
                            },
                            convertEnrichedMarkdownToBlocks: async t => {
                                try {
                                    let {
                                        convertEnrichedMarkdownToBlocks: a
                                    } = await Promise.all([r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(45213), r.e(68583), r.e(25755)]).then(r.bind(r, 956206));
                                    return [a({
                                        environment: e(),
                                        spaceId: t.spaceId,
                                        userId: t.userId,
                                        markdown: t.markdown
                                    })]
                                } catch (e) {
                                    return [{
                                        error: `Failed to convert enhanced markdown to blocks: ${e instanceof Error?e.message:"Unknown error"}`
                                    }]
                                }
                            },
                            undoRevision: () => {
                                (0, r(462446).t)({
                                    environment: e(),
                                    preventSelectText: !0
                                })
                            },
                            searchTeams: async e => {
                                let {
                                    query: t
                                } = e, a = (0, r(328765).S)(), i = r(728372).AppStoreSidebarSpaceViewStore.state;
                                if (!a || !i) return [{
                                    error: "SpaceStore or SpaceViewStore was undefined"
                                }];
                                let n = await r(308825).T.searchActions.load();
                                return [{
                                    value: {
                                        ids: (await n.searchTeams({
                                            spaceViewStore: i,
                                            query: t,
                                            teamStores: (0, ee().r)(i)
                                        })).map(e => e.id)
                                    }
                                }]
                            },
                            getImageBlockUrls: async t => {
                                var a;
                                let i, {
                                        blockId: o,
                                        renderWidth: s
                                    } = t,
                                    l = null == (a = r(496704).K.findBlockFromId(o)) ? void 0 : a.getBlockStore();
                                if (!l || "image" !== l.getType()) return [{
                                    error: "blockId points to a non-image block"
                                }];
                                let {
                                    getEmbedSourceFromBlockStore: c
                                } = await Promise.resolve().then(r.bind(r, 494295)), d = c(l), u = {
                                    isAuthenticated: !0,
                                    url: d,
                                    width: s,
                                    permissionRecord: l.pointer
                                }, p = e(), f = await (0, r(783826).L)(u, p);
                                if (!f) return [{
                                    error: "could not get proxied image url"
                                }];
                                let m = 0 === f.indexOf("https:") ? f : `${n().A.domainBaseUrl}${f}`;
                                return r(728601)._J(d) && (i = await (0, r(704232).k)({
                                    environment: p,
                                    url: {
                                        url: d,
                                        download: !1,
                                        downloadName: "image",
                                        permissionRecord: l.pointer
                                    },
                                    isElectionAppWithProxySupport: !1,
                                    useBatching: !1
                                })), [{
                                    value: {
                                        previewUrl: m,
                                        originalUrl: i
                                    }
                                }]
                            },
                            createMeetingNote: async t => {
                                let a = e(),
                                    {
                                        createMeetingNoteAndGetUrlWhenReady: i
                                    } = await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(40537), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(23519), r.e(63771), r.e(87971), r.e(79349), r.e(61842), r.e(29486)]).then(r.bind(r, 207725)),
                                    n = await i({
                                        environment: a,
                                        from: (null == t ? void 0 : t.from) ? ? "mobile_home_callout",
                                        title: null == t ? void 0 : t.title,
                                        pageVisitSource: null == t ? void 0 : t.pageVisitSource
                                    });
                                if (!n) return [{
                                    error: "Could not create meeting notes page"
                                }];
                                if (null != t && t.autoStart) {
                                    let {
                                        startTranscription: e
                                    } = await r(785576).w.load(), t = new(r(970831)).B(a, {
                                        table: r(832375).evP,
                                        id: n.blockId
                                    });
                                    await e({
                                        environment: a,
                                        blockStore: t,
                                        from: "start",
                                        audioConsentEnabled: !0
                                    })
                                }
                                return [{
                                    value: {
                                        pageId: n.pageId,
                                        blockId: n.blockId,
                                        spaceId: n.spaceId,
                                        blockUrl: n.blockUrl
                                    }
                                }]
                            },
                            dismissKeyboard: () => {
                                if (!(r(584265).default.state.stores.length > 0) || "editing" === r(358377).default.state.mode && r(358377).default.state.multiSelection.start.store.table === r(832375).SNf) return;
                                let t = e();
                                (0, r(471e3).I)({
                                    environment: t
                                }), (0, r(854091).k)()
                            },
                            focusOnBlock: async t => {
                                let {
                                    blockId: a,
                                    position: i
                                } = t, n = e(), o = r(496704).K.findBlockFromId(a), s = null == o ? void 0 : o.getBlockStore();
                                if (!s) return;
                                let l = r(496704).K.findCollectionViewBlockFromId(a),
                                    c = l ? l.getNode() : null == o ? void 0 : o.getNode();
                                if (c && c instanceof Element) {
                                    let e = l ? c.parentElement : c;
                                    if (e) {
                                        let {
                                            scrollIntoViewIfNeeded: t
                                        } = await r.e(31491).then(r.bind(r, 564095));
                                        t({
                                            element: e,
                                            environment: n,
                                            blockAlignment: "nearest",
                                            behavior: "instant"
                                        }), await new Promise(e => setTimeout(e, 100))
                                    }
                                }
                                let d = s.getBlockTitleStore();
                                !l && d && ((0, r(182553).h)({
                                    environment: n,
                                    store: s
                                }), (0, r(627974).t)({
                                    store: d,
                                    selection: void 0 !== i ? {
                                        startIndex: i,
                                        endIndex: i
                                    } : {
                                        startIndex: 0,
                                        endIndex: 0
                                    }
                                }))
                            },
                            webViewBoundsChanged: () => {
                                e().WindowSizeStore.updateWindowSize()
                            },
                            syncNativePageStates: t => {
                                let {
                                    states: a
                                } = t, i = e(), n = i.currentUser.id;
                                for (let e of a) "toggle" === e.type ? tt().xT({
                                    environment: i,
                                    blockId: e.blockId,
                                    state: e.isExpanded,
                                    currentUserId: n,
                                    shouldNotSyncWithNative: !0
                                }) : "selectedView" === e.type && function(e) {
                                    let {
                                        environment: t,
                                        viewBlockId: a,
                                        viewId: i
                                    } = e;
                                    (0, r(235029).st)({
                                        userId: t.currentUser.id,
                                        viewBlockId: a,
                                        viewId: i
                                    }), r(633097).G.setSelectedView(a, i)
                                }({
                                    environment: i,
                                    viewBlockId: e.viewBlockId,
                                    viewId: e.viewId
                                })
                            },
                            evaluateCollectionFormula: async t => {
                                let a = e(),
                                    {
                                        evaluateFormulaFromNativeViewer: i
                                    } = await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(40537), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(23519), r.e(63771), r.e(87971), r.e(79349), r.e(61842), r.e(29486)]).then(r.bind(r, 453725));
                                return [{
                                    value: {
                                        results: await i(a, t)
                                    }
                                }]
                            },
                            evaluateCollectionRollup: async t => {
                                let a = e(),
                                    {
                                        evaluateRollupFromNativeViewer: i
                                    } = await r.e(10513).then(r.bind(r, 453725));
                                return [{
                                    value: {
                                        results: await i(a, t)
                                    }
                                }]
                            },
                            forceShowWebError: e => {
                                t(Error(e.message))
                            },
                            runButtonBlockAction: e => {
                                var t;
                                let {
                                    blockId: a
                                } = e, i = r(496704).K.findBlockFromId(a);
                                if (!i) return;
                                let n = null == (t = r(496704).K.findBlockFromId(a)) ? void 0 : t.getBlockStore();
                                n && "button" === n.getType() && i && "activate" in i && "function" == typeof i.activate && i.activate()
                            },
                            setWebNavigationStack: t => {
                                let a = e(),
                                    {
                                        urls: i
                                    } = t;
                                if (!i.length) return;
                                let o = i.slice(0, -1).map(e => ({
                                    type: "web",
                                    url: e,
                                    route: r(132702).parseRoute({
                                        url: e,
                                        baseUrl: n().A.domainBaseUrl,
                                        publicDomainName: n().A.publicDomainName,
                                        isMobile: n().A.isMobile,
                                        protocol: n().A.protocol,
                                        currentUrl: window.location.href,
                                        requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                                    })
                                }));
                                (0, r(500880).wI)(a.TabbedRouterStore.state, o), i.forEach((e, t) => {
                                    if (t === i.length - 1)(0, r(79266).navigate)({
                                        environment: a,
                                        redirect: 0 === t,
                                        url: e
                                    });
                                    else if (0 === t) {
                                        let t = (0, r(4962).Ay)();
                                        window.history.replaceState({
                                            id: t,
                                            currentUserId: a.currentUser.id
                                        }, "", e)
                                    } else {
                                        let t = (0, r(4962).Ay)();
                                        window.history.pushState({
                                            id: t,
                                            currentUserId: a.currentUser.id
                                        }, "", e)
                                    }
                                })
                            },
                            getAllExperimentValues: async () => {
                                let {
                                    isStatsigEnabled: e
                                } = await r.e(12801).then(r.bind(r, 219279));
                                if (!e()) return [{
                                    value: {
                                        values: ""
                                    }
                                }];
                                let {
                                    gateNamesInStatsig: t
                                } = await r.e(12801).then(r.bind(r, 873e3)), {
                                    experimentsInStatsig: a,
                                    STATSIG_DEFAULT_GROUP: i
                                } = await r.e(12801).then(r.bind(r, 218745)), {
                                    statsigDynamicConfigDefaults: n
                                } = await r.e(12801).then(r.bind(r, 443037)), {
                                    objectKeys: o
                                } = await r.e(12801).then(r.bind(r, 722371)), s = [];
                                return a.forEach(e => {
                                    let t = r(218744).default.getEligibleGroup({
                                        experimentId: e,
                                        defaultGroup: i,
                                        disableExposureLogging: !0
                                    });
                                    s.push(`EXPERIMENT:${e}: ${t}`)
                                }), t.forEach(e => {
                                    let t = r(218744).default.checkGate({
                                        gateName: e,
                                        disableExposureLogging: !0
                                    });
                                    s.push(`FEATUREGATE:${e}: ${String(t)}`)
                                }), o(n).forEach(e => {
                                    let t = r(218744).default.getConfig({
                                        configName: e,
                                        disableExposureLogging: !0
                                    });
                                    s.push(`DYNAMIC_CONFIG:${e}: ${JSON.stringify(t)}`)
                                }), s.sort(), [{
                                    value: {
                                        values: s.join("\n")
                                    }
                                }]
                            }
                        });
                        let d = e().mobileNative;
                        null != d && null != (l = d.api) && l.ready && (null == d || null == (c = d.api) || c.ready())
                    }
                })(() => a, l, () => v.current), [a]), (0, i.useEffect)(() => {
                    "editing" === d && "editing" !== p && e6.recordEditStarted()
                }, [p, d]), (0, i.useEffect)(() => {
                    u && !f && e6.recordShareOpened()
                }, [u, f]), (0, i.useEffect)(() => {
                    e6.recordRoutePageChange({
                        currentPageId: c.currentPageId,
                        isModalSurface: c.isModalSurface
                    })
                }, [c.currentPageId, c.isModalSurface]), e = (0, r(533992).v3)(), t = (0, r(682985).K8)(() => (0, r(477469).Y)(e), [e]), (0, i.useEffect)(() => {
                        var r;
                        null == (r = e.mobileNative) || r.toggleBottomBar(t)
                    }, [e.mobileNative, t]),
                    function() {
                        let {
                            mobileNative: e
                        } = (0, r(533992).v3)(), t = (0, r(682985).K8)(() => {
                            let e = r(728372).AppStoreCurrentUserStore.state,
                                t = r(728372).AppStoreSidebarSpaceStore.state;
                            if (!e || !t) return;
                            let a = r(886556).z.isShowingQNAOnMobile();
                            return {
                                userId: e.id,
                                spaceId: t.id,
                                enabled: a
                            }
                        }, []);
                        (0, i.useEffect)(() => {
                            t && (null == e || e.updateAiAssistantEnabledState(t))
                        }, [e, t])
                    }(),
                    function() {
                        let e = (0, r(533992).v3)(),
                            {
                                mobileNative: t,
                                WindowSizeStore: a
                            } = e,
                            n = (0, r(682985).O$)(a),
                            o = (0, r(682985).K8)(() => ({
                                visible: r(984858).sidebarExpandedStore.state && !(0, r(625906).o)(e),
                                width: (0, r(623179).r)(e)
                            }), [e]);
                        (0, i.useEffect)(() => {
                            null == t || t.sidebarVisibility(o.visible, o.width)
                        }, [e, t, n, o])
                    }(),
                    function() {
                        let e = (0, r(533992).v3)(),
                            {
                                mobileNative: t,
                                TabbedRouterStore: a
                            } = e,
                            {
                                state: n,
                                previousState: o
                            } = (0, r(682985).K8)(() => ({
                                state: a.state,
                                previousState: a.getPreviousState()
                            }), [a]);
                        (0, i.useEffect)(() => {
                            var e;
                            if (!(0, r(907620).T)("supportsDecentralizedWebViewNavigation")) {
                                let e = null == t ? void 0 : t.api.handleTabbedRouterStateUpdate;
                                e && e({
                                    state: n,
                                    topPage: (0, r(500880).Xz)(n),
                                    webTransitionType: tr(n),
                                    updateId: (0, r(698596).Ay)()
                                })
                            }
                            if (!o) return;
                            let a = (0, r(500880).WP)(o),
                                i = (0, r(500880).WP)(n);
                            r(381453).n4(a, i) || (e = {
                                origin: a,
                                destination: i,
                                from: n.navigationSource,
                                action: n.navigationAction,
                                logging_source: "mobile_native"
                            }, (0, r(104310).u)({
                                event: {
                                    eventName: "navigation",
                                    eventProperties: { ...e
                                    }
                                }
                            }))
                        }, [e, t, n, o])
                    }(),
                    function() {
                        let {
                            mobileNative: e,
                            RouterStore: t
                        } = (0, r(533992).v3)(), {
                            isIOS: a
                        } = (0, r(533992).Y0)(), n = (0, i.useRef)(!1), o = (0, r(682985).K8)(() => ({
                            initiator: r(400198).A.state.initiator,
                            isDragging: r(400198).A.state.isDragging
                        }), []), s = (0, r(682985).K8)(() => "onboarding" === t.state.route.name, [t]);
                        (0, i.useEffect)(() => {
                            a && null != e && e.setWebViewAllowsNavigationGestures && (s || r(984858).sidebarOpenStore.state || r(338794).A.getPreventScrollType() !== r(644154).A.None || o.isDragging && "touch" === o.initiator ? !1 !== n.current && (n.current = !1, e.setWebViewAllowsNavigationGestures(!1)) : !0 !== n.current && (n.current = !0, e.setWebViewAllowsNavigationGestures(!0)))
                        }, [a, s, e, o.initiator, o.isDragging])
                    }(),
                    function() {
                        let {
                            mobileNative: e,
                            TabbedRouterStore: t
                        } = (0, r(533992).v3)(), a = (0, r(682985).K8)(() => {
                            var e;
                            if (!(0, r(907620).T)("supportsCustomAddCommentMenuItem")) return !1;
                            let a = r(728372).AppStoreCurrentUserStore.state;
                            if (!(null == a ? void 0 : a.id) || ((0, r(907620).T)("supportsNativeBottomBarOverlappingWebView") ? r(630121).A.hasOpenMobileSlideUps() : r(630121).A.hasOpenPopups())) return !1;
                            let i = (0, r(500880).Xz)(t.state),
                                n = "web" === i.type && ((null == (e = i.redirectedTo) ? void 0 : e.route) || i.route);
                            if (!(n && "page" === n.name)) return !1;
                            let o = r(358377).default.state;
                            if ("empty" === o.mode) return !1;
                            let s = (0, r(358538).Z)({
                                multiSelection: o.multiSelection,
                                filterCommonAncestors: !0,
                                focus: void 0
                            });
                            return !!s && 0 !== s.stores.length && s.stores.every(e => e.canComment())
                        }, [t]);
                        (0, i.useEffect)(() => {
                            (0, r(907620).T)("supportsCustomAddCommentMenuItem") && (null == e || e.updateCustomAddCommentMenuItemEnabled(a))
                        }, [e, a])
                    }(),
                    function() {
                        let {
                            mobileNative: e
                        } = (0, r(533992).v3)(), t = (0, r(682985).K8)(() => {
                            var e;
                            return !!(null == (e = r(585823).ei.state) ? void 0 : e.isTranscriptionBlock())
                        }, []);
                        (0, i.useEffect)(() => {
                            null == e || e.requestKeepScreenOn(t)
                        }, [t, e])
                    }(),
                    function() {
                        let e = (0, r(533992).v3)(),
                            {
                                isMobileNative: t,
                                isAndroid: a
                            } = (0, r(533992).Y0)(),
                            {
                                RouterStore: n
                            } = e,
                            o = (0, r(682985).K8)(() => {
                                var e, i;
                                if (!(t && a) || "page" !== n.state.route.name || r(707785).A.state.phase !== r(707785).i.hidden || r(385125).b.state.open || r(332190).A.state.open || (null == (e = r(770520).A.state) ? void 0 : e.menu)) return !1;
                                let o = r(358377).default.state,
                                    s = "editing" === o.mode ? o.multiSelection : void 0;
                                if (s && !(0, r(971541).k)(s)) return !1;
                                let l = null == s || null == (i = s.start) ? void 0 : i.store;
                                return !(l && (0, r(374934).Le)(l))
                            }, [n, a, t]),
                            s = (0, r(84235).Y)((e, t) => {
                                t && (0, r(525779).clear)({
                                    environment: e
                                })
                            }, 150);
                        (0, i.useEffect)(() => {
                            s(e, o)
                        }, [e, o, s])
                    }(),
                    function() {
                        let e = (0, r(533992).v3)(),
                            {
                                isMobileNative: t
                            } = (0, r(533992).Y0)(),
                            a = (0, r(682985).K8)(() => {
                                if (!t) return !1;
                                let a = e.currentUser.id;
                                if (!a) return !1;
                                let i = r(728372).AppStoreSidebarSpaceIdStore.state;
                                if (!i) return !1;
                                let n = r(572682).zo.getWorkspaceAccessRestrictionForSpace({
                                    userId: a,
                                    spaceId: i
                                });
                                return void 0 !== n && (0, r(572682).yQ)(n)
                            }, [t, e.currentUser.id]);
                        (0, i.useEffect)(() => {
                            a && (0, r(79266).navigate)({
                                environment: e,
                                url: r(168962).JZ.requiredSamlError,
                                updateMobileTabbedRouterArgs: {
                                    clearNativeRootPageOverride: !0
                                }
                            })
                        }, [e, a])
                    }(), (0, i.useEffect)(() => {
                        o.isTablet && r(984858).sidebarWidthStore.setState(300)
                    }, [o]);
                let g = (0, i.useCallback)((e, t = !1) => {
                        Object.keys(e.tabs).forEach(r => {
                            if (t && (e.tabs[r].nativeRootPageOverrideEnabled = void 0), r === e.activeTab) {
                                e.tabs[r].pages = e.tabs[r].pages.slice(-1);
                                return
                            }
                            e.tabs[r].pages = []
                        })
                    }, []),
                    h = (0, i.useCallback)((e, t) => {
                        var i;
                        let {
                            mobileNative: n,
                            TabbedRouterStore: o,
                            currentUser: s
                        } = a, l = (0, r(328765).S)(), c = null == l ? void 0 : l.id;
                        if (null != n && null != (i = n.api) && i.setCurrentSpaceInfo && (r(773352).log({
                                level: "info",
                                from: "appActions",
                                type: "SpaceSwitchingDebug",
                                data: {
                                    message: "Web calling nativeAPI setCurrentSpaceInfo",
                                    spaceId: c
                                }
                            }), n.api.setCurrentSpaceInfo({
                                spaceId: c,
                                spaceViewId: null == e ? void 0 : e.id,
                                userId: s.id,
                                editable: (null == l ? void 0 : l.canEdit()) ? ? !0
                            })), (0, r(318355).A)(a)) {
                            let e = e => {
                                    if ("web" !== e.type) return;
                                    let t = { ...e.queryParams
                                        },
                                        a = c && (0, r(4962).Xw)(c);
                                    t.spaceId = a, e.queryParams = t, e.route.spaceId = a
                                },
                                a = r(381453).mg(o.state);
                            e(a.tabs.updates.rootPage), e(a.tabs.addPage.rootPage), (null == t ? void 0 : t.id) !== void 0 && g(a), o.setState(a)
                        }
                        ta(a, void 0)
                    }, [g, a]),
                    b = (0, i.useCallback)(e => {
                        var t;
                        null != (t = a.mobileNative) && null != (t = t.api) && t.setCurrentUserInfo && a.mobileNative.api.setCurrentUserInfo({
                            userId: null == e ? void 0 : e.id,
                            loggedInUserIds: a.currentUser.loggedInUserIds
                        });
                        let i = !(0, r(318355).A)(a) || void 0 === a.currentUser.id,
                            {
                                TabbedRouterStore: n
                            } = a,
                            o = r(381453).mg(n.state);
                        g(o, i), n.setState(o)
                    }, [g, a]),
                    _ = (0, r(876252).$)(),
                    S = (0, r(668745).ZC)(_);
                (0, i.useEffect)(() => {
                    (null == _ ? void 0 : _.id) !== (null == S ? void 0 : S.id) && b(_)
                }, [b, _, S, o.isMobileNative, a.mobileNative]);
                let y = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore),
                    w = (0, r(668745).ZC)(y);
                (0, i.useEffect)(() => {
                    (null == y ? void 0 : y.id) !== (null == w ? void 0 : w.id) && h(y, w)
                }, [h, y, w, o.isMobileNative, a.mobileNative]);
                let A = (0, r(83208).X)("mab_debugging");
                if ((0, r(97668).Yb)(async () => {
                        (await tf()).updateDebugShouldShow(A)
                    }, [A]), (0, i.useEffect)(() => {
                        if (s) {
                            let e = setTimeout(() => {
                                l(null)
                            }, 0);
                            return () => clearTimeout(e)
                        }
                    }, [s]), s) throw s;
                return (0, m.jsx)(e1, {})
            }

            function tn() {
                if (r(338794).A.getPreventScrollType() === r(644154).A.None) {
                    var e, t, a, i;
                    r(984858).sidebarOpenStore.state ? r(862921).A.SidebarMobileScroller && (null == (e = r(862921).A.SidebarMobileScroller.getNode()) || e.scrollTo({
                        top: 0,
                        behavior: "auto"
                    })) : r(862921).A.MenuScroller ? null == (t = r(862921).A.MenuScroller.getNode()) || t.scrollTo({
                        top: 0,
                        behavior: "auto"
                    }) : r(862921).A.MenuPageScroller ? null == (a = r(862921).A.MenuPageScroller.getNode()) || a.scrollTo({
                        top: 0,
                        behavior: "auto"
                    }) : r(862921).A.PageScroller && (null == (i = r(862921).A.PageScroller.getNode()) || i.scrollTo({
                        top: 0,
                        behavior: "auto"
                    }))
                }
            }
            async function to(e, t) {
                return t.currentUser.id === e ? t : await r(274662).T({
                    environment: t,
                    newCurrentUserId: e
                })
            }
            async function ts(e, t, a) {
                let i = await r(274662).T({
                        environment: a,
                        newCurrentUserId: e
                    }),
                    n = r(728372).AppStoreCurrentUserRootStore.state,
                    o = r(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n) return;
                await n.load();
                let s = (0, r(593303).k)(t);
                s && await (0, r(72713).t)({
                    environment: i,
                    spaceViewStore: s,
                    userSettingsStore: o,
                    userRootStore: n,
                    pageVisitSource: r(254656).y8.SwitchSpace,
                    navigationType: "switchingToOrLoadingSpace"
                })
            }
            async function tl(e) {
                (await tf()).handleAi(e)
            }
            async function tc(e, t) {
                let a = e;
                t && (a = await to(t, e)), await r(807717).createOrJoinSpace(a, "mobile_native_listener")
            }
            async function td(e, t) {
                let a = e;
                t && (a = await to(t, e)), await r(807717).createOrJoinSpace(a, "mobile_native_listener_sidebar_switcher")
            }

            function tu(e) {
                r(843582).w.setState({
                    open: !0
                });
                let {
                    query: t
                } = e;
                t && r(198125).Ay.setState({ ...r(198125).Ay.state,
                    filter: t
                })
            }

            function tp(e) {
                (0, r(907620).T)("supportsNativeHome") && e.device.isPhone ? ((0, r(389432).z)({
                    currentUserId: e.currentUser.id
                }), (0, r(323836).M)({
                    environment: e,
                    from: "mobile_bottom_bar",
                    redirect: !0,
                    quickAddParentOverride: {
                        type: "space-private-pages"
                    }
                })) : (0, r(323836).M)({
                    environment: e,
                    from: "mobile_bottom_bar"
                }), (0, r(586245).M)(e, {
                    itemName: "add_page"
                })
            }
            async function tf() {
                return await Promise.all([r.e(12354), r.e(86477)]).then(r.bind(r, 987329))
            }
            let tm = new(r(815048)).O2("useReactiveMessageEventListener", () => r.e(38402).then(r.bind(r, 283602)));

            function tv(e) {
                var t;
                let d, u, p, v, g, h, b, _, S, y, w, A, E, k, T, I, C, L, P, D, x, M, O, q, W, $, j, K, V, X, Q, Z, ee, et, ea, ei, en, eo, es, el, ec, ed, eu, ep, ef, em, eg, eA, eE, ek, eT, eI, eC, eL, eU, eR, eN, eP, eO, eq, eW, eB, e$, eK, eV, ez, eH, eG, eJ, eY, e2, e1, e9, e4, e6, te, tt, tr, ta, tn, to, ts, tl, tc, td, tu, tp, tf, tm, tv, th, t_, tS, ty, tw, tA = (0, r(533992).v3)(),
                    tE = (0, r(83208).X)("enable_early_space_store"),
                    tk = (0, r(83208).X)("remove_app_store_reset_from_2019"),
                    tT = (0, r(119965).V)(),
                    tI = "on" === (0, r(604306).r)("lazier_ad_analytics_iframe", {
                        enableEventTrailLogging: !0
                    });
                (0, r(383953).l)(() => {
                    let {
                        device: e,
                        mobileNative: t
                    } = tA;
                    if (tE || tk || "/blank" === window.location.pathname && r(989962).isPrewarmedTabLoadSidebarEnabled || r(728372).default.setState(r(728372).default.getInitialState()), (0, r(876722).f)(tA), r(803229).fD(tA), t && t.hideSplashscreen(), n().A.isMobile) {
                        let e = document.body.parentElement;
                        e && e.classList.add(r(828432).Hw6)
                    }
                    tI || r(884353).hR({
                            device: e,
                            config: n().A,
                            cookieService: tA.cookieService
                        }), r(599412).g5({
                            locale: r(849917).locale,
                            env: "production"
                        }), (0, r(41225).O8)(window.location.href),
                        function(e) {
                            if (!(!a && (0, r(758654).qn)(e, c))) return;
                            let t = (0, r(758654).qn)(e, c);
                            if (t) {
                                let e = decodeURIComponent(t),
                                    r = (0, l().$l)(e);
                                r && (a = r)
                            }
                            let i = (0, r(758654).qm)(e, c);
                            window.history.replaceState(window.history.state, "", i)
                        }(window.location.href)
                }), (0, r(682985).K8)(() => {
                    var e;
                    let t = r(728372).AppStoreCurrentUserSettingsStore.state,
                        a = (null == t || null == (e = t.getSettings()) ? void 0 : e.number_separator_preference) ? ? "default";
                    return (0, r(599412).IJ)(a), a
                }, []), (0, r(439109).p)(), d = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                    if (r(700511).h.setAnalyticsSettingsFetcher(eM), d.device.isMobileNative && d.mobileNative) {
                        let {
                            mobileNative: e
                        } = d;
                        r(700511).h.setAnalyticsDebugLog((t, a) => {
                            r(218744).default.checkGate({
                                gateName: "debug_analytics"
                            }) && e.debugLog(`🦁 analytic event: ${t} | ${JSON.stringify(a)}`)
                        })
                    }(0, r(56994).E)(d)
                }, [d]), u = (0, r(533992).v3)(), p = (0, r(533992).Y0)(), (0, i.useEffect)(() => {
                    let e;
                    if (p.isMobileNative) return;
                    document.hasFocus() && (e = setInterval(() => {
                        f(u)
                    }, 6e4), f(u));
                    let t = () => {
                            e && clearInterval(e), e = setInterval(() => {
                                f(u)
                            }, 6e4), f(u)
                        },
                        r = () => {
                            e && clearInterval(e), e = void 0
                        };
                    return window.addEventListener("focus", t), window.addEventListener("blur", r), () => {
                        e && clearInterval(e), window.removeEventListener("focus", t), window.removeEventListener("blur", r)
                    }
                }, [p.isMobileNative, u]), v = (0, i.useRef)(!1), g = (0, r(533992).v3)(), h = (0, r(682985).K8)(() => {
                    var e;
                    return null == (e = (0, r(328765).S)()) ? void 0 : e.getSpaceId()
                }, []), b = (0, i.useCallback)(async e => {
                    if (!r(205885).A.state.online || !e.currentUser.id || 0 === G().fJ.size) return {
                        serverError: !1
                    };
                    let t = await e.api.callMainCellApi({
                        eventName: "getTasks",
                        environment: e,
                        data: {
                            taskIds: Array.from(G().fJ.values())
                        }
                    });
                    if ("success" !== t.type) return {
                        serverError: !0
                    };
                    let {
                        results: a
                    } = t.data, i = new Set(G().fJ);
                    for (let t of a) {
                        var n;
                        i.delete(t.id), t.status && (0, H().s)({
                            environment: e,
                            eventName: t.eventName,
                            response: t.status,
                            userId: e.currentUser.id
                        }), G().u_.emit(t.id, t), n = t.eventName, U.emit(n, t), ("failure" === t.state || "success" === t.state || "dead" === t.state || "timeout_before_execution" === t.state) && G().fJ.delete(t.id)
                    }
                    if (i.size > 0)
                        for (let e of i.values()) G().fJ.delete(e);
                    return {
                        serverError: !1
                    }
                }, []), _ = (0, i.useCallback)(async e => {
                    if (e.currentUser.id && h) {
                        let t = await e.api.callCellCompatibleApi({
                            eventName: "getUserTasks",
                            environment: e,
                            data: {
                                spaceId: h
                            },
                            cellNavigation: {
                                spaceId: h
                            }
                        });
                        if ("success" === t.type) {
                            for (let e of t.data.taskIds) G().fJ.add(e);
                            t.data.taskIds.length > 0 && b(e)
                        }
                    }
                }, [b, h]), S = (0, i.useCallback)(() => {
                    let e = r(205885).A.state.online;
                    e && !v.current && _(g), v.current = e
                }, [g, _]), (0, i.useEffect)(() => {
                    let e;
                    v.current = r(205885).A.state.online;
                    let t = !1,
                        a = 0,
                        i = () => {
                            t || (e = setTimeout(async () => {
                                t || (a = (await b(g)).serverError ? Math.min(a + 1, 10) : 0, i())
                            }, function(e) {
                                if (0 === e) return 2e3;
                                let t = Math.min(2e3 * Math.pow(2, e), 6e4),
                                    a = .1 * t;
                                return t + (0, r(612483).L1)(-a, a)
                            }(a)))
                        };
                    return e = setTimeout(() => {
                        t || (_(g), i())
                    }, (0, r(612483).L1)(0, 1e3)), r(205885).A.addListener(S), () => {
                        t = !0, void 0 !== e && clearTimeout(e), r(205885).A.removeListener(S)
                    }
                }, [g, b, S, _]), y = (0, i.useCallback)(e => {
                    let {
                        [e]: t, ...r
                    } = N.state || {};
                    N.setState(Object.keys(r).length > 0 ? r : void 0)
                }, []), w = (0, i.useCallback)(e => {
                    var t, r;
                    let a = null == (t = e.request.block) ? void 0 : t.id;
                    if (a)
                        if ("success" === e.state) {
                            let t = e.status,
                                r = null == t ? void 0 : t.continuationTask;
                            if (null != r && r.scheduled && t) {
                                R().A.setStatus(a, t);
                                let e = N.state || {};
                                N.setState({ ...e,
                                    [a]: t
                                })
                            } else R().A.setStatus(a, void 0), y(a)
                        } else if ("in_progress" === e.state || "not_started" === e.state) {
                        let t = e.status,
                            i = R().A.state.pageMap[a];
                        if (null != i && null != (r = i.continuationTask) && r.scheduled) {
                            let e = i.continuationTask.resumesAt;
                            (!e || e <= Date.now()) && t && (R().A.setStatus(a, {
                                importedNotes: t.importedNotes,
                                totalNotes: t.totalNotes,
                                continuationTask: void 0
                            }), y(a))
                        } else R().A.setStatus(a, t)
                    } else R().A.setStatus(a, void 0), y(a)
                }, [y]), (0, i.useEffect)(() => {
                    let e = N.state;
                    if (e) {
                        let r = Date.now(),
                            a = {};
                        for (let [i, n] of Object.entries(e)) {
                            var t;
                            null != (t = n.continuationTask) && t.resumesAt && n.continuationTask.resumesAt > r && (R().A.setStatus(i, n), a[i] = n)
                        }
                        Object.keys(a).length !== Object.keys(e).length && N.setState(Object.keys(a).length > 0 ? a : void 0)
                    }
                    return U.addListener(r(690004).r, w), () => {
                        U.removeListener(r(690004).r, w)
                    }
                }, [w]), (0, i.useEffect)(() => {
                    function e(e) {
                        var t;
                        let a = null == (t = e.request.block) ? void 0 : t.id;
                        a && ("success" === e.state ? r(4929).A.setStatus(a, !1) : "in_progress" === e.state || "not_started" === e.state ? r(4929).A.setStatus(a, !0) : r(4929).A.setStatus(a, !1))
                    }
                    return U.addListener(J, e), () => {
                        U.removeListener(J, e)
                    }
                }, []), A = (0, r(533992).v3)(), E = (0, i.useCallback)(() => {
                    r(997524).uh(A)
                }, [A]), (0, i.useEffect)(() => (E(), r(199162).A.addListener(E), () => {
                    r(199162).A.removeListener(E)
                }), [E]);
                let tC = new eX((0, r(533992).v3)());
                return (0, i.useEffect)(() => {
                        let e = a;
                        e && tC.setPageVisitTrackerDataFromCrossOver(e)
                    }, [tC]), k = (0, r(533992).v3)(), T = (0, r(682985).O$)(r(728372).AppStoreCurrentUserRootStore), (0, i.useEffect)(() => {
                        T && er(k, T)
                    }, [T, k]), I = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        "external" === (0, r(132702).parseRoute)({
                            url: window.location.href,
                            isMobile: n().A.isMobile,
                            baseUrl: n().A.domainBaseUrl,
                            publicDomainName: n().A.publicDomainName,
                            protocol: n().A.protocol,
                            currentUrl: window.location.href,
                            requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                        }).name && r(647095).ui({
                            message: "Mismatch between origin and baseUrl (dev).",
                            showCancel: !1,
                            keepFocus: !1,
                            items: [{
                                label: (0, m.jsx)(r(109939).sA, {
                                    defaultMessage: "OK",
                                    id: "notionAppContainer.dialog.mismatchedOriginURL.okayButton.label"
                                }),
                                onAccept: () => {
                                    let e = r(758654).pf({
                                            relativeUrl: r(758654).ZO(window.location.href),
                                            baseUrl: n().A.domainBaseUrl
                                        }),
                                        t = r(758654).qg(e);
                                    t.protocol = r(758654).qg(window.location.href).protocol, (0, r(318620).Y)(r(758654).GP(t))
                                }
                            }]
                        })
                    }, [I]), C = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        ev(C);
                        let e = window.setInterval(() => ev(C), 5e3);
                        return () => window.clearInterval(e)
                    }, [C]), L = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        (0, r(887789).setEnvironment)(L)
                    }, [L]), P = (0, r(960253).e)(), D = (0, r(682985).K8)(() => {
                        let e, t, a, i;
                        return [(e = eb(), t = eh(), [...e.flatMap(e => r(381453).Hn(r(762507).DS).map(t => e_({
                            discussionId: e,
                            level: t + 1,
                            hovered: !0,
                            selected: !1,
                            mode: P
                        }))), ...t.flatMap(e => r(381453).Hn(r(762507).DS).map(t => e_({
                            discussionId: e,
                            level: t + 1,
                            hovered: !1,
                            selected: !0,
                            mode: P
                        })))].join("\n")), (a = eb(), i = eh(), [...a.map(e => ew({
                            themeMode: P,
                            discussionId: e,
                            selected: !1,
                            hovered: !0
                        })), ...i.map(e => ew({
                            themeMode: P,
                            discussionId: e,
                            selected: !0,
                            hovered: !1
                        }))].join("\n"))].join("\n")
                    }, [P]), x = (0, r(682985).K8)(() => (function() {
                        var e, t, a;
                        let i = (null == (e = r(84300).A.state) ? void 0 : e.type) === "token" ? null == (t = r(84300).A.state) || null == (t = t.annotations) ? void 0 : t.find(r(247438).sh$) : void 0;
                        if (!i) return "";
                        let n = (null == (a = r(84300).A.state) ? void 0 : a.type) === "token" ? r(84300).A.state.store : void 0,
                            o = (0, r(247438).cQR)(i);
                        return (null == n ? void 0 : n.table) !== "block" ? "" : `
			.${(0,r(762507).re)({href:o,blockId:n.id})}.${r(728069).Do} {
				transition: border-color 100ms ease-in, opacity 100ms ease-in;
				border-color: currentColor !important;
				opacity: 1 !important;
			}
		`
                    })(), []), M = (0, r(682985).K8)(() => {
                        let e, t, a, i;
                        return e = "", (t = r(200041).A.getHoveredEdit()) && (e = `
			.${(0,r(762507).K3)({type:"insert",editId:t.editId})} {
				${ey({themeMode:P,selected:!1,hovered:!0})}
			}
			.${(0,r(762507).K3)({type:"remove",editId:t.editId})} {
				${a=(0,r(632079).FK)({annotationType:"remove",type:"background",selected:!1,hovered:!0,overlapping:!1,mode:P}),`
                            background: $ {
                                a
                            }!important; color: $ {
                                r(632079).Tj.text.secondary
                            }!important; text - decoration - color: rgba(0, 0, 0, 0) !important;
                            `}
			}
		`), i = `
		.${r(828432)._Qb} .${(0,r(762507).h_)("insert")} {
			background: initial !important;
			border-bottom: initial !important;
			color: ${r(632079).Tj.text.primary} !important;
		}

		.${r(828432)._Qb} .${(0,r(762507).h_)("remove")} {
			background: initial !important;
			border-bottom: initial !important;
			color: ${r(632079).Tj.text.disabled} !important;
		}
	`, `
		${e}
		${i}
	`
                    }, [P]), O = (0, r(682985).K8)(() => (function(e) {
                        var t, a, i;
                        if (!(null == (t = r(332190).A.state) ? void 0 : t.open)) return "";
                        let n = [],
                            o = [];
                        return null != (a = r(827862).A.state) && a.isHovered && (n = r(381453).Hn(r(762507).DS).map(t => eS({
                            level: t + 1,
                            hovered: !0,
                            selected: !1,
                            mode: e
                        }))), null != (i = r(827862).A.state) && i.isActivelyComposing && (o = r(381453).Hn(r(762507).DS).map(t => eS({
                            level: t + 1,
                            hovered: !1,
                            selected: !0,
                            mode: e
                        }))), [...n, ...o].join("\n")
                    })(P), [P]), q = (0, r(682985).K8)(() => (function(e) {
                        let t, a, i, n, o, s;
                        return r(183056).default.isRightMarginCommentHovered() ? [(t = (0, r(632079).aO)({
                            level: 1,
                            mode: e,
                            hovered: !1,
                            selected: !1
                        }), a = (0, r(650342).Mj)(t).alpha() / 2, i = (0, r(650342).Mj)(t).alpha(a).toRgbString(), n = (0, r(632079).JG)({
                            level: 1,
                            mode: e,
                            hovered: !1,
                            selected: !1
                        }), o = (0, r(650342).Mj)(n).alpha() / 2, s = (0, r(650342).Mj)(n).alpha(o).toRgbString(), `
		.${r(728069).K6}.${r(728069).Do} {
			box-shadow: unset !important;
			padding-bottom: 2px;
			background: ${i} !important;
			border-bottom: 2px solid ${s} !important;
			animation: commentFadeIn 500ms ease-in;
		}
	`)].join("\n") : ""
                    })(P), [P]), W = (0, i.useMemo)(() => [D, x, M, O, q].filter(Boolean).join("\n"), [M, D, x, O, q]), $ = (0, i.useRef)(null), (0, i.useLayoutEffect)(() => {
                        if (!$.current) {
                            let e = document.createElement("style");
                            $.current = e, document.head.appendChild(e)
                        }
                        $.current.innerHTML = W
                    }, [W]), j = (0, r(533992).v3)(), K = (0, r(109939).tz)(), V = (0, r(960253).e)(), X = (0, i.useRef)(), Q = (0, r(682985).r6)(() => {
                        let {
                            RouterStore: e
                        } = j, t = e.state.route;
                        if (t) return (0, r(578387).Z)({
                            environment: j,
                            store: r(728372).AppStoreMainEditorCurrentBlockStore.state,
                            route: t,
                            themeMode: V
                        })
                    }, [j, V], {
                        equalityFn: r(381453).n4
                    }), (0, r(682985).O$)(Q), (0, i.useEffect)(() => {
                        let e = r(381453).sg(function() {
                                let e, t, a, i, {
                                        device: o
                                    } = j,
                                    s = Q.state;
                                if (!s) return;
                                let {
                                    url: l,
                                    title: c,
                                    icon: d,
                                    assetPath: u,
                                    isNonverified: p,
                                    hasBypassedContentClassification: f,
                                    isMemberOfSpace: m,
                                    description: v,
                                    shouldNoIndex: g,
                                    spaceNameForMetaTag: h,
                                    authorName: b,
                                    coverImage: _,
                                    isPublicSite: S
                                } = s, {
                                    iconDefinition: y
                                } = s;
                                d && (0, r(111012).T8)(d.icon) ? a = d.icon : d && (0, r(312028).A)(d.icon) ? e = d.icon : d && r(728601).GM(d.icon) ? t = d.icon : u && r(728601).Du(u) && (i = u);
                                let w = (0, r(578387).EL)(j, s);
                                w && document.title !== w && (document.title = w, (0, r(328975).H)(w)), l && r(758654).ZO(l) !== r(758654).ZO(window.location.href) && (window.history.replaceState(window.history.state, "", l), function(e) {
                                    var t;
                                    let {
                                        environment: a,
                                        url: i
                                    } = e;
                                    if (!(0, r(318355).A)(a)) return;
                                    let {
                                        TabbedRouterStore: o
                                    } = a, s = (0, r(500880).Xz)(o.state);
                                    if ("web" !== s.type) return;
                                    let l = r(132702).parseRoute({
                                            url: i,
                                            baseUrl: n().A.domainBaseUrl,
                                            publicDomainName: n().A.publicDomainName,
                                            isMobile: n().A.isMobile,
                                            protocol: n().A.protocol,
                                            currentUrl: window.location.href,
                                            requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                                        }),
                                        c = (null == (t = s.redirectedTo) ? void 0 : t.route) ? ? s.route;
                                    if (l.name !== c.name) return;
                                    let d = r(758654).ZO(e.url);
                                    s.redirectedTo ? (s.redirectedTo.route = l, s.redirectedTo.url = d) : (s.route = l, s.url = d)
                                }({
                                    environment: j,
                                    url: window.location.href
                                }));
                                let A = document.querySelector("link[rel='shortcut icon']");
                                if (A) {
                                    let s = {
                                            linkEl: A,
                                            environment: j,
                                            device: o,
                                            themeMode: V,
                                            config: n().A,
                                            lastSetIconStringRef: X
                                        },
                                        l = (0, r(578387).oo)("production");
                                    !p || f || m ? e ? function(e, t) {
                                        let {
                                            linkEl: a,
                                            environment: i,
                                            lastSetIconStringRef: n
                                        } = e;
                                        t !== n.current && (n.current = t, (0, r(811446).A)(t, (0, r(591404).FN)(i)).then(async e => {
                                            await r(259533).waitForInitialPageRenderToComplete(), await r(469945).A.waitUntil(() => !r(469945).A.state.isMeasuring), a.href = (null == e ? void 0 : e.toDataURL("image/png")) || ""
                                        }))
                                    }(s, e) : a ? function(e, t) {
                                        let {
                                            linkEl: a,
                                            device: i,
                                            themeMode: n,
                                            lastSetIconStringRef: o
                                        } = e;
                                        if (t === o.current) return;
                                        o.current = t;
                                        let s = `${t}?mode=${n}`;
                                        i.isFirefox ? a.href = s : (0, r(463574).A)(s).then(e => {
                                            a.href = e
                                        })
                                    }(s, a) : d && t ? function(e, t, a) {
                                        let {
                                            linkEl: i,
                                            environment: n,
                                            config: o,
                                            lastSetIconStringRef: s
                                        } = e, { ...l
                                        } = t, c = window.location.origin !== o.domainBaseUrl, d = r(587031).wY({
                                            url: a,
                                            permissionRecord: l.pointer,
                                            baseUrl: o.domainBaseUrl,
                                            fullyQualified: !1,
                                            userId: n.currentUser.id,
                                            ...c ? {
                                                favicon: !0
                                            } : {
                                                width: 100
                                            }
                                        });
                                        d !== s.current && (s.current = d, r(941701).transactionQueue.awaitRecordTransaction(l.pointer).then(() => {
                                            if (!c) return (0, r(463574).A)(d);
                                            i.href = d
                                        }).then(e => {
                                            !c && e && (i.href = e)
                                        }))
                                    }(s, d, t) : y ? function(e, t) {
                                        let {
                                            linkEl: a,
                                            themeMode: i,
                                            lastSetIconStringRef: n
                                        } = e, o = `nds-icon-${t.viewBox}-${i}`;
                                        o === n.current || (n.current = o, a.href = (0, r(21313).M)(t, i).toDataURL("image/png"))
                                    }(s, y) : i ? function(e, t) {
                                        let {
                                            linkEl: a,
                                            environment: i,
                                            config: n,
                                            lastSetIconStringRef: o
                                        } = e, s = r(587031).x8({
                                            url: t,
                                            width: 100,
                                            baseUrl: n.domainBaseUrl,
                                            fullyQualified: !1,
                                            userId: i.currentUser.id
                                        });
                                        s !== o.current && (o.current = s, (0, r(463574).A)(s).then(e => {
                                            a.href = e
                                        }))
                                    }(s, i) : l !== X.current && (A.href = l, X.current = l) : (A.href = l, X.current = l)
                                }
                                if (S) {
                                    ! function({
                                        title: e,
                                        description: t,
                                        url: r,
                                        icon: a,
                                        image: i,
                                        shouldNoIndex: n,
                                        author: o,
                                        spaceName: s
                                    }) {
                                        function l(e, t) {
                                            let r = `meta[property="${t}"], meta[name="${e}"]`,
                                                a = document.querySelector(r);
                                            if (a && a instanceof HTMLMetaElement) return a;
                                            let i = document.createElement("meta");
                                            return t ? i.setAttribute("property", t) : i.setAttribute("name", e), document.head.appendChild(i), i
                                        }

                                        function c(e) {
                                            let t = document.querySelector(`link[rel="${e}"]`);
                                            if (t && t instanceof HTMLLinkElement) return t;
                                            let r = document.createElement("link");
                                            return r.setAttribute("rel", e), document.head.appendChild(r), r
                                        }
                                        if (['meta[name="twitter:site"]'].forEach(e => {
                                                let t = document.querySelector(e);
                                                t && t instanceof HTMLMetaElement && t.remove()
                                            }), l("twitter:title").setAttribute("content", e), l("og:title", "og:title").setAttribute("content", e), t && (l("description").setAttribute("content", t), l("twitter:description").setAttribute("content", t), l("og:description", "og:description").setAttribute("content", t)), r && (l("twitter:url").setAttribute("content", r), l("og:url", "og:url").setAttribute("content", r), c("canonical").setAttribute("href", r)), i && (l("twitter:image").setAttribute("content", i), l("og:image", "og:image").setAttribute("content", i)), o && l("article:author", "article:author").setAttribute("content", o), s && l("og:site_name", "og:site_name").setAttribute("content", s), a && c("shortcut icon").setAttribute("href", a), n) l("robots").setAttribute("content", "noindex");
                                        else {
                                            let e = document.querySelector('meta[name="robots"]');
                                            e && e instanceof HTMLMetaElement && e.remove()
                                        }
                                    }({
                                        title: c ? ? "",
                                        description: v,
                                        url: l,
                                        icon: null == A ? void 0 : A.href,
                                        image: _,
                                        shouldNoIndex: g,
                                        author: b,
                                        spaceName: h
                                    });
                                    let e = document.querySelector('script[type="application/ld+json"]');
                                    e && e.remove();
                                    let t = document.createElement("script");
                                    t.type = "application/ld+json", t.textContent = JSON.stringify({
                                        "@context": "https://schema.org",
                                        "@type": "WebSite",
                                        name: h,
                                        url: window.location.href
                                    }), document.head.appendChild(t)
                                }
                            }, 500, {
                                leading: !0
                            }),
                            t = document.title;
                        return Q.state && e(), Q.addListener(e), () => {
                            Q.removeListener(e), document.title = t
                        }
                    }, [j, K, Q, V]), (0, i.useEffect)(() => {
                        eD();
                        let e = window.setInterval(() => eD(), l().pT);
                        return () => window.clearInterval(e)
                    }, []), Z = (0, r(533992).v3)(), ee = (0, r(533992).Y0)(), et = (0, r(682985).K8)(() => {
                        let e, t, a = r(728372).AppStoreCurrentUserStore.state,
                            i = r(728372).AppStoreCurrentUserSettingsStore.state,
                            n = r(728372).AppStoreCurrentUserRootStore.state;
                        if (!Z.currentUser.id || !a || !i || !n) return Z.publicDomainUserId ? {
                            user_id: Z.publicDomainUserId
                        } : void 0;
                        let o = n.getSpaceViewStores(),
                            s = o.length > 0 && o.every(e => e.isReady());
                        if (!a.isDefined() || !i.isDefined() || !s) return;
                        let l = r(381453).oE(o.map(e => e.getSpaceId())).map(e => Y().A.getData(Z, {
                                spaceId: e,
                                userId: Z.currentUser.id
                            })),
                            c = o.map(e => e.getModel()).filter(e => (0, r(722371).O9)(e)).filter(e => !e.getNotifyEmail()).map(e => e.getSpaceId()).map(r(4962).ot);
                        if (!l.every(e => !!e || null === e)) return;
                        let d = (e = l.map(e => (0, r(433464).G)(e)), (t = new Set(r(381453).oE(e))).has("enterprise") ? "enterprise" : t.has("business") ? "business" : t.has("plus") ? "plus" : t.has("personal") ? "personal_pro" : t.has("team_free") ? "team_free" : t.has("personal_free") ? "personal_free" : t.has("free") ? "free" : "none"),
                            u = i.getSettings();
                        if (!u || void 0 === r(105692).subscriptionDataStoreInstance.state) return;
                        let p = {
                            user_id: a.id,
                            email: a.getEmail(),
                            user_persona: u.persona,
                            user_team_role: u.team_role,
                            user_use_cases: u.use_cases,
                            user_company_size: u.company_size,
                            user_source: u.source,
                            user_plan_type: d,
                            user_subscription_tier: r(105692).subscriptionDataStoreInstance.state.subscriptionTier,
                            user_has_at_least_one_free_tier_space: l.map(e => (0, r(433464).G)(e)).filter(r(722371).Vq).some(e => r(262166).dL(e)),
                            time_zone: u.time_zone,
                            locale: u.locale,
                            preferred_locale: u.preferred_locale,
                            signup_time: u.signup_time,
                            app_version: ee.version,
                            workspace_email_opt_out: c
                        };
                        return u.signup_time && (p.created_at = Math.floor(u.signup_time / 1e3)), ee.desktopAppVersion && (p.desktop_app_version = ee.desktopAppVersion), ee.mobileAppVersion && (p.mobile_app_version = ee.mobileAppVersion), u.used_desktop_web_app && (p.used_desktop_web_app = u.used_desktop_web_app), u.used_mobile_web_app && (p.used_mobile_web_app = u.used_mobile_web_app), u.used_mac_app && (p.used_mac_app = u.used_mac_app), u.used_windows_app && (p.used_windows_app = u.used_windows_app), u.used_ios_app && (p.used_ios_app = u.used_ios_app), u.used_android_app && (p.used_android_app = u.used_android_app), p
                    }, [Z, ee], {
                        equalityFn: r(381453).n4
                    }), (0, i.useEffect)(() => {
                        et && "none" !== et.user_plan_type && ex(Z, et)
                    }, [Z, et]), ea = void 0 !== et, (0, i.useEffect)(() => {
                        let e = window.setTimeout(() => {
                            !ea && Z.currentUser.id && ex(Z, {
                                user_id: Z.currentUser.id
                            })
                        }, 5e3);
                        return () => {
                            window.clearTimeout(e)
                        }
                    }, [Z, ea]), ei = (0, r(533992).v3)(), en = (0, r(682985).K8)(() => r(453997).default.state.isLoaded, []), eo = (0, r(682985).K8)(() => r(453997).default.state.isLoggingEnabled, []), (0, i.useEffect)(() => {
                        async function e() {
                            let e = await (0, r(647439).T)(ei);
                            await r(218744).default.waitUntilStatsigReadyAsync(), "on" === r(218744).default.getEligibleGroup({
                                experimentId: "event_trail_client_performance_impact"
                            }) ? r(693171).XQ({
                                config: n().A,
                                deviceId: e,
                                isEnabled: eo
                            }) : await r(693171).n_({
                                config: n().A,
                                isEnabled: eo,
                                deviceId: e,
                                cookieService: ei.cookieService,
                                endpoint: r(453997).default.state.endpoint
                            })
                        }
                        en && e()
                    }, [ei, en, eo]), (0, r(317536).A)(), (0, r(895732).A)(), es = (0, r(533992).v3)(), el = (0, r(533992).Y0)(), (0, i.useEffect)(() => {
                        var e;
                        el.isElectron && (e = r(773352).clientLoggerEnvironmentData, r(775657).electronApi && (r(775657).electronApi.setLoggerData ? r(775657).electronApi.setLoggerData(e) : r(775657).electronApi.setLoggerData && r(775657).electronApi.setLoggerData(e))), es.mobileNative && es.mobileNative.setLoggerData(r(773352).clientLoggerEnvironmentData)
                    }, [el.isElectron, es.mobileNative]), ec = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        eF({
                            environment: ec
                        })
                    }, [ec]), ed = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        if (n().A.isMobile) {
                            function e() {
                                r(374176).default.afterNextFlush(() => {
                                    (0, r(126608).p)(ed)
                                })
                            }
                            return r(358377).default.addListener(e), ej.addListener(e), r(707785).A.addListener(e), () => {
                                r(358377).default.removeListener(e), ej.removeListener(e), r(707785).A.removeListener(e)
                            }
                        }
                    }, [ed]), (0, r(106498).z)(), (0, r(398902).Ay)(),
                    function() {
                        let [{
                            value: e
                        }] = (0, r(97668).Yb)(() => r(219279).statsigClientLoader.getClient(), []), t = (0, r(682985).O$)(r(205885).e);
                        (0, i.useEffect)(() => {
                            e && (t ? e.updateRuntimeOptions({
                                disableLogging: !1
                            }) : e.updateRuntimeOptions({
                                disableLogging: !0
                            }))
                        }, [e, t])
                    }(), eu = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        if (!r(499128).I.getShouldCollect()) return;
                        let e = setInterval(() => {
                            r(499128).I.getLongEventMetrics().forEach(e => {
                                (0, r(104310).u)({
                                    event: e
                                })
                            }), r(499128).I.resetMetrics()
                        }, 5e3);
                        return () => clearInterval(e)
                    }, [eu]), ep = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        if (!r(958780).t.getShouldCollect()) return;
                        let e = setInterval(() => {
                            r(958780).t.getMetrics().forEach(e => {
                                (0, r(104310).u)({
                                    event: e
                                })
                            }), r(958780).t.resetMetrics()
                        }, 5e3);
                        return () => {
                            clearInterval(e), r(958780).t.resetMetrics()
                        }
                    }, [ep]), ef = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        let {
                            mobileNative: e
                        } = ef;
                        e && e.enableBridgeMetricsCollection(ef, s().default, r(218744).default)
                    }, [ef]), em = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        function e(e) {
                            (0, r(104310).u)({
                                event: {
                                    eventName: "show_page_reload_confirmation_dialog",
                                    eventProperties: {
                                        reason: e
                                    }
                                }
                            })
                        }
                        return r(715689).showConfirmationDialogEventEmitter.addListener(e), () => {
                            r(715689).showConfirmationDialogEventEmitter.removeListener(e)
                        }
                    }, [em]), eg = (0, r(533992).v3)(), eA = (0, r(682985).K8)(() => "blank" === eg.RouterStore.state.route.name, [eg.RouterStore]), (0, i.useEffect)(() => {
                        let e;
                        if (eA) return;
                        let t = !document.hidden;

                        function a() {
                            eg.device.isElectron || r(825244).A.setState({ ...r(825244).A.state,
                                isVisible: !document.hidden
                            });
                            let a = !document.hidden;
                            a !== t && (t = a, r(825244).P.setState(a), clearTimeout(e), a && (e = setTimeout(() => {
                                r(825244).P.setState(!1)
                            }, 300)));
                            let i = r(363256).e.withListenerIgnored(() => eg.AppUpdateStore.state.appUpdate);
                            i && "ready" === i.state && r(194763).lg(eg, i) && r(194763).JG({
                                environment: eg,
                                url: window.location.href,
                                version: i.version,
                                versionCreatedTime: i.versionCreatedTime
                            })
                        }
                        return document.addEventListener("visibilitychange", a), a(), () => {
                            document.removeEventListener("visibilitychange", a)
                        }
                    }, [eg, eA]), eE = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        let e;
                        if (!eQ || eE.device.isIOS) return;
                        let t = !1;
                        return (async () => {
                            try {
                                let {
                                    initializePerformanceObserver: a
                                } = await r.e(36773).then(r.bind(r, 931593));
                                if (t) return;
                                e = a(eE)
                            } catch (e) {}
                        })(), () => {
                            var r;
                            t = !0, null == (r = e) || r()
                        }
                    }, [eE]), ek = (0, r(533992).v3)(), eT = (0, r(682985).K8)(() => "blank" === ek.RouterStore.state.route.name, [ek]), eI = "on" === (0, r(604306).r)("prewarm_prefetch_more", {
                        enableEventTrailLogging: !0
                    }), (0, i.useEffect)(() => {
                        eT && eI && (r(491592).H.load(), r(734007).U.load(), r(683194).p.load(), r(411648).VI.duplicateActions.load(!0), r(864850).T.formulas.load())
                    }, [eT, eI]),
                    function() {
                        let {
                            WasmSqlite: e,
                            ElectronSqlite: t
                        } = (0, r(533992).v3)(), a = e || t || void 0, n = (0, r(682985).O$)(r(205885).e);
                        (0, i.useEffect)(() => {
                            a && (n ? a.enableCorruptionRepair() : a.disableCorruptionRepair())
                        }, [a, n])
                    }(), eC = (0, r(533992).v3)(), eL = (0, r(682985).K8)(() => r(461457).z.state.pendingPages, []), (0, i.useEffect)(() => {
                        if (0 === eL.size) return;
                        let e = async e => {
                            let {
                                pageId: t,
                                spaceId: a,
                                localRole: i
                            } = e;
                            try {
                                let e = {
                                        table: r(832375).evP,
                                        id: t,
                                        spaceId: a
                                    },
                                    n = await (0, r(130925).e)(eC, {
                                        pointer: e,
                                        userId: eC.currentUser.id,
                                        version: -1
                                    });
                                if (!n) return void r(773352).log({
                                    level: "info",
                                    from: "useCheckRemotePageRoleForCachedPage",
                                    type: "syncRecordValueResultUndefined",
                                    data: {
                                        miscDataToConvertToString: {
                                            pageId: t
                                        }
                                    }
                                });
                                let o = n.role;
                                if (n.value || r(773352).log({
                                        level: "info",
                                        from: "useCheckRemotePageRoleForCachedPage",
                                        type: "syncRecordValueHasUndefinedValueWithRole",
                                        data: {
                                            miscDataToConvertToString: {
                                                pageId: t,
                                                serverRole: o,
                                                localRole: i
                                            }
                                        }
                                    }), i === o) return;
                                r(773352).log({
                                    level: "info",
                                    from: "useCheckRemotePageRoleForCachedPage",
                                    type: "roleMismatchDetected",
                                    data: {
                                        miscDataToConvertToString: {
                                            pageId: t,
                                            localRole: i,
                                            serverRole: o
                                        }
                                    }
                                }), await z({
                                    environment: eC,
                                    pageId: t,
                                    spaceId: a
                                })
                            } catch (e) {
                                r(773352).log({
                                    level: "info",
                                    from: "useCheckRemotePageRoleForCachedPage",
                                    type: "roleMismatchCheckFailed",
                                    data: {
                                        miscDataToConvertToString: {
                                            pageId: t
                                        }
                                    },
                                    error: (0, r(416607).convertErrorToLog)(e)
                                })
                            } finally {
                                r(461457).z.markPageComplete(t)
                            }
                        };
                        for (let t of r(461457).z.consumePendingPages()) e(t)
                    }, [eC, eL]), eU = (0, r(533992).v3)(), (0, i.useEffect)(() => (function(e) {
                        async function t(t) {
                            var a, i;
                            let n = t.newVersion > t.oldVersion;
                            if (!r(218744).default.checkGate({
                                    gateName: "check_local_role_mismatch_on_set_record_value"
                                }) || t.pointer.table !== r(832375).evP || !n || (null == (a = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : a.id) !== t.pointer.id || r(461457).z.state.inFlightPages.has(t.pointer.id)) return;
                            r(773352).log({
                                level: "info",
                                from: "onRoleChange",
                                type: "pageNeedsRefetch",
                                data: {
                                    miscDataToConvertToString: {
                                        pageId: t.pointer.id,
                                        oldRole: t.oldRole,
                                        newRole: t.newRole
                                    }
                                }
                            });
                            let o = t.pointer.spaceId || (null == (i = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : i.getSpaceId());
                            o ? (r(461457).z.markPageInFlight(t.pointer.id), await z({
                                environment: e,
                                pageId: t.pointer.id,
                                spaceId: o,
                                bypassServerCache: !0
                            }).finally(() => {
                                r(461457).z.markPageComplete(t.pointer.id)
                            })) : r(773352).log({
                                level: "error",
                                from: "onRoleChange",
                                type: "missingSpaceId",
                                data: {
                                    miscDataToConvertToString: {
                                        pageId: t.pointer.id,
                                        oldRole: t.oldRole,
                                        newRole: t.newRole
                                    }
                                }
                            })
                        }
                        return e.defaultRecordCache.inMemoryRecordCache.addRoleChangeListener(t), () => {
                            e.defaultRecordCache.inMemoryRecordCache.removeRoleChangeListener(t)
                        }
                    })(eU), [eU]),
                    function() {
                        let {
                            deviceType: e
                        } = (0, r(533992).Y0)(), t = (0, r(533992).v3)(), a = t.currentUser.isLoggedIn();
                        (0, i.useEffect)(() => {
                            if (!a || "windows-desktop" !== e && "mac-desktop" !== e) return;
                            let i = async () => {
                                await (0, r(470604).a)() && t.api.callApi({
                                    eventName: "registerDesktopApp",
                                    environment: t,
                                    data: {
                                        deviceType: e
                                    }
                                })
                            };
                            i();
                            let n = window.setInterval(() => {
                                i()
                            }, 5 * l().Xb);
                            return () => {
                                window.clearInterval(n)
                            }
                        }, [a, e, t])
                    }(), (0, i.useEffect)(() => {
                        if (!window.BroadcastChannel) return;
                        let e = (0, r(13565).x0)(),
                            t = new Map,
                            a = new BroadcastChannel("notion_tab_tracker");
                        a.onmessage = e => {
                            let r = e.data;
                            "string" == typeof r && t.set(r, Date.now())
                        };
                        let i = window.setInterval(() => {
                            let i = [],
                                n = Date.now();
                            for (let [e, r] of t.entries()) n - r > e7 && i.push(e);
                            for (let e of (i.length && e5("Removing tab ids:", i), i)) t.delete(e);
                            a.postMessage(e);
                            let o = t.size + 1;
                            (0, r(677147).g)(o)
                        }, e0);
                        return () => {
                            a.close(), window.clearInterval(i)
                        }
                    }, []), eR = (0, r(533992).v3)(), eN = (0, i.useRef)(), eP = (0, i.useRef)(), (0, i.useEffect)(() => {
                        function e() {
                            let e, t, a = r(358377).default.state,
                                i = "empty" === a.mode ? void 0 : a.multiSelection.start.store,
                                n = "empty" === a.mode ? void 0 : a.multiSelection.end.store;
                            if (eN.current === i && eP.current === n || (eN.current = i, eP.current = n, eN.current !== eP.current)) return;
                            let o = r(169274).wg();
                            if (!o) return;
                            let {
                                rowIndex: s,
                                columnIndex: l,
                                simpleTableStore: c
                            } = o.getProps(), d = r(966237).A.state;
                            if (d.isActive) {
                                let {
                                    start: r,
                                    end: a
                                } = d.selection;
                                s >= r.row && s <= a.row && l >= r.col && l <= a.col && (e = d.mergeActiveRow, t = d.mergeActiveCol)
                            }
                            r(169274).VC({
                                environment: eR,
                                rowIndex: s,
                                columnIndex: l,
                                simpleTableStore: c,
                                mergeUnawareRowIndex: e,
                                mergeUnawareColIndex: t
                            })
                        }
                        return r(358377).default.addListener(e), () => {
                            r(358377).default.removeListener(e), eN.current = void 0, eP.current = void 0
                        }
                    }), eO = (0, i.useCallback)(e => {
                        var t, a;
                        let i = {
                                compressed: e.decodedBodySize !== e.encodedBodySize,
                                local_cache_hit: 0 === e.transferSize,
                                next_hop_protocol: e.nextHopProtocol,
                                did_prefetch: (null == (t = r(719100).i.cache.getPrefetchAnalytic(`loadCachedPageChunk(${null==(a=r(728372).AppStoreMainEditorCurrentBlockStore.state)?void 0:a.id})`)) ? void 0 : t.type) === "hit-match"
                            },
                            n = {
                                dns_lookup: {
                                    startTime: e.domainLookupStart,
                                    endTime: e.domainLookupEnd
                                },
                                connection_establish: {
                                    startTime: e.connectStart,
                                    endTime: e.connectEnd
                                },
                                request_queued: {
                                    startTime: e.connectEnd,
                                    endTime: e.requestStart
                                },
                                response_wait: {
                                    startTime: e.requestStart,
                                    endTime: e.responseStart
                                },
                                response_download: {
                                    startTime: e.responseStart,
                                    endTime: e.responseEnd
                                }
                            };
                        for (let [t, {
                                startTime: r,
                                endTime: a
                            }] of (s().default.DO_NOT_USE_measureLegacy({
                                metricName: "load_cached_page_chunk.fetch",
                                startTime: e.fetchStart,
                                endTime: e.responseEnd
                            }, {
                                data: { ...i,
                                    sub_metrics: {
                                        dns_lookup: n.dns_lookup.endTime - n.dns_lookup.startTime,
                                        connection_establish: n.connection_establish.endTime - n.connection_establish.startTime,
                                        request_queued: n.request_queued.endTime - n.request_queued.startTime,
                                        response_wait: n.response_wait.endTime - n.response_wait.startTime,
                                        response_download: n.response_download.endTime - n.response_download.startTime
                                    }
                                }
                            }), Object.entries(n))) s().default.DO_NOT_USE_measureLegacy({
                            metricName: `load_cached_page_chunk.fetch.${t}`,
                            startTime: r,
                            endTime: a
                        }, {
                            data: i
                        })
                    }, []), (0, i.useEffect)(() => {
                        let e = new PerformanceObserver(t => {
                            let r = t.getEntries().find(e => e.name.includes(`${n().A.api.http}/loadCachedPageChunk`) && !e.name.endsWith("s"));
                            r && ("resource" === r.entryType && eO(r), null == e || e.disconnect())
                        });
                        return e.observe({
                            type: "resource",
                            buffered: !0
                        }), () => {
                            e.disconnect()
                        }
                    }, [eO]), e3(), eq = (0, r(533992).v3)(), eW = (0, r(83208).X)("transactions_api_fewer_roundtrips"), (0, i.useEffect)(() => {
                        function e({
                            state: t
                        }) {
                            "flushCompleted" === t.status && s().default.measure({
                                metricName: t.wentBackOnlineFromOffline ? "transaction_queue_flush.from_offline_to_online" : "transaction_queue_flush.online",
                                startTime: t.startTime
                            }, {
                                data: {
                                    items_flushed: t.itemsFlushed,
                                    retryable_error_responses: t.retryableErrorResponses,
                                    failed_error_responses: t.failedErrorResponses,
                                    all_error_responses: t.retryableErrorResponses + t.failedErrorResponses,
                                    transactions_api_fewer_roundtrips: eW
                                }
                            })
                        }
                        return r(322021).R.addListener(e), () => {
                            r(322021).R.removeListener(e)
                        }
                    }, [eq, eW]), eB = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        let e = () => (0, r(312819).updateConnectionState)(eB);
                        return e(), r(205885).A.addListener(e), () => {
                            r(205885).A.removeListener(e)
                        }
                    }, [eB]), e$ = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        let {
                            persistedRecordCache: e
                        } = e$.defaultRecordCache;
                        e instanceof r(856114).m && e.setEnvironment(e$)
                    }, [e$]), eK = (0, r(533992).v3)(), eV = (0, i.useRef)("none"), ez = (0, i.useCallback)(e => {
                        let t = eV.current;
                        e !== t && (eV.current = e, "dragging" === e ? r(475305).A.setState({
                            isDragging: !0
                        }) : "dragging" === t && r(475305).A.setState({
                            isDragging: !1
                        }))
                    }, []), eH = (0, i.useCallback)(() => {
                        "none" === eV.current && ez("touching")
                    }, [ez]), eG = (0, i.useCallback)(() => {
                        ez("none")
                    }, [ez]), eJ = (0, i.useCallback)(() => {
                        "touching" === eV.current && r(239134).isExpanded(r(239134).get()) && ez("dragging")
                    }, [ez]), (0, i.useEffect)(() => {
                        if (eK.device.isIOS) return window.addEventListener("touchstart", eH), window.addEventListener("touchend", eG), window.addEventListener("touchcancel", eG), document.addEventListener("selectionchange", eJ), () => {
                            window.removeEventListener("touchstart", eH), window.removeEventListener("touchend", eG), window.removeEventListener("touchcancel", eG), document.removeEventListener("selectionchange", eJ)
                        }
                    }, [eK.device.isIOS, eH, eG, eJ]), eY = (0, i.useCallback)(() => {
                        r(374176).default.afterNextFlush(() => {
                            "empty" !== r(358377).default.state.mode && r(358377).default.setState({ ...r(358377).default.state,
                                savedSelectionXPosition: void 0
                            })
                        })
                    }, []), e2 = (0, i.useCallback)(() => {
                        setTimeout(() => {
                            r(239134).get() || (0, r(525779).clear)({
                                environment: eK
                            })
                        }, 0)
                    }, [eK]), (0, i.useEffect)(() => (window.addEventListener("mousedown", eY), eK.device.isMobileBrowser && document.addEventListener("focusout", e2), () => {
                        window.removeEventListener("mousedown", eY), document.removeEventListener("focusout", e2)
                    }), [eK, eY, e2]), B(), e1 = (0, r(109939).tz)(), e9 = !(0, r(682985).O$)(r(205885).e), e4 = (0, r(682985).K8)(() => (0, r(965142).s)(), []), e6 = (0, i.useRef)(e9), te = (0, i.useRef)(e4), (0, i.useEffect)(() => {
                        e9 && (!e6.current || e4 !== te.current) && function(e) {
                            var t;
                            let {
                                isOffline: a,
                                currentPageId: i,
                                intl: n
                            } = e;
                            if (!r(987458).A.state.offlinePages || !r(218744).default.checkGate({
                                    gateName: "download_for_offline"
                                }) || !a || !i || !(0, r(597845).Bd)(i)) return;
                            let o = null == (t = r(987458).A.state.offlinePages[i]) ? void 0 : t.last_downloaded_at,
                                s = o ? n.formatDate(o, {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                    hour: "numeric",
                                    minute: "numeric"
                                }) : void 0;
                            r(436555).D6({
                                label: (0, m.jsxs)("div", {
                                    children: [(0, m.jsx)("div", {
                                        style: F.style0,
                                        children: (0, m.jsx)(r(109939).sA, {
                                            defaultMessage: "Working offline",
                                            id: "offlinePages.snackbar.title"
                                        })
                                    }), o ? (0, m.jsx)("div", {
                                        style: F.style1,
                                        children: (0, m.jsx)(r(109939).sA, {
                                            defaultMessage: "Last sync on {lastDownloadedAtFormatted}.",
                                            id: "offlinePages.snackbar.description",
                                            values: {
                                                lastDownloadedAtFormatted: s
                                            }
                                        })
                                    }) : void 0]
                                })
                            })
                        }({
                            isOffline: e9,
                            currentPageId: e4,
                            intl: e1
                        }), e6.current = e9, te.current = e4
                    }, [e9, e4, e1]), tt = (0, r(533992).v3)(), tr = (0, r(533992).Y0)(), ta = (0, i.useRef)(!1), tn = (0, i.useCallback)(() => {
                        "system" === r(997524).lv() && r(199162).A.emit()
                    }, []), to = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.isReady()
                    }, []), (0, i.useLayoutEffect)(() => {
                        !ta.current && to && (tn(), ta.current = !0)
                    }, [to, tn]), (0, i.useEffect)(() => {
                        if (tr.isAndroid && tt.mobileNative) tt.mobileNative.updateReceiveApiHandlers({
                            themeChanged: e => tn()
                        });
                        else if (eZ.addEventListener && eZ.removeEventListener) return eZ.addEventListener("change", tn), () => {
                            eZ.removeEventListener("change", tn)
                        };
                        else if (eZ.addListener && eZ.removeListener) return eZ.addListener(tn), () => {
                            eZ.removeListener(tn)
                        }
                    }, [tr.isAndroid, tt, tn]), e8(), ts = (0, r(40742).n)(), (0, i.useEffect)(() => {
                        if (!ts || r(219279).StatsigInitializer.error || !r(219279).StatsigInitializer.isComplete) return;
                        let e = "on" === r(218744).default.getEligibleGroup({
                                experimentId: "opfs_page_cache",
                                defaultGroup: "control"
                            }),
                            t = r(218744).default.getConfig({
                                configName: "opfs_recordmap_cache_options"
                            }),
                            a = "on" === r(218744).default.getEligibleGroup({
                                experimentId: "opfs_page_cache_pre_process_first_chunk",
                                defaultGroup: "control",
                                enableEventTrailLogging: !0
                            });
                        r(22553).z.updateLocalStorageFromStatsig({
                            isEnabled: e,
                            options: t,
                            preProcessFirstChunk: a
                        })
                    }, [ts]), tl = (0, r(682985).O$)(r(205885).e), (0, i.useEffect)(() => {
                        r(22553).z.updateIsOnline(tl)
                    }, [tl]), tc = (0, r(533992).v3)(), td = (0, i.useRef)(), tu = (0, r(83208).X)("opfs_snapshots"), tp = tc.currentUser.id, tf = r(22553).z.isEnabled && tu, (0, i.useEffect)(() => {
                        tf && tp && td.current !== tp && (td.current = tp, r(737096).E.addOwnedTxSessionId(tp, r(941701).transactionQueue.sessionId))
                    }, [tf, tp, tu]), o("query_client", "control"), o("prewarmed_tab_load_sidebar_exp"), o("prefetch_full_screen_view_from_url_v3"), tm = (0, r(533992).v3)(), tv = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = (0, r(328765).S)()) ? void 0 : e.id
                    }, []), th = (0, r(119965).V)(), t_ = (0, r(682985).K8)(() => r(886556).z.getIsInitialized(), []), tS = (0, r(682985).K8)(() => r(886556).z.isAvailableModelsStorePrefetchEnabled(), []), (0, i.useEffect)(() => {
                        th || !t_ || tS && tv && r(295206).P.getData(tm, {
                            spaceId: tv
                        })
                    }, [tm, tv, th, tS, t_]), ty = (0, r(533992).v3)(), (0, i.useEffect)(() => {
                        r(165219).U.setOnQuotaExceededError(function({
                            key: e,
                            size: t,
                            numKeys: a,
                            keysWithSizes: i
                        }) {
                            (0, r(104310).u)({
                                event: {
                                    eventName: "localstorage_quota_exceeded",
                                    eventProperties: {
                                        attempted_key: e,
                                        attempted_key_size: t,
                                        num_keys: a,
                                        keys_with_sizes: i
                                    }
                                }
                            })
                        })
                    }, [ty]), t = "routes_enabled_in_client_route_config_framework", tw = (0, r(533992).v3)(), (0, r(97668).Yb)(async () => {
                        if (!await (0, r(640666).Eo)({
                                trackingType: "performance",
                                cookieService: tw.cookieService
                            }) || (await r(218744).default.waitUntilStatsigReadyAsync(), r(219279).StatsigInitializer.error || !r(219279).StatsigInitializer.isComplete)) return;
                        let e = r(218744).default.getConfig({
                            configName: t,
                            disableExposureLogging: !0
                        });
                        (0, r(826711).sw)(t, e)
                    }, [t, tw]), o("enable_client_route_config_framework"), o("enable_client_route_config_framework_phase_2"), (0, m.jsxs)(m.Fragment, {
                        children: [n().A.isMobile ? (0, m.jsx)(ti, {}) : void 0, !n().A.isMobile && tA.device.isElectron ? (0, m.jsx)(tb, {}) : void 0, tT ? void 0 : (0, m.jsx)(tg, {
                            isLazierAdAnalyticsEnabled: tI
                        })]
                    })
            }

            function tg({
                isLazierAdAnalyticsEnabled: e
            }) {
                var t;
                let a, o, s, l, c, d, p, f, v, g, b, _, S, y, w, A, E, k, T, I, C, L, U, R, N, P, q, F, B, j, K, V, z, H, G, J, X, Y, Z, ee, et, er, ea, es, el, em, ev, eg, eh, eb, e_, eS, ey, ew, eA, eE, ek, eT, eI = (0, r(533992).v3)(),
                    eC = (0, r(80384).kg)();
                return a = (0, r(533992).v3)(), o = (0, i.useCallback)(() => (function(e) {
                        let {
                            AppUpdateStore: t
                        } = e;
                        t.setState({
                            appUpdate: t.state.appUpdate,
                            electronUpdate: {
                                state: "checking"
                            }
                        })
                    })(a), [a]), s = (0, i.useCallback)((e, t) => (function(e, t) {
                        let {
                            AppUpdateStore: r
                        } = t;
                        r.setState({
                            appUpdate: r.state.appUpdate,
                            electronUpdate: {
                                state: "error",
                                error: e
                            }
                        })
                    })(t, a), [a]), l = (0, i.useCallback)(() => (function(e) {
                        let {
                            AppUpdateStore: t
                        } = e;
                        t.setState({
                            appUpdate: t.state.appUpdate,
                            electronUpdate: {
                                state: "no-update",
                                timestamp: Date.now()
                            }
                        })
                    })(a), [a]), c = (0, i.useCallback)((e, t) => (function(e, t) {
                        let {
                            AppUpdateStore: a
                        } = t, i = (0, r(355981).parseVersion)(e.version), n = (0, r(168179).getDesktopVersion)(), o = (0, r(355981).getUpdateType)({
                            currentVersion: n,
                            nextVersion: i,
                            app: "desktop"
                        });
                        a.setState({
                            appUpdate: a.state.appUpdate,
                            electronUpdate: {
                                state: "downloading",
                                type: o,
                                version: i,
                                timestamp: Date.now(),
                                progress: 0
                            }
                        })
                    })(t, a), [a]), d = (0, i.useCallback)((e, t) => (function(e, t) {
                        let {
                            AppUpdateStore: r
                        } = t, a = r.state;
                        a.electronUpdate && "downloading" === a.electronUpdate.state && r.setState({
                            appUpdate: a.appUpdate,
                            electronUpdate: { ...a.electronUpdate,
                                progress: e.transferred / e.total
                            }
                        })
                    })(t, a), [a]), p = (0, i.useCallback)((e, t) => (function(e, t) {
                        let {
                            device: a
                        } = t, {
                            AppUpdateStore: i
                        } = t, n = r(467008).A.get(r(194763).wp), o = e.version;
                        if (n === o)
                            if (a.isMac) {
                                i.setState({
                                    appUpdate: i.state.appUpdate,
                                    electronUpdate: {
                                        state: "ready",
                                        type: r(355981).UpdateType.Major,
                                        version: void 0,
                                        versionCreatedTime: 0
                                    }
                                }), r(647095).ui({
                                    message: (0, m.jsx)(r(109939).sA, {
                                        id: "desktopAppUpdater.moveNotionToApplicationsFolderDialog.prompt",
                                        defaultMessage: "Please move the Notion app into the Applications folder for the auto-updater to work."
                                    }),
                                    showCancel: !1,
                                    keepFocus: !1,
                                    handleCancel: () => r(194763).K0(t),
                                    items: [{
                                        label: (0, m.jsx)(r(109939).sA, {
                                            id: "desktopAppUpdater.moveNotionToApplicationsFolderDialog.dismissButton.label",
                                            defaultMessage: "OK"
                                        }),
                                        onAccept: () => r(194763).K0(t)
                                    }]
                                });
                                return
                            } else r(773352).log({
                                level: "error",
                                from: "AppUpdateListener",
                                type: "electronUpdateFailed",
                                data: {
                                    miscDataToConvertToString: {
                                        previousUpdateReady: n,
                                        nextUpdateReady: o
                                    }
                                }
                            });
                        let s = (0, r(168179).getDesktopVersion)(),
                            l = (0, r(355981).parseVersion)(e.version),
                            c = (0, r(355981).getUpdateType)({
                                currentVersion: s,
                                nextVersion: l,
                                app: "desktop"
                            });
                        i.setState({
                            appUpdate: i.state.appUpdate,
                            electronUpdate: {
                                state: "ready",
                                type: c,
                                version: l,
                                versionCreatedTime: 0
                            }
                        })
                    })(t, a), [a]), f = (0, i.useCallback)(() => (function(e) {
                        let {
                            AppUpdateStore: t
                        } = e;
                        t.state.appUpdate && "ready" === t.state.appUpdate.state || t.setState({
                            electronUpdate: t.state.electronUpdate,
                            appUpdate: {
                                state: "checking"
                            }
                        })
                    })(a), [a]), v = (0, i.useCallback)((e, t) => ed(t, a), [a]), g = (0, i.useCallback)(() => (function(e) {
                        let {
                            AppUpdateStore: t
                        } = e;
                        t.state.appUpdate && "ready" === t.state.appUpdate.state || t.setState({
                            electronUpdate: t.state.electronUpdate,
                            appUpdate: {
                                state: "no-update",
                                timestamp: Date.now()
                            }
                        })
                    })(a), [a]), b = (0, i.useCallback)((e, t) => eu(t, a), [a]), _ = (0, i.useCallback)((e, t) => ep(t, a), [a]), S = (0, i.useCallback)((e, t) => ef(t, a), [a]), y = (0, i.useCallback)(() => (function(e) {
                        let t = e.AppUpdateStore;
                        if (r(205885).A.getState().online && t.isSilentUpdate()) {
                            let a = t.state.appUpdate;
                            r(194763).JG({
                                environment: e,
                                url: window.location.href,
                                version: a.version,
                                versionCreatedTime: a.versionCreatedTime
                            })
                        }
                    })(a), [a]), (0, i.useEffect)(() => {
                        let {
                            device: e
                        } = a;
                        if (e.isElectron) {
                            let e = r(884972).Lz.addListener(p),
                                t = r(884972).Gc.addListener(s),
                                a = r(884972).WV.addListener(o),
                                i = r(884972).L9.addListener(c),
                                n = r(884972).n3.addListener(d),
                                u = r(884972).Sn.addListener(l),
                                m = r(884972).m0.addListener(S),
                                h = r(884972).t0.addListener(v),
                                w = r(884972).nT.addListener(f),
                                A = r(884972).AX.addListener(b),
                                E = r(884972).oF.addListener(y),
                                k = r(884972).IC.addListener(_),
                                T = r(884972).b7.addListener(g);
                            return () => {
                                null == e || e(), null == t || t(), null == a || a(), null == i || i(), null == n || n(), null == u || u(), null == m || m(), null == h || h(), null == w || w(), null == A || A(), null == E || E(), null == k || k(), null == T || T()
                            }
                        }
                    }, [a, f, g, b, v, y, _, S, c, o, s, l, d, p]), (0, i.useEffect)(() => {
                        var e;
                        let t, i, {
                            device: n,
                            mobileNative: o
                        } = a;
                        if (o && o.updateReceiveApiHandlers({
                                appUpdateReady: e => ef(e, a),
                                appUpdateError: e => ed(e, a),
                                appUpdateChecking: f,
                                appUpdateAvailable: e => eu(e, a),
                                appUpdateProgress: e => ep(e, a),
                                appUpdateNotAvailable: g
                            }), e = a, t = r(194763).Cv(), i = r(194763).B0(), (0, r(355981).isEqualVersion)(t, i) || ec({
                                updateType: (0, r(355981).getUpdateType)({
                                    currentVersion: t,
                                    nextVersion: i,
                                    app: "client"
                                }),
                                nextVersion: i,
                                nextVersionCreatedTime: r(194763).bg(),
                                isRollback: !1,
                                environment: e
                            }), n.isMobileNative && o && o.api.openUpdateSettings) {
                            let e = n.osVersion,
                                t = n.isAndroid && (0, r(355981).isLessThanVersion)(e, [7, 0]),
                                i = n.isIOS && (0, r(355981).isLessThanVersion)(e, [17, 0]);
                            (t || i) && function(e) {
                                let {
                                    mobileNative: t
                                } = e;
                                t && r(474329).HQ({
                                    bannerStore: r(465361).A,
                                    id: "PlatformUpdateWarning",
                                    contentKey: "mobile_platform_unsupported",
                                    styleKey: r(909595).q.Red
                                })
                            }(a)
                        }
                    }, [a, f, g]), w = (0, i.useRef)(""), (0, i.useEffect)(() => {
                        let {
                            device: e,
                            mobileNative: t
                        } = a;
                        if (!t && !e.isElectron && !n().A.isAdminMode) {
                            let e = setInterval(async function() {
                                if (r(825244).A.state.isVisible) try {
                                    let e = r(194763).Cv(),
                                        t = await a.api.callApi({
                                            eventName: "getAssetsJsonV2",
                                            environment: a,
                                            data: {
                                                hash: w.current
                                            }
                                        });
                                    if ("success" === t.type) {
                                        let i = t.data;
                                        if (i.version) {
                                            let t = (0, r(355981).parseVersion)(i.version);
                                            t && !(0, r(355981).isEqualVersion)(t, e) && (ef(i, a), en(a) && navigator.serviceWorker.getRegistration().then(e => {
                                                e && e.update()
                                            }));
                                            w.current = i.hash
                                        }
                                    }
                                } catch (e) {}
                            }, 6e4);
                            return () => clearInterval(e)
                        }
                    }, [a]), (0, i.useEffect)(() => {
                        let {
                            device: e,
                            mobileNative: t,
                            AppUpdateStore: i
                        } = a;
                        if (!t && !e.isElectron && !n().A.isAdminMode) {
                            let e = setInterval(function() {
                                let e = i.state.appUpdate;
                                (null == e ? void 0 : e.state) === "ready" && null != e && e.isRollback && !r(825244).A.state.isVisible && r(205885).A.getState().online && window.location.reload()
                            }, 6e5);
                            return () => clearInterval(e)
                        }
                    }, [a]), (0, i.useEffect)(() => {
                        (0, r(755235).So)(() => ({
                            appStart: (0, r(737124).getAppStartTime)(),
                            hookStart: performance.now()
                        }))
                    }, []), A = (0, r(533992).v3)(), E = (0, r(345776).T)(), T = null == (k = (0, r(972740).L)()) ? void 0 : k.id, I = (0, r(668745).ZC)(E), C = (0, r(668745).ZC)(T), L = (0, r(682985).K8)(() => {
                        if (!k) return "";
                        let e = (0, r(203462).zf)(A).getData(A, {
                            spaceId: k.id
                        });
                        return e ? (0, r(381453).Ul)(e.agents.map(e => e.id)).join(",") : ""
                    }, [A, k]), U = (0, r(668745).ZC)(L), (0, i.useEffect)(() => {
                        E && T && (E !== I || T !== C) && (eq(r(915681).A), eW({
                            spaceStore: k,
                            userId: E,
                            environment: A
                        }))
                    }, [A, E, k, I, C, T]), (0, i.useEffect)(() => {
                        k && L !== U && r(252116).G(A, "useLocalSearch")
                    }, [L, A, U, k]), R = (0, r(556583).K)(), N = function() {
                        let e = (0, r(533992).v3)(),
                            {
                                spaceId: t,
                                orderBy: a,
                                limit: i
                            } = (void 0) ? ? {},
                            n = e.currentUser.id,
                            o = n ? (0, r(654725).m)({
                                userId: n,
                                spaceId: t,
                                orderBy: a,
                                limit: i
                            }) : void 0,
                            {
                                value: s
                            } = (0, r(131297).uW)("useOfflinePages", o, {
                                allowError: !0,
                                rowType: r(305232).m
                            });
                        return s
                    }(), (0, i.useEffect)(() => {
                        R && N && (0, r(611918).e)(N)
                    }, [R, N]), P = (0, r(723240).r)(), q = (0, r(556583).y)(), F = (0, r(682985).K8)(() => r(329464).A.state.initialRenderCompleted, []), B = function(e) {
                        let t = (0, r(533992).v3)().currentUser.id,
                            a = t && e ? (0, r(573146).F4)
                        `
				SELECT *
				FROM offline_action
				JOIN offline_page ON offline_action.impacted_page_id = offline_page.id
					AND offline_action.meta_user_id = offline_page.meta_user_id
				WHERE offline_action.meta_user_id = ${t}
					AND offline_page.space_id = ${e}
			`: void 0, {
                            value: i
                        } = (0, r(131297).uW)("useAllOfflineActionsForSpace", a, {
                            allowError: !0,
                            rowType: r(305232).q
                        });
                        return i
                    }(P), j = (0, r(682985).K8)(() => B ? function(e) {
                        let t = new(r(277637)).G(() => new Set);
                        for (let r of e) t.get(r.impacted_page_id).add(r.autosync_type);
                        let a = 0,
                            i = 0,
                            n = 0;
                        for (let e of t.values()) e.has("frecent") ? i++ : e.has("not_autosynced") ? a++ : e.has("created_offline") && n++;
                        return {
                            all_offline_pages: a + i + n,
                            manual_offline_pages: a,
                            autosynced_offline_pages: i,
                            created_offline_offline_pages: n
                        }
                    }(B) : void 0, [B], {
                        equalityFn: r(381453).n4
                    }), K = (0, i.useRef)(!1), V = (0, i.useRef)(!0), (0, i.useEffect)(() => {
                        j && (V.current = !0)
                    }, [j]), (0, i.useEffect)(() => {
                        if (!q || !F || !j) return;
                        let e = () => {
                            (function(e) {
                                let {
                                    counts: t
                                } = e;
                                (0, r(104310).u)({
                                    event: {
                                        eventName: "offline_pages_counts",
                                        eventProperties: t
                                    }
                                })
                            })({
                                counts: j
                            }), V.current = !1
                        };
                        K.current || (e(), K.current = !0);
                        let t = setInterval(() => {
                            V.current && e()
                        }, M);
                        return () => {
                            clearInterval(t)
                        }
                    }, [P, q, F, j]), z = (0, r(533992).v3)(), H = (0, r(723240).r)(), G = (0, r(556583).y)(), J = (0, r(682985).K8)(() => r(329464).A.state.initialRenderCompleted, []), X = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : e.id
                    }, []), (0, i.useEffect)(() => {
                        if (!G || !X || !H || !J) return;
                        let e = z.sqliteConnection;
                        if (!e) return;
                        let t = z.currentUser.id;
                        t && (async () => {
                            var a;
                            ! function(e) {
                                let {
                                    status: t
                                } = e;
                                (0, r(104310).u)({
                                    event: {
                                        eventName: "page_offline_status",
                                        eventProperties: t
                                    }
                                })
                            }({
                                status: {
                                    manual: (a = await O({
                                        connection: e,
                                        userId: t,
                                        spaceId: H,
                                        pageId: X
                                    })).includes("not_autosynced"),
                                    autosynced: a.includes("frecent"),
                                    created_offline: a.includes("created_offline")
                                }
                            })
                        })()
                    }, [z, G, H, X, J]), Y = (0, r(533992).v3)(), Z = (0, r(682985).O$)(r(205885).e), ee = (0, r(345776).T)(), et = (0, r(723240).r)(), (0, i.useEffect)(() => {
                        let e = (0, r(716893).bB)();
                        if (!e || !ee || !et || !Z) return;
                        let t = null,
                            a = new AbortController,
                            i = a.signal,
                            n = () => {
                                e.cleanCacheForUser({
                                    userId: ee,
                                    spaceId: et,
                                    environment: Y,
                                    waitUntilOpts: {
                                        signal: i,
                                        timeout: r(695216).Xb
                                    }
                                }).catch(e => {
                                    r(773352).log({
                                        level: "error",
                                        from: "cleanCachePeriodically",
                                        type: "errorCleaningCache",
                                        error: (0, r(416607).convertErrorToLog)(e)
                                    })
                                }).finally(() => {
                                    i.aborted || (t = setTimeout(() => {
                                        t = null, i.aborted || n()
                                    }, $))
                                })
                            };
                        return n(), () => {
                            a.abort(), t && (clearTimeout(t), t = null)
                        }
                    }, [ee, et, Z, Y]), ea = en(er = (0, r(533992).v3)()), es = function(e) {
                        let t = e.currentUser.isLoggedIn(),
                            {
                                device: r
                            } = e;
                        return "serviceWorker" in navigator && t && r.isBrowser
                    }(er), el = (0, r(83208).X)("disable_service_worker_in_browser"), (0, i.useEffect)(() => {
                        ea && navigator.serviceWorker.register("/sw.js").then(e => {
                            var t;
                            null == (t = e.active) || t.postMessage({
                                type: ei
                            })
                        })
                    }, [ea]), (0, i.useEffect)(() => {
                        es && !ea && eo()
                    }, [es, ea]), (0, i.useEffect)(() => {
                        ea && el && eo()
                    }, [ea, el]), (0, i.useEffect)(() => {
                        if (!ea) return;
                        let e = e => {
                                var t;
                                (null == (t = e.data) ? void 0 : t.type) === "service-worker-fetch-error" && r(773352).log({
                                    level: "error",
                                    from: "useRegisterBrowserServiceWorker",
                                    type: "browserServiceWorkerFetchError",
                                    error: e.data.error
                                })
                            },
                            t = () => {
                                "serviceWorker" in navigator && navigator.serviceWorker.getRegistration().then(e => {
                                    var t;
                                    null == e || null == (t = e.active) || t.postMessage({
                                        type: ei
                                    })
                                })
                            };
                        return "serviceWorker" in navigator && (navigator.serviceWorker.addEventListener("message", e), navigator.serviceWorker.addEventListener("controllerchange", t)), () => {
                            "serviceWorker" in navigator && (navigator.serviceWorker.removeEventListener("message", e), navigator.serviceWorker.removeEventListener("controllerchange", t))
                        }
                    }, [ea]), (0, i.useEffect)(() => {
                        function e(e) {}
                        return window.addEventListener("message", e), () => {
                            window.removeEventListener("message", e)
                        }
                    }, [!1]), em = (0, r(83208).X)("enable_jam_recording_links"), ev = (0, r(815048).fJ)(x, {
                        disabled: !em
                    }), eg = (0, r(682985).K8)(() => r(714498).I.state.recordingLinkId, []), i.useEffect(() => {
                        if (!em) return;
                        let {
                            status: e,
                            value: t
                        } = ev;
                        "resolved" === e && t && !t.isInitialized() && t.initialize({
                            teamId: "b729e17e-7abd-4cc6-a15f-256d0eceb210",
                            openImmediately: eg
                        })
                    }, [ev, eg, em]), eh = (0, r(533992).v3)(), eb = (0, i.useRef)(!1), (0, i.useEffect)(() => {
                        var e;
                        if (eb.current) return;
                        let t = r(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!t) return;
                        eb.current = !0;
                        let a = r(255482).K.get({
                            userId: eh.currentUser.id,
                            key: r(347971).XK
                        });
                        if (!a) return;
                        let i = (0, r(829093).a)(a);
                        if (!i) return void r(255482).K.remove({
                            userId: eh.currentUser.id,
                            key: r(347971).XK
                        });
                        let n = null == (e = t.getSettings()) ? void 0 : e.preferred_meeting_notes_language;
                        if (n) return void(0, r(774094).p)({
                            userId: eh.currentUser.id,
                            from: "useMigrateDictationLanguageOnMount",
                            additionalLogData: {
                                existingUserSettingsLanguage: n,
                                reason: "cleanupAfterMigration"
                            }
                        });
                        let {
                            serverCommitResult: o
                        } = (0, r(377796).createAndCommit)({
                            userAction: "migrateDictationLanguageToUserSettings",
                            environment: eh,
                            cellTarget: "main",
                            canUndo: !1,
                            perform: e => {
                                (0, r(862759).m)({
                                    userSettingsStore: t,
                                    transaction: e,
                                    data: {
                                        preferred_meeting_notes_language: i
                                    }
                                })
                            }
                        });
                        o.then(() => {
                            (0, r(774094).p)({
                                userId: eh.currentUser.id,
                                from: "useMigrateDictationLanguageOnMount",
                                additionalLogData: {
                                    migratedLanguage: i,
                                    reason: "migrationSuccess"
                                }
                            })
                        }).catch(e => {
                            r(773352).log({
                                level: "error",
                                from: "useMigrateDictationLanguageOnMount",
                                type: "migrationFailed",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        userId: eh.currentUser.id,
                                        attemptedLanguage: i
                                    }
                                }
                            })
                        })
                    }, [eh]),
                    function() {
                        let e = (0, r(533992).v3)(),
                            {
                                WasmSqlite: t
                            } = e;
                        (0, i.useEffect)(() => {
                            t && t.waitForInitialize().then(({
                                retryInitializeEnabled: e,
                                retryCount: t
                            }) => {
                                e && (0, r(104310).u)({
                                    event: {
                                        eventName: "sqlite_record_cache.initialize.success",
                                        eventProperties: {
                                            retry_count: t
                                        }
                                    }
                                })
                            }, e => {
                                if (e instanceof r(65364).pm) {
                                    let {
                                        cause: t,
                                        retryCount: a,
                                        retryInitializeEnabled: i
                                    } = e;
                                    (0, r(104310).u)({
                                        event: {
                                            eventName: "sqlite_record_cache.initialize.error",
                                            eventProperties: {
                                                error_name: t instanceof Error ? t.name : "unknown",
                                                error_message: t instanceof Error ? t.message : "unknown",
                                                sqlite_code: (0, r(65364).xY)(t) ? t.debugInfo.sqliteCode : void 0,
                                                retry_initialize_enabled: "boolean" == typeof i ? i : "unknown",
                                                retry_count: a
                                            }
                                        }
                                    })
                                }
                            })
                        }, [t, e])
                    }(), e_ = (0, r(83208).X)("exp_ping_polling"), eS = (0, r(83208).X)("exp_domain_migration_toast"), ey = "https://app.notion.com/exp/ping", ew = (0, i.useRef)(0), eA = (0, i.useRef)(!1), eE = (0, i.useRef)(!1), ek = (0, r(682985).K8)(() => (r(218744).default.getConfig({
                        configName: "exp_ping_polling_config"
                    }).intervalSeconds ? ? 300) * r(695216).TD, []), eT = (0, i.useCallback)(async () => {
                        if (!ey || eA.current) return;
                        let e = r(728372).AppStoreSidebarSpaceStore.state,
                            t = r(728372).AppStoreCurrentUserStore.state,
                            a = null == e ? void 0 : e.id,
                            i = null == e ? void 0 : e.getPlanType(),
                            n = null == t ? void 0 : t.getEmail(),
                            o = n ? (0, r(801109).zN)(n) : void 0;
                        try {
                            let e = await fetch(ey, {
                                method: "GET"
                            });
                            r(773352).log({
                                level: "info",
                                from: "useExpPingPolling",
                                type: "exp_ping_success",
                                data: {
                                    url: ey,
                                    status: e.status,
                                    spaceId: a,
                                    planType: i,
                                    emailDomain: o
                                }
                            }), ew.current = 0, eS && eE.current && (eE.current = !1, eP())
                        } catch (e) {
                            if (r(773352).log({
                                    level: "error",
                                    from: "useExpPingPolling",
                                    type: "exp_ping_error",
                                    error: (0, r(416607).convertErrorToLog)(e),
                                    data: {
                                        url: ey,
                                        spaceId: a,
                                        planType: i,
                                        emailDomain: o
                                    }
                                }), ew.current += 1, eS && !eE.current && ew.current >= 2) {
                                var s;
                                eE.current = !0, s = new URL(ey).hostname, r(819652).HK({
                                    id: eN,
                                    presentationType: "persistent",
                                    variant: "error",
                                    title: r(962299).A.getIntl().formatMessage({
                                        id: "useExpPingPolling.domainMigrationToast.title",
                                        defaultMessage: "Unable to reach {domain}"
                                    }, {
                                        domain: s
                                    }),
                                    message: r(962299).A.getIntl().formatMessage({
                                        id: "useExpPingPolling.domainMigrationToast.message",
                                        defaultMessage: "Notion will be migrating to {domain} soon. Please ask your IT administrator to allow access to this domain."
                                    }, {
                                        domain: s
                                    }),
                                    onUserDismiss: () => {
                                        eA.current = !0, eE.current = !1
                                    }
                                })
                            }
                        }
                    }, [ey, eS]), (0, i.useEffect)(() => {
                        eS || eP()
                    }, [eS]), (0, i.useEffect)(() => {
                        if (!e_ || !ey) return;
                        let e = () => {
                            ("u" < typeof document || "visible" === document.visibilityState) && eT()
                        };
                        e();
                        let t = window.setInterval(e, ek);
                        return () => {
                            window.clearInterval(t)
                        }
                    }, [e_, ey, eT, ek]), (0, r(383953).w)(() => {
                        e && r(884353).hR({
                            device: eI.device,
                            config: n().A,
                            cookieService: eI.cookieService
                        })
                    }), (0, m.jsxs)(m.Fragment, {
                        children: [!n().A.isMobile && eI.device.isElectron ? (0, m.jsxs)(m.Fragment, {
                            children: [(0, m.jsx)(t_, {}), (0, m.jsx)(W, {}), (0, m.jsx)(tk, {
                                dependency: tw,
                                hook: ({
                                    useCalendarMeetingNotificationScheduler: e
                                }) => e
                            })]
                        }) : void 0, n().A.isMobile ? void 0 : (0, m.jsx)(u, {}), !n().A.isMobile && eC ? (0, m.jsx)(tS, {}) : void 0, n().A.isMobile || null != (t = eI.mobileNative) && t.supportsNativeHomeOnPhone() ? void 0 : (0, m.jsx)(tk, {
                            dependency: r(496088).W,
                            hook: ({
                                useCacheSidebarImages: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: r(496088).W,
                            hook: ({
                                useFetchImportantPagesAfterSqliteCorruptionRecovery: e
                            }) => e
                        }), n().A.isMobile ? void 0 : (0, m.jsx)(h, {}), (0, m.jsx)(th, {}), (0, m.jsx)(Q, {}), (0, m.jsx)(D, {}), (0, m.jsx)(tk, {
                            dependency: tE,
                            hook: ({
                                useRecentEventsListener: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: tm,
                            hook: ({
                                useReactiveMessageEventListener: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: ty,
                            hook: ({
                                useMeetingKeywordToast: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: r(496088).W,
                            hook: ({
                                useUpdateAutosyncedPages: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: r(496088).W,
                            hook: ({
                                useRefetchOfflinePages: e
                            }) => e
                        }), (0, m.jsx)(tk, {
                            dependency: tA,
                            hook: ({
                                useUserLifecycleProfile: e
                            }) => e
                        })]
                    })
            }

            function th() {
                return (0, r(556583).y)() ? (0, m.jsx)(r(337336).K, {
                    from: "OfflineSyncListeners",
                    fallback: () => null,
                    children: (0, m.jsx)(tk, {
                        dependency: r(496088).W,
                        hook: ({
                            usePageSubscriptionManager: e
                        }) => e
                    })
                }) : null
            }

            function tb() {
                return ! function() {
                    let e = (0, r(533992).v3)(),
                        t = (0, r(109939).tz)(),
                        a = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore);
                    ! function(e) {
                        let {
                            navigate: t
                        } = (0, i.useContext)(r(44894).E), a = (0, r(83208).X)("desktop_navigation_interceptor");
                        (0, i.useEffect)(() => {
                            if (!e.device.isElectron || !a) return;
                            if (!("navigation" in window)) return void r(773352).log({
                                level: "info",
                                from: "navigationInterceptor",
                                type: "navigationApiNotSupported"
                            });
                            let i = a => {
                                let i = new URL(a.destination.url),
                                    n = new URL(window.location.href);
                                !a.userInitiated || !a.canIntercept || i.origin !== n.origin || a.hashChange || a.destination.sameDocument || a.downloadRequest || a.formData || a.intercept({
                                    handler: () => {
                                        try {
                                            t({
                                                environment: e,
                                                url: a.destination.url
                                            }), r(773352).log({
                                                level: "debug",
                                                from: "navigationInterceptor",
                                                type: "navigationIntercepted",
                                                data: {
                                                    miscDataToConvertToString: {
                                                        fromUrl: n.href,
                                                        toUrl: a.destination.url
                                                    }
                                                }
                                            })
                                        } catch (e) {
                                            throw r(773352).log({
                                                level: "error",
                                                from: "navigationInterceptor",
                                                type: "navigationInterceptionError",
                                                error: (0, r(416607).convertErrorToLog)(e),
                                                data: {
                                                    miscDataToConvertToString: {
                                                        fromUrl: n.href,
                                                        toUrl: a.destination.url
                                                    }
                                                }
                                            }), e
                                        }
                                    }
                                })
                            };
                            return window.navigation.addEventListener("navigate", i), r(773352).log({
                                level: "info",
                                from: "navigationInterceptor",
                                type: "navigationInterceptorInitialized"
                            }), () => {
                                window.navigation.removeEventListener("navigate", i)
                            }
                        }, [e, a, t])
                    }(e);
                    let o = (0, r(853284).U)(),
                        l = (0, r(682985).K8)(() => r(898735).A.state.tabs, []),
                        c = (0, r(682985).K8)(() => ({
                            observedWidth: r(984858).sidebarSizeObserver.rect.state.width,
                            targetWidth: r(984858).sidebarWidthStore.state,
                            isExpanded: r(984858).sidebarExpandedStore.state,
                            resizing: r(984858).sidebarResizingStore.state,
                            isMouseEntered: r(984858).sidebarMouseEnteredStore.state
                        }), []),
                        d = (0, r(682985).K8)(() => r(75170).A.state.open, []),
                        u = (0, r(682985).K8)(() => r(263863).I.state.open, []),
                        p = (0, r(682985).K8)(() => r(898735).A.state.isActiveTab, []),
                        f = (0, r(682985).K8)(() => "blank" === e.RouterStore.state.route.name, [e.RouterStore]),
                        [m, v] = (0, i.useState)(!1),
                        g = e.currentUser.id,
                        h = e.currentUser.isLoggedIn(),
                        b = (0, r(682985).K8)(() => {
                            if (a && o) return (0, r(742197).G)(e, a)
                        }, [e, a, o]),
                        _ = (0, r(682985).K8)(() => {
                            if (a && o) return a.getIcon()
                        }, [a, o]),
                        S = (0, r(682985).K8)(() => r(995735).B.getUnreadMentionsCountForOtherSpaces() > 0, []),
                        [y, w] = (0, i.useState)(void 0),
                        A = (0, r(355981).formatVersion)((0, r(884972).B7)()),
                        E = (0, r(682985).O$)((0, r(846044).e)(e));
                    (0, i.useEffect)(() => {
                        let t = !1;
                        return async function() {
                            if (!_) return w(void 0);
                            try {
                                let a = (0, r(578387).ih)({
                                        environment: e,
                                        state: {
                                            icon: _
                                        }
                                    }),
                                    i = await (0, r(578387).kL)({
                                        environment: e,
                                        iconInfo: a,
                                        size: 128
                                    });
                                t || w(i || void 0)
                            } catch (e) {
                                t || w(void 0)
                            }
                        }(), () => {
                            t = !0
                        }
                    }, [e, _]), (0, i.useEffect)(() => {
                        p && m && r(884972).uY.set({
                            isLoggedIn: h,
                            shouldShowSidebar: E,
                            workspaceName: b,
                            workspaceIcon: y,
                            isWorkspaceSwitcherInHeaderEnabled: o,
                            hasUnreadNotificationsInOtherWorkspaces: S,
                            ...c
                        })
                    }, [c, h, p, m, E, b, y, o, S]), (0, i.useEffect)(() => {
                        p && (0, r(418108).N)()
                    }, [p]);
                    let k = (0, r(682985).K8)(() => {
                        var e, t;
                        let a = (null == (e = r(585823).Ay.state.rootBlock) ? void 0 : e.getType()) === "transcription" ? null == (t = r(585823).Ay.state.rootBlock) ? void 0 : t.pointer : void 0;
                        return a ? [{
                            type: "transcription",
                            pointer: a
                        }] : []
                    }, [], {
                        equalityFn: r(795676).k
                    });
                    (0, i.useEffect)(() => {
                        var e;
                        null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.setActiveBlocks) || e.call(r(775657).electronApi, k)
                    }, [k]);
                    let T = (0, r(682985).O$)(r(585823).gZ);
                    (0, i.useEffect)(() => {
                        var e;
                        null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.setIsRecording ? r(775657).electronApi.setIsRecording(T) : null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.setIsMediaActive) || e.call(r(775657).electronApi, T)
                    }, [T]), (0, i.useEffect)(() => {
                        let e;
                        e = h ? c.isExpanded ? "expanded" : "collapsed" : "disabled", r(884972).Oq.set(e)
                    }, [c.isExpanded, h]);
                    let I = (0, r(682985).K8)(() => {
                        var e, t, i;
                        return {
                            currentUserId: null == (e = r(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id,
                            currentUserEmail: null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail(),
                            currentSpaceId: null == a ? void 0 : a.getSpaceId(),
                            currentPageId: null == (i = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : i.id
                        }
                    }, [a]);
                    (0, i.useEffect)(() => {
                        var e;
                        null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.setAppStoreState) || e.call(r(775657).electronApi, I)
                    }, [I]);
                    let C = (0, r(682985).K8)(() => {
                        var t;
                        return !!(null == (t = r(584257).A.state.preferences) ? void 0 : t.isZenModeEnabled) && (0, r(348295).$)(e).state && "page" === e.RouterStore.state.route.name
                    }, [e]);
                    (0, i.useLayoutEffect)(() => {
                        var e;
                        null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.setZenMode) || e.call(r(775657).electronApi, C)
                    }, [C]), (0, i.useEffect)(() => {
                        p || r(200083).A.setKeyboardMode(!1)
                    }, [p]);
                    let L = (0, i.useCallback)((e, t) => {
                        t.forEach(e => {
                            (0, r(104310).u)({
                                event: e
                            })
                        })
                    }, []);
                    (0, i.useEffect)(() => r(884972).HT.addListener(L), [L]);
                    let U = (0, i.useCallback)((e, t) => {
                            f || (t && r(572792).D.setState({
                                startTime: s().default.mark("tab_switch_render").startTime
                            }), r(898735).A.updateIsActive(t))
                        }, [f]),
                        R = (0, r(682985).K8)(() => r(218744).default.getConfigKey("tab_unload_threshold", "thresholdInMs"), []);
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("tabUnloadThreshold", R)
                    }, [R]);
                    let N = (0, r(682985).K8)(() => "on" === r(218744).default.getEligibleGroup({
                        experimentId: "desktop_unload_tabs_before_refresh",
                        defaultGroup: "control",
                        enableEventTrailLogging: !0
                    }), []);
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("shouldUnloadTabsBeforeRefresh", N)
                    }, [N]);
                    let P = (0, r(83208).X)("prewarmed_tab_disable_throttling");
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("isPrewarmedTabThrottlingEnabled", !P)
                    }, [P]);
                    let D = "on" === (0, r(604306).r)("prewarmed_tab_load_sidebar_exp", {
                            enableEventTrailLogging: !0
                        }),
                        x = (0, r(83208).X)("prewarmed_tab_hidden_behind", {
                            disableExposureLogging: !D,
                            enableEventTrailLogging: !0
                        }),
                        M = D && x;
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("isPrewarmedTabHiddenBehindEnabled", M)
                    }, [M]);
                    let O = (0, r(83208).X)("desktop_mac_catap_system_audio");
                    (0, i.useEffect)(() => {
                        if (g && e.device.isElectron) {
                            var t, a;
                            null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.coreAudioTap) || null == (a = t.reportGateValue) || a.call(t, {
                                userId: g,
                                gateEnabled: O
                            })
                        }
                    }, [g, e.device.isElectron, O]), (0, i.useEffect)(() => {
                        var e;
                        if (f) return;
                        let t = function() {
                            for (let [e, t] of (0, r(722371).WP)(eT)) eI.has(e) || eI.set(e, t);
                            return () => {
                                for (let e of (0, r(722371).objectKeys)(eT)) eI.delete(e)
                            }
                        }();
                        eE().then(e => {
                            e && ek().f.setTabStates(e)
                        });
                        let a = null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.addUnloadTabHandler) ? void 0 : e.call(r(775657).electronApi, eC);
                        return () => {
                            t(), null == a || a()
                        }
                    }, [f]), (0, i.useEffect)(() => {
                        var e;
                        return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.addGetClientStateHandler) ? void 0 : e.call(r(775657).electronApi, eU)
                    }, []), (0, i.useEffect)(() => {
                        var t, a;
                        return t = async t => {
                            switch (t.action) {
                                case "refresh_tab":
                                case "close_tab":
                                case "window_close":
                                case "app_quit":
                                case "unload_tab":
                                    {
                                        let t = r(585823).ei.state;
                                        if (r(585823).gZ.state && null != t && t.isTranscriptionBlock()) {
                                            let a = await r(785576).w.load();
                                            await a.stopTranscription({
                                                environment: e,
                                                blockStore: t,
                                                from: "stop_transcription_on_tab_action",
                                                disableSummarization: !0,
                                                skipEnsureTranscriptionIsInActive: !0,
                                                queuePauseTranscriptionCheckTaskImmediately: !0
                                            })
                                        }
                                        break
                                    }
                                case "hide_window_on_close":
                                    {
                                        let t = r(585823).ei.state;
                                        if (r(585823).gZ.state && null != t && t.isTranscriptionBlock()) {
                                            let a = await r(785576).w.load();
                                            await a.pauseTranscription({
                                                environment: e,
                                                blockStore: t,
                                                shouldStopDictation: !0,
                                                from: "pause_transcription_before_hide_window_on_close"
                                            })
                                        }
                                        break
                                    }
                                default:
                                    (0, r(722371).HB)(t.action)
                            }
                            return [!0]
                        }, null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (a = r(775657).electronApi.addAttemptPreTabActionCleanupHandler) ? void 0 : a.call(r(775657).electronApi, t)
                    }, [e]),
                    function() {
                        let {
                            tabStates: e,
                            isFrameReady: t
                        } = (0, r(682985).O$)(ek().f), a = (0, r(533992).v3)();
                        (0, i.useEffect)(() => {
                            if (e && t)
                                for (let [e, t] of eI.entries()) try {
                                    let r = t.restoreState,
                                        i = ek().f.getStateForProvider(e);
                                    if (!r || !i) continue;
                                    r({
                                        environment: a,
                                        savedState: i
                                    }) && ek().f.consumeState(e)
                                } catch (e) {}
                        }, [e, t, a])
                    }();
                    let q = (0, i.useCallback)((e, t) => {
                            !async function() {
                                let e = await r(10386).i.load();
                                await e.updateActiveBlocks(t)
                            }()
                        }, []),
                        W = (0, r(682985).K8)(() => {
                            let {
                                tabs: e
                            } = r(898735).A.state;
                            return e.flatMap(e => e.activeBlocks ? ? [])
                        }, []);
                    (0, i.useEffect)(() => {
                        W.length > 0 && q(void 0, W)
                    }, [q, W]), (0, i.useEffect)(() => {
                        if (void 0 === p || f) return;
                        let e = () => {
                            r(825244).A.update(e => ({ ...e,
                                isVisible: !document.hidden && p
                            }))
                        };
                        return e(), p && r(329464).A.state.initialRenderCompleted && (s().default.measure("tab_switch_render", {
                            data: {
                                was_loaded: !0
                            }
                        }), r(572792).D.reset()), document.addEventListener("visibilitychange", e), () => {
                            document.removeEventListener("visibilitychange", e)
                        }
                    }, [p, f, e]), (0, i.useEffect)(() => {
                        if (f) return;
                        r(884972).Wt.get().then(e => {
                            r(898735).A.updateIsActive(e), e && "new_inactive_tab" === (0, r(259533).getDesktopLoadOrigin)() && r(572792).D.setState({
                                startTime: s().default.mark("tab_switch_render").startTime
                            })
                        });
                        let t = r(884972).Wt.addListener(U),
                            a = r(884972).eV.addListener(() => {
                                (0, r(161289).jc)(e)
                            }),
                            i = () => {
                                document.hidden || (0, r(161289).jc)(e)
                            };
                        return document.addEventListener("visibilitychange", i), () => {
                            null == t || t(), null == a || a(), document.removeEventListener("visibilitychange", i)
                        }
                    }, [U, f, e]);
                    let F = (0, i.useCallback)((e, t) => {
                        void 0 === t.isShowingTabBar && (t.isShowingTabBar = !0), r(584257).A.setState(t)
                    }, []);
                    (0, i.useEffect)(() => {
                        var e;
                        return null == (e = r(884972).Zq.get()) || e.then(e => {
                            r(584257).A.setState(e)
                        }), r(884972).Zq.addListener(F)
                    }, [F]);
                    let B = (0, i.useCallback)((e, t) => {
                        r(898735).A.update(e => ({ ...e,
                            tabs: t
                        }))
                    }, []);
                    (0, i.useEffect)(() => r(884972).Hy.addListener(B), [B]);
                    let $ = (0, i.useCallback)((e, t) => {
                        r(898735).A.update(e => ({ ...e,
                            currentTab: t
                        }))
                    }, []);
                    (0, i.useEffect)(() => r(884972).$Q.addListener($), [$]);
                    let j = (0, i.useCallback)((e, t) => {
                        r(898735).A.update(e => {
                            let r = new Set(e.unauthorizedIframeUrls ? ? []);
                            r.add(t);
                            let a = Array.from(r);
                            return { ...e,
                                unauthorizedIframeUrls: a
                            }
                        })
                    }, []);
                    (0, i.useEffect)(() => r(884972).Bl.addListener(j), [j]);
                    let K = (0, i.useCallback)(t => {
                        (0, r(16822).h)({
                            environment: e,
                            isExpanded: !c.isExpanded,
                            from: "electron_listener",
                            saveDetailsSidebarPreference: !1
                        })
                    }, [e, c.isExpanded]);
                    (0, i.useEffect)(() => r(884972).Oq.addToggleListener(K), [K]);
                    let V = (0, i.useCallback)((e, t) => {
                        t ? (0, r(868892).h)({
                            fromElectron: !0
                        }) : (0, r(713167).V)()
                    }, []);
                    (0, i.useEffect)(() => r(884972).Oq.addSetSidebarOpenListener(V), [V]);
                    let z = (0, i.useCallback)((e, t) => {
                            r(984858).sidebarExpandedStore.setState(t.isExpanded), r(984858).sidebarWidthStore.setState(t.targetWidth)
                        }, []),
                        H = (0, i.useCallback)(() => {
                            o && r(2907).V.setState({ ...r(2907).V.state,
                                open: !r(2907).V.state.open
                            })
                        }, [o]),
                        G = (0, i.useCallback)((e, t) => {
                            let a;
                            r(75170).A.update(e => (a = !e.open, { ...e,
                                open: a,
                                buttonBounds: t
                            })), a && u && r(263863).I.update(e => ({ ...e,
                                open: !1
                            }))
                        }, [u]);
                    (0, i.useEffect)(() => r(884972).uS.setTabSpacesMenuOpenState(d), [d]), (0, i.useEffect)(() => {
                        if (r(884972).d0.addToggleListener) return r(884972).d0.addToggleListener(H)
                    }, [H]), (0, i.useEffect)(() => r(884972).uS.addToggleMenuListener(G), [G]);
                    let J = (0, i.useCallback)((e, t) => {
                        r(75170).A.update(e => ({ ...e,
                            tabSpacesState: { ...e.tabSpacesState,
                                ...t
                            }
                        }))
                    }, []);
                    (0, i.useEffect)(() => r(884972).uS.addListener(J), [J]);
                    let X = (0, i.useCallback)((e, t) => {
                        r(75170).A.update(e => ({ ...e,
                            open: !0,
                            createOrUpdateMenuState: { ...t,
                                action: "create"
                            }
                        }))
                    }, []);
                    (0, i.useEffect)(() => r(884972).uS.addOpenCreateMenuListener(X), [X]), (0, i.useEffect)(() => {
                        !p && d && r(75170).A.update(e => ({ ...e,
                            open: !1
                        }))
                    }, [p, d]), (0, i.useEffect)(() => {
                        r(75170).A.update(e => ({ ...e,
                            open: !1
                        }))
                    }, [c.isExpanded]), (0, i.useEffect)(() => {
                        !p && u && r(263863).I.update(e => ({ ...e,
                            open: !1
                        }))
                    }, [p, u]);
                    let Q = (0, i.useCallback)((e, t) => {
                        r(436555).D6({
                            label: t
                        })
                    }, []);
                    (0, i.useEffect)(() => r(884972).uS.addSnackBarMessageListener(Q), [Q]), (0, i.useEffect)(() => (f || r(884972).uY.get().then(e => {
                        e && (r(984858).sidebarExpandedStore.setState(e.isExpanded), r(984858).sidebarWidthStore.setState(e.targetWidth), r(984858).sidebarSizeObserver.rect.update(t => ({ ...t,
                            width: e.observedWidth
                        }))), v(!0)
                    }), r(884972).uY.addListener(z)), [z, f]), (0, i.useEffect)(() => {
                        !async function() {
                            if (void 0 === A) return;
                            let t = await e.api.callApi({
                                eventName: "isDesktopVersionCompatible",
                                environment: e,
                                data: {
                                    desktopVersion: A
                                }
                            });
                            "success" !== t.type || t.data.compatible || window.location.replace(n().A.domainBaseUrl + t.data.redirect)
                        }()
                    }, [A, e]), (0, i.useEffect)(() => r(884972).Er.addListener((t, a) => {
                        r(781945).N6(e, a)
                    }), [e]);
                    let Y = (0, r(682985).K8)(() => {
                        let e = (0, r(715689).getUserControlledCloseConfirmationDialogReason)();
                        if (e) return {
                            analytics_id: e,
                            localized_message: t.formatMessage(eA[e])
                        }
                    }, [t]);
                    (0, i.useEffect)(() => {
                        var e;
                        null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.setCloseConfirmationDialogReason) || e.call(r(775657).electronApi, Y)
                    }, [Y]);
                    let Z = (0, i.useCallback)((t, i) => {
                        if (!a) return;
                        let n = r(970831).B.createChildStore(a, i.pointer);
                        (0, r(545586).navigateToBlock)({
                            environment: e,
                            store: n,
                            pageVisitSource: i.source
                        })
                    }, [e, a]);
                    (0, i.useEffect)(() => r(884972).uK.addListener(Z), [Z]);
                    let ee = (0, i.useCallback)((t, a) => {
                        r(918150).v[a.toastId](e, a)
                    }, [e]);
                    (0, i.useEffect)(() => null === r(884972).Iz || void 0 === r(884972).Iz ? void 0 : r(884972).Iz.addListener(ee), [ee]);
                    let et = (0, i.useCallback)((e, t) => {
                        r(819652).UW({
                            id: t.id
                        })
                    }, []);
                    (0, i.useEffect)(() => null === r(884972).UW || void 0 === r(884972).UW ? void 0 : r(884972).UW.addListener(et), [et]);
                    let er = (0, i.useCallback)((t, a) => {
                        "back" === a ? (0, r(707603).a)(e) : "forward" === a && (0, r(295918).s)(e)
                    }, [e]);
                    (0, i.useEffect)(() => r(884972).M.addListener(er), [er]);
                    let ea = (0, i.useCallback)((t, a) => {
                        (0, r(152994).Y)(e, a)
                    }, [e]);
                    (0, i.useEffect)(() => r(884972).fK.addListener(ea), [ea]);
                    let ei = (0, i.useCallback)((e, t) => {
                        r(263863).I.setState({
                            direction: t,
                            open: !0
                        }), d && r(75170).A.update(e => ({ ...e,
                            open: !1
                        }))
                    }, [d]);
                    (0, i.useEffect)(() => r(884972)._$.addListener(ei), [ei]);
                    let en = (0, i.useCallback)((e, t, i) => {
                        let n = r(898735).A.state.tabs.find(e => e.id === t),
                            o = r(164177).j.state.open;
                        if (!n || !n.pagePointer || !a || o) return;
                        let s = r(970831).B.createChildStore(a, n.pagePointer);
                        r(84300).A.setState({
                            type: "tab",
                            store: s,
                            domRect: { ...i,
                                y: 0,
                                height: 0
                            },
                            tabId: t,
                            spaceStore: a
                        })
                    }, [a]);
                    (0, i.useEffect)(() => r(884972).nP.addListener(en), [en]);
                    let eo = (0, i.useCallback)(e => {
                        r(84300).A.setState(void 0)
                    }, []);
                    (0, i.useEffect)(() => r(884972).M9.addListener(eo), [eo]);
                    let es = (0, r(682985).K8)(() => {
                        var e;
                        return (null == (e = r(84300).A.state) ? void 0 : e.type) === "tab" ? r(84300).A.state.tabId : void 0
                    }, []);
                    (0, i.useEffect)(() => {
                        C && es && r(84300).A.setState(void 0)
                    }, [es, C]), (0, i.useEffect)(() => {
                        !p && es && r(84300).A.setState(void 0)
                    }, [es, p]), (0, i.useEffect)(() => {
                        let e = l.find(e => e.id === es);
                        es && !e && r(84300).A.setState(void 0)
                    }, [es, l]);
                    let el = (0, i.useCallback)((t, r) => {
                        eR({
                            environment: e,
                            notification: r
                        })
                    }, [e]);
                    (0, i.useEffect)(() => r(884972).in.addListener(el), [el]);
                    let ec = (0, i.useCallback)((t, a) => {
                        let i = (null == a ? void 0 : a.type) || "audioProcessDetection";
                        switch (i) {
                            case "audioProcessDetection":
                                r(380762).AC(e, !0, "notification");
                                break;
                            case "upcomingMeeting":
                                r(380762).Tj(e, !0, "notification");
                                break;
                            case "incrementDismissCount":
                                ! function(e) {
                                    let t = r(728372).AppStoreSidebarSpaceViewStore.state;
                                    if (!t) return;
                                    let a = t.getSpaceId(),
                                        i = (0, r(948561).w)() + 1;
                                    (0, r(377796).createAndCommit)({
                                        userAction: "meetingNotificationDismissCountHelpers.incrementDismissCount",
                                        environment: e,
                                        canUndo: !1,
                                        cellTarget: a ? {
                                            spaceWithId: a
                                        } : void 0,
                                        perform: e => {
                                            (0, r(380762).AG)(t, e, {
                                                ai_meeting_notes_notification_dismiss_count: i
                                            })
                                        }
                                    })
                                }(e);
                                break;
                            case "resetDismissCount":
                                ! function(e) {
                                    let t = r(728372).AppStoreSidebarSpaceViewStore.state;
                                    if (!t) return;
                                    let a = t.getSpaceId();
                                    (0, r(377796).createAndCommit)({
                                        userAction: "meetingNotificationDismissCountHelpers.resetDismissCount",
                                        environment: e,
                                        canUndo: !1,
                                        cellTarget: a ? {
                                            spaceWithId: a
                                        } : void 0,
                                        perform: e => {
                                            (0, r(380762).AG)(t, e, {
                                                ai_meeting_notes_notification_dismiss_count: 0
                                            })
                                        }
                                    })
                                }(e);
                                break;
                            case "umnDismissedCooldown":
                                r(212680).i.load().then(e => e.setAudioDetectionCooldown());
                                break;
                            case "optOutAction":
                                a && "optOutAction" === a.type && (0, r(104310).u)({
                                    event: {
                                        eventName: "ai_meeting_notes_notification_opt_out_action",
                                        eventProperties: {
                                            action: a.action,
                                            dismiss_count: a.dismissCount,
                                            surface: "desktop"
                                        }
                                    }
                                });
                                break;
                            default:
                                (0, r(722371).HB)(i)
                        }
                    }, [e]);
                    (0, i.useEffect)(() => r(884972).gQ.addListener(ec), [ec]);
                    let ed = (0, r(682985).K8)(() => "use_heuristic" === r(218744).default.getEligibleGroup({
                        experimentId: "desktop_prewarmed_tab_heuristic",
                        defaultGroup: "no_heuristic",
                        enableEventTrailLogging: !0
                    }), []);
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("shouldUsePrewarmedTabHeuristic", ed)
                    }, [ed]);
                    let eu = (0, r(682985).K8)(() => {
                        switch (r(218744).default.getEligibleGroup({
                            experimentId: "desktop_defer_tab_prewarming",
                            defaultGroup: "control",
                            enableEventTrailLogging: !0
                        })) {
                            case "0s":
                                return 0;
                            case "1s":
                                return 1e3;
                            case "3s":
                                return 3e3;
                            case "5s":
                                return 5e3;
                            default:
                                return
                        }
                    }, []);
                    (0, i.useEffect)(() => {
                        r(884972).Zq.setPreference("deferredPrewarmingDelayMs", eu)
                    }, [eu])
                }(), null
            }

            function t_() {
                let e = (0, r(682985).K8)(() => r(898735).A.state.isActiveTab, []);
                return (0, m.jsx)(L, {
                    isActiveTab: e ? ? !1
                })
            }

            function tS() {
                return (0, r(80384).a1)(), null
            }
            let ty = new(r(815048)).O2("useMeetingKeywordToast", () => r.e(28156).then(r.bind(r, 194852))),
                tw = new(r(815048)).O2("useCalendarMeetingNotificationScheduler", () => Promise.all([r.e(9773), r.e(55373), r.e(36192), r.e(40537), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(5721), r.e(57688), r.e(64696), r.e(87971), r.e(79349), r.e(76135), r.e(61842), r.e(71136), r.e(86102), r.e(31034)]).then(r.bind(r, 200522))),
                tA = new(r(815048)).O2("useUserLifecycleProfile", () => r.e(2302).then(r.bind(r, 611382))),
                tE = new(r(815048)).O2("useRecentEventsListener", () => r.e(88738).then(r.bind(r, 400063)));

            function tk(e) {
                let {
                    value: t
                } = (0, r(815048).fJ)(e.dependency);
                return t ? (0, m.jsx)(tT, {
                    hook: e.hook(t)
                }) : null
            }

            function tT(e) {
                return e.hook(), null
            }
        },
        171929: (e, t, r) => {
            r.d(t, {
                G: () => a
            });

            function a({
                historyId: e,
                currentUserId: t
            }) {
                return r(255482).K.get({
                    userId: t,
                    key: e
                })
            }
        },
        187649: (e, t, r) => {
            let a, i;

            function n(e) {
                a = e
            }
            async function o() {
                return i || (a ? i = await a() : void 0)
            }
            r.d(t, {
                Q: () => n,
                z: () => o
            })
        },
        212680: (e, t, r) => {
            r.d(t, {
                i: () => a
            });
            let a = new(r(815048)).O2("transcriptionNotificationActions", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 207108)))
        },
        229888: (e, t, r) => {
            r.d(t, {
                L: () => a
            });

            function a() {
                let e = (0, r(533992).v3)();
                return (0, r(682985).K8)(() => !!r(415039).E.getState().botId && (e.device.isElectron && !r(218744).default.checkGate({
                    gateName: "meeting_notification_web_locks_leader_election"
                }) ? r(898735).A.state.isActiveTab ? ? !1 : r(63528).l.getState().hasWebLock), [e])
            }
        },
        268988: (e, t, r) => {
            r.d(t, {
                A: () => c
            }), r(581454);
            var a = r(296540),
                i = r(474848);
            let n = {
                style0: {
                    width: "80%",
                    paddingInlineStart: 14
                },
                style1: {
                    float: "inline-end",
                    marginInlineStart: -8,
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    color: r(632079).Tj.blue.text.accentPrimary
                }
            };

            function o({
                hasDismissButton: e,
                onDismiss: t
            }) {
                let s = (0, r(533992).v3)(),
                    c = (0, r(109939).tz)(),
                    [d, u] = (0, a.useState)(!1);
                (0, a.useEffect)(() => () => {
                    e || d && r(897306).wB()
                }, [c, d, e]);
                let p = [{
                    key: "trackingTypes",
                    render: e => (0, i.jsx)(r(844565).A, { ...e,
                        topBorder: 0 !== e.index
                    }),
                    items: r(153814).dc.map(e => ({
                        key: e,
                        render: t => (0, i.jsx)(l, {
                            menuListItemProps: t,
                            trackingType: e,
                            setShowReloadOnMenuClose: u,
                            isNativeiOSApp: s.device.isMobileNative && s.device.isIOS
                        }),
                        action: () => r(897306).Ef(s, e)
                    }))
                }];
                return (0, i.jsxs)(r(747369).A, {
                    className: r(828432).Qm5,
                    menuType: r(649476).gu.Popup,
                    width: 260,
                    children: [(0, i.jsx)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            paddingTop: 4 * !!e
                        },
                        children: e ? (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(r(324489).V, {
                                isSmall: !0,
                                isMultiline: !0,
                                style: n.style0,
                                children: (0, i.jsx)("b", {
                                    children: (0, i.jsx)(r(109939).sA, { ...r(333318).LS.customizeCookiesHeader
                                    })
                                })
                            }), (0, i.jsx)(r(988022).p, {
                                style: n.style1,
                                onClick: () => {
                                    r(897306).gz(s, r(154431).A.getPermission()), t && t()
                                },
                                children: (0, i.jsx)(r(109939).sA, { ...r(333318).LS.cookieDismissButtonLabel
                                })
                            })]
                        }) : void 0
                    }), (0, i.jsx)(r(558045).A, {
                        type: r(558045).O.Vertical,
                        initialFocus: void 0,
                        sections: p
                    })]
                })
            }
            let s = {
                style1: {
                    marginInlineEnd: 0
                },
                style2: {
                    color: r(632079).Tj.red.text.accentPrimary
                },
                style3: {
                    color: r(632079).Tj.text.secondary
                },
                style4: {
                    display: "flex",
                    width: "100%",
                    alignItems: "center",
                    cursor: "pointer"
                }
            };

            function l(e) {
                let {
                    menuListItemProps: t,
                    trackingType: a,
                    setShowReloadOnMenuClose: n,
                    isNativeiOSApp: o
                } = e, {
                    title: l,
                    caption: c,
                    subtitle: d
                } = (0, r(333318).ID)(a, o), [{
                    permission: u
                }] = (0, r(682985).$y)(r(154431).A), p = (0, r(533992).v3)();
                return (0, i.jsx)(r(95582).A, { ...t,
                    title: (0, i.jsx)(r(4458).fI, {
                        alignItems: "center",
                        children: (0, i.jsx)("div", {
                            style: s.style1,
                            children: (0, i.jsx)(r(109939).sA, { ...l
                            })
                        })
                    }),
                    caption: (0, i.jsxs)("div", {
                        children: [d ? (0, i.jsx)("div", {
                            children: (0, i.jsx)("span", {
                                style: s.style2,
                                children: (0, i.jsx)(r(109939).sA, { ...d
                                })
                            })
                        }) : void 0, (0, i.jsx)("div", {
                            children: (0, i.jsx)("span", {
                                style: s.style3,
                                children: (0, i.jsx)(r(109939).sA, { ...c
                                })
                            })
                        })]
                    }),
                    shouldWrapCaption: !0,
                    right: (0, i.jsx)("div", {
                        style: s.style4,
                        children: (0, i.jsx)(r(354491).d, {
                            on: u[a],
                            disabled: "necessary" === a,
                            onClick: () => {
                                n(!0), r(897306).Ef(p, a)
                            }
                        })
                    })
                })
            }
            let c = function({
                children: e,
                hasDismissButton: t,
                onDismiss: a
            }) {
                return (0, i.jsx)(r(656252).A, {
                    popupType: r(656252).z.Popup,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "start",
                    content: () => (0, i.jsx)(o, {
                        hasDismissButton: t,
                        onDismiss: a
                    }),
                    children: e
                })
            }
        },
        312819: (e, t, r) => {
            r.r(t), r.d(t, {
                updateConnectionState: () => a
            });

            function a(e) {
                r(205885).A.state.online && e.currentUser.id && r(941701).transactionQueue.unpause()
            }
        },
        328975: (e, t, r) => {
            r.d(t, {
                H: () => a
            });

            function a(e) {
                var t;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.setWindowTitle) || t.call(r(775657).electronApi, e)
            }
        },
        330602: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            let a = r(546605).Store.createValue(!1)
        },
        348295: (e, t, r) => {
            r.d(t, {
                $: () => a
            });
            let a = r(381453).Bj(e => new(r(345426)).ComputedStore(() => {
                let t = r(728372).AppStoreMainEditorCurrentBlockStore.state,
                    a = t && t.isCollectionView(),
                    i = (0, r(548124).getChatPanelState)(e),
                    n = (null == i ? void 0 : i.isOpen) ? ? !1;
                return r(200083).A.state.isKeyboardMode && !r(330602).A.state && !r(11446).A.isActive() && !a && !r(930179).default.state.open && !r(847591).Ay.state.open && !(0, r(659262).y)() && 0 === r(465361).A.state.banners.length && !r(585823).gZ.state && !r(75170).A.state.open && !n
            }, {
                debugName: "appHelpers.shouldHideTopbarStore"
            }))
        },
        385149: (e, t, r) => {
            r.d(t, {
                H: () => a
            });

            function a() {
                let e = r(585823).ei.state;
                if (null != e && e.isTranscriptionBlock()) return e
            }
        },
        389432: (e, t, r) => {
            r.d(t, {
                T: () => i,
                z: () => n
            }), r(944114);
            var a = () => r(255482);

            function i({
                RouterStore: e,
                currentUserId: t
            }) {
                let r = e.state.id;
                a().K.remove({
                    userId: t,
                    key: r
                })
            }

            function n({
                currentUserId: e
            }) {
                let t = `${e||"guest"}:`,
                    r = [];
                for (let i of (a().K.scan((e, a) => {
                        var i;
                        e.startsWith(t) && "object" == typeof(i = a) && null !== i && "scrollTop" in i && "blockIds" in i && "index" in i && r.push(e.slice(t.length))
                    }), r)) a().K.remove({
                    userId: e,
                    key: i
                })
            }
        },
        444989: (e, t, r) => {
            r.d(t, {
                i: () => i
            }), r(296540);
            var a = r(474848);

            function i(e, t) {
                return (0, a.jsx)(r(428217).V, {
                    href: e,
                    children: t
                })
            }
        },
        470604: (e, t, r) => {
            r.d(t, {
                a: () => a
            });
            async function a() {
                return r(775657).electronApi && r(775657).electronApi.isMainTab ? r(775657).electronApi.isMainTab() : !r(775657).electronApi || !r(775657).electronApi.isMainWindow || r(775657).electronApi.isMainWindow()
            }
        },
        491592: (e, t, r) => {
            r.d(t, {
                H: () => a,
                S: () => i
            });
            let a = new(r(815048)).O2("AppComponents", async () => Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(26361), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(96527), r.e(30085), r.e(90109), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(17250), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(55940), r.e(12560), r.e(88268), r.e(12001), r.e(40198), r.e(39726), r.e(31243), r.e(42534), r.e(86662), r.e(14886), r.e(39225), r.e(6212), r.e(2626), r.e(64453), r.e(4779), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(74145), r.e(48860), r.e(75136), r.e(98175), r.e(18682), r.e(79349), r.e(58360), r.e(33162), r.e(82538), r.e(63793), r.e(18881), r.e(62731), r.e(41049), r.e(60262), r.e(72805), r.e(18416), r.e(2276), r.e(30532), r.e(73588), r.e(3723), r.e(91100), r.e(78311), r.e(4287), r.e(9817), r.e(65594), r.e(47302), r.e(91636), r.e(36441), r.e(64049), r.e(75189), r.e(28372), r.e(28663), r.e(47281), r.e(29087), r.e(46350), r.e(75234), r.e(67281), r.e(66200), r.e(52064), r.e(69626), r.e(82816), r.e(2832), r.e(48095), r.e(67098), r.e(35118), r.e(63611), r.e(94849), r.e(75484), r.e(98821), r.e(97711), r.e(89076), r.e(86998), r.e(58889), r.e(22920), r.e(9914), r.e(78257), r.e(84382), r.e(51386), r.e(95150), r.e(10471), r.e(87087), r.e(98419), r.e(11719), r.e(13592), r.e(6743), r.e(5234), r.e(85376), r.e(67252), r.e(42709), r.e(44903), r.e(92181), r.e(7251), r.e(72143), r.e(67612), r.e(53478), r.e(75559), r.e(86793), r.e(34), r.e(54253), r.e(26665), r.e(67984), r.e(605), r.e(75681)]).then(r.bind(r, 584574))),
                i = (0, r(815048)._h)(a, e => e.AppComponents)
        },
        523661: (e, t, r) => {
            r.d(t, {
                v: () => i
            }), r(898992), r(737550);
            let a = {
                zoom: ["us.zoom.xos", "Zoom.exe"],
                safari: ["com.apple.WebKit.GPU"],
                chrome: ["com.google.Chrome.helper", "chrome.exe"],
                teams: ["com.microsoft.teams2", "ms-teams.exe"],
                edge: ["msedge.exe"],
                brave: ["com.brave.Browser.helper", "brave.exe"],
                arc: ["company.thebrowser.browser.helper", "Arc.exe"],
                firefox: ["org.mozilla.firefox", "firefox.exe"],
                slack: ["com.tinyspeck.slackmacgap.helper", "slack.exe"],
                webex: ["com.cisco.webexmeetingsapp", "Webex.exe"],
                atlas: ["com.openai.atlas.web.helper"],
                comet: ["ai.perplexity.comet.helper", "comet.exe"]
            };

            function i(e) {
                for (let t of (0, r(722371).objectKeys)(a))
                    if (a[t].some(t => e.toLowerCase().includes(t.toLowerCase()))) return t
            }
        },
        527391: (e, t, r) => {
            r.d(t, {
                t: () => n
            });
            var a = () => r(546605);
            class i extends a().Store {
                getInitialState() {
                    return {
                        loaded: !1
                    }
                }
                USEWITHCAUTION_markStatsigUserFetched(e) {
                    let {
                        userId: t,
                        spaceId: r,
                        fetched: a
                    } = e;
                    this.setState({
                        loaded: a,
                        userId: t,
                        spaceId: r
                    })
                }
                USEWITHCAUTION_isFetchedForSpaceAndUserId(e) {
                    let {
                        spaceId: t,
                        userId: r
                    } = e;
                    return this.state.loaded && this.state.spaceId === t && this.state.userId === r
                }
            }
            let n = new i;
            (0, r(202146).exposeDebugValue)("statsigUserLoadingStatusStore", n)
        },
        601952: (e, t, r) => {
            function a(e) {
                return r(255482).K.get({
                    userId: e.userId,
                    key: `${e.spaceId}:analytics_session`
                })
            }

            function i(e) {
                let t = e.storedSession ? ? a(e);
                if (!(t && Date.now() - t.lastFocusedTime > r(810452).o)) return t
            }
            r.d(t, {
                C: () => a,
                g: () => i
            })
        },
        625906: (e, t, r) => {
            r.d(t, {
                o: () => a
            });

            function a(e) {
                return e.device.isAndroid && !e.device.isTablet || e.device.isTablet && e.WindowSizeStore.isPortrait()
            }
        },
        627335: (e, t, r) => {
            r.d(t, {
                D: () => a
            });

            function a(e) {
                let {
                    environment: t,
                    transcriptionBlockStore: a,
                    tabType: i,
                    withTextBlock: n
                } = e, o = (0, r(869708).y1)(a, i);
                if (o) return o;
                let s = a.getSpaceId(),
                    {
                        performResult: l
                    } = (0, r(377796).createAndCommit)({
                        userAction: `transcriptionBlockTabActions.getOrCreateTranscriptionTabBlockStore.${i}`,
                        environment: t,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        perform: e => {
                            let o, s = r(124937).Wv({
                                environment: t,
                                type: "text",
                                inMemoryRecordCache: a.inMemoryRecordCache,
                                transaction: e
                            });
                            if ("summary" === i ? r(579695).Ti({
                                    transaction: e,
                                    parentStore: a,
                                    childStore: s
                                }) : r(579695).NI({
                                    transaction: e,
                                    parentStore: a,
                                    childStore: s
                                }), "transcript" === i && n) {
                                let i = r(124937).Wv({
                                    environment: t,
                                    type: "text",
                                    inMemoryRecordCache: a.inMemoryRecordCache,
                                    transaction: e
                                });
                                r(579695).NI({
                                    transaction: e,
                                    parentStore: s,
                                    childStore: i
                                })
                            }
                            return "summary" === i ? o = {
                                transcription_summary_id: s.id
                            } : "transcript" === i ? o = {
                                transcription_transcript_id: s.id
                            } : (0, r(722371).HB)(i), (0, r(715144).z)({
                                transaction: e,
                                stores: [a],
                                update: o
                            }), s
                        },
                        canUndo: !1
                    });
                return l
            }
        },
        659262: (e, t, r) => {
            r.d(t, {
                L: () => i,
                y: () => n
            });
            let a = Number(r(627179).Xb);

            function i() {
                var e, t;
                if (r(205885).A.state.online) {
                    if (null != (e = r(420153).A.state.connectionError) && e.startTime && Date.now() - (null == (t = r(420153).A.state.connectionError) ? void 0 : t.startTime) < a) return;
                    return r(420153).A.state.connectionError
                }
            }

            function n() {
                return !!i()
            }
        },
        675646: (e, t, r) => {
            r.d(t, {
                K: () => a
            });
            async function a() {
                if (!r(775657).electronApi || !r(775657).electronApi.getProcessesAccessingMicrophoneDebouncedWithResult) return r(300441).Q.fail({
                    message: "API not available"
                });
                try {
                    return await r(775657).electronApi.getProcessesAccessingMicrophoneDebouncedWithResult()
                } catch (e) {
                    return r(300441).Q.fail({
                        message: "Failed to get debounced microphone processes",
                        error: e
                    })
                }
            }
        },
        677147: (e, t, r) => {
            let a;

            function i(e) {
                a = e
            }

            function n() {
                return a
            }
            r.d(t, {
                D: () => n,
                g: () => i
            })
        },
        708329: (e, t, r) => {
            r.d(t, {
                n: () => a
            });
            let a = new(r(510969)).A
        },
        715689: (e, t, r) => {
            let a;
            r.r(t), r.d(t, {
                getCloseConfirmationDialogReason: () => o,
                getUserControlledCloseConfirmationDialogReason: () => n,
                setupOnBeforeUnload: () => l,
                showConfirmationDialogEventEmitter: () => i
            }), r(16280);
            let i = new(r(653834)).A;

            function n() {
                let e = o();
                switch (e) {
                    case "have_local_draft_unsaved_changes":
                    case "dictation_in_progress":
                        return e;
                    case void 0:
                    case "transaction_queue_has_tasks":
                    case "uploading_files":
                    case "generating_ai_completions":
                    case "have_pending_ai_edits":
                    case "have_pending_synced_collection_changes":
                        return
                }(0, r(722371).HB)(e)
            }

            function o() {
                if (!a) throw Error("beforeUnloadHelpers.setupOnBeforeUnload() was not called!");
                return a()
            }
            let s = "Changes you made may not be saved. Are you sure you want to quit?";

            function l(e) {
                let {
                    TransactionQueue: t,
                    device: n,
                    AppUpdateStore: l,
                    GlobalFileUploadStore: c
                } = e, d = !(0, r(686300).o)();
                a = function() {
                    return !t.hasTasks() || n.isMobileNative || n.isElectron || l.isMajorUpdate() || d ? (0, r(336136).A5)() ? "have_pending_ai_edits" : r(506507).A.doesAnyCacheHaveUnsavedChanges() ? "have_local_draft_unsaved_changes" : c.isUploading() ? "uploading_files" : r(239098).A.hasPendingSyncedCollectionChanges() ? "have_pending_synced_collection_changes" : r(585823).gZ.state || r(769719).c.areBlocksSummarizing() ? "dictation_in_progress" : void 0 : "transaction_queue_has_tasks"
                }, window.onbeforeunload = function(e) {
                    let t = o();
                    if (t) return e.preventDefault(), e.returnValue = s, i.emit(t), s
                }
            }
        },
        734007: (e, t, r) => {
            r.d(t, {
                U: () => a
            });
            let a = new(r(815048)).O2("notifications", () => Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(96346), r.e(49806), r.e(79974), r.e(45414), r.e(71562), r.e(16471), r.e(37353), r.e(62475), r.e(3151), r.e(18965), r.e(98629), r.e(30085), r.e(27727), r.e(47609), r.e(47010), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(53847), r.e(12354), r.e(5721), r.e(57688), r.e(54951), r.e(43444), r.e(23979), r.e(26997), r.e(73259), r.e(28048), r.e(93430), r.e(12560), r.e(88268), r.e(39726), r.e(42534), r.e(86662), r.e(6212), r.e(21969), r.e(29663), r.e(28482), r.e(76361), r.e(14369), r.e(75136), r.e(98175), r.e(72805), r.e(30767), r.e(69193), r.e(97711), r.e(58889), r.e(21294), r.e(64134), r.e(31914), r.e(62146), r.e(332), r.e(53478), r.e(8896), r.e(75651), r.e(6893)]).then(r.bind(r, 23532)))
        },
        754669: (e, t, r) => {
            r.d(t, {
                c: () => i,
                y: () => a
            });
            let a = new(r(510969)).A,
                i = new(r(510969)).A
        },
        774094: (e, t, r) => {
            r.d(t, {
                p: () => a
            });

            function a(e) {
                let {
                    userId: t,
                    from: a,
                    additionalLogData: i
                } = e, n = r(255482).K.get({
                    userId: t,
                    key: r(347971).XK
                });
                if (n) return r(255482).K.remove({
                    userId: t,
                    key: r(347971).XK
                }), r(773352).log({
                    level: "info",
                    from: a,
                    type: "localStorageMigrationSuccess",
                    data: {
                        miscDataToConvertToString: {
                            userId: t,
                            previousLocalStorageValue: n,
                            ...i
                        }
                    }
                }), n
            }
        },
        783129: (e, t, r) => {
            r.d(t, {
                m: () => n
            });
            let a = r(381453).sg((e, t) => {
                    r(707785).A.setState({ ...r(707785).A.state,
                        phase: e,
                        estimatedKeyboardWebViewOverlap: t
                    })
                }, 300),
                i = r(381453).sg((e, t) => {
                    r(707785).A.setState({ ...r(707785).A.state,
                        phase: e,
                        estimatedKeyboardWebViewOverlap: t
                    })
                }, 150);

            function n(e, t, n) {
                let {
                    device: o,
                    RouterStore: s
                } = e;
                if (!(0, r(907620).T)("supportsAlwaysMultiTextSelectionBehavior")) {
                    let e = "page" === s.state.route.name,
                        i = o.isAndroid && o.isMobileNative,
                        l = "editing" === r(358377).default.state.mode;
                    if (e && i && !l) return void a(t, n)
                }
                if ((0, r(907620).T)("supportsDebouncingKeyboardDuringOnboarding")) {
                    let e = "onboarding" === s.state.route.name,
                        r = o.isIOS && o.isMobileNative;
                    if (e && r) return void i(t, n)
                }
                r(707785).A.setState({ ...r(707785).A.state,
                    phase: t,
                    estimatedKeyboardWebViewOverlap: n
                })
            }
        },
        855353: (e, t, r) => {
            r.d(t, {
                A: () => n
            }), r(296540);
            var a = r(474848);
            let i = {
                button: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "transparent"
                },
                buttonHovered: {
                    background: r(632079).Tj.buttonHoveredBackground
                },
                icon: {
                    width: r(104509).Ev.xs,
                    height: r(104509).Ev.xs
                }
            };

            function n(e) {
                let {
                    top: t,
                    right: n,
                    onClick: o,
                    ariaLabel: s,
                    tooltipEvents: l
                } = e, c = (0, r(109939).tz)(), d = (0, r(960253).I)(() => ({
                    buttonBackground: {
                        position: "absolute",
                        top: t ? ? 12,
                        insetInlineEnd: n ? ? 12,
                        width: 22,
                        height: 22,
                        borderRadius: "100%",
                        background: r(632079).Tj.background.elevated
                    }
                }), [t, n]);
                return (0, a.jsx)("div", {
                    style: d.buttonBackground,
                    children: (0, a.jsx)(r(374533).A, {
                        ariaLabel: s ? ? c.formatMessage({
                            id: "closeButton.ariaLabel",
                            defaultMessage: "Close"
                        }),
                        style: i.button,
                        hoveredStyle: i.buttonHovered,
                        onClick: o,
                        icon: r(519529).xMarkFillSmallIcon,
                        iconStyle: i.icon,
                        ...l
                    })
                })
            }
        },
        856114: (e, t, r) => {
            r.d(t, {
                m: () => i
            }), r(16280), r(944114), r(898992), r(430670), r(803949), r(581454);
            let a = 1;
            class i {
                connection;
                maxSize;
                getEnvironment;
                getLatency = new(r(693266)).B;
                batchReadWorkers = 15;
                constructor(e) {
                    this.connection = e.connection, this.maxSize = e.maxSize, this.getEnvironment = e.getEnvironment
                }
                pendingWrites = r(412951).RecordMapPolymorphic.create();
                getManyFromDisk = async e => {
                    let t = r(412951).RecordMapPolymorphic.create();
                    e.forEach(({
                        pointer: e
                    }, r) => {
                        t.set(e, r)
                    });
                    let a = await r(863027).getRecords(this.connection, e),
                        i = r(412951).RecordMapPolymorphic.create();
                    for (let e of a) this.setCachedRecordMap(i, e);
                    return e.map(({
                        pointer: e,
                        userId: t
                    }) => {
                        let r = this.getInMemory(e, t);
                        if (r) return r;
                        let a = i.get(e);
                        return a && a[t]
                    })
                };
                diskReadQueue = new(r(34128)).A({
                    batchSize: Math.floor(r(911822).Zj / 3) - 1,
                    maxWorkers: this.batchReadWorkers > 0 ? this.batchReadWorkers : 1,
                    performRequests: this.getManyFromDisk
                });
                getDedicatedWorkerConnection_DEBUG_ONLY() {
                    var e, t;
                    return null == (e = (t = this.connection).getDedicatedWorkerConnection_DEBUG_ONLY) ? void 0 : e.call(t)
                }
                set(e) {
                    let {
                        pointer: t,
                        value: a,
                        importance: i,
                        maybeStaleRecordMap: n
                    } = e;
                    if (void 0 === t || void 0 === t.id) {
                        let e = Error("Attempting to set a record with an invalid pointer.");
                        r(773352).log({
                            level: "error",
                            from: "SqliteRecordCache",
                            type: "SqliteRecordCache.setBadPointer",
                            error: {
                                message: "Attempting to set a record with an invalid pointer.",
                                stack: e.stack
                            },
                            data: {
                                pointer: t
                            }
                        }), r(419750).Fg(e);
                        return
                    }
                    let o = e.userId || r(48202).LOGGED_OUT_USER_ID,
                        s = {
                            pointer: t,
                            userId: o,
                            value: a,
                            timestamp: Date.now(),
                            importance: i
                        };
                    this.removePendingWrite(t, o, "delete"), this.enqueueWrite({
                        type: "set",
                        record: s,
                        maybeStaleRecord: n
                    })
                }
                async get(e) {
                    let t, {
                            pointer: i,
                            skipAccessWrites: n
                        } = e,
                        o = `get ${a}`,
                        s = e.userId || r(48202).LOGGED_OUT_USER_ID;
                    a++, this.getLatency.start(o);
                    try {
                        let e = this.getInMemory(i, s);
                        if (e) return n || this.enqueueWrite({
                            type: "access",
                            record: e
                        }), this.getLatency.end(o, "memory"), e.value;
                        t = r(680007).default.mark("sqlite_record_cache.get_record.duration");
                        let a = await (this.batchReadWorkers > 0 ? this.diskReadQueue.enqueue({
                            pointer: i,
                            userId: s
                        }) : this.getFromDiskUnbatched(i, s));
                        if (a) return n || this.enqueueWrite({
                            type: "access",
                            record: a
                        }), this.getLatency.end(o, "disk"), r(680007).default.measure(t, {
                            data: {
                                status: "success"
                            },
                            shouldExcludeFromTimeline: !0
                        }), a.value
                    } catch (e) {
                        if (e instanceof r(65364).pm) return;
                        (0, r(104310).u)({
                            event: {
                                eventName: "sqlite_record_cache.get_record.error",
                                eventProperties: {
                                    error_name: e instanceof Error ? e.name : "unknown",
                                    error_message: e instanceof Error ? e.message : "unknown",
                                    sqlite_code: (0, r(65364).xY)(e) ? e.debugInfo.sqliteCode : void 0
                                }
                            }
                        }), t && r(680007).default.measure(t, {
                            data: {
                                status: "error",
                                sqlite_code: (0, r(65364).xY)(e) ? e.debugInfo.sqliteCode : void 0
                            },
                            shouldExcludeFromTimeline: !0
                        });
                        return
                    } finally {
                        this.getLatency.end(o, "miss")
                    }
                }
                deleteRecord(e, t) {
                    t = t || r(48202).LOGGED_OUT_USER_ID, this.removePendingWrite(e, t, "set"), this.enqueueWrite({
                        type: "delete",
                        record: {
                            pointer: e,
                            userId: t
                        }
                    })
                }
                async getBlocksWithParent(e) {
                    let t = Date.now(),
                        a = e.userId || r(48202).LOGGED_OUT_USER_ID,
                        i = await r(863027).getBlocksWithParent(this.connection, { ...e,
                            timestamp: t,
                            userId: a
                        }),
                        n = r(412951).RecordMapPolymorphic.create(),
                        o = r(381453).oE(Array.from(this.pendingWrites).map(i => {
                            let o = i && i.value && a && i.value[a];
                            if (!o || "set" !== o.type) return;
                            let s = o.record.value ? o.record.value.value : void 0;
                            if (s && o.record.pointer.table === r(832375).evP && s.parent_id === e.parent.id && s.parent_table === e.parent.table) return n.set(o.record.pointer, !0), o.record.timestamp < t && (o.record.timestamp = t), o.record.value
                        }));
                    for (let e of i) !n.get(e.pointer) && (this.getInMemory(e.pointer, e.userId) || o.push(e.value));
                    return o
                }
                async getPageBlocksByParent(e) {
                    let t = Date.now(),
                        a = e.userId || r(48202).LOGGED_OUT_USER_ID,
                        i = await r(863027).getPageBlocksByParent(this.connection, { ...e,
                            timestamp: t,
                            userId: a
                        });
                    return i.forEach(e => {
                        this.enqueueWrite({
                            type: "access",
                            record: {
                                pointer: e.pointer,
                                timestamp: t,
                                userId: a,
                                importance: void 0,
                                value: e.value
                            }
                        })
                    }), i
                }
                async reset() {
                    this.pendingWrites = r(412951).RecordMapPolymorphic.create(), await this.deleteAllRecordTables()
                }
                async deleteAllRecordTables() {
                    try {
                        await r(863027).deleteAllCachedRecords(this.connection), await r(863027).vacuum(this.connection)
                    } catch (e) {
                        r(773352).log({
                            level: "error",
                            from: "SqliteRecordCache",
                            type: "deleteAllRecordTablesError",
                            error: (0, r(416607).convertErrorToLog)(e)
                        })
                    }
                }
                flushWrites = async () => {
                    let e = this.pendingWrites;
                    this.pendingWrites = r(412951).RecordMapPolymorphic.create();
                    let t = Array.from(e).flatMap(({
                            value: e
                        }) => e ? Object.values(e) : []),
                        a = r(680007).default.mark("sqlite_record_cache.flush_writes.duration");
                    try {
                        await r(863027).applyRecordCacheOperations(this.connection, t), r(680007).default.measure(a, {
                            data: {
                                status: "success"
                            },
                            shouldExcludeFromTimeline: !0
                        })
                    } catch (e) {
                        if (e instanceof r(65364).pm) return;
                        (0, r(104310).u)({
                            event: {
                                eventName: "sqlite_record_cache.flush_writes.error",
                                eventProperties: {
                                    error_name: e instanceof Error ? e.name : "unknown",
                                    error_message: e instanceof Error ? e.message : "unknown"
                                }
                            }
                        }), r(680007).default.measure(a, {
                            data: {
                                status: "error"
                            },
                            shouldExcludeFromTimeline: !0
                        })
                    }
                    r(218744).default.checkGate({
                        gateName: "download_for_offline"
                    }) || navigator.locks.request("sqliteRecordCacheEviction", {
                        mode: "exclusive",
                        ifAvailable: !0
                    }, async e => {
                        if (!e) return;
                        let t = await this.getTablesThatNeedEviction();
                        if (0 === t.length) return;
                        let a = await (0, r(597845).w3)({
                            environment: this.getEnvironment()
                        });
                        await this.evictTables({
                            tables: t,
                            offlineRecordIds: a
                        })
                    })
                };
                debouncedFlushWrites = r(381453).sg(this.flushWrites, 500, {
                    maxWait: 3e3
                });
                setEnvironment(e) {
                    this.getEnvironment = () => e
                }
                async flushPendingWrites() {
                    await this.flushWrites()
                }
                enqueueWrite(e) {
                    this.debouncedFlushWrites();
                    let {
                        pointer: t,
                        userId: r
                    } = e.record, a = this.pendingWrites.get(t), i = a && a[r];
                    if (i) {
                        if ("set" === i.type && "access" === e.type) {
                            let t = {
                                type: "set",
                                record: { ...i.record,
                                    timestamp: e.record.timestamp
                                }
                            };
                            this.setCacheOperationMap(this.pendingWrites, t);
                            return
                        }
                        let t = "set" === i.type && !i.maybeStaleRecord && i.record.value && i.record.value.value ? i.record.value.value.version : void 0,
                            r = "set" === e.type && e.maybeStaleRecord && e.record.value && e.record.value.value ? e.record.value.value.version : void 0;
                        if ("number" == typeof t && "number" == typeof r && t >= r) return
                    }
                    this.setCacheOperationMap(this.pendingWrites, e)
                }
                async getFromDiskUnbatched(e, t) {
                    let [r] = await this.getManyFromDisk([{
                        pointer: e,
                        userId: t
                    }]);
                    return r
                }
                getInMemory(e, t) {
                    let r = this.pendingWrites.get(e),
                        a = r && r[t];
                    if (a && "set" === a.type) return a.record
                }
                setCacheOperationMap(e, t) {
                    let {
                        pointer: r,
                        userId: a
                    } = t.record, i = e.get(r) || {};
                    e.set(r, { ...i,
                        [a]: t
                    })
                }
                setCachedRecordMap(e, t) {
                    let {
                        pointer: r,
                        userId: a
                    } = t, i = e.get(r) || {};
                    e.set(r, { ...i,
                        [a]: t
                    })
                }
                removePendingWrite(e, t, r) {
                    let a = this.pendingWrites.get(e);
                    a && a[t] && a[t].type === r && this.pendingWrites.delete(e)
                }
                async getTablesThatNeedEviction() {
                    try {
                        return await r(863027).getTablesThatNeedEviction({
                            connection: this.connection,
                            maxSize: this.maxSize
                        })
                    } catch (e) {
                        return (0, r(104310).u)({
                            event: {
                                eventName: "sqlite_record_cache.eviction.error",
                                eventProperties: {
                                    type: "get_tables_failed"
                                }
                            },
                            opts: {
                                preboot: !0
                            }
                        }), r(773352).log({
                            level: "warning",
                            from: "SqliteRecordCache",
                            type: "getTablesThatNeedEvictionFailed",
                            error: (0, r(416607).convertErrorToLog)(e)
                        }), []
                    }
                }
                async evictTables(e) {
                    let {
                        tables: t,
                        offlineRecordIds: a
                    } = e;
                    try {
                        await r(863027).evictTables({
                            connection: this.connection,
                            tables: t,
                            maxSize: this.maxSize,
                            offlineRecordIds: a
                        }), (0, r(104310).u)({
                            event: {
                                eventName: "sqlite_record_cache.eviction",
                                eventProperties: {}
                            },
                            opts: {
                                preboot: !0
                            }
                        })
                    } catch (e) {
                        (0, r(104310).u)({
                            event: {
                                eventName: "sqlite_record_cache.eviction.error",
                                eventProperties: {
                                    type: "eviction_failed"
                                }
                            },
                            opts: {
                                preboot: !0
                            }
                        }), r(773352).log({
                            level: "warning",
                            from: "SqliteRecordCache",
                            type: "evictionFailed",
                            error: (0, r(416607).convertErrorToLog)(e)
                        })
                    }
                }
            }
        },
        863027: (e, t, r) => {
            r.r(t), r.d(t, {
                EvictableTables: () => a,
                PersistedRecordColumns: () => i,
                applyRecordCacheOperations: () => v,
                backfillRecordsWithUserId: () => n,
                batchUpsertRecordStatements: () => o,
                deleteAllCachedRecords: () => S,
                evictTables: () => g,
                getBlocksWithParent: () => f,
                getPageBlocksByParent: () => m,
                getRecords: () => p,
                getTablesThatNeedEviction: () => y,
                vacuum: () => _
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(803949), r(581454);
            let a = {
                    Records: {
                        tableName: "records",
                        idColumn: "record_id",
                        priorityColumns: "importance, timestamp",
                        priorityColumnsOrderBy: "importance DESC, timestamp DESC"
                    },
                    Block: {
                        tableName: "block",
                        idColumn: "id",
                        priorityColumns: "meta_last_access_timestamp",
                        priorityColumnsOrderBy: "meta_last_access_timestamp DESC"
                    }
                },
                i = ["record_table", "record_id", "record_value", "space_id", "timestamp", "parent_table", "parent_id", "importance", "user_id"];
            async function n(e, t) {
                await (0, r(911822).G2)({
                    connection: e,
                    statements: [{
                        sql: `
				UPDATE records SET user_id = ? WHERE user_id is null
				`,
                        args: [t]
                    }],
                    queryName: "backfillRecordsWithUserId"
                })
            }

            function o(e) {
                var t;
                let a, n, [o, c] = r(381453).jB(e.records, e => w(e)),
                    d = (t = {
                        records: o,
                        maybeStaleRecords: e.maybeStaleRecords
                    }, a = r(381453).$z(t.records, e => e.pointer.table), n = [], Object.entries(a).forEach(([e, a]) => {
                        let i = r(239143).M.find(t => t.table === e);
                        if (!i) return;
                        let o = (0, r(722371).objectKeys)(i.recordColumnTypes),
                            s = (0, r(722371).objectKeys)(i.metaColumnTypes),
                            l = [...o, ...s];
                        r(381453).iv(a, Math.floor(r(911822).Zj / l.length)).forEach(a => {
                            let i, c = `(${l.join(",")})`,
                                d = Array(a.length).fill(`(${"?, ".repeat(l.length-1)}?)`).join(",");
                            i = t.maybeStaleRecords && l.includes("version") ? `INSERT INTO ${e} ${c} VALUES ${d}`.concat("ON CONFLICT (id, meta_user_id) DO UPDATE SET").concat("\n").concat(l.map(e => `${e} = excluded.${e}`).join(",")).concat("\n").concat(`WHERE excluded.version > ${e}.version`) : `INSERT OR REPLACE INTO ${e} ${c} VALUES ${d}`;
                            let u = r(381453).Bq(a.map(({
                                value: e,
                                timestamp: t,
                                userId: a
                            }) => {
                                if (!e) return [];
                                let i = e.value;
                                if (!i) return [];
                                let n = o.map(e => {
                                        var t;
                                        return null == (t = (0, r(722371).O)(i, e) ? i[e] : void 0) ? null : "string" == typeof t || "number" == typeof t ? t : "boolean" == typeof t ? +!!t : JSON.stringify(t)
                                    }),
                                    l = s.map(r => {
                                        switch (r) {
                                            case "meta_user_id":
                                                return a;
                                            case "meta_role":
                                                return e.role;
                                            case "meta_last_access_timestamp":
                                                return t;
                                            default:
                                                throw Error(`Unknown meta column ${r}`)
                                        }
                                    });
                                return n.concat(l)
                            }));
                            n.push({
                                sql: i,
                                args: u
                            })
                        })
                    }), n),
                    u = function(e) {
                        let {
                            records: t,
                            maybeStaleRecords: a
                        } = e;
                        return r(381453).iv(t, Math.floor(r(911822).Zj / i.length)).map(e => {
                            let t = Array(e.length).fill("(?, ?, ?, ?, ?, ?, ?, ?, ?)").join(","),
                                i = `
			INSERT INTO records
			(
				record_table,
				record_id,
				record_value,
				timestamp,
				parent_table,
				parent_id,
				importance,
				user_id,
				space_id
			)
			VALUES ${t}`;
                            return {
                                sql: i = a ? i.concat(`
				ON CONFLICT (record_table, record_id, user_id) DO UPDATE SET
					record_value =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.record_value
						ELSE records.record_value
						END,
					timestamp =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.timestamp
						ELSE records.timestamp
						END,
					parent_table =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.parent_table
						ELSE records.parent_table
						END,
					parent_id =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.parent_id
						ELSE records.parent_id
						END,
					importance =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.importance
						ELSE records.importance
						END,
					user_id =
						CASE WHEN json_extract(excluded.record_value, '$.value.version') > json_extract(records.record_value, '$.value.version')
						THEN excluded.user_id
						ELSE excluded.user_id
						END,
					-- space_id never changes.
					space_id = COALESCE(records.space_id, excluded.space_id)`) : i.concat(`
				ON CONFLICT (record_table, record_id, user_id) DO UPDATE SET
					record_value = excluded.record_value,
					timestamp = excluded.timestamp,
					parent_table = excluded.parent_table,
					parent_id = excluded.parent_id,
					importance = excluded.importance,
					user_id = excluded.user_id,
					-- space_id never changes.
					space_id = COALESCE(records.space_id, excluded.space_id)`),
                                args: r(381453).Bq(e.map(({
                                    pointer: e,
                                    value: t,
                                    timestamp: a,
                                    importance: i,
                                    userId: n
                                }) => {
                                    let o = null,
                                        s = null;
                                    return t && t.value && (0, r(761481).ob)(t.value) && (o = t.value.parent_id, s = t.value.parent_table), [e.table, e.id, (0, r(911822).Fm)(t), a, s, o, "number" == typeof i ? i : null, n, e.spaceId || null]
                                }))
                            }
                        })
                    }({
                        records: c,
                        maybeStaleRecords: e.maybeStaleRecords
                    });
                return [...s(o), ...l(c.filter(e => r(239143).z.has(e.pointer.table))), ...d, ...u]
            }

            function s(e) {
                return r(381453).iv(e, Math.floor(r(911822).Zj / (2 * e.length))).map(e => {
                    let t = r(573146).F4.or(e.map(e => (0, r(573146).F4)
                        `(records.record_id = ${e.pointer.id} AND records.user_id = ${e.userId})`));
                    return (0, r(573146).F4)
                    `DELETE FROM records WHERE ${t}`.asWrite()
                })
            }

            function l(e) {
                let t = r(381453).$z(e, e => e.pointer.table),
                    a = [];
                return Object.entries(t).forEach(([e, t]) => {
                    r(381453).iv(t, Math.floor(r(911822).Zj / (2 * t.length))).forEach(t => {
                        let i = r(573146).F4.or(t.map(e => (0, r(573146).F4)
                            `(id = ${e.pointer.id} AND meta_user_id = ${e.userId})`));
                        a.push((0, r(573146).F4)
                            `DELETE FROM ${r(573146).F4.ident(e)} WHERE ${i}`.asWrite())
                    })
                }), a
            }
            async function c(e, t) {
                if (0 === t.length) return [];
                let a = Array(t.length).fill("(record_table = ? AND record_id = ? AND user_id = ?)").join(" OR "),
                    i = r(381453).qI(t, ({
                        pointer: {
                            table: e,
                            id: t
                        },
                        userId: r
                    }) => [e, t, r]),
                    [n] = await (0, r(911822).G2)({
                        connection: e,
                        statements: [{
                            sql: `
				SELECT * FROM records
				WHERE ${a}`,
                            args: i,
                            getData: !0
                        }],
                        queryName: "getRecordsFromRecordsTable"
                    });
                return n.data.map(e => ({
                    pointer: r(496282).L3.fromPointerLike({
                        table: e.record_table,
                        id: e.record_id,
                        spaceId: e.space_id || void 0
                    }),
                    value: JSON.parse(e.record_value),
                    timestamp: e.timestamp,
                    importance: "number" == typeof e.importance ? e.importance : void 0,
                    userId: e.user_id
                }))
            }
            async function d(e, t) {
                if (0 === t.length) return [];
                let a = r(381453).$z(t, e => e.pointer.table),
                    i = [];
                Object.entries(a).forEach(([t, a]) => {
                    let n = r(239143).M.find(e => e.table === t);
                    if (!n) return;
                    let o = Array(a.length).fill("(id = ? AND meta_user_id = ?)").join(" OR "),
                        s = r(381453).qI(a, ({
                            pointer: {
                                table: e,
                                id: t
                            },
                            userId: r
                        }) => [t, r]);
                    i.push(async function() {
                        let [a] = await (0, r(911822).G2)({
                            connection: e,
                            statements: [{
                                sql: `
				SELECT * FROM ${t}
				WHERE ${o}`,
                                args: s,
                                getData: !0
                            }],
                            queryName: "getRecordsFromSeparateTables"
                        });
                        return a.data.map(e => {
                            var a, i, o;
                            return a = t, i = e, o = n, {
                                pointer: r(496282).L3.fromPointerLike({
                                    table: a,
                                    id: i.id,
                                    spaceId: i.space_id || void 0
                                }),
                                value: {
                                    role: i.meta_role,
                                    value: u(i, o)
                                },
                                timestamp: i.meta_last_access_timestamp,
                                importance: 0,
                                userId: i.meta_user_id
                            }
                        })
                    }())
                });
                let n = await Promise.all(i);
                return r(381453).Bq(n)
            }

            function u(e, t) {
                let a = {};
                return (0, r(722371).objectKeys)(t.recordColumnTypes).forEach(i => {
                    let n = t.recordColumnTypes[i];
                    if (null !== e[i]) switch (n) {
                        case r(759070).q.UUID:
                        case r(759070).q.String:
                        case r(759070).q.Number:
                            a[i] = e[i];
                            break;
                        case r(759070).q.StringArray:
                        case r(759070).q.JSON:
                            a[i] = JSON.parse(e[i]);
                            break;
                        case r(759070).q.XML:
                            a[i] = e[i];
                            break;
                        case r(759070).q.UUIDArray:
                            a[i] = JSON.parse(e[i]);
                            break;
                        case r(759070).q.Boolean:
                            a[i] = 1 === e[i];
                            break;
                        case r(759070).q.CIDR:
                            a[i] = e[i];
                            break;
                        case r(759070).q.NumberArray:
                            a[i] = JSON.parse(e[i]);
                            break;
                        case r(759070).q.Blob:
                            a[i] = e[i];
                            break;
                        case r(759070).q.CIDRArray:
                            a[i] = JSON.parse(e[i]);
                            break;
                        default:
                            (0, r(722371).HB)(n)
                    }
                }), a
            }
            async function p(e, t) {
                let [a, i] = r(381453).jB(t, e => r(239143).z.has(e.pointer.table)), n = await d(e, a), o = new Set(n.map(e => r(496282).tr.toKey({
                    pointer: e.pointer,
                    userId: e.userId
                }))), s = a.filter(e => !o.has(r(496282).tr.toKey(e))), l = (await c(e, i.concat(s))).filter(e => !w(e));
                return n.concat(l)
            }
            async function f(e, t) {
                let a = (0, r(573146).F4)
                `
  SELECT * FROM block
  WHERE parent_table = ${t.parent.table}
  AND parent_id = ${t.parent.id}
  AND meta_user_id = ${t.userId}
  `.asRead(), i = (0, r(573146).F4)
                `
  UPDATE block
  SET meta_last_access_timestamp = ${t.timestamp}
  WHERE parent_table = ${t.parent.table}
  AND parent_id = ${t.parent.id}
  AND meta_user_id = ${t.userId}
  `.asWrite(), [n] = await (0, r(911822).G2)({
                    connection: e,
                    statements: [a, i],
                    queryName: "getBlocksWithParent"
                });
                return n.data.map(e => ({
                    pointer: r(496282).L3.fromPointerLike({
                        table: r(682956).ev,
                        id: e.id,
                        spaceId: e.space_id || void 0
                    }),
                    value: {
                        role: e.meta_role,
                        value: u(e, r(652206).J)
                    },
                    userId: t.userId
                }))
            }
            async function m(e, t) {
                let a = (0, r(573146).F4)
                `
    WITH RECURSIVE page_blocks AS (
      SELECT * FROM block
      WHERE id = ${t.page.id}
      AND meta_user_id = ${t.userId}

      UNION

      SELECT block.*
      FROM
        block INDEXED BY block_parent_id,
        page_blocks
      WHERE
      (
        page_blocks.id = ${t.page.id}
        OR page_blocks.type NOT IN ('page', 'toggle')
      )
      AND block.parent_table = 'block'
      AND block.parent_id = page_blocks.id
      AND block.meta_user_id = ${t.userId}
    )
    SELECT * FROM page_blocks
    `, i = await a.all(e, "getPageBlocksByParent");
                return 0 === i.length ? [] : i.map(e => ({
                    pointer: r(496282).L3.fromPointerLike({
                        table: r(682956).ev,
                        id: e.id,
                        spaceId: e.space_id || void 0
                    }),
                    value: {
                        role: e.meta_role,
                        value: u(e, r(652206).J)
                    },
                    userId: t.userId
                }))
            }
            async function v(e, t) {
                let a = t.filter(e => "set" === e.type && !e.maybeStaleRecord),
                    i = t.filter(e => "set" === e.type && e.maybeStaleRecord),
                    n = t.filter(({
                        type: e
                    }) => "access" === e),
                    c = t.filter(({
                        type: e
                    }) => "delete" === e),
                    d = [];
                if (n.forEach(e => {
                        let t = e.record.pointer.table;
                        w(e.record) ? t === r(682956).ev && d.push((0, r(573146).F4)
                            `
	        UPDATE block
	        SET meta_last_access_timestamp = ${e.record.timestamp}
	        WHERE id = ${e.record.pointer.id}
	        AND meta_user_id = ${e.record.userId}
	        `.asWrite()) : d.push({
                            sql: `UPDATE records
          SET timestamp = ?
          WHERE record_table = ?
          AND record_id = ?
          AND user_id = ?`,
                            args: [e.record.timestamp, t, e.record.pointer.id, e.record.userId]
                        })
                    }), a.length > 0 || i.length > 0) {
                    if (a.length > 0) {
                        let e = a.map(e => e.record);
                        d.push(...o({
                            records: e,
                            maybeStaleRecords: !1
                        }))
                    }
                    if (i.length > 0) {
                        let e = i.map(e => e.record);
                        d.push(...o({
                            records: e,
                            maybeStaleRecords: !0
                        }))
                    }
                }
                if (c.length > 0) {
                    let e, t, a = c.map(e => e.record);
                    d.push(...(e = l(a.filter(e => r(239143).z.has(e.pointer.table))), t = s(a), e.concat(t)))
                }
                0 !== d.length && await (0, r(911822).G2)({
                    connection: e,
                    statements: d,
                    queryName: "applyRecordCacheOperations"
                })
            }
            async function g(e) {
                let {
                    connection: t,
                    tables: i,
                    maxSize: n,
                    offlineRecordIds: o
                } = e;
                if (0 === i.length) return;
                let s = i.map(e => (function(e) {
                    let {
                        table: t,
                        maxSize: r,
                        offlineRecordIds: i
                    } = e, {
                        tableName: n,
                        idColumn: o,
                        priorityColumns: s,
                        priorityColumnsOrderBy: l
                    } = a[t], c = `
		WITH offline_record_ids(id) AS (
			${i.length>0?`VALUES ${i.map(()=>"(?)").join(", ")}`:"SELECT 1 WHERE false"}
		)

	`, d = `
		SELECT
			${o},
			0 as preservation_priority,
			${s}
		FROM ${n}
		WHERE ${o} IN (SELECT id FROM offline_record_ids)
	`, u = `
		SELECT
			${o},
			1 as preservation_priority,
			${s}
		FROM ${n}
		WHERE ${o} NOT IN (SELECT id FROM offline_record_ids)
	`, p = `
		${d}
		UNION
		${u}
		ORDER BY preservation_priority ASC, ${l}
		LIMIT ${Math.max(r,i.length)}
	`;
                    return {
                        sql: `
			${c}
			DELETE FROM ${n}
			WHERE ${o} NOT IN (
				SELECT ${o} FROM (
					${p}
				)
			)
		`,
                        args: i
                    }
                })({
                    table: e,
                    maxSize: n,
                    offlineRecordIds: o
                }));
                await (0, r(911822).G2)({
                    connection: t,
                    statements: s,
                    queryName: "evictTables"
                })
            }
            async function h(e) {
                let t = [];
                r(239143).z.forEach(e => {
                    t.push((0, r(573146).F4)
                        `DELETE FROM ${r(573146).F4.ident(e)}`.asWrite())
                }), await (0, r(911822).G2)({
                    connection: e,
                    statements: t,
                    queryName: "deleteAllCachedRecordsFromSeparateTables"
                })
            }
            async function b(e) {
                await (0, r(911822).G2)({
                    connection: e,
                    statements: [{
                        sql: "DELETE FROM records"
                    }],
                    queryName: "deleteAllCachedRecordsFromRecordsTable"
                })
            }
            async function _(e) {
                await (0, r(911822).fi)({
                    connection: e
                })
            }
            async function S(e) {
                await h(e), await b(e)
            }
            async function y(e) {
                let {
                    connection: t,
                    maxSize: i
                } = e, n = {
                    Records: {
                        sql: `SELECT COUNT(*) FROM ${a.Records.tableName}`,
                        getData: !0
                    },
                    Block: {
                        sql: `SELECT COUNT(*) FROM ${a.Block.tableName}`,
                        getData: !0
                    }
                }, o = await (0, r(911822).G2)({
                    connection: t,
                    statements: Object.values(n),
                    queryName: "getTablesThatNeedEviction"
                }), s = r(381453).Jt(o, "[0][data][0][COUNT(*)]"), l = r(381453).Jt(o, "[1][data][0][COUNT(*)]");
                if ("number" != typeof s || "number" != typeof l) throw Error("getTablesThatNeedEviction query returned malformed results.");
                return [...s > i ? ["Records"] : [], ...l > i ? ["Block"] : []]
            }

            function w(e) {
                return r(239143).z.has(e.pointer.table) && void 0 !== e.value && void 0 !== e.value.value
            }
        },
        868892: (e, t, r) => {
            r.d(t, {
                h: () => a
            });

            function a({
                fromElectron: e
            }) {
                !r(984858).sidebarHoverPreviewDisabledStore.state && (r(984858).sidebarOpenStore.state || r(818955).default.state.isActive || r(552556).A.isOpen() || (r(984858).sidebarOpenStore.setState(!0), e && r(984858).sidebarElectronMousePeekStore.setState(!0)))
            }
        },
        911495: (e, t, r) => {
            new(r(245541)).R({
                key: "SimulateOffline",
                namespace: "Offline",
                important: !0,
                trackingType: "necessary"
            })
        },
        918150: (e, t, r) => {
            r.d(t, {
                v: () => o
            });
            let a = new(r(815048)).O2("idleTranscriptionActions", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 186931))),
                i = new(r(815048)).O2("transcriptionErrorActions", async () => await Promise.all([r.e(75134), r.e(9773), r.e(36556), r.e(55373), r.e(36192), r.e(40537), r.e(5410), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(23519), r.e(63771), r.e(53050), r.e(87353), r.e(45213), r.e(12354), r.e(5721), r.e(57688), r.e(17250), r.e(64696), r.e(39726), r.e(87971), r.e(29663), r.e(74145), r.e(55067), r.e(79349), r.e(90735), r.e(50354), r.e(71136), r.e(86102), r.e(30671), r.e(3101)]).then(r.bind(r, 164093))),
                n = new(r(815048)).O2("desktopUpdateActions", async () => await Promise.all([r.e(9773), r.e(40537), r.e(62475), r.e(3151), r.e(98629), r.e(76361), r.e(64134), r.e(7097)]).then(r.bind(r, 327237))),
                o = {
                    transcription_idle: async (e, t) => {
                        (await a.load()).showIdleTranscriptionToast(e, t)
                    },
                    transcription_error: async (e, t) => {
                        (await i.load()).showTranscriptionErrorToast(e, t)
                    },
                    transcription_recording_stopped: async (e, t) => {
                        (await r(212680).i.load()).showTranscriptionRecordingStoppedToast(e, t)
                    },
                    desktop_update_available: async (e, t) => {
                        (await n.load()).showDesktopUpdateAvailableToast(e, t)
                    }
                }
        },
        948561: (e, t, r) => {
            function a() {
                var e;
                return (null == (e = r(728372).AppStoreSidebarSpaceViewStore.getState()) || null == (e = e.getSettings()) ? void 0 : e.ai_meeting_notes_notification_dismiss_count) ? ? 0
            }

            function i(e) {
                let {
                    currentCount: t,
                    threshold: r,
                    hasTranscribedMinutes: a
                } = e;
                return !!r && !(r <= 0) && !1 === a && t >= r
            }
            r.d(t, {
                i: () => i,
                w: () => a
            })
        },
        965885: (e, t, r) => {
            r.r(t), r.d(t, {
                exclamationMarkCircleIcon: () => n,
                iconDefinition: () => i
            }), r(296540);
            var a = r(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M9.875 6.25c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0v-3.5c0-.345.28-.625.625-.625m0 7.375a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
                        }), (0, a.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                n = (0, r(104509).wt)("exclamationMarkCircle", i, "default")
        }
    }
]);