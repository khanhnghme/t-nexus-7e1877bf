"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [44187], {
        283439: (t, e, i) => {
            i.d(e, {
                A: () => u
            });
            var s = function(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 1), t > i ? i : t > e ? t : e
                },
                r = function(t) {
                    var e = t / 255;
                    return e < .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                },
                a = function(t) {
                    return 255 * (t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t)
                },
                h = function(t) {
                    var e, i = {
                        x: .9555766 * t.x + -.0230393 * t.y + .0631636 * t.z,
                        y: -.0282895 * t.x + 1.0099416 * t.y + .0210077 * t.z,
                        z: .0122982 * t.x + -.020483 * t.y + 1.3299098 * t.z
                    };
                    return {
                        r: s((e = {
                            r: a(.032404542 * i.x - .015371385 * i.y - .004985314 * i.z),
                            g: a(-.00969266 * i.x + .018760108 * i.y + 41556e-8 * i.z),
                            b: a(556434e-9 * i.x - .002040259 * i.y + .010572252 * i.z),
                            a: t.a
                        }).r, 0, 255),
                        g: s(e.g, 0, 255),
                        b: s(e.b, 0, 255),
                        a: s(e.a)
                    }
                },
                n = function(t) {
                    var e, i, a = r(t.r),
                        h = r(t.g),
                        n = r(t.b);
                    return {
                        x: s((i = {
                            x: 1.0478112 * (e = {
                                x: 100 * (.4124564 * a + .3575761 * h + .1804375 * n),
                                y: 100 * (.2126729 * a + .7151522 * h + .072175 * n),
                                z: 100 * (.0193339 * a + .119192 * h + .9503041 * n),
                                a: t.a
                            }).x + .0228866 * e.y + -.050127 * e.z,
                            y: .0295424 * e.x + .9904844 * e.y + -.0170491 * e.z,
                            z: -.0092345 * e.x + .0150436 * e.y + .7521316 * e.z,
                            a: e.a
                        }).x, 0, 96.422),
                        y: s(i.y, 0, 100),
                        z: s(i.z, 0, 82.521),
                        a: s(i.a)
                    }
                },
                o = 216 / 24389,
                l = 24389 / 27,
                f = function(t) {
                    var e = n(t),
                        i = e.x / 96.422,
                        s = e.y / 100,
                        r = e.z / 82.521;
                    return i = i > o ? Math.cbrt(i) : (l * i + 16) / 116, {
                        l: 116 * (s = s > o ? Math.cbrt(s) : (l * s + 16) / 116) - 16,
                        a: 500 * (i - s),
                        b: 200 * (s - (r = r > o ? Math.cbrt(r) : (l * r + 16) / 116)),
                        alpha: e.a
                    }
                },
                d = function(t, e, i) {
                    var r, a, n, d, u, c = f(t),
                        p = f(e);
                    return a = ((r = {
                        l: s((u = {
                            l: c.l * (1 - i) + p.l * i,
                            a: c.a * (1 - i) + p.a * i,
                            b: c.b * (1 - i) + p.b * i,
                            alpha: c.alpha * (1 - i) + p.alpha * i
                        }).l, 0, 400),
                        a: u.a,
                        b: u.b,
                        alpha: s(u.alpha)
                    }).l + 16) / 116, n = r.a / 500 + a, d = a - r.b / 200, h({
                        x: (Math.pow(n, 3) > o ? Math.pow(n, 3) : (116 * n - 16) / l) * 96.422,
                        y: (r.l > 8 ? Math.pow((r.l + 16) / 116, 3) : r.l / l) * 100,
                        z: (Math.pow(d, 3) > o ? Math.pow(d, 3) : (116 * d - 16) / l) * 82.521,
                        a: r.alpha
                    })
                };

            function u(t) {
                function e(t, e, i) {
                    void 0 === i && (i = 5);
                    for (var s = [], r = 1 / (i - 1), a = 0; a <= i - 1; a++) s.push(t.mix(e, r * a));
                    return s
                }
                t.prototype.mix = function(e, i) {
                    void 0 === i && (i = .5);
                    var s = e instanceof t ? e : new t(e);
                    return new t(d(this.toRgb(), s.toRgb(), i))
                }, t.prototype.tints = function(t) {
                    return e(this, "#fff", t)
                }, t.prototype.shades = function(t) {
                    return e(this, "#000", t)
                }, t.prototype.tones = function(t) {
                    return e(this, "#808080", t)
                }
            }
        },
        329309: (t, e, i) => {
            i.d(e, {
                A: () => s
            });

            function s(t, e) {
                var i = {
                        white: "#ffffff",
                        bisque: "#ffe4c4",
                        blue: "#0000ff",
                        cadetblue: "#5f9ea0",
                        chartreuse: "#7fff00",
                        chocolate: "#d2691e",
                        coral: "#ff7f50",
                        antiquewhite: "#faebd7",
                        aqua: "#00ffff",
                        azure: "#f0ffff",
                        whitesmoke: "#f5f5f5",
                        papayawhip: "#ffefd5",
                        plum: "#dda0dd",
                        blanchedalmond: "#ffebcd",
                        black: "#000000",
                        gold: "#ffd700",
                        goldenrod: "#daa520",
                        gainsboro: "#dcdcdc",
                        cornsilk: "#fff8dc",
                        cornflowerblue: "#6495ed",
                        burlywood: "#deb887",
                        aquamarine: "#7fffd4",
                        beige: "#f5f5dc",
                        crimson: "#dc143c",
                        cyan: "#00ffff",
                        darkblue: "#00008b",
                        darkcyan: "#008b8b",
                        darkgoldenrod: "#b8860b",
                        darkkhaki: "#bdb76b",
                        darkgray: "#a9a9a9",
                        darkgreen: "#006400",
                        darkgrey: "#a9a9a9",
                        peachpuff: "#ffdab9",
                        darkmagenta: "#8b008b",
                        darkred: "#8b0000",
                        darkorchid: "#9932cc",
                        darkorange: "#ff8c00",
                        darkslateblue: "#483d8b",
                        gray: "#808080",
                        darkslategray: "#2f4f4f",
                        darkslategrey: "#2f4f4f",
                        deeppink: "#ff1493",
                        deepskyblue: "#00bfff",
                        wheat: "#f5deb3",
                        firebrick: "#b22222",
                        floralwhite: "#fffaf0",
                        ghostwhite: "#f8f8ff",
                        darkviolet: "#9400d3",
                        magenta: "#ff00ff",
                        green: "#008000",
                        dodgerblue: "#1e90ff",
                        grey: "#808080",
                        honeydew: "#f0fff0",
                        hotpink: "#ff69b4",
                        blueviolet: "#8a2be2",
                        forestgreen: "#228b22",
                        lawngreen: "#7cfc00",
                        indianred: "#cd5c5c",
                        indigo: "#4b0082",
                        fuchsia: "#ff00ff",
                        brown: "#a52a2a",
                        maroon: "#800000",
                        mediumblue: "#0000cd",
                        lightcoral: "#f08080",
                        darkturquoise: "#00ced1",
                        lightcyan: "#e0ffff",
                        ivory: "#fffff0",
                        lightyellow: "#ffffe0",
                        lightsalmon: "#ffa07a",
                        lightseagreen: "#20b2aa",
                        linen: "#faf0e6",
                        mediumaquamarine: "#66cdaa",
                        lemonchiffon: "#fffacd",
                        lime: "#00ff00",
                        khaki: "#f0e68c",
                        mediumseagreen: "#3cb371",
                        limegreen: "#32cd32",
                        mediumspringgreen: "#00fa9a",
                        lightskyblue: "#87cefa",
                        lightblue: "#add8e6",
                        midnightblue: "#191970",
                        lightpink: "#ffb6c1",
                        mistyrose: "#ffe4e1",
                        moccasin: "#ffe4b5",
                        mintcream: "#f5fffa",
                        lightslategray: "#778899",
                        lightslategrey: "#778899",
                        navajowhite: "#ffdead",
                        navy: "#000080",
                        mediumvioletred: "#c71585",
                        powderblue: "#b0e0e6",
                        palegoldenrod: "#eee8aa",
                        oldlace: "#fdf5e6",
                        paleturquoise: "#afeeee",
                        mediumturquoise: "#48d1cc",
                        mediumorchid: "#ba55d3",
                        rebeccapurple: "#663399",
                        lightsteelblue: "#b0c4de",
                        mediumslateblue: "#7b68ee",
                        thistle: "#d8bfd8",
                        tan: "#d2b48c",
                        orchid: "#da70d6",
                        mediumpurple: "#9370db",
                        purple: "#800080",
                        pink: "#ffc0cb",
                        skyblue: "#87ceeb",
                        springgreen: "#00ff7f",
                        palegreen: "#98fb98",
                        red: "#ff0000",
                        yellow: "#ffff00",
                        slateblue: "#6a5acd",
                        lavenderblush: "#fff0f5",
                        peru: "#cd853f",
                        palevioletred: "#db7093",
                        violet: "#ee82ee",
                        teal: "#008080",
                        slategray: "#708090",
                        slategrey: "#708090",
                        aliceblue: "#f0f8ff",
                        darkseagreen: "#8fbc8f",
                        darkolivegreen: "#556b2f",
                        greenyellow: "#adff2f",
                        seagreen: "#2e8b57",
                        seashell: "#fff5ee",
                        tomato: "#ff6347",
                        silver: "#c0c0c0",
                        sienna: "#a0522d",
                        lavender: "#e6e6fa",
                        lightgreen: "#90ee90",
                        orange: "#ffa500",
                        orangered: "#ff4500",
                        steelblue: "#4682b4",
                        royalblue: "#4169e1",
                        turquoise: "#40e0d0",
                        yellowgreen: "#9acd32",
                        salmon: "#fa8072",
                        saddlebrown: "#8b4513",
                        sandybrown: "#f4a460",
                        rosybrown: "#bc8f8f",
                        darksalmon: "#e9967a",
                        lightgoldenrodyellow: "#fafad2",
                        snow: "#fffafa",
                        lightgrey: "#d3d3d3",
                        lightgray: "#d3d3d3",
                        dimgray: "#696969",
                        dimgrey: "#696969",
                        olivedrab: "#6b8e23",
                        olive: "#808000"
                    },
                    s = {};
                for (var r in i) s[i[r]] = r;
                var a = {};
                t.prototype.toName = function(e) {
                    if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
                    var r, h = s[this.toHex()];
                    if (h) return h;
                    if (null == e ? void 0 : e.closest) {
                        var n = this.toRgb(),
                            o = 1 / 0,
                            l = "black";
                        if (!a.length)
                            for (var f in i) a[f] = new t(i[f]).toRgb();
                        for (var d in i) {
                            var u = (r = a[d], Math.pow(n.r - r.r, 2) + Math.pow(n.g - r.g, 2) + Math.pow(n.b - r.b, 2));
                            u < o && (o = u, l = d)
                        }
                        return l
                    }
                }, e.string.push([function(e) {
                    var s = e.toLowerCase(),
                        r = "transparent" === s ? "#0000" : i[s];
                    return r ? new t(r).toRgb() : null
                }, "name"])
            }
        },
        759303: (t, e, i) => {
            i.d(e, {
                q: () => c
            });
            let s = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
                r = new Set,
                a = "object" == typeof process && process ? process : {},
                h = (t, e, i, s) => {
                    "function" == typeof a.emitWarning ? a.emitWarning(t, e, i, s) : console.error(`[${i}] ${e}: ${t}`)
                },
                n = globalThis.AbortController,
                o = globalThis.AbortSignal;
            if (void 0 === n) {
                o = class {
                    onabort;
                    _onabort = [];
                    reason;
                    aborted = !1;
                    addEventListener(t, e) {
                        this._onabort.push(e)
                    }
                }, n = class {
                    constructor() {
                        e()
                    }
                    signal = new o;
                    abort(t) {
                        if (!this.signal.aborted) {
                            for (let e of (this.signal.reason = t, this.signal.aborted = !0, this.signal._onabort)) e(t);
                            this.signal.onabort ? .(t)
                        }
                    }
                };
                let t = a.env ? .LRU_CACHE_IGNORE_AC_WARNING !== "1",
                    e = () => {
                        t && (t = !1, h("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", e))
                    }
            }
            Symbol("type");
            let l = t => t && t === Math.floor(t) && t > 0 && isFinite(t),
                f = t => l(t) ? t <= 256 ? Uint8Array : t <= 65536 ? Uint16Array : t <= 0x100000000 ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? d : null : null;
            class d extends Array {
                constructor(t) {
                    super(t), this.fill(0)
                }
            }
            class u {
                heap;
                length;
                static# t = !1;
                static create(t) {
                    let e = f(t);
                    if (!e) return [];
                    u.#t = !0;
                    let i = new u(t, e);
                    return u.#t = !1, i
                }
                constructor(t, e) {
                    if (!u.#t) throw TypeError("instantiate Stack using Stack.create(n)");
                    this.heap = new e(t), this.length = 0
                }
                push(t) {
                    this.heap[this.length++] = t
                }
                pop() {
                    return this.heap[--this.length]
                }
            }
            class c {#
                e;#
                i;#
                s;#
                r;#
                a;#
                h;#
                n;
                ttl;
                ttlResolution;
                ttlAutopurge;
                updateAgeOnGet;
                updateAgeOnHas;
                allowStale;
                noDisposeOnSet;
                noUpdateTTL;
                maxEntrySize;
                sizeCalculation;
                noDeleteOnFetchRejection;
                noDeleteOnStaleGet;
                allowStaleOnFetchAbort;
                allowStaleOnFetchRejection;
                ignoreFetchAbort;#
                o;#
                l;#
                f;#
                d;#
                u;#
                c;#
                p;#
                g;#
                b;#
                v;#
                y;#
                m;#
                w;#
                x;#
                z;#
                k;#
                S;#
                M;
                static unsafeExposeInternals(t) {
                    return {
                        starts: t.#w,
                        ttls: t.#x,
                        sizes: t.#m,
                        keyMap: t.#f,
                        keyList: t.#d,
                        valList: t.#u,
                        next: t.#c,
                        prev: t.#p,
                        get head() {
                            return t.#g
                        },
                        get tail() {
                            return t.#b
                        },
                        free: t.#v,
                        isBackgroundFetch: e => t.#L(e),
                        backgroundFetch: (e, i, s, r) => t.#_(e, i, s, r),
                        moveToTail: e => t.#F(e),
                        indexes: e => t.#T(e),
                        rindexes: e => t.#A(e),
                        isStale: e => t.#E(e)
                    }
                }
                get max() {
                    return this.#e
                }
                get maxSize() {
                    return this.#i
                }
                get calculatedSize() {
                    return this.#l
                }
                get size() {
                    return this.#o
                }
                get fetchMethod() {
                    return this.#h
                }
                get memoMethod() {
                    return this.#n
                }
                get dispose() {
                    return this.#s
                }
                get onInsert() {
                    return this.#r
                }
                get disposeAfter() {
                    return this.#a
                }
                constructor(t) {
                    const {
                        max: e = 0,
                        ttl: i,
                        ttlResolution: s = 1,
                        ttlAutopurge: a,
                        updateAgeOnGet: n,
                        updateAgeOnHas: o,
                        allowStale: d,
                        dispose: p,
                        onInsert: g,
                        disposeAfter: b,
                        noDisposeOnSet: v,
                        noUpdateTTL: y,
                        maxSize: m = 0,
                        maxEntrySize: w = 0,
                        sizeCalculation: x,
                        fetchMethod: z,
                        memoMethod: k,
                        noDeleteOnFetchRejection: S,
                        noDeleteOnStaleGet: M,
                        allowStaleOnFetchRejection: L,
                        allowStaleOnFetchAbort: _,
                        ignoreFetchAbort: F
                    } = t;
                    if (0 !== e && !l(e)) throw TypeError("max option must be a nonnegative integer");
                    const T = e ? f(e) : Array;
                    if (!T) throw Error("invalid max value: " + e);
                    if (this.#e = e, this.#i = m, this.maxEntrySize = w || this.#i, this.sizeCalculation = x, this.sizeCalculation) {
                        if (!this.#i && !this.maxEntrySize) throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                        if ("function" != typeof this.sizeCalculation) throw TypeError("sizeCalculation set to non-function")
                    }
                    if (void 0 !== k && "function" != typeof k) throw TypeError("memoMethod must be a function if defined");
                    if (this.#n = k, void 0 !== z && "function" != typeof z) throw TypeError("fetchMethod must be a function if specified");
                    if (this.#h = z, this.#k = !!z, this.#f = new Map, this.#d = Array(e).fill(void 0), this.#u = Array(e).fill(void 0), this.#c = new T(e), this.#p = new T(e), this.#g = 0, this.#b = 0, this.#v = u.create(e), this.#o = 0, this.#l = 0, "function" == typeof p && (this.#s = p), "function" == typeof g && (this.#r = g), "function" == typeof b ? (this.#a = b, this.#y = []) : (this.#a = void 0, this.#y = void 0), this.#z = !!this.#s, this.#M = !!this.#r, this.#S = !!this.#a, this.noDisposeOnSet = !!v, this.noUpdateTTL = !!y, this.noDeleteOnFetchRejection = !!S, this.allowStaleOnFetchRejection = !!L, this.allowStaleOnFetchAbort = !!_, this.ignoreFetchAbort = !!F, 0 !== this.maxEntrySize) {
                        if (0 !== this.#i && !l(this.#i)) throw TypeError("maxSize must be a positive integer if specified");
                        if (!l(this.maxEntrySize)) throw TypeError("maxEntrySize must be a positive integer if specified");
                        this.#I()
                    }
                    if (this.allowStale = !!d, this.noDeleteOnStaleGet = !!M, this.updateAgeOnGet = !!n, this.updateAgeOnHas = !!o, this.ttlResolution = l(s) || 0 === s ? s : 1, this.ttlAutopurge = !!a, this.ttl = i || 0, this.ttl) {
                        if (!l(this.ttl)) throw TypeError("ttl must be a positive integer if specified");
                        this.#O()
                    }
                    if (0 === this.#e && 0 === this.ttl && 0 === this.#i) throw TypeError("At least one of max, maxSize, or ttl is required");
                    if (!this.ttlAutopurge && !this.#e && !this.#i) {
                        const t = "LRU_CACHE_UNBOUNDED";
                        (t => !r.has(t))(t) && (r.add(t), h("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, c))
                    }
                }
                getRemainingTTL(t) {
                    return this.#f.has(t) ? 1 / 0 : 0
                }#
                O() {
                    let t = new d(this.#e),
                        e = new d(this.#e);
                    this.#x = t, this.#w = e, this.#D = (i, r, a = s.now()) => {
                        if (e[i] = 0 !== r ? a : 0, t[i] = r, 0 !== r && this.ttlAutopurge) {
                            let t = setTimeout(() => {
                                this.#E(i) && this.#N(this.#d[i], "expire")
                            }, r + 1);
                            t.unref && t.unref()
                        }
                    }, this.#C = i => {
                        e[i] = 0 !== t[i] ? s.now() : 0
                    }, this.#R = (s, a) => {
                        if (t[a]) {
                            let h = t[a],
                                n = e[a];
                            if (!h || !n) return;
                            s.ttl = h, s.start = n, s.now = i || r();
                            let o = s.now - n;
                            s.remainingTTL = h - o
                        }
                    };
                    let i = 0,
                        r = () => {
                            let t = s.now();
                            if (this.ttlResolution > 0) {
                                i = t;
                                let e = setTimeout(() => i = 0, this.ttlResolution);
                                e.unref && e.unref()
                            }
                            return t
                        };
                    this.getRemainingTTL = s => {
                        let a = this.#f.get(s);
                        if (void 0 === a) return 0;
                        let h = t[a],
                            n = e[a];
                        return h && n ? h - ((i || r()) - n) : 1 / 0
                    }, this.#E = s => {
                        let a = e[s],
                            h = t[s];
                        return !!h && !!a && (i || r()) - a > h
                    }
                }#
                C = () => {};#
                R = () => {};#
                D = () => {};#
                E = () => !1;#
                I() {
                    let t = new d(this.#e);
                    this.#l = 0, this.#m = t, this.#W = e => {
                        this.#l -= t[e], t[e] = 0
                    }, this.#B = (t, e, i, s) => {
                        if (this.#L(e)) return 0;
                        if (!l(i))
                            if (s) {
                                if ("function" != typeof s) throw TypeError("sizeCalculation must be a function");
                                if (!l(i = s(e, t))) throw TypeError("sizeCalculation return invalid (expect positive integer)")
                            } else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                        return i
                    }, this.#j = (e, i, s) => {
                        if (t[e] = i, this.#i) {
                            let i = this.#i - t[e];
                            for (; this.#l > i;) this.#U(!0)
                        }
                        this.#l += t[e], s && (s.entrySize = i, s.totalCalculatedSize = this.#l)
                    }
                }#
                W = t => {};#
                j = (t, e, i) => {};#
                B = (t, e, i, s) => {
                    if (i || s) throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
                    return 0
                };* #T({
                    allowStale: t = this.allowStale
                } = {}) {
                    if (this.#o)
                        for (let e = this.#b; this.#H(e) && ((t || !this.#E(e)) && (yield e), e !== this.#g);) e = this.#p[e]
                }* #A({
                    allowStale: t = this.allowStale
                } = {}) {
                    if (this.#o)
                        for (let e = this.#g; this.#H(e) && ((t || !this.#E(e)) && (yield e), e !== this.#b);) e = this.#c[e]
                }#
                H(t) {
                    return void 0 !== t && this.#f.get(this.#d[t]) === t
                }* entries() {
                    for (let t of this.#T()) void 0 === this.#u[t] || void 0 === this.#d[t] || this.#L(this.#u[t]) || (yield [this.#d[t], this.#u[t]])
                }* rentries() {
                    for (let t of this.#A()) void 0 === this.#u[t] || void 0 === this.#d[t] || this.#L(this.#u[t]) || (yield [this.#d[t], this.#u[t]])
                }* keys() {
                    for (let t of this.#T()) {
                        let e = this.#d[t];
                        void 0 === e || this.#L(this.#u[t]) || (yield e)
                    }
                }* rkeys() {
                    for (let t of this.#A()) {
                        let e = this.#d[t];
                        void 0 === e || this.#L(this.#u[t]) || (yield e)
                    }
                }* values() {
                    for (let t of this.#T()) void 0 === this.#u[t] || this.#L(this.#u[t]) || (yield this.#u[t])
                }* rvalues() {
                    for (let t of this.#A()) void 0 === this.#u[t] || this.#L(this.#u[t]) || (yield this.#u[t])
                }[Symbol.iterator]() {
                    return this.entries()
                }[Symbol.toStringTag] = "LRUCache";
                find(t, e = {}) {
                    for (let i of this.#T()) {
                        let s = this.#u[i],
                            r = this.#L(s) ? s.__staleWhileFetching : s;
                        if (void 0 !== r && t(r, this.#d[i], this)) return this.get(this.#d[i], e)
                    }
                }
                forEach(t, e = this) {
                    for (let i of this.#T()) {
                        let s = this.#u[i],
                            r = this.#L(s) ? s.__staleWhileFetching : s;
                        void 0 !== r && t.call(e, r, this.#d[i], this)
                    }
                }
                rforEach(t, e = this) {
                    for (let i of this.#A()) {
                        let s = this.#u[i],
                            r = this.#L(s) ? s.__staleWhileFetching : s;
                        void 0 !== r && t.call(e, r, this.#d[i], this)
                    }
                }
                purgeStale() {
                    let t = !1;
                    for (let e of this.#A({
                            allowStale: !0
                        })) this.#E(e) && (this.#N(this.#d[e], "expire"), t = !0);
                    return t
                }
                info(t) {
                    let e = this.#f.get(t);
                    if (void 0 === e) return;
                    let i = this.#u[e],
                        r = this.#L(i) ? i.__staleWhileFetching : i;
                    if (void 0 === r) return;
                    let a = {
                        value: r
                    };
                    if (this.#x && this.#w) {
                        let t = this.#x[e],
                            i = this.#w[e];
                        t && i && (a.ttl = t - (s.now() - i), a.start = Date.now())
                    }
                    return this.#m && (a.size = this.#m[e]), a
                }
                dump() {
                    let t = [];
                    for (let e of this.#T({
                            allowStale: !0
                        })) {
                        let i = this.#d[e],
                            r = this.#u[e],
                            a = this.#L(r) ? r.__staleWhileFetching : r;
                        if (void 0 === a || void 0 === i) continue;
                        let h = {
                            value: a
                        };
                        if (this.#x && this.#w) {
                            h.ttl = this.#x[e];
                            let t = s.now() - this.#w[e];
                            h.start = Math.floor(Date.now() - t)
                        }
                        this.#m && (h.size = this.#m[e]), t.unshift([i, h])
                    }
                    return t
                }
                load(t) {
                    for (let [e, i] of (this.clear(), t)) {
                        if (i.start) {
                            let t = Date.now() - i.start;
                            i.start = s.now() - t
                        }
                        this.set(e, i.value, i)
                    }
                }
                set(t, e, i = {}) {
                    if (void 0 === e) return this.delete(t), this;
                    let {
                        ttl: s = this.ttl,
                        start: r,
                        noDisposeOnSet: a = this.noDisposeOnSet,
                        sizeCalculation: h = this.sizeCalculation,
                        status: n
                    } = i, {
                        noUpdateTTL: o = this.noUpdateTTL
                    } = i, l = this.#B(t, e, i.size || 0, h);
                    if (this.maxEntrySize && l > this.maxEntrySize) return n && (n.set = "miss", n.maxEntrySizeExceeded = !0), this.#N(t, "set"), this;
                    let f = 0 === this.#o ? void 0 : this.#f.get(t);
                    if (void 0 === f) f = 0 === this.#o ? this.#b : 0 !== this.#v.length ? this.#v.pop() : this.#o === this.#e ? this.#U(!1) : this.#o, this.#d[f] = t, this.#u[f] = e, this.#f.set(t, f), this.#c[this.#b] = f, this.#p[f] = this.#b, this.#b = f, this.#o++, this.#j(f, l, n), n && (n.set = "add"), o = !1, this.#M && this.#r ? .(e, t, "add");
                    else {
                        this.#F(f);
                        let i = this.#u[f];
                        if (e !== i) {
                            if (this.#k && this.#L(i)) {
                                i.__abortController.abort(Error("replaced"));
                                let {
                                    __staleWhileFetching: e
                                } = i;
                                void 0 !== e && !a && (this.#z && this.#s ? .(e, t, "set"), this.#S && this.#y ? .push([e, t, "set"]))
                            } else !a && (this.#z && this.#s ? .(i, t, "set"), this.#S && this.#y ? .push([i, t, "set"]));
                            if (this.#W(f), this.#j(f, l, n), this.#u[f] = e, n) {
                                n.set = "replace";
                                let t = i && this.#L(i) ? i.__staleWhileFetching : i;
                                void 0 !== t && (n.oldValue = t)
                            }
                        } else n && (n.set = "update");
                        this.#M && this.onInsert ? .(e, t, e === i ? "update" : "replace")
                    }
                    if (0 === s || this.#x || this.#O(), this.#x && (o || this.#D(f, s, r), n && this.#R(n, f)), !a && this.#S && this.#y) {
                        let t, e = this.#y;
                        for (; t = e ? .shift();) this.#a ? .(...t)
                    }
                    return this
                }
                pop() {
                    try {
                        for (; this.#o;) {
                            let t = this.#u[this.#g];
                            if (this.#U(!0), this.#L(t)) {
                                if (t.__staleWhileFetching) return t.__staleWhileFetching
                            } else if (void 0 !== t) return t
                        }
                    } finally {
                        if (this.#S && this.#y) {
                            let t, e = this.#y;
                            for (; t = e ? .shift();) this.#a ? .(...t)
                        }
                    }
                }#
                U(t) {
                    let e = this.#g,
                        i = this.#d[e],
                        s = this.#u[e];
                    return this.#k && this.#L(s) ? s.__abortController.abort(Error("evicted")) : (this.#z || this.#S) && (this.#z && this.#s ? .(s, i, "evict"), this.#S && this.#y ? .push([s, i, "evict"])), this.#W(e), t && (this.#d[e] = void 0, this.#u[e] = void 0, this.#v.push(e)), 1 === this.#o ? (this.#g = this.#b = 0, this.#v.length = 0) : this.#g = this.#c[e], this.#f.delete(i), this.#o--, e
                }
                has(t, e = {}) {
                    let {
                        updateAgeOnHas: i = this.updateAgeOnHas,
                        status: s
                    } = e, r = this.#f.get(t);
                    if (void 0 !== r) {
                        let t = this.#u[r];
                        if (this.#L(t) && void 0 === t.__staleWhileFetching) return !1;
                        if (!this.#E(r)) return i && this.#C(r), s && (s.has = "hit", this.#R(s, r)), !0;
                        s && (s.has = "stale", this.#R(s, r))
                    } else s && (s.has = "miss");
                    return !1
                }
                peek(t, e = {}) {
                    let {
                        allowStale: i = this.allowStale
                    } = e, s = this.#f.get(t);
                    if (void 0 === s || !i && this.#E(s)) return;
                    let r = this.#u[s];
                    return this.#L(r) ? r.__staleWhileFetching : r
                }#
                _(t, e, i, s) {
                    let r = void 0 === e ? void 0 : this.#u[e];
                    if (this.#L(r)) return r;
                    let a = new n,
                        {
                            signal: h
                        } = i;
                    h ? .addEventListener("abort", () => a.abort(h.reason), {
                        signal: a.signal
                    });
                    let o = {
                            signal: a.signal,
                            options: i,
                            context: s
                        },
                        l = (s, r = !1) => {
                            let {
                                aborted: h
                            } = a.signal, n = i.ignoreFetchAbort && void 0 !== s;
                            return (i.status && (h && !r ? (i.status.fetchAborted = !0, i.status.fetchError = a.signal.reason, n && (i.status.fetchAbortIgnored = !0)) : i.status.fetchResolved = !0), !h || n || r) ? (this.#u[e] === u && (void 0 === s ? u.__staleWhileFetching ? this.#u[e] = u.__staleWhileFetching : this.#N(t, "fetch") : (i.status && (i.status.fetchUpdated = !0), this.set(t, s, o.options))), s) : f(a.signal.reason)
                        },
                        f = s => {
                            let {
                                aborted: r
                            } = a.signal, h = r && i.allowStaleOnFetchAbort, n = h || i.allowStaleOnFetchRejection, o = n || i.noDeleteOnFetchRejection;
                            if (this.#u[e] === u && (o && void 0 !== u.__staleWhileFetching ? h || (this.#u[e] = u.__staleWhileFetching) : this.#N(t, "fetch")), n) return i.status && void 0 !== u.__staleWhileFetching && (i.status.returnedStale = !0), u.__staleWhileFetching;
                            if (u.__returned === u) throw s
                        },
                        d = (e, s) => {
                            let h = this.#h ? .(t, r, o);
                            h && h instanceof Promise && h.then(t => e(void 0 === t ? void 0 : t), s), a.signal.addEventListener("abort", () => {
                                (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (e(void 0), i.allowStaleOnFetchAbort && (e = t => l(t, !0)))
                            })
                        };
                    i.status && (i.status.fetchDispatched = !0);
                    let u = new Promise(d).then(l, t => (i.status && (i.status.fetchRejected = !0, i.status.fetchError = t), f(t))),
                        c = Object.assign(u, {
                            __abortController: a,
                            __staleWhileFetching: r,
                            __returned: void 0
                        });
                    return void 0 === e ? (this.set(t, c, { ...o.options,
                        status: void 0
                    }), e = this.#f.get(t)) : this.#u[e] = c, c
                }#
                L(t) {
                    return !!this.#k && !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof n
                }
                async fetch(t, e = {}) {
                    let {
                        allowStale: i = this.allowStale,
                        updateAgeOnGet: s = this.updateAgeOnGet,
                        noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
                        ttl: a = this.ttl,
                        noDisposeOnSet: h = this.noDisposeOnSet,
                        size: n = 0,
                        sizeCalculation: o = this.sizeCalculation,
                        noUpdateTTL: l = this.noUpdateTTL,
                        noDeleteOnFetchRejection: f = this.noDeleteOnFetchRejection,
                        allowStaleOnFetchRejection: d = this.allowStaleOnFetchRejection,
                        ignoreFetchAbort: u = this.ignoreFetchAbort,
                        allowStaleOnFetchAbort: c = this.allowStaleOnFetchAbort,
                        context: p,
                        forceRefresh: g = !1,
                        status: b,
                        signal: v
                    } = e;
                    if (!this.#k) return b && (b.fetch = "get"), this.get(t, {
                        allowStale: i,
                        updateAgeOnGet: s,
                        noDeleteOnStaleGet: r,
                        status: b
                    });
                    let y = {
                            allowStale: i,
                            updateAgeOnGet: s,
                            noDeleteOnStaleGet: r,
                            ttl: a,
                            noDisposeOnSet: h,
                            size: n,
                            sizeCalculation: o,
                            noUpdateTTL: l,
                            noDeleteOnFetchRejection: f,
                            allowStaleOnFetchRejection: d,
                            allowStaleOnFetchAbort: c,
                            ignoreFetchAbort: u,
                            status: b,
                            signal: v
                        },
                        m = this.#f.get(t);
                    if (void 0 === m) {
                        b && (b.fetch = "miss");
                        let e = this.#_(t, m, y, p);
                        return e.__returned = e
                    } {
                        let e = this.#u[m];
                        if (this.#L(e)) {
                            let t = i && void 0 !== e.__staleWhileFetching;
                            return b && (b.fetch = "inflight", t && (b.returnedStale = !0)), t ? e.__staleWhileFetching : e.__returned = e
                        }
                        let r = this.#E(m);
                        if (!g && !r) return b && (b.fetch = "hit"), this.#F(m), s && this.#C(m), b && this.#R(b, m), e;
                        let a = this.#_(t, m, y, p),
                            h = void 0 !== a.__staleWhileFetching && i;
                        return b && (b.fetch = r ? "stale" : "refresh", h && r && (b.returnedStale = !0)), h ? a.__staleWhileFetching : a.__returned = a
                    }
                }
                async forceFetch(t, e = {}) {
                    let i = await this.fetch(t, e);
                    if (void 0 === i) throw Error("fetch() returned undefined");
                    return i
                }
                memo(t, e = {}) {
                    let i = this.#n;
                    if (!i) throw Error("no memoMethod provided to constructor");
                    let {
                        context: s,
                        forceRefresh: r,
                        ...a
                    } = e, h = this.get(t, a);
                    if (!r && void 0 !== h) return h;
                    let n = i(t, h, {
                        options: a,
                        context: s
                    });
                    return this.set(t, n, a), n
                }
                get(t, e = {}) {
                    let {
                        allowStale: i = this.allowStale,
                        updateAgeOnGet: s = this.updateAgeOnGet,
                        noDeleteOnStaleGet: r = this.noDeleteOnStaleGet,
                        status: a
                    } = e, h = this.#f.get(t);
                    if (void 0 !== h) {
                        let e = this.#u[h],
                            n = this.#L(e);
                        return (a && this.#R(a, h), this.#E(h)) ? (a && (a.get = "stale"), n) ? (a && i && void 0 !== e.__staleWhileFetching && (a.returnedStale = !0), i ? e.__staleWhileFetching : void 0) : (r || this.#N(t, "expire"), a && i && (a.returnedStale = !0), i ? e : void 0) : (a && (a.get = "hit"), n) ? e.__staleWhileFetching : (this.#F(h), s && this.#C(h), e)
                    }
                    a && (a.get = "miss")
                }#
                q(t, e) {
                    this.#p[e] = t, this.#c[t] = e
                }#
                F(t) {
                    t !== this.#b && (t === this.#g ? this.#g = this.#c[t] : this.#q(this.#p[t], this.#c[t]), this.#q(this.#b, t), this.#b = t)
                }
                delete(t) {
                    return this.#N(t, "delete")
                }#
                N(t, e) {
                    let i = !1;
                    if (0 !== this.#o) {
                        let s = this.#f.get(t);
                        if (void 0 !== s)
                            if (i = !0, 1 === this.#o) this.#G(e);
                            else {
                                this.#W(s);
                                let i = this.#u[s];
                                if (this.#L(i) ? i.__abortController.abort(Error("deleted")) : (this.#z || this.#S) && (this.#z && this.#s ? .(i, t, e), this.#S && this.#y ? .push([i, t, e])), this.#f.delete(t), this.#d[s] = void 0, this.#u[s] = void 0, s === this.#b) this.#b = this.#p[s];
                                else if (s === this.#g) this.#g = this.#c[s];
                                else {
                                    let t = this.#p[s];
                                    this.#c[t] = this.#c[s];
                                    let e = this.#c[s];
                                    this.#p[e] = this.#p[s]
                                }
                                this.#o--, this.#v.push(s)
                            }
                    }
                    if (this.#S && this.#y ? .length) {
                        let t, e = this.#y;
                        for (; t = e ? .shift();) this.#a ? .(...t)
                    }
                    return i
                }
                clear() {
                    return this.#G("delete")
                }#
                G(t) {
                    for (let e of this.#A({
                            allowStale: !0
                        })) {
                        let i = this.#u[e];
                        if (this.#L(i)) i.__abortController.abort(Error("deleted"));
                        else {
                            let s = this.#d[e];
                            this.#z && this.#s ? .(i, s, t), this.#S && this.#y ? .push([i, s, t])
                        }
                    }
                    if (this.#f.clear(), this.#u.fill(void 0), this.#d.fill(void 0), this.#x && this.#w && (this.#x.fill(0), this.#w.fill(0)), this.#m && this.#m.fill(0), this.#g = 0, this.#b = 0, this.#v.length = 0, this.#l = 0, this.#o = 0, this.#S && this.#y) {
                        let t, e = this.#y;
                        for (; t = e ? .shift();) this.#a ? .(...t)
                    }
                }
            }
        },
        767105: (t, e, i) => {
            i.d(e, {
                A: () => s
            });

            function s(t) {
                var e = function(t) {
                        var e, i, s = t.toHex(),
                            r = t.alpha(),
                            a = s.split(""),
                            h = a[1],
                            n = a[2],
                            o = a[3],
                            l = a[4],
                            f = a[5],
                            d = a[6],
                            u = a[7],
                            c = a[8];
                        if (r > 0 && r < 1 && (e = parseInt(u + c, 16) / 255, void 0 === i && (i = 100), Math.round(i * e) / i + 0 !== r)) return null;
                        if (h === n && o === l && f === d) {
                            if (1 === r) return "#" + h + o + f;
                            if (u === c) return "#" + h + o + f + u
                        }
                        return s
                    },
                    i = function(t) {
                        return t > 0 && t < 1 ? t.toString().replace("0.", ".") : t
                    };
                t.prototype.minify = function(t) {
                    void 0 === t && (t = {});
                    var s = this.toRgb(),
                        r = i(s.r),
                        a = i(s.g),
                        h = i(s.b),
                        n = this.toHsl(),
                        o = i(n.h),
                        l = i(n.s),
                        f = i(n.l),
                        d = i(this.alpha()),
                        u = Object.assign({
                            hex: !0,
                            rgb: !0,
                            hsl: !0
                        }, t),
                        c = [];
                    if (u.hex && (1 === d || u.alphaHex)) {
                        var p = e(this);
                        p && c.push(p)
                    }
                    if (u.rgb && c.push(1 === d ? "rgb(" + r + "," + a + "," + h + ")" : "rgba(" + r + "," + a + "," + h + "," + d + ")"), u.hsl && c.push(1 === d ? "hsl(" + o + "," + l + "%," + f + "%)" : "hsla(" + o + "," + l + "%," + f + "%," + d + ")"), u.transparent && 0 === r && 0 === a && 0 === h && 0 === d) c.push("transparent");
                    else if (1 === d && u.name && "function" == typeof this.toName) {
                        var g = this.toName();
                        g && c.push(g)
                    }
                    for (var b = c[0], v = 1; v < c.length; v++) c[v].length < b.length && (b = c[v]);
                    return b
                }
            }
        },
        920008: (t, e, i) => {
            i.d(e, {
                A: () => p
            });
            var s = function(t) {
                    return "string" == typeof t ? t.length > 0 : "number" == typeof t
                },
                r = function(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = Math.pow(10, e)), Math.round(i * t) / i + 0
                },
                a = function(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 1), t > i ? i : t > e ? t : e
                },
                h = function(t) {
                    var e = t / 255;
                    return e < .04045 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                },
                n = function(t) {
                    return 255 * (t > .0031308 ? 1.055 * Math.pow(t, 1 / 2.4) - .055 : 12.92 * t)
                },
                o = function(t) {
                    var e, i = {
                        x: .9555766 * t.x + -.0230393 * t.y + .0631636 * t.z,
                        y: -.0282895 * t.x + 1.0099416 * t.y + .0210077 * t.z,
                        z: .0122982 * t.x + -.020483 * t.y + 1.3299098 * t.z
                    };
                    return {
                        r: a((e = {
                            r: n(.032404542 * i.x - .015371385 * i.y - .004985314 * i.z),
                            g: n(-.00969266 * i.x + .018760108 * i.y + 41556e-8 * i.z),
                            b: n(556434e-9 * i.x - .002040259 * i.y + .010572252 * i.z),
                            a: t.a
                        }).r, 0, 255),
                        g: a(e.g, 0, 255),
                        b: a(e.b, 0, 255),
                        a: a(e.a)
                    }
                },
                l = function(t) {
                    var e, i, s = h(t.r),
                        r = h(t.g),
                        n = h(t.b);
                    return {
                        x: a((i = {
                            x: 1.0478112 * (e = {
                                x: 100 * (.4124564 * s + .3575761 * r + .1804375 * n),
                                y: 100 * (.2126729 * s + .7151522 * r + .072175 * n),
                                z: 100 * (.0193339 * s + .119192 * r + .9503041 * n),
                                a: t.a
                            }).x + .0228866 * e.y + -.050127 * e.z,
                            y: .0295424 * e.x + .9904844 * e.y + -.0170491 * e.z,
                            z: -.0092345 * e.x + .0150436 * e.y + .7521316 * e.z,
                            a: e.a
                        }).x, 0, 96.422),
                        y: a(i.y, 0, 100),
                        z: a(i.z, 0, 82.521),
                        a: a(i.a)
                    }
                },
                f = 216 / 24389,
                d = 24389 / 27,
                u = function(t) {
                    var e, i = t.l,
                        r = t.a,
                        h = t.b,
                        n = t.alpha;
                    return s(i) && s(r) && s(h) ? c({
                        l: a((e = {
                            l: Number(i),
                            a: Number(r),
                            b: Number(h),
                            alpha: Number(void 0 === n ? 1 : n)
                        }).l, 0, 400),
                        a: e.a,
                        b: e.b,
                        alpha: a(e.alpha)
                    }) : null
                },
                c = function(t) {
                    var e = (t.l + 16) / 116,
                        i = t.a / 500 + e,
                        s = e - t.b / 200;
                    return o({
                        x: (Math.pow(i, 3) > f ? Math.pow(i, 3) : (116 * i - 16) / d) * 96.422,
                        y: (t.l > 8 ? Math.pow((t.l + 16) / 116, 3) : t.l / d) * 100,
                        z: (Math.pow(s, 3) > f ? Math.pow(s, 3) : (116 * s - 16) / d) * 82.521,
                        a: t.alpha
                    })
                };

            function p(t, e) {
                t.prototype.toLab = function() {
                    var t, e, i, s, a;
                    return s = (e = l(this.rgba)).y / 100, a = e.z / 82.521, i = (i = e.x / 96.422) > f ? Math.cbrt(i) : (d * i + 16) / 116, {
                        l: r((t = {
                            l: 116 * (s = s > f ? Math.cbrt(s) : (d * s + 16) / 116) - 16,
                            a: 500 * (i - s),
                            b: 200 * (s - (a = a > f ? Math.cbrt(a) : (d * a + 16) / 116)),
                            alpha: e.a
                        }).l, 2),
                        a: r(t.a, 2),
                        b: r(t.b, 2),
                        alpha: r(t.alpha, 3)
                    }
                }, t.prototype.delta = function(e) {
                    void 0 === e && (e = "#FFF");
                    var i, s, h, n, o, l, f, d, u, c, p, g, b, v, y, m, w, x, z, k, S, M, L, _, F, T, A, E, I = e instanceof t ? e : new t(e);
                    return a(r((i = this.toLab(), s = I.toLab(), h = i.l, n = i.a, o = i.b, l = s.l, f = s.a, d = s.b, u = 180 / Math.PI, c = Math.PI / 180, p = (h + l) / 2, b = .5 * (1 - Math.pow((g = Math.pow((Math.pow(Math.pow(n, 2) + Math.pow(o, 2), .5) + Math.pow(Math.pow(f, 2) + Math.pow(d, 2), .5)) / 2, 7)) / (g + 0x16bcc41e9), .5)), v = n * (1 + b), y = f * (1 + b), x = ((m = Math.pow(Math.pow(v, 2) + Math.pow(o, 2), .5)) + (w = Math.pow(Math.pow(y, 2) + Math.pow(d, 2), .5))) / 2, (z = 0 === v && 0 === o ? 0 : Math.atan2(o, v) * u) < 0 && (z += 360), (k = 0 === y && 0 === d ? 0 : Math.atan2(d, y) * u) < 0 && (k += 360), S = k - z, (M = Math.abs(k - z)) > 180 && k <= z ? S += 360 : M > 180 && k > z && (S -= 360), L = z + k, M <= 180 ? L /= 2 : L = (z + k < 360 ? L + 360 : L - 360) / 2, _ = 1 - .17 * Math.cos(c * (L - 30)) + .24 * Math.cos(2 * c * L) + .32 * Math.cos(c * (3 * L + 6)) - .2 * Math.cos(c * (4 * L - 63)), F = w - m, T = 2 * Math.sin(c * S / 2) * Math.pow(m * w, .5), Math.pow(Math.pow((l - h) / 1 / (1 + .015 * Math.pow(p - 50, 2) / Math.pow(20 + Math.pow(p - 50, 2), .5)), 2) + Math.pow(F / 1 / (A = 1 + .045 * x), 2) + Math.pow(T / 1 / (E = 1 + .015 * x * _), 2) + -2 * Math.pow(g / (g + 0x16bcc41e9), .5) * Math.sin(2 * c * (30 * Math.exp(-1 * Math.pow((L - 275) / 25, 2)))) * F * T / (A * E), .5) / 100), 3))
                }, e.object.push([u, "lab"])
            }
        },
        983640: (t, e, i) => {
            i.d(e, {
                Mj: () => F,
                X$: () => A
            });
            var s = {
                    grad: .9,
                    turn: 360,
                    rad: 360 / (2 * Math.PI)
                },
                r = function(t) {
                    return "string" == typeof t ? t.length > 0 : "number" == typeof t
                },
                a = function(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = Math.pow(10, e)), Math.round(i * t) / i + 0
                },
                h = function(t, e, i) {
                    return void 0 === e && (e = 0), void 0 === i && (i = 1), t > i ? i : t > e ? t : e
                },
                n = function(t) {
                    return (t = isFinite(t) ? t % 360 : 0) > 0 ? t : t + 360
                },
                o = function(t) {
                    return {
                        r: h(t.r, 0, 255),
                        g: h(t.g, 0, 255),
                        b: h(t.b, 0, 255),
                        a: h(t.a)
                    }
                },
                l = function(t) {
                    return {
                        r: a(t.r),
                        g: a(t.g),
                        b: a(t.b),
                        a: a(t.a, 3)
                    }
                },
                f = /^#([0-9a-f]{3,8})$/i,
                d = function(t) {
                    var e = t.toString(16);
                    return e.length < 2 ? "0" + e : e
                },
                u = function(t) {
                    var e = t.r,
                        i = t.g,
                        s = t.b,
                        r = t.a,
                        a = Math.max(e, i, s),
                        h = a - Math.min(e, i, s),
                        n = h ? a === e ? (i - s) / h : a === i ? 2 + (s - e) / h : 4 + (e - i) / h : 0;
                    return {
                        h: 60 * (n < 0 ? n + 6 : n),
                        s: a ? h / a * 100 : 0,
                        v: a / 255 * 100,
                        a: r
                    }
                },
                c = function(t) {
                    var e = t.h,
                        i = t.s,
                        s = t.v,
                        r = t.a;
                    e = e / 360 * 6, i /= 100, s /= 100;
                    var a = Math.floor(e),
                        h = s * (1 - i),
                        n = s * (1 - (e - a) * i),
                        o = s * (1 - (1 - e + a) * i),
                        l = a % 6;
                    return {
                        r: 255 * [s, n, h, h, o, s][l],
                        g: 255 * [o, s, s, n, h, h][l],
                        b: 255 * [h, h, o, s, s, n][l],
                        a: r
                    }
                },
                p = function(t) {
                    return {
                        h: n(t.h),
                        s: h(t.s, 0, 100),
                        l: h(t.l, 0, 100),
                        a: h(t.a)
                    }
                },
                g = function(t) {
                    return {
                        h: a(t.h),
                        s: a(t.s),
                        l: a(t.l),
                        a: a(t.a, 3)
                    }
                },
                b = function(t) {
                    var e, i;
                    return c((e = t.s, {
                        h: t.h,
                        s: (e *= ((i = t.l) < 50 ? i : 100 - i) / 100) > 0 ? 2 * e / (i + e) * 100 : 0,
                        v: i + e,
                        a: t.a
                    }))
                },
                v = function(t) {
                    var e, i, s, r;
                    return {
                        h: (e = u(t)).h,
                        s: (r = (200 - (i = e.s)) * (s = e.v) / 100) > 0 && r < 200 ? i * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
                        l: r / 2,
                        a: e.a
                    }
                },
                y = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                m = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                w = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                x = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
                z = {
                    string: [
                        [function(t) {
                            var e = f.exec(t);
                            return e ? (t = e[1]).length <= 4 ? {
                                r: parseInt(t[0] + t[0], 16),
                                g: parseInt(t[1] + t[1], 16),
                                b: parseInt(t[2] + t[2], 16),
                                a: 4 === t.length ? a(parseInt(t[3] + t[3], 16) / 255, 2) : 1
                            } : 6 === t.length || 8 === t.length ? {
                                r: parseInt(t.substr(0, 2), 16),
                                g: parseInt(t.substr(2, 2), 16),
                                b: parseInt(t.substr(4, 2), 16),
                                a: 8 === t.length ? a(parseInt(t.substr(6, 2), 16) / 255, 2) : 1
                            } : null : null
                        }, "hex"],
                        [function(t) {
                            var e = w.exec(t) || x.exec(t);
                            return e ? e[2] !== e[4] || e[4] !== e[6] ? null : o({
                                r: Number(e[1]) / (e[2] ? 100 / 255 : 1),
                                g: Number(e[3]) / (e[4] ? 100 / 255 : 1),
                                b: Number(e[5]) / (e[6] ? 100 / 255 : 1),
                                a: void 0 === e[7] ? 1 : Number(e[7]) / (e[8] ? 100 : 1)
                            }) : null
                        }, "rgb"],
                        [function(t) {
                            var e, i, r = y.exec(t) || m.exec(t);
                            return r ? b(p({
                                h: (e = r[1], void 0 === (i = r[2]) && (i = "deg"), Number(e) * (s[i] || 1)),
                                s: Number(r[3]),
                                l: Number(r[4]),
                                a: void 0 === r[5] ? 1 : Number(r[5]) / (r[6] ? 100 : 1)
                            })) : null
                        }, "hsl"]
                    ],
                    object: [
                        [function(t) {
                            var e = t.r,
                                i = t.g,
                                s = t.b,
                                a = t.a;
                            return r(e) && r(i) && r(s) ? o({
                                r: Number(e),
                                g: Number(i),
                                b: Number(s),
                                a: Number(void 0 === a ? 1 : a)
                            }) : null
                        }, "rgb"],
                        [function(t) {
                            var e = t.h,
                                i = t.s,
                                s = t.l,
                                a = t.a;
                            return r(e) && r(i) && r(s) ? b(p({
                                h: Number(e),
                                s: Number(i),
                                l: Number(s),
                                a: Number(void 0 === a ? 1 : a)
                            })) : null
                        }, "hsl"],
                        [function(t) {
                            var e, i = t.h,
                                s = t.s,
                                a = t.v,
                                o = t.a;
                            return r(i) && r(s) && r(a) ? c({
                                h: n((e = {
                                    h: Number(i),
                                    s: Number(s),
                                    v: Number(a),
                                    a: Number(void 0 === o ? 1 : o)
                                }).h),
                                s: h(e.s, 0, 100),
                                v: h(e.v, 0, 100),
                                a: h(e.a)
                            }) : null
                        }, "hsv"]
                    ]
                },
                k = function(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i][0](t);
                        if (s) return [s, e[i][1]]
                    }
                    return [null, void 0]
                },
                S = function(t, e) {
                    var i = v(t);
                    return {
                        h: i.h,
                        s: h(i.s + 100 * e, 0, 100),
                        l: i.l,
                        a: i.a
                    }
                },
                M = function(t) {
                    return (299 * t.r + 587 * t.g + 114 * t.b) / 1e3 / 255
                },
                L = function(t, e) {
                    var i = v(t);
                    return {
                        h: i.h,
                        s: i.s,
                        l: h(i.l + 100 * e, 0, 100),
                        a: i.a
                    }
                },
                _ = function() {
                    function t(t) {
                        this.parsed = ("string" == typeof t ? k(t.trim(), z.string) : "object" == typeof t && null !== t ? k(t, z.object) : [null, void 0])[0], this.rgba = this.parsed || {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        }
                    }
                    return t.prototype.isValid = function() {
                        return null !== this.parsed
                    }, t.prototype.brightness = function() {
                        return a(M(this.rgba), 2)
                    }, t.prototype.isDark = function() {
                        return .5 > M(this.rgba)
                    }, t.prototype.isLight = function() {
                        return M(this.rgba) >= .5
                    }, t.prototype.toHex = function() {
                        var t, e, i, s, r, h;
                        return e = (t = l(this.rgba)).r, i = t.g, s = t.b, h = (r = t.a) < 1 ? d(a(255 * r)) : "", "#" + d(e) + d(i) + d(s) + h
                    }, t.prototype.toRgb = function() {
                        return l(this.rgba)
                    }, t.prototype.toRgbString = function() {
                        var t, e, i, s, r;
                        return e = (t = l(this.rgba)).r, i = t.g, s = t.b, (r = t.a) < 1 ? "rgba(" + e + ", " + i + ", " + s + ", " + r + ")" : "rgb(" + e + ", " + i + ", " + s + ")"
                    }, t.prototype.toHsl = function() {
                        return g(v(this.rgba))
                    }, t.prototype.toHslString = function() {
                        var t, e, i, s, r;
                        return e = (t = g(v(this.rgba))).h, i = t.s, s = t.l, (r = t.a) < 1 ? "hsla(" + e + ", " + i + "%, " + s + "%, " + r + ")" : "hsl(" + e + ", " + i + "%, " + s + "%)"
                    }, t.prototype.toHsv = function() {
                        var t;
                        return {
                            h: a((t = u(this.rgba)).h),
                            s: a(t.s),
                            v: a(t.v),
                            a: a(t.a, 3)
                        }
                    }, t.prototype.invert = function() {
                        var t;
                        return F({
                            r: 255 - (t = this.rgba).r,
                            g: 255 - t.g,
                            b: 255 - t.b,
                            a: t.a
                        })
                    }, t.prototype.saturate = function(t) {
                        return void 0 === t && (t = .1), F(S(this.rgba, t))
                    }, t.prototype.desaturate = function(t) {
                        return void 0 === t && (t = .1), F(S(this.rgba, -t))
                    }, t.prototype.grayscale = function() {
                        return F(S(this.rgba, -1))
                    }, t.prototype.lighten = function(t) {
                        return void 0 === t && (t = .1), F(L(this.rgba, t))
                    }, t.prototype.darken = function(t) {
                        return void 0 === t && (t = .1), F(L(this.rgba, -t))
                    }, t.prototype.rotate = function(t) {
                        return void 0 === t && (t = 15), this.hue(this.hue() + t)
                    }, t.prototype.alpha = function(t) {
                        var e;
                        return "number" == typeof t ? F({
                            r: (e = this.rgba).r,
                            g: e.g,
                            b: e.b,
                            a: t
                        }) : a(this.rgba.a, 3)
                    }, t.prototype.hue = function(t) {
                        var e = v(this.rgba);
                        return "number" == typeof t ? F({
                            h: t,
                            s: e.s,
                            l: e.l,
                            a: e.a
                        }) : a(e.h)
                    }, t.prototype.isEqual = function(t) {
                        return this.toHex() === F(t).toHex()
                    }, t
                }(),
                F = function(t) {
                    return t instanceof _ ? t : new _(t)
                },
                T = [],
                A = function(t) {
                    t.forEach(function(t) {
                        0 > T.indexOf(t) && (t(_, z), T.push(t))
                    })
                }
        }
    }
]);