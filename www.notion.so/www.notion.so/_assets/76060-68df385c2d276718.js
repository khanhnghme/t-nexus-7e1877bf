"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [76060, 95737], {
        36663: (e, t, i) => {
            i.r(t), i.d(t, {
                arrowChevronSingleDownFillIcon: () => a,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.72 6.72 12.56 7.16",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M9.38 13.619a.875.875 0 0 0 1.238 0l5.4-5.4a.875.875 0 0 0-1.237-1.238L10 11.763 5.218 6.98a.875.875 0 1 0-1.237 1.24z"
                    })
                },
                a = (0, i(104509).wt)("arrowChevronSingleDownFill", n, "fill")
        },
        473801: (e, t, i) => {
            i.d(t, {
                G: () => a
            }), i(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.37 4.37 17.44 11.25",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M3.5 4.375A2.125 2.125 0 0 0 1.375 6.5v7c0 1.174.951 2.125 2.125 2.125h9a2.125 2.125 0 0 0 2.125-2.125v-1.084l3.239 1.962a.625.625 0 0 0 .948-.534V6.156a.625.625 0 0 0-.948-.534l-3.239 1.962V6.5A2.125 2.125 0 0 0 12.5 4.375zm11.125 6.58v-1.91l2.938-1.78v5.47zM13.375 6.5v7a.875.875 0 0 1-.875.875h-9a.875.875 0 0 1-.875-.875v-7c0-.483.392-.875.875-.875h9c.483 0 .875.392.875.875"
                    })
                },
                a = (0, i(104509).wt)("videoCamera", n, "default")
        },
        503382: (e, t, i) => {
            i.d(t, {
                X: () => n
            });
            let n = i(546605).Store.createValue(void 0, {
                name: "DebugActivityStateStore"
            })
        },
        508609: (e, t, i) => {
            i.d(t, {
                A: () => a,
                g: () => n
            });
            let n = i(546605).Store.createValue(null, {
                name: "InAppActivityOverlayElemStore"
            });

            function a(e) {
                n.setState(e)
            }
        },
        574657: (e, t, i) => {
            i.r(t), i.d(t, {
                checkmarkCircleFillSmallIcon: () => a,
                iconDefinition: () => n
            }), i(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.94 1.95 12.11 12.11",
                    svg: (0, i(474848).jsx)("path", {
                        d: "M1.95 8a6.05 6.05 0 1 1 12.1 0 6.05 6.05 0 0 1-12.1 0m8.444-1.623a.55.55 0 0 0-.944-.566L7.443 9.156 6.339 7.87a.55.55 0 1 0-.835.716l1.6 1.867a.55.55 0 0 0 .89-.075z"
                    })
                },
                a = (0, i(104509).wt)("checkmarkCircleFillSmall", n, "fillSmall")
        },
        682738: (e, t, i) => {
            i.r(t), i.d(t, {
                MaybeInAppActivityRenderer: () => b
            });
            var n = i(296540);
            let a = new(i(245541)).R({
                key: "lastLeaderWindowDimension",
                namespace: "calendarBrowserSubscriptionLeader",
                important: !0,
                trackingType: "necessary"
            });
            (0, i(202146).exposeDebugValue)("LastLeaderWindowDimensionStore", a);
            let r = i(546605).Store.createValue(!1, {
                    name: "presentingInAppTranscriptionActivityStore"
                }),
                o = new(i(804598)).h({
                    namespace: "presentedParticipantActivityStage"
                });

            function s() {
                return "visible" === document.visibilityState && document.hasFocus()
            }

            function c(e) {
                let {
                    environment: t,
                    key: a,
                    isHovered: r,
                    activityType: s,
                    eventId: c,
                    isStaleAt: l
                } = e, d = (0, n.useRef)(0), p = (0, i(682985).O$)(i(984858).sidebarExpandedStore), u = (0, i(682985).K8)(() => {
                    if (i(825244).A.getState().isVisible, !l) return !1;
                    let e = i(906745).DateTime.max(i(906745).DateTime.now(), i(157129).Ku.getLastEvaluatedNow()),
                        t = i(906745).DateTime.fromMillis(l);
                    return e.diff(t, "minutes").minutes >= 5
                }, [l]), m = (0, i(682985).K8)(() => o.isKeyPresent(a), [a]);
                (0, n.useEffect)(() => {
                    if (!m || !u || r) return;
                    let e = setTimeout(() => {
                            i(803236).$.addKey({
                                key: a,
                                environment: t
                            }), (0, i(104310).u)({
                                event: {
                                    eventName: "in_app_meeting_notification_dismissed",
                                    eventProperties: {
                                        activity_type: s,
                                        activity_key: a,
                                        reason: "auto_dismissed",
                                        is_sidebar_expanded: p,
                                        calendar_event_id: c
                                    }
                                }
                            })
                        }, 5e3 - d.current),
                        n = i(906745).DateTime.now().plus({
                            seconds: 5
                        }).toMillis();
                    return () => {
                        clearTimeout(e), d.current = n - Date.now()
                    }
                }, [t, m, a, u, s, c, r, p])
            }(0, i(202146).exposeDebugValue)("PresentedParticipantActivityStageStore", o);
            var l = i(474848);

            function d(e) {
                let {
                    spaceStore: t,
                    serializedStageContext: n,
                    activityKey: a,
                    isHovered: r
                } = e, {
                    event: o,
                    primaryTranscriptionBlockPointer: s,
                    currentTranscriptionState: d
                } = n, p = (0, i(533992).v3)(), u = (0, i(515467).m)(), m = (0, i(682985).O$)(i(984858).sidebarExpandedStore), _ = (0, i(682985).K8)(() => i(970831).B.createChildStore(t, s), [s, t]), v = "summarizing" === d.state, g = (0, i(682985).K8)(() => (0, i(869708).u7)(_), [_]);
                return c({
                    environment: p,
                    key: a,
                    isHovered: r,
                    isStaleAt: g && "idle" === g.state && "summary_completed" === g.from && g.timestamp ? g.timestamp : void 0,
                    activityType: "summarization",
                    eventId: null == o ? void 0 : o.id
                }), (0, l.jsx)(i(718941).q, {
                    title: o ? o.summary : (0, l.jsx)(i(627918).A, {
                        store: _,
                        shouldWrap: !1,
                        maxLines: 1
                    }),
                    isSummarizing: v,
                    onClick: function() {
                        (async () => {
                            try {
                                (await i(68067).$.load()).navigateToTranscriptionBlock({
                                    environment: p,
                                    blockStore: _,
                                    pageVisitSource: i(254656).y8.InAppMeetingNotification,
                                    peekMode: "full_page"
                                })
                            } catch (e) {
                                i(773352).log({
                                    level: "error",
                                    from: "MeetingActivitySummarizationStage",
                                    type: "failed_to_lazy_load_transcription_create_actions",
                                    error: (0, i(416607).convertErrorToLog)(e)
                                })
                            }
                        })(), v || i(803236).$.addKey({
                            key: a,
                            environment: p
                        }), (0, i(104310).u)({
                            event: {
                                eventName: v ? "in_app_meeting_notification_summarizing_stage_clicked" : "in_app_meeting_notification_summary_complete_stage_clicked",
                                eventProperties: {
                                    calendar_event_id: null == o ? void 0 : o.id,
                                    activity_key: a,
                                    is_sidebar_expanded: m
                                }
                            }
                        }), u.botId && o && (0, i(414824).R)({
                            environment: p,
                            data: {
                                type: "track",
                                payload: {
                                    event: "meetingNoteOpened",
                                    eventId: o.id,
                                    calendarId: o.calendarId,
                                    from: v ? "in_app_meeting_notification_summarizing_stage" : "in_app_meeting_notification_summary_complete_stage",
                                    hasExistingNote: !0
                                }
                            },
                            botId: u.botId
                        })
                    },
                    isHovered: r
                })
            }

            function p(e) {
                let {
                    spaceStore: t,
                    activityKey: a,
                    isHovered: r,
                    serializedStageContext: s
                } = e, {
                    event: c,
                    primaryTranscriptionBlockPointer: d,
                    transcriber: p,
                    transcriptionStateHistory: m,
                    currentTranscriptionState: _
                } = s, v = (0, i(533992).v3)(), g = (0, i(515467).m)(), f = (0, i(345776).T)(), y = (0, i(682985).O$)(i(984858).sidebarExpandedStore), [b, S] = (0, n.useState)(Date.now()), w = function(e) {
                    let {
                        activityKey: t,
                        currentTranscriptionState: a,
                        isHovered: r
                    } = e, s = (0, i(345776).T)(), [c, l] = (0, n.useState)(Date.now()), d = (0, n.useRef)(!1);
                    r && (d.current = !0);
                    let p = d.current,
                        m = (0, i(682985).K8)(() => o.getKeyTimestamp(t), [t]),
                        _ = !("transcribing" === a.state && s && a.transcriber_id === s) && (!m || m + u >= c);
                    return (0, n.useEffect)(() => {
                        if (p || !_ || !m) return;
                        let e = m + u,
                            t = Math.max(0, e - Date.now());
                        if (0 === t) {
                            c <= e && l(Date.now());
                            return
                        }
                        let i = setTimeout(() => l(Date.now()), t);
                        return () => clearTimeout(i)
                    }, [_, m, c, p]), !p && _
                }({
                    activityKey: a,
                    currentTranscriptionState: _,
                    isHovered: r
                }), x = (0, i(682985).K8)(() => i(970831).B.createChildStore(t, d), [d, t]);
                (0, n.useEffect)(() => {
                    let e = setInterval(() => {
                        S(Date.now())
                    }, 1e3);
                    return () => clearInterval(e)
                }, []);
                let k = (0, n.useMemo)(() => {
                    if (m) return (0, i(869708).rB)({
                        transcriptionStateHistory: m,
                        currentTime: b
                    })
                }, [m, b]);
                async function h() {
                    let e = "in_app_meeting_notification_transcribing_stage_stop_transcribing",
                        t = await i(785576).w.load();
                    await t.stopTranscription({
                        environment: v,
                        blockStore: x,
                        from: e
                    }), (0, i(104310).u)({
                        event: {
                            eventName: "in_app_meeting_notification_transcribing_stage_stop_transcribing_clicked",
                            eventProperties: {
                                calendar_event_id: null == c ? void 0 : c.id,
                                activity_key: a,
                                is_sidebar_expanded: y
                            }
                        }
                    }), g.botId && c && (0, i(414824).R)({
                        environment: v,
                        data: {
                            type: "track",
                            payload: {
                                event: "meetingTranscriptionStopped",
                                eventId: c.id,
                                calendarId: c.calendarId,
                                from: e
                            }
                        },
                        botId: g.botId
                    })
                }
                let A = (null == p ? void 0 : p.id) === f;
                return (0, l.jsx)(i(423042).n, {
                    title: c ? c.summary : (0, l.jsx)(i(627918).A, {
                        store: x,
                        shouldWrap: !1,
                        maxLines: 1
                    }),
                    transcriptionBlockStoreId: x.id,
                    transcriptionDuration: k,
                    transcriberName: null == p ? void 0 : p.name,
                    isSelfTranscribing: A,
                    isHovered: r,
                    shouldShowParticipantExpansion: w,
                    participants: c ? (0, l.jsx)(i(637570).B, {
                        event: c,
                        maxRenderedUsers: 3,
                        avatarSize: 24,
                        highlightedUserId: null != p && p.id && !A ? p.id : void 0
                    }) : void 0,
                    handleSecondaryContentClick: function() {
                        (async () => {
                            try {
                                (await i(68067).$.load()).navigateToTranscriptionBlock({
                                    environment: v,
                                    blockStore: x,
                                    pageVisitSource: i(254656).y8.InAppMeetingNotification,
                                    peekMode: "full_page"
                                })
                            } catch (e) {
                                i(773352).log({
                                    level: "error",
                                    from: "MeetingActivityTranscriptionStage",
                                    type: "failed_to_lazy_load_transcription_create_actions",
                                    error: (0, i(416607).convertErrorToLog)(e)
                                })
                            }
                        })(), (0, i(104310).u)({
                            event: {
                                eventName: "in_app_meeting_notification_transcribing_stage_clicked",
                                eventProperties: {
                                    calendar_event_id: null == c ? void 0 : c.id,
                                    activity_key: a,
                                    is_sidebar_expanded: y
                                }
                            }
                        }), g.botId && c && (0, i(414824).R)({
                            environment: v,
                            data: {
                                type: "track",
                                payload: {
                                    event: "meetingNoteOpened",
                                    eventId: c.id,
                                    calendarId: c.calendarId,
                                    from: "in_app_meeting_notification_transcribing_stage",
                                    hasExistingNote: !0
                                }
                            },
                            botId: g.botId
                        })
                    },
                    handleStopButtonClick: h
                })
            }
            let u = 5 * i(695216).TD;

            function m(e) {
                var t;
                let {
                    spaceStore: a,
                    serializedStageContext: r,
                    activityKey: o,
                    isHovered: s,
                    isRedesign: d
                } = e, {
                    event: p,
                    primaryTranscriptionBlockPointer: u
                } = r, m = (0, i(533992).v3)(), v = (0, i(515467).m)(), g = (0, i(682985).O$)(i(984858).sidebarExpandedStore), f = !!(null == (t = p.conferencing) ? void 0 : t.url);
                c({
                    environment: m,
                    key: o,
                    isHovered: s,
                    isStaleAt: i(906745).DateTime.fromISO(p.start.dateTime).toMillis(),
                    activityType: "upcoming",
                    eventId: p.id
                });
                let y = (0, i(682985).K8)(() => {
                        if (!d && u) return i(970831).B.createChildStore(a, u)
                    }, [d, u, a]),
                    [b, S] = (0, i(97668).V$)(async e => {
                        await (0, i(861842).nT)({
                            event: e,
                            from: "in_app_meeting_notification_upcoming_stage",
                            environment: m,
                            calendarBotId: v.botId,
                            peekMode: "full_page"
                        })
                    }, [v, m]),
                    [w, x] = (0, i(97668).V$)(async ({
                        event: e,
                        from: t
                    }) => {
                        await (0, i(861842).D6)({
                            event: e,
                            from: t,
                            environment: m,
                            calendarBotId: v.botId,
                            peekMode: "full_page"
                        })
                    }, [v, m]),
                    k = (0, n.useCallback)(({
                        from: e
                    }) => {
                        (0, i(861842).p5)({
                            event: p,
                            from: e,
                            environment: m,
                            calendarBotId: v.botId
                        })
                    }, [m, p, v.botId]);

                function h() {
                    f && k({
                        from: "in_app_meeting_notification_upcoming_stage_join_and_transcribe"
                    }), x({
                        event: p,
                        from: f ? "in_app_meeting_notification_upcoming_stage_join_and_start_transcribing" : "in_app_meeting_notification_upcoming_stage_start_transcribing"
                    })
                }
                let A = (0, n.useMemo)(() => e => {
                        let t = {
                            key: "transcribeActions",
                            render: e => (0, l.jsx)(i(844565).A, { ...e
                            }),
                            items: []
                        };
                        return f && (t.items.push({
                            key: "joinMeetingOnly",
                            action: () => {
                                k({
                                    from: "in_app_meeting_notification_upcoming_stage_join_meeting_only"
                                }), e.close()
                            },
                            render: e => (0, l.jsx)(i(95582).A, { ...e,
                                icon: (0, l.jsx)(i(16275).I, {
                                    icon: i(473801).G,
                                    colorPalette: "gray",
                                    colorVariant: "primary"
                                }),
                                title: (0, l.jsx)(i(109939).sA, { ..._.joinMeetingOnly
                                })
                            })
                        }), t.items.push({
                            key: "transcribeOnly",
                            action: () => {
                                x({
                                    event: p,
                                    from: "in_app_meeting_notification_upcoming_stage_start_transcribing_only"
                                }), e.close()
                            },
                            render: e => (0, l.jsx)(i(95582).A, { ...e,
                                icon: (0, l.jsx)(i(16275).I, {
                                    icon: i(681875).a,
                                    colorPalette: "gray",
                                    colorVariant: "primary"
                                }),
                                title: (0, l.jsx)(i(109939).sA, { ..._.transcribeOnly
                                })
                            })
                        })), t.items.push({
                            key: "managePreferences",
                            action: () => {
                                (0, i(104310).u)({
                                    event: {
                                        eventName: "in_app_meeting_notification_upcoming_stage_manage_preferences_clicked",
                                        eventProperties: {
                                            calendar_event_id: p.id,
                                            is_sidebar_expanded: g
                                        }
                                    }
                                }), i(227947).A.setState({ ...i(227947).A.state,
                                    currentPage: "notifications",
                                    defaultTab: void 0,
                                    open: !0,
                                    openedFrom: "in_app_meeting_notification"
                                }), e.close()
                            },
                            render: e => (0, l.jsx)(i(95582).A, { ...e,
                                icon: (0, l.jsx)(i(16275).I, {
                                    icon: i(829968).gearIcon,
                                    colorPalette: "gray",
                                    colorVariant: "primary"
                                }),
                                title: (0, l.jsx)(i(109939).sA, { ..._.managePreferences
                                })
                            })
                        }), [t]
                    }, [p, f, g, k, x]),
                    T = "pending" === w.status || "pending" === b.status;
                return d ? (0, l.jsx)(i(313580).B, {
                    event: p,
                    isRedesign: !0,
                    isHovered: s,
                    isPerformingTranscriptionAction: T,
                    buildMenuSections: A,
                    handleTranscribeButtonClick: h,
                    handleEventCellClick: S
                }) : (0, l.jsx)(i(313580).B, {
                    event: p,
                    isRedesign: !1,
                    transcriptionBlockStore: y,
                    isPerformingTranscriptionAction: T,
                    buildMenuSections: A,
                    handleTranscribeButtonClick: h,
                    handleEventCellClick: S
                })
            }
            i(944114);
            let _ = (0, i(109939).YK)({
                joinMeetingOnly: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.joinMeetingOnly",
                    defaultMessage: "Join meeting only"
                },
                transcribeOnly: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.transcribeOnly",
                    defaultMessage: "Transcribe only"
                },
                managePreferences: {
                    id: "inAppActivityRenderer.meetingActivityUpcomingStage.managePreferences",
                    defaultMessage: "Manage preferences"
                }
            });

            function v(e) {
                let {
                    activityState: t,
                    isHovered: a,
                    spaceStore: r,
                    isRedesign: c
                } = e, {
                    type: u,
                    context: _
                } = t, v = (0, i(682985).O$)(i(984858).sidebarExpandedStore);
                ! function(e) {
                    let {
                        activityKey: t,
                        onFirstViewCallback: a
                    } = e, [r, c] = (0, n.useState)(s()), l = (0, i(682985).K8)(() => o.isKeyPresent(t), [t]);
                    (0, n.useEffect)(() => {
                        if (r) {
                            l || o.addKey({
                                key: t
                            });
                            return
                        }

                        function e() {
                            s() && (c(!0), l || (o.addKey({
                                key: t
                            }), null == a || a()))
                        }
                        return s() ? void e() : (i(825244).A.addListener(e), window.addEventListener("focus", e), () => {
                            i(825244).A.removeListener(e), window.removeEventListener("focus", e)
                        })
                    }, [r, l, t, a])
                }({
                    activityKey: t.key,
                    onFirstViewCallback: () => {
                        (0, i(104310).u)({
                            event: {
                                eventName: "in_app_meeting_notification_viewed",
                                eventProperties: {
                                    stage: u,
                                    calendar_event_id: null == g ? void 0 : g.id,
                                    activity_key: t.key,
                                    is_sidebar_expanded: v
                                }
                            }
                        })
                    }
                });
                let g = _.event;
                switch (t.type) {
                    case "upcoming":
                        return (0, l.jsx)(m, {
                            spaceStore: r,
                            serializedStageContext: t.context,
                            activityKey: t.key,
                            isHovered: a,
                            isRedesign: c
                        });
                    case "transcription":
                        return (0, l.jsx)(p, {
                            spaceStore: r,
                            serializedStageContext: t.context,
                            activityKey: t.key,
                            isHovered: a
                        });
                    case "summarization":
                    case "summary_complete":
                        return (0, l.jsx)(d, {
                            spaceStore: r,
                            serializedStageContext: t.context,
                            activityKey: t.key,
                            isHovered: a
                        });
                    default:
                        return null
                }
            }
            let g = {
                    overflow: "visible"
                },
                f = {
                    borderRadius: 0,
                    background: "none",
                    boxShadow: "none",
                    margin: 0
                };

            function y(e) {
                var t, o;
                let s, c, d, p = (0, i(533992).v3)(),
                    u = (0, i(345776).T)(),
                    m = (0, i(83208).X)("meeting_notes_standalone_pill_renderer"),
                    _ = p.device.isElectron && m,
                    y = (0, i(767575).R)({
                        includeVisible: !0
                    }),
                    b = (0, i(767575).R)({
                        includeVisible: !1
                    });
                (0, n.useEffect)(() => {
                    var e;
                    _ && (null === i(775657).electronApi || void 0 === i(775657).electronApi || null == (e = i(775657).electronApi.setTranscriptionBlockVisible) || e.call(i(775657).electronApi, void 0 === b))
                }, [_, b]);
                let S = (0, i(853284).U)(),
                    w = (0, i(83208).X)("redesigned_meeting_notes_notifications"),
                    x = (0, i(682985).K8)(() => {
                        if (i(503382).X.getState()) return i(503382).X.getState();
                        let e = (0, i(248384).Tw)(y);
                        if (!_ || (null == e ? void 0 : e.type) !== "transcription" || e.context.currentTranscriptionState.transcriber_id !== u) return e
                    }, [y, _, u], {
                        equalityFn: i(381453).n4
                    }),
                    k = w && (null == x ? void 0 : x.type) === "upcoming",
                    [h, A] = (0, n.useState)(!1),
                    T = (0, i(682985).O$)(i(728372).AppStoreSidebarSpaceStore),
                    I = (0, i(682985).O$)(i(984858).sidebarWidthStore),
                    j = (0, i(682985).O$)(i(984858).sidebarExpandedStore),
                    M = (0, i(682985).O$)(i(984858).sidebarOpenStore),
                    O = (0, i(682985).O$)(i(984858).sidebarAnimatingStore),
                    K = function(e) {
                        let t = (0, i(533992).v3)(),
                            {
                                type: n
                            } = e ? ? {};
                        return (0, i(682985).K8)(() => {
                            var e;
                            let a = null == (e = (0, i(904434).R$)(t)) ? void 0 : e.getSettings();
                            if (!a) return !1;
                            if (!(a.used_mac_app || a.used_windows_app) || !n) return !0;
                            switch (n) {
                                case "upcoming":
                                    return i(218744).default.checkGate({
                                        gateName: "support_in_app_umn_when_sidebar_is_closed"
                                    });
                                case "summary_complete":
                                case "summarization":
                                case "transcription":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, [t, n])
                    }(x),
                    C = (0, i(682985).O$)(i(508609).g);
                o = null == x ? void 0 : x.type, (0, n.useEffect)(() => {
                    r.setState("transcription" === o)
                }, [o]), (0, n.useEffect)(() => () => {
                    r.setState(!1)
                }, []);
                let D = function(e) {
                    let {
                        isSlipperySlopeEnabled: t,
                        isUpcomingWithNewDesign: a
                    } = e, r = (0, i(533992).v3)(), {
                        width: o,
                        height: s
                    } = (0, i(118872).lW)(), c = 16 - i(95610).q, l = (0, i(682985).K8)(() => i(550830).default.isOpen(), []), d = (0, i(682985).K8)(() => (0, i(352202).n5)(), []), p = (0, i(682985).K8)(() => (0, i(898478).k)(r), [r]), u = (0, i(682985).K8)(() => r.WindowSizeStore.getSafePaddingBottomPx(0), [r]);
                    return (0, n.useMemo)(() => a ? new DOMRect(o / 2, -2, 0, 0) : t ? new DOMRect(p + c, s - u - c, 0, 0) : l ? new DOMRect(d + i(95610).q, s, 0, 0) : new DOMRect(0, s, 0, 0), [a, t, p, o, s, l, d, u, c])
                }({
                    isSlipperySlopeEnabled: S,
                    isUpcomingWithNewDesign: k
                });
                s = (0, i(345776).T)(), (0, n.useEffect)(() => {
                    if (!s) return;
                    let e = i(48091).Ay.addListener({
                        key: (0, i(568479).eI)(s),
                        authorizationToken: void 0,
                        listener: e => i(803236).$.mergeIncomingValuesFromMessageStore(e),
                        subscriptionId: void 0
                    });
                    return () => {
                        e && i(48091).Ay.removeListener(e)
                    }
                }, [s]);
                let B = (t = !!(null == x ? void 0 : x.key), c = (0, i(682985).K8)(() => i(63528).l.getState().hasWebLock, []), d = (0, i(682985).K8)(() => {
                        let e, i;
                        return !!t && (c || (e = a.getState(), i = {
                            left: window.screenLeft,
                            top: window.screenTop
                        }, !!e && "number" == typeof e.left && "number" == typeof e.top && e.left === i.left && e.top === i.top))
                    }, [t, c]), (0, n.useEffect)(() => {
                        if (!c || (a.setState({
                                left: window.screenLeft,
                                top: window.screenTop
                            }), !t)) return;
                        let e = window.screenLeft,
                            i = window.screenTop,
                            n = setInterval(() => {
                                (e !== window.screenLeft || i !== window.screenTop) && (e = window.screenLeft, i = window.screenTop, a.setState({
                                    left: window.screenLeft,
                                    top: window.screenTop
                                }))
                            }, 3e3);
                        return () => {
                            clearInterval(n)
                        }
                    }, [c, t]), d && (null == x ? void 0 : x.key)),
                    E = j && !O && !S,
                    P = K && !j && !S,
                    R = (0, n.useMemo)(() => T && x ? (0, l.jsx)(i(111422).N, {
                        activityType: x.type,
                        activityKey: x.key,
                        event: x.context.event,
                        isHovered: h,
                        setIsHovered: A,
                        width: k ? 450 : S ? 245 : P ? I - 2 * i(95610).q : void 0,
                        children: (0, l.jsx)(v, {
                            activityState: x,
                            isHovered: h,
                            spaceStore: T,
                            isRedesign: w
                        })
                    }, x.key) : null, [x, h, T, P, S, k, w, I]),
                    V = (0, n.useMemo)(() => (0, l.jsx)(i(182718).zD, {
                        style: g,
                        preventCaptureEsc: !0,
                        suppressOriginContext: !0,
                        forceInitialInbound: !0,
                        disableDarkOverlayBackground: !0,
                        trapFocus: !1,
                        preventScaleTransition: !0,
                        preventOpacityTransition: !0,
                        preventSlideUpTransition: !0,
                        disableMouseCapture: !0,
                        open: !0,
                        popupType: i(423291).n.Popup,
                        alignmentToOrigin: k ? "center" : "start",
                        placementToOrigin: k ? "bottom" : "top",
                        viewportPadding: 0,
                        content: () => (0, l.jsxs)(i(153321).P.div, {
                            animate: {
                                opacity: !k && M && P ? .1 : 1
                            },
                            children: [k ? null : (0, l.jsx)("div", {
                                ref: i(694648).A
                            }), (0, l.jsx)(i(203066).N, {
                                mode: "wait",
                                children: R
                            })]
                        }),
                        popupWrapStyle: f,
                        originRect: D
                    }, k ? "center-top" : "bottom-start"), [R, k, M, P, D]);
                if (S || k) return B ? (0, l.jsx)(i(114596).O, {
                    open: !0,
                    children: V
                }) : null;
                let L = B && !E && P;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(i(203066).N, {
                        mode: "wait",
                        children: B && E ? R : !L && e.children ? (0, l.jsx)(i(153321).P.div, {
                            initial: {
                                opacity: 0,
                                y: "100%"
                            },
                            animate: {
                                opacity: 1,
                                y: "0%"
                            },
                            exit: {
                                opacity: 0,
                                y: "100%"
                            },
                            transition: {
                                duration: .25,
                                type: "spring",
                                bounce: 0
                            },
                            children: e.children
                        }) : null
                    }), L ? (0, l.jsx)(i(425930).A.Provider, {
                        value: C,
                        children: V
                    }) : null]
                })
            }

            function b(e) {
                let t = (0, i(83208).X)("in_app_activity_renderer");
                return (0, i(682985).K8)(() => (0, i(869708).M5)(), []) && t ? (0, l.jsx)(i(337336).K, {
                    from: "MaybeInAppActivityRenderer",
                    fallback: () => (0, l.jsx)(i(337336).K, {
                        fallback: () => null,
                        from: "SidebarCardCalloutChildren",
                        children: e.children ? ? null
                    }),
                    children: (0, l.jsx)(y, {
                        children: e.children
                    })
                }) : e.children ? ? null
            }
        },
        694648: (e, t, i) => {
            i.d(t, {
                A: () => a,
                U: () => n
            });
            let n = i(546605).Store.createValue(null, {
                name: "InAppActivityToasterOverlayElemStore"
            });

            function a(e) {
                n.setState(e)
            }
        },
        767575: (e, t, i) => {
            i.d(t, {
                R: () => r
            }), i(944114), i(581454);
            var n = () => i(869708),
                a = () => i(769719);

            function r({
                includeVisible: e
            }) {
                return (0, i(682985).K8)(() => {
                    var t;
                    let r = Object.values(i(585823).Ay.state.passiveBlockMap).map(({
                            rootBlockStore: e
                        }) => e),
                        o = i(585823).ei.state,
                        s = [];
                    for (let e of (o && o.isTranscriptionBlock() && s.push(o), r)) e.isTranscriptionBlock() && s.push(e);
                    let c = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    if (c)
                        for (let t of s) {
                            let i = (0, n().by)(t);
                            if (t.pathIsDead() || "transcribing" !== i.state || i.transcriber_id !== c) continue;
                            let r = a().c.getVisibilityStatus(t.id);
                            if (e || !r) return t
                        }
                }, [e])
            }
        }
    }
]);