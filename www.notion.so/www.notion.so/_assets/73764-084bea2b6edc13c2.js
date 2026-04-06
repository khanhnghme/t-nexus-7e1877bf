"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12219, 29002, 51383, 73764], {
        10123: (e, t, r) => {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e) {
                (0, r(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === n(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            r.d(t, {
                A: () => o
            })
        },
        51194: (e, t, r) => {
            r.d(t, {
                a: () => o
            });
            var n = r(296540);

            function o() {
                let e = (0, n.useRef)(!1);
                return (0, r(525128).E)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        153321: (e, t, r) => {
            r.d(t, {
                P: () => o,
                w: () => u
            });
            let n = { ...r(337807).W,
                    ...r(720128).n,
                    ...r(945632).$,
                    ...r(961820).Z
                },
                o = (0, r(6046).H)((e, t) => (0, r(501723).P)(e, t, n, r(104355).J));

            function u(e) {
                return (0, r(698809).G)((0, r(501723).P)(e, {
                    forwardMotionProps: !1
                }, n, r(104355).J))
            }
        },
        194188: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }
        },
        198048: (e, t, r) => {
            r.d(t, {
                C: () => o
            });
            var n = r(296540);

            function o() {
                let e = (0, r(51194).a)(),
                    [t, o] = (0, n.useState)(0),
                    u = (0, n.useCallback)(() => {
                        e.current && o(t + 1)
                    }, [t]);
                return [(0, n.useCallback)(() => r(610104).Gt.postRender(u), [u]), t]
            }
        },
        200979: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e, t) {
                (0, r(570551).A)(2, arguments);
                var n = (0, r(194188).A)(t);
                return (0, r(392998).A)(e, -n)
            }
        },
        203066: (e, t, r) => {
            r.d(t, {
                N: () => a
            });
            var n = r(296540);
            class o extends n.Component {
                getSnapshotBeforeUpdate(e) {
                    let t = this.props.childRef.current;
                    if (t && e.isPresent && !this.props.isPresent) {
                        let e = this.props.sizeRef.current;
                        e.height = t.offsetHeight || 0, e.width = t.offsetWidth || 0, e.top = t.offsetTop, e.left = t.offsetLeft
                    }
                    return null
                }
                componentDidUpdate() {}
                render() {
                    return this.props.children
                }
            }

            function u({
                children: e,
                isPresent: t
            }) {
                let r = (0, n.useId)(),
                    s = (0, n.useRef)(null),
                    l = (0, n.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, n.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: n,
                        top: o,
                        left: u
                    } = l.current;
                    if (t || !s.current || !e || !n) return;
                    s.current.dataset.motionPopId = r;
                    let i = document.createElement("style");
                    return document.head.appendChild(i), i.sheet && i.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${n}px !important;
            top: ${o}px !important;
            left: ${u}px !important;
          }
        `), () => {
                        document.head.removeChild(i)
                    }
                }, [t]), n.createElement(o, {
                    isPresent: t,
                    childRef: s,
                    sizeRef: l
                }, n.cloneElement(e, {
                    ref: s
                }))
            }
            let s = ({
                children: e,
                initial: t,
                isPresent: o,
                onExitComplete: s,
                custom: i,
                presenceAffectsLayout: a,
                mode: c
            }) => {
                let f = (0, r(328601).M)(l),
                    d = (0, n.useId)(),
                    p = (0, n.useMemo)(() => ({
                        id: d,
                        initial: t,
                        isPresent: o,
                        custom: i,
                        onExitComplete: e => {
                            for (let t of (f.set(e, !0), f.values()))
                                if (!t) return;
                            s && s()
                        },
                        register: e => (f.set(e, !1), () => f.delete(e))
                    }), a ? void 0 : [o]);
                return (0, n.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [o]), n.useEffect(() => {
                    o || f.size || !s || s()
                }, [o]), "popLayout" === c && (e = n.createElement(u, {
                    isPresent: o
                }, e)), n.createElement(r(786719).t.Provider, {
                    value: p
                }, e)
            };

            function l() {
                return new Map
            }
            let i = e => e.key || "",
                a = ({
                    children: e,
                    custom: t,
                    initial: o = !0,
                    onExitComplete: u,
                    exitBeforeEnter: l,
                    presenceAffectsLayout: a = !0,
                    mode: c = "sync"
                }) => {
                    let f;
                    (0, r(285238).V)(!l, "Replace exitBeforeEnter with mode='wait'");
                    let d = (0, n.useContext)(r(29473).L).forceRender || (0, r(198048).C)()[0],
                        p = (0, r(51194).a)(),
                        m = (f = [], n.Children.forEach(e, e => {
                            (0, n.isValidElement)(e) && f.push(e)
                        }), f),
                        h = m,
                        y = (0, n.useRef)(new Map).current,
                        b = (0, n.useRef)(h),
                        g = (0, n.useRef)(new Map).current,
                        A = (0, n.useRef)(!0);
                    if ((0, r(525128).E)(() => {
                            A.current = !1, m.forEach(e => {
                                let t = i(e);
                                g.set(t, e)
                            }), b.current = h
                        }), (0, r(757491).l)(() => {
                            A.current = !0, g.clear(), y.clear()
                        }), A.current) return n.createElement(n.Fragment, null, h.map(e => n.createElement(s, {
                        key: i(e),
                        isPresent: !0,
                        initial: !!o && void 0,
                        presenceAffectsLayout: a,
                        mode: c
                    }, e)));
                    h = [...h];
                    let w = b.current.map(i),
                        E = m.map(i),
                        v = w.length;
                    for (let e = 0; e < v; e++) {
                        let t = w[e]; - 1 !== E.indexOf(t) || y.has(t) || y.set(t, void 0)
                    }
                    return "wait" === c && y.size && (h = []), y.forEach((e, r) => {
                        if (-1 !== E.indexOf(r)) return;
                        let o = g.get(r);
                        if (!o) return;
                        let l = w.indexOf(r),
                            f = e;
                        f || (f = n.createElement(s, {
                            key: i(o),
                            isPresent: !1,
                            onExitComplete: () => {
                                y.delete(r);
                                let e = Array.from(g.keys()).filter(e => !E.includes(e));
                                if (e.forEach(e => g.delete(e)), b.current = m.filter(t => {
                                        let n = i(t);
                                        return n === r || e.includes(n)
                                    }), !y.size) {
                                    if (!1 === p.current) return;
                                    d(), u && u()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: a,
                            mode: c
                        }, o), y.set(r, f)), h.splice(l, 0, f)
                    }), h = h.map(e => {
                        let t = e.key;
                        return y.has(t) ? e : n.createElement(s, {
                            key: i(e),
                            isPresent: !0,
                            presenceAffectsLayout: a,
                            mode: c
                        }, e)
                    }), n.createElement(n.Fragment, null, y.size ? h : h.map(e => (0, n.cloneElement)(e)))
                }
        },
        215746: (e, t, r) => {
            r.d(t, {
                I: () => n,
                w: () => o
            });
            let n = (e, t) => Math.abs(e - t);

            function o(e, t) {
                return Math.sqrt(n(e.x, t.x) ** 2 + n(e.y, t.y) ** 2)
            }
        },
        289120: (e, t, r) => {
            r.d(t, {
                tF: () => u,
                xQ: () => o
            });
            var n = r(296540);

            function o() {
                let e = (0, n.useContext)(r(786719).t);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: o,
                    register: u
                } = e, s = (0, n.useId)();
                return (0, n.useEffect)(() => u(s), []), !t && o ? [!1, () => o && o(s)] : [!0]
            }

            function u() {
                var e;
                return null === (e = (0, n.useContext)(r(786719).t)) || e.isPresent
            }
        },
        392998: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e, t) {
                (0, r(570551).A)(2, arguments);
                var n = (0, r(10123).A)(e),
                    o = (0, r(194188).A)(t);
                return isNaN(o) ? new Date(NaN) : (o && n.setDate(n.getDate() + o), n)
            }
        },
        506768: (e, t, r) => {
            r.d(t, {
                P: () => o,
                i: () => n
            });
            let n = {
                    current: void 0
                },
                o = (0, r(411784).u0)({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!n.current) {
                            let e = new(r(508656)).B({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), n.current = e
                        }
                        return n.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                })
        },
        570551: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        606982: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e, t) {
                (0, r(570551).A)(2, arguments);
                var n = (0, r(10123).A)(e),
                    o = (0, r(10123).A)(t),
                    u = n.getTime() - o.getTime();
                return u < 0 ? -1 : u > 0 ? 1 : u
            }
        },
        757491: (e, t, r) => {
            r.d(t, {
                l: () => o
            });
            var n = r(296540);

            function o(e) {
                return (0, n.useEffect)(() => () => e(), [])
            }
        },
        851775: (e, t, r) => {
            r.d(t, {
                A: () => n
            });

            function n(e, t) {
                (0, r(570551).A)(2, arguments);
                var n = (0, r(10123).A)(e),
                    o = (0, r(194188).A)(t),
                    u = n.getFullYear(),
                    s = n.getDate(),
                    l = new Date(0);
                l.setFullYear(u, o, 15), l.setHours(0, 0, 0, 0);
                var i = function(e) {
                    (0, r(570551).A)(1, arguments);
                    var t = (0, r(10123).A)(e),
                        n = t.getFullYear(),
                        o = t.getMonth(),
                        u = new Date(0);
                    return u.setFullYear(n, o + 1, 0), u.setHours(0, 0, 0, 0), u.getDate()
                }(l);
                return n.setMonth(o, Math.min(s, i)), n
            }
        },
        894074: (e, t, r) => {
            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e, t) {
                if ((0, r(570551).A)(2, arguments), "object" !== n(t) || null === t) throw RangeError("values parameter must be an object");
                var o = (0, r(10123).A)(e);
                return isNaN(o.getTime()) ? new Date(NaN) : (null != t.year && o.setFullYear(t.year), null != t.month && (o = (0, r(851775).A)(o, t.month)), null != t.date && o.setDate((0, r(194188).A)(t.date)), null != t.hours && o.setHours((0, r(194188).A)(t.hours)), null != t.minutes && o.setMinutes((0, r(194188).A)(t.minutes)), null != t.seconds && o.setSeconds((0, r(194188).A)(t.seconds)), null != t.milliseconds && o.setMilliseconds((0, r(194188).A)(t.milliseconds)), o)
            }
            r.d(t, {
                A: () => o
            })
        },
        958638: (e, t, r) => {
            r.d(t, {
                I: () => o
            });
            var n = r(296540);

            function o() {
                r(108452).r.current || (0, r(702743).U)();
                let [e] = (0, n.useState)(r(108452).O.current);
                return e
            }
        }
    }
]);