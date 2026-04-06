"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [45414], {
        80152: (t, e, i) => {
            i.d(e, {
                $: () => a
            });
            var s = i(296540);

            function o(t, e) {
                return e.max === e.min ? 0 : t / (e.max - e.min) * 100
            }
            let r = {
                correct: (t, e) => {
                    if (!e.target) return t;
                    if ("string" == typeof t)
                        if (!i(155269).px.test(t)) return t;
                        else t = parseFloat(t);
                    let s = o(t, e.target.x),
                        r = o(t, e.target.y);
                    return `${s}% ${r}%`
                }
            };
            class n extends s.Component {
                componentDidMount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: s,
                        layoutId: o
                    } = this.props, {
                        projection: r
                    } = t;
                    (0, i(738645).$)(l), r && (e.group && e.group.add(r), s && s.register && o && s.register(r), r.root.didUpdate(), r.addEventListener("animationComplete", () => {
                        this.safeToRemove()
                    }), r.setOptions({ ...r.options,
                        onExitComplete: () => this.safeToRemove()
                    })), i(450775).w.hasEverUpdated = !0
                }
                getSnapshotBeforeUpdate(t) {
                    let {
                        layoutDependency: e,
                        visualElement: s,
                        drag: o,
                        isPresent: r
                    } = this.props, n = s.projection;
                    return n && (n.isPresent = r, o || t.layoutDependency !== e || void 0 === e ? n.willUpdate() : this.safeToRemove(), t.isPresent !== r && (r ? n.promote() : n.relegate() || i(610104).Gt.postRender(() => {
                        let t = n.getStack();
                        t && t.members.length || this.safeToRemove()
                    }))), null
                }
                componentDidUpdate() {
                    let {
                        projection: t
                    } = this.props.visualElement;
                    t && (t.root.didUpdate(), queueMicrotask(() => {
                        !t.currentAnimation && t.isLead() && this.safeToRemove()
                    }))
                }
                componentWillUnmount() {
                    let {
                        visualElement: t,
                        layoutGroup: e,
                        switchLayoutGroup: i
                    } = this.props, {
                        projection: s
                    } = t;
                    s && (s.scheduleCheckAfterUnmount(), e && e.group && e.group.remove(s), i && i.deregister && i.deregister(s))
                }
                safeToRemove() {
                    let {
                        safeToRemove: t
                    } = this.props;
                    t && t()
                }
                render() {
                    return null
                }
            }

            function a(t) {
                let [e, o] = (0, i(289120).xQ)(), r = (0, s.useContext)(i(29473).L);
                return s.createElement(n, { ...t,
                    layoutGroup: r,
                    switchLayoutGroup: (0, s.useContext)(i(223717).N),
                    isPresent: e,
                    safeToRemove: o
                })
            }
            let l = {
                borderRadius: { ...r,
                    applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
                },
                borderTopLeftRadius: r,
                borderTopRightRadius: r,
                borderBottomLeftRadius: r,
                borderBottomRightRadius: r,
                boxShadow: {
                    correct: (t, {
                        treeScale: e,
                        projectionDelta: s
                    }) => {
                        let o = i(641614).f.parse(t);
                        if (o.length > 5) return t;
                        let r = i(641614).f.createTransformer(t),
                            n = +("number" != typeof o[0]),
                            a = s.x.scale * e.x,
                            l = s.y.scale * e.y;
                        o[0 + n] /= a, o[1 + n] /= l;
                        let h = (0, i(102839).j)(a, l, .5);
                        return "number" == typeof o[2 + n] && (o[2 + n] /= h), "number" == typeof o[3 + n] && (o[3 + n] /= h), r(o)
                    }
                }
            }
        },
        255120: (t, e, i) => {
            function s(t) {
                return t.max - t.min
            }

            function o(t, e = 0, i = .01) {
                return Math.abs(t - e) <= i
            }

            function r(t, e, n, a = .5) {
                t.origin = a, t.originPoint = (0, i(102839).j)(e.min, e.max, t.origin), t.scale = s(n) / s(e), (o(t.scale, 1, 1e-4) || isNaN(t.scale)) && (t.scale = 1), t.translate = (0, i(102839).j)(n.min, n.max, t.origin) - t.originPoint, (o(t.translate) || isNaN(t.translate)) && (t.translate = 0)
            }

            function n(t, e, i, s) {
                r(t.x, e.x, i.x, s ? s.originX : void 0), r(t.y, e.y, i.y, s ? s.originY : void 0)
            }

            function a(t, e, i) {
                t.min = i.min + e.min, t.max = t.min + s(e)
            }

            function l(t, e, i) {
                a(t.x, e.x, i.x), a(t.y, e.y, i.y)
            }

            function h(t, e, i) {
                t.min = e.min - i.min, t.max = t.min + s(e)
            }

            function u(t, e, i) {
                h(t.x, e.x, i.x), h(t.y, e.y, i.y)
            }
            i.d(e, {
                CQ: () => s,
                HQ: () => o,
                N: () => l,
                jA: () => u,
                vb: () => n
            })
        },
        401247: (t, e, i) => {
            i.d(e, {
                x: () => s
            });

            function s(t) {
                return t instanceof SVGElement && "svg" !== t.tagName
            }
        },
        411784: (t, e, i) => {
            i.d(e, {
                u0: () => V
            });
            var s = () => i(102839),
                o = () => i(155269);
            let r = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
                n = r.length,
                a = t => "string" == typeof t ? parseFloat(t) : t,
                l = t => "number" == typeof t || o().px.test(t);

            function h(t, e) {
                return void 0 !== t[e] ? t[e] : t.borderRadius
            }
            let u = c(0, .5, i(184868).yT),
                d = c(.5, .95, i(803659).l);

            function c(t, e, s) {
                return o => o < t ? 0 : o > e ? 1 : s((0, i(927170).q)(t, e, o))
            }

            function m(t, e) {
                t.min = e.min, t.max = e.max
            }

            function p(t, e) {
                m(t.x, e.x), m(t.y, e.y)
            }
            var g = () => i(205673);

            function v(t, e, i, s, o) {
                return t -= e, t = (0, g().hq)(t, 1 / i, s), void 0 !== o && (t = (0, g().hq)(t, 1 / o, s)), t
            }

            function y(t, e, [i, r, n], a, l) {
                ! function(t, e = 0, i = 1, r = .5, n, a = t, l = t) {
                    if (o().KN.test(e) && (e = parseFloat(e), e = (0, s().j)(l.min, l.max, e / 100) - l.min), "number" != typeof e) return;
                    let h = (0, s().j)(a.min, a.max, r);
                    t === a && (h -= e), t.min = v(t.min, e, i, h, n), t.max = v(t.max, e, i, h, n)
                }(t, e[i], e[r], e[n], e.scale, a, l)
            }
            let f = ["x", "scaleX", "originX"],
                x = ["y", "scaleY", "originY"];

            function P(t, e, i, s) {
                y(t.x, e, f, i ? i.x : void 0, s ? s.x : void 0), y(t.y, e, x, i ? i.y : void 0, s ? s.y : void 0)
            }
            var T = () => i(554106);

            function D(t) {
                return 0 === t.translate && 1 === t.scale
            }

            function j(t) {
                return D(t.x) && D(t.y)
            }

            function A(t, e) {
                return Math.round(t.x.min) === Math.round(e.x.min) && Math.round(t.x.max) === Math.round(e.x.max) && Math.round(t.y.min) === Math.round(e.y.min) && Math.round(t.y.max) === Math.round(e.y.max)
            }

            function E(t) {
                return (0, i(255120).CQ)(t.x) / (0, i(255120).CQ)(t.y)
            }
            class R {
                constructor() {
                    this.members = []
                }
                add(t) {
                    (0, i(132358).Kq)(this.members, t), t.scheduleRender()
                }
                remove(t) {
                    if ((0, i(132358).Ai)(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
                        let t = this.members[this.members.length - 1];
                        t && this.promote(t)
                    }
                }
                relegate(t) {
                    let e, i = this.members.findIndex(e => t === e);
                    if (0 === i) return !1;
                    for (let t = i; t >= 0; t--) {
                        let i = this.members[t];
                        if (!1 !== i.isPresent) {
                            e = i;
                            break
                        }
                    }
                    return !!e && (this.promote(e), !0)
                }
                promote(t, e) {
                    let i = this.lead;
                    if (t !== i && (this.prevLead = i, this.lead = t, t.show(), i)) {
                        i.instance && i.scheduleRender(), t.scheduleRender(), t.resumeFrom = i, e && (t.resumeFrom.preserveOpacity = !0), i.snapshot && (t.snapshot = i.snapshot, t.snapshot.latestValues = i.animationValues || i.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
                        let {
                            crossfade: s
                        } = t.options;
                        !1 === s && i.hide()
                    }
                }
                exitAnimationComplete() {
                    this.members.forEach(t => {
                        let {
                            options: e,
                            resumingFrom: i
                        } = t;
                        e.onExitComplete && e.onExitComplete(), i && i.options.onExitComplete && i.options.onExitComplete()
                    })
                }
                scheduleRender() {
                    this.members.forEach(t => {
                        t.instance && t.scheduleRender(!1)
                    })
                }
                removeLeadSnapshot() {
                    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
                }
            }
            var S = () => i(738645);

            function L(t, e, i) {
                let s = "",
                    o = t.x.translate / e.x,
                    r = t.y.translate / e.y;
                if ((o || r) && (s = `translate3d(${o}px, ${r}px, 0) `), (1 !== e.x || 1 !== e.y) && (s += `scale(${1/e.x}, ${1/e.y}) `), i) {
                    let {
                        rotate: t,
                        rotateX: e,
                        rotateY: o
                    } = i;
                    t && (s += `rotate(${t}deg) `), e && (s += `rotateX(${e}deg) `), o && (s += `rotateY(${o}deg) `)
                }
                let n = t.x.scale * e.x,
                    a = t.y.scale * e.y;
                return (1 !== n || 1 !== a) && (s += `scale(${n}, ${a})`), s || "none"
            }
            var B = () => i(841630);
            let b = ["", "X", "Y", "Z"],
                w = {
                    visibility: "hidden"
                },
                C = 0,
                M = {
                    type: "projectionFrame",
                    totalNodes: 0,
                    resolvedTargetDeltas: 0,
                    recalculatedProjection: 0
                };

            function V({
                attachResizeListener: t,
                defaultParent: e,
                measureScroll: c,
                checkIsScrollRoot: m,
                resetTransform: v
            }) {
                return class {
                    constructor(t = {}, s = null == e ? void 0 : e()) {
                        this.id = C++, this.animationId = 0, this.children = new Set, this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = {
                            x: 1,
                            y: 1
                        }, this.eventHandlers = new Map, this.hasTreeAnimated = !1, this.updateScheduled = !1, this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
                            this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots())
                        }, this.updateProjection = () => {
                            this.projectionUpdateScheduled = !1, M.totalNodes = M.resolvedTargetDeltas = M.recalculatedProjection = 0, this.nodes.forEach(F), this.nodes.forEach(Q), this.nodes.forEach(I), this.nodes.forEach(G), window.MotionDebug && window.MotionDebug.record(M)
                        }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = new Map, this.latestValues = t, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
                        for (let t = 0; t < this.path.length; t++) this.path[t].shouldResetTransform = !0;
                        this.root === this && (this.nodes = new(i(573294)).Y)
                    }
                    addEventListener(t, e) {
                        return this.eventHandlers.has(t) || this.eventHandlers.set(t, new(i(22606)).v), this.eventHandlers.get(t).add(e)
                    }
                    notifyListeners(t, ...e) {
                        let i = this.eventHandlers.get(t);
                        i && i.notify(...e)
                    }
                    hasListeners(t) {
                        return this.eventHandlers.has(t)
                    }
                    mount(e, s = this.root.hasTreeAnimated) {
                        if (this.instance) return;
                        this.isSVG = (0, i(401247).x)(e), this.instance = e;
                        let {
                            layoutId: o,
                            layout: r,
                            visualElement: n
                        } = this.options;
                        if (n && !n.current && n.mount(e), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (r || o) && (this.isLayoutDirty = !0), t) {
                            let s, o = () => this.root.updateBlockedByResize = !1;
                            t(e, () => {
                                this.root.updateBlockedByResize = !0, s && s(), s = (0, i(866528).c)(o, 250), i(450775).w.hasAnimatedSinceResize && (i(450775).w.hasAnimatedSinceResize = !1, this.nodes.forEach(H))
                            })
                        }
                        o && this.root.registerSharedNode(o, this), !1 !== this.options.animate && n && (o || r) && this.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e,
                            hasRelativeTargetChanged: s,
                            layout: o
                        }) => {
                            if (this.isTreeAnimationBlocked()) {
                                this.target = void 0, this.relativeTarget = void 0;
                                return
                            }
                            let r = this.options.transition || n.getDefaultTransition() || Z,
                                {
                                    onLayoutAnimationStart: a,
                                    onLayoutAnimationComplete: l
                                } = n.getProps(),
                                h = !this.targetLayout || !A(this.targetLayout, o) || s,
                                u = !e && s;
                            if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || u || e && (h || !this.currentAnimation)) {
                                this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(t, u);
                                let e = { ...(0, i(502010).r)(r, "layout"),
                                    onPlay: a,
                                    onComplete: l
                                };
                                (n.shouldReduceMotion || this.options.layoutRoot) && (e.delay = 0, e.type = !1), this.startAnimation(e)
                            } else e || H(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                            this.targetLayout = o
                        })
                    }
                    unmount() {
                        this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
                        let t = this.getStack();
                        t && t.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, (0, i(610104).WG)(this.updateProjection)
                    }
                    blockUpdate() {
                        this.updateManuallyBlocked = !0
                    }
                    unblockUpdate() {
                        this.updateManuallyBlocked = !1
                    }
                    isUpdateBlocked() {
                        return this.updateManuallyBlocked || this.updateBlockedByResize
                    }
                    isTreeAnimationBlocked() {
                        return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
                    }
                    startUpdate() {
                        !this.isUpdateBlocked() && (this.isUpdating = !0, this.nodes && this.nodes.forEach($), this.animationId++)
                    }
                    getTransformTemplate() {
                        let {
                            visualElement: t
                        } = this.options;
                        return t && t.getProps().transformTemplate
                    }
                    willUpdate(t = !0) {
                        if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
                            this.options.onExitComplete && this.options.onExitComplete();
                            return
                        }
                        if (this.root.isUpdating || this.root.startUpdate(), this.isLayoutDirty) return;
                        this.isLayoutDirty = !0;
                        for (let t = 0; t < this.path.length; t++) {
                            let e = this.path[t];
                            e.shouldResetTransform = !0, e.updateScroll("snapshot"), e.options.layoutRoot && e.willUpdate(!1)
                        }
                        let {
                            layoutId: e,
                            layout: i
                        } = this.options;
                        if (void 0 === e && !i) return;
                        let s = this.getTransformTemplate();
                        this.prevTransformTemplateValue = s ? s(this.latestValues, "") : void 0, this.updateSnapshot(), t && this.notifyListeners("willUpdate")
                    }
                    update() {
                        if (this.updateScheduled = !1, this.isUpdateBlocked()) {
                            this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(N);
                            return
                        }
                        this.isUpdating || this.nodes.forEach(X), this.isUpdating = !1, this.nodes.forEach(W), this.nodes.forEach(U), this.nodes.forEach(k), this.clearAllSnapshots();
                        let t = performance.now();
                        i(610104).uv.delta = (0, i(442464).q)(0, 1e3 / 60, t - i(610104).uv.timestamp), i(610104).uv.timestamp = t, i(610104).uv.isProcessing = !0, i(610104).Ci.update.process(i(610104).uv), i(610104).Ci.preRender.process(i(610104).uv), i(610104).Ci.render.process(i(610104).uv), i(610104).uv.isProcessing = !1
                    }
                    didUpdate() {
                        this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()))
                    }
                    clearAllSnapshots() {
                        this.nodes.forEach(O), this.sharedNodes.forEach(z)
                    }
                    scheduleUpdateProjection() {
                        this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, i(610104).Gt.preRender(this.updateProjection, !1, !0))
                    }
                    scheduleCheckAfterUnmount() {
                        i(610104).Gt.postRender(() => {
                            this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
                        })
                    }
                    updateSnapshot() {
                        !this.snapshot && this.instance && (this.snapshot = this.measure())
                    }
                    updateLayout() {
                        if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty)) return;
                        if (this.resumeFrom && !this.resumeFrom.instance)
                            for (let t = 0; t < this.path.length; t++) this.path[t].updateScroll();
                        let t = this.layout;
                        this.layout = this.measure(!1), this.layoutCorrected = (0, T().ge)(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
                        let {
                            visualElement: e
                        } = this.options;
                        e && e.notify("LayoutMeasure", this.layout.layoutBox, t ? t.layoutBox : void 0)
                    }
                    updateScroll(t = "measure") {
                        let e = !!(this.options.layoutScroll && this.instance);
                        this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === t && (e = !1), e && (this.scroll = {
                            animationId: this.root.animationId,
                            phase: t,
                            isRoot: m(this.instance),
                            offset: c(this.instance)
                        })
                    }
                    resetTransform() {
                        if (!v) return;
                        let t = this.isLayoutDirty || this.shouldResetTransform,
                            e = this.projectionDelta && !j(this.projectionDelta),
                            i = this.getTransformTemplate(),
                            s = i ? i(this.latestValues, "") : void 0,
                            o = s !== this.prevTransformTemplateValue;
                        t && (e || (0, B().HD)(this.latestValues) || o) && (v(this.instance, s), this.shouldResetTransform = !1, this.scheduleRender())
                    }
                    measure(t = !0) {
                        var e;
                        let i = this.measurePageBox(),
                            s = this.removeElementScroll(i);
                        return t && (s = this.removeTransform(s)), tt((e = s).x), tt(e.y), {
                            animationId: this.root.animationId,
                            measuredBox: i,
                            layoutBox: s,
                            latestValues: {},
                            source: this.id
                        }
                    }
                    measurePageBox() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return (0, T().ge)();
                        let e = t.measureViewportBox(),
                            {
                                scroll: i
                            } = this.root;
                        return i && ((0, g().Ql)(e.x, i.offset.x), (0, g().Ql)(e.y, i.offset.y)), e
                    }
                    removeElementScroll(t) {
                        let e = (0, T().ge)();
                        p(e, t);
                        for (let i = 0; i < this.path.length; i++) {
                            let s = this.path[i],
                                {
                                    scroll: o,
                                    options: r
                                } = s;
                            if (s !== this.root && o && r.layoutScroll) {
                                if (o.isRoot) {
                                    p(e, t);
                                    let {
                                        scroll: i
                                    } = this.root;
                                    i && ((0, g().Ql)(e.x, -i.offset.x), (0, g().Ql)(e.y, -i.offset.y))
                                }(0, g().Ql)(e.x, o.offset.x), (0, g().Ql)(e.y, o.offset.y)
                            }
                        }
                        return e
                    }
                    applyTransform(t, e = !1) {
                        let i = (0, T().ge)();
                        p(i, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let s = this.path[t];
                            !e && s.options.layoutScroll && s.scroll && s !== s.root && (0, g().Ww)(i, {
                                x: -s.scroll.offset.x,
                                y: -s.scroll.offset.y
                            }), (0, B().HD)(s.latestValues) && (0, g().Ww)(i, s.latestValues)
                        }
                        return (0, B().HD)(this.latestValues) && (0, g().Ww)(i, this.latestValues), i
                    }
                    removeTransform(t) {
                        let e = (0, T().ge)();
                        p(e, t);
                        for (let t = 0; t < this.path.length; t++) {
                            let i = this.path[t];
                            if (!i.instance || !(0, B().HD)(i.latestValues)) continue;
                            (0, B().vk)(i.latestValues) && i.updateSnapshot();
                            let s = (0, T().ge)();
                            p(s, i.measurePageBox()), P(e, i.latestValues, i.snapshot ? i.snapshot.layoutBox : void 0, s)
                        }
                        return (0, B().HD)(this.latestValues) && P(e, this.latestValues), e
                    }
                    setTargetDelta(t) {
                        this.targetDelta = t, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0
                    }
                    setOptions(t) {
                        this.options = { ...this.options,
                            ...t,
                            crossfade: void 0 === t.crossfade || t.crossfade
                        }
                    }
                    clearMeasurements() {
                        this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1
                    }
                    forceRelativeParentToResolveTarget() {
                        this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== i(610104).uv.timestamp && this.relativeParent.resolveTargetDelta(!0)
                    }
                    resolveTargetDelta(t = !1) {
                        var e;
                        let s = this.getLead();
                        this.isProjectionDirty || (this.isProjectionDirty = s.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = s.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = s.isSharedProjectionDirty);
                        let o = !!this.resumingFrom || this !== s;
                        if (!(t || o && this.isSharedProjectionDirty || this.isProjectionDirty || (null == (e = this.parent) ? void 0 : e.isProjectionDirty) || this.attemptToResolveRelativeTarget)) return;
                        let {
                            layout: r,
                            layoutId: n
                        } = this.options;
                        if (this.layout && (r || n)) {
                            if (this.resolvedRelativeTargetAt = i(610104).uv.timestamp, !this.targetDelta && !this.relativeTarget) {
                                let t = this.getClosestProjectingParent();
                                t && t.layout && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, T().ge)(), this.relativeTargetOrigin = (0, T().ge)(), (0, i(255120).jA)(this.relativeTargetOrigin, this.layout.layoutBox, t.layout.layoutBox), p(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                            }
                            if (this.relativeTarget || this.targetDelta) {
                                if (this.target || (this.target = (0, T().ge)(), this.targetWithTransforms = (0, T().ge)()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), (0, i(255120).N)(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : p(this.target, this.layout.layoutBox), (0, g().o4)(this.target, this.targetDelta)) : p(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
                                    this.attemptToResolveRelativeTarget = !1;
                                    let t = this.getClosestProjectingParent();
                                    t && !!t.resumingFrom == !!this.resumingFrom && !t.options.layoutScroll && t.target && 1 !== this.animationProgress ? (this.relativeParent = t, this.forceRelativeParentToResolveTarget(), this.relativeTarget = (0, T().ge)(), this.relativeTargetOrigin = (0, T().ge)(), (0, i(255120).jA)(this.relativeTargetOrigin, this.target, t.target), p(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                                }
                                M.resolvedTargetDeltas++
                            }
                        }
                    }
                    getClosestProjectingParent() {
                        if (!(!this.parent || (0, B().vk)(this.parent.latestValues) || (0, B().vF)(this.parent.latestValues)))
                            if (this.parent.isProjecting()) return this.parent;
                            else return this.parent.getClosestProjectingParent()
                    }
                    isProjecting() {
                        return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
                    }
                    calcProjection() {
                        var t;
                        let e = this.getLead(),
                            s = !!this.resumingFrom || this !== e,
                            o = !0;
                        if ((this.isProjectionDirty || (null == (t = this.parent) ? void 0 : t.isProjectionDirty)) && (o = !1), s && (this.isSharedProjectionDirty || this.isTransformDirty) && (o = !1), this.resolvedRelativeTargetAt === i(610104).uv.timestamp && (o = !1), o) return;
                        let {
                            layout: r,
                            layoutId: n
                        } = this.options;
                        if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(r || n)) return;
                        p(this.layoutCorrected, this.layout.layoutBox);
                        let a = this.treeScale.x,
                            l = this.treeScale.y;
                        (0, g().OU)(this.layoutCorrected, this.treeScale, this.path, s), e.layout && !e.target && (1 !== this.treeScale.x || 1 !== this.treeScale.y) && (e.target = e.layout.layoutBox);
                        let {
                            target: h
                        } = e;
                        if (!h) {
                            this.projectionTransform && (this.projectionDelta = (0, T().xU)(), this.projectionTransform = "none", this.scheduleRender());
                            return
                        }
                        this.projectionDelta || (this.projectionDelta = (0, T().xU)(), this.projectionDeltaWithTransform = (0, T().xU)());
                        let u = this.projectionTransform;
                        (0, i(255120).vb)(this.projectionDelta, this.layoutCorrected, h, this.latestValues), this.projectionTransform = L(this.projectionDelta, this.treeScale), (this.projectionTransform !== u || this.treeScale.x !== a || this.treeScale.y !== l) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", h)), M.recalculatedProjection++
                    }
                    hide() {
                        this.isVisible = !1
                    }
                    show() {
                        this.isVisible = !0
                    }
                    scheduleRender(t = !0) {
                        if (this.options.scheduleRender && this.options.scheduleRender(), t) {
                            let t = this.getStack();
                            t && t.scheduleRender()
                        }
                        this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
                    }
                    setAnimationOrigin(t, e = !1) {
                        let c, m = this.snapshot,
                            g = m ? m.latestValues : {},
                            v = { ...this.latestValues
                            },
                            y = (0, T().xU)();
                        this.relativeParent && this.relativeParent.options.layoutRoot || (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !e;
                        let f = (0, T().ge)(),
                            x = (m ? m.source : void 0) !== (this.layout ? this.layout.source : void 0),
                            P = this.getStack(),
                            D = !P || P.members.length <= 1,
                            j = !!(x && !D && !0 === this.options.crossfade && !this.path.some(K));
                        this.animationProgress = 0, this.mixTargetDelta = e => {
                            let m = e / 1e3;
                            if (q(y.x, t.x, m), q(y.y, t.y, m), this.setTargetDelta(y), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
                                var P, A, E, R, S, L;
                                (0, i(255120).jA)(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), E = this.relativeTarget, R = this.relativeTargetOrigin, S = f, L = m, Y(E.x, R.x, S.x, L), Y(E.y, R.y, S.y, L), c && (P = this.relativeTarget, A = c, P.x.min === A.x.min && P.x.max === A.x.max && P.y.min === A.y.min && P.y.max === A.y.max) && (this.isProjectionDirty = !1), c || (c = (0, T().ge)()), p(c, this.relativeTarget)
                            }
                            x && (this.animationValues = v, function(t, e, i, c, m, p) {
                                m ? (t.opacity = (0, s().j)(0, void 0 !== i.opacity ? i.opacity : 1, u(c)), t.opacityExit = (0, s().j)(void 0 !== e.opacity ? e.opacity : 1, 0, d(c))) : p && (t.opacity = (0, s().j)(void 0 !== e.opacity ? e.opacity : 1, void 0 !== i.opacity ? i.opacity : 1, c));
                                for (let u = 0; u < n; u++) {
                                    let n = `border${r[u]}Radius`,
                                        d = h(e, n),
                                        m = h(i, n);
                                    (void 0 !== d || void 0 !== m) && (d || (d = 0), m || (m = 0), 0 === d || 0 === m || l(d) === l(m) ? (t[n] = Math.max((0, s().j)(a(d), a(m), c), 0), (o().KN.test(m) || o().KN.test(d)) && (t[n] += "%")) : t[n] = m)
                                }(e.rotate || i.rotate) && (t.rotate = (0, s().j)(e.rotate || 0, i.rotate || 0, c))
                            }(v, g, this.latestValues, m, j, D)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = m
                        }, this.mixTargetDelta(1e3 * !!this.options.layoutRoot)
                    }
                    startAnimation(t) {
                        this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && ((0, i(610104).WG)(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = i(610104).Gt.update(() => {
                            i(450775).w.hasAnimatedSinceResize = !0, this.currentAnimation = (0, i(546331).z)(0, 1e3, { ...t,
                                onUpdate: e => {
                                    this.mixTargetDelta(e), t.onUpdate && t.onUpdate(e)
                                },
                                onComplete: () => {
                                    t.onComplete && t.onComplete(), this.completeAnimation()
                                }
                            }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0
                        })
                    }
                    completeAnimation() {
                        this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
                        let t = this.getStack();
                        t && t.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete")
                    }
                    finishAnimation() {
                        this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(1e3), this.currentAnimation.stop()), this.completeAnimation()
                    }
                    applyTransformsToTarget() {
                        let t = this.getLead(),
                            {
                                targetWithTransforms: e,
                                target: s,
                                layout: o,
                                latestValues: r
                            } = t;
                        if (e && s && o) {
                            if (this !== t && this.layout && o && te(this.options.animationType, this.layout.layoutBox, o.layoutBox)) {
                                s = this.target || (0, T().ge)();
                                let e = (0, i(255120).CQ)(this.layout.layoutBox.x);
                                s.x.min = t.target.x.min, s.x.max = s.x.min + e;
                                let o = (0, i(255120).CQ)(this.layout.layoutBox.y);
                                s.y.min = t.target.y.min, s.y.max = s.y.min + o
                            }
                            p(e, s), (0, g().Ww)(e, r), (0, i(255120).vb)(this.projectionDeltaWithTransform, this.layoutCorrected, e, r)
                        }
                    }
                    registerSharedNode(t, e) {
                        this.sharedNodes.has(t) || this.sharedNodes.set(t, new R), this.sharedNodes.get(t).add(e);
                        let i = e.options.initialPromotionConfig;
                        e.promote({
                            transition: i ? i.transition : void 0,
                            preserveFollowOpacity: i && i.shouldPreserveFollowOpacity ? i.shouldPreserveFollowOpacity(e) : void 0
                        })
                    }
                    isLead() {
                        let t = this.getStack();
                        return !t || t.lead === this
                    }
                    getLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e && (null == (t = this.getStack()) ? void 0 : t.lead) || this
                    }
                    getPrevLead() {
                        var t;
                        let {
                            layoutId: e
                        } = this.options;
                        return e ? null == (t = this.getStack()) ? void 0 : t.prevLead : void 0
                    }
                    getStack() {
                        let {
                            layoutId: t
                        } = this.options;
                        if (t) return this.root.sharedNodes.get(t)
                    }
                    promote({
                        needsReset: t,
                        transition: e,
                        preserveFollowOpacity: i
                    } = {}) {
                        let s = this.getStack();
                        s && s.promote(this, i), t && (this.projectionDelta = void 0, this.needsReset = !0), e && this.setOptions({
                            transition: e
                        })
                    }
                    relegate() {
                        let t = this.getStack();
                        return !!t && t.relegate(this)
                    }
                    resetRotation() {
                        let {
                            visualElement: t
                        } = this.options;
                        if (!t) return;
                        let e = !1,
                            {
                                latestValues: i
                            } = t;
                        if ((i.rotate || i.rotateX || i.rotateY || i.rotateZ) && (e = !0), !e) return;
                        let s = {};
                        for (let e = 0; e < b.length; e++) {
                            let o = "rotate" + b[e];
                            i[o] && (s[o] = i[o], t.setStaticValue(o, 0))
                        }
                        for (let e in t.render(), s) t.setStaticValue(e, s[e]);
                        t.scheduleRender()
                    }
                    getProjectionStyles(t) {
                        var e, s;
                        if (!this.instance || this.isSVG) return;
                        if (!this.isVisible) return w;
                        let o = {
                                visibility: ""
                            },
                            r = this.getTransformTemplate();
                        if (this.needsReset) return this.needsReset = !1, o.opacity = "", o.pointerEvents = (0, i(814322).u)(null == t ? void 0 : t.pointerEvents) || "", o.transform = r ? r(this.latestValues, "") : "none", o;
                        let n = this.getLead();
                        if (!this.projectionDelta || !this.layout || !n.target) {
                            let e = {};
                            return this.options.layoutId && (e.opacity = void 0 !== this.latestValues.opacity ? this.latestValues.opacity : 1, e.pointerEvents = (0, i(814322).u)(null == t ? void 0 : t.pointerEvents) || ""), this.hasProjected && !(0, B().HD)(this.latestValues) && (e.transform = r ? r({}, "") : "none", this.hasProjected = !1), e
                        }
                        let a = n.animationValues || n.latestValues;
                        this.applyTransformsToTarget(), o.transform = L(this.projectionDeltaWithTransform, this.treeScale, a), r && (o.transform = r(a, o.transform));
                        let {
                            x: l,
                            y: h
                        } = this.projectionDelta;
                        for (let t in o.transformOrigin = `${100*l.origin}% ${100*h.origin}% 0`, n.animationValues ? o.opacity = n === this ? null != (s = null != (e = a.opacity) ? e : this.latestValues.opacity) ? s : 1 : this.preserveOpacity ? this.latestValues.opacity : a.opacityExit : o.opacity = n === this ? void 0 !== a.opacity ? a.opacity : "" : void 0 !== a.opacityExit ? a.opacityExit : 0, S().H) {
                            if (void 0 === a[t]) continue;
                            let {
                                correct: e,
                                applyTo: i
                            } = S().H[t], s = "none" === o.transform ? a[t] : e(a[t], n);
                            if (i) {
                                let t = i.length;
                                for (let e = 0; e < t; e++) o[i[e]] = s
                            } else o[t] = s
                        }
                        return this.options.layoutId && (o.pointerEvents = n === this ? (0, i(814322).u)(null == t ? void 0 : t.pointerEvents) || "" : "none"), o
                    }
                    clearSnapshot() {
                        this.resumeFrom = this.snapshot = void 0
                    }
                    resetTree() {
                        this.root.nodes.forEach(t => {
                            var e;
                            return null == (e = t.currentAnimation) ? void 0 : e.stop()
                        }), this.root.nodes.forEach(N), this.root.sharedNodes.clear()
                    }
                }
            }

            function U(t) {
                t.updateLayout()
            }

            function k(t) {
                var e;
                let s = (null == (e = t.resumeFrom) ? void 0 : e.snapshot) || t.snapshot;
                if (t.isLead() && t.layout && s && t.hasListeners("didUpdate")) {
                    let {
                        layoutBox: e,
                        measuredBox: o
                    } = t.layout, {
                        animationType: r
                    } = t.options, n = s.source !== t.layout.source;
                    "size" === r ? (0, i(875338).X)(t => {
                        let o = n ? s.measuredBox[t] : s.layoutBox[t],
                            r = (0, i(255120).CQ)(o);
                        o.min = e[t].min, o.max = o.min + r
                    }) : te(r, s.layoutBox, e) && (0, i(875338).X)(o => {
                        let r = n ? s.measuredBox[o] : s.layoutBox[o],
                            a = (0, i(255120).CQ)(e[o]);
                        r.max = r.min + a, t.relativeTarget && !t.currentAnimation && (t.isProjectionDirty = !0, t.relativeTarget[o].max = t.relativeTarget[o].min + a)
                    });
                    let a = (0, T().xU)();
                    (0, i(255120).vb)(a, e, s.layoutBox);
                    let l = (0, T().xU)();
                    n ? (0, i(255120).vb)(l, t.applyTransform(o, !0), s.measuredBox) : (0, i(255120).vb)(l, e, s.layoutBox);
                    let h = !j(a),
                        u = !1;
                    if (!t.resumeFrom) {
                        let o = t.getClosestProjectingParent();
                        if (o && !o.resumeFrom) {
                            let {
                                snapshot: r,
                                layout: n
                            } = o;
                            if (r && n) {
                                let a = (0, T().ge)();
                                (0, i(255120).jA)(a, s.layoutBox, r.layoutBox);
                                let l = (0, T().ge)();
                                (0, i(255120).jA)(l, e, n.layoutBox), A(a, l) || (u = !0), o.options.layoutRoot && (t.relativeTarget = l, t.relativeTargetOrigin = a, t.relativeParent = o)
                            }
                        }
                    }
                    t.notifyListeners("didUpdate", {
                        layout: e,
                        snapshot: s,
                        delta: l,
                        layoutDelta: a,
                        hasLayoutChanged: h,
                        hasRelativeTargetChanged: u
                    })
                } else if (t.isLead()) {
                    let {
                        onExitComplete: e
                    } = t.options;
                    e && e()
                }
                t.options.transition = void 0
            }

            function F(t) {
                M.totalNodes++, t.parent && (t.isProjecting() || (t.isProjectionDirty = t.parent.isProjectionDirty), t.isSharedProjectionDirty || (t.isSharedProjectionDirty = !!(t.isProjectionDirty || t.parent.isProjectionDirty || t.parent.isSharedProjectionDirty)), t.isTransformDirty || (t.isTransformDirty = t.parent.isTransformDirty))
            }

            function G(t) {
                t.isProjectionDirty = t.isSharedProjectionDirty = t.isTransformDirty = !1
            }

            function O(t) {
                t.clearSnapshot()
            }

            function N(t) {
                t.clearMeasurements()
            }

            function X(t) {
                t.isLayoutDirty = !1
            }

            function W(t) {
                let {
                    visualElement: e
                } = t.options;
                e && e.getProps().onBeforeLayoutMeasure && e.notify("BeforeLayoutMeasure"), t.resetTransform()
            }

            function H(t) {
                t.finishAnimation(), t.targetDelta = t.relativeTarget = t.target = void 0, t.isProjectionDirty = !0
            }

            function Q(t) {
                t.resolveTargetDelta()
            }

            function I(t) {
                t.calcProjection()
            }

            function $(t) {
                t.resetRotation()
            }

            function z(t) {
                t.removeLeadSnapshot()
            }

            function q(t, e, i) {
                t.translate = (0, s().j)(e.translate, 0, i), t.scale = (0, s().j)(e.scale, 1, i), t.origin = e.origin, t.originPoint = e.originPoint
            }

            function Y(t, e, i, o) {
                t.min = (0, s().j)(e.min, i.min, o), t.max = (0, s().j)(e.max, i.max, o)
            }

            function K(t) {
                return t.animationValues && void 0 !== t.animationValues.opacityExit
            }
            let Z = {
                    duration: .45,
                    ease: [.4, 0, .1, 1]
                },
                _ = t => "u" > typeof navigator && navigator.userAgent.toLowerCase().includes(t),
                J = _("applewebkit/") && !_("chrome/") ? Math.round : i(803659).l;

            function tt(t) {
                t.min = J(t.min), t.max = J(t.max)
            }

            function te(t, e, s) {
                return "position" === t || "preserve-aspect" === t && !(0, i(255120).HQ)(E(e), E(s), .2)
            }
        },
        450775: (t, e, i) => {
            i.d(e, {
                w: () => s
            });
            let s = {
                hasAnimatedSinceResize: !0,
                hasEverUpdated: !1
            }
        },
        508656: (t, e, i) => {
            i.d(e, {
                B: () => s
            });
            let s = (0, i(411784).u0)({
                attachResizeListener: (t, e) => (0, i(663998).k)(t, "resize", e),
                measureScroll: () => ({
                    x: document.documentElement.scrollLeft || document.body.scrollLeft,
                    y: document.documentElement.scrollTop || document.body.scrollTop
                }),
                checkIsScrollRoot: () => !0
            })
        },
        546331: (t, e, i) => {
            i.d(e, {
                z: () => s
            });

            function s(t, e, s) {
                let o = (0, i(469896).S)(t) ? t : (0, i(924785).OQ)(t);
                return o.start((0, i(219189).f)("", o, e, s)), o.animation
            }
        },
        573294: (t, e, i) => {
            i.d(e, {
                Y: () => o
            });
            let s = (t, e) => t.depth - e.depth;
            class o {
                constructor() {
                    this.children = [], this.isDirty = !1
                }
                add(t) {
                    (0, i(132358).Kq)(this.children, t), this.isDirty = !0
                }
                remove(t) {
                    (0, i(132358).Ai)(this.children, t), this.isDirty = !0
                }
                forEach(t) {
                    this.isDirty && this.children.sort(s), this.isDirty = !1, this.children.forEach(t)
                }
            }
        },
        866528: (t, e, i) => {
            i.d(e, {
                c: () => s
            });

            function s(t, e) {
                let s = performance.now(),
                    o = ({
                        timestamp: r
                    }) => {
                        let n = r - s;
                        n >= e && ((0, i(610104).WG)(o), t(n - e))
                    };
                return i(610104).Gt.read(o, !0), () => (0, i(610104).WG)(o)
            }
        },
        875338: (t, e, i) => {
            i.d(e, {
                X: () => s
            });

            function s(t) {
                return [t("x"), t("y")]
            }
        },
        945632: (t, e, i) => {
            i.d(e, {
                $: () => T
            });
            var s = () => i(603044),
                o = () => i(374833);
            class r {
                constructor(t, e, {
                    transformPagePoint: s,
                    contextWindow: o,
                    dragSnapToOrigin: r = !1
                } = {}) {
                    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
                            if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let t = l(this.lastMoveEventInfo, this.history),
                                e = null !== this.startEvent,
                                s = (0, i(215746).w)(t.offset, {
                                    x: 0,
                                    y: 0
                                }) >= 3;
                            if (!e && !s) return;
                            let {
                                point: o
                            } = t, {
                                timestamp: r
                            } = i(610104).uv;
                            this.history.push({ ...o,
                                timestamp: r
                            });
                            let {
                                onStart: n,
                                onMove: a
                            } = this.handlers;
                            e || (n && n(this.lastMoveEvent, t), this.startEvent = this.lastMoveEvent), a && a(this.lastMoveEvent, t)
                        }, this.handlePointerMove = (t, e) => {
                            this.lastMoveEvent = t, this.lastMoveEventInfo = n(e, this.transformPagePoint), i(610104).Gt.update(this.updatePoint, !0)
                        }, this.handlePointerUp = (t, e) => {
                            this.end();
                            let {
                                onEnd: i,
                                onSessionEnd: s,
                                resumeAnimation: o
                            } = this.handlers;
                            if (this.dragSnapToOrigin && o && o(), !(this.lastMoveEvent && this.lastMoveEventInfo)) return;
                            let r = l("pointercancel" === t.type ? this.lastMoveEventInfo : n(e, this.transformPagePoint), this.history);
                            this.startEvent && i && i(t, r), s && s(t, r)
                        }, !(0, i(247862).M)(t)) return;
                    this.dragSnapToOrigin = r, this.handlers = e, this.transformPagePoint = s, this.contextWindow = o || window;
                    const a = n((0, i(671912).e)(t), this.transformPagePoint),
                        {
                            point: h
                        } = a,
                        {
                            timestamp: u
                        } = i(610104).uv;
                    this.history = [{ ...h,
                        timestamp: u
                    }];
                    const {
                        onSessionStart: d
                    } = e;
                    d && d(t, l(a, this.history)), this.removeListeners = (0, i(991339).F)((0, i(992901).h)(this.contextWindow, "pointermove", this.handlePointerMove), (0, i(992901).h)(this.contextWindow, "pointerup", this.handlePointerUp), (0, i(992901).h)(this.contextWindow, "pointercancel", this.handlePointerUp))
                }
                updateHandlers(t) {
                    this.handlers = t
                }
                end() {
                    this.removeListeners && this.removeListeners(), (0, i(610104).WG)(this.updatePoint)
                }
            }

            function n(t, e) {
                return e ? {
                    point: e(t.point)
                } : t
            }

            function a(t, e) {
                return {
                    x: t.x - e.x,
                    y: t.y - e.y
                }
            }

            function l({
                point: t
            }, e) {
                return {
                    point: t,
                    delta: a(t, h(e)),
                    offset: a(t, e[0]),
                    velocity: function(t) {
                        if (t.length < 2) return {
                            x: 0,
                            y: 0
                        };
                        let e = t.length - 1,
                            i = null,
                            s = h(t);
                        for (; e >= 0 && (i = t[e], !(s.timestamp - i.timestamp > (0, o().f)(.1)));) e--;
                        if (!i) return {
                            x: 0,
                            y: 0
                        };
                        let r = (0, o().X)(s.timestamp - i.timestamp);
                        if (0 === r) return {
                            x: 0,
                            y: 0
                        };
                        let n = {
                            x: (s.x - i.x) / r,
                            y: (s.y - i.y) / r
                        };
                        return n.x === 1 / 0 && (n.x = 0), n.y === 1 / 0 && (n.y = 0), n
                    }(e)
                }
            }

            function h(t) {
                return t[t.length - 1]
            }

            function u(t, e, i) {
                return {
                    min: void 0 !== e ? t.min + e : void 0,
                    max: void 0 !== i ? t.max + i - (t.max - t.min) : void 0
                }
            }

            function d(t, e) {
                let i = e.min - t.min,
                    s = e.max - t.max;
                return e.max - e.min < t.max - t.min && ([i, s] = [s, i]), {
                    min: i,
                    max: s
                }
            }

            function c(t, e, i) {
                return {
                    min: m(t, e),
                    max: m(t, i)
                }
            }

            function m(t, e) {
                return "number" == typeof t ? t : t[e] || 0
            }
            let p = ({
                    current: t
                }) => t ? t.ownerDocument.defaultView : null,
                g = new WeakMap;
            class v {
                constructor(t) {
                    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = {
                        x: 0,
                        y: 0
                    }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = (0, i(554106).ge)(), this.visualElement = t
                }
                start(t, {
                    snapToCursor: e = !1
                } = {}) {
                    let {
                        presenceContext: s
                    } = this.visualElement;
                    if (s && !1 === s.isPresent) return;
                    let o = t => {
                            let {
                                dragSnapToOrigin: s
                            } = this.getProps();
                            s ? this.pauseAnimation() : this.stopAnimation(), e && this.snapToCursor((0, i(671912).e)(t, "page").point)
                        },
                        n = (t, e) => {
                            let {
                                drag: s,
                                dragPropagation: o,
                                onDragStart: r
                            } = this.getProps();
                            if (s && !o && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = (0, i(317890).nQ)(s), !this.openGlobalLock)) return;
                            this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), (0, i(875338).X)(t => {
                                let e = this.getAxisMotionValue(t).get() || 0;
                                if (i(155269).KN.test(e)) {
                                    let {
                                        projection: s
                                    } = this.visualElement;
                                    if (s && s.layout) {
                                        let o = s.layout.layoutBox[t];
                                        o && (e = (0, i(255120).CQ)(o) * (parseFloat(e) / 100))
                                    }
                                }
                                this.originPoint[t] = e
                            }), r && i(610104).Gt.update(() => r(t, e), !1, !0);
                            let {
                                animationState: n
                            } = this.visualElement;
                            n && n.setActive("whileDrag", !0)
                        },
                        a = (t, e) => {
                            let {
                                dragPropagation: i,
                                dragDirectionLock: s,
                                onDirectionLock: o,
                                onDrag: r
                            } = this.getProps();
                            if (!i && !this.openGlobalLock) return;
                            let {
                                offset: n
                            } = e;
                            if (s && null === this.currentDirection) {
                                this.currentDirection = function(t, e = 10) {
                                    let i = null;
                                    return Math.abs(t.y) > e ? i = "y" : Math.abs(t.x) > e && (i = "x"), i
                                }(n), null !== this.currentDirection && o && o(this.currentDirection);
                                return
                            }
                            this.updateAxis("x", e.point, n), this.updateAxis("y", e.point, n), this.visualElement.render(), r && r(t, e)
                        },
                        l = (t, e) => this.stop(t, e),
                        h = () => (0, i(875338).X)(t => {
                            var e;
                            return "paused" === this.getAnimationState(t) && (null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.play())
                        }),
                        {
                            dragSnapToOrigin: u
                        } = this.getProps();
                    this.panSession = new r(t, {
                        onSessionStart: o,
                        onStart: n,
                        onMove: a,
                        onSessionEnd: l,
                        resumeAnimation: h
                    }, {
                        transformPagePoint: this.visualElement.getTransformPagePoint(),
                        dragSnapToOrigin: u,
                        contextWindow: p(this.visualElement)
                    })
                }
                stop(t, e) {
                    let s = this.isDragging;
                    if (this.cancel(), !s) return;
                    let {
                        velocity: o
                    } = e;
                    this.startAnimation(o);
                    let {
                        onDragEnd: r
                    } = this.getProps();
                    r && i(610104).Gt.update(() => r(t, e))
                }
                cancel() {
                    this.isDragging = !1;
                    let {
                        projection: t,
                        animationState: e
                    } = this.visualElement;
                    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
                    let {
                        dragPropagation: i
                    } = this.getProps();
                    !i && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), e && e.setActive("whileDrag", !1)
                }
                updateAxis(t, e, s) {
                    let {
                        drag: o
                    } = this.getProps();
                    if (!s || !y(t, o, this.currentDirection)) return;
                    let r = this.getAxisMotionValue(t),
                        n = this.originPoint[t] + s[t];
                    this.constraints && this.constraints[t] && (n = function(t, {
                        min: e,
                        max: s
                    }, o) {
                        return void 0 !== e && t < e ? t = o ? (0, i(102839).j)(e, t, o.min) : Math.max(t, e) : void 0 !== s && t > s && (t = o ? (0, i(102839).j)(s, t, o.max) : Math.min(t, s)), t
                    }(n, this.constraints[t], this.elastic[t])), r.set(n)
                }
                resolveConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        dragElastic: s
                    } = this.getProps(), o = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : null == (t = this.visualElement.projection) ? void 0 : t.layout, r = this.constraints;
                    e && (0, i(583953).X)(e) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : e && o ? this.constraints = function(t, {
                        top: e,
                        left: i,
                        bottom: s,
                        right: o
                    }) {
                        return {
                            x: u(t.x, i, o),
                            y: u(t.y, e, s)
                        }
                    }(o.layoutBox, e) : this.constraints = !1, this.elastic = function(t = .35) {
                        return !1 === t ? t = 0 : !0 === t && (t = .35), {
                            x: c(t, "left", "right"),
                            y: c(t, "top", "bottom")
                        }
                    }(s), r !== this.constraints && o && this.constraints && !this.hasMutatedConstraints && (0, i(875338).X)(t => {
                        var e, i;
                        let s;
                        this.getAxisMotionValue(t) && (this.constraints[t] = (e = o.layoutBox[t], i = this.constraints[t], s = {}, void 0 !== i.min && (s.min = i.min - e.min), void 0 !== i.max && (s.max = i.max - e.min), s))
                    })
                }
                resolveRefConstraints() {
                    var t;
                    let {
                        dragConstraints: e,
                        onMeasureDragConstraints: s
                    } = this.getProps();
                    if (!e || !(0, i(583953).X)(e)) return !1;
                    let o = e.current;
                    (0, i(285238).V)(null !== o, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
                    let {
                        projection: r
                    } = this.visualElement;
                    if (!r || !r.layout) return !1;
                    let n = (0, i(494805).L)(o, r.root, this.visualElement.getTransformPagePoint()),
                        a = (t = r.layout.layoutBox, {
                            x: d(t.x, n.x),
                            y: d(t.y, n.y)
                        });
                    if (s) {
                        let t = s((0, i(638448).pA)(a));
                        this.hasMutatedConstraints = !!t, t && (a = (0, i(638448).FY)(t))
                    }
                    return a
                }
                startAnimation(t) {
                    let {
                        drag: e,
                        dragMomentum: s,
                        dragElastic: o,
                        dragTransition: r,
                        dragSnapToOrigin: n,
                        onDragTransitionEnd: a
                    } = this.getProps(), l = this.constraints || {};
                    return Promise.all((0, i(875338).X)(i => {
                        if (!y(i, e, this.currentDirection)) return;
                        let a = l && l[i] || {};
                        n && (a = {
                            min: 0,
                            max: 0
                        });
                        let h = {
                            type: "inertia",
                            velocity: s ? t[i] : 0,
                            bounceStiffness: o ? 200 : 1e6,
                            bounceDamping: o ? 40 : 1e7,
                            timeConstant: 750,
                            restDelta: 1,
                            restSpeed: 10,
                            ...r,
                            ...a
                        };
                        return this.startAxisValueAnimation(i, h)
                    })).then(a)
                }
                startAxisValueAnimation(t, e) {
                    let s = this.getAxisMotionValue(t);
                    return s.start((0, i(219189).f)(t, s, 0, e))
                }
                stopAnimation() {
                    (0, i(875338).X)(t => this.getAxisMotionValue(t).stop())
                }
                pauseAnimation() {
                    (0, i(875338).X)(t => {
                        var e;
                        return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.pause()
                    })
                }
                getAnimationState(t) {
                    var e;
                    return null == (e = this.getAxisMotionValue(t).animation) ? void 0 : e.state
                }
                getAxisMotionValue(t) {
                    let e = "_drag" + t.toUpperCase(),
                        i = this.visualElement.getProps();
                    return i[e] || this.visualElement.getValue(t, (i.initial ? i.initial[t] : void 0) || 0)
                }
                snapToCursor(t) {
                    (0, i(875338).X)(e => {
                        let {
                            drag: s
                        } = this.getProps();
                        if (!y(e, s, this.currentDirection)) return;
                        let {
                            projection: o
                        } = this.visualElement, r = this.getAxisMotionValue(e);
                        if (o && o.layout) {
                            let {
                                min: s,
                                max: n
                            } = o.layout.layoutBox[e];
                            r.set(t[e] - (0, i(102839).j)(s, n, .5))
                        }
                    })
                }
                scalePositionWithinConstraints() {
                    if (!this.visualElement.current) return;
                    let {
                        drag: t,
                        dragConstraints: e
                    } = this.getProps(), {
                        projection: s
                    } = this.visualElement;
                    if (!(0, i(583953).X)(e) || !s || !this.constraints) return;
                    this.stopAnimation();
                    let o = {
                        x: 0,
                        y: 0
                    };
                    (0, i(875338).X)(t => {
                        let e = this.getAxisMotionValue(t);
                        if (e) {
                            var s, r;
                            let n, a, l, h = e.get();
                            o[t] = (s = {
                                min: h,
                                max: h
                            }, r = this.constraints[t], n = .5, a = (0, i(255120).CQ)(s), (l = (0, i(255120).CQ)(r)) > a ? n = (0, i(927170).q)(r.min, r.max - a, s.min) : a > l && (n = (0, i(927170).q)(s.min, s.max - l, r.min)), (0, i(442464).q)(0, 1, n))
                        }
                    });
                    let {
                        transformTemplate: r
                    } = this.visualElement.getProps();
                    this.visualElement.current.style.transform = r ? r({}, "") : "none", s.root && s.root.updateScroll(), s.updateLayout(), this.resolveConstraints(), (0, i(875338).X)(e => {
                        if (!y(e, t, null)) return;
                        let s = this.getAxisMotionValue(e),
                            {
                                min: r,
                                max: n
                            } = this.constraints[e];
                        s.set((0, i(102839).j)(r, n, o[e]))
                    })
                }
                addListeners() {
                    if (!this.visualElement.current) return;
                    g.set(this.visualElement, this);
                    let t = this.visualElement.current,
                        e = (0, i(992901).h)(t, "pointerdown", t => {
                            let {
                                drag: e,
                                dragListener: i = !0
                            } = this.getProps();
                            e && i && this.start(t)
                        }),
                        s = () => {
                            let {
                                dragConstraints: t
                            } = this.getProps();
                            (0, i(583953).X)(t) && (this.constraints = this.resolveRefConstraints())
                        },
                        {
                            projection: o
                        } = this.visualElement,
                        r = o.addEventListener("measure", s);
                    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), s();
                    let n = (0, i(663998).k)(window, "resize", () => this.scalePositionWithinConstraints()),
                        a = o.addEventListener("didUpdate", ({
                            delta: t,
                            hasLayoutChanged: e
                        }) => {
                            this.isDragging && e && ((0, i(875338).X)(e => {
                                let i = this.getAxisMotionValue(e);
                                i && (this.originPoint[e] += t[e].translate, i.set(i.get() + t[e].translate))
                            }), this.visualElement.render())
                        });
                    return () => {
                        n(), e(), r(), a && a()
                    }
                }
                getProps() {
                    let t = this.visualElement.getProps(),
                        {
                            drag: e = !1,
                            dragDirectionLock: i = !1,
                            dragPropagation: s = !1,
                            dragConstraints: o = !1,
                            dragElastic: r = .35,
                            dragMomentum: n = !0
                        } = t;
                    return { ...t,
                        drag: e,
                        dragDirectionLock: i,
                        dragPropagation: s,
                        dragConstraints: o,
                        dragElastic: r,
                        dragMomentum: n
                    }
                }
            }

            function y(t, e, i) {
                return (!0 === e || e === t) && (null === i || i === t)
            }
            class f extends s().X {
                constructor(t) {
                    super(t), this.removeGroupControls = i(803659).l, this.removeListeners = i(803659).l, this.controls = new v(t)
                }
                mount() {
                    let {
                        dragControls: t
                    } = this.node.getProps();
                    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || i(803659).l
                }
                unmount() {
                    this.removeGroupControls(), this.removeListeners()
                }
            }
            let x = t => (e, s) => {
                t && i(610104).Gt.update(() => t(e, s))
            };
            class P extends s().X {
                constructor() {
                    super(...arguments), this.removePointerDownListener = i(803659).l
                }
                onPointerDown(t) {
                    this.session = new r(t, this.createPanHandlers(), {
                        transformPagePoint: this.node.getTransformPagePoint(),
                        contextWindow: p(this.node)
                    })
                }
                createPanHandlers() {
                    let {
                        onPanSessionStart: t,
                        onPanStart: e,
                        onPan: s,
                        onPanEnd: o
                    } = this.node.getProps();
                    return {
                        onSessionStart: x(t),
                        onStart: x(e),
                        onMove: s,
                        onEnd: (t, e) => {
                            delete this.session, o && i(610104).Gt.update(() => o(t, e))
                        }
                    }
                }
                mount() {
                    this.removePointerDownListener = (0, i(992901).h)(this.node.current, "pointerdown", t => this.onPointerDown(t))
                }
                update() {
                    this.session && this.session.updateHandlers(this.createPanHandlers())
                }
                unmount() {
                    this.removePointerDownListener(), this.session && this.session.end()
                }
            }
            let T = {
                pan: {
                    Feature: P
                },
                drag: {
                    Feature: f,
                    ProjectionNode: i(506768).P,
                    MeasureLayout: i(80152).$
                }
            }
        },
        961820: (t, e, i) => {
            i.d(e, {
                Z: () => s
            });
            let s = {
                layout: {
                    ProjectionNode: i(506768).P,
                    MeasureLayout: i(80152).$
                }
            }
        }
    }
]);