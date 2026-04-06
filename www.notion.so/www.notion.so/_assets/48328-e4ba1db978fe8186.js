"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [48328, 82106], {
        360989: (e, t, n) => {
            function i(e, t) {
                return "DATE" === e.type ? e[t].date : e[t].dateTime
            }

            function a(e) {
                let t = n(906745).DateTime.fromISO(e.start.dateTime),
                    i = n(906745).DateTime.fromISO(e.end.dateTime),
                    a = n(906745).IX.fromDateTimes(t, i);
                if (a.isValid) return a
            }

            function r(e) {
                let {
                    period: t,
                    locale: i,
                    timeZone: a
                } = e;
                return (0, n(523144).Vj)({
                    start: t.start.dateTime,
                    end: t.end.dateTime,
                    locale: i,
                    timeZone: a
                })
            }

            function o(e) {
                let {
                    interval: t,
                    eventPeriod: i
                } = e;
                if (!t.isValid || t.isEmpty()) return !1;
                switch (i.type) {
                    case "DATE":
                        return function(e) {
                            let {
                                interval: t,
                                datePeriod: n
                            } = e, i = t.start.toISODate(), a = t.end.minus({
                                millisecond: 1
                            }).toISODate();
                            return i < n.end.date && a >= n.start.date
                        }({
                            interval: t,
                            datePeriod: i
                        });
                    case "DATE_TIME":
                        return function(e) {
                            let {
                                interval: t,
                                dateTimePeriod: n
                            } = e, i = a(n);
                            return void 0 !== i && t.overlaps(i)
                        }({
                            interval: t,
                            dateTimePeriod: i
                        });
                    default:
                        (0, n(722371).HB)(i)
                }
            }

            function l(e) {
                return (0, n(381453).My)(e, [({
                    period: e
                }) => i(e, "start"), ({
                    period: e
                }) => i(e, "end")], ["asc", "desc"])
            }

            function s(e) {
                return !e.isAllDay && "dateTime" in e.start && e.start.dateTime && "dateTime" in e.end && e.end.dateTime ? {
                    type: "DATE_TIME",
                    start: {
                        dateTime: e.start.dateTime,
                        timeZone: e.start.timeZone
                    },
                    end: {
                        dateTime: e.end.dateTime,
                        timeZone: e.end.timeZone
                    }
                } : e.isAllDay && "date" in e.start && e.start.date && "date" in e.end && e.end.date ? {
                    type: "DATE",
                    start: {
                        date: e.start.date
                    },
                    end: {
                        date: e.end.date
                    }
                } : void 0
            }
            n.d(t, {
                BM: () => a,
                RQ: () => r,
                Zs: () => o,
                nW: () => s,
                ww: () => l
            })
        },
        389939: (e, t, n) => {
            n.d(t, {
                H: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.69 3.37 12.61 9.25",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.32 3.375a.625.625 0 1 0 0 1.25h11.36a.625.625 0 0 0 0-1.25zm0 2.667a.625.625 0 1 0 0 1.25h11.36a.625.625 0 1 0 0-1.25zm0 2.666a.625.625 0 0 0 0 1.25h11.36a.625.625 0 0 0 0-1.25zm0 2.667a.625.625 0 1 0 0 1.25H8a.625.625 0 1 0 0-1.25z"
                    })
                },
                a = (0, n(104509).wt)("textJustifyLeftSmall", i, "small")
        },
        479491: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                questionMarkCircleFillSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1m-.02 3.58c-.694 0-1.161.395-1.255.77a.5.5 0 0 1-.97-.243C5.989 5.12 6.96 4.53 7.981 4.53c1.151 0 2.279.764 2.279 1.926 0 .678-.409 1.235-.948 1.568l-.644.44a.75.75 0 0 0-.338.603.5.5 0 0 1-1 0c0-.574.3-1.101.77-1.427l.003-.001.667-.455.01-.007c.327-.199.48-.471.48-.721 0-.415-.462-.926-1.28-.926m.583 5.389a.7.7 0 1 1-1.4 0 .7.7 0 0 1 1.4 0"
                    })
                },
                a = (0, n(104509).wt)("questionMarkCircleFillSmall", i, "fillSmall")
        },
        523144: (e, t, n) => {
            n.d(t, {
                Vj: () => r,
                ax: () => o,
                iI: () => l,
                iw: () => a,
                u3: () => i,
                uJ: () => s,
                zw: () => d
            }), n(898992), n(354520), n(581454), n(737550);
            let i = "–",
                a = " ";

            function r({
                start: e,
                end: t,
                locale: l,
                timeZone: s
            }) {
                let d = n(906745).DateTime.fromISO(e),
                    c = n(906745).DateTime.fromISO(t),
                    u = function({
                        start: e,
                        end: t
                    }) {
                        return !!(t.diff(e).as("hours") > 12) || e.hour < 12 != t.hour < 12
                    }({
                        start: d,
                        end: c
                    }),
                    m = o({
                        time: d,
                        showAmPm: u,
                        locale: l,
                        timeZone: s
                    }),
                    f = o({
                        time: c,
                        showAmPm: !0,
                        locale: l,
                        timeZone: s
                    });
                return `${m}${a}${i}${a}${f}`
            }

            function o({
                time: e,
                showAmPm: t,
                locale: i,
                timeZone: r
            }) {
                let s = l(i),
                    d = 0 !== e.minute || !s,
                    c = { ...n(906745).DateTime.TIME_SIMPLE,
                        hour: "numeric",
                        minute: d ? "2-digit" : void 0,
                        timeZone: (0, n(25825).lW)(r)
                    };
                return s && !t ? e.setLocale(i).toLocaleParts(c).filter(e => "dayPeriod" !== e.type).map(e => e.value.trim()).join("") : e.toLocaleString({ ...c,
                    hour12: s
                }, {
                    locale: i
                }).replace(" ", a)
            }
            let l = (0, n(381453).Bj)(function(e) {
                return n(906745).DateTime.fromObject({
                    hour: 13
                }).setLocale(e).toLocaleParts(n(906745).DateTime.TIME_SIMPLE).some(e => "dayPeriod" === e.type)
            });

            function s({
                time: e,
                locale: t,
                timeZone: i
            }) {
                let r = l(t);
                return e.toLocaleString({ ...n(906745).DateTime.DATETIME_MED,
                    hour: "numeric",
                    minute: "2-digit",
                    year: void 0,
                    month: void 0,
                    day: void 0,
                    timeZone: (0, n(25825).lW)(i),
                    hour12: r
                }, {
                    locale: t
                }).replaceAll(" ", a)
            }

            function d({
                startTime: e,
                endTime: t
            }) {
                let n = t.diff(e).shiftTo("hours", "minutes"),
                    i = Math.floor(n.hours),
                    a = Math.round(n.minutes);
                return 0 === i ? `${a}min` : 0 === a ? `${i}h` : `${i}h ${a}min`
            }
        },
        548328: (e, t, n) => {
            function i(e) {
                return (0, n(381453).oE)(e.map(e => {
                    var t;
                    return null == (t = e.displayName || e.email) ? void 0 : t.trim()
                })).join(", ")
            }
            n.d(t, {
                j: () => S
            }), n(296540), n(944114), n(898992), n(354520), n(581454);
            var a = n(474848);
            let r = {
                moreButtonWrapper: {
                    color: n(632079).Tj.text.tertiary,
                    display: "block",
                    pointerEvents: "auto"
                }
            };

            function o(e) {
                let {
                    children: t,
                    maxLines: i
                } = e;
                return t ? (0, a.jsx)(n(18079).A, {
                    maxLines: i,
                    moreElement: (0, a.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        children: (0, a.jsxs)(n(428217).V, {
                            disableUnderline: !0,
                            style: r.moreButtonWrapper,
                            hoverColor: "blue",
                            children: ["…", " ", (0, a.jsx)("span", {
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "comment.truncated.showMoreLabel",
                                    defaultMessage: "more"
                                })
                            })]
                        })
                    }),
                    children: (0, a.jsx)(n(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "secondary",
                        children: t
                    })
                }) : null
            }

            function l(e) {
                let {
                    icon: t,
                    content: i,
                    maxLines: r = 1,
                    showAll: l = !1
                } = e;
                return (0, a.jsxs)(n(4458).fI, {
                    gap: 6,
                    children: [t, (0, a.jsx)(o, {
                        maxLines: l ? void 0 : r,
                        children: i
                    })]
                })
            }

            function s(e) {
                var t;
                let {
                    calendarEvent: r,
                    showAll: o = !1
                } = e, s = (t = null == r ? void 0 : r.attendees, (0, n(381453).My)((null == t ? void 0 : t.filter(e => !("isSelf" in e && e.isSelf) && !("responseStatus" in e && "declined" === e.responseStatus) && (e.email || e.displayName))) || [], [e => "isOrganizer" in e && e.isOrganizer ? 0 : 1, e => "responseStatus" in e && "accepted" === e.responseStatus ? 0 : "responseStatus" in e && "tentative" === e.responseStatus ? 1 : "responseStatus" in e && "needsAction" === e.responseStatus ? 2 : 3, e => +!!e.isOptional, e => +!e.displayName], ["asc", "asc", "asc", "asc"]));
                return null != s && s.length ? (0, a.jsx)(l, {
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: n(125040).personSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    content: i(s),
                    showAll: o
                }) : null
            }

            function d(e) {
                let {
                    status: t,
                    size: i = "sm"
                } = e;
                switch (t) {
                    case "accepted":
                        return (0, a.jsx)(n(16275).I, {
                            icon: n(574657).checkmarkCircleFillSmallIcon,
                            size: i,
                            colorPalette: "green",
                            colorVariant: "tertiary"
                        });
                    case "tentative":
                        return (0, a.jsx)(n(16275).I, {
                            icon: n(479491).questionMarkCircleFillSmallIcon,
                            size: i,
                            colorPalette: "yellow",
                            colorVariant: "tertiary"
                        });
                    case "declined":
                        return (0, a.jsx)(n(16275).I, {
                            icon: n(778765).xMarkCircleFillSmallIcon,
                            size: i,
                            colorPalette: "red",
                            colorVariant: "tertiary"
                        });
                    case "needsAction":
                        return (0, a.jsx)(n(16275).I, {
                            icon: n(855605).X,
                            size: i,
                            colorPalette: "gray",
                            colorVariant: "tertiary"
                        });
                    default:
                        (0, n(722371).HB)(t)
                }
            }
            let c = ["accepted", "tentative", "needsAction", "declined"];

            function u(e) {
                let {
                    calendarEvent: t,
                    includedStatuses: i = c,
                    showAll: r = !1
                } = e, {
                    attendees: o
                } = t;
                if (!(null != o && o.length)) return null;
                let l = function(e) {
                        let t = {
                            accepted: [],
                            tentative: [],
                            needsAction: [],
                            declined: []
                        };
                        if (!e) return t;
                        for (let n of e)(!("isSelf" in n) || !n.isSelf) && (n.email || n.displayName) && "responseStatus" in n && n.responseStatus && t[n.responseStatus].push(n);
                        return t
                    }(o),
                    s = i.filter(e => l[e].length > 0).map(e => (0, a.jsx)(m, {
                        status: e,
                        attendees: l[e],
                        showAll: r
                    }, e));
                return 0 === s.length ? null : (0, a.jsx)(n(4458).VP, {
                    gap: 4,
                    children: s
                })
            }

            function m(e) {
                let {
                    status: t,
                    attendees: n,
                    showAll: r
                } = e;
                return (0, a.jsx)(l, {
                    icon: (0, a.jsx)(d, {
                        status: t,
                        size: "sm"
                    }),
                    content: i(n),
                    showAll: r
                })
            }

            function f(e) {
                let {
                    calendarEvent: t,
                    showAll: i = !1
                } = e;
                return null != t && t.description ? (0, a.jsx)(l, {
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: n(389939).H,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    content: t.description,
                    maxLines: 2,
                    showAll: i
                }) : null
            }
            let p = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.92 1.57 10.16 13.1",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M8 4.436a2.345 2.345 0 1 0 0 4.69 2.345 2.345 0 0 0 0-4.69M6.905 6.781a1.095 1.095 0 1 1 2.19 0 1.095 1.095 0 0 1-2.19 0"
                        }), (0, a.jsx)("path", {
                            d: "M8 1.575a5.077 5.077 0 0 0-5.078 5.077v.103a5.18 5.18 0 0 0 1.09 3.177l3.494 4.501a.625.625 0 0 0 .987 0l3.496-4.5a5.18 5.18 0 0 0 1.088-3.178v-.103A5.077 5.077 0 0 0 8 1.575M4.172 6.652a3.827 3.827 0 0 1 7.655 0v.103a3.93 3.93 0 0 1-.826 2.41L8 13.032 4.998 9.166a3.93 3.93 0 0 1-.826-2.41z"
                        })]
                    })
                },
                h = (0, n(104509).wt)("mapPinSmall", p, "small");

            function T(e) {
                let {
                    calendarEvent: t,
                    showAll: i = !1
                } = e;
                return null != t && t.location ? (0, a.jsx)(l, {
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: h,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    content: t.location,
                    showAll: i
                }) : null
            }

            function y(e) {
                var t;
                let {
                    calendarEvent: i,
                    includeDuration: r = !1,
                    displayTimeZone: o
                } = e, l = (0, n(109939).tz)();
                if (!(null != i && i.period)) return null;
                let s = function(e) {
                    let {
                        period: t,
                        intl: i,
                        displayTimeZone: a
                    } = e, [r, o] = (() => {
                        if ("DATE" === t.type) return [n(906745).DateTime.fromISO(t.start.date), n(906745).DateTime.fromISO(t.end.date)];
                        let e = n(906745).DateTime.fromISO(t.start.dateTime),
                            i = n(906745).DateTime.fromISO(t.end.dateTime);
                        return a && (0, n(25825)._j)(a) ? [e.setZone(a), i.setZone(a)] : [e, i]
                    })();
                    if (!(r.isValid && o.isValid)) return;
                    let l = r.year === o.year,
                        s = r.toISODate() === o.toISODate();
                    return ("DATE" === t.type ? s ? [v({
                        dateTime: r,
                        intl: i
                    })] : [v({
                        dateTime: r,
                        intl: i,
                        noYear: l
                    }), v({
                        dateTime: o,
                        intl: i
                    })] : [g({
                        dateTime: r,
                        intl: i
                    }), g({
                        dateTime: o,
                        intl: i,
                        noYear: l,
                        noDate: s
                    })]).join(`${n(523144).iw}${n(523144).u3}${n(523144).iw}`).replaceAll(" ", n(523144).iw)
                }({
                    period: i.period,
                    intl: l,
                    displayTimeZone: o
                });
                if (!s) return null;
                let d = (0, a.jsx)(n(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: "secondary",
                    children: s
                });
                if (r && (null == (t = i.period) ? void 0 : t.type) === "DATE_TIME") {
                    let e = (0, n(360989).BM)(i.period);
                    if (e && 1 > e.length("days")) {
                        let t = (0, n(523144).zw)({
                            startTime: e.start,
                            endTime: e.end
                        });
                        return (0, a.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [d, (0, a.jsx)(n(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "tertiary",
                                children: t
                            })]
                        })
                    }
                }
                return d
            }

            function v(e) {
                let {
                    dateTime: t,
                    intl: i,
                    noYear: a
                } = e;
                return t.toLocaleString({ ...n(906745).DateTime.DATE_MED_WITH_WEEKDAY,
                    ...a || n(906745).DateTime.now().year === t.year ? {
                        year: void 0
                    } : void 0
                }, {
                    locale: i.locale
                })
            }

            function g(e) {
                let {
                    dateTime: t,
                    intl: i,
                    noYear: a,
                    noDate: r
                } = e, o = (0, n(523144).iI)(i.locale), l = 0 !== t.minute || !o;
                return t.toLocaleString({ ...r ? n(906745).DateTime.TIME_SIMPLE : n(906745).DateTime.DATE_MED_WITH_WEEKDAY,
                    ...a || n(906745).DateTime.now().year === t.year ? {
                        year: void 0
                    } : void 0,
                    hour: "numeric",
                    minute: l ? "2-digit" : void 0,
                    hour12: o
                }, {
                    locale: i.locale
                })
            }
            let x = ["period", "location", "description", "attendees"],
                D = {
                    position: "relative"
                };

            function S(e) {
                var t, i, r, o, l;
                let {
                    calendarEvent: d,
                    detailed: c,
                    includedSections: m = x,
                    displayTimeZone: p
                } = e, h = (0, n(619108).Mr)({
                    titleStartY: 0,
                    titleEndY: 0,
                    eventIndex: 0,
                    event: {
                        isAllDay: !1,
                        eventType: "eventType" in d ? d.eventType : void 0,
                        responseStatus: "responseStatus" in d ? d.responseStatus : void 0,
                        hasParticipants: !!(null == (t = d.attendees) ? void 0 : t.length),
                        color: void 0
                    },
                    calendarColor: {
                        type: "custom",
                        colorHexes: {
                            light: {
                                backgroundPrimary: ("colors" in d ? (null == (i = d.colors) ? void 0 : i.background) || (null == (r = d.colors) ? void 0 : r.foreground) : void 0) || n(632079).Tj.red.background.accentSecondary
                            },
                            dark: {
                                backgroundPrimary: ("colors" in d ? (null == (o = d.colors) ? void 0 : o.background) || (null == (l = d.colors) ? void 0 : l.foreground) : void 0) || n(632079).Tj.red.background.accentSecondary
                            }
                        }
                    }
                });
                return (0, a.jsxs)(n(4458).fI, {
                    gap: 10,
                    paddingBlock: 8,
                    paddingInline: 12,
                    style: {
                        position: "relative",
                        borderRadius: 10
                    },
                    alignItems: "center",
                    className: "autolayout-fill-width",
                    children: [(0, a.jsx)(n(4458).VP, {
                        style: { ...D,
                            ...h
                        },
                        alignSelf: "stretch",
                        children: null
                    }), (0, a.jsxs)(n(4458).VP, {
                        gap: 8,
                        paddingBlock: 4,
                        style: D,
                        flex: "1 1 0",
                        children: [(0, a.jsxs)(n(4458).VP, {
                            gap: 6,
                            children: [d.summary ? (0, a.jsx)(n(111010).D, {
                                styleKey: "bodyMedium",
                                children: d.summary
                            }) : void 0, m.includes("period") ? (0, a.jsx)(y, {
                                calendarEvent: d,
                                includeDuration: !0,
                                displayTimeZone: p
                            }) : void 0]
                        }), m.includes("attendees") ? (0, a.jsx)(s, {
                            calendarEvent: d,
                            showAll: c
                        }) : void 0, m.includes("attendeesRsvp") ? (0, a.jsx)(u, {
                            calendarEvent: d
                        }) : void 0, m.includes("location") ? (0, a.jsx)(T, {
                            calendarEvent: d,
                            showAll: c
                        }) : void 0, m.includes("description") ? (0, a.jsx)(f, {
                            calendarEvent: d
                        }) : void 0]
                    })]
                })
            }
        },
        619108: (e, t, n) => {
            n.d(t, {
                Mr: () => r,
                TN: () => o,
                l9: () => l
            });
            var i = n(296540),
                a = n(474848);

            function r(e) {
                let {
                    event: t,
                    eventIndex: i,
                    calendarColor: a,
                    titleStartY: r,
                    titleEndY: l
                } = e, s = (0, n(960253).e)(), d = (0, n(960253).I)(() => {
                    let e = {
                        background: n(632079).Tj.gray.background.accentSecondary
                    };
                    return {
                        container: {
                            width: 4,
                            borderRadius: 3,
                            ..."emptyTodayEventPlaceholder" === t ? e : function({
                                event: e,
                                eventIndex: t,
                                color: i,
                                titleStartY: a,
                                titleEndY: r
                            }) {
                                let l = o({
                                    event: e,
                                    color: i
                                });
                                if (!e.isAllDay) return l;
                                let s = `radial-gradient(
		circle 10px at ${-(n(991812).Hj-1.5)}px 5px,
		transparent 5.5px,
		purple 0
	)`;
                                return {
                                    borderRadius: "50%",
                                    marginTop: (r - a - 10) / 2,
                                    alignSelf: "flex-Start",
                                    marginInlineStart: -3,
                                    marginInlineEnd: -3,
                                    width: 10,
                                    height: 10,
                                    background: i,
                                    ...0 !== t && {
                                        WebkitMaskImage: s,
                                        maskImage: s
                                    },
                                    ...l
                                }
                            }({
                                event: t,
                                eventIndex: i,
                                color: (0, n(588727).Sk)({
                                    theme: n(632079).Tj,
                                    calendarColor: a,
                                    eventColor: t.color,
                                    themeMode: s
                                }),
                                titleStartY: r,
                                titleEndY: l
                            })
                        }
                    }
                }, [a, t, i, l, r, s]);
                if (a || "emptyTodayEventPlaceholder" === t) return d.container
            }

            function o({
                event: e,
                color: t
            }) {
                let i = (0, n(650342).X4)(t, e.isAllDay ? .2 : .1),
                    a = `
		repeating-linear-gradient(
			-45deg,
			${t},
			${t} 2px,
			${i} 2px,
			${i} ${e.isAllDay?3.5:4}px
		)`;
                if ("outOfOffice" === e.eventType) return {
                    background: i
                };
                switch (e.responseStatus) {
                    case "accepted":
                        return {
                            background: (0, n(964282).vZ)(e) ? a : t
                        };
                    case "tentative":
                        return {
                            background: a
                        };
                    case "needsAction":
                        return {
                            border: `1px dashed ${t}`,
                            background: i
                        };
                    case "declined":
                        return {
                            background: i
                        };
                    case void 0:
                        return {
                            background: e.hasParticipants ? i : t
                        };
                    default:
                        (0, n(722371).HB)(e.responseStatus)
                }
            }
            let l = i.memo(function({
                event: e,
                squashedEventIndex: t,
                titleStartY: i,
                titleEndY: o
            }) {
                let l = (0, n(682985).K8)(() => {
                        if ("emptyTodayEventPlaceholder" === e) return;
                        let t = (0, n(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: n(381453).n4
                    }),
                    s = r({
                        event: e,
                        eventIndex: t,
                        calendarColor: l,
                        titleStartY: i,
                        titleEndY: o
                    });
                return s ? (0, a.jsx)("div", {
                    style: s
                }) : null
            })
        },
        855605: (e, t, n) => {
            n.d(t, {
                X: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.875q-.201 0-.4.013a.625.625 0 1 0 .08 1.247 5 5 0 0 1 .64 0 .625.625 0 0 0 .08-1.247 6 6 0 0 0-.4-.013m-1.873.915a.625.625 0 0 0-.837-.284q-.36.179-.694.401a.625.625 0 1 0 .696 1.039q.264-.177.552-.32a.625.625 0 0 0 .283-.837m4.583-.283a.625.625 0 1 0-.554 1.12q.288.143.552.32a.625.625 0 1 0 .696-1.039 6 6 0 0 0-.694-.401m2.383 2.09a.625.625 0 0 0-1.039.696q.177.264.32.552a.625.625 0 1 0 1.12-.554 6 6 0 0 0-.401-.694m-9.319-.171a.625.625 0 0 0-.867.171 6 6 0 0 0-.401.694.625.625 0 1 0 1.12.554q.143-.288.32-.552a.625.625 0 0 0-.172-.867M2.552 7.016a.625.625 0 0 0-.664.584 6 6 0 0 0 0 .8.625.625 0 1 0 1.247-.08 5 5 0 0 1 0-.64.625.625 0 0 0-.583-.664m11.56.584a.625.625 0 1 0-1.247.08 5 5 0 0 1 0 .64.625.625 0 1 0 1.247.08 6 6 0 0 0 0-.8M3.626 10.156a.625.625 0 1 0-1.12.554q.179.36.401.694a.625.625 0 1 0 1.039-.696 5 5 0 0 1-.32-.552m9.584-.283a.625.625 0 0 0-.836.283 5 5 0 0 1-.32.552.625.625 0 1 0 1.039.696 6 6 0 0 0 .401-.694.625.625 0 0 0-.283-.837m-1.636 2.353a.625.625 0 0 0-.867-.172q-.264.177-.552.32a.625.625 0 1 0 .554 1.12 6 6 0 0 0 .694-.401.625.625 0 0 0 .171-.867m-6.283-.172a.625.625 0 1 0-.696 1.039q.333.222.694.401a.625.625 0 0 0 .554-1.12 5 5 0 0 1-.552-.32m2.388.811a.625.625 0 1 0-.08 1.247 6 6 0 0 0 .8 0 .625.625 0 1 0-.08-1.247 5 5 0 0 1-.64 0"
                    })
                },
                a = (0, n(104509).wt)("circleDottedSmall", i, "small")
        },
        964282: (e, t, n) => {
            function i(e) {
                let t = n(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    i = e.endUnixTimestampMS ? n(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    a = n(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    r = n(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    o = t.startOf("day"),
                    l = n(906745).DateTime.max(a, o),
                    s = Math.ceil(l.diff(a, "days").get("days")),
                    d = 1;
                if (i) {
                    let e = i.endOf("day");
                    d = Math.ceil(n(906745).DateTime.min(r, e).diff(l, "days").get("days"))
                }
                return {
                    start: t,
                    end: i,
                    startOfWeek: a,
                    endOfWeek: r,
                    startColumn: s,
                    columnCount: d
                }
            }

            function a(e) {
                let t = (e.attendees || []).filter(e => !e.self && !e.resource);
                return e.hasParticipants && t.length > 0 && t.every(e => "declined" === e.responseStatus)
            }
            n.d(t, {
                Gj: () => i,
                RN: () => d,
                sM: () => c,
                sR: () => l,
                vZ: () => a,
                xy: () => u,
                y6: () => s
            }), n(944114), n(898992), n(823215), n(354520), n(672577);
            let r = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                o = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                l = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function s(e) {
                let {
                    events: t,
                    accounts: i,
                    thresholds: a = r,
                    filters: o
                } = e, l = t.filter(e => {
                    if (!e.conferencing && !(null != o && o.includeEventsWithoutConferencing)) return !1;
                    let t = i.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, n(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === l.length) return [];
                let {
                    upcomingMinsThreshold: s,
                    startingMinsThreshold: d,
                    startedMinsThreshold: c
                } = a, u = n(906745).DateTime.now(), m = (null == o ? void 0 : o.maxDaysInFuture) !== void 0 ? o.maxDaysInFuture * n(695216).XQ : void 0, f = (null == o ? void 0 : o.maxDaysInPast) !== void 0 ? o.maxDaysInPast * n(695216).XQ : void 0, p = [], h = [], T = [], y = [], v = [], g = [];
                for (let e of l) {
                    if (e.isAllDay) continue;
                    let t = function(e) {
                            let t = n(906745).DateTime.fromISO(e.start.dateTime, {
                                    zone: e.start.timeZone
                                }),
                                i = n(906745).DateTime.fromISO(e.end.dateTime, {
                                    zone: e.end.timeZone
                                });
                            return n(906745).IX.fromDateTimes(t, i)
                        }(e),
                        i = u.diff(t.end, "minutes").minutes;
                    if (void 0 !== f && i > f) continue;
                    if (null != o && o.excludeEventsOnDifferentDays && u.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let a = t.start.diff(u, "minutes").minutes;
                    if (void 0 === m || !(a > m))
                        if (a >= 0 && a <= s) p.push(e);
                        else if (a < 0) {
                        let n = -a,
                            r = i >= 0 ? i : void 0;
                        n > 0 && n <= d ? T.push(e) : n > d && n <= c ? y.push(e) : t.contains(u) ? h.push(e) : void 0 !== f && void 0 !== r && r <= f && v.push(e)
                    } else g.push(e)
                }
                return h.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(i).toMillis()
                }), v.length > 1 && v.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(i).toMillis()
                }), [...p, ...T, ...y, ...null != o && o.excludeInProgressEvents ? [] : h, ...v, ...null != o && o.excludeUpcomingLaterEvents ? [] : g]
            }

            function d(e, t) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: r,
                    filters: void 0
                })[0]
            }

            function c(e, t, n) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: o,
                    filters: {
                        excludeUpcomingLaterEvents: !0,
                        ...n
                    }
                })
            }

            function u(e) {
                let {
                    spaceStore: t
                } = e, i = e.fileUrl;
                if (!t) return;
                let a = (0, n(132702).parseRoute)({
                        url: i,
                        isMobile: n(986939).A.isMobile,
                        baseUrl: n(986939).A.domainBaseUrl,
                        publicDomainName: n(986939).A.publicDomainName,
                        protocol: n(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                    }),
                    r = "page" === a.name ? a.blockId : void 0;
                if (!r) return;
                let o = n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: r
                });
                return o.load(), o
            }
        },
        991812: (e, t, n) => {
            n.d(t, {
                Hj: () => a,
                Lc: () => s,
                OZ: () => o,
                d_: () => l,
                rW: () => r,
                tM: () => d,
                uE: () => i
            });
            let i = 4,
                a = 2,
                r = 4,
                o = 20,
                l = 4,
                s = 6,
                d = 10
        }
    }
]);