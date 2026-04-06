"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [26361], {
        326361: (e, t, s) => {
            s.d(t, {
                Te: () => o
            });
            var i = s(296540),
                n = s(440961);
            let l = "u" > typeof document ? i.useLayoutEffect : i.useEffect;

            function o(e) {
                return function({
                    useFlushSync: e = !0,
                    ...t
                }) {
                    let o = i.useReducer(() => ({}), {})[1],
                        r = { ...t,
                            onChange: (s, i) => {
                                var l;
                                e && i ? (0, n.flushSync)(o) : o(), null == (l = t.onChange) || l.call(t, s, i)
                            }
                        },
                        [h] = i.useState(() => new(s(742753)).YV(r));
                    return h.setOptions(r), l(() => h._didMount(), []), l(() => h._willUpdate()), h
                }({
                    observeElementRect: s(742753).T6,
                    observeElementOffset: s(742753).AO,
                    scrollToFn: s(742753).Ox,
                    ...e
                })
            }
        },
        742753: (e, t, s) => {
            function i(e, t, s) {
                let i, n = s.initialDeps ? ? [],
                    l = !0;

                function o() {
                    var o, r, h;
                    let a, u;
                    s.key && (null == (o = s.debug) ? void 0 : o.call(s)) && (a = Date.now());
                    let c = e();
                    if (!(c.length !== n.length || c.some((e, t) => n[t] !== e))) return i;
                    if (n = c, s.key && (null == (r = s.debug) ? void 0 : r.call(s)) && (u = Date.now()), i = t(...c), s.key && (null == (h = s.debug) ? void 0 : h.call(s))) {
                        let e = Math.round((Date.now() - a) * 100) / 100,
                            t = Math.round((Date.now() - u) * 100) / 100,
                            i = t / 16,
                            n = (e, t) => {
                                for (e = String(e); e.length < t;) e = " " + e;
                                return e
                            };
                        console.info(`%c⏱ ${n(t,5)} /${n(e,5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0,Math.min(120-120*i,120))}deg 100% 31%);`, null == s ? void 0 : s.key)
                    }
                    return (null == s ? void 0 : s.onChange) && !(l && s.skipInitialOnChange) && s.onChange(i), l = !1, i
                }
                return o.updateDeps = e => {
                    n = e
                }, o
            }

            function n(e, t) {
                if (void 0 !== e) return e;
                throw Error(`Unexpected undefined${t?`: ${t}`:""}`)
            }
            s.d(t, {
                YV: () => g,
                vp: () => r,
                Ox: () => f,
                AO: () => c,
                T6: () => h
            });
            let l = e => {
                    let {
                        offsetWidth: t,
                        offsetHeight: s
                    } = e;
                    return {
                        width: t,
                        height: s
                    }
                },
                o = e => e,
                r = e => {
                    let t = Math.max(e.startIndex - e.overscan, 0),
                        s = Math.min(e.endIndex + e.overscan, e.count - 1),
                        i = [];
                    for (let e = t; e <= s; e++) i.push(e);
                    return i
                },
                h = (e, t) => {
                    let s = e.scrollElement;
                    if (!s) return;
                    let i = e.targetWindow;
                    if (!i) return;
                    let n = e => {
                        let {
                            width: s,
                            height: i
                        } = e;
                        t({
                            width: Math.round(s),
                            height: Math.round(i)
                        })
                    };
                    if (n(l(s)), !i.ResizeObserver) return () => {};
                    let o = new i.ResizeObserver(t => {
                        let i = () => {
                            let e = t[0];
                            if (null == e ? void 0 : e.borderBoxSize) {
                                let t = e.borderBoxSize[0];
                                if (t) return void n({
                                    width: t.inlineSize,
                                    height: t.blockSize
                                })
                            }
                            n(l(s))
                        };
                        e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(i) : i()
                    });
                    return o.observe(s, {
                        box: "border-box"
                    }), () => {
                        o.unobserve(s)
                    }
                },
                a = {
                    passive: !0
                },
                u = "u" < typeof window || "onscrollend" in window,
                c = (e, t) => {
                    var s, i;
                    let n, l = e.scrollElement;
                    if (!l) return;
                    let o = e.targetWindow;
                    if (!o) return;
                    let r = 0,
                        h = e.options.useScrollendEvent && u ? () => void 0 : (s = () => {
                            t(r, !1)
                        }, i = e.options.isScrollingResetDelay, function(...e) {
                            o.clearTimeout(n), n = o.setTimeout(() => s.apply(this, e), i)
                        }),
                        c = s => () => {
                            let {
                                horizontal: i,
                                isRtl: n
                            } = e.options;
                            r = i ? l.scrollLeft * (n && -1 || 1) : l.scrollTop, h(), t(r, s)
                        },
                        d = c(!0),
                        f = c(!1);
                    l.addEventListener("scroll", d, a);
                    let g = e.options.useScrollendEvent && u;
                    return g && l.addEventListener("scrollend", f, a), () => {
                        l.removeEventListener("scroll", d), g && l.removeEventListener("scrollend", f)
                    }
                },
                d = (e, t, s) => {
                    if (null == t ? void 0 : t.borderBoxSize) {
                        let e = t.borderBoxSize[0];
                        if (e) return Math.round(e[s.options.horizontal ? "inlineSize" : "blockSize"])
                    }
                    return e[s.options.horizontal ? "offsetWidth" : "offsetHeight"]
                },
                f = (e, {
                    adjustments: t = 0,
                    behavior: s
                }, i) => {
                    var n, l;
                    null == (l = null == (n = i.scrollElement) ? void 0 : n.scrollTo) || l.call(n, {
                        [i.options.horizontal ? "left" : "top"]: e + t,
                        behavior: s
                    })
                };
            class g {
                constructor(e) {
                    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollState = null, this.measurementsCache = [], this.itemSizeCache = new Map, this.laneAssignments = new Map, this.pendingMeasuredCacheIndexes = [], this.prevLanes = void 0, this.lanesChangedFlag = !1, this.lanesSettling = !1, this.scrollRect = null, this.scrollOffset = null, this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = new Map, this.now = () => {
                        var e, t, s;
                        return (null == (s = null == (t = null == (e = this.targetWindow) ? void 0 : e.performance) ? void 0 : t.now) ? void 0 : s.call(t)) ? ? Date.now()
                    }, this.observer = (() => {
                        let e = null,
                            t = () => e || (this.targetWindow && this.targetWindow.ResizeObserver ? e = new this.targetWindow.ResizeObserver(e => {
                                e.forEach(e => {
                                    let t = () => {
                                        this._measureElement(e.target, e)
                                    };
                                    this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(t) : t()
                                })
                            }) : null);
                        return {
                            disconnect: () => {
                                var s;
                                null == (s = t()) || s.disconnect(), e = null
                            },
                            observe: e => {
                                var s;
                                return null == (s = t()) ? void 0 : s.observe(e, {
                                    box: "border-box"
                                })
                            },
                            unobserve: e => {
                                var s;
                                return null == (s = t()) ? void 0 : s.unobserve(e)
                            }
                        }
                    })(), this.range = null, this.setOptions = e => {
                        Object.entries(e).forEach(([t, s]) => {
                            void 0 === s && delete e[t]
                        }), this.options = {
                            debug: !1,
                            initialOffset: 0,
                            overscan: 1,
                            paddingStart: 0,
                            paddingEnd: 0,
                            scrollPaddingStart: 0,
                            scrollPaddingEnd: 0,
                            horizontal: !1,
                            getItemKey: o,
                            rangeExtractor: r,
                            onChange: () => {},
                            measureElement: d,
                            initialRect: {
                                width: 0,
                                height: 0
                            },
                            scrollMargin: 0,
                            gap: 0,
                            indexAttribute: "data-index",
                            initialMeasurementsCache: [],
                            lanes: 1,
                            isScrollingResetDelay: 150,
                            enabled: !0,
                            isRtl: !1,
                            useScrollendEvent: !1,
                            useAnimationFrameWithResizeObserver: !1,
                            ...e
                        }
                    }, this.notify = e => {
                        var t, s;
                        null == (s = (t = this.options).onChange) || s.call(t, this, e)
                    }, this.maybeNotify = i(() => (this.calculateRange(), [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]), e => {
                        this.notify(e)
                    }, {
                        key: !1,
                        debug: () => this.options.debug,
                        initialDeps: [this.isScrolling, this.range ? this.range.startIndex : null, this.range ? this.range.endIndex : null]
                    }), this.cleanup = () => {
                        this.unsubs.filter(Boolean).forEach(e => e()), this.unsubs = [], this.observer.disconnect(), null != this.rafId && this.targetWindow && (this.targetWindow.cancelAnimationFrame(this.rafId), this.rafId = null), this.scrollState = null, this.scrollElement = null, this.targetWindow = null
                    }, this._didMount = () => () => {
                        this.cleanup()
                    }, this._willUpdate = () => {
                        var e;
                        let t = this.options.enabled ? this.options.getScrollElement() : null;
                        if (this.scrollElement !== t) {
                            if (this.cleanup(), !t) return void this.maybeNotify();
                            this.scrollElement = t, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.defaultView : this.targetWindow = (null == (e = this.scrollElement) ? void 0 : e.window) ? ? null, this.elementsCache.forEach(e => {
                                this.observer.observe(e)
                            }), this.unsubs.push(this.options.observeElementRect(this, e => {
                                this.scrollRect = e, this.maybeNotify()
                            })), this.unsubs.push(this.options.observeElementOffset(this, (e, t) => {
                                this.scrollAdjustments = 0, this.scrollDirection = t ? this.getScrollOffset() < e ? "forward" : "backward" : null, this.scrollOffset = e, this.isScrolling = t, this.scrollState && this.scheduleScrollReconcile(), this.maybeNotify()
                            })), this._scrollToOffset(this.getScrollOffset(), {
                                adjustments: void 0,
                                behavior: void 0
                            })
                        }
                    }, this.rafId = null, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ? ? this.options.initialRect, this.scrollRect[this.options.horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset = this.scrollOffset ? ? ("function" == typeof this.options.initialOffset ? this.options.initialOffset() : this.options.initialOffset), this.scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (e, t) => {
                        let s = new Map,
                            i = new Map;
                        for (let n = t - 1; n >= 0; n--) {
                            let t = e[n];
                            if (s.has(t.lane)) continue;
                            let l = i.get(t.lane);
                            if (null == l || t.end > l.end ? i.set(t.lane, t) : t.end < l.end && s.set(t.lane, !0), s.size === this.options.lanes) break
                        }
                        return i.size === this.options.lanes ? Array.from(i.values()).sort((e, t) => e.end === t.end ? e.index - t.index : e.end - t.end)[0] : void 0
                    }, this.getMeasurementOptions = i(() => [this.options.count, this.options.paddingStart, this.options.scrollMargin, this.options.getItemKey, this.options.enabled, this.options.lanes], (e, t, s, i, n, l) => (void 0 !== this.prevLanes && this.prevLanes !== l && (this.lanesChangedFlag = !0), this.prevLanes = l, this.pendingMeasuredCacheIndexes = [], {
                        count: e,
                        paddingStart: t,
                        scrollMargin: s,
                        getItemKey: i,
                        enabled: n,
                        lanes: l
                    }), {
                        key: !1
                    }), this.getMeasurements = i(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
                        count: e,
                        paddingStart: t,
                        scrollMargin: s,
                        getItemKey: i,
                        enabled: n,
                        lanes: l
                    }, o) => {
                        if (!n) return this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), [];
                        if (this.laneAssignments.size > e)
                            for (let t of this.laneAssignments.keys()) t >= e && this.laneAssignments.delete(t);
                        this.lanesChangedFlag && (this.lanesChangedFlag = !1, this.lanesSettling = !0, this.measurementsCache = [], this.itemSizeCache.clear(), this.laneAssignments.clear(), this.pendingMeasuredCacheIndexes = []), 0 !== this.measurementsCache.length || this.lanesSettling || (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(e => {
                            this.itemSizeCache.set(e.key, e.size)
                        }));
                        let r = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
                        this.pendingMeasuredCacheIndexes = [], this.lanesSettling && this.measurementsCache.length === e && (this.lanesSettling = !1);
                        let h = this.measurementsCache.slice(0, r),
                            a = Array(l).fill(void 0);
                        for (let e = 0; e < r; e++) {
                            let t = h[e];
                            t && (a[t.lane] = e)
                        }
                        for (let n = r; n < e; n++) {
                            let e, l, r = i(n),
                                u = this.laneAssignments.get(n);
                            if (void 0 !== u && this.options.lanes > 1) {
                                let i = a[e = u],
                                    n = void 0 !== i ? h[i] : void 0;
                                l = n ? n.end + this.options.gap : t + s
                            } else {
                                let i = 1 === this.options.lanes ? h[n - 1] : this.getFurthestMeasurement(h, n);
                                l = i ? i.end + this.options.gap : t + s, e = i ? i.lane : n % this.options.lanes, this.options.lanes > 1 && this.laneAssignments.set(n, e)
                            }
                            let c = o.get(r),
                                d = "number" == typeof c ? c : this.options.estimateSize(n),
                                f = l + d;
                            h[n] = {
                                index: n,
                                start: l,
                                size: d,
                                end: f,
                                key: r,
                                lane: e
                            }, a[e] = n
                        }
                        return this.measurementsCache = h, h
                    }, {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.calculateRange = i(() => [this.getMeasurements(), this.getSize(), this.getScrollOffset(), this.options.lanes], (e, t, s, i) => this.range = e.length > 0 && t > 0 ? function({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: s,
                        lanes: i
                    }) {
                        let n = e.length - 1;
                        if (e.length <= i) return {
                            startIndex: 0,
                            endIndex: n
                        };
                        let l = m(0, n, t => e[t].start, s),
                            o = l;
                        if (1 === i)
                            for (; o < n && e[o].end < s + t;) o++;
                        else if (i > 1) {
                            let r = Array(i).fill(0);
                            for (; o < n && r.some(e => e < s + t);) {
                                let t = e[o];
                                r[t.lane] = t.end, o++
                            }
                            let h = Array(i).fill(s + t);
                            for (; l >= 0 && h.some(e => e >= s);) {
                                let t = e[l];
                                h[t.lane] = t.start, l--
                            }
                            l = Math.max(0, l - l % i), o = Math.min(n, o + (i - 1 - o % i))
                        }
                        return {
                            startIndex: l,
                            endIndex: o
                        }
                    }({
                        measurements: e,
                        outerSize: t,
                        scrollOffset: s,
                        lanes: i
                    }) : null, {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.getVirtualIndexes = i(() => {
                        let e = null,
                            t = null,
                            s = this.calculateRange();
                        return s && (e = s.startIndex, t = s.endIndex), this.maybeNotify.updateDeps([this.isScrolling, e, t]), [this.options.rangeExtractor, this.options.overscan, this.options.count, e, t]
                    }, (e, t, s, i, n) => null === i || null === n ? [] : e({
                        startIndex: i,
                        endIndex: n,
                        overscan: t,
                        count: s
                    }), {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.indexFromElement = e => {
                        let t = this.options.indexAttribute,
                            s = e.getAttribute(t);
                        return s ? parseInt(s, 10) : (console.warn(`Missing attribute name '${t}={index}' on measured element.`), -1)
                    }, this.shouldMeasureDuringScroll = e => {
                        var t;
                        if (!this.scrollState || "smooth" !== this.scrollState.behavior) return !0;
                        let s = this.scrollState.index ? ? (null == (t = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) ? void 0 : t.index);
                        if (void 0 !== s && this.range) {
                            let t = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2)),
                                i = Math.max(0, s - t),
                                n = Math.min(this.options.count - 1, s + t);
                            return e >= i && e <= n
                        }
                        return !0
                    }, this._measureElement = (e, t) => {
                        if (!e.isConnected) return void this.observer.unobserve(e);
                        let s = this.indexFromElement(e),
                            i = this.measurementsCache[s];
                        if (!i) return;
                        let n = i.key,
                            l = this.elementsCache.get(n);
                        l !== e && (l && this.observer.unobserve(l), this.observer.observe(e), this.elementsCache.set(n, e)), this.shouldMeasureDuringScroll(s) && this.resizeItem(s, this.options.measureElement(e, t, this))
                    }, this.resizeItem = (e, t) => {
                        var s;
                        let i = this.measurementsCache[e];
                        if (!i) return;
                        let n = t - (this.itemSizeCache.get(i.key) ? ? i.size);
                        0 !== n && ((null == (s = this.scrollState) ? void 0 : s.behavior) !== "smooth" && (void 0 !== this.shouldAdjustScrollPositionOnItemSizeChange ? this.shouldAdjustScrollPositionOnItemSizeChange(i, n, this) : i.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
                            adjustments: this.scrollAdjustments += n,
                            behavior: void 0
                        }), this.pendingMeasuredCacheIndexes.push(i.index), this.itemSizeCache = new Map(this.itemSizeCache.set(i.key, t)), this.notify(!1))
                    }, this.measureElement = e => {
                        e ? this._measureElement(e, void 0) : this.elementsCache.forEach((e, t) => {
                            e.isConnected || (this.observer.unobserve(e), this.elementsCache.delete(t))
                        })
                    }, this.getVirtualItems = i(() => [this.getVirtualIndexes(), this.getMeasurements()], (e, t) => {
                        let s = [];
                        for (let i = 0, n = e.length; i < n; i++) {
                            let n = t[e[i]];
                            s.push(n)
                        }
                        return s
                    }, {
                        key: !1,
                        debug: () => this.options.debug
                    }), this.getVirtualItemForOffset = e => {
                        let t = this.getMeasurements();
                        if (0 !== t.length) return n(t[m(0, t.length - 1, e => n(t[e]).start, e)])
                    }, this.getMaxScrollOffset = () => {
                        if (!this.scrollElement) return 0;
                        if ("scrollHeight" in this.scrollElement) return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight; {
                            let e = this.scrollElement.document.documentElement;
                            return this.options.horizontal ? e.scrollWidth - this.scrollElement.innerWidth : e.scrollHeight - this.scrollElement.innerHeight
                        }
                    }, this.getOffsetForAlignment = (e, t, s = 0) => {
                        if (!this.scrollElement) return 0;
                        let i = this.getSize(),
                            n = this.getScrollOffset();
                        return "auto" === t && (t = e >= n + i ? "end" : "start"), "center" === t ? e += (s - i) / 2 : "end" === t && (e -= i), Math.max(Math.min(this.getMaxScrollOffset(), e), 0)
                    }, this.getOffsetForIndex = (e, t = "auto") => {
                        e = Math.max(0, Math.min(e, this.options.count - 1));
                        let s = this.getSize(),
                            i = this.getScrollOffset(),
                            n = this.measurementsCache[e];
                        if (!n) return;
                        if ("auto" === t)
                            if (n.end >= i + s - this.options.scrollPaddingEnd) t = "end";
                            else {
                                if (!(n.start <= i + this.options.scrollPaddingStart)) return [i, t];
                                t = "start"
                            }
                        if ("end" === t && e === this.options.count - 1) return [this.getMaxScrollOffset(), t];
                        let l = "end" === t ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
                        return [this.getOffsetForAlignment(l, t, n.size), t]
                    }, this.scrollToOffset = (e, {
                        align: t = "start",
                        behavior: s = "auto"
                    } = {}) => {
                        let i = this.getOffsetForAlignment(e, t),
                            n = this.now();
                        this.scrollState = {
                            index: null,
                            align: t,
                            behavior: s,
                            startedAt: n,
                            lastTargetOffset: i,
                            stableFrames: 0
                        }, this._scrollToOffset(i, {
                            adjustments: void 0,
                            behavior: s
                        }), this.scheduleScrollReconcile()
                    }, this.scrollToIndex = (e, {
                        align: t = "auto",
                        behavior: s = "auto"
                    } = {}) => {
                        e = Math.max(0, Math.min(e, this.options.count - 1));
                        let i = this.getOffsetForIndex(e, t);
                        if (!i) return;
                        let [n, l] = i, o = this.now();
                        this.scrollState = {
                            index: e,
                            align: l,
                            behavior: s,
                            startedAt: o,
                            lastTargetOffset: n,
                            stableFrames: 0
                        }, this._scrollToOffset(n, {
                            adjustments: void 0,
                            behavior: s
                        }), this.scheduleScrollReconcile()
                    }, this.scrollBy = (e, {
                        behavior: t = "auto"
                    } = {}) => {
                        let s = this.getScrollOffset() + e,
                            i = this.now();
                        this.scrollState = {
                            index: null,
                            align: "start",
                            behavior: t,
                            startedAt: i,
                            lastTargetOffset: s,
                            stableFrames: 0
                        }, this._scrollToOffset(s, {
                            adjustments: void 0,
                            behavior: t
                        }), this.scheduleScrollReconcile()
                    }, this.getTotalSize = () => {
                        var e;
                        let t, s = this.getMeasurements();
                        if (0 === s.length) t = this.options.paddingStart;
                        else if (1 === this.options.lanes) t = (null == (e = s[s.length - 1]) ? void 0 : e.end) ? ? 0;
                        else {
                            let e = Array(this.options.lanes).fill(null),
                                i = s.length - 1;
                            for (; i >= 0 && e.some(e => null === e);) {
                                let t = s[i];
                                null === e[t.lane] && (e[t.lane] = t.end), i--
                            }
                            t = Math.max(...e.filter(e => null !== e))
                        }
                        return Math.max(t - this.options.scrollMargin + this.options.paddingEnd, 0)
                    }, this._scrollToOffset = (e, {
                        adjustments: t,
                        behavior: s
                    }) => {
                        this.options.scrollToFn(e, {
                            behavior: s,
                            adjustments: t
                        }, this)
                    }, this.measure = () => {
                        this.itemSizeCache = new Map, this.laneAssignments = new Map, this.notify(!1)
                    }, this.setOptions(e)
                }
                scheduleScrollReconcile() {
                    if (!this.targetWindow) {
                        this.scrollState = null;
                        return
                    }
                    null == this.rafId && (this.rafId = this.targetWindow.requestAnimationFrame(() => {
                        this.rafId = null, this.reconcileScroll()
                    }))
                }
                reconcileScroll() {
                    if (!this.scrollState || !this.scrollElement) return;
                    if (this.now() - this.scrollState.startedAt > 5e3) {
                        this.scrollState = null;
                        return
                    }
                    let e = null != this.scrollState.index ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : void 0,
                        t = e ? e[0] : this.scrollState.lastTargetOffset,
                        s = t !== this.scrollState.lastTargetOffset;
                    if (!s && 1.01 > Math.abs(t - this.getScrollOffset())) {
                        if (this.scrollState.stableFrames++, this.scrollState.stableFrames >= 1) {
                            this.scrollState = null;
                            return
                        }
                    } else this.scrollState.stableFrames = 0, s && (this.scrollState.lastTargetOffset = t, this.scrollState.behavior = "auto", this._scrollToOffset(t, {
                        adjustments: void 0,
                        behavior: "auto"
                    }));
                    this.scheduleScrollReconcile()
                }
            }
            let m = (e, t, s, i) => {
                for (; e <= t;) {
                    let n = (e + t) / 2 | 0,
                        l = s(n);
                    if (l < i) e = n + 1;
                    else {
                        if (!(l > i)) return n;
                        t = n - 1
                    }
                }
                return e > 0 ? e - 1 : 0
            }
        }
    }
]);