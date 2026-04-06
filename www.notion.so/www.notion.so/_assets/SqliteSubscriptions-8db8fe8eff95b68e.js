"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [93199], {
        209974: (e, t, r) => {
            r.r(t), r.d(t, {
                SqliteSubscriptionManager: () => a,
                SqliteSubscriptionQuery: () => o
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(803949);
            class i {
                cache = new(r(971781)).Y(e => this.getKeyUncached(e));
                getKey(e) {
                    return this.cache.get(e)
                }
                getKeyUncached({
                    sql: e,
                    args: t,
                    queryName: i,
                    userId: s,
                    readTables: a,
                    primaryKey: o,
                    rowType: n
                }) {
                    let l = `${e}:${JSON.stringify(t)}:pk=${null==o?void 0:o.join(",")}`,
                        u = l.length > 128 ? (0, r(4962).gB)(l) : l,
                        h = `user=${s}`,
                        p = a ? `@change(${a.join(",")})` : "@once";
                    return `sqlite:${i}${p}:${u}:${h}:rt=${null==n?void 0:n.name}`
                }
            }
            let s = 60 * r(695216).TD;
            class a {
                constructor(e) {
                    this.backend = e
                }
                queries = new Map;
                userRowTypes = new(r(277637)).G(() => new(r(971781)).Y(e => ({
                    queries: new Set,
                    optimistic: {
                        byUpdateId: {},
                        count: 0
                    },
                    memoizer: new(r(941053)).OptimisticUpdateMemoizer(e.getKey)
                })));
                keyCreator = new i;
                createQuery(e, t) {
                    let r = this.getQuery(e);
                    if (r) return r;
                    let i = this.getOrCreateRowType(e, t),
                        s = i ? this.getRowTypeState(t.userId, i) : void 0;
                    return r = new o(e, t.userId, i, null == s ? void 0 : s.memoizer, {
                        public: {
                            loading: !0,
                            seq: 0,
                            error: void 0,
                            valueSeq: void 0,
                            value: void 0,
                            errorSeq: void 0
                        },
                        optimistic: {
                            input: void 0,
                            output: void 0,
                            optimistic: (null == s ? void 0 : s.optimistic) ? ? {
                                byUpdateId: {},
                                count: 0
                            }
                        }
                    }, this.createSubscriptionEffect(e, t)), this.queries.set(e, r), r
                }
                parseQuery(e) {
                    return this.backend.parser.parse(e)
                }
                dispatchRowTypeUpdate(e, t, i) {
                    let s = this.getRowTypeState(e, t);
                    s.optimistic = (0, r(941053).reduceOptimisticUpdateState)(s.optimistic, i), s.queries.forEach(e => {
                        e.dispatch(i)
                    })
                }
                createSubscriptionEffect(e, t) {
                    let r;
                    return () => {
                        var i;
                        let a = null == (i = this.queries.get(e)) ? void 0 : i.dispatch;
                        if (!a) throw Error(`SqliteSubscriptionKey not found: ${e} (re-using destroyed query instance?)`);
                        return r ? (clearTimeout(r), r = void 0) : this.backend.create(e, t, a), () => {
                            r ? ? = setTimeout(() => this.deleteQuery(e, t.userId), s)
                        }
                    }
                }
                getQuery(e) {
                    let t = this.queries.get(e);
                    if (t) return t
                }
                deleteQuery(e, t) {
                    let r = this.queries.get(e);
                    r && (this.backend.delete(e), this.queries.delete(e), r.rowType && this.getRowTypeState(t, r.rowType).queries.delete(r))
                }
                getRowTypeState(e, t) {
                    return this.userRowTypes.get(e).get(t)
                }
                anonymousTypeId = 0;
                getOrCreateRowType(e, t) {
                    return t.rowType ? t.rowType : t.singleton ? new(r(902880)).Y({
                        name: `singleton_queryRowType_${e}_${this.anonymousTypeId++}`,
                        readTables: [],
                        fromSqlite: e => e
                    }) : t.primaryKey ? new(r(902880)).L({
                        name: `pkey_queryRowType_${e}_${this.anonymousTypeId++}`,
                        primaryKey: t.primaryKey,
                        readTables: [],
                        fromSqlite: e => e
                    }) : void 0
                }
            }
            class o {
                emitter = new(r(653834)).A;
                cleanup;
                resolvers = [];
                constructor(e, t, r, i, s, a) {
                    this.key = e, this.userId = t, this.rowType = r, this.memoizer = i, this.state = s, this.effect = a
                }
                getSnapshot = () => this.state.public;
                subscribe = e => (0 === this.emitter.listenerCount() && (this.cleanup = this.effect()), this.emitter.addListener(e), () => {
                    let t = this.emitter.listenerCount();
                    this.emitter.removeListener(e);
                    let r = this.emitter.listenerCount();
                    if (1 === t && 0 === r) {
                        var i;
                        null == (i = this.cleanup) || i.call(this), this.cleanup = void 0, this.resolveRerunPromises()
                    }
                });
                reducer(e, t) {
                    return "unchanged" === t.type ? e : r(947482).jM(e, i => {
                        switch (t.type) {
                            case "put":
                            case "del":
                                {
                                    if (!this.memoizer) return;
                                    let s = (0, r(941053).reduceOptimisticRowsState)(e.optimistic, t, this.memoizer);
                                    if (s === e.optimistic) return;
                                    let a = ++i.public.seq;i.optimistic = r(947482).h4(s),
                                    s.output && (i.public.value = r(947482).h4(s.output), i.public.valueSeq = a);
                                    return
                                }
                            case "rows":
                                {
                                    if (i.public.loading = !1, !this.rowType || !this.memoizer) {
                                        i.public.value = r(947482).h4(t.value), i.public.valueSeq = ++i.public.seq;
                                        return
                                    }
                                    let s = this.rowType.rowsFromSqlite(t.value),
                                        a = (0, r(941053).reduceOptimisticRowsState)(e.optimistic, {
                                            type: "rows",
                                            rows: s
                                        }, this.memoizer);
                                    if (a === e.optimistic) return;
                                    let o = ++i.public.seq;i.optimistic = r(947482).h4(a),
                                    i.public.value = r(947482).h4(a.output),
                                    i.public.valueSeq = o;
                                    return
                                }
                            case "error":
                                {
                                    let e = ++i.public.seq;i.public.loading = !1,
                                    i.public.error = t.error,
                                    i.public.errorSeq = e;
                                    return
                                }
                            default:
                                (0, r(722371).HB)(t)
                        }
                    })
                }
                dispatch = e => {
                    ("rows" === e.type || "error" === e.type || "unchanged" === e.type) && this.resolveRerunPromises();
                    let t = this.state,
                        r = this.reducer(t, e);
                    this.state = r, t.public !== r.public && this.emitter.emit(r.public)
                };
                waitForRerun() {
                    return 0 === this.emitter.listenerCount() ? Promise.resolve() : new Promise(e => {
                        this.resolvers.push(e)
                    })
                }
                resolveRerunPromises() {
                    this.resolvers.forEach(e => e())
                }
            }
        },
        623643: (e, t, r) => {
            r.r(t), r.d(t, {
                TabSqliteSubscriptionBackend: () => o
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(803949), r(581454), r(737550);
            class i {
                clock = 0;
                map = new Map;
                keyArray = [];
                maxSize;
                choices;
                constructor(e) {
                    this.maxSize = e.maxSize, this.choices = e.choices
                }
                get(e) {
                    let t = this.map.get(e);
                    if (t) return t.clock = this.clock++, t.value
                }
                set(e, t) {
                    let r = this.keyArray.length === this.maxSize ? this.evict() : this.keyArray.length;
                    this.map.set(e, {
                        value: t,
                        clock: this.clock++,
                        keyIndex: r
                    }), this.keyArray[r] = e
                }
                evict() {
                    let e, t = 1 / 0,
                        r = -1;
                    for (let i = 0; i < this.choices; i++) {
                        let i = Math.floor(Math.random() * this.keyArray.length),
                            s = this.keyArray[i],
                            a = this.map.get(s);
                        a.clock < t && (e = s, t = a.clock, r = i)
                    }
                    if (-1 === r) throw Error("No entry found");
                    return this.map.delete(e), r
                }
            }
            class s {
                lru = new i({
                    maxSize: 100,
                    choices: 2
                });
                debug = !1;
                parse(e) {
                    let t, i = this.lru.get(e);
                    if (i) return i;
                    try {
                        var s, a;
                        let i, o, n, l, u, h;
                        s = e, a = this.debug, i = 0, o = (o = s.replace(/\s*\?\s*/g, () => {
                            let e = ++i;
                            return `$${e}`
                        })).replace(/\binsert or \w+ into\b/i, "insert into"), n = new Set, l = new Set, u = (0, r(456895).astVisitor)(e => ({
                            insert: t => (n.add(t.into.name), e.super().insert(t)),
                            update: t => (n.add(t.table.name), e.super().update(t)),
                            delete: t => (n.add(t.from.name), e.super().delete(t)),
                            truncateTable: t => (t.tables.forEach(e => n.add(e.name)), e.super().truncateTable(t)),
                            tableRef: t => (l.add(t.name), e.super().tableRef(t))
                        })), h = (0, r(456895).parseFirst)(o), u.statement(h), t = function e(t) {
                            switch (t.type) {
                                case "select":
                                case "insert":
                                case "update":
                                case "delete":
                                case "truncate table":
                                    return !0;
                                case "with":
                                    return e(t.in);
                                default:
                                    return !1
                            }
                        }(h) ? (n.forEach(e => l.delete(e)), {
                            type: "crud",
                            ast: a ? h : void 0,
                            readTables: Array.from(l),
                            writeTables: Array.from(n)
                        }) : {
                            type: "unknown",
                            ast: a ? h : void 0,
                            tables: Array.from(l)
                        }
                    } catch (e) {
                        t = {
                            type: "error",
                            error: (0, r(161179).A)(e)
                        }
                    }
                    return this.lru.set(e, t), t
                }
            }

            function a() {}
            class o {
                connection;
                config;
                observer;
                broadcastWritesChannel;
                queries = new Map;
                tableToReaderQuery = new(r(277637)).G(() => new Set);
                closed = !1;
                enqueueReactions;
                changedTables = new Map;
                scheduledQueries = [];
                parser = new s;
                constructor(e) {
                    this.config = e.config, this.connection = e.observer.unobservedConnection, this.enqueueReactions = r(381453).sg(() => this.reactToChanges(), e.debounceMs, {
                        maxWait: e.debounceMs
                    }), this.broadcastWritesChannel = e.broadcastWritesChannel, this.broadcastWritesChannel.addEventListener("message", this.handleOtherTabBroadcastEvent), this.observer = e.observer, this.observer.addListener(this.handleThisTabSqliteConnectionEvent)
                }
                create(e, t, r) {
                    if (this.queries.has(e)) throw Error(`SqliteSubscriptionBackend.create: subscription already exists: ${e}`);
                    if (this.closed) throw Error("SqliteSubscriptionBackend.create: closed");
                    let i = {
                        id: e,
                        args: t,
                        state: {
                            seq: 0,
                            rows: void 0,
                            error: void 0
                        },
                        readTables: this.getSelectedTables(t),
                        callback: r
                    };
                    i.readTables.forEach(e => this.tableToReaderQuery.get(e).add(i)), this.queries.set(e, i), this.scheduledQueries.push(i), this.enqueueReactions()
                }
                delete(e) {
                    let t = this.queries.get(e);
                    t && (this.queries.delete(e), t.readTables.forEach(e => this.tableToReaderQuery.get(e).delete(t)))
                }
                clear() {
                    this.queries.clear(), this.tableToReaderQuery.clear(), this.changedTables.clear(), this.scheduledQueries.length = 0
                }
                close() {
                    this.clear(), this.broadcastWritesChannel.close(), this.observer.removeListener(this.handleThisTabSqliteConnectionEvent), this.closed = !0
                }
                getSeq(e) {
                    let t = this.queries.get(e);
                    if (t) {
                        var r;
                        return {
                            seq: t.state.seq,
                            changeSeq: (null == (r = t.state.rows) ? void 0 : r.seq) ? ? 0
                        }
                    }
                }
                handleTableWrite(e, t) {
                    if ("string" != typeof e) throw Error(`sqliteSubscription.notifyTable: not a string: ${e}`);
                    this.changedTables.set(e, t || !!this.changedTables.get(e)), this.enqueueReactions()
                }
                handleMaybeWriteQuery(e) {
                    let t = this.parser.parse(e);
                    if (a("handleWriteQuery:", e, t), "error" === t.type)
                        if (this.config.isLocalhost) throw t.error;
                        else r(419750).O8(Error("Observed query could not be parsed", {
                            cause: t.error
                        }), {
                            from: "TabSqliteSubscriptionBackend",
                            type: "observedQueryParseError"
                        });
                    "crud" === t.type && t.writeTables.forEach(e => this.handleTableWrite(e, !0)), "unknown" === t.type && t.tables.forEach(e => this.handleTableWrite(e, !0))
                }
                handleThisTabSqliteConnectionEvent = e => {
                    if (a("handleConnectionEvent:", e), "rebuild" === e.type) {
                        for (let e of this.tableToReaderQuery.keys()) this.handleTableWrite(e, !0);
                        return
                    }
                    let {
                        batch: t,
                        result: i
                    } = e;
                    i.body.some(r(446130).Ll) || t.body.forEach((e, t) => {
                        let r = i.body[t];
                        ("Ok" === r.type || "DataOk" === r.type) && e.sql.match(/insert|update|create|delete|truncate/i) && this.handleMaybeWriteQuery(e.sql)
                    })
                };
                handleOtherTabBroadcastEvent = e => {
                    e.data.tables.forEach(e => this.handleTableWrite(e, !1))
                };
                getSelectedTables(e) {
                    if (e.readTables) return e.readTables;
                    let t = this.parser.parse(e.sql);
                    return "crud" === t.type ? t.readTables : []
                }
                async reactToChanges() {
                    let e = Array.from(this.changedTables);
                    this.changedTables.clear();
                    let t = new Set(this.scheduledQueries.filter(e => this.queries.has(e.id)));
                    for (let [r] of (this.scheduledQueries.length = 0, a("freshQueries", Array.from(t)), e))
                        for (let e of this.tableToReaderQuery.get(r)) t.add(e);
                    try {
                        if (0 === t.size) return;
                        let e = Array.from(t),
                            i = e.map(e => ({
                                getData: !0,
                                sql: e.args.sql,
                                args: e.args.args
                            }));
                        try {
                            let t = await (0, r(911822).G2)({
                                connection: this.connection,
                                statements: i,
                                queryName: `subscriptions:${e.map(e=>e.args.queryName).join(",")}`
                            });
                            e.forEach((e, r) => this.handleSubscriptionQueryResult(e, t[r].data))
                        } catch (i) {
                            let t = (0, r(161179).A)(i);
                            e.forEach(e => this.handleSubscriptionQueryError(e, t))
                        }
                    } finally {
                        this.shouldRunQueries() && this.enqueueReactions();
                        let t = e.filter(e => e[1]).map(e => e[0]);
                        if (t.length) {
                            let e = {
                                tables: t
                            };
                            this.broadcastWritesChannel.postMessage(e)
                        }
                    }
                }
                handleSubscriptionQueryResult(e, t) {
                    let i = ++e.state.seq;
                    if (e.args.primaryKey && e.state.rows) {
                        let s = function({
                            getKey: e,
                            equal: t,
                            prev: r,
                            next: i
                        }) {
                            let s;
                            if (0 === r.length) return 0 === i.length ? r : i;
                            if (0 === i.length) return i;
                            let a = r.length !== i.length,
                                o = i.map((i, o) => {
                                    let n = e(i),
                                        l = r[o];
                                    n !== (l ? e(l) : void 0) && (a = !0, n && (s || (s = new Map, r.forEach(t => {
                                        let r = e(t);
                                        r && t && (s ? ? = new Map).set(r, t)
                                    })), l = s.get(n)));
                                    return l && t(l, i) ? l : (a = !0, i)
                                });
                            return a ? o : r
                        }({
                            getKey: t => e.args.primaryKey.map(e => t[e]).join(":"),
                            equal: r(795676).A,
                            prev: e.state.rows.value,
                            next: t
                        });
                        if (s === e.state.rows.value) {
                            e.state.rows.value, e.callback({
                                type: "unchanged",
                                seq: i
                            });
                            return
                        }
                        t = s
                    }
                    let s = {
                        type: "rows",
                        value: t,
                        seq: i
                    };
                    e.state.rows = s, e.state.error = void 0, e.state.rows.value, e.callback(s)
                }
                handleSubscriptionQueryError(e, t) {
                    let r = {
                        type: "error",
                        seq: ++e.state.seq,
                        error: t
                    };
                    e.state.error = r, e.state.error, e.callback(r)
                }
                shouldRunQueries() {
                    return this.scheduledQueries.length > 0 || this.changedTables.size > 0
                }
            }
        },
        941053: (e, t, r) => {
            function i(e, t) {
                switch (t.type) {
                    case "put":
                        if (e.byUpdateId[t.update.id] === t.update) return e;
                        return r(947482).jM(e, e => {
                            e.byUpdateId[t.update.id] = r(947482).h4(t.update), e.count++
                        });
                    case "del":
                        if (!e.byUpdateId[t.id]) return e;
                        return r(947482).jM(e, e => {
                            delete e.byUpdateId[t.id], e.count--
                        });
                    default:
                        (0, r(722371).HB)(t)
                }
            }
            r.r(t), r.d(t, {
                OptimisticUpdateComposer: () => l,
                OptimisticUpdateMemoizer: () => s,
                reduceOptimisticRowsState: () => u,
                reduceOptimisticUpdateState: () => i
            }), r(16280), r(944114), r(898992), r(354520), r(581454);
            class s {
                constructor(e) {
                    this.getKey = e
                }
                rowTypeUpdateCache = new WeakMap;
                applyUpdates(e, t, i) {
                    let s;
                    if (0 === i.count || 0 === t.length) return e;
                    let n = e.slice(),
                        l = !1,
                        u = e => {
                            if (!s) {
                                s = new Map;
                                for (let e = 0; e < n.length; e++) {
                                    let t = n[e];
                                    t && s.set(this.getKey(t), e)
                                }
                            }
                            return s.get(e) ? ? -1
                        };
                    for (let e = 0; e < t.length; e++) {
                        var h, p;
                        let r, d, c = t[e],
                            y = i.byUpdateId[c];
                        if (!y) continue;
                        let w = e => {
                            let t = u(e),
                                r = this.applyUpdateToRow(n[t], e, y);
                            return -1 !== t && (n[t] = void 0, l = !0), r
                        };
                        null != (h = y.addStart) && h.length && (r = y.addStart.map(w)), null != (p = y.addEnd) && p.length && (d = y.addEnd.map(e => {
                            var t;
                            if (!(null != (t = y.addStart) && t.includes(e))) return w(e)
                        }));
                        for (let e = 0; e < n.length; e++) {
                            let t = n[e];
                            if (t) {
                                let r = this.getKey(t),
                                    i = this.applyUpdateToRow(t, r, y);
                                i !== t && (n[e] = i, l = !0, i || (s = void 0))
                            }
                        }
                        r && (a(n, r), s = void 0, l = !0), d && (o(n, d), s = void 0, l = !0)
                    }
                    return l ? n.filter(r(722371).O9) : e
                }
                applyUpdateToRow(e, t, i) {
                    var s;
                    let a = this.rowTypeUpdateCache.get(i);
                    if (e && "object" == typeof e && null != (s = a) && s.has(e)) return a.get(e);
                    let o = function(e, t, i) {
                        let s = i.byRowKey[t];
                        if (!s) return e;
                        switch (s.type) {
                            case "put":
                                return s.row;
                            case "patch":
                                if (!e || "object" != typeof e) return e;
                                return r(947482).$i(e, s.patch);
                            case "delete":
                                return;
                            default:
                                (0, r(722371).HB)(s)
                        }
                    }(e, t, i);
                    return e && o && o !== e && "object" == typeof e && (a || (a = new WeakMap, this.rowTypeUpdateCache.set(i, a)), a.set(e, o)), o
                }
            }

            function a(e, t) {
                if (t.length < 5e3) e.unshift(...t);
                else
                    for (let r = t.length - 1; r >= 0; r--) e.unshift(t[r])
            }

            function o(e, t) {
                if (t.length < 5e3) e.push(...t);
                else
                    for (let r = 0; r < t.length; r++) e.push(t[r])
            }
            let n = 0;
            class l {
                constructor(e, t) {
                    this.rowType = e, this.singleton = t
                }
                alive = !0;
                queryUpdate = {
                    id: "o:composer:query",
                    byRowKey: {},
                    rowTypeName: this.rowType.name,
                    addStart: void 0,
                    addEnd: void 0,
                    count: 0
                };
                rowTypeUpdate = {
                    id: "o:composer:rowType",
                    byRowKey: {},
                    rowTypeName: this.rowType.name,
                    addStart: void 0,
                    addEnd: void 0,
                    count: 0
                };
                move(e, t) {
                    if (this.isSingleton()) throw Error(`Cannot move rows for singleton row type ${this.rowType.name} (there is max one row)`);
                    this.assertAlive();
                    let r = (Array.isArray(t) ? t : [t]).map(this.getKey);
                    this.moveKeys(e, r)
                }
                add(e, t) {
                    if (this.isSingleton()) throw Error(`Cannot add rows for singleton row type ${this.rowType.name} (there is max one row, use setSingleton instead)`);
                    this.assertAlive();
                    let r = (Array.isArray(t) ? t : [t]).map(e => {
                        let t = this.getKey(e);
                        return this.queryUpdate.byRowKey[t] = {
                            type: "put",
                            row: e
                        }, t
                    });
                    this.moveKeys(e, r)
                }
                remove(e) {
                    this.assertAlive();
                    let t = this.getKey(e);
                    this.queryUpdate.byRowKey[t] = {
                        type: "delete"
                    }, this.queryUpdate.count++
                }
                update(e, t) {
                    var i, s;
                    this.assertAlive();
                    let a = this.getKey(e),
                        o = this.rowTypeUpdate.byRowKey[a];
                    if ((null == o ? void 0 : o.type) === "delete") return e;
                    r(947482).YT();
                    let [n, l] = r(947482).vI(e, t), u = this.getKey(n);
                    if (a !== u) throw Error(`Optimistic update would change row's primary key: ${a} -> ${u}`);
                    return this.rowTypeUpdate.byRowKey[a] = (i = this.rowTypeUpdate.byRowKey[a], s = {
                        type: "patch",
                        patch: l
                    }, (null == i ? void 0 : i.type) === "patch" && "patch" === s.type ? {
                        type: "patch",
                        patch: i.patch.concat(s.patch)
                    } : (null == i ? void 0 : i.type) === "put" && "patch" === s.type ? {
                        type: "put",
                        row: r(947482).$i(i.row, s.patch)
                    } : s), this.rowTypeUpdate.count++, n
                }
                delete(e) {
                    this.assertAlive(), this.rowTypeUpdate.byRowKey[this.getKey(e)] = {
                        type: "delete"
                    }, this.rowTypeUpdate.count++
                }
                setSingleton(e) {
                    let t;
                    if (!this.isSingleton()) throw Error(`Cannot set singleton row for non-singleton query ${this.rowType.name} (use add/remove/delete/update instead)`);
                    if (this.assertAlive(), e) t = this.getKey(e);
                    else if (this.rowType instanceof r(902880).Y) t = this.rowType.getKey();
                    else throw Error(`Cannot set singleton row for non-singleton row type ${this.rowType.name} to undefined`);
                    return e ? (this.moveKeys("start", [t]), this.queryUpdate.byRowKey[t] = {
                        type: "put",
                        row: e
                    }) : (this.queryUpdate.byRowKey[t] = {
                        type: "delete"
                    }, this.queryUpdate.count++), e
                }
                finalizedUpdates;
                done() {
                    if (this.alive = !1, this.finalizedUpdates) return this.finalizedUpdates;
                    let e = n++;
                    return this.finalizedUpdates = {
                        queryUpdate: this.queryUpdate.count > 0 ? { ...this.queryUpdate,
                            id: `o:query:${this.rowType.name}:${e}`
                        } : void 0,
                        rowTypeUpdate: this.rowTypeUpdate.count > 0 ? { ...this.rowTypeUpdate,
                            id: `o:rowType:${this.rowType.name}:${e}`
                        } : void 0
                    }, this.finalizedUpdates
                }
                assertAlive() {
                    if (!this.alive) throw Error(`Cannot perform optimistic updates to row type ${this.rowType.name} after optimistic transaction closed.`)
                }
                isSingleton() {
                    return this.singleton || this.rowType.singleton
                }
                getKey = e => this.rowType.getKey(e);
                moveKeys(e, t) {
                    "start" === e ? (this.queryUpdate.addStart ? ? = [], a(this.queryUpdate.addStart, t)) : (this.queryUpdate.addEnd ? ? = [], o(this.queryUpdate.addEnd, t)), this.queryUpdate.count += t.length
                }
            }

            function u(e, t, s) {
                return r(947482).jM(e, a => {
                    switch (t.type) {
                        case "put":
                            {
                                let o = i(e.optimistic, t);
                                if (o === e.optimistic) return;
                                if (a.optimistic = r(947482).h4(o), e.output) {
                                    let i = s.applyUpdates(e.output, [t.update.id], e.optimistic);
                                    a.output = r(947482).h4(i)
                                } else e.input && (a.output = r(947482).h4(s.applyUpdates(e.input, (0, r(722371).objectKeys)(e.optimistic.byUpdateId), e.optimistic)));
                                return
                            }
                        case "del":
                            let o = i(e.optimistic, t);
                            if (o === e.optimistic) return;
                            a.optimistic = r(947482).h4(o), e.input && e.optimistic.count > 0 ? a.output = r(947482).h4(s.applyUpdates(e.input, (0, r(722371).objectKeys)(o.byUpdateId), o)) : a.output = r(947482).h4(e.input);
                            return;
                        case "rows":
                            a.input = r(947482).h4(t.rows), e.optimistic.count > 0 ? a.output = r(947482).h4(s.applyUpdates(t.rows, (0, r(722371).objectKeys)(e.optimistic.byUpdateId), e.optimistic)) : a.output = r(947482).h4(t.rows);
                            return;
                        default:
                            (0, r(722371).HB)(t)
                    }
                })
            }
        }
    }
]);