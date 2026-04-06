"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [37043], {
        5793: (e, t, n) => {
            n.d(t, {
                F: () => o
            });
            var r = n(296540);

            function o({
                children: e,
                features: t,
                strict: l = !1
            }) {
                let [, a] = (0, r.useState)(!i(t)), s = (0, r.useRef)(void 0);
                if (!i(t)) {
                    let {
                        renderer: e,
                        ...r
                    } = t;
                    s.current = e, (0, n(852194).Y)(r)
                }
                return (0, r.useEffect)(() => {
                    i(t) && t().then(({
                        renderer: e,
                        ...t
                    }) => {
                        (0, n(852194).Y)(t), s.current = e, a(!0)
                    })
                }, []), r.createElement(n(866048).Y.Provider, {
                    value: {
                        renderer: s.current,
                        strict: l
                    }
                }, e)
            }

            function i(e) {
                return "function" == typeof e
            }
        },
        7411: (e, t, n) => {
            n.d(t, {
                l: () => r
            });
            let r = {
                renderer: n(104355).J,
                ...n(337807).W,
                ...n(720128).n
            }
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
                w: () => i
            });
            let r = { ...n(337807).W,
                    ...n(720128).n,
                    ...n(945632).$,
                    ...n(961820).Z
                },
                o = (0, n(6046).H)((e, t) => (0, n(501723).P)(e, t, r, n(104355).J));

            function i(e) {
                return (0, n(698809).G)((0, n(501723).P)(e, {
                    forwardMotionProps: !1
                }, r, n(104355).J))
            }
        },
        188137: (e, t, n) => {
            function r() {
                let e = (0, n(328601).M)(n(523514).L);
                return (0, n(525128).E)(e.mount, []), e
            }
            n.d(t, {
                E: () => r,
                s: () => o
            });
            let o = r
        },
        198048: (e, t, n) => {
            n.d(t, {
                C: () => o
            });
            var r = n(296540);

            function o() {
                let e = (0, n(51194).a)(),
                    [t, o] = (0, r.useState)(0),
                    i = (0, r.useCallback)(() => {
                        e.current && o(t + 1)
                    }, [t]);
                return [(0, r.useCallback)(() => n(610104).Gt.postRender(i), [i]), t]
            }
        },
        203066: (e, t, n) => {
            n.d(t, {
                N: () => u
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

            function i({
                children: e,
                isPresent: t
            }) {
                let n = (0, r.useId)(),
                    l = (0, r.useRef)(null),
                    a = (0, r.useRef)({
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
                        left: i
                    } = a.current;
                    if (t || !l.current || !e || !r) return;
                    l.current.dataset.motionPopId = n;
                    let s = document.createElement("style");
                    return document.head.appendChild(s), s.sheet && s.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${r}px !important;
            top: ${o}px !important;
            left: ${i}px !important;
          }
        `), () => {
                        document.head.removeChild(s)
                    }
                }, [t]), r.createElement(o, {
                    isPresent: t,
                    childRef: l,
                    sizeRef: a
                }, r.cloneElement(e, {
                    ref: l
                }))
            }
            let l = ({
                children: e,
                initial: t,
                isPresent: o,
                onExitComplete: l,
                custom: s,
                presenceAffectsLayout: u,
                mode: c
            }) => {
                let f = (0, n(328601).M)(a),
                    d = (0, r.useId)(),
                    m = (0, r.useMemo)(() => ({
                        id: d,
                        initial: t,
                        isPresent: o,
                        custom: s,
                        onExitComplete: e => {
                            for (let t of (f.set(e, !0), f.values()))
                                if (!t) return;
                            l && l()
                        },
                        register: e => (f.set(e, !1), () => f.delete(e))
                    }), u ? void 0 : [o]);
                return (0, r.useMemo)(() => {
                    f.forEach((e, t) => f.set(t, !1))
                }, [o]), r.useEffect(() => {
                    o || f.size || !l || l()
                }, [o]), "popLayout" === c && (e = r.createElement(i, {
                    isPresent: o
                }, e)), r.createElement(n(786719).t.Provider, {
                    value: m
                }, e)
            };

            function a() {
                return new Map
            }
            let s = e => e.key || "",
                u = ({
                    children: e,
                    custom: t,
                    initial: o = !0,
                    onExitComplete: i,
                    exitBeforeEnter: a,
                    presenceAffectsLayout: u = !0,
                    mode: c = "sync"
                }) => {
                    let f;
                    (0, n(285238).V)(!a, "Replace exitBeforeEnter with mode='wait'");
                    let d = (0, r.useContext)(n(29473).L).forceRender || (0, n(198048).C)()[0],
                        m = (0, n(51194).a)(),
                        p = (f = [], r.Children.forEach(e, e => {
                            (0, r.isValidElement)(e) && f.push(e)
                        }), f),
                        h = p,
                        g = (0, r.useRef)(new Map).current,
                        y = (0, r.useRef)(h),
                        v = (0, r.useRef)(new Map).current,
                        w = (0, r.useRef)(!0);
                    if ((0, n(525128).E)(() => {
                            w.current = !1, p.forEach(e => {
                                let t = s(e);
                                v.set(t, e)
                            }), y.current = h
                        }), (0, n(757491).l)(() => {
                            w.current = !0, v.clear(), g.clear()
                        }), w.current) return r.createElement(r.Fragment, null, h.map(e => r.createElement(l, {
                        key: s(e),
                        isPresent: !0,
                        initial: !!o && void 0,
                        presenceAffectsLayout: u,
                        mode: c
                    }, e)));
                    h = [...h];
                    let E = y.current.map(s),
                        x = p.map(s),
                        C = E.length;
                    for (let e = 0; e < C; e++) {
                        let t = E[e]; - 1 !== x.indexOf(t) || g.has(t) || g.set(t, void 0)
                    }
                    return "wait" === c && g.size && (h = []), g.forEach((e, n) => {
                        if (-1 !== x.indexOf(n)) return;
                        let o = v.get(n);
                        if (!o) return;
                        let a = E.indexOf(n),
                            f = e;
                        f || (f = r.createElement(l, {
                            key: s(o),
                            isPresent: !1,
                            onExitComplete: () => {
                                g.delete(n);
                                let e = Array.from(v.keys()).filter(e => !x.includes(e));
                                if (e.forEach(e => v.delete(e)), y.current = p.filter(t => {
                                        let r = s(t);
                                        return r === n || e.includes(r)
                                    }), !g.size) {
                                    if (!1 === m.current) return;
                                    d(), i && i()
                                }
                            },
                            custom: t,
                            presenceAffectsLayout: u,
                            mode: c
                        }, o), g.set(n, f)), h.splice(a, 0, f)
                    }), h = h.map(e => {
                        let t = e.key;
                        return g.has(t) ? e : r.createElement(l, {
                            key: s(e),
                            isPresent: !0,
                            presenceAffectsLayout: u,
                            mode: c
                        }, e)
                    }), r.createElement(r.Fragment, null, g.size ? h : h.map(e => (0, r.cloneElement)(e)))
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
        234485: (e, t, n) => {
            n.d(t, {
                x: () => o
            });
            var r = n(296540);

            function o({
                children: e,
                isValidProp: t,
                ...i
            }) {
                t && (0, n(997346).D)(t), (i = { ...(0, r.useContext)(n(535446).Q),
                    ...i
                }).isStatic = (0, n(328601).M)(() => i.isStatic);
                let l = (0, r.useMemo)(() => i, [JSON.stringify(i.transition), i.transformPagePoint, i.reducedMotion]);
                return r.createElement(n(535446).Q.Provider, {
                    value: l
                }, e)
            }
        },
        289120: (e, t, n) => {
            n.d(t, {
                tF: () => i,
                xQ: () => o
            });
            var r = n(296540);

            function o() {
                let e = (0, r.useContext)(n(786719).t);
                if (null === e) return [!0, null];
                let {
                    isPresent: t,
                    onExitComplete: o,
                    register: i
                } = e, l = (0, r.useId)();
                return (0, r.useEffect)(() => i(l), []), !t && o ? [!1, () => o && o(l)] : [!0]
            }

            function i() {
                var e;
                return null === (e = (0, r.useContext)(n(786719).t)) || e.isPresent
            }
        },
        301716: (e, t, n) => {
            let r, o, i, l, a;
            n.r(t), n.d(t, {
                AnimatePresence: () => c().N,
                AnimateSharedLayout: () => tI,
                DeprecatedLayoutGroupContext: () => h,
                DragControls: () => eK,
                FlatTree: () => tg().Y,
                LayoutGroup: () => v,
                LayoutGroupContext: () => p().L,
                LazyMotion: () => d().F,
                MotionConfig: () => f().x,
                MotionConfigContext: () => P().Q,
                MotionContext: () => tm().A,
                MotionGlobalConfig: () => ta().W,
                MotionValue: () => A().KG,
                PresenceContext: () => tp().t,
                Reorder: () => B,
                SwitchLayoutGroupContext: () => th().N,
                VisualElement: () => e8().B,
                addPointerEvent: () => tq().h,
                addPointerInfo: () => tJ().F,
                addScaleCorrector: () => e4().$,
                animate: () => eQ,
                animateValue: () => Q().L,
                animateVisualElement: () => eY()._,
                animationControls: () => eb().L,
                animations: () => tU().W,
                anticipate: () => tW().b,
                backIn: () => tz().dg,
                backInOut: () => tz().ZZ,
                backOut: () => tz().Sz,
                buildTransform: () => tr().d,
                calcLength: () => tY().CQ,
                cancelFrame: () => T().WG,
                cancelSync: () => tG,
                checkTargetForNewValues: () => ty().TM,
                circIn: () => tB().po,
                circInOut: () => tB().tn,
                circOut: () => tB().yT,
                clamp: () => tT().q,
                color: () => to().y,
                complex: () => ti().f,
                createBox: () => tw().ge,
                createDomMotionComponent: () => s().w,
                createMotionComponent: () => e6().G,
                createScopedAnimate: () => e$,
                cubicBezier: () => tH().A,
                delay: () => tQ().c,
                disableInstantTransitions: () => tt,
                distance: () => tN().I,
                distance2D: () => tN().w,
                domAnimation: () => F().l,
                domMax: () => H,
                easeIn: () => tF().a6,
                easeInOut: () => tF().am,
                easeOut: () => tF().vT,
                filterProps: () => tX().J,
                frame: () => T().Gt,
                frameData: () => T().uv,
                inView: () => eZ,
                interpolate: () => L().G,
                invariant: () => w().V,
                isBrowser: () => tZ().B,
                isDragActive: () => tj().D3,
                isMotionComponent: () => e3,
                isMotionValue: () => W().S,
                isValidMotionProp: () => ej().S,
                m: () => u().m,
                makeUseVisualState: () => tv().T,
                mirrorEasing: () => tD().V,
                mix: () => C().j,
                motion: () => s().P,
                motionValue: () => A().OQ,
                optimizedAppearDataAttribute: () => tu().n,
                pipe: () => tk().F,
                progress: () => K().q,
                px: () => tl().px,
                resolveMotionValue: () => $().u,
                reverseEasing: () => t$().G,
                scroll: () => tV,
                scrollInfo: () => em,
                spring: () => eT().o,
                stagger: () => tR,
                startOptimizedAppearAnimation: () => td,
                steps: () => T().Ci,
                sync: () => tO,
                transform: () => V,
                unwrapMotionComponent: () => e5,
                useAnimate: () => eN,
                useAnimation: () => eU().s,
                useAnimationControls: () => eU().E,
                useAnimationFrame: () => ew,
                useCycle: () => eX,
                useDeprecatedAnimatedState: () => tM,
                useDeprecatedInvertedScale: () => tA,
                useDomEvent: () => e2,
                useDragControls: () => e1,
                useElementScroll: () => ey,
                useForceUpdate: () => g().C,
                useInView: () => e_,
                useInstantLayoutTransition: () => e9,
                useInstantTransition: () => te,
                useIsPresent: () => eq().tF,
                useIsomorphicLayoutEffect: () => R().E,
                useMotionTemplate: () => D,
                useMotionValue: () => I,
                useMotionValueEvent: () => Y,
                usePresence: () => eq().xQ,
                useReducedMotion: () => eM().I,
                useReducedMotionConfig: () => eS,
                useResetProjection: () => tn,
                useScroll: () => eg,
                useSpring: () => U,
                useTime: () => eE,
                useTransform: () => O,
                useUnmountEffect: () => eA().l,
                useVelocity: () => X,
                useViewportScroll: () => ev,
                useWillChange: () => eC,
                visualElementStore: () => eP().C,
                warning: () => w().$,
                wrap: () => eG
            });
            var s = () => n(153321),
                u = () => n(766031),
                c = () => n(203066),
                f = () => n(234485),
                d = () => n(5793),
                m = n(296540),
                p = () => n(29473);
            let h = (0, m.createContext)(null);
            var g = () => n(198048);
            let y = e => !e.isLayoutDirty && e.willUpdate(!1),
                v = ({
                    children: e,
                    id: t,
                    inherit: n = !0
                }) => {
                    let r = (0, m.useContext)(p().L),
                        o = (0, m.useContext)(h),
                        [i, l] = (0, g().C)(),
                        a = (0, m.useRef)(null),
                        s = r.id || o;
                    if (null === a.current) {
                        let e, o, i, l;
                        (!0 == (!0 === (l = n)) || "id" === l) && s && (t = t ? s + "-" + t : s), a.current = {
                            id: t,
                            group: !0 === n && r.group || (e = new Set, o = new WeakMap, {
                                add: t => {
                                    e.add(t), o.set(t, t.addEventListener("willUpdate", i))
                                },
                                remove: t => {
                                    e.delete(t);
                                    let n = o.get(t);
                                    n && (n(), o.delete(t)), i()
                                },
                                dirty: i = () => e.forEach(y)
                            })
                        }
                    }
                    let u = (0, m.useMemo)(() => ({ ...a.current,
                        forceRender: i
                    }), [l]);
                    return m.createElement(p().L.Provider, {
                        value: u
                    }, e)
                };
            var w = () => n(285238);
            let E = (0, m.createContext)(null);
            var x = () => n(132358),
                C = () => n(102839);
            let M = (0, m.forwardRef)(function({
                children: e,
                as: t = "ul",
                axis: r = "y",
                onReorder: o,
                values: i,
                ...l
            }, a) {
                let u = (0, n(328601).M)(() => (0, s().P)(t)),
                    c = [],
                    f = (0, m.useRef)(!1);
                return (0, w().V)(!!i, "Reorder.Group must be provided a values prop"), (0, m.useEffect)(() => {
                    f.current = !1
                }), m.createElement(u, { ...l,
                    ref: a,
                    ignoreStrict: !0
                }, m.createElement(E.Provider, {
                    value: {
                        axis: r,
                        registerItem: (e, t) => {
                            let n = c.findIndex(t => e === t.value); - 1 !== n ? c[n].layout = t[r] : c.push({
                                value: e,
                                layout: t[r]
                            }), c.sort(b)
                        },
                        updateOrder: (e, t, n) => {
                            if (f.current) return;
                            let r = function(e, t, n, r) {
                                if (!r) return e;
                                let o = e.findIndex(e => e.value === t);
                                if (-1 === o) return e;
                                let i = r > 0 ? 1 : -1,
                                    l = e[o + i];
                                if (!l) return e;
                                let a = e[o],
                                    s = l.layout,
                                    u = (0, C().j)(s.min, s.max, .5);
                                return 1 === i && a.layout.max + n > u || -1 === i && a.layout.min + n < u ? (0, x().Pe)(e, o, o + i) : e
                            }(c, e, t, n);
                            c !== r && (f.current = !0, o(r.map(S).filter(e => -1 !== i.indexOf(e))))
                        }
                    }
                }, e))
            });

            function S(e) {
                return e.value
            }

            function b(e, t) {
                return e.layout.min - t.layout.min
            }
            var A = () => n(924785),
                P = () => n(535446);

            function I(e) {
                let t = (0, n(328601).M)(() => (0, A().OQ)(e)),
                    {
                        isStatic: r
                    } = (0, m.useContext)(P().Q);
                if (r) {
                    let [, n] = (0, m.useState)(e);
                    (0, m.useEffect)(() => t.on("change", n), [])
                }
                return t
            }
            var L = () => n(13070);

            function V(...e) {
                var t;
                let n, r = !Array.isArray(e[0]),
                    o = r ? 0 : -1,
                    i = e[0 + o],
                    l = e[1 + o],
                    a = e[2 + o],
                    s = e[3 + o],
                    u = (0, L().G)(l, a, {
                        mixer: "object" == typeof(n = t = a[0]) && n.mix ? t.mix : void 0,
                        ...s
                    });
                return r ? u(i) : u
            }
            var R = () => n(525128),
                T = () => n(610104);

            function k(e, t) {
                let n = I(t()),
                    r = () => n.set(t());
                return r(), (0, R().E)(() => {
                    let t = () => T().Gt.update(r, !1, !0),
                        n = e.map(e => e.on("change", t));
                    return () => {
                        n.forEach(e => e()), (0, T().WG)(r)
                    }
                }), n
            }

            function O(e, t, n, r) {
                if ("function" == typeof e) {
                    let t;
                    return A().bt.current = [], e(), t = k(A().bt.current, e), A().bt.current = void 0, t
                }
                let o = "function" == typeof t ? t : V(t, n, r);
                return Array.isArray(e) ? G(e, o) : G([e], ([e]) => o(e))
            }

            function G(e, t) {
                let r = (0, n(328601).M)(() => []);
                return k(e, () => {
                    r.length = 0;
                    let n = e.length;
                    for (let t = 0; t < n; t++) r[t] = e[t].get();
                    return t(r)
                })
            }
            var W = () => n(469896);

            function z(e, t = 0) {
                return (0, W().S)(e) ? e : I(t)
            }
            let B = {
                Group: M,
                Item: (0, m.forwardRef)(function({
                    children: e,
                    style: t = {},
                    value: r,
                    as: o = "li",
                    onDrag: i,
                    layout: l = !0,
                    ...a
                }, u) {
                    let c = (0, n(328601).M)(() => (0, s().P)(o)),
                        f = (0, m.useContext)(E),
                        d = {
                            x: z(t.x),
                            y: z(t.y)
                        },
                        p = O([d.x, d.y], ([e, t]) => e || t ? 1 : "unset");
                    (0, w().V)(!!f, "Reorder.Item must be a child of Reorder.Group");
                    let {
                        axis: h,
                        registerItem: g,
                        updateOrder: y
                    } = f;
                    return m.createElement(c, {
                        drag: h,
                        ...a,
                        dragSnapToOrigin: !0,
                        style: { ...t,
                            x: d.x,
                            y: d.y,
                            zIndex: p
                        },
                        layout: l,
                        onDrag: (e, t) => {
                            let {
                                velocity: n
                            } = t;
                            n[h] && y(r, d[h].get(), n[h]), i && i(e, t)
                        },
                        onLayoutMeasure: e => g(r, e),
                        ref: u,
                        ignoreStrict: !0
                    }, e)
                })
            };
            var F = () => n(7411);
            let H = { ...F().l,
                ...n(945632).$,
                ...n(961820).Z
            };

            function D(e, ...t) {
                let n = e.length;
                return k(t.filter(W().S), function() {
                    let r = "";
                    for (let o = 0; o < n; o++) {
                        r += e[o];
                        let n = t[o];
                        n && (r += (0, W().S)(n) ? n.get() : n)
                    }
                    return r
                })
            }
            var $ = () => n(814322),
                Q = () => n(278458),
                N = () => n(374833);

            function U(e, t = {}) {
                let {
                    isStatic: n
                } = (0, m.useContext)(P().Q), r = (0, m.useRef)(null), o = I((0, W().S)(e) ? e.get() : e), i = () => {
                    r.current && r.current.stop()
                };
                return (0, m.useInsertionEffect)(() => o.attach((e, l) => {
                    if (n) return l(e);
                    if (i(), r.current = (0, Q().L)({
                            keyframes: [o.get(), e],
                            velocity: o.getVelocity(),
                            type: "spring",
                            restDelta: .001,
                            restSpeed: .01,
                            ...t,
                            onUpdate: l
                        }), !T().uv.isProcessing) {
                        let e = performance.now() - T().uv.timestamp;
                        e < 30 && (r.current.time = (0, N().X)(e))
                    }
                    return o.get()
                }, i), [JSON.stringify(t)]), (0, R().E)(() => {
                    if ((0, W().S)(e)) return e.on("change", e => o.set(parseFloat(e)))
                }, [o]), o
            }

            function Y(e, t, n) {
                (0, m.useInsertionEffect)(() => e.on(t, n), [e, t, n])
            }

            function X(e) {
                let t = I(e.getVelocity());
                return Y(e, "velocityChange", e => {
                    t.set(e)
                }), t
            }

            function j(e, t, n) {
                if ("string" == typeof e) {
                    let r = document;
                    t && ((0, w().V)(!!t.current, "Scope provided, but no element detected."), r = t.current), n ? (null != n[e] || (n[e] = r.querySelectorAll(e)), e = n[e]) : e = r.querySelectorAll(e)
                } else e instanceof Element && (e = [e]);
                return Array.from(e || [])
            }
            let q = new WeakMap;

            function J({
                target: e,
                contentRect: t,
                borderBoxSize: n
            }) {
                var r;
                null == (r = q.get(e)) || r.forEach(r => {
                    r({
                        target: e,
                        contentSize: t,
                        get size() {
                            return function(e, t) {
                                if (t) {
                                    let {
                                        inlineSize: e,
                                        blockSize: n
                                    } = t[0];
                                    return {
                                        width: e,
                                        height: n
                                    }
                                }
                                return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight
                                }
                            }(e, n)
                        }
                    })
                })
            }

            function Z(e) {
                e.forEach(J)
            }
            let _ = new Set;
            var K = () => n(927170);
            let ee = () => ({
                    current: 0,
                    offset: [],
                    progress: 0,
                    scrollLength: 0,
                    targetOffset: 0,
                    targetLength: 0,
                    containerLength: 0,
                    velocity: 0
                }),
                et = {
                    x: {
                        length: "Width",
                        position: "Left"
                    },
                    y: {
                        length: "Height",
                        position: "Top"
                    }
                };

            function en(e, t, r, o) {
                let i = r[t],
                    {
                        length: l,
                        position: a
                    } = et[t],
                    s = i.current,
                    u = r.time;
                i.current = e["scroll" + a], i.scrollLength = e["scroll" + l] - e["client" + l], i.offset.length = 0, i.offset[0] = 0, i.offset[1] = i.scrollLength, i.progress = (0, K().q)(0, i.scrollLength, i.current);
                let c = o - u;
                i.velocity = c > 50 ? 0 : (0, n(957177).f)(i.current - s, c)
            }
            let er = [
                    [0, 0],
                    [1, 1]
                ],
                eo = {
                    start: 0,
                    center: .5,
                    end: 1
                };

            function ei(e, t, n = 0) {
                let r = 0;
                if (void 0 !== eo[e] && (e = eo[e]), "string" == typeof e) {
                    let t = parseFloat(e);
                    e.endsWith("px") ? r = t : e.endsWith("%") ? e = t / 100 : e.endsWith("vw") ? r = t / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = t / 100 * document.documentElement.clientHeight : e = t
                }
                return "number" == typeof e && (r = t * e), n + r
            }
            let el = [0, 0];
            var ea = () => n(761899);
            let es = {
                    x: 0,
                    y: 0
                },
                eu = new WeakMap,
                ec = new WeakMap,
                ef = new WeakMap,
                ed = e => e === document.documentElement ? window : e;

            function em(e, {
                container: t = document.documentElement,
                ...n
            } = {}) {
                let i = ef.get(t);
                i || (i = new Set, ef.set(t, i));
                let l = function(e, t, n, r = {}) {
                    return {
                        measure: () => (function(e, t = e, n) {
                            if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
                                let r = t;
                                for (; r && r !== e;) n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent
                            }
                            n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight
                        })(e, r.target, n),
                        update: t => {
                            en(e, "x", n, t), en(e, "y", n, t), n.time = t, (r.offset || r.target) && function(e, t, n) {
                                let {
                                    offset: r = er
                                } = n, {
                                    target: o = e,
                                    axis: i = "y"
                                } = n, l = "y" === i ? "height" : "width", a = o !== e ? function(e, t) {
                                    let n = {
                                            x: 0,
                                            y: 0
                                        },
                                        r = e;
                                    for (; r && r !== t;)
                                        if (r instanceof HTMLElement) n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
                                        else if ("svg" === r.tagName) {
                                        let e = r.getBoundingClientRect(),
                                            t = (r = r.parentElement).getBoundingClientRect();
                                        n.x += e.left - t.left, n.y += e.top - t.top
                                    } else if (r instanceof SVGGraphicsElement) {
                                        let {
                                            x: e,
                                            y: t
                                        } = r.getBBox();
                                        n.x += e, n.y += t;
                                        let o = null,
                                            i = r.parentNode;
                                        for (; !o;) "svg" === i.tagName && (o = i), i = r.parentNode;
                                        r = o
                                    } else break;
                                    return n
                                }(o, e) : es, s = o === e ? {
                                    width: e.scrollWidth,
                                    height: e.scrollHeight
                                } : "getBBox" in o && "svg" !== o.tagName ? o.getBBox() : {
                                    width: o.clientWidth,
                                    height: o.clientHeight
                                }, u = {
                                    width: e.clientWidth,
                                    height: e.clientHeight
                                };
                                t[i].offset.length = 0;
                                let c = !t[i].interpolate,
                                    f = r.length;
                                for (let e = 0; e < f; e++) {
                                    let n = function(e, t, n, r) {
                                        let o = Array.isArray(e) ? e : el,
                                            i = 0;
                                        return "number" == typeof e ? o = [e, e] : "string" == typeof e && (o = (e = e.trim()).includes(" ") ? e.split(" ") : [e, eo[e] ? e : "0"]), (i = ei(o[0], n, r)) - ei(o[1], t)
                                    }(r[e], u[l], s[l], a[i]);
                                    c || n === t[i].interpolatorOffsets[e] || (c = !0), t[i].offset[e] = n
                                }
                                c && (t[i].interpolate = (0, L().G)(t[i].offset, (0, ea().Z)(r)), t[i].interpolatorOffsets = [...t[i].offset]), t[i].progress = t[i].interpolate(t[i].current)
                            }(e, n, r)
                        },
                        notify: () => t(n)
                    }
                }(t, e, {
                    time: 0,
                    x: ee(),
                    y: ee()
                }, n);
                if (i.add(l), !eu.has(t)) {
                    let e, n = () => {
                            for (let e of i) e.measure()
                        },
                        l = () => {
                            for (let e of i) e.update(T().uv.timestamp)
                        },
                        a = () => {
                            for (let e of i) e.notify()
                        },
                        s = () => {
                            T().Gt.read(n, !1, !0), T().Gt.read(l, !1, !0), T().Gt.update(a, !1, !0)
                        };
                    eu.set(t, s);
                    let u = ed(t);
                    window.addEventListener("resize", s, {
                        passive: !0
                    }), t !== document.documentElement && ec.set(t, "function" == typeof t ? (_.add(t), o || (o = () => {
                        let e = {
                                width: window.innerWidth,
                                height: window.innerHeight
                            },
                            t = {
                                target: window,
                                size: e,
                                contentSize: e
                            };
                        _.forEach(e => e(t))
                    }, window.addEventListener("resize", o)), () => {
                        _.delete(t), !_.size && o && (o = void 0)
                    }) : (!r && "u" > typeof ResizeObserver && (r = new ResizeObserver(Z)), (e = j(t)).forEach(e => {
                        let t = q.get(e);
                        t || (t = new Set, q.set(e, t)), t.add(s), null == r || r.observe(e)
                    }), () => {
                        e.forEach(e => {
                            let t = q.get(e);
                            null == t || t.delete(s), (null == t ? void 0 : t.size) || null == r || r.unobserve(e)
                        })
                    })), u.addEventListener("scroll", s, {
                        passive: !0
                    })
                }
                let a = eu.get(t);
                return T().Gt.read(a, !1, !0), () => {
                    var e;
                    (0, T().WG)(a);
                    let n = ef.get(t);
                    if (!n || (n.delete(l), n.size)) return;
                    let r = eu.get(t);
                    eu.delete(t), r && (ed(t).removeEventListener("scroll", r), null == (e = ec.get(t)) || e(), window.removeEventListener("resize", r))
                }
            }

            function ep(e, t) {
                (0, w().$)(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)
            }
            let eh = () => ({
                scrollX: (0, A().OQ)(0),
                scrollY: (0, A().OQ)(0),
                scrollXProgress: (0, A().OQ)(0),
                scrollYProgress: (0, A().OQ)(0)
            });

            function eg({
                container: e,
                target: t,
                layoutEffect: r = !0,
                ...o
            } = {}) {
                let i = (0, n(328601).M)(eh);
                return (r ? R().E : m.useEffect)(() => (ep("target", t), ep("container", e), em(({
                    x: e,
                    y: t
                }) => {
                    i.scrollX.set(e.current), i.scrollXProgress.set(e.progress), i.scrollY.set(t.current), i.scrollYProgress.set(t.progress)
                }, { ...o,
                    container: (null == e ? void 0 : e.current) || void 0,
                    target: (null == t ? void 0 : t.current) || void 0
                })), [e, t, JSON.stringify(o.offset)]), i
            }

            function ey(e) {
                return eg({
                    container: e
                })
            }

            function ev() {
                return eg()
            }

            function ew(e) {
                let t = (0, m.useRef)(0),
                    {
                        isStatic: n
                    } = (0, m.useContext)(P().Q);
                (0, m.useEffect)(() => {
                    if (n) return;
                    let r = ({
                        timestamp: n,
                        delta: r
                    }) => {
                        t.current || (t.current = n), e(n - t.current, r)
                    };
                    return T().Gt.update(r, !0), () => (0, T().WG)(r)
                }, [e])
            }

            function eE() {
                let e = I(0);
                return ew(t => e.set(t)), e
            }
            class ex extends A().KG {
                constructor() {
                    super(...arguments), this.members = [], this.transforms = new Set
                }
                add(e) {
                    let t;
                    n(582200).f.has(e) ? (this.transforms.add(e), t = "transform") : e.startsWith("origin") || (0, n(340568).j4)(e) || "willChange" === e || (t = (0, n(348062).I)(e)), t && ((0, x().Kq)(this.members, t), this.update())
                }
                remove(e) {
                    n(582200).f.has(e) ? (this.transforms.delete(e), this.transforms.size || (0, x().Ai)(this.members, "transform")) : (0, x().Ai)(this.members, (0, n(348062).I)(e)), this.update()
                }
                update() {
                    this.set(this.members.length ? this.members.join(", ") : "auto")
                }
            }

            function eC() {
                return (0, n(328601).M)(() => new ex("auto"))
            }
            var eM = () => n(958638);

            function eS() {
                let e = (0, eM().I)(),
                    {
                        reducedMotion: t
                    } = (0, m.useContext)(P().Q);
                return "never" !== t && ("always" === t || e)
            }
            var eb = () => n(523514),
                eA = () => n(757491),
                eP = () => n(213379);

            function eI(e, t) {
                let n, r = () => {
                    let {
                        currentTime: r
                    } = t, o = (null === r ? 0 : r.value) / 100;
                    n !== o && e(o), n = o
                };
                return T().Gt.update(r, !0), () => (0, T().WG)(r)
            }
            let eL = (0, n(206153).p)(() => void 0 !== window.ScrollTimeline);
            class eV {
                constructor(e) {
                    this.animations = e.filter(Boolean)
                }
                then(e, t) {
                    return Promise.all(this.animations).then(e).catch(t)
                }
                getAll(e) {
                    return this.animations[0][e]
                }
                setAll(e, t) {
                    for (let n = 0; n < this.animations.length; n++) this.animations[n][e] = t
                }
                attachTimeline(e) {
                    let t = this.animations.map(t => {
                        if (!eL() || !t.attachTimeline) return t.pause(), eI(e => {
                            t.time = t.duration * e
                        }, e);
                        t.attachTimeline(e)
                    });
                    return () => {
                        t.forEach((e, t) => {
                            e && e(), this.animations[t].stop()
                        })
                    }
                }
                get time() {
                    return this.getAll("time")
                }
                set time(e) {
                    this.setAll("time", e)
                }
                get speed() {
                    return this.getAll("speed")
                }
                set speed(e) {
                    this.setAll("speed", e)
                }
                get duration() {
                    let e = 0;
                    for (let t = 0; t < this.animations.length; t++) e = Math.max(e, this.animations[t].duration);
                    return e
                }
                runAll(e) {
                    this.animations.forEach(t => t[e]())
                }
                play() {
                    this.runAll("play")
                }
                pause() {
                    this.runAll("pause")
                }
                stop() {
                    this.runAll("stop")
                }
                cancel() {
                    this.runAll("cancel")
                }
                complete() {
                    this.runAll("complete")
                }
            }
            var eR = () => n(540990),
                eT = () => n(929676),
                ek = () => n(530971);

            function eO(e, t, n, r) {
                var o;
                return "number" == typeof t ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : "<" === t ? n : null != (o = r.get(t)) ? o : e
            }
            let eG = (e, t, n) => {
                let r = t - e;
                return ((n - e) % r + r) % r + e
            };

            function eW(e, t) {
                return e.at !== t.at ? e.at - t.at : null === e.value ? 1 : null === t.value ? -1 : 0
            }

            function ez(e, t) {
                return t.has(e) || t.set(e, {}), t.get(e)
            }

            function eB(e, t) {
                return t[e] || (t[e] = []), t[e]
            }
            let eF = e => "number" == typeof e,
                eH = e => e.every(eF);

            function eD(e, t, r, o) {
                let i = j(e, o),
                    l = i.length;
                (0, w().V)(!!l, "No valid element provided.");
                let a = [];
                for (let e = 0; e < l; e++) {
                    let o = i[e];
                    eP().C.has(o) || function(e) {
                        let t = {
                                presenceContext: null,
                                props: {},
                                visualState: {
                                    renderState: {
                                        transform: {},
                                        transformOrigin: {},
                                        style: {},
                                        vars: {},
                                        attrs: {}
                                    },
                                    latestValues: {}
                                }
                            },
                            r = (0, n(401247).x)(e) ? new(n(142159)).l(t, {
                                enableHardwareAcceleration: !1
                            }) : new(n(130963)).M(t, {
                                enableHardwareAcceleration: !0
                            });
                        r.mount(e), eP().C.set(e, r)
                    }(o);
                    let s = eP().C.get(o),
                        u = { ...r
                        };
                    "function" == typeof u.delay && (u.delay = u.delay(e, l)), a.push(...(0, eR().$)(s, { ...t,
                        transition: u
                    }, {}))
                }
                return new eV(a)
            }
            let e$ = e => function(t, r, o) {
                    let i;
                    if (Array.isArray(t) && Array.isArray(t[0])) {
                        let o;
                        o = [], (function(e, {
                            defaultTransition: t = {},
                            ...r
                        } = {}, o) {
                            let i = t.duration || .3,
                                l = new Map,
                                a = new Map,
                                s = {},
                                u = new Map,
                                c = 0,
                                f = 0,
                                d = 0;
                            for (let r = 0; r < e.length; r++) {
                                let l = e[r];
                                if ("string" == typeof l) {
                                    u.set(l, f);
                                    continue
                                }
                                if (!Array.isArray(l)) {
                                    u.set(l.name, eO(f, l.at, c, u));
                                    continue
                                }
                                let [h, g, y = {}] = l;
                                void 0 !== y.at && (f = eO(f, y.at, c, u));
                                let v = 0,
                                    w = (e, r, o, l = 0, a = 0) => {
                                        var s;
                                        let u = Array.isArray(s = e) ? s : [s],
                                            {
                                                delay: c = 0,
                                                times: m = (0, ea().Z)(u),
                                                type: p = "keyframes",
                                                ...h
                                            } = r,
                                            {
                                                ease: g = t.ease || "easeOut",
                                                duration: y
                                            } = r,
                                            w = "function" == typeof c ? c(l, a) : c,
                                            E = u.length;
                                        if (E <= 2 && "spring" === p) {
                                            let e = 100;
                                            2 === E && eH(u) && (e = Math.abs(u[1] - u[0]));
                                            let t = { ...h
                                            };
                                            void 0 !== y && (t.duration = (0, N().f)(y));
                                            let r = function(e, t = 100) {
                                                let r = (0, eT().o)({
                                                        keyframes: [0, t],
                                                        ...e
                                                    }),
                                                    o = Math.min((0, n(882857).t)(r), n(882857).Y);
                                                return {
                                                    type: "keyframes",
                                                    ease: e => r.next(o * e).value / t,
                                                    duration: (0, N().X)(o)
                                                }
                                            }(t, e);
                                            g = r.ease, y = r.duration
                                        }
                                        null != y || (y = i);
                                        let M = f + w,
                                            S = M + y;
                                        1 === m.length && 0 === m[0] && (m[1] = 1);
                                        let b = m.length - u.length;
                                        b > 0 && (0, ek().f)(m, b), 1 === u.length && u.unshift(null),
                                            function(e, t, r, o, i, l) {
                                                var a;
                                                for (let t = 0; t < e.length; t++) {
                                                    let n = e[t];
                                                    n.at > i && n.at < l && ((0, x().Ai)(e, n), t--)
                                                }
                                                for (let s = 0; s < t.length; s++) e.push({
                                                    value: t[s],
                                                    at: (0, C().j)(i, l, o[s]),
                                                    easing: (a = s, (0, n(517795).h)(r) ? r[eG(0, r.length, a)] : r)
                                                })
                                            }(o, u, g, m, M, S), v = Math.max(w + y, v), d = Math.max(S, d)
                                    };
                                if ((0, W().S)(h)) w(g, y, eB("default", ez(h, a)));
                                else {
                                    let e = j(h, o, s),
                                        t = e.length;
                                    for (let n = 0; n < t; n++) {
                                        let r = ez(e[n], a);
                                        for (let e in g) {
                                            var m, p;
                                            w(g[e], (m = y)[p = e] ? { ...m,
                                                ...m[p]
                                            } : { ...m
                                            }, eB(e, r), n, t)
                                        }
                                    }
                                    c = f, f += v
                                }
                            }
                            return a.forEach((e, n) => {
                                for (let o in e) {
                                    let i = e[o];
                                    i.sort(eW);
                                    let a = [],
                                        s = [],
                                        u = [];
                                    for (let e = 0; e < i.length; e++) {
                                        let {
                                            at: t,
                                            value: n,
                                            easing: r
                                        } = i[e];
                                        a.push(n), s.push((0, K().q)(0, d, t)), u.push(r || "easeOut")
                                    }
                                    0 !== s[0] && (s.unshift(0), a.unshift(a[0]), u.unshift("easeInOut")), 1 !== s[s.length - 1] && (s.push(1), a.push(null)), l.has(n) || l.set(n, {
                                        keyframes: {},
                                        transition: {}
                                    });
                                    let c = l.get(n);
                                    c.keyframes[o] = a, c.transition[o] = { ...t,
                                        duration: d,
                                        ease: u,
                                        times: s,
                                        ...r
                                    }
                                }
                            }), l
                        })(t, r, e).forEach(({
                            keyframes: e,
                            transition: t
                        }, r) => {
                            let i;
                            i = (0, W().S)(r) ? (0, n(546331).z)(r, e.default, t.default) : eD(r, e, t), o.push(i)
                        }), i = new eV(o)
                    } else i = "object" != typeof r || Array.isArray(r) ? (0, n(546331).z)(t, r, o) : eD(t, r, o, e);
                    return e && e.animations.push(i), i
                },
                eQ = e$();

            function eN() {
                let e = (0, n(328601).M)(() => ({
                        current: null,
                        animations: []
                    })),
                    t = (0, n(328601).M)(() => e$(e));
                return (0, eA().l)(() => {
                    e.animations.forEach(e => e.stop())
                }), [e, t]
            }
            var eU = () => n(188137),
                eY = () => n(452094);

            function eX(...e) {
                let t = (0, m.useRef)(0),
                    [n, r] = (0, m.useState)(e[t.current]);
                return [n, (0, m.useCallback)(n => {
                    t.current = "number" != typeof n ? eG(0, e.length, t.current + 1) : n, r(e[t.current])
                }, [e.length, ...e])]
            }
            var ej = () => n(620936),
                eq = () => n(289120);
            let eJ = {
                some: 0,
                all: 1
            };

            function eZ(e, t, {
                root: n,
                margin: r,
                amount: o = "some"
            } = {}) {
                let i = j(e),
                    l = new WeakMap,
                    a = new IntersectionObserver(e => {
                        e.forEach(e => {
                            let n = l.get(e.target);
                            if (!!n !== e.isIntersecting)
                                if (e.isIntersecting) {
                                    let n = t(e);
                                    "function" == typeof n ? l.set(e.target, n) : a.unobserve(e.target)
                                } else n && (n(e), l.delete(e.target))
                        })
                    }, {
                        root: n,
                        rootMargin: r,
                        threshold: "number" == typeof o ? o : eJ[o]
                    });
                return i.forEach(e => a.observe(e)), () => a.disconnect()
            }

            function e_(e, {
                root: t,
                margin: n,
                amount: r,
                once: o = !1
            } = {}) {
                let [i, l] = (0, m.useState)(!1);
                return (0, m.useEffect)(() => {
                    if (!e.current || o && i) return;
                    let a = {
                        root: t && t.current || void 0,
                        margin: n,
                        amount: r
                    };
                    return eZ(e.current, () => (l(!0), o ? void 0 : () => l(!1)), a)
                }, [t, e, n, o, r]), i
            }
            class eK {
                constructor() {
                    this.componentControls = new Set
                }
                subscribe(e) {
                    return this.componentControls.add(e), () => this.componentControls.delete(e)
                }
                start(e, t) {
                    this.componentControls.forEach(n => {
                        n.start(e.nativeEvent || e, t)
                    })
                }
            }
            let e0 = () => new eK;

            function e1() {
                return (0, n(328601).M)(e0)
            }

            function e2(e, t, r, o) {
                (0, m.useEffect)(() => {
                    let i = e.current;
                    if (r && i) return (0, n(663998).k)(i, t, r, o)
                }, [e, t, r, o])
            }
            var e6 = () => n(698809);

            function e3(e) {
                return null !== e && "object" == typeof e && n(196060).o in e
            }

            function e5(e) {
                if (e3(e)) return e[n(196060).o]
            }
            var e8 = () => n(569560),
                e4 = () => n(738645);

            function e9() {
                return e7
            }

            function e7(e) {
                n(506768).i.current && (n(506768).i.current.isUpdating = !1, n(506768).i.current.blockUpdate(), e && e())
            }

            function te() {
                let [e, t] = (0, g().C)(), r = (0, m.useRef)();
                return (0, m.useEffect)(() => {
                    T().Gt.postRender(() => T().Gt.postRender(() => {
                        t === r.current && (n(639652).d.current = !1)
                    }))
                }, [t]), o => {
                    e7(() => {
                        n(639652).d.current = !0, e(), o(), r.current = t + 1
                    })
                }
            }

            function tt() {
                n(639652).d.current = !1
            }

            function tn() {
                return m.useCallback(() => {
                    let e = n(506768).i.current;
                    e && e.resetTree()
                }, [])
            }
            var tr = () => n(204111),
                to = () => n(27739),
                ti = () => n(641614),
                tl = () => n(155269),
                ta = () => n(974668);
            let ts = (e, t) => `${e}: ${t}`;
            var tu = () => n(582392);
            let tc = new Map;

            function tf(e, t, r, o) {
                let l = ts(e, n(582200).f.has(t) ? "transform" : t),
                    a = tc.get(l);
                if (!a) return null;
                let {
                    animation: s,
                    startTime: u
                } = a;
                if (null !== u && !window.HandoffComplete) return void 0 === i && (i = performance.now()), i - u || 0;
                tc.delete(l);
                try {
                    s.cancel()
                } catch (e) {}
                return null
            }

            function td(e, t, r, o, i) {
                if (window.HandoffComplete) {
                    window.HandoffAppearAnimations = void 0;
                    return
                }
                let s = e.dataset[tu().c];
                if (!s) return;
                window.HandoffAppearAnimations = tf;
                let u = ts(s, t);
                a || (a = (0, n(799734).X)(e, t, [r[0], r[0]], {
                    duration: 1e4,
                    ease: "linear"
                }), tc.set(u, {
                    animation: a,
                    startTime: null
                }));
                let c = () => {
                    a.cancel();
                    let s = (0, n(799734).X)(e, t, r, o);
                    void 0 === l && (l = performance.now()), s.startTime = l, tc.set(u, {
                        animation: s,
                        startTime: l
                    }), i && i(s)
                };
                a.ready ? a.ready.then(c).catch(n(803659).l) : c()
            }
            var tm = () => n(345153),
                tp = () => n(786719),
                th = () => n(223717),
                tg = () => n(573294),
                ty = () => n(124714),
                tv = () => n(40278),
                tw = () => n(554106);
            let tE = () => ({});
            class tx extends e8().B {
                build() {}
                measureInstanceViewportBox() {
                    return (0, tw().ge)()
                }
                resetTransform() {}
                restoreTransform() {}
                removeValueFromRenderState() {}
                renderInstance() {}
                scrapeMotionValuesFromProps() {
                    return tE()
                }
                getBaseTargetFromProps() {}
                readValueFromInstance(e, t, n) {
                    return n.initialState[t] || 0
                }
                sortInstanceNodePosition() {
                    return 0
                }
                makeTargetAnimatableFromInstance({
                    transition: e,
                    transitionEnd: t,
                    ...n
                }) {
                    let r = (0, ty().$z)(n, e || {}, this);
                    return (0, ty().TM)(this, n, r), {
                        transition: e,
                        transitionEnd: t,
                        ...n
                    }
                }
            }
            let tC = (0, tv().T)({
                scrapeMotionValuesFromProps: tE,
                createRenderState: tE
            });

            function tM(e) {
                let [t, r] = (0, m.useState)(e), o = tC({}, !1), i = (0, n(328601).M)(() => new tx({
                    props: {},
                    visualState: o,
                    presenceContext: null
                }, {
                    initialState: e
                }));
                return (0, m.useEffect)(() => (i.mount({}), () => i.unmount()), [i]), (0, m.useEffect)(() => {
                    i.update({
                        onUpdate: e => {
                            r({ ...e
                            })
                        }
                    }, null)
                }, [r, i]), [t, (0, n(328601).M)(() => e => (0, eY()._)(i, e))]
            }
            let tS = e => e > .001 ? 1 / e : 1e5,
                tb = !1;

            function tA(e) {
                let t = I(1),
                    n = I(1),
                    {
                        visualElement: r
                    } = (0, m.useContext)(tm().A);
                return (0, w().V)(!!(e || r), "If no scale values are provided, useInvertedScale must be used within a child of another motion component."), (0, w().$)(tb, "useInvertedScale is deprecated and will be removed in 3.0. Use the layout prop instead."), tb = !0, e ? (t = e.scaleX || t, n = e.scaleY || n) : r && (t = r.getValue("scaleX", 1), n = r.getValue("scaleY", 1)), {
                    scaleX: O(t, tS),
                    scaleY: O(n, tS)
                }
            }
            let tP = 0,
                tI = ({
                    children: e
                }) => (m.useEffect(() => {
                    (0, w().V)(!1, "AnimateSharedLayout is deprecated: https://www.framer.com/docs/guide-upgrade/##shared-layout-animations")
                }, []), m.createElement(v, {
                    id: (0, n(328601).M)(() => `asl-${tP++}`)
                }, e)),
                tL = new Map;

            function tV(e, t) {
                let n = function({
                    source: e = document.documentElement,
                    axis: t = "y"
                } = {}) {
                    tL.has(e) || tL.set(e, {});
                    let n = tL.get(e);
                    return n[t] || (n[t] = eL() ? new ScrollTimeline({
                        source: e,
                        axis: t
                    }) : function({
                        source: e,
                        axis: t = "y"
                    }) {
                        let n = {
                                value: 0
                            },
                            r = em(e => {
                                n.value = 100 * e[t].progress
                            }, {
                                container: e,
                                axis: t
                            });
                        return {
                            currentTime: n,
                            cancel: r
                        }
                    }({
                        source: e,
                        axis: t
                    })), n[t]
                }(t);
                return "function" == typeof e ? eI(e, n) : e.attachTimeline(n)
            }

            function tR(e = .1, {
                startDelay: t = 0,
                from: r = 0,
                ease: o
            } = {}) {
                return (i, l) => {
                    let a = e * Math.abs(("number" == typeof r ? r : function(e, t) {
                        if ("first" === e) return 0; {
                            let n = t - 1;
                            return "last" === e ? n : n / 2
                        }
                    }(r, l)) - i);
                    if (o) {
                        let t = l * e;
                        a = (0, n(360983).K)(o)(a / t) * t
                    }
                    return t + a
                }
            }
            var tT = () => n(442464),
                tk = () => n(991339);
            let tO = T().Gt,
                tG = n(763290).q.reduce((e, t) => (e[t] = e => (0, T().WG)(e), e), {});
            var tW = () => n(410309),
                tz = () => n(344768),
                tB = () => n(184868),
                tF = () => n(293771),
                tH = () => n(604043),
                tD = () => n(783041),
                t$ = () => n(292946),
                tQ = () => n(866528),
                tN = () => n(215746),
                tU = () => n(337807),
                tY = () => n(255120),
                tX = () => n(997346),
                tj = () => n(317890),
                tq = () => n(992901),
                tJ = () => n(671912),
                tZ = () => n(98288)
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
        523514: (e, t, n) => {
            n.d(t, {
                L: () => r
            });

            function r() {
                let e = !1,
                    t = new Set,
                    r = {
                        subscribe: e => (t.add(e), () => void t.delete(e)),
                        start(r, o) {
                            (0, n(285238).V)(e, "controls.start() should only be called after a component has mounted. Consider calling within a useEffect hook.");
                            let i = [];
                            return t.forEach(e => {
                                i.push((0, n(452094)._)(e, r, {
                                    transitionOverride: o
                                }))
                            }), Promise.all(i)
                        },
                        set: r => ((0, n(285238).V)(e, "controls.set() should only be called after a component has mounted. Consider calling within a useEffect hook."), t.forEach(e => {
                            (0, n(124714).VI)(e, r)
                        })),
                        stop() {
                            t.forEach(e => {
                                e.values.forEach(e => e.stop())
                            })
                        },
                        mount: () => (e = !0, () => {
                            e = !1, r.stop()
                        })
                    };
                return r
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
        766031: (e, t, n) => {
            n.d(t, {
                m: () => r
            });
            let r = (0, n(6046).H)(n(501723).P)
        },
        958638: (e, t, n) => {
            n.d(t, {
                I: () => o
            });
            var r = n(296540);

            function o() {
                n(108452).r.current || (0, n(702743).U)();
                let [e] = (0, r.useState)(n(108452).O.current);
                return e
            }
        }
    }
]);