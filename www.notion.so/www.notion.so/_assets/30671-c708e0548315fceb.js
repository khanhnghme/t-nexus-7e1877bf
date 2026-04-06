"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [21753, 22197, 30671, 37342, 40600, 61842, 75215, 76135, 87539, 92754, 96579], {
        5556: (e, t, n) => {
            n.d(t, {
                u: () => i
            });

            function i(e) {
                let {
                    blocks: t,
                    transaction: i
                } = e;
                if (1 === t.length) {
                    let e = t[0];
                    e && n(966980).wm(e) && (0, n(210191).T)({
                        store: e,
                        transaction: i
                    })
                }
            }
        },
        6260: (e, t, n) => {
            n.d(t, {
                Z: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, i.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                r = (0, n(104509).wt)("browserMagnifyingGlass", a, "default")
        },
        24962: (e, t, n) => {
            n.d(t, {
                O: () => r
            }), n(898992), n(354520), n(581454), n(737550);
            var i = n(296540);

            function a(e) {
                if (0 === e.length) return !0;
                let t = e[0];
                return e.every(e => void 0 !== e && e === t)
            }

            function r(e) {
                let t = (0, n(533992).v3)(),
                    r = (0, n(515467).m)(),
                    c = (0, n(345776).T)(),
                    {
                        timeZone: u
                    } = (0, n(591742).mn)(),
                    p = (0, n(25825).lW)(u),
                    f = (0, n(132315).s5)(),
                    {
                        connectedAccounts: g,
                        disconnectedAccounts: m
                    } = (0, n(429946).B)(),
                    [_, v] = i.useState(0),
                    [h, y] = i.useState(!0),
                    b = (0, n(682985).K8)(() => {
                        var e;
                        let t = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getEmail();
                        return t ? (0, n(120462).RM)({
                            currentUserEmail: t,
                            calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                            accounts: (0, n(440143).Y)().getCurrentAccounts()
                        }).allEligibleCalendars.map(e => e.id) : []
                    }, []),
                    S = (0, i.useMemo)(() => (0, n(381453).sg)(() => {
                        v(e => e + 1), y(!1), setTimeout(() => y(!0), 1e4)
                    }, 1e3, {
                        leading: !0,
                        trailing: !1
                    }), []),
                    {
                        sidebarSpaceViewStore: k,
                        sidebarSpaceStore: x
                    } = (0, n(682985).K8)(() => ({
                        sidebarSpaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                        sidebarSpaceStore: (0, n(328765).S)()
                    }), []),
                    w = (0, n(682985).K8)(() => void 0 !== (0, n(440143).Y)().getHomeCalendarStateForSpaceView(), []),
                    I = (0, n(682985).K8)(() => {
                        var e;
                        let {
                            botSpaceId: t,
                            botUserId: i
                        } = r, s = null == k ? void 0 : k.getSpaceId(), o = null == k ? void 0 : k.getUserId(), l = null == x ? void 0 : x.id, d = null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.id;
                        return a([t, s, l]) && a([i, o, d, c])
                    }, [r, null == x ? void 0 : x.id, k, c]),
                    A = i.useRef(void 0),
                    [C] = (0, n(97668).Yb)(async () => {
                        let e = r.botId;
                        if (!I || !k) return "appNotSynced";
                        if (!e) return r.loading || (0, n(55067).F8)(), "noConnectedBot";
                        let i = await (0, n(55067).qq)({
                                environment: t,
                                sidebarSpaceViewStore: k,
                                botId: e,
                                forceRefetch: !1,
                                timeRange: (0, n(83748).M)(),
                                reason: {
                                    reason: "foreground_load"
                                }
                            }),
                            a = !A.current,
                            s = A.current && (A.current.spaceViewId !== k.id || A.current.botId !== e);
                        switch ("skipped" === i && (a || s) && d({
                            environment: t,
                            sidebarSpaceViewStore: k,
                            botId: e,
                            forceRefetch: !0,
                            timeRange: (0, n(83748).M)(),
                            updateMethod: "replace",
                            reason: {
                                reason: "background_load"
                            }
                        }), A.current = {
                            spaceViewId: k.id,
                            botId: e
                        }, i) {
                            case "success":
                            case "skipped":
                                return "loadCompleted";
                            case "failure":
                                return "loadError";
                            default:
                                (0, n(722371).HB)(i)
                        }
                    }, [I, r.botId, r.loading, k, t, _]),
                    {
                        days: M,
                        numDaysWithEvents: T
                    } = (0, n(682985).K8)(() => {
                        var t;
                        let i = r.botId;
                        if (!i || "resolved" !== C.status || !w || !k) return {
                            days: [],
                            numDaysWithEvents: 0
                        };
                        let {
                            timeMin: a,
                            timeMax: s
                        } = (0, n(83748).iI)(), o = (0, n(103217).g2)({
                            events: (0, n(440143).Y)().getEvents(),
                            calendars: (null == (t = (0, n(440143).Y)().getState()) ? void 0 : t.calendars) ? ? [],
                            startDate: n(906745).DateTime.fromMillis(a, {
                                zone: p
                            }),
                            endDateInclusive: n(906745).DateTime.fromMillis(s, {
                                zone: p
                            }),
                            getCalendarVisibility: t => !!("upcoming_meetings" === e && b.includes(t.id)) || (0, n(377382).Pj)({
                                spaceViewStore: k,
                                botId: i,
                                calendar: t
                            }),
                            eventFilters: {
                                all_day_events: (0, n(128669).En)("all_day_events", e),
                                events_without_participants: (0, n(128669).En)("events_without_participants", e),
                                events_without_location: (0, n(128669).En)("events_without_location", e)
                            },
                            timeZone: p
                        }), l = 0;
                        return {
                            days: o.filter(e => {
                                let t = e.allDayEvents.length > 0 || e.timedEvents.length > 0;
                                return t && l++, t || (0, n(74423).cK)(e.date, f)
                            }),
                            numDaysWithEvents: l
                        }
                    }, [r.botId, C.status, w, k, f, p, e, b]);
                return {
                    isRetryEventLoadingEnabled: h,
                    retryEventLoading: S,
                    displayState: function({
                        botIdState: e,
                        eventsLoadingState: t,
                        isEventsDataAvailable: n,
                        numDaysWithEvents: i,
                        connectedAccounts: a,
                        disconnectedAccounts: r
                    }) {
                        let d = a.filter(e => s(e) || o(e) || l(e)),
                            c = r.filter(e => s(e) || o(e) || l(e));
                        if (e.loading || "resolved" !== t.status && "rejected" !== t.status || "resolved" === t.status && "noConnectedBot" === t.value && !e.loading && void 0 !== e.botId || "resolved" === t.status && "loadCompleted" === t.value && !n || "resolved" === t.status && "appNotSynced" === t.value) return "loading";
                        if (!e.loading && !e.botId || 0 === d.length && 0 === c.length) return "signedOut";
                        if (0 === d.length && c.length > 0) return c.some(e => "missingScopes" === e.authorizationStatus) ? "missingScopes" : "disconnectedAccount";
                        if ("rejected" === t.status || "resolved" === t.status && "loadError" === t.value) return "loadError";
                        if (0 === i) return "noEvents";
                        else return "events"
                    }({
                        botIdState: r,
                        eventsLoadingState: C,
                        isEventsDataAvailable: w,
                        numDaysWithEvents: T,
                        connectedAccounts: g,
                        disconnectedAccounts: m
                    }),
                    eventsLoadingState: C,
                    days: M
                }
            }

            function s({
                provider: e
            }) {
                return "google" === e
            }

            function o({
                provider: e
            }) {
                return "icloud" === e
            }

            function l({
                provider: e
            }) {
                return "outlook" === e
            }
            n(823215);
            let d = (0, n(381453).sg)(n(55067).qq, 1e4, {
                leading: !0,
                trailing: !0
            })
        },
        35370: (e, t, n) => {
            n.d(t, {
                u: () => r
            }), n(296540);
            var i = n(474848);

            function a(e) {
                let t, {
                        context: a,
                        extensionMenuParent: r,
                        actionMenuListParent: s,
                        popupEvents: o,
                        displayName: l,
                        width: d,
                        initialFocus: c,
                        subActions: u
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    f = (0, n(649476).Tf)();
                t = p ? f ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: r.close,
                    left: (0, i.jsx)(n(497857).h, {}),
                    enableMobileRefresh: f,
                    paddingTop: 10,
                    title: (0, i.jsx)(n(109939).sA, { ...l
                    }),
                    ...o
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, i.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: r.close,
                    ...o
                } : {
                    menuType: n(649476).gu.Popup,
                    width: d ? ? 220,
                    ...o
                };
                let g = (0, n(682985).K8)(() => u(a), [a, u]);
                return (0, i.jsx)(n(747369).A, { ...t,
                    children: (0, i.jsx)(n(530500).A, {
                        initialFocus: c ? ? 0,
                        context: a,
                        sections: g,
                        onAccept: s.onAccept
                    })
                })
            }

            function r(e) {
                let {
                    key: t,
                    displayName: a,
                    displayNameInterpolatedValues: r,
                    analyticsName: o,
                    validators: l,
                    subActions: d,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: u,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: f,
                    disabled: g
                } = e, m = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: a,
                    displayNameInterpolatedValues: r,
                    analyticsName: o,
                    validators: l,
                    subActions: d,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: u,
                    fuzzySearchKeywordsArray: f,
                    closeParentMenu: !0,
                    disabled: g,
                    action: () => {},
                    render: (t, n, a) => (0, i.jsx)(s, {
                        actionDisplayName: m.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: a
                    })
                });
                return m
            }

            function s({
                actionDisplayName: e,
                args: t,
                props: r,
                context: o,
                actionMenuListParent: l
            }) {
                let {
                    displayName: d,
                    subTitle: c,
                    renderTooltip: u,
                    tooltipPlacement: p,
                    svg: f,
                    icon: g,
                    right: m,
                    rightStyle: _,
                    dontShrinkTitle: v,
                    width: h,
                    initialFocus: y,
                    subActions: b,
                    bottomSheetInitialState: S,
                    disableDefaultClick: k
                } = t, {
                    disabled: x,
                    disableTooltip: w
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, o)) || !1,
                        disableTooltip: !u || (null == (n = t.disableTooltip) ? void 0 : n.call(t, o))
                    }
                }, [t, o, u]), I = null == c ? void 0 : c(o);
                return (0, i.jsx)(n(51831).m, {
                    content: () => (0, i.jsx)("div", {
                        style: n(233319).FG,
                        children: null == u ? void 0 : u({
                            context: o,
                            title: e
                        })
                    }),
                    disableTooltip: w,
                    placement: p,
                    children: t => (0, i.jsx)(n(816231).A, { ...r,
                        disabled: x,
                        disabledFeedback: x,
                        disableDefaultClick: k,
                        onFocus: l.onFocus,
                        renderExtension: (e, t) => (0, i.jsx)(a, {
                            context: o,
                            extensionMenuParent: t,
                            actionMenuListParent: l,
                            popupEvents: e,
                            displayName: d,
                            width: h,
                            initialFocus: y,
                            subActions: b
                        }),
                        bottomSheetInitialState: S,
                        children: (a, r) => {
                            let s = { ...(0, n(63390).A)(a, t),
                                title: I ? (0, i.jsx)(n(233319).fh, {
                                    subTitle: I,
                                    children: e
                                }) : e,
                                right: m,
                                rightStyle: _,
                                dontShrinkTitle: v
                            };
                            return f ? (0, i.jsx)(n(860287).A, { ...s,
                                svg: f,
                                ref: r
                            }) : (0, i.jsx)(n(95582).A, { ...s,
                                icon: g,
                                ref: r
                            })
                        }
                    })
                })
            }
        },
        50171: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkTriangleSmallIcon: () => r,
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
                r = (0, n(104509).wt)("exclamationMarkTriangleSmall", a, "small")
        },
        57168: (e, t, n) => {
            n.r(t), n.d(t, {
                ClientAIChatStore: () => d,
                UserChatPreferenceLocalStorageStore: () => o,
                defaultClientAIChatStore: () => c,
                defaultLegacyThreadConfig: () => l
            });
            var i = () => n(546605);
            n(898992), n(354520), n(430670), n(803949);
            let a = "confirmed_safe_by_user",
                r = {
                    acceptedInferenceKeys: [],
                    inferenceKeysToAnnotations: {},
                    inferenceKeysToMemories: {},
                    tags: [],
                    abortController: void 0,
                    stopInferencePromise: void 0,
                    temporarySteps: [],
                    inferences: [],
                    traceId: void 0,
                    draftTraceId: void 0,
                    wasForceStoppedByUser: !1,
                    requestInfo: void 0,
                    loading: !1,
                    currentUserInitiatedRunningInference: !1,
                    stagedData: {},
                    agentSearchResultsByToolResultStepId: {},
                    pendingStop: !1
                };
            class s extends i().Store {
                getInitialState() {
                    return r
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(r)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, n(4962).Ay)();
                    return this.state.traceId || this.setState({ ...this.state,
                        traceId: e
                    }), e
                }
                clearTraceId() {
                    this.setState({ ...this.state,
                        traceId: void 0
                    })
                }
                getOrCreateDraftTraceId() {
                    let e = this.state.draftTraceId ? ? (0, n(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: n,
                        toolResultStepId: i,
                        results: a
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [i]: {
                                agentStepId: t,
                                toolCallId: n,
                                results: a
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(n(729849)).Gi,
                        stagedClientSteps: [],
                        stagedEngineSteps: [],
                        stagedInferenceTranscriptSteps: []
                    };
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: t
                        }
                    }), t
                }
                getStagedAttachmentUploadStoreIfExists() {
                    var e;
                    let t = this.state.stagedData;
                    return null == t || null == (e = t.attachmentStagedData) ? void 0 : e.stagedAttachmentUploadStore
                }
                stageAttachmentInferenceTranscriptStep(e) {
                    let {
                        step: t
                    } = e, n = this.getTemporaryAttachmentStagedDataOrInstantiate(), i = { ...n,
                        stagedInferenceTranscriptSteps: [...n.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: i
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: n
                    } = e, i = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!i) return;
                    let a = i.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== n);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
                                stagedInferenceTranscriptSteps: a
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let n = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === n.length) return;
                    let i = t.stagedAttachmentUploadStore;
                    n.forEach(e => {
                        i.onDeleteFileUpload(e)
                    });
                    let a = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: a
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, n;
                    let {
                        fileUrl: i
                    } = e, r = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!r) return;
                    let s = r.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === i);
                    if (s < 0) return;
                    let o = r.stagedInferenceTranscriptSteps[s];
                    if ("attachment" !== o.type) return;
                    let l = null != (n = o.metadata) && n.guardrail ? { ...o.metadata.guardrail,
                            attachmentRisk: a
                        } : {
                            attachmentRisk: a
                        },
                        d = { ...o,
                            metadata: { ...o.metadata ? ? {},
                                guardrail : l
                            }
                        },
                        c = [...r.stagedInferenceTranscriptSteps];
                    c[s] = d, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...r,
                                stagedInferenceTranscriptSteps: c
                            }
                        }
                    })
                }
                getAndClearStagedAssistantAttachmentSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let {
                        stagedInferenceTranscriptSteps: n
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), n
                }
                getStagedMentionPointers() {
                    let {
                        mentionStagedData: e
                    } = this.state.stagedData;
                    return e ? [...e] : []
                }
                updateMentionedStagedData(e) {
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            mentionStagedData: new(n(227318)).d(e)
                        }
                    })
                }
            }
            let o = new(n(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                l = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class d extends i().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: l,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: n(363256).e.withListenerIgnored(() => n(218744).default.checkGate({
                                gateName: "workflows_inference_replay"
                            })) ? "s3" : void 0,
                            emitAgentSearchExtractedResults: !0
                        },
                        threadRegistry: {},
                        isAIChatTranscriptSidePanelVisible: !1,
                        threadToStagedData: {},
                        primeInput: void 0
                    }
                }
                getOrCreateClientAIChatThreadStore(e) {
                    if (!this.state.threadRegistry[e]) {
                        let t = new s;
                        return this.setState({ ...this.state,
                            threadRegistry: { ...this.state.threadRegistry,
                                [e]: t
                            }
                        }), t
                    }
                    return this.state.threadRegistry[e]
                }
                getExistingClientAIChatThreadStore(e) {
                    return this.state.threadRegistry[e]
                }
                removeClientAIChatThreadStore(e) {
                    let {
                        threadRegistry: t
                    } = this.state, n = { ...t
                    };
                    delete n[e], this.setState({ ...this.state,
                        threadRegistry: n
                    })
                }
            }
            let c = new d;
            (0, n(202146).exposeDebugValue)("clientAiChatStore", c)
        },
        59651: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            let i = {
                [n(49361).e1]: "collection_connected_property_figma",
                [n(49361).Hd]: "collection_connected_property_google_drive",
                [n(49361).ob]: "collection_connected_property_github",
                [n(49361).k0]: "collection_connected_property_zendesk",
                [n(49361).bh]: "collection_synced_database_github",
                [n(49361).MN]: "collection_synced_database_asana",
                [n(49361).Fo]: "collection_synced_database_gitlab",
                [n(49361).me]: "collection_synced_database_jira",
                [n(49361).F6]: "collection_synced_database_jira_workspace",
                [n(49361).Fv]: "collection_synced_database_jira_datacenter",
                [n(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function a(e) {
                if (e) return i[e]
            }
        },
        67207: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSlashIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                a = (0, n(104509).wt)("personSlash", i, "default")
        },
        79268: (e, t, n) => {
            n.d(t, {
                C: () => a
            });
            var i = n(296540);

            function a({
                upsell: e,
                source: t,
                buttonDisplayType: r,
                onClickBeforeUpgradeAction: s,
                postUpgradeCallback: o,
                spaceStore: l
            }) {
                let d = (0, n(533992).v3)(),
                    c = (0, n(855021).q)(),
                    u = (0, n(226309)._3)({
                        spaceId: null == l ? void 0 : l.id
                    }),
                    p = (0, n(345776).T)(),
                    {
                        campaign: f,
                        loading: g
                    } = (0, n(435276).V)(t),
                    [m, _] = function(e) {
                        let {
                            upsell: t
                        } = e, a = (0, n(533992).v3)(), r = (0, n(972740).L)(), s = (0, n(993077).U2)(), o = null == r ? void 0 : r.id, l = (0, n(345776).T)(), d = (0, n(226309).lh)({
                            spaceId: o
                        }), c = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, u = (0, n(682985).K8)(() => {
                            if (o) return n(477870).L.getData(a, {
                                spaceId: o
                            })
                        }, [a, o]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: c,
                            userId: l,
                            billingData: d,
                            spaceStore: r,
                            spaceUserStore: s,
                            existingRequests: u
                        }), [c, l, d, r, s, u]), [f, g] = (0, i.useState)(p);
                        return (0, i.useEffect)(() => {
                            g(p)
                        }, [p]), [f, g]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    v = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: d,
                        upsell: e,
                        spaceStore: l,
                        salesStatus: c,
                        campaign: f,
                        requestState: m,
                        billingData: u,
                        source: t,
                        loading: g
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [l, d, e, c, f, m, u, t, g]),
                    h = (0, i.useCallback)(async () => {
                        if (!e) return;
                        let i = "product" === e.type ? e.product : void 0,
                            a = (0, n(555676).x)();
                        if (!a) return;
                        let [, {
                            getUpgradeSystemAction: c
                        }] = await Promise.all([null == s ? void 0 : s(), a()]), g = c(v);
                        await g({
                            source: t,
                            spaceStore: l,
                            product: i,
                            billingData: u,
                            environment: d,
                            setRequestState: _,
                            userId: p,
                            buttonDisplayType: r,
                            postUpgradeCallback: o,
                            campaign: f,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, s, v, t, l, u, d, _, p, r, o, f]);
                return {
                    upgradeEligibility: v,
                    handleClick: h
                }
            }
        },
        85071: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                integrationIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                a = (0, n(104509).wt)("integration", i, "default")
        },
        95783: (e, t, n) => {
            n.d(t, {
                w: () => i
            }), n(16280), n(18107), n(967357), n(898992), n(737550);

            function i(e) {
                var t, i, a, r, s, o;
                let {
                    environment: l,
                    createBlockItem: d,
                    from: c,
                    inMemoryRecordCache: u,
                    transaction: p,
                    selection: f
                } = e;
                if (!d.templateRootBlockId || !d.createTemplate) throw Error("Invalid createBlock item.");
                let g = (f.length > 0 ? f[0].getSpaceId() : void 0) ? ? e.spaceId ? ? (null == (t = n(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : t.getSpaceId()),
                    m = g ? l.idCreator.getSpaceIdCreatorSync(g) : void 0,
                    _ = f.some(e => (0, n(398346).l)(e)),
                    v = d.createTemplate(l),
                    {
                        targetBlockStore: h
                    } = (0, n(963771).initializeTemplate)({
                        environment: l,
                        sourceBlockId: d.templateRootBlockId,
                        targetBlockPointer: (0, n(295447).zP)({
                            environment: l,
                            table: n(832375).evP,
                            spaceId: g
                        }),
                        sourceBlockSubtree: (0, n(412951).partialRecordMapToRecordMap)(v),
                        targetRecordCache: u,
                        transaction: p,
                        deepCopyTransclusionContainers: !0,
                        resolveTemplateVariables: !_,
                        spaceIdCreator: m
                    });
                null == (i = d.postCreateCallback) || i.call(d, h, l, p);
                let [y] = f;
                if (n(205103).eY({
                        environment: l,
                        store: h,
                        transaction: p,
                        previousStore: y
                    }), c && d.blockType) {
                    let e, t, i, u, p = d.collectionViewType,
                        g = 0 !== f.length ? null == (a = f[0]) ? void 0 : a.getParentCollectionIdUpToTwoLevels() : void 0;
                    if ("chart" === p) {
                        let n = null == (r = h.getCollectionViewStores()) ? void 0 : r.at(0);
                        e = null == n || null == (s = n.getChartConfig()) ? void 0 : s.type, t = null == n ? void 0 : n.getChartPlaceholderType()
                    }
                    if ("form_editor" === p) {
                        let e = null == (o = h.getCollectionViewStores()) ? void 0 : o.at(0),
                            t = null == e ? void 0 : e.getFormBlockStore();
                        i = null == t ? void 0 : t.id, u = null == e ? void 0 : e.id
                    }
                    let {
                        collectionId: m,
                        ownedCollectionCount: _,
                        linkedCollectionCount: v
                    } = (0, n(633171).P)(h, {
                        skipPages: !1
                    }), y = {
                        from: c,
                        collection_id: m,
                        owned_collection_count: _,
                        linked_collection_count: v,
                        view_type: "inline" === p || "full_page" === p ? "table" : p,
                        is_toggleable: d.isToggleable,
                        automation_id: h.getAutomationId(),
                        new_page_id: "page" === d.blockType ? h.id : void 0,
                        creating_block_id: h.id,
                        parent_collection_id: g,
                        is_full_screen: "full_page" === p,
                        chart_type: "placeholder" === e ? t : e,
                        is_chart_placeholder: "placeholder" === e,
                        form_id: i,
                        view_id: u
                    }, b = d.blockType;
                    n(549960).tP(b) ? n(549960).vH(l, { ...y,
                        type: b,
                        collection_id: m || ""
                    }) : n(549960).vH(l, { ...y,
                        type: b
                    })
                }
                return h
            }
        },
        96495: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    upsell: i,
                    spaceStore: a,
                    salesStatus: r,
                    campaign: s,
                    requestState: o,
                    billingData: l,
                    source: d,
                    loading: c
                } = e;
                if (c) return {
                    status: "loading"
                };
                let u = (0, n(875472).sO)(s);
                if ("none" === i.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, n(916804).I)(a)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let p = i.product,
                    {
                        addOnFeature: f
                    } = (0, n(269612).p)({
                        billingData: l,
                        product: p
                    });
                if (!(0, n(192159).Gm)(l) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(d) && !f) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let g = function(e) {
                    let {
                        product: t,
                        environment: i,
                        spaceStore: a
                    } = e;
                    if ((0, n(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let r = (0, n(663842).m)({
                        environment: i
                    }) && ("personal" === t || "ai" === t);
                    return r && a && (0, n(471078).O)({
                        environment: i,
                        spaceId: a.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : i.device.isMobileNative ? "ai" !== t || (0, n(907620).T)("supportsAiIAP") ? r ? {
                        status: "eligible_to_purchase",
                        reason: "show_mobile_native_upgrade_modal"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_purchase_not_supported"
                    } : {
                        status: "not_eligible",
                        reason: "mobile_ai_add_on_purchase_not_supported"
                    } : void 0
                }({
                    product: p,
                    environment: t,
                    spaceStore: a
                });
                return g || ((null == l ? void 0 : l.provider) === "app_store" || (null == l ? void 0 : l.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === o ? {
                    status: "eligible_to_request"
                } : "pending" === o ? {
                    status: "request_pending"
                } : "sales_assisted" === r ? {
                    status: "sales_assisted"
                } : (0, n(262166).h0)(p) && "sales_eligible" === r ? {
                    status: "sales_eligible"
                } : null != a && a.canAdmin() ? (0, n(192159).bO)((0, n(226309).a9)(l)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === i.trialability && (null == u ? void 0 : u.type) === "trial" && u.subscriptionTier === i.product ? {
                    status: "eligible_for_trial"
                } : {
                    status: "eligible_to_purchase",
                    reason: "show_upgrade_modal"
                } : {
                    status: "not_eligible",
                    reason: "not_workspace_owner"
                })
            }
        },
        118633: (e, t, n) => {
            n.d(t, {
                s: () => a
            });
            let i = new(n(815048)).O2("TranscriptionBlockSharingButtonPopup", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 48419))),
                a = (0, n(815048)._h)(i, e => e.TranscriptionBlockSharingButtonPopup)
        },
        124094: (e, t, n) => {
            n.d(t, {
                E: () => l,
                Z: () => d
            });
            var i = () => n(889089);
            let a = {
                plans_page: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                checkout_modal: ["business_trial_non_conversion", "business_block_limit_coupon", "plus_block_limit_coupon", "aimn", "annual_block_limit", "block_limit", "business_resurrection_offer", "resurrection_offer"],
                business_trial_verify_pages_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_settings_centralized_view: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_page_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                verification_upsell_item_collection_entrypoint: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_private_teamspaces_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                business_trial_ai_connectors_upsell: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                upgrade_requests_page: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_workspace_settings_connector_cards: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                multi_search_scope_menu: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                assistant_overflow_menu_add_connectors: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_corner_chat_welcome_connector_action_card: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                ai_chat_connectors_banner: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d", "business_reverse_14d"],
                post_business_trial_coupon_callout: ["business_trial_non_conversion"],
                resurrection_offer_callout: ["business_resurrection_offer", "resurrection_offer"],
                ai_agent: ["stacked_business_trial", "business_reverse", "stacked_business_trial_14d"],
                custom_agent: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_sidebar: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                new_custom_agents_library: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                slippery_slope_flyout_menu: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_launch_modal: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                custom_agents_gift_box: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"],
                marketplace_agents: ["custom_agents_stacked_business_trial_14d", "custom_agents_business_reverse_14d", "custom_agents_stacked_business_trial_1m"]
            };
            var r = () => n(617995),
                s = () => n(705820);
            async function o(e) {
                var t;
                let {
                    campaign: i,
                    eligibleCampaigns: a
                } = e;
                if (!a.includes(i)) return !1;
                await (0, n(591083).yc)().catch(() => void 0);
                let r = (0, n(591083).v7)(),
                    s = null == r || null == (t = r[i]) ? void 0 : t.statsigDetails;
                return !!s && (await n(218744).default.waitUntilStatsigReadyAsync(), (0, n(134213).l)({
                    experimentService: n(218744).default,
                    statsigDetails: s
                }).isEligible)
            }
            async function l(e, t, n) {
                let l, d = function(e) {
                    if (a.hasOwnProperty(e)) return a[e]
                }(n);
                if (d)
                    for (let n of d) {
                        if ((0, i().w)(n)) {
                            if (l || (l = await s().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await o({
                                    campaign: n,
                                    eligibleCampaigns: l
                                })) return n;
                            continue
                        }
                        let a = await r().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: n
                        });
                        if ((null == a ? void 0 : a.campaign) === n) return n
                    }
            }

            function d({
                environment: e,
                spaceName: t,
                campaign: i,
                entrypoint: a
            }) {
                if (t) switch (i) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, n(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: i,
                                    entrypoint: a
                                }
                            }
                        })
                }
            }
        },
        125040: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.77 10.36 12.45",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.775c-.947 0-1.717.392-2.237 1.04-.508.633-.747 1.47-.747 2.338s.239 1.704.747 2.337c.52.648 1.29 1.04 2.237 1.04s1.717-.392 2.237-1.04c.508-.633.748-1.47.748-2.337 0-.869-.24-1.705-.748-2.338-.52-.648-1.29-1.04-2.237-1.04M6.738 3.597c.28-.348.69-.572 1.262-.572s.983.224 1.263.572c.291.364.472.904.472 1.556 0 .651-.18 1.191-.472 1.555-.28.348-.69.572-1.263.572s-.982-.224-1.262-.572c-.292-.364-.472-.904-.472-1.555 0-.652.18-1.192.472-1.556M8 9.178c-2.196 0-4.166 1.07-5.007 2.713a1.48 1.48 0 0 0 .2 1.677c.356.413.91.657 1.487.657h6.64c.577 0 1.132-.244 1.486-.657a1.48 1.48 0 0 0 .201-1.677c-.84-1.643-2.81-2.713-5.007-2.713m-3.894 3.283c.583-1.14 2.062-2.033 3.894-2.033s3.311.893 3.895 2.033q.045.089.033.154a.27.27 0 0 1-.07.14.72.72 0 0 1-.538.22H4.68a.72.72 0 0 1-.537-.22.27.27 0 0 1-.07-.14.26.26 0 0 1 .033-.154"
                    })
                },
                a = (0, n(104509).wt)("personSmall", i, "small")
        },
        141802: (e, t, n) => {
            function i(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "dictation_modal_open",
                        eventProperties: t
                    }
                })
            }

            function a(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "dictation_modal_close",
                        eventProperties: t
                    }
                })
            }

            function r(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "dictation_start",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "dictation_end",
                        eventProperties: t
                    }
                })
            }

            function o(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "dictation_error",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                e && (0, n(104310).u)({
                    event: {
                        eventName: "update_dictation_language",
                        eventProperties: t
                    }
                })
            }
            n.d(t, {
                D_: () => r,
                E_: () => a,
                Im: () => s,
                K_: () => l,
                rP: () => o,
                uB: () => i
            })
        },
        149207: (e, t, n) => {
            n.d(t, {
                m: () => i
            });

            function i(e) {
                return n(610463).X.state
            }
        },
        150945: (e, t, n) => {
            function i(e) {
                let t, {
                        environment: i,
                        createBlockItem: a,
                        selection: r,
                        transaction: s,
                        analyticsFrom: o,
                        preventSetSelection: l
                    } = e,
                    d = n(584265).default.getCurrentRecordCache(),
                    c = new(n(303541)).UF({
                        environment: i,
                        userFlow: (null == a ? void 0 : a.blockType) === "page" ? "user_flow_create_page" : "user_flow_create_block",
                        from: o,
                        succeedOnEnqueue: !0
                    });
                if ((0, n(194020).E)(i, (0, n(974410).f)(r[0])) && a && d) {
                    let e = n(95783).w({
                        environment: i,
                        createBlockItem: a,
                        transaction: s,
                        inMemoryRecordCache: d,
                        from: o,
                        selection: r
                    });
                    c.track(e.pointer, s), t = (0, n(210318).L)({
                        environment: i,
                        blocksToInsert: [e],
                        target: r,
                        transaction: s,
                        replaceEmptyTextBlock: !1,
                        preventSetSelection: l
                    })[0]
                } else c.fail("invalid_state");
                return t
            }

            function a(e) {
                let t, {
                        environment: i,
                        createBlockItem: a,
                        selection: r,
                        transaction: s,
                        analyticsFrom: o,
                        preventSetSelection: l
                    } = e,
                    d = n(584265).default.getCurrentRecordCache();
                if ((0, n(194020).E)(i, (0, n(974410).f)(r[0])) && a && d) {
                    let e = n(95783).w({
                        environment: i,
                        createBlockItem: a,
                        transaction: s,
                        inMemoryRecordCache: d,
                        from: o,
                        selection: r
                    });
                    t = (0, n(199894).t)({
                        environment: i,
                        blocks: [e],
                        selection: r,
                        transaction: s,
                        preventSetSelection: l
                    })[0]
                }
                return t
            }

            function r(e) {
                let {
                    environment: t,
                    selection: a,
                    transaction: r
                } = e, s = i({ ...e,
                    preventSetSelection: !0
                });
                if (s) {
                    var o;
                    (0, n(270819).x)({
                        environment: t,
                        insertedStores: [s],
                        isCreated: !0
                    });
                    let e = n(708929).Uv.getMode(s);
                    if ("suggest" === e) {
                        let e = (0, n(714577).R)(t, r, s);
                        (0, n(132993).t)(r, s, {
                            id: n(92513).JW(),
                            type: "insert",
                            discussionId: e.id
                        }), (0, n(941538).c)({
                            environment: t,
                            transaction: r,
                            discussionStore: e,
                            addModifiedBlockIdsAfter: [s.id]
                        })
                    }
                    "suggest" === e && null != (o = s.getNavigableBlockStore({
                        skipCurrent: !0
                    })) && o.isCommentOnly() || (0, n(5556).u)({
                        transaction: r,
                        blocks: a
                    })
                }
                return s
            }

            function s(e) {
                let {
                    blocks: t,
                    transaction: a,
                    environment: r,
                    skipAnalytics: s
                } = e, o = i({
                    environment: r,
                    selection: t,
                    createBlockItem: n(992140).ry.text,
                    analyticsFrom: s ? void 0 : "text_insert_below",
                    transaction: a
                });
                return o && n(374176).default.afterNextFlush(() => {
                    (0, n(464515).z)({
                        environment: r,
                        blockStore: o,
                        insertedTextBlockLocation: "below",
                        editSelection: n(182553).h,
                        getRectFromStore: n(240414).T.getRectFromStore.bind(n(240414).T)
                    })
                }), o
            }

            function o(e) {
                let {
                    blocks: t,
                    transaction: i,
                    environment: r,
                    skipAnalytics: s
                } = e, o = a({
                    environment: r,
                    selection: t,
                    createBlockItem: n(992140).ry.text,
                    analyticsFrom: s ? void 0 : "text_insert_below",
                    transaction: i
                });
                return o && n(374176).default.afterNextFlush(() => {
                    (0, n(464515).z)({
                        environment: r,
                        blockStore: o,
                        insertedTextBlockLocation: "above",
                        editSelection: n(182553).h,
                        getRectFromStore: n(240414).T.getRectFromStore.bind(n(240414).T)
                    })
                }), o
            }
            n.r(t), n.d(t, {
                insertBlockAbove: () => a,
                insertBlockAndEdit: () => r,
                insertBlockBelow: () => i,
                insertTextAbove: () => o,
                insertTextBelow: () => s
            })
        },
        173231: (e, t, n) => {
            n.d(t, {
                hS: () => c,
                o2: () => u,
                js: () => s,
                Oe: () => o,
                Le: () => d,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                    moreOptions: {
                        id: "action.moreOptions",
                        defaultMessage: "More options"
                    }
                }),
                r = (0, n(109939).YK)({
                    mixedBlocks: {
                        id: "actionMenuHelpers.mixedBlocks.title",
                        defaultMessage: "{count, plural, one {{count} block} other {{count} blocks}}"
                    }
                });

            function s(e) {
                return l(e).groupedSections
            }

            function o(e) {
                let t = l(e);
                return t.rankedActions.map(e => ({
                    action: e,
                    section: t.actionSectionMap.get(e)
                }))
            }

            function l(e) {
                let t = n(962299).A.getIntl(),
                    {
                        sections: s,
                        context: o,
                        query: l,
                        shouldShowBlockTypeTitle: d
                    } = e,
                    c = l.trim().toLowerCase();
                c.startsWith("/") && (c = c.slice(1));
                let f = u(s, o).map((e, s) => {
                    var l, c;
                    let {
                        actions: u,
                        title: p
                    } = e, f = u.length - 5;
                    if (e.shouldShowMoreOptions && f > 1) {
                        let e = (l = u.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: a.moreOptions,
                            analyticsName: a.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                actions: l
                            }]
                        }));
                        u = [...u.slice(0, 5), e]
                    }
                    let g = o.blocks[0];
                    if (g) {
                        let e = g.getType();
                        if (d && e && 0 === s) {
                            let i = o.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : r.mixedBlocks;
                            if (i) {
                                p = t.formatMessage(i, {
                                    count: o.blocks.length
                                });
                                let e = null == (c = n(496704).K.findCollectionViewBlockFromStore(g)) ? void 0 : c.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: u,
                        title: p
                    }
                });
                if (!c) {
                    let e = new Map;
                    for (let t of f)
                        for (let n of t.actions) e.set(n, t);
                    return {
                        groupedSections: f,
                        rankedActions: f.flatMap(e => e.actions),
                        actionSectionMap: e
                    }
                }
                let g = (function(e, t) {
                        let n = [];
                        for (let i of e) {
                            let e = { ...i,
                                actions: []
                            };
                            for (let a of i.actions)
                                if (p(a, t))
                                    if (a.subActions) {
                                        let r = u(a.subActions(t), t);
                                        if (a.hideSubActions) {
                                            e.actions.push(a);
                                            continue
                                        }
                                        if (a.collapseSubActionsIntoParent) {
                                            for (let t of r)
                                                for (let n of t.actions) e.actions.push(n);
                                            continue
                                        }
                                        for (let e of r.map(e => ({ ...e,
                                                key: `${i.key} ${a.key} ${e.key}`,
                                                title: e.title || a.displayName,
                                                searchTitle: [a.searchName || a.displayName, e.searchTitle || e.title].filter(Boolean).join(" ")
                                            }))) n.push(e)
                                    } else e.actions.push(a);
                            e.actions.length && n.push(e)
                        }
                        return n
                    })(s, o).map(e => ({ ...e,
                        actions: e.actions.map(t => {
                            let n = t.searchName || t.displayName || "",
                                i = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: i
                            }
                        })
                    })),
                    m = [],
                    _ = new Map;
                for (let e of g)
                    for (let t of e.actions) _.set(t, e), m.push(t);
                let v = (0, n(821048).Ay)(c, m, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    h = new Set(v),
                    y = m.filter(e => !!e.alwaysShowInSearch && !h.has(e)),
                    b = [...y.filter(e => "start" === e.alwaysShowInSearch), ...v, ...y.filter(e => "end" === e.alwaysShowInSearch)],
                    S = n(381453).$z(b, e => {
                        let t = _.get(e);
                        if (t) return t.title
                    }),
                    k = [];
                for (let e of Object.keys(S)) {
                    let t = S[e],
                        n = _.get(t[0]);
                    n && k.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: k,
                    rankedActions: b,
                    actionSectionMap: _
                }
            }

            function d(e, t) {
                if (!t) return e;
                let n = 0,
                    i = [];
                for (let a of e) {
                    if (n >= t) break;
                    let e = a.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, i.push({ ...a,
                        actions: e
                    }))
                }
                return i
            }

            function c(e, t) {
                let n = [];
                for (let i of e) {
                    let e = i.actions.filter(t);
                    e.length > 0 && n.push({ ...i,
                        actions: e
                    })
                }
                return n
            }

            function u(e, t) {
                return c(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        177861: (e, t, n) => {
            function i(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, n, i, a) => {
                    let r = encodeURIComponent(n),
                        s = encodeURIComponent(i),
                        o = encodeURIComponent(a),
                        l = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${r}${l}${s}${l}${o})`
                })
            }

            function a(e, t) {
                let n = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, i] of Object.entries(t.stepCitations)) {
                    if (!n.stepCitations[e]) {
                        n.stepCitations[e] = {
                            claims: [...i.claims],
                            artifacts: [...i.artifacts]
                        };
                        continue
                    }
                    let t = new Set(n.stepCitations[e].claims.map(e => e.id));
                    for (let a of i.claims) t.has(a.id) || n.stepCitations[e].claims.push(a);
                    let a = new Set(n.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of i.artifacts) a.has(t.id) || n.stepCitations[e].artifacts.push(t)
                }
                return n
            }

            function r(e) {
                try {
                    let t = [];
                    for (let n in e.stepCitations)
                        for (let i of e.stepCitations[n].artifacts || []) i.citationInfo && t.push(i.citationInfo);
                    let n = t.length,
                        i = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), i[t] = (i[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: i,
                        numSearchResults: n
                    }
                } catch (e) {
                    return {
                        allArtifacts: [],
                        resultsBySource: {},
                        numSearchResults: 0
                    }
                }
            }

            function s(e, t) {
                try {
                    let o = function(e) {
                            let t = [];
                            for (let n of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, i, a] = n;
                                ("claim" === i || "artifact" === i) && t.push({
                                    planKey: e,
                                    citationType: i,
                                    resourceId: a
                                })
                            }
                            return t
                        }(e),
                        l = {},
                        d = new Set;
                    for (let e of o) {
                        let {
                            planKey: o,
                            citationType: c,
                            resourceId: u
                        } = e;
                        try {
                            var n, i, a, r, s;
                            let e;
                            if (!o || !c || !u) continue;
                            let p = t.stepCitations[o];
                            if (!p) continue;
                            if ("claim" === c) {
                                let t = null == (i = p.claims) ? void 0 : i.find(e => e.id === u);
                                null != t && null != (a = t.supportingArtifactIds) && a[0] && (e = null == (r = p.artifacts) ? void 0 : r.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === c && (e = null == (s = p.artifacts) ? void 0 : s.find(e => e.id === u));
                            if (null != (n = e) && n.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", d.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), l[t] = (l[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let c = Object.values(l).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: l,
                        numCitationsShown: c,
                        citationPageIds: Array.from(d)
                    }
                } catch (e) {
                    return {
                        citationsBySource: {},
                        numCitationsShown: 0,
                        citationPageIds: []
                    }
                }
            }

            function o(e) {
                let t = e.findLast(e => "researcher-report" === e.type);
                return {
                    citationInfo: t && t.citationInfo ? t.citationInfo : {
                        stepCitations: {}
                    },
                    reportContent: (null == t ? void 0 : t.value) || ""
                }
            }
            n.d(t, {
                Mi: () => a,
                VJ: () => o,
                W6: () => r,
                y5: () => i,
                ye: () => s
            }), n(410838), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454), n(908872), n(737550)
        },
        187649: (e, t, n) => {
            let i, a;

            function r(e) {
                i = e
            }
            async function s() {
                return a || (i ? a = await i() : void 0)
            }
            n.d(t, {
                Q: () => r,
                z: () => s
            })
        },
        199894: (e, t, n) => {
            n.d(t, {
                t: () => i
            }), n(16280), n(898992), n(672577), n(581454);

            function i(e) {
                let {
                    environment: t,
                    selection: i,
                    transaction: a,
                    preventSetSelection: r
                } = e, {
                    blocks: s
                } = e, o = (0, n(385941).Z)();
                if (!o) throw Error("No root store.");
                if (i.length > 0) {
                    let e = i[0],
                        o = n(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!o || !o.props.onInsertAbove) throw Error("No Selectable found.");
                    let l = o.props.onInsertAbove({
                        insertStores: s,
                        transaction: a
                    });
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: l
                    }), l
                } {
                    let e = o.getContentStore(),
                        i = s.map(t => (0, n(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: a
                        }).childStore);
                    return r || (0, n(854924).t)({
                        environment: t,
                        stores: i
                    }), i
                }
            }
        },
        201910: (e, t, n) => {
            n.d(t, {
                G: () => i
            }), n(581454);

            function i(e) {
                let {
                    store: t
                } = (0, n(308240).s)(), i = (0, n(682985).K8)(() => !(0, n(865768).Aj)({
                    store: t
                }), [t]);
                return (0, n(682985).K8)(() => Object.fromEntries(e.map(e => [e, function(e) {
                    let {
                        userId: t,
                        store: i,
                        hasInaccessiblePermissions: a
                    } = e, r = (0, n(862085).zt)({
                        userId: t,
                        store: i
                    }).role;
                    return r && (0, n(642157).PW)(r) && "none" !== r ? r : a ? void 0 : "none"
                }({
                    userId: e,
                    store: t,
                    hasInaccessiblePermissions: i
                })])), [t, e, i])
            }
        },
        208117: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: r,
                    billingData: s
                } = e;
                return a({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: r,
                    billingData: s
                }) && !(0, n(192159).N8)(s) && !!(!r || !(0, n(556306).h)(r))
            }

            function a(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: r
                } = e;
                if (r && (0, n(192159).N8)(r)) return !0;
                let s = null == a ? void 0 : a.id;
                return !!s && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: s
                }) ? ? 1) > 99 || (0, n(192159).N8)(r)) || !!i && "company_employee_count" in i && parseInt(i.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => a,
                q: () => i
            })
        },
        212680: (e, t, n) => {
            n.d(t, {
                i: () => i
            });
            let i = new(n(815048)).O2("transcriptionNotificationActions", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 207108)))
        },
        218116: (e, t, n) => {
            n.d(t, {
                _: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                    overflow: "hidden",
                    position: "relative"
                },
                s = {
                    position: "absolute",
                    visibility: "hidden",
                    whiteSpace: "nowrap",
                    pointerEvents: "none"
                },
                o = {
                    position: "relative",
                    overflow: "hidden"
                };

            function l(e) {
                let {
                    children: t,
                    cycleLimit: l = 1 / 0,
                    delayCycleMs: d = 0,
                    delayInitialMs: c = 350,
                    gap: u = 20,
                    isPaused: p,
                    showFadeout: f,
                    speed: g = 50,
                    fadeoutColorVariant: m = "primary",
                    customFadeoutColor: _,
                    forceScroll: v = !1
                } = e, h = (0, i.useRef)(null), y = (0, i.useRef)(null), b = (0, i.useRef)(null), S = (0, i.useRef)(), k = (0, i.useRef)(), x = (0, i.useRef)(0), w = (0, i.useRef)(c), I = (0, i.useRef)(!1), A = (0, i.useRef)(0), C = (0, i.useRef)(0), M = (0, i.useRef)(0), T = (0, i.useRef)(null), j = (0, i.useRef)(null), E = (0, i.useRef)(0), [B, D] = (0, i.useState)(v), [F, P] = (0, i.useState)(!1), R = f ? Math.max(u, 20) : u, U = _ ? ? n(632079).Tj.background[m], N = (0, n(960253).I)(() => ({
                    clonesContainer: {
                        whiteSpace: "nowrap",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: R
                    },
                    fade: {
                        position: "absolute",
                        insetBlockStart: 0,
                        insetBlockEnd: 0,
                        width: Math.min(R, 40),
                        pointerEvents: "none"
                    },
                    fadeLeft: {
                        insetInlineStart: 0,
                        background: `linear-gradient(to left, transparent, ${U})`,
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out"
                    },
                    fadeRight: {
                        insetInlineEnd: 0,
                        background: `linear-gradient(to right, transparent, ${U})`,
                        opacity: B && f ? 1 : 0
                    }
                }), [R, B, f, U]), L = (0, i.useCallback)(e => {
                    b.current && (b.current.style.transform = `translateX(${e}px)`)
                }, []), O = (0, i.useCallback)(e => {
                    E.current !== e && (E.current = e, j.current && (j.current.style.opacity = f ? `${e}` : "0"))
                }, [f]), V = (0, i.useCallback)(() => {
                    M.current = 0, P(!1)
                }, [P]);
                (0, i.useEffect)(() => {
                    V()
                }, [l, V]);
                let z = (0, i.useCallback)(() => {
                        L(0), O(0)
                    }, [L, O]),
                    W = (0, i.useCallback)(() => {
                        x.current = 0, C.current = 0, A.current = 0, k.current = void 0
                    }, []),
                    $ = (0, i.useCallback)(() => {
                        W(), z()
                    }, [W, z]),
                    K = (0, i.useCallback)(() => {
                        T.current = setTimeout(() => {
                            F && (I.current = !0), V(), T.current = null
                        }, 800)
                    }, [F, V]),
                    G = (0, i.useCallback)(() => {
                        T.current && (clearTimeout(T.current), T.current = null)
                    }, []),
                    q = (0, i.useCallback)(() => {
                        F && (I.current = !0), V()
                    }, [F, V]);
                (0, i.useEffect)(() => {
                    var e;
                    let t = null == (e = h.current) ? void 0 : e.parentElement;
                    if (!t) return;
                    let n = new ResizeObserver(() => {
                        var e;
                        let t = null == (e = h.current) ? void 0 : e.parentElement,
                            n = y.current;
                        t && n && D(v || n.offsetWidth > t.offsetWidth)
                    });
                    return n.observe(t), () => {
                        n.disconnect()
                    }
                }, [v]), (0, i.useEffect)(() => {
                    B && $()
                }, [B, $]), (0, i.useEffect)(() => {
                    if (!B) {
                        S.current && cancelAnimationFrame(S.current), z();
                        return
                    }
                    if (p || F) {
                        S.current && cancelAnimationFrame(S.current);
                        return
                    }
                    let e = t => {
                        var n;
                        k.current || (k.current = t, I.current ? (I.current = !1, w.current = 0) : w.current = c);
                        let i = t - k.current;
                        k.current = t;
                        let a = ((null == (n = y.current) ? void 0 : n.offsetWidth) ? ? 0) + R;
                        if (w.current > 0) {
                            w.current -= i, L(-(x.current * g / 1e3 % a)), S.current = requestAnimationFrame(e);
                            return
                        }
                        if (A.current > 0 && d > 0) {
                            A.current -= i, z(), S.current = requestAnimationFrame(e);
                            return
                        }
                        x.current += i;
                        let r = x.current * g / 1e3 % a;
                        if (r < C.current) {
                            if (M.current += 1, M.current >= l) {
                                P(!0), $();
                                return
                            }
                            A.current = d
                        } else L(-r), O(r > a - R ? 0 : 1);
                        C.current = r, S.current = requestAnimationFrame(e)
                    };
                    return k.current = void 0, S.current = requestAnimationFrame(e), () => {
                        S.current && cancelAnimationFrame(S.current)
                    }
                }, [l, d, c, F, B, p, R, W, z, $, g, O, L]);
                let H = (0, i.useMemo)(() => B ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("span", {
                            children: t
                        }), (0, a.jsx)("span", {
                            children: t
                        })]
                    }) : t, [t, B]),
                    Y = (0, i.useMemo)(() => (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            ref: y,
                            style: s,
                            "aria-hidden": "true",
                            children: t
                        }), (0, a.jsx)("div", {
                            ref: h,
                            style: r,
                            children: (0, a.jsx)("div", {
                                ref: b,
                                style: N.clonesContainer,
                                children: H
                            })
                        }), (0, a.jsx)("div", {
                            ref: j,
                            style: { ...N.fade,
                                ...N.fadeLeft
                            },
                            "aria-hidden": "true"
                        }), (0, a.jsx)("div", {
                            style: { ...N.fade,
                                ...N.fadeRight
                            },
                            "aria-hidden": "true"
                        })]
                    }), [t, H, N]);
                return n(986939).A.isMobile ? (0, a.jsx)(n(64960).Ay, {
                    style: o,
                    onTouchStart: q,
                    children: Y
                }) : (0, a.jsx)("div", {
                    style: o,
                    onMouseEnter: K,
                    onMouseLeave: G,
                    children: Y
                })
            }
        },
        250943: (e, t, n) => {
            n.d(t, {
                E: () => i
            }), n(581454);

            function i(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, n(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let i = (0, n(247438).RQ)(e.getValue()),
                        a = (0, n(247438).xbM)(i, t),
                        {
                            tokensInsideRange: r
                        } = (0, n(247438).AI5)(i, a.startIndex, a.endIndex);
                    return (0, n(536614).r4)(r, e)
                }).join("\n\n")
            }
        },
        262401: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personSlashSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                a = (0, n(104509).wt)("personSlashSmall", i, "small")
        },
        269612: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i({
                billingData: e,
                product: t
            }) {
                return (0, n(722371).Xk)(n(645040).xm, t) ? {
                    addOnFeature: t,
                    for_subscription_tier: (0, n(192159).AI)(e)
                } : {
                    for_subscription_tier: t
                }
            }
        },
        284771: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                constructor() {
                    super()
                }
                getInitialState() {}
            }
            let r = new a
        },
        310324: (e, t, n) => {
            n.d(t, {
                Ay: () => f,
                KF: () => p,
                LG: () => o,
                Zf: () => d,
                yD: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                    paddingTop: 4,
                    paddingBottom: 4
                },
                s = i.forwardRef(function({
                    preventCaptureArrowShortcuts: e,
                    preventCaptureDeleteWhenEmpty: t,
                    preventCaptureClipboardShortcuts: s,
                    preventCaptureSpacebarWhenEmpty: o,
                    ...l
                }, d) {
                    let {
                        left: c,
                        right: u,
                        inputLeft: p,
                        inputRight: f,
                        inputRightStyle: g,
                        disableInput: m,
                        inputOuterStyle: v,
                        rightMobileEditLabel: y,
                        mobileKeyboardOnDismiss: b,
                        style: S,
                        value: k,
                        onChange: x,
                        autosize: w,
                        autosizeMinHeight: I,
                        autosizeMaxHeight: A,
                        customElementAttributes: C,
                        disabled: M,
                        format: T,
                        id: j,
                        placeholder: E,
                        type: B,
                        autoFocus: D,
                        focus: F,
                        focusInitial: P,
                        focusAfterAnimation: R,
                        forceShowClearButton: U,
                        ignoreKeyboardMode: N,
                        inputElementAttributes: L,
                        inputStyle: O,
                        isRightLastElementOfInput: V,
                        maxlength: z,
                        min: W,
                        max: $,
                        selectAll: K,
                        showClearButton: G,
                        suppressFocusRing: q,
                        textarea: H,
                        textareaSubmitOnEnter: Y,
                        onBlur: Z,
                        onCancel: X,
                        onClearButtonClick: J,
                        onClick: Q,
                        onFocus: ee,
                        onKeyDown: et,
                        onSubmit: en,
                        ...ei
                    } = l, [ea, er] = (0, i.useState)(() => !!(F || P));
                    (0, i.useEffect)(() => {
                        void 0 !== F && er(F)
                    }, [F]);
                    let es = e ? void 0 : n(763230).D_,
                        eo = !t || k.length > 0 ? n(763230).D_ : void 0,
                        el = s ? void 0 : n(763230).D_,
                        ed = !o || k.length > 0 ? n(763230).D_ : void 0,
                        ec = (0, n(649476).Tf)(),
                        eu = (0, i.useContext)(n(649476).xu),
                        ep = (0, i.useRef)(null),
                        ef = {
                            value: k,
                            onChange: x,
                            autosize: w,
                            autosizeMinHeight: I,
                            autosizeMaxHeight: A,
                            customElementAttributes: C,
                            disabled: M,
                            format: T,
                            id: j,
                            placeholder: E,
                            type: B,
                            autoFocus: D,
                            focus: F,
                            focusInitial: P,
                            focusAfterAnimation: R,
                            forceShowClearButton: U,
                            ignoreKeyboardMode: N,
                            inputElementAttributes: L,
                            inputStyle: O,
                            isRightLastElementOfInput: V,
                            maxlength: z,
                            min: W,
                            max: $,
                            selectAll: K,
                            showClearButton: G,
                            suppressFocusRing: q,
                            textarea: H,
                            textareaSubmitOnEnter: Y,
                            onBlur: Z,
                            onCancel: X,
                            onClearButtonClick: J,
                            onClick: Q,
                            onFocus: ee,
                            onKeyDown: et,
                            onSubmit: en
                        };
                    return (0, a.jsx)(n(369064).N, {
                        debugName: "InputMenuItem",
                        capture: !0,
                        onUntab: n(763230).D_,
                        onTab: n(763230).D_,
                        onSelectAll: n(763230).D_,
                        onRedo: n(763230).D_,
                        onUndo: n(763230).D_,
                        onToggleBold: n(763230).D_,
                        onToggleItalics: n(763230).D_,
                        onToggleCode: n(763230).D_,
                        onCut: el,
                        onCopy: el,
                        onPaste: el,
                        onKeypress: n(763230).D_,
                        onLeft: es,
                        onRight: es,
                        onDelete: eo,
                        onBackspace: eo,
                        onSpace: ed,
                        children: n(986939).A.isMobile ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(n(636518).Ay, {
                                ref: d,
                                ...ei,
                                itemMarginLeft: ec ? 8 : void 0,
                                style: S,
                                title: (0, a.jsx)(h, {
                                    ref: ep,
                                    left: c,
                                    right: u,
                                    inputLeft: p,
                                    inputRight: f,
                                    inputRightStyle: g,
                                    disableInput: m,
                                    inputOuterStyle: v,
                                    rightMobileEditLabel: y,
                                    isFocused: ea,
                                    setIsFocused: er,
                                    ...ef
                                })
                            }), (0, a.jsx)(n(368678).P, {
                                show: ea && eu.menuType !== n(649476).gu.ActionSheet,
                                onDismiss: b,
                                inputRef: ep
                            })]
                        }) : (0, a.jsx)(n(636518).Ay, {
                            ref: d,
                            ...ei,
                            left: c,
                            right: u,
                            isTokenTitle: !0,
                            title: (0, a.jsx)(_, {
                                ref: ep,
                                disableInput: m,
                                inputOuterStyle: v,
                                inputRight: f,
                                inputRightStyle: g,
                                inputLeft: p,
                                ...ef
                            }),
                            style: { ...r,
                                ...S
                            }
                        })
                    })
                }),
                o = 30,
                l = 28;

            function d(e) {
                let {
                    icon: t
                } = e;
                return t({
                    fill: n(632079).Tj.icon.secondary,
                    width: n(104509).Ev.sm,
                    height: n(104509).Ev.sm,
                    flexGrow: 0,
                    flexShrink: 0
                })
            }
            let c = {
                    outlineButtonHovered: {
                        background: n(632079).Tj.background.secondary
                    }
                },
                u = (0, n(64960)._S)({
                    color: n(632079).Tj.background.primary
                });

            function p(e) {
                let t = (0, n(533992).WS)(),
                    i = (0, n(960253).I)(() => ({
                        outlineButton: { ...(0, n(64960).qq)({
                                shape: "default",
                                size: "sm",
                                hasIconOnly: !0,
                                isButtonGapEnabled: !0
                            }),
                            fontWeight: n(699422).Wy.medium,
                            lineHeight: 1.2,
                            border: `1px solid ${n(632079).Tj.border.primaryTranslucent}`,
                            background: e.hasBackground ? n(632079).Tj.background.primary : void 0
                        },
                        outlineButtonPressed: {
                            background: u.pressed
                        }
                    }), [e.hasBackground]);
                return (0, a.jsx)(n(374533).A, {
                    size: "xs",
                    colorVariant: "primary",
                    ...e,
                    ariaLabel: e.ariaLabel,
                    style: { ...i.outlineButton,
                        ...e.style,
                        height: t ? o : l,
                        width: t ? o : l
                    },
                    hoveredStyle: c.outlineButtonHovered,
                    pressedStyle: i.outlineButtonPressed
                })
            }
            let f = s,
                g = {
                    style0: {
                        color: n(632079).Tj.text.secondary
                    }
                };

            function m({
                rightMobileEditLabel: e,
                inputRef: t
            }) {
                let r = (0, n(533992).v3)(),
                    s = (0, i.useCallback)(e => {
                        e.preventDefault();
                        let i = t.current;
                        i && (0, n(862215).G)(r, i)
                    }, [r, t]);
                return (0, a.jsx)(n(64960).Ay, {
                    onClick: s,
                    style: g.style0,
                    children: e
                })
            }
            let _ = i.forwardRef(function(e, t) {
                    let {
                        disabled: i,
                        disableInput: r,
                        inputOuterStyle: s,
                        inputRight: o,
                        inputRightStyle: l,
                        inputLeft: d,
                        min: c,
                        textarea: u,
                        ...p
                    } = e;
                    return (0, a.jsx)(n(36481).p, { ...p,
                        ref: t,
                        disabled: i || r,
                        style: {
                            height: u ? void 0 : 28,
                            paddingTop: 3,
                            paddingBottom: 3,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...s
                        },
                        left: d,
                        right: o,
                        rightStyle: l,
                        min: c,
                        textarea: u
                    })
                }),
                v = {
                    fontSize: 16
                },
                h = i.forwardRef(function(e, t) {
                    let {
                        left: r,
                        right: s,
                        inputLeft: o,
                        inputRight: l,
                        inputRightStyle: d,
                        disableInput: c,
                        inputOuterStyle: u,
                        rightMobileEditLabel: p,
                        isFocused: f,
                        setIsFocused: g,
                        disabled: _,
                        showClearButton: h,
                        onBlur: y,
                        onFocus: b,
                        ...S
                    } = e, k = (0, i.useCallback)(e => {
                        g(!1), y && y(e)
                    }, [y, g]), x = (0, i.useCallback)(e => {
                        g(!0), b && b(e)
                    }, [b, g]), w = (0, i.useRef)(null), I = (0, n(421573).A)(w, t), A = p && !f ? (0, a.jsx)(m, {
                        rightMobileEditLabel: p,
                        inputRef: w
                    }) : null;
                    return (0, a.jsx)(n(36481).p, { ...S,
                        ref: I,
                        format: "transparent",
                        style: { ...v,
                            ...u
                        },
                        onFocus: x,
                        onBlur: k,
                        showClearButton: !1 !== h,
                        disabled: _ || c,
                        left: o || r,
                        right: A || l || s,
                        rightStyle: d
                    })
                })
        },
        321753: (e, t, n) => {
            n.d(t, {
                A: () => s,
                n: () => r
            });
            var i = n(296540),
                a = n(474848);

            function r(e) {
                return (0, n(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: n(632079).Tj.text.inverseSecondary
                    },
                    tooltipAvatarContainer: {
                        display: "flex",
                        alignItems: "center",
                        marginInlineEnd: 8
                    },
                    tooltipContainer: {
                        display: "flex",
                        flexDirection: "row",
                        padding: "4px 6px",
                        alignItems: "center",
                        ...e
                    },
                    tooltipUserInfoContainer: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    }
                }), [e])
            }
            let s = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: s,
                    tooltipHeader: o,
                    style: l,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: f,
                    tooltipOverrideStyle: g,
                    userValue: m,
                    userStore: _,
                    avatar: v,
                    type: h = "avatar",
                    delayThreshold: y,
                    hasPersonHoverCard: b,
                    personHoverCardEntrypoint: S = "avatar",
                    avatarOutlineOffset: k
                } = e, x = (0, n(109939).tz)(), w = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), I = (0, n(67499).S)(), A = (0, n(682985).K8)(() => (0, n(888).$)(I) ? ? w, [I, w]), C = e.size ? ? 18, {
                    initialStyle: M,
                    avatarWrapStyle: T,
                    avatarStyle: j,
                    proxiedImageStyle: E,
                    suspendedUserStyle: B,
                    deletedUserStyle: D
                } = (0, n(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${C}px`,
                        width: C,
                        height: C,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * C, 11),
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...f
                    },
                    avatarWrapStyle: {
                        background: n(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? n(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: n(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: k ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: C,
                        height: C,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: C,
                        height: C,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: C - 2,
                        height: C - 2,
                        overflow: "hidden",
                        background: n(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: C,
                        height: C,
                        overflow: "hidden",
                        background: n(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: n(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${n(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [f, p, u, c, C, d, k]), {
                    tooltipTextStyle: F,
                    tooltipAvatarContainer: P,
                    tooltipContainer: R,
                    tooltipUserInfoContainer: U
                } = r(g), N = (0, i.useMemo)(() => _ ? ? (m ? n(993189).Bj6.fromValue(n(832375).oo9, m) : void 0), [_, m]), L = (0, i.useMemo)(() => N instanceof n(807825).L ? N : A && N ? n(807825).L.createChildStore(A, {
                    id: N.id,
                    table: n(832375).oo9
                }) : void 0, [N, A]), O = (0, n(682985).K8)(() => null == N ? void 0 : N.getFullName(x), [N, x]), V = (0, n(682985).K8)(() => null == N ? void 0 : N.getDisplayName(x), [N, x]), z = (0, n(682985).K8)(() => null == N ? void 0 : N.getEmail(), [N]), W = (0, n(682985).K8)(() => null == N ? void 0 : N.getProfilePhoto(), [N]), $ = (0, n(682985).K8)(() => null == N ? void 0 : N.getIsSuspended(), [N]), K = (0, n(682985).K8)(() => null == N ? void 0 : N.getIsDeleted(), [N]), G = (0, n(525272).E)({
                    spaceStore: A,
                    viewedUserId: null == N ? void 0 : N.id
                }) && b, q = () => e.defaultAvatar ? ? (0, a.jsx)(n(16275).I, {
                    icon: n(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), H = (e, t, i) => {
                    if (!e) return q();
                    let r = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...i
                    };
                    return (0, a.jsx)(n(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: r,
                        placeholderStyle: r
                    })
                }, Y = e => (0, a.jsxs)("div", {
                    style: R,
                    children: [(0, a.jsx)("div", {
                        style: P,
                        children: X()
                    }), (0, a.jsxs)("div", {
                        style: U,
                        children: [N ? V : null == v ? void 0 : v.name, e ? void 0 : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("br", {}), N ? (0, a.jsx)("span", {
                                style: F,
                                children: z
                            }) : null != v && v.email ? (0, a.jsx)("span", {
                                style: F,
                                children: null == v ? void 0 : v.email
                            }) : null]
                        })]
                    })]
                }), Z = e => {
                    let t = n(871871).PE(e)[0].toUpperCase();
                    return (0, a.jsx)("div", {
                        style: T,
                        children: (0, a.jsx)("div", {
                            style: M,
                            children: (0, a.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, X = () => {
                    if ($ && N) return (0, a.jsx)("div", {
                        style: T,
                        children: (0, a.jsx)("div", {
                            style: B,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(67207).personSlashIcon,
                                size: C - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (K) return (0, a.jsx)("div", {
                        style: T,
                        children: (0, a.jsx)("div", {
                            style: D,
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (N) {
                        if (W) return (0, a.jsx)("div", {
                            style: j,
                            children: (0, a.jsx)(n(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: W,
                                isAuthenticated: !1,
                                width: Math.max(Number(E.width), 120),
                                render: (e, t) => H(t, O, T)
                            })
                        });
                        else if (O) return Z(O);
                        else if (z) return Z(z)
                    } else if (v) {
                        if (!v.type && v.avatarUrl) return (0, a.jsx)("div", {
                            style: T,
                            children: (0, a.jsx)("div", {
                                style: j,
                                children: H(v.avatarUrl, v.name)
                            })
                        });
                        else if (v.name) return Z(v.name);
                        else if (v.email) return Z(v.email)
                    }
                    return q()
                };
                switch (h) {
                    case "avatar":
                        {
                            let e = (0, a.jsx)("div", {
                                style: l,
                                children: X()
                            });
                            if (G && L && A) return (0, a.jsx)(n(532755).D, {
                                userStore: L,
                                spaceStore: A,
                                from: S,
                                children: e
                            });
                            if (t) return (0, a.jsx)(n(51831).m, {
                                content: () => s ? Y() : (0, a.jsxs)(a.Fragment, {
                                    children: [(0, a.jsx)("div", {
                                        children: o
                                    }), V, (0, a.jsx)("br", {}), N ? (0, a.jsx)("span", {
                                        style: F,
                                        children: z
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: y,
                                children: t => (0, a.jsx)("div", {
                                    style: l,
                                    "aria-label": V,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return Y("avatar-name" === h);
                    default:
                        (0, n(722371).HB)(h)
                }
            }
        },
        330942: (e, t, n) => {
            n.d(t, {
                Mt: () => c,
                RM: () => l,
                dC: () => r,
                f_: () => i().f_,
                ie: () => o,
                q1: () => a,
                sQ: () => u,
                uF: () => d
            }), n(813451), n(944114), n(898992), n(354520), n(737550);
            var i = () => n(706968);

            function a(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function r(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let s = /<lang\s+.*?>\s*/g;

            function o(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(s, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let n = "";
                    for (let i of e.value.slice(t))
                        if ("text" === i.type) n += i.content;
                        else break;
                    if (!s.exec(n)) return e;
                    let i = "",
                        a = t;
                    for (; a < e.value.length; a++) {
                        let t = e.value[a];
                        if ("text" === t.type) i += t.content;
                        else break
                    }
                    let r = [...e.value.slice(0, t), {
                        type: "text",
                        content: i.replace(s, "")
                    }, ...e.value.slice(a)];
                    return "text" === r[0].type && 0 === r[0].content.length && r.shift(), { ...e,
                        value: r
                    }
                }
                return e
            }

            function l(e, t) {
                let i = {};
                for (let t of e) "registered-tool-grouping" === t.type && (i[t.toolCallId] = t);
                let a = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = a.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let n = a[e];
                        if ("agent-transcript-summary" === n.type) {
                            let i = n.summary.trim().length > 0,
                                r = t.summary.trim().length > 0;
                            return i && !r || (a[e] = t), a
                        }
                    }
                    return a.push({ ...t
                    }), a
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, n(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) a.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else a.push({ ...t
                    })
                } else if ("search" === t.type) a = [...a.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e ? a[e] = t : a.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === a[e].type) {
                        let n = a[e];
                        a[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else a.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === a[e].type ? a[e] = t : a.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === a[e].type) {
                        let i = a[e];
                        a[e] = { ...i,
                            value: `${i.value}${t.value}`,
                            citationInfo: (0, n(177861).Mi)(i.citationInfo, t.citationInfo)
                        }
                    } else a.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = a.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === a[e].type ? a[e] = { ...a[e],
                        value: Object.assign(a[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : a.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = a.findIndex(e => e.id === t.id); - 1 !== e ? a[e] = { ...t
                    } : a.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = i[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, i[t.toolCallId] = e, a.push(e));
                    let n = { ...t
                    };
                    e.steps.push(n)
                } else if ("registered-tool-grouping" === t.type) i[t.toolCallId] || (i[t.toolCallId] = t, a.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id),
                        n = a[e];
                    (null == n ? void 0 : n.type) === t.type ? a[e] = { ...n,
                        operations: [...n.operations, ...t.operations]
                    } : a.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = a.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === a[e].type ? a[e] = { ...a[e],
                        value: t.value
                    } : a.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? a.push({ ...t
                }) : (0, n(722371).HB)(t);
                return a
            }
            let d = "inferenceTranscript";

            function c(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function u(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        346596: (e, t, n) => {
            n.d(t, {
                L: () => a,
                k: () => r
            });
            var i = n(296540);

            function a(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: a
                } = (0, n(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, i.useMemo)(() => {
                    if (t && a) return n(360851).N.createChildStore(a, {
                        table: n(43296).C,
                        id: t,
                        spaceId: a.id
                    })
                }, [t, a])
            }

            function r(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    i = n(728372).AppStoreSidebarSpaceStore.state;
                if (t && i) return n(360851).N.createChildStore(i, {
                    table: n(43296).C,
                    id: t,
                    spaceId: i.id
                })
            }
        },
        368678: (e, t, n) => {
            n.d(t, {
                P: () => s
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: n(632079).Tj.blue.text.accentPrimary,
                    fontWeight: n(699422).Wy.semibold
                }
            };

            function s(e) {
                let {
                    onDismiss: t,
                    inputRef: s
                } = e, o = (0, n(533992).Y0)(), l = (0, i.useRef)(null), d = o.isMobileNative && o.isIOS, c = d && e.show;
                (0, n(336494).b)(n(651748).A, () => ({
                    getNode: () => l.current,
                    isShown: () => c
                }), [c]);
                let u = (0, n(571354).n)(),
                    p = (0, i.useCallback)(() => {
                        var e;
                        null == s || null == (e = s.current) || e.focus(), t && t();
                        let n = document.activeElement;
                        n instanceof HTMLElement && n.blur()
                    }, [s, t]);
                if (!d) return null;
                let f = c ? -(n(247800).j + u) : 0;
                return (0, a.jsx)(n(114596).O, {
                    open: !0,
                    children: (0, a.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: n(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: n(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${f}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${n(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: l,
                        children: (0, a.jsx)(n(64960).Ay, {
                            style: r.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        375592: (e, t, n) => {
            n.d(t, {
                T: () => i
            });
            let i = new(n(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            n(202146).exposeDebugValue("ExternalOrgDataStore", i)
        },
        385149: (e, t, n) => {
            n.d(t, {
                H: () => i
            });

            function i() {
                let e = n(585823).ei.state;
                if (null != e && e.isTranscriptionBlock()) return e
            }
        },
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => c,
                I8: () => d,
                qw: () => l
            }), n(898992), n(354520), n(803949);
            let i = /[\u4E00-\u9FA5]/g,
                a = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                r = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                s = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                o = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function l(e) {
                return (0, n(381453).oE)(e.split(o))
            }

            function d(e) {
                return "none" === c(e) ? l(e).length : e.length
            }

            function c(e, t) {
                let n = !!e.match(s);
                return e.match(i) || e.match(a) || n ? n ? "ko" : e.match(r) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, n) => {
            function i(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return n(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function a(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => i({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => a,
                p: () => i
            })
        },
        392642: (e, t, n) => {
            n.d(t, {
                o: () => h
            }), n(898992), n(354520), n(672577), n(581454);
            var i = n(296540),
                a = () => n(546605);
            class r extends a().Store {
                getInitialState() {}
            }
            let s = new(n(815048)).O2("TranscriptionBlockCalendarAttendeesList", async () => Promise.all([n.e(75134), n.e(56809), n.e(21753), n.e(30603)]).then(n.bind(n, 815127))),
                o = (0, n(815048)._h)(s, e => e.TranscriptionBlockCalendarAttendeesList);
            n(737550);
            var l = n(474848);
            let d = (0, n(109939).YK)({
                openCalendar: {
                    id: "transcriptionBlockCalendarHeader.openCalendar",
                    defaultMessage: "Open in Notion Calendar"
                },
                shareWithParticipantsOn: {
                    id: "transcriptionBlockCalendarHeader.shareWithParticipantsOn",
                    defaultMessage: "Page will be shared with internal event participants"
                },
                shareWithParticipantsOff: {
                    id: "transcriptionBlockCalendarHeader.shareWithParticipantsOff",
                    defaultMessage: "Share page with internal event participants?"
                },
                shareWithParticipantsLocked: {
                    id: "transcriptionBlockCalendarHeader.shareWithParticipantsLocked",
                    defaultMessage: "You don’t have permission to share this page"
                }
            });

            function c() {
                return (0, l.jsx)(n(109939).sA, { ...d.openCalendar
                })
            }

            function u(e) {
                let {
                    isOn: t,
                    onToggle: a,
                    isLocked: r
                } = e, s = (0, i.useMemo)(() => (0, l.jsx)(n(16275).I, {
                    icon: t ? n(125040).personSmallIcon : n(262401).personSlashSmallIcon,
                    size: "sm",
                    colorVariant: "secondary"
                }), [t]), o = (0, i.useMemo)(() => (0, l.jsx)(n(111010).D, {
                    styleKey: n(986939).A.isMobile ? "captionXs" : "caption",
                    colorVariant: "secondary",
                    colorPalette: t && !r ? "blue" : "gray",
                    children: (0, l.jsx)(n(109939).sA, { ...t ? d.shareWithParticipantsOn : d.shareWithParticipantsOff
                    })
                }), [t, r]), c = (0, i.useMemo)(() => (0, l.jsx)(n(109939).sA, { ...d.shareWithParticipantsLocked
                }), []), u = (0, i.useMemo)(() => (0, l.jsx)(n(354491).d, {
                    on: t,
                    isLocked: r,
                    tooltip: r ? c : void 0
                }), [t, r, c]);
                return (0, l.jsx)(n(636518).Ay, {
                    icon: s,
                    title: o,
                    right: u,
                    shouldWrapTitle: !0,
                    onClick: r ? void 0 : a
                })
            }

            function p(e) {
                var t;
                let {
                    parent: a,
                    placeholderStore: r,
                    calendarSignupOnClick: s,
                    isCalendarSignupLoading: o
                } = e, {
                    store: d,
                    rootRef: c
                } = (0, n(308240).s)(), p = (0, n(729787).wY)(c), f = (0, n(533992).v3)(), g = (0, n(67499).S)(), m = (0, n(109939).tz)(), _ = (0, n(583124).V)(), v = (0, n(682985).K8)(() => {
                    var e;
                    return (null == (e = d.getNavigableBlockStore()) ? void 0 : e.canAdmin()) ? ? !1
                }, [d]), [h, y] = (0, i.useState)(""), [b, S] = (0, i.useState)(_), k = (0, n(682985).K8)(() => {
                    var e;
                    return null == (e = d.getFormat()) ? void 0 : e.transcription_calendar_event
                }, [d]);
                (0, n(383953).w)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "meeting_notes_calendar_header_dropdown_opened",
                            eventProperties: {
                                block_id: d.id,
                                has_linked_event: !!k
                            }
                        }
                    })
                });
                let x = function(e) {
                        let {
                            shareWithParticipants: t,
                            showPastEvents: i,
                            source: a,
                            calendarSignupOnClick: r,
                            isCalendarSignupLoading: s
                        } = e, {
                            displayState: o,
                            isRetryEventLoadingEnabled: l,
                            retryEventLoading: d
                        } = (0, n(24962).O)("upcoming_meetings"), c = (0, n(682985).K8)(() => (0, n(440143).Y)().getEvents(), []), u = (0, n(980553).z)();
                        return (0, n(682985).K8)(() => {
                            switch (o) {
                                case "loading":
                                    return [(0, n(631783).SB)()];
                                case "signedOut":
                                case "disconnectedAccount":
                                case "missingScopes":
                                    return [(0, n(631783).OB)({
                                        onClick: r,
                                        isLoading: s
                                    })];
                                case "loadError":
                                    return [(0, n(631783).mk)({
                                        onRetry: l ? d : void 0
                                    })];
                                case "noEvents":
                                case "events":
                                    return u ? [(0, n(631783).rG)()] : [...(0, n(631783).Pi)({
                                        showPastEvents: i,
                                        shareWithParticipants: t,
                                        source: a,
                                        events: c
                                    }), (0, n(631783).XA)()]
                            }
                        }, [o, u, i, t, a, c, l, d, r, s])
                    }({
                        shareWithParticipants: b,
                        showPastEvents: !!h,
                        source: "headerDropdown",
                        calendarSignupOnClick: s,
                        isCalendarSignupLoading: o
                    }),
                    w = (0, i.useMemo)(() => ({
                        environment: f,
                        blocks: [d],
                        publicEditMode: void 0,
                        analyticsFrom: "meeting_notes_block_actions",
                        pageContext: g
                    }), [f, d, g]),
                    I = (0, i.useCallback)(e => {
                        e.displayName && "string" == typeof e.key && e.key.startsWith(`action ${n(631783).xN}`) && r.setState(e.displayName)
                    }, [r]),
                    A = (0, i.useCallback)(e => {
                        y(e.target.value)
                    }, []),
                    C = (0, i.useCallback)(() => {
                        S(e => !e), (0, n(104310).u)({
                            event: {
                                eventName: "meeting_notes_calendar_header_share_toggled",
                                eventProperties: {
                                    block_id: d.id,
                                    new_value: !b
                                }
                            }
                        })
                    }, [d.id, b]),
                    M = (0, i.useMemo)(() => x.some(e => "string" == typeof e.key && e.key.startsWith(n(631783).xN)), [x]),
                    T = (0, i.useMemo)(() => (0, l.jsx)(u, {
                        isOn: b,
                        onToggle: C,
                        isLocked: !v
                    }), [b, C, v]),
                    j = (0, i.useCallback)(e => {
                        e.closeParentMenu && a.close()
                    }, [a]);
                return (0, l.jsxs)(n(747369).A, {
                    menuType: n(649476).gu.Popup,
                    width: M ? 375 : 250,
                    maxWidth: ((null == p ? void 0 : p.width) ? ? (null == (t = c.current) ? void 0 : t.offsetWidth) ? ? 250) - 25,
                    maxHeight: 300,
                    footer: M ? T : void 0,
                    children: [M ? (0, l.jsx)(n(844565).A, {
                        isInput: !0,
                        children: (0, l.jsx)(n(310324).Ay, {
                            value: h,
                            onChange: A,
                            focus: !0,
                            placeholder: m.formatMessage({
                                defaultMessage: "Link a calendar event…",
                                id: "transcriptionBlockCalendarHeader.searchCalendarEvents.placeholder"
                            }),
                            inputLeft: (0, l.jsx)(n(16275).I, {
                                icon: n(921048).magnifyingGlassSmallIcon,
                                size: "sm",
                                colorVariant: "secondary"
                            }),
                            showClearButton: !0
                        })
                    }) : void 0, (0, l.jsx)(n(530500).A, {
                        context: w,
                        sections: x,
                        filter: h,
                        initialFocus: 0,
                        showNoResultsMessage: !0,
                        onAccept: j,
                        onFocus: I
                    })]
                })
            }
            let f = {
                container: {
                    marginTop: 4,
                    alignSelf: "flex-start"
                },
                button: {
                    width: "auto",
                    height: "auto"
                },
                icon: {
                    width: 24,
                    height: 24,
                    color: n(632079).Tj.text.primary
                }
            };

            function g(e) {
                return (0, l.jsx)(n(748713).U, {
                    from: "transcriptionBlockCalendarButton",
                    provider: "auto",
                    children: ({
                        isLoading: t,
                        onClick: n
                    }) => (0, l.jsx)(m, { ...e,
                        calendarSignupOnClick: n,
                        isCalendarSignupLoading: t
                    })
                })
            }

            function m(e) {
                let {
                    calendarEvent: t,
                    onClick: a,
                    placeholderStore: r,
                    calendarSignupOnClick: s,
                    isCalendarSignupLoading: o
                } = e, u = (0, n(109939).tz)(), {
                    store: g,
                    canEdit: m
                } = (0, n(308240).s)(), {
                    selectedTabType: _
                } = (0, n(778792).S)(g), v = (0, n(311932).m)(), h = (0, i.useCallback)(() => (0, l.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    gap: 2,
                    margin: 2,
                    children: [(0, l.jsx)(n(968107).y, {
                        style: f.icon,
                        dateNumber: null == t ? void 0 : t.startTime.day
                    }), (0, l.jsx)(n(16275).I, {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    })]
                }), [null == t ? void 0 : t.startTime.day]), y = (0, i.useCallback)(e => (0, l.jsx)(p, {
                    parent: e,
                    placeholderStore: r,
                    calendarSignupOnClick: s,
                    isCalendarSignupLoading: o
                }), [r, s, o]), b = (0, i.useCallback)(e => (0, l.jsx)(n(374533).A, { ...e,
                    icon: h,
                    ariaLabel: u.formatMessage(d.openCalendar),
                    style: f.button
                }), [h, u]), S = (0, i.useCallback)(() => {
                    r.setState(void 0), "notes" === _ && (0, n(979261).W)(g, "notes")
                }, [g, _, r]), k = (0, i.useCallback)(e => (0, l.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    content: y,
                    originGap: 4,
                    onClosed: S,
                    keepFocus: !0,
                    ...e,
                    children: b
                }), [y, b, S]);
                return v && m ? (0, l.jsx)(n(51831).m, {
                    content: c,
                    children: k
                }) : (0, l.jsx)(n(51831).m, {
                    content: () => (0, l.jsx)(n(109939).sA, { ...d.openCalendar
                    }),
                    children: e => (0, l.jsx)("div", { ...e,
                        style: f.container,
                        children: (0, l.jsx)(n(374533).A, {
                            icon: () => (0, l.jsx)(n(968107).y, {
                                style: f.icon,
                                dateNumber: null == t ? void 0 : t.startTime.day
                            }),
                            ariaLabel: u.formatMessage(d.openCalendar),
                            onClick: a
                        })
                    })
                })
            }
            let _ = {
                    display: "flex",
                    flexDirection: "column",
                    gap: 6,
                    width: "100%"
                },
                v = {
                    display: "block",
                    minWidth: 0
                };

            function h(e) {
                let {
                    calendarEvent: t,
                    title: a
                } = e, s = (0, n(533992).v3)(), o = (0, n(682985).uB)(void 0, r), {
                    canEdit: d,
                    store: c
                } = (0, n(308240).s)(), u = (0, n(311932).m)(), p = (0, n(960253).I)(() => ({
                    group: {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: u ? 4 : 8
                    }
                }), [u]), f = (0, i.useCallback)(e => {
                    if (e.preventDefault(), e.stopPropagation(), t) {
                        (0, n(104310).u)({
                            event: {
                                eventName: "meeting_notes_calendar_header_title_clicked",
                                eventProperties: {
                                    block_id: c.id
                                }
                            }
                        });
                        let e = (0, n(338901).i$)({
                            eventUid: t.uid,
                            startTimeIso: t.startTime.toISO()
                        });
                        n(874809).yd({
                            baseUrl: e,
                            environment: s,
                            from: "transcriptionBlockTitle"
                        })
                    }
                }, [s, t, c.id]);
                return (0, l.jsxs)(n(385827).s, {
                    allowSelectionWithin: !0,
                    style: _,
                    children: [(0, l.jsxs)("div", {
                        style: p.group,
                        children: [t || d ? (0, l.jsx)(g, {
                            calendarEvent: t,
                            onClick: f,
                            placeholderStore: o
                        }) : void 0, (0, l.jsx)("div", {
                            style: v,
                            children: t ? (0, l.jsx)(y, {
                                calendarEvent: t,
                                title: a,
                                onClick: f
                            }) : (0, l.jsx)(n(445899).C, {
                                title: a,
                                placeholderStore: o
                            })
                        })]
                    }), (0, l.jsx)(j, {})]
                })
            }

            function y(e) {
                return (0, n(311932).m)() ? (0, l.jsx)(M, { ...e
                }) : (0, l.jsx)(x, { ...e
                })
            }
            let b = {
                    display: "inline"
                },
                S = {
                    background: "transparent"
                },
                k = {
                    cursor: "pointer",
                    display: "inline",
                    marginInlineEnd: 8
                };

            function x(e) {
                let {
                    calendarEvent: t,
                    title: i,
                    onClick: a
                } = e, {
                    hideContent: r
                } = (0, n(308240).s)(), s = (0, n(338901).i$)({
                    eventUid: t.uid,
                    startTimeIso: t.startTime.toISO()
                });
                return (0, l.jsxs)(n(590422).Q, {
                    href: s,
                    style: b,
                    hoveredStyle: S,
                    pressedStyle: S,
                    children: [(0, l.jsx)(n(445899).C, {
                        disabled: !0,
                        onClick: a,
                        title: i,
                        style: k
                    }), r ? null : (0, l.jsx)(o, {
                        calendarEvent: t
                    })]
                })
            }
            let w = {
                    display: "block",
                    overflow: "hidden",
                    minWidth: 0
                },
                I = {
                    background: "transparent"
                },
                A = {
                    flex: "1 1 auto",
                    minWidth: 0,
                    overflow: "hidden"
                },
                C = {
                    cursor: "pointer",
                    display: "block",
                    marginInlineEnd: 8,
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis"
                };

            function M(e) {
                let {
                    calendarEvent: t,
                    title: a,
                    onClick: r
                } = e, {
                    hideContent: s
                } = (0, n(308240).s)(), d = (0, i.useRef)(null), c = (0, n(729787).wY)(d), [u, p] = (0, i.useState)(!1), [f, g] = (0, i.useState)(0);
                (0, i.useEffect)(() => {
                    d.current && !u && g(d.current.scrollWidth)
                }, [d, u]);
                let m = (0, n(338901).i$)({
                        eventUid: t.uid,
                        startTimeIso: t.startTime.toISO()
                    }),
                    _ = d.current && (null == c ? void 0 : c.width) !== void 0 && Math.round(c.width) < f,
                    v = _ && (u || n(986939).A.isMobile),
                    h = (0, i.useMemo)(() => {
                        if (!_ || v) return;
                        let e = "linear-gradient(90deg, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)";
                        return {
                            WebkitMaskImage: e,
                            maskImage: e,
                            WebkitMaskSize: "100% 100%",
                            maskSize: "100% 100%"
                        }
                    }, [_, v]),
                    y = (0, i.useCallback)(() => {
                        p(!0)
                    }, []),
                    b = (0, i.useCallback)(() => {
                        p(!1)
                    }, []),
                    S = (0, l.jsx)(n(445899).C, {
                        disabled: !0,
                        onClick: r,
                        title: a,
                        style: C
                    });
                return (0, l.jsx)(n(590422).Q, {
                    href: m,
                    style: w,
                    hoveredStyle: I,
                    pressedStyle: I,
                    children: (0, l.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        gap: 8,
                        minWidth: 0,
                        children: [(0, l.jsx)("div", {
                            style: { ...A,
                                ...h
                            },
                            onMouseEnter: y,
                            onMouseLeave: b,
                            children: (0, l.jsx)("div", {
                                ref: d,
                                children: v ? (0, l.jsx)(n(218116)._, {
                                    showFadeout: !0,
                                    children: S
                                }) : S
                            })
                        }), s ? null : (0, l.jsx)(n(4458).fI, {
                            alignItems: "center",
                            justifyContent: "flex-end",
                            flex: "1 0 auto",
                            minWidth: 0,
                            marginInlineStart: 4,
                            children: (0, l.jsx)(o, {
                                calendarEvent: t
                            })
                        })]
                    })
                })
            }
            let T = {
                actionRow: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 6,
                    flexWrap: "wrap",
                    color: n(632079).Tj.text.secondary
                },
                button: {
                    height: 24,
                    borderRadius: 6
                }
            };

            function j() {
                let {
                    store: e
                } = (0, n(308240).s)(), t = (0, n(533992).v3)(), a = (0, n(980553).z)(), r = (0, i.useMemo)(() => (null == a ? void 0 : a.attendeeIds) ? ? [], [a]), s = (0, i.useMemo)(() => (null == a ? void 0 : a.externalAttendees) ? ? [], [a]), o = (0, n(201910).G)(r), d = (0, n(682985).K8)(() => !(0, n(865768).Aj)({
                    store: e
                }), [e]), c = (0, i.useCallback)(() => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "meeting_notes_calendar_header_share_suggestion_clicked",
                            eventProperties: {
                                block_id: e.id,
                                action: "dismiss"
                            }
                        }
                    }), (0, n(3553).FP)({
                        environment: t,
                        store: e
                    })
                }, [t, e]), u = (0, n(67499).S)(), p = (0, n(682985).K8)(() => {
                    let e = null == u ? void 0 : u.spaceStore;
                    if (!e) return [];
                    let i = ((null == a ? void 0 : a.attendeeIds) ? ? []).map(t => n(807825).L.createChildStore(e, {
                        table: "notion_user",
                        id: t
                    })).filter(e => e.isReady() && e.isDefined());
                    return [i.find(e => e.id === t.currentUser.id), ...i.filter(e => e.id !== t.currentUser.id)].filter(n(722371).O9)
                }, [a, t.currentUser.id, u]);
                return (0, n(682985).K8)(() => {
                    var t;
                    if (!a || !Object.values(o).includes("none") || !a || (null == (t = e.getFormat()) || null == (t = t.transcription_calendar_event) ? void 0 : t.has_dismissed_sharing)) return !1;
                    let n = e.getNavigableBlockStore();
                    return !!(null != n && n.isDefined()) && !!n.canEditMembership() && 0 !== p.length && !d
                }, [a, e, o, p, d]) ? (0, l.jsxs)("div", {
                    style: T.actionRow,
                    children: [(0, l.jsx)(n(111010).D, {
                        styleKey: "bodyMedium",
                        children: (0, l.jsx)(n(109939).sA, {
                            id: "transcriptionBlock.addCalendarEventSuggestion.shareLabel",
                            defaultMessage: "Share this page with event participants?"
                        })
                    }), (0, l.jsxs)(n(4458).fI, {
                        alignItems: "center",
                        children: [(0, l.jsx)(n(118633).s, {
                            children: t => (0, l.jsx)(n(988022).p, { ...t,
                                onClick: i => {
                                    (0, n(104310).u)({
                                        event: {
                                            eventName: "meeting_notes_calendar_header_share_suggestion_clicked",
                                            eventProperties: {
                                                block_id: e.id,
                                                action: "share"
                                            }
                                        }
                                    }), t.onClick(i)
                                },
                                style: T.button,
                                colorPalette: "gray",
                                children: (0, l.jsx)(n(109939).sA, {
                                    id: "transcriptionBlock.addCalendarEventShareSuggestion.shareAcceptButton",
                                    defaultMessage: "Share"
                                })
                            }),
                            users: p,
                            externalAttendees: s,
                            rolesMap: o
                        }), (0, l.jsx)(n(988022).p, {
                            onClick: c,
                            style: T.button,
                            colorPalette: "gray",
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "transcriptionBlock.addCalendarEventShareSuggestion.dismissButton",
                                defaultMessage: "Dismiss"
                            })
                        })]
                    })]
                }) : null
            }
        },
        396935: (e, t, n) => {
            n.d(t, {
                F: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 21 20",
                    fittedViewBox: "-0.01 2.12 20.29 15.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m4.004 10.548.76-.76A.875.875 0 1 1 6 11.025l-2.254 2.254a.875.875 0 0 1-1.237 0L.256 11.025a.875.875 0 0 1 1.238-1.237l.76.76V10a7.875 7.875 0 0 1 13.234-5.77.875.875 0 0 1-1.192 1.281A6.125 6.125 0 0 0 4.003 10zm14-1.096.76.76A.875.875 0 1 0 20 8.976l-2.254-2.254a.875.875 0 0 0-1.237 0l-2.254 2.254a.875.875 0 0 0 1.238 1.238l.76-.76V10A6.125 6.125 0 0 1 5.96 14.489a.875.875 0 1 0-1.19 1.282A7.875 7.875 0 0 0 18.004 10z"
                    })
                },
                a = (0, n(104509).wt)("arrowCircleLoopBackwardFill", i, "fill")
        },
        397900: (e, t, n) => {
            n.r(t), n.d(t, {
                ellipsisIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 8.62 14.76 2.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 11.375a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75m6 0a1.375 1.375 0 1 0 0-2.75 1.375 1.375 0 0 0 0 2.75"
                    })
                },
                a = (0, n(104509).wt)("ellipsis", i, "default")
        },
        407998: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    billingData: a,
                    externalOrgSummary: r
                } = e;
                return (0, n(192159).N8)(a) ? "sales_assisted" : i && (0, n(208117).H)({
                    environment: t,
                    externalOrgSummary: r,
                    spaceStore: i,
                    billingData: a
                }) && !(0, n(556306).h)(i) ? "sales_eligible" : "self_serve"
            }
        },
        408138: (e, t, n) => {
            n.d(t, {
                X: () => i
            });
            let i = n(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        425749: (e, t, n) => {
            n.d(t, {
                I$: () => s,
                R2: () => d,
                WF: () => l,
                bZ: () => o,
                cE: () => a,
                jX: () => r,
                rz: () => c
            });
            var i = () => n(381453);

            function a(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let r = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function s(e) {
                return !!(void 0 !== e && (0, n(722371).Xk)(r, e))
            }

            function o() {
                let e = (0, n(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: n(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, n(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function l(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (i().n4(e, t)) return !0;
                return !1
            }
        },
        429946: (e, t, n) => {
            n.d(t, {
                B: () => i
            });

            function i() {
                return (0, n(682985).K8)(() => {
                    var e;
                    let t = n(381453).$z((null == (e = (0, n(440143).Y)()) || null == (e = e.getHomeCalendarStateForSpaceView()) ? void 0 : e.accounts) ? ? [], ({
                        authorized: e
                    }) => String(e));
                    return {
                        connectedAccounts: t.true ? ? [],
                        disconnectedAccounts: t.false ? ? []
                    }
                }, [], {
                    equalityFn: n(381453).n4
                })
            }
        },
        435276: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(972740).L)(),
                    {
                        spaceId: a,
                        spaceName: r
                    } = (0, n(682985).K8)(() => i ? {
                        spaceId: i.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, i)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, i]),
                    [{
                        value: s,
                        status: o
                    }] = (0, n(97668).Yb)(async () => {
                        if (!a) return;
                        let i = await (0, n(124094).E)(t, a, e);
                        if (i) return r && (0, n(124094).Z)({
                            environment: t,
                            spaceName: r,
                            campaign: i,
                            entrypoint: e
                        }), i
                    }, [t, a, r, e]);
                return {
                    campaign: s,
                    loading: "pending" === o || "idle" === o
                }
            }
        },
        445899: (e, t, n) => {
            n.d(t, {
                C: () => l
            });
            var i = n(296540),
                a = n(474848);
            let r = Object.freeze({
                    property: !0
                }),
                s = (0, n(109939).YK)({
                    meetingTitleRoledescription: {
                        defaultMessage: "meeting title",
                        id: "transcriptionBlockHeading.meetingTitleRoledescription"
                    }
                }),
                o = {
                    display: "-webkit-box",
                    WebkitBoxOrient: "vertical",
                    WebkitLineClamp: 1
                };

            function l(e) {
                let {
                    disabled: t = !1,
                    onClick: l,
                    title: d,
                    style: c,
                    placeholderStore: u
                } = e, {
                    store: p,
                    titleId: f
                } = (0, n(308240).s)(), {
                    selectedTabType: g
                } = (0, n(778792).S)(p), m = (0, n(109939).tz)(), _ = (0, n(682985).K8)(() => p.getBlockTitleStore(), [p]), v = (0, n(311932).m)(), h = (0, n(682985).O$)(u), y = v ? h ? ? m.formatMessage(n(386651).i.placeholder) : m.formatMessage(n(386651).i.placeholder), b = (0, n(960253).I)(() => ({
                    title: {
                        margin: 0,
                        fontSize: n(986939).A.isMobile ? "1.125em" : "1.375em",
                        fontWeight: n(699422).Wy.semibold,
                        lineHeight: 1.3,
                        padding: 0,
                        color: n(632079).Tj.text.primary,
                        cursor: "text",
                        ...c
                    }
                }), [c]), S = (0, i.useCallback)(() => {
                    "notes" === g && (0, n(979261).W)(p, "notes")
                }, [g, p]);
                return d ? (0, a.jsx)(n(28111).A, {
                    name: "TranscriptionBlockHeading",
                    children: (0, a.jsx)("div", {
                        id: f,
                        style: b.title,
                        children: d
                    })
                }) : (0, a.jsx)(n(28111).A, {
                    name: "TranscriptionBlockHeading",
                    children: (0, a.jsx)(n(53373).A, {
                        id: f,
                        tagName: "h2",
                        style: b.title,
                        placeholderStyle: o,
                        store: _,
                        inPageFind: n(831719).Os.block_match,
                        placeholder: y,
                        onClick: l,
                        onBlur: S,
                        disabled: t,
                        disableEnter: !0,
                        disableSlashCommands: !0,
                        pasteBehavior: "inline",
                        disabledMentionTypes: r,
                        "aria-roledescription": m.formatMessage(s.meetingTitleRoledescription)
                    })
                })
            }
        },
        464515: (e, t, n) => {
            n.d(t, {
                z: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    blockStore: i,
                    insertedTextBlockLocation: a,
                    editSelection: r,
                    getRectFromStore: s
                } = e, o = n(764615).Ay.state;
                if (r({
                        environment: t,
                        store: i
                    }), (0, n(940763).e)({
                        store: i.getBlockTitleStore()
                    }), !o.open && !t.device.isPhone) {
                    let e = i.getBlockTitleStore(),
                        r = s(i),
                        o = n(92513).JW();
                    r && (n(764615).Ay.setState({
                        id: o,
                        open: !0,
                        isAddMenu: !0,
                        collapsed: !0,
                        textStore: e,
                        oldTextValue: e.getValue(),
                        oldSelection: {
                            startIndex: 0,
                            endIndex: 0
                        },
                        selectionRect: r,
                        lettersAtLastResult: 0,
                        filter: "",
                        temporaryInputDataStore: n(546605).Store.createValue(void 0, {
                            name: "temporaryInputData"
                        }),
                        insertedTextBlockLocation: a
                    }), (0, n(525779).clear)({
                        environment: t
                    }), (0, n(940763).e)({
                        store: e
                    }), (0, n(104310).u)({
                        event: {
                            eventName: "open_slash_menu",
                            eventProperties: {
                                id: o,
                                source: "add_button"
                            }
                        }
                    }))
                }
            }
        },
        476719: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personFillSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                a = (0, n(104509).wt)("personFillSmall", i, "fillSmall")
        },
        477870: (e, t, n) => {
            n.d(t, {
                L: () => i
            });
            let i = new(n(227586)).n((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, t) => {
                let i = await e.api.callApi({
                        eventName: "getAllUpgradeRequestsForSpace",
                        environment: e,
                        data: t
                    }),
                    a = [{
                        key: (0, n(568479).VI)(t),
                        version: -1
                    }];
                return "success" === i.type ? {
                    value: i.data.requests,
                    dependencies: i.data.dependencies ? ? a
                } : void 0
            })
        },
        496722: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i() {
                let e = n(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        497857: (e, t, n) => {
            n.d(t, {
                h: () => a
            }), n(296540);
            var i = n(474848);

            function a() {
                return (0, i.jsx)(n(16275).I, {
                    icon: n(746204).w,
                    size: "lg",
                    colorVariant: "primary"
                })
            }
        },
        503473: (e, t, n) => {
            n.d(t, {
                j: () => s
            });
            var i = n(296540),
                a = n(474848);
            let r = {
                khDVqt: "xuxw1ft",
                kXHlph: "x6ikm8r",
                kORKVm: "x10wlt62",
                kg5iWk: "xlyipyv",
                $$css: !0
            };

            function s(e) {
                let {
                    children: t,
                    style: s,
                    overlayContainerZIndex: o,
                    placement: l = "bottom",
                    tooltipStyle: d
                } = e, {
                    isSafari: c
                } = (0, n(533992).Y0)(), u = (0, i.useRef)(null), p = function(e) {
                    let [t, n] = (0, i.useState)(!1);
                    return (0, i.useEffect)(() => {
                        let {
                            current: t
                        } = e;
                        if (!t) return void n(!1);
                        let i = "ResizeObserver" in window ? new ResizeObserver(([e]) => {
                            n(e.target.scrollWidth > e.target.clientWidth)
                        }) : void 0;
                        return null == i || i.observe(t), () => null == i ? void 0 : i.unobserve(t)
                    }, []), t
                }(u);
                return (0, a.jsx)(n(51831).m, {
                    delayThreshold: 500,
                    placement: l,
                    textWrap: !0,
                    style: d,
                    overlayContainerZIndex: o,
                    forceVisibleState: !!p && void 0,
                    disableTooltip: c,
                    content: () => p ? t : void 0,
                    children: e => (0, a.jsx)("div", {
                        ref: u,
                        ...n(952687).A.props(r, s),
                        ...e,
                        children: t
                    })
                })
            }
        },
        523144: (e, t, n) => {
            n.d(t, {
                Vj: () => r,
                ax: () => s,
                iI: () => o,
                iw: () => a,
                u3: () => i,
                uJ: () => l,
                zw: () => d
            }), n(898992), n(354520), n(581454), n(737550);
            let i = "–",
                a = " ";

            function r({
                start: e,
                end: t,
                locale: o,
                timeZone: l
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
                    p = s({
                        time: d,
                        showAmPm: u,
                        locale: o,
                        timeZone: l
                    }),
                    f = s({
                        time: c,
                        showAmPm: !0,
                        locale: o,
                        timeZone: l
                    });
                return `${p}${a}${i}${a}${f}`
            }

            function s({
                time: e,
                showAmPm: t,
                locale: i,
                timeZone: r
            }) {
                let l = o(i),
                    d = 0 !== e.minute || !l,
                    c = { ...n(906745).DateTime.TIME_SIMPLE,
                        hour: "numeric",
                        minute: d ? "2-digit" : void 0,
                        timeZone: (0, n(25825).lW)(r)
                    };
                return l && !t ? e.setLocale(i).toLocaleParts(c).filter(e => "dayPeriod" !== e.type).map(e => e.value.trim()).join("") : e.toLocaleString({ ...c,
                    hour12: l
                }, {
                    locale: i
                }).replace(" ", a)
            }
            let o = (0, n(381453).Bj)(function(e) {
                return n(906745).DateTime.fromObject({
                    hour: 13
                }).setLocale(e).toLocaleParts(n(906745).DateTime.TIME_SIMPLE).some(e => "dayPeriod" === e.type)
            });

            function l({
                time: e,
                locale: t,
                timeZone: i
            }) {
                let r = o(t);
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
        525272: (e, t, n) => {
            n.d(t, {
                E: () => i
            });

            function i(e) {
                let {
                    spaceStore: t,
                    viewedUserId: i
                } = e, a = (0, n(533992).v3)(), r = (0, n(993077).nB)(t), s = (0, n(993077).V_)({
                    spaceStore: t,
                    userId: i
                }), o = (0, n(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, n(455221).e)(a, e) && "control" !== n(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [a, t]);
                return (0, n(682985).K8)(() => (0, n(62694).V)({
                    spaceStore: t,
                    actorRole: r,
                    viewedRole: s,
                    shouldShowForExternalUsers: o
                }), [t, r, s, o])
            }
        },
        530500: (e, t, n) => {
            n.d(t, {
                A: () => l
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                a = () => n(124858),
                r = n(474848);

            function s(e) {
                return (0, r.jsx)(n(844565).A, { ...e
                })
            }
            let o = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function l({
                topBorder: e,
                context: t,
                onAccept: d,
                onFocus: c,
                empty: u,
                keyboardPriority: p,
                disableKeyboard: f,
                initialFocus: g,
                onEmptyEnter: m,
                comboboxProps: _,
                useLimit: v,
                filter: h,
                sections: y,
                menuListStore: b,
                resetInitialFocusOnSectionChangeAlways: S,
                resetFocusOnMouseOut: k,
                role: x,
                showNoResultsMessage: w,
                onFooterEnter: I,
                filterSections: A,
                flattenSectionsOnSearch: C,
                renderItemStyles: M,
                shouldShowBlockTypeTitle: T
            }) {
                let j = (0, n(682985).uB)(void 0, o),
                    E = (0, n(682985).uB)(b, n(419110).$),
                    B = !!(C && h),
                    {
                        visibleActionSections: D,
                        actionsCount: F,
                        allActionSections: P,
                        flatActions: R
                    } = (0, n(682985).K8)(() => {
                        let e = h && A ? A : y;
                        if (B) {
                            let i = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: h || "",
                                shouldShowBlockTypeTitle: T
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: i.length,
                                allActionSections: [],
                                flatActions: v ? i.slice(0, j.state) : i
                            }
                        }
                        let i = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: h || "",
                                shouldShowBlockTypeTitle: T
                            }),
                            a = 0;
                        for (let e of i) a += e.actions.length;
                        return {
                            visibleActionSections: v ? (0, n(173231).Le)(i, j.state) : i,
                            actionsCount: a,
                            allActionSections: i,
                            flatActions: void 0
                        }
                    }, [y, t, h, v, j, A, T, B]);
                (0, i.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === F)
                }, [F]);
                let U = (0, i.useRef)(h),
                    N = (0, i.useCallback)(e => {
                        e < 200 && j.state < F && j.setState(j.state + 25)
                    }, [j, F]),
                    L = (0, i.useMemo)(() => {
                        let e = new Map;
                        for (let t of P)
                            if (t.key !== a().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [P]),
                    {
                        menuItemActionMap: O,
                        menuItemSectionKeyMap: V,
                        menuListSections: z
                    } = (0, i.useMemo)(() => {
                        let i = new Map,
                            o = new Map;

                        function l(e, r) {
                            let s = null == r ? void 0 : r.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let l = {
                                key: e.key,
                                render: (n, i) => {
                                    let o = (null == r ? void 0 : r.key) === a().IZ ? L.get(e.key) : null == r ? void 0 : r.title,
                                        l = B || (null == r ? void 0 : r.key) === a().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == d || d(e, t, n, s)
                                        },
                                        onFocus: i.onFocus,
                                        sectionTitle: o,
                                        extendItemTitle: l,
                                        styles: M
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return i.set(l, e), o.set(l, s), l
                        }
                        return B ? {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: o,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, r.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == R ? void 0 : R.map(e => l(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: o,
                            menuListSections: D.map(t => {
                                let n = t.render ? ? s;
                                return {
                                    key: t.key,
                                    render: i => n({ ...i,
                                        topBorder: 0 !== i.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => l(e, t))
                                }
                            })
                        }
                    }, [D, B, e, L, t, M, d, R]);
                (0, i.useEffect)(() => {
                    if (h !== U.current && 0 === g) {
                        if (U.current = h, I && 0 === F) return n(163657).rd({
                            store: E
                        });
                        E.setState({ ...E.state,
                            focus: {
                                section: 0,
                                indexLocal: 0,
                                indexGlobal: 0,
                                footerFocused: !1
                            }
                        })
                    }
                }, [h, g, F, E, I]);
                let W = (0, i.useCallback)((e, n) => {
                        if (d) {
                            let a = O.get(e),
                                r = V.get(e);
                            if (a) {
                                var i;
                                if (null != (i = a.isDisabled) && i.call(a, t)) return;
                                d(a, t, n.event, r, n.index)
                            }
                        }
                    }, [d, t, O, V]),
                    $ = (0, i.useCallback)(e => {
                        let i;
                        if (e.indexLocal && (i = n(130711).SG(e.indexLocal, z)), e.indexGlobal) {
                            var a;
                            i = null == (a = n(130711).e7(e.indexGlobal, z)) ? void 0 : a.item
                        }
                        if (!i) return;
                        let r = O.get(i),
                            s = V.get(i);
                        r && (null == c || c(r, t, s))
                    }, [O, V, c, z, t]),
                    K = F > 0;
                return (0, r.jsxs)(r.Fragment, {
                    children: [w && !K ? (0, r.jsx)(n(844565).A, {
                        children: (0, r.jsx)(n(498341).u, {
                            title: u || (0, r.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, r.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: x,
                        priority: p,
                        store: E,
                        disableKeyboard: f,
                        sections: z,
                        initialFocus: g,
                        onEmptyEnter: m,
                        onAccept: W,
                        onFocus: $,
                        comboboxProps: _,
                        resetInitialFocusOnSectionChangeAlways: S,
                        resetFocusOnMouseOut: k,
                        onFooterEnter: I
                    }), v ? (0, r.jsx)(n(636255).A, {
                        onChange: N
                    }) : void 0]
                })
            }
        },
        532755: (e, t, n) => {
            n.d(t, {
                D: () => r
            });
            var i = n(296540),
                a = n(474848);

            function r({
                userStore: e,
                suppressMouse: t,
                children: s,
                spaceStore: o,
                width: l,
                from: d = "unknown"
            }) {
                let c = (0, i.useRef)(null),
                    u = (0, n(525272).E)({
                        spaceStore: o,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, n(83208).X)("prefetch_extended_user_profiles"),
                    f = u && p,
                    g = (0, n(815048).fJ)(n(554666).u.extendedUserProfileActions, {
                        disabled: !f
                    }),
                    m = (0, n(533992).v3)();
                (0, i.useEffect)(() => {
                    f && "resolved" === g.status && null != e && e.id && o && null != o && o.userId && g.value.prefetchExtendedUserProfiles({
                        spaceStore: o,
                        actorUserId: o.userId,
                        viewedUserIds: [e.id]
                    }, m)
                }, [f, null == e ? void 0 : e.id, o, u, m, g]);
                let _ = (0, i.useCallback)(() => {
                        c.current && e && o && !t && n(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: o,
                            from: d
                        })
                    }, [e, o, t, d]),
                    v = (0, i.useCallback)(() => {
                        n(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, a.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? _ : void 0,
                    onMouseLeave: u ? v : void 0,
                    style: l ? {
                        width: l
                    } : void 0,
                    children: s
                }) : s
            }
        },
        533422: (e, t, n) => {
            n.d(t, {
                Y: () => r
            });
            var i = n(296540),
                a = n(474848);
            let r = i.memo(function({
                event: e,
                isBox: t = !1
            }) {
                let i = (0, n(682985).K8)(() => {
                        let t = (0, n(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: n(381453).n4
                    }),
                    r = (0, n(960253).e)(),
                    s = (0, n(960253).I)(() => ({
                        indicator: {
                            minHeight: t ? 10 : 36,
                            height: t ? 10 : "100%",
                            width: t ? 10 : 4,
                            flexShrink: 0,
                            borderRadius: t ? 2 : 3,
                            ...(0, n(619108).TN)({
                                event: e,
                                color: e.isPlaceholderEvent ? n(632079).Tj.text.disabled : (0, n(588727).Sk)({
                                    theme: n(632079).Tj,
                                    calendarColor: i,
                                    eventColor: e.color,
                                    themeMode: r
                                })
                            })
                        }
                    }), [e, i, t, r]);
                return (0, a.jsx)("div", {
                    style: s.indicator
                })
            })
        },
        533773: (e, t, n) => {
            n.d(t, {
                k: () => d,
                y: () => c
            }), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                connectNotionCalendar: {
                    defaultMessage: "Connect Calendar",
                    id: "transcriptionBlockSettings.connectNotionCalendar"
                },
                connectNotionCalendarSubTitle: {
                    id: "transcriptionBlockSettings.connectNotionCalendarSubTitle",
                    defaultMessage: "Link calendar events to share AI meeting notes with participants"
                }
            });

            function r(e) {
                return (0, i.jsx)(n(968107).y, {
                    style: e
                })
            }
            let s = (0, i.jsx)(n(109939).sA, { ...a.connectNotionCalendar
                }),
                o = (0, i.jsx)(n(109939).sA, { ...a.connectNotionCalendarSubTitle
                });

            function l(e) {
                let {
                    onClick: t,
                    isLoading: i
                } = e;
                return {
                    key: "open calendar",
                    displayName: a.connectNotionCalendar,
                    analyticsName: a.connectNotionCalendar.defaultMessage,
                    closeParentMenu: !1,
                    validators: [(0, n(572251).A)(n(149207).m)],
                    action: () => {
                        t()
                    },
                    disabled: () => i
                }
            }

            function d(e) {
                return (0, n(233319).Ls)({ ...l(e),
                    svg: e => (0, i.jsx)(n(968107).y, {
                        style: e
                    })
                })
            }

            function c(e) {
                return (0, n(233319).Ls)({ ...l(e),
                    render: e => (0, i.jsx)(n(860287).A, { ...e,
                        svg: r,
                        title: s,
                        caption: o,
                        shouldWrapCaption: !0
                    })
                })
            }
        },
        545504: (e, t, n) => {
            n.d(t, {
                w: () => i
            });

            function i({
                url: e,
                config: t
            }) {
                let a = (0, n(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === a.name) return a.blockId
            }
        },
        553635: (e, t, n) => {
            n.d(t, {
                t3: () => s,
                sD: () => o,
                VD: () => l
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var i = n(296540);
            let a = "ai_meetings_notes_custom_instructions",
                r = new Set;

            function s(e = {}) {
                return "on" === function(e = {}) {
                    return n(218744).default.getEligibleGroup({
                        experimentId: a,
                        defaultGroup: "control",
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function o(e = {}) {
                return "on" === function(e = {}) {
                    return (0, n(604306).r)(a, {
                        disableExposureLogging: e.disableExposureLogging ? ? !0
                    })
                }(e)
            }

            function l(e) {
                let {
                    blockId: t,
                    shouldLog: s
                } = e;
                (0, i.useEffect)(() => {
                    !s || r.has(t) || (r.add(t), n(218744).default.manuallyLogExperimentExposure(a))
                }, [t, s])
            }
        },
        554666: (e, t, n) => {
            n.d(t, {
                i: () => a,
                u: () => i
            });
            let i = {
                    PersonProfileContainer: new(n(815048)).O2("PersonProfileContainer", () => Promise.all([n.e(75134), n.e(21969), n.e(29663), n.e(75136), n.e(98175), n.e(47414), n.e(16922), n.e(65594), n.e(15021), n.e(98821), n.e(77470), n.e(80068), n.e(44632)]).then(n.bind(n, 587386))),
                    extendedUserProfileActions: new(n(815048)).O2("extendedUserProfileActions", () => n.e(63717).then(n.bind(n, 433562)))
                },
                a = (0, n(815048)._h)(i.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        555676: (e, t, n) => {
            let i;

            function a(e) {
                i = e
            }

            function r() {
                return i
            }
            n.d(t, {
                w: () => a,
                x: () => r
            })
        },
        556306: (e, t, n) => {
            n.d(t, {
                h: () => i
            });

            function i(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        565719: (e, t, n) => {
            n.d(t, {
                w: () => i
            });

            function i(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        583124: (e, t, n) => {
            function i() {
                if (!n(218744).default.checkGate({
                        gateName: "meeting_notes_auto_share_setting"
                    })) return !0;
                let e = n(728372).AppStoreSidebarSpaceViewStore.state,
                    t = null == e ? void 0 : e.getSettings();
                return (null == t ? void 0 : t.disable_auto_share_meeting_notes) !== void 0 && !t.disable_auto_share_meeting_notes
            }

            function a() {
                let e = (0, n(83208).X)("meeting_notes_auto_share_setting"),
                    t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore);
                return (0, n(682985).K8)(() => {
                    if (!e) return !0;
                    let n = null == t ? void 0 : t.getSettings();
                    return (null == n ? void 0 : n.disable_auto_share_meeting_notes) !== void 0 && !n.disable_auto_share_meeting_notes
                }, [t, e])
            }
            n.d(t, {
                V: () => a,
                W: () => i
            })
        },
        598132: (e, t, n) => {
            function i(e) {
                let t = n(728372).AppStoreCurrentUserRootStore.state;
                if (!t) return !1;
                let i = t.getSpaceViewStores();
                return (0, n(381453).oE)(null == i ? void 0 : i.map(e => e.getSpaceId())).map(t => n(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                })).some(e => r(e))
            }

            function a(e, t) {
                return r(n(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                }))
            }

            function r(e) {
                switch (null == e ? void 0 : e.membershipType) {
                    case void 0:
                    case "none":
                    case "page_guest":
                        return !1;
                    case "restricted_member":
                    case "member":
                    case "membership_admin":
                    case "owner":
                        return !0 === e.is_sales_assisted;
                    default:
                        (0, n(722371).HB)(e)
                }
            }
            n.d(t, {
                h0: () => i,
                lM: () => a
            }), n(898992), n(581454), n(737550)
        },
        619108: (e, t, n) => {
            n.d(t, {
                Mr: () => r,
                TN: () => s,
                l9: () => o
            });
            var i = n(296540),
                a = n(474848);

            function r(e) {
                let {
                    event: t,
                    eventIndex: i,
                    calendarColor: a,
                    titleStartY: r,
                    titleEndY: o
                } = e, l = (0, n(960253).e)(), d = (0, n(960253).I)(() => {
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
                                let o = s({
                                    event: e,
                                    color: i
                                });
                                if (!e.isAllDay) return o;
                                let l = `radial-gradient(
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
                                        WebkitMaskImage: l,
                                        maskImage: l
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
                                    themeMode: l
                                }),
                                titleStartY: r,
                                titleEndY: o
                            })
                        }
                    }
                }, [a, t, i, o, r, l]);
                if (a || "emptyTodayEventPlaceholder" === t) return d.container
            }

            function s({
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
                titleEndY: s
            }) {
                let o = (0, n(682985).K8)(() => {
                        if ("emptyTodayEventPlaceholder" === e) return;
                        let t = (0, n(440143).Y)().getCalendar(e);
                        return null == t ? void 0 : t.color
                    }, [e], {
                        equalityFn: n(381453).n4
                    }),
                    l = r({
                        event: e,
                        eventIndex: t,
                        calendarColor: o,
                        titleStartY: i,
                        titleEndY: s
                    });
                return l ? (0, a.jsx)("div", {
                    style: l
                }) : null
            })
        },
        621347: (e, t, n) => {
            n.d(t, {
                g: () => i
            }), n(944114);
            async function i(e) {
                let {
                    environment: t,
                    onResponse: i,
                    data: a,
                    userId: r,
                    tracking: s,
                    abortSignal: o
                } = e, l = await t.api.callStreamApi({
                    eventName: "runInferenceTranscript",
                    environment: t,
                    data: a,
                    userId: r,
                    tracking: s,
                    abortSignal: o,
                    headers: (0, n(115118).WS)({
                        spaceId: a.spaceId
                    })
                });
                if ("success" !== l.type) return null != o && o.aborted ? {
                    error: {
                        message: "Aborted",
                        code: 0
                    }
                } : (n(647095).Qg(l), {
                    error: {
                        message: l.error.message,
                        code: l.status
                    }
                });
                let d = [];
                if (n(331653).hS.is(l.data))
                    for await (let e of l.data) {
                        if ("error" === e.type) return {
                            error: {
                                message: e.message,
                                code: e.errorCode
                            }
                        };
                        null == i || i(e), d.push(e)
                    }
                return {
                    value: d
                }
            }
        },
        627335: (e, t, n) => {
            n.d(t, {
                D: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    transcriptionBlockStore: i,
                    tabType: a,
                    withTextBlock: r
                } = e, s = (0, n(869708).y1)(i, a);
                if (s) return s;
                let o = i.getSpaceId(),
                    {
                        performResult: l
                    } = (0, n(377796).createAndCommit)({
                        userAction: `transcriptionBlockTabActions.getOrCreateTranscriptionTabBlockStore.${a}`,
                        environment: t,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            let s, o = n(124937).Wv({
                                environment: t,
                                type: "text",
                                inMemoryRecordCache: i.inMemoryRecordCache,
                                transaction: e
                            });
                            if ("summary" === a ? n(579695).Ti({
                                    transaction: e,
                                    parentStore: i,
                                    childStore: o
                                }) : n(579695).NI({
                                    transaction: e,
                                    parentStore: i,
                                    childStore: o
                                }), "transcript" === a && r) {
                                let a = n(124937).Wv({
                                    environment: t,
                                    type: "text",
                                    inMemoryRecordCache: i.inMemoryRecordCache,
                                    transaction: e
                                });
                                n(579695).NI({
                                    transaction: e,
                                    parentStore: o,
                                    childStore: a
                                })
                            }
                            return "summary" === a ? s = {
                                transcription_summary_id: o.id
                            } : "transcript" === a ? s = {
                                transcription_transcript_id: o.id
                            } : (0, n(722371).HB)(a), (0, n(715144).z)({
                                transaction: e,
                                stores: [i],
                                update: s
                            }), o
                        },
                        canUndo: !1
                    });
                return l
            }
        },
        631783: (e, t, n) => {
            n.d(t, {
                xN: () => s,
                qs: () => l,
                OB: () => _,
                rG: () => m,
                mk: () => f,
                Pi: () => u,
                SB: () => p,
                XA: () => g
            }), n(777691), n(898992), n(354520), n(430670), n(581454), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 21 20",
                    fittedViewBox: "-0.01 2.12 20.28 15.76",
                    svg: (0, i.jsx)("path", {
                        d: "m5.7 3.487-.607-.706a.875.875 0 0 0-1.329 1.138l.607.708A7.85 7.85 0 0 0 2.254 10v.547l-.76-.76a.875.875 0 1 0-1.238 1.238l2.254 2.254a.875.875 0 0 0 1.238 0L6 11.025a.875.875 0 0 0-1.237-1.237l-.76.76V10c0-1.545.572-2.956 1.515-4.033l7.891 9.206a6.1 6.1 0 0 1-3.281.952 6.1 6.1 0 0 1-4.168-1.636.875.875 0 1 0-1.191 1.282 7.85 7.85 0 0 0 5.359 2.104 7.84 7.84 0 0 0 4.43-1.363l.605.707a.875.875 0 0 0 1.33-1.139l-.608-.707.001-.001-1.148-1.34v.001L6.846 4.827h.002zm9.782 9.491 1.196 1.396A7.84 7.84 0 0 0 18.004 10v-.547l.76.76A.875.875 0 1 0 20 8.975l-2.254-2.254a.875.875 0 0 0-1.237 0l-2.254 2.254a.875.875 0 0 0 1.237 1.238l.76-.76V10a6.1 6.1 0 0 1-.77 2.978M8.004 4.254 6.807 2.858a7.85 7.85 0 0 1 3.322-.733c2.069 0 3.954.8 5.358 2.104a.875.875 0 0 1-1.19 1.282 6.1 6.1 0 0 0-4.168-1.636 6.1 6.1 0 0 0-2.125.379"
                    })
                },
                r = (0, n(104509).wt)("arrowCircleLoopSlashFill", a, "fill"),
                s = "link-calendar-event",
                o = (0, n(109939).YK)({
                    addEvent: {
                        defaultMessage: "Add calendar event",
                        id: "transcriptionBlockSettings.addEvent"
                    }
                });

            function l(e) {
                let {
                    source: t,
                    events: a,
                    displayState: r,
                    isRetryEnabled: s,
                    onRetry: l,
                    calendarSignupOnClick: d,
                    isCalendarSignupLoading: c
                } = e;
                return (0, n(35370).u)({
                    key: "add calendar event",
                    displayName: o.addEvent,
                    svg: e => (0, i.jsx)(n(968107).y, {
                        style: e
                    }),
                    analyticsName: o.addEvent.defaultMessage,
                    validators: [n(149207).m],
                    subActions: () => {
                        switch (r) {
                            case "loading":
                                return [p()];
                            case "signedOut":
                            case "disconnectedAccount":
                            case "missingScopes":
                                return [_({
                                    onClick: d,
                                    isLoading: c
                                })];
                            case "loadError":
                                return [f({
                                    onRetry: s ? l : void 0
                                })];
                            case "noEvents":
                            case "events":
                                return [...u({
                                    showPastEvents: !0,
                                    source: t,
                                    events: a
                                }), g()]
                        }
                    },
                    width: 265
                })
            }
            let d = (0, n(109939).YK)({
                    summary: {
                        id: "transcriptionBlockMenu.addCalendarEvent.event.summary",
                        defaultMessage: "{eventSummary}"
                    },
                    openCalendarEvent: {
                        id: "transcriptionBlockMenu.addCalendarEvent.openCalendarEvent.title",
                        defaultMessage: "Open calendar event"
                    },
                    unlinkEvent: {
                        id: "transcriptionBlockMenu.addCalendarEvent.unlinkEvent.title",
                        defaultMessage: "Unlink event"
                    },
                    removeEvent: {
                        id: "transcriptionBlockMenu.addCalendarEvent.removeEvent.title",
                        defaultMessage: "Remove event"
                    },
                    daySectionToday: {
                        id: "transcriptionBlockMenu.addCalendarEvent.eventList.today.title",
                        defaultMessage: "Today, {date}"
                    },
                    daySectionTomorrow: {
                        id: "transcriptionBlockMenu.addCalendarEvent.eventList.tomorrow.title",
                        defaultMessage: "Tomorrow, {date}"
                    },
                    daySectionYesterday: {
                        id: "transcriptionBlockMenu.addCalendarEvent.eventList.yesterday.title",
                        defaultMessage: "Yesterday, {date}"
                    },
                    daySectionOther: {
                        id: "transcriptionBlockMenu.addCalendarEvent.eventList.otherDay.title",
                        defaultMessage: "{weekday}, {date}"
                    },
                    noUpcomingEvents: {
                        id: "transcriptionBlockMenu.addCalendarEvent.noUpcomingEvents",
                        defaultMessage: "No upcoming events"
                    },
                    loadingEvents: {
                        id: "transcriptionBlockMenu.addCalendarEvent.loadingEvents",
                        defaultMessage: "Loading events…"
                    },
                    errorLoadingEvents: {
                        id: "transcriptionBlockMenu.addCalendarEvent.errorLoadingEvents",
                        defaultMessage: "Failed to load events."
                    },
                    retryLoadingEvents: {
                        id: "transcriptionBlockMenu.addCalendarEvent.retryLoadingEvents",
                        defaultMessage: "Retry"
                    },
                    retryFailedEvents: {
                        id: "transcriptionBlockMenu.addCalendarEvent.retryFailedEvents",
                        defaultMessage: "Retry failed."
                    }
                }),
                c = n(962299).A.getIntl();

            function u(e) {
                var t;
                let {
                    shareWithParticipants: a,
                    source: r,
                    ...o
                } = e ? ? {}, l = function(e) {
                    var t;
                    let {
                        showPastEvents: i = !1,
                        events: a
                    } = e, r = null == (t = (0, n(440143).Y)().getHomeCalendarStateForSpaceView()) ? void 0 : t.botId, s = (0, n(440143).Y)().getCurrentAccounts();
                    return r ? (0, n(964282).y6)({
                        events: a,
                        accounts: s,
                        thresholds: n(964282).sR,
                        filters: { ...i && {
                                maxDaysInPast: 2
                            },
                            maxDaysInFuture: 7,
                            includeEventsWithoutConferencing: !0
                        }
                    }).filter(e => !!e.summary) : []
                }(o);
                if (0 === l.length) return [(0, n(233319).gy)({
                    key: "no-events-empty-state",
                    actions: [(0, n(233319).Ls)({
                        key: "no-events-message",
                        displayName: d.noUpcomingEvents,
                        analyticsName: d.noUpcomingEvents.defaultMessage,
                        closeParentMenu: !1,
                        validators: [],
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            title: (0, i.jsx)(n(109939).sA, { ...d.noUpcomingEvents
                            }),
                            disabled: !0
                        }),
                        action: () => {}
                    })]
                })];
                let u = n(906745).DateTime.now().startOf("day"),
                    p = null == (t = (0, n(440143).Y)().getState()) ? void 0 : t.calendars;
                return Object.entries(Object.groupBy(l, e => (function(e) {
                    let {
                        dayStart: t,
                        today: i
                    } = e, a = Math.round(t.diff(i, "days").days), r = {
                        month: "long",
                        day: "numeric",
                        ...t.year !== i.year && {
                            year: "numeric"
                        }
                    }, s = t.setLocale(n(849917).locale).toLocaleString(r);
                    if (0 === a) return c.formatMessage(d.daySectionToday, {
                        date: s
                    });
                    if (1 === a) return c.formatMessage(d.daySectionTomorrow, {
                        date: s
                    });
                    if (-1 === a) return c.formatMessage(d.daySectionYesterday, {
                        date: s
                    });
                    let o = t.setLocale(n(849917).locale).toLocaleString({
                        weekday: "long"
                    });
                    return c.formatMessage(d.daySectionOther, {
                        weekday: o,
                        date: s
                    })
                })({
                    dayStart: h(e),
                    today: u
                }))).flatMap(([e, t]) => t && 0 !== t.length ? [{
                    title: e,
                    dayStartMillis: h(t[0]).toMillis(),
                    events: p ? t.sort((0, n(103217).b7)(p)) : t
                }] : []).sort((e, t) => e.dayStartMillis - t.dayStartMillis).map(({
                    title: e,
                    events: t,
                    dayStartMillis: o
                }) => (0, n(233319).gy)({
                    key: `${s}-${e}-${o}`,
                    actions: t.map(e => (function({
                        event: e,
                        shareWithParticipants: t,
                        source: a
                    }) {
                        return (0, n(233319).Ls)({
                            key: `${s}-${e.id}`,
                            displayName: d.summary,
                            displayNameInterpolatedValues: {
                                eventSummary: e.summary ? ? ""
                            },
                            analyticsName: e.id,
                            closeParentMenu: !0,
                            validators: [],
                            render: (t, a, r) => (0, i.jsx)(n(860287).A, { ...t,
                                ...r.styles,
                                svg: () => (0, i.jsx)(n(533422).Y, {
                                    event: e
                                }),
                                title: (0, i.jsx)(n(503473).j, {
                                    children: e.summary ? ? ""
                                }),
                                caption: function(e) {
                                    let t = (0, n(714350).P)();
                                    if (e.isAllDay) return n(906745).DateTime.fromISO(e.start.date).setLocale(n(849917).locale).toLocaleString({
                                        month: "short",
                                        day: "numeric"
                                    });
                                    let i = n(906745).DateTime.fromISO(e.start.dateTime),
                                        a = i.setLocale(n(849917).locale).toLocaleString({
                                            month: "short",
                                            day: "numeric"
                                        }),
                                        r = (0, n(523144).uJ)({
                                            time: i,
                                            locale: n(849917).locale,
                                            timeZone: t
                                        });
                                    return `${a}  ${r}`
                                }(e)
                            }),
                            action: ({
                                environment: i,
                                blocks: r
                            }) => {
                                let s = r[0];
                                if (!s || !s.isType("transcription")) return null;
                                (0, n(3553).uJ)({
                                    environment: i,
                                    blockStore: s,
                                    event: e,
                                    source: a,
                                    shareWithParticipants: t
                                })
                            }
                        })
                    })({
                        event: e,
                        shareWithParticipants: a,
                        source: r
                    }))
                }))
            }

            function p() {
                return (0, n(233319).gy)({
                    key: "loading-events",
                    actions: [(0, n(233319).Ls)({
                        key: "loading-events-message",
                        displayName: d.loadingEvents,
                        analyticsName: d.loadingEvents.defaultMessage,
                        closeParentMenu: !1,
                        validators: [],
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            title: (0, i.jsx)(n(109939).sA, { ...d.loadingEvents
                            }),
                            disabled: !0
                        }),
                        action: () => {}
                    })]
                })
            }

            function f(e) {
                let {
                    onRetry: t
                } = e;
                return (0, n(233319).gy)({
                    key: "error-loading-events",
                    title: d.errorLoadingEvents,
                    actions: [(0, n(233319).Ls)({
                        key: "error-loading-events-message",
                        displayName: d.errorLoadingEvents,
                        analyticsName: d.errorLoadingEvents.defaultMessage,
                        closeParentMenu: !1,
                        validators: [],
                        render: e => (0, i.jsx)(n(860287).A, { ...e,
                            svg: t ? n(396935).F : r,
                            title: t ? (0, i.jsx)(n(109939).sA, { ...d.retryLoadingEvents
                            }) : (0, i.jsx)(n(109939).sA, { ...d.retryFailedEvents
                            }),
                            disabled: !t
                        }),
                        action: () => {
                            null == t || t()
                        }
                    })]
                })
            }

            function g() {
                return (0, n(233319).gy)({
                    key: "remove-event",
                    render: e => (0, i.jsx)(n(844565).A, { ...e,
                        topBorder: !0
                    }),
                    actions: [(0, n(233319).Ls)({
                        key: "remove-event",
                        displayName: d.removeEvent,
                        analyticsName: d.removeEvent.defaultMessage,
                        closeParentMenu: !0,
                        validators: [v],
                        render: (e, t, a) => (0, i.jsx)(n(860287).A, { ...e,
                            ...a.styles,
                            svg: n(968411).trashIcon,
                            isRed: !0,
                            title: (0, i.jsx)(n(109939).sA, { ...d.removeEvent
                            })
                        }),
                        action: ({
                            environment: e,
                            blocks: t
                        }) => {
                            let i = t[0];
                            i && i.isType("transcription") && (0, n(3553).Mh)({
                                environment: e,
                                blockStore: i
                            })
                        }
                    })]
                })
            }

            function m() {
                return (0, n(233319).gy)({
                    key: "connected-event-actions",
                    actions: [(0, n(233319).Ls)({
                        key: "open-calendar-event",
                        displayName: d.openCalendarEvent,
                        analyticsName: d.openCalendarEvent.defaultMessage,
                        closeParentMenu: !0,
                        validators: [v],
                        render: (e, t, a) => (0, i.jsx)(n(860287).A, { ...e,
                            ...a.styles,
                            svg: n(684668).arrowDiagonalUpRightIcon,
                            title: (0, i.jsx)(n(109939).sA, { ...d.openCalendarEvent
                            })
                        }),
                        action: ({
                            environment: e,
                            blocks: t
                        }) => {
                            var i;
                            let a = t[0];
                            if (!a || !a.isType("transcription")) return;
                            let r = null == (i = a.getModel()) ? void 0 : i.getFormat().transcription_calendar_event;
                            if (r) {
                                let t = (0, n(338901).i$)({
                                    eventUid: r.uid,
                                    startTimeIso: r.startTime
                                });
                                n(874809).yd({
                                    baseUrl: t,
                                    environment: e,
                                    from: "transcriptionBlockTitle"
                                })
                            }
                        }
                    }), (0, n(233319).Ls)({
                        key: "unlink-event",
                        displayName: d.unlinkEvent,
                        analyticsName: d.unlinkEvent.defaultMessage,
                        closeParentMenu: !0,
                        validators: [],
                        render: (e, t, a) => (0, i.jsx)(n(860287).A, { ...e,
                            ...a.styles,
                            svg: n(588739).linkIcon,
                            isRed: !0,
                            title: (0, i.jsx)(n(109939).sA, { ...d.unlinkEvent
                            })
                        }),
                        action: ({
                            environment: e,
                            blocks: t
                        }) => {
                            let i = t[0];
                            i && i.isType("transcription") && ((0, n(3553).Mh)({
                                environment: e,
                                blockStore: i
                            }), (0, n(940763).e)({
                                store: i.getBlockTitleStore()
                            }))
                        }
                    })]
                })
            }

            function _(e) {
                return (0, n(233319).gy)({
                    key: "connect-calendar",
                    render: e => (0, i.jsx)(n(844565).A, { ...e
                    }),
                    actions: [(0, n(533773).y)(e)]
                })
            }

            function v(e) {
                var t;
                let {
                    blocks: n
                } = e, i = n[0];
                return !!i && !!i.isType("transcription") && !!(null == (t = i.getModel()) ? void 0 : t.getFormat().transcription_calendar_event)
            }

            function h(e) {
                return e.isAllDay ? n(906745).DateTime.fromISO(e.start.date).startOf("day") : n(906745).DateTime.fromISO(e.start.dateTime).startOf("day")
            }
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => l,
                WM: () => r,
                Xd: () => g,
                Xw: () => m,
                defaultInferenceContextStore: () => i,
                fd: () => c,
                i6: () => o,
                uP: () => d
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let i = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    i = n(728372).AppStoreSidebarSpaceViewStore.state,
                    a = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && i) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: i,
                    blockStore: a,
                    peekStore: n(475097).default.state.open ? n(475097).default.state.targetStore : void 0,
                    workflowStore: (0, n(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function a(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let i = (0, n(444610).U)(e),
                        a = null == i ? void 0 : i.collectionViewStore();
                    a && (t[e.id] = a.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let i = (0, n(444610).U)(e),
                            a = null == i ? void 0 : i.collectionViewStore();
                        a && (t[e.id] = a.id)
                    }
                });
                return t
            }

            function r(e) {
                let {
                    environment: t,
                    surface: i,
                    inferenceContext: r,
                    config: s,
                    invokedFromBlockId: o,
                    checklistId: l,
                    checklistStepId: d
                } = e, {
                    userStore: c,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: g,
                    workflowStore: m
                } = r, _ = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: u.id
                }), v = "meet" === t.RouterStore.state.route.name, h = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== i ? {
                        blockId: f.id,
                        visibleCollectionViewIds: a(f)
                    } : void 0,
                    ...g ? {
                        peekBlockId: g.id,
                        visibleCollectionViewIds: a(g)
                    } : void 0,
                    ...m ? {
                        workflowId: m.id
                    } : void 0,
                    ...v ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: i,
                            userId: a
                        } = e, r = t.idCreator.getSpaceIdCreatorSync(i), s = (0, n(413388).sX)(a, r);
                        return {
                            collectionViewBlockId: s,
                            visibleCollectionViewIds: {
                                [s]: (0, n(413388).X$)(a, r)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: c.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== s.type || !s.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var b;
                        t.name && (y.agentName = t.name), null != (b = t.customization_items) && b[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let S = function(e) {
                    var t, i, a;
                    let {
                        config: r,
                        workflowStore: s
                    } = e;
                    if ("workflow" !== r.type || !r.isCustomAgent || !s) return;
                    let o = !0 === r.useCustomAgentDraft || !0 === r.use_draft_actor_pointer ? (null == (t = s.getDraftData()) ? void 0 : t.instructions) ? ? (null == (i = s.getData()) ? void 0 : i.instructions) : null == (a = s.getPublishedArtifactStore()) || null == (a = a.getData()) ? void 0 : a.instructions;
                    if ((0, n(886883).ap)(o)) return o.id
                }({
                    config: s,
                    workflowStore: m
                });
                if (S && (y.context_page_id = S), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: _,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: i,
                        ...h,
                        invokedFromBlockId: o,
                        ..."onboarding_checklist" === i && l && d ? {
                            checklistId: l,
                            checklistStepId: d
                        } : {},
                        ...y
                    }
                };
                let k = n(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: i = 10
                    } = e;
                    return n(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, i)
                }({
                    spaceId: u.id
                }) : void 0;
                return {
                    id: _,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: u.getName(),
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: i,
                        ...h,
                        invokedFromBlockId: o,
                        ..."onboarding_checklist" === i && l && d ? {
                            checklistId: l,
                            checklistStepId: d
                        } : {},
                        ...y,
                        recentPageVisits: k
                    }
                }
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    config: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "config",
                    value: a
                }
            }

            function o(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: i,
                    config: a
                } = e;
                if (!t.some(e => "config" === e.type)) return s({
                    environment: n,
                    spaceStore: i,
                    config: a
                })
            }

            function l(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    value: a,
                    userStore: r
                } = e, s = u(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user",
                    value: s,
                    userId: r.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    actualMessage: a,
                    displayMessage: r,
                    userStore: s,
                    surveyStepId: o,
                    sourceStepId: l
                } = e, d = u(a) ? ? [], c = u(r);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user-injected",
                    actualMessage: d,
                    displayMessage: c,
                    userId: s.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: o,
                    sourceStepId: l
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    agentMessageKey: a,
                    instructions: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: a,
                    instructions: r
                }
            }

            function u(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: i,
                promptType: a,
                value: r,
                locale: s,
                args: o
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: a,
                    userId: i.id,
                    createdAt: Date.now(),
                    value: r,
                    locale: s,
                    isEdited: !1,
                    args: o
                }
            }

            function f(e) {
                let t, i, {
                    environment: a,
                    spaceId: r,
                    pointers: s,
                    selectedBlockStores: o,
                    textSelection: l,
                    blockSelectionContext: d,
                    textSelectionContext: c
                } = e;
                if (d) t = d;
                else if (o && o.length > 0) {
                    let e = (0, n(685745).B)(o);
                    e && (t = {
                        type: "blocks",
                        value: o.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) i = c;
                else if (l && l.start.store.pointer.table === n(832375).evP && l.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: l,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        a = e.length > 1200;
                    i = {
                        type: "text",
                        value: {
                            start: {
                                pointer: l.start.store.pointer,
                                index: l.start.index
                            },
                            end: {
                                pointer: l.end.store.pointer,
                                index: l.end.index
                            }
                        },
                        text: t,
                        ...a ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== s.length || t || i) return {
                    id: (0, n(295447).Z1)({
                        environment: a,
                        table: n(832375).mSw,
                        spaceId: r
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: s,
                        blockSelection: t,
                        textSelection: i
                    }
                }
            }

            function g(e) {
                let {
                    environment: t,
                    inferenceContext: i,
                    config: a,
                    addSteps: o,
                    surface: l,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                } = e, p = [s({
                    environment: t,
                    spaceStore: i.spaceStore,
                    config: a
                }), r({
                    environment: t,
                    inferenceContext: i,
                    surface: l,
                    config: a,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                })];
                return o && p.push(...o), p.filter(n(722371).O9)
            }

            function m(e) {
                let {
                    environment: t,
                    spaceId: i,
                    message: a,
                    notificationType: r = "info",
                    metadata: s
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "system-notification",
                    message: a,
                    notificationType: r,
                    metadata: s
                }
            }
        },
        685745: (e, t, n) => {
            n.d(t, {
                B: () => s
            });
            var i = () => n(129499),
                a = () => n(955630);

            function r(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && n(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== a().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function s(e) {
                let t, a = r(e);
                if (!a) return;
                let s = r([...e].reverse());
                if (!s) return;
                let o = (0, n(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: a.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!o) return;
                let l = (0, n(787926).mP)(s.blockStore, o);
                if (l) {
                    for (let e of (0, n(827049).Y_)(l)) {
                        let n = e.value.store.getTitleStore();
                        if (n) {
                            let e = (0, i().s)(n);
                            e && (t = {
                                store: n,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: a.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        700790: (e, t, n) => {
            n.d(t, {
                I: () => i
            });

            function i(e, t) {
                if (e === n(728372).AppStoreMainEditorCurrentBlockStore.state) {
                    let {
                        RouterStore: e
                    } = t, n = e.state.route;
                    if ("page" === n.name) return n.collectionViewId
                }
            }
        },
        705820: (e, t, n) => {
            n.d(t, {
                P: () => i
            });
            let i = new(n(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!n(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let i = new(n(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await i.load(), !i.canAdmin()) return;
                let a = await e.api.callCellCompatibleApi({
                    eventName: "getEligibleIntervalSelectCampaigns",
                    environment: e,
                    data: {
                        spaceId: t
                    },
                    cellNavigation: {
                        cellId: void 0,
                        spaceId: t
                    }
                });
                if ("success" === a.type) return a.data.campaigns
            });
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", i)
        },
        706968: (e, t, n) => {
            function i(e) {
                return o({
                    transcript: e
                })
            }

            function a(e) {
                let t = i(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent
            }

            function r(e) {
                let t = i(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent ? t.workflowId : void 0
            }

            function s(e) {
                let {
                    transcript: t,
                    fallback: n
                } = e, i = n;
                for (let e of t) {
                    if ("config" === e.type && "workflow" === e.value.type) {
                        i = e.value;
                        continue
                    }
                    if ("updated-config" === e.type && i) {
                        if (null === e.value || "object" != typeof e.value || Array.isArray(e.value)) continue;
                        i = { ...i,
                            ...e.value
                        }
                    }
                }
                return i
            }

            function o(e) {
                var t;
                let {
                    transcript: n
                } = e, i = null == (t = n.findLast(e => "config" === e.type)) ? void 0 : t.value;
                if (i) return "workflow" !== i.type ? i : s({
                    transcript: n
                }) ? ? i
            }
            n.d(t, {
                TU: () => o,
                f_: () => i,
                p0: () => a,
                py: () => s,
                zB: () => r
            }), n(410838)
        },
        729619: (e, t, n) => {
            n.d(t, {
                XP: () => r,
                T: () => s,
                Tk: () => a,
                YG: () => l,
                jW: () => o,
                Zp: () => d
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);

            function a(e) {
                var t;
                let {
                    environment: i,
                    store: a
                } = e;
                n(218744).default.getEligibleGroup({
                    experimentId: "adoption_aa_page_share_menu"
                }), n(880853).Ay.reset(), n(475097).default.state.open ? n(344476).A.setState({ ...n(344476).A.state,
                    open: !0
                }) : n(409614).A.setState({ ...n(409614).A.state,
                    open: !0
                }), t = {
                    share_menu_session_id: n(880853).Ay.state.sessionId,
                    ...a && a.table === n(832375).evP && a.isCollectionView() ? {
                        collection_view_block_id: a.id,
                        ...(0, n(633171).P)(a, {
                            skipPages: !1
                        })
                    } : {}
                }, (0, n(104310).u)({
                    event: {
                        eventName: "open_page_share",
                        eventProperties: t
                    }
                })
            }

            function r(e) {
                var t;
                let {
                    environment: i,
                    store: a
                } = e;
                n(475097).default.state.open ? n(344476).A.setState({ ...n(344476).A.state,
                    open: !1
                }) : n(409614).A.setState({ ...n(409614).A.state,
                    open: !1
                }), n(982993).A.setState({ ...n(982993).A.state,
                    siteSettingContentType: "initial"
                });
                let {
                    collection_view_block_id: r,
                    collection_view_id: s,
                    collection_id: o,
                    owned_collection_count: l,
                    linked_collection_count: d
                } = (() => {
                    if (a && a.table === n(832375).evP && a.isCollectionView()) {
                        let e = (0, n(633171).P)(a, {
                            skipPages: !1
                        });
                        return {
                            collection_view_block_id: a.id,
                            collection_view_id: (0, n(700790).I)(a, i),
                            collection_id: e.collectionId,
                            owned_collection_count: e.ownedCollectionCount,
                            linked_collection_count: e.linkedCollectionCount
                        }
                    }
                    return {
                        collection_view_block_id: void 0,
                        collection_view_id: void 0,
                        collection_id: void 0,
                        owned_collection_count: void 0,
                        linked_collection_count: void 0
                    }
                })();
                t = {
                    share_menu_session_id: n(880853).Ay.state.sessionId,
                    collection_id: o,
                    collection_view_id: s,
                    collection_view_block_id: r,
                    owned_collection_count: l,
                    linked_collection_count: d
                }, (0, n(104310).u)({
                    event: {
                        eventName: "close_page_share",
                        eventProperties: t
                    }
                })
            }
            async function s(e) {
                let {
                    inviteTargetsStore: t
                } = e, a = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationMessage",
                    defaultMessage: "Your changes have not been saved. Discard changes?"
                }), r = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.confirmationButton.label",
                    defaultMessage: "Yes"
                }), s = (0, i.jsx)(n(109939).sA, {
                    id: "shareMenu.closeInviteDialog.cancelButton.label",
                    defaultMessage: "Cancel"
                });
                return t.state.inviteTargets.length > 0 && (await n(647095).Gh({
                    message: a,
                    acceptLabel: r,
                    cancelLabel: s
                })).accept
            }

            function o(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    selectedBlockRole: e
                })
            }

            function l(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    canCreatePagesInCollection: e
                })
            }

            function d(e) {
                let t = n(880853).Ay.state;
                (t.display === n(880853).pP.Invite || t.display === n(880853).pP.AddInviteMessage) && n(880853).Ay.setState({ ...t,
                    userSelectedCreatorRole: e
                })
            }
        },
        729849: (e, t, n) => {
            n.d(t, {
                Gi: () => s,
                yB: () => r
            }), n(898992), n(354520), n(803949);
            var i = () => n(546605);

            function a() {
                return n(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function r() {
                return (0, n(682985).K8)(() => a(), [])
            }
            class s extends i().Store {
                getInitialState() {
                    return {
                        originalFileUrlToSuccessfullyUploadedFiles: new Map,
                        inProgressUploadFileIdsToProgress: new Map
                    }
                }
                setValueForUploadedFile(e, t) {
                    this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).set(e, t)
                    })
                }
                markUploadedFilesAsSafe(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    e.forEach(e => {
                        var n;
                        let i = t.get(e);
                        i && t.set(e, { ...i,
                            metadata: { ...i.metadata,
                                guardrail: { ...null == (n = i.metadata) ? void 0 : n.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let n = new Map(this.state.inProgressUploadFileIdsToProgress),
                        i = n.get(e);
                    n.set(e, { ...t,
                        timeUploaded: (null == i ? void 0 : i.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: n
                    })
                }
                getTimeUploadedForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                getTimeUploadedForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles).get(e);
                    return (null == t ? void 0 : t.timeUploaded) ? ? Date.now()
                }
                deleteValueForUploadingFile(e) {
                    let t = new Map(this.state.inProgressUploadFileIdsToProgress);
                    t.delete(e), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: t
                    })
                }
                deleteValueForUploadedFile(e) {
                    let t = new Map(this.state.originalFileUrlToSuccessfullyUploadedFiles);
                    t.delete(e), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                onFileUploadPercentageChanged(e) {
                    let {
                        fileId: t,
                        fileName: n,
                        percentage: i,
                        contentType: a
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: n,
                        progress: i,
                        contentType: a
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: n
                    } = t;
                    n.forEach(({
                        fileId: e,
                        fileName: n
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: n
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let n = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: n
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let i = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, n(818963).pg)(t.assistantSessionId),
                        timeUploaded: i
                    })
                }
                setCompletedFileForRetry(e) {
                    let t = this.getTimeUploadedForUploadedFile(e.originalFileUrl);
                    this.setValueForUploadedFile(e.originalFileUrl, { ...e,
                        timeUploaded: t
                    })
                }
                onDeleteFileUpload(e) {
                    this.deleteValueForUploadedFile(e)
                }
                isUploadInProgress() {
                    return Array.from(this.state.inProgressUploadFileIdsToProgress.values()).filter(e => "error" !== e.type).length > 0
                }
                hasTooManyAttachments() {
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > a()
                }
            }
        },
        746204: (e, t, n) => {
            n.d(t, {
                w: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.87 3.72 7.16 12.56",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.131 9.381a.875.875 0 0 0 0 1.238l5.4 5.4a.875.875 0 1 0 1.238-1.238L7.987 10l4.782-4.781A.875.875 0 0 0 11.53 3.98z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleLeftFill", i, "fill")
        },
        766970: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                xMarkFillIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                a = (0, n(104509).wt)("xMarkFill", i, "fill")
        },
        774073: (e, t, n) => {
            function i() {
                var e;
                let t = n(728372).AppStoreSidebarSpaceStore.state;
                return (null == t || null == (e = t.getSettingsStore()) || null == (e = e.getKeyStore("audio_consent_on_transcription")) ? void 0 : e.getValue()) ? ? !1
            }

            function a() {
                var e;
                let t;
                if (!n(728372).AppStoreSidebarSpaceViewStore.getState()) return !1;
                let a = i(),
                    r = !!(t = n(728372).AppStoreSidebarSpaceViewStore.getState()) && ((null == (e = t.getSettings()) ? void 0 : e.audio_consent_on_transcription) ? ? !0);
                return a || r
            }

            function r() {
                return (0, n(682985).K8)(() => a(), [])
            }

            function s() {
                return (0, n(682985).K8)(() => (function() {
                    var e;
                    if (!a()) return !1;
                    if (i()) return !0;
                    let t = n(728372).AppStoreSidebarSpaceViewStore.getState();
                    return !!(null == t || null == (e = t.getSettings()) ? void 0 : e.audio_consent_nux_dismissed_v2)
                })(), [])
            }

            function o(e) {
                let {
                    state: t,
                    canUse: a,
                    dismissedAnnotations: r
                } = e;
                return !(!a || i() || r.includes("audio-consent-nux")) && !!(0, n(869708).ne)() && "initial" === t.state
            }

            function l(e) {
                let {
                    environment: t,
                    state: a,
                    canUse: r,
                    dismissedAnnotations: s,
                    store: o
                } = e;
                if (!r || i() || s.includes("audio-consent-nux") || "idle" !== a.state && "summarizing" !== a.state) return !1;
                let l = t.currentUser.id;
                return !!l && (0, n(869708).vX)(o, l)
            }
            n.d(t, {
                L0: () => l,
                Nt: () => s,
                R: () => o,
                Ru: () => i,
                f1: () => r,
                yz: () => a
            })
        },
        775451: (e, t, n) => {
            n.d(t, {
                W: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.06 14.57 16.51",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "m16.949 3.47-.618.619-1.164-1.165.625-.624a.823.823 0 0 1 1.157 0 .823.823 0 0 1 0 1.157zm-8.526 8.527 7.153-7.153-1.165-1.165-7.16 7.147a1.1 1.1 0 0 0-.247.414l-.303.978c-.055.206.137.4.33.33l.978-.303a.9.9 0 0 0 .414-.248"
                        }), (0, i.jsx)("path", {
                            d: "M9.578 5.438q.617 0 1.197.126l1.051-1.004a6.9 6.9 0 0 0-2.248-.372h-.35a6.603 6.603 0 0 0-6.603 6.602v.257c0 1.254.371 2.48 1.067 3.524a9.25 9.25 0 0 0 5.455 3.844l.514.129a.625.625 0 1 0 .303-1.213l-.513-.128a8 8 0 0 1-4.719-3.325 5.1 5.1 0 0 1-.857-2.831v-.257a5.353 5.353 0 0 1 5.353-5.352z"
                        }), (0, i.jsx)("path", {
                            d: "M12.444 15.748a6.47 6.47 0 0 1-5.471-1.878l1.387-.433a5.22 5.22 0 0 0 3.92 1.072l.08-.01a3.37 3.37 0 0 0 2.921-3.345 5.7 5.7 0 0 0-1.011-3.248l.904-.885a6.94 6.94 0 0 1 1.357 4.133 4.624 4.624 0 0 1-4.006 4.584z"
                        })]
                    })
                },
                r = (0, n(104509).wt)("pencilAndOutline", a, "default")
        },
        789701: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("inbox", i, "default")
        },
        789722: (e, t, n) => {
            n.d(t, {
                W: () => i
            });
            let i = (0, n(109939).YK)({
                done: {
                    id: "modal.doneButton",
                    defaultMessage: "Done"
                },
                cancel: {
                    id: "modal.cancelButton",
                    defaultMessage: "Cancel"
                },
                back: {
                    id: "modal.backButton",
                    defaultMessage: "Back"
                }
            })
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                a = (0, n(104509).wt)("chatBubble", i, "default")
        },
        816231: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var i = n(296540),
                a = n(474848);

            function r(e) {
                let t = (0, i.useRef)(null),
                    n = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let i = e.el.getBoundingClientRect();
                    n.style.height = `${i.height}px`;
                    let a = 0,
                        r = e => {
                            cancelAnimationFrame(a), a = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: i
                                }) {
                                    let {
                                        x: a,
                                        y: r,
                                        height: s,
                                        width: o
                                    } = t;
                                    if (n > a) {
                                        let t = Math.max(n - (a + o), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(i-r)/s}%)`
                                    } else {
                                        let t = Math.max(a - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(i-r)/s}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: i,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", r), () => {
                        window.removeEventListener("mousemove", r), cancelAnimationFrame(a)
                    }
                }, [e.el]);
                let r = i.useCallback(e => {
                    if (!n.current && t.current) {
                        t.current.style.pointerEvents = "none";
                        let i = document.elementFromPoint(e.clientX, e.clientY);
                        if (i === t.current && (t.current.style.visibility = "hidden", i = document.elementFromPoint(e.clientX, e.clientY), t.current.style.visibility = ""), i && i !== t.current) {
                            n.current = !0;
                            try {
                                let t = new MouseEvent(e.nativeEvent.type, e.nativeEvent);
                                i.dispatchEvent(t)
                            } finally {
                                n.current = !1
                            }
                        }
                        t.current.style.pointerEvents = "auto"
                    }
                }, []);
                return (0, a.jsx)("div", {
                    ref: t,
                    onClick: r,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let s = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                o = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                l = i.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: l,
                    allowOptionalExtensionMenu: d,
                    ...c
                }, u) {
                    let {
                        disabled: p,
                        disableDefaultClick: f,
                        onFocus: g,
                        focused: m,
                        placementToOrigin: _,
                        alignmentToOrigin: v,
                        disableCloseOnEnter: h,
                        bottomSheetInitialState: y,
                        popupTypeOverride: b
                    } = c, S = (0, n(533992).WS)(), k = (0, n(649476).Tf)(), [x, w] = (0, i.useState)(!1), [I, A] = (0, i.useState)(!1), C = (0, i.useRef)(null), M = (0, i.useRef)(null), T = (0, i.useRef)(null), j = (0, i.useRef)(null), E = (0, i.useCallback)(() => {
                        T.current && window.clearTimeout(T.current), j.current && window.clearTimeout(j.current), T.current = null, j.current = null
                    }, []), B = (0, i.useCallback)(() => {
                        E(), p || (w(!0), A(!0))
                    }, [p, E]), D = (0, i.useCallback)(() => {
                        E(), A(!1), w(!1)
                    }, [E]), F = (0, i.useCallback)(e => {
                        E(), x || (e && e.preventDefault && e.preventDefault(), T.current = window.setTimeout(B, 120))
                    }, [x, E, B]), P = (0, i.useCallback)(() => {
                        A(!1), E(), x && (j.current = window.setTimeout(D, 100))
                    }, [x, D, E]), R = (0, i.useCallback)(t => {
                        g(), B(), d && (null == e || e(t), D())
                    }, [g, B, d, e, D]), U = (0, i.useCallback)(() => {
                        S || F()
                    }, [F, S]), N = (0, i.useCallback)(() => {
                        S || (g(), F())
                    }, [g, F, S]), L = (0, i.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = C.current;
                        x && t && !t.contains(e.target) && D()
                    }, [x, D]), O = (0, i.useCallback)(e => {
                        13 === e.keyCode && x && !h && D()
                    }, [x, D, h]);
                    (0, i.useEffect)(() => {
                        if (!f) return window.addEventListener("click", L), () => {
                            window.removeEventListener("click", L)
                        }
                    }, [f, L]), (0, i.useEffect)(() => (window.addEventListener("keydown", O), () => {
                        window.removeEventListener("keydown", O)
                    }), [O]);
                    let V = (0, i.useRef)(m);
                    (0, i.useEffect)(() => {
                        !m && V.current && P(), V.current = m
                    }, [m, P]);
                    let z = { ...(0, n(63390).A)({
                                onMouseEnter: U,
                                onClick: R
                            }, c),
                            showExtensionArrow: !0
                        },
                        W = n(423291).n.Popup;
                    return b ? W = b : S && (W = k ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, a.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: m,
                        onEnter: x ? void 0 : F,
                        onRight: F,
                        onLeft: x ? P : void 0,
                        onEsc: x ? P : void 0,
                        children: (0, a.jsx)(n(182718).zD, {
                            popupType: W,
                            bottomSheetInitialState: y,
                            open: x,
                            placementToOrigin: _ ? ? "right",
                            alignmentToOrigin: v ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !S,
                            preventCaptureEsc: !0,
                            ref: C,
                            content: () => (0, a.jsxs)(a.Fragment, {
                                children: [!S && I && M.current ? (0, a.jsx)(r, {
                                    el: M.current
                                }) : null, (0, a.jsx)("div", {
                                    ref: M,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: l({
                                        onMouseEnter: N
                                    }, {
                                        close: P
                                    })
                                })]
                            }),
                            style: [o, S && s],
                            trapFocus: !0,
                            onDismiss: D,
                            children: null == t ? void 0 : t(z, u)
                        })
                    })
                })
        },
        828294: (e, t, n) => {
            function i(e) {
                let t = (0, n(83208).X)(e);
                return "on" === (0, n(604306).r)("agent_writer_custom_skills") || t
            }

            function a(e) {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || n(218744).default.checkGate({
                    gateName: e
                })
            }
            n.d(t, {
                N: () => i,
                a: () => a
            })
        },
        832139: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i() {
                return ((0, n(907620).T)("isSamsungPreload") || (0, n(907620).T)("isInstalledFromSamsungAppStore")) && n(218744).default.checkGate({
                    gateName: "samsung_disable_all_upgrades"
                })
            }
        },
        850563: (e, t, n) => {
            n.d(t, {
                G1: () => o,
                Ll: () => s,
                Pn: () => c,
                TU: () => i().TU,
                Vf: () => a,
                kQ: () => d,
                py: () => i().py,
                yD: () => r
            }), n(410838), n(813451), n(944114), n(898992), n(354520), n(672577), n(803949), n(581454), n(737550);
            var i = () => n(706968);

            function a(e) {
                return "inference" !== e.type && "queue-handoff" !== e.type && "reenqueue-with-delay" !== e.type && "record-map" !== e.type && "patch-start" !== e.type && "patch" !== e.type && "agent-search-extracted-results" !== e.type
            }

            function r(e) {
                return "patch" === e.type || "patch-start" === e.type
            }

            function s(e) {
                return "user-injected" === e.type && void 0 === e.displayMessage
            }

            function o(e) {
                let t;
                return (null == (t = e.find(e => "context" === e.type)) ? void 0 : t.value.surface) === "daily_brief_reminder" && 1 >= e.filter(e => "user" === e.type || "user-injected" === e.type && !s(e)).length
            }

            function l(e) {
                return "context" === e.type
            }

            function d(e) {
                let t = e.find(l);
                return null == t ? void 0 : t.value.surface
            }

            function c(e) {
                let t = 0,
                    n = e.findLastIndex(e => "user" === e.type);
                return -1 !== n && (t = n + 1), e.slice(t)
            }
        },
        853160: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleIcon: () => r,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                r = (0, n(104509).wt)("checkmarkCircle", a, "default")
        },
        855021: (e, t, n) => {
            n.d(t, {
                q: () => i
            });

            function i() {
                let e = (0, n(972740).L)(),
                    t = (0, n(226309).lh)({
                        spaceId: null == e ? void 0 : e.id
                    }),
                    i = (0, n(533992).v3)(),
                    a = (0, n(682985).K8)(() => n(375592).T.getData(i, {
                        userId: i.currentUser.id || ""
                    }), [i]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: i,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: a
                }), [i, e, t, a])
            }
        },
        861842: (e, t, n) => {
            n.d(t, {
                D6: () => f,
                Jf: () => s,
                Zr: () => l,
                _: () => a,
                bO: () => c,
                kO: () => o,
                nT: () => p,
                p5: () => g
            }), n(410838), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(672577), n(581454), n(737550);
            let i = (0, n(109939).YK)({
                unableToCreateTranscriptionBlockForCalendarEvent: {
                    id: "calendarEventActions.unableToCreateTranscriptionBlockForCalendarEvent",
                    defaultMessage: "A transcription block could not be created for this calendar event."
                },
                sharedBlockWithParticipants: {
                    id: "upcomingMeetings.sharedBlockWithParticipants",
                    defaultMessage: "Participants in your workspace have edit access to this page."
                },
                sharedBlockWithParticipantsCta: {
                    id: "upcomingMeetings.sharedBlockWithParticipants.cta",
                    defaultMessage: "Manage access"
                },
                transcriptionBlockAlreadyExists: {
                    id: "upcomingMeetings.transcriptionBlockAlreadyExists",
                    defaultMessage: "A meeting note already exists for this calendar event."
                },
                transcriptionBlockAlreadyStarted: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStarted",
                    defaultMessage: "This meeting is already being transcribed."
                },
                transcriptionBlockAlreadyStartedByUser: {
                    id: "calendarEventActions.transcriptionBlockAlreadyStartedByUser",
                    defaultMessage: "{transcriberName} is already transcribing"
                }
            });

            function a(e) {
                let {
                    environment: t,
                    transcriptionBlockStore: a
                } = e;
                (0, n(113955).L)({
                    item: {
                        label: n(962299).A.formatMessage(i.sharedBlockWithParticipants)
                    },
                    showButton: !0,
                    buttonText: n(962299).A.formatMessage(i.sharedBlockWithParticipantsCta),
                    onClick: () => {
                        (0, n(729619).Tk)({
                            environment: t,
                            store: a
                        })
                    }
                })
            }
            async function r(e) {
                let {
                    environment: t,
                    from: a,
                    event: r,
                    parent: s,
                    peekMode: o
                } = e, l = (0, n(583124).W)(), d = (await n(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: t,
                    from: a,
                    title: "title_with_event",
                    pageVisitSource: n(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: o,
                    calendarEvent: r,
                    sharedNote: l,
                    parent: s
                });
                if (!d) {
                    n(773352).log({
                        level: "error",
                        from: "calendarEventActions",
                        type: "unableToCreateTranscriptionBlockForCalendarEvent",
                        data: {
                            miscDataToConvertToString: {
                                eventId: r.id,
                                from: a,
                                parentId: s && "string" != typeof s ? s.id : s
                            }
                        }
                    }), n(436555).D6({
                        label: n(962299).A.formatMessage(i.unableToCreateTranscriptionBlockForCalendarEvent)
                    });
                    return
                }
                return d
            }
            async function s(e) {
                let {
                    environment: t,
                    event: a,
                    from: s,
                    parent: o,
                    peekMode: d,
                    method: c
                } = e, p = !1, f = (0, n(328765).S)();
                if (!f) return {
                    createdNewTranscriptionBlock: !1
                };
                let g = await l({
                    event: a,
                    environment: t,
                    spaceStore: f
                });
                if (g)(await n(68067).$.load()).navigateToTranscriptionBlock({
                    environment: t,
                    blockStore: g,
                    pageVisitSource: n(254656).y8.UpcomingMeetingCalendarEvent,
                    peekMode: d
                });
                else {
                    if (!(g = await r({
                            environment: t,
                            from: s,
                            event: a,
                            parent: o,
                            peekMode: d
                        }))) return {
                        createdNewTranscriptionBlock: !1
                    };
                    p = !0
                }
                return "side_peek" === d && await n(475097).default.waitUntil(() => {
                    var e;
                    return n(475097).default.isSidePeekOpen() && !!(null == (e = n(475097).default.peekTargetStore.state) ? void 0 : e.isReady())
                }), "upcoming_meeting_create_meeting_note" !== s || p || n(436555).D6({
                    label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyExists)
                }), u({
                    environment: t,
                    event: a,
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: g
                }), (0, n(414824).R)({
                    environment: t,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteClicked",
                            eventId: a.id,
                            product: "notion",
                            from: s,
                            method: c
                        }
                    }
                }), {
                    createdNewTranscriptionBlock: p,
                    transcriptionBlockStore: g
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    event: a,
                    from: r,
                    peekMode: o,
                    autoStart: l = !0,
                    method: d
                } = e, {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                } = await s({
                    environment: t,
                    from: r,
                    event: a,
                    peekMode: o,
                    method: d
                });
                if (u && "initial" !== (0, n(869708).by)(u).state) {
                    var p;
                    let e = null == (p = u.getModel()) || null == (p = p.getFormat().transcription_state_history) ? void 0 : p.findLast(e => "transcribing" === e.state);
                    if (e) {
                        let a = n(962299).A.getIntl(),
                            r = new(n(807825)).L(t, {
                                id: e.actor_id,
                                table: e.actor_table
                            }).getDisplayName(a);
                        n(436555).D6({
                            label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyStartedByUser, {
                                transcriberName: r
                            })
                        })
                    } else n(436555).D6({
                        label: n(962299).A.formatMessage(i.transcriptionBlockAlreadyStarted)
                    });
                    return {
                        createdNewTranscriptionBlock: c,
                        transcriptionBlockStore: u
                    }
                }
                if (l && u) {
                    let e = await n(785576).w.load();
                    await e.startTranscription({
                        environment: t,
                        blockStore: u,
                        from: r,
                        audioConsentEnabled: (0, n(774073).yz)()
                    })
                } else if (l) {
                    let e = await n(666234).k.load();
                    await e.startTranscribingBlockOnPageFromTrustedSource({
                        environment: t,
                        from: r
                    })
                }
                return {
                    createdNewTranscriptionBlock: c,
                    transcriptionBlockStore: u
                }
            }
            async function l(e) {
                let t, {
                        event: i,
                        spaceStore: a,
                        environment: r
                    } = e,
                    {
                        blockAttachments: s
                    } = i,
                    o = r.api.callApi({
                        environment: r,
                        eventName: "getTranscriptionBlockForEvent",
                        data: {
                            eventUid: i.uid,
                            spaceId: a.id
                        }
                    });
                null != s && s.length && (t = d({
                    event: i,
                    spaceStore: a
                }));
                let l = await o;
                if ("failed" === l.type) return t;
                let c = new Set(l.data.transcriptionBlockPointers.map(e => e.id)),
                    u = new Set((null == s ? void 0 : s.map(e => e.id)) ? ? []),
                    p = (0, n(981990)._)(c, u);
                return 0 === p.size ? t : (n(773352).log({
                    level: "warning",
                    from: "maybeGetTranscriptionBlockStoreFromEvent",
                    type: "missingTranscriptionRecordPointer",
                    data: {
                        miscDataToConvertToString: {
                            missingPointers: Array.from(p),
                            verifiedPointers: Array.from(c),
                            localPointers: Array.from(u),
                            eventId: i.id,
                            spaceId: a.id
                        }
                    }
                }), (0, n(440143).Y)().update(e => {
                    let t = null == e ? void 0 : e.events.find(e => e.accountId === i.accountId && e.calendarId === i.calendarId && e.id === i.id);
                    return t && (t.blockAttachments = [...Array.from(p).map(e => ({
                        spaceId: a.id,
                        table: "block",
                        id: e
                    })), ...t.blockAttachments ? ? []]), e
                }), t = d({
                    event: i,
                    spaceStore: a
                }))
            }
            async function d(e) {
                var t, i;
                let {
                    event: a,
                    spaceStore: r,
                    timeoutMs: s = 4e3
                } = e, o = (null == (t = a.blockAttachments) ? void 0 : t.map(e => n(970831).B.createChildStore(r, e))) ? ? [];
                if (0 === o.length) return;
                let l = new(n(345426)).ComputedStore(() => (0, n(787971).gw)({
                        event: a,
                        transcriptionBlockStores: o
                    }), {
                        debugName: `getPrimaryTranscriptionBlockStoreFromEvent-${a.uid}`
                    }),
                    d = l.getState();
                if ("LOADING" === d.reason && (d = await new Promise(e => {
                        let t = window.setTimeout(() => {
                                e(void 0), l.removeListener(n)
                            }, s),
                            n = i => {
                                "LOADING" !== i.getState().reason && (e(i.getState()), clearTimeout(t), l.removeListener(n))
                            };
                        l.addListener(n)
                    })), null != (i = d) && i.primaryTranscriptionBlockStore) return d.primaryTranscriptionBlockStore
            }

            function c(e) {
                var t;
                return null == (t = e.attendees) ? void 0 : t.some(e => e.notionUserId && !e.self)
            }
            async function u(e) {
                let {
                    environment: t,
                    event: i,
                    transcriptionBlockStore: r,
                    createdNewTranscriptionBlock: s
                } = e;
                s && r && (0, n(583124).W)() && (r.isReady() || await r.load(), (0, n(404926).r)({
                    environment: t,
                    store: r
                }) || c(i) && a({
                    environment: t,
                    transcriptionBlockStore: r
                }))
            }
            async function p(e) {
                let {
                    event: t,
                    from: i,
                    environment: a,
                    calendarBotId: r,
                    peekMode: o
                } = e, l = !(await s({
                    environment: a,
                    from: i,
                    event: t,
                    peekMode: o ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_clicked",
                                eventProperties: a
                            };
                        case "upcoming_meeting_primary_note":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_primary_note_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_event_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: a,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, n(104310).u)({
                    event: d
                }), r && (0, n(414824).R)({
                    environment: a,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingNoteOpened",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: r
                })
            }
            async function f(e) {
                let {
                    event: t,
                    from: i,
                    environment: a,
                    calendarBotId: r,
                    peekMode: s
                } = e, l = !(await o({
                    environment: a,
                    event: t,
                    from: i,
                    peekMode: s ? ? "side_peek"
                })).createdNewTranscriptionBlock, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meeting_start_transcribing":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_start_transcribing_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_start_transcribing":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_start_transcribing_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_start_transcribing_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "dropdown_transcribe_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: i,
                    environment: a,
                    eventProperties: {
                        calendar_event_id: t.id,
                        has_existing_meeting_note: l
                    }
                });
                d && (0, n(104310).u)({
                    event: d
                }), r && (0, n(414824).R)({
                    environment: a,
                    data: {
                        type: "track",
                        payload: {
                            event: "meetingTranscriptionStarted",
                            eventId: t.id,
                            calendarId: t.calendarId,
                            from: i,
                            hasExistingNote: l
                        }
                    },
                    botId: r
                })
            }

            function g(e) {
                var t, i;
                let {
                    event: a,
                    from: r,
                    environment: s,
                    calendarBotId: o
                } = e, l = null == (t = a.conferencing) ? void 0 : t.providerName, d = function(e) {
                    let {
                        from: t,
                        environment: i,
                        eventProperties: a
                    } = e, r = (0, n(712358).K)(i);
                    switch (t) {
                        case "upcoming_meetings":
                            return {
                                eventName: "ai_meetings_tab_upcoming_meetings_event_join_meeting_clicked",
                                eventProperties: a
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_and_transcribe":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "primary_join_and_transcribe_button"
                                }
                            };
                        case "in_app_meeting_notification_upcoming_stage_join_meeting_only":
                            return {
                                eventName: "in_app_meeting_notification_upcoming_stage_join_meeting_clicked",
                                eventProperties: { ...a,
                                    is_sidebar_expanded: r,
                                    from: "dropdown_join_meeting_only_button"
                                }
                            };
                        default:
                            return
                    }
                }({
                    from: r,
                    environment: s,
                    eventProperties: {
                        calendar_event_id: a.id,
                        conferencing_provider: l
                    }
                });
                if (d && (0, n(104310).u)({
                        event: d
                    }), o) {
                    let e = "upcoming_meetings" === r ? "upcomingMeetings" : "transcription_confirmation_deeplink" === r ? void 0 : r;
                    (0, n(414824).R)({
                        environment: s,
                        data: {
                            type: "track",
                            payload: {
                                event: "joinMeeting",
                                eventId: a.id,
                                calendarId: a.calendarId,
                                conferencingProvider: l,
                                method: e
                            }
                        },
                        botId: o
                    })
                }
                null != (i = a.conferencing) && i.url && (0, n(624621).L)({
                    environment: s,
                    url: a.conferencing.url
                })
            }
        },
        862215: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                let {
                    device: n
                } = e;
                n.isAndroid && t.focus(), t.select()
            }
        },
        890142: (e, t, n) => {
            n.d(t, {
                l: () => a
            });
            let i = (0, n(109939).YK)({
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

            function a(e, t) {
                let {
                    removeComma: a,
                    useAmpersand: r
                } = t || {};
                if (0 === e.length) return "";
                let s = e[0];
                if (1 === e.length) return s;
                let o = e[1];
                if (2 === e.length) return r ? n(962299).A.formatMessage(i.twoItemsWithAmpersand, {
                    item1: s,
                    item2: o
                }) : n(962299).A.formatMessage(i.twoItems, {
                    item1: s,
                    item2: o
                });
                let l = e.length - 1;
                return r ? a ? n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: s,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersand, {
                    item1: s,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItems, {
                    item1: s,
                    numberOfOther: l
                })
            }
        },
        918150: (e, t, n) => {
            n.d(t, {
                v: () => s
            });
            let i = new(n(815048)).O2("idleTranscriptionActions", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 186931))),
                a = new(n(815048)).O2("transcriptionErrorActions", async () => await Promise.all([n.e(75134), n.e(9773), n.e(36556), n.e(55373), n.e(36192), n.e(40537), n.e(5410), n.e(40994), n.e(57042), n.e(54280), n.e(16712), n.e(93186), n.e(80139), n.e(67542), n.e(15389), n.e(97732), n.e(23519), n.e(63771), n.e(53050), n.e(87353), n.e(45213), n.e(12354), n.e(5721), n.e(57688), n.e(17250), n.e(64696), n.e(39726), n.e(87971), n.e(29663), n.e(74145), n.e(55067), n.e(79349), n.e(90735), n.e(50354), n.e(71136), n.e(86102), n.e(30671), n.e(3101)]).then(n.bind(n, 164093))),
                r = new(n(815048)).O2("desktopUpdateActions", async () => await Promise.all([n.e(9773), n.e(40537), n.e(62475), n.e(3151), n.e(98629), n.e(76361), n.e(64134), n.e(7097)]).then(n.bind(n, 327237))),
                s = {
                    transcription_idle: async (e, t) => {
                        (await i.load()).showIdleTranscriptionToast(e, t)
                    },
                    transcription_error: async (e, t) => {
                        (await a.load()).showTranscriptionErrorToast(e, t)
                    },
                    transcription_recording_stopped: async (e, t) => {
                        (await n(212680).i.load()).showTranscriptionRecordingStoppedToast(e, t)
                    },
                    desktop_update_available: async (e, t) => {
                        (await r.load()).showDesktopUpdateAvailableToast(e, t)
                    }
                }
        },
        921048: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                magnifyingGlassSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.97 1.97 12.46 12.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.1 1.975a5.125 5.125 0 1 0 3.155 9.164l3.107 3.107a.625.625 0 1 0 .884-.884l-3.107-3.107A5.125 5.125 0 0 0 7.1 1.975M3.225 7.1a3.875 3.875 0 1 1 7.75 0 3.875 3.875 0 0 1-7.75 0"
                    })
                },
                a = (0, n(104509).wt)("magnifyingGlassSmall", i, "small")
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => a
            }), n(898992), n(430670), n(737550);
            let i = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function a(e) {
                let t, {
                        isOnboardingAgent: a,
                        searchScopes: s,
                        searchSessionId: o,
                        useWebSearch: l,
                        useComputer: d,
                        yoloMode: c,
                        useReadOnlyMode: u,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: g,
                        workflowId: m,
                        modelFromUser: _,
                        writerMode: v,
                        useRulePrioritization: h,
                        useCustomAgentDraft: y,
                        useDraftActorPointer: b,
                        ephemeralInstructions: S,
                        databaseAgentConfigMode: k,
                        environment: x,
                        spaceId: w,
                        spaceStore: I
                    } = e,
                    A = n(886556).z.isZeroRetentionEnabled(),
                    C = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), r),
                    M = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), r),
                    T = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), r),
                    j = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), r),
                    E = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), r),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), r),
                    D = (0, n(388647).p)({
                        environment: x
                    }),
                    F = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), r),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), r),
                    R = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), r),
                    U = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), r),
                    N = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), r),
                    L = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), r),
                    O = r("agent_enable_create_thread"),
                    V = r("software_factory_page"),
                    z = r("enable_script_agent_writer"),
                    W = r("database_agents_on_script_agent"),
                    $ = (!k || W) && (!v || z),
                    K = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), r),
                    G = r("agent_crdt_operations"),
                    q = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), r),
                    H = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), r),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), r),
                    Z = (0, n(328765).S)(),
                    X = I ? ? (void 0 === w || (null == Z ? void 0 : Z.id) === w ? Z : void 0),
                    J = r("sams_specials"),
                    Q = r("ai_image_generation") && !J && ((null == X ? void 0 : X.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), r),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), r),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), r),
                    ei = r("agent_search_tool_v2"),
                    ea = r("agent_update_page_autofixer"),
                    er = r("agent_markdown_vnext"),
                    es = r("agent_update_page_order_updates"),
                    eo = r("agent_support_property_reorder"),
                    el = r("agent_short_update_page_result"),
                    ed = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ec = i.getState(),
                    eu = null == ec ? void 0 : ec.pageId,
                    ep = v || f ? void 0 : function() {
                        switch (n(218744).default.getEligibleGroup({
                            experimentId: "ai_product_retention_agent_follow_ups",
                            defaultGroup: "control"
                        })) {
                            case "button_nudge":
                                return ["button", "nudge"];
                            case "button_control":
                                return ["button", "default"];
                            case "nudge":
                                return ["nudge"];
                            default:
                                return
                        }
                    }(),
                    ef = "on" === n(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_speculative_search",
                        defaultGroup: "control"
                    }),
                    eg = (0, n(876688).wd)(),
                    em = eg.some(e => (0, n(281708).yY)(e)),
                    e_ = r("mail_explicit_tool_calls"),
                    ev = r("outlook_custom_agent_email_connector"),
                    eh = r("agent_query_calendar_tool") && em,
                    ey = eg.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    eb = r("agent_query_mail_tool") && ey,
                    eS = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    ek = r("agent_ask_survey");
                return t = !m && (u ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: M,
                    enableAgentIntegrations: T,
                    enableCustomAgents: C,
                    enableExperimentalIntegrations: j,
                    enableAgentViewNotificationsTool: Y,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: E,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: G,
                    enableAgentCardCustomization: q,
                    enableSystemPromptAsPage: H,
                    enableUserSessionContext: K,
                    enableScriptAgentAdvanced: !!$ && B,
                    enableScriptAgent: !!$ && D,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!$ && !!f && F,
                    enableScriptAgentGoogleDriveInCustomAgent: !!$ && !!f && P,
                    enableScriptAgentSlack: !!$ && R,
                    enableScriptAgentMcpServers: !!$ && U,
                    enableScriptAgentMail: !!$ && N,
                    enableScriptAgentCalendar: !!$ && D,
                    enableScriptAgentCustomToolCalling: !!$ && L,
                    enableCreateAndRunThread: O,
                    enableSoftwareFactoryPage: V,
                    ...f ? {} : {
                        enableAgentGenerateImage: Q
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: eh,
                    enableQueryMail: eb,
                    enableMailExplicitToolCalls: e_,
                    enableMailAgentMultiProviderSupport: ev,
                    useRulePrioritization: h ? ? eS,
                    memoryDatabasePageId: eu,
                    workflowId: m,
                    availableConnectors: eg,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: v ? [] : s ? ? n(425749).R2,
                    useSearchToolV2: ei,
                    useWebSearch: !v && !A && (void 0 === l || l),
                    useComputer: d ? ? !0,
                    yoloMode: c ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!v,
                    model: v ? ed : p,
                    searchSessionId: o,
                    modelFromUser: !v && (_ ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!g,
                    useCustomAgentDraft: !!y,
                    use_draft_actor_pointer: !!b,
                    enableUpdatePageAutofixer: ea,
                    enableMarkdownVNext: er,
                    enableUpdatePageOrderUpdates: es,
                    enableAgentSupportPropertyReorder: eo,
                    agentShortUpdatePageResult: el,
                    ephemeralInstructions: S,
                    ...v || a || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: ek
                    },
                    databaseAgentConfigMode: !!k,
                    isOnboardingAgent: !!a,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function r(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        937776: (e, t, n) => {
            n.d(t, {
                B: () => r
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.76",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 9.875a.625.625 0 1 0 0 1.25h4a.625.625 0 1 0 0-1.25z"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 4.75c0-.897.728-1.625 1.625-1.625h10.5c.898 0 1.625.728 1.625 1.625v1.57c0 .676-.413 1.256-1 1.5v7.43c0 .898-.727 1.625-1.625 1.625h-8.5a1.625 1.625 0 0 1-1.625-1.625V7.82c-.587-.244-1-.824-1-1.5zm11.5 3.195h-9.25v7.305c0 .207.168.375.375.375h8.5a.375.375 0 0 0 .375-.375zm1-1.625V4.75a.375.375 0 0 0-.375-.375H4.75a.375.375 0 0 0-.375.375v1.57c0 .205.164.372.369.375h10.512a.375.375 0 0 0 .369-.375"
                        })]
                    })
                },
                r = (0, n(104509).wt)("archiveBox", a, "default")
        },
        948561: (e, t, n) => {
            function i() {
                var e;
                return (null == (e = n(728372).AppStoreSidebarSpaceViewStore.getState()) || null == (e = e.getSettings()) ? void 0 : e.ai_meeting_notes_notification_dismiss_count) ? ? 0
            }

            function a(e) {
                let {
                    currentCount: t,
                    threshold: n,
                    hasTranscribedMinutes: i
                } = e;
                return !!n && !(n <= 0) && !1 === i && t >= n
            }
            n.d(t, {
                i: () => a,
                w: () => i
            })
        },
        964282: (e, t, n) => {
            function i(e) {
                let t = n(906745).DateTime.fromMillis(e.startUnixTimestampMS),
                    i = e.endUnixTimestampMS ? n(906745).DateTime.fromMillis(e.endUnixTimestampMS) : void 0,
                    a = n(906745).DateTime.fromMillis(e.startOfWeekUnixTimestampMS),
                    r = n(906745).DateTime.fromMillis(e.endOfWeekUnixTimestampMS),
                    s = t.startOf("day"),
                    o = n(906745).DateTime.max(a, s),
                    l = Math.ceil(o.diff(a, "days").get("days")),
                    d = 1;
                if (i) {
                    let e = i.endOf("day");
                    d = Math.ceil(n(906745).DateTime.min(r, e).diff(o, "days").get("days"))
                }
                return {
                    start: t,
                    end: i,
                    startOfWeek: a,
                    endOfWeek: r,
                    startColumn: l,
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
                sR: () => o,
                vZ: () => a,
                xy: () => u,
                y6: () => l
            }), n(944114), n(898992), n(823215), n(354520), n(672577);
            let r = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 15
                },
                s = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 5,
                    startedMinsThreshold: 5
                },
                o = {
                    upcomingMinsThreshold: 10,
                    startingMinsThreshold: 15,
                    startedMinsThreshold: 15
                };

            function l(e) {
                let {
                    events: t,
                    accounts: i,
                    thresholds: a = r,
                    filters: s
                } = e, o = t.filter(e => {
                    if (!e.conferencing && !(null != s && s.includeEventsWithoutConferencing)) return !1;
                    let t = i.find(t => t.id === e.accountId);
                    return !(!(null != t && t.email) || !(0, n(120462).Ko)(e, t.email) || "declined" === (e.responseStatus ? ? "declined")) && !e.isAllDay
                });
                if (0 === o.length) return [];
                let {
                    upcomingMinsThreshold: l,
                    startingMinsThreshold: d,
                    startedMinsThreshold: c
                } = a, u = n(906745).DateTime.now(), p = (null == s ? void 0 : s.maxDaysInFuture) !== void 0 ? s.maxDaysInFuture * n(695216).XQ : void 0, f = (null == s ? void 0 : s.maxDaysInPast) !== void 0 ? s.maxDaysInPast * n(695216).XQ : void 0, g = [], m = [], _ = [], v = [], h = [], y = [];
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
                    if (void 0 !== f && i > f) continue;
                    if (null != s && s.excludeEventsOnDifferentDays && u.setZone(t.start.zone).toISODate() !== t.start.toISODate()) continue;
                    let a = t.start.diff(u, "minutes").minutes;
                    if (void 0 === p || !(a > p))
                        if (a >= 0 && a <= l) g.push(e);
                        else if (a < 0) {
                        let n = -a,
                            r = i >= 0 ? i : void 0;
                        n > 0 && n <= d ? _.push(e) : n > d && n <= c ? v.push(e) : t.contains(u) ? m.push(e) : void 0 !== f && void 0 !== r && r <= f && h.push(e)
                    } else y.push(e)
                }
                return m.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.start.dateTime, {
                        zone: e.start.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.start.dateTime, {
                        zone: t.start.timeZone
                    }).diff(i).toMillis()
                }), h.length > 1 && h.sort((e, t) => {
                    let i = n(906745).DateTime.fromISO(e.end.dateTime, {
                        zone: e.end.timeZone
                    });
                    return n(906745).DateTime.fromISO(t.end.dateTime, {
                        zone: t.end.timeZone
                    }).diff(i).toMillis()
                }), [...g, ..._, ...v, ...null != s && s.excludeInProgressEvents ? [] : m, ...h, ...null != s && s.excludeUpcomingLaterEvents ? [] : y]
            }

            function d(e, t) {
                return l({
                    events: e,
                    accounts: t,
                    thresholds: r,
                    filters: void 0
                })[0]
            }

            function c(e, t, n) {
                return l({
                    events: e,
                    accounts: t,
                    thresholds: s,
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
                let s = n(970831).B.createChildStore(t, {
                    table: n(832375).evP,
                    id: r
                });
                return s.load(), s
            }
        },
        966458: (e, t, n) => {
            n.d(t, {
                Jg: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    product: i,
                    userId: a,
                    billingData: r,
                    spaceUserStore: s,
                    spaceStore: o,
                    existingRequests: l
                } = e;
                if (!i || !(null != o && o.id) || !a) return "not_eligible";
                if ((0, n(192159).eh)(r, i) && "ai_credit_pack" !== i) return "product_already_available";
                let d = (0, n(880280).rU)(i),
                    c = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: i,
                            spaceStore: a
                        } = e;
                        if (!a || !i || !t) return !1;
                        let r = a.getDisableMemberUpgradeRequests();
                        return !(n(986939).A.isMobile || r || !(0, n(262166).jR)((0, n(192159).AI)(t)) || (0, n(192159).et)(t)) && !!(i.isMember() && !i.isWorkspaceOwner())
                    }({
                        billingData: r,
                        spaceUserStore: s,
                        spaceStore: o
                    });
                if (!(d && c) || void 0 === l) return "not_eligible";
                let u = null == (t = l[i]) ? void 0 : t.find(e => e.created_by_id === a);
                return (null == u ? void 0 : u.request_status) || "unrequested"
            }
        },
        968864: (e, t, n) => {
            n.d(t, {
                Y: () => r,
                G: () => a
            });
            let i = {
                clipboardActions: n(235645).R.clipboardActions,
                duplicationActions: n(411648).VI.duplicateActions,
                formulasModule: n(864850).T.formulas,
                insertBlockActions: n(162865).H,
                katex: n(406921).V,
                markdownLinkifyIt: n(94386).g,
                pagePresentationActions: n(590943).e,
                tinyMceMicrosoftWordPasteFilter: n(393771).S
            };

            function a(...e) {
                for (let t of e) i[t].load()
            }

            function r(e) {
                let t = i[e].getLoadingState();
                if ("idle" === t.status) a(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        982993: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        siteSettingContentType: "initial"
                    }
                }
            }
            let r = new a
        },
        991812: (e, t, n) => {
            n.d(t, {
                Hj: () => a,
                Lc: () => l,
                OZ: () => s,
                d_: () => o,
                rW: () => r,
                tM: () => d,
                uE: () => i
            });
            let i = 4,
                a = 2,
                r = 4,
                s = 20,
                o = 4,
                l = 6,
                d = 10
        }
    }
]);