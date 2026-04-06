"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [79974], {
        124714: (t, e, i) => {
            i.d(e, {
                $z: () => p,
                TM: () => d,
                Uo: () => c,
                VI: () => f
            });
            var s = () => i(989652),
                n = () => i(877312),
                a = () => i(147365),
                r = () => i(924785),
                h = () => i(641614),
                o = () => i(145320),
                l = () => i(418344);

            function c(t, e) {
                let s = (0, i(474737).K)(t, e),
                    {
                        transitionEnd: n = {},
                        transition: h = {},
                        ...o
                    } = s ? t.makeTargetAnimatable(s, !1) : {};
                for (let e in o = { ...o,
                        ...n
                    }) {
                    let i = (0, a().K)(o[e]);
                    t.hasValue(e) ? t.getValue(e).set(i) : t.addValue(e, (0, r().OQ)(i))
                }
            }

            function u(t, e) {
                [...e].reverse().forEach(i => {
                    let s = t.getVariant(i);
                    s && c(t, s), t.variantChildren && t.variantChildren.forEach(t => {
                        u(t, e)
                    })
                })
            }

            function f(t, e) {
                return Array.isArray(e) ? u(t, e) : "string" == typeof e ? u(t, [e]) : void c(t, e)
            }

            function d(t, e, i) {
                var a, c;
                let u = Object.keys(e).filter(e => !t.hasValue(e)),
                    f = u.length;
                if (f)
                    for (let d = 0; d < f; d++) {
                        let f = u[d],
                            p = e[f],
                            v = null;
                        Array.isArray(p) && (v = p[0]), null === v && (v = null != (c = null != (a = i[f]) ? a : t.readValue(f)) ? c : e[f]), null != v && ("string" == typeof v && ((0, s().i)(v) || (0, n().$)(v)) ? v = parseFloat(v) : !(0, l().t)(v) && h().f.test(p) && (v = (0, o().J)(f, p)), t.addValue(f, (0, r().OQ)(v, {
                            owner: t
                        })), void 0 === i[f] && (i[f] = v), null !== v && t.setBaseTarget(f, v))
                    }
            }

            function p(t, e, i) {
                let s = {};
                for (let n in t) {
                    let t = function(t, e) {
                        if (e) return (e[t] || e.default || e).from
                    }(n, e);
                    if (void 0 !== t) s[n] = t;
                    else {
                        let t = i.getValue(n);
                        t && (s[n] = t.get())
                    }
                }
                return s
            }
        },
        132358: (t, e, i) => {
            function s(t, e) {
                -1 === t.indexOf(e) && t.push(e)
            }

            function n(t, e) {
                let i = t.indexOf(e);
                i > -1 && t.splice(i, 1)
            }

            function a([...t], e, i) {
                let s = e < 0 ? t.length + e : e;
                if (s >= 0 && s < t.length) {
                    let s = i < 0 ? t.length + i : i,
                        [n] = t.splice(e, 1);
                    t.splice(s, 0, n)
                }
                return t
            }
            i.d(e, {
                Ai: () => n,
                Kq: () => s,
                Pe: () => a
            })
        },
        582392: (t, e, i) => {
            i.d(e, {
                c: () => s,
                n: () => n
            });
            let s = "framerAppearId",
                n = "data-" + (0, i(348062).I)(s)
        },
        763290: (t, e, i) => {
            i.d(e, {
                I: () => n,
                q: () => s
            });
            let s = ["prepare", "read", "update", "preRender", "render", "postRender"];

            function n(t, e) {
                let n = !1,
                    a = !0,
                    r = {
                        delta: 0,
                        timestamp: 0,
                        isProcessing: !1
                    },
                    h = s.reduce((t, e) => (t[e] = (0, i(193868).n)(() => n = !0), t), {}),
                    o = t => h[t].process(r),
                    l = () => {
                        let i = performance.now();
                        n = !1, r.delta = a ? 1e3 / 60 : Math.max(Math.min(i - r.timestamp, 40), 1), r.timestamp = i, r.isProcessing = !0, s.forEach(o), r.isProcessing = !1, n && e && (a = !1, t(l))
                    };
                return {
                    schedule: s.reduce((e, i) => {
                        let s = h[i];
                        return e[i] = (e, i = !1, h = !1) => (!n && (n = !0, a = !0, r.isProcessing || t(l)), s.schedule(e, i, h)), e
                    }, {}),
                    cancel: t => s.forEach(e => h[e].cancel(t)),
                    state: r,
                    steps: h
                }
            }
        },
        882857: (t, e, i) => {
            i.d(e, {
                Y: () => s,
                t: () => n
            });
            let s = 2e4;

            function n(t) {
                let e = 0,
                    i = t.next(e);
                for (; !i.done && e < s;) e += 50, i = t.next(e);
                return e >= s ? 1 / 0 : e
            }
        },
        924785: (t, e, i) => {
            i.d(e, {
                KG: () => n,
                OQ: () => a,
                bt: () => s
            });
            let s = {
                current: void 0
            };
            class n {
                constructor(t, e = {}) {
                    this.version = "10.17.6", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (t, e = !0) => {
                        this.prev = this.current, this.current = t;
                        let {
                            delta: s,
                            timestamp: n
                        } = i(610104).uv;
                        this.lastUpdated !== n && (this.timeDelta = s, this.lastUpdated = n, i(610104).Gt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), e && this.events.renderRequest && this.events.renderRequest.notify(this.current)
                    }, this.scheduleVelocityCheck = () => i(610104).Gt.postRender(this.velocityCheck), this.velocityCheck = ({
                        timestamp: t
                    }) => {
                        t !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
                    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = (t => !isNaN(parseFloat(t)))(this.current), this.owner = e.owner
                }
                onChange(t) {
                    return this.on("change", t)
                }
                on(t, e) {
                    this.events[t] || (this.events[t] = new(i(22606)).v);
                    let s = this.events[t].add(e);
                    return "change" === t ? () => {
                        s(), i(610104).Gt.read(() => {
                            this.events.change.getSize() || this.stop()
                        })
                    } : s
                }
                clearListeners() {
                    for (let t in this.events) this.events[t].clear()
                }
                attach(t, e) {
                    this.passiveEffect = t, this.stopPassiveEffect = e
                }
                set(t, e = !0) {
                    e && this.passiveEffect ? this.passiveEffect(t, this.updateAndNotify) : this.updateAndNotify(t, e)
                }
                setWithVelocity(t, e, i) {
                    this.set(e), this.prev = t, this.timeDelta = i
                }
                jump(t) {
                    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
                get() {
                    return s.current && s.current.push(this), this.current
                }
                getPrevious() {
                    return this.prev
                }
                getVelocity() {
                    return this.canTrackVelocity ? (0, i(957177).f)(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
                }
                start(t) {
                    return this.stop(), new Promise(e => {
                        this.hasAnimated = !0, this.animation = t(e), this.events.animationStart && this.events.animationStart.notify()
                    }).then(() => {
                        this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation()
                    })
                }
                stop() {
                    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation()
                }
                isAnimating() {
                    return !!this.animation
                }
                clearAnimation() {
                    delete this.animation
                }
                destroy() {
                    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect()
                }
            }

            function a(t, e) {
                return new n(t, e)
            }
        },
        997346: (t, e, i) => {
            i.d(e, {
                D: () => a,
                J: () => r
            });
            var s = () => i(620936);
            let n = t => !(0, s().S)(t);

            function a(t) {
                t && (n = e => e.startsWith("on") ? !(0, s().S)(e) : t(e))
            }
            try {
                a(require("@emotion/is-prop-valid").default)
            } catch (t) {}

            function r(t, e, i) {
                let a = {};
                for (let r in t)("values" !== r || "object" != typeof t.values) && (n(r) || !0 === i && (0, s().S)(r) || !e && !(0, s().S)(r) || t.draggable && r.startsWith("onDrag")) && (a[r] = t[r]);
                return a
            }
        }
    }
]);