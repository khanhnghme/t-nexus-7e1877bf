"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16459], {
        10123: (e, t, n) => {
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e) {
                (0, n(570551).A)(1, arguments);
                var t = Object.prototype.toString.call(e);
                return e instanceof Date || "object" === o(e) && "[object Date]" === t ? new Date(e.getTime()) : "number" == typeof e || "[object Number]" === t ? new Date(e) : (("string" == typeof e || "[object String]" === t) && "u" > typeof console && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(Error().stack)), new Date(NaN))
            }
            n.d(t, {
                A: () => r
            })
        },
        148904: (e, t, n) => {
            n.d(t, {
                M: () => l
            });
            var o = n(296540),
                r = () => n(696190),
                i = n(474848);
            let a = {
                display: "flex",
                flexDirection: "column",
                width: "226px",
                overflow: "visible",
                boxShadow: "none"
            };

            function l(e) {
                let {
                    onDismiss: t,
                    onClick: l
                } = e, s = (0, o.useRef)(null), u = n(161323).Vz[e.notionApp], c = (0, n(682985).K8)(() => {
                    for (let e of u) {
                        let t = r().default.state.messages.get(e);
                        if (t) return t
                    }
                }, [u]), {
                    onClick: d,
                    onDismiss: p
                } = (0, n(105875).t)({
                    messageKey: c ? (0, n(462391).h2)(c.key) : void 0
                }), g = (0, o.useCallback)(() => {
                    p(), null == t || t()
                }, [p, t]), h = (0, o.useCallback)(() => {
                    d(), l()
                }, [d, l]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(n(152779).i, {
                        contentRef: e.isOpen ? s : {
                            current: null
                        },
                        allowClickthrough: !0
                    }), (0, i.jsx)(n(182718).zD, {
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
                        popupType: n(182718).nl.Popup,
                        alignmentToOrigin: "center",
                        placementToOrigin: "right",
                        viewportPadding: 6,
                        originGap: 15,
                        style: n(46431).z.style,
                        animationConfig: n(46431).z.animationConfig,
                        popupWrapStyle: a,
                        content: () => (0, i.jsx)(n(825485).k, {
                            inAppCalloutHandlers: {
                                onClick: h,
                                onDismiss: g
                            },
                            calendarElement: s.current,
                            mailElement: s.current,
                            notionDesktopElement: s.current,
                            hoveredAppTarget: e.notionApp,
                            renderCarat: !1
                        }),
                        children: (0, i.jsx)("div", {
                            ref: s,
                            children: e.originElement
                        })
                    })]
                })
            }
        },
        152779: (e, t, n) => {
            n.d(t, {
                i: () => a
            });
            var o = n(296540),
                r = n(440961),
                i = n(474848);

            function a({
                contentRef: e,
                allowClickthrough: t
            }) {
                return (0, n(83208).X)("adoption_sidebar_tourtip_overlay_portal") ? (0, i.jsx)(s, {
                    contentRef: e,
                    allowClickthrough: t
                }) : (0, i.jsx)(l, {
                    contentRef: e,
                    allowClickthrough: t
                })
            }

            function l({
                contentRef: e,
                allowClickthrough: t
            }) {
                let [r, a] = o.useState(null);
                o.useEffect(() => {
                    var t;
                    let o = n(381453).sg(() => {
                            var t;
                            a((null == (t = e.current) ? void 0 : t.getBoundingClientRect()) || null)
                        }, 50, {
                            leading: !0
                        }),
                        r = new ResizeObserver(o),
                        i = null == (t = n(862921).A.SidebarScroller) ? void 0 : t.getNode();
                    return i && r.observe(i), window.addEventListener("resize", o), () => {
                        r.disconnect(), window.removeEventListener("resize", o)
                    }
                }, [e]);
                let s = t ? "none" : void 0,
                    u = (0, n(960253).e)(),
                    c = (0, n(960253).I)(() => ({
                        highlight: {
                            position: "absolute",
                            top: r ? r.top : 0,
                            insetInlineStart: 4,
                            height: r ? r.height : 0,
                            width: "calc(100% - 8px)",
                            background: "dark" === u ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                            boxShadow: n(632079).Tj.buttonBlueFocusRing,
                            borderRadius: 4,
                            pointerEvents: s
                        },
                        topOpacityLayer: {
                            position: "absolute",
                            top: 0,
                            height: r ? r.top - 4 : 0,
                            width: "100%",
                            zIndex: 999,
                            background: n(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        bottomOpacityLayer: {
                            position: "absolute",
                            top: r ? r.top + r.height + 4 : void 0,
                            height: r ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            background: n(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        interactionGuard: {
                            position: "absolute",
                            top: 0,
                            height: r ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            pointerEvents: s
                        }
                    }), [r, s, u]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: c.highlight
                    }), (0, i.jsx)("div", {
                        style: c.bottomOpacityLayer
                    }), (0, i.jsx)("div", {
                        style: c.topOpacityLayer
                    }), (0, i.jsx)("div", {
                        style: c.interactionGuard
                    })]
                })
            }

            function s({
                contentRef: e,
                allowClickthrough: t
            }) {
                let [a, l] = o.useState(null), u = o.useRef(null);
                o.useEffect(() => {
                    var t;
                    let o = n(381453).sg(() => {
                            var t;
                            l((null == (t = e.current) ? void 0 : t.getBoundingClientRect()) || null)
                        }, 50, {
                            leading: !0
                        }),
                        r = new ResizeObserver(o),
                        i = null == (t = n(862921).A.SidebarScroller) ? void 0 : t.getNode();
                    return i && (r.observe(i), u.current = i), window.addEventListener("resize", o), () => {
                        r.disconnect(), window.removeEventListener("resize", o)
                    }
                }, [e]);
                let c = t ? "none" : void 0,
                    d = (0, n(960253).e)(),
                    p = (0, n(960253).I)(() => ({
                        highlight: {
                            position: "absolute",
                            top: a ? a.top : 0,
                            insetInlineStart: 4,
                            height: a ? a.height : 0,
                            width: "calc(100% - 8px)",
                            background: "dark" === d ? "rgba(255, 255, 255, 0.05)" : "rgba(0, 0, 0, 0.05)",
                            boxShadow: n(632079).Tj.buttonBlueFocusRing,
                            borderRadius: 4,
                            pointerEvents: c
                        },
                        topOpacityLayer: {
                            position: "absolute",
                            top: 0,
                            height: a ? a.top - 4 : 0,
                            width: "100%",
                            zIndex: 999,
                            background: n(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        bottomOpacityLayer: {
                            position: "absolute",
                            top: a ? a.top + a.height + 4 : void 0,
                            height: a ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            background: n(632079).Tj.background.secondary,
                            opacity: .6
                        },
                        interactionGuard: {
                            position: "absolute",
                            top: 0,
                            height: a ? "100vh" : 0,
                            width: "100%",
                            zIndex: 999,
                            pointerEvents: c
                        }
                    }), [a, c, d]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)("div", {
                        style: p.highlight
                    }), u.current ? (0, r.createPortal)((0, i.jsx)("div", {
                        style: p.bottomOpacityLayer
                    }), u.current) : (0, i.jsx)("div", {
                        style: p.bottomOpacityLayer
                    }), u.current ? (0, r.createPortal)((0, i.jsx)("div", {
                        style: p.topOpacityLayer
                    }), u.current) : (0, i.jsx)("div", {
                        style: p.topOpacityLayer
                    }), (0, i.jsx)("div", {
                        style: p.interactionGuard
                    })]
                })
            }
        },
        194188: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e) {
                if (null === e || !0 === e || !1 === e) return NaN;
                var t = Number(e);
                return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t)
            }
        },
        200979: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                (0, n(570551).A)(2, arguments);
                var o = (0, n(194188).A)(t);
                return (0, n(392998).A)(e, -o)
            }
        },
        392998: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                (0, n(570551).A)(2, arguments);
                var o = (0, n(10123).A)(e),
                    r = (0, n(194188).A)(t);
                return isNaN(r) ? new Date(NaN) : (r && o.setDate(o.getDate() + r), o)
            }
        },
        570551: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                if (t.length < e) throw TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present")
            }
        },
        597350: (e, t, n) => {
            n.d(t, {
                p: () => i
            });
            var o = n(296540),
                r = n(474848);

            function i(e) {
                let {
                    tooltip: t,
                    onClick: i,
                    icon: a,
                    label: l
                } = e, [s, u] = (0, o.useState)(!1), c = (0, n(665002).g)(), d = (0, n(624467).m)();
                return t && !d ? (0, r.jsx)(n(51831).m, {
                    content: () => t,
                    originGap: 6,
                    textWrap: !0,
                    placement: "right",
                    children: e => (0, r.jsx)(n(64960).Ay, { ...e,
                        style: { ...n(132261).DX.baseSidebarItem,
                            ...c && {
                                transition: "none"
                            }
                        },
                        onClick: i,
                        onMouseEnter: t => {
                            var n;
                            u(!0), null == (n = e.onMouseEnter) || n.call(e, t)
                        },
                        onMouseLeave: t => {
                            var n;
                            u(!1), null == (n = e.onMouseLeave) || n.call(e, t)
                        },
                        children: (0, r.jsx)(n(380559).u, {
                            left: a,
                            right: s ? (0, r.jsx)(n(16275).I, {
                                icon: n(759706).arrowDiagonalUpRightSmallIcon,
                                colorVariant: "tertiary",
                                size: "sm"
                            }) : null,
                            children: l
                        })
                    })
                }) : (0, r.jsx)(n(64960).Ay, {
                    style: { ...n(132261).DX.baseSidebarItem,
                        ...c && {
                            transition: "none"
                        }
                    },
                    onClick: i,
                    onMouseEnter: () => {
                        u(!0)
                    },
                    onMouseLeave: () => {
                        u(!1)
                    },
                    children: (0, r.jsx)(n(380559).u, {
                        left: a,
                        right: s ? (0, r.jsx)(n(16275).I, {
                            icon: n(759706).arrowDiagonalUpRightSmallIcon,
                            colorVariant: "tertiary",
                            size: "sm"
                        }) : null,
                        children: l
                    })
                })
            }
        },
        606982: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                (0, n(570551).A)(2, arguments);
                var o = (0, n(10123).A)(e),
                    r = (0, n(10123).A)(t),
                    i = o.getTime() - r.getTime();
                return i < 0 ? -1 : i > 0 ? 1 : i
            }
        },
        820424: (e, t, n) => {
            n.r(t), n.d(t, {
                NotionAppsCalendarItem: () => i
            });
            var o = n(296540),
                r = n(474848);

            function i() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(345296).X)(),
                    i = (0, n(624467).m)("calendar"),
                    a = (0, n(624467).m)(),
                    l = (0, o.useCallback)(() => {
                        n(368690).uX(), t ? (0, n(874809).Op)({
                            environment: e,
                            spaceStore: void 0,
                            collectionViewStore: void 0,
                            from: "appSwitcher"
                        }) : (n(328373).o.setState({
                            signupCtaAttribution: "appSwitcher"
                        }), (0, n(171629).U)(e, "notion_calendar_launch_promo"))
                    }, [e, t]),
                    s = (0, n(682985).O$)(n(610463).X),
                    {
                        eventsLoadingState: u
                    } = (0, n(24962).O)("personal_home");
                return i ? (0, r.jsx)(n(148904).M, {
                    notionApp: "calendar",
                    originElement: (0, r.jsx)(n(597350).p, {
                        onClick: l,
                        icon: (0, r.jsx)(n(968107).y, {
                            colorVariant: "secondary"
                        }),
                        label: (0, r.jsx)(n(109939).sA, {
                            id: "sidebar.notionapp.calendar.label",
                            defaultMessage: "Notion Calendar"
                        })
                    }),
                    isOpen: i,
                    onClick: l
                }) : s && "rejected" !== u.status && !a ? (0, r.jsx)(n(844705).s, {
                    placementToOrigin: "right",
                    alignmentToOrigin: "center",
                    originGap: 15,
                    canShowCustomPopover: !0,
                    hideUpsellPopover: () => {},
                    handleButtonClick: l,
                    originElement: (0, r.jsx)(n(597350).p, {
                        onClick: l,
                        icon: (0, r.jsx)(n(968107).y, {
                            colorVariant: "secondary"
                        }),
                        label: (0, r.jsx)(n(109939).sA, {
                            id: "sidebar.notionapp.calendar.label",
                            defaultMessage: "Notion Calendar"
                        })
                    })
                }) : (0, r.jsx)(n(597350).p, {
                    tooltip: (0, r.jsx)(n(109939).sA, {
                        id: "sidebar.notionapps.calendar.tooltip",
                        defaultMessage: "Open Notion Calendar"
                    }),
                    onClick: l,
                    icon: (0, r.jsx)(n(968107).y, {
                        colorVariant: "secondary"
                    }),
                    label: (0, r.jsx)(n(109939).sA, {
                        id: "sidebar.notionapp.calendar.label",
                        defaultMessage: "Notion Calendar"
                    })
                })
            }
        },
        851775: (e, t, n) => {
            n.d(t, {
                A: () => o
            });

            function o(e, t) {
                (0, n(570551).A)(2, arguments);
                var o = (0, n(10123).A)(e),
                    r = (0, n(194188).A)(t),
                    i = o.getFullYear(),
                    a = o.getDate(),
                    l = new Date(0);
                l.setFullYear(i, r, 15), l.setHours(0, 0, 0, 0);
                var s = function(e) {
                    (0, n(570551).A)(1, arguments);
                    var t = (0, n(10123).A)(e),
                        o = t.getFullYear(),
                        r = t.getMonth(),
                        i = new Date(0);
                    return i.setFullYear(o, r + 1, 0), i.setHours(0, 0, 0, 0), i.getDate()
                }(l);
                return o.setMonth(r, Math.min(a, s)), o
            }
        },
        894074: (e, t, n) => {
            function o(e) {
                return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }

            function r(e, t) {
                if ((0, n(570551).A)(2, arguments), "object" !== o(t) || null === t) throw RangeError("values parameter must be an object");
                var r = (0, n(10123).A)(e);
                return isNaN(r.getTime()) ? new Date(NaN) : (null != t.year && r.setFullYear(t.year), null != t.month && (r = (0, n(851775).A)(r, t.month)), null != t.date && r.setDate((0, n(194188).A)(t.date)), null != t.hours && r.setHours((0, n(194188).A)(t.hours)), null != t.minutes && r.setMinutes((0, n(194188).A)(t.minutes)), null != t.seconds && r.setSeconds((0, n(194188).A)(t.seconds)), null != t.milliseconds && r.setMilliseconds((0, n(194188).A)(t.milliseconds)), r)
            }
            n.d(t, {
                A: () => r
            })
        },
        968107: (e, t, n) => {
            n.d(t, {
                y: () => r
            }), n(296540);
            var o = n(474848);

            function r({
                dateNumber: e,
                ...t
            }) {
                let i = (0, n(897638).N)(e);
                return (0, o.jsx)(n(16275).I, {
                    icon: i,
                    size: "default",
                    ...t
                })
            }
        }
    }
]);