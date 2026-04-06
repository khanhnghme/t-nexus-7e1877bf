"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [25867], {
        10123: (e, t, n) => {
            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function o(e) {
                (0, n(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === r(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            n.d(t, {
                A: () => o
            })
        },
        51194: (e, t, n) => {
            n.d(t, {
                a: () => o
            });
            var r = n(296540);

            function o() {
                let e = (0, r.useRef)(!1);
                return (0, n(525128).E)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), e
            }
        },
        153321: (e, t, n) => {
            n.d(t, {
                P: () => o,
                w: () => s
            });
            let r = { ...n(337807).W,
                    ...n(720128).n,
                    ...n(945632).$,
                    ...n(961820).Z
                },
                o = (0, n(6046).H)((e, t) => (0, n(501723).P)(e, t, r, n(104355).J));

            function s(e) {
                return (0, n(698809).G)((0, n(501723).P)(e, {
                    forwardMotionProps: !1
                }, r, n(104355).J))
            }
        },
        198048: (e, t, n) => {
            n.d(t, {
                C: () => o
            });
            var r = n(296540);

            function o() {
                let e = (0, n(51194).a)(),
                    [t, o] = (0, r.useState)(0),
                    s = (0, r.useCallback)(() => {
                        e.current && o(t + 1)
                    }, [t]);
                return [(0, r.useCallback)(() => n(610104).Gt.postRender(s), [s]), t]
            }
        },
        203066: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var r = n(296540);
            class o extends r.Component {
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

            function s({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    u = (0, r.useRef)(null),
                    i = (0, r.useRef)({
                        width: 0,
                        height: 0,
                        top: 0,
                        left: 0
                    });
                return (0, r.useInsertionEffect)(() => {
                    let {
                        width: e,
                        height: r,
                        top: o,
                        left: s
                    } = i.current;
                    if (t || !u.current || !e || !r) return;
                    u.current.dataset.motionPopId = n;
                    let l = document.createElement("style");
                    return document.head.appendChild(l), l.sheet && l.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${s}px !important;
          }
        `), () => {
                        document.head.removeChild(l)
                    }
                }, [t]), r.createElement(o, {
                    isPresent: t,
                    childRef: u,
                    sizeRef: i
                }, r.cloneElement(e, {
                    ref: u
                }))
            }
            let u = ({
                children: e,
                initial: t,
                isPresent: o,
                onExitComplete: u,
                custom: l,
                presenceAffectsLayout: a,
                mode: c
            }) => {
                let f = (0, n(328601).M)(i),
                    p = (0, r.useId)(),
                    d = (0, r.useMemo)(() => ({
                        id: p,
                        initial: t,
                        isPresent: o,
                        custom: l,
                        onExitComplete: e => {
                            for (let t of (f.set(e, !0), f.values()))
                                if (!t) return;
                            u && u()
                        },
                        register: e => (f.set(e, !1), () => f.delete(e))
                    }), a ? void 0 : [o]);
                return (0, r.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [o]), r.useEffect(() => {
                    o || f.size || !u || u()
                }, [o]), "popLayout" === c && (e = r.createElement(s, {
                    isPresent: o
                }, e)), r.createElement(n(786719).t.Provider, {
                    value: d
                }, e)
            };

            function i() {
                return new Map
            }
            let l = e => e.key || "",
                a = ({
                    children: e,
                    custom: t,
                    initial: o = !0,
                    onExitComplete: s,
                    exitBeforeEnter: i,
                    presenceAffectsLayout: a = !0,
                    mode: c = "sync"
                }) => {
                    let f;
                    (0, n(285238).V)(!i, "Replace exitBeforeEnter with mode='wait'");
                    let p = (0, r.useContext)(n(29473).L).forceRender || (0, n(198048).C)()[0],
                        d = (0, n(51194).a)(),
                        m = (f = [], r.Children.forEach(e, e => {
                            (0, r.isValidElement)(e) && f.push(e)
                        }), f),
                        h = m,
                        y = (0, r.useRef)(new Map).current,
                        g = (0, r.useRef)(h),
                        E = (0, r.useRef)(new Map).current,
                        b = (0, r.useRef)(!0);
                    if ((0, n(525128).E)(() => {
                            b.current = !1, m.forEach(e => {
                                let t = l(e);
                                E.set(t, e)
                            }), g.current = h
                        }), (0, n(757491).l)(() => {
                            b.current = !0, E.clear(), y.clear()
                        }), b.current) return r.createElement(r.Fragment, null, h.map(e => r.createElement(u, {
                        key: l(e),
                        isPresent: !0,
                        initial: !!o && void 0,
                        presenceAffectsLayout: a,
                        mode: c
                    }, e)));
                    h = [...h];
                    let w = g.current.map(l),
                        x = m.map(l),
                        v = w.length;
                    for (let e = 0; e < v; e++) {
                        let t = w[e]; - 1 !== x.indexOf(t) || y.has(t) || y.set(t, void 0)
                    }
                    return "wait" === c && y.size && (h = []), y.forEach((e, n) => {
                        if (-1 !== x.indexOf(n)) return;
                        let o = E.get(n);
                        if (!o) return;
                        let i = w.indexOf(n),
                            f = e;
                        f || (f = r.createElement(u, {
                            key: l(o),
                            isPresent: !1,
                            onExitComplete: () => {
                                y.delete(n);
                                let e = Array.from(E.keys()).filter(e => !x.includes(e));
                                if (e.forEach(e => E.delete(e)), g.current = m.filter(t => {
                                        let r = l(t);
                                        return r === n || e.includes(r)
                                    }), !y.size) {
                                    if (!1 === d.current) return;
                                    p(), s && s()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: a,
                            mode: c
                        }, o), y.set(n, f)), h.splice(i, 0, f)
                    }), h = h.map(e => {
                        let t = e.key;
                        return y.has(t) ? e : r.createElement(u, {
                            key: l(e),
                            isPresent: !0,
                            presenceAffectsLayout: a,
                            mode: c
                        }, e)
                    }), r.createElement(r.Fragment, null, y.size ? h : h.map(e => (0, r.cloneElement)(e)))
                }
        },
        215746: (e, t, n) => {
            n.d(t, {
                I: () => r,
                w: () => o
            });
            let r = (e, t) => Math.abs(e - t);

            function o(e, t) {
                return Math.sqrt(r(e.x, t.x) ** 2 + r(e.y, t.y) ** 2)
            }
        },
        289120: (e, t, n) => {
            n.d(t, {
                tF: () => s,
                xQ: () => o
            });
            var r = n(296540);

            function o() {
                let e = (0, r.useContext)(n(786719).t);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: o,
                    register: s
                } = e, u = (0, r.useId)();
                return (0, r.useEffect)(() => s(u), []), !t && o ? [!1, () => o && o(u)] : [!0]
            }

            function s() {
                var e;
                return null === (e = (0, r.useContext)(n(786719).t)) || e.isPresent
            }
        },
        506768: (e, t, n) => {
            n.d(t, {
                P: () => o,
                i: () => r
            });
            let r = {
                    current: void 0
                },
                o = (0, n(411784).u0)({
                    measureScroll: e => ({
                        x: e.scrollLeft,
                        y: e.scrollTop
                    }),
                    defaultParent: () => {
                        if (!r.current) {
                            let e = new(n(508656)).B({});
                            e.mount(window), e.setOptions({
                                layoutScroll: !0
                            }), r.current = e
                        }
                        return r.current
                    },
                    resetTransform: (e, t) => {
                        e.style.transform = void 0 !== t ? t : "none"
                    },
                    checkIsScrollRoot: e => "fixed" === window.getComputedStyle(e).position
                })
        },
        570551: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        606982: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e, t) {
                (0, n(570551).A)(2, arguments);
                var r = (0, n(10123).A)(e),
                    o = (0, n(10123).A)(t),
                    s = r.getTime() - o.getTime();
                return s < 0 ? -1 : s > 0 ? 1 : s
            }
        },
        757491: (e, t, n) => {
            n.d(t, {
                l: () => o
            });
            var r = n(296540);

            function o(e) {
                return (0, r.useEffect)(() => () => e(), [])
            }
        },
        827380: (e, t, n) => {
            n.d(t, {
                A: () => r
            });

            function r(e) {
                return {
                    all: e = e || new Map,
                    on: function(t, n) {
                        var r = e.get(t);
                        r ? r.push(n) : e.set(t, [n])
                    },
                    off: function(t, n) {
                        var r = e.get(t);
                        r && (n ? r.splice(r.indexOf(n) >>> 0, 1) : e.set(t, []))
                    },
                    emit: function(t, n) {
                        var r = e.get(t);
                        r && r.slice().map(function(e) {
                            e(n)
                        }), (r = e.get("*")) && r.slice().map(function(e) {
                            e(t, n)
                        })
                    }
                }
            }
        }
    }
]);