(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [98629], {
        598629: function(t, r, e) {
            var i;
            ! function() {
                "use strict";
                var n, s = "[big.js] ",
                    o = s + "Invalid ",
                    c = o + "decimal places",
                    h = o + "rounding mode",
                    f = s + "Division by zero",
                    u = {},
                    l = void 0,
                    a = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

                function w(t, r, e, i) {
                    var s = t.c;
                    if (e === l && (e = n.RM), 0 !== e && 1 !== e && 2 !== e && 3 !== e) throw Error(h);
                    if (r < 1) i = 3 === e && (i || !!s[0]) || 0 === r && (1 === e && s[0] >= 5 || 2 === e && (s[0] > 5 || 5 === s[0] && (i || s[1] !== l))), s.length = 1, i ? (t.e = t.e - r + 1, s[0] = 1) : s[0] = t.e = 0;
                    else if (r < s.length) {
                        if (i = 1 === e && s[r] >= 5 || 2 === e && (s[r] > 5 || 5 === s[r] && (i || s[r + 1] !== l || 1 & s[r - 1])) || 3 === e && (i || !!s[0]), s.length = r--, i)
                            for (; ++s[r] > 9;) s[r] = 0, r-- || (++t.e, s.unshift(1));
                        for (r = s.length; !s[--r];) s.pop()
                    }
                    return t
                }

                function p(t, r, e) {
                    var i = t.e,
                        n = t.c.join(""),
                        s = n.length;
                    if (r) n = n.charAt(0) + (s > 1 ? "." + n.slice(1) : "") + (i < 0 ? "e" : "e+") + i;
                    else if (i < 0) {
                        for (; ++i;) n = "0" + n;
                        n = "0." + n
                    } else if (i > 0)
                        if (++i > s)
                            for (i -= s; i--;) n += "0";
                        else i < s && (n = n.slice(0, i) + "." + n.slice(i));
                    else s > 1 && (n = n.charAt(0) + "." + n.slice(1));
                    return t.s < 0 && e ? "-" + n : n
                }
                u.abs = function() {
                    var t = new this.constructor(this);
                    return t.s = 1, t
                }, u.cmp = function(t) {
                    var r, e = this.c,
                        i = (t = new this.constructor(t)).c,
                        n = this.s,
                        s = t.s,
                        o = this.e,
                        c = t.e;
                    if (!e[0] || !i[0]) return e[0] ? n : i[0] ? -s : 0;
                    if (n != s) return n;
                    if (r = n < 0, o != c) return o > c ^ r ? 1 : -1;
                    for (n = -1, s = (o = e.length) < (c = i.length) ? o : c; ++n < s;)
                        if (e[n] != i[n]) return e[n] > i[n] ^ r ? 1 : -1;
                    return o == c ? 0 : o > c ^ r ? 1 : -1
                }, u.div = function(t) {
                    var r = this.constructor,
                        e = this.c,
                        i = (t = new r(t)).c,
                        n = this.s == t.s ? 1 : -1,
                        s = r.DP;
                    if (s !== ~~s || s < 0 || s > 1e6) throw Error(c);
                    if (!i[0]) throw Error(f);
                    if (!e[0]) return new r(0 * n);
                    var o, h, u, a, p, g = i.slice(),
                        v = o = i.length,
                        d = e.length,
                        E = e.slice(0, o),
                        m = E.length,
                        b = t,
                        P = b.c = [],
                        x = 0,
                        M = s + (b.e = this.e - t.e) + 1;
                    for (b.s = n, n = M < 0 ? 0 : M, g.unshift(0); m++ < o;) E.push(0);
                    do {
                        for (u = 0; u < 10; u++) {
                            if (o != (m = E.length)) a = o > m ? 1 : -1;
                            else
                                for (p = -1, a = 0; ++p < o;)
                                    if (i[p] != E[p]) {
                                        a = i[p] > E[p] ? 1 : -1;
                                        break
                                    } if (a < 0) {
                                for (h = m == o ? i : g; m;) {
                                    if (E[--m] < h[m]) {
                                        for (p = m; p && !E[--p];) E[p] = 9;
                                        --E[p], E[m] += 10
                                    }
                                    E[m] -= h[m]
                                }
                                for (; !E[0];) E.shift()
                            } else break
                        }
                        P[x++] = a ? u : ++u, E[0] && a ? E[m] = e[v] || 0 : E = [e[v]]
                    } while ((v++ < d || E[0] !== l) && n--) return !P[0] && 1 != x && (P.shift(), b.e--, M--), x > M && w(b, M, r.RM, E[0] !== l), b
                }, u.eq = function(t) {
                    return 0 === this.cmp(t)
                }, u.gt = function(t) {
                    return this.cmp(t) > 0
                }, u.gte = function(t) {
                    return this.cmp(t) > -1
                }, u.lt = function(t) {
                    return 0 > this.cmp(t)
                }, u.lte = function(t) {
                    return 1 > this.cmp(t)
                }, u.minus = u.sub = function(t) {
                    var r, e, i, n, s = this.constructor,
                        o = this.s,
                        c = (t = new s(t)).s;
                    if (o != c) return t.s = -c, this.plus(t);
                    var h = this.c.slice(),
                        f = this.e,
                        u = t.c,
                        l = t.e;
                    if (!h[0] || !u[0]) return u[0] ? (t.s = -c, t) : new s(h[0] ? this : 0);
                    if (o = f - l) {
                        for ((n = o < 0) ? (o = -o, i = h) : (l = f, i = u), i.reverse(), c = o; c--;) i.push(0);
                        i.reverse()
                    } else
                        for (e = ((n = h.length < u.length) ? h : u).length, o = c = 0; c < e; c++)
                            if (h[c] != u[c]) {
                                n = h[c] < u[c];
                                break
                            } if (n && (i = h, h = u, u = i, t.s = -t.s), (c = (e = u.length) - (r = h.length)) > 0)
                        for (; c--;) h[r++] = 0;
                    for (c = r; e > o;) {
                        if (h[--e] < u[e]) {
                            for (r = e; r && !h[--r];) h[r] = 9;
                            --h[r], h[e] += 10
                        }
                        h[e] -= u[e]
                    }
                    for (; 0 === h[--c];) h.pop();
                    for (; 0 === h[0];) h.shift(), --l;
                    return h[0] || (t.s = 1, h = [l = 0]), t.c = h, t.e = l, t
                }, u.mod = function(t) {
                    var r, e = this,
                        i = e.constructor,
                        n = e.s,
                        s = (t = new i(t)).s;
                    if (!t.c[0]) throw Error(f);
                    return (e.s = t.s = 1, r = 1 == t.cmp(e), e.s = n, t.s = s, r) ? new i(e) : (n = i.DP, s = i.RM, i.DP = i.RM = 0, e = e.div(t), i.DP = n, i.RM = s, this.minus(e.times(t)))
                }, u.plus = u.add = function(t) {
                    var r, e = this.constructor,
                        i = this.s,
                        n = (t = new e(t)).s;
                    if (i != n) return t.s = -n, this.minus(t);
                    var s = this.e,
                        o = this.c,
                        c = t.e,
                        h = t.c;
                    if (!o[0] || !h[0]) return h[0] ? t : new e(o[0] ? this : 0 * i);
                    if (o = o.slice(), i = s - c) {
                        for (i > 0 ? (c = s, r = h) : (i = -i, r = o), r.reverse(); i--;) r.push(0);
                        r.reverse()
                    }
                    for (o.length - h.length < 0 && (r = h, h = o, o = r), i = h.length, n = 0; i; o[i] %= 10) n = (o[--i] = o[i] + h[i] + n) / 10 | 0;
                    for (n && (o.unshift(n), ++c), i = o.length; 0 === o[--i];) o.pop();
                    return t.c = o, t.e = c, t
                }, u.pow = function(t) {
                    var r = this,
                        e = new r.constructor(1),
                        i = e,
                        n = t < 0;
                    if (t !== ~~t || t < -1e6 || t > 1e6) throw Error(o + "exponent");
                    for (n && (t = -t); 1 & t && (i = i.times(r)), t >>= 1;) r = r.times(r);
                    return n ? e.div(i) : i
                }, u.prec = function(t, r) {
                    if (t !== ~~t || t < 1 || t > 1e6) throw Error(o + "precision");
                    return w(new this.constructor(this), t, r)
                }, u.round = function(t, r) {
                    if (t === l) t = 0;
                    else if (t !== ~~t || t < -1e6 || t > 1e6) throw Error(c);
                    return w(new this.constructor(this), t + this.e + 1, r)
                }, u.sqrt = function() {
                    var t, r, e, i = this.constructor,
                        n = this.s,
                        o = this.e,
                        c = new i(.5);
                    if (!this.c[0]) return new i(this);
                    if (n < 0) throw Error(s + "No square root");
                    0 === (n = Math.sqrt(this + "")) || n === 1 / 0 ? ((r = this.c.join("")).length + o & 1 || (r += "0"), o = ((o + 1) / 2 | 0) - (o < 0 || 1 & o), t = new i(((n = Math.sqrt(r)) == 1 / 0 ? "1e" : (n = n.toExponential()).slice(0, n.indexOf("e") + 1)) + o)) : t = new i(n), o = t.e + (i.DP += 4);
                    do e = t, t = c.times(e.plus(this.div(e))); while (e.c.slice(0, o).join("") !== t.c.slice(0, o).join("")) return w(t, (i.DP -= 4) + t.e + 1, i.RM)
                }, u.times = u.mul = function(t) {
                    var r, e = this.constructor,
                        i = this.c,
                        n = (t = new e(t)).c,
                        s = i.length,
                        o = n.length,
                        c = this.e,
                        h = t.e;
                    if (t.s = this.s == t.s ? 1 : -1, !i[0] || !n[0]) return new e(0 * t.s);
                    for (t.e = c + h, s < o && (r = i, i = n, n = r, h = s, s = o, o = h), r = Array(h = s + o); h--;) r[h] = 0;
                    for (c = o; c--;) {
                        for (o = 0, h = s + c; h > c;) o = r[h] + n[c] * i[h - c - 1] + o, r[h--] = o % 10, o = o / 10 | 0;
                        r[h] = o
                    }
                    for (o ? ++t.e : r.shift(), c = r.length; !r[--c];) r.pop();
                    return t.c = r, t
                }, u.toExponential = function(t, r) {
                    var e = this,
                        i = e.c[0];
                    if (t !== l) {
                        if (t !== ~~t || t < 0 || t > 1e6) throw Error(c);
                        for (e = w(new e.constructor(e), ++t, r); e.c.length < t;) e.c.push(0)
                    }
                    return p(e, !0, !!i)
                }, u.toFixed = function(t, r) {
                    var e = this,
                        i = e.c[0];
                    if (t !== l) {
                        if (t !== ~~t || t < 0 || t > 1e6) throw Error(c);
                        for (e = w(new e.constructor(e), t + e.e + 1, r), t = t + e.e + 1; e.c.length < t;) e.c.push(0)
                    }
                    return p(e, !1, !!i)
                }, u.toJSON = function() {
                    return p(this, !0, !0)
                }, u.toNumber = function() {
                    var t = Number(p(this, !0, !0));
                    if (!0 === this.constructor.strict && !this.eq(t.toString())) throw Error(s + "Imprecise conversion");
                    return t
                }, u.toPrecision = function(t, r) {
                    var e = this,
                        i = e.constructor,
                        n = e.c[0];
                    if (t !== l) {
                        if (t !== ~~t || t < 1 || t > 1e6) throw Error(o + "precision");
                        for (e = w(new i(e), t, r); e.c.length < t;) e.c.push(0)
                    }
                    return p(e, t <= e.e || e.e <= i.NE || e.e >= i.PE, !!n)
                }, u.toString = function() {
                    var t = this.constructor;
                    return p(this, this.e <= t.NE || this.e >= t.PE, !!this.c[0])
                }, u.valueOf = function() {
                    var t = this.constructor;
                    if (!0 === t.strict) throw Error(s + "valueOf disallowed");
                    return p(this, this.e <= t.NE || this.e >= t.PE, !0)
                }, (n = function t() {
                    function r(e) {
                        if (!(this instanceof r)) return e === l ? t() : new r(e);
                        if (e instanceof r) this.s = e.s, this.e = e.e, this.c = e.c.slice();
                        else {
                            if ("string" != typeof e) {
                                if (!0 === r.strict) throw TypeError(o + "number");
                                e = 0 === e && 1 / e < 0 ? "-0" : String(e)
                            }! function(t, r) {
                                var e, i, n;
                                if (!a.test(r)) throw Error(o + "number");
                                for (t.s = "-" == r.charAt(0) ? (r = r.slice(1), -1) : 1, (e = r.indexOf(".")) > -1 && (r = r.replace(".", "")), (i = r.search(/e/i)) > 0 ? (e < 0 && (e = i), e += +r.slice(i + 1), r = r.substring(0, i)) : e < 0 && (e = r.length), n = r.length, i = 0; i < n && "0" == r.charAt(i);) ++i;
                                if (i == n) t.c = [t.e = 0];
                                else {
                                    for (; n > 0 && "0" == r.charAt(--n););
                                    for (t.e = e - i - 1, t.c = [], e = 0; i <= n;) t.c[e++] = +r.charAt(i++)
                                }
                            }(this, e)
                        }
                        this.constructor = r
                    }
                    return r.prototype = u, r.DP = 20, r.RM = 1, r.NE = -7, r.PE = 21, r.strict = !1, r
                }()).default = n.Big = n, void 0 === (i = (function() {
                    return n
                }).call(r, e, r, t)) || (t.exports = i)
            }()
        }
    }
]);