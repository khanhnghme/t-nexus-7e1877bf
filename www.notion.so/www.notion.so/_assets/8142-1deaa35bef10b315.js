(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [8142], {
        908142: (t, e, r) => {
            t = r.nmd(t);
            var n, o, i, a = "__lodash_hash_undefined__",
                u = "[object Arguments]",
                c = "[object Array]",
                f = "[object Boolean]",
                s = "[object Date]",
                l = "[object Error]",
                h = "[object Function]",
                _ = "[object Map]",
                p = "[object Number]",
                v = "[object Object]",
                y = "[object Promise]",
                b = "[object RegExp]",
                d = "[object Set]",
                g = "[object String]",
                j = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                z = "[object DataView]",
                A = /^\[object .+?Constructor\]$/,
                O = /^(?:0|[1-9]\d*)$/,
                m = {};
            m["[object Float32Array]"] = m["[object Float64Array]"] = m["[object Int8Array]"] = m["[object Int16Array]"] = m["[object Int32Array]"] = m["[object Uint8Array]"] = m["[object Uint8ClampedArray]"] = m["[object Uint16Array]"] = m["[object Uint32Array]"] = !0, m[u] = m[c] = m[w] = m[f] = m[z] = m[s] = m[l] = m[h] = m[_] = m[p] = m[v] = m[b] = m[d] = m[g] = m[j] = !1;
            var k = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                S = "object" == typeof self && self && self.Object === Object && self,
                x = k || S || Function("return this")(),
                E = e && !e.nodeType && e,
                F = E && t && !t.nodeType && t,
                P = F && F.exports === E,
                T = P && k.process,
                $ = function() {
                    try {
                        return T && T.binding && T.binding("util")
                    } catch (t) {}
                }(),
                U = $ && $.isTypedArray;

            function B(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach(function(t, n) {
                    r[++e] = [n, t]
                }), r
            }

            function I(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach(function(t) {
                    r[++e] = t
                }), r
            }
            var L = Array.prototype,
                C = Function.prototype,
                M = Object.prototype,
                D = x["__core-js_shared__"],
                R = C.toString,
                N = M.hasOwnProperty,
                V = (n = /[^.]+$/.exec(D && D.keys && D.keys.IE_PROTO || "")) ? "Symbol(src)_1." + n : "",
                W = M.toString,
                G = RegExp("^" + R.call(N).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                q = P ? x.Buffer : void 0,
                H = x.Symbol,
                J = x.Uint8Array,
                K = M.propertyIsEnumerable,
                Q = L.splice,
                X = H ? H.toStringTag : void 0,
                Y = Object.getOwnPropertySymbols,
                Z = q ? q.isBuffer : void 0,
                tt = (o = Object.keys, i = Object, function(t) {
                    return o(i(t))
                }),
                te = tm(x, "DataView"),
                tr = tm(x, "Map"),
                tn = tm(x, "Promise"),
                to = tm(x, "Set"),
                ti = tm(x, "WeakMap"),
                ta = tm(Object, "create"),
                tu = tx(te),
                tc = tx(tr),
                tf = tx(tn),
                ts = tx(to),
                tl = tx(ti),
                th = H ? H.prototype : void 0,
                t_ = th ? th.valueOf : void 0;

            function tp(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function tv(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function ty(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function tb(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new ty; ++e < r;) this.add(t[e])
            }

            function td(t) {
                var e = this.__data__ = new tv(t);
                this.size = e.size
            }

            function tg(t, e) {
                for (var r = t.length; r--;)
                    if (tE(t[r][0], e)) return r;
                return -1
            }

            function tj(t) {
                var e;
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : X && X in Object(t) ? function(t) {
                    var e = N.call(t, X),
                        r = t[X];
                    try {
                        t[X] = void 0;
                        var n = !0
                    } catch (t) {}
                    var o = W.call(t);
                    return n && (e ? t[X] = r : delete t[X]), o
                }(t) : (e = t, W.call(e))
            }

            function tw(t) {
                return tI(t) && tj(t) == u
            }

            function tz(t, e, r, n, o, i) {
                var a = 1 & r,
                    u = t.length,
                    c = e.length;
                if (u != c && !(a && c > u)) return !1;
                var f = i.get(t);
                if (f && i.get(e)) return f == e;
                var s = -1,
                    l = !0,
                    h = 2 & r ? new tb : void 0;
                for (i.set(t, e), i.set(e, t); ++s < u;) {
                    var _ = t[s],
                        p = e[s];
                    if (n) var v = a ? n(p, _, s, e, t, i) : n(_, p, s, t, e, i);
                    if (void 0 !== v) {
                        if (v) continue;
                        l = !1;
                        break
                    }
                    if (h) {
                        if (! function(t, e) {
                                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                                    if (e(t[r], r, t)) return !0;
                                return !1
                            }(e, function(t, e) {
                                if (!h.has(e) && (_ === t || o(_, t, r, n, i))) return h.push(e)
                            })) {
                            l = !1;
                            break
                        }
                    } else if (!(_ === p || o(_, p, r, n, i))) {
                        l = !1;
                        break
                    }
                }
                return i.delete(t), i.delete(e), l
            }

            function tA(t) {
                var e;
                return e = tC(t), tP(t) ? e : function(t, e) {
                    for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                    return t
                }(e, tk(t))
            }

            function tO(t, e) {
                var r, n, o = t.__data__;
                return ("string" == (n = typeof(r = e)) || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== r : null === r) ? o["string" == typeof e ? "string" : "hash"] : o.map
            }

            function tm(t, e) {
                var r, n = null == t ? void 0 : t[e];
                return !(!tB(n) || (r = n, V && V in r)) && (t$(n) ? G : A).test(tx(n)) ? n : void 0
            }
            tp.prototype.clear = function() {
                this.__data__ = ta ? ta(null) : {}, this.size = 0
            }, tp.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= !!e, e
            }, tp.prototype.get = function(t) {
                var e = this.__data__;
                if (ta) {
                    var r = e[t];
                    return r === a ? void 0 : r
                }
                return N.call(e, t) ? e[t] : void 0
            }, tp.prototype.has = function(t) {
                var e = this.__data__;
                return ta ? void 0 !== e[t] : N.call(e, t)
            }, tp.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += +!this.has(t), r[t] = ta && void 0 === e ? a : e, this
            }, tv.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, tv.prototype.delete = function(t) {
                var e = this.__data__,
                    r = tg(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : Q.call(e, r, 1), --this.size, !0)
            }, tv.prototype.get = function(t) {
                var e = this.__data__,
                    r = tg(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, tv.prototype.has = function(t) {
                return tg(this.__data__, t) > -1
            }, tv.prototype.set = function(t, e) {
                var r = this.__data__,
                    n = tg(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            }, ty.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new tp,
                    map: new(tr || tv),
                    string: new tp
                }
            }, ty.prototype.delete = function(t) {
                var e = tO(this, t).delete(t);
                return this.size -= !!e, e
            }, ty.prototype.get = function(t) {
                return tO(this, t).get(t)
            }, ty.prototype.has = function(t) {
                return tO(this, t).has(t)
            }, ty.prototype.set = function(t, e) {
                var r = tO(this, t),
                    n = r.size;
                return r.set(t, e), this.size += +(r.size != n), this
            }, tb.prototype.add = tb.prototype.push = function(t) {
                return this.__data__.set(t, a), this
            }, tb.prototype.has = function(t) {
                return this.__data__.has(t)
            }, td.prototype.clear = function() {
                this.__data__ = new tv, this.size = 0
            }, td.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, td.prototype.get = function(t) {
                return this.__data__.get(t)
            }, td.prototype.has = function(t) {
                return this.__data__.has(t)
            }, td.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof tv) {
                    var n = r.__data__;
                    if (!tr || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new ty(n)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var tk = Y ? function(t) {
                    return null == t ? [] : function(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length, o = 0, i = []; ++r < n;) {
                            var a = t[r];
                            e(a, r, t) && (i[o++] = a)
                        }
                        return i
                    }(Y(t = Object(t)), function(e) {
                        return K.call(t, e)
                    })
                } : function() {
                    return []
                },
                tS = tj;

            function tx(t) {
                if (null != t) {
                    try {
                        return R.call(t)
                    } catch (t) {}
                    try {
                        return t + ""
                    } catch (t) {}
                }
                return ""
            }

            function tE(t, e) {
                return t === e || t != t && e != e
            }(te && tS(new te(new ArrayBuffer(1))) != z || tr && tS(new tr) != _ || tn && tS(tn.resolve()) != y || to && tS(new to) != d || ti && tS(new ti) != j) && (tS = function(t) {
                var e = tj(t),
                    r = e == v ? t.constructor : void 0,
                    n = r ? tx(r) : "";
                if (n) switch (n) {
                    case tu:
                        return z;
                    case tc:
                        return _;
                    case tf:
                        return y;
                    case ts:
                        return d;
                    case tl:
                        return j
                }
                return e
            });
            var tF = tw(function() {
                    return arguments
                }()) ? tw : function(t) {
                    return tI(t) && N.call(t, "callee") && !K.call(t, "callee")
                },
                tP = Array.isArray,
                tT = Z || function() {
                    return !1
                };

            function t$(t) {
                if (!tB(t)) return !1;
                var e = tj(t);
                return e == h || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }

            function tU(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= 0x1fffffffffffff
            }

            function tB(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function tI(t) {
                return null != t && "object" == typeof t
            }
            var tL = U ? function(t) {
                return U(t)
            } : function(t) {
                return tI(t) && tU(t.length) && !!m[tj(t)]
            };

            function tC(t) {
                return null != t && tU(t.length) && !t$(t) ? function(t) {
                    var e, r, n = tP(t),
                        o = !n && tF(t),
                        i = !n && !o && tT(t),
                        a = !n && !o && !i && tL(t),
                        u = n || o || i || a,
                        c = u ? function(t, e) {
                            for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                            return n
                        }(t.length, String) : [],
                        f = c.length;
                    for (var s in t) {
                        N.call(t, s) && !(u && ("length" == s || i && ("offset" == s || "parent" == s) || a && ("buffer" == s || "byteLength" == s || "byteOffset" == s) || (e = s, (r = null == (r = f) ? 0x1fffffffffffff : r) && ("number" == typeof e || O.test(e)) && e > -1 && e % 1 == 0 && e < r))) && c.push(s)
                    }
                    return c
                }(t) : function(t) {
                    if (r = (e = t) && e.constructor, e !== ("function" == typeof r && r.prototype || M)) return tt(t);
                    var e, r, n = [];
                    for (var o in Object(t)) N.call(t, o) && "constructor" != o && n.push(o);
                    return n
                }(t)
            }
            t.exports = function(t, e) {
                return function t(e, r, n, o, i) {
                    return e === r || (null != e && null != r && (tI(e) || tI(r)) ? function(t, e, r, n, o, i) {
                        var a = tP(t),
                            h = tP(e),
                            y = a ? c : tS(t),
                            j = h ? c : tS(e);
                        y = y == u ? v : y, j = j == u ? v : j;
                        var A = y == v,
                            O = j == v,
                            m = y == j;
                        if (m && tT(t)) {
                            if (!tT(e)) return !1;
                            a = !0, A = !1
                        }
                        if (m && !A) return i || (i = new td), a || tL(t) ? tz(t, e, r, n, o, i) : function(t, e, r, n, o, i, a) {
                            switch (r) {
                                case z:
                                    if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) break;
                                    t = t.buffer, e = e.buffer;
                                case w:
                                    if (t.byteLength != e.byteLength || !i(new J(t), new J(e))) break;
                                    return !0;
                                case f:
                                case s:
                                case p:
                                    return tE(+t, +e);
                                case l:
                                    return t.name == e.name && t.message == e.message;
                                case b:
                                case g:
                                    return t == e + "";
                                case _:
                                    var u = B;
                                case d:
                                    var c = 1 & n;
                                    if (u || (u = I), t.size != e.size && !c) break;
                                    var h = a.get(t);
                                    if (h) return h == e;
                                    n |= 2, a.set(t, e);
                                    var v = tz(u(t), u(e), n, o, i, a);
                                    return a.delete(t), v;
                                case "[object Symbol]":
                                    if (t_) return t_.call(t) == t_.call(e)
                            }
                            return !1
                        }(t, e, y, r, n, o, i);
                        if (!(1 & r)) {
                            var k = A && N.call(t, "__wrapped__"),
                                S = O && N.call(e, "__wrapped__");
                            if (k || S) {
                                var x = k ? t.value() : t,
                                    E = S ? e.value() : e;
                                return i || (i = new td), o(x, E, r, n, i)
                            }
                        }
                        return !!m && (i || (i = new td), function(t, e, r, n, o, i) {
                            var a = 1 & r,
                                u = tA(t),
                                c = u.length;
                            if (c != tA(e).length && !a) return !1;
                            for (var f = c; f--;) {
                                var s = u[f];
                                if (!(a ? s in e : N.call(e, s))) return !1
                            }
                            var l = i.get(t);
                            if (l && i.get(e)) return l == e;
                            var h = !0;
                            i.set(t, e), i.set(e, t);
                            for (var _ = a; ++f < c;) {
                                var p = t[s = u[f]],
                                    v = e[s];
                                if (n) var y = a ? n(v, p, s, e, t, i) : n(p, v, s, t, e, i);
                                if (!(void 0 === y ? p === v || o(p, v, r, n, i) : y)) {
                                    h = !1;
                                    break
                                }
                                _ || (_ = "constructor" == s)
                            }
                            if (h && !_) {
                                var b = t.constructor,
                                    d = e.constructor;
                                b != d && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof d && d instanceof d) && (h = !1)
                            }
                            return i.delete(t), i.delete(e), h
                        }(t, e, r, n, o, i))
                    }(e, r, n, o, t, i) : e != e && r != r)
                }(t, e)
            }
        }
    }
]);