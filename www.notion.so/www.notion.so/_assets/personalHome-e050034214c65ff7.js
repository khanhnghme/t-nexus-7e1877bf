"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [30673, 33503, 37342, 44802, 56809], {
        2919: (e, t, n) => {
            n.d(t, {
                n: () => i
            });

            function i(e) {
                let t = (0, n(533992).v3)(),
                    {
                        device: i,
                        WindowSizeStore: a
                    } = t,
                    o = (0, n(682985).K8)(() => {
                        let e = a.state.height,
                            i = n(986939).A.isMobile && n(498368).Ay.state.open ? e : 0;
                        return (0, n(175864).C)(t) + i
                    }, [t, a]);
                return (0, n(682985).K8)(() => "home-phone" === e ? n(681693).q3 : i.isTablet ? 380 : i.isIOS ? Math.max(300, o) : n(986939).A.isMobile ? 400 : "side-peek" === e || "center-peek" === e ? n(447036).ln : "home" === e ? n(681693).wH : "30vh", [i, o, e])
            }
        },
        33918: (e, t, n) => {
            n.d(t, {
                G: () => i
            });

            function i(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        57168: (e, t, n) => {
            n.r(t), n.d(t, {
                ClientAIChatStore: () => d,
                UserChatPreferenceLocalStorageStore: () => s,
                defaultClientAIChatStore: () => c,
                defaultLegacyThreadConfig: () => l
            });
            var i = () => n(546605);
            n(898992), n(354520), n(430670), n(803949);
            let a = "confirmed_safe_by_user",
                o = {
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
            class r extends i().Store {
                getInitialState() {
                    return o
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(o)
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
                    } = e, o = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!o) return;
                    let r = o.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === i);
                    if (r < 0) return;
                    let s = o.stagedInferenceTranscriptSteps[r];
                    if ("attachment" !== s.type) return;
                    let l = null != (n = s.metadata) && n.guardrail ? { ...s.metadata.guardrail,
                            attachmentRisk: a
                        } : {
                            attachmentRisk: a
                        },
                        d = { ...s,
                            metadata: { ...s.metadata ? ? {},
                                guardrail : l
                            }
                        },
                        c = [...o.stagedInferenceTranscriptSteps];
                    c[r] = d, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...o,
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
            let s = new(n(245541)).R({
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
                        let t = new r;
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
        63528: (e, t, n) => {
            n.d(t, {
                l: () => r
            }), n(898992), n(354520), n(672577), n(737550);
            var i = () => n(552923);
            class a extends i().u {
                abortController;
                isAcquiringWebLock = !1;
                isAcquiringVisibleTabLock = !1;
                hasVisibleTabLock = !1;
                lockRequestId = 0;
                visibilityChangeHandler;
                unloadHandler;
                constructor() {
                    super({
                        getInitialState: () => ({
                            hasWebLock: !1
                        }),
                        effect: () => (n(728372).AppStoreSidebarSpaceIdStore.addListener(e), e(), () => {
                            n(728372).AppStoreSidebarSpaceIdStore.removeListener(e), this.cleanupLastLock()
                        })
                    });
                    const e = this.setupCalendarBrowserSubscriptionLock.bind(this);
                    this.visibilityChangeHandler = async () => {
                        document.hasFocus() && await (0, n(975162).wR)(100), "visible" === document.visibilityState && (this.requestWebLock({
                            steal: document.hasFocus()
                        }), this.maybeRequestSecondaryVisibleTabLock()), "hidden" === document.visibilityState && this.maybeRelinquishLock()
                    }, this.unloadHandler = () => {
                        this.cleanupLastLock()
                    }
                }
                cleanupLastLock() {
                    var e;
                    null == (e = this.abortController) || e.abort("cleanup_last_lock"), document.removeEventListener("visibilitychange", this.visibilityChangeHandler), window.removeEventListener("focus", this.visibilityChangeHandler), window.removeEventListener("unload", this.unloadHandler)
                }
                async maybeRelinquishLock() {
                    await (0, n(975162).wR)(100), "visible" === document.visibilityState || document.hasFocus() || this.state.hasWebLock && this.getSecondaryVisibleTabShouldStealChannel().postMessage("relinquish")
                }
                async setupCalendarBrowserSubscriptionLock() {
                    this.cleanupLastLock(), this.requestWebLock({
                        steal: !1
                    }), this.maybeRequestSecondaryVisibleTabLock(), await (0, n(975162).lG)([this.waitUntil(() => this.state.hasWebLock), n(329464).A.waitUntil(() => n(329464).A.state.initialRenderCompleted)]), this.requestWebLock({
                        steal: "visible" === document.visibilityState && document.hasFocus()
                    }), document.addEventListener("visibilitychange", this.visibilityChangeHandler), window.addEventListener("focus", this.visibilityChangeHandler), window.addEventListener("unload", this.unloadHandler)
                }
                getLockName() {
                    let e = n(728372).AppStoreSidebarSpaceIdStore.getState();
                    return e ? `app_level_calendar_event_subscription_leader-${e}` : "app_level_calendar_event_subscription_leader"
                }
                getSecondaryVisibleTabLockName() {
                    return `${this.getLockName()}-secondary_visible_tab`
                }
                getSecondaryVisibleTabShouldStealChannel() {
                    return new BroadcastChannel(`${this.getSecondaryVisibleTabLockName()}-should_steal`)
                }
                async maybeRequestSecondaryVisibleTabLock() {
                    if ("visible" !== document.visibilityState || this.state.hasWebLock || this.isAcquiringVisibleTabLock || this.hasVisibleTabLock) return;
                    this.isAcquiringVisibleTabLock = !0;
                    let e = new AbortController;
                    document.addEventListener("visibilitychange", () => e.abort("became_hidden"), {
                        once: !0,
                        signal: e.signal
                    }), this.waitUntil(() => this.state.hasWebLock, {
                        signal: e.signal
                    }).then(() => e.abort("became_leader")).catch(() => {});
                    try {
                        await navigator.locks.request(this.getSecondaryVisibleTabLockName(), {
                            mode: "exclusive",
                            signal: e.signal
                        }, async () => {
                            this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !0, e.signal.aborted || await new Promise(t => {
                                this.getSecondaryVisibleTabShouldStealChannel().addEventListener("message", () => {
                                    this.requestWebLock({
                                        steal: !0
                                    }), t()
                                }, {
                                    once: !0,
                                    signal: e.signal
                                }), e.signal.addEventListener("abort", t, {
                                    once: !0
                                })
                            })
                        })
                    } catch {}
                    this.isAcquiringVisibleTabLock = !1, this.hasVisibleTabLock = !1, e.signal.aborted || e.abort("cleanup")
                }
                async visibleTabAwaitingLockExists() {
                    var e, t;
                    let n = await navigator.locks.query(),
                        i = null == (e = n.held) || null == (e = e.find(e => e.name === this.getSecondaryVisibleTabLockName())) ? void 0 : e.clientId,
                        a = null == (t = n.pending) ? void 0 : t.filter(e => e.name === this.getLockName());
                    return i && (null == a ? void 0 : a.some(e => e.clientId === i))
                }
                async requestWebLock(e) {
                    var t;
                    let {
                        steal: i
                    } = e;
                    if (!n(728372).AppStoreSidebarSpaceIdStore.getState() || this.state.hasWebLock || this.isAcquiringWebLock && !i) return;
                    let a = ++this.lockRequestId;
                    this.isAcquiringWebLock = !0, null == (t = this.abortController) || t.abort("new_request");
                    let o = new AbortController;
                    this.abortController = o;
                    try {
                        await navigator.locks.request(this.getLockName(), {
                            mode: "exclusive",
                            steal: i,
                            signal: i ? void 0 : o.signal
                        }, async () => {
                            this.isAcquiringWebLock = !1, "visible" !== document.visibilityState && await this.visibleTabAwaitingLockExists() && (await (0, n(975162).wR)(100), this.getSecondaryVisibleTabShouldStealChannel().postMessage("should_steal")), o.signal.aborted || (this.setState({
                                hasWebLock: !0
                            }), await new Promise(e => {
                                o.signal.addEventListener("abort", () => e(), {
                                    once: !0
                                })
                            }))
                        })
                    } catch {}
                    a === this.lockRequestId && (this.setState({
                        hasWebLock: !1
                    }), this.isAcquiringWebLock = !1, o.signal.aborted || this.requestWebLock({
                        steal: !1
                    })), o.signal.aborted || o.abort("cleanup"), this.maybeRequestSecondaryVisibleTabLock()
                }
            }
            let o = new a,
                r = new(n(345426)).ComputedStore(() => n(218744).default.checkGate({
                    gateName: "debug__disable_app_activity_subscription_leader"
                }) ? {
                    hasWebLock: !1
                } : o.getState(), {
                    debugName: "DEBUG__InAppActivitySubscriptionLeaderStore"
                });
            (0, n(202146).exposeDebugGetter)("InAppActivitySubscriptionLeaderStore", () => r.getState())
        },
        79423: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        isHovered: !1
                    }
                }
            }
            let o = new a
        },
        98454: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 4,
                    height: 24,
                    width: 24
                },
                r = i.memo(function({ ...e
                }) {
                    let t = (0, n(109939).tz)().formatMessage({
                        defaultMessage: "View options",
                        id: "PersonalHomePanel.moreDropdownButton.tooltip"
                    });
                    return (0, a.jsx)(n(64960).Ay, {
                        ariaLabel: t,
                        style: o,
                        ...e,
                        children: (0, a.jsx)(n(16275).I, {
                            icon: n(361226).ellipsisSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        })
                    })
                })
        },
        120509: (e, t, n) => {
            n.d(t, {
                Q: () => i
            }), n(898992), n(354520), n(581454);

            function i(e) {
                let {
                    searchQuery: t,
                    filterCategory: i,
                    availableOffline: a = !1,
                    disable: o = !1
                } = e, r = (0, n(533992).v3)(), s = (0, n(109939).tz)();
                return (0, n(682985).K8)(() => {
                    if (o) return [];
                    let e = n(987458).A.state.offlinePages ? ? {};
                    return Object.keys(e).map(o => {
                        var l;
                        let d = e[o];
                        if (void 0 === d) return;
                        let {
                            is_explicitly_offlined_origin: c,
                            is_autosynced_origin: u
                        } = d;
                        if (!(c || u) || a && !(0, n(597845).Bd)(o) || ! function(e) {
                                let {
                                    filterCategory: t,
                                    isExplicitlyOfflinedOrigin: i,
                                    isAutosyncedOrigin: a
                                } = e;
                                switch (t) {
                                    case "all":
                                        return !0;
                                    case "manual":
                                        return i;
                                    case "autosynced":
                                        return a;
                                    default:
                                        (0, n(722371).HB)(t)
                                }
                            }({
                                filterCategory: i,
                                isExplicitlyOfflinedOrigin: c,
                                isAutosyncedOrigin: u
                            })) return;
                        let p = new(n(970831)).B(r, {
                            table: n(832375).evP,
                            id: o
                        });
                        if (t && ! function(e) {
                                let {
                                    pageBlockStore: t,
                                    searchQuery: i,
                                    intl: a
                                } = e, {
                                    displayTitle: o
                                } = (0, n(471848).tL)({
                                    store: t,
                                    intl: a
                                });
                                return void 0 !== o && o.toLowerCase().includes(i.toLowerCase())
                            }({
                                pageBlockStore: p,
                                searchQuery: t,
                                intl: s
                            }) || (null == (l = (0, n(328765).S)()) ? void 0 : l.id) !== p.getSpaceId()) return;
                        let m = p.getLastEditedTime();
                        return {
                            id: o,
                            downloadStatus: d.download_status,
                            isClickable: !1,
                            lastModifiedTime: m,
                            pageBlockStore: p,
                            showOptions: c
                        }
                    }).filter(n(722371).O9)
                }, [o, a, i, r, t, s])
            }
        },
        121823: (e, t, n) => {
            n.d(t, {
                $: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.91 1.23 15.18 17.53",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M16.958 13.771a.625.625 0 0 1 1.028.71 4.8 4.8 0 0 1-3.326 2.033v.997h2.21a.625.625 0 0 1 0 1.25H11.2a.625.625 0 1 1 0-1.25h2.21v-.997a4.8 4.8 0 0 1-3.326-2.032.626.626 0 0 1 1.029-.711 3.55 3.55 0 0 0 2.922 1.535 3.55 3.55 0 0 0 2.923-1.535"
                        }), (0, i.jsx)("path", {
                            d: "M12.535 1.239c1.174 0 2.125.951 2.125 2.125v3.032a4 4 0 0 0-.447-.053l-.178-.005a3.45 3.45 0 0 0-3.45 3.45v2.464a1.875 1.875 0 0 0-1.53 2.94c.338.49.747.926 1.212 1.297H5.035a2.125 2.125 0 0 1-2.125-2.125v-11c0-1.174.951-2.125 2.125-2.125zm-6.25 5.663a.55.55 0 1 0 0 1.1H9a.55.55 0 0 0 0-1.1zm0-2.5a.55.55 0 1 0 0 1.1h5a.55.55 0 0 0 0-1.1z"
                        }), (0, i.jsx)("path", {
                            d: "M14.035 7.664c1.173 0 2.125.951 2.125 2.125v2.52a2.125 2.125 0 0 1-4.25 0v-2.52c0-1.174.951-2.125 2.125-2.125"
                        })]
                    })
                },
                o = (0, n(104509).wt)("paperMicrophoneFill", a, "fill")
        },
        126472: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                templatesSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.82 1.3 14.38 13.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m14.98 12.41-1.86-3.22c.55-.25.91-.8.91-1.4V2.83c0-.84-.69-1.53-1.53-1.53H7.32c-.84 0-1.53.69-1.53 1.53v1.2C5.61 4.01 5.43 4 5.24 4 2.8 3.99.82 5.98.82 8.42s1.99 4.43 4.43 4.43q.36 0 .72-.06a1.53 1.53 0 0 0 1.49 1.91h6.2c.55 0 1.04-.28 1.32-.76s.28-1.05 0-1.53M7.32 9.33h.58L7 10.9c-.5.36-1.11.55-1.75.55-1.67 0-3.03-1.36-3.03-3.03A3.034 3.034 0 0 1 5.8 5.44V7.8c0 .84.68 1.52 1.52 1.52zm5.31-1.53c0 .07-.06.13-.13.13h-.11l-.51-.89c-.27-.46-.74-.74-1.27-.76a1.53 1.53 0 0 0-1.31.65c-.03.04-.06.07-.08.11l-.51.88H7.32c-.07 0-.12-.05-.12-.12V2.83c0-.07.06-.13.13-.13h5.18c.07 0 .13.06.13.13V7.8zm-5.3 5.31 3.05-5.28s.04-.06.06-.08c.03-.04.07-.07.12-.07s.09.02.12.07l3.09 5.36s.02.09 0 .13-.07.06-.11.06h-6.2s-.09-.02-.11-.06a.15.15 0 0 1 0-.13z"
                    })
                },
                a = (0, n(104509).wt)("templatesSmall", i, "small")
        },
        152280: (e, t, n) => {
            n.r(t), n.d(t, {
                bookSmallIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.48 2.62 13.03 10.76",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M1.73 3.768C3.598 2.34 6.058 2.25 8 3.501c1.942-1.251 4.402-1.162 6.27.267a.63.63 0 0 1 .245.497v8.485a.625.625 0 0 1-1.005.496c-1.543-1.18-3.584-1.18-5.128-.001l-.015.01a.7.7 0 0 1-.19.094.62.62 0 0 1-.56-.105c-1.543-1.18-3.584-1.178-5.127.002a.625.625 0 0 1-1.005-.496V4.265c0-.195.09-.379.245-.497m1.005 7.87a5.37 5.37 0 0 1 4.64 0V4.586a4.14 4.14 0 0 0-4.64 0zm5.89 0a5.37 5.37 0 0 1 4.64 0V4.586a4.14 4.14 0 0 0-4.64 0z"
                    })
                },
                a = (0, n(104509).wt)("bookSmall", i, "small")
        },
        160856: (e, t, n) => {
            function i(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && (0, n(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeButton.markAsSeen",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                seen_personal_home: !0
                            }
                        })
                    }
                })
            }

            function a(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && (n(563591).default.setState({
                    type: "inactive"
                }), (0, n(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeButton.markHomeTooltipAsSeen",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                personal_home_delayed_tooltip_dismissed_at: Date.now()
                            }
                        })
                    }
                }))
            }

            function o(e) {
                let {
                    environment: t,
                    newSeenWelcomeHomeValue: i
                } = e, a = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!a) return;
                let o = a.pointer.spaceId;
                (0, n(377796).createAndCommit)({
                    userAction: "SidebarPersonalHomeSettings.markWelcomeAnimationAsSeen",
                    environment: t,
                    canUndo: !0,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    perform: e => {
                        let t = a.getSettingsStore().getKeyStore("personal_home").getKeyStore("seen_welcome_animation");
                        (0, n(368198).K)({
                            store: t,
                            transaction: e,
                            value: i
                        })
                    }
                })
            }

            function r(e) {
                let {
                    environment: t,
                    tipType: i,
                    completed: a
                } = e, o = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!o) return;
                let r = o.getPersonalHomeTipsSettings(),
                    s = { ...r,
                        progress_data: { ...r.progress_data,
                            [i]: {
                                completed: a
                            }
                        }
                    };
                (0, n(377796).createAndCommit)({
                    userAction: "LearnHomePanel.updateProgress",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: o,
                            transaction: e,
                            data: {
                                personal_home_tips_settings: s
                            }
                        })
                    }
                })
            }

            function s(e) {
                let {
                    environment: t,
                    hide: i
                } = e, a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let o = { ...a.getPersonalHomeTipsSettings(),
                    hide_completed: i
                };
                (0, n(377796).createAndCommit)({
                    userAction: "LearnHomePanel.hideCompleted",
                    environment: t,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                personal_home_tips_settings: o
                            }
                        })
                    }
                })
            }

            function l(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && (0, n(377796).createAndCommit)({
                    environment: e,
                    userAction: "personalHomeActions.markPersonalHomeSidebarItemClicked",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                personal_home_sidebar_item_clicked_at: Date.now()
                            }
                        })
                    }
                })
            }

            function d(e) {
                let {
                    blockId: t,
                    enabledFeatures: i,
                    userId: a
                } = e, o = (0, n(722371).WP)(i).flatMap(([e, t]) => {
                    if (!t) return [];
                    switch (e) {
                        case "tasks":
                            return [(0, n(933062).NY)("myTasksAssignedToMeCollectionView")];
                        case "customDb":
                            let i = (0, n(933062).NY)("customDb");
                            return [i && (0, n(235029).cf)({
                                userId: a,
                                viewBlockId: i
                            })];
                        case "similarUsersAndTrending":
                            return [(0, n(933062).NY)("similarUsersCollectionView"), (0, n(933062).NY)("trendingCollectionView")];
                        case "recents":
                        case "templates":
                        case "tips":
                        case "calendar":
                        case "suggested":
                        case "trending":
                        case "shortcuts":
                            return [];
                        default:
                            (0, n(722371).HB)(e)
                    }
                }).filter(n(722371).O9), {
                    isHomeKey: r,
                    homeCollectionViewIdsKey: s
                } = (0, n(683397).h)(t);
                n(467008).A.set(r, !0), n(467008).A.set(s, o)
            }
            n.d(t, {
                F$: () => l,
                Oh: () => d,
                Qs: () => s,
                Wy: () => i,
                aX: () => o,
                it: () => r,
                tL: () => a
            }), n(898992), n(354520), n(430670)
        },
        164177: (e, t, n) => {
            n.d(t, {
                j: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new a
        },
        176366: (e, t, n) => {
            n.d(t, {
                p: () => i().Ay
            });
            var i = () => n(318030)
        },
        180986: (e, t, n) => {
            n.r(t), n.d(t, {
                NotionCalendarListener: () => c
            }), n(898992), n(581454), n(737550);
            var i = n(296540),
                a = () => n(48091);
            n(944114);
            var o = n(474848);

            function r({
                accountId: e,
                calendarId: t,
                isVisible: o
            }) {
                let {
                    botId: s
                } = (0, n(515467).m)();
                return ! function({
                    accountId: e,
                    botId: t,
                    calendarId: o,
                    isVisible: r
                }) {
                    let s = (0, n(533992).v3)(),
                        l = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                        d = (0, n(83208).X)("enable_transcription_block_calendar_updates"),
                        c = (0, i.useRef)([]),
                        u = (0, i.useCallback)(() => {
                            if (!t) return;
                            let i = (0, n(568479).Xq)({
                                accountId: e,
                                botId: t,
                                calendarId: o
                            });
                            if (r) {
                                let r = a().Ay.addListener({
                                    key: i,
                                    authorizationToken: void 0,
                                    listener: ({
                                        passThroughData: i,
                                        version: a
                                    }) => (0, n(55067).tD)({
                                        sidebarSpaceViewStore: l,
                                        environment: s,
                                        botId: t,
                                        version: a,
                                        timeRange: (0, n(83748).M)(),
                                        calendarAndAccountIds: [{
                                            calendarId: o,
                                            accountId: e
                                        }],
                                        forceRefetch: !0,
                                        reason: {
                                            reason: "event_change",
                                            enqueuedAt: (0, n(103217).SG)(i)
                                        }
                                    }),
                                    subscriptionId: void 0
                                });
                                r && c.current.push(r)
                            }
                            let u = (0, n(568479).Bp)({
                                    botId: t,
                                    accountId: e,
                                    calendarId: o
                                }),
                                p = a().Ay.addListener({
                                    key: u,
                                    authorizationToken: void 0,
                                    listener: ({
                                        value: i,
                                        passThroughData: a
                                    }) => {
                                        if ("true" !== i && "false" !== i) return;
                                        let r = JSON.parse(i);
                                        (0, n(55067).X8)({
                                            environment: s,
                                            botId: t,
                                            calendarId: o,
                                            accountId: e,
                                            newIsVisible: r,
                                            enqueuedAt: (0, n(103217).SG)(a)
                                        })
                                    },
                                    subscriptionId: void 0
                                });
                            p && c.current.push(p);
                            let m = null == l ? void 0 : l.getSpaceId();
                            if (d && s.currentUser.id && m) {
                                let i = (0, n(568479).Ez)({
                                        spaceId: m,
                                        userId: s.currentUser.id
                                    }),
                                    r = a().Ay.addListener({
                                        key: i,
                                        authorizationToken: void 0,
                                        listener: ({
                                            passThroughData: i,
                                            version: a
                                        }) => (0, n(55067).tD)({
                                            sidebarSpaceViewStore: l,
                                            environment: s,
                                            botId: t,
                                            version: a,
                                            timeRange: (0, n(83748).M)(),
                                            calendarAndAccountIds: [{
                                                calendarId: o,
                                                accountId: e
                                            }],
                                            forceRefetch: !0,
                                            reason: {
                                                reason: "transcription_block_event_linked",
                                                enqueuedAt: (0, n(103217).SG)(i)
                                            }
                                        }),
                                        subscriptionId: void 0
                                    });
                                r && c.current.push(r)
                            }
                        }, [t, e, o, r, s, l, d]),
                        p = (0, i.useCallback)(() => {
                            for (let e of c.current) a().Ay.removeListener(e);
                            c.current = []
                        }, []);
                    (0, i.useEffect)(() => (u(), p), [u, p])
                }({
                    accountId: e,
                    botId: s,
                    calendarId: t,
                    isVisible: o
                }), null
            }

            function s() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    {
                        botId: o
                    } = (0, n(515467).m)(),
                    r = (0, i.useRef)(),
                    s = (0, i.useCallback)(() => {
                        if (!o) return;
                        let i = (0, n(568479).G8)({
                            botId: o
                        });
                        r.current = a().Ay.addListener({
                            key: i,
                            authorizationToken: void 0,
                            listener: ({
                                passThroughData: i,
                                version: a
                            }) => (0, n(55067).tD)({
                                sidebarSpaceViewStore: t,
                                environment: e,
                                botId: o,
                                version: a,
                                timeRange: (0, n(83748).M)(),
                                forceRefetch: !0,
                                updateMethod: "replace",
                                reason: {
                                    reason: "calendar_change",
                                    enqueuedAt: (0, n(103217).SG)(i)
                                }
                            }),
                            subscriptionId: void 0
                        })
                    }, [o, e, t]),
                    l = (0, i.useCallback)(() => {
                        r.current && (a().Ay.removeListener(r.current), r.current = void 0)
                    }, []);
                return (0, i.useEffect)(() => (s(), l), [s, l]), null
            }

            function l() {
                let e = (0, n(533992).v3)(),
                    t = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                    a = (0, n(515467).m)(),
                    o = (0, n(132315).s5)().toISODate(),
                    r = (0, i.useRef)(o);
                return (0, i.useEffect)(() => {
                    let i = a.botId;
                    if (!i || o === r.current) return;
                    let s = setTimeout(() => {
                        r.current !== o && (r.current = o, (0, n(55067).tD)({
                            environment: e,
                            sidebarSpaceViewStore: t,
                            botId: i,
                            timeRange: (0, n(83748).M)(),
                            forceRefetch: !0,
                            reason: {
                                reason: "date_change"
                            }
                        }))
                    }, Math.random() * n(695216).Xb * 20);
                    return () => clearTimeout(s)
                }, [a, t, e, o]), null
            }

            function d() {
                let e = (0, n(533992).v3)(),
                    {
                        botId: t,
                        loading: i
                    } = (0, n(515467).m)(),
                    a = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getSelectedCalendarBotId()
                    }, []);
                return (0, n(97668).Yb)(async () => {
                    if (i || t === a) return;
                    await n(994869).refreshExternalIntegrationStore({
                        environment: e
                    });
                    let o = n(415039).E.getState();
                    o.loading || t !== o.botId || (t ? (0, n(55067).rq)({
                        environment: e,
                        botId: t,
                        shouldLog: !1
                    }) : (0, n(55067).k2)({
                        environment: e
                    }))
                }, [t, e, a, i], {
                    debounce: n(695216).TD,
                    debugName: "CalendarSelectedBotIdListener"
                }), null
            }
            let c = i.memo(function() {
                let e = (0, n(682985).K8)(() => (function() {
                    var e, t;
                    let i = null == (e = (0, n(440143).Y)().getHomeCalendarStateForSpaceView()) ? void 0 : e.botId;
                    if (!i) return [];
                    let a = null == (t = n(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail();
                    if (!a) return [];
                    let {
                        eligibleAccounts: o
                    } = (0, n(120462).RM)({
                        currentUserEmail: a,
                        calendars: (0, n(440143).Y)().getCurrentCalendars() ? ? [],
                        accounts: (0, n(440143).Y)().getCurrentAccounts()
                    });
                    return ((0, n(440143).Y)().getCurrentCalendars() ? ? []).map(e => ({
                        calendarId: e.id,
                        accountId: e.accountId,
                        isVisible: !!o.some(({
                            account: t,
                            calendars: n
                        }) => e.accountId === t.id && n.some(t => t.id === e.id)) || (0, n(377382).Pj)({
                            spaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                            botId: i,
                            calendar: e
                        })
                    }))
                })(), [], {
                    equalityFn: n(795676).k
                });
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsxs)(o.Fragment, {
                        children: [e.map(e => (0, o.jsx)(r, {
                            accountId: e.accountId,
                            calendarId: e.calendarId,
                            isVisible: e.isVisible
                        }, (0, n(399161).N$)(e))), (0, o.jsx)(s, {})]
                    }), (0, o.jsx)(d, {}), (0, o.jsx)(l, {})]
                })
            })
        },
        189989: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {}
            }
            let o = new a
        },
        194685: (e, t, n) => {
            n.d(t, {
                x: () => i
            });

            function i({
                isPhone: e,
                spaceStore: t
            }) {
                return !e && (0, n(722371).O9)(t) && !(0, n(453737).d)({
                    spaceStore: t
                })
            }
        },
        196441: (e, t, n) => {
            n.d(t, {
                n$: () => a,
                rx: () => i,
                yA: () => o
            });
            let i = 1;

            function a(e) {
                switch (n(381453).qE(n(381453).LI(e, 1), .5, 4.9)) {
                    case .5:
                        return 155;
                    case .6:
                        return 128;
                    case .7:
                        return 108;
                    case .8:
                        return 94;
                    case .9:
                        return 83;
                    default:
                        return 75
                }
            }

            function o(e) {
                let t = n(381453).qE(n(381453).LI(e, 1), .5, 4.9);
                switch (t) {
                    case .5:
                        return 273;
                    case .6:
                        return 228;
                    case .7:
                        return 195;
                    case .8:
                        return 171;
                    case .9:
                        return 151;
                    case 1:
                        return 136;
                    case 1.1:
                        return 123;
                    case 1.2:
                        return 113;
                    case 1.3:
                        return 105;
                    case 1.4:
                        return 97;
                    case 1.5:
                        return 91;
                    case 1.6:
                        return 85;
                    default:
                        return Math.max(85 - Math.floor((t - 1.6) * 50), 0)
                }
            }
        },
        226512: (e, t, n) => {
            n.d(t, {
                R: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o(e) {
                var t, o;
                let s, l = (0, n(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: m = !0
                    } = e,
                    h = (t = u, o = m, s = (0, n(781889).o)(), (0, n(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: o ? n(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: n(104509).Ev.lg,
                            width: n(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + s,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: o ? n(632079).Tj.buttonPressedBackground : n(632079).Tj.buttonHoveredBackground
                        }
                    }), [o, t, s])),
                    g = (0, i.useContext)(n(19187).e),
                    f = function(e) {
                        let {
                            onClick: t,
                            onDismiss: n
                        } = e, a = (0, i.useCallback)(e => {
                            null == t || t(e), null == n || n()
                        }, [t, n]);
                        return t || n ? a : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? g
                    });
                return f ? (0, a.jsx)(n(374533).A, {
                    ariaLabel: l.formatMessage(r.dismissModalAriaLabel),
                    icon: n(766970).xMarkFillIcon,
                    onClick: f,
                    style: h.button,
                    hoveredStyle: { ...h.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let r = (0, n(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        229888: (e, t, n) => {
            n.d(t, {
                L: () => i
            });

            function i() {
                let e = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => !!n(415039).E.getState().botId && (e.device.isElectron && !n(218744).default.checkGate({
                    gateName: "meeting_notification_web_locks_leader_election"
                }) ? n(898735).A.state.isActiveTab ? ? !1 : n(63528).l.getState().hasWebLock), [e])
            }
        },
        271349: (e, t, n) => {
            function i(e) {
                switch (e) {
                    case "browse-templates":
                        return "navigate";
                    case "create-page":
                    case "create-database":
                    case "create-meeting":
                        return "create";
                    case "custom":
                        return "custom";
                    default:
                        throw Error(`Unhandled shortcut action type: ${e}`)
                }
            }

            function a() {
                return "on" === n(218744).default.getEligibleGroup({
                    experimentId: "home_shortcut_actions",
                    defaultGroup: "control"
                })
            }
            n.d(t, {
                $Q: () => a,
                hW: () => i
            }), n(16280)
        },
        314566: (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var i = n(296540),
                a = n(474848);
            let o = {
                    closeButtonIconStyle: n(986939).A.isMobile ? {
                        width: 18,
                        height: 18
                    } : {}
                },
                r = i.memo(function({
                    onClose: e,
                    style: t
                }) {
                    let i = (0, n(109939).tz)(),
                        r = (0, n(960253).I)(() => ({
                            closeButton: {
                                borderRadius: "100%",
                                width: n(986939).A.isMobile ? 28 : 22,
                                height: n(986939).A.isMobile ? 28 : 22,
                                ...t
                            }
                        }), [t]);
                    return (0, a.jsx)(n(374533).A, {
                        iconStyle: o.closeButtonIconStyle,
                        style: r.closeButton,
                        hovered: !0,
                        icon: n(519529).xMarkFillSmallIcon,
                        onClick: e,
                        ariaLabel: i.formatMessage({
                            id: "circleCloseButton.ariaLabel",
                            defaultMessage: "Close"
                        })
                    })
                })
        },
        318030: (e, t, n) => {
            n.d(t, {
                pI: () => c,
                Ay: () => p
            });
            var i = n(296540);

            function a(e, t, i) {
                return (0, n(619157).A1)() ? e <= 0 ? Math.abs(e) : t - i - e : e
            }
            n(16280);
            let o = i.createContext({
                isHovered: !1
            });
            o.displayName = "TileGalleryContext";
            var r = n(474848);

            function s({
                additionalStyles: e,
                transitionMs: t,
                force: a,
                children: l
            }) {
                let {
                    isHovered: d
                } = function() {
                    let e = (0, i.useContext)(o);
                    if (!e) throw Error("useTileGalleryContext must be used within a TileGalleryContext.Provider");
                    return e
                }(), c = (0, n(960253).I)(() => {
                    let i;
                    switch (a) {
                        case "forceShow":
                            i = 1;
                            break;
                        case "forceHide":
                            i = 0;
                            break;
                        case void 0:
                            i = +!!d;
                            break;
                        default:
                            (0, n(722371).HB)(a)
                    }
                    let o = (0, n(722371).O9)(t) ? t : 200,
                        r = 1 === i ? "visible" : "hidden";
                    return {
                        hoverStyle: {
                            opacity: i,
                            visibility: r,
                            transition: `opacity ${o}ms ease-in, visibility ${o}ms ease-in`,
                            ...e
                        }
                    }
                }, [e, a, d, t]);
                return (0, r.jsx)("div", {
                    style: c.hoverStyle,
                    children: l
                })
            }
            let l = {
                    pressedStyle: {
                        background: n(632079).Tj.home.scrollButtonBackground.pressed
                    }
                },
                d = i.memo(function({
                    onClick: e,
                    type: t,
                    scrollerStore: o,
                    heightAdjustment: d,
                    horizontalOffset: c
                }) {
                    let [u, p] = (0, i.useState)(!1), m = (0, n(682985).K8)(() => o.state.elementRef, [o]), h = (0, n(239160).HD)(m), g = (0, n(239160).Xg)(m), f = a((0, n(239160).sj)(m), g, h), y = (0, i.useMemo)(() => "left" === t ? 0 === f : "right" === t ? Math.ceil(f + h) >= g : void(0, n(722371).HB)(t), [t, f, h, g]), {
                        unhoveredBoxShadow: v
                    } = (0, n(681693).xK)({}), S = (0, n(960253).I)(() => ({
                        container: {
                            borderRadius: "100%",
                            width: 32,
                            height: 32,
                            boxShadow: u ? n(632079).Tj.homeScrollButtonShadow : v,
                            background: n(632079).Tj.home.scrollButtonBackground.base,
                            position: "absolute",
                            ..."left" === t ? {
                                insetInlineStart: -16 + (c ? ? 0)
                            } : {
                                insetInlineEnd: -16 + (c ? ? 0)
                            },
                            top: `calc(50% - ${16-(d??0)}px)`,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            zIndex: 1
                        }
                    }), [d, u, t, c, v]);
                    return (0, r.jsx)(s, {
                        force: y ? "forceHide" : void 0,
                        transitionMs: 100,
                        children: (0, r.jsx)(n(988022).p, {
                            style: S.container,
                            onClick: e,
                            hoveredStyle: S.container,
                            pressedStyle: l.pressedStyle,
                            onMouseEnter: () => p(!0),
                            onMouseLeave: () => p(!1),
                            children: "left" === t ? (0, r.jsx)(n(16275).I, {
                                icon: n(414243).v,
                                size: "xs",
                                colorVariant: u ? "primary" : "secondary"
                            }) : (0, r.jsx)(n(16275).I, {
                                icon: n(588222).arrowChevronSingleRightFillSmallIcon,
                                size: "xs",
                                colorVariant: u ? "primary" : "secondary"
                            })
                        })
                    })
                });

            function c(e) {
                let {
                    isHovered: t,
                    ...n
                } = e, a = (0, i.useMemo)(() => ({
                    isHovered: t
                }), [t]);
                return (0, r.jsx)(o.Provider, {
                    value: a,
                    children: (0, r.jsx)(u, { ...n
                    })
                })
            }

            function u(e) {
                let t = e.marginOffset ? ? 24,
                    o = e.mobileContainerOffset ? ? 16,
                    s = e.startAndEndPadding ? ? 16,
                    l = e.gapSizeOverride ? ? 16,
                    c = (0, n(533992).WS)(),
                    u = (0, n(533992).v3)(),
                    p = (0, i.useRef)(null),
                    m = (0, i.useRef)(null),
                    h = (0, n(729787).wY)(m);
                (0, i.useEffect)(() => {
                    var t, i;
                    null == (t = p.current) || t.getClientRect(), void 0 !== e.scrollPosition && (0, n(661767).V)({
                        element: null == (i = p.current) ? void 0 : i.getNode(),
                        environment: u,
                        options: {
                            left: e.scrollPosition.position,
                            behavior: e.scrollPosition.animate ? "smooth" : "auto"
                        }
                    })
                }, [null == h ? void 0 : h.width, e.scrollPosition, u]);
                let g = (0, n(682985).uB)(void 0, n(593423).A),
                    f = (0, i.useCallback)(({
                        panDirection: t
                    }) => {
                        var i;
                        let o = function({
                            panDirection: e,
                            cardWidth: t,
                            gapSize: i,
                            cardOffset: o,
                            startAndEndPadding: r,
                            maxScrollDistPx: s,
                            scrollerStore: l
                        }) {
                            var d, c, u;
                            let p = r - i,
                                {
                                    elementRef: m
                                } = l.state,
                                h = (null == (d = m.current) ? void 0 : d.clientWidth) ? ? 0,
                                g = (null == (c = m.current) ? void 0 : c.scrollWidth) ? ? 0,
                                f = (null == (u = m.current) ? void 0 : u.scrollLeft) ? ? 0,
                                y = t + i,
                                v = a(f, g, h),
                                S = y - v % y + p,
                                x = ("left" === e ? y - S : S) % y,
                                b = Math.max(1, Math.floor(Math.min(s, h - x) / y)),
                                w = function({
                                    newScrollLeft: e,
                                    scrollWidth: t,
                                    extraGapAtStartAndEndPx: i,
                                    clientWidth: a
                                }) {
                                    let o = e;
                                    return o <= i ? o = 0 : o + a >= t - i && (o = t), (0, n(381453).qE)(o, 0, t)
                                }({
                                    newScrollLeft: v + (0 === o ? 0 : "left" === e ? y - o : -o) + ("left" === e ? -1 : 1) * (b * y + x),
                                    scrollWidth: g,
                                    extraGapAtStartAndEndPx: p,
                                    clientWidth: h
                                });
                            return ((0, n(619157).A1)() ? -1 : 1) * w
                        }({
                            panDirection: t,
                            cardWidth: e.cardWidth,
                            gapSize: l,
                            startAndEndPadding: s,
                            cardOffset: 64,
                            maxScrollDistPx: 600,
                            scrollerStore: g
                        });
                        (0, n(661767).V)({
                            element: null == (i = p.current) ? void 0 : i.getNode(),
                            environment: u,
                            options: {
                                left: o,
                                behavior: "smooth"
                            }
                        })
                    }, [e.cardWidth, g, s, u, l]),
                    y = (0, i.useCallback)(() => f({
                        panDirection: "left"
                    }), [f]),
                    v = (0, i.useCallback)(() => f({
                        panDirection: "right"
                    }), [f]),
                    S = (0, n(682985).K8)(() => (null == g ? void 0 : g.state.elementRef) ? ? {
                        current: null
                    }, [g]),
                    x = (0, n(239160).HD)(S),
                    b = (0, n(239160).Xg)(S),
                    w = (0, n(239160).sj)(S),
                    j = !c && !e.preventScroll,
                    k = a(w, b, x),
                    I = 0 === k,
                    A = Math.ceil(k + x) === b - t || Math.ceil(k + x) === b || Math.ceil(k + x) === b + t,
                    C = (0, i.useMemo)(() => {
                        if (!c) {
                            if (!I && !A) return `
				linear-gradient(
					to right,
					transparent 0%,
					black 96px,
					black calc(100% - 96px),
					transparent 100%
				)
			`;
                            if (!I) return "linear-gradient(to right, transparent 0%, black 96px)";
                            if (!A) return "linear-gradient(to left, transparent 0%, black 96px)"
                        }
                    }, [c, I, A]),
                    T = (0, n(960253).I)(() => {
                        let n = A ? t : 0,
                            i = I ? t : 0;
                        return {
                            galleryAndButtonsContainer: {
                                position: "relative",
                                ...c && {
                                    marginInlineStart: -o,
                                    marginInlineEnd: -o
                                },
                                ...e.containerStyle
                            },
                            scrollContainer: {
                                marginInlineStart: -i,
                                marginInlineEnd: -n,
                                marginBottom: -32
                            },
                            scroller: { ...c && {
                                    paddingInlineStart: o,
                                    paddingInlineEnd: o
                                },
                                maskImage: C,
                                WebkitMaskImage: C
                            },
                            innerContainer: {
                                display: "flex",
                                gap: l,
                                width: "max-content",
                                marginBottom: 1,
                                paddingTop: 4,
                                paddingInlineStart: i,
                                paddingInlineEnd: n,
                                paddingBottom: 32,
                                ...e.innerContainerStyle
                            }
                        }
                    }, [A, I, c, o, e.containerStyle, e.innerContainerStyle, t, C, l]),
                    M = -(t / 2);
                return (0, r.jsxs)("div", {
                    style: T.galleryAndButtonsContainer,
                    children: [(0, r.jsx)("div", {
                        style: T.scrollContainer,
                        children: (0, r.jsx)(n(126767).H, {
                            ref: p,
                            className: n(394112).A5,
                            store: g,
                            type: n(644154).A.X,
                            style: T.scroller,
                            preventType: e.preventScroll ? n(644154).A.X : void 0,
                            children: (0, r.jsx)("div", {
                                style: T.innerContainer,
                                ref: m,
                                children: e.children
                            })
                        })
                    }), j ? (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(d, {
                            onClick: y,
                            type: "left",
                            scrollerStore: g,
                            heightAdjustment: M,
                            horizontalOffset: e.scrollButtonHorizontalOffset
                        }), (0, r.jsx)(d, {
                            onClick: v,
                            type: "right",
                            scrollerStore: g,
                            heightAdjustment: M,
                            horizontalOffset: e.scrollButtonHorizontalOffset
                        })]
                    }) : void 0]
                })
            }
            let p = i.memo(c)
        },
        319681: (e, t, n) => {
            n.d(t, {
                e: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.97 2.72 18.06 14.56",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3.893 2.875a.626.626 0 0 1 .79-.02l.092.088.126.146.016.035.072.105 11.273 13.15a.624.624 0 0 1-1.036.678l-1.615-1.884c-1.12.408-2.339.633-3.611.633-3.757 0-7.049-1.946-8.707-4.843l-.155-.283a1.46 1.46 0 0 1 0-1.359l.155-.283c.89-1.554 2.249-2.835 3.898-3.688L3.826 3.757l-.072-.105a.626.626 0 0 1 .14-.777M6.031 6.33c-1.564.744-2.842 1.913-3.653 3.33l-.134.243a.21.21 0 0 0 0 .197l.134.243c1.426 2.49 4.292 4.214 7.622 4.214.958 0 1.877-.144 2.734-.406l-1.1-1.284a3.3 3.3 0 0 1-1.634.438l-.17-.004a3.307 3.307 0 0 1-3.132-3.133l-.004-.17c0-.777.269-1.492.718-2.056zm2.904 3.387q-.037.135-.038.281a1.104 1.104 0 0 0 1.218 1.097zM10 4.194c3.878 0 7.26 2.075 8.862 5.127l.074.164c.125.332.125.7 0 1.032l-.074.163a9.3 9.3 0 0 1-2.987 3.327l-.82-.955c1.15-.764 2.084-1.779 2.7-2.953l.02-.048a.2.2 0 0 0 0-.1l-.02-.049C16.382 7.282 13.438 5.445 10 5.445q-.705 0-1.378.1l-.94-1.098A10.7 10.7 0 0 1 10 4.194"
                        }), (0, i.jsx)("path", {
                            d: "M10.17 6.694a3.307 3.307 0 0 1 3.136 3.303l-.005.17a3.3 3.3 0 0 1-.116.702L9.624 6.713A3 3 0 0 1 10 6.691z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("eyeSlash", a, "default")
        },
        348126: (e, t, n) => {
            n.d(t, {
                r: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.19 4.19 11.62 11.62",
                    svg: (0, n(474848).jsx)("path", {
                        d: "m15.543 5.75-.684.684-1.288-1.289.692-.69a.91.91 0 0 1 1.28 0c.35.35.35.93 0 1.28zM6.11 15.183l7.914-7.914-1.289-1.29-7.92 7.909a1.3 1.3 0 0 0-.275.457l-.335 1.082c-.061.228.152.442.366.366l1.082-.336q.251-.068.457-.274"
                    })
                },
                a = (0, n(104509).wt)("pencil", i, "default")
        },
        372365: (e, t, n) => {
            n.r(t), n.d(t, {
                clockSmallIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M8 3.955a.625.625 0 0 0-.625.625v2.795H5.12a.625.625 0 1 0 0 1.25H8c.345 0 .625-.28.625-.625V4.58A.625.625 0 0 0 8 3.955"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                o = (0, n(104509).wt)("clockSmall", a, "small")
        },
        377475: (e, t, n) => {
            n.d(t, {
                h: () => o,
                l: () => s
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var i = n(296540);
            let a = new Set;

            function o(e, t) {
                let o = (0, i.useMemo)(() => n(680007).default.mark(e), [e]),
                    r = (0, i.useRef)(t);
                return (0, i.useEffect)(() => {
                    r.current = t
                }, [t]), (0, i.useCallback)(() => {
                    (!a.has(e) || t.allowMultipleFiresPerSession) && (a.add(e), n(680007).default.measure(o, r.current))
                }, [o, e, t.allowMultipleFiresPerSession])
            }
            let r = new Set;

            function s(e, t) {
                let a = (0, i.useRef)(t);
                return (0, i.useEffect)(() => {
                    a.current = t
                }, [t]), (0, i.useCallback)(() => {
                    r.has(e) || (r.add(e), n(680007).default.measureFromPageOrigin(e, a.current))
                }, [e])
            }
        },
        394112: (e, t, n) => {
            n.d(t, {
                A5: () => d,
                MR: () => g,
                Mx: () => r,
                Pb: () => u,
                WL: () => h,
                hg: () => s,
                kZ: () => m,
                pv: () => l,
                vV: () => c
            }), n(581454);
            var i = n.n(n(32485)),
                a = n(296540),
                o = n(474848);
            let r = a.forwardRef(function(e, t) {
                    let {
                        children: a,
                        type: r,
                        gap: s,
                        withBottomPadding: l,
                        style: d,
                        onMouseDown: c,
                        onClick: u,
                        onDoubleClick: p,
                        onContextMenu: m,
                        suppressMargin: h
                    } = e, g = (0, n(2919).n)(r), f = (0, n(219279).aH)({
                        gateName: "content_reskin_v2_wider_page",
                        enableEventTrailLogging: !0
                    }) && (0, n(643160).sR)(), y = (0, n(682985).K8)(() => n(82702).A.getPanelState("peek").isOpen && "static_sidebar" === n(82702).A.getPanelState("peek").displayStyle, []);
                    return (0, o.jsx)(n(28111).A, {
                        name: "PageLayout",
                        children: (0, o.jsx)("div", {
                            className: i()("layout", {
                                "layout-reskin-wider": f,
                                "layout-wide": "wide" === r,
                                "layout-wide-right-margin-expanded": "wide-right-margin-expanded" === r,
                                "layout-side-peek": "side-peek" === r,
                                "layout-center-peek": "center-peek" === r && !y,
                                "layout-center-peek-with-layout-panel": "center-peek" === r && y,
                                "layout-home": "home" === r,
                                "layout-meet": "meet" === r,
                                "layout-home-phone": "home-phone" === r,
                                "layout-home-redesign-desktop": "home-redesign-desktop" === r,
                                "layout-form": "form" === r,
                                "layout-form-viewer": "form-viewer" === r,
                                "layout-form-viewer-embed": "form-viewer-embed" === r,
                                "layout-phone": "phone" === r,
                                "layout-tablet": "tablet" === r,
                                "layout-template-preview": "template-preview" === r,
                                "layout-chat": "chat" === r,
                                "layout-layout-editor": "layout-editor" === r,
                                "layout-layout-editor-wide": "layout-editor-wide" === r,
                                "layout-layout-editor-narrow": "layout-editor-narrow" === r,
                                "layout-marketplace": "marketplace" === r,
                                "layout-marketplace-mobile": "marketplace-mobile" === r,
                                "layout-team-home": "team-home" === r,
                                "layout-team-home-mobile": "team-home-mobile" === r,
                                "layout-create-post": "create-post" === r,
                                "layout-fullscreen-ai": "fullscreen-ai" === r,
                                "layout-narrowscreen-ai": "narrowscreen-ai" === r,
                                "layout-person-profile": "person-profile" === r,
                                "layout-suppress-margin": h
                            }),
                            style: {
                                paddingBottom: l ? g : void 0,
                                gap: s,
                                ...d
                            },
                            ref: t,
                            onMouseDown: c,
                            onClick: u,
                            onDoubleClick: p,
                            onContextMenu: m,
                            children: a
                        })
                    })
                }),
                s = "layout-content",
                l = "layout-full",
                d = "hide-scrollbar",
                c = a.forwardRef(function(e, t) {
                    return (0, o.jsx)(n(28111).A, {
                        name: "PageLayoutContent",
                        children: (0, o.jsx)("div", {
                            className: i()(s, e.className),
                            style: e.style,
                            ref: t,
                            children: e.children
                        })
                    })
                });

            function u(e) {
                return (0, o.jsx)(n(28111).A, {
                    name: "PageLayoutFull",
                    children: (0, o.jsx)("div", {
                        className: l,
                        style: e.style,
                        children: e.children
                    })
                })
            }
            let p = {
                pointerEvents: "none"
            };

            function m(e) {
                return (0, o.jsx)(n(28111).A, {
                    name: "PageLayoutMarginRight",
                    children: (0, o.jsx)("div", {
                        className: "layout-margin-right",
                        style: { ...e.style,
                            ...p
                        },
                        children: e.children
                    })
                })
            }

            function h(e) {
                return (0, o.jsx)(n(28111).A, {
                    name: "PageLayoutColumn",
                    children: (0, o.jsx)("div", {
                        className: i()("layout-column", e.className),
                        style: { ...{
                                "--min-column-width": e.minWidth ? `${e.minWidth}px` : "100%"
                            },
                            ...e.style
                        },
                        children: e.children
                    })
                })
            }

            function g(e) {
                return (0, o.jsx)(n(28111).A, {
                    name: "PageLayoutTwoColumn",
                    children: (0, o.jsxs)(h, {
                        minWidth: e.minWidth,
                        className: e.className,
                        style: e.style,
                        children: [e.left, e.right]
                    })
                })
            }
            n(699422).Wy.semibold, n(632079).Tj.buttonBlueFocusRing
        },
        394327: (e, t, n) => {
            n.d(t, {
                Ji: () => l,
                bd: () => g,
                f0: () => p,
                mf: () => m,
                s7: () => u
            }), n(944114), n(296540);
            var i = () => n(51831),
                a = () => n(95582),
                o = () => n(844565),
                r = () => n(722371),
                s = n(474848);
            let l = 12,
                d = {
                    marginInlineEnd: 8
                },
                c = {
                    fontSize: 12,
                    lineHeight: 1.3,
                    opacity: .5
                };

            function u({
                title: e,
                byline: t,
                icon: i,
                iconSize: a,
                iconMargin: o,
                useThinTitle: r,
                useSecondaryColorTitle: l,
                containerStyles: m,
                summaryStyles: h,
                rightContent: g,
                badge: f
            }) {
                let y = p({
                    icon: i,
                    iconSize: a,
                    iconMargin: o,
                    useThinTitle: r,
                    containerStyles: m,
                    summaryStyles: h
                });
                return (0, s.jsxs)("div", {
                    style: y.container,
                    children: [i ? (0, s.jsx)("div", {
                        style: y.iconContainer,
                        children: i
                    }) : null, (0, s.jsxs)("div", {
                        style: y.summaryContainer,
                        children: [(0, s.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            gap: 6,
                            children: [(0, s.jsx)(n(324489).V, {
                                style: y.name,
                                isSecondaryColor: l,
                                showTooltipWhenTruncated: !0,
                                children: e
                            }), f ? (0, s.jsx)("div", {
                                style: d,
                                children: f
                            }) : null]
                        }), t ? (0, s.jsx)(n(324489).V, {
                            style: c,
                            children: t
                        }) : null]
                    }), g]
                })
            }

            function p(e) {
                let {
                    icon: t,
                    iconSize: i,
                    iconMargin: a,
                    useThinTitle: o,
                    containerStyles: r,
                    summaryStyles: s
                } = e, d = a ? ? l, c = t ? i ? ? 20 : 0;
                return (0, n(960253).I)(() => ({
                    container: {
                        position: "relative",
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "8px 0",
                        width: "100%",
                        ...r
                    },
                    summaryContainer: {
                        width: `calc(100% - ${c}px)`,
                        ...s
                    },
                    iconContainer: {
                        height: c,
                        width: c,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: c,
                        marginInlineEnd: d,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 6
                    },
                    name: {
                        fontSize: 14,
                        fontWeight: o ? 400 : 500
                    }
                }), [c, d, o, r, s])
            }

            function m({
                titleStyles: e,
                includeByline: t,
                bylineStyles: i,
                includeIcon: a,
                iconStyles: o,
                containerStyles: r
            }) {
                let l = (0, n(960253).I)(() => ({
                    container: {
                        height: 53,
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "8px 0",
                        width: "100%",
                        gap: 8,
                        ...r
                    },
                    icon: {
                        borderRadius: 4,
                        height: 24,
                        width: 24,
                        marginInlineStart: -2,
                        ...o
                    },
                    title: {
                        borderRadius: 4,
                        height: 14,
                        width: "80%",
                        ...e
                    },
                    byline: {
                        borderRadius: 4,
                        height: 12,
                        width: "60%",
                        ...i
                    }
                }), [r, e, i, o]);
                return (0, s.jsxs)("div", {
                    style: l.container,
                    children: [a ? (0, s.jsx)(n(795830).P, {
                        style: l.icon
                    }) : null, (0, s.jsxs)(n(4458).VP, {
                        justifyContent: "center",
                        alignItems: "flex-start",
                        width: "calc(100% - 32px)",
                        gap: 4,
                        children: [(0, s.jsx)(n(795830).P, {
                            style: l.title
                        }), t ? (0, s.jsx)(n(795830).P, {
                            style: l.byline
                        }) : null]
                    })]
                })
            }
            let h = {
                width: 312
            };

            function g(e) {
                let t = (0, n(109939).tz)(),
                    l = (0, n(682985).uB)(void 0, n(510969).A),
                    d = [],
                    c = [];
                for (let t of e.items)
                    if ("divider" === t.type) {
                        let t = c.length > 0,
                            n = {
                                key: `actions-${c.length}`,
                                render: n => (0, s.jsx)(o().A, {
                                    title: e.title,
                                    topBorder: t,
                                    ...n
                                }),
                                items: d
                            };
                        c.push(n), d = []
                    } else if ("action" === t.type) {
                    let e = {
                        key: t.key,
                        render: e => (0, s.jsx)(i().m, {
                            textWrap: !0,
                            content: () => t.tooltipTitle,
                            disableTooltip: t.tooltipDisabled ? ? !0,
                            placement: "right",
                            children: n => (0, s.jsx)(a().A, { ...e,
                                ...n,
                                isRedOnHover: t.isDestructive,
                                shouldWrapCaption: !0,
                                icon: t.icon,
                                title: t.title,
                                caption: t.caption,
                                disabled: t.disabled,
                                disabledFeedback: t.disabled
                            })
                        }),
                        action: () => {
                            t.action(), l.setState({ ...l.state,
                                open: !1
                            })
                        }
                    };
                    d.push(e)
                } else(0, r().HB)(t);
                let u = {
                    key: `actions-${c.length}`,
                    render: t => (0, s.jsx)(o().A, {
                        title: e.title,
                        topBorder: c.length > 0,
                        ...t
                    }),
                    items: d
                };
                return c.push(u), (0, s.jsx)(n(656252).A, {
                    stopClickPropagation: !0,
                    popupType: n(182718).nl.Popup,
                    alignmentToOrigin: "start",
                    placementToOrigin: "bottom",
                    style: h,
                    content: () => (0, s.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        width: 312,
                        children: (0, s.jsx)(n(558045).A, {
                            type: n(558045).O.Vertical,
                            initialFocus: void 0,
                            sections: c
                        })
                    }),
                    onClose: n(763230).lQ,
                    buttonPopupStore: l,
                    children: e => (0, s.jsx)(n(374533).A, {
                        ariaLabel: t.formatMessage({
                            id: "iconCellActionMenu.iconButton.ariaLabel",
                            defaultMessage: "More actions"
                        }),
                        icon: n(361226).ellipsisSmallIcon,
                        ...e
                    })
                })
            }
        },
        414243: (e, t, n) => {
            n.d(t, {
                v: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                a = (0, n(104509).wt)("arrowChevronSingleLeftFillSmall", i, "fillSmall")
        },
        417317: (e, t, n) => {
            function i({
                icon: e,
                themeMode: t
            }) {
                if (e) {
                    if ((0, n(312028).A)(e)) return n(753281).A.state.emojiByColorProcessed[e];
                    if ((0, n(337222).MP)(e)) {
                        let {
                            color: t
                        } = (0, n(337222).uX)(e);
                        return (0, n(337222).hI)(t)
                    }
                    if ((0, n(111012).T8)(e)) return function({
                        uri: e,
                        themeMode: t
                    }) {
                        var i, o;
                        let r = null == (i = e.match(/\/icons\/[\w\-]*_(.+)\.svg/)) ? void 0 : i[1];
                        if ((o = r) && a.has(o)) return n(111012).l8[t][r]
                    }({
                        uri: e,
                        themeMode: t
                    })
                }
            }
            n.d(t, {
                b: () => i
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let a = new Set((0, n(722371).objectKeys)(n(111012).l8.light))
        },
        419144: (e, t, n) => {
            n.d(t, {
                Az: () => p,
                Lt: () => s,
                Ol: () => r,
                U7: () => a,
                mh: () => o
            }), n(944114), n(898992), n(354520);
            var i = () => n(722371);
            let a = ["creative", "internal_communication", "eng", "product_design", "project_or_program_management", "product", "marketing", "sales_or_success", "support", "finance", "hr", "it_admin", "knowledge_management", "operations", "educator", "student"],
                o = ["life", "work", "school"],
                r = ["singleplayer", "multiplayer"];

            function s(e) {
                var t, n, a;
                let o, {
                    environment: r,
                    userPersonaValue: s,
                    userUseCases: p,
                    spaceSurveyData: m
                } = e;
                for (let e of [(t = s) ? c[t] : void 0, ... function({
                        userUseCases: e
                    }) {
                        let t = [];
                        for (let n of e ? ? []) switch (n) {
                            case "personal_notes_to_dos":
                                t.push({
                                    type: "space_intent",
                                    persona: "life"
                                });
                                continue;
                            case "team_docs_knowledge_base":
                            case "team_project_management":
                                t.push({
                                    type: "space_intent",
                                    persona: "work"
                                });
                                continue;
                            case "ai":
                            case "docs":
                            case "wikis":
                            case "notes":
                            case "project":
                            case "goals":
                            case "other":
                                continue;
                            default:
                                (0, i().HB)(n)
                        }
                        return t
                    }({
                        userUseCases: p
                    }), ... function({
                        spaceSurveyData: e
                    }) {
                        let t = [],
                            n = function({
                                spaceSurveyData: e
                            }) {
                                var t;
                                let n = null == e || null == (t = e.intent) ? void 0 : t.value;
                                if (n) switch (n) {
                                    case "personal":
                                    case "life":
                                        return "life";
                                    case "team":
                                    case "work":
                                        return "work";
                                    case "school":
                                        return "school";
                                    default:
                                        (0, i().HB)(n)
                                }
                            }({
                                spaceSurveyData: e
                            });
                        if (n && t.push({
                                type: "space_intent",
                                persona: n
                            }), null != e && e.use_cases)
                            for (let n of e.use_cases.value) switch (n) {
                                case "personal_notes_to_dos":
                                    t.push({
                                        type: "space_intent",
                                        persona: "life"
                                    });
                                    continue;
                                case "team_docs_knowledge_base":
                                case "team_project_management":
                                    t.push({
                                        type: "space_intent",
                                        persona: "work"
                                    });
                                    continue;
                                case "ai":
                                case "docs":
                                case "wikis":
                                case "notes":
                                case "project":
                                case "goals":
                                case "other":
                                    continue;
                                default:
                                    (0, i().HB)(n)
                            }
                        return t
                    }({
                        spaceSurveyData: m
                    }), function(e) {
                        let {
                            workspaceType: t
                        } = e;
                        return t ? u({
                            workspaceType: t
                        }) ? {
                            type: "space_type",
                            persona: "multiplayer"
                        } : {
                            type: "space_type",
                            persona: "singleplayer"
                        } : void 0
                    }({
                        workspaceType: d({
                            environment: r
                        })
                    })].filter(i().O9)) {
                    if (!o) {
                        o = e;
                        continue
                    }
                    n = o, a = e, o = l[n.type] >= l[a.type] ? n : a
                }
                return void 0 === o ? {
                    type: "space_type",
                    persona: "singleplayer"
                } : o
            }
            let l = {
                space_type: 0,
                space_intent: 1,
                function: 2
            };

            function d(e) {
                let {
                    environment: t
                } = e, i = (0, n(328765).S)();
                if (!i) return "singleplayer";
                let a = (0, n(616579).j)({
                    environment: t,
                    spaceId: i.id
                });
                return !a || a <= 1 ? "singleplayer" : a < 10 ? "multiplayer_small" : "multiplayer"
            }
            let c = {
                student: {
                    type: "function",
                    persona: "student"
                },
                educator: {
                    type: "function",
                    persona: "educator"
                },
                creative: {
                    type: "function",
                    persona: "creative"
                },
                finance: {
                    type: "function",
                    persona: "finance"
                },
                internal_communication: {
                    type: "function",
                    persona: "internal_communication"
                },
                project_or_program_management: {
                    type: "function",
                    persona: "project_or_program_management"
                },
                it_admin: {
                    type: "function",
                    persona: "it_admin"
                },
                knowledge_management: {
                    type: "function",
                    persona: "knowledge_management"
                },
                marketing: {
                    type: "function",
                    persona: "marketing"
                },
                eng: {
                    type: "function",
                    persona: "eng"
                },
                hr: {
                    type: "function",
                    persona: "hr"
                },
                product: {
                    type: "function",
                    persona: "product"
                },
                product_design: {
                    type: "function",
                    persona: "product_design"
                },
                sales: {
                    type: "function",
                    persona: "sales_or_success"
                },
                support: {
                    type: "function",
                    persona: "support"
                },
                operations: {
                    type: "function",
                    persona: "operations"
                },
                founder_or_ceo: void 0,
                other: void 0,
                unfilled: void 0
            };

            function u({
                workspaceType: e
            }) {
                switch (e) {
                    case "multiplayer":
                    case "multiplayer_small":
                        return !0;
                    case "singleplayer":
                        return !1;
                    default:
                        (0, i().HB)(e)
                }
            }

            function p(e) {
                let {
                    environment: t
                } = e;
                return u({
                    workspaceType: d({
                        environment: t
                    })
                })
            }
        },
        429987: (e, t, n) => {
            n.d(t, {
                i: () => a
            });
            let i = {
                    ScrollableBlockLimitBanner: new(n(815048)).O2("ScrollableBlockLimitBanner", async () => Promise.all([n.e(73259), n.e(96579), n.e(79563), n.e(27942)]).then(n.bind(n, 899403)))
                },
                a = (0, n(815048)._h)(i.ScrollableBlockLimitBanner, e => e.ScrollableBlockLimitBanner)
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    collectionViewStore: a,
                    property_type: o,
                    from: r,
                    property: s
                } = e;
                (0, n(33918).G)(t, {
                    property: s,
                    property_type: o,
                    from: r,
                    collection_id: null == i ? void 0 : i.id,
                    collection_view_id: null == a ? void 0 : a.id
                })
            }
        },
        432376: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let o = a
        },
        440956: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                lightBulbBrightSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.96 1.38 8.07 13.24",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 1.385c-2.23 0-4.035 1.793-4.035 3.985 0 .782.193 1.525.56 2.147.09.161.181.312.281.473.454.725.86 1.386.86 2.08a.63.63 0 0 0 .624.625.63.63 0 0 0 .625-.625c.01-1.064-.553-1.972-1.041-2.75l-.27-.448a3 3 0 0 1-.389-1.512C5.215 3.853 6.46 2.625 8 2.625s2.785 1.228 2.785 2.735c0 .558-.137 1.084-.39 1.512l-.269.449-.01.016c-.475.773-1.03 1.675-1.03 2.723a.63.63 0 0 0 .55.62v.015h.074a.63.63 0 0 0 .625-.625c0-.684.406-1.355.859-2.08v-.002l.001-.001q.067-.117.139-.233t.141-.237c.367-.622.56-1.365.56-2.147 0-2.202-1.815-3.985-4.035-3.985m-1.6 10.19a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h3.2a.63.63 0 0 0 .625-.625.63.63 0 0 0-.625-.625zm.8 1.8a.63.63 0 0 0-.625.625.63.63 0 0 0 .625.625h1.6A.63.63 0 0 0 9.425 14a.63.63 0 0 0-.625-.625z"
                    })
                },
                a = (0, n(104509).wt)("lightBulbBrightSmall", i, "small")
        },
        462385: (e, t, n) => {
            n.d(t, {
                U: () => a,
                p: () => o
            }), n(296540);
            var i = n(474848);
            let a = 24;

            function o(e) {
                let {
                    config: t,
                    size: o = a,
                    shortcutHealthStatus: r
                } = e, s = (0, n(682985).K8)(() => {
                    var e;
                    return "custom" !== t.type || null == (e = t.store.getAutomationStore()) ? void 0 : e.getIconStore().getValue()
                }, [t]), l = function(e) {
                    let {
                        config: t,
                        size: i,
                        possibleCustomIcon: a
                    } = e, o = (0, n(682985).K8)(() => "custom" === t.type ? t.store.getFormat().block_color ? ? "default" : t.color, [t]), r = (0, n(960253).e)(), s = (0, n(682985).K8)(() => {
                        if ("default" !== t.type) return function(e) {
                            let {
                                icon: t,
                                mode: i
                            } = e;
                            if (!t || 0 === t.length) return;
                            if ((0, n(312028).A)(t)) {
                                let e = (0, n(417317).b)({
                                    icon: t,
                                    themeMode: i
                                });
                                return e ? (0, n(650342).X4)(e, n(870819).VN) : void 0
                            }
                            let a = (0, n(111012).Sp)(t);
                            if (void 0 !== a) return (0, n(111012).u9)({
                                color: a,
                                useLightGrayColor: !1,
                                mode: i
                            })
                        }({
                            mode: r,
                            icon: a
                        })
                    }, [t.type, a, r]);
                    return (0, n(960253).I)(() => ({
                        iconContainer: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 6,
                            width: i,
                            height: i,
                            backgroundColor: "default" === t.type ? "light" === r ? n(632079).Tj.palette[t.color][100] : n(632079).Tj.palette[t.color][300] : a && 0 !== a.length ? s : n(632079).Tj.gray.background.secondaryTranslucent
                        },
                        iconFill: {
                            fill: (0, n(632079).eA)(o, n(632079).Tj, r).fill
                        }
                    }), [o, t, s, a, i, r])
                }({
                    config: t,
                    size: o,
                    possibleCustomIcon: s
                }), d = (0, n(682985).K8)(() => {
                    var e;
                    if ("default" === t.type) return !0;
                    let n = null == (e = t.store.getAutomationStore()) ? void 0 : e.getIconStore().getValue();
                    return !n || 0 === n.length || !!l.iconContainer.backgroundColor
                }, [t, l.iconContainer.backgroundColor]) ? Math.floor(.7 * o) : o, c = (0, n(682985).K8)(() => {
                    let e = {
                        largeIcon: !0,
                        disabled: !0,
                        isEmptyPage: !1,
                        size: d,
                        isLarge: !0,
                        style: {
                            width: o,
                            height: o
                        }
                    };
                    if ("default" === t.type) return (0, i.jsx)(n(569553).B6, { ...e,
                        defaultIcon: (0, i.jsx)(n(16275).I, {
                            icon: t.icon,
                            colorVariant: "secondary",
                            size: d,
                            style: l.iconFill
                        })
                    });
                    if ("custom" === t.type) {
                        var a;
                        let o = null == (a = t.store.getAutomationStore()) ? void 0 : a.getIconStore().getValue();
                        return o ? (0, i.jsx)(n(569553).B6, { ...e,
                            icon: {
                                icon: o,
                                pointer: t.store.pointer
                            }
                        }) : (0, i.jsx)(n(569553).B6, { ...e,
                            defaultIcon: (0, i.jsx)(n(16275).I, {
                                icon: n(86951).v,
                                colorVariant: "needs_setup" === r ? "disabled" : "secondary",
                                size: d
                            })
                        })
                    }
                }, [d, o, t, l.iconFill, r]);
                return (0, i.jsx)("div", {
                    style: l.iconContainer,
                    children: c
                })
            }
        },
        471848: (e, t, n) => {
            n.d(t, {
                BM: () => c,
                EB: () => o,
                dX: () => d,
                tL: () => u
            }), n(898992), n(354520), n(581454), n(296540);
            var i = n(474848);
            let a = (0, n(109939).YK)({
                privateTeamspace: {
                    id: "baseTable.pageCell.privateTeamspace",
                    defaultMessage: "Private teamspace"
                },
                untitledPath: {
                    id: "baseTable.pageCell.untitledPath",
                    defaultMessage: "Untitled"
                }
            });

            function o({
                store: e,
                parentSpaceStore: t,
                rightIcon: a,
                inlineTitleContent: r,
                useThinTitle: s,
                skipUntitledStyling: l
            }) {
                let p = (0, n(109939).tz)(),
                    m = (0, n(682985).K8)(() => t || (0, n(974410).f)(e), [t, e]),
                    h = (0, n(682985).K8)(() => {
                        var t;
                        return null == e || null == (t = e.getModel()) ? void 0 : t.getRenderIcon({
                            getRecordModel: e.getRecordModel
                        })
                    }, [e]),
                    {
                        displayTitle: g,
                        pageTitle: f
                    } = (0, n(682985).K8)(() => u({
                        store: e,
                        intl: p
                    }), [e, p]),
                    y = (0, n(682985).K8)(() => (0, n(569553).Te)(e), [e]),
                    v = (0, n(682985).K8)(() => c({
                        blockStore: e,
                        spaceStore: m,
                        intl: p
                    }), [e, m, p]);
                return (0, i.jsx)(d, {
                    inlineTitleContent: r,
                    mainIcon: (0, i.jsx)(n(569553).B6, {
                        icon: h,
                        iconRecordCategory: y,
                        size: 20,
                        isEmptyPage: !1,
                        disabled: !0
                    }),
                    rightIcon: a,
                    subTitle: v,
                    title: g,
                    titleOpacity: f || l ? void 0 : .25,
                    useThinTitle: s
                })
            }
            let r = {
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    padding: "8px 0",
                    width: "100%",
                    position: "relative",
                    overflow: "hidden"
                },
                s = {
                    flex: 1,
                    overflow: "hidden"
                },
                l = {
                    lineHeight: 1.3,
                    fontSize: 12,
                    opacity: .5
                };

            function d({
                inlineTitleContent: e,
                mainIcon: t,
                rightIcon: a,
                subTitle: o,
                title: c,
                titleOpacity: u,
                useThinTitle: p
            }) {
                let m = (0, n(960253).I)(() => ({
                    iconContainer: {
                        height: 20,
                        width: 20,
                        flexGrow: 0,
                        flexShrink: 0,
                        flexBasis: 20,
                        marginInlineEnd: 12,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: 6
                    },
                    title: {
                        fontSize: 14,
                        fontWeight: p ? 400 : 500,
                        ...void 0 !== u ? {
                            opacity: u
                        } : {}
                    }
                }), [u, p]);
                return (0, i.jsxs)("div", {
                    style: r,
                    children: [(0, i.jsx)("div", {
                        style: m.iconContainer,
                        children: t
                    }), (0, i.jsxs)("div", {
                        style: s,
                        children: [(0, i.jsxs)(n(4458).fI, {
                            alignItems: "center",
                            children: [(0, i.jsx)(n(324489).V, {
                                showTooltipWhenTruncated: !0,
                                style: m.title,
                                children: c
                            }), e]
                        }), (0, i.jsx)(n(324489).V, {
                            showTooltipWhenTruncated: !0,
                            style: l,
                            children: o
                        })]
                    }), a]
                })
            }

            function c(e) {
                let {
                    intl: t,
                    blockStore: i,
                    spaceStore: o
                } = e, r = i ? (0, n(399348).f)(i, {
                    includeTeamHomeFeed: !1,
                    includeDataSources: !0
                }).filter(e => e.id !== i.id).map(e => {
                    if (e instanceof n(681735).h) return e.getName() || t.formatMessage(a.privateTeamspace);
                    if (e instanceof n(360851).N) return;
                    let i = e.getModel();
                    return (null == i ? void 0 : i.getRenderTitleWithPlaceholder({
                        getRecordModel: e.getRecordModel,
                        userTimeZone: (0, n(714350).P)(),
                        intl: n(962299).A.getIntl()
                    })) || t.formatMessage(a.untitledPath)
                }).filter(e => void 0 !== e).reverse() : [];
                return r.length > 0 ? r.join("/") : null == o ? void 0 : o.getName()
            }

            function u({
                store: e,
                intl: t
            }) {
                if (e instanceof n(356912).m) return {
                    pageTitle: e.getRenderTitle({
                        intl: t,
                        userTimeZone: (0, n(714350).P)()
                    }),
                    displayTitle: (0, n(536601).getCollectionNameOrDefault)({
                        intl: t,
                        collectionStore: e
                    })
                };
                if (!(null != e && e.canRead())) return {
                    pageTitle: void 0,
                    displayTitle: (0, n(543464).mA)(t)
                };
                let i = null == e ? void 0 : e.getModel();
                if (!i || !e) return {
                    pageTitle: void 0,
                    displayTitle: void 0
                };
                let a = e.getRecordModel,
                    o = (0, n(714350).P)(),
                    r = i.getRenderTitle({
                        getRecordModel: a,
                        userTimeZone: o,
                        intl: t
                    }),
                    s = i.getEmptyTitlePlaceholder({
                        getRecordModel: a,
                        userTimeZone: o,
                        intl: t
                    });
                return {
                    pageTitle: r,
                    displayTitle: r || s
                }
            }
        },
        476743: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i() {
                return (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore)
            }
        },
        485023: (e, t, n) => {
            n.d(t, {
                A: () => s,
                u: () => o
            }), n(898992), n(803949), n(581454);
            var i = n(296540),
                a = n(474848);
            let o = (0, n(109939).YK)({
                    hide: {
                        id: "PersonalHomePanel.moreDropdown.hide.title",
                        defaultMessage: "Hide from Home"
                    }
                }),
                r = {
                    style0: {
                        borderRadius: n(681693)._g
                    }
                },
                s = i.memo(function({
                    actions: e
                }) {
                    let t = (0, n(109939).tz)(),
                        s = (0, i.useMemo)(() => {
                            let t = {};
                            return e.forEach(e => {
                                "custom" === e.type && (t[e.item.key] = e.closeOnAccept)
                            }), t
                        }, [e]),
                        l = [{
                            key: "all",
                            items: e.map(e => {
                                switch (e.type) {
                                    case "hide":
                                        return {
                                            key: "hide",
                                            render: e => (0, a.jsx)(n(95582).A, { ...e,
                                                icon: (0, a.jsx)(n(16275).I, {
                                                    icon: n(319681).e
                                                }),
                                                title: t.formatMessage(o.hide),
                                                style: r.style0
                                            }),
                                            action: e.hide
                                        };
                                    case "custom":
                                        return e.item;
                                    default:
                                        (0, n(722371).HB)(e)
                                }
                            })
                        }];
                    return (0, a.jsx)(n(656252).A, {
                        popupType: n(656252).z.Popup,
                        alignmentToOrigin: "center",
                        originGap: 2,
                        content: e => (0, a.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, a.jsx)(n(558045).A, {
                                onAccept: t => {
                                    s[t.key] && e.close()
                                },
                                type: n(558045).O.Vertical,
                                sections: l,
                                initialFocus: void 0
                            })
                        }),
                        children: e => (0, a.jsx)(n(98454).A, { ...e
                        })
                    })
                })
        },
        487016: (e, t, n) => {
            n.d(t, {
                Bi: () => s,
                My: () => r,
                ZM: () => d,
                _M: () => l,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), n(16280), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454);
            var i = () => n(388507),
                a = () => n(715144),
                o = () => n(717673);

            function r({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                var s, l;
                let d = (null == (s = t.getParentBlockStore()) ? void 0 : s.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && c.push({
                        property: n.id,
                        visible: !(0, i().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let n = (null == (l = t.getPropertyFormatsStore("table_properties")) ? void 0 : l.getValue()) ? ? [],
                            i = new Set(n.map(e => e.property)),
                            o = c.filter(e => !i.has(e.property));
                        0 !== o.length && (0, a().z)({
                            stores: [t],
                            update: {
                                table_properties: [...n, ...o]
                            },
                            transaction: e
                        })
                    }
            }

            function s({
                transaction: e,
                collectionStore: t,
                propertyTemplates: n
            }) {
                let i = [];
                for (let e of n) {
                    let n = (0, o().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    n && i.push({
                        property: n.id,
                        visible: !0
                    })
                }
                let r = t.getFormat().collection_page_properties ? ? [],
                    l = new Set(r.map(e => e.property)),
                    d = i.filter(e => !l.has(e.property));
                d.length && (0, a().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...r, ...d]
                    },
                    transaction: e
                })
            }

            function l({
                environment: e,
                newPageStore: t,
                result: i
            }) {
                if ("accepted_template" === i.type || "accepted_empty_collection" === i.type) {
                    let a = t.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        perform: a => {
                            let o = t.getTitleValue();
                            if ((0, n(173157).z)({
                                    store: t,
                                    transaction: a,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === i.type && !(0, n(247438).w9s)(o)) {
                                let r = n(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: i.blockId
                                }).getTitleStore();
                                r && n(41403).yr({
                                    environment: e,
                                    transaction: a,
                                    tokens: o,
                                    index: 0,
                                    store: r
                                })
                            }
                            let r = t.getParentStore();
                            if ((null == r ? void 0 : r.table) === n(682956).ev) {
                                let e = r.getContentIds();
                                (0, n(173157).z)({
                                    store: r,
                                    transaction: a,
                                    data: {
                                        content: e.filter(e => e !== t.id)
                                    }
                                })
                            }
                        },
                        userAction: "clean_up_empty_new_page"
                    })
                }
            }

            function d({
                environment: e,
                userAction: t,
                result: i,
                existingCollectionViewBlockStore: a,
                existingCollectionStore: o
            }) {
                if ("canceled" !== i.type) {
                    if ("accepted_empty_collection" === i.type && o) {
                        let a = o.getKeyStore("name"),
                            r = (0, n(247438).x9d)(i.newCollectionTitle);
                        if (a) {
                            let i = o.getSpaceId();
                            (0, n(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: i ? {
                                    spaceWithId: i
                                } : void 0,
                                perform: t => n(41403).R9({
                                    environment: e,
                                    store: a,
                                    transaction: t,
                                    value: r
                                })
                            })
                        }
                    }
                    if (a) {
                        var r;
                        let e = null == (r = (0, n(444610).U)(a)) ? void 0 : r.settingsStore;
                        e && (0, n(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === i.type && null != a && a.isCollectionView() && !(null != a && a.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, n(444610).U)(a),
                            o = a.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === i.collectionId
                            });
                        if (!t || !o) return;
                        (0, n(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: o.id,
                            isFullScreen: t.isFullScreenStore.state,
                            isRootChild: t.isRootChildStore.state,
                            isInPeekRenderer: t.isInPeekRendererStore.state
                        })
                    }
                }
            }
            async function c({
                environment: e,
                collectionViewBlockStore: t
            }) {
                let i = t.id;
                if (!t.isDefined()) {
                    let a = await (0, n(389323).$)({
                        environment: e,
                        blockId: i
                    });
                    if (!a) return;
                    e = await n(274662).T({
                        environment: e,
                        newCurrentUserId: a
                    }), t = new(n(970831)).B(e, {
                        table: n(682956).ev,
                        id: i
                    }), await t.load()
                }
                let a = t.getSpaceId();
                if (!a) throw Error("Space ID not found for collection block");
                let o = (0, n(593303).k)(a);
                if (!o) throw Error(`Space view not found for space ID: ${a}`);
                let r = n(728372).AppStoreSidebarSpaceStore.state;
                (null == r ? void 0 : r.id) !== a && await (0, n(269948).y)({
                    environment: e,
                    spaceViewStore: o
                });
                let s = t.getFormat();
                if ((null == s ? void 0 : s.collection_view_sub_type) === "workflow_template_placeholder" && null != s && s.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: i
                    } = await n(708370).t.load(), a = i(s.placeholder_workflow_template_id);
                    if (!a) throw Error(`Collection template "${s.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: o
                    } = await n(903673).O.load();
                    o({
                        environment: e,
                        collectionTemplate: a,
                        collectionViewBlockStore: t
                    })
                } else(0, n(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: n(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        488736: (e, t, n) => {
            n.d(t, {
                GW: () => d,
                _D: () => l,
                zf: () => a
            }), n(898992), n(354520), n(581454);
            var i = () => n(832375);
            let a = 10;
            class o {
                localStorageStore = new(n(274919)).Ay({
                    namespace: "recentsCache",
                    important: !1,
                    trackingType: "preference"
                });
                waitUntilReady() {
                    return this.localStorageStore.waitUntilReady()
                }
                get(e) {
                    let t = this.localStorageStore.get(e),
                        i = n(969475).object({
                            required: {
                                id: n(969475).uuid(),
                                version: n(969475).number(),
                                parentId: n(969475).uuid(),
                                parentTable: n(969475).string(),
                                spaceId: n(969475).uuid()
                            },
                            optional: {}
                        });
                    return null == t ? void 0 : t.filter(e => !i.validator(e))
                }
                set(e, t) {
                    this.localStorageStore.set(e, t)
                }
                remove(e) {
                    this.localStorageStore.remove(e)
                }
            }
            let r = new o;

            function s(e) {
                var t, n;
                let i = e.getVersion(),
                    a = e.getType(),
                    o = e.getParentId(),
                    r = e.getParentTable(),
                    s = e.getLastEditedByPointer(),
                    l = e.getLastEditedTime(),
                    d = e.getSpaceId();
                if (void 0 !== i && void 0 !== a && void 0 !== o && void 0 !== r && void 0 !== d) return {
                    id: e.id,
                    version: i,
                    title: e.getTitleValue(),
                    icon: null == (t = e.getIcon()) ? void 0 : t.icon,
                    cover: null == (n = e.getCover()) ? void 0 : n.cover,
                    coverPosition: e.getFormatStore().getKeyValue("page_cover_position"),
                    parentId: o,
                    parentTable: r,
                    lastEditedByPointer: s,
                    lastEditedTime: l,
                    spaceId: d
                }
            }

            function l(e) {
                var t;
                let i = null == (t = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : t.id;
                if (!i) return !1;
                let o = e.filter(e => e.canRead()).slice(0, a).map(s).filter(n(722371).O9);
                return r.set(i, o), !0
            }

            function d() {
                var e;
                let {
                    sidebarSpaceViewStore: t,
                    currentUserStore: a
                } = (0, n(682985).K8)(() => ({
                    sidebarSpaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                    currentUserStore: n(728372).AppStoreCurrentUserStore.state
                }), []), [o] = (0, n(97668).Yb)(async () => {
                    var e;
                    if (await r.waitUntilReady(), !t || n(728372).AppStoreSidebarSpaceViewStore.state !== t) return;
                    let o = null == a ? void 0 : a.id,
                        s = t.id,
                        l = t.getSpaceId(),
                        d = null == (e = r.get(s)) ? void 0 : e.filter(e => e.spaceId === l);
                    if (!d) return;
                    let c = new(n(48202)).UserRecordMap;
                    for (let e of d) {
                        let t = function(e) {
                            var t, n;
                            return {
                                type: "page",
                                id: e.id,
                                last_edited_by_id: null == (t = e.lastEditedByPointer) ? void 0 : t.id,
                                last_edited_by_table: null == (n = e.lastEditedByPointer) ? void 0 : n.table,
                                last_edited_time: e.lastEditedTime,
                                properties: {
                                    title: e.title
                                },
                                format: {
                                    page_icon: e.icon,
                                    page_cover: e.cover,
                                    page_cover_position: e.coverPosition
                                },
                                version: e.version,
                                alive: !0,
                                parent_id: e.parentId,
                                parent_table: e.parentTable,
                                space_id: e.spaceId
                            }
                        }(e);
                        void 0 !== t && c.setValueAndRole({
                            pointer: {
                                id: e.id,
                                table: i().evP,
                                spaceId: e.spaceId
                            },
                            userId: o
                        }, t, "reader")
                    }
                    c.setModelAndRole({
                        pointer: t.pointer,
                        userId: o
                    }, t.getModel(), t.getRole() ? ? "none");
                    let u = new(n(870941)).A({
                        name: "recentPagesCache",
                        isTemporaryData: !0,
                        data: c
                    });
                    u.freeze();
                    let p = t.clone(u);
                    return d.map(e => {
                        let a = {
                            id: e.id,
                            table: i().evP,
                            spaceId: e.spaceId
                        };
                        return {
                            cacheStore: n(970831).B.createChildStore(p, a),
                            liveStore: n(970831).B.createChildStore(t, a)
                        }
                    })
                }, [t, null == a ? void 0 : a.id]), s = (e = o.value, (0, n(682985).K8)(() => null == e ? void 0 : e.map(({
                    cacheStore: e,
                    liveStore: t
                }) => t.isDefined() ? t : e), [e]));
                return "resolved" === o.status ? { ...o,
                    value: s
                } : { ...o,
                    value: void 0
                }
            }
        },
        498348: (e, t, n) => {
            function i(e) {
                let t = window.location.href;
                return n(758654).O$(t, {
                    tg: e.templateGalleryItem
                })
            }

            function a(e) {
                let t;
                return e instanceof n(258710).s ? t = e.getBlockId() : "type" in e ? (e.type, t = e.template.rootId) : t = e.rootId, t
            }

            function o(e) {
                let t = n(849917).locale && "en-us" !== n(849917).locale.toLocaleLowerCase() ? `/${n(849917).locale.toLowerCase()}` : "",
                    i = void 0 !== e ? `${t}${n(168962).JZ.templates}/${encodeURIComponent(e)}` : `${t}${n(168962).JZ.templates}`;
                return `${n(986939).A.domainBaseUrl}${i}`
            }

            function r(e) {
                if (!e) return "";
                try {
                    let n = JSON.parse(e);
                    if ("text" === n.content[0].content[0].nodeType) {
                        var t;
                        return ((null == n || null == (t = n.content) || null == (t = t[0]) || null == (t = t.content) || null == (t = t[0]) ? void 0 : t.value) || "").replace(/^(#{2,6})\s+/gm, "# ")
                    }
                } catch (e) {
                    return ""
                }
            }
            n.d(t, {
                $Y: () => r,
                Px: () => o,
                Up: () => i,
                dY: () => a
            })
        },
        511101: (e, t, n) => {
            n.d(t, {
                m: () => i
            });
            let i = "notion-modal-underlay"
        },
        517794: (e, t, n) => {
            n.d(t, {
                t: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "5.83 0.79 8.33 18.41",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.977 5.393a.625.625 0 0 1-.883 0l-2.47-2.469v5.662a.625.625 0 1 1-1.25 0V2.924L6.907 5.393a.625.625 0 0 1-.884-.884L9.558.974a.625.625 0 0 1 .884 0l3.535 3.535a.625.625 0 0 1 0 .884m-3.352 6.026a.625.625 0 1 0-1.25 0v5.648l-2.469-2.469a.625.625 0 1 0-.884.884l3.536 3.535c.244.245.64.245.884 0l3.535-3.535a.625.625 0 0 0-.883-.884l-2.47 2.469z"
                    })
                },
                a = (0, n(104509).wt)("arrowUpDownStacked", i, "default")
        },
        523511: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            let i = n(546605).Store.createValue(!0)
        },
        550246: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                plusFillSmallIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.65 2.65 10.7 10.7",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M8 2.65a.75.75 0 0 1 .75.75v3.85h3.85a.75.75 0 0 1 0 1.5H8.75v3.85l-.004.077a.75.75 0 0 1-1.492 0L7.25 12.6V8.75H3.4a.75.75 0 0 1 0-1.5h3.85V3.4A.75.75 0 0 1 8 2.65"
                    })
                },
                a = (0, n(104509).wt)("plusFillSmall", i, "fillSmall")
        },
        552619: (e, t, n) => {
            n.r(t), n.d(t, {
                checkStackIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.96 1.99 14.08 15.13",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.75 2.545a.55.55 0 0 1 .55-.55h5.4a.55.55 0 0 1 0 1.1H7.3a.55.55 0 0 1-.55-.55m-1.25 1.7a.55.55 0 1 0 0 1.1h9a.55.55 0 0 0 0-1.1zm7.036 5.847a.625.625 0 1 0-1.072-.643l-1.953 3.256-1.036-1.208a.625.625 0 1 0-.95.813l1.6 1.867a.625.625 0 0 0 1.011-.085z"
                        }), (0, i.jsx)("path", {
                            d: "M5.088 6.42a2.125 2.125 0 0 0-2.125 2.125v6.45c0 1.174.951 2.125 2.125 2.125h9.825a2.125 2.125 0 0 0 2.125-2.125v-6.45a2.125 2.125 0 0 0-2.125-2.125zm-.875 2.125c0-.483.392-.875.875-.875h9.825c.483 0 .875.392.875.875v6.45a.875.875 0 0 1-.875.875H5.088a.875.875 0 0 1-.875-.875z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("checkStack", a, "default")
        },
        556809: (e, t, n) => {
            n.d(t, {
                a: () => r
            });
            var i = n(296540);

            function a(e) {
                n(561599).A.state.openModals.has(e) && (n(561599).A.state.openModals.delete(e), n(561599).A.emit())
            }
            var o = n(474848);

            function r(e) {
                let {
                    open: t,
                    onOpen: r,
                    transitionAppearance: s = "modal"
                } = e, l = (0, i.useRef)();
                void 0 === l.current && (l.current = n(92513).JW());
                let c = l.current,
                    u = (0, n(682985).uB)(e.store, n(432376).A),
                    p = (0, n(682985).K8)(() => u.state.open, [u]),
                    m = (0, i.useRef)(!1),
                    h = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === s,
                        isShowingTabBar: (0, n(682985).O$)(n(584257).b)
                    }),
                    g = (0, i.useCallback)(() => {
                        if (!m.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), n(561599).A.state.openModals.has(c) || (n(561599).A.state.openModals.add(c), n(561599).A.emit()), r && r();
                        else m.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), a(c));
                        m.current = t
                    }, [c, u, r, t]);
                return (0, i.useEffect)(() => {
                    g()
                }, [g]), (0, n(637030).X)(() => {
                    a(c)
                }), (0, o.jsx)(n(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, o.jsx)(n(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, o.jsx)(n(654979).A, {
                            tag: d,
                            visible: e.open,
                            animate: {
                                opacity: 1
                            },
                            initial: {
                                opacity: 0
                            },
                            exit: {
                                opacity: 0
                            },
                            forceCompositeLayer: !0,
                            config: {
                                duration: h ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var n, i, a;
                                return n = t, i = u, a = e.onClosed, void(n ? i.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (i.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == a || a()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: h,
                            showCloseIcon: e.showCloseIcon,
                            onDismiss: e.onDismiss,
                            isWaxPaper: e.isWaxPaper,
                            ariaLabel: e.ariaLabel,
                            ariaLabelledBy: e.ariaLabelledBy,
                            ariaDescribedBy: e.ariaDescribedBy,
                            innerStyle: e.innerStyle,
                            children: e.children,
                            preventHideChildrenWhileOpening: e.preventHideChildrenWhileOpening,
                            style: e.style,
                            className: e.className,
                            backgroundStyle: e.backgroundStyle,
                            store: u,
                            isWash: e.isWash,
                            transitionAppearance: s
                        })
                    })
                })
            }

            function s({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: i,
                store: a
            }) {
                let r = (0, n(682985).uB)(a, n(432376).A),
                    l = (0, n(682985).K8)(() => r.state.openAnimationCompleted, [r]);
                return t || l || i ? (0, o.jsx)(o.Fragment, {
                    children: e
                }) : null
            }
            let l = i.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: i,
                    isWash: a,
                    ariaLabel: r,
                    ariaLabelledBy: l,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: m,
                    store: h
                }, g) {
                    let f = (0, n(682985).uB)(h, n(432376).A),
                        y = (0, n(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: n(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: i ? n(632079).Tj.popoverWaxPaperBackground : a ? n(632079).Tj.background.secondary : n(632079).Tj.background.elevated,
                                backdropFilter: i ? "blur(40px)" : "none",
                                WebkitBackdropFilter: i ? "blur(40px)" : "none"
                            }
                        }), [c, i, a]);
                    return (0, o.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": r,
                        "aria-labelledby": l,
                        "aria-describedby": d,
                        style: y.dialog,
                        ref: g,
                        children: [e ? (0, o.jsx)(n(226512).R, {
                            onClick: t
                        }) : void 0, (0, o.jsx)(s, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: m,
                            store: f
                        })]
                    })
                }),
                d = i.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: i,
                    showCloseIcon: a,
                    onDismiss: r,
                    isWaxPaper: s,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: m,
                    children: h,
                    preventHideChildrenWhileOpening: g,
                    style: f,
                    className: y,
                    backgroundStyle: v,
                    transitionAppearance: S,
                    store: x
                }, b) {
                    let w = (0, n(336995).A)(t),
                        j = function(e) {
                            switch (e) {
                                case "none":
                                    return {
                                        animate: {},
                                        initial: {},
                                        exit: {}
                                    };
                                case "modal":
                                    return {
                                        animate: {
                                            scale: 1
                                        },
                                        initial: {
                                            scale: .97
                                        },
                                        exit: {
                                            scale: .97
                                        }
                                    };
                                case "full-screen":
                                    return {
                                        initial: {
                                            translateY: 5,
                                            opacity: 0
                                        },
                                        animate: {
                                            translateY: 0,
                                            opacity: 1
                                        },
                                        exit: {
                                            opacity: 0
                                        },
                                        config: {
                                            duration: 650,
                                            timingFunction: "ease-in-out"
                                        }
                                    };
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }(S),
                        {
                            mobileTopPadding: k,
                            mobileBottomPadding: I
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, n(533992).v3)();
                            return {
                                mobileTopPadding: (0, n(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, n(571354).n)()
                            }
                        }();
                    return (0, o.jsxs)("div", {
                        style: {
                            paddingTop: k,
                            paddingBottom: I,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...f
                        },
                        ...w,
                        className: y,
                        ref: b,
                        children: [(0, o.jsx)(n(781036).B, {
                            backgroundStyle: v,
                            onDismiss: r
                        }), (0, o.jsx)(n(654979).A, {
                            tag: l,
                            skip: i,
                            visible: e,
                            ...j,
                            forceCompositeLayer: !0,
                            showCloseIcon: a,
                            onDismiss: r,
                            isWaxPaper: s,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: m,
                            children: h,
                            disableAnimation: i,
                            preventHideChildrenWhileOpening: g,
                            store: x
                        })]
                    })
                })
        },
        557737: (e, t, n) => {
            n.d(t, {
                K: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.612 4.08A1.895 1.895 0 0 0 3.971 5.81l-.005.092.001 9.439-.864.053h-.035a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.646V4.137c0-.88.683-1.61 1.562-1.665l10.187-.651a.755.755 0 0 1 .786.551.826.826 0 0 1 .03.175v.943l-9.133.583-.037.007Zm12.172 12.67a.779.779 0 0 1-.617.747c-.006 0-.013.003-.02.003l-11.045.681h-.034a.883.883 0 0 1-.571-.245.921.921 0 0 1-.28-.647l-.001-.03V6.072l.001-.047a.777.777 0 0 1 .67-.709c.01 0 .018-.003.027-.003l11.052-.706a.755.755 0 0 1 .786.551.824.824 0 0 1 .03.175l.002 11.418Zm-1.248-8.726a.388.388 0 0 0-.418-.393l-9.213.563c-.23.012-.439.177-.439.436v7.533c-.01.484.31.61.673.583L16 16.221l.002-.001c.466-.018.534-.374.534-.65V8.024Zm-7.35 2.458c-.429.026-.574.353-.573.856v.089c-.051.012-.094.023-.146.026-.309.02-.531-.232-.532-.682 0-.689.616-1.336 1.79-1.41 1.045-.064 1.714.441 1.715 1.333 0 .67-.556 1.147-1.104 1.296 1.028.05 1.458.624 1.459 1.357.001 1.254-.915 1.964-2.329 2.052l-.034.002c-1.063.066-1.809-.338-1.81-1.035 0-.397.29-.733.728-.76.035-.003.068.004.103.002.087.71.567.97 1.046.941.463-.029.788-.34.788-.782v-.018c0-.688-.575-.723-1.44-.757l-.138-.822c.805-.147 1.207-.41 1.207-.887 0-.512-.284-.83-.73-.801Zm3.864-.339c-.857.248-1.045-.129-.952-.523.514-.12 1.85-.521 2.356-.703l.006 5.289.934.136c0 .344-.197.56-.548.581-.291.018-.968.043-1.294.063-.505.031-1.43.107-1.43.107a.572.572 0 0 1-.035-.201c0-.168.068-.34.29-.416l.677-.219-.004-4.114Z"
                    })
                },
                a = (0, n(104509).wt)("calendarDate31", i, "default")
        },
        561599: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let o = new a,
                r = o;
            (0, n(202146).exposeDebugValue)("GlobalModalStore", o)
        },
        578449: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    spaceViewStore: i,
                    ...a
                } = e;
                if (!i.getModel()) return;
                let o = !(0, n(654863).x)(i)[e.feature],
                    r = i.getSpaceId();
                (0, n(377796).createAndCommit)({
                    userAction: "userHomeActions.toggleHomeFeature",
                    environment: t,
                    cellTarget: r ? {
                        spaceWithId: r
                    } : void 0,
                    canUndo: !0,
                    perform: t => {
                        (0, n(421439).y4)({
                            store: i,
                            operation: {
                                pointer: i.pointer,
                                path: ["settings", "personal_home", "enabled_features"],
                                command: "update",
                                args: {
                                    [e.feature]: o
                                }
                            },
                            transaction: t
                        })
                    }
                }), (0, n(167552).f_)({
                    environment: t,
                    show: o,
                    ...a
                })
            }

            function a({
                environment: e,
                option: t,
                from: i,
                userAction: o
            }) {
                let r = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!r) return !1;
                let s = r.getOnAppStartStore().getValue(),
                    l = r.getSpaceId();
                return (0, n(377796).createAndCommit)({
                    userAction: o,
                    environment: e,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: r,
                            operation: {
                                pointer: r.pointer,
                                path: ["settings", "on_app_start"],
                                command: "set",
                                args: t
                            },
                            transaction: e
                        })
                    }
                }), (0, n(377744).c)({
                    spaceView: r.getModel(),
                    preference: t
                }), (0, n(167552).lr)({
                    environment: e,
                    oldValue: s,
                    newValue: t,
                    from: i
                }), !0
            }

            function o(e) {
                let {
                    environment: t,
                    selectedStore: i,
                    spaceViewStore: a,
                    collectionContextStore: o
                } = e, r = o.collectionViewStore(), s = o.collectionStore(), l = o.collectionViewBlockStore();
                if (!s || !r || !l || !a) return;
                let d = (0, n(679321).r)(a),
                    c = i.table === n(832375).yKj ? d.indexOf(i) + 1 : 0,
                    u = i.table === n(832375).yKj ? i.id : void 0,
                    p = r.getSpaceId();
                (0, n(377796).createAndCommit)({
                    environment: t,
                    userAction: "PersonalHomeTrendingPanel.setCollectionViewSourceTeamId",
                    cellTarget: p ? {
                        spaceWithId: p
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, n(421439).y4)({
                            store: r,
                            operation: {
                                pointer: {
                                    id: r.id,
                                    table: n(832375).Gy1
                                },
                                path: ["format", "collection_view_source", "teamId"],
                                command: "set",
                                args: u
                            },
                            transaction: e
                        }), (0, n(316572).d)({
                            environment: t,
                            collectionViewBlockStore: l,
                            collectionViewStore: r,
                            collectionStore: s,
                            collectionContextStore: o,
                            isFullScreen: !1,
                            isRootChild: !1,
                            isInPeekRenderer: !1,
                            viewsModuleContext: void 0
                        })
                    }
                }), (0, n(167552).AP)({
                    environment: t,
                    teamId: u,
                    index: c
                })
            }
            n.d(t, {
                WO: () => i,
                _V: () => a,
                hK: () => o
            })
        },
        593036: (e, t, n) => {
            n.r(t), n.d(t, {
                PersonalHomeContainer: () => tY,
                SetupPendingHomeTile: () => X
            }), n(898992), n(803949);
            var i = n(296540),
                a = n(474848);
            let o = {
                top: 8,
                insetInlineEnd: 8,
                height: 28
            };

            function r(e) {
                let t = (0, n(533992).v3)(),
                    [r, s] = (0, i.useState)(),
                    l = (0, n(682985).K8)(() => e.store.getCover(), [e.store]),
                    d = (0, n(682985).K8)(() => n(275015).M.state.loadingMode !== n(151525).pF && n(275015).M.state.loadingMode !== n(151525).Wc, []),
                    c = (0, n(682985).K8)(() => "uploading" === n(275015).M.state.loadingMode && n(275015).M.state.uploadProgress || 0, []),
                    u = (0, n(682985).K8)(() => t.WindowSizeStore.state.paddingTop, [t.WindowSizeStore]),
                    p = (0, n(960253).I)(() => ({
                        background: {
                            position: "absolute",
                            width: "100%",
                            height: "100%",
                            marginTop: n(986939).A.isMobile ? u : void 0,
                            top: "50%",
                            insetInlineStart: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%)",
                            backgroundImage: `url(${r}`,
                            backgroundAttachment: "fixed",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }
                    }), [r, u]);
                return l ? (0, a.jsx)(n(738251).A, {
                    url: l.cover,
                    isAuthenticated: !0,
                    permissionRecord: l.pointer,
                    render: (e, t) => (s(t), (0, a.jsx)("div", {
                        role: "img",
                        style: p.background,
                        onLoad: () => {
                            n(275015).M.setState({
                                loadingMode: "loaded"
                            })
                        },
                        children: d ? (0, a.jsx)(n(252691).X, {
                            variant: "spinner",
                            spinnerSize: "sm",
                            percentage: c,
                            style: o
                        }) : void 0
                    }))
                }) : null
            }

            function s() {
                let e = (0, n(960253).e)(),
                    t = (0, n(533992).WS)();
                return (0, n(682985).K8)(() => (t ? n(681693).pW : n(681693).$L) + 2 * (0, n(681693).O0)({
                    mode: e
                }), [t, e])
            }
            n(354520), n(581454), n(737550);
            var l = n.n(n(32485)),
                d = () => n(546605);
            class c extends d().Store {
                getInitialState() {
                    return {
                        type: "initial"
                    }
                }
            }
            let u = new c;

            function p({
                firstMountToReadyMetricName: e,
                pageOriginToReadyMetricName: t,
                isReady: a
            }) {
                let o = (0, n(533992).v3)(),
                    r = (0, n(377475).h)(e, {}),
                    s = (0, n(377475).l)(t, {}),
                    l = (0, n(682985).K8)(() => (function(e) {
                        let {
                            route: t,
                            initialRoute: n,
                            historyState: i
                        } = e.RouterStore.state;
                        if ("page" !== t.name) return !1;
                        switch (n.name) {
                            case "root":
                                return (null == i ? void 0 : i.index) === 1;
                            case "page":
                                return n.blockId === t.blockId && (null == i ? void 0 : i.index) === 0;
                            default:
                                return !1
                        }
                    })(o), [o]);
                (0, i.useEffect)(() => {
                    l && a && (r(), s())
                }, [a, r, s, l])
            }
            var m = () => n(103217),
                h = () => n(399161),
                g = () => n(74423);

            function f() {
                var e;
                let t = null == (e = (0, i.useContext)(n(324193).R)) ? void 0 : e.sizeStore;
                return (0, n(682985).K8)(() => null == t ? void 0 : t.getState(), [t])
            }
            let y = (0, n(109939).YK)({
                    firstMeeting: {
                        id: "CalendarFeaturePreview.eventTitle.firstMeeting",
                        defaultMessage: "My first meeting"
                    },
                    groceryShop: {
                        id: "CalendarFeaturePreview.eventTitle.groceryShop",
                        defaultMessage: "Grocery shopping"
                    },
                    office: {
                        id: "CalendarFeaturePreview.eventLocation.office",
                        defaultMessage: "Office"
                    },
                    store: {
                        id: "CalendarFeaturePreview.eventLocation.store",
                        defaultMessage: "Store"
                    },
                    teamStandup: {
                        id: "CalendarFeaturePreview.eventTitle.teamStandup",
                        defaultMessage: "Team standup"
                    },
                    projectCheckIn: {
                        id: "CalendarFeaturePreview.eventTitle.projectCheckIn",
                        defaultMessage: "Project check-in"
                    }
                }),
                v = [{
                    title: y.firstMeeting,
                    time: n(906745).DateTime.fromObject({
                        hour: 9
                    }),
                    location: y.office,
                    includeJoinButton: !0,
                    includeJoinAndTakeNotesButton: !1
                }],
                S = [{
                    title: y.groceryShop,
                    time: n(906745).DateTime.fromObject({
                        hour: 11
                    }),
                    location: y.store,
                    includeJoinButton: !1,
                    includeJoinAndTakeNotesButton: !1
                }],
                x = [{
                    title: y.teamStandup,
                    time: n(906745).DateTime.fromObject({
                        hour: 9
                    }),
                    location: y.office,
                    includeJoinButton: !1,
                    includeJoinAndTakeNotesButton: !0
                }],
                b = [{
                    title: y.projectCheckIn,
                    time: n(906745).DateTime.fromObject({
                        hour: 10
                    }),
                    location: y.office,
                    includeJoinButton: !1,
                    includeJoinAndTakeNotesButton: !1
                }],
                w = {
                    date: {
                        width: "25%",
                        paddingInlineEnd: 10,
                        display: "flex",
                        flexDirection: "column",
                        fontSize: n(418676).Kw,
                        fontWeight: n(699422).Wy.medium
                    },
                    events: {
                        width: "75%"
                    }
                };

            function j({
                date: e,
                events: t
            }) {
                let o = (0, i.useMemo)(() => e.day === n(906745).DateTime.now().day ? (0, a.jsx)(n(109939).sA, {
                    id: "notionCalendarEventDate.today",
                    defaultMessage: "Today"
                }) : e.toLocaleString({
                    weekday: "short"
                }), [e]);
                return (0, a.jsxs)(n(4458).fI, {
                    paddingBottom: 10,
                    children: [(0, a.jsxs)("div", {
                        style: w.date,
                        children: [(0, a.jsx)("div", {
                            children: o
                        }), (0, a.jsx)("div", {
                            children: e.toLocaleString({
                                month: "short",
                                day: "numeric"
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        style: w.events,
                        children: t.map(e => (0, a.jsx)(I, {
                            event: e
                        }, e.title.id))
                    })]
                })
            }
            let k = {
                container: {
                    marginBottom: 14,
                    display: "flex"
                },
                calendarIndicator: {
                    width: 4,
                    backgroundColor: n(632079).Tj.home.emptyStatePreview.calendarIndicator,
                    borderRadius: 4,
                    flexShrink: 0
                },
                event: {
                    display: "flex",
                    width: "100%",
                    gap: 4,
                    overflow: "hidden"
                },
                eventDetails: {
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    paddingInlineStart: 10,
                    overflow: "hidden"
                },
                title: {
                    fontWeight: n(699422).Wy.medium,
                    ...n(699422).RC
                },
                joinButton: {
                    marginTop: 6,
                    paddingInlineStart: 10
                }
            };

            function I({
                event: e
            }) {
                let t = (0, n(109939).tz)(),
                    o = (0, i.useMemo)(() => (0, n(523144).ax)({
                        time: e.time,
                        showAmPm: !0,
                        locale: t.locale,
                        timeZone: e.time.zoneName
                    }), [e.time, t.locale]),
                    r = e.includeJoinButton || e.includeJoinAndTakeNotesButton;
                return (0, a.jsx)("div", {
                    style: k.container,
                    children: (0, a.jsxs)("div", {
                        style: k.event,
                        children: [(0, a.jsx)("div", {
                            style: k.calendarIndicator
                        }), (0, a.jsxs)(n(4458).VP, {
                            children: [(0, a.jsxs)("div", {
                                style: k.eventDetails,
                                children: [(0, a.jsx)("div", {
                                    style: k.title,
                                    children: t.formatMessage(e.title)
                                }), (0, a.jsx)("div", {
                                    children: `${o} ⸱ ${t.formatMessage(e.location)}`
                                })]
                            }), r ? (0, a.jsx)("div", {
                                style: k.joinButton,
                                children: (0, a.jsx)(C, {
                                    canTakeNotes: e.includeJoinAndTakeNotesButton
                                })
                            }) : void 0]
                        })]
                    })
                })
            }
            let A = {
                container: {
                    width: "fit-content",
                    paddingTop: 2,
                    paddingInlineEnd: 8,
                    paddingBottom: 2,
                    paddingInlineStart: 8,
                    display: "flex",
                    flexDirection: "row",
                    backgroundColor: n(632079).Tj.home.emptyStatePreview.joinButtonBackground,
                    borderRadius: 4
                },
                joinTitleContainer: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }
            };

            function C({
                canTakeNotes: e
            }) {
                return (0, a.jsxs)("div", {
                    style: A.container,
                    children: [(0, a.jsx)(n(4458).fI, {
                        justifyContent: "center",
                        alignItems: "center",
                        paddingInlineEnd: 8,
                        children: (0, a.jsx)(n(16275).I, {
                            icon: n(142880).w,
                            size: "sm"
                        })
                    }), (0, a.jsx)("div", {
                        style: A.joinTitleContainer,
                        children: e ? (0, a.jsx)(n(109939).sA, {
                            id: "notionCalendarEvent.joinAndTakeNotesButtonWithMeeting",
                            defaultMessage: "Join and take notes"
                        }) : (0, a.jsx)(n(109939).sA, {
                            id: "notionCalendarEvent.joinButtonWithMeeting",
                            defaultMessage: "Join meeting"
                        })
                    })]
                })
            }
            let T = function() {
                    let e = (0, n(109939).tz)(),
                        t = n(906745).DateTime.now().setLocale(e.locale),
                        i = (0, n(839362).W)();
                    return (0, a.jsxs)(n(4458).VP, {
                        justifyContent: "center",
                        minHeight: "100%",
                        children: [(0, a.jsx)(j, {
                            date: t,
                            events: i ? x : v
                        }), (0, a.jsx)(j, {
                            date: t.plus({
                                days: 1
                            }),
                            events: i ? b : S
                        })]
                    })
                },
                M = ["wake", "breakfast", "work", "lunch", "exercise"],
                _ = {
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    height: "100%"
                },
                B = {
                    databaseHeader: {
                        display: "flex",
                        flexDirection: "row",
                        paddingTop: 4,
                        paddingBottom: 4,
                        gap: 4,
                        fontSize: n(418676).Kw
                    },
                    status: {
                        flex: 1,
                        textAlign: "end"
                    }
                };

            function P() {
                return (0, a.jsxs)("div", {
                    style: B.databaseHeader,
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "CustomDbFeaturePreview.activity.headerTitle",
                            defaultMessage: "Activity"
                        })
                    }), (0, a.jsx)("div", {
                        style: B.status,
                        children: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "Status",
                            id: "database.propertyTypeName.status"
                        })
                    })]
                })
            }
            let V = {
                databaseRow: {
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    borderTop: `1px solid ${n(632079).Tj.border.secondary}`,
                    gap: 12,
                    paddingTop: 4,
                    paddingBottom: 4
                },
                status: {
                    flex: 1,
                    textAlign: "end"
                },
                title: {
                    fontWeight: n(699422).Wy.medium
                }
            };

            function H({
                type: e
            }) {
                let t = (0, i.useMemo)(() => {
                        switch (e) {
                            case "wake":
                                return "sun";
                            case "breakfast":
                                return "wheat";
                            case "work":
                                return "book-closed";
                            case "lunch":
                                return "food-and-drink";
                            case "exercise":
                                return "run";
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }, [e]),
                    o = (0, i.useMemo)(() => {
                        switch (e) {
                            case "wake":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbFeaturePreview.rowTitle.wake",
                                    defaultMessage: "Wake up and freshen up"
                                });
                            case "breakfast":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbFeaturePreview.rowTitle.breakfast",
                                    defaultMessage: "Have breakfast"
                                });
                            case "work":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbFeaturePreview.rowTitle.work",
                                    defaultMessage: "Work or study"
                                });
                            case "lunch":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbFeaturePreview.rowTitle.lunch",
                                    defaultMessage: "Have lunch"
                                });
                            case "exercise":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbFeaturePreview.rowTitle.exercise",
                                    defaultMessage: "Exercise"
                                });
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }, [e]),
                    r = (0, i.useMemo)(() => {
                        switch (e) {
                            case "wake":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "database.statusProperty.option.done",
                                    defaultMessage: "Done"
                                });
                            case "breakfast":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "database.statusProperty.option.inProgress",
                                    defaultMessage: "In progress"
                                });
                            case "work":
                            case "lunch":
                            case "exercise":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "database.statusProperty.option.notStarted",
                                    defaultMessage: "Not started"
                                });
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }, [e]);
                return (0, a.jsxs)("div", {
                    style: V.databaseRow,
                    children: [(0, a.jsx)(n(130867).j, {
                        iconName: t,
                        size: "sm",
                        colorVariant: "disabled"
                    }), (0, a.jsx)("div", {
                        style: V.title,
                        children: o
                    }), (0, a.jsx)("div", {
                        style: V.status,
                        children: r
                    })]
                })
            }
            let L = function() {
                    return (0, a.jsxs)("div", {
                        style: _,
                        children: [(0, a.jsx)(P, {}), M.map(e => (0, a.jsx)(H, {
                            type: e
                        }, e))]
                    })
                },
                E = [{
                    type: "sync",
                    date: n(906745).DateTime.now(),
                    area: "work"
                }, {
                    type: "review",
                    date: n(906745).DateTime.now().plus({
                        days: 1
                    }),
                    area: "work"
                }, {
                    type: "create",
                    date: n(906745).DateTime.now().plus({
                        days: 7
                    }),
                    area: "work"
                }, {
                    type: "book",
                    date: n(906745).DateTime.now(),
                    area: "personal"
                }, {
                    type: "dinner",
                    date: n(906745).DateTime.now().plus({
                        days: 7
                    }),
                    area: "personal"
                }],
                R = {
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    height: "100%"
                },
                D = {
                    date: {
                        flex: 1,
                        textAlign: "end"
                    },
                    title: {
                        fontWeight: n(699422).Wy.medium
                    }
                };

            function F({
                task: e
            }) {
                let {
                    type: t,
                    date: o,
                    area: r
                } = e, s = (0, n(109939).tz)(), l = (0, i.useMemo)(() => {
                    switch (t) {
                        case "sync":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.taskTitle.sync",
                                defaultMessage: "Sync with Lisa"
                            });
                        case "review":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.taskTitle.review",
                                defaultMessage: "Review design docs"
                            });
                        case "create":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.taskTitle.create",
                                defaultMessage: "Create color palette"
                            });
                        case "book":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.taskTitle.book",
                                defaultMessage: "Book flights to New York"
                            });
                        case "dinner":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.taskTitle.dinner",
                                defaultMessage: "Dinner with Alex"
                            });
                        default:
                            (0, n(722371).HB)(t)
                    }
                }, [t]), d = (0, i.useMemo)(() => {
                    switch (r) {
                        case "work":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.area.work",
                                defaultMessage: "Work"
                            });
                        case "personal":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "MyTasksFeaturePreview.area.personal",
                                defaultMessage: "Personal"
                            });
                        default:
                            (0, n(722371).HB)(r)
                    }
                }, [r]);
                return (0, a.jsxs)(n(4458).fI, {
                    gap: 12,
                    paddingBottom: 10,
                    alignItems: "center",
                    children: [(0, a.jsx)("div", {
                        children: (0, a.jsx)(n(16275).I, {
                            icon: n(790344).R,
                            colorVariant: "disabled"
                        })
                    }), (0, a.jsx)("div", {
                        style: D.title,
                        children: l
                    }), (0, a.jsx)("div", {
                        style: D.date,
                        children: o.setLocale(s.locale).toLocaleString({
                            month: "short",
                            day: "numeric",
                            year: "numeric"
                        })
                    }), (0, a.jsx)("div", {
                        children: d
                    })]
                })
            }
            let N = {
                marginInlineEnd: 14
            };

            function z() {
                return (0, a.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    children: [(0, a.jsx)("div", {
                        style: N,
                        children: (0, a.jsx)(n(16275).I, {
                            icon: n(581923).plusIcon,
                            colorVariant: "disabled"
                        })
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)(n(109939).sA, {
                            defaultMessage: "New task",
                            id: "appTemplates.projects.tasksCollectionEmptyButtonTitle"
                        })
                    })]
                })
            }
            let W = function() {
                    return (0, a.jsxs)("div", {
                        style: R,
                        children: [E.map(e => (0, a.jsx)(F, {
                            task: e
                        }, e.type)), (0, a.jsx)(z, {})]
                    })
                },
                O = {
                    padding: 8,
                    width: "fit-content"
                };

            function U(e) {
                let {
                    feature: t
                } = e, o = i.useRef(null), r = (0, i.useMemo)(() => {
                    switch (t) {
                        case "custom_db":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "CustomDbHomePanel.setup.button",
                                defaultMessage: "Select database"
                            });
                        case "calendar":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.signedOut.buttonText",
                                defaultMessage: "Connect Notion Calendar"
                            });
                        case "calendarDisconnectedAccount":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.disconnectedAccount.buttonText",
                                defaultMessage: "Reconnect with Notion Calendar"
                            });
                        case "calendarMissingScopes":
                            return (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarEmptyState.missingScopes.buttonText",
                                defaultMessage: "Access calendar and contacts"
                            });
                        case "tasks":
                            return (0, a.jsx)(n(109939).sA, {
                                defaultMessage: "Add task sources",
                                id: "tasksEmptyState.addTaskSources.button"
                            });
                        default:
                            (0, n(722371).HB)(t)
                    }
                }, [t]);
                return (0, a.jsx)("div", {
                    children: (0, a.jsx)(n(988022).p, {
                        colorPalette: "blue",
                        shouldShrink: !0,
                        onClick: () => e.onSetup(o),
                        style: O,
                        ref: o,
                        children: r
                    })
                })
            }
            let K = { ...(0, n(681693).Xx)(),
                    fill: n(632079).Tj.icon.disabled,
                    color: n(632079).Tj.icon.disabled,
                    margin: 8
                },
                q = {
                    icon: K,
                    calendarIcon: { ...K,
                        height: 34,
                        width: 34
                    }
                };

            function G({
                feature: e
            }) {
                return (0, n(682985).K8)(() => {
                    switch (e) {
                        case "custom_db":
                            return (0, a.jsx)(n(16275).I, {
                                icon: n(518630).T,
                                style: q.icon
                            });
                        case "calendar":
                        case "calendarDisconnectedAccount":
                        case "calendarMissingScopes":
                            return (0, a.jsx)(n(968107).y, {
                                style: q.calendarIcon
                            });
                        case "tasks":
                            return (0, a.jsx)(n(16275).I, {
                                icon: n(552619).checkStackIcon,
                                style: q.icon
                            });
                        default:
                            (0, n(722371).HB)(e)
                    }
                }, [e])
            }
            let $ = {
                featureTitle: {
                    maxWidth: 200,
                    fontSize: 16,
                    fontWeight: n(699422).Wy.medium,
                    lineHeight: 1.3,
                    color: n(632079).Tj.text.tertiary,
                    marginBottom: 8
                },
                featureLabel: {
                    color: n(632079).Tj.text.tertiary
                }
            };

            function Y({
                feature: e,
                centerText: t
            }) {
                let o = (0, n(960253).I)(() => ({
                        featureDescription: {
                            paddingInlineStart: 8,
                            paddingInlineEnd: 8,
                            marginTop: 10,
                            marginBottom: 16,
                            textAlign: t ? "center" : void 0
                        }
                    }), [t]),
                    r = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = (0, n(328765).S)()) || null == (e = e.getModel()) ? void 0 : e.getRenderTitle()
                    }, []),
                    s = (0, n(839362).W)(),
                    l = (0, i.useMemo)(() => "calendar" === e && s ? (0, a.jsx)(n(109939).sA, {
                        id: "notionCalendarEmptyState.signedOut.meetingNotesHeadline",
                        defaultMessage: "Connect AI Meeting Notes with your Calendar events"
                    }) : void 0, [e, s]),
                    d = (0, i.useMemo)(() => {
                        switch (e) {
                            case "custom_db":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "CustomDbHomePanel.setup.description",
                                    defaultMessage: "Pin a database view to quickly access it from Home."
                                });
                            case "calendar":
                                return s ? (0, a.jsx)(n(109939).sA, {
                                    id: "notionCalendarEmptyState.signedOut.meetingNotesTitle",
                                    defaultMessage: "Join calls, transcribe audio, and summarize meetings all in Notion."
                                }) : (0, a.jsx)(n(109939).sA, {
                                    id: "notionCalendarEmptyState.signedOut.title",
                                    defaultMessage: "See your upcoming events and join meetings from Home."
                                });
                            case "calendarDisconnectedAccount":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "notionCalendarEmptyState.calendarAccountDisconnected.title",
                                    defaultMessage: "Unable to connect to your account."
                                });
                            case "calendarMissingScopes":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "notionCalendarEmptyState.missingScopes.title",
                                    defaultMessage: "Missing required permissions to access your calendar and contacts."
                                });
                            case "tasks":
                                return (0, a.jsx)(n(109939).sA, {
                                    id: "MyTasksHomePanel.setup.description",
                                    defaultMessage: "See all your tasks across {spaceName} in one place.",
                                    values: {
                                        spaceName: r
                                    }
                                });
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }, [e, s, r]);
                return (0, a.jsxs)("div", {
                    style: o.featureDescription,
                    children: [l ? (0, a.jsx)(n(324489).V, {
                        isMultiline: !0,
                        style: $.featureTitle,
                        children: l
                    }) : null, (0, a.jsx)(n(324489).V, {
                        isMultiline: !0,
                        style: $.featureLabel,
                        children: d
                    })]
                })
            }
            let X = function({
                feature: e,
                onSetup: t
            }) {
                let o = "narrow" === f(),
                    r = (0, n(960253).e)(),
                    s = (0, n(960253).I)(() => ({
                        leftContainer: {
                            flexBasis: 0,
                            flexGrow: 1,
                            paddingTop: 36,
                            paddingBottom: 36,
                            paddingInlineStart: 24,
                            paddingInlineEnd: 24,
                            borderInlineEnd: o ? void 0 : `1px solid ${n(632079).Tj.border.secondaryTranslucent}`
                        },
                        leftContent: {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "100%",
                            alignItems: o ? "center" : void 0,
                            paddingBottom: 8 * !["calendar", "calendarDisconnectedAccount", "calendarMissingScopes"].includes(e)
                        },
                        right: {
                            flexBasis: 0,
                            flexGrow: 1,
                            paddingTop: 32,
                            paddingInlineStart: 24,
                            paddingInlineEnd: 24,
                            height: 236,
                            fontSize: n(418676).vQ,
                            color: "light" === r ? n(632079).Tj.text.disabled : n(632079).Tj.text.tertiary,
                            overflow: "hidden"
                        }
                    }), [e, o, r]),
                    l = (0, i.useMemo)(() => {
                        switch (e) {
                            case "custom_db":
                                return (0, a.jsx)(L, {});
                            case "calendar":
                            case "calendarDisconnectedAccount":
                            case "calendarMissingScopes":
                                return (0, a.jsx)(T, {});
                            case "tasks":
                                return (0, a.jsx)(W, {});
                            default:
                                (0, n(722371).HB)(e)
                        }
                    }, [e]);
                return (0, a.jsxs)(n(4458).fI, {
                    justifyContent: "stretch",
                    children: [(0, a.jsx)("div", {
                        style: s.leftContainer,
                        children: (0, a.jsxs)("div", {
                            style: s.leftContent,
                            children: [(0, a.jsx)(G, {
                                feature: e
                            }), (0, a.jsx)(Y, {
                                feature: e,
                                centerText: o
                            }), (0, a.jsx)(U, {
                                feature: e,
                                onSetup: t
                            })]
                        })
                    }), o ? void 0 : (0, a.jsx)("div", {
                        style: s.right,
                        children: l
                    })]
                })
            };
            class Q extends d().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                close() {
                    this.setState({
                        open: !1
                    })
                }
                open(e) {
                    this.setState({
                        open: !0,
                        panel: e
                    })
                }
            }

            function J() {
                return (0, n(682985).K8)(() => (0, n(338901).pH)(), [])
            }

            function Z({
                scrollerStore: e
            }) {
                let t = (0, n(682985).K8)(() => e.state.elementRef ? ? {
                        current: null
                    }, [e]),
                    i = 0 === (0, n(239160).yE)(t),
                    o = (0, n(960253).I)(() => ({
                        border: {
                            flexShrink: 0,
                            width: "100%",
                            boxShadow: i ? "0 0 0 transparent" : `0 1px 0 ${n(632079).Tj.border.secondaryTranslucent}`,
                            transition: "box-shadow 300ms",
                            height: 2,
                            marginTop: -2,
                            zIndex: 99
                        }
                    }), [i]);
                return (0, a.jsx)("div", {
                    style: o.border
                })
            }
            n(672577);
            let ee = {
                    width: "100%",
                    paddingBottom: 12
                },
                et = {
                    title: { ...n(699422).RC
                    },
                    titleWrapper: {
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        cursor: "pointer"
                    },
                    sectionItem: {
                        paddingTop: 12,
                        paddingBottom: 4,
                        marginTop: 0,
                        marginBottom: 0
                    },
                    sectionTitle: {
                        paddingTop: 0,
                        paddingBottom: 0,
                        marginTop: 0,
                        marginBottom: 0
                    }
                };

            function en({
                accountId: e,
                mirrored: t,
                botId: o
            }) {
                let r = (0, n(533992).v3)(),
                    s = (0, n(682985).K8)(() => (0, n(440143).Y)().getAccount(e), [e]),
                    l = (0, n(682985).K8)(() => (0, n(440143).Y)().getCalendarsForAccount(e), [e]),
                    d = (0, i.useCallback)(() => {
                        (0, n(874809).u$)({
                            environment: r,
                            from: "homeDisconnectedAccountWarning"
                        })
                    }, [r]);
                if (!s || s.authorized && 0 === l.length) return null;
                let c = s.authorized ? s.displayName : (0, a.jsx)(n(51831).m, {
                    content: () => (0, a.jsx)(n(109939).sA, {
                        id: "notionCalendarPanel.disconnectedAccountWarningTooltip",
                        defaultMessage: "Calendar account requires reconnecting"
                    }),
                    children: e => (0, a.jsxs)("span", {
                        role: "button",
                        style: et.titleWrapper,
                        onClick: d,
                        ...e,
                        children: [(0, a.jsx)("span", {
                            style: et.title,
                            children: s.displayName
                        }), (0, a.jsx)(n(16275).I, {
                            icon: n(143896).exclamationMarkTriangleFillSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        })]
                    })
                });
                return (0, a.jsxs)(n(4458).VP, {
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    children: [(0, a.jsx)(n(844565).A, {
                        title: c,
                        style: et.sectionItem,
                        desktopTitleStyle: et.sectionTitle
                    }), l.map(e => (0, a.jsx)(ea, {
                        mirrored: t,
                        botId: o,
                        calendar: e
                    }, (0, h().N$)(e)))]
                })
            }
            let ei = {
                container: {
                    height: 32
                },
                calendarSubtitle: {
                    marginInlineStart: 4,
                    color: n(632079).Tj.text.secondary
                }
            };

            function ea({
                mirrored: e,
                botId: t,
                calendar: o
            }) {
                let r = (0, n(533992).v3)(),
                    s = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                    l = (0, n(682985).K8)(() => !!o.notionParentId && !!o.subtitle && !!(0, n(440143).Y)().getCalendarsForAccount(o.accountId).find(e => e.id !== o.id && e.notionParentId && e.notionParentId === o.notionParentId), [o.accountId, o.id, o.notionParentId, o.subtitle]),
                    d = (0, n(682985).K8)(() => {
                        let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                        return !!o && (0, n(377382).Pj)({
                            spaceViewStore: e,
                            botId: t,
                            calendar: o
                        })
                    }, [t, o]),
                    c = (0, n(960253).e)(),
                    u = (0, n(960253).I)(() => ({
                        calendarColorIndicator: {
                            height: 10,
                            width: 10,
                            flexShrink: 0,
                            flexGrow: 0,
                            borderRadius: "100%",
                            backgroundColor: (0, n(588727).QL)({
                                theme: n(632079).Tj,
                                calendarColor: null == o ? void 0 : o.color,
                                themeMode: c
                            })
                        }
                    }), [null == o ? void 0 : o.color, c]);
                if (!o) return null;
                let p = l ? (0, a.jsxs)(n(4458).fI, {
                    alignItems: "center",
                    children: [o.name, (0, a.jsx)("span", {
                        style: ei.calendarSubtitle,
                        children: o.subtitle
                    })]
                }) : o.name;
                return (0, a.jsx)(n(95582).A, {
                    onClick: () => (0, n(55067).vA)({
                        environment: r,
                        botId: t,
                        calendarId: o.id,
                        accountId: o.accountId,
                        newIsVisible: !d,
                        analyticsContext: s
                    }),
                    disabled: e,
                    focused: !1,
                    style: ei.container,
                    left: (0, a.jsx)("div", {
                        style: u.calendarColorIndicator
                    }),
                    title: p,
                    right: (0, a.jsx)(n(16275).I, {
                        icon: d ? n(399225).eyeFillSmallIcon : n(924171).V,
                        colorVariant: "secondary",
                        size: "sm"
                    })
                })
            }
            let eo = i.memo(function({
                    botId: e,
                    isMirrored: t
                }) {
                    let i = (0, n(682985).K8)(() => (0, n(440143).Y)().getCurrentAccountIds(), []),
                        o = (0, n(960253).I)(() => ({
                            container: {
                                width: "100%",
                                display: "flex",
                                flexDirection: "column",
                                height: 228,
                                opacity: t ? .3 : void 0
                            }
                        }), [t]);
                    return (0, a.jsxs)("div", {
                        style: o.container,
                        children: [i.map(n => (0, a.jsx)(en, {
                            mirrored: t,
                            botId: e,
                            accountId: n
                        }, n)), (0, a.jsx)("div", {
                            style: ee
                        })]
                    })
                }),
                er = {
                    paddingTop: 0,
                    paddingBottom: 0
                },
                es = {
                    container: {
                        paddingInlineStart: 8,
                        paddingInlineEnd: 10,
                        height: 28,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 3
                    },
                    arrowLeftIcon: {
                        width: 24,
                        height: 24,
                        flexShrink: 0,
                        flexGrow: 0
                    },
                    menuTitle: {
                        flexGrow: 1,
                        fontWeight: n(699422).Wy.semibold,
                        fontSize: n(418676).vQ
                    },
                    closeButton: {
                        flexShrink: 0
                    }
                };

            function el({
                onClose: e,
                onBackClick: t
            }) {
                let i = (0, n(109939).tz)();
                return (0, a.jsxs)("div", {
                    style: es.container,
                    children: [(0, a.jsx)(n(374533).A, {
                        style: es.arrowLeftIcon,
                        icon: n(374241).arrowStraightLeftSmallIcon,
                        ariaLabel: i.formatMessage({
                            id: "calendarSettingsVisibilityPanel.back",
                            defaultMessage: "Back"
                        }),
                        onClick: t
                    }), (0, a.jsx)("div", {
                        style: es.menuTitle,
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "calendarSettingsVisibilityPanel.title",
                            defaultMessage: "Calendars"
                        })
                    }), (0, a.jsx)(n(314566).A, {
                        onClose: e,
                        style: es.closeButton
                    })]
                })
            }
            let ed = i.memo(function({
                    popupStore: e
                }) {
                    let t = (0, n(533992).v3)(),
                        {
                            botId: o
                        } = (0, n(515467).m)(),
                        r = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                        s = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceViewStore),
                        l = (0, n(682985).uB)(void 0, n(593423).A),
                        d = (0, n(682985).K8)(() => (0, n(377382).Xg)({
                            botId: o,
                            spaceViewStore: s
                        }), [o, s]),
                        c = (0, i.useCallback)(() => {
                            e.close(), (0, n(593666).lv)({
                                environment: t,
                                action: "close",
                                calendarPanelContext: (0, n(593666).sp)({
                                    panelState: r.panelState,
                                    view: r.view
                                })
                            })
                        }, [t, r.panelState, r.view, e]),
                        u = (0, i.useCallback)(() => e.open("main"), [e]),
                        p = (0, i.useCallback)(() => o && (0, n(55067).Kq)({
                            environment: t,
                            botId: o,
                            mirrorWithNotionCalendar: !d,
                            analyticsContext: {
                                panelState: r.panelState,
                                view: r.view
                            }
                        }), [o, t, r.panelState, r.view, d]);
                    if (!o) return null;
                    let m = (0, n(381453).oE)([{
                        key: "headerSection",
                        items: [{
                            key: "headerItem",
                            render: e => (0, a.jsx)(el, {
                                onClose: c,
                                onBackClick: u
                            }),
                            action: () => {}
                        }]
                    }, {
                        key: "mirrorToggle",
                        render: e => (0, a.jsx)(n(844565).A, { ...e,
                            topBorder: !0
                        }),
                        items: (0, n(381453).oE)([{
                            key: "mirrorToggleItem",
                            render: e => (0, a.jsx)(n(296060).A, { ...e,
                                focused: !1,
                                on: d,
                                title: (0, a.jsx)(n(109939).sA, {
                                    id: "calendarSettingsVisibilityPanel.mirrorWithNotionCalendar",
                                    defaultMessage: "Mirror calendar app"
                                }),
                                onClick: p
                            }),
                            action: () => {}
                        }])
                    }, {
                        key: "accountsList",
                        render: e => (0, a.jsx)(n(844565).A, { ...e,
                            style: er
                        }),
                        items: (0, n(381453).oE)([{
                            key: "accountsList",
                            render: e => (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)(Z, {
                                    scrollerStore: l
                                }), (0, a.jsx)(n(126767).H, {
                                    type: n(644154).A.Y,
                                    store: l,
                                    children: (0, a.jsx)(eo, {
                                        botId: o,
                                        isMirrored: d,
                                        ...e
                                    })
                                })]
                            }),
                            action: () => {}
                        }])
                    }]);
                    return (0, a.jsx)(n(558045).A, {
                        onAccept: e => {},
                        type: n(558045).O.Vertical,
                        sections: m,
                        initialFocus: void 0
                    })
                }),
                ec = {
                    one_day: {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "IncludeEventsPickerMenu.oneDay",
                            defaultMessage: "Today"
                        })
                    },
                    two_days: {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "IncludeEventsPickerMenu.two_days",
                            defaultMessage: "Today and tomorrow"
                        })
                    },
                    three_days: {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "IncludeEventsPickerMenu.three_days",
                            defaultMessage: "3 days"
                        })
                    },
                    one_week: {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "IncludeEventsPickerMenu.one_week",
                            defaultMessage: "1 week"
                        })
                    }
                },
                eu = {
                    lightText: {
                        color: n(632079).Tj.text.secondary
                    }
                },
                ep = i.memo(function(e) {
                    let t = (0, n(533992).v3)(),
                        o = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                        r = (0, n(682985).K8)(() => (0, n(83748).iI)().key, []);
                    return (0, a.jsx)(n(785267).A, { ...e,
                        popupType: n(182718).nl.Popup,
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        content: e => (0, a.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, a.jsx)(n(558045).A, {
                                onAccept: e.close,
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "all",
                                    items: (0, n(722371).WP)(ec).map(([e, {
                                        title: i
                                    }]) => ({
                                        action: () => {
                                            (0, n(55067).w1)({
                                                environment: t,
                                                timeRange: e,
                                                analyticsContext: o
                                            })
                                        },
                                        key: e,
                                        render: t => (0, a.jsx)(n(95582).A, { ...t,
                                            title: i,
                                            isChecked: e === r
                                        })
                                    }))
                                }],
                                initialFocus: void 0
                            })
                        }),
                        children: t => (0, a.jsx)(n(95582).A, { ...t,
                            focused: e.focused,
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(517794).t
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "IncludeEventsPickerMenu.includeEventsTitle",
                                defaultMessage: "Include events"
                            }),
                            right: (0, a.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                children: [(0, a.jsx)("span", {
                                    style: eu.lightText,
                                    children: "two_days_before_one_week_after" !== r ? ec[r].title : ec.one_week.title
                                }), (0, a.jsx)(n(16275).I, {
                                    icon: n(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })]
                            })
                        })
                    })
                }),
                em = {
                    lightText: {
                        color: n(632079).Tj.text.secondary
                    }
                },
                eh = i.memo(function(e) {
                    let t = (0, n(533992).v3)(),
                        o = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                        {
                            botId: r
                        } = (0, n(515467).m)(),
                        s = J(),
                        l = (0, n(682985).O$)(n(610463).A.externalAuthentications),
                        d = (0, i.useCallback)(e => {
                            if (!e) return "";
                            let t = l.find(t => t.parent_id === e.id);
                            return null == t ? void 0 : t.account_name
                        }, [l]);
                    return (0, a.jsx)(n(785267).A, { ...e,
                        popupType: n(182718).nl.Popup,
                        placementToOrigin: "right",
                        alignmentToOrigin: "start",
                        content: e => (0, a.jsx)(n(747369).A, {
                            menuType: n(649476).gu.Popup,
                            children: (0, a.jsx)(n(558045).A, {
                                onAccept: e.close,
                                type: n(558045).O.Vertical,
                                sections: [{
                                    key: "all",
                                    items: s.map(e => ({
                                        action: () => {
                                            (0, n(55067).rq)({
                                                environment: t,
                                                botId: e.id,
                                                shouldLog: !0,
                                                analyticsContext: o
                                            })
                                        },
                                        key: e.id,
                                        render: t => (0, a.jsx)(n(95582).A, { ...t,
                                            title: d(e),
                                            isChecked: e.id === r
                                        })
                                    }))
                                }],
                                initialFocus: void 0
                            })
                        }),
                        children: t => (0, a.jsx)(n(95582).A, { ...t,
                            focused: e.focused,
                            icon: (0, a.jsx)(n(16275).I, {
                                icon: n(623290).personIcon
                            }),
                            title: (0, a.jsx)(n(109939).sA, {
                                id: "NotionCalendarAccountPickerMenu.connectedAccountTitle",
                                defaultMessage: "Connected"
                            }),
                            right: (0, a.jsxs)(n(4458).fI, {
                                alignItems: "center",
                                children: [(0, a.jsx)("span", {
                                    style: em.lightText,
                                    children: d(s.find(e => e.id === r))
                                }), (0, a.jsx)(n(16275).I, {
                                    icon: n(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })]
                            })
                        })
                    })
                }),
                eg = ["all_day_events", "events_without_participants", "events_without_location"],
                ef = {
                    lightMenuButton: {
                        color: (0, n(681693).EI)().text
                    }
                };

            function ey({
                hasConnectedCalendar: e,
                popupStore: t
            }) {
                let o = (0, n(533992).v3)(),
                    r = (0, n(109939).tz)(),
                    s = (0, n(476743).a)(),
                    l = J(),
                    d = (0, i.useCallback)(() => {
                        (0, n(150782).F)(o, {
                            from: "home_calendar_settings"
                        })
                    }, [o]),
                    c = (0, i.useCallback)(() => t.open("calendarVisibility"), [t]),
                    u = (0, i.useCallback)(() => {
                        s && n(578449).WO({
                            environment: o,
                            spaceViewStore: s,
                            feature: "calendar",
                            from: "calendar_dismiss_button"
                        })
                    }, [s, o]),
                    p = eg.map(e => ({
                        key: `eventFilter_${e}`,
                        render: t => (0, a.jsx)(n(785417).c, { ...t,
                            filter: e,
                            entrypoint: "personal_home"
                        }),
                        action: () => {}
                    })),
                    m = (0, n(381453).oE)([e ? {
                        key: "calendarSpecificSettings",
                        items: [{
                            key: "calendars",
                            render: e => (0, a.jsx)(n(95582).A, { ...e,
                                icon: (0, a.jsx)(n(16275).I, {
                                    icon: n(998172).D
                                }),
                                title: (0, a.jsx)(n(109939).sA, {
                                    id: "NotionCalendarSettingsContent.calendars",
                                    defaultMessage: "Calendars"
                                }),
                                right: (0, a.jsx)(n(16275).I, {
                                    icon: n(491469).arrowChevronSingleRightSmallIcon,
                                    size: "sm",
                                    colorVariant: "secondary"
                                })
                            }),
                            action: c
                        }, {
                            key: "includeEvents",
                            render: e => (0, a.jsx)(ep, { ...e
                            }),
                            action: () => {}
                        }, ...p]
                    } : void 0, {
                        key: "highLevelSettingsAndLinks",
                        render: t => (0, a.jsx)(n(844565).A, { ...t,
                            topBorder: e
                        }),
                        items: [...l.length > 1 ? [{
                            key: "connectedCalendarAccount",
                            render: e => (0, a.jsx)(eh, { ...e
                            }),
                            action: () => {}
                        }] : [], {
                            key: "hideWidget",
                            render: e => (0, a.jsx)(n(95582).A, { ...e,
                                icon: (0, a.jsx)(n(16275).I, {
                                    icon: n(319681).e
                                }),
                                title: r.formatMessage(n(485023).u.hide)
                            }),
                            action: u
                        }, {
                            key: "learnMore",
                            render: e => (0, a.jsx)(n(95582).A, { ...e,
                                style: ef.lightMenuButton,
                                icon: (0, a.jsx)(n(16275).I, {
                                    icon: n(80094).questionMarkCircleIcon,
                                    colorVariant: "secondary"
                                }),
                                href: (0, n(442564).x)("guides.homeCalendar"),
                                title: (0, a.jsx)(n(109939).sA, {
                                    id: "NotionCalendarSettingsContent.learnMore",
                                    defaultMessage: "Learn more"
                                })
                            }),
                            action: d
                        }]
                    }]);
                return (0, a.jsx)(n(558045).A, {
                    onAccept: e => {},
                    type: n(558045).O.Vertical,
                    sections: m,
                    initialFocus: void 0
                })
            }
            let ev = i.memo(function({
                    hasConnectedCalendar: e,
                    popupStore: t
                }) {
                    let o, r = (0, n(682985).K8)(() => t.state.open ? t.state.panel : void 0, [t]),
                        [s, l] = (0, i.useState)(0),
                        d = (0, i.useCallback)(e => {
                            e && e.getBoundingClientRect().width > 0 && !s && l(e.getBoundingClientRect().width)
                        }, [s]);
                    return r ? ("main" === r ? o = (0, a.jsx)(ey, {
                        hasConnectedCalendar: e,
                        popupStore: t
                    }) : "calendarVisibility" === r && (o = (0, a.jsx)(ed, {
                        popupStore: t
                    })), (0, a.jsx)(n(747369).A, {
                        menuType: n(649476).gu.Popup,
                        innerRef: d,
                        ...s ? {
                            width: s
                        } : {},
                        children: o
                    })) : null
                }),
                eS = i.memo(function({
                    hasConnectedCalendar: e
                }) {
                    let t = (0, n(533992).v3)(),
                        o = (0, n(682985).uB)(void 0, Q),
                        r = (0, n(682985).K8)(() => o.state.open, [o]),
                        s = (0, i.useContext)(n(531491).a) ? ? n(531491).H,
                        l = (0, i.useCallback)(() => {
                            o.close(), (0, n(593666).lv)({
                                environment: t,
                                action: "close",
                                calendarPanelContext: (0, n(593666).sp)({
                                    panelState: s.panelState,
                                    view: s.view
                                })
                            })
                        }, [t, s.panelState, s.view, o]),
                        d = (0, i.useCallback)(() => {
                            o.open("main"), (0, n(593666).lv)({
                                environment: t,
                                action: "open",
                                calendarPanelContext: (0, n(593666).sp)({
                                    panelState: s.panelState,
                                    view: s.view
                                })
                            })
                        }, [t, s.panelState, s.view, o]);
                    return (0, a.jsx)(n(656252).A, {
                        open: r,
                        popupType: n(182718).nl.Popup,
                        alignmentToOrigin: "end",
                        placementToOrigin: "bottom",
                        onClose: l,
                        onClick: d,
                        content: t => (0, a.jsx)(ev, {
                            hasConnectedCalendar: e,
                            popupStore: o
                        }),
                        children: e => (0, a.jsx)(n(98454).A, { ...e,
                            onClick: d
                        })
                    }, "settings")
                }),
                ex = !1,
                eb = {
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    paddingBottom: 0
                },
                ew = {
                    paddingTop: 10
                };

            function ej(e) {
                let {
                    maxHeight: t,
                    onLoaded: o,
                    onDisplayStateChanged: r
                } = e, s = (0, n(533992).v3)(), l = (0, n(682985).O$)(n(728372).AppStoreSidebarSpaceStore), c = (0, n(515467).m)(), {
                    timeZone: u,
                    zone: f
                } = (0, n(591742).mn)(), y = (0, n(132315).s5)(), v = (0, n(682985).K8)(() => (0, n(137683).m)().state.timeNow, []), S = (0, i.useMemo)(() => n(906745).DateTime.fromMillis(v, {
                    zone: f
                }), [v, f]);
                (0, i.useEffect)(() => {
                    o()
                }, [o]);
                let x = (0, i.useMemo)(() => d().Store.createValue({}), []),
                    {
                        isRetryEventLoadingEnabled: b,
                        retryEventLoading: w,
                        days: j,
                        displayState: k
                    } = (0, n(24962).O)("personal_home"),
                    {
                        disconnectedAccounts: I
                    } = (0, n(429946).B)();
                (0, i.useEffect)(() => {
                    let e = 0,
                        t = {};
                    for (let n of j) {
                        let i = (0, g().qi)(y.toISODate(), n.date, u);
                        for (let {
                                baseEvent: a
                            } of (0, m().xG)({
                                day: n,
                                now: S,
                                timeZone: f
                            })) t[(0, h().ft)({
                            event: a,
                            date: n.date
                        })] = {
                            eventIndex: e,
                            numDaysFromToday: i
                        }, e++
                    }
                    x.setState(t)
                }, [j, x, S, u, y, f]), (0, i.useEffect)(() => r(k), [k, r]), p({
                    firstMountToReadyMetricName: "home.calendar.first_mount_to_ready",
                    pageOriginToReadyMetricName: "home.calendar.page_origin_to_ready",
                    isReady: "noEvents" === k || "events" === k
                });
                let A = (0, i.useContext)(n(531491).a) ? ? n(531491).H;
                (0, i.useEffect)(() => {
                    ex || void 0 !== (null == A ? void 0 : A.panelState) && ((0, n(593666).qL)({
                        environment: s,
                        calendarPanelContext: (0, n(593666).sp)({
                            panelState: A.panelState,
                            view: A.view
                        })
                    }), ex = !0)
                }, [A.panelState, A.view, s]);
                let C = (0, i.useCallback)(() => {
                        let e = n(92513).JW();
                        (0, n(593666).V0)({
                            environment: s,
                            calendarPanelContext: (0, n(593666).sp)({
                                panelState: A.panelState,
                                view: A.view
                            }),
                            notionAnalyticsSessionId: e
                        }), (0, n(874809).i$)({
                            environment: s,
                            from: "homeCreateEvent",
                            notionAnalyticsSessionId: e
                        })
                    }, [A.panelState, A.view, s]),
                    T = (0, i.useCallback)(() => {
                        (0, n(874809).Op)({
                            environment: s,
                            spaceStore: (0, n(328765).S)(),
                            collectionViewStore: void 0,
                            from: "homeOpenCalendarFromPanel"
                        })
                    }, [s]),
                    M = (0, i.useCallback)(() => {
                        (0, n(874809).Op)({
                            environment: s,
                            spaceStore: l,
                            collectionViewStore: void 0,
                            from: "homeSignupClick"
                        })
                    }, [s, l]),
                    _ = (0, i.useCallback)(() => {
                        (0, n(874809).u$)({
                            environment: s,
                            from: "homeReconnectAccountClick"
                        })
                    }, [s]),
                    B = (0, i.useMemo)(() => (function({
                        displayState: e,
                        isRetryEventLoadingEnabled: t,
                        retryEventLoading: i,
                        onConnectCalendarClick: o,
                        onReconnectAccountClick: r
                    }) {
                        let s, l = {
                            minHeight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            paddingInlineStart: 0,
                            paddingInlineEnd: 0
                        };
                        switch (e) {
                            case "signedOut":
                                s = {
                                    isShowingEmptyState: !0,
                                    emptyStateReactNode: (0, a.jsx)(X, {
                                        feature: "calendar",
                                        onSetup: o
                                    }),
                                    styleOverrides: l
                                };
                                break;
                            case "disconnectedAccount":
                                s = {
                                    isShowingEmptyState: !0,
                                    emptyStateReactNode: (0, a.jsx)(X, {
                                        feature: "calendarDisconnectedAccount",
                                        onSetup: r
                                    }),
                                    styleOverrides: l
                                };
                                break;
                            case "missingScopes":
                                s = {
                                    isShowingEmptyState: !0,
                                    emptyStateReactNode: (0, a.jsx)(X, {
                                        feature: "calendarMissingScopes",
                                        onSetup: r
                                    }),
                                    styleOverrides: l
                                };
                                break;
                            case "noEvents":
                                s = {
                                    isShowingEmptyState: !0,
                                    emptyStateReactNode: (0, a.jsx)(n(789597).s, {
                                        type: "noEvents",
                                        entrypoint: "personal_home"
                                    })
                                };
                                break;
                            case "loadError":
                                s = {
                                    isShowingEmptyState: !0,
                                    emptyStateReactNode: (0, a.jsx)(n(789597).s, {
                                        type: "loadError",
                                        entrypoint: "personal_home",
                                        onRetry: i,
                                        isRetryEnabled: t
                                    })
                                };
                                break;
                            case "loading":
                            case "events":
                                s = {
                                    isShowingEmptyState: !1
                                };
                                break;
                            default:
                                (0, n(722371).HB)(e)
                        }
                        return s
                    })({
                        displayState: k,
                        isRetryEventLoadingEnabled: b,
                        retryEventLoading: w,
                        onConnectCalendarClick: M,
                        onReconnectAccountClick: _
                    }), [k, b, w, M, _]),
                    P = B.isShowingEmptyState,
                    V = (0, n(960253).I)(() => {
                        let e = P ? n(681693).VQ : 0,
                            i = {
                                width: 24,
                                height: 24,
                                padding: 0,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "none"
                            };
                        return {
                            panel: {
                                minHeight: "events" === k ? 0 : t,
                                maxHeight: t,
                                ...P ? {
                                    paddingBottom: n(681693).VQ,
                                    paddingInlineStart: n(681693).VQ,
                                    paddingTop: n(681693).VQ,
                                    paddingInlineEnd: e
                                } : {
                                    paddingInlineEnd: e,
                                    paddingBottom: 0
                                },
                                ...null == B ? void 0 : B.styleOverrides
                            },
                            listShimmerContainer: {
                                paddingTop: 12,
                                height: t,
                                overflow: "hidden"
                            },
                            actionButton: i,
                            createEventButton: { ...i,
                                marginInlineStart: 4
                            }
                        }
                    }, [P, k, t, null == B ? void 0 : B.styleOverrides]),
                    H = (0, n(229888).L)();
                return (0, a.jsxs)(a.Fragment, {
                    children: ["loading" === k || H ? void 0 : (0, a.jsx)(n(180986).NotionCalendarListener, {}), (0, a.jsx)(n(302785).A, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "notionCalendarPanel.panelTitle",
                            defaultMessage: "Upcoming events"
                        }),
                        tooltip: (0, a.jsx)(n(109939).sA, {
                            id: "notionCalendarEmptyState.signedOut.title",
                            defaultMessage: "See your upcoming events and join meetings from Home."
                        }),
                        actions: (0, n(381453).oE)([! function(e, t) {
                            switch (e) {
                                case "signedOut":
                                case "disconnectedAccount":
                                case "missingScopes":
                                case "loading":
                                case "loadError":
                                    return !1;
                                case "noEvents":
                                case "events":
                                    return t.length > 0
                            }
                        }(k, I) ? void 0 : (0, a.jsx)(eI, {
                            disconnectedAccounts: I,
                            style: V.actionButton
                        }, "disconnectedAccountWarning"), ! function(e) {
                            switch (e) {
                                case "signedOut":
                                case "disconnectedAccount":
                                case "missingScopes":
                                case "loading":
                                case "loadError":
                                    return !1;
                                case "noEvents":
                                case "events":
                                    return !0
                            }
                        }(k) ? void 0 : (0, a.jsx)(n(51831).m, {
                            content: () => (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarPanel.openNotionCalendarTooltip",
                                defaultMessage: "Open Notion Calendar"
                            }),
                            children: e => (0, a.jsx)(n(988022).p, {
                                colorPalette: "gray",
                                iconLeading: {
                                    icon: n(759706).arrowDiagonalUpRightSmallIcon,
                                    size: "sm"
                                },
                                onClick: T,
                                style: V.actionButton,
                                ...e
                            })
                        }, "openNotionCalendar"), (0, a.jsx)(eS, {
                            hasConnectedCalendar: !c.loading && (0, n(722371).O9)(c.botId)
                        }, "settings"), ! function(e) {
                            switch (e) {
                                case "signedOut":
                                case "disconnectedAccount":
                                case "missingScopes":
                                case "loading":
                                case "loadError":
                                    return !1;
                                case "noEvents":
                                case "events":
                                    return !0
                            }
                        }(k) ? void 0 : (0, a.jsx)(n(51831).m, {
                            content: () => (0, a.jsx)(n(109939).sA, {
                                id: "notionCalendarPanel.createEventTooltip",
                                defaultMessage: "Create event"
                            }),
                            children: e => (0, a.jsx)(n(912946).A, {
                                colorPalette: "blue",
                                iconLeading: {
                                    icon: n(550246).plusFillSmallIcon,
                                    size: "sm"
                                },
                                onClick: C,
                                style: V.createEventButton,
                                ...e
                            })
                        }, "createEvent")]),
                        actionsGap: 2,
                        panelStyle: V.panel,
                        icon: (0, a.jsx)(n(968107).y, {
                            size: "xs"
                        }),
                        children: B.isShowingEmptyState ? B.emptyStateReactNode : (0, a.jsx)("div", {
                            style: eb,
                            children: "loading" === k ? (0, a.jsx)("div", {
                                style: V.listShimmerContainer,
                                children: (0, a.jsx)(n(657547).c, {
                                    isFullScreen: !1,
                                    hasGroups: !1,
                                    hasPartialResults: !1,
                                    hasSearchQuery: !1
                                })
                            }) : (0, a.jsx)(ek, {
                                days: j,
                                eventToAnalyticsStore: x
                            })
                        })
                    })]
                })
            }

            function ek(e) {
                let {
                    days: t,
                    eventToAnalyticsStore: i
                } = e, o = "wide" === f();
                return (0, a.jsx)(n(126767).H, {
                    type: n(644154).A.Y,
                    style: ew,
                    children: (0, a.jsx)(n(711617).T, {
                        days: t,
                        eventToAnalyticsStateStore: i,
                        isCompact: !o
                    })
                })
            }

            function eI({
                disconnectedAccounts: e,
                style: t
            }) {
                let o = (0, n(533992).v3)(),
                    r = (0, i.useCallback)(() => {
                        (0, n(874809).u$)({
                            environment: o,
                            from: "homeDisconnectedAccountWarning"
                        })
                    }, [o]);
                if (0 === e.length) return null;
                let s = 1 === e.length ? (0, a.jsx)(n(109939).sA, {
                    id: "notionCalendarPanel.disconnectedAccountsWarningTooltip.singleAccount",
                    defaultMessage: "{accountName} requires reconnecting",
                    values: {
                        accountName: e[0].displayName
                    }
                }) : (0, a.jsx)(n(109939).sA, {
                    id: "notionCalendarPanel.disconnectedAccountsWarningTooltip.multiple",
                    defaultMessage: "{numDisconnectedAccounts} accounts require reconnecting",
                    values: {
                        numDisconnectedAccounts: e.length
                    }
                });
                return (0, a.jsx)(n(51831).m, {
                    content: () => s,
                    children: e => (0, a.jsx)(n(988022).p, {
                        colorPalette: "gray",
                        iconLeading: {
                            icon: n(143896).exclamationMarkTriangleFillSmallIcon,
                            size: "sm"
                        },
                        onClick: r,
                        style: t,
                        ...e
                    })
                })
            }
            let eA = ["filter", "sort", "automations", "search", "emptyOrganizeBy", "viewSettings", "minimize"],
                eC = function(e) {
                    let {
                        storeType: t,
                        onLoaded: o,
                        shouldRenderSetup: r,
                        collectionContextStore: s,
                        setCollectionContextStore: l,
                        emptyStateTitle: d,
                        emptyStateTooltip: c,
                        emptyStateIcon: u,
                        pageOriginToReadyMetricName: m,
                        firstMountToReadyMetricName: h,
                        userSelectOverride: g
                    } = e, f = (0, n(533992).v3)(), y = (0, n(533992).Y0)(), v = (0, n(476743).a)(), S = (0, n(682985).K8)(() => {
                        let e = (0, n(933062).XH)(t);
                        if (null != e && e.isCollectionView()) return e
                    }, [t]), x = (0, n(682985).K8)(() => {
                        let e = null == s ? void 0 : s.collectionViewStore();
                        return null == e ? void 0 : e.getType()
                    }, [s]), b = (0, n(682985).K8)(() => "chart" === x ? n(681693).Mk : "list" === x ? n(681693).BZ : "feed" === x ? n(681693).EC : y.isPhone && ("board" === x || "gallery" === x) ? n(681693).Ed : n(681693).dd, [y.isPhone, x]), w = (0, n(682985).K8)(() => (null == s ? void 0 : s.isLoadedStore.state) || (null == s ? void 0 : s.remoteErrorStore.state), [s]);
                    (0, i.useEffect)(() => {
                        w && o()
                    }, [w, o]), p({
                        firstMountToReadyMetricName: h,
                        pageOriginToReadyMetricName: m,
                        isReady: (0, n(682985).K8)(() => {
                            let e = !!(null == s ? void 0 : s.collectionStoresStore.state.length);
                            return !!(w && e)
                        }, [s, w])
                    });
                    let j = (0, n(960253).I)(() => ({
                            panel: {
                                paddingInlineEnd: 0,
                                paddingBottom: 0,
                                paddingInlineStart: 0,
                                paddingTop: 0,
                                height: "100%",
                                minHeight: 76,
                                maxHeight: b,
                                ..."timeline" === x ? {
                                    background: n(632079).Tj.timelineBackground
                                } : {},
                                ...r ? {
                                    flexDirection: "row"
                                } : {}
                            }
                        }), [x, b, r]),
                        k = (0, i.useMemo)(() => {
                            let e = S && (0, a.jsx)(n(590285).dN, {
                                    store: S,
                                    disabled: !1,
                                    isFullScreen: !1,
                                    productUseCase: `${t}_home_panel`,
                                    overrideViewType: x,
                                    isFirstItem: !0,
                                    isLastItem: !0,
                                    maxHeight: b,
                                    overridePaddingLeft: 2 * ("feed" === x),
                                    overridePaddingRight: 2 * ("feed" === x),
                                    headerActionsBehavior: r ? "hidden" : void 0,
                                    hideViewTabBar: r,
                                    setCollectionContextStore: l,
                                    headerAllowedActions: "feed" === x ? eA : void 0
                                }),
                                i = {
                                    panelStyle: j.panel,
                                    hideWrapStyle: !0,
                                    children: e,
                                    userSelectOverride: g
                                };
                            return r && (i = { ...i,
                                title: d,
                                tooltip: c,
                                icon: u,
                                actions: [(0, a.jsx)(n(485023).A, {
                                    actions: [{
                                        type: "hide",
                                        hide: () => {
                                            let e = function(e) {
                                                switch (e) {
                                                    case "customDb":
                                                        return {
                                                            feature: "custom_db",
                                                            from: "custom_db_more_menu"
                                                        };
                                                    case "myTasks":
                                                        return {
                                                            feature: "tasks",
                                                            from: "home_more_menu"
                                                        };
                                                    default:
                                                        return
                                                }
                                            }(t);
                                            v && t && e && n(578449).WO({
                                                environment: f,
                                                spaceViewStore: v,
                                                ...e
                                            })
                                        }
                                    }]
                                }, "moreMenu")]
                            }), (0, a.jsx)(n(302785).A, { ...i
                            })
                        }, [S, x, b, r, l, j.panel, g, d, c, u, t, v, f]);
                    return (0, a.jsx)(n(654979).A, {
                        animate: {
                            maxHeight: b
                        },
                        children: S ? (0, a.jsx)(n(318981).A, {
                            store: S,
                            isDefaultContainer: !0,
                            droppable: !0,
                            disableEditNearestBlock: !0,
                            render: ({
                                selectableEvents: e
                            }) => (0, a.jsx)("div", { ...e,
                                children: k
                            })
                        }) : k
                    })
                },
                eT = function({
                    onLoaded: e
                }) {
                    let [t, o] = i.useState(void 0), r = (0, n(682985).K8)(() => {
                        let e = (0, n(933062).XH)("customDb");
                        if (null != e && e.isCollectionView()) return e
                    }, []), s = (0, n(682985).K8)(() => !!(r && t && !t.collectionStore() && r.getCollectionViewStores().length <= 1), [t, r]);
                    return (0, a.jsx)(eC, {
                        storeType: "customDb",
                        onLoaded: e,
                        shouldRenderSetup: s,
                        collectionContextStore: t,
                        setCollectionContextStore: o,
                        emptyStateTitle: (0, a.jsx)(n(109939).sA, {
                            id: "homePageTemplates.customDbTitle.includeHome",
                            defaultMessage: "Home views"
                        }),
                        emptyStateTooltip: (0, a.jsx)(n(109939).sA, {
                            id: "CustomDbHomePanel.setup.description",
                            defaultMessage: "Pin a database view to quickly access it from Home."
                        }),
                        emptyStateIcon: (0, a.jsx)(n(16275).I, {
                            icon: n(862868).a,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        pageOriginToReadyMetricName: "home.custom_db.page_origin_to_ready",
                        firstMountToReadyMetricName: "home.custom_db.first_mount_to_ready"
                    })
                };
            n(814603), n(147566), n(198721);
            class eM extends d().Store {
                getInitialState() {
                    return {
                        num_checked: 0,
                        total_cards_shown: 0
                    }
                }
            }
            let e_ = new eM;

            function eB({
                isHovered: e,
                borderRadius: t
            }) {
                let {
                    unhoveredBoxShadow: i,
                    hoveredBoxShadow: o
                } = (0, n(681693).xK)({}), r = (0, n(960253).I)(() => ({
                    shadowBox: {
                        pointerEvents: "none",
                        position: "absolute",
                        borderRadius: t,
                        top: 0,
                        insetInlineStart: 0,
                        insetInlineEnd: 0,
                        bottom: 0,
                        zIndex: 1,
                        boxShadow: e ? o : i
                    }
                }), [e, i, o, t]);
                return (0, a.jsx)("div", {
                    style: r.shadowBox
                })
            }
            let eP = {
                    position: "relative"
                },
                eV = i.forwardRef(function({
                    children: e,
                    style: t,
                    hoveredStyle: o,
                    pressedStyle: r,
                    disabled: s,
                    borderRadiusVariant: l = "small",
                    ...d
                }, c) {
                    let [u, p] = (0, i.useState)(!1), m = (0, i.useMemo)(() => "small" === l ? 12 : "large" === l ? 16 : "rounded" === l ? 100 : void(0, n(722371).HB)(l), [l]), h = (0, n(960253).I)(() => ({
                        linkBoxContainer: {
                            flexShrink: 0,
                            overflow: "hidden",
                            borderRadius: m,
                            background: n(632079).Tj.home.cards.background.base,
                            ...t,
                            boxShadow: "unset",
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            display: "flex",
                            flexDirection: "column"
                        },
                        hovered: {
                            background: n(632079).Tj.home.cards.background.hovered,
                            ...o,
                            boxShadow: "unset"
                        },
                        pressed: {
                            background: n(632079).Tj.home.cards.background.pressed,
                            ...r,
                            boxShadow: "unset"
                        }
                    }), [m, t, o, r]);
                    return (0, a.jsxs)("div", {
                        style: eP,
                        onMouseEnter: () => {
                            s || p(!0)
                        },
                        onMouseLeave: () => {
                            s || p(!1)
                        },
                        ref: c,
                        children: [(0, a.jsx)(n(590422).Q, {
                            style: h.linkBoxContainer,
                            hoveredStyle: h.hovered,
                            pressedStyle: h.pressed,
                            disabled: s,
                            ...d,
                            children: e
                        }), (0, a.jsx)(eB, {
                            isHovered: u,
                            borderRadius: m
                        })]
                    })
                });

            function eH(e) {
                let t = s(),
                    i = (0, n(12546).j)();
                return (0, a.jsx)(n(176366).p, {
                    mobileContainerOffset: t,
                    preventScroll: e.preventScroll,
                    innerContainerStyle: e.innerContainerStyle,
                    containerStyle: e.containerStyle,
                    cardWidth: e.cardWidth,
                    isHovered: i,
                    startAndEndPadding: n(681693).VQ,
                    gapSizeOverride: e.gapSizeOverride,
                    children: e.children
                })
            }
            let eL = i.memo(eH),
                eE = {
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    gap: 12,
                    minHeight: 238
                };

            function eR({
                message: e,
                icon: t,
                iconStyle: i
            }) {
                let o = (0, n(960253).I)(() => ({
                    icon: { ...(0, n(681693).Xx)(),
                        ...i
                    }
                }), [i]);
                return (0, a.jsxs)("div", {
                    style: eE,
                    children: [null == t ? void 0 : t(o.icon), (0, a.jsx)(n(324489).V, {
                        isSecondaryColor: !0,
                        isMultiline: !0,
                        children: e
                    })]
                })
            }
            let eD = 3 * n(681693).VQ,
                eF = {
                    height: "auto",
                    scrollMarginInlineStart: eD
                },
                eN = {
                    container: {
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: 14,
                        color: n(632079).Tj.text.tertiary,
                        flexGrow: 1,
                        paddingTop: 34,
                        paddingBottom: 30
                    }
                };

            function ez() {
                let e = (0, n(533992).v3)();
                return (0, a.jsx)(eR, {
                    message: (0, a.jsxs)("div", {
                        style: eN.container,
                        children: [(0, a.jsx)(n(109939).sA, {
                            id: "TipsHomePanel.emptyState.message",
                            defaultMessage: "New tips and guides will appear here."
                        }), (0, a.jsx)(n(884877).A, {
                            size: 12
                        }), (0, a.jsxs)(n(406910).p, {
                            colorPalette: "blue",
                            onClick: () => {
                                (0, n(624621).L)({
                                    environment: e,
                                    url: "https://www.notion.so/help",
                                    targetSelf: !1
                                })
                            },
                            children: [(0, a.jsx)(n(109939).sA, {
                                id: "TipsHomePanel.emptyState.exploreMore",
                                defaultMessage: "Explore more in Help Center"
                            }), (0, a.jsx)(n(884877).A, {
                                size: 2
                            }), (0, a.jsx)(n(16275).I, {
                                icon: n(166568).arrowUpRightSquareSmallIcon,
                                size: "sm",
                                colorPalette: "blue",
                                colorVariant: "accentPrimary"
                            })]
                        })]
                    })
                })
            }

            function eW(e) {
                let {
                    card: t,
                    onCompleted: o
                } = e, r = (0, n(533992).v3)(), s = (0, n(682985).K8)(() => {
                    let {
                        isElectron: e,
                        isMobileNative: t
                    } = r.device, n = ["local", "production"].includes("production");
                    return (!e || n) && !t
                }, [r]), l = t.key, d = (0, n(682985).K8)(() => {
                    let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!e) return !1;
                    let t = e.getPersonalHomeTipsSettings().progress_data[l];
                    return !!t && t.completed
                }, [l]), c = (0, i.useRef)(null), u = (0, i.useCallback)((e, t) => {
                    if (e === d) return;
                    (0, n(160856).it)({
                        tipType: l,
                        completed: e,
                        environment: r
                    });
                    let i = e_.state,
                        a = i.num_checked + (e ? 1 : -1);
                    e_.setState({ ...i,
                        num_checked: a
                    }), n(167552).kx(r, {
                        tip_key: l,
                        checked: e,
                        from: t,
                        num_checked: a,
                        total_cards_shown: i.total_cards_shown
                    }), e && c.current && o(l, t, c.current)
                }, [l, r, d, o]), p = (0, i.useCallback)(() => {
                    n(167552).cF(r, {
                        tip_key: l,
                        was_completed: d,
                        in_app_modal_enabled: s
                    }), s ? n(979719).A.setState({
                        open: !0,
                        tipCardDisplayInfo: t,
                        onClosed: () => u(!0, "modal")
                    }) : u(!0, "clickthrough")
                }, [r, l, d, s, u, t]), m = (0, i.useMemo)(() => {
                    let e = (0, n(442564).x)("guides.guides"),
                        i = new URLSearchParams;
                    return i.set("utm_source", "tips"), i.set("utm_medium", "inapp"), i.set("utm_campaign", "2024q1_tipsinhome_m2"), s ? void 0 : `${e}${t.href}?${i.toString()}`
                }, [s, t.href]);
                return (0, a.jsx)(eq, {
                    ref: c,
                    isChecked: d,
                    href: m,
                    onCheck: u,
                    onClick: p,
                    card: t
                })
            }
            let eO = {
                    opacity: 1,
                    transition: "opacity 0.2s ease, transform 200ms ease-out"
                },
                eU = {
                    display: "inline-flex",
                    alignItems: "center",
                    fontSize: 12,
                    gap: 4
                },
                eK = {
                    container: {
                        height: 216,
                        width: 240,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "stretch"
                    },
                    imageContainer: {
                        height: 126,
                        flexShrink: 0,
                        flexGrow: 0,
                        background: n(632079).Tj.home.cards.coverPhoto.base,
                        objectFit: "cover"
                    },
                    checkboxContainer: {
                        flexShrink: 0,
                        flexGrow: 0,
                        marginInlineStart: 12
                    },
                    title: {
                        fontSize: 14,
                        lineHeight: "18px",
                        fontWeight: n(699422).Wy.medium,
                        whiteSpace: "pre-wrap",
                        ...(0, n(418676).pA)(2)
                    },
                    caption: { ...eU,
                        color: n(632079).Tj.text.secondary,
                        fill: n(632079).Tj.icon.secondary
                    },
                    pressedCaption: { ...eU,
                        color: n(632079).Tj.text.tertiary,
                        fill: n(632079).Tj.icon.tertiary
                    },
                    hiddenCheckbox: { ...eO,
                        opacity: 0
                    },
                    checkbox: eO,
                    hoveredCheckbox: { ...eO,
                        fill: n(632079).Tj.home.cards.coverPhoto.base
                    }
                },
                eq = i.forwardRef(function({
                    isChecked: e,
                    href: t,
                    onCheck: o,
                    onClick: r,
                    card: s
                }, l) {
                    let d, [c, u] = (0, i.useState)(!1),
                        p = e ? eK.checkbox : c ? eK.hoveredCheckbox : eK.hiddenCheckbox,
                        m = e ? eK.pressedCaption : eK.caption;
                    switch (s.contentType) {
                        case "video":
                            d = (0, a.jsxs)("div", {
                                style: m,
                                children: [(0, a.jsx)(n(16275).I, {
                                    icon: n(781184).w,
                                    size: "sm"
                                }), (0, a.jsx)(n(109939).sA, {
                                    id: "tipsHomePanel.captionDuration2.watch",
                                    defaultMessage: "{duration}m watch",
                                    values: {
                                        duration: s.durationMinutes
                                    }
                                })]
                            });
                            break;
                        case "article":
                            d = (0, a.jsxs)("div", {
                                style: m,
                                children: [(0, a.jsx)(n(16275).I, {
                                    icon: n(152280).bookSmallIcon,
                                    size: "sm"
                                }), (0, a.jsx)(n(109939).sA, {
                                    id: "tipsHomePanel.captionDuration2.read",
                                    defaultMessage: "{duration}m read",
                                    values: {
                                        duration: s.durationMinutes
                                    }
                                })]
                            });
                            break;
                        default:
                            s.contentType
                    }
                    return (0, a.jsxs)(eV, {
                        ref: l,
                        href: t,
                        style: eK.container,
                        external: !0,
                        onMouseEnter: () => u(!0),
                        onMouseLeave: () => u(!1),
                        onClick: r,
                        borderRadiusVariant: "small",
                        children: [(0, a.jsx)("img", {
                            src: s.image,
                            style: eK.imageContainer
                        }), (0, a.jsxs)(n(4458).fI, {
                            flexGrow: 1,
                            paddingTop: 12,
                            paddingBottom: 10,
                            paddingInlineStart: 12,
                            paddingInlineEnd: 12,
                            justifyContent: "stretch",
                            children: [(0, a.jsxs)(n(4458).VP, {
                                flexGrow: 1,
                                justifyContent: "space-between",
                                alignItems: "start",
                                children: [(0, a.jsx)("div", {
                                    style: eK.title,
                                    children: s.title
                                }), d]
                            }), (0, a.jsx)("div", {
                                style: eK.checkboxContainer,
                                children: (0, a.jsx)(n(51831).m, {
                                    content: () => e ? (0, a.jsx)(n(109939).sA, {
                                        id: "tipsHomePanel.checkboxRedesign.incompleteTooltip",
                                        defaultMessage: "Mark incomplete"
                                    }) : (0, a.jsx)(n(109939).sA, {
                                        id: "tipsHomePanel.checkboxRedesign.completeTooltip",
                                        defaultMessage: "Mark complete"
                                    }),
                                    children: t => (0, a.jsx)(n(349050).S, {
                                        checked: e,
                                        size: 20,
                                        onClick: () => o(!e, "check_button"),
                                        round: !0,
                                        thinOutline: !0,
                                        style: p,
                                        ...t
                                    })
                                })
                            })]
                        })]
                    })
                }),
                eG = function({
                    onLoaded: e
                }) {
                    let {
                        value: t
                    } = (0, n(815048).fJ)(n(502498).KM.personalHomeLearnHelpers), o = (0, n(533992).v3)(), r = (0, n(345776).T)(), [s, l] = (0, i.useState)(!0), [d, c] = (0, i.useState)([]), [u, p] = (0, i.useState)([]), [m, h] = (0, i.useState)(void 0), g = (0, n(723240).r)(), f = (0, n(972740).L)(), y = (0, n(993077).U2)(f), v = (0, n(226309).lh)({
                        spaceId: g
                    }), S = (0, n(192159).TB)(v), x = (0, n(682985).K8)(() => {
                        if (!t) return [];
                        let e = n(189989).A.state,
                            i = n(728372).AppStoreCurrentUserSettingsStore.state;
                        if (e) return t.getRelevantTipCards(e);
                        if (!(null != i && i.isReady())) return [];
                        let a = !!(null == y ? void 0 : y.isWorkspaceOwner()) || n(514214).BF.id === r,
                            s = t.getTipsEligibilityData({
                                environment: o,
                                isWorkspaceOwner: a,
                                isOnTrial: S
                            });
                        return t.getRelevantTipCards(s)
                    }, [o, S, t, y, r]), b = (0, n(682985).K8)(() => {
                        let e = n(728372).AppStoreCurrentUserSettingsStore.state;
                        return !!e && e.getPersonalHomeTipsSettings().hide_completed
                    }, []), w = (0, i.useCallback)(() => {
                        let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!(null != t && t.isReady())) return;
                        let i = t.getPersonalHomeTipsSettings().progress_data,
                            [a, o] = n(381453).jB(x, e => {
                                let t = i[e.key];
                                return null == t ? void 0 : t.completed
                            });
                        c(a), p(o), l(!1), e(), e_.setState({ ...e_.state,
                            num_checked: a.length,
                            total_cards_shown: x.length
                        })
                    }, [x, e]), j = (0, i.useCallback)(() => {
                        (0, n(160856).Qs)({
                            hide: !b,
                            environment: o
                        });
                        let e = e_.state;
                        n(167552).ZX(o, {
                            show_completed_tips: b,
                            num_checked: e.num_checked,
                            total_cards_shown: e.total_cards_shown
                        }), w()
                    }, [o, b, w]);
                    (0, i.useEffect)(() => {
                        w()
                    }, [w]);
                    let k = (0, i.useCallback)(e => {
                            e && h({
                                position: e.offsetLeft - eD,
                                animate: !1
                            })
                        }, []),
                        I = (0, i.useCallback)(() => {
                            n(728372).AppStoreSidebarSpaceViewStore.state && n(578449).WO({
                                environment: o,
                                spaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                                feature: "tips",
                                from: "learn_dismiss_button"
                            })
                        }, [o]),
                        A = !s && b && 0 === u.length,
                        C = (0, i.useCallback)((e, t, i) => {
                            let a = b ? u : d.concat(u),
                                o = function({
                                    completedType: e,
                                    offsetLeftOfCompletedType: t,
                                    cardWidth: i,
                                    from: a,
                                    visibleTips: o
                                }) {
                                    return ! function(e, t, i) {
                                        if ("modal" === t) return !1;
                                        let a = n(728372).AppStoreCurrentUserSettingsStore.state,
                                            o = null == a ? void 0 : a.getPersonalHomeTipsSettings().progress_data;
                                        if (!o) return !1;
                                        let r = !1;
                                        for (let t = 0; t < e.length; t++) {
                                            let n = e[t].key;
                                            if (n === i) r = !0;
                                            else {
                                                var s;
                                                let e = null == (s = o[n]) ? void 0 : s.completed;
                                                if (!r && !e || r && e) return !1
                                            }
                                        }
                                        return !0
                                    }(o, a, e) ? void 0 : t + i
                                }({
                                    completedType: e,
                                    offsetLeftOfCompletedType: i.offsetLeft,
                                    cardWidth: 240,
                                    from: t,
                                    visibleTips: a
                                });
                            o && h({
                                position: o,
                                animate: !0
                            })
                        }, [b, u, d]);
                    return (0, a.jsx)(n(302785).A, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "LearnHomePanel.Title",
                            defaultMessage: "Learn"
                        }),
                        actions: [(0, a.jsx)(n(485023).A, {
                            actions: [{
                                type: "custom",
                                closeOnAccept: !0,
                                item: {
                                    key: "show-hide-completed",
                                    action: j,
                                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                                        title: b ? (0, a.jsx)(n(109939).sA, {
                                            id: "tipsHomePanel.hideCompletedButton.show",
                                            defaultMessage: "Show completed"
                                        }) : (0, a.jsx)(n(109939).sA, {
                                            id: "tipsHomePanel.hideCompletedButton.hide",
                                            defaultMessage: "Hide completed"
                                        }),
                                        icon: (0, a.jsx)(n(16275).I, {
                                            icon: n(853160).checkmarkCircleIcon
                                        })
                                    })
                                }
                            }, {
                                type: "hide",
                                hide: I
                            }]
                        }, "more-menu")],
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(152280).bookSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        tooltip: (0, a.jsx)(n(109939).sA, {
                            id: "LearnHomePanel.Tooltip",
                            defaultMessage: "Explore resources from our help center"
                        }),
                        hideWrapStyle: !A,
                        children: A ? (0, a.jsx)(ez, {}) : (0, a.jsxs)(eL, {
                            cardWidth: 240,
                            scrollPosition: m,
                            children: [b ? void 0 : d.map(e => (0, a.jsx)(eW, {
                                card: e,
                                onCompleted: C
                            }, e.key)), !b && d.length > 0 && u.length > 0 ? (0, a.jsx)(n(346268).c, {
                                ref: k,
                                type: "vertical",
                                size: 1,
                                style: eF,
                                colorVariant: "secondary"
                            }) : void 0, u.map(e => (0, a.jsx)(eW, {
                                card: e,
                                onCompleted: C
                            }, e.key))]
                        })
                    })
                },
                e$ = function({
                    onLoaded: e
                }) {
                    let [t, o] = i.useState(void 0), r = (0, n(682985).K8)(() => {
                        var e, n;
                        let i = (null == t || null == (e = t.collectionStoresStore) ? void 0 : e.state) ? ? [];
                        return !!((null == t || null == (n = t.isLoadedStore) ? void 0 : n.state) && 0 === i.length)
                    }, [t]), s = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = (0, n(328765).S)()) || null == (e = e.getModel()) ? void 0 : e.getRenderTitle()
                    }, []);
                    return (0, a.jsx)(eC, {
                        storeType: "myTasks",
                        onLoaded: e,
                        shouldRenderSetup: r,
                        collectionContextStore: t,
                        setCollectionContextStore: o,
                        emptyStateTitle: (0, a.jsx)(n(109939).sA, {
                            id: "MyTasksHomePanel.myTasksFeature",
                            defaultMessage: "My Tasks"
                        }),
                        emptyStateTooltip: (0, a.jsx)(n(109939).sA, {
                            id: "MyTasksHomePanel.setup.description",
                            defaultMessage: "See all your tasks across {spaceName} in one place.",
                            values: {
                                spaceName: s
                            }
                        }),
                        emptyStateIcon: (0, a.jsx)(n(16275).I, {
                            icon: n(433413).h,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        pageOriginToReadyMetricName: "home.my_tasks.page_origin_to_ready",
                        firstMountToReadyMetricName: "home.my_tasks.first_mount_to_ready"
                    })
                };
            n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698);
            let eY = {
                    width: "100%",
                    height: "100%"
                },
                eX = i.memo(function({
                    showLoadingShimmer: e,
                    width: t,
                    height: i,
                    borderRadiusVariant: o
                }) {
                    let r = (0, n(960253).I)(() => ({
                        item: {
                            width: t,
                            height: i,
                            background: e ? "unset" : n(632079).Tj.home.cards.coverPhoto.base,
                            boxShadow: "unset"
                        }
                    }), [i, e, t]);
                    return (0, a.jsx)(eV, {
                        style: r.item,
                        disabled: !0,
                        borderRadiusVariant: o,
                        children: e ? (0, a.jsx)(n(795830).P, {
                            style: eY
                        }) : void 0
                    })
                }),
                eQ = {
                    iconContainer: {
                        position: "relative",
                        width: "100%",
                        height: "100%"
                    },
                    iconBackground: {
                        position: "absolute",
                        top: 0,
                        zIndex: -1,
                        fill: n(632079).Tj.background.elevated
                    }
                };

            function eJ({
                foregroundIcon: e,
                backgroundFillIcon: t
            }) {
                return (0, a.jsxs)("div", {
                    style: eQ.iconContainer,
                    children: [(0, a.jsx)(n(16275).I, {
                        icon: e,
                        colorVariant: "tertiary",
                        size: "100%",
                        fitToViewBox: "horizontal"
                    }), (0, a.jsx)(n(16275).I, {
                        icon: t,
                        size: "100%",
                        style: eQ.iconBackground,
                        fitToViewBox: "horizontal"
                    })]
                })
            }
            let eZ = {
                titleWrap: n(870819).vY.titleWrap,
                titleText: { ...n(870819).vY.titleText,
                    color: n(632079).Tj.text.tertiary
                }
            };

            function e0() {
                return (0, a.jsx)("div", {
                    style: eZ.titleWrap,
                    children: (0, a.jsx)("div", {
                        style: eZ.titleText,
                        children: (0, a.jsx)(n(109939).sA, {
                            id: "NewPageRecentsGalleryItem.newPageTitle",
                            defaultMessage: "New page"
                        })
                    })
                })
            }
            let e1 = i.memo(function() {
                    let e = (0, n(533992).v3)(),
                        t = (0, i.useCallback)(() => void(0, n(323836).M)({
                            environment: e,
                            from: "home_recents_new_page_button",
                            pageVisitSource: n(254656).y8.PersonalHomeTileRecentsQuickAdd
                        }), [e]),
                        o = n(870819).de({
                            dominantColorFromIcon: void 0,
                            width: n(870819)._O,
                            height: n(870819).dn
                        });
                    return (0, a.jsxs)(eV, {
                        style: o.container,
                        onClick: t,
                        borderRadiusVariant: "large",
                        children: [(0, a.jsxs)("div", {
                            style: o.coverAndIconContainer,
                            children: [(0, a.jsx)(n(258442).t, {
                                coverHeight: n(870819).Lq,
                                emptyGalleryCoverStyle: o.emptyGalleryCoverStyle
                            }), (0, a.jsx)("div", {
                                style: n(870819).QG,
                                children: (0, a.jsx)(eJ, {
                                    foregroundIcon: n(885822).addSquareRoundedIcon,
                                    backgroundFillIcon: n(945884).addSquareRoundedFillIcon
                                })
                            })]
                        }), (0, a.jsx)(e0, {})]
                    })
                }),
                e2 = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.12 2.37 11.75 15.25",
                    svg: (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("path", {
                            d: "M9.95 2.375h-3.7A2.125 2.125 0 0 0 4.125 4.5v11c0 1.174.951 2.125 2.125 2.125h7.5a2.125 2.125 0 0 0 2.125-2.125V8.3H12a2.05 2.05 0 0 1-2.05-2.05z"
                        }), (0, a.jsx)("path", {
                            d: "M15.665 7.2a2.1 2.1 0 0 0-.412-.581L11.63 2.997c-.17-.17-.367-.31-.581-.412V6.25c0 .525.425.95.95.95z"
                        })]
                    })
                },
                e5 = (0, n(104509).wt)("pageEmptyFill", e2, "fill"),
                e9 = {
                    recordIcon: n(870819).QG,
                    defaultIconStyle: {
                        width: n(870819).lK,
                        height: n(870819).lK
                    },
                    progressContainer: {
                        top: 14,
                        bottom: "unset",
                        insetInlineEnd: "unset",
                        fontSize: n(418676).Kw
                    }
                };

            function e3({
                store: e
            }) {
                let t = (0, n(83208).X)("nds_stickered_page_icon"),
                    i = (0, n(682985).K8)(() => e.hasError(), [e]),
                    o = (0, n(682985).K8)(() => e.getIcon(), [e]),
                    r = (0, n(682985).K8)(() => {
                        var t;
                        return null == (t = e.getCover()) ? void 0 : t.cover
                    }, [e]),
                    s = (0, n(682985).K8)(() => e.isEmptyPage(), [e]);
                return i ? (0, a.jsx)(n(16275).I, {
                    icon: n(789777).exclamationMarkTriangleFillIcon,
                    colorPalette: "orange",
                    colorVariant: "accentPrimary"
                }) : (0, a.jsx)(n(569553).B6, {
                    disabled: !0,
                    bucket: "secure",
                    style: e9.recordIcon,
                    progressContainerStyle: e9.progressContainer,
                    icon: o,
                    useStickeredIcon: !!r && t,
                    store: e,
                    size: n(870819).lK,
                    isEmptyPage: s,
                    defaultIcon: (0, a.jsx)("div", {
                        style: e9.defaultIconStyle,
                        children: (0, a.jsx)(eJ, {
                            foregroundIcon: s ? n(865213).Y : n(822084).pageIcon,
                            backgroundFillIcon: e5
                        })
                    })
                })
            }
            let e8 = { ...n(870819).vY,
                editedAtWrap: {
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    gap: 4
                },
                tooltipDateText: {
                    color: n(632079).Tj.text.inverseSecondary
                }
            };

            function e6({
                store: e,
                hideLastEdited: t
            }) {
                let o = (0, n(109939).tz)(),
                    r = (0, n(682985).K8)(() => e.getLastEditedTime(), [e]),
                    s = (0, n(799843).nl)(r, {
                        useCompactFormat: !0,
                        useWeeks: !0
                    }),
                    l = (0, n(682985).K8)(() => (0, n(850640).W_)(r, "medium_with_time", o.locale), [o.locale, r]),
                    d = (0, n(682985).K8)(() => {
                        let t = e.getLastEditedByPointer();
                        if (t) return e.getRecordStore(e.getKeyStore("last_edited_by_id"), t)
                    }, [e]),
                    c = (0, i.useMemo)(() => {
                        if (d) switch (d.table) {
                            case n(832375).oo9:
                                return (0, a.jsx)(n(321753).A, {
                                    userStore: d,
                                    size: 16
                                });
                            case n(832375).GPl:
                                return (0, a.jsx)(n(31319).A, {
                                    botStore: d,
                                    size: 16
                                });
                            default:
                                (0, n(722371).HB)(d)
                        }
                    }, [d]),
                    u = (0, n(682985).K8)(() => null == d ? void 0 : d.getDisplayName(o), [d, o]);
                return (0, a.jsxs)("div", {
                    style: e8.titleWrap,
                    children: [(0, a.jsx)(n(627918).A, {
                        style: e8.titleText,
                        store: e
                    }), t ? void 0 : (0, a.jsx)(n(51831).m, {
                        disableTooltip: !d,
                        content: () => (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("div", {
                                children: (0, a.jsx)(n(109939).sA, {
                                    id: "recentsGalleryItemV2.lastEditedByTooltipHeader",
                                    defaultMessage: "Last edited by"
                                })
                            }), u, (0, a.jsx)("br", {}), d ? (0, a.jsx)("span", {
                                style: e8.tooltipDateText,
                                children: l
                            }) : void 0]
                        }),
                        placement: "bottom",
                        alignment: "start",
                        children: e => 0 === r ? null : (0, a.jsxs)("div", {
                            style: e8.editedAtWrap,
                            ...e,
                            children: [c, (0, a.jsx)(n(324489).V, {
                                isSmall: !0,
                                isSecondaryColor: !0,
                                children: s
                            })]
                        })
                    })]
                })
            }
            let e7 = {
                style0: {
                    height: n(870819).Lq,
                    position: "relative",
                    pointerEvents: "none",
                    overflow: "hidden"
                }
            };

            function e4({
                store: e,
                emptyGalleryCoverStyle: t
            }) {
                let {
                    pageCover: i,
                    imagePosition: o,
                    permissionRecord: r
                } = (0, n(682985).K8)(() => {
                    var t;
                    let n = null == (t = e.getCover()) ? void 0 : t.cover,
                        {
                            page_cover_position: i,
                            card_cover_position: a
                        } = e.getFormat();
                    return {
                        pageCover: n,
                        imagePosition: a ? ? i ? ? .5,
                        permissionRecord: e.pointer
                    }
                }, [e], {
                    equalityFn: n(381453).n4
                });
                return (0, a.jsx)("div", {
                    style: { ...e7.style0,
                        ...t
                    },
                    children: i ? (0, a.jsx)(n(738251).A, {
                        url: i,
                        isAuthenticated: !0,
                        permissionRecord: r,
                        width: n(904315).A.card.desktop.medium.width,
                        onFinishedLoadingProxyUrl: e => {},
                        render: (e, t) => t ? (0, a.jsx)(n(989059).A, {
                            style: {
                                width: "100%",
                                height: n(870819).Lq,
                                objectFit: "cover",
                                borderRadius: 0,
                                objectPosition: `center ${(1-o)*100}%`
                            },
                            src: t
                        }) : void 0
                    }) : void 0
                })
            }
            let te = i.memo(function({
                store: e
            }) {
                let t = (0, n(960253).e)(),
                    i = (0, n(682985).K8)(() => {
                        var i;
                        return (0, n(417317).b)({
                            icon: null == (i = e.getIconStore()) ? void 0 : i.getValue(),
                            themeMode: t
                        })
                    }, [e, t]),
                    o = (0, n(682985).K8)(() => e.isReady(), [e]),
                    r = (0, n(682985).K8)(() => (0, n(483227).Ay)({
                        store: e,
                        fullyQualified: !1,
                        pageVisitSource: n(254656).y8.PersonalHomeTileRecents
                    }), [e]),
                    s = n(870819).dn,
                    l = n(870819)._O,
                    d = (0, n(960253).I)(() => n(870819).de({
                        dominantColorFromIcon: i,
                        width: l,
                        height: s
                    }), [i, s, l]);
                return o ? (0, a.jsxs)(eV, {
                    style: d.container,
                    href: r,
                    metaHref: r,
                    borderRadiusVariant: "large",
                    children: [(0, a.jsxs)("div", {
                        style: d.coverAndIconContainer,
                        children: [(0, a.jsx)(e4, {
                            store: e,
                            emptyGalleryCoverStyle: d.emptyGalleryCoverStyle
                        }), (0, a.jsx)(e3, {
                            store: e
                        })]
                    }), (0, a.jsx)(e6, {
                        store: e,
                        hideLastEdited: !1
                    })]
                }) : (0, a.jsx)(eX, {
                    width: n(870819)._O,
                    height: s,
                    showLoadingShimmer: !0,
                    borderRadiusVariant: "large"
                })
            });

            function tt({
                onLoaded: e
            }) {
                return (0, a.jsx)(n(302785).A, {
                    title: (0, a.jsx)(n(109939).sA, {
                        id: "offlinePagesHomePanel.multiplayer.offlineTitle",
                        defaultMessage: "Offline pages"
                    }),
                    tooltip: (0, a.jsx)(n(109939).sA, {
                        id: "offlinePagesHomePanel.offlineTooltip",
                        defaultMessage: "Jump into pages that are available offline"
                    }),
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: n(725111).arrowInCircleDownIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    hideWrapStyle: !0,
                    children: (0, a.jsx)(tn, {
                        onLoaded: e
                    })
                })
            }

            function tn({
                onLoaded: e
            }) {
                let t = n(870819).dn,
                    o = (0, n(960253).I)(() => ({
                        containerStyle: {
                            minHeight: t + 5
                        }
                    }), [t]),
                    r = function() {
                        let {
                            value: e
                        } = (0, n(488736).GW)(), t = (0, n(120509).Q)({
                            availableOffline: !0,
                            filterCategory: "all",
                            searchQuery: ""
                        }), a = (0, i.useMemo)(() => new Set(t.map(e => e.id)), [t]);
                        return (0, i.useMemo)(() => {
                            if (!e) return t.slice(0, 20).map(e => e.pageBlockStore);
                            let n = e.filter(e => a.has(e.id)).slice(0, 20);
                            if (n.length >= 20) return n;
                            let i = 20 - n.length,
                                o = new Set(n.map(e => e.id));
                            return [...n, ...t.filter(e => !o.has(e.id)).slice(0, i).map(e => e.pageBlockStore)]
                        }, [e, a, 20, t])
                    }(),
                    s = (0, n(682985).K8)(() => void 0 !== n(987458).A.state.offlinePages, []),
                    l = s && r.length < 7;
                return (0, i.useEffect)(() => {
                    s && e()
                }, [s, e]), (0, a.jsx)(eL, {
                    cardWidth: n(870819)._O,
                    containerStyle: o.containerStyle,
                    preventScroll: !s,
                    children: s ? (0, a.jsxs)(a.Fragment, {
                        children: [r.map(e => (0, a.jsx)(te, {
                            store: e
                        }, e.id)), l ? (0, a.jsx)(e1, {}) : void 0]
                    }) : [, , , , ].fill(0).map((e, i) => (0, a.jsx)(eX, {
                        width: n(870819)._O,
                        height: t,
                        showLoadingShimmer: !1,
                        borderRadiusVariant: "large"
                    }, i))
                })
            }

            function ti({
                onLoaded: e
            }) {
                var t;
                let o = (0, n(533992).v3)(),
                    r = n(870819).dn,
                    s = (0, n(960253).I)(() => ({
                        containerStyle: {
                            minHeight: r + 5
                        }
                    }), [r]),
                    l = function() {
                        let e = (0, n(488736).GW)(),
                            t = (0, n(682985).K8)(() => {
                                let e = n(601860).wI.state;
                                if (!(void 0 === e || e.some(e => !e.store.isReady()))) return e.filter(e => e.store.canRead()).slice(0, 20).map(e => e.store)
                            }, [20]);
                        if (void 0 !== t) return {
                            type: "global-recents-store",
                            recentsStores: t,
                            isInitialized: !0
                        }; {
                            if ("resolved" !== e.status) return {
                                type: "cache-initializing",
                                isInitialized: !1,
                                recentsStores: void 0
                            };
                            if (!e.value) return {
                                type: "cache-miss",
                                recentsStores: void 0,
                                isInitialized: !1
                            };
                            let t = e.value.length;
                            return {
                                type: "cache-hit-blocks-loaded",
                                firstUnloadedStoreIndex: void 0,
                                recentsStores: e.value.slice(0, 20),
                                totalCachedRecents: t,
                                isInitialized: !0
                            }
                        }
                    }(),
                    d = l.isInitialized;
                ! function({
                    environment: e,
                    recentPagesResult: t
                }) {
                    (0, i.useEffect)(() => {
                        if (!ta) switch (t.type) {
                            case "global-recents-store":
                            case "cache-miss":
                            case "cache-initializing":
                                return;
                            case "cache-hit-blocks-loaded":
                                ta = !0, (0, n(167552).GE)({
                                    environment: e,
                                    firstUnloadedCachePageIndex: t.firstUnloadedStoreIndex ? ? n(488736).zf
                                })
                        }
                    }, [e, t])
                }({
                    environment: o,
                    recentPagesResult: l
                });
                let c = "global-recents-store" === l.type && l.recentsStores.length < 7;
                return (0, i.useEffect)(() => {
                    d && e()
                }, [d, e]), p({
                    firstMountToReadyMetricName: "home.recents.first_mount_to_ready",
                    pageOriginToReadyMetricName: "home.recents.page_origin_to_ready",
                    isReady: d
                }), (0, a.jsxs)(eL, {
                    cardWidth: n(870819)._O,
                    containerStyle: s.containerStyle,
                    preventScroll: !d,
                    children: [d ? void 0 : Array("cache-hit-blocks-loaded" === (t = l).type ? t.totalCachedRecents : 4).fill(0).map((e, t) => (0, a.jsx)(eX, {
                        width: n(870819)._O,
                        height: r,
                        showLoadingShimmer: !1,
                        borderRadiusVariant: "large"
                    }, t)), (l.recentsStores ? ? []).map(e => (0, a.jsx)(te, {
                        store: e
                    }, e.id)), c ? (0, a.jsx)(e1, {}) : void 0]
                })
            }
            let ta = !1,
                to = function({
                    onLoaded: e
                }) {
                    return (0, a.jsx)(n(302785).A, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "recentsHomePanel.multiplayer.title",
                            defaultMessage: "Recently visited"
                        }),
                        tooltip: (0, a.jsx)(n(109939).sA, {
                            id: "recentsHomePanel.tooltip",
                            defaultMessage: "Jump into pages you’ve seen recently"
                        }),
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(372365).clockSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        hideWrapStyle: !0,
                        children: (0, a.jsx)(ti, {
                            onLoaded: e
                        })
                    })
                };
            async function tr(e) {
                var t;
                let {
                    environment: i,
                    sourceButtonStore: a
                } = e, o = (0, n(933062).XH)("shortcuts"), r = null == o ? void 0 : o.pointer, s = a.getAutomationStore();
                if (!a.isType("button") || !r || "block" !== r.table || !s) return;
                await (null == (t = s.getParentBlockStore()) ? void 0 : t.load());
                let l = (0, n(208322).LT)(o),
                    d = await (0, n(918103).hh)({
                        environment: i,
                        sourceBlocks: [a],
                        destination: l,
                        from: "home_shortcut",
                        skipUserFacingMessages: !0,
                        options: {},
                        duplicateSubtreeGateName: "duplicate_subtree_basic_flows"
                    });
                if (!n(300441).Q.isFail(d)) return d.value.createdBlocks[0]
            }

            function ts(e) {
                let {
                    isHovered: t,
                    onClose: i,
                    onEdit: o,
                    onDuplicate: r,
                    onDelete: s,
                    alignmentToOrigin: l = "end",
                    originGap: d = 0,
                    shortcutHealthStatus: c,
                    automationId: u
                } = e, p = (0, n(109939).tz)(), m = !t && "error" === c, h = (0, n(960253).I)(() => ({
                    iconStyle: {
                        fill: m ? n(632079).Tj.red.icon.accentPrimary : void 0,
                        color: m ? n(632079).Tj.red.icon.accentPrimary : void 0
                    }
                }), [m]);
                return t || m ? (0, a.jsx)(n(656252).A, {
                    popupType: n(656252).z.Popup,
                    content: e => (0, a.jsx)(td, {
                        mainMenuParent: e,
                        onEdit: o,
                        onDuplicate: r,
                        onDelete: s,
                        automationId: u
                    }),
                    alignmentToOrigin: l,
                    onOpen: () => {},
                    onClose: i,
                    originGap: d,
                    children: e => (0, a.jsx)(n(374533).A, { ...e,
                        ariaLabel: p.formatMessage(tc.optionsLabel),
                        icon: m ? n(789777).exclamationMarkTriangleFillIcon : n(361226).ellipsisSmallIcon,
                        iconStyle: h.iconStyle
                    })
                }) : null
            }
            let tl = {
                width: 150
            };

            function td(e) {
                let {
                    mainMenuParent: t,
                    onEdit: i,
                    onDuplicate: o,
                    onDelete: r
                } = e, s = (0, n(109939).tz)(), l = [{
                    key: "shortcut_settings_edit_button",
                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(348126).r
                        }),
                        title: s.formatMessage(tc.editLabel)
                    }),
                    action: () => {
                        i(), null == t || t.close()
                    }
                }, {
                    key: "shortcut_settings_duplicate_button",
                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(703696).V
                        }),
                        title: s.formatMessage(tc.duplicateLabel)
                    }),
                    action: () => {
                        o(), null == t || t.close()
                    }
                }, {
                    key: "shortcut_settings_delete_button",
                    render: e => (0, a.jsx)(n(95582).A, { ...e,
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(968411).trashIcon
                        }),
                        isRedOnHover: !0,
                        title: s.formatMessage(tc.deleteLabel)
                    }),
                    action: () => {
                        r(), null == t || t.close()
                    }
                }];
                return (0, a.jsx)(n(558045).A, {
                    type: n(558045).O.Vertical,
                    sections: [{
                        key: "actions",
                        items: l
                    }],
                    initialFocus: 0,
                    style: tl
                })
            }
            let tc = (0, n(109939).YK)({
                    editLabel: {
                        id: "buttonMenuItem.edit.label",
                        defaultMessage: "Edit"
                    },
                    deleteLabel: {
                        id: "buttonMenuItem.delete.label",
                        defaultMessage: "Delete"
                    },
                    duplicateLabel: {
                        id: "buttonMenuItem.duplicate.label",
                        defaultMessage: "Duplicate"
                    },
                    optionsLabel: {
                        id: "buttonBlock.button.options",
                        defaultMessage: "Options"
                    }
                }),
                tu = {
                    position: "relative",
                    width: "100%",
                    minWidth: 0
                },
                tp = {
                    width: "100%",
                    alignItems: "center",
                    display: "grid",
                    gridTemplateColumns: "1fr auto"
                };

            function tm({
                config: e,
                disabled: t = !1
            }) {
                let [o, r] = (0, i.useState)(!1), s = (0, n(109939).tz)(), l = ty({
                    disabled: t,
                    isCreateButton: !1
                }), d = (0, n(533992).v3)(), c = (0, i.useCallback)(async e => {
                    (0, n(104310).u)({
                        event: {
                            eventName: "home_shortcut_clicked",
                            eventProperties: {
                                shortcut_id: e.actionType,
                                shortcut_type: (0, n(271349).hW)(e.actionType),
                                location: "home"
                            }
                        }
                    }), await n(675693).executeShortcut(d, e.actionType)
                }, [d]);
                return (0, a.jsxs)("div", {
                    style: tu,
                    onMouseEnter: () => !t && r(!0),
                    onMouseLeave: () => !t && r(!1),
                    title: s.formatMessage(e.label),
                    "aria-label": s.formatMessage(e.label),
                    role: "button",
                    tabIndex: 0,
                    children: [(0, a.jsxs)(n(64960).Ay, {
                        style: l.button,
                        disabled: t,
                        onClick: () => void c(e),
                        hoveredStyle: l.hovered,
                        pressedStyle: l.pressed,
                        "aria-label": s.formatMessage(tv.shortcutButtonAriaLabel, {
                            shortcutName: s.formatMessage(e.label)
                        }),
                        children: [(0, a.jsx)(n(462385).p, {
                            config: e,
                            shortcutHealthStatus: "valid"
                        }), (0, a.jsx)(n(111010).D, {
                            styleKey: "bodyMedium",
                            style: l.label,
                            children: s.formatMessage(e.label)
                        })]
                    }), (0, a.jsx)(eB, {
                        isHovered: o,
                        borderRadius: 10
                    })]
                })
            }
            let th = {
                marginInlineEnd: 4
            };

            function tg(e) {
                let {
                    blockStore: t
                } = e, o = (0, n(109939).tz)(), r = (0, n(533992).v3)(), [s, l] = (0, i.useState)(!1), [d, c] = (0, i.useState)(!1), [u, p] = (0, i.useState)(void 0), m = (0, n(682985).uB)(void 0, n(910649).A), h = (0, n(682985).K8)(() => t.getAutomationPointer(), [t]);
                (0, n(322617).K)(t, h);
                let {
                    value: g
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: f
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), {
                    value: y
                } = (0, n(815048).fJ)(n(879267).QV.automationActionRegistry), {
                    value: v
                } = (0, n(815048).fJ)(n(879267).QV.automations), S = (0, n(682985).K8)(() => t.getAutomationStore(), [t]), {
                    buttonTitle: x,
                    isPlaceholderTitle: b
                } = (0, n(682985).K8)(() => {
                    var e;
                    let t = null == S ? void 0 : S.getNameStore(),
                        n = null == t || null == (e = t.getValue()) ? void 0 : e.trim(),
                        i = !n || 0 === n.length;
                    return {
                        buttonTitle: i ? o.formatMessage(tv.customShortcutPlaceholder) : n,
                        isPlaceholderTitle: i
                    }
                }, [S, o]), w = (0, i.useMemo)(() => ({
                    type: "custom",
                    store: t
                }), [t]), j = (0, n(682985).K8)(() => {
                    let e = (0, n(933062).XH)("shortcuts");
                    return e && e.isType("page") ? e : void 0
                }, []), k = (0, i.useMemo)(() => {
                    if (S && g && f && y) return {
                        type: "button_block",
                        automationStore: S,
                        automationTypecheckModule: f,
                        automationActionRegistryModule: y,
                        blockStore: t,
                        currentUserId: r.currentUser.id,
                        formulasModule: g,
                        intl: o,
                        isLoggedIn: r.currentUser.isLoggedIn(),
                        pageStore: j,
                        parentRecordStore: S
                    }
                }, [S, t, g, f, y, j, r.currentUser, o]), I = (null == h ? void 0 : h.id) ? ? "", {
                    type: A,
                    tooltip: C
                } = (0, n(302819).fF)({
                    store: t,
                    automationStore: S,
                    buttonBlockStore: m,
                    automationsModule: v
                }), T = (0, n(682985).K8)(() => {
                    var e;
                    let t = null == S ? void 0 : S.getIconStore().getValue(),
                        n = null == S || null == (e = S.getNameStore().getValue()) ? void 0 : e.trim(),
                        i = !t || 0 === t.length,
                        a = !n || 0 === n.length,
                        o = 0 === ((null == S ? void 0 : S.getActionIds()) ? ? []).length;
                    return i && a && o
                }, [S]) ? "needs_setup" : "error" === A ? "error" : "valid", M = (0, i.useCallback)(() => {
                    m.startEditing({
                        placement: {
                            type: "modal"
                        }
                    })
                }, [m]), _ = (0, i.useCallback)(async () => {
                    if (("needs_setup" === T || "error" === T) && M(), (0, n(104310).u)({
                            event: {
                                eventName: "home_shortcut_clicked",
                                eventProperties: {
                                    shortcut_id: I,
                                    shortcut_type: "custom",
                                    location: "home"
                                }
                            }
                        }), "error" === T && C) return void n(436555).D6({
                        label: o.formatMessage(C)
                    });
                    if ("needs_setup" === T) return void n(436555).D6({
                        label: o.formatMessage(tv.shortcutNeedsSetup)
                    });
                    if (k && g && f && y && v) try {
                        l(!0);
                        let {
                            automationExecutionActions: e
                        } = v;
                        await e.executeClientAutomation({
                            clientContext: k,
                            environment: r
                        }), n(436555).D6({
                            label: o.formatMessage(tv.shortcutRan, {
                                buttonTitle: x
                            })
                        })
                    } finally {
                        l(!1)
                    }
                }, [T, r, I, C, k, g, f, y, v, M, o, x]), B = (0, i.useCallback)(() => (function(e) {
                    let {
                        environment: t,
                        buttonStore: i
                    } = e, a = i.getSpaceId();
                    (0, n(377796).createAndCommit)({
                        userAction: "deleteButtonFromHomePage",
                        environment: t,
                        cellTarget: a ? {
                            spaceWithId: a
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            let t = i.getParentStore();
                            t && "block" === t.table && (n(579695).zz({
                                parentStore: t,
                                childStore: i,
                                transaction: e
                            }), (0, n(421439).y4)({
                                store: i,
                                operation: {
                                    command: "update",
                                    pointer: i.pointer,
                                    path: [],
                                    args: {
                                        alive: !1
                                    }
                                },
                                transaction: e
                            }))
                        }
                    })
                })({
                    environment: r,
                    buttonStore: t
                }), [t, r]), P = (0, i.useCallback)(async () => {
                    let e = await tr({
                        environment: r,
                        sourceButtonStore: t
                    });
                    e && e.isType("button") ? (p(e), M()) : p(void 0)
                }, [t, r, M]), V = ty({
                    disabled: !1,
                    isCreateButton: !1,
                    useTertiaryLabelColor: b,
                    shortcutHealthStatus: T
                });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        role: "button",
                        tabIndex: 0,
                        style: tu,
                        onMouseEnter: () => c(!0),
                        onMouseLeave: () => c(!1),
                        title: x,
                        "aria-label": x,
                        children: (0, a.jsxs)(n(64960).Ay, {
                            style: V.button,
                            hoveredStyle: V.hovered,
                            pressedStyle: V.pressed,
                            onClick: _,
                            "aria-label": o.formatMessage(tv.shortcutButtonAriaLabel, {
                                shortcutName: x
                            }),
                            children: [s ? (0, a.jsx)(n(517334).k, {
                                style: th
                            }) : null, (0, a.jsx)(n(462385).p, {
                                config: w,
                                shortcutHealthStatus: T
                            }), (0, a.jsxs)("div", {
                                style: tp,
                                children: [(0, a.jsx)(n(111010).D, {
                                    styleKey: "bodyMedium",
                                    style: V.label,
                                    children: x
                                }), (0, a.jsx)(ts, {
                                    isHovered: d,
                                    onClose: () => {
                                        c(!1)
                                    },
                                    onEdit: M,
                                    onDuplicate: () => void P(),
                                    onDelete: B,
                                    alignmentToOrigin: "end",
                                    originGap: 0,
                                    shortcutHealthStatus: T,
                                    automationId: I
                                })]
                            }), "needs_setup" === T ? void 0 : (0, a.jsx)(eB, {
                                isHovered: d,
                                borderRadius: 10
                            })]
                        })
                    }), (0, a.jsx)(n(164021).PlacedButtonBlockEditor, {
                        store: u ? ? t,
                        buttonBlockStore: m,
                        disabled: !k || !g || !f || !y,
                        onDismiss: () => {
                            u && p(void 0)
                        }
                    })]
                })
            }

            function tf(e) {
                let {
                    disabled: t,
                    onShortcutCreation: o
                } = e, r = (0, n(109939).tz)(), s = (0, n(533992).v3)(), l = (0, i.useCallback)(() => {
                    o(function(e) {
                        let {
                            environment: t,
                            from: i
                        } = e;
                        if (!n(728372).AppStoreSidebarSpaceViewStore.state) return;
                        let a = (0, n(933062).XH)("shortcuts");
                        if (!(null != a && a.isReady())) return;
                        let o = a.getSpaceId(),
                            {
                                performResult: r
                            } = (0, n(377796).createAndCommit)({
                                userAction: "createButtonInHomePage",
                                environment: t,
                                cellTarget: o ? {
                                    spaceWithId: o
                                } : void 0,
                                canUndo: !0,
                                perform: e => {
                                    let o = n(95783).w({
                                        environment: t,
                                        createBlockItem: n(992140).ry[n(955630).xd.button],
                                        inMemoryRecordCache: a.inMemoryRecordCache,
                                        transaction: e,
                                        from: i,
                                        selection: [a]
                                    });
                                    return n(579695).NI({
                                        parentStore: a,
                                        childStore: o,
                                        transaction: e
                                    }), o
                                }
                            });
                        return r
                    }({
                        environment: s,
                        from: "home_shortcuts"
                    }))
                }, [s, o]), d = ty({
                    disabled: t,
                    isCreateButton: !0
                });
                return (0, a.jsx)("div", {
                    style: tu,
                    children: (0, a.jsx)(n(406910).p, {
                        style: d.button,
                        disabled: t,
                        onClick: () => void l(),
                        hoveredStyle: d.hovered,
                        pressedStyle: d.pressed,
                        "aria-label": r.formatMessage(tv.createCustomShortcutIcon),
                        children: (0, a.jsx)(n(4458).fI, {
                            width: n(462385).U,
                            height: n(462385).U,
                            alignItems: "center",
                            justifyContent: "center",
                            children: (0, a.jsx)(n(16275).I, {
                                icon: n(581923).plusIcon,
                                size: "default",
                                colorPalette: "gray",
                                colorVariant: "secondary"
                            })
                        })
                    })
                })
            }

            function ty(e) {
                let {
                    disabled: t,
                    isCreateButton: i,
                    useTertiaryLabelColor: a,
                    shortcutHealthStatus: o
                } = e, r = "needs_setup" === o, s = (0, n(960253).e)();
                return (0, n(960253).I)(() => {
                    let e = i ? n(632079).Tj.background.secondary : void 0,
                        o = i ? "pressed" : "hovered",
                        l = r ? "transparent" : n(632079).Tj.background.elevated,
                        d = "1px solid transparent",
                        c = r ? `1px dashed ${n(632079).Tj.border.secondary}` : d;
                    return {
                        button: {
                            display: "flex",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                            justifyContent: i ? "center" : void 0,
                            paddingTop: 8,
                            paddingBottom: 8,
                            paddingInlineEnd: 8,
                            paddingInlineStart: 8,
                            background: i ? e : l,
                            textAlign: "center",
                            gap: 10,
                            opacity: t ? .5 : 1,
                            boxShadow: "unset",
                            cursor: t ? "not-allowed" : "pointer",
                            borderRadius: 10,
                            border: i ? d : c
                        },
                        label: {
                            color: a ? n(632079).Tj.text.tertiary : void 0,
                            ...n(699422).RC,
                            minWidth: 0,
                            flexShrink: 1,
                            textAlign: "start"
                        },
                        hovered: {
                            background: r && !i ? "transparent" : "light" === s ? n(632079).Tj.home.cards.background[o] : n(632079).Tj.background.elevated,
                            boxShadow: "unset"
                        },
                        pressed: {
                            background: r && !i ? "transparent" : n(632079).Tj.background.elevated,
                            boxShadow: "unset"
                        }
                    }
                }, [t, i, a, r, s])
            }
            let tv = (0, n(109939).YK)({
                    createCustomShortcutIcon: {
                        id: "buttonBlock.button.createCustomShortcutIcon",
                        defaultMessage: "Plus sign button"
                    },
                    customShortcutPlaceholder: {
                        id: "buttonBlock.button.customShortcutPlaceholder",
                        defaultMessage: "New shortcut"
                    },
                    shortcutNeedsSetup: {
                        id: "buttonBlock.button.shortcutNeedsSetup",
                        defaultMessage: "Shortcut needs to be setup"
                    },
                    shortcutRan: {
                        id: "buttonBlock.button.shortcutRan",
                        defaultMessage: "Ran ”{buttonTitle}” shortcut"
                    },
                    shortcutButtonAriaLabel: {
                        id: "buttonBlock.button.shortcutButtonAriaLabel",
                        defaultMessage: "{shortcutName} shortcut"
                    }
                }),
                tS = (0, n(109939).YK)({
                    createPage: {
                        id: "homeShortcuts.createPage",
                        defaultMessage: "New page"
                    },
                    createDatabase: {
                        id: "homeShortcuts.createDatabase",
                        defaultMessage: "New database"
                    },
                    createMeeting: {
                        id: "homeShortcuts.createMeeting",
                        defaultMessage: "New meeting"
                    },
                    browseTemplates: {
                        id: "homeShortcuts.browseTemplates",
                        defaultMessage: "Browse templates"
                    }
                }),
                tx = [{
                    type: "default",
                    icon: e5,
                    label: tS.createPage,
                    actionType: "create-page",
                    color: "blue"
                }, {
                    type: "default",
                    icon: n(783892).C,
                    label: tS.createDatabase,
                    actionType: "create-database",
                    color: "orange"
                }, {
                    type: "default",
                    icon: n(121823).$,
                    label: tS.createMeeting,
                    actionType: "create-meeting",
                    color: "red"
                }, {
                    type: "default",
                    icon: n(856400).templatesFillIcon,
                    label: tS.browseTemplates,
                    actionType: "browse-templates",
                    color: "gray"
                }];

            function tb() {
                let [e, t] = (0, i.useState)(void 0), o = (0, n(682985).uB)(void 0, n(910649).A), r = "on" === (0, n(604306).r)("home_custom_shortcuts"), s = (0, i.useCallback)(e => {
                    e && r && (t(e), o.startEditing({
                        placement: {
                            type: "modal"
                        }
                    }))
                }, [o, r]), l = (0, n(682985).K8)(() => {
                    if (!r) return [];
                    let e = (0, n(933062).XH)("shortcuts");
                    return (null == e ? void 0 : e.getContentStores().filter(e => e.isType("button"))) ? ? []
                }, [r]), d = 16 === l.length, c = (0, n(682985).K8)(() => !(0, n(328765).S)() || !n(728372).AppStoreSidebarSpaceViewStore.state || d, [d]), u = (0, n(682985).K8)(() => (null == e ? void 0 : e.isType("button")) && r ? (0, a.jsx)(n(164021).PlacedButtonBlockEditor, {
                    store: e,
                    buttonBlockStore: o,
                    disabled: !1
                }) : null, [o, e, r]);
                return (0, a.jsxs)("div", {
                    children: [(0, a.jsxs)("div", {
                        className: "notion-home-shortcuts-grid",
                        children: [tx.map(e => (0, a.jsx)(tm, {
                            config: e,
                            disabled: c
                        }, e.actionType)), l.map(e => (0, a.jsx)(tg, {
                            blockStore: e
                        }, e.id)), r ? (0, a.jsx)(tf, {
                            disabled: c,
                            onShortcutCreation: s
                        }) : void 0]
                    }), u]
                })
            }

            function tw({
                onLoaded: e
            }) {
                let t = (0, n(109939).tz)();
                return (0, n(383953).w)(e), (0, a.jsx)(n(302785).A, {
                    title: t.formatMessage(tj.title),
                    tooltip: t.formatMessage(tj.tooltip),
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: n(877163).m,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    hideWrapStyle: !0,
                    children: (0, a.jsx)(tb, {})
                })
            }
            let tj = (0, n(109939).YK)({
                    title: {
                        id: "shortcutsHomePanel.title",
                        defaultMessage: "Shortcuts"
                    },
                    tooltip: {
                        id: "shortcutsHomePanel.tooltip",
                        defaultMessage: "Create new pages, databases, and meeting notes quickly"
                    }
                }),
                tk = {
                    innerContainer: {
                        paddingInlineStart: 8,
                        paddingBottom: 4
                    },
                    scrollerStyle: {
                        paddingInlineEnd: 8,
                        paddingTop: 12
                    },
                    emptyStateWrapper: {
                        paddingInlineEnd: n(681693).VQ,
                        paddingBottom: n(681693).VQ,
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }
                },
                tI = i.memo(function({
                    store: e,
                    ...t
                }) {
                    return (0, a.jsx)(n(590285).dN, {
                        store: e,
                        disabled: !1,
                        hideViewTabBar: !0,
                        headerActionsBehavior: "hidden",
                        isFullScreen: !1,
                        productUseCase: "personal_home",
                        overrideViewType: "list",
                        ...t
                    })
                }),
                tA = i.memo(function({
                    store: e,
                    style: t,
                    scrollContainerStyle: i,
                    collectionContextStore: o,
                    emptyState: r,
                    pageOriginToReadyMetricName: s,
                    firstMountToReadyMetricName: l,
                    ...d
                }) {
                    let c = (0, n(960253).I)(() => ({
                            container: {
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                height: "100%",
                                overflow: "hidden",
                                paddingBottom: 0,
                                ...t
                            }
                        }), [t]),
                        u = (0, n(682985).K8)(() => null == o ? void 0 : o.isEmptyStore.state, [o]);
                    return (p({
                        firstMountToReadyMetricName: l,
                        pageOriginToReadyMetricName: s,
                        isReady: !!(!u && o && e)
                    }), u && r) ? (0, a.jsx)("div", {
                        style: tk.emptyStateWrapper,
                        children: r
                    }) : (0, a.jsx)("div", {
                        style: c.container,
                        children: e ? (0, a.jsx)(n(126767).H, {
                            type: n(644154).A.Y,
                            style: tk.scrollerStyle,
                            children: (0, a.jsx)("div", {
                                style: tk.innerContainer,
                                children: (0, a.jsx)(tI, {
                                    store: e,
                                    ...d
                                })
                            })
                        }) : void 0
                    })
                });

            function tC() {
                return (0, a.jsx)(eR, {
                    icon: n(490648).d,
                    message: (0, a.jsx)(n(109939).sA, {
                        id: "SimilarUsersHomePanel.emptyState.message",
                        defaultMessage: "Pages relevant to you will show up here."
                    })
                })
            }
            let tT = i.memo(function({
                onLoaded: e,
                panelStyle: t
            }) {
                let o = (0, n(682985).K8)(() => {
                        let e = (0, n(933062).XH)("similarUsers");
                        if (null != e && e.isCollectionView()) return e
                    }, []),
                    [r, s] = i.useState(void 0);
                return (0, i.useEffect)(() => {
                    null != r && r.shouldShowSpinnerStore && null != r && r.isLoadingStore && e()
                }, [r, e]), (0, a.jsx)(n(302785).A, {
                    title: (0, a.jsx)(n(109939).sA, {
                        id: "personalHomePanelConfig.similarUsersActivityPanelTitle.withWorkspaceName",
                        defaultMessage: "Suggested for you"
                    }),
                    icon: (0, a.jsx)(n(16275).I, {
                        icon: n(440956).lightBulbBrightSmallIcon,
                        size: "sm",
                        colorVariant: "secondary"
                    }),
                    tooltip: (0, a.jsx)(n(109939).sA, {
                        id: "personalHomePanel.panelTooltip.similarUsers",
                        defaultMessage: "Suggestions based on your recent activity"
                    }),
                    panelStyle: t,
                    children: (0, a.jsx)(tA, {
                        store: o,
                        collectionContextStore: r,
                        setCollectionContextStore: s,
                        emptyState: (0, a.jsx)(tC, {}),
                        pageOriginToReadyMetricName: "home.suggested_for_you.page_origin_to_ready",
                        firstMountToReadyMetricName: "home.suggested_for_you.first_mount_to_ready"
                    })
                })
            });
            async function tM({
                persona: e,
                environment: t,
                intl: i
            }) {
                let a = n(728372).AppStoreSidebarSpaceStore.state;
                if (!a) return [];
                let o = await t.api.callApi({
                    eventName: "getTemplateContentGroup",
                    environment: t,
                    data: {
                        contentfulId: function(e) {
                            if ("function" === e.type) switch (e.persona) {
                                case "student":
                                    return "13FpH1AGHci69ERczKupOU";
                                case "educator":
                                    return "7ys8LLEWhlmVEwjJjASuE2";
                                case "operations":
                                    return "4SPA9JI4ZQtyKtYzZvAVt1";
                                case "knowledge_management":
                                    return "5IRBIHYcfXWjy5HamFCwAn";
                                case "it_admin":
                                    return "2lxkUWVxPdhbYcvxe7FFty";
                                case "hr":
                                    return "17Fklm4NRZaaMdctNNyl8L";
                                case "support":
                                    return "2SmrAf6VMtcqx2Rszb5QZn";
                                case "sales_or_success":
                                    return "4pVIkK7rg7S6DcqwvyNHs";
                                case "finance":
                                    return "jDnY125acofk3O42a2IZ8";
                                case "marketing":
                                    return "3TTtGQffJRQ0H3MSUNYs6j";
                                case "product":
                                    return "3OAmgIdyPo9wEXGRH6j4dO";
                                case "project_or_program_management":
                                    return "1mSX3Ie5sfGGT9ZrBuPXuO";
                                case "product_design":
                                    return "W5d1S5UYPjuiY1t2cRG4T";
                                case "eng":
                                    return "7vJ3HPIubGvIa4PzHrAG04";
                                case "internal_communication":
                                    return "6F1MIc09JzFpGsxknKL0pq";
                                case "creative":
                                    return "6H3xYAAg00HPET7xvqwcl4";
                                default:
                                    (0, n(722371).HB)(e)
                            } else if ("space_intent" === e.type) switch (e.persona) {
                                case "life":
                                    return "2X7QqO4KLsoTArIKyG7QA";
                                case "school":
                                    return "5zeHsLqZ0Vk5kMfTQYiupq";
                                case "work":
                                    return "1XoFa69pF2Yf1QzikYDOk6";
                                default:
                                    (0, n(722371).HB)(e)
                            } else if ("space_type" === e.type) switch (e.persona) {
                                case "multiplayer":
                                    return "2mk1W9x7ihl3uEpAwIy3zP";
                                case "singleplayer":
                                    return "hjxAjQJHiLsYhivckSUZP";
                                default:
                                    (0, n(722371).HB)(e)
                            } else(0, n(722371).HB)(e)
                        }(e),
                        locale: (0, n(599412).Nk)(i),
                        includeRecordMap: !0
                    }
                });
                return "success" !== o.type || !1 === o.data.success || "template" !== o.data.type ? [] : n(412951).RecordMapWithRole.create(o.data.recordMap).getByTable(n(832375).XXO).map(e => n(258710).s.createChildStore(a, {
                    table: n(832375).XXO,
                    id: e.pointer.id
                }))
            }

            function t_() {
                return {
                    height: 150,
                    width: 240
                }
            }
            let tB = {
                offsetImageContainer: {
                    position: "relative",
                    flexShrink: 1,
                    flexGrow: 1,
                    minHeight: 0
                },
                text: {
                    width: "100%",
                    lineHeight: 1.3,
                    ...n(699422).RC
                }
            };

            function tP({
                templateIcon: e,
                size: t
            }) {
                let i = (0, n(960253).I)(() => ({
                    headerIcon: {
                        width: t,
                        height: t,
                        opacity: .6
                    }
                }), [t]);
                return e ? (0, a.jsx)("img", {
                    src: e,
                    crossOrigin: "anonymous",
                    style: i.headerIcon
                }) : null
            }
            let tV = i.memo(function({
                    store: e
                }) {
                    let t = (0, n(533992).v3)(),
                        o = (0, n(682985).K8)(() => e.getName(), [e]),
                        r = (0, n(682985).K8)(() => {
                            let t = e.getTemplateImage();
                            if (null != t && t.url) return (0, n(232837).NU)(t.url)
                        }, [e]),
                        s = (0, n(682985).K8)(() => {
                            let t = e.getTemplateIcon();
                            if (t)
                                if ((0, n(111012).T8)(t)) {
                                    let {
                                        iconName: e
                                    } = (0, n(111012).DV)(t) ? ? {};
                                    if (!e) return;
                                    return `/icons/${e}_lightgray.svg`
                                } else if (t.endsWith(".svg")) return;
                            else return `/icons/${t}_lightgray.svg`
                        }, [e]),
                        l = !!s,
                        d = !l,
                        c = (0, i.useCallback)(() => {
                            let i = t.RouterStore.state.route,
                                a = n(728372).AppStoreSidebarSpaceStore.state,
                                o = (0, n(498348).dY)(e);
                            if (!o || !a || "page" !== i.name || !i.blockId) return;
                            let r = n(970831).B.createChildStore(a, {
                                table: n(832375).evP,
                                id: i.blockId,
                                spaceId: a.id
                            });
                            (0, n(545586).navigateToBlock)({
                                environment: t,
                                store: r,
                                pageVisitSource: n(254656).y8.PersonalHomeTileTemplates,
                                templateGalleryItem: o
                            })
                        }, [t, e]),
                        {
                            height: u,
                            width: p
                        } = t_(),
                        m = (0, n(960253).e)(),
                        h = (0, n(960253).I)(() => {
                            let e = n(632079).Tj.home.cards.templateCardBackground;
                            return {
                                container: {
                                    width: p,
                                    height: u,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "stretch",
                                    background: e.base,
                                    boxShadow: "dark" !== m ? void 0 : n(632079).Tj.homeShadow.templateCard.base
                                },
                                containerHovered: {
                                    background: e.hovered,
                                    boxShadow: "dark" !== m ? void 0 : n(632079).Tj.homeShadow.templateCard.hovered
                                },
                                containerPressed: {
                                    background: e.pressed,
                                    boxShadow: "dark" !== m ? void 0 : n(632079).Tj.homeShadow.templateCard.hovered
                                },
                                headerTitleAndIconContainer: {
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    paddingInlineStart: d ? 24 : 16,
                                    paddingInlineEnd: 16,
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 12,
                                    flexShrink: 0,
                                    justifyContent: "start"
                                },
                                offsetImage: {
                                    position: "absolute",
                                    width: p,
                                    top: 0,
                                    insetInlineStart: 24,
                                    borderRadius: 6,
                                    boxShadow: "0px 6px 16px 0px rgba(0, 0, 0, 0.05), 0px 0px 0px 1px rgba(18, 18, 18, 0.03)"
                                }
                            }
                        }, [p, u, d, m]);
                    return (0, a.jsxs)(eV, {
                        style: h.container,
                        hoveredStyle: h.containerHovered,
                        pressedStyle: h.containerPressed,
                        onClick: c,
                        borderRadiusVariant: "small",
                        children: [(0, a.jsxs)("div", {
                            style: h.headerTitleAndIconContainer,
                            children: [l ? (0, a.jsx)(tP, {
                                templateIcon: s,
                                size: 32
                            }) : void 0, (0, a.jsxs)(n(4458).VP, {
                                gap: 2,
                                alignItems: "start",
                                flexGrow: 1,
                                flexShrink: 1,
                                children: [(0, a.jsx)(n(324489).V, {
                                    style: tB.text,
                                    children: o
                                }), (0, a.jsx)(n(324489).V, {
                                    isSmall: !0,
                                    isSecondaryColor: !0,
                                    children: (0, a.jsx)(n(109939).sA, {
                                        id: "templatesGalleryItem.authorByNotion",
                                        defaultMessage: "By Notion"
                                    })
                                })]
                            })]
                        }), (0, a.jsx)("div", {
                            style: tB.offsetImageContainer,
                            children: (0, a.jsx)("img", {
                                style: h.offsetImage,
                                src: r
                            })
                        })]
                    })
                }),
                tH = i.memo(function({
                    onLoaded: e
                }) {
                    let t = (0, n(533992).v3)(),
                        o = (0, n(109939).tz)(),
                        r = (0, n(682985).K8)(() => {
                            let e = n(728372).AppStoreSidebarSpaceStore.state,
                                i = n(864011).A.state;
                            if (i) return i;
                            let {
                                function: a,
                                useCases: o
                            } = (0, n(745452).p)();
                            return (0, n(419144).Lt)({
                                environment: t,
                                spaceSurveyData: null == e ? void 0 : e.getSpaceSurveyData(),
                                userUseCases: o,
                                userPersonaValue: a
                            })
                        }, [t]),
                        [s] = (0, n(97668).Yb)(async () => {
                            if (r) return await tM({
                                persona: r,
                                environment: t,
                                intl: o
                            })
                        }, [t, o, r]),
                        l = (null == s ? void 0 : s.status) === "pending",
                        d = (0, n(682985).K8)(() => (null == s ? void 0 : s.status) === "resolved" ? s.value ? ? [] : [], [s]);
                    (0, i.useEffect)(() => {
                        l || e()
                    }, [l, e]);
                    let c = (0, i.useCallback)(() => {
                            let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                            e && n(578449).WO({
                                environment: t,
                                spaceViewStore: e,
                                feature: "templates",
                                from: "templates_dismiss_button"
                            })
                        }, [t]),
                        u = (0, i.useCallback)(() => {
                            (0, n(666236).P)({
                                environment: t
                            })
                        }, [t]),
                        p = (0, i.useMemo)(() => {
                            let e = [{
                                type: "custom",
                                closeOnAccept: !0,
                                item: {
                                    key: "all_templates",
                                    render: (e, t) => (0, a.jsx)(n(95582).A, { ...e,
                                        title: (0, a.jsx)(n(109939).sA, {
                                            id: "TemplatesHomePanel.showAllTemplates",
                                            defaultMessage: "Explore more templates"
                                        }),
                                        icon: (0, a.jsx)(n(16275).I, {
                                            icon: n(856400).templatesFillIcon
                                        })
                                    }),
                                    action: u
                                }
                            }, {
                                type: "hide",
                                hide: c
                            }];
                            return [(0, a.jsx)(n(485023).A, {
                                actions: e
                            }, "more")]
                        }, [c, u]),
                        m = t_();
                    return (0, a.jsx)(n(302785).A, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "TemplatesHomePanel.Title",
                            defaultMessage: "Featured templates"
                        }),
                        tooltip: (0, a.jsx)(n(109939).sA, {
                            id: "TemplatesHomePanel.tooltip",
                            defaultMessage: "Get inspired about how to use Notion"
                        }),
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(126472).templatesSmallIcon,
                            size: "sm",
                            colorVariant: "secondary"
                        }),
                        actions: p,
                        hideWrapStyle: !0,
                        children: (0, a.jsx)(eH, {
                            cardWidth: m.width,
                            children: l || 0 === d.length ? [...[, , , ].keys()].map(e => (0, a.jsx)(eX, {
                                width: m.width,
                                height: m.height,
                                showLoadingShimmer: l,
                                borderRadiusVariant: "small"
                            }, e)) : d.map(e => (0, a.jsx)(tV, {
                                store: e
                            }, e.id))
                        })
                    })
                }),
                tL = {
                    margin: -2
                },
                tE = {
                    overflow: "hidden"
                };

            function tR({
                collectionContextStore: e
            }) {
                let t = (0, n(533992).v3)(),
                    {
                        spaceViewStore: o,
                        spaceStore: r
                    } = (0, n(682985).K8)(() => ({
                        spaceViewStore: n(728372).AppStoreSidebarSpaceViewStore.state,
                        spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                    }), []),
                    s = (0, n(682985).K8)(() => o ? (0, n(679321).r)(o) : [], [o]),
                    l = (0, n(682985).K8)(() => e.collectionViewStore(), [e]),
                    d = (0, n(682985).K8)(() => {
                        if (!r) return;
                        let e = null == l ? void 0 : l.getCollectionSource();
                        if ((null == e ? void 0 : e.type) !== "trending") return;
                        let t = e.teamId;
                        return t ? s.find(e => e.id === t) : r
                    }, [s, r, l]),
                    c = (0, i.useCallback)(i => {
                        n(578449).hK({
                            environment: t,
                            spaceViewStore: o,
                            selectedStore: i,
                            collectionContextStore: e
                        })
                    }, [t, e, o]),
                    u = (0, n(682985).K8)(() => {
                        if (!r) return {};
                        let e = {};
                        return e[r.id] = null == r ? void 0 : r.getName(), s.forEach(t => {
                            e[t.id] = t.getName()
                        }), e
                    }, [r, s]);
                return o && r && d ? (0, a.jsx)(n(691509).A, {
                    items: [r, ...s],
                    getKey: e => e.id,
                    selectedItem: d,
                    onSelect: c,
                    renderItem: e => {
                        let t = e.value;
                        return (0, a.jsx)(n(95582).A, { ...e,
                            title: u[t.id],
                            icon: (0, a.jsx)(n(729746).x, {
                                store: t,
                                size: 16,
                                disabled: !0
                            })
                        })
                    },
                    width: 300,
                    children: e => (0, a.jsx)(tF, { ...e,
                        selectedStore: d
                    })
                }) : null
            }
            let tD = {
                dropdownButton: {
                    width: "100%",
                    padding: "6px 8px",
                    color: n(632079).Tj.text.secondary,
                    fontSize: n(418676).Kw,
                    display: "inline-flex",
                    justifyContent: "end",
                    alignItems: "center",
                    gap: 4,
                    borderRadius: n(681693)._g
                },
                dropdownText: {
                    display: "inline-flex",
                    alignItems: "center",
                    fontWeight: n(699422).Wy.medium,
                    overflow: "hidden"
                }
            };

            function tF(e) {
                let {
                    selectedStore: t,
                    ...i
                } = e;
                return (0, a.jsxs)(n(64960).Ay, {
                    style: tD.dropdownButton,
                    ...i,
                    children: [(0, a.jsx)("div", {
                        style: tD.dropdownText,
                        children: (0, a.jsx)(tz, {
                            selectedStore: t
                        })
                    }), (0, a.jsx)(n(16275).I, {
                        icon: n(595453).arrowChevronSingleDownSmallIcon,
                        size: "sm",
                        colorVariant: "tertiary",
                        fitToViewBox: "horizontal"
                    })]
                })
            }
            let tN = {
                icon: {
                    marginInlineStart: 4,
                    marginInlineEnd: 4
                },
                spaceOrTeamName: { ...n(699422).RC
                }
            };

            function tz({
                selectedStore: e
            }) {
                let t = (0, n(682985).K8)(() => null == e ? void 0 : e.getName(), [e]),
                    i = (0, a.jsx)(n(729746).x, {
                        store: e,
                        size: 16,
                        disabled: !0,
                        style: tN.icon
                    });
                return t ? (0, a.jsx)(n(109939).sA, {
                    id: "personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withWorkspaceOrTeamName",
                    defaultMessage: "In {spaceOrTeamIcon} {spaceOrTeamName}",
                    values: {
                        spaceOrTeamIcon: i,
                        spaceOrTeamName: (0, a.jsx)("div", {
                            style: tN.spaceOrTeamName,
                            children: t
                        })
                    }
                }) : (0, n(966980).$R)(e) ? (0, a.jsx)(n(109939).sA, {
                    id: "personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withoutTeamName",
                    defaultMessage: "In your teamspace"
                }) : (0, a.jsx)(n(109939).sA, {
                    id: "personalHomePanelConfig.workspaceActivityPanelDropdownTitle.withoutWorkspaceName",
                    defaultMessage: "In your workspace"
                })
            }

            function tW() {
                return (0, a.jsx)(eR, {
                    icon: n(947449).o,
                    message: (0, a.jsx)(n(109939).sA, {
                        id: "PersonalHomeTrendingPanel.emptyState.message",
                        defaultMessage: "Popular pages will show up here."
                    })
                })
            }
            let tO = i.memo(function({
                    onLoaded: e,
                    panelStyle: t
                }) {
                    let [o, r] = i.useState(void 0), s = (0, n(682985).K8)(() => {
                        let e = n(728372).AppStoreSidebarSpaceStore.state,
                            t = n(728372).AppStoreCurrentUserStore.state;
                        if (!e || !t) return;
                        let i = (0, n(933062).XH)("trending");
                        if (null != i && i.isCollectionView()) return i
                    }, []);
                    return (0, i.useEffect)(() => {
                        null != o && o.shouldShowSpinnerStore && null != o && o.isLoadingStore && e()
                    }, [o, e]), (0, a.jsx)(n(302785).A, {
                        title: (0, a.jsx)(n(109939).sA, {
                            id: "personalHomePanelConfig.workspaceActivityPanelTitle.trending",
                            defaultMessage: "Trending"
                        }),
                        right: o && (0, a.jsx)(tR, {
                            collectionContextStore: o
                        }),
                        rightStyle: tE,
                        disableRightFadeIn: !0,
                        icon: (0, a.jsx)(n(16275).I, {
                            icon: n(643551).u,
                            colorVariant: "secondary",
                            style: tL
                        }),
                        tooltip: (0, a.jsx)(n(109939).sA, {
                            id: "personalHomePanel.panelTooltip.trending",
                            defaultMessage: "Popular pages this week"
                        }),
                        panelStyle: t,
                        children: (0, a.jsx)(tA, {
                            store: s,
                            collectionContextStore: o,
                            setCollectionContextStore: r,
                            emptyState: (0, a.jsx)(tW, {}),
                            pageOriginToReadyMetricName: "home.trending.page_origin_to_ready",
                            firstMountToReadyMetricName: "home.trending.first_mount_to_ready"
                        })
                    })
                }),
                tU = n(906745).DateTime.fromISO("2024-05-06"),
                tK = "single",
                tq = {
                    suggestedTiles: {
                        height: n(681693).BZ,
                        paddingInlineEnd: 0,
                        paddingBottom: 0,
                        paddingInlineStart: 0
                    }
                },
                tG = i.memo(function({
                    showWelcomeAnimation: e,
                    onAllPanelsLoaded: t,
                    clientStore: o
                }) {
                    let [r, s] = (0, i.useState)({
                        recents: !1,
                        tips: !1,
                        templates: !1,
                        similarUsersAndTrending: !1,
                        suggested: !1,
                        trending: !1,
                        tasks: !1,
                        customDb: !1,
                        calendar: !1,
                        shortcuts: !1
                    }), d = (0, n(533992).v3)(), {
                        isPhone: c
                    } = (0, n(533992).Y0)(), p = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.getHomeEnabledFeatures()) ? ? {}
                    }, []), m = (0, n(682985).K8)(() => (0, n(328765).S)(), []), h = (0, n(604306).r)("home_shortcut_actions"), g = !n(986939).A.isMobile && "control" !== h && !1 !== p.shortcuts, f = (0, n(556583).y)(), y = !(0, n(682985).O$)(n(205885).e) && f, v = (0, n(682985).K8)(() => {
                        let e = () => {
                                var e;
                                return (0, n(419144).Az)({
                                    environment: d
                                }) && (null == m || null == (e = m.getSettings()) ? void 0 : e.show_home_virtual_views) !== !1
                            },
                            t = () => {
                                let t = p.suggested,
                                    n = e();
                                return void 0 !== t ? !!t && n : n
                            },
                            i = () => void 0 !== p.trending ? !!p.trending && e() : e();
                        return {
                            shortcuts: g,
                            recents: !0,
                            tasks: !!p.tasks,
                            customDb: !!p.custom_db,
                            similarUsersAndTrending: t() || i(),
                            suggested: t(),
                            trending: i(),
                            tips: !!p.tips,
                            templates: !n(986939).A.isMobile && !!p.templates,
                            calendar: (0, n(194685).x)({
                                isPhone: c,
                                spaceStore: m
                            }) && !!p.calendar
                        }
                    }, [d, m, g, p.tasks, p.custom_db, p.tips, p.templates, p.calendar, p.suggested, p.trending, c]), [S, x] = (0, i.useState)(void 0), b = (0, i.useMemo)(() => ({
                        panelState: S,
                        view: "notionHomeTile"
                    }), [S]), w = (0, n(682985).K8)(() => {
                        if (!Object.values(v).some(Boolean)) return !1;
                        for (let [e, t] of (0, n(722371).WP)(v))
                            if (t && !r[e]) return !1;
                        return !0
                    }, [v, r]), j = (0, n(682985).K8)(() => !!m && n(906745).DateTime.fromMillis(m.getCreatedTime()) > tU, [m]);
                    (0, n(383953).l)(() => {
                        n(266130).updateMetricDataWithIsPushTag(d), n(266130).measurePageRenderMetrics({
                            environment: d,
                            isHomePage: !0,
                            isEditable: !1,
                            isWikiHome: !1,
                            isPageWithCustomLayout: !1
                        })
                    }), (0, i.useEffect)(() => {
                        w && t(!0), e || s({
                            recents: !0,
                            tips: !0,
                            templates: !0,
                            similarUsersAndTrending: !0,
                            suggested: !0,
                            trending: !0,
                            tasks: !0,
                            calendar: !0,
                            customDb: !0,
                            shortcuts: r.shortcuts
                        })
                    }, [e, w, t, r.shortcuts]);
                    let k = (0, i.useCallback)(e => {
                            x((0, n(831214).oM)(e))
                        }, []),
                        I = (0, i.useCallback)(e => ({
                            "--depth": e
                        }), []),
                        A = (0, i.useCallback)(e => {
                            s(t => ({ ...t,
                                [e]: !0
                            }))
                        }, []),
                        C = (0, i.useCallback)(() => {
                            A("shortcuts")
                        }, [A]),
                        T = (0, i.useCallback)(() => A("recents"), [A]),
                        M = (0, i.useCallback)(() => A("tasks"), [A]),
                        _ = (0, i.useCallback)(() => A("suggested"), [A]),
                        B = (0, i.useCallback)(() => A("trending"), [A]),
                        P = (0, i.useCallback)(() => A("similarUsersAndTrending"), [A]),
                        V = (0, i.useCallback)(() => {
                            _(), P()
                        }, [_, P]),
                        H = (0, i.useCallback)(() => {
                            B(), P()
                        }, [B, P]),
                        L = (0, i.useCallback)(() => {
                            A("calendar")
                        }, [A]),
                        E = (0, i.useCallback)(() => A("templates"), [A]),
                        R = (0, i.useCallback)(() => A("tips"), [A]),
                        D = (0, i.useCallback)(() => A("customDb"), [A]),
                        F = (() => {
                            if (!1 !== e)
                                if (w) return n(828432).eUs;
                                else return n(828432).Rag
                        })(),
                        N = (0, n(682985).K8)(() => {
                            if ("initial" !== u.state.type) {
                                if ("visible" === u.state.type) return n(828432).q2i;
                                if ("hidden" === u.state.type) return n(828432).Ad9
                            }
                        }, []),
                        z = (0, i.useCallback)(e => l()(F, N), [F, N]);
                    (0, i.useEffect)(() => {
                        var e;
                        null == (e = d.mobileNative) || e.markTransitionReady({
                            environment: d,
                            type: "posts"
                        })
                    }, [d]), (0, i.useEffect)(() => {
                        if (!w) return;
                        (0, n(167552).Ao)({
                            environment: d,
                            args: {
                                tasks: v.tasks ? "show" : "hide",
                                custom_db: v.customDb ? "show" : "hide",
                                tips: v.tips ? "show" : "hide",
                                templates: n(986939).A.isMobile ? "always_hide" : v.templates ? "show" : "hide",
                                calendar: (0, n(194685).x)({
                                    isPhone: c,
                                    spaceStore: (0, n(328765).S)()
                                }) ? v.calendar ? "show" : "hide" : "always_hide",
                                suggested: v.suggested ? "show" : "hide",
                                trending: v.trending ? "show" : "hide",
                                shortcuts: v.shortcuts ? "show" : "hide"
                            }
                        });
                        let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (e) {
                            var t;
                            let i = null == (t = (0, n(933062).x$)(e)) ? void 0 : t.id,
                                a = e.getUserId();
                            a && i && (0, n(160856).Oh)({
                                userId: a,
                                enabledFeatures: v,
                                blockId: i
                            })
                        }
                    }, [w]);
                    let W = e => {
                            let t = v.suggested,
                                n = v.trending;
                            if (t || n)
                                if (t && n) return {
                                    key: e,
                                    type: "twoColumn",
                                    left: (0, a.jsx)(tT, {
                                        panelStyle: tq.suggestedTiles,
                                        onLoaded: V
                                    }),
                                    right: (0, a.jsx)(tO, {
                                        panelStyle: tq.suggestedTiles,
                                        onLoaded: H
                                    })
                                };
                                else if (t) return {
                                key: "suggested",
                                type: tK,
                                content: (0, a.jsx)(tT, {
                                    onLoaded: V
                                })
                            };
                            else return {
                                key: "trending",
                                type: tK,
                                content: (0, a.jsx)(tO, {
                                    onLoaded: H
                                })
                            }
                        },
                        O = !1,
                        U = (function(e) {
                            let {
                                showTipsAboveCalendar: t
                            } = e, i = ["recents", "shortcuts"];
                            return t ? [...i, "tips", "calendar", "tasks", "customDb", "suggested", "trending", "templates"].filter(n(722371).O9) : [...i, "calendar", "tasks", "customDb", "suggested", "trending", "tips", "templates"].filter(n(722371).O9)
                        })({
                            showTipsAboveCalendar: j
                        }).map(e => {
                            if (v[e]) switch (e) {
                                case "recents":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: y ? (0, a.jsx)(tt, {
                                            onLoaded: T
                                        }) : (0, a.jsx)(to, {
                                            onLoaded: T
                                        })
                                    };
                                case "calendar":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(n(531491).a.Provider, {
                                            value: b,
                                            children: (0, a.jsx)(ej, {
                                                maxHeight: n(681693).BZ,
                                                onLoaded: L,
                                                onDisplayStateChanged: k
                                            })
                                        })
                                    };
                                case "tasks":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(e$, {
                                            onLoaded: M
                                        })
                                    };
                                case "customDb":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(eT, {
                                            onLoaded: D
                                        })
                                    };
                                case "templates":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(tH, {
                                            onLoaded: E
                                        })
                                    };
                                case "tips":
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(eG, {
                                            onLoaded: R
                                        })
                                    };
                                case "shortcuts":
                                    if (!g) return;
                                    return {
                                        key: e,
                                        type: tK,
                                        content: (0, a.jsx)(tw, {
                                            onLoaded: C
                                        })
                                    };
                                case "suggested":
                                    if (!O) return O = !0, W("suggested");
                                    return;
                                case "trending":
                                    if (!O) return O = !0, W("trending");
                                    return;
                                case "similarUsersAndTrending":
                                    return;
                                default:
                                    (0, n(722371).HB)(e)
                            }
                        }).filter(n(722371).O9);
                    return (0, a.jsx)(a.Fragment, {
                        children: U.map((e, t) => e.type === tK ? (0, a.jsx)(n(394112).vV, {
                            className: z(e.key),
                            style: I(t),
                            children: e.content
                        }, e.key) : (0, a.jsx)(n(394112).MR, {
                            minWidth: 300,
                            className: z(e.key),
                            style: I(t),
                            left: e.left,
                            right: e.right
                        }, e.key))
                    })
                }),
                t$ = {
                    container: {
                        width: "100%",
                        height: "100%",
                        cursor: "default",
                        backgroundColor: n(632079).Tj.background.primary
                    },
                    greeterChatInputGapFix: n(986939).A.isMobile ? {} : {
                        marginBottom: void 0
                    }
                },
                tY = i.memo(function() {
                    let e = (0, n(533992).v3)(),
                        t = (0, n(533992).Y0)().isPhone,
                        [o, l] = (0, i.useState)(!1),
                        [d, c] = (0, i.useState)(!1),
                        [u, p] = (0, i.useState)(!1);
                    (0, i.useEffect)(() => n(523511).A.setState(!0), []);
                    let m = (0, n(682985).K8)(() => {
                            let e = n(728372).AppStoreSidebarSpaceViewStore.state;
                            return e && (0, n(933062).x$)(e)
                        }, []),
                        h = (0, n(682985).K8)(() => {
                            var e;
                            return !!(null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) ? void 0 : e.isReady())
                        }, []),
                        g = (0, n(682985).K8)(() => {
                            var e;
                            return !!(null == (e = n(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getPersonalHomeSettings()) ? void 0 : e.seen_welcome_animation)
                        }, []),
                        f = n(57168).defaultClientAIChatStore;
                    (0, i.useEffect)(() => {
                        n(707964).u4({
                            name: "open_home"
                        })
                    }, []), (0, i.useEffect)(() => {
                        async function e() {
                            await n(218744).default.waitUntilStatsigReadyAsync(), p(!0)
                        }
                        u || e()
                    }, [u]), (0, i.useEffect)(() => {
                        h && u && !g && (l(!1), c(!0), n(160856).aX({
                            environment: e,
                            newSeenWelcomeHomeValue: !0
                        }));
                        let t = setTimeout(() => {
                            l(!0), c(!1)
                        }, 3e3);
                        return () => {
                            clearTimeout(t)
                        }
                    }, [e, h, o]), (0, i.useEffect)(() => {
                        "rendered" !== n(728372).default.state.renderPhase && n(728372).default.setPageRendered()
                    }, []);
                    let y = (0, n(682985).K8)(() => (0, n(654863).x)(n(728372).AppStoreSidebarSpaceViewStore.state).greeting, []),
                        v = s(),
                        S = (0, n(682985).K8)(() => n(465361).A.state.banners, []),
                        x = !t || y ? S.length > 0 ? 80 : 64 : 0,
                        b = (0, n(682985).uB)(void 0, n(593423).A),
                        w = (0, n(682985).K8)(() => b.state.elementRef ? ? {
                            current: null
                        }, [b]),
                        j = (0, n(239160).yE)(w);
                    (0, i.useEffect)(() => {
                        let e = 0 === j;
                        e !== n(523511).A.state && n(523511).A.setState(e)
                    }, [j]);
                    let k = !g || d,
                        I = !1;
                    S.forEach(e => {
                        "over_free_block_limit" === e.contentKey && (I = !0)
                    });
                    let A = (0, n(682985).K8)(() => (0, n(717274).Km)(e), [e]),
                        C = (0, n(682985).K8)(() => (0, n(801113).ek)(e.device.isElectronMac), [e.device]),
                        T = A && I,
                        M = x - (T ? C : 0),
                        _ = (0, n(960253).I)(() => ({
                            topPaddingWhenHeaderHidden: {
                                width: "100%",
                                marginTop: M
                            },
                            banner: t ? {} : {
                                paddingTop: C
                            }
                        }), [M, t, C]);
                    return h && u ? (0, a.jsxs)(a.Fragment, {
                        children: [m ? (0, a.jsx)(r, {
                            store: m
                        }) : void 0, (0, a.jsx)(n(126767).H, {
                            type: n(644154).A.Y,
                            style: t$.container,
                            className: "home-content",
                            store: b,
                            children: (0, a.jsx)(n(980710).l, {
                                children: (0, a.jsxs)(n(394112).Mx, {
                                    type: t ? "home-phone" : "home",
                                    gap: v,
                                    withBottomPadding: !0,
                                    children: [(0, a.jsxs)(n(394112).Pb, {
                                        style: t$.greeterChatInputGapFix,
                                        children: [T ? (0, a.jsx)("div", {
                                            style: _.banner,
                                            children: (0, a.jsx)(n(429987).i, {})
                                        }) : null, y ? (0, a.jsx)("div", {
                                            children: (0, a.jsx)(n(925733).L, {
                                                marginTop: M,
                                                marginHorizontal: v,
                                                allPanelsLoaded: o,
                                                showWelcomeAnimation: k
                                            })
                                        }) : (0, a.jsx)("div", {
                                            style: _.topPaddingWhenHeaderHidden
                                        })]
                                    }), (0, a.jsx)(tG, {
                                        showWelcomeAnimation: k,
                                        onAllPanelsLoaded: l,
                                        clientStore: f
                                    })]
                                })
                            })
                        })]
                    }) : null
                })
        },
        623290: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                personIcon: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.68 2.37 12.64 15.26",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M10 2.375c-1.137 0-2.054.47-2.674 1.242-.608.757-.9 1.765-.9 2.824s.292 2.066.9 2.824c.62.772 1.537 1.241 2.674 1.241s2.055-.469 2.675-1.241c.608-.758.9-1.766.9-2.824 0-1.059-.292-2.067-.9-2.824-.62-.773-1.538-1.242-2.675-1.242M7.676 6.441c0-.842.233-1.554.624-2.042.38-.473.937-.774 1.7-.774s1.32.301 1.7.774c.391.488.624 1.2.624 2.042s-.233 1.554-.624 2.041c-.38.473-.937.774-1.7.774s-1.32-.3-1.7-.774c-.391-.487-.624-1.2-.624-2.041M10 11.63c-2.7 0-5.101 1.315-6.12 3.305-.361.706-.199 1.421.23 1.923.412.48 1.06.767 1.74.767h8.3c.68 0 1.328-.287 1.74-.767.429-.502.591-1.217.23-1.923-1.02-1.99-3.42-3.305-6.12-3.305m-5.007 3.875c.761-1.488 2.672-2.626 5.007-2.626s4.246 1.138 5.007 2.626c.105.204.07.378-.067.54-.156.182-.448.33-.79.33h-8.3c-.342 0-.634-.148-.79-.33-.138-.162-.172-.336-.067-.54"
                    })
                },
                a = (0, n(104509).wt)("person", i, "default")
        },
        634663: (e, t, n) => {
            n.r(t), n.d(t, {
                circleIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                a = (0, n(104509).wt)("circle", i, "default")
        },
        643551: (e, t, n) => {
            n.d(t, {
                u: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.14 6.87 13.7 6.27",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M15.586 11.003V9.036l-3.902 3.903a.625.625 0 0 1-.884 0L7.735 9.874 4.2 12.967a.625.625 0 1 1-.822-.94l3.975-3.478.097-.071a.626.626 0 0 1 .756.1l3.035 3.034 3.486-3.484H12.71a.625.625 0 0 1 0-1.25h3.5a.626.626 0 0 1 .625.625v3.5a.625.625 0 0 1-1.25 0"
                    })
                },
                a = (0, n(104509).wt)("lineUptrend", i, "default")
        },
        654863: (e, t, n) => {
            n.d(t, {
                x: () => a
            });
            let i = {
                greeting: !0,
                tasks: !1,
                tips: !1,
                templates: !1,
                calendar: !1,
                custom_db: !1,
                suggested: !0,
                trending: !0,
                shortcuts: !0
            };

            function a(e) {
                let t = (null == e ? void 0 : e.getHomeEnabledFeatures()) ? ? {};
                return { ...i,
                    ...t
                }
            }
        },
        666236: (e, t, n) => {
            n.d(t, {
                P: () => i
            });

            function i(e) {
                let {
                    environment: t
                } = e;
                (0, n(79266).navigate)({
                    environment: t,
                    url: n(168962).JZ.marketplace,
                    redirect: !1
                })
            }
        },
        675693: (e, t, n) => {
            async function i(e, t) {
                switch (t) {
                    case "create-page":
                        var i, r = e;
                        let s = (0, n(328765).S)(),
                            l = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!s || !l) throw Error("Cannot create page: missing space or space view store");
                        n(245757).SE({
                            environment: r,
                            spaceStore: s,
                            spaceViewStore: l,
                            type: "private",
                            prepend: !0,
                            outlinerItemFrom: "main_sidebar"
                        });
                        return;
                    case "create-database":
                        return a(e);
                    case "create-meeting":
                        return o(e);
                    case "browse-templates":
                        return i = e, void(0, n(79266).navigate)({
                            environment: i,
                            url: n(168962).JZ.marketplace
                        });
                    default:
                        throw Error(`Unknown shortcut action type: ${t}`)
                }
            }

            function a(e, t) {
                let i = (0, n(328765).S)(),
                    a = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i || !a) throw Error("Cannot create database: missing space or space view store");
                let o = (0, n(351418).my)({
                    environment: e,
                    parentStore: i
                });
                o && (0, n(545586).navigateToBlock)({
                    environment: e,
                    store: o.collectionViewBlockStore,
                    visitType: n(981324).ig.Link,
                    pageVisitSource: n(254656).y8.PersonalHomeShortcuts,
                    redirect: null == t || !t.openInNew || void 0,
                    openInNew: null == t ? void 0 : t.openInNew,
                    makeTabActive: null == t ? void 0 : t.makeTabActive
                })
            }
            async function o(e) {
                let t = (0, n(328765).S)(),
                    i = n(728372).AppStoreSidebarSpaceViewStore.state;
                if (!t || !i) throw Error("Cannot create meeting: missing space or space view store");
                (await n(68067).$.load()).createAndNavigateToTranscriptionBlock({
                    environment: e,
                    from: "home_shortcuts",
                    title: "title_with_event",
                    origin: "home_shortcuts"
                })
            }
            n.r(t), n.d(t, {
                createNewDatabase: () => a,
                executeShortcut: () => i
            }), n(16280)
        },
        681693: (e, t, n) => {
            n.d(t, {
                $L: () => o,
                BZ: () => l,
                EC: () => p,
                EI: () => y,
                E_: () => w,
                Ed: () => c,
                Fq: () => h,
                Lu: () => S,
                Mk: () => u,
                O0: () => b,
                V$: () => x,
                VQ: () => m,
                Xx: () => v,
                Xy: () => s,
                _g: () => f,
                dd: () => d,
                pW: () => r,
                q3: () => a,
                wH: () => i,
                xK: () => j
            });
            let i = 160,
                a = 40,
                o = 40,
                r = 20,
                s = 600,
                l = 270,
                d = 405,
                c = 480,
                u = 500,
                p, m = 16,
                h = 8,
                g = {
                    backdropFilter: "blur(48px)",
                    WebkitBackdropFilter: "blur(48px)"
                },
                f = 4;

            function y() {
                return {
                    icon: n(632079).Tj.icon.secondary,
                    text: n(632079).Tj.text.secondary
                }
            }

            function v() {
                return {
                    width: 48,
                    height: 48,
                    fill: n(632079).Tj.icon.tertiary
                }
            }

            function S({
                isPhone: e
            }) {
                return e ? n(632079).Tj.personalHomeBackgroundPhone : n(632079).Tj.background.primary
            }

            function x({
                isPhone: e,
                themeMode: t
            }) {
                return {
                    zIndex: 1,
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 12,
                    background: n(632079).Tj.home.tile.background,
                    boxShadow: w({
                        isPhone: e,
                        themeMode: t
                    }),
                    ...g
                }
            }

            function b({
                mode: e
            }) {
                switch (e) {
                    case "dark":
                    default:
                        return 0;
                    case "light":
                        return 1
                }
            }

            function w({
                isPhone: e,
                themeMode: t,
                borderOnly: i
            }) {
                if ("dark" === t) return "unset";
                let a = b({
                    mode: t
                });
                return (0, n(381453).oE)([i || e ? void 0 : "0 12px 32px rgba(0, 0, 0, 0.02)", `0 0 0 ${a}px rgba(0, 0, 0, 0.05)`]).join(", ")
            }

            function j(e) {
                let {
                    borderOnly: t
                } = e, i = (0, n(533992).WS)(), a = (0, n(960253).e)();
                return {
                    unhoveredBoxShadow: w({
                        isPhone: i,
                        themeMode: a,
                        borderOnly: t
                    }),
                    hoveredBoxShadow: "light" === a ? "0 12px 32px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0, 0, 0, 0.085)" : n(632079).Tj.homeShadow.card.hovered
                }
            }
        },
        725111: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowInCircleDownIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M6.958 10.446a.625.625 0 0 1 .884 0l1.533 1.533V6.513a.625.625 0 1 1 1.25 0v5.466l1.533-1.533a.625.625 0 1 1 .884.883l-2.6 2.6a.625.625 0 0 1-.884 0l-2.6-2.6a.625.625 0 0 1 0-.883"
                        }), (0, i.jsx)("path", {
                            d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                        })]
                    })
                },
                o = (0, n(104509).wt)("arrowInCircleDown", a, "default")
        },
        726342: (e, t, n) => {
            n.d(t, {
                u: () => i
            });

            function i(e) {
                return e instanceof n(681735).h || e instanceof n(695906).SpaceStore || e instanceof n(970831).B
            }
        },
        729849: (e, t, n) => {
            n.d(t, {
                Gi: () => r,
                yB: () => o
            }), n(898992), n(354520), n(803949);
            var i = () => n(546605);

            function a() {
                return n(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function o() {
                return (0, n(682985).K8)(() => a(), [])
            }
            class r extends i().Store {
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
        745452: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i() {
                var e, t, i, a, o, r, s, l, d, c, u, p, m, h;
                let g = n(728372).AppStoreSidebarSpaceStore.state,
                    f = n(728372).AppStoreSidebarSpaceViewStore.state,
                    y = null == g ? void 0 : g.getSpaceSurveyData(),
                    v = null == f ? void 0 : f.getUserSurveyData();
                return {
                    function: null != v && null != (e = v.function) && e.value ? (0, n(88917).Tj)(null == v || null == (t = v.function) ? void 0 : t.value) : void 0,
                    role: null != v && null != (i = v.role) && i.value ? (0, n(88917).t_)(null == v || null == (a = v.role) ? void 0 : a.value) : void 0,
                    educationRole: null == v || null == (o = v.education_role) ? void 0 : o.value,
                    educationLevel: null == v || null == (r = v.education_level) ? void 0 : r.value,
                    useCases: null != y && null != (s = y.use_cases) && s.value ? (0, n(88917).h0)(null == y || null == (l = y.use_cases) ? void 0 : l.value) : void 0,
                    companySize: null != y && null != (d = y.company_size) && d.value ? (0, n(88917).JE)(null == y || null == (c = y.company_size) ? void 0 : c.value) : void 0,
                    intent: null != y && null != (u = y.intent) && u.value ? (0, n(88917).j9)(null == y || null == (p = y.intent) ? void 0 : p.value) : void 0,
                    categories: null == v || null == (m = v.categories) ? void 0 : m.value,
                    collaborativeIntent: null == y || null == (h = y.collaborative_intent) ? void 0 : h.value
                }
            }
        },
        781036: (e, t, n) => {
            n.d(t, {
                B: () => o
            });
            var i = n(296540),
                a = n(474848);

            function o({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, i.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, n(960831).j)(!0)
                    }), n(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, n(960831).j)(!1), n(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let r = (0, n(960253).I)(() => ({
                    underlay: function(e) {
                        let {
                            backgroundStyle: t
                        } = e;
                        return {
                            position: "absolute",
                            top: 0,
                            insetInlineStart: 0,
                            bottom: 0,
                            insetInlineEnd: 0,
                            background: n(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, a.jsx)("div", {
                    role: "presentation",
                    style: r.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: n(511101).m
                })
            }
        },
        781184: (e, t, n) => {
            n.d(t, {
                w: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    directional: !0,
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.201 5.65a.649.649 0 0 0-.976.561v3.578c0 .5.543.813.976.56l3.067-1.788a.65.65 0 0 0 0-1.122z"
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            d: "M8 1.875a6.125 6.125 0 1 1 0 12.25 6.125 6.125 0 0 1 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0",
                            clipRule: "evenodd"
                        })]
                    })
                },
                o = (0, n(104509).wt)("arrowTriangleRightCircleSmall", a, "small")
        },
        783892: (e, t, n) => {
            n.d(t, {
                C: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 15.25 11.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M9.375 4.125H4.5A2.125 2.125 0 0 0 2.375 6.25v.965h7zm-7 7.41v-3.07h7v3.07zm0 1.25v.965c0 1.174.951 2.125 2.125 2.125h4.875v-3.09zm8.25 0v3.09H15.5a2.125 2.125 0 0 0 2.125-2.125v-.965zm7-1.25v-3.07h-7v3.07zm0-5.285v.965h-7v-3.09H15.5c1.174 0 2.125.951 2.125 2.125"
                    })
                },
                a = (0, n(104509).wt)("viewTableFill", i, "fill")
        },
        790344: (e, t, n) => {
            n.d(t, {
                R: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                    })
                },
                a = (0, n(104509).wt)("square", i, "default")
        },
        801113: (e, t, n) => {
            n.d(t, {
                $C: () => a,
                Hi: () => i,
                Qy: () => o,
                Uu: () => r,
                ek: () => s,
                jq: () => l,
                pz: () => d
            });
            let i = 52,
                a = 45,
                o = 44,
                r = 44;

            function s(e) {
                return e ? r : o
            }

            function l(e) {
                return 2 * s(e)
            }

            function d(e, t, i) {
                return (e && !t ? (0, n(196441).n$)(i) : 12) + 30
            }
        },
        833503: (e, t, n) => {
            n.d(t, {
                s: () => f
            });
            var i = n(296540),
                a = () => n(722371),
                o = () => n(770808),
                r = n(474848);

            function s(e) {
                let {
                    children: t,
                    isSizeTransitionAnimated: a,
                    onSizeChanged: s
                } = e, l = (0, i.useMemo)(() => (0, o().Ve)(e.areaConstraint), [e.areaConstraint]), {
                    preferredSize: d,
                    ref: c
                } = (0, n(218381).e)(l), u = (0, i.useMemo)(() => (function(e) {
                    let {
                        areaConstraint: t,
                        preferredSize: i
                    } = e;
                    return {
                        width: (0, n(627179).qE)({
                            value: (null == i ? void 0 : i.width) ? ? 0,
                            min: t.width.min,
                            max: t.width.max
                        }),
                        height: (0, n(627179).qE)({
                            value: (null == i ? void 0 : i.height) ? ? 0,
                            min: t.height.min,
                            max: t.height.max
                        })
                    }
                })({
                    areaConstraint: l,
                    preferredSize: d
                }), [l, d]), p = function(e) {
                    let {
                        actualSize: t,
                        preferredSize: n,
                        areaConstraint: i
                    } = e, a = "allow" === i.width.scroll, o = "allow" === i.height.scroll, r = a && (null == n ? void 0 : n.width) !== void 0 && t.width < n.width, s = o && (null == n ? void 0 : n.width) !== void 0 && t.height < n.height;
                    return {
                        actualSize: t,
                        constrainedSize: {
                            minWidth: i.width.min,
                            maxWidth: a ? void 0 : i.width.max,
                            minHeight: i.height.min,
                            maxHeight: o ? void 0 : i.height.max
                        },
                        isWidthScrollbarVisible: r,
                        isHeightScrollbarVisible: s
                    }
                }({
                    actualSize: u,
                    preferredSize: d,
                    areaConstraint: l
                }), m = function(e) {
                    let {
                        actualSize: t,
                        areaConstraint: i,
                        isSizeTransitionAnimated: a
                    } = e, r = (0, n(11012).j)(100), {
                        prefersReducedMotion: s
                    } = (0, n(533992).Y0)(), l = (0, o().bv)(i);
                    return (0, n(960253).I)(() => {
                        let e = "allow" === i.width.scroll,
                            n = "allow" === i.height.scroll;
                        return {
                            wrapper: {
                                position: "relative"
                            },
                            content: {
                                height: null == t ? void 0 : t.height,
                                overflowX: e ? "auto" : "clip",
                                overflowY: n ? "auto" : "clip",
                                WebkitOverflowScrolling: "touch",
                                width: null == t ? void 0 : t.width,
                                transition: a && r && !s ? "0.25s ease width, 0.25s ease height" : void 0
                            },
                            measure: {
                                display: "flex",
                                flexDirection: "column",
                                height: l.height ? "fit-content" : "100%",
                                maxHeight: i.height.max,
                                maxWidth: i.width.max,
                                minHeight: i.height.min,
                                minWidth: i.width.min,
                                width: l.width ? "fit-content" : "100%"
                            }
                        }
                    }, [t, i, a, r, s, l])
                }({
                    actualSize: u,
                    areaConstraint: l,
                    isSizeTransitionAnimated: a
                });
                return (0, i.useEffect)(() => {
                    null == s || s(u, d)
                }, [u, s, d]), (0, r.jsx)(n(858803).w.Provider, {
                    value: p,
                    children: (0, r.jsx)("div", {
                        style: m.wrapper,
                        children: (0, r.jsx)("div", {
                            style: m.content,
                            children: (0, r.jsx)("div", {
                                ref: c,
                                className: "measure",
                                style: m.measure,
                                children: t
                            })
                        })
                    })
                })
            }
            n(898992), n(354520), n(581454);
            var l = () => n(381453);

            function d(e) {
                let t = 0,
                    n = Number.MAX_SAFE_INTEGER;
                for (let i of e) {
                    if (!i) continue;
                    let e = (0, o().Vo)(i),
                        a = (0, l().qE)(e.max, 0, Number.MAX_SAFE_INTEGER);
                    t = Math.max(t, (0, l().qE)(e.min, 0, a)), n = Math.min(n, a)
                }
                let i = function(e) {
                    let t;
                    for (let n of e) {
                        let e = null == n ? void 0 : n.scroll;
                        switch (e) {
                            case "disallow":
                                return "disallow";
                            case "allow":
                                t = "allow";
                                break;
                            case void 0:
                                break;
                            default:
                                (0, a().HB)(e)
                        }
                    }
                    return t
                }(e);
                return {
                    type: "range",
                    min: (0, l().qE)(t, 0, n),
                    max: n,
                    scroll: i
                }
            }

            function c(e) {
                let t = e.filter(Boolean);
                return {
                    width: d(t.map(e => null == e ? void 0 : e.width)),
                    height: d(t.map(e => null == e ? void 0 : e.height))
                }
            }

            function u(e) {
                let {
                    minimumOutsideSpacing: t
                } = e, a = (0, n(118872).lW)();
                return (0, i.useMemo)(() => {
                    let e = a.width - t.left - t.right,
                        n = a.height - t.top - t.bottom;
                    return (0, o().Ve)({
                        width: {
                            type: "max",
                            length: e
                        },
                        height: {
                            type: "max",
                            length: n
                        }
                    })
                }, [t.bottom, t.left, t.right, t.top, a.height, a.width])
            }

            function p(e) {
                let t, {
                        allowMenuList: o,
                        allowDismissByEscape: l = !0,
                        anchor: d = "center",
                        animateSizeTransition: p = !0,
                        ariaLabel: m,
                        ariaLabelledBy: h,
                        ariaDescribedBy: g,
                        keyboardAreaPriority: f,
                        children: y,
                        transition: v,
                        showCloseIcon: S,
                        borderRadius: x,
                        backgroundAppearance: b,
                        transitionAppearance: w
                    } = e,
                    [j, k] = (0, i.useState)(!1);
                (0, n(202146).exposeDebugValue)("screenshotMode", () => {
                    k(e => !e)
                });
                let I = function(e) {
                        let {
                            partial: t,
                            defaultLength: n = 0
                        } = e;
                        switch (null == t ? void 0 : t.type) {
                            case "sides":
                                return {
                                    type: "sides",
                                    left: t.left ? ? n,
                                    right: t.right ? ? n,
                                    top: t.top ? ? n,
                                    bottom: t.bottom ? ? n
                                };
                            case "axes":
                                return {
                                    type: "sides",
                                    left: t.horizontal ? ? n,
                                    right: t.horizontal ? ? n,
                                    top: t.vertical ? ? n,
                                    bottom: t.vertical ? ? n
                                };
                            case "all":
                                return {
                                    type: "sides",
                                    left: t.length ? ? n,
                                    right: t.length ? ? n,
                                    top: t.length ? ? n,
                                    bottom: t.length ? ? n
                                };
                            case void 0:
                                return {
                                    type: "sides",
                                    left: n,
                                    right: n,
                                    top: n,
                                    bottom: n
                                };
                            default:
                                (0, a().HB)(t)
                        }
                    }({
                        partial: e.minimumOutsideSpacing,
                        defaultLength: 40
                    }),
                    A = u({
                        minimumOutsideSpacing: I
                    });
                e.areaConstraint && (t = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "desktop"
                }) : e.areaConstraint);
                let C = c([A, t]),
                    T = function(e) {
                        let {
                            screenshotMode: t,
                            anchor: i,
                            minimumOutsideSpacing: o,
                            borderRadius: r
                        } = e;
                        return (0, n(960253).I)(() => {
                            let e, s, l;
                            switch (i) {
                                case "top":
                                    e = "flex-start", s = o.top;
                                    break;
                                case "bottom":
                                    e = "flex-end", l = o.bottom;
                                    break;
                                case "center":
                                case void 0:
                                    e = "center";
                                    break;
                                default:
                                    (0, a().HB)(i)
                            }
                            return {
                                innerStyle: {
                                    borderRadius: r ? ? 12,
                                    display: "flex",
                                    overflow: "hidden",
                                    position: "relative"
                                },
                                outerStyle: {
                                    alignItems: e,
                                    paddingTop: s,
                                    paddingBottom: l
                                },
                                overlay: t ? {
                                    background: n(632079).Tj.background.primary,
                                    transition: "0.2s ease background"
                                } : {},
                                fullScreenOverlay: {
                                    background: n(632079).Tj.background.primary
                                }
                            }
                        }, [i, t, o.bottom, o.top, r])
                    }({
                        screenshotMode: j,
                        anchor: d,
                        minimumOutsideSpacing: I,
                        borderRadius: x
                    }),
                    M = (0, r.jsx)(n(790124).A, {
                        capture: !0,
                        keyboardAreaPriority: f,
                        allowEsc: !0,
                        allowMenuList: o,
                        children: () => (0, r.jsx)(s, {
                            areaConstraint: C,
                            isSizeTransitionAnimated: p,
                            children: (0, r.jsx)(n(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? y({
                                    displayMode: "desktop",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    });
                return (0, r.jsx)(n(19187).e.Provider, {
                    value: v.onDismiss,
                    children: (0, r.jsx)(n(556809).a, {
                        ariaDescribedBy: g,
                        ariaLabel: m,
                        ariaLabelledBy: h,
                        backgroundStyle: "full-screen" === w ? T.fullScreenOverlay : T.overlay,
                        innerStyle: T.innerStyle,
                        isWaxPaper: "waxPaper" === b,
                        isWash: "wash" === b,
                        transitionAppearance: w,
                        onClosed: v.onClosed,
                        onDismiss: l ? v.onDismiss : void 0,
                        open: v.isOpen,
                        preventHideChildrenWhileOpening: !0,
                        children: M,
                        showCloseIcon: S,
                        style: T.outerStyle,
                        className: e.className
                    })
                })
            }
            let m = {
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto"
                },
                h = {
                    height: "var(--full-viewport-height)"
                };

            function g(e) {
                var t, a, o;
                let l, d, {
                        allowDismissByEscape: p = !0,
                        animateSizeTransition: g = !0,
                        ariaLabel: f,
                        ariaLabelledBy: y,
                        ariaDescribedBy: v,
                        children: S,
                        transition: x
                    } = e,
                    b = u({
                        minimumOutsideSpacing: {
                            type: "sides",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0
                        }
                    }),
                    {
                        isTablet: w
                    } = (0, n(533992).Y0)();
                null != (t = e.deprecatedCompatibilityOverrides) && t.tabletsUsePhoneDisplayMode && w && (l = {
                    width: {
                        type: "fixed",
                        length: n(182718).bJ
                    }
                }), e.areaConstraint && (d = "function" == typeof e.areaConstraint ? e.areaConstraint({
                    displayMode: "phone"
                }) : e.areaConstraint);
                let j = c([b, l, {
                        width: {
                            type: "fill",
                            scroll: null == (a = d) || null == (a = a.width) ? void 0 : a.scroll
                        },
                        height: null == (o = d) ? void 0 : o.height
                    }]),
                    k = (0, i.useCallback)(() => (0, r.jsx)(n(790124).A, {
                        capture: !0,
                        allowEsc: !0,
                        children: () => (0, r.jsx)(s, {
                            areaConstraint: j,
                            isSizeTransitionAnimated: g,
                            children: (0, r.jsx)(n(858803).w.Consumer, {
                                children: ({
                                    constrainedSize: e,
                                    actualSize: t
                                }) => e ? S({
                                    displayMode: "phone",
                                    size: t,
                                    sizeRange: e
                                }) : null
                            })
                        })
                    }), [j, g, S]);
                return (0, r.jsx)(n(19187).e.Provider, {
                    value: x.onDismiss,
                    children: (0, r.jsx)(n(182718).zD, {
                        ariaLabel: f,
                        ariaLabelledBy: y,
                        ariaDescribedBy: v,
                        open: x.isOpen,
                        popupType: n(423291).n.BottomSheet,
                        onDismiss: p ? x.onDismiss : void 0,
                        onClosed: x.onClosed,
                        slideUpWrapStyle: h,
                        style: m,
                        content: k,
                        className: e.className,
                        bottomSheetBackgroundColor: "elevated"
                    })
                })
            }

            function f(e) {
                let {
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    deprecatedCompatibilityOverrides: s,
                    startClosingOnDismiss: l
                } = e, d = function(e) {
                    let {
                        isPhone: t
                    } = (0, n(533992).Y0)();
                    return null != e && e.tabletsUsePhoneDisplayMode ? n(986939).A.isMobile ? "phone" : "desktop" : t ? "phone" : "desktop"
                }(s), c = (0, n(245372).j)({
                    isOpen: t,
                    onClosed: i,
                    onDismiss: o,
                    startClosingOnDismiss: l
                });
                if (!c.shouldRender) return null;
                switch (d) {
                    case "phone":
                        return (0, r.jsx)(g, { ...e,
                            transition: c
                        });
                    case "desktop":
                        return (0, r.jsx)(p, { ...e,
                            transition: c
                        });
                    default:
                        (0, a().HB)(d)
                }
            }
        },
        856400: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => a,
                templatesFillIcon: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.71 3.25 14.58 13.51",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "m14.636 8.765 1.003 1.737a.93.93 0 0 0 .355-.73v-5.59a.934.934 0 0 0-.932-.932H9.239a.934.934 0 0 0-.932.932v5.6c0 .502.41.921.923.921h.752L11.1 8.765q.048-.083.109-.155a2.035 2.035 0 0 1 3.425.152z"
                        }), (0, i.jsx)("path", {
                            d: "M9.347 11.803H9.23a2.024 2.024 0 0 1-2.022-2.022V6.284a4.195 4.195 0 1 0 .538 8.295zm2.706-2.488L8.57 15.353a.931.931 0 0 0 .81 1.397h6.978a.934.934 0 0 0 .811-1.398l-3.484-6.037a.936.936 0 0 0-1.622 0z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("templatesFill", a, "fill")
        },
        862868: (e, t, n) => {
            n.d(t, {
                a: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.12 3.37 11.75 9.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M4 3.375c-1.036 0-1.875.84-1.875 1.875v5.5c0 1.036.84 1.875 1.875 1.875h8c1.036 0 1.875-.84 1.875-1.875v-5.5c0-1.036-.84-1.875-1.875-1.875zM3.375 5.25c0-.345.28-.625.625-.625h3.375v1.417h-4zm5.25.792V4.625H12c.345 0 .625.28.625.625v.792zm0 2.666V7.292h4v1.416zm-5.25 0V7.292h4v1.416zm0 2.042v-.792h4v1.417H4a.625.625 0 0 1-.625-.625m5.25.625V9.958h4v.792c0 .345-.28.625-.625.625z"
                    })
                },
                a = (0, n(104509).wt)("viewTableSmall", i, "small")
        },
        864011: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {}
            }
            let o = new a
        },
        870819: (e, t, n) => {
            n.d(t, {
                Lq: () => a,
                QG: () => c,
                VN: () => s,
                _O: () => o,
                de: () => l,
                dn: () => r,
                lK: () => i,
                vY: () => d
            });
            let i = 28,
                a = 44,
                o = 144,
                r = 144,
                s = .1;

            function l({
                dominantColorFromIcon: e,
                height: t,
                width: i
            }) {
                return {
                    container: {
                        position: "relative",
                        width: i,
                        height: t,
                        display: "flex",
                        justifyContent: "stretch"
                    },
                    coverAndIconContainer: {
                        position: "relative",
                        width: i,
                        marginBottom: 16
                    },
                    emptyGalleryCoverStyle: {
                        border: "unset",
                        background: e ? (0, n(650342).X4)(e, s) : n(632079).Tj.home.cards.coverPhoto.base
                    }
                }
            }
            let d = {
                    titleWrap: {
                        width: "100%",
                        minHeight: 72,
                        paddingTop: 10,
                        paddingBottom: 12,
                        paddingInlineStart: 16,
                        paddingInlineEnd: 16,
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        gap: 10,
                        flexGrow: 1
                    },
                    titleText: {
                        fontWeight: n(699422).Wy.medium,
                        fontSize: n(699422).J.UIRegular.desktop,
                        lineHeight: "normal",
                        width: "auto",
                        whiteSpace: "pre-wrap",
                        ...(0, n(418676).pA)(2)
                    }
                },
                c = {
                    position: "absolute",
                    bottom: -i / 2,
                    insetInlineStart: 16,
                    width: i,
                    height: i,
                    display: "flex",
                    justifyContent: "flex-start"
                }
        },
        885822: (e, t, n) => {
            n.r(t), n.d(t, {
                addSquareRoundedIcon: () => o,
                iconDefinition: () => a
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M10 6.375c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("addSquareRounded", a, "default")
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
                    useAmpersand: o
                } = t || {};
                if (0 === e.length) return "";
                let r = e[0];
                if (1 === e.length) return r;
                let s = e[1];
                if (2 === e.length) return o ? n(962299).A.formatMessage(i.twoItemsWithAmpersand, {
                    item1: r,
                    item2: s
                }) : n(962299).A.formatMessage(i.twoItems, {
                    item1: r,
                    item2: s
                });
                let l = e.length - 1;
                return o ? a ? n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersandAndRemoveComma, {
                    item1: r,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItemsWithAmpersand, {
                    item1: r,
                    numberOfOther: l
                }) : n(962299).A.formatMessage(i.threeOrMoreItems, {
                    item1: r,
                    numberOfOther: l
                })
            }
        },
        897638: (e, t, n) => {
            n.d(t, {
                N: () => o
            });
            var i = n(296540);
            let a = new(n(815048)).O2("notionCalendarLogos", async () => n.e(94366).then(n.bind(n, 916243)));

            function o(e) {
                let t = function() {
                    let [e, t] = (0, i.useState)(new Date), a = (0, i.useRef)();
                    return (0, i.useEffect)(() => {
                        let i = () => {
                                let n = new Date;
                                n.getDate() !== e.getDate() && t(n)
                            },
                            o = new Date,
                            r = new Date(o);
                        r.setHours(o.getHours() + 1), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0);
                        let s = setTimeout(() => {
                            i(), a.current = window.setInterval(i, n(695216).pT)
                        }, r.getTime() - o.getTime());
                        return () => {
                            clearTimeout(s), clearInterval(a.current)
                        }
                    }, [e]), e
                }();
                return function({
                    dateNumber: e,
                    calendarDateIcons: t
                }) {
                    let i = n(557737).K;
                    if (e < 1 || e > 31) return i;
                    let a = e < 10 ? `0${e}` : `${e}`,
                        o = `calendarDate${a}Icon`;
                    return "resolved" !== t.status ? i : t.value[o]
                }({
                    dateNumber: e ? ? t.getDate(),
                    calendarDateIcons: (0, n(815048).fJ)(a)
                })
            }
        },
        924171: (e, t, n) => {
            n.d(t, {
                V: () => o
            }), n(296540);
            var i = n(474848);
            let a = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.7 2.19 14.6 11.6",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M3.142 2.332a.55.55 0 0 1 .695-.017l.08.077.227.264.008.01 8.773 10.235.056.082a.551.551 0 0 1-.818.701l-.081-.076-1.18-1.376A8.5 8.5 0 0 1 8 12.74c-3.027 0-5.685-1.569-7.026-3.911L.848 8.6a1.29 1.29 0 0 1 0-1.199l.126-.228c.705-1.233 1.776-2.251 3.073-2.94l-.965-1.125-.063-.091a.55.55 0 0 1 .123-.685m1.742 2.879c-1.21.58-2.198 1.487-2.825 2.582l-.104.19a.04.04 0 0 0 0 .035l.104.19c1.108 1.935 3.34 3.281 5.941 3.281.706 0 1.385-.1 2.022-.284l-.772-.901c-.372.202-.797.32-1.25.32l-.269-.014A2.626 2.626 0 0 1 5.39 8.267l-.014-.269c0-.597.201-1.147.537-1.588zm2.241 2.787c0 .484.392.876.875.876l.022-.002-.883-1.03a1 1 0 0 0-.014.156M8 3.26c3.125 0 5.857 1.673 7.152 4.141l.065.144c.11.293.11.617 0 .91l-.065.145a7.5 7.5 0 0 1-2.256 2.577l-.817-.953a6.3 6.3 0 0 0 1.966-2.206L14.05 8l-.005-.018c-1.069-2.036-3.36-3.47-6.045-3.47q-.397 0-.781.04l-.955-1.115A8.6 8.6 0 0 1 8 3.261"
                        }), (0, i.jsx)("path", {
                            d: "M8 5.372a2.626 2.626 0 0 1 2.625 2.626l-.014.269q-.011.105-.031.208L7.923 5.374z"
                        })]
                    })
                },
                o = (0, n(104509).wt)("eyeSlashSmall", a, "small")
        },
        925733: (e, t, n) => {
            n.d(t, {
                L: () => f
            });
            var i = n(296540),
                a = () => n(546605);
            class o extends a().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let r = new o;

            function s({
                environment: e
            }) {
                r.reset(), (0, n(525779).clear)({
                    environment: e
                })
            }
            var l = n(474848);
            let d = {
                menuContainer: {
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingInlineStart: 14,
                    paddingInlineEnd: 14
                },
                inputContainer: {
                    display: "flex",
                    alignItems: "center",
                    color: n(632079).Tj.text.primary,
                    fontSize: n(418676).vQ
                }
            };

            function c({
                userSettingsStore: e
            }) {
                let t, [a, o] = (0, i.useState)(!1),
                    u = (0, n(533992).v3)(),
                    p = (0, n(109939).tz)(),
                    m = (0, n(682985).K8)(() => {
                        var e;
                        return null == (e = n(728372).AppStoreCurrentUserStore.state) ? void 0 : e.getDisplayName(p)
                    }, [p]),
                    h = (0, n(533992).WS)(),
                    g = (0, i.useCallback)(() => o(!0), []),
                    f = (0, i.useCallback)(() => o(!1), []),
                    y = (0, i.useCallback)(() => s({
                        environment: u
                    }), [u]),
                    v = (0, i.useCallback)(() => (function({
                        environment: e
                    }) {
                        let t = r.state;
                        if (!t.open) return;
                        let i = t.originalNickname;
                        s({
                            environment: e
                        });
                        let a = n(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!a) return;
                        let o = a.getNicknameStore();
                        (0, n(377796).createAndCommit)({
                            environment: e,
                            userAction: "nicknameMenuActions.revertToOldNickname",
                            canUndo: !0,
                            cellTarget: "main",
                            perform: t => {
                                n(41403).R9({
                                    environment: e,
                                    store: o,
                                    value: i,
                                    transaction: t
                                })
                            }
                        })
                    })({
                        environment: u
                    }), [u]),
                    S = (0, n(960253).I)(() => ({
                        input: {
                            display: "block",
                            flexGrow: 1,
                            fontSize: 14,
                            lineHeight: "20px",
                            width: "100%",
                            borderRadius: 4,
                            boxShadow: a ? n(632079).Tj.buttonBlueFocusRing : `${n(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                            background: n(632079).Tj.background.secondaryTranslucent,
                            cursor: "text",
                            position: "relative",
                            marginTop: 8,
                            paddingTop: 4,
                            paddingBottom: 4,
                            paddingInlineStart: 10,
                            paddingInlineEnd: 10
                        }
                    }), [a]),
                    x = (0, n(682985).K8)(() => e.getSettingsStore().getKeyStore("nickname"), [e]);
                return t = h ? {
                    menuType: n(649476).gu.ActionSheet
                } : {
                    menuType: n(649476).gu.Popup,
                    width: 300
                }, (0, l.jsx)(n(747369).A, { ...t,
                    children: (0, l.jsxs)("div", {
                        style: d.menuContainer,
                        children: [(0, l.jsx)(n(324489).V, {
                            isSecondaryColor: !0,
                            children: (0, l.jsx)(n(109939).sA, {
                                id: "personalHomeRenamePopup.title",
                                defaultMessage: "Edit nickname"
                            })
                        }), (0, l.jsx)("div", {
                            style: d.inputContainer,
                            children: (0, l.jsx)(n(53373).A, {
                                style: S.input,
                                store: x,
                                disabled: !1,
                                onEsc: v,
                                onFocus: g,
                                onBlur: f,
                                onEnter: y,
                                placeholder: m,
                                pasteBehavior: "inline",
                                disableEmojiCommands: !1,
                                disableStyleAnnotations: !1,
                                disableInsertedDeletedAnnotations: !1,
                                disableSlashCommands: !0,
                                disableComment: !0,
                                disableMentions: !0,
                                disableDrag: !0,
                                disableEmbedMenu: !0,
                                disableEquationInteraction: !0,
                                disableMobileActionBar: !0,
                                disableShiftEnter: !0,
                                disableSelectAllBlocks: !0,
                                disableSelectionDrag: !0,
                                inPageFind: n(831719).Os.none
                            })
                        })]
                    })
                })
            }
            let u = i.memo(function({
                    origin: e
                }) {
                    let t = (0, n(533992).v3)(),
                        i = (0, n(682985).K8)(() => r.state.open, []),
                        a = (0, n(682985).O$)(n(728372).AppStoreCurrentUserSettingsStore),
                        o = (0, n(533992).WS)();
                    return a ? (0, l.jsx)(n(182718).zD, {
                        popupType: o ? n(423291).n.SlideUp : n(423291).n.Popup,
                        open: i,
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "center",
                        originGap: 4,
                        onDismiss: () => s({
                            environment: t
                        }),
                        content: () => (0, l.jsx)(c, {
                            userSettingsStore: a
                        }),
                        children: e
                    }) : null
                }),
                p = i.memo(function({
                    nickname: e
                }) {
                    var t;
                    let a = (0, n(533992).v3)(),
                        o = (0, n(960253).e)(),
                        s = i.useRef(null),
                        d = i.useRef();
                    d.current = null == (t = s.current) ? void 0 : t.getBoundingClientRect();
                    let c = (0, n(682985).K8)(() => r.state.open, []),
                        p = (0, n(682985).K8)(() => {
                            var e;
                            return null == (e = n(728372).AppStoreCurrentUserSettingsStore.state) ? void 0 : e.getNicknameStore()
                        }, []),
                        m = (0, n(682985).K8)(() => {
                            var t;
                            let i = n(728372).AppStoreCurrentUserSettingsStore.state,
                                r = null == (t = (0, n(328765).S)()) ? void 0 : t.id;
                            if (i && r) return (0, n(536614).S5)({
                                environment: a,
                                textValue: e && r ? {
                                    value: e,
                                    spaceId: r
                                } : void 0,
                                parentStore: i,
                                disableLinks: !0,
                                disableHover: !1,
                                disableStyleAnnotations: !1,
                                disableInsertedDeletedAnnotations: !1,
                                disableDateStyleAnnotations: !1,
                                disableSuggestionAnnotations: !1,
                                disabled: !0,
                                theme: n(632079).Tj,
                                themeMode: o,
                                emojiType: (0, n(591404).FN)(a),
                                katex: void 0,
                                formulaValueTypes: [],
                                stopLinkPropagation: !0
                            })
                        }, [a, e, o], {
                            silenceRerenderDefender: !0
                        }),
                        h = (0, i.useMemo)(() => ({
                            height: "100%",
                            flexShrink: 1,
                            fontSize: "inherit",
                            fontWeight: "inherit",
                            display: "flow",
                            paddingTop: 2,
                            paddingBottom: 2,
                            marginInlineStart: -6,
                            marginInlineEnd: -6,
                            marginTop: -2,
                            marginBottom: 2,
                            paddingInlineStart: 6,
                            paddingInlineEnd: 6,
                            ...n(699422).RC,
                            color: void 0,
                            lineHeight: void 0
                        }), []),
                        g = (0, n(960253).I)(() => ({
                            hiddenButton: { ...h,
                                width: 0,
                                overflow: void 0,
                                pointerEvents: "none",
                                color: "transparent",
                                marginInlineStart: 0,
                                marginInlineEnd: 0,
                                paddingInlineStart: 0,
                                paddingInlineEnd: 0
                            },
                            visibleButton: { ...h,
                                textShadow: "none"
                            }
                        }), [h]);
                    return p ? (0, l.jsx)(u, {
                        origin: (0, l.jsx)(n(51831).m, {
                            originRect: d.current,
                            placement: "bottom",
                            content: () => (0, l.jsx)(n(109939).sA, {
                                id: "personalHomeHeader.changeNameTooltip",
                                defaultMessage: "Edit nickname"
                            }),
                            children: e => (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(n(988022).p, {
                                    hovered: !1,
                                    style: g.hiddenButton,
                                    children: m
                                }), (0, l.jsx)(n(988022).p, { ...e,
                                    ref: s,
                                    hovered: c,
                                    style: g.visibleButton,
                                    onClick: () => (function({
                                        originalNicknameStore: e
                                    }) {
                                        (0, n(627974).t)({
                                            store: e,
                                            selection: {
                                                startIndex: 0,
                                                endIndex: (0, n(247438).qAZ)(e.getValue()).length
                                            }
                                        }), r.setState({
                                            open: !0,
                                            originalNickname: e.getValue()
                                        })
                                    })({
                                        originalNicknameStore: p
                                    }),
                                    onMouseEnter: t => {
                                        var i;
                                        null == (i = e.onMouseEnter) || i.call(e, t), n(79423).A.setState({
                                            isHovered: !1
                                        })
                                    },
                                    children: m
                                })]
                            })
                        })
                    }) : null
                }),
                m = {
                    display: "flex",
                    pointerEvents: "all",
                    maxWidth: "100%"
                },
                h = {
                    flexShrink: 0
                };

            function g(e) {
                return !!(0, n(722371).O9)(e) && 0 !== (0, n(247438).qAZ)(e).length
            }
            let f = i.memo(function({
                marginTop: e,
                marginHorizontal: t,
                allPanelsLoaded: a,
                showWelcomeAnimation: o
            }) {
                let r, [s, d] = i.useState(!1),
                    c = (0, n(533992).WS)(),
                    {
                        name: u,
                        loaded: f
                    } = (0, n(682985).K8)(() => (function({
                        currentUserSettingsStore: e
                    }) {
                        if (!(null != e && e.isReady())) return {
                            name: void 0,
                            loaded: !1
                        };
                        let t = e.getNickname();
                        return t && g(t) ? {
                            name: t,
                            loaded: !0
                        } : {
                            name: void 0,
                            loaded: !0
                        }
                    })({
                        currentUserSettingsStore: n(728372).AppStoreCurrentUserSettingsStore.state
                    }), []),
                    y = (0, n(682985).K8)(() => {
                        var e;
                        return (null == (e = (0, n(328765).S)()) ? void 0 : e.isReady()) ? ? !1
                    }, []);
                (0, i.useEffect)(() => {
                    let e = setTimeout(() => {
                        o && !s && d(!0)
                    }, 500);
                    return () => {
                        clearTimeout(e)
                    }
                }, [s, o]);
                let v = function({
                        timeOfDay: e,
                        name: t
                    }) {
                        return "morning" === e ? t ? (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodMorningUserName",
                            defaultMessage: "<NoShrink>Good morning,</NoShrink>{nbsp}{userName}",
                            values: {
                                nbsp: (0, l.jsx)(l.Fragment, {
                                    children: " "
                                }),
                                NoShrink: e => (0, l.jsx)("span", {
                                    style: h,
                                    children: e
                                }),
                                userName: t
                            }
                        }) : (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodMorningNoUserName",
                            defaultMessage: "Good morning"
                        }) : "afternoon" === e ? t ? (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodAfternoonUserName",
                            defaultMessage: "<NoShrink>Good afternoon,</NoShrink>{nbsp}{userName}",
                            values: {
                                nbsp: (0, l.jsx)(l.Fragment, {
                                    children: " "
                                }),
                                NoShrink: e => (0, l.jsx)("span", {
                                    style: h,
                                    children: e
                                }),
                                userName: t
                            }
                        }) : (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodAfternoonNoUserName",
                            defaultMessage: "Good afternoon"
                        }) : "evening" === e ? t ? (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodEveningUserName",
                            defaultMessage: "<NoShrink>Good evening,</NoShrink>{nbsp}{userName}",
                            values: {
                                nbsp: (0, l.jsx)(l.Fragment, {
                                    children: " "
                                }),
                                NoShrink: e => (0, l.jsx)("span", {
                                    style: h,
                                    children: e
                                }),
                                userName: t
                            }
                        }) : (0, l.jsx)(n(109939).sA, {
                            id: "personalHomeHeader.goodEveningNoUserName",
                            defaultMessage: "Good evening"
                        }) : void(0, n(722371).HB)(e)
                    }({
                        timeOfDay: (r = n(906745).DateTime.now().hour) >= 19 || r < 2 ? "evening" : r < 12 ? "morning" : "afternoon",
                        name: g(u) ? (0, l.jsx)(p, {
                            nickname: u
                        }) : void 0
                    }),
                    S = (0, l.jsx)(n(109939).sA, {
                        id: "personalHomeHeader.initialWelcomeText",
                        defaultMessage: "Welcome home"
                    }),
                    x = (0, n(960253).I)(() => {
                        let i = {
                                width: "100%",
                                height: "100%",
                                marginTop: e,
                                zIndex: 1,
                                paddingInlineStart: 2 * t,
                                paddingInlineEnd: 2 * t,
                                pointerEvents: "none",
                                transition: "all 0.5s ease-in-out 2.75s",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            r = o && !a;
                        return {
                            container: {
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                position: "relative",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                opacity: s || !o ? 1 : 0,
                                transition: "opacity 0.5s ease-in-out",
                                paddingTop: 16
                            },
                            greetingTextContainer: { ...i,
                                opacity: +!r,
                                transform: r ? "translateY(12px)" : "translateY(0px)"
                            },
                            welcomeTextContainer: { ...i,
                                opacity: +!!r,
                                transform: r ? "translateY(0px)" : "translateY(-12px)",
                                position: "absolute"
                            },
                            headerText: {
                                width: "100%",
                                height: "100%",
                                fontSize: c ? 24 : 30,
                                lineHeight: 1.2,
                                fontWeight: n(699422).Wy.semibold,
                                color: n(632079).Tj.text.primary,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }
                    }, [e, t, a, o, s, c]),
                    b = (0, l.jsx)("div", {
                        style: x.headerText,
                        children: (0, l.jsx)("span", {
                            style: m,
                            children: v
                        })
                    }),
                    w = (0, l.jsx)(n(4458).VP, {
                        children: (0, l.jsx)("div", {
                            style: x.headerText,
                            children: (0, l.jsx)("span", {
                                style: m,
                                children: v
                            })
                        })
                    }),
                    j = (0, l.jsx)("div", {
                        style: x.greetingTextContainer,
                        children: c ? w : b
                    }),
                    k = (0, l.jsx)("div", {
                        style: x.welcomeTextContainer,
                        children: (0, l.jsx)("div", {
                            style: x.headerText,
                            children: S
                        })
                    });
                return f && y ? (0, l.jsxs)("div", {
                    style: x.container,
                    onMouseEnter: () => n(79423).A.setState({
                        isHovered: !0
                    }),
                    onMouseLeave: () => n(79423).A.setState({
                        isHovered: !1
                    }),
                    children: [j, k]
                }) : null
            })
        },
        945884: (e, t, n) => {
            n.r(t), n.d(t, {
                addSquareRoundedFillIcon: () => a,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M5.25 3.125A2.125 2.125 0 0 0 3.125 5.25v9.5c0 1.174.951 2.125 2.125 2.125h9.5a2.125 2.125 0 0 0 2.125-2.125v-9.5a2.125 2.125 0 0 0-2.125-2.125zM10 6.375c.345 0 .625.28.625.625v2.375H13a.625.625 0 1 1 0 1.25h-2.375V13a.625.625 0 1 1-1.25 0v-2.375H7a.625.625 0 1 1 0-1.25h2.375V7c0-.345.28-.625.625-.625"
                    })
                },
                a = (0, n(104509).wt)("addSquareRoundedFill", i, "fill")
        },
        947449: (e, t, n) => {
            n.d(t, {
                o: () => a
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.76 13.75",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.75 3.125c.345 0 .625.28.625.625v7.097l3.016-2.639a.625.625 0 0 1 .854.028l3.036 3.037 3.485-3.485H12.75a.625.625 0 1 1 0-1.25h3.5c.345 0 .625.28.625.625v3.5a.625.625 0 1 1-1.25 0V8.696l-3.902 3.902a.625.625 0 0 1-.884 0L7.774 9.534l-3.399 2.974v2.242c0 .483.392.875.875.875h11a.625.625 0 1 1 0 1.25h-11a2.125 2.125 0 0 1-2.125-2.125v-11c0-.345.28-.625.625-.625"
                    })
                },
                a = (0, n(104509).wt)("chartLineUptrend", i, "default")
        },
        960831: (e, t, n) => {
            n.d(t, {
                j: () => i
            });

            function i(e) {
                var t;
                return null === n(775657).electronApi || void 0 === n(775657).electronApi || null == (t = n(775657).electronApi.setOverlay) ? void 0 : t.call(n(775657).electronApi, e)
            }
        },
        968107: (e, t, n) => {
            n.d(t, {
                y: () => a
            }), n(296540);
            var i = n(474848);

            function a({
                dateNumber: e,
                ...t
            }) {
                let o = (0, n(897638).N)(e);
                return (0, i.jsx)(n(16275).I, {
                    icon: o,
                    size: "default",
                    ...t
                })
            }
        },
        974024: (e, t, n) => {
            n.d(t, {
                f: () => i
            });
            let i = new(n(815048)).O2("pageCovers", async () => {
                let {
                    pageCovers: e
                } = await n.e(40198).then(n.bind(n, 123367));
                return e
            })
        },
        979719: (e, t, n) => {
            n.d(t, {
                A: () => o
            });
            var i = () => n(546605);
            class a extends i().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let o = new a
        }
    }
]);