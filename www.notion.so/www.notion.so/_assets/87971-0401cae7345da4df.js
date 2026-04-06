"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [87971], {
        74423: (e, t, n) => {
            function r({
                eventStartDate: e,
                eventEndDateInclusive: t,
                minDate: n,
                maxDateInclusive: o,
                timeZone: l
            }) {
                let c = function({
                    startAndEndDaysRange: e,
                    minAndMaxDaysRange: t
                }) {
                    if (e.end < t.min || e.start > t.max) return;
                    let {
                        start: n,
                        end: r
                    } = e, {
                        min: a,
                        max: o
                    } = t;
                    return {
                        start: n < a ? a : n,
                        end: r > o ? o : r
                    }
                }({
                    startAndEndDaysRange: {
                        start: i(e, l),
                        end: i(t, l)
                    },
                    minAndMaxDaysRange: {
                        min: i(n, l),
                        max: i(o, l)
                    }
                });
                if (!c) return [];
                let {
                    start: s,
                    end: d
                } = c;
                return a(s, d, l)
            }

            function a(e, t, n) {
                let r = i(t, n),
                    a = i(e, n),
                    l = [];
                for (; a <= r;) l.push(a), a = o(a, n).plus({
                    days: 1
                }).toISODate();
                return l
            }

            function o(e, t) {
                let [r, a, o] = i(e, t).split("-").map(Number);
                return n(906745).DateTime.fromObject({
                    year: r,
                    month: a,
                    day: o
                }, {
                    zone: t
                })
            }

            function i(e, t) {
                let r = n(906745).DateTime.fromISO(e, {
                    zone: t
                });
                if (!r.isValid) throw Error(`Invalid date string: ${e}`);
                return e.includes("T") ? r.toISODate() : e
            }

            function l(e, t) {
                let r = "en-US";
                return n(906745).DateTime.fromISO(e, {
                    zone: "UTC"
                }).setLocale(r).toLocaleString(n(906745).DateTime.DATE_SHORT) === t.setLocale(r).toLocaleString(n(906745).DateTime.DATE_SHORT)
            }

            function c(e, t, n) {
                let r = o(e, n);
                return o(t, n).diff(r, "days").days
            }
            n.d(t, {
                $D: () => a,
                J_: () => i,
                RY: () => r,
                V$: () => o,
                cK: () => l,
                qi: () => c
            }), n(16280), n(944114), n(581454)
        },
        103217: (e, t, n) => {
            n.d(t, {
                b7: () => f,
                gM: () => b,
                JF: () => y,
                SG: () => s,
                ft: () => k,
                S6: () => S,
                xG: () => g,
                g2: () => p,
                FC: () => h,
                $z: () => T,
                IC: () => d
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(803949), n(581454), n(16280);
            class r {
                orderedKeys;
                keysToValues;
                get length() {
                    return this.orderedKeys.length
                }
                constructor(e, t) {
                    if (!e && !t) {
                        this.orderedKeys = [], this.keysToValues = {};
                        return
                    }
                    if (!e || !t) throw Error("Missing values or keyGetter in OrderedMap constructor");
                    for (const n of (this.orderedKeys = e.map(t), this.keysToValues = {}, e)) this.keysToValues[t(n)] = n
                }
                append(e, t, {
                    keepOrdering: n
                } = {
                    keepOrdering: !1
                }) {
                    e in this.keysToValues ? (this.keysToValues[e] = t, n || (this.orderedKeys = [...this.orderedKeys.filter(t => t !== e), e])) : (this.orderedKeys.push(e), this.keysToValues[e] = t)
                }
                delete(e) {
                    this.orderedKeys = this.orderedKeys.filter(t => t !== e), delete this.keysToValues[e]
                }
                get(e) {
                    return this.keysToValues[e]
                }
                getOrderedValues() {
                    return this.orderedKeys.map(e => this.keysToValues[e])
                }
                hasKey(e) {
                    return e in this.keysToValues
                }
                toJSON() {
                    return this.orderedKeys.map(e => [e, this.keysToValues[e]])
                }
                static fromJSON(e) {
                    let t = new r;
                    return t.orderedKeys = e.map(([e]) => e), t.keysToValues = Object.fromEntries(e), t
                }
            }
            var a = () => n(832375),
                o = () => n(381453),
                i = () => n(399161),
                l = () => n(74423);

            function c(e) {
                if (e.isAllDay) {
                    let {
                        date: t
                    } = e.start;
                    return (0, l().V$)(t, "UTC")
                } {
                    let {
                        dateTime: t
                    } = e.start;
                    return n(906745).DateTime.fromISO(t, {
                        zone: "UTC"
                    })
                }
            }

            function s(e) {
                if ("object" == typeof e && null !== e && "enqueuedAt" in e && "number" == typeof e.enqueuedAt) return e.enqueuedAt
            }

            function d({
                botId: e,
                accounts: t,
                calendars: a,
                events: o,
                emailToUserId: c,
                transcriptionBlockPointersByEventUId: s,
                timeMin: T,
                timeMax: v
            }) {
                let p = new r(a.map(u), i().N$);
                return {
                    botId: e,
                    accounts: t,
                    calendars: p.getOrderedValues(),
                    events: (function(e) {
                        let {
                            events: t,
                            emailToUserId: r,
                            transcriptionBlockPointersByEventUId: a
                        } = e;
                        return t.map(e => (function(e) {
                            var t, r, a, o, i, c;
                            let s, {
                                    event: d,
                                    emailToUserId: u,
                                    transcriptionBlockPointers: T
                                } = e,
                                f = m(null == (t = d.start) ? void 0 : t.timeZone),
                                v = m(null == (r = d.end) ? void 0 : r.timeZone),
                                p = (null == (a = d.start) ? void 0 : a.date) ? ? (null == (o = d.start) ? void 0 : o.dateTime) ? ? void 0,
                                g = (null == (i = d.end) ? void 0 : i.date) ? ? (null == (c = d.end) ? void 0 : c.dateTime) ? ? void 0;
                            if (!p || !g) return;
                            let S = () => {
                                n(773352).log({
                                    level: "error",
                                    from: "toHydratedEvent",
                                    type: "invalidDate",
                                    data: {
                                        miscDataToConvertToString: {
                                            accountId: d.accountId,
                                            calendarId: d.calendarId,
                                            eventId: d.id,
                                            start: p,
                                            end: g
                                        }
                                    }
                                })
                            };
                            if (d.isAllDay) {
                                let e, t;
                                try {
                                    e = (0, l().J_)(p, f || "UTC"), t = (0, l().J_)(g, f || "UTC")
                                } catch (e) {
                                    S();
                                    return
                                }
                                s = {
                                    isAllDay: !0,
                                    start: {
                                        date: e
                                    },
                                    end: {
                                        date: t
                                    }
                                }
                            } else {
                                let e = n(906745).DateTime.fromISO(p, {
                                        zone: f
                                    }),
                                    t = n(906745).DateTime.fromISO(g, {
                                        zone: v
                                    });
                                if (!e.isValid || !t.isValid) return void S();
                                s = {
                                    isAllDay: !1,
                                    start: {
                                        dateTime: p,
                                        timeZone: f
                                    },
                                    end: {
                                        dateTime: g,
                                        timeZone: v
                                    }
                                }
                            }
                            return { ...d,
                                ...s,
                                attendees: function(e) {
                                    let {
                                        emailToUserId: t,
                                        attendees: n
                                    } = e;
                                    if (!n) return;
                                    let r = e => e ? null == t ? void 0 : t.get(e) : void 0,
                                        a = [],
                                        o = new Set,
                                        i = new Set;
                                    for (let e of n) {
                                        if (e.groupMembers) {
                                            e.groupMembers.forEach(e => i.add(e));
                                            continue
                                        }
                                        e.email && o.add(e.email), a.push({ ...e,
                                            notionUserId: r(e.email)
                                        })
                                    }
                                    for (let e of i) o.has(e) || a.push({
                                        email: e,
                                        notionUserId: r(e),
                                        responseStatus: "unknown"
                                    });
                                    return a
                                }({
                                    emailToUserId: u,
                                    attendees: d.attendees
                                }),
                                blockAttachments: T,
                                color: (0, n(588727).Pf)({
                                    colorId: d.colorId,
                                    colorType: "event"
                                })
                            }
                        })({
                            event: e,
                            emailToUserId: r,
                            transcriptionBlockPointers: null == a ? void 0 : a[e.uid]
                        })).filter(n(722371).O9)
                    })({
                        events: o,
                        emailToUserId: c,
                        transcriptionBlockPointersByEventUId: s
                    }).sort(f(p.getOrderedValues())),
                    timeMin: T,
                    timeMax: v,
                    lastSeenReasonEnqueuedAt: {}
                }
            }

            function u(e) {
                return { ...e,
                    color: (0, n(588727).Pf)({
                        color: e.color,
                        colorId: e.colorId,
                        colorType: "calendar"
                    }),
                    colorId: void 0,
                    primary: e.primary
                }
            }

            function m(e) {
                if (e) return n(906745).R2.normalizeZone(e).isValid ? e : void 0
            }

            function T({
                events: e,
                updatedCalendarAndAccountIds: t,
                newEvents: n,
                calendars: r
            }) {
                let a = new Set(t.map(i().N$));
                return function(e, t, n) {
                    let r = [],
                        a = 0,
                        o = 0;
                    for (; a < e.length && o < t.length;) 0 >= n(e[a], t[o]) ? (r.push(e[a]), a++) : (r.push(t[o]), o++);
                    return a < e.length ? r.push(...e.slice(a)) : o < t.length && r.push(...t.slice(o)), r
                }(e.filter(e => !a.has((0, i().N$)(e))), [...n].sort(f(r)), f(r))
            }

            function f(e) {
                let t = t => e.find(e => e.id === t.calendarId && e.accountId === t.accountId);
                return (e, r) => (function({
                    aCalendar: e,
                    aEvent: t,
                    aStartTimeOverride: r,
                    bCalendar: a,
                    bEvent: o,
                    bStartTimeOverride: i
                }) {
                    let l = r,
                        s = i;
                    if (!l && t.start && (l = c(t)), !s && o.start && (s = c(o)), !l) return 1;
                    if (!s) return -1;
                    let d = (0, n(606982).A)(l.toMillis(), s.toMillis());
                    if (0 === d) {
                        var u, m;
                        let n = !!(null == e ? void 0 : e.primary),
                            r = !!(null == a ? void 0 : a.primary),
                            i = !!(null == (u = t.conferencing) ? void 0 : u.providerName),
                            l = !!t.hasParticipants,
                            c = i && l,
                            s = !!(null == (m = o.conferencing) ? void 0 : m.providerName),
                            T = !!o.hasParticipants,
                            f = s && T,
                            v = "accepted" === t.responseStatus,
                            p = "accepted" === o.responseStatus,
                            g = "needsAction" === t.responseStatus,
                            S = "needsAction" === o.responseStatus,
                            y = "tentative" === t.responseStatus,
                            h = "tentative" === o.responseStatus;
                        n && !r ? d = -1 : r && !n ? d = 1 : c && !f ? d = -1 : f && !c ? d = 1 : i && !s ? d = -1 : s && !i ? d = 1 : l && !T ? d = -1 : T && !l ? d = 1 : v && !p ? d = -1 : p && !v ? d = 1 : g && !(p || S) ? d = -1 : S && !(v || g) ? d = 1 : y && !(p || S || h) ? d = -1 : h && !(v || g || y) && (d = 1)
                    }
                    return d
                })({
                    aEvent: e,
                    bEvent: r,
                    aCalendar: t(e),
                    bCalendar: t(r)
                })
            }

            function v(e, t) {
                return (0, l().V$)(e, t).minus({
                    days: 1
                }).toISODate()
            }

            function p({
                events: e,
                getCalendarVisibility: t,
                calendars: a,
                startDate: c,
                endDateInclusive: s,
                eventFilters: d,
                timeZone: u
            }) {
                let m = c.toISODate(),
                    T = s.toISODate(),
                    g = [...e].sort(f(a ? ? [])),
                    S = new r([], ({
                        baseEvent: e
                    }) => e.id);
                for (let e of g) {
                    let r = null == a ? void 0 : a.find(t => t.id === e.calendarId && t.accountId === e.accountId);
                    if (!r || !t(r) || ! function({
                            event: e,
                            minDate: t,
                            maxDateInclusive: r,
                            eventFilters: a,
                            timeZone: o
                        }) {
                            var i, c;
                            if (function(e) {
                                    switch (e.responseStatus) {
                                        case "declined":
                                            return !0;
                                        case "needsAction":
                                        case "tentative":
                                        case "accepted":
                                        case void 0:
                                            return !1;
                                        default:
                                            (0, n(722371).HB)(e.responseStatus)
                                    }
                                }(e) || !(0, n(128669).J4)({
                                    event: e,
                                    eventFilters: a
                                })) return !1;
                            let {
                                start: s,
                                end: d
                            } = (i = e, c = o, i.isAllDay ? {
                                start: i.start.date,
                                end: v(i.end.date, c)
                            } : {
                                start: (0, l().J_)(i.start.dateTime, c),
                                end: (0, l().J_)(i.end.dateTime, c)
                            });
                            return !(s > r) && !(d < t) && (0, n(128669).J4)({
                                event: e,
                                eventFilters: a
                            })
                        }({
                            event: e,
                            minDate: m,
                            maxDateInclusive: T,
                            eventFilters: d,
                            timeZone: u
                        })) continue;
                    let c = S.get(e.id);
                    if (c) c.allSquashedEvents = (0, o().hS)([...c.allSquashedEvents, e], e => (0, i().zS)(e));
                    else if (e.cronSyncOriginalEventData) {
                        let t = e.cronSyncOriginalEventData.eventId,
                            n = S.get(t);
                        n && (n.allSquashedEvents = (0, o().hS)([...n.allSquashedEvents, e], i().zS))
                    } else S.append(e.id, {
                        baseEvent: e,
                        allSquashedEvents: [e]
                    })
                }
                let y = new r((0, l().$D)(m, T, u).map(e => ({
                    date: e,
                    allDayEvents: [],
                    timedEvents: []
                })), ({
                    date: e
                }) => e);
                for (let {
                        baseEvent: e,
                        allSquashedEvents: t
                    } of S.getOrderedValues())
                    if (e.isAllDay)
                        for (let n of (0, l().RY)({
                                eventStartDate: e.start.date,
                                eventEndDateInclusive: v(e.end.date, u),
                                minDate: m,
                                maxDateInclusive: T,
                                timeZone: u
                            })) {
                            let r = y.get(n);
                            r && r.allDayEvents.push({
                                baseEvent: e,
                                allSquashedEvents: t
                            })
                        } else {
                            let n = (0, l().J_)(e.start.dateTime, u),
                                r = y.get(n);
                            if (!r) continue;
                            r.timedEvents.push({
                                baseEvent: e,
                                allSquashedEvents: t
                            })
                        }
                return y.getOrderedValues()
            }

            function g({
                day: e,
                now: t,
                timeZone: n
            }) {
                return [...e.allDayEvents, ...e.timedEvents].filter(({
                    baseEvent: e
                }) => {
                    var r, a;
                    return r = e, a = t, !(y(r, n) < a)
                })
            }

            function S(e, t) {
                let r = e.isAllDay ? e.start.date : e.start.dateTime;
                return n(906745).DateTime.fromISO(r, {
                    zone: t
                })
            }

            function y(e, t) {
                let r = e.isAllDay ? e.end.date : e.end.dateTime;
                return n(906745).DateTime.fromISO(r, {
                    zone: t
                })
            }

            function h(e, t, n) {
                return y(e, n) < t
            }

            function k(e) {
                if (e.isAllDay) return;
                let t = (0, n(440143).Y)().getCalendar({
                    calendarId: e.calendarId,
                    accountId: e.accountId
                });
                if (!t) return;
                let r = (0, n(588727).Sk)({
                        theme: (0, n(632079).O4)({
                            theme: "light"
                        }),
                        eventColor: e.color,
                        calendarColor: t.color,
                        themeMode: "light"
                    }),
                    a = (0, n(588727).Sk)({
                        theme: (0, n(632079).O4)({
                            theme: "dark"
                        }),
                        eventColor: e.color,
                        calendarColor: t.color,
                        themeMode: "dark"
                    });
                return {
                    accountId: e.accountId,
                    calendarId: e.calendarId,
                    id: e.id,
                    startTime: e.start.dateTime,
                    endTime: e.end.dateTime,
                    responseStatus: e.responseStatus ? ? "needsAction",
                    colorHex: {
                        light: r,
                        dark: a
                    },
                    conferencing: e.conferencing
                }
            }

            function b(e) {
                let {
                    environment: t,
                    events: n
                } = e, r = t.defaultRecordCache.inMemoryRecordCache, o = t.currentUser.id, i = new Map;
                for (let e of n)
                    if (e.attendees) {
                        for (let t of e.attendees)
                            if (t.notionUserId && t.email) {
                                let e = {
                                    pointer: {
                                        table: a().oo9,
                                        id: t.notionUserId
                                    },
                                    userId: o
                                };
                                r.hasRecord(e) && i.set(t.email, t.notionUserId)
                            }
                    }
                return i
            }
        },
        128669: (e, t, n) => {
            n.d(t, {
                zP: () => i,
                J4: () => d,
                En: () => s
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.05 2.53 15.65 15.64",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.421 3.657a.55.55 0 0 1 .776.06l.222.258.012.017 8.777 10.24a.55.55 0 0 1-.847.701l-1.167-1.361-1.37 3.56c-.536 1.392-2.506 1.387-3.035-.008l-1.616-4.26c-.14-.368-.43-.66-.797-.8l-4.268-1.618c-1.395-.53-1.398-2.501-.006-3.036l4.37-1.681-1.11-1.296a.55.55 0 0 1 .059-.776M3.55 8.577a.375.375 0 0 0 .002.7l4.267 1.619a2.63 2.63 0 0 1 1.523 1.523l1.615 4.262a.375.375 0 0 0 .701.002l1.613-4.19-4.935-5.756zm11.942-5.931c1.314-.505 2.605.787 2.1 2.1l-2.5 6.492-.924-1.078 2.257-5.862a.375.375 0 0 0-.485-.484l-5.425 2.084L9.65 4.89z"
                    })
                },
                a = (0, n(104509).wt)("pointerSlash", r, "default"),
                o = (0, n(109939).YK)({
                    allDayEvents: {
                        id: "NotionCalendarSettingsContent.allDayEvents",
                        defaultMessage: "All-day events"
                    },
                    eventsWithoutParticipants: {
                        id: "NotionCalendarSettingsContent.eventsWithoutParticipants",
                        defaultMessage: "Events without participants"
                    },
                    eventsWithoutLocation: {
                        id: "NotionCalendarSettingsContent.eventsWithoutLocation",
                        defaultMessage: "Events without conferencing / location"
                    }
                }),
                i = {
                    all_day_events: {
                        title: n(962299).A.formatMessage(o.allDayEvents),
                        icon: n(634663).circleIcon
                    },
                    events_without_participants: {
                        title: n(962299).A.formatMessage(o.eventsWithoutParticipants),
                        icon: n(800191).e
                    },
                    events_without_location: {
                        title: n(962299).A.formatMessage(o.eventsWithoutLocation),
                        icon: a
                    }
                },
                l = {
                    all_day_events: !0,
                    events_without_participants: !0,
                    events_without_location: !0
                },
                c = {
                    all_day_events: !1,
                    events_without_participants: !0,
                    events_without_location: !0
                };

            function s(e, t) {
                let r = n(728372).AppStoreSidebarSpaceViewStore.state;
                switch (t) {
                    case "personal_home":
                        return (null == r ? void 0 : r.getHomeCalendarFilter(e)) ? ? l[e];
                    case "upcoming_meetings":
                        return (null == r ? void 0 : r.getUpcomingMeetingsEventFilter(e)) ? ? c[e];
                    default:
                        (0, n(722371).HB)(t)
                }
            }

            function d({
                event: e,
                eventFilters: t
            }) {
                return (!1 !== t.all_day_events || !e.isAllDay) && (!1 !== t.events_without_participants || !!e.hasParticipants) && (!1 !== t.events_without_location || !!e.hasConferencingOrLocation)
            }
        },
        157129: (e, t, n) => {
            n.d(t, {
                Ku: () => c
            }), n(18107), n(944114);
            var r = () => n(906745),
                a = () => n(552923);
            let o = {
                    START: n(884972).Ht ? [-600, -300, -240, -180, -120, -65, 0, 300, 600] : [-600, -300, -240, -180, -120, -60, 0, 300, 600],
                    END: [0, 60]
                },
                i = 30 * n(695216).TD;
            class l extends a().u {
                clearNextTickTimeout;
                stalledActiveTabTimeoutCount = 0;
                activeTabTimeoutCount = 0;
                lastLoggedTimerSuccessTime = 0;
                nextTickId = 0;
                constructor(e) {
                    const t = () => {
                        var e;
                        null == (e = this.clearNextTickTimeout) || e.call(this), this.clearNextTickTimeout = void 0, this.maybeScheduleNextTick()
                    };
                    super({
                        getInitialState: () => ({
                            lastEvaluatedNowMillis: Date.now()
                        }),
                        effect: () => (this.clearNextTickTimeout || this.maybeScheduleNextTick(), this.calendarMeetingsStore.addListener(t), () => {
                            !(this.listenerCount() > 0) && (this.calendarMeetingsStore.removeListener(t), this.clearNextTickTimeout && (this.clearNextTickTimeout(), this.clearNextTickTimeout = void 0))
                        })
                    }), this.calendarMeetingsStore = e
                }
                getLastEvaluatedNow() {
                    return r().DateTime.fromMillis(this.getState().lastEvaluatedNowMillis)
                }
                maybeScheduleNextTick() {
                    this.clearNextTickTimeout || 0 === this.listenerCount() || 0 !== this.calendarMeetingsStore.getState().length && this.scheduleNextTick()
                }
                scheduleNextTick() {
                    let e, t = this.calendarMeetingsStore.getState(),
                        n = r().DateTime.now();
                    for (let a of t)
                        for (let {
                                anchorTime: t,
                                offsets: i
                            } of [{
                                anchorTime: a.start.dateTime,
                                offsets: o.START
                            }, {
                                anchorTime: a.end.dateTime,
                                offsets: o.END
                            }])
                            for (let a of i) {
                                let o = r().DateTime.fromISO(t).plus({
                                    seconds: a
                                });
                                !(o < n) && (e ? ? = o).diff(o).as("seconds") >= 0 && (e = o)
                            }
                    if (!e) return;
                    let a = e.diff(r().DateTime.now()).as("milliseconds");
                    this.clearNextTickTimeout = this.setTimeoutWithThrottlingObserver(() => {
                        this.clearNextTickTimeout = void 0, this.setState({
                            lastEvaluatedNowMillis: r().DateTime.now().toMillis()
                        }), this.maybeScheduleNextTick()
                    }, a)
                }
                setMainProcessTimeout(e, t) {
                    var r, a, o, i;
                    let l = String(++this.nextTickId),
                        c = Date.now() + t;
                    null === n(884972).Ht || void 0 === n(884972).Ht || null == (r = n(884972).Ht.calendarTicker) || null == (a = r.scheduleCalendarTick) || a.call(r, {
                        delayMs: t,
                        expectedTimestamp: c,
                        tickId: l
                    });
                    let s = null === n(884972).Ht || void 0 === n(884972).Ht || null == (o = n(884972).Ht.calendarTicker) || null == (o = o.calendarTick) || null == (i = o.addListener) ? void 0 : i.call(o, (t, n) => {
                            n.tickId === l && (d(), e())
                        }),
                        d = () => {
                            var e, t;
                            null == s || s(), null === n(884972).Ht || void 0 === n(884972).Ht || null == (e = n(884972).Ht.calendarTicker) || null == (t = e.cancelCalendarTick) || t.call(e)
                        };
                    return d
                }
                setTimeoutWithThrottlingObserver(e, t) {
                    var a;
                    let o;
                    if (!(null !== n(884972).Ht && void 0 !== n(884972).Ht && n(884972).Ht.powerSuspend) || !(null !== n(884972).Ht && void 0 !== n(884972).Ht && n(884972).Ht.powerResume)) {
                        let n = setTimeout(() => {
                            e()
                        }, t);
                        return () => {
                            clearTimeout(n)
                        }
                    }
                    let l = [],
                        c = [],
                        s = [],
                        d = r().DateTime.now();
                    (function({
                        timeoutStart: e,
                        cleanupFns: t,
                        visibilityHistory: n
                    }) {
                        n.push({
                            timestamp: 0,
                            visibility: document.visibilityState
                        });
                        let a = () => {
                            n.push({
                                timestamp: r().DateTime.now().diff(e).toMillis(),
                                visibility: document.visibilityState
                            })
                        };
                        document.addEventListener("visibilitychange", a), t.push(() => {
                            document.removeEventListener("visibilitychange", a)
                        })
                    })({
                        timeoutStart: d,
                        visibilityHistory: s,
                        cleanupFns: l
                    }),
                    function({
                        timeoutStart: e,
                        cleanupFns: t,
                        powerEventHistory: a
                    }) {
                        var o, i, l, c;
                        null !== n(884972).Ht && void 0 !== n(884972).Ht && n(884972).Ht.powerSuspend && t.push(null == (o = (i = n(884972).Ht.powerSuspend).addListener) ? void 0 : o.call(i, () => {
                            a.push({
                                timestamp: r().DateTime.now().diff(e).toMillis(),
                                powerEvent: "suspend"
                            })
                        })), null !== n(884972).Ht && void 0 !== n(884972).Ht && n(884972).Ht.powerResume && t.push(null == (l = (c = n(884972).Ht.powerResume).addListener) ? void 0 : l.call(c, () => {
                            a.push({
                                timestamp: r().DateTime.now().diff(e).toMillis(),
                                powerEvent: "resume"
                            })
                        }))
                    }({
                        timeoutStart: d,
                        powerEventHistory: c,
                        cleanupFns: l
                    });
                    let u = r().DateTime.now().plus({
                            milliseconds: t
                        }),
                        m = n(218744).default.checkGate({
                            gateName: "meeting_notification_main_process_timers"
                        }) && (null === n(884972).Ht || void 0 === n(884972).Ht || null == (a = n(884972).Ht.calendarTicker) ? void 0 : a.scheduleCalendarTick),
                        T = m ? "electron-main" : "electron-renderer",
                        f = async () => {
                            let a = r().DateTime.now(),
                                o = n(898735).A.state.isActiveTab;
                            if (e(), !m && !o || m && !o && Math.random() > .2) return void l.forEach(e => null == e ? void 0 : e());
                            this.activeTabTimeoutCount++;
                            let f = [...s],
                                v = [...c];
                            await n(975162).wR(1e3), l.forEach(e => null == e ? void 0 : e()), await n(975162).wR(Math.random() * n(695216).TD * 10);
                            let p = c.at(-1),
                                g = a.diff(d);
                            if ((null == p ? void 0 : p.powerEvent) === "resume" && p.timestamp > g.minus({
                                    seconds: 30
                                }).toMillis()) return;
                            let S = a.diff(u).as("milliseconds"),
                                y = {
                                    documentVisibilityState: document.visibilityState,
                                    miscDataToConvertToString: {
                                        timeSinceExpectedExecutionTime: S,
                                        expectedExecutionTime: t,
                                        actualExecutionTime: g,
                                        visibilityHistory: f,
                                        powerEventHistory: v,
                                        stalledActiveTabTimeoutCount: this.stalledActiveTabTimeoutCount,
                                        activeTabTimeoutCount: this.activeTabTimeoutCount,
                                        stalledTimerRate: this.activeTabTimeoutCount > 0 ? this.stalledActiveTabTimeoutCount / this.activeTabTimeoutCount : 0,
                                        source: T,
                                        isActiveTab: o
                                    }
                                };
                            S > i ? (this.stalledActiveTabTimeoutCount++, n(773352).log({
                                level: "warning",
                                from: "CalendarEventTickerStore",
                                type: "timerStalled",
                                data: y
                            })) : this.lastLoggedTimerSuccessTime < r().DateTime.now().minus({
                                minutes: 30
                            }).toMillis() && (this.lastLoggedTimerSuccessTime = r().DateTime.now().toMillis(), n(773352).log({
                                level: "info",
                                from: "CalendarEventTickerStore",
                                type: "timerSuccess",
                                data: y
                            }))
                        };
                    if (m) o = this.setMainProcessTimeout(f, t);
                    else {
                        let e = setTimeout(f, t);
                        o = () => clearTimeout(e)
                    }
                    return () => {
                        o(), l.forEach(e => null == e ? void 0 : e())
                    }
                }
            }
            let c = new l(n(672935).w);
            (0, n(202146).exposeDebugValue)("CalendarEventTickerStore", c)
        },
        399161: (e, t, n) => {
            function r(e) {
                return "string" == typeof e ? e : "calendarId" in e ? `${e.accountId}:${e.calendarId}` : `${e.accountId}:${e.id}`
            }

            function a({
                id: e,
                accountId: t,
                calendarId: n
            }) {
                return `${t}:${n}:${e}`
            }

            function o({
                event: e,
                date: t
            }) {
                return `${e.isAllDay}-${a(e)}-${t}`
            }
            n.d(t, {
                N$: () => r,
                ft: () => o,
                zS: () => a
            })
        },
        588727: (e, t, n) => {
            n.d(t, {
                Pf: () => c,
                QL: () => i,
                Sk: () => l,
                xg: () => u
            });
            let r = {
                    1: e => e.orange.background.accentSecondary,
                    2: e => e.red.background.accentSecondary,
                    3: e => e.red.background.accentSecondary,
                    4: e => e.orange.background.accentSecondary,
                    5: e => e.orange.background.accentSecondary,
                    6: e => e.orange.background.accentSecondary,
                    7: e => e.green.background.accentSecondary,
                    8: e => e.green.background.accentSecondary,
                    9: e => e.green.background.accentSecondary,
                    10: e => e.green.background.accentSecondary,
                    11: e => e.yellow.background.accentSecondary,
                    12: e => e.yellow.background.accentSecondary,
                    13: e => e.green.background.accentSecondary,
                    14: e => e.blue.background.accentSecondary,
                    15: e => e.blue.background.accentSecondary,
                    16: e => e.blue.background.accentSecondary,
                    17: e => e.purple.background.accentSecondary,
                    18: e => e.purple.background.accentSecondary,
                    19: e => e.gray.background.accentSecondary,
                    20: e => e.gray.background.accentSecondary,
                    21: e => e.pink.background.accentSecondary,
                    22: e => e.pink.background.accentSecondary,
                    23: e => e.purple.background.accentSecondary,
                    24: e => e.purple.background.accentSecondary
                },
                a = {
                    1: e => e.purple.background.accentSecondary,
                    2: e => e.green.background.accentSecondary,
                    3: e => e.pink.background.accentSecondary,
                    4: e => e.red.background.accentSecondary,
                    5: e => e.yellow.background.accentSecondary,
                    6: e => e.orange.background.accentSecondary,
                    7: e => e.blue.background.accentSecondary,
                    8: e => e.gray.background.accentSecondary,
                    9: e => e.blue.background.accentSecondary,
                    10: e => e.green.background.accentSecondary,
                    11: e => e.red.background.accentSecondary
                };

            function o({
                theme: e,
                color: t,
                themeMode: n
            }) {
                var i, l, c;
                if ("preset" === t.type) {
                    if ("calendar" === t.colorType) return null == (i = r[t.colorId]) ? void 0 : i.call(r, e);
                    if ("event" === t.colorType) return null == (l = a[t.colorId]) ? void 0 : l.call(a, e)
                }
                if ("custom" === t.type) return null == (c = t.colorHexes) ? void 0 : c[n].backgroundPrimary
            }

            function i({
                theme: e,
                calendarColor: t,
                themeMode: n
            }) {
                let r = t && o({
                    theme: e,
                    color: t,
                    themeMode: n
                });
                return r || e.blue.background.accentSecondary
            }

            function l({
                theme: e,
                eventColor: t,
                calendarColor: n,
                themeMode: r
            }) {
                let a = t && o({
                    theme: e,
                    color: t,
                    themeMode: r
                });
                return a || i({
                    theme: e,
                    calendarColor: n,
                    themeMode: r
                })
            }

            function c(e) {
                let {
                    colorType: t,
                    color: n,
                    colorId: r
                } = e;
                return r ? {
                    type: "preset",
                    colorId: r,
                    colorType: t
                } : n ? {
                    type: "custom",
                    colorHexes: n
                } : void 0
            }
            let s = {
                    red: {
                        background: n(632079).Tj.red.background.secondary,
                        foreground: n(632079).Tj.red.border.accentPrimary
                    },
                    orange: {
                        background: n(632079).Tj.orange.background.secondary,
                        foreground: n(632079).Tj.orange.border.accentPrimary
                    },
                    yellow: {
                        background: n(632079).Tj.yellow.background.secondary,
                        foreground: n(632079).Tj.yellow.border.accentPrimary
                    },
                    green: {
                        background: n(632079).Tj.green.background.secondary,
                        foreground: n(632079).Tj.green.border.accentPrimary
                    },
                    blue: {
                        background: n(632079).Tj.blue.background.secondary,
                        foreground: n(632079).Tj.blue.border.accentPrimary
                    },
                    purple: {
                        background: n(632079).Tj.purple.background.secondary,
                        foreground: n(632079).Tj.purple.border.accentPrimary
                    },
                    gray: {
                        background: n(632079).Tj.gray.background.secondary,
                        foreground: n(632079).Tj.gray.border.accentPrimary
                    }
                },
                d = ["blue", "orange", "purple", "green", "gray", "red", "yellow"];

            function u(e) {
                let t = d.length;
                return s[d[(e % t + t) % t]]
            }
        },
        672935: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(944114);
            var r = () => n(120462);
            let a = new(n(345426)).ComputedStore(() => {
                var e;
                let t = (0, n(440143).Y)().getDateTimeEvents(),
                    a = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail();
                if (!a) return [];
                let o = n(218744).default.checkGate({
                        gateName: "aimn_multi_calendar_account_visibility"
                    }),
                    {
                        allEligibleCalendars: i
                    } = (0, r().RM)({
                        currentUserEmail: a,
                        calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                        accounts: (0, n(440143).Y)().getCurrentAccounts(),
                        allowAllCalendarAccounts: o
                    }),
                    l = [];
                for (let e of t)(0, r().xM)({
                    event: e,
                    currentUserEmail: a,
                    eligibleCalendars: i
                }) && l.push(e);
                return l
            }, {
                debugName: "CalendarMeetingsStore",
                equalityFn: n(795676).k
            })
        },
        787971: (e, t, n) => {
            n.d(t, {
                AD: () => c,
                dh: () => l,
                gw: () => s
            }), n(944114), n(898992), n(823215), n(354520), n(581454);
            var r = () => n(970831),
                a = () => n(103217);
            let o = n(906745).dw.fromObject({
                    hours: 6
                }),
                i = n(906745).dw.fromObject({
                    hours: 24
                });

            function l(e) {
                let {
                    spaceStore: t,
                    events: l
                } = e, c = n(157129).Ku.getLastEvaluatedNow(), s = (0, n(714350).P)(), d = c.minus(o), u = c.plus(i), m = {};
                for (let e of l) {
                    let n = (0, a().S6)(e, s),
                        o = (0, a().JF)(e, s);
                    if (!(n < d) && !(o > u))
                        for (let n of e.blockAttachments ? ? []) m[e.id] ? ? = {
                            event: e,
                            transcriptionBlockStores: []
                        }, m[e.id].transcriptionBlockStores.push(r().B.createChildStore(t, n))
                }
                return m
            }

            function c() {
                let e = n(728372).AppStoreSidebarSpaceStore.state;
                if (!e) return {};
                let t = l({
                        spaceStore: e,
                        events: n(672935).w.getState()
                    }),
                    r = {};
                for (let e in t) {
                    let n = t[e];
                    r[e] = s(n)
                }
                return r
            }

            function s(e) {
                let {
                    event: t,
                    transcriptionBlockStores: r
                } = e;
                if (0 === r.length) return {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "NO_ALIVE_TRANSCRIPTION_BLOCKS"
                };
                if (!r.every(e => e.isReady())) return {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "LOADING"
                };
                let a = r.filter(e => e.isTranscriptionBlock() && e.canEdit() && !e.pathIsDead());
                if (0 === a.length) return {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "NO_ALIVE_TRANSCRIPTION_BLOCKS"
                };
                if (1 === a.length) {
                    let e = a[0],
                        t = (0, n(869708).u7)(e);
                    return void 0 === t ? {
                        primaryTranscriptionBlockStore: void 0,
                        lastTranscriptionState: void 0,
                        reason: "ERR_NO_LAST_TRANSCRIPTION_STATE"
                    } : {
                        primaryTranscriptionBlockStore: e,
                        lastTranscriptionState: t,
                        liveTranscriptionBlockStores: a,
                        reason: "ONLY_ONE_TRANSCRIPTION_BLOCK"
                    }
                }
                let o = r.filter(e => "transcribing" === (0, n(869708).by)(e).state);
                if (1 === o.length) {
                    let e = o[0],
                        t = (0, n(869708).u7)(e);
                    return void 0 === t ? {
                        primaryTranscriptionBlockStore: void 0,
                        lastTranscriptionState: void 0,
                        reason: "ERR_NO_LAST_TRANSCRIPTION_STATE"
                    } : {
                        primaryTranscriptionBlockStore: e,
                        lastTranscriptionState: t,
                        liveTranscriptionBlockStores: a,
                        reason: "ACTIVE_TRANSCRIBING"
                    }
                }
                let i = 0 === o.length ? a : o;
                if (!i.every(e => e.getPermissionItemsStore().isReady())) return {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "LOADING"
                };
                let l = function(e, t) {
                    var n, r, a, o;
                    let i, l = null == (n = t.attendees) ? void 0 : n.map(e => e.notionUserId).filter(e => void 0 !== e);
                    for (let t of e) {
                        let e = 0;
                        for (let n of l ? ? []) t.getUserPermissionForId(n) && e++;
                        let n = (null == (a = i) ? void 0 : a.overlappingPermissions) ? ? 0;
                        if (e === n) {
                            i ? ? = {
                                stores: [],
                                overlappingPermissions: e
                            }, null == (o = i) || o.stores.push(t);
                            continue
                        }
                        e > n && (i = {
                            stores: [t],
                            overlappingPermissions: e
                        })
                    }
                    return (null == (r = i) ? void 0 : r.stores) ? ? []
                }(i, t);
                if (1 === l.length) {
                    let e = l[0],
                        t = (0, n(869708).u7)(e);
                    return void 0 === t ? {
                        primaryTranscriptionBlockStore: void 0,
                        lastTranscriptionState: void 0,
                        reason: "ERR_NO_LAST_TRANSCRIPTION_STATE"
                    } : {
                        primaryTranscriptionBlockStore: e,
                        lastTranscriptionState: t,
                        liveTranscriptionBlockStores: a,
                        reason: "MOST_PERMISSIVE"
                    }
                }
                let c = function(e) {
                    var t, n, r;
                    let a;
                    for (let t of e) {
                        let e = null == (n = t.getModel()) ? void 0 : n.getCreatedTime();
                        void 0 !== e && e > ((null == (r = a) ? void 0 : r.createdTime) ? ? 0) && (a = {
                            blockStore: t,
                            createdTime: e
                        })
                    }
                    return null == (t = a) ? void 0 : t.blockStore
                }(i);
                if (void 0 === c) return {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "NO_ALIVE_TRANSCRIPTION_BLOCKS"
                };
                let s = (0, n(869708).u7)(c);
                return void 0 === s ? {
                    primaryTranscriptionBlockStore: void 0,
                    lastTranscriptionState: void 0,
                    reason: "ERR_NO_LAST_TRANSCRIPTION_STATE"
                } : {
                    primaryTranscriptionBlockStore: c,
                    lastTranscriptionState: s,
                    liveTranscriptionBlockStores: a,
                    reason: "MOST_RECENT"
                }
            }
        },
        800191: (e, t, n) => {
            n.d(t, {
                e: () => a
            }), n(296540);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.68 2.37 17.01 15.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M5.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M8 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h8.3c.68 0 1.328-.287 1.74-.767.429-.502.591-1.217.23-1.923C13.1 12.945 10.7 11.63 8 11.63m-5.007 3.875c.761-1.488 2.672-2.626 5.007-2.626s4.246 1.138 5.007 2.626c.105.204.07.378-.067.54-.156.182-.448.33-.79.33h-8.3c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54m15.493-8.568a.625.625 0 0 1 0 .884L16.807 9.5l1.68 1.68a.625.625 0 1 1-.884.883l-1.68-1.68-1.68 1.68a.625.625 0 0 1-.883-.884L15.04 9.5l-1.68-1.68a.625.625 0 1 1 .884-.883l1.68 1.68 1.678-1.68a.625.625 0 0 1 .884 0"
                    })
                },
                a = (0, n(104509).wt)("personXmark", r, "default")
        }
    }
]);