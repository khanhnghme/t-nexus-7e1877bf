"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3055, 61842], {
        12546: (e, t, n) => {
            n.d(t, {
                j: () => a
            });
            var i = n(296540);

            function a() {
                var e;
                let t = null == (e = (0, i.useContext)(n(324193).R)) ? void 0 : e.isHoveredOnPanelStore;
                return (0, n(682985).K8)(() => !!(null == t ? void 0 : t.getState()), [t])
            }
        },
        24962: (e, t, n) => {
            n.d(t, {
                O: () => r
            }), n(898992), n(354520), n(581454), n(737550);
            var i = n(296540);

            function a(e) {
                if (0 === e.length) return !0;
                let t = e[0];
                return e.every(e => void 0 !== e && e === t)
            }

            function r(e) {
                let t = (0, n(533992).v3)(),
                    r = (0, n(515467).m)(),
                    c = (0, n(345776).T)(),
                    {
                        timeZone: u
                    } = (0, n(591742).mn)(),
                    p = (0, n(25825).lW)(u),
                    g = (0, n(132315).s5)(),
                    {
                        connectedAccounts: _,
                        disconnectedAccounts: v
                    } = (0, n(429946).B)(),
                    [m, f] = i.useState(0),
                    [S, y] = i.useState(!0),
                    h = (0, n(682985).K8)(() => {
                        var e;
                        let t = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail();
                        return t ? (0, n(120462).RM)({
                            currentUserEmail: t,
                            calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                            accounts: (0, n(440143).Y)().getCurrentAccounts()
                        }).allEligibleCalendars.map(e => e.id) : []
                    }, []),
                    b = (0, i.useMemo)(() => (0, n(381453).sg)(() => {
                        f(e => e + 1), y(!1), setTimeout(() => y(!0), 1e4)
                    }, 1e3, {
                        leading: !0,
                        trailing: !1
                    }), []),
                    {
                        sidebarSpaceViewStore: k,
                        sidebarSpaceStore: w
                    } = (0, n(682985).K8)(() => ({
                        sidebarSpaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                        sidebarSpaceStore: (0, n(328765).S)()
                    }), []),
                    x = (0, n(682985).K8)(() => void 0 !== (0, n(440143).Y)().getHomeCalendarStateForSpaceView(), []),
                    I = (0, n(682985).K8)(() => {
                        var e;
                        let {
                            botSpaceId: t,
                            botUserId: i
                        } = r, o = null == k ? void 0 : k.getSpaceId(), s = null == k ? void 0 : k.getUserId(), l = null == w ? void 0 : w.id, d = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id;
                        return a([t, o, l]) && a([i, s, d, c])
                    }, [r, null == w ? void 0 : w.id, k, c]),
                    A = i.useRef(void 0),
                    [C] = (0, n(97668).Yb)(async () => {
                        let e = r.botId;
                        if (!I || !k) return "appNotSynced";
                        if (!e) return r.loading || (0, n(55067).F8)(), "noConnectedBot";
                        let i = await (0, n(55067).qq)({
                                environment: t,
                                sidebarSpaceViewStore: k,
                                botId: e,
                                forceRefetch: !1,
                                timeRange: (0, n(83748).M)(),
                                reason: {
                                    reason: "foreground_load"
                                }
                            }),
                            a = !A.current,
                            o = A.current && (A.current.spaceViewId !== k.id || A.current.botId !== e);
                        switch ("skipped" === i && (a || o) && d({
                            environment: t,
                            sidebarSpaceViewStore: k,
                            botId: e,
                            forceRefetch: !0,
                            timeRange: (0, n(83748).M)(),
                            updateMethod: "replace",
                            reason: {
                                reason: "background_load"
                            }
                        }), A.current = {
                            spaceViewId: k.id,
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
                    }, [I, r.botId, r.loading, k, t, m]),
                    {
                        days: E,
                        numDaysWithEvents: T
                    } = (0, n(682985).K8)(() => {
                        var t;
                        let i = r.botId;
                        if (!i || "resolved" !== C.status || !x || !k) return {
                            days: [],
                            numDaysWithEvents: 0
                        };
                        let {
                            timeMin: a,
                            timeMax: o
                        } = (0, n(83748).iI)(), s = (0, n(103217).g2)({
                            events: (0, n(440143).Y)().getEvents(),
                            calendars: (null == (t = (0, n(440143).Y)().getState()) ? void 0 : t.calendars) ? ? [],
                            startDate: n(906745).DateTime.fromMillis(a, {
                                zone: p
                            }),
                            endDateInclusive: n(906745).DateTime.fromMillis(o, {
                                zone: p
                            }),
                            getCalendarVisibility: t => !!("upcoming_meetings" === e && h.includes(t.id)) || (0, n(377382).Pj)({
                                spaceViewStore: k,
                                botId: i,
                                calendar: t
                            }),
                            eventFilters: {
                                all_day_events: (0, n(128669).En)("all_day_events", e),
                                events_without_participants: (0, n(128669).En)("events_without_participants", e),
                                events_without_location: (0, n(128669).En)("events_without_location", e)
                            },
                            timeZone: p
                        }), l = 0;
                        return {
                            days: s.filter(e => {
                                let t = e.allDayEvents.length > 0 || e.timedEvents.length > 0;
                                return t && l++, t || (0, n(74423).cK)(e.date, g)
                            }),
                            numDaysWithEvents: l
                        }
                    }, [r.botId, C.status, x, k, g, p, e, h]);
                return {
                    isRetryEventLoadingEnabled: S,
                    retryEventLoading: b,
                    displayState: function({
                        botIdState: e,
                        eventsLoadingState: t,
                        isEventsDataAvailable: n,
                        numDaysWithEvents: i,
                        connectedAccounts: a,
                        disconnectedAccounts: r
                    }) {
                        let d = a.filter(e => o(e) || s(e) || l(e)),
                            c = r.filter(e => o(e) || s(e) || l(e));
                        if (e.loading || "resolved" !== t.status && "rejected" !== t.status || "resolved" === t.status && "noConnectedBot" === t.value && !e.loading && void 0 !== e.botId || "resolved" === t.status && "loadCompleted" === t.value && !n || "resolved" === t.status && "appNotSynced" === t.value) return "loading";
                        if (!e.loading && !e.botId || 0 === d.length && 0 === c.length) return "signedOut";
                        if (0 === d.length && c.length > 0) return c.some(e => "missingScopes" === e.authorizationStatus) ? "missingScopes" : "disconnectedAccount";
                        if ("rejected" === t.status || "resolved" === t.status && "loadError" === t.value) return "loadError";
                        if (0 === i) return "noEvents";
                        else return "events"
                    }({
                        botIdState: r,
                        eventsLoadingState: C,
                        isEventsDataAvailable: x,
                        numDaysWithEvents: T,
                        connectedAccounts: _,
                        disconnectedAccounts: v
                    }),
                    eventsLoadingState: C,
                    days: E
                }
            }

            function o({
                provider: e
            }) {
                return "google" === e
            }

            function s({
                provider: e
            }) {
                return "icloud" === e
            }

            function l({
                provider: e
            }) {
                return "outlook" === e
            }
            n(823215);
            let d = (0, n(381453).sg)(n(55067).qq, 1e4, {
                leading: !0,
                trailing: !0
            })
        },
        213039: (e, t, n) => {
            n.d(t, {
                M: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.25 15.25 11.5",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3 7.375h6.829a2.501 2.501 0 0 0 4.842 0H17a.625.625 0 1 0 0-1.25h-2.329a2.501 2.501 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25M12.25 5.5a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M7.75 15.75a2.5 2.5 0 0 0 2.421-1.875H17a.625.625 0 1 0 0-1.25h-6.829a2.5 2.5 0 0 0-4.842 0H3a.625.625 0 1 0 0 1.25h2.329A2.5 2.5 0 0 0 7.75 15.75m0-1.25a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5",
                            clipRule: "evenodd"
                        })]
                    })
                },
                r = (0, n(104509).wt)("sliders", a, "default")
        },
        302785: (e, t, n) => {
            n.d(t, {
                S: () => c,
                A: () => u
            });
            var i = n(296540),
                a = () => n(546605);
            class r extends a().Store {
                getInitialState() {}
            }
            class o extends a().Store {
                getInitialState() {
                    return !1
                }
            }
            var s = n(474848);
            let l = function({
                    additionalStyles: e,
                    transitionMs: t,
                    force: i,
                    children: a
                }) {
                    let r = (0, n(12546).j)(),
                        o = (0, n(960253).I)(() => {
                            let a;
                            switch (i) {
                                case "forceShow":
                                    a = 1;
                                    break;
                                case "forceHide":
                                    a = 0;
                                    break;
                                case void 0:
                                    a = +!!r;
                                    break;
                                default:
                                    (0, n(722371).HB)(i)
                            }
                            let o = (0, n(722371).O9)(t) ? t : 200,
                                s = 1 === a ? "visible" : "hidden";
                            return {
                                hoverStyle: {
                                    opacity: a,
                                    visibility: s,
                                    transition: `opacity ${o}ms ease-in, visibility ${o}ms ease-in`,
                                    ...e
                                }
                            }
                        }, [e, i, r, t]);
                    return (0, s.jsx)("div", {
                        style: o.hoverStyle,
                        children: a
                    })
                },
                d = {
                    title: { ...n(699422).RC
                    }
                };

            function c({
                icon: e,
                title: t,
                tooltip: i,
                hasRightElement: a,
                iconContainerStyle: r
            }) {
                let o = (0, n(960253).I)(() => ({
                    panelTitleAndIcon: {
                        display: "flex",
                        alignItems: "center",
                        fontSize: n(418676).Kw,
                        fontWeight: n(699422).Wy.medium,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).Tj.icon.secondary,
                        flexShrink: 0,
                        maxWidth: a ? 200 : "100%"
                    },
                    panelIconContainer: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: n(104509).Ev.sm,
                        height: n(104509).Ev.sm,
                        marginInlineEnd: 8,
                        marginTop: 1,
                        ...r
                    }
                }), [r, a]);
                return t ? (0, s.jsx)(n(51831).m, {
                    content: () => i,
                    disableTooltip: !i,
                    placement: "top",
                    alignment: "start",
                    children: n => (0, s.jsxs)("div", {
                        style: o.panelTitleAndIcon,
                        ...n,
                        children: [(0, s.jsx)("div", {
                            style: o.panelIconContainer,
                            children: e
                        }), (0, s.jsx)("span", {
                            style: d.title,
                            children: t
                        })]
                    })
                }) : null
            }
            let u = function({
                children: e,
                title: t,
                icon: a,
                tooltip: d,
                iconContainerStyle: u,
                panelStyle: p,
                headerStyle: g,
                rightStyle: _,
                actions: v,
                right: m,
                disableRightFadeIn: f,
                disableActionsFadeIn: S,
                hideWrapStyle: y,
                actionsGap: h,
                userSelectOverride: b
            }) {
                let k = (0, n(533992).WS)(),
                    w = !!t,
                    x = !!m,
                    I = (0, n(682985).uB)(void 0, o),
                    A = (0, n(682985).uB)(void 0, r),
                    C = (0, i.useMemo)(() => ({
                        isHoveredOnPanelStore: I,
                        sizeStore: A
                    }), [I, A]),
                    E = (0, i.useCallback)(() => I.setState(!0), [I]),
                    T = (0, i.useCallback)(() => I.setState(!1), [I]),
                    j = (0, i.useCallback)(e => {
                        e.width < n(681693).Xy ? A.setState("narrow") : A.setState("wide")
                    }, [A]),
                    M = (0, n(960253).e)(),
                    B = (0, n(960253).I)(() => ({
                        tile: {
                            userSelect: b ? ? "none",
                            WebkitUserSelect: b ? ? "none"
                        },
                        panel: y ? {} : {
                            paddingInlineStart: 12,
                            paddingInlineEnd: 12,
                            ...(0, n(681693).V$)({
                                isPhone: k,
                                themeMode: M
                            }),
                            ...p
                        },
                        headerContainer: {
                            flexShrink: 0,
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            height: 32,
                            paddingBottom: 14,
                            marginInlineStart: n(681693).Fq,
                            ...g
                        },
                        actions: {
                            display: "flex",
                            alignItems: "center",
                            gap: h ? ? 6,
                            paddingInlineStart: 6
                        }
                    }), [k, y, p, g, h, b, M]),
                    P = (w || x) && (0, s.jsxs)("div", {
                        style: B.headerContainer,
                        children: [(0, s.jsx)(c, {
                            title: t,
                            icon: a,
                            tooltip: d,
                            hasRightElement: x,
                            iconContainerStyle: u
                        }), x || v ? (0, s.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            children: [x ? (0, s.jsx)(l, {
                                force: f ? "forceShow" : void 0,
                                additionalStyles: _,
                                children: m
                            }) : void 0, v ? (0, s.jsx)(l, {
                                force: S ? "forceShow" : void 0,
                                additionalStyles: B.actions,
                                children: v
                            }) : void 0]
                        }) : void 0]
                    });
                return (0, s.jsx)(n(324193).R.Provider, {
                    value: C,
                    children: (0, s.jsxs)("div", {
                        style: B.tile,
                        onMouseEnter: E,
                        onMouseLeave: T,
                        children: [P, (0, s.jsx)(n(977785).E, {
                            onSizeChange: j,
                            children: (0, s.jsx)("div", {
                                style: B.panel,
                                children: e
                            })
                        })]
                    })
                })
            }
        },
        324193: (e, t, n) => {
            n.d(t, {
                R: () => i
            });
            let i = (0, n(296540).createContext)({
                isHoveredOnPanelStore: void 0,
                sizeStore: void 0
            });
            i.displayName = "HomePanelContext"
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
        531491: (e, t, n) => {
            n.d(t, {
                H: () => a,
                a: () => r
            });
            var i = n(296540);
            let a = {
                    panelState: void 0,
                    view: "notionHomeTile"
                },
                r = (0, i.createContext)(a);
            r.displayName = "CalendarAnalyticsContext"
        },
        583124: (e, t, n) => {
            function i() {
                if (!n(218744).default.checkGate({
                        gateName: "meeting_notes_auto_share_setting"
                    })) return !0;
                let e = n(728372).AppStoreSidebarSpaceViewStore.state,
                    t = null == e ? void 0 : e.getSettings();
                return (null == t ? void 0 : t.disable_auto_share_meeting_notes) !== void 0 && !t.disable_auto_share_meeting_notes
            }

            function a() {
                let e = (0, n(83208).X)("meeting_notes_auto_share_setting"),
                    t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore);
                return (0, n(682985).K8)(() => {
                    if (!e) return !0;
                    let n = null == t ? void 0 : t.getSettings();
                    return (null == n ? void 0 : n.disable_auto_share_meeting_notes) !== void 0 && !n.disable_auto_share_meeting_notes
                }, [t, e])
            }
            n.d(t, {
                V: () => a,
                W: () => i
            })
        },
        700790: (e, t, n) => {
            n.d(t, {
                I: () => i
            });

            function i(e, t) {
                if (e === n(728372).AppStoreMainEditorCurrentBlockStore.state) {
                    let {
                        RouterStore: e
                    } = t, n = e.state.route;
                    if ("page" === n.name) return n.collectionViewId
                }
            }
        },
        729619: (e, t, n) => {
            n.d(t, {
                XP: () => r,
                T: () => o,
                Tk: () => a,
                YG: () => l,
                jW: () => s,
                Zp: () => d
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);

            function a(e) {
                var t;
                let {
                    environment: i,
                    store: a
                } = e;
                n(218744).default.getEligibleGroup({
                    experimentId: "adoption_aa_page_share_menu"
                }), n(880853).Ay.reset(), n(475097).default.state.open ? n(344476).A.setState({ ...n(344476).A.state,
                    open: !0
                }) : n(409614).A.setState({ ...n(409614).A.state,
                    open: !0
                }), t = {
                    share_menu_session_id: n(880853).Ay.state.sessionId,
                    ...a && a.table === n(832375).evP && a.isCollectionView() ? {
                        collection_view_block_id: a.id,
                        ...(0, n(633171).P)(a, {
                            skipPages: !1
                        })
                    } : {}
                }, (0, n(104310).u)({
                    event: {
                        eventName: "open_page_share",
                        eventProperties: t
                    }
                })
            }

            function r(e) {
                var t;
                let {
                    environment: i,
                    store: a
                } = e;
                n(475097).default.state.open ? n(344476).A.setState({ ...n(344476).A.state,
                    open: !1
                }) : n(409614).A.setState({ ...n(409614).A.state,
                    open: !1
                }), n(982993).A.setState({ ...n(982993).A.state,
                    siteSettingContentType: "initial"
                });
                let {
                    collection_view_block_id: r,
                    collection_view_id: o,
                    collection_id: s,
                    owned_collection_count: l,
                    linked_collection_count: d
                } = (() => {
                    if (a && a.table === n(832375).evP && a.isCollectionView()) {
                        let e = (0, n(633171).P)(a, {
                            skipPages: !1
                        });
                        return {
                            collection_view_block_id: a.id,
                            collection_view_id: (0, n(700790).I)(a, i),
                            collection_id: e.collectionId,
                            owned_collection_count: e.ownedCollectionCount,
                            linked_collection_count: e.linkedCollectionCount
                        }
                    }
                    return {
                        collection_view_block_id: void 0,
                        collection_view_id: void 0,
                        collection_id: void 0,
                        owned_collection_count: void 0,
                        linked_collection_count: void 0
                    }
                })();
                t = {
                    share_menu_session_id: n(880853).Ay.state.sessionId,
                    collection_id: s,
                    collection_view_id: o,
                    collection_view_block_id: r,
                    owned_collection_count: l,
                    linked_collection_count: d
                }, (0, n(104310).u)({
                    event: {
                        eventName: "close_page_share",
                        eventProperties: t
                    }
                })
            }
            async function o(e) {
                let {
                    inviteTargetsStore: t
                } = e, a = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationMessage",
                    defaultMessage: "Your changes have not been saved. Discard changes?"
                }), r = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationButton.label",
                    defaultMessage: "Yes"
                }), o = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.cancelButton.label",
                    defaultMessage: "Cancel"
                });
                return t.state.inviteTargets.length > 0 && (await n(647095).Gh({
                    message: a,
                    acceptLabel: r,
                    cancelLabel: o
                })).accept
            }

            function s(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    selectedBlockRole: e
                })
            }

            function l(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    canCreatePagesInCollection: e
                })
            }

            function d(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    userSelectedCreatorRole: e
                })
            }
        },
        774073: (e, t, n) => {
            function i() {
                var e;
                let t = n(728372).AppStoreSidebarSpaceStore.state;
                return (null == t || null == (e = t.getSettingsStore()) || null == (e = e.getKeyStore("audio_consent_on_transcription")) ? void 0 : e.getValue()) ? ? !1
            }

            function a() {
                var e;
                let t;
                if (!n(728372).AppStoreSidebarSpaceViewStore.getState()) return !1;
                let a = i(),
                    r = !!(t = n(728372).AppStoreSidebarSpaceViewStore.getState()) && ((null == (e = t.getSettings()) ? void 0 : e.audio_consent_on_transcription) ? ? !0);
                return a || r
            }

            function r() {
                return (0, n(682985).K8)(() => a(), [])
            }

            function o() {
                return (0, n(682985).K8)(() => (function() {
                    var e;
                    if (!a()) return !1;
                    if (i()) return !0;
                    let t = n(728372).AppStoreSidebarSpaceViewStore.getState();
                    return !!(null == t || null == (e = t.getSettings()) ? void 0 : e.audio_consent_nux_dismissed_v2)
                })(), [])
            }

            function s(e) {
                let {
                    state: t,
                    canUse: a,
                    dismissedAnnotations: r
                } = e;
                return !(!a || i() || r.includes("audio-consent-nux")) && !!(0, n(869708).ne)() && "initial" === t.state
            }

            function l(e) {
                let {
                    environment: t,
                    state: a,
                    canUse: r,
                    dismissedAnnotations: o,
                    store: s
                } = e;
                if (!r || i() || o.includes("audio-consent-nux") || "idle" !== a.state && "summarizing" !== a.state) return !1;
                let l = t.currentUser.id;
                return !!l && (0, n(869708).vX)(s, l)
            }
            n.d(t, {
                L0: () => l,
                Nt: () => o,
                R: () => s,
                Ru: () => i,
                f1: () => r,
                yz: () => a
            })
        },
        785417: (e, t, n) => {
            n.d(t, {
                c: () => o
            }), n(898992), n(354520);
            var i = n(296540),
                a = n(474848);
            let r = {
                marginInlineEnd: 8
            };

            function o({
                filter: e,
                entrypoint: t,
                ...s
            }) {
                let l = (0, n(533992).v3)(),
                    d = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                    c = (0, n(682985).K8)(() => (0, n(128669).En)(e, t), [e, t]),
                    {
                        title: u,
                        icon: p
                    } = n(128669).zP[e],
                    g = (0, i.useCallback)(() => {
                        (0, n(55067).X6)({
                            environment: l,
                            filter: e,
                            entrypoint: t,
                            analyticsContext: "personal_home" === t ? {
                                panelState: d.panelState,
                                view: d.view
                            } : void 0
                        })
                    }, [l, e, t, d.panelState, d.view]);
                return (0, a.jsx)(n(296060).A, { ...s,
                    on: c,
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: p
                    }),
                    title: u,
                    titleStyle: r,
                    onClick: g
                })
            }
        },
        789597: (e, t, n) => {
            n.d(t, {
                h: () => o,
                s: () => s
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                container: {
                    display: "flex",
                    flexGrow: 1,
                    width: "100%",
                    height: "100%",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingInlineStart: "15%",
                    paddingInlineEnd: "15%",
                    gap: 16
                },
                titleText: {
                    fontSize: n(418676).vQ,
                    color: n(632079).Tj.text.tertiary,
                    textAlign: "center",
                    textWrap: "balance"
                }
            };

            function o(e) {
                return (0, a.jsxs)("div", {
                    style: r.container,
                    children: [(0, a.jsx)(n(968107).y, {
                        size: 48,
                        colorVariant: "tertiary"
                    }), (0, a.jsxs)(n(4458).VP, {
                        alignItems: "center",
                        gap: 8,
                        children: [(0, a.jsx)("div", {
                            style: r.titleText,
                            children: e.title
                        }), e.buttonProps ? (0, a.jsx)(n(988022).p, {
                            colorPalette: "blue",
                            ...e.buttonProps
                        }) : void 0]
                    })]
                })
            }
            let s = i.memo(function(e) {
                let t, r, {
                        type: s,
                        entrypoint: l
                    } = e,
                    d = (0, n(533992).v3)(),
                    c = (0, n(515467).m)(),
                    u = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                    p = (0, n(682985).K8)(() => (0, n(83748).jv)((0, n(83748)._I)()), []),
                    g = (0, i.useCallback)(() => {
                        let e = n(92513).JW();
                        "personal_home" === l ? (0, n(593666).V0)({
                            environment: d,
                            calendarPanelContext: (0, n(593666).sp)({
                                panelState: u.panelState,
                                view: u.view
                            }),
                            notionAnalyticsSessionId: e
                        }) : "upcoming_meetings" === l && c.botId && (0, n(414824).R)({
                            environment: d,
                            data: {
                                type: "track",
                                payload: {
                                    event: "createEventButtonClicked",
                                    notionAnalyticsSessionId: e,
                                    method: "upcomingMeetings"
                                }
                            },
                            botId: c.botId
                        }), (0, n(874809).i$)({
                            environment: d,
                            from: "upcoming_meetings" === l ? "upcomingMeetingsListEmptyStateCreateEvent" : "homeEmptyStateCreateEvent",
                            notionAnalyticsSessionId: e
                        })
                    }, [d, u.panelState, u.view, l, c.botId]);
                switch (s) {
                    case "noEvents":
                        t = (0, a.jsxs)(a.Fragment, {
                            children: [1 === p ? (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.noEvents.title.today",
                                defaultMessage: "No upcoming events today"
                            }) : void 0, 2 === p ? (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.noEvents.title.todayOrTomorrow",
                                defaultMessage: "No upcoming events today or tomorrow"
                            }) : void 0, p >= 3 ? (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.noEvents.title",
                                defaultMessage: "No upcoming events in the next {days} days",
                                values: {
                                    days: p
                                }
                            }) : void 0]
                        }), r = {
                            iconLeading: {
                                icon: n(638501).plusSmallIcon,
                                size: "sm"
                            },
                            onClick: g,
                            children: (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.noEvents.buttonText",
                                defaultMessage: "New event"
                            })
                        };
                        break;
                    case "loadError":
                        t = (0, a.jsx)(n(109939).sA, {
                            id: "notionCalendarEmptyState.loadError.title",
                            defaultMessage: "Events not loading"
                        }), r = e.isRetryEnabled ? {
                            onClick: e.onRetry,
                            children: (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.loadError.buttonText",
                                defaultMessage: "Try again"
                            })
                        } : void 0;
                        break;
                    default:
                        (0, n(722371).HB)(s)
                }
                return (0, a.jsx)(o, {
                    title: t,
                    buttonProps: r
                })
            })
        },
        861842: (e, t, n) => {
            n.d(t, {
                D6: () => g,
                Jf: () => o,
                Zr: () => l,
                _: () => a,
                bO: () => c,
                kO: () => s,
                nT: () => p,
                p5: () => _
            }), n(410838), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(672577), n(581454), n(737550);
            let i = (0, n(109939).YK)({
                unableToCreateTranscriptionBlockForCalendarEvent: {
                    id: "calendarEventActions.unableToCreateTranscriptionBlockForCalendarEvent",
                    defaultMessage: "A transcription block could not be created for this calendar event."
                },
                sharedBlockWithParticipants: {
                    id: "upcomingMeetings.sharedBlockWithParticipants",
                    defaultMessage: "Participants in your workspace have edit access to this page."
                },
                sharedBlockWithParticipantsCta: {
                    id: "upcomingMeetings.sharedBlockWithParticipants.cta",
                    defaultMessage: "Manage access"
                },
                transcriptionBlockAlreadyExists: {
                    id: "upcomingMeetings.transcriptionBlockAlreadyExists",
                    defaultMessage: "A meeting note already exists for this calendar event."
                },
                transcriptionBlockAlreadyStarted: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStarted",
                    defaultMessage: "This meeting is already being transcribed."
                },
                transcriptionBlockAlreadyStartedByUser: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStartedByUser",
                    defaultMessage: "{transcriberName} is already transcribing"
                }
            });

            function a(e) {
                let {
                    environment: t,
                    transcriptionBlockStore: a
                } = e;
                (0, n(113955).L)({
                    item: {
                        label: n(962299).A.formatMessage(i.sharedBlockWithParticipants)
                    },
                    showButton: !0,
                    buttonText: n(962299).A.formatMessage(i.sharedBlockWithParticipantsCta),
                    onClick: () => {
                        (0, n(729619).Tk)({
                            environment: t,
                            store: a
                        })
                    }
                })
            }
            async function r(e) {
                let {
                    environment: t,
                    from: a,
                    event: r,
                    parent: o,
                    peekMode: s
                } = e, l = (0, n(583124).W)(), d = (await n(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: t,
                    from: a,
                    title: "title_with_event",
                    pageVisitSource: n(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: s,
                    calendarEvent: r,
                    sharedNote: l,
                    parent: o
                });
                if (!d) {
                    n(773352).log({
                        level: "error",
                        from: "calendarEventActions",
                        type: "unableToCreateTranscriptionBlockForCalendarEvent",
                        data: {
                            miscDataToConvertToString: {
                                eventId: r.id,
                                from: a,
                                parentId: o && "string" != typeof o ? o.id : o
                            }
                        }
                    }), n(436555).D6({
                        label: n(962299).A.formatMessage(i.unableToCreateTranscriptionBlockForCalendarEvent)
                    });
                    return
                }
                return d
            }
            async function o(e) {
                let {
                    environment: t,
                    event: a,
                    from: o,
                    parent: s,
                    peekMode: d,
                    method: c
                } = e, p = !1, g = (0, n(328765).S)();
                if (!g) return {
                    createdNewTranscriptionBlock: !1
                };
                let _ = await l({
                    event: a,
                    environment: t,
                    spaceStore: g
                });
                if (_)(await n(68067).$.load()).navigateToTranscriptionBlock({
                    environment: t,
                    blockStore: _,
                    pageVisitSource: n(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: d
                });
                else {
                    if (!(_ = await r({
                            environment: t,
                            from: o,
                            event: a,
                            parent: s,
                            peekMode: d
                        }))) return {
                        createdNewTranscriptionBlock: !1
                    };
                    p = !0
                }
                return "side_peek" === d && await n(475097).default.waitUntil(() => {
                    var e;
                    return n(475097).default.isSidePeekOpen() && !!(null == (e = n(475097).default.peekTargetStore.state) ? void 0 : e.isReady())
                }), "upcoming_meeting_create_meeting_note" !== o || p || n(436555).D6({
                    label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyExists)
                }), u({
                    environment: t,
                    event: a,
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: _
                }), (0, n(414824).R)({
                    environment: t,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteClicked",
                            eventId: a.id,
                            product: "notion",
                            from: o,
                            method: c
                        }
                    }
                }), {
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: _
                }
            }
            async function s(e) {
                let {
                    environment: t,
                    event: a,
                    from: r,
                    peekMode: s,
                    autoStart: l = !0,
                    method: d
                } = e, {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                } = await o({
                    environment: t,
                    from: r,
                    event: a,
                    peekMode: s,
                    method: d
                });
                if (u && "initial" !== (0, n(869708).by)(u).state) {
                    var p;
                    let e = null == (p = u.getModel()) || null == (p = p.getFormat().transcription_state_history) ? void 0 : p.findLast(e => "transcribing" === e.state);
                    if (e) {
                        let a = n(962299).A.getIntl(),
                            r = new(n(807825)).L(t, {
                                id: e.actor_id,
                                table: e.actor_table
                            }).getDisplayName(a);
                        n(436555).D6({
                            label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyStartedByUser, {
                                transcriberName: r
                            })
                        })
                    } else n(436555).D6({
                        label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyStarted)
                    });
                    return {
                        createdNewTranscriptionBlock: c,
                        transcriptionBlockStore: u
                    }
                }
                if (l && u) {
                    let e = await n(785576).w.load();
                    await e.startTranscription({
                        environment: t,
                        blockStore: u,
                        from: r,
                        audioConsentEnabled: (0, n(774073).yz)()
                    })
                } else if (l) {
                    let e = await n(666234).k.load();
                    await e.startTranscribingBlockOnPageFromTrustedSource({
                        environment: t,
                        from: r
                    })
                }
                return {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                }
            }
            async function l(e) {
                let t, {
                        event: i,
                        spaceStore: a,
                        environment: r
                    } = e,
                    {
                        blockAttachments: o
                    } = i,
                    s = r.api.callApi({
                        environment: r,
                        eventName: "getTranscriptionBlockForEvent",
                        data: {
                            eventUid: i.uid,
                            spaceId: a.id
                        }
                    });
                null != o && o.length && (t = d({
                    event: i,
                    spaceStore: a
                }));
                let l = await s;
                if ("failed" === l.type) return t;
                let c = new Set(l.data.transcriptionBlockPointers.map(e => e.id)),
                    u = new Set((null == o ? void 0 : o.map(e => e.id)) ? ? []),
                    p = (0, n(981990)._)(c, u);
                return 0 === p.size ? t : (n(773352).log({
                    level: "warning",
                    from: "maybeGetTranscriptionBlockStoreFromEvent",
                    type: "missingTranscriptionRecordPointer",
                    data: {
                        miscDataToConvertToString: {
                            missingPointers: Array.from(p),
                            verifiedPointers: Array.from(c),
                            localPointers: Array.from(u),
                            eventId: i.id,
                            spaceId: a.id
                        }
                    }
                }), (0, n(440143).Y)().update(e => {
                    let t = null == e ? void 0 : e.events.find(e => e.accountId === i.accountId && e.calendarId === i.calendarId && e.id === i.id);
                    return t && (t.blockAttachments = [...Array.from(p).map(e => ({
                        spaceId: a.id,
                        table: "block",
                        id: e
                    })), ...t.blockAttachments ? ? []]), e
                }), t = d({
                    event: i,
                    spaceStore: a
                }))
            }
            async function d(e) {
                var t, i;
                let {
                    event: a,
                    spaceStore: r,
                    timeoutMs: o = 4e3
                } = e, s = (null == (t = a.blockAttachments) ? void 0 : t.map(e => n(970831).B.createChildStore(r, e))) ? ? [];
                if (0 === s.length) return;
                let l = new(n(345426)).ComputedStore(() => (0, n(787971).gw)({
                        event: a,
                        transcriptionBlockStores: s
                    }), {
                        debugName: `getPrimaryTranscriptionBlockStoreFromEvent-${a.uid}`
                    }),
                    d = l.getState();
                if ("LOADING" === d.reason && (d = await new Promise(e => {
                        let t = window.setTimeout(() => {
                                e(void 0), l.removeListener(n)
                            }, o),
                            n = i => {
                                "LOADING" !== i.getState().reason && (e(i.getState()), clearTimeout(t), l.removeListener(n))
                            };
                        l.addListener(n)
                    })), null != (i = d) && i.primaryTranscriptionBlockStore) return d.primaryTranscriptionBlockStore
            }

            function c(e) {
                var t;
                return null == (t = e.attendees) ? void 0 : t.some(e => e.notionUserId && !e.self)
            }
            async function u(e) {
                let {
                    environment: t,
                    event: i,
                    transcriptionBlockStore: r,
                    createdNewTranscriptionBlock: o
                } = e;
                o && r && (0, n(583124).W)() && (r.isReady() || await r.load(), (0, n(404926).r)({
                    environment: t,
                    store: r
                }) || c(i) && a({
                    environment: t,
                    transcriptionBlockStore: r
                }))
            }
            async function p(e) {
                let {
                    event: t,
                    from: i,
                    environment: a,
                    calendarBotId: r,
                    peekMode: s
                } = e, l = !(await o({
                    environment: a,
                    from: i,
                    event: t,
                    peekMode: s ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_clicked",
                                eventProperties: a
                            };
                        case "upcoming_meeting_primary_note":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_primary_note_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_event_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: a,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, n(104310).u)({
                    event: d
                }), r && (0, n(414824).R)({
                    environment: a,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteOpened",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: r
                })
            }
            async function g(e) {
                let {
                    event: t,
                    from: i,
                    environment: a,
                    calendarBotId: r,
                    peekMode: o
                } = e, l = !(await s({
                    environment: a,
                    event: t,
                    from: i,
                    peekMode: o ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting_start_transcribing":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_start_transcribing_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "dropdown_transcribe_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: a,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, n(104310).u)({
                    event: d
                }), r && (0, n(414824).R)({
                    environment: a,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingTranscriptionStarted",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: r
                })
            }

            function _(e) {
                var t, i;
                let {
                    event: a,
                    from: r,
                    environment: o,
                    calendarBotId: s
                } = e, l = null == (t = a.conferencing) ? void 0 : t.providerName, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meetings":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_join_meeting_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_transcribe":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_meeting_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "dropdown_join_meeting_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: r,
                    environment: o,
                    eventProperties: {
                        calendar_event_id: a.id,
                        conferencing_provider: l
                    }
                });
                if (d && (0, n(104310).u)({
                        event: d
                    }), s) {
                    let e = "upcoming_meetings" === r ? "upcomingMeetings" : "transcription_confirmation_deeplink" === r ? void 0 : r;
                    (0, n(414824).R)({
                        environment: o,
                        data: {
                            type: "track",
                            payload: {
                                event: "joinMeeting",
                                eventId: a.id,
                                calendarId: a.calendarId,
                                conferencingProvider: l,
                                method: e
                            }
                        },
                        botId: s
                    })
                }
                null != (i = a.conferencing) && i.url && (0, n(624621).L)({
                    environment: o,
                    url: a.conferencing.url
                })
            }
        },
        977785: (e, t, n) => {
            n.d(t, {
                E: () => a
            }), n(16280);
            var i = n(296540);

            function a(e) {
                let {
                    children: t,
                    onSizeChange: a
                } = e, r = (0, i.useRef)(null), o = (0, n(729787).wY)(r);
                (0, i.useEffect)(() => {
                    a && o && a(o)
                }, [o, a]);
                let s = i.Children.only(t);
                return i.cloneElement(s, {
                    ref: r
                })
            }
        },
        982993: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        siteSettingContentType: "initial"
                    }
                }
            }
            let r = new a
        }
    }
]);