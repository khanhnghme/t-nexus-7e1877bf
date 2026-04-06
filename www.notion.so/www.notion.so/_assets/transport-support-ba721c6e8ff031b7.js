"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [89920], {
        995499: (e, t, n) => {
            n.r(t), n.d(t, {
                Identify: () => eu,
                Revenue: () => ea,
                Types: () => Y,
                add: () => rq,
                createInstance: () => rN,
                extendSession: () => rY,
                flush: () => rM,
                getDeviceId: () => rj,
                getSessionId: () => rF,
                getUserId: () => rz,
                groupIdentify: () => r$,
                identify: () => rV,
                init: () => rJ,
                logEvent: () => rK,
                remove: () => rW,
                reset: () => rX,
                revenue: () => rQ,
                runQueuedFunctions: () => e4,
                setDeviceId: () => rB,
                setGroup: () => rZ,
                setOptOut: () => rG,
                setSessionId: () => r0,
                setTransport: () => r1,
                setUserId: () => r2,
                track: () => r3
            });
            var r, i, o, s, u, a, c, l, d, f, h, p, v, g, y, m, b, w, E, _, I, S, T, k, C, P, O, A, R, x, N, H, L, U, D, q, Y = {};
            n.r(Y), n.d(Y, {
                DEFAULT_ACTION_CLICK_ALLOWLIST: () => rD,
                DEFAULT_CSS_SELECTOR_ALLOWLIST: () => rL,
                DEFAULT_DATA_ATTRIBUTE_PREFIX: () => rU,
                IdentifyOperation: () => H,
                LogLevel: () => T,
                OfflineDisabled: () => e3,
                RevenueProperty: () => L,
                ServerZone: () => D,
                SpecialEventType: () => U,
                Status: () => q
            });
            var M = () => n(331635);
            (r = w || (w = {}))[r.None = 0] = "None", r[r.Error = 1] = "Error", r[r.Warn = 2] = "Warn", r[r.Verbose = 3] = "Verbose", r[r.Debug = 4] = "Debug";
            var j = function(e) {
                    return function() {
                        var t = (0, M().Cl)({}, e.config);
                        return {
                            logger: t.loggerProvider,
                            logLevel: t.logLevel
                        }
                    }
                },
                F = function(e, t) {
                    var n, r;
                    t = (t = t.replace(/\[(\w+)\]/g, ".$1")).replace(/^\./, "");
                    try {
                        for (var i = (0, M().Ju)(t.split(".")), o = i.next(); !o.done; o = i.next()) {
                            var s = o.value;
                            if (!(s in e)) return;
                            e = e[s]
                        }
                    } catch (e) {
                        n = {
                            error: e
                        }
                    } finally {
                        try {
                            o && !o.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return e
                },
                z = function(e, t) {
                    return function() {
                        var n, r, i = {};
                        try {
                            for (var o = (0, M().Ju)(t), s = o.next(); !s.done; s = o.next()) {
                                var u = s.value;
                                i[u] = F(e, u)
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return i
                    }
                },
                $ = function(e, t, n, r, i) {
                    return void 0 === i && (i = null),
                        function() {
                            for (var o = [], s = 0; s < arguments.length; s++) o[s] = arguments[s];
                            var u = n(),
                                a = u.logger,
                                c = u.logLevel;
                            if (c && c < w.Debug || !c || !a) return e.apply(i, o);
                            var l = {
                                type: "invoke public method",
                                name: t,
                                args: o,
                                stacktrace: (Error().stack || "").split("\n").slice(3).map(function(e) {
                                    return e.trim()
                                }),
                                time: {
                                    start: new Date().toISOString()
                                },
                                states: {}
                            };
                            r && l.states && (l.states.before = r());
                            var d = e.apply(i, o);
                            return d && d.promise ? d.promise.then(function() {
                                r && l.states && (l.states.after = r()), l.time && (l.time.end = new Date().toISOString()), a.debug(JSON.stringify(l, null, 2))
                            }) : (r && l.states && (l.states.after = r()), l.time && (l.time.end = new Date().toISOString()), a.debug(JSON.stringify(l, null, 2))), d
                        }
                },
                V = function(e) {
                    return {
                        promise: e || Promise.resolve()
                    }
                };
            (i = E || (E = {})).Unknown = "unknown", i.Skipped = "skipped", i.Success = "success", i.RateLimit = "rate_limit", i.PayloadTooLarge = "payload_too_large", i.Invalid = "invalid", i.Failed = "failed", i.Timeout = "Timeout", i.SystemError = "SystemError";
            var J = "".concat("AMP", "_unsent"),
                K = "https://api2.amplitude.com/2/httpapi",
                W = function(e, t) {
                    var n = Math.max(t, 1);
                    return e.reduce(function(e, t, r) {
                        var i = Math.floor(r / n);
                        return e[i] || (e[i] = []), e[i].push(t), e
                    }, [])
                },
                X = function(e, t, n) {
                    return void 0 === t && (t = 0), void 0 === n && (n = E.Unknown), {
                        event: e,
                        code: t,
                        message: n
                    }
                },
                Q = "Amplitude Logger ",
                B = function() {
                    function e() {
                        this.logLevel = w.None
                    }
                    return e.prototype.disable = function() {
                        this.logLevel = w.None
                    }, e.prototype.enable = function(e) {
                        void 0 === e && (e = w.Warn), this.logLevel = e
                    }, e.prototype.log = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < w.Verbose || console.log("".concat(Q, "[Log]: ").concat(e.join(" ")))
                    }, e.prototype.warn = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < w.Warn || console.warn("".concat(Q, "[Warn]: ").concat(e.join(" ")))
                    }, e.prototype.error = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < w.Error || console.error("".concat(Q, "[Error]: ").concat(e.join(" ")))
                    }, e.prototype.debug = function() {
                        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                        this.logLevel < w.Debug || console.log("".concat(Q, "[Debug]: ").concat(e.join(" ")))
                    }, e
                }(),
                Z = function() {
                    return {
                        flushMaxRetries: 12,
                        flushQueueSize: 200,
                        flushIntervalMillis: 1e4,
                        instanceName: "$default_instance",
                        logLevel: w.Warn,
                        loggerProvider: new B,
                        offline: !1,
                        optOut: !1,
                        serverUrl: K,
                        serverZone: "US",
                        useBatch: !1
                    }
                },
                G = function() {
                    function e(e) {
                        this._optOut = !1;
                        var t, n, r, i, o = Z();
                        this.apiKey = e.apiKey, this.flushIntervalMillis = null != (t = e.flushIntervalMillis) ? t : o.flushIntervalMillis, this.flushMaxRetries = e.flushMaxRetries || o.flushMaxRetries, this.flushQueueSize = e.flushQueueSize || o.flushQueueSize, this.instanceName = e.instanceName || o.instanceName, this.loggerProvider = e.loggerProvider || o.loggerProvider, this.logLevel = null != (n = e.logLevel) ? n : o.logLevel, this.minIdLength = e.minIdLength, this.plan = e.plan, this.ingestionMetadata = e.ingestionMetadata, this.offline = void 0 !== e.offline ? e.offline : o.offline, this.optOut = null != (r = e.optOut) ? r : o.optOut, this.serverUrl = e.serverUrl, this.serverZone = e.serverZone || o.serverZone, this.storageProvider = e.storageProvider, this.transportProvider = e.transportProvider, this.useBatch = null != (i = e.useBatch) ? i : o.useBatch, this.loggerProvider.enable(this.logLevel);
                        var s = ee(e.serverUrl, e.serverZone, e.useBatch);
                        this.serverZone = s.serverZone, this.serverUrl = s.serverUrl
                    }
                    return Object.defineProperty(e.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut = e
                        },
                        enumerable: !1,
                        configurable: !0
                    }), e
                }(),
                ee = function(e, t, n) {
                    if (void 0 === e && (e = ""), void 0 === t && (t = Z().serverZone), void 0 === n && (n = Z().useBatch), e) return {
                        serverUrl: e,
                        serverZone: void 0
                    };
                    var r, i = ["US", "EU"].includes(t) ? t : Z().serverZone;
                    return {
                        serverZone: i,
                        serverUrl: (r = n, "EU" === i ? r ? "https://api.eu.amplitude.com/batch" : "https://api.eu.amplitude.com/2/httpapi" : r ? "https://api2.amplitude.com/batch" : K)
                    }
                },
                et = function() {
                    function e() {
                        this.sdk = {
                            metrics: {
                                histogram: {}
                            }
                        }
                    }
                    return e.prototype.recordHistogram = function(e, t) {
                        this.sdk.metrics.histogram[e] = t
                    }, e
                }(),
                en = function(e) {
                    return e ? (e ^ 16 * Math.random() >> e / 4).toString(16) : (String(1e7) + String(-1e3) + String(-4e3) + String(-8e3) + String(-1e11)).replace(/[018]/g, en)
                };

            function er(e) {
                var t = "";
                try {
                    "body" in e && (t = JSON.stringify(e.body, null, 2))
                } catch (e) {}
                return t
            }
            var ei = function() {
                function e() {
                    this.name = "amplitude", this.type = "destination", this.retryTimeout = 1e3, this.throttleTimeout = 3e4, this.storageKey = "", this.scheduleId = null, this.scheduledTimeout = 0, this.flushId = null, this.queue = []
                }
                return e.prototype.setup = function(e) {
                    var t;
                    return (0, M().sH)(this, void 0, void 0, function() {
                        var n, r = this;
                        return (0, M().YH)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.config = e, this.storageKey = "".concat(J, "_").concat(this.config.apiKey.substring(0, 10)), [4, null == (t = this.config.storageProvider) ? void 0 : t.get(this.storageKey)];
                                case 1:
                                    return (n = i.sent()) && n.length > 0 && Promise.all(n.map(function(e) {
                                        return r.execute(e)
                                    })).catch(), [2, Promise.resolve(void 0)]
                            }
                        })
                    })
                }, e.prototype.execute = function(e) {
                    var t = this;
                    return e.insert_id || (e.insert_id = en()), new Promise(function(n) {
                        t.queue.push({
                            event: e,
                            attempts: 0,
                            callback: function(e) {
                                return n(e)
                            },
                            timeout: 0
                        }), t.schedule(t.config.flushIntervalMillis), t.saveEvents()
                    })
                }, e.prototype.removeEventsExceedFlushMaxRetries = function(e) {
                    var t = this;
                    return e.filter(function(e) {
                        return e.attempts += 1, e.attempts < t.config.flushMaxRetries || (t.fulfillRequest([e], 500, "Event rejected due to exceeded retry count"), !1)
                    })
                }, e.prototype.scheduleEvents = function(e) {
                    var t = this;
                    e.forEach(function(e) {
                        t.schedule(0 === e.timeout ? t.config.flushIntervalMillis : e.timeout)
                    })
                }, e.prototype.schedule = function(e) {
                    var t = this;
                    if (!this.config.offline && (null === this.scheduleId || this.scheduleId && e > this.scheduledTimeout)) {
                        this.scheduleId && clearTimeout(this.scheduleId), this.scheduledTimeout = e, this.scheduleId = setTimeout(function() {
                            t.queue = t.queue.map(function(e) {
                                return e.timeout = 0, e
                            }), t.flush(!0)
                        }, e);
                        return
                    }
                }, e.prototype.resetSchedule = function() {
                    this.scheduleId = null, this.scheduledTimeout = 0
                }, e.prototype.flush = function(e) {
                    return void 0 === e && (e = !1), (0, M().sH)(this, void 0, void 0, function() {
                        var t, n, r = this;
                        return (0, M().YH)(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    if (this.config.offline) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush while offline."), [2];
                                    if (this.flushId) return this.resetSchedule(), this.config.loggerProvider.debug("Skipping flush because previous flush has not resolved."), [2];
                                    return this.flushId = this.scheduleId, this.resetSchedule(), t = [], n = [], this.queue.forEach(function(e) {
                                        return 0 === e.timeout ? t.push(e) : n.push(e)
                                    }), [4, W(t, this.config.flushQueueSize).reduce(function(t, n) {
                                        return (0, M().sH)(r, void 0, void 0, function() {
                                            return (0, M().YH)(this, function(r) {
                                                switch (r.label) {
                                                    case 0:
                                                        return [4, t];
                                                    case 1:
                                                        return r.sent(), [4, this.send(n, e)];
                                                    case 2:
                                                        return [2, r.sent()]
                                                }
                                            })
                                        })
                                    }, Promise.resolve())];
                                case 1:
                                    return i.sent(), this.flushId = null, this.scheduleEvents(this.queue), [2]
                            }
                        })
                    })
                }, e.prototype.send = function(e, t) {
                    return void 0 === t && (t = !0), (0, M().sH)(this, void 0, void 0, function() {
                        var n, r, i, o;
                        return (0, M().YH)(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (!this.config.apiKey) return [2, this.fulfillRequest(e, 400, "Event rejected due to missing API key")];
                                    n = {
                                        api_key: this.config.apiKey,
                                        events: e.map(function(e) {
                                            var t = e.event;
                                            return t.extra, (0, M().Tt)(t, ["extra"])
                                        }),
                                        options: {
                                            min_id_length: this.config.minIdLength
                                        },
                                        client_upload_time: new Date().toISOString(),
                                        request_metadata: this.config.requestMetadata
                                    }, this.config.requestMetadata = new et, s.label = 1;
                                case 1:
                                    return s.trys.push([1, 3, , 4]), r = ee(this.config.serverUrl, this.config.serverZone, this.config.useBatch).serverUrl, [4, this.config.transportProvider.send(r, n)];
                                case 2:
                                    if (null === (i = s.sent())) return this.fulfillRequest(e, 0, "Unexpected error occurred"), [2];
                                    if (!t) return "body" in i ? this.fulfillRequest(e, i.statusCode, "".concat(i.status, ": ").concat(er(i))) : this.fulfillRequest(e, i.statusCode, i.status), [2];
                                    return this.handleResponse(i, e), [3, 4];
                                case 3:
                                    var u;
                                    return o = (u = s.sent()) instanceof Error ? u.message : String(u), this.config.loggerProvider.error(o), this.handleResponse({
                                        status: E.Failed,
                                        statusCode: 0
                                    }, e), [3, 4];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.handleResponse = function(e, t) {
                    var n = e.status;
                    switch (n) {
                        case E.Success:
                            this.handleSuccessResponse(e, t);
                            break;
                        case E.Invalid:
                            this.handleInvalidResponse(e, t);
                            break;
                        case E.PayloadTooLarge:
                            this.handlePayloadTooLargeResponse(e, t);
                            break;
                        case E.RateLimit:
                            this.handleRateLimitResponse(e, t);
                            break;
                        default:
                            this.config.loggerProvider.warn("{code: 0, error: \"Status '".concat(n, "' provided for ").concat(t.length, ' events"}')), this.handleOtherResponse(t)
                    }
                }, e.prototype.handleSuccessResponse = function(e, t) {
                    this.fulfillRequest(t, e.statusCode, "Event tracked successfully")
                }, e.prototype.handleInvalidResponse = function(e, t) {
                    var n = this;
                    if (e.body.missingField || e.body.error.startsWith("Invalid API key")) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                    var r = new Set((0, M().fX)((0, M().fX)((0, M().fX)((0, M().fX)([], (0, M().zs)(Object.values(e.body.eventsWithInvalidFields)), !1), (0, M().zs)(Object.values(e.body.eventsWithMissingFields)), !1), (0, M().zs)(Object.values(e.body.eventsWithInvalidIdLengths)), !1), (0, M().zs)(e.body.silencedEvents), !1).flat()),
                        i = t.filter(function(t, i) {
                            return !r.has(i) || void n.fulfillRequest([t], e.statusCode, e.body.error)
                        });
                    i.length > 0 && this.config.loggerProvider.warn(er(e));
                    var o = this.removeEventsExceedFlushMaxRetries(i);
                    this.scheduleEvents(o)
                }, e.prototype.handlePayloadTooLargeResponse = function(e, t) {
                    if (1 === t.length) return void this.fulfillRequest(t, e.statusCode, e.body.error);
                    this.config.loggerProvider.warn(er(e)), this.config.flushQueueSize /= 2;
                    var n = this.removeEventsExceedFlushMaxRetries(t);
                    this.scheduleEvents(n)
                }, e.prototype.handleRateLimitResponse = function(e, t) {
                    var n = this,
                        r = Object.keys(e.body.exceededDailyQuotaUsers),
                        i = Object.keys(e.body.exceededDailyQuotaDevices),
                        o = e.body.throttledEvents,
                        s = new Set(r),
                        u = new Set(i),
                        a = new Set(o),
                        c = t.filter(function(t, r) {
                            return t.event.user_id && s.has(t.event.user_id) || t.event.device_id && u.has(t.event.device_id) ? void n.fulfillRequest([t], e.statusCode, e.body.error) : (a.has(r) && (t.timeout = n.throttleTimeout), !0)
                        });
                    c.length > 0 && this.config.loggerProvider.warn(er(e));
                    var l = this.removeEventsExceedFlushMaxRetries(c);
                    this.scheduleEvents(l)
                }, e.prototype.handleOtherResponse = function(e) {
                    var t = this,
                        n = e.map(function(e) {
                            return e.timeout = e.attempts * t.retryTimeout, e
                        }),
                        r = this.removeEventsExceedFlushMaxRetries(n);
                    this.scheduleEvents(r)
                }, e.prototype.fulfillRequest = function(e, t, n) {
                    this.removeEvents(e), e.forEach(function(e) {
                        return e.callback(X(e.event, t, n))
                    })
                }, e.prototype.saveEvents = function() {
                    if (this.config.storageProvider) {
                        var e = this.queue.map(function(e) {
                            return e.event
                        });
                        this.config.storageProvider.set(this.storageKey, e)
                    }
                }, e.prototype.removeEvents = function(e) {
                    this.queue = this.queue.filter(function(t) {
                        return !e.some(function(e) {
                            return e.event.insert_id === t.event.insert_id
                        })
                    }), this.saveEvents()
                }, e
            }();
            (o = _ || (_ = {})).SET = "$set", o.SET_ONCE = "$setOnce", o.ADD = "$add", o.APPEND = "$append", o.PREPEND = "$prepend", o.REMOVE = "$remove", o.PREINSERT = "$preInsert", o.POSTINSERT = "$postInsert", o.UNSET = "$unset", o.CLEAR_ALL = "$clearAll", (s = I || (I = {})).REVENUE_PRODUCT_ID = "$productId", s.REVENUE_QUANTITY = "$quantity", s.REVENUE_PRICE = "$price", s.REVENUE_TYPE = "$revenueType", s.REVENUE_CURRENCY = "$currency", s.REVENUE = "$revenue", (u = S || (S = {})).IDENTIFY = "$identify", u.GROUP_IDENTIFY = "$groupidentify", u.REVENUE = "revenue_amount";
            var eo = function(e) {
                    if (Object.keys(e).length > 1e3) return !1;
                    for (var t in e) {
                        var n = e[t];
                        if (!es(t, n)) return !1
                    }
                    return !0
                },
                es = function(e, t) {
                    var n, r;
                    if ("string" != typeof e) return !1;
                    if (Array.isArray(t)) {
                        var i = !0;
                        try {
                            for (var o = (0, M().Ju)(t), s = o.next(); !s.done; s = o.next()) {
                                var u = s.value;
                                if (Array.isArray(u)) return !1;
                                if ("object" == typeof u) i = i && eo(u);
                                else if (!["number", "string"].includes(typeof u)) return !1;
                                if (!i) return !1
                            }
                        } catch (e) {
                            n = {
                                error: e
                            }
                        } finally {
                            try {
                                s && !s.done && (r = o.return) && r.call(o)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                    } else if (null == t) return !1;
                    else if ("object" == typeof t) return eo(t);
                    else if (!["number", "string", "boolean"].includes(typeof t)) return !1;
                    return !0
                },
                eu = function() {
                    function e() {
                        this._propertySet = new Set, this._properties = {}
                    }
                    return e.prototype.getUserProperties = function() {
                        return (0, M().Cl)({}, this._properties)
                    }, e.prototype.set = function(e, t) {
                        return this._safeSet(_.SET, e, t), this
                    }, e.prototype.setOnce = function(e, t) {
                        return this._safeSet(_.SET_ONCE, e, t), this
                    }, e.prototype.append = function(e, t) {
                        return this._safeSet(_.APPEND, e, t), this
                    }, e.prototype.prepend = function(e, t) {
                        return this._safeSet(_.PREPEND, e, t), this
                    }, e.prototype.postInsert = function(e, t) {
                        return this._safeSet(_.POSTINSERT, e, t), this
                    }, e.prototype.preInsert = function(e, t) {
                        return this._safeSet(_.PREINSERT, e, t), this
                    }, e.prototype.remove = function(e, t) {
                        return this._safeSet(_.REMOVE, e, t), this
                    }, e.prototype.add = function(e, t) {
                        return this._safeSet(_.ADD, e, t), this
                    }, e.prototype.unset = function(e) {
                        return this._safeSet(_.UNSET, e, "-"), this
                    }, e.prototype.clearAll = function() {
                        return this._properties = {}, this._properties[_.CLEAR_ALL] = "-", this
                    }, e.prototype._safeSet = function(e, t, n) {
                        if (this._validate(e, t, n)) {
                            var r = this._properties[e];
                            return void 0 === r && (r = {}, this._properties[e] = r), r[t] = n, this._propertySet.add(t), !0
                        }
                        return !1
                    }, e.prototype._validate = function(e, t, n) {
                        return !(void 0 !== this._properties[_.CLEAR_ALL] || this._propertySet.has(t)) && (e === _.ADD ? "number" == typeof n : e === _.UNSET || e === _.REMOVE || es(t, n))
                    }, e
                }(),
                ea = function() {
                    function e() {
                        this.productId = "", this.quantity = 1, this.price = 0
                    }
                    return e.prototype.setProductId = function(e) {
                        return this.productId = e, this
                    }, e.prototype.setQuantity = function(e) {
                        return e > 0 && (this.quantity = e), this
                    }, e.prototype.setPrice = function(e) {
                        return this.price = e, this
                    }, e.prototype.setRevenueType = function(e) {
                        return this.revenueType = e, this
                    }, e.prototype.setCurrency = function(e) {
                        return this.currency = e, this
                    }, e.prototype.setRevenue = function(e) {
                        return this.revenue = e, this
                    }, e.prototype.setEventProperties = function(e) {
                        return eo(e) && (this.properties = e), this
                    }, e.prototype.getEventProperties = function() {
                        var e = this.properties ? (0, M().Cl)({}, this.properties) : {};
                        return e[I.REVENUE_PRODUCT_ID] = this.productId, e[I.REVENUE_QUANTITY] = this.quantity, e[I.REVENUE_PRICE] = this.price, e[I.REVENUE_TYPE] = this.revenueType, e[I.REVENUE_CURRENCY] = this.currency, e[I.REVENUE] = this.revenue, e
                    }, e
                }(),
                ec = function() {
                    function e(e) {
                        this.client = e, this.queue = [], this.applying = !1, this.plugins = []
                    }
                    return e.prototype.register = function(e, t) {
                        var n, r;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (this.plugins.some(function(t) {
                                                return t.name === e.name
                                            })) return t.loggerProvider.warn("Plugin with name ".concat(e.name, " already exists, skipping registration")), [2];
                                        return void 0 === e.name && (e.name = en(), t.loggerProvider.warn("Plugin name is undefined. \n      Generating a random UUID for plugin name: ".concat(e.name, ". \n      Set a name for the plugin to prevent it from being added multiple times."))), e.type = null != (n = e.type) ? n : "enrichment", [4, null == (r = e.setup) ? void 0 : r.call(e, t, this.client)];
                                    case 1:
                                        return i.sent(), this.plugins.push(e), [2]
                                }
                            })
                        })
                    }, e.prototype.deregister = function(e, t) {
                        var n;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var r, i;
                            return (0, M().YH)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (-1 === (r = this.plugins.findIndex(function(t) {
                                                return t.name === e
                                            }))) return t.loggerProvider.warn("Plugin with name ".concat(e, " does not exist, skipping deregistration")), [2];
                                        return i = this.plugins[r], this.plugins.splice(r, 1), [4, null == (n = i.teardown) ? void 0 : n.call(i)];
                                    case 1:
                                        return o.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function(e) {
                        this.applying = !1, this.plugins.map(function(e) {
                            var t;
                            return null == (t = e.teardown) ? void 0 : t.call(e)
                        }), this.plugins = [], this.client = e
                    }, e.prototype.push = function(e) {
                        var t = this;
                        return new Promise(function(n) {
                            t.queue.push([e, n]), t.scheduleApply(0)
                        })
                    }, e.prototype.scheduleApply = function(e) {
                        var t = this;
                        this.applying || (this.applying = !0, setTimeout(function() {
                            t.apply(t.queue.shift()).then(function() {
                                t.applying = !1, t.queue.length > 0 && t.scheduleApply(0)
                            })
                        }, e))
                    }, e.prototype.apply = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n, r, i, o, s, u, a, c, l, d, f, h, p;
                            return (0, M().YH)(this, function(v) {
                                switch (v.label) {
                                    case 0:
                                        if (!e) return [2];
                                        t = (0, M().zs)(e, 1)[0], n = (0, M().zs)(e, 2)[1], r = this.plugins.filter(function(e) {
                                            return "before" === e.type
                                        }), v.label = 1;
                                    case 1:
                                        v.trys.push([1, 6, 7, 8]), o = (i = (0, M().Ju)(r)).next(), v.label = 2;
                                    case 2:
                                        if (o.done) return [3, 5];
                                        if (!(s = o.value).execute) return [3, 4];
                                        return [4, s.execute((0, M().Cl)({}, t))];
                                    case 3:
                                        if (null === (u = v.sent())) return n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = u, v.label = 4;
                                    case 4:
                                        return o = i.next(), [3, 2];
                                    case 5:
                                        return [3, 8];
                                    case 6:
                                        return d = {
                                            error: v.sent()
                                        }, [3, 8];
                                    case 7:
                                        try {
                                            o && !o.done && (f = i.return) && f.call(i)
                                        } finally {
                                            if (d) throw d.error
                                        }
                                        return [7];
                                    case 8:
                                        a = this.plugins.filter(function(e) {
                                            return "enrichment" === e.type || void 0 === e.type
                                        }), v.label = 9;
                                    case 9:
                                        v.trys.push([9, 14, 15, 16]), l = (c = (0, M().Ju)(a)).next(), v.label = 10;
                                    case 10:
                                        if (l.done) return [3, 13];
                                        if (!(s = l.value).execute) return [3, 12];
                                        return [4, s.execute((0, M().Cl)({}, t))];
                                    case 11:
                                        if (null === (u = v.sent())) return n({
                                            event: t,
                                            code: 0,
                                            message: ""
                                        }), [2];
                                        t = u, v.label = 12;
                                    case 12:
                                        return l = c.next(), [3, 10];
                                    case 13:
                                        return [3, 16];
                                    case 14:
                                        return h = {
                                            error: v.sent()
                                        }, [3, 16];
                                    case 15:
                                        try {
                                            l && !l.done && (p = c.return) && p.call(c)
                                        } finally {
                                            if (h) throw h.error
                                        }
                                        return [7];
                                    case 16:
                                        return Promise.all(this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }).map(function(e) {
                                            var n = (0, M().Cl)({}, t);
                                            return e.execute(n).catch(function(e) {
                                                return X(n, 0, String(e))
                                            })
                                        })).then(function(e) {
                                            var r = (0, M().zs)(e, 1)[0] || X(t, 100, "Event not tracked, no destination plugins on the instance");
                                            n(r)
                                        }), [2]
                                }
                            })
                        })
                    }, e.prototype.flush = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var e, t = this;
                            return (0, M().YH)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return e = this.queue, this.queue = [], [4, Promise.all(e.map(function(e) {
                                            return t.apply(e)
                                        }))];
                                    case 1:
                                        return n.sent(), [4, Promise.all(this.plugins.filter(function(e) {
                                            return "destination" === e.type
                                        }).map(function(e) {
                                            return e.flush && e.flush()
                                        }))];
                                    case 2:
                                        return n.sent(), [2]
                                }
                            })
                        })
                    }, e
                }(),
                el = function(e, t) {
                    return (0, M().Cl)((0, M().Cl)({}, t), {
                        event_type: S.IDENTIFY,
                        user_properties: e.getUserProperties()
                    })
                },
                ed = function(e, t, n, r) {
                    var i;
                    return (0, M().Cl)((0, M().Cl)({}, r), {
                        event_type: S.GROUP_IDENTIFY,
                        group_properties: n.getUserProperties(),
                        groups: ((i = {})[e] = t, i)
                    })
                },
                ef = function(e, t, n) {
                    var r, i = new eu;
                    return i.set(e, t), (0, M().Cl)((0, M().Cl)({}, n), {
                        event_type: S.IDENTIFY,
                        user_properties: i.getUserProperties(),
                        groups: ((r = {})[e] = t, r)
                    })
                },
                eh = function() {
                    function e(e) {
                        void 0 === e && (e = "$default"), this.initializing = !1, this.isReady = !1, this.q = [], this.dispatchQ = [], this.logEvent = this.track.bind(this), this.timeline = new ec(this), this.name = e
                    }
                    return e.prototype._init = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return this.config = e, this.timeline.reset(this), [4, this.runQueuedFunctions("q")];
                                    case 1:
                                        return t.sent(), this.isReady = !0, [2]
                                }
                            })
                        })
                    }, e.prototype.runQueuedFunctions = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n, r, i, o, s;
                            return (0, M().YH)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        t = this[e], this[e] = [], u.label = 1;
                                    case 1:
                                        u.trys.push([1, 8, 9, 10]), r = (n = (0, M().Ju)(t)).next(), u.label = 2;
                                    case 2:
                                        if (r.done) return [3, 7];
                                        if (!((i = (0, r.value)()) && "promise" in i)) return [3, 4];
                                        return [4, i.promise];
                                    case 3:
                                        return u.sent(), [3, 6];
                                    case 4:
                                        return [4, i];
                                    case 5:
                                        u.sent(), u.label = 6;
                                    case 6:
                                        return r = n.next(), [3, 2];
                                    case 7:
                                        return [3, 10];
                                    case 8:
                                        return o = {
                                            error: u.sent()
                                        }, [3, 10];
                                    case 9:
                                        try {
                                            r && !r.done && (s = n.return) && s.call(n)
                                        } finally {
                                            if (o) throw o.error
                                        }
                                        return [7];
                                    case 10:
                                        if (!this[e].length) return [3, 12];
                                        return [4, this.runQueuedFunctions(e)];
                                    case 11:
                                        u.sent(), u.label = 12;
                                    case 12:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.track = function(e, t, n) {
                        var r = (0, M().Cl)((0, M().Cl)((0, M().Cl)({}, "string" == typeof e ? {
                            event_type: e
                        } : e), n), t && {
                            event_properties: t
                        });
                        return V(this.dispatch(r))
                    }, e.prototype.identify = function(e, t) {
                        var n = el(e, t);
                        return V(this.dispatch(n))
                    }, e.prototype.groupIdentify = function(e, t, n, r) {
                        var i = ed(e, t, n, r);
                        return V(this.dispatch(i))
                    }, e.prototype.setGroup = function(e, t, n) {
                        var r = ef(e, t, n);
                        return V(this.dispatch(r))
                    }, e.prototype.revenue = function(e, t) {
                        var n = (0, M().Cl)((0, M().Cl)({}, t), {
                            event_type: S.REVENUE,
                            event_properties: e.getEventProperties()
                        });
                        return V(this.dispatch(n))
                    }, e.prototype.add = function(e) {
                        return this.isReady ? this._addPlugin(e) : (this.q.push(this._addPlugin.bind(this, e)), V())
                    }, e.prototype._addPlugin = function(e) {
                        return V(this.timeline.register(e, this.config))
                    }, e.prototype.remove = function(e) {
                        return this.isReady ? this._removePlugin(e) : (this.q.push(this._removePlugin.bind(this, e)), V())
                    }, e.prototype._removePlugin = function(e) {
                        return V(this.timeline.deregister(e, this.config))
                    }, e.prototype.dispatchWithCallback = function(e, t) {
                        if (!this.isReady) return t(X(e, 0, "Client not initialized"));
                        this.process(e).then(t)
                    }, e.prototype.dispatch = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t = this;
                            return (0, M().YH)(this, function(n) {
                                return this.isReady ? [2, this.process(e)] : [2, new Promise(function(n) {
                                    t.dispatchQ.push(t.dispatchWithCallback.bind(t, e, n))
                                })]
                            })
                        })
                    }, e.prototype.process = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n;
                            return (0, M().YH)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (r.trys.push([0, 2, , 3]), this.config.optOut) return [2, X(e, 0, "Event skipped due to optOut config")];
                                        return [4, this.timeline.push(e)];
                                    case 1:
                                        return 200 === (t = r.sent()).code ? this.config.loggerProvider.log(t.message) : 100 === t.code ? this.config.loggerProvider.warn(t.message) : this.config.loggerProvider.error(t.message), [2, t];
                                    case 2:
                                        return n = String(r.sent()), this.config.loggerProvider.error(n), [2, t = X(e, 0, n)];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.setOptOut = function(e) {
                        this.isReady ? this._setOptOut(e) : this.q.push(this._setOptOut.bind(this, !!e))
                    }, e.prototype._setOptOut = function(e) {
                        this.config.optOut = !!e
                    }, e.prototype.flush = function() {
                        return V(this.timeline.flush())
                    }, e
                }(),
                ep = function(e, t) {
                    return "boolean" == typeof e ? e : (null == e ? void 0 : e[t]) !== !1
                },
                ev = function(e) {
                    return ep(e, "attribution")
                },
                eg = function(e) {
                    return ep(e, "pageViews")
                },
                ey = function(e) {
                    return ep(e, "sessions")
                },
                em = function(e) {
                    return "boolean" == typeof e ? e : "object" == typeof e && (!0 === e.elementInteractions || "object" == typeof e.elementInteractions)
                },
                eb = function(e) {
                    if (em(e.autocapture) && "object" == typeof e.autocapture && "object" == typeof e.autocapture.elementInteractions) return e.autocapture.elementInteractions
                },
                ew = function(e) {
                    var t, n = function() {
                            return !1
                        },
                        r = void 0,
                        i = e.pageCounter;
                    return eg(e.defaultTracking) && (n = void 0, t = void 0, e.defaultTracking && "object" == typeof e.defaultTracking && e.defaultTracking.pageViews && "object" == typeof e.defaultTracking.pageViews && ("trackOn" in e.defaultTracking.pageViews && (n = e.defaultTracking.pageViews.trackOn), "trackHistoryChanges" in e.defaultTracking.pageViews && (r = e.defaultTracking.pageViews.trackHistoryChanges), "eventType" in e.defaultTracking.pageViews && e.defaultTracking.pageViews.eventType && (t = e.defaultTracking.pageViews.eventType))), {
                        trackOn: n,
                        trackHistoryChanges: r,
                        eventType: t,
                        pageCounter: i
                    }
                },
                eE = "dclid",
                e_ = "fbclid",
                eI = "gbraid",
                eS = "gclid",
                eT = "ko_click_id",
                ek = "li_fat_id",
                eC = "msclkid",
                eP = "rtd_cid",
                eO = "ttclid",
                eA = "twclid",
                eR = "wbraid",
                ex = {
                    utm_campaign: void 0,
                    utm_content: void 0,
                    utm_id: void 0,
                    utm_medium: void 0,
                    utm_source: void 0,
                    utm_term: void 0,
                    referrer: void 0,
                    referring_domain: void 0,
                    dclid: void 0,
                    gbraid: void 0,
                    gclid: void 0,
                    fbclid: void 0,
                    ko_click_id: void 0,
                    li_fat_id: void 0,
                    msclkid: void 0,
                    rtd_cid: void 0,
                    ttclid: void 0,
                    twclid: void 0,
                    wbraid: void 0
                },
                eN = function(e) {
                    var t = e.split(".");
                    return t.length <= 2 ? e : t.slice(t.length - 2, t.length).join(".")
                },
                eH = function(e, t, n, r, i) {
                    void 0 === i && (i = !0), e.referrer;
                    var o = e.referring_domain,
                        s = (0, M().Tt)(e, ["referrer", "referring_domain"]),
                        u = t || {},
                        a = (u.referrer, u.referring_domain),
                        c = (0, M().Tt)(u, ["referrer", "referring_domain"]);
                    if (eL(n.excludeReferrers, e.referring_domain)) return r.debug("This is not a new campaign because ".concat(e.referring_domain, " is in the exclude referrer list.")), !1;
                    if (!i && Object.values(e).every(function(e) {
                            return !e
                        }) && t) return r.debug("This is not a new campaign because this is a direct traffic in the same session."), !1;
                    var l = JSON.stringify(s) !== JSON.stringify(c),
                        d = eN(o || "") !== eN(a || ""),
                        f = !t || l || d;
                    return f ? r.debug("This is a new campaign. An $identify event will be sent.") : r.debug("This is not a new campaign because it's the same as the previous one."), f
                },
                eL = function(e, t) {
                    return void 0 === e && (e = []), void 0 === t && (t = ""), e.some(function(e) {
                        return e instanceof RegExp ? e.test(t) : e === t
                    })
                },
                eU = function(e) {
                    var t = e;
                    return t ? (t.startsWith(".") && (t = t.substring(1)), [new RegExp("".concat(t.replace(".", "\\."), "$"))]) : []
                },
                eD = function() {
                    var e = "ampIntegrationContext";
                    return "u" > typeof globalThis && void 0 !== globalThis[e] ? globalThis[e] : "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof self ? self : void 0 !== n.g ? n.g : void 0
                },
                eq = function() {
                    var e, t = eD();
                    return (null == (e = null == t ? void 0 : t.location) ? void 0 : e.search) ? t.location.search.substring(1).split("&").filter(Boolean).reduce(function(e, t) {
                        var n = t.split("=", 2),
                            r = eY(n[0]),
                            i = eY(n[1]);
                        return i && (e[r] = i), e
                    }, {}) : {}
                },
                eY = function(e) {
                    void 0 === e && (e = "");
                    try {
                        return decodeURIComponent(e)
                    } catch (e) {
                        return ""
                    }
                },
                eM = function() {
                    function e() {}
                    return e.prototype.parse = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(e) {
                                return [2, (0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)({}, ex), this.getUtmParam()), this.getReferrer()), this.getClickIds())]
                            })
                        })
                    }, e.prototype.getUtmParam = function() {
                        var e = eq();
                        return {
                            utm_campaign: e.utm_campaign,
                            utm_content: e.utm_content,
                            utm_id: e.utm_id,
                            utm_medium: e.utm_medium,
                            utm_source: e.utm_source,
                            utm_term: e.utm_term
                        }
                    }, e.prototype.getReferrer = function() {
                        var e, t, n = {
                            referrer: void 0,
                            referring_domain: void 0
                        };
                        try {
                            n.referrer = document.referrer || void 0, n.referring_domain = null != (t = null == (e = n.referrer) ? void 0 : e.split("/")[2]) ? t : void 0
                        } catch (e) {}
                        return n
                    }, e.prototype.getClickIds = function() {
                        var e, t = eq();
                        return (e = {})[eE] = t[eE], e[e_] = t[e_], e[eI] = t[eI], e[eS] = t[eS], e[eT] = t[eT], e[ek] = t[ek], e[eC] = t[eC], e[eP] = t[eP], e[eO] = t[eO], e[eA] = t[eA], e[eR] = t[eR], e
                    }, e
                }(),
                ej = function(e, t) {
                    return void 0 === t && (t = Date.now()), Date.now() - t > e
                },
                eF = function() {
                    function e(e, t) {
                        var n, r, i;
                        this.shouldTrackNewCampaign = !1, this.options = (0, M().Cl)({
                            initialEmptyValue: "EMPTY",
                            resetSessionOnNewCampaign: !1,
                            excludeReferrers: eU(null == (n = t.cookieOptions) ? void 0 : n.domain)
                        }, e), this.storage = t.cookieStorage, this.storageKey = (r = t.apiKey, void 0 === i && (i = 10), ["AMP", "MKTG", r.substring(0, i)].filter(Boolean).join("_")), this.currentCampaign = ex, this.sessionTimeout = t.sessionTimeout, this.lastEventTime = t.lastEventTime, this.logger = t.loggerProvider, t.loggerProvider.log("Installing web attribution tracking.")
                    }
                    return e.prototype.init = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var e, t;
                            return (0, M().YH)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.fetchCampaign()];
                                    case 1:
                                        if (t = M().zs.apply(void 0, [n.sent(), 2]), this.currentCampaign = t[0], this.previousCampaign = t[1], e = !this.lastEventTime || ej(this.sessionTimeout, this.lastEventTime), !eH(this.currentCampaign, this.previousCampaign, this.options, this.logger, e)) return [3, 3];
                                        return this.shouldTrackNewCampaign = !0, [4, this.storage.set(this.storageKey, this.currentCampaign)];
                                    case 2:
                                        n.sent(), n.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.fetchCampaign = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(e) {
                                switch (e.label) {
                                    case 0:
                                        return [4, Promise.all([new eM().parse(), this.storage.get(this.storageKey)])];
                                    case 1:
                                        return [2, e.sent()]
                                }
                            })
                        })
                    }, e.prototype.generateCampaignEvent = function(e) {
                        this.shouldTrackNewCampaign = !1;
                        var t, n, r = (t = this.currentCampaign, n = this.options, el(Object.entries((0, M().Cl)((0, M().Cl)({}, ex), t)).reduce(function(e, t) {
                            var r, i = (0, M().zs)(t, 2),
                                o = i[0],
                                s = i[1];
                            return (e.setOnce("initial_".concat(o), null != (r = null != s ? s : n.initialEmptyValue) ? r : "EMPTY"), s) ? e.set(o, s) : e.unset(o)
                        }, new eu)));
                        return e && (r.event_id = e), r
                    }, e.prototype.shouldSetSessionIdOnNewCampaign = function() {
                        return this.shouldTrackNewCampaign && !!this.options.resetSessionOnNewCampaign
                    }, e
                }(),
                ez = function() {
                    function e() {}
                    return e.prototype.getApplicationContext = function() {
                        return {
                            versionName: this.versionName,
                            language: e$(),
                            platform: "Web",
                            os: void 0,
                            deviceModel: void 0
                        }
                    }, e
                }(),
                e$ = function() {
                    return "u" > typeof navigator && (navigator.languages && navigator.languages[0] || navigator.language) || ""
                },
                eV = function() {
                    function e() {
                        this.queue = []
                    }
                    return e.prototype.logEvent = function(e) {
                        this.receiver ? this.receiver(e) : this.queue.length < 512 && this.queue.push(e)
                    }, e.prototype.setEventReceiver = function(e) {
                        this.receiver = e, this.queue.length > 0 && (this.queue.forEach(function(t) {
                            e(t)
                        }), this.queue = [])
                    }, e
                }(),
                eJ = function() {
                    return (eJ = Object.assign || function(e) {
                        for (var t, n = 1, r = arguments.length; n < r; n++)
                            for (var i in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        return e
                    }).apply(this, arguments)
                };

            function eK(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    n = t && e[t],
                    r = 0;
                if (n) return n.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && r >= e.length && (e = void 0), {
                            value: e && e[r++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function eW(e, t) {
                var n = "function" == typeof Symbol && e[Symbol.iterator];
                if (!n) return e;
                var r, i, o = n.call(e),
                    s = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(r = o.next()).done;) s.push(r.value)
                } catch (e) {
                    i = {
                        error: e
                    }
                } finally {
                    try {
                        r && !r.done && (n = o.return) && n.call(o)
                    } finally {
                        if (i) throw i.error
                    }
                }
                return s
            }
            "function" == typeof SuppressedError && SuppressedError;
            var eX = function(e, t) {
                var n, r, i = typeof e;
                if (i !== typeof t) return !1;
                try {
                    for (var o = eK(["string", "number", "boolean", "undefined"]), s = o.next(); !s.done; s = o.next())
                        if (s.value === i) return e === t
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                if (null == e && null == t) return !0;
                if (null == e || null == t || e.length !== t.length) return !1;
                var u = Array.isArray(e),
                    a = Array.isArray(t);
                if (u !== a) return !1;
                if (u && a) {
                    for (var c = 0; c < e.length; c++)
                        if (!eX(e[c], t[c])) return !1
                } else {
                    if (!eX(Object.keys(e).sort(), Object.keys(t).sort())) return !1;
                    var l = !0;
                    return Object.keys(e).forEach(function(n) {
                        eX(e[n], t[n]) || (l = !1)
                    }), l
                }
                return !0
            };
            Object.entries || (Object.entries = function(e) {
                for (var t = Object.keys(e), n = t.length, r = Array(n); n--;) r[n] = [t[n], e[t[n]]];
                return r
            });
            var eQ = function() {
                    function e() {
                        this.identity = {
                            userProperties: {}
                        }, this.listeners = new Set
                    }
                    return e.prototype.editIdentity = function() {
                        var e = this,
                            t = eJ({}, this.identity.userProperties),
                            n = eJ(eJ({}, this.identity), {
                                userProperties: t
                            });
                        return {
                            setUserId: function(e) {
                                return n.userId = e, this
                            },
                            setDeviceId: function(e) {
                                return n.deviceId = e, this
                            },
                            setUserProperties: function(e) {
                                return n.userProperties = e, this
                            },
                            setOptOut: function(e) {
                                return n.optOut = e, this
                            },
                            updateUserProperties: function(e) {
                                var t, r, i, o, s, u, a = n.userProperties || {};
                                try {
                                    for (var c = eK(Object.entries(e)), l = c.next(); !l.done; l = c.next()) {
                                        var d = eW(l.value, 2),
                                            f = d[0],
                                            h = d[1];
                                        switch (f) {
                                            case "$set":
                                                try {
                                                    for (var p = (i = void 0, eK(Object.entries(h))), v = p.next(); !v.done; v = p.next()) {
                                                        var g = eW(v.value, 2),
                                                            y = g[0],
                                                            m = g[1];
                                                        a[y] = m
                                                    }
                                                } catch (e) {
                                                    i = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        v && !v.done && (o = p.return) && o.call(p)
                                                    } finally {
                                                        if (i) throw i.error
                                                    }
                                                }
                                                break;
                                            case "$unset":
                                                try {
                                                    for (var b = (s = void 0, eK(Object.keys(h))), w = b.next(); !w.done; w = b.next()) {
                                                        var y = w.value;
                                                        delete a[y]
                                                    }
                                                } catch (e) {
                                                    s = {
                                                        error: e
                                                    }
                                                } finally {
                                                    try {
                                                        w && !w.done && (u = b.return) && u.call(b)
                                                    } finally {
                                                        if (s) throw s.error
                                                    }
                                                }
                                                break;
                                            case "$clearAll":
                                                a = {}
                                        }
                                    }
                                } catch (e) {
                                    t = {
                                        error: e
                                    }
                                } finally {
                                    try {
                                        l && !l.done && (r = c.return) && r.call(c)
                                    } finally {
                                        if (t) throw t.error
                                    }
                                }
                                return n.userProperties = a, this
                            },
                            commit: function() {
                                return e.setIdentity(n), this
                            }
                        }
                    }, e.prototype.getIdentity = function() {
                        return eJ({}, this.identity)
                    }, e.prototype.setIdentity = function(e) {
                        var t = eJ({}, this.identity);
                        this.identity = eJ({}, e), eX(t, this.identity) || this.listeners.forEach(function(t) {
                            t(e)
                        })
                    }, e.prototype.addIdentityListener = function(e) {
                        this.listeners.add(e)
                    }, e.prototype.removeIdentityListener = function(e) {
                        this.listeners.delete(e)
                    }, e
                }(),
                eB = "u" > typeof globalThis ? globalThis : void 0 !== n.g ? n.g : self,
                eZ = function() {
                    function e() {
                        this.identityStore = new eQ, this.eventBridge = new eV, this.applicationContextProvider = new ez
                    }
                    return e.getInstance = function(t) {
                        return eB.analyticsConnectorInstances || (eB.analyticsConnectorInstances = {}), eB.analyticsConnectorInstances[t] || (eB.analyticsConnectorInstances[t] = new e), eB.analyticsConnectorInstances[t]
                    }, e
                }(),
                eG = function(e) {
                    return void 0 === e && (e = "$default_instance"), eZ.getInstance(e)
                },
                e0 = function(e, t) {
                    eG(t).identityStore.editIdentity().setUserId(e).commit()
                },
                e1 = function(e, t) {
                    eG(t).identityStore.editIdentity().setDeviceId(e).commit()
                },
                e2 = function() {
                    function e() {
                        this.name = "identity", this.type = "before", this.identityStore = eG().identityStore
                    }
                    return e.prototype.execute = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t;
                            return (0, M().YH)(this, function(n) {
                                return (t = e.user_properties) && this.identityStore.editIdentity().updateUserProperties(t).commit(), [2, e]
                            })
                        })
                    }, e.prototype.setup = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(t) {
                                return e.instanceName && (this.identityStore = eG(e.instanceName).identityStore), [2]
                            })
                        })
                    }, e
                }(),
                e3 = null,
                e4 = function(e, t) {
                    e5(e, t)
                },
                e5 = function(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n],
                            i = r.name,
                            o = r.args,
                            s = r.resolve,
                            u = e && e[i];
                        if ("function" == typeof u) {
                            var a = u.apply(e, o);
                            "function" == typeof s && s(null == a ? void 0 : a.promise)
                        }
                    }
                    return e
                },
                e6 = function(e) {
                    return e && void 0 !== e._q
                },
                e9 = function() {
                    if ("u" < typeof navigator) return "";
                    var e, t, n, r, i = navigator.userLanguage;
                    return null != (r = null != (n = null != (t = null == (e = navigator.languages) ? void 0 : e[0]) ? t : navigator.language) ? n : i) ? r : ""
                },
                e7 = function() {
                    function e() {
                        this.name = "@amplitude/plugin-context-browser", this.type = "before", this.library = "".concat("amplitude-ts", "/").concat("2.11.13"), "u" > typeof navigator && (this.userAgent = navigator.userAgent)
                    }
                    return e.prototype.setup = function(e) {
                        return this.config = e, Promise.resolve(void 0)
                    }, e.prototype.execute = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n, r, i, o;
                            return (0, M().YH)(this, function(s) {
                                return t = new Date().getTime(), n = null != (i = this.config.lastEventId) ? i : -1, r = null != (o = e.event_id) ? o : n + 1, this.config.lastEventId = r, e.time || (this.config.lastEventTime = t), [2, (0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)((0, M().Cl)({
                                    user_id: this.config.userId,
                                    device_id: this.config.deviceId,
                                    session_id: this.config.sessionId,
                                    time: t
                                }, this.config.appVersion && {
                                    app_version: this.config.appVersion
                                }), this.config.trackingOptions.platform && {
                                    platform: "Web"
                                }), this.config.trackingOptions.language && {
                                    language: e9()
                                }), this.config.trackingOptions.ipAddress && {
                                    ip: "$remote"
                                }), {
                                    insert_id: en(),
                                    partner_id: this.config.partnerId,
                                    plan: this.config.plan
                                }), this.config.ingestionMetadata && {
                                    ingestion_metadata: {
                                        source_name: this.config.ingestionMetadata.sourceName,
                                        source_version: this.config.ingestionMetadata.sourceVersion
                                    }
                                }), e), {
                                    event_id: r,
                                    library: this.library,
                                    user_agent: this.userAgent
                                })]
                            })
                        })
                    }, e
                }();
            (a = T || (T = {}))[a.None = 0] = "None", a[a.Error = 1] = "Error", a[a.Warn = 2] = "Warn", a[a.Verbose = 3] = "Verbose", a[a.Debug = 4] = "Debug";
            var e8 = function() {
                    function e() {
                        this.memoryStorage = new Map
                    }
                    return e.prototype.isEnabled = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(e) {
                                return [2, !0]
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(t) {
                                return [2, this.memoryStorage.get(e)]
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t;
                            return (0, M().YH)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return [4, this.get(e)];
                                    case 1:
                                        return [2, (t = n.sent()) ? JSON.stringify(t) : void 0]
                                }
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(n) {
                                return this.memoryStorage.set(e, t), [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(t) {
                                return this.memoryStorage.delete(e), [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(e) {
                                return this.memoryStorage.clear(), [2]
                            })
                        })
                    }, e
                }(),
                te = function(e, t, n) {
                    return void 0 === t && (t = ""), void 0 === n && (n = 10), ["AMP", t, e.substring(0, n)].filter(Boolean).join("_")
                },
                tt = function() {
                    function e(e) {
                        this.options = (0, M().Cl)({}, e)
                    }
                    return e.prototype.isEnabled = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n;
                            return (0, M().YH)(this, function(r) {
                                switch (r.label) {
                                    case 0:
                                        if (!eD()) return [2, !1];
                                        e.testValue = String(Date.now()), t = new e(this.options), n = "AMP_TEST", r.label = 1;
                                    case 1:
                                        return r.trys.push([1, 4, 5, 7]), [4, t.set(n, e.testValue)];
                                    case 2:
                                        return r.sent(), [4, t.get(n)];
                                    case 3:
                                        return [2, r.sent() === e.testValue];
                                    case 4:
                                        return r.sent(), [2, !1];
                                    case 5:
                                        return [4, t.remove(n)];
                                    case 6:
                                        return r.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        var t;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n, r;
                            return (0, M().YH)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        return [4, this.getRaw(e)];
                                    case 1:
                                        if (!(n = i.sent())) return [2, void 0];
                                        try {
                                            if (r = null != (t = tn(n)) ? t : tr(n), void 0 === r) return console.error("Amplitude Logger [Error]: Failed to decode cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0];
                                            return [2, JSON.parse(r)]
                                        } catch (t) {
                                            return console.error("Amplitude Logger [Error]: Failed to parse cookie value for key: ".concat(e, ", value: ").concat(n)), [2, void 0]
                                        }
                                }
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        var t, n;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var r, i;
                            return (0, M().YH)(this, function(o) {
                                return (i = (null != (n = null == (t = null == (r = eD()) ? void 0 : r.document) ? void 0 : t.cookie.split("; ")) ? n : []).find(function(t) {
                                    return 0 === t.indexOf(e + "=")
                                })) ? [2, i.substring(e.length + 1)] : [2, void 0]
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        var n;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var r, i, o, s, u, a, c;
                            return (0, M().YH)(this, function(l) {
                                try {
                                    r = null != (n = this.options.expirationDays) ? n : 0, i = null !== t ? r : -1, o = void 0, i && ((s = new Date).setTime(s.getTime() + 24 * i * 36e5), o = s), u = "".concat(e, "=").concat(btoa(encodeURIComponent(JSON.stringify(t)))), o && (u += "; expires=".concat(o.toUTCString())), u += "; path=/", this.options.domain && (u += "; domain=".concat(this.options.domain)), this.options.secure && (u += "; Secure"), this.options.sameSite && (u += "; SameSite=".concat(this.options.sameSite)), (a = eD()) && (a.document.cookie = u)
                                } catch (t) {
                                    c = t instanceof Error ? t.message : String(t), console.error("Amplitude Logger [Error]: Failed to set cookie for key: ".concat(e, ". Error: ").concat(c))
                                }
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return [4, this.set(e, null)];
                                    case 1:
                                        return t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.reset = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            return (0, M().YH)(this, function(e) {
                                return [2]
                            })
                        })
                    }, e
                }(),
                tn = function(e) {
                    try {
                        return decodeURIComponent(atob(e))
                    } catch (e) {
                        return
                    }
                },
                tr = function(e) {
                    try {
                        return decodeURIComponent(atob(decodeURIComponent(e)))
                    } catch (e) {
                        return
                    }
                },
                ti = function() {
                    function e() {}
                    return e.prototype.send = function(e, t) {
                        return Promise.resolve(null)
                    }, e.prototype.buildResponse = function(e) {
                        if ("object" != typeof e) return null;
                        var t, n, r, i, o, s, u, a, c, l, d, f, h, p, v, g, y, m, b, w, _, I, S = e.code || 0,
                            T = this.buildStatus(S);
                        switch (T) {
                            case E.Success:
                                return {
                                    status: T,
                                    statusCode: S,
                                    body: {
                                        eventsIngested: null != (t = e.events_ingested) ? t : 0,
                                        payloadSizeBytes: null != (n = e.payload_size_bytes) ? n : 0,
                                        serverUploadTime: null != (r = e.server_upload_time) ? r : 0
                                    }
                                };
                            case E.Invalid:
                                return {
                                    status: T,
                                    statusCode: S,
                                    body: {
                                        error: null != (i = e.error) ? i : "",
                                        missingField: null != (o = e.missing_field) ? o : "",
                                        eventsWithInvalidFields: null != (s = e.events_with_invalid_fields) ? s : {},
                                        eventsWithMissingFields: null != (u = e.events_with_missing_fields) ? u : {},
                                        eventsWithInvalidIdLengths: null != (a = e.events_with_invalid_id_lengths) ? a : {},
                                        epsThreshold: null != (c = e.eps_threshold) ? c : 0,
                                        exceededDailyQuotaDevices: null != (l = e.exceeded_daily_quota_devices) ? l : {},
                                        silencedDevices: null != (d = e.silenced_devices) ? d : [],
                                        silencedEvents: null != (f = e.silenced_events) ? f : [],
                                        throttledDevices: null != (h = e.throttled_devices) ? h : {},
                                        throttledEvents: null != (p = e.throttled_events) ? p : []
                                    }
                                };
                            case E.PayloadTooLarge:
                                return {
                                    status: T,
                                    statusCode: S,
                                    body: {
                                        error: null != (v = e.error) ? v : ""
                                    }
                                };
                            case E.RateLimit:
                                return {
                                    status: T,
                                    statusCode: S,
                                    body: {
                                        error: null != (g = e.error) ? g : "",
                                        epsThreshold: null != (y = e.eps_threshold) ? y : 0,
                                        throttledDevices: null != (m = e.throttled_devices) ? m : {},
                                        throttledUsers: null != (b = e.throttled_users) ? b : {},
                                        exceededDailyQuotaDevices: null != (w = e.exceeded_daily_quota_devices) ? w : {},
                                        exceededDailyQuotaUsers: null != (_ = e.exceeded_daily_quota_users) ? _ : {},
                                        throttledEvents: null != (I = e.throttled_events) ? I : []
                                    }
                                };
                            case E.Timeout:
                            default:
                                return {
                                    status: T,
                                    statusCode: S
                                }
                        }
                    }, e.prototype.buildStatus = function(e) {
                        return e >= 200 && e < 300 ? E.Success : 429 === e ? E.RateLimit : 413 === e ? E.PayloadTooLarge : 408 === e ? E.Timeout : e >= 400 && e < 500 ? E.Invalid : e >= 500 ? E.Failed : E.Unknown
                    }, e
                }(),
                to = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, M().C6)(t, e), t.prototype.send = function(e, t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n, r;
                            return (0, M().YH)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if ("u" < typeof fetch) throw Error("FetchTransport is not supported");
                                        return [4, fetch(e, {
                                            headers: {
                                                "Content-Type": "application/json",
                                                Accept: "*/*",
                                                ...t.events ? .[0] ? .event_properties ? .space_id && {
                                                    "x-notion-space-id": function(e) {
                                                        try {
                                                            if (!e || e.length < 32) return e;
                                                            return [e.substring(0, 8), e.substring(8, 12), e.substring(12, 16), e.substring(16, 20), e.substring(20, 32)].join("-")
                                                        } catch (t) {
                                                            return e
                                                        }
                                                    }(t.events ? .[0] ? .event_properties ? .space_id)
                                                }
                                            },
                                            body: JSON.stringify(t),
                                            method: "POST",
                                            priority: "low"
                                        })];
                                    case 1:
                                        return [4, (n = i.sent()).text()];
                                    case 2:
                                        r = i.sent();
                                        try {
                                            return [2, this.buildResponse(JSON.parse(r))]
                                        } catch (e) {
                                            return [2, this.buildResponse({
                                                code: n.status
                                            })]
                                        }
                                }
                            })
                        })
                    }, t
                }(ti),
                ts = function() {
                    function e(e) {
                        this.storage = e
                    }
                    return e.prototype.isEnabled = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t, n, r;
                            return (0, M().YH)(this, function(i) {
                                switch (i.label) {
                                    case 0:
                                        if (!this.storage) return [2, !1];
                                        t = String(Date.now()), n = new e(this.storage), r = "AMP_TEST", i.label = 1;
                                    case 1:
                                        return i.trys.push([1, 4, 5, 7]), [4, n.set(r, t)];
                                    case 2:
                                        return i.sent(), [4, n.get(r)];
                                    case 3:
                                        return [2, i.sent() === t];
                                    case 4:
                                        return i.sent(), [2, !1];
                                    case 5:
                                        return [4, n.remove(r)];
                                    case 6:
                                        return i.sent(), [7];
                                    case 7:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.get = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t;
                            return (0, M().YH)(this, function(n) {
                                switch (n.label) {
                                    case 0:
                                        return n.trys.push([0, 2, , 3]), [4, this.getRaw(e)];
                                    case 1:
                                        if (!(t = n.sent())) return [2, void 0];
                                        return [2, JSON.parse(t)];
                                    case 2:
                                        return n.sent(), console.error("[Amplitude] Error: Could not get value from storage"), [2, void 0];
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    }, e.prototype.getRaw = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t;
                            return (0, M().YH)(this, function(n) {
                                return [2, (null == (t = this.storage) ? void 0 : t.getItem(e)) || void 0]
                            })
                        })
                    }, e.prototype.set = function(e, t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n;
                            return (0, M().YH)(this, function(r) {
                                try {
                                    null == (n = this.storage) || n.setItem(e, JSON.stringify(t))
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.remove = function(e) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var t;
                            return (0, M().YH)(this, function(n) {
                                try {
                                    null == (t = this.storage) || t.removeItem(e)
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e.prototype.reset = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var e;
                            return (0, M().YH)(this, function(t) {
                                try {
                                    null == (e = this.storage) || e.clear()
                                } catch (e) {}
                                return [2]
                            })
                        })
                    }, e
                }(),
                tu = function(e) {
                    function t(t) {
                        var n, r = e.call(this, null == (n = eD()) ? void 0 : n.localStorage) || this;
                        return r.loggerProvider = null == t ? void 0 : t.loggerProvider, r
                    }
                    return (0, M().C6)(t, e), t.prototype.set = function(t, n) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var r, i;
                            return (0, M().YH)(this, function(o) {
                                switch (o.label) {
                                    case 0:
                                        if (!(Array.isArray(n) && n.length > 1e3)) return [3, 2];
                                        return r = n.length - 1e3, [4, e.prototype.set.call(this, t, n.slice(0, 1e3))];
                                    case 1:
                                        return o.sent(), null == (i = this.loggerProvider) || i.error("Failed to save ".concat(r, " events because the queue length exceeded ").concat(1e3, ".")), [3, 4];
                                    case 2:
                                        return [4, e.prototype.set.call(this, t, n)];
                                    case 3:
                                        o.sent(), o.label = 4;
                                    case 4:
                                        return [2]
                                }
                            })
                        })
                    }, t
                }(ts),
                ta = function(e) {
                    function t() {
                        var t;
                        return e.call(this, null == (t = eD()) ? void 0 : t.sessionStorage) || this
                    }
                    return (0, M().C6)(t, e), t
                }(ts),
                tc = function(e) {
                    function t() {
                        var t = e.apply(this, (0, M().fX)([], (0, M().zs)(arguments), !1)) || this;
                        return t.state = {
                            done: 4
                        }, t
                    }
                    return (0, M().C6)(t, e), t.prototype.send = function(e, t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n = this;
                            return (0, M().YH)(this, function(r) {
                                return [2, new Promise(function(r, i) {
                                    "u" < typeof XMLHttpRequest && i(Error("XHRTransport is not supported."));
                                    var o = new XMLHttpRequest;
                                    o.open("POST", e, !0), o.onreadystatechange = function() {
                                        if (o.readyState === n.state.done) {
                                            var e = o.responseText;
                                            try {
                                                r(n.buildResponse(JSON.parse(e)))
                                            } catch (e) {
                                                r(n.buildResponse({
                                                    code: o.status
                                                }))
                                            }
                                        }
                                    }, o.setRequestHeader("Content-Type", "application/json"), o.setRequestHeader("Accept", "*/*"), o.send(JSON.stringify(t))
                                })]
                            })
                        })
                    }, t
                }(ti),
                tl = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, M().C6)(t, e), t.prototype.send = function(e, t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n = this;
                            return (0, M().YH)(this, function(r) {
                                return [2, new Promise(function(r, i) {
                                    var o = eD();
                                    if (!(null == o ? void 0 : o.navigator.sendBeacon)) throw Error("SendBeaconTransport is not supported");
                                    try {
                                        var s = JSON.stringify(t);
                                        if (o.navigator.sendBeacon(e, JSON.stringify(t))) return r(n.buildResponse({
                                            code: 200,
                                            events_ingested: t.events.length,
                                            payload_size_bytes: s.length,
                                            server_upload_time: Date.now()
                                        }));
                                        return r(n.buildResponse({
                                            code: 500
                                        }))
                                    } catch (e) {
                                        i(e)
                                    }
                                })]
                            })
                        })
                    }, t
                }(ti),
                td = function(e, t) {
                    for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                    return (0, M().sH)(void 0, (0, M().fX)([e, t], (0, M().zs)(n), !1), void 0, function(e, t, n) {
                        var r, i, o, s, u, a, c, l, d;
                        return void 0 === n && (n = !0), (0, M().YH)(this, function(f) {
                            switch (f.label) {
                                case 0:
                                    return r = "".concat("amp", "_").concat(e.substring(0, 6)), [4, t.getRaw(r)];
                                case 1:
                                    if (!(i = f.sent())) return [2, {
                                        optOut: !1
                                    }];
                                    if (!n) return [3, 3];
                                    return [4, t.remove(r)];
                                case 2:
                                    f.sent(), f.label = 3;
                                case 3:
                                    return s = (o = (0, M().zs)(i.split("."), 6))[0], u = o[1], a = o[2], c = o[3], l = o[4], d = o[5], [2, {
                                        deviceId: s,
                                        userId: th(u),
                                        sessionId: tf(c),
                                        lastEventId: tf(d),
                                        lastEventTime: tf(l),
                                        optOut: !!a
                                    }]
                            }
                        })
                    })
                },
                tf = function(e) {
                    var t = parseInt(e, 32);
                    if (!isNaN(t)) return t
                },
                th = function(e) {
                    if (atob && escape && e) try {
                        return decodeURIComponent(escape(atob(e)))
                    } catch (e) {
                        return
                    }
                },
                tp = "[Amplitude]",
                tv = "".concat(tp, " Form Started"),
                tg = "".concat(tp, " Form Submitted"),
                ty = "".concat(tp, " File Downloaded"),
                tm = "session_start",
                tb = "session_end",
                tw = "".concat(tp, " File Extension"),
                tE = "".concat(tp, " File Name"),
                t_ = "".concat(tp, " Link ID"),
                tI = "".concat(tp, " Link Text"),
                tS = "".concat(tp, " Link URL"),
                tT = "".concat(tp, " Form ID"),
                tk = "".concat(tp, " Form Name"),
                tC = "".concat(tp, " Form Destination"),
                tP = "cookie",
                tO = function(e) {
                    function t(t, n, r, i, o, s, u, a, c, l, d, f, h, p, v, g, y, m, b, w, E, _, I, S, k, C, P, O, A, R, x, N, H, L) {
                        void 0 === r && (r = new e8), void 0 === i && (i = {
                            domain: "",
                            expiration: 365,
                            sameSite: "Lax",
                            secure: !1,
                            upgrade: !0
                        }), void 0 === a && (a = 1e3), void 0 === c && (c = 5), void 0 === l && (l = 30), void 0 === d && (d = tP), void 0 === g && (g = new B), void 0 === y && (y = T.Warn), void 0 === b && (b = !1), void 0 === w && (w = !1), void 0 === I && (I = ""), void 0 === S && (S = "US"), void 0 === C && (C = 18e5), void 0 === P && (P = new tu({
                            loggerProvider: g
                        })), void 0 === O && (O = {
                            ipAddress: !0,
                            language: !0,
                            platform: !0
                        }), void 0 === A && (A = "fetch"), void 0 === R && (R = !1), void 0 === x && (x = !1);
                        var U = e.call(this, {
                            apiKey: t,
                            storageProvider: P,
                            transportProvider: tx(A)
                        }) || this;
                        return U.apiKey = t, U.appVersion = n, U.cookieOptions = i, U.defaultTracking = o, U.autocapture = s, U.flushIntervalMillis = a, U.flushMaxRetries = c, U.flushQueueSize = l, U.identityStorage = d, U.ingestionMetadata = f, U.instanceName = h, U.loggerProvider = g, U.logLevel = y, U.minIdLength = m, U.offline = b, U.partnerId = E, U.plan = _, U.serverUrl = I, U.serverZone = S, U.sessionTimeout = C, U.storageProvider = P, U.trackingOptions = O, U.transport = A, U.useBatch = R, U.fetchRemoteConfig = x, U._optOut = !1, U._cookieStorage = r, U.deviceId = u, U.lastEventId = p, U.lastEventTime = v, U.optOut = w, U.sessionId = k, U.pageCounter = H, U.userId = N, U.debugLogsEnabled = L, U.loggerProvider.enable(L ? T.Debug : U.logLevel), U
                    }
                    return (0, M().C6)(t, e), Object.defineProperty(t.prototype, "cookieStorage", {
                        get: function() {
                            return this._cookieStorage
                        },
                        set: function(e) {
                            this._cookieStorage !== e && (this._cookieStorage = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "deviceId", {
                        get: function() {
                            return this._deviceId
                        },
                        set: function(e) {
                            this._deviceId !== e && (this._deviceId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "userId", {
                        get: function() {
                            return this._userId
                        },
                        set: function(e) {
                            this._userId !== e && (this._userId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "sessionId", {
                        get: function() {
                            return this._sessionId
                        },
                        set: function(e) {
                            this._sessionId !== e && (this._sessionId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "optOut", {
                        get: function() {
                            return this._optOut
                        },
                        set: function(e) {
                            this._optOut !== e && (this._optOut = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventTime", {
                        get: function() {
                            return this._lastEventTime
                        },
                        set: function(e) {
                            this._lastEventTime !== e && (this._lastEventTime = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "lastEventId", {
                        get: function() {
                            return this._lastEventId
                        },
                        set: function(e) {
                            this._lastEventId !== e && (this._lastEventId = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pageCounter", {
                        get: function() {
                            return this._pageCounter
                        },
                        set: function(e) {
                            this._pageCounter !== e && (this._pageCounter = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "debugLogsEnabled", {
                        set: function(e) {
                            this._debugLogsEnabled !== e && (this._debugLogsEnabled = e, this.updateStorage())
                        },
                        enumerable: !1,
                        configurable: !0
                    }), t.prototype.updateStorage = function() {
                        var e = {
                            deviceId: this._deviceId,
                            userId: this._userId,
                            sessionId: this._sessionId,
                            optOut: this._optOut,
                            lastEventTime: this._lastEventTime,
                            lastEventId: this._lastEventId,
                            pageCounter: this._pageCounter,
                            debugLogsEnabled: this._debugLogsEnabled
                        };
                        this.cookieStorage.set(te(this.apiKey), e)
                    }, t
                }(G),
                tA = function(e) {
                    for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    return (0, M().sH)(void 0, (0, M().fX)([e], (0, M().zs)(t), !1), void 0, function(e, t, n) {
                        var r, i, o, s, u, a, c, l, d, f, h, p, v, g, y, m, b, w, E, _, I, S, T, k, C, P, O, A, R, x, N, H, L, U, D, q, Y, j, F, z, $, V, J;
                        return void 0 === t && (t = {}), (0, M().YH)(this, function(K) {
                            switch (K.label) {
                                case 0:
                                    if (r = t.identityStorage || tP, E = {}, r === tP) return [3, 1];
                                    return o = "", [3, 5];
                                case 1:
                                    if (null == (I = null == (_ = t.cookieOptions) ? void 0 : _.domain)) return [3, 2];
                                    return s = I, [3, 4];
                                case 2:
                                    return [4, tN()];
                                case 3:
                                    s = K.sent(), K.label = 4;
                                case 4:
                                    o = s, K.label = 5;
                                case 5:
                                    return i = M().Cl.apply(void 0, [(E.domain = o, E.expiration = 365, E.sameSite = "Lax", E.secure = !1, E.upgrade = !0, E), t.cookieOptions]), [4, td(e, u = tR(t.identityStorage, i), null == (T = null == (S = t.cookieOptions) ? void 0 : S.upgrade) || T)];
                                case 6:
                                    return a = K.sent(), [4, u.get(te(e))];
                                case 7:
                                    return c = K.sent(), l = eq(), d = null != (A = null != (O = null != (P = null != (C = null != (k = t.deviceId) ? k : l.ampDeviceId) ? C : l.deviceId) ? P : null == c ? void 0 : c.deviceId) ? O : a.deviceId) ? A : en(), f = null != (R = null == c ? void 0 : c.lastEventId) ? R : a.lastEventId, h = null != (x = null == c ? void 0 : c.lastEventTime) ? x : a.lastEventTime, p = null != (H = null != (N = t.optOut) ? N : null == c ? void 0 : c.optOut) ? H : a.optOut, v = null != (L = null == c ? void 0 : c.sessionId) ? L : a.sessionId, g = null != (D = null != (U = t.userId) ? U : null == c ? void 0 : c.userId) ? D : a.userId, n.previousSessionDeviceId = null != (q = null == c ? void 0 : c.deviceId) ? q : a.deviceId, n.previousSessionUserId = null != (Y = null == c ? void 0 : c.userId) ? Y : a.userId, y = {
                                        ipAddress: null == (F = null == (j = t.trackingOptions) ? void 0 : j.ipAddress) || F,
                                        language: null == ($ = null == (z = t.trackingOptions) ? void 0 : z.language) || $,
                                        platform: null == (J = null == (V = t.trackingOptions) ? void 0 : V.platform) || J
                                    }, m = null == c ? void 0 : c.pageCounter, b = null == c ? void 0 : c.debugLogsEnabled, void 0 !== t.autocapture && (t.defaultTracking = t.autocapture), [4, (w = new tO(e, t.appVersion, u, i, t.defaultTracking, t.autocapture, d, t.flushIntervalMillis, t.flushMaxRetries, t.flushQueueSize, r, t.ingestionMetadata, t.instanceName, f, h, t.loggerProvider, t.logLevel, t.minIdLength, t.offline, p, t.partnerId, t.plan, t.serverUrl, t.serverZone, v, t.sessionTimeout, t.storageProvider, y, t.transport, t.useBatch, t.fetchRemoteConfig, g, m, b)).storageProvider.isEnabled()];
                                case 8:
                                    return K.sent() || (w.loggerProvider.warn("Storage provider ".concat(w.storageProvider.constructor.name, " is not enabled. Falling back to MemoryStorage.")), w.storageProvider = new e8), [2, w]
                            }
                        })
                    })
                },
                tR = function(e, t) {
                    switch (void 0 === e && (e = tP), void 0 === t && (t = {}), e) {
                        case "localStorage":
                            return new tu;
                        case "sessionStorage":
                            return new ta;
                        case "none":
                            return new e8;
                        default:
                            return new tt((0, M().Cl)((0, M().Cl)({}, t), {
                                expirationDays: t.expiration
                            }))
                    }
                },
                tx = function(e) {
                    return "xhr" === e ? new tc : "beacon" === e ? new tl : new to
                },
                tN = function(e) {
                    return (0, M().sH)(void 0, void 0, void 0, function() {
                        var t, n, r, i, o, s;
                        return (0, M().YH)(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    return [4, new tt().isEnabled()];
                                case 1:
                                    if (!u.sent() || !e && ("u" < typeof location || !location.hostname)) return [2, ""];
                                    for (t = (null != e ? e : location.hostname).split("."), n = [], r = "AMP_TLDTEST", i = t.length - 2; i >= 0; --i) n.push(t.slice(i).join("."));
                                    i = 0, u.label = 2;
                                case 2:
                                    if (!(i < n.length)) return [3, 7];
                                    return [4, (s = new tt({
                                        domain: "." + (o = n[i])
                                    })).set(r, 1)];
                                case 3:
                                    return u.sent(), [4, s.get(r)];
                                case 4:
                                    if (!u.sent()) return [3, 6];
                                    return [4, s.remove(r)];
                                case 5:
                                    return u.sent(), [2, "." + o];
                                case 6:
                                    return i++, [3, 2];
                                case 7:
                                    return [2, ""]
                            }
                        })
                    })
                };
            (c = k || (k = {})).SET = "$set", c.SET_ONCE = "$setOnce", c.ADD = "$add", c.APPEND = "$append", c.PREPEND = "$prepend", c.REMOVE = "$remove", c.PREINSERT = "$preInsert", c.POSTINSERT = "$postInsert", c.UNSET = "$unset", c.CLEAR_ALL = "$clearAll", (l = C || (C = {})).REVENUE_PRODUCT_ID = "$productId", l.REVENUE_QUANTITY = "$quantity", l.REVENUE_PRICE = "$price", l.REVENUE_TYPE = "$revenueType", l.REVENUE_CURRENCY = "$currency", l.REVENUE = "$revenue", (d = P || (P = {})).IDENTIFY = "$identify", d.GROUP_IDENTIFY = "$groupidentify", d.REVENUE = "revenue_amount";
            var tH = function(e) {
                    var t = {};
                    for (var n in e) {
                        var r = e[n];
                        r && (t[n] = r)
                    }
                    return t
                },
                tL = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, i = eD(),
                        o = void 0,
                        s = e.trackOn,
                        u = e.trackHistoryChanges,
                        a = e.eventType,
                        c = void 0 === a ? "[Amplitude] Page Viewed" : a,
                        l = function(e) {
                            var t = e;
                            try {
                                t = decodeURI(e)
                            } catch (e) {
                                null == o || o.error("Malformed URI sequence: ", e)
                            }
                            return t
                        },
                        d = function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var e, t, n;
                                return (0, M().YH)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return e = l("u" > typeof location && location.href || ""), n = {
                                                event_type: c
                                            }, t = [{}], [4, tU()];
                                        case 1:
                                            return [2, (n.event_properties = M().Cl.apply(void 0, [M().Cl.apply(void 0, t.concat([r.sent()])), {
                                                "[Amplitude] Page Domain": "u" > typeof location && location.hostname || "",
                                                "[Amplitude] Page Location": e,
                                                "[Amplitude] Page Path": "u" > typeof location && l(location.pathname) || "",
                                                "[Amplitude] Page Title": "u" > typeof document && document.title || "",
                                                "[Amplitude] Page URL": e.split("?")[0]
                                            }]), n)]
                                    }
                                })
                            })
                        },
                        f = function() {
                            return void 0 === s || "function" == typeof s && s()
                        },
                        h = "u" > typeof location ? location.href : null,
                        p = function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var e, n, r, i;
                                return (0, M().YH)(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            if (n = tq(u, e = location.href, h || "") && f(), h = e, !n) return [3, 4];
                                            if (null == o || o.log("Tracking page view event"), null != t) return [3, 1];
                                            return [3, 3];
                                        case 1:
                                            return i = (r = t).track, [4, d()];
                                        case 2:
                                            i.apply(r, [s.sent()]), s.label = 3;
                                        case 3:
                                            s.label = 4;
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        },
                        v = function() {
                            p()
                        };
                    return {
                        name: "@amplitude/plugin-page-view-tracking-browser",
                        type: "enrichment",
                        setup: function(e, s) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var u, a;
                                return (0, M().YH)(this, function(c) {
                                    switch (c.label) {
                                        case 0:
                                            if (t = s, r = e, (o = e.loggerProvider).log("Installing @amplitude/plugin-page-view-tracking-browser"), i && (i.addEventListener("popstate", v), n = i.history.pushState, i.history.pushState = new Proxy(i.history.pushState, {
                                                    apply: function(e, t, n) {
                                                        var r = (0, M().zs)(n, 3),
                                                            i = r[0],
                                                            o = r[1],
                                                            s = r[2];
                                                        e.apply(t, [i, o, s]), p()
                                                    }
                                                })), !f()) return [3, 2];
                                            return o.log("Tracking page view event"), a = (u = t).track, [4, d()];
                                        case 1:
                                            a.apply(u, [c.sent()]), c.label = 2;
                                        case 2:
                                            return [2]
                                    }
                                })
                            })
                        },
                        execute: function(e) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var t;
                                return (0, M().YH)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            if (!("attribution" === s && tD(e))) return [3, 2];
                                            return null == o || o.log("Enriching campaign event to page view event with campaign parameters"), [4, d()];
                                        case 1:
                                            e.event_type = (t = n.sent()).event_type, e.event_properties = (0, M().Cl)((0, M().Cl)({}, e.event_properties), t.event_properties), n.label = 2;
                                        case 2:
                                            return r && e.event_type === c && (r.pageCounter = r.pageCounter ? r.pageCounter + 1 : 1, e.event_properties = (0, M().Cl)((0, M().Cl)({}, e.event_properties), {
                                                "[Amplitude] Page Counter": r.pageCounter
                                            })), [2, e]
                                    }
                                })
                            })
                        },
                        teardown: function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(e) {
                                    return i && (i.removeEventListener("popstate", v), n && (i.history.pushState = n)), [2]
                                })
                            })
                        }
                    }
                },
                tU = function() {
                    return (0, M().sH)(void 0, void 0, void 0, function() {
                        var e;
                        return (0, M().YH)(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return e = tH, [4, new eM().parse()];
                                case 1:
                                    return [2, e.apply(void 0, [t.sent()])]
                            }
                        })
                    })
                },
                tD = function(e) {
                    if ("$identify" === e.event_type && e.user_properties) {
                        var t = e.user_properties,
                            n = t[k.SET] || {},
                            r = t[k.UNSET] || {},
                            i = (0, M().fX)((0, M().fX)([], (0, M().zs)(Object.keys(n)), !1), (0, M().zs)(Object.keys(r)), !1);
                        return Object.keys(ex).every(function(e) {
                            return i.includes(e)
                        })
                    }
                    return !1
                },
                tq = function(e, t, n) {
                    if ("pathOnly" !== e) return t !== n;
                    if ("" == n) return !0;
                    var r = new URL(t),
                        i = new URL(n);
                    return r.origin + r.pathname !== i.origin + i.pathname
                },
                tY = function() {
                    var e, t = [],
                        n = function(e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function() {
                            t.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-form-interaction-tracking-browser",
                        type: "enrichment",
                        setup: function(t, r) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var i;
                                return (0, M().YH)(this, function(o) {
                                    return null == (i = eD()) || i.addEventListener("load", function() {
                                        if (!r) return void t.loggerProvider.warn("Form interaction tracking requires a later version of @amplitude/analytics-browser. Form interaction events are not tracked.");
                                        if ("u" > typeof document) {
                                            var i = function(e) {
                                                var t = !1;
                                                n(e, "change", function() {
                                                    var n, i = tj(e);
                                                    t || r.track(tv, ((n = {})[tT] = tM(e.id), n[tk] = tM(e.name), n[tC] = i, n)), t = !0
                                                }), n(e, "submit", function() {
                                                    var n, i, o = tj(e);
                                                    t || r.track(tv, ((n = {})[tT] = tM(e.id), n[tk] = tM(e.name), n[tC] = o, n)), r.track(tg, ((i = {})[tT] = tM(e.id), i[tk] = tM(e.name), i[tC] = o, i)), t = !1
                                                })
                                            };
                                            Array.from(document.getElementsByTagName("form")).forEach(i), "u" > typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        "FORM" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("form")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                tM = function(e) {
                    if ("string" == typeof e) return e
                },
                tj = function(e) {
                    var t = e.getAttribute("action");
                    try {
                        t = new URL(encodeURI(null != t ? t : ""), window.location.href).href
                    } catch (e) {}
                    return t
                },
                tF = function() {
                    var e, t = [],
                        n = function(e, n, r) {
                            e.addEventListener(n, r), t.push({
                                element: e,
                                type: n,
                                handler: r
                            })
                        },
                        r = function() {
                            t.forEach(function(e) {
                                var t = e.element,
                                    n = e.type,
                                    r = e.handler;
                                null == t || t.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-file-download-tracking-browser",
                        type: "enrichment",
                        setup: function(t, r) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var i;
                                return (0, M().YH)(this, function(o) {
                                    return null == (i = eD()) || i.addEventListener("load", function() {
                                        if (!r) return void t.loggerProvider.warn("File download tracking requires a later version of @amplitude/analytics-browser. File download events are not tracked.");
                                        if ("u" > typeof document) {
                                            var i = function(e) {
                                                    try {
                                                        t = new URL(e.href, window.location.href)
                                                    } catch (e) {
                                                        return
                                                    }
                                                    var t, i = o.exec(t.href),
                                                        s = null == i ? void 0 : i[1];
                                                    s && n(e, "click", function() {
                                                        var n;
                                                        s && r.track(ty, ((n = {})[tw] = s, n[tE] = t.pathname, n[t_] = e.id, n[tI] = e.text, n[tS] = e.href, n))
                                                    })
                                                },
                                                o = /\.(pdf|xlsx?|docx?|txt|rtf|csv|exe|key|pp(s|t|tx)|7z|pkg|rar|gz|zip|avi|mov|mp4|mpe?g|wmv|midi?|mp3|wav|wma)(\?.+)?$/;
                                            Array.from(document.getElementsByTagName("a")).forEach(i), "u" > typeof MutationObserver && (e = new MutationObserver(function(e) {
                                                e.forEach(function(e) {
                                                    e.addedNodes.forEach(function(e) {
                                                        "A" === e.nodeName && i(e), "querySelectorAll" in e && "function" == typeof e.querySelectorAll && Array.from(e.querySelectorAll("a")).map(i)
                                                    })
                                                })
                                            })).observe(document.body, {
                                                subtree: !0,
                                                childList: !0
                                            })
                                        }
                                    }), [2]
                                })
                            })
                        },
                        execute: function(e) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(t) {
                                    return null == e || e.disconnect(), r(), [2]
                                })
                            })
                        }
                    }
                },
                tz = !1,
                t$ = function(e) {
                    tz || void 0 !== e.defaultTracking || (e.loggerProvider.warn("`options.defaultTracking` is set to undefined. This implicitly configures your Amplitude instance to track Page Views, Sessions, File Downloads, and Form Interactions. You can suppress this warning by explicitly setting a value to `options.defaultTracking`. The value must either be a boolean, to enable and disable all default events, or an object, for advanced configuration. For example:\n\namplitude.init(<YOUR_API_KEY>, {\n  defaultTracking: true,\n});\n\nVisit https://www.docs.developers.amplitude.com/data/sdks/browser-2/#tracking-default-events for more details."), tz = !0)
                },
                tV = function() {
                    var e = eD(),
                        t = [],
                        n = function(n, r) {
                            e && (e.addEventListener(n, r), t.push({
                                type: n,
                                handler: r
                            }))
                        },
                        r = function() {
                            t.forEach(function(t) {
                                var n = t.type,
                                    r = t.handler;
                                e && e.removeEventListener(n, r)
                            }), t = []
                        };
                    return {
                        name: "@amplitude/plugin-network-checker-browser",
                        type: "before",
                        setup: function(e, t) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(r) {
                                    return "u" < typeof navigator ? (e.loggerProvider.debug("Network connectivity checker plugin is disabled because navigator is not available."), e.offline = !1) : (e.offline = !navigator.onLine, n("online", function() {
                                        e.loggerProvider.debug("Network connectivity changed to online."), e.offline = !1, setTimeout(function() {
                                            t.flush()
                                        }, e.flushIntervalMillis)
                                    }), n("offline", function() {
                                        e.loggerProvider.debug("Network connectivity changed to offline."), e.offline = !0
                                    })), [2]
                                })
                            })
                        },
                        teardown: function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(e) {
                                    return r(), [2]
                                })
                            })
                        }
                    }
                };
            (f = O || (O = {})).Unknown = "unknown", f.Skipped = "skipped", f.Success = "success", f.RateLimit = "rate_limit", f.PayloadTooLarge = "payload_too_large", f.Invalid = "invalid", f.Failed = "failed", f.Timeout = "Timeout", f.SystemError = "SystemError", (h = A || (A = {})).US = "US", h.EU = "EU";
            var tJ = "Remote config fetch rejected due to timeout after 5 seconds",
                tK = "Unexpected error occurred",
                tW = function() {
                    function e(e) {
                        var t = e.localConfig,
                            n = e.configKeys,
                            r = this;
                        this.retryTimeout = 1e3, this.attempts = 0, this.sessionTargetingMatch = !1, this.metrics = {}, this.getRemoteConfig = function(e, t, n) {
                            return (0, M().sH)(r, void 0, void 0, function() {
                                var r, i, o;
                                return (0, M().YH)(this, function(s) {
                                    switch (s.label) {
                                        case 0:
                                            return r = Date.now(), [4, this.fetchWithTimeout(n)];
                                        case 1:
                                            if ((i = s.sent()) && (o = i.configs && i.configs[e])) return this.metrics.fetchTimeAPISuccess = Date.now() - r, [2, o[t]];
                                            return this.metrics.fetchTimeAPIFail = Date.now() - r, [2, void 0]
                                    }
                                })
                            })
                        }, this.fetchWithTimeout = function(e) {
                            return (0, M().sH)(r, void 0, void 0, function() {
                                var t, n, r;
                                return (0, M().YH)(this, function(i) {
                                    switch (i.label) {
                                        case 0:
                                            return t = new AbortController, n = setTimeout(function() {
                                                return t.abort()
                                            }, 5e3), [4, this.fetchRemoteConfig(t.signal, e)];
                                        case 1:
                                            return r = i.sent(), clearTimeout(n), [2, r]
                                    }
                                })
                            })
                        }, this.fetchRemoteConfig = function(e, t) {
                            return (0, M().sH)(r, void 0, void 0, function() {
                                var n, r, i, o, s, u, a, c, l, d, f;
                                return (0, M().YH)(this, function(h) {
                                    switch (h.label) {
                                        case 0:
                                            if (t === this.lastFetchedSessionId && this.attempts >= this.localConfig.flushMaxRetries) return [2, this.completeRequest({
                                                err: "Remote config fetch rejected due to exceeded retry count"
                                            })];
                                            if (e.aborted) return [2, this.completeRequest({
                                                err: tJ
                                            })];
                                            t !== this.lastFetchedSessionId && (this.lastFetchedSessionId = t, this.attempts = 0);
                                            h.label = 1;
                                        case 1:
                                            h.trys.push([1, 3, , 4]), n = new URLSearchParams({
                                                api_key: this.localConfig.apiKey
                                            });
                                            try {
                                                for (i = (r = (0, M().Ju)(this.configKeys)).next(); !i.done; i = r.next()) o = i.value, n.append("config_keys", o)
                                            } catch (e) {
                                                l = {
                                                    error: e
                                                }
                                            } finally {
                                                try {
                                                    i && !i.done && (d = r.return) && d.call(r)
                                                } finally {
                                                    if (l) throw l.error
                                                }
                                            }
                                            return t && n.set("session_id", String(t)), s = {
                                                headers: {
                                                    Accept: "*/*"
                                                },
                                                method: "GET"
                                            }, u = "".concat(this.getServerUrl(), "?").concat(n.toString()), this.attempts += 1, [4, fetch(u, (0, M().Cl)((0, M().Cl)({}, s), {
                                                signal: e
                                            }))];
                                        case 2:
                                            if (null === (a = h.sent())) return [2, this.completeRequest({
                                                err: tK
                                            })];
                                            switch (new ti().buildStatus(a.status)) {
                                                case O.Success:
                                                    return this.attempts = 0, [2, this.parseAndStoreConfig(a)];
                                                case O.Failed:
                                                    return [2, this.retryFetch(e, t)];
                                                default:
                                                    return [2, this.completeRequest({
                                                        err: "Network error occurred, remote config fetch failed"
                                                    })]
                                            }
                                        case 3:
                                            if (c = h.sent(), e.aborted) return [2, this.completeRequest({
                                                err: tJ
                                            })];
                                            return [2, this.completeRequest({
                                                err: null != (f = c.message) ? f : tK
                                            })];
                                        case 4:
                                            return [2]
                                    }
                                })
                            })
                        }, this.retryFetch = function(e, t) {
                            return (0, M().sH)(r, void 0, void 0, function() {
                                var n = this;
                                return (0, M().YH)(this, function(r) {
                                    switch (r.label) {
                                        case 0:
                                            return [4, new Promise(function(e) {
                                                return setTimeout(e, n.attempts * n.retryTimeout)
                                            })];
                                        case 1:
                                            return r.sent(), [2, this.fetchRemoteConfig(e, t)]
                                    }
                                })
                            })
                        }, this.parseAndStoreConfig = function(e) {
                            return (0, M().sH)(r, void 0, void 0, function() {
                                var t;
                                return (0, M().YH)(this, function(n) {
                                    switch (n.label) {
                                        case 0:
                                            return [4, e.json()];
                                        case 1:
                                            return t = n.sent(), this.completeRequest({
                                                success: "Remote config successfully fetched"
                                            }), [2, t]
                                    }
                                })
                            })
                        }, this.localConfig = t, this.configKeys = n
                    }
                    return e.prototype.getServerUrl = function() {
                        return this.localConfig.serverZone === A.STAGING ? "https://sr-client-cfg.stag2.amplitude.com/config" : this.localConfig.serverZone === A.EU ? "https://sr-client-cfg.eu.amplitude.com/config" : "https://sr-client-cfg.amplitude.com/config"
                    }, e.prototype.completeRequest = function(e) {
                        var t = e.err,
                            n = e.success;
                        if (t) throw Error(t);
                        n && this.localConfig.loggerProvider.log(n)
                    }, e
                }(),
                tX = function(e) {
                    var t = e.localConfig,
                        n = e.configKeys;
                    return (0, M().sH)(void 0, void 0, void 0, function() {
                        return (0, M().YH)(this, function(e) {
                            return [2, new tW({
                                localConfig: t,
                                configKeys: n
                            })]
                        })
                    })
                },
                tQ = function() {
                    function e(e) {
                        this.config = e, this.config.loggerProvider.debug("Local configuration before merging with remote config", JSON.stringify(this.config, null, 2))
                    }
                    return e.prototype.initialize = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var e;
                            return (0, M().YH)(this, function(t) {
                                switch (t.label) {
                                    case 0:
                                        return e = this, [4, tX({
                                            localConfig: this.config,
                                            configKeys: ["analyticsSDK"]
                                        })];
                                    case 1:
                                        return e.remoteConfigFetch = t.sent(), [2]
                                }
                            })
                        })
                    }, e.prototype.generateJoinedConfig = function() {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var e, t, n, r, i, o;
                            return (0, M().YH)(this, function(s) {
                                switch (s.label) {
                                    case 0:
                                        if (s.trys.push([0, 3, , 4]), !(t = this.remoteConfigFetch)) return [3, 2];
                                        return [4, this.remoteConfigFetch.getRemoteConfig("analyticsSDK", "browserSDK", this.config.sessionId)];
                                    case 1:
                                        t = s.sent(), s.label = 2;
                                    case 2:
                                        return e = t, this.config.loggerProvider.debug("Remote configuration:", JSON.stringify(e, null, 2)), e && "autocapture" in e && ("boolean" == typeof e.autocapture && (this.config.autocapture = e.autocapture), "object" == typeof e.autocapture && (void 0 === this.config.autocapture && (this.config.autocapture = e.autocapture), "boolean" == typeof this.config.autocapture && (this.config.autocapture = (0, M().Cl)({
                                            attribution: this.config.autocapture,
                                            fileDownloads: this.config.autocapture,
                                            formInteractions: this.config.autocapture,
                                            pageViews: this.config.autocapture,
                                            sessions: this.config.autocapture,
                                            elementInteractions: this.config.autocapture
                                        }, e.autocapture)), "object" == typeof this.config.autocapture && (this.config.autocapture = (0, M().Cl)((0, M().Cl)({}, this.config.autocapture), e.autocapture))), this.config.defaultTracking = this.config.autocapture), this.config.loggerProvider.debug("Joined configuration: ", JSON.stringify(this.config, null, 2)), null != (o = this.config).requestMetadata || (o.requestMetadata = new et), (null == (r = this.remoteConfigFetch) ? void 0 : r.metrics.fetchTimeAPISuccess) && this.config.requestMetadata.recordHistogram("remote_config_fetch_time_API_success", this.remoteConfigFetch.metrics.fetchTimeAPISuccess), (null == (i = this.remoteConfigFetch) ? void 0 : i.metrics.fetchTimeAPIFail) && this.config.requestMetadata.recordHistogram("remote_config_fetch_time_API_fail", this.remoteConfigFetch.metrics.fetchTimeAPIFail), [3, 4];
                                    case 3:
                                        return n = s.sent(), this.config.loggerProvider.error("Failed to fetch remote configuration because of error: ", n), [3, 4];
                                    case 4:
                                        return [2, this.config]
                                }
                            })
                        })
                    }, e
                }(),
                tB = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"],
                tZ = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
                tG = "[Amplitude] Element Clicked",
                t0 = "[Amplitude] Element Tag",
                t1 = "[Amplitude] Element Text",
                t2 = "[Amplitude] Element Selector",
                t3 = "[Amplitude] Page URL",
                t4 = "https://app.amplitude.com",
                t5 = {
                    US: t4,
                    EU: "https://app.eu.amplitude.com",
                    STAGING: "https://apps.stag2.amplitude.com"
                },
                t6 = "amp-visual-tagging-selector-highlight",
                t9 = function(e) {
                    return e && "number" == typeof e.length && "function" != typeof e
                };

            function t7(e) {
                return "function" == typeof e
            }

            function t8(e) {
                return t7(null == e ? void 0 : e.then)
            }

            function ne(e) {
                var t = e(function(e) {
                    Error.call(e), e.stack = Error().stack
                });
                return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t
            }
            var nt = ne(function(e) {
                return function(t) {
                    e(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(e, t) {
                        return t + 1 + ") " + e.toString()
                    }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t
                }
            });

            function nn(e, t) {
                if (e) {
                    var n = e.indexOf(t);
                    0 <= n && e.splice(n, 1)
                }
            }
            var nr = function() {
                var e;

                function t(e) {
                    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null
                }
                return t.prototype.unsubscribe = function() {
                    if (!this.closed) {
                        this.closed = !0;
                        var e, t, n, r, i, o = this._parentage;
                        if (o)
                            if (this._parentage = null, Array.isArray(o)) try {
                                for (var s = (0, M().Ju)(o), u = s.next(); !u.done; u = s.next()) u.value.remove(this)
                            } catch (t) {
                                e = {
                                    error: t
                                }
                            } finally {
                                try {
                                    u && !u.done && (t = s.return) && t.call(s)
                                } finally {
                                    if (e) throw e.error
                                }
                            } else o.remove(this);
                        var a = this.initialTeardown;
                        if (t7(a)) try {
                            a()
                        } catch (e) {
                            i = e instanceof nt ? e.errors : [e]
                        }
                        var c = this._finalizers;
                        if (c) {
                            this._finalizers = null;
                            try {
                                for (var l = (0, M().Ju)(c), d = l.next(); !d.done; d = l.next()) {
                                    var f = d.value;
                                    try {
                                        no(f)
                                    } catch (e) {
                                        i = null != i ? i : [], e instanceof nt ? i = (0, M().fX)((0, M().fX)([], (0, M().zs)(i)), (0, M().zs)(e.errors)) : i.push(e)
                                    }
                                }
                            } catch (e) {
                                n = {
                                    error: e
                                }
                            } finally {
                                try {
                                    d && !d.done && (r = l.return) && r.call(l)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                        }
                        if (i) throw new nt(i)
                    }
                }, t.prototype.add = function(e) {
                    var n;
                    if (e && e !== this)
                        if (this.closed) no(e);
                        else {
                            if (e instanceof t) {
                                if (e.closed || e._hasParent(this)) return;
                                e._addParent(this)
                            }(this._finalizers = null != (n = this._finalizers) ? n : []).push(e)
                        }
                }, t.prototype._hasParent = function(e) {
                    var t = this._parentage;
                    return t === e || Array.isArray(t) && t.includes(e)
                }, t.prototype._addParent = function(e) {
                    var t = this._parentage;
                    this._parentage = Array.isArray(t) ? (t.push(e), t) : t ? [t, e] : e
                }, t.prototype._removeParent = function(e) {
                    var t = this._parentage;
                    t === e ? this._parentage = null : Array.isArray(t) && nn(t, e)
                }, t.prototype.remove = function(e) {
                    var n = this._finalizers;
                    n && nn(n, e), e instanceof t && e._removeParent(this)
                }, (e = new t).closed = !0, t.EMPTY = e, t
            }();

            function ni(e) {
                return e instanceof nr || e && "closed" in e && t7(e.remove) && t7(e.add) && t7(e.unsubscribe)
            }

            function no(e) {
                t7(e) ? e() : e.unsubscribe()
            }
            nr.EMPTY;
            var ns = void 0,
                nu = {
                    setTimeout: function(e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var i = nu.delegate;
                        return (null == i ? void 0 : i.setTimeout) ? i.setTimeout.apply(i, (0, M().fX)([e, t], (0, M().zs)(n))) : setTimeout.apply(void 0, (0, M().fX)([e, t], (0, M().zs)(n)))
                    },
                    clearTimeout: function(e) {
                        var t = nu.delegate;
                        return ((null == t ? void 0 : t.clearTimeout) || clearTimeout)(e)
                    },
                    delegate: void 0
                };

            function na(e) {
                nu.setTimeout(function() {
                    !1;
                    throw e
                })
            }

            function nc() {}
            var nl = nd("C", void 0, void 0);

            function nd(e, t, n) {
                return {
                    kind: e,
                    value: t,
                    error: n
                }
            }
            var nf = null,
                nh = function(e) {
                    function t(t) {
                        var n = e.call(this) || this;
                        return n.isStopped = !1, t ? (n.destination = t, ni(t) && t.add(n)) : n.destination = nw, n
                    }
                    return (0, M().C6)(t, e), t.create = function(e, t, n) {
                        return new ny(e, t, n)
                    }, t.prototype.next = function(e) {
                        this.isStopped ? nb(nd("N", e, void 0), this) : this._next(e)
                    }, t.prototype.error = function(e) {
                        this.isStopped ? nb(nd("E", void 0, e), this) : (this.isStopped = !0, this._error(e))
                    }, t.prototype.complete = function() {
                        this.isStopped ? nb(nl, this) : (this.isStopped = !0, this._complete())
                    }, t.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, e.prototype.unsubscribe.call(this), this.destination = null)
                    }, t.prototype._next = function(e) {
                        this.destination.next(e)
                    }, t.prototype._error = function(e) {
                        try {
                            this.destination.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    }, t.prototype._complete = function() {
                        try {
                            this.destination.complete()
                        } finally {
                            this.unsubscribe()
                        }
                    }, t
                }(nr),
                np = Function.prototype.bind;

            function nv(e, t) {
                return np.call(e, t)
            }
            var ng = function() {
                    function e(e) {
                        this.partialObserver = e
                    }
                    return e.prototype.next = function(e) {
                        var t = this.partialObserver;
                        if (t.next) try {
                            t.next(e)
                        } catch (e) {
                            nm(e)
                        }
                    }, e.prototype.error = function(e) {
                        var t = this.partialObserver;
                        if (t.error) try {
                            t.error(e)
                        } catch (e) {
                            nm(e)
                        } else nm(e)
                    }, e.prototype.complete = function() {
                        var e = this.partialObserver;
                        if (e.complete) try {
                            e.complete()
                        } catch (e) {
                            nm(e)
                        }
                    }, e
                }(),
                ny = function(e) {
                    function t(t, n, r) {
                        var i, o, s = e.call(this) || this;
                        return t7(t) || !t ? i = {
                            next: null != t ? t : void 0,
                            error: null != n ? n : void 0,
                            complete: null != r ? r : void 0
                        } : i = t, s.destination = new ng(i), s
                    }
                    return (0, M().C6)(t, e), t
                }(nh);

            function nm(e) {
                1;
                na(e)
            }

            function nb(e, t) {}
            var nw = {
                    closed: !0,
                    next: nc,
                    error: function(e) {
                        throw e
                    },
                    complete: nc
                },
                nE = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function n_(e) {
                return e
            }
            var nI = function() {
                function e(e) {
                    e && (this._subscribe = e)
                }
                return e.prototype.lift = function(t) {
                    var n = new e;
                    return n.source = this, n.operator = t, n
                }, e.prototype.subscribe = function(e, t, n) {
                    var r = this,
                        i = ! function(e) {
                            return e && e instanceof nh || e && t7(e.next) && t7(e.error) && t7(e.complete) && ni(e)
                        }(e) ? new ny(e, t, n) : e;
                    return ! function(e) {
                        var t, n, r, i;
                        1;
                        e()
                    }(function() {
                        var e = r.operator,
                            t = r.source;
                        i.add(e ? e.call(i, t) : t ? r._subscribe(i) : r._trySubscribe(i))
                    }), i
                }, e.prototype._trySubscribe = function(e) {
                    try {
                        return this._subscribe(e)
                    } catch (t) {
                        e.error(t)
                    }
                }, e.prototype.forEach = function(e, t) {
                    var n = this;
                    return new(t = nS(t))(function(t, r) {
                        var i = new ny({
                            next: function(t) {
                                try {
                                    e(t)
                                } catch (e) {
                                    r(e), i.unsubscribe()
                                }
                            },
                            error: r,
                            complete: t
                        });
                        n.subscribe(i)
                    })
                }, e.prototype._subscribe = function(e) {
                    var t;
                    return null == (t = this.source) ? void 0 : t.subscribe(e)
                }, e.prototype[nE] = function() {
                    return this
                }, e.prototype.pipe = function() {
                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                    return (0 === e.length ? n_ : 1 === e.length ? e[0] : function(t) {
                        return e.reduce(function(e, t) {
                            return t(e)
                        }, t)
                    })(this)
                }, e.prototype.toPromise = function(e) {
                    var t = this;
                    return new(e = nS(e))(function(e, n) {
                        var r;
                        t.subscribe(function(e) {
                            return r = e
                        }, function(e) {
                            return n(e)
                        }, function() {
                            return e(r)
                        })
                    })
                }, e.create = function(t) {
                    return new e(t)
                }, e
            }();

            function nS(e) {
                var t;
                return null != (t = null != e ? e : ns) ? t : Promise
            }

            function nT(e) {
                return Symbol.asyncIterator && t7(null == e ? void 0 : e[Symbol.asyncIterator])
            }

            function nk(e) {
                return TypeError("You provided " + (null !== e && "object" == typeof e ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")
            }
            var nC = "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator";

            function nP(e) {
                return t7(null == e ? void 0 : e[nC])
            }

            function nO(e) {
                return (0, M().AQ)(this, arguments, function() {
                    var t, n, r;
                    return (0, M().YH)(this, function(i) {
                        switch (i.label) {
                            case 0:
                                t = e.getReader(), i.label = 1;
                            case 1:
                                i.trys.push([1, , 9, 10]), i.label = 2;
                            case 2:
                                return [4, (0, M().N3)(t.read())];
                            case 3:
                                if (r = (n = i.sent()).value, !n.done) return [3, 5];
                                return [4, (0, M().N3)(void 0)];
                            case 4:
                                return [2, i.sent()];
                            case 5:
                                return [4, (0, M().N3)(r)];
                            case 6:
                                return [4, i.sent()];
                            case 7:
                                return i.sent(), [3, 2];
                            case 8:
                                return [3, 10];
                            case 9:
                                return t.releaseLock(), [7];
                            case 10:
                                return [2]
                        }
                    })
                })
            }

            function nA(e) {
                return t7(null == e ? void 0 : e.getReader)
            }

            function nR(e) {
                if (e instanceof nI) return e;
                if (null != e) {
                    var t, n, r, i;
                    if (t7(e[nE])) {
                        return t = e, new nI(function(e) {
                            var n = t[nE]();
                            if (t7(n.subscribe)) return n.subscribe(e);
                            throw TypeError("Provided object does not correctly implement Symbol.observable")
                        })
                    }
                    if (t9(e)) {
                        return n = e, new nI(function(e) {
                            for (var t = 0; t < n.length && !e.closed; t++) e.next(n[t]);
                            e.complete()
                        })
                    }
                    if (t8(e)) {
                        return r = e, new nI(function(e) {
                            r.then(function(t) {
                                e.closed || (e.next(t), e.complete())
                            }, function(t) {
                                return e.error(t)
                            }).then(null, na)
                        })
                    }
                    if (nT(e)) return nx(e);
                    if (nP(e)) {
                        return i = e, new nI(function(e) {
                            var t, n;
                            try {
                                for (var r = (0, M().Ju)(i), o = r.next(); !o.done; o = r.next()) {
                                    var s = o.value;
                                    if (e.next(s), e.closed) return
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    o && !o.done && (n = r.return) && n.call(r)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            e.complete()
                        })
                    }
                    if (nA(e)) return nx(nO(e))
                }
                throw nk(e)
            }

            function nx(e) {
                return new nI(function(t) {
                    (function(e, t) {
                        var n, r, i, o;
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var s;
                            return (0, M().YH)(this, function(u) {
                                switch (u.label) {
                                    case 0:
                                        u.trys.push([0, 5, 6, 11]), n = (0, M().xN)(e), u.label = 1;
                                    case 1:
                                        return [4, n.next()];
                                    case 2:
                                        if ((r = u.sent()).done) return [3, 4];
                                        if (s = r.value, t.next(s), t.closed) return [2];
                                        u.label = 3;
                                    case 3:
                                        return [3, 1];
                                    case 4:
                                        return [3, 11];
                                    case 5:
                                        return i = {
                                            error: u.sent()
                                        }, [3, 11];
                                    case 6:
                                        if (u.trys.push([6, , 9, 10]), !(r && !r.done && (o = n.return))) return [3, 8];
                                        return [4, o.call(n)];
                                    case 7:
                                        u.sent(), u.label = 8;
                                    case 8:
                                        return [3, 10];
                                    case 9:
                                        if (i) throw i.error;
                                        return [7];
                                    case 10:
                                        return [7];
                                    case 11:
                                        return t.complete(), [2]
                                }
                            })
                        })
                    })(e, t).catch(function(e) {
                        return t.error(e)
                    })
                })
            }

            function nN(e) {
                return function(t) {
                    if (t7(null == t ? void 0 : t.lift)) return t.lift(function(t) {
                        try {
                            return e(t, this)
                        } catch (e) {
                            this.error(e)
                        }
                    });
                    throw TypeError("Unable to lift unknown Observable type")
                }
            }

            function nH(e, t, n, r, i) {
                return new nL(e, t, n, r, i)
            }
            var nL = function(e) {
                function t(t, n, r, i, o, s) {
                    var u = e.call(this, t) || this;
                    return u.onFinalize = o, u.shouldUnsubscribe = s, u._next = n ? function(e) {
                        try {
                            n(e)
                        } catch (e) {
                            t.error(e)
                        }
                    } : e.prototype._next, u._error = i ? function(e) {
                        try {
                            i(e)
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._error, u._complete = r ? function() {
                        try {
                            r()
                        } catch (e) {
                            t.error(e)
                        } finally {
                            this.unsubscribe()
                        }
                    } : e.prototype._complete, u
                }
                return (0, M().C6)(t, e), t.prototype.unsubscribe = function() {
                    var t;
                    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
                        var n = this.closed;
                        e.prototype.unsubscribe.call(this), n || null == (t = this.onFinalize) || t.call(this)
                    }
                }, t
            }(nh);

            function nU(e, t) {
                return nN(function(n, r) {
                    var i = 0;
                    n.subscribe(nH(r, function(n) {
                        r.next(e.call(t, n, i++))
                    }))
                })
            }

            function nD(e, t, n, r, i) {
                void 0 === r && (r = 0), void 0 === i && (i = !1);
                var o = t.schedule(function() {
                    n(), i ? e.add(this.schedule(null, r)) : this.unsubscribe()
                }, r);
                if (e.add(o), !i) return o
            }

            function nq(e, t, n) {
                return (void 0 === n && (n = 1 / 0), t7(t)) ? nq(function(n, r) {
                    return nU(function(e, i) {
                        return t(n, e, r, i)
                    })(nR(e(n, r)))
                }, n) : ("number" == typeof t && (n = t), nN(function(t, r) {
                    var i, o, s, u, a, c, l, d;
                    return i = n, o = [], s = 0, u = 0, a = !1, c = function() {
                            !a || o.length || s || r.complete()
                        }, l = function(e) {
                            return s < i ? d(e) : o.push(e)
                        }, d = function(t) {
                            s++;
                            var n = !1;
                            nR(e(t, u++)).subscribe(nH(r, function(e) {
                                r.next(e)
                            }, function() {
                                n = !0
                            }, void 0, function() {
                                if (n) try {
                                    for (s--; o.length && s < i;) ! function() {
                                        var e = o.shift();
                                        d(e)
                                    }();
                                    c()
                                } catch (e) {
                                    r.error(e)
                                }
                            }))
                        }, t.subscribe(nH(r, l, function() {
                            a = !0, c()
                        })),
                        function() {}
                }))
            }
            var nY = Array.isArray,
                nM = ["addListener", "removeListener"],
                nj = ["addEventListener", "removeEventListener"],
                nF = ["on", "off"];

            function nz(e, t, n, r) {
                if (t7(n) && (r = n, n = void 0), r) {
                    return nz(e, t, n).pipe((i = r, nU(function(e) {
                        return nY(e) ? i.apply(void 0, (0, M().fX)([], (0, M().zs)(e))) : i(e)
                    })))
                }
                var i, o, s, u, a = (0, M().zs)(t7((o = e).addEventListener) && t7(o.removeEventListener) ? nj.map(function(r) {
                        return function(i) {
                            return e[r](t, i, n)
                        }
                    }) : t7((s = e).addListener) && t7(s.removeListener) ? nM.map(n$(e, t)) : t7((u = e).on) && t7(u.off) ? nF.map(n$(e, t)) : [], 2),
                    c = a[0],
                    l = a[1];
                if (!c && t9(e)) return nq(function(e) {
                    return nz(e, t, n)
                })(nR(e));
                if (!c) throw TypeError("Invalid event target");
                return new nI(function(e) {
                    var t = function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        return e.next(1 < t.length ? t : t[0])
                    };
                    return c(t),
                        function() {
                            return l(t)
                        }
                })
            }

            function n$(e, t) {
                return function(n) {
                    return function(r) {
                        return e[n](t, r)
                    }
                }
            }

            function nV(e, t, n) {
                for (var r = null, i = [], o = e, s = 0; o && "break" !== function() {
                        var e, u, a, c, l = nG((e = o.getAttribute("id")) && R.idName(e) ? {
                                name: "#" + CSS.escape(e),
                                penalty: 0
                            } : null) || nG.apply(void 0, (0, M().fX)([], (0, M().zs)(Array.from(o.attributes).filter(function(e) {
                                return R.attr(e.name, e.value)
                            }).map(function(e) {
                                return {
                                    name: "[".concat(CSS.escape(e.name), '="').concat(CSS.escape(e.value), '"]'),
                                    penalty: .5
                                }
                            })), !1)) || nG.apply(void 0, (0, M().fX)([], (0, M().zs)(Array.from(o.classList).filter(R.className).map(function(e) {
                                return {
                                    name: "." + CSS.escape(e),
                                    penalty: 1
                                }
                            })), !1)) || nG((u = o.tagName.toLowerCase(), R.tagName(u) ? {
                                name: u,
                                penalty: 2
                            } : null)) || [nQ()],
                            d = function(e) {
                                var t = e.parentNode;
                                if (!t) return null;
                                var n = t.firstChild;
                                if (!n) return null;
                                for (var r = 0; n && (n.nodeType === Node.ELEMENT_NODE && r++, n !== e);) n = n.nextSibling;
                                return r
                            }(o);
                        if ("all" == t) d && (l = l.concat(l.filter(nZ).map(function(e) {
                            return nB(e, d)
                        })));
                        else if ("two" == t) l = l.slice(0, 1), d && (l = l.concat(l.filter(nZ).map(function(e) {
                            return nB(e, d)
                        })));
                        else if ("one" == t) {
                            var f = (0, M().zs)(l = l.slice(0, 1), 1)[0];
                            d && nZ(f) && (l = [nB(f, d)])
                        } else "none" == t && (l = [nQ()], d && (l = [nB(l[0], d)]));
                        try {
                            for (var h = (a = void 0, (0, M().Ju)(l)), p = h.next(); !p.done; p = h.next()) {
                                var f = p.value;
                                f.level = s
                            }
                        } catch (e) {
                            a = {
                                error: e
                            }
                        } finally {
                            try {
                                p && !p.done && (c = h.return) && c.call(h)
                            } finally {
                                if (a) throw a.error
                            }
                        }
                        if (i.push(l), i.length >= R.seedMinLength && (r = nJ(i, n))) return "break";
                        o = o.parentElement, s++
                    }(););
                return (r || (r = nJ(i, n)), !r && n) ? n() : r
            }

            function nJ(e, t) {
                if (e.reduce(function(e, t) {
                        return e * t.length
                    }, 1) > R.threshold) return t ? t() : null;
                var n, r, i = n1(function e(t, n) {
                    var r, i, o, s, u;
                    return void 0 === n && (n = []), (0, M().YH)(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (!(t.length > 0)) return [3, 9];
                                a.label = 1;
                            case 1:
                                a.trys.push([1, 6, 7, 8]), i = (r = (0, M().Ju)(t[0])).next(), a.label = 2;
                            case 2:
                                if (i.done) return [3, 5];
                                return o = i.value, [5, (0, M().Ju)(e(t.slice(1, t.length), n.concat(o)))];
                            case 3:
                                a.sent(), a.label = 4;
                            case 4:
                                return i = r.next(), [3, 2];
                            case 5:
                                return [3, 8];
                            case 6:
                                return s = {
                                    error: a.sent()
                                }, [3, 8];
                            case 7:
                                try {
                                    i && !i.done && (u = r.return) && u.call(r)
                                } finally {
                                    if (s) throw s.error
                                }
                                return [7];
                            case 8:
                                return [3, 11];
                            case 9:
                                return [4, n];
                            case 10:
                                a.sent(), a.label = 11;
                            case 11:
                                return [2]
                        }
                    })
                }(e));
                try {
                    for (var o = (0, M().Ju)(i), s = o.next(); !s.done; s = o.next()) {
                        var u = s.value;
                        if (nX(u)) return u
                    }
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        s && !s.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }

            function nK(e) {
                for (var t = e[0], n = t.name, r = 1; r < e.length; r++) {
                    var i = e[r].level || 0;
                    n = t.level === i - 1 ? "".concat(e[r].name, " > ").concat(n) : "".concat(e[r].name, " ").concat(n), t = e[r]
                }
                return n
            }

            function nW(e) {
                return e.map(function(e) {
                    return e.penalty
                }).reduce(function(e, t) {
                    return e + t
                }, 0)
            }

            function nX(e) {
                var t = nK(e);
                switch (x.querySelectorAll(t).length) {
                    case 0:
                        throw Error("Can't select any node with this selector: ".concat(t));
                    case 1:
                        return !0;
                    default:
                        return !1
                }
            }

            function nQ() {
                return {
                    name: "*",
                    penalty: 3
                }
            }

            function nB(e, t) {
                return {
                    name: e.name + ":nth-child(".concat(t, ")"),
                    penalty: e.penalty + 1
                }
            }

            function nZ(e) {
                return "html" !== e.name && !e.name.startsWith("#")
            }

            function nG() {
                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                var n = e.filter(n0);
                return n.length > 0 ? n : null
            }

            function n0(e) {
                return null != e
            }

            function n1(e) {
                return (0, M().fX)([], (0, M().zs)(e), !1).sort(function(e, t) {
                    return nW(e) - nW(t)
                })
            }
            var n2 = ["input", "select", "textarea"],
                n3 = function(e, t) {
                    return function(n, r) {
                        var i, o, s, u = e.pageUrlAllowlist,
                            a = e.shouldTrackEventResolver,
                            c = null == (o = null == (i = null == r ? void 0 : r.tagName) ? void 0 : i.toLowerCase) ? void 0 : o.call(i);
                        if (!c) return !1;
                        if (a) return a(n, r);
                        if (!n7(window.location.href, u)) return !1;
                        var l = String(null == r ? void 0 : r.getAttribute("type")) || "";
                        if ("string" == typeof l) switch (l.toLowerCase()) {
                            case "hidden":
                            case "password":
                                return !1
                        }
                        if (t && !t.some(function(e) {
                                var t;
                                return !!(null == (t = null == r ? void 0 : r.matches) ? void 0 : t.call(r, e))
                            })) return !1;
                        switch (c) {
                            case "input":
                            case "select":
                            case "textarea":
                                return "change" === n || "click" === n;
                            default:
                                var d = null == (s = null == window ? void 0 : window.getComputedStyle) ? void 0 : s.call(window, r);
                                if (d && "pointer" === d.getPropertyValue("cursor") && "click" === n) return !0;
                                return "click" === n
                        }
                    }
                },
                n4 = function(e) {
                    if (null == e) return !1;
                    if ("string" == typeof e && (/^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test((e || "").replace(/[- ]/g, "")) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(e))) return !1;
                    return !0
                },
                n5 = function(e) {
                    var t, n, r, i = null == (n = null == (t = null == e ? void 0 : e.tagName) ? void 0 : t.toLowerCase) ? void 0 : n.call(t),
                        o = e instanceof HTMLElement && (null == (r = e.getAttribute("contenteditable")) ? void 0 : r.toLowerCase()) === "true";
                    return !n2.includes(i) && !o
                },
                n6 = function(e) {
                    var t = "";
                    return n5(e) && e.childNodes && e.childNodes.length && e.childNodes.forEach(function(e) {
                        var n = "";
                        e && 3 === e.nodeType ? e.textContent && (n = e.textContent) : n = n6(e), t += n.split(/(\s+)/).filter(n4).join("").replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)
                    }), t
                },
                n9 = function(e, t) {
                    var n, r, i = "";
                    try {
                        return i = function(e, t) {
                            if (e.nodeType !== Node.ELEMENT_NODE) throw Error("Can't generate CSS selector for non-element node type.");
                            if ("html" === e.tagName.toLowerCase()) return "html";
                            var n, r, i = {
                                root: document.body,
                                idName: function(e) {
                                    return !0
                                },
                                className: function(e) {
                                    return !0
                                },
                                tagName: function(e) {
                                    return !0
                                },
                                attr: function(e, t) {
                                    return !1
                                },
                                seedMinLength: 1,
                                optimizedMinLength: 2,
                                threshold: 1e3,
                                maxNumberOfTries: 1e4
                            };
                            n = (R = (0, M().Cl)((0, M().Cl)({}, i), t)).root, r = i, x = n.nodeType === Node.DOCUMENT_NODE ? n : n === r.root ? n.ownerDocument : n;
                            var o = nV(e, "all", function() {
                                return nV(e, "two", function() {
                                    return nV(e, "one", function() {
                                        return nV(e, "none")
                                    })
                                })
                            });
                            if (o) {
                                var s = n1(function e(t, n, r) {
                                    var i, o, s;
                                    return void 0 === r && (r = {
                                        counter: 0,
                                        visited: new Map
                                    }), (0, M().YH)(this, function(u) {
                                        switch (u.label) {
                                            case 0:
                                                if (!(t.length > 2 && t.length > R.optimizedMinLength)) return [3, 5];
                                                i = 1, u.label = 1;
                                            case 1:
                                                var a, c;
                                                if (!(i < t.length - 1)) return [3, 5];
                                                if (r.counter > R.maxNumberOfTries || (r.counter += 1, (o = (0, M().fX)([], (0, M().zs)(t), !1)).splice(i, 1), s = nK(o), r.visited.has(s))) return [2];
                                                if (!(nX(o) && (a = o, c = n, x.querySelector(nK(a)) === c))) return [3, 4];
                                                return [4, o];
                                            case 2:
                                                return u.sent(), r.visited.set(s, !0), [5, (0, M().Ju)(e(o, n, r))];
                                            case 3:
                                                u.sent(), u.label = 4;
                                            case 4:
                                                return i++, [3, 1];
                                            case 5:
                                                return [2]
                                        }
                                    })
                                }(o, e));
                                return s.length > 0 && (o = s[0]), nK(o)
                            }
                            throw Error("Selector was not found.")
                        }(e, {
                            className: function(e) {
                                return e !== t6
                            },
                            maxNumberOfTries: 1e3
                        })
                    } catch (e) {
                        t && t.warn("Failed to get selector with finder, use fallback strategy instead: ".concat(e.toString()))
                    }
                    var o = null == (r = null == (n = null == e ? void 0 : e.tagName) ? void 0 : n.toLowerCase) ? void 0 : r.call(n);
                    o && (i = o);
                    var s = e.getAttribute("id"),
                        u = e.getAttribute("class");
                    if (s) i = "#".concat(s);
                    else if (u) {
                        var a = u.split(" ").filter(function(e) {
                            return e !== t6
                        }).join(".");
                        a && (i = "".concat(i, ".").concat(a))
                    }
                    return i
                },
                n7 = function(e, t) {
                    return !t || !t.length || t.some(function(t) {
                        return "string" == typeof t ? e === t : e.match(t)
                    })
                },
                n8 = function(e) {
                    return Object.keys(e).reduce(function(t, n) {
                        var r = e[n];
                        return null != r && ("object" != typeof r || 0 !== Object.keys(r).length) && ("string" != typeof r || 0 !== r.trim().length) && (t[n] = r), t
                    }, {})
                },
                re = function(e) {
                    var t, n = e.parentElement;
                    if (!n) return "";
                    try {
                        t = n.querySelector(":scope>span,h1,h2,h3,h4,h5,h6")
                    } catch (e) {
                        t = null
                    }
                    if (t) {
                        var r = t.textContent || "";
                        return n4(r) ? r : ""
                    }
                    return re(n)
                },
                rt = function(e, t) {
                    return e ? t.some(function(t) {
                        var n;
                        return null == (n = null == e ? void 0 : e.matches) ? void 0 : n.call(e, t)
                    }) ? e : rt(null == e ? void 0 : e.parentElement, t) : null
                },
                rn = function(e, t) {
                    if (!e) return {};
                    var n, r, i, o = null == (i = null == (r = null == e ? void 0 : e.tagName) ? void 0 : r.toLowerCase) ? void 0 : i.call(r),
                        s = n9(e, t);
                    return n8(((n = {})[t0] = o, n[t1] = n6(e), n[t2] = s, n[t3] = window.location.href.split("?")[0], n))
                },
                rr = function(e) {
                    return null !== e.event.target && !!e.closestTrackedAncestor
                },
                ri = function() {
                    function e(e) {
                        var t = (void 0 === e ? {} : e).origin,
                            n = this;
                        this.endpoint = t4, this.requestCallbacks = {}, this.onSelect = function(e) {
                            n.notify({
                                action: "element-selected",
                                data: e
                            })
                        }, this.onTrack = function(e, t) {
                            "selector-mode-changed" === e ? n.notify({
                                action: "track-selector-mode-changed",
                                data: t
                            }) : "selector-moved" === e && n.notify({
                                action: "track-selector-moved",
                                data: t
                            })
                        }, this.endpoint = void 0 === t ? t4 : t
                    }
                    return e.prototype.notify = function(e) {
                        var t, n, r, i;
                        null == (n = null == (t = this.logger) ? void 0 : t.debug) || n.call(t, "Message sent: ", JSON.stringify(e)), null == (i = null == (r = window.opener) ? void 0 : r.postMessage) || i.call(r, e, this.endpoint)
                    }, e.prototype.sendRequest = function(e, t, n) {
                        var r = this;
                        void 0 === n && (n = {
                            timeout: 15e3
                        });
                        var i = "".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
                            o = {
                                id: i,
                                action: e,
                                args: t
                            };
                        return new Promise(function(t, s) {
                            r.requestCallbacks[i] = {
                                resolve: t,
                                reject: s
                            }, r.notify(o), (null == n ? void 0 : n.timeout) > 0 && setTimeout(function() {
                                s(Error("".concat(e, " timed out (id: ").concat(i, ")"))), delete r.requestCallbacks[i]
                            }, n.timeout)
                        })
                    }, e.prototype.handleResponse = function(e) {
                        var t;
                        if (!this.requestCallbacks[e.id]) {
                            null == (t = this.logger) || t.warn("No callback found for request id: ".concat(e.id));
                            return
                        }
                        this.requestCallbacks[e.id].resolve(e.responseData), delete this.requestCallbacks[e.id]
                    }, e.prototype.setup = function(e) {
                        var t = this,
                            n = void 0 === e ? {} : e,
                            r = n.logger,
                            i = n.endpoint,
                            o = n.isElementSelectable,
                            s = n.cssSelectorAllowlist,
                            u = n.actionClickAllowlist;
                        this.logger = r, i && this.endpoint === t4 && (this.endpoint = i);
                        var a = null;
                        window.addEventListener("message", function(e) {
                            if (null == (r = null == (n = t.logger) ? void 0 : n.debug) || r.call(n, "Message received: ", JSON.stringify(e)), t.endpoint === e.origin) {
                                var n, r, i, c, l, d = null == e ? void 0 : e.data,
                                    f = null == d ? void 0 : d.action;
                                if (f)
                                    if ("id" in d) null == (c = null == (i = t.logger) ? void 0 : i.debug) || c.call(i, "Received Response to previous request: ", JSON.stringify(e)), t.handleResponse(d);
                                    else if ("ping" === f) t.notify({
                                    action: "pong"
                                });
                                else if ("initialize-visual-tagging-selector" === f) {
                                    var h, p = null == d ? void 0 : d.data;
                                    (h = "https://cdn.amplitude.com/libs/visual-tagging-selector-1.0.0-alpha.js.gz", new Promise(function(e, t) {
                                        var n;
                                        try {
                                            var r = document.createElement("script");
                                            r.type = "text/javascript", r.async = !0, r.src = h, r.addEventListener("load", function() {
                                                e({
                                                    status: !0
                                                })
                                            }, {
                                                once: !0
                                            }), r.addEventListener("error", function() {
                                                t({
                                                    status: !1,
                                                    message: "Failed to load the script ".concat(h)
                                                })
                                            }), null == (n = document.head) || n.appendChild(r)
                                        } catch (e) {
                                            t(e)
                                        }
                                    })).then(function() {
                                        var e;
                                        a = null == (e = null == window ? void 0 : window.amplitudeVisualTaggingSelector) ? void 0 : e.call(window, {
                                            getEventTagProps: rn,
                                            isElementSelectable: function(e) {
                                                return !o || o((null == p ? void 0 : p.actionType) || "click", e)
                                            },
                                            onTrack: t.onTrack,
                                            onSelect: t.onSelect,
                                            visualHighlightClass: t6,
                                            messenger: t,
                                            cssSelectorAllowlist: s,
                                            actionClickAllowlist: u
                                        }), t.notify({
                                            action: "selector-loaded"
                                        })
                                    }).catch(function() {
                                        var e;
                                        null == (e = t.logger) || e.warn("Failed to initialize visual tagging selector")
                                    })
                                } else "close-visual-tagging-selector" === f && (null == (l = null == a ? void 0 : a.close) || l.call(a))
                            }
                        }), this.notify({
                            action: "page-loaded"
                        })
                    }, e
                }(),
                ro = ["id", "class", "style", "value", "onclick", "onchange", "oninput", "onblur", "onsubmit", "onfocus", "onkeydown", "onkeyup", "onkeypress", "data-reactid", "data-react-checksum", "data-reactroot"],
                rs = ["type"],
                ru = ["svg", "path", "g"],
                ra = ["password", "hidden"],
                rc = function(e) {
                    return e ? function(e) {
                        for (var t = 0, n = 0; n < e.length; n++) {
                            var r = e[n];
                            if (null === r) t += 4;
                            else {
                                var i = function e(t, n) {
                                    void 0 === n && (n = !1);
                                    try {
                                        if (null == t) {
                                            if (n) return "None";
                                            return null
                                        }
                                        if ("string" == typeof t) {
                                            if (n) {
                                                if ((t = t.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r")).includes('"')) return "'".concat(t, "'");
                                                if (t.includes("'")) return '"'.concat(t.replace(/'/g, "\\'"), '"');
                                                return "'".concat(t, "'")
                                            }
                                            return t
                                        }
                                        if ("boolean" == typeof t) return t ? "True" : "False";
                                        else if (Array.isArray(t)) {
                                            var r = t.map(function(t) {
                                                return e(t, !0)
                                            });
                                            return "[".concat(r.join(", "), "]")
                                        } else if ("object" == typeof t) {
                                            var i = Object.entries(t).filter(function(e) {
                                                    var t = (0, M().zs)(e, 1)[0];
                                                    return null != t
                                                }).map(function(t) {
                                                    var n = (0, M().zs)(t, 2),
                                                        r = n[0],
                                                        i = n[1];
                                                    return "".concat(String(e(r, !0)), ": ").concat(String(e(i, !0)))
                                                }),
                                                o = "{".concat(i.join(", "), "}");
                                            return o.includes("\\'") && (o = o.replace(/'/g, "'").replace(/'/g, "\\'")), o
                                        }
                                        return t.toString()
                                    } catch (e) {
                                        return null
                                    }
                                }(r);
                                t += i ? Array.from(i).length : 4
                            }
                            if (t > 1024) return e.slice(0, n)
                        }
                        return e
                    }((function(e) {
                        var t = [];
                        if (!e) return t;
                        t.push(e);
                        for (var n = e.parentElement; n && "HTML" !== n.tagName;) t.push(n), n = n.parentElement;
                        return t
                    })(e).map(function(e) {
                        return function(e) {
                            if (null === e) return null;
                            var t, n, r, i, o, s, u = String(e.tagName).toLowerCase(),
                                a = {
                                    tag: u
                                },
                                c = Array.from(null != (i = null == (r = e.parentElement) ? void 0 : r.children) ? i : []);
                            c.length && (a.index = c.indexOf(e), a.indexOfType = c.filter(function(t) {
                                return t.tagName === e.tagName
                            }).indexOf(e));
                            var l = null == (s = null == (o = e.previousElementSibling) ? void 0 : o.tagName) ? void 0 : s.toLowerCase();
                            l && (a.prevSib = String(l));
                            var d = e.getAttribute("id");
                            d && (a.id = String(d));
                            var f = Array.from(e.classList);
                            f.length && (a.classes = f);
                            var h = {},
                                p = Array.from(e.attributes).filter(function(e) {
                                    return !ro.includes(e.name)
                                }),
                                v = !n5(e);
                            if (!ra.includes(String(e.getAttribute("type"))) && !ru.includes(u)) try {
                                for (var g = (0, M().Ju)(p), y = g.next(); !y.done; y = g.next()) {
                                    var m = y.value;
                                    (!v || rs.includes(m.name)) && (h[m.name] = String(m.value).substring(0, 128))
                                }
                            } catch (e) {
                                t = {
                                    error: e
                                }
                            } finally {
                                try {
                                    y && !y.done && (n = g.return) && n.call(g)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            return Object.keys(h).length && (a.attrs = h), a
                        }(e)
                    })) : []
                };

            function rl(e, t) {
                return nN(function(n, r) {
                    var i = 0;
                    n.subscribe(nH(r, function(n) {
                        return e.call(t, n, i++) && r.next(n)
                    }))
                })
            }
            var rd = function(e) {
                    function t(t, n) {
                        return e.call(this) || this
                    }
                    return (0, M().C6)(t, e), t.prototype.schedule = function(e, t) {
                        return void 0 === t && (t = 0), this
                    }, t
                }(nr),
                rf = {
                    setInterval: function(e, t) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var i = rf.delegate;
                        return (null == i ? void 0 : i.setInterval) ? i.setInterval.apply(i, (0, M().fX)([e, t], (0, M().zs)(n))) : setInterval.apply(void 0, (0, M().fX)([e, t], (0, M().zs)(n)))
                    },
                    clearInterval: function(e) {
                        var t = rf.delegate;
                        return ((null == t ? void 0 : t.clearInterval) || clearInterval)(e)
                    },
                    delegate: void 0
                },
                rh = function(e) {
                    function t(t, n) {
                        var r = e.call(this, t, n) || this;
                        return r.scheduler = t, r.work = n, r.pending = !1, r
                    }
                    return (0, M().C6)(t, e), t.prototype.schedule = function(e, t) {
                        if (void 0 === t && (t = 0), this.closed) return this;
                        this.state = e;
                        var n, r = this.id,
                            i = this.scheduler;
                        return null != r && (this.id = this.recycleAsyncId(i, r, t)), this.pending = !0, this.delay = t, this.id = null != (n = this.id) ? n : this.requestAsyncId(i, this.id, t), this
                    }, t.prototype.requestAsyncId = function(e, t, n) {
                        return void 0 === n && (n = 0), rf.setInterval(e.flush.bind(e, this), n)
                    }, t.prototype.recycleAsyncId = function(e, t, n) {
                        if (void 0 === n && (n = 0), null != n && this.delay === n && !1 === this.pending) return t;
                        null != t && rf.clearInterval(t)
                    }, t.prototype.execute = function(e, t) {
                        if (this.closed) return Error("executing a cancelled action");
                        this.pending = !1;
                        var n = this._execute(e, t);
                        if (n) return n;
                        !1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
                    }, t.prototype._execute = function(e, t) {
                        var n, r = !1;
                        try {
                            this.work(e)
                        } catch (e) {
                            r = !0, n = e || Error("Scheduled action threw falsy error")
                        }
                        if (r) return this.unsubscribe(), n
                    }, t.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            var t = this.id,
                                n = this.scheduler,
                                r = n.actions;
                            this.work = this.state = this.scheduler = null, this.pending = !1, nn(r, this), null != t && (this.id = this.recycleAsyncId(n, t, null)), this.delay = null, e.prototype.unsubscribe.call(this)
                        }
                    }, t
                }(rd),
                rp = {
                    now: function() {
                        return (rp.delegate || Date).now()
                    },
                    delegate: void 0
                },
                rv = function() {
                    function e(t, n) {
                        void 0 === n && (n = e.now), this.schedulerActionCtor = t, this.now = n
                    }
                    return e.prototype.schedule = function(e, t, n) {
                        return void 0 === t && (t = 0), new this.schedulerActionCtor(this, e).schedule(n, t)
                    }, e.now = rp.now, e
                }(),
                rg = new(function(e) {
                    function t(t, n) {
                        void 0 === n && (n = rv.now);
                        var r = e.call(this, t, n) || this;
                        return r.actions = [], r._active = !1, r
                    }
                    return (0, M().C6)(t, e), t.prototype.flush = function(e) {
                        var t, n = this.actions;
                        if (this._active) return void n.push(e);
                        this._active = !0;
                        do
                            if (t = e.execute(e.state, e.delay)) break; while (e = n.shift()) if (this._active = !1, t) {
                            for (; e = n.shift();) e.unsubscribe();
                            throw t
                        }
                    }, t
                }(rv))(rh);

            function ry(e) {
                return void 0 === e && (e = 1 / 0), nq(n_, e)
            }
            var rm = new nI(function(e) {
                return e.complete()
            });

            function rb(e) {
                return e && t7(e.schedule)
            }

            function rw(e) {
                return e[e.length - 1]
            }

            function rE(e) {
                return rb(rw(e)) ? e.pop() : void 0
            }

            function r_(e, t) {
                return void 0 === t && (t = 0), nN(function(n, r) {
                    n.subscribe(nH(r, function(n) {
                        return nD(r, e, function() {
                            return r.next(n)
                        }, t)
                    }, function() {
                        return nD(r, e, function() {
                            return r.complete()
                        }, t)
                    }, function(n) {
                        return nD(r, e, function() {
                            return r.error(n)
                        }, t)
                    }))
                })
            }

            function rI(e, t) {
                return void 0 === t && (t = 0), nN(function(n, r) {
                    r.add(e.schedule(function() {
                        return n.subscribe(r)
                    }, t))
                })
            }

            function rS(e, t) {
                if (!e) throw Error("Iterable cannot be null");
                return new nI(function(n) {
                    nD(n, t, function() {
                        var r = e[Symbol.asyncIterator]();
                        nD(n, t, function() {
                            r.next().then(function(e) {
                                e.done ? n.complete() : n.next(e.value)
                            })
                        }, 0, !0)
                    })
                })
            }

            function rT(e, t) {
                return t ? function(e, t) {
                    if (null != e) {
                        if (t7(e[nE])) return nR(e).pipe(rI(t), r_(t));
                        if (t9(e)) return new nI(function(n) {
                            var r = 0;
                            return t.schedule(function() {
                                r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule())
                            })
                        });
                        if (t8(e)) return nR(e).pipe(rI(t), r_(t));
                        if (nT(e)) return rS(e, t);
                        if (nP(e)) return new nI(function(n) {
                            var r;
                            return nD(n, t, function() {
                                    r = e[nC](), nD(n, t, function() {
                                        var e, t, i;
                                        try {
                                            t = (e = r.next()).value, i = e.done
                                        } catch (e) {
                                            n.error(e);
                                            return
                                        }
                                        i ? n.complete() : n.next(t)
                                    }, 0, !0)
                                }),
                                function() {
                                    return t7(null == r ? void 0 : r.return) && r.return()
                                }
                        });
                        if (nA(e)) return rS(nO(e), t)
                    }
                    throw nk(e)
                }(e, t) : nR(e)
            }

            function rk() {
                for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                var r = rE(t),
                    i = (e = 1 / 0, "number" == typeof rw(t) ? t.pop() : e);
                return t.length ? 1 === t.length ? nR(t[0]) : ry(i)(rT(t, r)) : rm
            }

            function rC(e) {
                return e <= 0 ? function() {
                    return rm
                } : nN(function(t, n) {
                    var r = 0;
                    t.subscribe(nH(n, function(t) {
                        ++r <= e && (n.next(t), e <= r && n.complete())
                    }))
                })
            }

            function rP(e) {
                return e instanceof Date && !isNaN(e)
            }
            var rO = ne(function(e) {
                return function(t) {
                    void 0 === t && (t = null), e(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this.info = t
                }
            });

            function rA(e) {
                throw new rO(e)
            }(p = N || (N = {})).ClickObservable = "clickObservable", p.ChangeObservable = "changeObservable", p.NavigateObservable = "navigateObservable", p.MutationObservable = "mutationObservable";
            var rR = function(e) {
                    void 0 === e && (e = {});
                    var t, n, r, i = e.dataAttributePrefix,
                        o = void 0 === i ? "data-amp-track-" : i,
                        s = e.visualTaggingOptions,
                        u = void 0 === s ? {
                            enabled: !0,
                            messenger: new ri
                        } : s;
                    e.cssSelectorAllowlist = null != (t = e.cssSelectorAllowlist) ? t : tB, e.actionClickAllowlist = null != (n = e.actionClickAllowlist) ? n : tZ, e.debounceTime = null != (r = e.debounceTime) ? r : 0;
                    var a = "@amplitude/plugin-autocapture-browser",
                        c = [],
                        l = void 0,
                        d = function() {
                            var e, t, n = nz(document, "click", {
                                    capture: !0
                                }).pipe(nU(function(e) {
                                    return h(e, "click")
                                })),
                                r = nz(document, "change", {
                                    capture: !0
                                }).pipe(nU(function(e) {
                                    return h(e, "change")
                                }));
                            window.navigation && (t = nz(window.navigation, "navigate").pipe(nU(function(e) {
                                return h(e, "navigate")
                            })));
                            var i = new nI(function(e) {
                                var t = new MutationObserver(function(t) {
                                    e.next(t)
                                });
                                return t.observe(document.body, {
                                        childList: !0,
                                        attributes: !0,
                                        characterData: !0,
                                        subtree: !0
                                    }),
                                    function() {
                                        return t.disconnect()
                                    }
                            }).pipe(nU(function(e) {
                                return h(e, "mutation")
                            }));
                            return (e = {})[N.ClickObservable] = n, e[N.ChangeObservable] = r, e[N.NavigateObservable] = t, e[N.MutationObservable] = i, e
                        },
                        f = function(e, t) {
                            var n, r, i, s = null == (i = null == (r = null == t ? void 0 : t.tagName) ? void 0 : r.toLowerCase) ? void 0 : i.call(r),
                                u = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                                    left: null,
                                    top: null
                                },
                                a = t.getAttribute("aria-label"),
                                c = t.getAttributeNames().reduce(function(e, n) {
                                    if (n.startsWith(o)) {
                                        var r = n.replace(o, ""),
                                            i = t.getAttribute(n);
                                        r && (e[r] = i || "")
                                    }
                                    return e
                                }, {}),
                                d = re(t),
                                f = n9(t, l),
                                h = ((n = {})["[Amplitude] Element ID"] = t.getAttribute("id") || "", n["[Amplitude] Element Class"] = t.getAttribute("class"), n["[Amplitude] Element Hierarchy"] = rc(t), n[t0] = s, n[t1] = n6(t), n["[Amplitude] Element Position Left"] = null == u.left ? null : Math.round(u.left), n["[Amplitude] Element Position Top"] = null == u.top ? null : Math.round(u.top), n["[Amplitude] Element Aria Label"] = a, n["[Amplitude] Element Attributes"] = c, n[t2] = f, n["[Amplitude] Element Parent Label"] = d, n[t3] = window.location.href.split("?")[0], n["[Amplitude] Page Title"] = "u" > typeof document && document.title || "", n["[Amplitude] Viewport Height"] = window.innerHeight, n["[Amplitude] Viewport Width"] = window.innerWidth, n);
                            return "a" === s && "click" === e && t instanceof HTMLAnchorElement && (h["[Amplitude] Element Href"] = t.href), n8(h)
                        },
                        h = function(t, n) {
                            var r = {
                                event: t,
                                timestamp: Date.now(),
                                type: n
                            };
                            if (("click" === r.type || "change" === r.type) && null !== r.event.target) {
                                var i = rt(r.event.target, e.cssSelectorAllowlist);
                                i && (r.closestTrackedAncestor = i, r.targetElementProperties = f(r.type, i))
                            }
                            return r
                        };
                    return {
                        name: a,
                        type: "enrichment",
                        setup: function(t, n) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var r, i, o, s, h, p, v, g, y, m;
                                return (0, M().YH)(this, function(b) {
                                    var w, E, _, I, S, T, k, C, P, O, A, R, x, N, H, L, U, D, q, Y, j, F, z, $, V, J, K, W, X, Q, B, Z, G, ee;
                                    return (l = t.loggerProvider, "u" < typeof document) ? [2] : (r = n3(e, e.cssSelectorAllowlist), i = n3(e, e.actionClickAllowlist), E = (w = {
                                        allObservables: o = d(),
                                        options: e,
                                        amplitude: n,
                                        shouldTrackEvent: r
                                    }).amplitude, _ = w.allObservables, I = w.options, S = w.shouldTrackEvent, P = rk((T = _.clickObservable).pipe(nN(function(e, t) {
                                        var n, r = !1;
                                        e.subscribe(nH(t, function(e) {
                                            var i = n;
                                            n = e, r && t.next([i, e]), r = !0
                                        }))
                                    }), rl(function(e) {
                                        var t = (0, M().zs)(e, 2),
                                            n = t[0],
                                            r = t[1],
                                            i = n.event.target !== r.event.target,
                                            o = 20 >= Math.abs(r.event.screenX - n.event.screenX) && 20 >= Math.abs(r.event.screenY - n.event.screenY);
                                        return i && !o
                                    })), T.pipe((k = I.debounceTime, void 0 === C && (C = rg), nN(function(e, t) {
                                        var n = null,
                                            r = null,
                                            i = null,
                                            o = function() {
                                                if (n) {
                                                    n.unsubscribe(), n = null;
                                                    var e = r;
                                                    r = null, t.next(e)
                                                }
                                            };

                                        function s() {
                                            var e = i + k,
                                                r = C.now();
                                            if (r < e) {
                                                n = this.schedule(void 0, e - r), t.add(n);
                                                return
                                            }
                                            o()
                                        }
                                        e.subscribe(nH(t, function(e) {
                                            r = e, i = C.now(), n || (n = C.schedule(s, k), t.add(n))
                                        }, function() {
                                            o(), t.complete()
                                        }, void 0, function() {
                                            r = n = null
                                        }))
                                    })), nU(function() {
                                        return "timeout"
                                    }))), s = T.pipe((void 0 === O && (O = rg), A = 0, R = O, void 0 === A && (A = 0), void 0 === x && (x = rg), N = -1, null != R && (rb(R) ? x = R : N = R), H = new nI(function(e) {
                                        var t = rP(A) ? A - x.now() : A;
                                        t < 0 && (t = 0);
                                        var n = 0;
                                        return x.schedule(function() {
                                            e.closed || (e.next(n++), 0 <= N ? this.schedule(void 0, N) : e.complete())
                                        }, t)
                                    }), function e(t, n) {
                                        return n ? function(r) {
                                            return function() {
                                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                                return ry(1)(rT(e, rE(e)))
                                            }(n.pipe(rC(1), nN(function(e, t) {
                                                e.subscribe(nH(t, nc))
                                            })), r.pipe(e(t)))
                                        } : nq(function(e, n) {
                                            return nR(t(e, n)).pipe(rC(1), nU(function() {
                                                return e
                                            }))
                                        })
                                    }(function() {
                                        return H
                                    })), rl(rr), rl(function(e) {
                                        return S("click", e.closestTrackedAncestor)
                                    }), nN(function(e, t) {
                                        var n = [];
                                        return e.subscribe(nH(t, function(e) {
                                                return n.push(e)
                                            }, function() {
                                                t.next(n), t.complete()
                                            })), nR(P).subscribe(nH(t, function() {
                                                var e = n;
                                                n = [], t.next(e)
                                            }, nc)),
                                            function() {
                                                n = null
                                            }
                                    })).subscribe(function(e) {
                                        var t, n, r = (e.length, tG);
                                        try {
                                            for (var i = (0, M().Ju)(e), o = i.next(); !o.done; o = i.next()) {
                                                var s = o.value;
                                                null == E || E.track(r, s.targetElementProperties, {
                                                    time: s.timestamp
                                                })
                                            }
                                        } catch (e) {
                                            t = {
                                                error: e
                                            }
                                        } finally {
                                            try {
                                                o && !o.done && (n = i.return) && n.call(i)
                                            } finally {
                                                if (t) throw t.error
                                            }
                                        }
                                    }), c.push(s), U = (L = {
                                        allObservables: o,
                                        getEventProperties: f,
                                        amplitude: n,
                                        shouldTrackEvent: r
                                    }).amplitude, D = L.allObservables, q = L.getEventProperties, Y = L.shouldTrackEvent, h = D.changeObservable.pipe(rl(rr), rl(function(e) {
                                        return Y("change", e.closestTrackedAncestor)
                                    })).subscribe(function(e) {
                                        null == U || U.track("[Amplitude] Element Changed", q("change", e.closestTrackedAncestor))
                                    }), c.push(h), F = (j = {
                                        allObservables: o,
                                        options: e,
                                        getEventProperties: f,
                                        amplitude: n,
                                        shouldTrackEvent: r,
                                        shouldTrackActionClick: i
                                    }).amplitude, z = j.allObservables, $ = j.options, V = j.getEventProperties, J = j.shouldTrackEvent, K = j.shouldTrackActionClick, W = z.clickObservable, X = z.mutationObservable, Q = z.navigateObservable, B = W.pipe(rl(function(e) {
                                        return !J("click", e.closestTrackedAncestor)
                                    }), nU(function(e) {
                                        var t = rt(e.event.target, $.actionClickAllowlist);
                                        return e.closestTrackedAncestor = t, null !== e.closestTrackedAncestor && (e.targetElementProperties = V(e.type, e.closestTrackedAncestor)), e
                                    }), rl(rr), rl(function(e) {
                                        return K("click", e.closestTrackedAncestor)
                                    })), Z = [X], Q && Z.push(Q), G = rk.apply(void 0, (0, M().fX)([], (0, M().zs)(Z), !1)), p = B.pipe((ee = function(e) {
                                        return G.pipe(rC(1), function(e) {
                                            var t = rP(e) ? {
                                                    first: e
                                                } : "number" == typeof e ? {
                                                    each: e
                                                } : e,
                                                n = t.first,
                                                r = t.each,
                                                i = t.with,
                                                o = void 0 === i ? rA : i,
                                                s = t.scheduler,
                                                u = void 0 === s ? rg : s,
                                                a = t.meta,
                                                c = void 0 === a ? null : a;
                                            if (null == n && null == r) throw TypeError("No timeout provided.");
                                            return nN(function(e, t) {
                                                var i, s, a = null,
                                                    l = 0,
                                                    d = function(e) {
                                                        s = nD(t, u, function() {
                                                            try {
                                                                i.unsubscribe(), nR(o({
                                                                    meta: c,
                                                                    lastValue: a,
                                                                    seen: l
                                                                })).subscribe(t)
                                                            } catch (e) {
                                                                t.error(e)
                                                            }
                                                        }, e)
                                                    };
                                                i = e.subscribe(nH(t, function(e) {
                                                    null == s || s.unsubscribe(), l++, t.next(a = e), r > 0 && d(r)
                                                }, void 0, void 0, function() {
                                                    (null == s ? void 0 : s.closed) || null == s || s.unsubscribe(), a = null
                                                })), l || d(null != n ? "number" == typeof n ? n : n - u.now() : r)
                                            })
                                        }({
                                            first: 500,
                                            with: function() {
                                                return rm
                                            }
                                        }), nU(function() {
                                            return e
                                        }))
                                    }, nN(function(e, t) {
                                        var n = null,
                                            r = 0,
                                            i = !1,
                                            o = function() {
                                                return i && !n && t.complete()
                                            };
                                        e.subscribe(nH(t, function(e) {
                                            null == n || n.unsubscribe(), nR(ee(e, r++)).subscribe(n = nH(t, function(e) {
                                                return t.next(e)
                                            }, function() {
                                                n = null, o()
                                            }))
                                        }, function() {
                                            i = !0, o()
                                        }))
                                    }))).subscribe(function(e) {
                                        null == F || F.track(tG, V("click", e.closestTrackedAncestor), {
                                            time: e.timestamp
                                        })
                                    }), c.push(p), null == (y = null == t ? void 0 : t.loggerProvider) || y.log("".concat(a, " has been successfully added.")), window.opener && u.enabled && (v = e.cssSelectorAllowlist, g = e.actionClickAllowlist, null == (m = u.messenger) || m.setup((0, M().Cl)((0, M().Cl)({
                                        logger: null == t ? void 0 : t.loggerProvider
                                    }, (null == t ? void 0 : t.serverZone) && {
                                        endpoint: t5[t.serverZone]
                                    }), {
                                        isElementSelectable: n3(e, (0, M().fX)((0, M().fX)([], (0, M().zs)(v), !1), (0, M().zs)(g), !1)),
                                        cssSelectorAllowlist: v,
                                        actionClickAllowlist: g
                                    }))), [2])
                                })
                            })
                        },
                        execute: function(e) {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                return (0, M().YH)(this, function(t) {
                                    return [2, e]
                                })
                            })
                        },
                        teardown: function() {
                            return (0, M().sH)(void 0, void 0, void 0, function() {
                                var e, t, n, r;
                                return (0, M().YH)(this, function(i) {
                                    try {
                                        for (t = (e = (0, M().Ju)(c)).next(); !t.done; t = e.next()) t.value.unsubscribe()
                                    } catch (e) {
                                        n = {
                                            error: e
                                        }
                                    } finally {
                                        try {
                                            t && !t.done && (r = e.return) && r.call(e)
                                        } finally {
                                            if (n) throw n.error
                                        }
                                    }
                                    return [2]
                                })
                            })
                        }
                    }
                },
                rx = function(e) {
                    function t() {
                        return null !== e && e.apply(this, arguments) || this
                    }
                    return (0, M().C6)(t, e), t.prototype.init = function(e, t, n) {
                        var r, i;
                        return void 0 === e && (e = ""), arguments.length > 2 ? (r = t, i = n) : "string" == typeof t ? (r = t, i = void 0) : (r = null == t ? void 0 : t.userId, i = t), V(this._init((0, M().Cl)((0, M().Cl)({}, i), {
                            userId: r,
                            apiKey: e
                        })))
                    }, t.prototype._init = function(t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n, r, i, o, s, u, a, c, l = this;
                            return (0, M().YH)(this, function(d) {
                                var f, h;
                                switch (d.label) {
                                    case 0:
                                        if (this.initializing) return [2];
                                        return this.initializing = !0, [4, tA(t.apiKey, t, this)];
                                    case 1:
                                        if (n = d.sent(), !t.fetchRemoteConfig) return [3, 4];
                                        return [4, (f = n, (0, M().sH)(void 0, void 0, void 0, function() {
                                            var e;
                                            return (0, M().YH)(this, function(t) {
                                                switch (t.label) {
                                                    case 0:
                                                        return [4, (e = new tQ(f)).initialize()];
                                                    case 1:
                                                        return t.sent(), [2, e]
                                                }
                                            })
                                        }))];
                                    case 2:
                                        return [4, d.sent().generateJoinedConfig()];
                                    case 3:
                                        n = d.sent(), d.label = 4;
                                    case 4:
                                        return [4, e.prototype._init.call(this, n)];
                                    case 5:
                                        if (d.sent(), this.logBrowserOptions(n), !ev(this.config.defaultTracking)) return [3, 7];
                                        return r = ev((h = this.config).defaultTracking) && h.defaultTracking && "object" == typeof h.defaultTracking && h.defaultTracking.attribution && "object" == typeof h.defaultTracking.attribution ? (0, M().Cl)({}, h.defaultTracking.attribution) : {}, this.webAttribution = new eF(r, this.config), [4, this.webAttribution.init()];
                                    case 6:
                                        d.sent(), d.label = 7;
                                    case 7:
                                        if (o = Number.isNaN(Number((i = eq()).ampSessionId)) ? void 0 : Number(i.ampSessionId), this.setSessionId(null != (c = null != (a = null != (u = t.sessionId) ? u : o) ? a : this.config.sessionId) ? c : Date.now()), (s = eG(t.instanceName)).identityStore.setIdentity({
                                                userId: this.config.userId,
                                                deviceId: this.config.deviceId
                                            }), this.config.offline === e3) return [3, 9];
                                        return [4, this.add(tV()).promise];
                                    case 8:
                                        d.sent(), d.label = 9;
                                    case 9:
                                        return [4, this.add(new ei).promise];
                                    case 10:
                                        return d.sent(), [4, this.add(new e7).promise];
                                    case 11:
                                        return d.sent(), [4, this.add(new e2).promise];
                                    case 12:
                                        if (d.sent(), t$(this.config), !ep(this.config.defaultTracking, "fileDownloads")) return [3, 14];
                                        return this.config.loggerProvider.debug("Adding file download tracking plugin"), [4, this.add(tF()).promise];
                                    case 13:
                                        d.sent(), d.label = 14;
                                    case 14:
                                        if (!ep(this.config.defaultTracking, "formInteractions")) return [3, 16];
                                        return this.config.loggerProvider.debug("Adding form interaction plugin"), [4, this.add(tY()).promise];
                                    case 15:
                                        d.sent(), d.label = 16;
                                    case 16:
                                        if (!eg(this.config.defaultTracking)) return [3, 18];
                                        return this.config.loggerProvider.debug("Adding page view tracking plugin"), [4, this.add(tL(ew(this.config))).promise];
                                    case 17:
                                        d.sent(), d.label = 18;
                                    case 18:
                                        if (!em(this.config.autocapture)) return [3, 20];
                                        return this.config.loggerProvider.debug("Adding user interactions plugin (autocapture plugin)"), [4, this.add(rR(eb(this.config))).promise];
                                    case 19:
                                        d.sent(), d.label = 20;
                                    case 20:
                                        return this.initializing = !1, [4, this.runQueuedFunctions("dispatchQ")];
                                    case 21:
                                        return d.sent(), s.eventBridge.setEventReceiver(function(e) {
                                            l.track(e.eventType, e.eventProperties)
                                        }), [2]
                                }
                            })
                        })
                    }, t.prototype.getUserId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.userId
                    }, t.prototype.setUserId = function(e) {
                        this.config ? (this.config.loggerProvider.debug("function setUserId: ", e), (e !== this.config.userId || void 0 === e) && (this.config.userId = e, e0(e, this.config.instanceName))) : this.q.push(this.setUserId.bind(this, e))
                    }, t.prototype.getDeviceId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.deviceId
                    }, t.prototype.setDeviceId = function(e) {
                        this.config ? (this.config.loggerProvider.debug("function setDeviceId: ", e), this.config.deviceId = e, e1(e, this.config.instanceName)) : this.q.push(this.setDeviceId.bind(this, e))
                    }, t.prototype.reset = function() {
                        this.setDeviceId(en()), this.setUserId(void 0)
                    }, t.prototype.getSessionId = function() {
                        var e;
                        return null == (e = this.config) ? void 0 : e.sessionId
                    }, t.prototype.setSessionId = function(e) {
                        var t, n = [];
                        if (!this.config) return this.q.push(this.setSessionId.bind(this, e)), V(Promise.resolve());
                        if (e === this.config.sessionId) return V(Promise.resolve());
                        this.config.loggerProvider.debug("function setSessionId: ", e);
                        var r = this.getSessionId(),
                            i = this.config.lastEventTime,
                            o = null != (t = this.config.lastEventId) ? t : -1;
                        this.config.sessionId = e, this.config.lastEventTime = void 0, this.config.pageCounter = 0, ey(this.config.defaultTracking) && (r && i && n.push(this.track(tb, void 0, {
                            device_id: this.previousSessionDeviceId,
                            event_id: ++o,
                            session_id: r,
                            time: i + 1,
                            user_id: this.previousSessionUserId
                        }).promise), this.config.lastEventTime = this.config.sessionId);
                        var s = this.trackCampaignEventIfNeeded(++o, n);
                        return ey(this.config.defaultTracking) && n.push(this.track(tm, void 0, {
                            event_id: s ? ++o : o,
                            session_id: this.config.sessionId,
                            time: this.config.lastEventTime
                        }).promise), this.previousSessionDeviceId = this.config.deviceId, this.previousSessionUserId = this.config.userId, V(Promise.all(n))
                    }, t.prototype.extendSession = function() {
                        this.config ? this.config.lastEventTime = Date.now() : this.q.push(this.extendSession.bind(this))
                    }, t.prototype.setTransport = function(e) {
                        this.config ? this.config.transportProvider = tx(e) : this.q.push(this.setTransport.bind(this, e))
                    }, t.prototype.identify = function(t, n) {
                        if (e6(t)) {
                            var r = t._q;
                            t._q = [], t = e5(new eu, r)
                        }
                        return (null == n ? void 0 : n.user_id) && this.setUserId(n.user_id), (null == n ? void 0 : n.device_id) && this.setDeviceId(n.device_id), e.prototype.identify.call(this, t, n)
                    }, t.prototype.groupIdentify = function(t, n, r, i) {
                        if (e6(r)) {
                            var o = r._q;
                            r._q = [], r = e5(new eu, o)
                        }
                        return e.prototype.groupIdentify.call(this, t, n, r, i)
                    }, t.prototype.revenue = function(t, n) {
                        if (e6(t)) {
                            var r = t._q;
                            t._q = [], t = e5(new ea, r)
                        }
                        return e.prototype.revenue.call(this, t, n)
                    }, t.prototype.trackCampaignEventIfNeeded = function(e, t) {
                        if (!this.webAttribution || !this.webAttribution.shouldTrackNewCampaign) return !1;
                        var n = this.webAttribution.generateCampaignEvent(e);
                        return t ? t.push(this.track(n).promise) : this.track(n), this.config.loggerProvider.log("Tracking attribution."), !0
                    }, t.prototype.process = function(t) {
                        return (0, M().sH)(this, void 0, void 0, function() {
                            var n, r, i;
                            return (0, M().YH)(this, function(o) {
                                return n = Date.now(), r = ej(this.config.sessionTimeout, this.config.lastEventTime), i = this.webAttribution && this.webAttribution.shouldSetSessionIdOnNewCampaign(), t.event_type !== tm && t.event_type !== tb && (!t.session_id || t.session_id === this.getSessionId()) && (r || i ? (this.setSessionId(n), i && this.config.loggerProvider.log("Created a new session for new campaign.")) : r || this.trackCampaignEventIfNeeded()), [2, e.prototype.process.call(this, t)]
                            })
                        })
                    }, t.prototype.logBrowserOptions = function(e) {
                        try {
                            var t = (0, M().Cl)((0, M().Cl)({}, e), {
                                apiKey: e.apiKey.substring(0, 10) + "********"
                            });
                            this.config.loggerProvider.debug("Initialized Amplitude with BrowserConfig:", JSON.stringify(t))
                        } catch (e) {
                            this.config.loggerProvider.error("Error logging browser config", e)
                        }
                    }, t
                }(eh),
                rN = function() {
                    var e = new rx;
                    return {
                        init: $(e.init.bind(e), "init", j(e), z(e, ["config"])),
                        add: $(e.add.bind(e), "add", j(e), z(e, ["config.apiKey", "timeline.plugins"])),
                        remove: $(e.remove.bind(e), "remove", j(e), z(e, ["config.apiKey", "timeline.plugins"])),
                        track: $(e.track.bind(e), "track", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        logEvent: $(e.logEvent.bind(e), "logEvent", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        identify: $(e.identify.bind(e), "identify", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        groupIdentify: $(e.groupIdentify.bind(e), "groupIdentify", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        setGroup: $(e.setGroup.bind(e), "setGroup", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        revenue: $(e.revenue.bind(e), "revenue", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        flush: $(e.flush.bind(e), "flush", j(e), z(e, ["config.apiKey", "timeline.queue.length"])),
                        getUserId: $(e.getUserId.bind(e), "getUserId", j(e), z(e, ["config", "config.userId"])),
                        setUserId: $(e.setUserId.bind(e), "setUserId", j(e), z(e, ["config", "config.userId"])),
                        getDeviceId: $(e.getDeviceId.bind(e), "getDeviceId", j(e), z(e, ["config", "config.deviceId"])),
                        setDeviceId: $(e.setDeviceId.bind(e), "setDeviceId", j(e), z(e, ["config", "config.deviceId"])),
                        reset: $(e.reset.bind(e), "reset", j(e), z(e, ["config", "config.userId", "config.deviceId"])),
                        getSessionId: $(e.getSessionId.bind(e), "getSessionId", j(e), z(e, ["config"])),
                        setSessionId: $(e.setSessionId.bind(e), "setSessionId", j(e), z(e, ["config"])),
                        extendSession: $(e.extendSession.bind(e), "extendSession", j(e), z(e, ["config"])),
                        setOptOut: $(e.setOptOut.bind(e), "setOptOut", j(e), z(e, ["config"])),
                        setTransport: $(e.setTransport.bind(e), "setTransport", j(e), z(e, ["config"]))
                    }
                };
            let rH = rN();
            (v = H || (H = {})).SET = "$set", v.SET_ONCE = "$setOnce", v.ADD = "$add", v.APPEND = "$append", v.PREPEND = "$prepend", v.REMOVE = "$remove", v.PREINSERT = "$preInsert", v.POSTINSERT = "$postInsert", v.UNSET = "$unset", v.CLEAR_ALL = "$clearAll", (g = L || (L = {})).REVENUE_PRODUCT_ID = "$productId", g.REVENUE_QUANTITY = "$quantity", g.REVENUE_PRICE = "$price", g.REVENUE_TYPE = "$revenueType", g.REVENUE_CURRENCY = "$currency", g.REVENUE = "$revenue", (y = U || (U = {})).IDENTIFY = "$identify", y.GROUP_IDENTIFY = "$groupidentify", y.REVENUE = "revenue_amount", (m = D || (D = {})).US = "US", m.EU = "EU", (b = q || (q = {})).Unknown = "unknown", b.Skipped = "skipped", b.Success = "success", b.RateLimit = "rate_limit", b.PayloadTooLarge = "payload_too_large", b.Invalid = "invalid", b.Failed = "failed", b.Timeout = "Timeout", b.SystemError = "SystemError";
            var rL = ["a", "button", "input", "select", "textarea", "label", "video", "audio", '[contenteditable="true" i]', "[data-amp-default-track]", ".amp-default-track"],
                rU = "data-amp-track-",
                rD = ["div", "span", "h1", "h2", "h3", "h4", "h5", "h6"],
                rq = rH.add,
                rY = rH.extendSession,
                rM = rH.flush,
                rj = rH.getDeviceId,
                rF = rH.getSessionId,
                rz = rH.getUserId,
                r$ = rH.groupIdentify,
                rV = rH.identify,
                rJ = rH.init,
                rK = rH.logEvent,
                rW = rH.remove,
                rX = rH.reset,
                rQ = rH.revenue,
                rB = rH.setDeviceId,
                rZ = rH.setGroup,
                rG = rH.setOptOut,
                r0 = rH.setSessionId,
                r1 = rH.setTransport,
                r2 = rH.setUserId,
                r3 = rH.track
        }
    }
]);