"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [55067], {
        55067: (e, t, n) => {
            let a, r, i, o, l;
            n.d(t, {
                rq: () => v,
                w1: () => m,
                k2: () => p,
                F8: () => A,
                qq: () => g,
                tD: () => h,
                X6: () => f,
                Kq: () => b,
                X8: () => y,
                vA: () => w
            }), n(898992), n(354520), n(672577), n(581454), n(737550);
            var d = () => n(832375),
                c = () => n(381453),
                s = () => n(103217),
                u = () => n(399161);

            function m({
                environment: e,
                timeRange: t,
                analyticsContext: a
            }) {
                let r = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!r) return;
                let i = r.getHomeCalendarConfigStore().getKeyStore("time_range"),
                    o = r.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "homeCalendarActions.changeUpcomingEventsTimeRange",
                    environment: e,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(368198).K)({
                            transaction: e,
                            store: i,
                            value: t
                        })
                    }
                }), (0, n(593666).rP)({
                    environment: e,
                    calendarPanelContext: (0, n(593666).sp)(a),
                    newValue: t
                })
            }

            function f({
                environment: e,
                filter: t,
                entrypoint: a,
                analyticsContext: r
            }) {
                var i, o;
                let l, d = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d) return;
                switch (a) {
                    case "personal_home":
                        l = null == (i = d.getHomeCalendarConfigStore()) || null == (i = i.getKeyStore("event_filters")) ? void 0 : i.getKeyStore(t);
                        break;
                    case "upcoming_meetings":
                        l = null == (o = d.getUpcomingMeetingsSettingsStore()) || null == (o = o.getKeyStore("event_filters")) ? void 0 : o.getKeyStore(t);
                        break;
                    default:
                        (0, n(722371).HB)(a)
                }
                let c = !(0, n(128669).En)(t, a),
                    s = d.getSpaceId();
                if ((0, n(377796).createAndCommit)({
                        userAction: "homeCalendarActions.toggleCalendarEventFilter",
                        environment: e,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, n(368198).K)({
                                transaction: e,
                                store: l,
                                value: c
                            })
                        }
                    }), r) {
                    let a = (0, n(593666).sp)(r);
                    (0, n(593666).jr)({
                        environment: e,
                        calendarPanelContext: a,
                        filter: t,
                        newValue: c
                    })
                }
            }

            function v({
                environment: e,
                botId: t,
                shouldLog: a,
                analyticsContext: r
            }) {
                let i = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) return;
                let o = i.getHomeCalendarConfigStore().getKeyStore("selected_calendar_bot_id");
                if (o.getValue() === t || !(0, n(338901).pH)().find(e => e.id === t)) return;
                let l = i.getSpaceId();
                if ((0, n(377796).createAndCommit)({
                        userAction: "homeCalendarActions.changeSelectedCalendarBot",
                        environment: e,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, n(368198).K)({
                                transaction: e,
                                store: o,
                                value: t
                            })
                        }
                    }), a) {
                    let a = (0, n(593666).sp)(r);
                    (0, n(593666)._w)({
                        environment: e,
                        botId: t,
                        calendarPanelContext: a
                    })
                }
            }

            function p({
                environment: e
            }) {
                let t = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!t) return;
                let a = t.getHomeCalendarConfigStore().getKeyStore("selected_calendar_bot_id");
                if (!a.getValue()) return;
                let r = t.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "homeCalendarActions.clearSelectedCalendarBot",
                    environment: e,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(368198).K)({
                            transaction: e,
                            store: a,
                            value: void 0
                        })
                    }
                })
            }
            async function g({
                environment: e,
                sidebarSpaceViewStore: t,
                botId: a,
                timeRange: r,
                calendarAndAccountIds: i,
                forceRefetch: o,
                updateMethod: l,
                reason: m
            }) {
                if (!t || !t.isReady() || !t.canRead()) return "failure";
                let f = Array.isArray(m) ? m : [m];
                if (function(e) {
                        let t = (0, n(440143).Y)().getHomeCalendarStateForSpaceView();
                        if (!t) return !1;
                        for (let {
                                reason: n,
                                enqueuedAt: a
                            } of e) {
                            if (void 0 === a) break;
                            let e = t.lastSeenReasonEnqueuedAt[n];
                            if (!e) break;
                            if (e >= a) return !0
                        }
                        return !1
                    }(f)) return "skipped";
                if (!o) {
                    var v;
                    let e = (0, n(440143).Y)().getHomeCalendarStateForSpaceView();
                    if (e || (await (0, n(975162).nQ)(1e3, (0, n(440143).Y)().waitUntilReady()), e = (0, n(440143).Y)().getHomeCalendarStateForSpaceView()), (null == (v = e) ? void 0 : v.botId) === a) {
                        if (i) {
                            if ((0, n(831214).zn)(i)) return "skipped"
                        } else if ((0, n(831214).zn)((0, n(377382).GF)({
                                botId: a,
                                sidebarSpaceViewStore: t
                            }))) return "skipped"
                    }
                }
                let p = (0, n(377382).AU)({
                        spaceViewStore: t,
                        botId: a,
                        specificCalendars: i,
                        forcePrimaryAccountVisibility: !0
                    }),
                    _ = n(680007).default.mark("home.calendar.get_calendar_events_all"),
                    S = Object.fromEntries(f.map(e => [e.reason, e.enqueuedAt]).filter(([e, t]) => !!t)),
                    C = (0, s().gM)({
                        environment: e,
                        events: (0, n(440143).Y)().getEvents()
                    }),
                    h = await e.api.callApi({
                        eventName: "getCalendarEvents",
                        environment: e,
                        data: {
                            botId: a,
                            spaceId: t.getSpaceId(),
                            timeMin: r.timeMin,
                            timeMax: r.timeMax,
                            orderBy: "startTime",
                            calendars: i,
                            calendarVisibilityOverrides: "mirrorWithCron" === p.type ? void 0 : p.calendarOverrides,
                            userTimeZone: (0, n(591742).s1)().timeZone,
                            versionedReasons: S,
                            reason: (0, c().sb)(f.map(e => e.reason)).sort().join(","),
                            unfurlGroups: !0,
                            knownUserEmails: Array.from(C.keys())
                        }
                    });
                if ("success" !== h.type) return "failure";
                i || n(680007).default.measure(_, {});
                let {
                    accounts: b,
                    calendars: w,
                    events: y,
                    notionUsers: A,
                    transcriptionBlockPointersByEventUId: I
                } = h.data, M = (0, n(831214).MP)({
                    calendarApiResponse: w,
                    specificCalendarsFetched: i,
                    calendarVisibilityOverrides: p
                }), V = function({
                    environment: e,
                    notionUsers: t,
                    cachedEmailToUserId: n
                }) {
                    let a = e.defaultRecordCache.inMemoryRecordCache,
                        r = e.currentUser.id,
                        i = new Map(n);
                    if (t)
                        for (let {
                                email: e,
                                user: n
                            } of t) {
                            if (!(null != n && n.value)) continue;
                            let t = {
                                    table: d().oo9,
                                    id: n.value.id
                                },
                                o = {
                                    pointer: t,
                                    userId: r
                                };
                            a.hasRecord(o) || (a.setRecord(o, n), a.emitRecord(t, [])), i.set(e, n.value.id)
                        }
                    return i.size > 0 ? i : void 0
                }({
                    environment: e,
                    notionUsers: A,
                    cachedEmailToUserId: C
                });
                return (0, n(440143).Y)().update(e => {
                        let t;
                        switch (l) {
                            case void 0:
                            case "merge":
                                t = e;
                                break;
                            case "replace":
                                t = void 0
                        }
                        let i = function({
                            oldState: e,
                            newState: t,
                            updatedCalendars: a,
                            fetchTime: r,
                            lastSeenReasonEnqueuedAt: i
                        }) {
                            let o = !e || t.botId !== e.botId,
                                l = (0, n(831214).tQ)({
                                    calendarsThatWereUpdated: a.map(u().N$),
                                    oldCalendarFetchedTimes: o || null == e ? void 0 : e.calendarsToLastFetchedTime,
                                    fetchTime: r
                                }),
                                d = e ? function(e) {
                                    let {
                                        previousLastSeenReasonEnqueuedAt: t,
                                        newLastSeenReasonEnqueuedAt: n
                                    } = e, a = {};
                                    for (let e of new Set([...Object.keys(t), ...Object.keys(n)])) a[e] = Math.max(t[e] ? ? 0, n[e] ? ? 0);
                                    return a
                                }({
                                    previousLastSeenReasonEnqueuedAt: e.lastSeenReasonEnqueuedAt,
                                    newLastSeenReasonEnqueuedAt: i
                                }) : i;
                            if (!e || o) return { ...t,
                                lastSeenReasonEnqueuedAt: d,
                                calendarsToLastFetchedTime: l
                            };
                            let m = { ...e,
                                    calendarsToLastFetchedTime: l
                                },
                                f = [...(null == e ? void 0 : e.events) ? ? [], ...t.events ? ? []],
                                v = {};
                            for (let e of f)
                                if (e.attendees)
                                    for (let t of e.attendees) t.notionUserId && t.email && (v[t.email] = t.notionUserId);
                            for (let e of f)
                                if (e.attendees)
                                    for (let t of e.attendees) t.email && v[t.email] && !t.notionUserId && (t.notionUserId = v[t.email]);
                            for (let r of (0, n(722371).WP)(t)) switch (r[0]) {
                                case "accounts":
                                    m.accounts = c().Ul(c().hS([...t.accounts, ...e.accounts], ({
                                        id: e
                                    }) => e), ({
                                        id: e
                                    }) => e);
                                    break;
                                case "events":
                                    m.events = (0, s().$z)({
                                        events: e.events,
                                        calendars: e.calendars,
                                        updatedCalendarAndAccountIds: a,
                                        newEvents: t.events
                                    });
                                    break;
                                case "botId":
                                    m.botId = t.botId;
                                    break;
                                case "timeMin":
                                    m.timeMin = Math.max(e.timeMin, t.timeMin);
                                    break;
                                case "timeMax":
                                    m.timeMax = Math.min(e.timeMax, t.timeMax);
                                    break;
                                case "calendars":
                                    m.calendars = c().Ul(c().hS([...t.calendars, ...e.calendars], u().N$), u().N$);
                                    break;
                                case "lastSeenReasonEnqueuedAt":
                                    m.lastSeenReasonEnqueuedAt = d;
                                    break;
                                default:
                                    r[0]
                            }
                            return m
                        }({
                            oldState: t,
                            newState: (0, s().IC)({
                                botId: a,
                                accounts: b,
                                calendars: w,
                                events: y,
                                emailToUserId: V,
                                transcriptionBlockPointersByEventUId: I,
                                timeMin: r.timeMin,
                                timeMax: r.timeMax
                            }),
                            updatedCalendars: M,
                            fetchTime: n(906745).DateTime.now(),
                            lastSeenReasonEnqueuedAt: S
                        });
                        return function({
                            now: e = n(906745).DateTime.now(),
                            state: t
                        }) {
                            let {
                                events: a
                            } = t, {
                                timeZone: r
                            } = (0, n(591742).s1)(), i = n(728372).AppStoreSidebarSpaceStore.state, o = e.minus({
                                days: 2
                            }), l = i ? (0, n(787971).dh)({
                                spaceStore: i,
                                events: a
                            }) : {}, d = a.filter(e => {
                                if ((0, s().FC)(e, o, r)) {
                                    var t;
                                    return ((null == (t = l[e.id]) ? void 0 : t.transcriptionBlockStores) ? ? []).some(e => {
                                        let t = (0, n(869708).by)(e).state;
                                        return "idle" !== t && "paused" !== t && "initial" !== t
                                    })
                                }
                                return !0
                            });
                            return d.length === a.length ? {
                                didChange: !1,
                                newState: t
                            } : {
                                didChange: !0,
                                newState: { ...t,
                                    timeMin: o.toMillis(),
                                    events: d
                                }
                            }
                        }({
                            state: i
                        }).newState
                    }),
                    function({
                        environment: e,
                        spaceViewStore: t,
                        botId: a,
                        calendarResponse: r
                    }) {
                        let i = t.getHomeCalendarVisibilityConfig(a);
                        if ((0, n(377382).Xg)({
                                spaceViewStore: t,
                                botId: a
                            })) return;
                        let o = (0, n(377382).NU)({
                            currentConfig: null == i ? void 0 : i.calendarVisibility,
                            calendars: r
                        });
                        if ("noChanges" === o.result) return;
                        let l = t.getSpaceId();
                        (0, n(377796).createAndCommit)({
                            userAction: "homeCalendarActions.populateCalendarConfigWithCalendarResponse",
                            environment: e,
                            cellTarget: l ? {
                                spaceWithId: l
                            } : void 0,
                            canUndo: !0,
                            perform: e => {
                                (0, n(368198).K)({
                                    transaction: e,
                                    store: t.getHomeCalendarConfigStore().getKeyStore("shownCalendars").getKeyStore(a).getKeyStore("calendarVisibility"),
                                    value: o.newConfig
                                })
                            }
                        })
                    }({
                        environment: e,
                        spaceViewStore: t,
                        botId: a,
                        calendarResponse: w
                    }), "success"
            }
            n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let _ = (0, c().sg)(g, 3e3, {
                    leading: !1,
                    trailing: !0
                }),
                S = 3e3 + 3e3 * Math.random(),
                C = Math.random() * n(695216).Xb * 20,
                h = (l = n(906745).DateTime.now(), window.addEventListener("online", () => {
                    l = n(906745).DateTime.now()
                }), ({
                    version: e,
                    ...t
                }) => {
                    let d = S; - 1 === e && n(906745).DateTime.now().diff(l).as("milliseconds") >= n(695216).Xb && (d = C);
                    let s = Math.max(d, 6e3);
                    o = function(e, t) {
                        if (!t) return e;
                        if (e.environment !== t.environment || e.sidebarSpaceViewStore !== t.sidebarSpaceViewStore || e.botId !== t.botId || e.timeRange.key !== t.timeRange.key) return;
                        let n = (0, c().Bq)([e.reason, t.reason]),
                            a = {};
                        for (let e of n) {
                            let t = a[e.reason] ? ? 0,
                                n = e.enqueuedAt && e.enqueuedAt > t ? e.enqueuedAt : t;
                            a[e.reason] = n
                        }
                        let r = {
                            environment: e.environment,
                            sidebarSpaceViewStore: e.sidebarSpaceViewStore,
                            botId: e.botId,
                            timeRange: {
                                key: e.timeRange.key,
                                timeMin: Math.max(e.timeRange.timeMin, t.timeRange.timeMin),
                                timeMax: Math.max(e.timeRange.timeMax, t.timeRange.timeMax)
                            },
                            reason: Object.entries(a).map(([e, t]) => ({
                                reason: e,
                                enqueuedAt: t
                            })),
                            forceRefetch: e.forceRefetch || t.forceRefetch
                        };
                        return e.calendarAndAccountIds && t.calendarAndAccountIds ? { ...r,
                            calendarAndAccountIds: (0, c().hS)([...e.calendarAndAccountIds, ...t.calendarAndAccountIds], u().N$)
                        } : { ...r,
                            updateMethod: "replace" === e.updateMethod || "replace" === t.updateMethod ? "replace" : "merge"
                        }
                    }(t, o) ? ? t;
                    let m = n(906745).DateTime.now(),
                        f = m.plus({
                            milliseconds: d
                        }),
                        v = m.plus({
                            milliseconds: s
                        });
                    r = r ? n(906745).DateTime.min(r, v) : v, a = n(906745).DateTime.min(r, f), i && clearTimeout(i);
                    let p = o;
                    i = setTimeout(() => {
                        g(p), r = void 0, a = void 0, o = void 0, i = void 0
                    }, a.diff(m).as("milliseconds"))
                });

            function b({
                environment: e,
                botId: t,
                mirrorWithNotionCalendar: a,
                analyticsContext: r
            }) {
                let i = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) return;
                let o = i.getHomeCalendarConfigStore().getKeyStore("shownCalendars").getKeyStore(t),
                    l = i.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "homeCalendarActions.toggleCalendarMirroring",
                    environment: e,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        let t = a ? void 0 : (0, n(377382).cL)((0, n(440143).Y)().getCurrentCalendars() ? ? []);
                        (0, n(368198).K)({
                            transaction: e,
                            store: o,
                            value: {
                                mirrorWithNotionCalendar: a,
                                calendarVisibility: t
                            }
                        })
                    }
                });
                let d = (0, n(593666).sp)(r);
                (0, n(593666).m3)({
                    environment: e,
                    calendarPanelContext: d,
                    newValue: a
                }), _({
                    environment: e,
                    sidebarSpaceViewStore: i,
                    botId: t,
                    timeRange: (0, n(83748).M)(),
                    forceRefetch: !1,
                    reason: {
                        reason: "toggle_mirroring"
                    }
                })
            }

            function w({
                environment: e,
                botId: t,
                calendarId: a,
                accountId: r,
                newIsVisible: i,
                analyticsContext: o
            }) {
                let l = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let d = l.getCalendarVisibilityStore({
                        botId: t,
                        calendarId: a,
                        accountId: r
                    }),
                    c = l.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "homeCalendarActions.toggleCalendarVisibility",
                    environment: e,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(368198).K)({
                            transaction: e,
                            store: d,
                            value: i
                        })
                    }
                }), (0, n(593666).J3)({
                    environment: e,
                    calendarPanelContext: (0, n(593666).sp)(o),
                    calendarId: a,
                    accountId: r,
                    newValue: i
                }), _({
                    environment: e,
                    sidebarSpaceViewStore: l,
                    botId: t,
                    timeRange: (0, n(83748).M)(),
                    calendarAndAccountIds: [{
                        calendarId: a,
                        accountId: r
                    }],
                    forceRefetch: !1,
                    reason: {
                        reason: "toggle_calendar_visibility"
                    }
                })
            }

            function y({
                environment: e,
                botId: t,
                calendarId: a,
                accountId: r,
                newIsVisible: i,
                enqueuedAt: o
            }) {
                var l;
                let d = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!d) return;
                let s = (0, n(440143).Y)().getCalendar({
                    calendarId: a,
                    accountId: r
                });
                !s || s.selected === i || ((0, n(440143).Y)().update(e => {
                    if (!e) return;
                    let t = (0, c().mg)(e),
                        n = t.calendars.find(e => e.id === a && e.accountId === r);
                    return n && n.selected !== i ? (n.selected = i, t) : e
                }), (null == (l = d.getHomeCalendarVisibilityConfig(t)) ? void 0 : l.mirrorWithNotionCalendar) && i && h({
                    sidebarSpaceViewStore: d,
                    environment: e,
                    botId: t,
                    timeRange: (0, n(83748).M)(),
                    calendarAndAccountIds: [{
                        calendarId: a,
                        accountId: r
                    }],
                    forceRefetch: !1,
                    reason: {
                        reason: "calendar_visibility_change",
                        enqueuedAt: o
                    }
                }))
            }

            function A() {
                n(728372).AppStoreSidebarSpaceViewStore.state && (0, n(440143).Y)().setState(void 0)
            }
        },
        83748: (e, t, n) => {
            n.d(t, {
                C0: () => a,
                M: () => i,
                _I: () => d,
                iI: () => r,
                jv: () => l
            });
            let a = "three_days";

            function r() {
                let e = d();
                return {
                    key: e,
                    ...o(e)
                }
            }

            function i() {
                let e = "two_days_before_one_week_after";
                return {
                    key: e,
                    ...o(e)
                }
            }

            function o(e) {
                if ("two_days_before_one_week_after" === e) return {
                    timeMin: (0, n(200979).A)(Date.now(), 2).getTime(),
                    timeMax: (0, n(392998).A)(Date.now(), 7).getTime()
                };
                let t = Date.now(),
                    a = (0, n(392998).A)((0, n(894074).A)(t, {
                        hours: 23,
                        minutes: 59,
                        seconds: 59,
                        milliseconds: 999
                    }), l(e) - 1);
                return {
                    timeMin: t,
                    timeMax: a.getTime()
                }
            }

            function l(e) {
                switch (e) {
                    case "one_day":
                        return 1;
                    case "two_days":
                        return 2;
                    case "three_days":
                        return 3;
                    case "one_week":
                    case "two_days_before_one_week_after":
                        return 7;
                    default:
                        (0, n(722371).HB)(e)
                }
            }

            function d() {
                var e;
                let t = null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getHomeCalendarConfigStore()) || null == (e = e.getKeyStore("time_range")) ? void 0 : e.getValue();
                switch (t) {
                    case "one_day":
                    case "two_days":
                    case "three_days":
                    case "one_week":
                    case "two_days_before_one_week_after":
                        return t;
                    default:
                        return a
                }
            }
        },
        377382: (e, t, n) => {
            n.d(t, {
                AU: () => l,
                GF: () => i,
                NU: () => c,
                Pj: () => o,
                Xg: () => s,
                cL: () => d
            }), n(944114), n(898992), n(430670), n(737550);
            var a = () => n(722371),
                r = () => n(399161);

            function i(e) {
                return Object.values(function({
                    botId: e,
                    sidebarSpaceViewStore: t
                }) {
                    let a = (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                        i = {};
                    for (let n of a) i[(0, r().N$)(n)] = {
                        calendarId: n.id,
                        accountId: n.accountId,
                        visible: o({
                            spaceViewStore: t,
                            botId: e,
                            calendar: n
                        })
                    };
                    return i
                }(e)).flatMap(({
                    calendarId: e,
                    accountId: t,
                    visible: n
                }) => n ? [{
                    calendarId: e,
                    accountId: t
                }] : [])
            }

            function o({
                spaceViewStore: e,
                botId: t,
                calendar: n
            }) {
                return function({
                    spaceViewStore: e,
                    botId: t,
                    calendarId: n,
                    accountId: a
                }) {
                    var r;
                    let i = null == e ? void 0 : e.getHomeCalendarVisibilityConfig(t);
                    if (!(!i || s({
                            spaceViewStore: e,
                            botId: t
                        }))) return null == (r = i.calendarVisibility) || null == (r = r[a]) ? void 0 : r[n]
                }({
                    spaceViewStore: e,
                    botId: t,
                    calendarId: n.id,
                    accountId: n.accountId
                }) ? ? n.selected
            }

            function l({
                spaceViewStore: e,
                botId: t,
                specificCalendars: r,
                forcePrimaryAccountVisibility: i = !1
            }) {
                var o;
                let d = e.getHomeCalendarVisibilityConfig(t),
                    c = !d || !(0, a().O9)(null == d ? void 0 : d.calendarVisibility) || s({
                        spaceViewStore: e,
                        botId: t
                    }),
                    u = [];
                if (!c)
                    for (let [e, t] of (0, a().WP)(d.calendarVisibility ? ? {}))
                        for (let [n, i] of (0, a().WP)(t ? ? {}))(0, a().O9)(i) && (!r || r.some(t => t.accountId === e && t.calendarId === n)) && u.push({
                            accountId: e,
                            calendarId: n,
                            visible: i
                        });
                if (!i) return u.length > 0 ? {
                    type: "calendarOverrides",
                    calendarOverrides: u
                } : {
                    type: "mirrorWithCron"
                };
                let m = null == (o = n(728372).AppStoreCurrentUserStore.state) ? void 0 : o.getEmail(),
                    {
                        eligibleAccounts: f
                    } = m ? (0, n(120462).RM)({
                        currentUserEmail: m,
                        calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                        accounts: (0, n(440143).Y)().getCurrentAccounts()
                    }) : {
                        eligibleAccounts: []
                    };
                for (let {
                        account: e,
                        calendars: t
                    } of f)
                    for (let n of t) {
                        if (r && !r.some(t => t.accountId === e.id && t.calendarId === n.id)) continue;
                        let t = u.findIndex(t => t.accountId === e.id && t.calendarId === n.id);
                        t >= 0 ? u[t].visible = !0 : u.push({
                            accountId: e.id,
                            calendarId: n.id,
                            visible: !0
                        })
                    }
                return u.length > 0 ? {
                    type: "calendarOverrides",
                    calendarOverrides: u
                } : {
                    type: "mirrorWithCron"
                }
            }

            function d(e) {
                let t = {};
                for (let {
                        id: n,
                        accountId: a,
                        selected: r
                    } of e) t[a] = { ...t[a],
                    [n]: r
                };
                return t
            }

            function c({
                currentConfig: e,
                calendars: t
            }) {
                let a = (0, n(381453).mg)(e) ? ? {},
                    r = !1;
                for (let {
                        id: e,
                        accountId: n,
                        selected: o
                    } of t) {
                    var i;
                    (null == (i = a[n]) ? void 0 : i[e]) === void 0 && (a[n] = { ...a[n],
                        [e]: o
                    }, r = !0)
                }
                return r ? {
                    result: "updated",
                    newConfig: a
                } : {
                    result: "noChanges"
                }
            }

            function s({
                spaceViewStore: e,
                botId: t
            }) {
                if (!e || !t) return !0;
                let n = e.getHomeCalendarVisibilityConfig(t);
                return (null == n ? void 0 : n.mirrorWithNotionCalendar) ? ? !0
            }
        },
        593666: (e, t, n) => {
            function a(e) {
                var t, a;
                let r = n(728372).AppStoreSidebarSpaceViewStore.state,
                    i = null == (t = (0, n(440143).Y)().getHomeCalendarStateForSpaceView()) ? void 0 : t.botId;
                return {
                    state: e.panelState,
                    calendars: r && i && ((0, n(440143).Y)().getCurrentCalendars() ? ? []).map(e => ({
                        type: e.provider,
                        calendarId: e.id,
                        accountId: e.accountId,
                        isShown: (0, n(377382).Pj)({
                            spaceViewStore: r,
                            botId: i,
                            calendar: e
                        })
                    })),
                    mirror_calendars: (0, n(377382).Xg)({
                        botId: i,
                        spaceViewStore: r
                    }),
                    event_filters: {
                        all_day_events: (0, n(128669).En)("all_day_events", "personal_home"),
                        events_without_participants: (0, n(128669).En)("events_without_participants", "personal_home"),
                        events_without_location: (0, n(128669).En)("events_without_location", "personal_home")
                    },
                    time_range: (null == r || null == (a = r.getHomeCalendarConfigStore()) ? void 0 : a.getKeyStore("time_range").getValue()) ? ? n(83748).C0,
                    bot_id: i,
                    view: e.view
                }
            }

            function r({
                event: e,
                eventIndex: t,
                numDaysInFuture: n
            }) {
                var a;
                return {
                    event_id: e.id,
                    calendar_id: e.calendarId,
                    account_id: e.accountId,
                    is_all_day: e.isAllDay,
                    has_participants: e.hasParticipants,
                    conferencing_type: null == (a = e.conferencing) ? void 0 : a.providerName,
                    index: t,
                    num_days_in_future: n
                }
            }

            function i({
                environment: e,
                target: t,
                eventContext: a,
                calendarPanelContext: r
            }) {
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_event_click",
                        eventProperties: {
                            target: t
                        }
                    }
                }), "conferencing" === t && r.bot_id && (0, n(414824).R)({
                    environment: e,
                    data: {
                        type: "track",
                        payload: {
                            event: "joinMeeting",
                            eventId: a.event_id,
                            calendarId: a.calendar_id,
                            conferencingProvider: a.conferencing_type,
                            method: r.view
                        }
                    },
                    botId: r.bot_id
                })
            }

            function o({
                environment: e,
                eventContext: t,
                calendarPanelContext: a,
                attachmentType: r,
                notionBlockId: i,
                attachmentIndex: l
            }) {
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_event_click",
                        eventProperties: {
                            target: "attachment"
                        }
                    }
                }), a.bot_id && (0, n(414824).R)({
                    environment: e,
                    data: {
                        type: "track",
                        payload: {
                            event: "eventAttachmentOpened",
                            provider: r,
                            location: a.view,
                            method: a.view
                        }
                    },
                    botId: a.bot_id
                })
            }

            function l(e) {
                let {
                    environment: t,
                    calendarPanelContext: a,
                    notionAnalyticsSessionId: r
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_create_event",
                        eventProperties: {}
                    }
                }), a.bot_id && (0, n(414824).R)({
                    environment: t,
                    data: {
                        type: "track",
                        payload: {
                            event: "createEventButtonClicked",
                            notionAnalyticsSessionId: r,
                            method: a.view
                        }
                    },
                    botId: a.bot_id
                })
            }

            function d(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_settings_menu",
                        eventProperties: {
                            action: e.action
                        }
                    }
                })
            }

            function c(e) {
                v({
                    environment: e.environment,
                    calendarPanelContext: e.calendarPanelContext,
                    action: `toggle_${e.filter}`,
                    value: e.newValue
                })
            }

            function s(e) {
                v({
                    environment: e.environment,
                    calendarPanelContext: e.calendarPanelContext,
                    action: "change_calendar_bot",
                    value: e.botId
                })
            }

            function u(e) {
                v({
                    environment: e.environment,
                    calendarPanelContext: e.calendarPanelContext,
                    action: "toggle_mirroring",
                    value: e.newValue
                })
            }

            function m(e) {
                v({
                    environment: e.environment,
                    calendarPanelContext: e.calendarPanelContext,
                    action: "change_time_range",
                    value: e.newValue
                })
            }

            function f(e) {
                v({
                    environment: e.environment,
                    calendarPanelContext: e.calendarPanelContext,
                    action: "toggle_calendar_visibility",
                    calendarId: e.calendarId,
                    accountId: e.accountId,
                    value: e.newValue
                })
            }

            function v(e) {
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_configure_view",
                        eventProperties: {
                            action: e.action,
                            value: e.value
                        }
                    }
                })
            }

            function p(e) {
                let {
                    environment: t,
                    calendarPanelContext: a
                } = e;
                (0, n(104310).u)({
                    event: {
                        eventName: "cal_loaded",
                        eventProperties: {}
                    }
                }), ("connected_with_events" === a.state || "connected_no_events" === a.state) && a.bot_id && (0, n(414824).R)({
                    environment: t,
                    data: {
                        type: "page",
                        payload: {
                            page: a.view,
                            state: a.state
                        }
                    },
                    botId: a.bot_id
                })
            }
            n.d(t, {
                G7: () => o,
                IU: () => r,
                J3: () => f,
                V0: () => l,
                _w: () => s,
                jr: () => c,
                lv: () => d,
                m3: () => u,
                np: () => i,
                qL: () => p,
                rP: () => m,
                sp: () => a
            }), n(898992), n(354520), n(581454)
        },
        831214: (e, t, n) => {
            function a(e) {
                return e.every(({
                    calendarId: e,
                    accountId: t
                }) => (0, n(440143).Y)().getCalendarFetchedTime({
                    calendarId: e,
                    accountId: t
                }))
            }

            function r({
                specificCalendarsFetched: e,
                calendarVisibilityOverrides: t,
                calendarApiResponse: a
            }) {
                let i = new Set((e ? ? []).map(n(399161).N$)),
                    o = "calendarOverrides" === t.type ? t.calendarOverrides : [],
                    l = (0, n(381453).pY)(o, n(399161).N$);
                return a.filter(t => {
                    let a = (0, n(399161).N$)(t);
                    if (void 0 !== e) return i.has(a);
                    let r = l[a];
                    return (0, n(722371).O9)(r) ? r.visible : t.selected
                }).map(({
                    id: e,
                    accountId: t
                }) => ({
                    calendarId: e,
                    accountId: t
                }))
            }

            function i({
                calendarsThatWereUpdated: e,
                oldCalendarFetchedTimes: t,
                fetchTime: n
            }) {
                let a = { ...t
                };
                for (let t of e)(!a[t] || a[t] < n.toMillis()) && (a[t] = n.toMillis());
                return a
            }

            function o(e) {
                switch (e) {
                    case "events":
                        return "connected_with_events";
                    case "noEvents":
                        return "connected_no_events";
                    case "signedOut":
                        return "disconnected";
                    case "disconnectedAccount":
                    case "missingScopes":
                        return "connected_permissions_error";
                    case "loadError":
                        return "load_error";
                    default:
                        return
                }
            }
            n.d(t, {
                MP: () => r,
                oM: () => o,
                tQ: () => i,
                zn: () => a
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(581454)
        }
    }
]);