(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [71136], {
        471136: function(t, e, r) {
            var n;
            ! function(o, i, s, a) {
                i[o] = s.call(i);
                for (var c = 0; c < a.length; c++) a[c](i[o]);
                t.exports ? t.exports = i[o] : void 0 === (n = (function() {
                    return i[o]
                }).call(e, r, e, t)) || (t.exports = n)
            }("Primus", this || {}, function() {
                var t;
                return (function t(e, r, n) {
                    function o(s, a) {
                        if (!r[s]) {
                            if (!e[s]) {
                                if (i) return i(s, !0);
                                var c = Error(`Cannot find module '${s}'`);
                                throw c.code = "MODULE_NOT_FOUND", c
                            }
                            var u = r[s] = {
                                exports: {}
                            };
                            e[s][0].call(u.exports, function(t) {
                                return o(e[s][1][t] || t)
                            }, u, u.exports, t, e, r, n)
                        }
                        return r[s].exports
                    }
                    for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
                    return o
                })({
                    1: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t, e) {
                            var r = /[, ]+/;

                            function n(t, n) {
                                if (e[t]) {
                                    if ("string" == typeof e[t] && (e[t] = e[t].split(r)), "function" == typeof e[t]) return e[t].call(n);
                                    for (var o, i, s = 0; s < e[t].length; s++) "function" == (o = typeof(i = e[t][s])) ? i.call(n) : "string" === o && "function" == typeof n[i] && n[i]()
                                }
                            }
                            return e = e || {}, "string" == typeof(t = t || []) && (t = t.split(r)),
                                function() {
                                    var e, r = 0;
                                    if (null === this[t[0]]) return !1;
                                    for (n("before", this); r < t.length; r++) this[e = t[r]] && ("function" == typeof this[e].destroy && this[e].destroy(), this[e] = null);
                                    return this.emit && this.emit("destroy"), n("after", this), !0
                                }
                        }
                    }, {}],
                    2: [function(t, e, r) {
                        "use strict";
                        e.exports = function() {
                            for (var t, e = this, r = 0, n = arguments.length, o = Array(n); r < n; r++) o[r] = arguments[r];
                            return "function" != typeof o[o.length - 1] ? function() {
                                for (var t = 0, r = arguments.length, n = Array(r); t < r; t++) n[t] = arguments[t];
                                return e.emit.apply(e, o.concat(n))
                            } : (t = o.pop(), function() {
                                for (var r = 0, n = arguments.length, i = Array(n + 1); r < n; r++) i[r + 1] = arguments[r];
                                return i[0] = function(t, r) {
                                    if (t) return e.emit("error", t);
                                    i = void 0 === r ? i.slice(1) : null === r ? [] : r, e.emit.apply(e, o.concat(i))
                                }, t.apply(e, i), !0
                            })
                        }
                    }, {}],
                    3: [function(t, e, r) {
                        "use strict";
                        var n = Object.prototype.hasOwnProperty,
                            o = "~";

                        function i() {}

                        function s(t, e, r) {
                            this.fn = t, this.context = e, this.once = r || !1
                        }

                        function a(t, e, r, n, i) {
                            if ("function" != typeof r) throw TypeError("The listener must be a function");
                            var a = new s(r, n || t, i),
                                c = o ? o + e : e;
                            return t._events[c] ? t._events[c].fn ? t._events[c] = [t._events[c], a] : t._events[c].push(a) : (t._events[c] = a, t._eventsCount++), t
                        }

                        function c(t, e) {
                            0 == --t._eventsCount ? t._events = new i : delete t._events[e]
                        }

                        function u() {
                            this._events = new i, this._eventsCount = 0
                        }
                        Object.create && (i.prototype = Object.create(null), new i().__proto__ || (o = !1)), u.prototype.eventNames = function() {
                            var t, e, r = [];
                            if (0 === this._eventsCount) return r;
                            for (e in t = this._events) n.call(t, e) && r.push(o ? e.slice(1) : e);
                            return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(t)) : r
                        }, u.prototype.listeners = function(t) {
                            var e = o ? o + t : t,
                                r = this._events[e];
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var n = 0, i = r.length, s = Array(i); n < i; n++) s[n] = r[n].fn;
                            return s
                        }, u.prototype.listenerCount = function(t) {
                            var e = o ? o + t : t,
                                r = this._events[e];
                            return r ? r.fn ? 1 : r.length : 0
                        }, u.prototype.emit = function(t, e, r, n, i, s) {
                            var a = o ? o + t : t;
                            if (!this._events[a]) return !1;
                            var c, u, l = this._events[a],
                                p = arguments.length;
                            if (l.fn) {
                                switch (l.once && this.removeListener(t, l.fn, void 0, !0), p) {
                                    case 1:
                                        return l.fn.call(l.context), !0;
                                    case 2:
                                        return l.fn.call(l.context, e), !0;
                                    case 3:
                                        return l.fn.call(l.context, e, r), !0;
                                    case 4:
                                        return l.fn.call(l.context, e, r, n), !0;
                                    case 5:
                                        return l.fn.call(l.context, e, r, n, i), !0;
                                    case 6:
                                        return l.fn.call(l.context, e, r, n, i, s), !0
                                }
                                for (u = 1, c = Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
                                l.fn.apply(l.context, c)
                            } else {
                                var f, h = l.length;
                                for (u = 0; u < h; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), p) {
                                    case 1:
                                        l[u].fn.call(l[u].context);
                                        break;
                                    case 2:
                                        l[u].fn.call(l[u].context, e);
                                        break;
                                    case 3:
                                        l[u].fn.call(l[u].context, e, r);
                                        break;
                                    case 4:
                                        l[u].fn.call(l[u].context, e, r, n);
                                        break;
                                    default:
                                        if (!c)
                                            for (f = 1, c = Array(p - 1); f < p; f++) c[f - 1] = arguments[f];
                                        l[u].fn.apply(l[u].context, c)
                                }
                            }
                            return !0
                        }, u.prototype.on = function(t, e, r) {
                            return a(this, t, e, r, !1)
                        }, u.prototype.once = function(t, e, r) {
                            return a(this, t, e, r, !0)
                        }, u.prototype.removeListener = function(t, e, r, n) {
                            var i = o ? o + t : t;
                            if (!this._events[i]) return this;
                            if (!e) return c(this, i), this;
                            var s = this._events[i];
                            if (s.fn) s.fn !== e || n && !s.once || r && s.context !== r || c(this, i);
                            else {
                                for (var a = 0, u = [], l = s.length; a < l; a++)(s[a].fn !== e || n && !s[a].once || r && s[a].context !== r) && u.push(s[a]);
                                u.length ? this._events[i] = 1 === u.length ? u[0] : u : c(this, i)
                            }
                            return this
                        }, u.prototype.removeAllListeners = function(t) {
                            var e;
                            return t ? (e = o ? o + t : t, this._events[e] && c(this, e)) : (this._events = new i, this._eventsCount = 0), this
                        }, u.prototype.off = u.prototype.removeListener, u.prototype.addListener = u.prototype.on, u.prefixed = o, u.EventEmitter = u, void 0 !== e && (e.exports = u)
                    }, {}],
                    4: [function(t, e, r) {
                        "function" == typeof Object.create ? e.exports = function(t, e) {
                            e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
                                constructor: {
                                    value: t,
                                    enumerable: !1,
                                    writable: !0,
                                    configurable: !0
                                }
                            }))
                        } : e.exports = function(t, e) {
                            if (e) {
                                t.super_ = e;
                                var r = function() {};
                                r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t
                            }
                        }
                    }, {}],
                    5: [function(t, e, r) {
                        "use strict";
                        var n = RegExp("^((?:\\d+)?\\.?\\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|wks?|w|years?|yrs?|y)?$", "i");
                        e.exports = function(t) {
                            var e, r, o = typeof t;
                            if ("number" === o) return t;
                            if ("string" !== o || "0" === t || !t) return 0;
                            if (+t) return +t;
                            if (t.length > 1e4 || !(r = n.exec(t))) return 0;
                            switch (e = parseFloat(r[1]), r[2].toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 31536e6 * e;
                                case "weeks":
                                case "week":
                                case "wks":
                                case "wk":
                                case "w":
                                    return 6048e5 * e;
                                case "days":
                                case "day":
                                case "d":
                                    return 864e5 * e;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return 36e5 * e;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return 6e4 * e;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return 1e3 * e;
                                default:
                                    return e
                            }
                        }
                    }, {}],
                    6: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t) {
                            var e, r = 0;

                            function n() {
                                return r || (r = 1, e = t.apply(this, arguments), t = null), e
                            }
                            return n.displayName = t.displayName || t.name || n.displayName || n.name, n
                        }
                    }, {}],
                    7: [function(t, e, r) {
                        var n, o, i, s = e.exports = {};

                        function a() {
                            throw Error("setTimeout has not been defined")
                        }

                        function c() {
                            throw Error("clearTimeout has not been defined")
                        }
                        try {
                            n = "function" == typeof setTimeout ? setTimeout : a
                        } catch (t) {
                            n = a
                        }
                        try {
                            o = "function" == typeof clearTimeout ? clearTimeout : c
                        } catch (t) {
                            o = c
                        }

                        function u(t) {
                            if (n === setTimeout) return setTimeout(t, 0);
                            if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(t, 0);
                            try {
                                return n(t, 0)
                            } catch (e) {
                                try {
                                    return n.call(null, t, 0)
                                } catch (e) {
                                    return n.call(this, t, 0)
                                }
                            }
                        }
                        var l = [],
                            p = !1,
                            f = -1;

                        function h() {
                            p && i && (p = !1, i.length ? l = i.concat(l) : f = -1, l.length && y())
                        }

                        function y() {
                            if (!p) {
                                var t = u(h);
                                p = !0;
                                for (var e = l.length; e;) {
                                    for (i = l, l = []; ++f < e;) i && i[f].run();
                                    f = -1, e = l.length
                                }
                                i = null, p = !1,
                                    function(t) {
                                        if (o === clearTimeout) return clearTimeout(t);
                                        if ((o === c || !o) && clearTimeout) return o = clearTimeout, clearTimeout(t);
                                        try {
                                            o(t)
                                        } catch (e) {
                                            try {
                                                return o.call(null, t)
                                            } catch (e) {
                                                return o.call(this, t)
                                            }
                                        }
                                    }(t)
                            }
                        }

                        function m(t, e) {
                            this.fun = t, this.array = e
                        }

                        function d() {}
                        s.nextTick = function(t) {
                            var e = Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
                            l.push(new m(t, e)), 1 !== l.length || p || u(y)
                        }, m.prototype.run = function() {
                            this.fun.apply(null, this.array)
                        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = d, s.addListener = d, s.once = d, s.off = d, s.removeListener = d, s.removeAllListeners = d, s.emit = d, s.prependListener = d, s.prependOnceListener = d, s.listeners = function(t) {
                            return []
                        }, s.binding = function(t) {
                            throw Error("process.binding is not supported")
                        }, s.cwd = function() {
                            return "/"
                        }, s.chdir = function(t) {
                            throw Error("process.chdir is not supported")
                        }, s.umask = function() {
                            return 0
                        }
                    }, {}],
                    8: [function(t, e, r) {
                        "use strict";
                        var n, o = Object.prototype.hasOwnProperty;

                        function i(t) {
                            try {
                                return decodeURIComponent(t.replace(/\+/g, " "))
                            } catch (t) {
                                return null
                            }
                        }

                        function s(t) {
                            try {
                                return encodeURIComponent(t)
                            } catch (t) {
                                return null
                            }
                        }
                        r.stringify = function(t, e) {
                            var r, i, a = [];
                            for (i in "string" != typeof(e = e || "") && (e = "?"), t)
                                if (o.call(t, i)) {
                                    if (!(r = t[i]) && (null === r || r === n || isNaN(r)) && (r = ""), i = s(i), r = s(r), null === i || null === r) continue;
                                    a.push(`${i}=${r}`)
                                }
                            return a.length ? e + a.join("&") : ""
                        }, r.parse = function(t) {
                            for (var e, r = /([^=?#&]+)=?([^&]*)/g, n = {}; e = r.exec(t);) {
                                var o = i(e[1]),
                                    s = i(e[2]);
                                null === o || null === s || o in n || (n[o] = s)
                            }
                            return n
                        }
                    }, {}],
                    9: [function(t, e, r) {
                        "use strict";
                        var n = t("eventemitter3"),
                            o = t("millisecond"),
                            i = t("demolish"),
                            s = t("tick-tock"),
                            a = t("one-time");

                        function c(t, e, r) {
                            return o(t in r ? r[t] : t in e ? e[t] : u[t])
                        }

                        function u(t) {
                            if (!(this instanceof u)) return new u(t);
                            t = t || {}, this.attempt = null, this._fn = null, this["reconnect timeout"] = c("reconnect timeout", this, t), this.retries = c("retries", this, t), this.factor = c("factor", this, t), this.max = c("max", this, t), this.min = c("min", this, t), this.timers = new s(this)
                        }
                        u.prototype = new n, u.prototype.constructor = u, u["reconnect timeout"] = "30 seconds", u.max = 1 / 0, u.min = "500 ms", u.retries = 10, u.factor = 2, u.prototype.reconnect = function() {
                            var t = this;
                            return t.backoff(function(e, r) {
                                if (r.duration = new Date - r.start, e) return t.emit("reconnect failed", e, r);
                                t.emit("reconnected", r)
                            }, t.attempt)
                        }, u.prototype.backoff = function(t, e) {
                            var r = this;
                            return (e = e || r.attempt || {}).backoff || ((e["reconnect timeout"] = c("reconnect timeout", r, e), e.retries = c("retries", r, e), e.factor = c("factor", r, e), e.max = c("max", r, e), e.min = c("min", r, e), e.start = +e.start || +new Date, e.duration = +e.duration || 0, e.attempt = +e.attempt || 0, e.attempt === e.retries) ? t.call(r, Error("Unable to recover"), e) : (e.backoff = !0, e.attempt++, r.attempt = e, e.scheduled = 1 !== e.attempt ? Math.min(Math.round((Math.random() + 1) * e.min * Math.pow(e.factor, e.attempt - 1)), e.max) : e.min, r.timers.setTimeout("reconnect", function() {
                                e.duration = new Date - e.start, e.backoff = !1, r.timers.clear("reconnect, timeout");
                                var n = r._fn = a(function(n) {
                                    if (r.reset(), n) return r.backoff(t, e);
                                    t.call(r, void 0, e)
                                });
                                r.emit("reconnect", e, n), r.timers.setTimeout("timeout", function() {
                                    var t = Error("Failed to reconnect in a timely manner");
                                    e.duration = new Date - e.start, r.emit("reconnect timeout", t, e), n(t)
                                }, e["reconnect timeout"])
                            }, e.scheduled), r.emit("reconnect scheduled", e))), r
                        }, u.prototype.reconnecting = function() {
                            return !!this.attempt
                        }, u.prototype.reconnected = function(t) {
                            return this._fn && this._fn(t), this
                        }, u.prototype.reset = function() {
                            return this._fn = this.attempt = null, this.timers.clear("reconnect, timeout"), this
                        }, u.prototype.destroy = i("timers attempt _fn"), e.exports = u
                    }, {
                        demolish: 1,
                        eventemitter3: 10,
                        millisecond: 5,
                        "one-time": 6,
                        "tick-tock": 12
                    }],
                    10: [function(t, e, r) {
                        "use strict";
                        var n = "function" != typeof Object.create && "~";

                        function o(t, e, r) {
                            this.fn = t, this.context = e, this.once = r || !1
                        }

                        function i() {}
                        i.prototype._events = void 0, i.prototype.listeners = function(t, e) {
                            var r = this._events && this._events[n ? n + t : t];
                            if (e) return !!r;
                            if (!r) return [];
                            if (r.fn) return [r.fn];
                            for (var o = 0, i = r.length, s = Array(i); o < i; o++) s[o] = r[o].fn;
                            return s
                        }, i.prototype.emit = function(t, e, r, o, i, s) {
                            var a = n ? n + t : t;
                            if (!this._events || !this._events[a]) return !1;
                            var c, u, l = this._events[a],
                                p = arguments.length;
                            if ("function" == typeof l.fn) {
                                switch (l.once && this.removeListener(t, l.fn, void 0, !0), p) {
                                    case 1:
                                        return l.fn.call(l.context), !0;
                                    case 2:
                                        return l.fn.call(l.context, e), !0;
                                    case 3:
                                        return l.fn.call(l.context, e, r), !0;
                                    case 4:
                                        return l.fn.call(l.context, e, r, o), !0;
                                    case 5:
                                        return l.fn.call(l.context, e, r, o, i), !0;
                                    case 6:
                                        return l.fn.call(l.context, e, r, o, i, s), !0
                                }
                                for (u = 1, c = Array(p - 1); u < p; u++) c[u - 1] = arguments[u];
                                l.fn.apply(l.context, c)
                            } else {
                                var f, h = l.length;
                                for (u = 0; u < h; u++) switch (l[u].once && this.removeListener(t, l[u].fn, void 0, !0), p) {
                                    case 1:
                                        l[u].fn.call(l[u].context);
                                        break;
                                    case 2:
                                        l[u].fn.call(l[u].context, e);
                                        break;
                                    case 3:
                                        l[u].fn.call(l[u].context, e, r);
                                        break;
                                    default:
                                        if (!c)
                                            for (f = 1, c = Array(p - 1); f < p; f++) c[f - 1] = arguments[f];
                                        l[u].fn.apply(l[u].context, c)
                                }
                            }
                            return !0
                        }, i.prototype.on = function(t, e, r) {
                            var i = new o(e, r || this),
                                s = n ? n + t : t;
                            return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : this._events[s] = i, this
                        }, i.prototype.once = function(t, e, r) {
                            var i = new o(e, r || this, !0),
                                s = n ? n + t : t;
                            return this._events || (this._events = n ? {} : Object.create(null)), this._events[s] ? this._events[s].fn ? this._events[s] = [this._events[s], i] : this._events[s].push(i) : this._events[s] = i, this
                        }, i.prototype.removeListener = function(t, e, r, o) {
                            var i = n ? n + t : t;
                            if (!this._events || !this._events[i]) return this;
                            var s = this._events[i],
                                a = [];
                            if (e)
                                if (s.fn)(s.fn !== e || o && !s.once || r && s.context !== r) && a.push(s);
                                else
                                    for (var c = 0, u = s.length; c < u; c++)(s[c].fn !== e || o && !s[c].once || r && s[c].context !== r) && a.push(s[c]);
                            return a.length ? this._events[i] = 1 === a.length ? a[0] : a : delete this._events[i], this
                        }, i.prototype.removeAllListeners = function(t) {
                            return this._events && (t ? delete this._events[n ? n + t : t] : this._events = n ? {} : Object.create(null)), this
                        }, i.prototype.off = i.prototype.removeListener, i.prototype.addListener = i.prototype.on, i.prototype.setMaxListeners = function() {
                            return this
                        }, i.prefixed = n, void 0 !== e && (e.exports = i)
                    }, {}],
                    11: [function(t, e, r) {
                        "use strict";
                        e.exports = function(t, e) {
                            if (e = e.split(":")[0], !(t *= 1)) return !1;
                            switch (e) {
                                case "http":
                                case "ws":
                                    return 80 !== t;
                                case "https":
                                case "wss":
                                    return 443 !== t;
                                case "ftp":
                                    return 21 !== t;
                                case "gopher":
                                    return 70 !== t;
                                case "file":
                                    return !1
                            }
                            return 0 !== t
                        }
                    }, {}],
                    12: [function(t, e, r) {
                        (function(r, n) {
                            (function() {
                                "use strict";
                                var o = Object.prototype.hasOwnProperty,
                                    i = t("millisecond");

                                function s(t, e, r, n) {
                                    this.start = +new Date, this.duration = r, this.clear = e, this.timer = t, this.fns = [n]
                                }

                                function a(t) {
                                    clearTimeout(t)
                                }

                                function c(t) {
                                    clearInterval(t)
                                }

                                function u(t) {
                                    n(t)
                                }

                                function l(t) {
                                    if (!(this instanceof l)) return new l(t);
                                    this.timers = {}, this.context = t || this
                                }
                                s.prototype.remaining = function() {
                                    return this.duration - this.taken()
                                }, s.prototype.taken = function() {
                                    return new Date - this.start
                                }, l.prototype.tock = function(t, e) {
                                    var r = this;
                                    return function() {
                                        if (t in r.timers) {
                                            var n = r.timers[t].fns.slice(),
                                                o = n.length,
                                                i = 0;
                                            for (e ? r.clear(t) : r.start = +new Date; i < o; i++) n[i].call(r.context)
                                        }
                                    }
                                }, l.prototype.setTimeout = function(t, e, r) {
                                    var n;
                                    return this.timers[t] ? this.timers[t].fns.push(e) : (n = i(r), this.timers[t] = new s(setTimeout(this.tock(t, !0), i(r)), a, n, e)), this
                                }, l.prototype.setInterval = function(t, e, r) {
                                    var n;
                                    return this.timers[t] ? this.timers[t].fns.push(e) : (n = i(r), this.timers[t] = new s(setInterval(this.tock(t), i(r)), c, n, e)), this
                                }, l.prototype.setImmediate = function(t, e) {
                                    return "function" != typeof r ? this.setTimeout(t, e, 0) : (this.timers[t] ? this.timers[t].fns.push(e) : this.timers[t] = new s(r(this.tock(t, !0)), u, 0, e), this)
                                }, l.prototype.active = function(t) {
                                    return t in this.timers
                                }, l.prototype.clear = function() {
                                    var t, e, r, n = arguments.length ? arguments : [];
                                    if (1 === n.length && "string" == typeof n[0] && (n = n[0].split(/[, ]+/)), !n.length)
                                        for (t in this.timers) o.call(this.timers, t) && n.push(t);
                                    for (e = 0, r = n.length; e < r; e++)(t = this.timers[n[e]]) && (t.clear(t.timer), t.fns = t.timer = t.clear = null, delete this.timers[n[e]]);
                                    return this
                                }, l.prototype.adjust = function(t, e) {
                                    var r, n = i(e),
                                        o = this.timers[t];
                                    return o && (r = o.clear === c, o.clear(o.timer), o.start = +new Date, o.duration = n, o.timer = (r ? setInterval : setTimeout)(this.tock(t, !r), n)), this
                                }, l.prototype.end = l.prototype.destroy = function() {
                                    return !!this.context && (this.clear(), this.context = this.timers = null, !0)
                                }, l.Timer = s, e.exports = l
                            }).call(this)
                        }).call(this, t("timers").setImmediate, t("timers").clearImmediate)
                    }, {
                        millisecond: 5,
                        timers: 13
                    }],
                    13: [function(t, e, r) {
                        (function(e, n) {
                            (function() {
                                var o = t("process/browser.js").nextTick,
                                    i = Function.prototype.apply,
                                    s = Array.prototype.slice,
                                    a = {},
                                    c = 0;

                                function u(t, e) {
                                    this._id = t, this._clearFn = e
                                }
                                r.setTimeout = function() {
                                    return new u(i.call(setTimeout, window, arguments), clearTimeout)
                                }, r.setInterval = function() {
                                    return new u(i.call(setInterval, window, arguments), clearInterval)
                                }, r.clearTimeout = r.clearInterval = function(t) {
                                    t.close()
                                }, u.prototype.unref = u.prototype.ref = function() {}, u.prototype.close = function() {
                                    this._clearFn.call(window, this._id)
                                }, r.enroll = function(t, e) {
                                    clearTimeout(t._idleTimeoutId), t._idleTimeout = e
                                }, r.unenroll = function(t) {
                                    clearTimeout(t._idleTimeoutId), t._idleTimeout = -1
                                }, r._unrefActive = r.active = function(t) {
                                    clearTimeout(t._idleTimeoutId);
                                    var e = t._idleTimeout;
                                    e >= 0 && (t._idleTimeoutId = setTimeout(function() {
                                        t._onTimeout && t._onTimeout()
                                    }, e))
                                }, r.setImmediate = "function" == typeof e ? e : function(t) {
                                    var e = c++,
                                        n = !(arguments.length < 2) && s.call(arguments, 1);
                                    return a[e] = !0, o(function() {
                                        a[e] && (n ? t.apply(null, n) : t.call(null), r.clearImmediate(e))
                                    }), e
                                }, r.clearImmediate = "function" == typeof n ? n : function(t) {
                                    delete a[t]
                                }
                            }).call(this)
                        }).call(this, t("timers").setImmediate, t("timers").clearImmediate)
                    }, {
                        "process/browser.js": 7,
                        timers: 13
                    }],
                    14: [function(t, e, n) {
                        (function(r) {
                            (function() {
                                "use strict";
                                var n = t("requires-port"),
                                    o = t("querystringify"),
                                    i = /^[A-Za-z][A-Za-z0-9+-.]*:[\\/]+/,
                                    s = /^([a-z][a-z0-9.+-]*:)?([\\/]{1,})?([\S\s]*)/i,
                                    a = RegExp("^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+");

                                function c(t) {
                                    return (t || "").toString().replace(a, "")
                                }
                                var u = [
                                        ["#", "hash"],
                                        ["?", "query"],
                                        function(t) {
                                            return t.replace("\\", "/")
                                        },
                                        ["/", "pathname"],
                                        ["@", "auth", 1],
                                        [NaN, "host", void 0, 1, 1],
                                        [/:(\d+)$/, "port", void 0, 1],
                                        [NaN, "hostname", void 0, 1, 1]
                                    ],
                                    l = {
                                        hash: 1,
                                        query: 1
                                    };

                                function p(t) {
                                    var e, n = ("u" > typeof window ? window : void 0 !== r ? r : "u" > typeof self ? self : {}).location || {},
                                        o = {},
                                        s = typeof(t = t || n);
                                    if ("blob:" === t.protocol) o = new h(unescape(t.pathname), {});
                                    else if ("string" === s)
                                        for (e in o = new h(t, {}), l) delete o[e];
                                    else if ("object" === s) {
                                        for (e in t) e in l || (o[e] = t[e]);
                                        void 0 === o.slashes && (o.slashes = i.test(t.href))
                                    }
                                    return o
                                }

                                function f(t) {
                                    t = c(t);
                                    var e = s.exec(t);
                                    return {
                                        protocol: e[1] ? e[1].toLowerCase() : "",
                                        slashes: !!(e[2] && e[2].length >= 2),
                                        rest: e[2] && 1 === e[2].length ? `/${e[3]}` : e[3]
                                    }
                                }

                                function h(t, e, r) {
                                    if (t = c(t), !(this instanceof h)) return new h(t, e, r);
                                    var i, s, a, l, y, m, d = u.slice(),
                                        v = typeof e,
                                        g = 0;
                                    for ("object" !== v && "string" !== v && (r = e, e = null), r && "function" != typeof r && (r = o.parse), e = p(e), i = !(s = f(t || "")).protocol && !s.slashes, this.slashes = s.slashes || i && e.slashes, this.protocol = s.protocol || e.protocol || "", t = s.rest, s.slashes || (d[3] = [/(.*)/, "pathname"]); g < d.length; g++) {
                                        if ("function" == typeof(l = d[g])) {
                                            t = l(t);
                                            continue
                                        }
                                        a = l[0], m = l[1], a != a ? this[m] = t : "string" == typeof a ? ~(y = t.indexOf(a)) && ("number" == typeof l[2] ? (this[m] = t.slice(0, y), t = t.slice(y + l[2])) : (this[m] = t.slice(y), t = t.slice(0, y))) : (y = a.exec(t)) && (this[m] = y[1], t = t.slice(0, y.index)), this[m] = this[m] || i && l[3] && e[m] || "", l[4] && (this[m] = this[m].toLowerCase())
                                    }
                                    r && (this.query = r(this.query)), i && e.slashes && "/" !== this.pathname.charAt(0) && ("" !== this.pathname || "" !== e.pathname) && (this.pathname = function(t, e) {
                                        if ("" === t) return e;
                                        for (var r = (e || "/").split("/").slice(0, -1).concat(t.split("/")), n = r.length, o = r[n - 1], i = !1, s = 0; n--;) "." === r[n] ? r.splice(n, 1) : ".." === r[n] ? (r.splice(n, 1), s++) : s && (0 === n && (i = !0), r.splice(n, 1), s--);
                                        return i && r.unshift(""), ("." === o || ".." === o) && r.push(""), r.join("/")
                                    }(this.pathname, e.pathname)), "/" !== this.pathname.charAt(0) && this.hostname && (this.pathname = `/${this.pathname}`), n(this.port, this.protocol) || (this.host = this.hostname, this.port = ""), this.username = this.password = "", this.auth && (l = this.auth.split(":"), this.username = l[0] || "", this.password = l[1] || ""), this.origin = this.protocol && this.host && "file:" !== this.protocol ? `${this.protocol}//${this.host}` : "null", this.href = this.toString()
                                }
                                h.prototype = {
                                    set: function(t, e, r) {
                                        switch (t) {
                                            case "query":
                                                "string" == typeof e && e.length && (e = (r || o.parse)(e)), this[t] = e;
                                                break;
                                            case "port":
                                                this[t] = e, n(e, this.protocol) ? e && (this.host = `${this.hostname}:${e}`) : (this.host = this.hostname, this[t] = "");
                                                break;
                                            case "hostname":
                                                this[t] = e, this.port && (e += `:${this.port}`), this.host = e;
                                                break;
                                            case "host":
                                                this[t] = e, /:\d+$/.test(e) ? (e = e.split(":"), this.port = e.pop(), this.hostname = e.join(":")) : (this.hostname = e, this.port = "");
                                                break;
                                            case "protocol":
                                                this.protocol = e.toLowerCase(), this.slashes = !r;
                                                break;
                                            case "pathname":
                                            case "hash":
                                                if (e) {
                                                    var i = "pathname" === t ? "/" : "#";
                                                    this[t] = e.charAt(0) !== i ? i + e : e
                                                } else this[t] = e;
                                                break;
                                            default:
                                                this[t] = e
                                        }
                                        for (var s = 0; s < u.length; s++) {
                                            var a = u[s];
                                            a[4] && (this[a[1]] = this[a[1]].toLowerCase())
                                        }
                                        return this.origin = this.protocol && this.host && "file:" !== this.protocol ? `${this.protocol}//${this.host}` : "null", this.href = this.toString(), this
                                    },
                                    toString: function(t) {
                                        t && "function" == typeof t || (t = o.stringify);
                                        var e, r = this.protocol;
                                        r && ":" !== r.charAt(r.length - 1) && (r += ":");
                                        var n = r + (this.slashes ? "//" : "");
                                        return this.username && (n += this.username, this.password && (n += `:${this.password}`), n += "@"), n += this.host + this.pathname, (e = "object" == typeof this.query ? t(this.query) : this.query) && (n += "?" !== e.charAt(0) ? `?${e}` : e), this.hash && (n += this.hash), n
                                    }
                                }, h.extractProtocol = f, h.location = p, h.trimLeft = c, h.qs = o, e.exports = h
                            }).call(this)
                        }).call(this, void 0 !== r.g ? r.g : "u" > typeof self ? self : "u" > typeof window ? window : {})
                    }, {
                        querystringify: 8,
                        "requires-port": 11
                    }],
                    15: [function(t, e, r) {
                        "use strict";
                        var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                            i = {},
                            s = 0,
                            a = 0;

                        function c(t) {
                            var e = "";
                            do e = o[t % 64] + e, t = Math.floor(t / 64); while (t > 0) return e
                        }

                        function u() {
                            var t = c(+new Date);
                            return t !== n ? (s = 0, n = t) : `${t}.${c(s++)}`
                        }
                        for (; a < 64; a++) i[o[a]] = a;
                        u.encode = c, u.decode = function(t) {
                            var e = 0;
                            for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
                            return e
                        }, e.exports = u
                    }, {}],
                    16: [function(e, r, n) {
                        "use strict";
                        var o, i = e("eventemitter3"),
                            s = e("tick-tock"),
                            a = e("recovery"),
                            c = e("querystringify"),
                            u = e("inherits"),
                            l = e("demolish"),
                            p = e("yeast"),
                            f = /\u2028/g,
                            h = /\u2029/g;

                        function y(t, e) {
                            if (!(t instanceof m)) {
                                var r = Error(`Primus#${e}'s context should called with a Primus instance`);
                                if ("function" != typeof t.listeners || !t.listeners("error").length) throw r;
                                t.emit("error", r)
                            }
                        }
                        try {
                            o = location.origin ? location.origin : `${location.protocol}//${location.host}`
                        } catch (t) {
                            o = "http://127.0.0.1"
                        }

                        function m(t, e) {
                            if (!(this instanceof m)) return new m(t, e);
                            if (m.Stream.call(this), "function" != typeof this.client) return this.critical(Error("The client library has not been compiled correctly, see https://github.com/primus/primus#client-library for more details"));
                            if ("object" == typeof t ? t = (e = t).url || e.uri || o : e = e || {}, "ping" in e || "pong" in e) return this.critical(Error("The `ping` and `pong` options have been removed"));
                            var r = this;
                            e.queueSize = "queueSize" in e ? e.queueSize : 1 / 0, e.timeout = "timeout" in e ? e.timeout : 1e4, e.reconnect = "reconnect" in e ? e.reconnect : {}, e.pingTimeout = "pingTimeout" in e ? e.pingTimeout : 45e3, e.strategy = "strategy" in e ? e.strategy : [], e.transport = "transport" in e ? e.transport : {}, e.transportOverrides = "transportOverrides" in e ? e.transportOverrides : {}, r.buffer = [], r.writable = !0, r.readable = !0, r.url = r.parse(t || o), r.readyState = m.CLOSED, r.options = e, r.timers = new s(this), r.socket = null, r.disconnect = !1, r.transport = e.transport, r.transportOverrides = e.transportOverrides, r.transformers = {
                                outgoing: [],
                                incoming: []
                            }, r.recovery = new a(e.reconnect), "string" == typeof e.strategy && (e.strategy = e.strategy.split(/\s?,\s?/g)), !1 === e.strategy ? e.strategy = [] : !e.strategy.length && (e.strategy.push("disconnect", "online"), this.authorization || e.strategy.push("timeout")), e.strategy = e.strategy.join(",").toLowerCase(), "websockets" in e && (r.AVOID_WEBSOCKETS = !e.websockets), "network" in e && (r.NETWORK_EVENTS = e.network), e.manual || r.timers.setTimeout("open", function() {
                                r.timers.clear("open"), r.open()
                            }, 0), r.initialise(e)
                        }
                        m.requires = m.require = function(r) {
                            if ("function" == typeof e) return "function" == typeof t && t.amd ? void 0 : e(r)
                        };
                        try {
                            m.Stream = m.requires("stream")
                        } catch (t) {}
                        m.Stream || (m.Stream = i), u(m, m.Stream), m.OPENING = 1, m.CLOSED = 2, m.OPEN = 3, m.prototype.AVOID_WEBSOCKETS = !1, m.prototype.NETWORK_EVENTS = !1, m.prototype.online = !0;
                        try {
                            (m.prototype.NETWORK_EVENTS = "onLine" in navigator && (window.addEventListener || document.body.attachEvent)) && !navigator.onLine && (m.prototype.online = !1)
                        } catch (t) {}
                        m.prototype.ark = {}, m.prototype.emits = e("emits"), m.prototype.plugin = function(t) {
                            if (y(this, "plugin"), t) return this.ark[t];
                            var e = {};
                            for (t in this.ark) e[t] = this.ark[t];
                            return e
                        }, m.prototype.reserved = function(t) {
                            return /^(incoming|outgoing)::/.test(t) || t in this.reserved.events
                        }, m.prototype.reserved.events = {
                            "reconnect scheduled": 1,
                            "reconnect timeout": 1,
                            readyStateChange: 1,
                            "reconnect failed": 1,
                            reconnected: 1,
                            reconnect: 1,
                            offline: 1,
                            timeout: 1,
                            destroy: 1,
                            online: 1,
                            error: 1,
                            close: 1,
                            open: 1,
                            data: 1,
                            end: 1
                        }, m.prototype.initialise = function(t) {
                            var e = this;
                            for (var r in e.recovery.on("reconnected", e.emits("reconnected")).on("reconnect failed", e.emits("reconnect failed", function(t) {
                                    e.emit("end"), t()
                                })).on("reconnect timeout", e.emits("reconnect timeout")).on("reconnect scheduled", e.emits("reconnect scheduled")).on("reconnect", e.emits("reconnect", function(t) {
                                    e.emit("outgoing::reconnect"), t()
                                })), e.on("outgoing::open", function() {
                                    var t = e.readyState;
                                    e.readyState = m.OPENING, t !== e.readyState && e.emit("readyStateChange", "opening")
                                }), e.on("incoming::open", function() {
                                    var t = e.readyState;
                                    if (e.recovery.reconnecting() && e.recovery.reconnected(), e.writable = !0, e.readable = !0, e.online || (e.online = !0, e.emit("online")), e.readyState = m.OPEN, t !== e.readyState && e.emit("readyStateChange", "open"), e.heartbeat(), e.buffer.length) {
                                        var r = e.buffer.slice(),
                                            n = r.length,
                                            o = 0;
                                        for (e.buffer.length = 0; o < n; o++) e._write(r[o])
                                    }
                                    e.emit("open")
                                }), e.on("incoming::ping", function(t) {
                                    e.online = !0, e.heartbeat(), e.emit("outgoing::pong", t), e._write(`primus::pong::${t}`)
                                }), e.on("incoming::error", function(t) {
                                    var r = e.timers.active("connect"),
                                        n = t;
                                    if ("string" == typeof t) n = Error(t);
                                    else if (!(t instanceof Error) && "object" == typeof t)
                                        for (var o in n = Error(t.message || t.reason), t) Object.prototype.hasOwnProperty.call(t, o) && (n[o] = t[o]);
                                    if (e.recovery.reconnecting()) return e.recovery.reconnected(n);
                                    e.listeners("error").length && e.emit("error", n), r && (~e.options.strategy.indexOf("timeout") ? e.recovery.reconnect() : e.end())
                                }), e.on("incoming::data", function(t) {
                                    e.decoder(t, function(r, n) {
                                        if (r) return e.listeners("error").length && e.emit("error", r);
                                        e.protocol(n) || e.transforms(e, e, "incoming", n, t)
                                    })
                                }), e.on("incoming::end", function() {
                                    var t = e.readyState;
                                    return e.disconnect ? (e.disconnect = !1, e.end()) : (e.readyState = m.CLOSED, t !== e.readyState && e.emit("readyStateChange", "end"), e.timers.active("connect") && e.end(), t !== m.OPEN) ? !!e.recovery.reconnecting() && e.recovery.reconnect() : (this.writable = !1, this.readable = !1, this.timers.clear(), e.emit("close"), ~e.options.strategy.indexOf("disconnect")) ? e.recovery.reconnect() : void(e.emit("outgoing::end"), e.emit("end"))
                                }), e.client(), e.ark) e.ark[r].call(e, e, t);
                            return e.NETWORK_EVENTS && (e.offlineHandler = function() {
                                e.online && (e.online = !1, e.emit("offline"), e.end(), e.recovery.reset())
                            }, e.onlineHandler = function() {
                                !e.online && (e.online = !0, e.emit("online"), ~e.options.strategy.indexOf("online") && e.recovery.reconnect())
                            }, window.addEventListener ? (window.addEventListener("offline", e.offlineHandler, !1), window.addEventListener("online", e.onlineHandler, !1)) : document.body.attachEvent && (document.body.attachEvent("onoffline", e.offlineHandler), document.body.attachEvent("ononline", e.onlineHandler))), e
                        }, m.prototype.protocol = function(t) {
                            if ("string" != typeof t || 0 !== t.indexOf("primus::")) return !1;
                            var e = t.indexOf(":", 8),
                                r = t.slice(e + 2);
                            switch (t.slice(8, e)) {
                                case "ping":
                                    this.emit("incoming::ping", +r);
                                    break;
                                case "server":
                                    "close" === r && (this.disconnect = !0);
                                    break;
                                case "id":
                                    this.emit("incoming::id", r);
                                    break;
                                default:
                                    return !1
                            }
                            return !0
                        }, m.prototype.transforms = function(t, e, r, n, o) {
                            var i = {
                                    data: n
                                },
                                s = t.transformers[r];
                            return ! function t(r, n) {
                                var o = s[r++];
                                if (!o) return n();
                                if (1 === o.length) {
                                    if (!1 === o.call(e, i)) return;
                                    return t(r, n)
                                }
                                o.call(e, i, function(o, i) {
                                    if (o) return e.emit("error", o);
                                    !1 !== i && t(r, n)
                                })
                            }(0, function() {
                                if ("incoming" === r) return e.emit("data", i.data, o);
                                e._write(i.data)
                            }), this
                        }, m.prototype.id = function(t) {
                            return this.socket && this.socket.id ? t(this.socket.id) : (this._write("primus::id::"), this.once("incoming::id", t))
                        }, m.prototype.open = function() {
                            return y(this, "open"), !this.recovery.reconnecting() && this.options.timeout && this.timeout(), this.emit("outgoing::open"), this
                        }, m.prototype.write = function(t) {
                            return y(this, "write"), this.transforms(this, this, "outgoing", t), !0
                        }, m.prototype._write = function(t) {
                            var e = this;
                            return m.OPEN !== e.readyState ? (this.buffer.length === this.options.queueSize && this.buffer.splice(0, 1), this.buffer.push(t), !1) : (e.encoder(t, function(t, r) {
                                if (t) return e.listeners("error").length && e.emit("error", t);
                                "string" == typeof r && (~r.indexOf("\u2028") && (r = r.replace(f, "\\u2028")), ~r.indexOf("\u2029") && (r = r.replace(h, "\\u2029"))), e.emit("outgoing::data", r)
                            }), !0)
                        }, m.prototype.heartbeat = function() {
                            return this.options.pingTimeout && (this.timers.clear("heartbeat"), this.timers.setTimeout("heartbeat", function() {
                                this.online && (this.online = !1, this.emit("offline"), this.emit("incoming::end"))
                            }, this.options.pingTimeout)), this
                        }, m.prototype.timeout = function() {
                            var t = this;

                            function e() {
                                t.removeListener("error", e).removeListener("open", e).removeListener("end", e).timers.clear("connect")
                            }
                            return t.timers.setTimeout("connect", function() {
                                e(), t.readyState === m.OPEN || t.recovery.reconnecting() || (t.emit("timeout"), ~t.options.strategy.indexOf("timeout") ? t.recovery.reconnect() : t.end())
                            }, t.options.timeout), t.on("error", e).on("open", e).on("end", e)
                        }, m.prototype.end = function(t) {
                            if (y(this, "end"), this.readyState === m.CLOSED && !this.timers.active("connect") && !this.timers.active("open")) return this.recovery.reconnecting() && (this.recovery.reset(), this.emit("end")), this;
                            void 0 !== t && this.write(t), this.writable = !1, this.readable = !1;
                            var e = this.readyState;
                            return this.readyState = m.CLOSED, e !== this.readyState && this.emit("readyStateChange", "end"), this.timers.clear(), this.emit("outgoing::end"), this.emit("close"), this.emit("end"), this
                        }, m.prototype.destroy = l("url timers options recovery socket transport transformers", {
                            before: "end",
                            after: ["removeAllListeners", function() {
                                this.NETWORK_EVENTS && (window.addEventListener ? (window.removeEventListener("offline", this.offlineHandler), window.removeEventListener("online", this.onlineHandler)) : document.body.attachEvent && (document.body.detachEvent("onoffline", this.offlineHandler), document.body.detachEvent("ononline", this.onlineHandler)))
                            }]
                        }), m.prototype.clone = function(t) {
                            return this.merge({}, t)
                        }, m.prototype.merge = function(t) {
                            for (var e, r, n = 1; n < arguments.length; n++)
                                for (e in r = arguments[n]) Object.prototype.hasOwnProperty.call(r, e) && (t[e] = r[e]);
                            return t
                        }, m.prototype.parse = e("url-parse"), m.prototype.querystring = c.parse, m.prototype.querystringify = c.stringify, m.prototype.uri = function(t) {
                            var e = this.url,
                                r = [],
                                n = !1;
                            t.query && (n = !0), (t = t || {}).protocol = "protocol" in t ? t.protocol : "http:", t.query = !!e.query && !!n && e.query.slice(1), t.secure = "secure" in t ? t.secure : "https:" === e.protocol || "wss:" === e.protocol, t.auth = "auth" in t ? t.auth : e.auth, t.pathname = "pathname" in t ? t.pathname : this.pathname, t.port = "port" in t ? +t.port : +e.port || (t.secure ? 443 : 80);
                            var o = this.querystring(t.query || "");
                            return (o._primuscb = p(), t.query = this.querystringify(o), this.emit("outgoing::url", t), r.push(t.secure ? t.protocol.replace(":", "s:") : t.protocol, ""), r.push(t.auth ? `${t.auth}@${e.host}` : e.host), t.pathname && r.push(t.pathname.slice(1)), n ? r[r.length - 1] += `?${t.query}` : delete t.query, t.object) ? t : r.join("/")
                        }, m.prototype.transform = function(t, e) {
                            return (y(this, "transform"), t in this.transformers) ? (this.transformers[t].push(e), this) : this.critical(Error("Invalid transformer type"))
                        }, m.prototype.critical = function(t) {
                            if (this.emit("error", t)) return this;
                            throw t
                        }, m.connect = function(t, e) {
                            return new m(t, e)
                        }, m.EventEmitter = i, m.prototype.client = function() {
                            var t, e = this.emits("incoming::data"),
                                r = this.emits("incoming::error"),
                                n = this.emits("incoming::open"),
                                o = this.emits("incoming::end"),
                                i = this,
                                s = function() {
                                    if ("u" > typeof eio) return eio;
                                    try {
                                        return m.requires("engine.io-client")
                                    } catch (t) {}
                                }();
                            if (!s) return i.critical(Error("Missing required `engine.io-client` module. Please run `npm install --save engine.io-client`"));
                            i.on("outgoing::open", function() {
                                i.emit("outgoing::end"), i.socket = t = s(i.merge(i.transport, i.url, i.uri({
                                    protocol: "http:",
                                    query: !0,
                                    object: !0
                                }), {
                                    rememberUpgrade: !1,
                                    forceBase64: !0,
                                    enablesXDR: !1,
                                    timestampRequests: !0,
                                    path: this.pathname,
                                    transports: i.AVOID_WEBSOCKETS ? ["polling"] : ["polling", "websocket"]
                                }, i.transportOverrides)), s.sockets && s.sockets.length && (s.sockets.length = 0), t.on("message", e), t.on("error", r), t.on("close", o), t.on("open", n)
                            }), i.on("outgoing::data", function(e) {
                                t && t.send(e)
                            }), i.on("outgoing::reconnect", function() {
                                i.emit("outgoing::open")
                            }), i.on("outgoing::end", function() {
                                t && (t.removeListener("message", e), t.removeListener("error", r), t.removeListener("close", o), t.removeListener("open", n), t.close(), t = null)
                            })
                        }, m.prototype.authorization = !1, m.prototype.pathname = "/primus-v8", m.prototype.encoder = function(t, e) {
                            var r;
                            try {
                                t = JSON.stringify(t)
                            } catch (t) {
                                r = t
                            }
                            e(r, t)
                        }, m.prototype.decoder = function(t, e) {
                            var r;
                            if ("string" != typeof t) return e(r, t);
                            try {
                                t = JSON.parse(t)
                            } catch (t) {
                                r = t
                            }
                            e(r, t)
                        }, m.prototype.version = "8.0.4", r.exports = m
                    }, {
                        demolish: 1,
                        emits: 2,
                        eventemitter3: 3,
                        inherits: 4,
                        querystringify: 8,
                        recovery: 9,
                        "tick-tock": 12,
                        "url-parse": 14,
                        yeast: 15
                    }]
                }, {}, [16])(16)
            }, [function(t) {
                var e;
                "u" > typeof window ? e = window : "u" > typeof self && (e = self), e.eio = function() {
                    return (function t(e, r, n) {
                        function o(s, a) {
                            if (!r[s]) {
                                if (!e[s]) {
                                    if (i) return i(s, !0);
                                    var c = Error(`Cannot find module '${s}'`);
                                    throw c.code = "MODULE_NOT_FOUND", c
                                }
                                var u = r[s] = {
                                    exports: {}
                                };
                                e[s][0].call(u.exports, function(t) {
                                    return o(e[s][1][t] || t)
                                }, u, u.exports, t, e, r, n)
                            }
                            return r[s].exports
                        }
                        for (var i = void 0, s = 0; s < n.length; s++) o(n[s]);
                        return o
                    })({
                        1: [function(t, e, r) {}, {}],
                        2: [function(t, e, r) {
                            "use strict";
                            e.exports = "u" > typeof self ? self : "u" > typeof window ? window : Function("return this")()
                        }, {}],
                        3: [function(t, e, r) {
                            "use strict";

                            function n() {
                                return (n = Object.assign || function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                                    }
                                    return t
                                }).apply(this, arguments)
                            }

                            function o(t) {
                                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function i(t, e) {
                                return (i = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function s(t) {
                                return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var a = t("./transports/index"),
                                c = t("component-emitter"),
                                u = t("engine.io-parser"),
                                l = t("parseuri"),
                                p = t("parseqs"),
                                f = function(t) {
                                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                    f.prototype = Object.create(t && t.prototype, {
                                        constructor: {
                                            value: f,
                                            writable: !0,
                                            configurable: !0
                                        }
                                    }), t && i(f, t);
                                    var e, r, c = (e = function() {
                                        if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                        if ("function" == typeof Proxy) return !0;
                                        try {
                                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                        } catch (t) {
                                            return !1
                                        }
                                    }(), function() {
                                        var t, r, n, i = s(f);
                                        return n = e ? Reflect.construct(i, arguments, s(this).constructor) : i.apply(this, arguments), t = this, (r = n) && ("object" === o(r) || "function" == typeof r) ? r : function(t) {
                                            if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                            return t
                                        }(t)
                                    });

                                    function f(t) {
                                        var e, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        if (!(this instanceof f)) throw TypeError("Cannot call a class as a function");
                                        return e = c.call(this), t && "object" === o(t) && (r = t, t = null), t ? (t = l(t), r.hostname = t.host, r.secure = "https" === t.protocol || "wss" === t.protocol, r.port = t.port, t.query && (r.query = t.query)) : r.host && (r.hostname = l(r.host).host), e.secure = null != r.secure ? r.secure : "u" > typeof location && "https:" === location.protocol, r.hostname && !r.port && (r.port = e.secure ? "443" : "80"), e.hostname = r.hostname || ("u" > typeof location ? location.hostname : "localhost"), e.port = r.port || ("u" > typeof location && location.port ? location.port : e.secure ? 443 : 80), e.transports = r.transports || ["polling", "websocket"], e.readyState = "", e.writeBuffer = [], e.prevBufferLen = 0, e.opts = n({
                                            path: "/engine.io",
                                            agent: !1,
                                            withCredentials: !1,
                                            upgrade: !0,
                                            jsonp: !0,
                                            timestampParam: "t",
                                            rememberUpgrade: !1,
                                            rejectUnauthorized: !0,
                                            perMessageDeflate: {
                                                threshold: 1024
                                            },
                                            transportOptions: {},
                                            closeOnBeforeunload: !0
                                        }, r), e.opts.path = `${e.opts.path.replace(/\/$/,"")}/`, "string" == typeof e.opts.query && (e.opts.query = p.decode(e.opts.query)), e.id = null, e.upgrades = null, e.pingInterval = null, e.pingTimeout = null, e.pingTimeoutTimer = null, "function" == typeof addEventListener && (e.opts.closeOnBeforeunload && addEventListener("beforeunload", function() {
                                            e.transport && (e.transport.removeAllListeners(), e.transport.close())
                                        }, !1), "localhost" !== e.hostname && (e.offlineEventListener = function() {
                                            e.onClose("transport close")
                                        }, addEventListener("offline", e.offlineEventListener, !1))), e.open(), e
                                    }
                                    return r = [{
                                            key: "createTransport",
                                            value: function(t) {
                                                var e = function(t) {
                                                    var e = {};
                                                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r]);
                                                    return e
                                                }(this.opts.query);
                                                e.EIO = u.protocol, e.transport = t, this.id && (e.sid = this.id);
                                                var r = n({}, this.opts.transportOptions[t], this.opts, {
                                                    query: e,
                                                    socket: this,
                                                    hostname: this.hostname,
                                                    secure: this.secure,
                                                    port: this.port
                                                });
                                                return new a[t](r)
                                            }
                                        }, {
                                            key: "open",
                                            value: function() {
                                                var t, e = this;
                                                if (this.opts.rememberUpgrade && f.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket";
                                                else {
                                                    if (0 === this.transports.length) return void setTimeout(function() {
                                                        e.emit("error", "No transports available")
                                                    }, 0);
                                                    t = this.transports[0]
                                                }
                                                this.readyState = "opening";
                                                try {
                                                    t = this.createTransport(t)
                                                } catch (t) {
                                                    this.transports.shift(), this.open();
                                                    return
                                                }
                                                t.open(), this.setTransport(t)
                                            }
                                        }, {
                                            key: "setTransport",
                                            value: function(t) {
                                                var e = this;
                                                this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", function() {
                                                    e.onClose("transport close")
                                                })
                                            }
                                        }, {
                                            key: "probe",
                                            value: function(t) {
                                                var e = this,
                                                    r = this.createTransport(t, {
                                                        probe: 1
                                                    }),
                                                    n = !1;
                                                f.priorWebsocketSuccess = !1;
                                                var o = function() {
                                                    n || (r.send([{
                                                        type: "ping",
                                                        data: "probe"
                                                    }]), r.once("packet", function(t) {
                                                        if (!n)
                                                            if ("pong" === t.type && "probe" === t.data) {
                                                                if (e.upgrading = !0, e.emit("upgrading", r), !r) return;
                                                                f.priorWebsocketSuccess = "websocket" === r.name, e.transport.pause(function() {
                                                                    n || "closed" !== e.readyState && (l(), e.setTransport(r), r.send([{
                                                                        type: "upgrade"
                                                                    }]), e.emit("upgrade", r), r = null, e.upgrading = !1, e.flush())
                                                                })
                                                            } else {
                                                                var o = Error("probe error");
                                                                o.transport = r.name, e.emit("upgradeError", o)
                                                            }
                                                    }))
                                                };

                                                function i() {
                                                    n || (n = !0, l(), r.close(), r = null)
                                                }
                                                var s = function(t) {
                                                    var n = Error(`probe error: ${t}`);
                                                    n.transport = r.name, i(), e.emit("upgradeError", n)
                                                };

                                                function a() {
                                                    s("transport closed")
                                                }

                                                function c() {
                                                    s("socket closed")
                                                }

                                                function u(t) {
                                                    r && t.name !== r.name && i()
                                                }
                                                var l = function() {
                                                    r.removeListener("open", o), r.removeListener("error", s), r.removeListener("close", a), e.removeListener("close", c), e.removeListener("upgrading", u)
                                                };
                                                r.once("open", o), r.once("error", s), r.once("close", a), this.once("close", c), this.once("upgrading", u), r.open()
                                            }
                                        }, {
                                            key: "onOpen",
                                            value: function() {
                                                if (this.readyState = "open", f.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause)
                                                    for (var t = 0, e = this.upgrades.length; t < e; t++) this.probe(this.upgrades[t])
                                            }
                                        }, {
                                            key: "onPacket",
                                            value: function(t) {
                                                if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emit("packet", t), this.emit("heartbeat"), t.type) {
                                                    case "open":
                                                        this.onHandshake(JSON.parse(t.data));
                                                        break;
                                                    case "ping":
                                                        this.resetPingTimeout(), this.sendPacket("pong"), this.emit("ping"), this.emit("pong");
                                                        break;
                                                    case "error":
                                                        var e = Error("server error");
                                                        e.code = t.data, this.onError(e);
                                                        break;
                                                    case "message":
                                                        this.emit("data", t.data), this.emit("message", t.data)
                                                }
                                            }
                                        }, {
                                            key: "onHandshake",
                                            value: function(t) {
                                                this.emit("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout()
                                            }
                                        }, {
                                            key: "resetPingTimeout",
                                            value: function() {
                                                var t = this;
                                                clearTimeout(this.pingTimeoutTimer), this.pingTimeoutTimer = setTimeout(function() {
                                                    t.onClose("ping timeout")
                                                }, this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref()
                                            }
                                        }, {
                                            key: "onDrain",
                                            value: function() {
                                                this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
                                            }
                                        }, {
                                            key: "flush",
                                            value: function() {
                                                "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
                                            }
                                        }, {
                                            key: "write",
                                            value: function(t, e, r) {
                                                return this.sendPacket("message", t, e, r), this
                                            }
                                        }, {
                                            key: "send",
                                            value: function(t, e, r) {
                                                return this.sendPacket("message", t, e, r), this
                                            }
                                        }, {
                                            key: "sendPacket",
                                            value: function(t, e, r, n) {
                                                if ("function" == typeof e && (n = e, e = void 0), "function" == typeof r && (n = r, r = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                                                    (r = r || {}).compress = !1 !== r.compress;
                                                    var o = {
                                                        type: t,
                                                        data: e,
                                                        options: r
                                                    };
                                                    this.emit("packetCreate", o), this.writeBuffer.push(o), n && this.once("flush", n), this.flush()
                                                }
                                            }
                                        }, {
                                            key: "close",
                                            value: function() {
                                                var t = this,
                                                    e = function() {
                                                        t.onClose("forced close"), t.transport.close()
                                                    },
                                                    r = function r() {
                                                        t.removeListener("upgrade", r), t.removeListener("upgradeError", r), e()
                                                    },
                                                    n = function() {
                                                        t.once("upgrade", r), t.once("upgradeError", r)
                                                    };
                                                return ("opening" === this.readyState || "open" === this.readyState) && (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", function() {
                                                    t.upgrading ? n() : e()
                                                }) : this.upgrading ? n() : e()), this
                                            }
                                        }, {
                                            key: "onError",
                                            value: function(t) {
                                                f.priorWebsocketSuccess = !1, this.emit("error", t), this.onClose("transport error", t)
                                            }
                                        }, {
                                            key: "onClose",
                                            value: function(t, e) {
                                                ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) && (clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && removeEventListener("offline", this.offlineEventListener, !1), this.readyState = "closed", this.id = null, this.emit("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0)
                                            }
                                        }, {
                                            key: "filterUpgrades",
                                            value: function(t) {
                                                for (var e = [], r = 0, n = t.length; r < n; r++) ~this.transports.indexOf(t[r]) && e.push(t[r]);
                                                return e
                                            }
                                        }],
                                        function(t, e) {
                                            for (var r = 0; r < e.length; r++) {
                                                var n = e[r];
                                                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                            }
                                        }(f.prototype, r), f
                                }(c);
                            f.priorWebsocketSuccess = !1, f.protocol = u.protocol, e.exports = f
                        }, {
                            "./transports/index": 5,
                            "component-emitter": 14,
                            "engine.io-parser": 18,
                            parseqs: 20,
                            parseuri: 21
                        }],
                        4: [function(t, e, r) {
                            "use strict";

                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function o(t, e) {
                                return (o = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function i(t) {
                                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var s = t("engine.io-parser");
                            e.exports = function(t) {
                                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                c.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: c,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && o(c, t);
                                var e, r, a = (e = function() {
                                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(), function() {
                                    var t, r, o, s = i(c);
                                    return o = e ? Reflect.construct(s, arguments, i(this).constructor) : s.apply(this, arguments), t = this, (r = o) && ("object" === n(r) || "function" == typeof r) ? r : function(t) {
                                        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t
                                    }(t)
                                });

                                function c(t) {
                                    var e;
                                    if (!(this instanceof c)) throw TypeError("Cannot call a class as a function");
                                    return (e = a.call(this)).opts = t, e.query = t.query, e.readyState = "", e.socket = t.socket, e
                                }
                                return r = [{
                                        key: "onError",
                                        value: function(t, e) {
                                            var r = Error(t);
                                            return r.type = "TransportError", r.description = e, this.emit("error", r), this
                                        }
                                    }, {
                                        key: "open",
                                        value: function() {
                                            return ("closed" === this.readyState || "" === this.readyState) && (this.readyState = "opening", this.doOpen()), this
                                        }
                                    }, {
                                        key: "close",
                                        value: function() {
                                            return ("opening" === this.readyState || "open" === this.readyState) && (this.doClose(), this.onClose()), this
                                        }
                                    }, {
                                        key: "send",
                                        value: function(t) {
                                            "open" === this.readyState && this.write(t)
                                        }
                                    }, {
                                        key: "onOpen",
                                        value: function() {
                                            this.readyState = "open", this.writable = !0, this.emit("open")
                                        }
                                    }, {
                                        key: "onData",
                                        value: function(t) {
                                            var e = s.decodePacket(t, this.socket.binaryType);
                                            this.onPacket(e)
                                        }
                                    }, {
                                        key: "onPacket",
                                        value: function(t) {
                                            this.emit("packet", t)
                                        }
                                    }, {
                                        key: "onClose",
                                        value: function() {
                                            this.readyState = "closed", this.emit("close")
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                        }
                                    }(c.prototype, r), c
                            }(t("component-emitter"))
                        }, {
                            "component-emitter": 14,
                            "engine.io-parser": 18
                        }],
                        5: [function(t, e, r) {
                            "use strict";
                            var n = t("../../contrib/xmlhttprequest-ssl/XMLHttpRequest"),
                                o = t("./polling-xhr"),
                                i = t("./polling-jsonp"),
                                s = t("./websocket");
                            r.polling = function(t) {
                                var e = !1,
                                    r = !1,
                                    s = !1 !== t.jsonp;
                                if ("u" > typeof location) {
                                    var a = "https:" === location.protocol,
                                        c = location.port;
                                    c || (c = a ? 443 : 80), e = t.hostname !== location.hostname || c !== t.port, r = t.secure !== a
                                }
                                if (t.xdomain = e, t.xscheme = r, "open" in new n(t) && !t.forceJSONP) return new o(t);
                                if (!s) throw Error("JSONP disabled");
                                return new i(t)
                            }, r.websocket = s
                        }, {
                            "../../contrib/xmlhttprequest-ssl/XMLHttpRequest": 12,
                            "./polling-jsonp": 6,
                            "./polling-xhr": 7,
                            "./websocket": 10
                        }],
                        6: [function(t, e, r) {
                            "use strict";

                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function o(t, e, r) {
                                return (o = "u" > typeof Reflect && Reflect.get ? Reflect.get : function(t, e, r) {
                                    var n = function(t, e) {
                                        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = a(t)););
                                        return t
                                    }(t, e);
                                    if (n) {
                                        var o = Object.getOwnPropertyDescriptor(n, e);
                                        return o.get ? o.get.call(r) : o.value
                                    }
                                })(t, e, r || t)
                            }

                            function i(t, e) {
                                return (i = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function s(t) {
                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return t
                            }

                            function a(t) {
                                return (a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var c, u = t("./polling"),
                                l = t("../globalThis"),
                                p = /\n/g,
                                f = /\\n/g;
                            e.exports = function(t) {
                                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                h.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: h,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && i(h, t);
                                var e, r, u = (e = function() {
                                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(), function() {
                                    var t, r, o, i = a(h);
                                    return o = e ? Reflect.construct(i, arguments, a(this).constructor) : i.apply(this, arguments), t = this, (r = o) && ("object" === n(r) || "function" == typeof r) ? r : s(t)
                                });

                                function h(t) {
                                    var e;
                                    if (!(this instanceof h)) throw TypeError("Cannot call a class as a function");
                                    return (e = u.call(this, t)).query = e.query || {}, c || (c = l.___eio = l.___eio || []), e.index = c.length, c.push(e.onData.bind(s(e))), e.query.j = e.index, e
                                }
                                return r = [{
                                        key: "supportsBinary",
                                        get: function() {
                                            return !1
                                        }
                                    }, {
                                        key: "doClose",
                                        value: function() {
                                            this.script && (this.script.onerror = function() {}, this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), o(a(h.prototype), "doClose", this).call(this)
                                        }
                                    }, {
                                        key: "doPoll",
                                        value: function() {
                                            var t = this,
                                                e = document.createElement("script");
                                            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
                                                t.onError("jsonp poll error", e)
                                            };
                                            var r = document.getElementsByTagName("script")[0];
                                            r ? r.parentNode.insertBefore(e, r) : (document.head || document.body).appendChild(e), this.script = e, "u" > typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                                                var t = document.createElement("iframe");
                                                document.body.appendChild(t), document.body.removeChild(t)
                                            }, 100)
                                        }
                                    }, {
                                        key: "doWrite",
                                        value: function(t, e) {
                                            var r, n = this;
                                            if (!this.form) {
                                                var o = document.createElement("form"),
                                                    i = document.createElement("textarea"),
                                                    s = this.iframeId = `eio_iframe_${this.index}`;
                                                o.className = "socketio", o.style.position = "absolute", o.style.top = "-1000px", o.style.left = "-1000px", o.target = s, o.method = "POST", o.setAttribute("accept-charset", "utf-8"), i.name = "d", o.appendChild(i), document.body.appendChild(o), this.form = o, this.area = i
                                            }

                                            function a() {
                                                c(), e()
                                            }
                                            this.form.action = this.uri();
                                            var c = function() {
                                                if (n.iframe) try {
                                                    n.form.removeChild(n.iframe)
                                                } catch (t) {
                                                    n.onError("jsonp polling iframe removal error", t)
                                                }
                                                try {
                                                    var t = `<iframe src="javascript:0" name="${n.iframeId}">`;
                                                    r = document.createElement(t)
                                                } catch (t) {
                                                    (r = document.createElement("iframe")).name = n.iframeId, r.src = "javascript:0"
                                                }
                                                r.id = n.iframeId, n.form.appendChild(r), n.iframe = r
                                            };
                                            c(), t = t.replace(f, "\\\n"), this.area.value = t.replace(p, "\\n");
                                            try {
                                                this.form.submit()
                                            } catch (t) {}
                                            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                                                "complete" === n.iframe.readyState && a()
                                            } : this.iframe.onload = a
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                        }
                                    }(h.prototype, r), h
                            }(u)
                        }, {
                            "../globalThis": 2,
                            "./polling": 8
                        }],
                        7: [function(t, e, r) {
                            "use strict";

                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function o() {
                                return (o = Object.assign || function(t) {
                                    for (var e = 1; e < arguments.length; e++) {
                                        var r = arguments[e];
                                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                                    }
                                    return t
                                }).apply(this, arguments)
                            }

                            function i(t, e) {
                                if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                            }

                            function s(t, e) {
                                for (var r = 0; r < e.length; r++) {
                                    var n = e[r];
                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                }
                            }

                            function a(t, e, r) {
                                return e && s(t.prototype, e), r && s(t, r), t
                            }

                            function c(t, e) {
                                if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function");
                                t.prototype = Object.create(e && e.prototype, {
                                    constructor: {
                                        value: t,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), e && u(t, e)
                            }

                            function u(t, e) {
                                return (u = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function l(t) {
                                var e = function() {
                                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }();
                                return function() {
                                    var r, o, i, s = p(t);
                                    return i = e ? Reflect.construct(s, arguments, p(this).constructor) : s.apply(this, arguments), r = this, (o = i) && ("object" === n(o) || "function" == typeof o) ? o : function(t) {
                                        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t
                                    }(r)
                                }
                            }

                            function p(t) {
                                return (p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var f = t("../../contrib/xmlhttprequest-ssl/XMLHttpRequest"),
                                h = t("./polling"),
                                y = t("component-emitter"),
                                m = t("../util").pick,
                                d = t("../globalThis");

                            function v() {}
                            var g = null != new f({
                                    xdomain: !1
                                }).responseType,
                                b = function(t) {
                                    c(r, t);
                                    var e = l(r);

                                    function r(t) {
                                        if (i(this, r), n = e.call(this, t), "u" > typeof location) {
                                            var n, o = "https:" === location.protocol,
                                                s = location.port;
                                            s || (s = o ? 443 : 80), n.xd = "u" > typeof location && t.hostname !== location.hostname || s !== t.port, n.xs = t.secure !== o
                                        }
                                        var a = t && t.forceBase64;
                                        return n.supportsBinary = g && !a, n
                                    }
                                    return a(r, [{
                                        key: "request",
                                        value: function() {
                                            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                            return o(t, {
                                                xd: this.xd,
                                                xs: this.xs
                                            }, this.opts), new w(this.uri(), t)
                                        }
                                    }, {
                                        key: "doWrite",
                                        value: function(t, e) {
                                            var r = this,
                                                n = this.request({
                                                    method: "POST",
                                                    data: t
                                                });
                                            n.on("success", e), n.on("error", function(t) {
                                                r.onError("xhr post error", t)
                                            })
                                        }
                                    }, {
                                        key: "doPoll",
                                        value: function() {
                                            var t = this,
                                                e = this.request();
                                            e.on("data", this.onData.bind(this)), e.on("error", function(e) {
                                                t.onError("xhr poll error", e)
                                            }), this.pollXhr = e
                                        }
                                    }]), r
                                }(h),
                                w = function(t) {
                                    c(r, t);
                                    var e = l(r);

                                    function r(t, n) {
                                        var o;
                                        return i(this, r), (o = e.call(this)).opts = n, o.method = n.method || "GET", o.uri = t, o.async = !1 !== n.async, o.data = void 0 !== n.data ? n.data : null, o.create(), o
                                    }
                                    return a(r, [{
                                        key: "create",
                                        value: function() {
                                            var t = this,
                                                e = m(this.opts, "agent", "enablesXDR", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref");
                                            e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs;
                                            var n = this.xhr = new f(e);
                                            try {
                                                n.open(this.method, this.uri, this.async);
                                                try {
                                                    if (this.opts.extraHeaders)
                                                        for (var o in n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(o) && n.setRequestHeader(o, this.opts.extraHeaders[o])
                                                } catch (t) {}
                                                if ("POST" === this.method) try {
                                                    n.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                                                } catch (t) {}
                                                try {
                                                    n.setRequestHeader("Accept", "*/*")
                                                } catch (t) {}
                                                "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), this.hasXDR() ? (n.onload = function() {
                                                    t.onLoad()
                                                }, n.onerror = function() {
                                                    t.onError(n.responseText)
                                                }) : n.onreadystatechange = function() {
                                                    4 === n.readyState && (200 === n.status || 1223 === n.status ? t.onLoad() : setTimeout(function() {
                                                        t.onError("number" == typeof n.status ? n.status : 0)
                                                    }, 0))
                                                }, n.send(this.data)
                                            } catch (e) {
                                                setTimeout(function() {
                                                    t.onError(e)
                                                }, 0);
                                                return
                                            }
                                            "u" > typeof document && (this.index = r.requestsCount++, r.requests[this.index] = this)
                                        }
                                    }, {
                                        key: "onSuccess",
                                        value: function() {
                                            this.emit("success"), this.cleanup()
                                        }
                                    }, {
                                        key: "onData",
                                        value: function(t) {
                                            this.emit("data", t), this.onSuccess()
                                        }
                                    }, {
                                        key: "onError",
                                        value: function(t) {
                                            this.emit("error", t), this.cleanup(!0)
                                        }
                                    }, {
                                        key: "cleanup",
                                        value: function(t) {
                                            if (void 0 !== this.xhr && null !== this.xhr) {
                                                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = v : this.xhr.onreadystatechange = v, t) try {
                                                    this.xhr.abort()
                                                } catch (t) {}
                                                "u" > typeof document && delete r.requests[this.index], this.xhr = null
                                            }
                                        }
                                    }, {
                                        key: "onLoad",
                                        value: function() {
                                            var t = this.xhr.responseText;
                                            null !== t && this.onData(t)
                                        }
                                    }, {
                                        key: "hasXDR",
                                        value: function() {
                                            return "u" > typeof XDomainRequest && !this.xs && this.enablesXDR
                                        }
                                    }, {
                                        key: "abort",
                                        value: function() {
                                            this.cleanup()
                                        }
                                    }]), r
                                }(y);

                            function k() {
                                for (var t in w.requests) w.requests.hasOwnProperty(t) && w.requests[t].abort()
                            }
                            w.requestsCount = 0, w.requests = {}, "u" > typeof document && ("function" == typeof attachEvent ? attachEvent("onunload", k) : "function" == typeof addEventListener && addEventListener("onpagehide" in d ? "pagehide" : "unload", k, !1)), e.exports = b, e.exports.Request = w
                        }, {
                            "../../contrib/xmlhttprequest-ssl/XMLHttpRequest": 12,
                            "../globalThis": 2,
                            "../util": 11,
                            "./polling": 8,
                            "component-emitter": 14
                        }],
                        8: [function(t, e, r) {
                            "use strict";

                            function n(t) {
                                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                    return typeof t
                                } : function(t) {
                                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                })(t)
                            }

                            function o(t, e) {
                                return (o = Object.setPrototypeOf || function(t, e) {
                                    return t.__proto__ = e, t
                                })(t, e)
                            }

                            function i(t) {
                                return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                    return t.__proto__ || Object.getPrototypeOf(t)
                                })(t)
                            }
                            var s = t("../transport"),
                                a = t("parseqs"),
                                c = t("engine.io-parser"),
                                u = t("yeast");
                            e.exports = function(t) {
                                if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                l.prototype = Object.create(t && t.prototype, {
                                    constructor: {
                                        value: l,
                                        writable: !0,
                                        configurable: !0
                                    }
                                }), t && o(l, t);
                                var e, r, s = (e = function() {
                                    if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                    if ("function" == typeof Proxy) return !0;
                                    try {
                                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                    } catch (t) {
                                        return !1
                                    }
                                }(), function() {
                                    var t, r, o, s = i(l);
                                    return o = e ? Reflect.construct(s, arguments, i(this).constructor) : s.apply(this, arguments), t = this, (r = o) && ("object" === n(r) || "function" == typeof r) ? r : function(t) {
                                        if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                        return t
                                    }(t)
                                });

                                function l() {
                                    if (!(this instanceof l)) throw TypeError("Cannot call a class as a function");
                                    return s.apply(this, arguments)
                                }
                                return r = [{
                                        key: "name",
                                        get: function() {
                                            return "polling"
                                        }
                                    }, {
                                        key: "doOpen",
                                        value: function() {
                                            this.poll()
                                        }
                                    }, {
                                        key: "pause",
                                        value: function(t) {
                                            var e = this;
                                            this.readyState = "pausing";
                                            var r = function() {
                                                e.readyState = "paused", t()
                                            };
                                            if (this.polling || !this.writable) {
                                                var n = 0;
                                                this.polling && (n++, this.once("pollComplete", function() {
                                                    --n || r()
                                                })), this.writable || (n++, this.once("drain", function() {
                                                    --n || r()
                                                }))
                                            } else r()
                                        }
                                    }, {
                                        key: "poll",
                                        value: function() {
                                            this.polling = !0, this.doPoll(), this.emit("poll")
                                        }
                                    }, {
                                        key: "onData",
                                        value: function(t) {
                                            var e = this;
                                            c.decodePayload(t, this.socket.binaryType).forEach(function(t) {
                                                if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose(), !1;
                                                e.onPacket(t)
                                            }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState && this.poll())
                                        }
                                    }, {
                                        key: "doClose",
                                        value: function() {
                                            var t = this,
                                                e = function() {
                                                    t.write([{
                                                        type: "close"
                                                    }])
                                                };
                                            "open" === this.readyState ? e() : this.once("open", e)
                                        }
                                    }, {
                                        key: "write",
                                        value: function(t) {
                                            var e = this;
                                            this.writable = !1, c.encodePayload(t, function(t) {
                                                e.doWrite(t, function() {
                                                    e.writable = !0, e.emit("drain")
                                                })
                                            })
                                        }
                                    }, {
                                        key: "uri",
                                        value: function() {
                                            var t = this.query || {},
                                                e = this.opts.secure ? "https" : "http",
                                                r = "";
                                            !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = u()), this.supportsBinary || t.sid || (t.b64 = 1), t = a.encode(t), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (r = `:${this.opts.port}`), t.length && (t = `?${t}`);
                                            var n = -1 !== this.opts.hostname.indexOf(":");
                                            return `${e}://${n?`[${this.opts.hostname}]`:this.opts.hostname}${r}${this.opts.path}${t}`
                                        }
                                    }],
                                    function(t, e) {
                                        for (var r = 0; r < e.length; r++) {
                                            var n = e[r];
                                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                        }
                                    }(l.prototype, r), l
                            }(s)
                        }, {
                            "../transport": 4,
                            "engine.io-parser": 18,
                            parseqs: 20,
                            yeast: 22
                        }],
                        9: [function(t, e, r) {
                            "use strict";
                            var n = t("../globalThis"),
                                o = "function" == typeof Promise && "function" == typeof Promise.resolve ? function(t) {
                                    return Promise.resolve().then(t)
                                } : function(t) {
                                    return setTimeout(t, 0)
                                };
                            e.exports = {
                                WebSocket: n.WebSocket || n.MozWebSocket,
                                usingBrowserWebSocket: !0,
                                defaultBinaryType: "arraybuffer",
                                nextTick: o
                            }
                        }, {
                            "../globalThis": 2
                        }],
                        10: [function(t, e, r) {
                            (function(r) {
                                (function() {
                                    "use strict";

                                    function n(t) {
                                        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                                            return typeof t
                                        } : function(t) {
                                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                                        })(t)
                                    }

                                    function o(t, e) {
                                        return (o = Object.setPrototypeOf || function(t, e) {
                                            return t.__proto__ = e, t
                                        })(t, e)
                                    }

                                    function i(t) {
                                        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                                            return t.__proto__ || Object.getPrototypeOf(t)
                                        })(t)
                                    }
                                    var s = t("../transport"),
                                        a = t("engine.io-parser"),
                                        c = t("parseqs"),
                                        u = t("yeast"),
                                        l = t("../util").pick,
                                        p = t("./websocket-constructor"),
                                        f = p.WebSocket,
                                        h = p.usingBrowserWebSocket,
                                        y = p.defaultBinaryType,
                                        m = p.nextTick,
                                        d = "u" > typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase();
                                    e.exports = function(t) {
                                        if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
                                        g.prototype = Object.create(t && t.prototype, {
                                            constructor: {
                                                value: g,
                                                writable: !0,
                                                configurable: !0
                                            }
                                        }), t && o(g, t);
                                        var e, p, v = (e = function() {
                                            if ("u" < typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
                                            if ("function" == typeof Proxy) return !0;
                                            try {
                                                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
                                            } catch (t) {
                                                return !1
                                            }
                                        }(), function() {
                                            var t, r, o, s = i(g);
                                            return o = e ? Reflect.construct(s, arguments, i(this).constructor) : s.apply(this, arguments), t = this, (r = o) && ("object" === n(r) || "function" == typeof r) ? r : function(t) {
                                                if (void 0 === t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                                                return t
                                            }(t)
                                        });

                                        function g(t) {
                                            var e;
                                            if (!(this instanceof g)) throw TypeError("Cannot call a class as a function");
                                            return (e = v.call(this, t)).supportsBinary = !t.forceBase64, e
                                        }
                                        return p = [{
                                                key: "name",
                                                get: function() {
                                                    return "websocket"
                                                }
                                            }, {
                                                key: "doOpen",
                                                value: function() {
                                                    if (this.check()) {
                                                        var t = this.uri(),
                                                            e = this.opts.protocols,
                                                            r = d ? {} : l(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity");
                                                        this.opts.extraHeaders && (r.headers = this.opts.extraHeaders);
                                                        try {
                                                            let n = this.opts.alternateWebsocketClass ? ? f;
                                                            this.ws = h && !d ? e ? new n(t, e) : new n(t) : new n(t, e, r)
                                                        } catch (t) {
                                                            return this.emit("error", t)
                                                        }
                                                        this.ws.binaryType = this.socket.binaryType || y, this.addEventListeners()
                                                    }
                                                }
                                            }, {
                                                key: "addEventListeners",
                                                value: function() {
                                                    var t = this;
                                                    this.ws.onopen = function() {
                                                        t.opts.autoUnref && t.ws._socket.unref(), t.onOpen()
                                                    }, this.ws.onclose = this.onClose.bind(this), this.ws.onmessage = function(e) {
                                                        return t.onData(e.data)
                                                    }, this.ws.onerror = function(e) {
                                                        return t.onError("websocket error", e)
                                                    }
                                                }
                                            }, {
                                                key: "write",
                                                value: function(t) {
                                                    var e = this;
                                                    this.writable = !1;
                                                    for (var n = 0; n < t.length; n++) ! function(n) {
                                                        var o = t[n],
                                                            i = n === t.length - 1;
                                                        a.encodePacket(o, e.supportsBinary, function(t) {
                                                            var n = {};
                                                            !h && (o.options && (n.compress = o.options.compress), e.opts.perMessageDeflate && ("string" == typeof t ? r.byteLength(t) : t.length) < e.opts.perMessageDeflate.threshold && (n.compress = !1));
                                                            try {
                                                                h ? e.ws.send(t) : e.ws.send(t, n)
                                                            } catch (t) {}
                                                            i && m(function() {
                                                                e.writable = !0, e.emit("drain")
                                                            })
                                                        })
                                                    }(n)
                                                }
                                            }, {
                                                key: "onClose",
                                                value: function() {
                                                    s.prototype.onClose.call(this)
                                                }
                                            }, {
                                                key: "doClose",
                                                value: function() {
                                                    void 0 !== this.ws && (this.ws.close(), this.ws = null)
                                                }
                                            }, {
                                                key: "uri",
                                                value: function() {
                                                    var t = this.query || {},
                                                        e = this.opts.secure ? "wss" : "ws",
                                                        r = "";
                                                    this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (r = `:${this.opts.port}`), this.opts.timestampRequests && (t[this.opts.timestampParam] = u()), this.supportsBinary || (t.b64 = 1), (t = c.encode(t)).length && (t = `?${t}`);
                                                    var n = -1 !== this.opts.hostname.indexOf(":");
                                                    return `${e}://${n?`[${this.opts.hostname}]`:this.opts.hostname}${r}${this.opts.path}${t}`
                                                }
                                            }, {
                                                key: "check",
                                                value: function() {
                                                    return !!f && !("__initialize" in f && this.name === g.prototype.name)
                                                }
                                            }],
                                            function(t, e) {
                                                for (var r = 0; r < e.length; r++) {
                                                    var n = e[r];
                                                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                                                }
                                            }(g.prototype, p), g
                                    }(s)
                                }).call(this)
                            }).call(this, t("buffer").Buffer)
                        }, {
                            "../transport": 4,
                            "../util": 11,
                            "./websocket-constructor": 9,
                            buffer: 1,
                            "engine.io-parser": 18,
                            parseqs: 20,
                            yeast: 22
                        }],
                        11: [function(t, e, r) {
                            "use strict";
                            e.exports.pick = function(t) {
                                for (var e = arguments.length, r = Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++) r[n - 1] = arguments[n];
                                return r.reduce(function(e, r) {
                                    return t.hasOwnProperty(r) && (e[r] = t[r]), e
                                }, {})
                            }
                        }, {}],
                        12: [function(t, e, r) {
                            "use strict";
                            var n = t("has-cors"),
                                o = t("./globalThis");
                            e.exports = function(t) {
                                var e = t.xdomain,
                                    r = t.xscheme,
                                    i = t.enablesXDR;
                                try {
                                    if ("u" > typeof XMLHttpRequest && (!e || n)) return new XMLHttpRequest
                                } catch (t) {}
                                try {
                                    if ("u" > typeof XDomainRequest && !r && i) return new XDomainRequest
                                } catch (t) {}
                                if (!e) try {
                                    return new o[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")
                                } catch (t) {}
                            }
                        }, {
                            "./globalThis": 2,
                            "has-cors": 19
                        }],
                        13: [function(t, e, r) {
                            ! function(t) {
                                "use strict";
                                r.encode = function(e) {
                                    var r, n = new Uint8Array(e),
                                        o = n.length,
                                        i = "";
                                    for (r = 0; r < o; r += 3) i += t[n[r] >> 2], i += t[(3 & n[r]) << 4 | n[r + 1] >> 4], i += t[(15 & n[r + 1]) << 2 | n[r + 2] >> 6], i += t[63 & n[r + 2]];
                                    return o % 3 == 2 ? i = `${i.substring(0,i.length-1)}=` : o % 3 == 1 && (i = `${i.substring(0,i.length-2)}==`), i
                                }, r.decode = function(e) {
                                    var r, n, o, i, s, a = .75 * e.length,
                                        c = e.length,
                                        u = 0;
                                    "=" === e[e.length - 1] && (a--, "=" === e[e.length - 2] && a--);
                                    var l = new ArrayBuffer(a),
                                        p = new Uint8Array(l);
                                    for (r = 0; r < c; r += 4) n = t.indexOf(e[r]), o = t.indexOf(e[r + 1]), i = t.indexOf(e[r + 2]), s = t.indexOf(e[r + 3]), p[u++] = n << 2 | o >> 4, p[u++] = (15 & o) << 4 | i >> 2, p[u++] = (3 & i) << 6 | 63 & s;
                                    return l
                                }
                            }("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/")
                        }, {}],
                        14: [function(t, e, r) {
                            function n(t) {
                                if (t) {
                                    var e = t;
                                    for (var r in n.prototype) e[r] = n.prototype[r];
                                    return e
                                }
                            }
                            void 0 !== e && (e.exports = n), n.prototype.on = n.prototype.addEventListener = function(t, e) {
                                return this._callbacks = this._callbacks || {}, (this._callbacks[`$${t}`] = this._callbacks[`$${t}`] || []).push(e), this
                            }, n.prototype.once = function(t, e) {
                                function r() {
                                    this.off(t, r), e.apply(this, arguments)
                                }
                                return r.fn = e, this.on(t, r), this
                            }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(t, e) {
                                if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
                                var r, n = this._callbacks[`$${t}`];
                                if (!n) return this;
                                if (1 == arguments.length) return delete this._callbacks[`$${t}`], this;
                                for (var o = 0; o < n.length; o++)
                                    if ((r = n[o]) === e || r.fn === e) {
                                        n.splice(o, 1);
                                        break
                                    }
                                return 0 === n.length && delete this._callbacks[`$${t}`], this
                            }, n.prototype.emit = function(t) {
                                this._callbacks = this._callbacks || {};
                                for (var e = Array(arguments.length - 1), r = this._callbacks[`$${t}`], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                                if (r) {
                                    r = r.slice(0);
                                    for (var n = 0, o = r.length; n < o; ++n) r[n].apply(this, e)
                                }
                                return this
                            }, n.prototype.listeners = function(t) {
                                return this._callbacks = this._callbacks || {}, this._callbacks[`$${t}`] || []
                            }, n.prototype.hasListeners = function(t) {
                                return !!this.listeners(t).length
                            }
                        }, {}],
                        15: [function(t, e, r) {
                            let n = Object.create(null);
                            n.open = "0", n.close = "1", n.ping = "2", n.pong = "3", n.message = "4", n.upgrade = "5", n.noop = "6";
                            let o = Object.create(null);
                            Object.keys(n).forEach(t => {
                                o[n[t]] = t
                            }), e.exports = {
                                PACKET_TYPES: n,
                                PACKET_TYPES_REVERSE: o,
                                ERROR_PACKET: {
                                    type: "error",
                                    data: "parser error"
                                }
                            }
                        }, {}],
                        16: [function(t, e, r) {
                            let n, {
                                PACKET_TYPES_REVERSE: o,
                                ERROR_PACKET: i
                            } = t("./commons");
                            "function" == typeof ArrayBuffer && (n = t("base64-arraybuffer"));
                            let s = (t, e) => "blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t;
                            e.exports = (t, e) => {
                                let r, a;
                                if ("string" != typeof t) return {
                                    type: "message",
                                    data: s(t, e)
                                };
                                let c = t.charAt(0);
                                return "b" === c ? {
                                    type: "message",
                                    data: (r = t.substring(1), a = e, n ? s(n.decode(r), a) : {
                                        base64: !0,
                                        data: r
                                    })
                                } : o[c] ? t.length > 1 ? {
                                    type: o[c],
                                    data: t.substring(1)
                                } : {
                                    type: o[c]
                                } : i
                            }
                        }, {
                            "./commons": 15,
                            "base64-arraybuffer": 13
                        }],
                        17: [function(t, e, r) {
                            let {
                                PACKET_TYPES: n
                            } = t("./commons"), o = "function" == typeof Blob || "u" > typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), i = "function" == typeof ArrayBuffer, s = (t, e) => {
                                let r = new FileReader;
                                return r.onload = function() {
                                    let t = r.result.split(",")[1];
                                    e(`b${t}`)
                                }, r.readAsDataURL(t)
                            };
                            e.exports = ({
                                type: t,
                                data: e
                            }, r, a) => {
                                if (o && e instanceof Blob)
                                    if (r) return a(e);
                                    else return s(e, a);
                                if (i && (e instanceof ArrayBuffer || ("function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer instanceof ArrayBuffer)))
                                    if (r) return a(e instanceof ArrayBuffer ? e : e.buffer);
                                    else return s(new Blob([e]), a);
                                return a(n[t] + (e || ""))
                            }
                        }, {
                            "./commons": 15
                        }],
                        18: [function(t, e, r) {
                            let n = t("./encodePacket"),
                                o = t("./decodePacket");
                            e.exports = {
                                protocol: 4,
                                encodePacket: n,
                                encodePayload: (t, e) => {
                                    let r = t.length,
                                        o = Array(r),
                                        i = 0;
                                    t.forEach((t, s) => {
                                        n(t, !1, t => {
                                            o[s] = t, ++i === r && e(o.join("\x1e"))
                                        })
                                    })
                                },
                                decodePacket: o,
                                decodePayload: (t, e) => {
                                    let r = t.split("\x1e"),
                                        n = [];
                                    for (let t = 0; t < r.length; t++) {
                                        let i = o(r[t], e);
                                        if (n.push(i), "error" === i.type) break
                                    }
                                    return n
                                }
                            }
                        }, {
                            "./decodePacket": 16,
                            "./encodePacket": 17
                        }],
                        19: [function(t, e, r) {
                            try {
                                e.exports = "u" > typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
                            } catch (t) {
                                e.exports = !1
                            }
                        }, {}],
                        20: [function(t, e, r) {
                            r.encode = function(t) {
                                var e = "";
                                for (var r in t) t.hasOwnProperty(r) && (e.length && (e += "&"), e += `${encodeURIComponent(r)}=${encodeURIComponent(t[r])}`);
                                return e
                            }, r.decode = function(t) {
                                for (var e = {}, r = t.split("&"), n = 0, o = r.length; n < o; n++) {
                                    var i = r[n].split("=");
                                    e[decodeURIComponent(i[0])] = decodeURIComponent(i[1])
                                }
                                return e
                            }
                        }, {}],
                        21: [function(t, e, r) {
                            var n = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
                                o = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
                            e.exports = function(t) {
                                var e, r, i, s, a = t,
                                    c = t.indexOf("["),
                                    u = t.indexOf("]"); - 1 != c && -1 != u && (t = t.substring(0, c) + t.substring(c, u).replace(/:/g, ";") + t.substring(u, t.length));
                                for (var l = n.exec(t || ""), p = {}, f = 14; f--;) p[o[f]] = l[f] || "";
                                return -1 != c && -1 != u && (p.source = a, p.host = p.host.substring(1, p.host.length - 1).replace(/;/g, ":"), p.authority = p.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), p.ipv6uri = !0), r = (e = p.path).replace(/\/{2,9}/g, "/").split("/"), ("/" == e.substr(0, 1) || 0 === e.length) && r.splice(0, 1), "/" == e.substr(e.length - 1, 1) && r.splice(r.length - 1, 1), p.pathNames = r, i = p.query, s = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, function(t, e, r) {
                                    e && (s[e] = r)
                                }), p.queryKey = s, p
                            }
                        }, {}],
                        22: [function(t, e, r) {
                            "use strict";
                            var n, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
                                i = {},
                                s = 0,
                                a = 0;

                            function c(t) {
                                var e = "";
                                do e = o[t % 64] + e, t = Math.floor(t / 64); while (t > 0) return e
                            }

                            function u() {
                                var t = c(+new Date);
                                return t !== n ? (s = 0, n = t) : `${t}.${c(s++)}`
                            }
                            for (; a < 64; a++) i[o[a]] = a;
                            u.encode = c, u.decode = function(t) {
                                var e = 0;
                                for (a = 0; a < t.length; a++) e = 64 * e + i[t.charAt(a)];
                                return e
                            }, e.exports = u
                        }, {}],
                        23: [function(t, e, r) {
                            "use strict";
                            var n = t("./socket");
                            e.exports = function(t, e) {
                                return new n(t, e)
                            }, e.exports.Socket = n, e.exports.protocol = n.protocol, e.exports.Transport = t("./transport"), e.exports.transports = t("./transports/index"), e.exports.parser = t("engine.io-parser")
                        }, {
                            "./socket": 3,
                            "./transport": 4,
                            "./transports/index": 5,
                            "engine.io-parser": 18
                        }]
                    }, {}, [23])(23)
                }()
            }])
        }
    }
]);