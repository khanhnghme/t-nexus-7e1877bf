"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [36365, 38952], {
        214247: (e, t, r) => {
            r.d(t, {
                StatsigIndexedDBStorageProvider: () => s
            });
            let n = "StatsigIndexedDBStorageProvider",
                i = "statsigStore";
            class s {
                cache = new Map;
                db;
                initPromise;
                isInitialized = !1;
                pendingWrites = new Map;
                flushTimerId = null;
                debugLogger;
                constructor(e) {
                    this.debugLogger = e.debugLogger, this.db = new(r(262273)).$E({
                        environment: e,
                        databaseName: i,
                        databaseVersion: 1,
                        openDbCallbacks: {
                            upgrade(e, t) {
                                t < 1 && e.createObjectStore(i, {
                                    keyPath: "key"
                                })
                            }
                        }
                    }), this.initPromise = this.loadFromIndexedDB(), "u" > typeof window && window.addEventListener("visibilitychange", () => {
                        "hidden" === document.visibilityState && this.flushPendingWrites()
                    })
                }
                logDebug(e, t) {
                    var r;
                    null == (r = this.debugLogger) || r.log({
                        level: "info",
                        from: "statsig",
                        type: "InitializationDebug",
                        data: {
                            miscDataToConvertToString: {
                                step: e,
                                ...t
                            }
                        }
                    })
                }
                isReady() {
                    return this.isInitialized
                }
                isReadyResolver() {
                    return null
                }
                getItem(e) {
                    return this.cache.get(e) ? ? null
                }
                setItem(e, t) {
                    this.cache.set(e, t), this.queueWrite(e, {
                        type: "set",
                        value: t
                    })
                }
                removeItem(e) {
                    this.cache.delete(e), this.queueWrite(e, {
                        type: "remove"
                    })
                }
                getProviderName() {
                    return n
                }
                getAllKeys() {
                    return Array.from(this.cache.keys())
                }
                async waitForInitialization() {
                    this.logDebug("IndexedDB:waitForInitialization:start");
                    let {
                        success: e
                    } = await this.initPromise;
                    this.logDebug("IndexedDB:waitForInitialization:done", {
                        success: e
                    }), e && (this.isInitialized = !0)
                }
                getIsInitialized() {
                    return this.isInitialized
                }
                async clear() {
                    this.cache.clear(), this.pendingWrites.clear();
                    let e = await this.db.startTransaction({
                        storeNames: [i],
                        mode: "readwrite",
                        name: "clearStatsigStorage",
                        timeoutMs: 6e4
                    }, async e => {
                        let t = e.objectStore(i);
                        return await t.clear(), {
                            value: void 0
                        }
                    });
                    e.error && r(773352).log({
                        from: n,
                        type: "clear",
                        level: "error",
                        error: e.error,
                        data: {
                            errorType: e.error.type
                        }
                    })
                }
                async loadFromIndexedDB() {
                    this.logDebug("IndexedDB:loadFromIndexedDB:start");
                    let e = await this.db.startTransaction({
                        storeNames: [i],
                        mode: "readonly",
                        name: "loadStatsigStorage",
                        timeoutMs: 6e4
                    }, async e => {
                        let t = e.objectStore(i);
                        return {
                            value: await t.getAll()
                        }
                    });
                    if (this.logDebug("IndexedDB:loadFromIndexedDB:transactionComplete", {
                            hasError: !!e.error
                        }), e.error) return r(773352).log({
                        from: n,
                        type: "loadFromIndexedDB",
                        level: "error",
                        error: e.error,
                        data: {
                            errorType: e.error.type
                        }
                    }), {
                        success: !1
                    };
                    for (let t of e.value) null != t && "string" == typeof t.key && this.cache.set(t.key, t.value);
                    return this.logDebug("IndexedDB:loadFromIndexedDB:done", {
                        itemCount: e.value.length
                    }), {
                        success: !0
                    }
                }
                queueWrite(e, t) {
                    this.pendingWrites.set(e, t), this.scheduleFlush()
                }
                scheduleFlush() {
                    null === this.flushTimerId && (this.flushTimerId = setTimeout(() => {
                        this.flushPendingWrites()
                    }, 1e4))
                }
                async flushPendingWrites() {
                    if (null !== this.flushTimerId && (clearTimeout(this.flushTimerId), this.flushTimerId = null), 0 === this.pendingWrites.size) return;
                    let e = new Map(this.pendingWrites);
                    this.pendingWrites.clear();
                    let t = await this.db.startTransaction({
                        storeNames: [i],
                        mode: "readwrite",
                        name: "flushStatsigWrites",
                        timeoutMs: 3e5
                    }, async t => {
                        let r = t.objectStore(i);
                        for (let [t, n] of e) "set" === n.type ? await r.put({
                            key: t,
                            value: n.value,
                            timestamp: Date.now()
                        }) : await r.delete(t);
                        return {
                            value: void 0
                        }
                    });
                    t.error && r(773352).log({
                        from: n,
                        type: "flushPendingWrites",
                        level: "error",
                        error: t.error,
                        data: {
                            errorType: t.error.type,
                            miscDataToConvertToString: {
                                writeCount: e.size,
                                keys: Array.from(e.keys())
                            }
                        }
                    })
                }
            }
        },
        911981: (e, t, r) => {
            let n, i, s;
            r.d(t, {
                MR: () => f,
                P2: () => m,
                oA: () => g
            });
            let a = new WeakMap,
                o = new WeakMap,
                l = new WeakMap,
                d = new WeakMap,
                u = new WeakMap,
                c = {
                    get(e, t, r) {
                        if (e instanceof IDBTransaction) {
                            if ("done" === t) return o.get(e);
                            if ("objectStoreNames" === t) return e.objectStoreNames || l.get(e);
                            if ("store" === t) return r.objectStoreNames[1] ? void 0 : r.objectStore(r.objectStoreNames[0])
                        }
                        return h(e[t])
                    },
                    has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
                };

            function h(e) {
                if (e instanceof IDBRequest) {
                    let t;
                    return (t = new Promise((t, r) => {
                        let n = () => {
                                e.removeEventListener("success", i), e.removeEventListener("error", s)
                            },
                            i = () => {
                                t(h(e.result)), n()
                            },
                            s = () => {
                                r(e.error), n()
                            };
                        e.addEventListener("success", i), e.addEventListener("error", s)
                    })).then(t => {
                        t instanceof IDBCursor && a.set(t, e)
                    }).catch(() => {}), u.set(t, e), t
                }
                if (d.has(e)) return d.get(e);
                let t = function(e) {
                    if ("function" == typeof e) return e !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (i || (i = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(e) ? function(...t) {
                        return e.apply(g(this), t), h(a.get(this))
                    } : function(...t) {
                        return h(e.apply(g(this), t))
                    } : function(t, ...r) {
                        let n = e.call(g(this), t, ...r);
                        return l.set(n, t.sort ? t.sort() : [t]), h(n)
                    };
                    return e instanceof IDBTransaction && function(e) {
                        if (o.has(e)) return;
                        let t = new Promise((t, r) => {
                            let n = () => {
                                    e.removeEventListener("complete", i), e.removeEventListener("error", s), e.removeEventListener("abort", s)
                                },
                                i = () => {
                                    t(), n()
                                },
                                s = () => {
                                    r(e.error), n()
                                };
                            e.addEventListener("complete", i), e.addEventListener("error", s), e.addEventListener("abort", s)
                        });
                        o.set(e, t)
                    }(e), (n || (n = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some(t => e instanceof t) ? new Proxy(e, c) : e
                }(e);
                return t !== e && (d.set(e, t), u.set(t, e)), t
            }
            let g = e => u.get(e);

            function m(e, t, {
                blocked: r,
                upgrade: n,
                blocking: i
            } = {}) {
                let s = indexedDB.open(e, t),
                    a = h(s);
                return n && s.addEventListener("upgradeneeded", e => {
                    n(h(s.result), e.oldVersion, e.newVersion, h(s.transaction))
                }), r && s.addEventListener("blocked", () => r()), i && a.then(e => e.addEventListener("versionchange", i)), a
            }

            function f(e, {
                blocked: t
            } = {}) {
                let r = indexedDB.deleteDatabase(e);
                return t && r.addEventListener("blocked", () => t()), h(r).then(() => void 0)
            }
            let p = ["get", "getKey", "getAll", "getAllKeys", "count"],
                y = ["put", "add", "delete", "clear"],
                I = new Map;

            function v(e, t) {
                if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t)) return;
                if (I.get(t)) return I.get(t);
                let r = t.replace(/FromIndex$/, ""),
                    n = t !== r,
                    i = y.includes(r);
                if (!(r in (n ? IDBIndex : IDBObjectStore).prototype) || !(i || p.includes(r))) return;
                let s = async function(e, ...t) {
                    let s = this.transaction(e, i ? "readwrite" : "readonly"),
                        a = s.store;
                    n && (a = a.index(t.shift()));
                    let o = a[r](...t);
                    return i && await s.done, o
                };
                return I.set(t, s), s
            }
            s = c, c = {
                get: (e, t, r) => v(e, t) || s.get(e, t, r),
                has: (e, t) => !!v(e, t) || s.has(e, t)
            }
        },
        962299: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = new class {
                intl;
                constructor() {
                    const e = (0, r(109939).MT)();
                    this.intl = (0, r(109939).EY)({
                        locale: r(849917).locale,
                        defaultLocale: "en-US",
                        messages: r(849917).D
                    }, e)
                }
                formatMessage(e, t) {
                    return this.intl.formatMessage(e, t)
                }
                formatNumber(e, t) {
                    return this.intl.formatNumber(e, t)
                }
                getIntl() {
                    return this.intl
                }
                isEnglish() {
                    return r(849917).locale.toLowerCase().startsWith("en")
                }
            }
        }
    }
]);