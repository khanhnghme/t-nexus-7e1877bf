"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [36556], {
        9957: (t, r, e) => {
            var o = Function.prototype.call,
                n = Object.prototype.hasOwnProperty;
            t.exports = e(566743).call(o, n)
        },
        35345: t => {
            t.exports = URIError
        },
        58968: t => {
            t.exports = Math.floor
        },
        94459: t => {
            t.exports = Number.isNaN || function(t) {
                return t != t
            }
        },
        107176: (t, r, e) => {
            try {
                o = [].__proto__ === Array.prototype
            } catch (t) {
                if (!t || "object" != typeof t || !("code" in t) || "ERR_PROTO_ACCESS" !== t.code) throw t
            }
            var o, n = !!o && e(675795) && e(675795)(Object.prototype, "__proto__"),
                p = Object,
                a = p.getPrototypeOf;
            t.exports = n && "function" == typeof n.get ? e(373126)([n.get]) : "function" == typeof a && function(t) {
                return a(null == t ? t : p(t))
            }
        },
        136556: (t, r, e) => {
            var o = e(373126)([e(570453)("%String.prototype.indexOf%")]);
            t.exports = function(t, r) {
                var n = e(570453)(t, !!r);
                return "function" == typeof n && o(t, ".prototype.") > -1 ? e(373126)([n]) : n
            }
        },
        179290: t => {
            t.exports = RangeError
        },
        189353: t => {
            var r = Object.prototype.toString,
                e = Math.max,
                o = function(t, r) {
                    for (var e = [], o = 0; o < t.length; o += 1) e[o] = t[o];
                    for (var n = 0; n < r.length; n += 1) e[n + t.length] = r[n];
                    return e
                },
                n = function(t, r) {
                    for (var e = [], o = r || 0, n = 0; o < t.length; o += 1, n += 1) e[n] = t[o];
                    return e
                },
                p = function(t, r) {
                    for (var e = "", o = 0; o < t.length; o += 1) e += t[o], o + 1 < t.length && (e += r);
                    return e
                };
            t.exports = function(t) {
                var a, y = this;
                if ("function" != typeof y || "[object Function]" !== r.apply(y)) throw TypeError("Function.prototype.bind called on incompatible " + y);
                for (var i = n(arguments, 1), c = e(0, y.length - i.length), l = [], f = 0; f < c; f++) l[f] = "$" + f;
                if (a = Function("binder", "return function (" + p(l, ",") + "){ return binder.apply(this,arguments); }")(function() {
                        if (this instanceof a) {
                            var r = y.apply(this, o(i, arguments));
                            return Object(r) === r ? r : this
                        }
                        return y.apply(t, o(i, arguments))
                    }), y.prototype) {
                    var u = function() {};
                    u.prototype = y.prototype, a.prototype = new u, u.prototype = null
                }
                return a
            }
        },
        241333: t => {
            t.exports = function() {
                if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                if ("symbol" == typeof Symbol.iterator) return !0;
                var t = {},
                    r = Symbol("test"),
                    e = Object(r);
                if ("string" == typeof r || "[object Symbol]" !== Object.prototype.toString.call(r) || "[object Symbol]" !== Object.prototype.toString.call(e)) return !1;
                for (var o in t[r] = 42, t) return !1;
                if ("function" == typeof Object.keys && 0 !== Object.keys(t).length || "function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t).length) return !1;
                var n = Object.getOwnPropertySymbols(t);
                if (1 !== n.length || n[0] !== r || !Object.prototype.propertyIsEnumerable.call(t, r)) return !1;
                if ("function" == typeof Object.getOwnPropertyDescriptor) {
                    var p = Object.getOwnPropertyDescriptor(t, r);
                    if (42 !== p.value || !0 !== p.enumerable) return !1
                }
                return !0
            }
        },
        264039: (t, r, e) => {
            var o = "u" > typeof Symbol && Symbol;
            t.exports = function() {
                return "function" == typeof o && "function" == typeof Symbol && "symbol" == typeof o("foo") && "symbol" == typeof Symbol("bar") && e(241333)()
            }
        },
        269383: t => {
            t.exports = Error
        },
        271514: t => {
            t.exports = Math.abs
        },
        273093: (t, r, e) => {
            t.exports = function(t) {
                return e(94459)(t) || 0 === t ? t : t < 0 ? -1 : 1
            }
        },
        341237: t => {
            t.exports = EvalError
        },
        358068: t => {
            t.exports = SyntaxError
        },
        373126: (t, r, e) => {
            t.exports = function(t) {
                if (t.length < 1 || "function" != typeof t[0]) throw new(e(769675))("a function is required");
                return e(713144)(e(566743), e(610076), t)
            }
        },
        393628: (t, r, e) => {
            t.exports = e(948648) ? function(t) {
                return e(948648)(t)
            } : e(771064) ? function(t) {
                if (!t || "object" != typeof t && "function" != typeof t) throw TypeError("getProto: not an object");
                return e(771064)(t)
            } : e(107176) ? function(t) {
                return e(107176)(t)
            } : null
        },
        468002: t => {
            t.exports = Math.min
        },
        479538: t => {
            t.exports = ReferenceError
        },
        506188: t => {
            t.exports = Math.max
        },
        566743: (t, r, e) => {
            t.exports = Function.prototype.bind || e(189353)
        },
        570453: (t, r, e) => {
            var o, n = () => e(358068),
                p = () => e(769675),
                a = Function,
                y = function(t) {
                    try {
                        return a('"use strict"; return (' + t + ").constructor;")()
                    } catch (t) {}
                },
                i = () => e(675795),
                c = function() {
                    throw new(p())
                },
                l = i() ? function() {
                    try {
                        return arguments.callee, c
                    } catch (t) {
                        try {
                            return i()(arguments, "callee").get
                        } catch (t) {
                            return c
                        }
                    }
                }() : c,
                f = e(264039)(),
                u = {},
                s = "u" > typeof Uint8Array && e(393628) ? e(393628)(Uint8Array) : o,
                A = {
                    __proto__: null,
                    "%AggregateError%": "u" < typeof AggregateError ? o : AggregateError,
                    "%Array%": Array,
                    "%ArrayBuffer%": "u" < typeof ArrayBuffer ? o : ArrayBuffer,
                    "%ArrayIteratorPrototype%": f && e(393628) ? e(393628)([][Symbol.iterator]()) : o,
                    "%AsyncFromSyncIteratorPrototype%": o,
                    "%AsyncFunction%": u,
                    "%AsyncGenerator%": u,
                    "%AsyncGeneratorFunction%": u,
                    "%AsyncIteratorPrototype%": u,
                    "%Atomics%": "u" < typeof Atomics ? o : Atomics,
                    "%BigInt%": "u" < typeof BigInt ? o : BigInt,
                    "%BigInt64Array%": "u" < typeof BigInt64Array ? o : BigInt64Array,
                    "%BigUint64Array%": "u" < typeof BigUint64Array ? o : BigUint64Array,
                    "%Boolean%": Boolean,
                    "%DataView%": "u" < typeof DataView ? o : DataView,
                    "%Date%": Date,
                    "%decodeURI%": decodeURI,
                    "%decodeURIComponent%": decodeURIComponent,
                    "%encodeURI%": encodeURI,
                    "%encodeURIComponent%": encodeURIComponent,
                    "%Error%": e(269383),
                    "%eval%": eval,
                    "%EvalError%": e(341237),
                    "%Float16Array%": "u" < typeof Float16Array ? o : Float16Array,
                    "%Float32Array%": "u" < typeof Float32Array ? o : Float32Array,
                    "%Float64Array%": "u" < typeof Float64Array ? o : Float64Array,
                    "%FinalizationRegistry%": "u" < typeof FinalizationRegistry ? o : FinalizationRegistry,
                    "%Function%": a,
                    "%GeneratorFunction%": u,
                    "%Int8Array%": "u" < typeof Int8Array ? o : Int8Array,
                    "%Int16Array%": "u" < typeof Int16Array ? o : Int16Array,
                    "%Int32Array%": "u" < typeof Int32Array ? o : Int32Array,
                    "%isFinite%": isFinite,
                    "%isNaN%": isNaN,
                    "%IteratorPrototype%": f && e(393628) ? e(393628)(e(393628)([][Symbol.iterator]())) : o,
                    "%JSON%": "object" == typeof JSON ? JSON : o,
                    "%Map%": "u" < typeof Map ? o : Map,
                    "%MapIteratorPrototype%": "u" > typeof Map && f && e(393628) ? e(393628)(new Map()[Symbol.iterator]()) : o,
                    "%Math%": Math,
                    "%Number%": Number,
                    "%Object%": e(679612),
                    "%Object.getOwnPropertyDescriptor%": i(),
                    "%parseFloat%": parseFloat,
                    "%parseInt%": parseInt,
                    "%Promise%": "u" < typeof Promise ? o : Promise,
                    "%Proxy%": "u" < typeof Proxy ? o : Proxy,
                    "%RangeError%": e(179290),
                    "%ReferenceError%": e(479538),
                    "%Reflect%": "u" < typeof Reflect ? o : Reflect,
                    "%RegExp%": RegExp,
                    "%Set%": "u" < typeof Set ? o : Set,
                    "%SetIteratorPrototype%": "u" > typeof Set && f && e(393628) ? e(393628)(new Set()[Symbol.iterator]()) : o,
                    "%SharedArrayBuffer%": "u" < typeof SharedArrayBuffer ? o : SharedArrayBuffer,
                    "%String%": String,
                    "%StringIteratorPrototype%": f && e(393628) ? e(393628)("" [Symbol.iterator]()) : o,
                    "%Symbol%": f ? Symbol : o,
                    "%SyntaxError%": n(),
                    "%ThrowTypeError%": l,
                    "%TypedArray%": s,
                    "%TypeError%": p(),
                    "%Uint8Array%": "u" < typeof Uint8Array ? o : Uint8Array,
                    "%Uint8ClampedArray%": "u" < typeof Uint8ClampedArray ? o : Uint8ClampedArray,
                    "%Uint16Array%": "u" < typeof Uint16Array ? o : Uint16Array,
                    "%Uint32Array%": "u" < typeof Uint32Array ? o : Uint32Array,
                    "%URIError%": e(35345),
                    "%WeakMap%": "u" < typeof WeakMap ? o : WeakMap,
                    "%WeakRef%": "u" < typeof WeakRef ? o : WeakRef,
                    "%WeakSet%": "u" < typeof WeakSet ? o : WeakSet,
                    "%Function.prototype.call%": e(610076),
                    "%Function.prototype.apply%": e(611002),
                    "%Object.defineProperty%": e(730655),
                    "%Object.getPrototypeOf%": e(771064),
                    "%Math.abs%": e(271514),
                    "%Math.floor%": e(58968),
                    "%Math.max%": e(506188),
                    "%Math.min%": e(468002),
                    "%Math.pow%": e(975880),
                    "%Math.round%": e(970414),
                    "%Math.sign%": e(273093),
                    "%Reflect.getPrototypeOf%": e(948648)
                };
            if (e(393628)) try {
                null.error
            } catch (t) {
                var g = e(393628)(e(393628)(t));
                A["%Error.prototype%"] = g
            }
            var b = function t(r) {
                    var o;
                    if ("%AsyncFunction%" === r) o = y("async function () {}");
                    else if ("%GeneratorFunction%" === r) o = y("function* () {}");
                    else if ("%AsyncGeneratorFunction%" === r) o = y("async function* () {}");
                    else if ("%AsyncGenerator%" === r) {
                        var n = t("%AsyncGeneratorFunction%");
                        n && (o = n.prototype)
                    } else if ("%AsyncIteratorPrototype%" === r) {
                        var p = t("%AsyncGenerator%");
                        p && e(393628) && (o = e(393628)(p.prototype))
                    }
                    return A[r] = o, o
                },
                P = {
                    __proto__: null,
                    "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                    "%ArrayPrototype%": ["Array", "prototype"],
                    "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                    "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                    "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                    "%ArrayProto_values%": ["Array", "prototype", "values"],
                    "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                    "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                    "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                    "%BooleanPrototype%": ["Boolean", "prototype"],
                    "%DataViewPrototype%": ["DataView", "prototype"],
                    "%DatePrototype%": ["Date", "prototype"],
                    "%ErrorPrototype%": ["Error", "prototype"],
                    "%EvalErrorPrototype%": ["EvalError", "prototype"],
                    "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                    "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                    "%FunctionPrototype%": ["Function", "prototype"],
                    "%Generator%": ["GeneratorFunction", "prototype"],
                    "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                    "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                    "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                    "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                    "%JSONParse%": ["JSON", "parse"],
                    "%JSONStringify%": ["JSON", "stringify"],
                    "%MapPrototype%": ["Map", "prototype"],
                    "%NumberPrototype%": ["Number", "prototype"],
                    "%ObjectPrototype%": ["Object", "prototype"],
                    "%ObjProto_toString%": ["Object", "prototype", "toString"],
                    "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                    "%PromisePrototype%": ["Promise", "prototype"],
                    "%PromiseProto_then%": ["Promise", "prototype", "then"],
                    "%Promise_all%": ["Promise", "all"],
                    "%Promise_reject%": ["Promise", "reject"],
                    "%Promise_resolve%": ["Promise", "resolve"],
                    "%RangeErrorPrototype%": ["RangeError", "prototype"],
                    "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                    "%RegExpPrototype%": ["RegExp", "prototype"],
                    "%SetPrototype%": ["Set", "prototype"],
                    "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                    "%StringPrototype%": ["String", "prototype"],
                    "%SymbolPrototype%": ["Symbol", "prototype"],
                    "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                    "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                    "%TypeErrorPrototype%": ["TypeError", "prototype"],
                    "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                    "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                    "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                    "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                    "%URIErrorPrototype%": ["URIError", "prototype"],
                    "%WeakMapPrototype%": ["WeakMap", "prototype"],
                    "%WeakSetPrototype%": ["WeakSet", "prototype"]
                },
                h = () => e(9957),
                m = e(566743).call(e(610076), Array.prototype.concat),
                S = e(566743).call(e(611002), Array.prototype.splice),
                x = e(566743).call(e(610076), String.prototype.replace),
                O = e(566743).call(e(610076), String.prototype.slice),
                v = e(566743).call(e(610076), RegExp.prototype.exec),
                w = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                E = /\\(\\)?/g,
                d = function(t) {
                    var r = O(t, 0, 1),
                        e = O(t, -1);
                    if ("%" === r && "%" !== e) throw new(n())("invalid intrinsic syntax, expected closing `%`");
                    if ("%" === e && "%" !== r) throw new(n())("invalid intrinsic syntax, expected opening `%`");
                    var o = [];
                    return x(t, w, function(t, r, e, n) {
                        o[o.length] = e ? x(n, E, "$1") : r || t
                    }), o
                },
                F = function(t, r) {
                    var e, o = t;
                    if (h()(P, o) && (o = "%" + (e = P[o])[0] + "%"), h()(A, o)) {
                        var a = A[o];
                        if (a === u && (a = b(o)), void 0 === a && !r) throw new(p())("intrinsic " + t + " exists, but is not available. Please file an issue!");
                        return {
                            alias: e,
                            name: o,
                            value: a
                        }
                    }
                    throw new(n())("intrinsic " + t + " does not exist!")
                };
            t.exports = function(t, r) {
                if ("string" != typeof t || 0 === t.length) throw new(p())("intrinsic name must be a non-empty string");
                if (arguments.length > 1 && "boolean" != typeof r) throw new(p())('"allowMissing" argument must be a boolean');
                if (null === v(/^%?[^%]*%?$/, t)) throw new(n())("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                var e = d(t),
                    o = e.length > 0 ? e[0] : "",
                    a = F("%" + o + "%", r),
                    y = a.name,
                    c = a.value,
                    l = !1,
                    f = a.alias;
                f && (o = f[0], S(e, m([0, 1], f)));
                for (var u = 1, s = !0; u < e.length; u += 1) {
                    var g = e[u],
                        b = O(g, 0, 1),
                        P = O(g, -1);
                    if (('"' === b || "'" === b || "`" === b || '"' === P || "'" === P || "`" === P) && b !== P) throw new(n())("property names with quotes must have matching quotes");
                    if ("constructor" !== g && s || (l = !0), o += "." + g, y = "%" + o + "%", h()(A, y)) c = A[y];
                    else if (null != c) {
                        if (!(g in c)) {
                            if (!r) throw new(p())("base intrinsic for " + t + " exists, but the property is not available.");
                            return
                        }
                        if (i() && u + 1 >= e.length) {
                            var x = i()(c, g);
                            c = (s = !!x) && "get" in x && !("originalValue" in x.get) ? x.get : c[g]
                        } else s = h()(c, g), c = c[g];
                        s && !l && (A[y] = c)
                    }
                }
                return c
            }
        },
        610076: t => {
            t.exports = Function.prototype.call
        },
        611002: t => {
            t.exports = Function.prototype.apply
        },
        647119: t => {
            t.exports = "u" > typeof Reflect && Reflect && Reflect.apply
        },
        675795: (t, r, e) => {
            var o = () => e(906549);
            if (o()) try {
                o()([], "length")
            } catch (t) {
                o = null
            }
            t.exports = o()
        },
        679612: t => {
            t.exports = Object
        },
        713144: (t, r, e) => {
            t.exports = e(647119) || e(566743).call(e(610076), e(611002))
        },
        730655: t => {
            var r = Object.defineProperty || !1;
            if (r) try {
                r({}, "a", {
                    value: 1
                })
            } catch (t) {
                r = !1
            }
            t.exports = r
        },
        769675: t => {
            t.exports = TypeError
        },
        771064: (t, r, e) => {
            t.exports = e(679612).getPrototypeOf || null
        },
        906549: t => {
            t.exports = Object.getOwnPropertyDescriptor
        },
        948648: t => {
            t.exports = "u" > typeof Reflect && Reflect.getPrototypeOf || null
        },
        970414: t => {
            t.exports = Math.round
        },
        975880: t => {
            t.exports = Math.pow
        }
    }
]);