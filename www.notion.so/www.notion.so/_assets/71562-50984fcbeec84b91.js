(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [71562], {
        371562: function(t, e, n) {
            ! function(t, e) {
                "use strict";
                e = e && e.hasOwnProperty("default") ? e.default : e;
                var n, r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    },
                    i = function(t, e) {
                        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                    },
                    o = function() {
                        function t(t, e) {
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
                            }
                        }
                        return function(e, n, r) {
                            return n && t(e.prototype, n), r && t(e, r), e
                        }
                    }(),
                    a = function t(e, n, r) {
                        null === e && (e = Function.prototype);
                        var i = Object.getOwnPropertyDescriptor(e, n);
                        if (void 0 === i) {
                            var o = Object.getPrototypeOf(e);
                            if (null === o) return;
                            return t(o, n, r)
                        }
                        if ("value" in i) return i.value;
                        var a = i.get;
                        if (void 0 !== a) return a.call(r)
                    },
                    s = function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    },
                    f = function(t, e) {
                        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return e && ("object" == typeof e || "function" == typeof e) ? e : t
                    },
                    l = function(t, e) {
                        if (Array.isArray(t)) return t;
                        if (Symbol.iterator in Object(t)) return function(t, e) {
                            var n = [],
                                r = !0,
                                i = !1,
                                o = void 0;
                            try {
                                for (var a, s = t[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                            } catch (t) {
                                i = !0, o = t
                            } finally {
                                try {
                                    !r && s.return && s.return()
                                } finally {
                                    if (i) throw o
                                }
                            }
                            return n
                        }(t, e);
                        throw TypeError("Invalid attempt to destructure non-iterable instance")
                    },
                    h = function(t) {
                        if (!Array.isArray(t)) return Array.from(t);
                        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
                        return n
                    },
                    u = function() {
                        function t(e) {
                            i(this, t), this.selfOptions = e || {}, this.pipes = {}
                        }
                        return o(t, [{
                            key: "options",
                            value: function(t) {
                                return t && (this.selfOptions = t), this.selfOptions
                            }
                        }, {
                            key: "pipe",
                            value: function(t, e) {
                                var n = e;
                                if ("string" == typeof t)
                                    if (void 0 === n) return this.pipes[t];
                                    else this.pipes[t] = n;
                                if (t && t.name) {
                                    if ((n = t).processor === this) return n;
                                    this.pipes[n.name] = n
                                }
                                return n.processor = this, n
                            }
                        }, {
                            key: "process",
                            value: function(t, e) {
                                var n = t;
                                n.options = this.options();
                                for (var r = e || t.pipe || "default", i = void 0, o = void 0; r;) void 0 !== n.nextAfterChildren && (n.next = n.nextAfterChildren, n.nextAfterChildren = null), "string" == typeof r && (r = this.pipe(r)), r.process(n), o = n, i = r, r = null, n && n.next && (n = n.next, r = o.nextPipe || n.pipe || i);
                                return n.hasResult ? n.result : void 0
                            }
                        }]), t
                    }(),
                    c = function() {
                        function t(e) {
                            i(this, t), this.name = e, this.filters = []
                        }
                        return o(t, [{
                            key: "process",
                            value: function(t) {
                                if (!this.processor) throw Error("add this pipe to a processor before using it");
                                for (var e = this.debug, n = this.filters.length, i = 0; i < n; i++) {
                                    var o = this.filters[i];
                                    if (e && this.log("filter: " + o.filterName), o(t), (void 0 === t ? "undefined" : r(t)) === "object" && t.exiting) {
                                        t.exiting = !1;
                                        break
                                    }
                                }!t.next && this.resultCheck && this.resultCheck(t)
                            }
                        }, {
                            key: "log",
                            value: function(t) {
                                console.log("[jsondiffpatch] " + this.name + " pipe, " + t)
                            }
                        }, {
                            key: "append",
                            value: function() {
                                var t;
                                return (t = this.filters).push.apply(t, arguments), this
                            }
                        }, {
                            key: "prepend",
                            value: function() {
                                var t;
                                return (t = this.filters).unshift.apply(t, arguments), this
                            }
                        }, {
                            key: "indexOf",
                            value: function(t) {
                                if (!t) throw Error("a filter name is required");
                                for (var e = 0; e < this.filters.length; e++)
                                    if (this.filters[e].filterName === t) return e;
                                throw Error("filter not found: " + t)
                            }
                        }, {
                            key: "list",
                            value: function() {
                                return this.filters.map(function(t) {
                                    return t.filterName
                                })
                            }
                        }, {
                            key: "after",
                            value: function(t) {
                                var e = this.indexOf(t),
                                    n = Array.prototype.slice.call(arguments, 1);
                                if (!n.length) throw Error("a filter is required");
                                return n.unshift(e + 1, 0), Array.prototype.splice.apply(this.filters, n), this
                            }
                        }, {
                            key: "before",
                            value: function(t) {
                                var e = this.indexOf(t),
                                    n = Array.prototype.slice.call(arguments, 1);
                                if (!n.length) throw Error("a filter is required");
                                return n.unshift(e, 0), Array.prototype.splice.apply(this.filters, n), this
                            }
                        }, {
                            key: "replace",
                            value: function(t) {
                                var e = this.indexOf(t),
                                    n = Array.prototype.slice.call(arguments, 1);
                                if (!n.length) throw Error("a filter is required");
                                return n.unshift(e, 1), Array.prototype.splice.apply(this.filters, n), this
                            }
                        }, {
                            key: "remove",
                            value: function(t) {
                                var e = this.indexOf(t);
                                return this.filters.splice(e, 1), this
                            }
                        }, {
                            key: "clear",
                            value: function() {
                                return this.filters.length = 0, this
                            }
                        }, {
                            key: "shouldHaveResult",
                            value: function(t) {
                                if (!1 === t) {
                                    this.resultCheck = null;
                                    return
                                }
                                if (!this.resultCheck) {
                                    var e = this;
                                    return this.resultCheck = function(t) {
                                        if (!t.hasResult) {
                                            console.log(t);
                                            var n = Error(e.name + " failed");
                                            throw n.noResult = !0, n
                                        }
                                    }, this
                                }
                            }
                        }]), t
                    }(),
                    d = function() {
                        function t() {
                            i(this, t)
                        }
                        return o(t, [{
                            key: "setResult",
                            value: function(t) {
                                return this.result = t, this.hasResult = !0, this
                            }
                        }, {
                            key: "exit",
                            value: function() {
                                return this.exiting = !0, this
                            }
                        }, {
                            key: "switchTo",
                            value: function(t, e) {
                                return "string" == typeof t || t instanceof c ? this.nextPipe = t : (this.next = t, e && (this.nextPipe = e)), this
                            }
                        }, {
                            key: "push",
                            value: function(t, e) {
                                return t.parent = this, void 0 !== e && (t.childName = e), t.root = this.root || this, t.options = t.options || this.options, this.children ? (this.children[this.children.length - 1].next = t, this.children.push(t)) : (this.children = [t], this.nextAfterChildren = this.next || null, this.next = t), t.next = this, this
                            }
                        }]), t
                    }(),
                    p = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                        return t instanceof Array
                    };

                function v(t) {
                    if ((void 0 === t ? "undefined" : r(t)) !== "object") return t;
                    if (null === t) return null;
                    if (p(t)) return t.map(v);
                    if (t instanceof Date) return new Date(t.getTime());
                    if (t instanceof RegExp) {
                        var e;
                        return new RegExp((e = /^\/(.*)\/([gimyu]*)$/.exec(t.toString()))[1], e[2])
                    }
                    var n = {};
                    for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = v(t[i]));
                    return n
                }
                var g = function(t) {
                        function e(t, n) {
                            i(this, e);
                            var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return r.left = t, r.right = n, r.pipe = "diff", r
                        }
                        return s(e, t), o(e, [{
                            key: "setResult",
                            value: function(t) {
                                if (this.options.cloneDiffValues && (void 0 === t ? "undefined" : r(t)) === "object") {
                                    var e = "function" == typeof this.options.cloneDiffValues ? this.options.cloneDiffValues : v;
                                    "object" === r(t[0]) && (t[0] = e(t[0])), "object" === r(t[1]) && (t[1] = e(t[1]))
                                }
                                return d.prototype.setResult.apply(this, arguments)
                            }
                        }]), e
                    }(d),
                    y = function(t) {
                        function e(t, n) {
                            i(this, e);
                            var r = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return r.left = t, r.delta = n, r.pipe = "patch", r
                        }
                        return s(e, t), e
                    }(d),
                    m = function(t) {
                        function e(t) {
                            i(this, e);
                            var n = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return n.delta = t, n.pipe = "reverse", n
                        }
                        return s(e, t), e
                    }(d),
                    _ = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                        return t instanceof Array
                    },
                    b = function(t) {
                        if (t.left === t.right) return void t.setResult(void 0).exit();
                        if (void 0 === t.left) {
                            if ("function" == typeof t.right) throw Error("functions are not supported");
                            t.setResult([t.right]).exit();
                            return
                        }
                        if (void 0 === t.right) return void t.setResult([t.left, 0, 0]).exit();
                        if ("function" == typeof t.left || "function" == typeof t.right) throw Error("functions are not supported");
                        (t.leftType = null === t.left ? "null" : r(t.left), t.rightType = null === t.right ? "null" : r(t.right), t.leftType !== t.rightType || "boolean" === t.leftType || "number" === t.leftType || ("object" === t.leftType && (t.leftIsArray = _(t.left)), "object" === t.rightType && (t.rightIsArray = _(t.right)), t.leftIsArray !== t.rightIsArray)) ? t.setResult([t.left, t.right]).exit(): t.left instanceof RegExp && (t.right instanceof RegExp ? t.setResult([t.left.toString(), t.right.toString()]).exit() : t.setResult([t.left, t.right]).exit())
                    };
                b.filterName = "trivial";
                var x = function(t) {
                    if (void 0 === t.delta) return void t.setResult(t.left).exit();
                    if (t.nested = !_(t.delta), !t.nested) {
                        if (1 === t.delta.length) return void t.setResult(t.delta[0]).exit();
                        if (2 === t.delta.length) {
                            if (t.left instanceof RegExp) {
                                var e = /^\/(.*)\/([gimyu]+)$/.exec(t.delta[1]);
                                if (e) return void t.setResult(new RegExp(e[1], e[2])).exit()
                            }
                            t.setResult(t.delta[1]).exit();
                            return
                        }
                        3 === t.delta.length && 0 === t.delta[2] && t.setResult(void 0).exit()
                    }
                };
                x.filterName = "trivial";
                var k = function(t) {
                    if (void 0 === t.delta) return void t.setResult(t.delta).exit();
                    if (t.nested = !_(t.delta), !t.nested) {
                        if (1 === t.delta.length) return void t.setResult([t.delta[0], 0, 0]).exit();
                        if (2 === t.delta.length) return void t.setResult([t.delta[1], t.delta[0]]).exit();
                        3 === t.delta.length && 0 === t.delta[2] && t.setResult([t.delta[0]]).exit()
                    }
                };

                function w(t) {
                    if (t && t.children) {
                        for (var e = t.children.length, n = void 0, r = t.result, i = 0; i < e; i++) void 0 !== (n = t.children[i]).result && ((r = r || {})[n.childName] = n.result);
                        r && t.leftIsArray && (r._t = "a"), t.setResult(r).exit()
                    }
                }

                function j(t) {
                    if (!t.leftIsArray && "object" === t.leftType) {
                        var e = void 0,
                            n = void 0,
                            r = t.options.propertyFilter;
                        for (e in t.left) Object.prototype.hasOwnProperty.call(t.left, e) && (!r || r(e, t)) && (n = new g(t.left[e], t.right[e]), t.push(n, e));
                        for (e in t.right) Object.prototype.hasOwnProperty.call(t.right, e) && (!r || r(e, t)) && void 0 === t.left[e] && (n = new g(void 0, t.right[e]), t.push(n, e));
                        if (!t.children || 0 === t.children.length) return void t.setResult(void 0).exit();
                        t.exit()
                    }
                }
                k.filterName = "trivial", w.filterName = "collectChildren", j.filterName = "objects";
                var A = function(t) {
                    if (t.nested && !t.delta._t) {
                        var e = void 0,
                            n = void 0;
                        for (e in t.delta) n = new y(t.left[e], t.delta[e]), t.push(n, e);
                        t.exit()
                    }
                };
                A.filterName = "objects";
                var O = function(t) {
                    if (t && t.children && !t.delta._t) {
                        for (var e = t.children.length, n = void 0, r = 0; r < e; r++) n = t.children[r], Object.prototype.hasOwnProperty.call(t.left, n.childName) && void 0 === n.result ? delete t.left[n.childName] : t.left[n.childName] !== n.result && (t.left[n.childName] = n.result);
                        t.setResult(t.left).exit()
                    }
                };
                O.filterName = "collectChildren";
                var M = function(t) {
                    if (t.nested && !t.delta._t) {
                        var e = void 0,
                            n = void 0;
                        for (e in t.delta) n = new m(t.delta[e]), t.push(n, e);
                        t.exit()
                    }
                };

                function C(t) {
                    if (t && t.children && !t.delta._t) {
                        for (var e = t.children.length, n = void 0, r = {}, i = 0; i < e; i++) r[(n = t.children[i]).childName] !== n.result && (r[n.childName] = n.result);
                        t.setResult(r).exit()
                    }
                }
                M.filterName = "objects", C.filterName = "collectChildren";
                var R = function(t, e, n, r) {
                        return t[n] === e[r]
                    },
                    E = function(t, e, n, r) {
                        var i = t.length,
                            o = e.length,
                            a = void 0,
                            s = void 0,
                            f = [i + 1];
                        for (a = 0; a < i + 1; a++)
                            for (s = 0, f[a] = [o + 1]; s < o + 1; s++) f[a][s] = 0;
                        for (a = 1, f.match = n; a < i + 1; a++)
                            for (s = 1; s < o + 1; s++) n(t, e, a - 1, s - 1, r) ? f[a][s] = f[a - 1][s - 1] + 1 : f[a][s] = Math.max(f[a - 1][s], f[a][s - 1]);
                        return f
                    },
                    P = function(t, e, n, r) {
                        for (var i = e.length, o = n.length, a = {
                                sequence: [],
                                indices1: [],
                                indices2: []
                            }; 0 !== i && 0 !== o;) t.match(e, n, i - 1, o - 1, r) ? (a.sequence.unshift(e[i - 1]), a.indices1.unshift(i - 1), a.indices2.unshift(o - 1), --i, --o) : t[i][o - 1] > t[i - 1][o] ? --o : --i;
                        return a
                    },
                    D = function(t, e, n, r) {
                        var i = r || {},
                            o = P(E(t, e, n || R, i), t, e, i);
                        return "string" == typeof t && "string" == typeof e && (o.sequence = o.sequence.join("")), o
                    },
                    T = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                        return t instanceof Array
                    },
                    N = "function" == typeof Array.prototype.indexOf ? function(t, e) {
                        return t.indexOf(e)
                    } : function(t, e) {
                        for (var n = t.length, r = 0; r < n; r++)
                            if (t[r] === e) return r;
                        return -1
                    };

                function I(t, e, n, i, o) {
                    var a = t[n],
                        s = e[i];
                    if (a === s) return !0;
                    if ((void 0 === a ? "undefined" : r(a)) !== "object" || (void 0 === s ? "undefined" : r(s)) !== "object") return !1;
                    var f = o.objectHash;
                    if (!f) return o.matchByPosition && n === i;
                    var l = void 0,
                        h = void 0;
                    return "number" == typeof n ? (o.hashCache1 = o.hashCache1 || [], void 0 === (l = o.hashCache1[n]) && (o.hashCache1[n] = l = f(a, n))) : l = f(a), void 0 !== l && ("number" == typeof i ? (o.hashCache2 = o.hashCache2 || [], void 0 === (h = o.hashCache2[i]) && (o.hashCache2[i] = h = f(s, i))) : h = f(s), void 0 !== h && l === h)
                }
                var S = function(t) {
                    if (t.leftIsArray) {
                        var e = {
                                objectHash: t.options && t.options.objectHash,
                                matchByPosition: t.options && t.options.matchByPosition
                            },
                            n = 0,
                            r = 0,
                            i = void 0,
                            o = void 0,
                            a = void 0,
                            s = t.left,
                            f = t.right,
                            l = s.length,
                            h = f.length,
                            u = void 0;
                        for (l > 0 && h > 0 && !e.objectHash && "boolean" != typeof e.matchByPosition && (e.matchByPosition = ! function(t, e, n, r) {
                                for (var i = 0; i < n; i++)
                                    for (var o = t[i], a = 0; a < r; a++) {
                                        var s = e[a];
                                        if (i !== a && o === s) return !0
                                    }
                            }(s, f, l, h)); n < l && n < h && I(s, f, n, n, e);) i = n, u = new g(t.left[i], t.right[i]), t.push(u, i), n++;
                        for (; r + n < l && r + n < h && I(s, f, l - 1 - r, h - 1 - r, e);) o = l - 1 - r, a = h - 1 - r, u = new g(t.left[o], t.right[a]), t.push(u, a), r++;
                        var c = void 0;
                        if (n + r === l) {
                            if (l === h) return void t.setResult(void 0).exit();
                            for (c = c || {
                                    _t: "a"
                                }, i = n; i < h - r; i++) c[i] = [f[i]];
                            return void t.setResult(c).exit()
                        }
                        if (n + r === h) {
                            for (c = c || {
                                    _t: "a"
                                }, i = n; i < l - r; i++) c["_" + i] = [s[i], 0, 0];
                            t.setResult(c).exit();
                            return
                        }
                        delete e.hashCache1, delete e.hashCache2;
                        var d = s.slice(n, l - r),
                            p = f.slice(n, h - r),
                            v = D(d, p, I, e),
                            y = [];
                        for (c = c || {
                                _t: "a"
                            }, i = n; i < l - r; i++) 0 > N(v.indices1, i - n) && (c["_" + i] = [s[i], 0, 0], y.push(i));
                        var m = !0;
                        t.options && t.options.arrays && !1 === t.options.arrays.detectMove && (m = !1);
                        var _ = !1;
                        t.options && t.options.arrays && t.options.arrays.includeValueOnMove && (_ = !0);
                        var b = y.length;
                        for (i = n; i < h - r; i++) {
                            var x = N(v.indices2, i - n);
                            if (x < 0) {
                                var k = !1;
                                if (m && b > 0) {
                                    for (var w = 0; w < b; w++)
                                        if (I(d, p, (o = y[w]) - n, i - n, e)) {
                                            c["_" + o].splice(1, 2, i, 3), _ || (c["_" + o][0] = ""), a = i, u = new g(t.left[o], t.right[a]), t.push(u, a), y.splice(w, 1), k = !0;
                                            break
                                        }
                                }
                                k || (c[i] = [f[i]])
                            } else o = v.indices1[x] + n, a = v.indices2[x] + n, u = new g(t.left[o], t.right[a]), t.push(u, a)
                        }
                        t.setResult(c).exit()
                    }
                };
                S.filterName = "arrays";
                var B = function(t, e) {
                        return t - e
                    },
                    F = function(t) {
                        if (t.nested && "a" === t.delta._t) {
                            var e, n = void 0,
                                r = void 0,
                                i = t.delta,
                                o = t.left,
                                a = [],
                                s = [],
                                f = [];
                            for (n in i)
                                if ("_t" !== n)
                                    if ("_" === n[0])
                                        if (0 === i[n][2] || 3 === i[n][2]) a.push(parseInt(n.slice(1), 10));
                                        else throw Error("only removal or move can be applied at original array indices, invalid diff type: " + i[n][2]);
                            else 1 === i[n].length ? s.push({
                                index: parseInt(n, 10),
                                value: i[n][0]
                            }) : f.push({
                                index: parseInt(n, 10),
                                delta: i[n]
                            });
                            for (n = (a = a.sort(B)).length - 1; n >= 0; n--) {
                                var l = i["_" + (r = a[n])],
                                    h = o.splice(r, 1)[0];
                                3 === l[2] && s.push({
                                    index: l[1],
                                    value: h
                                })
                            }
                            var u = (s = s.sort((e = "index", function(t, n) {
                                return t[e] - n[e]
                            }))).length;
                            for (n = 0; n < u; n++) {
                                var c = s[n];
                                o.splice(c.index, 0, c.value)
                            }
                            var d = f.length,
                                p = void 0;
                            if (d > 0)
                                for (n = 0; n < d; n++) {
                                    var v = f[n];
                                    p = new y(t.left[v.index], v.delta), t.push(p, v.index)
                                }
                            if (!t.children) return void t.setResult(t.left).exit();
                            t.exit()
                        }
                    };
                F.filterName = "arrays";
                var L = function(t) {
                    if (t && t.children && "a" === t.delta._t) {
                        for (var e = t.children.length, n = void 0, r = 0; r < e; r++) n = t.children[r], t.left[n.childName] = n.result;
                        t.setResult(t.left).exit()
                    }
                };
                L.filterName = "arraysCollectChildren";
                var V = function(t) {
                    if (!t.nested) {
                        3 === t.delta[2] && (t.newName = "_" + t.delta[1], t.setResult([t.delta[0], parseInt(t.childName.substr(1), 10), 3]).exit());
                        return
                    }
                    if ("a" === t.delta._t) {
                        var e = void 0,
                            n = void 0;
                        for (e in t.delta) "_t" !== e && (n = new m(t.delta[e]), t.push(n, e));
                        t.exit()
                    }
                };
                V.filterName = "arrays";
                var q = function(t, e, n) {
                    if ("string" == typeof e && "_" === e[0]) return parseInt(e.substr(1), 10);
                    if (T(n) && 0 === n[2]) return "_" + e;
                    var r = +e;
                    for (var i in t) {
                        var o = t[i];
                        if (T(o))
                            if (3 === o[2]) {
                                var a = parseInt(i.substr(1), 10),
                                    s = o[1];
                                if (s === +e) return a;
                                a <= r && s > r ? r++ : a >= r && s < r && r--
                            } else 0 === o[2] ? parseInt(i.substr(1), 10) <= r && r++ : 1 === o.length && i <= r && r--
                    }
                    return r
                };

                function U(t) {
                    if (t && t.children && "a" === t.delta._t) {
                        for (var e = t.children.length, n = void 0, r = {
                                _t: "a"
                            }, i = 0; i < e; i++) {
                            var o = (n = t.children[i]).newName;
                            void 0 === o && (o = q(t.delta, n.childName, n.result)), r[o] !== n.result && (r[o] = n.result)
                        }
                        t.setResult(r).exit()
                    }
                }
                U.filterName = "arraysCollectChildren";
                var H = function(t) {
                    t.left instanceof Date ? (t.right instanceof Date ? t.left.getTime() !== t.right.getTime() ? t.setResult([t.left, t.right]) : t.setResult(void 0) : t.setResult([t.left, t.right]), t.exit()) : t.right instanceof Date && t.setResult([t.left, t.right]).exit()
                };
                H.filterName = "dates";
                var z = (function(t) {
                        function e() {
                            this.Diff_Timeout = 1, this.Diff_EditCost = 4, this.Match_Threshold = .5, this.Match_Distance = 1e3, this.Patch_DeleteThreshold = .5, this.Patch_Margin = 4, this.Match_MaxBits = 32
                        }
                        e.prototype.diff_main = function(t, e, n, r) {
                            void 0 === r && (r = this.Diff_Timeout <= 0 ? Number.MAX_VALUE : (new Date).getTime() + 1e3 * this.Diff_Timeout);
                            var i = r;
                            if (null == t || null == e) throw Error("Null input. (diff_main)");
                            if (t == e) return t ? [
                                [0, t]
                            ] : [];
                            void 0 === n && (n = !0);
                            var o = n,
                                a = this.diff_commonPrefix(t, e),
                                s = t.substring(0, a);
                            t = t.substring(a), e = e.substring(a), a = this.diff_commonSuffix(t, e);
                            var f = t.substring(t.length - a);
                            t = t.substring(0, t.length - a), e = e.substring(0, e.length - a);
                            var l = this.diff_compute_(t, e, o, i);
                            return s && l.unshift([0, s]), f && l.push([0, f]), this.diff_cleanupMerge(l), l
                        }, e.prototype.diff_compute_ = function(t, e, n, r) {
                            if (!t) return [
                                [1, e]
                            ];
                            if (!e) return [
                                [-1, t]
                            ];
                            var i, o = t.length > e.length ? t : e,
                                a = t.length > e.length ? e : t,
                                s = o.indexOf(a);
                            if (-1 != s) return i = [
                                [1, o.substring(0, s)],
                                [0, a],
                                [1, o.substring(s + a.length)]
                            ], t.length > e.length && (i[0][0] = i[2][0] = -1), i;
                            if (1 == a.length) return [
                                [-1, t],
                                [1, e]
                            ];
                            var f = this.diff_halfMatch_(t, e);
                            if (f) {
                                var l = f[0],
                                    h = f[1],
                                    u = f[2],
                                    c = f[3],
                                    d = f[4],
                                    p = this.diff_main(l, u, n, r),
                                    v = this.diff_main(h, c, n, r);
                                return p.concat([
                                    [0, d]
                                ], v)
                            }
                            return n && t.length > 100 && e.length > 100 ? this.diff_lineMode_(t, e, r) : this.diff_bisect_(t, e, r)
                        }, e.prototype.diff_lineMode_ = function(t, e, n) {
                            var r = this.diff_linesToChars_(t, e);
                            t = r.chars1, e = r.chars2;
                            var i = r.lineArray,
                                o = this.diff_main(t, e, !1, n);
                            this.diff_charsToLines_(o, i), this.diff_cleanupSemantic(o), o.push([0, ""]);
                            for (var a = 0, s = 0, f = 0, l = "", h = ""; a < o.length;) {
                                switch (o[a][0]) {
                                    case 1:
                                        f++, h += o[a][1];
                                        break;
                                    case -1:
                                        s++, l += o[a][1];
                                        break;
                                    case 0:
                                        if (s >= 1 && f >= 1) {
                                            o.splice(a - s - f, s + f), a = a - s - f;
                                            for (var r = this.diff_main(l, h, !1, n), u = r.length - 1; u >= 0; u--) o.splice(a, 0, r[u]);
                                            a += r.length
                                        }
                                        f = 0, s = 0, l = "", h = ""
                                }
                                a++
                            }
                            return o.pop(), o
                        }, e.prototype.diff_bisect_ = function(t, e, n) {
                            for (var r = t.length, i = e.length, o = Math.ceil((r + i) / 2), a = 2 * o, s = Array(a), f = Array(a), l = 0; l < a; l++) s[l] = -1, f[l] = -1;
                            s[o + 1] = 0, f[o + 1] = 0;
                            for (var h = r - i, u = h % 2 != 0, c = 0, d = 0, p = 0, v = 0, g = 0; g < o && !(new Date().getTime() > n); g++) {
                                for (var y = -g + c; y <= g - d; y += 2) {
                                    for (var m, _ = o + y, b = (m = y == -g || y != g && s[_ - 1] < s[_ + 1] ? s[_ + 1] : s[_ - 1] + 1) - y; m < r && b < i && t.charAt(m) == e.charAt(b);) m++, b++;
                                    if (s[_] = m, m > r) d += 2;
                                    else if (b > i) c += 2;
                                    else if (u) {
                                        var x = o + h - y;
                                        if (x >= 0 && x < a && -1 != f[x]) {
                                            var k = r - f[x];
                                            if (m >= k) return this.diff_bisectSplit_(t, e, m, b, n)
                                        }
                                    }
                                }
                                for (var w = -g + p; w <= g - v; w += 2) {
                                    for (var k, x = o + w, j = (k = w == -g || w != g && f[x - 1] < f[x + 1] ? f[x + 1] : f[x - 1] + 1) - w; k < r && j < i && t.charAt(r - k - 1) == e.charAt(i - j - 1);) k++, j++;
                                    if (f[x] = k, k > r) v += 2;
                                    else if (j > i) p += 2;
                                    else if (!u) {
                                        var _ = o + h - w;
                                        if (_ >= 0 && _ < a && -1 != s[_]) {
                                            var m = s[_],
                                                b = o + m - _;
                                            if (m >= (k = r - k)) return this.diff_bisectSplit_(t, e, m, b, n)
                                        }
                                    }
                                }
                            }
                            return [
                                [-1, t],
                                [1, e]
                            ]
                        }, e.prototype.diff_bisectSplit_ = function(t, e, n, r, i) {
                            var o = t.substring(0, n),
                                a = e.substring(0, r),
                                s = t.substring(n),
                                f = e.substring(r),
                                l = this.diff_main(o, a, !1, i),
                                h = this.diff_main(s, f, !1, i);
                            return l.concat(h)
                        }, e.prototype.diff_linesToChars_ = function(t, e) {
                            var n = [],
                                r = {};

                            function i(t) {
                                for (var e = "", i = 0, o = -1, a = n.length; o < t.length - 1;) {
                                    -1 == (o = t.indexOf("\n", i)) && (o = t.length - 1);
                                    var s = t.substring(i, o + 1);
                                    i = o + 1, (r.hasOwnProperty ? r.hasOwnProperty(s) : void 0 !== r[s]) ? e += String.fromCharCode(r[s]) : (e += String.fromCharCode(a), r[s] = a, n[a++] = s)
                                }
                                return e
                            }
                            return n[0] = "", {
                                chars1: i(t),
                                chars2: i(e),
                                lineArray: n
                            }
                        }, e.prototype.diff_charsToLines_ = function(t, e) {
                            for (var n = 0; n < t.length; n++) {
                                for (var r = t[n][1], i = [], o = 0; o < r.length; o++) i[o] = e[r.charCodeAt(o)];
                                t[n][1] = i.join("")
                            }
                        }, e.prototype.diff_commonPrefix = function(t, e) {
                            if (!t || !e || t.charAt(0) != e.charAt(0)) return 0;
                            for (var n = 0, r = Math.min(t.length, e.length), i = r, o = 0; n < i;) t.substring(o, i) == e.substring(o, i) ? o = n = i : r = i, i = Math.floor((r - n) / 2 + n);
                            return i
                        }, e.prototype.diff_commonSuffix = function(t, e) {
                            if (!t || !e || t.charAt(t.length - 1) != e.charAt(e.length - 1)) return 0;
                            for (var n = 0, r = Math.min(t.length, e.length), i = r, o = 0; n < i;) t.substring(t.length - i, t.length - o) == e.substring(e.length - i, e.length - o) ? o = n = i : r = i, i = Math.floor((r - n) / 2 + n);
                            return i
                        }, e.prototype.diff_commonOverlap_ = function(t, e) {
                            var n = t.length,
                                r = e.length;
                            if (0 == n || 0 == r) return 0;
                            n > r ? t = t.substring(n - r) : n < r && (e = e.substring(0, n));
                            var i = Math.min(n, r);
                            if (t == e) return i;
                            for (var o = 0, a = 1;;) {
                                var s = t.substring(i - a),
                                    f = e.indexOf(s);
                                if (-1 == f) return o;
                                a += f, (0 == f || t.substring(i - a) == e.substring(0, a)) && (o = a, a++)
                            }
                        }, e.prototype.diff_halfMatch_ = function(t, e) {
                            if (this.Diff_Timeout <= 0) return null;
                            var n, r, i, o, a, s = t.length > e.length ? t : e,
                                f = t.length > e.length ? e : t;
                            if (s.length < 4 || 2 * f.length < s.length) return null;
                            var l = this;

                            function h(t, e, n) {
                                for (var r, i, o, a, s = t.substring(n, n + Math.floor(t.length / 4)), f = -1, h = ""; - 1 != (f = e.indexOf(s, f + 1));) {
                                    var u = l.diff_commonPrefix(t.substring(n), e.substring(f)),
                                        c = l.diff_commonSuffix(t.substring(0, n), e.substring(0, f));
                                    h.length < c + u && (h = e.substring(f - c, f) + e.substring(f, f + u), r = t.substring(0, n - c), i = t.substring(n + u), o = e.substring(0, f - c), a = e.substring(f + u))
                                }
                                return 2 * h.length >= t.length ? [r, i, o, a, h] : null
                            }
                            var u = h(s, f, Math.ceil(s.length / 4)),
                                c = h(s, f, Math.ceil(s.length / 2));
                            return u || c ? (n = c ? u && u[4].length > c[4].length ? u : c : u, t.length > e.length ? (r = n[0], i = n[1], o = n[2], a = n[3]) : (o = n[0], a = n[1], r = n[2], i = n[3]), [r, i, o, a, n[4]]) : null
                        }, e.prototype.diff_cleanupSemantic = function(t) {
                            for (var e = !1, n = [], r = 0, i = null, o = 0, a = 0, s = 0, f = 0, l = 0; o < t.length;) 0 == t[o][0] ? (n[r++] = o, a = f, s = l, f = 0, l = 0, i = t[o][1]) : (1 == t[o][0] ? f += t[o][1].length : l += t[o][1].length, i && i.length <= Math.max(a, s) && i.length <= Math.max(f, l) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, o = --r > 0 ? n[r - 1] : -1, a = 0, s = 0, f = 0, l = 0, i = null, e = !0)), o++;
                            for (e && this.diff_cleanupMerge(t), this.diff_cleanupSemanticLossless(t), o = 1; o < t.length;) {
                                if (-1 == t[o - 1][0] && 1 == t[o][0]) {
                                    var h = t[o - 1][1],
                                        u = t[o][1],
                                        c = this.diff_commonOverlap_(h, u),
                                        d = this.diff_commonOverlap_(u, h);
                                    c >= d ? (c >= h.length / 2 || c >= u.length / 2) && (t.splice(o, 0, [0, u.substring(0, c)]), t[o - 1][1] = h.substring(0, h.length - c), t[o + 1][1] = u.substring(c), o++) : (d >= h.length / 2 || d >= u.length / 2) && (t.splice(o, 0, [0, h.substring(0, d)]), t[o - 1][0] = 1, t[o - 1][1] = u.substring(0, u.length - d), t[o + 1][0] = -1, t[o + 1][1] = h.substring(d), o++), o++
                                }
                                o++
                            }
                        }, e.prototype.diff_cleanupSemanticLossless = function(t) {
                            function n(t, n) {
                                if (!t || !n) return 6;
                                var r = t.charAt(t.length - 1),
                                    i = n.charAt(0),
                                    o = r.match(e.nonAlphaNumericRegex_),
                                    a = i.match(e.nonAlphaNumericRegex_),
                                    s = o && r.match(e.whitespaceRegex_),
                                    f = a && i.match(e.whitespaceRegex_),
                                    l = s && r.match(e.linebreakRegex_),
                                    h = f && i.match(e.linebreakRegex_),
                                    u = l && t.match(e.blanklineEndRegex_),
                                    c = h && n.match(e.blanklineStartRegex_);
                                if (u || c) return 5;
                                if (l || h) return 4;
                                if (o && !s && f) return 3;
                                if (s || f) return 2;
                                if (o || a) return 1;
                                return 0
                            }
                            for (var r = 1; r < t.length - 1;) {
                                if (0 == t[r - 1][0] && 0 == t[r + 1][0]) {
                                    var i = t[r - 1][1],
                                        o = t[r][1],
                                        a = t[r + 1][1],
                                        s = this.diff_commonSuffix(i, o);
                                    if (s) {
                                        var f = o.substring(o.length - s);
                                        i = i.substring(0, i.length - s), o = f + o.substring(0, o.length - s), a = f + a
                                    }
                                    for (var l = i, h = o, u = a, c = n(i, o) + n(o, a); o.charAt(0) === a.charAt(0);) {
                                        i += o.charAt(0), o = o.substring(1) + a.charAt(0), a = a.substring(1);
                                        var d = n(i, o) + n(o, a);
                                        d >= c && (c = d, l = i, h = o, u = a)
                                    }
                                    t[r - 1][1] != l && (l ? t[r - 1][1] = l : (t.splice(r - 1, 1), r--), t[r][1] = h, u ? t[r + 1][1] = u : (t.splice(r + 1, 1), r--))
                                }
                                r++
                            }
                        }, e.nonAlphaNumericRegex_ = /[^a-zA-Z0-9]/, e.whitespaceRegex_ = /\s/, e.linebreakRegex_ = /[\r\n]/, e.blanklineEndRegex_ = /\n\r?\n$/, e.blanklineStartRegex_ = /^\r?\n\r?\n/, e.prototype.diff_cleanupEfficiency = function(t) {
                            for (var e = !1, n = [], r = 0, i = null, o = 0, a = !1, s = !1, f = !1, l = !1; o < t.length;) 0 == t[o][0] ? (t[o][1].length < this.Diff_EditCost && (f || l) ? (n[r++] = o, a = f, s = l, i = t[o][1]) : (r = 0, i = null), f = l = !1) : (-1 == t[o][0] ? l = !0 : f = !0, i && (a && s && f && l || i.length < this.Diff_EditCost / 2 && a + s + f + l == 3) && (t.splice(n[r - 1], 0, [-1, i]), t[n[r - 1] + 1][0] = 1, r--, i = null, a && s ? (f = l = !0, r = 0) : (o = --r > 0 ? n[r - 1] : -1, f = l = !1), e = !0)), o++;
                            e && this.diff_cleanupMerge(t)
                        }, e.prototype.diff_cleanupMerge = function(t) {
                            t.push([0, ""]);
                            for (var e, n = 0, r = 0, i = 0, o = "", a = ""; n < t.length;) switch (t[n][0]) {
                                case 1:
                                    i++, a += t[n][1], n++;
                                    break;
                                case -1:
                                    r++, o += t[n][1], n++;
                                    break;
                                case 0:
                                    r + i > 1 ? (0 !== r && 0 !== i && (0 !== (e = this.diff_commonPrefix(a, o)) && (n - r - i > 0 && 0 == t[n - r - i - 1][0] ? t[n - r - i - 1][1] += a.substring(0, e) : (t.splice(0, 0, [0, a.substring(0, e)]), n++), a = a.substring(e), o = o.substring(e)), 0 !== (e = this.diff_commonSuffix(a, o)) && (t[n][1] = a.substring(a.length - e) + t[n][1], a = a.substring(0, a.length - e), o = o.substring(0, o.length - e))), 0 === r ? t.splice(n - i, r + i, [1, a]) : 0 === i ? t.splice(n - r, r + i, [-1, o]) : t.splice(n - r - i, r + i, [-1, o], [1, a]), n = n - r - i + +!!r + +!!i + 1) : 0 !== n && 0 == t[n - 1][0] ? (t[n - 1][1] += t[n][1], t.splice(n, 1)) : n++, i = 0, r = 0, o = "", a = ""
                            }
                            "" === t[t.length - 1][1] && t.pop();
                            var s = !1;
                            for (n = 1; n < t.length - 1;) 0 == t[n - 1][0] && 0 == t[n + 1][0] && (t[n][1].substring(t[n][1].length - t[n - 1][1].length) == t[n - 1][1] ? (t[n][1] = t[n - 1][1] + t[n][1].substring(0, t[n][1].length - t[n - 1][1].length), t[n + 1][1] = t[n - 1][1] + t[n + 1][1], t.splice(n - 1, 1), s = !0) : t[n][1].substring(0, t[n + 1][1].length) == t[n + 1][1] && (t[n - 1][1] += t[n + 1][1], t[n][1] = t[n][1].substring(t[n + 1][1].length) + t[n + 1][1], t.splice(n + 1, 1), s = !0)), n++;
                            s && this.diff_cleanupMerge(t)
                        }, e.prototype.diff_xIndex = function(t, e) {
                            var n, r = 0,
                                i = 0,
                                o = 0,
                                a = 0;
                            for (n = 0; n < t.length && (1 !== t[n][0] && (r += t[n][1].length), -1 !== t[n][0] && (i += t[n][1].length), !(r > e)); n++) o = r, a = i;
                            return t.length != n && -1 === t[n][0] ? a : a + (e - o)
                        }, e.prototype.diff_prettyHtml = function(t) {
                            for (var e = [], n = /&/g, r = /</g, i = />/g, o = /\n/g, a = 0; a < t.length; a++) {
                                var s = t[a][0],
                                    f = t[a][1].replace(n, "&amp;").replace(r, "&lt;").replace(i, "&gt;").replace(o, "&para;<br>");
                                switch (s) {
                                    case 1:
                                        e[a] = '<ins style="background:#e6ffe6;">' + f + "</ins>";
                                        break;
                                    case -1:
                                        e[a] = '<del style="background:#ffe6e6;">' + f + "</del>";
                                        break;
                                    case 0:
                                        e[a] = "<span>" + f + "</span>"
                                }
                            }
                            return e.join("")
                        }, e.prototype.diff_text1 = function(t) {
                            for (var e = [], n = 0; n < t.length; n++) 1 !== t[n][0] && (e[n] = t[n][1]);
                            return e.join("")
                        }, e.prototype.diff_text2 = function(t) {
                            for (var e = [], n = 0; n < t.length; n++) - 1 !== t[n][0] && (e[n] = t[n][1]);
                            return e.join("")
                        }, e.prototype.diff_levenshtein = function(t) {
                            for (var e = 0, n = 0, r = 0, i = 0; i < t.length; i++) {
                                var o = t[i][0],
                                    a = t[i][1];
                                switch (o) {
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
                        }, e.prototype.diff_toDelta = function(t) {
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
                        }, e.prototype.diff_fromDelta = function(t, e) {
                            for (var n = [], r = 0, i = 0, o = e.split(/\t/g), a = 0; a < o.length; a++) {
                                var s = o[a].substring(1);
                                switch (o[a].charAt(0)) {
                                    case "+":
                                        try {
                                            n[r++] = [1, decodeURI(s)]
                                        } catch (t) {
                                            throw Error("Illegal escape in diff_fromDelta: " + s)
                                        }
                                        break;
                                    case "-":
                                    case "=":
                                        var f = parseInt(s, 10);
                                        if (isNaN(f) || f < 0) throw Error("Invalid number in diff_fromDelta: " + s);
                                        var l = t.substring(i, i += f);
                                        "=" == o[a].charAt(0) ? n[r++] = [0, l] : n[r++] = [-1, l];
                                        break;
                                    default:
                                        if (o[a]) throw Error("Invalid diff operation in diff_fromDelta: " + o[a])
                                }
                            }
                            if (i != t.length) throw Error("Delta length (" + i + ") does not equal source text length (" + t.length + ").");
                            return n
                        }, e.prototype.match_main = function(t, e, n) {
                            if (null == t || null == e || null == n) throw Error("Null input. (match_main)");
                            return (n = Math.max(0, Math.min(n, t.length)), t == e) ? 0 : t.length ? t.substring(n, n + e.length) == e ? n : this.match_bitap_(t, e, n) : -1
                        }, e.prototype.match_bitap_ = function(t, e, n) {
                            if (e.length > this.Match_MaxBits) throw Error("Pattern too long for this browser.");
                            var r, i, o, a = this.match_alphabet_(e),
                                s = this;

                            function f(t, r) {
                                var i = t / e.length,
                                    o = Math.abs(n - r);
                                return s.Match_Distance ? i + o / s.Match_Distance : o ? 1 : i
                            }
                            var l = this.Match_Threshold,
                                h = t.indexOf(e, n); - 1 != h && (l = Math.min(f(0, h), l), -1 != (h = t.lastIndexOf(e, n + e.length)) && (l = Math.min(f(0, h), l)));
                            var u = 1 << e.length - 1;
                            h = -1;
                            for (var c = e.length + t.length, d = 0; d < e.length; d++) {
                                for (r = 0, i = c; r < i;) f(d, n + i) <= l ? r = i : c = i, i = Math.floor((c - r) / 2 + r);
                                c = i;
                                var p = Math.max(1, n - i + 1),
                                    v = Math.min(n + i, t.length) + e.length,
                                    g = Array(v + 2);
                                g[v + 1] = (1 << d) - 1;
                                for (var y = v; y >= p; y--) {
                                    var m = a[t.charAt(y - 1)];
                                    if (0 === d ? g[y] = (g[y + 1] << 1 | 1) & m : g[y] = (g[y + 1] << 1 | 1) & m | ((o[y + 1] | o[y]) << 1 | 1) | o[y + 1], g[y] & u) {
                                        var _ = f(d, y - 1);
                                        if (_ <= l)
                                            if (l = _, (h = y - 1) > n) p = Math.max(1, 2 * n - h);
                                            else break
                                    }
                                }
                                if (f(d + 1, n) > l) break;
                                o = g
                            }
                            return h
                        }, e.prototype.match_alphabet_ = function(t) {
                            for (var e = {}, n = 0; n < t.length; n++) e[t.charAt(n)] = 0;
                            for (var n = 0; n < t.length; n++) e[t.charAt(n)] |= 1 << t.length - n - 1;
                            return e
                        }, e.prototype.patch_addContext_ = function(t, e) {
                            if (0 != e.length) {
                                for (var n = e.substring(t.start2, t.start2 + t.length1), r = 0; e.indexOf(n) != e.lastIndexOf(n) && n.length < this.Match_MaxBits - this.Patch_Margin - this.Patch_Margin;) r += this.Patch_Margin, n = e.substring(t.start2 - r, t.start2 + t.length1 + r);
                                r += this.Patch_Margin;
                                var i = e.substring(t.start2 - r, t.start2);
                                i && t.diffs.unshift([0, i]);
                                var o = e.substring(t.start2 + t.length1, t.start2 + t.length1 + r);
                                o && t.diffs.push([0, o]), t.start1 -= i.length, t.start2 -= i.length, t.length1 += i.length + o.length, t.length2 += i.length + o.length
                            }
                        }, e.prototype.patch_make = function(t, n, r) {
                            if ("string" == typeof t && "string" == typeof n && void 0 === r) i = t, (o = this.diff_main(i, n, !0)).length > 2 && (this.diff_cleanupSemantic(o), this.diff_cleanupEfficiency(o));
                            else if (t && "object" == typeof t && void 0 === n && void 0 === r) o = t, i = this.diff_text1(o);
                            else if ("string" == typeof t && n && "object" == typeof n && void 0 === r) i = t, o = n;
                            else if ("string" == typeof t && "string" == typeof n && r && "object" == typeof r) i = t, o = r;
                            else throw Error("Unknown call format to patch_make.");
                            if (0 === o.length) return [];
                            for (var i, o, a = [], s = new e.patch_obj, f = 0, l = 0, h = 0, u = i, c = i, d = 0; d < o.length; d++) {
                                var p = o[d][0],
                                    v = o[d][1];
                                switch (!f && 0 !== p && (s.start1 = l, s.start2 = h), p) {
                                    case 1:
                                        s.diffs[f++] = o[d], s.length2 += v.length, c = c.substring(0, h) + v + c.substring(h);
                                        break;
                                    case -1:
                                        s.length1 += v.length, s.diffs[f++] = o[d], c = c.substring(0, h) + c.substring(h + v.length);
                                        break;
                                    case 0:
                                        v.length <= 2 * this.Patch_Margin && f && o.length != d + 1 ? (s.diffs[f++] = o[d], s.length1 += v.length, s.length2 += v.length) : v.length >= 2 * this.Patch_Margin && f && (this.patch_addContext_(s, u), a.push(s), s = new e.patch_obj, f = 0, u = c, l = h)
                                }
                                1 !== p && (l += v.length), -1 !== p && (h += v.length)
                            }
                            return f && (this.patch_addContext_(s, u), a.push(s)), a
                        }, e.prototype.patch_deepCopy = function(t) {
                            for (var n = [], r = 0; r < t.length; r++) {
                                var i = t[r],
                                    o = new e.patch_obj;
                                o.diffs = [];
                                for (var a = 0; a < i.diffs.length; a++) o.diffs[a] = i.diffs[a].slice();
                                o.start1 = i.start1, o.start2 = i.start2, o.length1 = i.length1, o.length2 = i.length2, n[r] = o
                            }
                            return n
                        }, e.prototype.patch_apply = function(t, e) {
                            if (0 == t.length) return [e, []];
                            t = this.patch_deepCopy(t);
                            var n = this.patch_addPadding(t);
                            e = n + e + n, this.patch_splitMax(t);
                            for (var r = 0, i = [], o = 0; o < t.length; o++) {
                                var a = t[o].start2 + r,
                                    s = this.diff_text1(t[o].diffs),
                                    f = -1;
                                if (s.length > this.Match_MaxBits ? -1 != (h = this.match_main(e, s.substring(0, this.Match_MaxBits), a)) && (-1 == (f = this.match_main(e, s.substring(s.length - this.Match_MaxBits), a + s.length - this.Match_MaxBits)) || h >= f) && (h = -1) : h = this.match_main(e, s, a), -1 == h) i[o] = !1, r -= t[o].length2 - t[o].length1;
                                else if (i[o] = !0, r = h - a, u = -1 == f ? e.substring(h, h + s.length) : e.substring(h, f + this.Match_MaxBits), s == u) e = e.substring(0, h) + this.diff_text2(t[o].diffs) + e.substring(h + s.length);
                                else {
                                    var l = this.diff_main(s, u, !1);
                                    if (s.length > this.Match_MaxBits && this.diff_levenshtein(l) / s.length > this.Patch_DeleteThreshold) i[o] = !1;
                                    else {
                                        this.diff_cleanupSemanticLossless(l);
                                        for (var h, u, c, d = 0, p = 0; p < t[o].diffs.length; p++) {
                                            var v = t[o].diffs[p];
                                            0 !== v[0] && (c = this.diff_xIndex(l, d)), 1 === v[0] ? e = e.substring(0, h + c) + v[1] + e.substring(h + c) : -1 === v[0] && (e = e.substring(0, h + c) + e.substring(h + this.diff_xIndex(l, d + v[1].length))), -1 !== v[0] && (d += v[1].length)
                                        }
                                    }
                                }
                            }
                            return [e = e.substring(n.length, e.length - n.length), i]
                        }, e.prototype.patch_addPadding = function(t) {
                            for (var e = this.Patch_Margin, n = "", r = 1; r <= e; r++) n += String.fromCharCode(r);
                            for (var r = 0; r < t.length; r++) t[r].start1 += e, t[r].start2 += e;
                            var i = t[0],
                                o = i.diffs;
                            if (0 == o.length || 0 != o[0][0]) o.unshift([0, n]), i.start1 -= e, i.start2 -= e, i.length1 += e, i.length2 += e;
                            else if (e > o[0][1].length) {
                                var a = e - o[0][1].length;
                                o[0][1] = n.substring(o[0][1].length) + o[0][1], i.start1 -= a, i.start2 -= a, i.length1 += a, i.length2 += a
                            }
                            if (0 == (o = (i = t[t.length - 1]).diffs).length || 0 != o[o.length - 1][0]) o.push([0, n]), i.length1 += e, i.length2 += e;
                            else if (e > o[o.length - 1][1].length) {
                                var a = e - o[o.length - 1][1].length;
                                o[o.length - 1][1] += n.substring(0, a), i.length1 += a, i.length2 += a
                            }
                            return n
                        }, e.prototype.patch_splitMax = function(t) {
                            for (var n = this.Match_MaxBits, r = 0; r < t.length; r++)
                                if (!(t[r].length1 <= n)) {
                                    var i = t[r];
                                    t.splice(r--, 1);
                                    for (var o = i.start1, a = i.start2, s = ""; 0 !== i.diffs.length;) {
                                        var f = new e.patch_obj,
                                            l = !0;
                                        for (f.start1 = o - s.length, f.start2 = a - s.length, "" !== s && (f.length1 = f.length2 = s.length, f.diffs.push([0, s])); 0 !== i.diffs.length && f.length1 < n - this.Patch_Margin;) {
                                            var h = i.diffs[0][0],
                                                u = i.diffs[0][1];
                                            1 === h ? (f.length2 += u.length, a += u.length, f.diffs.push(i.diffs.shift()), l = !1) : -1 === h && 1 == f.diffs.length && 0 == f.diffs[0][0] && u.length > 2 * n ? (f.length1 += u.length, o += u.length, l = !1, f.diffs.push([h, u]), i.diffs.shift()) : (u = u.substring(0, n - f.length1 - this.Patch_Margin), f.length1 += u.length, o += u.length, 0 === h ? (f.length2 += u.length, a += u.length) : l = !1, f.diffs.push([h, u]), u == i.diffs[0][1] ? i.diffs.shift() : i.diffs[0][1] = i.diffs[0][1].substring(u.length))
                                        }
                                        s = (s = this.diff_text2(f.diffs)).substring(s.length - this.Patch_Margin);
                                        var c = this.diff_text1(i.diffs).substring(0, this.Patch_Margin);
                                        "" !== c && (f.length1 += c.length, f.length2 += c.length, 0 !== f.diffs.length && 0 === f.diffs[f.diffs.length - 1][0] ? f.diffs[f.diffs.length - 1][1] += c : f.diffs.push([0, c])), l || t.splice(++r, 0, f)
                                    }
                                }
                        }, e.prototype.patch_toText = function(t) {
                            for (var e = [], n = 0; n < t.length; n++) e[n] = t[n];
                            return e.join("")
                        }, e.prototype.patch_fromText = function(t) {
                            var n = [];
                            if (!t) return n;
                            for (var r = t.split("\n"), i = 0, o = /^@@ -(\d+),?(\d*) \+(\d+),?(\d*) @@$/; i < r.length;) {
                                var a = r[i].match(o);
                                if (!a) throw Error("Invalid patch string: " + r[i]);
                                var s = new e.patch_obj;
                                for (n.push(s), s.start1 = parseInt(a[1], 10), "" === a[2] ? (s.start1--, s.length1 = 1) : "0" == a[2] ? s.length1 = 0 : (s.start1--, s.length1 = parseInt(a[2], 10)), s.start2 = parseInt(a[3], 10), "" === a[4] ? (s.start2--, s.length2 = 1) : "0" == a[4] ? s.length2 = 0 : (s.start2--, s.length2 = parseInt(a[4], 10)), i++; i < r.length;) {
                                    var f = r[i].charAt(0);
                                    try {
                                        var l = decodeURI(r[i].substring(1))
                                    } catch (t) {
                                        throw Error("Illegal escape in patch_fromText: " + l)
                                    }
                                    if ("-" == f) s.diffs.push([-1, l]);
                                    else if ("+" == f) s.diffs.push([1, l]);
                                    else if (" " == f) s.diffs.push([0, l]);
                                    else if ("@" == f) break;
                                    else if ("" === f);
                                    else throw Error('Invalid patch mode "' + f + '" in: ' + l);
                                    i++
                                }
                            }
                            return n
                        }, e.patch_obj = function() {
                            this.diffs = [], this.start1 = null, this.start2 = null, this.length1 = 0, this.length2 = 0
                        }, e.patch_obj.prototype.toString = function() {
                            t = 0 === this.length1 ? this.start1 + ",0" : 1 == this.length1 ? this.start1 + 1 : this.start1 + 1 + "," + this.length1;
                            for (var t, e, n = 0 === this.length2 ? this.start2 + ",0" : 1 == this.length2 ? this.start2 + 1 : this.start2 + 1 + "," + this.length2, r = ["@@ -" + t + " +" + n + " @@\n"], i = 0; i < this.diffs.length; i++) {
                                switch (this.diffs[i][0]) {
                                    case 1:
                                        e = "+";
                                        break;
                                    case -1:
                                        e = "-";
                                        break;
                                    case 0:
                                        e = " "
                                }
                                r[i + 1] = e + encodeURI(this.diffs[i][1]) + "\n"
                            }
                            return r.join("").replace(/%20/g, " ")
                        }, t.exports = e, t.exports.diff_match_patch = e, t.exports.DIFF_DELETE = -1, t.exports.DIFF_INSERT = 1, t.exports.DIFF_EQUAL = 0
                    }(n = {
                        exports: {}
                    }, n.exports), n.exports),
                    $ = null,
                    Q = function(t) {
                        if (!$) {
                            var e = void 0;
                            if ("u" > typeof diff_match_patch) e = "function" == typeof diff_match_patch ? new diff_match_patch : new diff_match_patch.diff_match_patch;
                            else if (z) try {
                                e = z && new z
                            } catch (t) {
                                e = null
                            }
                            if (!e) {
                                if (!t) return null;
                                var n = Error("text diff_match_patch library not found");
                                throw n.diff_match_patch_not_found = !0, n
                            }
                            $ = {
                                diff: function(t, n) {
                                    return e.patch_toText(e.patch_make(t, n))
                                },
                                patch: function(t, n) {
                                    for (var r = e.patch_apply(e.patch_fromText(n), t), i = 0; i < r[1].length; i++) r[1][i] || (Error("text patch failed").textPatchFailed = !0);
                                    return r[0]
                                }
                            }
                        }
                        return $
                    },
                    J = function(t) {
                        if ("string" === t.leftType) {
                            var e = t.options && t.options.textDiff && t.options.textDiff.minLength || 60;
                            if (t.left.length < e || t.right.length < e) return void t.setResult([t.left, t.right]).exit();
                            var n = Q();
                            if (!n) return void t.setResult([t.left, t.right]).exit();
                            var r = n.diff;
                            t.setResult([r(t.left, t.right), 0, 2]).exit()
                        }
                    };
                J.filterName = "texts";
                var K = function(t) {
                    if (!t.nested && 2 === t.delta[2]) {
                        var e = Q(!0).patch;
                        t.setResult(e(t.left, t.delta[0])).exit()
                    }
                };
                K.filterName = "texts";
                var Z = function(t) {
                        var e = void 0,
                            n = void 0,
                            r = void 0,
                            i = void 0,
                            o = void 0,
                            a = null,
                            s = /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/;
                        for (e = 0, n = (r = t.split("\n")).length; e < n; e++) {
                            var f = (i = r[e]).slice(0, 1);
                            "@" === f ? (a = s.exec(i), r[e] = "@@ -" + a[3] + "," + a[4] + " +" + a[1] + "," + a[2] + " @@") : "+" === f ? (r[e] = "-" + r[e].slice(1), "+" === r[e - 1].slice(0, 1) && (o = r[e], r[e] = r[e - 1], r[e - 1] = o)) : "-" === f && (r[e] = "+" + r[e].slice(1))
                        }
                        return r.join("\n")
                    },
                    W = function(t) {
                        t.nested || 2 === t.delta[2] && t.setResult([Z(t.delta[0]), 0, 2]).exit()
                    };
                W.filterName = "texts";
                var X = function() {
                        function t(e) {
                            i(this, t), this.processor = new u(e), this.processor.pipe(new c("diff").append(w, b, H, J, j, S).shouldHaveResult()), this.processor.pipe(new c("patch").append(O, L, x, K, A, F).shouldHaveResult()), this.processor.pipe(new c("reverse").append(C, U, k, W, M, V).shouldHaveResult())
                        }
                        return o(t, [{
                            key: "options",
                            value: function() {
                                var t;
                                return (t = this.processor).options.apply(t, arguments)
                            }
                        }, {
                            key: "diff",
                            value: function(t, e) {
                                return this.processor.process(new g(t, e))
                            }
                        }, {
                            key: "patch",
                            value: function(t, e) {
                                return this.processor.process(new y(t, e))
                            }
                        }, {
                            key: "reverse",
                            value: function(t) {
                                return this.processor.process(new m(t))
                            }
                        }, {
                            key: "unpatch",
                            value: function(t, e) {
                                return this.patch(t, this.reverse(e))
                            }
                        }, {
                            key: "clone",
                            value: function(t) {
                                return v(t)
                            }
                        }]), t
                    }(),
                    G = "function" == typeof Array.isArray ? Array.isArray : function(t) {
                        return t instanceof Array
                    },
                    Y = "function" == typeof Object.keys ? function(t) {
                        return Object.keys(t)
                    } : function(t) {
                        var e = [];
                        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.push(n);
                        return e
                    },
                    tt = function(t) {
                        return "_t" === t ? -1 : "_" === t.substr(0, 1) ? parseInt(t.slice(1), 10) : parseInt(t, 10) + .1
                    },
                    te = function(t, e) {
                        return tt(t) - tt(e)
                    },
                    tn = function() {
                        function t() {
                            i(this, t)
                        }
                        return o(t, [{
                            key: "format",
                            value: function(t, e) {
                                var n = {};
                                return this.prepareContext(n), this.recurse(n, t, e), this.finalize(n)
                            }
                        }, {
                            key: "prepareContext",
                            value: function(t) {
                                t.buffer = [], t.out = function() {
                                    var t;
                                    (t = this.buffer).push.apply(t, arguments)
                                }
                            }
                        }, {
                            key: "typeFormattterNotFound",
                            value: function(t, e) {
                                throw Error("cannot format delta type: " + e)
                            }
                        }, {
                            key: "typeFormattterErrorFormatter",
                            value: function(t, e) {
                                return e.toString()
                            }
                        }, {
                            key: "finalize",
                            value: function(t) {
                                var e = t.buffer;
                                if (G(e)) return e.join("")
                            }
                        }, {
                            key: "recurse",
                            value: function(t, e, n, r, i, o, a) {
                                var s = e && o ? o.value : n;
                                if (void 0 !== e || void 0 !== r) {
                                    var f = this.getDeltaType(e, o),
                                        l = "node" === f ? "a" === e._t ? "array" : "object" : "";
                                    void 0 !== r ? this.nodeBegin(t, r, i, f, l, a) : this.rootBegin(t, f, l);
                                    try {
                                        (this["format_" + f] || this.typeFormattterNotFound(t, f)).call(this, t, e, s, r, i, o)
                                    } catch (n) {
                                        this.typeFormattterErrorFormatter(t, n, e, s, r, i, o), "u" > typeof console && console.error && console.error(n.stack)
                                    }
                                    void 0 !== r ? this.nodeEnd(t, r, i, f, l, a) : this.rootEnd(t, f, l)
                                }
                            }
                        }, {
                            key: "formatDeltaChildren",
                            value: function(t, e, n) {
                                var r = this;
                                this.forEachDeltaKey(e, n, function(i, o, a, s) {
                                    r.recurse(t, e[i], n ? n[o] : void 0, i, o, a, s)
                                })
                            }
                        }, {
                            key: "forEachDeltaKey",
                            value: function(t, e, n) {
                                var r = Y(t),
                                    i = "a" === t._t,
                                    o = {},
                                    a = void 0;
                                if (void 0 !== e)
                                    for (a in e) Object.prototype.hasOwnProperty.call(e, a) && void 0 === t[a] && (!i || void 0 === t["_" + a]) && r.push(a);
                                for (a in t)
                                    if (Object.prototype.hasOwnProperty.call(t, a)) {
                                        var s = t[a];
                                        G(s) && 3 === s[2] && (o[s[1].toString()] = {
                                            key: a,
                                            value: e && e[parseInt(a.substr(1))]
                                        }, !1 !== this.includeMoveDestinations && void 0 === e && void 0 === t[s[1]] && r.push(s[1].toString()))
                                    }
                                i ? r.sort(te) : r.sort();
                                for (var f = 0, l = r.length; f < l; f++) {
                                    var h = r[f];
                                    if (!i || "_t" !== h) {
                                        var u = i ? "number" == typeof h ? h : parseInt("_" === h.substr(0, 1) ? h.slice(1) : h, 10) : h,
                                            c = f === l - 1;
                                        n(h, u, o[u], c)
                                    }
                                }
                            }
                        }, {
                            key: "getDeltaType",
                            value: function(t, e) {
                                if (void 0 === t) return void 0 !== e ? "movedestination" : "unchanged";
                                if (G(t)) {
                                    if (1 === t.length) return "added";
                                    if (2 === t.length) return "modified";
                                    if (3 === t.length && 0 === t[2]) return "deleted";
                                    if (3 === t.length && 2 === t[2]) return "textdiff";
                                    if (3 === t.length && 3 === t[2]) return "moved"
                                } else if ((void 0 === t ? "undefined" : r(t)) === "object") return "node";
                                return "unknown"
                            }
                        }, {
                            key: "parseTextDiff",
                            value: function(t) {
                                for (var e = [], n = t.split("\n@@ "), r = 0, i = n.length; r < i; r++) {
                                    var o = n[r],
                                        a = {
                                            pieces: []
                                        },
                                        s = /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(o).slice(1);
                                    a.location = {
                                        line: s[0],
                                        chr: s[1]
                                    };
                                    for (var f = o.split("\n").slice(1), l = 0, h = f.length; l < h; l++) {
                                        var u = f[l];
                                        if (u.length) {
                                            var c = {
                                                type: "context"
                                            };
                                            "+" === u.substr(0, 1) ? c.type = "added" : "-" === u.substr(0, 1) && (c.type = "deleted"), c.text = u.slice(1), a.pieces.push(c)
                                        }
                                    }
                                    e.push(a)
                                }
                                return e
                            }
                        }]), t
                    }(),
                    tr = Object.freeze({
                        default: tn
                    }),
                    ti = function(t) {
                        function e() {
                            return i(this, e), f(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments))
                        }
                        return s(e, t), o(e, [{
                            key: "typeFormattterErrorFormatter",
                            value: function(t, e) {
                                t.out('<pre class="jsondiffpatch-error">' + e + "</pre>")
                            }
                        }, {
                            key: "formatValue",
                            value: function(t, e) {
                                t.out("<pre>" + to(JSON.stringify(e, null, 2)) + "</pre>")
                            }
                        }, {
                            key: "formatTextDiffString",
                            value: function(t, e) {
                                var n = this.parseTextDiff(e);
                                t.out('<ul class="jsondiffpatch-textdiff">');
                                for (var r = 0, i = n.length; r < i; r++) {
                                    var o = n[r];
                                    t.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + o.location.line + '</span><span class="jsondiffpatch-textdiff-char">') + o.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">');
                                    for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                                        var l = a[s];
                                        t.out('<span class="jsondiffpatch-textdiff-' + l.type + '">' + to(decodeURI(l.text)) + "</span>")
                                    }
                                    t.out("</div></li>")
                                }
                                t.out("</ul>")
                            }
                        }, {
                            key: "rootBegin",
                            value: function(t, e, n) {
                                t.out('<div class="jsondiffpatch-delta jsondiffpatch-' + e + (n ? " jsondiffpatch-child-node-type-" + n : "") + '">')
                            }
                        }, {
                            key: "rootEnd",
                            value: function(t) {
                                t.out("</div>" + (t.hasArrows ? '<script type="text/javascript">setTimeout(' + ta.toString() + ",10);<\/script>" : ""))
                            }
                        }, {
                            key: "nodeBegin",
                            value: function(t, e, n, r, i) {
                                t.out('<li class="jsondiffpatch-' + r + (i ? " jsondiffpatch-child-node-type-" + i : "") + '" data-key="' + n + '"><div class="jsondiffpatch-property-name">' + n + "</div>")
                            }
                        }, {
                            key: "nodeEnd",
                            value: function(t) {
                                t.out("</li>")
                            }
                        }, {
                            key: "format_unchanged",
                            value: function(t, e, n) {
                                void 0 !== n && (t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, n), t.out("</div>"))
                            }
                        }, {
                            key: "format_movedestination",
                            value: function(t, e, n) {
                                void 0 !== n && (t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, n), t.out("</div>"))
                            }
                        }, {
                            key: "format_node",
                            value: function(t, e, n) {
                                var r = "a" === e._t ? "array" : "object";
                                t.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + r + '">'), this.formatDeltaChildren(t, e, n), t.out("</ul>")
                            }
                        }, {
                            key: "format_added",
                            value: function(t, e) {
                                t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out("</div>")
                            }
                        }, {
                            key: "format_modified",
                            value: function(t, e) {
                                t.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">'), this.formatValue(t, e[0]), t.out('</div><div class="jsondiffpatch-value jsondiffpatch-right-value">'), this.formatValue(t, e[1]), t.out("</div>")
                            }
                        }, {
                            key: "format_deleted",
                            value: function(t, e) {
                                t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out("</div>")
                            }
                        }, {
                            key: "format_moved",
                            value: function(t, e) {
                                t.out('<div class="jsondiffpatch-value">'), this.formatValue(t, e[0]), t.out('</div><div class="jsondiffpatch-moved-destination">' + e[1] + "</div>"), t.out('<div class="jsondiffpatch-arrow" style="position: relative; left: -34px;">\n          <svg width="30" height="60" style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>'), t.hasArrows = !0
                            }
                        }, {
                            key: "format_textdiff",
                            value: function(t, e) {
                                t.out('<div class="jsondiffpatch-value">'), this.formatTextDiffString(t, e[0]), t.out("</div>")
                            }
                        }]), e
                    }(tn);

                function to(t) {
                    for (var e = t, n = [
                            [/&/g, "&amp;"],
                            [/</g, "&lt;"],
                            [/>/g, "&gt;"],
                            [/'/g, "&apos;"],
                            [/"/g, "&quot;"]
                        ], r = 0; r < n.length; r++) e = e.replace(n[r][0], n[r][1]);
                    return e
                }
                var ta = function(t) {
                        var e = function(t) {
                                var e = t.textContent,
                                    n = t.innerText;
                                return e || n
                            },
                            n = function(t, e) {
                                for (var n = t.children, r = 0, i = n.length; r < i; r++) e(n[r], r)
                            };
                        ! function(t, e, n) {
                            for (var r = t.querySelectorAll(e), i = 0, o = r.length; i < o; i++) n(r[i])
                        }(t || document, ".jsondiffpatch-arrow", function(t) {
                            var r = t.parentNode,
                                i = t.children,
                                o = t.style,
                                a = i[0],
                                s = a.children[1];
                            a.style.display = "none";
                            var f = e(r.querySelector(".jsondiffpatch-moved-destination")),
                                l = r.parentNode,
                                h = void 0;
                            if (n(l, function(t) {
                                    t.getAttribute("data-key") === f && (h = t)
                                }), h) try {
                                var u = h.offsetTop - r.offsetTop;
                                a.setAttribute("height", Math.abs(u) + 6), o.top = -8 + (u > 0 ? 0 : u) + "px";
                                var c = u > 0 ? "M30,0 Q-10," + Math.round(u / 2) + " 26," + (u - 4) : "M30," + -u + " Q-10," + Math.round(-u / 2) + " 26,4";
                                s.setAttribute("d", c), a.style.display = ""
                            } catch (t) {}
                        })
                    },
                    ts = function(t, e, n) {
                        var r = e || document.body,
                            i = "jsondiffpatch-unchanged-",
                            o = {
                                showing: i + "showing",
                                hiding: i + "hiding",
                                visible: i + "visible",
                                hidden: i + "hidden"
                            },
                            a = r.classList;
                        if (a) {
                            if (!n) {
                                a.remove(o.showing), a.remove(o.hiding), a.remove(o.visible), a.remove(o.hidden), !1 === t && a.add(o.hidden);
                                return
                            }!1 === t ? (a.remove(o.showing), a.add(o.visible), setTimeout(function() {
                                a.add(o.hiding)
                            }, 10)) : (a.remove(o.hiding), a.add(o.showing), a.remove(o.hidden));
                            var s = setInterval(function() {
                                ta(r)
                            }, 100);
                            setTimeout(function() {
                                a.remove(o.showing), a.remove(o.hiding), !1 === t ? (a.add(o.hidden), a.remove(o.visible)) : (a.add(o.visible), a.remove(o.hidden)), setTimeout(function() {
                                    a.remove(o.visible), clearInterval(s)
                                }, n + 400)
                            }, n)
                        }
                    },
                    tf = void 0,
                    tl = Object.freeze({
                        showUnchanged: ts,
                        hideUnchanged: function(t, e) {
                            return ts(!1, t, e)
                        },
                        default: ti,
                        format: function(t, e) {
                            return tf || (tf = new ti), tf.format(t, e)
                        }
                    }),
                    th = function(t) {
                        function e() {
                            i(this, e);
                            var t = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return t.includeMoveDestinations = !1, t
                        }
                        return s(e, t), o(e, [{
                            key: "prepareContext",
                            value: function(t) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.indent = function(t) {
                                    this.indentLevel = (this.indentLevel || 0) + (void 0 === t ? 1 : t), this.indentPad = Array(this.indentLevel + 1).join("&nbsp;&nbsp;")
                                }, t.row = function(e, n) {
                                    t.out('<tr><td style="white-space: nowrap;"><pre class="jsondiffpatch-annotated-indent" style="display: inline-block">'), t.out(t.indentPad), t.out('</pre><pre style="display: inline-block">'), t.out(e), t.out('</pre></td><td class="jsondiffpatch-delta-note"><div>'), t.out(n), t.out("</div></td></tr>")
                                }
                            }
                        }, {
                            key: "typeFormattterErrorFormatter",
                            value: function(t, e) {
                                t.row("", '<pre class="jsondiffpatch-error">' + e + "</pre>")
                            }
                        }, {
                            key: "formatTextDiffString",
                            value: function(t, e) {
                                var n = this.parseTextDiff(e);
                                t.out('<ul class="jsondiffpatch-textdiff">');
                                for (var r = 0, i = n.length; r < i; r++) {
                                    var o = n[r];
                                    t.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + o.location.line + '</span><span class="jsondiffpatch-textdiff-char">') + o.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">');
                                    for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                                        var l = a[s];
                                        t.out('<span class="jsondiffpatch-textdiff-' + l.type + '">' + l.text + "</span>")
                                    }
                                    t.out("</div></li>")
                                }
                                t.out("</ul>")
                            }
                        }, {
                            key: "rootBegin",
                            value: function(t, e, n) {
                                t.out('<table class="jsondiffpatch-annotated-delta">'), "node" === e && (t.row("{"), t.indent()), "array" === n && t.row('"_t": "a",', "Array delta (member names indicate array indices)")
                            }
                        }, {
                            key: "rootEnd",
                            value: function(t, e) {
                                "node" === e && (t.indent(-1), t.row("}")), t.out("</table>")
                            }
                        }, {
                            key: "nodeBegin",
                            value: function(t, e, n, r, i) {
                                t.row("&quot;" + e + "&quot;: {"), "node" === r && t.indent(), "array" === i && t.row('"_t": "a",', "Array delta (member names indicate array indices)")
                            }
                        }, {
                            key: "nodeEnd",
                            value: function(t, e, n, r, i, o) {
                                "node" === r && t.indent(-1), t.row("}" + (o ? "" : ","))
                            }
                        }, {
                            key: "format_unchanged",
                            value: function() {}
                        }, {
                            key: "format_movedestination",
                            value: function() {}
                        }, {
                            key: "format_node",
                            value: function(t, e, n) {
                                this.formatDeltaChildren(t, e, n)
                            }
                        }]), e
                    }(tn),
                    tu = function(t) {
                        return '<pre style="display:inline-block">&quot;' + t + "&quot;</pre>"
                    },
                    tc = {
                        added: function(t, e, n, r) {
                            var i = " <pre>([newValue])</pre>";
                            return void 0 === r ? "new value" + i : "number" == typeof r ? "insert at index " + r + i : "add property " + tu(r) + i
                        },
                        modified: function(t, e, n, r) {
                            var i = " <pre>([previousValue, newValue])</pre>";
                            return void 0 === r ? "modify value" + i : "number" == typeof r ? "modify at index " + r + i : "modify property " + tu(r) + i
                        },
                        deleted: function(t, e, n, r) {
                            var i = " <pre>([previousValue, 0, 0])</pre>";
                            return void 0 === r ? "delete value" + i : "number" == typeof r ? "remove index " + r + i : "delete property " + tu(r) + i
                        },
                        moved: function(t, e, n, r) {
                            return 'move from <span title="(position to remove at original state)">index ' + r + '</span> to <span title="(position to insert at final state)">index ' + t[1] + "</span>"
                        },
                        textdiff: function(t, e, n, r) {
                            return "text diff" + (void 0 === r ? "" : "number" == typeof r ? " at index " + r : " at property " + tu(r)) + ', format is <a href="https://code.google.com/p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>'
                        }
                    },
                    td = function(t, e) {
                        var n = this.getDeltaType(e),
                            r = tc[n],
                            i = r && r.apply(r, Array.prototype.slice.call(arguments, 1)),
                            o = JSON.stringify(e, null, 2);
                        "textdiff" === n && (o = o.split("\\n").join('\\n"+\n   "')), t.indent(), t.row(o, i), t.indent(-1)
                    };
                th.prototype.format_added = td, th.prototype.format_modified = td, th.prototype.format_deleted = td, th.prototype.format_moved = td, th.prototype.format_textdiff = td;
                var tp = void 0,
                    tv = Object.freeze({
                        default: th,
                        format: function(t, e) {
                            return tp || (tp = new th), tp.format(t, e)
                        }
                    }),
                    tg = function(t) {
                        function e() {
                            i(this, e);
                            var t = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return t.includeMoveDestinations = !0, t
                        }
                        return s(e, t), o(e, [{
                            key: "prepareContext",
                            value: function(t) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.result = [], t.path = [], t.pushCurrentOp = function(t) {
                                    var e = t.op,
                                        n = t.value,
                                        r = {
                                            op: e,
                                            path: this.currentPath()
                                        };
                                    void 0 !== n && (r.value = n), this.result.push(r)
                                }, t.pushMoveOp = function(t) {
                                    var e = this.currentPath();
                                    this.result.push({
                                        op: "move",
                                        from: e,
                                        path: this.toPath(t)
                                    })
                                }, t.currentPath = function() {
                                    return "/" + this.path.join("/")
                                }, t.toPath = function(t) {
                                    var e = this.path.slice();
                                    return e[e.length - 1] = t, "/" + e.join("/")
                                }
                            }
                        }, {
                            key: "typeFormattterErrorFormatter",
                            value: function(t, e) {
                                t.out("[ERROR] " + e)
                            }
                        }, {
                            key: "rootBegin",
                            value: function() {}
                        }, {
                            key: "rootEnd",
                            value: function() {}
                        }, {
                            key: "nodeBegin",
                            value: function(t, e, n) {
                                t.path.push(n)
                            }
                        }, {
                            key: "nodeEnd",
                            value: function(t) {
                                t.path.pop()
                            }
                        }, {
                            key: "format_unchanged",
                            value: function() {}
                        }, {
                            key: "format_movedestination",
                            value: function() {}
                        }, {
                            key: "format_node",
                            value: function(t, e, n) {
                                this.formatDeltaChildren(t, e, n)
                            }
                        }, {
                            key: "format_added",
                            value: function(t, e) {
                                t.pushCurrentOp({
                                    op: "add",
                                    value: e[0]
                                })
                            }
                        }, {
                            key: "format_modified",
                            value: function(t, e) {
                                t.pushCurrentOp({
                                    op: "replace",
                                    value: e[1]
                                })
                            }
                        }, {
                            key: "format_deleted",
                            value: function(t) {
                                t.pushCurrentOp({
                                    op: "remove"
                                })
                            }
                        }, {
                            key: "format_moved",
                            value: function(t, e) {
                                var n = e[1];
                                t.pushMoveOp(n)
                            }
                        }, {
                            key: "format_textdiff",
                            value: function() {
                                throw Error("Not implemented")
                            }
                        }, {
                            key: "format",
                            value: function(t, e) {
                                var n = {};
                                return this.prepareContext(n), this.recurse(n, t, e), n.result
                            }
                        }]), e
                    }(tn),
                    ty = function(t) {
                        return t[t.length - 1]
                    },
                    tm = function(t, e) {
                        var n = parseInt(t, 10),
                            r = parseInt(e, 10);
                        return isNaN(n) || isNaN(r) ? 0 : r - n
                    },
                    t_ = function(t) {
                        var e;
                        return e = function(t, e) {
                            var n = t.path.split("/"),
                                r = e.path.split("/");
                            return n.length !== r.length ? n.length - r.length : tm(ty(n), ty(r))
                        }, t.sort(e), t
                    },
                    tb = function(t, e) {
                        var n = Array(e.length + 1).fill().map(function() {
                            return []
                        });
                        return t.map(function(t) {
                            var n = e.map(function(e) {
                                return e(t)
                            }).indexOf(!0);
                            return n < 0 && (n = e.length), {
                                item: t,
                                position: n
                            }
                        }).reduce(function(t, e) {
                            return t[e.position].push(e.item), t
                        }, n)
                    },
                    tx = function(t) {
                        return "move" === t.op
                    },
                    tk = function(t) {
                        return "remove" === t.op
                    },
                    tw = function(t) {
                        var e = l(tb(t, [tx, tk]), 3),
                            n = e[0],
                            r = e[1],
                            i = e[2];
                        return [].concat(h(t_(r)), h(n), h(i))
                    },
                    tj = void 0,
                    tA = function(t, e) {
                        return tj || (tj = new tg), tw(tj.format(t, e))
                    },
                    tO = Object.freeze({
                        default: tg,
                        partitionOps: tb,
                        format: tA,
                        log: function(t, e) {
                            console.log(tA(t, e))
                        }
                    });

                function tM(t) {
                    return e && e[t] || function() {
                        for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                        return e
                    }
                }
                var tC = {
                        added: tM("green"),
                        deleted: tM("red"),
                        movedestination: tM("gray"),
                        moved: tM("yellow"),
                        unchanged: tM("gray"),
                        error: tM("white.bgRed"),
                        textDiffLine: tM("gray")
                    },
                    tR = function(t) {
                        function e() {
                            i(this, e);
                            var t = f(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
                            return t.includeMoveDestinations = !1, t
                        }
                        return s(e, t), o(e, [{
                            key: "prepareContext",
                            value: function(t) {
                                a(e.prototype.__proto__ || Object.getPrototypeOf(e.prototype), "prepareContext", this).call(this, t), t.indent = function(t) {
                                    this.indentLevel = (this.indentLevel || 0) + (void 0 === t ? 1 : t), this.indentPad = Array(this.indentLevel + 1).join("  "), this.outLine()
                                }, t.outLine = function() {
                                    this.buffer.push("\n" + (this.indentPad || ""))
                                }, t.out = function() {
                                    for (var t = arguments.length, e = Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                                    for (var r = 0, i = e.length; r < i; r++) {
                                        var o = e[r].split("\n").join("\n" + (this.indentPad || ""));
                                        this.color && this.color[0] && (o = this.color[0](o)), this.buffer.push(o)
                                    }
                                }, t.pushColor = function(t) {
                                    this.color = this.color || [], this.color.unshift(t)
                                }, t.popColor = function() {
                                    this.color = this.color || [], this.color.shift()
                                }
                            }
                        }, {
                            key: "typeFormattterErrorFormatter",
                            value: function(t, e) {
                                t.pushColor(tC.error), t.out("[ERROR]" + e), t.popColor()
                            }
                        }, {
                            key: "formatValue",
                            value: function(t, e) {
                                t.out(JSON.stringify(e, null, 2))
                            }
                        }, {
                            key: "formatTextDiffString",
                            value: function(t, e) {
                                var n = this.parseTextDiff(e);
                                t.indent();
                                for (var r = 0, i = n.length; r < i; r++) {
                                    var o = n[r];
                                    t.pushColor(tC.textDiffLine), t.out(o.location.line + "," + o.location.chr + " "), t.popColor();
                                    for (var a = o.pieces, s = 0, f = a.length; s < f; s++) {
                                        var l = a[s];
                                        t.pushColor(tC[l.type]), t.out(l.text), t.popColor()
                                    }
                                    r < i - 1 && t.outLine()
                                }
                                t.indent(-1)
                            }
                        }, {
                            key: "rootBegin",
                            value: function(t, e, n) {
                                t.pushColor(tC[e]), "node" === e && (t.out("array" === n ? "[" : "{"), t.indent())
                            }
                        }, {
                            key: "rootEnd",
                            value: function(t, e, n) {
                                "node" === e && (t.indent(-1), t.out("array" === n ? "]" : "}")), t.popColor()
                            }
                        }, {
                            key: "nodeBegin",
                            value: function(t, e, n, r, i) {
                                t.pushColor(tC[r]), t.out(n + ": "), "node" === r && (t.out("array" === i ? "[" : "{"), t.indent())
                            }
                        }, {
                            key: "nodeEnd",
                            value: function(t, e, n, r, i, o) {
                                "node" === r && (t.indent(-1), t.out("array" === i ? "]" : "}" + (o ? "" : ","))), o || t.outLine(), t.popColor()
                            }
                        }, {
                            key: "format_unchanged",
                            value: function(t, e, n) {
                                void 0 !== n && this.formatValue(t, n)
                            }
                        }, {
                            key: "format_movedestination",
                            value: function(t, e, n) {
                                void 0 !== n && this.formatValue(t, n)
                            }
                        }, {
                            key: "format_node",
                            value: function(t, e, n) {
                                this.formatDeltaChildren(t, e, n)
                            }
                        }, {
                            key: "format_added",
                            value: function(t, e) {
                                this.formatValue(t, e[0])
                            }
                        }, {
                            key: "format_modified",
                            value: function(t, e) {
                                t.pushColor(tC.deleted), this.formatValue(t, e[0]), t.popColor(), t.out(" => "), t.pushColor(tC.added), this.formatValue(t, e[1]), t.popColor()
                            }
                        }, {
                            key: "format_deleted",
                            value: function(t, e) {
                                this.formatValue(t, e[0])
                            }
                        }, {
                            key: "format_moved",
                            value: function(t, e) {
                                t.out("==> " + e[1])
                            }
                        }, {
                            key: "format_textdiff",
                            value: function(t, e) {
                                this.formatTextDiffString(t, e[0])
                            }
                        }]), e
                    }(tn),
                    tE = void 0,
                    tP = function(t, e) {
                        return tE || (tE = new tR), tE.format(t, e)
                    },
                    tD = Object.freeze({
                        default: tR,
                        format: tP,
                        log: function(t, e) {
                            console.log(tP(t, e))
                        }
                    }),
                    tT = Object.freeze({
                        base: tr,
                        html: tl,
                        annotated: tv,
                        jsonpatch: tO,
                        console: tD
                    }),
                    tN = void 0;
                t.DiffPatcher = X, t.formatters = tT, t.console = tD, t.create = function(t) {
                    return new X(t)
                }, t.dateReviver = function(t, e) {
                    var n = void 0;
                    return "string" == typeof e && (n = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d*))?(Z|([+-])(\d{2}):(\d{2}))$/.exec(e)) ? new Date(Date.UTC(+n[1], n[2] - 1, +n[3], +n[4], +n[5], +n[6], +(n[7] || 0))) : e
                }, t.diff = function() {
                    return tN || (tN = new X), tN.diff.apply(tN, arguments)
                }, t.patch = function() {
                    return tN || (tN = new X), tN.patch.apply(tN, arguments)
                }, t.unpatch = function() {
                    return tN || (tN = new X), tN.unpatch.apply(tN, arguments)
                }, t.reverse = function() {
                    return tN || (tN = new X), tN.reverse.apply(tN, arguments)
                }, t.clone = function() {
                    return tN || (tN = new X), tN.clone.apply(tN, arguments)
                }, Object.defineProperty(t, "__esModule", {
                    value: !0
                })
            }(e, n(466230))
        },
        466230: () => {}
    }
]);