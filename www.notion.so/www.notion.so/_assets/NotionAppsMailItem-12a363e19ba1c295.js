"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [39916], {
        46431: (e, t, i) => {
            i.d(t, {
                z: () => n
            });
            let n = {
                style: {
                    transformOrigin: "50% bottom"
                },
                animationConfig: {
                    duration: 50,
                    delay: 0,
                    timingFunction: "cubic-bezier(0.6, 0, 0.02, 1)"
                }
            }
        },
        78407: (e, t, i) => {
            i.r(t), i.d(t, {
                NotionAppsMailItem: () => a
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let t = (0, i(533992).v3)(),
                    a = (0, i(624467).m)("mail"),
                    l = (0, n.useCallback)(() => {
                        i(637847).j(t), (0, i(250662).Zt)({
                            environment: t,
                            from: "appSwitcher"
                        })
                    }, [t]);
                return a ? (0, o.jsx)(i(148904).M, {
                    notionApp: "mail",
                    originElement: (0, o.jsx)(i(597350).p, {
                        onClick: l,
                        icon: (0, o.jsx)(i(16275).I, {
                            icon: i(612670).F,
                            colorVariant: "secondary",
                            size: "default"
                        }),
                        label: (0, o.jsx)(i(109939).sA, {
                            id: "sidebar.notionapp.mail.label",
                            defaultMessage: "Notion Mail"
                        })
                    }),
                    isOpen: a,
                    onClick: l
                }) : (0, o.jsx)(i(597350).p, {
                    tooltip: (0, o.jsx)(i(109939).sA, {
                        id: "sidebar.notionapps.mail.tooltip",
                        defaultMessage: "Open Notion Mail"
                    }),
                    onClick: l,
                    icon: (0, o.jsx)(i(16275).I, {
                        icon: i(612670).F,
                        colorVariant: "secondary",
                        size: "default"
                    }),
                    label: (0, o.jsx)(i(109939).sA, {
                        id: "sidebar.notionapp.mail.label",
                        defaultMessage: "Notion Mail"
                    })
                })
            }
        },
        105875: (e, t, i) => {
            i.d(t, {
                g: () => s,
                t: () => a
            }), i(581454);
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let {
                    messageKey: t,
                    onDismiss: o
                } = e;
                return l({
                    message: (0, n.useMemo)(() => t ? {
                        key: t,
                        type: "static",
                        props: {},
                        id: "",
                        category: i(292609).lU[t].category
                    } : void 0, [t]),
                    onDismiss: o
                })
            }

            function l(e) {
                let t = null == e ? void 0 : e.message,
                    o = null == e ? void 0 : e.onDismiss,
                    a = (0, i(533992).v3)();
                return (0, n.useEffect)(() => {
                    t && i(357709).DL(a, {
                        callout_key: t.key,
                        placement_key: (0, i(125542).Q3)(t)
                    })
                }, [a, t]), {
                    onClick: (0, n.useCallback)(e => {
                        t && i(357709).Y5(a, {
                            callout_key: t.key,
                            placement_key: (0, i(125542).Q3)(t),
                            click_type: "primary_cta"
                        }), e && e()
                    }, [a, t]),
                    onDismiss: (0, n.useCallback)(() => {
                        t && (i(357709).Sq(a, {
                            callout_key: t.key,
                            placement_key: (0, i(125542).Q3)(t),
                            dismiss_type: "sidebar_dismiss"
                        }), (0, i(734389).O)(a, t)), o && o()
                    }, [a, t, o])
                }
            }

            function s(e) {
                let {
                    onClick: t,
                    buttons: n,
                    ...a
                } = e, {
                    onClick: s,
                    onDismiss: r
                } = l(e), c = null == n ? void 0 : n.map(e => ({ ...e,
                    onClick: () => {
                        s(e.onClick)
                    }
                }));
                return (0, o.jsx)(i(436281).Ue, {
                    children: (0, o.jsx)(i(436281).wY, { ...a,
                        ...c ? {
                            buttons: c
                        } : {
                            onClick: t ? () => {
                                s(t)
                            } : void 0
                        },
                        onDismiss: r
                    })
                })
            }
        },
        148904: (e, t, i) => {
            i.d(t, {
                M: () => s
            });
            var n = i(296540),
                o = () => i(696190),
                a = i(474848);
            let l = {
                display: "flex",
                flexDirection: "column",
                width: "226px",
                overflow: "visible",
                boxShadow: "none"
            };

            function s(e) {
                let {
                    onDismiss: t,
                    onClick: s
                } = e, r = (0, n.useRef)(null), c = i(161323).Vz[e.notionApp], d = (0, i(682985).K8)(() => {
                    for (let e of c) {
                        let t = o().default.state.messages.get(e);
                        if (t) return t
                    }
                }, [c]), {
                    onClick: p,
                    onDismiss: u
                } = (0, i(105875).t)({
                    messageKey: d ? (0, i(462391).h2)(d.key) : void 0
                }), g = (0, n.useCallback)(() => {
                    u(), null == t || t()
                }, [u, t]), m = (0, n.useCallback)(() => {
                    p(), s()
                }, [p, s]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(i(152779).i, {
                        contentRef: e.isOpen ? r : {
                            current: null
                        },
                        allowClickthrough: !0
                    }), (0, a.jsx)(i(182718).zD, {
                        enableOutsideClickDismiss: !0,
                        onDismiss: g,
                        preventCaptureEsc: !0,
                        suppressOriginContext: !0,
                        forceInitialInbound: !0,
                        disableDarkOverlayBackground: !0,
                        disableMouseCapture: !0,
                        trapFocus: !1,
                        preventScaleTransition: !1,
                        preventOpacityTransition: !1,
                        preventSlideUpTransition: !1,
                        open: e.isOpen,
                        popupType: i(182718).nl.Popup,
                        alignmentToOrigin: "center",
                        placementToOrigin: "right",
                        viewportPadding: 6,
                        originGap: 15,
                        style: i(46431).z.style,
                        animationConfig: i(46431).z.animationConfig,
                        popupWrapStyle: l,
                        content: () => (0, a.jsx)(i(825485).k, {
                            inAppCalloutHandlers: {
                                onClick: m,
                                onDismiss: g
                            },
                            calendarElement: r.current,
                            mailElement: r.current,
                            notionDesktopElement: r.current,
                            hoveredAppTarget: e.notionApp,
                            renderCarat: !1
                        }),
                        children: (0, a.jsx)("div", {
                            ref: r,
                            children: e.originElement
                        })
                    })]
                })
            }
        },
        152779: (e, t, i) => {
            i.d(t, {
                i: () => l
            });
            var n = i(296540),
                o = i(440961),
                a = i(474848);

            function l({
                contentRef: e,
                allowClickthrough: t
            }) {
                return (0, i(83208).X)("adoption_sidebar_tourtip_overlay_portal") ? (0, a.jsx)(r, {
                    contentRef: e,
                    allowClickthrough: t
                }) : (0, a.jsx)(s, {
                    contentRef: e,
                    allowClickthrough: t
                })
            }

            function s({
                contentRef: e,
                allowClickthrough: t
            }) {
                let [o, l] = n.useState(null);
                n.useEffect(() => {
                    var t;
                    let n = i(381453).sg(() => {
                            var t;
                            l((null == (t = e.current) ? void 0 : t.getBoundingClientRect()) || null)
                        }, 50, {
                            leading: !0
                        }),
                        o = new ResizeObserver(n),
                        a = null == (t = i(862921).A.SidebarScroller) ? void 0 : t.getNode();
                    return a && o.observe(a), window.addEventListener("resize", n), () => {
                        o.disconnect(), window.removeEventListener("resize", n)
                    }
                }, [e]);
                let r = t ? "none" : void 0,
                    c = (0, i(960253).e)(),
                    d = (0, i(960253).I)(() => ({
                        highlight: {
                            position: "absolute",
                            top: o ? o.top : 0,
                            insetInlineStart: 4,
                            height: o ? o.height : 0,
                            width: "calc(100% - 8px)",
                            background: "dark" === c ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                            boxShadow: i(632079).Tj.buttonBlueFocusRing,
                            borderRadius: 4,
                            pointerEvents: r
                        },
                        topOpacityLayer: {
                            position: "absolute",
                            top: 0,
                            height: o ? o.top - 4 : 0,
                            width: "100%",
                            zIndex: 999,
                            background: i(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        bottomOpacityLayer: {
                            position: "absolute",
                            top: o ? o.top + o.height + 4 : void 0,
                            height: o ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            background: i(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        interactionGuard: {
                            position: "absolute",
                            top: 0,
                            height: o ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            pointerEvents: r
                        }
                    }), [o, r, c]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        style: d.highlight
                    }), (0, a.jsx)("div", {
                        style: d.bottomOpacityLayer
                    }), (0, a.jsx)("div", {
                        style: d.topOpacityLayer
                    }), (0, a.jsx)("div", {
                        style: d.interactionGuard
                    })]
                })
            }

            function r({
                contentRef: e,
                allowClickthrough: t
            }) {
                let [l, s] = n.useState(null), c = n.useRef(null);
                n.useEffect(() => {
                    var t;
                    let n = i(381453).sg(() => {
                            var t;
                            s((null == (t = e.current) ? void 0 : t.getBoundingClientRect()) || null)
                        }, 50, {
                            leading: !0
                        }),
                        o = new ResizeObserver(n),
                        a = null == (t = i(862921).A.SidebarScroller) ? void 0 : t.getNode();
                    return a && (o.observe(a), c.current = a), window.addEventListener("resize", n), () => {
                        o.disconnect(), window.removeEventListener("resize", n)
                    }
                }, [e]);
                let d = t ? "none" : void 0,
                    p = (0, i(960253).e)(),
                    u = (0, i(960253).I)(() => ({
                        highlight: {
                            position: "absolute",
                            top: l ? l.top : 0,
                            insetInlineStart: 4,
                            height: l ? l.height : 0,
                            width: "calc(100% - 8px)",
                            background: "dark" === p ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                            boxShadow: i(632079).Tj.buttonBlueFocusRing,
                            borderRadius: 4,
                            pointerEvents: d
                        },
                        topOpacityLayer: {
                            position: "absolute",
                            top: 0,
                            height: l ? l.top - 4 : 0,
                            width: "100%",
                            zIndex: 999,
                            background: i(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        bottomOpacityLayer: {
                            position: "absolute",
                            top: l ? l.top + l.height + 4 : void 0,
                            height: l ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            background: i(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        interactionGuard: {
                            position: "absolute",
                            top: 0,
                            height: l ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            pointerEvents: d
                        }
                    }), [l, d, p]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        style: u.highlight
                    }), c.current ? (0, o.createPortal)((0, a.jsx)("div", {
                        style: u.bottomOpacityLayer
                    }), c.current) : (0, a.jsx)("div", {
                        style: u.bottomOpacityLayer
                    }), c.current ? (0, o.createPortal)((0, a.jsx)("div", {
                        style: u.topOpacityLayer
                    }), c.current) : (0, a.jsx)("div", {
                        style: u.topOpacityLayer
                    }), (0, a.jsx)("div", {
                        style: u.interactionGuard
                    })]
                })
            }
        },
        357709: (e, t, i) => {
            function n(e, t) {
                let n = (0, i(462391).h2)(t.callout_key);
                n && (t.placement_key = (0, i(462391).t9)(n)), (0, i(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: n ? "static" : "cio"
                        }
                    }
                })
            }

            function o(e, t) {
                let n = (0, i(462391).h2)(t.callout_key);
                n && (t.placement_key = (0, i(462391).t9)(n)), (0, i(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: n ? "static" : "cio"
                        }
                    }
                }), t.callout_key && i(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function a(e, t) {
                let n = (0, i(462391).h2)(t.callout_key);
                n && (t.placement_key = (0, i(462391).t9)(n)), (0, i(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: n ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let n = (0, i(462391).h2)(t.callout_key);
                n && (t.placement_key = (0, i(462391).t9)(n)), (0, i(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: n ? "static" : "cio"
                        }
                    }
                })
            }

            function s(e, t) {
                let {
                    eligible_callouts: n,
                    required_arg_timeout: o,
                    required_args_run_duration: a,
                    eligibility_timeouts: l,
                    blocklist: s
                } = t;
                (0, i(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: n,
                            required_arg_timeout: o,
                            required_args_run_duration: a,
                            eligibility_timeouts: l,
                            blocklist: s
                        }
                    }
                })
            }

            function r(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, i(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                let n = (0, i(462391).h2)(t.callout_key);
                n && (t.placement_key = (0, i(462391).t9)(n)), (0, i(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: n ? "static" : "cio"
                        }
                    }
                })
            }
            i.d(t, {
                Ak: () => d,
                Cu: () => c,
                DL: () => n,
                Jb: () => l,
                Sq: () => a,
                Y5: () => o,
                gc: () => r,
                wo: () => s
            })
        },
        436281: (e, t, i) => {
            i.d(t, {
                Ue: () => l,
                wY: () => d
            }), i(944114), i(898992), i(803949);
            var n = i(296540),
                o = i(474848);
            let a = (0, n.createContext)(void 0);

            function l(e) {
                let {
                    children: t
                } = e, [l, s] = (0, n.useState)(100), r = (0, i(960253).I)(() => ({
                    card: {
                        marginBottom: `-${l}%`,
                        transitionProperty: "margin-bottom",
                        transitionDuration: "300ms",
                        transitionTimingFunction: "ease"
                    }
                }), [l]);
                (0, n.useEffect)(() => {
                    s(0)
                }, []);
                let c = (0, n.useCallback)(e => {
                    s(100), setTimeout(e, 300)
                }, []);
                return (0, o.jsx)(a.Provider, {
                    value: c,
                    children: (0, o.jsx)("div", {
                        style: r.card,
                        children: t
                    })
                })
            }
            a.displayName = "AnimationDismissContext";
            let s = {
                    background: "transparent",
                    margin: 8,
                    display: "flex",
                    position: "relative"
                },
                r = {
                    position: "absolute",
                    top: 8,
                    insetInlineEnd: 8,
                    width: 20,
                    height: 20,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                c = {
                    position: "relative"
                };

            function d(e) {
                let t, {
                        onClick: l,
                        onDismiss: d,
                        colorVariant: p = "secondary",
                        ...u
                    } = e,
                    g = i(632079).Tj.background[p],
                    {
                        hovered: m,
                        pressed: h
                    } = (0, i(133251)._S)({
                        color: g,
                        hoveredAdjustmentFactor: .5,
                        pressedAdjustmentFactor: 1
                    }),
                    x = (0, i(960253).I)(() => ({
                        card: {
                            width: "100%",
                            position: "relative",
                            padding: 8,
                            borderRadius: 8,
                            boxShadow: i(632079).Tj.shadow.outline.sm,
                            background: g,
                            WebkitBackdropFilter: "blur(30px)",
                            backdropFilter: "blur(30px)",
                            overflow: "hidden"
                        },
                        cardHovered: {
                            background: m
                        },
                        cardPressed: {
                            background: h
                        }
                    }), [m, h, g]),
                    b = (0, n.useContext)(a),
                    v = (0, n.useCallback)(e => {
                        e.stopPropagation(), b ? b(() => null == d ? void 0 : d()) : null == d || d()
                    }, [d, b]);
                return d && (t = (0, o.jsx)(i(988022).p, {
                    colorPalette: "gray",
                    size: "xs",
                    style: r,
                    onClick: v,
                    children: (0, o.jsx)(i(16275).I, {
                        icon: i(25094).xMarkSmallIcon,
                        size: "xs",
                        colorVariant: "secondary"
                    })
                })), (0, o.jsx)("div", {
                    style: s,
                    children: l ? (0, o.jsxs)(i(64960).Ay, {
                        onClick: l,
                        style: x.card,
                        hoveredStyle: x.cardHovered,
                        pressedStyle: x.cardPressed,
                        children: [(0, o.jsx)(i(4458).VP, {
                            gap: 8,
                            className: "autolayout-fill-width",
                            style: c,
                            children: (0, o.jsx)(y, { ...u
                            })
                        }), t]
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(i(4458).VP, {
                            style: x.card,
                            gap: 8,
                            className: "autolayout-fill-width",
                            children: (0, o.jsx)(y, { ...u
                            })
                        }), t]
                    })
                })
            }
            let p = {
                    position: "relative",
                    paddingTop: 4
                },
                u = {
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                g = {
                    textWrap: "pretty"
                },
                m = {
                    textWrap: "pretty"
                },
                h = {
                    marginInlineStart: 6
                };

            function y(e) {
                let t, {
                        title: n,
                        body: a,
                        buttons: l,
                        imageSources: s,
                        imageHeight: r,
                        imageMarginLeft: d,
                        imageMarginTop: y,
                        imageUseFullBleed: b,
                        onDismiss: v,
                        icon: f,
                        iconColor: k,
                        badge: j,
                        fullWidth: w,
                        heroElement: S
                    } = e,
                    _ = (0, i(960253).e)(),
                    C = (null == j ? void 0 : j.placement) ? ? "inlineWithTitle",
                    I = (0, i(960253).I)(() => ({
                        image: { ...b ? {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center"
                            } : {
                                height: r ? ? 56,
                                alignSelf: "start",
                                maxWidth: "100%",
                                marginInlineStart: d ? ? 4,
                                marginTop: y ? ? 0
                            }
                        },
                        imageFullBleedContainer: {
                            position: "relative",
                            overflow: "hidden",
                            width: "calc(100% + 16px)",
                            height: r ? ? 120,
                            marginInlineStart: -8,
                            marginTop: -8
                        },
                        icon: {
                            width: i(104509).Ev.default,
                            height: i(104509).Ev.default,
                            fill: k ? i(632079).Tj[k].icon.accentPrimary : i(632079).Tj.icon.primary
                        },
                        badge: {
                            display: "inline-flex",
                            alignSelf: "aboveTitle" === C ? "flex-start" : void 0
                        }
                    }), [k, r, d, y, b, C]),
                    T = [];
                if (l && (0, i(722371).EI)(l) && l.forEach((e, t) => T.push((0, o.jsx)(x, { ...e
                    }, t))), s) {
                    let e = (0, o.jsx)("img", {
                        src: s[_],
                        style: I.image,
                        alt: ""
                    });
                    t = b ? (0, o.jsx)("div", {
                        style: I.imageFullBleedContainer,
                        children: e
                    }) : e
                } else S && (t = S);
                return (0, o.jsxs)(o.Fragment, {
                    children: [t, (0, o.jsxs)(i(4458).fI, {
                        className: "autolayout-fill-width",
                        style: c,
                        children: [f ? (0, o.jsx)("span", {
                            style: u,
                            children: f(I.icon)
                        }) : null, (0, o.jsxs)(i(4458).VP, {
                            gap: 4,
                            style: p,
                            flex: "1 1 0",
                            children: [(0, o.jsxs)(i(4458).VP, {
                                gap: 4,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingInlineStart: 8 * !w,
                                paddingInlineEnd: w ? 0 : v ? 32 : 8,
                                style: c,
                                children: [j && "aboveTitle" === C ? (0, o.jsx)(i(746434).E, {
                                    content: j.content,
                                    color: j.color,
                                    style: I.badge
                                }) : null, (0, o.jsxs)(i(111010).D, {
                                    style: g,
                                    styleKey: "captionSemibold",
                                    colorVariant: "primary",
                                    children: [n, j && "inlineWithTitle" === C ? (0, o.jsx)("span", {
                                        style: h,
                                        children: (0, o.jsx)(i(746434).E, {
                                            content: j.content,
                                            color: j.color,
                                            style: I.badge
                                        })
                                    }) : null]
                                }), (0, o.jsx)(i(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: m,
                                    children: a
                                })]
                            }), (0, o.jsx)("div", {
                                children: T
                            })]
                        })]
                    })]
                })
            }

            function x(e) {
                let {
                    text: t,
                    onClick: n,
                    leftIcon: a,
                    rightIcon: l,
                    disabled: s,
                    variant: r = "default",
                    colorPalette: d,
                    colorVariant: p = "primary"
                } = e, u = "outline-fill" === r, g = (0, i(960253).I)(() => ({
                    defaultIconStyles: {
                        width: i(104509).Ev.sm,
                        height: i(104509).Ev.sm,
                        fill: s ? i(632079).Tj.gray.text.primary : d ? i(632079).Tj[d].text[p] : i(632079).Tj.text.primary
                    },
                    button: {
                        paddingTop: 4,
                        paddingInlineEnd: 8,
                        paddingBottom: 4,
                        paddingInlineStart: a ? 6 : 8,
                        borderRadius: 6,
                        ...u ? {
                            width: "100%"
                        } : {}
                    }
                }), [a, u, d, p, s]), m = "outline-fill" === r ? i(548436).A : i(64960).Ay;
                return (0, o.jsx)(i(4458).fI, {
                    className: "autolayout-fill-width",
                    style: c,
                    children: (0, o.jsx)(m, {
                        disabled: s,
                        style: g.button,
                        onClick: n,
                        children: (0, o.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            justifyContent: u ? "center" : void 0,
                            gap: a ? 4 : 6,
                            className: u ? "autolayout-fill-width" : void 0,
                            style: c,
                            children: [a ? a(g.defaultIconStyles) : null, (0, o.jsx)(i(111010).D, {
                                styleKey: "captionSemibold",
                                colorPalette: s ? "gray" : d ? ? void 0,
                                colorVariant: s ? "primary" : p,
                                children: t
                            }), l ? l(g.defaultIconStyles) : null]
                        })
                    })
                })
            }
        },
        466290: (e, t, i) => {
            i.d(t, {
                K: () => o
            });
            var n = () => i(906745);

            function o(e, t) {
                i(696190).default.isVisible(t.key) && (i(696190).default.removeMessage(t.key), i(986939).A.isAdminMode || (! function(e, t) {
                    let o = i(728372).AppStoreCurrentUserSettingsStore.state,
                        a = null == o ? void 0 : o.getSettings();
                    if (!a || !o) return;
                    let l = new(i(543346)).GO(a.callout_placement_exposures);
                    for (let e of t) l.add(e, n().DateTime.now().toMillis());
                    (0, i(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, i(862759).m)({
                                userSettingsStore: o,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: l.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, i(125542).Q3)(t)]), (0, i(476114).q)(e, t), i(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, i(819416).Z)(e, t.key)), i(696190).default.isPendingDynamicMessage(t.key) && (0, i(740063).G)(t.key))
            }
        },
        476114: (e, t, i) => {
            function n({
                environment: e,
                message: t,
                overwrite: o = !1
            }) {
                let a = i(728372).AppStoreCurrentUserSettingsStore.state,
                    l = null == a ? void 0 : a.getSettings();
                if (!a || !l) return;
                let s = new Map((l.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!s.has(t.key) || o) && s.set(t.key, {
                    name: t.key,
                    timestamp: i(906745).DateTime.now().toMillis()
                }), (0, i(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(s.values())
                            }
                        })
                    }
                })
            }

            function o(e, t) {
                let o = (0, i(125542).K0)(t);
                "once_per_user" === o ? n({
                    environment: e,
                    message: t
                }) : "once_per_space" === o && function({
                    environment: e,
                    message: t,
                    overwrite: n = !1
                }) {
                    let o = i(728372).AppStoreSidebarSpaceViewStore.state,
                        a = null == o ? void 0 : o.getSettings();
                    if (!o || !a) return;
                    let l = o.getSpaceId(),
                        s = new Map((a.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!s.has(t.key) || n) && s.set(t.key, {
                        name: t.key,
                        timestamp: i(906745).DateTime.now().toMillis()
                    }), (0, i(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            i(380762).AG(o, e, {
                                callout_dismissal_timestamps: Array.from(s.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            i.d(t, {
                q: () => o,
                H: () => n
            }), i(581454)
        },
        522883: (e, t, i) => {
            i.d(t, {
                j: () => n
            });
            let n = {
                calendar: (0, i(109939).YK)({
                    title: {
                        id: "sidebar.appSwitcher.calendar.openTooltip",
                        defaultMessage: "Open Notion Calendar"
                    },
                    subtitle: {
                        id: "sidebar.appSwitcher.calendar.openTooltip.subtitle",
                        defaultMessage: "Manage your personal life and work all in one place"
                    },
                    alt: {
                        id: "sidebar.appSwitcher.calendar.openTooltip.alt",
                        defaultMessage: "Notion Calendar promotional image"
                    }
                }),
                mail: (0, i(109939).YK)({
                    title: {
                        id: "sidebar.appSwitcher.mail.tooltip",
                        defaultMessage: "Open Notion Mail"
                    },
                    subtitle: {
                        id: "sidebar.appSwitcher.mail.openTooltip.subtitle",
                        defaultMessage: "The self-organizing inbox, with everything you love about Notion"
                    },
                    alt: {
                        id: "sidebar.appSwitcher.mail.openTooltip.alt",
                        defaultMessage: "Notion Mail promotional image"
                    }
                }),
                notionDesktopOpen: (0, i(109939).YK)({
                    title: {
                        id: "sidebar.appSwitcher.desktopOpen.tooltip",
                        defaultMessage: "Open in Notion for Desktop"
                    },
                    subtitle: {
                        id: "sidebar.appSwitcher.desktop.openTooltip.subtitle",
                        defaultMessage: "Load pages 50% faster, offline mode, AI meeting notes, and more"
                    },
                    alt: {
                        id: "sidebar.appSwitcher.desktop.openTooltip.alt",
                        defaultMessage: "Notion Application Icon with a paper airplane behind"
                    }
                }),
                notionDesktopDownload: (0, i(109939).YK)({
                    title: {
                        id: "sidebar.appSwitcher.desktopDownload.tooltip",
                        defaultMessage: "Download Notion for Desktop"
                    },
                    subtitle: {
                        id: "sidebar.appSwitcher.desktop.openTooltip.subtitle",
                        defaultMessage: "Load pages 50% faster, offline mode, AI meeting notes, and more"
                    },
                    alt: {
                        id: "sidebar.appSwitcher.desktop.openTooltip.alt",
                        defaultMessage: "Notion Application Icon with a paper airplane behind"
                    }
                })
            }
        },
        597350: (e, t, i) => {
            i.d(t, {
                p: () => a
            });
            var n = i(296540),
                o = i(474848);

            function a(e) {
                let {
                    tooltip: t,
                    onClick: a,
                    icon: l,
                    label: s
                } = e, [r, c] = (0, n.useState)(!1), d = (0, i(665002).g)(), p = (0, i(624467).m)();
                return t && !p ? (0, o.jsx)(i(51831).m, {
                    content: () => t,
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, o.jsx)(i(64960).Ay, { ...e,
                        style: { ...i(132261).DX.baseSidebarItem,
                            ...d && {
                                transition: "none"
                            }
                        },
                        onClick: a,
                        onMouseEnter: t => {
                            var i;
                            c(!0), null == (i = e.onMouseEnter) || i.call(e, t)
                        },
                        onMouseLeave: t => {
                            var i;
                            c(!1), null == (i = e.onMouseLeave) || i.call(e, t)
                        },
                        children: (0, o.jsx)(i(380559).u, {
                            left: l,
                            right: r ? (0, o.jsx)(i(16275).I, {
                                icon: i(759706).arrowDiagonalUpRightSmallIcon,
                                colorVariant: "tertiary",
                                size: "sm"
                            }) : null,
                            children: s
                        })
                    })
                }) : (0, o.jsx)(i(64960).Ay, {
                    style: { ...i(132261).DX.baseSidebarItem,
                        ...d && {
                            transition: "none"
                        }
                    },
                    onClick: a,
                    onMouseEnter: () => {
                        c(!0)
                    },
                    onMouseLeave: () => {
                        c(!1)
                    },
                    children: (0, o.jsx)(i(380559).u, {
                        left: l,
                        right: r ? (0, o.jsx)(i(16275).I, {
                            icon: i(759706).arrowDiagonalUpRightSmallIcon,
                            colorVariant: "tertiary",
                            size: "sm"
                        }) : null,
                        children: s
                    })
                })
            }
        },
        612670: (e, t, i) => {
            i.d(t, {
                F: () => o
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    svg: (0, i(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M17.4685918,3.4486694c-.276062-.4232178-.7411499-.6759033-1.2441406-.6759033-.1889648,0-.3743896.0357056-.5512085.1061401L3.0777837,7.8930664c-.40271.1603394-.6936035.5178223-.7687378.9447021s.0762329.8622437.4000244,1.1503906l2.4732056,2.2012329v4.2337646c0,.6617432.793457,1.0004272,1.2713013.5426636l1.9723511-1.8895264,2.0613403,1.8346558c.2311401.2056885.52771.3162842.8310547.3162842.088501,0,.1775513-.0094604.2657471-.0286255.390625-.0849609.71698-.3516235.8781738-.7174683l5.1207275-11.6225586c.2032471-.4614868.1604614-.9884644-.1143799-1.4099121ZM16.4390508,4.3546143l-5.1207275,11.6225586-3.963623-3.52771,5.2460327-5.0794067c.064209-.065918.0716553-.168457.0177002-.243042-.0568237-.0785522-.1638184-.1014404-.2478638-.0530396l-6.562439,3.9990234-2.2680054-2.0185547,12.5956421-5.0142822c.0299683-.0119019.0598755-.017395.0886841-.017395.15979,0,.2867432.1680908.2145996.3318481Z",
                        clipRule: "evenodd"
                    })
                },
                o = (0, i(104509).wt)("mail", n, "default")
        },
        637847: (e, t, i) => {
            i.d(t, {
                j: () => n
            });

            function n(e) {
                (0, i(104310).u)({
                    event: {
                        eventName: "click_mail_sidebar_link",
                        eventProperties: {}
                    }
                })
            }
        },
        734389: (e, t, i) => {
            i.d(t, {
                O: () => n
            });

            function n(e, t) {
                (0, i(466290).K)(e, t)
            }
        },
        825485: (e, t, i) => {
            i.d(t, {
                k: () => r
            });
            var n = i(296540),
                o = i(474848);
            let a = {
                    calendar: (0, i(703003).j)(i(896221).A.images.connectedApps.accountCreationUpsellTooltip.calendar),
                    mail: (0, i(703003).j)(i(896221).A.images.connectedApps.accountCreationUpsellTooltip.mail),
                    notionDesktopOpen: (0, i(703003).j)(i(896221).A.images.connectedApps.accountCreationUpsellTooltip.notionDesktopOpen),
                    notionDesktopDownload: (0, i(703003).j)(i(896221).A.images.connectedApps.accountCreationUpsellTooltip.notionDesktopDownload)
                },
                l = {
                    closeButton: {
                        position: "absolute",
                        top: "10px",
                        insetInlineEnd: "10px",
                        borderRadius: "12px",
                        background: i(632079).Tj.background.tertiary,
                        backdropFilter: "blur(16px)"
                    },
                    closeButtonIcon: {
                        fill: i(632079).Tj.icon.primary
                    },
                    img: {
                        borderStartStartRadius: 8,
                        borderStartEndRadius: 8,
                        borderEndEndRadius: 4,
                        borderEndStartRadius: 4,
                        width: "218px",
                        height: "146px"
                    },
                    loadingText: {
                        height: 14,
                        borderRadius: 4,
                        width: "100%",
                        marginBottom: 3
                    },
                    subtitle: {
                        paddingBottom: "3px"
                    },
                    style0: {
                        width: "80%"
                    }
                },
                s = (0, i(64960)._S)({
                    color: i(632079).Tj.background.secondary
                });

            function r({
                calendarElement: e,
                mailElement: t,
                notionDesktopElement: c,
                hoveredAppTarget: d,
                imageFailedToLoad: p,
                setImageFailedToLoad: u,
                inAppCalloutHandlers: g,
                isAppTargetLoading: m,
                renderCarat: h = !0
            }) {
                let y, x, b = (0, i(632079).O4)({
                        theme: "dark"
                    }),
                    v = (0, i(109939).tz)(),
                    [f, k] = (0, n.useState)(!1),
                    j = !!g;
                switch (d) {
                    case "calendar":
                        x = null == e ? void 0 : e.getBoundingClientRect();
                        break;
                    case "mail":
                        x = null == t ? void 0 : t.getBoundingClientRect();
                        break;
                    case "notionDesktopOpen":
                    case "notionDesktopDownload":
                        x = null == c ? void 0 : c.getBoundingClientRect();
                        break;
                    default:
                        x = void 0
                }
                x && (y = x.left + 1);
                let w = (0, i(960253).e)(),
                    S = (0, i(960253).I)(() => ({
                        container: {
                            cursor: j ? "pointer" : "default",
                            display: "flex",
                            flexDirection: "column",
                            padding: "4px",
                            borderRadius: "10px",
                            gap: "4px",
                            background: b.background.accentPrimary,
                            boxShadow: b.shadow.outline.lg
                        },
                        closeButtonHovered: {
                            background: s.hovered
                        },
                        openIcon: {
                            fill: f ? b.icon.primary : b.icon.tertiary
                        },
                        rectangle: void 0 === y ? {
                            display: "none"
                        } : {
                            background: b.background.accentPrimary,
                            transform: `translateX(${y}px) rotate(-45deg)`,
                            borderRadius: "0px 2px",
                            width: "14px",
                            height: "14px",
                            position: "absolute",
                            bottom: "-7px",
                            insetInlineStart: "0px",
                            transition: "transform 100ms",
                            transitionTimingFunction: i(46431).z.animationConfig.timingFunction,
                            transformOrigin: "center",
                            ..."dark" === w ? {
                                boxShadow: b.shadow.outline.lg,
                                clipPath: "polygon(-1px 1px, -1px 15px, 13px 15px, 13px 1px)"
                            } : {}
                        }
                    }), [y, b, f, j, w]),
                    _ = i(522883).j[d],
                    C = p ? void 0 : a[d],
                    I = p ? i(739528).M : (0, i(703003).L)(i(896221).A.images.connectedApps.accountCreationUpsellTooltip[d]["1XPng"]);
                return (0, o.jsx)(i(172474).BQ, {
                    mode: "dark",
                    children: (0, o.jsxs)("div", {
                        style: S.container,
                        onMouseOver: () => k(!0),
                        onMouseOut: () => k(!1),
                        onClick: () => null == g ? void 0 : g.onClick(),
                        role: "button",
                        tabIndex: -1,
                        children: [(0, o.jsx)("img", {
                            style: l.img,
                            src: I,
                            alt: v.formatMessage(_.alt),
                            srcSet: C,
                            onError: () => null == u ? void 0 : u(!0)
                        }), j ? (0, o.jsx)(i(374533).A, {
                            style: l.closeButton,
                            hoveredStyle: S.closeButtonHovered,
                            iconStyle: l.closeButtonIcon,
                            ariaLabel: v.formatMessage({
                                id: "dismiss_connected_app_upsell_popover",
                                defaultMessage: "Close promotional tooltip for calendar or mail app buttons"
                            }),
                            icon: i(25094).xMarkSmallIcon,
                            onClick: e => {
                                e.stopPropagation(), null == g || g.onDismiss()
                            }
                        }) : null, (0, o.jsxs)(i(4458).VP, {
                            paddingBlock: 8,
                            paddingInline: 10,
                            alignSelf: "stretch",
                            gap: 2,
                            children: [(0, o.jsxs)(i(4458).fI, {
                                gap: 2,
                                alignItems: "center",
                                children: [m === d ? (0, o.jsx)(i(795830).P, {
                                    style: { ...l.loadingText,
                                        ...l.style0
                                    }
                                }) : (0, o.jsx)(i(111010).D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "primary",
                                    children: (0, o.jsx)(i(109939).sA, { ..._.title
                                    })
                                }), j ? (0, o.jsx)(i(16275).I, {
                                    icon: i(759706).arrowDiagonalUpRightSmallIcon,
                                    size: "sm",
                                    style: S.openIcon
                                }) : null]
                            }), (0, o.jsx)("div", {
                                style: l.subtitle,
                                children: m === d ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(i(795830).P, {
                                        style: l.loadingText
                                    }), (0, o.jsx)(i(795830).P, {
                                        style: l.loadingText
                                    })]
                                }) : (0, o.jsx)(i(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: (0, o.jsx)(i(109939).sA, { ..._.subtitle
                                    })
                                })
                            })]
                        }), h ? (0, o.jsx)("div", {
                            style: S.rectangle
                        }) : null]
                    })
                })
            }
        }
    }
]);