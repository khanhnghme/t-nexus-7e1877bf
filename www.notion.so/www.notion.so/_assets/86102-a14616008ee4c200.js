"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [86102, 97045], {
        3553: (e, t, r) => {
            function o(e) {
                var t;
                let {
                    environment: o,
                    store: i
                } = e, n = null == (t = i.getFormat()) ? void 0 : t.transcription_calendar_event;
                if (!n) return;
                let a = i.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.dismissCalendarSharingSuggestion",
                    environment: o,
                    canUndo: !0,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [i],
                            update: {
                                transcription_calendar_event: { ...n,
                                    has_dismissed_sharing: !0
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }

            function i(e) {
                return {
                    startTime: e.isAllDay ? r(906745).DateTime.fromISO(e.start.date) : r(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    }),
                    endTime: e.isAllDay ? r(906745).DateTime.fromISO(e.end.date) : r(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    })
                }
            }

            function n(e) {
                let {
                    blockStore: t,
                    event: o,
                    transaction: i,
                    environment: n
                } = e, a = t.getTitleStore();
                a && (r(41403).jQ({
                    environment: n,
                    store: a,
                    transaction: i,
                    selection: {
                        startIndex: 0,
                        endIndex: 1 / 0
                    },
                    updateSelection: !1
                }), o.summary && r(41403).yr({
                    environment: n,
                    store: a,
                    index: 0,
                    tokens: [
                        [o.summary]
                    ],
                    transaction: i
                }))
            }

            function a(e) {
                var t;
                let {
                    blockStore: o,
                    event: n,
                    attendeeIds: a,
                    transaction: s,
                    environment: c
                } = e, {
                    startTime: l,
                    endTime: u
                } = i(n), p = a ? ? (null == (t = n.attendees) ? void 0 : t.map(e => e.notionUserId).filter(r(722371).O9)) ? ? [], m = c.currentUser.id;
                m && !p.includes(m) && p.push(m);
                let g = d({
                    event: n
                });
                (0, r(715144).z)({
                    stores: [o],
                    update: {
                        transcription_calendar_event: {
                            uid: n.uid,
                            startTime: l.toISO(),
                            endTime: u.toISO(),
                            attendeeIds: p,
                            externalAttendees: g
                        }
                    },
                    transaction: s
                })
            }
            async function s(e) {
                let t, {
                        environment: o,
                        blockStore: i,
                        event: s,
                        source: c,
                        shareWithParticipants: d
                    } = e,
                    u = s.isAllDay ? r(906745).DateTime.fromISO(s.start.date) : r(906745).DateTime.fromISO(s.start.dateTime, {
                        zone: s.start.timeZone
                    }),
                    p = s.isAllDay ? r(906745).DateTime.fromISO(s.end.date) : r(906745).DateTime.fromISO(s.end.dateTime, {
                        zone: s.end.timeZone
                    }),
                    m = l({
                        environment: o,
                        event: s
                    }),
                    g = i.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.addCalendarEventToTranscriptionBlock",
                    environment: o,
                    canUndo: !0,
                    cellTarget: g ? {
                        spaceWithId: g
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [i],
                            update: {
                                transcription_calendar_event: {
                                    uid: s.uid,
                                    startTime: u.toISO(),
                                    endTime: p.toISO(),
                                    attendeeIds: [],
                                    externalAttendees: [],
                                    has_dismissed_sharing: !d
                                }
                            },
                            transaction: e
                        }), n({
                            blockStore: i,
                            event: s,
                            transaction: e,
                            environment: o
                        })
                    }
                }), (0, r(525779).clear)({
                    environment: o
                });
                let f = await m;
                if ((0, r(377796).createAndCommit)({
                        userAction: "transcriptionCalendarActions.addCalendarAttendeesToTranscriptionBlock",
                        environment: o,
                        canUndo: !0,
                        cellTarget: g ? {
                            spaceWithId: g
                        } : void 0,
                        perform: e => {
                            a({
                                blockStore: i,
                                event: s,
                                attendeeIds: f.map(e => e.id),
                                transaction: e,
                                environment: o
                            })
                        }
                    }), d) {
                    let e = i.getNavigableBlockStore();
                    if (e && e.canAdmin()) {
                        let t = (0, r(328765).S)();
                        if (t) {
                            let n = f.filter(e => e.id !== o.currentUser.id),
                                a = n.map(e => r(229903).V.createChildStore(t, (0, r(729052).i1)({
                                    userId: e.id,
                                    spaceId: t.id
                                })));
                            await (0, r(975162).lX)(a, 10, e => e.load());
                            let s = n.filter((e, t) => a[t].isMember()).map(e => ({
                                type: "existingUser",
                                value: e
                            }));
                            s.length > 0 && ((0, r(179349).e)({
                                environment: o,
                                store: e,
                                inviteTargets: s,
                                inviteRole: "editor",
                                isOnboarding: !1,
                                invite: {
                                    inviteOrigin: "transcription_block"
                                }
                            }), (0, r(861842)._)({
                                environment: o,
                                transcriptionBlockStore: i
                            }))
                        }
                    }
                }(0, r(414824).R)({
                    environment: o,
                    data: {
                        type: "track",
                        payload: {
                            event: "transcriptionBlockCalendarEventAdded",
                            eventId: s.uid,
                            source: "headerDropdown" === c ? "headerSuggestion" : c,
                            notionBlockId: i.id
                        }
                    }
                }), (0, r(104310).u)({
                    event: {
                        eventName: "transcription_block_calendar_event_linked",
                        eventProperties: {
                            block_id: i.id,
                            calendar_event_id: s.uid,
                            from: c,
                            total_attendees: f.length,
                            attendees_in_workspace: (t = (0, r(328765).S)()) ? f.filter(e => r(229903).V.createChildStore(t, (0, r(729052).i1)({
                                userId: e.id,
                                spaceId: t.id
                            })).isMember()).length : 0,
                            has_conferencing: !!s.conferencing
                        }
                    }
                }), (0, r(440143).Y)().update(e => {
                    if (!e) return e;
                    let t = e.events.find(e => e.accountId === s.accountId && e.calendarId === s.calendarId && e.id === s.id);
                    return t && (t.blockAttachments = [i.pointer, ...t.blockAttachments ? ? []]), e
                })
            }

            function c(e) {
                let {
                    environment: t,
                    blockStore: o
                } = e, i = o.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.removeCalendarEventFromTranscriptionBlock",
                    environment: t,
                    canUndo: !0,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    perform: e => {
                        let i = o.getTitleStore();
                        i && r(41403).jQ({
                            environment: t,
                            store: i,
                            transaction: e,
                            selection: {
                                startIndex: 0,
                                endIndex: 1 / 0
                            }
                        }), (0, r(715144).z)({
                            stores: [o],
                            update: {
                                transcription_calendar_event: void 0
                            },
                            transaction: e
                        })
                    }
                }), (0, r(525779).clear)({
                    environment: t
                })
            }
            async function l(e) {
                var t;
                let {
                    environment: o,
                    event: i
                } = e, n = (null == (t = i.attendees) ? void 0 : t.map(e => e.email).filter(r(722371).O9)) ? ? [];
                if (0 === n.length) return [];
                let a = await o.api.callMainCellApi({
                    eventName: "findUsers",
                    environment: o,
                    data: {
                        emails: n
                    }
                });
                return "success" !== a.type ? [] : a.data.values.map(e => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.value
                }).filter(r(722371).O9)
            }

            function d(e) {
                var t;
                let {
                    event: o
                } = e;
                return (null == (t = o.attendees) ? void 0 : t.flatMap(e => e.notionUserId || !(0, r(722371).O9)(e.email) || e.resource ? [] : [{
                    email: e.email,
                    displayName: e.displayName ? ? ""
                }])) ? ? []
            }

            function u(e) {
                var t;
                let {
                    environment: o,
                    store: i,
                    emailToUserId: n
                } = e;
                if (0 === n.size) return;
                let a = null == (t = i.getFormat()) ? void 0 : t.transcription_calendar_event;
                if (!a) return;
                let s = a.externalAttendees.map(e => {
                        let t = n.get(e.email);
                        return void 0 !== t ? { ...e,
                            userId: t
                        } : e
                    }),
                    c = i.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCalendarActions.populateExternalAttendeeUserIds",
                    environment: o,
                    canUndo: !1,
                    cellTarget: c ? {
                        spaceWithId: c
                    } : void 0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [i],
                            update: {
                                transcription_calendar_event: { ...a,
                                    externalAttendees: s
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
            r.d(t, {
                FP: () => o,
                Mh: () => c,
                Ud: () => a,
                Wm: () => i,
                _p: () => l,
                b1: () => u,
                bk: () => n,
                uJ: () => s,
                yY: () => d
            }), r(944114), r(898992), r(354520), r(672577), r(430670), r(581454)
        },
        13717: (e, t, r) => {
            function o(e) {
                let {
                    spaceStore: t,
                    groupId: o
                } = e;
                return r(398652).C.createChildStore(t, (0, r(659341).S4)({
                    spacePermissionGroupId: o,
                    spaceId: t.id
                }))
            }

            function i(e) {
                let {
                    spaceStore: t,
                    groupId: o,
                    userId: i
                } = e;
                return r(291886).m.createChildStore(t, (0, r(867863).BZ)({
                    spacePermissionGroupId: o,
                    spaceId: t.id,
                    userId: i
                }))
            }
            r.d(t, {
                A: () => i,
                E: () => o
            })
        },
        42754: (e, t, r) => {
            async function o() {
                if (null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.checkScreenCaptureAccess) return await r(775657).electronApi.checkScreenCaptureAccess() ? r(347971).a3 : r(347971).JS
            }
            async function i() {
                try {
                    if (!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.requestScreenCaptureAccess)) return;
                    return await r(775657).electronApi.requestScreenCaptureAccess() ? r(347971).a3 : r(347971).JS
                } catch (e) {
                    return (0, r(773352).log)({
                        level: "error",
                        from: "nativeSystemAudioCapturePermissions",
                        type: "requestScreenCaptureAccessFailed",
                        error: (0, r(416607).convertErrorToLog)(e)
                    }), r(347971).JS
                }
            }
            async function n() {
                if (!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.checkAudioCaptureAccessWithResult)) return;
                let e = await r(775657).electronApi.checkAudioCaptureAccessWithResult();
                if (e && !e.error) switch (e.value.status) {
                    case "authorized":
                        return r(347971).a3;
                    case "denied":
                        return r(347971).JS;
                    case "not_determined":
                        return r(347971).wg;
                    default:
                        return
                }
            }
            async function a() {
                try {
                    if (!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.requestAudioCaptureAccessWithResult)) return;
                    let e = await r(775657).electronApi.requestAudioCaptureAccessWithResult();
                    if (!e || e.error) return;
                    switch (e.value.status) {
                        case "granted":
                            return r(347971).a3;
                        case "denied":
                            return r(347971).JS;
                        default:
                            return
                    }
                } catch (e) {
                    return (0, r(773352).log)({
                        level: "error",
                        from: "nativeSystemAudioCapturePermissions",
                        type: "requestAudioCaptureAccessFailed",
                        error: (0, r(416607).convertErrorToLog)(e)
                    }), r(347971).JS
                }
            }
            r.d(t, {
                e2: () => c,
                ww: () => l,
                xr: () => d
            });
            let s = (0, r(381453).Oo)(async () => {
                var e;
                return !!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && null != (e = r(775657).electronApi.coreAudioTap) && e.getStatus) && (await r(775657).electronApi.coreAudioTap.getStatus()).active
            });
            async function c(e) {
                return (!e || !!e.device.isElectronMac) && s()
            }
            async function l() {
                return await c() ? n() : o()
            }
            async function d() {
                return await c() ? a() : i()
            }
        },
        65314: (e, t, r) => {
            function o(e) {
                let {
                    summaryFormatDataState: t,
                    blockSelection: o,
                    defaultSelection: i,
                    selectedOnlySummaryFormatState: n
                } = e;
                if ("loading" === t.status) return {
                    status: "loading"
                };
                if ("error" === t.status) return {
                    status: "error",
                    errorMessage: t.errorMessage
                };
                let a = t.data,
                    s = void 0 === o || "auto" === o ? o : (0, r(257411).aE)({
                        selection: o,
                        summaryFormatData: a
                    });
                if (void 0 !== o && "auto" !== o && void 0 === s) return "idle" === n.status || "loading" === n.status ? {
                    status: "loading"
                } : "ready" === n.status ? {
                    status: "ready",
                    summaryFormatData: a,
                    blockSelection: o,
                    defaultSelection: i,
                    effectiveSelection: (0, r(257411).qz)(n.recordPointer),
                    labelState: {
                        kind: "selected",
                        recordPointer: n.recordPointer
                    },
                    selectedOnlyRecordPointer: n.recordPointer
                } : {
                    status: "ready",
                    summaryFormatData: a,
                    blockSelection: o,
                    defaultSelection: i,
                    effectiveSelection: "auto",
                    labelState: {
                        kind: "auto"
                    }
                };
                let c = (0, r(869708).OX)({
                        blockSelection: o,
                        defaultSelection: i,
                        summaryFormatData: a
                    }),
                    l = "auto" === c ? {
                        kind: "auto"
                    } : {
                        kind: "selected",
                        recordPointer: c.recordPointer
                    };
                return {
                    status: "ready",
                    summaryFormatData: a,
                    blockSelection: o,
                    defaultSelection: i,
                    effectiveSelection: "auto" === c ? "auto" : (0, r(257411).qz)(c.recordPointer),
                    labelState: l
                }
            }
            async function i(e) {
                let {
                    blockStore: t,
                    summaryFormatDataState: o,
                    blockSelection: i
                } = e;
                if ("ready" !== o.status || void 0 === i || "auto" === i || void 0 !== (0, r(257411).aE)({
                        selection: i,
                        summaryFormatData: o.data
                    })) return {
                    status: "idle"
                };
                let n = await (0, r(869708).JX)({
                    blockStore: t,
                    selection: i
                });
                switch (n.status) {
                    case "ready":
                        return {
                            status: "ready",
                            recordPointer: n.recordPointer
                        };
                    case "error":
                        return {
                            status: "error",
                            underlyingError: n.underlyingError
                        };
                    case "unavailable":
                        return {
                            status: "unavailable"
                        };
                    default:
                        return (0, r(722371).HB)(n)
                }
            }
            async function n(e) {
                var t;
                let {
                    environment: o,
                    blockStore: n,
                    spaceId: a
                } = e, s = null == (t = n.getModel()) || null == (t = t.getFormat()) ? void 0 : t.transcription_summary_template_selection, c = (0, r(869708).NP)(), l = (0, r(406881).zz)(o, {
                    spaceId: a
                });
                if ("loading" === l.status) {
                    try {
                        await r(406881).vW.awaitData(o, {
                            spaceId: a
                        })
                    } catch (e) {
                        return {
                            summaryFormatDataState: {
                                status: "error",
                                errorMessage: e instanceof Error ? e.message : void 0
                            },
                            blockSelection: s,
                            defaultSelection: c,
                            selectedOnlySummaryFormatState: {
                                status: "idle"
                            }
                        }
                    }
                    l = (0, r(406881).zz)(o, {
                        spaceId: a
                    })
                }
                if ("ready" !== l.status) return {
                    summaryFormatDataState: "loading" === l.status ? {
                        status: "error",
                        errorMessage: void 0
                    } : l,
                    blockSelection: s,
                    defaultSelection: c,
                    selectedOnlySummaryFormatState: {
                        status: "idle"
                    }
                };
                let d = await i({
                    blockStore: n,
                    summaryFormatDataState: l,
                    blockSelection: s
                });
                return {
                    summaryFormatDataState: l,
                    blockSelection: s,
                    defaultSelection: c,
                    selectedOnlySummaryFormatState: d
                }
            }
            r.d(t, {
                L: () => n,
                m: () => o
            }), r(16280)
        },
        83202: (e, t, r) => {
            r.d(t, {
                Ex: () => n,
                ov: () => i
            });
            let o = {
                titleMessage: (0, r(109939).YK)({
                    meetingNotesThreadTitle: {
                        id: "oracle.thread.meetingNotes.title",
                        defaultMessage: "AI Meeting Notes"
                    }
                }).meetingNotesThreadTitle,
                surface: "oracle_meeting_notes",
                createdSource: "oracle_meeting_notes",
                triggerPurpose: "The purpose of this chat is a conversation to help the user set up AI meeting notes, send your first message now to help the user set up AI meeting notes."
            };

            function i(e) {
                return (0, r(939679).p)({ ...e,
                    oracleThreadType: "meeting_notes",
                    oracleThreadConfig: o
                })
            }
            let n = {
                connectCalendar: `Step 2 - Connect Calendar
- Trigger: After the user has "recorded" a meeting note.
- Goal: Connect experience to real usage
- Principles:
  - Acknowledge value and reinforce what happened
  - Then introduce forward motion by nudging calendar connection as the obvious next step. Make sure to adapt if they’re already connected or show hesitation.
- Attach:
    - If user doesn’t have calendar connected, call \`connections.notion.createUserConnection({ type: "calendar" })\` to connect to calendar.
- Example:
  > And that’s it — Agent has automatically transformed your conversation into notes and next steps.
  >
  > Ready to use this in your actual meetings? Connect your calendar and I’ll pull in your upcoming events.
  >
  > {Connect Calendar}`
            }
        },
        120757: (e, t, r) => {
            r.d(t, {
                h: () => n
            }), r(296540);
            var o = r(474848);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.27 0.93 12.24 14.12",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M13.527 10.988a.55.55 0 0 1 .904.625 3.9 3.9 0 0 1-2.651 1.641v.705h1.718a.55.55 0 0 1 0 1.1H8.962a.55.55 0 0 1 0-1.1h1.718v-.705a3.9 3.9 0 0 1-2.652-1.641.55.55 0 0 1 .904-.625 2.79 2.79 0 0 0 2.297 1.206c.952 0 1.794-.476 2.298-1.206"
                        }), (0, o.jsx)("path", {
                            d: "M10.03.94c.966.001 1.75.784 1.75 1.75v2.435a2.8 2.8 0 0 0-1.1 0V2.69a.65.65 0 0 0-.65-.65h-6a.65.65 0 0 0-.65.65v8.8c0 .359.291.65.65.65h3.209l.007.012c.273.395.604.75.981 1.048l-.061.04H4.03a1.75 1.75 0 0 1-1.75-1.75v-8.8c0-.966.784-1.75 1.75-1.75z"
                        }), (0, o.jsx)("path", {
                            d: "M11.23 6.021c1 0 1.81.81 1.81 1.81v2.016a1.811 1.811 0 0 1-3.62 0V7.831c0-1 .81-1.81 1.81-1.81m0 1.1a.71.71 0 0 0-.71.71v2.016a.71.71 0 0 0 1.42 0V7.831a.71.71 0 0 0-.71-.71M7.202 5.41a.55.55 0 0 1 0 1.1H5.03a.55.55 0 1 1 0-1.1zm1.828-2a.55.55 0 1 1 0 1.1h-4a.55.55 0 1 1 0-1.1z"
                        })]
                    })
                },
                n = (0, r(104509).wt)("paperMicrophoneSmall", i, "small")
        },
        164093: (e, t, r) => {
            r.r(t), r.d(t, {
                displayDictationGenericErrorSnackbar: () => a,
                displayDictationPermissionSnackbar: () => i,
                displayDictationUsageErrorSnackbar: () => n,
                showTranscriptionErrorToast: () => s
            }), r(296540);
            var o = r(474848);

            function i(e) {
                var t;
                r(436555).D6({
                    label: (t = e) === r(347971).JS ? (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "No microphone permission. Allow access to your microphone in system settings",
                        id: "dictation.permission.microphone.snackbar.error"
                    }) : t === r(347971).rP ? (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "No microphone available. Connect your microphone in system settings",
                        id: "dictation.unavailable.microphone.snackbar.error"
                    }) : t === r(347971).JC ? (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "An unknown error occurred when trying to access the microphone.",
                        id: "dictation.permission.unknown.snackbar.error"
                    }) : void(0, r(722371).HB)(t),
                    right: (0, o.jsx)(r(593635).k, {})
                })
            }

            function n() {
                r(436555).D6({
                    label: (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "Audio usage limit reached. Try again later.",
                        id: "dictation.usage.snackbar.error"
                    })
                })
            }

            function a() {
                r(436555).D6({
                    label: (0, o.jsx)(r(109939).sA, {
                        defaultMessage: "Dictation failed. Please try again.",
                        id: "dictation.generic.snackbar.error"
                    })
                })
            }

            function s(e, t) {
                let {
                    pointer: i,
                    tabId: n,
                    title: a,
                    message: s,
                    name: c,
                    canRestart: l
                } = t, d = r(728372).AppStoreSidebarSpaceStore.state;
                if (!d) return;
                let u = r(970831).B.createChildStore(d, i);
                if (!u.isTranscriptionBlock()) return;
                let p = (0, r(774073).yz)(),
                    m = {
                        title: (0, o.jsx)(r(109939).sA, {
                            defaultMessage: "Go to meeting note",
                            id: "dictation.error.toast.action.goToBlock"
                        }),
                        onAction: () => {
                            r(819652).UW({
                                id: "transcription_error_notification"
                            }), (0, r(887584).N)({
                                environment: e,
                                blockStore: u,
                                tabId: n
                            }), (0, r(104310).u)({
                                event: {
                                    eventName: "error_transcription_toast_navigation_button_clicked",
                                    eventProperties: {
                                        block_id: u.id,
                                        error_name: c
                                    }
                                }
                            })
                        }
                    };
                r(819652).HK({
                    id: "transcription_error_notification",
                    icon: r(50171).exclamationMarkTriangleSmallIcon,
                    presentationType: "persistent",
                    variant: "error",
                    title: a,
                    message: s,
                    onDismiss: () => {
                        (0, r(104310).u)({
                            event: {
                                eventName: "error_transcription_toast_dismissed",
                                eventProperties: {
                                    block_id: u.id,
                                    error_name: c
                                }
                            }
                        })
                    },
                    actions: {
                        primary: l ? {
                            title: (0, o.jsx)(r(109939).sA, {
                                defaultMessage: "Resume",
                                id: "dictation.error.toast.action.resume"
                            }),
                            onAction: () => {
                                r(819652).UW({
                                    id: "transcription_error_notification"
                                }), (0, r(887584).N)({
                                    environment: e,
                                    blockStore: u,
                                    tabId: n
                                }), (0, r(338227).startTranscription)({
                                    environment: e,
                                    blockStore: u,
                                    from: "transcription_error_toast",
                                    audioConsentEnabled: p
                                }), (0, r(104310).u)({
                                    event: {
                                        eventName: "error_transcription_toast_resume_button_clicked",
                                        eventProperties: {
                                            block_id: u.id,
                                            error_name: c
                                        }
                                    }
                                })
                            }
                        } : m,
                        secondary: l ? m : void 0
                    }
                })
            }
            r(347971).JS, r(347971).rP, r(347971).JC
        },
        167322: (e, t, r) => {
            function o(e) {
                let {
                    settings: t,
                    updates: r
                } = e, o = function(e) {
                    let {
                        settings: t
                    } = e;
                    return {
                        default_selection: (null == t ? void 0 : t.default_selection) ? ? "auto",
                        notion_format_overrides: (null == t ? void 0 : t.notion_format_overrides) ? ? {},
                        dismissed_notion_format_keys: (null == t ? void 0 : t.dismissed_notion_format_keys) ? ? []
                    }
                }({
                    settings: t
                });
                return {
                    default_selection: r.default_selection ? ? o.default_selection,
                    notion_format_overrides: r.notion_format_overrides ? ? o.notion_format_overrides,
                    dismissed_notion_format_keys: r.dismissed_notion_format_keys ? ? o.dismissed_notion_format_keys
                }
            }

            function i(e) {
                let {
                    settings: t,
                    defaultSelection: r
                } = e;
                return o({
                    settings: t,
                    updates: {
                        default_selection: r
                    }
                })
            }

            function n(e) {
                return void 0 !== e && "auto" !== e
            }
            r.d(t, {
                Ez: () => i,
                Kw: () => n,
                Qz: () => o
            })
        },
        207108: (e, t, r) => {
            r.r(t), r.d(t, {
                isExplainableTranscriptionStopReason: () => l,
                isInAudioDetectionCooldown: () => a,
                meetingNotificationClicked: () => d,
                setAudioDetectionCooldown: () => n,
                showTranscriptionRecordingStoppedToast: () => s
            });
            var o = () => r(517224);
            let i = new(r(245541)).R({
                key: "last_join_and_transcribe_click_time",
                namespace: r(274919).cd,
                important: !1,
                trackingType: "preference"
            });

            function n() {
                i.setState(Date.now())
            }

            function a() {
                let e = i.state;
                return void 0 !== e && Date.now() - e < r(695216).Xb
            }

            function s(e, t) {
                let {
                    pointer: o,
                    from: i
                } = t, n = r(728372).AppStoreSidebarSpaceStore.state;
                if (!n) return;
                let a = r(970831).B.createChildStore(n, o);
                if (!(null != a && a.isTranscriptionBlock()) || "transcribing" === (0, r(869708).by)(a).state || !l(i)) return;
                let s = a.pathIsAccessibleAndAlive(),
                    d = c[i];
                r(819652).Iz({
                    id: "transcription_recording_stopped",
                    icon: r(120757).h,
                    iconColorPalette: "gray",
                    iconColorVariant: "inversePrimary",
                    presentationType: "persistent",
                    title: r(962299).A.getIntl().formatMessage({
                        id: "transcriptionRecordingStopped.toast.title",
                        defaultMessage: "Your meeting has stopped recording"
                    }),
                    message: r(962299).A.getIntl().formatMessage(d),
                    actions: s ? {
                        primary: {
                            title: r(962299).A.getIntl().formatMessage({
                                id: "transcriptionRecordingStopped.toast.action.goToMeetingNote",
                                defaultMessage: "Go to meeting note"
                            }),
                            onAction: () => {
                                r(819652).UW({
                                    id: "transcription_recording_stopped"
                                }), (0, r(545586).navigateToBlock)({
                                    environment: e,
                                    store: a,
                                    pageVisitSource: r(254656).y8.TranscriptionRecordingStoppedNotification
                                })
                            }
                        }
                    } : void 0
                })
            }
            let c = (0, r(109939).YK)({
                block_not_available: {
                    id: "transcriptionRecordingStopped.toast.subtitle.blockNotAvailable",
                    defaultMessage: "You no longer have access to this meeting note."
                },
                block_not_dictatable: {
                    id: "transcriptionRecordingStopped.toast.subtitle.blockNotDictatable",
                    defaultMessage: "The meeting note was deleted or is no longer accessible."
                },
                space_switch: {
                    id: "transcriptionRecordingStopped.toast.subtitle.spaceSwitch",
                    defaultMessage: "The meeting note is in another workspace."
                },
                missing_user_or_space: {
                    id: "transcriptionRecordingStopped.toast.subtitle.missingUserOrSpace",
                    defaultMessage: "Something went wrong with your account."
                },
                audio_recorder_stopped: {
                    id: "transcriptionRecordingStopped.toast.subtitle.audioRecorderStopped",
                    defaultMessage: "Something went wrong while recording your audio."
                },
                transcription_block_stopped: {
                    id: "transcriptionRecordingStopped.toast.subtitle.transcriptionBlockStopped",
                    defaultMessage: "The meeting note was stopped."
                }
            });

            function l(e) {
                return "button" !== e && "mobile_bar_button" !== e && "rate_limit" !== e && "upgrade_required" !== e && "transcription_error" !== e && "shortcut" !== e && "block_action" !== e && "topbar_menu" !== e && "native_action" !== e && "template_picker" !== e && "horizontal_template_picker" !== e && "quick_add" !== e && "new_page_and_dictate_shortcut" !== e && "new_page_and_dictate_action" !== e && "transcription_block" !== e && "forbidden" !== e && "start_transcription_error" !== e && "start_transcription_timed_out" !== e && "block_not_visible" !== e && !0
            }

            function d(e) {
                var t;
                let {
                    environment: i,
                    notification: a
                } = e;
                a.navigateToSettingsTab ? function(e) {
                    let {
                        tab: t,
                        notification: o
                    } = e;
                    (0, r(104310).u)({
                        event: {
                            eventName: "ai_meeting_notes_notification_dropdown_item_clicked",
                            eventProperties: {
                                action: "manage_notifications",
                                method: o.method,
                                intent: o.intent
                            }
                        }
                    }), r(227947).A.setState({ ...r(227947).A.state,
                        currentPage: t,
                        defaultTab: void 0,
                        open: !0,
                        openedFrom: "meeting_notification"
                    })
                }({
                    tab: a.navigateToSettingsTab,
                    notification: a
                }) : a.restartState ? function(e) {
                    let {
                        notifications: t
                    } = e;
                    for (let e of ((0, r(407259).B)(), t))(0, o().w)(e)
                }(a.restartState) : null != (t = a.transcriptionState) && t.state ? function(e) {
                    var t, o;
                    let {
                        environment: i,
                        notification: n
                    } = e, a = r(728372).AppStoreSidebarSpaceStore.state, s = null == (t = n.transcriptionState) ? void 0 : t.state, c = null == (o = n.transcriptionState) ? void 0 : o.blockId;
                    if (!a || !s || !c) return;
                    let l = r(970831).B.createChildStore(a, {
                        id: c,
                        table: "block",
                        spaceId: a.id
                    });
                    (0, r(887584).K)({
                        environment: i,
                        blockStore: l
                    }), n.stopTranscription && (0, r(338227).stopTranscription)({
                        environment: i,
                        blockStore: l,
                        from: "desktop_listening_pill"
                    })
                }({
                    environment: i,
                    notification: a
                }) : function(e) {
                    var t, o;
                    let {
                        environment: i,
                        notification: a
                    } = e, s = a.event ? (0, r(440143).Y)().getEvent(a.event) : void 0, c = a.intent ? ? "startTranscription";
                    ("joinMeeting" === c || "joinAndStartTranscription" === c) && null != s && null != (t = s.conferencing) && t.url && ((0, r(414824).R)({
                        environment: i,
                        data: {
                            type: "track",
                            payload: {
                                event: "joinMeeting",
                                eventId: s.id,
                                calendarId: s.calendarId,
                                conferencingProvider: s.conferencing.providerName,
                                method: a.method
                            }
                        }
                    }), (0, r(624621).L)({
                        environment: i,
                        url: s.conferencing.url
                    }));
                    let l = "joinMeeting" === c && !(null != (o = a.event) && o.conferencing);
                    ("startTranscription" === c || "joinAndStartTranscription" === c || l) && (s && !s.isAllDay ? (0, r(861842).kO)({
                        environment: i,
                        event: s,
                        from: "calendar_event_notification",
                        autoStart: a.autoStart,
                        method: a.method
                    }) : (0, r(207725).createAndNavigateToTranscriptionBlock)({
                        environment: i,
                        from: "audio_process_detection",
                        title: "none",
                        pageVisitSource: r(254656).y8.TranscriptionBlockNotification,
                        callback: () => {
                            a.autoStart && (0, r(356023).startTranscribingBlockOnPageFromTrustedSource)({
                                environment: i,
                                from: "audio_process_detection"
                            })
                        }
                    })), "joinAndStartTranscription" === c && n()
                }({
                    environment: i,
                    notification: a
                })
            }
        },
        207725: (e, t, r) => {
            r.r(t), r.d(t, {
                appendTranscriptionBlockToPage: () => i,
                createAndNavigateToTranscriptionBlock: () => a,
                createMeetingNoteAndGetUrl: () => l,
                createMeetingNoteAndGetUrlWhenReady: () => d,
                createTranscriptionBlock: () => s,
                navigateToTranscriptionBlock: () => n
            }), r(944114), r(898992), r(354520), r(672577);
            let o = (0, r(109939).YK)({
                newPage: {
                    id: "transcriptionCreateActions.newPage.title",
                    defaultMessage: "Try AI Meeting Notes "
                },
                defaultLocationToastTitle: {
                    id: "transcriptionCreateActions.defaultLocationToast.title",
                    defaultMessage: "Keep your meeting notes organized"
                },
                defaultLocationToastMessage: {
                    id: "transcriptionCreateActions.defaultLocationToast.message",
                    defaultMessage: "Choose a default database so new notes are saved there automatically."
                },
                defaultLocationToastCta: {
                    id: "transcriptionCreateActions.defaultLocationToast.cta",
                    defaultMessage: "Set default database"
                }
            });

            function i(e) {
                let {
                    environment: t,
                    from: o
                } = e, i = (0, r(328765).S)();
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.appendTranscriptionBlock",
                    environment: t,
                    canUndo: !0,
                    cellTarget: i ? {
                        spaceWithId: i.id
                    } : void 0,
                    perform: e => {
                        (0, r(150945).insertBlockAndEdit)({
                            environment: t,
                            createBlockItem: r(992140).ry[r(955630).xd.transcription],
                            analyticsFrom: o ? ? "quick_templates",
                            selection: [],
                            transaction: e
                        })
                    }
                })
            }

            function n(e) {
                let {
                    environment: t,
                    origin: o,
                    peekMode: i,
                    blockStore: n,
                    pageVisitSource: a,
                    callback: s
                } = e, c = n.getNavigableBlockStore() ? ? n, l = c.id === n.id ? void 0 : n.id;
                i ? (0, r(908919).V)({
                    environment: t,
                    openInNew: void 0,
                    store: c,
                    scrollToBlockId: l,
                    peekMode: i,
                    pageVisitSource: a,
                    resultsStore: void 0,
                    collectionContextStore: void 0
                }) : (0, r(545586).navigateToBlock)({
                    environment: t,
                    store: c,
                    scrollToBlockId: l,
                    visitType: r(981324).ig.Link,
                    pageVisitSource: a,
                    origin: o,
                    callback: s
                })
            }

            function a(e) {
                let t, {
                    environment: o,
                    from: i,
                    title: a,
                    origin: c,
                    parent: l,
                    calendarEvent: d,
                    peekMode: u,
                    sharedNote: p,
                    pageVisitSource: m = r(254656).y8.Create,
                    callback: g,
                    navigateOnCreate: f = !0
                } = e;
                if (t = p ? s({
                        environment: o,
                        from: i,
                        title: a,
                        parent: l,
                        calendarEvent: d,
                        sharedNote: p
                    }) : s({
                        environment: o,
                        from: i,
                        title: a,
                        parent: l,
                        calendarEvent: d
                    })) return f && n({
                    environment: o,
                    blockStore: t.pageStore,
                    pageVisitSource: m,
                    origin: c,
                    peekMode: u,
                    callback: g
                }), t.transcriptionBlockStore
            }

            function s(e) {
                var t, i, n;
                let {
                    environment: a,
                    from: s,
                    title: c,
                    parent: l,
                    calendarEvent: d,
                    sharedNote: u
                } = e, p = (0, r(328765).S)(), m = r(728372).AppStoreSidebarSpaceViewStore.state;
                if (!p || !m) return;
                let {
                    performResult: g
                } = (0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.createTranscriptionBlock",
                    environment: a,
                    canUndo: !1,
                    cellTarget: {
                        spaceWithId: p.id
                    },
                    perform: e => {
                        var t;
                        let i = function(e) {
                                let {
                                    spaceStore: t,
                                    collection: o
                                } = e;
                                if (!o) return;
                                let i = r(356912).m.createChildStore(t, o);
                                return i.isDefined() ? !i.getAlive() || i.pathIsDead() || !i.canEdit() ? {
                                    valid: !1,
                                    reason: "invalid"
                                } : {
                                    valid: !0,
                                    collection: o
                                } : {
                                    valid: !1,
                                    reason: "not_loaded"
                                }
                            }({
                                spaceStore: p,
                                collection: null == (t = r(728372).AppStoreSidebarSpaceViewStore.state) || null == (t = t.getSettings()) || null == (t = t.default_meeting_notes_location) ? void 0 : t.collection
                            }),
                            n = (null == i ? void 0 : i.valid) === !0 ? i.collection : void 0,
                            g = "private" === l || "none" === l || (null == l ? void 0 : l.table) === "collection" || !l,
                            f = g ? r(964232).IT({
                                environment: a,
                                spaceStore: p,
                                spaceViewStore: m,
                                parent: l ? ? n ? ? "private",
                                transaction: e,
                                from: s
                            }) : r(970831).B.createChildStore(m, l);
                        if (!f.isType(r(955630).xd.page)) return;
                        if (u) {
                            let t = [];
                            for (let e of d.attendees ? ? []) e.notionUserId && t.push({
                                type: "user_permission",
                                role: "editor",
                                user_id: e.notionUserId
                            });
                            t.length && (0, r(176609).z)({
                                environment: a,
                                store: f,
                                permissionItems: t,
                                transaction: e
                            })
                        }
                        if (g) {
                            let t = function(e, t) {
                                    var i, n, a;
                                    let s, c, l;
                                    switch (e) {
                                        case "title_with_event":
                                            if (t) {
                                                let {
                                                    startTime: e
                                                } = r(3553).Wm(t);
                                                l = {
                                                    summary: t.summary,
                                                    startDateTime: e
                                                }
                                            } else l = function() {
                                                let e = (0, r(440143).Y)().getEvents(),
                                                    t = (0, r(440143).Y)().getCurrentAccounts();
                                                if (!e || 0 === e.length) return;
                                                let o = e.filter(e => !e.isAllDay && r(906745).DateTime.fromISO(e.start.dateTime, {
                                                        zone: e.start.timeZone
                                                    }).toISODate() === r(906745).DateTime.now().toISODate()),
                                                    i = (0, r(964282).y6)({
                                                        events: o,
                                                        accounts: t,
                                                        thresholds: void 0,
                                                        filters: void 0
                                                    }).find(e => {
                                                        let t = e.attendees ? ? [];
                                                        return !e.isAllDay && "accepted" === e.responseStatus && !!e.summary && !(t.length < 1)
                                                    });
                                                if (null != i && i.summary && !i.isAllDay) {
                                                    let e = r(906745).DateTime.fromISO(i.start.dateTime, {
                                                        zone: i.start.timeZone
                                                    });
                                                    return {
                                                        summary: i.summary,
                                                        startDateTime: e
                                                    }
                                                }
                                            }();
                                            s = null != (i = l) && i.summary ? [`${l.summary} `] : void 0, c = null == (n = l) ? void 0 : n.startDateTime;
                                            break;
                                        case "new_page":
                                            s = [r(962299).A.getIntl().formatMessage(o.newPage)];
                                            break;
                                        default:
                                            s = void 0, c = void 0
                                    }
                                    let d = (0, r(714350).P)();
                                    return c = (null == (a = c) ? void 0 : a.setZone(d)) ? ? r(906745).DateTime.now(), [s, r(247438).wmz(r(247438).Ww9({
                                        type: "datetime",
                                        start_date: c.toFormat(r(25825).tr),
                                        start_time: c.toFormat(r(943003).GE),
                                        time_zone: d,
                                        date_format: "relative"
                                    }), [
                                        [r(247438).BQP.Bold]
                                    ])].filter(r(722371).O9)
                                }(c, d),
                                i = f.getBlockTitleStore();
                            r(41403).yr({
                                environment: a,
                                store: i,
                                tokens: t,
                                transaction: e,
                                index: 0
                            })
                        } else if (n) {
                            let t = r(356912).m.createChildStore(p, n);
                            if (t) {
                                let o = t.getDefaultTemplatePageStore();
                                o && r(845422).TB({
                                    title: "template",
                                    environment: a,
                                    store: f,
                                    templateStore: o,
                                    isKeyboard: !1,
                                    isCreateIn: !1,
                                    transaction: e,
                                    from: s
                                })
                            }
                        }
                        let v = r(992140).ry.transcription,
                            h = r(95783).w({
                                environment: a,
                                transaction: e,
                                inMemoryRecordCache: p.inMemoryRecordCache,
                                from: s,
                                selection: [],
                                spaceId: p.id,
                                createBlockItem: v
                            });
                        return d && (r(3553).Ud({
                            blockStore: h,
                            event: d,
                            transaction: e,
                            environment: a
                        }), r(3553).bk({
                            blockStore: h,
                            event: d,
                            transaction: e,
                            environment: a
                        })), r(579695).Ti({
                            childStore: h,
                            parentStore: f,
                            transaction: e
                        }), {
                            createdTranscriptionBlock: h,
                            createdPage: f,
                            shouldResetDefaultMeetingNotesLocation: (null == i ? void 0 : i.valid) === !1 && "invalid" === i.reason
                        }
                    }
                });
                if (!g) return;
                g.shouldResetDefaultMeetingNotesLocation && function(e) {
                    let {
                        environment: t,
                        spaceViewStore: o
                    } = e, i = o.getSpaceId();
                    (0, r(377796).createAndCommit)({
                        userAction: "transcriptionCreateActions.resetDefaultMeetingNotesLocation",
                        environment: t,
                        canUndo: !1,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        perform: e => {
                            (0, r(421439).y4)({
                                store: o,
                                operation: {
                                    pointer: o.pointer,
                                    path: ["settings", "default_meeting_notes_location"],
                                    command: "set",
                                    args: void 0
                                },
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: a,
                    spaceViewStore: m
                });
                let f = r(728372).AppStoreCurrentUserSettingsStore.state,
                    v = null == f || null == (t = f.getSettings()) ? void 0 : t.seen_default_meeting_notes_location_toast,
                    h = null == (i = m.getSettings()) ? void 0 : i.default_meeting_notes_location,
                    S = r(185995).default.getData(a, {
                        spaceId: m.getSpaceId()
                    }),
                    A = (0, r(278662).Jd)(S ? ? []),
                    y = (null == A ? void 0 : A.offer.type) === "trial" && (0, r(278662).w5)(A.offer.campaign),
                    _ = null == f || null == (n = f.getSettings()) ? void 0 : n.signup_time,
                    T = void 0 !== _ && Date.now() - _ >= 7 * r(627179).nD;
                if (void 0 === v && f)(0, r(377796).createAndCommit)({
                    userAction: "transcriptionCreateActions.markFirstMeetingNotesUse",
                    environment: a,
                    canUndo: !1,
                    cellTarget: "main",
                    perform: e => {
                        (0, r(862759).m)({
                            userSettingsStore: f,
                            transaction: e,
                            data: {
                                seen_default_meeting_notes_location_toast: !1
                            }
                        })
                    }
                });
                else if (!1 === v && !h && !y && T && f) {
                    let e = r(962299).A.getIntl();
                    r(819652).Iz({
                        id: "default-meeting-notes-location-toast",
                        title: e.formatMessage(o.defaultLocationToastTitle),
                        message: e.formatMessage(o.defaultLocationToastMessage),
                        presentationType: "transient",
                        actions: {
                            primary: {
                                title: e.formatMessage(o.defaultLocationToastCta),
                                onAction: () => {
                                    r(819652).UW({
                                        id: "default-meeting-notes-location-toast"
                                    }), r(599754).Ow({
                                        currentPage: "ai",
                                        highlightedSetting: "aiSettingsDefaultMeetingNotesLocation",
                                        openedFrom: "default_meeting_notes_location_toast"
                                    })
                                }
                            }
                        }
                    }), (0, r(377796).createAndCommit)({
                        userAction: "transcriptionCreateActions.markDefaultLocationToastAsSeen",
                        environment: a,
                        canUndo: !1,
                        cellTarget: "main",
                        perform: e => {
                            (0, r(862759).m)({
                                userSettingsStore: f,
                                transaction: e,
                                data: {
                                    seen_default_meeting_notes_location_toast: !0
                                }
                            })
                        }
                    })
                }
                return (0, r(440143).Y)().update(e => {
                    let t = g.createdTranscriptionBlock.pointer;
                    return e && d && e.events.push({ ...d,
                        blockAttachments: [t, ...d.blockAttachments ? ? []]
                    }), e
                }), {
                    transcriptionBlockStore: g.createdTranscriptionBlock,
                    pageStore: g.createdPage
                }
            }
            async function c() {
                await Promise.all([r(728372).default.waitUntil(() => {
                    var e;
                    return !!(null == (e = (0, r(328765).S)()) ? void 0 : e.isReady())
                }), r(728372).default.waitUntil(() => {
                    var e;
                    return !!(null == (e = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.isReady())
                })]);
                let e = (0, r(328765).S)(),
                    t = r(728372).AppStoreSidebarSpaceViewStore.state;
                e && t || r(773352).log({
                    level: "error",
                    from: "transcriptionCreateActions",
                    type: "waitForTranscriptionStoresUnexpectedUndefined"
                })
            }

            function l(e) {
                let t = s({
                    environment: e.environment,
                    from: e.from,
                    title: e.title ? ? "new_page",
                    parent: void 0
                });
                if (!t) return;
                let o = t.pageStore.id,
                    i = t.transcriptionBlockStore.id;
                return {
                    pageId: o,
                    blockId: i,
                    spaceId: t.pageStore.getSpaceId(),
                    blockUrl: (0, r(483227).J8)({
                        store: t.transcriptionBlockStore,
                        scrollToBlockId: t.transcriptionBlockStore.id,
                        fullyQualified: !0,
                        pageVisitSource: e.pageVisitSource
                    })
                }
            }
            async function d(e) {
                return await c(), l(e)
            }
        },
        216735: (e, t, r) => {
            r.d(t, {
                $g: () => o().$g,
                UJ: () => o().UJ,
                qY: () => i().getCurrentClientSessionId,
                sN: () => o().sN
            });
            var o = () => r(255496),
                i = () => r(328616)
        },
        225900: (e, t, r) => {
            r.d(t, {
                N: () => o
            });

            function o(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    transcript: i,
                    parentPointer: n,
                    threadId: a,
                    workflowId: s,
                    createdSource: c,
                    agentMessageKey: l,
                    debugOverrides: d
                } = e, u = a ? ? (0, r(295447).Z1)({
                    environment: t,
                    table: r(298085).T,
                    spaceId: o.id
                });
                return (0, r(757688).WE)({
                    environment: t,
                    clientStore: r(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: u,
                        transcript: i,
                        workflowId: s,
                        parentPointer: n || {
                            table: r(213003).NX,
                            id: o.id,
                            spaceId: o.id
                        },
                        createdSource: c,
                        agentMessageKey: l
                    },
                    additionalDebugOverrides: d,
                    sendPatchResponse: !0
                }), r(174148).E.createChildStore(o, {
                    id: u,
                    spaceId: o.id,
                    table: r(298085).T
                })
            }
        },
        255496: (e, t, r) => {
            let o, i, n, a, s;
            r.d(t, {
                ys: () => y,
                zz: () => v,
                YE: () => A,
                ZQ: () => h,
                bH: () => f,
                YA: () => _,
                Ux: () => m,
                gA: () => S,
                L6: () => g,
                $I: () => T,
                Ep: () => ei,
                UJ: () => U,
                aT: () => G,
                $g: () => Q,
                k3: () => X,
                rJ: () => Z,
                sN: () => ee,
                A7: () => V,
                bT: () => H
            }), r(16280), r(413611);
            class c {
                sessionStartedAt;
                dictationSessionId;
                environment;
                connectionStartedAt;
                tokenFetchDurationMs;
                socketOpenDurationMs;
                currentConnectionIsReconnect = !1;
                connectionEmitted = !1;
                disconnectedAt;
                reconnectEpisodeDisconnectTrigger;
                connectionSuccessCount = 0;
                connectionFailureCount = 0;
                reconnectEpisodeCount = 0;
                reconnectAbandonedCount = 0;
                totalDisconnectedDurationMs = 0;
                lastTransportType;
                everConnected = !1;
                currentlyDisconnected = !1;
                sessionEmitted = !1;
                audioLanguage;
                lastAbandonedReason;
                constructor(e) {
                    this.environment = e.environment, this.dictationSessionId = e.dictationSessionId, this.sessionStartedAt = Date.now()
                }
                recordConnectionAttemptStarted(e) {
                    this.connectionStartedAt = Date.now(), this.tokenFetchDurationMs = void 0, this.socketOpenDurationMs = void 0, this.currentConnectionIsReconnect = e, this.connectionEmitted = !1
                }
                recordTokenFetchComplete(e) {
                    this.tokenFetchDurationMs = e
                }
                recordConnectionOpen(e) {
                    this.connectionEmitted || (this.socketOpenDurationMs = e, this.connectionSuccessCount++, this.everConnected = !0, this.emitConnectionEvent("success"))
                }
                recordConnectionFailed(e) {
                    var t;
                    if (this.connectionEmitted) return;
                    this.connectionFailureCount++;
                    let {
                        outcome: o,
                        errorCategory: i
                    } = (t = e) instanceof Error ? "PrimusConnectionTimeoutError" === t.name ? {
                        outcome: "timeout",
                        errorCategory: "timeout"
                    } : (0, r(101787).USz)(t) && (401 === t.statusCode || 403 === t.statusCode) || t.message.includes("Failed to get audio processor auth token") ? {
                        outcome: "token_fetch_failed",
                        errorCategory: "auth"
                    } : "type" in t && "TransportError" === t.type || t.message.includes("Primus connection") ? {
                        outcome: "error",
                        errorCategory: "network"
                    } : t.message.includes("Unable to recover") || t.message.includes("Failed to reconnect") ? {
                        outcome: "error",
                        errorCategory: "reconnect_exhausted"
                    } : t.message.includes("WebSocket") || t.message.includes("websocket") || "code" in t && "number" == typeof t.code && t.code >= 1e3 && t.code <= 1015 ? {
                        outcome: "error",
                        errorCategory: "websocket"
                    } : {
                        outcome: "error",
                        errorCategory: "internal"
                    } : {
                        outcome: "error",
                        errorCategory: "internal"
                    };
                    this.emitConnectionEvent(o, i)
                }
                recordConnectionTimeout() {
                    this.connectionEmitted || (this.connectionFailureCount++, this.emitConnectionEvent("timeout", "timeout"))
                }
                recordDisconnect(e) {
                    !this.currentlyDisconnected && (this.currentlyDisconnected = !0, this.disconnectedAt = Date.now(), this.reconnectEpisodeDisconnectTrigger = e, this.reconnectEpisodeCount++)
                }
                recordReconnectSuccess(e) {
                    this.closeDisconnectedEpisode()
                }
                recordReconnectAbandoned(e) {
                    this.reconnectAbandonedCount++, this.lastAbandonedReason = e
                }
                recordTransportType(e) {
                    this.lastTransportType = e
                }
                recordAudioLanguage(e) {
                    this.audioLanguage = e
                }
                recordSessionOutcome() {
                    if (this.sessionEmitted) return;
                    this.sessionEmitted = !0;
                    let e = this.currentlyDisconnected;
                    this.closeDisconnectedEpisode();
                    let t = Date.now() - this.sessionStartedAt,
                        r = t > 0 ? this.totalDisconnectedDurationMs / t * 100 : 0,
                        o = this.classifySessionOutcome(r, e);
                    this.safeTrack({
                        eventName: "audio_processor.client.session_outcome",
                        eventProperties: {
                            outcome: o,
                            dictation_session_id: this.dictationSessionId,
                            session_duration_ms: t,
                            connection_success_count: this.connectionSuccessCount,
                            connection_failure_count: this.connectionFailureCount,
                            reconnect_episode_count: this.reconnectEpisodeCount,
                            reconnect_abandoned_count: this.reconnectAbandonedCount,
                            total_disconnected_duration_ms: this.totalDisconnectedDurationMs,
                            disconnected_percentage: Math.round(100 * r) / 100,
                            audio_language: this.audioLanguage,
                            reconnect_abandoned_reason: this.lastAbandonedReason ? ? (e && this.everConnected ? "user_stopped" : void 0)
                        }
                    })
                }
                emitConnectionEvent(e, t) {
                    if (this.connectionEmitted) return;
                    this.connectionEmitted = !0;
                    let r = void 0 !== this.connectionStartedAt ? Date.now() - this.connectionStartedAt : 0;
                    this.safeTrack({
                        eventName: "audio_processor.client.connection",
                        eventProperties: {
                            outcome: e,
                            total_duration_ms: r,
                            token_fetch_duration_ms: this.tokenFetchDurationMs,
                            socket_open_duration_ms: this.socketOpenDurationMs,
                            is_reconnect: this.currentConnectionIsReconnect,
                            dictation_session_id: this.dictationSessionId,
                            error_category: t ? ? void 0,
                            transport_type: this.lastTransportType
                        }
                    })
                }
                closeDisconnectedEpisode() {
                    this.currentlyDisconnected && void 0 !== this.disconnectedAt && (this.totalDisconnectedDurationMs += Date.now() - this.disconnectedAt), this.currentlyDisconnected = !1, this.disconnectedAt = void 0, this.reconnectEpisodeDisconnectTrigger = void 0
                }
                classifySessionOutcome(e, t) {
                    return !this.everConnected || t ? "failed_session" : 0 === this.reconnectEpisodeCount && 0 === this.connectionFailureCount ? "clean_session" : this.reconnectAbandonedCount > 0 || e >= 5 ? "degraded_session" : "recovered_session"
                }
                safeTrack(e) {
                    try {
                        (0, r(104310).u)({
                            event: e
                        })
                    } catch (t) {
                        r(773352).log({
                            level: "warning",
                            from: "audioProcessorClientTracker",
                            team: "ai-meeting-notes",
                            type: "telemetryEmitFailed",
                            data: {
                                miscDataToConvertToString: {
                                    eventName: e.eventName,
                                    dictationSessionId: this.dictationSessionId,
                                    error: t instanceof Error ? t.message : String(t)
                                }
                            }
                        })
                    }
                }
            }
            async function l(e, t) {
                return await r(612483).L5({
                    fn: async () => {
                        let t = await e.api.callApi({
                            eventName: "getAudioProcessorAuthToken",
                            environment: e,
                            data: {}
                        });
                        if ("success" === t.type) return t.data.accessToken;
                        throw t.error
                    },
                    handleError: (e, o, i) => (i > 0 && r(773352).log({
                        level: "info",
                        from: t,
                        team: "editor",
                        type: "audioProcessorAuthTokenRetry",
                        data: {
                            miscDataToConvertToString: {
                                retryCount: i,
                                isLastAttempt: o,
                                sessionId: (0, r(328616).getCurrentClientSessionId)(),
                                errorMessage: e instanceof Error ? e.message : "Unknown error"
                            }
                        }
                    }), (0, r(101787).USz)(e) && !e.retryable || o) ? {
                        status: "throw",
                        error: e
                    } : {
                        status: "retry"
                    },
                    retryAttemptsMS: [500, 1e3, 2e3],
                    retryAttemptRandomOffsetMS: 200,
                    initialInput: void 0
                })
            }

            function d(e, t) {
                r(374176).default.afterNextFlush(() => {
                    r(218744).default.checkGate({
                        gateName: "audio_processor_client_send_request_metric_enabled"
                    }) && (0, r(195857).DO_NOT_USE_trackLegacy)("audio_processor.client.send_request", t)
                })
            }
            let u = r(969475).union([r(969475).object({
                    required: {
                        audioDuration: r(969475).number(),
                        id: r(969475).string(),
                        status: r(969475).literal("complete"),
                        text: r(969475).string()
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        audioDuration: r(969475).number(),
                        id: r(969475).string(),
                        reason: r(969475).string(),
                        status: r(969475).literal("error")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        audioDuration: r(969475).number(),
                        id: r(969475).string(),
                        status: r(969475).literal("ignore")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        audioDuration: r(969475).number(),
                        id: r(969475).string(),
                        status: r(969475).literal("pending")
                    },
                    optional: {}
                })]),
                p = r(969475).union([r(969475).object({
                    required: {
                        settings: r(969475).object({
                            required: {
                                max_block_char_size: r(969475).number(),
                                transcription_model: r(969475).literals("baseten_diarization", "fireworks_diarization", "no_diarization", "openai_diarization")
                            },
                            optional: {}
                        }),
                        type: r(969475).literal("audio_writer_settings")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        message: r(969475).string(),
                        name: r(969475).literal("ForbiddenError"),
                        status: r(969475).literal(403),
                        type: r(969475).literal("forbidden")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        currentS: r(969475).number(),
                        limitS: r(969475).number(),
                        type: r(969475).literal("free_trial_limit_update")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        message: r(969475).string(),
                        type: r(969475).literal("openai_error")
                    },
                    optional: {
                        status: r(969475).number()
                    }
                }), r(969475).object({
                    required: {
                        requestId: r(969475).string(),
                        result: r(969475).unknown(),
                        status: r(969475).literals("error", "ok"),
                        type: r(969475).literal("response")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        state: r(969475).literals("healthy", "temporarily_unavailable"),
                        type: r(969475).literal("service_status_update")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        audioSessionId: r(969475).string(),
                        isAudioSessionComplete: r(969475).boolean(),
                        isSegmentComplete: r(969475).boolean(),
                        segmentId: r(969475).string(),
                        transcription: r(969475).lazy(() => u),
                        type: r(969475).literal("transcription")
                    },
                    optional: {
                        audioSource: r(969475).literals("microphone", "system_audio"),
                        segmentSortkey: r(969475).number(),
                        speakerName: r(969475).string()
                    }
                }), r(969475).object({
                    required: {
                        message: r(969475).string(),
                        name: r(969475).literal("UpgradeRequiredError"),
                        status: r(969475).literal(403),
                        type: r(969475).literal("upgrade_required")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        message: r(969475).string(),
                        name: r(969475).literal("UserRateLimitResponse"),
                        retryAfterSec: r(969475).undefinable(r(969475).number()),
                        status: r(969475).literal(429),
                        type: r(969475).literal("rate_limited")
                    },
                    optional: {}
                }), r(969475).object({
                    required: {
                        talking: r(969475).boolean(),
                        type: r(969475).literal("vad")
                    },
                    optional: {}
                })]),
                m = "transcription",
                g = "vad",
                f = "rate_limited",
                v = "forbidden",
                h = "openai_error",
                S = "upgrade_required",
                A = "free_trial_info",
                y = "audio_writer_settings",
                _ = "service_status_update",
                T = (0, r(827380).A)(),
                w = async () => Promise.all([r.e(71136), r.e(36733)]).then(r.bind(r, 328616)),
                b = new(r(839621)).O(20),
                k = new Map,
                C = "audioProcessorInternals",
                I = r(882108).u,
                M = "uninitialized",
                D = new Map,
                E = new(r(839621)).O(1),
                B = "u" > typeof self && "onpagehide" in self ? "pagehide" : "unload",
                R = !1;

            function P(e) {
                "persisted" in e && e.persisted || ei({
                    queuePauseTranscriptionCheckTaskImmediately: !0
                })
            }

            function N() {
                !R && "u" > typeof window && (window.addEventListener(B, P), R = !0)
            }

            function x() {
                R && "u" > typeof window && (window.removeEventListener(B, P), R = !1)
            }

            function U() {
                return "open" === M
            }

            function L(e, t = "info", o) {
                r(773352).log({
                    level: t,
                    from: C,
                    team: "editor",
                    type: `primusClient${e}`,
                    data: {
                        miscDataToConvertToString: {
                            sessionId: (0, r(328616).getCurrentClientSessionId)(),
                            ...o
                        }
                    }
                })
            }

            function F() {
                if (void 0 !== (i = function(e) {
                        var t;
                        let r = null == e || null == (t = e.socket) || null == (t = t.transport) || null == (t = t.query) ? void 0 : t.transport;
                        if ("websocket" === r || "polling" === r) return r
                    }(this))) {
                    var e;
                    null == (e = n) || e.recordTransportType(i)
                }
            }

            function z(e) {
                switch (e) {
                    case "end":
                        M = "closed";
                        break;
                    case "open":
                        M = "open";
                        break;
                    case "opening":
                        M = "opening"
                }
            }
            async function W(e) {
                return E.enqueue(async () => O(e))
            }
            async function O(e) {
                if (a) {
                    if (a && !J({
                            connectionState: M,
                            primusClient: a
                        })) a.removeAllListeners("end"), a.destroy(), a = void 0, x();
                    else if (a) return N(), a
                }
                try {
                    let t = await j(e);
                    return void 0 !== a && (a.removeAllListeners("end"), a.destroy()), a = t, N(), a
                } catch (e) {
                    var t;
                    throw a = void 0, x(), M = "failed_to_create", null == (t = n) || t.recordConnectionFailed(e), r(773352).log({
                        level: "error",
                        from: C,
                        team: "editor",
                        type: "primusClientCreationFailed",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                sessionId: (0, r(328616).getCurrentClientSessionId)()
                            }
                        }
                    }), e
                }
            }
            async function q(e) {
                if (a)
                    if (J({
                            connectionState: M,
                            primusClient: a
                        })) return N(), a;
                    else return W(e)
            }
            async function V(e) {
                return a && ei(), n = new c({
                    environment: e,
                    dictationSessionId: (0, r(328616).getCurrentClientSessionId)()
                }), W(e)
            }

            function J(e) {
                let {
                    connectionState: t,
                    primusClient: r
                } = e;
                return ("open" !== t || 2 !== r.readyState) && "failed_to_create" !== t || (L("NotHealthy", "info", {
                    connectionState: t,
                    clientReadyState: r.readyState
                }), !1)
            }
            async function j(e) {
                var t, o;
                let i;
                M = "creating", null == (t = n) || t.recordConnectionAttemptStarted(Y > 0);
                let {
                    createClient: a
                } = await w(), s = Date.now();
                try {
                    i = await l(e, C), null == (o = n) || o.recordTokenFetchComplete(Date.now() - s)
                } catch (e) {
                    if (r(773352).log({
                            level: "error",
                            from: C,
                            team: "editor",
                            type: "failedToGetAudioProcessorToken",
                            error: (0, r(416607).convertErrorToLog)(e),
                            data: {
                                miscDataToConvertToString: {
                                    sessionId: (0, r(328616).getCurrentClientSessionId)()
                                }
                            }
                        }), e instanceof Error) throw e;
                    throw Error(`Failed to get audio processor auth token after retries: ${String(e)}`)
                }
                let c = (0, r(328616).getCurrentClientSessionId)(),
                    d = D.get(c),
                    u = void 0 !== d && d !== i,
                    p = a({
                        minReconnectDelayMs: .5 * r(627179).TD,
                        maxReconnectDelayMs: 2 * r(627179).TD,
                        jwtToken: i,
                        isReauth: u
                    }),
                    m = Date.now();
                p.on("data", er);
                let g = new Promise((e, t) => {
                    let o = !1;
                    p.on("open", () => {
                        if (!o) {
                            var t;
                            o = !0, r(284771).A.setState("connected"), L("Open"), null == (t = n) || t.recordConnectionOpen(Date.now() - m), I.setTimeout(() => {
                                $(p, i ? ? ""), e(p)
                            }, 0)
                        }
                    }), p.on("error", e => {
                        if (!o) {
                            var i;
                            let a;
                            o = !0, r(284771).A.setState("disconnected"), a = "TransportError" === e.type ? {
                                level: "info",
                                from: C,
                                team: "no-team-specified",
                                type: "primusTransportError",
                                error: (0, r(416607).convertErrorToLog)(e)
                            } : {
                                level: "error",
                                from: C,
                                team: "no-team-specified",
                                type: "unknownPrimusError",
                                error: (0, r(416607).convertErrorToLog)(e)
                            }, (0, r(69741).rQ)(1) && r(773352).log(a), null == (i = n) || i.recordConnectionFailed(e), e instanceof Error ? t(e) : t(Error(`Primus connection error: ${String(e)}`))
                        }
                    }), p.on("timeout", () => {
                        if (!o) {
                            var e;
                            o = !0, r(284771).A.setState("disconnected"), L("Timeout"), null == (e = n) || e.recordConnectionTimeout(), t(Error("Primus connection timeout"))
                        }
                    })
                });
                return p.on("reconnected", e => {
                    var t;
                    M = "open", r(284771).A.setState("connected"), null == (t = n) || t.recordReconnectSuccess("primus"), $(p, i || ""), L("Reconnected", "info", {
                        reconnectDuration: null == e ? void 0 : e.duration
                    })
                }), p.on("reconnect", () => {
                    var e;
                    r(284771).A.setState("disconnected"), L("Reconnect"), null == (e = n) || e.recordDisconnect("reconnect"), K()
                }), p.on("reconnect scheduled", e => {
                    ((null == e ? void 0 : e.attempt) === void 0 || (null == e ? void 0 : e.duration) === void 0 || e.attempt > 2 || e.duration > 5e3 || void 0 === r(284771).A.state) && r(284771).A.setState("disconnected"), L("ReconnectScheduled")
                }), p.on("reconnect timeout", () => {
                    r(284771).A.setState("disconnected"), L("ReconnectTimeout")
                }), p.on("reconnect failed", () => {
                    var e;
                    M = "closed", r(284771).A.setState("disconnected"), null == (e = n) || e.recordReconnectAbandoned("max_retries"), L("ReconnectFailed")
                }), p.on("destroy", () => {
                    M = "closed", L("Destroy")
                }), p.on("close", () => {
                    var e;
                    M = "closed", r(284771).A.setState("disconnected"), null == (e = n) || e.recordDisconnect("close"), L("Close")
                }), p.on("online", () => {
                    L("Online")
                }), p.on("offline", () => {
                    var e;
                    M = "closed", r(284771).A.setState("disconnected"), null == (e = n) || e.recordDisconnect("offline"), L("Offline")
                }), p.on("incoming::ping", F), p.on("readyStateChange", z), p.on("end", () => {
                    var t;
                    M = "closed", r(284771).A.setState("disconnected"), null == (t = n) || t.recordDisconnect("end"), p.off("readyStateChange", z), K(), eo(p, e), r(773352).log({
                        level: "info",
                        from: C,
                        team: "editor",
                        type: "connectionEnded",
                        data: {
                            miscDataToConvertToString: {
                                sessionId: (0, r(328616).getCurrentClientSessionId)()
                            }
                        }
                    })
                }), window.__primusClient_audioProcessor = p, r(975162).V1(g, 1e4, {
                    customError: () => new ea(1e4)
                }).catch(e => {
                    throw e instanceof ea && g.then(e => {
                        e.end()
                    }).catch(e => {}), e
                })
            }

            function $(e, t) {
                var o;
                Y = 0, D.set((0, r(328616).getCurrentClientSessionId)(), t), null == (o = s) || o(e)
            }
            let Y = 0;

            function G(e) {
                if (s) throw Error("Having more than one onConnectionOpenCallback is not currently supported");
                s = e
            }

            function H() {
                s = void 0
            }

            function K() {
                for (let e of k.values()) e.reject(Error("Cancelled pending requests"));
                k.clear()
            }
            async function Q(e) {
                var t, o, i;
                let {
                    base64Audio: a,
                    environment: s,
                    language: c,
                    onRequestSent: l,
                    spaceId: d,
                    blockId: u,
                    audioSource: p
                } = e, m = null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                if (m && d) return null == (o = n) || o.recordAudioLanguage(c), null == (i = et({
                    method: "audioData",
                    request: {
                        base64Audio: a,
                        language: c,
                        userId: m,
                        spaceId: d,
                        blockId: u,
                        ...void 0 !== p ? {
                            audioSource: p
                        } : {}
                    },
                    environment: s,
                    onRequestSent: l
                })) ? void 0 : i.response;
                throw (await r(10386).i.load()).stopDictation({
                    environment: s,
                    error: new(r(228327)).eY(m || d ? m ? "Space" : "User" : "Both"),
                    from: "missing_user_or_space"
                }), Error("missing_user_or_space")
            }

            function Z(e) {
                let {
                    environment: t,
                    rootBlockId: o,
                    spaceId: i,
                    connection: n
                } = e;
                return et({
                    method: "transcriptionInfo",
                    request: {
                        rootBlockId: o,
                        spaceId: (0, r(148337).o9)(i)
                    },
                    environment: t,
                    connection: n
                })
            }

            function X(e) {
                let {
                    environment: t,
                    connection: r
                } = e, {
                    device: o
                } = t;
                return et({
                    method: "clientInfo",
                    request: {
                        clientVersion: o.version,
                        platform: o.platform,
                        osVersion: o.osVersion.join("."),
                        deviceType: o.deviceType,
                        browserName: o.browserName,
                        browserVersion: o.browserVersion,
                        desktopAppVersion: o.desktopAppVersion
                    },
                    environment: t,
                    connection: r
                })
            }

            function ee(e) {
                let {
                    environment: t,
                    setting_type: r,
                    model: o,
                    rootBlockId: i,
                    disableToast: n,
                    connection: a
                } = e
            }

            function et(e) {
                let {
                    method: t,
                    request: o,
                    environment: i,
                    connection: n
                } = e;
                d(i, {
                    status: "enqueued",
                    endpoint: t
                });
                let a = b.enqueue(() => {
                    var a;
                    let s = r(92513).JW();
                    a = b.getStats(), r(374176).default.afterNextFlush(() => {
                        r(218744).default.checkGate({
                            gateName: "audio_processor_client_send_request_metric_enabled"
                        }) && ((0, r(195857).DO_NOT_USE_trackLegacy)("audio_processor.client.send_request.queue_running_size", {
                            value: a.running
                        }), (0, r(195857).DO_NOT_USE_trackLegacy)("audio_processor.client.send_request.queue_backup_size", {
                            value: a.queue
                        }))
                    });
                    let c = r(975162).yX();
                    k.set(s, {
                        resolve: c.resolve,
                        reject: c.reject
                    });
                    let l = {
                        type: `${r(986939).A.audioProcessor.api}/${t}`,
                        requestId: s,
                        ...o
                    };
                    return "open" !== M && r(773352).rateLimitedLog({
                        level: "warning",
                        from: C,
                        team: "editor",
                        type: "attemptedToWriteToWebsocketWhenNotOpen",
                        data: {
                            miscDataToConvertToString: {
                                requestId: s,
                                userId: i.currentUser.id,
                                connectionState: M,
                                sessionId: (0, r(328616).getCurrentClientSessionId)()
                            }
                        }
                    }), en({
                        message: l,
                        environment: i,
                        onRequestSent: e.onRequestSent,
                        connection: n
                    }).catch(e => {
                        r(773352).log({
                            level: "error",
                            from: C,
                            team: "editor",
                            type: "failedToWriteToSocket",
                            error: (0, r(416607).convertErrorToLog)(e),
                            data: {
                                miscDataToConvertToString: {
                                    sessionId: (0, r(328616).getCurrentClientSessionId)()
                                }
                            }
                        })
                    }), c.promise.then(e => {
                        d(i, {
                            status: "success",
                            endpoint: t
                        })
                    }).catch(e => {
                        let r = b.getStats();
                        d(i, {
                            status: "failure",
                            endpoint: t,
                            queue_running_size: r.running,
                            queue_backup_size: r.queue
                        })
                    }), r(975162).nQ(1e3, c.promise).then(({
                        timeout: e,
                        result: o
                    }) => {
                        if (!e) return o; {
                            let e = b.getStats();
                            return d(i, {
                                status: "failure",
                                endpoint: t,
                                queue_running_size: e.running,
                                queue_backup_size: e.queue,
                                queue_timeout: !0
                            }), r(773352).rateLimitedLog({
                                level: "error",
                                from: "audioProcessorInternals",
                                team: "editor",
                                type: "requestTimeout",
                                error: (0, r(416607).convertErrorToLog)(Error("Request timed out")),
                                data: {
                                    miscDataToConvertToString: {
                                        requestId: s,
                                        method: t,
                                        sessionId: (0, r(328616).getCurrentClientSessionId)()
                                    }
                                }
                            }), {
                                result: "timeout"
                            }
                        }
                    })
                });
                return {
                    response: a.catch(e => {}),
                    asyncQueuePromise: a
                }
            }

            function er(e) {
                let t = (0, r(358519).tf)(p, e);
                if (t) return void r(773352).log({
                    level: "warning",
                    team: "editor",
                    from: C,
                    type: "ValidationError",
                    data: {
                        miscDataToConvertToString: { ...e,
                            sessionId: (0, r(328616).getCurrentClientSessionId)()
                        }
                    },
                    error: (0, r(416607).convertErrorToLog)(t)
                });
                switch (e.type) {
                    case "response":
                        {
                            let {
                                requestId: t,
                                status: r,
                                result: o
                            } = e,
                            i = k.get(t);
                            if (k.delete(t), !i) return;
                            "ok" === r && i.resolve(o);
                            break
                        }
                    case "transcription":
                        T.emit(m, e);
                        break;
                    case "vad":
                        T.emit(g, e);
                        break;
                    case "rate_limited":
                        T.emit(f, e);
                        break;
                    case "forbidden":
                        T.emit(v, e);
                        break;
                    case "upgrade_required":
                        T.emit(S, e);
                        break;
                    case "free_trial_limit_update":
                        T.emit(A, e);
                        break;
                    case "openai_error":
                        T.emit(h, e);
                        break;
                    case "audio_writer_settings":
                        T.emit(y, e);
                        break;
                    case "service_status_update":
                        T.emit(_, e)
                }
            }

            function eo(e, t, i = !0) {
                var s;
                r(773352).log({
                    level: "info",
                    from: C,
                    team: "editor",
                    type: "audioProcessorEnd",
                    data: {
                        miscDataToConvertToString: {
                            socketReconnect: `SocketId: ${null==e||null==(s=e.socket)?void 0:s.id}`,
                            createNewConnection: i,
                            sessionId: (0, r(328616).getCurrentClientSessionId)()
                        }
                    }
                }), I.setTimeout(() => {
                    void 0 !== e && e.destroy()
                }, 0), a = void 0, x(), i && t && function e(t) {
                    void 0 !== o && clearTimeout(o), Y++;
                    let i = 2 * r(627179).TD + 3 * Math.random() * r(627179).TD;
                    Y % 10 == 0 && r(773352).log({
                        level: "info",
                        from: C,
                        team: "editor",
                        type: "reconnectAttemptCount",
                        data: {
                            miscDataToConvertToString: {
                                reconnectAttemptCount: Y,
                                sessionId: (0, r(328616).getCurrentClientSessionId)()
                            }
                        }
                    }), o = I.setTimeout(() => {
                        o = void 0, W(t).then(e => {
                            var t, o;
                            null == (t = n) || t.recordReconnectSuccess("application"), r(773352).log({
                                level: "info",
                                from: C,
                                team: "editor",
                                type: "recreatePrimusClientSuccess",
                                data: {
                                    miscDataToConvertToString: {
                                        socketReconnect: `SocketId: ${null==e||null==(o=e.socket)?void 0:o.id}`,
                                        reconnectAttemptCount: Y,
                                        delayMs: i,
                                        sessionId: (0, r(328616).getCurrentClientSessionId)()
                                    }
                                }
                            }), Y = 0
                        }).catch(o => {
                            var a;
                            let s = (0, r(101787).USz)(o) && 401 === o.statusCode;
                            if (r(773352).log({
                                    level: "error",
                                    from: C,
                                    team: "ai-meeting-notes",
                                    type: "recreatePrimusClientFailure",
                                    error: o,
                                    data: {
                                        miscDataToConvertToString: {
                                            reconnectAttemptCount: Y,
                                            delayMs: i,
                                            sessionId: (0, r(328616).getCurrentClientSessionId)(),
                                            stopRetrying: s
                                        }
                                    }
                                }), s) {
                                null == (a = n) || a.recordReconnectAbandoned("fatal_error");
                                return
                            }
                            e(t)
                        })
                    }, i)
                }(t)
            }

            function ei(e) {
                var t;
                let {
                    queuePauseTranscriptionCheckTaskImmediately: i = !0
                } = e ? ? {};
                if (void 0 !== o && (clearTimeout(o), o = void 0), x(), null == (t = n) || t.recordSessionOutcome(), n = void 0, a) {
                    let e = {
                        type: `${r(986939).A.audioProcessor.api}/destroySession`,
                        requestId: r(92513).JW(),
                        queuePauseTranscriptionCheckTaskImmediately: i
                    };
                    a.write(e), a.removeAllListeners("end"), eo(a, void 0, !1), (0, r(328616).generateNewClientSessionId)()
                }
            }
            async function en(e) {
                let {
                    message: t,
                    environment: i,
                    onRequestSent: n,
                    connection: a
                } = e, s = a ? ? await q(i);
                s ? (s.write(t), null == n || n()) : ("open" === M ? W(i).catch(e => {}) : "closed" !== M && "failed_to_create" !== M || o || (W(i).catch(e => {}), r(773352).rateLimitedLog({
                    level: "warning",
                    from: C,
                    team: "editor",
                    type: "clientClosedWhenWriteToSocket",
                    data: {
                        miscDataToConvertToString: {
                            connectionState: M,
                            sessionId: (0, r(328616).getCurrentClientSessionId)(),
                            scheduledToReconnect: !!o
                        }
                    }
                })), r(773352).rateLimitedLog({
                    level: "warning",
                    from: C,
                    team: "editor",
                    type: "noClientWhenWriteToSocket",
                    data: {
                        miscDataToConvertToString: {
                            connectionState: M,
                            sessionId: (0, r(328616).getCurrentClientSessionId)(),
                            scheduledToReconnect: !!o
                        }
                    }
                }))
            }
            class ea extends Error {
                constructor(e) {
                    super(`Primus connection timeout after ${e}ms`), this.name = "PrimusConnectionTimeoutError"
                }
            }
        },
        328616: (e, t, r) => {
            r.r(t), r.d(t, {
                createClient: () => a,
                generateNewClientSessionId: () => i,
                getCurrentClientSessionId: () => n
            }), r(814603), r(147566), r(198721);
            let o = r(92513).JW();

            function i() {
                o = r(92513).JW()
            }

            function n() {
                return o
            }

            function a(e) {
                let t = window.location.hostname.endsWith(".notion.com"),
                    i = (r(986939).A.isAdminMode || r(986939).A.isLocalDevelopment ? void 0 : r(218744).default.getConfigKey(t ? "audio_processor_client_config_com" : "audio_processor_client_config", "url_override")) ? ? r(986939).A.audioProcessor.url,
                    {
                        maxReconnectDelayMs: n,
                        minReconnectDelayMs: a,
                        jwtToken: s,
                        isReauth: c
                    } = e,
                    l = new URLSearchParams({
                        sessionId: o
                    });
                s && l.set("token", s), c && l.set("isReauth", "true");
                let d = `${i}?${l.toString()}`;
                return new(r(471136))(d, {
                    reconnect: {
                        max: n,
                        min: a,
                        "reconnect timeout": 2500,
                        retries: 1e20
                    },
                    timeout: 2500,
                    credentials: !0,
                    transport: {
                        withCredentials: !0,
                        closeOnBeforeunload: !1
                    },
                    transportOverrides: {
                        transports: ["websocket"]
                    }
                })
            }
        },
        336328: (e, t, r) => {
            r.r(t), r.d(t, {
                AudioSessionBlockWriter: () => y,
                DictationManager: () => I,
                StreamingDictationManager: () => R,
                startDictation: () => M,
                stopDictation: () => D,
                updateActiveBlocks: () => E
            }), r(16280), r(18107), r(944114), r(816573), r(878100), r(177936), r(967357), r(748140), r(821903), r(491134), r(128845), r(237467), r(444732), r(979577), r(898992), r(823215), r(354520), r(672577), r(803949), r(581454);
            var o = () => r(970831),
                i = () => r(247438);
            r(410838);
            class n {
                id;
                lastUpdated;
                text;
                isCompleteReceived;
                sortKey;
                transcriptions;
                constructor({
                    id: e,
                    isCompleteReceived: t,
                    sortKey: r
                }) {
                    this.id = e, this.lastUpdated = Date.now(), this.isCompleteReceived = !!t, this.transcriptions = new Map, this.sortKey = r
                }
                updateText() {
                    let e = Array.from(this.transcriptions.values()).findLast(e => "complete" === e.status);
                    this.text = e ? e.text : void 0
                }
                setTranscription(e, t) {
                    this.transcriptions.set(e, t), this.updateText(), this.lastUpdated = Date.now()
                }
                setIsCompleteReceived(e) {
                    !this.isCompleteReceived && e && (this.isCompleteReceived = !0)
                }
                getId() {
                    return this.id
                }
                getText() {
                    return this.text
                }
                getSortKey() {
                    return this.sortKey ? ? 0
                }
                getMsSinceLastUpdate() {
                    return Date.now() - this.lastUpdated
                }
                isSettled() {
                    return Date.now() - this.lastUpdated > r(695216).Xb || this.isCompleteReceived && this.transcriptions.values().every(({
                        status: e
                    }) => "pending" !== e)
                }
            }
            var a = () => r(347971);

            function s(e) {
                let t, r = [];
                for (let i of e.segments) {
                    var o;
                    let n = i.getText();
                    if (!n) continue;
                    let a = i.isSettled() || e.forceSettled || !1;
                    if ((null == (o = t) ? void 0 : o.settled) === a) {
                        t.text = `${t.text} ${n}`;
                        continue
                    }
                    t && r.push(t), t = {
                        text: n,
                        settled: a,
                        segmentId: i.getId()
                    }
                }
                return t && r.push(t), r.length > 0 && e.indent && (r[0].text = ` ${r[0].text}`), r
            }

            function c(e) {
                return !!(0, i().BEe)(e) && e[1].some(i().Si1)
            }
            r(737550);
            let l = /([\?\!\.])\s/;
            var d = () => r(869708),
                u = () => r(585823);
            async function p(e) {
                var t;
                return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.writeSessionLogs) ? void 0 : t.call(r(775657).electronApi, e)
            }
            let m = [],
                g = (0, r(381453).nF)(() => {
                    let e = [...m];
                    m.length = 0, p(e)
                }, 1e3);

            function f({
                messages: e,
                ...t
            }) {
                m.push({ ...t,
                    timestamp: new Date,
                    args: Array.isArray(e) ? e : [e]
                }), g()
            }

            function v(e, t) {
                r(218744).default.checkGate({
                    gateName: "enable_transcription_session_logging"
                }) && function(e, t, ...r) {
                    f({
                        level: "info",
                        messages: r,
                        processName: e,
                        sessionId: t
                    })
                }("transcriptions", e, t)
            }

            function h(e, t, o) {
                r(218744).default.checkGate({
                    gateName: "enable_transcription_session_logging"
                }) && function(e, t, ...r) {
                    f({
                        level: "error",
                        messages: r,
                        processName: e,
                        sessionId: t
                    })
                }("transcriptions", e, { ...o,
                    error: (0, r(161179).A)(t)
                })
            }
            let S = 250;
            class A {
                segments;
                constructor() {
                    this.segments = new Map
                }
                setSegment(e) {
                    this.segments.set(e.getId(), e)
                }
                getSegment(e) {
                    return this.segments.get(e)
                }
                getSortedSegments() {
                    return [...this.segments.values()].sort((e, t) => e.getSortKey() - t.getSortKey())
                }
                deleteSegment(e) {
                    this.segments.delete(e)
                }
                isSettled() {
                    return this.getSortedSegments().every(e => e.isSettled())
                }
            }
            class y {
                id;
                env;
                rootBlockId;
                isCompleteReceived;
                blockStore;
                onUpdateBlock;
                segmentManager;
                speakerName;
                audioSource;
                constructor(e) {
                    const {
                        id: t,
                        env: r,
                        rootBlockId: o,
                        blockStore: i,
                        onUpdateBlock: n
                    } = e;
                    this.id = t, this.env = r, this.isCompleteReceived = !1, this.rootBlockId = o, this.blockStore = i, this.onUpdateBlock = n, this.segmentManager = new A
                }
                getOrCreateSegment(e, t) {
                    let r = this.segmentManager.getSegment(e);
                    if (r) return r;
                    let o = new n({
                        id: e,
                        sortKey: null == t ? void 0 : t.sortKey
                    });
                    return this.segmentManager.setSegment(o), o
                }
                getBlockStore() {
                    return this.blockStore
                }
                setBlockStore(e) {
                    var t;
                    this.blockStore = e, null == (t = this.onUpdateBlock) || t.call(this, e)
                }
                logInsert({
                    final: e,
                    ...t
                }) {
                    v(this.rootBlockId, { ...t,
                        type: `insert:${e?"final":"temp"}`,
                        sessionId: this.id,
                        blockId: this.blockStore.id
                    })
                }
                logDelete(e) {
                    v(this.rootBlockId, { ...e,
                        type: "delete",
                        sessionId: this.id,
                        blockId: this.blockStore.id
                    })
                }
                isStreamingModel() {
                    var e;
                    let t = new(o()).B(this.env, {
                        table: r(832375).evP,
                        id: this.rootBlockId
                    });
                    if (!t.isTranscriptionBlock()) return !1;
                    let i = (0, d().RW)(null == (e = t.getFormat()) ? void 0 : e.transcription_model);
                    return "baseten_diarization" === i || "fireworks_diarization" === i || "openai_diarization" === i || "no_diarization" !== i && void 0 !== i && void(0, r(722371).HB)(i)
                }
                setIsCompleteReceived(e) {
                    !this.isCompleteReceived && e && (this.isCompleteReceived = !0)
                }
                getId() {
                    return this.id
                }
                isSettled() {
                    return this.isCompleteReceived && this.segmentManager.isSettled()
                }
                setSpeakerName(e) {
                    this.speakerName = e
                }
                setAudioSource(e) {
                    this.audioSource = e
                }
                writeToBlock(e = !1) {
                    let t = this.blockStore.getParentBlockStore();
                    if (!this.blockStore.isDictatableBlock() || !t) return;
                    let o = !1,
                        n = [],
                        a = [];
                    for (let t of [...this.segmentManager.getSortedSegments()]) !o && (e || t.isSettled()) ? (n.push(t), this.segmentManager.deleteSegment(t.getId())) : (o = !0, a.push(t));
                    let d = this.blockStore.pointer.spaceId,
                        {
                            serverCommitResult: u,
                            transactionId: p
                        } = (0, r(377796).createAndCommit)({
                            userAction: "dictationActions.writeToBlock",
                            environment: this.env,
                            cellTarget: d ? {
                                spaceWithId: d
                            } : void 0,
                            canUndo: !1,
                            perform: o => {
                                let d, u = 0,
                                    p = this.blockStore.getBlockTitleStore(),
                                    m = (0, i().ooo)(p.getValue());
                                for (let e = 0; e < m.length; e++) {
                                    if (c(m[e])) {
                                        d = e;
                                        break
                                    }
                                    u += (0, i().WWE)(m[e])
                                }
                                if (void 0 !== d) {
                                    if (0 === n.length && function(e) {
                                            let {
                                                tokens: t,
                                                ...r
                                            } = e, o = s(r);
                                            return o.length === t.length && o.every(({
                                                text: e,
                                                settled: r
                                            }, o) => {
                                                let n = t[o];
                                                return (c(n) ? !r : !!r) && e === (0, i().N8A)(n)
                                            })
                                        }({
                                            segments: a,
                                            tokens: m.slice(d),
                                            forceSettled: e,
                                            indent: u > 0
                                        })) return;
                                    this.logDelete({
                                        transactionId: o.id,
                                        index: u
                                    }), r(41403).jQ({
                                        environment: this.env,
                                        store: p,
                                        selection: {
                                            startIndex: u,
                                            endIndex: 1 / 0
                                        },
                                        transaction: o,
                                        updateSelection: !1
                                    })
                                }
                                for (let e of function(e) {
                                        let {
                                            text: t,
                                            maxLength: r = 1 / 0,
                                            initialLength: o = 0
                                        } = e;
                                        if (0 === r) throw Error("Max length must be >0");
                                        let i = "",
                                            n = [];
                                        for (let e of t)(i = "" === i ? e : `${i} ${e}`).length >= r && (n.push(i), i = "");
                                        return i && n.push(i), n
                                    }({
                                        text: function(e) {
                                            let t = e.split(l);
                                            for (let e = 1; e < t.length; e++) {
                                                let r = t[e];
                                                [".", "?", "!"].includes(r) && (t[e - 1] += r, t[e] = "")
                                            }
                                            return t.filter(function(e) {
                                                return void 0 !== e && "" !== e
                                            })
                                        }(b([...n.values()])),
                                        initialLength: u,
                                        maxLength: S
                                    })) {
                                    let r = this.isStreamingModel();
                                    if (!r) {
                                        let t = u > 0 ? ` ${e}` : e;
                                        this.logInsert({
                                            transactionId: o.id,
                                            text: t,
                                            index: u,
                                            settled: !0,
                                            final: !0
                                        }), w({
                                            environment: this.env,
                                            audioSessionId: this.id,
                                            blockStore: this.blockStore,
                                            index: u,
                                            transcriptions: [{
                                                text: t,
                                                settled: !0
                                            }],
                                            transaction: o,
                                            speakerName: this.speakerName,
                                            audioSource: this.audioSource
                                        }), u += t.length
                                    }
                                    if (u > S) {
                                        let e = T({
                                            environment: this.env,
                                            parentBlockStore: t,
                                            siblingBlockStore: this.blockStore,
                                            transaction: o
                                        });
                                        this.setBlockStore(e), u = 0
                                    }
                                    if (r) {
                                        let t = u > 0 ? ` ${e}` : e;
                                        this.logInsert({
                                            transactionId: o.id,
                                            text: t,
                                            index: u,
                                            settled: !0,
                                            final: !0
                                        }), w({
                                            environment: this.env,
                                            audioSessionId: this.id,
                                            blockStore: this.blockStore,
                                            index: u,
                                            transcriptions: [{
                                                text: t,
                                                settled: !0
                                            }],
                                            transaction: o,
                                            speakerName: this.speakerName,
                                            audioSource: this.audioSource
                                        }), u += t.length
                                    }
                                }
                                let g = s({
                                    segments: a,
                                    forceSettled: e,
                                    indent: u > 0
                                });
                                0 !== g.length && (g.forEach(({
                                    text: e,
                                    settled: t
                                }) => {
                                    this.logInsert({
                                        transactionId: o.id,
                                        text: e,
                                        index: u,
                                        settled: t,
                                        final: !1
                                    })
                                }), w({
                                    environment: this.env,
                                    audioSessionId: this.id,
                                    blockStore: this.blockStore,
                                    index: u,
                                    transcriptions: g,
                                    transaction: o,
                                    speakerName: this.speakerName,
                                    audioSource: this.audioSource
                                }))
                            }
                        });
                    u.catch(e => {
                        h(this.rootBlockId, e, {
                            type: "transactionError",
                            transactionId: p
                        })
                    })
                }
            }

            function _(e) {
                let t = e.parentBlockStore.pointer.spaceId;
                return (0, r(377796).createAndCommit)({
                    userAction: "dictationActions.createDictationBlock",
                    environment: e.environment,
                    cellTarget: t ? {
                        spaceWithId: t
                    } : void 0,
                    canUndo: !1,
                    perform: t => T({ ...e,
                        transaction: t
                    })
                })
            }

            function T(e) {
                var t, i;
                let {
                    environment: n,
                    parentBlockStore: a,
                    siblingBlockStore: s,
                    transaction: c
                } = e, l = (null == s ? void 0 : s.getDictationRoleModel()) ? ? r(955630).xd.text, d = null == (t = u().ei.state) ? void 0 : t.isTranscriptionBlock();
                if (r(986939).A.isMobile && !d && !a.isTranscriptionBlock()) {
                    let e = r(150945).insertBlockBelow({
                        environment: n,
                        selection: s ? [s] : [],
                        createBlockItem: r(992140).ry[l],
                        transaction: c,
                        analyticsFrom: "dictation",
                        preventSetSelection: !0
                    });
                    return (0, r(739204).z)({
                        store: e.getBlockTitleStore()
                    }), e
                }
                let p = a.isTranscriptionBlock() ? null == (i = a.getContentStores().find(e => {
                    let t = a.getFormat().transcription_transcript_id;
                    return e.id === t
                })) ? void 0 : i.getContentStore() : a.getContentStore();
                if (!p) throw Error("No parent dictation content store found");
                let m = r(124937).Wv({
                    environment: n,
                    type: l,
                    inMemoryRecordCache: a.inMemoryRecordCache,
                    transaction: c
                });
                return r(579695).NI({
                    parentStore: p,
                    childStore: o().B.createChildStore(p, m.pointer),
                    after: null == s ? void 0 : s.id,
                    transaction: c
                }), m
            }

            function w(e) {
                var t;
                let {
                    environment: o,
                    audioSessionId: n,
                    blockStore: s,
                    index: c,
                    transcriptions: l,
                    transaction: d,
                    speakerName: p,
                    audioSource: m
                } = e;
                if (!s.isDictatableBlock()) return;
                let g = [],
                    f = l.filter(e => !!e.text);
                for (let [e, t] of f.entries()) {
                    let {
                        text: r,
                        settled: o
                    } = t, s = e === f.length - 1 ? r : `${r} `, c = o ? (0, i().Ey_)(s) : (0, i().Ey_)(s, [(0, i().lf7)({
                        dictationId: a().h5,
                        audioSessionId: n,
                        segmentId: t.segmentId
                    })]);
                    g.push(c)
                }
                r(41403).yr({
                    environment: o,
                    index: c,
                    store: s.getBlockTitleStore(),
                    tokens: g,
                    transaction: d,
                    updateSelection: !1
                });
                let v = s.getFormat().transcript_metadata,
                    h = o.currentUser.id,
                    S = (0, r(216735).qY)(),
                    A = void 0 !== p && (null == v ? void 0 : v.speaker_name) !== p,
                    y = void 0 !== h && (null == v ? void 0 : v.recorder_user_id) !== h,
                    _ = void 0 !== m && (null == v ? void 0 : v.audio_source) !== m,
                    T = void 0 !== S && (null == v ? void 0 : v.dictation_session_id) !== S;
                (A || y || _ || T) && (0, r(715144).z)({
                    stores: [s],
                    update: {
                        transcript_metadata: { ...v,
                            ...void 0 !== p ? {
                                speaker_name: p
                            } : {},
                            ...void 0 !== m ? {
                                audio_source: m
                            } : {},
                            ...void 0 !== h ? {
                                recorder_user_id: h
                            } : {},
                            ...void 0 !== S ? {
                                dictation_session_id: S
                            } : {}
                        }
                    },
                    transaction: d
                });
                let w = null == (t = u().ei.state) ? void 0 : t.isTranscriptionBlock();
                r(986939).A.isMobile && !w && (0, r(739204).z)({
                    store: s.getBlockTitleStore()
                })
            }

            function b(e) {
                return e.map(e => e.getText()).filter(e => !!e).join(" ").trim()
            }

            function k(e) {
                return new Promise((t, r) => {
                    try {
                        let o = new Blob(e),
                            i = new FileReader;
                        i.readAsDataURL(o), i.onloadend = () => {
                            var e;
                            let o = null == (e = i.result) ? void 0 : e.toString().split(",")[1];
                            o ? t(o) : r(Error("No base64Audio"))
                        }
                    } catch (e) {
                        r(e)
                    }
                })
            }

            function C(e, t, i) {
                if ((0, r(722371).O9)(i) && !i.pathIsDead() && i.id !== t.id) {
                    let n = (0, r(637306).N)(t),
                        a = (0, r(637306).N)(i);
                    if ((0, r(722371).O9)(n) && (0, r(722371).O9)(a) && n.id === a.id) {
                        let n = (0, r(457915).g)(i);
                        if ((() => {
                                for (let e of n)
                                    if (e instanceof o().B) {
                                        if (e.id === t.id) return !0;
                                        if (e.id === a.id) break
                                    }
                                return !1
                            })()) {
                            let t = i.getParentBlockStore();
                            if (i.isEmptyDictatableBlock() && [...u().Ay.state.audioSessionBlockWriters.values()].every(e => e.getBlockStore().id !== i.id)) return i;
                            if (t) return _({
                                environment: e,
                                parentBlockStore: t,
                                siblingBlockStore: i
                            }).performResult
                        }
                    }
                }
                return _({
                    environment: e,
                    parentBlockStore: t
                }).performResult
            }
            class I {
                static startController;
                static audioBuffer = [];
                static sourceAudioBuffers = {
                    microphone: [],
                    system_audio: []
                };
                static audioEncoderQueue = new(r(839621)).O(1);
                static async getAllProcessableFramesAsBase64(e) {
                    let {
                        desiredFrameLengthMS: t,
                        audioSource: r
                    } = e, o = 16 * Math.max(1, t), i = r ? this.sourceAudioBuffers[r] : this.audioBuffer, n = Math.floor(i.length / o);
                    if (!(n > 0)) return !1; {
                        let e = n * o,
                            t = i.slice(0, e);
                        return r ? this.sourceAudioBuffers[r] = i.slice(e) : this.audioBuffer = i.slice(e), {
                            base64Audio: await this.audioEncoderQueue.enqueue(() => k([new Float32Array(t)]))
                        }
                    }
                }
                static resetAudioBuffers() {
                    this.audioBuffer = [], this.sourceAudioBuffers = {
                        microphone: [],
                        system_audio: []
                    }
                }
                static getDictationAudioRecorder(e) {
                    let {
                        environment: t,
                        includeSystemAudio: o,
                        blockStore: i,
                        saveLocalRecordings: n = !1,
                        splitBySource: a = !1,
                        enableMicrophoneEchoCancellation: s = !1,
                        onDataReceived: c = e => {}
                    } = e, l = u().Ay.state.audioRecorder;
                    l && l.destroy();
                    let d = n && i.isTranscriptionBlock() ? {
                        blockStore: i
                    } : void 0;
                    return new(r(83723)).AudioRecorder({
                        environment: t,
                        onDataReceived: c,
                        onStop: e => {
                            e && r(773352).log({
                                level: "error",
                                from: "dictationActions",
                                type: "audioRecorderStopped",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        rootBlockId: i.id
                                    }
                                }
                            }), D({
                                environment: t,
                                error: e,
                                from: "audio_recorder_stopped"
                            })
                        },
                        includeSystemAudio: o,
                        splitBySource: a,
                        enableMicrophoneEchoCancellation: s,
                        saveAudioFileMetadata: d
                    })
                }
                static generateOnDataReceivedForEnvironmentAndBlockStore(e) {
                    let {
                        environment: t,
                        blockStore: o,
                        shouldUseSourceTaggedCapture: i
                    } = e, n = e => {
                        var i;
                        let n, {
                                base64Audio: a,
                                audioSource: s
                            } = e,
                            c = (0, r(400986).getDictationLanguageValue)((0, r(533096).getPreferredDictationLanguage)(t.currentUser.id));
                        (0, r(216735).$g)({
                            base64Audio: a,
                            environment: t,
                            language: c,
                            spaceId: null == (i = (0, r(974410).f)(o)) ? void 0 : i.getSpaceId(),
                            blockId: o.id,
                            ...void 0 !== s ? {
                                audioSource: s
                            } : {},
                            onRequestSent: () => {
                                u().Ay.setState({ ...u().Ay.state,
                                    transcriptionLastSentAt: Date.now()
                                })
                            }
                        }).catch(e => {
                            r(773352).log({
                                level: "error",
                                from: "dictationActions",
                                type: "sendAudioDataFailed",
                                error: (0, r(416607).convertErrorToLog)(e),
                                data: {
                                    miscDataToConvertToString: {
                                        rootBlockId: o.id
                                    }
                                }
                            })
                        }), (n = u().ei.state) && n.isTranscriptionBlock() && u().Ay.state.audioRecorderShouldAutoStopOnTranscriptionStateChanges && "transcribing" !== (0, d().by)(n).state && D({
                            environment: t,
                            from: "transcription_block_stopped"
                        })
                    };
                    return (e, t) => {
                        if (u().gZ.state) {
                            if (i && void 0 !== t) {
                                this.sourceAudioBuffers[t].push(...e), this.getAllProcessableFramesAsBase64({
                                    desiredFrameLengthMS: 96,
                                    audioSource: t
                                }).then(e => {
                                    e && n({
                                        base64Audio: e.base64Audio,
                                        audioSource: t
                                    })
                                }).catch(e => {
                                    r(773352).log({
                                        level: "error",
                                        from: "dictationActions",
                                        type: "audioRecorderFailed",
                                        error: (0, r(416607).convertErrorToLog)(e),
                                        data: {
                                            miscDataToConvertToString: {
                                                rootBlockId: o.id
                                            }
                                        }
                                    })
                                });
                                return
                            }
                            this.audioBuffer.push(...e), this.getAllProcessableFramesAsBase64({
                                desiredFrameLengthMS: 96
                            }).then(e => {
                                e && n({
                                    base64Audio: e.base64Audio
                                })
                            }).catch(e => {
                                r(773352).log({
                                    level: "error",
                                    from: "dictationActions",
                                    type: "audioRecorderFailed",
                                    error: (0, r(416607).convertErrorToLog)(e),
                                    data: {
                                        miscDataToConvertToString: {
                                            rootBlockId: o.id
                                        }
                                    }
                                })
                            })
                        }
                    }
                }
                static async startDictation(e) {
                    let {
                        environment: t,
                        blockStore: o,
                        from: i
                    } = e, n = o.isTranscriptionBlock();
                    try {
                        var s;
                        let c;
                        this.stopDictation({
                            environment: t,
                            from: i
                        }), this.startController = new AbortController;
                        let l = this.startController.signal;
                        if (u().Ay.setState({ ...u().Ay.state,
                                environment: t,
                                tabId: t.device.isElectron ? r(898735).A.state.currentTab.id : void 0,
                                loading: !0
                            }), e.preCreateDictationBlock && o) {
                            let {
                                performResult: e
                            } = _({
                                environment: t,
                                parentBlockStore: o
                            });
                            c = e, await r(374176).default.afterNextFlush(() => {
                                (0, r(940763).e)({
                                    store: e.getBlockTitleStore()
                                })
                            })
                        }
                        let p = (0, r(216735).qY)();
                        if ((0, r(141802).uB)(t, {
                                dictation_session_id: p,
                                from: i
                            }), !n || !(0, r(219888).x)()) throw Error("Target is not dictatable.");
                        let m = await (0, d().Y2)({
                                environment: t,
                                spaceStore: (0, r(974410).f)(o)
                            }),
                            g = r(769719).c.getModelOverride(o.id),
                            f = e.includeSystemAudio && ("baseten_split_source_streaming" === g || "baseten_split_source_streaming_with_echo_cancellation" === g),
                            v = this.getDictationAudioRecorder({ ...e,
                                blockStore: o,
                                saveLocalRecordings: m,
                                splitBySource: f,
                                enableMicrophoneEchoCancellation: "baseten_split_source_streaming_with_echo_cancellation" === g
                            });
                        B.start(o.id);
                        let S = await (0, r(42754).e2)(t),
                            A = {};
                        try {
                            let i = performance.now(),
                                d = await (0, r(984893).l)();
                            A.getDeviceVolumeTiming = performance.now() - i;
                            let m = performance.now();
                            await v.start(), A.audioRecorderStartTiming = performance.now() - m, r(154642).Ay.setState({ ...r(154642).Ay.state,
                                audio: a().a3
                            });
                            let g = performance.now();
                            if ((0, r(255496).aT)(e => {
                                    var i;
                                    (0, r(255496).rJ)({
                                        environment: t,
                                        rootBlockId: (0, r(148337).o9)(o.id),
                                        spaceId: (null == (i = (0, r(974410).f)(o)) ? void 0 : i.getSpaceId()) ? ? "",
                                        connection: e
                                    }), (0, r(255496).k3)({
                                        environment: t,
                                        connection: e
                                    });
                                    let n = r(769719).c.getModelOverride(o.id);
                                    (0, r(216735).sN)({
                                        environment: t,
                                        setting_type: "model_override",
                                        model: n,
                                        rootBlockId: o.id,
                                        disableToast: "none" === n,
                                        connection: e
                                    })
                                }), await (0, r(255496).A7)(t), A.startNewPrimusClientTiming = performance.now() - g, l.aborted) throw Error("start dictation aborted");
                            let h = n ? null == (s = (0, r(627335).D)({
                                environment: t,
                                transcriptionBlockStore: o,
                                tabType: "transcript",
                                withTextBlock: !0
                            })) ? void 0 : s.getContentStores().at(-1) : r(584265).default.state.stores.slice(-1).pop();
                            u().Ay.setState({ ...u().Ay.state,
                                audioRecorder: v,
                                enabled: !0,
                                talking: !1,
                                rootBlock: o,
                                block: c ? ? C(t, o, h),
                                lastReceivedTranscriptionAt: Date.now(),
                                transcriptionLastSentAt: Date.now()
                            }), this.resetAudioBuffers(), v.setOnDataReceived(this.generateOnDataReceivedForEnvironmentAndBlockStore({
                                environment: t,
                                blockStore: o,
                                shouldUseSourceTaggedCapture: f
                            })), (0, r(141802).D_)(t, {
                                dictation_session_id: p,
                                block_id: o.id,
                                transcription_started_from: e.transcriptionStartedFrom,
                                has_audio_consent: e.audioConsentEnabled,
                                device_volume: d,
                                is_catap_active: S
                            });
                            let y = r(728372).AppStoreSidebarSpaceViewStore.state;
                            n && y && (0, r(751568).T)({
                                spaceViewStore: y,
                                itemId: "aiMeetingNotes",
                                completionType: "action"
                            }), r(773352).log({
                                level: "info",
                                from: "dictationActions",
                                type: "startDictationTiming",
                                data: {
                                    miscDataToConvertToString: {
                                        dictationSessionId: p,
                                        rootBlockId: o.id,
                                        ...A
                                    }
                                }
                            })
                        } catch (a) {
                            if (!l.aborted) try {
                                let o, i;
                                if (a instanceof r(228327).$W) o = "system_audio_hardware";
                                else if (a instanceof r(228327).Tn) o = e.includeSystemAudio ? "system_audio_timeout" : "start_timeout";
                                else {
                                    o = "mic_permissions";
                                    let {
                                        audio: t
                                    } = await r(154642).Ay.checkPermissions(e.includeSystemAudio);
                                    i = t
                                }(0, r(141802).rP)(t, {
                                    type: o,
                                    dictation_session_id: p,
                                    reason: i,
                                    is_catap_active: S
                                })
                            } catch (e) {
                                r(773352).log({
                                    level: "error",
                                    from: "dictationActions",
                                    type: "checkPermissionsFailed",
                                    error: (0, r(416607).convertErrorToLog)(e),
                                    data: {
                                        miscDataToConvertToString: {
                                            dictationSessionId: p,
                                            rootBlockId: o.id
                                        }
                                    }
                                })
                            }
                            v.destroy((0, r(161179).A)(a));
                            try {
                                (0, r(255496).Ep)()
                            } catch (e) {
                                r(773352).log({
                                    level: "error",
                                    from: "dictationActions",
                                    type: "startDictationClosePrimusClientFailed",
                                    error: (0, r(416607).convertErrorToLog)(e)
                                })
                            }
                            if (n) {
                                let {
                                    audio: t,
                                    screenRecording: n
                                } = await r(154642).Ay.checkPermissions(e.includeSystemAudio);
                                throw r(773352).log({
                                    level: "error",
                                    from: "dictationActions",
                                    type: "dictationFailedToStart",
                                    error: (0, r(416607).convertErrorToLog)(a),
                                    data: {
                                        miscDataToConvertToString: {
                                            dictation_session_id: p,
                                            transcription_id: o.id,
                                            audioPermissions: t,
                                            screenRecordingPermissions: n,
                                            ...A
                                        }
                                    }
                                }), h(o.id, a, {
                                    type: "dictationStartError",
                                    from: i
                                }), a
                            }
                        }
                    } catch (e) {
                        if (this.stopDictation({
                                environment: t,
                                from: "start_transcription_error",
                                error: (0, r(161179).A)(e)
                            }), n) throw e
                    } finally {
                        u().Ay.setState({ ...u().Ay.state,
                            loading: !1
                        })
                    }
                }
                static stopDictation(e) {
                    let {
                        skipEnsureTranscriptionIsInActive: t = !1,
                        queuePauseTranscriptionCheckTaskImmediately: o = !1
                    } = e, i = u().Ay.state.rootBlock;
                    if ((0, r(255496).bT)(), this.startController && !this.startController.signal.aborted) {
                        let s = u().Ay.state.latestSessionId ? ? (i && (0, d().jR)(i));
                        i && (0, r(104310).u)({
                            event: {
                                eventName: "transcription.stop_transcription",
                                eventProperties: {
                                    from: e.from,
                                    root_block_id: i.id,
                                    space_id: i.pointer.spaceId,
                                    dictation_session_id: s
                                }
                            }
                        }), this.startController.abort();
                        let {
                            environment: c,
                            error: l,
                            from: p
                        } = e, m = (0, r(216735).qY)();
                        if ((0, r(141802).E_)(c, {
                                dictation_session_id: m,
                                from: p
                            }), (0, r(207108).isExplainableTranscriptionStopReason)(p) && !l) {
                            let e = u().Ay.state.rootBlock;
                            e && (0, r(512985).B)(c, {
                                toastId: "transcription_recording_stopped",
                                pointer: e.pointer,
                                from: p
                            })
                        }
                        let g = u().Ay.state.tabId;

                        function n(e) {
                            let {
                                canRestart: t,
                                name: o,
                                title: n,
                                message: a,
                                notificationBody: s
                            } = e;
                            null != i && i.isTranscriptionBlock() && ((0, r(512985).B)(c, {
                                toastId: "transcription_error",
                                pointer: i.pointer,
                                tabId: g,
                                title: n,
                                message: a,
                                name: o,
                                canRestart: t
                            }), (0, r(651997).sendNotificationForDictationInterrupted)({
                                environment: c,
                                blockStore: i,
                                title: n,
                                message: s || a,
                                canRestart: t && (null == i ? void 0 : i.isTranscriptionBlock()),
                                tabId: g
                            }))
                        }
                        this.resetAudioBuffers();
                        let f = u().Ay.state.audioRecorder,
                            v = u().Ay.state.enabled,
                            S = u().Ay.state.block;
                        u().Ay.setState({ ...u().Ay.state,
                            audioRecorder: void 0,
                            audioRecorderShouldAutoStopOnTranscriptionStateChanges: !1,
                            enabled: !1,
                            loading: !1,
                            rootBlock: void 0,
                            block: void 0,
                            tabId: void 0,
                            lastReceivedTranscriptionAt: void 0,
                            transcriptionLastSentAt: void 0
                        }), null == f || f.destroy(l), l && (r(773352).log({
                            level: "error",
                            from: "dictationActions",
                            type: "dictationError",
                            error: (0, r(416607).convertErrorToLog)(l),
                            data: {
                                miscDataToConvertToString: {
                                    dictation_session_id: m,
                                    block_id: (null == i ? void 0 : i.id) ? ? ""
                                }
                            }
                        }), i && h(i.id, l, {
                            type: "dictationError",
                            from: p
                        }), l instanceof r(228327).XG ? ((0, r(141802).rP)(c, {
                            type: "throttle",
                            dictation_session_id: m
                        }), (0, r(164093).displayDictationUsageErrorSnackbar)()) : l instanceof r(228327).eY ? ((0, r(141802).rP)(c, {
                            type: "missing_user_or_space",
                            dictation_session_id: m,
                            reason: l.message
                        }), (0, r(164093).displayDictationGenericErrorSnackbar)()) : l instanceof r(228327).d1 ? ((0, r(141802).rP)(c, {
                            type: "mic_permissions",
                            dictation_session_id: m,
                            reason: r(154642).Ay.state.audio
                        }), (0, r(164093).displayDictationPermissionSnackbar)(a().JS)) : l instanceof r(228327).Rv ? ((0, r(141802).rP)(c, {
                            type: "forbidden",
                            dictation_session_id: m
                        }), n({
                            canRestart: !1,
                            name: l.name,
                            title: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.forbidden.title",
                                defaultMessage: "Unable to transcribe"
                            }),
                            message: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.forbidden.message",
                                defaultMessage: "You do not have permission to run transcription."
                            })
                        })) : l instanceof r(228327).Dg ? ((0, r(141802).rP)(c, {
                            type: "upgrade_required",
                            dictation_session_id: m
                        }), n({
                            canRestart: !1,
                            name: l.name,
                            title: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.upgradeRequired.title",
                                defaultMessage: "You have used all of your free AI Meeting Notes minutes"
                            }),
                            message: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.upgradeRequired.message",
                                defaultMessage: "Upgrade your workspace for full access to AI Meeting Notes."
                            })
                        })) : l instanceof r(228327).E6 ? n({
                            canRestart: !0,
                            name: l.name,
                            title: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.openAI.title",
                                defaultMessage: "Transcription paused"
                            }),
                            message: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.openAI.message",
                                defaultMessage: "We are experiencing high demand. Please wait and try again."
                            }),
                            notificationBody: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.openAI.notification",
                                defaultMessage: "We are experiencing high demand. Please wait and click to resume."
                            })
                        }) : l instanceof Error && n({
                            canRestart: !0,
                            name: l.name,
                            title: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.general.title",
                                defaultMessage: "Transcription paused"
                            }),
                            message: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.general.message",
                                defaultMessage: "Something went wrong. Please try again."
                            }),
                            notificationBody: r(962299).A.intl.formatMessage({
                                id: "dictationActions.stopDictation.error.general.notification",
                                defaultMessage: "Something went wrong. Please click to resume."
                            })
                        }));
                        try {
                            (0, r(255496).Ep)({
                                queuePauseTranscriptionCheckTaskImmediately: o
                            })
                        } catch (e) {
                            r(773352).log({
                                level: "error",
                                from: "dictationActions",
                                type: "stopDictationClosePrimusClientFailed",
                                error: (0, r(416607).convertErrorToLog)(e)
                            })
                        } finally {
                            B.stop(null == i ? void 0 : i.id);
                            let o = u().Ay.state.audioSessionBlockWriters,
                                n = !1;
                            for (let e of o.values()) e.writeToBlock(!0), o.delete(e.getId()), n = !0;
                            ! function(e) {
                                let {
                                    environment: t,
                                    blockStore: o,
                                    rootBlockStore: i
                                } = e;
                                if (void 0 === o || void 0 === i || o.pathIsDead() || o.id === i.id || !o.isEmptyDictatableBlock()) return;
                                let n = o.pointer.spaceId;
                                (0, r(377796).createAndCommit)({
                                    userAction: "dictationActions.removeUnusedTrailingDictationBlock",
                                    environment: t,
                                    cellTarget: n ? {
                                        spaceWithId: n
                                    } : void 0,
                                    canUndo: !1,
                                    perform: e => {
                                        r(51932).oD({
                                            environment: t,
                                            blocks: [o],
                                            transaction: e
                                        })
                                    }
                                })
                            }({
                                environment: c,
                                blockStore: S,
                                rootBlockStore: i
                            }), n && u().Ay.emit(), v && (0, r(141802).Im)(c, {
                                dictation_session_id: m,
                                block_id: (null == i ? void 0 : i.id) ? ? ""
                            }), !t && null != i && i.isTranscriptionBlock() && e.environment && r(785576).w.load().then(t => t.ensureTranscriptionIsInActive({
                                environment: e.environment,
                                blockStore: i,
                                from: e.from
                            }))
                        }
                    }
                }
            }
            async function M(e) {
                return I.startDictation(e)
            }

            function D(e) {
                let {
                    environment: t,
                    error: r,
                    from: o
                } = e;
                I.stopDictation({
                    environment: t,
                    error: r,
                    from: o
                })
            }
            async function E(e) {
                let t = (0, r(328765).S)();
                if (!t) return;
                let i = {};
                for (let r of e) {
                    var n;
                    let e = r.pointer,
                        a = o().B.createChildStore(t, e);
                    if (await a.load(), !a.isTranscriptionBlock() || a.id === (null == (n = u().Ay.state.rootBlock) ? void 0 : n.id)) continue;
                    let s = (0, d().y1)(a, "transcript");
                    if (!s) continue;
                    await s.load();
                    let c = s.getContentStores().at(-1);
                    c && (await c.load(), i[e.id] = {
                        rootBlockStore: a,
                        dictatingBlockStore: c
                    })
                }
                u().Ay.setState({ ...u().Ay.state,
                    passiveBlockMap: { ...u().Ay.state.passiveBlockMap,
                        ...i
                    }
                })
            }
            class B {
                static instance;
                static listening = !1;
                static queuedTranscriptionResults = [];
                static transcriptionFlushWindowMs = 8;
                static flushQueuedTranscriptionResultsThrottled = (0, r(381453).nF)(() => {
                    B.flushQueuedTranscriptionResults()
                }, B.transcriptionFlushWindowMs, {
                    leading: !1,
                    trailing: !0
                });
                constructor() {
                    if (B.instance) return B.instance;
                    B.instance = this
                }
                static start(e) {
                    v(e, {
                        type: "start"
                    }), this.listening || (this.listening = !0, r(255496).$I.on(r(255496).Ux, B.processTranscriptionResult), r(255496).$I.on(r(255496).L6, B.processVadEvent), r(255496).$I.on(r(255496).bH, B.processRateLimitEvent), r(255496).$I.on(r(255496).zz, B.processForbiddenEvent), r(255496).$I.on(r(255496).gA, B.processUpgradeRequiredEvent), r(255496).$I.on(r(255496).YE, B.processFreeTrialLimitEvent), r(255496).$I.on(r(255496).ZQ, B.processOpenAIErrorEvent), r(255496).$I.on(r(255496).ys, B.processAudioWriterSettingsEvent), r(255496).$I.on(r(255496).YA, B.processServiceStatusUpdateEvent))
                }
                static stop(e) {
                    e && v(e, {
                        type: "stop"
                    }), this.listening && (this.listening = !1, r(255496).$I.off(r(255496).Ux, B.processTranscriptionResult), r(255496).$I.off(r(255496).L6, B.processVadEvent), r(255496).$I.off(r(255496).bH, B.processRateLimitEvent), r(255496).$I.off(r(255496).zz, B.processForbiddenEvent), r(255496).$I.off(r(255496).gA, B.processUpgradeRequiredEvent), r(255496).$I.off(r(255496).YE, B.processFreeTrialLimitEvent), r(255496).$I.off(r(255496).ZQ, B.processOpenAIErrorEvent), r(255496).$I.off(r(255496).ys, B.processAudioWriterSettingsEvent), r(255496).$I.off(r(255496).YA, B.processServiceStatusUpdateEvent)), this.flushQueuedTranscriptionResultsThrottled.cancel(), this.flushQueuedTranscriptionResults()
                }
                static processTranscriptionResult(e) {
                    B.queuedTranscriptionResults.push(e), B.flushQueuedTranscriptionResultsThrottled()
                }
                static flushQueuedTranscriptionResults() {
                    let e = this.queuedTranscriptionResults;
                    if (this.queuedTranscriptionResults = [], 0 === e.length) return;
                    let t = !1;
                    for (let r of e) t = this.applyTranscriptionResultUpdate(r) || t;
                    this.finalizeTranscriptionResultUpdates({
                        blockWritersModified: t
                    })
                }
                static processOpenAIErrorEvent(e) {
                    if (429 === e.status || 503 === e.status) {
                        var t;
                        let {
                            environment: o
                        } = u().Ay.state;
                        o && D({
                            environment: o,
                            error: new(r(228327)).E6(e.message, e.status),
                            from: "transcription_error"
                        }), r(773352).log({
                            level: "error",
                            from: "dictationActions",
                            type: "openAIError",
                            error: (0, r(416607).convertErrorToLog)(e),
                            data: {
                                miscDataToConvertToString: {
                                    rootBlockId: null == (t = u().Ay.state.rootBlock) ? void 0 : t.id,
                                    dictationConnectionState: (0, r(216735).qY)()
                                }
                            }
                        })
                    }
                }
                static processForbiddenEvent(e) {
                    var t;
                    let {
                        environment: o
                    } = u().Ay.state;
                    o && D({
                        environment: o,
                        error: new(r(228327)).Rv("Not eligible for dictation"),
                        from: "forbidden"
                    }), r(773352).log({
                        level: "error",
                        from: "dictationActions",
                        type: "forbidden",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                rootBlockId: null == (t = u().Ay.state.rootBlock) ? void 0 : t.id,
                                dictationConnectionState: (0, r(216735).qY)()
                            }
                        }
                    })
                }
                static processServiceStatusUpdateEvent(e) {
                    if ("temporarily_unavailable" === e.state) {
                        var t;
                        r(284771).A.setState("transcription_service_unavailable"), r(773352).log({
                            level: "error",
                            from: "dictationActions",
                            type: "SocketTemporarilyUnavailable",
                            data: {
                                miscDataToConvertToString: {
                                    state: e.state,
                                    rootBlockId: null == (t = u().Ay.state.rootBlock) ? void 0 : t.id,
                                    dictationConnectionState: (0, r(216735).qY)()
                                }
                            }
                        })
                    } else "healthy" === e.state && r(284771).A.setState("connected")
                }
                static processFreeTrialLimitEvent(e) {
                    r(992308).W.setState({
                        type: "available",
                        usage: e.currentS,
                        limit: e.limitS
                    })
                }
                static processAudioWriterSettingsEvent(e) {
                    S = e.settings.max_block_char_size;
                    let t = e.settings.transcription_model,
                        o = u().Ay.state.rootBlock,
                        i = u().Ay.state.environment;
                    t && o && i && r(785576).w.load().then(e => e.updateTranscriptionModel({
                        environment: i,
                        blockStore: o,
                        transcriptionModel: t
                    }))
                }
                static processUpgradeRequiredEvent(e) {
                    var t, o, i, n;
                    let {
                        environment: a
                    } = u().Ay.state, s = null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id, c = (0, r(974410).f)(u().Ay.state.rootBlock);
                    r(992308).W.setState({
                        type: "unavailable"
                    }), a && ((0, r(939596).g)({
                        environment: a,
                        spaceStore: c,
                        userId: s
                    }), D({
                        environment: a,
                        error: new(r(228327)).Dg("Free usage used up, workspace upgrade is required"),
                        from: "upgrade_required"
                    })), r(773352).log({
                        level: "info",
                        from: "dictationActions",
                        type: "upgrade_required",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                rootBlockId: null == (o = u().Ay.state.rootBlock) ? void 0 : o.id,
                                userId: null == (i = r(728372).AppStoreCurrentUserStore.state) ? void 0 : i.id,
                                spaceId: null == (n = (0, r(974410).f)(u().Ay.state.rootBlock)) ? void 0 : n.id
                            }
                        }
                    })
                }
                static processRateLimitEvent(e) {
                    var t;
                    let {
                        environment: o
                    } = u().Ay.state;
                    r(992308).W.setState({
                        type: "rateLimited",
                        retryAfterSec: e.retryAfterSec
                    }), o && D({
                        environment: o,
                        error: new(r(228327)).XG("Audio usage limit reached"),
                        from: "rate_limit"
                    }), r(773352).log({
                        level: "error",
                        from: "dictationActions",
                        type: "rateLimit",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                rootBlockId: null == (t = u().Ay.state.rootBlock) ? void 0 : t.id
                            }
                        }
                    })
                }
                static processVadEvent(e) {
                    u().Ay.setState({ ...u().Ay.state,
                        talking: e.talking
                    })
                }
                static updateDictationBlock(e) {
                    u().Ay.setState({ ...u().Ay.state,
                        block: e
                    })
                }
                static applyTranscriptionResultUpdate(e) {
                    let {
                        audioSessionId: t,
                        segmentId: o,
                        isSegmentComplete: i,
                        segmentSortkey: n,
                        isAudioSessionComplete: a,
                        transcription: s,
                        speakerName: c,
                        audioSource: l
                    } = e, {
                        enabled: d,
                        rootBlock: p,
                        audioSessionBlockWriters: m,
                        environment: g,
                        block: f
                    } = u().Ay.state;
                    "disconnected" === r(284771).A.state && r(284771).A.setState("connected"), "complete" === s.status && null != p && p.isTranscriptionBlock() && g && ((0, r(104310).u)({
                        event: {
                            eventName: "meeting_note_transcription_received",
                            eventProperties: {
                                block_id: p.id,
                                audio_duration: s.audioDuration,
                                text_length: s.text.length
                            }
                        }
                    }), v(p.id, {
                        type: "transcription",
                        status: s.status,
                        sessionId: t,
                        isSessionComplete: a,
                        segmentId: o,
                        isSegmentComplete: i,
                        transcriptionId: s.id,
                        text: "complete" === s.status ? s.text : void 0
                    }));
                    let h = !1;
                    if ("complete" === s.status && 0 === s.text.length && !m.has(t)) return !1;
                    if (!m.has(t) && g && d)
                        if (p) {
                            let e = C(g, p, f),
                                r = new y({
                                    id: t,
                                    env: g,
                                    rootBlockId: p.id,
                                    blockStore: e,
                                    onUpdateBlock: e => {
                                        t === u().Ay.state.latestSessionId && B.updateDictationBlock(e)
                                    }
                                });
                            m.set(t, r), h = !0, u().Ay.setState({ ...u().Ay.state,
                                block: e,
                                latestSessionId: t
                            })
                        } else D({
                            environment: g,
                            from: "block_not_available"
                        });
                    let S = m.get(t);
                    if (S) {
                        S.setIsCompleteReceived(a);
                        let e = S.getOrCreateSegment(o, {
                            sortKey: n
                        });
                        e.setIsCompleteReceived(i), e.setTranscription(s.id, s), c && S.setSpeakerName(c), l && S.setAudioSource(l)
                    }
                    return d && u().Ay.setState({ ...u().Ay.state,
                        lastReceivedTranscriptionAt: Date.now()
                    }), h
                }
                static finalizeTranscriptionResultUpdates(e) {
                    let {
                        enabled: t,
                        rootBlock: r,
                        audioSessionBlockWriters: o,
                        environment: i
                    } = u().Ay.state, {
                        blockWritersModified: n
                    } = e;
                    for (let e of o.values()) e.writeToBlock();
                    for (let e of [...o.values()].filter(e => e.isSettled())) o.delete(e.getId()), n = !0, t && i && r && u().Ay.state.latestSessionId === e.getId() && u().Ay.setState({ ...u().Ay.state,
                        block: C(i, r, u().Ay.state.block)
                    });
                    n && u().Ay.emit()
                }
            }
            class R {
                static startController;
                static env;
                static audioBuffer = new Float32Array;
                static audioEncoderQueue = new(r(839621)).O(1);
                static audioRecorder;
                static streamingSessionId;
                static isActive = !1;
                static transcriptionListener;
                static onErrorListener;
                static segments = new Map;
                static currentTranscript = "";
                static getAllProcessableFramesAsBase64(e) {
                    let t = 16 * Math.max(1, e),
                        r = Math.floor(this.audioBuffer.length / t);
                    if (!(r > 0)) return Promise.resolve(!1); {
                        let e = r * t,
                            o = this.audioBuffer.slice(0, e);
                        return this.audioBuffer = this.audioBuffer.slice(e), this.audioEncoderQueue.enqueue(() => k([o]))
                    }
                }
                static async start(e) {
                    try {
                        this.stop(), this.startController = new AbortController, this.env = e.environment, this.isActive = !0, this.currentTranscript = "", this.segments.clear(), this.transcriptionListener = e.onTranscription, this.onErrorListener = e.onError, this.streamingSessionId = (0, r(216735).qY)(), await (0, r(255496).A7)(e.environment), this.audioRecorder = new(r(83723)).AudioRecorder({
                            environment: e.environment,
                            onDataReceived: t => {
                                this.audioBuffer = new Float32Array([...this.audioBuffer, ...t]), this.getAllProcessableFramesAsBase64(96).then(t => {
                                    if (t) {
                                        let o = (0, r(400986).getDictationLanguageValue)((0, r(533096).getPreferredDictationLanguage)(e.environment.currentUser.id));
                                        (0, r(216735).$g)({
                                            base64Audio: t,
                                            environment: e.environment,
                                            language: o,
                                            spaceId: e.spaceId,
                                            blockId: ""
                                        }).catch(() => {})
                                    }
                                }).catch(() => {})
                            },
                            onStop: () => {
                                R.stop()
                            },
                            includeSystemAudio: !1
                        }), await this.audioRecorder.start(), r(255496).$I.on(r(255496).Ux, this.handleTranscriptionEvent)
                    } catch (e) {
                        this.onErrorListener && e instanceof Error && this.onErrorListener(e), this.stop()
                    }
                }
                static stop() {
                    if (this.isActive) {
                        var e;
                        this.isActive = !1, this.startController && !this.startController.signal.aborted && this.startController.abort(), r(255496).$I.off(r(255496).Ux, this.handleTranscriptionEvent), null == (e = this.audioRecorder) || e.destroy(), (0, r(255496).Ep)(), this.audioRecorder = void 0, this.streamingSessionId = void 0, this.env = void 0
                    }
                }
                static handleTranscriptionEvent = e => {
                    var t;
                    let r = e.segmentId,
                        o = this.segments.get(r);
                    o || (o = new n({
                        id: r,
                        sortKey: e.segmentSortkey
                    }), this.segments.set(r, o)), o.setIsCompleteReceived(e.isSegmentComplete), o.setTranscription(e.transcription.id, e.transcription);
                    let i = b(Array.from(this.segments.values()));
                    this.currentTranscript = i, null == (t = this.transcriptionListener) || t.call(this, this.currentTranscript)
                }
            }
        },
        338227: (e, t, r) => {
            async function o(e) {
                let {
                    environment: t,
                    onResponse: o,
                    data: i,
                    abortSignal: n
                } = e, a = await t.api.callStreamApi({
                    eventName: "runMeetingNotesAgent",
                    environment: t,
                    data: i,
                    abortSignal: n,
                    headers: (0, r(115118).WS)({
                        spaceId: i.spaceId
                    })
                });
                if ("success" !== a.type) return null != n && n.aborted ? {
                    error: {
                        message: "Aborted",
                        code: 0
                    }
                } : (r(647095).Qg(a), {
                    error: {
                        message: a.error.message,
                        code: a.status
                    }
                });
                let s = [];
                if (r(331653).hS.is(a.data))
                    for await (let e of a.data) {
                        if ("error" === e.type) return {
                            error: {
                                message: e.message,
                                code: e.errorCode
                            }
                        };
                        null == o || o(e), s.push(e)
                    }
                return {
                    value: s
                }
            }
            r.r(t), r.d(t, {
                checkCanStartTranscription: () => n,
                ensureTranscriptionIsInActive: () => u,
                insertEmptyText: () => w,
                pauseTranscription: () => p,
                retrySummarization: () => d,
                retryTranscriptionFileUpload: () => _,
                runSummarization: () => g,
                setTranscriptionStateAndTrack: () => A,
                startTranscription: () => c,
                stopTranscription: () => l,
                updatePreferredSummarizationFormat: () => h,
                updateTranscriptionModel: () => T,
                updateTranscriptionSummaryFormatSelection: () => S
            }), r(16280), r(944114);
            let i = (0, r(109939).YK)({
                genericError: {
                    id: "transcriptionBlockActions.genericError",
                    defaultMessage: "Something went wrong while summarizing your transcript."
                },
                summaryInstructionsLoadError: {
                    id: "transcriptionBlockActions.summaryInstructionsLoadError",
                    defaultMessage: "We couldn’t load your selected summary instructions. Please try again."
                },
                failedToStartDictation: {
                    id: "transcriptionBlockActions.failedToStartDictation",
                    defaultMessage: "Unable to start transcription"
                },
                systemAudioMacHardwareError: {
                    id: "transcriptionBlockActions.systemAudioMacHardwareError",
                    defaultMessage: "AI Meeting Notes failed to start. You may need to update to the latest version of macOS."
                },
                systemAudioMacHardwareErrorRequiresMacOS13: {
                    id: "transcriptionBlockActions.systemAudioMacHardwareErrorRequiresMacOS13",
                    defaultMessage: "Transcribing on AI Meeting Notes requires macOS 13 or later."
                },
                systemAudioWindowsHardwareError: {
                    id: "transcriptionBlockActions.systemAudioWindowsHardwareError",
                    defaultMessage: "AI Meeting Notes failed to start. You may need to update to the latest version of Windows."
                },
                mobileOriginError: {
                    id: "transcriptionBlockActions.mobileOriginError",
                    defaultMessage: "This meeting was started on mobile. Please use the mobile app to continue."
                },
                confirmSummaryRegenerationMessage: {
                    id: "transcriptionBlockActions.confirmSummaryRegeneration.message",
                    defaultMessage: "This will re-generate your summary. Continue?"
                },
                confirmSummaryRegenerationAccept: {
                    id: "transcriptionBlockActions.confirmSummaryRegeneration.accept",
                    defaultMessage: "Continue"
                },
                confirmSummaryRegenerationCancel: {
                    id: "transcriptionBlockActions.confirmSummaryRegeneration.cancel",
                    defaultMessage: "Cancel"
                }
            });
            async function n(e) {
                var t;
                let {
                    environment: o,
                    blockStore: n
                } = e;
                if (!(null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id) || (0, r(398346).l)(n)) return !1;
                await n.load(), r(819652).UW({
                    id: "transcription_error_notification"
                });
                let a = t => {
                        let i = n.pointer.spaceId;
                        (0, r(377796).createAndCommit)({
                            userAction: "transcriptionBlockActions.failedToStartDictation",
                            environment: o,
                            cellTarget: i ? {
                                spaceWithId: i
                            } : void 0,
                            canUndo: !1,
                            perform: t => {
                                A({ ...e,
                                    transaction: t,
                                    state: {
                                        state: "paused"
                                    }
                                })
                            }
                        }), t && r(436555).D6({
                            label: r(962299).A.formatMessage(t),
                            helpUrl: (0, r(869708).zv)()
                        })
                    },
                    s = await (0, r(689589).HT)(o);
                switch (s) {
                    case "requiresMacOS13":
                        return a(i.systemAudioMacHardwareErrorRequiresMacOS13), !1;
                    case "showSetupModal":
                        return a(), r(769719).c.openTranscriptionSetupModal(), (0, r(104310).u)({
                            event: {
                                eventName: "transcription_block_setup_modal_opened",
                                eventProperties: {}
                            }
                        }), !1;
                    case "startDictation":
                        return !0;
                    default:
                        (0, r(722371).HB)(s)
                }
            }

            function a() {
                r(819652).Iz({
                    id: "mobile_origin_error",
                    message: r(962299).A.formatMessage(i.mobileOriginError),
                    presentationType: "transient"
                })
            }

            function s(e) {
                var t;
                let {
                    audioConsentEnabled: o,
                    blockStore: i,
                    currentUserId: n,
                    environment: a
                } = e;
                if (!o) return;
                let s = (0, r(774073).Ru)(),
                    c = !!(null == (t = r(728372).AppStoreSidebarSpaceViewStore.getState()) || null == (t = t.getSettings()) ? void 0 : t.audio_consent_nux_dismissed_v2);
                (s || c) && setTimeout(() => {
                    (0, r(465315).YW)({
                        blockId: i.id,
                        userId: n,
                        showtime: !0,
                        environment: a
                    })
                }, 200)
            }
            async function c(e) {
                var t, o;
                let {
                    environment: c,
                    blockStore: l,
                    audioConsentEnabled: d
                } = e, u = null == (t = r(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                if (!u) return;
                if (r(769719).c.setLoadingState(l.id, !0), await l.load(), r(819652).UW({
                        id: "transcription_error_notification"
                    }), !await n(e)) return void r(769719).c.setLoadingState(l.id, !1);
                let p = (t, o) => {
                    let i = l.pointer.spaceId;
                    (0, r(377796).createAndCommit)({
                        userAction: "transcriptionBlockActions.failedToStartDictation",
                        environment: c,
                        cellTarget: i ? {
                            spaceWithId: i
                        } : void 0,
                        canUndo: !1,
                        perform: r => {
                            A({ ...e,
                                from: t,
                                transaction: r,
                                state: {
                                    state: "paused"
                                }
                            })
                        }
                    }), o && r(436555).D6({
                        label: r(962299).A.formatMessage(o),
                        helpUrl: (0, r(869708).zv)()
                    }), r(769719).c.setLoadingState(l.id, !1)
                };
                if (r(769719).c.setSettingsOpenForBlockId(void 0), r(819652).UW({
                        id: "transcription_idle"
                    }), (0, r(723261).dZ)(c, l)) return void a();
                let m = l.pointer.spaceId;
                if (m && c.api.callCellCompatibleApi({
                        eventName: "prefetchUserMemories",
                        environment: c,
                        data: {
                            spaceId: m,
                            scope: "workspace-public"
                        },
                        cellNavigation: {
                            spaceId: m
                        }
                    }), (0, r(723261).Jm)(c)) {
                    y({ ...e,
                        state: "transcribing"
                    }), setTimeout(() => {
                        r(769719).c.setLoadingState(l.id, !1)
                    }, 5e3), (0, r(627335).D)({
                        environment: c,
                        transcriptionBlockStore: l,
                        tabType: "transcript",
                        withTextBlock: !1
                    }), s({
                        audioConsentEnabled: d,
                        blockStore: l,
                        currentUserId: u,
                        environment: c
                    });
                    return
                }
                try {
                    await r(336328).DictationManager.startDictation({
                        environment: c,
                        blockStore: l,
                        from: "transcription_block",
                        transcriptionStartedFrom: e.from,
                        includeSystemAudio: (0, r(689589).u)(c),
                        audioConsentEnabled: d
                    })
                } catch (e) {
                    if (e instanceof r(228327).Tn && r(336328).DictationManager.stopDictation({
                            environment: c,
                            from: "start_transcription_timed_out",
                            error: e
                        }), (0, r(101787).USz)(e) && ("DictationSystemAudioFailedError" === e.name || "DictationStartTimeoutError" === e.name) && c.device.isElectronMac)
                        if (await (0, r(42754).ww)() === r(347971).a3) {
                            let t = await (0, r(42754).e2)(c);
                            (0, r(104310).u)({
                                event: {
                                    eventName: "transcription_system_audio_failed_with_permissions_granted",
                                    eventProperties: {
                                        error_name: e.name,
                                        is_catap_active: t
                                    }
                                }
                            }), p("start_transcription_system_audio_failed_permissions_granted", i.failedToStartDictation)
                        } else p("start_transcription_setup_required"), r(769719).c.openTranscriptionSetupModal();
                    else(0, r(101787).USz)(e) && "DictationSystemAudioHardwareError" === e.name && c.device.isElectron ? p("start_transcription_system_audio_hardware_error", c.device.isElectronMac ? i.systemAudioMacHardwareError : i.systemAudioWindowsHardwareError) : p("start_transcription_error", i.failedToStartDictation);
                    return
                } finally {
                    r(769719).c.setLoadingState(l.id, !1)
                }
                let g = null == (o = r(585823).Ay.state.audioRecorder) ? void 0 : o.isStoringLocalAudio,
                    f = {
                        state: "transcribing",
                        transcriber_id: u,
                        transcriber_table: r(832375).oo9,
                        session_id: (0, r(216735).qY)(),
                        is_recording: g
                    };
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionBlockActions.initializeTitleAndStartTranscription",
                    environment: c,
                    cellTarget: m ? {
                        spaceWithId: m
                    } : void 0,
                    canUndo: !1,
                    perform: t => {
                        A({ ...e,
                            transaction: t,
                            state: f
                        })
                    }
                }), r(585823).Ay.setState({ ...r(585823).Ay.state,
                    audioRecorderShouldAutoStopOnTranscriptionStateChanges: !0
                }), s({
                    audioConsentEnabled: d,
                    blockStore: l,
                    currentUserId: u,
                    environment: c
                })
            }
            async function l(e) {
                if ((0, r(465315).Gu)(), (0, r(723261).dZ)(e.environment, e.blockStore)) return void a();
                if ((0, r(723261).Jm)(e.environment) && (0, r(723261).kc)(e.environment, e.blockStore)) {
                    r(769719).c.setLoadingState(e.blockStore.id, !0), y({ ...e,
                        state: "summarizing"
                    }), setTimeout(() => {
                        r(769719).c.setLoadingState(e.blockStore.id, !1)
                    }, 5e3);
                    return
                }
                await m({ ...e,
                    shouldStopDictation: !0
                })
            }
            async function d(e) {
                await m({ ...e,
                    shouldStopDictation: !0
                })
            }
            async function u(e) {
                var t;
                let {
                    environment: r,
                    blockStore: o,
                    from: i
                } = e, n = null == (t = o.getFormat()) ? void 0 : t.transcription_state;
                return n && "transcribing" !== n.state && "recorded_audio_transcribing" !== n.state && "recorded_audio_file_uploading" !== n.state ? "initial" !== n.state && "idle" !== n.state && "paused" !== n.state && "summarizing" !== n.state && !1 : (await p({
                    environment: r,
                    blockStore: o,
                    shouldStopDictation: !1,
                    from: i
                }), !0)
            }
            async function p(e) {
                if ((0, r(465315).Gu)(), (0, r(723261).dZ)(e.environment, e.blockStore)) {
                    (0, r(773352).log)({
                        level: "error",
                        from: "transcriptionBlockActions",
                        type: "pauseTranscription",
                        data: {
                            message: "Attempted to pause external mobile recording - button should have been disabled",
                            blockId: e.blockStore.id
                        }
                    }), a();
                    return
                }
                if ((0, r(723261).Jm)(e.environment) && (0, r(723261).kc)(e.environment, e.blockStore)) {
                    r(769719).c.setLoadingState(e.blockStore.id, !0), y({ ...e,
                        state: "paused"
                    }), setTimeout(() => {
                        r(769719).c.setLoadingState(e.blockStore.id, !1)
                    }, 5e3);
                    return
                }
                await m({ ...e,
                    disableSummarization: !0,
                    state: {
                        state: "paused"
                    }
                })
            }
            async function m(e) {
                let {
                    environment: t,
                    blockStore: o,
                    state: i,
                    disableSummarization: n,
                    shouldStopDictation: a,
                    from: s,
                    skipEnsureTranscriptionIsInActive: c = !1,
                    queuePauseTranscriptionCheckTaskImmediately: l = !1
                } = e;
                if (r(769719).c.setSettingsOpenForBlockId(void 0), r(819652).UW({
                        id: "transcription_idle"
                    }), i && A({
                        environment: t,
                        blockStore: o,
                        state: i,
                        from: s
                    }), a && r(336328).DictationManager.stopDictation({
                        environment: t,
                        from: "transcription_block",
                        skipEnsureTranscriptionIsInActive: c,
                        queuePauseTranscriptionCheckTaskImmediately: l
                    }), !n) {
                    if (t.device.isMobileNative) {
                        let {
                            clear: e
                        } = await Promise.resolve().then(r.bind(r, 525779));
                        e({
                            environment: t
                        })
                    }
                    await g({
                        environment: t,
                        blockStore: o,
                        from: s
                    })
                }
            }
            async function g(e) {
                let {
                    environment: t,
                    blockStore: n,
                    from: a
                } = e, s = n.pointer.spaceId;
                if (!s) return;
                let c = (0, r(553635).t3)();
                A({
                    environment: t,
                    blockStore: n,
                    state: {
                        state: "summarizing",
                        step: "thinking",
                        thinkingSteps: [],
                        reasoningSteps: []
                    },
                    from: a
                });
                let l = { ...n.pointer,
                        spaceId: s
                    },
                    d = r(769719).c.getSummarizationAbortController(n.id);
                null == d || d.abort();
                let u = r(769719).c.createSummarizationAbortController(n.id);
                try {
                    var p, m;
                    let e = c ? await v({
                        environment: t,
                        blockStore: n,
                        spaceId: s
                    }) : void 0;
                    ! function(e) {
                        var t;
                        let {
                            environment: o,
                            blockStore: i,
                            summaryTemplateSelection: n
                        } = e, a = null == (t = i.getFormat()) ? void 0 : t.transcription_summary_template_selection;
                        if (void 0 === n || void 0 !== a && function(e) {
                                let {
                                    a: t,
                                    b: r
                                } = e;
                                return "auto" === t || "auto" === r ? t === r : t.page_id === r.page_id && t.space_id === r.space_id
                            }({
                                a: a,
                                b: n
                            })) return;
                        let s = i.pointer.spaceId;
                        (0, r(377796).createAndCommit)({
                            userAction: "transcriptionBlockActions.materializeSummaryTemplateSelectionForSummarization",
                            environment: o,
                            cellTarget: s ? {
                                spaceWithId: s
                            } : void 0,
                            canUndo: !1,
                            perform: e => {
                                (0, r(715144).z)({
                                    stores: [i],
                                    update: {
                                        transcription_summary_template_selection: n
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }({
                        environment: t,
                        blockStore: n,
                        summaryTemplateSelection: e
                    });
                    let d = !1,
                        g = !1,
                        f = e => {
                            if ("summarize-transcript-error" === e.type) {
                                g = !0, r(436555).D6({
                                    label: r(962299).A.formatMessage(i.genericError)
                                });
                                return
                            }
                            if ("summarize-transcript-record-map" === e.type) {
                                let o = e.recordMap;
                                (0, r(31069)._)({
                                    currentUserId: t.currentUser.id,
                                    defaultRecordCache: t.defaultRecordCache,
                                    recordMap: r(412951).RecordMapWithRole.create(o),
                                    inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                                    debugSource: "transcriptionBlockActions.runSummarization",
                                    isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                                })
                            }
                            let o = r(769719).c.getTabState(n.id),
                                a = (0, r(869708).y1)(n, "summary");
                            a && o !== (null == a ? void 0 : a.id) && !d && (d = !0, r(769719).c.setTabState(n.id, a.id))
                        },
                        h = (0, r(295447).Z1)({
                            environment: t,
                            table: r(832375).evP,
                            spaceId: s
                        });
                    if ((0, r(167322).Kw)(e)) {
                        let i = await o({
                            environment: t,
                            onResponse: f,
                            data: {
                                transcriptionBlockId: n.id,
                                spaceId: s,
                                language: (0, r(533096).getPreferredDictationLanguage)(t.currentUser.id),
                                summaryTabId: h,
                                transcriptionModel: (0, r(869708).RW)(null == (p = n.getFormat()) ? void 0 : p.transcription_model) ? ? "unknown",
                                summaryTemplateSelection: e,
                                from: a
                            },
                            abortSignal: u.signal
                        });
                        if ("error" in i && i.error) {
                            0 !== i.error.code && ((0, r(773352).log)({
                                level: "error",
                                from: "transcriptionBlockActions",
                                type: "meetingNotesAgentReturnedError",
                                data: {
                                    blockId: n.id,
                                    errorCode: i.error.code,
                                    errorMessage: i.error.message
                                }
                            }), A({
                                environment: t,
                                blockStore: n,
                                state: {
                                    state: "idle"
                                },
                                from: "summary_error"
                            }));
                            return
                        }
                    } else(function(e) {
                        var t;
                        let {
                            environment: o,
                            blockStore: i
                        } = e;
                        if (!(null != (t = i.getFormat()) && t.transcription_summary_thread_id)) return;
                        let n = i.pointer.spaceId;
                        (0, r(377796).createAndCommit)({
                            userAction: "transcriptionBlockActions.clearMeetingNotesAgentThreadForLegacySummarization",
                            environment: o,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            canUndo: !1,
                            perform: e => {
                                (0, r(715144).z)({
                                    stores: [i],
                                    update: {
                                        transcription_summary_thread_id: void 0
                                    },
                                    transaction: e
                                })
                            }
                        })
                    })({
                        environment: t,
                        blockStore: n
                    }), await (0, r(621347).g)({
                        environment: t,
                        onResponse: f,
                        data: {
                            transcript: [{
                                id: (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(832375).mSw,
                                    spaceId: s
                                }),
                                type: "config",
                                value: {
                                    type: "summarize-transcript",
                                    transcriptPointer: l,
                                    language: (0, r(533096).getPreferredDictationLanguage)(t.currentUser.id),
                                    summaryTabId: h,
                                    transcriptionModel: (0, r(869708).RW)(null == (m = n.getFormat()) ? void 0 : m.transcription_model) ? ? "unknown",
                                    summaryMethod: "legacy",
                                    summaryTemplateSelection: e,
                                    from: a
                                }
                            }, {
                                id: (0, r(295447).Z1)({
                                    environment: t,
                                    table: r(832375).mSw,
                                    spaceId: s
                                }),
                                type: "summarize-transcript"
                            }],
                            traceId: n.id,
                            spaceId: s,
                            generateTitle: !1
                        },
                        abortSignal: u.signal
                    });
                    t.device.isBrowser && !(0, r(219094).Xh)("ai_meeting_notes_browser_summary_app_download") && (0, r(376730).H)(t, "ai_meeting_notes_browser_summary_app_download"), g || (r(547517).O.setState({ ...r(547517).O.state,
                        transcriptionSummarizationCompleted: !0
                    }), function(e) {
                        var t, o, i, n;
                        let a, s, {
                            environment: c,
                            spaceId: l
                        } = e;
                        if (!r(218744).default.checkGate({
                                gateName: "onboarding_oracle_thread"
                            }) || r(610463).X.state) return;
                        let d = (a = null == (t = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.getSettings(), null == a || null == (o = a.oracle_thread_configs) || null == (o = o.meeting_notes) ? void 0 : o.thread_id);
                        if (!d || (s = null == (i = r(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : i.getSettings(), (null == s || null == (n = s.oracle_thread_user_states) ? void 0 : n.has_recorded_first_meeting_notes) !== void 0)) return;
                        let u = new(r(174148)).E(c, {
                            table: r(832375).Toz,
                            id: d,
                            spaceId: l
                        });
                        ! function(e) {
                            let {
                                environment: t,
                                threadStore: o,
                                triggerMessage: i
                            } = e;
                            (0, r(448075).P)({
                                environment: t,
                                threadStore: o,
                                displayMessage: "",
                                actualMessage: i,
                                onError: () => {
                                    (0, r(222024).t)().log({
                                        level: "warning",
                                        from: "resumeOracleThread",
                                        type: "failedToResumeThread",
                                        data: {
                                            miscDataToConvertToString: {
                                                threadId: o.id
                                            }
                                        }
                                    })
                                }
                            })
                        }({
                            environment: c,
                            threadStore: u,
                            triggerMessage: r(83202).Ex.connectCalendar
                        }),
                        function(e) {
                            var t;
                            let {
                                environment: o,
                                state: i,
                                value: n
                            } = e, a = r(728372).AppStoreSidebarSpaceViewStore.state;
                            if (!a) return;
                            let s = (null == (t = a.getSettings()) ? void 0 : t.oracle_thread_user_states) ? ? {};
                            if (void 0 !== s[i]) return;
                            let c = a.getSpaceId();
                            r(377796).createAndCommit({
                                environment: o,
                                cellTarget: c ? {
                                    spaceWithId: c
                                } : void 0,
                                userAction: "resumeOracleThread.setOracleThreadUserState",
                                canUndo: !0,
                                perform: e => {
                                    (0, r(421439).y4)({
                                        store: a,
                                        operation: {
                                            pointer: a.pointer,
                                            path: ["settings"],
                                            command: "update",
                                            args: { ...a.getSettings(),
                                                oracle_thread_user_states: { ...s,
                                                    [i]: n
                                                }
                                            }
                                        },
                                        transaction: e
                                    })
                                }
                            })
                        }({
                            environment: c,
                            state: "has_recorded_first_meeting_notes",
                            value: !0
                        })
                    }({
                        environment: t,
                        spaceId: s
                    }))
                } catch (e) {
                    if ((0, r(757688).zf)(u, e)) return void(0, r(773352).log)({
                        level: "info",
                        from: "transcriptionBlockActions",
                        type: "summarizationAborted",
                        data: {
                            blockId: n.id
                        }
                    });
                    if (e instanceof f) {
                        (0, r(773352).log)({
                            level: "error",
                            from: "transcriptionBlockActions",
                            type: "summaryFormatCatalogLoadFailed",
                            error: (0, r(416607).convertErrorToLog)(e.underlyingError ? ? e),
                            data: {
                                blockId: n.id,
                                spaceId: s
                            }
                        }), r(436555).D6({
                            label: r(962299).A.formatMessage(i.summaryInstructionsLoadError)
                        }), A({
                            environment: t,
                            blockStore: n,
                            state: {
                                state: "idle"
                            },
                            from: "summary_error"
                        });
                        return
                    }(0, r(773352).log)({
                        level: "error",
                        from: "transcriptionBlockActions",
                        type: "summarizationFailedResetToIdle",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            blockId: n.id
                        }
                    }), A({
                        environment: t,
                        blockStore: n,
                        state: {
                            state: "idle"
                        },
                        from: "summary_error"
                    })
                } finally {
                    r(769719).c.clearSummarizationAbortController(n.id)
                }
            }
            class f extends Error {
                underlyingError;
                constructor(e) {
                    super("Failed to load summary format catalog"), this.name = "SummaryFormatCatalogLoadError", this.underlyingError = e
                }
            }
            async function v(e) {
                var t;
                let {
                    environment: o,
                    blockStore: i,
                    spaceId: n
                } = e, a = null == (t = i.getModel()) || null == (t = t.getFormat()) ? void 0 : t.transcription_summary_template_selection, s = (0, r(869708).NP)();
                if ("auto" === a || void 0 === a && (void 0 === s || "auto" === s)) return "auto";
                let c = await (0, r(65314).L)({
                    environment: o,
                    blockStore: i,
                    spaceId: n
                });
                if ("error" === c.selectedOnlySummaryFormatState.status) throw new f(c.selectedOnlySummaryFormatState.underlyingError);
                let l = (0, r(65314).m)(c);
                if ("ready" !== l.status) throw new f("error" === l.status ? l.errorMessage : void 0);
                return l.effectiveSelection
            }
            async function h(e) {
                var t;
                let {
                    environment: o,
                    blockStore: i,
                    format: n
                } = e;
                if ((null == (t = i.getFormat()) ? void 0 : t.transcription_summarization_format_type) === n) return;
                let a = i.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionBlockActions.updatePreferredSummarizationFormat",
                    environment: o,
                    cellTarget: a ? {
                        spaceWithId: a
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [i],
                            update: {
                                transcription_summarization_format_type: n
                            },
                            transaction: e
                        })
                    }
                }), "idle" !== (0, r(869708).by)(i).state || (0, r(398346).l)(i) || await g({
                    environment: o,
                    blockStore: i,
                    from: "format_updated"
                })
            }
            async function S(e) {
                let {
                    environment: t,
                    blockStore: o,
                    selection: n,
                    hasEffectiveSelectionChanged: a,
                    analyticsProperties: s,
                    context: c
                } = e;
                try {
                    let e = (0, r(869708).by)(o),
                        l = "idle" === e.state && (0, r(869708).K6)(o) && !(0, r(398346).l)(o);
                    if (l && a) {
                        let {
                            accept: e
                        } = await r(647095).Gh({
                            message: r(962299).A.formatMessage(i.confirmSummaryRegenerationMessage),
                            acceptLabel: r(962299).A.formatMessage(i.confirmSummaryRegenerationAccept),
                            cancelLabel: r(962299).A.formatMessage(i.confirmSummaryRegenerationCancel),
                            acceptColor: "blue",
                            mode: "normal"
                        });
                        if (!e) return
                    }
                    let d = o.pointer.spaceId;
                    (0, r(377796).createAndCommit)({
                        userAction: "transcriptionBlockActions.updateTranscriptionSummaryFormatSelection",
                        environment: t,
                        cellTarget: d ? {
                            spaceWithId: d
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, r(715144).z)({
                                stores: [o],
                                update: {
                                    transcription_summary_template_selection: n
                                },
                                transaction: e
                            })
                        }
                    }), a && void 0 !== c && (0, r(104310).u)({
                        event: {
                            eventName: "meeting_notes_summary_format_selected",
                            eventProperties: {
                                block_id: o.id,
                                context: "footer" === c ? "regeneration" : c,
                                ...s
                            }
                        }
                    }), l && a && await g({
                        environment: t,
                        blockStore: o,
                        from: "summary_template_updated"
                    })
                } catch (e) {
                    (0, r(773352).log)({
                        level: "error",
                        from: "transcriptionBlockActions",
                        type: "updateTranscriptionSummaryFormatSelection",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            blockId: o.id,
                            spaceId: o.pointer.spaceId,
                            miscDataToConvertToString: {
                                selection: n
                            }
                        }
                    })
                }
            }

            function A(e) {
                let {
                    environment: t,
                    blockStore: o,
                    state: i,
                    transaction: n,
                    from: a
                } = e;
                (0, r(699427).K)({
                    environment: t,
                    blockStore: o,
                    state: i,
                    transaction: n,
                    from: a
                }), (0, r(104310).u)({
                    event: {
                        eventName: "transcription_state_updated",
                        eventProperties: {
                            from: a,
                            block_id: o.id,
                            space_id: o.pointer.spaceId,
                            new_state: i.state
                        }
                    }
                })
            }

            function y(e) {
                let {
                    environment: t,
                    blockStore: o,
                    state: i
                } = e, n = (0, r(483227).J8)({
                    store: o,
                    scrollToBlockId: o.id,
                    fullyQualified: !0,
                    pageVisitSource: r(254656).y8.MobileMeetingNotesNotification
                });
                r(769719).c.setSettingsOpenForBlockId(void 0), r(819652).UW({
                    id: "transcription_idle"
                });
                let a = o.pointer.spaceId,
                    s = t.currentUser.id,
                    c = (0, r(400986).getDictationLanguageValue)((0, r(533096).getPreferredDictationLanguage)(s));
                if (a && s) {
                    var l;
                    null == (l = t.mobileNative) || l.setTranscriptionState(o.id, s, a, n, i, c)
                }
            }

            function _(e) {
                let {
                    environment: t,
                    blockStore: o
                } = e, i = (0, r(483227).J8)({
                    store: o,
                    scrollToBlockId: o.id,
                    fullyQualified: !0,
                    pageVisitSource: r(254656).y8.MobileMeetingNotesNotification
                }), n = o.pointer.spaceId, a = t.currentUser.id, s = (0, r(400986).getDictationLanguageValue)((0, r(533096).getPreferredDictationLanguage)(a));
                if (n && a) {
                    var c;
                    null == (c = t.mobileNative) || c.retryTranscriptionFileUpload(o.id, a, n, i, s)
                }
            }

            function T(e) {
                var t;
                let {
                    environment: o,
                    blockStore: i,
                    transcriptionModel: n
                } = e, a = (0, r(869708).f1)(n);
                if ((null == (t = i.getFormat()) ? void 0 : t.transcription_model) === a) return;
                let s = i.pointer.spaceId;
                (0, r(377796).createAndCommit)({
                    userAction: "transcriptionBlockActions.updateTranscriptionModel",
                    environment: o,
                    cellTarget: s ? {
                        spaceWithId: s
                    } : void 0,
                    canUndo: !1,
                    perform: e => {
                        (0, r(715144).z)({
                            stores: [i],
                            update: {
                                transcription_model: a
                            },
                            transaction: e
                        })
                    }
                })
            }

            function w(e) {
                let {
                    environment: t,
                    store: o,
                    transaction: i
                } = e, n = r(124937).Wv({
                    environment: t,
                    type: r(955630).xd.text,
                    inMemoryRecordCache: o.inMemoryRecordCache,
                    transaction: i,
                    spaceId: o.pointer.spaceId
                });
                (0, r(135674).B)({
                    parentStore: o.getContentStore(),
                    appendStore: n,
                    transaction: i
                });
                let a = o.getContentStores()[0];
                (0, r(182553).h)({
                    environment: t,
                    store: a
                });
                let s = a.getBlockTitleStore();
                (0, r(940763).e)({
                    store: s
                })
            }
        },
        356023: (e, t, r) => {
            async function o() {
                return null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.getMeetingNotificationNonce ? await r(775657).electronApi.getMeetingNotificationNonce() : ""
            }
            async function i(e) {
                let {
                    environment: t,
                    from: o
                } = e, i = (0, r(330870).a)();
                if (!i) return;
                let n = (0, r(869708).Ql)(i);
                n.sort((e, t) => t.getCreatedTime() - e.getCreatedTime());
                let a = n[0];
                if (a) {
                    let e = (0, r(774073).yz)();
                    await (0, r(338227).startTranscription)({
                        environment: t,
                        blockStore: a,
                        from: o,
                        audioConsentEnabled: e
                    })
                }
            }
            async function n(e) {
                let {
                    environment: t,
                    from: r,
                    nonce: n
                } = e;
                if (await o() === n) return i({
                    environment: t,
                    from: r
                })
            }
            r.r(t), r.d(t, {
                startTranscribingBlockOnPageFromTrustedSource: () => i,
                startTranscribingBlockOnPageFromUntrustedSource: () => n
            })
        },
        400986: (e, t, r) => {
            function o() {
                let e = r(218744).default.checkGate({
                        gateName: "show_beta_dictation_languages"
                    }),
                    t = r(218744).default.checkGate({
                        gateName: "transcription_auto_language_option_enabled"
                    });
                return Object.entries((0, r(144662).k9)({
                    includeBeta: e,
                    includeAuto: t
                }))
            }

            function i(e) {
                var t;
                return (null == (t = (0, r(144662).k9)({
                    includeBeta: !0,
                    includeAuto: !0
                })[e]) ? void 0 : t[1]) ? ? "en"
            }
            r.r(t), r.d(t, {
                getDictationLanguageEntries: () => o,
                getDictationLanguageValue: () => i
            })
        },
        405461: (e, t, r) => {
            function o(e) {
                let {
                    intl: t,
                    groupName: o
                } = e;
                return o || t.formatMessage(r(95384).D.untitledGroupName)
            }

            function i(e) {
                var t;
                return (null == (t = r(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function n(e) {
                let {
                    userIds: t,
                    limit: o,
                    spaceStore: i
                } = e;
                if (!i) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let n = o ? t.slice(0, o) : t;
                return {
                    limitedUserStores: r(381453).oE(n.map(e => r(807825).L.createChildStore(i, {
                        table: r(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - n.length
                }
            }

            function a({
                userStores: e,
                spaceStore: t,
                intl: o
            }) {
                return r(381453).Ul(e, e => e.getSearchName(o)).sort((e, o) => {
                    if (!t) return 0;
                    let i = (0, r(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        n = (0, r(993077).dp)(t, o.id).getMembershipTypeAsRoleOrNone();
                    return i && n ? r(642157).hV.indexOf(n) - r(642157).hV.indexOf(i) : 0
                })
            }

            function s(e) {
                var t;
                let {
                    spaceStore: o,
                    spaceUserStore: i
                } = e;
                if (!o) return !1;
                let n = (null == i ? void 0 : i.getMembershipType()) ? ? "none",
                    a = null == (t = o.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (n) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === a;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, r(722371).HB)(n)
                }
            }

            function c(e) {
                let {
                    groupId: t,
                    delta: o
                } = e, i = r(801062).h.getGroupData(t);
                i && r(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, i.memberCount + o)
                })
            }

            function l(e) {
                let {
                    members: t,
                    query: r
                } = e, o = r.trim().toLowerCase();
                return "" === o ? t : t.filter(e => e.name.toLowerCase().includes(o) || void 0 !== e.email && e.email.toLowerCase().includes(o))
            }

            function d(e) {
                let {
                    memberUserIds: t,
                    spaceStore: o,
                    groupId: i,
                    currentUserId: n
                } = e;
                return t.map(e => {
                    let t = r(807825).L.createChildStore(o, {
                            table: r(832375).oo9,
                            id: e
                        }),
                        a = (0, r(13717).A)({
                            spaceStore: o,
                            groupId: i,
                            userId: e
                        }),
                        s = r(229903).V.createChildStore(o, (0, r(729052).i1)({
                            userId: e,
                            spaceId: o.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === n,
                        isOwner: "owner" === a.getMembershipType(),
                        isWorkspaceOwner: o.canAdmin(),
                        isRestrictedMember: s.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: r
                } = e, o = new Set(r);
                return t.filter(e => !o.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: o
                } = e;
                r(801062).h.updateGroup(t, {
                    group: o.getModel()
                })
            }
            r.d(t, {
                A9: () => u,
                Fz: () => d,
                Ny: () => s,
                Pf: () => o,
                cp: () => a,
                gA: () => n,
                mi: () => l,
                s: () => c,
                sd: () => p,
                xQ: () => i
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(581454)
        },
        406881: (e, t, r) => {
            r.d(t, {
                vW: () => a,
                zz: () => s
            }), r(16280), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520);
            var o = () => r(642157);
            let i = {};

            function n(e, t) {
                return `${e.currentUser.id}:${t.spaceId}`
            }
            let a = new(r(273917)).U(n, async (e, {
                spaceId: t
            }) => {
                var i;
                let n = await e.api.callMainCellApi({
                    eventName: "fetchTranscriptionSummaryFormat",
                    environment: e,
                    data: {
                        spaceId: t
                    }
                });
                if ("success" !== n.type) {
                    let e = (0, r(922271).H)(r(962299).A.getIntl(), n);
                    return r(773352).log({
                        level: "error",
                        from: "transcriptionSummaryFormatStore",
                        type: "fetchTranscriptionSummaryFormatFailed",
                        data: {
                            miscDataToConvertToString: {
                                spaceId: t,
                                status: n.status,
                                errorMessage: e
                            }
                        }
                    }), {
                        status: "error",
                        errorMessage: e
                    }
                }
                try {
                    await n.handleRecordMapForResponsePromise
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "transcriptionSummaryFormatStore",
                        type: "fetchTranscriptionSummaryFormatRecordMapHydrationFailed",
                        data: {
                            miscDataToConvertToString: {
                                spaceId: t,
                                error: e instanceof Error ? e.message : String(e)
                            }
                        }
                    })
                }
                let a = null == (i = n.data.customFormatSeedTemplate) ? void 0 : i.subtreeRecordMap;
                if (a) try {
                    ! function(e) {
                        let {
                            environment: t,
                            recordMap: i
                        } = e, n = r(412951).RecordMapWithRole.create(i), a = t.defaultRecordCache.inMemoryRecordCache, s = t.currentUser.id;
                        for (let {
                                pointer: e,
                                model: t,
                                role: r
                            } of n)(0, o().PW)(r) && (a.setModelAndRole({
                            pointer: e,
                            userId: s
                        }, t, r), a.emitRecord(e, []))
                    }({
                        environment: e,
                        recordMap: a
                    })
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "transcriptionSummaryFormatStore",
                        type: "seedTemplateSubtreeRecordMapHydrationFailed",
                        data: {
                            miscDataToConvertToString: {
                                spaceId: t,
                                error: e instanceof Error ? e.message : String(e)
                            }
                        }
                    })
                }
                return {
                    status: "ready",
                    data: n.data
                }
            });

            function s(e, t) {
                let o, s, l, d, u = (o = n(e, t), s = Date.now(), (d = void 0 === (l = i[o]) || s - l > 3e3) && (i[o] = s), a.getData(e, t, d));
                return u ? "error" === u.status ? u : {
                    status: "ready",
                    data: function(e) {
                        var t;
                        let {
                            environment: o,
                            args: i,
                            data: n
                        } = e, a = r(728372).AppStoreSidebarSpaceViewStore.state, s = (null == a ? void 0 : a.getSpaceId()) === i.spaceId ? (null == (t = a.getSettings()) || null == (t = t.transcription_summary_template_settings) ? void 0 : t.dismissed_notion_format_keys) ? ? [] : [], l = s.length > 0 ? new Set(s) : void 0, d = n.notionFormats.filter(e => !(null != l && l.has(e.templateKey)) && c(o, e.recordPointer)), u = n.customFormats.filter(e => c(o, e.recordPointer));
                        return d.length === n.notionFormats.length && u.length === n.customFormats.length ? n : { ...n,
                            notionFormats: d,
                            customFormats: u
                        }
                    }({
                        environment: e,
                        args: t,
                        data: u.data
                    })
                } : {
                    status: "loading"
                }
            }

            function c(e, t) {
                let o = e.defaultRecordCache.inMemoryRecordCache.getRecordModel({
                    pointer: {
                        table: r(832375).evP,
                        id: t.id,
                        spaceId: t.spaceId
                    },
                    userId: e.currentUser.id
                });
                return !o || !1 !== o.getAlive()
            }
        },
        407259: (e, t, r) => {
            r.d(t, {
                B: () => o
            });

            function o(e) {
                var t;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.closeMeetingNotification) || t.call(r(775657).electronApi, e)
            }
        },
        448075: (e, t, r) => {
            r.d(t, {
                P: () => o
            }), r(16280);

            function o(e) {
                try {
                    ! function(e) {
                        let {
                            environment: t,
                            threadStore: o,
                            displayMessage: i,
                            actualMessage: n,
                            sourceStepId: a
                        } = e;
                        if (!o.getSpaceId()) throw Error("Missing spaceId on threadStore during user-injected message submission");
                        let s = o.getSpaceStore();
                        if (!s) throw Error("Missing spaceStore on threadStore during user-injected message submission");
                        let c = t.currentUser.id;
                        if (!c) throw Error("Missing currentUserId during user-injected message submission");
                        let l = r(807825).L.createChildStore(s, {
                                table: r(832375).oo9,
                                id: c
                            }),
                            d = (0, r(674880).uP)({
                                environment: t,
                                spaceStore: s,
                                userStore: l,
                                actualMessage: (0, r(247438).x9d)(n),
                                displayMessage: (0, r(247438).x9d)(i),
                                sourceStepId: a
                            });
                        (0, r(455764).T)({
                            environment: t,
                            clientStore: r(57168).defaultClientAIChatStore,
                            userStore: l,
                            spaceStore: s,
                            threadStore: o,
                            addSteps: [d],
                            waitForServerCommit: !0,
                            temporaryAiThreadManager: void 0
                        })
                    }(e)
                } catch (t) {
                    (0, r(222024).t)().error({
                        from: "submitUserInjectedMessageActions",
                        type: "userInjectedMessageSubmissionFailed",
                        error: t
                    }), e.onError()
                }
            }
        },
        455764: (e, t, r) => {
            r.d(t, {
                T: () => o
            }), r(16280), r(581454);

            function o(e) {
                let {
                    environment: t,
                    clientStore: o,
                    userStore: i,
                    spaceStore: n,
                    threadStore: a,
                    addSteps: s,
                    waitForServerCommit: c,
                    sendPartialTranscript: l,
                    sendPatchResponse: d,
                    analyticsArgs: u
                } = e, p = a, {
                    serverCommitResult: m
                } = (0, r(377796).createAndCommit)({
                    userAction: "WorkflowActions.addStepsToExistingThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: n.id
                    },
                    perform: e => {
                        p = function(e) {
                            let {
                                threadStore: t,
                                environment: o,
                                spaceStore: i,
                                userStore: n,
                                transaction: a
                            } = e;
                            return t.isDefined() ? t : (r(773352).log({
                                level: "info",
                                from: "workflowActions",
                                type: "ensureThreadStoreIsMaterialized",
                                data: {
                                    threadId: t.id,
                                    spaceId: i.id,
                                    miscDataToConvertToString: {
                                        threadType: t.getType()
                                    }
                                },
                                error: {
                                    stack: Error("ThreadStore not defined before append").stack
                                }
                            }), (0, r(757688).aP)({
                                environment: o,
                                spaceStore: i,
                                userStore: n,
                                transaction: a,
                                threadId: t.id,
                                threadType: t.getType()
                            }))
                        }({
                            threadStore: p,
                            environment: t,
                            spaceStore: n,
                            userStore: i,
                            transaction: e
                        }), (0, r(757688).Vn)({
                            threadStore: p,
                            environment: t,
                            spaceStore: n,
                            userStore: i,
                            addSteps: s,
                            transaction: e
                        })
                    }
                });
                return (0, r(757688).WE)({
                    environment: t,
                    clientStore: o,
                    threadStore: p,
                    waitBeforeSending: c ? m : void 0,
                    stepIdsToInclude: l ? s.map(e => e.id) : void 0,
                    sendPatchResponse: d,
                    analyticsArgs: u
                }), p
            }
        },
        465315: (e, t, r) => {
            let o;
            async function i(e) {
                let {
                    intervalMs: t,
                    timeoutMs: o,
                    minVolume: i = 0
                } = e, n = Date.now();
                return new Promise(e => {
                    let a = setInterval(async () => {
                        let s = await (0, r(984893).l)();
                        "number" == typeof s && s > i && (clearInterval(a), e(!0)), Date.now() + t - n > o && (clearInterval(a), e(!1))
                    }, t)
                })
            }
            r.d(t, {
                Vu: () => c,
                YW: () => d,
                Gu: () => l
            });
            let n = {
                    English: "en-US",
                    German: "de-DE",
                    Korean: "ko-KR",
                    Simplified_Chinese: "zh-CN",
                    Traditional_Chinese: "zh-TW",
                    Japanese: "ja-JP",
                    Spanish: "es-ES",
                    Portuguese: "pt-BR",
                    French: "fr-FR",
                    Danish: "da-DK",
                    Finnish: "fi-FI",
                    Norwegian: "nb-NO",
                    Dutch: "nl-NL",
                    Swedish: "sv-SE",
                    Indonesian: "id-ID",
                    Russian: "ru-RU",
                    Thai: "th-TH",
                    Vietnamese: "vi-VN",
                    Italian: "it-IT",
                    Arabic: "ar-SA",
                    Hebrew: "he-IL",
                    Polish: "pl-PL"
                },
                a = {
                    English: {
                        "en-GB": "en-GB"
                    },
                    Spanish: {
                        "es-LA": "es-LA"
                    }
                },
                s = (0, r(109939).YK)({
                    copiedConsentToast: {
                        defaultMessage: "Consent message copied to clipboard",
                        id: "transcription.consentActions.copyToast.success"
                    },
                    copyConsentErrorToast: {
                        defaultMessage: "Failed to copy consent message to clipboard",
                        id: "transcription.consentActions.copyToast.failure"
                    },
                    playAudioMutedToast: {
                        defaultMessage: "Your volume is muted",
                        id: "transcription.consentActions.playAudioToast.testing.muted"
                    },
                    playAudioMutedWithInstructionsToast: {
                        defaultMessage: "Your volume is muted. Turn it up so that all participants can hear the message.",
                        id: "transcription.consentActions.playAudioToast.muted"
                    },
                    playAudioLowToast: {
                        defaultMessage: "Your volume is low. Turn it up so that all participants can hear the message.",
                        id: "transcription.consentActions.playAudioToast.lowVolume"
                    }
                });
            async function c(e) {
                let {
                    userId: t,
                    language: o,
                    willSaveLocalRecordings: i,
                    audioConsentEnabled: n,
                    blockId: a
                } = e;
                try {
                    await navigator.clipboard.writeText(function({
                        userId: e,
                        language: t,
                        ignoreSavedMessage: o,
                        willSaveLocalRecordings: i,
                        audioConsentEnabled: n
                    }) {
                        if (n) {
                            let e = i ? r(55577).f.autoplayAudioConsentMessageWithLocalRecordings : r(55577).f.autoplayAudioConsentMessage;
                            return r(962299).A.getIntl().formatMessage(e)
                        }
                        if (!o) {
                            let o = r(255482).K.get({
                                userId: e,
                                key: "transcriptionConsentMessageV2"
                            });
                            if (null != o && o[t]) return o[t]
                        }
                        let a = i ? r(55577).f.defaultConsentMessageWithLocalRecordings : r(55577).f.defaultConsentMessage,
                            s = (0, r(740375).v)(t);
                        return s ? (0, r(163467).J)(s, a) : r(962299).A.getIntl().formatMessage(a)
                    }({
                        userId: t,
                        language: o,
                        ignoreSavedMessage: !1,
                        willSaveLocalRecordings: i,
                        audioConsentEnabled: n
                    })), r(436555).D6({
                        label: r(962299).A.getIntl().formatMessage(s.copiedConsentToast)
                    })
                } catch {
                    r(436555).D6({
                        label: r(962299).A.getIntl().formatMessage(s.copyConsentErrorToast)
                    })
                } finally {
                    (0, r(104310).u)({
                        event: {
                            eventName: "ai_meeting_notes_copy_consent_message",
                            eventProperties: {
                                block_id: a
                            }
                        }
                    })
                }
            }

            function l() {
                o && (o.pause(), o.src = "", o = void 0)
            }
            async function d(e) {
                let {
                    blockId: t,
                    userId: c,
                    showtime: d
                } = e;
                l();
                let p = await (0, r(984893).l)();
                if ("number" == typeof p && -1 !== p)
                    if (0 === p) {
                        if (r(436555).D6({
                                label: d ? r(962299).A.getIntl().formatMessage(s.playAudioMutedWithInstructionsToast) : r(962299).A.getIntl().formatMessage(s.playAudioMutedToast),
                                durationMs: r(441742).LX
                            }), !await i({
                                intervalMs: 500,
                                timeoutMs: 1e4
                            })) return
                    } else d && p <= 25 && r(436555).D6({
                        label: r(962299).A.getIntl().formatMessage(s.playAudioLowToast),
                        durationMs: r(441742).LX
                    });
                try {
                    var m, g;
                    let e, i, s, l, d, p = (i = (0, r(533096).getPreferredDictationLanguage)(c), s = r(728372).AppStoreCurrentUserSettingsStore.state, l = null == s || null == (m = s.getSettings()) ? void 0 : m.preferred_locale, void 0 !== l && (0, r(619157).iK)(l) && (e = null == (g = a[i]) ? void 0 : g[l]), d = e ? ? n[i] ? ? "en-US", `https://prod-notion-assets.s3.us-west-2.amazonaws.com/consent-audio/${d}.wav`),
                        f = new Audio(p);
                    o = f, f.onended = () => {
                        o = void 0
                    }, f.onerror = e => {
                        o = void 0, u({
                            blockId: t,
                            level: "error",
                            subType: "audioPlaybackError",
                            error: (0, r(161179).A)(e)
                        })
                    }, await f.play().catch(e => {
                        u({
                            blockId: t,
                            level: "error",
                            subType: "audioPlayError",
                            error: (0, r(161179).A)(e)
                        })
                    })
                } catch (e) {
                    u({
                        blockId: t,
                        level: "error",
                        subType: "audioPlayError",
                        error: (0, r(161179).A)(e)
                    })
                }
            }

            function u(e) {
                let {
                    blockId: t,
                    level: o,
                    subType: i,
                    error: n
                } = e;
                r(773352).log({
                    level: o,
                    from: "transcriptionConsentActions",
                    type: `playAudioConsentMessage:${i}`,
                    error: n,
                    data: {
                        miscDataToConvertToString: {
                            blockId: t
                        }
                    }
                })
            }
        },
        512985: (e, t, r) => {
            r.d(t, {
                B: () => o
            });

            function o(e, t) {
                if (r(775657).electronApi) {
                    var o;
                    null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (o = r(775657).electronApi.pushToastInMainTab) || o.call(r(775657).electronApi, t)
                } else {
                    let o = r(918150).v[t.toastId];
                    o && o(e, t)
                }
            }
        },
        540328: (e, t, r) => {
            r.d(t, {
                KY: () => n,
                dr: () => a,
                xX: () => s
            });
            var o = () => r(558208);
            let i = new Map;

            function n(e) {
                i.set(e.id, e)
            }

            function a(e) {
                if (e) return i.get(e)
            }

            function s(e) {
                var t, n, a;
                let {
                    threadStore: s,
                    environment: c,
                    spaceStore: l,
                    userStore: d
                } = e;
                if (!s || !(0, o().Ci)(s)) return s;
                let u = c.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === o().Ll && u.removeCacheOverride(e);
                let p = s.getTranscript(),
                    m = s.getParentId(),
                    g = s.getParentTable(),
                    f = null == (t = s.getData()) ? void 0 : t.workflow_id,
                    v = s.getType(),
                    h = null == (n = s.getData()) ? void 0 : n.title,
                    S = s.getSpaceId() ? ? l.id,
                    {
                        performResult: A
                    } = (0, r(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: c,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: S
                        },
                        perform: e => {
                            let t = (0, r(757688).aP)({
                                environment: c,
                                spaceStore: l,
                                userStore: d,
                                transcript: p,
                                transaction: e,
                                threadId: s.id,
                                workflowId: f,
                                threadType: v
                            });
                            return m && g && (0, r(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: m,
                                    parent_table: g,
                                    space_id: S
                                }
                            }), h && (0, r(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: h
                                }
                            }), t
                        }
                    });
                return a = s.id, i.delete(a), A ? ? r(174148).E.createChildStore(l, {
                    id: s.id,
                    spaceId: S,
                    table: r(832375).Toz
                })
            }
        },
        542061: (e, t, r) => {
            r.d(t, {
                a: () => a,
                E: () => n
            }), r(16280);
            var o = r(296540);
            r(898992), r(672577), r(640088).Ju.downloadMac, r(640088).Ju.downloadMacUniversal, r(640088).Ju.downloadMacIntel, r(640088).Ju.downloadMacAppleSilicon, r(640088).Ju.downloadWindows, r(640088).Ju.downloadWindowsArm, r(640088).Ju.downloadWindowsMsix, r(640088).Ju.downloadWindowsMsixArm;
            let i = [{
                route: r(640088).Ju.downloadMac,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: r(640088).Ju.downloadMacIntel,
                architecture: "x86",
                operatingSystem: "mac",
                target: "mac"
            }, {
                route: r(640088).Ju.downloadMacUniversal,
                architecture: "universal",
                operatingSystem: "mac",
                target: "macUniversal"
            }, {
                route: r(640088).Ju.downloadMacAppleSilicon,
                architecture: "arm",
                operatingSystem: "mac",
                target: "macArm64"
            }, {
                route: r(640088).Ju.downloadWindows,
                architecture: "x86",
                operatingSystem: "windows",
                target: "windows"
            }, {
                route: r(640088).Ju.downloadWindowsArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "windowsArm64"
            }, {
                route: r(640088).Ju.downloadWindowsMsix,
                architecture: "x86",
                operatingSystem: "windows",
                target: "msix"
            }, {
                route: r(640088).Ju.downloadWindowsMsixArm,
                architecture: "arm",
                operatingSystem: "windows",
                target: "msixArm64"
            }];

            function n() {
                let e = (0, o.useRef)(null),
                    t = (0, r(533992).Y0)();
                return (0, o.useEffect)(() => {
                    a(t).then(t => {
                        e.current = t ? ? null
                    }).catch(e => {
                        throw Error(e)
                    })
                }, [t]), e
            }
            async function a(e) {
                var t;
                if (!("userAgentData" in navigator))
                    if (e.isMac) return r(640088).Ju.downloadMacUniversal;
                    else return r(640088).Ju.downloadWindows;
                let o = navigator.userAgentData,
                    n = await (null == o || null == (t = o.getHighEntropyValues) ? void 0 : t.call(o, ["architecture"])),
                    a = function(e, t) {
                        let r = function(e = "") {
                            let t = e.toLowerCase();
                            return t.startsWith("arm") ? "arm" : t.startsWith("x86") || "intel" === t ? "x86" : null
                        }(e);
                        if (!r || "mac" !== t && "windows" !== t) return null;
                        let o = i.find(e => e.architecture === r && e.operatingSystem === t);
                        return (null == o ? void 0 : o.route) || null
                    }(null == n ? void 0 : n.architecture, e.os);
                return a || null
            }
        },
        547517: (e, t, r) => {
            r.d(t, {
                O: () => n
            });
            var o = () => r(546605);
            class i extends o().Store {
                getInitialState() {
                    return {
                        currentState: "default",
                        lastStepLoadingCompletionUnixEpochMs: -1 / 0,
                        aiWindowLastSeenUnixEpochMs: -1 / 0
                    }
                }
                setAssistantLastViewedTime() {
                    this.setState({ ...this.state,
                        aiWindowLastSeenUnixEpochMs: Date.now()
                    })
                }
            }
            let n = new i;
            (0, r(202146).exposeDebugValue)("AssistantOriginElementStore", n)
        },
        558208: (e, t, r) => {
            r.d(t, {
                AD: () => s,
                Ci: () => c,
                Ll: () => i,
                XN: () => a,
                rz: () => n
            });
            var o = r(296540);
            let i = "TemporaryAiThreadCache";
            class n {
                tempThreadPointer = void 0;
                getOrCreateThreadId(e) {
                    let {
                        environment: t,
                        spaceId: o,
                        maybeThreadStore: i
                    } = e;
                    if (i) return i.id;
                    if (this.tempThreadPointer) return this.tempThreadPointer.id;
                    let n = (0, r(295447).Z1)({
                        environment: t,
                        table: r(832375).Toz,
                        spaceId: o
                    });
                    return this.tempThreadPointer = {
                        id: n,
                        table: r(832375).Toz,
                        spaceId: o
                    }, n
                }
                reset() {
                    this.tempThreadPointer = void 0
                }
            }
            let a = (0, o.createContext)(new n);

            function s() {
                return (0, o.useContext)(a)
            }

            function c(e) {
                var t;
                return (null == e || null == (t = e.inMemoryRecordCache) ? void 0 : t.name) === i
            }
            a.displayName = "TemporaryAiThreadContext"
        },
        588339: (e, t, r) => {
            async function o() {
                if (!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.getMicrophoneAuthorizationStatus)) return;
                let e = await r(775657).electronApi.getMicrophoneAuthorizationStatus();
                if (!e) return r(347971).JC;
                switch (e) {
                    case "Authorized":
                        return r(347971).a3;
                    case "Denied":
                    case "Restricted":
                        return r(347971).JS;
                    case "NotDetermined":
                        return r(347971).wg;
                    default:
                        return r(347971).JC
                }
            }
            async function i() {
                try {
                    if (!(null !== r(775657).electronApi && void 0 !== r(775657).electronApi && r(775657).electronApi.requestMicrophoneAccess)) return;
                    return await r(775657).electronApi.requestMicrophoneAccess() ? r(347971).a3 : r(347971).JS
                } catch (e) {
                    return r(347971).JS
                }
            }
            async function n() {
                let e = await i();
                return void 0 !== e ? e : await s()
            }
            async function a() {
                let e = await o();
                return void 0 !== e ? e : await s()
            }
            async function s() {
                try {
                    return await c(), r(347971).a3
                } catch (e) {
                    if (e instanceof Error) switch (e.name) {
                        case r(347971).nY:
                            return r(347971).JS;
                        case r(347971).V9:
                        case r(347971).mL:
                            return r(347971).rP
                    }
                    return r(347971).JC
                }
            }
            async function c() {
                let e = (0, r(601821).E)();
                for (let t of (await e.getUserMedia({
                        video: !1,
                        audio: !0
                    })).getTracks()) t.stop()
            }
            r.d(t, {
                _J: () => a,
                Ck: () => c,
                IY: () => n
            }), r(16280)
        },
        593635: (e, t, r) => {
            r.d(t, {
                k: () => n
            });
            var o = r(296540),
                i = r(474848);

            function n({
                blockId: e,
                isDemo: t = !1
            }) {
                let {
                    navigate: a
                } = (0, o.useContext)(r(44894).E), s = (0, r(533992).v3)(), c = (0, o.useCallback)(() => {
                    (0, r(104310).u)({
                        event: {
                            eventName: "transcription_permission_error_help_clicked",
                            eventProperties: {
                                is_demo: t,
                                block_id: e
                            }
                        }
                    }), a({
                        environment: s,
                        url: (0, r(869708).zv)()
                    })
                }, [s, t, e, a]);
                return (0, i.jsx)(r(531119).Ag, {
                    onClick: c,
                    children: (0, i.jsx)(r(109939).sA, {
                        defaultMessage: "Get help",
                        id: "dictation.permission.snackbar.getHelpButton.title"
                    })
                })
            }
        },
        651997: (e, t, r) => {
            r.r(t), r.d(t, {
                sendEventNotification: () => l,
                sendNotificationForDictationInterrupted: () => a,
                sendNotificationForRunningAudioProcess: () => n
            }), r(898992), r(672577);
            let o = (0, r(109939).YK)({
                    startAiMeetingNote: {
                        id: "customNotificationTitleMessages.startAiMeetingNote",
                        defaultMessage: "Start AI Meeting Note"
                    }
                }),
                i = (0, r(109939).YK)({
                    startAiMeetingNote: {
                        id: "customNotificationBodyMessages.startAiMeetingNote",
                        defaultMessage: "Transcribing opens Notion"
                    }
                });
            async function n(e, t) {
                var n, a, l, d, u;
                let p, m, g;
                if (r(986939).A.isMobile || !r(218744).default.checkGate({
                        gateName: "meeting_notes_audio_process_notification"
                    }) || !((null == (n = r(728372).AppStoreSidebarSpaceViewStore.getState()) ? void 0 : n.isAiMeetingNotesAudioProcessDetectionMonitoringEnabled()) ? ? !0) || !((null == (a = r(728372).AppStoreSidebarSpaceViewStore.getState()) ? void 0 : a.isAiMeetingNotesAudioProcessDetectionNotificationEnabled()) ? ? !0) || (0, r(207108).isInAudioDetectionCooldown)() || r(585823).Ay.state.loading || r(585823).Ay.state.enabled) return;
                let f = r(728372).AppStoreSidebarSpaceIdStore.getState();
                if (f) try {
                    await (0, r(975162).wR)(1e3);
                    let {
                        timeout: o,
                        result: i
                    } = await (0, r(975162).nQ)(9e3, e.api.callCellCompatibleApi({
                        eventName: "checkActiveTranscriptionForUser",
                        environment: e,
                        data: {
                            spaceId: f
                        },
                        cellNavigation: {
                            spaceId: f
                        }
                    }));
                    if (o) r(773352).log({
                        level: "info",
                        from: "audioProcessDetectionActions",
                        type: "checkActiveTranscriptionForUserTimedOut",
                        data: {
                            miscDataToConvertToString: {
                                processName: t,
                                spaceId: f,
                                apiTimeoutMs: 9e3,
                                heartbeatPropagationDelayMs: 1e3
                            }
                        }
                    });
                    else if ("success" === i.type && i.data.hasActiveTranscription) return
                } catch (e) {
                    r(773352).log({
                        level: "error",
                        from: "audioProcessDetectionActions",
                        type: "checkActiveTranscriptionForUserFailed",
                        error: (0, r(416607).convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                processName: t,
                                spaceId: f
                            }
                        }
                    })
                }
                let v = null == (l = (0, r(440143).Y)().getHomeCalendarStateForSpaceView()) ? void 0 : l.botId,
                    h = (0, r(440143).Y)().getEvents(),
                    S = (0, r(440143).Y)().getCurrentAccounts(),
                    A = (0, r(964282).sM)(h, S),
                    y = A[0],
                    _ = A.find(e => e.uid !== (null == y ? void 0 : y.uid)),
                    T = y && _ && !y.isAllDay && !_.isAllDay && y.start.dateTime === _.start.dateTime && y.responseStatus === _.responseStatus ? void 0 : y,
                    w = null == T ? void 0 : T.start,
                    b = null == T ? void 0 : T.end;
                w && b && "dateTime" in w && "dateTime" in b ? (p = T.summary || r(962299).A.formatMessage(s.defaultEventTitle), m = (0, r(523144).Vj)({
                    start: w.dateTime,
                    end: b.dateTime,
                    locale: r(849917).locale,
                    timeZone: (0, r(714350).P)()
                })) : (p = r(962299).A.formatMessage(o.startAiMeetingNote), m = r(962299).A.formatMessage(i.startAiMeetingNote)), (0, r(104310).u)({
                    event: {
                        eventName: "audio_process_notification_sent",
                        eventProperties: {
                            type: "custom",
                            permission: "granted",
                            calendar_bot_id: v,
                            has_calendar_event: !!T,
                            process: t
                        }
                    }
                }), v && (0, r(414824).R)({
                    environment: e,
                    data: {
                        type: "track",
                        payload: {
                            event: "notionNotificationShown",
                            method: "audioDetectionNotification"
                        }
                    },
                    botId: v
                });
                let k = (0, r(948561).w)(),
                    C = (null == (g = r(992308).W.getState()) ? void 0 : g.type) !== "available" || g.usage > 0,
                    I = C ? 0 : (null == (d = r(218744).default.getConfig({
                        configName: "audio_detection_notification_opt_out",
                        disableExposureLogging: !1
                    })) ? void 0 : d.dismiss_threshold) ? ? 0;
                (0, r(517224).w)({
                    id: (null == T ? void 0 : T.uid) ? ? "audioProcess",
                    title: p,
                    body: m,
                    event: T ? (0, r(103217).ft)(T) : void 0,
                    intent: "startTranscription",
                    autoStart: !0,
                    method: "audioDetectionNotification",
                    notificationSound: c(),
                    hasTranscribedMinutes: C,
                    optOutDismissThreshold: I,
                    currentDismissCount: k,
                    isRedesign: r(218744).default.checkGate({
                        gateName: "redesigned_meeting_notes_notifications"
                    }),
                    isAudioDetectionMonitoringEnabled: (null == (u = r(728372).AppStoreSidebarSpaceViewStore.getState()) ? void 0 : u.isAiMeetingNotesAudioProcessDetectionMonitoringEnabled()) ? ? !0,
                    locale: r(849917).locale,
                    useStandaloneUmnRenderer: r(218744).default.checkGate({
                        gateName: "meeting_notes_standalone_umn"
                    })
                })
            }

            function a(e) {
                let {
                    environment: t,
                    blockStore: o,
                    title: i,
                    message: n,
                    canRestart: a,
                    tabId: s
                } = e;
                if (r(986939).A.isMobile) return;
                let c = (0, r(774073).yz)(),
                    l = new Notification(i, {
                        body: n,
                        silent: !1,
                        requireInteraction: !0
                    }),
                    d = () => {
                        (0, r(887584).N)({
                            environment: t,
                            blockStore: o,
                            tabId: s
                        })
                    },
                    u = a ? () => {
                        d(), (0, r(338227).startTranscription)({
                            environment: t,
                            blockStore: o,
                            from: "resume_from_click_error_notification",
                            audioConsentEnabled: c
                        })
                    } : d;
                l.addEventListener("click", u)
            }
            let s = (0, r(109939).YK)({
                defaultEventTitle: {
                    id: "calendarMeetingNoteNotification.defaultEventTitle",
                    defaultMessage: "Meeting"
                }
            });

            function c() {
                var e;
                return (null == (e = r(728372).AppStoreSidebarSpaceViewStore.getState()) || null == (e = e.getSettingsStore()) || null == (e = e.getKeyStore("ai_meeting_notes_notification_sound")) ? void 0 : e.getValue()) ? ? "blip"
            }

            function l(e) {
                var t;
                let {
                    event: n,
                    intent: a,
                    autoStart: l,
                    method: d
                } = e, u = function(e) {
                    let {
                        event: t,
                        intent: i
                    } = e;
                    return "startTranscription" === i ? r(962299).A.formatMessage(o.startAiMeetingNote) : t.summary ? t.summary : r(962299).A.formatMessage(s.defaultEventTitle)
                }({
                    event: n,
                    intent: a
                }), p = function(e) {
                    let {
                        event: t,
                        intent: o
                    } = e;
                    return "startTranscription" === o ? r(962299).A.formatMessage(i.startAiMeetingNote) : (0, r(523144).Vj)({
                        start: t.start.dateTime,
                        end: t.end.dateTime,
                        locale: r(849917).locale,
                        timeZone: (0, r(714350).P)()
                    })
                }({
                    event: n,
                    intent: a
                });
                (0, r(517224).w)({
                    id: n.uid,
                    title: u,
                    body: p,
                    event: (0, r(103217).ft)(n),
                    intent: a,
                    autoStart: l ? ? !1,
                    method: d,
                    notificationSound: c(),
                    isRedesign: r(218744).default.checkGate({
                        gateName: "redesigned_meeting_notes_notifications"
                    }),
                    isAudioDetectionMonitoringEnabled: (null == (t = r(728372).AppStoreSidebarSpaceViewStore.getState()) ? void 0 : t.isAiMeetingNotesAudioProcessDetectionMonitoringEnabled()) ? ? !0,
                    locale: r(849917).locale,
                    useStandaloneUmnRenderer: r(218744).default.checkGate({
                        gateName: "meeting_notes_standalone_umn"
                    })
                })
            }
        },
        689589: (e, t, r) => {
            async function o(e) {
                var t;
                return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.getMediaAccessStatus) ? void 0 : t.call(r(775657).electronApi, e)
            }

            function i(e) {
                var t;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.openSystemSettings) || t.call(r(775657).electronApi, e)
            }
            async function n() {
                if (!window.isSecureContext) return r(347971).wv;
                try {
                    let e = (0, r(601821).E)();
                    for (let t of (await e.getDisplayMedia({
                            video: !1,
                            audio: !0,
                            systemAudio: "include"
                        })).getTracks()) t.stop();
                    return r(347971).a3
                } catch (e) {
                    return r(773352).log({
                        level: "error",
                        from: "checkScreenRecordingPermissionsByTesting",
                        error: (0, r(416607).convertErrorToLog)(e),
                        type: "checkScreenRecordingPermissionsByTestingUnableToCaptureSystemAudio"
                    }), r(347971).JC
                }
            }
            async function a() {
                let e = await (0, r(42754).ww)();
                return void 0 !== e ? e : await n()
            }
            async function s() {
                let e = await (0, r(42754).xr)();
                return void 0 !== e ? e : await n()
            }
            r.d(t, {
                HT: () => m,
                xw: () => u,
                u: () => h,
                MZ: () => f
            }), r(16280);
            let c = (0, r(109939).YK)({
                    latestVersionStepTitle: {
                        id: "transcriptionSetupSteps.latestVersionStepTitle",
                        defaultMessage: "Update the Notion app"
                    },
                    latestVersionStepDescription: {
                        id: "transcriptionSetupSteps.latestVersionStepDescription",
                        defaultMessage: "Update to the latest version of the Notion app to use AI Meeting Notes."
                    },
                    latestVersionStepActionText: {
                        id: "transcriptionSetupSteps.latestVersionStepActionText",
                        defaultMessage: "Update my Notion app"
                    },
                    microphoneStepTitle: {
                        id: "transcriptionSetupSteps.microphoneStepTitle",
                        defaultMessage: "Enable microphone access"
                    },
                    microphoneStepDescription: {
                        id: "transcriptionSetupSteps.microphoneStepDescription",
                        defaultMessage: "This allows Notion AI to transcribe what you say."
                    },
                    microphoneStepActionText: {
                        id: "transcriptionSetupSteps.microphoneStepActionText",
                        defaultMessage: "Enable microphone access"
                    },
                    systemAudioStepTitle: {
                        id: "transcriptionSetupSteps.systemAudioStepTitle",
                        defaultMessage: "Enable screen & system audio access"
                    },
                    systemAudioStepDescription: {
                        id: "transcriptionSetupSteps.systemAudioStepDescription",
                        defaultMessage: "This allows Notion AI to transcribe what everyone else is saying (even on headphones)."
                    },
                    systemAudioStepActionText: {
                        id: "transcriptionSetupSteps.systemAudioStepActionText",
                        defaultMessage: "Enable access"
                    },
                    restartAppStepTitle: {
                        id: "transcriptionSetupSteps.restartAppStepTitle",
                        defaultMessage: "Restart Notion"
                    },
                    restartAppStepDescription: {
                        id: "transcriptionSetupSteps.restartAppStepDescription",
                        defaultMessage: "Final step! Restart your Notion app to apply the permissions."
                    },
                    restartAppStepActionText: {
                        id: "transcriptionSetupSteps.restartAppStepActionText",
                        defaultMessage: "Restart Notion app"
                    }
                }),
                l = r(218744).default.checkGate({
                    gateName: "ai_meeting_notes_native_permissions"
                }),
                d = [{
                    id: "desktop-app-version",
                    title: c.latestVersionStepTitle,
                    description: c.latestVersionStepDescription,
                    hasCompleted: e => Promise.resolve(h(e.environment)),
                    actionText: c.latestVersionStepActionText,
                    action: async e => {
                        let t = await (0, r(542061).a)(e.environment.device);
                        t ? await (0, r(754573).P)(r(986939).A.domainBaseUrl + t) : await (0, r(754573).P)("https://www.notion.so/desktop")
                    }
                }, {
                    id: "microphone",
                    title: c.microphoneStepTitle,
                    description: c.microphoneStepDescription,
                    hasCompleted: async e => {
                        if (e.environment.device.isElectronWindows) return !0;
                        if (e.environment.device.isElectron) {
                            if (l) {
                                if (await (0, r(588339)._J)() === r(347971).a3) return !0
                            } else if ("granted" === await o("microphone")) return !0;
                            if (e.isConfirmation)
                                if (l) return await (0, r(588339).IY)() === r(347971).a3;
                                else try {
                                    return await (0, r(588339).Ck)(), !0
                                } catch {}
                        }
                        return !1
                    },
                    actionText: c.microphoneStepActionText,
                    action: async e => {
                        if (l) await (0, r(588339).IY)() === r(347971).JS && i("microphone");
                        else try {
                            await (0, r(588339).Ck)()
                        } catch (e) {
                            e instanceof Error && e.name === r(347971).nY && i("microphone")
                        }
                    }
                }, {
                    id: "system-audio",
                    title: c.systemAudioStepTitle,
                    description: c.systemAudioStepDescription,
                    hasCompleted: async e => {
                        if (e.environment.device.isElectronWindows) return !0;
                        if (e.environment.device.isElectron) {
                            if (l) {
                                if (await a() === r(347971).a3) return !0
                            } else if (r(154642).Ay.getHasAttemptedScreenRecordingPermissions() === r(347971).a3) return !0;
                            if (e.isConfirmation)
                                if (l) return await s() === r(347971).a3;
                                else return await g() === r(347971).a3
                        }
                        return !1
                    },
                    actionText: c.systemAudioStepActionText,
                    action: async e => {
                        if (l) {
                            let e = await s();
                            r(154642).Ay.setHasAttemptedScreenRecordingPermissions(e), e === r(347971).JS && i("screen-recording")
                        } else {
                            let e = await g();
                            r(154642).Ay.setHasAttemptedScreenRecordingPermissions(e ? r(347971).a3 : r(347971).JS), e && e === r(347971).a3 || i("screen-recording")
                        }
                    }
                }, {
                    id: "restart-app",
                    title: c.restartAppStepTitle,
                    description: c.restartAppStepDescription,
                    hasCompleted: async e => !!e.environment.device.isElectron && !!e.isConfirmation && "allowed" === await g() || Promise.resolve(!1),
                    actionText: c.restartAppStepActionText,
                    action: async () => {
                        var e;
                        return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.relaunch) || e.call(r(775657).electronApi), Promise.resolve()
                    }
                }];

            function u() {
                return d
            }
            async function p(e, t) {
                var o;
                let i = (null == (o = r(992308).W.state) ? void 0 : o.type) === "available" ? r(992308).W.state.usage : 0;
                for (let r of t)
                    if (!await r.hasCompleted({
                            environment: e,
                            isConfirmation: i > 0
                        })) return r
            }
            async function m(e) {
                if (r(986939).A.isMobile || e.device.isBrowser) return "startDictation";
                if (e.device.isElectron && e.device.isMac && void 0 !== e.device.osVersion[0] && e.device.osVersion[0] > 10 && e.device.osVersion[0] <= 12) return "requiresMacOS13";
                let t = await p(e, d);
                return (null == t ? void 0 : t.id) === "desktop-app-version" || (null == t ? void 0 : t.id) === "microphone" || await (0, r(42754).e2)(e) && await (0, r(42754).ww)() !== r(347971).a3 ? "showSetupModal" : "startDictation"
            }
            async function g() {
                try {
                    let e = await (0, r(975162).nQ)(5e3, (0, r(154642).Kj)());
                    if (e.timeout) return r(347971).JS;
                    return e.result
                } catch {
                    return r(347971).JS
                }
            }
            async function f(e) {
                let {
                    environment: t,
                    registered: o,
                    source: i,
                    url: n
                } = e;
                if (o) {
                    (0, r(104310).u)({
                        event: {
                            eventName: "open_transcription_block_in_desktop_app_clicked",
                            eventProperties: {
                                source: i
                            }
                        }
                    }), await (0, r(884015).e)({
                        environment: t,
                        url: n
                    });
                    return
                }
                await v(t, i)
            }
            async function v(e, t) {
                let o = await (0, r(542061).a)(e.device);
                o && ((0, r(104310).u)({
                    event: {
                        eventName: "download_app_for_transcription_clicked",
                        eventProperties: {
                            source: t
                        }
                    }
                }), (0, r(79266).navigate)({
                    environment: e,
                    url: o,
                    openInNew: "tab"
                }))
            }

            function h(e) {
                return !!r(584257).A.state.transcriptionSupportLevel
            }
        },
        877163: (e, t, r) => {
            r.d(t, {
                m: () => i
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                i = (0, r(104509).wt)("lightning", o, "default")
        },
        887584: (e, t, r) => {
            function o(e) {
                var t;
                null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (t = r(775657).electronApi.navigateToBlockInTab) || t.call(r(775657).electronApi, e)
            }

            function i(e, t) {
                var o;
                let i, n, a, s = r(240414).T.findScrollToSelectablesFromIds([t.id]);
                return 0 !== s.length && (i = (o = t).getRecordStoreUIRoot(), a = (null == (n = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : n.id) === o.id, !!(0, r(447036).cq)(i) || !!a) && ((0, r(840529).p)({
                    environment: e,
                    handle: s[0],
                    vertical: {
                        reveal: "top"
                    },
                    horizontal: void 0,
                    animate: !0
                }), !0)
            }

            function n(e) {
                let {
                    environment: t,
                    blockStore: n
                } = e;
                if (i(t, n)) return;
                let a = (0, r(385149).H)();
                if ((null == a ? void 0 : a.id) === n.id) return void(0, r(545586).navigateToBlock)({
                    environment: t,
                    store: n,
                    pageVisitSource: r(254656).y8.TranscriptionBlockPopup
                });
                let s = r(898735).A.state.tabs.find(e => {
                    var t;
                    return null == (t = e.activeBlocks) ? void 0 : t.some(e => e.pointer.id === n.id)
                });
                s && o({
                    tabId: s.id,
                    pointer: n.pointer,
                    source: r(254656).y8.TranscriptionBlockPopup
                })
            }

            function a(e) {
                let {
                    environment: t,
                    blockStore: n,
                    tabId: a
                } = e;
                if (!i(t, n)) {
                    if (!a || a === r(898735).A.state.currentTab.id) return void(0, r(545586).navigateToBlock)({
                        environment: t,
                        store: n,
                        pageVisitSource: r(254656).y8.TranscriptionBlockPopup
                    });
                    o({
                        tabId: a,
                        pointer: n.pointer,
                        source: r(254656).y8.TranscriptionBlockPopup
                    })
                }
            }
            r.d(t, {
                K: () => n,
                N: () => a
            }), r(898992), r(672577), r(737550)
        },
        895105: (e, t, r) => {
            r.r(t), r.d(t, {
                filterIcon: () => i,
                iconDefinition: () => o
            }), r(296540);
            let o = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, r(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                i = (0, r(104509).wt)("filter", o, "default")
        },
        920976: (e, t, r) => {
            r.d(t, {
                F: () => n
            }), r(296540);
            var o = r(474848);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, o.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                n = (0, r(104509).wt)("aiFacePlus", i, "default")
        },
        939596: (e, t, r) => {
            r.d(t, {
                g: () => a,
                j: () => s
            });
            let o = 7 * r(627179).nD;

            function i(e) {
                return Math.floor(e / 1e3)
            }

            function n(e) {
                let {
                    spaceStore: t,
                    userId: o
                } = e, i = function() {
                    if (r(218744).default.isStatsigReady()) return r(218744).default.getEligibleGroup({
                        experimentId: "aimn_offer",
                        defaultGroup: r(218745).STATSIG_DEFAULT_GROUP,
                        disableExposureLogging: !0
                    })
                }();
                return {
                    space_id: t.id,
                    space_name: t.getName(),
                    aimn_workspace_role: function(e) {
                        let {
                            spaceStore: t,
                            userId: o
                        } = e;
                        return r(229903).V.createChildStore(t, (0, r(729052).i1)({
                            userId: o,
                            spaceId: t.id
                        })).isWorkspaceOwner() ? "owner" : "member"
                    }({
                        spaceStore: t,
                        userId: o
                    }),
                    aimn_offer_group: i
                }
            }

            function a(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    userId: a
                } = e;
                o && a && (0, r(614128).W)({
                    environment: t,
                    eventName: "hit_ai_meeting_notes_limit",
                    key: `hit_ai_meeting_notes_limit:${o.id}:${a}`,
                    throttleSeconds: 60,
                    eventProperties: { ...n({
                            spaceStore: o,
                            userId: a
                        }),
                        limit_hit_at_s: i(Date.now())
                    }
                })
            }

            function s(e) {
                var t;
                let {
                    environment: a,
                    spaceStore: s
                } = e, c = a.currentUser.id, l = null == (t = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) || null == (t = t.callout_seen_timestamps) ? void 0 : t.aimn_offer_announcement;
                if (!s || !c || void 0 === l) return;
                let d = n({
                        spaceStore: s,
                        userId: c
                    }),
                    u = "exploding" === d.aimn_offer_group ? i(l + o) : void 0;
                (0, r(614128).W)({
                    environment: a,
                    eventName: "ai_meeting_notes_offer_eligible",
                    key: `ai_meeting_notes_offer_eligible:${s.id}:${c}:${l}`,
                    throttleSeconds: 31536e3,
                    eventProperties: { ...d,
                        eligible_at_s: i(l),
                        offer_expires_at_s: u
                    }
                })
            }
        },
        939679: (e, t, r) => {
            r.d(t, {
                p: () => o
            }), r(16280), r(944114);

            function o(e) {
                let t, {
                    environment: o,
                    spaceStore: i,
                    spaceViewStore: n,
                    oracleThreadType: a,
                    oracleThreadConfig: s,
                    instructions: c,
                    useOnboardingModule: l,
                    suppressNameInGreeting: d = !1,
                    model: u,
                    searchScope: p,
                    debugOverrides: m
                } = e;
                if (u) {
                    if (!(0, r(426048).R5)(u)) throw Error(`Model "${u}" is not a valid agent model. Please select a model that supports agent workflows.`);
                    t = u
                }
                let g = r(728372).AppStoreCurrentUserStore.state;
                if (!g) throw Error("User store is not available. Please wait for the app to fully load.");
                let f = (null == m ? void 0 : m.dynamicInstructions) !== void 0,
                    v = (0, r(922900).getWorkflowAgentConfig)({
                        environment: o,
                        spaceId: i.id,
                        isCustomAgent: !1,
                        workflowId: void 0,
                        model: t,
                        searchScopes: e.disableSearch ? [] : p ? [p] : void 0,
                        useReadOnlyMode: !1,
                        useWebSearch: !1,
                        onboardingAgentVersion: "onboarding" === a && (l || f) ? e.onboardingAgentVersion ? ? "work" : void 0
                    });
                v.oracleThreadType = a, v.enableScriptAgent = !0;
                let h = [],
                    S = r(962299).A.getIntl(),
                    A = {
                        id: (0, r(295447).Z1)({
                            environment: o,
                            table: r(832375).mSw,
                            spaceId: i.id
                        }),
                        type: "title",
                        value: S.formatMessage(s.titleMessage)
                    };
                if (h.push(A), !l && !f) {
                    let e = (0, r(674880).fd)({
                        environment: o,
                        spaceStore: i,
                        agentMessageKey: "post_onboarding_tips",
                        instructions: (0, r(247438).x9d)(c)
                    });
                    h.push(e)
                }
                let y = (0, r(674880).uP)({
                    environment: o,
                    spaceStore: i,
                    userStore: g,
                    displayMessage: void 0,
                    actualMessage: (0, r(247438).x9d)(l || f ? function(e) {
                        let {
                            triggerPurpose: t,
                            suppressNameInGreeting: o
                        } = e, i = `${t} The user's locale is "${r(849917).locale}". Respond in the user's language, not in English just because this prompt is in English.`;
                        return o ? `${i} The user has not set a display name yet, do not address them by name.` : i
                    }({
                        triggerPurpose: s.triggerPurpose,
                        suppressNameInGreeting: d
                    }) : "Send the proactive message described in the system instructions.")
                });
                h.push(y);
                let _ = (0, r(674880).Xd)({
                        environment: o,
                        inferenceContext: {
                            userStore: g,
                            spaceStore: i,
                            spaceViewStore: n,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: void 0
                        },
                        addSteps: h,
                        surface: s.surface,
                        config: v
                    }),
                    T = (0, r(225900).N)({
                        environment: o,
                        spaceStore: i,
                        transcript: _,
                        workflowId: void 0,
                        createdSource: s.createdSource,
                        parentPointer: void 0,
                        debugOverrides: m
                    });
                return (0, r(540328).KY)(T), r(218744).default.checkGate({
                    gateName: "onboarding_oracle_thread"
                }) && function(e) {
                    var t;
                    let {
                        environment: o,
                        oracleThreadType: i,
                        threadId: n
                    } = e, a = r(728372).AppStoreSidebarSpaceViewStore.state;
                    if (!a) return;
                    let s = (null == (t = a.getSettings()) ? void 0 : t.oracle_thread_configs) ? ? {},
                        c = a.getSpaceId();
                    r(377796).createAndCommit({
                        environment: o,
                        cellTarget: c ? {
                            spaceWithId: c
                        } : void 0,
                        userAction: "createOracleThread.registerThread",
                        canUndo: !0,
                        perform: e => {
                            (0, r(421439).y4)({
                                store: a,
                                operation: {
                                    pointer: a.pointer,
                                    path: ["settings"],
                                    command: "update",
                                    args: { ...a.getSettings(),
                                        oracle_thread_configs: { ...s,
                                            [i]: {
                                                thread_id: n
                                            }
                                        }
                                    }
                                },
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: o,
                    oracleThreadType: a,
                    threadId: T.id
                }), T
            }
        },
        984893: (e, t, r) => {
            r.d(t, {
                l: () => o
            });
            async function o() {
                var e;
                return null === r(775657).electronApi || void 0 === r(775657).electronApi || null == (e = r(775657).electronApi.getDeviceVolume) ? void 0 : e.call(r(775657).electronApi)
            }
        }
    }
]);