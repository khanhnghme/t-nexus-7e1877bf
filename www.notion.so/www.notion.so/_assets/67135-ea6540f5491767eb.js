"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [67135], {
        467135: (e, t, n) => {
            n.r(t), n.d(t, {
                BroadcastChannel: () => S,
                OPEN_BROADCAST_CHANNELS: () => E,
                beLeader: () => R,
                clearNodeFolder: () => I,
                createLeaderElection: () => U,
                enforceOptions: () => B
            });
            var r, o = Promise.resolve(!1),
                i = Promise.resolve(!0),
                s = Promise.resolve();

            function a(e, t) {
                return e || (e = 0), new Promise(function(n) {
                    return setTimeout(function() {
                        return n(t)
                    }, e)
                })
            }

            function u() {
                return Math.random().toString(36).substring(2)
            }
            var c = 0;

            function l() {
                var e = 1e3 * Date.now();
                return e <= c && (e = c + 1), c = e, e
            }
            class d {
                ttl;
                map = new Map;
                _to = !1;
                constructor(e) {
                    this.ttl = e
                }
                has(e) {
                    return this.map.has(e)
                }
                add(e) {
                    this.map.set(e, f()), this._to || (this._to = !0, setTimeout(() => {
                        this._to = !1,
                            function(e) {
                                let t = f() - e.ttl,
                                    n = e.map[Symbol.iterator]();
                                for (;;) {
                                    let r = n.next().value;
                                    if (!r) return;
                                    let o = r[0];
                                    if (!(r[1] < t)) return;
                                    e.map.delete(o)
                                }
                            }(this)
                    }, 0))
                }
                clear() {
                    this.map.clear()
                }
            }

            function f() {
                return Date.now()
            }

            function h() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = JSON.parse(JSON.stringify(e));
                return void 0 === t.webWorkerSupport && (t.webWorkerSupport = !0), t.idb || (t.idb = {}), t.idb.ttl || (t.idb.ttl = 45e3), t.idb.fallbackInterval || (t.idb.fallbackInterval = 150), e.idb && "function" == typeof e.idb.onclose && (t.idb.onclose = e.idb.onclose), t.localstorage || (t.localstorage = {}), t.localstorage.removeTimeout || (t.localstorage.removeTimeout = 6e4), e.methods && (t.methods = e.methods), t.node || (t.node = {}), t.node.ttl || (t.node.ttl = 12e4), t.node.maxParallelWrites || (t.node.maxParallelWrites = 2048), void 0 === t.node.useFastPath && (t.node.useFastPath = !0), t
            }
            var p = "messages",
                m = {
                    durability: "relaxed"
                };

            function v() {
                if ("u" > typeof indexedDB) return indexedDB;
                if ("u" > typeof window) {
                    if (void 0 !== window.mozIndexedDB) return window.mozIndexedDB;
                    if (void 0 !== window.webkitIndexedDB) return window.webkitIndexedDB;
                    if (void 0 !== window.msIndexedDB) return window.msIndexedDB
                }
                return !1
            }

            function _(e) {
                e.commit && e.commit()
            }

            function b(e) {
                return e.closed || !e.messagesCallback ? s : (function(e, t) {
                    var n = e.transaction(p, "readonly", m),
                        r = n.objectStore(p),
                        o = [],
                        i = IDBKeyRange.bound(t + 1, 1 / 0);
                    if (r.getAll) {
                        var s = r.getAll(i);
                        return new Promise(function(e, t) {
                            s.onerror = function(e) {
                                return t(e)
                            }, s.onsuccess = function(t) {
                                e(t.target.result)
                            }
                        })
                    }
                    return new Promise(function(e, s) {
                        var a = function() {
                            try {
                                return i = IDBKeyRange.bound(t + 1, 1 / 0), r.openCursor(i)
                            } catch (e) {
                                return r.openCursor()
                            }
                        }();
                        a.onerror = function(e) {
                            return s(e)
                        }, a.onsuccess = function(r) {
                            var i = r.target.result;
                            i ? i.value.id < t + 1 ? i.continue(t + 1) : (o.push(i.value), i.continue()) : (_(n), e(o))
                        }
                    })
                })(e.db, e.lastCursorId).then(function(t) {
                    return t.filter(function(e) {
                        return !!e
                    }).map(function(t) {
                        return t.id > e.lastCursorId && (e.lastCursorId = t.id), t
                    }).filter(function(t) {
                        return !(t.uuid === e.uuid || e.eMIs.has(t.id)) && !(t.data.time < e.messagesCallbackTime)
                    }).sort(function(e, t) {
                        return e.time - t.time
                    }).forEach(function(t) {
                        e.messagesCallback && (e.eMIs.add(t.id), e.messagesCallback(t.data))
                    }), s
                })
            }

            function w() {
                var e;
                if ("u" < typeof window) return null;
                try {
                    e = window.localStorage, e = window["ie8-eventlistener/storage"] || window.localStorage
                } catch (e) {}
                return e
            }

            function g(e) {
                return "pubkey.broadcastChannel-" + e
            }

            function L() {
                var e = w();
                if (!e) return !1;
                try {
                    var t = "__broadcastchannel_check";
                    e.setItem(t, "works"), e.removeItem(t)
                } catch (e) {
                    return !1
                }
                return !0
            }
            var C = new Set,
                y = {
                    create: function(e) {
                        var t = {
                            time: l(),
                            name: e,
                            messagesCallback: null
                        };
                        return C.add(t), t
                    },
                    close: function(e) {
                        C.delete(e)
                    },
                    onMessage: function(e, t) {
                        e.messagesCallback = t
                    },
                    postMessage: function(e, t) {
                        return new Promise(function(n) {
                            return setTimeout(function() {
                                Array.from(C).forEach(function(n) {
                                    n.name === e.name && n !== e && n.messagesCallback && n.time < t.time && n.messagesCallback(t)
                                }), n()
                            }, 5)
                        })
                    },
                    canBeUsed: function() {
                        return !0
                    },
                    type: "simulate",
                    averageResponseTime: function() {
                        return 5
                    },
                    microSeconds: l
                },
                k = [{
                    create: function(e) {
                        var t = {
                            time: l(),
                            messagesCallback: null,
                            bc: new BroadcastChannel(e),
                            subFns: []
                        };
                        return t.bc.onmessage = function(e) {
                            t.messagesCallback && t.messagesCallback(e.data)
                        }, t
                    },
                    close: function(e) {
                        e.bc.close(), e.subFns = []
                    },
                    onMessage: function(e, t) {
                        e.messagesCallback = t
                    },
                    postMessage: function(e, t) {
                        try {
                            return e.bc.postMessage(t, !1), s
                        } catch (e) {
                            return Promise.reject(e)
                        }
                    },
                    canBeUsed: function() {
                        if ("u" > typeof globalThis && globalThis.Deno && globalThis.Deno.args) return !0;
                        if (!("u" > typeof window || "u" > typeof self) || "function" != typeof BroadcastChannel) return !1;
                        if (BroadcastChannel._pubkey) throw Error("BroadcastChannel: Do not overwrite window.BroadcastChannel with this module, this is not a polyfill");
                        return !0
                    },
                    type: "native",
                    averageResponseTime: function() {
                        return 150
                    },
                    microSeconds: l
                }, {
                    create: function(e, t) {
                        var n;
                        return t = h(t), ((n = v().open("pubkey.broadcast-channel-0-" + e)).onupgradeneeded = function(e) {
                            e.target.result.createObjectStore(p, {
                                keyPath: "id",
                                autoIncrement: !0
                            })
                        }, new Promise(function(e, t) {
                            n.onerror = function(e) {
                                return t(e)
                            }, n.onsuccess = function() {
                                e(n.result)
                            }
                        })).then(function(n) {
                            var r = {
                                closed: !1,
                                lastCursorId: 0,
                                channelName: e,
                                options: t,
                                uuid: u(),
                                eMIs: new d(2 * t.idb.ttl),
                                writeBlockPromise: s,
                                messagesCallback: null,
                                readQueuePromises: [],
                                db: n
                            };
                            return n.onclose = function() {
                                    r.closed = !0, t.idb.onclose && t.idb.onclose()
                                },
                                function e(t) {
                                    t.closed || b(t).then(function() {
                                        return a(t.options.idb.fallbackInterval)
                                    }).then(function() {
                                        return e(t)
                                    })
                                }(r), r
                        })
                    },
                    close: function(e) {
                        e.closed = !0, e.db.close()
                    },
                    onMessage: function(e, t, n) {
                        e.messagesCallbackTime = n, e.messagesCallback = t, b(e)
                    },
                    postMessage: function(e, t) {
                        return e.writeBlockPromise = e.writeBlockPromise.then(function() {
                            var n, r, o, i;
                            return n = e.db, r = e.uuid, o = {
                                uuid: r,
                                time: Date.now(),
                                data: t
                            }, i = n.transaction([p], "readwrite", m), new Promise(function(e, t) {
                                i.oncomplete = function() {
                                    return e()
                                }, i.onerror = function(e) {
                                    return t(e)
                                }, i.objectStore(p).add(o), _(i)
                            })
                        }).then(function() {
                            var t, n, r, o, i, s;
                            0 === Math.floor(11 * Math.random() + 0) && (t = e.db, n = e.options.idb.ttl, r = Date.now() - n, i = (o = t.transaction(p, "readonly", m)).objectStore(p), s = [], new Promise(function(e) {
                                i.openCursor().onsuccess = function(t) {
                                    var n = t.target.result;
                                    if (n) {
                                        var i = n.value;
                                        i.time < r ? (s.push(i), n.continue()) : (_(o), e(s))
                                    } else e(s)
                                }
                            })).then(function(t) {
                                var n = t.map(function(e) {
                                    return e.id
                                });
                                if (e.closed) return Promise.resolve([]);
                                var r = e.db.transaction(p, "readwrite", m).objectStore(p);
                                return Promise.all(n.map(function(e) {
                                    var t = r.delete(e);
                                    return new Promise(function(e) {
                                        t.onsuccess = function() {
                                            return e()
                                        }
                                    })
                                }))
                            })
                        }), e.writeBlockPromise
                    },
                    canBeUsed: function() {
                        return !!v()
                    },
                    type: "idb",
                    averageResponseTime: function(e) {
                        return 2 * e.idb.fallbackInterval
                    },
                    microSeconds: l
                }, {
                    create: function(e, t) {
                        if (t = h(t), !L()) throw Error("BroadcastChannel: localstorage cannot be used");
                        var n, r, o, i = u(),
                            s = new d(t.localstorage.removeTimeout),
                            a = {
                                channelName: e,
                                uuid: i,
                                eMIs: s
                            };
                        return n = function(e) {
                            !a.messagesCallback || e.uuid === i || !e.token || s.has(e.token) || e.data.time && e.data.time < a.messagesCallbackTime || (s.add(e.token), a.messagesCallback(e.data))
                        }, r = g(e), o = function(e) {
                            e.key === r && n(JSON.parse(e.newValue))
                        }, window.addEventListener("storage", o), a.listener = o, a
                    },
                    close: function(e) {
                        var t;
                        t = e.listener, window.removeEventListener("storage", t)
                    },
                    onMessage: function(e, t, n) {
                        e.messagesCallbackTime = n, e.messagesCallback = t
                    },
                    postMessage: function(e, t) {
                        return new Promise(function(n) {
                            a().then(function() {
                                var r = g(e.channelName),
                                    o = JSON.stringify({
                                        token: u(),
                                        time: Date.now(),
                                        data: t,
                                        uuid: e.uuid
                                    });
                                w().setItem(r, o);
                                var i = document.createEvent("Event");
                                i.initEvent("storage", !0, !0), i.key = r, i.newValue = o, window.dispatchEvent(i), n()
                            })
                        })
                    },
                    canBeUsed: L,
                    type: "localstorage",
                    averageResponseTime: function() {
                        var e = navigator.userAgent.toLowerCase();
                        return e.includes("safari") && !e.includes("chrome") ? 240 : 120
                    },
                    microSeconds: l
                }];

            function P(e) {
                var t = [].concat(e.methods, k).filter(Boolean);
                if (e.type) {
                    if ("simulate" === e.type) return y;
                    var n = t.find(function(t) {
                        return t.type === e.type
                    });
                    if (n) return n;
                    throw Error("method-type " + e.type + " not found")
                }
                e.webWorkerSupport || (t = t.filter(function(e) {
                    return "idb" !== e.type
                }));
                var r = t.find(function(e) {
                    return e.canBeUsed()
                });
                if (r) return r;
                throw Error("No usable method found in " + JSON.stringify(k.map(function(e) {
                    return e.type
                })))
            }
            var E = new Set,
                M = 0,
                S = function(e, t) {
                    this.id = M++, E.add(this), this.name = e, r && (t = r), this.options = h(t), this.method = P(this.options), this._iL = !1, this._onML = null, this._addEL = {
                            message: [],
                            internal: []
                        }, this._uMP = new Set, this._befC = [], this._prepP = null,
                        function(e) {
                            var t = e.method.create(e.name, e.options);
                            t && "function" == typeof t.then ? (e._prepP = t, t.then(function(t) {
                                e._state = t
                            })) : e._state = t
                        }(this)
                };

            function I(e) {
                var t = P(e = h(e));
                return "node" === t.type ? t.clearNodeFolder().then(function() {
                    return !0
                }) : o
            }

            function B(e) {
                r = e
            }

            function x(e, t, n) {
                var r = {
                    time: e.method.microSeconds(),
                    type: t,
                    data: n
                };
                return (e._prepP ? e._prepP : s).then(function() {
                    var t = e.method.postMessage(e._state, r);
                    return e._uMP.add(t), t.catch().then(function() {
                        return e._uMP.delete(t)
                    }), t
                })
            }

            function T(e) {
                return !!(e._addEL.message.length > 0) || !!(e._addEL.internal.length > 0)
            }

            function D(e, t, n) {
                e._addEL[t].push(n),
                    function(e) {
                        if (!e._iL && T(e)) {
                            var t = function(t) {
                                    e._addEL[t.type].forEach(function(e) {
                                        t.time >= e.time && e.fn(t.data)
                                    })
                                },
                                n = e.method.microSeconds();
                            e._prepP ? e._prepP.then(function() {
                                e._iL = !0, e.method.onMessage(e._state, t, n)
                            }) : (e._iL = !0, e.method.onMessage(e._state, t, n))
                        }
                    }(e)
            }

            function N(e, t, n) {
                e._addEL[t] = e._addEL[t].filter(function(e) {
                        return e !== n
                    }),
                    function(e) {
                        if (e._iL && !T(e)) {
                            e._iL = !1;
                            var t = e.method.microSeconds();
                            e.method.onMessage(e._state, null, t)
                        }
                    }(e)
            }
            S._pubkey = !0, S.prototype = {
                postMessage: function(e) {
                    if (this.closed) throw Error("BroadcastChannel.postMessage(): Cannot post message after channel has closed " + JSON.stringify(e));
                    return x(this, "message", e)
                },
                postInternal: function(e) {
                    return x(this, "internal", e)
                },
                set onmessage(fn) {
                    var O = {
                        time: this.method.microSeconds(),
                        fn: fn
                    };
                    N(this, "message", this._onML), fn && "function" == typeof fn ? (this._onML = O, D(this, "message", O)) : this._onML = null
                },
                addEventListener: function(e, t) {
                    D(this, e, {
                        time: this.method.microSeconds(),
                        fn: t
                    })
                },
                removeEventListener: function(e, t) {
                    var n = this._addEL[e].find(function(e) {
                        return e.fn === t
                    });
                    N(this, e, n)
                },
                close: function() {
                    var e = this;
                    if (!this.closed) {
                        E.delete(this), this.closed = !0;
                        var t = this._prepP ? this._prepP : s;
                        return this._onML = null, this._addEL.message = [], t.then(function() {
                            return Promise.all(Array.from(e._uMP))
                        }).then(function() {
                            return Promise.all(e._befC.map(function(e) {
                                return e()
                            }))
                        }).then(function() {
                            return e.method.close(e._state)
                        })
                    }
                },
                get type() {
                    return this.method.type
                },
                get isClosed() {
                    return this.closed
                }
            };
            var K = "[object process]" === Object.prototype.toString.call("u" > typeof process ? process : 0) ? function(e) {
                    process.on("exit", function() {
                        return e()
                    }), process.on("beforeExit", function() {
                        return e().then(function() {
                            return process.exit()
                        })
                    }), process.on("SIGINT", function() {
                        return e().then(function() {
                            return process.exit()
                        })
                    }), process.on("uncaughtException", function(t) {
                        return e().then(function() {
                            console.trace(t), process.exit(101)
                        })
                    })
                } : function(e) {
                    if ("function" == typeof WorkerGlobalScope && self instanceof WorkerGlobalScope) {
                        var t = self.close.bind(self);
                        self.close = function() {
                            return e(), t()
                        }
                    } else {
                        if ("function" != typeof window.addEventListener) return;
                        window.addEventListener("beforeunload", function() {
                            e()
                        }, !0), window.addEventListener("unload", function() {
                            e()
                        }, !0)
                    }
                },
                Q = new Set,
                j = !1;

            function A() {
                var e = [];
                return Q.forEach(function(t) {
                    e.push(t()), Q.delete(t)
                }), Promise.all(e)
            }

            function J(e, t) {
                var n = {
                    context: "leader",
                    action: t,
                    token: e.token
                };
                return e.broadcastChannel.postInternal(n)
            }

            function R(e) {
                e.isLeader = !0, e._hasLeader = !0;
                var t = function(e) {
                    if (j || (j = !0, K(A)), "function" != typeof e) throw Error("Listener is no function");
                    return Q.add(e), {
                        remove: function() {
                            return Q.delete(e)
                        },
                        run: function() {
                            return Q.delete(e), e()
                        }
                    }
                }(function() {
                    return e.die()
                });
                e._unl.push(t);
                var n = function(t) {
                    "leader" === t.context && "apply" === t.action && J(e, "tell"), "leader" !== t.context || "tell" !== t.action || e._dpLC || (e._dpLC = !0, e._dpL(), J(e, "tell"))
                };
                return e.broadcastChannel.addEventListener("internal", n), e._lstns.push(n), J(e, "tell")
            }
            var W = function(e, t) {
                var n = this;
                this.broadcastChannel = e, e._befC.push(function() {
                    return n.die()
                }), this._options = t, this.isLeader = !1, this.isDead = !1, this.token = u(), this._lstns = [], this._unl = [], this._dpL = function() {}, this._dpLC = !1, this._wKMC = {}, this.lN = "pubkey-bc||" + e.method.type + "||" + e.name
            };
            W.prototype = {
                hasLeader: function() {
                    var e = this;
                    return navigator.locks.query().then(function(t) {
                        var n = t.held ? t.held.filter(function(t) {
                            return t.name === e.lN
                        }) : [];
                        return !!n && !!(n.length > 0)
                    })
                },
                awaitLeadership: function() {
                    var e = this;
                    if (!this._wLMP) {
                        this._wKMC.c = new AbortController;
                        var t = new Promise(function(t, n) {
                            e._wKMC.res = t, e._wKMC.rej = n
                        });
                        this._wLMP = new Promise(function(n) {
                            navigator.locks.request(e.lN, {
                                signal: e._wKMC.c.signal
                            }, function() {
                                return e._wKMC.c = void 0, R(e), n(), t
                            }).catch(function() {})
                        })
                    }
                    return this._wLMP
                },
                set onduplicate(_fn) {},
                die: function() {
                    var e = this;
                    return this._lstns.forEach(function(t) {
                        return e.broadcastChannel.removeEventListener("internal", t)
                    }), this._lstns = [], this._unl.forEach(function(e) {
                        return e.remove()
                    }), this._unl = [], this.isLeader && (this.isLeader = !1), this.isDead = !0, this._wKMC.res && this._wKMC.res(), this._wKMC.c && this._wKMC.c.abort("LeaderElectionWebLock.die() called"), J(this, "death")
                }
            };
            var F = function(e, t) {
                var n = this;
                this.broadcastChannel = e, this._options = t, this.isLeader = !1, this._hasLeader = !1, this.isDead = !1, this.token = u(), this._aplQ = s, this._aplQC = 0, this._unl = [], this._lstns = [], this._dpL = function() {}, this._dpLC = !1;
                var r = function(e) {
                    "leader" === e.context && ("death" === e.action && (n._hasLeader = !1), "tell" === e.action && (n._hasLeader = !0))
                };
                this.broadcastChannel.addEventListener("internal", r), this._lstns.push(r)
            };

            function U(e, t) {
                if (e._leaderElector) throw Error("BroadcastChannel already has a leader-elector");
                (n = t) || (n = {}), (n = JSON.parse(JSON.stringify(n))).fallbackInterval || (n.fallbackInterval = 3e3), n.responseTime || (n.responseTime = e.method.averageResponseTime(e.options)), t = n;
                var n, r = "u" > typeof navigator && void 0 !== navigator.locks && "function" == typeof navigator.locks.request ? new W(e, t) : new F(e, t);
                return e._befC.push(function() {
                    return r.die()
                }), e._leaderElector = r, r
            }
            F.prototype = {
                hasLeader: function() {
                    return Promise.resolve(this._hasLeader)
                },
                applyOnce: function(e) {
                    var t = this;
                    if (this.isLeader) return a(0, !0);
                    if (this.isDead) return a(0, !1);
                    if (this._aplQC > 1) return this._aplQ;
                    var n = function() {
                        if (t.isLeader) return i;
                        var n, r = !1,
                            o = new Promise(function(e) {
                                n = function() {
                                    r = !0, e()
                                }
                            }),
                            s = function(e) {
                                "leader" === e.context && e.token != t.token && ("apply" === e.action && e.token > t.token && n(), "tell" === e.action && (n(), t._hasLeader = !0))
                            };
                        t.broadcastChannel.addEventListener("internal", s);
                        var u = e ? 4 * t._options.responseTime : t._options.responseTime;
                        return J(t, "apply").then(function() {
                            return Promise.race([a(u), o.then(function() {
                                return Promise.reject(Error())
                            })])
                        }).then(function() {
                            return J(t, "apply")
                        }).then(function() {
                            return Promise.race([a(u), o.then(function() {
                                return Promise.reject(Error())
                            })])
                        }).catch(function() {}).then(function() {
                            return t.broadcastChannel.removeEventListener("internal", s), !r && R(t).then(function() {
                                return !0
                            })
                        })
                    };
                    return this._aplQC = this._aplQC + 1, this._aplQ = this._aplQ.then(function() {
                        return n()
                    }).then(function() {
                        t._aplQC = t._aplQC - 1
                    }), this._aplQ.then(function() {
                        return t.isLeader
                    })
                },
                awaitLeadership: function() {
                    var e;
                    return this._aLP || (this._aLP = (e = this, e.isLeader ? s : new Promise(function(t) {
                        var n = !1;

                        function r() {
                            n || (n = !0, e.broadcastChannel.removeEventListener("internal", o), t(!0))
                        }
                        e.applyOnce().then(function() {
                            e.isLeader && r()
                        }), ! function t() {
                            return a(e._options.fallbackInterval).then(function() {
                                if (!e.isDead && !n)
                                    if (!e.isLeader) return e.applyOnce(!0).then(function() {
                                        e.isLeader ? r() : t()
                                    });
                                    else r()
                            })
                        }();
                        var o = function(t) {
                            "leader" === t.context && "death" === t.action && (e._hasLeader = !1, e.applyOnce().then(function() {
                                e.isLeader && r()
                            }))
                        };
                        e.broadcastChannel.addEventListener("internal", o), e._lstns.push(o)
                    }))), this._aLP
                },
                set onduplicate(fn) {
                    this._dpL = fn
                },
                die: function() {
                    var e = this;
                    return this._lstns.forEach(function(t) {
                        return e.broadcastChannel.removeEventListener("internal", t)
                    }), this._lstns = [], this._unl.forEach(function(e) {
                        return e.remove()
                    }), this._unl = [], this.isLeader && (this._hasLeader = !1, this.isLeader = !1), this.isDead = !0, J(this, "death")
                }
            }
        }
    }
]);