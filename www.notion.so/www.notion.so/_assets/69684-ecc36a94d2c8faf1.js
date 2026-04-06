"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [69684], {
        457067: (e, t, n) => {
            function i(e) {
                return e.device.isPhone || "actionSheet" === e.tabletBehavior && e.device.isTablet ? {
                    menuType: n(649476).gu.ActionSheet
                } : {
                    menuType: n(649476).gu.Popup,
                    maxHeight: e.maxHeight,
                    maxWidth: e.maxWidth,
                    paddingTop: e.paddingTop,
                    paddingBottom: e.paddingBottom,
                    width: e.width,
                    minWidth: e.minWidth
                }
            }

            function r(e) {
                let t = (0, n(533992).Y0)();
                return (0, n(682985).K8)(() => i({
                    device: t,
                    maxHeight: null == e ? void 0 : e.maxHeight,
                    maxWidth: null == e ? void 0 : e.maxWidth,
                    paddingTop: null == e ? void 0 : e.paddingTop,
                    paddingBottom: null == e ? void 0 : e.paddingBottom,
                    width: null == e ? void 0 : e.width,
                    minWidth: null == e ? void 0 : e.minWidth,
                    tabletBehavior: null == e ? void 0 : e.tabletBehavior
                }), [t, null == e ? void 0 : e.maxHeight, null == e ? void 0 : e.maxWidth, null == e ? void 0 : e.paddingTop, null == e ? void 0 : e.paddingBottom, null == e ? void 0 : e.width, null == e ? void 0 : e.minWidth, null == e ? void 0 : e.tabletBehavior])
            }
            n.d(t, {
                e: () => r,
                v: () => i
            })
        },
        469684: (e, t, n) => {
            n.d(t, {
                $: () => eo
            });
            var i = n(296540);
            n(944114);
            var r = n(474848);

            function a(e) {
                let {
                    onChange: t,
                    currentValue: a,
                    extraValidation: s,
                    ...o
                } = e, [d, u] = (0, i.useState)(!1), [l, c] = (0, i.useState)((null == a ? void 0 : a.toString()) ? ? ""), y = e => !(0, n(722371).O9)(s) || s(e);
                return (0, r.jsx)(n(36481).p, {
                    errorOutline: d,
                    onKeyDown: e => {
                        if (("ArrowUp" === e.key || "ArrowDown" === e.key) && (e.preventDefault(), e.stopPropagation(), (0, n(722371).O9)(a))) {
                            let n = a + ("ArrowUp" === e.key ? 1 : -1);
                            y(n) && (t(n), c(n.toString()))
                        }
                    },
                    value: l,
                    onChange: e => {
                        let n = e.currentTarget.value;
                        if (c(n), "" === n) t(void 0), u(!1);
                        else {
                            let n = Number(e.currentTarget.value);
                            y(n) ? (t(n), u(!1)) : (t(void 0), u(!0))
                        }
                    },
                    ...o
                })
            }
            let s = (0, n(109939).YK)({
                never: {
                    id: "automations.RecurrenceEditor.endConditionMenu.never",
                    defaultMessage: "Never"
                },
                numberOfRuns: {
                    id: "automations.RecurrenceEditor.endConditionMenu.numberOfRuns",
                    defaultMessage: "Number of runs"
                },
                specificDate: {
                    id: "automations.RecurrenceEditor.endConditionMenu.specificDate",
                    defaultMessage: "Specific date"
                }
            });

            function o(e) {
                let {
                    currentValue: t,
                    onChange: a
                } = e, o = (0, n(457067).e)({
                    minWidth: 230
                }), d = (null == t ? void 0 : t.type) === "number" ? t.number_of_occurrences : void 0, [u, l] = (0, i.useState)(d ? ? 1), y = [{
                    key: "never",
                    items: [{
                        key: "never",
                        action: () => {
                            a(void 0)
                        },
                        render: e => (0, r.jsx)(n(95582).A, { ...e,
                            title: (0, r.jsx)(n(109939).sA, { ...s.never
                            }),
                            isChecked: void 0 === t
                        })
                    }]
                }, {
                    key: "number_of_occurrences",
                    items: [{
                        key: "number_of_occurrences",
                        action: () => {
                            a({
                                type: "number",
                                number_of_occurrences: u
                            })
                        },
                        render: e => (0, r.jsx)(c, { ...e,
                            currentNumber: d ? ? u,
                            onNumberChange: e => {
                                (0, n(722371).O9)(e) && (l(e), a({
                                    type: "number",
                                    number_of_occurrences: e
                                }))
                            },
                            selected: (null == t ? void 0 : t.type) === "number"
                        })
                    }],
                    render: e => (0, r.jsx)(n(844565).A, {
                        topBorder: !0,
                        ...e
                    })
                }, {
                    key: "date",
                    items: [{
                        key: "date",
                        action: () => {},
                        render: t => (0, r.jsx)(h, { ...t,
                            ...e
                        })
                    }],
                    render: e => (0, r.jsx)(n(844565).A, {
                        topBorder: !0,
                        ...e
                    })
                }];
                return (0, r.jsx)(n(747369).A, { ...o,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: y,
                        initialFocus: 0
                    })
                })
            }
            let d = {
                    maxWidth: 60
                },
                u = {
                    overflow: "visible"
                },
                l = {
                    position: "relative"
                },
                c = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentNumber: i,
                        onNumberChange: o,
                        selected: c,
                        ...y
                    } = e;
                    return (0, r.jsx)(n(95582).A, { ...y,
                        itemMarginRight: 4,
                        ref: t,
                        titleStyle: u,
                        title: (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            className: "autolayout-fill-width",
                            style: l,
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)(n(109939).sA, { ...s.numberOfRuns
                                })
                            }), c ? (0, r.jsx)(a, {
                                disabled: !c,
                                currentValue: i,
                                onChange: o,
                                extraValidation: n(832248).L$,
                                style: d,
                                maxlength: 3
                            }) : void 0]
                        }),
                        isChecked: c
                    })
                }),
                y = {
                    minWidth: "247px"
                },
                m = {
                    padding: "8px 0"
                },
                h = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: a,
                        onChange: o,
                        ...d
                    } = e, u = (0, i.useMemo)(() => n(906745).DateTime.now().plus({
                        weeks: 1
                    }).toMillis(), []), l = (0, n(109939).tz)(), c = (0, n(682985).O$)(n(97892).X), h = (null == a ? void 0 : a.type) === "date", f = h ? a.end_at : u, [p, x] = (0, i.useState)(h);
                    (0, i.useEffect)(() => {
                        !h && p && x(!1)
                    }, [h, p]);
                    let g = (0, i.useMemo)(() => (null == a ? void 0 : a.type) === "date" ? (0, n(832248).zs)(a, l) : void 0, [a, l]),
                        k = (0, i.useCallback)(e => {
                            o({
                                type: "date",
                                end_at: e
                            })
                        }, [o]),
                        b = (0, i.useMemo)(() => ({
                            before: new Date
                        }), []),
                        j = (0, i.useCallback)(() => {
                            o({
                                type: "date",
                                end_at: u
                            })
                        }, [o, u]),
                        w = p || h;
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(n(338798)._, { ...d,
                            title: (0, r.jsx)(n(109939).sA, { ...s.specificDate
                            }),
                            chevronType: w ? "down" : "right",
                            right: g,
                            onClick: j,
                            style: y
                        }), w ? (0, r.jsx)("div", {
                            style: m,
                            children: (0, r.jsx)(n(151012).A, {
                                firstDayOfWeek: c,
                                value: f,
                                onChange: k,
                                disabledDays: b
                            })
                        }) : void 0]
                    })
                });
            n(581454);
            let f = (0, n(109939).YK)({
                    hour: {
                        id: "automations.FrequencyMenu.hour",
                        defaultMessage: "{number, plural, one {Hour} other {Hours}}"
                    },
                    day: {
                        id: "automations.FrequencyMenu.day",
                        defaultMessage: "{number, plural, one {Day} other {Days}}"
                    },
                    week: {
                        id: "automations.FrequencyMenu.week",
                        defaultMessage: "{number, plural, one {Week} other {Weeks}}"
                    },
                    month: {
                        id: "automations.FrequencyMenu.month",
                        defaultMessage: "{number, plural, one {Month} other {Months}}"
                    },
                    year: {
                        id: "automations.FrequencyMenu.year",
                        defaultMessage: "{number, plural, one {Year} other {Years}}"
                    }
                }),
                p = {
                    hour: e => ({ ...f.hour,
                        values: {
                            number: e ? 2 : 1
                        }
                    }),
                    day: e => ({ ...f.day,
                        values: {
                            number: e ? 2 : 1
                        }
                    }),
                    week: e => ({ ...f.week,
                        values: {
                            number: e ? 2 : 1
                        }
                    }),
                    month: e => ({ ...f.month,
                        values: {
                            number: e ? 2 : 1
                        }
                    }),
                    year: e => ({ ...f.year,
                        values: {
                            number: e ? 2 : 1
                        }
                    })
                };

            function x(e) {
                let {
                    onSelect: t,
                    currentFrequency: i,
                    pluralLabels: a,
                    frequencies: s
                } = e, o = (0, n(457067).e)(), d = [{
                    key: "default",
                    items: s.map(e => {
                        let s = p[e];
                        return {
                            key: e,
                            action: () => {
                                t(e)
                            },
                            render: t => (0, r.jsx)(n(95582).A, { ...t,
                                title: (0, r.jsx)(n(109939).sA, { ...s(a)
                                }),
                                isChecked: i === e
                            })
                        }
                    })
                }];
                return (0, r.jsx)(n(747369).A, { ...o,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: d,
                        initialFocus: 0
                    })
                })
            }
            let g = (0, n(109939).YK)({
                    monthRestrictionLabel: {
                        id: "automations.MonthRestrictionMenuItem.monthRestrictionLabel",
                        defaultMessage: "On the"
                    },
                    last: {
                        id: "automations.MonthRestrictionMenuItem.last",
                        defaultMessage: "Last"
                    },
                    day: {
                        id: "automations.MonthRestrictionMenuItem.day",
                        defaultMessage: "Day"
                    }
                }),
                k = {
                    menuItem: { ...!n(986939).A.isMobile && {
                            paddingTop: 6,
                            paddingBottom: 8
                        }
                    },
                    positionRelative: {
                        position: "relative"
                    }
                },
                b = (0, i.forwardRef)(function(e, t) {
                    var a, s, o, d, u;
                    let l, c, y, {
                            initialValue: m,
                            onChange: h,
                            startDateForFallback: f,
                            ...p
                        } = e,
                        [x, b] = (o = (a = m, s = f, l = () => s ? {
                            type: "day",
                            dayNumber: n(906745).DateTime.fromMillis(s).day
                        } : A, a ? "monthdays" === a.type ? 1 !== a.monthdays.length ? l() : {
                            type: "day",
                            dayNumber: a.monthdays[0]
                        } : "weekdays_in_month" === a.type ? 1 !== a.week_numbers.length || 1 !== a.weekdays.length ? l() : {
                            type: "weekday",
                            weekday: a.weekdays[0],
                            weekNumber: -1 === a.week_numbers[0] ? "last" : a.week_numbers[0]
                        } : void(0, n(722371).HB)(a) : l()), (0, i.useReducer)((e, t) => {
                            if ("change_day" === t.type)
                                if ("day" === t.newDay)
                                    if ("day" === e.type) return e;
                                    else {
                                        if ("weekday" === e.type) return {
                                            type: "day",
                                            dayNumber: "last" === e.weekNumber ? 1 : Math.min(e.weekNumber, 4)
                                        };
                                        (0, n(722371).HB)(e)
                                    }
                            else {
                                if ("weekday" === e.type) return { ...e,
                                    weekday: t.newDay
                                };
                                if ("day" === e.type) return {
                                    type: "weekday",
                                    weekday: t.newDay,
                                    weekNumber: e.dayNumber > 4 ? "last" : e.dayNumber
                                };
                                (0, n(722371).HB)(e)
                            } else if ("change_number" === t.type)
                                if ("day" === e.type) return { ...e,
                                    dayNumber: "last" === t.newNumber ? 1 : t.newNumber
                                };
                                else {
                                    if ("weekday" === e.type) return { ...e,
                                        weekNumber: t.newNumber
                                    };
                                    (0, n(722371).HB)(e)
                                }
                            else(0, n(722371).HB)(t)
                        }, o));
                    return d = x, u = h, c = (0, i.useRef)(u), (0, i.useEffect)(() => {
                        c.current = u
                    }, [u]), y = (0, i.useRef)(!0), (0, i.useEffect)(() => {
                        var e;
                        if (y.current) {
                            y.current = !1;
                            return
                        }
                        c.current("day" === (e = d).type ? {
                            type: "monthdays",
                            monthdays: [e.dayNumber]
                        } : "weekday" === e.type ? {
                            type: "weekdays_in_month",
                            weekdays: [e.weekday],
                            week_numbers: ["last" === e.weekNumber ? -1 : e.weekNumber]
                        } : void(0, n(722371).HB)(e))
                    }, [d]), (0, r.jsx)(n(636518).Ay, { ...p,
                        ref: t,
                        style: k.menuItem,
                        title: (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            className: "autolayout-fill-width",
                            style: k.positionRelative,
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)(n(109939).sA, { ...g.monthRestrictionLabel
                                })
                            }), (0, r.jsx)(w, {
                                state: x,
                                dispatch: b
                            })]
                        })
                    })
                }),
                j = {
                    height: 28,
                    padding: "4px 8px"
                };

            function w(e) {
                let {
                    state: t,
                    dispatch: i
                } = e, a = (0, n(109939).tz)(), s = T(t), o = R(t), d = S("day" === o ? "d" : "n"), u = n(986939).A.isMobile ? n(656252).z.SlideUp : n(656252).z.Popup;
                return (0, r.jsxs)(n(4458).fI, {
                    gap: 6,
                    style: k.positionRelative,
                    children: [(0, r.jsx)(n(656252).A, {
                        popupType: u,
                        content: e => (0, r.jsx)(v, {
                            state: t,
                            onSelect: t => {
                                i({
                                    type: "change_number",
                                    newNumber: t
                                }), e.close()
                            }
                        }),
                        children: e => (0, r.jsx)(n(548436).A, {
                            size: "lg",
                            ...e,
                            iconTrailing: {
                                icon: n(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            style: j,
                            children: "last" === s ? (0, r.jsx)(n(109939).sA, { ...g.last
                            }) : d(s)
                        })
                    }), (0, r.jsx)(n(656252).A, {
                        popupType: u,
                        content: e => (0, r.jsx)(M, {
                            state: t,
                            onSelect: t => {
                                i({
                                    type: "change_day",
                                    newDay: t
                                }), e.close()
                            }
                        }),
                        children: e => (0, r.jsx)(n(548436).A, {
                            size: "lg",
                            ...e,
                            iconTrailing: {
                                icon: n(469102).arrowChevronSingleDownFillSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            style: j,
                            children: _(a, o)
                        })
                    })]
                })
            }

            function v(e) {
                let {
                    state: t,
                    onSelect: i
                } = e, a = (0, n(457067).e)({
                    maxHeight: 255
                }), s = S("day" === t.type ? "d" : "n"), o = T(t), d = "weekday" === t.type, u = n(381453).oE([{
                    key: "days",
                    items: n(381453).y1(1, ("day" === t.type ? 31 : "weekday" === t.type ? 4 : (0, n(722371).HB)(t)) + 1).map(e => ({
                        key: `day_${e}`,
                        action: () => i(e),
                        render: t => (0, r.jsx)(n(95582).A, { ...t,
                            title: s(e),
                            isChecked: o === e
                        })
                    }))
                }, d ? {
                    key: "last",
                    items: [{
                        key: "last",
                        action: () => i("last"),
                        render: e => (0, r.jsx)(n(95582).A, { ...e,
                            title: (0, r.jsx)(n(109939).sA, { ...g.last
                            }),
                            isChecked: "last" === o
                        })
                    }],
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        topBorder: !0
                    })
                } : void 0]);
                return (0, r.jsx)(n(747369).A, { ...a,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: u,
                        initialFocus: 0
                    })
                })
            }

            function M(e) {
                let {
                    state: t,
                    onSelect: i
                } = e, a = (0, n(109939).tz)(), s = (0, n(457067).e)(), o = R(t), d = [{
                    key: "day",
                    items: [{
                        key: "day",
                        action: () => i("day"),
                        render: e => (0, r.jsx)(n(95582).A, { ...e,
                            title: _(a, "day"),
                            isChecked: "day" === o
                        })
                    }]
                }, {
                    key: "weekdays",
                    items: (0, n(682985).K8)(() => 1 === n(97892).X.state ? ["MO", "TU", "WE", "TH", "FR", "SA", "SU"] : ["SU", "MO", "TU", "WE", "TH", "FR", "SA"], []).map(e => ({
                        key: `weekday_${e}`,
                        action: () => i(e),
                        render: t => (0, r.jsx)(n(95582).A, { ...t,
                            title: _(a, e),
                            isChecked: e === o
                        })
                    })),
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        topBorder: !0
                    })
                }];
                return (0, r.jsx)(n(747369).A, { ...s,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: d,
                        initialFocus: 0
                    })
                })
            }
            let A = {
                type: "day",
                dayNumber: 1
            };

            function T(e) {
                return "day" === e.type ? e.dayNumber : "weekday" === e.type ? e.weekNumber : void(0, n(722371).HB)(e)
            }

            function R(e) {
                return "day" === e.type ? "day" : "weekday" === e.type ? e.weekday : void(0, n(722371).HB)(e)
            }

            function S(e = "d") {
                let t = (0, n(109939).tz)().locale.substring(0, 2);
                return i => (0, n(392599).o)(t, i, e)
            }

            function _(e, t) {
                if ("day" === t) return e.formatMessage(g.day); {
                    let i = (0, n(722371).objectKeys)(n(832248).S7).indexOf(t) + 1;
                    return n(906745).DateTime.fromObject({
                        weekday: i
                    }).setLocale(e.locale).toLocaleString({
                        weekday: "long"
                    })
                }
            }
            n(898992), n(354520), n(430670);
            let C = (0, n(109939).YK)({
                    aroundMidnight: {
                        id: "automations.RecurTimeMenu.aroundMidnight",
                        defaultMessage: "Around midnight"
                    },
                    aroundMidnightCaption: {
                        id: "automations.RecurTimeMenu.aroundMidnightCaption",
                        defaultMessage: "12–3AM"
                    }
                }),
                O = {
                    style0: {
                        maxHeight: n(986939).A.isMobile ? "unset" : 250,
                        overflow: "scroll"
                    }
                };

            function W(e) {
                let {
                    currentRecurTime: t,
                    onRecurTimeSelected: i
                } = e, a = (0, n(109939).tz)(), s = (0, n(457067).e)(), o = [{
                    key: "default",
                    items: [...(0, n(83208).X)("automations_dev_tools") ? [function(e) {
                        let {
                            onRecurTimeSelected: t
                        } = e;
                        return {
                            key: "developer",
                            action: () => {
                                let e = B();
                                t({
                                    hour: e.hour,
                                    minute: e.minute
                                })
                            },
                            render: e => (0, r.jsx)(z, { ...e
                            })
                        }
                    }({
                        onRecurTimeSelected: i
                    })] : [], ...[{
                        type: "around_midnight"
                    }, ...n(381453).y1(0, 24).flatMap(e => n(381453).y1(0, 60, 15).map(t => ({
                        type: "hour_minute",
                        hour: e,
                        minute: t
                    }))).filter(({
                        hour: e,
                        minute: t
                    }) => 0 !== e && 1 !== e && 2 !== e && (3 !== e || 0 !== t))].map(e => {
                        if ("hour_minute" === e.type) {
                            let {
                                hour: s,
                                minute: o
                            } = e, d = new Date(2e3, 0, 1, s, o), u = 0 === o ? a.formatTime(d, {
                                hour: "numeric"
                            }) : a.formatTime(d, {
                                hour: "numeric",
                                minute: "2-digit"
                            }), l = (null == t ? void 0 : t.minute) === o && (null == t ? void 0 : t.hour) === s;
                            return {
                                key: `hour_minute-${s}-${o}`,
                                action: () => {
                                    i({
                                        hour: s,
                                        minute: o
                                    })
                                },
                                render: e => (0, r.jsx)(n(95582).A, { ...e,
                                    title: u,
                                    isChecked: l
                                })
                            }
                        }
                        if ("around_midnight" === e.type) {
                            let e = (0, n(832248).kn)(t);
                            return {
                                key: "around_midnight",
                                action: () => {
                                    i({
                                        hour: 0,
                                        minute: 0
                                    })
                                },
                                render: t => (0, r.jsx)(n(95582).A, { ...t,
                                    title: (0, r.jsx)(n(109939).sA, { ...C.aroundMidnight
                                    }),
                                    caption: (0, r.jsx)(n(109939).sA, { ...C.aroundMidnightCaption
                                    }),
                                    isChecked: e
                                })
                            }
                        }(0, n(722371).HB)(e)
                    })],
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        desktopStyle: O.style0
                    })
                }];
                return (0, r.jsx)(n(747369).A, { ...s,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: o,
                        initialFocus: 0
                    })
                })
            }

            function B() {
                let e = n(906745).DateTime.local(),
                    t = e.set({
                        second: 0,
                        millisecond: 0
                    }).plus({
                        minute: 1
                    });
                return t.diff(e, "seconds").seconds < 20 && (t = t.plus({
                    minute: 1
                })), t
            }
            let z = (0, i.forwardRef)(function(e, t) {
                let [a, s] = (0, i.useState)(() => B());
                return (0, n(216266).n)(() => {
                    s(B())
                }, 1e3, !0), (0, r.jsx)(n(95582).A, { ...e,
                    ref: t,
                    title: `[Dev] Run at ${a.toLocaleString(n(906745).DateTime.TIME_SIMPLE)}`
                })
            });

            function D(e) {
                return (0, n(722371).O9)(e.interval)
            }
            let E = (0, n(109939).YK)({
                    sunday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.sunday",
                        defaultMessage: "Su"
                    },
                    monday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.monday",
                        defaultMessage: "Mo"
                    },
                    tuesday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.tuesday",
                        defaultMessage: "Tu"
                    },
                    wednesday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.wednesday",
                        defaultMessage: "We"
                    },
                    thursday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.thursday",
                        defaultMessage: "Th"
                    },
                    friday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.friday",
                        defaultMessage: "Fr"
                    },
                    saturday: {
                        id: "automations.WeekdaySelector.weekdayAbbreviations.saturday",
                        defaultMessage: "Sa"
                    }
                }),
                q = {
                    SU: E.sunday,
                    MO: E.monday,
                    TU: E.tuesday,
                    WE: E.wednesday,
                    TH: E.thursday,
                    FR: E.friday,
                    SA: E.saturday
                };

            function N(e) {
                let {
                    weekdays: t,
                    onChange: i,
                    style: a,
                    disabled: s
                } = e, o = (0, n(109939).tz)();
                return (0, r.jsx)(n(4458).fI, {
                    className: "autolayout-fill-width",
                    style: {
                        position: "relative",
                        ...a
                    },
                    justifyContent: "space-between",
                    children: n(856662).U.map(e => (0, r.jsx)(I, {
                        isSelected: t.includes(e),
                        onClick: () => {
                            i(t.includes(e) ? t.length > 1 ? t.filter(t => t !== e) : t : [...t, e])
                        },
                        disabled: s,
                        children: o.formatMessage(q[e])
                    }, e))
                })
            }

            function I(e) {
                let {
                    isSelected: t,
                    children: i,
                    onClick: a,
                    disabled: s
                } = e, o = (0, n(960253).I)(() => ({
                    button: { ...n(986939).A.isMobile ? {
                            width: 44,
                            height: 44,
                            fontSize: 32
                        } : {
                            width: 28,
                            height: 28
                        },
                        color: t ? n(632079).oZ.white : n(632079).Tj.text.accentPrimary,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 100,
                        flexShrink: 0,
                        fontSize: n(418676).Kw,
                        background: t ? n(632079).Tj.blue.background.accentPrimary : n(632079).Tj.palette.gray[75]
                    },
                    pressed: {
                        background: t ? n(632079).Tj.blueButtonPressedBackground : n(632079).Tj.palette.gray[200]
                    },
                    hovered: {
                        background: t ? n(632079).Tj.blueButtonHoveredBackground : n(632079).Tj.palette.gray[100]
                    }
                }), [t]);
                return (0, r.jsx)(n(64960).Ay, {
                    disabled: s,
                    onClick: a,
                    style: o.button,
                    hoveredStyle: o.hovered,
                    pressedStyle: o.pressed,
                    children: i
                })
            }
            let F = (0, n(109939).YK)({
                    frequencyLabel: {
                        id: "automations.RecurrenceEditor.frequencyLabel",
                        defaultMessage: "Every"
                    },
                    recurTimeLabel: {
                        id: "automations.RecurrenceEditor.recurTimeLabel",
                        defaultMessage: "At"
                    },
                    startTimeLabel: {
                        id: "automations.RecurrenceEditor.startTimeLabel",
                        defaultMessage: "Starting"
                    },
                    endConditionLabel: {
                        id: "automations.RecurrenceEditor.endConditionLabel",
                        defaultMessage: "Ending"
                    },
                    deleteRecurrenceLabel: {
                        id: "automations.RecurrenceEditor.deleteRecurrenceLabel",
                        defaultMessage: "Stop duplicating"
                    },
                    timezone: {
                        id: "automations.RecurrenceEditor.timezone",
                        defaultMessage: "Timezone"
                    }
                }),
                H = {
                    disabledMessage: {
                        color: n(632079).Tj.text.secondary,
                        fontSize: n(418676).Kw
                    },
                    positionRelative: {
                        position: "relative"
                    }
                };

            function L(e) {
                let {
                    currentValue: t,
                    onDelete: i,
                    disabled: a,
                    allowExpiredRecurrence: s,
                    onSave: o,
                    disallowStart: d = !1,
                    disallowEnd: u = !1
                } = e, l = (0, n(109939).tz)(), c = (0, n(457067).e)({
                    minWidth: 260
                }), y = [];
                a && y.push({
                    key: "disabled_message",
                    items: [{
                        key: "disabled_message",
                        action: () => {},
                        render: e => (0, r.jsx)(n(636518).Ay, { ...e,
                            title: (0, r.jsx)("div", {
                                style: H.disabledMessage,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.noPermissionMessage",
                                    defaultMessage: "You do not have permission to edit this automation"
                                })
                            })
                        })
                    }]
                }), !a && (0, n(722371).O9)(o) && y.push({
                    key: "save_section",
                    items: [{
                        key: "save_item",
                        action: () => {},
                        render: e => (0, r.jsx)(V, { ...e,
                            onSave: o,
                            canSave: (0, n(722371).O9)(t.interval)
                        })
                    }]
                }), y.push({
                    key: "main",
                    items: (0, n(381453).oE)([{
                        key: "frequency",
                        action: () => {},
                        render: t => (0, r.jsx)(K, { ...t,
                            ...e,
                            hasSaveSection: (0, n(722371).O9)(o)
                        })
                    }, function(e) {
                        let {
                            currentValue: t
                        } = e;
                        if ("week" === t.frequency) return {
                            key: "weekday_selector",
                            action: () => {},
                            render: t => (0, r.jsx)(et, { ...t,
                                ...e
                            })
                        }
                    }(e), function(e) {
                        let {
                            currentValue: t,
                            onChange: n,
                            disabled: i
                        } = e;
                        if ("month" === t.frequency) return {
                            key: "month_restriction",
                            action: () => {},
                            render: e => (0, r.jsx)(b, { ...e,
                                initialValue: t.monthly_restriction,
                                startDateForFallback: t.start_date,
                                onChange: e => {
                                    n({ ...t,
                                        monthly_restriction: e
                                    })
                                },
                                disabled: i
                            })
                        }
                    }(e), "hour" === t.frequency ? void 0 : {
                        key: "recur_time",
                        action: () => {},
                        render: t => (0, r.jsx)(U, { ...t,
                            ...e
                        })
                    }]),
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        topBorder: a
                    })
                });
                let m = "hour" !== t.frequency;
                y.push({
                    key: "times",
                    items: [...d ? [] : [{
                        key: "start_time",
                        action: () => {},
                        render: t => (0, r.jsx)($, { ...t,
                            ...e
                        })
                    }], ...u ? [] : [{
                        key: "end_condition",
                        action: () => {},
                        render: t => (0, r.jsx)(en, { ...t,
                            ...e
                        })
                    }], ...m ? [{
                        key: "timezone",
                        action: () => {},
                        render: t => (0, r.jsx)(ei, { ...t,
                            ...e
                        })
                    }] : []],
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        topBorder: !0
                    })
                }), i && !a && y.push({
                    key: "delete",
                    items: [{
                        key: "delete",
                        action: () => {},
                        render: t => (0, r.jsx)(X, { ...t,
                            ...e,
                            onClick: i
                        })
                    }],
                    render: e => (0, r.jsx)(n(844565).A, { ...e,
                        topBorder: !0
                    })
                });
                let h = function(e) {
                    let {
                        recurrence: t,
                        intl: i,
                        allowExpiredRecurrence: a
                    } = e;
                    if (!D(t)) return {
                        key: "next_recurrence",
                        items: [{
                            key: "invalid_recurrence_config",
                            action: () => {},
                            render: e => (0, r.jsx)(G, { ...e,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.invalidRecurrenceConfig",
                                    defaultMessage: "Missing required fields"
                                })
                            })
                        }],
                        render: e => (0, r.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        })
                    };
                    let s = (0, n(832248).HE)({
                        recurrence: t,
                        intl: i
                    });
                    return s ? {
                        key: "next_recurrence",
                        items: [{
                            key: "next_recurrence",
                            action: () => {},
                            render: e => (0, r.jsx)(J, { ...e,
                                nextRecurrenceTime: s
                            })
                        }],
                        render: e => (0, r.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        })
                    } : a ? {
                        key: "expired_recurrence",
                        items: [{
                            key: "expired_recurrence",
                            action: () => {},
                            render: e => (0, r.jsx)(G, {
                                mode: "info",
                                ...e,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.automationComplete",
                                    defaultMessage: "This is complete and will not run again"
                                })
                            })
                        }],
                        render: e => (0, r.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        })
                    } : {
                        key: "next_recurrence",
                        items: [{
                            key: "next_recurrence",
                            action: () => {},
                            render: e => (0, r.jsx)(G, { ...e,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.automationWillNeverRun",
                                    defaultMessage: "This automation will never run"
                                })
                            })
                        }],
                        render: e => (0, r.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        })
                    }
                }({
                    recurrence: e.currentValue,
                    intl: l,
                    allowExpiredRecurrence: s
                });
                return h && y.push(h), (0, r.jsx)(n(519451).A, {
                    debugName: "RecurrenceEditor",
                    capture: !0,
                    allowEsc: !0,
                    children: (0, r.jsx)(n(747369).A, { ...c,
                        children: (0, r.jsx)(n(558045).A, {
                            disallowBackspace: !0,
                            type: n(558045).O.Vertical,
                            sections: y,
                            initialFocus: 0
                        })
                    })
                })
            }
            let P = {
                    menuItem: {
                        paddingTop: 2
                    },
                    message: {
                        color: n(632079).Tj.text.secondary,
                        fontSize: n(418676).Kw
                    },
                    button: {
                        fontSize: n(418676).Kw
                    }
                },
                V = (0, i.forwardRef)(function(e, t) {
                    let {
                        onSave: i,
                        canSave: a,
                        ...s
                    } = e;
                    return (0, r.jsx)(n(636518).Ay, { ...s,
                        ref: t,
                        style: P.menuItem,
                        title: (0, r.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            className: "autolayout-fill-width",
                            style: H.positionRelative,
                            children: [(0, r.jsx)("div", {
                                style: P.message,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.editCadenceTitle",
                                    defaultMessage: "Edit cadence"
                                })
                            }), (0, r.jsx)(n(988022).p, {
                                colorPalette: "blue",
                                size: "sm",
                                style: P.button,
                                disabled: !a || "disabled" === i,
                                disabledFeedback: !0,
                                onClick: "disabled" === i ? n(763230).lQ : i,
                                children: (0, r.jsx)(n(109939).sA, {
                                    id: "automations.RecurrenceEditor.saveButtonLabel",
                                    defaultMessage: "Save"
                                })
                            })]
                        })
                    })
                }),
                K = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: s,
                        onChange: o,
                        disabled: d,
                        hasSaveSection: u,
                        allowedFrequencies: l,
                        ...c
                    } = e, y = (0, n(960253).I)(() => ({
                        input: {
                            maxWidth: 34,
                            padding: "4px 8px",
                            opacity: d ? .5 : 1
                        },
                        button: {
                            justifyContent: "flex-end",
                            height: 28,
                            opacity: d ? .5 : 1,
                            padding: "4px 8px"
                        },
                        menuItem: { ...!n(986939).A.isMobile && {
                                paddingTop: 8 * !u,
                                paddingBottom: 2
                            }
                        }
                    }), [d, u]), m = (0, n(722371).O9)(s.interval) && 1 !== s.interval, h = (0, i.useMemo)(() => {
                        let e = l ? ? ["day", "week", "month", "year"];
                        return e.includes(s.frequency) ? e : [...e, s.frequency]
                    }, [l, s.frequency]), f = (0, i.useCallback)(e => {
                        s.frequency !== e && o({ ...s,
                            frequency: e,
                            ..."week" === e && 0 === (s.weekdays ? ? []).length ? {
                                weekdays: ["MO"]
                            } : {},
                            ..."month" === e ? {
                                monthly_restriction: {
                                    type: "monthdays",
                                    monthdays: [1]
                                }
                            } : {}
                        })
                    }, [s, o]);
                    return (0, r.jsx)(n(636518).Ay, { ...c,
                        ref: t,
                        title: (0, r.jsx)(n(109939).sA, { ...F.frequencyLabel
                        }),
                        style: y.menuItem,
                        disabled: d,
                        right: (0, r.jsxs)(n(4458).fI, {
                            gap: 6,
                            alignItems: "center",
                            justifyContent: "center",
                            style: H.positionRelative,
                            children: [(0, r.jsx)(a, {
                                style: y.input,
                                currentValue: s.interval,
                                onChange: e => {
                                    o({ ...s,
                                        interval: e
                                    })
                                },
                                extraValidation: n(832248).mB,
                                disabled: d,
                                maxlength: 2
                            }), (0, r.jsx)(n(656252).A, {
                                popupType: n(986939).A.isMobile ? n(656252).z.SlideUp : n(656252).z.Popup,
                                content: e => (0, r.jsx)(x, {
                                    currentFrequency: s.frequency,
                                    onSelect: t => {
                                        f(t), e.close()
                                    },
                                    frequencies: h,
                                    pluralLabels: m
                                }),
                                disabled: d,
                                children: e => (0, r.jsx)(n(548436).A, { ...e,
                                    size: "lg",
                                    style: y.button,
                                    disabled: d,
                                    iconTrailing: d ? void 0 : {
                                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                                        colorVariant: "secondary",
                                        size: "xs"
                                    },
                                    children: (0, r.jsx)(n(109939).sA, { ...p[s.frequency](m)
                                    })
                                })
                            })]
                        })
                    })
                }),
                U = (0, i.forwardRef)(function(e, t) {
                    let i, {
                            currentValue: a,
                            onChange: s,
                            disabled: o,
                            ...d
                        } = e,
                        u = (0, n(109939).tz)();
                    if ((0, n(722371).O9)(a.hour))
                        if ((0, n(832248).kn)(a)) i = u.formatMessage(C.aroundMidnight);
                        else {
                            let e = new Date(2e3, 0, 1, a.hour, a.minute ? ? 0);
                            i = (0, n(722371).O9)(a.minute) && 0 !== a.minute ? u.formatTime(e, {
                                hour: "numeric",
                                minute: "2-digit"
                            }) : u.formatTime(e, {
                                hour: "numeric"
                            })
                        }
                    return (0, r.jsx)(n(656252).A, {
                        disabled: o,
                        popupType: n(986939).A.isMobile ? n(656252).z.SlideUp : n(656252).z.Popup,
                        content: e => (0, r.jsx)(W, {
                            onRecurTimeSelected: t => {
                                s({ ...a,
                                    hour: t.hour,
                                    minute: t.minute
                                }), e.close()
                            },
                            currentRecurTime: {
                                hour: a.hour,
                                minute: a.minute
                            }
                        }),
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        children: e => (0, r.jsx)(n(338798)._, { ...d,
                            ...e,
                            right: i,
                            title: (0, r.jsx)(n(109939).sA, { ...F.recurTimeLabel
                            }),
                            chevronType: "right",
                            disabled: o
                        })
                    })
                }),
                Y = {
                    padding: "18px 14px 14px"
                },
                $ = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: i,
                        onChange: a,
                        disabled: s,
                        disallowStart: o = !1,
                        ...d
                    } = e, u = (0, n(109939).tz)(), l = (0, n(682985).O$)(n(97892).X), c = (0, n(850640).Yq)({
                        date: n(906745).DateTime.fromMillis(i.start_date),
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: u,
                        shortenDate: !0
                    });
                    return (0, r.jsx)(n(656252).A, {
                        disabled: s || o,
                        popupType: n(986939).A.isMobile ? n(656252).z.SlideUp : n(656252).z.Popup,
                        content: e => (0, r.jsx)("div", {
                            style: Y,
                            children: (0, r.jsx)(n(151012).A, {
                                firstDayOfWeek: l,
                                value: Math.max(i.start_date, Date.now()),
                                onChange: t => {
                                    a({ ...i,
                                        start_date: t
                                    }), e.close()
                                },
                                disabledDays: {
                                    before: new Date
                                }
                            })
                        }),
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        children: e => (0, r.jsx)(n(338798)._, { ...d,
                            ...e,
                            right: c,
                            title: (0, r.jsx)(n(109939).sA, { ...F.startTimeLabel
                            }),
                            chevronType: "right",
                            disabled: s || o
                        })
                    })
                }),
                Q = {
                    paddingBlock: 2
                },
                X = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: i,
                        ...a
                    } = e;
                    return (0, r.jsx)(n(95582).A, { ...a,
                        ref: t,
                        title: (0, r.jsx)(n(109939).sA, { ...F.deleteRecurrenceLabel
                        }),
                        style: Q,
                        isRedOnHover: !0
                    })
                }),
                G = (0, i.forwardRef)(function(e, t) {
                    let {
                        children: i,
                        mode: a = "error",
                        ...s
                    } = e, o = (0, n(960253).I)(() => ({
                        disabledMessage: {
                            color: "error" === a ? n(632079).Tj.red.text.accentPrimary : n(632079).Tj.text.secondary,
                            fontSize: n(418676).Kw
                        }
                    }), [a]);
                    return (0, r.jsx)(n(636518).Ay, { ...s,
                        ref: t,
                        title: (0, r.jsx)("div", {
                            style: o.disabledMessage,
                            children: i
                        })
                    })
                }),
                Z = {
                    menuItem: {
                        paddingBlock: 2
                    },
                    titleWrap: {
                        display: "flex",
                        ...n(986939).A.isMobile ? {
                            flexDirection: "row",
                            flexWrap: "wrap",
                            gap: 4
                        } : {
                            flexDirection: "column"
                        },
                        color: n(632079).Tj.text.secondary,
                        fontSize: n(418676).Kw
                    }
                },
                J = (0, i.forwardRef)(function(e, t) {
                    let {
                        nextRecurrenceTime: i,
                        ...a
                    } = e;
                    return (0, r.jsx)(n(636518).Ay, { ...a,
                        style: Z.menuItem,
                        title: (0, r.jsxs)("div", {
                            style: Z.titleWrap,
                            children: [(0, r.jsx)("div", {
                                children: (0, r.jsx)(n(109939).sA, {
                                    defaultMessage: "Next occurrence:",
                                    id: "automations.RecurrenceEditor.NextRecurrenceMenuItem.nextOccurrence"
                                })
                            }), (0, r.jsx)("div", {
                                children: i
                            })]
                        })
                    })
                }),
                ee = {
                    paddingTop: 8,
                    paddingBottom: 8
                },
                et = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: i,
                        onChange: a,
                        disabled: s,
                        ...o
                    } = e;
                    return (0, r.jsx)(n(636518).Ay, { ...o,
                        disabled: s,
                        style: ee,
                        shouldWrapTitle: !0,
                        title: (0, r.jsx)(N, {
                            weekdays: i.weekdays ? ? [],
                            onChange: e => {
                                a({ ...i,
                                    weekdays: e
                                })
                            },
                            disabled: s
                        })
                    })
                }),
                en = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: a,
                        onChange: s,
                        disabled: d,
                        ...u
                    } = e, l = (0, n(109939).tz)(), c = a.end_condition, y = (0, i.useCallback)(e => {
                        s({ ...a,
                            end_condition: e
                        })
                    }, [a, s]), m = (0, i.useMemo)(() => (0, n(832248).zs)(c, l), [c, l]);
                    return (0, r.jsx)(n(656252).A, {
                        disabled: d,
                        popupType: n(986939).A.isMobile ? n(656252).z.SlideUp : n(656252).z.Popup,
                        content: e => (0, r.jsx)(o, {
                            currentValue: c,
                            onChange: y
                        }),
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        children: e => (0, r.jsx)(n(338798)._, { ...u,
                            ...e,
                            right: m,
                            title: (0, r.jsx)(n(109939).sA, { ...F.endConditionLabel
                            }),
                            chevronType: "right",
                            disabled: d
                        })
                    })
                }),
                ei = (0, i.forwardRef)(function(e, t) {
                    let {
                        currentValue: a,
                        onChange: s,
                        disabled: o,
                        ...d
                    } = e, u = (0, i.useCallback)(e => {
                        s({ ...a,
                            timezone: e
                        })
                    }, [a, s]);
                    return (0, r.jsx)(n(130532).G, {
                        enableRecents: !0,
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        onSelect: u,
                        disabled: o,
                        currentValue: a.timezone,
                        children: e => (0, r.jsx)(n(338798)._, { ...d,
                            ...e,
                            title: (0, r.jsx)(n(109939).sA, { ...F.timezone
                            }),
                            chevronType: "right",
                            right: (0, n(25825).GF)(a.timezone),
                            disabled: o
                        })
                    })
                }),
                er = (0, n(109939).YK)({
                    day: {
                        id: "automations.RecurrencePresetMenu.day",
                        defaultMessage: "Day"
                    },
                    weekday: {
                        id: "automations.RecurrencePresetMenu.weekday",
                        defaultMessage: "Weekday"
                    },
                    week: {
                        id: "automations.RecurrencePresetMenu.week",
                        defaultMessage: "Week"
                    },
                    twoWeeks: {
                        id: "automations.RecurrencePresetMenu.twoWeeks",
                        defaultMessage: "2 Weeks"
                    },
                    month: {
                        id: "automations.RecurrencePresetMenu.month",
                        defaultMessage: "Month"
                    },
                    threeMonths: {
                        id: "automations.RecurrencePresetMenu.threeMonths",
                        defaultMessage: "3 Months"
                    },
                    sixMonths: {
                        id: "automations.RecurrencePresetMenu.sixMonths",
                        defaultMessage: "6 Months"
                    },
                    year: {
                        id: "automations.RecurrencePresetMenu.year",
                        defaultMessage: "Year"
                    }
                }),
                ea = {
                    day: er.day,
                    weekday: er.weekday,
                    week: er.week,
                    twoWeeks: er.twoWeeks,
                    month: er.month,
                    threeMonths: er.threeMonths,
                    sixMonths: er.sixMonths,
                    year: er.year
                };

            function es(e) {
                let {
                    onSelect: t
                } = e, i = (0, n(457067).e)(), a = [{
                    key: "default",
                    items: (0, n(722371).WP)(ea).map(([e]) => ({
                        key: e,
                        action: () => {
                            t(function(e) {
                                let t = (0, n(524242).QA)();
                                switch (e) {
                                    case "day":
                                        return { ...t,
                                            frequency: "day"
                                        };
                                    case "weekday":
                                        return { ...t,
                                            frequency: "week",
                                            weekdays: ["MO", "TU", "WE", "TH", "FR"]
                                        };
                                    case "week":
                                        return { ...t,
                                            frequency: "week",
                                            weekdays: ["MO"]
                                        };
                                    case "twoWeeks":
                                        return { ...t,
                                            frequency: "week",
                                            interval: 2,
                                            weekdays: ["MO"]
                                        };
                                    case "month":
                                        return { ...t,
                                            frequency: "month"
                                        };
                                    case "threeMonths":
                                        return { ...t,
                                            frequency: "month",
                                            interval: 3
                                        };
                                    case "sixMonths":
                                        return { ...t,
                                            frequency: "month",
                                            interval: 6
                                        };
                                    case "year":
                                        return { ...t,
                                            frequency: "year"
                                        };
                                    default:
                                        (0, n(722371).HB)(e)
                                }
                            }(e))
                        },
                        render: t => (0, r.jsx)(n(95582).A, { ...t,
                            title: (0, r.jsx)(n(109939).sA, { ...ea[e]
                            })
                        })
                    }))
                }];
                return (0, r.jsx)(n(747369).A, { ...i,
                    children: (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        sections: a,
                        initialFocus: 0
                    })
                })
            }

            function eo(e) {
                let {
                    recurrence: t,
                    onChange: a,
                    disabled: s,
                    autoFocusIfNew: o,
                    allowedFrequencies: d,
                    requireExplicitSaveAndAllowDelete: u,
                    buttonPopupStore: l,
                    disallowStart: c = !1,
                    disallowEnd: y = !1
                } = e, m = (0, n(682985).uB)(l, n(510969).A);
                (0, n(383953).l)(() => {
                    o && !t && setTimeout(() => {
                        m.setState({
                            open: !0
                        })
                    }, 150)
                });
                let [h, f] = (0, i.useState)(), p = (0, i.useMemo)(() => h || (t ? { ...(0, n(832248).LE)(t),
                    hour: t.hour ? ? 0,
                    minute: t.minute ? ? 0
                } : (0, n(524242).QA)()), [h, t]), [x, g] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    g(e => e || !!t)
                }, [t]);
                let k = (0, i.useCallback)(e => {
                        f(e), u || a(ed(e) ? e : void 0)
                    }, [a, u]),
                    b = (0, i.useCallback)(() => {
                        a(void 0), g(!1), m.setState({
                            open: !1
                        })
                    }, [a, m]),
                    j = (0, i.useCallback)(e => {
                        f(e), u || a(e), m.setState({
                            open: !1
                        }), setTimeout(() => {
                            g(!0), m.setState({
                                open: !0
                            })
                        }, 150)
                    }, [u, m, a]),
                    w = (0, i.useCallback)(() => {
                        f(void 0), g(!!t)
                    }, [t]),
                    v = (0, i.useCallback)(() => (!!t || !!h) && (!t || !ed(p) || !(0, n(832248).fF)(p, (0, n(832248).LE)(t))), [p, t, h]),
                    M = (0, i.useMemo)(() => {
                        if (u)
                            if (v() && ed(p)) return () => {
                                a(p), m.setState({
                                    open: !1
                                })
                            };
                            else return "disabled"
                    }, [m, p, v, a, u]);
                return {
                    content: (0, i.useCallback)(() => x || t ? (0, r.jsx)(L, {
                        currentValue: p,
                        onChange: k,
                        onDelete: u ? b : void 0,
                        onSave: M,
                        disabled: s,
                        allowedFrequencies: d,
                        disallowStart: c,
                        disallowEnd: y
                    }) : (0, r.jsx)(es, {
                        onSelect: j
                    }), [x, t, p, k, u, b, M, s, d, c, y, j]),
                    onClose: w,
                    buttonPopupStore: m,
                    hasUnpersistedChanges: v
                }
            }

            function ed(e) {
                return D(e) && void 0 !== (0, n(832248).QH)((0, n(832248).es)(e))
            }
        }
    }
]);