"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [16922, 21753, 23644, 30673, 31190, 31426, 32626, 34420, 37342, 48486, 56809, 64696, 75215, 76135, 76298, 84444, 89563, 92883], {
        1249: (e, t, a) => {
            a.d(t, {
                g: () => n
            });

            function n(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        2009: (e, t, a) => {
            a.d(t, {
                w: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        asyncModals: []
                    }
                }
            }
            let i = new r
        },
        6260: (e, t, a) => {
            a.d(t, {
                Z: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.12 16.74 14.99",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M4.5 4.125A2.125 2.125 0 0 0 2.375 6.25v7.5c0 1.174.951 2.125 2.125 2.125h5.702a4.7 4.7 0 0 1-.2-1.25H4.5a.875.875 0 0 1-.875-.875V7.5h12.75v2.535a4.7 4.7 0 0 1 1.25.684V6.25A2.125 2.125 0 0 0 15.5 4.125zm.758 1.684a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0m1.375-.625a.625.625 0 1 1 0 1.25.625.625 0 0 1 0-1.25m2.625.625a.625.625 0 1 1-1.25 0 .625.625 0 0 1 1.25 0"
                        }), (0, n.jsx)("path", {
                            d: "M17.7 16.607a3.625 3.625 0 1 0-.893.878l1.223 1.427a.625.625 0 0 0 .94-.823zM12.375 14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0"
                        })]
                    })
                },
                i = (0, a(104509).wt)("browserMagnifyingGlass", r, "default")
        },
        6779: (e, t, a) => {
            a.d(t, {
                s: () => n
            });

            function n() {
                return a(205885).A.state.online
            }
        },
        8779: (e, t, a) => {
            e.exports = a.p + "95f76471471a22df.png"
        },
        13717: (e, t, a) => {
            function n(e) {
                let {
                    spaceStore: t,
                    groupId: n
                } = e;
                return a(398652).C.createChildStore(t, (0, a(659341).S4)({
                    spacePermissionGroupId: n,
                    spaceId: t.id
                }))
            }

            function r(e) {
                let {
                    spaceStore: t,
                    groupId: n,
                    userId: r
                } = e;
                return a(291886).m.createChildStore(t, (0, a(867863).BZ)({
                    spacePermissionGroupId: n,
                    spaceId: t.id,
                    userId: r
                }))
            }
            a.d(t, {
                A: () => r,
                E: () => n
            })
        },
        18416: (e, t, a) => {
            a.d(t, {
                U: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        shouldOpenAgentSidebar: !1
                    }
                }
                getShouldOpenAgentSidebar() {
                    return this.state.shouldOpenAgentSidebar
                }
                setShouldOpenAgentSidebar() {
                    this.setState({ ...this.state,
                        shouldOpenAgentSidebar: !0
                    })
                }
                clearShouldOpenAgentSidebar() {
                    this.setState({ ...this.state,
                        shouldOpenAgentSidebar: !1
                    })
                }
            }
            let i = new r
        },
        29244: (e, t, a) => {
            a.d(t, {
                o: () => r
            });
            let n = new(a(815048)).O2("PageError", async () => Promise.all([a.e(75134), a.e(49806), a.e(79974), a.e(35837), a.e(33503), a.e(84444), a.e(18406), a.e(97615), a.e(74931), a.e(82628), a.e(66960)]).then(a.bind(a, 705506))),
                r = (0, a(815048)._h)(n, e => e.PageError)
        },
        31256: (e, t, a) => {
            a.d(t, {
                J: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                marginTop: 12,
                marginBottom: 4
            };

            function i() {
                let e = (0, a(533992).v3)();
                return (0, n.jsx)(a(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, n.jsx)(a(109939).sA, {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    }),
                    byline: (0, n.jsx)(a(109939).sA, {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    }),
                    item: (0, n.jsx)(a(548436).A, {
                        size: "lg",
                        style: r,
                        onClick: () => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "change_language_button_clicked",
                                    eventProperties: {}
                                }
                            }), e.mobileNative && e.mobileNative.openAppLanguageSettings()
                        },
                        iconLeading: a(695142).arrowDiagonalUpRightFillIcon,
                        children: (0, n.jsx)(a(109939).sA, {
                            id: "languageSettings.languageSection.androidChangeLanguageButton",
                            defaultMessage: "Change Language"
                        })
                    })
                })
            }
        },
        31461: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        33529: (e, t, a) => {
            a.d(t, {
                y: () => n
            }), a(898992), a(672577);

            function n(e) {
                var t;
                let {
                    actionModels: n,
                    id: r
                } = e, i = (0, a(297493).y5)(r), o = "action" === i.source ? n.find(e => e.id === i.action_id) : void 0;
                return {
                    automationValueInfo: i,
                    collectionPointer: (0, a(722371).O9)(o) && o.isType("create_page") ? null == (t = o.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: o
                }
            }
        },
        33918: (e, t, a) => {
            a.d(t, {
                G: () => n
            });

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "delete_property",
                        eventProperties: t
                    }
                })
            }
        },
        44027: (e, t, a) => {
            function n(e) {
                let {
                    businessTrialOffer: t,
                    billingTime: n,
                    modalLastShownAt: r,
                    modalShownTimes: i
                } = e;
                return !!(0, a(383378).V9)(t, n) && void 0 !== r && void 0 !== i && (!(r > 0) || !(n.diff(a(906745).DateTime.fromMillis(r), "days").days >= a(118999).ls)) && (i ? ? 0) >= a(118999).TY
            }

            function r(e, t = (0, a(192159).DS)(e)) {
                if (!e) return;
                let n = (0, a(192159).i5)(e);
                if (n) return Math.ceil(n.toUTC().diff(t.toUTC(), "days").days)
            }

            function i(e, t) {
                let n = a(906745).DateTime.fromMillis(e.endDateMs).toUTC();
                return (t ? ? a(906745).DateTime.now()).toUTC().hasSame(n, "day")
            }

            function o(e) {
                let t = (0, a(278662).Jd)(e);
                if (t) return (0, a(875472).Vm)(t)
            }

            function l(e) {
                let t = (0, a(278662).Jd)(e);
                if (t) return (0, a(875472).kd)(t)
            }

            function s(e) {
                let t = a(118999).Tu[e];
                if (void 0 === t) throw Error(`Unknown trial length: ${e}`);
                return t
            }

            function d(e) {
                return Math.round(e / 30)
            }

            function c({
                billingData: e
            }) {
                if (!(0, a(192159).TB)(e)) return !1;
                if ((0, a(192159).HY)(e)) {
                    var t;
                    return (null == e ? void 0 : e.type) === "admin" && (null == (t = e.trial) ? void 0 : t.autoConvert) === !0
                }
                return (null == e ? void 0 : e.type) === "admin" && (0, a(722371).O9)(null == e ? void 0 : e.paymentMethod)
            }

            function u(e) {
                return (0, a(192159).oD)(e) && (0, a(717274).pX)()
            }

            function p(e) {
                return (0, a(722371).Xk)(["multi_search_scope_menu", "ai_workspace_settings_connector_cards", "business_trial_ai_connectors_upsell", "ai_corner_chat_connectors_button"], e)
            }

            function f(e) {
                return (0, a(722371).Xk)(a(90416).K_, e)
            }

            function g(e) {
                return (0, a(722371).Xk)([...a(994234).iE, ...a(994234).wW, ...a(994234).Fh], e)
            }

            function m(e) {
                let {
                    openedFrom: t,
                    campaign: a,
                    isCustomAgentsGateEnabled: n
                } = e;
                return n && (f(t) || "deeplink" === t && g(a))
            }
            a.d(t, {
                F$: () => m,
                IU: () => u,
                J: () => o,
                SF: () => f,
                Tr: () => d,
                UP: () => r,
                XF: () => i,
                cn: () => l,
                dt: () => g,
                od: () => n,
                rE: () => s,
                tY: () => p,
                z2: () => c
            }), a(16280)
        },
        46552: (e, t, a) => {
            a.d(t, {
                P: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.37 6.08 19.25 8.5",
                    svg: (0, a(474848).jsx)("path", {
                        fillRule: "evenodd",
                        d: "M14.5 6.081c1.576 0 2.938.968 3.59 2.375H19a.625.625 0 0 1 0 1.25h-.543q.042.307.043.625c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q.001-.547.124-1.056a1.53 1.53 0 0 0-1.249 0q.123.507.125 1.056c0 2.347-1.79 4.25-4 4.25s-4-1.903-4-4.25q0-.319.043-.625H1a.625.625 0 0 1 0-1.25h.91c.652-1.407 2.014-2.375 3.59-2.375 1.444 0 2.709.814 3.412 2.033a2.78 2.78 0 0 1 2.174 0c.703-1.22 1.97-2.033 3.414-2.033m-9 1.25c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3m9 0c-1.448 0-2.75 1.27-2.75 3s1.302 3 2.75 3 2.75-1.27 2.75-3-1.302-3-2.75-3",
                        clipRule: "evenodd"
                    })
                },
                r = (0, a(104509).wt)("eyeglasses", n, "default")
        },
        49396: (e, t, a) => {
            e.exports = a.p + "3385d40630727f40.png"
        },
        57168: (e, t, a) => {
            a.r(t), a.d(t, {
                ClientAIChatStore: () => d,
                UserChatPreferenceLocalStorageStore: () => l,
                defaultClientAIChatStore: () => c,
                defaultLegacyThreadConfig: () => s
            });
            var n = () => a(546605);
            a(898992), a(354520), a(430670), a(803949);
            let r = "confirmed_safe_by_user",
                i = {
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
            class o extends n().Store {
                getInitialState() {
                    return i
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(i)
                }
                getOrCreateTraceId() {
                    let e = this.state.traceId ? ? (0, a(4962).Ay)();
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
                    let e = this.state.draftTraceId ? ? (0, a(4962).Ay)();
                    return this.state.draftTraceId || this.setState({ ...this.state,
                        draftTraceId: e
                    }), e
                }
                setAgentSearchResultsForTool(e) {
                    let {
                        agentStepId: t,
                        toolCallId: a,
                        toolResultStepId: n,
                        results: r
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [n]: {
                                agentStepId: t,
                                toolCallId: a,
                                results: r
                            }
                        }
                    })
                }
                getTemporaryAttachmentStagedDataOrInstantiate() {
                    let e = this.state.stagedData;
                    if (null != e && e.attachmentStagedData) return e.attachmentStagedData;
                    let t = {
                        stagedAttachmentUploadStore: new(a(729849)).Gi,
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
                    } = e, a = this.getTemporaryAttachmentStagedDataOrInstantiate(), n = { ...a,
                        stagedInferenceTranscriptSteps: [...a.stagedInferenceTranscriptSteps, t]
                    };
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: n
                        }
                    })
                }
                unstageAttachmentInferenceTranscriptStep(e) {
                    var t;
                    let {
                        fileId: a
                    } = e, n = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!n) return;
                    let r = n.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== a);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...n,
                                stagedInferenceTranscriptSteps: r
                            }
                        }
                    })
                }
                clearStagedComputerFileSteps() {
                    var e;
                    let t = null == (e = this.state.stagedData) ? void 0 : e.attachmentStagedData;
                    if (!t) return;
                    let a = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === a.length) return;
                    let n = t.stagedAttachmentUploadStore;
                    a.forEach(e => {
                        n.onDeleteFileUpload(e)
                    });
                    let r = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: r
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, a;
                    let {
                        fileUrl: n
                    } = e, i = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!i) return;
                    let o = i.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === n);
                    if (o < 0) return;
                    let l = i.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== l.type) return;
                    let s = null != (a = l.metadata) && a.guardrail ? { ...l.metadata.guardrail,
                            attachmentRisk: r
                        } : {
                            attachmentRisk: r
                        },
                        d = { ...l,
                            metadata: { ...l.metadata ? ? {},
                                guardrail : s
                            }
                        },
                        c = [...i.stagedInferenceTranscriptSteps];
                    c[o] = d, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
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
                        stagedInferenceTranscriptSteps: a
                    } = t;
                    return this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: void 0
                        }
                    }), a
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
                            mentionStagedData: new(a(227318)).d(e)
                        }
                    })
                }
            }
            let l = new(a(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: a(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                s = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class d extends n().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: s,
                        userSelectedConfig: void 0,
                        model: void 0,
                        debugOverrides: {
                            usePromptCache: a(363256).e.withListenerIgnored(() => a(218744).default.checkGate({
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
                        let t = new o;
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
                    } = this.state, a = { ...t
                    };
                    delete a[e], this.setState({ ...this.state,
                        threadRegistry: a
                    })
                }
            }
            let c = new d;
            (0, a(202146).exposeDebugValue)("clientAiChatStore", c)
        },
        58344: (e, t, a) => {
            e.exports = a.p + "056c81859ba06119.png"
        },
        59651: (e, t, a) => {
            a.d(t, {
                l: () => r
            });
            let n = {
                [a(49361).e1]: "collection_connected_property_figma",
                [a(49361).Hd]: "collection_connected_property_google_drive",
                [a(49361).ob]: "collection_connected_property_github",
                [a(49361).k0]: "collection_connected_property_zendesk",
                [a(49361).bh]: "collection_synced_database_github",
                [a(49361).MN]: "collection_synced_database_asana",
                [a(49361).Fo]: "collection_synced_database_gitlab",
                [a(49361).me]: "collection_synced_database_jira",
                [a(49361).F6]: "collection_synced_database_jira_workspace",
                [a(49361).Fv]: "collection_synced_database_jira_datacenter",
                [a(49361).mn]: "collection_synced_database_salesforce_workspace"
            };

            function r(e) {
                if (e) return n[e]
            }
        },
        67207: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                personSlashIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.31 2.31 14.13 16.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.53 2.463a.626.626 0 0 1 .882.067l.032.038q.008.013.018.025l12.687 14.875q.089.101.203.156a.625.625 0 0 1-1.014.72l-.928-1.08a2.4 2.4 0 0 1-1.26.362h-8.3c-.68 0-1.328-.288-1.74-.768-.43-.501-.591-1.217-.23-1.923C4.899 12.945 7.3 11.63 10 11.63q.3 0 .593.021l-1.001-1.166a3.28 3.28 0 0 1-2.267-1.22c-.536-.669-.825-1.532-.886-2.453L3.463 3.345a.626.626 0 0 1 .067-.882M10 12.88c-2.335 0-4.245 1.138-5.007 2.625-.104.203-.071.379.066.54.157.182.449.33.79.33h8.301c.155 0 .3-.032.426-.082l-2.707-3.154a6.8 6.8 0 0 0-1.87-.26M10 2.375c1.137 0 2.055.469 2.675 1.241.607.757.899 1.766.9 2.824 0 1.058-.292 2.067-.9 2.825q-.213.263-.472.477l-.811-.951q.168-.138.307-.309c.392-.487.625-1.2.625-2.042S12.09 4.887 11.7 4.4c-.38-.473-.936-.775-1.7-.775-.762 0-1.32.302-1.7.774a2.4 2.4 0 0 0-.278.44l-.857-1.004q.076-.113.161-.219c.62-.772 1.538-1.241 2.675-1.241"
                    })
                },
                r = (0, a(104509).wt)("personSlash", n, "default")
        },
        72762: (e, t, a) => {
            a.d(t, {
                o: () => n
            });

            function n(e) {
                let {
                    collectionSettingsStore: t
                } = e;
                t.setState({ ...t.state,
                    open: !1,
                    hideSettingsPopup: void 0,
                    hideSettingsHeader: void 0,
                    stack: [],
                    ref: void 0,
                    hideDuplicatePropertyOption: void 0,
                    closeOnEscape: void 0
                }), a(639675).Ay.setState({ ...a(639675).Ay.state,
                    flowId: void 0
                })
            }
        },
        73233: (e, t, a) => {
            a.d(t, {
                getOnboardingAgentVariant: () => n
            });

            function n({
                disableExposureLogging: e = !0
            } = {}) {
                let t = a(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1_no_layer",
                    disableExposureLogging: e
                });
                return void 0 !== t && "control" !== t ? t : a(218744).default.getEligibleGroup({
                    experimentId: "onboarding_agent_m1",
                    disableExposureLogging: !0
                })
            }
        },
        73888: (e, t, a) => {
            a.d(t, {
                y: () => n
            }), a(944114), a(898992), a(354520), a(803949), a(581454);

            function n(e) {
                let {
                    environment: t,
                    transaction: n,
                    spaceStore: r,
                    actors: i,
                    metadata: o
                } = e;
                if (!r.isDefined()) return !1;
                let l = r.id,
                    s = i.filter(e => "user" === e.type).map(e => ({
                        id: (0, a(729052).yO)({
                            spaceId: l,
                            userId: e.userId
                        }),
                        space_id: l,
                        membership_type: e.membershipType,
                        user_id: e.userId
                    })),
                    d = i.filter(e => "bot" === e.type).map(e => {
                        var t, n;
                        return {
                            id: (0, a(611042).YS)({
                                spaceId: r.id,
                                botId: e.botId
                            }),
                            space_id: l,
                            bot_id: e.botId,
                            bot_parent_id: null == e || null == (t = e.parent) ? void 0 : t.id,
                            bot_parent_table: null == e || null == (n = e.parent) ? void 0 : n.table,
                            membership_type: e.membershipType
                        }
                    });
                return s.map(e => [e, a(993189).lJX.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).dp)(r, e.user_id),
                    operation: t,
                    transaction: n
                })), d.map(e => [e, a(993189).p7l.create(e).operations[0]]).forEach(([e, t]) => (0, a(421439).y4)({
                    store: (0, a(993077).Ts)(r, e.bot_id),
                    operation: t,
                    transaction: n
                })), n.postSubmitCallbacks.push(async n => {
                    var l, c;
                    let u = i.map(e => (0, a(283161).z)(e));
                    a(594311).Ah({
                        status: n ? "fail" : "success",
                        location: null == o ? void 0 : o.pagePermissionChangeLocation,
                        permission_items: u
                    }), s.forEach(e => {
                        a(594311).sY({
                            spaceUser: e,
                            from: null == o ? void 0 : o.from,
                            status: n ? "fail" : "success"
                        })
                    }), d.forEach(e => {
                        a(594311).W7({
                            spaceBot: e,
                            from: null == o ? void 0 : o.from,
                            status: n ? "fail" : "success"
                        })
                    }), null != (l = e.metadata) && l.metric && a(680007).default.DO_NOT_USE_measureLegacy(null == (c = e.metadata) ? void 0 : c.metric, {}), n || await a(371151).nO({
                        environment: t,
                        spaceStore: r
                    })
                }), !0
            }
        },
        85071: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                integrationIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.12 3.02 15.83 14.41",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M7.663 5.794a2.77 2.77 0 1 1-5.539 0 2.77 2.77 0 0 1 5.539 0m-1.25 0a1.52 1.52 0 1 0-3.039 0 1.52 1.52 0 0 0 3.039 0m2.497-.55a.55.55 0 0 0 0 1.1h.098a.55.55 0 1 0 0-1.1zm2.054 0a.55.55 0 1 0 0 1.1h.098a.55.55 0 0 0 0-1.1zm2.602 4.328a.55.55 0 0 0-.952-.55l-.049.083a.55.55 0 0 0 .952.552zm-6.208-.551a.55.55 0 0 0-.952.551l.049.085a.55.55 0 0 0 .952-.552zm5.182 2.324a.55.55 0 0 0-.952-.552l-.05.085a.55.55 0 1 0 .953.551zm-4.156-.552a.55.55 0 1 0-.951.552l.048.084a.55.55 0 1 0 .952-.551zm6.722-2.23a2.77 2.77 0 1 0 0-5.538 2.77 2.77 0 0 0 0 5.538m0-1.25a1.52 1.52 0 1 1 0-3.038 1.52 1.52 0 0 1 0 3.038m-2.336 7.343a2.77 2.77 0 1 1-5.54 0 2.77 2.77 0 0 1 5.54 0m-1.25 0a1.52 1.52 0 1 0-3.04 0 1.52 1.52 0 0 0 3.04 0"
                    })
                },
                r = (0, a(104509).wt)("integration", n, "default")
        },
        89408: (e, t, a) => {
            function n(e) {
                var t;
                let {
                    environment: n,
                    featureKey: r
                } = e, i = (0, a(904434).R$)(n);
                if (!i || !i.isReady()) return;
                let o = null == (t = i.getSettings()) ? void 0 : t.dismissed_adoption_feature;
                return (null == o ? void 0 : o[r]) !== void 0
            }

            function r(e) {
                var t;
                let {
                    environment: n,
                    featureKey: r
                } = e, i = (0, a(904434).R$)(n);
                if (!i || !i.isReady()) return;
                let o = null == (t = i.getSettings()) ? void 0 : t.exposed_to_adoption_feature;
                return (null == o ? void 0 : o[r]) ? ? []
            }

            function i(e) {
                let {
                    environment: t,
                    featureKey: a
                } = e, n = r({
                    environment: t,
                    featureKey: a
                });
                return n ? n.length > 0 : void 0
            }

            function o(e) {
                var t;
                let {
                    environment: n
                } = e, r = (0, a(904434).R$)(n);
                return !!r && !!r.isReady() && ((null == (t = r.getSettings()) ? void 0 : t.seen_new_user_onboarding_checklist_experience) ? ? !1)
            }

            function l(e) {
                var t;
                let {
                    environment: n
                } = e, r = (0, a(904434).R$)(n);
                return !!r && !!r.isReady() && ((null == (t = r.getSettings()) ? void 0 : t.seen_new_user_onboarding_joiner_v2_experience) ? ? !1)
            }
            a.d(t, {
                Tw: () => r,
                dp: () => l,
                iB: () => n,
                mA: () => o,
                wz: () => i
            })
        },
        90416: (e, t, a) => {
            a.d(t, {
                CT: () => o,
                K_: () => s,
                Mi: () => n,
                uv: () => i,
                zL: () => l,
                zj: () => r
            });
            let n = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                r = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                i = ["ai_research_mode"],
                o = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                l = ["ai_agent"],
                s = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        98303: (e, t, a) => {
            e.exports = a.p + "7a736746212f0f46.png"
        },
        104455: (e, t, a) => {
            e.exports = a.p + "1fac3e057348c509.png"
        },
        105427: (e, t, a) => {
            a.d(t, {
                y: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.501 2.391a8 8 0 0 1 .998 0 .625.625 0 0 1-.081 1.247 7 7 0 0 0-.836 0 .625.625 0 0 1-.08-1.247m3.034 1.053a.625.625 0 0 1 .838-.284q.45.222.863.5a.625.625 0 0 1-.695 1.038 6 6 0 0 0-.722-.417.625.625 0 0 1-.284-.837m-5.072 0a.625.625 0 0 1-.284.837q-.375.185-.722.417a.625.625 0 0 1-.695-1.038q.414-.278.863-.5a.625.625 0 0 1 .838.284m8.009 2.147a.625.625 0 0 1 .867.172q.278.414.5.863a.625.625 0 0 1-1.12.554 6 6 0 0 0-.418-.722.625.625 0 0 1 .171-.867m-10.946 0c.287.192.363.58.171.867q-.232.346-.417.722a.625.625 0 1 1-1.12-.554q.221-.45.499-.863a.625.625 0 0 1 .867-.172m12.418 3.327a.625.625 0 0 1 .664.583 8 8 0 0 1 0 .998.625.625 0 0 1-1.248-.081 6 6 0 0 0 0-.836.625.625 0 0 1 .584-.664m-13.89 0c.345.022.606.32.583.664a7 7 0 0 0 0 .836.625.625 0 0 1-1.247.08 8 8 0 0 1 0-.997.625.625 0 0 1 .664-.583m13.501 3.618c.31.153.437.528.284.838q-.222.45-.5.863a.625.625 0 1 1-1.038-.695q.231-.346.417-.722a.625.625 0 0 1 .837-.284m-13.112 0a.625.625 0 0 1 .837.284q.185.375.417.722a.625.625 0 0 1-1.038.695 8 8 0 0 1-.5-.864.625.625 0 0 1 .284-.837m2.147 2.937a.625.625 0 0 1 .867-.171q.346.231.722.417a.625.625 0 1 1-.554 1.12 8 8 0 0 1-.863-.499.625.625 0 0 1-.172-.867m8.818 0a.625.625 0 0 1-.172.867 8 8 0 0 1-.864.5.625.625 0 0 1-.553-1.12q.375-.187.722-.418a.625.625 0 0 1 .867.171m-5.491 1.472a.625.625 0 0 1 .664-.584 6 6 0 0 0 .836 0 .625.625 0 0 1 .08 1.248 8 8 0 0 1-.997 0 .625.625 0 0 1-.583-.664"
                    })
                },
                r = (0, a(104509).wt)("circleDotted", n, "default")
        },
        113174: (e, t, a) => {
            e.exports = a.p + "5a7ce521ec824981.png"
        },
        118999: (e, t, a) => {
            a.d(t, {
                Hb: () => g,
                Hu: () => c,
                TY: () => n,
                Tu: () => o,
                U4: () => f,
                U7: () => m,
                WO: () => s,
                XX: () => p,
                c4: () => d,
                ef: () => i,
                ej: () => u,
                hI: () => l,
                ls: () => r
            });
            let n = 2,
                r = 30,
                i = 30,
                o = {
                    365: 5,
                    180: 5,
                    90: 5,
                    30: 5,
                    14: 4
                },
                l = 332,
                s = 852,
                d = 800,
                c = 407,
                u = 24,
                p = 400,
                f = 450,
                g = 524,
                m = 7
        },
        121421: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        124108: (e, t, a) => {
            a.d(t, {
                N: () => l
            });
            var n = a(296540),
                r = a(474848);
            let i = {
                    alignItems: "center",
                    borderRadius: a(986939).A.isMobile ? 12 : 6,
                    boxShadow: void 0,
                    display: "flex",
                    flexShrink: 0,
                    fontSize: a(986939).A.isMobile ? 16 : 14,
                    fontWeight: a(699422).Wy.medium,
                    height: a(986939).A.isMobile ? 48 : 32,
                    justifyContent: "center",
                    lineHeight: 1.2,
                    paddingInlineStart: a(986939).A.isMobile ? 20 : 12,
                    paddingInlineEnd: a(986939).A.isMobile ? 20 : 12,
                    whiteSpace: "nowrap"
                },
                o = {
                    destructiveButtonDefault: { ...i,
                        background: a(632079).Tj.red.background.accentPrimary,
                        color: a(632079).oZ.white,
                        fill: a(632079).oZ.lightTextColor
                    },
                    destructiveButtonHovered: {
                        background: "rgba(235, 87, 87, 0.8)"
                    },
                    destructiveButtonPressed: {
                        background: a(632079).oZ.red
                    },
                    primaryButtonDefault: { ...i,
                        background: a(632079).Tj.blue.background.accentPrimary,
                        color: a(632079).oZ.white,
                        fill: a(632079).oZ.lightTextColor
                    },
                    primaryButtonHovered: {
                        background: a(632079).Tj.blueButtonHoveredBackground
                    },
                    primaryButtonPressed: {
                        background: a(632079).Tj.blueButtonPressedBackground
                    },
                    secondaryButtonDefault: { ...i,
                        color: a(632079).Tj.text.secondary,
                        fill: a(632079).oZ.lightTextColor
                    },
                    plainButtonDefault: { ...i,
                        background: "transparent",
                        color: a(632079).Tj.text.primary,
                        fill: a(632079).Tj.text.primary
                    },
                    plainButtonHovered: {
                        background: a(632079).Tj.whiteButtonHoveredBackground
                    },
                    plainButtonPressed: {
                        background: a(632079).Tj.whiteButtonPressedBackground
                    },
                    outlineButtonDefault: { ...i,
                        background: a(632079).Tj.whiteButtonBackground,
                        color: a(632079).Tj.text.primary,
                        fill: a(632079).Tj.text.primary,
                        border: `1px solid ${a(632079).Tj.border.primary}`
                    },
                    outlineButtonHovered: {
                        background: a(632079).Tj.whiteButtonHoveredBackground
                    },
                    outlineButtonPressed: {
                        background: a(632079).Tj.whiteButtonPressedBackground
                    },
                    blackButtonDefault: { ...i,
                        background: a(632079).Tj.primaryBlack,
                        color: a(632079).oZ.white,
                        fill: a(632079).Tj.primaryBlack
                    },
                    blackButtonHovered: {
                        background: a(632079).oZ.frontBlackButtonBackgroundHovered
                    },
                    blackButtonPressed: {
                        background: a(632079).oZ.frontBlackButtonBackgroundPressed
                    },
                    style0: {
                        marginInlineEnd: 4
                    }
                };

            function l(e) {
                let {
                    buttonInfo: t,
                    ...i
                } = e, l = (0, n.useContext)(a(19187).e), s = "baseStyleOverride" in t ? t.baseStyleOverride : void 0, d = (0, n.useMemo)(() => ({
                    destructive: {
                        default: o.destructiveButtonDefault,
                        hovered: o.destructiveButtonHovered,
                        pressed: o.destructiveButtonPressed
                    },
                    primary: {
                        default: o.primaryButtonDefault,
                        hovered: o.primaryButtonHovered,
                        pressed: o.primaryButtonPressed
                    },
                    secondary: {
                        default: o.secondaryButtonDefault
                    },
                    dismiss: {
                        default: o.secondaryButtonDefault
                    },
                    outline: {
                        default: o.outlineButtonDefault,
                        hovered: o.outlineButtonHovered,
                        pressed: o.outlineButtonPressed
                    },
                    black: {
                        default: o.blackButtonDefault,
                        hovered: o.blackButtonHovered,
                        pressed: o.blackButtonPressed
                    },
                    plain: {
                        default: o.plainButtonDefault,
                        hovered: o.plainButtonHovered,
                        pressed: o.plainButtonPressed
                    }
                }), []);
                if ("dismiss" === t.buttonType) {
                    let e = t.label ? ? (0, r.jsx)(a(109939).sA, {
                            id: "actionable.dismissButton.label",
                            defaultMessage: "Cancel"
                        }),
                        n = t.combinedStyles ? ? d.dismiss;
                    return (0, r.jsx)(a(64960).Ay, {
                        style: null == n ? void 0 : n.default,
                        hoveredStyle: null == n ? void 0 : n.hovered,
                        pressedStyle: null == n ? void 0 : n.pressed,
                        onClick: l,
                        children: e
                    })
                } {
                    let e = t.buttonType ? ? "primary",
                        n = t.combinedStyles ? ? d[e];
                    return (0, r.jsxs)(a(64960).Ay, {
                        style: { ...null == n ? void 0 : n.default,
                            ...s
                        },
                        hoveredStyle: null == n ? void 0 : n.hovered,
                        pressedStyle: null == n ? void 0 : n.pressed,
                        onClick: t.onClick,
                        disabled: t.isDisabled || t.isLoading,
                        disabledFeedback: t.isDisabled,
                        ...i,
                        children: [t.isLoading ? (0, r.jsx)(a(517334).k, {
                            style: o.style0
                        }) : null, t.label]
                    })
                }
            }
        },
        124394: (e, t, a) => {
            e.exports = a.p + "e02c2b36d656a621.png"
        },
        128743: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowStraightLeftIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 3.97 15.26 12.06",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.411 9.79a.6.6 0 0 1 .147-.232l5.4-5.4a.625.625 0 1 1 .884.884L4.509 9.375H17a.625.625 0 1 1 0 1.25H4.509l4.333 4.333a.625.625 0 1 1-.884.884l-5.4-5.4a.62.62 0 0 1-.147-.651"
                    })
                },
                r = (0, a(104509).wt)("arrowStraightLeft", n, "default")
        },
        139449: (e, t, a) => {
            a.d(t, {
                v: () => n
            });
            let n = a(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialInfoModalStore"
            })
        },
        146535: (e, t, a) => {
            e.exports = a.p + "d96dbdbbe0581121.gif"
        },
        148344: (e, t, a) => {
            a.d(t, {
                k: () => i
            }), a(581454);
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {}
                waitUntilLoaded() {
                    return this.waitUntil(() => !!this.state)
                }
                getSortedUserIds() {
                    return Object.entries(this.state || {}).sort(([e, t], [a, n]) => n - t).map(([e, t]) => e)
                }
            }
            let i = new r;
            (0, a(202146).exposeDebugValue)("UserSimilarityStore", i)
        },
        152996: (e, t, a) => {
            a.d(t, {
                Vq: () => n,
                bt: () => i,
                vx: () => r
            });
            let n = {
                    mini: 3,
                    small: 4,
                    default: 6,
                    medium: 8,
                    large: 12,
                    max: 16
                },
                r = "0px 4px 0px -2px #00000005",
                i = {
                    opacity: .5,
                    pointerEvents: "none",
                    userSelect: "none"
                }
        },
        153828: (e, t, a) => {
            a.d(t, {
                P: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.5 3.05 15 13.82",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M9.08 3.341a1.625 1.625 0 0 1 1.84 0l5.875 4.035c.441.304.705.805.705 1.34v6.034a2.125 2.125 0 0 1-2.125 2.125h-2.716a1.625 1.625 0 0 1-1.625-1.625v-4.065H8.967v4.065c0 .898-.728 1.625-1.625 1.625H4.625A2.125 2.125 0 0 1 2.5 14.75V8.716c0-.535.264-1.036.705-1.34zm1.132 1.03a.375.375 0 0 0-.424 0L3.913 8.407a.38.38 0 0 0-.163.309v6.034c0 .483.392.875.875.875h2.716a.375.375 0 0 0 .375-.375v-4.19c0-.621.503-1.125 1.125-1.125h2.319c.62 0 1.124.504 1.124 1.125v4.19c0 .207.168.375.375.375h2.716a.875.875 0 0 0 .875-.875V8.716c0-.124-.06-.24-.163-.31z"
                    })
                },
                r = (0, a(104509).wt)("home", n, "default")
        },
        160319: (e, t, a) => {
            a.d(t, {
                Ay: () => l,
                le: () => o,
                sA: () => i
            });
            var n = a(296540),
                r = a(474848);
            let i = "20px",
                o = {
                    Select: "Select",
                    Person: "Person",
                    Relation: "Relation",
                    FilterValue: "FilterValue",
                    Share: "Share",
                    Group: "Group",
                    Place: "Place"
                },
                l = n.forwardRef(function(e, t) {
                    let {
                        disabled: n,
                        value: i,
                        message: o,
                        right: l,
                        showClearButton: s,
                        format: d,
                        focus: c,
                        dontShowBorderBottom: u,
                        showBorder: p,
                        style: f,
                        onClick: g,
                        inputAndTokenWrapRightStyle: h,
                        tokens: b,
                        hideInput: v,
                        onRemoveLastToken: y,
                        onKeyDown: _,
                        onChange: I,
                        focusInitial: S,
                        focusAfterAnimation: w,
                        preventScrollOnFocus: x,
                        inputFullWidth: k,
                        inputDivStyle: C,
                        inputStyle: A,
                        rightWrapStyle: M,
                        tokenWrapStyle: T,
                        type: j,
                        placeholder: D,
                        onEmptySubmit: P,
                        onSubmit: R,
                        textarea: B,
                        autoComplete: E,
                        onClearButtonClick: N,
                        inputElementAttributes: F,
                        suppressFocusRing: O,
                        onFocus: U,
                        onBlur: L
                    } = e;
                    return (0, r.jsx)(a(369064).N, {
                        debugName: "TokenInputMenuItem",
                        capture: !n,
                        onLeft: a(763230).D_,
                        onRight: a(763230).D_,
                        onSelectAll: a(763230).D_,
                        onRedo: a(763230).D_,
                        onUndo: a(763230).D_,
                        onToggleBold: a(763230).D_,
                        onToggleItalics: a(763230).D_,
                        onToggleCode: a(763230).D_,
                        onCut: a(763230).D_,
                        onCopy: a(763230).D_,
                        onPaste: a(763230).D_,
                        onKeypress: a(763230).D_,
                        children: (0, r.jsx)(a(369064).N, {
                            debugName: "TokenInputMenuItem",
                            capture: !n && i.length > 0,
                            onDelete: a(763230).D_,
                            onBackspace: a(763230).D_,
                            children: (0, r.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "stretch",
                                    flex: 1,
                                    minWidth: 0,
                                    gap: o ? 4 : void 0
                                },
                                children: [(0, r.jsx)(m, {
                                    ref: t,
                                    right: l,
                                    showClearButton: s,
                                    format: d,
                                    focus: c,
                                    dontShowBorderBottom: u,
                                    disabled: n,
                                    showBorder: p,
                                    style: f,
                                    rightWrapStyle: M,
                                    onClick: g,
                                    inputAndTokenWrapRightStyle: h,
                                    tokens: b,
                                    hideInput: v,
                                    value: i,
                                    onRemoveLastToken: y,
                                    onKeyDown: _,
                                    onChange: I,
                                    focusInitial: S,
                                    focusAfterAnimation: w,
                                    preventScrollOnFocus: x,
                                    inputFullWidth: k,
                                    inputDivStyle: C,
                                    inputStyle: A,
                                    type: j,
                                    placeholder: D,
                                    onEmptySubmit: P,
                                    onSubmit: R,
                                    textarea: B,
                                    autoComplete: E,
                                    onClearButtonClick: N,
                                    inputElementAttributes: F,
                                    suppressFocusRing: O,
                                    onFocus: U,
                                    onBlur: L,
                                    tokenWrapStyle: T
                                }), o ? (0, r.jsx)(a(324489).V, {
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

            function c() {
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
                            boxShadow: `${a(632079).Tj.border.primaryTranslucent} 0 0 0 1px`,
                            background: a(632079).Tj.background.secondaryTranslucent
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
            let u = n.forwardRef(function({
                    tokens: e,
                    disabled: t,
                    value: o,
                    onRemoveLastToken: l,
                    onKeyDown: s,
                    onChange: d,
                    focus: u,
                    focusInitial: p,
                    focusAfterAnimation: f,
                    preventScrollOnFocus: g,
                    format: m,
                    inputFullWidth: h,
                    inputDivStyle: b,
                    inputStyle: v,
                    type: y,
                    placeholder: _,
                    onEmptySubmit: I,
                    onSubmit: S,
                    textarea: w,
                    autoComplete: x,
                    setIsFocused: k,
                    onFocus: C,
                    onBlur: A,
                    inputElementAttributes: M,
                    suppressFocusRing: T
                }, j) {
                    var D, P, R;
                    let B = (0, n.useCallback)(e => {
                            "Backspace" === e.key && 0 === o.length && l(), s && s(e)
                        }, [o, l, s]),
                        E = (0, n.useCallback)(e => {
                            0 === o.length && I && I(), S && S(e)
                        }, [o, I, S]),
                        N = (0, n.useCallback)(() => {
                            k(!1), null == A || A()
                        }, [k, A]),
                        F = (0, n.useCallback)(() => {
                            k(!0), null == C || C()
                        }, [k, C]),
                        O = 0 === e.length;
                    return (0, r.jsx)(a(36481).p, {
                        disabled: t,
                        format: "transparent",
                        onKeyDown: B,
                        onChange: d,
                        value: o,
                        focus: u,
                        focusInitial: p,
                        focusAfterAnimation: f,
                        preventScrollOnFocus: g,
                        style: (D = m, P = h, R = b, {
                            flexGrow: 1,
                            flexShrink: 1,
                            flexBasis: P ? "100%" : 60,
                            minWidth: 60,
                            width: "auto",
                            lineHeight: i,
                            ...a(986939).A.isMobile ? {
                                margin: "0 8px 0 0"
                            } : c()[D].inputDivDesktopStyle,
                            ...R
                        }),
                        inputStyle: v || {
                            height: a(986939).A.isMobile ? 24 : 20
                        },
                        size: 1,
                        ref: j,
                        type: y,
                        placeholder: O ? _ : "",
                        onSubmit: E,
                        onFocus: F,
                        onBlur: N,
                        textarea: w,
                        autoComplete: x,
                        inputElementAttributes: M,
                        suppressFocusRing: T
                    })
                }),
                p = {
                    flexWrap: "nowrap"
                },
                f = {
                    display: "flex",
                    flexWrap: "wrap",
                    flexGrow: 1,
                    minWidth: 0
                },
                g = {
                    flexShrink: 0
                },
                m = n.forwardRef(function(e, t) {
                    let {
                        right: i,
                        showClearButton: l,
                        format: d,
                        focus: m,
                        dontShowBorderBottom: h,
                        disabled: v,
                        showBorder: y,
                        style: _,
                        onClick: I,
                        inputAndTokenWrapRightStyle: S,
                        tokenWrapStyle: w,
                        tokens: x,
                        hideInput: k,
                        value: C,
                        onRemoveLastToken: A,
                        onKeyDown: M,
                        onChange: T,
                        focusInitial: j,
                        focusAfterAnimation: D,
                        preventScrollOnFocus: P,
                        inputFullWidth: R,
                        inputDivStyle: B,
                        inputStyle: E,
                        rightWrapStyle: N,
                        type: F,
                        placeholder: O,
                        onEmptySubmit: U,
                        onSubmit: L,
                        textarea: V,
                        autoComplete: W,
                        onClearButtonClick: z,
                        onFocus: Q,
                        onBlur: H,
                        inputElementAttributes: $,
                        suppressFocusRing: K
                    } = e, q = (0, a(533992).v3)(), G = (0, n.useContext)(a(649476).xu), [Z, Y] = (0, n.useState)(!1), [J, X] = (0, n.useState)(() => !!(m || j));
                    (0, n.useEffect)(() => {
                        P && Y(!0)
                    }, [P]), (0, n.useEffect)(() => {
                        void 0 !== m && X(m)
                    }, [m]);
                    let ee = (0, n.useRef)(null),
                        [et, ea] = (0, a(768397).s)(),
                        en = (0, a(421573).A)(t, ee, et),
                        er = (0, n.useCallback)(() => {
                            if (!v) {
                                var e;
                                null == (e = ee.current) || e.focus(), null == I || I()
                            }
                        }, [v, I, ee]),
                        ei = function({
                            environment: e,
                            format: t,
                            focus: n,
                            dontShowBorderBottom: r,
                            disabled: i,
                            showBorder: o,
                            menuContext: l,
                            showFocusRing: d
                        }) {
                            return (0, a(682985).K8)(() => {
                                let e = c()[t];
                                return a(986939).A.isMobile ? { ...{ ...s(),
                                        flexShrink: 0,
                                        minHeight: 44,
                                        borderBottom: `1px solid ${a(632079).Tj.border.secondaryTranslucent}`,
                                        fontSize: a(986939).A.isMobile ? 17 : 16,
                                        background: a(632079).Tj.popoverBackground
                                    },
                                    paddingTop: 14,
                                    paddingBottom: 14,
                                    paddingInlineStart: (null == l ? void 0 : l.menuType) !== a(649476).gu.Popup ? (0, a(616844).Y5)("left", 16) : 16,
                                    paddingInlineEnd: (null == l ? void 0 : l.menuType) !== a(649476).gu.Popup ? (0, a(616844).Y5)("right", 16) : 16,
                                    ...r && {
                                        borderBottom: "none"
                                    }
                                } : { ...{ ...s(),
                                        background: i ? "none" : a(632079).Tj.tokenInputMenuItemBackground,
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
                                    ...o && n && {
                                        boxShadow: a(632079).Tj.inputBlueFocusRing
                                    },
                                    ...n && e.inputDivDesktopFocusStyle,
                                    ...d && {
                                        boxShadow: a(632079).Tj.buttonBlueFocusRing
                                    }
                                }
                            }, [i, r, n, t, null == l ? void 0 : l.menuType, o, d])
                        }({
                            environment: q,
                            format: d,
                            focus: m,
                            dontShowBorderBottom: h,
                            disabled: v,
                            showBorder: y,
                            menuContext: G,
                            showFocusRing: (null == $ ? void 0 : $.role) === "combobox" && ea && !K
                        }),
                        {
                            inputElementAttributes: eo,
                            wrapperElementAttributes: el
                        } = (0, n.useMemo)(() => {
                            if ((null == $ ? void 0 : $.role) === "combobox") {
                                let {
                                    role: e,
                                    "aria-expanded": t,
                                    "aria-haspopup": a,
                                    "aria-controls": n,
                                    "aria-orientation": r,
                                    ...i
                                } = $;
                                return {
                                    inputElementAttributes: i,
                                    wrapperElementAttributes: {
                                        role: e,
                                        "aria-expanded": t,
                                        "aria-haspopup": a,
                                        "aria-controls": n,
                                        "aria-orientation": r
                                    }
                                }
                            }
                            return {
                                inputElementAttributes: $,
                                wrapperElementAttributes: {}
                            }
                        }, [$]);
                    return a(986939).A.isMobile && !(i || l) ? (0, r.jsxs)("div", {
                        style: { ...ei,
                            ...p,
                            ..._
                        },
                        onClick: er,
                        tabIndex: -1,
                        role: "none",
                        ...el,
                        children: [(0, r.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexWrap: "wrap",
                                flexGrow: 1,
                                minWidth: 0,
                                gap: 6,
                                overflow: "hidden",
                                marginInlineEnd: 6 * (d === o.Group)
                            },
                            children: [x, k ? void 0 : (0, r.jsx)(u, {
                                ref: en,
                                tokens: x,
                                disabled: v,
                                value: C,
                                onRemoveLastToken: A,
                                onKeyDown: M,
                                onChange: T,
                                focus: m,
                                focusInitial: j,
                                focusAfterAnimation: D,
                                format: d,
                                inputFullWidth: R,
                                inputDivStyle: B,
                                inputStyle: E,
                                type: F,
                                placeholder: O,
                                onEmptySubmit: U,
                                onSubmit: L,
                                textarea: V,
                                autoComplete: W,
                                setIsFocused: X,
                                onFocus: Q,
                                onBlur: H,
                                inputElementAttributes: eo,
                                suppressFocusRing: K
                            })]
                        }), (0, r.jsx)(a(368678).P, {
                            show: J
                        })]
                    }) : (0, r.jsxs)(a(136508)._, {
                        type: a(644154).A.All,
                        style: { ...ei,
                            ...p,
                            ..._
                        },
                        onClick: er,
                        ...el,
                        children: [(0, r.jsxs)("div", {
                            style: { ...f,
                                ...w,
                                ...i || l ? S : null
                            },
                            children: [x, k ? void 0 : (0, r.jsx)(u, {
                                ref: en,
                                tokens: x,
                                disabled: v,
                                value: C,
                                onRemoveLastToken: A,
                                onKeyDown: M,
                                onChange: T,
                                focus: m,
                                focusInitial: j,
                                focusAfterAnimation: D,
                                preventScrollOnFocus: Z,
                                format: d,
                                inputFullWidth: R,
                                inputDivStyle: B,
                                inputStyle: E,
                                type: F,
                                placeholder: O,
                                onEmptySubmit: U,
                                onSubmit: L,
                                textarea: V,
                                autoComplete: W,
                                setIsFocused: X,
                                onFocus: Q,
                                onBlur: H,
                                inputElementAttributes: eo,
                                suppressFocusRing: K
                            })]
                        }), i || l ? (0, r.jsx)("div", {
                            style: { ...g,
                                ...N
                            },
                            children: (0, r.jsx)(b, {
                                showClearButton: l,
                                right: i,
                                onClearButtonClick: z,
                                tokens: x,
                                value: C
                            })
                        }) : null]
                    })
                }),
                h = {
                    style0: {
                        flexShrink: 0,
                        flexGrow: 0,
                        borderRadius: a(986939).A.isMobile ? 24 : 20,
                        marginTop: 2 * !a(986939).A.isMobile
                    }
                };

            function b({
                showClearButton: e,
                right: t,
                onClearButtonClick: n,
                tokens: i,
                value: o
            }) {
                let l = (0, a(109939).tz)();
                return t ? (0, r.jsx)(r.Fragment, {
                    children: t
                }) : e && (i.length > 0 || o.length > 0) ? (0, r.jsx)(a(64960).Ay, {
                    "aria-label": l.formatMessage({
                        id: "tokenInputMenuItem.clearButton",
                        defaultMessage: "Clear"
                    }),
                    onClick: n,
                    style: h.style0,
                    children: (0, r.jsx)(a(16275).I, {
                        icon: a(778765).xMarkCircleFillSmallIcon,
                        size: a(986939).A.isMobile ? "default" : "sm",
                        colorVariant: "tertiary"
                    })
                }) : null
            }
        },
        161412: (e, t, a) => {
            e.exports = a.p + "e81e609390254b2a.png"
        },
        162819: (e, t, a) => {
            a.d(t, {
                o: () => r
            });
            var n = a(296540);

            function r(e) {
                let {
                    spaceStore: t
                } = e, r = (0, a(533992).v3)(), i = (0, a(993077).U2)(t), {
                    isMember: o,
                    spaceId: l
                } = (0, a(682985).K8)(() => ({
                    isMember: (null == i ? void 0 : i.isMember()) ? ? !1,
                    spaceId: null == t ? void 0 : t.id
                }), [i, t]);
                return (0, n.useEffect)(() => {
                    l && o && (0, a(829489).$W)({
                        environment: r,
                        spaceId: l
                    })
                }, [r, l, o]), (0, a(682985).K8)(() => a(653828).H.state.prices, [])
            }
        },
        164177: (e, t, a) => {
            a.d(t, {
                j: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
            }
            let i = new r
        },
        166863: (e, t, a) => {
            a.d(t, {
                P: () => r
            });
            let n = (0, a(109939).YK)({
                    languageTitle: {
                        id: "languageRegionSettings.language.label",
                        defaultMessage: "Language"
                    },
                    languageDescription: {
                        id: "languageSettings.languageSwitcher.subtitle",
                        defaultMessage: "Choose the language you want to use Notion in"
                    },
                    numberFormatTitle: {
                        id: "languageRegionSettings.numberFormat.label",
                        defaultMessage: "Number format"
                    },
                    numberFormatDescription: {
                        id: "languageRegionSettings.numberFormat.description",
                        defaultMessage: "Choose how numbers and currencies are formatted. Default uses your language setting."
                    },
                    spellcheckerTitle: {
                        id: "languageRegionSettings.spellchecker.label",
                        defaultMessage: "Spellchecker languages"
                    },
                    spellcheckerDescription: {
                        id: "languageSettings.spellcheckerSwitcher.subtitle",
                        defaultMessage: "Change the languages used by the spellchecker."
                    },
                    textDirectionTitle: {
                        id: "textDirectionControlsSetting.title",
                        defaultMessage: "Always show text direction controls"
                    },
                    textDirectionDescription: {
                        id: "textDirectionControlsSetting.caption",
                        defaultMessage: "Show the option to change text direction (left to right or right to left) in the editor, regardless of what language you’re using"
                    },
                    startWeekOnMondayTitle: {
                        id: "calendarSettings.startWeekOnMonday.label",
                        defaultMessage: "Start week on Monday"
                    },
                    startWeekOnMondayDescription: {
                        id: "calendarSettings.startWeekOnMonday.message",
                        defaultMessage: "This will affect the way your calendars appear in Notion"
                    },
                    dateFormatTitle: {
                        id: "dateMentionFormatSettings.title",
                        defaultMessage: "Date format"
                    },
                    dateFormatDescription: {
                        id: "dateMentionFormatSettings.caption",
                        defaultMessage: "Set the default format for new @date mentions"
                    },
                    autoTimezoneTitle: {
                        id: "dateAndTimeSettings.autoTimeZone.title",
                        defaultMessage: "Set time zone automatically using your location"
                    },
                    autoTimezoneDescription: {
                        id: "dateAndTimeSettings.autoTimeZone.caption",
                        defaultMessage: "Reminders, notifications, and emails will be delivered to you based on your time zone"
                    },
                    timezoneTitle: {
                        id: "dateAndTimeSettings.timeZone.title",
                        defaultMessage: "Time zone"
                    },
                    timezoneDescription: {
                        id: "dateAndTimeSettings.timeZone.caption",
                        defaultMessage: "Choose your time zone"
                    }
                }),
                r = {
                    language: {
                        id: "languageAndRegionSettingsLanguage",
                        title: n.languageTitle,
                        description: n.languageDescription
                    },
                    numberFormat: {
                        id: "languageAndRegionSettingsNumberFormat",
                        title: n.numberFormatTitle,
                        description: n.numberFormatDescription
                    },
                    spellchecker: {
                        id: "languageAndRegionSettingsSpellchecker",
                        title: n.spellcheckerTitle,
                        description: n.spellcheckerDescription
                    },
                    textDirection: {
                        id: "languageAndRegionSettingsTextDirection",
                        title: n.textDirectionTitle,
                        description: n.textDirectionDescription
                    },
                    startWeekOnMonday: {
                        id: "languageAndRegionSettingsStartWeekOnMonday",
                        title: n.startWeekOnMondayTitle,
                        description: n.startWeekOnMondayDescription
                    },
                    dateFormat: {
                        id: "languageAndRegionSettingsDateFormat",
                        title: n.dateFormatTitle,
                        description: n.dateFormatDescription
                    },
                    autoTimezone: {
                        id: "languageAndRegionSettingsAutoTimezone",
                        title: n.autoTimezoneTitle,
                        description: n.autoTimezoneDescription
                    },
                    timezone: {
                        id: "languageAndRegionSettingsTimezone",
                        title: n.timezoneTitle,
                        description: n.timezoneDescription
                    }
                }
        },
        177861: (e, t, a) => {
            function n(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, a, n, r) => {
                    let i = encodeURIComponent(a),
                        o = encodeURIComponent(n),
                        l = encodeURIComponent(r),
                        s = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${i}${s}${o}${s}${l})`
                })
            }

            function r(e, t) {
                let a = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, n] of Object.entries(t.stepCitations)) {
                    if (!a.stepCitations[e]) {
                        a.stepCitations[e] = {
                            claims: [...n.claims],
                            artifacts: [...n.artifacts]
                        };
                        continue
                    }
                    let t = new Set(a.stepCitations[e].claims.map(e => e.id));
                    for (let r of n.claims) t.has(r.id) || a.stepCitations[e].claims.push(r);
                    let r = new Set(a.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of n.artifacts) r.has(t.id) || a.stepCitations[e].artifacts.push(t)
                }
                return a
            }

            function i(e) {
                try {
                    let t = [];
                    for (let a in e.stepCitations)
                        for (let n of e.stepCitations[a].artifacts || []) n.citationInfo && t.push(n.citationInfo);
                    let a = t.length,
                        n = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), n[t] = (n[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: n,
                        numSearchResults: a
                    }
                } catch (e) {
                    return {
                        allArtifacts: [],
                        resultsBySource: {},
                        numSearchResults: 0
                    }
                }
            }

            function o(e, t) {
                try {
                    let l = function(e) {
                            let t = [];
                            for (let a of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, n, r] = a;
                                ("claim" === n || "artifact" === n) && t.push({
                                    planKey: e,
                                    citationType: n,
                                    resourceId: r
                                })
                            }
                            return t
                        }(e),
                        s = {},
                        d = new Set;
                    for (let e of l) {
                        let {
                            planKey: l,
                            citationType: c,
                            resourceId: u
                        } = e;
                        try {
                            var a, n, r, i, o;
                            let e;
                            if (!l || !c || !u) continue;
                            let p = t.stepCitations[l];
                            if (!p) continue;
                            if ("claim" === c) {
                                let t = null == (n = p.claims) ? void 0 : n.find(e => e.id === u);
                                null != t && null != (r = t.supportingArtifactIds) && r[0] && (e = null == (i = p.artifacts) ? void 0 : i.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === c && (e = null == (o = p.artifacts) ? void 0 : o.find(e => e.id === u));
                            if (null != (a = e) && a.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", d.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), s[t] = (s[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let c = Object.values(s).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: s,
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

            function l(e) {
                let t = e.findLast(e => "researcher-report" === e.type);
                return {
                    citationInfo: t && t.citationInfo ? t.citationInfo : {
                        stepCitations: {}
                    },
                    reportContent: (null == t ? void 0 : t.value) || ""
                }
            }
            a.d(t, {
                Mi: () => r,
                VJ: () => l,
                W6: () => i,
                y5: () => n,
                ye: () => o
            }), a(410838), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454), a(908872), a(737550)
        },
        179701: (e, t, a) => {
            function n(e) {
                var t;
                let n = e.invite_targets.filter(a(64273).Gz),
                    r = e.invite_targets.filter(a(64273).ju),
                    i = n.length + r.length,
                    o = a(381453).oE(e.permission_items.map(e => {
                        if ("user_permission" === e.type) return e.user_id && (0, a(4962).ot)(e.user_id)
                    })),
                    l = new Set(null == (t = (0, a(328765).S)()) ? void 0 : t.getEmailDomains()),
                    s = e.invite_targets.filter(e => {
                        if ("existingUser" !== e.type && "newUser" !== e.type) return !1;
                        let t = (0, a(801109).zN)(e.value.email);
                        return t && l.has(t)
                    }).flatMap(e => "agent" === e.type ? [] : e.value.id ? [(0, a(4962).ot)(e.value.id)] : []),
                    d = (0, a(216260).AI)(),
                    c = e.invitee_ids_with_internal_domain ? ? [];
                return {
                    role: e.role,
                    user_count: i,
                    new_user_count: n.length,
                    new_workspace_member_count: e.is_space ? i : s.length,
                    new_workspace_member_ids: e.is_space ? o : s,
                    is_onboarding: e.is_onboarding,
                    invite_flow_id: e.invite_flow_id,
                    invite_origin: e.invite_origin,
                    invitee_ids: o,
                    invite_message_length: e.invite_message_length,
                    subscription_tier: d,
                    domain_type: e.domainType,
                    ...!e.is_space && {
                        share_menu_session_id: e.share_menu_session_id
                    },
                    allow_domain_auto_invite: s.length > 0,
                    is_space: e.is_space,
                    collection_id: e.collection_id,
                    owned_collection_count: e.owned_collection_count,
                    linked_collection_count: e.linked_collection_count,
                    parent_collection_id: e.parent_collection_id,
                    is_internal_domain: c.length > 0,
                    invitee_ids_with_internal_domain: c,
                    invitee_ids_with_internal_domain_enforced: e.invitee_ids_with_internal_domain_enforced
                }
            }

            function r(e) {
                let t = n(e);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_error",
                        eventProperties: t
                    }
                })
            }

            function i(e, t) {
                let r = n(t);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite",
                        eventProperties: { ...r,
                            is_space: t.is_space
                        }
                    }
                });
                let i = (0, a(328765).S)();
                if (!i) return;
                let l = i.id;
                if (a(105692).subscriptionDataStoreInstance.waitUntilLoaded().then(() => {
                        let n = a(105692).subscriptionDataStoreInstance.state,
                            i = n ? (0, a(34504).V)(e, n, l) : void 0,
                            s = n ? (0, a(19676).h)(e, n, l) : void 0;
                        (0, a(104310).u)({
                            event: {
                                eventName: "invite_debug_with_block_usage",
                                eventProperties: { ...r,
                                    is_space: t.is_space,
                                    is_over_block_limit: i,
                                    block_usage: s
                                }
                            }
                        }), t.is_space || (o(e, r), a(287621).xO(e, {
                            inviteTargets: t.invite_targets,
                            origin: t.invite_origin
                        }))
                    }), t.is_space || r.allow_domain_auto_invite) {
                    (0, a(104310).u)({
                        event: {
                            eventName: "space_invite",
                            eventProperties: r
                        }
                    }), (0, a(772208).M)(e, {
                        space_invited: !0
                    }), a(287621).KX(e, {
                        invite_origin: t.invite_origin,
                        domainType: t.domainType,
                        new_workspace_member_count: r.new_workspace_member_count,
                        new_workspace_member_ids: r.new_workspace_member_ids,
                        allow_domain_auto_invite: r.allow_domain_auto_invite
                    });
                    let n = (0, a(616579).j)({
                        environment: e,
                        spaceId: i.id
                    }) ? ? 1;
                    var s, d = e,
                        c = {
                            visibleMembersCount: n,
                            isProfessionalTeamUser: t.isProfessionalTeamUser,
                            domainType: t.domainType
                        };
                    let o = (0, a(216260).AI)();
                    if (c.visibleMembersCount <= 1) {
                        (0, a(195857).DO_NOT_USE_trackLegacy)("workspace_first_invite_sent"), s = {
                            subscriptionTier: o,
                            domainType: c.domainType
                        }, (0, a(378414).W)(d, {
                            event: "workspace_first_invite_sent",
                            data: s
                        }), "professional" === c.domainType && ((0, a(104310).u)({
                            event: {
                                eventName: "professional_workspace_first_invite_sent",
                                eventProperties: {
                                    visible_members_count: c.visibleMembersCount,
                                    is_professional_team_user: c.isProfessionalTeamUser,
                                    domain_type: c.domainType
                                }
                            }
                        }), (0, a(378414).W)(d, {
                            event: "professional_workspace_first_invite_sent"
                        }))
                    }
                }
                t.is_space || r.new_workspace_member_ids.length === t.invite_targets.length || ((0, a(104310).u)({
                    event: {
                        eventName: "page_invite",
                        eventProperties: r
                    }
                }), function(e, t) {
                    let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!n) return;
                    let r = n.getKeyStore("settings").getKeyStore("signup_time").getValue();
                    if (!n.getKeyStore("settings").getKeyStore("first_page_invite_at").getValue()) {
                        let i = Date.now(),
                            o = { ...t,
                                ...r ? {
                                    signup_time_ready: !0,
                                    time_from_signup_to_first_page_invite: r - i
                                } : {
                                    signup_time_ready: !1
                                }
                            };
                        (0, a(104310).u)({
                            event: {
                                eventName: "page_invite_time",
                                eventProperties: o
                            }
                        }), (0, a(377796).createAndCommit)({
                            userAction: "firstPageInvite",
                            environment: e,
                            cellTarget: "main",
                            userId: n.id,
                            canUndo: !0,
                            perform: e => {
                                (0, a(862759).m)({
                                    userSettingsStore: n,
                                    data: {
                                        first_page_invite_at: i
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }
                }(e, r))
            }
            async function o(e, t) {
                let n, r = a(728372).AppStoreSidebarSpaceStore.state,
                    i = a(728372).AppStoreCurrentUserStore.state,
                    o = r && r.canEditMembership(),
                    l = a(904434).FX(),
                    s = null == i ? void 0 : i.getEmail();
                if (!o || !l || !s || "professional" !== l) return;
                let d = (0, a(801109).zN)(s);
                if (d) {
                    if (a(908032).i({
                            userId: null == i ? void 0 : i.id,
                            spaceId: r.id,
                            debugFrom: "trackPageInviteGuestSummary"
                        })) {
                        let t = a(218744).default.getConfigKey("email_alias_migration", "mode"),
                            i = await e.api.callApi({
                                eventName: "listUsers",
                                environment: e,
                                data: {
                                    cursor: void 0,
                                    membershipFilter: "guests",
                                    limit: 1e4,
                                    sort: "name_normalized",
                                    sortDirection: "asc",
                                    query: "",
                                    spaceId: r.id,
                                    includeAliasSearch: (0, a(485477).K)(t)
                                }
                            });
                        if ("success" !== i.type) return;
                        n = i.data.users.map(e => e.id)
                    } else {
                        let e = a(105692).subscriptionDataStoreInstance.state;
                        if (!e) return;
                        n = (0, a(883947).o)(e).slice(0, 50).map(e => ({
                            email: a(807825).L.createChildStore(r, {
                                table: a(832375).oo9,
                                id: e.userId
                            }).getEmail(),
                            guestId: e.userId
                        })).filter(e => e.email && (0, a(801109).zN)(e.email) === d).map(e => e.guestId)
                    }(0, a(104310).u)({
                        event: {
                            eventName: "page_invite_guest_summary",
                            eventProperties: { ...t,
                                guest_with_same_domain_count: n.length,
                                guest_ids: n
                            }
                        }
                    })
                }
            }

            function l(e) {
                let t = (0, a(192159).AI)(e.billingData);
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_typed",
                        eventProperties: {
                            invite_flow_id: e.invite_flow_id,
                            invite_origin: e.invite_origin,
                            subscription_tier: t
                        }
                    }
                })
            }

            function s(e) {
                let t, {
                    selected_user_token: n
                } = e;
                "group" === n.type && (t = {
                    type: n.type,
                    value: {
                        id: n.value.group_id
                    }
                }), (0, a(104310).u)({
                    event: {
                        eventName: "invite_select_target",
                        eventProperties: t ? { ...e,
                            selected_user_token: t
                        } : e
                    }
                })
            }

            function d(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_change_role",
                        eventProperties: e
                    }
                })
            }

            function c(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "abandon_permissions_invite",
                        eventProperties: e
                    }
                })
            }

            function u(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_share_workspace_invite",
                        eventProperties: e
                    }
                })
            }

            function p(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "send_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function f(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "send_membership_request",
                        eventProperties: e
                    }
                })
            }

            function g(e) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("send_guest_request", e)
            }

            function m(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "skip_share_workspace",
                        eventProperties: e
                    }
                })
            }

            function h(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_page_share_invite",
                        eventProperties: e
                    }
                })
            }

            function b() {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_space_invite",
                        eventProperties: {}
                    }
                })
            }

            function v(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_modal_input_focus",
                        eventProperties: e
                    }
                })
            }

            function y(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "invite_users_to_page",
                        eventProperties: e
                    }
                }), a(707964).u4({
                    name: "invite_users_to_page"
                })
            }

            function _(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "internal_domain_enforced",
                        eventProperties: e
                    }
                })
            }

            function I() {
                (0, a(104310).u)({
                    event: {
                        eventName: "workspace_over_guest_limit",
                        eventProperties: {}
                    }
                })
            }

            function S(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "open_invite_members_modal",
                        eventProperties: e
                    }
                })
            }

            function w(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "share_menu_invite_display_mode_change",
                        eventProperties: e
                    }
                })
            }
            a.d(t, {
                iv: () => c,
                _u: () => p,
                Jg: () => i,
                J8: () => r,
                hp: () => _,
                Jy: () => d,
                Wd: () => v,
                kH: () => s,
                D2: () => l,
                R2: () => y,
                vX: () => S,
                F1: () => h,
                bT: () => u,
                VV: () => b,
                xF: () => g,
                RH: () => f,
                UC: () => w,
                l8: () => m,
                ig: () => I
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(430670), a(581454)
        },
        184444: (e, t, a) => {
            function n(e) {
                return (0, a(682985).K8)(() => (0, a(993638).eJ)({
                    billingData: e
                }), [e])
            }

            function r() {
                return (0, a(682985).K8)(() => {
                    var e;
                    return (0, a(262166).OX)(null == (e = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : e.getSubscriptionTier())
                }, [])
            }
            a.d(t, {
                bw: () => n,
                on: () => p().o,
                IU: () => l,
                g4: () => s().g,
                kP: () => r,
                Wo: () => o,
                o2: () => d().o,
                bR: () => u
            });
            var i = a(296540);

            function o() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).K8)(() => a(375592).T.getData(e, {
                        userId: e.currentUser.id || ""
                    }), [e]),
                    [n, r] = (0, i.useState)();
                return (0, i.useEffect)(() => {
                    r(!!t && "company_employee_count" in t && parseInt(t.company_employee_count) > 99)
                }, [t]), n
            }

            function l(e) {
                let {
                    spaceId: t,
                    environment: n
                } = e, r = (0, a(855361).S)({
                    environment: n,
                    spaceId: t
                }) ? ? 1, i = (0, a(226309).lh)({
                    spaceId: t
                }), o = (0, a(682985).K8)(() => (0, a(993638).eJ)({
                    billingData: i
                }), [i]), [{
                    value: l
                }] = (0, a(97668).Yb)(() => n.api.callApi({
                    eventName: "isEmailEducation",
                    environment: n,
                    data: {}
                }), [n]);
                return !!l && "failed" !== l.type && !!l.data.isEligible && !!i && !(0, a(192159).KH)(i, "plan") && o && 1 === r
            }
            var s = () => a(585279),
                d = () => a(162819);

            function c(e) {
                var t;
                let {
                    settings: a,
                    campaign: n
                } = e;
                return null == a || null == (t = a.offers_metadata) || null == (t = t[n]) ? void 0 : t.modal_seen_at
            }

            function u(e, t = {}) {
                let n = (0, a(533992).v3)(),
                    r = (0, a(972740).L)(),
                    o = t.isEnabled ? ? !0,
                    l = (0, a(682985).K8)(() => {
                        var t;
                        if (r) return null == (t = r.getSetting("offers_metadata")) || null == (t = t[e]) ? void 0 : t.modal_seen_at
                    }, [r, e]),
                    s = (0, i.useCallback)(() => {
                        void 0 === l && function(e) {
                            let {
                                environment: t,
                                spaceStore: n,
                                campaign: r
                            } = e;
                            n && void 0 === c({
                                settings: n.getSettings(),
                                campaign: r
                            }) && (0, a(377796).createAndCommit)({
                                environment: t,
                                userAction: "offers.saveOfferModalSeen",
                                cellTarget: {
                                    spaceWithId: n.id
                                },
                                canUndo: !1,
                                perform: e => {
                                    let t = n.getSettingsStore().getValue();
                                    void 0 === t || void 0 === c({
                                        settings: t,
                                        campaign: r
                                    }) && (0, a(818116).R)(n, e, function(e) {
                                        var t;
                                        let {
                                            settings: a,
                                            campaign: n,
                                            seenAtTimestampMs: r
                                        } = e;
                                        return { ...a,
                                            offers_metadata: { ...a.offers_metadata ? ? {},
                                                [n] : { ...(null == (t = a.offers_metadata) ? void 0 : t[n]) ? ? {},
                                                    modal_seen_at : r
                                                }
                                            }
                                        }
                                    }({
                                        settings: t,
                                        campaign: r,
                                        seenAtTimestampMs: Date.now()
                                    }))
                                }
                            })
                        }({
                            environment: n,
                            spaceStore: r,
                            campaign: e
                        })
                    }, [n, r, e, l]);
                return (0, i.useEffect)(() => {
                    o && s()
                }, [o, s]), s
            }
            var p = () => a(555017)
        },
        187041: (e, t, a) => {
            a.d(t, {
                g: () => n
            });

            function n({
                spaceId: e
            }) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    if (e) return a(185995).default.getData(t, {
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        187649: (e, t, a) => {
            let n, r;

            function i(e) {
                n = e
            }
            async function o() {
                return r || (n ? r = await n() : void 0)
            }
            a.d(t, {
                Q: () => i,
                z: () => o
            })
        },
        189684: (e, t, a) => {
            function n(e) {
                return e.replaceAll(/(<([^>]+)>)/gi, "").trim()
            }

            function r(e, t = 140) {
                if (e.length <= t) return e;
                let a = e.substring(0, t).trim(),
                    n = a.split(" ");
                return n.length > 1 && " " !== a.charAt(a.length - 1) ? (n.pop(), `${n.map(e=>e.trim()).join(" ")}...`) : `${a.substring(0,t-3)}...`
            }

            function i(e) {
                return /[\"\']/.test(e)
            }
            a.d(t, {
                Kq: () => n,
                vo: () => i,
                xv: () => r
            }), a(898992), a(354520), a(581454)
        },
        189760: (e, t, a) => {
            a.d(t, {
                B: () => n,
                r: () => r
            });
            let n = {
                dog: (0, a(109939).YK)({
                    loyalWoof: {
                        id: "dogAccessory.speechBubble.loyalWoof",
                        defaultMessage: "Woof! I’m here to help!"
                    },
                    goodBoyOnDuty: {
                        id: "dogAccessory.speechBubble.goodBoyOnDuty",
                        defaultMessage: "Good boy on duty"
                    },
                    tailWags: {
                        id: "dogAccessory.speechBubble.tailWags",
                        defaultMessage: "*tail wags*"
                    },
                    barkBark: {
                        id: "dogAccessory.speechBubble.barkBark",
                        defaultMessage: "Bark bark! (That means hello)"
                    },
                    fetchedResults: {
                        id: "dogAccessory.speechBubble.fetchedResults",
                        defaultMessage: "I fetched your results!"
                    },
                    goodAI: {
                        id: "dogAccessory.speechBubble.goodAI",
                        defaultMessage: "Who’s a good AI? I’m a good AI."
                    },
                    sitStaySearch: {
                        id: "dogAccessory.speechBubble.sitStaySearch",
                        defaultMessage: "Sit. Stay. Search. Good boy."
                    },
                    willWorkForTreats: {
                        id: "dogAccessory.speechBubble.willWorkForTreats",
                        defaultMessage: "Will work for treats"
                    },
                    loyalSidekick: {
                        id: "dogAccessory.speechBubble.loyalSidekick",
                        defaultMessage: "Your loyal sidekick"
                    },
                    happyPanting: {
                        id: "dogAccessory.speechBubble.happyPanting",
                        defaultMessage: "*happy panting noises*"
                    },
                    sniffingAnswers: {
                        id: "dogAccessory.speechBubble.sniffingAnswers",
                        defaultMessage: "Sniffing out answers for you…"
                    },
                    alwaysByYourSide: {
                        id: "dogAccessory.speechBubble.alwaysByYourSide",
                        defaultMessage: "Always by your side"
                    },
                    dataRetriever: {
                        id: "dogAccessory.speechBubble.dataRetriever",
                        defaultMessage: "Data retriever at your service"
                    },
                    pawsitively: {
                        id: "dogAccessory.speechBubble.pawsitively",
                        defaultMessage: "Pawsitively ready to help"
                    },
                    digIntoThis: {
                        id: "dogAccessory.speechBubble.digIntoThis",
                        defaultMessage: "Let’s dig into this together"
                    },
                    noRuffDays: {
                        id: "dogAccessory.speechBubble.noRuffDays",
                        defaultMessage: "No ruff days on my watch"
                    },
                    boop: {
                        id: "dogAccessory.speechBubble.boop",
                        defaultMessage: "Boop!"
                    },
                    nuzzle: {
                        id: "dogAccessory.speechBubble.nuzzle",
                        defaultMessage: "*nuzzle*"
                    },
                    henloFren: {
                        id: "dogAccessory.speechBubble.henloFren",
                        defaultMessage: "Henlo fren"
                    },
                    arfArf: {
                        id: "dogAccessory.speechBubble.arfArf",
                        defaultMessage: "arf arf"
                    },
                    everyPageNeedsAGoodDog: {
                        id: "dogAccessory.speechBubble.everyPageNeedsAGoodDog",
                        defaultMessage: "Every page needs a good dog"
                    },
                    organizingWorkspace: {
                        id: "dogAccessory.speechBubble.organizingWorkspace",
                        defaultMessage: "Organizing your workspace, one bark at a time"
                    },
                    sidebarRentFree: {
                        id: "dogAccessory.speechBubble.sidebarRentFree",
                        defaultMessage: "I live in your sidebar rent-free"
                    },
                    goodestBoy: {
                        id: "dogAccessory.speechBubble.goodestBoy",
                        defaultMessage: "Notion’s goodest boy"
                    },
                    aiZoomies: {
                        id: "dogAccessory.speechBubble.aiZoomies",
                        defaultMessage: "AI-powered zoomies"
                    },
                    largeLanguageLabrador: {
                        id: "dogAccessory.speechBubble.largeLanguageLabrador",
                        defaultMessage: "Large Language Labrador at your service"
                    },
                    bellyRubsAndDatabases: {
                        id: "dogAccessory.speechBubble.bellyRubsAndDatabases",
                        defaultMessage: "Trained on belly rubs and databases"
                    },
                    neuralPetwork: {
                        id: "dogAccessory.speechBubble.neuralPetwork",
                        defaultMessage: "Neural network? I prefer neural *pet*work"
                    },
                    machineLearning: {
                        id: "dogAccessory.speechBubble.machineLearning",
                        defaultMessage: "Machine learning? I already know sit and stay"
                    },
                    goldenRetrieverModel: {
                        id: "dogAccessory.speechBubble.goldenRetrieverModel",
                        defaultMessage: "I’m basically a golden *retriever* model"
                    },
                    fetchingActionItems: {
                        id: "dogAccessory.speechBubble.fetchingActionItems",
                        defaultMessage: "Fetching your action items…"
                    },
                    sniffingThroughDocs: {
                        id: "dogAccessory.speechBubble.sniffingThroughDocs",
                        defaultMessage: "Sniffing through your docs for answers"
                    },
                    neverLoseTrack: {
                        id: "dogAccessory.speechBubble.neverLoseTrack",
                        defaultMessage: "I never lose track of a page. Or a bone."
                    },
                    toChews: {
                        id: "dogAccessory.speechBubble.toChews",
                        defaultMessage: "Your to-dos are my to-chews"
                    },
                    automatingTailWags: {
                        id: "dogAccessory.speechBubble.automatingTailWags",
                        defaultMessage: "Automating tail wags since 2026"
                    },
                    assistantsAssistant: {
                        id: "dogAccessory.speechBubble.assistantsAssistant",
                        defaultMessage: "I’m the AI assistant’s assistant"
                    },
                    accessorySlot: {
                        id: "dogAccessory.speechBubble.accessorySlot",
                        defaultMessage: "They gave me a whole accessory slot!"
                    },
                    smarterThanILook: {
                        id: "dogAccessory.speechBubble.smarterThanILook",
                        defaultMessage: "Smarter than I look. Cuter than you’d expect."
                    },
                    cuteCommand: {
                        id: "dogAccessory.speechBubble.cuteCommand",
                        defaultMessage: "/ command? More like /cute command"
                    },
                    syncedPup: {
                        id: "dogAccessory.speechBubble.syncedPup",
                        defaultMessage: "Synced pup"
                    },
                    linkedDogtabase: {
                        id: "dogAccessory.speechBubble.linkedDogtabase",
                        defaultMessage: "Linked dog-tabase"
                    },
                    dogEnteredChat: {
                        id: "dogAccessory.speechBubble.dogEnteredChat",
                        defaultMessage: "@dog has entered the chat"
                    },
                    teachNewTricks: {
                        id: "dogAccessory.speechBubble.teachNewTricks",
                        defaultMessage: "You can teach me new tricks!"
                    }
                })
            };

            function r(e) {
                return null != e && e in n
            }
        },
        190462: (e, t, a) => {
            e.exports = a.p + "46e91f58a3919e25.png"
        },
        192883: (e, t, a) => {
            function n(e) {
                let {
                    environment: t,
                    inMemoryRecordCache: n,
                    pointer: r,
                    userId: i,
                    recordWithRole: o,
                    debugSource: l
                } = e;
                (0, a(11266).P)({
                    currentUserId: t.currentUser.id,
                    defaultRecordCache: t.defaultRecordCache,
                    inMemoryRecordCache: n,
                    pointer: r,
                    userId: i,
                    model: a(993189).Bj6.fromValue(r.table, o.value),
                    role: o.role,
                    updatePaths: [
                        []
                    ],
                    debugSource: l
                })
            }
            async function r(e) {
                let t, r, {
                        inMemoryRecordCache: i,
                        pointer: o,
                        userId: l,
                        environment: s,
                        minimumVersion: d,
                        isPendingTransactionForRecord: c
                    } = e,
                    u = a(218744).default.checkGate({
                        gateName: "record_cache_backfill_space_id"
                    }),
                    p = c(o),
                    f = s.defaultRecordCache.persistedRecordCache;
                if (void 0 === l && s.currentUser.id) {
                    var g;
                    let e = null == (g = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : g.pointer;
                    (0, a(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record_on_undefined_userid_while_logged_in",
                            eventProperties: {
                                table: o.table,
                                is_main_editor_current_block_store: void 0 !== e && o.id === e.id && o.table === e.table
                            }
                        }
                    });
                    return
                }
                if (p && f && (0, a(16903).u)(o)) return await f.get({
                    pointer: o,
                    userId: l
                });
                let m = f && (0, a(16903).u)(o) ? f.get({
                    pointer: o,
                    userId: l
                }) : void 0;
                if (m) {
                    let e = await (0, a(975162).nQ)(function(e) {
                        switch (e.device.platform) {
                            case "browser":
                                switch (e.device.os) {
                                    case "mac":
                                        return 172;
                                    case "windows":
                                        return 250;
                                    case "android":
                                        return 0;
                                    case "ios":
                                        return 360;
                                    case "chrome":
                                        return 238;
                                    case "linux":
                                        return 220
                                }
                                return 200;
                            case "electron":
                                return 1 / 0;
                            case "react-native":
                                switch (e.device.os) {
                                    case "android":
                                        return 270;
                                    case "ios":
                                        return 64
                                }
                                return 102
                        }
                    }(s), m);
                    e.timeout || (t = e.result), e.timeout && !a(205885).A.state.online && (t = await m), t && n({
                        environment: s,
                        inMemoryRecordCache: i,
                        pointer: o,
                        userId: l,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                }
                if (!a(205885).A.state.online) return t && a(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (0, a(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                }), t;
                try {
                    let e = i.getEntryWithBackfilledSpaceId({
                            pointer: o,
                            userId: l
                        }, {
                            ignoreAllCaches: !0
                        }),
                        c = e ? e.value : void 0,
                        p = e ? e.pointer : void 0;
                    if (d && null != c && c.value && (null == c ? void 0 : c.value.version) >= d) return a(218744).default.checkGate({
                        gateName: "record_map_logging"
                    }) && (0, a(104310).u)({
                        event: {
                            eventName: "refresh_and_return_record.use_local",
                            eventProperties: {}
                        }
                    }), c;
                    let f = (0, a(722371).O9)(p) ? { ...p
                        } : { ...o
                        },
                        g = null == c ? void 0 : c.value;
                    u && void 0 === f.spaceId && p && ((0, a(433261).RP)(p) || (0, a(433261).kW)(p.table)) && g && "space_id" in g && "string" == typeof g.space_id && (f.spaceId = g.space_id);
                    let h = !1;
                    try {
                        r = await (0, a(130925).e)(s, {
                            userId: l,
                            version: c && c.value && c.value.version ? c.value.version : -1,
                            pointer: f,
                            shouldThrowError: !0
                        })
                    } catch (e) {
                        h = !0
                    }
                    if (r) {
                        (0, a(929984).s)({
                            environment: s,
                            userId: l
                        });
                        let e = a(993189).Bj6.fromValue(o.table, r.value);
                        e && a(209401).t.broadcastRemoteRecordRefresh(o, e), n({
                            environment: s,
                            inMemoryRecordCache: i,
                            pointer: o,
                            userId: l,
                            recordWithRole: r,
                            debugSource: "refreshAndReturnRecord (remoteResult)"
                        })
                    }
                    h && !t && (t = await m) && n({
                        environment: s,
                        inMemoryRecordCache: i,
                        pointer: o,
                        userId: l,
                        recordWithRole: t,
                        debugSource: "refreshAndReturnRecord (localResult)"
                    })
                } catch (e) {
                    console.error(e)
                }
                return a(218744).default.checkGate({
                    gateName: "record_map_logging"
                }) && (r ? (0, a(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_remote",
                        eventProperties: {}
                    }
                }) : t && (0, a(104310).u)({
                    event: {
                        eventName: "refresh_and_return_record.use_local",
                        eventProperties: {}
                    }
                })), r || t
            }
            a.d(t, {
                s: () => r
            })
        },
        199894: (e, t, a) => {
            a.d(t, {
                t: () => n
            }), a(16280), a(898992), a(672577), a(581454);

            function n(e) {
                let {
                    environment: t,
                    selection: n,
                    transaction: r,
                    preventSetSelection: i
                } = e, {
                    blocks: o
                } = e, l = (0, a(385941).Z)();
                if (!l) throw Error("No root store.");
                if (n.length > 0) {
                    let e = n[0],
                        l = a(240414).T.find(t => t.props.store === e && t.props.canInsertAbove && t.props.onInsertAbove);
                    if (!l || !l.props.onInsertAbove) throw Error("No Selectable found.");
                    let s = l.props.onInsertAbove({
                        insertStores: o,
                        transaction: r
                    });
                    return i || (0, a(854924).t)({
                        environment: t,
                        stores: s
                    }), s
                } {
                    let e = l.getContentStore(),
                        n = o.map(t => (0, a(135674).B)({
                            parentStore: e,
                            appendStore: t,
                            transaction: r
                        }).childStore);
                    return i || (0, a(854924).t)({
                        environment: t,
                        stores: n
                    }), n
                }
            }
        },
        200424: (e, t, a) => {
            e.exports = a.p + "9ade71d75a1c0e93.png"
        },
        202151: (e, t, a) => {
            e.exports = a.p + "f6041c6bf8f9f53e.png"
        },
        208117: (e, t, a) => {
            function n(e) {
                let {
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: i,
                    billingData: o
                } = e;
                return r({
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: i,
                    billingData: o
                }) && !(0, a(192159).N8)(o) && !!(!i || !(0, a(556306).h)(i))
            }

            function r(e) {
                let {
                    environment: t,
                    externalOrgSummary: n,
                    spaceStore: r,
                    billingData: i
                } = e;
                if (i && (0, a(192159).N8)(i)) return !0;
                let o = null == r ? void 0 : r.id;
                return !!o && (!!(((0, a(616579).j)({
                    environment: t,
                    spaceId: o
                }) ? ? 1) > 99 || (0, a(192159).N8)(i)) || !!n && "company_employee_count" in n && parseInt(n.company_employee_count) > 99)
            }
            a.d(t, {
                H: () => r,
                q: () => n
            })
        },
        209401: (e, t, a) => {
            function n(e) {
                return e === a(832375).evP || e === a(832375).SNf
            }
            a.d(t, {
                t: () => r
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            class r {
                static containers = new(a(277637)).G(() => new WeakMap);
                static observers = new Set;
                observer;
                renderedPointers = new(a(227318)).d;
                refreshedPointers = new(a(227318)).d;
                isRecording = !1;
                startTime;
                lastChunkTimeoutId;
                abortTimeoutId;
                chunkSource;
                chunkLocalSource;
                static forRootStore(e, t) {
                    let a = this.containers.get(e).get(t);
                    return a || (a = new r(t.pointer, e), this.containers.get(e).set(t, a), this.observers.add(new WeakRef(a))), a
                }
                static broadcastRemoteRecordRefresh(e, t) {
                    for (let a of this.observers) {
                        let n = a.deref();
                        n ? n.onRemoteRecordRefresh(e, t) : this.observers.delete(a)
                    }
                }
                constructor(e, t) {
                    this.rootPointer = e, this.container = t, this.observer = (0, a(137182).j)(`RenderedRecordObserver(${t} ${e.table}:${e.id})`, this)
                }
                didUnregister() {
                    for (let e of (this.isRecording = !1, this.clearTimeouts(), this.renderedPointers = new(a(227318)).d, this.refreshedPointers = new(a(227318)).d, r.observers)) {
                        let t = e.deref();
                        t && t === this && r.observers.delete(e)
                    }
                }
                startRecording({
                    chunkSource: e,
                    chunkLocalSource: t
                }) {
                    this.chunkSource = e, this.chunkLocalSource = t, this.startTime = Date.now(), this.isRecording = !0, this.abortTimeoutId = setTimeout(() => this.observer.unregister(), 6e4)
                }
                onRemoteRecordRefresh(e, t) {
                    this.isRecording && this.startTime && n(e.table) && !a(496282).L3.isEqualIdTable(e, this.rootPointer) && t.getLastEditedTime() < this.startTime && this.refreshedPointers.add(e)
                }
                onLastChunkLoaded() {
                    this.isRecording && (this.clearTimeouts(), this.lastChunkTimeoutId = setTimeout(() => this.stopRecordingAndFlush(), 1e4))
                }
                stopRecordingAndFlush() {
                    this.lastChunkTimeoutId = void 0, this.isRecording = !1;
                    let e = new(a(227318)).d;
                    for (let t of this.refreshedPointers) this.renderedPointers.has(t) && e.add(t);
                    if (this.chunkSource) {
                        let t = {
                            eventName: "page_load_record_stats",
                            eventProperties: {
                                container: this.container,
                                root_table: this.rootPointer.table,
                                root_id: this.rootPointer.id,
                                chunk_source: this.chunkSource,
                                chunk_local_source: this.chunkLocalSource,
                                record_stats: {
                                    rendered_and_refreshed: e.size(),
                                    refreshed: this.refreshedPointers.size(),
                                    rendered: this.renderedPointers.size()
                                }
                            }
                        };
                        (0, a(104310).u)({
                            event: t
                        })
                    }
                    this.observer.unregister()
                }
                clearTimeouts() {
                    this.abortTimeoutId && clearTimeout(this.abortTimeoutId), this.lastChunkTimeoutId && clearTimeout(this.lastChunkTimeoutId)
                }
                maybeAddStore(e) {
                    if (!this.isRecording || !(e && e instanceof a(569574).yZ)) return;
                    let t = e.pointer;
                    n(t.table) && this.renderedPointers.add(t)
                }
                onAutoListenerAdded = (e, t) => {
                    this.maybeAddStore(t)
                };
                onAutoListenerRemoved = () => {}
            }
        },
        215813: (e, t, a) => {
            a.d(t, {
                E: () => o
            }), a(944114);
            var n = () => a(517013),
                r = () => a(832375),
                i = () => a(173157);

            function o(e) {
                var t;
                let {
                    environment: o,
                    store: l,
                    permissionItems: s,
                    transaction: d,
                    inviteFlowId: c,
                    inviteMessage: u,
                    inviteOrigin: p,
                    disable_invite_email: f
                } = e, g = l.getSpaceId() || (l.table === r().NXh ? l.id : null == (t = (0, a(974410).f)(l)) ? void 0 : t.id), {
                    id: m
                } = o.currentUser;
                for (let e of s)
                    if (g && "user_permission" === e.type && e.invite_id) {
                        if (l.table === r().C0E) continue;
                        let {
                            inviteeId: t,
                            inviteeTable: o
                        } = function(e) {
                            let {
                                item: t,
                                spaceId: n
                            } = e;
                            return a(642157).B2(t) ? {
                                inviteeId: t.user_id,
                                inviteeTable: r().oo9
                            } : a(642157).P3(t) ? {
                                inviteeId: t.bot_id,
                                inviteeTable: r().GPl
                            } : a(642157).Ds(t) ? {
                                inviteeId: t.group_id,
                                inviteeTable: a(434652).gp
                            } : a(642157).Lg(t) ? {
                                inviteeId: n,
                                inviteeTable: r().NXh
                            } : a(642157).gl(t) ? {
                                inviteeId: t.team_id,
                                inviteeTable: r().yKj
                            } : {}
                        }({
                            item: e,
                            spaceId: g
                        }), s = {
                            id: e.invite_id,
                            version: 1,
                            flow_id: c,
                            space_id: g,
                            target_id: l.id,
                            target_table: l.table,
                            inviter_id: m,
                            inviter_table: r().oo9,
                            invitee_id: t,
                            invitee_table_or_group: o,
                            message: u,
                            created_time: Date.now(),
                            attributes: {
                                permission: e,
                                origin_type: p,
                                disable_invite_email: f
                            }
                        };
                        (0, i().z)({
                            store: (0, n().v3)(l, {
                                table: "invite",
                                id: s.id,
                                spaceId: g
                            }),
                            data: s,
                            transaction: d
                        })
                    }
                return d.postSubmitCallbacks.push(e => {
                    a(179701).R2({
                        status: e ? "fail" : "success",
                        origin: p
                    })
                }), !0
            }
        },
        225476: (e, t, a) => {
            function n(e) {
                if (null != e && e.blockId) return e.blockId
            }

            function r(e, t) {
                let a = e.currentUser.id;
                return t.userId === a || t.present
            }

            function i(e) {
                var t;
                return (null == (t = e.state.rootStore) ? void 0 : t.canEdit()) ? ? !1
            }

            function o(e) {
                let {
                    pageVisitStore: t,
                    presenceStore: n
                } = e, {
                    remotePresenceData: r
                } = n.state, i = [];
                r && (0, a(763230).uk)(r, e => {
                    null != e && e.userId && i.push(e)
                });
                let {
                    pageId: o,
                    lastViewTime: l,
                    lastExitTime: s,
                    totalCount: d,
                    hasMore: c,
                    ...u
                } = t.state;
                return (0, a(763230).uk)(u, e => {
                    e.isDefined() && i.push({
                        userId: e.getUserId(),
                        activityTimestampNearestMinuteMs: (0, a(627179).WY)(e.getVisitedAt()),
                        present: !1
                    })
                }), i = (0, a(381453).hS)(i, e => e.userId), (0, a(381453).Ul)(i, ({
                    activityTimestampNearestMinuteMs: e
                }) => e ? -e : 0)
            }

            function l(e) {
                let {
                    userId: t,
                    theme: n
                } = e;
                return (0, a(514214).MF)(t) ? a(632079).Tj.icon.secondary : (0, a(632079).Nq)(t, n)
            }
            a.d(t, {
                $L: () => l,
                EV: () => n,
                PZ: () => o,
                dp: () => r,
                xm: () => i
            }), a(944114)
        },
        226512: (e, t, a) => {
            a.d(t, {
                R: () => i
            });
            var n = a(296540),
                r = a(474848);

            function i(e) {
                var t, i;
                let l, s = (0, a(109939).tz)(),
                    {
                        onClick: d,
                        onDismiss: c,
                        style: u,
                        hoveredStyle: p,
                        showBackground: f = !0
                    } = e,
                    g = (t = u, i = f, l = (0, a(781889).o)(), (0, a(960253).I)(() => ({
                        button: {
                            alignItems: "center",
                            background: i ? a(632079).Tj.buttonHoveredBackground : "none",
                            borderRadius: "100%",
                            display: "flex",
                            height: a(104509).Ev.lg,
                            width: a(104509).Ev.lg,
                            justifyContent: "center",
                            position: "absolute",
                            insetInlineEnd: 10 + l,
                            top: 10,
                            zIndex: 10,
                            ...t
                        },
                        buttonHovered: {
                            background: i ? a(632079).Tj.buttonPressedBackground : a(632079).Tj.buttonHoveredBackground
                        }
                    }), [i, t, l])),
                    m = (0, n.useContext)(a(19187).e),
                    h = function(e) {
                        let {
                            onClick: t,
                            onDismiss: a
                        } = e, r = (0, n.useCallback)(e => {
                            null == t || t(e), null == a || a()
                        }, [t, a]);
                        return t || a ? r : void 0
                    }({
                        onClick: d,
                        onDismiss: c ? ? m
                    });
                return h ? (0, r.jsx)(a(374533).A, {
                    ariaLabel: s.formatMessage(o.dismissModalAriaLabel),
                    icon: a(766970).xMarkFillIcon,
                    onClick: h,
                    style: g.button,
                    hoveredStyle: { ...g.buttonHovered,
                        ...p
                    }
                }) : null
            }
            let o = (0, a(109939).YK)({
                dismissModalAriaLabel: {
                    id: "dismiss.dismissButton.label",
                    defaultMessage: "Dismiss"
                }
            })
        },
        250943: (e, t, a) => {
            a.d(t, {
                E: () => n
            }), a(581454);

            function n(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, a(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let n = (0, a(247438).RQ)(e.getValue()),
                        r = (0, a(247438).xbM)(n, t),
                        {
                            tokensInsideRange: i
                        } = (0, a(247438).AI5)(n, r.startIndex, r.endIndex);
                    return (0, a(536614).r4)(i, e)
                }).join("\n\n")
            }
        },
        251861: (e, t, a) => {
            e.exports = a.p + "4166d500779ec2a7.png"
        },
        258527: (e, t, a) => {
            e.exports = a.p + "281f47e883097642.png"
        },
        262401: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                personSlashSmallIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.81 1.85 11.03 12.84",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3.033 2.206a.625.625 0 0 1 .88.066l.1.116q.018.03.04.058l9.61 11.175.03.034a.625.625 0 0 1-.948.815l-.483-.562c-.28.155-.607.242-.942.242H4.68c-.557 0-1.09-.236-1.43-.631a1.405 1.405 0 0 1-.19-1.593C3.883 10.313 5.824 9.254 8 9.254q.135.001.27.008l-.72-.84a2.66 2.66 0 0 1-1.728-.979c-.41-.511-.64-1.162-.708-1.856l-2.148-2.5a.625.625 0 0 1 .067-.881M8 10.354c-1.854 0-3.363.903-3.961 2.073-.073.143-.052.262.046.377a.8.8 0 0 0 .595.247h6.64a1 1 0 0 0 .187-.022l-2.153-2.506A5.4 5.4 0 0 0 8 10.353M8 1.85c.925 0 1.674.383 2.18 1.012.494.617.73 1.436.73 2.291s-.236 1.674-.73 2.29l-.09.105-.73-.848c.28-.377.45-.913.45-1.547 0-.664-.185-1.223-.49-1.602-.293-.366-.724-.6-1.32-.6-.595 0-1.027.233-1.32.6l-.014.017-.726-.843c.5-.548 1.205-.874 2.06-.874"
                    })
                },
                r = (0, a(104509).wt)("personSlashSmall", n, "small")
        },
        269515: (e, t, a) => {
            e.exports = a.p + "c6b766e6d181c27f.png"
        },
        274749: (e, t, a) => {
            a.d(t, {
                i: () => n
            });

            function n(e) {
                var t;
                return null == (t = e.getSetting("getting_started_templates")) ? void 0 : t.default[0].page_id
            }
        },
        279206: (e, t, a) => {
            e.exports = a.p + "c07b23b03f31c7d0.png"
        },
        279728: (e, t, a) => {
            e.exports = a.p + "134453730e6e0d66.png"
        },
        280996: (e, t, a) => {
            a.d(t, {
                b: () => i,
                T: () => o()
            }), a(581454);
            var n = a(296540),
                r = a(474848);
            let i = n.memo(function(e) {
                let {
                    store: t = a(2009).w
                } = e, i = (0, a(682985).K8)(() => t.state.asyncModals, [t]);
                return (0, r.jsx)(r.Fragment, {
                    children: i.map(e => {
                        let {
                            id: t,
                            internalRenderModal: a,
                            isOpen: i
                        } = e, o = a(i);
                        return (0, r.jsx)(n.Fragment, {
                            children: o
                        }, t)
                    })
                })
            });
            var o = () => a(796123)
        },
        283161: (e, t, a) => {
            a.d(t, {
                z: () => n
            });

            function n(e) {
                return "user" === e.type ? {
                    type: "user_permission",
                    role: (0, a(729052).ps)(e.membershipType),
                    user_id: e.userId,
                    invite_id: e.inviteId
                } : "bot" === e.type ? {
                    type: "bot_permission",
                    role: (0, a(611042).rf)(e.membershipType),
                    bot_id: e.botId
                } : void(0, a(722371).HB)(e)
            }
        },
        285482: (e, t, a) => {
            a.d(t, {
                A: () => n
            });

            function n(e, t) {
                if ((0, a(101787).pA8)(t)) {
                    let n = (0, a(115964).$)(t.clientData);
                    if (n) return "messageValues" in t.clientData ? e.formatMessage(n, t.clientData.messageValues) : e.formatMessage(n)
                }
                return e.formatMessage(a(683646).k.generic_error)
            }
        },
        303626: (e, t, a) => {
            e.exports = a.p + "d6b5a7d3fa534ce3.png"
        },
        313669: (e, t, a) => {
            e.exports = a.p + "c37502124fe50080.png"
        },
        314331: (e, t, a) => {
            a.d(t, {
                n: () => n
            });

            function n(e) {
                return (0, a(682985).K8)(() => a(585823).gZ.state && (null == e ? void 0 : e.id) === a(585823).Di.state, [e])
            }
        },
        315144: (e, t, a) => {
            a.d(t, {
                a: () => r
            });
            let n = new(a(815048)).O2("StopDictationButton", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(5410), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(12354), a.e(5721), a.e(57688), a.e(17250), a.e(64696), a.e(39726), a.e(87971), a.e(29663), a.e(74145), a.e(55067), a.e(79349), a.e(90735), a.e(50354), a.e(71136), a.e(86102), a.e(30671), a.e(3101)]).then(a.bind(a, 985993))),
                r = (0, a(815048)._h)(n, e => e.StopDictationButton)
        },
        321412: (e, t, a) => {
            a.d(t, {
                b: () => s
            });
            var n = a(296540),
                r = a(474848);
            let i = {
                highlight: {
                    height: "calc(100% + 12px)",
                    width: "calc(100% + 24px)",
                    insetBlockStart: "-6px",
                    insetInlineStart: "-12px",
                    position: "absolute",
                    backgroundColor: a(632079).Tj.yellow.background.secondaryTranslucent,
                    borderRadius: 6,
                    pointerEvents: "none"
                }
            };

            function o({
                itemId: e,
                itemRef: t
            }) {
                let l = (0, a(533992).v3)(),
                    s = (0, n.useContext)(a(700587).U),
                    d = (0, a(682985).K8)(() => a(488301).J.state.highlightedSetting === e, [e]);
                return (0, n.useEffect)(() => {
                    d && t.current && (0, a(341471).h)({
                        element: t.current,
                        environment: l,
                        scrollerContext: s,
                        vertical: {
                            reveal: "closest"
                        },
                        horizontal: void 0,
                        animate: !0
                    })
                }, [d, l, t, s]), (0, r.jsx)(a(654979).A, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    visible: !!d,
                    config: {
                        duration: 250,
                        timingFunction: "ease-in-out"
                    },
                    style: i.highlight
                })
            }
            let l = {
                flex: 3,
                minWidth: 200
            };

            function s({
                id: e,
                title: t,
                titleId: i,
                byline: d,
                bylineId: c,
                item: u,
                badge: p,
                layout: f = "inline"
            }) {
                let g = (0, n.useRef)(null),
                    m = (0, a(960253).I)(() => ({
                        settingContainer: {
                            display: "flex",
                            width: "100%",
                            flexWrap: "wrap",
                            position: "relative",
                            gap: 12,
                            ..."stacked" === f ? {
                                flexDirection: "column"
                            } : {
                                justifyContent: "space-between",
                                alignItems: "center"
                            }
                        },
                        settingItem: {
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            ..."stacked" === f ? {
                                width: "100%"
                            } : {
                                alignItems: "flex-end"
                            }
                        }
                    }), [f]);
                return (0, r.jsxs)("div", {
                    ref: g,
                    style: m.settingContainer,
                    children: [(0, r.jsx)("div", {
                        style: l,
                        children: (0, r.jsx)(a(741489).j, {
                            title: t,
                            titleId: i,
                            byline: d,
                            bylineId: c,
                            badge: p
                        })
                    }), (0, r.jsx)("div", {
                        style: m.settingItem,
                        children: u
                    }), (0, r.jsx)(o, {
                        itemId: e,
                        itemRef: g
                    })]
                })
            }
        },
        321753: (e, t, a) => {
            a.d(t, {
                A: () => o,
                n: () => i
            });
            var n = a(296540),
                r = a(474848);

            function i(e) {
                return (0, a(960253).I)(() => ({
                    tooltipTextStyle: {
                        color: a(632079).Tj.text.inverseSecondary
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
            let o = function(e) {
                let {
                    hasTooltip: t,
                    showAvatarInTooltip: o,
                    tooltipHeader: l,
                    style: s,
                    iconStyle: d,
                    isOffline: c,
                    borderStyle: u,
                    avatarShouldShowShadow: p,
                    initialOverrideStyle: f,
                    tooltipOverrideStyle: g,
                    userValue: m,
                    userStore: h,
                    avatar: b,
                    type: v = "avatar",
                    delayThreshold: y,
                    hasPersonHoverCard: _,
                    personHoverCardEntrypoint: I = "avatar",
                    avatarOutlineOffset: S
                } = e, w = (0, a(109939).tz)(), x = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore), k = (0, a(67499).S)(), C = (0, a(682985).K8)(() => (0, a(888).$)(k) ? ? x, [k, x]), A = e.size ? ? 18, {
                    initialStyle: M,
                    avatarWrapStyle: T,
                    avatarStyle: j,
                    proxiedImageStyle: D,
                    suspendedUserStyle: P,
                    deletedUserStyle: R
                } = (0, a(960253).I)(() => ({
                    initialStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        lineHeight: `${A}px`,
                        width: A,
                        height: A,
                        overflow: "hidden",
                        textAlign: "center",
                        fontSize: Math.max(.4375 * A, 11),
                        background: a(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        isolation: "auto",
                        ...d,
                        ...f
                    },
                    avatarWrapStyle: {
                        background: a(632079).Tj.background.primary,
                        borderRadius: "100%",
                        boxShadow: p ? a(632079).Tj.avatarBoxShadow : "none",
                        outlineWidth: 1,
                        outlineStyle: u ? ? "solid",
                        outlineColor: a(632079).Tj.border.secondaryTranslucent,
                        outlineOffset: S ? ? -1,
                        ...d
                    },
                    avatarStyle: {
                        borderRadius: "100%",
                        width: A,
                        height: A,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        opacity: c ? .3 : 1,
                        ...d
                    },
                    proxiedImageStyle: {
                        width: A,
                        height: A,
                        ...d
                    },
                    suspendedUserStyle: {
                        boxSizing: "content-box",
                        borderRadius: "100%",
                        width: A - 2,
                        height: A - 2,
                        overflow: "hidden",
                        background: a(632079).Tj.suspendedUIUserAvatarBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.text.primary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        ...d
                    },
                    deletedUserStyle: {
                        boxSizing: "border-box",
                        borderRadius: "100%",
                        width: A,
                        height: A,
                        overflow: "hidden",
                        background: a(632079).Tj.popoverBackground,
                        userSelect: "none",
                        WebkitUserSelect: "none",
                        color: a(632079).Tj.icon.secondary,
                        opacity: c ? .3 : 1,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        ...d
                    }
                }), [f, p, u, c, A, d, S]), {
                    tooltipTextStyle: B,
                    tooltipAvatarContainer: E,
                    tooltipContainer: N,
                    tooltipUserInfoContainer: F
                } = i(g), O = (0, n.useMemo)(() => h ? ? (m ? a(993189).Bj6.fromValue(a(832375).oo9, m) : void 0), [h, m]), U = (0, n.useMemo)(() => O instanceof a(807825).L ? O : C && O ? a(807825).L.createChildStore(C, {
                    id: O.id,
                    table: a(832375).oo9
                }) : void 0, [O, C]), L = (0, a(682985).K8)(() => null == O ? void 0 : O.getFullName(w), [O, w]), V = (0, a(682985).K8)(() => null == O ? void 0 : O.getDisplayName(w), [O, w]), W = (0, a(682985).K8)(() => null == O ? void 0 : O.getEmail(), [O]), z = (0, a(682985).K8)(() => null == O ? void 0 : O.getProfilePhoto(), [O]), Q = (0, a(682985).K8)(() => null == O ? void 0 : O.getIsSuspended(), [O]), H = (0, a(682985).K8)(() => null == O ? void 0 : O.getIsDeleted(), [O]), $ = (0, a(525272).E)({
                    spaceStore: C,
                    viewedUserId: null == O ? void 0 : O.id
                }) && _, K = () => e.defaultAvatar ? ? (0, r.jsx)(a(16275).I, {
                    icon: a(476719).personFillSmallIcon,
                    size: "sm",
                    colorVariant: "primary"
                }), q = (e, t, n) => {
                    if (!e) return K();
                    let i = {
                        width: "100%",
                        height: "100%",
                        borderRadius: "100%",
                        ...n
                    };
                    return (0, r.jsx)(a(989059).A, {
                        alt: t,
                        src: e,
                        enableLoadingShimmer: !0,
                        style: i,
                        placeholderStyle: i
                    })
                }, G = e => (0, r.jsxs)("div", {
                    style: N,
                    children: [(0, r.jsx)("div", {
                        style: E,
                        children: Y()
                    }), (0, r.jsxs)("div", {
                        style: F,
                        children: [O ? V : null == b ? void 0 : b.name, e ? void 0 : (0, r.jsxs)(r.Fragment, {
                            children: [(0, r.jsx)("br", {}), O ? (0, r.jsx)("span", {
                                style: B,
                                children: W
                            }) : null != b && b.email ? (0, r.jsx)("span", {
                                style: B,
                                children: null == b ? void 0 : b.email
                            }) : null]
                        })]
                    })]
                }), Z = e => {
                    let t = a(871871).PE(e)[0].toUpperCase();
                    return (0, r.jsx)("div", {
                        style: T,
                        children: (0, r.jsx)("div", {
                            style: M,
                            children: (0, r.jsx)("div", {
                                children: t
                            })
                        })
                    })
                }, Y = () => {
                    if (Q && O) return (0, r.jsx)("div", {
                        style: T,
                        children: (0, r.jsx)("div", {
                            style: P,
                            children: (0, r.jsx)(a(16275).I, {
                                icon: a(67207).personSlashIcon,
                                size: A - 2,
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (H) return (0, r.jsx)("div", {
                        style: T,
                        children: (0, r.jsx)("div", {
                            style: R,
                            children: (0, r.jsx)(a(16275).I, {
                                icon: a(262401).personSlashSmallIcon,
                                size: "sm",
                                colorVariant: "tertiary"
                            })
                        })
                    });
                    if (O) {
                        if (z) return (0, r.jsx)("div", {
                            style: j,
                            children: (0, r.jsx)(a(738251).A, {
                                stripGoogleIconQuery: !0,
                                url: z,
                                isAuthenticated: !1,
                                width: Math.max(Number(D.width), 120),
                                render: (e, t) => q(t, L, T)
                            })
                        });
                        else if (L) return Z(L);
                        else if (W) return Z(W)
                    } else if (b) {
                        if (!b.type && b.avatarUrl) return (0, r.jsx)("div", {
                            style: T,
                            children: (0, r.jsx)("div", {
                                style: j,
                                children: q(b.avatarUrl, b.name)
                            })
                        });
                        else if (b.name) return Z(b.name);
                        else if (b.email) return Z(b.email)
                    }
                    return K()
                };
                switch (v) {
                    case "avatar":
                        {
                            let e = (0, r.jsx)("div", {
                                style: s,
                                children: Y()
                            });
                            if ($ && U && C) return (0, r.jsx)(a(532755).D, {
                                userStore: U,
                                spaceStore: C,
                                from: I,
                                children: e
                            });
                            if (t) return (0, r.jsx)(a(51831).m, {
                                content: () => o ? G() : (0, r.jsxs)(r.Fragment, {
                                    children: [(0, r.jsx)("div", {
                                        children: l
                                    }), V, (0, r.jsx)("br", {}), O ? (0, r.jsx)("span", {
                                        style: B,
                                        children: W
                                    }) : void 0]
                                }),
                                placement: "bottom",
                                alignment: "start",
                                delayThreshold: y,
                                children: t => (0, r.jsx)("div", {
                                    style: s,
                                    "aria-label": V,
                                    ...t,
                                    children: e
                                })
                            });
                            return e
                        }
                    case "avatar-name":
                    case "avatar-name-email":
                        return G("avatar-name" === v);
                    default:
                        (0, a(722371).HB)(v)
                }
            }
        },
        322095: (e, t, a) => {
            function n(e, t) {
                return e.map(e => r(e, t))
            }

            function r(e, t) {
                var n, r;
                let i, {
                        nameMessage: o,
                        descriptionMessage: l,
                        ...s
                    } = e,
                    {
                        rootId: d,
                        previewRootId: c,
                        spaceId: u
                    } = (n = e, r = t, i = (0, a(599412).H)(r), n.sources[i] || n.sources[a(599412).q]);
                return { ...s,
                    id: o.id,
                    rootId: d,
                    spaceId: u,
                    previewRootId: c,
                    name: t.formatMessage(o),
                    description: l ? t.formatMessage(l) : void 0
                }
            }
            a.d(t, {
                B: () => r,
                o: () => n
            }), a(581454)
        },
        328975: (e, t, a) => {
            a.d(t, {
                H: () => n
            });

            function n(e) {
                var t;
                null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setWindowTitle) || t.call(a(775657).electronApi, e)
            }
        },
        329171: (e, t, a) => {
            a.d(t, {
                n: () => n
            });

            function n(e) {
                return (0, a(862085).Jh)(e) || (0, a(862085).K1)(e)
            }
        },
        330942: (e, t, a) => {
            a.d(t, {
                Mt: () => c,
                RM: () => s,
                dC: () => i,
                f_: () => n().f_,
                ie: () => l,
                q1: () => r,
                sQ: () => u,
                uF: () => d
            }), a(813451), a(944114), a(898992), a(354520), a(737550);
            var n = () => a(706968);

            function r(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function i(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let o = /<lang\s+.*?>\s*/g;

            function l(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(o, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let a = "";
                    for (let n of e.value.slice(t))
                        if ("text" === n.type) a += n.content;
                        else break;
                    if (!o.exec(a)) return e;
                    let n = "",
                        r = t;
                    for (; r < e.value.length; r++) {
                        let t = e.value[r];
                        if ("text" === t.type) n += t.content;
                        else break
                    }
                    let i = [...e.value.slice(0, t), {
                        type: "text",
                        content: n.replace(o, "")
                    }, ...e.value.slice(r)];
                    return "text" === i[0].type && 0 === i[0].content.length && i.shift(), { ...e,
                        value: i
                    }
                }
                return e
            }

            function s(e, t) {
                let n = {};
                for (let t of e) "registered-tool-grouping" === t.type && (n[t.toolCallId] = t);
                let r = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = r.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let a = r[e];
                        if ("agent-transcript-summary" === a.type) {
                            let n = a.summary.trim().length > 0,
                                i = t.summary.trim().length > 0;
                            return n && !i || (r[e] = t), r
                        }
                    }
                    return r.push({ ...t
                    }), r
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, a(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) r.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === r[e].type) {
                        let a = r[e];
                        r[e] = { ...a,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else r.push({ ...t
                    })
                } else if ("search" === t.type) r = [...r.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id); - 1 !== e ? r[e] = t : r.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === r[e].type) {
                        let a = r[e];
                        r[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === r[e].type) {
                        let a = r[e];
                        r[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === r[e].type) {
                        let a = r[e];
                        r[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === r[e].type ? r[e] = t : r.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === r[e].type) {
                        let n = r[e];
                        r[e] = { ...n,
                            value: `${n.value}${t.value}`,
                            citationInfo: (0, a(177861).Mi)(n.citationInfo, t.citationInfo)
                        }
                    } else r.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = r.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === r[e].type ? r[e] = { ...r[e],
                        value: Object.assign(r[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : r.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = r.findIndex(e => e.id === t.id); - 1 !== e ? r[e] = { ...t
                    } : r.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = n[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, n[t.toolCallId] = e, r.push(e));
                    let a = { ...t
                    };
                    e.steps.push(a)
                } else if ("registered-tool-grouping" === t.type) n[t.toolCallId] || (n[t.toolCallId] = t, r.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id),
                        a = r[e];
                    (null == a ? void 0 : a.type) === t.type ? r[e] = { ...a,
                        operations: [...a.operations, ...t.operations]
                    } : r.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === r[e].type ? r[e] = { ...r[e],
                        value: t.value
                    } : r.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? r.push({ ...t
                }) : (0, a(722371).HB)(t);
                return r
            }
            let d = "inferenceTranscript";

            function c(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function u(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        336613: (e, t, a) => {
            let n, r;

            function i(e) {
                n = e
            }

            function o(e) {
                r = e
            }

            function l() {
                if (!n) throw Error("configureSubscriptionActions() must be called before using subscription actions");
                return n
            }
            async function s() {
                if (!r) throw Error("configureSubscriptionActionsLazyDeps() must be called before loading lazy deps");
                return r()
            }
            a.d(t, {
                N7: () => s,
                NK: () => i,
                NS: () => o,
                XC: () => l
            }), a(16280)
        },
        340916: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        346596: (e, t, a) => {
            a.d(t, {
                L: () => r,
                k: () => i
            });
            var n = a(296540);

            function r(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: r
                } = (0, a(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: a(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, n.useMemo)(() => {
                    if (t && r) return a(360851).N.createChildStore(r, {
                        table: a(43296).C,
                        id: t,
                        spaceId: r.id
                    })
                }, [t, r])
            }

            function i(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    n = a(728372).AppStoreSidebarSpaceStore.state;
                if (t && n) return a(360851).N.createChildStore(n, {
                    table: a(43296).C,
                    id: t,
                    spaceId: n.id
                })
            }
        },
        346899: (e, t, a) => {
            a.d(t, {
                h: () => r
            });
            let n = new(a(815048)).O2("DictationAvatar", async () => await Promise.all([a.e(75134), a.e(9773), a.e(36556), a.e(55373), a.e(36192), a.e(40537), a.e(5410), a.e(40994), a.e(57042), a.e(54280), a.e(16712), a.e(93186), a.e(80139), a.e(67542), a.e(15389), a.e(97732), a.e(23519), a.e(63771), a.e(53050), a.e(87353), a.e(45213), a.e(12354), a.e(5721), a.e(57688), a.e(17250), a.e(64696), a.e(39726), a.e(87971), a.e(29663), a.e(74145), a.e(55067), a.e(79349), a.e(90735), a.e(50354), a.e(71136), a.e(86102), a.e(30671), a.e(3101)]).then(a.bind(a, 405957))),
                r = (0, a(815048)._h)(n, e => e.DictationAvatar)
        },
        368678: (e, t, a) => {
            a.d(t, {
                P: () => o
            });
            var n = a(296540),
                r = a(474848);
            let i = {
                style0: {
                    display: "flex",
                    alignItems: "center",
                    marginInlineEnd: 16,
                    color: a(632079).Tj.blue.text.accentPrimary,
                    fontWeight: a(699422).Wy.semibold
                }
            };

            function o(e) {
                let {
                    onDismiss: t,
                    inputRef: o
                } = e, l = (0, a(533992).Y0)(), s = (0, n.useRef)(null), d = l.isMobileNative && l.isIOS, c = d && e.show;
                (0, a(336494).b)(a(651748).A, () => ({
                    getNode: () => s.current,
                    isShown: () => c
                }), [c]);
                let u = (0, a(571354).n)(),
                    p = (0, n.useCallback)(() => {
                        var e;
                        null == o || null == (e = o.current) || e.focus(), t && t();
                        let a = document.activeElement;
                        a instanceof HTMLElement && a.blur()
                    }, [o, t]);
                if (!d) return null;
                let f = c ? -(a(247800).j + u) : 0;
                return (0, r.jsx)(a(114596).O, {
                    open: !0,
                    children: (0, r.jsx)("div", {
                        style: {
                            position: "fixed",
                            top: "100vh",
                            width: "100%",
                            height: a(247800).j,
                            display: c ? "flex" : "none",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            backgroundColor: a(632079).Tj.keyboardDoneBarBackground,
                            transform: `translateY(${f}px)`,
                            transition: c ? "ease-out" : "ease-in",
                            boxShadow: c ? `
								0 -1px 0 ${a(632079).Tj.border.primaryTranslucent}
							` : void 0
                        },
                        ref: s,
                        children: (0, r.jsx)(a(64960).Ay, {
                            style: i.style0,
                            onTouchEnd: () => {
                                p()
                            },
                            children: (0, r.jsx)(a(109939).sA, {
                                defaultMessage: "Done",
                                id: "mobile.dismissKeyboardBar.button.label"
                            })
                        })
                    })
                })
            }
        },
        368733: (e, t, a) => {
            e.exports = a.p + "6fd3d43e1320e88a.png"
        },
        372181: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                infoCircleSmallIcon: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 4.425a.775.775 0 1 0 0 1.55.775.775 0 0 0 0-1.55M6.95 6.5a.625.625 0 1 0 0 1.25h.425V10H6.95a.625.625 0 1 0 0 1.25h2.1a.625.625 0 1 0 0-1.25h-.425V7.125A.625.625 0 0 0 8 6.5z"
                        }), (0, n.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, a(104509).wt)("infoCircleSmall", r, "small")
        },
        373510: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var n = a(296540),
                r = a(474848);
            let i = function(e) {
                let t = (0, a(533992).Y0)(),
                    i = (0, a(682985).K8)(() => ({
                        initiator: a(400198).A.state.initiator,
                        isDragging: a(966225).Ay.state.isDragging
                    }), []),
                    o = (0, a(682985).K8)(() => a(818955).default.state.isActive, []),
                    l = (0, a(682985).K8)(() => a(818955).default.state.isActive && a(818955).default.state.moved ? "default" : i.isDragging ? "-webkit-grabbing" : "text", [i.isDragging]),
                    s = (0, n.useMemo)(() => {
                        let e = "notion-cursor-listener";
                        return "-webkit-grabbing" === l && (e += " notion-disable-local-cursor"), e
                    }, [l]);
                return (0, n.useEffect)(() => {
                    t.isIOS && ("touch" === i.initiator || i.isDragging || o ? document.body.classList.add("notion-disable-webkit-user-select") : document.body.classList.remove("notion-disable-webkit-user-select"))
                }, [t.isIOS, i.initiator, i.isDragging, o]), (0, r.jsx)("div", {
                    style: { ...e.style,
                        cursor: l
                    },
                    className: s,
                    children: e.children
                })
            }
        },
        375592: (e, t, a) => {
            a.d(t, {
                T: () => n
            });
            let n = new(a(273917)).U(e => `${e.currentUser.id}`, async e => {
                let t = await e.api.callApi({
                    eventName: "getExternalOrgData",
                    environment: e,
                    data: {}
                });
                return "success" === t.type ? t.data : void 0
            });
            a(202146).exposeDebugValue("ExternalOrgDataStore", n)
        },
        378880: (e, t, a) => {
            a.d(t, {
                J: () => n
            });
            async function n(e, t) {
                let n = (0, a(599412).H)(a(962299).A.getIntl()),
                    r = t.value.email,
                    i = await e.api.callApi({
                        eventName: "createEmailUser",
                        environment: e,
                        data: {
                            email: r,
                            preferredLocaleOrigin: "inferred_from_inviter",
                            preferredLocale: n
                        }
                    });
                if ("failed" !== i.type) return i.data.userId;
                if ((0, a(101787).op4)(i.error)) {
                    let e = (0, a(416207).D)(a(962299).A.getIntl(), i.error);
                    e ? a(647095).f1(e) : a(647095).c1(i.error.message)
                } else a(647095).c1(i.error.message);
                throw i.error
            }
        },
        383378: (e, t, a) => {
            a.d(t, {
                $G: () => r,
                Hj: () => i,
                Nh: () => c,
                V9: () => l,
                WL: () => n,
                cv: () => d,
                nS: () => o,
                tz: () => s
            }), a(581454);
            let n = 30,
                r = 5;

            function i(e, t) {
                var a;
                return (null == (a = e.subscription) ? void 0 : a.trialEnd) !== void 0 && "reset_and_invoice" === t.subscription.type
            }

            function o(e, t, n) {
                return e ? (0, a(850640).W_)(e.toMillis(), n ? ? "long", t) : void 0
            }

            function l(e, t) {
                let n = a(906745).DateTime.fromMillis(e.endDateMs);
                return (t ? ? a(906745).DateTime.now()) > n
            }

            function s(e, t, n) {
                let r = a(906745).DateTime.fromMillis(e.endDateMs),
                    i = n ? ? a(906745).DateTime.now();
                return i < r && r.diff(i).as("days") <= t
            }

            function d(e) {
                let {
                    prices: t,
                    products: r,
                    interval: i,
                    memberCount: o,
                    currency: l = "USD",
                    trialLengthDays: s = n,
                    trialStartDate: d = a(906745).DateTime.now()
                } = e;
                return {
                    items: r.map(e => ({
                        price: (0, a(982473).vk)(t, {
                            product: e,
                            interval: i,
                            currency: l
                        }),
                        quantity: o
                    })),
                    trialEnd: d.plus({
                        days: s
                    })
                }
            }

            function c(e) {
                return (0, a(722371).Xk)(e, "plus") && (0, a(722371).Xk)(e, "ai")
            }
        },
        386194: (e, t, a) => {
            e.exports = a.p + "6847e3eeb9ba8341.png"
        },
        388400: (e, t, a) => {
            a.d(t, {
                Bu: () => c,
                I8: () => d,
                qw: () => s
            }), a(898992), a(354520), a(803949);
            let n = /[\u4E00-\u9FA5]/g,
                r = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                i = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                o = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                l = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function s(e) {
                return (0, a(381453).oE)(e.split(l))
            }

            function d(e) {
                return "none" === c(e) ? s(e).length : e.length
            }

            function c(e, t) {
                let a = !!e.match(o);
                return e.match(n) || e.match(r) || a ? a ? "ko" : e.match(i) || "ja-JP" === t ? "ja" : "zh" : "none"
            }
        },
        388647: (e, t, a) => {
            function n(e) {
                return "on" === function(e) {
                    let {
                        disableExposureLogging: t
                    } = e;
                    return a(218744).default.checkGate({
                        gateName: "force_enable_script_agent",
                        disableExposureLogging: t
                    }) ? "on" : a(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_script_agent",
                        defaultGroup: "control",
                        disableExposureLogging: t,
                        enableEventTrailLogging: !0
                    })
                }(e)
            }

            function r(e = {}) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => n({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            a.d(t, {
                k: () => r,
                p: () => n
            })
        },
        390123: (e, t, a) => {
            e.exports = a.p + "e67d8b05e7c8adcb.png"
        },
        399225: (e, t, a) => {
            a.r(t), a.d(t, {
                eyeFillSmallIcon: () => i,
                iconDefinition: () => r
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "0.7 3.26 14.6 9.48",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8 7.122a.875.875 0 1 1 0 1.75.875.875 0 0 1 0-1.75"
                        }), (0, n.jsx)("path", {
                            d: "M8 3.26c3.125 0 5.857 1.673 7.152 4.141l.065.144c.11.293.11.617 0 .91l-.065.145c-1.295 2.468-4.027 4.14-7.152 4.14-3.027 0-5.685-1.57-7.026-3.912L.848 8.6a1.29 1.29 0 0 1 0-1.199l.126-.228C2.314 4.83 4.972 3.26 8 3.26m0 2.112a2.626 2.626 0 0 0-2.625 2.626l.014.269A2.626 2.626 0 0 0 7.73 10.61l.269.014a2.626 2.626 0 0 0 2.611-2.357l.014-.269A2.626 2.626 0 0 0 8 5.372"
                        })]
                    })
                },
                i = (0, a(104509).wt)("eyeFillSmall", r, "fillSmall")
        },
        405072: (e, t, a) => {
            a.d(t, {
                J: () => n
            });

            function n(e) {
                var t;
                let {
                    isMobileNative: n,
                    isAndroid: r
                } = e, i = a(218744).default.checkGate({
                    gateName: "android_show_language_settings"
                }), o = null == (t = (0, a(663250).getMobileNativeDeviceInfo)()) ? void 0 : t.mobileNativeAndroidApiLevel;
                return i && n && r && "number" == typeof o && o >= 33
            }
        },
        405461: (e, t, a) => {
            function n(e) {
                let {
                    intl: t,
                    groupName: n
                } = e;
                return n || t.formatMessage(a(95384).D.untitledGroupName)
            }

            function r(e) {
                var t;
                return (null == (t = a(801062).h.getGroupData(e.groupId)) ? void 0 : t.memberCount) ? ? 0
            }

            function i(e) {
                let {
                    userIds: t,
                    limit: n,
                    spaceStore: r
                } = e;
                if (!r) return {
                    countRemainingUsers: 0,
                    limitedUserStores: []
                };
                let i = n ? t.slice(0, n) : t;
                return {
                    limitedUserStores: a(381453).oE(i.map(e => a(807825).L.createChildStore(r, {
                        table: a(832375).oo9,
                        id: e
                    }))),
                    countRemainingUsers: t.length - i.length
                }
            }

            function o({
                userStores: e,
                spaceStore: t,
                intl: n
            }) {
                return a(381453).Ul(e, e => e.getSearchName(n)).sort((e, n) => {
                    if (!t) return 0;
                    let r = (0, a(993077).dp)(t, e.id).getMembershipTypeAsRoleOrNone(),
                        i = (0, a(993077).dp)(t, n.id).getMembershipTypeAsRoleOrNone();
                    return r && i ? a(642157).hV.indexOf(i) - a(642157).hV.indexOf(r) : 0
                })
            }

            function l(e) {
                var t;
                let {
                    spaceStore: n,
                    spaceUserStore: r
                } = e;
                if (!n) return !1;
                let i = (null == r ? void 0 : r.getMembershipType()) ? ? "none",
                    o = null == (t = n.getModel()) ? void 0 : t.getGroupCreationPolicy();
                switch (i) {
                    case "none":
                    case "page_guest":
                    case "restricted_member":
                        return !1;
                    case "member":
                        return "all_workspace_members" === o;
                    case "membership_admin":
                    case "owner":
                        return !0;
                    default:
                        return (0, a(722371).HB)(i)
                }
            }

            function s(e) {
                let {
                    groupId: t,
                    delta: n
                } = e, r = a(801062).h.getGroupData(t);
                r && a(801062).h.updateGroup(t, {
                    memberCount: Math.max(0, r.memberCount + n)
                })
            }

            function d(e) {
                let {
                    members: t,
                    query: a
                } = e, n = a.trim().toLowerCase();
                return "" === n ? t : t.filter(e => e.name.toLowerCase().includes(n) || void 0 !== e.email && e.email.toLowerCase().includes(n))
            }

            function c(e) {
                let {
                    memberUserIds: t,
                    spaceStore: n,
                    groupId: r,
                    currentUserId: i
                } = e;
                return t.map(e => {
                    let t = a(807825).L.createChildStore(n, {
                            table: a(832375).oo9,
                            id: e
                        }),
                        o = (0, a(13717).A)({
                            spaceStore: n,
                            groupId: r,
                            userId: e
                        }),
                        l = a(229903).V.createChildStore(n, (0, a(729052).i1)({
                            userId: e,
                            spaceId: n.id
                        }));
                    return {
                        userId: e,
                        name: t.getName() ? ? t.getEmail() ? ? "",
                        email: t.getEmail(),
                        avatarUrl: t.getProfilePhoto(),
                        isCurrentUser: e === i,
                        isOwner: "owner" === o.getMembershipType(),
                        isWorkspaceOwner: n.canAdmin(),
                        isRestrictedMember: l.isRestrictedMember() ? ? !0
                    }
                })
            }

            function u(e) {
                let {
                    users: t,
                    existingMemberIds: a
                } = e, n = new Set(a);
                return t.filter(e => !n.has(e.id)).map(e => ({
                    userId: e.id,
                    name: e.name ? ? e.email ? ? "",
                    email: e.email,
                    avatarUrl: e.profile_photo
                }))
            }

            function p(e) {
                let {
                    groupId: t,
                    groupStore: n
                } = e;
                a(801062).h.updateGroup(t, {
                    group: n.getModel()
                })
            }
            a.d(t, {
                A9: () => u,
                Fz: () => c,
                Ny: () => l,
                Pf: () => n,
                cp: () => o,
                gA: () => i,
                mi: () => d,
                s: () => s,
                sd: () => p,
                xQ: () => r
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(581454)
        },
        408138: (e, t, a) => {
            a.d(t, {
                X: () => n
            });
            let n = a(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        413552: (e, t, a) => {
            async function n(e, t) {
                var n;
                let {
                    offerCampaign: r,
                    offerCode: i,
                    ...o
                } = t;
                if (r && (!o.spaceId || null != (n = (0, a(328765).S)()) && n.canAdmin())) {
                    if (o.spaceId) return a(617995).I.awaitData(e, {
                        spaceId: o.spaceId,
                        offerCampaign: r,
                        offerCode: i,
                        deviceId: o.deviceId
                    });
                    if (o.deviceId) {
                        let t = await e.api.callApi({
                            eventName: "getCustomerOffer",
                            environment: e,
                            data: { ...o,
                                offerCampaign: r,
                                offerCode: i
                            }
                        });
                        if ("failed" === t.type) return;
                        if ("offer" in t.data && t.data.offer) return t.data.offer
                    }
                }
            }
            a.d(t, {
                Cy: () => n,
                L6: () => o,
                VY: () => r
            }), a(898992), a(737550);
            let r = (0, a(381453).sg)(i, 1e3, {
                leading: !0,
                trailing: !1
            });
            async function i(e) {
                let {
                    environment: t,
                    spaceId: n,
                    offerCampaign: r,
                    entrypoint: i
                } = e, o = await t.api.callApi({
                    eventName: "applyCustomerOffer",
                    environment: t,
                    data: {
                        spaceId: n,
                        offerCampaign: r,
                        entrypoint: i ? ? "unknown"
                    }
                });
                return "failed" === o.type ? void a(647095).Qg(o) : (await a(185995).default.resetData(t, {
                    spaceId: n
                }), o)
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceId: a,
                    offerCampaign: r,
                    deviceId: i
                } = e;
                return void 0 !== await n(t, {
                    spaceId: a,
                    offerCampaign: r,
                    deviceId: i
                })
            }
        },
        414243: (e, t, a) => {
            a.d(t, {
                v: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "4.65 2.91 5.84 10.18",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.87 7.47a.75.75 0 0 0 0 1.06l4.32 4.32a.75.75 0 1 0 1.06-1.06L6.46 8l3.79-3.79a.75.75 0 1 0-1.06-1.06z"
                    })
                },
                r = (0, a(104509).wt)("arrowChevronSingleLeftFillSmall", n, "fillSmall")
        },
        418001: (e, t, a) => {
            a.d(t, {
                j: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    blockStore: n,
                    tabToOpen: r,
                    from: i
                } = e, o = a(475097).default.state.open, {
                    currentTab: l
                } = a(449473).B8.state, s = l !== r || l === r && !(0, a(953099).N)(t), d = r === a(449473).tF.Comments && (l !== r || !(0, a(953099).N)(t));
                (0, a(34953).f)(r), d && a(449473).B8.update(e => ({ ...e,
                    timeOpenedComments: Date.now()
                })), o ? ((0, a(545586).navigateToBlock)({
                    environment: t,
                    store: n,
                    pageVisitSource: a(254656).y8.Expand
                }), (0, a(911046).u)({
                    environment: t,
                    isExpanded: !0,
                    from: i,
                    saveDetailsSidebarPreference: !0
                })) : (0, a(911046).u)({
                    environment: t,
                    isExpanded: s,
                    from: i,
                    saveDetailsSidebarPreference: !0
                })
            }
        },
        422550: (e, t, a) => {
            e.exports = a.p + "31299301d549e6d5.png"
        },
        425749: (e, t, a) => {
            a.d(t, {
                I$: () => o,
                R2: () => d,
                WF: () => s,
                bZ: () => l,
                cE: () => r,
                jX: () => i,
                rz: () => c
            });
            var n = () => a(381453);

            function r(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let i = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, a(722371).Xk)(i, e))
            }

            function l() {
                let e = (0, a(4962).Ay)();
                return {
                    scripts: [],
                    modules: [{
                        id: e,
                        type: "notion",
                        name: "Notion",
                        version: a(445568).notion.latestVersion,
                        permissions: []
                    }],
                    triggers: [{
                        id: (0, a(4962).Ay)(),
                        moduleId: e,
                        enabled: !0,
                        state: {
                            type: "notion.agent.mentioned"
                        }
                    }]
                }
            }

            function s(e) {
                return (null == e ? void 0 : e.permissionMode) ? ? "botActor"
            }
            let d = [{
                type: "everything"
            }];

            function c(e) {
                for (let t of d)
                    if (n().n4(e, t)) return !0;
                return !1
            }
        },
        431666: (e, t, a) => {
            a.d(t, {
                i: () => n
            });

            function n(e) {
                let {
                    environment: t,
                    collectionStore: n,
                    collectionViewStore: r,
                    property_type: i,
                    from: o,
                    property: l
                } = e;
                (0, a(33918).G)(t, {
                    property: l,
                    property_type: i,
                    from: o,
                    collection_id: null == n ? void 0 : n.id,
                    collection_view_id: null == r ? void 0 : r.id
                })
            }
        },
        432376: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1,
                        openAnimationCompleted: !0,
                        closeAnimationCompleted: !0
                    }
                }
            }
            let i = r
        },
        432705: (e, t, a) => {
            function n(e) {
                return "event" === e || "recurrence" === e
            }

            function r(e) {
                let t = e.getTrigger();
                return (0, a(722371).O9)(t) && n(t.type)
            }

            function i(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, a(722371).HB)(e)
            }
            a.d(t, {
                $X: () => r,
                H8: () => i,
                x2: () => n
            })
        },
        434107: (e, t, a) => {
            a.d(t, {
                x: () => n
            });

            function n(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "debug_getting_started_page_error",
                        eventProperties: t
                    }
                })
            }
        },
        440605: (e, t, a) => {
            function n(e, t) {
                return e.find(e => e.presets.some(e => e.uri === t))
            }
            a.d(t, {
                B: () => n
            }), a(898992), a(672577), a(737550)
        },
        441892: (e, t, a) => {
            e.exports = a.p + "46e349aec1d78e16.png"
        },
        445283: (e, t, a) => {
            a.d(t, {
                N: () => n
            });

            function n(e) {
                if ("avatar" === e) return a(616922).eQ;
                if ("xsmall" === e) return 18;
                if ("xsmall_plus" === e) return 24;
                if ("small" === e) return 28;
                if ("small_plus" === e) return 32;
                else if ("medium" === e) return 36;
                else if ("medium_sidebar_button" === e) return 40;
                else if ("medium_plus" === e) return 44;
                else if ("medium_large" === e) return 48;
                else if ("large" === e) return 50;
                else if ("large_plus" === e) return 64;
                else if ("xlarge" === e) return 94;
                else if ("plans" === e) return 20;
                else if ("deep_dive" === e) return 16;
                else if ("upsell_banner" === e) return 74;
                else if ("personalization_modal" === e) return 96;
                else return (0, a(722371).HB)(e)
            }
        },
        445872: (e, t, a) => {
            e.exports = a.p + "58cc418a06d8c43b.png"
        },
        448734: (e, t, a) => {
            a.d(t, {
                jh: () => h,
                wV: () => m,
                Ax: () => b
            });
            var n = a(296540);
            let r = a.p + "f3a1c2555bc7b26c.gif",
                i = a.p + "8ab52115da3e3fbd.gif",
                o = a.p + "160f5613d44c23ea.gif",
                l = a.p + "b68268645067ada1.gif",
                s = a.p + "fce2247087f1d227.gif",
                d = a.p + "896e2255367f2b04.gif";
            var c = a(474848);
            let u = {
                    dark: [a(146535), o, s],
                    light: [a(737497), l, d]
                },
                p = {
                    dark: [o, s],
                    light: [l, d]
                },
                f = new(a(839621)).O(1);

            function g({
                isDarkMode: e,
                onAssetChange: t,
                animationMode: n
            }) {
                let r = "minimal" === n ? p[e ? "dark" : "light"] : u[e ? "dark" : "light"],
                    i = Math.floor(Math.random() * r.length);
                f.enqueue(async () => {
                    t({
                        type: "animated",
                        asset: r[i]
                    }), await new Promise(e => setTimeout(e, 7e3)), t({
                        type: "static",
                        asset: a(200424)
                    })
                }).catch(e => {
                    console.error(`Error showing animated asset: ${e}`)
                })
            }

            function m(e) {
                let {
                    sizeVariant: t,
                    onMouseEnter: o,
                    animationMode: l = "normal"
                } = e, s = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))"
                        },
                        faceImg: {
                            height: e,
                            width: e,
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none",
                            WebkitUserDrag: "none"
                        }
                    }
                }, [t]), [d, u] = (0, a(848135).B)(), p = function(e, t) {
                    let [o, l] = (0, n.useState)({
                        type: "static",
                        asset: a(200424)
                    }), s = "dark" === (0, a(960253).e)();
                    (0, n.useEffect)(() => {
                        let e = setInterval(() => {
                            g({
                                isDarkMode: s,
                                onAssetChange: l,
                                animationMode: t
                            })
                        }, 3e4);
                        return () => {
                            clearInterval(e), f.cancel()
                        }
                    }, [s, t]);
                    let d = (0, n.useMemo)(() => s ? r : i, [s]);
                    return (0, n.useMemo)(() => "animated" === o.type ? o.asset : e && "minimal" !== t && .1 >= Math.random() ? d : (e && g({
                        isDarkMode: s,
                        onAssetChange: l,
                        animationMode: t
                    }), o.asset), [d, o, s, e, t])
                }(u, l);
                return (0, c.jsx)("div", {
                    ref: d,
                    style: s.faceImgWrap,
                    onMouseEnter: o,
                    children: (0, c.jsx)("img", {
                        style: s.faceImg,
                        src: p,
                        alt: "Notion AI face"
                    })
                })
            }

            function h(e) {
                let {
                    sizeVariant: t
                } = e, n = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            overflow: "hidden",
                            transform: "scaleX(var(--direction, 1))",
                            WebkitUserDrag: "none"
                        },
                        faceImg: {
                            height: e,
                            width: e
                        }
                    }
                }, [t]), r = u["dark" === (0, a(960253).e)() ? "dark" : "light"][0];
                return (0, c.jsx)("div", {
                    style: n.faceImgWrap,
                    children: (0, c.jsx)("img", {
                        style: n.faceImg,
                        src: r,
                        alt: "Notion AI face"
                    })
                })
            }

            function b(e) {
                let {
                    variant: t,
                    shadowVariant: n = "strong",
                    cursorStyle: r,
                    ...i
                } = e, o = (0, a(960253).e)(), l = (0, a(960253).I)(() => {
                    let e = (0, a(445283).N)(t),
                        i = "dark" === o ? [a(632079).Tj.shadow.base.sm, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`, "0 0.5px 0 0 rgba(255, 255, 255, 0.20) inset"] : [a(632079).Tj.shadow.base.md, `0 0 0 1px ${a(632079).Tj.border.secondaryTranslucent}`];
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: a(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === n && {
                                boxShadow: e >= 90 ? a(632079).Tj.shadowMDThickerOutline : a(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === n && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? a(632079).Tj.shadowSMThickerOutline : a(632079).Tj.shadow.outline.md
                            },
                            ..."notification" === n && {
                                boxShadow: i.join(", ")
                            },
                            overflow: "hidden",
                            ...r && {
                                cursor: r
                            },
                            userSelect: "none",
                            WebkitUserSelect: "none",
                            WebkitTouchCallout: "none"
                        }
                    }
                }, [t, n, r, o]);
                return (0, c.jsx)("div", {
                    style: l.faceImgWrap,
                    children: (0, c.jsx)(m, {
                        sizeVariant: t,
                        ...i
                    })
                })
            }
        },
        465707: (e, t, a) => {
            e.exports = a.p + "c64bedded659e18d.png"
        },
        469589: (e, t, a) => {
            a.r(t), a.d(t, {
                STORE_MAX_LIMIT: () => o,
                initializePageVisit: () => l,
                updatePageVisits: () => s
            }), a(898992), a(354520), a(581454);
            var n = () => a(726570),
                r = () => a(226221),
                i = () => a(832375);
            let o = 100;
            async function l(e, t) {
                await a(728372).default.waitUntilRendered();
                let {
                    fromPageRefresh: n,
                    blockStore: o,
                    pageVisitStore: l,
                    timestamp: s,
                    type: u
                } = t, p = e.currentUser.id;
                if (void 0 === p || n) return;
                t.blockStore.id !== l.state.pageId && l.setState({ ...l.getInitialState(),
                    pageId: t.blockStore.id
                });
                let f = (0, a(517013).v3)(o, {
                        table: i().F9f,
                        id: (0, a(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, r().e)(o.pointer.spaceId)
                    }),
                    g = (0, a(517013).v3)(o, {
                        table: i().ouC,
                        id: (0, a(665619).$5)({
                            parent_id: o.id,
                            user_id: p
                        }),
                        spaceId: (0, r().e)(o.pointer.spaceId)
                    });
                if (await a(941701).transactionQueue.awaitRecordTransaction({
                        table: i().evP,
                        id: o.id
                    }), await (0, a(966980).hS)(o), !o.canRead() || (0, a(142484).q)(e, o, o.getSpaceStore())) return;
                await f.load(), await g.load();
                let m = f.getKeyStore("visited_at").getValue(),
                    h = g.getKeyStore("exited_at").getValue(),
                    b = await c({
                        environment: e,
                        blockStore: o,
                        spaceId: (0, r().e)(o.pointer.spaceId),
                        timestamp: s,
                        type: u
                    });
                if ("skipped" === b.type || "failed" === b.type) return;
                let v = d({
                    pageVisits: b.data.pageVisits,
                    currentState: l.state,
                    blockStore: o,
                    totalCount: l.state.totalCount,
                    hasMore: void 0
                });
                l.state.pageId === o.id && l.setState({ ...v,
                    lastViewTime: m,
                    lastExitTime: h
                })
            }
            async function s(e, t) {
                let n, i;
                await a(728372).default.waitUntilRendered();
                let l = e.currentUser.id;
                if (void 0 === l) return;
                let {
                    blockStore: s,
                    pageVisitStore: c,
                    incremental: u
                } = t, p = t.limit || 32;
                if (u) {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: r,
                        totalCount: i,
                        hasMore: o,
                        ...s
                    } = c.state, d = Object.entries(s).map(([e, t]) => {
                        if (l === e) return;
                        let a = t.getVisitedAt();
                        if (void 0 !== a) return a + 1
                    });
                    n = (0, a(763230).T9)(d.filter(a(722371).O9))
                }
                let f = await e.api.callApi({
                    eventName: "getPageVisitors",
                    environment: e,
                    data: {
                        block: {
                            id: s.id,
                            spaceId: (0, r().e)(s.pointer.spaceId)
                        },
                        sinceTimestamp: n,
                        limit: p,
                        includeTotalCount: t.includeTotalCount
                    },
                    headers: {
                        recordId: s.id,
                        spaceId: (0, r().e)(s.pointer.spaceId)
                    }
                });
                if ("failed" === f.type) return;
                let g = d({
                    pageVisits: f.data.pageVisits,
                    blockStore: s,
                    currentState: c.state,
                    totalCount: f.data.totalCount,
                    hasMore: f.data.hasMore
                });
                if (Object.keys(g).length <= o) i = g;
                else {
                    let {
                        pageId: e,
                        lastViewTime: t,
                        lastExitTime: n,
                        totalCount: r,
                        hasMore: l,
                        ...s
                    } = g, d = (0, a(722371).WP)(s).map(([e, t]) => [e, t.getVisitedAt() ? ? 0]);
                    for (let [t] of (i = {
                            pageId: e,
                            lastViewTime: void 0,
                            lastExitTime: void 0,
                            totalCount: r,
                            hasMore: l
                        }, a(381453).Ul(d, ([, e]) => -e).slice(0, o))) i[t] = g[t]
                }
                c.state.pageId === g.pageId && c.setState(i)
            }

            function d(e) {
                let {
                    blockStore: t,
                    pageVisits: a,
                    currentState: o,
                    totalCount: l,
                    hasMore: s
                } = e, d = { ...o,
                    pageId: t.id,
                    totalCount: l,
                    hasMore: s
                };
                for (let e of a) {
                    let {
                        id: a,
                        user_id: o
                    } = e;
                    o in d || (d[o] = n()._.createChildStore(t, {
                        table: i().F9f,
                        id: a,
                        spaceId: (0, r().e)(t.pointer.spaceId)
                    }))
                }
                return d
            }
            async function c(e) {
                let {
                    environment: t,
                    blockStore: n,
                    spaceId: r,
                    timestamp: o,
                    type: l
                } = e, {
                    id: s
                } = t.currentUser, d = n.id, c = n.getSystemBlockTypeStore().getValue();
                if ((0, a(512845).kR)(c) || n.getParentTable() === i().C0E) return {
                    type: "skipped"
                };
                if (s && "passive" !== l) {
                    var u;
                    null == t || null == (u = t.mobileNative) || u.recordPageVisit(s, {
                        blockId: d,
                        spaceId: r,
                        visitedAt: o
                    }), a(715265).A.recordVisit({
                        id: d,
                        systemBlockType: c,
                        type: a(981324).ig.Default,
                        currentUserId: s
                    })
                }
                return await t.api.callApi({
                    eventName: "recordPageVisit",
                    environment: t,
                    data: {
                        block: {
                            id: d,
                            spaceId: r
                        },
                        timestamp: o,
                        type: l
                    },
                    headers: {
                        recordId: d,
                        spaceId: r
                    }
                })
            }
        },
        476719: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                personFillSmallIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.89 1.85 10.22 12.3",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.85c-.925 0-1.673.382-2.179 1.012-.495.617-.73 1.435-.73 2.29 0 .856.235 1.674.73 2.291.506.63 1.255 1.012 2.18 1.012.924 0 1.672-.382 2.178-1.012.495-.617.73-1.435.73-2.29 0-.856-.235-1.674-.73-2.291C9.673 2.232 8.925 1.85 8 1.85m0 7.403c-2.175 0-4.115 1.06-4.94 2.672-.3.585-.165 1.179.19 1.594.34.396.873.63 1.43.63h6.64c.557 0 1.09-.234 1.43-.63.355-.415.49-1.01.19-1.594-.825-1.612-2.765-2.672-4.94-2.672"
                    })
                },
                r = (0, a(104509).wt)("personFillSmall", n, "fillSmall")
        },
        487016: (e, t, a) => {
            a.d(t, {
                Bi: () => l,
                My: () => o,
                ZM: () => d,
                _M: () => s,
                navigateToWorkflowTemplateOnboardingModal: () => c
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454);
            var n = () => a(388507),
                r = () => a(715144),
                i = () => a(717673);

            function o({
                transaction: e,
                collectionStore: t,
                propertyTemplates: a
            }) {
                var l, s;
                let d = (null == (l = t.getParentBlockStore()) ? void 0 : l.getCollectionViewStores().filter(e => "table" === e.getType())) ? ? [];
                if (0 === d.length) return;
                let c = [];
                for (let e of a) {
                    let a = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    a && c.push({
                        property: a.id,
                        visible: !(0, n().Sz)(e),
                        ...e.tablePropertyFormat
                    })
                }
                if (0 !== c.length)
                    for (let t of d) {
                        let a = (null == (s = t.getPropertyFormatsStore("table_properties")) ? void 0 : s.getValue()) ? ? [],
                            n = new Set(a.map(e => e.property)),
                            i = c.filter(e => !n.has(e.property));
                        0 !== i.length && (0, r().z)({
                            stores: [t],
                            update: {
                                table_properties: [...a, ...i]
                            },
                            transaction: e
                        })
                    }
            }

            function l({
                transaction: e,
                collectionStore: t,
                propertyTemplates: a
            }) {
                let n = [];
                for (let e of a) {
                    let a = (0, i().S1)({
                        collectionStore: t,
                        templateId: e.templateId,
                        instancePointerType: "property"
                    });
                    a && n.push({
                        property: a.id,
                        visible: !0
                    })
                }
                let o = t.getFormat().collection_page_properties ? ? [],
                    s = new Set(o.map(e => e.property)),
                    d = n.filter(e => !s.has(e.property));
                d.length && (0, r().z)({
                    stores: [t],
                    update: {
                        collection_page_properties: [...o, ...d]
                    },
                    transaction: e
                })
            }

            function s({
                environment: e,
                newPageStore: t,
                result: n
            }) {
                if ("accepted_template" === n.type || "accepted_empty_collection" === n.type) {
                    let r = t.getSpaceId();
                    (0, a(377796).createAndCommit)({
                        environment: e,
                        canUndo: !1,
                        cellTarget: r ? {
                            spaceWithId: r
                        } : void 0,
                        perform: r => {
                            let i = t.getTitleValue();
                            if ((0, a(173157).z)({
                                    store: t,
                                    transaction: r,
                                    data: {
                                        alive: !1
                                    }
                                }), "accepted_empty_collection" === n.type && !(0, a(247438).w9s)(i)) {
                                let o = a(970831).B.createChildStore(t, {
                                    table: "block",
                                    id: n.blockId
                                }).getTitleStore();
                                o && a(41403).yr({
                                    environment: e,
                                    transaction: r,
                                    tokens: i,
                                    index: 0,
                                    store: o
                                })
                            }
                            let o = t.getParentStore();
                            if ((null == o ? void 0 : o.table) === a(682956).ev) {
                                let e = o.getContentIds();
                                (0, a(173157).z)({
                                    store: o,
                                    transaction: r,
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
                result: n,
                existingCollectionViewBlockStore: r,
                existingCollectionStore: i
            }) {
                if ("canceled" !== n.type) {
                    if ("accepted_empty_collection" === n.type && i) {
                        let r = i.getKeyStore("name"),
                            o = (0, a(247438).x9d)(n.newCollectionTitle);
                        if (r) {
                            let n = i.getSpaceId();
                            (0, a(377796).createAndCommit)({
                                userAction: t,
                                environment: e,
                                canUndo: !0,
                                cellTarget: n ? {
                                    spaceWithId: n
                                } : void 0,
                                perform: t => a(41403).R9({
                                    environment: e,
                                    store: r,
                                    transaction: t,
                                    value: o
                                })
                            })
                        }
                    }
                    if (r) {
                        var o;
                        let e = null == (o = (0, a(444610).U)(r)) ? void 0 : o.settingsStore;
                        e && (0, a(72762).o)({
                            collectionSettingsStore: e
                        })
                    }
                    if ("accepted_template" === n.type && null != r && r.isCollectionView() && !(null != r && r.hasSingleSourceAndNoLinkedCollections())) {
                        let t = (0, a(444610).U)(r),
                            i = r.getCollectionViewStores().find(e => {
                                var t;
                                return (null == (t = e.getCollectionStore()) ? void 0 : t.id) === n.collectionId
                            });
                        if (!t || !i) return;
                        (0, a(532013).t)({
                            environment: e,
                            collectionContextStore: t,
                            collectionViewId: i.id,
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
                let n = t.id;
                if (!t.isDefined()) {
                    let r = await (0, a(389323).$)({
                        environment: e,
                        blockId: n
                    });
                    if (!r) return;
                    e = await a(274662).T({
                        environment: e,
                        newCurrentUserId: r
                    }), t = new(a(970831)).B(e, {
                        table: a(682956).ev,
                        id: n
                    }), await t.load()
                }
                let r = t.getSpaceId();
                if (!r) throw Error("Space ID not found for collection block");
                let i = (0, a(593303).k)(r);
                if (!i) throw Error(`Space view not found for space ID: ${r}`);
                let o = a(728372).AppStoreSidebarSpaceStore.state;
                (null == o ? void 0 : o.id) !== r && await (0, a(269948).y)({
                    environment: e,
                    spaceViewStore: i
                });
                let l = t.getFormat();
                if ((null == l ? void 0 : l.collection_view_sub_type) === "workflow_template_placeholder" && null != l && l.placeholder_workflow_template_id && t.isCollectionView()) {
                    let {
                        getCollectionTemplateFromId: n
                    } = await a(708370).t.load(), r = n(l.placeholder_workflow_template_id);
                    if (!r) throw Error(`Collection template "${l.placeholder_workflow_template_id}" not found`);
                    let {
                        onNavigateToPlaceholderWorkflowTemplateBlock: i
                    } = await a(903673).O.load();
                    i({
                        environment: e,
                        collectionTemplate: r,
                        collectionViewBlockStore: t
                    })
                } else(0, a(545586).navigateToBlock)({
                    environment: e,
                    store: t,
                    pageVisitSource: a(254656).y8.WorkflowTemplatesDeeplink
                })
            }
        },
        489561: (e, t, a) => {
            a.d(t, {
                CA: () => o
            }), a(16280), a(898992), a(354520), a(581454);
            let n = Symbol("JSON Schema"),
                r = Symbol("JSON Schema Components"),
                i = Symbol("No JSON Schema"),
                o = (0, a(722371).MU)((0, a(722371).WP)({
                    isNull: () => ({
                        type: "null",
                        [r]: {}
                    }),
                    boolean: () => ({
                        type: "boolean",
                        [r]: {}
                    }),
                    number: () => ({
                        type: "number",
                        [r]: {}
                    }),
                    integer: () => ({
                        type: "integer",
                        [r]: {}
                    }),
                    string: () => ({
                        type: "string",
                        [r]: {}
                    }),
                    matchesRegExp: e => ({
                        type: "string",
                        pattern: e.source,
                        [r]: {}
                    }),
                    dateString: () => ({
                        type: "string",
                        format: "date",
                        [r]: {}
                    }),
                    dateTimeString: () => ({
                        type: "string",
                        format: "date-time",
                        [r]: {}
                    }),
                    literal: e => {
                        let t = {
                            const: e,
                            [r]: {}
                        };
                        return "boolean" == typeof e ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof e ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    literals: (...e) => {
                        let t = {
                                enum: e,
                                [r]: {}
                            },
                            a = e[0];
                        return "boolean" == typeof a ? {
                            type: "boolean",
                            ...t
                        } : "number" == typeof a ? {
                            type: "number",
                            ...t
                        } : {
                            type: "string",
                            ...t
                        }
                    },
                    uuid: () => ({
                        type: "string",
                        format: "uuid",
                        [r]: {}
                    }),
                    binary: () => ({
                        type: "string",
                        format: "binary",
                        [r]: {}
                    }),
                    uuidWithoutDashes: () => ({
                        type: "string",
                        format: "uuid",
                        [r]: {}
                    }),
                    array: e => ({
                        type: "array",
                        items: e[n],
                        [r]: e[n][r]
                    }),
                    tuple: e => ({
                        type: "tuple",
                        items: !1,
                        prefixItems: e.map(e => e[n]).filter(e => e !== i),
                        [r]: Object.assign({}, ...e.map(e => e[n][r]))
                    }),
                    record: (e, t) => ({
                        type: "object",
                        additionalProperties: t[n],
                        [r]: t[n][r]
                    }),
                    object: ({
                        required: e,
                        optional: t,
                        exact: o
                    }) => ({
                        type: "object",
                        properties: (0, a(722371).MU)(Object.entries({ ...e,
                            ...t
                        }).filter(([e, t]) => t[n] !== i).map(([e, t]) => [e, t[n]])),
                        ...o && {
                            additionalProperties: !1
                        },
                        ...Object.keys(e).length > 0 && {
                            required: Object.keys(e)
                        },
                        [r]: Object.assign({}, ...Object.values({ ...e,
                            ...t
                        }).map(e => e[n][r]))
                    }),
                    union: e => {
                        let t = (0, a(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            o = (0, a(381453).hS)(e.map(e => e[n][r]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [r]: Object.assign({}, ...o)
                        } : {
                            anyOf: t,
                            [r]: Object.assign({}, ...o)
                        }
                    },
                    intersection: e => {
                        let t = (0, a(381453).hS)(e.map(e => e[n]).filter(e => e !== i), e => JSON.stringify(e)),
                            o = (0, a(381453).hS)(e.map(e => e[n][r]), e => JSON.stringify(e));
                        return 1 === t.length ? { ...t[0],
                            [r]: Object.assign({}, ...o)
                        } : {
                            allOf: t,
                            [r]: Object.assign({}, ...o)
                        }
                    },
                    gte: (e, t) => {
                        let a = e[n];
                        return a !== i ? { ...a,
                            minimum: t
                        } : a
                    },
                    gt: (e, t) => {
                        let a = e[n];
                        return a !== i ? { ...a,
                            exclusiveMinimum: t
                        } : a
                    },
                    lte: (e, t) => {
                        let a = e[n];
                        return a !== i ? { ...a,
                            maximum: t
                        } : a
                    },
                    lt: (e, t) => {
                        let a = e[n];
                        return a !== i ? { ...a,
                            exclusiveMaximum: t
                        } : a
                    },
                    maxLength: (e, t) => {
                        let a = e[n];
                        if (a === i) return a;
                        if ("type" in a) {
                            if ("string" === a.type) return { ...a,
                                maxLength: t
                            };
                            else if ("array" === a.type) return { ...a,
                                maxItems: t
                            }
                        }
                        throw Error("Unknown type for max length.")
                    },
                    minLength: (e, t) => {
                        let a = e[n];
                        if (a === i) return a;
                        if ("type" in a) {
                            if ("string" === a.type) return { ...a,
                                minLength: t
                            };
                            else if ("array" === a.type) return { ...a,
                                minItems: t
                            }
                        }
                        throw Error("Unknown type for min length.")
                    },
                    nonEmpty: e => {
                        let t = e[n];
                        if (t === i) return t;
                        if ("type" in t) {
                            if ("string" === t.type) return { ...t,
                                minLength: 1
                            };
                            else if ("object" === t.type) return { ...t,
                                minProperties: 1
                            };
                            else if ("array" === t.type) return { ...t,
                                minItems: 1
                            }
                        }
                        throw Error("Unknown non-emptyable type.")
                    },
                    nullable: e => {
                        let t = e[n];
                        if (t === i) return t;
                        if ("const" in t) return { ...t,
                            const: void 0,
                            enum: [t.const, null]
                        };
                        if ("type" in t)
                            if (Array.isArray(t.type))
                                if ("null" === t.type[1]) return t;
                                else(0, a(722371).HB)(t.type[1]);
                        else {
                            if ("string" === t.type || "object" === t.type || "array" === t.type || "tuple" === t.type || "boolean" === t.type || "integer" === t.type || "number" === t.type) return { ...t,
                                type: [t.type, "null"]
                            };
                            if ("null" === t.type) return t;
                            (0, a(722371).HB)(t.type)
                        } else if ("enum" in t) {
                            let e = t.enum;
                            return { ...t,
                                enum: Array.isArray(e) ? [...e, null] : [null]
                            }
                        } else {
                            var o;
                            if ("anyOf" in t) return { ...t,
                                anyOf: [...t.anyOf, {
                                    type: "null",
                                    [r]: {}
                                }]
                            };
                            if ("oneOf" in t) return { ...t,
                                oneOf: [...t.oneOf, {
                                    type: "null",
                                    [r]: {}
                                }]
                            };
                            if ("allOf" in t) return { ...t,
                                oneOf: [{
                                    allOf: t.allOf,
                                    [r]: {}
                                }, {
                                    type: "null",
                                    [r]: {}
                                }]
                            };
                            if ("$ref" in t) return {
                                anyOf: [t, {
                                    type: "null",
                                    [r]: {}
                                }],
                                [r]: t[r]
                            };
                            if (o = t, (0, a(722371).Gv)(o) && 0 === Object.keys(o).length) return t;
                            (0, a(722371).HB)(t)
                        }
                    }
                }).map(([e, t]) => [e, (...i) => 1 === i.length && (0, a(722371).Gv)(i[0]) && ("id" in i[0] || "title" in i[0] || "description" in i[0] || "examples" in i[0]) ? (...o) => {
                    let {
                        description: l,
                        examples: s,
                        id: d,
                        title: c
                    } = i[0], u = { ...c && {
                            title: c
                        },
                        description: l,
                        ...s && {
                            examples: s
                        },
                        ...t(...o)
                    };
                    return d && (u = {
                        $ref: `#/components/schemas/${d}`,
                        [r]: { ...u[r],
                            [d]: u
                        }
                    }), {
                        [n]: u,
                        ...a(969475)[e](...o)
                    }
                } : {
                    [n]: t(...i),
                    ...a(969475)[e](...i),
                    describe: t => o[e]({
                        description: t
                    })(...i)
                }]));
            Symbol("Exact empty object ({})"), o.object({
                id: "emptyObject"
            })({
                required: {},
                optional: {},
                exact: !0
            })
        },
        496722: (e, t, a) => {
            a.d(t, {
                a: () => n
            });

            function n() {
                let e = a(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        498667: (e, t, a) => {
            e.exports = a.p + "ebbfc682ffb9183b.png"
        },
        503681: (e, t, a) => {
            a.d(t, {
                z: () => _
            });
            var n = a(296540);
            a(581454);
            var r = a(474848);
            let i = `
	animation-duration: 2s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: cubic-bezier(0.45, 0, 0.55, 1);
`,
                o = "M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z",
                l = "M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907",
                s = "M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393",
                d = "M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021",
                c = "M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z",
                u = "M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z",
                p = "M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z",
                f = "M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z",
                g = "M73.062 79.4326 C71.7367 81.3275 71.5151 81.617 71.1477 83.1804 C70.8243 84.5568 71.8802 85.8228 73.738 85.2791 C75.5959 84.7353 77.938 81.4043 77.938 79.4327 C77.938 79.4327 77.938 79.4327 77.938 79.4327",
                m = "M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z",
                h = "M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239",
                b = `
	#agent-acc-dog-left-leg-fill {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-fill {
		0%, 40% { d: path("M72.4372 80.6925C68.0273 84 73.4246 85.323 76.0274 84.4997C78.874 83.5992 81.1506 81.6677 81.1448 79.1513C81.1423 78.0631 80.9619 76.9652 80.9368 76.7693L72.5612 74.2937C72.4563 77.7978 72.5212 79.1973 72.4372 80.6925Z"); }
		60%, 100% { d: path("M67.4372 81.6925C63.0273 85 68.4246 86.323 71.0274 85.4997C73.874 84.5992 76.1506 82.6677 76.1448 80.1513C76.1423 79.0631 75.9619 77.9652 75.9368 77.7693L67.5612 75.2937C67.4563 78.7978 67.5212 80.1973 67.4372 81.6925Z"); }
	}

	#agent-acc-dog-left-leg-stroke {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-leg-stroke {
		0%, 40% { d: path("M80.9666 77.4694C80.4498 79.3203 80.3912 80.6835 80.4498 81.2046C80.7488 83.8633 78.4457 84.1225 74.5339 84.5623C70.1565 85.0545 69.7203 82.221 72.7191 80.4413C71.6821 78.44 72.4056 75.8018 72.9875 74.8239"); }
		60%, 100% { d: path("M75.9666 78.4694C75.4498 80.3203 75.3912 81.6835 75.4498 82.2046C75.7488 84.8633 73.4457 85.1225 69.5339 85.5623C65.1565 86.0545 64.7203 83.221 67.7191 81.4413C66.6821 79.44 67.4056 76.8018 67.9875 75.8239"); }
	}

	#agent-acc-dog-body-fill {
		animation-name: agent-acc-dog-body-fill;
		${i}
	}
	@keyframes agent-acc-dog-body-fill {
		0%, 40% { d: path("M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z"); }
		60%, 100% { d: path("M81.0632 70.0344C77.2518 69.1088 71.6576 71.5318 71.3769 71.6722L64.9737 70.7318L64.8825 81.0367C62.5186 81.446 61.5576 81.9423 61.3013 84.2131C61.0669 86.2894 61.8662 87.6019 67.3859 87.1218C69.259 86.7053 72.5358 86.0087 74.566 85.6664C76.4228 86.1123 79.5177 85.6581 82.8882 85.1022C86.5194 84.5032 87.63 79.9392 87.474 78.1766C87.3805 74.6202 84.3388 70.8299 81.0632 70.0344Z"); }
	}

	#agent-acc-dog-left-hand-fill {
		animation-name: agent-acc-dog-left-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-fill {
		0%, 40% { d: path("M70.6026 72.8877C70.0746 74.8362 69.6915 76.4536 68.3667 78.6767C67.6053 79.9545 65.9049 82.533 66.4449 84.2665C66.8557 85.5853 68.7731 86.0357 70.0746 84.7599C70.5587 84.3208 71.6012 83.2856 71.8984 82.6582Z"); }
		60%, 100% { d: path("M54.3039 83.5936C54.6481 80.5445 59.7873 79.9305 61.9469 79.7188C65.9916 80.4513 73.3327 82.3533 70.3394 84.1016C69.628 83.9999 64.1182 85.1602 61.4523 85.7531C55.6035 86.7059 54.0695 85.6699 54.3039 83.5936Z"); }
	}

	#agent-acc-dog-left-hand-stroke {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-left-hand-stroke {
		0%, 40% { d: path("M70.5719 72.9453C69.9099 76.0342 66.8682 80.1714 66.3343 81.996C66.193 82.4788 65.8919 84.6494 67.5925 85.3012C68.6496 85.7063 70.0486 85.2456 71.0672 83.8076C71.9661 82.5385 73.2389 80.3849 73.7254 78.8907"); }
		60%, 100% { d: path("M65.3076 78.1101C62.2783 79.3049 58.5688 79.9167 56.2894 81.0063C55.4092 81.4271 53.5897 83.2138 54.3842 84.8525C54.9456 86.0103 56.4324 86.1452 58.1945 86.1452C59.8961 86.1452 63.4693 85.3624 65.7494 84.6478"); }
	}

	#agent-acc-dog-tail {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	@keyframes agent-acc-dog-tail {
		0%, 40% { d: path("M84.2513 81.7395C88.977 82.4048 90.6717 77.9739 90.8562 75.5247C91.1236 73.7435 93.5045 77.4968 90.1838 81.7561C88.1114 84.4142 84.495 84.3517 82.7126 83.226C82.1051 82.9047 81.0102 81.2832 84.2513 81.7395Z"); }
		60%, 80%, 100% { d: path("M85.2796 79.255C90.0172 78.6799 90.5127 73.9619 90.0597 71.5479C89.8591 69.7579 93.1268 72.7709 91.016 77.7421C89.6987 80.8444 86.1884 81.7162 84.176 81.0879C83.5063 80.934 82.0305 79.6494 85.2796 79.255Z"); }
		70%, 90% { d: path("M85.7386 77.9554C90.0132 80.0775 93.0191 76.4074 93.9668 74.1415C94.7825 72.5356 95.8577 76.8483 91.363 79.8426C88.5579 81.7112 85.1459 80.5111 83.8096 78.8806C83.3345 78.3841 82.807 76.5 85.7386 77.9554Z"); }
	}

	#agent-acc-dog-right-hand-fill {
		animation-name: agent-acc-dog-right-hand-fill;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-fill {
		0%, 40% { d: path("M71.1477 83.1804 C71.5151 81.6169 71.7367 81.3274 73.062 79.4325 L77.938 79.4326 C77.938 81.4043 75.5959 84.7353 73.738 85.2791 C71.8802 85.8228 70.8243 84.5568 71.1477 83.1804 C71.1477 83.1804 71.1477 83.1804 71.1477 83.1804"); }
		60%, 100% { d: path("M68.7864 80.4014 C68.5973 80.4149 67.5291 80.4608 66.5068 80.6378 C64.1429 81.047 61.3414 82.1238 61.0851 84.3946 C60.8507 86.4708 62.3848 87.5069 68.2335 86.5541 C69.6201 86.2457 71.776 85.7839 73.6259 85.4259 C73.6259 85.4259 73.6259 85.4259 73.6259 85.4259"); }
	}

	#agent-acc-dog-right-hand-stroke {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	@keyframes agent-acc-dog-right-hand-stroke {
		0%, 40% { d: path("M72.7738 77.2686C71.6065 78.9254 70.1924 81.5438 69.9469 82.3827C69.7863 82.9317 69.6719 84.857 71.6065 85.2869C72.9594 85.5875 74.7942 85.2229 75.9524 83.5878C76.9746 82.1448 78.4219 79.6959 78.9751 77.9969"); }
		60%, 100% { d: path("M68.7492 80.3111C65.1668 80.5556 63.4526 81.3209 62.2581 82.3619C61.2976 83.199 60.324 85.0797 61.6154 86.2501C62.5184 87.0686 65.4128 86.9896 67.1572 86.7404C69.3004 86.4343 71.5259 85.8499 73.5463 85.084"); }
	}

	#agent-acc-dog-back-stroke {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	@keyframes agent-acc-dog-back-stroke {
		0%, 40% { d: path("M81.3674 80.6071C80.0096 80.6071 75.6271 81.1468 75.3813 83.6491C75.3069 84.406 75.897 85.2639 76.991 85.2639C80.7189 85.2639 83.586 85.2878 83.9051 85.2639C86.1871 85.093 86.7281 83.2789 86.6934 81.7783C86.634 79.2117 85.903 77.1869 84.9662 75.5C83.2121 72.3413 80.7365 70.3673 80.5986 68.2393"); }
		60%, 100% { d: path("M80,75C78.1223,75.4266 76.8976,78.4574 76.8976,80.5163C74.5984,81.1775 72,83.5 74,85.5C75.3503,86.8503 79.5168,85.6581 82.8873,85.1022C86.5185,84.5032 87.6291,79.9392 87.4731,78.1766C87.3795,74.6202 84.3379,70.8299 81.0623,70.0344C77.2509,69.1088 71.6567,71.5318 71.376,71.6722"); }
	}

	#agent-acc-dog-head-stroke {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	@keyframes agent-acc-dog-head-stroke {
		0%, 40% { d: path("M81.8804 67.393L82.5295 65.5811C83.4844 62.2994 81.8804 57.7899 80.228 55.9816C79.6109 55.3062 77.9062 53.833 75.3259 53.833C73.4755 53.833 71.7706 54.8378 70.9613 55.6264C69.6193 56.934 69.1684 58.8522 68.4948 60.2513C67.4927 62.3325 65.1729 61.6477 64.0865 63.9062C63.5091 64.9101 63.3667 67.0446 64.0868 68.3343C64.807 69.624 66.6161 70.4021 68.4948 70.7995C70.264 71.1737 71.5432 71.2337 72.9333 71.2337C73.7944 71.2252 75.5588 71.0894 77.3272 70.4021"); }
		60%, 100% { d: path("M72.9796 76.7831L73.4539 74.9874C74.1006 71.7533 72.1856 67.5504 70.4473 65.9484C69.7982 65.3501 68.0374 64.0747 65.5566 64.2881C63.7775 64.4411 62.2214 65.5481 61.5084 66.3732C60.3263 67.7413 60.0514 69.6228 59.5194 71.0237C58.7281 73.1075 56.441 72.6409 55.5832 74.9021C55.1111 75.9151 55.1507 77.979 55.9497 79.1594C56.7487 80.3398 58.5525 80.9383 60.3916 81.165C62.1236 81.3785 63.3584 81.3304 64.695 81.2154C65.2965 81.1577 66.3518 80.9958 67.5148 80.6013"); }
	}

	#agent-acc-dog-nose {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	@keyframes agent-acc-dog-nose {
		0%, 40% { d: path("M66.9294 64.6895C66.9001 65.1717 66.656 65.5492 65.662 65.4888C64.668 65.4285 64.4714 65.0242 64.5007 64.542C64.53 64.0598 65.0974 63.702 65.768 63.7427C66.4387 63.7834 66.9586 64.2073 66.9294 64.6895Z"); }
		60%, 100% { d: path("M58.5402 76.2138C58.4739 76.628 58.1564 76.9215 56.9668 76.7309C55.7772 76.5402 55.5673 76.1622 55.6337 75.748C55.7001 75.3338 56.4046 75.1023 57.2072 75.231C58.0098 75.3596 58.6066 75.7996 58.5402 76.2138Z"); }
	}

	#agent-acc-dog-right-ear {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	@keyframes agent-acc-dog-right-ear {
		0%, 40% { d: path("M79.6816 66.979C79.6816 64.529 80.4154 60.3832 81.1518 57.416C83.6256 60.95 86.3042 66.884 83.3275 68.6685C81.504 69.7617 79.6816 69.0329 79.6816 66.979Z"); }
		60%, 100% { d: path("M70.8327 76.5672C70.6302 74.2117 70.9928 70.1651 71.4555 67.2515C74.1262 70.4446 77.1922 75.9282 74.4778 77.89C72.815 79.0918 71.0026 78.5418 70.8327 76.5672Z"); }
	}

	#agent-acc-dog-left-eye {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	@keyframes agent-acc-dog-left-eye {
		0%, 40% { d: path("M72.2065 59.658C71.7961 59.6024 71.5075 59.231 71.5817 58.6829C71.6559 58.1348 72.0328 57.8536 72.4433 57.9091C72.8538 57.9647 73.1335 58.4013 73.0681 58.8842C73.0028 59.3671 72.617 59.7135 72.2065 59.658Z"); }
		60%, 100% { d: path("M63.1777 70.9001C62.6811 70.8759 62.2995 70.4261 62.3347 69.7036C62.37 68.981 62.7936 68.5705 63.2902 68.5948C63.7869 68.619 64.1643 69.1547 64.1332 69.7913C64.1021 70.4279 63.6743 70.9244 63.1777 70.9001Z"); }
	}

	#agent-acc-dog-right-eye {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	@keyframes agent-acc-dog-right-eye {
		0%, 40% { d: path("M75.7954 59.8435C75.3849 59.7879 75.0964 59.4166 75.1706 58.8685C75.2448 58.3204 75.6217 58.0391 76.0322 58.0947C76.4426 58.1503 76.7224 58.5868 76.657 59.0697C76.5916 59.5526 76.2059 59.8991 75.7954 59.8435Z"); }
		60%, 100% { d: path("M66.6933 71.2234C66.1967 71.1991 65.8151 70.7493 65.8504 70.0268C65.8856 69.3043 66.3092 68.8938 66.8059 68.918C67.3025 68.9423 67.6799 69.478 67.6488 70.1146C67.6177 70.7512 67.19 71.2476 66.6933 71.2234Z"); }
	}

	/* Dark-mode outline duplicates */
	#agent-acc-dog-tail-outline {
		animation-name: agent-acc-dog-tail;
		${i}
	}
	#agent-acc-dog-left-hand-stroke-outline {
		animation-name: agent-acc-dog-left-hand-stroke;
		${i}
	}
	#agent-acc-dog-back-stroke-outline {
		animation-name: agent-acc-dog-back-stroke;
		${i}
	}
	#agent-acc-dog-head-stroke-outline {
		animation-name: agent-acc-dog-head-stroke;
		${i}
	}
	#agent-acc-dog-nose-outline {
		animation-name: agent-acc-dog-nose;
		${i}
	}
	#agent-acc-dog-right-ear-outline {
		animation-name: agent-acc-dog-right-ear;
		${i}
	}
	#agent-acc-dog-left-eye-outline {
		animation-name: agent-acc-dog-left-eye;
		${i}
	}
	#agent-acc-dog-right-eye-outline {
		animation-name: agent-acc-dog-right-eye;
		${i}
	}
	#agent-acc-dog-right-hand-stroke-outline {
		animation-name: agent-acc-dog-right-hand-stroke;
		${i}
	}
	#agent-acc-dog-left-leg-fill-outline {
		animation-name: agent-acc-dog-left-leg-fill;
		${i}
	}
	#agent-acc-dog-left-leg-stroke-outline {
		animation-name: agent-acc-dog-left-leg-stroke;
		${i}
	}
`,
                v = {
                    position: "relative",
                    pointerEvents: "none"
                },
                y = {
                    pointerEvents: "visiblePainted"
                };

            function _({
                size: e,
                speechBubblePlacement: t,
                speechBubbleTextOverride: i,
                speechBubbleVerticalOffsetPx: I = 20,
                speechBubbleHorizontalOffsetPx: S = 12,
                speechBubbleTailCircleTop: w,
                speechBubbleTailCircleInsetInlineStartPx: x,
                animated: k = !0
            }) {
                let C = "dark" === (0, a(960253).e)() ? "#d3d3d3" : "white",
                    {
                        showBubble: A,
                        isHiding: M,
                        currentPhrase: T,
                        handleMouseEnter: j,
                        handleMouseLeave: D
                    } = function(e, t) {
                        let r = (0, a(109939).tz)(),
                            i = a(189760).B.dog,
                            o = r.locale.startsWith("en"),
                            l = "none" !== e && !!i && o,
                            s = (0, n.useMemo)(() => t ? [t] : i ? (0, a(763230).k4)(Object.values(i).map(e => r.formatMessage(e))) : [], [r, i, t]),
                            [d, c] = (0, n.useState)(!1),
                            [u, p] = (0, n.useState)(!1),
                            f = (0, n.useRef)(0),
                            [g, m] = (0, n.useState)(""),
                            h = (0, n.useRef)(),
                            b = (0, n.useCallback)(() => {
                                l && 0 !== s.length && (clearTimeout(h.current), m(s[f.current % s.length]), f.current++, p(!1), c(!0))
                            }, [s, l]),
                            v = (0, n.useCallback)(() => {
                                l && (p(!0), h.current = setTimeout(() => {
                                    c(!1), p(!1)
                                }, 150))
                            }, [l]);
                        return {
                            showBubble: l && (d || u),
                            isHiding: u,
                            currentPhrase: g,
                            handleMouseEnter: l ? b : void 0,
                            handleMouseLeave: l ? v : void 0
                        }
                    }(t, i),
                    P = "none" !== t ? t : "topRight";
                return (0, r.jsxs)("div", {
                    style: v,
                    children: [A ? (0, r.jsx)(a(679416).P, {
                        placement: P,
                        animated: k,
                        isHiding: M,
                        verticalOffsetPx: I,
                        horizontalOffsetPx: S,
                        tailCircleTop: w,
                        tailCircleInsetInlineStartPx: x,
                        children: T
                    }) : void 0, k ? (0, r.jsx)("style", {
                        children: b
                    }) : void 0, (0, r.jsxs)("svg", {
                        width: e,
                        height: e,
                        viewBox: "0 0 100 100",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        style: y,
                        onMouseEnter: j,
                        onMouseLeave: D,
                        children: [(0, r.jsxs)("g", {
                            children: [(0, r.jsx)("path", {
                                id: "agent-acc-dog-tail-outline",
                                d: o,
                                stroke: C,
                                strokeWidth: "4"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill-outline",
                                d: m,
                                stroke: C,
                                strokeWidth: "4"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke-outline",
                                d: h,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke-outline",
                                d: l,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-back-stroke-outline",
                                d: s,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-head-stroke-outline",
                                d: d,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-nose-outline",
                                d: c,
                                stroke: C,
                                strokeWidth: "3"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-ear-outline",
                                d: u,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-eye-outline",
                                d: p,
                                stroke: C,
                                strokeWidth: "3"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-eye-outline",
                                d: f,
                                stroke: C,
                                strokeWidth: "3"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke-outline",
                                d: g,
                                stroke: C,
                                strokeWidth: "5",
                                strokeLinecap: "round"
                            })]
                        }), (0, r.jsxs)("g", {
                            children: [(0, r.jsx)("path", {
                                id: "agent-acc-dog-tail",
                                d: o,
                                fill: "black"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-leg-fill",
                                d: m,
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-leg-stroke",
                                d: h,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-body-fill",
                                d: "M68.5167 78.823C69.8415 76.5999 69.839 74.928 70.6031 73.1034C71.1234 70.4713 72.2666 69.7739 71.7436 67.9773C71.2207 66.1807 77.0344 65.2132 80.0066 64.9541C79.9864 66.4045 80.3439 69.6312 81.9353 70.9346C83.4208 73.1034 86.8612 75.7498 86.6665 82.0341C86.62 83.5343 86.2068 84.9953 84.4783 85.2635C84.1621 85.3126 80.7189 85.2635 76.9909 85.2635C75.8969 85.2635 75.3068 84.4056 75.3812 83.6487L72.4044 82.6585C72.1072 83.286 71.0647 84.3211 70.5806 84.7602C69.2791 86.036 67.2704 85.6107 66.9509 84.2668C66.5687 82.6594 67.7553 80.1008 68.5167 78.823Z",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-hand-stroke",
                                d: l,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-back-stroke",
                                d: s,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-head-stroke",
                                d: d,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round",
                                fill: "white"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-nose",
                                d: c,
                                fill: "black",
                                stroke: "black"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-ear",
                                d: u,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                strokeLinejoin: "round"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-left-eye",
                                d: p,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-eye",
                                d: f,
                                fill: "black",
                                stroke: "black",
                                strokeWidth: "0.5"
                            }), (0, r.jsx)("path", {
                                id: "agent-acc-dog-right-hand-stroke",
                                d: g,
                                stroke: "black",
                                strokeWidth: "1.5",
                                strokeLinecap: "round",
                                fill: "white"
                            })]
                        })]
                    })]
                })
            }
        },
        511101: (e, t, a) => {
            a.d(t, {
                m: () => n
            });
            let n = "notion-modal-underlay"
        },
        515487: (e, t, a) => {
            a.d(t, {
                r: () => i
            });
            var n = a(296540),
                r = a(474848);

            function i({
                loadingMessage: e
            }) {
                let t = (0, a(934877).A)({
                    visibility: !0,
                    delayShow: 400
                });
                return (0, r.jsx)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%",
                    children: t ? (0, r.jsxs)(n.Fragment, {
                        children: [(0, r.jsx)(a(517334).k, {}), e ? (0, r.jsx)("div", {
                            className: "x13fj5qh x1b8rd1j",
                            children: e
                        }) : void 0]
                    }) : void 0
                })
            }
        },
        518241: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => r,
                shieldLockFillIcon: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M10 10.453a.756.756 0 1 1 0 1.513.756.756 0 0 1 0-1.513m0-3.622a.9.9 0 0 1 .9.9v1.01H9.1V7.73a.9.9 0 0 1 .9-.9"
                        }), (0, n.jsx)("path", {
                            d: "M9.788 2.212a.63.63 0 0 1 .491.03l1.89.944a7.5 7.5 0 0 0 3.344.789h.787c.345 0 .625.28.625.625v6.933a5.13 5.13 0 0 1-3.106 4.71l-3.573 1.532a.63.63 0 0 1-.492 0l-3.572-1.532a5.13 5.13 0 0 1-3.107-4.71V4.6c0-.345.28-.625.625-.625h.788c1.16 0 2.305-.27 3.343-.79l1.89-.944zM10 5.607a2.125 2.125 0 0 0-2.125 2.125v1.093c-.525.194-.9.698-.9 1.29v2.291c0 .76.616 1.375 1.375 1.375h3.3c.759 0 1.374-.615 1.374-1.375v-2.29c0-.593-.375-1.097-.9-1.29V7.731c0-1.174-.95-2.125-2.124-2.125"
                        })]
                    })
                },
                i = (0, a(104509).wt)("shieldLockFill", r, "fill")
        },
        521469: (e, t, a) => {
            function n(e) {
                switch (e) {
                    case "plus":
                        return "plus_expansion_offer";
                    case "business":
                        return "business_expansion_offer";
                    default:
                        return
                }
            }

            function r(e, t) {
                if ("plus" === e) {
                    if ("one_member" === t) return "plus_expansion_one_member";
                    if ("two_member" === t) return "plus_expansion_two_member"
                }
                if ("business" === e) {
                    if ("one_member" === t) return "business_expansion_one_member";
                    if ("two_member" === t) return "business_expansion_two_member"
                }
            }

            function i(e) {
                switch (e) {
                    case "plus_expansion_one_member":
                    case "business_expansion_one_member":
                        return 1;
                    case "plus_expansion_two_member":
                    case "business_expansion_two_member":
                        return 2;
                    default:
                        return 3
                }
            }

            function o(e, t) {
                if (!e) return !1;
                let a = l(e, t);
                return !!a && (a.membersAdded ? ? 0) >= i(t)
            }

            function l(e, t) {
                var a;
                if (e) return null == e || null == (a = e.getSettings()) || null == (a = a.offer_member_count) ? void 0 : a.find(e => e.campaign === t)
            }
            a.d(t, {
                $E: () => r,
                UB: () => n,
                Zy: () => i,
                _w: () => l,
                fd: () => o
            }), a(898992), a(672577)
        },
        525272: (e, t, a) => {
            a.d(t, {
                E: () => n
            });

            function n(e) {
                let {
                    spaceStore: t,
                    viewedUserId: n
                } = e, r = (0, a(533992).v3)(), i = (0, a(993077).nB)(t), o = (0, a(993077).V_)({
                    spaceStore: t,
                    userId: n
                }), l = (0, a(682985).K8)(() => {
                    let e = null == t ? void 0 : t.id;
                    return !(0, a(455221).e)(r, e) && "control" !== a(218744).default.getEligibleGroup({
                        experimentId: "show_comment_guest_badge",
                        defaultGroup: "control"
                    })
                }, [r, t]);
                return (0, a(682985).K8)(() => (0, a(62694).V)({
                    spaceStore: t,
                    actorRole: i,
                    viewedRole: o,
                    shouldShowForExternalUsers: l
                }), [t, i, o, l])
            }
        },
        528440: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        532755: (e, t, a) => {
            a.d(t, {
                D: () => i
            });
            var n = a(296540),
                r = a(474848);

            function i({
                userStore: e,
                suppressMouse: t,
                children: o,
                spaceStore: l,
                width: s,
                from: d = "unknown"
            }) {
                let c = (0, n.useRef)(null),
                    u = (0, a(525272).E)({
                        spaceStore: l,
                        viewedUserId: null == e ? void 0 : e.id
                    }),
                    p = (0, a(83208).X)("prefetch_extended_user_profiles"),
                    f = u && p,
                    g = (0, a(815048).fJ)(a(554666).u.extendedUserProfileActions, {
                        disabled: !f
                    }),
                    m = (0, a(533992).v3)();
                (0, n.useEffect)(() => {
                    f && "resolved" === g.status && null != e && e.id && l && null != l && l.userId && g.value.prefetchExtendedUserProfiles({
                        spaceStore: l,
                        actorUserId: l.userId,
                        viewedUserIds: [e.id]
                    }, m)
                }, [f, null == e ? void 0 : e.id, l, u, m, g]);
                let h = (0, n.useCallback)(() => {
                        c.current && e && l && !t && a(84300).A.setState({
                            type: "user",
                            store: e,
                            domRect: c.current.getBoundingClientRect(),
                            spaceStore: l,
                            from: d
                        })
                    }, [e, l, t, d]),
                    b = (0, n.useCallback)(() => {
                        a(84300).A.setState(void 0)
                    }, []);
                return e && u ? (0, r.jsx)("div", {
                    ref: c,
                    onMouseEnter: u ? h : void 0,
                    onMouseLeave: u ? b : void 0,
                    style: s ? {
                        width: s
                    } : void 0,
                    children: o
                }) : o
            }
        },
        540328: (e, t, a) => {
            a.d(t, {
                KY: () => i,
                dr: () => o,
                xX: () => l
            });
            var n = () => a(558208);
            let r = new Map;

            function i(e) {
                r.set(e.id, e)
            }

            function o(e) {
                if (e) return r.get(e)
            }

            function l(e) {
                var t, i, o;
                let {
                    threadStore: l,
                    environment: s,
                    spaceStore: d,
                    userStore: c
                } = e;
                if (!l || !(0, n().Ci)(l)) return l;
                let u = s.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === n().Ll && u.removeCacheOverride(e);
                let p = l.getTranscript(),
                    f = l.getParentId(),
                    g = l.getParentTable(),
                    m = null == (t = l.getData()) ? void 0 : t.workflow_id,
                    h = l.getType(),
                    b = null == (i = l.getData()) ? void 0 : i.title,
                    v = l.getSpaceId() ? ? d.id,
                    {
                        performResult: y
                    } = (0, a(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: s,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: v
                        },
                        perform: e => {
                            let t = (0, a(757688).aP)({
                                environment: s,
                                spaceStore: d,
                                userStore: c,
                                transcript: p,
                                transaction: e,
                                threadId: l.id,
                                workflowId: m,
                                threadType: h
                            });
                            return f && g && (0, a(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: f,
                                    parent_table: g,
                                    space_id: v
                                }
                            }), b && (0, a(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: b
                                }
                            }), t
                        }
                    });
                return o = l.id, r.delete(o), y ? ? a(174148).E.createChildStore(d, {
                    id: l.id,
                    spaceId: v,
                    table: a(832375).Toz
                })
            }
        },
        545504: (e, t, a) => {
            a.d(t, {
                w: () => n
            });

            function n({
                url: e,
                config: t
            }) {
                let r = (0, a(132702).parseRoute)({
                    url: e,
                    baseUrl: t.domainBaseUrl,
                    publicDomainName: t.publicDomainName,
                    isMobile: !1,
                    protocol: t.protocol,
                    currentUrl: void 0,
                    requestedOnAlternateDomain: t.requestedOnAlternateDomain
                });
                if ("page" === r.name) return r.blockId
            }
        },
        546579: (e, t, a) => {
            e.exports = a.p + "a5098827bba61d4d.png"
        },
        550122: (e, t, a) => {
            e.exports = a.p + "176441c5ba020951.png"
        },
        554666: (e, t, a) => {
            a.d(t, {
                i: () => r,
                u: () => n
            });
            let n = {
                    PersonProfileContainer: new(a(815048)).O2("PersonProfileContainer", () => Promise.all([a.e(75134), a.e(21969), a.e(29663), a.e(75136), a.e(98175), a.e(47414), a.e(16922), a.e(65594), a.e(15021), a.e(98821), a.e(77470), a.e(80068), a.e(44632)]).then(a.bind(a, 587386))),
                    extendedUserProfileActions: new(a(815048)).O2("extendedUserProfileActions", () => a.e(63717).then(a.bind(a, 433562)))
                },
                r = (0, a(815048)._h)(n.PersonProfileContainer, e => e.PersonProfileContainer)
        },
        555017: (e, t, a) => {
            a.d(t, {
                o: () => n
            });

            function n(e) {
                let t = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => {
                    var n;
                    if (!e) return !1;
                    let r = a(547631).a.getData(t, {
                        spaceId: e
                    });
                    if (!r) return;
                    let i = null == (n = r.premiumCredits) ? void 0 : n.servicePeriodStartMs;
                    return (0, a(192159).di)({
                        servicePeriodStart: i ? new Date(i) : void 0,
                        experimentService: a(218744).default,
                        spaceId: e
                    })
                }, [t, e])
            }
        },
        556306: (e, t, a) => {
            a.d(t, {
                h: () => n
            });

            function n(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        556809: (e, t, a) => {
            a.d(t, {
                a: () => o
            });
            var n = a(296540);

            function r(e) {
                a(561599).A.state.openModals.has(e) && (a(561599).A.state.openModals.delete(e), a(561599).A.emit())
            }
            var i = a(474848);

            function o(e) {
                let {
                    open: t,
                    onOpen: o,
                    transitionAppearance: l = "modal"
                } = e, s = (0, n.useRef)();
                void 0 === s.current && (s.current = a(92513).JW());
                let c = s.current,
                    u = (0, a(682985).uB)(e.store, a(432376).A),
                    p = (0, a(682985).K8)(() => u.state.open, [u]),
                    f = (0, n.useRef)(!1),
                    g = function({
                        disableAnimationFromProps: e,
                        isShowingTabBar: t
                    }) {
                        return !!t || e
                    }({
                        disableAnimationFromProps: "none" === l,
                        isShowingTabBar: (0, a(682985).O$)(a(584257).b)
                    }),
                    m = (0, n.useCallback)(() => {
                        if (!f.current && t) u.setState({
                            open: !0,
                            openAnimationCompleted: !1,
                            closeAnimationCompleted: !0
                        }), a(561599).A.state.openModals.has(c) || (a(561599).A.state.openModals.add(c), a(561599).A.emit()), o && o();
                        else f.current && !t && (u.setState({
                            open: !0,
                            openAnimationCompleted: !0,
                            closeAnimationCompleted: !1
                        }), r(c));
                        f.current = t
                    }, [c, u, o, t]);
                return (0, n.useEffect)(() => {
                    m()
                }, [m]), (0, a(637030).X)(() => {
                    r(c)
                }), (0, i.jsx)(a(114596).O, {
                    open: p,
                    zIndex: e.overlayZIndex,
                    origin: e.origin,
                    trapFocus: !0,
                    children: (0, i.jsx)(a(369064).N, {
                        debugName: "Modal",
                        capture: e.open,
                        onEsc: t => {
                            e.onDismiss && e.onDismiss(t)
                        },
                        children: (0, i.jsx)(a(654979).A, {
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
                                duration: g ? 0 : void 0
                            },
                            onAnimationEnd: () => {
                                var a, n, r;
                                return a = t, n = u, r = e.onClosed, void(a ? n.setState({
                                    open: !0,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }) : (n.setState({
                                    open: !1,
                                    openAnimationCompleted: !0,
                                    closeAnimationCompleted: !0
                                }), null == r || r()))
                            },
                            open: e.open,
                            keepFocus: e.keepFocus,
                            disableAnimation: g,
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
                            transitionAppearance: l
                        })
                    })
                })
            }

            function l({
                children: e,
                disableAnimation: t,
                preventHideChildrenWhileOpening: n,
                store: r
            }) {
                let o = (0, a(682985).uB)(r, a(432376).A),
                    s = (0, a(682985).K8)(() => o.state.openAnimationCompleted, [o]);
                return t || s || n ? (0, i.jsx)(i.Fragment, {
                    children: e
                }) : null
            }
            let s = n.forwardRef(function({
                    showCloseIcon: e,
                    onDismiss: t,
                    isWaxPaper: n,
                    isWash: r,
                    ariaLabel: o,
                    ariaLabelledBy: s,
                    ariaDescribedBy: d,
                    style: c,
                    children: u,
                    disableAnimation: p,
                    preventHideChildrenWhileOpening: f,
                    store: g
                }, m) {
                    let h = (0, a(682985).uB)(g, a(432376).A),
                        b = (0, a(960253).I)(() => ({
                            dialog: {
                                position: "relative",
                                zIndex: 1,
                                maxHeight: "100%",
                                boxShadow: a(632079).Tj.shadow.outline.scrim,
                                borderRadius: 12,
                                overflow: "hidden",
                                ...c,
                                background: n ? a(632079).Tj.popoverWaxPaperBackground : r ? a(632079).Tj.background.secondary : a(632079).Tj.background.elevated,
                                backdropFilter: n ? "blur(40px)" : "none",
                                WebkitBackdropFilter: n ? "blur(40px)" : "none"
                            }
                        }), [c, n, r]);
                    return (0, i.jsxs)("div", {
                        "aria-modal": !0,
                        role: "dialog",
                        className: "notion-dialog",
                        tabIndex: -1,
                        "aria-label": o,
                        "aria-labelledby": s,
                        "aria-describedby": d,
                        style: b.dialog,
                        ref: m,
                        children: [e ? (0, i.jsx)(a(226512).R, {
                            onClick: t
                        }) : void 0, (0, i.jsx)(l, {
                            children: u,
                            disableAnimation: p,
                            preventHideChildrenWhileOpening: f,
                            store: h
                        })]
                    })
                }),
                d = n.forwardRef(function({
                    open: e,
                    keepFocus: t = !1,
                    disableAnimation: n,
                    showCloseIcon: r,
                    onDismiss: o,
                    isWaxPaper: l,
                    isWash: d,
                    ariaLabel: c,
                    ariaLabelledBy: u,
                    ariaDescribedBy: p,
                    innerStyle: f,
                    children: g,
                    preventHideChildrenWhileOpening: m,
                    style: h,
                    className: b,
                    backgroundStyle: v,
                    transitionAppearance: y,
                    store: _
                }, I) {
                    let S = (0, a(336995).A)(t),
                        w = function(e) {
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
                                    (0, a(722371).HB)(e)
                            }
                        }(y),
                        {
                            mobileTopPadding: x,
                            mobileBottomPadding: k
                        } = function() {
                            let {
                                WindowSizeStore: e
                            } = (0, a(533992).v3)();
                            return {
                                mobileTopPadding: (0, a(682985).K8)(() => e.getSafePaddingTopPx(0), [e]),
                                mobileBottomPadding: (0, a(571354).n)()
                            }
                        }();
                    return (0, i.jsxs)("div", {
                        style: {
                            paddingTop: x,
                            paddingBottom: k,
                            width: "100vw",
                            height: "100vh",
                            position: "fixed",
                            top: 0,
                            insetInlineStart: 0,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            pointerEvents: e ? "auto" : "none",
                            ...h
                        },
                        ...S,
                        className: b,
                        ref: I,
                        children: [(0, i.jsx)(a(781036).B, {
                            backgroundStyle: v,
                            onDismiss: o
                        }), (0, i.jsx)(a(654979).A, {
                            tag: s,
                            skip: n,
                            visible: e,
                            ...w,
                            forceCompositeLayer: !0,
                            showCloseIcon: r,
                            onDismiss: o,
                            isWaxPaper: l,
                            isWash: d,
                            ariaLabel: c,
                            ariaLabelledBy: u,
                            ariaDescribedBy: p,
                            style: f,
                            children: g,
                            disableAnimation: n,
                            preventHideChildrenWhileOpening: m,
                            store: _
                        })]
                    })
                })
        },
        558208: (e, t, a) => {
            a.d(t, {
                AD: () => l,
                Ci: () => s,
                Ll: () => r,
                XN: () => o,
                rz: () => i
            });
            var n = a(296540);
            let r = "TemporaryAiThreadCache";
            class i {
                tempThreadPointer = void 0;
                getOrCreateThreadId(e) {
                    let {
                        environment: t,
                        spaceId: n,
                        maybeThreadStore: r
                    } = e;
                    if (r) return r.id;
                    if (this.tempThreadPointer) return this.tempThreadPointer.id;
                    let i = (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).Toz,
                        spaceId: n
                    });
                    return this.tempThreadPointer = {
                        id: i,
                        table: a(832375).Toz,
                        spaceId: n
                    }, i
                }
                reset() {
                    this.tempThreadPointer = void 0
                }
            }
            let o = (0, n.createContext)(new i);

            function l() {
                return (0, n.useContext)(o)
            }

            function s(e) {
                var t;
                return (null == e || null == (t = e.inMemoryRecordCache) ? void 0 : t.name) === r
            }
            o.displayName = "TemporaryAiThreadContext"
        },
        559096: (e, t, a) => {
            a.r(t), a.d(t, {
                loadLocalSubtree: () => l
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(803949), a(581454);
            var n = () => a(986939),
                r = () => a(430733),
                i = () => a(832375),
                o = () => a(247438);

            function l(e) {
                let {
                    environment: t,
                    blockId: l,
                    inMemoryRecordCache: s,
                    options: d
                } = e, c = t.currentUser.id, u = a(412951).RecordMap.create(), p = new Set, f = [{
                    pointer: {
                        table: i().evP,
                        id: l
                    },
                    parentId: "doesn't matter"
                }];
                for (; f.length > 0;) {
                    let e = f.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = l === e.pointer.id,
                        g = function(e) {
                            let t, {
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f,
                                isRootRequest: g
                            } = e;
                            return (0, a(496282).Yt)(l, i().evP) ? t = function(e) {
                                var t, l, s, d, c, u, p, f;
                                let {
                                    pointer: g,
                                    recordMap: m,
                                    inMemoryRecordCache: h,
                                    currentUserId: b,
                                    cursors: v,
                                    cursor: y,
                                    options: _,
                                    isRootRequest: I
                                } = e, S = h.getRecord({
                                    pointer: g,
                                    userId: b
                                }), w = null == S ? void 0 : S.value;
                                if (!w) return _.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: g
                                } : void 0;
                                let x = _.excludeCrdtData ? a(877308).ir(w) : w;
                                if (_.includeLegacyTransclusionBlockValues) {
                                    if (!I && x.parent_id !== y.parentId && !y.isBlockContentChild) return
                                } else if (!I && x.parent_id !== y.parentId) return;
                                if (x.type === a(955630).xd.externalObjectInstance && !_.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: g
                                };
                                if (m.setValue(g, x), !_.skipNavigableChildren) {
                                    for (let e of a(993189).Bj6.fromBlock(x).getCollectionPointers()) {
                                        let t = h.getRecord({
                                            pointer: e,
                                            userId: b
                                        });
                                        if (t) {
                                            if ((null == (c = t.value) ? void 0 : c.parent_table) !== i().evP || (null == (u = t.value) ? void 0 : u.parent_id) !== x.id) continue
                                        } else {
                                            if (_.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        v.push({
                                            pointer: e,
                                            parentId: x.id
                                        })
                                    }
                                    if (x.view_ids)
                                        for (let e of x.view_ids) v.push({
                                            pointer: {
                                                table: i().Gy1,
                                                id: e,
                                                spaceId: x.space_id
                                            },
                                            parentId: x.id
                                        })
                                }
                                if (!_.skipBlockContent && (!_.skipTransclusionContainerChildren || "transclusion_container" !== x.type) && (!_.skipNavigableChildren || !(0, a(955630).$I)(x.type)))
                                    for (let e of a(993189).Bj6.fromBlock(x).getRenderableContentIds()) v.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e
                                        },
                                        parentId: x.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of a(993189).Bj6.fromBlock(x).getNonContentChildren()) v.push({
                                    pointer: {
                                        table: i().evP,
                                        id: e
                                    },
                                    parentId: x.id,
                                    isBlockContentChild: !0
                                });
                                if (x.type === a(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = x.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (f = x.format) ? void 0 : f.related_external_object_uris_to_instance_ids) || []) v.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    });
                                if (!_.skipNavigableChildren && x.properties)
                                    for (let e of Object.values(x.properties).filter(a(722371).O9))
                                        for (let t of e)
                                            for (let e of o().uPN(t)) {
                                                if (o().jIt(e)) {
                                                    let t = o().v55(e);
                                                    v.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                                if (o().sh$(e)) {
                                                    let t = o().cQR(e),
                                                        a = (0, r().lX)({
                                                            url: t,
                                                            baseUrl: n().A.domainBaseUrl,
                                                            publicDomainName: n().A.publicDomainName
                                                        });
                                                    a && v.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: a
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                                if (o().N53(e)) {
                                                    let t = o().T$c(e);
                                                    t && v.push({
                                                        pointer: {
                                                            table: i().evP,
                                                            id: t,
                                                            spaceId: x.space_id
                                                        },
                                                        parentId: x.id
                                                    })
                                                }
                                            }
                                if ("form" === x.type && null != (t = x.format) && t.form_layout_pointer && v.push({
                                        pointer: x.format.form_layout_pointer,
                                        parentId: x.id
                                    }), null != (l = x.format) && l.automation_id && v.push({
                                        pointer: {
                                            table: i().yBS,
                                            id: x.format.automation_id,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    }), null != (s = x.format) && s.workflow_id && v.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: x.format.workflow_id,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    }), x.format && "database_agent_ids" in x.format && Array.isArray(x.format.database_agent_ids))
                                    for (let e of x.format.database_agent_ids) v.push({
                                        pointer: {
                                            table: i().C0E,
                                            id: e,
                                            spaceId: x.space_id
                                        },
                                        parentId: x.id
                                    });
                                null != (d = x.format) && d.ai_instructions_page_pointer && v.push({
                                    pointer: x.format.ai_instructions_page_pointer,
                                    parentId: x.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f,
                                isRootRequest: g
                            }) : (0, a(496282).Yt)(l, i().VlP) ? t = function(e) {
                                var t, a;
                                let {
                                    pointer: n,
                                    recordMap: r,
                                    inMemoryRecordCache: o,
                                    currentUserId: l,
                                    cursors: s,
                                    cursor: d,
                                    options: c
                                } = e;
                                if (!c.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: n
                                };
                                let u = o.getRecord({
                                    pointer: n,
                                    userId: l
                                });
                                if (!(null != u && u.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                if (u.value.parent_id !== d.parentId) return;
                                let p = u.value;
                                for (let e of (r.setValue(n, p), o.forEachRecord({
                                        userId: l,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === i().evP && e && e.parent_id === n.id && e.alive && s.push({
                                                pointer: e.pointer,
                                                parentId: n.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) s.push({
                                    pointer: {
                                        table: i().yBS,
                                        id: e,
                                        spaceId: p.space_id
                                    },
                                    parentId: p.id
                                });
                                p.schema && (Object.values(p.schema).forEach(e => {
                                    e && "button" === e.type && e.automation_id && s.push({
                                        pointer: {
                                            id: e.automation_id,
                                            spaceId: p.space_id,
                                            table: i().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        s.push({
                                            pointer: {
                                                table: i().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: d.parentId
                                        })
                                    }
                                })), null != (a = p.format) && a.layout_pointer && s.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().Gy1) ? t = function(e) {
                                var t, a;
                                let {
                                    pointer: n,
                                    recordMap: r,
                                    inMemoryRecordCache: i,
                                    currentUserId: o,
                                    cursors: l,
                                    cursor: s,
                                    options: d
                                } = e, c = i.getRecord({
                                    pointer: n,
                                    userId: o
                                });
                                if (!(null != c && c.value)) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                (c.value.parent_id === s.parentId || s.skipParentIdCheck) && ("form_editor" === c.value.type && null != (t = c.value.format) && t.form_block_pointer && l.push({
                                    pointer: c.value.format.form_block_pointer,
                                    parentId: c.value.id
                                }), null != (a = c.value.format) && a.dashboard_layout_pointer && l.push({
                                    pointer: c.value.format.dashboard_layout_pointer,
                                    parentId: c.value.id
                                }), r.setValue(n, c.value))
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: n,
                                    currentUserId: r,
                                    cursors: o,
                                    cursor: l,
                                    options: s
                                } = e, d = n.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != d && d.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (d.value.parent_id === l.parentId)
                                    for (let e of (a.setValue(t, d.value), d.value.action_ids ? ? [])) o.push({
                                        pointer: {
                                            table: i().SC1,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: n,
                                    currentUserId: r,
                                    cursors: o,
                                    cursor: l,
                                    options: s
                                } = e, d = n.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != d && d.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: l.pointer
                                } : void 0;
                                if (d.value.parent_id === l.parentId)
                                    for (let e of (a.setValue(t, d.value), d.value.blocks ? ? [])) o.push({
                                        pointer: {
                                            table: i().evP,
                                            id: e,
                                            spaceId: d.value.space_id
                                        },
                                        parentId: d.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: n,
                                    currentUserId: r,
                                    cursor: i,
                                    options: o
                                } = e, l = n.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != l && l.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i.pointer
                                } : void 0;
                                l.value.parent_id === i.parentId && a.setValue(t, l.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: n,
                                    recordMap: r,
                                    inMemoryRecordCache: o,
                                    currentUserId: l,
                                    cursors: s,
                                    options: d
                                } = e, c = o.getRecord({
                                    pointer: n,
                                    userId: l
                                }), u = null == c ? void 0 : c.value;
                                if (!u) return d.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: n
                                } : void 0;
                                let p = u.parent_id !== e.cursor.parentId ? { ...u,
                                        parent_id: e.cursor.parentId
                                    } : u,
                                    f = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let n = o.getRecord({
                                                pointer: (0, a(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: l
                                            });
                                            return (null == n || null == (t = n.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: f
                                        }
                                    }, r.setValue(n, p), a(993189).Bj6.fromValue(i().zx0, p).getBlockChildrenPointers())) s.push({
                                    pointer: e,
                                    parentId: n.id
                                });
                                let g = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: i().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return s.push({
                                        pointer: t,
                                        parentId: n.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, a(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: i().lo9,
                                            spaceId: p.space_id
                                        };
                                        s.push({
                                            pointer: t,
                                            parentId: n.id
                                        })
                                    } else if ("view" === e.type) g(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && g(t)
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            }) : (0, a(496282).Yt)(l, i().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: a,
                                    inMemoryRecordCache: n,
                                    currentUserId: r,
                                    options: i
                                } = e, o = n.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != o && o.value)) return i.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                a.setValue(t, o.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: d,
                                currentUserId: c,
                                cursors: u,
                                cursor: p,
                                options: f
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: u,
                            inMemoryRecordCache: s,
                            currentUserId: c,
                            cursors: f,
                            cursor: e,
                            options: d,
                            isRootRequest: t
                        });
                    if (g) return g;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: u
                }
            }
        },
        561599: (e, t, a) => {
            a.d(t, {
                A: () => o
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        openModals: new Set
                    }
                }
            }
            let i = new r,
                o = i;
            (0, a(202146).exposeDebugValue)("GlobalModalStore", i)
        },
        565719: (e, t, a) => {
            a.d(t, {
                w: () => n
            });

            function n(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        580899: (e, t, a) => {
            e.exports = a.p + "7afb74ab9eed1a81.png"
        },
        584758: (e, t, a) => {
            e.exports = a.p + "8cc12fd49d607b13.png"
        },
        585279: (e, t, a) => {
            a.d(t, {
                g: () => r
            });
            var n = a(296540);

            function r(e) {
                var t;
                let r = (0, a(533992).v3)(),
                    [i, o] = (0, n.useState)(),
                    l = (0, a(723240).r)(),
                    s = (null == (t = (0, a(187041).g)({
                        spaceId: l
                    })) ? void 0 : t.length) ? ? 0;
                return (0, n.useEffect)(() => {
                    !async function() {
                        l && o(await (0, a(413552).L6)({
                            environment: r,
                            spaceId: l,
                            offerCampaign: e
                        }))
                    }()
                }, [r, l, e, s]), i
            }
        },
        589563: (e, t, a) => {
            a.d(t, {
                Ah: () => d,
                Dk: () => o,
                Iv: () => s,
                SF: () => l,
                YO: () => p,
                _f: () => g,
                c_: () => r,
                dW: () => u,
                gW: () => i,
                sp: () => m,
                vN: () => c
            }), a(16280), a(944114), a(898992), a(354520), a(803949), a(581454), a(737550);
            var n = () => a(722371);

            function r(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function i(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "delete_automation_step",
                    properties: t
                })
            }

            function o(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_create",
                    properties: t
                })
            }

            function l(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_update",
                    properties: t
                })
            }

            function s(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_delete",
                    properties: t
                })
            }

            function d(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_enable",
                    properties: t
                })
            }

            function c(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_disable",
                    properties: t
                })
            }

            function u(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_create",
                    properties: t
                })
            }

            function p(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "automation_action_delete",
                    properties: t
                })
            }

            function f(e) {
                let {
                    formulaAnalyticsModule: t,
                    formulasModule: r,
                    formulaTypecheckContextValues: i,
                    getRecordModel: o,
                    spaceId: l,
                    value: s,
                    featureGates: d
                } = e;
                if ("formula" === s.type) {
                    if (!(0, n().O9)(s.value)) return;
                    let e = a(300441).Q.unwrapOr(r.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let n = r.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, a(297493).zg)(o),
                            spaceId: l,
                            valueTypes: i,
                            featureGates: d
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: o,
                                typecheckContextValues: i
                            }),
                            formula_return_type: n.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: o,
                                typecheckContextValues: i
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, n().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: o,
                        typecheckContextValues: i
                    })
                } else(0, n().HB)(s.type)
            }

            function g(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: r,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d,
                    simpleFormulasModule: c
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: a,
                            formulaAnalyticsModule: r,
                            formulasModule: i,
                            formulaTypecheckContextValues: o,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        d = a.getConfig(),
                        c = [],
                        u = null == d ? void 0 : d.collection,
                        p = null == d ? void 0 : d.properties;
                    if ((0, n().O9)(u) && (0, n().O9)(p) && p.length > 0) {
                        let e = l(u),
                            m = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, n().O9)(m) && (c = p.map(e => {
                            var t;
                            return (null == (t = m[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let h = null == d ? void 0 : d.values;
                        if (i && (0, n().O9)(h))
                            for (let e of (t = [], p)) {
                                var g;
                                let n = null == (g = h[e]) ? void 0 : g.value;
                                if (!n) continue;
                                let d = f({
                                    formulaAnalyticsModule: r,
                                    formulasModule: i,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: o,
                                    spaceId: a.spaceId,
                                    value: n,
                                    featureGates: s
                                });
                                d && t.push(d)
                            }
                    }
                    return {
                        automation_action_id: a.pointer.id,
                        property_formula_stats: t,
                        property_types: c,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: a,
                        formulasModule: r,
                        formulaTypecheckContextValues: i,
                        getRecordModel: o,
                        featureGates: l
                    } = e, s = t.getConfig(), d = [];
                    if (r && (0, n().O9)(s) && s.text) {
                        let e = f({
                            formulasModule: r,
                            formulaAnalyticsModule: a,
                            getRecordModel: o,
                            formulaTypecheckContextValues: i,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && d.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: d,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, r;
                    let {
                        automationActionModel: i,
                        formulaAnalyticsModule: o,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: d,
                        featureGates: c,
                        simpleFormulasModule: u
                    } = e, p = {
                        automation_action_id: i.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, g = i.getConfig();
                    if (!(0, n().O9)(g)) return p;
                    if ((0, n().O9)(g.target)) {
                        if ("formula" === g.target.type && (0, n().O9)(g.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, a(247438).Fbh)(g.target.value.value).length,
                                    numFormulaContextTargets: u.getReferencedContextValueIds(g.target.value).length
                                }, l) {
                                let e = f({
                                    formulasModule: l,
                                    formulaAnalyticsModule: o,
                                    getRecordModel: d,
                                    formulaTypecheckContextValues: s,
                                    spaceId: i.spaceId,
                                    value: g.target.value,
                                    featureGates: c
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === g.target.type && (0, n().O9)(g.target.propertyId) && (0, n().O9)(g.target.collectionPointer)) {
                            let e = d(g.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, n().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (r = t[g.target.propertyId]) ? void 0 : r.type
                            })
                        }
                    }
                    if ((0, n().O9)(null == (t = g.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, a(247438).FAw)(g.notification_message.value), l)) {
                        let e = f({
                            formulasModule: l,
                            formulaAnalyticsModule: o,
                            getRecordModel: d,
                            formulaTypecheckContextValues: s,
                            spaceId: i.spaceId,
                            value: g.notification_message,
                            featureGates: c
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d,
                    simpleFormulasModule: c
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, r, i, o, l, s, d;
                    let {
                        automationActionModel: c,
                        formulaAnalyticsModule: u,
                        formulasModule: p,
                        formulaTypecheckContextValues: g,
                        getRecordModel: m,
                        featureGates: h
                    } = e, b = c.getConfig();
                    if (!(0, n().O9)(b)) return {
                        automation_action_id: c.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let v = Object.fromEntries(Object.entries(b || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var a;
                                return [e, !!(null == t || null == (a = t.value) ? void 0 : a.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: y,
                            cc: _,
                            bcc: I
                        } = b,
                        S = [...(null == y || null == (t = y.value) ? void 0 : t.value) || [], ...(null == _ || null == (r = _.value) ? void 0 : r.value) || [], ...(null == I || null == (i = I.value) ? void 0 : i.value) || []],
                        w = [...(0, a(247438).Fbh)(S).map(e => m({
                            table: a(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(n().O9), ...(0, a(801109).C3)((0, a(247438).k4p)(S))],
                        x = (0, a(763230).Tr)(w.map(e => e.split("@")[1])),
                        k = [null == (o = b.to) ? void 0 : o.value, null == (l = b.cc) ? void 0 : l.value, null == (s = b.bcc) ? void 0 : s.value, null == (d = b.reply_to) ? void 0 : d.value, b.from_name, b.email_subject, b.email_body].map(e => {
                            if (p && (0, n().O9)(e)) return f({
                                formulaAnalyticsModule: u,
                                formulasModule: p,
                                getRecordModel: m,
                                formulaTypecheckContextValues: g,
                                spaceId: c.spaceId,
                                value: e,
                                featureGates: h
                            })
                        }).filter(n().O9);
                    return {
                        automation_action_id: c.pointer.id,
                        fields: v,
                        formula_stats: k,
                        recipient_domains: x,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: r,
                        formulaAnalyticsModule: i,
                        formulasModule: o,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: d
                    } = e, c = t.getConfig(), u = [], p = [], g = [];
                    if ((0, n().O9)(c) && (0, n().O9)(c.target) && (0, n().O9)(c.properties) && c.properties.length > 0) {
                        let e;
                        if ("variable" === c.target.type) {
                            let t = (0, a(297493).y5)(c.target.id);
                            if ("action" === t.source) {
                                let t = (0, a(33529).y)({
                                    actionModels: r,
                                    id: c.target.id
                                }).collectionPointer;
                                if ((0, n().O9)(t)) {
                                    let a = s(t);
                                    e = null == a ? void 0 : a.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, a(297493).IV)(l, c.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, n().O9)(t.type.collection)) {
                                    let a = s(t.type.collection);
                                    e = null == a ? void 0 : a.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === c.target.type) {
                            let t = s(c.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, n().O9)(e) && c.properties.forEach(a => {
                            let r = e[a];
                            if ((0, n().O9)(r) && (u.push(r.type), o && (0, n().O9)(c.values))) {
                                let e = c.values[a];
                                if ((0, n().O9)(e) && (p.push({
                                        type: r.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let a = f({
                                        formulasModule: o,
                                        formulaAnalyticsModule: i,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: d
                                    });
                                    a && g.push(a)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: p,
                        property_formula_stats: g,
                        property_types: u,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: r,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: a,
                        formulasModule: r,
                        formulaTypecheckContextValues: i,
                        getRecordModel: o,
                        featureGates: l
                    } = e, s = t.getConfig(), d = [];
                    if (r && (0, n().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let n = f({
                                    formulasModule: r,
                                    formulaAnalyticsModule: a,
                                    getRecordModel: o,
                                    formulaTypecheckContextValues: i,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                n && d.push(n)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: d,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: i,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: d
                }) : t.isType("http_request") ? {
                    automation_action_id: t.pointer.id,
                    type: "http_request"
                } : t.isType("publish_site") ? {
                    automation_action_id: t.pointer.id,
                    type: "publish_site"
                } : t.isType("worker") ? {
                    automation_action_id: t.pointer.id,
                    type: "worker"
                } : t.isType("archive_pages") ? {
                    automation_action_id: t.pointer.id,
                    type: "archive_pages"
                } : void(0, n().HB)(t)
            }

            function m(e) {
                var t, r;
                let i, o, l, {
                        automationModel: s,
                        builderType: d = "sidebar",
                        formulaAnalyticsModule: c,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: m,
                        simpleFormulasModule: h,
                        source: b
                    } = e,
                    v = [],
                    y = s.getActionPointers().map(e => f(e)).filter(n().O9);
                for (let e of s.getActionPointers()) {
                    let t = f(e);
                    (0, n().O9)(t) && v.push(g({
                        automationActionModel: t,
                        automationActionModels: y,
                        formulaAnalyticsModule: c,
                        formulasModule: u,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: m,
                        simpleFormulasModule: h
                    }))
                }
                let _ = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        r = f(s.getParentPointer());
                    i = s.getParentId();
                    let d = s.getEventConfiguration();
                    if ((null == (t = d.source) ? void 0 : t.type) === "collection_view") {
                        let e = f(d.source.pointer);
                        (null == e ? void 0 : e.parent_table) === a(682956).ev && (l = null == e ? void 0 : e.parent_id), o = null == d ? void 0 : d.source.pointer.id
                    }
                    let c = null == r ? void 0 : r.getNormalizedSchema(f);
                    if ((0, n().O9)(c)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: a
                        } = e;
                        if (t && _.push({
                                type: "page"
                            }), "any" === a.type) _.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === a.type) _.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === a.type ? e = a.some ? ? [] : "all" === a.type && (e = a.all ? ? []);
                            let t = [],
                                r = [];
                            e.forEach(e => {
                                var a;
                                let i = null == (a = c[e.property]) ? void 0 : a.type;
                                (0, n().O9)(i) && (t.push({
                                    type: i,
                                    operator: e.filter.operator
                                }), r.push(i))
                            }), _.push({
                                condition: a.type,
                                property_configs: t,
                                property_types: r,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? _.push({
                    type: "button"
                }) : s.isRecurrenceType() ? _.push({
                    type: "recurrence",
                    frequency: null == (r = s.getTrigger().recurrence) ? void 0 : r.frequency
                }) : (0, n().HB)(s);
                return {
                    automation_actions: v,
                    automation_id: s.id,
                    automation_triggers: _,
                    collection_id: i,
                    collection_view_id: o,
                    collection_view_block_id: l,
                    builder_type: d,
                    source: b
                }
            }
        },
        591637: (e, t, a) => {
            a.d(t, {
                a: () => i
            }), a(898992), a(354520), a(581454), a(296540);
            var n = a(474848);
            let r = {
                style0: {
                    width: 200
                },
                style1: {
                    minWidth: 200
                },
                caption: {
                    color: a(632079).Tj.text.secondary,
                    textAlign: "center",
                    fontSize: 12,
                    fontWeight: a(699422).Wy.regular,
                    lineHeight: "15px"
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function i(e) {
                var t;
                let {
                    caption: i,
                    layout: o,
                    sectionGap: l,
                    secondaryButtonTooltip: s
                } = e, d = e.primaryButtons.filter(Boolean), c = null == (t = e.secondaryButtons) ? void 0 : t.filter(Boolean);
                if (!(null != d && d.length) && !(null != c && c.length) && !i) return null;
                let u = (null == c ? void 0 : c.length) > 0;
                return "vertical" === o ? (0, n.jsxs)(a(4458).VP, {
                    className: "autolayout-fill-width",
                    style: {
                        gap: l ? ? 8,
                        ...r.positionRelative
                    },
                    children: [(0, n.jsxs)(a(4458).VP, {
                        style: {
                            gap: 7,
                            ...r.positionRelative
                        },
                        children: [d.map((e, t) => (0, n.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t)), i ? (0, n.jsx)("div", {
                            style: r.caption,
                            children: i
                        }) : null]
                    }), u ? s ? (0, n.jsx)(a(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: r.style0,
                        placement: "bottom",
                        children: e => (0, n.jsx)("div", { ...e,
                            children: c.map((e, t) => (0, n.jsx)(a(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, n.jsx)("div", {
                        children: c.map((e, t) => (0, n.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0]
                }) : "horizontal-right" === o ? (0, n.jsxs)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "flex-end",
                    className: "autolayout-fill-width",
                    style: {
                        gap: l ? ? 8,
                        ...r.positionRelative
                    },
                    children: [null == c ? void 0 : c.map((e, t) => (0, n.jsx)(a(124108).N, {
                        buttonInfo: e
                    }, t)), d.map((e, t) => (0, n.jsx)(a(124108).N, {
                        buttonInfo: e
                    }, t))]
                }) : "horizontal-space-between" === o ? (0, n.jsxs)(a(4458).fI, {
                    justifyContent: "space-between",
                    children: [u ? s ? (0, n.jsx)(a(51831).m, {
                        content: () => s,
                        textWrap: !0,
                        style: r.style1,
                        placement: "bottom",
                        children: e => (0, n.jsx)("div", { ...e,
                            children: null == c ? void 0 : c.map((e, t) => (0, n.jsx)(a(124108).N, {
                                buttonInfo: e
                            }, t))
                        })
                    }) : (0, n.jsx)("div", {
                        children: null == c ? void 0 : c.map((e, t) => (0, n.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    }) : void 0, (0, n.jsx)("div", {
                        children: d.map((e, t) => (0, n.jsx)(a(124108).N, {
                            buttonInfo: e
                        }, t))
                    })]
                }) : void(0, a(722371).HB)(o)
            }
        },
        593847: (e, t, a) => {
            function n(e) {
                let {
                    spaceStore: t,
                    spaceJoinOrCreate: n,
                    isFirstTimeOnboarding: r,
                    flowName: i
                } = e;
                if ("default" !== i && "reimagined_default" !== i || !(null == t ? void 0 : t.isAiEnabledOnSpace()) || !r || "create" !== n) return !1;
                let o = a(218744).default.getEligibleGroup({
                    experimentId: "getting_started_example_company_workspace",
                    disableExposureLogging: !0
                });
                return !o || "control" === o
            }

            function r(e) {
                let {
                    environment: t,
                    spaceJoinOrCreate: n
                } = e;
                "create" !== n || a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_checklist"
                }) && (0, a(647164).o)({
                    environment: t,
                    featureKey: "adoption_agent_new_user_onboarding_checklist"
                })
            }

            function i(e) {
                var t;
                let {
                    environment: n
                } = e, r = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!r || (0, a(89408).mA)({
                        environment: n
                    })) return !1;
                let i = null == (t = r.getSettings()) ? void 0 : t.post_onboarding_agent_config;
                return !(null != i && i.thread_id && (0, a(596244).B)(i)) && !!(0, a(89408).wz)({
                    environment: n,
                    featureKey: "adoption_agent_new_user_onboarding_checklist"
                }) && "sidebar_d1" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_checklist",
                    disableExposureLogging: !0
                })
            }

            function o(e) {
                let {
                    environment: t
                } = e;
                return !!d({
                    environment: t
                }) && "sidebar_d1" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                    disableExposureLogging: !0
                })
            }

            function l(e) {
                let {
                    environment: t
                } = e, n = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!n || !d({
                        environment: t
                    })) return !1;
                if ("sidebar_d2" === a(218744).default.getEligibleGroup({
                        experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                        disableExposureLogging: !0
                    })) {
                    let e = (0, a(996903).i)(n);
                    return null !== e && e >= 1
                }
                return !1
            }

            function s(e) {
                let {
                    environment: t
                } = e;
                return !!d({
                    environment: t
                }) && "sidebar_nudge" === a(218744).default.getEligibleGroup({
                    experimentId: "adoption_new_user_agent_onboarding_joiner_v2",
                    disableExposureLogging: !0
                })
            }

            function d(e) {
                let {
                    environment: t
                } = e;
                return !(!a(728372).AppStoreCurrentUserSettingsStore.state || (0, a(89408).dp)({
                    environment: t
                })) && !!(0, a(89408).wz)({
                    environment: t,
                    featureKey: "adoption_new_user_agent_onboarding_joiner_v2"
                })
            }
            a.d(t, {
                Au: () => l,
                L9: () => s,
                MH: () => o,
                fw: () => i,
                g9: () => r,
                jr: () => n
            })
        },
        601587: (e, t, a) => {
            function n(e, t) {
                let n = o(t);
                return (0, a(722371).objectKeys)(n).filter(t => e.includes(t)).sort((e, a) => n[e].languageNameInCurrentLanguage.localeCompare(n[a].languageNameInCurrentLanguage, t.locale))
            }
            a.d(t, {
                O8: () => n,
                Vn: () => o,
                W$: () => l,
                tr: () => r,
                vC: () => i
            }), a(898992), a(354520);
            let r = (0, a(109939).YK)({
                    "en-US": {
                        defaultMessage: "English (US)",
                        id: "languagePicker.captions.englishUS"
                    },
                    "de-DE": {
                        defaultMessage: "German",
                        id: "languagePicker.captions.germanDE"
                    },
                    "ko-KR": {
                        defaultMessage: "Korean",
                        id: "languagePicker.captions.koreanKo"
                    },
                    "zh-CN": {
                        defaultMessage: "Simplified Chinese",
                        id: "languagePicker.captions.chineseS"
                    },
                    "zh-TW": {
                        defaultMessage: "Traditional Chinese",
                        id: "languagePicker.captions.chineseT"
                    },
                    "ja-JP": {
                        defaultMessage: "Japanese",
                        id: "languagePicker.captions.japaneseJa"
                    },
                    "es-ES": {
                        defaultMessage: "Spanish (Spain)",
                        id: "languagePicker.captions.spanishEs"
                    },
                    "es-LA": {
                        defaultMessage: "Spanish (Latin America)",
                        id: "languagePicker.captions.spanishLatam"
                    },
                    "pt-BR": {
                        defaultMessage: "Portuguese (Brazil)",
                        id: "languagePicker.captions.portugueseBr"
                    },
                    "fr-FR": {
                        defaultMessage: "French (France)",
                        id: "languagePicker.captions.frenchFr"
                    },
                    "da-DK": {
                        defaultMessage: "Danish",
                        id: "languagePicker.captions.danishDk"
                    },
                    "fi-FI": {
                        defaultMessage: "Finnish",
                        id: "languagePicker.captions.finnishFi"
                    },
                    "nb-NO": {
                        defaultMessage: "Norwegian",
                        id: "languagePicker.captions.norwegianNo"
                    },
                    "nl-NL": {
                        defaultMessage: "Dutch",
                        id: "languagePicker.captions.dutchNl"
                    },
                    "sv-SE": {
                        defaultMessage: "Swedish",
                        id: "languagePicker.captions.swedishSe"
                    },
                    "en-GB": {
                        defaultMessage: "English (UK)",
                        id: "languagePicker.captions.englishGB"
                    },
                    "th-TH": {
                        defaultMessage: "Thai",
                        id: "languagePicker.captions.thaiTh"
                    },
                    "id-ID": {
                        defaultMessage: "Indonesian",
                        id: "languagePicker.captions.indonesianId"
                    },
                    "vi-VN": {
                        defaultMessage: "Vietnamese",
                        id: "languagePicker.captions.vietnameseVn"
                    },
                    "he-IL": {
                        defaultMessage: "Hebrew",
                        id: "languagePicker.captions.hebrewIl"
                    },
                    "ar-SA": {
                        defaultMessage: "Arabic",
                        id: "languagePicker.captions.arabicSa"
                    },
                    pseudo: {
                        defaultMessage: "Pseudolocale",
                        id: "languagePicker.captions.pseudolocale"
                    }
                }),
                i = {
                    "en-US": "English (US)",
                    "de-DE": "Deutsch",
                    "ko-KR": "한국어",
                    "zh-CN": "简体中文",
                    "zh-TW": "繁體中文",
                    "ja-JP": "日本語",
                    "es-ES": "Español (España)",
                    "es-LA": "Español (Latinoamérica)",
                    "pt-BR": "Português (Brasil)",
                    "fr-FR": "Français (France)",
                    "da-DK": "Dansk",
                    "fi-FI": "Suomi",
                    "nb-NO": "Norsk",
                    "nl-NL": "Nederlands",
                    "sv-SE": "Svenska",
                    "en-GB": "English (UK)",
                    "th-TH": "ภาษาไทย",
                    "id-ID": "Bahasa Indonesia",
                    "vi-VN": "Tiếng Việt",
                    "he-IL": "עברית",
                    "ar-SA": "العربية",
                    pseudo: "🤡Pseudolocale🤡"
                };

            function o(e) {
                let t = {};
                for (let n of (0, a(722371).objectKeys)(i)) t[n] = {
                    languageNameInThatLanguage: i[n],
                    languageNameInCurrentLanguage: e.formatMessage(r[n])
                };
                return t
            }

            function l(e) {
                return {
                    en: {
                        name: e.formatMessage({
                            defaultMessage: "English",
                            id: "languagePicker.name.english"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "EN",
                            id: "languagePicker.abbreviation.english"
                        })
                    },
                    de: {
                        name: e.formatMessage({
                            defaultMessage: "German",
                            id: "languagePicker.name.german"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DE",
                            id: "languagePicker.abbreviation.german"
                        })
                    },
                    ko: {
                        name: e.formatMessage({
                            defaultMessage: "Korean",
                            id: "languagePicker.name.korean"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "KO",
                            id: "languagePicker.abbreviation.korean"
                        })
                    },
                    zh: {
                        name: e.formatMessage({
                            defaultMessage: "Chinese",
                            id: "languagePicker.name.chinese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ZH",
                            id: "languagePicker.abbreviation.chinese"
                        })
                    },
                    ja: {
                        name: e.formatMessage({
                            defaultMessage: "Japanese",
                            id: "languagePicker.name.japanese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "JA",
                            id: "languagePicker.abbreviation.japanese"
                        })
                    },
                    es: {
                        name: e.formatMessage({
                            defaultMessage: "Spanish",
                            id: "languagePicker.name.spanish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ES",
                            id: "languagePicker.abbreviation.spanish"
                        })
                    },
                    pt: {
                        name: e.formatMessage({
                            defaultMessage: "Portuguese",
                            id: "languagePicker.name.portuguese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "PT",
                            id: "languagePicker.abbreviation.portuguese"
                        })
                    },
                    fr: {
                        name: e.formatMessage({
                            defaultMessage: "French",
                            id: "languagePicker.name.french"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FR",
                            id: "languagePicker.abbreviation.french"
                        })
                    },
                    da: {
                        name: e.formatMessage({
                            defaultMessage: "Danish",
                            id: "languagePicker.name.danish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "DA",
                            id: "languagePicker.abbreviation.danish"
                        })
                    },
                    fi: {
                        name: e.formatMessage({
                            defaultMessage: "Finnish",
                            id: "languagePicker.name.finnish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "FI",
                            id: "languagePicker.abbreviation.finnish"
                        })
                    },
                    nb: {
                        name: e.formatMessage({
                            defaultMessage: "Norwegian",
                            id: "languagePicker.name.norwegian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NB",
                            id: "languagePicker.abbreviation.norwegian"
                        })
                    },
                    nl: {
                        name: e.formatMessage({
                            defaultMessage: "Dutch",
                            id: "languagePicker.name.dutch"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "NL",
                            id: "languagePicker.abbreviation.dutch"
                        })
                    },
                    sv: {
                        name: e.formatMessage({
                            defaultMessage: "Swedish",
                            id: "languagePicker.name.swedish"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "SV",
                            id: "languagePicker.abbreviation.swedish"
                        })
                    },
                    th: {
                        name: e.formatMessage({
                            defaultMessage: "Thai",
                            id: "languagePicker.name.thai"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "TH",
                            id: "languagePicker.abbreviation.thai"
                        })
                    },
                    vi: {
                        name: e.formatMessage({
                            defaultMessage: "Vietnamese",
                            id: "languagePicker.name.vietnamese"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "VI",
                            id: "languagePicker.abbreviation.vietnamese"
                        })
                    },
                    id: {
                        name: e.formatMessage({
                            defaultMessage: "Indonesian",
                            id: "languagePicker.name.indonesian"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "ID",
                            id: "languagePicker.abbreviation.indonesian"
                        })
                    },
                    he: {
                        name: e.formatMessage({
                            defaultMessage: "Hebrew",
                            id: "languagePicker.name.hebrew"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "HE",
                            id: "languagePicker.abbreviation.hebrew"
                        })
                    },
                    ar: {
                        name: e.formatMessage({
                            defaultMessage: "Arabic",
                            id: "languagePicker.name.arabic"
                        }),
                        abbreviation: e.formatMessage({
                            defaultMessage: "AR",
                            id: "languagePicker.abbreviation.arabic"
                        })
                    }
                }
            }
        },
        602949: (e, t, a) => {
            async function* n(e) {
                var t;
                let n, {
                        environment: i,
                        from: o,
                        provider: l,
                        enforceCurrentUserEmail: s = !0
                    } = e,
                    d = a(728372).AppStoreSidebarSpaceViewStore.state,
                    c = new Set(a(440143).Q.getState().getCurrentAccounts().filter(e => e.provider === l).map(e => e.id)),
                    u = null == (t = a(728372).AppStoreCurrentUserStore.state) ? void 0 : t.getEmail(),
                    p = null == d ? void 0 : d.getSpaceId();
                if (!u || !p || !d) return a(773352).log({
                    level: "error",
                    from: "generateNotionCalendarSignup",
                    type: "unableToConnectCalendar - missing email or spaceId",
                    data: {
                        miscDataToConvertToString: {
                            email: u,
                            spaceId: p,
                            source: o
                        }
                    }
                }), "missingEmailOrSpaceId";
                switch (l) {
                    case "icloud":
                        {
                            let e = await (0, a(874809).i6)({
                                environment: i,
                                providerContext: {
                                    type: "icloud"
                                }
                            });
                            if (!e) return "oAuthWindowClosedByUser";
                            if ("dismissedDueToCleanup" === e) return "oAuthWindowClosedDueToCleanup";n = r({
                                environment: i,
                                code: e.code,
                                spaceId: p,
                                provider: l,
                                from: o
                            });
                            break
                        }
                    case "google":
                    case "outlook":
                        {
                            let e = await (0, a(874809).i6)({
                                environment: i,
                                providerContext: "google" === l ? {
                                    type: "google",
                                    email: s ? u : void 0
                                } : {
                                    type: "outlook"
                                }
                            });
                            if (!e) return "oAuthWindowClosedByUser";
                            if ("dismissedDueToCleanup" === e) return "oAuthWindowClosedDueToCleanup";n = r({
                                environment: i,
                                spaceId: p,
                                provider: l,
                                from: o,
                                ...e
                            });
                            break
                        }
                    default:
                        (0, a(722371).HB)(l)
                }
                yield "signupInitiated";
                let f = await n;
                if (!(0, a(6779).s)()) return "wentOffline";
                if ("failed" === f.type) return "signupFailure";
                yield "signupSuccess", await a(994869).refreshExternalIntegrationStore({
                    environment: i
                });
                let g = f.data.botId,
                    m = "failure";
                async function h() {
                    m = await (0, a(55067).qq)({
                        environment: i,
                        sidebarSpaceViewStore: d,
                        botId: g,
                        forceRefetch: !0,
                        timeRange: (0, a(83748).M)(),
                        reason: {
                            reason: "notion_calendar_oauth"
                        }
                    })
                }
                if (await h(), "failure" === m && (await (0, a(975162).wR)(1e3), await h()), !(0, a(6779).s)()) return "wentOffline";
                if ("failure" === m) return "secondaryDataLoadFailure";
                let b = a(440143).Q.getState().getCurrentAccounts().filter(e => e.provider === l);
                if (s) {
                    let e = b.find(e => e.email === u);
                    if (!e) return "accountMismatch";
                    if ("authorized" !== e.authorizationStatus) return "insufficientScopes"
                } else {
                    let e = b.find(e => !c.has(e.id));
                    if (e && (null == e ? void 0 : e.authorizationStatus) !== "authorized") return "insufficientScopes"
                }
                return "secondaryDataLoaded"
            }
            async function r(e) {
                let {
                    environment: t
                } = e, a = "icloud" === e.provider ? {
                    code: e.code,
                    provider: e.provider,
                    spaceId: e.spaceId,
                    from: e.from
                } : {
                    code: e.code,
                    encryptedToken: e.encryptedToken,
                    provider: e.provider,
                    spaceId: e.spaceId,
                    from: e.from
                };
                return await t.api.callApi({
                    eventName: "createCompleteCalendarUser",
                    environment: t,
                    data: a
                })
            }
            a.d(t, {
                $: () => n,
                l: () => r
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454)
        },
        603651: (e, t, a) => {
            a.d(t, {
                W: () => r
            }), a(296540);
            var n = a(474848);

            function r({
                tooltipTitle: e,
                tooltipDescription: t,
                buttonProps: l,
                iconSize: s = "small",
                iconColorVariant: d = "tertiary",
                tooltipWidth: c,
                forceVisibleState: u = !1
            }) {
                return (0, n.jsx)(a(51831).m, {
                    placement: "top",
                    forceVisibleState: u,
                    style: c ? {
                        width: c
                    } : void 0,
                    content: () => (0, n.jsxs)(a(4458).VP, {
                        gap: 2,
                        className: "autolayout-fill-width",
                        style: i.positionRelative,
                        children: [e ? (0, n.jsx)(a(111010).D, {
                            styleKey: "captionMedium",
                            colorVariant: "inversePrimary",
                            children: e
                        }) : null, t ? (0, n.jsx)(a(111010).D, {
                            styleKey: "captionRegular",
                            colorVariant: "inverseSecondary",
                            children: t
                        }) : null]
                    }),
                    textWrap: !!c,
                    children: e => (0, n.jsx)(o, {
                        buttonProps: l,
                        ...e,
                        children: (0, n.jsx)(a(708966).Q, {
                            iconGroup: a(799472).u,
                            colorVariant: d,
                            variantName: s
                        })
                    })
                })
            }
            let i = {
                button: {
                    borderRadius: 2
                },
                positionRelative: {
                    position: "relative"
                }
            };

            function o({
                children: e,
                buttonProps: t,
                ...r
            }) {
                return t ? (0, n.jsx)(a(64960).Ay, {
                    style: i.button,
                    ...t,
                    ...r,
                    children: e
                }) : (0, n.jsx)("span", { ...r,
                    children: e
                })
            }
        },
        605263: (e, t, a) => {
            a.d(t, {
                K4: () => s,
                To: () => p,
                fi: () => d,
                q8: () => l,
                u: () => o
            }), a(16280), a(18107), a(967357);
            var n = a(296540),
                r = a(474848);
            let i = (0, n.createContext)({
                ancestors: []
            });

            function o(e) {
                let {
                    automationStore: t,
                    children: o,
                    contextType: l,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: f,
                    enableExistenceGuarantees: g
                } = e, m = (0, a(533992).v3)(), h = (0, a(109939).tz)(), {
                    value: b
                } = (0, a(815048).fJ)(a(864850).T.formulas), {
                    value: v
                } = (0, a(815048).fJ)(a(879267).QV.automationTypecheck), y = (0, a(470569).o)(t), _ = (0, a(67499).S)(), I = (0, a(682985).K8)(() => b ? v ? function(e) {
                    let {
                        environment: t,
                        automationStore: n,
                        automationTypecheckModule: r,
                        contextType: i,
                        formulasModule: o,
                        intl: l,
                        subscriptionInfo: s,
                        pageStore: d,
                        enableExistenceGuarantees: p
                    } = e, f = p ? c.get(n) : c.get(n) ? ? u.get(n);
                    if (f) return f;
                    let g = new(a(345426)).ComputedStore(() => {
                        let e = n.getTriggerType(),
                            c = i;
                        return (0, a(722371).O9)(e) && (0, a(432705).x2)(e) && (c = (0, a(432705).H8)(e)), (0, a(100197).Z)({
                            environment: t,
                            automationStore: n,
                            automationTypecheckModule: r,
                            contextType: c,
                            formulasModule: o,
                            intl: l,
                            subscriptionInfo: s,
                            pageStore: d,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && c.set(n, g), u.set(n, g), g
                }({
                    automationStore: t,
                    automationTypecheckModule: v,
                    contextType: l,
                    environment: m,
                    formulasModule: b,
                    intl: h,
                    subscriptionInfo: y,
                    pageStore: "button_block" === l ? null == _ ? void 0 : _.pageStore : void 0,
                    enableExistenceGuarantees: g
                }).state : {
                    error: new(a(600005)).N9("Missing automation dependency")
                } : {
                    error: new(a(600005)).N9("Missing formulas dependency")
                }, [m, t, v, l, b, h, y, null == _ ? void 0 : _.pageStore, g]), S = (0, n.useContext)(i), w = (0, n.useMemo)(() => 0 === S.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: I,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }] : [...S.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: I,
                    collectionStore: s,
                    collectionSettingsStore: d,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }], [S, t, l, I, s, d, p, f]), x = (0, n.useMemo)(() => ({
                    ancestors: w,
                    enableExistenceGuarantees: g
                }), [w, g]);
                return (0, r.jsx)(i.Provider, {
                    value: x,
                    children: o
                })
            }

            function l() {
                let e = (0, n.useContext)(i).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function s() {
                return (0, n.useContext)(i).ancestors.at(-1)
            }

            function d() {
                return (0, n.useContext)(i).enableExistenceGuarantees
            }
            i.displayName = "AutomationContext", i.Consumer;
            let c = new WeakMap,
                u = new WeakMap;

            function p(e) {
                var t;
                return null == (t = c.get(e)) ? void 0 : t.state
            }
        },
        606430: (e, t, a) => {
            a.d(t, {
                w: () => d,
                y: () => s
            });
            let n = {
                    sources: {
                        "en-US": {
                            previewRootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            rootId: "e950a58c-0d6f-42c3-8225-9e7adc5d4182",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                r = {
                    sources: {
                        "en-US": {
                            previewRootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            rootId: "89ba9061-3275-4d76-966f-11691fdfd72f",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            rootId: "0eb824c6-f768-47bc-9204-d94dbb912c6e",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            rootId: "09f3541c-8edb-4603-9bc3-02bd22cd7836",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            rootId: "b13cc3bd-a0a3-4b61-b482-63051d7804b5",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            rootId: "b2b10be2-1b2f-4a48-a453-532657bd8e92",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            rootId: "a00ebb82-58f2-4b40-89ee-a65be3befabf",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            rootId: "6d1f21ba-36cf-4c90-9ecb-d5e377942f3a",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            rootId: "50a76940-a26e-443a-b752-1412855e6ad7",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            rootId: "4c0f8e8c-3967-43ab-a0a8-a3a8ae837714",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            rootId: "555c9896-0c2d-4af7-a951-1d81f051de2e",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            rootId: "751d20c2-e2be-4e61-921a-adb553651c8c",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            rootId: "8e0ffb71-86cb-46bf-abf2-720dcb4378f9",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            rootId: "53da1632-5152-4b4f-b440-19b82802360b",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            rootId: "a2ca886e-3537-47e1-823b-57633cb94702",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            rootId: "ed24d770-243d-4ef4-b469-0187beadf16e",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            rootId: "22317954-d9c2-81e2-ac8b-ee29b0a7809b",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            rootId: "22317954-d9c2-81f9-9472-fdb4858f55e8",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            rootId: "22317954-d9c2-81b0-a305-eff50acb3864",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            rootId: "22317954-d9c2-81f4-a6bd-f0eda23061c7",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            previewRootId: "2b817954-d9c2-8087-ac1a-c8f8ae60bfdb",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            previewRootId: "2b817954-d9c2-803f-88fc-cb42d429b01d",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                i = {
                    sources: {
                        "en-US": {
                            previewRootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            rootId: "30fa18a6-609e-4f5b-af3d-31906c46fe23",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            rootId: "3afd60d5-3ce7-431a-b812-2c836b7596a3",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            rootId: "dd2f1d05-d4ef-48a0-899c-10fe0346a447",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            rootId: "ac411712-ee48-4589-828d-b4e5827efc17",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            rootId: "0c5be7d7-cfcf-417b-824a-1a280254a58e",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            rootId: "35c18cd6-99a8-47f3-91ee-40dbfec922fa",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            rootId: "017372b2-9d34-4118-ad13-9b8e15c30ebd",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            rootId: "035cfcde-4292-4905-82b2-6517e58a28b9",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            rootId: "42a8570d-5be6-4be4-9ca3-0569f54863bf",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            rootId: "5f103e1f-2659-4c6a-bb30-705d2dae0774",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            rootId: "811aca42-41c0-4f83-9e08-e795d7a5f803",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            rootId: "7643a79b-68c8-46af-ae10-f089cb1ae62b",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            rootId: "6e5d9018-2dc0-4dc7-802c-be95d99f1660",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            rootId: "289fe37a-a3fc-4cec-b690-a6f99dec65a8",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            rootId: "a9fef1fc-6a95-45fc-9a7f-137790c06105",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            rootId: "22317954-d9c2-8168-b83f-ebfc302217e4",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-812b-acae-d320272c9931",
                            rootId: "22317954-d9c2-812b-acae-d320272c9931",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            rootId: "22317954-d9c2-81c3-ade9-cfcadf726253",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            rootId: "22317954-d9c2-81ae-abe1-c77fb13e32c2",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            previewRootId: "2b817954-d9c2-801e-9e31-f0ad39acb40d",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            previewRootId: "2b817954-d9c2-80e2-8969-d8a70ea19101",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                o = {
                    sources: {
                        "en-US": {
                            previewRootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            rootId: "bd0b93b9-a0e9-4582-a164-98acdc7a5b45",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            rootId: "ecdfe65a-28ee-46d2-a82b-99573e3dd63d",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            rootId: "56dd4a06-5073-46d2-8aca-8e37d90e5610",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            rootId: "1f8febec-2e84-4be2-a67d-7b5165845a4b",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            rootId: "ee67a0e4-8343-4dd6-9636-9504cae6c573",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            rootId: "eabf4d1f-9a77-441f-88fb-de9e9e0dc26e",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            rootId: "56ba9c1f-2a28-4d05-910c-e89fb051327d",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            rootId: "07ffa801-adfb-41f3-809b-87f69ae9e9cd",
                            spaceId: a(54353).rQ
                        },
                        "nb-NO": {
                            previewRootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            rootId: "62f63581-5683-49a3-8812-32e2de74a6a6",
                            spaceId: a(54353).rQ
                        },
                        "fi-FI": {
                            previewRootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            rootId: "f01bdcc5-d573-4790-b605-988df0f3a5ea",
                            spaceId: a(54353).rQ
                        },
                        "sv-SE": {
                            previewRootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            rootId: "e404919f-5dda-4fc3-a28f-6550e70cee12",
                            spaceId: a(54353).rQ
                        },
                        "da-DK": {
                            previewRootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            rootId: "cee1de64-79f4-45b4-85d5-1ffae9624a8e",
                            spaceId: a(54353).rQ
                        },
                        "nl-NL": {
                            previewRootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            rootId: "86ecfb21-c0ed-42cb-864c-83890d49cb51",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            rootId: "244bca5a-9931-40fb-91cd-bbcd97f1e8be",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            rootId: "802eb5a0-67f1-4f31-a058-938206b68f1c",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            rootId: "22317954-d9c2-8179-944e-cebc376a24f1",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            rootId: "22317954-d9c2-8174-8225-c55b3053258c",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            rootId: "22317954-d9c2-81b4-844e-dfaa568db972",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            rootId: "22317954-d9c2-817b-b9b4-cbd055e05ba6",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            previewRootId: "2b817954-d9c2-8018-8891-c7de9ab4efc1",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            previewRootId: "2b817954-d9c2-80d4-a4ba-f35b66365d8b",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPage
                },
                l = {
                    sources: {
                        "en-US": {
                            previewRootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            rootId: "2e568628-70b1-4f35-934e-81ea4263d0e8",
                            spaceId: a(54353).rQ
                        },
                        "ko-KR": {
                            previewRootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            rootId: "3d8c8d33-f904-41f7-a3ff-b6272c633079",
                            spaceId: a(54353).rQ
                        },
                        "ja-JP": {
                            previewRootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            rootId: "9aefc3b4-f172-4917-b1c7-495c26ec37f9",
                            spaceId: a(54353).rQ
                        },
                        "fr-FR": {
                            previewRootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            rootId: "4453c56e-831c-4203-83fc-9736e276b7dc",
                            spaceId: a(54353).rQ
                        },
                        "de-DE": {
                            previewRootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            rootId: "6239e7bb-e6a6-4cb4-b4fa-236035bad7f7",
                            spaceId: a(54353).rQ
                        },
                        "es-ES": {
                            previewRootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            rootId: "95dafcd5-6243-4838-bea1-8e19b0596f6f",
                            spaceId: a(54353).rQ
                        },
                        "es-LA": {
                            previewRootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            rootId: "34d8ae09-8161-49ec-ae2d-c188c477bb90",
                            spaceId: a(54353).rQ
                        },
                        "pt-BR": {
                            previewRootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            rootId: "cb2a5d30-074f-4c07-97b5-61147e0ea504",
                            spaceId: a(54353).rQ
                        },
                        "zh-CN": {
                            previewRootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            rootId: "72e66598-65f8-47ec-ba84-000d7321b482",
                            spaceId: a(54353).rQ
                        },
                        "zh-TW": {
                            previewRootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            rootId: "ec8b7591-22e8-41e6-9342-b44c1190b855",
                            spaceId: a(54353).rQ
                        },
                        "en-GB": {
                            previewRootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            rootId: "22317954-d9c2-8147-ab85-d82ae2e2590a",
                            spaceId: a(54353).rQ
                        },
                        "id-ID": {
                            previewRootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            rootId: "22317954-d9c2-81ca-9be8-efc8add2fab4",
                            spaceId: a(54353).rQ
                        },
                        "vi-VN": {
                            previewRootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            rootId: "22317954-d9c2-81b1-9d4c-c3571789c534",
                            spaceId: a(54353).rQ
                        },
                        "th-TH": {
                            previewRootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            rootId: "22317954-d9c2-81c5-9a7c-ce158660ac68",
                            spaceId: a(54353).rQ
                        },
                        "ar-SA": {
                            rootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            previewRootId: "2b817954-d9c2-8014-8867-f5e5cbf2c71c",
                            spaceId: a(54353).rQ
                        },
                        "he-IL": {
                            rootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            previewRootId: "2b817954-d9c2-809d-bb3d-f9c22caad3de",
                            spaceId: a(54353).rQ
                        }
                    },
                    nameMessage: a(647414).DZ.getStartedPageEvernote
                },
                s = {
                    desktopPersonal: r,
                    desktopTeamCreate: i,
                    desktopTeamJoin: o,
                    mobile: {
                        sources: {
                            "en-US": {
                                previewRootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                rootId: "16017954-d9c2-806e-8eba-d994c71414b9",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                rootId: "1a817954-d9c2-80ee-a7cc-f06b312607c6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                rootId: "1a817954-d9c2-80ab-b876-ce0540bcbc50",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                rootId: "1a817954-d9c2-809c-be16-eada2bec6449",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                rootId: "1a817954-d9c2-80e4-a2f7-cbc04084b700",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                rootId: "1a817954-d9c2-80ba-a1d2-f116653c87e7",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                rootId: "1a817954-d9c2-8009-ace4-c7a8be973d30",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                rootId: "1a817954-d9c2-8013-97f7-c8514ce9ca72",
                                spaceId: a(54353).rQ
                            },
                            "nb-NO": {
                                previewRootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                rootId: "1b417954-d9c2-802c-8aad-ead5bdae042e",
                                spaceId: a(54353).rQ
                            },
                            "nl-NL": {
                                previewRootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                rootId: "1b417954-d9c2-8040-99cd-f6f24a7b664e",
                                spaceId: a(54353).rQ
                            },
                            "da-DK": {
                                previewRootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                rootId: "1b417954-d9c2-8000-bc82-e5b055b64bfd",
                                spaceId: a(54353).rQ
                            },
                            "sv-SE": {
                                previewRootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                rootId: "1b417954-d9c2-8083-934b-e38126f120e2",
                                spaceId: a(54353).rQ
                            },
                            "fi-FI": {
                                previewRootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                rootId: "1b417954-d9c2-8011-b27a-e0ad995bd435",
                                spaceId: a(54353).rQ
                            },
                            "zh-CN": {
                                previewRootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                rootId: "1b417954-d9c2-8014-bc84-cf44da811cf8",
                                spaceId: a(54353).rQ
                            },
                            "zh-TW": {
                                previewRootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                rootId: "1a817954-d9c2-80a9-bb6f-f39ba79e7dcc",
                                spaceId: a(54353).rQ
                            },
                            "en-GB": {
                                previewRootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                rootId: "22317954-d9c2-81fa-b3bc-e876ef8712aa",
                                spaceId: a(54353).rQ
                            },
                            "id-ID": {
                                previewRootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                rootId: "22317954-d9c2-8135-ba53-c91462db2bd9",
                                spaceId: a(54353).rQ
                            },
                            "vi-VN": {
                                previewRootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                rootId: "22317954-d9c2-8120-af12-dbf6ca2ad3c8",
                                spaceId: a(54353).rQ
                            },
                            "th-TH": {
                                previewRootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                rootId: "22317954-d9c2-816e-a1db-ede575b22b4b",
                                spaceId: a(54353).rQ
                            },
                            "ar-SA": {
                                rootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                previewRootId: "2b817954-d9c2-80c3-bd3a-c079ca7962cb",
                                spaceId: a(54353).rQ
                            },
                            "he-IL": {
                                rootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                previewRootId: "2b817954-d9c2-8064-846c-f5466598e98d",
                                spaceId: a(54353).rQ
                            }
                        },
                        nameMessage: a(647414).DZ.getStartedPageMobile
                    },
                    evernote: l,
                    web: n
                },
                d = {
                    teamsHomepage: {
                        emoji: "🏠",
                        nameMessage: a(647414).DZ.teamsHomepage,
                        sources: {
                            "en-US": {
                                previewRootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                rootId: "4cd0eced-e273-46c2-84f5-a7efd7fbdd2f",
                                spaceId: a(54353).rQ
                            },
                            "ko-KR": {
                                previewRootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                rootId: "82be252e-5184-44cd-a91b-a7d6ffdefac6",
                                spaceId: a(54353).rQ
                            },
                            "ja-JP": {
                                previewRootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                rootId: "bea8efd0-61d7-495b-a255-5c1f40753cf7",
                                spaceId: a(54353).rQ
                            },
                            "fr-FR": {
                                previewRootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                rootId: "12a6eaa5-30f7-419b-aee7-1be2dbc7278c",
                                spaceId: a(54353).rQ
                            },
                            "de-DE": {
                                previewRootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                rootId: "75db54d0-46ad-43b1-8ef0-7556ce0e9069",
                                spaceId: a(54353).rQ
                            },
                            "es-ES": {
                                previewRootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                rootId: "9ac64262-cad7-44f3-bfae-96dabec9e770",
                                spaceId: a(54353).rQ
                            },
                            "es-LA": {
                                previewRootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                rootId: "5b51de44-604b-4a96-b421-9f3e3cf470d2",
                                spaceId: a(54353).rQ
                            },
                            "pt-BR": {
                                previewRootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                rootId: "b9626438-4451-441c-9608-35ab50e3b182",
                                spaceId: a(54353).rQ
                            }
                        }
                    }
                }
        },
        609328: (e, t, a) => {
            a.d(t, {
                P: () => i
            }), a(944114), a(296540);
            var n = a(474848);
            let r = (0, a(109939).YK)({
                errorStacktraceCopied: {
                    defaultMessage: "Stacktrace copied to clipboard",
                    id: "errorLabel.moreInfo.stacktrace.toast.label"
                }
            });

            function i({
                environment: e,
                title: t,
                ...o
            }) {
                var l, s, d;
                let c = [],
                    u = null == (l = o.error) ? void 0 : l.stack;
                if (u) {
                    let t = globalThis.Meticulous;
                    null != t && t.isRunningAsTest && (null == (s = t.replay) || null == (d = s.terminate) || d.call(s)), c.push({
                        label: "Copy stacktrace",
                        ariaLabel: "Copy error stacktrace to clipboard",
                        onClick: async () => {
                            (await (0, a(969899).Nu)())({
                                environment: e,
                                stringValue: u,
                                htmlValue: `<meta charset='utf-8'><pre><code class="language-bash">${u}
		</code></pre>`,
                                copiedMessage: r.errorStacktraceCopied
                            })
                        }
                    })
                }
                c.push({
                    buttonType: "solid",
                    color: "blue",
                    label: (0, n.jsx)(a(109939).sA, { ...a(647095)._0.dismissButtonLabel
                    }),
                    onAccept: a(763230).D_
                }), a(647095).ui({
                    message: t,
                    description: (0, n.jsx)(a(149795).dD, { ...o
                    }),
                    allowCopy: !0,
                    showCancel: !1,
                    keepFocus: !1,
                    mode: "wide",
                    items: c
                })
            }
        },
        616922: (e, t, a) => {
            a.d(t, {
                eQ: () => f,
                hJ: () => w,
                Ay: () => g,
                Uo: () => b,
                XE: () => I
            }), a(944114), a(898992), a(823215), a(581454);
            var n = a(296540);
            let r = new(a(815048)).O2("AIMNLiveCollabCallout", async () => await a.e(35920).then(a.bind(a, 966085))),
                i = (0, a(815048)._h)(r, e => e.AIMNLiveCollabCallout);
            var o = () => a(225476);
            let l = function(e) {
                    let t = (0, a(533992).v3)(),
                        r = (0, n.useRef)(),
                        i = (0, a(396805).T)(),
                        o = (0, n.useCallback)(async () => {
                            if (await a(941701).transactionQueue.awaitRecordTransaction(e.blockStore.pointer), !i.current) return;
                            let n = (0, a(568479).Ws)(e.blockStore.id);
                            r.current = a(48091).Ay.addListener({
                                key: n,
                                authorizationToken: void 0,
                                listener: a(381453).nF(() => a(469589).updatePageVisits(t, {
                                    blockStore: e.blockStore,
                                    pageVisitStore: e.pageVisitStore,
                                    incremental: !0,
                                    limit: e.limit
                                }), 1e3),
                                subscriptionId: void 0
                            })
                        }, [t, i, e.blockStore, e.limit, e.pageVisitStore]),
                        l = (0, n.useCallback)(() => {
                            r.current && (a(48091).Ay.removeListener(r.current), r.current = void 0)
                        }, []);
                    return (0, n.useEffect)(() => (o(), l), [o, l]), null
                },
                s = new(a(815048)).O2("AvatarHoverCard", async () => await Promise.all([a.e(21969), a.e(47414), a.e(98821), a.e(77470), a.e(6608)]).then(a.bind(a, 691631))),
                d = (0, a(815048)._h)(s, e => e.AvatarHoverCard),
                c = new(a(815048)).O2("MoreViewersHoverCard", async () => await a.e(46118).then(a.bind(a, 479676))),
                u = (0, a(815048)._h)(c, e => e.MoreViewersHoverCard);
            var p = a(474848);
            let f = 22,
                g = function({
                    pageVisitStore: e,
                    presenceStore: t,
                    rootStore: n,
                    maxUsers: r
                }) {
                    return (0, p.jsxs)(p.Fragment, {
                        children: [(0, p.jsx)(a(315144).a, {
                            rootStore: n
                        }), (0, p.jsx)(w, {
                            rootStore: n,
                            pageVisitStore: e,
                            presenceStore: t,
                            maxUsers: r,
                            isShowingInFeed: !1
                        }), (0, p.jsx)(l, {
                            blockStore: n,
                            pageVisitStore: e,
                            limit: 1 + (r ? ? 5) + 25
                        })]
                    })
                };

            function m(e) {
                return a(381453).Ul(e, e => e.activityTimestampNearestMinuteMs)
            }

            function h(e, t) {
                return a(807825).L.createChildStore(t, {
                    table: a(832375).oo9,
                    id: e
                })
            }

            function b(e) {
                let {
                    environment: t,
                    isShowingTabBar: n,
                    isShowingInFeed: r
                } = e;
                return { ...(0, a(1249).g)({
                        noDrag: t.device.isElectron && !n
                    }),
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    flexDirection: "row-reverse",
                    marginInlineStart: 8,
                    paddingInlineEnd: 6,
                    transform: "translateZ(0)",
                    ...r && {
                        maxHeight: 54,
                        paddingBottom: 12
                    }
                }
            }

            function v({
                hiddenUsers: e,
                hiddenUsersCount: t,
                hasMore: a,
                rootStore: n,
                environment: r
            }) {
                return (0, p.jsx)(u, {
                    trigger: (0, p.jsx)(_, {
                        hiddenUsersCount: t,
                        environment: r,
                        rootStore: n
                    }),
                    viewers: e,
                    totalCount: t,
                    rootStore: n
                })
            }
            let y = {
                paddingInline: 8,
                marginInlineStart: 4,
                marginInlineEnd: -10
            };

            function _({
                hiddenUsersCount: e,
                environment: t,
                rootStore: r
            }) {
                let i = (0, n.useCallback)(() => {
                    (0, a(418001).j)({
                        environment: t,
                        blockStore: r,
                        tabToOpen: a(449473).tF.Updates,
                        from: "more_menu"
                    }), a(449473).B8.setState({ ...a(449473).B8.state,
                        updatesSubTab: a(449473).VE.Analytics
                    })
                }, [t, r]);
                return (0, p.jsx)(a(988022).p, {
                    style: y,
                    size: "sm",
                    shape: "pill",
                    colorPalette: "gray",
                    onClick: i,
                    children: (0, p.jsx)(a(109939).sA, {
                        defaultMessage: "{hiddenUsersCount, plural, one {+{hiddenUsersCount}} other {+{hiddenUsersCount}}}",
                        id: "topbar.presenceIndicator.hiddenUsers.otherCount.message",
                        values: {
                            hiddenUsersCount: e
                        }
                    })
                })
            }

            function I(e, t) {
                return (0, a(960253).I)(() => {
                    let n = {
                            width: f,
                            height: f,
                            borderRadius: f
                        },
                        r = e(a(632079).Tj);
                    return {
                        button: {
                            transition: "all 0.2s ease",
                            transform: "scale(1)"
                        },
                        buttonHovered: {
                            transform: "scale(1.15)",
                            background: "none"
                        },
                        buttonPressed: {
                            transform: "scale(0.9)",
                            background: "none"
                        },
                        uiUserAvatarStyles: { ...n
                        },
                        avatarInnerOutline: { ...n,
                            outlineStyle: "solid",
                            outlineColor: a(632079).Tj.UIUserAvatarInnerOutline,
                            outlineWidth: .5,
                            outlineOffset: -.5
                        },
                        avatarBorder: t ? { ...n,
                            outlineStyle: "solid",
                            outlineColor: r,
                            outlineWidth: 1.5,
                            outlineOffset: -.5
                        } : {},
                        avatarOuterOutline: { ...n,
                            outlineStyle: "solid",
                            outlineColor: t ? a(632079).Tj.background.primary : a(632079).Tj.UIUserAvatarIdleOutline,
                            outlineWidth: .5,
                            outlineOffset: +!!t,
                            backgroundColor: a(632079).Tj.background.primary,
                            marginInlineEnd: -6,
                            position: "relative"
                        },
                        initialColor: {
                            color: t ? r : a(632079).Tj.icon.secondary
                        }
                    }
                }, [e, t])
            }

            function S(e) {
                let {
                    userData: t,
                    rootStore: r,
                    isShowingInFeed: i = !1
                } = e, l = (0, a(533992).v3)(), {
                    userId: s
                } = t, c = (0, o().dp)(l, t), u = (0, a(514214).MF)(s), {
                    userStore: g,
                    showAvatar: m
                } = (0, a(682985).K8)(() => {
                    let e = h(s, r);
                    return {
                        userStore: e,
                        showAvatar: (e.isDefined() || u) && !e.getIsSuspended()
                    }
                }, [s, r, u]), b = (0, a(682985).K8)(() => r.getSpaceStore(), [r]), v = I((0, n.useCallback)(e => (0, a(514214).MF)(s) ? a(632079).Tj.icon.secondary : s === l.currentUser.id ? a(632079).Tj.border.accentPrimary : (0, a(632079).Nq)(s, e), [l.currentUser.id, s]), c);
                if (!m) return null;
                let y = (0, p.jsx)("div", {
                        style: v.avatarOuterOutline,
                        children: (0, p.jsx)("div", {
                            style: v.avatarBorder,
                            children: (0, p.jsx)(a(321753).A, {
                                iconStyle: v.avatarInnerOutline,
                                userStore: u ? a(268033).px : g,
                                style: v.uiUserAvatarStyles,
                                isOffline: !c,
                                size: f,
                                avatarShouldShowShadow: !i,
                                initialOverrideStyle: v.initialColor
                            })
                        })
                    }),
                    _ = c && t.blockId ? (0, p.jsx)(a(64960).Ay, {
                        onClick: () => (0, a(250717).B)([t.blockId ? ? ""], !0, l),
                        style: v.button,
                        hoveredStyle: v.buttonHovered,
                        pressedStyle: v.buttonPressed,
                        children: y
                    }) : y;
                if (i || !l.currentUser.id) return _;
                let S = function({
                    userData: e,
                    isPresent: t,
                    currentUserId: n,
                    userId: r,
                    isShowingInFeed: i
                }) {
                    if (n !== r) {
                        if (t) return e.blockId && !i ? (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Viewing now. Click to see where they are.",
                            id: "topbar.presenceIndicator.viewingNowWithLocation.tooltip"
                        }) : (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Viewing now",
                            id: "topbar.presenceIndicator.viewingNow.tooltip"
                        });
                        if (e.activityTimestampNearestMinuteMs) return (0, p.jsx)(a(109939).sA, {
                            defaultMessage: "Last viewed {timeFromNow}",
                            id: "topbar.presenceIndicator.lastViewedTime.tooltip",
                            values: {
                                timeFromNow: (0, a(850640).v9)(Math.min(e.activityTimestampNearestMinuteMs, Date.now()), a(849917).locale)
                            }
                        })
                    }
                }({
                    userData: t,
                    isPresent: c,
                    currentUserId: l.currentUser.id,
                    userId: s,
                    isShowingInFeed: i
                });
                return (0, p.jsx)(d, {
                    trigger: _,
                    userStore: g,
                    header: S,
                    spaceStore: b
                })
            }

            function w(e) {
                let {
                    rootStore: t,
                    pageVisitStore: r,
                    presenceStore: l,
                    maxUsers: s,
                    isShowingInFeed: d
                } = e, c = (0, a(533992).v3)(), u = c.currentUser.id, f = (0, a(682985).K8)(() => {
                    let e = c.currentUser.id;
                    if (!e) return;
                    let t = d || (0, o().xm)(l) ? (0, o().PZ)({
                            pageVisitStore: r,
                            presenceStore: l
                        }) : [],
                        a = (null == r ? void 0 : r.state.totalCount) ? ? t.length,
                        n = [],
                        i = [];
                    for (let r of t)
                        if (r.userId === e) {
                            a--;
                            continue
                        } else(0, o().dp)(c, r) ? n.push(r) : i.push(r);
                    let u = [...m(n).reverse(), ...m(i).reverse()],
                        p = (s ? ? 5) - 1;
                    return {
                        visibleUsers: u.slice(0, p),
                        hiddenUsers: u.slice(p),
                        totalCount: a,
                        hasMore: !!(null == r ? void 0 : r.state.hasMore)
                    }
                }, [r, l, c, d, s], {
                    equalityFn: a(381453).n4
                }), {
                    visibleUsers: g,
                    hiddenUsers: y,
                    hiddenUsersCount: _,
                    hasMoreHiddenUsers: I,
                    isEveryUserStoreReady: w
                } = (0, a(682985).K8)(() => {
                    if (!u) return {};
                    let {
                        visibleUsers: e = [],
                        hiddenUsers: n = []
                    } = f ? ? {}, r = [u, ...e.map(e => e.userId), ...n.map(e => e.userId)].map(e => h(e, t));
                    return {
                        visibleUsers: e,
                        hiddenUsers: n,
                        hiddenUsersCount: Number(null == f ? void 0 : f.totalCount) - e.length,
                        hasMoreHiddenUsers: !!(null == f ? void 0 : f.hasMore),
                        isEveryUserStoreReady: r.every(e => e.isReady() || (0, a(514214).MF)(e.id))
                    }
                }, [u, f, t]), x = (0, n.useRef)(null), k = (0, a(682985).K8)(() => a(218744).default.getEligibleGroup({
                    experimentId: "adoption_aimn_live_collab_discovery_nudge_video",
                    disableExposureLogging: !0
                }), []), C = (0, a(682985).O$)(a(584257).b), A = (0, a(314331).n)(t), M = !(0, a(682985).O$)(a(205885).e);
                if (!u || !f || !w || M || u !== t.userId) return null;
                if (0 === g.length && 0 === y.length) return A ? (0, p.jsx)("div", {
                    style: b({
                        environment: c,
                        isShowingTabBar: C,
                        isShowingInFeed: d
                    }),
                    children: (0, p.jsx)(a(346899).h, {
                        enableClickToScroll: !0,
                        rootStore: t
                    })
                }) : null; {
                    let e = [...g];
                    return e.reverse(), (0, p.jsxs)("div", {
                        ref: x,
                        style: b({
                            environment: c,
                            isShowingTabBar: C,
                            isShowingInFeed: d
                        }),
                        children: [_ > 0 ? (0, p.jsx)(v, {
                            rootStore: t,
                            hiddenUsers: y,
                            hiddenUsersCount: _,
                            hasMore: I,
                            environment: c
                        }) : void 0, e.map(e => (0, p.jsx)(S, {
                            userData: e,
                            rootStore: t
                        }, e.userId)), d ? void 0 : (0, p.jsxs)(p.Fragment, {
                            children: [(0, p.jsx)(S, {
                                rootStore: t,
                                userData: {
                                    userId: u,
                                    present: !0
                                }
                            }), (0, p.jsx)(a(346899).h, {
                                enableClickToScroll: !0,
                                rootStore: t
                            }), void 0 !== k ? (0, p.jsx)(i, {
                                origin: x
                            }) : void 0]
                        })]
                    })
                }
            }
        },
        620842: (e, t, a) => {
            e.exports = a.p + "14d5b1e86af73b85.png"
        },
        623644: (e, t, a) => {
            a.d(t, {
                NX: () => r,
                gp: () => o,
                h9: () => i,
                i6: () => s,
                rj: () => l,
                tw: () => n
            }), a(581454);
            let n = ["2021-05-11", "2021-05-13", "2021-08-16", "2022-02-22", "2022-06-28", "2025-09-03", "2026-03-11"],
                r = ["2022-06-28", "2025-09-03", "2026-03-11"],
                i = "2026-03-11",
                o = "2022-06-28",
                l = "2026-03-11";
            a(489561).CA.literals(...n);
            let s = "2025-09-03"
        },
        625031: (e, t, a) => {
            e.exports = a.p + "db48f4d686b63eb9.png"
        },
        629108: (e, t, a) => {
            a.d(t, {
                E: () => n
            });
            let n = a(546605).Store.createValue({
                open: !1
            }, {
                name: "TrialEndModalStore"
            })
        },
        634663: (e, t, a) => {
            a.r(t), a.d(t, {
                circleIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0M10 3.625a6.375 6.375 0 1 0 0 12.75 6.375 6.375 0 0 0 0-12.75"
                    })
                },
                r = (0, a(104509).wt)("circle", n, "default")
        },
        641085: (e, t, a) => {
            e.exports = a.p + "85fb8ca2230ff394.png"
        },
        647164: (e, t, a) => {
            a.d(t, {
                o: () => n
            });

            function n({
                environment: e,
                featureKey: t
            }) {
                var r;
                let i = (0, a(904434).R$)(e);
                if (!i) return;
                let o = null == (r = i.getSettings()) ? void 0 : r.exposed_to_adoption_feature;
                (0, a(377796).createAndCommit)({
                    environment: e,
                    userAction: "userSettingsActions.setAdoptionFeatureExposure",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: i,
                            transaction: e,
                            data: {
                                exposed_to_adoption_feature: { ...o,
                                    [t]: [...(null == o ? void 0 : o[t]) ? ? [], Date.now()]
                                }
                            }
                        })
                    }
                })
            }
        },
        665008: (e, t, a) => {
            e.exports = a.p + "937ee299d2468780.png"
        },
        667115: (e, t, a) => {
            e.exports = a.p + "a95f553bf5241102.png"
        },
        674880: (e, t, a) => {
            a.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => s,
                WM: () => i,
                Xd: () => g,
                Xw: () => m,
                defaultInferenceContextStore: () => n,
                fd: () => c,
                i6: () => l,
                uP: () => d
            }), a(944114), a(898992), a(354520), a(803949), a(581454), a(737550);
            let n = new(a(345426)).ComputedStore(() => {
                let e = a(728372).AppStoreSidebarSpaceStore.state,
                    t = a(728372).AppStoreCurrentUserStore.state,
                    n = a(728372).AppStoreSidebarSpaceViewStore.state,
                    r = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && n) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: n,
                    blockStore: r,
                    peekStore: a(475097).default.state.open ? a(475097).default.state.targetStore : void 0,
                    workflowStore: (0, a(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function r(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let n = (0, a(444610).U)(e),
                        r = null == n ? void 0 : n.collectionViewStore();
                    r && (t[e.id] = r.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let n = (0, a(444610).U)(e),
                            r = null == n ? void 0 : n.collectionViewStore();
                        r && (t[e.id] = r.id)
                    }
                });
                return t
            }

            function i(e) {
                let {
                    environment: t,
                    surface: n,
                    inferenceContext: i,
                    config: o,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: d
                } = e, {
                    userStore: c,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: g,
                    workflowStore: m
                } = i, h = (0, a(295447).Z1)({
                    environment: t,
                    table: a(832375).mSw,
                    spaceId: u.id
                }), b = "meet" === t.RouterStore.state.route.name, v = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: r(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== n ? {
                        blockId: f.id,
                        visibleCollectionViewIds: r(f)
                    } : void 0,
                    ...g ? {
                        peekBlockId: g.id,
                        visibleCollectionViewIds: r(g)
                    } : void 0,
                    ...m ? {
                        workflowId: m.id
                    } : void 0,
                    ...b ? function(e) {
                        if (!a(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: n,
                            userId: r
                        } = e, i = t.idCreator.getSpaceIdCreatorSync(n), o = (0, a(413388).sX)(r, i);
                        return {
                            collectionViewBlockId: o,
                            visibleCollectionViewIds: {
                                [o]: (0, a(413388).X$)(r, i)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: c.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== o.type || !o.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var _;
                        t.name && (y.agentName = t.name), null != (_ = t.customization_items) && _[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let I = function(e) {
                    var t, n, r;
                    let {
                        config: i,
                        workflowStore: o
                    } = e;
                    if ("workflow" !== i.type || !i.isCustomAgent || !o) return;
                    let l = !0 === i.useCustomAgentDraft || !0 === i.use_draft_actor_pointer ? (null == (t = o.getDraftData()) ? void 0 : t.instructions) ? ? (null == (n = o.getData()) ? void 0 : n.instructions) : null == (r = o.getPublishedArtifactStore()) || null == (r = r.getData()) ? void 0 : r.instructions;
                    if ((0, a(886883).ap)(l)) return l.id
                }({
                    config: o,
                    workflowStore: m
                });
                if (I && (y.context_page_id = I), a(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: h,
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
                        surface: n,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === n && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...y
                    }
                };
                let S = a(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: n = 10
                    } = e;
                    return a(420156).A.getWithoutSubscribing(t).map(({
                        pageId: e,
                        visitedAt: t
                    }) => ({
                        pageId: e,
                        visitedAt: t
                    })).slice(0, n)
                }({
                    spaceId: u.id
                }) : void 0;
                return {
                    id: h,
                    type: "context",
                    value: {
                        timezone: (0, a(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: u.getName(),
                        spaceId: u.id,
                        spaceViewId: p.id,
                        currentDatetime: a(906745).DateTime.now().toISO(),
                        surface: n,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === n && s && d ? {
                            checklistId: s,
                            checklistStepId: d
                        } : {},
                        ...y,
                        recentPageVisits: S
                    }
                }
            }

            function o(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    config: r
                } = e;
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: n.id
                    }),
                    type: "config",
                    value: r
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: a,
                    spaceStore: n,
                    config: r
                } = e;
                if (!t.some(e => "config" === e.type)) return o({
                    environment: a,
                    spaceStore: n,
                    config: r
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    value: r,
                    userStore: i
                } = e, o = u(r);
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: n.id
                    }),
                    type: "user",
                    value: o,
                    userId: i.id,
                    createdAt: a(906745).DateTime.now().toISO()
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    actualMessage: r,
                    displayMessage: i,
                    userStore: o,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, d = u(r) ? ? [], c = u(i);
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: n.id
                    }),
                    type: "user-injected",
                    actualMessage: d,
                    displayMessage: c,
                    userId: o.id,
                    createdAt: a(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    agentMessageKey: r,
                    instructions: i
                } = e;
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: n.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: r,
                    instructions: i
                }
            }

            function u(e) {
                if (e) return (0, a(247438).bBR)((0, a(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: n,
                promptType: r,
                value: i,
                locale: o,
                args: l
            }) {
                return {
                    id: (0, a(295447).Z1)({
                        environment: e,
                        table: a(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: r,
                    userId: n.id,
                    createdAt: Date.now(),
                    value: i,
                    locale: o,
                    isEdited: !1,
                    args: l
                }
            }

            function f(e) {
                let t, n, {
                    environment: r,
                    spaceId: i,
                    pointers: o,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: d,
                    textSelectionContext: c
                } = e;
                if (d) t = d;
                else if (l && l.length > 0) {
                    let e = (0, a(685745).B)(l);
                    e && (t = {
                        type: "blocks",
                        value: l.map(e => e.pointer),
                        text: (0, a(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) n = c;
                else if (s && s.start.store.pointer.table === a(832375).evP && s.end.store.pointer.table === a(832375).evP) {
                    let e = (0, a(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        r = e.length > 1200;
                    n = {
                        type: "text",
                        value: {
                            start: {
                                pointer: s.start.store.pointer,
                                index: s.start.index
                            },
                            end: {
                                pointer: s.end.store.pointer,
                                index: s.end.index
                            }
                        },
                        text: t,
                        ...r ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== o.length || t || n) return {
                    id: (0, a(295447).Z1)({
                        environment: r,
                        table: a(832375).mSw,
                        spaceId: i
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: o,
                        blockSelection: t,
                        textSelection: n
                    }
                }
            }

            function g(e) {
                let {
                    environment: t,
                    inferenceContext: n,
                    config: r,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                } = e, p = [o({
                    environment: t,
                    spaceStore: n.spaceStore,
                    config: r
                }), i({
                    environment: t,
                    inferenceContext: n,
                    surface: s,
                    config: r,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                })];
                return l && p.push(...l), p.filter(a(722371).O9)
            }

            function m(e) {
                let {
                    environment: t,
                    spaceId: n,
                    message: r,
                    notificationType: i = "info",
                    metadata: o
                } = e;
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: n
                    }),
                    type: "system-notification",
                    message: r,
                    notificationType: i,
                    metadata: o
                }
            }
        },
        678064: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(581454), a(296540);
            var n = a(474848);
            let r = function({
                    currentLocale: e,
                    confirm: t,
                    onChange: r,
                    origin: i,
                    showGlobeIcon: l,
                    showVisibleLabelPrefix: s = !1
                }) {
                    (0, a(533992).v3)();
                    let d = (0, a(109939).tz)(),
                        c = (0, a(682985).uB)(void 0, a(510969).A),
                        u = (0, a(83208).X)("polyglot");
                    if (a(986939).A.isMobile) return null;
                    let p = (0, a(601587).Vn)(d)[e].languageNameInThatLanguage,
                        f = l ? a(988022).p : a(548436).A;
                    return (0, n.jsx)(a(656252).A, {
                        onClick: () => {
                            (0, a(104310).u)({
                                event: {
                                    eventName: "change_locale_clicked",
                                    eventProperties: {
                                        origin: i
                                    }
                                }
                            })
                        },
                        ariaPopupType: "listbox",
                        popupType: a(656252).z.Popup,
                        buttonPopupStore: c,
                        ariaLabel: d.formatMessage({
                            id: "languagePicker.popup.ariaLabel",
                            defaultMessage: "Select language"
                        }),
                        placementToOrigin: "bottom",
                        alignmentToOrigin: "start",
                        content: i => {
                            let l = u ? [...a(619157).fy, ...a(619157).Tf] : [...a(619157).fy],
                                s = [{
                                    key: "languages",
                                    render: e => (0, n.jsx)(a(844565).A, { ...e,
                                        topBorder: 0 !== e.index
                                    }),
                                    items: (0, a(601587).O8)(l, d).map(l => ({
                                        key: l,
                                        render: e => (function(e, t, r, i) {
                                            let {
                                                languageNameInThatLanguage: l,
                                                languageNameInCurrentLanguage: s
                                            } = (0, a(601587).Vn)(i)[e];
                                            return (0, n.jsx)(o, {
                                                label: l,
                                                caption: s,
                                                focused: t,
                                                props: r,
                                                locale: e
                                            })
                                        })(l, e.focused, e, d),
                                        action: () => {
                                            var o, s, c, u, p;
                                            o = l, s = e, c = d, u = t, p = r, s !== o && function(e, t, r, i) {
                                                let {
                                                    languageNameInThatLanguage: o
                                                } = (0, a(601587).Vn)(t)[e];
                                                r ? a(647095).ui({
                                                    showCancel: !0,
                                                    keepFocus: !1,
                                                    message: (0, n.jsx)(a(109939).sA, {
                                                        id: "languagePicker.changeLanguage.confirmationMessage",
                                                        defaultMessage: "Are you sure you want to update the language to {language}?",
                                                        values: {
                                                            language: o
                                                        }
                                                    }),
                                                    items: [{
                                                        label: (0, n.jsx)(a(109939).sA, {
                                                            id: "languagePicker.changeLanguage.updateButton.label",
                                                            defaultMessage: "Update"
                                                        }),
                                                        color: "red",
                                                        onAccept: () => {
                                                            i(e)
                                                        }
                                                    }]
                                                }) : i(e)
                                            }(o, c, u, p), i.close()
                                        }
                                    }))
                                }],
                                c = {
                                    menuType: a(649476).gu.Popup,
                                    width: 240
                                };
                            return (0, n.jsx)(a(747369).A, {
                                className: a(828432).jtA,
                                ...c,
                                children: (0, n.jsx)(a(558045).A, {
                                    type: a(558045).O.Vertical,
                                    role: "listbox",
                                    initialFocus: void 0,
                                    sections: s
                                })
                            })
                        },
                        children: e => (0, n.jsx)(f, {
                            "aria-label": d.formatMessage({
                                id: "languagePicker.ariaLabel",
                                defaultMessage: "Language: {language}"
                            }, {
                                language: p
                            }),
                            colorPalette: l ? "gray" : void 0,
                            iconLeading: l ? a(515388).globeIcon : void 0,
                            iconTrailing: {
                                icon: a(595453).arrowChevronSingleDownSmallIcon,
                                size: "xs",
                                colorVariant: "secondary"
                            },
                            ...e,
                            children: s ? (0, n.jsx)(a(109939).sA, {
                                id: "languagePicker.visibleLabel",
                                defaultMessage: "Language: {language}",
                                values: {
                                    language: p
                                }
                            }) : p
                        })
                    })
                },
                i = {
                    style1: {
                        marginInlineEnd: 0
                    },
                    style2: {
                        color: a(632079).Tj.text.secondary
                    }
                };

            function o(e) {
                return (0, n.jsx)(a(95582).A, { ...e.props,
                    title: (0, n.jsx)(a(4458).fI, {
                        alignItems: "center",
                        children: (0, n.jsx)("div", {
                            style: { ...e.style,
                                ...i.style1
                            },
                            children: e.label
                        })
                    }),
                    caption: e.caption && (0, n.jsx)("span", {
                        style: i.style2,
                        children: e.caption
                    }),
                    shouldWrapCaption: !0
                })
            }
        },
        679416: (e, t, a) => {
            a.d(t, {
                P: () => u
            }), a(296540);
            var n = a(474848);
            let r = `
	@keyframes accessory-speech-bubble-in {
		0% { opacity: 0; transform: scale(0.85); }
		100% { opacity: 1; transform: scale(1); }
	}
	@keyframes accessory-speech-bubble-out {
		0% { opacity: 1; transform: scale(1); }
		100% { opacity: 0; transform: scale(0.85); }
	}
`,
                i = (0, a(51831).n)(!0),
                o = `1.5px solid ${a(632079).Tj.border.secondary}`,
                l = {
                    container: {
                        position: "absolute",
                        zIndex: 2,
                        pointerEvents: "none",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        width: "max-content"
                    },
                    bubble: { ...i,
                        position: "relative",
                        whiteSpace: "normal",
                        maxWidth: 220,
                        color: a(632079).Tj.text.secondary,
                        fontWeight: a(699422).Wy.medium,
                        border: o,
                        boxShadow: "none",
                        borderRadius: 12,
                        padding: "6px 12px",
                        fontSize: 12
                    },
                    tailCircle: {
                        position: "absolute",
                        width: 8,
                        height: 8,
                        borderRadius: 999,
                        background: a(632079).Tj.background.primary,
                        border: o,
                        boxShadow: "none"
                    }
                },
                s = {
                    topLeft: {
                        container: {
                            bottom: "86%",
                            insetInlineEnd: "88%",
                            transformOrigin: "right bottom",
                            alignItems: "flex-end"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineEnd: -10
                        }
                    },
                    topRight: {
                        container: {
                            bottom: "86%",
                            insetInlineStart: "88%",
                            transformOrigin: "left bottom",
                            alignItems: "flex-start"
                        },
                        tailCircle: {
                            top: "calc(100% + 8px)",
                            insetInlineStart: -6
                        }
                    }
                },
                d = {
                    animationName: "accessory-speech-bubble-in",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-out",
                    animationFillMode: "forwards"
                },
                c = {
                    animationName: "accessory-speech-bubble-out",
                    animationDuration: "150ms",
                    animationTimingFunction: "ease-in",
                    animationFillMode: "forwards"
                };

            function u({
                placement: e,
                children: t,
                animated: a = !1,
                isHiding: i = !1,
                verticalOffsetPx: o = 0,
                horizontalOffsetPx: p = 0,
                tailCircleTop: f,
                tailCircleInsetInlineStartPx: g
            }) {
                let m = function(e, t, a) {
                    let {
                        container: {
                            bottom: n,
                            insetInlineStart: r,
                            insetInlineEnd: i,
                            ...o
                        },
                        tailCircle: l
                    } = s[e], d = 0 !== t && void 0 !== n ? `calc(${String(n)} - ${t}px)` : n;
                    if ("topRight" === e) {
                        let e = 0 !== a && void 0 !== r ? `calc(${String(r)} + ${a}px)` : r;
                        return {
                            container: { ...o,
                                insetInlineStart: e,
                                bottom: d
                            },
                            tailCircle: l
                        }
                    }
                    let c = 0 !== a && void 0 !== i ? `calc(${String(i)} - ${a}px)` : i;
                    return {
                        container: { ...o,
                            insetInlineEnd: c,
                            bottom: d
                        },
                        tailCircle: l
                    }
                }(e, o, p);
                return (0, n.jsxs)(n.Fragment, {
                    children: [a ? (0, n.jsx)("style", {
                        children: r
                    }) : void 0, (0, n.jsxs)("div", {
                        style: { ...l.container,
                            ...m.container,
                            ...a ? i ? c : d : void 0
                        },
                        children: [(0, n.jsx)("div", {
                            style: l.bubble,
                            children: t
                        }), (0, n.jsx)("div", {
                            style: { ...l.tailCircle,
                                ...m.tailCircle,
                                ...void 0 !== f && {
                                    top: f
                                },
                                ...void 0 !== g && {
                                    insetInlineStart: g
                                }
                            }
                        })]
                    })]
                })
            }
        },
        682759: (e, t, a) => {
            e.exports = a.p + "d43593c297dd4340.png"
        },
        685745: (e, t, a) => {
            a.d(t, {
                B: () => o
            });
            var n = () => a(129499),
                r = () => a(955630);

            function i(e) {
                for (let t of e) {
                    let e = function(e) {
                        let t = e.getTitleStore();
                        if (t && a(521595).n.findNodeFromStore(t)) return t
                    }(t);
                    if (e && t.getType() !== r().xd.code) return {
                        blockStore: t,
                        titleStore: e
                    }
                }
            }

            function o(e) {
                let t, r = i(e);
                if (!r) return;
                let o = i([...e].reverse());
                if (!o) return;
                let l = (0, a(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: r.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!l) return;
                let s = (0, a(787926).mP)(o.blockStore, l);
                if (s) {
                    for (let e of (0, a(827049).Y_)(s)) {
                        let a = e.value.store.getTitleStore();
                        if (a) {
                            let e = (0, n().s)(a);
                            e && (t = {
                                store: a,
                                index: e.endIndex
                            })
                        }
                    }
                    if (t) return {
                        start: {
                            store: r.titleStore,
                            index: 0
                        },
                        end: t
                    }
                }
            }
        },
        688220: (e, t, a) => {
            e.exports = a.p + "0fb564b08de74e8f.png"
        },
        695142: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowDiagonalUpRightFillIcon: () => r,
                iconDefinition: () => n
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.16 4.17 11.67 11.67",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.825 5.05a.875.875 0 0 0-.875-.875H7.313a.875.875 0 1 0 0 1.75h5.524L4.393 14.37c-.32.32-.303.857.039 1.198.341.342.878.36 1.198.039l8.445-8.444v5.524a.875.875 0 1 0 1.75 0z"
                    })
                },
                r = (0, a(104509).wt)("arrowDiagonalUpRightFill", n, "fill")
        },
        699978: (e, t, a) => {
            a.d(t, {
                C4: () => r,
                Nf: () => o,
                qM: () => i
            }), a(16280), a(944114), a(898992), a(430670), a(581454);
            let n = (0, a(109939).YK)({
                authError: {
                    defaultMessage: "Auth failed. Please try again or contact Notion support.",
                    id: "database.viewSettings.propertyTypeSection.connected.authFail"
                },
                mobileAdminError: {
                    defaultMessage: "Ask your workspace admin to configure the GitHub (Workspace) app in settings to use this feature.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileAdminError"
                },
                mobileError: {
                    defaultMessage: "Please authorize this integration on the desktop app or a browser.",
                    id: "database.viewSettings.propertyTypeSection.connected.mobileError"
                }
            });
            async function r({
                environment: e,
                collectionStore: t,
                integration: i,
                canOnlyAdminAuth: o
            }) {
                let l = null == t ? void 0 : t.getSpaceStore();
                if (!l) return;
                let s = (0, a(88937).jw)(i.id).length;
                if (a(986939).A.isMobile && o && !s) {
                    let e = a(962299).A.formatMessage(n.mobileAdminError);
                    throw a(647095).f1(e), Error(e)
                }
                if (a(986939).A.isMobile && !o && !s) {
                    let e = a(962299).A.formatMessage(n.mobileError);
                    throw a(647095).f1(e), Error(e)
                }
                if (!s && o && l.canAdmin() || !s && !o) try {
                    await a(211791).Jq({
                        environment: e,
                        integration: i,
                        spaceId: l.id,
                        from: "collection_settings_property_type"
                    })
                } catch (t) {
                    let e = a(962299).A.formatMessage(n.authError);
                    throw a(647095).f1(e), Error(e)
                }
                if (!(0, a(88937).jw)(i.id).length) {
                    let e = a(962299).A.formatMessage(n.authError);
                    throw a(647095).f1(e), Error(e)
                }
            }

            function i(e) {
                let {
                    environment: t,
                    pattern: n,
                    integration: r,
                    parentCollectionStore: i,
                    transaction: o
                } = e;
                if (!n.connected_relation_properties) throw Error("Cannot create a connected relation collection without properties");
                let l = new(a(356912)).m(t, (0, a(295447).zP)({
                        environment: t,
                        table: a(832375).VlP,
                        spaceId: i.pointer.spaceId
                    })),
                    s = {};
                n.connected_relation_sub_schemas && (0, a(722371).WP)(n.connected_relation_sub_schemas).map(([e, n]) => {
                    let r = new(a(356912)).m(t, (0, a(295447).zP)({
                            environment: t,
                            table: a(832375).VlP,
                            spaceId: i.pointer.spaceId
                        })),
                        d = {
                            id: r.id,
                            version: 0,
                            space_id: (0, a(226221).e)(i.pointer.spaceId),
                            parent_table: a(832375).VlP,
                            parent_id: l.id,
                            alive: !0,
                            format: {
                                bot_id: void 0,
                                external_object_id: void 0,
                                uri: e,
                                integration_id: void 0,
                                is_placeholder: void 0,
                                original_url: void 0,
                                domain: void 0,
                                external_schema: n,
                                sync_state: void 0,
                                pattern_name: void 0
                            },
                            schema: {}
                        };
                    s[e] = r.id, (0, a(173157).z)({
                        store: r,
                        data: d,
                        transaction: o
                    })
                });
                let d = {
                    id: l.id,
                    version: 0,
                    space_id: (0, a(226221).e)(i.pointer.spaceId),
                    parent_table: a(832375).VlP,
                    parent_id: i.id,
                    alive: !0,
                    format: {
                        attributes: [{
                            id: "title",
                            name: "title",
                            type: "inline",
                            format: {
                                type: "title",
                                section: "title"
                            },
                            values: [(0, a(607689).Fe)({
                                pattern: n,
                                integration: r
                            })]
                        }],
                        bot_id: void 0,
                        external_object_id: void 0,
                        uri: `notion://user-defined-collection/${r.id}/${n.name}`,
                        integration_id: r.id,
                        is_placeholder: void 0,
                        original_url: void 0,
                        domain: void 0,
                        external_schema: n.connected_relation_properties,
                        sync_state: void 0,
                        pattern_name: n.name,
                        related_external_object_uris_to_instance_ids: s
                    },
                    schema: {}
                };
                return (0, a(173157).z)({
                    store: l,
                    data: d,
                    transaction: o
                }), l
            }
            async function o(e) {
                let {
                    bot: t,
                    connected_relation_properties: n
                } = e;
                if (t.integration_id === a(49361).Iy || t.integration_id === a(49361).mn) return await l(e);
                let r = [];
                for (let e in n) {
                    let t = n[e];
                    null != t && t.name && null != t && t.type && r.push({
                        id: e,
                        name: t.name,
                        isSelected: !1,
                        type: t.type,
                        metadata: {
                            name: t.name,
                            label: t.name,
                            type: t.type,
                            custom: !1
                        },
                        isAlreadySynced: !1
                    })
                }
                return {
                    value: r
                }
            }
            async function l(e) {
                var t, n, r, i, o;
                let {
                    environment: l,
                    objectName: s,
                    spaceId: d,
                    bot: c
                } = e, u = await l.api.callApi({
                    eventName: "describeSalesforceObject",
                    environment: l,
                    data: {
                        spaceId: d,
                        objectName: s,
                        botId: c.id
                    }
                });
                if ((null == u ? void 0 : u.type) !== "success") return {
                    error: a(212527).qh.FAILED_TO_FETCH_SALESFORCE_PROPERTIES
                };
                if ((null == (t = u.data) ? void 0 : t.responseStatus) === a(212527).qh.REAUTHENTICATION_REQUIRED || (null == (n = u.data) ? void 0 : n.responseStatus) === a(212527).qh.NO_USER_API_ACCESS) return {
                    error: `${null==(i=u.data)?void 0:i.responseStatus}:${null==(o=u.data)?void 0:o.userType}`
                };
                let p = null == u || null == (r = u.data) ? void 0 : r.properties;
                return p ? {
                    value: p.flatMap(e => {
                        let t = e.custom ? e.label : e.relationshipName || e.label;
                        return "User" === e.referenceTo || "Group" === e.referenceTo ? [{
                            id: e.name,
                            name: t,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }, {
                            id: `mapped_${e.name}`,
                            name: `${t} (Notion User)`,
                            isSelected: !1,
                            type: "person",
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }] : [{
                            id: "Name" === e.name ? "title" : e.name,
                            name: "relation" === e.type ? t : e.label,
                            isSelected: !1,
                            type: e.type,
                            metadata: e,
                            isAlreadySynced: e.isAlreadySynced,
                            isAdminNotAccessible: e.isAdminNotAccessible
                        }]
                    })
                } : {
                    error: a(212527).qh.NO_PROPERTIES_FOUND
                }
            }
        },
        701743: (e, t, a) => {
            e.exports = a.p + "868a886d40b596cd.png"
        },
        702404: (e, t, a) => {
            e.exports = a.p + "c8cb309f04348e5a.png"
        },
        705820: (e, t, a) => {
            a.d(t, {
                P: () => n
            });
            let n = new(a(273917)).U((e, {
                spaceId: t
            }) => `${e.currentUser.id}:${t}`, async (e, {
                spaceId: t
            }) => {
                if (!a(218744).default.checkGate({
                        gateName: "eligible_interval_select_campaigns_fetch"
                    })) return;
                let n = new(a(695906)).SpaceStore(e, {
                    id: t,
                    table: "space"
                });
                if (await n.load(), !n.canAdmin()) return;
                let r = await e.api.callCellCompatibleApi({
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
                if ("success" === r.type) return r.data.campaigns
            });
            a(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", n)
        },
        721174: (e, t, a) => {
            a.d(t, {
                nH: () => m,
                v7: () => c,
                ew: () => p
            }), a(16280), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(823215), a(354520), a(672577), a(581454);
            var n = () => a(218744),
                r = () => a(970831),
                i = () => a(832375),
                o = () => a(381453);
            let l = ["templates", "teamspaceTemplates"],
                s = {
                    templates: "private",
                    teamspaceTemplates: "teamspace"
                };

            function d(e) {
                if (!e) return [];
                let t = [];
                for (let a of l)
                    for (let n of e[a] ? ? []) t.push({
                        name: n,
                        installLocation: s[a]
                    });
                return t
            }

            function c(e) {
                let {
                    userContext: t
                } = e;
                for (let e of n().default.getConfigKey("getting_started_unified_config", t.deviceType)) {
                    let {
                        eligibilityConditions: r,
                        locales: i
                    } = e;
                    if (!(r.every(e => (function(e, t) {
                            let a = function(e) {
                                for (let t of ["onboardingFlowName", "spaceJoinOrCreate", "planType", "deviceType", "calendarSignupStatus", "featureIntent", "domainType", "isNewUserOnboarding", "acceptedTimedTrialOffer", "spaceSubscriptionTier", "isSpaceSalesAssisted"])
                                    if (t === e) return t
                            }(e.key);
                            if (!a) return !1;
                            let n = t[a];
                            if (void 0 === n) return !1;
                            switch (e.operator) {
                                case "equals":
                                    return `${n}` == `${e.value}`;
                                case "notEquals":
                                    return `${n}` != `${e.value}`;
                                case "in":
                                    return Array.isArray(e.value) && e.value.map(e => `${e}`).includes(`${n}`);
                                case "exists":
                                    return void 0 !== n;
                                default:
                                    return !1
                            }
                        })(e, t)) && (!i || i.includes(t.locale)))) continue;
                    let {
                        experiments: s = []
                    } = e;
                    for (let e of s) {
                        var a;
                        let r = (a = e, n().default.getEligibleGroup({
                            experimentId: a.experimentName,
                            defaultGroup: "ineligible",
                            disableExposureLogging: !0
                        }));
                        if (!(function(e) {
                                let t;
                                for (let a of e.experimentGroups)
                                    for (let e of l)
                                        for (let r of a[e] ? ? []) {
                                            let e = n().default.getConfigKey("getting_started_templates", r);
                                            if (!e || !e.spaceId) continue;
                                            let a = new Set(Object.keys(e.localizedTemplates));
                                            t = t ? t.intersection(a) : a
                                        }
                                return t ? ? new Set
                            })(e).has(t.locale)) continue;
                        let i = r ? function(e) {
                            let {
                                experimentConfig: t,
                                variant: a
                            } = e;
                            return d(t.experimentGroups.find(e => e.groupName === a))
                        }({
                            experimentConfig: e,
                            variant: r
                        }) : [];
                        if (!i.length) {
                            "control" === r && n().default.manuallyLogExperimentExposure(e.experimentName);
                            continue
                        }
                        let s = u(i, t);
                        if (s) return n().default.manuallyLogExperimentExposure(e.experimentName), o().$z(s, "options.installLocation")
                    }
                    let c = d(e);
                    if (c.length > 0) {
                        let e = u(c, t);
                        if (e) return o().$z(e, "options.installLocation")
                    }
                }
            }

            function u(e, t) {
                let a = null == e ? void 0 : e.map(e => {
                    var a;
                    let r = n().default.getConfigKey("getting_started_templates", e.name);
                    if (!r || !r.spaceId) return;
                    let i = null == (a = r.localizedTemplates) ? void 0 : a[t.locale];
                    return i ? {
                        templateName: e.name,
                        spaceId: r.spaceId,
                        pageId: i,
                        options: {
                            isLandingPage: r.isLandingPage,
                            relativeDatesDefinition: i ? n().default.getConfigKey("getting_started_collection_subpage_relative_dates_definition", i) : void 0,
                            installLocation: e.installLocation
                        }
                    } : void 0
                }).filter(e => void 0 !== e);
                if (0 !== a.length && a.length === e.length) return a
            }

            function p(e) {
                let {
                    environment: t,
                    pageStore: n,
                    originalToDuplicate: o,
                    relativeDatesDefinition: l,
                    transaction: s
                } = e;
                if (!l) return;
                let d = [];
                for (let [e, c] of Object.entries(l)) {
                    let l = {
                            id: e,
                            table: i().evP,
                            spaceId: n.getSpaceId()
                        },
                        u = o.get(l);
                    if (!u) {
                        d.push(e);
                        continue
                    }! function(e) {
                        let {
                            environment: t,
                            targetPageStore: n,
                            dateTransformation: r,
                            transaction: i
                        } = e;
                        if (!n.isDefined()) return !1;
                        let o = n.getAssociatedCollectionStore();
                        if (!o || !(o instanceof a(356912).m)) return !1;
                        let l = o.getSchema();
                        if (!l) return !1;
                        let s = [];
                        for (let [e, t] of Object.entries(l)) t && "date" === t.type && s.push(e);
                        if (0 === s.length) return !1; {
                            let e, {
                                    startDateOffset: o,
                                    duration: l,
                                    roundUpToNearest: d,
                                    type: c,
                                    reminder: u
                                } = r,
                                p = (0, a(714350).P)(),
                                m = Date.now();
                            d && d > 0 && (m = Math.ceil(m / d) * d);
                            let h = m + o;
                            e = "date" === c && l ? a(25825).Mk(h, h + l, p) : "date" === c ? a(25825).p6(h, p) : l ? a(25825).NC(h, h + l, p) : a(25825).KQ(h, p), u && (e = (0, a(943003).$P)(e) || (0, a(943003).oM)(e) ? { ...e,
                                reminder: f
                            } : { ...e,
                                reminder: g
                            });
                            let b = (0, a(561872).m5)(e),
                                v = {};
                            for (let e of s) v[e] = b;
                            (0, a(249487).C)({
                                environment: t,
                                store: n,
                                properties: v,
                                transaction: i
                            })
                        }
                    }({
                        environment: t,
                        targetPageStore: r().B.createChildStore(n, u),
                        dateTransformation: c,
                        transaction: s
                    }) && d.push(e)
                }
                d.length && a(419750).Fg(Error("Getting started relative date application failed"), {
                    data: {
                        pageStoreId: n.id,
                        relativeDatesDefinition: l,
                        invalidPageIds: d
                    }
                })
            }
            let f = {
                    unit: "day",
                    value: 0,
                    time: a(943003).lM,
                    defaultTimeZone: (0, a(714350).P)()
                },
                g = {
                    unit: "minute",
                    value: 0
                };

            function m(e) {
                let {
                    spaceId: t,
                    rootId: n
                } = (0, a(322095).B)(a(606430).y[e], a(962299).A.getIntl());
                return {
                    templateName: e,
                    spaceId: t,
                    pageId: n
                }
            }
        },
        722784: (e, t, a) => {
            e.exports = a.p + "6ddab14ae1911792.png"
        },
        726342: (e, t, a) => {
            a.d(t, {
                u: () => n
            });

            function n(e) {
                return e instanceof a(681735).h || e instanceof a(695906).SpaceStore || e instanceof a(970831).B
            }
        },
        729849: (e, t, a) => {
            a.d(t, {
                Gi: () => o,
                yB: () => i
            }), a(898992), a(354520), a(803949);
            var n = () => a(546605);

            function r() {
                return a(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function i() {
                return (0, a(682985).K8)(() => r(), [])
            }
            class o extends n().Store {
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
                        var a;
                        let n = t.get(e);
                        n && t.set(e, { ...n,
                            metadata: { ...n.metadata,
                                guardrail: { ...null == (a = n.metadata) ? void 0 : a.guardrail,
                                    attachmentRisk: "confirmed_safe_by_user"
                                }
                            }
                        })
                    }), this.setState({ ...this.state,
                        originalFileUrlToSuccessfullyUploadedFiles: t
                    })
                }
                setValueForUploadingFile(e, t) {
                    let a = new Map(this.state.inProgressUploadFileIdsToProgress),
                        n = a.get(e);
                    a.set(e, { ...t,
                        timeUploaded: (null == n ? void 0 : n.timeUploaded) ? ? Date.now()
                    }), this.setState({ ...this.state,
                        inProgressUploadFileIdsToProgress: a
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
                        fileName: a,
                        percentage: n,
                        contentType: r
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: a,
                        progress: n,
                        contentType: r
                    })
                }
                onFileUploadFailed(e) {
                    let {
                        error: t
                    } = e, {
                        files: a
                    } = t;
                    a.forEach(({
                        fileId: e,
                        fileName: a
                    }) => {
                        this.setValueForUploadingFile(e, {
                            type: "error",
                            error: t,
                            fileName: a
                        })
                    })
                }
                onFileUploadCompleted(e, t) {
                    let a = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, { ...t,
                        timeUploaded: a
                    })
                }
                onComputerFileUploadCompleted(e, t) {
                    let n = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, a(818963).pg)(t.assistantSessionId),
                        timeUploaded: n
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
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > r()
                }
            }
        },
        730137: (e, t, a) => {
            a.d(t, {
                U: () => n
            }), a(16280);
            async function n(e) {
                let t, {
                        environment: n,
                        spaceStore: r,
                        spaceViewStore: i,
                        userSettingsStore: o,
                        from: l
                    } = e,
                    {
                        templateName: s,
                        spaceId: d,
                        pageId: c,
                        options: u
                    } = e.template;
                if (!a(205885).A.state.online) return;
                let p = await n.api.callCellCompatibleApi({
                    eventName: "loadBlockSubtree",
                    environment: n,
                    data: {
                        block: {
                            id: c,
                            spaceId: d
                        },
                        shallow: !1
                    },
                    cellNavigation: {
                        spaceId: d
                    }
                });
                if ("failed" === p.type) return void(0, a(434107).x)(n, {
                    getting_started_page_type: s,
                    errorType: "loadBlockSubtreeFailed",
                    spaceId: r.id,
                    errorMessage: p.error.message,
                    copyPageId: c
                });
                t = a(412951).RecordMapWithRole.create(p.data.subtreeRecordMap);
                let {
                    loadLocalSubtree: f,
                    localDuplicate: g
                } = await (0, a(411648).D6)(), {
                    messages: {
                        createAndDuplicatePageError: m
                    }
                } = await (0, a(411648).nd)(), h = "spaceActions.createGettingStartedPageInSpace", {
                    performResult: b,
                    serverCommitResult: v
                } = (0, a(377796).createAndCommit)({
                    userAction: h,
                    environment: n,
                    cellTarget: {
                        spaceWithId: r.id
                    },
                    canUndo: !0,
                    isTemplateInstantiationTransaction: !0,
                    perform: e => {
                        let l = a(964232).IT({
                            environment: n,
                            spaceStore: r,
                            spaceViewStore: i,
                            parent: "private",
                            prepend: !0,
                            transaction: e
                        });
                        (0, a(31069)._)({
                            currentUserId: n.currentUser.id,
                            defaultRecordCache: n.defaultRecordCache,
                            inMemoryRecordCache: l.inMemoryRecordCache,
                            recordMap: t,
                            debugSource: h,
                            isPendingTransactionForRecord: a(941701).transactionQueue.isPendingTransactionForRecord.bind(a(941701).transactionQueue)
                        });
                        let d = f({
                            environment: n,
                            blockId: c,
                            inMemoryRecordCache: l.inMemoryRecordCache,
                            options: {
                                allowCopyCollections: !0,
                                requireFullSubtree: !1,
                                skipTransclusionContainerChildren: !1,
                                allowCopyExternalObjectInstances: !0,
                                includeLegacyTransclusionBlockValues: !0
                            }
                        }).recordMap;
                        if (!d) throw (0, a(434107).x)(n, {
                            getting_started_page_type: s,
                            errorType: "createAndDuplicatePageFailed",
                            spaceId: r.id
                        }), Error(a(962299).A.formatMessage(m));
                        let {
                            targetBlockStore: p,
                            originalToDuplicate: b
                        } = g({
                            environment: n,
                            sourceBlockId: c,
                            targetBlockPointer: l.pointer,
                            sourceBlockSubtree: d,
                            targetInMemoryRecordCache: l.inMemoryRecordCache,
                            transaction: e,
                            templateInstallationMetadata: {
                                source: "onboarding"
                            },
                            from: "create_getting_started",
                            destinationTable: a(832375).NXh,
                            options: {
                                allowRedundancy: !0,
                                deepCopyTransclusionContainers: !0,
                                isTemplateInstantiation: !0,
                                resolveTemplateVariables: !0,
                                preventLegacyTransclusions: !0
                            }
                        });
                        null != u && u.relativeDatesDefinition && (0, a(721174).ew)({
                            environment: n,
                            pageStore: p,
                            originalToDuplicate: b,
                            relativeDatesDefinition: u.relativeDatesDefinition,
                            transaction: e
                        });
                        let v = {},
                            y = {};
                        return "evernote" === s ? y.created_evernote_getting_started = !0 : v.created_getting_started = !0, Object.keys(v).length > 0 && (0, a(173157).z)({
                            store: i,
                            data: v,
                            transaction: e
                        }), Object.keys(y).length > 0 && (0, a(173157).z)({
                            store: o.getSettingsStore(),
                            data: y,
                            transaction: e
                        }), l
                    }
                });
                return v.then(() => {
                    (0, a(887470).K)(n, {
                        getting_started_page_type: s,
                        getting_started_page_id: c,
                        duplicated_from_page_id: c,
                        duplicated_to_page_id: b.id,
                        from: l
                    })
                }), b
            }
        },
        731632: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {}
            let i = new r
        },
        733785: (e, t, a) => {
            e.exports = a.p + "451ac07fab6898ec.png"
        },
        737497: (e, t, a) => {
            e.exports = a.p + "5c61be7d1ab58977.gif"
        },
        741489: (e, t, a) => {
            a.d(t, {
                j: () => r
            }), a(296540);
            var n = a(474848);

            function r({
                title: e,
                titleId: t,
                byline: i,
                bylineId: o,
                badge: l
            }) {
                return (0, n.jsxs)(a(4458).VP, {
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    gap: 4,
                    children: [(0, n.jsxs)(a(4458).fI, {
                        alignItems: "center",
                        gap: 6,
                        children: [(0, n.jsx)(a(111010).D, {
                            id: t,
                            styleKey: a(986939).A.isMobile ? "captionMedium" : "bodyMedium",
                            colorVariant: "primary",
                            children: e
                        }), l]
                    }), i ? (0, n.jsx)(a(111010).D, {
                        id: o,
                        styleKey: a(986939).A.isMobile ? "captionSmRegular" : "bodySmRegular",
                        colorVariant: "secondary",
                        style: {
                            textWrap: "pretty"
                        },
                        children: i
                    }) : void 0]
                })
            }
        },
        758097: (e, t, a) => {
            a.d(t, {
                y: () => n
            }), a(16280);
            async function n({
                environment: e,
                spaceId: t,
                userId: r,
                joinableSpacesViewType: i,
                analyticsFrom: o
            }) {
                let l = new(a(695906)).SpaceStore(e, {
                    table: a(832375).NXh,
                    id: t
                });
                await l.load();
                let s = a(229903).V.createChildStore(l, (0, a(729052).i1)({
                    userId: r,
                    spaceId: t
                }));
                if (await s.load(), s.isDefined())
                    if ("none" !== s.getMembershipType()) return Promise.resolve();
                    else throw Error(a(962299).A.formatMessage(a(271720).J.unableToJoinSpace)); {
                    let n = await e.api.callCellCompatibleApi({
                        eventName: "selfJoinSpaceByDomain",
                        environment: e,
                        cellNavigation: {
                            spaceId: t
                        },
                        data: {
                            spaceId: t,
                            joinableSpacesViewType: i,
                            analyticsFrom: o
                        }
                    });
                    if ("failed" === n.type) {
                        var d;
                        switch (null == (d = n.body) || null == (d = d.clientData) ? void 0 : d.type) {
                            case "unable_to_join_space":
                                throw Error(a(962299).A.formatMessage(a(271720).J.unableToJoinSpace));
                            case "space_user_already_exists_for_space":
                                a(773352).log({
                                    level: "warning",
                                    from: "selfJoinSpaceByDomain",
                                    type: "spaceUserAlreadyExistsForSpace",
                                    spaceId: t,
                                    data: {
                                        miscDataToConvertToString: {
                                            userId: r
                                        }
                                    }
                                });
                                break;
                            default:
                                throw n.error
                        }
                    }
                }
            }
        },
        765898: (e, t, a) => {
            a.d(t, {
                BS: () => l,
                CO: () => r,
                Hb: () => o,
                Y3: () => n,
                _T: () => s
            }), a(898992), a(672577), a(803949), a(814603), a(147566), a(198721);
            let n = 8,
                r = 70;
            (0, a(109939).YK)({
                member: {
                    id: "sharedContextualInviteHelpers.member.inviteMessage2",
                    defaultMessage: "{userName} shared a page {pageName} with you."
                },
                guest: {
                    id: "sharedContextualInviteHelpers.guest.inviteMessage2",
                    defaultMessage: "Accept {userName}{userNameEndsWithS, select, true {’} other {’s}} invite to view {pageName}."
                },
                default: {
                    id: "sharedContextualInviteHelpers.default.inviteMessage",
                    defaultMessage: "Your invitation message"
                },
                optional: {
                    id: "sharedContextualInviteHelpers.default.inviteMessagePrefix",
                    defaultMessage: "Optional message…"
                }
            });
            let i = /@0x[0-9a-fA-F]+/g;

            function o(e, t = 1e3) {
                let n, r;
                if (!e) return "";
                let l = (n = (0, a(189684).Kq)(e), r = "[link]", n = n.replaceAll(i, r), a(159523).I6(n, "url").forEach(e => {
                    n = n.replace(e.value, r)
                }), n);
                return l.length > t && (l = `${l.substring(0,t)}...`), l
            }

            function l(e) {
                return !!e && a(159523).I6(e, "url").length > 0
            }

            function s(e, t) {
                var n;
                let r = null == (n = a(993189).Bj6.fromValue("block", e).getPermissionItems()) ? void 0 : n.find(e => "user_permission" === e.type && e.user_id === t.invited_user_id);
                if (r && "invite_id" in r) return r.invite_id
            }
        },
        766970: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                xMarkFillIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.87 3.87 12.26 12.26",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M15.869 5.369A.875.875 0 0 0 14.63 4.13L10 8.763 5.369 4.13A.875.875 0 1 0 4.13 5.37L8.763 10 4.13 14.631a.875.875 0 1 0 1.24 1.239L10 11.237l4.631 4.632a.875.875 0 1 0 1.238-1.238L11.237 10z"
                    })
                },
                r = (0, a(104509).wt)("xMarkFill", n, "fill")
        },
        775451: (e, t, a) => {
            a.d(t, {
                W: () => i
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.06 14.57 16.51",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "m16.949 3.47-.618.619-1.164-1.165.625-.624a.823.823 0 0 1 1.157 0 .823.823 0 0 1 0 1.157zm-8.526 8.527 7.153-7.153-1.165-1.165-7.16 7.147a1.1 1.1 0 0 0-.247.414l-.303.978c-.055.206.137.4.33.33l.978-.303a.9.9 0 0 0 .414-.248"
                        }), (0, n.jsx)("path", {
                            d: "M9.578 5.438q.617 0 1.197.126l1.051-1.004a6.9 6.9 0 0 0-2.248-.372h-.35a6.603 6.603 0 0 0-6.603 6.602v.257c0 1.254.371 2.48 1.067 3.524a9.25 9.25 0 0 0 5.455 3.844l.514.129a.625.625 0 1 0 .303-1.213l-.513-.128a8 8 0 0 1-4.719-3.325 5.1 5.1 0 0 1-.857-2.831v-.257a5.353 5.353 0 0 1 5.353-5.352z"
                        }), (0, n.jsx)("path", {
                            d: "M12.444 15.748a6.47 6.47 0 0 1-5.471-1.878l1.387-.433a5.22 5.22 0 0 0 3.92 1.072l.08-.01a3.37 3.37 0 0 0 2.921-3.345 5.7 5.7 0 0 0-1.011-3.248l.904-.885a6.94 6.94 0 0 1 1.357 4.133 4.624 4.624 0 0 1-4.006 4.584z"
                        })]
                    })
                },
                i = (0, a(104509).wt)("pencilAndOutline", r, "default")
        },
        777805: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkShieldIcon: () => i,
                iconDefinition: () => r
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.07 2.17 13.85 15.65",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.876 7.978a.625.625 0 0 0-1.072-.643L9.25 11.59 7.815 9.916a.625.625 0 0 0-.95.814l2 2.333a.625.625 0 0 0 1.011-.085z"
                        }), (0, n.jsx)("path", {
                            d: "M10.28 2.241a.63.63 0 0 0-.56 0l-1.889.945a7.5 7.5 0 0 1-3.343.789H3.7a.625.625 0 0 0-.625.625v6.933a5.13 5.13 0 0 0 3.106 4.71l3.573 1.532a.63.63 0 0 0 .492 0l3.573-1.532a5.13 5.13 0 0 0 3.106-4.71V4.6a.625.625 0 0 0-.625-.625h-.788c-1.16 0-2.305-.27-3.343-.79zM8.39 4.304 10 3.499l1.61.805a8.7 8.7 0 0 0 3.902.921h.163v6.308c0 1.55-.924 2.95-2.348 3.562L10 16.52l-3.326-1.425a3.88 3.88 0 0 1-2.349-3.562V5.225h.163c1.355 0 2.69-.315 3.902-.921"
                        })]
                    })
                },
                i = (0, a(104509).wt)("checkmarkShield", r, "default")
        },
        778765: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => n,
                xMarkCircleFillSmallIcon: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.95 1.94 12.11 12.1",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8 1.95a6.05 6.05 0 1 0 0 12.1 6.05 6.05 0 0 0 0-12.1m2.289 3.761a.55.55 0 0 1 0 .778L8.778 8l1.511 1.511a.55.55 0 0 1-.778.778l-1.51-1.511-1.512 1.51a.55.55 0 1 1-.778-.777L7.222 8l-1.51-1.511a.55.55 0 1 1 .777-.778L8 7.222l1.511-1.51a.55.55 0 0 1 .778 0"
                    })
                },
                r = (0, a(104509).wt)("xMarkCircleFillSmall", n, "fillSmall")
        },
        781036: (e, t, a) => {
            a.d(t, {
                B: () => i
            });
            var n = a(296540),
                r = a(474848);

            function i({
                backgroundStyle: e,
                onDismiss: t
            }) {
                (0, n.useLayoutEffect)(() => {
                    if ((null == e ? void 0 : e.background) !== "transparent") return requestAnimationFrame(() => {
                        (0, a(960831).j)(!0)
                    }), a(164177).j.setState({
                        open: !0
                    }), () => {
                        (0, a(960831).j)(!1), a(164177).j.setState({
                            open: !1
                        })
                    }
                }, [null == e ? void 0 : e.background]);
                let o = (0, a(960253).I)(() => ({
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
                            background: a(632079).Tj.modalUnderlayBackground,
                            ...t
                        }
                    }({
                        backgroundStyle: e
                    })
                }), [e]);
                return (0, r.jsx)("div", {
                    role: "presentation",
                    style: o.underlay,
                    onClick: e => {
                        t && t(e)
                    },
                    className: a(511101).m
                })
            }
        },
        783925: (e, t, a) => {
            e.exports = a.p + "fc556f4d021cf665.png"
        },
        784836: (e, t, a) => {
            e.exports = a.p + "96fa7f82dea60fb2.png"
        },
        786221: (e, t, a) => {
            a.d(t, {
                HL: () => u,
                L5: () => c,
                Pl: () => E,
                parseCSV: () => B,
                ph: () => d
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(823215), a(354520), a(672577), a(430670), a(803949), a(581454), a(908872), a(737550);
            var n = () => a(627179),
                r = () => a(773352),
                i = () => a(247438);
            let o = "PartialMatch",
                l = "FullMatch",
                s = (0, a(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function d(e) {
                let {
                    table: t,
                    deps: {
                        intl: n,
                        randomShortID: r,
                        isPhoneNumber: o
                    },
                    options: {
                        useCsvAdaptiveSchema: l,
                        addHeadersToCollectionEnabled: d
                    }
                } = e, c = function(e, t, n, r, i = !1, o, l, d) {
                    var c;
                    let g = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        m = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== g);
                    if (m.length > 0) {
                        let e = m[0];
                        throw new(a(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: g,
                                    numBadRows: m.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let h = null == (c = e[0]) ? void 0 : c.length;
                    null == o || o.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(h));
                    let b = null == l ? void 0 : l.columnHeaders,
                        y = void 0 !== b && b.length > 0,
                        I = [];
                    y ? (I = b.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != l && l.useFirstRowAsHeaders && e.shift()) : 1 === e.length || d ? I = e[0].map((e, a) => t.formatMessage(s.genericColumnName, {
                        columnNumber: a + 1
                    })) : e.length > 1 && (I = e[0].map(e => e.text), e.shift());
                    let S = e,
                        {
                            types: x,
                            schema: k,
                            pages: C
                        } = y && b ? function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: r,
                                headerTitles: i,
                                headersMetadata: o,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, d = performance.now(), {
                                types: c,
                                notToImportColumnIndex: u
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: n,
                                    randomShortID: r
                                } = e, i = [];
                                return {
                                    types: n.flatMap((e, n) => {
                                        if (e.doNotImport) return i.push(n), [];
                                        let o = a(763230).D_;
                                        return "checkbox" === e.propertyType ? o = e => v(e) : "number" === e.propertyType ? o = e => _(e) : "date" === e.propertyType && "format" in e ? o = a => w(a, t, e.format) : "date" === e.propertyType && (o = e => w(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : r(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: o
                                        }]
                                    }),
                                    notToImportColumnIndex: i
                                }
                            }({
                                intl: n,
                                columns: o,
                                randomShortID: r
                            }), g = performance.now() - d;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                pages: m,
                                selectPropertyOptions: h
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l,
                                notToImportColumnIndex: u
                            });
                            if (h)
                                for (let e of c) h[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: n,
                                        propertyType: r
                                    } = e;
                                    return ("multi_select" === r ? n.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : n.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, a) => a.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, a(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: r,
                                    optionValues: h[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: b
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: r,
                                headers: i,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: b,
                                pages: m
                            }
                        }({
                            body: S,
                            intl: t,
                            randomShortID: n,
                            headerTitles: I,
                            headersMetadata: b,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        }) : function(e) {
                            let {
                                body: t,
                                intl: a,
                                randomShortID: n,
                                isPhoneNumber: r,
                                useCsvAdaptiveSchema: i,
                                headers: o,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, d = performance.now(), {
                                types: c
                            } = u({
                                body: t,
                                intl: a,
                                randomShortID: n,
                                isPhoneNumber: r,
                                useCsvAdaptiveSchema: i,
                                csvEvalContext: s
                            }), g = performance.now() - d;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", g);
                            let {
                                schema: m
                            } = p({
                                body: t,
                                intl: a,
                                randomShortID: n,
                                headers: o,
                                types: c,
                                isPreTypedCSV: l
                            }), {
                                pages: h
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: m,
                                pages: h
                            }
                        }({
                            body: S,
                            intl: t,
                            randomShortID: n,
                            isPhoneNumber: r,
                            useCsvAdaptiveSchema: i,
                            headers: I,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        });
                    return {
                        schema: k,
                        types: x,
                        pages: C
                    }
                }(t, n, r, o, l, e.csvEvalContext, e.metadata, d);
                return function(e) {
                    let {
                        actor: t,
                        blockType: n,
                        root: r,
                        parent: o,
                        name: l,
                        format: s,
                        deps: {
                            randomID: d,
                            spaceIdCreator: c,
                            addFileIdsToBlock: u,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: f,
                            legacyNonCrdt: g
                        },
                        pages: m,
                        schema: h,
                        columnIds: b
                    } = e, v = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(a(46241).V)) ? ? d(), y = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(a(435544).G)) ? ? d(), _ = [], I = [], S = [], {
                        operations: w
                    } = a(993189).WBy.create({
                        id: v,
                        parent: r.existing ? r.record.pointer : {
                            id: r.id,
                            table: a(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        name: i().x9d(l),
                        schema: h,
                        format: {
                            collection_page_properties: a(381453).oE(b.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...p && {
                                sync_state: {
                                    syncing: !0,
                                    last_synced_at: Date.now()
                                },
                                static_import_collection_type: a(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    _.push(...w);
                    let x = {
                            id: r.existing ? r.record.id : r.id,
                            type: n,
                            collection_id: v,
                            format: {
                                collection_pointer: {
                                    table: a(46241).V,
                                    id: v,
                                    spaceId: o.spaceId
                                }
                            },
                            view_ids: [y],
                            createdBy: t,
                            parentPointer: o,
                            space_id: o.spaceId
                        },
                        {
                            createOrUpdateBlockOperations: k
                        } = a(877308).Rf({
                            blockModelArgs: x,
                            existingBlock: r.existing ? r.record : void 0,
                            legacyNonCrdt: g
                        });
                    if (_.push(...k), p) {
                        let {
                            operations: e
                        } = a(993189).lqf.create({
                            id: y,
                            type: "table",
                            name: "Show All",
                            parent: r.existing ? r.record.pointer : {
                                id: r.id,
                                table: a(682956).ev,
                                spaceId: o.spaceId
                            },
                            space_id: o.spaceId,
                            format: {
                                collection_pointer: (0, a(9247).Z8)({
                                    collectionId: v,
                                    spaceId: o.spaceId
                                }),
                                table_properties: a(381453).oE(b.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        _.push(...e)
                    }
                    let C = function(e) {
                        let {
                            actor: t,
                            collectionId: n,
                            spaceId: r,
                            pages: i,
                            randomID: o,
                            spaceIdCreator: l,
                            options: s
                        } = e;
                        return i.map(i => {
                            let d = (null == l ? void 0 : l.idInSavedSpace(a(682956).ev)) ? ? o(),
                                {
                                    model: c,
                                    operations: u
                                } = a(993189).zgg.create({
                                    id: d,
                                    parentPointer: {
                                        id: n,
                                        table: a(46241).V,
                                        spaceId: r
                                    },
                                    space_id: r,
                                    type: a(955630).xd.page,
                                    createdBy: t,
                                    properties: i,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...u];
                            if (e.addFileIdsToBlock) {
                                let e = (0, a(781539).c)(c, "", "").fileIds;
                                e.length > 0 && p.push(a(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: d,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: v,
                        addFileIdsToBlock: u,
                        spaceId: o.spaceId,
                        pages: m,
                        randomID: d,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: f
                        }
                    });
                    for (let {
                            operations: e
                        } of C) I.push(...e);
                    let {
                        operations: A
                    } = a(993189).lqf.create({
                        id: y,
                        type: "table",
                        name: "Show All",
                        parent: r.existing ? r.record.pointer : {
                            id: r.id,
                            table: a(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        format: {
                            collection_pointer: (0, a(9247).Z8)({
                                collectionId: v,
                                spaceId: o.spaceId
                            }),
                            table_properties: a(381453).oE(b.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: C.map(e => e.id).slice(0, a(9247).WF),
                        createdBy: t
                    });
                    if (I.push(...A), !p) return {
                        operations: [..._, ...I]
                    }; {
                        let e = {
                                table: a(46241).V,
                                id: v,
                                spaceId: o.spaceId
                            },
                            t = a(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return S.push(t), {
                            operations: I,
                            createCollectionOperations: _,
                            collectionFinishedOperations: S
                        }
                    }
                }({ ...c,
                    columnIds: c.types.map(e => e.id),
                    ...e
                })
            }

            function c(e) {
                let {
                    table: t,
                    actor: n,
                    parent: r,
                    tableId: i,
                    deps: {
                        randomID: o,
                        spaceIdCreator: l,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: d,
                        ignoreBlockCount: c,
                        hasHeaderRow: u,
                        hasHeaderColumn: p
                    }
                } = e, f = [], g = t.length ? t[0].map(e => s()) : [], m = t.map(e => (null == l ? void 0 : l.idInSavedSpace(a(682956).ev)) ? ? o());
                return f.push(...a(993189).zgg.create({
                    id: i,
                    type: a(955630).xd.table,
                    content: m,
                    format: {
                        table_block_column_order: g,
                        ...u ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: r,
                    space_id: r.spaceId,
                    createdBy: n,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: d
                }).operations), f.push(...m.flatMap((e, o) => {
                    let l = (0, a(722371).MU)(g.flatMap((e, a) => {
                        var n;
                        let r = null == (n = t[o]) || null == (n = n[a]) ? void 0 : n.textValue;
                        return r ? [
                            [e, r]
                        ] : []
                    }));
                    return a(993189).zgg.create({
                        id: e,
                        type: a(955630).xd.tableRow,
                        parentPointer: {
                            id: i,
                            table: a(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        properties: l,
                        createdBy: n,
                        legacyNonCrdt: d
                    }).operations
                })), {
                    operations: f
                }
            }

            function u(e) {
                let {
                    body: t,
                    intl: i,
                    randomShortID: s,
                    isPhoneNumber: d,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: u
                } = e, p = [{
                    test: j.bind(null, d),
                    sampledSchemaIsComplete: !0
                }, {
                    test: I,
                    sampledSchemaIsComplete: !0
                }, {
                    test: C,
                    sampledSchemaIsComplete: !0
                }, {
                    test: M,
                    sampledSchemaIsComplete: !0
                }, {
                    test: x,
                    sampledSchemaIsComplete: !0
                }, {
                    test: y,
                    sampledSchemaIsComplete: !1
                }, {
                    test: D,
                    sampledSchemaIsComplete: !1
                }, {
                    test: P,
                    sampledSchemaIsComplete: !1
                }, {
                    test: R,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: a(381453).oE(a(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, i, s, d, c) {
                        let u = t.filter(e => !!e);
                        if (0 === u.length) return R(e, u);
                        if (d) {
                            let a = u.length > 1e3 ? function(e) {
                                let t = e.length,
                                    a = [];
                                for (let n = 0; n < 1e3; n++) {
                                    let n = Math.floor(Math.random() * t);
                                    a.push(e[n])
                                }
                                return a
                            }(u) : u;
                            for (let d of s) {
                                let s = d.test(e, a, i);
                                if (s) {
                                    let a = s;
                                    if (!1 === s.isFullMatch) {
                                        r().log({
                                            level: "info",
                                            from: "csvHelper",
                                            type: "csvColumnTypes",
                                            data: {
                                                message: "Partial column type match detected, setting data type as string",
                                                columnType: s.schema.type,
                                                matchType: "Partial"
                                            }
                                        }), a = R(e, t);
                                        let i = (null == c ? void 0 : c.get(o)) || 0;
                                        (0, n().Et)(i) && (null == c || c.set(o, i + 1))
                                    } else r().log({
                                        level: "info",
                                        from: "csvHelper",
                                        type: "csvColumnTypes",
                                        data: {
                                            message: "Complete column type match detected",
                                            columnType: s.schema.type,
                                            matchType: "Full"
                                        }
                                    });
                                    let i = (null == c ? void 0 : c.get(l)) || 0;
                                    return (0, n().Et)(i) && (null == c || c.set(l, i + 1)), a
                                }
                            }
                        } else {
                            let t = u.filter(e => !a(381453).Im(e)).slice(0, 100);
                            for (let a of s) {
                                let s = a.test(e, t, i);
                                if (s) {
                                    let d = a.sampledSchemaIsComplete || t.length === u.length ? s : a.test(e, u, i);
                                    if (d) {
                                        if (!1 === d.isFullMatch) {
                                            r().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: d.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(o)) || 0;
                                            (0, n().Et)(e) && (null == c || c.set(o, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(l)) || 0;
                                            (0, n().Et)(e) && (null == c || c.set(l, e + 1))
                                        }
                                        return d
                                    }
                                }
                            }
                        }
                        return R(e, [])
                    }(i, e.map(e => null == e ? void 0 : e.text), s, p, c, u)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: a,
                    randomShortID: n,
                    headers: r,
                    types: o,
                    isPreTypedCSV: l
                } = e, d = r.map(() => !1);
                if (!l) {
                    for (let e = 0; e < r.length; e++)
                        if ("text" === o[e].schema.type)
                            for (let a = 0; a < t.length; a++) {
                                let n = t[a][e].textValue;
                                if (n) {
                                    for (let r of n)
                                        if (i().BEe(r)) {
                                            d[e] = !0, a = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    u = {
                        title: {
                            type: "title",
                            name: a.formatMessage(s.titleColumnName)
                        }
                    };
                return r.forEach((e, t) => {
                    let a = o[t];
                    if (a)
                        if ("text" !== a.schema.type || !c || d[t] || l)
                            if (l && "title" === a.schema.type) {
                                let t = u.title;
                                t && (t.name = e)
                            } else {
                                let t = a.id ? ? n();
                                a.id || (a.id = t), u[t] = { ...a.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, a.id = "title", a.schema = {
                            type: "title",
                            name: e
                        };
                        let t = u.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: u
                }
            }

            function f(e) {
                let {
                    body: t,
                    types: n,
                    isPreTypedCSV: r,
                    notToImportColumnIndex: o
                } = e, l = {};
                return {
                    pages: t.map(e => {
                        null != o && o.length && (e = e.filter((e, t) => !o.includes(t)));
                        let t = {};
                        return n.forEach((n, o) => {
                            if (n) {
                                let {
                                    id: s,
                                    schema: d,
                                    coerce: c
                                } = n, {
                                    type: u
                                } = d;
                                if (s) {
                                    let n = e[o] || "";
                                    if ("url" === u) t[s] = a(561872).jw(n.text);
                                    else if ("date" === u) t[s] = a(561872).m5(c(n.text));
                                    else if ("text" === u) t[s] = n.textValue || i().x9d(c(n.text));
                                    else if ("file" === u) t[s] = n.textValue || [];
                                    else if ("select" === u || "multi_select" === u) {
                                        let e = [];
                                        if (e = "multi_select" === u ? n.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, a) => a.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : n.text.trim() ? [n.text.trim()] : [], r)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                l[s] || (l[s] = []), l[s].find(t => t.toLowerCase() === e.toLowerCase()) || l[s].push(e)
                                            }
                                        t[s] = i().x9d(c(n.text))
                                    } else t[s] = i().x9d(c(n.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: r ? l : void 0
                }
            }
            let g = ["yes", "Yes", "true", "True", "checked"],
                m = ["no", "No", "false", "False", "unchecked"];

            function h(e) {
                return g.some(t => e === t) || m.some(t => e === t)
            }

            function b(e, t) {
                return e.length === t.length
            }

            function v(e) {
                return g.some(t => e === t) ? a(745680).I1 : a(745680).oP
            }

            function y(e, t) {
                if (t.every(h)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: h,
                    coerce: e => v(e)
                }
            }

            function _(e) {
                let t = a(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function I(e, t) {
                let r = t.map(a(700369).sA),
                    i = r[0];
                if (i && r.every(e => !!(e && e.format === i.format))) return {
                    schema: {
                        type: "number",
                        number_format: i.format
                    },
                    validate(e) {
                        let t = a(700369).sA(e);
                        return !n().pN(t) && t.format === i.format
                    },
                    coerce: e => _(e)
                }
            }

            function S(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!a(629518).JC(t, e)
            }

            function w(e, t, n) {
                let r = e.includes("→");
                return a(629518).JC(e, t, r ? void 0 : n)
            }

            function x(e, t) {
                let a = t.filter(t => S(e, t));
                if (a.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => S(e, t),
                    coerce: t => w(t, e),
                    isFullMatch: b(t, a)
                }
            }

            function k(e) {
                return e.length < 320 && e.includes("@") && a(159523).t6(e, "email")
            }

            function C(e, t) {
                let n = t.filter(k);
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: k,
                    coerce: a(763230).D_,
                    isFullMatch: b(t, n)
                }
            }

            function A(e) {
                return e.length < 320 && a(159523).t6(e, "url")
            }

            function M(e, t) {
                let n = t.filter(A);
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: A,
                    coerce: a(763230).D_,
                    isFullMatch: b(t, n)
                }
            }

            function T(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function j(e, t, n) {
                let r = T.bind(null, e),
                    i = n.filter(r);
                if (i.length >= n.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: r,
                    coerce: a(763230).D_,
                    isFullMatch: b(n, i)
                }
            }

            function D(e, t, n) {
                var r, i, o, l;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let d = a(561872).ki(s),
                    c = new Set(d);
                if (r = d.length, (i = s.length) > t.length && (o = r, l = i, o > 0 && o ** 2 < l)) return {
                    schema: {
                        type: "multi_select",
                        options: d.map((e, t) => ({
                            id: n(),
                            value: e,
                            color: (0, a(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: a(763230).D_
                }
            }

            function P(e, t, n) {
                var r, i;
                let o = a(561872).ki(t),
                    l = new Set(o);
                if (r = o.length, i = t.length, r > 0 && r ** 2 < i) return {
                    schema: {
                        type: "select",
                        options: o.map((e, t) => ({
                            id: n(),
                            value: e,
                            color: (0, a(326044).Z)([])
                        }))
                    },
                    validate: e => l.has(e),
                    coerce: a(763230).D_
                }
            }

            function R(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: a(763230).D_
                }
            }

            function B(e, t) {
                t || (t = function(e, t) {
                    let a = ",",
                        n = 0,
                        r = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let a = [],
                                n = [],
                                r = "",
                                i = !1;
                            for (let o = 0; o < e.length; o++) {
                                let l = e[o],
                                    s = e[o + 1];
                                '"' === l ? i && '"' === s ? (r += '"', o++) : i = !i : l !== t || i ? "\n" !== l && "\r" !== l || i ? r += l : (n.push(r), n.length > 0 && a.push(n), n = [], r = "", "\r" === l && "\n" === s && o++) : (n.push(r), r = "")
                            }
                            return (r || n.length > 0) && (n.push(r), a.push(n)), a.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(r, e);
                        if (t.length <= 1) continue;
                        let i = t.map(e => e.length),
                            o = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(i),
                            l = i.filter(e => e === o).length / i.length,
                            s = o >= 6 ? .6 : .7;
                        if (o <= 1 || l < s) continue;
                        let d = t.flat().filter(t => t.includes(e)).length / (t.length * o),
                            c = 100 * l + 10 * o - 50 * d;
                        c > n && (n = c, a = e)
                    }
                    return a
                }(e, [",", ";", "	", "|"]));
                let a = [],
                    n = [],
                    r = "",
                    i = !1;
                for (let o = 0; o < e.length; o++) {
                    let l = e[o],
                        s = e[o + 1];
                    if ('"' === l) i && '"' === s ? (r += '"', o++) : i = !i;
                    else if (l !== t || i)
                        if ("\n" !== l && ("\r" !== l || "\n" === s) || i) {
                            if ("\r" === l && "\n" === s && !i) continue;
                            r += l
                        } else n.push(r), a.push(n), n = [], r = "";
                    else n.push(r), r = ""
                }
                return (r || n.length > 0) && (n.push(r), a.push(n)), a
            }
            let E = [{
                type: "title",
                name: "Title"
            }, {
                type: "text",
                name: "Text"
            }, {
                type: "number",
                name: "Number"
            }, {
                type: "select",
                name: "Select"
            }, {
                type: "multi_select",
                name: "Multi-select"
            }, {
                type: "status",
                name: "Status"
            }, {
                type: "date",
                name: "Date"
            }, {
                type: "checkbox",
                name: "Checkbox"
            }, {
                type: "url",
                name: "URL"
            }, {
                type: "email",
                name: "Email"
            }, {
                type: "phone_number",
                name: "Phone Number"
            }, {
                type: "person",
                name: "Person"
            }, {
                type: "dont_import",
                name: "Don't import"
            }]
        },
        789701: (e, t, a) => {
            a.d(t, {
                y: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                r = (0, a(104509).wt)("inbox", n, "default")
        },
        789722: (e, t, a) => {
            a.d(t, {
                W: () => n
            });
            let n = (0, a(109939).YK)({
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
        796123: (e, t, a) => {
            a.r(t), a.d(t, {
                showAsyncModal: () => r,
                showAsyncModalComponent: () => i,
                testOnly: () => f
            }), a(898992), a(354520), a(672577), a(581454);
            var n = a(296540);

            function r(e, t = a(2009).w) {
                return new Promise((a, n) => {
                    try {
                        let r = c({
                            renderModal: e,
                            promiseResolve: a,
                            promiseReject: n,
                            store: t
                        });
                        o({
                            asyncModal: r,
                            store: t
                        })
                    } catch (e) {
                        n(e)
                    }
                })
            }

            function i(e, t = a(2009).w) {
                return r(t => n.createElement(e, t), t)
            }

            function o(e) {
                let {
                    asyncModal: t,
                    store: n = a(2009).w
                } = e;
                n.update(e => ({
                    asyncModals: [...e.asyncModals, t]
                }))
            }

            function l(e) {
                let {
                    id: t,
                    promiseResolve: n,
                    store: r = a(2009).w
                } = e;
                return e => {
                    let a = u({
                        id: t,
                        store: r
                    });
                    null != a && a.isOpen && (p({
                        id: t,
                        store: r,
                        update: {
                            isOpen: !1
                        }
                    }), n(e))
                }
            }

            function s(e) {
                let {
                    id: t,
                    promiseResolve: n,
                    store: r = a(2009).w
                } = e;
                return () => {
                    let e = u({
                        id: t,
                        store: r
                    });
                    null != e && e.isOpen && (p({
                        id: t,
                        store: r,
                        update: {
                            isOpen: !1
                        }
                    }), n())
                }
            }

            function d(e) {
                let {
                    id: t,
                    store: n = a(2009).w
                } = e;
                return () => {
                    n.update(e => ({
                        asyncModals: e.asyncModals.filter(e => e.id !== t)
                    }))
                }
            }

            function c(e) {
                let {
                    renderModal: t,
                    promiseResolve: n,
                    promiseReject: r,
                    store: i = a(2009).w
                } = e, o = a(92513).JW(), c = d({
                    id: o,
                    store: i
                }), u = s({
                    id: o,
                    promiseResolve: n,
                    store: i
                }), p = l({
                    id: o,
                    promiseResolve: n,
                    store: i
                });
                return {
                    id: o,
                    internalRenderModal: e => {
                        try {
                            return t({
                                isOpen: e,
                                onClosed: c,
                                onDismiss: u,
                                resolve: p
                            })
                        } catch (e) {
                            throw r(e), e
                        }
                    },
                    isOpen: !0
                }
            }

            function u(e) {
                let {
                    id: t,
                    store: n = a(2009).w
                } = e;
                return n.state.asyncModals.find(e => e.id === t)
            }

            function p(e) {
                let {
                    id: t,
                    update: n,
                    store: r = a(2009).w
                } = e;
                r.update(e => ({
                    asyncModals: e.asyncModals.map(e => e.id !== t ? e : { ...e,
                        ...n
                    })
                }))
            }
            let f = {
                addAsyncModal: o,
                createAsyncModal: c,
                createOnClosed: d,
                createOnDismiss: s,
                createResolve: l,
                getAsyncModal: u,
                updateAsyncModal: p
            }
        },
        799472: (e, t, a) => {
            a.d(t, {
                u: () => n
            });
            let n = (0, a(104509).xh)("questionMarkCircle", {
                default: {
                    loader: () => a.e(82106).then(a.bind(a, 80094))
                },
                small: {
                    loader: () => a.e(82106).then(a.bind(a, 211052))
                },
                fill: {
                    loader: () => a.e(82106).then(a.bind(a, 769980))
                },
                fillSmall: {
                    loader: () => a.e(82106).then(a.bind(a, 479491))
                }
            }, ["question", "query", "inquiry", "uncertain", "unknown", "help", "circle"])
        },
        799891: (e, t, a) => {
            a.d(t, {
                y: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                r = (0, a(104509).wt)("chatBubble", n, "default")
        },
        809678: (e, t, a) => {
            var n = a(746518),
                r = a(437628),
                i = a(225397),
                o = a(206469),
                l = Array;
            n({
                target: "Array",
                proto: !0
            }, {
                toReversed: function() {
                    return r(i(this), l)
                }
            }), o("toReversed")
        },
        812591: (e, t, a) => {
            a.d(t, {
                X: () => r
            });
            let n = {
                titleMessage: (0, a(109939).YK)({
                    onboardingThreadTitle: {
                        id: "oracle.thread.onboarding.title",
                        defaultMessage: "Welcome to Notion"
                    }
                }).onboardingThreadTitle,
                surface: "post_onboarding_agent",
                createdSource: "post_onboarding_agent",
                triggerPurpose: "Start the onboarding conversation now. Send your first onboarding message."
            };

            function r(e) {
                return (0, a(939679).p)({ ...e,
                    oracleThreadType: "onboarding",
                    oracleThreadConfig: n
                })
            }
        },
        823230: (e, t, a) => {
            a.d(t, {
                c: () => n
            });
            async function n(e) {
                let {
                    environment: t,
                    collectionStore: n
                } = e, r = {
                    id: n.id,
                    table: a(832375).VlP,
                    spaceId: n.getSpaceId()
                }, i = await t.api.callApi({
                    eventName: "suggestRecordKey",
                    environment: t,
                    data: { ...r,
                        shouldSetSuccessfullySuggestedRecord: !0
                    }
                });
                if ("success" === i.type) return i.data.key;
                a(773352).log({
                    level: "error",
                    from: "collectionAutoIncrementIdActions.suggestRecordKeyResponse",
                    type: "JSONParseError",
                    error: {
                        miscDataString: i.error.message
                    }
                })
            }
        },
        828294: (e, t, a) => {
            function n(e) {
                let t = (0, a(83208).X)(e);
                return "on" === (0, a(604306).r)("agent_writer_custom_skills") || t
            }

            function r(e) {
                return "on" === a(218744).default.getEligibleGroup({
                    experimentId: "agent_writer_custom_skills",
                    defaultGroup: "control"
                }) || a(218744).default.checkGate({
                    gateName: e
                })
            }
            a.d(t, {
                N: () => n,
                a: () => r
            })
        },
        832248: (e, t, a) => {
            a.d(t, {
                S7: () => l,
                fF: () => y,
                es: () => v,
                LE: () => h,
                zs: () => m,
                HE: () => g,
                yg: () => b,
                QH: () => f,
                kn: () => p,
                mB: () => s,
                L$: () => d,
                X3: () => c,
                jX: () => u
            }), a(898992), a(354520), a(581454), a(944114);
            var n = () => a(896346);
            class r extends n().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let i = (0, a(109939).YK)({
                    dateAtTime: {
                        id: "automations.recurrenceHelpers.dateAtTime",
                        defaultMessage: "{date} at {time}"
                    },
                    dateBetweenMidnightAnd3AM: {
                        id: "automations.recurrenceHelpers.dateBetweenMidnightAnd3AM",
                        defaultMessage: "{date} between 12–3 AM"
                    },
                    numberEndConditionDescription: {
                        id: "automations.recurrenceHelpers.numberEndConditionDescription",
                        defaultMessage: "{number, plural, one {After {number} run} other {After {number} runs}}"
                    },
                    noEndCondition: {
                        id: "automations.recurrenceHelpers.noEndCondition",
                        defaultMessage: "Never"
                    }
                }),
                o = {
                    hour: r.HOURLY,
                    day: r.DAILY,
                    week: r.WEEKLY,
                    month: r.MONTHLY,
                    year: r.YEARLY
                },
                l = {
                    MO: r.MO,
                    TU: r.TU,
                    WE: r.WE,
                    TH: r.TH,
                    FR: r.FR,
                    SA: r.SA,
                    SU: r.SU
                };

            function s(e) {
                return (0, a(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function d(e) {
                return (0, a(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function c(e) {
                let {
                    start_date: t,
                    frequency: n,
                    interval: i,
                    weekdays: s,
                    timezone: d,
                    hour: c,
                    minute: u
                } = e, p = (0, a(943003).eU)(t);
                "hour" === n && p.setUTCHours(c ? ? 0, u ? ? 0, 0, 0);
                let f = "week" === n && s ? s.map(e => l[e]) : void 0,
                    g = {};
                return (0, a(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? g.until = (0, a(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? g.count = e.end_condition.number_of_occurrences : (0, a(722371).HB)(e.end_condition)), "month" === e.frequency && (0, a(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? g.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? g.byweekday = (function e(t, ...a) {
                    if (0 === a.length) return t.map(e => [e]);
                    let n = [];
                    for (let r of t) n.push(...e(a[0], ...a.slice(1)).map(e => [r, ...e]));
                    return n
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, a(722371).HB)(e.monthly_restriction)), new r({
                    freq: o[n],
                    dtstart: p,
                    interval: i,
                    byweekday: f,
                    tzid: "hour" === n ? void 0 : d,
                    ..."hour" === n ? {} : {
                        byhour: c ? ? 0,
                        byminute: u ? ? 0,
                        bysecond: 0
                    },
                    ...g
                })
            }

            function u(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let a = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    n = e.length,
                    r = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    i = n > 1,
                    o = a.length >= 1;
                return {
                    violatesConstraint: i || o,
                    templateNestingExceedsMaxDepth: i,
                    ancestorHasDailyTemplate: o,
                    nestedDepthOfAutomationAncestors: n,
                    immediateAncestorRecurrenceType: r
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function f(e) {
                return c(e).after((0, a(943003).eU)((0, a(943003).Rz)())) || void 0
            }

            function g(e) {
                let {
                    recurrence: t,
                    intl: n
                } = e, r = "hour" === t.frequency ? function(e) {
                    let t = a(906745).DateTime.now();
                    if (a(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let n = t.startOf("hour");
                    return { ...e,
                        start_date: n.toMillis(),
                        hour: n.hour,
                        minute: n.minute
                    }
                }(t) : t, o = f(v(r));
                if (!o) return;
                let l = a(906745).DateTime.fromJSDate(o).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, a(599412).H)(n));
                "hour" !== r.frequency && (l = l.setZone(r.timezone));
                let s = "hour" !== t.frequency && p(t),
                    d = (0, a(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: n,
                        shortenDate: !0
                    });
                if (s) return n.formatMessage(i.dateBetweenMidnightAnd3AM, {
                    date: d
                }); {
                    let e = l.toLocaleString(a(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, a(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), n.formatMessage(i.dateAtTime, {
                        date: d,
                        time: e
                    })
                }
            }

            function m(e, t) {
                return (0, a(722371).O9)(e) ? "number" === e.type ? t.formatMessage(i.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, a(850640).Yq)({
                    date: a(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, a(722371).HB)(e) : t.formatMessage(i.noEndCondition)
            }

            function h(e) {
                return { ...e,
                    start_date: (0, a(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, a(943003).l1)(e.end_condition.end_at)
                    } : (0, a(722371).HB)(e.end_condition) : void 0
                }
            }

            function b(e, t, a) {
                return e.plus(a - t)
            }

            function v(e) {
                var t;
                let n;
                return { ...e,
                    start_date: (0, a(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, n = a(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, a(943003).Rz)(n.toJSDate())
                    }) : (0, a(722371).HB)(e.end_condition) : void 0
                }
            }

            function y(e, t) {
                let n = a(381453).fN(e, e => void 0 !== e),
                    r = a(381453).fN(t, e => void 0 !== e);
                return a(381453).n4(n, r)
            }
        },
        832338: (e, t, a) => {
            e.exports = a.p + "4d1ffa233a574cb5.png"
        },
        832799: (e, t, a) => {
            async function n(e) {
                var t;
                let {
                    environment: n,
                    campaign: r,
                    initialMemberCount: i
                } = e, o = (0, a(328765).S)();
                if (!o || (null == (t = o.getSettings().offer_member_count) || null == (t = t.find(e => e.campaign === r)) ? void 0 : t.initialCount)) return;
                let l = o.getSpaceId(),
                    {
                        serverCommitResult: s
                    } = (0, a(377796).createAndCommit)({
                        environment: n,
                        userAction: "offerActions.addOfferInitialMemberCount",
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            (0, a(173157).z)({
                                store: o,
                                data: {
                                    settings: { ...o.getSettings(),
                                        offer_member_count: [...o.getSettings().offer_member_count ? ? [], {
                                            campaign: r,
                                            initialCount: i,
                                            initialTimestamp: Date.now()
                                        }]
                                    }
                                },
                                transaction: e
                            })
                        }
                    });
                try {
                    await s
                } catch (e) {
                    (0, a(222024).t)().error({
                        from: "expansionOfferActions",
                        type: "addOfferInitialMemberCountFailed",
                        error: e
                    })
                }
            }
            async function r(e, t) {
                let n = (0, a(328765).S)();
                if (!n) return "failed";
                let r = n.getSettings().offer_member_count;
                if (!(null != r && r.find(e => e.campaign === t))) return "failed";
                let i = (0, a(616579).j)({
                    environment: e,
                    spaceId: n.getSpaceId()
                });
                if (void 0 === i) return (0, a(222024).t)().log({
                    level: "error",
                    from: "expansionOfferActions",
                    type: "currentMemberCountNotFound",
                    spaceId: n.getSpaceId()
                }), "failed";
                let o = r.map(e => e.campaign === t ? { ...e,
                        membersAdded: Math.max(i - (e.initialCount ? ? 0), 0)
                    } : e),
                    l = n.getSpaceId(),
                    {
                        serverCommitResult: s
                    } = (0, a(377796).createAndCommit)({
                        environment: e,
                        userAction: "offerActions.updateOfferMembersAdded",
                        canUndo: !0,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        perform: e => {
                            (0, a(173157).z)({
                                store: n,
                                data: {
                                    settings: { ...n.getSettings(),
                                        offer_member_count: o
                                    }
                                },
                                transaction: e
                            })
                        }
                    });
                try {
                    await s
                } catch (e) {
                    return (0, a(222024).t)().error({
                        from: "expansionOfferActions",
                        type: "updateOfferMembersAddedFailed",
                        error: e
                    }), "failed"
                }
                return await a(617995).I.resetData(e, {
                    spaceId: l,
                    offerCampaign: t
                }), "success"
            }

            function i(e, t, r = "expansion_offer") {
                n({
                        environment: e,
                        campaign: r,
                        initialMemberCount: t
                    }),
                    function(e) {
                        let t = (0, a(328765).S)();
                        if (!t || t.getSettings().seen_expansion_offer) return;
                        let n = t.getSpaceId();
                        (0, a(377796).createAndCommit)({
                            environment: e,
                            userAction: "offerActions.setSeenExpansionOffer",
                            canUndo: !0,
                            cellTarget: n ? {
                                spaceWithId: n
                            } : void 0,
                            perform: e => {
                                (0, a(173157).z)({
                                    store: t,
                                    data: {
                                        settings: { ...t.getSettings(),
                                            seen_expansion_offer: !0
                                        }
                                    },
                                    transaction: e
                                })
                            }
                        })
                    }(e)
            }
            a.d(t, {
                Ho: () => n,
                Ni: () => r,
                Pp: () => i
            }), a(898992), a(672577), a(581454)
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => r
            });
            var n = a(296540);

            function r() {
                let e = (0, n.useRef)(null),
                    [t, a] = (0, n.useState)(!1),
                    r = (0, n.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, n.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", r), e.current = t, r()) : e.current && (e.current.removeEventListener("mouseenter", r), e.current.removeEventListener("mouseleave", r), e.current = null)
                }, [r]), t, e]
            }
        },
        852864: (e, t, a) => {
            a.d(t, {
                H: () => n
            }), a(898992), a(672577);

            function n({
                spaceStore: e,
                userId: t,
                environment: r
            }) {
                let i = new(a(736309)).d(r, {
                    table: a(832375).GDR,
                    id: t
                }).getSpaceViewPointers().find(t => t.spaceId === e.id);
                return i ? a(994797).SpaceViewStore.createChildStore(e, {
                    id: i.id,
                    table: a(832375).mu7,
                    spaceId: e.id
                }) : void 0
            }
        },
        853160: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleIcon: () => i,
                iconDefinition: () => r
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.25 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M12.876 7.982a.625.625 0 1 0-1.072-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                        }), (0, n.jsx)("path", {
                            d: "M10 2.375a7.625 7.625 0 1 0 0 15.25 7.625 7.625 0 0 0 0-15.25M3.625 10a6.375 6.375 0 1 1 12.75 0 6.375 6.375 0 0 1-12.75 0"
                        })]
                    })
                },
                i = (0, a(104509).wt)("checkmarkCircle", r, "default")
        },
        856863: (e, t, a) => {
            a.d(t, {
                j: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                open(e) {
                    this.setState({
                        open: !0,
                        ...e
                    })
                }
            }
            let i = new r
        },
        876252: (e, t, a) => {
            a.d(t, {
                $: () => n
            });

            function n() {
                return (0, a(682985).O$)(a(728372).AppStoreCurrentUserStore)
            }
        },
        879817: (e, t, a) => {
            e.exports = a.p + "1ff0049b43405408.png"
        },
        883947: (e, t, a) => {
            a.d(t, {
                o: () => n
            }), a(898992), a(354520);

            function n(e) {
                return (0, a(576968).B)(e).filter(a(573143).QE)
            }
        },
        887470: (e, t, a) => {
            a.d(t, {
                K: () => n
            });

            function n(e, t) {
                (0, a(195857).DO_NOT_USE_trackLegacy)("getting_started_page_create", t)
            }
        },
        922900: (e, t, a) => {
            a.d(t, {
                getWorkflowAgentConfig: () => r
            }), a(898992), a(430670), a(737550);
            let n = new(a(245541)).R({
                key: "agent_memory_database_page",
                namespace: a(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function r(e) {
                let t, {
                        isOnboardingAgent: r,
                        searchScopes: o,
                        searchSessionId: l,
                        useWebSearch: s,
                        useComputer: d,
                        yoloMode: c,
                        useReadOnlyMode: u,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: g,
                        workflowId: m,
                        modelFromUser: h,
                        writerMode: b,
                        useRulePrioritization: v,
                        useCustomAgentDraft: y,
                        useDraftActorPointer: _,
                        ephemeralInstructions: I,
                        databaseAgentConfigMode: S,
                        environment: w,
                        spaceId: x,
                        spaceStore: k
                    } = e,
                    C = a(886556).z.isZeroRetentionEnabled(),
                    A = (0, a(612608).MI)((0, a(612608).VD)("custom_agents"), i),
                    M = (0, a(612608).MI)((0, a(612608).VD)("agent_automations"), i),
                    T = (0, a(612608).MI)((0, a(612608).VD)("agent_integrations"), i),
                    j = (0, a(612608).MI)((0, a(612608).VD)("experimental_integrations"), i),
                    D = (0, a(612608).MI)((0, a(612608).VD)("database_agents"), i),
                    P = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_advanced"), i),
                    R = (0, a(388647).p)({
                        environment: w
                    }),
                    B = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_search_connectors"), i),
                    E = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_google_drive"), i),
                    N = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_slack"), i),
                    F = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_mcp_servers"), i),
                    O = (0, a(612608).MI)((0, a(612608).VD)("script_agent_mail_module_available"), i),
                    U = (0, a(612608).MI)((0, a(612608).VD)("agent_script_agent_custom_tool_calling"), i),
                    L = i("agent_enable_create_thread"),
                    V = i("software_factory_page"),
                    W = i("enable_script_agent_writer"),
                    z = i("database_agents_on_script_agent"),
                    Q = (!S || z) && (!b || W),
                    H = (0, a(612608).MI)((0, a(612608).VD)("agent_user_session_context"), i),
                    $ = i("agent_crdt_operations"),
                    K = (0, a(612608).MI)((0, a(612608).VD)("agent_card_customization"), i),
                    q = (0, a(612608).MI)((0, a(612608).VD)("agent_system_prompt_as_page"), i),
                    G = (0, a(612608).MI)((0, a(612608).VD)("agent_view_notifications_tool_enabled"), i),
                    Z = (0, a(328765).S)(),
                    Y = k ? ? (void 0 === x || (null == Z ? void 0 : Z.id) === x ? Z : void 0),
                    J = i("sams_specials"),
                    X = i("ai_image_generation") && !J && ((null == Y ? void 0 : Y.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, a(612608).MI)((0, a(612608).VD)("agent_diffs"), i),
                    et = (0, a(612608).MI)((0, a(612608).VD)("agent_update_page_patch"), i),
                    ea = (0, a(612608).MI)((0, a(612608).VD)("agent_create_db_template"), i),
                    en = i("agent_search_tool_v2"),
                    er = i("agent_update_page_autofixer"),
                    ei = i("agent_markdown_vnext"),
                    eo = i("agent_update_page_order_updates"),
                    el = i("agent_support_property_reorder"),
                    es = i("agent_short_update_page_result"),
                    ed = a(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ec = n.getState(),
                    eu = null == ec ? void 0 : ec.pageId,
                    ep = b || f ? void 0 : function() {
                        switch (a(218744).default.getEligibleGroup({
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
                    ef = "on" === a(218744).default.getEligibleGroup({
                        experimentId: "ai_product_retention_agent_speculative_search",
                        defaultGroup: "control"
                    }),
                    eg = (0, a(876688).wd)(),
                    em = eg.some(e => (0, a(281708).yY)(e)),
                    eh = i("mail_explicit_tool_calls"),
                    eb = i("outlook_custom_agent_email_connector"),
                    ev = i("agent_query_calendar_tool") && em,
                    ey = eg.some(e => (0, a(281708).Xs)(e) && "outlook" !== e),
                    e_ = i("agent_query_mail_tool") && ey,
                    eI = (0, a(828294).a)("agent_rule_priority_hierarchy"),
                    eS = i("agent_ask_survey");
                return t = !m && (u ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: M,
                    enableAgentIntegrations: T,
                    enableCustomAgents: A,
                    enableExperimentalIntegrations: j,
                    enableAgentViewNotificationsTool: G,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: ea,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: D,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: $,
                    enableAgentCardCustomization: K,
                    enableSystemPromptAsPage: q,
                    enableUserSessionContext: H,
                    enableScriptAgentAdvanced: !!Q && P,
                    enableScriptAgent: !!Q && R,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!Q && !!f && B,
                    enableScriptAgentGoogleDriveInCustomAgent: !!Q && !!f && E,
                    enableScriptAgentSlack: !!Q && N,
                    enableScriptAgentMcpServers: !!Q && F,
                    enableScriptAgentMail: !!Q && O,
                    enableScriptAgentCalendar: !!Q && R,
                    enableScriptAgentCustomToolCalling: !!Q && U,
                    enableCreateAndRunThread: L,
                    enableSoftwareFactoryPage: V,
                    ...f ? {} : {
                        enableAgentGenerateImage: X
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: ev,
                    enableQueryMail: e_,
                    enableMailExplicitToolCalls: eh,
                    enableMailAgentMultiProviderSupport: eb,
                    useRulePrioritization: v ? ? eI,
                    memoryDatabasePageId: eu,
                    workflowId: m,
                    availableConnectors: eg,
                    customConnectorInfo: a(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: b ? [] : o ? ? a(425749).R2,
                    useSearchToolV2: en,
                    useWebSearch: !b && !C && (void 0 === s || s),
                    useComputer: d ? ? !0,
                    yoloMode: c ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!b,
                    model: b ? ed : p,
                    searchSessionId: l,
                    modelFromUser: !b && (h ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!g,
                    useCustomAgentDraft: !!y,
                    use_draft_actor_pointer: !!_,
                    enableUpdatePageAutofixer: er,
                    enableMarkdownVNext: ei,
                    enableUpdatePageOrderUpdates: eo,
                    enableAgentSupportPropertyReorder: el,
                    agentShortUpdatePageResult: es,
                    ephemeralInstructions: I,
                    ...b || r || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: eS
                    },
                    databaseAgentConfigMode: !!S,
                    isOnboardingAgent: !!r,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: a(986939).A.isMobile
                }
            }

            function i(e) {
                return a(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        926875: (e, t, a) => {
            a.d(t, {
                A: () => i
            });
            var n = () => a(546605);
            class r extends n().Store {
                getInitialState() {
                    return {
                        open: !1
                    }
                }
                closeWithSuccess() {
                    this.setState({
                        open: !1,
                        succeeded: !0
                    })
                }
                closeWithFailure() {
                    this.setState({
                        open: !1,
                        succeeded: !1
                    })
                }
                open(e) {
                    let {
                        subscriptionTier: t,
                        addOnFeature: a,
                        billingInterval: n,
                        isTrial: r,
                        sessionId: i,
                        dismissMobilePlansModal: o,
                        postUpgradeCallback: l,
                        from: s,
                        campaign: d
                    } = e;
                    this.setState({
                        open: !0,
                        temporaryBillingInterval: n,
                        temporaryAddress: {
                            name: "",
                            businessName: "",
                            addressLine1: "",
                            addressLine2: "",
                            zipCode: "",
                            city: "",
                            state: "",
                            country: ""
                        },
                        appliedPromo: void 0,
                        error: void 0,
                        subscriptionTier: t,
                        vatApplicable: !1,
                        calculatingTax: !1,
                        payButtonState: "enabled",
                        type: "current_space",
                        addOnFeature: a,
                        onlyShowAddOn: void 0 !== a,
                        sessionId: i,
                        isTrial: r,
                        dismissMobilePlansModal: o,
                        postUpgradeCallback: l,
                        from: s,
                        campaign: d
                    })
                }
                setAddressField(e) {
                    this.state.open && this.setState({ ...this.state,
                        temporaryAddress: { ...this.state.temporaryAddress,
                            ...e
                        },
                        taxCalculationError: void 0
                    })
                }
            }
            let i = new r
        },
        938989: (e, t, a) => {
            e.exports = a.p + "f134ff16443ed5ec.png"
        },
        939434: (e, t, a) => {
            a.d(t, {
                w: () => r
            }), a(296540);
            let n = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "3.17 0.97 9.66 14.06",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M8.442 1.158a.625.625 0 0 0-.884 0l-4.2 4.2a.625.625 0 0 0 .884.884L8 2.484l3.758 3.758a.625.625 0 0 0 .884-.884L8.445 1.16zm4.2 8.6a.625.625 0 0 0-.884 0L8 13.516 4.242 9.758a.625.625 0 1 0-.884.884l4.2 4.2c.244.244.64.244.884 0l.005-.005 4.195-4.195a.625.625 0 0 0 0-.884"
                    })
                },
                r = (0, a(104509).wt)("arrowChevronDoubleUpAndDownSmall", n, "small")
        },
        939679: (e, t, a) => {
            a.d(t, {
                p: () => n
            }), a(16280), a(944114);

            function n(e) {
                let t, {
                    environment: n,
                    spaceStore: r,
                    spaceViewStore: i,
                    oracleThreadType: o,
                    oracleThreadConfig: l,
                    instructions: s,
                    useOnboardingModule: d,
                    suppressNameInGreeting: c = !1,
                    model: u,
                    searchScope: p,
                    debugOverrides: f
                } = e;
                if (u) {
                    if (!(0, a(426048).R5)(u)) throw Error(`Model "${u}" is not a valid agent model. Please select a model that supports agent workflows.`);
                    t = u
                }
                let g = a(728372).AppStoreCurrentUserStore.state;
                if (!g) throw Error("User store is not available. Please wait for the app to fully load.");
                let m = (null == f ? void 0 : f.dynamicInstructions) !== void 0,
                    h = (0, a(922900).getWorkflowAgentConfig)({
                        environment: n,
                        spaceId: r.id,
                        isCustomAgent: !1,
                        workflowId: void 0,
                        model: t,
                        searchScopes: e.disableSearch ? [] : p ? [p] : void 0,
                        useReadOnlyMode: !1,
                        useWebSearch: !1,
                        onboardingAgentVersion: "onboarding" === o && (d || m) ? e.onboardingAgentVersion ? ? "work" : void 0
                    });
                h.oracleThreadType = o, h.enableScriptAgent = !0;
                let b = [],
                    v = a(962299).A.getIntl(),
                    y = {
                        id: (0, a(295447).Z1)({
                            environment: n,
                            table: a(832375).mSw,
                            spaceId: r.id
                        }),
                        type: "title",
                        value: v.formatMessage(l.titleMessage)
                    };
                if (b.push(y), !d && !m) {
                    let e = (0, a(674880).fd)({
                        environment: n,
                        spaceStore: r,
                        agentMessageKey: "post_onboarding_tips",
                        instructions: (0, a(247438).x9d)(s)
                    });
                    b.push(e)
                }
                let _ = (0, a(674880).uP)({
                    environment: n,
                    spaceStore: r,
                    userStore: g,
                    displayMessage: void 0,
                    actualMessage: (0, a(247438).x9d)(d || m ? function(e) {
                        let {
                            triggerPurpose: t,
                            suppressNameInGreeting: n
                        } = e, r = `${t} The user's locale is "${a(849917).locale}". Respond in the user's language, not in English just because this prompt is in English.`;
                        return n ? `${r} The user has not set a display name yet, do not address them by name.` : r
                    }({
                        triggerPurpose: l.triggerPurpose,
                        suppressNameInGreeting: c
                    }) : "Send the proactive message described in the system instructions.")
                });
                b.push(_);
                let I = (0, a(674880).Xd)({
                        environment: n,
                        inferenceContext: {
                            userStore: g,
                            spaceStore: r,
                            spaceViewStore: i,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: void 0
                        },
                        addSteps: b,
                        surface: l.surface,
                        config: h
                    }),
                    S = (0, a(225900).N)({
                        environment: n,
                        spaceStore: r,
                        transcript: I,
                        workflowId: void 0,
                        createdSource: l.createdSource,
                        parentPointer: void 0,
                        debugOverrides: f
                    });
                return (0, a(540328).KY)(S), a(218744).default.checkGate({
                    gateName: "onboarding_oracle_thread"
                }) && function(e) {
                    var t;
                    let {
                        environment: n,
                        oracleThreadType: r,
                        threadId: i
                    } = e, o = a(728372).AppStoreSidebarSpaceViewStore.state;
                    if (!o) return;
                    let l = (null == (t = o.getSettings()) ? void 0 : t.oracle_thread_configs) ? ? {},
                        s = o.getSpaceId();
                    a(377796).createAndCommit({
                        environment: n,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        userAction: "createOracleThread.registerThread",
                        canUndo: !0,
                        perform: e => {
                            (0, a(421439).y4)({
                                store: o,
                                operation: {
                                    pointer: o.pointer,
                                    path: ["settings"],
                                    command: "update",
                                    args: { ...o.getSettings(),
                                        oracle_thread_configs: { ...l,
                                            [r]: {
                                                thread_id: i
                                            }
                                        }
                                    }
                                },
                                transaction: e
                            })
                        }
                    })
                }({
                    environment: n,
                    oracleThreadType: o,
                    threadId: S.id
                }), S
            }
        },
        941670: (e, t, a) => {
            e.exports = a.p + "e1d65fd069908905.png"
        },
        957056: (e, t, a) => {
            a.d(t, {
                A: () => o,
                T: () => l
            });
            var n = a(296540),
                r = a(474848);

            function i(e = "https://app.cal.com/embed/embed.js") {
                var t;
                let a, n;
                return t = window, a = function(e, t) {
                    e.q.push(t)
                }, n = t.document, t.Cal = t.Cal || function() {
                    let r = t.Cal,
                        i = arguments;
                    if (r.loaded || (r.ns = {}, r.q = r.q || [], n.head.appendChild(n.createElement("script")).src = e, r.loaded = !0), "init" === i[0]) {
                        let e = function() {
                                a(e, arguments)
                            },
                            t = i[1];
                        e.q = e.q || [], "string" == typeof t ? (r.ns[t] = r.ns[t] || e, a(r.ns[t], i), a(r, ["initNamespace", t])) : a(r, i);
                        return
                    }
                    a(r, i)
                }, window.Cal
            }
            i.toString();
            let o = function(e) {
                let {
                    calLink: t,
                    calOrigin: a,
                    namespace: o = "",
                    config: l,
                    initConfig: s = {},
                    embedJsUrl: d,
                    ...c
                } = e;
                if (!t) throw Error("calLink is required");
                let u = (0, n.useRef)(!1),
                    p = function(e) {
                        let [t, a] = (0, n.useState)();
                        return (0, n.useEffect)(() => {
                            a(() => i(e))
                        }, []), t
                    }(d),
                    f = (0, n.useRef)(null);
                return (0, n.useEffect)(() => {
                    if (!p || u.current || !f.current) return;
                    u.current = !0;
                    let e = f.current;
                    o ? (p("init", o, { ...s,
                        origin: a
                    }), p.ns[o]("inline", {
                        elementOrSelector: e,
                        calLink: t,
                        config: l
                    })) : (p("init", { ...s,
                        origin: a
                    }), p("inline", {
                        elementOrSelector: e,
                        calLink: t,
                        config: l
                    }))
                }, [p, t, l, o, a, s]), p ? (0, r.jsx)("div", {
                    ref: f,
                    ...c
                }) : null
            };

            function l(e) {
                let {
                    namespace: t = "",
                    embedJsUrl: a
                } = "string" == typeof e ? {
                    embedJsUrl: e
                } : e ? ? {};
                return new Promise(function e(n) {
                    let r = i(a);
                    r("init", t);
                    let o = t ? r.ns[t] : r;
                    o ? n(o) : setTimeout(() => {
                        e(n)
                    }, 50)
                })
            }
        },
        960831: (e, t, a) => {
            a.d(t, {
                j: () => n
            });

            function n(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.setOverlay) ? void 0 : t.call(a(775657).electronApi, e)
            }
        },
        965967: (e, t, a) => {
            e.exports = a.p + "d15ce47ef6ddf83d.png"
        },
        966559: (e, t, a) => {
            a.r(t), a.d(t, {
                exclamationMarkCircleSmallIcon: () => i,
                iconDefinition: () => r
            }), a(296540);
            var n = a(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, n.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                i = (0, a(104509).wt)("exclamationMarkCircleSmall", r, "small")
        },
        970878: (e, t, a) => {
            e.exports = a.p + "082999214c472fe4.png"
        },
        976298: (e, t, a) => {
            a.d(t, {
                $0: () => c,
                Fx: () => b,
                Ge: () => l,
                I3: () => i,
                Kj: () => m,
                PP: () => v,
                TK: () => y,
                Yy: () => r,
                aE: () => _,
                cQ: () => h,
                kH: () => s,
                m7: () => o,
                nq: () => f,
                nv: () => u,
                tj: () => d
            }), a(898992), a(354520), a(737550);
            let n = {
                    checkbox: !0,
                    date: !0,
                    email: !0,
                    multi_select: !0,
                    number: !0,
                    person: !0,
                    phone_number: !0,
                    relation: !0,
                    select: !0,
                    status: !0,
                    text: !0,
                    title: !0,
                    url: !0,
                    auto_increment_id: !1,
                    button: !1,
                    created_by: !1,
                    created_time: !1,
                    file: !1,
                    formula: !1,
                    last_edited_by: !1,
                    last_edited_time: !1,
                    last_visited_time: !1,
                    location: !1,
                    rollup: !1,
                    verification: !1,
                    place: !1
                },
                r = {
                    checkbox: [{
                        type: "checkbox"
                    }, {
                        type: "undefined"
                    }],
                    date: [{
                        type: "date"
                    }, {
                        type: "undefined"
                    }],
                    email: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    multi_select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    number: [{
                        type: "number"
                    }, {
                        type: "undefined"
                    }],
                    person: [{
                        type: "person"
                    }, { of: {
                            type: "person"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    phone_number: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }],
                    relation: [{
                        type: "block"
                    }, { of: {
                            type: "block"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    select: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    status: [{
                        type: "text"
                    }, { of: {
                            type: "text"
                        },
                        type: "array"
                    }, {
                        type: "undefined"
                    }],
                    text: void 0,
                    title: void 0,
                    url: [{
                        type: "text"
                    }, {
                        type: "undefined"
                    }]
                };

            function i(e) {
                return !!(n[e.type] && !(0, a(425985).U)(e) && (!(0, a(9247).$M)(e) || void 0 === (0, a(9247).om)(e)))
            }

            function o(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: r,
                    sort: o,
                    sourcePropertyIds: l
                } = e, s = (l ? ? (0, a(722371).objectKeys)(n)).filter((t, o, l) => {
                    let s = n[t];
                    return !(!s || !i(s) || "relation" === s.type && e.restrictCrossSpace && (0, a(226989).o)(e.spaceId, s)) && (!r || r([t, s], o, n))
                });
                if (0 === s.length) return [];
                if (!t || !1 === o) return s;
                let d = (0, a(944940).L)(t, n, void 0, a(565546).jf.Page).collection_page_properties || [];
                return a(381453).Ul(s, e => d.findIndex(t => t.property === e))
            }

            function l(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    sort: r
                } = e, i = (0, a(722371).objectKeys)(n).filter((e, t, r) => {
                    let i = n[e];
                    return !!i && !!(0, a(568249).J)(i)
                });
                if (0 === i.length) return [];
                if (!t || !1 === r) return i;
                let o = (0, a(944940).L)(t, n, void 0, a(565546).jf.Page).collection_page_properties || [];
                return a(381453).Ul(i, e => o.findIndex(t => t.property === e))
            }

            function s(e) {
                if (e.type === a(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === a(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === a(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === a(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === a(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === a(944897).uW.LibraryFunctionExecutionError) return {
                    type: e.type,
                    error: e.error,
                    libraryFunctionName: e.libraryFunction.name,
                    errorSource: e.errorSource
                };
                return "errorSource" in e ? {
                    type: e.type,
                    errorSource: e.errorSource
                } : {
                    type: e.type
                }
            }
            let d = {
                checkbox: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                button: !1,
                file: !1,
                verification: !1,
                auto_increment_id: !1,
                created_by: !1,
                created_time: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                place: !1
            };

            function c(e) {
                return !!d[e.type]
            }

            function u(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: n,
                    filter: r,
                    sort: i
                } = e, o = (0, a(722371).objectKeys)(n).filter((e, t, i) => {
                    var o;
                    let l = n[e];
                    return !(!l || !d[l.type] || (0, a(9247).$M)(l) && null != (o = (0, a(9247).om)(l)) && o.auto_update_on_edit) && (!r || r([e, l], t, n))
                });
                if (0 === o.length) return [];
                if (!t || !1 === i) return o;
                let l = (0, a(944940).L)(t, n, void 0, a(565546).jf.Page).collection_page_properties || [];
                return a(381453).Ul(o, e => l.findIndex(t => t.property === e))
            }
            let p = {
                checkbox: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                auto_increment_id: !1,
                button: !1,
                created_by: !1,
                created_time: !1,
                date: !1,
                file: !1,
                formula: !1,
                last_edited_by: !1,
                last_edited_time: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function f(e) {
                return p[e.type]
            }
            let g = {
                checkbox: !0,
                created_by: !0,
                created_time: !0,
                date: !0,
                email: !0,
                multi_select: !0,
                number: !0,
                person: !0,
                phone_number: !0,
                relation: !0,
                select: !0,
                status: !0,
                text: !0,
                title: !0,
                url: !0,
                last_edited_by: !0,
                last_edited_time: !0,
                auto_increment_id: !1,
                button: !1,
                file: !1,
                formula: !1,
                last_visited_time: !1,
                location: !1,
                rollup: !1,
                verification: !1,
                place: !1
            };

            function m(e) {
                return g[e.type]
            }

            function h(e) {
                return 0 === e
            }

            function b(e) {
                return "button_block" === e || "button_property" === e
            }

            function v(e) {
                let {
                    property: t,
                    collectionSchema: a
                } = e;
                return !!a && !a[t]
            }

            function y(e) {
                let {
                    collectionSchema: t,
                    property: a,
                    type: n
                } = e, r = null == t ? void 0 : t[a];
                return !r || ("action" === n ? !i(r) : !d[r.type])
            }

            function _({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: n,
                        pagePropertiesEdited: r,
                        source: i
                    } = e.event;
                    if (void 0 === i) return !1;
                    let o = "some" === r.type && r.some,
                        l = "all" === r.type && r.all;
                    if ((o || l || []).some(e => v({
                            collectionSchema: t,
                            property: e.property
                        }) || y({
                            collectionSchema: t,
                            property: e.property,
                            type: "trigger"
                        }))) return !1;
                    let s = "some" === r.type && (!(0, a(722371).O9)(r.some) || 0 === r.some.length),
                        d = "all" === r.type && (!(0, a(722371).O9)(r.all) || 0 === r.all.length);
                    if (!n && ("none" === r.type || s || d)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        },
        989068: (e, t, a) => {
            async function n(e) {
                var t;
                return null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (t = a(775657).electronApi.checkLocaleSupport) ? void 0 : t.call(a(775657).electronApi, e)
            }
            a.d(t, {
                o: () => s,
                i: () => o
            }), a(296540);
            var r = a(474848);
            let i = (0, a(109939).YK)({
                title: {
                    id: "desktop.unsupportedLocale.title",
                    defaultMessage: "Language not supported on desktop"
                },
                message: {
                    id: "desktop.unsupportedLocale.message",
                    defaultMessage: "The {localeName} locale isn’t supported in this version of the desktop app. Try updating to the latest desktop version."
                }
            });
            async function o({
                locale: e,
                environment: t,
                origin: r,
                intl: l
            }) {
                var s;
                if (t.device.isElectron) {
                    let t = await n(e);
                    if ((null == t ? void 0 : t.supported) === !1) return void a(819652).HK({
                        id: "unsupported_locale",
                        title: l.formatMessage(i.title),
                        message: l.formatMessage(i.message, {
                            localeName: e
                        })
                    })
                }(0, a(195857).DO_NOT_USE_trackLegacy)("locale_changed", {
                    locale: e,
                    origin: r
                });
                let d = await t.api.callApi({
                    eventName: "setlocale",
                    environment: t,
                    data: {
                        locale: e
                    }
                });
                "success" === d.type ? (a(467008).A.set("preferredLocale", e), await a(941701).transactionQueue.drain(), t.device.isElectron) ? (null === a(775657).electronApi || void 0 === a(775657).electronApi || null == (s = a(775657).electronApi.setLocale) || s.call(a(775657).electronApi, e), (0, a(518531).F)({
                    includeFocusedWindow: !0
                })) : window.location.reload(!0) : a(647095).Qg(d)
            }

            function l(e) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(109939).tz)();
                return (0, r.jsx)(a(321412).b, {
                    id: "languageAndRegionSettingsLanguage",
                    title: (0, r.jsx)(a(109939).sA, { ...a(166863).P.language.title
                    }),
                    byline: (0, r.jsx)(a(109939).sA, { ...a(166863).P.language.description
                    }),
                    item: (0, r.jsx)(a(678064).A, {
                        confirm: !0,
                        onChange: e => o({
                            locale: e,
                            environment: t,
                            origin: "languageSettings",
                            intl: n
                        }),
                        currentLocale: e.locale,
                        origin: "languageSettings"
                    })
                })
            }

            function s(e) {
                let {
                    device: t
                } = (0, a(533992).v3)();
                return (0, a(682985).K8)(() => (0, a(405072).J)({
                    isMobileNative: t.isMobileNative,
                    isAndroid: t.isAndroid
                }), [t.isMobileNative, t.isAndroid]) ? (0, r.jsx)(a(31256).J, {}) : a(986939).A.isMobile ? null : (0, r.jsx)(l, { ...e
                })
            }
        },
        993096: (e, t, a) => {
            a.d(t, {
                FK: () => w,
                Mb: () => I,
                Wo: () => n,
                aZ: () => r,
                ze: () => S
            });
            let n = 500,
                r = 100,
                i = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                o = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                l = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                s = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                d = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "personal_ai"
                    },
                    upsell: void 0
                },
                c = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "advanced"
                    }
                },
                u = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "personal",
                        featureSet: "advanced"
                    }
                },
                p = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "ai",
                        featureSet: "core"
                    }
                },
                f = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                g = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                m = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                h = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "business"
                    },
                    upsell: void 0
                },
                b = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "ai_product"
                    },
                    upsell: void 0
                },
                v = {
                    currentState: {
                        featureSet: "advanced",
                        reason: "enterprise"
                    },
                    upsell: void 0
                },
                y = {
                    currentState: {
                        featureSet: "core",
                        reason: "ai_product"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                },
                _ = {
                    currentState: {
                        featureSet: "none"
                    },
                    upsell: {
                        product: "business",
                        featureSet: "advanced"
                    }
                };

            function I({
                billingData: e
            }) {
                let t = (0, a(192159).YF)(e),
                    n = (0, a(192159).N8)(e),
                    r = (0, a(192159).eh)(e, "plus"),
                    S = (0, a(192159).eh)(e, "business"),
                    w = (0, a(192159).eh)(e, "enterprise"),
                    x = (0, a(192159).eh)(e, "ai"),
                    k = (0, a(192159).eh)(e, "student"),
                    C = (0, a(192159).eh)(e, "personal");
                if (n)
                    if (x && (r || S || w)) return i;
                    else if (e && (0, a(192159).PB)(e)) return w ? o : l;
                else return s;
                if (k)
                    if (x) return f;
                    else return g;
                if (S)
                    if (x) return m;
                    else return h;
                if (w)
                    if (x) return b;
                    else return v;
                if (t)
                    if (x && C) return d;
                    else if (C && !x) return c;
                else if (x && !C) return u;
                else return p;
                else if (x) return y;
                else return _
            }

            function S({
                billingData: e
            }) {
                var t;
                return (null == (t = I({
                    billingData: e
                })) || null == (t = t.upsell) ? void 0 : t.product) === "ai"
            }

            function w(e) {
                return e * r
            }
        },
        993638: (e, t, a) => {
            a.d(t, {
                Ft: () => h,
                HN: () => f,
                MA: () => c,
                Sk: () => p,
                Yn: () => v,
                e9: () => d,
                eJ: () => b,
                g9: () => u,
                su: () => m
            }), a(944114), a(898992), a(672577), a(737550);
            let n = (0, a(109939).YK)({
                unableToCancelError: {
                    id: "midtermSubscriptionHelpers.unableToCancel",
                    defaultMessage: "We cannot cancel your scheduled changes right now. Please contact support for more help."
                },
                cancellationSuccess: {
                    id: "midtermSubscriptionHelpers.cancellationSucceeded",
                    defaultMessage: "Pending changes have been canceled"
                }
            });

            function r(e) {
                return (0, a(262166).dL)(e) ? "free" : (0, a(262166).wb)(e) ? "education" : (0, a(262166).sP)(e) ? "singlePlayerPlus" : (0, a(262166).$P)(e) ? "plus" : (0, a(262166).tL)(e) ? "business" : (0, a(262166).OX)(e) ? "enterprise" : "legacy"
            }
            let i = (0, a(109939).YK)({
                    freePlan: {
                        defaultMessage: "Free Plan",
                        id: "freePlan.title"
                    },
                    educationPlusPlan: {
                        defaultMessage: "Education Plus Plan",
                        id: "educationPlusPlan.title"
                    },
                    plusPlan: {
                        defaultMessage: "Plus Plan",
                        id: "plusPlan.title"
                    },
                    businessPlan: {
                        id: "businessPlan.title",
                        defaultMessage: "Business Plan"
                    },
                    enterprisePlan: {
                        defaultMessage: "Enterprise Plan",
                        id: "enterprisePlan.label"
                    },
                    legacyPlan: {
                        defaultMessage: "Legacy Plan",
                        id: "legacyPlan.label"
                    }
                }),
                o = {
                    free: {
                        planTitle: i.freePlan
                    },
                    singlePlayerPlus: {
                        planTitle: i.plusPlan
                    },
                    education: {
                        planTitle: i.educationPlusPlan
                    },
                    plus: {
                        planTitle: i.plusPlan
                    },
                    business: {
                        planTitle: i.businessPlan
                    },
                    enterprise: {
                        planTitle: i.enterprisePlan
                    },
                    legacy: {
                        planTitle: i.legacyPlan
                    }
                },
                l = (0, a(109939).YK)({
                    notionAI: {
                        defaultMessage: "Notion AI",
                        id: "notionAI.title"
                    },
                    removeAI: {
                        defaultMessage: "Remove AI",
                        id: "notionAI.remove.title"
                    }
                }),
                s = (0, a(109939).YK)({
                    month: {
                        defaultMessage: "Monthly billing",
                        id: "billingInterval.monthly"
                    },
                    year: {
                        defaultMessage: "Annual billing",
                        id: "billingInterval.annual"
                    }
                });

            function d() {
                return a(962299).A.formatMessage(n.unableToCancelError)
            }

            function c() {
                return a(962299).A.formatMessage(n.cancellationSuccess)
            }

            function u(e) {
                let t = (0, a(192159).pm)(null == e ? void 0 : e.subscription);
                if (!t) return;
                let n = (0, a(192159).PP)(e),
                    r = (0, a(192159).lQ)(e);
                return {
                    oldTier: (0, a(958059).Gf)(n) ? ? "free",
                    newTier: (0, a(958059).Gf)(r) ? ? "free",
                    oldAIAddOn: (0, a(958059).V_)(n).find(e => "ai" === e),
                    newAIAddOn: (0, a(958059).V_)(r).find(e => "ai" === e),
                    oldAiCreditPackQuantity: (0, a(192159).Oq)(n.items),
                    newAiCreditPackQuantity: (0, a(192159).Oq)(r.items),
                    oldInterval: (0, a(958059).yw)(n),
                    newInterval: (0, a(958059).yw)(r),
                    phaseOneEndDate: t.startDate
                }
            }

            function p(e) {
                let t = u(e);
                return !!t && !!t.newInterval && t.oldInterval !== t.newInterval
            }

            function f(e) {
                let t = u(e);
                return !!t && t.oldTier !== t.newTier
            }
            let g = (0, a(109939).YK)({
                bannerQuantityChange: {
                    defaultMessage: "Notion Credits: {oldAiCreditsQuantity} → {newAiCreditsQuantity}",
                    id: "bannerQuantityMessages.bannerQuantityChange"
                }
            });

            function m(e) {
                let t, n, i = u(e),
                    d = [];
                if (!i) return {
                    scheduledChanges: d,
                    periodEndDate: null
                };
                let {
                    newTier: c,
                    oldTier: p,
                    oldAIAddOn: f,
                    newAIAddOn: m,
                    oldAiCreditPackQuantity: h,
                    newAiCreditPackQuantity: b,
                    oldInterval: v,
                    newInterval: y,
                    phaseOneEndDate: _
                } = i;
                p !== c && d.push(function(e, t) {
                    let n = r(e),
                        i = a(962299).A.formatMessage(o[n].planTitle);
                    if (!t) return "";
                    let l = r(t),
                        s = a(962299).A.formatMessage(o[l].planTitle);
                    return `${i} ${(0,a(619157).A1)()?"←":"→"} ${s}`
                }(p, c)), f !== m && d.push((t = a(962299).A.formatMessage(f ? l.notionAI : l.removeAI), n = a(962299).A.formatMessage(m ? l.notionAI : l.removeAI), `${t} ${(0,a(619157).A1)()?"←":"→"} ${n}`));
                let I = (0, a(192159).qV)(e).isRecurring,
                    S = (0, a(192159).Le)(e).isRecurring,
                    w = I !== S;
                return (h !== b || w) && d.push(function(e) {
                    let {
                        oldAiCreditPackQuantity: t,
                        newAiCreditPackQuantity: n,
                        oldStateHasAllocatedCredits: r,
                        newStateHasAllocatedCredits: i
                    } = e, o = r ? a(993096).Wo : 0, l = i ? a(993096).Wo : 0;
                    return a(962299).A.formatMessage(g.bannerQuantityChange, {
                        oldAiCreditsQuantity: ((0, a(993096).FK)(t) + o).toLocaleString(),
                        newAiCreditsQuantity: ((0, a(993096).FK)(n) + l).toLocaleString()
                    })
                }({
                    oldAiCreditPackQuantity: h,
                    newAiCreditPackQuantity: b,
                    oldStateHasAllocatedCredits: I,
                    newStateHasAllocatedCredits: S
                })), v !== y && d.push(function(e, t) {
                    if (!e || !t) return "";
                    let n = a(962299).A.formatMessage("month" === e ? s.month : s.year),
                        r = a(962299).A.formatMessage("month" === t ? s.month : s.year);
                    return `${n} ${(0,a(619157).A1)()?"←":"→"} ${r}`
                }(v, y)), {
                    scheduledChanges: d,
                    periodEndDate: _
                }
            }

            function h(e, t) {
                var n;
                if (!e) return;
                let r = (0, a(192159).PP)(e).items,
                    i = (0, a(192159).lQ)(e).items;
                if ((0, a(192159).HO)(r, i).some(([e, n]) => (0, a(192159).IE)(e ? ? n) === t && e && !n)) return null == (n = (0, a(192159).pm)(e.subscription)) ? void 0 : n.startDate
            }

            function b({
                billingData: e
            }) {
                let t = (0, a(226309).a9)(e);
                if (!t || (0, a(192159).et)(e)) return !1;
                let n = (0, a(192159).bO)(t),
                    r = (0, a(192159).N8)(t);
                return !n && !r
            }

            function v(e) {
                let t = (0, a(192159).V9)(e),
                    n = (0, a(192159).ji)(e).length > 0;
                return !(t && a(126365).xd.includes(t)) || !!(n && a(126365).iV.includes(t)) || !1
            }
        },
        996903: (e, t, a) => {
            a.d(t, {
                i: () => n
            });

            function n(e) {
                let t = e.getSettings(),
                    n = null == t ? void 0 : t.signup_time;
                return n ? (0, a(362008).Mn)(n) : null
            }
        }
    }
]);