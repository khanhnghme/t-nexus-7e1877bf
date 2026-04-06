(() => {
    "use strict";
    var e, t, r, o, i, n = {
            161179: (e, t, r) => {
                function o(e) {
                    if (e instanceof Error) return e;
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch {}
                    return "object" == typeof e && null !== e ? Object.assign(Error("Expected error, but caught non-error object"), e) : "string" == typeof e ? Object.assign(Error(e), {
                        cause: e
                    }) : Object.assign(Error(`Expected error, but caught \`${String(e)}\` (${typeof e})`), {
                        cause: e
                    })
                }
                r.d(t, {
                    A: () => o
                }), r(16280)
            },
            331653: (e, t, r) => {
                r(944114), r(898992), r(354520), r(581454), r(727413)
            },
            497584: (e, t, r) => {
                let o;
                r(16280), r(581454), r(898992), r(354520), r(737550), r(944114), r(269479), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(430670), r(908872), r(18107), r(967357);
                async function i(e) {
                    return (await Promise.resolve().then(r.bind(r, 610568))).default(e)
                }
                let n = "notion-db-v5.sqlite3",
                    a = ["notion-db.sqlite3", "notion-db-v0.sqlite3", "notion-db-v1.sqlite3", "notion-db-v2.sqlite3", "notion-db-v3.sqlite3", "notion-db-v4.sqlite3"],
                    l = console.warn;
                console.warn = (...e) => {
                    "sqlite3_step() rc=" !== e[0] && l(...e)
                }, r(681335).p({
                    async initialize() {
                        o = await s.createInstance()
                    },
                    execSqliteBatch(e) {
                        if (!o) throw Error("Sqlite DB was not initialized");
                        return o.execSqliteBatch(e)
                    },
                    execSqliteBatchV2(e) {
                        if (!o) throw Error("Sqlite DB was not initialized");
                        return o.execSqliteBatchV2(e)
                    },
                    async completelyRebuildSqliteDb() {
                        if (!o) throw Error("Sqlite DB was not initialized");
                        await o.closeDbAndWipeAllData(), o = await s.createInstance()
                    }
                });
                class s {
                    implementation;
                    constructor(e) {
                        this.implementation = e
                    }
                    static async createInstance() {
                        let e = await i(),
                            t = await e.installOpfsSAHPoolVfs({});
                        if (!("OpfsSAHPoolDb" in t)) throw t;
                        let r = new t.OpfsSAHPoolDb(`/${n}`),
                            o = new s({
                                sqlite3: e,
                                PoolUtil: t,
                                db: r
                            });
                        return o.deleteDeprecatedFiles(), o
                    }
                    execSqliteBatch(e) {
                        return Promise.resolve(this.execSqliteBatchInternal(e))
                    }
                    execSqliteBatchV2(e) {
                        let {
                            precondition: t,
                            batch: r
                        } = e;
                        if (t) {
                            let [e] = this.execSqliteBatchInternal({
                                body: [t],
                                onError: void 0
                            }).body;
                            if ("DataOk" === e.type) {
                                let {
                                    precondition_result: t
                                } = function(e) {
                                    if (1 !== e.data.length) throw Error(`Expected exactly 1 result row, instead had ${e.data.length}.`);
                                    return e.data[0]
                                }(e);
                                if ("number" != typeof t) throw Error(`precondition_result must be 0/1, instead received: ${t} (type: ${typeof t})`);
                                if (1 === t) return Promise.resolve(this.execSqliteBatchInternal(r))
                            }
                            return Promise.resolve({
                                body: r.body.map(() => ({
                                    type: "PreconditionFailed",
                                    sqliteCode: "Error" === e.type ? e.sqliteCode : void 0
                                })),
                                onErrorResult: void 0
                            })
                        }
                        return Promise.resolve(this.execSqliteBatchInternal(r))
                    }
                    async closeDbAndWipeAllData() {
                        let {
                            db: e,
                            PoolUtil: t
                        } = this.implementation;
                        e.close(), await t.removeVfs()
                    }
                    deviceSupportsLoadPageChunk() {
                        return !1
                    }
                    execSqliteBatchInternal(e) {
                        let {
                            body: t,
                            onError: r
                        } = e, o = [], i = !1, n = Date.now();
                        for (let [e, r] of t.entries()) {
                            if (i) {
                                o[e] = {
                                    type: "ErrorBefore"
                                };
                                continue
                            }
                            let t = this.execSqliteStatement(r);
                            o[e] = t, i = "Error" === t.type || "ErrorBefore" === t.type || "PreconditionFailed" === t.type || "OutOfSpace" === t.type || "SharedWorkerFailedToDelegate" === t.type
                        }
                        return {
                            body: o,
                            onErrorResult: i && r ? this.execSqliteStatement(r) : void 0,
                            batchExecutionTimeMs: Date.now() - n
                        }
                    }
                    execSqliteStatement(e) {
                        try {
                            let {
                                sql: t,
                                args: r,
                                getData: o
                            } = e;
                            if (!o) return this.implementation.db.exec({
                                sql: t,
                                bind: r
                            }), {
                                type: "Ok"
                            }; {
                                let e = this.implementation.db.exec({
                                    sql: t,
                                    bind: r,
                                    rowMode: "object",
                                    returnValue: "resultRows"
                                });
                                return {
                                    type: "DataOk",
                                    data: e
                                }
                            }
                        } catch (e) {
                            if (e instanceof this.implementation.sqlite3.SQLite3Error) return {
                                type: "Error",
                                message: e.message,
                                name: e.name,
                                sqliteCode: e.resultCode
                            };
                            if (e instanceof Error) return {
                                type: "Error",
                                message: e.message,
                                name: e.name,
                                sqliteCode: void 0
                            };
                            return {
                                type: "Error",
                                message: "Unknown error",
                                name: "SqliteUnknownError",
                                sqliteCode: void 0
                            }
                        }
                    }
                    deleteDeprecatedFiles() {
                        for (let e of a) this.implementation.PoolUtil.unlink(`/${e}`)
                    }
                }
            },
            722371: (e, t, r) => {
                r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(737550), Symbol("deprecated api name"), Symbol("abstracted api name"), Symbol("info message"), Symbol("warning message")
            }
        },
        a = {};

    function l(e) {
        var t = a[e];
        if (void 0 !== t) return t.exports;
        var r = a[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return n[e].call(r.exports, r, r.exports, l), r.loaded = !0, r.exports
    }
    l.m = n, l.x = () => {
        var e = l.O(void 0, [6187, 24648, 49926, 22216, 92679, 75162], () => l(497584));
        return l.O(e)
    }, e = [], l.O = (t, r, o, i) => {
        if (r) {
            i = i || 0;
            for (var n = e.length; n > 0 && e[n - 1][2] > i; n--) e[n] = e[n - 1];
            e[n] = [r, o, i];
            return
        }
        for (var a = 1 / 0, n = 0; n < e.length; n++) {
            for (var [r, o, i] = e[n], s = !0, c = 0; c < r.length; c++)(!1 & i || a >= i) && Object.keys(l.O).every(e => l.O[e](r[c])) ? r.splice(c--, 1) : (s = !1, i < a && (a = i));
            if (s) {
                e.splice(n--, 1);
                var d = o();
                void 0 !== d && (t = d)
            }
        }
        return t
    }, l.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return l.d(t, {
            a: t
        }), t
    }, l.d = (e, t) => {
        for (var r in t) l.o(t, r) && !l.o(e, r) && Object.defineProperty(e, r, {
            enumerable: !0,
            get: t[r]
        })
    }, l.f = {}, l.e = e => Promise.all(Object.keys(l.f).reduce((t, r) => (l.f[r](e, t), t), [])), l.u = e => 6187 === e ? "6187-68b11dd91611a449.js" : 24648 === e ? "" + e + "-38afdf9dfd3a1dad.js" : 49926 === e ? "" + e + "-9cfbe48531b1398d.js" : "" + e + "-" + ({
        14528: "4cd7400f9fc3b4af",
        22216: "5f34122beab2e7a1",
        75162: "3f69bbcaf1b8b4d1",
        92679: "dfa4cb0276b6506f"
    })[e] + ".js", l.miniCssF = e => {}, l.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), l.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), l.r = e => {
        "u" > typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, l.nmd = e => (e.paths = [], e.children || (e.children = []), e), l.p = "/_assets/", l.b = self.location + "", t = {
        75528: 1
    }, l.f.i = (e, r) => {
        t[e] || importScripts(l.p + l.u(e))
    }, o = (r = globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push.bind(r), r.push = e => {
        var [r, i, n] = e;
        for (var a in i) l.o(i, a) && (l.m[a] = i[a]);
        for (n && n(l); r.length;) t[r.pop()] = 1;
        o(e)
    }, i = l.x, l.x = () => Promise.all([6187, 24648, 49926, 22216, 92679, 75162].map(l.e, l)).then(i), l.x()
})();