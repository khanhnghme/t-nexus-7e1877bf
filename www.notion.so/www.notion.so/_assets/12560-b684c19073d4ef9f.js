"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12560], {
        55821: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let a = {
                width: 240
            };

            function r(e) {
                let t = (0, n(109939).tz)(),
                    {
                        filterValue: r,
                        children: o,
                        buttonPopupStore: l
                    } = e,
                    s = e => "relative" === e.filter.type && "custom" === e.filter.value ? t.formatMessage(n(323700).IZ[e.filter.value]) : "date" === e.type ? (0, n(323700).RR)(e.filter) : (0, n(323700).kz)(e.filter);
                return (0, i.jsx)(n(656252).A, {
                    popupType: n(986939).A.isMobile ? n(182718).nl.SlideUp : n(182718).nl.Popup,
                    buttonPopupStore: l,
                    content: () => {
                        let t, a, o;
                        t = n(986939).A.isMobile ? {
                            menuType: n(649476).gu.ActionSheet
                        } : {
                            menuType: n(649476).gu.Popup
                        };
                        let d = "date" === e.type ? [...(a = n(910369).ty).filter(e => "relative" === e.type), ...a.filter(e => "exact" === e.type)].map(t => ({
                            key: "relative" === t.type ? t.value : t.type,
                            render: e => (0, i.jsx)(n(95582).A, { ...e,
                                title: s({
                                    type: "date",
                                    filter: t
                                }),
                                isChecked: t.type === r.type && (void 0 === t.value || t.value === r.value)
                            }),
                            action: () => {
                                e.onUpdate(t), l.setState({
                                    open: !1
                                })
                            }
                        })) : [...(o = n(910369).mP).filter(e => "relative" === e.type), ...o.filter(e => "exact" === e.type)].map(t => ({
                            key: (0, n(461249).q)(t),
                            render: e => (0, i.jsx)(n(95582).A, { ...e,
                                title: s({
                                    type: "daterange",
                                    filter: t
                                }),
                                isChecked: t.type === r.type && (void 0 === t.value || t.value === r.value)
                            }),
                            action: () => {
                                e.onUpdate(t), l.setState({
                                    open: !1
                                })
                            }
                        }));
                        return (0, i.jsx)(n(747369).A, { ...t,
                            children: (0, i.jsx)(n(558045).A, {
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "filterOperators",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        disableMobilePadding: !0,
                                        ...e
                                    }),
                                    items: d
                                }],
                                initialFocus: void 0
                            })
                        })
                    },
                    style: a,
                    originGap: 2,
                    placementToOrigin: "bottom",
                    alignmentToOrigin: "center",
                    disabled: e.disabled,
                    children: o
                })
            }
        },
        102870: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(898992), n(354520);
            var i = n(296540),
                a = n(474848);
            let r = (0, n(109939).YK)({
                    startingMessage: {
                        defaultMessage: "Starting",
                        id: "search.dateRangeMenu.startingMessage"
                    },
                    endingMessage: {
                        defaultMessage: "Ending",
                        id: "search.dateRangeMenu.endingMessage"
                    }
                }),
                o = function({
                    disableMenuWrap: e,
                    hideDateInputMenuItems: t,
                    value: i,
                    relativeRangePopupStore: r,
                    onUpdateRelativeFilter: o,
                    disabled: l,
                    allowRelativeRangeFilter: s,
                    onUpdate: d,
                    onDismiss: c,
                    title: p,
                    store: g,
                    maxDate: v,
                    minDate: f
                }) {
                    var h, m, x, b, S, D, k, A, C, j;
                    let M = (0, n(533992).v3)(),
                        w = (0, n(109939).tz)(),
                        T = (0, n(682985).uB)(g, n(560600).A);
                    return e ? (0, a.jsxs)(a.Fragment, {
                        children: [t ? void 0 : (0, a.jsx)(y, {
                            value: i,
                            relativeRangePopupStore: r,
                            onUpdateRelativeFilter: o,
                            disabled: l,
                            allowRelativeRangeFilter: s,
                            intl: w,
                            onUpdate: d,
                            onDismiss: c,
                            store: T
                        }), (0, a.jsx)(u, {
                            value: i,
                            onUpdate: d,
                            store: T,
                            maxDate: v,
                            minDate: f
                        })]
                    }) : (0, a.jsxs)(n(747369).A, { ...(h = p, m = i, x = w, b = d, S = T, D = c, k = r, A = o, C = l, j = s, n(986939).A.isMobile ? {
                            menuType: n(649476).gu.Modal,
                            title: h,
                            right: (0, a.jsx)(n(109939).sA, { ...n(789722).W.done
                            }),
                            onClickRight: D,
                            header: (0, a.jsx)(y, {
                                value: m,
                                relativeRangePopupStore: k,
                                onUpdateRelativeFilter: A,
                                disabled: C,
                                allowRelativeRangeFilter: j,
                                intl: x,
                                onUpdate: b,
                                onDismiss: D,
                                store: S
                            })
                        } : {
                            menuType: n(649476).gu.Popup,
                            onClickOutside: D
                        }),
                        children: [n(986939).A.isMobile || t ? void 0 : (0, a.jsx)(y, {
                            value: i,
                            relativeRangePopupStore: r,
                            onUpdateRelativeFilter: o,
                            disabled: l,
                            allowRelativeRangeFilter: s,
                            intl: w,
                            onUpdate: d,
                            onDismiss: c,
                            store: T
                        }), (0, a.jsx)(u, {
                            value: i,
                            onUpdate: d,
                            store: T,
                            maxDate: v,
                            minDate: f
                        })]
                    })
                };

            function l({
                events: e,
                onUpdateFilter: t,
                filter: i
            }) {
                return (0, a.jsx)(n(4458).fI, {
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: n(986939).A.isMobile ? "wrap" : void 0,
                    paddingInline: 16,
                    children: (0, a.jsx)(n(708797).i, {
                        onUpdate: t,
                        filter: i
                    })
                })
            }

            function s(e, t, i) {
                if ("type" in i) return {
                    value: {
                        starting: void 0,
                        ending: void 0
                    }
                };
                if (t.error) return t;
                let a = t.value && "date" !== t.value.type ? n(25825).fN(t.value) : t.value;
                var r = { ...i,
                    [e]: a
                };
                if (r.starting && r.ending) {
                    let e = n(25825).C6.notionDateToLuxon(r.starting);
                    return n(25825).C6.notionDateToLuxon(r.ending) >= e ? {
                        value: r
                    } : {
                        error: n(257193).$.INVALID_RANGE
                    }
                }
                return {
                    value: r
                }
            }
            let d = {
                container: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    paddingBottom: 8,
                    paddingTop: n(986939).A.isMobile ? 16 : 4,
                    ...n(986939).A.isMobile && {
                        background: n(632079).Tj.popoverBackground
                    }
                },
                label: {
                    paddingInlineStart: 8,
                    paddingInlineEnd: 8,
                    paddingBottom: 8,
                    paddingTop: n(986939).A.isMobile ? 8 : 4,
                    ...n(986939).A.isMobile && {
                        background: n(632079).Tj.popoverBackground
                    }
                }
            };

            function u({
                value: e,
                onUpdate: t,
                store: i,
                maxDate: r,
                minDate: o
            }) {
                let l = (0, n(682985).uB)(i, n(560600).A),
                    c = (0, n(682985).K8)(() => "type" in e ? function(e) {
                        var t, i;
                        if ("custom" === e.value) return function(e, t, i) {
                            let a = (0, n(400473).k0)(e, t, i, (0, n(714350).P)());
                            switch (e) {
                                case "past":
                                    return {
                                        starting: n(25825).lN(a),
                                        ending: n(25825).Ec((0, n(714350).P)())
                                    };
                                case "future":
                                    return {
                                        starting: n(25825).Ec((0, n(714350).P)()),
                                        ending: n(25825).lN(a)
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(e.direction, e.count, e.unit);
                        if ("surrounding" === e.value) return function(e) {
                            let {
                                start: t,
                                end: i
                            } = (0, n(400473).yM)(e, (0, n(714350).P)(), n(97892).X.state);
                            return {
                                starting: n(25825).lN(t),
                                ending: n(25825).lN(i)
                            }
                        }(e.unit);
                        switch (e.value) {
                            case "this_week":
                                return {
                                    starting: (t = (0, n(714350).P)(), {
                                        type: "date",
                                        start_date: n(25825).iB(Date.now(), n(25825).Lm(), t).toFormat(n(25825).tr)
                                    }),
                                    ending: (i = (0, n(714350).P)(), {
                                        type: "date",
                                        start_date: n(25825).hp(Date.now(), n(25825).Lm(), i).toFormat(n(25825).tr)
                                    })
                                };
                            case "the_past_month":
                                return {
                                    starting: n(25825).ZG((0, n(714350).P)()),
                                    ending: n(25825).Ec((0, n(714350).P)())
                                };
                            case "the_past_week":
                                return {
                                    starting: n(25825).t0((0, n(714350).P)()),
                                    ending: n(25825).Ec((0, n(714350).P)())
                                };
                            case "the_past_year":
                                return {
                                    starting: n(25825).Yz((0, n(714350).P)()),
                                    ending: n(25825).Ec((0, n(714350).P)())
                                };
                            case "the_next_month":
                                return {
                                    starting: n(25825).Ec((0, n(714350).P)()),
                                    ending: n(25825).wc((0, n(714350).P)())
                                };
                            case "the_next_week":
                                return {
                                    starting: n(25825).Ec((0, n(714350).P)()),
                                    ending: n(25825).En((0, n(714350).P)())
                                };
                            case "the_next_year":
                                return {
                                    starting: n(25825).Ec((0, n(714350).P)()),
                                    ending: n(25825).le((0, n(714350).P)())
                                };
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }(e) : e, [e]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(n(844565).A, {
                        disableMobileBorders: !0,
                        children: (0, a.jsx)("div", {
                            style: d.container,
                            children: (0, a.jsx)(n(803397).A, {
                                value: c,
                                store: l,
                                onUpdate: t,
                                validate: (t, n) => s(t, n, e),
                                readonly: "type" in e,
                                maxDate: r,
                                minDate: o
                            })
                        })
                    }), "type" in e ? (0, a.jsx)(n(844565).A, {
                        disableMobileBorders: !0,
                        topBorder: !0,
                        children: (0, a.jsx)("div", {
                            style: d.label,
                            children: (0, a.jsx)(n(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "collectionFilterMenu.dateRangeFilter.relativeDateRangeFilter.description",
                                    defaultMessage: "Filter will update with the current date"
                                })
                            })
                        })
                    }) : void 0]
                })
            }

            function c(e, t) {
                t.setState({ ...t.state,
                    focus: e
                })
            }
            let p = {
                    background: "transparent",
                    paddingInlineEnd: 0,
                    boxShadow: "none"
                },
                g = {
                    padding: 0,
                    borderRadius: 6
                };

            function v({
                events: e,
                value: t,
                disabled: o,
                allowRelativeRangeFilter: l,
                onUpdate: d,
                onDismiss: u,
                store: y
            }) {
                let f = (0, n(109939).tz)(),
                    h = (0, n(960253).I)(() => ({
                        inputTextWrapper: {
                            marginInlineStart: l && !n(986939).A.isMobile ? 2 : void 0
                        }
                    }), [l]),
                    m = (0, i.useCallback)((e, t) => {
                        (!t || !t.error) && y.setState({ ...y.state,
                            focus: "ending"
                        })
                    }, [y]),
                    x = (0, n(682985).K8)(() => y.getFocus(), [y]),
                    b = function(e, t) {
                        if (!("type" in e)) return {
                            earliestValidEnding: e.starting && (0, n(348582).Y)(e.starting, t, "YYYY-MM-DD"),
                            latestValidStarting: e.ending && (0, n(348582).Y)(e.ending, t, "YYYY-MM-DD")
                        }
                    }(t, f),
                    S = "type" in t ? {
                        starting: void 0,
                        ending: void 0
                    } : t;
                return (0, a.jsxs)("div", { ...e,
                    style: {
                        display: "flex",
                        flexDirection: l && !n(986939).A.isMobile ? "row" : "column",
                        alignItems: "center",
                        gap: 8,
                        paddingInlineEnd: 16,
                        paddingInlineStart: 16
                    },
                    children: [(0, a.jsx)(n(695760).A, {
                        disabled: o,
                        placeholder: n(986939).A.isMobile ? void 0 : f.formatMessage(r.startingMessage),
                        focused: "starting" === x,
                        value: S.starting,
                        validate: e => {
                            let n;
                            return (n = s("starting", e, t)).error ? n : {
                                value: n.value.starting
                            }
                        },
                        onUpdate: e => {
                            !e.error && d({
                                value: {
                                    starting: e.value
                                }
                            })
                        },
                        onFocus: () => c("starting", y),
                        onSubmit: m,
                        inputElementAttributes: b ? {
                            max: b.latestValidStarting
                        } : void 0,
                        desktopDateFormat: l ? "YYYY/MM/DD" : void 0,
                        style: g,
                        textWrapperStyle: h.inputTextWrapper,
                        inputOuterStyle: n(986939).A.isMobile ? p : void 0
                    }), (0, a.jsx)(n(695760).A, {
                        disabled: o,
                        placeholder: n(986939).A.isMobile ? void 0 : f.formatMessage(r.endingMessage),
                        focused: "ending" === x,
                        value: S.ending,
                        validate: e => {
                            let n;
                            return (n = s("ending", e, t)).error ? n : {
                                value: n.value.ending
                            }
                        },
                        onUpdate: e => {
                            !e.error && d({
                                value: {
                                    ending: e.value
                                }
                            })
                        },
                        onFocus: () => c("ending", y),
                        onSubmit: (e, t) => {
                            (!t || !t.error) && u && u(e)
                        },
                        inputElementAttributes: b ? {
                            min: b.earliestValidEnding
                        } : void 0,
                        desktopDateFormat: l ? "YYYY/MM/DD" : void 0,
                        style: g,
                        textWrapperStyle: h.inputTextWrapper,
                        inputOuterStyle: n(986939).A.isMobile ? p : void 0
                    })]
                })
            }

            function y({
                value: e,
                relativeRangePopupStore: t,
                onUpdateRelativeFilter: i,
                disabled: r,
                allowRelativeRangeFilter: o,
                intl: s,
                onUpdate: d,
                onDismiss: u,
                store: c
            }) {
                if (!t || !i) return (0, a.jsx)(v, {
                    value: e,
                    disabled: r,
                    allowRelativeRangeFilter: o,
                    onUpdate: d,
                    onDismiss: u,
                    store: c
                }); {
                    let s = "type" in e ? e : {
                        type: "exact",
                        value: void 0
                    };
                    return (0, a.jsx)(n(55821).A, {
                        type: "daterange",
                        filterValue: s,
                        onUpdate: i,
                        disabled: "exact" === s.type,
                        buttonPopupStore: t,
                        children: t => "exact" === s.type ? (0, a.jsx)(v, {
                            value: e,
                            disabled: r,
                            allowRelativeRangeFilter: o,
                            onUpdate: d,
                            onDismiss: u,
                            store: c,
                            events: t
                        }) : "relative" === s.type && ("surrounding" === s.value || "custom" === s.value) ? (0, a.jsx)(l, {
                            events: t,
                            onUpdateFilter: i,
                            filter: s
                        }) : void 0
                    })
                }
            }
        },
        160319: (e, t, n) => {
            n.d(t, {
                Ay: () => l,
                le: () => o,
                sA: () => r
            });
            var i = n(296540),
                a = n(474848);
            let r = "20px",
                o = {
                    Select: "Select",
                    Person: "Person",
                    Relation: "Relation",
                    FilterValue: "FilterValue",
                    Share: "Share",
                    Group: "Group",
                    Place: "Place"
                },
                l = i.forwardRef(function(e, t) {
                    let {
                        disabled: i,
                        value: r,
                        message: o,
                        right: l,
                        showClearButton: s,
                        format: d,
                        focus: u,
                        dontShowBorderBottom: c,
                        showBorder: p,
                        style: g,
                        onClick: v,
                        inputAndTokenWrapRightStyle: f,
                        tokens: h,
                        hideInput: m,
                        onRemoveLastToken: x,
                        onKeyDown: b,
                        onChange: S,
                        focusInitial: D,
                        focusAfterAnimation: k,
                        preventScrollOnFocus: A,
                        inputFullWidth: C,
                        inputDivStyle: j,
                        inputStyle: M,
                        rightWrapStyle: w,
                        tokenWrapStyle: T,
                        type: I,
                        placeholder: R,
                        onEmptySubmit: F,
                        onSubmit: E,
                        textarea: B,
                        autoComplete: P,
                        onClearButtonClick: W,
                        inputElementAttributes: O,
                        suppressFocusRing: _,
                        onFocus: U,
                        onBlur: L
                    } = e;
                    return (0, a.jsx)(n(369064).N, {
                        debugName: "TokenInputMenuItem",
                        capture: !i,
                        onLeft: n(763230).D_,
                        onRight: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: n(763230).D_,
                        onCopy: n(763230).D_,
                        onPaste: n(763230).D_,
                        onKeypress: n(763230).D_,
                        children: (0, a.jsx)(n(369064).N, {
                            debugName: "TokenInputMenuItem",
                            capture: !i && r.length > 0,
                            onDelete: n(763230).D_,
                            onBackspace: n(763230).D_,
                            children: (0, a.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    flex: 1,
                                    minWidth: 0,
                                    gap: o ? 4 : void 0
                                },
                                children: [(0, a.jsx)(y, {
                                    ref: t,
                                    right: l,
                                    showClearButton: s,
                                    format: d,
                                    focus: u,
                                    dontShowBorderBottom: c,
                                    disabled: i,
                                    showBorder: p,
                                    style: g,
                                    rightWrapStyle: w,
                                    onClick: v,
                                    inputAndTokenWrapRightStyle: f,
                                    tokens: h,
                                    hideInput: m,
                                    value: r,
                                    onRemoveLastToken: x,
                                    onKeyDown: b,
                                    onChange: S,
                                    focusInitial: D,
                                    focusAfterAnimation: k,
                                    preventScrollOnFocus: A,
                                    inputFullWidth: C,
                                    inputDivStyle: j,
                                    inputStyle: M,
                                    type: I,
                                    placeholder: R,
                                    onEmptySubmit: F,
                                    onSubmit: E,
                                    textarea: B,
                                    autoComplete: P,
                                    onClearButtonClick: W,
                                    inputElementAttributes: O,
                                    suppressFocusRing: _,
                                    onFocus: U,
                                    onBlur: L,
                                    tokenWrapStyle: T
                                }), o ? (0, a.jsx)(n(324489).V, {
                                    isSmall: !0,
                                    children: o
                                }) : void 0]
                            })
                        })
                    })
                });

            function s() {
                return {
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "flex-start"
                }
            }
            let d = {
                borderRadius: 4
            };

            function u() {
                return {
                    [o.Select]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.Person]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.Relation]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.Group]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.FilterValue]: {
                        desktopWrapStyleOverride: {
                            padding: "4px 6px",
                            boxShadow: `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                            background: n(632079).Tj.background.secondaryTranslucent
                        },
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.Place]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: d,
                        inputDivDesktopFocusStyle: {}
                    },
                    [o.Share]: {
                        desktopWrapStyleOverride: {},
                        inputDivDesktopStyle: {
                            marginTop: 0,
                            marginInlineEnd: 0,
                            marginBottom: 0,
                            marginInlineStart: 2,
                            borderStartStartRadius: 4,
                            borderStartEndRadius: 4
                        },
                        inputDivDesktopFocusStyle: {}
                    }
                }
            }
            let c = i.forwardRef(function({
                    tokens: e,
                    disabled: t,
                    value: o,
                    onRemoveLastToken: l,
                    onKeyDown: s,
                    onChange: d,
                    focus: c,
                    focusInitial: p,
                    focusAfterAnimation: g,
                    preventScrollOnFocus: v,
                    format: y,
                    inputFullWidth: f,
                    inputDivStyle: h,
                    inputStyle: m,
                    type: x,
                    placeholder: b,
                    onEmptySubmit: S,
                    onSubmit: D,
                    textarea: k,
                    autoComplete: A,
                    setIsFocused: C,
                    onFocus: j,
                    onBlur: M,
                    inputElementAttributes: w,
                    suppressFocusRing: T
                }, I) {
                    var R, F, E;
                    let B = (0, i.useCallback)(e => {
                            "Backspace" === e.key && 0 === o.length && l(), s && s(e)
                        }, [o, l, s]),
                        P = (0, i.useCallback)(e => {
                            0 === o.length && S && S(), D && D(e)
                        }, [o, S, D]),
                        W = (0, i.useCallback)(() => {
                            C(!1), null == M || M()
                        }, [C, M]),
                        O = (0, i.useCallback)(() => {
                            C(!0), null == j || j()
                        }, [C, j]),
                        _ = 0 === e.length;
                    return (0, a.jsx)(n(36481).p, {
                        disabled: t,
                        format: "transparent",
                        onKeyDown: B,
                        onChange: d,
                        value: o,
                        focus: c,
                        focusInitial: p,
                        focusAfterAnimation: g,
                        preventScrollOnFocus: v,
                        style: (R = y, F = f, E = h, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: F ? "100%" : 60,
                            minWidth: 60,
                            width: "auto",
                            lineHeight: r,
                            ...n(986939).A.isMobile ? {
                                margin: "0 8px 0 0"
                            } : u()[R].inputDivDesktopStyle,
                            ...E
                        }),
                        inputStyle: m || {
                            height: n(986939).A.isMobile ? 24 : 20
                        },
                        size: 1,
                        ref: I,
                        type: x,
                        placeholder: _ ? b : "",
                        onSubmit: P,
                        onFocus: O,
                        onBlur: W,
                        textarea: k,
                        autoComplete: A,
                        inputElementAttributes: w,
                        suppressFocusRing: T
                    })
                }),
                p = {
                    flexWrap: "nowrap"
                },
                g = {
                    display: "flex",
                    flexWrap: "wrap",
                    flexGrow: 1,
                    minWidth: 0
                },
                v = {
                    flexShrink: 0
                },
                y = i.forwardRef(function(e, t) {
                    let {
                        right: r,
                        showClearButton: l,
                        format: d,
                        focus: y,
                        dontShowBorderBottom: f,
                        disabled: m,
                        showBorder: x,
                        style: b,
                        onClick: S,
                        inputAndTokenWrapRightStyle: D,
                        tokenWrapStyle: k,
                        tokens: A,
                        hideInput: C,
                        value: j,
                        onRemoveLastToken: M,
                        onKeyDown: w,
                        onChange: T,
                        focusInitial: I,
                        focusAfterAnimation: R,
                        preventScrollOnFocus: F,
                        inputFullWidth: E,
                        inputDivStyle: B,
                        inputStyle: P,
                        rightWrapStyle: W,
                        type: O,
                        placeholder: _,
                        onEmptySubmit: U,
                        onSubmit: L,
                        textarea: z,
                        autoComplete: Y,
                        onClearButtonClick: V,
                        onFocus: G,
                        onBlur: N,
                        inputElementAttributes: K,
                        suppressFocusRing: J
                    } = e, Q = (0, n(533992).v3)(), $ = (0, i.useContext)(n(649476).xu), [H, Z] = (0, i.useState)(!1), [q, X] = (0, i.useState)(() => !!(y || I));
                    (0, i.useEffect)(() => {
                        F && Z(!0)
                    }, [F]), (0, i.useEffect)(() => {
                        void 0 !== y && X(y)
                    }, [y]);
                    let ee = (0, i.useRef)(null),
                        [et, en] = (0, n(768397).s)(),
                        ei = (0, n(421573).A)(t, ee, et),
                        ea = (0, i.useCallback)(() => {
                            if (!m) {
                                var e;
                                null == (e = ee.current) || e.focus(), null == S || S()
                            }
                        }, [m, S, ee]),
                        er = function({
                            environment: e,
                            format: t,
                            focus: i,
                            dontShowBorderBottom: a,
                            disabled: r,
                            showBorder: o,
                            menuContext: l,
                            showFocusRing: d
                        }) {
                            return (0, n(682985).K8)(() => {
                                let e = u()[t];
                                return n(986939).A.isMobile ? { ...{ ...s(),
                                        flexShrink: 0,
                                        minHeight: 44,
                                        borderBottom: `1px solid ${n(632079).Tj.border.secondaryTranslucent}`,
                                        fontSize: n(986939).A.isMobile ? 17 : 16,
                                        background: n(632079).Tj.popoverBackground
                                    },
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    paddingInlineStart: (null == l ? void 0 : l.menuType) !== n(649476).gu.Popup ? (0, n(616844).Y5)("left", 16) : 16,
                                    paddingInlineEnd: (null == l ? void 0 : l.menuType) !== n(649476).gu.Popup ? (0, n(616844).Y5)("right", 16) : 16,
                                    ...a && {
                                        borderBottom: "none"
                                    }
                                } : { ...{ ...s(),
                                        background: r ? "none" : n(632079).Tj.tokenInputMenuItemBackground,
                                        cursor: "text",
                                        overflow: "hidden",
                                        fontSize: 14,
                                        minHeight: 28,
                                        padding: 4,
                                        borderRadius: 6
                                    },
                                    ...e.desktopWrapStyleOverride,
                                    ...o && {
                                        boxShadow: "rgba(15, 15, 15, 0.1) 0px 0px 0px 1px inset"
                                    },
                                    ...o && i && {
                                        boxShadow: n(632079).Tj.inputBlueFocusRing
                                    },
                                    ...i && e.inputDivDesktopFocusStyle,
                                    ...d && {
                                        boxShadow: n(632079).Tj.buttonBlueFocusRing
                                    }
                                }
                            }, [r, a, i, t, null == l ? void 0 : l.menuType, o, d])
                        }({
                            environment: Q,
                            format: d,
                            focus: y,
                            dontShowBorderBottom: f,
                            disabled: m,
                            showBorder: x,
                            menuContext: $,
                            showFocusRing: (null == K ? void 0 : K.role) === "combobox" && en && !J
                        }),
                        {
                            inputElementAttributes: eo,
                            wrapperElementAttributes: el
                        } = (0, i.useMemo)(() => {
                            if ((null == K ? void 0 : K.role) === "combobox") {
                                let {
                                    role: e,
                                    "aria-expanded": t,
                                    "aria-haspopup": n,
                                    "aria-controls": i,
                                    "aria-orientation": a,
                                    ...r
                                } = K;
                                return {
                                    inputElementAttributes: r,
                                    wrapperElementAttributes: {
                                        role: e,
                                        "aria-expanded": t,
                                        "aria-haspopup": n,
                                        "aria-controls": i,
                                        "aria-orientation": a
                                    }
                                }
                            }
                            return {
                                inputElementAttributes: K,
                                wrapperElementAttributes: {}
                            }
                        }, [K]);
                    return n(986939).A.isMobile && !(r || l) ? (0, a.jsxs)("div", {
                        style: { ...er,
                            ...p,
                            ...b
                        },
                        onClick: ea,
                        tabIndex: -1,
                        role: "none",
                        ...el,
                        children: [(0, a.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                flexGrow: 1,
                                minWidth: 0,
                                gap: 6,
                                overflow: "hidden",
                                marginInlineEnd: 6 * (d === o.Group)
                            },
                            children: [A, C ? void 0 : (0, a.jsx)(c, {
                                ref: ei,
                                tokens: A,
                                disabled: m,
                                value: j,
                                onRemoveLastToken: M,
                                onKeyDown: w,
                                onChange: T,
                                focus: y,
                                focusInitial: I,
                                focusAfterAnimation: R,
                                format: d,
                                inputFullWidth: E,
                                inputDivStyle: B,
                                inputStyle: P,
                                type: O,
                                placeholder: _,
                                onEmptySubmit: U,
                                onSubmit: L,
                                textarea: z,
                                autoComplete: Y,
                                setIsFocused: X,
                                onFocus: G,
                                onBlur: N,
                                inputElementAttributes: eo,
                                suppressFocusRing: J
                            })]
                        }), (0, a.jsx)(n(368678).P, {
                            show: q
                        })]
                    }) : (0, a.jsxs)(n(136508)._, {
                        type: n(644154).A.All,
                        style: { ...er,
                            ...p,
                            ...b
                        },
                        onClick: ea,
                        ...el,
                        children: [(0, a.jsxs)("div", {
                            style: { ...g,
                                ...k,
                                ...r || l ? D : null
                            },
                            children: [A, C ? void 0 : (0, a.jsx)(c, {
                                ref: ei,
                                tokens: A,
                                disabled: m,
                                value: j,
                                onRemoveLastToken: M,
                                onKeyDown: w,
                                onChange: T,
                                focus: y,
                                focusInitial: I,
                                focusAfterAnimation: R,
                                preventScrollOnFocus: H,
                                format: d,
                                inputFullWidth: E,
                                inputDivStyle: B,
                                inputStyle: P,
                                type: O,
                                placeholder: _,
                                onEmptySubmit: U,
                                onSubmit: L,
                                textarea: z,
                                autoComplete: Y,
                                setIsFocused: X,
                                onFocus: G,
                                onBlur: N,
                                inputElementAttributes: eo,
                                suppressFocusRing: J
                            })]
                        }), r || l ? (0, a.jsx)("div", {
                            style: { ...v,
                                ...W
                            },
                            children: (0, a.jsx)(h, {
                                showClearButton: l,
                                right: r,
                                onClearButtonClick: V,
                                tokens: A,
                                value: j
                            })
                        }) : null]
                    })
                }),
                f = {
                    style0: {
                        flexShrink: 0,
                        flexGrow: 0,
                        borderRadius: n(986939).A.isMobile ? 24 : 20,
                        marginTop: 2 * !n(986939).A.isMobile
                    }
                };

            function h({
                showClearButton: e,
                right: t,
                onClearButtonClick: i,
                tokens: r,
                value: o
            }) {
                let l = (0, n(109939).tz)();
                return t ? (0, a.jsx)(a.Fragment, {
                    children: t
                }) : e && (r.length > 0 || o.length > 0) ? (0, a.jsx)(n(64960).Ay, {
                    "aria-label": l.formatMessage({
                        id: "tokenInputMenuItem.clearButton",
                        defaultMessage: "Clear"
                    }),
                    onClick: i,
                    style: f.style0,
                    children: (0, a.jsx)(n(16275).I, {
                        icon: n(778765).xMarkCircleFillSmallIcon,
                        size: n(986939).A.isMobile ? "default" : "sm",
                        colorVariant: "tertiary"
                    })
                }) : null
            }
        },
        332082: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    style0: {
                        opacity: .5
                    },
                    style1: {
                        marginInlineEnd: 0,
                        maxWidth: "100%",
                        justifyContent: "space-between"
                    },
                    style2: {
                        color: n(632079).oZ.uiGray
                    },
                    style3: {
                        marginInlineEnd: 8,
                        maxWidth: 180,
                        padding: "0 8px"
                    }
                },
                r = function({
                    title: e,
                    disabled: t,
                    innerStyle: r,
                    placeholder: o,
                    onClick: l,
                    disableMargins: s,
                    desktopStyle: d
                }) {
                    let u = (0, n(960253).e)(),
                        c = !!e,
                        p = (0, n(960253).I)(() => ({
                            title: {
                                display: "flex",
                                alignItems: "center",
                                ...n(986939).A.isMobile && {
                                    marginInlineStart: 32
                                },
                                ...r
                            }
                        }), [r]);
                    if (n(986939).A.isMobile) return (0, i.jsx)(n(95582).A, {
                        showExtensionArrow: !t,
                        focused: !1,
                        title: c ? (0, i.jsx)("div", {
                            style: p.title,
                            children: e
                        }) : (0, i.jsx)("div", {
                            style: { ...p.title,
                                ...a.style2
                            },
                            children: o
                        }),
                        onClick: l
                    }); {
                        let p = "dark" === u ? n(632079).Tj.text.tertiary : n(632079).Tj.text.secondary;
                        return (0, i.jsx)(n(438431).H, {
                            action: () => {
                                var e;
                                (e = l) && e()
                            },
                            disabled: t,
                            render: l => (0, i.jsx)(n(548436).A, { ...l,
                                hovered: l.focused,
                                size: "lg",
                                hasSolidBackground: !0,
                                style: { ...a.style3,
                                    ...l.disabled && a.style0,
                                    ...s && a.style1,
                                    ...d
                                },
                                iconTrailing: t ? void 0 : {
                                    icon: n(595453).arrowChevronSingleDownSmallIcon,
                                    colorVariant: "tertiary",
                                    size: "xs"
                                },
                                children: (0, i.jsx)("div", {
                                    style: {
                                        display: "flex",
                                        minWidth: 0,
                                        color: c ? n(632079).Tj.text.primary : p,
                                        ...r
                                    },
                                    children: c ? e : o
                                })
                            })
                        })
                    }
                }
        },
        438431: (e, t, n) => {
            n.d(t, {
                H: () => v,
                i: () => p
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454);
            var i = n(296540),
                a = n(440961),
                r = n(474848);
            let o = i.createContext(void 0);
            o.displayName = "DynamicMenuContext";
            let l = {
                    x: 0,
                    y: -1
                },
                s = {
                    x: 0,
                    y: 1
                },
                d = {
                    x: -1,
                    y: 0
                },
                u = {
                    x: 1,
                    y: 0
                },
                c = n(546605).Store.createValue(void 0);

            function p(e) {
                let t = e.debug,
                    a = (0, i.useRef)(void 0),
                    p = (0, i.useRef)(new Set),
                    g = (0, n(682985).uB)(c),
                    v = (0, i.useCallback)(() => Array.from(p.current), []),
                    f = (0, i.useCallback)(() => v().map(e => ({
                        entry: e,
                        element: e.getDomElement()
                    })).filter(({
                        element: e
                    }) => void 0 !== e).sort((e, t) => (0, n(771105).A)(e.element, t.element)).map(({
                        entry: e
                    }) => e), [v]),
                    m = (0, i.useCallback)(e => {
                        p.current.add(e)
                    }, []),
                    x = (0, i.useCallback)((e, t) => {
                        e && !p.current.has(e) || e === g.state || e && e.disabled || (g.setState(e), a.current = t)
                    }, [g]),
                    b = (0, i.useCallback)(e => {
                        let t = g.state,
                            n = f(),
                            i = t ? n.indexOf(t) : -1,
                            a = e > 0 ? n.length : -1;
                        for (let t = i + e; e > 0 ? t < a : t > a; t += e) {
                            let e = n[t];
                            if (e && !e.disabled) return e
                        }
                    }, [g, f]),
                    S = (0, i.useCallback)((e, t) => {
                        let n = b(e);
                        if (n) return null == t || t.preventDefault(), x(n, void 0), n
                    }, [b, x]),
                    D = (0, i.useCallback)((e, i) => {
                        let r, o = g.state,
                            l = a.current,
                            s = v().filter(e => !e.disabled);
                        if (0 === s.length) return;
                        i && i.preventDefault && i.preventDefault();
                        let d = o && o.getRect();
                        if (!d) return S(e.x * e.y > 0 ? 1 : -1, void 0) || S(1, void 0);
                        let u = s.map(e => ({
                            entry: e,
                            rect: e.getRect()
                        })).filter(e => void 0 !== e.rect && e.entry !== o);
                        if (0 === e.x && void 0 !== l && l.left > d.left) {
                            let i = d.top - l.top,
                                a = new(n(195304)).z8({
                                    x: l.left,
                                    y: l.top + i,
                                    width: l.width,
                                    height: d.height
                                });
                            a.height = d.height, h("maxLeftRect", a, "orange", t), (r = y(a, e, u, t)) && h("found from maxLeft", r.rect, "yellow", t)
                        }!r && (r = y(d, e, u, t)) && h("found from originRect", r.rect, "yellow", t);
                        let c = 0 !== e.x || void 0 === l;
                        if (r) {
                            let e = r.rect;
                            return x(r.entry, c ? e : l), r.entry
                        }
                        c && (a.current = d)
                    }, [t, g, v, x, S]),
                    k = (0, i.useCallback)(e => {
                        let t = g.state;
                        if (p.current.delete(e), e === t) {
                            if (D({
                                    x: -1,
                                    y: -1
                                }, void 0)) return;
                            x(void 0, void 0)
                        }
                    }, [g, x, D]),
                    A = (0, i.useCallback)(e => {
                        let t = g.state;
                        t && t.onAction(e, void 0)
                    }, [g]),
                    C = (0, i.useCallback)(() => {
                        var t;
                        g.state ? x(void 0, void 0) : (t = e.onClose) && t()
                    }, [g, x, e.onClose]),
                    j = (0, i.useCallback)(() => {
                        x(void 0, void 0)
                    }, [x]),
                    M = (0, i.useCallback)(e => D(l, e), [D]),
                    w = (0, i.useCallback)(e => D(u, e), [D]),
                    T = (0, i.useCallback)(e => D(s, e), [D]),
                    I = (0, i.useCallback)(e => D(d, e), [D]),
                    R = (0, i.useCallback)(e => S(1, e), [S]),
                    F = (0, i.useCallback)(e => S(-1, e), [S]),
                    E = (0, i.useMemo)(() => ({
                        registerEntry: m,
                        unregisterEntry: k,
                        onFocusEvent: x,
                        focusedEntryStore: g
                    }), [m, k, x, g]);
                return (0, r.jsx)(n(369064).N, {
                    debugName: "DynamicMenu",
                    capture: !e.disableKeyboard,
                    onUp: M,
                    onDown: T,
                    onLeft: I,
                    onRight: w,
                    onEnter: A,
                    onCommandEnter: A,
                    onEsc: C,
                    onTab: R,
                    onUntab: F,
                    children: (0, r.jsx)("div", {
                        onMouseLeave: j,
                        children: (0, r.jsx)(o.Provider, {
                            value: E,
                            children: e.children
                        })
                    })
                })
            }

            function g(e) {
                let {
                    action: t,
                    render: o,
                    dynamicMenuContext: l
                } = e, s = (0, i.useRef)(null);
                (0, i.useEffect)(() => {
                    let t = e.dynamicMenuContext,
                        n = f.current;
                    if (t) return t.registerEntry(n), () => {
                        t.unregisterEntry(n)
                    }
                }, []);
                let d = (0, i.useCallback)(e => {
                        l && l.onFocusEvent(f.current, e)
                    }, [l]),
                    u = (0, i.useCallback)(e => {
                        t(e, l)
                    }, [t, l]),
                    c = (0, i.useCallback)(e => {
                        if (!e) {
                            s.current = null;
                            return
                        }
                        if (e instanceof Element) {
                            s.current = e;
                            return
                        }
                        let t = a.findDOMNode(e);
                        if (t instanceof Element) {
                            s.current = t;
                            return
                        }
                        s.current = null
                    }, []),
                    p = (0, i.useCallback)(() => s.current || void 0, []),
                    g = (0, i.useCallback)(() => {
                        if (s.current) return s.current.getBoundingClientRect()
                    }, []),
                    v = !!e.disabled,
                    y = (0, i.useCallback)(e => {
                        t(e, l)
                    }, [t, l]),
                    f = (0, i.useRef)({
                        getDomElement: p,
                        getRect: g,
                        disabled: v,
                        onAction: y
                    }),
                    h = (0, n(682985).K8)(() => !!l && l.focusedEntryStore.state === f.current, [l]);
                return (0, r.jsx)(r.Fragment, {
                    children: o({
                        onMouseEnter: d,
                        onClick: u,
                        ref: c,
                        focused: h,
                        disabled: v
                    }, e.dynamicMenuContext)
                })
            }

            function v(e) {
                let t = (0, i.useContext)(o);
                return (0, r.jsx)(g, { ...e,
                    dynamicMenuContext: t
                })
            }

            function y(e, t, i, a) {
                let r = (0, n(195304).GL)(e),
                    o = [r.top, r.left],
                    l = (0, n(195304).fT)(e, -5);
                t.x > 0 && (l = new(n(195304)).z8({
                    x: r.left,
                    y: l.top,
                    width: 1 / 0,
                    height: l.height
                })), t.x < 0 && (l = new(n(195304)).z8({
                    x: 0,
                    y: l.top,
                    width: r.right,
                    height: l.height
                })), t.y > 0 && (l = new(n(195304)).z8({
                    x: l.left,
                    y: r.top,
                    width: l.width,
                    height: 1 / 0
                })), t.y < 0 && (l = new(n(195304)).z8({
                    x: l.left,
                    y: 0,
                    width: l.width,
                    height: r.bottom
                })), a && h("search space", l, "magenta");
                let s = i.filter(e => (0, n(195304).HY)(l, e.rect)),
                    d = n(381453).Ul(s.map(e => {
                        let t = (0, n(195304).GL)(e.rect);
                        return {
                            entry: e,
                            distance: n(69741).Io(o, [t.top, t.left])
                        }
                    }), e => e.distance)[0];
                if (d) return d.entry
            }
            async function f(e, t, i = "magenta") {
                await (0, n(864053).Iz)(t, e, i)
            }

            function h(e, t, n = "magenta", i) {
                i && f(e, t, n)
            }
        },
        461249: (e, t, n) => {
            n.d(t, {
                q: () => i
            });

            function i(e) {
                return "exact" === e.type ? e.type : "surrounding" === e.value ? `${e.type}-${e.unit}` : "custom" === e.value ? `${e.type}-${e.unit}-${e.count}-${e.direction}` : e.value
            }
        },
        487274: (e, t, n) => {
            n.d(t, {
                Ah: () => r,
                Ay: () => l,
                yL: () => a
            });
            var i = () => n(546605);
            let a = {
                    [n(730821).xQ.StartDate]: "starting",
                    [n(730821).xQ.StartTime]: "starting",
                    [n(730821).xQ.EndDate]: "ending",
                    [n(730821).xQ.EndTime]: "ending"
                },
                r = {
                    starting: n(730821).xQ.StartDate,
                    ending: n(730821).xQ.EndDate
                };
            class o extends i().Store {
                getInitialState() {
                    return {
                        isOpen: !1,
                        focus: n(730821).xQ.StartDate,
                        temporaryDateRange: {
                            starting: void 0,
                            ending: void 0
                        },
                        displayMonth: void 0,
                        hovered: void 0,
                        showTime: !1
                    }
                }
                getFocus() {
                    return this.state.focus
                }
                toggleShowTime() {
                    this.setState({ ...this.state,
                        showTime: !this.state.showTime
                    })
                }
                clearTemporaryDateRange() {
                    this.setState({ ...this.state,
                        temporaryDateRange: {
                            starting: void 0,
                            ending: void 0
                        }
                    })
                }
            }
            let l = o
        },
        560600: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                constructor(e = {}) {
                    super();
                    const t = { ...this.getInitialState()
                    };
                    e.initialDateRange && (t.temporaryDateRange = e.initialDateRange), e.shouldAlsoUpdateSearchStore && (t.shouldAlsoUpdateSearchStore = e.shouldAlsoUpdateSearchStore), this.setState(t)
                }
                getInitialState() {
                    return {
                        isOpen: !1,
                        focus: "starting",
                        temporaryDateRange: {
                            starting: void 0,
                            ending: void 0
                        },
                        displayMonth: void 0,
                        hovered: void 0,
                        dateFilterType: "lastEditedTime",
                        shouldAlsoUpdateSearchStore: !1
                    }
                }
                getFocus() {
                    return this.state.focus
                }
                clearTemporaryDateRange() {
                    this.setState({ ...this.state,
                        temporaryDateRange: {
                            starting: void 0,
                            ending: void 0
                        }
                    })
                }
            }
            let r = a
        },
        708797: (e, t, n) => {
            n.d(t, {
                i: () => l
            }), n(898992), n(354520), n(296540);
            var i = n(474848);
            let a = {
                textStyle: {
                    marginInlineStart: 6,
                    color: n(632079).Tj.text.primary
                }
            };

            function r(e) {
                let {
                    humanReadableLabel: t,
                    placeholder: r,
                    outlineButtonStyle: o,
                    buttonWrapperStyle: l,
                    renderAsQueryDropdown: s,
                    events: d
                } = e;
                return s ? (0, i.jsx)(n(332082).A, { ...d,
                    placeholder: r,
                    title: (0, i.jsx)(n(324489).V, {
                        children: t
                    }),
                    disableMargins: !0
                }) : (0, i.jsx)("div", {
                    style: l,
                    ...d,
                    children: (0, i.jsx)(n(548436).A, {
                        size: n(986939).A.isMobile ? "lg" : void 0,
                        style: o,
                        hasSolidBackground: !0,
                        iconTrailing: {
                            icon: n(595453).arrowChevronSingleDownSmallIcon,
                            colorVariant: "secondary",
                            size: "sm"
                        },
                        children: (0, i.jsx)("div", {
                            style: a.textStyle,
                            children: t
                        })
                    })
                })
            }
            let o = {
                directionButtonStyle: {
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4,
                    width: "100%",
                    justifyContent: "space-between",
                    ...n(986939).A.isMobile && {
                        marginTop: 12,
                        width: "100%",
                        paddingInlineStart: 12,
                        marginBottom: 6
                    }
                },
                unitButtonStyle: {
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4,
                    justifyContent: "space-between",
                    width: "100%",
                    ...n(986939).A.isMobile && {
                        paddingInlineStart: 12,
                        marginTop: 6
                    }
                },
                directionButtonWrapperStyle: { ...n(986939).A.isMobile && {
                        width: "100%"
                    },
                    flexGrow: 1
                },
                unitButtonWrapperStyle: { ...n(986939).A.isMobile && {
                        width: "100%"
                    },
                    flexGrow: 1
                },
                inputStyle: {
                    padding: 0,
                    borderRadius: 6
                },
                inputOuterStyle: {
                    minWidth: 60,
                    height: n(399411).RO.md,
                    ...n(986939).A.isMobile && {
                        background: "transparent",
                        paddingInlineEnd: 0,
                        boxShadow: "none"
                    }
                },
                container: {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    flexDirection: n(986939).A.isMobile ? "column" : "row",
                    width: "100%",
                    gap: 4
                },
                textWrapper: {
                    marginInlineEnd: n(986939).A.isMobile ? 6 : 8,
                    marginInlineStart: n(986939).A.isMobile ? 16 : 8
                }
            };

            function l(e) {
                let {
                    onUpdate: t,
                    filter: a,
                    renderAsQueryDropdown: l
                } = e, s = (0, n(109939).tz)(), d = (0, n(682985).uB)(void 0, n(510969).A), u = (0, n(682985).uB)(void 0, n(510969).A), c = "count" in a;

                function p(e) {
                    return "this" === e ? s.formatMessage(n(323700).Cj[e]) : s.formatMessage(n(323700).zZ[e])
                }

                function g(e, t) {
                    return t && t > 1 ? s.formatMessage(n(323700).o1[e]) : s.formatMessage(n(323700).EA[e])
                }
                let v = ["day", "week", "month", "year"].map(e => ({
                        key: e,
                        render: t => (0, i.jsx)(n(95582).A, { ...t,
                            title: g(e, c ? a.count : void 0),
                            isChecked: e === a.unit
                        }),
                        action: n => {
                            t({ ...a,
                                unit: e
                            }), d.setState({
                                open: !1
                            })
                        }
                    })),
                    y = ["past", "future", "this"].map(e => ({
                        key: e,
                        render: t => (0, i.jsx)(n(95582).A, { ...t,
                            isChecked: "surrounding" === a.value ? "this" === e : e === a.direction,
                            title: p(e)
                        }),
                        action: n => {
                            "this" === e && "custom" === a.value ? t({
                                type: "relative",
                                value: "surrounding",
                                unit: a.unit
                            }) : "this" !== e && "surrounding" === a.value ? t({
                                type: "relative",
                                value: "custom",
                                count: 1,
                                direction: e,
                                unit: a.unit
                            }) : "this" !== e && "custom" === a.value && t({ ...a,
                                direction: e
                            }), u.setState({
                                open: !1
                            })
                        }
                    }));
                return (0, i.jsxs)("div", {
                    style: o.container,
                    children: [(0, i.jsx)(n(656252).A, {
                        buttonPopupStore: u,
                        popupType: n(986939).A.isMobile ? n(182718).nl.SlideUp : n(182718).nl.Popup,
                        content: () => (0, i.jsx)(n(747369).A, {
                            menuType: n(986939).A.isMobile ? n(649476).gu.ActionSheet : n(649476).gu.Popup,
                            children: (0, i.jsx)(n(558045).A, {
                                initialFocus: void 0,
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "directionOptions",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        disableMobilePadding: !0,
                                        ...e
                                    }),
                                    items: y
                                }]
                            })
                        }),
                        children: e => (0, i.jsx)(r, {
                            events: e,
                            placeholder: s.formatMessage(n(323700).ql.direction),
                            renderAsQueryDropdown: l,
                            outlineButtonStyle: o.directionButtonStyle,
                            buttonWrapperStyle: o.directionButtonWrapperStyle,
                            humanReadableLabel: p("direction" in a ? a.direction : "this")
                        })
                    }), c ? (0, i.jsx)(n(310324).Ay, {
                        type: "number",
                        style: o.inputStyle,
                        textWrapperStyle: o.textWrapper,
                        inputOuterStyle: o.inputOuterStyle,
                        min: "1",
                        value: a.count.toString(),
                        onChange: e => {
                            let i = parseInt(e.target.value);
                            (0, n(627179).Et)(i) && !(i < 1) && t({ ...a,
                                count: i
                            })
                        }
                    }) : void 0, (0, i.jsx)(n(656252).A, {
                        buttonPopupStore: d,
                        popupType: n(986939).A.isMobile ? n(182718).nl.SlideUp : n(182718).nl.Popup,
                        content: () => (0, i.jsx)(n(747369).A, {
                            menuType: n(986939).A.isMobile ? n(649476).gu.ActionSheet : n(649476).gu.Popup,
                            children: (0, i.jsx)(n(558045).A, {
                                initialFocus: void 0,
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "unitOptions",
                                    render: e => (0, i.jsx)(n(844565).A, {
                                        disableMobilePadding: !0,
                                        ...e
                                    }),
                                    items: v
                                }]
                            })
                        }),
                        children: e => (0, i.jsx)(r, {
                            events: e,
                            placeholder: s.formatMessage(n(323700).ql.unit),
                            renderAsQueryDropdown: l,
                            outlineButtonStyle: o.unitButtonStyle,
                            buttonWrapperStyle: o.unitButtonWrapperStyle,
                            humanReadableLabel: g(a.unit, "count" in a ? a.count : void 0)
                        })
                    })]
                })
            }
        },
        730821: (e, t, n) => {
            n.d(t, {
                Ay: () => d,
                dz: () => l,
                xQ: () => o
            });
            var i, a, r = () => n(546605);
            let o = ((i = {}).StartDate = "startDate", i.StartTime = "startTime", i.EndDate = "endDate", i.EndTime = "endTime", i),
                l = ((a = {}).InvalidDate = "Invalid date", a.InvalidTime = "Invalid time", a.InvalidRange = "Invalid range", a);
            class s extends r().Store {
                getInitialState() {
                    return {
                        focus: o.StartDate,
                        inputIsFocused: !1,
                        inputTemporaryValue: {
                            startDate: void 0,
                            startTime: void 0,
                            endDate: void 0,
                            endTime: void 0
                        },
                        error: {
                            startDate: void 0,
                            startTime: void 0,
                            endDate: void 0,
                            endTime: void 0
                        }
                    }
                }
            }
            let d = s
        },
        778765: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                xMarkCircleFillSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1m2.289 3.761a.55.55 0 0 1 0 .778L8.778 8l1.511 1.511a.55.55 0 0 1-.778.778l-1.51-1.511-1.512 1.51a.55.55 0 1 1-.778-.777L7.222 8l-1.51-1.511a.55.55 0 1 1 .777-.778L8 7.222l1.511-1.51a.55.55 0 0 1 .778 0"
                    })
                },
                a = (0, n(104509).wt)("xMarkCircleFillSmall", i, "fillSmall")
        },
        803397: (e, t, n) => {
            n.d(t, {
                A: () => o
            }), n(944114);
            var i = n.n(n(32485)),
                a = n(296540),
                r = n(474848);
            let o = function({
                readonly: e,
                store: t,
                value: o,
                validate: l,
                onUpdate: s,
                disabled: d,
                dateTimeStore: u,
                minDate: c,
                maxDate: p
            }) {
                let g = (0, a.useRef)(),
                    v = (0, n(682985).K8)(() => {
                        if (t.state.displayMonth) return t.state.displayMonth.toJSDate();
                        if ("starting" === t.getFocus()) {
                            if (o.starting) return n(25825).C6.notionDateToJsDate(o.starting);
                            if (o.ending) return n(25825).C6.notionDateToJsDate(o.ending)
                        }
                        if ("ending" === t.getFocus()) {
                            if (o.ending) return n(25825).C6.notionDateToJsDate(o.ending);
                            if (o.starting) return n(25825).C6.notionDateToJsDate(o.starting)
                        }
                        if (!g.current) {
                            let e = n(25825).Ec((0, n(714350).P)());
                            g.current = n(25825).C6.notionDateToJsDate(e)
                        }
                        return g.current
                    }, [g, t, o]),
                    y = (0, n(682985).K8)(() => n(97892).X.state, []),
                    f = (0, n(682985).K8)(() => (function(e) {
                        let {
                            store: t,
                            value: i,
                            componentIsDisabled: a,
                            minDate: r,
                            maxDate: o
                        } = e, l = function(e) {
                            let {
                                store: t,
                                value: i,
                                componentIsDisabled: a,
                                minDate: r,
                                maxDate: o
                            } = e;
                            if (a) return [!0];
                            let l = [];
                            if (r && l.push({
                                    before: r.toJSDate()
                                }), o && l.push({
                                    after: o.toJSDate()
                                }), i.starting) {
                                let e = n(25825).C6.notionDateToJsDate(i.starting);
                                l.push("ending" === t.getFocus() && {
                                    before: e
                                })
                            }
                            if (i.ending) {
                                let e = n(25825).C6.notionDateToJsDate(i.ending);
                                l.push("starting" === t.getFocus() && {
                                    after: e
                                })
                            }
                            return l
                        }({
                            value: i,
                            store: t,
                            componentIsDisabled: a,
                            minDate: r,
                            maxDate: o
                        }), {
                            hovered: s
                        } = t.state;
                        if (a) return {
                            disabled: l
                        };
                        if (i.starting && i.ending) {
                            let e = n(25825).C6.notionDateToJsDate(i.starting),
                                t = n(25825).C6.notionDateToJsDate(i.ending);
                            return {
                                range: {
                                    from: e,
                                    to: t
                                },
                                start: e,
                                end: t,
                                disabled: l
                            }
                        }
                        if (i.starting) {
                            let e = n(25825).C6.notionDateToJsDate(i.starting);
                            return {
                                range: s && {
                                    from: e,
                                    to: s
                                },
                                start: e,
                                end: s,
                                disabled: l,
                                selected: [e, s]
                            }
                        }
                        if (i.ending) {
                            let e = n(25825).C6.notionDateToJsDate(i.ending);
                            return {
                                range: s && {
                                    from: s,
                                    to: e
                                },
                                start: s,
                                end: e,
                                disabled: l,
                                selected: [e, s]
                            }
                        }
                        return {
                            disabled: l
                        }
                    })({
                        store: t,
                        value: o,
                        componentIsDisabled: d,
                        minDate: c,
                        maxDate: p
                    }), [t, o, d, c, p]),
                    h = (0, n(682985).K8)(() => {
                        var e;
                        let i, a, r, o, l, s;
                        return e = t, i = {
                            monthControl: {
                                position: "absolute",
                                top: 0,
                                insetInlineEnd: 0,
                                display: "flex"
                            },
                            selectedRange: {
                                backgroundColor: "transparent"
                            },
                            active: {
                                backgroundColor: n(632079).Tj.blue.background.accentPrimary,
                                color: n(632079).oZ.white
                            },
                            inactive: {
                                backgroundColor: "rgba(35, 131, 226, 0.43)"
                            },
                            disabled: {
                                pointerEvents: "none"
                            },
                            today: {
                                fontWeight: n(699422).Wy.regular
                            }
                        }, a = {
                            disabled: {
                                color: n(632079).Tj.text.tertiary
                            },
                            today: {
                                color: n(632079).oZ.white
                            }
                        }, r = e.getFocus(), o = i.selectedRange, l = { ...i.disabled,
                            ...a.disabled
                        }, s = { ...i.today,
                            ...a.today
                        }, {
                            range: o,
                            start: "starting" === r ? i.active : i.inactive,
                            end: "ending" === r ? i.active : i.inactive,
                            disabled: l,
                            today: s
                        }
                    }, [t]);
                return (0, r.jsx)(n(116267).n, {
                    className: i()("notion-calendar-picker", {
                        "is-readonly": e
                    }),
                    defaultMonth: v,
                    month: v,
                    numberOfMonths: 1,
                    weekStartsOn: y,
                    locale: n(849917).locale,
                    showOutsideDays: !0,
                    fixedWeeks: !0,
                    onDayClick: i => (function(e, t, i, a, r, o, l, s) {
                        if (o || s) return;
                        let d = t.getFocus(),
                            u = a(d, {
                                value: n(25825).C6.toPersistedDate(e.valueOf())
                            });
                        if (r(u.error ? u : {
                                value: {
                                    [d]: u.value[d]
                                }
                            }), t.setState({ ...t.state,
                                hovered: void 0
                            }), l && l.setState({ ...l.state,
                                hovered: void 0
                            }), u.error) return;
                        "starting" === d && !i.ending && (t.setState({ ...t.state,
                            focus: "ending"
                        }), l && l.setState({ ...l.state,
                            focus: n(487274).Ah.ending
                        }));
                        let c = "starting" === d ? "ending" : "starting";
                        t.setState({ ...t.state,
                            focus: c
                        }), l && l.setState({ ...l.state,
                            focus: n(487274).Ah[c]
                        })
                    })(i, t, o, l, s, d, u, e),
                    onDayMouseEnter: i => {
                        var a, r, l, s, c, p;
                        let g, v;
                        return a = i, r = t, l = o, s = d, c = u, p = e, g = r.getFocus(), v = n(25825).C6.jsDateToLuxon(a), void(!s && !p && ("starting" === g && l.ending && !l.starting ? n(25825).C6.notionDateToLuxon(l.ending) >= v && (r.setState({ ...r.state,
                            hovered: a
                        }), c && c.setState({ ...c.state,
                            hovered: a
                        })) : "ending" === g && l.starting && !l.ending && n(25825).C6.notionDateToLuxon(l.starting) <= v && (r.setState({ ...r.state,
                            hovered: a
                        }), c && c.setState({ ...c.state,
                            hovered: a
                        }))))
                    },
                    onMonthSelected: e => {
                        var i, a, r;
                        return i = e, a = t, r = u, void(a.setState({ ...a.state,
                            displayMonth: n(25825).C6.jsDateToLuxon(i)
                        }), r && r.setState({ ...r.state,
                            displayMonth: n(25825).C6.jsDateToLuxon(i)
                        }))
                    },
                    modifiers: f,
                    modifiersStyles: h,
                    disabled: !!e || void 0
                })
            }
        }
    }
]);