"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [12555], {
        50171: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkTriangleSmallIcon: () => l,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.49 1.87 13.01 11.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 5.281a.625.625 0 0 0-.625.625v2.5a.625.625 0 0 0 1.25 0v-2.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M9.58 2.788c-.702-1.217-2.458-1.217-3.16 0l-4.677 8.1c-.702 1.216.176 2.737 1.58 2.737h9.354c1.405 0 2.283-1.52 1.58-2.738zm-2.078.625a.575.575 0 0 1 .996 0l4.677 8.1a.575.575 0 0 1-.498.862H3.324a.575.575 0 0 1-.498-.863z"
                        })]
                    })
                },
                l = (0, n(104509).wt)("exclamationMarkTriangleSmall", a, "small")
        },
        137683: (e, t, n) => {
            n.d(t, {
                m: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                constructor() {
                    super(), setInterval(() => {
                        this.setState({
                            timeNow: Date.now()
                        })
                    }, 3e4)
                }
                getInitialState() {
                    return {
                        timeNow: Date.now()
                    }
                }
            }
            let l = null;

            function r() {
                return l || (l = new a), l
            }
        },
        142880: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.97 3.37 14.21 9.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M.975 5.2c0-1.008.817-1.825 1.825-1.825H10c.918 0 1.678.678 1.806 1.561v6.128A1.825 1.825 0 0 1 10 12.625H2.8A1.825 1.825 0 0 1 .975 10.8zm11.931 5.61 1.32.8a.625.625 0 0 0 .95-.535v-6.15a.625.625 0 0 0-.95-.535l-1.32.8z"
                    })
                },
                a = (0, n(104509).wt)("videoCameraFillSmall", i, "fillSmall")
        },
        490648: (e, t, n) => {
            n.d(t, {
                d: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.88 2.32 14.24 15.36",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.294 2.325h3.103c.484 0 .948.192 1.29.534l2.897 2.898c.343.342.535.806.535 1.29v5.903a1.825 1.825 0 0 1-1.825 1.825H12.53v1.075a1.825 1.825 0 0 1-1.825 1.825h-6A1.825 1.825 0 0 1 2.88 15.85v-8.8c0-1.008.817-1.825 1.825-1.825H7.47V4.15c0-1.008.817-1.825 1.825-1.825M9.1 5.76l2.897 2.897c.342.342.534.806.534 1.29v3.578h2.763a.575.575 0 0 0 .575-.575V7.3h-1.975a1.75 1.75 0 0 1-1.75-1.75V3.575h-2.85a.575.575 0 0 0-.575.575v1.318q.208.12.38.292m6.16.44-2.016-2.016V5.55c0 .359.29.65.65.65zm-10.554.275a.575.575 0 0 0-.575.575v8.8c0 .318.258.575.575.575h6a.575.575 0 0 0 .575-.575V10.2H9.306a1.75 1.75 0 0 1-1.75-1.75V6.475zm3.95.609V8.45c0 .359.291.65.65.65h1.366z"
                    })
                },
                a = (0, n(104509).wt)("docOnDoc", i, "default")
        },
        523144: (e, t, n) => {
            n.d(t, {
                Vj: () => l,
                ax: () => r,
                iI: () => o,
                iw: () => a,
                u3: () => i,
                uJ: () => d,
                zw: () => s
            }), n(898992), n(354520), n(581454), n(737550);
            let i = "–",
                a = " ";

            function l({
                start: e,
                end: t,
                locale: o,
                timeZone: d
            }) {
                let s = n(906745).DateTime.fromISO(e),
                    c = n(906745).DateTime.fromISO(t),
                    u = function({
                        start: e,
                        end: t
                    }) {
                        return !!(t.diff(e).as("hours") > 12) || e.hour < 12 != t.hour < 12
                    }({
                        start: s,
                        end: c
                    }),
                    m = r({
                        time: s,
                        showAmPm: u,
                        locale: o,
                        timeZone: d
                    }),
                    g = r({
                        time: c,
                        showAmPm: !0,
                        locale: o,
                        timeZone: d
                    });
                return `${m}${a}${i}${a}${g}`
            }

            function r({
                time: e,
                showAmPm: t,
                locale: i,
                timeZone: l
            }) {
                let d = o(i),
                    s = 0 !== e.minute || !d,
                    c = { ...n(906745).DateTime.TIME_SIMPLE,
                        hour: "numeric",
                        minute: s ? "2-digit" : void 0,
                        timeZone: (0, n(25825).lW)(l)
                    };
                return d && !t ? e.setLocale(i).toLocaleParts(c).filter(e => "dayPeriod" !== e.type).map(e => e.value.trim()).join("") : e.toLocaleString({ ...c,
                    hour12: d
                }, {
                    locale: i
                }).replace(" ", a)
            }
            let o = (0, n(381453).Bj)(function(e) {
                return n(906745).DateTime.fromObject({
                    hour: 13
                }).setLocale(e).toLocaleParts(n(906745).DateTime.TIME_SIMPLE).some(e => "dayPeriod" === e.type)
            });

            function d({
                time: e,
                locale: t,
                timeZone: i
            }) {
                let l = o(t);
                return e.toLocaleString({ ...n(906745).DateTime.DATETIME_MED,
                    hour: "numeric",
                    minute: "2-digit",
                    year: void 0,
                    month: void 0,
                    day: void 0,
                    timeZone: (0, n(25825).lW)(i),
                    hour12: l
                }, {
                    locale: t
                }).replaceAll(" ", a)
            }

            function s({
                startTime: e,
                endTime: t
            }) {
                let n = t.diff(e).shiftTo("hours", "minutes"),
                    i = Math.floor(n.hours),
                    a = Math.round(n.minutes);
                return 0 === i ? `${a}min` : 0 === a ? `${i}h` : `${i}h ${a}min`
            }
        },
        619108: (e, t, n) => {
            n.d(t, {
                Mr: () => l,
                TN: () => r,
                l9: () => o
            });
            var i = n(296540),
                a = n(474848);

            function l(e) {
                let {
                    event: t,
                    eventIndex: i,
                    calendarColor: a,
                    titleStartY: l,
                    titleEndY: o
                } = e, d = (0, n(960253).e)(), s = (0, n(960253).I)(() => {
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
                                titleEndY: l
                            }) {
                                let o = r({
                                    event: e,
                                    color: i
                                });
                                if (!e.isAllDay) return o;
                                let d = `radial-gradient(
		circle 10px at ${-(n(991812).Hj-1.5)}px 5px,
		transparent 5.5px,
		purple 0
	)`;
                                return {
                                    borderRadius: "50%",
                                    marginTop: (l - a - 10) / 2,
                                    alignSelf: "flex-Start",
                                    marginInlineStart: -3,
                                    marginInlineEnd: -3,
                                    width: 10,
                                    height: 10,
                                    background: i,
                                    ...0 !== t && {
                                        WebkitMaskImage: d,
                                        maskImage: d
                                    },
                                    ...o
                                }
                            }({
                                event: t,
                                eventIndex: i,
                                color: (0, n(588727).Sk)({
                                    theme: n(632079).Tj,
                                    calendarColor: a,
                                    eventColor: t.color,
                                    themeMode: d
                                }),
                                titleStartY: l,
                                titleEndY: o
                            })
                        }
                    }
                }, [a, t, i, o, l, d]);
                if (a || "emptyTodayEventPlaceholder" === t) return s.container
            }

            function r({
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
            let o = i.memo(function({
                event: e,
                squashedEventIndex: t,
                titleStartY: i,
                titleEndY: r
            }) {
                let o = (0, n(682985).K8)(() => {
                        if ("emptyTodayEventPlaceholder" === e) return;
                        let t = (0, n(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: n(381453).n4
                    }),
                    d = l({
                        event: e,
                        eventIndex: t,
                        calendarColor: o,
                        titleStartY: i,
                        titleEndY: r
                    });
                return d ? (0, a.jsx)("div", {
                    style: d
                }) : null
            })
        },
        657547: (e, t, n) => {
            n.d(t, {
                c: () => a
            }), n(581454), n(296540);
            var i = n(474848);

            function a(e) {
                let {
                    isFullScreen: t,
                    hasGroups: a,
                    hasPartialResults: l,
                    hasSearchQuery: r,
                    overrideNumShimmerRows: o
                } = e, d = (0, n(713311).Ks)(), s = (0, n(682985).K8)(() => null == d ? void 0 : d.isInHomeWidgetStore.state, [d]);
                if (!(0, n(934877).A)({
                        visibility: !0,
                        delayShow: 0,
                        delayHold: 100
                    })) return null;
                let c = 1;
                void 0 !== o ? c = o : a || l || r || (c = t ? 10 : 3);
                let u = c > 1 ? ["50%", "30%", "40%", "40%", "30%", "30%", "40%", "40%", "30%", "30%"] : ["35%"],
                    m = n(381453).Hn(c).map(e => (0, i.jsx)(n(980400).J, {
                        isInHomeWidget: s,
                        widthPercentage: e < u.length ? u[e] : void 0
                    }, e));
                return (0, i.jsx)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        alignSelf: "stretch",
                        marginInlineStart: s ? 8 : 3
                    },
                    children: m
                })
            }
        },
        711617: (e, t, n) => {
            n.d(t, {
                T: () => A
            }), n(898992), n(354520), n(430670), n(581454);
            var i = n(296540);
            let a = (0, n(109939).YK)({
                    code: {
                        id: "notionCalendarEvent.conferencingCode",
                        defaultMessage: "Code"
                    },
                    room: {
                        id: "notionCalendarEvent.conferencingRoom",
                        defaultMessage: "Room"
                    },
                    number: {
                        id: "notionCalendarEvent.conferencingNumber",
                        defaultMessage: "Number"
                    },
                    id: {
                        id: "notionCalendarEvent.conferencingId",
                        defaultMessage: "ID"
                    }
                }),
                l = " ⸱ ";
            var r = n(474848);
            let o = {
                    height: 20,
                    paddingTop: 2,
                    paddingBottom: 2,
                    marginTop: -2,
                    marginBottom: -2,
                    paddingInlineStart: 4,
                    paddingInlineEnd: 4,
                    marginInlineStart: -4,
                    marginInlineEnd: -4
                },
                d = {
                    display: "flex",
                    flexDirection: "row",
                    justifyItems: "center",
                    width: "fit-content",
                    maxWidth: "100%",
                    gap: 6
                };

            function s({
                attachment: e,
                attachmentIndex: t,
                menuListItemProps: a,
                onClick: l
            }) {
                let {
                    fileUrl: d,
                    iconLink: c
                } = e, u = 0 === t, m = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), g = null == m ? void 0 : m.id, h = (0, n(960253).I)(() => ({
                    button: {
                        gap: 4,
                        flexShrink: 1,
                        ...u ? {
                            maxWidth: "calc(100% + 8px)"
                        } : {
                            width: "100%"
                        },
                        ...u && o
                    },
                    title: { ...u ? { ...(0, n(793550).w_)(),
                            fontWeight: n(699422).Wy.medium
                        } : {
                            maxWidth: 200
                        },
                        ...n(699422).RC
                    },
                    icon: {
                        height: 14
                    }
                }), [u]), f = (0, n(533992).v3)(), p = (0, n(682985).K8)(() => (0, n(964282).xy)({
                    environment: f,
                    fileUrl: d,
                    spaceStore: m
                }), [f, d, m]), v = (0, n(682985).K8)(() => (null == p ? void 0 : p.getSpaceId()) === g, [p, g]), y = (0, n(682985).K8)(() => {
                    let e = null == p ? void 0 : p.getIcon();
                    if (p && e) return {
                        blockIcon: e,
                        isEmptyPage: p.isEmptyPage()
                    }
                }, [p]), x = (0, i.useMemo)(() => y ? (0, r.jsx)(n(569553).B6, {
                    icon: y.blockIcon,
                    isEmptyPage: y.isEmptyPage,
                    size: 14,
                    disabled: !0
                }) : c ? (0, r.jsx)("img", {
                    style: h.icon,
                    src: c,
                    alt: `Icon image for the Notion calendar event attachment entitled "${e.title}"`
                }) : (0, r.jsx)(n(16275).I, {
                    icon: n(748869).linkSmallIcon,
                    size: "sm",
                    colorVariant: "secondary"
                }), [e.title, y, c, h.icon]), j = p && v ? (0, r.jsx)(n(627918).A, {
                    store: p,
                    underline: u,
                    style: h.title
                }) : (0, r.jsx)("div", {
                    style: h.title,
                    children: e.title ? e.title : (0, r.jsx)(n(763793).lj, {
                        textValue: [
                            [e.fileUrl]
                        ]
                    })
                }), T = (0, i.useCallback)(e => {
                    if (e.preventDefault(), !d) return;
                    l({
                        index: t,
                        attachmentType: p ? "notion" : "other",
                        attachmentBlockId: null == p ? void 0 : p.id
                    });
                    let i = e.metaKey || e.ctrlKey;
                    p && v ? (0, n(908919).V)({
                        environment: f,
                        openInNew: i ? "tab" : void 0,
                        store: p,
                        pageVisitSource: n(254656).y8.PersonalHomeCalendarAttachment,
                        peekMode: "center_peek",
                        resultsStore: void 0,
                        collectionContextStore: void 0
                    }) : (0, n(624621).L)({
                        environment: f,
                        url: d
                    })
                }, [t, p, f, d, l, v]);
                return (0, r.jsxs)(n(988022).p, {
                    style: h.button,
                    href: d,
                    metaHref: d,
                    ...a,
                    onClick: T,
                    children: [x, j]
                })
            }
            let c = {
                button: {
                    color: n(632079).Tj.text.secondary,
                    ...o,
                    marginInlineEnd: 0
                },
                sectionMenuItem: {
                    display: "flex",
                    flexDirection: "column",
                    padding: 4,
                    width: "100%"
                }
            };

            function u({
                attachments: e,
                onClickAttachment: t
            }) {
                let i = (0, n(533992).WS)();
                return e && 0 !== e.length ? (0, r.jsx)(n(656252).A, {
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    popupType: i ? n(656252).z.SlideUp : n(656252).z.Popup,
                    content: i => (0, r.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        maxWidth: 300,
                        children: (0, r.jsx)(n(558045).A, {
                            onAccept: i.close,
                            type: n(558045).O.Vertical,
                            sections: [{
                                key: "all",
                                render: e => (0, r.jsx)(n(844565).A, { ...e,
                                    style: c.sectionMenuItem
                                }),
                                items: e.map((e, n) => ({
                                    key: e.fileUrl,
                                    render: i => (0, r.jsx)(s, {
                                        menuListItemProps: i,
                                        attachment: e,
                                        attachmentIndex: n + 1,
                                        onClick: t
                                    }, e.fileUrl),
                                    action: () => {}
                                }))
                            }],
                            initialFocus: 0
                        })
                    }),
                    children: t => (0, r.jsx)(n(988022).p, {
                        style: c.button,
                        ...t,
                        children: (0, r.jsx)(n(109939).sA, {
                            id: "EventCalendarAttachments.plusMoreAttachments",
                            defaultMessage: "+{numRemainingAttachments}",
                            values: {
                                numRemainingAttachments: e.length
                            }
                        })
                    })
                }) : (0, r.jsx)(r.Fragment, {})
            }
            let m = i.memo(function(e) {
                    let {
                        event: t,
                        onClick: i
                    } = e, {
                        attachments: a
                    } = t, l = function(e) {
                        if (!e) return [];
                        let t = e.findIndex(e => "page" === (0, n(132702).parseRoute)({
                            url: e.fileUrl,
                            isMobile: n(986939).A.isMobile,
                            baseUrl: n(986939).A.domainBaseUrl,
                            publicDomainName: n(986939).A.publicDomainName,
                            protocol: n(986939).A.protocol,
                            currentUrl: window.location.href,
                            requestedOnAlternateDomain: (0, n(700473).wasRequestedOnAlternateDomain)()
                        }).name);
                        return -1 === t ? e : [e[t], ...e.slice(0, t), ...e.slice(t + 1)]
                    }(a);
                    return l[0] ? (0, r.jsxs)("div", {
                        style: d,
                        children: [(0, r.jsx)(s, {
                            attachment: l[0],
                            attachmentIndex: 0,
                            onClick: i
                        }), (0, r.jsx)(u, {
                            attachments: l.slice(1),
                            onClickAttachment: i
                        })]
                    }) : null
                }),
                g = {
                    padding: 0
                },
                h = {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 6,
                    height: 26,
                    cursor: "pointer"
                },
                f = {
                    margin: 4,
                    marginInlineStart: 8,
                    marginInlineEnd: 2
                },
                p = {
                    margin: 4,
                    marginInlineEnd: 8,
                    marginInlineStart: 2
                },
                v = i.memo(function(e) {
                    var t;
                    let {
                        event: a,
                        isCompact: l,
                        onJoinConferenceClick: o,
                        onCopyConferenceUrlClick: d
                    } = e, s = (0, n(533992).v3)(), [c, u] = (0, i.useState)(!1), m = !l, v = (0, i.useCallback)(async () => {
                        var e;
                        !(null != (e = a.conferencing) && e.url) || (o(), "zoom" === a.conferencing.providerName && await n(874809).cs({
                            environment: s,
                            url: a.conferencing.url
                        }) || (0, n(624621).L)({
                            environment: s,
                            url: a.conferencing.url
                        }))
                    }, [s, a, o]), y = (0, i.useCallback)(async () => {
                        var e;
                        if (!(null != (e = a.conferencing) && e.url)) return;
                        let [t, i] = await Promise.all([(0, n(161333).r)(), (0, n(969899).jd)()]);
                        i({
                            environment: s,
                            stringValue: a.conferencing.url,
                            copiedMessage: t.copiedLinkToClipboard
                        }), u(!1), d()
                    }, [s, null == (t = a.conferencing) ? void 0 : t.url, d]);
                    if (!(0, n(722371).O9)(a.conferencing)) return (0, r.jsx)(r.Fragment, {});
                    let {
                        providerName: x,
                        url: j,
                        providerDisplayName: T
                    } = a.conferencing, {
                        domain: I,
                        restOfUrl: S = ""
                    } = (0, n(793550).Kc)([
                        [j]
                    ]), C = S.length > 10 ? `${I}${S.slice(0,5)}…${S.slice(-6)}` : `${I}${S}`;
                    return (0, r.jsx)(n(51831).m, {
                        allowHover: !0,
                        delayThreshold: 500,
                        closeDelay: 200,
                        originGap: 6,
                        placement: "top",
                        alignment: "end",
                        style: g,
                        forceVisibleState: !!c || void 0,
                        content: () => (0, r.jsxs)("div", {
                            style: h,
                            onClick: y,
                            onMouseEnter: () => u(!0),
                            onMouseLeave: () => u(!1),
                            children: [(0, r.jsx)("div", {
                                style: f,
                                children: C
                            }), (0, r.jsx)(n(346268).c, {
                                type: "vertical",
                                size: 1,
                                colorVariant: "accentPrimary"
                            }), (0, r.jsx)("div", {
                                style: p,
                                children: (0, r.jsx)(n(16275).I, {
                                    icon: n(490648).d,
                                    size: "sm",
                                    fitToViewBox: "horizontal"
                                })
                            })]
                        }),
                        children: e => (0, r.jsx)(n(265779).E, {
                            colorPalette: "blue",
                            onClick: v,
                            iconLeading: {
                                icon: n(142880).w,
                                size: "sm"
                            },
                            ...e,
                            children: function(e) {
                                let {
                                    providerDisplayName: t,
                                    isWideTile: i
                                } = e;
                                return i ? t ? (0, r.jsx)(n(109939).sA, {
                                    id: "notionCalendarEvent.joinButtonWithProviderWithMeeting",
                                    defaultMessage: "Join {providerDisplayName} meeting",
                                    values: {
                                        providerDisplayName: t
                                    }
                                }) : (0, r.jsx)(n(109939).sA, {
                                    id: "notionCalendarEvent.joinButtonWithMeeting",
                                    defaultMessage: "Join meeting"
                                }) : t ? (0, r.jsx)(n(109939).sA, {
                                    id: "notionCalendarEvent.joinButtonWithProvider",
                                    defaultMessage: "Join {providerDisplayName}",
                                    values: {
                                        providerDisplayName: t
                                    }
                                }) : (0, r.jsx)(n(109939).sA, {
                                    id: "notionCalendarEvent.joinButton",
                                    defaultMessage: "Join"
                                })
                            }({
                                providerDisplayName: T,
                                isWideTile: m
                            })
                        })
                    })
                }),
                y = (0, n(109939).YK)({
                    meetingNoteTooltip: {
                        defaultMessage: "Navigate to AI Meeting Note",
                        id: "notionCalendarEventMeetingNoteButton.meetingNoteTooltip"
                    }
                });

            function x(e) {
                let {
                    event: t
                } = e, a = (0, n(109939).tz)(), l = (0, n(533992).v3)(), o = (0, i.useCallback)(() => {
                    (0, n(861842).Jf)({
                        environment: l,
                        from: "home_tile_calendar_join_button",
                        event: t
                    })
                }, [l, t]), d = (0, n(960253).e)(), s = (0, n(960253).I)(() => ({
                    button: {
                        width: 28,
                        height: 28,
                        background: "light" === d ? n(713101).$.light.gray[75] : n(713101).$.dark.gray[400]
                    },
                    buttonHovered: {
                        background: "light" === d ? n(713101).$.light.gray[100] : n(713101).$.dark.gray[500]
                    }
                }), [d]);
                return (0, r.jsx)(n(51831).m, {
                    content: () => (0, r.jsx)(n(109939).sA, { ...y.meetingNoteTooltip
                    }),
                    children: e => (0, r.jsx)(n(374533).A, { ...e,
                        style: s.button,
                        hoveredStyle: s.buttonHovered,
                        icon: n(681875).a,
                        onClick: o,
                        ariaLabel: a.formatMessage(y.meetingNoteTooltip)
                    })
                })
            }

            function j(e) {
                var t;
                let {
                    event: i,
                    isUpcomingEvent: a,
                    isHovering: l
                } = e, o = (0, n(839362).W)() && !i.isAllDay;
                return ((null == (t = i.conferencing) ? void 0 : t.url) || o) && (a || l) ? (0, r.jsx)(T, {
                    canNavigateToMeetingNote: o,
                    ...e
                }) : null
            }

            function T({
                event: e,
                isCompact: t,
                isUpcomingEvent: a,
                isHovering: l,
                canNavigateToMeetingNote: o,
                onJoinConferenceClick: d,
                onCopyConferenceUrlClick: s
            }) {
                var c;
                let u = o && l,
                    m = !!(null == (c = e.conferencing) ? void 0 : c.url),
                    g = !a && l,
                    h = (0, i.useRef)(null),
                    [f, p] = (0, i.useState)(!1);
                (0, i.useLayoutEffect)(() => {
                    if (o && h.current && h.current.parentElement) {
                        let e = h.current.getBoundingClientRect();
                        p(20 >= Math.abs(h.current.parentElement.getBoundingClientRect().left - e.left))
                    }
                }, [e, o]);
                let y = (0, n(960253).e)(),
                    j = (0, n(960253).I)(() => ({
                        container: { ...g && {
                                zIndex: 2,
                                position: "absolute",
                                top: -n(991812).rW,
                                insetInlineEnd: -n(991812).tM,
                                paddingInlineEnd: n(991812).tM,
                                paddingInlineStart: 40,
                                bottom: -n(991812).rW,
                                ...g && {
                                    background: `linear-gradient(to right, transparent 0%, ${"light"===y?n(632079).Tj.background.secondary:n(713101).$.dark.gray[300]} 25%)`
                                }
                            }
                        },
                        inner: {
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            gap: 5,
                            marginBottom: n(991812).rW,
                            ...f && {
                                flexDirection: "row-reverse"
                            }
                        },
                        joinButtonContainer: { ...g && {
                                borderRadius: 6,
                                background: "light" === y ? n(632079).oZ.white : n(713101).$.dark.gray[300]
                            }
                        }
                    }), [g, f, y]);
                return (0, r.jsx)("div", {
                    ref: h,
                    style: j.container,
                    children: (0, r.jsxs)("div", {
                        style: j.inner,
                        children: [u && !e.isAllDay ? (0, r.jsx)(x, {
                            event: e
                        }) : null, m ? (0, r.jsx)("div", {
                            style: j.joinButtonContainer,
                            children: (0, r.jsx)(v, {
                                event: e,
                                isCompact: t,
                                onJoinConferenceClick: d,
                                onCopyConferenceUrlClick: s
                            })
                        }) : null]
                    })
                })
            }
            let I = (0, n(109939).YK)({
                emptyTodayPlaceholder: {
                    id: "notionCalendarEvent.emptyTodayPlaceholder",
                    defaultMessage: "No more events"
                },
                privateEventTitle: {
                    id: "notionCalendarEvent.privateEvent.title",
                    defaultMessage: "Busy"
                }
            });

            function S(e) {
                let {
                    event: t,
                    date: a,
                    allSquashedEvents: l = [],
                    isFirstEvent: o = !0,
                    isLastEvent: d = !0,
                    isUpcomingEvent: s = !1,
                    isCompact: c,
                    eventToAnalyticsStateStore: u
                } = e, m = (0, n(533992).v3)(), [g, h] = (0, i.useState)(!1), f = (0, i.useContext)(n(531491).a) ? ? n(531491).H, p = "emptyTodayEventPlaceholder" !== t && t.isAllDay, v = (0, i.useCallback)(() => {
                    h(!0)
                }, [h]), y = (0, i.useCallback)(() => {
                    h(!1)
                }, [h]), x = (0, n(960253).e)(), T = (0, n(960253).I)(() => ({
                    container: {
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "stretch",
                        overflow: "hidden",
                        paddingInlineStart: n(991812).uE,
                        paddingInlineEnd: n(991812).tM,
                        ...p && {
                            paddingInlineStart: n(991812).uE + n(991812).d_
                        },
                        height: "100%"
                    },
                    wrapperDivStyle: { ...p ? {
                            marginInlineStart: -n(991812).d_,
                            width: `calc(100% + ${n(991812).d_}px)`
                        } : {
                            paddingTop: o ? 0 : n(991812).Lc / 2,
                            paddingBottom: d ? 0 : n(991812).Lc / 2,
                            width: "100%"
                        },
                        height: "unset"
                    },
                    colorLabelContainer: {
                        display: "flex",
                        height: "100%",
                        justifyContent: "flex-end",
                        gap: p ? n(991812).Hj : 2,
                        paddingTop: n(991812).uE,
                        paddingBottom: n(991812).uE
                    },
                    eventDetailsContainer: {
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        flexWrap: "wrap",
                        alignItems: "center",
                        marginInlineStart: 12,
                        minWidth: 0,
                        minHeight: 28,
                        position: "relative"
                    },
                    hoveredContainer: {
                        background: "light" === x ? n(632079).Tj.calendarEventHoveredBackground : n(713101).$.dark.gray[300]
                    }
                }), [p, o, d, x]), S = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), [b] = (0, n(97668).Yb)(async () => "emptyTodayEventPlaceholder" === t ? void 0 : await (0, n(874809).lq)({
                    environment: m,
                    baseUrl: t.url,
                    spaceId: null == S ? void 0 : S.id,
                    from: "homeEventClick"
                }), [S, m, t]), k = function({
                    date: e,
                    event: t,
                    eventToAnalyticsStateStore: a,
                    analyticsContext: l
                }) {
                    return (0, i.useCallback)(() => {
                        if ("emptyTodayEventPlaceholder" === t || !e) return;
                        let {
                            eventIndex: i,
                            numDaysFromToday: r
                        } = (null == a ? void 0 : a.state[(0, n(399161).ft)({
                            event: t,
                            date: e
                        })]) ? ? {};
                        return {
                            eventContext: (0, n(593666).IU)({
                                event: t,
                                eventIndex: i ? ? -1,
                                numDaysInFuture: r ? ? -1
                            }),
                            calendarPanelContext: (0, n(593666).sp)({
                                panelState: l.panelState,
                                view: l.view
                            })
                        }
                    }, [e, t, a, l.panelState, l.view])
                }({
                    date: a,
                    event: t,
                    eventToAnalyticsStateStore: u,
                    analyticsContext: f
                }), M = (0, i.useCallback)(e => {
                    let i = null == b ? void 0 : b.value;
                    if ("emptyTodayEventPlaceholder" === t || !i) return;
                    let a = k();
                    a && (0, n(593666).np)({
                        environment: m,
                        target: "body",
                        ...a
                    }), (0, n(874809).J7)({
                        environment: m,
                        url: i,
                        from: "homeEventClick"
                    })
                }, [m, t, k, null == b ? void 0 : b.value]), D = (0, i.useCallback)(e => {
                    let t = k();
                    t && (0, n(593666).G7)({ ...t,
                        environment: m,
                        attachmentIndex: e.index,
                        notionBlockId: e.attachmentBlockId,
                        attachmentType: e.attachmentType
                    })
                }, [m, k]), w = (0, i.useCallback)(() => {
                    let e = k();
                    e && (0, n(593666).np)({
                        environment: m,
                        target: "conferencing",
                        ...e
                    })
                }, [m, k]), E = (0, i.useCallback)(() => {
                    let e = k();
                    e && (0, n(593666).np)({
                        environment: m,
                        target: "copy_conferencing_link",
                        ...e
                    })
                }, [m, k]);
                return (0, r.jsx)("div", {
                    style: T.wrapperDivStyle,
                    children: (0, r.jsxs)(n(988022).p, {
                        style: T.container,
                        onClick: M,
                        onMouseEnter: v,
                        onMouseLeave: y,
                        disabled: "emptyTodayEventPlaceholder" === t || !(null != b && b.value),
                        hovered: g,
                        hoveredStyle: T.hoveredContainer,
                        children: [(0, r.jsx)("div", {
                            style: T.colorLabelContainer,
                            children: (0 === l.length ? [t] : l).map((e, t) => (0, r.jsx)(n(619108).l9, {
                                event: e,
                                squashedEventIndex: t,
                                titleStartY: n(991812).rW,
                                titleEndY: n(991812).rW + n(991812).OZ
                            }, "emptyTodayEventPlaceholder" === e ? e : (0, n(399161).zS)(e)))
                        }), (0, r.jsx)("div", {
                            style: T.eventDetailsContainer,
                            children: "emptyTodayEventPlaceholder" === t ? (0, r.jsx)(n(4458).VP, {
                                justifyContent: "center",
                                height: 40,
                                children: (0, r.jsx)(n(224044).D, {
                                    styleKey: "bodyRegular",
                                    colorVariant: "tertiary",
                                    lineClamp: 1,
                                    children: (0, r.jsx)(n(109939).sA, { ...I.emptyTodayPlaceholder
                                    })
                                })
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)(C, {
                                    event: t,
                                    isCompact: c,
                                    onAttachmentClick: D
                                }), (0, r.jsx)(j, {
                                    event: t,
                                    isCompact: c,
                                    isUpcomingEvent: s,
                                    isHovering: g,
                                    onJoinConferenceClick: w,
                                    onCopyConferenceUrlClick: E
                                })]
                            })
                        })]
                    })
                })
            }

            function C(e) {
                var t;
                let {
                    event: i,
                    isCompact: o,
                    onAttachmentClick: d
                } = e, s = i.isAllDay && !o, c = (0, n(109939).tz)(), {
                    timeZone: u
                } = (0, n(591742).mn)(), g = (null == (t = i.attachments) ? void 0 : t.length) ? ? !1, h = function({
                    event: e,
                    intl: t,
                    timeZone: i,
                    isOnSameLineAsTitle: r
                }) {
                    var o;
                    let d = [e.isAllDay ? void 0 : (0, n(523144).Vj)({
                        start: e.start.dateTime,
                        end: e.end.dateTime,
                        locale: t.locale,
                        timeZone: i
                    }), [function({
                        location: e,
                        conferencingURL: t
                    }) {
                        return t && e ? e.split(", ").filter(e => e !== t).join(", ") : e
                    }({
                        location: e.location,
                        conferencingURL: null == (o = e.conferencing) ? void 0 : o.url
                    }), function(e) {
                        let t = e.conferencing;
                        if (t && t.id) return [t.providerDisplayName, n(962299).A.formatMessage(a[t.idType]), t.id].filter(Boolean).join(" ")
                    }(e)].filter(Boolean).join(", ") || void 0].filter(Boolean).join(l);
                    return r && d ? `${l}${d}` : d
                }({
                    event: i,
                    intl: c,
                    timeZone: u,
                    isOnSameLineAsTitle: s
                }), f = !g && i.isAllDay, p = (0, n(960253).I)(() => ({
                    nameTimeAndAttachmentsContainer: {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "start",
                        maxWidth: "100%",
                        minWidth: 0,
                        flexShrink: 1,
                        gap: 2 * !f,
                        paddingTop: n(991812).rW,
                        paddingBottom: n(991812).rW,
                        overflow: i.isAllDay ? "hidden" : "unset"
                    }
                }), [f, i.isAllDay]), v = (0, r.jsx)(k, {
                    event: i
                }), y = h ? (0, r.jsx)(M, {
                    height: f ? void 0 : n(991812).OZ,
                    timeString: h,
                    isSmall: !s
                }) : void 0, x = (0, r.jsx)(m, {
                    event: i,
                    onClick: d
                });
                return (0, r.jsx)("div", {
                    style: p.nameTimeAndAttachmentsContainer,
                    children: s ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsxs)(n(4458).fI, {
                            justifyContent: "flex-start",
                            maxWidth: "100%",
                            gap: 4,
                            children: [v, y]
                        }), x]
                    }) : (0, r.jsxs)(r.Fragment, {
                        children: [v, x, y]
                    })
                })
            }
            let b = {
                warningIcon: {
                    fill: n(632079).Tj.gray.background.accentSecondary,
                    marginTop: 1
                },
                xMarkCircleIcon: {
                    fill: n(632079).Tj.gray.background.accentSecondary,
                    marginTop: 1
                }
            };

            function k(e) {
                let {
                    event: t
                } = e, i = t.summary;
                i || "private" !== t.visibility || (i = (0, r.jsx)(n(109939).sA, { ...I.privateEventTitle
                }));
                let a = (0, n(964282).vZ)(t),
                    l = "outOfOffice" === t.eventType;
                return i ? (0, r.jsxs)(n(4458).fI, {
                    maxWidth: "100%",
                    alignItems: "center",
                    height: n(991812).OZ,
                    gap: 6,
                    children: [a ? (0, r.jsx)(n(16275).I, {
                        icon: n(50171).exclamationMarkTriangleSmallIcon,
                        size: "xs",
                        style: b.warningIcon
                    }) : void 0, l ? (0, r.jsx)(n(16275).I, {
                        icon: n(778765).xMarkCircleFillSmallIcon,
                        size: "xs",
                        style: b.xMarkCircleIcon
                    }) : void 0, (0, r.jsx)(n(224044).D, {
                        styleKey: "bodyMedium",
                        lineClamp: 1,
                        children: i
                    })]
                }) : null
            }

            function M({
                timeString: e,
                height: t,
                isSmall: i
            }) {
                let a = (0, n(960253).I)(() => ({
                    textContainer: {
                        height: t,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        overflow: "hidden"
                    }
                }), [t]);
                return (0, r.jsx)("div", {
                    style: a.textContainer,
                    children: (0, r.jsx)(n(224044).D, {
                        styleKey: i ? "captionRegular" : "bodyRegular",
                        colorVariant: "secondary",
                        lineClamp: 1,
                        children: e
                    })
                })
            }
            let D = (0, n(109939).YK)({
                    today: {
                        id: "notionCalendarEventDate.today",
                        defaultMessage: "Today"
                    }
                }),
                w = i.memo(function({
                    date: e,
                    isCompact: t
                }) {
                    let i = (0, n(109939).tz)(),
                        a = (0, n(132315).s5)(),
                        l = (0, n(74423).cK)(e, a),
                        o = new Date(e).toLocaleDateString(i.locale, {
                            weekday: t ? "short" : "long",
                            timeZone: "UTC"
                        }),
                        d = new Date(e).toLocaleDateString(i.locale, {
                            month: t ? "short" : "long",
                            day: "numeric",
                            timeZone: "UTC"
                        }),
                        s = (0, n(960253).I)(() => {
                            let e = {
                                color: l ? n(632079).Tj.red.text.accentPrimary : n(632079).Tj.text.tertiary,
                                fontWeight: n(699422).Wy.medium,
                                maxWidth: "100%",
                                ...n(699422).RC
                            };
                            return {
                                dateContainer: {
                                    display: "flex",
                                    alignItems: "start",
                                    overflow: "hidden",
                                    ...t ? {
                                        flexDirection: "column",
                                        maxWidth: 94,
                                        paddingInlineEnd: 16,
                                        gap: 0
                                    } : {
                                        flexDirection: "row",
                                        minWidth: 148,
                                        maxWidth: 200,
                                        paddingInlineEnd: 16,
                                        gap: 4,
                                        flexWrap: "wrap"
                                    },
                                    paddingInlineStart: 8
                                },
                                dayOfWeekString: { ...e,
                                    flexShrink: 0
                                },
                                dateString: e
                            }
                        }, [l, t]),
                        c = l ? (0, r.jsx)(n(109939).sA, { ...D.today
                        }) : o;
                    return (0, r.jsxs)("div", {
                        style: s.dateContainer,
                        children: [(0, r.jsx)(n(324489).V, {
                            isSmall: !0,
                            showTooltipWhenTruncated: !0,
                            style: s.dayOfWeekString,
                            children: c
                        }), (0, r.jsx)(n(324489).V, {
                            isSmall: !0,
                            showTooltipWhenTruncated: !0,
                            style: s.dateString,
                            children: d
                        })]
                    })
                }),
                E = {
                    container: {
                        display: "grid",
                        gridTemplateColumns: "[days] min-content [events] auto",
                        rowGap: 16,
                        paddingBottom: 12,
                        paddingTop: 3,
                        alignItems: "start"
                    },
                    dateFullHeightContainer: {
                        height: "100%"
                    },
                    dateStickyContainer: {
                        position: "sticky",
                        top: 3,
                        paddingTop: n(991812).uE + 1
                    },
                    eventListContainer: {
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        alignItems: "start",
                        paddingInlineEnd: n(991812).tM,
                        overflow: "hidden",
                        marginInlineStart: -n(991812).d_,
                        paddingInlineStart: n(991812).d_
                    }
                },
                A = i.memo(function(e) {
                    let {
                        days: t,
                        eventToAnalyticsStateStore: a,
                        isCompact: l
                    } = e, o = (0, n(132315).s5)(), {
                        zone: d
                    } = (0, n(591742).mn)(), s = (0, n(682985).K8)(() => (0, n(137683).m)().state.timeNow, []), c = (0, i.useMemo)(() => n(906745).DateTime.fromMillis(s, {
                        zone: d
                    }), [s, d]), u = (0, n(682985).K8)(() => (0, n(440143).Y)().getCurrentAccounts(), []);
                    return (0, r.jsx)("div", {
                        style: E.container,
                        children: null == t ? void 0 : t.flatMap(e => {
                            let t = (0, n(103217).xG)({
                                    day: e,
                                    now: c,
                                    timeZone: d
                                }),
                                i = (0, n(74423).cK)(e.date, o),
                                s = i ? (0, n(964282).RN)(t.filter(({
                                    baseEvent: e
                                }) => !e.isAllDay).map(e => e.baseEvent), u) : void 0;
                            return [(0, r.jsx)("div", {
                                style: E.dateFullHeightContainer,
                                children: (0, r.jsx)("div", {
                                    style: E.dateStickyContainer,
                                    children: (0, r.jsx)(w, {
                                        date: e.date,
                                        isCompact: l
                                    })
                                })
                            }, `date_${e.date}`), (0, r.jsxs)("div", {
                                style: E.eventListContainer,
                                children: [0 === t.length && i ? (0, r.jsx)(S, {
                                    event: "emptyTodayEventPlaceholder",
                                    isCompact: l
                                }) : void 0, t.map(({
                                    baseEvent: i,
                                    allSquashedEvents: o
                                }, d) => (0, r.jsx)(S, {
                                    date: e.date,
                                    eventToAnalyticsStateStore: a,
                                    isFirstEvent: 0 === d,
                                    isLastEvent: d === t.length - 1,
                                    isUpcomingEvent: (null == s ? void 0 : s.id) === i.id,
                                    isCompact: l,
                                    event: i,
                                    allSquashedEvents: o
                                }, (0, n(399161).ft)({
                                    event: i,
                                    date: e.date
                                })))]
                            }, `events_${e.date}`)]
                        })
                    })
                })
        },
        964282: (e, t, n) => {
            function i(e) {
                let t = n(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    i = e.endUnixTimestampMS ? n(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    a = n(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    l = n(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    r = t.startOf("day"),
                    o = n(906745).DateTime.max(a, r),
                    d = Math.ceil(o.diff(a, "days").get("days")),
                    s = 1;
                if (i) {
                    let e = i.endOf("day");
                    s = Math.ceil(n(906745).DateTime.min(l, e).diff(o, "days").get("days"))
                }
                return {
                    start: t,
                    end: i,
                    startOfWeek: a,
                    endOfWeek: l,
                    startColumn: d,
                    columnCount: s
                }
            }

            function a(e) {
                let t = (e.attendees || []).filter(e => !e.self && !e.resource);
                return e.hasParticipants && t.length > 0 && t.every(e => "declined" === e.responseStatus)
            }
            n.d(t, {
                Gj: () => i,
                RN: () => s,
                sM: () => c,
                sR: () => o,
                vZ: () => a,
                xy: () => u,
                y6: () => d
            }), n(944114), n(898992), n(823215), n(354520), n(672577);
            let l = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                r = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                o = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function d(e) {
                let {
                    events: t,
                    accounts: i,
                    thresholds: a = l,
                    filters: r
                } = e, o = t.filter(e => {
                    if (!e.conferencing && !(null != r && r.includeEventsWithoutConferencing)) return !1;
                    let t = i.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, n(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === o.length) return [];
                let {
                    upcomingMinsThreshold: d,
                    startingMinsThreshold: s,
                    startedMinsThreshold: c
                } = a, u = n(906745).DateTime.now(), m = (null == r ? void 0 : r.maxDaysInFuture) !== void 0 ? r.maxDaysInFuture * n(695216).XQ : void 0, g = (null == r ? void 0 : r.maxDaysInPast) !== void 0 ? r.maxDaysInPast * n(695216).XQ : void 0, h = [], f = [], p = [], v = [], y = [], x = [];
                for (let e of o) {
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
                    if (void 0 !== g && i > g) continue;
                    if (null != r && r.excludeEventsOnDifferentDays && u.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let a = t.start.diff(u, "minutes").minutes;
                    if (void 0 === m || !(a > m))
                        if (a >= 0 && a <= d) h.push(e);
                        else if (a < 0) {
                        let n = -a,
                            l = i >= 0 ? i : void 0;
                        n > 0 && n <= s ? p.push(e) : n > s && n <= c ? v.push(e) : t.contains(u) ? f.push(e) : void 0 !== g && void 0 !== l && l <= g && y.push(e)
                    } else x.push(e)
                }
                return f.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(i).toMillis()
                }), y.length > 1 && y.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(i).toMillis()
                }), [...h, ...p, ...v, ...null != r && r.excludeInProgressEvents ? [] : f, ...y, ...null != r && r.excludeUpcomingLaterEvents ? [] : x]
            }

            function s(e, t) {
                return d({
                    events: e,
                    accounts: t,
                    thresholds: l,
                    filters: void 0
                })[0]
            }

            function c(e, t, n) {
                return d({
                    events: e,
                    accounts: t,
                    thresholds: r,
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
                    l = "page" === a.name ? a.blockId : void 0;
                if (!l) return;
                let r = n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: l
                });
                return r.load(), r
            }
        },
        980400: (e, t, n) => {
            n.d(t, {
                J: () => l
            }), n(296540);
            var i = n(474848);
            let a = {
                display: "flex",
                height: 34,
                padding: "7px 0px",
                alignItems: "center",
                gap: 6,
                flex: "1 0 0"
            };

            function l(e) {
                let {
                    widthPercentage: t,
                    isInHomeWidget: l
                } = e, r = (0, n(960253).I)(() => ({
                    circleShimmer: {
                        width: l ? 12 : 16,
                        height: l ? 12 : 16,
                        flexShrink: 0,
                        borderRadius: 12,
                        backgroundColor: n(632079).Tj.background.tertiaryTranslucent
                    },
                    rowShimmer: {
                        width: t || "35%",
                        height: 10,
                        flexShrink: 0,
                        borderRadius: 12,
                        marginInlineStart: 2,
                        backgroundColor: n(632079).Tj.background.tertiaryTranslucent
                    }
                }), [t, l]);
                return (0, i.jsx)(n(4458).fI, {
                    height: 30,
                    alignItems: "center",
                    gap: 1,
                    alignSelf: "stretch",
                    children: (0, i.jsxs)("div", {
                        style: a,
                        children: [(0, i.jsx)(n(795830).P, {
                            style: r.circleShimmer
                        }), (0, i.jsx)(n(795830).P, {
                            style: r.rowShimmer
                        })]
                    })
                })
            }
        },
        991812: (e, t, n) => {
            n.d(t, {
                Hj: () => a,
                Lc: () => d,
                OZ: () => r,
                d_: () => o,
                rW: () => l,
                tM: () => s,
                uE: () => i
            });
            let i = 4,
                a = 2,
                l = 4,
                r = 20,
                o = 4,
                d = 6,
                s = 10
        }
    }
]);