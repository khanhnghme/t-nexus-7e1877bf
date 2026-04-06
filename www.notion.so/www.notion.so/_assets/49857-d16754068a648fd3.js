"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [49857], {
        75190: (e, t, r) => {
            r.d(t, {
                A: () => c
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    start: "flex-start",
                    center: "center",
                    end: "flex-end"
                },
                o = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                s = {
                    kVAEAm: "x10l6tqk",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    kzqmXN: "xh8yej3",
                    kZKoxP: "x5yr21d",
                    k1xSpc: "x78zum5",
                    kXwgrk: "xdt5ytf",
                    $$css: !0
                },
                l = {
                    kVAEAm: "x1n2onr6",
                    $$css: !0
                },
                c = function({
                    style: e,
                    origin: t,
                    placement: a,
                    alignment: c,
                    childrenWrapStyle: d,
                    children: h
                }) {
                    let x = (0, n.useMemo)(() => {
                            let {
                                alignItems: e,
                                justifyContent: t
                            } = u(a, c);
                            return {
                                alignItems: e,
                                justifyContent: t
                            }
                        }, [a, c]),
                        f = (0, n.useMemo)(() => (function(e, t) {
                            let {
                                top: r,
                                insetInlineStart: n,
                                insetInlineEnd: i,
                                bottom: a
                            } = u(e, t), o = {};
                            return r && (o.top = r), a && (o.bottom = a), n && (o.insetInlineStart = n), i && (o.insetInlineEnd = i), o
                        })(a, c), [a, c]);
                    return (0, i.jsxs)("div", { ...r(952687).A.props(o, e),
                        children: [t, (0, i.jsx)("div", { ...r(952687).A.props(s, x),
                            children: (0, i.jsx)("div", { ...r(952687).A.props(l, f, d),
                                children: h
                            })
                        })]
                    })
                };

            function u(e, t) {
                let n, i, o, s, l, c, u = r(627179).pN(e) ? "bottom" : e,
                    d = r(627179).pN(t) ? "center" : t;
                return "top" === u ? (c = "flex-end", i = "100%", l = a[d]) : "bottom" === u ? (c = "flex-start", n = "100%", l = a[d]) : "left" === u ? (c = a[d], s = "100%", l = "flex-end") : "right" === u ? (c = a[d], o = "100%", l = "flex-start") : "center" === u && (c = "center", l = a[d]), {
                    alignItems: l,
                    justifyContent: c,
                    top: n,
                    insetInlineStart: o,
                    insetInlineEnd: s,
                    bottom: i
                }
            }
        },
        127057: (e, t, r) => {
            function n(e) {
                let {
                    viewportAdditionalBottomPadding: t,
                    viewportPadding: n
                } = e, a = (0, r(187415).A)(), o = r(195304).fT(a, -(n ? ? 12));
                0 !== t && (o = new(r(195304)).z8({
                        x: o.x,
                        y: o.y,
                        width: o.width,
                        height: o.height - t
                    })),
                    function e(t) {
                        let {
                            store: n,
                            placementToOrigin: a,
                            alignmentToOrigin: o,
                            popupRect: s,
                            originRect: l,
                            viewportRect: c,
                            repositionedPlacement: u,
                            disableFlippingPlacement: d,
                            popupRectBottomPadding: h
                        } = t, x = i({
                            popupRect: s,
                            originRect: l,
                            placementToOrigin: a,
                            alignmentToOrigin: o,
                            popupRectBottomPadding: h
                        }), f = Math.max(c.left - x.left, 0), p = Math.min(c.right - x.right, 0), m = Math.max(c.top - x.top, 0), k = Math.min(c.bottom - x.bottom, 0), v = f + p, b = m + k, g = {
                            offsetInlineStart: 0,
                            offsetY: 0
                        };
                        if (!d)
                            if (void 0 !== u) g.repositionedPlacement = u;
                            else {
                                let n = "left" === a && Math.abs(v) > 0,
                                    u = "right" === a && Math.abs(v) > 0,
                                    d = "top" === a && Math.abs(b) > 0,
                                    h = "bottom" === a && Math.abs(b) > 0;
                                if (n || u || d || h) {
                                    let d = n || u,
                                        h = d ? r(195304).X6 : r(195304).JK,
                                        x = (0, r(828898).W)(a);
                                    if (h(c, i({
                                            popupRect: s,
                                            originRect: l,
                                            placementToOrigin: x,
                                            alignmentToOrigin: o
                                        }))) g.repositionedPlacement = x;
                                    else if (d && r(195304).JK(c, i({
                                            popupRect: s,
                                            originRect: l,
                                            placementToOrigin: "bottom",
                                            alignmentToOrigin: o
                                        }))) return e({ ...t,
                                        placementToOrigin: "bottom",
                                        repositionedPlacement: "bottom"
                                    })
                                }
                            }
                        let y = void 0 !== g.repositionedPlacement;
                        if (y && ("left" === a || "right" === a) || (g.offsetInlineStart = (0, r(619157).A1)() ? -Math.round(v) : Math.round(v)), y && ("top" === a || "bottom" === a) || (g.offsetY = Math.round(b)), y) {
                            if ("bottom" === a) {
                                let e = l.top - s.height;
                                c.y > e && (g.offsetY = Math.round(c.y - e))
                            } else if ("top" === a) {
                                let e = l.bottom + s.height;
                                c.bottom < e && (g.offsetY = Math.round(c.bottom - e))
                            }
                        }
                        n.setState({ ...n.state,
                            ...g
                        })
                    }({ ...e,
                        viewportRect: o
                    })
            }

            function i(e) {
                let t, {
                        popupRect: n,
                        originRect: i,
                        placementToOrigin: a,
                        alignmentToOrigin: o,
                        popupRectBottomPadding: s
                    } = e,
                    l = (0, r(619157).A1)();
                if ("top" === a || "bottom" === a) return new DOMRect(l && "end" === o || !l && "start" === o ? i.left : "center" === o ? i.left + i.width / 2 - n.width / 2 : i.right - n.width, "top" === a ? i.top - n.height : i.bottom, n.width, n.height + (s ? ? 0));
                return t = "start" === o ? i.top : "center" === o ? i.top + i.height / 2 - n.height / 2 : i.bottom - n.height, new DOMRect(l && "right" === a || !l && "left" === a ? i.left - n.width : i.right, t, n.width, n.height + (s ? ? 0))
            }
            r.d(t, {
                B: () => n
            })
        },
        149476: (e, t, r) => {
            r.d(t, {
                K: () => n
            });
            let n = r(546605).Store.createValue(!1)
        },
        224044: (e, t, r) => {
            r.d(t, {
                D: () => c
            });
            var n = r(296540),
                i = r(474848);
            let a = ["h1", "h2", "h3", "h4", "h5", "h6", "p"],
                o = {
                    keoZOQ: "xdj266r",
                    k71WvV: "x14z9mp",
                    k1K539: "xat24cr",
                    keTefX: "x1lziwak",
                    $$css: !0
                },
                s = {
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    khDVqt: "xuxw1ft",
                    kg5iWk: "xlyipyv",
                    $$css: !0
                },
                l = {
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    kg5iWk: "xlyipyv",
                    k1xSpc: "x104kibb",
                    kgKLqz: "x1ua5tub",
                    $$css: !0
                },
                c = n.memo(n.forwardRef(function(e, t) {
                    let {
                        as: n = "div",
                        children: c,
                        colorVariant: u,
                        colorPalette: d,
                        id: h,
                        styleKey: x,
                        lineClamp: f = 0,
                        style: p,
                        className: m,
                        ...k
                    } = e, v = (0, r(960253).I)(() => {
                        let e;
                        return u && (e = d ? r(632079).Tj[d].text[u] : r(632079).Tj.text[u]), {
                            text: {
                                color: e,
                                ...x ? r(649316).U[x] : {}
                            }
                        }
                    }, [u, d, x]);
                    return (0, i.jsx)(n, {
                        ref: t,
                        id: h,
                        ...k,
                        ...r(952687).A.props((0, r(722371).Xk)(a, n) && o, 1 === f && s, f > 1 && l, f > 1 && {
                            WebkitLineClamp: f,
                            lineClamp: f
                        }, "h1" === n && (0, r(722371).Xk)(a, n) && {
                            margin: 0
                        }, v.text, p, void 0 !== m && {
                            $$css: !0,
                            className: m
                        }),
                        children: c
                    })
                }));
            c.displayName = "StyledText"
        },
        235146: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        focused: !1,
                        hovered: !1
                    }
                }
            }
            let a = i
        },
        279954: (e, t, r) => {
            r.d(t, {
                o: () => n
            });

            function n(e) {
                let {
                    menuElement: t,
                    clickedElement: n
                } = e;
                return !(t === n || t.contains(n) || n.classList.contains("notion-link")) && !!(!n.closest(`.${r(545028).hq}`) || n.closest(".notion-peek-renderer") || n.closest(".notion-history-modal") || n.closest(".notion-page-template-modal"))
            }
        },
        314543: (e, t, r) => {
            r.d(t, {
                Cn: () => n,
                Dk: () => a,
                RY: () => i,
                V: () => o
            });
            let n = "notion-scroller",
                i = "vertical",
                a = "horizontal",
                o = "ignore-scrolling-container"
        },
        425930: (e, t, r) => {
            r.d(t, {
                A: () => n
            });
            let n = (0, r(296540).createContext)(null);
            n.displayName = "BasePortalTargetContext"
        },
        488796: (e, t, r) => {
            r.d(t, {
                s: () => c
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    paddingInlineStart: 16,
                    paddingInlineEnd: 16,
                    fontWeight: r(699422).Wy.medium,
                    color: r(632079).Tj.blue.text.accentPrimary
                },
                o = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    flex: 1
                },
                s = {
                    display: "flex",
                    alignItems: "center",
                    flex: 1
                },
                l = {
                    k1xSpc: "x78zum5",
                    kGNEyG: "x1qjc9v5",
                    kjj79g: "xl56j7k",
                    kzQI83: "x1c4vz4f",
                    kmuXW: "x2lah0s",
                    kZKoxP: "xn3w4p2",
                    kGuDYH: "x1j61zf2",
                    kMwMTN: "x39shxw",
                    $$css: !0
                },
                c = n.forwardRef(function({
                    onCancel: e,
                    forceFullScreenSlideUp: t,
                    width: a,
                    hideMobileTopbar: o,
                    disableHeaderShadow: s,
                    wrapStyle: c,
                    topbarStyle: d,
                    left: f,
                    onClickLeft: p,
                    leftDisabled: m,
                    shouldRenderLeftDirectly: k,
                    leftOuterStyle: v,
                    leftRightButtonStyle: b,
                    paddingTop: g,
                    title: y,
                    titleOuterStyle: S,
                    right: j,
                    shouldRenderRightDirectly: w,
                    onClickRight: $,
                    rightDisabled: C,
                    rightOuterStyle: M,
                    additionalTopbarContent: O,
                    children: E,
                    rightAriaLabel: A,
                    whiteBackground: R
                }, T) {
                    let z = (0, r(533992).v3)(),
                        {
                            isTablet: D
                        } = (0, r(533992).Y0)(),
                        {
                            WindowSizeStore: N
                        } = z,
                        [I, L, P] = (0, r(682985).K8)(() => [N.state.paddingTopCSS, N.state.paddingLeftCSS, N.state.paddingRightCSS], [N]),
                        q = (0, r(871709).$)(),
                        B = (0, r(649476).Tf)(),
                        K = (0, n.useMemo)(() => q || D && !t ? 0 : void 0 !== g ? g : I, [q, D, t, g, I]),
                        V = (0, r(960253).I)(() => ({
                            topBarWrapStyle: {
                                position: "relative",
                                boxShadow: s || B ? void 0 : `0 1px 0 ${r(632079).Tj.border.secondaryTranslucent}`,
                                zIndex: 3,
                                cursor: "pointer"
                            },
                            wrapStyle: {
                                display: "flex",
                                flexDirection: "column",
                                height: D || q ? "100%" : "var(--full-viewport-height)",
                                width: a,
                                paddingTop: K,
                                background: R ? r(632079).Tj.background.primary : r(632079).Tj.background.secondary
                            }
                        }), [s, q, D, K, B, a, R]);
                    return (0, i.jsx)(r(281023).k, {
                        debugName: "MobileModal",
                        enable: void 0 !== e,
                        shortcuts: {
                            backbutton: e
                        },
                        children: (0, i.jsxs)("div", {
                            style: { ...V.wrapStyle,
                                ...c
                            },
                            ref: T,
                            children: [o ? void 0 : (0, i.jsxs)("div", {
                                style: V.topBarWrapStyle,
                                children: [(0, i.jsxs)("div", { ...r(952687).A.props(l, {
                                        paddingInlineStart: L,
                                        paddingInlineEnd: P,
                                        ...d
                                    }),
                                    children: [(0, i.jsx)(h, {
                                        left: f,
                                        onClickLeft: p,
                                        leftDisabled: m,
                                        shouldRenderLeftDirectly: k,
                                        leftOuterStyle: v,
                                        leftRightButtonStyle: b
                                    }), (0, i.jsx)(u, {
                                        title: y,
                                        titleOuterStyle: S
                                    }), (0, i.jsx)(x, {
                                        right: j,
                                        shouldRenderRightDirectly: w,
                                        onClickRight: $,
                                        rightDisabled: C,
                                        rightOuterStyle: M,
                                        leftRightButtonStyle: b,
                                        ariaLabel: A
                                    })]
                                }), O]
                            }), E]
                        })
                    })
                });

            function u({
                title: e,
                titleOuterStyle: t
            }) {
                let n = { ...{
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: r(699422).Wy.semibold,
                        whiteSpace: "nowrap"
                    },
                    ...t
                };
                return e ? (0, i.jsx)("div", {
                    style: n,
                    children: e
                }) : null
            }

            function d(e) {
                let {
                    item: t,
                    onClick: n,
                    disabled: o,
                    leftRightButtonStyle: s,
                    ariaLabel: l
                } = e, c = { ...a,
                    ...s
                };
                return (0, i.jsx)(r(64960).Ay, {
                    style: c,
                    onClick: n,
                    disabledFeedback: !0,
                    disabled: o,
                    ariaLabel: l,
                    children: t
                })
            }

            function h({
                left: e,
                onClickLeft: t,
                leftDisabled: r,
                shouldRenderLeftDirectly: n,
                leftOuterStyle: a,
                leftRightButtonStyle: o
            }) {
                let l = { ...s,
                    ...a
                };
                return n ? (0, i.jsx)("div", {
                    style: l,
                    children: e
                }) : (0, i.jsx)("div", {
                    style: l,
                    children: (0, i.jsx)(d, {
                        leftRightButtonStyle: o,
                        item: e,
                        onClick: t,
                        disabled: r
                    })
                })
            }

            function x({
                right: e,
                shouldRenderRightDirectly: t,
                onClickRight: r,
                rightDisabled: n,
                rightOuterStyle: a,
                leftRightButtonStyle: s,
                ariaLabel: l
            }) {
                let c = { ...o,
                    ...a
                };
                return t ? (0, i.jsx)("div", {
                    style: c,
                    "aria-label": l,
                    children: e
                }) : (0, i.jsx)("div", {
                    style: c,
                    children: (0, i.jsx)(d, {
                        leftRightButtonStyle: s,
                        item: e,
                        onClick: r,
                        disabled: n,
                        ariaLabel: l
                    })
                })
            }
        },
        545028: (e, t, r) => {
            r.d(t, {
                _b: () => c,
                hq: () => s
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    kVAEAm: "xixxii4",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    kt4wiu: "xtijo5x",
                    krVfgx: "x1ey2m1c",
                    kfzvcC: "x47corl",
                    kXHlph: "x6ikm8r",
                    kORKVm: "x10wlt62",
                    $$css: !0
                },
                o = {
                    kY2c9j: "x14g40p9",
                    $$css: !0
                },
                s = "notion-overlay-container",
                l = {
                    $$css: !0,
                    className: `${s} notion-default-overlay-container`
                };

            function c(e) {
                let {
                    zIndex: t,
                    children: s
                } = e, c = (0, n.useRef)(null), [u, d] = (0, n.useState)(() => c ? c.current : null);
                return (0, n.useLayoutEffect)(() => {
                    d(c ? c.current : null)
                }, [c]), (0, i.jsxs)(r(425930).A.Provider, {
                    value: u,
                    children: [s, (0, i.jsx)("div", {
                        ref: c,
                        ...r(952687).A.props(a, void 0 !== t ? {
                            zIndex: t
                        } : o, l),
                        onMouseMove: e => {
                            (0, r(705660).SQ)(e, r(705660).y$.SidebarMouseMove, () => {})
                        },
                        children: (0, i.jsx)("div", {
                            className: "x1n2onr6 x1ja2u2z"
                        })
                    })]
                })
            }
        },
        557666: (e, t, r) => {
            r.d(t, {
                f: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(803949);
            class n extends Set {}
            class i {
                index = new Map;
                addMember(e, t) {
                    let r = this.index.get(e);
                    r instanceof n ? r.add(t) : r ? this.index.set(e, new n([r, t])) : this.index.set(e, t)
                }
                removeMember(e, t) {
                    let r = this.index.get(e);
                    if (r === t) this.index.delete(e);
                    else if (r instanceof n) {
                        r.delete(t);
                        let n = r.size;
                        if (0 === n) this.index.delete(e);
                        else if (1 === n) {
                            let [t] = r;
                            this.index.set(e, t)
                        }
                    }
                }
                forEachMember(e, t) {
                    let r = this.index.get(e);
                    r instanceof n ? r.forEach(t) : r && t(r)
                }
            }
        },
        572779: (e, t, r) => {
            r.d(t, {
                j: () => a
            });
            var n = r(296540);

            function i(e) {
                return e <= 0 ? 0 : e <= 20 ? e / 20 : 1
            }

            function a(e) {
                let [t, r] = (0, n.useState)(0), [a, o] = (0, n.useState)(0), s = (0, n.useCallback)(() => {
                    let t = e.current;
                    if (!t) return;
                    let n = t.getNode();
                    if (!n) return;
                    let {
                        scrollTop: a,
                        scrollHeight: s,
                        clientHeight: l
                    } = n;
                    r(i(a)), o(i(s - l - a))
                }, [e]), l = (0, n.useCallback)(() => {
                    s()
                }, [s]);
                (0, n.useEffect)(() => {
                    s();
                    let t = e.current;
                    if (!t) return;
                    let r = t.getNode();
                    if (!r) return;
                    let n = new ResizeObserver(() => {
                            s()
                        }),
                        i = new MutationObserver(() => {
                            s()
                        });
                    return n.observe(r), i.observe(r, {
                        childList: !0,
                        subtree: !0,
                        characterData: !0
                    }), () => {
                        n.disconnect(), i.disconnect()
                    }
                }, [s, e]);
                let c = t > 0 ? `transparent 0px, black ${34*t}px` : "black 0%",
                    u = a > 0 ? `black calc(100% - ${34*a}px), transparent 100%` : "black 100%",
                    d = t > 0 || a > 0 ? `linear-gradient(to bottom, ${c}, ${u})` : "";
                return {
                    moreContentScrollerHintStyle: { ...d && {
                            maskImage: d,
                            WebkitMaskImage: d
                        }
                    },
                    onScrollForMoreContentScrollerHint: l
                }
            }
        },
        630121: (e, t, r) => {
            r.d(t, {
                A: () => s
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(737550);
            var n = () => r(546605),
                i = () => r(423291);
            class a extends n().Store {
                getInitialState() {
                    return {
                        openPopups: new Set,
                        namedOpenPopups: new Set
                    }
                }
                hasOpenPopups() {
                    let {
                        openPopups: e,
                        namedOpenPopups: t
                    } = this.getState();
                    return e.size > 0 || t.size > 0
                }
                hasOpenMobileSlideUps() {
                    let {
                        openPopups: e,
                        namedOpenPopups: t
                    } = this.getState();
                    if (t.size > 0) return !0;
                    for (let t of e)
                        if (t.current.hidesMobileNativeBottomBar || (t.current.popupType === i().n.SlideUp || t.current.popupType === i().n.BottomSheet) && !t.current.preventSlideUpTransition) return !0;
                    return !1
                }
                hasOpenMouseCapturePopup() {
                    let {
                        openPopups: e
                    } = this.state;
                    return e.size > 0 && Array.from(e.values()).some(e => !e.current.disableMouseCapture)
                }
                closeAll() {
                    for (let r of this.state.openPopups) {
                        var e, t;
                        null == (e = (t = r.current).onDismiss) || e.call(t, null)
                    }
                }
                addNamedPopup(e) {
                    this.state.namedOpenPopups.add(e), this.emit()
                }
                removeNamedPopup(e) {
                    this.state.namedOpenPopups.delete(e), this.emit()
                }
            }
            let o = new a;
            (0, r(202146).exposeDebugValue)("GlobalPopupStore", o);
            let s = o
        },
        657751: (e, t, r) => {
            r.d(t, {
                t: () => i
            });
            var n = r(296540);
            class i extends n.Component {
                constructor(e) {
                    super(e), this.state = {
                        hasError: !1
                    }
                }
                componentDidCatch(e, t) {
                    this.props.onError && this.props.onError(e, t), this.setState({
                        hasError: !0,
                        error: e,
                        errorInfo: t
                    })
                }
                clearErrorState() {
                    this.setState({
                        hasError: !1
                    })
                }
                render() {
                    return this.state.hasError && this.props.fallback ? this.props.fallback({
                        error: this.state.error,
                        errorInfo: this.state.errorInfo,
                        clearErrorState: this.clearErrorState.bind(this)
                    }) : this.props.children
                }
            }
        },
        675674: (e, t, r) => {
            r.d(t, {
                n: () => l
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    kfzvcC: "x67bb7w",
                    kVAEAm: "x10l6tqk",
                    k87sOh: "x13vifvy",
                    kLqNvP: "x1o0tod",
                    krVfgx: "x1ey2m1c",
                    kt4wiu: "xtijo5x",
                    kbCHJM: "",
                    kCIrl2: "",
                    kmkexE: "x14d8v54",
                    $$css: !0
                },
                o = {
                    kC7eKd: "xz97p8v xu2snb4",
                    $$css: !0
                },
                s = {
                    kC7eKd: "x1s53al2 x5avrv5",
                    $$css: !0
                };

            function l(e) {
                let {
                    isAndroid: t
                } = (0, r(533992).Y0)(), l = (0, n.useRef)(null), [c, u] = (0, n.useState)(0);
                return e.open ? (0, i.jsx)(r(815556).L, {
                    keepFocus: e.keepFocus,
                    preventCaptureEsc: e.preventCaptureEsc,
                    onDismiss: e.onDismiss,
                    children: n => {
                        var d;
                        let h;
                        return (0, i.jsxs)("div", { ...n,
                            ...{
                                className: "x10l6tqk x13vifvy x1o0tod xn9wirt x1dr59a3 x6ikm8r x10wlt62 x47corl"
                            },
                            children: [(0, i.jsx)("div", {
                                "aria-hidden": !0,
                                tabIndex: -1,
                                ref: l,
                                ...r(952687).A.props([a, {
                                    kSiTet: null != (h = c) ? "xb4nw82" : h,
                                    $$css: !0
                                }, {
                                    "--x-opacity": null != h ? h : void 0
                                }], !e.disableDarkOverlayBackground && (t ? o : s)),
                                onMouseDown: e => e.preventDefault()
                            }, "overlay"), (0, i.jsx)("div", { ...{
                                    className: "x10l6tqk x1ey2m1c x1o0tod xtijo5x x12yd5mj"
                                },
                                children: (0, i.jsx)(f, { ...e,
                                    overlayRef: l,
                                    setAnimationState: u,
                                    children: null == (d = e.content) ? void 0 : d.call(e)
                                })
                            })]
                        })
                    }
                }, "popup-keyboard-area") : null
            }
            let c = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x16uus16",
                    kVL7Gh: "xbiv7yw",
                    ks0D6T: "x11gisft",
                    k71WvV: "x11t971q",
                    k1K539: "xat24cr",
                    keTefX: "xvc5jky",
                    $$css: !0
                },
                u = {
                    k6sLGO: "x1so62im",
                    $$css: !0
                },
                d = {
                    kGVxlE: "x4ma8is",
                    $$css: !0
                },
                h = {
                    kfzvcC: "x47corl",
                    kFalU9: "x5ve5x3",
                    $$css: !0
                },
                x = {
                    kfzvcC: "x67bb7w",
                    kFalU9: "x2lcwoz",
                    $$css: !0
                };

            function f(e) {
                let {
                    initialState: t,
                    onDismiss: a,
                    overlayRef: o,
                    setAnimationState: s
                } = e, {
                    TabbedRouterStore: l
                } = (0, r(533992).v3)(), {
                    isAndroid: f,
                    isTablet: p,
                    isMobileNative: m
                } = (0, r(533992).Y0)(), k = (0, r(83208).X)("mobile_bottom_sheet_scroll_fix"), v = (0, r(83208).X)("fix_mobile_drag_conflict"), b = void 0 === e.ariaPopupType || "dialog" === e.ariaPopupType, g = (0, r(682985).K8)(() => l.state.modal.length > 0, [l]), y = (0, n.useRef)(!1), S = "half" === t || "full" === t && e.enableHalfSheet, j = (0, n.useMemo)(() => window.innerHeight, []), w = (0, n.useRef)(j), $ = (0, n.useMemo)(() => ({
                    closed: j,
                    half: .5 * j,
                    open: 0
                }), [j]), C = (0, r(616844).Y5)("top", f ? 16 : 10), [M, O] = (0, n.useState)({
                    transform: `translateY(${$.closed}px) translateZ(0)`
                });
                (0, r(383953).w)(() => {
                    r(149476).K.setState(!0), s(1), R({
                        target: "half" === t ? $.half : $.open,
                        animate: !0
                    })
                });
                let E = e.bottomSheetBackgroundColor ? r(632079).Tj.background[e.bottomSheetBackgroundColor] : r(632079).Tj.background.secondary,
                    A = (0, n.useRef)(-1),
                    R = (0, n.useCallback)(e => {
                        let {
                            target: t,
                            animate: n
                        } = e, i = Math.max(Math.min(t, $.closed), $.open), a = A.current;
                        window.cancelAnimationFrame(a), A.current = window.requestAnimationFrame(() => {
                            if (w.current = i, O({
                                    transform: `translateY(${i}px) translateZ(0)`,
                                    transition: n ? "transform 0.5s cubic-bezier(0.32, 0.72, 0, 1)" : void 0
                                }), i === $.closed && s(0), i === $.half && r(707785).A.state.phase === r(707785).i.shown) {
                                let e = document.activeElement;
                                e instanceof HTMLElement && e.blur()
                            }
                            if (y.current) {
                                let e = Math.max(0, Math.min(i / $.closed, 1)),
                                    t = 1 - Math.max(0, Math.min(2 * (.5 - e < $.half ? e : 0), 1));
                                r(353736).q.update(e => ({ ...e,
                                    attached: !0,
                                    animating: n,
                                    proportion: t
                                }))
                            }
                        })
                    }, [A, w, $, s]),
                    T = (0, r(682985).K8)(() => {
                        let {
                            phase: e
                        } = r(707785).A.state;
                        return e === r(707785).i.willShow || e === r(707785).i.shown
                    }, []);
                (0, n.useEffect)(() => {
                    T && w.current > 50 && R({
                        target: $.open,
                        animate: !0
                    })
                }, [T, $.open, w, R]), (0, n.useEffect)(() => {
                    let e = o.current;
                    if (e) {
                        let t = e => {
                            R({
                                target: $.closed,
                                animate: !0
                            })
                        };
                        return e.addEventListener("click", t), () => e.removeEventListener("click", t)
                    }
                }, [o, $.closed, R, a]);
                let z = (0, n.useCallback)(() => {
                        var e;
                        return null == (e = r(862921).A.MenuScroller) ? void 0 : e.getNode()
                    }, []),
                    D = (0, n.useRef)(0),
                    N = (0, n.useRef)(0),
                    I = (0, n.useRef)(void 0),
                    L = (0, n.useRef)(0),
                    P = (0, n.useRef)(!1),
                    q = (0, n.useCallback)(e => {
                        let t;
                        P.current = !1, I.current = void 0;
                        let r = {
                                halfSheet: {
                                    open: .3 * j,
                                    half: j * (f ? .55 : .65)
                                },
                                fullSheet: {
                                    open: j * (f ? .3 : .4)
                                }
                            },
                            n = Math.max(0, Date.now() - L.current),
                            i = (w.current - D.current) / n;
                        void 0 !== (t = i < -.5 ? $.open : i > 1 ? S && w.current < r.halfSheet.half ? $.half : $.closed : S ? w.current < r.halfSheet.open ? $.open : w.current < r.halfSheet.half ? $.half : $.closed : w.current < r.fullSheet.open ? $.open : $.closed) && R({
                            target: t,
                            animate: !0
                        })
                    }, [f, S, j, w, R, $]);
                (0, n.useEffect)(() => {
                    if (m && !f && !p && !g && !r(353736).q.state.attached) return y.current = !0, r(353736).q.update(e => ({ ...e,
                        attached: !0
                    })), () => {
                        y.current = !1, r(353736).q.update(e => ({ ...e,
                            attached: !1
                        }))
                    }
                }, [m, f, p, g, w, j, $.half]);
                let B = 6 + 5 * !e.bottomSheetDisableDrag + 6,
                    K = (0, n.useCallback)(t => {
                        var n;
                        if (v && r(400198).A.state.isDragging || e.bottomSheetDisableDrag) return;
                        let i = t.touches[0].clientY - N.current,
                            a = i < 0 ? "up" : "down";
                        I.current = t.touches[0].clientY;
                        let o = z();
                        if (((null == o ? void 0 : o.scrollTop) ? ? 0) !== 0) return;
                        let s = (null == (n = z()) ? void 0 : n.clientHeight) ? ? 0;
                        "up" === a && (!k || D.current < $.half) && s < $.half - B - 100 || "up" === a && 0 === w.current || (t.preventDefault(), t.stopPropagation(), P.current = !0, R({
                            target: Math.max(0, D.current + i),
                            animate: !1
                        }))
                    }, [w, R, $.half, z, e.bottomSheetDisableDrag, B, k, v]),
                    V = (0, n.useCallback)(e => {
                        "transform" === e.propertyName && r(149476).K.setState(!0)
                    }, []),
                    Y = (0, n.useCallback)(e => {
                        "transform" === e.propertyName && r(149476).K.setState(!1)
                    }, []),
                    W = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    let e = W.current;
                    if (e) return e.addEventListener("touchmove", K), e.addEventListener("transitionrun", V), e.addEventListener("transitionend", Y), () => {
                        e.removeEventListener("touchmove", K), e.removeEventListener("transitionrun", V), e.removeEventListener("transitionend", Y)
                    }
                }, [K, V, Y]), (0, i.jsx)("div", {
                    role: "none",
                    ref: W,
                    ...r(952687).A.props(M, u),
                    onTransitionEnd: e => {
                        "transform" === e.propertyName && w.current === $.closed && (null == a || a(e))
                    },
                    onTouchStart: e => {
                        if (v && r(400198).A.state.isDragging) {
                            P.current = !1;
                            return
                        }
                        D.current = w.current, N.current = e.touches[0].clientY, L.current = Date.now(), w.current > 0 && (P.current = !0)
                    },
                    onTouchEnd: q,
                    children: (0, i.jsxs)("div", {
                        role: b ? "dialog" : void 0,
                        "aria-label": e.ariaLabel,
                        "aria-labelledby": e.ariaLabelledBy,
                        "aria-describedby": e.ariaDescribedBy,
                        "aria-modal": !!b && !!e.trapFocus || void 0,
                        ...r(952687).A.props(((e, t) => [c, {
                            kWkggS: null != e ? "xl8spv7" : e,
                            keoZOQ: null != t ? "x1gkbulp" : t,
                            $$css: !0
                        }, {
                            "--x-backgroundColor": null != e ? e : void 0,
                            "--x-marginTop": "number" == typeof t ? t + "px" : null != t ? t : void 0
                        }])(E, C), !f && d, P.current ? h : x),
                        children: [(0, i.jsx)("div", {
                            className: "xols6we"
                        }), (0, i.jsx)("div", { ...{
                                0: {
                                    className: "x1ycjhwn x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x11t971q xat24cr xvc5jky x1guw455 xhwimal"
                                },
                                2: {
                                    className: "x1ycjhwn x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x11t971q xat24cr xvc5jky x187nhsf xhwimal"
                                },
                                1: {
                                    className: "x1ycjhwn x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x11t971q xat24cr xvc5jky x1guw455 xjbqb8w"
                                },
                                3: {
                                    className: "x1ycjhwn x13t61ll x1kchd1x x1u0fnx4 xbxn0j6 xdj266r x11t971q xat24cr xvc5jky x187nhsf xjbqb8w"
                                }
                            }[!!f << 1 | !!e.bottomSheetDisableDrag]
                        }, "drag-spacer"), (0, i.jsx)("div", {
                            className: "xols6we"
                        }), (0, i.jsx)(r(4458).VP, {
                            height: `calc(var(--full-viewport-height) - ${B}px - ${C})`,
                            children: e.children
                        })]
                    }, "content")
                }, "sheet")
            }
        },
        815556: (e, t, r) => {
            r.d(t, {
                L: () => a
            });
            var n = r(296540),
                i = r(474848);

            function a({
                children: e,
                keepFocus: t = !1,
                onDismiss: o,
                preventCaptureEsc: s
            }) {
                let l = (0, n.useCallback)(e => {
                        o && o(e)
                    }, [o]),
                    c = (0, r(336995).A)(t);
                return (0, i.jsx)(r(369064).N, {
                    debugName: "Popup",
                    capture: !s,
                    onEsc: l,
                    onBackButton: l,
                    children: e(c)
                })
            }
        },
        828898: (e, t, r) => {
            r.d(t, {
                I: () => a,
                W: () => i
            });
            var n = () => r(546605);

            function i(e) {
                switch (e) {
                    case "top":
                        return "bottom";
                    case "bottom":
                        return "top";
                    case "left":
                        return "right";
                    case "right":
                        return "left";
                    case "center":
                        return "center"
                }
            }
            class a extends n().Store {
                getInitialState() {
                    return {
                        open: !1,
                        offsetInlineStart: 0,
                        offsetY: 0,
                        originRect: r(195304).v_
                    }
                }
            }
        },
        871709: (e, t, r) => {
            r.d(t, {
                $: () => a,
                k: () => i
            });
            var n = r(296540);
            let i = (0, n.createContext)(void 0);

            function a() {
                return void 0 !== (0, n.useContext)(i)
            }
            i.displayName = "PopupBottomSheetContext"
        },
        981060: (e, t, r) => {
            r.d(t, {
                T: () => n
            }), r(944114);
            class n {
                constructor(e) {
                    this.parentOf = [], this.sizeOf = [], this.ensureCapacity(e)
                }
                parentOf;
                sizeOf;
                get capacity() {
                    return this.parentOf.length
                }
                ensureCapacity(e) {
                    if (!(e <= this.capacity))
                        for (let t = this.parentOf.length; t < e; t++) this.parentOf[t] = t, this.sizeOf[t] = 1
                }
                getNodeSize(e) {
                    return this.ensureCapacity(e + 1), this.sizeOf[e]
                }
                getSets() {
                    let e = [],
                        t = [];
                    for (let r = 0; r < this.capacity; r++) {
                        let n = this.findRoot(r);
                        n === r && e.push(r), t[n] ? ? = [], t[n].push(r)
                    }
                    return e.map(e => t[e])
                }
                unionContainingSets(e, t) {
                    return this.ensureCapacity(Math.max(e, t) + 1), this.unionContainingSetsInternal(e, t)
                }
                unionContainingSetsInternal(e, t) {
                    if (e = this.findRootInternal(e), t = this.findRootInternal(t), e === t) return e;
                    let [r, n] = this.sizeOf[e] > this.sizeOf[t] ? [e, t] : [t, e];
                    return this.parentOf[n] = r, this.sizeOf[r] = this.sizeOf[r] + this.sizeOf[n], r
                }
                findRoot(e) {
                    return this.ensureCapacity(e + 1), this.findRootInternal(e)
                }
                findRootInternal(e) {
                    for (; this.parentOf[e] !== e;) {
                        let t = this.parentOf[e];
                        this.parentOf[e] = this.parentOf[this.parentOf[e]], e = t
                    }
                    return e
                }
                isRoot(e) {
                    return this.parentOf[e] === e
                }
            }
        }
    }
]);