"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [20957], {
        218116: (e, t, r) => {
            r.d(t, {
                _: () => s
            });
            var n = r(296540),
                i = r(474848);
            let a = {
                    overflow: "hidden",
                    position: "relative"
                },
                l = {
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    pointerEvents: "none"
                },
                o = {
                    position: "relative",
                    overflow: "hidden"
                };

            function s(e) {
                let {
                    children: t,
                    cycleLimit: s = 1 / 0,
                    delayCycleMs: u = 0,
                    delayInitialMs: d = 350,
                    gap: c = 20,
                    isPaused: m,
                    showFadeout: f,
                    speed: h = 50,
                    fadeoutColorVariant: p = "primary",
                    customFadeoutColor: g,
                    forceScroll: v = !1
                } = e, y = (0, n.useRef)(null), x = (0, n.useRef)(null), T = (0, n.useRef)(null), M = (0, n.useRef)(), b = (0, n.useRef)(), I = (0, n.useRef)(0), S = (0, n.useRef)(d), A = (0, n.useRef)(!1), j = (0, n.useRef)(0), D = (0, n.useRef)(0), w = (0, n.useRef)(0), k = (0, n.useRef)(null), O = (0, n.useRef)(null), E = (0, n.useRef)(0), [R, P] = (0, n.useState)(v), [C, $] = (0, n.useState)(!1), W = f ? Math.max(c, 20) : c, z = g ? ? r(632079).Tj.background[p], L = (0, r(960253).I)(() => ({
                    clonesContainer: {
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: W
                    },
                    fade: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetBlockEnd: 0,
                        width: Math.min(W, 40),
                        pointerEvents: "none"
                    },
                    fadeLeft: {
                        insetInlineStart: 0,
                        background: `linear-gradient(to left, transparent, ${z})`,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out"
                    },
                    fadeRight: {
                        insetInlineEnd: 0,
                        background: `linear-gradient(to right, transparent, ${z})`,
                        opacity: R && f ? 1 : 0
                    }
                }), [W, R, f, z]), U = (0, n.useCallback)(e => {
                    T.current && (T.current.style.transform = `translateX(${e}px)`)
                }, []), F = (0, n.useCallback)(e => {
                    E.current !== e && (E.current = e, O.current && (O.current.style.opacity = f ? `${e}` : "0"))
                }, [f]), K = (0, n.useCallback)(() => {
                    w.current = 0, $(!1)
                }, [$]);
                (0, n.useEffect)(() => {
                    K()
                }, [s, K]);
                let Z = (0, n.useCallback)(() => {
                        U(0), F(0)
                    }, [U, F]),
                    q = (0, n.useCallback)(() => {
                        I.current = 0, D.current = 0, j.current = 0, b.current = void 0
                    }, []),
                    B = (0, n.useCallback)(() => {
                        q(), Z()
                    }, [q, Z]),
                    N = (0, n.useCallback)(() => {
                        k.current = setTimeout(() => {
                            C && (A.current = !0), K(), k.current = null
                        }, 800)
                    }, [C, K]),
                    V = (0, n.useCallback)(() => {
                        k.current && (clearTimeout(k.current), k.current = null)
                    }, []),
                    _ = (0, n.useCallback)(() => {
                        C && (A.current = !0), K()
                    }, [C, K]);
                (0, n.useEffect)(() => {
                    var e;
                    let t = null == (e = y.current) ? void 0 : e.parentElement;
                    if (!t) return;
                    let r = new ResizeObserver(() => {
                        var e;
                        let t = null == (e = y.current) ? void 0 : e.parentElement,
                            r = x.current;
                        t && r && P(v || r.offsetWidth > t.offsetWidth)
                    });
                    return r.observe(t), () => {
                        r.disconnect()
                    }
                }, [v]), (0, n.useEffect)(() => {
                    R && B()
                }, [R, B]), (0, n.useEffect)(() => {
                    if (!R) {
                        M.current && cancelAnimationFrame(M.current), Z();
                        return
                    }
                    if (m || C) {
                        M.current && cancelAnimationFrame(M.current);
                        return
                    }
                    let e = t => {
                        var r;
                        b.current || (b.current = t, A.current ? (A.current = !1, S.current = 0) : S.current = d);
                        let n = t - b.current;
                        b.current = t;
                        let i = ((null == (r = x.current) ? void 0 : r.offsetWidth) ? ? 0) + W;
                        if (S.current > 0) {
                            S.current -= n, U(-(I.current * h / 1e3 % i)), M.current = requestAnimationFrame(e);
                            return
                        }
                        if (j.current > 0 && u > 0) {
                            j.current -= n, Z(), M.current = requestAnimationFrame(e);
                            return
                        }
                        I.current += n;
                        let a = I.current * h / 1e3 % i;
                        if (a < D.current) {
                            if (w.current += 1, w.current >= s) {
                                $(!0), B();
                                return
                            }
                            j.current = u
                        } else U(-a), F(a > i - W ? 0 : 1);
                        D.current = a, M.current = requestAnimationFrame(e)
                    };
                    return b.current = void 0, M.current = requestAnimationFrame(e), () => {
                        M.current && cancelAnimationFrame(M.current)
                    }
                }, [s, u, d, C, R, m, W, q, Z, B, h, F, U]);
                let X = (0, n.useMemo)(() => R ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("span", {
                            children: t
                        }), (0, i.jsx)("span", {
                            children: t
                        })]
                    }) : t, [t, R]),
                    Y = (0, n.useMemo)(() => (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("div", {
                            ref: x,
                            style: l,
                            "aria-hidden": "true",
                            children: t
                        }), (0, i.jsx)("div", {
                            ref: y,
                            style: a,
                            children: (0, i.jsx)("div", {
                                ref: T,
                                style: L.clonesContainer,
                                children: X
                            })
                        }), (0, i.jsx)("div", {
                            ref: O,
                            style: { ...L.fade,
                                ...L.fadeLeft
                            },
                            "aria-hidden": "true"
                        }), (0, i.jsx)("div", {
                            style: { ...L.fade,
                                ...L.fadeRight
                            },
                            "aria-hidden": "true"
                        })]
                    }), [t, X, L]);
                return r(986939).A.isMobile ? (0, i.jsx)(r(64960).Ay, {
                    style: o,
                    onTouchStart: _,
                    children: Y
                }) : (0, i.jsx)("div", {
                    style: o,
                    onMouseEnter: N,
                    onMouseLeave: V,
                    children: Y
                })
            }
        },
        523144: (e, t, r) => {
            r.d(t, {
                Vj: () => a,
                ax: () => l,
                iI: () => o,
                iw: () => i,
                u3: () => n,
                uJ: () => s,
                zw: () => u
            }), r(898992), r(354520), r(581454), r(737550);
            let n = "–",
                i = " ";

            function a({
                start: e,
                end: t,
                locale: o,
                timeZone: s
            }) {
                let u = r(906745).DateTime.fromISO(e),
                    d = r(906745).DateTime.fromISO(t),
                    c = function({
                        start: e,
                        end: t
                    }) {
                        return !!(t.diff(e).as("hours") > 12) || e.hour < 12 != t.hour < 12
                    }({
                        start: u,
                        end: d
                    }),
                    m = l({
                        time: u,
                        showAmPm: c,
                        locale: o,
                        timeZone: s
                    }),
                    f = l({
                        time: d,
                        showAmPm: !0,
                        locale: o,
                        timeZone: s
                    });
                return `${m}${i}${n}${i}${f}`
            }

            function l({
                time: e,
                showAmPm: t,
                locale: n,
                timeZone: a
            }) {
                let s = o(n),
                    u = 0 !== e.minute || !s,
                    d = { ...r(906745).DateTime.TIME_SIMPLE,
                        hour: "numeric",
                        minute: u ? "2-digit" : void 0,
                        timeZone: (0, r(25825).lW)(a)
                    };
                return s && !t ? e.setLocale(n).toLocaleParts(d).filter(e => "dayPeriod" !== e.type).map(e => e.value.trim()).join("") : e.toLocaleString({ ...d,
                    hour12: s
                }, {
                    locale: n
                }).replace(" ", i)
            }
            let o = (0, r(381453).Bj)(function(e) {
                return r(906745).DateTime.fromObject({
                    hour: 13
                }).setLocale(e).toLocaleParts(r(906745).DateTime.TIME_SIMPLE).some(e => "dayPeriod" === e.type)
            });

            function s({
                time: e,
                locale: t,
                timeZone: n
            }) {
                let a = o(t);
                return e.toLocaleString({ ...r(906745).DateTime.DATETIME_MED,
                    hour: "numeric",
                    minute: "2-digit",
                    year: void 0,
                    month: void 0,
                    day: void 0,
                    timeZone: (0, r(25825).lW)(n),
                    hour12: a
                }, {
                    locale: t
                }).replaceAll(" ", i)
            }

            function u({
                startTime: e,
                endTime: t
            }) {
                let r = t.diff(e).shiftTo("hours", "minutes"),
                    n = Math.floor(r.hours),
                    i = Math.round(r.minutes);
                return 0 === n ? `${i}min` : 0 === i ? `${n}h` : `${n}h ${i}min`
            }
        },
        533422: (e, t, r) => {
            r.d(t, {
                Y: () => a
            });
            var n = r(296540),
                i = r(474848);
            let a = n.memo(function({
                event: e,
                isBox: t = !1
            }) {
                let n = (0, r(682985).K8)(() => {
                        let t = (0, r(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: r(381453).n4
                    }),
                    a = (0, r(960253).e)(),
                    l = (0, r(960253).I)(() => ({
                        indicator: {
                            minHeight: t ? 10 : 36,
                            height: t ? 10 : "100%",
                            width: t ? 10 : 4,
                            flexShrink: 0,
                            borderRadius: t ? 2 : 3,
                            ...(0, r(619108).TN)({
                                event: e,
                                color: e.isPlaceholderEvent ? r(632079).Tj.text.disabled : (0, r(588727).Sk)({
                                    theme: r(632079).Tj,
                                    calendarColor: n,
                                    eventColor: e.color,
                                    themeMode: a
                                })
                            })
                        }
                    }), [e, n, t, a]);
                return (0, i.jsx)("div", {
                    style: l.indicator
                })
            })
        },
        579961: (e, t, r) => {
            r.d(t, {
                z: () => i
            }), r(296540);
            var n = r(474848);

            function i({
                event: e
            }) {
                let t, a = (0, r(109939).tz)(),
                    {
                        timeZone: l
                    } = (0, r(591742).mn)();
                if ("dateTime" in e.start && "dateTime" in e.end) t = (0, r(523144).Vj)({
                    start: e.start.dateTime,
                    end: e.end.dateTime,
                    locale: a.locale,
                    timeZone: l
                });
                else if ("dateTime" in e.start) {
                    let n = r(906745).DateTime.fromISO(e.start.dateTime);
                    t = (0, r(523144).uJ)({
                        time: n,
                        locale: a.locale,
                        timeZone: l
                    })
                }
                return t ? (0, n.jsx)(r(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: e.isPlaceholderEvent ? "tertiary" : "secondary",
                    children: t
                }) : null
            }
        },
        619108: (e, t, r) => {
            r.d(t, {
                Mr: () => a,
                TN: () => l,
                l9: () => o
            });
            var n = r(296540),
                i = r(474848);

            function a(e) {
                let {
                    event: t,
                    eventIndex: n,
                    calendarColor: i,
                    titleStartY: a,
                    titleEndY: o
                } = e, s = (0, r(960253).e)(), u = (0, r(960253).I)(() => {
                    let e = {
                        background: r(632079).Tj.gray.background.accentSecondary
                    };
                    return {
                        container: {
                            width: 4,
                            borderRadius: 3,
                            ..."emptyTodayEventPlaceholder" === t ? e : function({
                                event: e,
                                eventIndex: t,
                                color: n,
                                titleStartY: i,
                                titleEndY: a
                            }) {
                                let o = l({
                                    event: e,
                                    color: n
                                });
                                if (!e.isAllDay) return o;
                                let s = `radial-gradient(
		circle 10px at ${-(r(991812).Hj-1.5)}px 5px,
		transparent 5.5px,
		purple 0
	)`;
                                return {
                                    borderRadius: "50%",
                                    marginTop: (a - i - 10) / 2,
                                    alignSelf: "flex-Start",
                                    marginInlineStart: -3,
                                    marginInlineEnd: -3,
                                    width: 10,
                                    height: 10,
                                    background: n,
                                    ...0 !== t && {
                                        WebkitMaskImage: s,
                                        maskImage: s
                                    },
                                    ...o
                                }
                            }({
                                event: t,
                                eventIndex: n,
                                color: (0, r(588727).Sk)({
                                    theme: r(632079).Tj,
                                    calendarColor: i,
                                    eventColor: t.color,
                                    themeMode: s
                                }),
                                titleStartY: a,
                                titleEndY: o
                            })
                        }
                    }
                }, [i, t, n, o, a, s]);
                if (i || "emptyTodayEventPlaceholder" === t) return u.container
            }

            function l({
                event: e,
                color: t
            }) {
                let n = (0, r(650342).X4)(t, e.isAllDay ? .2 : .1),
                    i = `
		repeating-linear-gradient(
			-45deg,
			${t},
			${t} 2px,
			${n} 2px,
			${n} ${e.isAllDay?3.5:4}px
		)`;
                if ("outOfOffice" === e.eventType) return {
                    background: n
                };
                switch (e.responseStatus) {
                    case "accepted":
                        return {
                            background: (0, r(964282).vZ)(e) ? i : t
                        };
                    case "tentative":
                        return {
                            background: i
                        };
                    case "needsAction":
                        return {
                            border: `1px dashed ${t}`,
                            background: n
                        };
                    case "declined":
                        return {
                            background: n
                        };
                    case void 0:
                        return {
                            background: e.hasParticipants ? n : t
                        };
                    default:
                        (0, r(722371).HB)(e.responseStatus)
                }
            }
            let o = n.memo(function({
                event: e,
                squashedEventIndex: t,
                titleStartY: n,
                titleEndY: l
            }) {
                let o = (0, r(682985).K8)(() => {
                        if ("emptyTodayEventPlaceholder" === e) return;
                        let t = (0, r(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: r(381453).n4
                    }),
                    s = a({
                        event: e,
                        eventIndex: t,
                        calendarColor: o,
                        titleStartY: n,
                        titleEndY: l
                    });
                return s ? (0, i.jsx)("div", {
                    style: s
                }) : null
            })
        },
        637570: (e, t, r) => {
            r.d(t, {
                B: () => u
            }), r(944114), r(898992), r(354520), r(581454);
            var n = r(296540);
            let i = (0, r(109939).YK)({
                moreParticipants: {
                    id: "meetingsPage.upcomingMeetings.moreParticipants",
                    defaultMessage: "+{count}"
                },
                moreParticipantsOverflow: {
                    id: "meetingsPage.upcomingMeetings.moreParticipantsOverflow",
                    defaultMessage: "{count} more…"
                }
            });

            function a({
                avatarSize: e
            }) {
                return (0, r(960253).I)(() => ({
                    container: {
                        display: "flex",
                        alignItems: "center",
                        gap: 5
                    },
                    userList: {
                        display: "flex",
                        flexDirection: "row-reverse",
                        alignItems: "center",
                        paddingInlineEnd: 5
                    },
                    avatarWrapper: {
                        display: "grid",
                        placeContent: "center",
                        marginInlineEnd: -4,
                        width: e,
                        height: e,
                        overflow: "hidden",
                        border: `1px solid ${r(632079).Tj.border.primary}`,
                        borderRadius: "100%"
                    },
                    highlightedAvatarWrapper: {
                        borderColor: r(632079).Tj.blue.border.accentPrimary
                    },
                    avatarIcon: {
                        outline: "none",
                        border: "none"
                    },
                    placeholderAvatar: {
                        width: e,
                        height: e,
                        marginInlineEnd: -4,
                        background: r(632079).Tj.text.disabled,
                        border: `1px solid ${r(632079).Tj.background.primary}`,
                        borderRadius: "100%",
                        position: "relative"
                    },
                    placeholderAvatarImage: {
                        position: "absolute",
                        top: 0,
                        insetInlineStart: 0,
                        width: "calc(100% - 2px)",
                        height: "calc(100% - 2px)",
                        margin: "1px",
                        background: "white",
                        borderRadius: "100%"
                    },
                    loadingAvatar: {
                        background: r(632079).Tj.popoverBackground,
                        width: e - 2,
                        height: e - 2
                    },
                    usersTooltip: {
                        padding: 10
                    },
                    usersMenu: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                    },
                    userRow: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4
                    },
                    usersMenuMoreText: {
                        paddingInlineStart: 2
                    },
                    overflowCountText: {
                        userSelect: "none"
                    }
                }), [e])
            }
            var l = r(474848);

            function o({
                event: e,
                avatarImages: t,
                maxRenderedUsers: n = 5,
                avatarSize: u = 16
            }) {
                var d, c;
                let m = a({
                    avatarSize: u
                });
                if (e && !(null != (d = e.attendees) && d.length)) return null;
                let f = (null == e || null == (c = e.attendees) ? void 0 : c.length) ? ? (null == t ? void 0 : t.length) ? ? 0,
                    h = Array(Math.min(n, f)).fill(void 0).map((e, r) => null == t ? void 0 : t[r]),
                    p = Array(Math.max(0, f - n)).fill(void 0);
                return (0, l.jsxs)("div", {
                    style: m.container,
                    children: [(0, l.jsx)("div", {
                        style: m.userList,
                        children: h.map((e, t) => (0, l.jsx)(s, {
                            avatarImage: e,
                            avatarSize: u
                        }, `placeholder-avatar-${t}`))
                    }), p.length > 0 ? (0, l.jsx)(r(111010).D, {
                        styleKey: "captionRegular",
                        colorVariant: "tertiary",
                        children: (0, l.jsx)(r(109939).sA, { ...i.moreParticipants,
                            values: {
                                count: p.length
                            }
                        })
                    }) : void 0]
                })
            }

            function s({
                avatarImage: e,
                avatarSize: t
            }) {
                let r = a({
                        avatarSize: t
                    }),
                    [i, o] = (0, n.useState)(!1),
                    u = (0, n.useCallback)(() => {
                        o(!0)
                    }, []);
                return (0, l.jsx)("div", {
                    style: r.placeholderAvatar,
                    children: e && !i ? (0, l.jsx)("img", {
                        src: e,
                        style: r.placeholderAvatarImage,
                        alt: "",
                        onError: u
                    }) : void 0
                })
            }

            function u({
                event: e,
                highlightedUserId: t,
                maxRenderedUsers: n = 5,
                maxRenderedOverflowUsers: s = 15,
                avatarSize: c = 16,
                tooltipAvatarSize: m = 16
            }) {
                let f = (0, r(682985).K8)(() => {
                        var n;
                        if (e.isPlaceholderEvent) return [];
                        let i = r(728372).AppStoreSidebarSpaceStore.state;
                        if (!i || !(null != (n = e.attendees) && n.filter(e => !e.self).length)) return [];
                        let a = [],
                            l = [],
                            o = [];
                        for (let r of e.attendees) t && r.notionUserId === t ? a.push(r) : r.self ? l.push(r) : o.push(r);
                        return [...a, ...o, ...l].map(e => e.notionUserId).filter(r(722371).O9).map(e => r(807825).L.createChildStore(i, {
                            table: r(832375).oo9,
                            id: e
                        }))
                    }, [e, t]),
                    h = a({
                        avatarSize: c
                    });
                if (e.isPlaceholderEvent) return (0, l.jsx)(o, {
                    event: e,
                    avatarSize: c,
                    maxRenderedUsers: n
                });
                let p = f.slice(0, n),
                    g = f.slice(n),
                    v = g.slice(0, s);
                return 0 === p.length ? null : (0, l.jsxs)("div", {
                    style: h.container,
                    children: [(0, l.jsx)("div", {
                        style: h.userList,
                        children: p.reverse().map((e, n) => (0, l.jsx)(r(51831).m, {
                            placement: "bottom",
                            style: h.usersTooltip,
                            content: () => (0, l.jsx)(d, {
                                userStore: e,
                                avatarSize: m
                            }),
                            children: n => (0, l.jsx)("div", { ...n,
                                style: { ...h.avatarWrapper,
                                    ...t === e.id ? h.highlightedAvatarWrapper : {}
                                },
                                children: (0, l.jsx)(r(321753).A, {
                                    iconStyle: h.avatarIcon,
                                    userStore: e,
                                    size: c - 2,
                                    avatarShouldShowShadow: !1,
                                    defaultAvatar: (0, l.jsx)("div", {
                                        style: h.loadingAvatar
                                    })
                                })
                            })
                        }, `${e.id}-${n}`))
                    }), g.length > 0 ? (0, l.jsx)(r(51831).m, {
                        placement: "bottom",
                        style: h.usersTooltip,
                        content: () => (0, l.jsxs)("div", {
                            style: h.usersMenu,
                            children: [v.map((e, t) => (0, l.jsx)(d, {
                                userStore: e,
                                avatarSize: m
                            }, `${e.id}-${t}`)), g.length > s ? (0, l.jsx)(r(111010).D, {
                                styleKey: "captionMedium",
                                colorVariant: "inverseSecondary",
                                style: h.usersMenuMoreText,
                                children: (0, l.jsx)(r(109939).sA, { ...i.moreParticipantsOverflow,
                                    values: {
                                        count: g.length - s
                                    }
                                })
                            }) : void 0]
                        }),
                        children: e => (0, l.jsx)(r(111010).D, { ...e,
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            style: h.overflowCountText,
                            children: (0, l.jsx)(r(109939).sA, { ...i.moreParticipants,
                                values: {
                                    count: g.length
                                }
                            })
                        })
                    }) : void 0]
                })
            }

            function d({
                userStore: e,
                avatarSize: t
            }) {
                let n = (0, r(109939).tz)(),
                    i = a({
                        avatarSize: t
                    }),
                    o = (0, r(682985).K8)(() => e.getName() ? ? e.getDisplayName(n), [e, n]);
                return (0, l.jsxs)("div", {
                    style: i.userRow,
                    children: [(0, l.jsx)(r(321753).A, {
                        userStore: e,
                        size: t
                    }), (0, l.jsx)(r(111010).D, {
                        styleKey: "captionMedium",
                        colorVariant: "inversePrimary",
                        children: o
                    })]
                })
            }
        },
        890142: (e, t, r) => {
            r.d(t, {
                l: () => i
            });
            let n = (0, r(109939).YK)({
                twoItems: {
                    id: "formatSettings.twoItems",
                    defaultMessage: "{item1} and {item2}"
                },
                threeOrMoreItems: {
                    id: "formatSettings.threeOrMoreItems",
                    defaultMessage: "{item1}, and {numberOfOther} others"
                },
                twoItemsWithAmpersand: {
                    id: "formatSettings.twoItems.withAmpersand",
                    defaultMessage: "{item1} & {item2}"
                },
                threeOrMoreItemsWithAmpersand: {
                    id: "formatSettings.threeOrMoreItems.withAmpersand",
                    defaultMessage: "{item1}, & {numberOfOther} others"
                },
                threeOrMoreItemsWithAmpersandAndRemoveComma: {
                    id: "formatSettings.threeOrMoreItems.withAmpersandAndRemoveComma",
                    defaultMessage: "{item1} & {numberOfOther} others"
                }
            });

            function i(e, t) {
                let {
                    removeComma: i,
                    useAmpersand: a
                } = t || {};
                if (0 === e.length) return "";
                let l = e[0];
                if (1 === e.length) return l;
                let o = e[1];
                if (2 === e.length) return a ? r(962299).A.formatMessage(n.twoItemsWithAmpersand, {
                    item1: l,
                    item2: o
                }) : r(962299).A.formatMessage(n.twoItems, {
                    item1: l,
                    item2: o
                });
                let s = e.length - 1;
                return a ? i ? r(962299).A.formatMessage(n.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: l,
                    numberOfOther: s
                }) : r(962299).A.formatMessage(n.threeOrMoreItemsWithAmpersand, {
                    item1: l,
                    numberOfOther: s
                }) : r(962299).A.formatMessage(n.threeOrMoreItems, {
                    item1: l,
                    numberOfOther: s
                })
            }
        },
        964282: (e, t, r) => {
            function n(e) {
                let t = r(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    n = e.endUnixTimestampMS ? r(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    i = r(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    a = r(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    l = t.startOf("day"),
                    o = r(906745).DateTime.max(i, l),
                    s = Math.ceil(o.diff(i, "days").get("days")),
                    u = 1;
                if (n) {
                    let e = n.endOf("day");
                    u = Math.ceil(r(906745).DateTime.min(a, e).diff(o, "days").get("days"))
                }
                return {
                    start: t,
                    end: n,
                    startOfWeek: i,
                    endOfWeek: a,
                    startColumn: s,
                    columnCount: u
                }
            }

            function i(e) {
                let t = (e.attendees || []).filter(e => !e.self && !e.resource);
                return e.hasParticipants && t.length > 0 && t.every(e => "declined" === e.responseStatus)
            }
            r.d(t, {
                Gj: () => n,
                RN: () => u,
                sM: () => d,
                sR: () => o,
                vZ: () => i,
                xy: () => c,
                y6: () => s
            }), r(944114), r(898992), r(823215), r(354520), r(672577);
            let a = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                l = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                o = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function s(e) {
                let {
                    events: t,
                    accounts: n,
                    thresholds: i = a,
                    filters: l
                } = e, o = t.filter(e => {
                    if (!e.conferencing && !(null != l && l.includeEventsWithoutConferencing)) return !1;
                    let t = n.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, r(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === o.length) return [];
                let {
                    upcomingMinsThreshold: s,
                    startingMinsThreshold: u,
                    startedMinsThreshold: d
                } = i, c = r(906745).DateTime.now(), m = (null == l ? void 0 : l.maxDaysInFuture) !== void 0 ? l.maxDaysInFuture * r(695216).XQ : void 0, f = (null == l ? void 0 : l.maxDaysInPast) !== void 0 ? l.maxDaysInPast * r(695216).XQ : void 0, h = [], p = [], g = [], v = [], y = [], x = [];
                for (let e of o) {
                    if (e.isAllDay) continue;
                    let t = function(e) {
                            let t = r(906745).DateTime.fromISO(e.start.dateTime, {
                                    zone: e.start.timeZone
                                }),
                                n = r(906745).DateTime.fromISO(e.end.dateTime, {
                                    zone: e.end.timeZone
                                });
                            return r(906745).IX.fromDateTimes(t, n)
                        }(e),
                        n = c.diff(t.end, "minutes").minutes;
                    if (void 0 !== f && n > f) continue;
                    if (null != l && l.excludeEventsOnDifferentDays && c.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let i = t.start.diff(c, "minutes").minutes;
                    if (void 0 === m || !(i > m))
                        if (i >= 0 && i <= s) h.push(e);
                        else if (i < 0) {
                        let r = -i,
                            a = n >= 0 ? n : void 0;
                        r > 0 && r <= u ? g.push(e) : r > u && r <= d ? v.push(e) : t.contains(c) ? p.push(e) : void 0 !== f && void 0 !== a && a <= f && y.push(e)
                    } else x.push(e)
                }
                return p.sort((e, t) => {
                    let n = r(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return r(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(n).toMillis()
                }), y.length > 1 && y.sort((e, t) => {
                    let n = r(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return r(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(n).toMillis()
                }), [...h, ...g, ...v, ...null != l && l.excludeInProgressEvents ? [] : p, ...y, ...null != l && l.excludeUpcomingLaterEvents ? [] : x]
            }

            function u(e, t) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: a,
                    filters: void 0
                })[0]
            }

            function d(e, t, r) {
                return s({
                    events: e,
                    accounts: t,
                    thresholds: l,
                    filters: {
                        excludeUpcomingLaterEvents: !0,
                        ...r
                    }
                })
            }

            function c(e) {
                let {
                    spaceStore: t
                } = e, n = e.fileUrl;
                if (!t) return;
                let i = (0, r(132702).parseRoute)({
                        url: n,
                        isMobile: r(986939).A.isMobile,
                        baseUrl: r(986939).A.domainBaseUrl,
                        publicDomainName: r(986939).A.publicDomainName,
                        protocol: r(986939).A.protocol,
                        currentUrl: window.location.href,
                        requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                    }),
                    a = "page" === i.name ? i.blockId : void 0;
                if (!a) return;
                let l = r(970831).B.createChildStore(t, {
                    table: r(832375).evP,
                    id: a
                });
                return l.load(), l
            }
        },
        991812: (e, t, r) => {
            r.d(t, {
                Hj: () => i,
                Lc: () => s,
                OZ: () => l,
                d_: () => o,
                rW: () => a,
                tM: () => u,
                uE: () => n
            });
            let n = 4,
                i = 2,
                a = 4,
                l = 20,
                o = 4,
                s = 6,
                u = 10
        }
    }
]);