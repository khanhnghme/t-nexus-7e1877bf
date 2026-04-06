(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [44425], {
        99928: (e, t, r) => {
            "use strict";
            r.d(t, {
                _: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(803949), r(581454);
            class n {
                constructor(e = r(48091).Ay) {
                    this.dispatcher = e
                }
                shouldConnect = !1;
                keys = new Set;
                authToken;
                listener;
                listeners = new Map;
                connect(e) {
                    let {
                        keys: t,
                        authToken: r,
                        listener: n
                    } = e;
                    this.shouldConnect = !0, this.listener = n, this.keys = new Set(t), this.authToken = r, this.reconcile()
                }
                getKeys() {
                    return this.keys.values()
                }
                setKeys(e) {
                    this.keys = new Set(e), this.reconcile()
                }
                getListenerFn() {
                    return this.listener
                }
                setListenerFn(e) {
                    this.listener = e
                }
                getListenerReferences() {
                    return this.listeners.values().map(e => e.reference)
                }
                disconnect() {
                    this.shouldConnect = !1, this.reconcile()
                }
                reconcile() {
                    if (!this.shouldConnect) {
                        this.listeners.size > 0 && (this.listeners.values().forEach(e => {
                            this.dispatcher.removeListener(e.reference)
                        }), this.listeners.clear());
                        return
                    }
                    for (let [e, t] of this.listeners) this.keys.has(e) || (this.dispatcher.removeListener(t.reference), this.listeners.delete(e));
                    for (let e of this.keys) {
                        let t = this.listeners.get(e);
                        if (t) {
                            if (t.authToken === this.authToken) continue;
                            this.dispatcher.removeListener(t.reference)
                        }
                        let r = this.dispatcher.addListener({
                            key: e,
                            authorizationToken: this.authToken,
                            listener: this.groupListener,
                            subscriptionId: null == t ? void 0 : t.reference.subscriptionId
                        });
                        if (!r) {
                            this.listeners.delete(e);
                            continue
                        }
                        this.listeners.set(e, {
                            reference: r,
                            authToken: this.authToken
                        })
                    }
                }
                groupListener = e => {
                    var t;
                    return null == (t = this.listener) ? void 0 : t.call(this, e)
                }
            }
        },
        119965: (e, t, r) => {
            "use strict";
            r.d(t, {
                V: () => o
            });
            var n = r(296540);

            function o() {
                let e = (0, n.useRef)(!1),
                    t = (0, r(682985).K8)(() => r(728372).default.state.renderPhase, []),
                    o = (0, r(682985).K8)(() => r(329464).A.state.initialCollectionPendingRenderCount > 0, []);
                return "rendered" !== t || o || (e.current = !0), !e.current
            }
        },
        140290: (e, t, r) => {
            function n(e) {
                let t = "";
                e > 0 && (t += ";");
                let r = e.toString();
                return r.length > 1 && (t += n(r.length)), t += r
            }

            function o(e, t) {
                if (!e) throw Error(`Input is not a valid ELEN-encoded number: ${t}.`)
            }
            e.exports = {
                encode: function(e) {
                    if ("number" != typeof e) throw Error(`Value is not of type number: ${e}.`);
                    let {
                        sign: t,
                        exponent: o,
                        mantissa: i
                    } = r(194755).deconstruct(e), a = "";
                    return a += 1 === t ? "<" : ">", a += n(1 === t ? r(194755).MAX_EXPONENT - o : o), a += n(1 === t ? r(194755).MAX_MANTISSA - i : i)
                },
                decode: function(e) {
                    var t;
                    if ("string" != typeof e) throw Error(`Value is not of type string: ${e}.`);
                    let {
                        signLength: n,
                        sign: i
                    } = (o(0 < (t = e).length, t), ">" === t[0]) ? {
                        signLength: 1,
                        sign: 0
                    } : "<" === t[0] ? {
                        signLength: 1,
                        sign: 1
                    } : void o(!1, t), {
                        exponentLength: a,
                        exponent: s
                    } = function(e, t, n) {
                        if (o(n < e.length, e), "0" === e[n]) return {
                            exponentLength: 1,
                            exponent: 0 === t ? 0 : r(194755).MAX_EXPONENT
                        };
                        let i = n,
                            a = 0,
                            s, l;
                        for (;
                            ";" === e[i];) a += 1, i += 1;
                        for (o(0 !== a, e), l = 1; a > 0;) s = l, o((l = Number.parseInt(e.substr(i, l))) > 0, e), i += s, a -= 1;
                        return {
                            exponentLength: i - n,
                            exponent: 0 === t ? l : r(194755).MAX_EXPONENT - l
                        }
                    }(e, i, n), {
                        mantissaLength: l,
                        mantissa: c
                    } = function(e, t, n) {
                        if (o(n < e.length, e), "0" === e[n]) return {
                            mantissaLength: 1,
                            mantissa: 0 === t ? 0 : r(194755).MAX_MANTISSA
                        };
                        let i = n,
                            a = 0,
                            s, l;
                        for (;
                            ";" === e[i];) a += 1, i += 1;
                        for (o(0 !== a, e), l = 1; a > 0;) s = l, o((l = Number.parseInt(e.substr(i, l))) > 0, e), i += s, a -= 1;
                        return {
                            mantissaLength: i - n,
                            mantissa: 0 === t ? l : r(194755).MAX_MANTISSA - l
                        }
                    }(e, i, n + a);
                    return o(e.length === n + a + l, e), r(194755).construct({
                        sign: i,
                        exponent: s,
                        mantissa: c
                    })
                }
            }
        },
        168814: (e, t, r) => {
            "use strict";

            function n() {
                return (0, r(682985).K8)(() => r(329464).A.state.initialRenderCompleted, [])
            }
            r.d(t, {
                X: () => n
            })
        },
        194755: e => {
            function t(e, t) {
                return e * Math.pow(2, t)
            }

            function r(e, t) {
                return Math.floor(e / Math.pow(2, t))
            }
            e.exports = {
                MAX_EXPONENT: 2047,
                MAX_MANTISSA: 0xfffffffffffff,
                construct: function({
                    sign: e,
                    exponent: n,
                    mantissa: o
                }) {
                    var i, a, s, l, c, d;
                    if (0 !== e && 1 !== e) throw Error(`Invalid value for sign: ${e}.`);
                    if ("number" != typeof n || n < 0 || 2047 < n) throw Error(`Invalid value for exponent: ${n}.`);
                    if ("number" != typeof o || o < 0 || 0xfffffffffffff < o) throw Error(`Invalid value for mantissa: ${o}.`);
                    let u = new ArrayBuffer(8),
                        f = new Float64Array(u),
                        g = new Uint8Array(u);
                    return i = e, a = g, a[7] |= t(i, 7), s = n, l = g, l[7] |= r(s, 4), l[6] |= t(15 & s, 4), c = o, d = g, d[6] |= 255 & r(c, 48), d[5] |= 255 & r(c, 40), d[4] |= 255 & r(c, 32), d[3] |= 255 & r(c, 24), d[2] |= 255 & r(c, 16), d[1] |= 255 & r(c, 8), d[0] |= 255 & c, f[0]
                },
                deconstruct: function(e) {
                    var n, o;
                    if ("number" != typeof e) throw Error(`Value is not of type number: ${e}.`);
                    let i = new ArrayBuffer(8),
                        a = new Float64Array(i),
                        s = new Uint8Array(i);
                    return a[0] = e, {
                        sign: r(s[7], 7),
                        exponent: 0 + t(127 & (n = s)[7], 4) + r(n[6], 4),
                        mantissa: 0 + t(15 & (o = s)[6], 48) + t(o[5], 40) + t(o[4], 32) + t(o[3], 24) + t(o[2], 16) + t(o[1], 8) + o[0]
                    }
                }
            }
        },
        408863: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var o = Object.getOwnPropertyDescriptor(t, r);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, o)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
                    Object.defineProperty(e, "default", {
                        enumerable: !0,
                        value: t
                    })
                } : function(e, t) {
                    e.default = t
                }),
                i = this && this.__importStar || function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && n(t, e, r);
                    return o(t, e), t
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.jsonCodec = t.Codec = t.MaxEncoding = t.MinEncoding = t.MAX = t.MIN = t.ObjectLegacyEncoding = t.ObjectEncoding = t.ArrayEncoding = t.NumberEncoding = t.StringEncoding = t.BooleanEncoding = t.NullEncoding = void 0;
            let a = i(r(140290)),
                s = () => r(881270);
            t.NullEncoding = {
                match: e => null === e,
                encode: () => "",
                decode: () => null,
                compare: () => 0
            }, t.BooleanEncoding = {
                match: e => !0 === e || !1 === e,
                encode: e => JSON.stringify(e),
                decode: e => JSON.parse(e),
                compare: s().compare
            }, t.StringEncoding = {
                match: e => "string" == typeof e,
                encode: e => e,
                decode: e => e,
                compare: s().compare
            }, t.NumberEncoding = {
                match: e => "number" == typeof e,
                encode: e => a.encode(e),
                decode: e => a.decode(e),
                compare: s().compare
            }, t.ArrayEncoding = {
                match: e => Array.isArray(e),
                encode: (e, t) => e.map((e, r) => t(e).replace(/\x01/g, "\x01\x01").replace(/\x00/g, "\x01\0") + "\0").join(""),
                decode: (e, t) => {
                    if ("" === e) return [];
                    let r = /(\x01(\x01|\x00)|\x00)/g,
                        n = [],
                        o = 0;
                    for (;;) {
                        let i = r.exec(e);
                        if (null === i) return n;
                        if ("\x01" === i[0][0]) continue;
                        let a = i.index,
                            s = t(e.slice(o, a).replace(/\x01\x01/g, "\x01").replace(/\x01\x00/g, "\0"));
                        n.push(s), o = a + 1
                    }
                },
                compare: (e, t, r) => {
                    let n = Math.min(e.length, t.length);
                    for (let o = 0; o < n; o++) {
                        let n = r(e[o], t[o]);
                        if (0 !== n) return n
                    }
                    return (0, s().compare)(e.length, t.length)
                }
            }, t.ObjectEncoding = {
                match: e => "object" == typeof e && null !== e && Object.getPrototypeOf(e) === Object.prototype,
                encode: (e, r) => {
                    let n = function(e) {
                        let t = [];
                        for (let r of e)
                            for (let e of r) t.push(e);
                        return t
                    }(Object.entries(e).sort(([e], [t]) => (0, s().compare)(e, t)));
                    return t.ArrayEncoding.encode(n, r)
                },
                decode: (e, r) => {
                    let n = function(e) {
                            let t = [];
                            for (let r = 0; r < e.length; r += 2) {
                                let n = e.slice(r, r + 2);
                                t.push(n)
                            }
                            return t
                        }(t.ArrayEncoding.decode(e, r)),
                        o = {};
                    for (let [e, t] of n) o[e] = t;
                    return o
                },
                compare: (e, t, r) => {
                    let n = Object.entries(e).sort(([e], [t]) => (0, s().compare)(e, t)),
                        o = Object.entries(t).sort(([e], [t]) => (0, s().compare)(e, t)),
                        i = Math.min(n.length, o.length);
                    for (let e = 0; e < i; e++) {
                        let [t, i] = n[e], [a, l] = o[e], c = (0, s().compare)(t, a);
                        if (0 !== c) return c;
                        let d = r(i, l);
                        if (0 !== d) return d
                    }
                    return (0, s().compare)(n.length, o.length)
                }
            }, t.ObjectLegacyEncoding = {
                match: e => "object" == typeof e && null !== e && Object.getPrototypeOf(e) === Object.prototype,
                encode: (e, r) => {
                    let n = Object.entries(e).sort(([e], [t]) => (0, s().compare)(e, t));
                    return t.ArrayEncoding.encode(n, r)
                },
                decode: (e, r) => {
                    let n = t.ArrayEncoding.decode(e, r),
                        o = {};
                    for (let [e, t] of n) o[e] = t;
                    return o
                },
                compare: t.ObjectEncoding.compare
            }, t.MIN = Symbol("min"), t.MAX = Symbol("max"), t.MinEncoding = {
                match: e => e === t.MIN,
                encode: () => "",
                decode: () => t.MIN,
                compare: () => 0
            }, t.MaxEncoding = {
                match: e => e === t.MAX,
                encode: () => "",
                decode: () => t.MAX,
                compare: () => 0
            };
            class l {
                constructor(e) {
                    for (const t in this.encodings = e, this.encode = e => {
                            for (let [t, r] of Object.entries(this.encodings))
                                if (r.match(e)) return t + r.encode(e, this.encode);
                            throw Error(`Missing encoding for value: ${e}`)
                        }, this.decode = e => {
                            let t = e[0],
                                r = e.slice(1);
                            for (let [e, n] of Object.entries(this.encodings))
                                if (e === t) return n.decode(r, this.decode);
                            throw Error(`Missing encoding for value: ${e}`)
                        }, this.compare = (e, t) => {
                            let r, n;
                            if (e === t) return 0;
                            for (let [o, i] of Object.entries(this.encodings))
                                if (!r && i.match(e) && (r = [o, i]), !n && i.match(t) && (n = [o, i]), r && n) break;
                            if (!r) throw Error(`Missing encoding for value: ${e}`);
                            if (!n) throw Error(`Missing encoding for value: ${t}`);
                            return r[0] !== n[0] ? (0, s().compare)(r[0], n[0]) : r[1].compare(e, t, this.compare)
                        }, e)
                        if (1 !== t.length) throw Error(`Encoding prefix is not 1 byte: ${t}`)
                }
            }
            t.Codec = l, t.jsonCodec = new l({
                "\0": t.MinEncoding,
                b: t.NullEncoding,
                c: t.ObjectEncoding,
                d: t.ArrayEncoding,
                e: t.NumberEncoding,
                f: t.StringEncoding,
                g: t.BooleanEncoding,
                ÿ: t.MaxEncoding
            })
        },
        430837: function(e, t, r) {
            "use strict";
            var n = this && this.__createBinding || (Object.create ? function(e, t, r, n) {
                    void 0 === n && (n = r);
                    var o = Object.getOwnPropertyDescriptor(t, r);
                    (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = {
                        enumerable: !0,
                        get: function() {
                            return t[r]
                        }
                    }), Object.defineProperty(e, n, o)
                } : function(e, t, r, n) {
                    void 0 === n && (n = r), e[n] = t[r]
                }),
                o = this && this.__exportStar || function(e, t) {
                    for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || n(t, e, r)
                };
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), o(r(408863), t)
        },
        544294: (e, t, r) => {
            "use strict";
            let n, o;
            r.r(t), r.d(t, {
                SqliteCorruptionRecoveryStatusStore: () => ee,
                attemptFetchOfflinePages: () => K,
                cacheSidebarImagesDebounced: () => B,
                debugAttemptFetch: () => ec,
                loadRemotePageAndImagesBatched: () => N,
                useCacheSidebarImages: () => en,
                useFetchImportantPagesAfterSqliteCorruptionRecovery: () => eg,
                usePageSubscriptionManager: () => eo,
                useRefetchOfflinePages: () => el,
                useUpdateAutosyncedPages: () => ea().u
            }), r(16280), r(944114), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454);
            var i = () => r(986939),
                a = () => r(892002),
                s = () => r(627880),
                l = () => r(955630),
                c = () => r(774995),
                d = () => r(115118),
                u = () => r(688502),
                f = () => r(412951);
            let g = r(969475).lazy(() => r(969475).union([r(969475).tuple([r(969475).instanceOf(_), r(969475).instanceOf(Date), r(969475).instanceOf(_), r(969475).instanceOf(_), r(969475).string()]), r(969475).tuple([r(969475).instanceOf(_), r(969475).instanceOf(Date), r(969475).instanceOf(_), r(969475).isNull(), r(969475).isNull()])])),
                p = -2 n,
                h = {
                    BEFORE_ALL_OFFSETS: p,
                    atStart: () => ({
                        type: 1,
                        timestamp: -1,
                        offset: p
                    }),
                    atTimestamp: e => ({
                        type: 1,
                        timestamp: e,
                        offset: p
                    }),
                    encode: function(e) {
                        let t;
                        if (e.pointer) {
                            let n = "number" == typeof e.pointer.encodedTable ? e.pointer.encodedTable : (0, r(93953).vi)(e.pointer.encodedTable);
                            t = [new _(e.type, 16), new Date(e.timestamp), new _(e.offset, 64), new _(n, 16), e.pointer.id]
                        } else t = [new _(e.type, 16), new Date(e.timestamp), new _(e.offset, 64), null, null];
                        return (0, r(160641)._m)(y.encode(t))
                    },
                    decode: function(e) {
                        try {
                            let t = y.decode(e);
                            (0, r(915367).j)(g, t);
                            let [n, o, i, a, s] = t, l = n.toFloat64();
                            if (1 !== l) throw Error(`decoded type from payload[0]: is \`${l}\`, should be \`1\``);
                            let c = {
                                type: l,
                                timestamp: o.getTime(),
                                offset: i.value
                            };
                            return a && null !== s && (c.pointer = {
                                encodedTable: a.toFloat64(),
                                id: s
                            }), c
                        } catch (t) {
                            let e = (0, r(161179).A)(t);
                            throw e.message = `SyncCursor decode error: ${e.message}`, e
                        }
                    },
                    encodedStartCursor: () => n ? ? = h.encode(h.atStart()),
                    encodedAtTimestamp: e => h.encode(h.atTimestamp(e))
                };
            class m {
                constructor(e) {
                    this.bits = e
                }
                prefix = "i";
                match = e => !!(e && e instanceof _ && e.bits === this.bits);
                compare = (e, t) => {
                    var r, n;
                    return r = e.value, r < (n = t.value) ? -1 : +(r > n)
                };
                encode = e => this.encodeBigint(e.value);
                decode = e => new _(this.decodeBigint(e), this.bits);
                encodeBigint = e => {
                    this.assertFitsBits(e);
                    let t = e < 0 n ? "-" : "",
                        r = e < 0 n ? 2 n ** BigInt(this.bits) + e : e;
                    if (r < 0 n) throw Error(`Expected abs value twos compliment >0, instead was: ${r}`);
                    let n = r.toString(16).padStart(this.bits / 4, "0");
                    return `${t}${this.prefix}${n}`
                };
                decodeBigint = e => {
                    let t = BigInt("0x" + ("-" === e[0] ? e.slice(1 + this.prefix.length) : e.slice(this.prefix.length)));
                    return BigInt.asIntN(this.bits, t)
                };
                assertFitsBits = e => {
                    let t = BigInt.asIntN(this.bits, e);
                    if (t !== e) throw Error(`IntN bigint out of range for IntN<${this.bits}>: truncated to ${t}, expected ${e}`)
                }
            }
            class _ {
                value;
                constructor(e, t) {
                    this.bits = t, this.value = BigInt(e)
                }
                toFloat64() {
                    if (this.value > BigInt(Number.MAX_SAFE_INTEGER) || this.value < BigInt(Number.MIN_SAFE_INTEGER)) throw Error(`IntN value ${this.value} out of range ${Number.MIN_SAFE_INTEGER}-${Number.MAX_SAFE_INTEGER} for Float64`);
                    return Number(this.value)
                }
                toString() {
                    return `IntN<${this.bits}>(${this.value})`
                }
            }
            let y = new(r(430837)).Codec({
                "\0": r(430837).MinEncoding,
                '"': r(430837).StringEncoding,
                "#": r(430837).NumberEncoding,
                "%": {
                    match: e => !!(e && e instanceof Date),
                    compare: (e, t) => {
                        var r, n;
                        return (r = e) < (n = t) ? -1 : +(r > n)
                    },
                    encode: e => e.toISOString(),
                    decode: e => new Date(e)
                },
                2: new m(16),
                4: new m(32),
                8: new m(64),
                "?": r(430837).BooleanEncoding,
                "[": r(430837).ArrayEncoding,
                "{": r(430837).ObjectEncoding,
                þ: r(430837).NullEncoding,
                ÿ: r(430837).MaxEncoding
            });
            (0, r(202146).exposeDebugValue)("SyncCursor", h), (0, r(202146).exposeDebugValue)("SyncCursorCodec", y);
            var b = () => r(832375),
                v = () => r(419750),
                w = () => r(381453),
                S = () => r(975162),
                I = () => r(722371),
                E = () => r(719439),
                R = () => r(586490);

            function A(e) {
                let {
                    pageId: t,
                    cellId: r
                } = e;
                return [t, r || "NoCellId", "EmptyStack"].join("|")
            }

            function C(e) {
                let {
                    cursorItem: t,
                    pageId: r,
                    cellId: n
                } = e, {
                    id: o,
                    table: i,
                    index: a
                } = t;
                return [r, n || "NoCellId", o, i, a].join("|")
            }
            r(964979);
            var P = () => r(587031),
                M = () => r(247438),
                T = () => r(783826),
                O = () => r(551466);

            function k({
                icon: e,
                permissionRecord: t,
                recordMap: n,
                environment: o
            }) {
                var i;
                let a = (0, r(565546).WO)(e);
                switch (a.type) {
                    case "custom_emoji":
                        let s = (null == n ? void 0 : n.getModel(a.emoji.pointer)) ? ? o.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                            pointer: a.emoji.pointer,
                            userId: o.currentUser.id
                        });
                        if (!s) return;
                        let l = null == (i = s.getIconIfAlive()) ? void 0 : i.icon;
                        if (!l) return;
                        return {
                            url: l,
                            permissionRecord: a.emoji.pointer
                        };
                    case "url":
                        return {
                            url: e,
                            permissionRecord: t
                        };
                    case "unicode_emoji":
                    case "notion_icon":
                    case "app_package_asset":
                        return;
                    default:
                        (0, I().HB)(a)
                }
            }
            async function x({
                urlAndPermissionRecords: e,
                environment: t,
                abortSignal: r
            }) {
                for (let {
                        url: n,
                        permissionRecord: o
                    } of e) {
                    let e = await (0, T().L)({
                            url: n,
                            isAuthenticated: !0,
                            permissionRecord: o
                        }, t),
                        i = P().MU(e);
                    i && await new Promise((e, t) => {
                        if (r.aborted) return void t(new(O()).f);
                        let n = new Image,
                            o = () => {
                                n.onload = null, n.onerror = null
                            };
                        n.onload = () => {
                            o(), e()
                        }, n.onerror = r => {
                            (o(), r instanceof DOMException && "AbortError" === r.name || r instanceof O().f) ? t(new(O()).f): (v().O8(r, {
                                from: "cacheImagesForOffline",
                                type: "error",
                                data: {
                                    url: i
                                }
                            }), e())
                        }, n.src = i
                    })
                }
            }
            async function N(e) {
                var t, n, o;
                let i, a, s, {
                        request: c,
                        environment: d,
                        abortSignal: f,
                        skipBatching: g
                    } = e,
                    p = performance.now(),
                    h = 0,
                    m = (0, r(97376).L)("download_batch_size");
                if (m < 1) return {
                    imageCount: 0,
                    downloadedVersion: void 0,
                    downloadedSyncCursor: void 0,
                    collectionViewBlockIds: [],
                    pageDownloadTime: 0,
                    imagesDownloadTime: void 0,
                    batchedSyncCount: 0
                };
                let _ = g ? 1 : m;
                switch (c.type) {
                    case "syncOfflinePages":
                        i = await j.getInstance().syncPage({
                            batchSize: _,
                            request: c,
                            environment: d,
                            abortSignal: f
                        });
                        break;
                    case "syncPageRecordSinceTimestamp":
                        i = await L.getInstance().syncPage({
                            batchSize: _,
                            request: c,
                            environment: d,
                            abortSignal: f
                        });
                        break;
                    default:
                        (0, I().HB)(c)
                }
                f.throwIfAborted();
                let y = performance.now(),
                    v = i.recordMap.getModel({
                        table: b().evP,
                        id: c.page.id
                    });
                if (v && "full" === (0, r(764919).U)(d)) {
                    let e = function({
                        blockModel: e,
                        environment: t,
                        recordMap: r
                    }) {
                        let n = [],
                            o = [e.pointer, ...e.getRenderableContentPointers()],
                            i = new Set;
                        if (e.getType() === l().xd.page) {
                            let t = e.getFormatValue("page_cover");
                            t && n.push({
                                url: t,
                                permissionRecord: e.pointer
                            })
                        }
                        for (; o.length;) {
                            let e = o.shift();
                            if (!e || i.has(e.id)) continue;
                            i.add(e.id);
                            let s = (null == r ? void 0 : r.getModel(e)) ? ? t.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                                pointer: e,
                                userId: t.currentUser.id
                            });
                            if (s) {
                                if (s.getType() === l().xd.image) {
                                    let e = s.getFormatValue("display_source");
                                    e && n.push({
                                        url: e,
                                        permissionRecord: s.pointer
                                    })
                                } else if (s.getType() === l().xd.page || s.getType() === l().xd.callout) {
                                    let e = s.getFormatValue("page_icon");
                                    if (e) {
                                        let o = k({
                                            icon: e,
                                            permissionRecord: s.pointer,
                                            recordMap: r,
                                            environment: t
                                        });
                                        o && n.push(o)
                                    }
                                } else if (s.isCollectionView())
                                    for (let e of s.getCollectionPointers() ? ? []) {
                                        let o = (null == r ? void 0 : r.getModel(e)) ? ? t.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                                            pointer: e,
                                            userId: t.currentUser.id
                                        });
                                        if (o) {
                                            let i = o.getRawIcon();
                                            if (i) {
                                                let o = k({
                                                    icon: i,
                                                    permissionRecord: e,
                                                    recordMap: r,
                                                    environment: t
                                                });
                                                o && n.push(o)
                                            }
                                        }
                                    } else if ((0, l().Db)(s.getType(), s.getFormat())) {
                                        let e = s.getNonCollectionProperty("title");
                                        for (let o of M().air(e, {
                                                spaceId: void 0,
                                                inlinePageLink: void 0
                                            }).filter(e => e.table === b().e4Z)) {
                                            let e = (null == r ? void 0 : r.getModel(o)) ? ? t.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                                                pointer: o,
                                                userId: t.currentUser.id
                                            });
                                            if (e) {
                                                var a;
                                                let t = null == (a = e.getIconIfAlive()) ? void 0 : a.icon;
                                                t && n.push({
                                                    url: t,
                                                    permissionRecord: o
                                                })
                                            }
                                        }
                                    }
                                if (!s.isNavigableBlock())
                                    if (s.getType() === l().xd.transclusionReference) {
                                        let e = s.getTransclusionReferenceTargetPointer();
                                        if (!e) continue;
                                        let n = (null == r ? void 0 : r.getModel(e)) ? ? t.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                                            pointer: e,
                                            userId: t.currentUser.id
                                        });
                                        if (!n) continue;
                                        o.push(...n.getRenderableContentPointers())
                                    } else o.push(...s.getRenderableContentPointers())
                            }
                        }
                        return n
                    }({
                        blockModel: v,
                        environment: d,
                        recordMap: i.recordMap
                    });
                    f.throwIfAborted(), h = e.length, await x({
                        urlAndPermissionRecords: e,
                        environment: d,
                        abortSignal: f
                    }), f.throwIfAborted(), a = performance.now() - y
                }
                return {
                    imageCount: h,
                    downloadedVersion: i.serverPageVersionsByPageId[c.page.id],
                    downloadedSyncCursor: null == (t = i.serverPageSyncCursorsByPageId) ? void 0 : t[c.page.id],
                    collectionViewBlockIds: (n = c.page.id, (null == (s = (o = i.recordMap).getModel({
                        table: b().evP,
                        id: n
                    })) ? void 0 : s.getType()) === l().xd.collectionView ? [] : o.getModelsByTable(b().evP).filter(e => ((e, t) => {
                        if (e.getType() !== l().xd.collectionView) return !1;
                        for (let r of (0, u().MR)(e.pointer, t).slice(1)) {
                            if (r.id === n) return !0;
                            if (r.table === b().evP && r.getType() === l().xd.page) break
                        }
                        return !1
                    })(e, o)).map(e => e.id)),
                    pageDownloadTime: y - p,
                    imagesDownloadTime: a,
                    batchedSyncCount: i.batchedSyncCount
                }
            }

            function F() {
                return (0, r(97376).L)("download_max_requests_per_api_call")
            }
            class $ {
                constructor(e) {
                    this.performRequests = e
                }
                queueBySize = new(r(277637)).G(e => this.createQueue(e));
                async enqueue(e, t) {
                    if (e <= 1) {
                        let [e] = await this.performRequests([t]);
                        return e
                    }
                    return this.queueBySize.get(e).enqueue(t)
                }
                createQueue(e) {
                    return new(r(34128)).A({
                        performRequests: this.performRequests,
                        batchSize: e,
                        maxWorkers: 1,
                        requestDelayMs: 100
                    })
                }
            }
            class j {
                static instance;
                static getInstance() {
                    return j.instance ? ? = new j
                }
                queue = new $(async e => {
                    let t = await U({
                        environment: e[0].environment,
                        requestBatch: e.map(e => e.request),
                        abortSignal: (0, r(42919).N)(e.map(e => e.abortSignal))
                    });
                    return e.map(() => t)
                });
                syncPage(e) {
                    return this.queue.enqueue(e.batchSize, e)
                }
            }
            class L {
                static instance;
                static getInstance() {
                    return L.instance ? ? = new L
                }
                queue = new $(e => this.performSyncPageRecordSinceTimestampRequests(e));
                syncPage(e) {
                    return this.queue.enqueue(e.batchSize, e)
                }
                async performSyncPageRecordSinceTimestampRequests(e) {
                    var t;
                    if (0 === e.length) return [];
                    let {
                        environment: r,
                        abortSignal: n
                    } = e[0], o = f().RecordMapWithRole.create(), i = new Map, s = 0, l = 0, c = [];
                    for (let t of e) {
                        let {
                            page: e,
                            offlinePageMetadata: r
                        } = t.request;
                        if (i.has(e.id)) continue;
                        let n = (null == r ? void 0 : r.last_downloaded_sync_cursor) ? ? h.encodedStartCursor();
                        i.set(e.id, {
                            page: e,
                            shouldDelete: !1,
                            nextCursor: n,
                            lastCursor: n,
                            done: !1,
                            initialCursor: n,
                            headers: (0, d().WS)({
                                recordId: e.id,
                                spaceId: e.spaceId,
                                cellId: void 0
                            })
                        })
                    }
                    let u = new Set(i.keys()),
                        g = async e => {
                            let t = (0, d().E5)(e.map(e => {
                                let t = i.get(e);
                                if (!t) throw Error("Page state not found");
                                return t
                            }).filter(e => e.nextCursor));
                            return await S().lX(t.entries(), 10, async ([e, t]) => {
                                let o = F();
                                return await S().vA(t, o, async t => {
                                    let o = t.map(({
                                            page: e,
                                            nextCursor: t
                                        }) => {
                                            if (!t) throw Error(`Internal sync error: page ${e.id} has no next cursor`);
                                            return {
                                                page: e,
                                                cursor: t
                                            }
                                        }),
                                        i = await r.api.callApi({
                                            eventName: "syncPageRecordSinceTimestamp",
                                            environment: r,
                                            data: {
                                                requests: o
                                            },
                                            headers: e,
                                            inMemoryRecordCache: E().o,
                                            abortSignal: n
                                        });
                                    return (s++, "failed" === i.type) ? { ...i,
                                        requestBatch: o
                                    } : i
                                })
                            })
                        };
                    for (; u.size > 0 && l < 100;) {
                        for (let e of (await g(Array.from(u))).flat()) {
                            if ("failed" === e.type) {
                                let t = new(R()).m(e);
                                throw e.offline || v().O8(t, {
                                    from: "loadRemotePages",
                                    type: "syncPageRecordSinceTimestampFailed",
                                    data: {
                                        syncPageRecordSinceTimestampRequests: e.requestBatch
                                    }
                                }), t
                            }
                            let t = f().RecordMapWithRole.create(e.data.recordMap);
                            o.assign(t);
                            let n = [];
                            for (let [t, r] of Object.entries(e.data.results)) {
                                let e = i.get(t);
                                if (!e) throw Error(`Server returned unexpected page id: ${t}`);
                                e.shouldDelete = e.shouldDelete || r.shouldDelete, e.nextCursor = r.nextCursor, e.lastCursor = r.lastCursor ? ? r.nextCursor ? ? e.lastCursor, e.done = !r.nextCursor || r.shouldDelete, e.done && u.delete(t), e.shouldDelete && n.push(t)
                            }
                            for (let e of n) {
                                let {
                                    currentUser: {
                                        id: t
                                    },
                                    defaultRecordCache: {
                                        persistedRecordCache: n
                                    },
                                    sqliteConnection: o
                                } = r;
                                t && n && o && ((0, a().L)({
                                    connection: o,
                                    userId: t,
                                    originPageId: e,
                                    autosyncTypes: ["not_autosynced"]
                                }), n.deleteRecord({
                                    table: b().evP,
                                    id: e
                                }, t))
                            }
                            c.push(e.handleRecordMapForResponsePromise)
                        }
                        l++
                    }
                    l >= 100 && v().O8(Error("Recursively fetched syncPageRecordSinceTimestamp too many times."), {
                        from: "loadRemotePages",
                        type: "infiniteFetchPrevented",
                        data: {}
                    });
                    let p = {},
                        m = {};
                    for (let [e, t] of i.entries()) {
                        t.lastCursor !== t.initialCursor && (m[e] = t.lastCursor);
                        let r = o.getModel({
                            table: b().evP,
                            id: e
                        });
                        r && (p[e] = r.getVersion())
                    }
                    await Promise.all(c), await (null == (t = r.defaultRecordCache.persistedRecordCache) ? void 0 : t.flushPendingWrites());
                    let _ = {
                        recordMap: o,
                        serverPageVersionsByPageId: p,
                        serverPageSyncCursorsByPageId: m,
                        batchedSyncCount: s
                    };
                    return e.map(() => _)
                }
            }
            async function U(e) {
                var t;
                let n, o, {
                        requestBatch: g,
                        environment: p,
                        abortSignal: h
                    } = e,
                    {
                        trackRequests: m,
                        filterNextRequests: _
                    } = (n = new Set([]), o = new Set([]), {
                        trackRequests: function(e) {
                            for (let {
                                    page: t,
                                    cellId: r,
                                    cursor: i
                                } of e)
                                for (let e of (0 === i.stack.length && n.add(A({
                                        pageId: t.id,
                                        cellId: r
                                    })), i.stack))
                                    for (let n of e) o.add(C({
                                        cursorItem: n,
                                        pageId: t.id,
                                        cellId: r
                                    }))
                        },
                        filterNextRequests: function(e) {
                            let t = [];
                            for (let r of e) {
                                let {
                                    cellId: e,
                                    page: i
                                } = r, a = [];
                                for (let s of (0 !== r.cursor.stack.length || n.has(A({
                                        pageId: i.id,
                                        cellId: e
                                    })) || t.push(r), r.cursor.stack)) {
                                    let t = [];
                                    for (let r of s) {
                                        let n = C({
                                            cursorItem: r,
                                            pageId: i.id,
                                            cellId: e
                                        });
                                        o.has(n) || t.push(r)
                                    }
                                    t.length > 0 && a.push(t)
                                }
                                let s = e ? {
                                    stack: a,
                                    cellId: e
                                } : {
                                    stack: a
                                };
                                a.length > 0 && t.push({ ...r,
                                    cursor: s
                                })
                            }
                            return t
                        }
                    }),
                    y = [],
                    P = {},
                    M = 0,
                    T = 0,
                    O = [],
                    k = [],
                    x = r(92513).JW(),
                    N = g.map(({
                        page: e,
                        offlinePageMetadata: t,
                        originType: r,
                        isOrigin: n
                    }) => ({
                        page: e,
                        lastDownloadedVersion: null == t ? void 0 : t.last_downloaded_version,
                        originType: r,
                        isOrigin: n,
                        cursor: {
                            stack: []
                        },
                        forceFresh: !1
                    }));
                for (; N.length > 0 && T < 100;) {
                    m(N), O.push(N);
                    let e = new Map;
                    for (let t of N) e.set(t.page.id, t);
                    let t = N.map(e => ({ ...e,
                            headers: (0, d().WS)({
                                recordId: e.page.id,
                                spaceId: e.page.spaceId,
                                cellId: e.cellId
                            })
                        })),
                        r = (0, d().E5)(t),
                        n = await S().lX(r.entries(), 10, async ([e, t]) => {
                            let r = F();
                            return await S().vA(t, r, async t => {
                                let r = t.map(e => w().cJ(e, ["cellId"])),
                                    n = await p.api.callApi({
                                        eventName: "syncOfflinePages",
                                        environment: p,
                                        data: {
                                            requests: r,
                                            verticalColumns: i().A.isMobile,
                                            dedupeSessionId: x
                                        },
                                        headers: e,
                                        inMemoryRecordCache: E().o,
                                        abortSignal: h
                                    });
                                return (M++, "failed" === n.type) ? { ...n,
                                    requestBatch: t
                                } : n
                            })
                        }),
                        o = [];
                    for (let t of n.flat()) {
                        if ("failed" === t.type) {
                            let e = new(R()).y(t);
                            throw t.offline || v().O8(e, {
                                from: "loadRemotePages",
                                type: "syncOfflinePagesFailed",
                                data: {
                                    syncOfflinePagesRequests: t.requestBatch
                                }
                            }), e
                        }
                        let r = f().RecordMapWithRole.create(t.data.recordMap);
                        for (let [e, n] of (y.push(r), Object.entries(t.data.serverPageVersionsByPageId))) P[e] = n;
                        for (let r of (t.data.offlineModeSettings && s().h.updateSettings(t.data.offlineModeSettings), t.data.nextChunks))
                            for (let t of r.cursors) {
                                let {
                                    cellId: n
                                } = t, i = e.get(r.page.id);
                                o.push({
                                    page: r.page,
                                    lastDownloadedVersion: void 0,
                                    cursor: t,
                                    cellId: n,
                                    originType: (null == i ? void 0 : i.originType) ? ? "none",
                                    isOrigin: (null == i ? void 0 : i.isOrigin) ? ? !1,
                                    forceFresh: r.forceFresh
                                })
                            }
                        let n = c().b.fromRecordMapWithRole(r),
                            i = r.getModelsByTable(b().evP).filter(e => (0, l().Yt)(e.getType(), e.getFormat())).map(t => {
                                let r = (0, u().LW)(t.pointer, n),
                                    o = (0, u().J_)(r, t => e.has(t.id));
                                if (o) return {
                                    model: t,
                                    ancestorInRequests: o
                                }
                            }).filter(I().O9);
                        for (let r of (o.push(...i.map(({
                                model: t,
                                ancestorInRequests: r
                            }) => {
                                let n = e.get(r.id);
                                return {
                                    page: {
                                        id: t.id,
                                        spaceId: t.getSpaceId()
                                    },
                                    cursor: {
                                        stack: []
                                    },
                                    lastDownloadedVersion: void 0,
                                    originType: (null == n ? void 0 : n.originType) ? ? "none",
                                    isOrigin: (null == n ? void 0 : n.isOrigin) ? ? !1,
                                    forceFresh: (null == n ? void 0 : n.forceFresh) ? ? !1
                                }
                            })), t.data.pagesToDelete)) {
                            let {
                                currentUser: {
                                    id: e
                                },
                                defaultRecordCache: {
                                    persistedRecordCache: t
                                },
                                sqliteConnection: n
                            } = p;
                            e && t && n && ((0, a().L)({
                                connection: n,
                                userId: e,
                                originPageId: r,
                                autosyncTypes: ["not_autosynced"]
                            }), t.deleteRecord({
                                table: b().evP,
                                id: r
                            }, e))
                        }
                        k.push(t.handleRecordMapForResponsePromise)
                    }
                    N = _(o), T++
                }
                return T >= 100 && v().O8(Error("Recursively fetched syncOfflinePages too many times."), {
                    from: "loadRemotePages",
                    type: "infiniteFetchPrevented"
                }), await Promise.all(k), await (null == (t = p.defaultRecordCache.persistedRecordCache) ? void 0 : t.flushPendingWrites()), {
                    recordMap: f().RecordMapWithRole.merge(y),
                    serverPageVersionsByPageId: P,
                    serverPageSyncCursorsByPageId: void 0,
                    batchedSyncCount: M
                }
            }
            async function q({
                pageStores: e,
                environment: t,
                currentUserId: n,
                sidebarSpaceStore: o,
                abortSignal: i
            }) {
                n && o && (i.aborted || await navigator.locks.request(`sidebar_images_${n}_${o.id}`, {
                    ifAvailable: !0
                }, async a => {
                    var s, l, c;
                    if (!a) return;
                    let d = [],
                        u = null == (s = o.getIcon()) ? void 0 : s.icon;
                    if (u) {
                        let e = k({
                            icon: u,
                            permissionRecord: o.pointer,
                            recordMap: void 0,
                            environment: t
                        });
                        e && d.push(e)
                    }
                    for (let r of e) {
                        let e = null == (l = r.getIcon()) ? void 0 : l.icon;
                        if (e) {
                            let n = k({
                                icon: e,
                                permissionRecord: r.pointer,
                                recordMap: void 0,
                                environment: t
                            });
                            n && d.push(n)
                        }
                        let o = r.getTitleValue();
                        for (let e of M().air(o, {
                                spaceId: void 0,
                                inlinePageLink: void 0
                            }).filter(e => e.table === b().e4Z)) {
                            let r = t.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                                pointer: e,
                                userId: n
                            });
                            if (r) {
                                let t = null == (c = r.getIconIfAlive()) ? void 0 : c.icon;
                                t && d.push({
                                    url: t,
                                    permissionRecord: e
                                })
                            }
                        }
                        i.throwIfAborted()
                    }
                    await x({
                        urlAndPermissionRecords: d,
                        environment: t,
                        abortSignal: i
                    }), (0, r(104310).u)({
                        event: {
                            eventName: "offline_cache_sidebar_images",
                            eventProperties: {
                                number_of_images_fetched: d.length
                            }
                        }
                    })
                }))
            }
            let B = (0, w().sg)(q, 1e4);
            async function D(e) {
                let {
                    connection: t,
                    impactedPageId: n,
                    userId: o
                } = e, i = (await (0, r(911822).G2)({
                    connection: t,
                    statements: [(0, r(573146).F4)
                        `SELECT * FROM offline_action WHERE impacted_page_id = ${n} AND meta_user_id = ${o}`.asRead()
                    ],
                    queryName: "getOfflineActionsForImpactedPage"
                }))[0].data;
                return r(305232).q.rowsFromSqlite(i)
            }
            async function V(e) {
                let {
                    connection: t,
                    userId: n,
                    limit: o
                } = e, i = (0, r(573146).F4)
                `
		WITH offline_page_metadata AS (
			${(0,r(751595).y)({userId:n})}
		)
		SELECT * FROM offline_page_metadata
		JOIN block ON offline_page_metadata.id = block.id
		WHERE (block.type = 'collection_view_page' OR block.type = 'collection_view')
		AND offline_page_metadata.download_status = 'success'
		ORDER BY last_downloaded_at ASC
		LIMIT ${o}
	`, a = (await (0, r(911822).G2)({
                    connection: t,
                    statements: [i.asRead()],
                    queryName: "getOfflineCollectionViewBlocksForRefetch"
                }))[0].data;
                return r(305232).m.rowsFromSqlite(a)
            }
            let X = !1;

            function W(e) {
                X && console.log(`[attemptFetchOfflinePages] ${e()}`)
            }
            async function K(e) {
                let {
                    environment: t,
                    abortSignal: n
                } = e, {
                    sqliteConnection: o,
                    currentUser: {
                        id: i
                    }
                } = t;
                if (!o || !i) return;
                if ("page_subscription_update" === e.fetchTriggerType) return void await navigator.locks.request(`offline_background_task_${t.currentUser.id}`, async r => {
                    if (r) return z({
                        environment: t,
                        fetchTriggerType: e.fetchTriggerType,
                        abortSignal: n,
                        pageSubscriptionUpdate: e.pageSubscriptionUpdate
                    })
                });
                let {
                    fetchTriggerType: a
                } = e;
                await navigator.locks.request(`toggle_offline_page_${t.currentUser.id}`, () => {}), n.aborted || await navigator.locks.request(`offline_background_task_${t.currentUser.id}`, {
                    ifAvailable: !0
                }, async e => {
                    if (!e) return void W(() => "Skipping default interval refetch because another default interval refetch is already in progress");
                    W(() => `Acquired lock for ${a}.`), W(() => "Checking when we last refetched.");
                    let s = await (0, r(477184).T)({
                        connection: o,
                        userId: i,
                        taskType: "refetch"
                    });
                    if (s && "force_debug" !== a) {
                        let e = Date.now() - s;
                        if (e < .95 * (0, r(97376).L)("refetch_interval_ms")) return void W(() => `Skipping refetch because we refetched ${e/1e3/60} minutes ago.`)
                    }
                    let l = await (0, r(477184).T)({
                            connection: o,
                            userId: i,
                            taskType: "refetch_collections"
                        }),
                        c = (0, r(97376).L)("refetch_collections_interval_ms"),
                        d = void 0 === l || Date.now() - l > c,
                        u = Date.now();
                    await z({
                        environment: t,
                        fetchTriggerType: a,
                        abortSignal: n,
                        shouldRefetchCollections: d
                    }), await (0, r(981537).I)({
                        connection: o,
                        userId: i,
                        taskType: "refetch",
                        lastExecutedAt: u
                    }), d && await (0, r(981537).I)({
                        connection: o,
                        userId: i,
                        taskType: "refetch_collections",
                        lastExecutedAt: u
                    })
                })
            }
            async function z(e) {
                let {
                    environment: t,
                    fetchTriggerType: n,
                    abortSignal: o
                } = e, {
                    sqliteConnection: i,
                    currentUser: {
                        id: a
                    }
                } = t, s = performance.now();
                if (!i || !a) return;
                let l = await G(e);
                if (o.aborted || 0 === l.length) return;
                W(() => `Refetching ${l.length} pages in batches of 5.`), W(() => `Fetching ids: ${l.map(e=>e.id).join(", ")}`), W(() => "--------------------------------");
                let c = {
                        imageCount: 0,
                        batchedSyncCount: 0,
                        queryCollectionCount: 0
                    },
                    d = new Set;
                if (await S().lX(l, 5, async e => {
                        var n;
                        let s = e.id,
                            l = null == (n = r(987458).A.state.offlinePages) || null == (n = n[s]) ? void 0 : n.last_downloaded_version;
                        W(() => `Fetching page ${s}. Last downloaded version: ${l}.`);
                        try {
                            let n = (await D({
                                connection: i,
                                impactedPageId: s,
                                userId: a
                            })).map(e => ({
                                autosyncType: e.autosync_type,
                                originPageId: e.origin_page_id
                            })).filter(e => (0, I().O9)(e.autosyncType) && (0, I().O9)(e.originPageId));
                            if (!(0, I().EI)(n)) return void W(() => `Warning: skipping refetch of page ${s} because it has no origin autosync type pairs.`);
                            let u = await (0, r(964743).og)({
                                from: "useRefetchOfflinePages",
                                page: {
                                    id: s,
                                    spaceId: e.space_id
                                },
                                environment: t,
                                originAutosyncTypePairs: n,
                                visitedBlockIds: {
                                    forThisOriginPage: new Set,
                                    forThisInterval: d
                                },
                                stats: c,
                                downloadAbortSignal: o
                            });
                            o.throwIfAborted(), W(() => `Fetched and saved page ${s}. Last downloaded version: ${l}. Version from server: ${null==u?void 0:u.downloadedVersion}.`)
                        } catch (e) {
                            e instanceof O().f || (W(() => `Fetch page ${s} failed.${e instanceof Error?` Error: ${e.message}`:""}`), v().O8(e, {
                                from: "useRefetchOfflinePages",
                                type: "loadRemotePageAndImagesError",
                                data: {
                                    pageId: s
                                }
                            }))
                        }
                    }), "force_debug" !== n) {
                    var u, f;
                    let o = await (0, r(473999).W)({
                            connection: i,
                            userId: a
                        }),
                        d = 0,
                        g = 0,
                        p = 0,
                        h = 0;
                    for (let e of o)(e.is_autosynced_origin || e.is_explicitly_offlined_origin || e.is_offline_created_origin) && h++, e.is_explicitly_offlined_origin && d++, e.is_autosynced_origin && g++, e.is_offline_created_origin && p++;
                    let m = (0, r(69741).JZ)(o.map(e => e.last_downloaded_at).filter(e => void 0 !== e)),
                        _ = await (null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (u = r(775657).electronApi.getSqliteDiskUsage) ? void 0 : u.call(r(775657).electronApi));
                    r(680007).default.measure({
                        metricName: "background_refetch_offline_pages",
                        startTime: s,
                        endTime: performance.now()
                    }, {
                        data: {
                            fetch_trigger_type: n,
                            fetch_trigger_update_source: "page_subscription_update" === n ? null == (f = e.pageSubscriptionUpdate) ? void 0 : f.updateSource : void 0,
                            fetch_interval_ms: (0, r(97376).L)("refetch_interval_ms"),
                            number_of_offline_pages_fetched: l.length,
                            total_number_of_offline_pages: Object.keys(r(987458).A.state.offlinePages ? ? {}).length,
                            median_last_updated_at: m,
                            number_of_images_fetched: c.imageCount,
                            total_number_of_explicitly_marked_offline_pages: d,
                            total_number_of_pages_created_offline: p,
                            total_number_of_offline_origin_pages: h,
                            total_number_of_favorites: 0,
                            total_number_of_recents: g,
                            number_of_images_fetched_per_page: c.imageCount / l.length,
                            ...c.didUseBatchedApi ? {
                                number_of_sync_offline_pages: c.batchedSyncCount,
                                number_of_sync_offline_pages_per_page: c.batchedSyncCount / l.length
                            } : {
                                number_of_load_page_chunk_v2_for_offline_per_page: c.batchedSyncCount / l.length
                            },
                            number_of_query_collection_per_page: c.queryCollectionCount / l.length,
                            disk_usage: t.device.isElectron ? _ : void 0
                        }
                    })
                }
            }
            async function G(e) {
                let {
                    environment: t,
                    fetchTriggerType: r
                } = e;
                return "page_subscription_update" === r ? J({
                    environment: t,
                    pageSubscriptionUpdate: e.pageSubscriptionUpdate
                }) : "sqlite_corruption_recovery" === r ? Z(t) : "default_interval" === r || "app_boot_or_user_change" === r || "force_debug" === r ? H(t, e.shouldRefetchCollections) : []
            }
            async function H(e, t) {
                var n;
                let {
                    currentUser: {
                        id: o
                    },
                    sqliteConnection: i
                } = e;
                if (!o) return [];
                let a = null == (n = (0, r(328765).S)()) ? void 0 : n.id;
                if (!a || !i) return [];
                let s = [];
                if (t) {
                    let e = (0, r(97376).L)("num_collections_per_refetch");
                    s = await V({
                        connection: i,
                        userId: o,
                        limit: e
                    })
                }
                let l = (0, r(97376).L)("num_pages_per_refetch"),
                    c = (await (0, r(473999).W)({
                        connection: i,
                        userId: o,
                        spaceId: a,
                        orderBy: "mostStaleFirst"
                    })).filter(e => "failed" === e.download_status || "to_download" === e.download_status || "downloading" === e.download_status || void 0 === e.download_status).slice(0, l),
                    d = new Map;
                for (let e of [...s, ...c]) d.set(e.id, e);
                return Array.from(d.values())
            }
            async function J(e) {
                let {
                    environment: t,
                    pageSubscriptionUpdate: n
                } = e, {
                    sqliteConnection: o,
                    currentUser: {
                        id: i
                    }
                } = t, {
                    pageId: a,
                    lastServerUpdateTime: s
                } = n;
                if (!o || !i) return [];
                let l = await (0, r(854965).c)({
                    connection: o,
                    pageId: a,
                    userId: i
                });
                return l && (void 0 === l.last_downloaded_at || l.last_downloaded_at < s) ? [l] : []
            }
            async function Z(e) {
                var t;
                let {
                    currentUser: {
                        id: n
                    },
                    sqliteConnection: o
                } = e;
                if (!n) return [];
                let i = null == (t = (0, r(328765).S)()) ? void 0 : t.id;
                if (!o) return [];
                let a = await (0, r(473999).W)({
                    connection: o,
                    userId: n,
                    spaceId: void 0,
                    excludeAutosyncedPages: !0
                });
                return Array.from(i ? [...a].sort((e, t) => (e.space_id !== i) - (t.space_id !== i)) : a)
            }
            var Y = () => r(546605);
            class Q extends Y().Store {
                getInitialState() {
                    return {
                        shouldFetchImportantPages: !1
                    }
                }
            }
            let ee = new Q;
            var et = r(296540),
                er = () => r(709633);

            function en() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(556583).y)(),
                    n = (0, r(917441).Rx)(),
                    o = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceViewStore),
                    i = (0, r(682985).O$)(r(728372).AppStoreSidebarSpaceStore),
                    a = (0, r(345776).T)(),
                    s = (0, r(682985).K8)(() => {
                        if (!r(329464).A.state.initialRenderCompleted || !n || !o || !i || !a || !t || !r(205885).A.state.online) return;
                        let s = [...n.visiblePrivatePagesStores.slice(0, 5), ...n.visibleSharedPagesStores.slice(0, 5), ...(0, r(112127).f)({
                            environment: e,
                            spaceStore: i
                        }).slice(0, 10), ...o.getBookmarkedPages().slice(0, 10)];
                        for (let e of n.visibleTeamsStores) s.push(...(0, er().O)({
                            teamStore: e
                        }));
                        return s
                    }, [n, o, a, i, t, e]);
                (0, et.useEffect)(() => {
                    let t = new AbortController;
                    return (async () => {
                        if (void 0 !== s) {
                            let {
                                cacheSidebarImagesDebounced: n
                            } = await r(496088).W.load();
                            await n({
                                pageStores: s,
                                environment: e,
                                currentUserId: a,
                                sidebarSpaceStore: i,
                                abortSignal: t.signal
                            })
                        }
                    })(), () => {
                        t.abort()
                    }
                }, [s, a, i, e])
            }

            function eo() {
                let e = (0, r(533992).v3)(),
                    {
                        currentUser: {
                            id: t
                        }
                    } = e,
                    n = (0, r(556583).K)(),
                    i = (0, r(682985).K8)(() => r(218744).default.getConfigKey("offline_mode_sync_engine_config", "update_sources"), []),
                    a = (0, I().EI)(i),
                    s = function() {
                        let e = (0, r(533992).v3)().currentUser.id,
                            t = e ? (0, r(573146).F4)
                        `
			SELECT offline_page.id 
			FROM offline_page 
			WHERE download_status = 'success' 
			AND meta_user_id = ${e} 
		`: void 0, {
                            value: n
                        } = (0, r(131297).uW)("useOfflinePageIds", t, {
                            allowError: !0,
                            primaryKey: ["id"]
                        });
                        return (0, et.useMemo)(() => null == n ? void 0 : n.map(e => e.id), [n])
                    }();
                (0, et.useEffect)(() => {
                    if (n && a && t && s) {
                        if (!o) {
                            o = new ei(e, i, s, t);
                            return
                        }
                        o.environment = e
                    }
                }, [e, t, n, a, i, s]);
                let l = o && t !== o.userId;
                (0, et.useEffect)(() => {
                    l && o && s && o.handleUserChange(t, s)
                }, [t, l, s]), (0, et.useEffect)(() => {
                    o && s && o.handleOfflinePagesChange(s)
                }, [s])
            }
            r(430670);
            class ei {
                status = "stopped";
                lockAbortController;
                releaseUserLock;
                listenerGroup = new(r(99928))._;
                messageStoreKeys = new Map;
                constructor(e, t, r, n) {
                    this.environment = e, this.updateSources = t, this.offlineIds = r, this.userId = n, this.handleOfflinePagesChange = w().nF(this.handleOfflinePagesChange.bind(this), 1e3, {
                        leading: !0
                    }), this.trySubscribing(r)
                }
                trySubscribing(e) {
                    var t;
                    if (!this.userId) throw Error("No userId provided for subscribing");
                    this.lockAbortController = new AbortController, this.status = "waiting-for-lock", navigator.locks.request((t = this.userId, `page-updates-${t}`), {
                        signal: this.lockAbortController.signal
                    }, () => (this.status = "subscribing", this.refreshListeners(e), new Promise(e => {
                        this.releaseUserLock = e
                    }))).catch(e => {})
                }
                handleUserChange(e, t) {
                    var r, n;
                    this.userId = e, "subscribing" === this.status ? (this.removeAllListeners(), this.status = "stopped", null == (r = this.releaseUserLock) || r.call(this), this.releaseUserLock = void 0) : "waiting-for-lock" === this.status && (null == (n = this.lockAbortController) || n.abort(), this.lockAbortController = void 0, this.status = "stopped"), this.userId && this.trySubscribing(t)
                }
                handleOfflinePagesChange(e) {
                    "subscribing" === this.status && this.refreshListeners(e)
                }
                refreshListeners(e) {
                    let {
                        sqliteConnection: t
                    } = this.environment;
                    if (!t || !this.userId) return;
                    let n = e.flatMap(e => this.updateSources.map(t => [(0, r(568479).z9)({
                        pageId: e,
                        updateSource: t
                    }), {
                        pageId: e,
                        updateSource: t
                    }]));
                    this.messageStoreKeys = new Map(n), this.listenerGroup.connect({
                        keys: n.map(([e, t]) => e),
                        authToken: void 0,
                        listener: this.handleMessageStoreEvent
                    })
                }
                handleMessageStoreEvent = ({
                    key: e,
                    value: t
                }) => {
                    if ("number" != typeof t) return;
                    let r = this.messageStoreKeys.get(e);
                    if (!r) return;
                    let {
                        pageId: n,
                        updateSource: o
                    } = r;
                    K({
                        environment: this.environment,
                        abortSignal: new AbortController().signal,
                        fetchTriggerType: "page_subscription_update",
                        pageSubscriptionUpdate: {
                            pageId: n,
                            lastServerUpdateTime: t,
                            updateSource: o
                        }
                    })
                };
                removeAllListeners() {
                    this.listenerGroup.disconnect(), this.messageStoreKeys = new Map
                }
            }
            var ea = () => r(71734);

            function es() {
                let e = (0, r(533992).Y0)(),
                    t = (0, r(556583).K)();
                return (0, r(682985).K8)(() => {
                    if (!r(329464).A.state.initialRenderCompleted || !r(205885).A.state.online) return !1;
                    if (e.isMobileNative) {
                        if ("wifi" !== r(205885).A.state.mobileConnectivityType) return !1
                    } else {
                        let e = navigator.connection;
                        if (e && (e.saveData || ["slow-2g", "2g"].includes(e.effectiveType ? ? ""))) return !1
                    }
                    return !!t
                }, [e.isMobileNative, t])
            }

            function el() {
                let e = (0, r(533992).v3)(),
                    t = es(),
                    n = (0, r(682985).K8)(() => {
                        var e;
                        return null == (e = r(210443).Z.state.globalAbortController) ? void 0 : e.signal
                    }, []),
                    o = (0, r(97376).m)("refetch_interval_ms"),
                    i = (0, et.useRef)(!1),
                    a = (0, r(668745).ZC)(e.currentUser.id);
                e.currentUser.id && e.currentUser.id !== a && (i.current = !0), (0, et.useEffect)(() => {
                    if (i.current && t) {
                        ef(() => "Attempt fetch due to app boot or user change");
                        let t = (0, r(433162).HO)([0, 3e5]),
                            o = window.setTimeout(() => {
                                K({
                                    fetchTriggerType: "app_boot_or_user_change",
                                    environment: e,
                                    abortSignal: n
                                }), i.current = !1
                            }, t);
                        return () => {
                            window.clearTimeout(o)
                        }
                    }
                }, [n, t, e]), (0, et.useEffect)(() => {
                    e.currentUser.id && a && e.currentUser.id !== a && ((0, r(368470).Rq)(), s().h.clearSettings())
                }, [e.currentUser.id, a]), (0, et.useEffect)(() => {
                    let i, a = (0, r(433162).HO)([0, o]),
                        s = window.setTimeout(() => {
                            t && (K({
                                fetchTriggerType: "default_interval",
                                environment: e,
                                abortSignal: n
                            }), i = window.setInterval(() => {
                                t && K({
                                    fetchTriggerType: "default_interval",
                                    environment: e,
                                    abortSignal: n
                                })
                            }, o))
                        }, a);
                    return () => {
                        window.clearTimeout(s), i && window.clearInterval(i)
                    }
                }, [n, t, e, o])
            }

            function ec(e) {
                if (!e) throw Error("Pass in `__console.environment` as the first param.");
                K({
                    fetchTriggerType: "force_debug",
                    environment: e,
                    abortSignal: new AbortController().signal
                })
            }
            async function ed(e, t) {
                let {
                    sqliteConnection: n,
                    currentUser: {
                        id: o
                    }
                } = e;
                if (n && o) {
                    if (!await (0, r(854965).c)({
                            connection: n,
                            pageId: t,
                            userId: o
                        })) throw Error(`Page ${t} is not available offline`);
                    ef(() => `Debug refetching single page ${t}`), await K({
                        environment: e,
                        fetchTriggerType: "page_subscription_update",
                        abortSignal: new AbortController().signal,
                        pageSubscriptionUpdate: {
                            pageId: t,
                            lastServerUpdateTime: 1 / 0,
                            updateSource: "create_snapshot"
                        }
                    })
                }
            }
            let eu = !1;

            function ef(e) {
                eu && console.log(`[useRefetchOfflinePages] ${e()}`)
            }

            function eg() {
                let e = (0, r(533992).v3)(),
                    t = (0, r(682985).K8)(() => ee.state.shouldFetchImportantPages, []),
                    n = es();
                (0, et.useEffect)(() => {
                    t && n && (K({
                        fetchTriggerType: "sqlite_corruption_recovery",
                        environment: e,
                        abortSignal: new AbortController().signal
                    }), ee.setState({
                        shouldFetchImportantPages: !1
                    }))
                }, [e, t, n])
            }(0, r(202146).exposeDebugValue)("debugAttemptFetch", ec), (0, r(202146).exposeDebugValue)("debugAttemptFetchSinglePage", ed), (0, r(202146).exposeDebugValue)("toggleOfflineRefetchDebugLogs", function() {
                console.log((eu = !eu) ? "useRefetchOfflinePages debug logs enabled." : "useRefetchOfflinePages debug logs disabled."), console.log((X = !X) ? "attemptFetchOfflinePages debug logs enabled." : "attemptFetchOfflinePages debug logs disabled.")
            })
        },
        881270: (e, t) => {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.compare = void 0, t.compare = function(e, t) {
                return e > t ? 1 : e < t ? -1 : 0
            }
        },
        915367: (e, t, r) => {
            "use strict";

            function n(e, t, o = {}) {
                let i = (0, r(358519).tf)(e, t, o);
                if (i) throw new(r(101787)).yI4(i.message)
            }

            function o(e, t) {
                let n = (0, r(358519).tf)(e, t);
                if (void 0 !== n) throw new(r(101787)).yI4(n.message);
                return t
            }
            r.d(t, {
                j: () => n,
                n: () => o
            })
        },
        917441: (e, t, r) => {
            "use strict";
            r.d(t, {
                Lp: () => a,
                Rx: () => l,
                a$: () => s
            });
            var n = r(296540),
                o = r(474848);
            let i = (0, n.createContext)(null);

            function a({
                children: e
            }) {
                let t = (0, r(533992).v3)(),
                    s = (0, r(804011).r)(t),
                    l = (0, r(119965).V)(),
                    {
                        deferSidebarLoadingWhenCollapsed: c
                    } = (0, r(42491).b8)(t.currentUser.id),
                    d = !(0, r(682985).K8)(() => (0, r(712358).K)(t), [t]) && c && l,
                    [u, f] = (0, n.useState)(!1);
                (0, n.useEffect)(() => {
                    let e = setTimeout(() => {
                        f(!0)
                    }, 2e4);
                    return () => {
                        clearTimeout(e)
                    }
                }, []);
                let {
                    currentUserId: g,
                    spaceId: p,
                    isFreshStateReady: h
                } = (0, r(682985).K8)(() => {
                    var e, t, n, o;
                    null != (e = r(728372).AppStoreCurrentUserStore.state) && e.id && null != (t = (0, r(328765).S)()) && t.id && (0, r(635339).yd)("user_and_space_stores_loaded");
                    let i = null == (n = r(728372).AppStoreCurrentUserStore.state) ? void 0 : n.id,
                        a = null == (o = (0, r(328765).S)()) ? void 0 : o.id;
                    if (d) return {
                        currentUserId: i,
                        spaceId: a,
                        isFreshStateReady: !1
                    };
                    let l = s.state,
                        c = r(329464).A.state.initialRenderCompleted;
                    return {
                        currentUserId: i,
                        spaceId: a,
                        isFreshStateReady: (0, r(982853).XA)({
                            sidebarState: l,
                            userId: i,
                            spaceId: a,
                            isInitialPageRenderCompleted: c
                        })
                    }
                }, [s, d]), m = (0, r(83208).X)("enable_greedy_sidebar_initial_render"), _ = (0, r(168814).X)(), y = (0, r(982853).cT)({
                    isFreshStateReady: h,
                    userId: g,
                    spaceId: p
                }), b = !!((0, r(682985).K8)(() => {
                    let e = null == y ? void 0 : y.state;
                    return g === (null == e ? void 0 : e.userId) && p === (null == e ? void 0 : e.spaceId)
                }, [y, g, p]) && (_ || m) && !h && !u);
                return (0, o.jsx)(i.Provider, {
                    value: b ? y : s,
                    children: e
                })
            }

            function s() {
                let e = (0, n.useContext)(i),
                    t = (0, r(533992).v3)(),
                    o = (0, r(804011).r)(t);
                return e ? ? o
            }

            function l() {
                return (0, r(682985).O$)(s())
            }
            i.displayName = "SidebarStateContext"
        }
    }
]);