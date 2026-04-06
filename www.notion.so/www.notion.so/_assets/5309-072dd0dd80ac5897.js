"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5309, 30673], {
        24962: (e, t, n) => {
            n.d(t, {
                O: () => a
            }), n(898992), n(354520), n(581454), n(737550);
            var i = n(296540);

            function o(e) {
                if (0 === e.length) return !0;
                let t = e[0];
                return e.every(e => void 0 !== e && e === t)
            }

            function a(e) {
                let t = (0, n(533992).v3)(),
                    a = (0, n(515467).m)(),
                    d = (0, n(345776).T)(),
                    {
                        timeZone: u
                    } = (0, n(591742).mn)(),
                    p = (0, n(25825).lW)(u),
                    m = (0, n(132315).s5)(),
                    {
                        connectedAccounts: g,
                        disconnectedAccounts: v
                    } = (0, n(429946).B)(),
                    [f, y] = i.useState(0),
                    [h, x] = i.useState(!0),
                    b = (0, n(682985).K8)(() => {
                        var e;
                        let t = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail();
                        return t ? (0, n(120462).RM)({
                            currentUserEmail: t,
                            calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                            accounts: (0, n(440143).Y)().getCurrentAccounts()
                        }).allEligibleCalendars.map(e => e.id) : []
                    }, []),
                    k = (0, i.useMemo)(() => (0, n(381453).sg)(() => {
                        y(e => e + 1), x(!1), setTimeout(() => x(!0), 1e4)
                    }, 1e3, {
                        leading: !0,
                        trailing: !1
                    }), []),
                    {
                        sidebarSpaceViewStore: S,
                        sidebarSpaceStore: w
                    } = (0, n(682985).K8)(() => ({
                        sidebarSpaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                        sidebarSpaceStore: (0, n(328765).S)()
                    }), []),
                    _ = (0, n(682985).K8)(() => void 0 !== (0, n(440143).Y)().getHomeCalendarStateForSpaceView(), []),
                    j = (0, n(682985).K8)(() => {
                        var e;
                        let {
                            botSpaceId: t,
                            botUserId: i
                        } = a, l = null == S ? void 0 : S.getSpaceId(), r = null == S ? void 0 : S.getUserId(), s = null == w ? void 0 : w.id, c = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id;
                        return o([t, l, s]) && o([i, r, c, d])
                    }, [a, null == w ? void 0 : w.id, S, d]),
                    C = i.useRef(void 0),
                    [T] = (0, n(97668).Yb)(async () => {
                        let e = a.botId;
                        if (!j || !S) return "appNotSynced";
                        if (!e) return a.loading || (0, n(55067).F8)(), "noConnectedBot";
                        let i = await (0, n(55067).qq)({
                                environment: t,
                                sidebarSpaceViewStore: S,
                                botId: e,
                                forceRefetch: !1,
                                timeRange: (0, n(83748).M)(),
                                reason: {
                                    reason: "foreground_load"
                                }
                            }),
                            o = !C.current,
                            l = C.current && (C.current.spaceViewId !== S.id || C.current.botId !== e);
                        switch ("skipped" === i && (o || l) && c({
                            environment: t,
                            sidebarSpaceViewStore: S,
                            botId: e,
                            forceRefetch: !0,
                            timeRange: (0, n(83748).M)(),
                            updateMethod: "replace",
                            reason: {
                                reason: "background_load"
                            }
                        }), C.current = {
                            spaceViewId: S.id,
                            botId: e
                        }, i) {
                            case "success":
                            case "skipped":
                                return "loadCompleted";
                            case "failure":
                                return "loadError";
                            default:
                                (0, n(722371).HB)(i)
                        }
                    }, [j, a.botId, a.loading, S, t, f]),
                    {
                        days: I,
                        numDaysWithEvents: A
                    } = (0, n(682985).K8)(() => {
                        var t;
                        let i = a.botId;
                        if (!i || "resolved" !== T.status || !_ || !S) return {
                            days: [],
                            numDaysWithEvents: 0
                        };
                        let {
                            timeMin: o,
                            timeMax: l
                        } = (0, n(83748).iI)(), r = (0, n(103217).g2)({
                            events: (0, n(440143).Y)().getEvents(),
                            calendars: (null == (t = (0, n(440143).Y)().getState()) ? void 0 : t.calendars) ? ? [],
                            startDate: n(906745).DateTime.fromMillis(o, {
                                zone: p
                            }),
                            endDateInclusive: n(906745).DateTime.fromMillis(l, {
                                zone: p
                            }),
                            getCalendarVisibility: t => !!("upcoming_meetings" === e && b.includes(t.id)) || (0, n(377382).Pj)({
                                spaceViewStore: S,
                                botId: i,
                                calendar: t
                            }),
                            eventFilters: {
                                all_day_events: (0, n(128669).En)("all_day_events", e),
                                events_without_participants: (0, n(128669).En)("events_without_participants", e),
                                events_without_location: (0, n(128669).En)("events_without_location", e)
                            },
                            timeZone: p
                        }), s = 0;
                        return {
                            days: r.filter(e => {
                                let t = e.allDayEvents.length > 0 || e.timedEvents.length > 0;
                                return t && s++, t || (0, n(74423).cK)(e.date, m)
                            }),
                            numDaysWithEvents: s
                        }
                    }, [a.botId, T.status, _, S, m, p, e, b]);
                return {
                    isRetryEventLoadingEnabled: h,
                    retryEventLoading: k,
                    displayState: function({
                        botIdState: e,
                        eventsLoadingState: t,
                        isEventsDataAvailable: n,
                        numDaysWithEvents: i,
                        connectedAccounts: o,
                        disconnectedAccounts: a
                    }) {
                        let c = o.filter(e => l(e) || r(e) || s(e)),
                            d = a.filter(e => l(e) || r(e) || s(e));
                        if (e.loading || "resolved" !== t.status && "rejected" !== t.status || "resolved" === t.status && "noConnectedBot" === t.value && !e.loading && void 0 !== e.botId || "resolved" === t.status && "loadCompleted" === t.value && !n || "resolved" === t.status && "appNotSynced" === t.value) return "loading";
                        if (!e.loading && !e.botId || 0 === c.length && 0 === d.length) return "signedOut";
                        if (0 === c.length && d.length > 0) return d.some(e => "missingScopes" === e.authorizationStatus) ? "missingScopes" : "disconnectedAccount";
                        if ("rejected" === t.status || "resolved" === t.status && "loadError" === t.value) return "loadError";
                        if (0 === i) return "noEvents";
                        else return "events"
                    }({
                        botIdState: a,
                        eventsLoadingState: T,
                        isEventsDataAvailable: _,
                        numDaysWithEvents: A,
                        connectedAccounts: g,
                        disconnectedAccounts: v
                    }),
                    eventsLoadingState: T,
                    days: I
                }
            }

            function l({
                provider: e
            }) {
                return "google" === e
            }

            function r({
                provider: e
            }) {
                return "icloud" === e
            }

            function s({
                provider: e
            }) {
                return "outlook" === e
            }
            n(823215);
            let c = (0, n(381453).sg)(n(55067).qq, 1e4, {
                leading: !0,
                trailing: !0
            })
        },
        46431: (e, t, n) => {
            n.d(t, {
                z: () => i
            });
            let i = {
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
        105875: (e, t, n) => {
            n.d(t, {
                g: () => r,
                t: () => a
            }), n(581454);
            var i = n(296540),
                o = n(474848);

            function a(e) {
                let {
                    messageKey: t,
                    onDismiss: o
                } = e;
                return l({
                    message: (0, i.useMemo)(() => t ? {
                        key: t,
                        type: "static",
                        props: {},
                        id: "",
                        category: n(292609).lU[t].category
                    } : void 0, [t]),
                    onDismiss: o
                })
            }

            function l(e) {
                let t = null == e ? void 0 : e.message,
                    o = null == e ? void 0 : e.onDismiss,
                    a = (0, n(533992).v3)();
                return (0, i.useEffect)(() => {
                    t && n(357709).DL(a, {
                        callout_key: t.key,
                        placement_key: (0, n(125542).Q3)(t)
                    })
                }, [a, t]), {
                    onClick: (0, i.useCallback)(e => {
                        t && n(357709).Y5(a, {
                            callout_key: t.key,
                            placement_key: (0, n(125542).Q3)(t),
                            click_type: "primary_cta"
                        }), e && e()
                    }, [a, t]),
                    onDismiss: (0, i.useCallback)(() => {
                        t && (n(357709).Sq(a, {
                            callout_key: t.key,
                            placement_key: (0, n(125542).Q3)(t),
                            dismiss_type: "sidebar_dismiss"
                        }), (0, n(734389).O)(a, t)), o && o()
                    }, [a, t, o])
                }
            }

            function r(e) {
                let {
                    onClick: t,
                    buttons: i,
                    ...a
                } = e, {
                    onClick: r,
                    onDismiss: s
                } = l(e), c = null == i ? void 0 : i.map(e => ({ ...e,
                    onClick: () => {
                        r(e.onClick)
                    }
                }));
                return (0, o.jsx)(n(436281).Ue, {
                    children: (0, o.jsx)(n(436281).wY, { ...a,
                        ...c ? {
                            buttons: c
                        } : {
                            onClick: t ? () => {
                                r(t)
                            } : void 0
                        },
                        onDismiss: s
                    })
                })
            }
        },
        345296: (e, t, n) => {
            n.d(t, {
                X: () => i
            });

            function i() {
                let e = (0, n(682985).O$)(n(610463).X),
                    t = (0, n(682985).K8)(() => {
                        let e = (0, n(328765).S)();
                        return e && (0, n(453737).d)({
                            spaceStore: e
                        })
                    }, []),
                    i = (0, n(83208).X)("notion_calendar_launch_modal");
                return e || t || !i
            }
        },
        357709: (e, t, n) => {
            function i(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function o(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                }), t.callout_key && n(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function a(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function r(e, t) {
                let {
                    eligible_callouts: i,
                    required_arg_timeout: o,
                    required_args_run_duration: a,
                    eligibility_timeouts: l,
                    blocklist: r
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: i,
                            required_arg_timeout: o,
                            required_args_run_duration: a,
                            eligibility_timeouts: l,
                            blocklist: r
                        }
                    }
                })
            }

            function s(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function d(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }
            n.d(t, {
                Ak: () => d,
                Cu: () => c,
                DL: () => i,
                Jb: () => l,
                Sq: () => a,
                Y5: () => o,
                gc: () => s,
                wo: () => r
            })
        },
        429946: (e, t, n) => {
            n.d(t, {
                B: () => i
            });

            function i() {
                return (0, n(682985).K8)(() => {
                    var e;
                    let t = n(381453).$z((null == (e = (0, n(440143).Y)()) || null == (e = e.getHomeCalendarStateForSpaceView()) ? void 0 : e.accounts) ? ? [], ({
                        authorized: e
                    }) => String(e));
                    return {
                        connectedAccounts: t.true ? ? [],
                        disconnectedAccounts: t.false ? ? []
                    }
                }, [], {
                    equalityFn: n(381453).n4
                })
            }
        },
        436281: (e, t, n) => {
            n.d(t, {
                Ue: () => l,
                wY: () => d
            }), n(944114), n(898992), n(803949);
            var i = n(296540),
                o = n(474848);
            let a = (0, i.createContext)(void 0);

            function l(e) {
                let {
                    children: t
                } = e, [l, r] = (0, i.useState)(100), s = (0, n(960253).I)(() => ({
                    card: {
                        marginBottom: `-${l}%`,
                        transitionProperty: "margin-bottom",
                        transitionDuration: "300ms",
                        transitionTimingFunction: "ease"
                    }
                }), [l]);
                (0, i.useEffect)(() => {
                    r(0)
                }, []);
                let c = (0, i.useCallback)(e => {
                    r(100), setTimeout(e, 300)
                }, []);
                return (0, o.jsx)(a.Provider, {
                    value: c,
                    children: (0, o.jsx)("div", {
                        style: s.card,
                        children: t
                    })
                })
            }
            a.displayName = "AnimationDismissContext";
            let r = {
                    background: "transparent",
                    margin: 8,
                    display: "flex",
                    position: "relative"
                },
                s = {
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
                        colorVariant: u = "secondary",
                        ...p
                    } = e,
                    m = n(632079).Tj.background[u],
                    {
                        hovered: g,
                        pressed: v
                    } = (0, n(133251)._S)({
                        color: m,
                        hoveredAdjustmentFactor: .5,
                        pressedAdjustmentFactor: 1
                    }),
                    y = (0, n(960253).I)(() => ({
                        card: {
                            width: "100%",
                            position: "relative",
                            padding: 8,
                            borderRadius: 8,
                            boxShadow: n(632079).Tj.shadow.outline.sm,
                            background: m,
                            WebkitBackdropFilter: "blur(30px)",
                            backdropFilter: "blur(30px)",
                            overflow: "hidden"
                        },
                        cardHovered: {
                            background: g
                        },
                        cardPressed: {
                            background: v
                        }
                    }), [g, v, m]),
                    h = (0, i.useContext)(a),
                    x = (0, i.useCallback)(e => {
                        e.stopPropagation(), h ? h(() => null == d ? void 0 : d()) : null == d || d()
                    }, [d, h]);
                return d && (t = (0, o.jsx)(n(988022).p, {
                    colorPalette: "gray",
                    size: "xs",
                    style: s,
                    onClick: x,
                    children: (0, o.jsx)(n(16275).I, {
                        icon: n(25094).xMarkSmallIcon,
                        size: "xs",
                        colorVariant: "secondary"
                    })
                })), (0, o.jsx)("div", {
                    style: r,
                    children: l ? (0, o.jsxs)(n(64960).Ay, {
                        onClick: l,
                        style: y.card,
                        hoveredStyle: y.cardHovered,
                        pressedStyle: y.cardPressed,
                        children: [(0, o.jsx)(n(4458).VP, {
                            gap: 8,
                            className: "autolayout-fill-width",
                            style: c,
                            children: (0, o.jsx)(f, { ...p
                            })
                        }), t]
                    }) : (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(n(4458).VP, {
                            style: y.card,
                            gap: 8,
                            className: "autolayout-fill-width",
                            children: (0, o.jsx)(f, { ...p
                            })
                        }), t]
                    })
                })
            }
            let u = {
                    position: "relative",
                    paddingTop: 4
                },
                p = {
                    width: 24,
                    height: 24,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                },
                m = {
                    textWrap: "pretty"
                },
                g = {
                    textWrap: "pretty"
                },
                v = {
                    marginInlineStart: 6
                };

            function f(e) {
                let t, {
                        title: i,
                        body: a,
                        buttons: l,
                        imageSources: r,
                        imageHeight: s,
                        imageMarginLeft: d,
                        imageMarginTop: f,
                        imageUseFullBleed: h,
                        onDismiss: x,
                        icon: b,
                        iconColor: k,
                        badge: S,
                        fullWidth: w,
                        heroElement: _
                    } = e,
                    j = (0, n(960253).e)(),
                    C = (null == S ? void 0 : S.placement) ? ? "inlineWithTitle",
                    T = (0, n(960253).I)(() => ({
                        image: { ...h ? {
                                position: "absolute",
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center"
                            } : {
                                height: s ? ? 56,
                                alignSelf: "start",
                                maxWidth: "100%",
                                marginInlineStart: d ? ? 4,
                                marginTop: f ? ? 0
                            }
                        },
                        imageFullBleedContainer: {
                            position: "relative",
                            overflow: "hidden",
                            width: "calc(100% + 16px)",
                            height: s ? ? 120,
                            marginInlineStart: -8,
                            marginTop: -8
                        },
                        icon: {
                            width: n(104509).Ev.default,
                            height: n(104509).Ev.default,
                            fill: k ? n(632079).Tj[k].icon.accentPrimary : n(632079).Tj.icon.primary
                        },
                        badge: {
                            display: "inline-flex",
                            alignSelf: "aboveTitle" === C ? "flex-start" : void 0
                        }
                    }), [k, s, d, f, h, C]),
                    I = [];
                if (l && (0, n(722371).EI)(l) && l.forEach((e, t) => I.push((0, o.jsx)(y, { ...e
                    }, t))), r) {
                    let e = (0, o.jsx)("img", {
                        src: r[j],
                        style: T.image,
                        alt: ""
                    });
                    t = h ? (0, o.jsx)("div", {
                        style: T.imageFullBleedContainer,
                        children: e
                    }) : e
                } else _ && (t = _);
                return (0, o.jsxs)(o.Fragment, {
                    children: [t, (0, o.jsxs)(n(4458).fI, {
                        className: "autolayout-fill-width",
                        style: c,
                        children: [b ? (0, o.jsx)("span", {
                            style: p,
                            children: b(T.icon)
                        }) : null, (0, o.jsxs)(n(4458).VP, {
                            gap: 4,
                            style: u,
                            flex: "1 1 0",
                            children: [(0, o.jsxs)(n(4458).VP, {
                                gap: 4,
                                paddingTop: 0,
                                paddingBottom: 0,
                                paddingInlineStart: 8 * !w,
                                paddingInlineEnd: w ? 0 : x ? 32 : 8,
                                style: c,
                                children: [S && "aboveTitle" === C ? (0, o.jsx)(n(746434).E, {
                                    content: S.content,
                                    color: S.color,
                                    style: T.badge
                                }) : null, (0, o.jsxs)(n(111010).D, {
                                    style: m,
                                    styleKey: "captionSemibold",
                                    colorVariant: "primary",
                                    children: [i, S && "inlineWithTitle" === C ? (0, o.jsx)("span", {
                                        style: v,
                                        children: (0, o.jsx)(n(746434).E, {
                                            content: S.content,
                                            color: S.color,
                                            style: T.badge
                                        })
                                    }) : null]
                                }), (0, o.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: g,
                                    children: a
                                })]
                            }), (0, o.jsx)("div", {
                                children: I
                            })]
                        })]
                    })]
                })
            }

            function y(e) {
                let {
                    text: t,
                    onClick: i,
                    leftIcon: a,
                    rightIcon: l,
                    disabled: r,
                    variant: s = "default",
                    colorPalette: d,
                    colorVariant: u = "primary"
                } = e, p = "outline-fill" === s, m = (0, n(960253).I)(() => ({
                    defaultIconStyles: {
                        width: n(104509).Ev.sm,
                        height: n(104509).Ev.sm,
                        fill: r ? n(632079).Tj.gray.text.primary : d ? n(632079).Tj[d].text[u] : n(632079).Tj.text.primary
                    },
                    button: {
                        paddingTop: 4,
                        paddingInlineEnd: 8,
                        paddingBottom: 4,
                        paddingInlineStart: a ? 6 : 8,
                        borderRadius: 6,
                        ...p ? {
                            width: "100%"
                        } : {}
                    }
                }), [a, p, d, u, r]), g = "outline-fill" === s ? n(548436).A : n(64960).Ay;
                return (0, o.jsx)(n(4458).fI, {
                    className: "autolayout-fill-width",
                    style: c,
                    children: (0, o.jsx)(g, {
                        disabled: r,
                        style: m.button,
                        onClick: i,
                        children: (0, o.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: p ? "center" : void 0,
                            gap: a ? 4 : 6,
                            className: p ? "autolayout-fill-width" : void 0,
                            style: c,
                            children: [a ? a(m.defaultIconStyles) : null, (0, o.jsx)(n(111010).D, {
                                styleKey: "captionSemibold",
                                colorPalette: r ? "gray" : d ? ? void 0,
                                colorVariant: r ? "primary" : u,
                                children: t
                            }), l ? l(m.defaultIconStyles) : null]
                        })
                    })
                })
            }
        },
        466290: (e, t, n) => {
            n.d(t, {
                K: () => o
            });
            var i = () => n(906745);

            function o(e, t) {
                n(696190).default.isVisible(t.key) && (n(696190).default.removeMessage(t.key), n(986939).A.isAdminMode || (! function(e, t) {
                    let o = n(728372).AppStoreCurrentUserSettingsStore.state,
                        a = null == o ? void 0 : o.getSettings();
                    if (!a || !o) return;
                    let l = new(n(543346)).GO(a.callout_placement_exposures);
                    for (let e of t) l.add(e, i().DateTime.now().toMillis());
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, n(862759).m)({
                                userSettingsStore: o,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: l.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, n(125542).Q3)(t)]), (0, n(476114).q)(e, t), n(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, n(819416).Z)(e, t.key)), n(696190).default.isPendingDynamicMessage(t.key) && (0, n(740063).G)(t.key))
            }
        },
        476114: (e, t, n) => {
            function i({
                environment: e,
                message: t,
                overwrite: o = !1
            }) {
                let a = n(728372).AppStoreCurrentUserSettingsStore.state,
                    l = null == a ? void 0 : a.getSettings();
                if (!a || !l) return;
                let r = new Map((l.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!r.has(t.key) || o) && r.set(t.key, {
                    name: t.key,
                    timestamp: n(906745).DateTime.now().toMillis()
                }), (0, n(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(r.values())
                            }
                        })
                    }
                })
            }

            function o(e, t) {
                let o = (0, n(125542).K0)(t);
                "once_per_user" === o ? i({
                    environment: e,
                    message: t
                }) : "once_per_space" === o && function({
                    environment: e,
                    message: t,
                    overwrite: i = !1
                }) {
                    let o = n(728372).AppStoreSidebarSpaceViewStore.state,
                        a = null == o ? void 0 : o.getSettings();
                    if (!o || !a) return;
                    let l = o.getSpaceId(),
                        r = new Map((a.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!r.has(t.key) || i) && r.set(t.key, {
                        name: t.key,
                        timestamp: n(906745).DateTime.now().toMillis()
                    }), (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            n(380762).AG(o, e, {
                                callout_dismissal_timestamps: Array.from(r.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            n.d(t, {
                q: () => o,
                H: () => i
            }), n(581454)
        },
        522883: (e, t, n) => {
            n.d(t, {
                j: () => i
            });
            let i = {
                calendar: (0, n(109939).YK)({
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
                mail: (0, n(109939).YK)({
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
                notionDesktopOpen: (0, n(109939).YK)({
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
                notionDesktopDownload: (0, n(109939).YK)({
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
        531491: (e, t, n) => {
            n.d(t, {
                H: () => o,
                a: () => a
            });
            var i = n(296540);
            let o = {
                    panelState: void 0,
                    view: "notionHomeTile"
                },
                a = (0, i.createContext)(o);
            a.displayName = "CalendarAnalyticsContext"
        },
        557737: (e, t, n) => {
            n.d(t, {
                K: () => o
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.612 4.08A1.895 1.895 0 0 0 3.971 5.81l-.005.092.001 9.439-.864.053h-.035a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.646V4.137c0-.88.683-1.61 1.562-1.665l10.187-.651a.755.755 0 0 1 .786.551.826.826 0 0 1 .03.175v.943l-9.133.583-.037.007Zm12.172 12.67a.779.779 0 0 1-.617.747c-.006 0-.013.003-.02.003l-11.045.681h-.034a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.647l-.001-.03V6.072l.001-.047a.777.777 0 0 1 .67-.709c.01 0 .018-.003.027-.003l11.052-.706a.755.755 0 0 1 .786.551.824.824 0 0 1 .03.175l.002 11.418Zm-1.248-8.726a.388.388 0 0 0-.418-.393l-9.213.563c-.23.012-.439.177-.439.436v7.533c-.01.484.31.61.673.583L16 16.221l.002-.001c.466-.018.534-.374.534-.65V8.024Zm-7.35 2.458c-.429.026-.574.353-.573.856v.089c-.051.012-.094.023-.146.026-.309.02-.531-.232-.532-.682 0-.689.616-1.336 1.79-1.41 1.045-.064 1.714.441 1.715 1.333 0 .67-.556 1.147-1.104 1.296 1.028.05 1.458.624 1.459 1.357.001 1.254-.915 1.964-2.329 2.052l-.034.002c-1.063.066-1.809-.338-1.81-1.035 0-.397.29-.733.728-.76.035-.003.068.004.103.002.087.71.567.97 1.046.941.463-.029.788-.34.788-.782v-.018c0-.688-.575-.723-1.44-.757l-.138-.822c.805-.147 1.207-.41 1.207-.887 0-.512-.284-.83-.73-.801Zm3.864-.339c-.857.248-1.045-.129-.952-.523.514-.12 1.85-.521 2.356-.703l.006 5.289.934.136c0 .344-.197.56-.548.581-.291.018-.968.043-1.294.063-.505.031-1.43.107-1.43.107a.572.572 0 0 1-.035-.201c0-.168.068-.34.29-.416l.677-.219-.004-4.114Z"
                    })
                },
                o = (0, n(104509).wt)("calendarDate31", i, "default")
        },
        634663: (e, t, n) => {
            n.r(t), n.d(t, {
                circleIcon: () => o,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                o = (0, n(104509).wt)("circle", i, "default")
        },
        734389: (e, t, n) => {
            n.d(t, {
                O: () => i
            });

            function i(e, t) {
                (0, n(466290).K)(e, t)
            }
        },
        825485: (e, t, n) => {
            n.d(t, {
                k: () => s
            });
            var i = n(296540),
                o = n(474848);
            let a = {
                    calendar: (0, n(703003).j)(n(896221).A.images.connectedApps.accountCreationUpsellTooltip.calendar),
                    mail: (0, n(703003).j)(n(896221).A.images.connectedApps.accountCreationUpsellTooltip.mail),
                    notionDesktopOpen: (0, n(703003).j)(n(896221).A.images.connectedApps.accountCreationUpsellTooltip.notionDesktopOpen),
                    notionDesktopDownload: (0, n(703003).j)(n(896221).A.images.connectedApps.accountCreationUpsellTooltip.notionDesktopDownload)
                },
                l = {
                    closeButton: {
                        position: "absolute",
                        top: "10px",
                        insetInlineEnd: "10px",
                        borderRadius: "12px",
                        background: n(632079).Tj.background.tertiary,
                        backdropFilter: "blur(16px)"
                    },
                    closeButtonIcon: {
                        fill: n(632079).Tj.icon.primary
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
                r = (0, n(64960)._S)({
                    color: n(632079).Tj.background.secondary
                });

            function s({
                calendarElement: e,
                mailElement: t,
                notionDesktopElement: c,
                hoveredAppTarget: d,
                imageFailedToLoad: u,
                setImageFailedToLoad: p,
                inAppCalloutHandlers: m,
                isAppTargetLoading: g,
                renderCarat: v = !0
            }) {
                let f, y, h = (0, n(632079).O4)({
                        theme: "dark"
                    }),
                    x = (0, n(109939).tz)(),
                    [b, k] = (0, i.useState)(!1),
                    S = !!m;
                switch (d) {
                    case "calendar":
                        y = null == e ? void 0 : e.getBoundingClientRect();
                        break;
                    case "mail":
                        y = null == t ? void 0 : t.getBoundingClientRect();
                        break;
                    case "notionDesktopOpen":
                    case "notionDesktopDownload":
                        y = null == c ? void 0 : c.getBoundingClientRect();
                        break;
                    default:
                        y = void 0
                }
                y && (f = y.left + 1);
                let w = (0, n(960253).e)(),
                    _ = (0, n(960253).I)(() => ({
                        container: {
                            cursor: S ? "pointer" : "default",
                            display: "flex",
                            flexDirection: "column",
                            padding: "4px",
                            borderRadius: "10px",
                            gap: "4px",
                            background: h.background.accentPrimary,
                            boxShadow: h.shadow.outline.lg
                        },
                        closeButtonHovered: {
                            background: r.hovered
                        },
                        openIcon: {
                            fill: b ? h.icon.primary : h.icon.tertiary
                        },
                        rectangle: void 0 === f ? {
                            display: "none"
                        } : {
                            background: h.background.accentPrimary,
                            transform: `translateX(${f}px) rotate(-45deg)`,
                            borderRadius: "0px 2px",
                            width: "14px",
                            height: "14px",
                            position: "absolute",
                            bottom: "-7px",
                            insetInlineStart: "0px",
                            transition: "transform 100ms",
                            transitionTimingFunction: n(46431).z.animationConfig.timingFunction,
                            transformOrigin: "center",
                            ..."dark" === w ? {
                                boxShadow: h.shadow.outline.lg,
                                clipPath: "polygon(-1px 1px, -1px 15px, 13px 15px, 13px 1px)"
                            } : {}
                        }
                    }), [f, h, b, S, w]),
                    j = n(522883).j[d],
                    C = u ? void 0 : a[d],
                    T = u ? n(739528).M : (0, n(703003).L)(n(896221).A.images.connectedApps.accountCreationUpsellTooltip[d]["1XPng"]);
                return (0, o.jsx)(n(172474).BQ, {
                    mode: "dark",
                    children: (0, o.jsxs)("div", {
                        style: _.container,
                        onMouseOver: () => k(!0),
                        onMouseOut: () => k(!1),
                        onClick: () => null == m ? void 0 : m.onClick(),
                        role: "button",
                        tabIndex: -1,
                        children: [(0, o.jsx)("img", {
                            style: l.img,
                            src: T,
                            alt: x.formatMessage(j.alt),
                            srcSet: C,
                            onError: () => null == p ? void 0 : p(!0)
                        }), S ? (0, o.jsx)(n(374533).A, {
                            style: l.closeButton,
                            hoveredStyle: _.closeButtonHovered,
                            iconStyle: l.closeButtonIcon,
                            ariaLabel: x.formatMessage({
                                id: "dismiss_connected_app_upsell_popover",
                                defaultMessage: "Close promotional tooltip for calendar or mail app buttons"
                            }),
                            icon: n(25094).xMarkSmallIcon,
                            onClick: e => {
                                e.stopPropagation(), null == m || m.onDismiss()
                            }
                        }) : null, (0, o.jsxs)(n(4458).VP, {
                            paddingBlock: 8,
                            paddingInline: 10,
                            alignSelf: "stretch",
                            gap: 2,
                            children: [(0, o.jsxs)(n(4458).fI, {
                                gap: 2,
                                alignItems: "center",
                                children: [g === d ? (0, o.jsx)(n(795830).P, {
                                    style: { ...l.loadingText,
                                        ...l.style0
                                    }
                                }) : (0, o.jsx)(n(111010).D, {
                                    styleKey: "bodySmMedium",
                                    colorVariant: "primary",
                                    children: (0, o.jsx)(n(109939).sA, { ...j.title
                                    })
                                }), S ? (0, o.jsx)(n(16275).I, {
                                    icon: n(759706).arrowDiagonalUpRightSmallIcon,
                                    size: "sm",
                                    style: _.openIcon
                                }) : null]
                            }), (0, o.jsx)("div", {
                                style: l.subtitle,
                                children: g === d ? (0, o.jsxs)(o.Fragment, {
                                    children: [(0, o.jsx)(n(795830).P, {
                                        style: l.loadingText
                                    }), (0, o.jsx)(n(795830).P, {
                                        style: l.loadingText
                                    })]
                                }) : (0, o.jsx)(n(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    children: (0, o.jsx)(n(109939).sA, { ...j.subtitle
                                    })
                                })
                            })]
                        }), v ? (0, o.jsx)("div", {
                            style: _.rectangle
                        }) : null]
                    })
                })
            }
        },
        844705: (e, t, n) => {
            n.d(t, {
                s: () => r
            });
            var i = n(296540);
            let o = new(n(815048)).O2("CalendarAgendaView", async () => await Promise.all([n.e(63793), n.e(61842), n.e(12555), n.e(50462)]).then(n.bind(n, 352912))),
                a = (0, n(815048)._h)(o, e => e.CalendarAgendaView);
            var l = n(474848);
            let r = (0, i.forwardRef)(function(e, t) {
                let o = (0, n(682985).O$)(n(984858).sidebarWidthStore),
                    r = (0, i.useRef)(),
                    s = (0, i.useRef)(),
                    c = (0, n(533992).v3)(),
                    [d, u] = (0, i.useState)(!1),
                    [p, m] = (0, i.useState)(!1),
                    g = (0, i.useRef)(null),
                    v = (0, i.useCallback)(e => {
                        "function" == typeof t ? t(e) : t && (t.current = e), g.current = e
                    }, [t]);
                (0, i.useEffect)(() => () => {
                    r.current && (cancelAnimationFrame(r.current), r.current = void 0)
                }, []);
                let f = (0, n(960253).I)(() => ({
                        popup: {
                            display: "flex",
                            flexDirection: "column",
                            width: `${o-24}px`,
                            maxHeight: "276px",
                            minWidth: "376px",
                            overflow: "visible",
                            marginBottom: "10px"
                        },
                        originContainer: {
                            height: e.originContainerHeight ? ? "initial",
                            width: e.originContainerWidth ? ? "initial"
                        }
                    }), [o, e.originContainerHeight, e.originContainerWidth]),
                    {
                        days: y,
                        eventsLoadingState: h,
                        displayState: x
                    } = (0, n(24962).O)("personal_home"),
                    b = {
                        panelState: (0, n(831214).oM)(x),
                        view: "notionAgendaView"
                    };

                function k() {
                    if (e.canShowCustomPopover) {
                        if (r.current && (cancelAnimationFrame(r.current), r.current = void 0), e.hideUpsellPopover(), !s.current) {
                            let {
                                panelState: e
                            } = b;
                            ("connected_with_events" === e || "connected_no_events" === e) && (s.current = setTimeout(() => (0, n(593666).qL)({
                                environment: c,
                                calendarPanelContext: (0, n(593666).sp)(b)
                            }), 200))
                        }
                        u(!0)
                    }
                }

                function S() {
                    s.current && (clearTimeout(s.current), s.current = void 0), r.current = requestAnimationFrame(() => {
                        u(!1), m(!1)
                    })
                }
                return (0, l.jsx)(n(531491).a.Provider, {
                    value: b,
                    children: (0, l.jsx)(n(182718).zD, {
                        preventCaptureEsc: !0,
                        forceInitialInbound: !0,
                        disableDarkOverlayBackground: !0,
                        trapFocus: !1,
                        preventScaleTransition: !1,
                        preventOpacityTransition: !1,
                        popupWrapStyle: f.popup,
                        disableMouseCapture: !0,
                        open: d,
                        popupType: n(423291).n.Popup,
                        onAnimationEnd: () => m(d),
                        alignmentToOrigin: e.alignmentToOrigin,
                        placementToOrigin: e.placementToOrigin,
                        viewportPadding: 6,
                        originGap: e.originGap,
                        style: n(46431).z.style,
                        animationConfig: n(46431).z.animationConfig,
                        content: () => (0, l.jsx)(a, {
                            iconRef: g,
                            openAnimationEnded: p,
                            isLoading: "resolved" !== h.status,
                            days: y,
                            onMouseOver: k,
                            onMouseLeave: S,
                            placement: e.placementToOrigin
                        }),
                        children: (0, l.jsx)("div", {
                            ref: v,
                            onMouseEnter: k,
                            onMouseLeave: S,
                            style: f.originContainer,
                            children: e.originElement
                        })
                    })
                })
            })
        },
        897638: (e, t, n) => {
            n.d(t, {
                N: () => a
            });
            var i = n(296540);
            let o = new(n(815048)).O2("notionCalendarLogos", async () => n.e(94366).then(n.bind(n, 916243)));

            function a(e) {
                let t = function() {
                    let [e, t] = (0, i.useState)(new Date), o = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        let i = () => {
                                let n = new Date;
                                n.getDate() !== e.getDate() && t(n)
                            },
                            a = new Date,
                            l = new Date(a);
                        l.setHours(a.getHours() + 1), l.setMinutes(0), l.setSeconds(0), l.setMilliseconds(0);
                        let r = setTimeout(() => {
                            i(), o.current = window.setInterval(i, n(695216).pT)
                        }, l.getTime() - a.getTime());
                        return () => {
                            clearTimeout(r), clearInterval(o.current)
                        }
                    }, [e]), e
                }();
                return function({
                    dateNumber: e,
                    calendarDateIcons: t
                }) {
                    let i = n(557737).K;
                    if (e < 1 || e > 31) return i;
                    let o = e < 10 ? `0${e}` : `${e}`,
                        a = `calendarDate${o}Icon`;
                    return "resolved" !== t.status ? i : t.value[a]
                }({
                    dateNumber: e ? ? t.getDate(),
                    calendarDateIcons: (0, n(815048).fJ)(o)
                })
            }
        }
    }
]);