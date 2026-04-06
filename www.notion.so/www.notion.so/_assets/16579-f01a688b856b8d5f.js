"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16579], {
        48091: (e, t, n) => {
            n.d(t, {
                AY: () => a,
                Ay: () => s
            }), n(898992), n(354520), n(803949);
            class i {
                uniqueIdCounter = 0;
                addListener({
                    key: e,
                    authorizationToken: t,
                    listener: i,
                    subscriptionId: r
                }) {
                    if ((0, n(880927).A)(e)) return r || (r = this.computeNewSubscriptionId()), n(579929).B1({
                        key: e,
                        authorizationToken: t,
                        listener: i,
                        listenerId: r
                    }), {
                        key: e,
                        subscriptionId: r
                    }
                }
                removeListener({
                    key: e,
                    subscriptionId: t
                }, i = !0) {
                    (0, n(880927).A)(e) && n(579929).al(e, t, i)
                }
                async updateField(e) {
                    await n(579929).cP(e)
                }
                async setField(e) {
                    await n(579929).x(e)
                }
                async onDisconnect(e, t, i) {
                    let r = `${i}/${e}`;
                    await n(579929).zg(r, t)
                }
                async clearOnDisconnect(e, t) {
                    let i = `${t}/${e}`;
                    await n(579929).uQ(i)
                }
                computeNewSubscriptionId() {
                    return this.uniqueIdCounter += 1, `subscription:${this.uniqueIdCounter}`
                }
            }
            class r {
                isQueuingListeners = !0;
                queuedListeners = [];
                defaultMessageDispatcher = new i;
                addListener({
                    key: e,
                    authorizationToken: t,
                    listener: n,
                    subscriptionId: i
                }) {
                    return this.isQueuingListeners ? (i || (i = this.defaultMessageDispatcher.computeNewSubscriptionId()), this.queuedListeners = [...this.queuedListeners.filter(t => t.key !== e || t.subscriptionId !== i), {
                        key: e,
                        authorizationToken: t,
                        listener: n,
                        subscriptionId: i
                    }], {
                        key: e,
                        subscriptionId: i
                    }) : this.defaultMessageDispatcher.addListener({
                        key: e,
                        authorizationToken: t,
                        listener: n,
                        subscriptionId: i
                    })
                }
                removeListener({
                    key: e,
                    subscriptionId: t
                }) {
                    this.isQueuingListeners ? this.queuedListeners = this.queuedListeners.filter(n => n.key !== e && n.subscriptionId !== t) : this.defaultMessageDispatcher.removeListener({
                        key: e,
                        subscriptionId: t
                    })
                }
                updateField(e) {
                    return Promise.resolve()
                }
                setField(e) {
                    return Promise.resolve()
                }
                onDisconnect(e, t, n) {
                    return Promise.resolve()
                }
                clearOnDisconnect(e, t) {
                    return Promise.resolve()
                }
                stopQueueingSubscriptions() {
                    this.isQueuingListeners && (this.queuedListeners.forEach(e => {
                        this.defaultMessageDispatcher.addListener({
                            key: e.key,
                            authorizationToken: e.authorizationToken,
                            listener: e.listener,
                            subscriptionId: e.subscriptionId
                        })
                    }), this.queuedListeners = [], this.isQueuingListeners = !1)
                }
            }
            let s = window.location.pathname === n(25408).GJ.quickSearch ? new r : new i;

            function a(e) {
                let t = !1;
                return (...n) => {
                    if (t) return e(...n);
                    t = !0
                }
            }
        },
        227586: (e, t, n) => {
            n.d(t, {
                n: () => i
            }), n(16280), n(898992), n(672577), n(803949);
            class i {
                messageDispatcher;
                shouldInvalidateRequest;
                requestToDependencies;
                dependencyToRequests;
                requestKeyToRequest;
                dependencyToListener;
                pendingFetchReasons;
                keyFn;
                fetchingStore;
                constructor(e, t, i) {
                    this.messageDispatcher = n(48091).Ay, this.shouldInvalidateRequest = null == i ? void 0 : i.shouldInvalidateRequest, this.requestToDependencies = {}, this.dependencyToRequests = {}, this.requestKeyToRequest = {}, this.dependencyToListener = {}, this.pendingFetchReasons = {}, this.keyFn = e, this.fetchingStore = new(n(273917)).U(e, async (e, n, i) => {
                        let r = this.keyFn(e, n),
                            s = this.pendingFetchReasons[r] ? ? "initial";
                        delete this.pendingFetchReasons[r];
                        let a = await t(e, n, {
                            forceRefetch: i ? ? !1,
                            fetchReason: s
                        });
                        if (a) return this.register(e, n, a.dependencies ? ? []), a.value
                    }, {
                        dontCacheUndefined: null == i ? void 0 : i.dontCacheUndefined
                    })
                }
                getData(e, t) {
                    return this.fetchingStore.getData(e, t)
                }
                async awaitData(e, t) {
                    return await this.fetchingStore.awaitData(e, t)
                }
                async resetData(e, t) {
                    let n = this.keyFn(e, t);
                    return this.pendingFetchReasons[n] = "resetData", this.fetchingStore.resetData(e, t, !0)
                }
                register(e, t, i) {
                    let r = this.keyFn(e, t),
                        s = this.requestToDependencies[r] ? ? [],
                        a = (0, n(381453).Lc)(i, s, e => e.key),
                        o = (0, n(381453).Lc)(s, i, e => e.key);
                    this.requestKeyToRequest[r] = t, this.requestToDependencies[r] = i, a.forEach(t => {
                        let i = this.dependencyToRequests[t.key] ? ? [];
                        if (this.dependencyToRequests[t.key] = (0, n(381453).sb)([...i, r]), 0 === i.length) {
                            let n = this.messageDispatcher.addListener({
                                key: t.key,
                                authorizationToken: void 0,
                                listener: n => void this.invalidateDependency(e, t.key, n),
                                subscriptionId: void 0
                            });
                            this.dependencyToListener[t.key] = n
                        }
                    }), o.forEach(e => {
                        let t = this.dependencyToRequests[e.key] ? ? [],
                            i = (0, n(381453).R9)(t, [r]);
                        this.dependencyToRequests[e.key] = i;
                        let s = this.dependencyToListener[e.key];
                        0 === i.length && s && this.messageDispatcher.removeListener(s)
                    })
                }
                async invalidateDependency(e, t, i) {
                    let r = this.dependencyToRequests[t] ? ? [];
                    await (0, n(975162).lX)(r, 10, async n => {
                        var r;
                        let s = this.requestKeyToRequest[n],
                            a = null == (r = this.requestToDependencies[n].find(e => e.key === t)) ? void 0 : r.version;
                        if (a) {
                            if (!i.version || a < i.version) {
                                if (this.shouldInvalidateRequest && !this.shouldInvalidateRequest(s, {
                                        dependencyKey: t,
                                        passThroughData: i.passThroughData,
                                        version: i.version
                                    })) return;
                                return this.pendingFetchReasons[n] = "messageStore", this.fetchingStore.resetData(e, s, !0)
                            }
                        } else throw Error("Unable to find expected dependency for request")
                    })
                }
                TEST_ONLY__addListener(e, t, n) {
                    this.fetchingStore.TEST_ONLY__addListener(e, t, n)
                }
                TEST_ONLY__setMessageDispatcher(e) {
                    this.messageDispatcher = e
                }
                TEST_ONLY__setData(e, t, n) {
                    this.fetchingStore.TEST_ONLY__setData(e, t, n)
                }
            }
        },
        260220: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var i = () => n(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        isConnected: !1,
                        numConnectionAttempts: 1
                    }
                }
            }
            let s = new r
        },
        273314: (e, t, n) => {
            n.d(t, {
                Bk: () => u,
                Jv: () => s,
                _A: () => l,
                si: () => a,
                tr: () => c
            });
            let i = new(n(227586)).n((e, t) => (0, n(729052).yO)(t), async (e, t, {
                fetchReason: i
            }) => {
                let {
                    spaceId: r,
                    userId: s
                } = t, a = (0, n(568479).KF)(r), o = [{
                    key: a,
                    version: -1
                }], u = new(n(695906)).SpaceStore(e, {
                    table: "space",
                    id: r
                }), l = n(229903).V.createChildStore(u, (0, n(729052).i1)({
                    userId: s,
                    spaceId: r
                }));
                await l.load();
                let c = l.getMembershipType();
                switch (c) {
                    case void 0:
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return {
                            value: d,
                            dependencies: o
                        };
                    case "member":
                    case "membership_admin":
                    case "owner":
                        break;
                    default:
                        (0, n(722371).HB)(c)
                }
                let p = await e.api.callCellCompatibleApiWithRetry({
                    eventName: "getSpaceUserCountsByType",
                    environment: e,
                    data: {
                        spaceId: r
                    },
                    cellNavigation: {
                        spaceId: r
                    },
                    headers: "messageStore" === i ? {
                        [n(568479).V0]: a
                    } : void 0
                }, {
                    shouldRetry: e => {
                        var t, n;
                        return "failed" === e.type && (null == (t = e.body) || null == (t = t.clientData) ? void 0 : t.type) === "rate_limited" && null != (n = e.body) && null != (n = n.clientData) && n.retryAfter ? {
                            retry: !0,
                            error: e.error
                        } : {
                            retry: !1
                        }
                    }
                });
                return "failed" === p.type ? void n(773352).rateLimitedLog({
                    from: "SpaceUserCountsStore",
                    level: "error",
                    type: "getSpaceUserCountsByTypeFailed",
                    spaceId: r,
                    error: (0, n(416607).convertErrorToLog)(p.error),
                    data: {
                        miscDataToConvertToString: {
                            userId: s
                        }
                    }
                }) : {
                    value: p.data.countsByType,
                    dependencies: o
                }
            });

            function r(e) {
                let {
                    environment: t,
                    ...n
                } = e;
                return i.getData(t, n)
            }

            function s(e) {
                let t = r(e);
                return null == t ? void 0 : t.page_guest
            }

            function a(e) {
                let t = r(e);
                if (t) return p(t)
            }
            async function o(e) {
                let {
                    environment: t,
                    forceRefetch: n = !1,
                    ...r
                } = e;
                return n && await i.resetData(t, r), await i.awaitData(t, r)
            }
            async function u(e) {
                let t = await o(e);
                if (t) return t.page_guest
            }
            async function l(e) {
                let t = await o(e);
                if (t) return p(t)
            }
            async function c(e) {
                let t = await o(e);
                if (t) return t.owner
            }
            let d = {
                page_guest: 0,
                restricted_member: 0,
                member: 0,
                membership_admin: 0,
                owner: 0
            };

            function p(e) {
                let {
                    restricted_member: t,
                    member: n,
                    membership_admin: i,
                    owner: r
                } = e;
                return t + n + i + r
            }
        },
        568479: (e, t, n) => {
            n.d(t, {
                Ak: () => U,
                B5: () => j,
                BK: () => M,
                BO: () => u,
                Bp: () => y,
                DZ: () => _,
                Dn: () => N,
                Ez: () => B,
                Fi: () => S,
                G8: () => v,
                GM: () => D,
                Ii: () => p,
                KF: () => O,
                L0: () => k,
                M5: () => I,
                N0: () => f,
                N8: () => r,
                O$: () => c,
                Rs: () => T,
                U: () => q,
                V0: () => K,
                VF: () => $,
                VI: () => R,
                VW: () => L,
                Vz: () => g,
                Ws: () => w,
                Xq: () => h,
                Zg: () => s,
                Zr: () => x,
                _i: () => F,
                aS: () => o,
                aW: () => l,
                dp: () => m,
                eG: () => a,
                eI: () => b,
                g7: () => C,
                i7: () => z,
                kf: () => Q,
                l: () => W,
                o1: () => P,
                um: () => G,
                vB: () => E,
                y3: () => V,
                z9: () => A,
                zB: () => d
            }), n(16280);
            let i = {
                [n(213003).NX]: !0,
                [n(682956).ev]: !0,
                [n(435544).G]: !0,
                [n(46241).V]: !0,
                [n(485890).mu]: !0,
                [n(708628).yK]: !0,
                [n(350110).ez]: !0
            };

            function r(e) {
                return !(0, n(496282).w1)(e.table) || e.table in i ? `versions/${e.id}:${e.table}` : `versions/${e.id}:${e.table}:${e.spaceId}`
            }

            function s(e) {
                let t = e.indexOf("/");
                if (-1 === t) return;
                let i = e.substring(t + 1).split(":");
                return 2 === i.length ? n(496282).L3.fromPointerLike({
                    table: i[1],
                    id: i[0]
                }) : 3 === i.length ? n(496282).L3.fromPointerLike({
                    table: i[1],
                    id: i[0],
                    spaceId: i[2]
                }) : void 0
            }

            function a(e) {
                return `collection/${e}`
            }

            function o(e) {
                if (e) return {
                    edgeId: e
                }
            }

            function u(e) {
                if (e.edgeType.includes("👉") || e.edgeType.includes("👈")) throw Error("Assertion failure, why are there emojis in your edge type");
                let t = e.edgeType.replace(/{/g, "👉").replace(/}/g, "👈");
                return `edge/changed/${t}:${e.sourceTable}:${e.sourceId}`
            }

            function l(e) {
                return `typedDatabasesListChanged/${e.spaceId}-${e.databaseType}`
            }

            function c(e) {
                return `activity/${e}`
            }

            function d(e) {
                return `activity/${e}`
            }

            function p(e) {
                return `activity/author/${e}`
            }

            function m(e) {
                return `notification/${e}`
            }

            function g({
                spaceId: e,
                connectorType: t,
                userId: n,
                sessionId: i
            }) {
                return `connector_connection_status/${e}/${t}/${n}/${i}`
            }

            function f(e) {
                return `user_page_visit/${e}`
            }

            function h({
                botId: e,
                accountId: t,
                calendarId: i
            }) {
                let r = (0, n(4962).gB)(i);
                return `cron/events_updated/${e}/${t}/${r}`
            }

            function v({
                botId: e
            }) {
                return `cron/calendar_updated/${e}`
            }

            function y({
                botId: e,
                accountId: t,
                calendarId: i
            }) {
                let r = (0, n(4962).gB)(i);
                return `cron/calendar_selection_toggled/${e}/${t}/${r}`
            }

            function b(e) {
                return `in_app_activity_dismissals/${e}`
            }

            function _({
                notionUserId: e,
                spaceId: t
            }) {
                return `connections/updated/${e}/${t}`
            }

            function q(e) {
                return `backlinks/${e}`
            }

            function w(e) {
                return `page_visit/${e}`
            }

            function T(e) {
                return `user_shared_pages_in_space/${e.spaceId}-${e.userId}`
            }

            function k(e) {
                return `subscription_banner/${e.spaceId}`
            }

            function S(e) {
                return `billing_data_key/${e.spaceId}`
            }

            function R(e) {
                return `upgrade_requests/${e.spaceId}`
            }

            function D(e) {
                return `billing_subscription_banner/${e.spaceId}`
            }

            function I(e) {
                return `ai_usage_eligibility/${e.spaceId}`
            }

            function N(e) {
                return `presence/${e}`
            }

            function j(e) {
                return `duplication_job/${e}`
            }

            function $(e) {
                return `diagnosticPing/${e}`
            }

            function E(e) {
                return `presence/drawing/${e}`
            }

            function L(e) {
                return `custom_emoji/${e}`
            }

            function C(e) {
                return `current_space_permission_groups/${e}`
            }

            function O(e) {
                return `space_user_counts_by_type/${e}`
            }

            function M(e) {
                return `current_space_group_membership/${e.spaceId}-${e.userId}`
            }

            function F(e) {
                return `trusted_domains/${e.spaceId}`
            }

            function A(e) {
                return `page_updates/${e.updateSource}/${e.pageId}`
            }

            function P(e) {
                return `update_all_agents/${e.spaceId}`
            }

            function x(e) {
                return `update_factories/${e.spaceId}`
            }

            function B(e) {
                return `transcription_block/${e.spaceId}/${e.userId}`
            }

            function z(e) {
                return `inference_transcripts/${e.spaceId}/${e.userId}`
            }

            function V(e) {
                return `workflow_transcripts/${e.workflowId}`
            }

            function U(e) {
                return `inference_transcripts_unread_count/${e.spaceId}/${e.userId}`
            }

            function W(e) {
                if ("string" != typeof e || 0 === e.length) return;
                let [t, n] = e.split(":", 3);
                if (("unread" === t || "seen" === t) && n) return {
                    eventType: t,
                    threadId: n
                }
            }

            function G(e) {
                return `teams_in_space_v2/${e}`
            }

            function Q(e) {
                return `team_membership_update/${e}`
            }
            let K = "x-notion-refetch-from-message-store-key"
        },
        579929: (e, t, n) => {
            let i, r, s, a, o, u, l, c;
            n.d(t, {
                zG: () => eh,
                yn: () => S,
                Yq: () => em,
                SU: () => R,
                K6: () => et,
                FA: () => en,
                ry: () => ee,
                i$: () => ei,
                UJ: () => K,
                XE: () => H,
                lD: () => X,
                Dy: () => ef,
                zg: () => ey,
                UL: () => el,
                x: () => ep,
                B1: () => e_,
                uQ: () => eb,
                al: () => ew,
                cP: () => ed,
                Yl: () => J
            }), n(16280), n(944114), n(898992), n(354520), n(672577), n(803949), n(581454);
            var d = () => n(773352);
            n(737550);
            class p {
                performRequests;
                batchSize;
                maxWorkers;
                maxDelayMs;
                timeSource;
                queue = [];
                workerTasks = new Map;
                nextWorkerId = 0;
                currentWorkers = 0;
                requestsRunning = 0;
                awaitingTimeout = !1;
                constructor(e) {
                    const {
                        performRequests: t,
                        batchSize: i,
                        maxWorkers: r,
                        maxDelayMs: s
                    } = e;
                    this.performRequests = t, this.batchSize = i, this.maxWorkers = r, this.maxDelayMs = s, this.timeSource = n(882108).u
                }
                getStats() {
                    return {
                        queue: this.queue.length,
                        running: this.requestsRunning,
                        workers: this.currentWorkers
                    }
                }
                updateTimeSource(e) {
                    this.timeSource = e
                }
                updateBatchSize(e) {
                    this.batchSize = e
                }
                updateMaxDelayMs(e) {
                    this.maxDelayMs = e
                }
                updateMaxWorkers(e) {
                    this.maxWorkers = e, this.dequeueAfterFilledBatchOrTimeout()
                }
                enqueue(e) {
                    let t = n(975162).yX();
                    return this.queue.push([e, t]), this.dequeueAfterFilledBatchOrTimeout(), Object.assign(t.promise, {
                        canCancel: () => this.queue.some(e => e[1] === t),
                        cancel: e => {
                            let n = this.queue.findIndex(e => e[1] === t);
                            n >= 0 && (this.queue.splice(n, 1), t.reject(e))
                        }
                    })
                }
                dequeueAfterFilledBatchOrTimeout() {
                    this.queue.length >= this.batchSize ? this.dequeue() : this.awaitingTimeout || (this.awaitingTimeout = !0, this.timeSource.setTimeout(() => {
                        this.awaitingTimeout = !1, this.dequeue()
                    }, this.maxDelayMs))
                }
                dequeue = async () => {
                    let e, t;
                    if (this.currentWorkers >= this.maxWorkers || 0 === this.queue.length) return;
                    let i = this.nextWorkerId;
                    this.nextWorkerId++, this.currentWorkers++;
                    let r = this.queue.splice(0, this.batchSize),
                        s = r.map(e => e[0]);
                    this.workerTasks.set(i, r), this.requestsRunning += r.length;
                    try {
                        e = await this.performRequests(s)
                    } catch (e) {
                        t = (0, n(161179).A)(e)
                    }
                    try {
                        if (t)
                            for (let e = 0; e < r.length; e++) r[e][1].reject(t);
                        else if (e)
                            for (let t = 0; t < r.length; t++) {
                                let n = r[t],
                                    i = e[t];
                                n[1].resolve(i)
                            }
                    } catch (e) {}
                    this.currentWorkers--, this.workerTasks.delete(i), this.requestsRunning -= r.length, this.dequeueAfterFilledBatchOrTimeout()
                };
                cancel() {
                    let e = this.workerTasks,
                        t = this.queue;
                    for (let t of (this.workerTasks = new Map, this.queue = [], e.values()))
                        for (let e of t) e[1].reject(Error("CanceledTask."));
                    for (let e of t) e[1].reject(Error("CanceledTask."))
                }
            }
            var m = () => n(416607);
            let g = window.location.host.endsWith(n(986939).A.publicDomainName);

            function f(e) {
                n(374176).default.afterNextFlush(() => {
                    n(218744).default.checkGate({
                        gateName: "message_store_client_send_request_metric_enabled"
                    }) && (0, n(104310).u)({
                        event: {
                            eventName: "message_store.client.send_request",
                            eventProperties: e
                        }
                    })
                })
            }
            let h = async () => Promise.all([n.e(71136), n.e(36733)]).then(n.bind(n, 443560)),
                v = 90 * n(627179).TD,
                y = .5 * n(627179).TD,
                b = 30 * n(627179).TD,
                _ = 10 * n(627179).TD,
                q = {
                    versions: !0,
                    collection: !0,
                    activity: !0,
                    notification: !0,
                    teams_in_space: !0,
                    user_page_visit: !0,
                    backlinks: !0,
                    user_content: !0,
                    page_visit: !0,
                    user_shared_pages_in_space: !0,
                    presence: !0,
                    duplication_job: !0,
                    diagnosticPing: !0,
                    _other: !0
                };

            function w(e) {
                let t = e.indexOf("/");
                if (-1 === t) return "_other";
                let n = e.substring(0, t);
                return n in q ? n : "_other"
            }

            function T(e, t) {
                var i;
                let r = w(t),
                    s = null == (i = (0, n(568479).Zg)(t)) ? void 0 : i.table,
                    a = e[r];
                if (a) {
                    if (s) {
                        let e = a[s];
                        if (!e) return;
                        a[s] = e - 1
                    }
                    a._total -= 1, e._total -= 1
                }
            }

            function k(e) {
                return {
                    _id: e,
                    charactersSent: 0,
                    requestsSent: 0,
                    requestsTimedOut: 0,
                    responsesReceivedWithoutHandlers: 0,
                    successfulResponsesReceived: 0,
                    unsuccessfulResponsesReceived: 0,
                    invalidMessagesReceived: 0,
                    notificationsReceived: 0,
                    messagesReceived: 0
                }
            }

            function S() {
                return { ...z
                }
            }

            function R(e) {
                let t = z;
                if (e._id === t._id) return {
                    charactersSent: t.charactersSent - e.charactersSent,
                    requestsSent: t.requestsSent - e.requestsSent,
                    requestsTimedOut: t.requestsTimedOut - e.requestsTimedOut,
                    responsesReceivedWithoutHandlers: t.responsesReceivedWithoutHandlers - e.responsesReceivedWithoutHandlers,
                    successfulResponsesReceived: t.successfulResponsesReceived - e.successfulResponsesReceived,
                    unsuccessfulResponsesReceived: t.unsuccessfulResponsesReceived - e.unsuccessfulResponsesReceived,
                    invalidMessagesReceived: t.invalidMessagesReceived - e.invalidMessagesReceived,
                    notificationsReceived: t.notificationsReceived - e.notificationsReceived,
                    messagesReceived: t.messagesReceived - e.messagesReceived
                }
            }
            let D = new Map,
                I = new Map;
            class N extends Map {
                isCancelable(e) {
                    return !!this.getCancelable(e)
                }
                getCancelable(e) {
                    let t = this.get(e);
                    if (null != t && t.canCancel()) return t
                }
            }
            let j = new N,
                $ = new N,
                E = new Map,
                L = new Map,
                C = Date.now(),
                O = {
                    _total: 0
                },
                M = "messageStoreInternals",
                F = new(d()).BatchedLogger({
                    from: M,
                    team: "no-team-specified",
                    type: "BulkDebug",
                    level: "info",
                    maxLength: 250,
                    logToConsole: !1
                }),
                A = 0,
                P = 0,
                x = 0,
                B = 0,
                z = k(0),
                V = 0,
                U = n(882108).u,
                W = !1,
                G = "uninitialized",
                Q = !0;

            function K() {
                return "open" === G
            }

            function H() {
                return "uninitialized" === G || "opening" === G
            }
            let X = !0;

            function J(e, t) {
                let n = L.get(e);
                n || (n = {}, L.set(e, n)), Object.assign(n, t)
            }

            function Y(e) {
                F.log({
                    level: "info",
                    team: "no-team-specified",
                    from: M,
                    type: e
                })
            }

            function Z() {
                s = ea(this), Y(`ping:${s}`), r = Date.now()
            }

            function ee() {
                return O
            }

            function et() {
                return { ...eT.getStats(),
                    batchSubscribeQueue: eS.getStats(),
                    batchUnsubscribeQueue: eR.getStats()
                }
            }

            function en(e) {
                let {
                    lastOfflineTimestamp: t
                } = n(205885).A.getState(), i = et(), {
                    batchSubscribeQueue: u,
                    batchUnsubscribeQueue: l
                } = i;
                return {
                    currentConnectionCounters: z,
                    timeSinceLastIncomingPing: r && e - r,
                    lastIncomingPingTransportType: s,
                    timeSinceLastResponseReceived: a && e - a,
                    timeSinceLastReadyStateChange: o && e - o,
                    timeSinceLastOffline: t && e - t,
                    largestMessageSize: V || void 0,
                    messageStoreRequestsQueued: i.queue,
                    messageStoreRequestsRunning: i.running,
                    batchSubscribeQueue: u,
                    batchUnsubscribeQueue: l,
                    messageStoreConnectionState: G,
                    uptime: e - C,
                    subscriptionCounters: O,
                    primusEndEventsReceived: P,
                    primusErrorEventsReceived: x,
                    connectionResetsDueToFailedRequests: B
                }
            }

            function ei() {
                let e = [];
                I.forEach((t, i, r) => {
                    let s = (0, n(568479).Zg)(i);
                    !s || t.value && e.push({
                        id: s.id,
                        table: s.table,
                        version: t.value
                    })
                });
                let t = n(381453).$z(e, e => e.table),
                    i = {};
                return Object.entries(t).map(([e, t]) => {
                    let n = {};
                    return t.forEach(e => {
                        n[e.id] = e.version
                    }), {
                        table: e,
                        value: n
                    }
                }).forEach(e => {
                    i[e.table] = e.value
                }), i
            }

            function er(e) {
                switch (F.log({
                    level: "info",
                    team: "no-team-specified",
                    from: M,
                    type: "readyStateChange",
                    data: {
                        message: e
                    }
                }), o = Date.now(), e) {
                    case "end":
                        G = "closed";
                        break;
                    case "open":
                        G = "open";
                        break;
                    case "opening":
                        G = "opening"
                }
            }
            let es = n(381453).Bj(() => eo(), () => "primus");

            function ea(e) {
                var t;
                let n = null == e || null == (t = e.socket) || null == (t = t.transport) || null == (t = t.query) ? void 0 : t.transport;
                if ("websocket" === n || "polling" === n) return n
            }
            async function eo() {
                var e;
                if (g) return;
                A += 1;
                let {
                    createClient: t
                } = await h(), r = window.location.hostname.endsWith(".notion.com") ? "message_store_client_config_com" : "message_store_client_config", s = n(986939).A.isAdminMode || n(986939).A.isLocalDevelopment ? void 0 : n(218744).default.getConfigKey(r, "url_override"), o = n(218744).default.getConfigKey(r, "min_reconnect_delay_secs"), l = n(218744).default.getConfigKey(r, "max_reconnect_delay_secs"), c = n(218744).default.checkGate({
                    gateName: "messagestore_client_close_on_pagehide"
                }), p = t({
                    minReconnectDelayMs: o * n(627179).TD,
                    maxReconnectDelayMs: l * n(627179).TD,
                    urlOverride: s,
                    closeOnBeforeunload: !c
                });
                if (p.on("data", e => (function(e) {
                        let t = performance.now();
                        z.messagesReceived += 1;
                        let i = (0, n(358519).tf)(n(652072).hX, e);
                        if (i) {
                            z.invalidMessagesReceived += 1, d().rateLimitedLog({
                                level: "warning",
                                team: "no-team-specified",
                                from: M,
                                type: "ValidationError",
                                data: {
                                    miscDataToConvertToString: e
                                },
                                error: (0, m().convertErrorToLog)(i)
                            }), ej({
                                consumptionStart: t,
                                validationEnd: performance.now(),
                                eventType: "unknown",
                                listenerCount: 0,
                                isNotification: !1,
                                errorType: "validation_error"
                            });
                            return
                        }
                        let r = performance.now();
                        if ("response" === e.type) {
                            var s;
                            let {
                                requestId: n,
                                status: i,
                                result: o
                            } = e, u = E.get(n);
                            if (E.delete(n), F.log({
                                    level: "info",
                                    team: "no-team-specified",
                                    from: M,
                                    type: "responseReceived",
                                    data: {
                                        requestId: n,
                                        response: i,
                                        time: u && Date.now() - u.sendTime,
                                        internalProcessingTimeMs: null == (s = e.result) ? void 0 : s.internalProcessingTimeMs
                                    }
                                }), !u) {
                                z.responsesReceivedWithoutHandlers += 1, ej({
                                    consumptionStart: t,
                                    validationEnd: r,
                                    eventType: "response",
                                    listenerCount: 0,
                                    isNotification: !1,
                                    errorType: "response_without_handler"
                                });
                                return
                            }
                            a = Date.now(), window.clearTimeout(u.timeout), "ok" === i ? (z.successfulResponsesReceived += 1, u.resolve(o)) : (z.unsuccessfulResponsesReceived += 1, u.reject(new eC(o))), ej({
                                consumptionStart: t,
                                validationEnd: r,
                                eventType: "response",
                                listenerCount: 0,
                                isNotification: !1,
                                errorType: "ok" !== i ? "unsuccessful_response" : void 0
                            })
                        } else {
                            z.notificationsReceived += 1;
                            let {
                                ackId: n,
                                key: i,
                                status: s,
                                value: a,
                                version: o,
                                passThroughData: u
                            } = e;
                            n && eO({
                                method: "ackNotification",
                                request: {
                                    ackId: n
                                }
                            });
                            let {
                                listeners: l
                            } = D.get(i) || {};
                            if (!l) return void ej({
                                consumptionStart: t,
                                validationEnd: r,
                                eventType: w(i),
                                listenerCount: 0,
                                isNotification: !0,
                                errorType: "no_listeners"
                            });
                            "error" !== s && I.set(i, {
                                version: o,
                                value: a,
                                passThroughData: u
                            });
                            let c = 0;
                            for (let {
                                    listener: e
                                } of l) try {
                                e("error" === s ? {
                                    key: i,
                                    value: void 0,
                                    error: a,
                                    passThroughData: u,
                                    version: -1
                                } : {
                                    key: i,
                                    value: a,
                                    passThroughData: u,
                                    version: o
                                })
                            } catch (e) {
                                c += 1, d().log({
                                    level: "warning",
                                    team: "no-team-specified",
                                    from: M,
                                    type: "ListenerError",
                                    error: (0, m().convertErrorToLog)(e)
                                })
                            }
                            ej({
                                consumptionStart: t,
                                validationEnd: r,
                                eventType: w(i),
                                listenerCount: l.length,
                                isNotification: !0,
                                errorType: c > 0 ? "listener_error" : "error" === s ? "notification_error" : void 0
                            })
                        }
                    })(e)), p.on("open", () => {
                        let e;
                        Y("open"), e = n(260220).A.state.numConnectionAttempts, n(218744).default.checkGate({
                            gateName: "log_messagestore_attempts"
                        }) && (0, n(104310).u)({
                            event: {
                                eventName: "message_store.client.num_connection_attempts",
                                eventProperties: {
                                    num_connection_attempts: e
                                }
                            }
                        }), n(260220).A.setState({
                            isConnected: !0,
                            numConnectionAttempts: 0
                        }), z = k(z._id + 1), Q ? (Q = !1, eu()) : (u && window.clearTimeout(u), u = window.setTimeout(() => {
                            K() && eu()
                        }, 1e3))
                    }), p.on("reconnected", e => {
                        ec(), F.log({
                            level: "info",
                            team: "no-team-specified",
                            from: M,
                            type: "reconnected",
                            data: {
                                message: `Reconnected in ${null==e?void 0:e.duration} ms`
                            }
                        })
                    }), p.on("reconnect", () => {
                        Y("reconnect")
                    }), p.on("reconnect scheduled", e => {
                        n(260220).A.update(e => ({
                            isConnected: !1,
                            numConnectionAttempts: e.numConnectionAttempts + 1
                        })), F.log({
                            level: "info",
                            team: "no-team-specified",
                            from: M,
                            type: "reconnect scheduled",
                            data: {
                                message: `Reconnecting in ${null==e?void 0:e.scheduled} ms, attempt ${null==e?void 0:e.attempt} of ${null==e?void 0:e.retries}`
                            }
                        })
                    }), p.on("reconnect timeout", () => {
                        Y("reconnect timeout")
                    }), p.on("reconnect failed", () => {
                        Y("reconnect failed")
                    }), p.on("timeout", () => {
                        Y("timeout")
                    }), p.on("destroy", () => {
                        Y("destroy")
                    }), p.on("close", () => {
                        Y("close")
                    }), p.on("online", () => {
                        Y("online")
                    }), p.on("offline", () => {
                        Y("offline")
                    }), p.on("error", e => {
                        let t;
                        t = "TransportError" === e.type ? {
                            level: "info",
                            team: "no-team-specified",
                            from: M,
                            type: "primusTransportError",
                            error: (0, m().convertErrorToLog)(e)
                        } : {
                            level: "error",
                            team: "no-team-specified",
                            from: M,
                            type: "unknownPrimusError",
                            error: (0, m().convertErrorToLog)(e)
                        }, (0, n(69741).rQ)(1) && d().rateLimitedLog(t), F.log(t), x += 1
                    }), p.on("incoming::ping", Z), p.on("readyStateChange", er), p.on("end", () => {
                        Y("end"), P += 1, p.online && eE(p)
                    }), null == (e = i) || e.abort(), c) {
                    i = new AbortController;
                    let e = "onpagehide" in window ? "pagehide" : "unload";
                    window.addEventListener(e, () => {
                        p.end()
                    }, {
                        signal: i.signal
                    })
                }
                return window.__primusClient = p, p
            }

            function eu() {
                u && (window.clearTimeout(u), u = void 0), D.forEach(({
                    authorizationToken: e
                }, t) => {
                    let n = I.get(t);
                    eg(t, n ? n.version : -1, e).catch(e => {
                        d().log({
                            level: "warning",
                            team: "no-team-specified",
                            from: M,
                            type: "ReconnectSubscriptionError",
                            error: (0, m().convertErrorToLog)(e)
                        })
                    })
                })
            }

            function el(e) {
                if (l) throw Error("Having more than one onRestartMessageStoreConnectionHandler is not currently supported");
                l = e
            }

            function ec() {
                var e;
                for (let e of (W = !1, eS.cancel(), eR.cancel(), E.values())) window.clearTimeout(e.timeout), e.reject(Error("Cancelled pending requests"));
                E.clear(), j.clear(), $.clear(), eD.cancel(), eT.cancel(), L.clear(), O = {
                    _total: 0
                }, null == (e = l) || e()
            }
            async function ed(e) {
                var t;
                let {
                    key: n,
                    field: i,
                    updates: r,
                    ttl: s,
                    onDisconnectFields: a,
                    authorizationToken: o
                } = e, u = await e$();
                await (null == (t = eN({
                    method: "updateField",
                    request: {
                        key: n,
                        field: i,
                        updates: r,
                        ttl: s,
                        onDisconnectFields: a,
                        authorizationToken: o
                    },
                    primusTransportType: u
                })) ? void 0 : t.response)
            }
            async function ep(e) {
                var t;
                let {
                    key: n,
                    field: i,
                    value: r,
                    ttl: s
                } = e, a = await e$();
                await (null == (t = eN({
                    method: "setField",
                    request: {
                        key: n,
                        field: i,
                        value: r,
                        ttl: s
                    },
                    primusTransportType: a
                })) ? void 0 : t.response)
            }
            async function em(e) {
                if (g) return {
                    type: "messageStoreDisabled"
                };
                let t = n(92513).JW(),
                    i = (0, n(568479).VF)(t),
                    r = "diagnosticPing",
                    s = n(975162).yX(),
                    a = e.logToConsole ? ? !1,
                    o = {};

                function u(e, t) {
                    o[e] = t, a && console.log(`diagnosticPing ${e}=${t}`)
                }
                async function l() {
                    var e;
                    let n = await e$(),
                        a = performance.now();
                    await e_({
                        key: i,
                        authorizationToken: void 0,
                        listener: ({
                            key: e,
                            value: t
                        }) => {
                            t && s.resolve(performance.now())
                        },
                        listenerId: r
                    });
                    let l = performance.now(),
                        c = l - a;
                    u("registerSubscriptionResponseMs", c);
                    let d = await (null == (e = eN({
                        method: "diagnosticPing",
                        request: {
                            id: t
                        },
                        primusTransportType: n,
                        onRequestSent: () => {
                            u("diagnosticPingEnqueuedMs", performance.now() - l)
                        }
                    })) ? void 0 : e.response);
                    if (!d) return {
                        type: "canceled",
                        key: i,
                        ...o
                    };
                    let p = function(e) {
                            let t = o[e];
                            if (void 0 === t) throw Error(`Assertion failure, expected timing for "${e}" to be defined`);
                            return t
                        }("diagnosticPingEnqueuedMs"),
                        m = d.setValueTime;
                    u("diagnosticPingServerSideSetValueMs", m);
                    let g = performance.now() - l;
                    u("diagnosticPingResponseMs", g);
                    let f = await s.promise - l;
                    u("diagnosticPingNotificationMs", f);
                    let h = performance.now();
                    await ew(i, r);
                    let v = performance.now();
                    return {
                        type: "success",
                        key: i,
                        registerSubscriptionResponseMs: c,
                        diagnosticPingEnqueuedMs: p,
                        diagnosticPingServerSideSetValueMs: m,
                        diagnosticPingResponseMs: g,
                        diagnosticPingNotificationMs: f,
                        unregisterSubscriptionResponseMs: v - h,
                        totalMs: v - a
                    }
                }
                let c = await n(975162).Vq(l().catch(e => (n(419750).O8(e, {
                    team: "no-team-specified",
                    from: M,
                    type: "diagnosticPingError",
                    data: {
                        key: i
                    }
                }), {
                    type: "error",
                    key: i,
                    ...o
                })), b);
                return c.timeout ? {
                    type: "timeout",
                    key: i,
                    ...o
                } : c.result
            }
            async function eg(e, t, i) {
                X && J(e, {
                        latestRegisterSubscriptionRequestTimestamp: Date.now()
                    }),
                    function(e, t) {
                        var i;
                        let r = w(t),
                            s = null == (i = (0, n(568479).Zg)(t)) ? void 0 : i.table,
                            a = e[r];
                        if (a || (a = {
                                _total: 0
                            }, e[r] = a), s) {
                            let e = a[s] || 0;
                            a[s] = e + 1
                        }
                        a._total += 1, e._total += 1
                    }(O, e);
                let r = $.getCancelable(e);
                if (r) r.cancel(Error("Cancelled by sendRegisterSubscription()"));
                else {
                    let n = eS.enqueueCancelable({
                        key: e,
                        version: t,
                        authorizationToken: i
                    });
                    if (n) {
                        j.set(e, n.asyncQueuePromise);
                        try {
                            await n.response
                        } finally {
                            j.delete(e)
                        }
                    }
                }
                X && J(e, {
                    latestRegisterSubscriptionResponseTimestamp: Date.now()
                })
            }

            function ef(e) {
                return j.isCancelable(e)
            }

            function eh(e, t) {
                let n = j.getCancelable(e);
                if (!n) throw Error(`Assertion failure, subscription request for key ${e} does not exist or is not cancelable`);
                eq(e, t) && (T(O, e), n.cancel(Error("Cancelled by cancelRegisterSubscription()")), X && L.delete(e))
            }
            async function ev(e, t = !0) {
                X && J(e, {
                    latestUnregisterSubscriptionRequestTimestamp: Date.now()
                }), T(O, e);
                let n = j.getCancelable(e);
                if (n) n.cancel(Error("Cancelled by sendUnregisterSubscription()"));
                else {
                    let n = eR.enqueueCancelable({
                        key: e
                    });
                    if (n) {
                        t && $.set(e, n.asyncQueuePromise);
                        try {
                            await n.response
                        } finally {
                            $.delete(e)
                        }
                    }
                }
                X && L.delete(e)
            }
            async function ey(e, t) {
                var n;
                let i = await e$();
                await (null == (n = eN({
                    method: "registerOnDisconnect",
                    request: {
                        disconnectId: e,
                        operations: t
                    },
                    primusTransportType: i
                })) ? void 0 : n.response)
            }
            async function eb(e) {
                var t;
                let n = await e$();
                await (null == (t = eN({
                    method: "unregisterOnDisconnect",
                    request: {
                        disconnectId: e
                    },
                    primusTransportType: n
                })) ? void 0 : t.response)
            }
            async function e_({
                key: e,
                authorizationToken: t,
                listener: n,
                listenerId: i
            }) {
                if (g) return;
                let {
                    listeners: r
                } = D.get(e) || {};
                if (!r || 0 === r.length) {
                    r = [{
                        listener: n,
                        listenerId: i
                    }], D.set(e, {
                        authorizationToken: t,
                        listeners: r
                    }), K() ? await eg(e, -1, t) : "uninitialized" === G && await es();
                    return
                }
                if (!r.find(e => e.listenerId === i)) {
                    r = [...r, {
                        listener: n,
                        listenerId: i
                    }], D.set(e, {
                        authorizationToken: t,
                        listeners: r
                    });
                    let s = I.get(e);
                    s && n({
                        key: e,
                        value: s.value,
                        passThroughData: s.passThroughData
                    });
                    return
                }
                r = [...r.filter(e => e.listenerId !== i), {
                    listener: n,
                    listenerId: i
                }], D.set(e, {
                    authorizationToken: t,
                    listeners: r
                })
            }

            function eq(e, t) {
                if (g) return !1;
                let {
                    authorizationToken: n,
                    listeners: i
                } = D.get(e) || {};
                if (!i) return !1;
                let r = i.filter(e => e.listenerId !== t);
                return r.length !== i.length && (0 === r.length ? (D.delete(e), I.delete(e), !0) : (D.set(e, {
                    authorizationToken: n,
                    listeners: r
                }), !1))
            }
            async function ew(e, t, n = !0) {
                eq(e, t) && K() && await ev(e, n)
            }
            let eT = new(n(839621)).O(20);
            class ek {
                queue;
                constructor(e, t) {
                    this.methodName = e, this.performRequests = t, this.queue = new p({
                        performRequests: this.wrappedPerformRequests,
                        batchSize: 250,
                        maxDelayMs: y,
                        maxWorkers: 1
                    })
                }
                updateTimeSource(e) {
                    this.queue.updateTimeSource(e)
                }
                getStats() {
                    return this.queue.getStats()
                }
                cancel() {
                    this.queue.cancel()
                }
                wrappedPerformRequests = async e => {
                    e.length, this.methodName;
                    let t = this.performRequests(e);
                    if (!t) throw Error("MessageStore is disabled.");
                    let n = await t;
                    if (!n) throw Error("Request cancelled.");
                    return n
                };
                enqueueCancelable(e) {
                    if (g) return;
                    let t = this.queue.enqueue(e),
                        n = t.catch(e => {
                            this.methodName, e.message
                        });
                    return {
                        asyncQueuePromise: t,
                        response: n
                    }
                }
            }
            let eS = new ek("registerSubscription", e => eD.enqueue(async () => {
                    var t;
                    let n = eN({
                        method: "registerBatchSubscriptions",
                        request: {
                            subscriptions: e
                        },
                        primusTransportType: await e$()
                    });
                    return null == (t = await (null == n ? void 0 : n.response)) ? void 0 : t.responses
                })),
                eR = new ek("unregisterSubscription", e => eD.enqueue(async () => {
                    var t;
                    let n = await e$(),
                        i = eN({
                            method: "unregisterBatchSubscriptions",
                            request: {
                                keys: e.map(e => e.key)
                            },
                            primusTransportType: n
                        });
                    return null == (t = await (null == i ? void 0 : i.response)) ? void 0 : t.keys.map(e => ({
                        key: e
                    }))
                })),
                eD = new(n(839621)).O(1);

            function eI() {
                if (!c) return;
                let {
                    totalRequests: e,
                    requestCounts: t,
                    startTime: n
                } = c;
                e > 3e3 && d().log({
                    level: "warning",
                    team: "no-team-specified",
                    from: M,
                    type: "BurstThroughputExceeded",
                    data: {
                        time: Date.now() - n,
                        totalRequests: e,
                        requestCounts: t
                    }
                }), c = void 0
            }

            function eN(e) {
                if (g) return;
                let {
                    method: t,
                    request: i,
                    primusTransportType: r
                } = e, s = n(680007).default.DO_NOT_USE_markLegacy("message_store.client.send_request.in_queue_time");
                f({
                    status: "enqueued",
                    primus_transport_type: r,
                    endpoint: t
                }), X && (c || (c = {
                    startTime: Date.now(),
                    totalRequests: 0,
                    requestCounts: {}
                }, U.setTimeout(eI, _)), c.totalRequests += 1, c.requestCounts[t] = (c.requestCounts[t] || 0) + 1);
                let a = eT.enqueue(() => {
                    var a, o;
                    let u = n(92513).JW();
                    o = eT.getStats(), n(374176).default.afterNextFlush(() => {
                        n(218744).default.checkGate({
                            gateName: "message_store_client_send_request_metric_enabled"
                        }) && ((0, n(104310).u)({
                            event: {
                                eventName: "message_store.client.send_request.queue_running_size",
                                eventProperties: {
                                    value: o.running
                                }
                            }
                        }), (0, n(195857).DO_NOT_USE_trackLegacy)("message_store.client.send_request.queue_backup_size", {
                            value: o.queue
                        }))
                    });
                    let l = n(680007).default.DO_NOT_USE_markLegacy("message_store.client.send_request.round_trip_time");
                    n(680007).default.DO_NOT_USE_measureLegacy(s, {
                        data: {
                            endpoint: t
                        }
                    });
                    let c = n(975162).yX(),
                        p = Date.now(),
                        g = X ? window.setTimeout(() => {
                            "open" === G && (z.requestsTimedOut += 1, F.log({
                                level: "info",
                                team: "no-team-specified",
                                from: M,
                                type: "requestTimeout",
                                data: {
                                    requestId: u,
                                    time: Date.now() - p
                                }
                            }))
                        }, v) : void 0;
                    E.set(u, {
                        resolve: c.resolve,
                        reject: c.reject,
                        timeout: g,
                        sendTime: p
                    }), F.log({
                        level: "info",
                        team: "no-team-specified",
                        from: M,
                        type: "requestSent",
                        data: {
                            requestId: u,
                            method: t
                        }
                    });
                    let h = {
                        type: `${n(986939).A.messageStore.api}/${t}`,
                        requestId: u,
                        ...i
                    };
                    return z.requestsSent += 1, eL(h), null == (a = e.onRequestSent) || a.call(e), c.promise.then(e => {
                        n(680007).default.DO_NOT_USE_measureLegacy(l, {
                            data: {
                                endpoint: t
                            }
                        }), f({
                            status: "success",
                            primus_transport_type: r,
                            endpoint: t
                        })
                    }).catch(e => {
                        d().rateLimitedLog({
                            level: "error",
                            from: "messageStore.internals.sendRequest",
                            team: "editor",
                            type: "MessageStoreRequestFailed",
                            error: (0, m().convertErrorToLog)(e)
                        });
                        let n = eT.getStats();
                        f({
                            status: "failure",
                            primus_transport_type: r,
                            endpoint: t,
                            queue_running_size: n.running,
                            queue_backup_size: n.queue
                        })
                    }), c.promise
                });
                return {
                    response: a.catch(e => {
                        e instanceof eC && !W ? (W = !0, B += 1, Y("connectionResetDueToFailedRequest"), es().then(e => {
                            null == e || e.end()
                        }), e.message) : e.message
                    }),
                    asyncQueuePromise: a
                }
            }

            function ej(e) {
                let t = performance.now(),
                    i = e.validationEnd - e.consumptionStart,
                    r = t - e.validationEnd;
                n(680007).default.measure({
                    metricName: "msgstore_client_consumption",
                    startTime: e.consumptionStart,
                    endTime: t
                }, {
                    data: {
                        event_type: e.eventType,
                        listener_count: e.listenerCount,
                        is_notification: e.isNotification,
                        validation_time_ms: i,
                        dispatch_time_ms: r,
                        primus_transport_type: s ? ? "unknown",
                        error_type: e.errorType
                    }
                })
            }
            async function e$() {
                let e = await es();
                if (e) {
                    let t = ea(e);
                    if (t) return t
                }
                return "unknown"
            }
            async function eE(e) {
                var t, i;
                e.off("readyStateChange", er), d().log({
                    level: "info",
                    team: "no-team-specified",
                    from: M,
                    type: "messageStoreEnd",
                    error: {
                        message: `SocketId: ${null==(t=e.socket)?void 0:t.id} Query:${null==(i=e.transport)?void 0:i.query}`
                    }
                }), u && (window.clearTimeout(u), u = void 0), ec(), U.setTimeout(() => {
                    e.destroy()
                }, 0), e === await es() && (es.cache.clear(), U.setTimeout(() => {
                    es()
                }, 2 * n(627179).TD))
            }
            async function eL(e) {
                let t = JSON.stringify(e);
                z.charactersSent += t.length, V < t.length && (V = t.length);
                let n = await es();
                null == n || n.write(e)
            }
            class eC extends Error {
                constructor(e) {
                    super(e), this.name = "FailedMessageStoreRequestError"
                }
            }
            async function eO(e) {
                var t;
                if (g) return;
                let {
                    method: i,
                    request: r
                } = e;
                t = {
                    primus_transport_type: await e$()
                }, n(374176).default.afterNextFlush(() => {
                    n(218744).default.checkGate({
                        gateName: "send_request_ack_metric_enabled"
                    }) && (0, n(104310).u)({
                        event: {
                            eventName: "message_store.client.send_request_ack",
                            eventProperties: t
                        }
                    })
                }), eT.enqueue(() => (eL({
                    type: `${n(986939).A.messageStore.api}/${i}`,
                    requestId: n(92513).JW(),
                    ...r
                }), Promise.resolve({})))
            }
        },
        616579: (e, t, n) => {
            n.d(t, {
                j: () => i
            });

            function i(e) {
                var t;
                let {
                    environment: i,
                    spaceId: r
                } = e, s = null == (t = i.currentUser) ? void 0 : t.id;
                if (s) return (0, n(273314).si)({
                    environment: i,
                    spaceId: r,
                    userId: s
                })
            }
        },
        652072: (e, t, n) => {
            n.d(t, {
                hX: () => k,
                ol: () => S
            });
            let i = n(969475).union([n(969475).number(), n(969475).string(), n(969475).boolean(), n(969475).isNull(), n(969475).array(n(969475).string())]),
                r = n(969475).undefinable(i),
                s = n(969475).union([i, n(969475).record(n(969475).string(), i)]),
                a = n(969475).union([r, n(969475).record(n(969475).string(), r)]),
                o = n(969475).union([a, n(969475).record(n(969475).string(), a)]),
                u = n(969475).without(n(969475).without(n(969475).nonEmpty(n(969475).string()), "{"), "}");
            n(969475).object({
                required: {
                    key: u,
                    value: s,
                    ttl: n(969475).undefinable(n(969475).number())
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    value: a,
                    version: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    value: n(969475).number(),
                    ttl: n(969475).undefinable(n(969475).number())
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    value: n(969475).number(),
                    version: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    amount: n(969475).number(),
                    ttl: n(969475).undefinable(n(969475).number())
                },
                optional: {
                    passThroughData: o
                }
            }), n(969475).object({
                required: {
                    key: u,
                    value: n(969475).number(),
                    version: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    field: n(969475).string(),
                    value: a,
                    ttl: n(969475).undefinable(n(969475).number())
                },
                optional: {
                    authorizationToken: n(969475).undefinable(n(969475).string())
                }
            }), n(969475).object({
                required: {
                    key: u,
                    field: n(969475).string(),
                    value: o,
                    version: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    id: n(969475).string()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    setValueTime: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    ackId: n(969475).string()
                },
                optional: {}
            }), n(969475).object({
                required: {},
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    field: n(969475).string(),
                    updates: n(969475).record(n(969475).string(), r),
                    ttl: n(969475).undefinable(n(969475).number())
                },
                optional: {
                    authorizationToken: n(969475).undefinable(n(969475).string()),
                    onDisconnectFields: n(969475).undefinable(n(969475).object({
                        required: {
                            presenceOnDisconnectFlag: n(969475).literals("register", "clear"),
                            subscriptionId: n(969475).string(),
                            pageVisitId: n(969475).undefinable(n(969475).string()),
                            spaceId: n(969475).string(),
                            pageId: n(969475).string()
                        },
                        optional: {}
                    }))
                }
            }), n(969475).object({
                required: {
                    key: u,
                    field: n(969475).string(),
                    value: o,
                    version: n(969475).number()
                },
                optional: {}
            });
            let l = n(969475).object({
                required: {
                    blockId: n(969475).string(),
                    userId: n(969475).string(),
                    spaceId: n(969475).string(),
                    operation: n(969475).literal("logPageExit"),
                    pageVisitId: n(969475).undefinable(n(969475).string()),
                    ts: n(969475).number()
                },
                optional: {}
            });
            n(969475).object({
                required: {
                    key: u
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    value: a,
                    version: n(969475).number()
                },
                optional: {}
            });
            let c = n(969475).object({
                    required: {
                        operation: n(969475).literal("setValue"),
                        key: u,
                        value: n(969475).string(),
                        ttl: n(969475).undefinable(n(969475).number())
                    },
                    optional: {}
                }),
                d = n(969475).object({
                    required: {
                        operation: n(969475).literal("setValue"),
                        key: u,
                        value: a,
                        version: n(969475).number()
                    },
                    optional: {}
                }),
                p = n(969475).object({
                    required: {
                        operation: n(969475).literal("increment"),
                        key: u,
                        amount: n(969475).number(),
                        ttl: n(969475).undefinable(n(969475).number())
                    },
                    optional: {
                        passThroughData: o
                    }
                }),
                m = n(969475).object({
                    required: {
                        operation: n(969475).literal("increment"),
                        key: u,
                        value: n(969475).number(),
                        version: n(969475).number()
                    },
                    optional: {}
                }),
                g = n(969475).object({
                    required: {
                        operation: n(969475).literal("setIfGreater"),
                        key: u,
                        value: n(969475).number(),
                        ttl: n(969475).undefinable(n(969475).number())
                    },
                    optional: {}
                }),
                f = n(969475).object({
                    required: {
                        operation: n(969475).literal("setIfGreater"),
                        key: u,
                        value: n(969475).number(),
                        version: n(969475).number()
                    },
                    optional: {}
                }),
                h = n(969475).object({
                    required: {
                        operation: n(969475).literal("setField"),
                        key: u,
                        field: n(969475).string(),
                        value: a,
                        ttl: n(969475).undefinable(n(969475).number())
                    },
                    optional: {}
                }),
                v = n(969475).object({
                    required: {
                        operation: n(969475).literal("setField"),
                        key: u,
                        field: n(969475).string(),
                        value: o,
                        version: n(969475).number()
                    },
                    optional: {}
                }),
                y = n(969475).object({
                    required: {
                        operation: n(969475).literal("updateField"),
                        key: u,
                        field: n(969475).string(),
                        updates: n(969475).record(n(969475).string(), r),
                        ttl: n(969475).undefinable(n(969475).number())
                    },
                    optional: {
                        onDisconnectFields: n(969475).undefinable(n(969475).object({
                            required: {
                                presenceOnDisconnectFlag: n(969475).literals("register", "clear"),
                                subscriptionId: n(969475).string(),
                                pageVisitId: n(969475).undefinable(n(969475).string()),
                                spaceId: n(969475).string(),
                                pageId: n(969475).string()
                            },
                            optional: {}
                        }))
                    }
                }),
                b = n(969475).object({
                    required: {
                        operation: n(969475).literal("updateField"),
                        key: u,
                        field: n(969475).string(),
                        value: o,
                        version: n(969475).number()
                    },
                    optional: {}
                }),
                _ = n(969475).object({
                    required: {
                        operation: n(969475).literal("logPageExit"),
                        spaceId: n(969475).string(),
                        userId: n(969475).string(),
                        blockId: n(969475).string(),
                        pageVisitId: n(969475).undefinable(n(969475).string())
                    },
                    optional: {}
                }),
                q = n(969475).object({
                    required: {
                        operation: n(969475).literal("logPageExit")
                    },
                    optional: {}
                }),
                w = n(969475).union(Object.values({
                    setValue: c,
                    increment: p,
                    setIfGreater: g,
                    setField: h,
                    updateField: y,
                    logPageExit: _
                })),
                T = n(969475).union(Object.values({
                    setValue: d,
                    increment: m,
                    setIfGreater: f,
                    setField: v,
                    updateField: b,
                    logPageExit: q
                }));
            n(969475).object({
                required: {
                    operations: n(969475).array(w)
                },
                optional: {}
            }), n(969475).object({
                required: {
                    responses: n(969475).array(T)
                },
                optional: {}
            }), n(969475).object({
                required: {
                    subscriptions: n(969475).array(n(969475).object({
                        required: {
                            key: u,
                            version: n(969475).number()
                        },
                        optional: {
                            authorizationToken: n(969475).string()
                        }
                    }))
                },
                optional: {}
            }), n(969475).object({
                required: {
                    responses: n(969475).array(n(969475).object({
                        required: {
                            key: u,
                            wasNotified: n(969475).boolean()
                        },
                        optional: {}
                    })),
                    internalProcessingTimeMs: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u,
                    version: n(969475).number()
                },
                optional: {
                    authorizationToken: n(969475).string()
                }
            }), n(969475).object({
                required: {
                    key: u,
                    wasNotified: n(969475).boolean()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    keys: n(969475).array(u)
                },
                optional: {}
            }), n(969475).object({
                required: {
                    keys: n(969475).array(u),
                    internalProcessingTimeMs: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u
                },
                optional: {}
            }), n(969475).object({
                required: {
                    key: u
                },
                optional: {}
            }), n(969475).object({
                required: {
                    disconnectId: n(969475).string(),
                    operations: n(969475).array(w)
                },
                optional: {}
            }), n(969475).object({
                required: {
                    disconnectId: n(969475).string(),
                    hadDisconnect: n(969475).boolean()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    disconnectId: n(969475).string()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    disconnectId: n(969475).string(),
                    wasRemoved: n(969475).boolean()
                },
                optional: {}
            });
            let k = n(969475).union([n(969475).object({
                    required: {
                        type: n(969475).literal("notification"),
                        key: u,
                        value: o,
                        version: n(969475).number()
                    },
                    optional: {
                        status: n(969475).literals("ok", "error"),
                        ackId: n(969475).string(),
                        passThroughData: o
                    }
                }), n(969475).object({
                    required: {
                        type: n(969475).literal("response"),
                        status: n(969475).literals("ok", "error"),
                        requestId: n(969475).string(),
                        result: n(969475).any()
                    },
                    optional: {}
                })]),
                S = n(969475).object({
                    required: {
                        userId: n(969475).string(),
                        present: n(969475).boolean()
                    },
                    optional: {
                        activityTimestamp: n(969475).number(),
                        blockId: n(969475).union([n(969475).isNull(), n(969475).string()]),
                        onTrustedDomain: n(969475).boolean()
                    }
                });
            n(969475).object({
                required: {
                    spaceId: n(969475).string(),
                    visitedAt: n(969475).number()
                },
                optional: {
                    blockId: n(969475).string()
                }
            }), n(969475).object({
                required: {
                    max_records: n(969475).number()
                },
                optional: {}
            }), n(969475).object({
                required: {
                    values: n(969475).array(l)
                },
                optional: {}
            }), n(969475).object({
                required: {
                    last_length: n(969475).number(),
                    new_length: n(969475).number(),
                    added: n(969475).boolean()
                },
                optional: {}
            })
        },
        680007: (e, t, n) => {
            n.r(t), n.d(t, {
                NotionPerformanceClass_TEST_ONLY: () => d,
                default: () => c,
                getPageOriginOrPrewarmedTabAppStartTime: () => l
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(803949);
            var i = () => n(419750);
            let r = Object.entries({
                jsHeapSizeLimit: "browser.mem.heap_size_limit",
                totalJSHeapSize: "browser.mem.total_heap_size",
                usedJSHeapSize: "browser.mem.used_heap_size"
            });

            function s({
                performanceMetricEventName: e,
                sampledMetricEvent: t,
                sampleValue: i
            }) {
                var r;
                let a = i ? ? Math.random(),
                    o = n(218744).default.getConfigKey("event_trail_events", t.eventName),
                    u = o && "sampleRatesByMetric" in o && "object" == typeof o.sampleRatesByMetric && (null == (r = o.sampleRatesByMetric) ? void 0 : r[e]) || 0;
                (0, n(69741).ox)(u, () => a) && (0, n(104310).u)({
                    event: t,
                    opts: {
                        sampling: {
                            behavior: "custom",
                            sampleRate: 1
                        }
                    }
                })
            }

            function a() {
                let e = navigator.webdriver,
                    t = window.notionIsPlaywrightTimeFrozen;
                return e && t
            }
            let o = new Set(["navigation_page_render", "navigation_database_render", "typing_lag"]);
            class u {
                startTimesByMetricName = {};
                lastVisibilityChange = 0;
                device;
                routerStore;
                constructor() {
                    n(825244).A.addListener(() => {
                        this.lastVisibilityChange = performance.now()
                    })
                }
                shouldCreateSentrySpan(e) {
                    return "sentry" === n(100946).getProfilingToolForSession() && (o.has(e), !0)
                }
                getDevice() {
                    if (!this.device) throw Error("NotionPerformance.setDevice() must be called before measuring metrics");
                    return this.device
                }
                getRouterStore() {
                    if (!this.routerStore) throw Error("NotionPerformance.setRouterStore() must be called before measuring page origin metrics");
                    return this.routerStore
                }
                setDevice(e) {
                    this.device = e
                }
                setRouterStore(e) {
                    this.routerStore = e
                }
                DO_NOT_USE_markLegacy(e) {
                    return this.mark(e)
                }
                mark(e) {
                    var t;
                    let n;
                    if (a()) return {
                        metricName: e,
                        startTime: performance.now(),
                        sentrySpan: void 0
                    };
                    if (null == (t = performance) ? void 0 : t.mark) {
                        let t = performance.mark(e);
                        if (t) n = t.startTime;
                        else {
                            let t = performance.getEntriesByName(e);
                            n = t[t.length - 1].startTime
                        }
                    } else n = performance.now();
                    let r = this.shouldCreateSentrySpan(e) ? i().Uk({
                        name: e
                    }) : void 0;
                    return this.startTimesByMetricName[e] = {
                        startTime: n,
                        sentrySpan: r
                    }, {
                        metricName: e,
                        startTime: n,
                        sentrySpan: r
                    }
                }
                DO_NOT_USE_markAllOfLegacy(e) {
                    this.markAllOf(e)
                }
                markAllOf(e) {
                    if (0 === e.length) return;
                    let t = performance.now();
                    for (let n of e) this.startTimesByMetricName[n] = {
                        startTime: t,
                        sentrySpan: this.shouldCreateSentrySpan(n) ? i().Uk({
                            name: n
                        }) : void 0
                    }
                }
                DO_NOT_USE_measureLegacy(e, t) {
                    a() || this.measure(e, t)
                }
                measure(e, t) {
                    this._measure(e, t)
                }
                DO_NOT_USE_measureAfterNextFlushLegacy(e, t) {
                    this.measureAfterNextFlush(e, t)
                }
                measureAfterNextFlush(e, t) {
                    n(374176).default.afterNextFlush(() => {
                        let n = "getData" in t ? t.getData() : void 0;
                        "getData" in t && void 0 === n || this._measure(e, { ...t,
                            data: n
                        })
                    })
                }
                DO_NOT_USE_measureFromPageOriginLegacy(e, t) {
                    this.measureFromPageOrigin(e, t)
                }
                measureFromPageOrigin(e, t) {
                    if ((0, n(916200).A)()) return;
                    let i = "object" == typeof e ? e.metricName : e,
                        r = l(this.getRouterStore());
                    "number" == typeof r && this.measure({
                        metricName: i,
                        startTime: r,
                        ..."object" == typeof e ? {
                            endTime: e.endTime
                        } : {}
                    }, t)
                }
                DO_NOT_USE_measureFromPageOriginAfterNextFlushLegacy(e, t) {
                    this.measureFromPageOriginAfterNextFlush(e, t)
                }
                measureFromPageOriginAfterNextFlush(e, t) {
                    if ((0, n(916200).A)()) return;
                    let i = "object" == typeof e ? e.metricName : e;
                    n(374176).default.afterNextFlush(() => {
                        let n = "getData" in t ? t.getData() : void 0;
                        if ("getData" in t && void 0 === n) return;
                        let r = l(this.getRouterStore());
                        "number" == typeof r && this._measure({
                            metricName: i,
                            startTime: r,
                            ..."object" == typeof e ? {
                                endTime: e.endTime
                            } : {}
                        }, { ...t,
                            data: n
                        })
                    })
                }
                hasMetricBeenMarked(e) {
                    return void 0 !== this.startTimesByMetricName[e]
                }
                _measure(e, t) {
                    let {
                        shouldExcludeFromTimeline: i
                    } = t;
                    if ("object" == typeof e) {
                        let {
                            startTime: n,
                            endTime: r,
                            metricName: s,
                            sentrySpan: a
                        } = e;
                        this.startTimesByMetricName[s] = void 0;
                        let o = this.getDuration({
                            metricName: s,
                            startTime: n,
                            endTime: r,
                            shouldExcludeFromTimeline: i
                        });
                        a && a.end(r), this.trackDuration({
                            metricName: s,
                            startTime: n,
                            duration: o,
                            options: t
                        })
                    } else if ("string" == typeof e) {
                        let n = this.startTimesByMetricName[e];
                        if (!n) return;
                        let {
                            startTime: r,
                            sentrySpan: s
                        } = n;
                        this.clearStartTimesByMetricName(e);
                        let a = this.getDuration({
                            metricName: e,
                            startTime: r,
                            shouldExcludeFromTimeline: i
                        });
                        s && s.end(), this.trackDuration({
                            metricName: e,
                            startTime: r,
                            duration: a,
                            options: t
                        })
                    } else(0, n(722371).HB)(e)
                }
                clearStartTimesByMetricName(e) {
                    this.startTimesByMetricName[e] && (this.startTimesByMetricName[e] = void 0)
                }
                getDuration(e) {
                    let {
                        metricName: t,
                        startTime: n,
                        shouldExcludeFromTimeline: i
                    } = e, r = "number" == typeof e.endTime ? e.endTime : performance.now();
                    if (!i) try {
                        return performance.measure(t, {
                            start: n,
                            end: r
                        }).duration
                    } catch (e) {}
                    return r - n
                }
                async trackDuration(e) {
                    let {
                        metricName: t,
                        duration: i,
                        startTime: a,
                        options: o
                    } = e, {
                        preboot: u
                    } = o, l = "data" in o ? o.data : void 0;
                    if (document.hidden || "number" == typeof this.lastVisibilityChange && a < this.lastVisibilityChange && "tab_switch_render" !== t) return;
                    let c = void 0 !== o.sampleDecision ? o.sampleDecision : await (0, n(351613).d)({
                        eventName: t,
                        eventProperties: l,
                        sampling: {
                            behavior: "statsig",
                            fallbackBehavior: "statsig",
                            statsigNotAvailableBehavior: o.shouldSendIfStatsigNotInitialized ? "track" : "drop"
                        }
                    });
                    c && (!this.getDevice().isElectron || !n(775657).electronApi || !n(775657).electronApi.windowIsVisible || await n(775657).electronApi.windowIsVisible()) && (!this.getDevice().isElectron || n(898735).A.state.isActiveTab) && ((0, n(104310).u)({
                        event: {
                            eventName: t,
                            eventProperties: {
                                time: i,
                                ...l,
                                sample_decision: c,
                                is_document_focused: document.hasFocus()
                            }
                        },
                        opts: {
                            preboot: u,
                            sampling: {
                                behavior: "decided",
                                sampleDecision: c
                            }
                        }
                    }), function(e, t) {
                        if (!("memory" in (window.performance || {}))) return;
                        let i = n(218744).default.checkGate({
                                gateName: "debug_client_memory"
                            }),
                            a = Math.random();
                        r.forEach(([r, o]) => {
                            if (!(r in window.performance.memory)) return;
                            let u = {
                                eventName: o,
                                eventProperties: {
                                    bytes: window.performance.memory[r],
                                    collected_during: e,
                                    ...t
                                }
                            };
                            i ? (0, n(104310).u)({
                                event: u,
                                opts: {
                                    sampling: {
                                        behavior: "custom",
                                        sampleRate: 1
                                    }
                                }
                            }) : s({
                                performanceMetricEventName: e,
                                sampledMetricEvent: u,
                                sampleValue: a
                            })
                        })
                    }(t, l), function(e, t) {
                        let {
                            computedStoreCount: i,
                            computedStoreSubscriptionCount: r,
                            computedStoreRecomputesTotal: a,
                            computedStoreRerendersTotal: o
                        } = (0, n(345426).g5)();
                        s({
                            performanceMetricEventName: e,
                            sampledMetricEvent: {
                                eventName: "computed_store_metrics",
                                eventProperties: {
                                    computed_store_metrics: {
                                        "computed_store.instances.total": i,
                                        "computed_store.subscriptions.total": r,
                                        "computed_store.recomputes.total": a,
                                        "computed_store.rerenders.total": o
                                    },
                                    collected_during: e,
                                    ...t
                                }
                            }
                        })
                    }(t, l))
                }
            }

            function l(e) {
                var t;
                return (null == (t = e.state.initialRoute) ? void 0 : t.name) === "blank" ? n(329464).A.state.prewarmedTabAppStartTimeOverride : n(737124).getPageOriginTime()
            }
            let c = new u;
            class d extends u {}
        },
        839621: (e, t, n) => {
            n.d(t, {
                O: () => i
            }), n(16280), n(944114), n(898992), n(737550);
            class i {
                static map(e, t, i) {
                    return n(975162).lX(t, e, i)
                }
                queue = [];
                running = 0;
                afterFlushes = [];
                afterClogs = [];
                paused = !1;
                constructor(e) {
                    this.parallelism = e
                }
                getStats() {
                    return {
                        running: this.running,
                        queue: this.paused ? 0 : this.queue.length,
                        waitingList: this.paused ? this.queue.length : 0
                    }
                }
                isEmpty() {
                    return 0 === this.running && 0 === this.queue.length
                }
                isPaused() {
                    return this.paused
                }
                setParallelism(e) {
                    this.parallelism = e, this.flush()
                }
                getParallelism() {
                    return this.parallelism
                }
                enqueue(e) {
                    let t = n(975162).yX(),
                        i = () => e().then(t.resolve, t.reject);
                    return this.queue.push({
                        thunk: i,
                        reject: t.reject
                    }), this.flush(), Object.assign(t.promise, {
                        canCancel: () => this.queue.some(e => e.thunk === i),
                        cancel: e => {
                            let n = this.queue.findIndex(e => e.thunk === i);
                            n >= 0 && (this.queue.splice(n, 1), t.reject(e))
                        }
                    })
                }
                pause() {
                    this.paused = !0
                }
                resume() {
                    this.paused = !1, this.flush()
                }
                flush() {
                    if (0 === this.queue.length || this.paused) {
                        if (0 === this.running && 0 === this.queue.length) {
                            for (let e of this.afterFlushes) e();
                            this.afterFlushes = []
                        }
                        if (this.running < this.parallelism) {
                            for (let e of this.afterClogs) e();
                            this.afterClogs = []
                        }
                        return
                    }
                    if (this.running >= this.parallelism) return;
                    let e = this.queue.splice(0, this.parallelism - this.running);
                    for (let t of (this.running += e.length, e)) t.thunk().finally(() => {
                        this.running -= 1, this.flush()
                    })
                }
                afterFlush() {
                    return new Promise(e => {
                        this.afterFlushes.push(() => e(void 0)), this.flush()
                    })
                }
                afterClog() {
                    return new Promise(e => {
                        this.afterClogs.push(() => e(void 0)), this.flush()
                    })
                }
                cancel() {
                    for (let e of this.queue.splice(0)) e.reject(Error("CanceledTask."))
                }
            }
        },
        880927: (e, t, n) => {
            function i(e) {
                return ![".", "#", "$", "[", "]"].map(t => -1 !== e.indexOf(t)).reduce((e, t) => e || t, !1)
            }
            n.d(t, {
                A: () => i
            }), n(898992), n(908872)
        },
        898735: (e, t, n) => {
            n.d(t, {
                A: () => a
            });
            var i = () => n(546605);
            class r extends i().Store {
                getInitialState() {
                    return {
                        tabs: [],
                        currentTab: {
                            id: void 0,
                            isPinned: !1
                        },
                        unauthorizedIframeUrls: [],
                        isActiveTab: void 0
                    }
                }
                updateIsActive(e) {
                    this.update(t => ({ ...t,
                        isActiveTab: e
                    }))
                }
            }
            let s = new r;
            (0, n(202146).exposeDebugValue)("ElectronAppStateStore", s);
            let a = s
        },
        916200: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i() {
                return !0 === window.__mobileAppBackgroundLaunch
            }
        }
    }
]);