"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [68070], {
        910513: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => x
            });
            var n, i = function() {
                return (i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                    return e
                }).apply(this, arguments)
            };

            function o(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    n = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && n >= e.length && (e = void 0), {
                            value: e && e[n++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function u(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var n, i, o = r.call(e),
                    u = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(n = o.next()).done;) u.push(n.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        n && !n.done && (r = o.return) && r.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return u
            }
            "function" == typeof SuppressedError && SuppressedError;
            var a = "KEYS",
                s = "VALUES",
                l = function() {
                    function e(e, t) {
                        var r = e._tree,
                            n = Array.from(r.keys());
                        this.set = e, this._type = t, this._path = n.length > 0 ? [{
                            node: r,
                            keys: n
                        }] : []
                    }
                    return e.prototype.next = function() {
                        var e = this.dive();
                        return this.backtrack(), e
                    }, e.prototype.dive = function() {
                        if (0 === this._path.length) return {
                            done: !0,
                            value: void 0
                        };
                        var e = c(this._path),
                            t = e.node,
                            r = e.keys;
                        if ("" === c(r)) return {
                            done: !1,
                            value: this.result()
                        };
                        var n = t.get(c(r));
                        return this._path.push({
                            node: n,
                            keys: Array.from(n.keys())
                        }), this.dive()
                    }, e.prototype.backtrack = function() {
                        if (0 !== this._path.length) {
                            var e = c(this._path).keys;
                            e.pop(), e.length > 0 || (this._path.pop(), this.backtrack())
                        }
                    }, e.prototype.key = function() {
                        return this.set._prefix + this._path.map(function(e) {
                            return c(e.keys)
                        }).filter(function(e) {
                            return "" !== e
                        }).join("")
                    }, e.prototype.value = function() {
                        return c(this._path).node.get("")
                    }, e.prototype.result = function() {
                        switch (this._type) {
                            case s:
                                return this.value();
                            case a:
                                return this.key();
                            default:
                                return [this.key(), this.value()]
                        }
                    }, e.prototype[Symbol.iterator] = function() {
                        return this
                    }, e
                }(),
                c = function(e) {
                    return e[e.length - 1]
                },
                h = function(e, t, r) {
                    var n = new Map;
                    if (void 0 === t) return n;
                    for (var i = t.length + 1, o = i + r, u = new Uint8Array(o * i).fill(r + 1), a = 0; a < i; ++a) u[a] = a;
                    for (var s = 1; s < o; ++s) u[s * i] = s;
                    return d(e, t, r, n, u, 1, i, ""), n
                },
                d = function(e, t, r, n, i, u, a, s) {
                    var l, c, h = u * a;
                    try {
                        e: for (var f = o(e.keys()), v = f.next(); !v.done; v = f.next()) {
                            var y = v.value;
                            if ("" === y) {
                                var p = i[h - 1];
                                p <= r && n.set(s, [e.get(y), p])
                            } else {
                                for (var _ = u, m = 0; m < y.length; ++m, ++_) {
                                    for (var g = y[m], F = a * _, x = F - a, w = i[F], b = Math.max(0, _ - r - 1), A = Math.min(a - 1, _ + r), C = b; C < A; ++C) {
                                        var E = g !== t[C],
                                            z = i[x + C] + +E,
                                            D = i[x + C + 1] + 1,
                                            S = i[F + C] + 1,
                                            k = i[F + C + 1] = Math.min(z, D, S);
                                        k < w && (w = k)
                                    }
                                    if (w > r) continue e
                                }
                                d(e.get(y), t, r, n, i, _, a, s + y)
                            }
                        }
                    }
                    catch (e) {
                        l = {
                            error: e
                        }
                    } finally {
                        try {
                            v && !v.done && (c = f.return) && c.call(f)
                        } finally {
                            if (l) throw l.error
                        }
                    }
                },
                f = function() {
                    function e(e, t) {
                        void 0 === e && (e = new Map), void 0 === t && (t = ""), this._size = void 0, this._tree = e, this._prefix = t
                    }
                    return e.prototype.atPrefix = function(t) {
                        if (!t.startsWith(this._prefix)) throw Error("Mismatched prefix");
                        var r, n, i = u(v(this._tree, t.slice(this._prefix.length)), 2),
                            a = i[0],
                            s = i[1];
                        if (void 0 === a) {
                            var l = u(F(s), 2),
                                c = l[0],
                                h = l[1];
                            try {
                                for (var d = o(c.keys()), f = d.next(); !f.done; f = d.next()) {
                                    var y = f.value;
                                    if ("" !== y && y.startsWith(h)) {
                                        var p = new Map;
                                        return p.set(y.slice(h.length), c.get(y)), new e(p, t)
                                    }
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    f && !f.done && (n = d.return) && n.call(d)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                        return new e(a, t)
                    }, e.prototype.clear = function() {
                        this._size = void 0, this._tree.clear()
                    }, e.prototype.delete = function(e) {
                        return this._size = void 0, _(this._tree, e)
                    }, e.prototype.entries = function() {
                        return new l(this, "ENTRIES")
                    }, e.prototype.forEach = function(e) {
                        var t, r;
                        try {
                            for (var n = o(this), i = n.next(); !i.done; i = n.next()) {
                                var a = u(i.value, 2),
                                    s = a[0],
                                    l = a[1];
                                e(s, l, this)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, e.prototype.fuzzyGet = function(e, t) {
                        return h(this._tree, e, t)
                    }, e.prototype.get = function(e) {
                        var t = y(this._tree, e);
                        return void 0 !== t ? t.get("") : void 0
                    }, e.prototype.has = function(e) {
                        var t = y(this._tree, e);
                        return void 0 !== t && t.has("")
                    }, e.prototype.keys = function() {
                        return new l(this, a)
                    }, e.prototype.set = function(e, t) {
                        if ("string" != typeof e) throw Error("key must be a string");
                        return this._size = void 0, p(this._tree, e).set("", t), this
                    }, Object.defineProperty(e.prototype, "size", {
                        get: function() {
                            if (this._size) return this._size;
                            this._size = 0;
                            for (var e = this.entries(); !e.next().done;) this._size += 1;
                            return this._size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.update = function(e, t) {
                        if ("string" != typeof e) throw Error("key must be a string");
                        this._size = void 0;
                        var r = p(this._tree, e);
                        return r.set("", t(r.get(""))), this
                    }, e.prototype.fetch = function(e, t) {
                        if ("string" != typeof e) throw Error("key must be a string");
                        this._size = void 0;
                        var r = p(this._tree, e),
                            n = r.get("");
                        return void 0 === n && r.set("", n = t()), n
                    }, e.prototype.values = function() {
                        return new l(this, s)
                    }, e.prototype[Symbol.iterator] = function() {
                        return this.entries()
                    }, e.from = function(t) {
                        var r, n, i = new e;
                        try {
                            for (var a = o(t), s = a.next(); !s.done; s = a.next()) {
                                var l = u(s.value, 2),
                                    c = l[0],
                                    h = l[1];
                                i.set(c, h)
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        return i
                    }, e.fromObject = function(t) {
                        return e.from(Object.entries(t))
                    }, e
                }(),
                v = function(e, t, r) {
                    var n, i;
                    if (void 0 === r && (r = []), 0 === t.length || null == e) return [e, r];
                    try {
                        for (var u = o(e.keys()), a = u.next(); !a.done; a = u.next()) {
                            var s = a.value;
                            if ("" !== s && t.startsWith(s)) return r.push([e, s]), v(e.get(s), t.slice(s.length), r)
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (i = u.return) && i.call(u)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return r.push([e, t]), v(void 0, "", r)
                },
                y = function(e, t) {
                    var r, n;
                    if (0 === t.length || null == e) return e;
                    try {
                        for (var i = o(e.keys()), u = i.next(); !u.done; u = i.next()) {
                            var a = u.value;
                            if ("" !== a && t.startsWith(a)) return y(e.get(a), t.slice(a.length))
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                },
                p = function(e, t) {
                    var r, n, i = t.length;
                    t: for (var u = 0; e && u < i;) {
                        try {
                            for (var a = (r = void 0, o(e.keys())), s = a.next(); !s.done; s = a.next()) {
                                var l = s.value;
                                if ("" !== l && t[u] === l[0]) {
                                    for (var c = Math.min(i - u, l.length), h = 1; h < c && t[u + h] === l[h];) ++h;
                                    var d = e.get(l);
                                    if (h === l.length) e = d;
                                    else {
                                        var f = new Map;
                                        f.set(l.slice(h), d), e.set(t.slice(u, u + h), f), e.delete(l), e = f
                                    }
                                    u += h;
                                    continue t
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (n = a.return) && n.call(a)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        var v = new Map;
                        return e.set(t.slice(u), v), v
                    }
                    return e
                },
                _ = function(e, t) {
                    var r = u(v(e, t), 2),
                        n = r[0],
                        i = r[1];
                    if (void 0 !== n) {
                        if (n.delete(""), 0 === n.size) m(i);
                        else if (1 === n.size) {
                            var o = u(n.entries().next().value, 2);
                            g(i, o[0], o[1])
                        }
                    }
                },
                m = function(e) {
                    if (0 !== e.length) {
                        var t = u(F(e), 2),
                            r = t[0],
                            n = t[1];
                        if (r.delete(n), 0 === r.size) m(e.slice(0, -1));
                        else if (1 === r.size) {
                            var i = u(r.entries().next().value, 2),
                                o = i[0],
                                a = i[1];
                            "" !== o && g(e.slice(0, -1), o, a)
                        }
                    }
                },
                g = function(e, t, r) {
                    if (0 !== e.length) {
                        var n = u(F(e), 2),
                            i = n[0],
                            o = n[1];
                        i.set(o + t, r), i.delete(o)
                    }
                },
                F = function(e) {
                    return e[e.length - 1]
                },
                x = function() {
                    function e(e) {
                        if ((null == e ? void 0 : e.fields) == null) throw Error('MiniSearch: option "fields" must be provided');
                        var t = null == e.autoVacuum || !0 === e.autoVacuum ? I : e.autoVacuum;
                        this._options = i(i(i({}, E), e), {
                            autoVacuum: t,
                            searchOptions: i(i({}, z), e.searchOptions || {}),
                            autoSuggestOptions: i(i({}, D), e.autoSuggestOptions || {})
                        }), this._index = new f, this._documentCount = 0, this._documentIds = new Map, this._idToShortId = new Map, this._fieldIds = {}, this._fieldLength = new Map, this._avgFieldLength = [], this._nextId = 0, this._storedFields = new Map, this._dirtCount = 0, this._currentVacuum = null, this._enqueuedVacuum = null, this._enqueuedVacuumConditions = k, this.addFields(this._options.fields)
                    }
                    return e.prototype.add = function(e) {
                        var t, r, n, i, u, a, s = this._options,
                            l = s.extractField,
                            c = s.tokenize,
                            h = s.processTerm,
                            d = s.fields,
                            f = s.idField,
                            v = l(e, f);
                        if (null == v) throw Error('MiniSearch: document does not have ID field "'.concat(f, '"'));
                        if (this._idToShortId.has(v)) throw Error("MiniSearch: duplicate ID ".concat(v));
                        var y = this.addDocumentId(v);
                        this.saveStoredFields(y, e);
                        try {
                            for (var p = o(d), _ = p.next(); !_.done; _ = p.next()) {
                                var m = _.value,
                                    g = l(e, m);
                                if (null != g) {
                                    var F = c(g.toString(), m),
                                        x = this._fieldIds[m],
                                        w = new Set(F).size;
                                    this.addFieldLength(y, x, this._documentCount - 1, w);
                                    try {
                                        for (var b = (n = void 0, o(F)), A = b.next(); !A.done; A = b.next()) {
                                            var C = A.value,
                                                E = h(C, m);
                                            if (Array.isArray(E)) try {
                                                for (var z = (u = void 0, o(E)), D = z.next(); !D.done; D = z.next()) {
                                                    var S = D.value;
                                                    this.addTerm(x, y, S)
                                                }
                                            } catch (e) {
                                                u = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    D && !D.done && (a = z.return) && a.call(z)
                                                } finally {
                                                    if (u) throw u.error
                                                }
                                            } else E && this.addTerm(x, y, E)
                                        }
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            A && !A.done && (i = b.return) && i.call(b)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                _ && !_.done && (r = p.return) && r.call(p)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, e.prototype.addAll = function(e) {
                        var t, r;
                        try {
                            for (var n = o(e), i = n.next(); !i.done; i = n.next()) {
                                var u = i.value;
                                this.add(u)
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                i && !i.done && (r = n.return) && r.call(n)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                    }, e.prototype.addAllAsync = function(e, t) {
                        var r = this;
                        void 0 === t && (t = {});
                        var n = t.chunkSize,
                            i = void 0 === n ? 10 : n,
                            o = {
                                chunk: [],
                                promise: Promise.resolve()
                            },
                            u = e.reduce(function(e, t, n) {
                                var o = e.chunk,
                                    u = e.promise;
                                return (o.push(t), (n + 1) % i == 0) ? {
                                    chunk: [],
                                    promise: u.then(function() {
                                        return new Promise(function(e) {
                                            return setTimeout(e, 0)
                                        })
                                    }).then(function() {
                                        return r.addAll(o)
                                    })
                                } : {
                                    chunk: o,
                                    promise: u
                                }
                            }, o),
                            a = u.chunk;
                        return u.promise.then(function() {
                            return r.addAll(a)
                        })
                    }, e.prototype.remove = function(e) {
                        var t, r, n, i, u, a, s = this._options,
                            l = s.tokenize,
                            c = s.processTerm,
                            h = s.extractField,
                            d = s.fields,
                            f = s.idField,
                            v = h(e, f);
                        if (null == v) throw Error('MiniSearch: document does not have ID field "'.concat(f, '"'));
                        var y = this._idToShortId.get(v);
                        if (null == y) throw Error("MiniSearch: cannot remove document with ID ".concat(v, ": it is not in the index"));
                        try {
                            for (var p = o(d), _ = p.next(); !_.done; _ = p.next()) {
                                var m = _.value,
                                    g = h(e, m);
                                if (null != g) {
                                    var F = l(g.toString(), m),
                                        x = this._fieldIds[m],
                                        w = new Set(F).size;
                                    this.removeFieldLength(y, x, this._documentCount, w);
                                    try {
                                        for (var b = (n = void 0, o(F)), A = b.next(); !A.done; A = b.next()) {
                                            var C = A.value,
                                                E = c(C, m);
                                            if (Array.isArray(E)) try {
                                                for (var z = (u = void 0, o(E)), D = z.next(); !D.done; D = z.next()) {
                                                    var S = D.value;
                                                    this.removeTerm(x, y, S)
                                                }
                                            } catch (e) {
                                                u = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    D && !D.done && (a = z.return) && a.call(z)
                                                } finally {
                                                    if (u) throw u.error
                                                }
                                            } else E && this.removeTerm(x, y, E)
                                        }
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            A && !A.done && (i = b.return) && i.call(b)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                _ && !_.done && (r = p.return) && r.call(p)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        this._storedFields.delete(y), this._documentIds.delete(y), this._idToShortId.delete(v), this._fieldLength.delete(y), this._documentCount -= 1
                    }, e.prototype.removeAll = function(e) {
                        var t, r;
                        if (e) try {
                                for (var n = o(e), i = n.next(); !i.done; i = n.next()) {
                                    var u = i.value;
                                    this.remove(u)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = n.return) && r.call(n)
                                } finally {
                                    if (t) throw t.error
                                }
                            } else if (arguments.length > 0) throw Error("Expected documents to be present. Omit the argument to remove all documents.");
                            else this._index = new f, this._documentCount = 0, this._documentIds = new Map, this._idToShortId = new Map, this._fieldLength = new Map, this._avgFieldLength = [], this._storedFields = new Map, this._nextId = 0
                    }, e.prototype.discard = function(e) {
                        var t = this,
                            r = this._idToShortId.get(e);
                        if (null == r) throw Error("MiniSearch: cannot discard document with ID ".concat(e, ": it is not in the index"));
                        this._idToShortId.delete(e), this._documentIds.delete(r), this._storedFields.delete(r), (this._fieldLength.get(r) || []).forEach(function(e, n) {
                            t.removeFieldLength(r, n, t._documentCount, e)
                        }), this._fieldLength.delete(r), this._documentCount -= 1, this._dirtCount += 1, this.maybeAutoVacuum()
                    }, e.prototype.maybeAutoVacuum = function() {
                        if (!1 !== this._options.autoVacuum) {
                            var e = this._options.autoVacuum,
                                t = e.minDirtFactor,
                                r = e.minDirtCount,
                                n = e.batchSize,
                                i = e.batchWait;
                            this.conditionalVacuum({
                                batchSize: n,
                                batchWait: i
                            }, {
                                minDirtCount: r,
                                minDirtFactor: t
                            })
                        }
                    }, e.prototype.discardAll = function(e) {
                        var t, r, n = this._options.autoVacuum;
                        try {
                            this._options.autoVacuum = !1;
                            try {
                                for (var i = o(e), u = i.next(); !u.done; u = i.next()) {
                                    var a = u.value;
                                    this.discard(a)
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    u && !u.done && (r = i.return) && r.call(i)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                        } finally {
                            this._options.autoVacuum = n
                        }
                        this.maybeAutoVacuum()
                    }, e.prototype.replace = function(e) {
                        var t = this._options,
                            r = t.idField,
                            n = (0, t.extractField)(e, r);
                        this.discard(n), this.add(e)
                    }, e.prototype.vacuum = function(e) {
                        return void 0 === e && (e = {}), this.conditionalVacuum(e)
                    }, e.prototype.conditionalVacuum = function(e, t) {
                        var r = this;
                        return this._currentVacuum ? (this._enqueuedVacuumConditions = this._enqueuedVacuumConditions && t, null != this._enqueuedVacuum || (this._enqueuedVacuum = this._currentVacuum.then(function() {
                            var t = r._enqueuedVacuumConditions;
                            return r._enqueuedVacuumConditions = k, r.performVacuuming(e, t)
                        })), this._enqueuedVacuum) : !1 === this.vacuumConditionsMet(t) ? Promise.resolve() : (this._currentVacuum = this.performVacuuming(e), this._currentVacuum)
                    }, e.prototype.performVacuuming = function(e, t) {
                        var r, n, i, a;
                        return r = this, n = void 0, i = void 0, a = function() {
                            var r, n, i, a, s, l, c, h, d, f, v, y, p, _, m, g, F, x, w, b, A, C, E;
                            return function(e, t) {
                                var r, n, i, o, u = {
                                    label: 0,
                                    sent: function() {
                                        if (1 & i[0]) throw i[1];
                                        return i[1]
                                    },
                                    trys: [],
                                    ops: []
                                };
                                return o = {
                                    next: a(0),
                                    throw: a(1),
                                    return: a(2)
                                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                                    return this
                                }), o;

                                function a(a) {
                                    return function(s) {
                                        var l = [a, s];
                                        if (r) throw TypeError("Generator is already executing.");
                                        for (; o && (o = 0, l[0] && (u = 0)), u;) try {
                                            if (r = 1, n && (i = 2 & l[0] ? n.return : l[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, l[1])).done) return i;
                                            switch (n = 0, i && (l = [2 & l[0], i.value]), l[0]) {
                                                case 0:
                                                case 1:
                                                    i = l;
                                                    break;
                                                case 4:
                                                    return u.label++, {
                                                        value: l[1],
                                                        done: !1
                                                    };
                                                case 5:
                                                    u.label++, n = l[1], l = [0];
                                                    continue;
                                                case 7:
                                                    l = u.ops.pop(), u.trys.pop();
                                                    continue;
                                                default:
                                                    if (!(i = (i = u.trys).length > 0 && i[i.length - 1]) && (6 === l[0] || 2 === l[0])) {
                                                        u = 0;
                                                        continue
                                                    }
                                                    if (3 === l[0] && (!i || l[1] > i[0] && l[1] < i[3])) {
                                                        u.label = l[1];
                                                        break
                                                    }
                                                    if (6 === l[0] && u.label < i[1]) {
                                                        u.label = i[1], i = l;
                                                        break
                                                    }
                                                    if (i && u.label < i[2]) {
                                                        u.label = i[2], u.ops.push(l);
                                                        break
                                                    }
                                                    i[2] && u.ops.pop(), u.trys.pop();
                                                    continue
                                            }
                                            l = t.call(e, u)
                                        } catch (e) {
                                            l = [6, e], n = 0
                                        } finally {
                                            r = i = 0
                                        }
                                        if (5 & l[0]) throw l[1];
                                        return {
                                            value: l[0] ? l[1] : void 0,
                                            done: !0
                                        }
                                    }
                                }
                            }(this, function(z) {
                                switch (z.label) {
                                    case 0:
                                        if (r = this._dirtCount, !this.vacuumConditionsMet(t)) return [3, 10];
                                        n = e.batchSize || S.batchSize, i = e.batchWait || S.batchWait, a = 1, z.label = 1;
                                    case 1:
                                        z.trys.push([1, 7, 8, 9]), l = (s = o(this._index)).next(), z.label = 2;
                                    case 2:
                                        if (l.done) return [3, 6];
                                        h = (c = u(l.value, 2))[0], d = c[1];
                                        try {
                                            for (b = void 0, v = (f = o(d)).next(); !v.done; v = f.next()) {
                                                p = (y = u(v.value, 2))[0], _ = y[1];
                                                try {
                                                    for (C = void 0, g = (m = o(_)).next(); !g.done; g = m.next()) F = u(g.value, 1)[0], this._documentIds.has(F) || (_.size <= 1 ? d.delete(p) : _.delete(F))
                                                } catch (e) {
                                                    C = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        g && !g.done && (E = m.return) && E.call(m)
                                                    } finally {
                                                        if (C) throw C.error
                                                    }
                                                }
                                            }
                                        } catch (e) {
                                            b = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                v && !v.done && (A = f.return) && A.call(f)
                                            } finally {
                                                if (b) throw b.error
                                            }
                                        }
                                        if (0 === this._index.get(h).size && this._index.delete(h), a % n != 0) return [3, 4];
                                        return [4, new Promise(function(e) {
                                            return setTimeout(e, i)
                                        })];
                                    case 3:
                                        z.sent(), z.label = 4;
                                    case 4:
                                        a += 1, z.label = 5;
                                    case 5:
                                        return l = s.next(), [3, 2];
                                    case 6:
                                        return [3, 9];
                                    case 7:
                                        return x = {
                                            error: z.sent()
                                        }, [3, 9];
                                    case 8:
                                        try {
                                            l && !l.done && (w = s.return) && w.call(s)
                                        } finally {
                                            if (x) throw x.error
                                        }
                                        return [7];
                                    case 9:
                                        this._dirtCount -= r, z.label = 10;
                                    case 10:
                                        return [4, null];
                                    case 11:
                                        return z.sent(), this._currentVacuum = this._enqueuedVacuum, this._enqueuedVacuum = null, [2]
                                }
                            })
                        }, new(i || (i = Promise))(function(e, t) {
                            function o(e) {
                                try {
                                    s(a.next(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function u(e) {
                                try {
                                    s(a.throw(e))
                                } catch (e) {
                                    t(e)
                                }
                            }

                            function s(t) {
                                var r;
                                t.done ? e(t.value) : ((r = t.value) instanceof i ? r : new i(function(e) {
                                    e(r)
                                })).then(o, u)
                            }
                            s((a = a.apply(r, n || [])).next())
                        })
                    }, e.prototype.vacuumConditionsMet = function(e) {
                        if (null == e) return !0;
                        var t = e.minDirtCount,
                            r = e.minDirtFactor;
                        return t = t || I.minDirtCount, r = r || I.minDirtFactor, this.dirtCount >= t && this.dirtFactor >= r
                    }, Object.defineProperty(e.prototype, "isVacuuming", {
                        get: function() {
                            return null != this._currentVacuum
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "dirtCount", {
                        get: function() {
                            return this._dirtCount
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "dirtFactor", {
                        get: function() {
                            return this._dirtCount / (1 + this._documentCount + this._dirtCount)
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.prototype.has = function(e) {
                        return this._idToShortId.has(e)
                    }, e.prototype.getStoredFields = function(e) {
                        var t = this._idToShortId.get(e);
                        if (null != t) return this._storedFields.get(t)
                    }, e.prototype.search = function(t, r) {
                        void 0 === r && (r = {});
                        var n, i, a = this.executeQuery(t, r),
                            s = [];
                        try {
                            for (var l = o(a), c = l.next(); !c.done; c = l.next()) {
                                var h = u(c.value, 2),
                                    d = h[0],
                                    f = h[1],
                                    v = f.score,
                                    y = f.terms,
                                    p = f.match,
                                    _ = y.length || 1,
                                    m = {
                                        id: this._documentIds.get(d),
                                        score: v * _,
                                        terms: Object.keys(p),
                                        queryTerms: y,
                                        match: p
                                    };
                                Object.assign(m, this._storedFields.get(d)), (null == r.filter || r.filter(m)) && s.push(m)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                c && !c.done && (i = l.return) && i.call(l)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return t === e.wildcard && null == r.boostDocument && null == this._options.searchOptions.boostDocument || s.sort(V), s
                    }, e.prototype.autoSuggest = function(e, t) {
                        void 0 === t && (t = {}), t = i(i({}, this._options.autoSuggestOptions), t);
                        var r, n, a, s, l = new Map;
                        try {
                            for (var c = o(this.search(e, t)), h = c.next(); !h.done; h = c.next()) {
                                var d = h.value,
                                    f = d.score,
                                    v = d.terms,
                                    y = v.join(" "),
                                    p = l.get(y);
                                null != p ? (p.score += f, p.count += 1) : l.set(y, {
                                    score: f,
                                    terms: v,
                                    count: 1
                                })
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                h && !h.done && (n = c.return) && n.call(c)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        var _ = [];
                        try {
                            for (var m = o(l), g = m.next(); !g.done; g = m.next()) {
                                var F = u(g.value, 2),
                                    p = F[0],
                                    x = F[1],
                                    f = x.score,
                                    v = x.terms,
                                    w = x.count;
                                _.push({
                                    suggestion: p,
                                    terms: v,
                                    score: f / w
                                })
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                g && !g.done && (s = m.return) && s.call(m)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        return _.sort(V), _
                    }, Object.defineProperty(e.prototype, "documentCount", {
                        get: function() {
                            return this._documentCount
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "termCount", {
                        get: function() {
                            return this._index.size
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e.loadJSON = function(e, t) {
                        if (null == t) throw Error("MiniSearch: loadJSON should be given the same options used when serializing the index");
                        return this.loadJS(JSON.parse(e), t)
                    }, e.getDefault = function(e) {
                        if (E.hasOwnProperty(e)) return w(E, e);
                        throw Error('MiniSearch: unknown option "'.concat(e, '"'))
                    }, e.loadJS = function(t, r) {
                        var n, i, a, s, l, c, h = t.index,
                            d = t.documentCount,
                            v = t.nextId,
                            y = t.documentIds,
                            p = t.fieldIds,
                            _ = t.fieldLength,
                            m = t.averageFieldLength,
                            g = t.storedFields,
                            F = t.dirtCount,
                            x = t.serializationVersion;
                        if (1 !== x && 2 !== x) throw Error("MiniSearch: cannot deserialize an index created with an incompatible version");
                        var w = new e(r);
                        w._documentCount = d, w._nextId = v, w._documentIds = L(y), w._idToShortId = new Map, w._fieldIds = p, w._fieldLength = L(_), w._avgFieldLength = m, w._storedFields = L(g), w._dirtCount = F || 0, w._index = new f;
                        try {
                            for (var b = o(w._documentIds), A = b.next(); !A.done; A = b.next()) {
                                var C = u(A.value, 2),
                                    E = C[0],
                                    z = C[1];
                                w._idToShortId.set(z, E)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                A && !A.done && (i = b.return) && i.call(b)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        try {
                            for (var D = o(h), S = D.next(); !S.done; S = D.next()) {
                                var k = u(S.value, 2),
                                    I = k[0],
                                    M = k[1],
                                    O = new Map;
                                try {
                                    for (var V = (l = void 0, o(Object.keys(M))), T = V.next(); !T.done; T = V.next()) {
                                        var j = T.value,
                                            B = M[j];
                                        1 === x && (B = B.ds), O.set(parseInt(j, 10), L(B))
                                    }
                                } catch (e) {
                                    l = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        T && !T.done && (c = V.return) && c.call(V)
                                    } finally {
                                        if (l) throw l.error
                                    }
                                }
                                w._index.set(I, O)
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                S && !S.done && (s = D.return) && s.call(D)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        return w
                    }, e.prototype.executeQuery = function(t, r) {
                        var n = this;
                        if (void 0 === r && (r = {}), t === e.wildcard) return this.executeWildcardQuery(r);
                        if ("string" != typeof t) {
                            var o = i(i(i({}, r), t), {
                                    queries: void 0
                                }),
                                u = t.queries.map(function(e) {
                                    return n.executeQuery(e, o)
                                });
                            return this.combineResults(u, o.combineWith)
                        }
                        var a = this._options,
                            s = a.tokenize,
                            l = a.processTerm,
                            c = a.searchOptions,
                            h = i(i({
                                tokenize: s,
                                processTerm: l
                            }, c), r),
                            d = h.tokenize,
                            f = h.processTerm,
                            v = d(t).flatMap(function(e) {
                                return f(e)
                            }).filter(function(e) {
                                return !!e
                            }).map(C(h)).map(function(e) {
                                return n.executeQuerySpec(e, h)
                            });
                        return this.combineResults(v, h.combineWith)
                    }, e.prototype.executeQuerySpec = function(e, t) {
                        var r, n, a, s, l, c, h = i(i({}, this._options.searchOptions), t),
                            d = (h.fields || this._options.fields).reduce(function(e, t) {
                                var r;
                                return i(i({}, e), ((r = {})[t] = w(h.boost, t) || 1, r))
                            }, {}),
                            f = h.boostDocument,
                            v = h.weights,
                            y = h.maxFuzzy,
                            p = h.bm25,
                            _ = i(i({}, z.weights), v),
                            m = _.fuzzy,
                            g = _.prefix,
                            F = this._index.get(e.term),
                            x = this.termResults(e.term, e.term, 1, F, d, f, p);
                        if (e.prefix && (l = this._index.atPrefix(e.term)), e.fuzzy) {
                            var b = !0 === e.fuzzy ? .2 : e.fuzzy,
                                A = b < 1 ? Math.min(y, Math.round(e.term.length * b)) : b;
                            A && (c = this._index.fuzzyGet(e.term, A))
                        }
                        if (l) try {
                            for (var C = o(l), E = C.next(); !E.done; E = C.next()) {
                                var D = u(E.value, 2),
                                    S = D[0],
                                    k = D[1],
                                    I = S.length - e.term.length;
                                if (I) {
                                    null == c || c.delete(S);
                                    var M = g * S.length / (S.length + .3 * I);
                                    this.termResults(e.term, S, M, k, d, f, p, x)
                                }
                            }
                        } catch (e) {
                            r = {
                                error: e
                            }
                        } finally {
                            try {
                                E && !E.done && (n = C.return) && n.call(C)
                            } finally {
                                if (r) throw r.error
                            }
                        }
                        if (c) try {
                            for (var O = o(c.keys()), V = O.next(); !V.done; V = O.next()) {
                                var S = V.value,
                                    T = u(c.get(S), 2),
                                    L = T[0],
                                    I = T[1];
                                if (I) {
                                    var M = m * S.length / (S.length + I);
                                    this.termResults(e.term, S, M, L, d, f, p, x)
                                }
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                V && !V.done && (s = O.return) && s.call(O)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        return x
                    }, e.prototype.executeWildcardQuery = function(e) {
                        var t, r, n = new Map,
                            a = i(i({}, this._options.searchOptions), e);
                        try {
                            for (var s = o(this._documentIds), l = s.next(); !l.done; l = s.next()) {
                                var c = u(l.value, 2),
                                    h = c[0],
                                    d = c[1],
                                    f = a.boostDocument ? a.boostDocument(d, "", this._storedFields.get(h)) : 1;
                                n.set(h, {
                                    score: f,
                                    terms: [],
                                    match: {}
                                })
                            }
                        } catch (e) {
                            t = {
                                error: e
                            }
                        } finally {
                            try {
                                l && !l.done && (r = s.return) && r.call(s)
                            } finally {
                                if (t) throw t.error
                            }
                        }
                        return n
                    }, e.prototype.combineResults = function(e, t) {
                        if (void 0 === t && (t = "or"), 0 === e.length) return new Map;
                        var r = t.toLowerCase();
                        return e.reduce(b[r]) || new Map
                    }, e.prototype.toJSON = function() {
                        var e, t, r, n, i = [];
                        try {
                            for (var a = o(this._index), s = a.next(); !s.done; s = a.next()) {
                                var l = u(s.value, 2),
                                    c = l[0],
                                    h = l[1],
                                    d = {};
                                try {
                                    for (var f = (r = void 0, o(h)), v = f.next(); !v.done; v = f.next()) {
                                        var y = u(v.value, 2),
                                            p = y[0],
                                            _ = y[1];
                                        d[p] = Object.fromEntries(_)
                                    }
                                } catch (e) {
                                    r = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        v && !v.done && (n = f.return) && n.call(f)
                                    } finally {
                                        if (r) throw r.error
                                    }
                                }
                                i.push([c, d])
                            }
                        } catch (t) {
                            e = {
                                error: t
                            }
                        } finally {
                            try {
                                s && !s.done && (t = a.return) && t.call(a)
                            } finally {
                                if (e) throw e.error
                            }
                        }
                        return {
                            documentCount: this._documentCount,
                            nextId: this._nextId,
                            documentIds: Object.fromEntries(this._documentIds),
                            fieldIds: this._fieldIds,
                            fieldLength: Object.fromEntries(this._fieldLength),
                            averageFieldLength: this._avgFieldLength,
                            storedFields: Object.fromEntries(this._storedFields),
                            dirtCount: this._dirtCount,
                            index: i,
                            serializationVersion: 2
                        }
                    }, e.prototype.termResults = function(e, t, r, n, i, u, a, s) {
                        var l, c, h, d, f;
                        if (void 0 === s && (s = new Map), null == n) return s;
                        try {
                            for (var v = o(Object.keys(i)), y = v.next(); !y.done; y = v.next()) {
                                var p = y.value,
                                    _ = i[p],
                                    m = this._fieldIds[p],
                                    g = n.get(m);
                                if (null != g) {
                                    var F = g.size,
                                        x = this._avgFieldLength[m];
                                    try {
                                        for (var b = (h = void 0, o(g.keys())), C = b.next(); !C.done; C = b.next()) {
                                            var E = C.value;
                                            if (!this._documentIds.has(E)) {
                                                this.removeTerm(m, E, t), F -= 1;
                                                continue
                                            }
                                            var z = u ? u(this._documentIds.get(E), t, this._storedFields.get(E)) : 1;
                                            if (z) {
                                                var D = g.get(E),
                                                    S = this._fieldLength.get(E)[m],
                                                    k = A(D, F, this._documentCount, S, x, a),
                                                    I = r * _ * z * k,
                                                    O = s.get(E);
                                                if (O) {
                                                    O.score += I, M(O.terms, e);
                                                    var V = w(O.match, t);
                                                    V ? V.push(p) : O.match[t] = [p]
                                                } else s.set(E, {
                                                    score: I,
                                                    terms: [e],
                                                    match: ((f = {})[t] = [p], f)
                                                })
                                            }
                                        }
                                    } catch (e) {
                                        h = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            C && !C.done && (d = b.return) && d.call(b)
                                        } finally {
                                            if (h) throw h.error
                                        }
                                    }
                                }
                            }
                        } catch (e) {
                            l = {
                                error: e
                            }
                        } finally {
                            try {
                                y && !y.done && (c = v.return) && c.call(v)
                            } finally {
                                if (l) throw l.error
                            }
                        }
                        return s
                    }, e.prototype.addTerm = function(e, t, r) {
                        var n = this._index.fetch(r, T),
                            i = n.get(e);
                        if (null == i)(i = new Map).set(t, 1), n.set(e, i);
                        else {
                            var o = i.get(t);
                            i.set(t, (o || 0) + 1)
                        }
                    }, e.prototype.removeTerm = function(e, t, r) {
                        if (!this._index.has(r)) return void this.warnDocumentChanged(t, e, r);
                        var n = this._index.fetch(r, T),
                            i = n.get(e);
                        null == i || null == i.get(t) ? this.warnDocumentChanged(t, e, r) : 1 >= i.get(t) ? i.size <= 1 ? n.delete(e) : i.delete(t) : i.set(t, i.get(t) - 1), 0 === this._index.get(r).size && this._index.delete(r)
                    }, e.prototype.warnDocumentChanged = function(e, t, r) {
                        var n, i;
                        try {
                            for (var u = o(Object.keys(this._fieldIds)), a = u.next(); !a.done; a = u.next()) {
                                var s = a.value;
                                if (this._fieldIds[s] === t) return void this._options.logger("warn", "MiniSearch: document with ID ".concat(this._documentIds.get(e), ' has changed before removal: term "').concat(r, '" was not present in field "').concat(s, '". Removing a document after it has changed can corrupt the index!'), "version_conflict")
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                a && !a.done && (i = u.return) && i.call(u)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    }, e.prototype.addDocumentId = function(e) {
                        var t = this._nextId;
                        return this._idToShortId.set(e, t), this._documentIds.set(t, e), this._documentCount += 1, this._nextId += 1, t
                    }, e.prototype.addFields = function(e) {
                        for (var t = 0; t < e.length; t++) this._fieldIds[e[t]] = t
                    }, e.prototype.addFieldLength = function(e, t, r, n) {
                        var i = this._fieldLength.get(e);
                        null == i && this._fieldLength.set(e, i = []), i[t] = n;
                        var o = this._avgFieldLength[t] || 0;
                        this._avgFieldLength[t] = (o * r + n) / (r + 1)
                    }, e.prototype.removeFieldLength = function(e, t, r, n) {
                        if (1 === r) {
                            this._avgFieldLength[t] = 0;
                            return
                        }
                        var i = this._avgFieldLength[t] * r - n;
                        this._avgFieldLength[t] = i / (r - 1)
                    }, e.prototype.saveStoredFields = function(e, t) {
                        var r, n, i = this._options,
                            u = i.storeFields,
                            a = i.extractField;
                        if (null != u && 0 !== u.length) {
                            var s = this._storedFields.get(e);
                            null == s && this._storedFields.set(e, s = {});
                            try {
                                for (var l = o(u), c = l.next(); !c.done; c = l.next()) {
                                    var h = c.value,
                                        d = a(t, h);
                                    void 0 !== d && (s[h] = d)
                                }
                            } catch (e) {
                                r = {
                                    error: e
                                }
                            } finally {
                                try {
                                    c && !c.done && (n = l.return) && n.call(l)
                                } finally {
                                    if (r) throw r.error
                                }
                            }
                        }
                    }, e.wildcard = Symbol("*"), e
                }(),
                w = function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t) ? e[t] : void 0
                },
                b = ((n = {}).or = function(e, t) {
                    var r, n;
                    try {
                        for (var i = o(t.keys()), u = i.next(); !u.done; u = i.next()) {
                            var a = u.value,
                                s = e.get(a);
                            if (null == s) e.set(a, t.get(a));
                            else {
                                var l = t.get(a),
                                    c = l.score,
                                    h = l.terms,
                                    d = l.match;
                                s.score = s.score + c, s.match = Object.assign(s.match, d), O(s.terms, h)
                            }
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return e
                }, n.and = function(e, t) {
                    var r, n, i = new Map;
                    try {
                        for (var u = o(t.keys()), a = u.next(); !a.done; a = u.next()) {
                            var s = a.value,
                                l = e.get(s);
                            if (null != l) {
                                var c = t.get(s),
                                    h = c.score,
                                    d = c.terms,
                                    f = c.match;
                                O(l.terms, d), i.set(s, {
                                    score: l.score + h,
                                    terms: l.terms,
                                    match: Object.assign(l.match, f)
                                })
                            }
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            a && !a.done && (n = u.return) && n.call(u)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return i
                }, n.and_not = function(e, t) {
                    var r, n;
                    try {
                        for (var i = o(t.keys()), u = i.next(); !u.done; u = i.next()) {
                            var a = u.value;
                            e.delete(a)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                    return e
                }, n),
                A = function(e, t, r, n, i, o) {
                    var u = o.k,
                        a = o.b;
                    return Math.log(1 + (r - t + .5) / (t + .5)) * (o.d + e * (u + 1) / (e + u * (1 - a + a * n / i)))
                },
                C = function(e) {
                    return function(t, r, n) {
                        var i = "function" == typeof e.fuzzy ? e.fuzzy(t, r, n) : e.fuzzy || !1,
                            o = "function" == typeof e.prefix ? e.prefix(t, r, n) : !0 === e.prefix;
                        return {
                            term: t,
                            fuzzy: i,
                            prefix: o
                        }
                    }
                },
                E = {
                    idField: "id",
                    extractField: function(e, t) {
                        return e[t]
                    },
                    tokenize: function(e) {
                        return e.split(j)
                    },
                    processTerm: function(e) {
                        return e.toLowerCase()
                    },
                    fields: void 0,
                    searchOptions: void 0,
                    storeFields: [],
                    logger: function(e, t) {
                        "function" == typeof(null == console ? void 0 : console[e]) && console[e](t)
                    },
                    autoVacuum: !0
                },
                z = {
                    combineWith: "or",
                    prefix: !1,
                    fuzzy: !1,
                    maxFuzzy: 6,
                    boost: {},
                    weights: {
                        fuzzy: .45,
                        prefix: .375
                    },
                    bm25: {
                        k: 1.2,
                        b: .7,
                        d: .5
                    }
                },
                D = {
                    combineWith: "and",
                    prefix: function(e, t, r) {
                        return t === r.length - 1
                    }
                },
                S = {
                    batchSize: 1e3,
                    batchWait: 10
                },
                k = {
                    minDirtFactor: .1,
                    minDirtCount: 20
                },
                I = i(i({}, S), k),
                M = function(e, t) {
                    e.includes(t) || e.push(t)
                },
                O = function(e, t) {
                    var r, n;
                    try {
                        for (var i = o(t), u = i.next(); !u.done; u = i.next()) {
                            var a = u.value;
                            e.includes(a) || e.push(a)
                        }
                    } catch (e) {
                        r = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (n = i.return) && n.call(i)
                        } finally {
                            if (r) throw r.error
                        }
                    }
                },
                V = function(e, t) {
                    var r = e.score;
                    return t.score - r
                },
                T = function() {
                    return new Map
                },
                L = function(e) {
                    var t, r, n = new Map;
                    try {
                        for (var i = o(Object.keys(e)), u = i.next(); !u.done; u = i.next()) {
                            var a = u.value;
                            n.set(parseInt(a, 10), e[a])
                        }
                    } catch (e) {
                        t = {
                            error: e
                        }
                    } finally {
                        try {
                            u && !u.done && (r = i.return) && r.call(i)
                        } finally {
                            if (t) throw t.error
                        }
                    }
                    return n
                },
                j = /[\n\r -#%-*,-/:;?@[-\]_{}\u00A0\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u1680\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2000-\u200A\u2010-\u2029\u202F-\u2043\u2045-\u2051\u2053-\u205F\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u3000-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]+/u
        }
    }
]);