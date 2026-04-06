(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16471], {
        716471: function(t) {
            function e(t) {
                var t = t || {};
                this.Timeout = t.timeout || 1, this.EditCost = t.editCost || 4
            }
            e.Diff, e.prototype.main = function(t, e, n, r) {
                void 0 === r && (r = this.Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Timeout);
                var i = r;
                if (null == t || null == e) throw Error("Null input. (diff_main)");
                if (t == e) return t ? [
                    [0, t]
                ] : [];
                void 0 === n && (n = !0);
                var s = n,
                    a = this.commonPrefix(t, e),
                    h = t.substring(0, a);
                t = t.substring(a), e = e.substring(a), a = this.commonSuffix(t, e);
                var l = t.substring(t.length - a);
                t = t.substring(0, t.length - a), e = e.substring(0, e.length - a);
                var o = this.compute_(t, e, s, i);
                return h && o.unshift([0, h]), l && o.push([0, l]), this.cleanupMerge(o), o
            }, e.prototype.compute_ = function(t, e, n, r) {
                if (!t) return [
                    [1, e]
                ];
                if (!e) return [
                    [-1, t]
                ];
                var i, s = t.length > e.length ? t : e,
                    a = t.length > e.length ? e : t,
                    h = s.indexOf(a);
                if (-1 != h) return i = [
                    [1, s.substring(0, h)],
                    [0, a],
                    [1, s.substring(h + a.length)]
                ], t.length > e.length && (i[0][0] = i[2][0] = -1), i;
                if (1 == a.length) return [
                    [-1, t],
                    [1, e]
                ];
                var l = this.halfMatch_(t, e);
                if (l) {
                    var o = l[0],
                        g = l[1],
                        u = l[2],
                        c = l[3],
                        f = l[4],
                        p = this.main(o, u, n, r),
                        b = this.main(g, c, n, r);
                    return p.concat([
                        [0, f]
                    ], b)
                }
                return n && t.length > 100 && e.length > 100 ? this.lineMode_(t, e, r) : this.bisect_(t, e, r)
            }, e.prototype.lineMode_ = function(t, e, n) {
                var r = this.linesToChars_(t, e);
                t = r.chars1, e = r.chars2;
                var i = r.lineArray,
                    s = this.main(t, e, !1, n);
                this.charsToLines_(s, i), this.cleanupSemantic(s), s.push([0, ""]);
                for (var a = 0, h = 0, l = 0, o = "", g = ""; a < s.length;) {
                    switch (s[a][0]) {
                        case 1:
                            l++, g += s[a][1];
                            break;
                        case -1:
                            h++, o += s[a][1];
                            break;
                        case 0:
                            if (h >= 1 && l >= 1) {
                                s.splice(a - h - l, h + l), a = a - h - l;
                                for (var r = this.main(o, g, !1, n), u = r.length - 1; u >= 0; u--) s.splice(a, 0, r[u]);
                                a += r.length
                            }
                            l = 0, h = 0, o = "", g = ""
                    }
                    a++
                }
                return s.pop(), s
            }, e.prototype.bisect_ = function(t, e, n) {
                for (var r = t.length, i = e.length, s = Math.ceil((r + i) / 2), a = 2 * s, h = Array(a), l = Array(a), o = 0; o < a; o++) h[o] = -1, l[o] = -1;
                h[s + 1] = 0, l[s + 1] = 0;
                for (var g = r - i, u = g % 2 != 0, c = 0, f = 0, p = 0, b = 0, m = 0; m < s && !(new Date().getTime() > n); m++) {
                    for (var v = -m + c; v <= m - f; v += 2) {
                        for (var _, x = s + v, d = (_ = v == -m || v != m && h[x - 1] < h[x + 1] ? h[x + 1] : h[x - 1] + 1) - v; _ < r && d < i && t.charAt(_) == e.charAt(d);) _++, d++;
                        if (h[x] = _, _ > r) f += 2;
                        else if (d > i) c += 2;
                        else if (u) {
                            var y = s + g - v;
                            if (y >= 0 && y < a && -1 != l[y]) {
                                var A = r - l[y];
                                if (_ >= A) return this.bisectSplit_(t, e, _, d, n)
                            }
                        }
                    }
                    for (var k = -m + p; k <= m - b; k += 2) {
                        for (var A, y = s + k, M = (A = k == -m || k != m && l[y - 1] < l[y + 1] ? l[y + 1] : l[y - 1] + 1) - k; A < r && M < i && t.charAt(r - A - 1) == e.charAt(i - M - 1);) A++, M++;
                        if (l[y] = A, A > r) b += 2;
                        else if (M > i) p += 2;
                        else if (!u) {
                            var x = s + g - k;
                            if (x >= 0 && x < a && -1 != h[x]) {
                                var _ = h[x],
                                    d = s + _ - x;
                                if (_ >= (A = r - A)) return this.bisectSplit_(t, e, _, d, n)
                            }
                        }
                    }
                }
                return [
                    [-1, t],
                    [1, e]
                ]
            }, e.prototype.bisectSplit_ = function(t, e, n, r, i) {
                var s = t.substring(0, n),
                    a = e.substring(0, r),
                    h = t.substring(n),
                    l = e.substring(r),
                    o = this.main(s, a, !1, i),
                    g = this.main(h, l, !1, i);
                return o.concat(g)
            }, e.prototype.linesToChars_ = function(t, e) {
                var n = [],
                    r = {};

                function i(t) {
                    for (var e = "", i = 0, s = -1, a = n.length; s < t.length - 1;) {
                        -1 == (s = t.indexOf("\n", i)) && (s = t.length - 1);
                        var h = t.substring(i, s + 1);
                        i = s + 1, (r.hasOwnProperty ? r.hasOwnProperty(h) : void 0 !== r[h]) ? e += String.fromCharCode(r[h]) : (e += String.fromCharCode(a), r[h] = a, n[a++] = h)
                    }
                    return e
                }
                return n[0] = "", {
                    chars1: i(t),
                    chars2: i(e),
                    lineArray: n
                }
            }, e.prototype.charsToLines_ = function(t, e) {
                for (var n = 0; n < t.length; n++) {
                    for (var r = t[n][1], i = [], s = 0; s < r.length; s++) i[s] = e[r.charCodeAt(s)];
                    t[n][1] = i.join("")
                }
            }, e.prototype.commonPrefix = function(t, e) {
                if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                for (var n = 0, r = Math.min(t.length, e.length), i = r, s = 0; n < i;) t.substring(s, i) == e.substring(s, i) ? s = n = i : r = i, i = Math.floor((r - n) / 2 + n);
                return i
            }, e.prototype.commonSuffix = function(t, e) {
                if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                for (var n = 0, r = Math.min(t.length, e.length), i = r, s = 0; n < i;) t.substring(t.length - i, t.length - s) == e.substring(e.length - i, e.length - s) ? s = n = i : r = i, i = Math.floor((r - n) / 2 + n);
                return i
            }, e.prototype.commonOverlap_ = function(t, e) {
                var n = t.length,
                    r = e.length;
                if (0 == n || 0 == r) return 0;
                n > r ? t = t.substring(n - r) : n < r && (e = e.substring(0, n));
                var i = Math.min(n, r);
                if (t == e) return i;
                for (var s = 0, a = 1;;) {
                    var h = t.substring(i - a),
                        l = e.indexOf(h);
                    if (-1 == l) return s;
                    a += l, (0 == l || t.substring(i - a) == e.substring(0, a)) && (s = a, a++)
                }
            }, e.prototype.halfMatch_ = function(t, e) {
                if (this.Timeout <= 0) return null;
                var n, r, i, s, a, h = t.length > e.length ? t : e,
                    l = t.length > e.length ? e : t;
                if (h.length < 4 || 2 * l.length < h.length) return null;
                var o = this;

                function g(t, e, n) {
                    for (var r, i, s, a, h = t.substring(n, n + Math.floor(t.length / 4)), l = -1, g = ""; - 1 != (l = e.indexOf(h, l + 1));) {
                        var u = o.commonPrefix(t.substring(n), e.substring(l)),
                            c = o.commonSuffix(t.substring(0, n), e.substring(0, l));
                        g.length < c + u && (g = e.substring(l - c, l) + e.substring(l, l + u), r = t.substring(0, n - c), i = t.substring(n + u), s = e.substring(0, l - c), a = e.substring(l + u))
                    }
                    return 2 * g.length >= t.length ? [r, i, s, a, g] : null
                }
                var u = g(h, l, Math.ceil(h.length / 4)),
                    c = g(h, l, Math.ceil(h.length / 2));
                return u || c ? (n = c ? u && u[4].length > c[4].length ? u : c : u, t.length > e.length ? (r = n[0], i = n[1], s = n[2], a = n[3]) : (s = n[0], a = n[1], r = n[2], i = n[3]), [r, i, s, a, n[4]]) : null
            }, e.prototype.cleanupSemantic = function(t) {
                for (var e = !1, n = [], r = 0, i = null, s = 0, a = 0, h = 0, l = 0, o = 0; s < t.length;) 0 == t[s][0] ? (n[r++] = s, a = l, h = o, l = 0, o = 0, i = t[s][1]) : (1 == t[s][0] ? l += t[s][1].length : o += t[s][1].length, i && i.length <= Math.max(a, h) && i.length <= Math.max(l, o) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, s = --r > 0 ? n[r - 1] : -1, a = 0, h = 0, l = 0, o = 0, i = null, e = !0)), s++;
                for (e && this.cleanupMerge(t), this.cleanupSemanticLossless(t), s = 1; s < t.length;) {
                    if (-1 == t[s - 1][0] && 1 == t[s][0]) {
                        var g = t[s - 1][1],
                            u = t[s][1],
                            c = this.commonOverlap_(g, u),
                            f = this.commonOverlap_(u, g);
                        c >= f ? (c >= g.length / 2 || c >= u.length / 2) && (t.splice(s, 0, [0, u.substring(0, c)]), t[s - 1][1] = g.substring(0, g.length - c), t[s + 1][1] = u.substring(c), s++) : (f >= g.length / 2 || f >= u.length / 2) && (t.splice(s, 0, [0, g.substring(0, f)]), t[s - 1][0] = 1, t[s - 1][1] = u.substring(0, u.length - f), t[s + 1][0] = -1, t[s + 1][1] = g.substring(f), s++), s++
                    }
                    s++
                }
            }, e.prototype.cleanupSemanticLossless = function(t) {
                function n(t, n) {
                    if (!t || !n) return 6;
                    var r = t.charAt(t.length - 1),
                        i = n.charAt(0),
                        s = r.match(e.nonAlphaNumericRegex_),
                        a = i.match(e.nonAlphaNumericRegex_),
                        h = s && r.match(e.whitespaceRegex_),
                        l = a && i.match(e.whitespaceRegex_),
                        o = h && r.match(e.linebreakRegex_),
                        g = l && i.match(e.linebreakRegex_),
                        u = o && t.match(e.blanklineEndRegex_),
                        c = g && n.match(e.blanklineStartRegex_);
                    if (u || c) return 5;
                    if (o || g) return 4;
                    if (s && !h && l) return 3;
                    if (h || l) return 2;
                    if (s || a) return 1;
                    return 0
                }
                for (var r = 1; r < t.length - 1;) {
                    if (0 == t[r - 1][0] && 0 == t[r + 1][0]) {
                        var i = t[r - 1][1],
                            s = t[r][1],
                            a = t[r + 1][1],
                            h = this.commonSuffix(i, s);
                        if (h) {
                            var l = s.substring(s.length - h);
                            i = i.substring(0, i.length - h), s = l + s.substring(0, s.length - h), a = l + a
                        }
                        for (var o = i, g = s, u = a, c = n(i, s) + n(s, a); s.charAt(0) === a.charAt(0);) {
                            i += s.charAt(0), s = s.substring(1) + a.charAt(0), a = a.substring(1);
                            var f = n(i, s) + n(s, a);
                            f >= c && (c = f, o = i, g = s, u = a)
                        }
                        t[r - 1][1] != o && (o ? t[r - 1][1] = o : (t.splice(r - 1, 1), r--), t[r][1] = g, u ? t[r + 1][1] = u : (t.splice(r + 1, 1), r--))
                    }
                    r++
                }
            }, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.cleanupEfficiency = function(t) {
                for (var e = !1, n = [], r = 0, i = null, s = 0, a = !1, h = !1, l = !1, o = !1; s < t.length;) 0 == t[s][0] ? (t[s][1].length < this.EditCost && (l || o) ? (n[r++] = s, a = l, h = o, i = t[s][1]) : (r = 0, i = null), l = o = !1) : (-1 == t[s][0] ? o = !0 : l = !0, i && (a && h && l && o || i.length < this.EditCost / 2 && a + h + l + o == 3) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, i = null, a && h ? (l = o = !0, r = 0) : (s = --r > 0 ? n[r - 1] : -1, l = o = !1), e = !0)), s++;
                e && this.cleanupMerge(t)
            }, e.prototype.cleanupMerge = function(t) {
                t.push([0, ""]);
                for (var e, n = 0, r = 0, i = 0, s = "", a = ""; n < t.length;) switch (t[n][0]) {
                    case 1:
                        i++, a += t[n][1], n++;
                        break;
                    case -1:
                        r++, s += t[n][1], n++;
                        break;
                    case 0:
                        r + i > 1 ? (0 !== r && 0 !== i && (0 !== (e = this.commonPrefix(a, s)) && (n - r - i > 0 && 0 == t[n - r - i - 1][0] ? t[n - r - i - 1][1] += a.substring(0, e) : (t.splice(0, 0, [0, a.substring(0, e)]), n++), a = a.substring(e), s = s.substring(e)), 0 !== (e = this.commonSuffix(a, s)) && (t[n][1] = a.substring(a.length - e) + t[n][1], a = a.substring(0, a.length - e), s = s.substring(0, s.length - e))), 0 === r ? t.splice(n - i, r + i, [1, a]) : 0 === i ? t.splice(n - r, r + i, [-1, s]) : t.splice(n - r - i, r + i, [-1, s], [1, a]), n = n - r - i + +!!r + +!!i + 1) : 0 !== n && 0 == t[n - 1][0] ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, i = 0, r = 0, s = "", a = ""
                }
                "" === t[t.length - 1][1] && t.pop();
                var h = !1;
                for (n = 1; n < t.length - 1;) 0 == t[n - 1][0] && 0 == t[n + 1][0] && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), h = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), h = !0)), n++;
                h && this.cleanupMerge(t)
            }, e.prototype.xIndex = function(t, e) {
                var n, r = 0,
                    i = 0,
                    s = 0,
                    a = 0;
                for (n = 0; n < t.length && (1 !== t[n][0] && (r += t[n][1].length), -1 !== t[n][0] && (i += t[n][1].length), !(r > e)); n++) s = r, a = i;
                return t.length != n && -1 === t[n][0] ? a : a + (e - s)
            }, e.prototype.prettyHtml = function(t) {
                for (var e = [], n = /&/g, r = /</g, i = />/g, s = /\n/g, a = 0; a < t.length; a++) {
                    var h = t[a][0],
                        l = t[a][1].replace(n, "&amp;").replace(r, "&lt;").replace(i, "&gt;").replace(s, "<br/>");
                    switch (h) {
                        case 1:
                            e[a] = "<ins>" + l + "</ins>";
                            break;
                        case -1:
                            e[a] = "<del>" + l + "</del>";
                            break;
                        case 0:
                            e[a] = "<span>" + l + "</span>"
                    }
                }
                return e.join("")
            }, e.prototype.text1 = function(t) {
                for (var e = [], n = 0; n < t.length; n++) 1 !== t[n][0] && (e[n] = t[n][1]);
                return e.join("")
            }, e.prototype.text2 = function(t) {
                for (var e = [], n = 0; n < t.length; n++) - 1 !== t[n][0] && (e[n] = t[n][1]);
                return e.join("")
            }, e.prototype.levenshtein = function(t) {
                for (var e = 0, n = 0, r = 0, i = 0; i < t.length; i++) {
                    var s = t[i][0],
                        a = t[i][1];
                    switch (s) {
                        case 1:
                            n += a.length;
                            break;
                        case -1:
                            r += a.length;
                            break;
                        case 0:
                            e += Math.max(n, r), n = 0, r = 0
                    }
                }
                return e + Math.max(n, r)
            }, e.prototype.toDelta = function(t) {
                for (var e = [], n = 0; n < t.length; n++) switch (t[n][0]) {
                    case 1:
                        e[n] = "+" + encodeURI(t[n][1]);
                        break;
                    case -1:
                        e[n] = "-" + t[n][1].length;
                        break;
                    case 0:
                        e[n] = "=" + t[n][1].length
                }
                return e.join("	").replace(/%20/g, " ")
            }, e.prototype.fromDelta = function(t, e) {
                for (var n = [], r = 0, i = 0, s = e.split(/\t/g), a = 0; a < s.length; a++) {
                    var h = s[a].substring(1);
                    switch (s[a].charAt(0)) {
                        case "+":
                            try {
                                n[r++] = [1, decodeURI(h)]
                            } catch (t) {
                                throw Error("Illegal escape in diff_fromDelta: " + h)
                            }
                            break;
                        case "-":
                        case "=":
                            var l = parseInt(h, 10);
                            if (isNaN(l) || l < 0) throw Error("Invalid number in diff_fromDelta: " + h);
                            var o = t.substring(i, i += l);
                            "=" == s[a].charAt(0) ? n[r++] = [0, o] : n[r++] = [-1, o];
                            break;
                        default:
                            if (s[a]) throw Error("Invalid diff operation in diff_fromDelta: " + s[a])
                    }
                }
                if (i != t.length) throw Error("Delta length (" + i + ") does not equal source text length (" + t.length + ").");
                return n
            }, this.diff = e, this.DIFF_DELETE = -1, this.DIFF_INSERT = 1, this.DIFF_EQUAL = 0, t.exports = e
        }
    }
]);