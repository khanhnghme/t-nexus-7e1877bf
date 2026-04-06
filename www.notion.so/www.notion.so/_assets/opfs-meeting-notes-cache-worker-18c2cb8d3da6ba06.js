(() => {
    "use strict";
    var e, t, r, n, a, i = {
            157322: (e, t, r) => {
                r(16280), r(944114);
                let n = Symbol("Comlink.proxy"),
                    a = Symbol("Comlink.endpoint"),
                    i = Symbol("Comlink.releaseProxy"),
                    s = Symbol("Comlink.finalizer"),
                    o = Symbol("Comlink.thrown"),
                    l = e => "object" == typeof e && null !== e || "function" == typeof e,
                    c = new Map([
                        ["proxy", {
                            canHandle: e => l(e) && e[n],
                            serialize(e) {
                                let {
                                    port1: t,
                                    port2: r
                                } = new MessageChannel;
                                return u(e, t), [r, [r]]
                            },
                            deserialize: e => {
                                var t;
                                let r;
                                return e.start(), t = e, r = new Map, t.addEventListener("message", function(e) {
                                        let {
                                            data: t
                                        } = e;
                                        if (!t || !t.id) return;
                                        let n = r.get(t.id);
                                        if (n) try {
                                            n(t)
                                        } finally {
                                            r.delete(t.id)
                                        }
                                    }),
                                    function e(t, r, n = [], s = function() {}) {
                                        let o, l = !1,
                                            c = new Proxy(s, {
                                                get(a, s) {
                                                    if (f(l), s === i) return () => {
                                                        p && p.unregister(c), d(t), r.clear(), l = !0
                                                    };
                                                    if ("then" === s) {
                                                        if (0 === n.length) return {
                                                            then: () => c
                                                        };
                                                        let e = b(t, r, {
                                                            type: "GET",
                                                            path: n.map(e => e.toString())
                                                        }).then(w);
                                                        return e.then.bind(e)
                                                    }
                                                    return e(t, r, [...n, s])
                                                },
                                                set(e, a, i) {
                                                    f(l);
                                                    let [s, o] = m(i);
                                                    return b(t, r, {
                                                        type: "SET",
                                                        path: [...n, a].map(e => e.toString()),
                                                        value: s
                                                    }, o).then(w)
                                                },
                                                apply(i, s, o) {
                                                    f(l);
                                                    let c = n[n.length - 1];
                                                    if (c === a) return b(t, r, {
                                                        type: "ENDPOINT"
                                                    }).then(w);
                                                    if ("bind" === c) return e(t, r, n.slice(0, -1));
                                                    let [u, h] = g(o);
                                                    return b(t, r, {
                                                        type: "APPLY",
                                                        path: n.map(e => e.toString()),
                                                        argumentList: u
                                                    }, h).then(w)
                                                },
                                                construct(e, a) {
                                                    f(l);
                                                    let [i, s] = g(a);
                                                    return b(t, r, {
                                                        type: "CONSTRUCT",
                                                        path: n.map(e => e.toString()),
                                                        argumentList: i
                                                    }, s).then(w)
                                                }
                                            });
                                        return o = (y.get(t) || 0) + 1, y.set(t, o), p && p.register(c, t, c), c
                                    }(t, r, [], void 0)
                            }
                        }],
                        ["throw", {
                            canHandle: e => l(e) && o in e,
                            serialize: ({
                                value: e
                            }) => [e instanceof Error ? {
                                    isError: !0,
                                    value: {
                                        message: e.message,
                                        name: e.name,
                                        stack: e.stack
                                    }
                                } : {
                                    isError: !1,
                                    value: e
                                },
                                []
                            ],
                            deserialize(e) {
                                if (e.isError) throw Object.assign(Error(e.value.message), e.value);
                                throw e.value
                            }
                        }]
                    ]);

                function u(e, t = globalThis, r = ["*"]) {
                    t.addEventListener("message", function a(i) {
                        let l;
                        if (!i || !i.data) return;
                        if (! function(e, t) {
                                for (let r of e)
                                    if (t === r || "*" === r || r instanceof RegExp && r.test(t)) return !0;
                                return !1
                            }(r, i.origin)) return void console.warn(`Invalid origin '${i.origin}' for comlink proxy`);
                        let {
                            id: c,
                            type: f,
                            path: d
                        } = Object.assign({
                            path: []
                        }, i.data), y = (i.data.argumentList || []).map(w);
                        try {
                            var p, g, b;
                            let t = d.slice(0, -1).reduce((e, t) => e[t], e),
                                r = d.reduce((e, t) => e[t], e);
                            switch (f) {
                                case "GET":
                                    l = r;
                                    break;
                                case "SET":
                                    t[d.slice(-1)[0]] = w(i.data.value), l = !0;
                                    break;
                                case "APPLY":
                                    l = r.apply(t, y);
                                    break;
                                case "CONSTRUCT":
                                    p = new r(...y), l = Object.assign(p, {
                                        [n]: !0
                                    });
                                    break;
                                case "ENDPOINT":
                                    {
                                        let {
                                            port1: t,
                                            port2: r
                                        } = new MessageChannel;u(e, r),
                                        g = t,
                                        b = [t],
                                        v.set(g, b),
                                        l = g
                                    }
                                    break;
                                case "RELEASE":
                                    l = void 0;
                                    break;
                                default:
                                    return
                            }
                        } catch (e) {
                            l = {
                                value: e,
                                [o]: 0
                            }
                        }
                        Promise.resolve(l).catch(e => ({
                            value: e,
                            [o]: 0
                        })).then(r => {
                            let [n, i] = m(r);
                            t.postMessage(Object.assign(Object.assign({}, n), {
                                id: c
                            }), i), "RELEASE" === f && (t.removeEventListener("message", a), h(t), s in e && "function" == typeof e[s] && e[s]())
                        }).catch(e => {
                            let [r, n] = m({
                                value: TypeError("Unserializable return value"),
                                [o]: 0
                            });
                            t.postMessage(Object.assign(Object.assign({}, r), {
                                id: c
                            }), n)
                        })
                    }), t.start && t.start()
                }

                function h(e) {
                    "MessagePort" === e.constructor.name && e.close()
                }

                function f(e) {
                    if (e) throw Error("Proxy has been released and is not useable")
                }

                function d(e) {
                    return b(e, new Map, {
                        type: "RELEASE"
                    }).then(() => {
                        h(e)
                    })
                }
                let y = new WeakMap,
                    p = "FinalizationRegistry" in globalThis && new FinalizationRegistry(e => {
                        let t = (y.get(e) || 0) - 1;
                        y.set(e, t), 0 === t && d(e)
                    });

                function g(e) {
                    var t;
                    let r = e.map(m);
                    return [r.map(e => e[0]), (t = r.map(e => e[1]), Array.prototype.concat.apply([], t))]
                }
                let v = new WeakMap;

                function m(e) {
                    for (let [t, r] of c)
                        if (r.canHandle(e)) {
                            let [n, a] = r.serialize(e);
                            return [{
                                type: "HANDLER",
                                name: t,
                                value: n
                            }, a]
                        }
                    return [{
                        type: "RAW",
                        value: e
                    }, v.get(e) || []]
                }

                function w(e) {
                    switch (e.type) {
                        case "HANDLER":
                            return c.get(e.name).deserialize(e.value);
                        case "RAW":
                            return e.value
                    }
                }

                function b(e, t, r, n) {
                    return new Promise(a => {
                        let i = [, , , , ].fill(0).map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16)).join("-");
                        t.set(i, a), e.start && e.start(), e.postMessage(Object.assign({
                            id: i
                        }, r), n)
                    })
                }
                let k = {
                    PCM_F32_16000_MONO: {
                        id: 0
                    }
                };
                class E extends Error {
                    constructor(e) {
                        super(e), this.name = "OPFSMeetingNotesCacheKeyVersionError"
                    }
                }
                class O extends Error {
                    constructor(e) {
                        super(e), this.name = "OPFSMeetingNotesCacheKeyFileTypeError"
                    }
                }

                function H(e) {
                    let t;
                    for (let [r, n] of Object.entries(k))
                        if (n.id === parseInt(e)) {
                            t = r;
                            break
                        }
                    return t || new O(`invalid OPFS cache key -- unknown file type: ${e}`)
                }

                function S(e) {
                    let [t, ...r] = e.split("__");
                    switch (t) {
                        case "1":
                            {
                                let [e, t, n, a] = r,
                                i = H(a);
                                if (i instanceof O) return i;
                                return {
                                    version: 1,
                                    userId: e,
                                    blockId: t,
                                    recordingId: n,
                                    fileType: i
                                }
                            }
                        case "2":
                            {
                                let [e, t, n, a, i] = r,
                                s = H(i);
                                if (s instanceof O) return s;
                                return {
                                    version: 2,
                                    userId: e,
                                    blockId: t,
                                    transcriptTabId: n,
                                    recordingId: a,
                                    fileType: s
                                }
                            }
                        default:
                            return new E(`invalid OPFS cache key -- unknown version: ${e}`)
                    }
                }

                function C(e) {
                    return new BroadcastChannel(`opfs-meeting-notes-cache::${e}`)
                }
                u(new class {
                    cacheDirPromise;
                    syncHandle;
                    key;
                    constructor() {
                        this.getCacheDir().catch(e => {})
                    }
                    async getCacheDir() {
                        return this.cacheDirPromise || (this.cacheDirPromise = navigator.storage.getDirectory().then(e => e.getDirectoryHandle("notion-opfs-meeting-notes-cache", {
                            create: !0
                        }))), this.cacheDirPromise
                    }
                    async write(e, t) {
                        try {
                            e !== this.key && this.syncHandle && (this.syncHandle.close(), this.syncHandle = void 0, this.key = void 0);
                            let r = !1;
                            if (!this.syncHandle) {
                                let t = await this.getCacheDir();
                                try {
                                    let r = await t.getFileHandle(e);
                                    this.syncHandle = await r.createSyncAccessHandle(), this.key = e
                                } catch (n) {
                                    try {
                                        let n = await t.getFileHandle(e, {
                                            create: !0
                                        });
                                        this.syncHandle = await n.createSyncAccessHandle(), this.key = e, r = !0
                                    } catch (e) {
                                        throw e
                                    }
                                }
                            }
                            let n = this.syncHandle.getSize();
                            this.syncHandle.write(t, {
                                at: n
                            }), this.syncHandle.flush();
                            let a = S(e);
                            if (!(a instanceof Error)) {
                                let e = C(a.blockId);
                                e.postMessage(r ? "file_added" : "file_updated"), e.close()
                            }
                        } catch (e) {
                            throw this.close(), e
                        }
                    }
                    async readBuffer(e) {
                        var t;
                        let r = await this.getCacheDir(),
                            n = await r.getFileHandle(e),
                            a = await n.getFile(),
                            i = await a.arrayBuffer();
                        return t = [i], v.set(i, t), i
                    }
                    close() {
                        this.syncHandle && (this.syncHandle.close(), this.syncHandle = void 0, this.key = void 0)
                    }
                    async delete(e) {
                        e === this.key && this.syncHandle && (this.syncHandle.close(), this.syncHandle = void 0, this.key = void 0);
                        let t = await this.getCacheDir();
                        await t.removeEntry(e, {
                            recursive: !0
                        });
                        let r = S(e);
                        if (!(r instanceof Error)) {
                            let e = C(r.blockId);
                            e.postMessage("file_removed"), e.close()
                        }
                    }
                    async deleteAll(e) {
                        for await (let t of (await this.getCacheDir()).values())(void 0 === e || t.name.includes(e)) && await this.delete(t.name)
                    }
                    async listFiles(e) {
                        let t = await this.getCacheDir(),
                            r = [];
                        for await (let n of t.values())
                        "directory" !== n.kind && (!e || n.name.includes(e)) && r.push(await n.getFile());
                        return r
                    }
                    enableDebug() {}
                    disableDebug() {}
                })
            }
        },
        s = {};

    function o(e) {
        var t = s[e];
        if (void 0 !== t) return t.exports;
        var r = s[e] = {
            exports: {}
        };
        return i[e].call(r.exports, r, r.exports, o), r.exports
    }
    o.m = i, o.x = () => {
        var e = o.O(void 0, [6187], () => o(157322));
        return o.O(e)
    }, e = [], o.O = (t, r, n, a) => {
        if (r) {
            a = a || 0;
            for (var i = e.length; i > 0 && e[i - 1][2] > a; i--) e[i] = e[i - 1];
            e[i] = [r, n, a];
            return
        }
        for (var s = 1 / 0, i = 0; i < e.length; i++) {
            for (var [r, n, a] = e[i], l = !0, c = 0; c < r.length; c++)(!1 & a || s >= a) && Object.keys(o.O).every(e => o.O[e](r[c])) ? r.splice(c--, 1) : (l = !1, a < s && (s = a));
            if (l) {
                e.splice(i--, 1);
                var u = n();
                void 0 !== u && (t = u)
            }
        }
        return t
    }, o.f = {}, o.e = e => Promise.all(Object.keys(o.f).reduce((t, r) => (o.f[r](e, t), t), [])), o.u = e => {
        if (6187 === e) return "6187-68b11dd91611a449.js"
    }, o.miniCssF = e => {}, o.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), o.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o.p = "/_assets/", t = {
        81561: 1
    }, o.f.i = (e, r) => {
        t[e] || importScripts(o.p + o.u(e))
    }, n = (r = globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push.bind(r), r.push = e => {
        var [r, a, i] = e;
        for (var s in a) o.o(a, s) && (o.m[s] = a[s]);
        for (i && i(o); r.length;) t[r.pop()] = 1;
        n(e)
    }, a = o.x, o.x = () => o.e(6187).then(a), o.x()
})();