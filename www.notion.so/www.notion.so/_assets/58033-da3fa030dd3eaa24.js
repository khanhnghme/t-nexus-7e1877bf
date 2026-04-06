"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [8829, 58033], {
        45053: (e, t, i) => {
            i.r(t), i.d(t, {
                googleMeetIcon: () => o,
                iconDefinition: () => r
            }), i(296540);
            var n = i(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 2.59 18.01 14.82",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            fill: "#00832D",
                            d: "m11.183 10 1.755 2.006 2.359 1.508.412-3.5-.412-3.424-2.405 1.325z"
                        }), (0, n.jsx)("path", {
                            fill: "#0066DA",
                            d: "M1 13.189v2.982c0 .682.552 1.235 1.234 1.235h2.983l.617-2.255-.617-1.962-2.047-.618z"
                        }), (0, n.jsx)("path", {
                            fill: "#E94235",
                            d: "M5.217 2.594 1 6.811l2.17.618 2.047-.618.607-1.936z"
                        }), (0, n.jsx)("path", {
                            fill: "#2684FC",
                            d: "M1 6.811h4.217v6.377H1z"
                        }), (0, n.jsx)("path", {
                            fill: "#00AC47",
                            d: "m17.991 4.38-2.694 2.21v6.924l2.705 2.218a.618.618 0 0 0 .998-.486V4.857a.617.617 0 0 0-1.009-.477M11.183 10v3.188H5.217v4.218h8.846c.682 0 1.234-.553 1.234-1.235v-2.657z"
                        }), (0, n.jsx)("path", {
                            fill: "#FFBA00",
                            d: "M14.063 2.594H5.217v4.217h5.966V10l4.114-3.41V3.83c0-.682-.552-1.235-1.234-1.235"
                        })]
                    })
                },
                o = (0, i(104509).wt)("googleMeet", r, "default")
        },
        95610: (e, t, i) => {
            i.d(t, {
                q: () => n
            });
            let n = 12
        },
        111422: (e, t, i) => {
            i.d(t, {
                N: () => a
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    motionContainer: {
                        margin: i(95610).q,
                        overflow: "visible"
                    },
                    hoverArea: {
                        padding: i(95610).q,
                        margin: `-${i(95610).q}px`
                    },
                    inlineContainer: {
                        borderRadius: 10,
                        background: i(632079).Tj.popoverBackground,
                        boxShadow: i(632079).Tj.shadow.outline.md,
                        overflow: "hidden"
                    },
                    tooltipSubtitle: {
                        color: i(632079).Tj.text.inverseSecondary
                    }
                },
                a = (0, i(153321).P)(n.forwardRef(function(e, t) {
                    let {
                        children: a,
                        activityType: s,
                        activityKey: c,
                        event: u,
                        isHovered: p,
                        setIsHovered: m,
                        width: g,
                        opacity: y,
                        disableAnimation: h = !1,
                        skipExperiment: v = !1
                    } = e, b = (0, n.useRef)(null), x = (0, i(515467).m)(), f = (0, i(682985).K8)(() => i(825244).A.getState().isVisible, []), S = (0, i(604306).r)("in_app_meeting_activity", {
                        disableExposureLogging: v || !x.botId
                    }), j = (0, i(960253).I)(() => ({
                        container: {
                            minWidth: g ? Math.min(g, 450) : "100%",
                            display: "grid",
                            gridTemplateColumns: "minmax(0, auto)",
                            gap: "2px"
                        }
                    }), [g]);
                    return !v && x.botId && "control" === S ? null : (0, r.jsx)(i(153321).P.div, {
                        initial: !h && {
                            opacity: 0,
                            y: "100%"
                        },
                        animate: {
                            opacity: y ? ? 1,
                            y: "0%"
                        },
                        exit: h ? void 0 : {
                            opacity: 0,
                            y: "100%"
                        },
                        transition: {
                            duration: .25 * !!f,
                            type: !!f && "spring",
                            bounce: 0
                        },
                        style: o.motionContainer,
                        ref: t,
                        children: (0, r.jsx)("div", {
                            style: o.inlineContainer,
                            children: (0, r.jsx)("div", {
                                style: o.hoverArea,
                                ref: b,
                                children: (0, r.jsxs)("div", {
                                    style: j.container,
                                    onMouseEnter: () => null == m ? void 0 : m(!0),
                                    onMouseOver: () => null == m ? void 0 : m(!0),
                                    onMouseLeave: () => null == m ? void 0 : m(!1),
                                    children: [a, "transcription" === s ? (0, r.jsx)(i(51831).m, {
                                        placement: "right",
                                        alignment: "start",
                                        originRectTransform: e => new DOMRect(e.x, e.y + 6, e.width, e.height),
                                        content: () => (0, r.jsxs)("div", {
                                            children: [(0, r.jsx)(i(109939).sA, { ...d.transcriptionDismissButtonTooltipTitle
                                            }), (0, r.jsx)("div", {
                                                style: o.tooltipSubtitle,
                                                children: (0, r.jsx)(i(109939).sA, { ...d.transcriptionDismissButtonTooltipSubtitle
                                                })
                                            })]
                                        }),
                                        children: e => (0, r.jsx)(l, {
                                            activityType: s,
                                            activityKey: c,
                                            event: u,
                                            isHovered: p,
                                            tooltipEvents: e
                                        })
                                    }) : (0, r.jsx)(l, {
                                        activityType: s,
                                        activityKey: c,
                                        event: u,
                                        isHovered: p
                                    })]
                                })
                            })
                        })
                    })
                })),
                s = (0, i(133251)._S)({
                    color: i(632079).Tj.background.elevated
                });

            function l(e) {
                let {
                    activityType: t,
                    activityKey: n,
                    event: o,
                    isHovered: a,
                    tooltipEvents: l
                } = e, c = (0, i(109939).tz)(), u = (0, i(533992).v3)(), p = (0, i(682985).O$)(i(984858).sidebarExpandedStore), m = (0, i(83208).X)("redesigned_meeting_notes_notifications") && "upcoming" === t, g = (0, i(960253).I)(() => ({
                    dismissButton: {
                        borderRadius: "200px",
                        border: `1px solid ${i(632079).Tj.border.primary}`,
                        background: i(632079).Tj.background.elevated,
                        position: "absolute",
                        ...m ? {
                            insetInlineStart: "-6px"
                        } : {
                            insetInlineEnd: "-6px"
                        },
                        top: "-6px",
                        opacity: +!!a,
                        visibility: a ? "visible" : "hidden",
                        pointerEvents: a ? "auto" : "none",
                        transition: "opacity 0.1s ease-in-out, visibility 0.1s ease-in-out"
                    },
                    hoveredDismissButton: {
                        background: s.hovered
                    },
                    pressedDismissButton: {
                        background: s.pressed
                    }
                }), [a, m]);
                return (0, r.jsx)(i(374533).A, { ...l,
                    style: g.dismissButton,
                    hoveredStyle: g.hoveredDismissButton,
                    pressedStyle: g.pressedDismissButton,
                    icon: i(25094).xMarkSmallIcon,
                    ariaLabel: c.formatMessage(d.dismissButtonAriaLabel),
                    onClick: e => (function(e) {
                        let {
                            e: t,
                            activityType: n,
                            activityKey: r,
                            event: o
                        } = e;
                        t.stopPropagation(), i(803236).$.addKey({
                            key: r,
                            environment: u
                        }), (0, i(104310).u)({
                            event: {
                                eventName: "in_app_meeting_notification_dismissed",
                                eventProperties: {
                                    activity_type: n,
                                    activity_key: r,
                                    reason: "dismiss_button_clicked",
                                    calendar_event_id: null == o ? void 0 : o.id,
                                    is_sidebar_expanded: p
                                }
                            }
                        })
                    })({
                        e,
                        activityType: t,
                        activityKey: n,
                        event: o
                    })
                })
            }
            let d = (0, i(109939).YK)({
                dismissButtonAriaLabel: {
                    id: "inAppActivityRenderer.dismissButton.ariaLabel",
                    defaultMessage: "Dismiss"
                },
                transcriptionDismissButtonTooltipTitle: {
                    id: "inAppActivityRenderer.transcriptionDismissButton.tooltipTitle",
                    defaultMessage: "Dismiss meeting activity"
                },
                transcriptionDismissButtonTooltipSubtitle: {
                    id: "inAppActivityRenderer.transcriptionDismissButton.tooltipSubtitle",
                    defaultMessage: "Transcription will continue on the host’s device"
                }
            })
        },
        142880: (e, t, i) => {
            i.d(t, {
                w: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.97 3.37 14.21 9.26",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M.975 5.2c0-1.008.817-1.825 1.825-1.825H10c.918 0 1.678.678 1.806 1.561v6.128A1.825 1.825 0 0 1 10 12.625H2.8A1.825 1.825 0 0 1 .975 10.8zm11.931 5.61 1.32.8a.625.625 0 0 0 .95-.535v-6.15a.625.625 0 0 0-.95-.535l-1.32.8z"
                    })
                },
                r = (0, i(104509).wt)("videoCameraFillSmall", n, "fillSmall")
        },
        218624: (e, t, i) => {
            i.d(t, {
                M: () => a
            }), i(296540);
            var n = i(474848);
            let r = (0, i(109939).YK)({
                    consentMessage: {
                        id: "meetingNotification.consentFooter.title",
                        defaultMessage: "By starting, you confirm you will collect consent from all meeting participants."
                    }
                }),
                o = {
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    overflow: "hidden"
                };

            function a({
                isPaused: e,
                textStyleKey: t,
                customBackgroundColor: s,
                gradientWidth: l,
                paddingInline: d,
                forceScroll: c
            }) {
                let u = (0, i(960253).e)(),
                    p = (0, i(960253).I)(() => {
                        let e = s ? ? ("light" === u ? i(632079).Tj.background.secondary : i(632079).Tj.background.tertiary),
                            t = t => ({
                                position: "absolute",
                                top: 0,
                                bottom: 0,
                                [t]: 0,
                                width: l ? ? 35,
                                background: `linear-gradient(to ${t}, transparent, ${e})`,
                                pointerEvents: "none"
                            });
                        return {
                            container: {
                                position: "relative",
                                width: "100%",
                                overflow: "hidden",
                                backgroundColor: e
                            },
                            consentMessage: {
                                paddingInlineStart: d ? ? 16,
                                paddingBlockEnd: 6,
                                whiteSpace: "nowrap"
                            },
                            gradientLeft: { ...t("left")
                            },
                            gradientRight: { ...t("right")
                            }
                        }
                    }, [s, l, d, u]);
                return (0, n.jsx)("div", {
                    style: p.container,
                    children: (0, n.jsxs)("div", {
                        style: o,
                        children: [(0, n.jsx)(i(218116)._, {
                            isPaused: e,
                            gap: 4,
                            forceScroll: c,
                            children: (0, n.jsx)("div", {
                                style: p.consentMessage,
                                children: (0, n.jsx)(i(111010).D, {
                                    styleKey: t ? ? "bodySmRegular",
                                    colorVariant: "secondary",
                                    children: (0, n.jsx)(i(109939).sA, { ...r.consentMessage
                                    })
                                })
                            })
                        }), (0, n.jsx)("div", {
                            style: p.gradientLeft
                        }), (0, n.jsx)("div", {
                            style: p.gradientRight
                        })]
                    })
                })
            }
        },
        248384: (e, t, i) => {
            i.d(t, {
                _9: () => u,
                Tw: () => p
            }), i(944114), i(898992), i(354520);
            var n = () => i(906745),
                r = () => i(803236);
            let o = 5 * i(695216).Xb;
            i(737550);
            let a = 2 * i(695216).Xb,
                s = [function(e) {
                    let {
                        otherEvents: t,
                        lastTranscriptionState: r,
                        primaryTranscriptionBlockStore: o,
                        event: a
                    } = e;
                    if (!o || (null == r ? void 0 : r.state) !== "transcribing" || i(769719).c.getVisibilityStatus(o.id)) return;
                    let s = i(157129).Ku.getLastEvaluatedNow();
                    if ((null == a ? void 0 : a.responseStatus) === "needsAction" && function(e) {
                            let {
                                now: t,
                                events: i
                            } = e;
                            for (let e of i) {
                                if ("accepted" !== e.responseStatus) continue;
                                let i = n().DateTime.fromISO(e.start.dateTime),
                                    r = n().DateTime.fromISO(e.end.dateTime);
                                if (t.toMillis() >= i.toMillis() && t.toMillis() <= r.toMillis()) return !0
                            }
                            return !1
                        }({
                            now: s,
                            events: t
                        })) return;
                    let l = "transcription",
                        d = u({
                            type: l,
                            primaryTranscriptionBlockStoreId: o.id
                        });
                    return {
                        type: l,
                        key: d,
                        context: e
                    }
                }, function(e) {
                    let {
                        lastTranscriptionState: t,
                        primaryTranscriptionBlockStore: r
                    } = e, a = n().DateTime.max(n().DateTime.now(), i(157129).Ku.getLastEvaluatedNow());
                    if (!r) return;
                    let s = "idle" === t.state && "summary_completed" === t.from && t.timestamp && a.diff(n().DateTime.fromMillis(t.timestamp), "milliseconds").milliseconds < o;
                    if ((null == t ? void 0 : t.state) !== "summarizing" && !s) return;
                    let l = "summarization",
                        d = u({
                            type: l,
                            primaryTranscriptionBlockStoreId: r.id
                        });
                    return {
                        type: l,
                        key: d,
                        context: e
                    }
                }, function(e) {
                    var t, r;
                    let {
                        event: o,
                        otherEvents: s,
                        primaryTranscriptionBlockStore: l,
                        reason: d
                    } = e, c = n().DateTime.max(n().DateTime.now(), i(157129).Ku.getLastEvaluatedNow());
                    if (i(218744).default.checkGate({
                            gateName: "disable_in_app_meeting_activity_umn"
                        }) || "LOADING" === d || !o || "accepted" !== o.responseStatus && s.some(e => !e.isAllDay && e.start.dateTime === o.start.dateTime && "accepted" === e.responseStatus)) return;
                    let p = n().DateTime.fromISO(o.start.dateTime),
                        m = n().DateTime.fromISO(o.end.dateTime);
                    if (0 === ((null == (t = o.attendees) ? void 0 : t.filter(e => !e.self).length) ? ? 0) || !(p.diff(c, "minutes").minutes <= 1)) return;
                    let g = m.diff(c, "minutes").minutes < 10,
                        y = m.diff(p, "minutes").minutes <= 10;
                    if (g || y) return;
                    let h = (null == l || null == (r = l.getFormat()) ? void 0 : r.transcription_state_history) ? ? [],
                        v = [];
                    for (let e = 0; e < h.length; e++) {
                        let t = h[e];
                        if ("transcribing" !== t.state) continue;
                        let i = h[e + 1];
                        i && (i.timestamp - t.timestamp < a || v.push({
                            startTimestamp: t.timestamp,
                            endTimestamp: i.timestamp
                        }))
                    }
                    if (v.some(({
                            startTimestamp: e,
                            endTimestamp: t
                        }) => e >= p.toMillis() && t <= m.toMillis())) return;
                    let b = "upcoming",
                        x = u({
                            type: b,
                            event: o
                        });
                    return {
                        type: b,
                        key: x,
                        context: { ...e,
                            event: o
                        }
                    }
                }];

            function l(e) {
                switch (e) {
                    case "accepted":
                        return 4;
                    case "tentative":
                        return 3;
                    case "needsAction":
                        return 2;
                    case "declined":
                        return 1;
                    default:
                        return 0
                }
            }

            function d(e) {
                switch (e) {
                    case "transcription":
                        return 3;
                    case "summarization":
                        return 2;
                    case "upcoming":
                        return 1;
                    default:
                        return 0
                }
            }
            let c = {
                transcription: e => {
                    var t;
                    return (null == (t = e.context.lastTranscriptionState) ? void 0 : t.timestamp) ? ? 0
                },
                summarization: e => {
                    var t;
                    return (null == (t = e.context.lastTranscriptionState) ? void 0 : t.timestamp) ? ? 0
                },
                upcoming: e => e.context.event ? n().DateTime.fromISO(e.context.event.start.dateTime).toMillis() : 0
            };

            function u(e) {
                let {
                    type: t
                } = e;
                switch (t) {
                    case "upcoming":
                        let {
                            event: n
                        } = e;
                        return `${t}/${n.id}/${n.start.dateTime}`;
                    case "transcription":
                        {
                            let {
                                primaryTranscriptionBlockStoreId: i
                            } = e;
                            return `${t}/${i}`
                        }
                    case "summarization":
                        {
                            let {
                                primaryTranscriptionBlockStoreId: i
                            } = e;
                            return `${t}/${i}`
                        }
                    default:
                        (0, i(722371).HB)(t)
                }
            }

            function p(e) {
                var t;
                let n = i(672935).w.getState(),
                    o = (0, i(787971).AD)(),
                    a = null == (t = i(728372).AppStoreSidebarSpaceViewStore.getState()) ? void 0 : t.getDisabledInAppMeetingActivityStages(),
                    u = [];
                if (e) {
                    let t = (0, i(869708).u7)(e);
                    t && u.push({
                        event: void 0,
                        otherEvents: [],
                        primaryTranscriptionBlockStore: e,
                        lastTranscriptionState: t,
                        liveTranscriptionBlockStores: [e],
                        reason: "ACTIVE_NON_CAL_EVENT_LINKED_TRANSCRIPTION_BLOCK"
                    })
                }
                for (let e of n) {
                    let t = {
                        event: e,
                        otherEvents: n.filter(t => t !== e),
                        ...o[e.id] ? ? {}
                    };
                    u.push(t)
                }
                let p = [];
                for (let e of u)
                    for (let t of s) {
                        let i = t(e);
                        if (i && (null == a || !a[i.type]) && !r().$.isKeyPresent(i.key)) {
                            p.push(i);
                            break
                        }
                    }
                return function(e) {
                    var t, n, r;
                    let o, a = i(728372).AppStoreSidebarSpaceStore.getState();
                    if (e) {
                        switch (e.type) {
                            case "upcoming":
                                o = {
                                    type: "upcoming",
                                    key: e.key,
                                    context: {
                                        event: e.context.event,
                                        primaryTranscriptionBlockPointer: null == (t = e.context.primaryTranscriptionBlockStore) ? void 0 : t.pointer
                                    }
                                };
                                break;
                            case "transcription":
                                {
                                    let t = e.context.lastTranscriptionState,
                                        r = null == (n = e.context.primaryTranscriptionBlockStore.getFormat()) ? void 0 : n.transcription_state_history;
                                    if ("transcribing" !== t.state || !a || !r) break;o = {
                                        type: "transcription",
                                        key: e.key,
                                        context: {
                                            event: e.context.event,
                                            primaryTranscriptionBlockPointer: e.context.primaryTranscriptionBlockStore.pointer,
                                            currentTranscriptionState: t,
                                            transcriptionStateHistory: r,
                                            transcriber: {
                                                id: t.transcriber_id,
                                                name: i(807825).L.createChildStore(a, {
                                                    table: t.transcriber_table,
                                                    id: t.transcriber_id
                                                }).getDisplayName(i(962299).A.getIntl())
                                            }
                                        }
                                    };
                                    break
                                }
                            case "summarization":
                                if (!e.context.lastTranscriptionState) break;
                                switch (null == (r = e.context.lastTranscriptionState) ? void 0 : r.state) {
                                    case "summarizing":
                                        o = {
                                            type: "summarization",
                                            key: e.key,
                                            context: {
                                                event: e.context.event,
                                                primaryTranscriptionBlockPointer: e.context.primaryTranscriptionBlockStore.pointer,
                                                currentTranscriptionState: e.context.lastTranscriptionState
                                            }
                                        };
                                        break;
                                    case "idle":
                                        o = {
                                            type: "summary_complete",
                                            key: e.key,
                                            context: {
                                                event: e.context.event,
                                                primaryTranscriptionBlockPointer: e.context.primaryTranscriptionBlockStore.pointer,
                                                currentTranscriptionState: e.context.lastTranscriptionState
                                            }
                                        }
                                }
                        }
                        return o
                    }
                }(function(e) {
                    if (0 !== e.length) return e.sort((e, t) => {
                        var i, n;
                        let r = l(null == (i = e.context.event) ? void 0 : i.responseStatus),
                            o = l(null == (n = t.context.event) ? void 0 : n.responseStatus);
                        if (o !== r) return o - r;
                        let a = d(e.type),
                            s = d(t.type);
                        if (s !== a) return s - a;
                        let u = c[e.type];
                        return u(t) - u(e)
                    }), e[0]
                }(p))
            }
        },
        308211: (e, t, i) => {
            i.d(t, {
                U: () => r
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3 3 10 10",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M11.75 3h-7.5C3.56 3 3 3.56 3 4.25v7.5c0 .69.56 1.25 1.25 1.25h7.5c.69 0 1.25-.56 1.25-1.25v-7.5C13 3.56 12.44 3 11.75 3"
                    })
                },
                r = (0, i(104509).wt)("mediaStopFillSmall", n, "fillSmall")
        },
        313580: (e, t, i) => {
            i.d(t, {
                B: () => l
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.52 1.61 14.92 13",
                    svg: (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)("path", {
                            d: "M14.301 9.042a.625.625 0 0 1 1.029.711 5.4 5.4 0 0 1-3.819 2.294v1.309h2.617l.126.012a.626.626 0 0 1 0 1.225l-.127.013h-6.48a.626.626 0 0 1 0-1.25h2.614v-1.308a5.4 5.4 0 0 1-3.626-2.037l-.19-.258-.06-.111a.626.626 0 0 1 1.007-.696l.082.096.146.2a4.14 4.14 0 0 0 3.267 1.593 4.14 4.14 0 0 0 3.414-1.793m-8.673-.334a1.5 1.5 0 0 0-.06 1.25H1.187a.626.626 0 1 1 0-1.25z"
                        }), (0, r.jsx)("path", {
                            d: "M10.886 1.615a2.425 2.425 0 0 1 2.425 2.425v3.28a2.425 2.425 0 1 1-4.85 0V4.04a2.426 2.426 0 0 1 2.425-2.425m0 1.25c-.648 0-1.174.526-1.174 1.175v3.28a1.176 1.176 0 0 0 2.35 0V4.04a1.176 1.176 0 0 0-1.176-1.175M7.587 7.292H1.186a.626.626 0 0 1 0-1.25h6.4zm.177-3.917a3.3 3.3 0 0 0-.177 1.065v.185H1.186a.626.626 0 1 1 0-1.25z"
                        })]
                    })
                },
                a = (0, i(104509).wt)("microphoneTextSmall", o, "small");

            function s({
                event: e
            }) {
                if (!("dateTime" in e.start && "dateTime" in e.end)) return null;
                let t = i(906745).DateTime.fromISO(e.start.dateTime),
                    n = i(906745).DateTime.fromISO(e.end.dateTime),
                    o = (0, i(523144).zw)({
                        startTime: t,
                        endTime: n
                    });
                return (0, r.jsx)(i(111010).D, {
                    styleKey: "captionRegular",
                    colorVariant: "tertiary",
                    children: o
                })
            }

            function l(e) {
                return e.isRedesign ? (0, r.jsx)(c, { ...e
                }) : (0, r.jsx)(g, { ...e
                })
            }
            let d = {
                contentArea: {
                    paddingBlock: 8,
                    paddingInline: 16
                },
                iconContainer: {
                    flexShrink: 0,
                    width: 36,
                    height: 36,
                    marginInlineStart: -2
                },
                contentContainer: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    flex: 1,
                    minWidth: 0,
                    overflow: "hidden",
                    marginBlockStart: -4
                },
                titleContainer: {
                    color: i(632079).Tj.text.primary
                },
                bodyRow: {
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    color: i(632079).Tj.text.secondary
                },
                nowIndicator: {
                    color: i(632079).Tj.red.text.secondary
                },
                buttonContainer: {
                    flexShrink: 0
                },
                consentFooter: {
                    marginBlockEnd: -1
                }
            };

            function c(e) {
                var t;
                let n = (0, i(109939).tz)(),
                    {
                        event: o,
                        isHovered: a,
                        isPerformingTranscriptionAction: s,
                        buildMenuSections: l,
                        handleTranscribeButtonClick: c,
                        handleEventCellClick: u
                    } = e,
                    p = !!(null == (t = o.conferencing) ? void 0 : t.url),
                    m = (0, i(523144).Vj)({
                        start: o.start.dateTime,
                        end: o.end.dateTime,
                        locale: i(849917).locale,
                        timeZone: (0, i(714350).P)()
                    }).replaceAll(" ", " ");
                return (0, r.jsxs)(i(4458).VP, {
                    width: "100%",
                    children: [(0, r.jsx)("div", {
                        style: d.contentArea,
                        children: (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 16,
                            children: [(0, r.jsx)("div", {
                                style: d.iconContainer,
                                children: (0, r.jsx)(v, {
                                    conferencing: o.conferencing,
                                    size: 36
                                })
                            }), (0, r.jsxs)("div", {
                                style: d.contentContainer,
                                role: "button",
                                tabIndex: 0,
                                onClick: () => {
                                    u && u(o)
                                },
                                children: [(0, r.jsx)("div", {
                                    style: d.titleContainer,
                                    children: (0, r.jsx)(i(218116)._, {
                                        isPaused: !a,
                                        showFadeout: !0,
                                        customFadeoutColor: i(632079).Tj.popoverBackground,
                                        cycleLimit: 2,
                                        children: (0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyMedium",
                                            style: {
                                                textOverflow: "clip"
                                            },
                                            children: o.summary
                                        })
                                    })
                                }), (0, r.jsx)("div", {
                                    style: d.bodyRow,
                                    children: (0, r.jsx)(i(111010).D, {
                                        styleKey: "bodySmRegular",
                                        style: {
                                            textOverflow: "clip"
                                        },
                                        children: (0, r.jsx)(i(109939).sA, {
                                            id: "meetingActivityUpcomingStageCard.timeRange",
                                            defaultMessage: "<nowIndicator>Now</nowIndicator> {timeRange}",
                                            values: {
                                                nowIndicator: e => (0, r.jsx)("span", {
                                                    style: d.nowIndicator,
                                                    children: e
                                                }),
                                                timeRange: m
                                            }
                                        })
                                    })
                                })]
                            }), (0, r.jsx)("div", {
                                style: d.buttonContainer,
                                children: (0, r.jsx)(i(656252).A, {
                                    popupType: i(656252).z.Popup,
                                    originGap: 4,
                                    placementToOrigin: "right",
                                    alignmentToOrigin: "end",
                                    content: e => (0, r.jsx)(i(747369).A, {
                                        menuType: i(649476).gu.Popup,
                                        minWidth: 240,
                                        children: (0, r.jsx)(i(558045).A, {
                                            type: i(558045).O.Vertical,
                                            sections: l ? l(e) : [],
                                            initialFocus: void 0,
                                            resetFocusOnMouseOut: !0
                                        })
                                    }),
                                    children: e => (0, r.jsx)(i(322354).I, {
                                        size: "md",
                                        color: "blue",
                                        title: (0, r.jsx)(i(111010).D, {
                                            styleKey: "bodyMedium",
                                            children: (0, r.jsx)(i(109939).sA, { ...p ? b.joinAndTranscribe : b.transcribe
                                            })
                                        }),
                                        disabled: s,
                                        disableDropdown: s,
                                        onClick: c,
                                        onDropdownClick: t => {
                                            t.preventDefault(), t.stopPropagation(), e.onClick(t)
                                        },
                                        dropdownAriaLabel: n.formatMessage({
                                            id: "inAppActivityRenderer.meetingActivityUpcomingStage.dropdownAriaLabel",
                                            defaultMessage: "More transcription options"
                                        })
                                    })
                                })
                            })]
                        })
                    }), (0, r.jsx)(i(203066).N, {
                        children: a ? (0, r.jsx)(i(153321).P.div, {
                            style: d.consentFooter,
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: 28
                            },
                            exit: {
                                height: 0
                            },
                            transition: {
                                duration: .2,
                                type: "spring",
                                bounce: 0
                            },
                            children: (0, r.jsx)(i(218624).M, {
                                isPaused: !a,
                                textStyleKey: "captionRegular",
                                gradientWidth: 22,
                                paddingInline: 16,
                                forceScroll: !0
                            })
                        }) : void 0
                    })]
                })
            }
            let u = {
                    width: "100%"
                },
                p = {
                    flex: 1
                },
                m = {
                    marginTop: 8
                };

            function g(e) {
                var t;
                let o = (0, i(109939).tz)(),
                    {
                        event: a,
                        transcriptionBlockStore: s,
                        isPerformingTranscriptionAction: l,
                        buildMenuSections: d,
                        handleTranscribeButtonClick: c,
                        handleEventCellClick: g
                    } = e,
                    [y, v] = (0, n.useState)(!1),
                    x = !!(null == (t = a.conferencing) ? void 0 : t.url);
                return (0, r.jsxs)(i(4458).VP, {
                    width: "100%",
                    padding: 8,
                    children: [(0, r.jsx)(h, {
                        event: a,
                        transcriptionBlockStore: s,
                        isPerformingTranscriptionAction: l,
                        handleEventCellClick: g
                    }), (0, r.jsx)(i(203066).N, {
                        children: y ? (0, r.jsx)(i(153321).P.div, {
                            layout: !0,
                            initial: {
                                height: 0
                            },
                            animate: {
                                height: 28
                            },
                            exit: {
                                height: 0
                            },
                            transition: {
                                duration: .2,
                                type: "spring",
                                bounce: 0
                            },
                            children: (0, r.jsx)(i(218624).M, {
                                isPaused: !y,
                                textStyleKey: "captionRegular",
                                customBackgroundColor: i(632079).Tj.popoverBackground,
                                gradientWidth: 22,
                                paddingInline: 6
                            })
                        }) : void 0
                    }), (0, r.jsx)("div", {
                        onMouseEnter: () => v(!0),
                        onMouseLeave: () => v(!1),
                        style: m,
                        children: (0, r.jsx)(i(656252).A, {
                            popupType: i(656252).z.Popup,
                            originGap: 4,
                            placementToOrigin: "right",
                            alignmentToOrigin: "end",
                            content: e => (0, r.jsx)(i(747369).A, {
                                menuType: i(649476).gu.Popup,
                                minWidth: 240,
                                children: (0, r.jsx)(i(558045).A, {
                                    type: i(558045).O.Vertical,
                                    sections: d ? d(e) : [],
                                    initialFocus: void 0,
                                    resetFocusOnMouseOut: !0
                                })
                            }),
                            onClose: () => v(!1),
                            children: e => (0, r.jsx)(i(322354).I, {
                                style: u,
                                mainButtonStyle: p,
                                size: "lg",
                                color: "blue",
                                title: (0, r.jsx)(i(111010).D, {
                                    styleKey: "bodyMedium",
                                    children: (0, r.jsx)(i(109939).sA, { ...x ? b.joinAndTranscribe : b.transcribe
                                    })
                                }),
                                disabled: l,
                                disableDropdown: l,
                                onClick: c,
                                onDropdownClick: t => {
                                    t.preventDefault(), t.stopPropagation(), v(!0), e.onClick(t)
                                },
                                dropdownAriaLabel: o.formatMessage({
                                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.dropdownAriaLabel",
                                    defaultMessage: "More transcription options"
                                })
                            })
                        })
                    })]
                })
            }
            let y = {
                eventCell: {
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    height: "auto",
                    gap: 12,
                    padding: 6,
                    borderRadius: 6
                },
                hoveredEventCell: {
                    background: i(632079).Tj.state.hover
                },
                eventContent: {
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    padding: "4px 0",
                    minWidth: 0
                },
                eventConferencingIconContainer: {
                    display: "grid",
                    placeContent: "center",
                    flexShrink: 0,
                    width: 16,
                    height: 16
                },
                truncateTextContainer: {
                    flex: 1,
                    minWidth: 0
                }
            };

            function h(e) {
                let t = (0, i(109939).tz)(),
                    {
                        event: n,
                        transcriptionBlockStore: o,
                        isPerformingTranscriptionAction: l,
                        handleEventCellClick: d
                    } = e;
                return (0, r.jsxs)(i(988022).p, {
                    style: y.eventCell,
                    hoveredStyle: l ? void 0 : y.hoveredEventCell,
                    disabled: l,
                    onClick: () => {
                        d && d(n)
                    },
                    children: [(0, r.jsx)(i(533422).Y, {
                        event: n
                    }), (0, r.jsxs)("div", {
                        style: y.eventContent,
                        children: [(0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            minWidth: 0,
                            children: [n.conferencing ? (0, r.jsx)("div", {
                                style: y.eventConferencingIconContainer,
                                children: (0, r.jsx)(v, {
                                    conferencing: n.conferencing
                                })
                            }) : void 0, (0, r.jsx)("div", {
                                style: y.truncateTextContainer,
                                children: (0, r.jsx)(i(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    style: {
                                        textOverflow: "ellipsis"
                                    },
                                    children: n.summary
                                })
                            })]
                        }), (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            children: [(0, r.jsx)(i(579961).z, {
                                event: n
                            }), (0, r.jsx)(s, {
                                event: n
                            })]
                        }), o ? (0, r.jsxs)(i(4458).fI, {
                            alignItems: "center",
                            gap: 4,
                            minWidth: 0,
                            children: [(0, r.jsx)(i(16275).I, {
                                icon: a,
                                size: "xs",
                                colorVariant: "secondary"
                            }), (0, r.jsx)("div", {
                                style: y.truncateTextContainer,
                                children: (0, r.jsx)(i(111010).D, {
                                    styleKey: "captionRegular",
                                    colorVariant: "secondary",
                                    style: {
                                        textOverflow: "ellipsis"
                                    },
                                    children: (0, r.jsx)(i(627918).A, {
                                        store: o,
                                        placeholder: t.formatMessage(b.meetingNoteTitlePlaceholder),
                                        shouldWrap: !1,
                                        maxLines: 1
                                    })
                                })
                            })]
                        }) : void 0]
                    })]
                })
            }

            function v(e) {
                let {
                    conferencing: t,
                    size: n = 16
                } = e, {
                    providerName: o
                } = t || {};
                return "googleMeet" === o ? n > 16 ? (0, i(45053).googleMeetIcon)({
                    width: n,
                    height: n
                }) : (0, r.jsx)(i(16275).I, {
                    icon: i(45053).googleMeetIcon,
                    size: "sm"
                }) : "zoom" === o ? n > 16 ? (0, i(631889).H)({
                    width: n,
                    height: n
                }) : (0, r.jsx)(i(16275).I, {
                    icon: i(631889).H,
                    size: "sm"
                }) : (0, r.jsx)(i(16275).I, {
                    icon: i(142880).w,
                    size: n > 16 ? n : "sm",
                    colorPalette: "blue",
                    colorVariant: "accentPrimary"
                })
            }
            let b = (0, i(109939).YK)({
                meetingNoteTitlePlaceholder: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.meetingNoteTitlePlaceholder",
                    defaultMessage: "Meeting Note"
                },
                transcribe: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.transcribe",
                    defaultMessage: "Transcribe"
                },
                joinAndTranscribe: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.joinAndTranscribe",
                    defaultMessage: "Join and transcribe"
                }
            })
        },
        322354: (e, t, i) => {
            i.d(t, {
                I: () => o
            });
            var n = i(296540),
                r = i(474848);
            let o = n.memo(n.forwardRef(function(e, t) {
                    let {
                        style: n,
                        color: o,
                        title: a,
                        onClick: d,
                        onDropdownClick: c,
                        mainButtonTooltip: u,
                        dropdownTooltip: p,
                        dropdownAriaLabel: m,
                        iconLeading: g,
                        iconStyle: y,
                        isCompactDropdownIcon: h,
                        mainButtonStyle: v,
                        isLoading: b,
                        className: x,
                        disabled: f,
                        disableDropdown: S,
                        size: j,
                        variant: T = "solid"
                    } = e, k = (0, i(960253).I)(() => {
                        let e = (0, i(399411).qq)({
                            size: j,
                            isButtonGapEnabled: !1
                        });
                        return {
                            wrap: {
                                position: "relative",
                                display: "inline-flex",
                                flexShrink: 0,
                                height: e.height,
                                ...n
                            },
                            border: {
                                position: "absolute",
                                pointerEvents: "none",
                                border: "outline" === T ? `1px solid ${i(632079).Tj.border.primaryTranslucent}` : void 0,
                                borderRadius: e.borderRadius,
                                top: 0,
                                insetInlineStart: 0,
                                insetInlineEnd: 0,
                                bottom: 0
                            }
                        }
                    }, [j, T, n]);
                    return (0, r.jsxs)("div", {
                        style: k.wrap,
                        className: x,
                        children: [(0, r.jsx)(s, {
                            ref: t,
                            color: o,
                            disabled: f,
                            disableDropdown: S,
                            iconLeading: g,
                            iconStyle: y,
                            isLoading: b,
                            mainButtonStyle: v,
                            mainButtonTooltip: u,
                            onClick: d,
                            title: a,
                            variant: T
                        }), (0, r.jsx)(l, {
                            ref: t,
                            color: o,
                            disabled: S,
                            dropdownAriaLabel: m,
                            isCompactDropdownIcon: h,
                            dropdownTooltip: p,
                            isLoading: b,
                            onDropdownClick: c,
                            variant: T
                        }), (0, r.jsx)("div", {
                            style: k.border
                        })]
                    })
                })),
                a = {
                    marginInlineEnd: 4
                },
                s = n.memo(n.forwardRef(function(e, t) {
                    let {
                        mainButtonTooltip: n,
                        onClick: o,
                        disabled: s,
                        disableDropdown: l,
                        isLoading: u,
                        iconLeading: p,
                        title: m,
                        color: g,
                        variant: y,
                        mainButtonStyle: h,
                        iconStyle: v,
                        size: b
                    } = e, x = (0, i(960253).e)(), f = (0, i(960253).I)(() => {
                        let e = (0, i(399411).qq)({
                                size: b,
                                isButtonGapEnabled: !1
                            }),
                            t = c({
                                color: g,
                                variant: y,
                                themeMode: x
                            });
                        return {
                            mainButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                whiteSpace: "nowrap",
                                borderStartStartRadius: e.borderRadius,
                                borderEndStartRadius: e.borderRadius,
                                borderStartEndRadius: l ? e.borderRadius : void 0,
                                borderEndEndRadius: l ? e.borderRadius : void 0,
                                paddingInlineStart: e.paddingInlineStart,
                                paddingInlineEnd: e.paddingInlineEnd,
                                fontSize: e.fontSize,
                                fontWeight: i(699422).Wy.medium,
                                ...t.default,
                                ...h
                            },
                            icon: {
                                width: 12,
                                marginInlineEnd: 6,
                                fill: d(g, y, {
                                    outline: t.default.color,
                                    solid: {
                                        blue: i(632079).oZ.white,
                                        black: i(632079).oZ.white,
                                        orange: i(632079).Tj.palette.orange[400]
                                    }
                                }),
                                ...v
                            },
                            buttonHoveredStyle: t.hovered,
                            buttonPressedStyle: t.pressed
                        }
                    }, [g, l, v, h, b, y, x]);
                    return n ? (0, r.jsx)(i(51831).m, {
                        content: () => n,
                        children: e => (0, r.jsxs)(i(64960).Ay, {
                            ref: t,
                            style: f.mainButton,
                            onClick: o,
                            disabled: s,
                            disabledFeedback: !0,
                            hoveredStyle: f.buttonHoveredStyle,
                            pressedStyle: f.buttonPressedStyle,
                            ...e,
                            children: [p ? p(f.icon) : null, m]
                        })
                    }) : (0, r.jsxs)(i(64960).Ay, {
                        ref: t,
                        style: f.mainButton,
                        onClick: o,
                        disabled: s || u,
                        disabledFeedback: !0,
                        hoveredStyle: f.buttonHoveredStyle,
                        pressedStyle: f.buttonPressedStyle,
                        children: [u ? (0, r.jsx)(i(517334).k, {
                            style: a
                        }) : null, p ? p(f.icon) : null, m]
                    })
                })),
                l = n.memo(n.forwardRef(function(e, t) {
                    let {
                        disableDropdown: o,
                        disabled: a,
                        dropdownAriaLabel: s,
                        isCompactDropdownIcon: l,
                        dropdownTooltip: u,
                        onDropdownClick: p,
                        isLoading: m,
                        size: g,
                        color: y,
                        variant: h
                    } = e, v = (0, i(960253).e)(), b = (0, i(960253).I)(() => {
                        let e = (0, i(399411).qq)({
                                size: g,
                                isButtonGapEnabled: !1
                            }),
                            t = c({
                                color: y,
                                variant: h,
                                themeMode: v
                            });
                        return {
                            dropdownButton: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                width: i(986939).A.isMobile ? 28 : 24,
                                alignSelf: "stretch",
                                borderStartEndRadius: e.borderRadius,
                                borderEndEndRadius: e.borderRadius,
                                boxShadow: "outline" === h || "blue" === y || "black" === y ? `inset 1px 0 0 ${i(632079).Tj.border.primaryTranslucent}` : "orange" === y ? `${i(632079).Tj.palette.orange["dark"===v?200:100]} 1px 0 0 inset` : (0, i(722371).HB)(y),
                                ...t.default
                            },
                            dropdownButtonIcon: {
                                marginTop: l && !i(986939).A.isMobile ? 1 : 2,
                                fill: d(y, h, {
                                    outline: t.default.color,
                                    solid: {
                                        blue: i(632079).oZ.white,
                                        black: i(632079).oZ.white,
                                        orange: i(632079).Tj.palette.orange["dark" === v ? 500 : 400]
                                    }
                                }),
                                ...l && !i(986939).A.isMobile && {
                                    width: 14
                                }
                            },
                            buttonHoveredStyle: t.hovered,
                            buttonPressedStyle: t.pressed
                        }
                    }, [y, l, g, h, v]), x = (0, n.useCallback)(e => (0, r.jsx)(i(64960).Ay, {
                        ref: t,
                        style: b.dropdownButton,
                        onClick: p,
                        disabledFeedback: !0,
                        hoveredStyle: b.buttonHoveredStyle,
                        pressedStyle: b.buttonPressedStyle,
                        ariaLabel: s,
                        ...e,
                        children: (0, r.jsx)(i(16275).I, {
                            icon: l ? i(595453).arrowChevronSingleDownSmallIcon : i(986939).A.isMobile ? i(469102).arrowChevronSingleDownFillSmallIcon : i(36663).arrowChevronSingleDownFillIcon,
                            size: "sm",
                            style: b.dropdownButtonIcon
                        })
                    }), [s, l, p, t, b.buttonHoveredStyle, b.buttonPressedStyle, b.dropdownButton, b.dropdownButtonIcon]), f = (0, n.useCallback)(() => u, [u]);
                    return o || a ? null : u ? (0, r.jsx)(i(51831).m, {
                        content: f,
                        children: x
                    }) : (0, r.jsx)(i(64960).Ay, {
                        ref: t,
                        style: b.dropdownButton,
                        onClick: p,
                        disabledFeedback: !0,
                        hoveredStyle: b.buttonHoveredStyle,
                        pressedStyle: b.buttonPressedStyle,
                        disabled: m,
                        ariaLabel: s,
                        children: (0, r.jsx)(i(16275).I, {
                            icon: l ? i(595453).arrowChevronSingleDownSmallIcon : i(986939).A.isMobile ? i(469102).arrowChevronSingleDownFillSmallIcon : i(36663).arrowChevronSingleDownFillIcon,
                            size: "sm",
                            style: b.dropdownButtonIcon
                        })
                    })
                }));

            function d(e, t, i) {
                return "object" != typeof i[t] ? i[t] : i[t][e]
            }

            function c(e) {
                let {
                    color: t,
                    variant: n,
                    themeMode: r
                } = e, o = "dark" === r ? "lighten" : "darken";
                return {
                    default: {
                        background: d(t, n, {
                            outline: void 0,
                            solid: {
                                blue: i(632079).Tj.blue.background.accentPrimary,
                                black: i(632079).Tj.background.accentPrimary,
                                orange: i(632079).Tj.orange.background.secondaryTranslucent
                            }
                        }),
                        color: d(t, n, {
                            outline: {
                                blue: i(632079).Tj.blue.text.accentPrimary,
                                black: i(632079).Tj.text.primary,
                                orange: i(632079).Tj.orange.text.accentPrimary
                            },
                            solid: {
                                blue: i(632079).Tj.blue.text.inversePrimary,
                                black: i(632079).Tj.text.inversePrimary,
                                orange: i(632079).Tj.orange.text.accentPrimary
                            }
                        })
                    },
                    hovered: {
                        background: d(t, n, {
                            outline: {
                                blue: i(632079).Tj.blue.background.secondaryTranslucent,
                                black: i(632079).Tj.gray.background.secondaryTranslucent,
                                orange: i(632079).Tj.orange.background.secondaryTranslucent
                            },
                            solid: {
                                blue: (0, i(133251).RO)({
                                    color: i(632079).Tj.blue.background.accentPrimary,
                                    adjustmentDirection: o
                                }),
                                black: (0, i(133251).RO)({
                                    color: i(632079).Tj.background.accentPrimary,
                                    adjustmentDirection: "lighten"
                                }),
                                orange: (0, i(133251).RO)({
                                    color: i(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: o
                                })
                            }
                        })
                    },
                    pressed: {
                        background: d(t, n, {
                            outline: {
                                blue: (0, i(133251).yZ)({
                                    color: i(632079).Tj.blue.background.secondaryTranslucent,
                                    adjustmentDirection: o
                                }),
                                black: (0, i(133251).yZ)({
                                    color: i(632079).Tj.gray.background.secondaryTranslucent,
                                    adjustmentDirection: o
                                }),
                                orange: (0, i(133251).yZ)({
                                    color: i(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: o
                                })
                            },
                            solid: {
                                blue: (0, i(133251).yZ)({
                                    color: i(632079).Tj.blue.background.accentPrimary,
                                    adjustmentDirection: o
                                }),
                                black: (0, i(133251).yZ)({
                                    color: i(632079).Tj.background.accentPrimary,
                                    adjustmentDirection: "lighten"
                                }),
                                orange: (0, i(133251).yZ)({
                                    color: i(632079).Tj.orange.background.secondaryTranslucent,
                                    adjustmentDirection: o
                                })
                            }
                        })
                    }
                }
            }
        },
        423042: (e, t, i) => {
            i.d(t, {
                n: () => l
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    secondaryContent: {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch",
                        gap: 2,
                        height: 38,
                        paddingTop: 0,
                        paddingInlineEnd: 4,
                        paddingInlineStart: 4,
                        overflow: "hidden"
                    },
                    hoveredSecondaryContent: {
                        background: "transparent"
                    },
                    pressedSecondaryContent: {
                        background: "transparent"
                    },
                    hoveredTitle: {
                        textDecoration: "underline"
                    },
                    primaryContent: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        height: 28,
                        background: i(632079).Tj.popoverBackground
                    },
                    duration: {
                        textAlign: "end",
                        marginInlineEnd: 4,
                        userSelect: "none",
                        fontVariantNumeric: "tabular-nums"
                    },
                    stopButton: {
                        width: 28,
                        height: 28,
                        borderRadius: "50%",
                        background: i(632079).Tj.red.background.secondaryTranslucent
                    }
                },
                a = (0, i(64960)._S)({
                    color: i(632079).Tj.red.background.secondaryTranslucent
                }),
                s = {
                    hoveredStopButton: {
                        background: a.hovered
                    },
                    pressedStopButton: {
                        background: a.pressed
                    }
                };

            function l(e) {
                let {
                    title: t,
                    transcriptionBlockStoreId: a,
                    transcriptionDuration: l,
                    transcriberName: c,
                    isSelfTranscribing: u,
                    isHovered: p,
                    shouldShowParticipantExpansion: m,
                    participants: g,
                    disableAnimation: y = !1,
                    handleSecondaryContentClick: h,
                    handleStopButtonClick: v
                } = e, b = (0, i(109939).tz)(), x = (0, i(960253).e)(), [f, S] = (0, n.useState)(!1);
                return (0, r.jsxs)(i(4458).VP, {
                    width: "100%",
                    padding: 10,
                    children: [(0, r.jsx)(i(203066).N, {
                        mode: "wait",
                        children: p || m ? (0, r.jsx)(i(153321).P.div, {
                            layout: "position",
                            initial: !y && {
                                height: 0,
                                opacity: 0
                            },
                            animate: {
                                height: o.secondaryContent.height + 8,
                                opacity: 1
                            },
                            exit: y ? void 0 : {
                                height: 0,
                                opacity: 0
                            },
                            transition: {
                                duration: .2,
                                type: !y && "spring",
                                bounce: 0
                            },
                            children: (0, r.jsxs)(i(988022).p, {
                                style: o.secondaryContent,
                                hoveredStyle: o.hoveredSecondaryContent,
                                pressedStyle: o.pressedSecondaryContent,
                                onClick: h,
                                children: [(0, r.jsx)(i(111010).D, {
                                    styleKey: "bodyMedium",
                                    colorVariant: "primary",
                                    lineClamp: 1,
                                    onMouseEnter: () => S(!0),
                                    onMouseLeave: () => S(!1),
                                    style: f ? o.hoveredTitle : void 0,
                                    children: t
                                }), (0, r.jsx)(i(111010).D, {
                                    styleKey: "captionRegular",
                                    colorPalette: "blue",
                                    colorVariant: "accentPrimary",
                                    lineClamp: 1,
                                    children: u ? (0, r.jsx)(i(109939).sA, { ...d.selfTranscribing
                                    }) : (0, r.jsx)(i(109939).sA, { ...d.otherTranscribing,
                                        values: {
                                            hasTranscriberName: !!c,
                                            transcriberName: c ? ? ""
                                        }
                                    })
                                })]
                            })
                        }) : void 0
                    }), (0, r.jsxs)("div", {
                        style: o.primaryContent,
                        children: [g, (0, r.jsx)(i(650354).t, {
                            fakeSoundwave: !0,
                            rootBlockId: a,
                            fillWidth: !0
                        }), l ? (0, r.jsx)(i(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "secondary",
                            style: o.duration,
                            children: l
                        }) : void 0, u ? (0, r.jsx)(i(51831).m, {
                            content: () => (0, r.jsx)(i(109939).sA, { ...d.stopTranscribing
                            }),
                            children: e => (0, r.jsx)(i(374533).A, { ...e,
                                ariaLabel: b.formatMessage(d.stopTranscribing),
                                icon: i(308211).U,
                                size: "sm",
                                style: o.stopButton,
                                colorPalette: "red",
                                colorVariant: "dark" === x ? "tertiary" : "secondary",
                                hoveredStyle: s.hoveredStopButton,
                                pressedStyle: s.pressedStopButton,
                                onClick: v
                            })
                        }) : void 0]
                    })]
                })
            }
            let d = (0, i(109939).YK)({
                selfTranscribing: {
                    id: "inAppActivityRenderer.meetingActivityTranscriptionStage.selfTranscribing",
                    defaultMessage: "You’re transcribing…"
                },
                otherTranscribing: {
                    id: "inAppActivityRenderer.meetingActivityTranscriptionStage.otherTranscribing",
                    defaultMessage: "{hasTranscriberName, select, true {{transcriberName} is transcribing...} other {Someone else is transcribing...}}"
                },
                stopTranscribing: {
                    id: "inAppActivityRenderer.meetingActivityTranscriptionStage.stopTranscribing",
                    defaultMessage: "Stop transcribing"
                }
            })
        },
        631889: (e, t, i) => {
            i.d(t, {
                H: () => o
            }), i(296540);
            var n = i(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0 0 16 16",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("g", {
                            children: [(0, n.jsx)("path", {
                                d: "M0.899902 7.3399C0.899902 5.62752 0.899902 4.77133 1.12504 4.07842C1.58006 2.67801 2.67801 1.58006 4.07842 1.12504C4.77133 0.899902 5.62752 0.899902 7.3399 0.899902H8.66C10.3724 0.899902 11.2286 0.899902 11.9215 1.12504C13.3219 1.58006 14.4198 2.67801 14.8749 4.07842C15.1 4.77133 15.1 5.62752 15.1 7.3399V8.66C15.1 10.3724 15.1 11.2286 14.8749 11.9215C14.4198 13.3219 13.3219 14.4198 11.9215 14.8749C11.2286 15.1 10.3724 15.1 8.66 15.1H7.3399C5.62752 15.1 4.77133 15.1 4.07842 14.8749C2.67801 14.4198 1.58006 13.3219 1.12504 11.9215C0.899902 11.2286 0.899902 10.3724 0.899902 8.66V7.3399Z",
                                fill: "url(#paint0_linear_3358_20933)"
                            }), (0, n.jsx)("path", {
                                d: "M3.6499 6.15005C3.6499 5.81868 3.91853 5.55005 4.2499 5.55005H8.3999C9.22833 5.55005 9.8999 6.22162 9.8999 7.05005V9.85005C9.8999 10.1814 9.63127 10.45 9.2999 10.45H5.1499C4.32148 10.45 3.6499 9.77848 3.6499 8.95005V6.15005Z",
                                fill: "white"
                            }), (0, n.jsx)("path", {
                                d: "M10.25 7.41825C10.25 7.12146 10.3818 6.84 10.6098 6.65001L11.7759 5.6783C12.0039 5.48834 12.35 5.65045 12.35 5.94719V10.0527C12.35 10.3495 12.0039 10.5116 11.7759 10.3216L10.6098 9.34985C10.3818 9.15985 10.25 8.8784 10.25 8.58162V7.41825Z",
                                fill: "white"
                            })]
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                                id: "paint0_linear_3358_20933",
                                x1: "7.99995",
                                y1: "0.899902",
                                x2: "7.99995",
                                y2: "15.1",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#4595FF"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#2C72FA"
                                })]
                            })
                        })]
                    })
                },
                o = (0, i(104509).wt)("zoom", r, "default")
        },
        718941: (e, t, i) => {
            i.d(t, {
                q: () => p
            });
            var n = i(296540),
                r = i(474848);
            let o = {
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "stretch",
                    gap: 4,
                    padding: "10px 14px",
                    minWidth: 0,
                    height: "auto"
                },
                a = {
                    background: "transparent"
                },
                s = {
                    background: "transparent"
                },
                l = {
                    position: "absolute",
                    width: 120,
                    height: 60,
                    insetInlineEnd: 0,
                    bottom: 0,
                    clipPath: "polygon(0 -20px, 0 100%, 100% 100%, 100% -20px)"
                },
                d = {
                    position: "absolute",
                    insetInlineEnd: 0,
                    height: "100%"
                },
                c = {
                    flexShrink: 0
                },
                u = {
                    minWidth: 0,
                    overflow: "hidden",
                    width: "fit-content",
                    maxWidth: "100%"
                };

            function p(e) {
                let {
                    title: t,
                    isSummarizing: p,
                    onClick: m,
                    isHovered: h
                } = e, v = (0, i(109939).tz)(), b = (0, i(960253).e)(), x = (0, n.useRef)(null), f = (0, n.useRef)(null), S = (0, i(729787).wY)(x), j = (0, i(729787).wY)(f), T = void 0 !== S && void 0 !== j && S.width - j.width >= 106;
                return (0, r.jsxs)(i(988022).p, {
                    ref: x,
                    style: o,
                    hoveredStyle: a,
                    pressedStyle: s,
                    "aria-label": v.formatMessage(y.viewSummary),
                    onClick: m,
                    children: [(0, r.jsx)("div", {
                        ref: f,
                        style: u,
                        children: (0, r.jsx)(i(111010).D, {
                            styleKey: "bodyMedium",
                            colorVariant: "primary",
                            lineClamp: 1,
                            children: p ? t : (0, r.jsx)(i(109939).sA, { ...y.summaryComplete
                            })
                        })
                    }), p ? (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        minWidth: 0,
                        children: [(0, r.jsx)(i(806715).t, {
                            width: 16,
                            height: 16,
                            strokeColor: i(996583).k.text[b].tertiary
                        }), (0, r.jsx)("div", {
                            style: u,
                            children: (0, r.jsx)(i(861510).N, {
                                animate: !0,
                                styleKey: "captionRegular",
                                text: (0, r.jsx)(i(109939).sA, { ...y.summarizing
                                })
                            })
                        })]
                    }) : (0, r.jsxs)(i(4458).fI, {
                        alignItems: "center",
                        gap: 4,
                        minWidth: 0,
                        children: [(0, r.jsx)("div", {
                            style: u,
                            children: (0, r.jsx)(i(111010).D, {
                                styleKey: "captionRegular",
                                colorVariant: "secondary",
                                lineClamp: 1,
                                children: (0, r.jsx)(i(109939).sA, { ...y.viewSummary
                                })
                            })
                        }), (0, r.jsx)(i(16275).I, {
                            icon: i(491469).arrowChevronSingleRightSmallIcon,
                            size: "xs",
                            colorVariant: "tertiary",
                            style: c
                        })]
                    }), (0, r.jsx)("div", {
                        style: l,
                        children: (0, r.jsx)(i(203066).N, {
                            mode: "wait",
                            children: !p && T ? (0, r.jsx)(i(153321).P.div, {
                                style: d,
                                initial: {
                                    y: "100%",
                                    opacity: 0
                                },
                                animate: {
                                    y: "0%",
                                    opacity: 1
                                },
                                exit: {
                                    y: "100%",
                                    opacity: 0
                                },
                                transition: {
                                    duration: .25,
                                    type: "spring",
                                    bounce: 0
                                },
                                children: (0, r.jsx)(g, {
                                    isHovered: h
                                })
                            }) : void 0
                        })
                    })]
                })
            }
            let m = {
                illustrationContainer: {
                    position: "absolute",
                    width: 120,
                    height: 68,
                    flexShrink: 0,
                    overflow: "hidden",
                    marginTop: -8,
                    insetInlineEnd: 0,
                    clipPath: "polygon(0 -20px, 0 100%, 100% 100%, 100% -20px)"
                },
                skeletonLine: {
                    position: "absolute",
                    height: 6,
                    borderRadius: 3e3,
                    background: i(632079).Tj.background.tertiary
                },
                checkmarkIcon: {
                    position: "absolute",
                    top: 5,
                    insetInlineStart: 6
                },
                style0: {
                    top: 27,
                    insetInlineStart: 9,
                    insetInlineEnd: 34
                },
                style1: {
                    top: 43,
                    insetInlineStart: 9,
                    insetInlineEnd: 9
                },
                style2: {
                    top: 52,
                    insetInlineStart: 9,
                    insetInlineEnd: 18
                }
            };

            function g(e) {
                let {
                    isHovered: t
                } = e, n = (0, i(960253).I)(() => {
                    let e = {
                        position: "absolute",
                        width: 72,
                        height: 80,
                        borderRadius: 6,
                        background: i(632079).Tj.background.elevated,
                        boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.08)",
                        overflow: "hidden",
                        border: `1px solid ${i(632079).Tj.blue.border.secondary}`,
                        borderBottom: "none",
                        transition: "transform 120ms",
                        transitionTimingFunction: "cubic-bezier(0.45, 0, 0.55, 1)",
                        insetInlineEnd: 16,
                        transformOrigin: "bottom right"
                    };
                    return {
                        backDocument: { ...e,
                            height: 66.5,
                            bottom: 0,
                            transform: t ? "rotate(-10deg) scale(1.03)" : "rotate(-4deg) scale(1.03)"
                        },
                        frontDocument: { ...e,
                            transform: t ? "rotate(-5deg)" : "rotate(0deg)"
                        }
                    }
                }, [t]);
                return (0, r.jsxs)("div", {
                    style: m.illustrationContainer,
                    children: [(0, r.jsx)("div", {
                        style: n.backDocument
                    }), (0, r.jsxs)("div", {
                        style: n.frontDocument,
                        children: [(0, r.jsx)(i(16275).I, {
                            icon: i(574657).checkmarkCircleFillSmallIcon,
                            size: "sm",
                            colorPalette: "blue",
                            colorVariant: "accentPrimary",
                            style: m.checkmarkIcon
                        }), (0, r.jsx)("div", {
                            style: { ...m.skeletonLine,
                                ...m.style0
                            }
                        }), (0, r.jsx)("div", {
                            style: { ...m.skeletonLine,
                                ...m.style1
                            }
                        }), (0, r.jsx)("div", {
                            style: { ...m.skeletonLine,
                                ...m.style2
                            }
                        })]
                    })]
                })
            }
            let y = (0, i(109939).YK)({
                summarizing: {
                    id: "inAppActivityRenderer.meetingActivitySummarizationStage.summarizing",
                    defaultMessage: "Summarizing"
                },
                summaryComplete: {
                    id: "inAppActivityRenderer.meetingActivitySummarizationStage.summaryComplete",
                    defaultMessage: "Summary complete"
                },
                viewSummary: {
                    id: "inAppActivityRenderer.meetingActivitySummarizationStage.viewSummary",
                    defaultMessage: "View AI summary"
                }
            })
        },
        803236: (e, t, i) => {
            i.d(t, {
                $: () => n
            });
            let n = new(i(804598)).h({
                namespace: "dismissedAppActivityKeys",
                syncWithMessageStore: !0
            });
            (0, i(202146).exposeDebugValue)("DismissedAppActivityKeysStore", n)
        },
        804598: (e, t, i) => {
            i.d(t, {
                h: () => a
            });
            var n = () => i(552923);
            let r = i(695216).nD,
                o = "dismissed_in_app_activity_keys";
            class a extends n().u {
                localStorageStore;
                namespace;
                constructor(e) {
                    super({
                        getInitialState: () => ({}),
                        effect: () => (this.syncTimestampObjectWithLocalStorage(), this.localStorageStore.addListener(t), () => {
                            this.localStorageStore.removeListener(t)
                        })
                    }), this.namespace = e.namespace;
                    const t = this.syncTimestampObjectWithLocalStorage.bind(this);
                    this.localStorageStore = new(i(245541)).R({
                        key: e.namespace,
                        namespace: e.namespace,
                        important: !0,
                        trackingType: "necessary"
                    })
                }
                syncTimestampObjectWithLocalStorage() {
                    var e;
                    let t = Date.now();
                    if (!(null == (e = i(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id)) return;
                    let n = this.getState() ? ? {},
                        o = this.localStorageStore.getState() ? ? {},
                        a = (0, i(381453).h1)(o, n);
                    for (let e in a)
                        for (let i in a[e]) a[e][i] < t - r && delete a[e][i];
                    (0, i(381453).n4)(a, n) || this.setState(a), (0, i(381453).n4)(a, o) || this.localStorageStore.setState(a)
                }
                mergeIncomingValuesFromMessageStore(e) {
                    var t, n, a;
                    let {
                        value: s
                    } = e, l = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id, d = Date.now();
                    if (!l) return;
                    let c = "object" == typeof s && null !== s && o in s ? s[o] : void 0;
                    if (!c) return;
                    if (! function(e) {
                            if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
                            for (let t in e)
                                if ("number" != typeof e[t]) return !1;
                            return !0
                        }(c)) return void i(773352).log({
                        level: "error",
                        from: "SyncedTimestampObjectStore",
                        type: "mergeIncomingValuesFromMessageStore:invalidTimestampObject",
                        data: {
                            miscDataToConvertToString: {
                                messageStoreValue: c,
                                namespace: this.namespace
                            }
                        }
                    });
                    let u = (null == (n = this.getState()) ? void 0 : n[l]) ? ? {},
                        p = {};
                    for (let [e, t] of (0, i(722371).WP)(c)) p[e] = Math.max(t, u[e] ? ? -1 / 0);
                    for (let e in p) p[e] < d - r && delete p[e];
                    if (!(0, i(381453).n4)(p, u)) {
                        let e = this.getState() ? ? {};
                        this.setState({ ...e,
                            [l]: p
                        })
                    }
                    let m = (null == (a = this.localStorageStore.getState()) ? void 0 : a[l]) ? ? {};
                    if (!(0, i(381453).n4)(p, m)) {
                        let e = this.localStorageStore.getState() ? ? {};
                        this.localStorageStore.setState({ ...e,
                            [l]: p
                        })
                    }
                }
                addKey(e) {
                    var t, n;
                    let {
                        key: r
                    } = e, o = this.getState() ? ? {}, a = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    if (!a || null != (n = o[a]) && n[r]) return;
                    let s = { ...o,
                        [a]: { ...o[a],
                            [r]: Date.now()
                        }
                    };
                    this.setState(s), this.localStorageStore.setState(s), "environment" in e && this.publishTimestampObjectToMessageStore()
                }
                publishTimestampObjectToMessageStore() {
                    var e, t;
                    let n = null == (e = i(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id;
                    if (!n) return;
                    let o = null == (t = this.getState()) ? void 0 : t[n];
                    o && i(48091).Ay.setField({
                        key: (0, i(568479).eI)(n),
                        field: "dismissed_in_app_activity_keys",
                        value: o,
                        ttl: r
                    })
                }
                isKeyPresent(e) {
                    var t, n;
                    let r = this.getState() ? ? {},
                        o = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    return !!o && (null == (n = r[o]) ? void 0 : n[e]) !== void 0
                }
                getKeyTimestamp(e) {
                    var t, n;
                    let r = this.getState() ? ? {},
                        o = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    if (o) return null == (n = r[o]) ? void 0 : n[e]
                }
            }
        }
    }
]);