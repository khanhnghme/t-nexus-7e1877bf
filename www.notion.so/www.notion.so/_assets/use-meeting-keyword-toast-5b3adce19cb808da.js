"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [28156], {
        194852: (e, t, i) => {
            i.r(t), i.d(t, {
                doesKeywordMatchTitle: () => g,
                useMeetingKeywordToast: () => d,
                useMeetingKeywordToastEligibility: () => l
            }), i(898992), i(823215), i(672577);
            var a = i(296540);

            function o(e) {
                let {
                    environment: t,
                    ...a
                } = e;
                (0, i(104310).u)({
                    event: {
                        eventName: "ai_meeting_notes_entrypoint_cta",
                        eventProperties: a
                    }
                })
            }
            let n = (0, i(109939).YK)({
                    control: {
                        id: "aiMeetingNotes.toast.titleMeeting",
                        defaultMessage: "Is this for {keywordWithArticle}?"
                    },
                    v1: {
                        id: "meetingKeywordToast.painDriven.v1",
                        defaultMessage: "Can’t concentrate on your {keyword}?"
                    },
                    v2: {
                        id: "meetingKeywordToast.painDriven.v2",
                        defaultMessage: "Missing details in your {keyword}?"
                    },
                    v3: {
                        id: "meetingKeywordToast.painDriven.v3",
                        defaultMessage: "Losing track of your {keyword}?"
                    },
                    v4: {
                        id: "meetingKeywordToast.painDriven.v4",
                        defaultMessage: "Overwhelmed by your {keyword}?"
                    }
                }),
                s = (0, i(109939).YK)({
                    meeting: {
                        id: "meetingKeyword.meeting",
                        defaultMessage: "meeting"
                    },
                    oneOnOne: {
                        id: "meetingKeyword.oneOnOne",
                        defaultMessage: "1:1"
                    },
                    sync: {
                        id: "meetingKeyword.sync",
                        defaultMessage: "sync"
                    },
                    standup: {
                        id: "meetingKeyword.standup",
                        defaultMessage: "standup"
                    },
                    retro: {
                        id: "meetingKeyword.retro",
                        defaultMessage: "retro"
                    },
                    checkIn: {
                        id: "meetingKeyword.checkIn",
                        defaultMessage: "check-in"
                    },
                    huddle: {
                        id: "meetingKeyword.huddle",
                        defaultMessage: "huddle"
                    },
                    brainstorm: {
                        id: "meetingKeyword.brainstorm",
                        defaultMessage: "brainstorm"
                    },
                    workshop: {
                        id: "meetingKeyword.workshop",
                        defaultMessage: "workshop"
                    },
                    discussion: {
                        id: "meetingKeyword.discussion",
                        defaultMessage: "discussion"
                    },
                    call: {
                        id: "meetingKeyword.call",
                        defaultMessage: "call"
                    },
                    videoCall: {
                        id: "meetingKeyword.videoCall",
                        defaultMessage: "video call"
                    },
                    zoom: {
                        id: "meetingKeyword.zoom",
                        defaultMessage: "zoom"
                    },
                    kickoff: {
                        id: "meetingKeyword.kickoff",
                        defaultMessage: "kickoff"
                    },
                    debrief: {
                        id: "meetingKeyword.debrief",
                        defaultMessage: "debrief"
                    },
                    postmortem: {
                        id: "meetingKeyword.postmortem",
                        defaultMessage: "postmortem"
                    },
                    townHall: {
                        id: "meetingKeyword.townHall",
                        defaultMessage: "town hall"
                    },
                    touchBase: {
                        id: "meetingKeyword.touchBase",
                        defaultMessage: "touch base"
                    },
                    catchUp: {
                        id: "meetingKeyword.catchUp",
                        defaultMessage: "catch up"
                    },
                    interview: {
                        id: "meetingKeyword.interview",
                        defaultMessage: "interview"
                    }
                }),
                r = (0, i(109939).YK)({
                    meeting: {
                        id: "meetingKeywordDisplay.meeting",
                        defaultMessage: "a meeting"
                    },
                    oneOnOne: {
                        id: "meetingKeywordDisplay.oneOnOne",
                        defaultMessage: "a 1:1"
                    },
                    sync: {
                        id: "meetingKeywordDisplay.sync",
                        defaultMessage: "a sync"
                    },
                    standup: {
                        id: "meetingKeywordDisplay.standup",
                        defaultMessage: "a standup"
                    },
                    retro: {
                        id: "meetingKeywordDisplay.retro",
                        defaultMessage: "a retro"
                    },
                    checkIn: {
                        id: "meetingKeywordDisplay.checkIn",
                        defaultMessage: "a check-in"
                    },
                    huddle: {
                        id: "meetingKeywordDisplay.huddle",
                        defaultMessage: "a huddle"
                    },
                    brainstorm: {
                        id: "meetingKeywordDisplay.brainstorm",
                        defaultMessage: "a brainstorm"
                    },
                    workshop: {
                        id: "meetingKeywordDisplay.workshop",
                        defaultMessage: "a workshop"
                    },
                    discussion: {
                        id: "meetingKeywordDisplay.discussion",
                        defaultMessage: "a discussion"
                    },
                    call: {
                        id: "meetingKeywordDisplay.call",
                        defaultMessage: "a call"
                    },
                    videoCall: {
                        id: "meetingKeywordDisplay.videoCall",
                        defaultMessage: "a video call"
                    },
                    zoom: {
                        id: "meetingKeywordDisplay.zoom",
                        defaultMessage: "a zoom"
                    },
                    kickoff: {
                        id: "meetingKeywordDisplay.kickoff",
                        defaultMessage: "a kickoff"
                    },
                    debrief: {
                        id: "meetingKeywordDisplay.debrief",
                        defaultMessage: "a debrief"
                    },
                    postmortem: {
                        id: "meetingKeywordDisplay.postmortem",
                        defaultMessage: "a postmortem"
                    },
                    townHall: {
                        id: "meetingKeywordDisplay.townHall",
                        defaultMessage: "a town hall"
                    },
                    touchBase: {
                        id: "meetingKeywordDisplay.touchBase",
                        defaultMessage: "a touch base"
                    },
                    catchUp: {
                        id: "meetingKeywordDisplay.catchUp",
                        defaultMessage: "a catch up"
                    },
                    interview: {
                        id: "meetingKeywordDisplay.interview",
                        defaultMessage: "an interview"
                    }
                });

            function d() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(533992).v3)(),
                    {
                        isEligible: s,
                        matchedKeyword: r,
                        matchedKeywordWithArticle: d,
                        titleValue: g
                    } = l(),
                    u = (0, a.useRef)(!1),
                    c = (0, a.useRef)(""),
                    [m, f] = (0, a.useState)(!1),
                    p = !s || !m,
                    y = function(e) {
                        let {
                            layerName: t,
                            param: a,
                            defaultValue: o,
                            disableExposureLogging: n = !1
                        } = e;
                        return (0, i(682985).K8)(() => i(218744).default.getLayerParam({
                            layerName: t,
                            param: a,
                            defaultValue: o,
                            disableExposureLogging: n
                        }), [t, a, o, n])
                    }({
                        layerName: "keyword_matching_aimn_toast",
                        param: "title_copy",
                        defaultValue: "control",
                        disableExposureLogging: p
                    }),
                    _ = (0, i(682985).K8)(() => "on" !== y ? "control" : i(218744).default.getEligibleGroup({
                        experimentId: "adoption_aimn_keyword_toast_copy_autotune",
                        disableExposureLogging: p
                    }) ? ? "control", [y, p]),
                    w = (0, i(682985).O$)(i(330870).S),
                    h = (0, i(84235).Y)(() => {
                        f(!0)
                    }, 1e3);
                (0, a.useEffect)(() => {
                    let e = g || "";
                    return c.current !== e && ("" !== c.current && (h.cancel(), f(!1), u.current = !1, e.endsWith(" ") ? f(!0) : h()), c.current = e), () => {
                        h.cancel()
                    }
                }, [g, h]), (0, a.useEffect)(() => {
                    s && m && !u.current && (o({
                        environment: t,
                        action: "view",
                        from: "ai_meeting_notes_page_title_toast",
                        meeting_keyword: r,
                        trigger_type: "user_typing",
                        toast_title_variant: _
                    }), u.current = !0)
                }, [s, m, t, r, _]), (0, a.useEffect)(() => {
                    u.current = !1, f(!1), c.current = ""
                }, [w]), (0, a.useEffect)(() => {
                    s && m && (i(819652).Iz({
                        id: "ai-meeting-notes-suggestion-toast",
                        title: e.formatMessage(n[_], {
                            keyword: r,
                            keywordWithArticle: d
                        }),
                        onUserDismiss: () => {
                            i(819652).UW({
                                id: "ai-meeting-notes-suggestion-toast"
                            }), o({
                                environment: t,
                                action: "dismiss",
                                from: "ai_meeting_notes_page_title_toast",
                                toast_title_variant: _
                            })
                        },
                        message: e.formatMessage({
                            id: "aiMeetingNotes.toast.message",
                            defaultMessage: "Let Notion AI handle the notes. You can always type /meet anywhere on the page to get started."
                        }),
                        presentationType: "persistent",
                        actions: {
                            primary: {
                                title: e.formatMessage({
                                    id: "aiMeetingNotes.toast.action.addNotes",
                                    defaultMessage: "Add AI Meeting Notes"
                                }),
                                onAction: async () => {
                                    try {
                                        (await i(68067).$.load()).appendTranscriptionBlockToPage({
                                            environment: t,
                                            from: "ai_meeting_notes_page_title_toast"
                                        }), i(374176).default.afterNextFlush(() => {
                                            let e = 0,
                                                a = () => {
                                                    if (!w || e >= 30) return;
                                                    e++;
                                                    let o = (0, i(869708).Ql)(w);
                                                    if (o.length > 0) {
                                                        let e = o[o.length - 1];
                                                        (0, i(250717).B)([e.id], !0, t)
                                                    } else setTimeout(a, 100)
                                                };
                                            a()
                                        }), o({
                                            environment: t,
                                            action: "click",
                                            from: "ai_meeting_notes_page_title_toast",
                                            toast_title_variant: _
                                        }), i(819652).UW({
                                            id: "ai-meeting-notes-suggestion-toast"
                                        })
                                    } catch (e) {
                                        i(773352).log({
                                            level: "error",
                                            from: "useMeetingKeywordToast",
                                            type: "failed_to_create_transcription_block",
                                            error: (0, i(416607).convertErrorToLog)(e)
                                        }), i(819652).UW({
                                            id: "ai-meeting-notes-suggestion-toast"
                                        })
                                    }
                                }
                            },
                            secondary: {
                                title: e.formatMessage({
                                    id: "aiMeetingNotes.toast.action.dismiss",
                                    defaultMessage: "Dismiss"
                                }),
                                onAction: () => {
                                    (0, i(937785).J)({
                                        environment: t,
                                        experimentId: "adoption_aimn_keyword_toast_title_pain_driven_copy"
                                    }), o({
                                        environment: t,
                                        action: "dismiss_permanently",
                                        from: "ai_meeting_notes_page_title_toast",
                                        toast_title_variant: _
                                    }), i(819652).UW({
                                        id: "ai-meeting-notes-suggestion-toast"
                                    })
                                }
                            }
                        }
                    }), (0, i(711635).j)({
                        environment: t,
                        experimentId: "adoption_aimn_keyword_toast_title_pain_driven_copy"
                    }))
                }, [s, m, e, t, r, d, w, _])
            }

            function l() {
                let e = (0, i(109939).tz)(),
                    t = (0, i(533992).Y0)(),
                    a = (0, i(533992).v3)(),
                    o = (0, i(682985).O$)(i(330870).S),
                    n = (0, i(682985).K8)(() => null == o ? void 0 : o.getTitleStore(), [o]),
                    d = (0, i(682985).K8)(() => null == o ? void 0 : o.getSpaceId(), [o]),
                    l = (0, i(345776).T)(),
                    u = (0, i(217844)._)({
                        name: "ai_meeting_notes",
                        spaceId: d ? ? "",
                        userId: l ? ? "",
                        amount: 1
                    }),
                    c = (0, i(94418).e2)(u),
                    m = (0, i(682985).K8)(() => !!o && !!l && o.getCreatedById() === l && o.getCreatedByTable() === i(832375).oo9, [o, l]),
                    f = (0, i(682985).K8)(() => {
                        if (n && o) return (0, i(536614).r4)(n.getValue(), o)
                    }, [n, o]),
                    p = (null == f ? void 0 : f.toLowerCase()) || "",
                    y = (0, i(682985).K8)(() => {
                        if (!o) return !1;
                        let e = o.getCreatedTime();
                        return 1 >= Math.floor((Date.now() - e) / i(627179).nD)
                    }, [o]),
                    _ = ["meeting", "oneOnOne", "sync", "retro", "checkIn", "huddle", "brainstorm", "workshop", "discussion", "videoCall", "call", "zoom", "standup", "kickoff", "debrief", "postmortem", "townHall", "touchBase", "catchUp", "interview"].map(t => ({
                        match: e.formatMessage(s[t]),
                        matchWithArticle: e.formatMessage(r[t])
                    })),
                    w = p ? p.split(/\s+/) : [],
                    h = w.length > 0 ? _.find(({
                        match: e
                    }) => g(e, w)) : void 0,
                    v = void 0 !== h,
                    M = null == h ? void 0 : h.match,
                    K = null == h ? void 0 : h.matchWithArticle,
                    k = (0, i(682985).K8)(() => {
                        var e;
                        let t = (0, i(904434).R$)(a);
                        if (!t || !t.isReady()) return !0;
                        let o = null == (e = t.getSettings()) ? void 0 : e.exposed_to_adoption_feature_experiment,
                            n = (null == o ? void 0 : o.adoption_aimn_keyword_toast_title_pain_driven_copy) ? ? [];
                        if (n.length >= 3) return !0;
                        if (n.length > 0) {
                            let e = parseInt(n[n.length - 1], 10);
                            if (isNaN(e)) return !1;
                            if (1 > Math.floor((Date.now() - e) / i(627179).nD)) return !0
                        }
                        return !1
                    }, [a]),
                    b = (0, i(682985).K8)(() => {
                        var e;
                        let t = (0, i(904434).R$)(a);
                        if (!t || !t.isReady()) return !1;
                        let o = null == (e = t.getSettings()) ? void 0 : e.dismissed_adoption_feature_experiment;
                        return !!(null == o ? void 0 : o.adoption_aimn_keyword_toast_title_pain_driven_copy)
                    }, [a]),
                    D = (0, i(682985).K8)(() => (0, i(869708).M5)(null == o ? void 0 : o.getSpaceStore()), [o]),
                    T = (0, i(682985).K8)(() => {
                        var e;
                        return (null == o || null == (e = o.getFormat()) ? void 0 : e.is_transcription_summary_template) === !0
                    }, [o]),
                    A = !f || !v || !c || !D || !y || T || k || b || i(986939).A.isMobile || t.isTablet,
                    x = (0, i(682985).K8)(() => !A && !!o && (0, i(869708).Ql)(o).length > 0, [A, o]),
                    I = (0, i(767575).R)({
                        includeVisible: !1
                    });
                return {
                    isEligible: !!(f && v && c && D && y && m && !T && !k && !b && !i(986939).A.isMobile && !t.isTablet && !x && !I),
                    matchedKeyword: M,
                    matchedKeywordWithArticle: K,
                    titleValue: f
                }
            }

            function g(e, t) {
                if (!e.includes(" ")) return t.includes(e);
                let i = e.split(/\s+/);
                for (let e = 0; e <= t.length - i.length; e++)
                    if (i.every((i, a) => t[e + a] === i)) return !0;
                return !1
            }
        },
        711635: (e, t, i) => {
            i.d(t, {
                j: () => a
            });

            function a({
                environment: e,
                experimentId: t
            }) {
                var o;
                let n = (0, i(904434).R$)(e);
                if (!n) return;
                let s = null == (o = n.getSettings()) ? void 0 : o.exposed_to_adoption_feature_experiment;
                (0, i(377796).createAndCommit)({
                    environment: e,
                    userAction: "userSettingsActions.setAdoptionFeatureExperimentExposure",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                exposed_to_adoption_feature_experiment: { ...s,
                                    [t]: [...(null == s ? void 0 : s[t]) ? ? [], Date.now().toString()]
                                }
                            }
                        })
                    }
                })
            }
        },
        767575: (e, t, i) => {
            i.d(t, {
                R: () => n
            }), i(944114), i(581454);
            var a = () => i(869708),
                o = () => i(769719);

            function n({
                includeVisible: e
            }) {
                return (0, i(682985).K8)(() => {
                    var t;
                    let n = Object.values(i(585823).Ay.state.passiveBlockMap).map(({
                            rootBlockStore: e
                        }) => e),
                        s = i(585823).ei.state,
                        r = [];
                    for (let e of (s && s.isTranscriptionBlock() && r.push(s), n)) e.isTranscriptionBlock() && r.push(e);
                    let d = null == (t = i(728372).AppStoreCurrentUserStore.state) ? void 0 : t.id;
                    if (d)
                        for (let t of r) {
                            let i = (0, a().by)(t);
                            if (t.pathIsDead() || "transcribing" !== i.state || i.transcriber_id !== d) continue;
                            let n = o().c.getVisibilityStatus(t.id);
                            if (e || !n) return t
                        }
                }, [e])
            }
        },
        937785: (e, t, i) => {
            i.d(t, {
                J: () => a
            });

            function a({
                environment: e,
                experimentId: t
            }) {
                var o;
                let n = (0, i(904434).R$)(e);
                if (!n) return;
                let s = null == (o = n.getSettings()) ? void 0 : o.dismissed_adoption_feature_experiment;
                (0, i(377796).createAndCommit)({
                    environment: e,
                    userAction: "userSettingsActions.setAdoptionFeatureExperimentDismissed",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, i(862759).m)({
                            userSettingsStore: n,
                            transaction: e,
                            data: {
                                dismissed_adoption_feature_experiment: { ...s,
                                    [t]: !0
                                }
                            }
                        })
                    }
                })
            }
        }
    }
]);