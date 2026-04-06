"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86828], {
        104310: (e, t, r) => {
            r.d(t, {
                u: () => i
            });

            function i(e) {
                let {
                    event: t,
                    opts: i
                } = e, {
                    eventName: o,
                    eventProperties: n
                } = t;
                (0, r(195857).DO_NOT_USE_trackLegacy)(o, n, i)
            }
        },
        359990: (e, t, r) => {
            r.d(t, {
                u: () => o
            });
            var i = () => r(517013);
            class o extends i().pm {
                constructor(e, t, r) {
                    super({
                        environment: e,
                        pointer: t,
                        recordStoreOptions: r
                    })
                }
                clone(e) {
                    return new this.constructor(this.environment, this.pointer, {
                        userId: this.userId,
                        inMemoryRecordCache: e || this.inMemoryRecordCache
                    })
                }
                getValue() {
                    return this.internals.getValue()
                }
            }
        },
        517013: (e, t, r) => {
            r.d(t, {
                Fz: () => d,
                G_: () => a,
                _y: () => s,
                pm: () => h,
                v3: () => n
            });
            var i = () => r(658316);
            let o = {};

            function n(e, t) {
                return i().Mv.createChildStore(e, t)
            }

            function s(e, t, r) {
                let o = (0, i().B_)(t, h.keyName, r);
                return e.uiLocation.getOrCreateChild(o, () => new h({
                    environment: e.environment,
                    pointer: t,
                    path: r,
                    recordStoreOptions: {
                        userId: e.userId,
                        inMemoryRecordCache: e.inMemoryRecordCache
                    }
                }).uiLocation).store
            }

            function a(e, t, r) {
                return s(e, t, [r])
            }
            class h extends i().wu {
                static keyName = "RecordPathStore";
                static getUIChildStoreKey(e, t, r) {
                    return (0, i().B_)(e, t, r)
                }
                derived = new(r(569574)).aq;
                constructor(e) {
                    super(e.environment, e.pointer, e.path || [], e.recordStoreOptions), this.path || = []
                }
                getValue() {
                    return this.internals.getValue()
                }
                hasValue() {
                    return this.isDefined()
                }
                isDefined() {
                    return this.derived.compute(o, () => !!this.getValue(), "isDefined")
                }
                getKeyStore(e) {
                    let t = this.keyStoreMemo ? ? = {};
                    return t[e] ? ? = s(this, this.pointer, (this.path ? ? []).concat(e))
                }
                valueIs(e) {
                    let {
                        guard: t,
                        debugName: r
                    } = e;
                    return this.derived.compute(e, () => {
                        let e = this.getValue();
                        return void 0 === e || t(e)
                    }, r)
                }
                clone(e) {
                    return new h({
                        environment: this.environment,
                        pointer: this.pointer,
                        path: this.path,
                        recordStoreOptions: { ...this.recordStoreOptions,
                            ...e ? {
                                inMemoryRecordCache: e
                            } : void 0
                        }
                    })
                }
            }

            function d(e, ...t) {
                let {
                    span: i,
                    table: o,
                    tr: n,
                    td: s,
                    object: a,
                    objectSummary: h,
                    CONTAINER_STYLE: c
                } = r(864053).iY, {
                    table: l,
                    id: u
                } = e, m = e.path && e.path.length > 0 ? e.path.join(".") : void 0;
                return i(c, i({}, a(e, {
                    useDefaultFormatter: !0
                }), "(", l, " ", u, " #", e.key.toString(), ")", m && ".", m), o({}, n({}, s({}, "value:"), s({}, h(e.getValue(), {
                    asJSON: !0
                }))), ...t))
            }(0, r(864053).EX)({
                canFormat: e => !!(e && e instanceof h),
                header: e => d(e),
                hasBody: (e, t) => !1,
                body: e => null
            }), (0, r(574663).B)((e, t, r) => {
                if (t instanceof h) {
                    e.recordStoreDetails = {
                        id: t.id,
                        table: t.table,
                        path: t.path
                    };
                    let i = t.getRecordStoreUIParent();
                    i && (e.recordStoreDetails.recordStoreUIParentStore = {
                        id: i.id,
                        table: i.table,
                        path: i.path
                    }, r(i))
                }
            })
        },
        569574: (e, t, r) => {
            r.d(t, {
                aq: () => d,
                yZ: () => h,
                uy: () => s
            });
            var i = () => r(482503);
            let o = 0,
                n = new WeakSet;

            function s(e, t) {
                if ((0, r(433261).$t)(t.table) && !t.spaceId && !n.has(t)) {
                    var i;
                    if (t.table === r(832375).NXh) return t.spaceId = t.id, n.add(t), t;
                    let o = null == (i = e.inMemoryRecordCache.getRecord({
                        pointer: t,
                        userId: e.userId
                    })) ? void 0 : i.value;
                    o && (0, r(763230).Z4)(o) && "space_id" in o && (t.spaceId = o.space_id, n.add(t))
                }
                return t
            }
            let a = {
                hit: 0,
                miss: 0,
                getHitRate: () => a.hit / (a.hit + a.miss)
            };
            (0, r(202146).exposeDebugValue)("RecordStoreInternalStats", a);
            class h extends i().i {
                key = o++;
                debugName;
                addedListeners = !1;
                roleStore;
                environment;
                inMemoryRecordCache;
                recordStoreOptions;
                userId;
                _pointer;
                path;
                getInitialState() {
                    return {
                        ready: !1
                    }
                }
                constructor(e, t) {
                    super(e), this.debugName = e;
                    const {
                        environment: r,
                        path: i,
                        pointer: o,
                        recordStoreOptions: n
                    } = t;
                    this.environment = r, this._pointer = o, this.path = i || [], this.userId = (null == n ? void 0 : n.userId) || r && r.currentUser.id, this.inMemoryRecordCache = (null == n ? void 0 : n.inMemoryRecordCache) || r.defaultRecordCache.inMemoryRecordCache, this.recordStoreOptions = n ? ? {}, this.shouldSubscribeToMessageStore() && r.recordSubscriptionActions.subscribe({
                        environment: r,
                        pointer: o,
                        userId: this.userId
                    })
                }
                get pointer() {
                    return s(this, this._pointer)
                }
                getState() {
                    var e;
                    let t = (null == (e = this.inMemoryRecordCache) ? void 0 : e.cacheLogicalTime) ? ? -1;
                    if (this.instanceState.cacheLogicalTime !== t) {
                        let e = this.getStateFromInMemoryRecordCache();
                        this.path && this.path.length > 0 ? this.instanceState.value = (0, r(488307).OU)(null == e ? void 0 : e.value, this.path) : this.instanceState.value = null == e ? void 0 : e.value, this.instanceState.cacheLogicalTime = t, this.instanceState.role = null == e ? void 0 : e.role, this.instanceState.ready = !!(null == e ? void 0 : e.role), a.miss++
                    } else a.hit++;
                    return super.getState()
                }
                getRole() {
                    return this.roleStore || (this.roleStore = new(r(345426)).ComputedStore(() => this.state.role, {
                        debugName: `${this.debugName}.getRole()`,
                        recomputeSchedule: "eager"
                    })), this.roleStore.state
                }
                getValue() {
                    return this.state.value
                }
                isDefaultRecordCache() {
                    return !!this.environment && this.inMemoryRecordCache === this.environment.defaultRecordCache.inMemoryRecordCache
                }
                shouldSubscribeToMessageStore() {
                    let e = this.inMemoryRecordCache.cacheFallbacks.has(this.environment.defaultRecordCache.inMemoryRecordCache);
                    return this.isDefaultRecordCache() || e
                }
                isReady() {
                    return !!this.getRole()
                }
                addListener(e, t) {
                    super.addListener(e, t), this.addExternalListeners()
                }
                removeListener(e, t) {
                    super.removeListener(e, t), this.removeExternalListeners()
                }
                getStateFromInMemoryRecordCache() {
                    var e;
                    let t = {
                        pointer: this._pointer,
                        userId: this.userId
                    };
                    return null == (e = this.inMemoryRecordCache) ? void 0 : e.getRecord(t)
                }
                addExternalListeners() {
                    if (!this.addedListeners && (this.inMemoryRecordCache.addListenerToRecord(this._pointer, this.handleRecordDataChange), this.addedListeners = !0, this.shouldSubscribeToMessageStore())) {
                        let {
                            environment: e,
                            pointer: t,
                            userId: r
                        } = this;
                        this.environment.recordSubscriptionActions.subscribe({
                            environment: e,
                            pointer: t,
                            userId: r
                        })
                    }
                }
                removeExternalListeners() {
                    if (this.addedListeners && 0 === this.listenerCount() && (this.inMemoryRecordCache.removeListenerToRecord(this._pointer, this.handleRecordDataChange), this.addedListeners = !1, this.shouldSubscribeToMessageStore())) {
                        let {
                            pointer: e,
                            userId: t
                        } = this;
                        this.environment.recordSubscriptionActions.unsubscribeAfterDelay({
                            inMemoryRecordCache: this.environment.defaultRecordCache.inMemoryRecordCache,
                            pointer: e,
                            userId: t
                        })
                    }
                }
                handleRecordDataChange = (function(e) {
                    if (this.pathIsSubsetOfStorePath(e)) {
                        var t;
                        null == (t = this.roleStore) || t.enqueueRecompute(), this.emit()
                    }
                }).bind(this);
                pathIsSubsetOfStorePath(e) {
                    for (let t = 0; t < this.path.length; t++) {
                        let r = this.path[t],
                            i = e[t];
                        if (void 0 !== r && void 0 !== i && r !== i) return !1
                    }
                    return !0
                }
            }(0, r(864053).EX)({
                canFormat: e => !!(e && e instanceof h),
                header: e => (function(e, ...t) {
                    let {
                        span: i,
                        table: o,
                        tr: n,
                        td: s,
                        object: a,
                        objectSummary: h,
                        CONTAINER_STYLE: d
                    } = r(864053).iY, {
                        table: c,
                        id: l
                    } = e.pointer, u = e.path && e.path.length > 0 ? e.path.join(".") : void 0;
                    return i(d, i({}, a(e, {
                        useDefaultFormatter: !0
                    }), "(", c, " ", l, " #", e.key.toString(), ")", u && ".", u), o({}, n({}, s({}, "value:"), s({}, h(e.getValue(), {
                        asJSON: !0
                    }))), ...t))
                })(e),
                hasBody: (e, t) => !1,
                body: e => null
            }), (0, r(574663).B)((e, t) => {
                t instanceof h && (e.recordStoreDetails = {
                    id: t.pointer.id,
                    table: t.pointer.table,
                    path: t.path
                })
            });
            class d {
                cachedComputedStores;
                compute(e, t, i) {
                    var o;
                    let n = null == (o = this.cachedComputedStores) ? void 0 : o.get(e);
                    if (n) return n.getState();
                    if (!r(363256).e.hasCurrentListener()) return t(); {
                        this.cachedComputedStores ? ? = new WeakMap;
                        let o = new(r(345426)).ComputedStore(t, {
                            debugName: i,
                            recomputeSchedule: "eager"
                        });
                        return this.cachedComputedStores.set(e, o), o.getState()
                    }
                }
            }
        },
        626099: (e, t, r) => {
            r.d(t, {
                H: () => i
            });

            function i(e, t, r) {
                return e.uiLocation.getOrCreateChild(function(e, t, r) {
                    let {
                        table: i,
                        id: o
                    } = e, n = `${t}(${i}:${o}`;
                    if (null != r && r.length)
                        for (let e of r) n += `.${e}`;
                    return n + ")"
                }(t, r.keyName, void 0), () => new r(e.environment, t, e.recordStoreOptions).uiLocation).store
            }
        },
        658316: (e, t, r) => {
            let i;
            r.d(t, {
                wu: () => h,
                Mv: () => i,
                B_: () => n,
                fA: () => s
            }), r(16280), r(898992), r(823215), r(354520), r(581454);
            class o {
                uiParent;
                uiChildren = new Map;
                constructor(e, t, r) {
                    this.memoKey = e, this.store = t, r && this.setParent(r)
                }
                setParent(e) {
                    if (void 0 === this.memoKey) throw Error("Invalid UILocation: has no memoKey");
                    e.uiChildren.set(this.memoKey, this), this.uiParent = e
                }
                removeParent() {
                    this.uiParent = void 0
                }
                getChild(e) {
                    return this.uiChildren.get(e)
                }
                getOrCreateChild(e, t) {
                    let r = this.uiChildren.get(e);
                    if (r) return r;
                    let i = t();
                    return i.setParent(this), i
                }* iterateSelfAndAncestors() {
                    let e = this.asThisOrParent();
                    for (; e;) yield e, e = e.uiParent
                }
                getRoot() {
                    let e = this.asThisOrParent();
                    for (let t of this.iterateSelfAndAncestors()) e = t;
                    return e
                }
                contains(e) {
                    for (let t of e.iterateSelfAndAncestors())
                        if (t === this) return !0;
                    return !1
                }
                findAncestor(e) {
                    let t;
                    for (let r of this.iterateSelfAndAncestors()) {
                        if (e(r)) return {
                            ancestor: r,
                            child: t
                        };
                        t = r
                    }
                    return {
                        ancestor: void 0,
                        child: void 0
                    }
                }
                asThisOrParent() {
                    return this
                }
            }

            function n(e, t, r) {
                let {
                    table: i,
                    id: o
                } = e, n = `${t}(${i}:${o}`;
                if (null != r && r.length)
                    for (let e of r) n += `.${e}`;
                return n + ")"
            }

            function s(e) {
                i = e
            }
            class a {
                constructor(e, t, i, s) {
                    this.environment = e, this._pointer = t, this.id = t.id, this.path = i, this.userId = (null == s ? void 0 : s.userId) ? ? e.currentUser.id, this.inMemoryRecordCache = (null == s ? void 0 : s.inMemoryRecordCache) ? ? e.defaultRecordCache.inMemoryRecordCache, this.recordStoreOptions = s;
                    const a = this.constructor.keyName;
                    if (!a) throw Error('RecordStore subclasses must have a static "keyName" property');
                    const h = n(t, a, i);
                    this.uiLocation = new o(h, this, void 0), this.internals = new(r(569574)).yZ(h, {
                        environment: e,
                        pointer: t,
                        path: i,
                        recordStoreOptions: s
                    })
                }
                id;
                _pointer;
                get pointer() {
                    return (0, r(569574).uy)(this, this._pointer)
                }
                get table() {
                    return this.pointer.table
                }
                isTable(e) {
                    return this.table === e
                }
                path;
                isPath(e) {
                    var t;
                    return e.length === (null == (t = this.path) ? void 0 : t.length) && e.every((e, t) => {
                        var r;
                        return e === (null == (r = this.path) ? void 0 : r[t])
                    })
                }
                internals;
                environment;
                inMemoryRecordCache;
                isDefaultRecordCache() {
                    return !!this.environment && this.inMemoryRecordCache === this.environment.defaultRecordCache.inMemoryRecordCache
                }
                shouldCacheReceiveUpdates() {
                    let e = this.inMemoryRecordCache.cacheFallbacks.has(this.environment.defaultRecordCache.inMemoryRecordCache);
                    return this.isDefaultRecordCache() || e
                }
                shouldCacheSaveTransactions() {
                    return this.isDefaultRecordCache() || r(574698).CX.includes(this.inMemoryRecordCache.name)
                }
                userId;
                getRole() {
                    return this.internals.getRole()
                }
                isReady() {
                    return this.internals.isReady()
                }
                async load(e) {
                    !this.id || !this.isDefaultRecordCache() || this.isReady() || await this.internals.waitUntil(() => this.isReady(), e)
                }
                waitUntil(e) {
                    return this.internals.waitUntil(e)
                }
                k(e) {
                    return this.getKeyStore(e)
                }
                getKeyValue(e) {
                    return this.getKeyStore(e).getValue()
                }
                v(e) {
                    return this.getKeyValue(e)
                }
                canRead() {
                    let e = this.getRole();
                    return !e || r(642157).Tt(e)
                }
                canComment() {
                    let e = this.getRole();
                    return !e || r(642157).ok(e)
                }
                isCommentOnly() {
                    return !this.canEdit() && this.canComment()
                }
                canEdit() {
                    let e = this.getRole();
                    return !e || r(642157).p2(e)
                }
                canEditCollection() {
                    let e = this.getRole();
                    return !e || r(642157).lg(e)
                }
                canAdmin() {
                    let e = this.getRole();
                    return !e || r(642157).Km(e)
                }
                canEditMembership() {
                    let e = this.getRole();
                    return !!e && r(642157).vp(e)
                }
                canEditContentOnly() {
                    let e = this.getRole();
                    return !!e && r(642157).uQ(e)
                }
                uiLocation;
                recordStoreOptions;
                static nextUniqueId = 0;
                key = a.nextUniqueId++;
                cloneWithNewUIParent(e) {
                    let t = this.clone();
                    return t.uiLocation.setParent(e.uiLocation), t
                }
                getRecordStoreUIRoot() {
                    return this.uiLocation.getRoot().store
                }
                uiContains(e) {
                    return this.uiLocation.contains(e.uiLocation)
                }
                getRecordStoreUIAncestor(e) {
                    var t;
                    return 0 === e ? this : null == (t = this.getRecordStoreUIParent()) ? void 0 : t.getRecordStoreUIAncestor(e - 1)
                }
                getRecordStoreUIParent() {
                    var e;
                    return null == (e = this.uiLocation.uiParent) ? void 0 : e.store
                }
                get recordStoreUIParentStore() {
                    return this.getRecordStoreUIParent()
                }
            }
            class h extends a {
                hasValue() {
                    return !!this.internals.getValue()
                }
                isChildOfRecordStoreUIRoot() {
                    return !this.getRecordStoreUIAncestor(3)
                }
                getRecordStoreUIChildStore(e) {
                    let t = this.uiLocation.getChild(e);
                    if (t) return t.store
                }
                setRecordStoreUIParent(e, t) {
                    if (void 0 !== t && this.uiLocation.memoKey !== t) throw Error(`Child store key mismatch: ${this.uiLocation.memoKey} !== ${t}`);
                    this.uiLocation.setParent(e.uiLocation)
                }
                findRecordStoreUIAncestor(e) {
                    var t, r;
                    let i = this.uiLocation.findAncestor(t => e(t.store));
                    return {
                        ancestor: null == (t = i.ancestor) ? void 0 : t.store,
                        child: null == (r = i.child) ? void 0 : r.store
                    }
                }
                findRecordStoreUIAncestors(e) {
                    return Array.from(this.uiLocation.iterateSelfAndAncestors()).map(e => e.store).filter(e)
                }
                getRecordStore = (e, t) => t instanceof a ? i.createChildStore(e, t.pointer) : i.createChildStore(e, t);
                getRecordStoreArray(e, t) {
                    return t ? t.map(t => this.getRecordStore(e, t)) : []
                }
                getRecordValue = r(95476).xb.fromMonomorphicFunctionUnsafe(e => this.getRecordStore(this, e).getValue());
                getRecordModel = r(993189).b4_.fromMonomorphicFunctionUnsafe(e => this.getRecordStore(this, e).getModel(), this.getRecordValue);
                computeWithRecordValues(e, t) {
                    let i = !0,
                        o = {
                            getRecordValueAndSubscribe: r(95476).xb.fromMonomorphicFunctionUnsafe(e => {
                                if (!i) throw Error("This getRecordValueFn should not be retained outside of computeWithRecordValues");
                                return e instanceof a ? this.getRecordValue(e.pointer) : this.getRecordValue(e)
                            })
                        };
                    try {
                        if (r(363256).e.hasCurrentListener()) return new(r(345426)).ComputedStore(() => e(o), { ...t,
                            debugName: (null == t ? void 0 : t.debugName) || "throwAwayComputedStore"
                        }).getState();
                        return e(o)
                    } finally {
                        i = !1
                    }
                }
                getRecordRole = e => this.getRecordStore(this, e).getRole();
                loadRecordValue = r(95476).ho.fromMonomorphicFunctionUnsafe(async e => {
                    if (!e.id || !this.isDefaultRecordCache()) return;
                    let t = new(r(569574)).yZ(`loadRecordValue(${e.id}:${e.table})`, {
                        pointer: e,
                        environment: this.environment,
                        recordStoreOptions: this.recordStoreOptions
                    });
                    return t.isReady() || await t.waitUntil(() => t.isReady()), t.getValue()
                });
                loadRecordModel = r(801507).h.fromLoadRecordValueFn(this.loadRecordValue);
                listenerWeakMap;
                addListener(e) {
                    this.listenerWeakMap ? ? = new WeakMap;
                    let t = this.listenerWeakMap.get(e) ? ? e.bind(void 0, this);
                    this.listenerWeakMap.set(e, t), this.internals.addListener(t)
                }
                removeListener(e) {
                    var t;
                    let r = null == (t = this.listenerWeakMap) ? void 0 : t.get(e);
                    r && this.internals.removeListener(r)
                }
                async awaitNonNullValue() {
                    let e = this.internals.getValue();
                    return e || new Promise(e => {
                        let t = () => {
                            let r = this.internals.getValue();
                            r && (this.internals.removeListener(t), e(r))
                        };
                        this.internals.addListener(t)
                    })
                }
            }
        },
        949830: (e, t, r) => {
            r.d(t, {
                A: () => o
            });
            let i = new(r(273917)).U((e, {
                spaceId: t,
                userId: r
            }) => r ? t + ":" + r : t, async (e, {
                spaceId: t,
                userId: i
            }, o = !1) => {
                let n = await e.api.callApi({
                    eventName: "getPublicSpaceData",
                    environment: e,
                    userId: i,
                    data: {
                        type: "space-ids",
                        spaceIds: [t],
                        includeCounts: !1
                    },
                    headers: {
                        [r(255378).B3]: t
                    }
                });
                if ("success" === n.type && n.data.results.length > 0 && n.data.results[0]) {
                    var s, a, h, d;
                    h = null == (s = n.data.results[0]) ? void 0 : s.id, d = null == (a = n.data.results[0]) ? void 0 : a.spaceShortId, r(363256).e.withListenerIgnored(() => {
                        h && d && r(995450).D.setState({ ...r(995450).D.state,
                            [h]: d
                        })
                    })
                }
                return "success" === n.type ? n.data.results[0] ? ? void 0 : void 0
            });
            r(202146).exposeDebugValue("PublicSpaceDataStore", i);
            let o = i
        }
    }
]);