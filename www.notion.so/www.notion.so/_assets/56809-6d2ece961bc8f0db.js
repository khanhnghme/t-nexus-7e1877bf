"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [56809], {
        164177: (e, n, t) => {
            t.d(n, {
                j: () => a
            });
            var i = () => t(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let a = new o
        },
        226512: (e, n, t) => {
            t.d(n, {
                R: () => a
            });
            var i = t(296540),
                o = t(474848);

            function a(e) {
                var n, a;
                let r, s = (0, t(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: m = !0
                    } = e,
                    b = (n = u, a = m, r = (0, t(781889).o)(), (0, t(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: a ? t(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: t(104509).Ev.lg,
                            width: t(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + r,
                            top: 10,
                            zIndex: 10,
                            ...n
                        },
                        buttonHovered: {
                            background: a ? t(632079).Tj.buttonPressedBackground : t(632079).Tj.buttonHoveredBackground
                        }
                    }), [a, n, r])),
                    g = (0, i.useContext)(t(19187).e),
                    v = function(e) {
                        let {
                            onClick: n,
                            onDismiss: t
                        } = e, o = (0, i.useCallback)(e => {
                            null == n || n(e), null == t || t()
                        }, [n, t]);
                        return n || t ? o : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? g
                    });
                return v ? (0, o.jsx)(t(374533).A, {
                    ariaLabel: s.formatMessage(l.dismissModalAriaLabel),
                    icon: t(766970).xMarkFillIcon,
                    onClick: v,
                    style: b.button,
                    hoveredStyle: { ...b.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let l = (0, t(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        432376: (e, n, t) => {
            t.d(n, {
                A: () => a
            });
            var i = () => t(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let a = o
        },
        511101: (e, n, t) => {
            t.d(n, {
                m: () => i
            });
            let i = "notion-modal-underlay"
        },
        556809: (e, n, t) => {
            t.d(n, {
                a: () => l
            });
            var i = t(296540);

            function o(e) {
                t(561599).A.state.openModals.has(e) && (t(561599).A.state.openModals.delete(e), t(561599).A.emit())
            }
            var a = t(474848);

            function l(e) {
                let {
                    open: n,
                    onOpen: l,
                    transitionAppearance: r = "modal"
                } = e, s = (0, i.useRef)();
                void 0 === s.current && (s.current = t(92513).JW());
                let c = s.current,
                    u = (0, t(682985).uB)(e.store, t(432376).A),
                    p = (0, t(682985).K8)(() => u.state.open, [u]),
                    m = (0, i.useRef)(!1),
                    b = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: n
                    }) {
                        return !!n || e
                    }({
                        disableAnimationFromProps: "none" === r,
                        isShowingTabBar: (0, t(682985).O$)(t(584257).b)
                    }),
                    g = (0, i.useCallback)(() => {
                        if (!m.current && n) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), t(561599).A.state.openModals.has(c) || (t(561599).A.state.openModals.add(c), t(561599).A.emit()), l && l();
                        else m.current && !n && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), o(c));
                        m.current = n
                    }, [c, u, l, n]);
                return (0, i.useEffect)(() => {
                    g()
                }, [g]), (0, t(637030).X)(() => {
                    o(c)
                }), (0, a.jsx)(t(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, a.jsx)(t(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: n => {
                            e.onDismiss && e.onDismiss(n)
                        },
                        children: (0, a.jsx)(t(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: b ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var t, i, o;
                                return t = n, i = u, o = e.onClosed, void(t ? i.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (i.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == o || o()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: b,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: r
                        })
                    })
                })
            }

            function r({
                children: e,
                disableAnimation: n,
                preventHideChildrenWhileOpening: i,
                store: o
            }) {
                let l = (0, t(682985).uB)(o, t(432376).A),
                    s = (0, t(682985).K8)(() => l.state.openAnimationCompleted, [l]);
                return n || s || i ? (0, a.jsx)(a.Fragment, {
                    children: e
                }) : null
            }
            let s = i.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: n,
                    isWaxPaper: i,
                    isWash: o,
                    ariaLabel: l,
                    ariaLabelledBy: s,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: m,
                    store: b
                }, g) {
                    let v = (0, t(682985).uB)(b, t(432376).A),
                        h = (0, t(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: t(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: i ? t(632079).Tj.popoverWaxPaperBackground : o ? t(632079).Tj.background.secondary : t(632079).Tj.background.elevated,
                                backdropFilter: i ? "blur(40px)" : "none",
                                WebkitBackdropFilter: i ? "blur(40px)" : "none"
                            }
                        }), [c, i, o]);
                    return (0, a.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": l,
                        "aria-labelledby": s,
                        "aria-describedby": d,
                        style: h.dialog,
                        ref: g,
                        children: [e ? (0, a.jsx)(t(226512).R, {
                            onClick: n
                        }) : void 0, (0, a.jsx)(r, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: m,
                            store: v
                        })]
                    })
                }),
                d = i.forwardRef(function({
                    open: e,
                    keepFocus: n = !1,
                    disableAnimation: i,
                    showCloseIcon: o,
                    onDismiss: l,
                    isWaxPaper: r,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: m,
                    children: b,
                    preventHideChildrenWhileOpening: g,
                    style: v,
                    className: h,
                    backgroundStyle: f,
                    transitionAppearance: x,
                    store: y
                }, A) {
                    let k = (0, t(336995).A)(n),
                        C = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, t(722371).HB)(e)
                            }
                        }(x),
                        {
                            mobileTopPadding: j,
                            mobileBottomPadding: S
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, t(533992).v3)();
                            return {
                                mobileTopPadding: (0, t(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, t(571354).n)()
                            }
                        }();
                    return (0, a.jsxs)("div", {
                        style: {
                            paddingTop: j,
                            paddingBottom: S,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...v
                        },
                        ...k,
                        className: h,
                        ref: A,
                        children: [(0, a.jsx)(t(781036).B, {
                            backgroundStyle: f,
                            onDismiss: l
                        }), (0, a.jsx)(t(654979).A, {
                            tag: s,
                            skip: i,
                            visible: e,
                            ...C,
                            forceCompositeLayer: !0,
                            showCloseIcon: o,
                            onDismiss: l,
                            isWaxPaper: r,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: m,
                            children: b,
                            disableAnimation: i,
                            preventHideChildrenWhileOpening: g,
                            store: y
                        })]
                    })
                })
        },
        561599: (e, n, t) => {
            t.d(n, {
                A: () => l
            }), t(517642), t(658004), t(733853), t(845876), t(432475), t(515024), t(731698);
            var i = () => t(546605);
            class o extends i().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let a = new o,
                l = a;
            (0, t(202146).exposeDebugValue)("GlobalModalStore", a)
        },
        781036: (e, n, t) => {
            t.d(n, {
                B: () => a
            });
            var i = t(296540),
                o = t(474848);

            function a({
                backgroundStyle: e,
                onDismiss: n
            }) {
                (0, i.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, t(960831).j)(!0)
                    }), t(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, t(960831).j)(!1), t(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let l = (0, t(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: n
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: t(632079).Tj.modalUnderlayBackground,
                            ...n
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, o.jsx)("div", {
                    role: "presentation",
                    style: l.underlay,
                    onClick: e => {
                        n && n(e)
                    },
                    className: t(511101).m
                })
            }
        },
        960831: (e, n, t) => {
            t.d(n, {
                j: () => i
            });

            function i(e) {
                var n;
                return null === t(775657).electronApi || void 0 === t(775657).electronApi || null == (n = t(775657).electronApi.setOverlay) ? void 0 : n.call(t(775657).electronApi, e)
            }
        }
    }
]);