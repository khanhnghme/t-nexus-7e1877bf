"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [3456, 37342, 48486, 64696, 76135, 76298, 81241, 87539, 89563, 96579], {
        9774: (e, t, n) => {
            n.r(t), n.d(t, {
                COMPLETION_THROTTLE: () => o,
                PREVIEW_STEP_DELAY: () => l,
                postProcessAICreatedStores: () => u,
                showCompletionErrorWithCode: () => s,
                wrapTemporaryBlocksInList: () => c
            }), n(18107), n(967357);
            var i = () => n(749560),
                r = () => n(135674),
                a = () => n(173157);
            let o = 300,
                l = 250;

            function s(e) {
                let t = n(962299).A.getIntl();
                return 451 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.moderationError",
                        defaultMessage: "AI does not allow content that is harmful or illegal. Please revise your input and try again. (451)"
                    })
                }) : 413 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.promptOrAttachmentTooLarge",
                        defaultMessage: "Query or attachment is too large. Please revise your input and try again. (413)"
                    })
                }) : 502 === e || 503 === e || 504 === e ? n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.providerError",
                        defaultMessage: "We’re experiencing issues with our AI provider. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                }) : void n(436555).D6({
                    label: t.formatMessage({
                        id: "completionActions.genericError",
                        defaultMessage: "AI is temporarily unavailable. Try again in a few minutes. ({errorCode})"
                    }, {
                        errorCode: e
                    })
                })
            }

            function u(e, t) {
                for (let n of t) i().In({
                    environment: e,
                    blockStore: n
                })
            }

            function c(e) {
                var t;
                let {
                    environment: i,
                    stores: o,
                    listId: l,
                    inMemoryRecordCache: s,
                    transaction: u
                } = e, c = (null == (t = o.at(0)) ? void 0 : t.getSpaceId()) ? ? u.spaceId, d = new(n(517013)).pm({
                    environment: i,
                    pointer: {
                        table: n(832375).evP,
                        id: l || (0, n(295447).Z1)({
                            environment: i,
                            table: n(832375).evP,
                            spaceId: c
                        }),
                        spaceId: c
                    },
                    recordStoreOptions: {
                        inMemoryRecordCache: s,
                        userId: i.currentUser.id
                    },
                    path: ["content"]
                });
                for (let e of o)(0, r().B)({
                    parentStore: d,
                    appendStore: e,
                    transaction: u
                }), (0, a().z)({
                    store: e,
                    data: {
                        parent_id: d.id,
                        parent_table: d.table,
                        alive: !0
                    },
                    transaction: u
                });
                return d
            }
        },
        33529: (e, t, n) => {
            n.d(t, {
                y: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    actionModels: i,
                    id: r
                } = e, a = (0, n(297493).y5)(r), o = "action" === a.source ? i.find(e => e.id === a.action_id) : void 0;
                return {
                    automationValueInfo: a,
                    collectionPointer: (0, n(722371).O9)(o) && o.isType("create_page") ? null == (t = o.getConfig()) ? void 0 : t.collection : void 0,
                    actionModel: o
                }
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
        35370: (e, t, n) => {
            n.d(t, {
                u: () => a
            }), n(296540);
            var i = n(474848);

            function r(e) {
                let t, {
                        context: r,
                        extensionMenuParent: a,
                        actionMenuListParent: o,
                        popupEvents: l,
                        displayName: s,
                        width: u,
                        initialFocus: c,
                        subActions: d
                    } = e,
                    {
                        isPhone: p
                    } = (0, n(533992).Y0)(),
                    f = (0, n(649476).Tf)();
                t = p ? f ? {
                    menuType: n(649476).gu.Modal,
                    onClickLeft: a.close,
                    left: (0, i.jsx)(n(497857).h, {}),
                    enableMobileRefresh: f,
                    paddingTop: 10,
                    title: (0, i.jsx)(n(109939).sA, { ...s
                    }),
                    ...l
                } : {
                    menuType: n(649476).gu.Modal,
                    right: (0, i.jsx)(n(109939).sA, { ...n(789722).W.done
                    }),
                    onClickRight: a.close,
                    ...l
                } : {
                    menuType: n(649476).gu.Popup,
                    width: u ? ? 220,
                    ...l
                };
                let m = (0, n(682985).K8)(() => d(r), [r, d]);
                return (0, i.jsx)(n(747369).A, { ...t,
                    children: (0, i.jsx)(n(530500).A, {
                        initialFocus: c ? ? 0,
                        context: r,
                        sections: m,
                        onAccept: o.onAccept
                    })
                })
            }

            function a(e) {
                let {
                    key: t,
                    displayName: r,
                    displayNameInterpolatedValues: a,
                    analyticsName: l,
                    validators: s,
                    subActions: u,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: d,
                    clientSkill: p,
                    fuzzySearchKeywordsArray: f,
                    disabled: m
                } = e, _ = (0, n(233319).Ls)({
                    clientSkill: p,
                    key: `extension ${t}`,
                    displayName: r,
                    displayNameInterpolatedValues: a,
                    analyticsName: l,
                    validators: s,
                    subActions: u,
                    collapseSubActionsIntoParent: c,
                    hideSubActions: d,
                    fuzzySearchKeywordsArray: f,
                    closeParentMenu: !0,
                    disabled: m,
                    action: () => {},
                    render: (t, n, r) => (0, i.jsx)(o, {
                        actionDisplayName: _.displayName,
                        args: e,
                        props: t,
                        context: n,
                        actionMenuListParent: r
                    })
                });
                return _
            }

            function o({
                actionDisplayName: e,
                args: t,
                props: a,
                context: l,
                actionMenuListParent: s
            }) {
                let {
                    displayName: u,
                    subTitle: c,
                    renderTooltip: d,
                    tooltipPlacement: p,
                    svg: f,
                    icon: m,
                    right: _,
                    rightStyle: g,
                    dontShrinkTitle: h,
                    width: v,
                    initialFocus: y,
                    subActions: b,
                    bottomSheetInitialState: S,
                    disableDefaultClick: I
                } = t, {
                    disabled: w,
                    disableTooltip: k
                } = (0, n(682985).K8)(() => {
                    var e, n;
                    return {
                        disabled: (null == (e = t.disabled) ? void 0 : e.call(t, l)) || !1,
                        disableTooltip: !d || (null == (n = t.disableTooltip) ? void 0 : n.call(t, l))
                    }
                }, [t, l, d]), x = null == c ? void 0 : c(l);
                return (0, i.jsx)(n(51831).m, {
                    content: () => (0, i.jsx)("div", {
                        style: n(233319).FG,
                        children: null == d ? void 0 : d({
                            context: l,
                            title: e
                        })
                    }),
                    disableTooltip: k,
                    placement: p,
                    children: t => (0, i.jsx)(n(816231).A, { ...a,
                        disabled: w,
                        disabledFeedback: w,
                        disableDefaultClick: I,
                        onFocus: s.onFocus,
                        renderExtension: (e, t) => (0, i.jsx)(r, {
                            context: l,
                            extensionMenuParent: t,
                            actionMenuListParent: s,
                            popupEvents: e,
                            displayName: u,
                            width: v,
                            initialFocus: y,
                            subActions: b
                        }),
                        bottomSheetInitialState: S,
                        children: (r, a) => {
                            let o = { ...(0, n(63390).A)(r, t),
                                title: x ? (0, i.jsx)(n(233319).fh, {
                                    subTitle: x,
                                    children: e
                                }) : e,
                                right: _,
                                rightStyle: g,
                                dontShrinkTitle: h
                            };
                            return f ? (0, i.jsx)(n(860287).A, { ...o,
                                svg: f,
                                ref: a
                            }) : (0, i.jsx)(n(95582).A, { ...o,
                                icon: m,
                                ref: a
                            })
                        }
                    })
                })
            }
        },
        57168: (e, t, n) => {
            n.r(t), n.d(t, {
                ClientAIChatStore: () => u,
                UserChatPreferenceLocalStorageStore: () => l,
                defaultClientAIChatStore: () => c,
                defaultLegacyThreadConfig: () => s
            });
            var i = () => n(546605);
            n(898992), n(354520), n(430670), n(803949);
            let r = "confirmed_safe_by_user",
                a = {
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
            class o extends i().Store {
                getInitialState() {
                    return a
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(a)
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
                        results: r
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [i]: {
                                agentStepId: t,
                                toolCallId: n,
                                results: r
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
                    let r = i.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== n);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
                                stagedInferenceTranscriptSteps: r
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
                    var t, n;
                    let {
                        fileUrl: i
                    } = e, a = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!a) return;
                    let o = a.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === i);
                    if (o < 0) return;
                    let l = a.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== l.type) return;
                    let s = null != (n = l.metadata) && n.guardrail ? { ...l.metadata.guardrail,
                            attachmentRisk: r
                        } : {
                            attachmentRisk: r
                        },
                        u = { ...l,
                            metadata: { ...l.metadata ? ? {},
                                guardrail : s
                            }
                        },
                        c = [...a.stagedInferenceTranscriptSteps];
                    c[o] = u, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...a,
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
            let l = new(n(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: n(274919).Bq,
                    important: !0,
                    trackingType: "preference"
                }),
                s = {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                };
            class u extends i().Store {
                getInitialState() {
                    return {
                        showHistory: !1,
                        showDebug: !1,
                        loading: !1,
                        configForNewTranscripts: s,
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
                    } = this.state, n = { ...t
                    };
                    delete n[e], this.setState({ ...this.state,
                        threadRegistry: n
                    })
                }
            }
            let c = new u;
            (0, n(202146).exposeDebugValue)("clientAiChatStore", c)
        },
        59579: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e, t) {
                let i = {
                    id: "",
                    key: t,
                    type: "static",
                    category: n(292609).lU[t].category,
                    props: {}
                };
                (0, n(466290).K)(e, i)
            }
        },
        79268: (e, t, n) => {
            n.d(t, {
                C: () => r
            });
            var i = n(296540);

            function r({
                upsell: e,
                source: t,
                buttonDisplayType: a,
                onClickBeforeUpgradeAction: o,
                postUpgradeCallback: l,
                spaceStore: s
            }) {
                let u = (0, n(533992).v3)(),
                    c = (0, n(855021).q)(),
                    d = (0, n(226309)._3)({
                        spaceId: null == s ? void 0 : s.id
                    }),
                    p = (0, n(345776).T)(),
                    {
                        campaign: f,
                        loading: m
                    } = (0, n(435276).V)(t),
                    [_, g] = function(e) {
                        let {
                            upsell: t
                        } = e, r = (0, n(533992).v3)(), a = (0, n(972740).L)(), o = (0, n(993077).U2)(), l = null == a ? void 0 : a.id, s = (0, n(345776).T)(), u = (0, n(226309).lh)({
                            spaceId: l
                        }), c = (null == t ? void 0 : t.type) === "product" ? t.product : void 0, d = (0, n(682985).K8)(() => {
                            if (l) return n(477870).L.getData(r, {
                                spaceId: l
                            })
                        }, [r, l]), p = (0, n(682985).K8)(() => (0, n(966458).Jg)({
                            product: c,
                            userId: s,
                            billingData: u,
                            spaceStore: a,
                            spaceUserStore: o,
                            existingRequests: d
                        }), [c, s, u, a, o, d]), [f, m] = (0, i.useState)(p);
                        return (0, i.useEffect)(() => {
                            m(p)
                        }, [p]), [f, m]
                    }({
                        upsell: e ? ? {
                            type: "none"
                        }
                    }),
                    h = (0, n(682985).K8)(() => e ? (0, n(96495).a)({
                        environment: u,
                        upsell: e,
                        spaceStore: s,
                        salesStatus: c,
                        campaign: f,
                        requestState: _,
                        billingData: d,
                        source: t,
                        loading: m
                    }) : {
                        status: "not_eligible",
                        reason: "feature_not_upsellable"
                    }, [s, u, e, c, f, _, d, t, m]),
                    v = (0, i.useCallback)(async () => {
                        if (!e) return;
                        let i = "product" === e.type ? e.product : void 0,
                            r = (0, n(555676).x)();
                        if (!r) return;
                        let [, {
                            getUpgradeSystemAction: c
                        }] = await Promise.all([null == o ? void 0 : o(), r()]), m = c(h);
                        await m({
                            source: t,
                            spaceStore: s,
                            product: i,
                            billingData: d,
                            environment: u,
                            setRequestState: g,
                            userId: p,
                            buttonDisplayType: a,
                            postUpgradeCallback: l,
                            campaign: f,
                            isEligibleForAgentBusinessTrial: "ai_agent" === t && "product" === e.type && "preferred" === e.trialability
                        })
                    }, [e, o, h, t, s, d, u, g, p, a, l, f]);
                return {
                    upgradeEligibility: h,
                    handleClick: v
                }
            }
        },
        90416: (e, t, n) => {
            n.d(t, {
                CT: () => o,
                K_: () => s,
                Mi: () => i,
                uv: () => a,
                zL: () => l,
                zj: () => r
            });
            let i = ["database_agents", "database_agent_autofill_button", "database_agent_run_dropdown", "database_agent_fill_rows", "database_agent_fill_all", "database_agent_preview_generate", "database_agent_edit_modal_toggle", "database_agent_setup_menu_item"],
                r = ["ai_unified_find_search_modal", "ai_unified_find_chat", "ai_chat_with_model", "ai_assistant_limit_in_app", "ai_autofill_fill_all_pages", "ai_autofill_bulk_fill", "ai_autofill_on_page_edit", "ai_autofill_try_on_view", "ai_limit_in_app", "ai_limit_property_autofill", "ai_limit_sidebar", "ai_limit_settings", "ai_limited_qna_no_results", "ai_limited_qna_upsell_action_button", "ai_qna_waitlist", "ai_qna_limit_in_app", "ai_upsell_notice", "ai_upsell_settings", "ai_page_translation", "ai_plans_page", "ai_formulas"],
                a = ["ai_research_mode"],
                o = ["ai_meeting_notes", "ai_meeting_notes_custom_transcript_retention"],
                l = ["ai_agent"],
                s = ["custom_agent", "custom_agents_sidebar", "new_custom_agents_sidebar", "new_custom_agents_library", "slippery_slope_flyout_menu", "custom_agents_launch_modal", "custom_agents_gift_box", "marketplace_agents"]
        },
        91790: (e, t, n) => {
            n.r(t), n.d(t, {
                iconDefinition: () => i,
                lightBulbBrightIcon: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.96 2 10.08 15.99",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M12.21 13.71c-.34 0-.62-.28-.62-.62 0-1.31.7-2.45 1.32-3.46.12-.2.24-.39.36-.58.34-.58.53-1.3.53-2.06 0-2.06-1.7-3.73-3.79-3.73S6.22 4.93 6.22 6.99c0 .76.18 1.47.53 2.06.11.19.23.39.35.58l.023.037c.614 1 1.307 2.129 1.297 3.423 0 .34-.24.61-.63.62-.35 0-.62-.28-.62-.63 0-.96-.55-1.85-1.14-2.8q-.091-.15-.185-.3-.095-.15-.185-.3c-.46-.78-.7-1.71-.7-2.69 0-2.74 2.26-4.98 5.04-4.98s5.04 2.23 5.04 4.98c0 .98-.24 1.92-.7 2.69-.12.2-.24.4-.37.61-.59.95-1.14 1.84-1.14 2.8 0 .34-.28.62-.62.63zm-1.26 4.28h-1.9c-.35 0-.62-.28-.62-.62s.28-.62.62-.62h1.9c.34 0 .62.28.62.62s-.28.62-.62.62M8.1 15.85h3.8c.34 0 .62-.28.62-.62s-.28-.62-.62-.62H8.1c-.34 0-.62.28-.62.62s.27.62.62.62"
                    })
                },
                r = (0, n(104509).wt)("lightBulbBright", i, "default")
        },
        96495: (e, t, n) => {
            n.d(t, {
                a: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    upsell: i,
                    spaceStore: r,
                    salesStatus: a,
                    campaign: o,
                    requestState: l,
                    billingData: s,
                    source: u,
                    loading: c
                } = e;
                if (c) return {
                    status: "loading"
                };
                let d = (0, n(875472).sO)(o);
                if ("none" === i.type) return {
                    status: "not_eligible",
                    reason: "feature_not_upsellable"
                };
                if ((0, n(916804).I)(r)) return {
                    status: "not_eligible",
                    reason: "guest"
                };
                let p = i.product,
                    {
                        addOnFeature: f
                    } = (0, n(269612).p)({
                        billingData: s,
                        product: p
                    });
                if (!(0, n(192159).Gm)(s) && ["block_limit_sidebar", "block_limit_settings", "block_limit_banner", "database_chart_paywall", "delete_blocks_modal", "slash_menu", "out_of_blocks_toast", "forms_increase_file_limit", "forms_notion_branding", "forms_customize_settings"].includes(u) && !f) return {
                    status: "eligible_to_purchase",
                    reason: "plans_page_redirect"
                };
                let m = function(e) {
                    let {
                        product: t,
                        environment: i,
                        spaceStore: r
                    } = e;
                    if ((0, n(832139).A)()) return {
                        status: "not_eligible",
                        reason: "samsung_purchases_not_supported"
                    };
                    let a = (0, n(663842).m)({
                        environment: i
                    }) && ("personal" === t || "ai" === t);
                    return a && r && (0, n(471078).O)({
                        environment: i,
                        spaceId: r.id
                    }) ? {
                        status: "not_eligible",
                        reason: "mobile_multi_member_workspace"
                    } : i.device.isMobileNative ? "ai" !== t || (0, n(907620).T)("supportsAiIAP") ? a ? {
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
                    spaceStore: r
                });
                return m || ((null == s ? void 0 : s.provider) === "app_store" || (null == s ? void 0 : s.provider) === "play_store" ? {
                    status: "not_eligible",
                    reason: "subscribed_via_in_app_purchase"
                } : "unrequested" === l ? {
                    status: "eligible_to_request"
                } : "pending" === l ? {
                    status: "request_pending"
                } : "sales_assisted" === a ? {
                    status: "sales_assisted"
                } : (0, n(262166).h0)(p) && "sales_eligible" === a ? {
                    status: "sales_eligible"
                } : null != r && r.canAdmin() ? (0, n(192159).bO)((0, n(226309).a9)(s)) ? {
                    status: "not_eligible",
                    reason: "unverified_payment"
                } : "preferred" === i.trialability && (null == d ? void 0 : d.type) === "trial" && d.subscriptionTier === i.product ? {
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
        124094: (e, t, n) => {
            n.d(t, {
                E: () => s,
                Z: () => u
            });
            var i = () => n(889089);
            let r = {
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
            var a = () => n(617995),
                o = () => n(705820);
            async function l(e) {
                var t;
                let {
                    campaign: i,
                    eligibleCampaigns: r
                } = e;
                if (!r.includes(i)) return !1;
                await (0, n(591083).yc)().catch(() => void 0);
                let a = (0, n(591083).v7)(),
                    o = null == a || null == (t = a[i]) ? void 0 : t.statsigDetails;
                return !!o && (await n(218744).default.waitUntilStatsigReadyAsync(), (0, n(134213).l)({
                    experimentService: n(218744).default,
                    statsigDetails: o
                }).isEligible)
            }
            async function s(e, t, n) {
                let s, u = function(e) {
                    if (r.hasOwnProperty(e)) return r[e]
                }(n);
                if (u)
                    for (let n of u) {
                        if ((0, i().w)(n)) {
                            if (s || (s = await o().P.awaitData(e, {
                                    spaceId: t
                                }) ? ? []), await l({
                                    campaign: n,
                                    eligibleCampaigns: s
                                })) return n;
                            continue
                        }
                        let r = await a().I.awaitData(e, {
                            spaceId: t,
                            offerCampaign: n
                        });
                        if ((null == r ? void 0 : r.campaign) === n) return n
                    }
            }

            function u({
                environment: e,
                spaceName: t,
                campaign: i,
                entrypoint: r
            }) {
                if (t) switch (i) {
                    case "resurrection_offer":
                    case "business_resurrection_offer":
                        (0, n(104310).u)({
                            event: {
                                eventName: "offer_viewed",
                                eventProperties: {
                                    offer_campaign: i,
                                    entrypoint: r
                                }
                            }
                        })
                }
            }
        },
        128817: (e, t, n) => {
            function i(e, t, i) {
                var r;
                let a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a) return;
                let o = null == (r = a.getSettings()) ? void 0 : r.tutorials;
                i ? (0, n(862759).m)({
                    userSettingsStore: a,
                    transaction: i,
                    data: {
                        tutorials: { ...o,
                            [t]: (0, n(752153).i9)(a, t)
                        }
                    }
                }) : d({
                    userAction: "TutorialActions.nextStep",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                tutorials: { ...o,
                                    [t]: (0, n(752153).i9)(a, t)
                                }
                            }
                        })
                    },
                    userId: a.id
                })
            }

            function r(e, t) {
                var i;
                let r = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!r) return;
                let a = null == (i = r.getSettings()) ? void 0 : i.tutorials;
                d({
                    userAction: "TutorialActions.prevStep",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                tutorials: { ...a,
                                    [t]: (0, n(752153).KD)(r, t)
                                }
                            }
                        })
                    },
                    userId: r.id
                })
            }

            function a(e, t) {
                var i;
                let r = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!r) return;
                let a = null == (i = r.getSettings()) ? void 0 : i.tutorials;
                (null == a ? void 0 : a[t]) !== n(212169).YD && d({
                    userAction: "TutorialActions.dismissTutorial",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: r,
                            transaction: e,
                            data: {
                                tutorials: { ...a,
                                    [t]: n(212169).YD
                                }
                            }
                        })
                    },
                    userId: r.id
                })
            }

            function o(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                t && d({
                    userAction: "TutorialActions.resetTutorialsDebug",
                    environment: e,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: t,
                            transaction: e,
                            data: {
                                tutorials: {}
                            }
                        })
                    },
                    userId: t.id
                })
            }

            function l(e, t, i) {
                var r;
                let a = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!a || (0, n(752153).x$)(a, t)) return;
                let o = (0, n(752153).gt)(a, t);
                n(212169).c$[t].steps.findIndex(e => e.id === o) >= n(212169).c$[t].steps.findIndex(e => e.id === i) || (0, n(862759).m)({
                    userSettingsStore: a,
                    transaction: e,
                    data: {
                        tutorials: { ...null == (r = a.getSettings()) ? void 0 : r.tutorials,
                            [t]: i
                        }
                    }
                })
            }

            function s(e, t, i) {
                if ((0, n(752153).ll)(i)) return;
                let r = (0, n(752153).tb)(t, i);
                r && l(e, t, r)
            }

            function u(e) {
                var t;
                let {
                    environment: i,
                    tutorialId: r,
                    tutorialStepId: a,
                    transaction: o
                } = e, l = n(728372).AppStoreCurrentUserSettingsStore.state;
                if (!l) return;
                let s = null == (t = l.getSettings()) ? void 0 : t.tutorials;
                o ? (0, n(862759).m)({
                    userSettingsStore: l,
                    transaction: o,
                    data: {
                        tutorials: { ...s,
                            [r]: a
                        }
                    }
                }) : d({
                    userAction: "TutorialActions.nextStep",
                    environment: i,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: l,
                            transaction: e,
                            data: {
                                tutorials: { ...s,
                                    [r]: a
                                }
                            }
                        })
                    },
                    userId: l.id
                })
            }

            function c(e) {
                let t = n(728372).AppStoreCurrentUserSettingsStore.state;
                return !!t && (0, n(752153).x$)(t, e)
            }

            function d(e) {
                return (0, n(377796).createAndCommit)({ ...e,
                    canUndo: !1,
                    cellTarget: "main"
                })
            }
            n.r(t), n.d(t, {
                checkIsTutorialDone: () => c,
                dismissTutorial: () => a,
                resetTutorials: () => o,
                tutorialAdvanceToStep: () => l,
                tutorialAdvanceToStepAfter: () => s,
                tutorialGoToNextStep: () => i,
                tutorialGoToPrevStep: () => r,
                tutorialGoToStep: () => u
            })
        },
        173231: (e, t, n) => {
            n.d(t, {
                hS: () => c,
                o2: () => d,
                js: () => o,
                Oe: () => l,
                Le: () => u,
                F6: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(430670), n(581454), n(296540);
            var i = n(474848);
            let r = (0, n(109939).YK)({
                    moreOptions: {
                        id: "action.moreOptions",
                        defaultMessage: "More options"
                    }
                }),
                a = (0, n(109939).YK)({
                    mixedBlocks: {
                        id: "actionMenuHelpers.mixedBlocks.title",
                        defaultMessage: "{count, plural, one {{count} block} other {{count} blocks}}"
                    }
                });

            function o(e) {
                return s(e).groupedSections
            }

            function l(e) {
                let t = s(e);
                return t.rankedActions.map(e => ({
                    action: e,
                    section: t.actionSectionMap.get(e)
                }))
            }

            function s(e) {
                let t = n(962299).A.getIntl(),
                    {
                        sections: o,
                        context: l,
                        query: s,
                        shouldShowBlockTypeTitle: u
                    } = e,
                    c = s.trim().toLowerCase();
                c.startsWith("/") && (c = c.slice(1));
                let f = d(o, l).map((e, o) => {
                    var s, c;
                    let {
                        actions: d,
                        title: p
                    } = e, f = d.length - 5;
                    if (e.shouldShowMoreOptions && f > 1) {
                        let e = (s = d.slice(5), (0, n(35370).u)({
                            key: "more options",
                            displayName: r.moreOptions,
                            analyticsName: r.moreOptions.defaultMessage,
                            svg: n(397900).ellipsisIcon,
                            validators: [],
                            subActions: () => [{
                                key: 0,
                                title: void 0,
                                render: e => (0, i.jsx)(n(844565).A, { ...e
                                }),
                                actions: s
                            }]
                        }));
                        d = [...d.slice(0, 5), e]
                    }
                    let m = l.blocks[0];
                    if (m) {
                        let e = m.getType();
                        if (u && e && 0 === o) {
                            let i = l.blocks.every(t => t.getType() === e) ? (0, n(495734).Z)(e) : a.mixedBlocks;
                            if (i) {
                                p = t.formatMessage(i, {
                                    count: l.blocks.length
                                });
                                let e = null == (c = n(496704).K.findCollectionViewBlockFromStore(m)) ? void 0 : c.collectionContextStore.getViewType();
                                if (e) {
                                    let t = n(799514).to[e];
                                    t && (p += ` \xb7 ${t}`)
                                }
                            }
                        }
                    }
                    return { ...e,
                        actions: d,
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
                let m = (function(e, t) {
                        let n = [];
                        for (let i of e) {
                            let e = { ...i,
                                actions: []
                            };
                            for (let r of i.actions)
                                if (p(r, t))
                                    if (r.subActions) {
                                        let a = d(r.subActions(t), t);
                                        if (r.hideSubActions) {
                                            e.actions.push(r);
                                            continue
                                        }
                                        if (r.collapseSubActionsIntoParent) {
                                            for (let t of a)
                                                for (let n of t.actions) e.actions.push(n);
                                            continue
                                        }
                                        for (let e of a.map(e => ({ ...e,
                                                key: `${i.key} ${r.key} ${e.key}`,
                                                title: e.title || r.displayName,
                                                searchTitle: [r.searchName || r.displayName, e.searchTitle || e.title].filter(Boolean).join(" ")
                                            }))) n.push(e)
                                    } else e.actions.push(r);
                            e.actions.length && n.push(e)
                        }
                        return n
                    })(o, l).map(e => ({ ...e,
                        actions: e.actions.map(t => {
                            let n = t.searchName || t.displayName || "",
                                i = [n, e.searchTitle || e.title || "", n].join(" ");
                            return { ...t,
                                searchName: i
                            }
                        })
                    })),
                    _ = [],
                    g = new Map;
                for (let e of m)
                    for (let t of e.actions) g.set(t, e), _.push(t);
                let h = (0, n(821048).Ay)(c, _, e => e.searchName || "", {
                        minScore: 25,
                        getSortScore: e => -e.score * (e.original.sortScoreMultiplier ? ? 1)
                    }),
                    v = new Set(h),
                    y = _.filter(e => !!e.alwaysShowInSearch && !v.has(e)),
                    b = [...y.filter(e => "start" === e.alwaysShowInSearch), ...h, ...y.filter(e => "end" === e.alwaysShowInSearch)],
                    S = n(381453).$z(b, e => {
                        let t = g.get(e);
                        if (t) return t.title
                    }),
                    I = [];
                for (let e of Object.keys(S)) {
                    let t = S[e],
                        n = g.get(t[0]);
                    n && I.push({ ...n,
                        actions: t
                    })
                }
                return {
                    groupedSections: I,
                    rankedActions: b,
                    actionSectionMap: g
                }
            }

            function u(e, t) {
                if (!t) return e;
                let n = 0,
                    i = [];
                for (let r of e) {
                    if (n >= t) break;
                    let e = r.actions.slice(0, t - n);
                    e.length > 0 && (n += e.length, i.push({ ...r,
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

            function d(e, t) {
                return c(e, e => p(e, t))
            }

            function p(e, t) {
                return null != e && (!e.validators || e.validators.every(e => e(t)))
            }
        },
        177861: (e, t, n) => {
            function i(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, n, i, r) => {
                    let a = encodeURIComponent(n),
                        o = encodeURIComponent(i),
                        l = encodeURIComponent(r),
                        s = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${a}${s}${o}${s}${l})`
                })
            }

            function r(e, t) {
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
                    for (let r of i.claims) t.has(r.id) || n.stepCitations[e].claims.push(r);
                    let r = new Set(n.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of i.artifacts) r.has(t.id) || n.stepCitations[e].artifacts.push(t)
                }
                return n
            }

            function a(e) {
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

            function o(e, t) {
                try {
                    let l = function(e) {
                            let t = [];
                            for (let n of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, i, r] = n;
                                ("claim" === i || "artifact" === i) && t.push({
                                    planKey: e,
                                    citationType: i,
                                    resourceId: r
                                })
                            }
                            return t
                        }(e),
                        s = {},
                        u = new Set;
                    for (let e of l) {
                        let {
                            planKey: l,
                            citationType: c,
                            resourceId: d
                        } = e;
                        try {
                            var n, i, r, a, o;
                            let e;
                            if (!l || !c || !d) continue;
                            let p = t.stepCitations[l];
                            if (!p) continue;
                            if ("claim" === c) {
                                let t = null == (i = p.claims) ? void 0 : i.find(e => e.id === d);
                                null != t && null != (r = t.supportingArtifactIds) && r[0] && (e = null == (a = p.artifacts) ? void 0 : a.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === c && (e = null == (o = p.artifacts) ? void 0 : o.find(e => e.id === d));
                            if (null != (n = e) && n.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", u.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), s[t] = (s[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let c = Object.values(s).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: s,
                        numCitationsShown: c,
                        citationPageIds: Array.from(u)
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
            n.d(t, {
                Mi: () => r,
                VJ: () => l,
                W6: () => a,
                y5: () => i,
                ye: () => o
            }), n(410838), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(672577), n(581454), n(908872), n(737550)
        },
        208117: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: o
                } = e;
                return r({
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: a,
                    billingData: o
                }) && !(0, n(192159).N8)(o) && !!(!a || !(0, n(556306).h)(a))
            }

            function r(e) {
                let {
                    environment: t,
                    externalOrgSummary: i,
                    spaceStore: r,
                    billingData: a
                } = e;
                if (a && (0, n(192159).N8)(a)) return !0;
                let o = null == r ? void 0 : r.id;
                return !!o && (!!(((0, n(616579).j)({
                    environment: t,
                    spaceId: o
                }) ? ? 1) > 99 || (0, n(192159).N8)(a)) || !!i && "company_employee_count" in i && parseInt(i.company_employee_count) > 99)
            }
            n.d(t, {
                H: () => r,
                q: () => i
            })
        },
        212169: (e, t, n) => {
            n.d(t, {
                Ud: () => o,
                YD: () => a,
                c$: () => i,
                q_: () => r
            });
            let i = {
                    "sprints-onboarding": {
                        steps: [{
                            id: "current-sprint-view-tooltip"
                        }, {
                            id: "sprint-task-tooltip"
                        }, {
                            id: "complete-sprint-button-tooltip"
                        }]
                    },
                    "enhanced-qna-onboarding": {
                        steps: [{
                            id: "find-in-tooltip"
                        }, {
                            id: "mention-tooltip"
                        }]
                    },
                    "jira-sync-onboarding": {
                        steps: [{
                            id: "all-projects-tooltip"
                        }, {
                            id: "all-issues-tooltip"
                        }, {
                            id: "database-views-and-filters-tooltip"
                        }, {
                            id: "settings-to-setup-projects-and-issues"
                        }]
                    },
                    "project-management-import-onboarding": {
                        steps: [{
                            id: "your-teamspace-tooltip"
                        }, {
                            id: "all-projects-tooltip"
                        }, {
                            id: "navigate-to-project-tasks-tooltip"
                        }, {
                            id: "project-customization-tooltip"
                        }, {
                            id: "related-tasks-database-views-tooltip"
                        }]
                    },
                    "ai-comment-onboarding": {
                        steps: [{
                            id: "ai-comment-onboarding-tooltip"
                        }]
                    },
                    database_onboarding: {
                        steps: [{
                            id: "database_onboarding_status_property_tooltip"
                        }, {
                            id: "database_onboarding_add_property_tooltip"
                        }, {
                            id: "database_onboarding_database_page_tooltip"
                        }, {
                            id: "database_onboarding_board_view_tooltip"
                        }]
                    },
                    "new-user-home-workspace-tour": {
                        steps: [{
                            id: "teamspaces"
                        }]
                    }
                },
                r = "completed",
                a = "dismissed";

            function o(e, t) {
                return null == t ? void 0 : t[e]
            }
        },
        225900: (e, t, n) => {
            n.d(t, {
                N: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    transcript: r,
                    parentPointer: a,
                    threadId: o,
                    workflowId: l,
                    createdSource: s,
                    agentMessageKey: u,
                    debugOverrides: c
                } = e, d = o ? ? (0, n(295447).Z1)({
                    environment: t,
                    table: n(298085).T,
                    spaceId: i.id
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: n(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: d,
                        transcript: r,
                        workflowId: l,
                        parentPointer: a || {
                            table: n(213003).NX,
                            id: i.id,
                            spaceId: i.id
                        },
                        createdSource: s,
                        agentMessageKey: u
                    },
                    additionalDebugOverrides: c,
                    sendPatchResponse: !0
                }), n(174148).E.createChildStore(i, {
                    id: d,
                    spaceId: i.id,
                    table: n(298085).T
                })
            }
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
        285482: (e, t, n) => {
            n.d(t, {
                A: () => i
            });

            function i(e, t) {
                if ((0, n(101787).pA8)(t)) {
                    let i = (0, n(115964).$)(t.clientData);
                    if (i) return "messageValues" in t.clientData ? e.formatMessage(i, t.clientData.messageValues) : e.formatMessage(i)
                }
                return e.formatMessage(n(683646).k.generic_error)
            }
        },
        317606: (e, t, n) => {
            n.d(t, {
                BU: () => s,
                _y: () => d,
                getAvailableWorkflowAgentModels: () => p
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            let i = (0, n(109939).YK)({
                    model: {
                        id: "aiInferenceTranscript.model",
                        defaultMessage: "{modelName}"
                    }
                }),
                r = (0, n(109939).YK)({
                    search: {
                        id: "AIModePicker.askMode.search",
                        defaultMessage: "Notion AI"
                    },
                    defaultModel: {
                        id: "AIModePicker.askMode.defaultModel",
                        defaultMessage: "Auto"
                    },
                    includesContextTitle: {
                        id: "AIModePicker.askMode.includesContextTitle",
                        defaultMessage: "Get answers about your workspace"
                    },
                    excludesContextTitle: {
                        id: "AIModePicker.askMode.excludesContextTitle",
                        defaultMessage: "Chat directly with models"
                    },
                    smallOrOpenSectionTitle: {
                        id: "AIModePicker.askMode.openSourceSectionTitle",
                        defaultMessage: "(Experimental) Small & Open Models"
                    }
                }),
                a = ["anthropic-haiku-4.5", "gingerbread"];

            function o(e) {
                let {
                    items: t,
                    getModelType: n,
                    shouldSkipSorting: i,
                    getFamily: r
                } = e;
                return t.map((e, t) => ({
                    item: e,
                    originalIndex: t
                })).sort((e, t) => {
                    if (!r) return e.originalIndex - t.originalIndex;
                    if (null != i && i(e.item) || null != i && i(t.item)) return 0;
                    let a = n(e.item),
                        o = n(t.item),
                        l = r(a),
                        s = r(o);
                    if (l !== s) {
                        if (void 0 === l && void 0 !== s) return 1;
                        if (void 0 === s && void 0 !== l) return -1;
                        if (void 0 !== l && void 0 !== s) return l.localeCompare(s)
                    }
                    return e.originalIndex - t.originalIndex
                }).map(({
                    item: e
                }) => e)
            }

            function l(e, t) {
                if (void 0 !== e && void 0 !== t && void 0 !== n(295206).P.getData(e, {
                        spaceId: t
                    })) return i => {
                    if (i) return n(295206).P.getModelFamily(e, t, i)
                }
            }

            function s(e, t, n) {
                return o({
                    items: e,
                    getModelType: e => e,
                    getSecondaryKey: e => e,
                    getFamily: l(t, n)
                })
            }

            function u(e, t, n) {
                return o({
                    items: e,
                    getModelType: e => "default" === e.askMode ? void 0 : e.askMode,
                    getSecondaryKey: e => e.title,
                    shouldSkipSorting: e => "default" === e.askMode,
                    getFamily: l(t, n)
                })
            }

            function c(e, t) {
                return t ? {
                    askMode: "default",
                    title: e.formatMessage(r.defaultModel),
                    config: {
                        type: "workflow"
                    }
                } : {
                    askMode: "default",
                    title: e.formatMessage(r.search),
                    config: {
                        type: "search",
                        scopeForNextSearch: {
                            type: "everything"
                        }
                    }
                }
            }

            function d(e) {
                let {
                    intl: t,
                    isAgentEnabled: o,
                    environment: l,
                    spaceId: s,
                    hideWorkspaceSectionTitle: d = !1,
                    workflowMode: p = "workflow"
                } = e, m = [], _ = [], g = [], h = o ? "workflow" : "search", v = f(l, s);
                if (void 0 === v) return [{
                    id: "workspace-context",
                    sectionTitle: r.includesContextTitle,
                    items: [c(t, o)],
                    configType: h,
                    isLoading: !0
                }, {
                    id: "workspace-context-excludes",
                    sectionTitle: r.excludesContextTitle,
                    items: [],
                    configType: "markdown-chat"
                }];
                v.forEach(e => {
                    let {
                        clientModel: r,
                        modelMessage: o,
                        modelFamily: l,
                        markdownChat: s,
                        workflow: u,
                        customAgent: c,
                        isDisabled: d
                    } = e, f = "custom_agent" === p ? c : u;
                    if (s && g.push({
                            askMode: r,
                            title: t.formatMessage(i.model, {
                                modelName: o
                            }),
                            config: {
                                type: "markdown-chat",
                                model: r
                            },
                            beta: s.beta,
                            isDisabled: d
                        }), "workflow" === h && void 0 !== f) {
                        let e = {
                            askMode: f.finalModelName,
                            title: t.formatMessage(i.model, {
                                modelName: o
                            }),
                            config: {
                                type: "workflow",
                                model: f.finalModelName,
                                modelFromUser: !0
                            },
                            beta: f.beta,
                            isDisabled: d
                        };
                        "mystery" === l || (0, n(722371).Xk)(a, r) ? _.push(e) : m.push(e)
                    }
                });
                let y = [{
                    id: "workspace-context",
                    sectionTitle: d ? void 0 : r.includesContextTitle,
                    items: [c(t, o), ...u(m, l, s)],
                    configType: h
                }];
                return _.length > 0 && y.push({
                    id: "small-open-experimental",
                    sectionTitle: r.smallOrOpenSectionTitle,
                    items: u(_, l, s),
                    configType: h
                }), y.push({
                    id: "workspace-context-excludes",
                    sectionTitle: r.excludesContextTitle,
                    items: u(g, l, s),
                    configType: "markdown-chat"
                }), y
            }

            function p(e, t) {
                let i = f(e, t);
                if (void 0 !== i) return new Set(i.map(e => {
                    var t;
                    return null == (t = e.workflow) ? void 0 : t.finalModelName
                }).filter(n(722371).O9))
            }

            function f(e, t) {
                if (e && t) {
                    let i = n(295206).P.getData(e, {
                        spaceId: t
                    });
                    if (!i) return;
                    let r = [];
                    return i.forEach(e => {
                        let {
                            model: t,
                            modelMessage: i,
                            modelFamily: a,
                            markdownChat: o,
                            workflow: l,
                            customAgent: s,
                            isDisabled: u
                        } = e;
                        if (!o && !l && !s) return;
                        let c = {
                            clientModel: t,
                            modelMessage: i,
                            modelFamily: (0, n(443037).jb)(a) ? a : void 0,
                            isDisabled: u
                        };
                        if (o && (c.markdownChat = {
                                beta: o.beta
                            }), l) {
                            let e = l.finalModelName;
                            (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, e) && (c.workflow = {
                                finalModelName: e,
                                beta: l.beta
                            })
                        }
                        if (s) {
                            let e = s.finalModelName;
                            (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, e) && (c.customAgent = {
                                finalModelName: e,
                                beta: s.beta
                            })
                        }
                        r.push(c)
                    }), r
                }
                return []
            }
        },
        330942: (e, t, n) => {
            n.d(t, {
                Mt: () => c,
                RM: () => s,
                dC: () => a,
                f_: () => i().f_,
                ie: () => l,
                q1: () => r,
                sQ: () => d,
                uF: () => u
            }), n(813451), n(944114), n(898992), n(354520), n(737550);
            var i = () => n(706968);

            function r(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function a(e) {
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
                    let n = "";
                    for (let i of e.value.slice(t))
                        if ("text" === i.type) n += i.content;
                        else break;
                    if (!o.exec(n)) return e;
                    let i = "",
                        r = t;
                    for (; r < e.value.length; r++) {
                        let t = e.value[r];
                        if ("text" === t.type) i += t.content;
                        else break
                    }
                    let a = [...e.value.slice(0, t), {
                        type: "text",
                        content: i.replace(o, "")
                    }, ...e.value.slice(r)];
                    return "text" === a[0].type && 0 === a[0].content.length && a.shift(), { ...e,
                        value: a
                    }
                }
                return e
            }

            function s(e, t) {
                let i = {};
                for (let t of e) "registered-tool-grouping" === t.type && (i[t.toolCallId] = t);
                let r = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = r.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let n = r[e];
                        if ("agent-transcript-summary" === n.type) {
                            let i = n.summary.trim().length > 0,
                                a = t.summary.trim().length > 0;
                            return i && !a || (r[e] = t), r
                        }
                    }
                    return r.push({ ...t
                    }), r
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, n(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) r.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === r[e].type) {
                        let n = r[e];
                        r[e] = { ...n,
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
                        let n = r[e];
                        r[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === r[e].type) {
                        let n = r[e];
                        r[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === r[e].type) {
                        let n = r[e];
                        r[e] = { ...n,
                            value: `${n.value}${t.value}`
                        }
                    } else r.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === r[e].type ? r[e] = t : r.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === r[e].type) {
                        let i = r[e];
                        r[e] = { ...i,
                            value: `${i.value}${t.value}`,
                            citationInfo: (0, n(177861).Mi)(i.citationInfo, t.citationInfo)
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
                    let e = i[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, i[t.toolCallId] = e, r.push(e));
                    let n = { ...t
                    };
                    e.steps.push(n)
                } else if ("registered-tool-grouping" === t.type) i[t.toolCallId] || (i[t.toolCallId] = t, r.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id),
                        n = r[e];
                    (null == n ? void 0 : n.type) === t.type ? r[e] = { ...n,
                        operations: [...n.operations, ...t.operations]
                    } : r.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = r.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === r[e].type ? r[e] = { ...r[e],
                        value: t.value
                    } : r.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? r.push({ ...t
                }) : (0, n(722371).HB)(t);
                return r
            }
            let u = "inferenceTranscript";

            function c(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function d(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        346596: (e, t, n) => {
            n.d(t, {
                L: () => r,
                k: () => a
            });
            var i = n(296540);

            function r(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: r
                } = (0, n(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: n(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, i.useMemo)(() => {
                    if (t && r) return n(360851).N.createChildStore(r, {
                        table: n(43296).C,
                        id: t,
                        spaceId: r.id
                    })
                }, [t, r])
            }

            function a(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    i = n(728372).AppStoreSidebarSpaceStore.state;
                if (t && i) return n(360851).N.createChildStore(i, {
                    table: n(43296).C,
                    id: t,
                    spaceId: i.id
                })
            }
        },
        357709: (e, t, n) => {
            function i(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_show",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function r(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_click",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                }), t.callout_key && n(409725).l.trackEvent("callout_click", {
                    callout_key: t.callout_key,
                    click_type: t.click_type,
                    placement_key: t.placement_key
                })
            }

            function a(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_dismiss",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function o(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_engagement",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }

            function l(e, t) {
                let {
                    eligible_callouts: i,
                    required_arg_timeout: r,
                    required_args_run_duration: a,
                    eligibility_timeouts: o,
                    blocklist: l
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_coordinator_resolved",
                        eventProperties: {
                            eligible_callouts: i,
                            required_arg_timeout: r,
                            required_args_run_duration: a,
                            eligibility_timeouts: o,
                            blocklist: l
                        }
                    }
                })
            }

            function s(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_feature_interaction",
                        eventProperties: t
                    }
                })
            }

            function u(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "callout_skipped",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                let i = (0, n(462391).h2)(t.callout_key);
                i && (t.placement_key = (0, n(462391).t9)(i)), (0, n(104310).u)({
                    event: {
                        eventName: "callout_not_shown",
                        eventProperties: { ...t,
                            callout_src: i ? "static" : "cio"
                        }
                    }
                })
            }
            n.d(t, {
                Ak: () => c,
                Cu: () => u,
                DL: () => i,
                Jb: () => o,
                Sq: () => a,
                Y5: () => r,
                gc: () => s,
                wo: () => l
            })
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
        388400: (e, t, n) => {
            n.d(t, {
                Bu: () => c,
                I8: () => u,
                qw: () => s
            }), n(898992), n(354520), n(803949);
            let i = /[\u4E00-\u9FA5]/g,
                r = /[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/g,
                a = /[\u3041-\u3096\u30A0-\u30FF\u31F0-\u31FF\u3220-\u3243\u3280-\u337F]/g,
                o = /[\u1100-\u11FF\u3130-\u318F\uA960-\uA97F\uAC00-\uD7AF\uD7B0-\uD7FF]/g,
                l = /[-./\\()"'''""，。、·～；,;<>~!@#$%^&*|+=[\]{}`~?:\s]/u;

            function s(e) {
                return (0, n(381453).oE)(e.split(l))
            }

            function u(e) {
                return "none" === c(e) ? s(e).length : e.length
            }

            function c(e, t) {
                let n = !!e.match(o);
                return e.match(i) || e.match(r) || n ? n ? "ko" : e.match(a) || "ja-JP" === t ? "ja" : "zh" : "none"
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

            function r(e = {}) {
                let t = (0, n(533992).v3)();
                return (0, n(682985).K8)(() => i({
                    environment: t,
                    disableExposureLogging: e.disableExposureLogging
                }), [t, e.disableExposureLogging])
            }
            n.d(t, {
                k: () => r,
                p: () => i
            })
        },
        406531: (e, t, n) => {
            n.d(t, {
                l: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.03 2.29 11.93 10.46",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M13.165 12.75a.8.8 0 0 0 .69-1.203L8.692 2.693a.8.8 0 0 0-1.382 0l-5.165 8.854a.8.8 0 0 0 .691 1.203z"
                    })
                },
                r = (0, n(104509).wt)("arrowCaretUpFillSmall", i, "fillSmall")
        },
        407998: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    billingData: r,
                    externalOrgSummary: a
                } = e;
                return (0, n(192159).N8)(r) ? "sales_assisted" : i && (0, n(208117).H)({
                    environment: t,
                    externalOrgSummary: a,
                    spaceStore: i,
                    billingData: r
                }) && !(0, n(556306).h)(i) ? "sales_eligible" : "self_serve"
            }
        },
        431666: (e, t, n) => {
            n.d(t, {
                i: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    collectionStore: i,
                    collectionViewStore: r,
                    property_type: a,
                    from: o,
                    property: l
                } = e;
                (0, n(33918).G)(t, {
                    property: l,
                    property_type: a,
                    from: o,
                    collection_id: null == i ? void 0 : i.id,
                    collection_view_id: null == r ? void 0 : r.id
                })
            }
        },
        432155: (e, t, n) => {
            n.d(t, {
                Af: () => S,
                Bw: () => w,
                Cs: () => m,
                Oq: () => u,
                Re: () => d,
                X4: () => c,
                YJ: () => y,
                Yc: () => l,
                ZB: () => b,
                Zd: () => I,
                d2: () => p,
                dd: () => g,
                gg: () => s,
                in: () => f,
                kQ: () => v
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(581454), n(737550);
            var i = () => n(180139),
                r = () => n(697006),
                a = () => n(832375),
                o = () => n(247438);
            let l = "reset_user_selected_model";

            function s(e) {
                let {
                    userChatPreference: t,
                    isStatsigInitialized: n,
                    shouldResetUserSelectedModel: i
                } = e;
                if (!((t.version ? ? 0) >= 1) && n) return { ...i && void 0 !== t.model ? {
                        model: void 0
                    } : {},
                    version: 1
                }
            }

            function u(e, t) {
                let i = n(57168).UserChatPreferenceLocalStorageStore.getState();
                n(57168).UserChatPreferenceLocalStorageStore.setState({ ...i,
                    [e]: { ...null == i ? void 0 : i[e],
                        ...t
                    }
                })
            }

            function c(e) {
                return e.some(e => "in_progress" === e.status)
            }

            function d(e) {
                return e.some(e => "complete" === e.status && "risky" === e.attachmentRisk)
            }

            function p(e, t) {
                let n = o().w9s(e),
                    i = ((null == t ? void 0 : t.length) ? ? 0) > 0;
                return !n || i
            }

            function f(e) {
                let t = m({
                    config: e,
                    includeWeb: !1
                });
                return 1 === t.length ? t[0] : void 0
            }

            function m(e) {
                let {
                    config: t,
                    includeWeb: i
                } = e, r = [];
                if ("search" === t.type) r.push(t.scopeForNextSearch);
                else if ("researcher" === t.type && t.searchScope) r.push(t.searchScope);
                else {
                    if ("workflow" !== t.type) return [];
                    r.push(...(0, n(548161).n_)({
                        config: t,
                        modules: []
                    }) ? ? [])
                }
                return i && t.useWebSearch && r.push({
                    type: "web"
                }), r
            }

            function _(e) {
                let {
                    botId: t,
                    spaceStore: i
                } = e, r = (0, n(203462).zf)(i.environment).getData(i.environment, {
                    spaceId: i.id
                });
                if (r)
                    for (let e of r.agents) {
                        var a;
                        let n = e.getDraftData();
                        if ((null == n || null == (a = n.runtime_actor_pointer) ? void 0 : a.table) === "bot" && n.runtime_actor_pointer.id === t) return e.id
                    }
            }

            function g(e, t, l) {
                if (!e) return [];
                let s = o().moK(e),
                    u = o().Fbh(e).map(e => ({
                        table: a().oo9,
                        id: e
                    })),
                    c = o().jgW(e);
                return [...s, ...u, ...t && l ? c.map(e => {
                    if ((0, r().ut)(e)) return {
                        table: a().C0E,
                        id: i().Lj,
                        spaceId: t.id
                    };
                    let n = _({
                        spaceStore: t,
                        botId: e
                    });
                    if (n) return {
                        table: a().C0E,
                        id: n,
                        spaceId: t.id
                    }
                }).filter(n(722371).O9) : []]
            }

            function h(e, t) {
                let i = new Set(e.map(e => n(496282).L3.toIdTableKey(e))),
                    r = new Set(t.map(e => n(496282).L3.toIdTableKey(e))),
                    a = t.filter(e => !i.has(n(496282).L3.toIdTableKey(e)));
                return {
                    added: a,
                    removed: e.filter(e => !r.has(n(496282).L3.toIdTableKey(e))),
                    unchanged: e.filter(e => r.has(n(496282).L3.toIdTableKey(e)))
                }
            }

            function v(e) {
                let t, i, {
                        currentTextMentionPointers: r,
                        inputMentionPointers: a,
                        allMentionPointers: o
                    } = e,
                    {
                        added: l
                    } = h(Array.from(o), r),
                    {
                        removed: s,
                        unchanged: u
                    } = h(a, r),
                    c = l.length > 0,
                    d = s.length > 0;
                if (c || d) {
                    let e = Array.from(o);
                    if (d) {
                        let t = new Set(s.map(e => n(496282).L3.toIdTableKey(e)));
                        e = e.filter(e => !t.has(n(496282).L3.toIdTableKey(e)))
                    }
                    c && (e = [...e, ...l]), t = e, i = [...u, ...l]
                }
                return {
                    newMentionPointers: t,
                    newInputMentionPointers: i
                }
            }

            function y(e, t) {
                return (0, n(381453).n4)(e, t)
            }

            function b(e) {
                return !!e && ("workspace" === e.type || "teamspace" === e.type || "collection" === e.type || "page" === e.type)
            }

            function S(e) {
                let {
                    currentScopes: t,
                    scope: n,
                    isMultiScopeEnabled: i
                } = e, r = [];
                if ("everything" === n.type) r = [{
                    type: "everything"
                }];
                else if (i) {
                    let e = t.filter(e => "everything" !== e.type);
                    r = e.some(e => y(e, n)) ? e.filter(e => !y(e, n)) : "notion" === n.type ? [...e.filter(e => !b(e)), n] : b(n) ? [...e.filter(e => "notion" !== e.type), n] : [...e, n]
                } else r = [n];
                return 0 === r.length ? [{
                    type: "everything"
                }] : r
            }

            function I(e, t) {
                switch (e.type) {
                    case "workflow":
                        return { ...e,
                            searchScopes: t
                        };
                    case "search":
                        return { ...e,
                            scopeForNextSearch: t[0]
                        };
                    case "researcher":
                        return { ...e,
                            searchScope: t[0]
                        };
                    default:
                        return e
                }
            }

            function w(e) {
                let {
                    token: t,
                    pointer: n,
                    spaceStore: l,
                    userStore: s
                } = e;
                if (!o().qXl(t)) return !1;
                for (let e of o().uPN(t))
                    if (n.table === a().oo9 && o().rie(e)) {
                        if (o().NcG(e) === n.id) return !0
                    } else if (n.table === a().evP && o().jIt(e)) {
                    let t = o().i$F(e);
                    if (t && t.id === n.id) return !0
                } else if (n.table === a().C0E && o().XkZ(e)) {
                    let t = o().vjW(e);
                    if (t && (0, r().ut)(t) && n.id === i().Lj || t && l && s && _({
                            spaceStore: l,
                            botId: t
                        }) === n.id) return !0
                }
                return !1
            }
        },
        432705: (e, t, n) => {
            function i(e) {
                return "event" === e || "recurrence" === e
            }

            function r(e) {
                let t = e.getTrigger();
                return (0, n(722371).O9)(t) && i(t.type)
            }

            function a(e) {
                return "event" === e ? "event" : "recurrence" === e ? "recurrence" : void(0, n(722371).HB)(e)
            }
            n.d(t, {
                $X: () => r,
                H8: () => a,
                x2: () => i
            })
        },
        435276: (e, t, n) => {
            n.d(t, {
                V: () => i
            });

            function i(e) {
                let t = (0, n(533992).v3)(),
                    i = (0, n(972740).L)(),
                    {
                        spaceId: r,
                        spaceName: a
                    } = (0, n(682985).K8)(() => i ? {
                        spaceId: i.getSpaceId(),
                        spaceName: (0, n(742197).G)(t, i)
                    } : {
                        spaceId: void 0,
                        spaceName: void 0
                    }, [t, i]),
                    [{
                        value: o,
                        status: l
                    }] = (0, n(97668).Yb)(async () => {
                        if (!r) return;
                        let i = await (0, n(124094).E)(t, r, e);
                        if (i) return a && (0, n(124094).Z)({
                            environment: t,
                            spaceName: a,
                            campaign: i,
                            entrypoint: e
                        }), i
                    }, [t, r, a, e]);
                return {
                    campaign: o,
                    loading: "pending" === l || "idle" === l
                }
            }
        },
        466290: (e, t, n) => {
            n.d(t, {
                K: () => r
            });
            var i = () => n(906745);

            function r(e, t) {
                n(696190).default.isVisible(t.key) && (n(696190).default.removeMessage(t.key), n(986939).A.isAdminMode || (! function(e, t) {
                    let r = n(728372).AppStoreCurrentUserSettingsStore.state,
                        a = null == r ? void 0 : r.getSettings();
                    if (!a || !r) return;
                    let o = new(n(543346)).GO(a.callout_placement_exposures);
                    for (let e of t) o.add(e, i().DateTime.now().toMillis());
                    (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addPlacementExposures",
                        cellTarget: "main",
                        canUndo: !0,
                        perform: e => {
                            (0, n(862759).m)({
                                userSettingsStore: r,
                                transaction: e,
                                data: {
                                    callout_placement_exposures: o.exportUserSetting()
                                }
                            })
                        }
                    })
                }(e, [(0, n(125542).Q3)(t)]), (0, n(476114).q)(e, t), n(728372).AppStoreInAppCalloutStore.state.updateCalloutStatus({
                    calloutId: t.key,
                    visible: !1
                }), (0, n(819416).Z)(e, t.key)), n(696190).default.isPendingDynamicMessage(t.key) && (0, n(740063).G)(t.key))
            }
        },
        476081: (e, t, n) => {
            n.d(t, {
                l: () => i
            });
            async function i(e) {
                var t;
                let {
                    environment: i,
                    blockStore: r,
                    rect: a,
                    property_id: o,
                    from: l
                } = e;
                if (n(332190).A.hasContent()) return void(0, n(58931)._y)({
                    environment: i,
                    reason: "starting_new"
                });
                let s = n(496704).K.getRect(r);
                if (!s) return;
                let u = new(n(478597)).A(i, (0, n(226221).e)(r.pointer.spaceId)),
                    c = s.width,
                    d = s.height,
                    p = s.right - c;
                n(332190).A.setState({
                    open: !0,
                    rect: a || new DOMRect(p, s.top, c, d),
                    type: "block",
                    content: "comment",
                    blockStore: r,
                    blockId: r.id,
                    discussionInputStore: u,
                    property_id: o,
                    lastKnownBlockStore: r,
                    from: l
                }), (0, n(661767).V)({
                    element: null == (t = n(862921).A.UpdateSidebarCommentScroller) ? void 0 : t.getNode(),
                    environment: i,
                    options: {
                        top: 0,
                        behavior: "smooth"
                    }
                }), n(827862).A.setActiveWithSource("text_annotation"), await (0, n(745990).M)({
                    discussionInputStore: u,
                    environment: i
                }), n(65255).j4(i, {
                    from: l
                })
            }
        },
        476114: (e, t, n) => {
            function i({
                environment: e,
                message: t,
                overwrite: r = !1
            }) {
                let a = n(728372).AppStoreCurrentUserSettingsStore.state,
                    o = null == a ? void 0 : a.getSettings();
                if (!a || !o) return;
                let l = new Map((o.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                (!l.has(t.key) || r) && l.set(t.key, {
                    name: t.key,
                    timestamp: n(906745).DateTime.now().toMillis()
                }), (0, n(377796).createAndCommit)({
                    environment: e,
                    userAction: "messageActions.addUserSettingsDismissal",
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, n(862759).m)({
                            userSettingsStore: a,
                            transaction: e,
                            data: {
                                callout_dismissal_timestamps: Array.from(l.values())
                            }
                        })
                    }
                })
            }

            function r(e, t) {
                let r = (0, n(125542).K0)(t);
                "once_per_user" === r ? i({
                    environment: e,
                    message: t
                }) : "once_per_space" === r && function({
                    environment: e,
                    message: t,
                    overwrite: i = !1
                }) {
                    let r = n(728372).AppStoreSidebarSpaceViewStore.state,
                        a = null == r ? void 0 : r.getSettings();
                    if (!r || !a) return;
                    let o = r.getSpaceId(),
                        l = new Map((a.callout_dismissal_timestamps ? ? []).map(e => [e.name, e]));
                    (!l.has(t.key) || i) && l.set(t.key, {
                        name: t.key,
                        timestamp: n(906745).DateTime.now().toMillis()
                    }), (0, n(377796).createAndCommit)({
                        environment: e,
                        userAction: "messageActions.addSpaceViewDismissal",
                        canUndo: !0,
                        cellTarget: o ? {
                            spaceWithId: o
                        } : void 0,
                        perform: e => {
                            n(380762).AG(r, e, {
                                callout_dismissal_timestamps: Array.from(l.values())
                            })
                        }
                    })
                }({
                    environment: e,
                    message: t
                })
            }
            n.d(t, {
                q: () => r,
                H: () => i
            }), n(581454)
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
                    r = [{
                        key: (0, n(568479).VI)(t),
                        version: -1
                    }];
                return "success" === i.type ? {
                    value: i.data.requests,
                    dependencies: i.data.dependencies ? ? r
                } : void 0
            })
        },
        512342: (e, t, n) => {
            n.d(t, {
                LB: () => a,
                VT: () => i,
                vr: () => r
            });
            let i = (0, n(109939).YK)({
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "id.completions.askAI"
                    },
                    genericHelpMeWrite: {
                        defaultMessage: "{filter}",
                        id: "id.completions.genericHelpMeWrite"
                    },
                    summarize: {
                        defaultMessage: "Summarize",
                        id: "id.completions.summarize"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "id.completions.findActionItems"
                    },
                    autofillSummary: {
                        defaultMessage: "Summary",
                        id: "id.completions.autofillSummary"
                    },
                    autofillTranslate: {
                        defaultMessage: "Translate",
                        id: "id.completions.autofillTranslate"
                    },
                    autofillExtract: {
                        defaultMessage: "Key info",
                        id: "id.completions.autofillExtract"
                    },
                    autofillCustom: {
                        defaultMessage: "Custom autofill",
                        id: "id.completions.autofillCustom"
                    }
                }),
                r = {
                    text: {
                        summarize: {
                            name: i.autofillSummary,
                            svg: n(636434).P
                        },
                        translate: {
                            name: i.autofillTranslate,
                            svg: n(740902).textTranslateIcon
                        },
                        extract: {
                            name: i.autofillExtract,
                            svg: n(774458).n
                        },
                        custom: {
                            name: i.autofillCustom,
                            svg: n(312528).x
                        }
                    },
                    select: {
                        select: {
                            name: i.autofillCustom,
                            svg: n(312528).x
                        }
                    },
                    multi_select: {
                        select: {
                            name: i.autofillCustom,
                            svg: n(312528).x
                        }
                    }
                };

            function a(e) {
                let {
                    origin: t
                } = e;
                if (t instanceof n(970831).B) {
                    let e = n(240414).T.findNodeFromStore(t);
                    return e ? ("table" === t.getType() && (e = e.querySelector(`.${n(962817).rb}.notion-table-block`) ? ? e), e.getBoundingClientRect()) : void 0
                }
                return t instanceof HTMLElement ? t.getBoundingClientRect() : t
            }
        },
        530500: (e, t, n) => {
            n.d(t, {
                A: () => s
            }), n(898992), n(354520), n(581454);
            var i = n(296540),
                r = () => n(124858),
                a = n(474848);

            function o(e) {
                return (0, a.jsx)(n(844565).A, { ...e
                })
            }
            let l = n(546605).Store.createClass(25, {
                name: "limitStore"
            });

            function s({
                topBorder: e,
                context: t,
                onAccept: u,
                onFocus: c,
                empty: d,
                keyboardPriority: p,
                disableKeyboard: f,
                initialFocus: m,
                onEmptyEnter: _,
                comboboxProps: g,
                useLimit: h,
                filter: v,
                sections: y,
                menuListStore: b,
                resetInitialFocusOnSectionChangeAlways: S,
                resetFocusOnMouseOut: I,
                role: w,
                showNoResultsMessage: k,
                onFooterEnter: x,
                filterSections: C,
                flattenSectionsOnSearch: T,
                renderItemStyles: A,
                shouldShowBlockTypeTitle: M
            }) {
                let D = (0, n(682985).uB)(void 0, l),
                    E = (0, n(682985).uB)(b, n(419110).$),
                    F = !!(T && v),
                    {
                        visibleActionSections: N,
                        actionsCount: P,
                        allActionSections: U,
                        flatActions: O
                    } = (0, n(682985).K8)(() => {
                        let e = v && C ? C : y;
                        if (F) {
                            let i = (0, n(173231).Oe)({
                                sections: e,
                                context: t,
                                query: v || "",
                                shouldShowBlockTypeTitle: M
                            });
                            return {
                                visibleActionSections: [],
                                actionsCount: i.length,
                                allActionSections: [],
                                flatActions: h ? i.slice(0, D.state) : i
                            }
                        }
                        let i = (0, n(173231).js)({
                                sections: e,
                                context: t,
                                query: v || "",
                                shouldShowBlockTypeTitle: M
                            }),
                            r = 0;
                        for (let e of i) r += e.actions.length;
                        return {
                            visibleActionSections: h ? (0, n(173231).Le)(i, D.state) : i,
                            actionsCount: r,
                            allActionSections: i,
                            flatActions: void 0
                        }
                    }, [y, t, v, h, D, C, M, F]);
                (0, i.useEffect)(() => {
                    n(764615).Ay.state.open && n(764615).rA.setState(0 === P)
                }, [P]);
                let R = (0, i.useRef)(v),
                    V = (0, i.useCallback)(e => {
                        e < 200 && D.state < P && D.setState(D.state + 25)
                    }, [D, P]),
                    B = (0, i.useMemo)(() => {
                        let e = new Map;
                        for (let t of U)
                            if (t.key !== r().IZ)
                                for (let n of t.actions) e.set(n.key, t.title);
                        return e
                    }, [U]),
                    {
                        menuItemActionMap: j,
                        menuItemSectionKeyMap: L,
                        menuListSections: z
                    } = (0, i.useMemo)(() => {
                        let i = new Map,
                            l = new Map;

                        function s(e, a) {
                            let o = null == a ? void 0 : a.key.toString();
                            e.lazyDependencyKeys && (0, n(968864).G)(...e.lazyDependencyKeys);
                            let s = {
                                key: e.key,
                                render: (n, i) => {
                                    let l = (null == a ? void 0 : a.key) === r().IZ ? B.get(e.key) : null == a ? void 0 : a.title,
                                        s = F || (null == a ? void 0 : a.key) === r().IZ;
                                    return e.render(n, t, {
                                        onAccept: (e, t, n) => {
                                            null == u || u(e, t, n, o)
                                        },
                                        onFocus: i.onFocus,
                                        sectionTitle: l,
                                        extendItemTitle: s,
                                        styles: A
                                    })
                                },
                                action: ({
                                    event: n
                                }) => {
                                    e.action(t, n)
                                }
                            };
                            return i.set(s, e), l.set(s, o), s
                        }
                        return F ? {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: l,
                            menuListSections: [{
                                key: "flat",
                                render: e => (0, a.jsx)(n(844565).A, { ...e,
                                    topBorder: !1,
                                    hideTitle: !0
                                }),
                                items: (null == O ? void 0 : O.map(e => s(e.action, e.section))) ? ? []
                            }]
                        } : {
                            menuItemActionMap: i,
                            menuItemSectionKeyMap: l,
                            menuListSections: N.map(t => {
                                let n = t.render ? ? o;
                                return {
                                    key: t.key,
                                    render: i => n({ ...i,
                                        topBorder: 0 !== i.index || !!e,
                                        title: t.title
                                    }),
                                    items: t.actions.map(e => s(e, t))
                                }
                            })
                        }
                    }, [N, F, e, B, t, A, u, O]);
                (0, i.useEffect)(() => {
                    if (v !== R.current && 0 === m) {
                        if (R.current = v, x && 0 === P) return n(163657).rd({
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
                }, [v, m, P, E, x]);
                let q = (0, i.useCallback)((e, n) => {
                        if (u) {
                            let r = j.get(e),
                                a = L.get(e);
                            if (r) {
                                var i;
                                if (null != (i = r.isDisabled) && i.call(r, t)) return;
                                u(r, t, n.event, a, n.index)
                            }
                        }
                    }, [u, t, j, L]),
                    $ = (0, i.useCallback)(e => {
                        let i;
                        if (e.indexLocal && (i = n(130711).SG(e.indexLocal, z)), e.indexGlobal) {
                            var r;
                            i = null == (r = n(130711).e7(e.indexGlobal, z)) ? void 0 : r.item
                        }
                        if (!i) return;
                        let a = j.get(i),
                            o = L.get(i);
                        a && (null == c || c(a, t, o))
                    }, [j, L, c, z, t]),
                    W = P > 0;
                return (0, a.jsxs)(a.Fragment, {
                    children: [k && !W ? (0, a.jsx)(n(844565).A, {
                        children: (0, a.jsx)(n(498341).u, {
                            title: d || (0, a.jsx)(n(109939).sA, {
                                id: "action.search.noResults",
                                defaultMessage: "No results"
                            })
                        })
                    }) : void 0, (0, a.jsx)(n(558045).A, {
                        type: n(558045).O.Vertical,
                        role: w,
                        priority: p,
                        store: E,
                        disableKeyboard: f,
                        sections: z,
                        initialFocus: m,
                        onEmptyEnter: _,
                        onAccept: q,
                        onFocus: $,
                        comboboxProps: g,
                        resetInitialFocusOnSectionChangeAlways: S,
                        resetFocusOnMouseOut: I,
                        onFooterEnter: x
                    }), h ? (0, a.jsx)(n(636255).A, {
                        onChange: V
                    }) : void 0]
                })
            }
        },
        556306: (e, t, n) => {
            n.d(t, {
                h: () => i
            });

            function i(e) {
                return !!e.getSetting("self_serve_enterprise_eligible")
            }
        },
        559096: (e, t, n) => {
            n.r(t), n.d(t, {
                loadLocalSubtree: () => l
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(354520), n(803949), n(581454);
            var i = () => n(986939),
                r = () => n(430733),
                a = () => n(832375),
                o = () => n(247438);

            function l(e) {
                let {
                    environment: t,
                    blockId: l,
                    inMemoryRecordCache: s,
                    options: u
                } = e, c = t.currentUser.id, d = n(412951).RecordMap.create(), p = new Set, f = [{
                    pointer: {
                        table: a().evP,
                        id: l
                    },
                    parentId: "doesn't matter"
                }];
                for (; f.length > 0;) {
                    let e = f.shift();
                    if (!e || p.has(e.pointer.id)) continue;
                    let t = l === e.pointer.id,
                        m = function(e) {
                            let t, {
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            } = e;
                            return (0, n(496282).Yt)(l, a().evP) ? t = function(e) {
                                var t, l, s, u, c, d, p, f;
                                let {
                                    pointer: m,
                                    recordMap: _,
                                    inMemoryRecordCache: g,
                                    currentUserId: h,
                                    cursors: v,
                                    cursor: y,
                                    options: b,
                                    isRootRequest: S
                                } = e, I = g.getRecord({
                                    pointer: m,
                                    userId: h
                                }), w = null == I ? void 0 : I.value;
                                if (!w) return b.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: m
                                } : void 0;
                                let k = b.excludeCrdtData ? n(877308).ir(w) : w;
                                if (b.includeLegacyTransclusionBlockValues) {
                                    if (!S && k.parent_id !== y.parentId && !y.isBlockContentChild) return
                                } else if (!S && k.parent_id !== y.parentId) return;
                                if (k.type === n(955630).xd.externalObjectInstance && !b.allowCopyExternalObjectInstances) return {
                                    type: "error",
                                    reason: "encountered_external_object_instance",
                                    pointer: m
                                };
                                if (_.setValue(m, k), !b.skipNavigableChildren) {
                                    for (let e of n(993189).Bj6.fromBlock(k).getCollectionPointers()) {
                                        let t = g.getRecord({
                                            pointer: e,
                                            userId: h
                                        });
                                        if (t) {
                                            if ((null == (c = t.value) ? void 0 : c.parent_table) !== a().evP || (null == (d = t.value) ? void 0 : d.parent_id) !== k.id) continue
                                        } else {
                                            if (b.requireFullSubtree) return {
                                                type: "error",
                                                reason: "missing_record",
                                                pointer: e
                                            };
                                            continue
                                        }
                                        v.push({
                                            pointer: e,
                                            parentId: k.id
                                        })
                                    }
                                    if (k.view_ids)
                                        for (let e of k.view_ids) v.push({
                                            pointer: {
                                                table: a().Gy1,
                                                id: e,
                                                spaceId: k.space_id
                                            },
                                            parentId: k.id
                                        })
                                }
                                if (!b.skipBlockContent && (!b.skipTransclusionContainerChildren || "transclusion_container" !== k.type) && (!b.skipNavigableChildren || !(0, n(955630).$I)(k.type)))
                                    for (let e of n(993189).Bj6.fromBlock(k).getRenderableContentIds()) v.push({
                                        pointer: {
                                            table: a().evP,
                                            id: e
                                        },
                                        parentId: k.id,
                                        isBlockContentChild: !0
                                    });
                                for (let e of n(993189).Bj6.fromBlock(k).getNonContentChildren()) v.push({
                                    pointer: {
                                        table: a().evP,
                                        id: e
                                    },
                                    parentId: k.id,
                                    isBlockContentChild: !0
                                });
                                if (k.type === n(955630).xd.externalObjectInstance)
                                    for (let e of (null == (p = k.format) ? void 0 : p.related_external_object_uris_to_instance_ids) && Object.values(null == (f = k.format) ? void 0 : f.related_external_object_uris_to_instance_ids) || []) v.push({
                                        pointer: {
                                            table: a().evP,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                if (!b.skipNavigableChildren && k.properties)
                                    for (let e of Object.values(k.properties).filter(n(722371).O9))
                                        for (let t of e)
                                            for (let e of o().uPN(t)) {
                                                if (o().jIt(e)) {
                                                    let t = o().v55(e);
                                                    v.push({
                                                        pointer: {
                                                            table: a().evP,
                                                            id: t
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (o().sh$(e)) {
                                                    let t = o().cQR(e),
                                                        n = (0, r().lX)({
                                                            url: t,
                                                            baseUrl: i().A.domainBaseUrl,
                                                            publicDomainName: i().A.publicDomainName
                                                        });
                                                    n && v.push({
                                                        pointer: {
                                                            table: a().evP,
                                                            id: n
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                                if (o().N53(e)) {
                                                    let t = o().T$c(e);
                                                    t && v.push({
                                                        pointer: {
                                                            table: a().evP,
                                                            id: t,
                                                            spaceId: k.space_id
                                                        },
                                                        parentId: k.id
                                                    })
                                                }
                                            }
                                if ("form" === k.type && null != (t = k.format) && t.form_layout_pointer && v.push({
                                        pointer: k.format.form_layout_pointer,
                                        parentId: k.id
                                    }), null != (l = k.format) && l.automation_id && v.push({
                                        pointer: {
                                            table: a().yBS,
                                            id: k.format.automation_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), null != (s = k.format) && s.workflow_id && v.push({
                                        pointer: {
                                            table: a().C0E,
                                            id: k.format.workflow_id,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    }), k.format && "database_agent_ids" in k.format && Array.isArray(k.format.database_agent_ids))
                                    for (let e of k.format.database_agent_ids) v.push({
                                        pointer: {
                                            table: a().C0E,
                                            id: e,
                                            spaceId: k.space_id
                                        },
                                        parentId: k.id
                                    });
                                null != (u = k.format) && u.ai_instructions_page_pointer && v.push({
                                    pointer: k.format.ai_instructions_page_pointer,
                                    parentId: k.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f,
                                isRootRequest: m
                            }) : (0, n(496282).Yt)(l, a().VlP) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: r,
                                    inMemoryRecordCache: o,
                                    currentUserId: l,
                                    cursors: s,
                                    cursor: u,
                                    options: c
                                } = e;
                                if (!c.allowCopyCollections) return {
                                    type: "error",
                                    reason: "encountered_collection",
                                    pointer: i
                                };
                                let d = o.getRecord({
                                    pointer: i,
                                    userId: l
                                });
                                if (!(null != d && d.value)) return c.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                if (d.value.parent_id !== u.parentId) return;
                                let p = d.value;
                                for (let e of (r.setValue(i, p), o.forEachRecord({
                                        userId: l,
                                        fn: ({
                                            model: e
                                        }) => {
                                            e.table === a().evP && e && e.parent_id === i.id && e.alive && s.push({
                                                pointer: e.pointer,
                                                parentId: i.id
                                            })
                                        }
                                    }), (null == (t = p.format) ? void 0 : t.automation_ids) ? ? [])) s.push({
                                    pointer: {
                                        table: a().yBS,
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
                                            table: a().yBS
                                        },
                                        parentId: p.id
                                    })
                                }), Object.values(p.schema).forEach(e => {
                                    if (null != e && e.default_workflow_id) {
                                        let t = e.default_workflow_id;
                                        s.push({
                                            pointer: {
                                                table: a().C0E,
                                                id: t,
                                                spaceId: p.space_id
                                            },
                                            parentId: u.parentId
                                        })
                                    }
                                })), null != (n = p.format) && n.layout_pointer && s.push({
                                    pointer: p.format.layout_pointer,
                                    parentId: p.id
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().Gy1) ? t = function(e) {
                                var t, n;
                                let {
                                    pointer: i,
                                    recordMap: r,
                                    inMemoryRecordCache: a,
                                    currentUserId: o,
                                    cursors: l,
                                    cursor: s,
                                    options: u
                                } = e, c = a.getRecord({
                                    pointer: i,
                                    userId: o
                                });
                                if (!(null != c && c.value)) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                (c.value.parent_id === s.parentId || s.skipParentIdCheck) && ("form_editor" === c.value.type && null != (t = c.value.format) && t.form_block_pointer && l.push({
                                    pointer: c.value.format.form_block_pointer,
                                    parentId: c.value.id
                                }), null != (n = c.value.format) && n.dashboard_layout_pointer && l.push({
                                    pointer: c.value.format.dashboard_layout_pointer,
                                    parentId: c.value.id
                                }), r.setValue(i, c.value))
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().yBS) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: r,
                                    cursors: o,
                                    cursor: l,
                                    options: s
                                } = e, u = i.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != u && u.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                if (u.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.action_ids ? ? [])) o.push({
                                        pointer: {
                                            table: a().SC1,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().SC1) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: r,
                                    cursors: o,
                                    cursor: l,
                                    options: s
                                } = e, u = i.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != u && u.value)) return s.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: l.pointer
                                } : void 0;
                                if (u.value.parent_id === l.parentId)
                                    for (let e of (n.setValue(t, u.value), u.value.blocks ? ? [])) o.push({
                                        pointer: {
                                            table: a().evP,
                                            id: e,
                                            spaceId: u.value.space_id
                                        },
                                        parentId: u.value.id
                                    })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().C0E) ? t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: r,
                                    cursor: a,
                                    options: o
                                } = e, l = i.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != l && l.value)) return o.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: a.pointer
                                } : void 0;
                                l.value.parent_id === a.parentId && n.setValue(t, l.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().zx0) ? t = function(e) {
                                var t;
                                let {
                                    pointer: i,
                                    recordMap: r,
                                    inMemoryRecordCache: o,
                                    currentUserId: l,
                                    cursors: s,
                                    options: u
                                } = e, c = o.getRecord({
                                    pointer: i,
                                    userId: l
                                }), d = null == c ? void 0 : c.value;
                                if (!d) return u.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: i
                                } : void 0;
                                let p = d.parent_id !== e.cursor.parentId ? { ...d,
                                        parent_id: e.cursor.parentId
                                    } : d,
                                    f = ((null == (t = p.modules) || null == (t = t.dashboard_layout_schema) ? void 0 : t.filter(e => "row" === e.type)) ? ? []).map(e => ({ ...e,
                                        modules: e.modules.filter(e => {
                                            var t;
                                            let i = o.getRecord({
                                                pointer: (0, n(17520).Q)({
                                                    collectionViewId: e.collection_view_id,
                                                    spaceId: p.space_id
                                                }),
                                                userId: l
                                            });
                                            return (null == i || null == (t = i.value) ? void 0 : t.type) !== "dashboard"
                                        })
                                    })).filter(e => e.modules.length > 0);
                                for (let e of (p = { ...p,
                                        modules: { ...p.modules,
                                            dashboard_layout_schema: f
                                        }
                                    }, r.setValue(i, p), n(993189).Bj6.fromValue(a().zx0, p).getBlockChildrenPointers())) s.push({
                                    pointer: e,
                                    parentId: i.id
                                });
                                let m = e => {
                                    let t = {
                                        id: e.collection_view_id,
                                        table: a().Gy1,
                                        spaceId: p.space_id
                                    };
                                    return s.push({
                                        pointer: t,
                                        parentId: i.id,
                                        skipParentIdCheck: !0
                                    }), e
                                };
                                (0, n(322268).E)(p.modules, e => {
                                    if ("formQuestion" === e.type) {
                                        let t = {
                                            id: e.formQuestionId,
                                            table: a().lo9,
                                            spaceId: p.space_id
                                        };
                                        s.push({
                                            pointer: t,
                                            parentId: i.id
                                        })
                                    } else if ("view" === e.type) m(e);
                                    else if ("row" === e.type)
                                        for (let t of e.modules) "view" === t.type && m(t)
                                })
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            }) : (0, n(496282).Yt)(l, a().lo9) && (t = function(e) {
                                let {
                                    pointer: t,
                                    recordMap: n,
                                    inMemoryRecordCache: i,
                                    currentUserId: r,
                                    options: a
                                } = e, o = i.getRecord({
                                    pointer: t,
                                    userId: r
                                });
                                if (!(null != o && o.value)) return a.requireFullSubtree ? {
                                    type: "error",
                                    reason: "missing_record",
                                    pointer: t
                                } : void 0;
                                n.setValue(t, o.value)
                            }({
                                pointer: l,
                                recordMap: s,
                                inMemoryRecordCache: u,
                                currentUserId: c,
                                cursors: d,
                                cursor: p,
                                options: f
                            })), t
                        }({
                            pointer: e.pointer,
                            recordMap: d,
                            inMemoryRecordCache: s,
                            currentUserId: c,
                            cursors: f,
                            cursor: e,
                            options: u,
                            isRootRequest: t
                        });
                    if (m) return m;
                    p.add(e.pointer.id)
                }
                return {
                    type: "success",
                    recordMap: d
                }
            }
        },
        581973: (e, t, n) => {
            function i(e) {
                let {
                    availableEditorSize: t,
                    userPreferenceSidebarWidth: i
                } = e, r = i ? ? t.width * n(736462).Jx, a = Math.max(n(736462).hh, t.width - n(736462).UP), o = Math.min(n(736462).vd, a);
                return Math.max(n(736462).hh, Math.min(o, r))
            }

            function r(e) {
                let t, r, a, {
                    availableEditorSize: o,
                    chatPanelMode: l,
                    currentPerformanceToolbarHeight: s,
                    dragSize: u,
                    notionSidebarWidth: c,
                    tempDragPosition: d,
                    userPreferenceSidebarWidth: p,
                    mobileBottomPadding: f = 0,
                    safeAreaTopPadding: m = 0
                } = e;
                if ("sidebar" === l) {
                    let e = (null == u ? void 0 : u.width) ? ? i({
                            availableEditorSize: o,
                            userPreferenceSidebarWidth: p
                        }),
                        l = Math.max(n(736462).hh, o.width - n(736462).UP),
                        d = Math.min(n(736462).vd, l);
                    t = {
                        width: {
                            min: n(736462).hh,
                            max: d,
                            value: e,
                            resizeMode: "user"
                        },
                        height: {
                            min: o.height,
                            max: o.height,
                            value: o.height,
                            resizeMode: "none"
                        }
                    }, r = {
                        fromLeftCss: `calc(100% - ${e}px)`,
                        fromLeftNumeric: o.width - e + c,
                        fromTopCss: "0px",
                        fromTopNumeric: 0,
                        fromRightCss: "0px",
                        fromRightNumeric: 0,
                        fromBottomCss: `${s}px`,
                        fromBottomNumeric: s
                    }, a = e
                } else if ("popup" === l || "full" === l) {
                    let e = o.height - n(736462).Ab - n(736462).m8 - m - f,
                        i = Math.min(n(736462).wl, e);
                    if (t = {
                            width: {
                                min: n(736462).Y_,
                                max: n(736462).Y_,
                                value: n(736462).Y_,
                                resizeMode: "none"
                            },
                            height: {
                                min: i,
                                max: i,
                                value: i,
                                resizeMode: "none"
                            }
                        }, d) {
                        let e = d.y + m;
                        r = {
                            fromLeftCss: `${d.x+c}px`,
                            fromLeftNumeric: d.x,
                            fromTopCss: `${e}px`,
                            fromTopNumeric: e,
                            fromRightCss: `calc(100% - ${d.x+n(736462).Y_+c}px)`,
                            fromRightNumeric: o.width - d.x - n(736462).Y_,
                            fromBottomCss: `calc(100% - ${e+i}px)`,
                            fromBottomNumeric: o.height - e - i
                        }
                    } else {
                        let e = n(736462).Ab + s + f,
                            t = o.height - i - e,
                            a = Math.max(m + n(736462).m8, t),
                            l = a > t ? o.height - a - e : i;
                        r = {
                            fromLeftCss: `calc(100% - ${n(736462).Y_+n(736462).jI}px)`,
                            fromLeftNumeric: o.width - n(736462).Y_ - n(736462).jI + c,
                            fromTopCss: `${a}px`,
                            fromTopNumeric: a,
                            fromRightCss: `${n(736462).jI}px`,
                            fromRightNumeric: n(736462).jI,
                            fromBottomCss: `${o.height-a-l}px`,
                            fromBottomNumeric: o.height - a - l
                        }
                    }
                    a = 0
                } else(0, n(722371).HB)(l);
                return {
                    panelSize: t,
                    panelRect: r,
                    editorWidthUsed: a
                }
            }
            n.d(t, {
                d: () => i,
                m: () => r
            })
        },
        588222: (e, t, n) => {
            n.r(t), n.d(t, {
                arrowChevronSingleRightFillSmallIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "5.54 2.94 5.81 10.11",
                    directional: !0,
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.13 8.53a.75.75 0 0 0 0-1.06L6.81 3.15a.75.75 0 0 0-1.06 1.06L9.54 8l-3.79 3.79a.75.75 0 0 0 1.06 1.06z"
                    })
                },
                r = (0, n(104509).wt)("arrowChevronSingleRightFillSmall", i, "fillSmall")
        },
        589563: (e, t, n) => {
            n.d(t, {
                Ah: () => u,
                Dk: () => o,
                Iv: () => s,
                SF: () => l,
                YO: () => p,
                _f: () => m,
                c_: () => r,
                dW: () => d,
                gW: () => a,
                sp: () => _,
                vN: () => c
            }), n(16280), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            var i = () => n(722371);

            function r(e, t) {
                e.DO_NOT_USE_commonTrackEvent({
                    eventName: "add_automation_step",
                    properties: t
                })
            }

            function a(e, t) {
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

            function u(e, t) {
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

            function d(e, t) {
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
                    formulaTypecheckContextValues: a,
                    getRecordModel: o,
                    spaceId: l,
                    value: s,
                    featureGates: u
                } = e;
                if ("formula" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    let e = n(300441).Q.unwrapOr(r.parseFormulaInputToAst(s.value), void 0);
                    if (e) {
                        let i = r.addTypesToFormulaAST(e, {
                            handleDataRequest: (0, n(297493).zg)(o),
                            spaceId: l,
                            valueTypes: a,
                            featureGates: u
                        });
                        return { ...t.getFormulaAnalytics(e, {
                                getRecordModel: o,
                                typecheckContextValues: a
                            }),
                            formula_return_type: i.node.type,
                            redacted_formula: t.getRedactedFormulaAsStringSync(e, {
                                getRecordModel: o,
                                typecheckContextValues: a
                            })
                        }
                    }
                } else if ("simple" === s.type) {
                    if (!(0, i().O9)(s.value)) return;
                    return t.getSimpleFormulaAnalytics(s.value, {
                        getRecordModel: o,
                        typecheckContextValues: a
                    })
                } else(0, i().HB)(s.type)
            }

            function m(e) {
                let {
                    automationActionModel: t,
                    automationActionModels: r,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u,
                    simpleFormulasModule: c
                } = e;
                return t.isType("complete_sprint") ? {
                    automation_action_id: t.pointer.id,
                    type: "complete_sprint"
                } : t.isType("create_page") ? function(e) {
                    let t, {
                            automationActionModel: n,
                            formulaAnalyticsModule: r,
                            formulasModule: a,
                            formulaTypecheckContextValues: o,
                            getRecordModel: l,
                            featureGates: s
                        } = e,
                        u = n.getConfig(),
                        c = [],
                        d = null == u ? void 0 : u.collection,
                        p = null == u ? void 0 : u.properties;
                    if ((0, i().O9)(d) && (0, i().O9)(p) && p.length > 0) {
                        let e = l(d),
                            _ = null == e ? void 0 : e.getNormalizedSchema(l);
                        (0, i().O9)(_) && (c = p.map(e => {
                            var t;
                            return (null == (t = _[e]) ? void 0 : t.type) ? ? "unknown"
                        }));
                        let g = null == u ? void 0 : u.values;
                        if (a && (0, i().O9)(g))
                            for (let e of (t = [], p)) {
                                var m;
                                let i = null == (m = g[e]) ? void 0 : m.value;
                                if (!i) continue;
                                let u = f({
                                    formulaAnalyticsModule: r,
                                    formulasModule: a,
                                    getRecordModel: l,
                                    formulaTypecheckContextValues: o,
                                    spaceId: n.spaceId,
                                    value: i,
                                    featureGates: s
                                });
                                u && t.push(u)
                            }
                    }
                    return {
                        automation_action_id: n.pointer.id,
                        property_formula_stats: t,
                        property_types: c,
                        type: "create_page"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("duplicate_blocks") ? {
                    automation_action_id: t.pointer.id,
                    type: "duplicate_blocks"
                } : t.isType("modal_confirmation") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: r,
                        formulaTypecheckContextValues: a,
                        getRecordModel: o,
                        featureGates: l
                    } = e, s = t.getConfig(), u = [];
                    if (r && (0, i().O9)(s) && s.text) {
                        let e = f({
                            formulasModule: r,
                            formulaAnalyticsModule: n,
                            getRecordModel: o,
                            formulaTypecheckContextValues: a,
                            spaceId: t.spaceId,
                            value: s.text,
                            featureGates: l
                        });
                        e && u.push(e)
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: u,
                        type: "modal_confirmation"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("open_page") ? {
                    automation_action_id: t.pointer.id,
                    type: "open_page"
                } : t.isType("query_collection") ? {
                    automation_action_id: t.pointer.id,
                    type: "query_collection"
                } : t.isType("send_in_app_notification") ? function(e) {
                    var t, r;
                    let {
                        automationActionModel: a,
                        formulaAnalyticsModule: o,
                        formulasModule: l,
                        formulaTypecheckContextValues: s,
                        getRecordModel: u,
                        featureGates: c,
                        simpleFormulasModule: d
                    } = e, p = {
                        automation_action_id: a.pointer.id,
                        messageCharacterCount: 0,
                        type: "send_in_app_notification"
                    }, m = a.getConfig();
                    if (!(0, i().O9)(m)) return p;
                    if ((0, i().O9)(m.target)) {
                        if ("formula" === m.target.type && (0, i().O9)(m.target.value)) {
                            if (p.targetData = {
                                    type: "formula",
                                    numUserFormulaTargets: (0, n(247438).Fbh)(m.target.value.value).length,
                                    numFormulaContextTargets: d.getReferencedContextValueIds(m.target.value).length
                                }, l) {
                                let e = f({
                                    formulasModule: l,
                                    formulaAnalyticsModule: o,
                                    getRecordModel: u,
                                    formulaTypecheckContextValues: s,
                                    spaceId: a.spaceId,
                                    value: m.target.value,
                                    featureGates: c
                                });
                                e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                            }
                        } else if ("property" === m.target.type && (0, i().O9)(m.target.propertyId) && (0, i().O9)(m.target.collectionPointer)) {
                            let e = u(m.target.collectionPointer),
                                t = null == e ? void 0 : e.getSchema();
                            (0, i().O9)(t) && (p.targetData = {
                                type: "property",
                                propertyType: null == (r = t[m.target.propertyId]) ? void 0 : r.type
                            })
                        }
                    }
                    if ((0, i().O9)(null == (t = m.notification_message) ? void 0 : t.value) && (p.messageCharacterCount = (0, n(247438).FAw)(m.notification_message.value), l)) {
                        let e = f({
                            formulasModule: l,
                            formulaAnalyticsModule: o,
                            getRecordModel: u,
                            formulaTypecheckContextValues: s,
                            spaceId: a.spaceId,
                            value: m.notification_message,
                            featureGates: c
                        });
                        e && (p.formula_stats ? ? = [], p.formula_stats.push(e))
                    }
                    return p
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u,
                    simpleFormulasModule: c
                }) : t.isType("send_gmail_notification") ? function(e) {
                    var t, r, a, o, l, s, u;
                    let {
                        automationActionModel: c,
                        formulaAnalyticsModule: d,
                        formulasModule: p,
                        formulaTypecheckContextValues: m,
                        getRecordModel: _,
                        featureGates: g
                    } = e, h = c.getConfig();
                    if (!(0, i().O9)(h)) return {
                        automation_action_id: c.pointer.id,
                        fields: {},
                        recipient_domains: {},
                        type: "send_gmail_notification"
                    };
                    let v = Object.fromEntries(Object.entries(h || {}).map(([e, t]) => {
                            if ((null == t ? void 0 : t.type) === "formula") {
                                var n;
                                return [e, !!(null == t || null == (n = t.value) ? void 0 : n.value)]
                            }
                            return (null == t ? void 0 : t.type) === "simple" ? [e, !!(null == t ? void 0 : t.value)] : [e, !!t]
                        })),
                        {
                            to: y,
                            cc: b,
                            bcc: S
                        } = h,
                        I = [...(null == y || null == (t = y.value) ? void 0 : t.value) || [], ...(null == b || null == (r = b.value) ? void 0 : r.value) || [], ...(null == S || null == (a = S.value) ? void 0 : a.value) || []],
                        w = [...(0, n(247438).Fbh)(I).map(e => _({
                            table: n(514214).oo,
                            id: e
                        })).map(e => null == e ? void 0 : e.email).filter(i().O9), ...(0, n(801109).C3)((0, n(247438).k4p)(I))],
                        k = (0, n(763230).Tr)(w.map(e => e.split("@")[1])),
                        x = [null == (o = h.to) ? void 0 : o.value, null == (l = h.cc) ? void 0 : l.value, null == (s = h.bcc) ? void 0 : s.value, null == (u = h.reply_to) ? void 0 : u.value, h.from_name, h.email_subject, h.email_body].map(e => {
                            if (p && (0, i().O9)(e)) return f({
                                formulaAnalyticsModule: d,
                                formulasModule: p,
                                getRecordModel: _,
                                formulaTypecheckContextValues: m,
                                spaceId: c.spaceId,
                                value: e,
                                featureGates: g
                            })
                        }).filter(i().O9);
                    return {
                        automation_action_id: c.pointer.id,
                        fields: v,
                        formula_stats: x,
                        recipient_domains: k,
                        type: "send_gmail_notification"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("slack_notification") ? {
                    automation_action_id: t.pointer.id,
                    type: "slack_notification"
                } : t.isType("update_pages") ? function(e) {
                    let {
                        automationActionModel: t,
                        automationActionModels: r,
                        formulaAnalyticsModule: a,
                        formulasModule: o,
                        formulaTypecheckContextValues: l,
                        getRecordModel: s,
                        featureGates: u
                    } = e, c = t.getConfig(), d = [], p = [], m = [];
                    if ((0, i().O9)(c) && (0, i().O9)(c.target) && (0, i().O9)(c.properties) && c.properties.length > 0) {
                        let e;
                        if ("variable" === c.target.type) {
                            let t = (0, n(297493).y5)(c.target.id);
                            if ("action" === t.source) {
                                let t = (0, n(33529).y)({
                                    actionModels: r,
                                    id: c.target.id
                                }).collectionPointer;
                                if ((0, i().O9)(t)) {
                                    let n = s(t);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else if ("global" === t.source && "button_page" === t.global) {
                                let t = (0, n(297493).IV)(l, c.target.id);
                                if ((null == t ? void 0 : t.type.type) === "block" && (0, i().O9)(t.type.collection)) {
                                    let n = s(t.type.collection);
                                    e = null == n ? void 0 : n.getNormalizedSchema(s)
                                }
                            } else throw Error("Failed loading property schema")
                        } else if ("collection" === c.target.type) {
                            let t = s(c.target.collection);
                            e = null == t ? void 0 : t.getNormalizedSchema(s)
                        }(0, i().O9)(e) && c.properties.forEach(n => {
                            let r = e[n];
                            if ((0, i().O9)(r) && (d.push(r.type), o && (0, i().O9)(c.values))) {
                                let e = c.values[n];
                                if ((0, i().O9)(e) && (p.push({
                                        type: r.type,
                                        operator: e.action
                                    }), e.value)) {
                                    let n = f({
                                        formulasModule: o,
                                        formulaAnalyticsModule: a,
                                        getRecordModel: s,
                                        formulaTypecheckContextValues: l,
                                        spaceId: t.spaceId,
                                        value: e.value,
                                        featureGates: u
                                    });
                                    n && m.push(n)
                                }
                            }
                        })
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        property_configs: p,
                        property_formula_stats: m,
                        property_types: d,
                        type: "update_pages"
                    }
                }({
                    automationActionModel: t,
                    automationActionModels: r,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
                }) : t.isType("define_variables") ? function(e) {
                    let {
                        automationActionModel: t,
                        formulaAnalyticsModule: n,
                        formulasModule: r,
                        formulaTypecheckContextValues: a,
                        getRecordModel: o,
                        featureGates: l
                    } = e, s = t.getConfig(), u = [];
                    if (r && (0, i().O9)(s) && s.values) {
                        for (let e of Object.values(s.values))
                            if (e.value) {
                                let i = f({
                                    formulasModule: r,
                                    formulaAnalyticsModule: n,
                                    getRecordModel: o,
                                    formulaTypecheckContextValues: a,
                                    spaceId: t.spaceId,
                                    value: e.value,
                                    featureGates: l
                                });
                                i && u.push(i)
                            }
                    }
                    return {
                        automation_action_id: t.pointer.id,
                        formula_stats: u,
                        type: "define_variables"
                    }
                }({
                    automationActionModel: t,
                    formulaAnalyticsModule: a,
                    formulasModule: o,
                    formulaTypecheckContextValues: l,
                    getRecordModel: s,
                    featureGates: u
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
                } : void(0, i().HB)(t)
            }

            function _(e) {
                var t, r;
                let a, o, l, {
                        automationModel: s,
                        builderType: u = "sidebar",
                        formulaAnalyticsModule: c,
                        formulasModule: d,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: _,
                        simpleFormulasModule: g,
                        source: h
                    } = e,
                    v = [],
                    y = s.getActionPointers().map(e => f(e)).filter(i().O9);
                for (let e of s.getActionPointers()) {
                    let t = f(e);
                    (0, i().O9)(t) && v.push(m({
                        automationActionModel: t,
                        automationActionModels: y,
                        formulaAnalyticsModule: c,
                        formulasModule: d,
                        formulaTypecheckContextValues: p,
                        getRecordModel: f,
                        featureGates: _,
                        simpleFormulasModule: g
                    }))
                }
                let b = [];
                if (s.isEventType()) {
                    let e = s.getEventConfiguration(),
                        r = f(s.getParentPointer());
                    a = s.getParentId();
                    let u = s.getEventConfiguration();
                    if ((null == (t = u.source) ? void 0 : t.type) === "collection_view") {
                        let e = f(u.source.pointer);
                        (null == e ? void 0 : e.parent_table) === n(682956).ev && (l = null == e ? void 0 : e.parent_id), o = null == u ? void 0 : u.source.pointer.id
                    }
                    let c = null == r ? void 0 : r.getNormalizedSchema(f);
                    if ((0, i().O9)(c)) {
                        let {
                            pagesAdded: t,
                            pagePropertiesEdited: n
                        } = e;
                        if (t && b.push({
                                type: "page"
                            }), "any" === n.type) b.push({
                            condition: "any",
                            type: "property"
                        });
                        else if ("none" === n.type) b.push({
                            condition: "none",
                            type: "property"
                        });
                        else {
                            let e = [];
                            "some" === n.type ? e = n.some ? ? [] : "all" === n.type && (e = n.all ? ? []);
                            let t = [],
                                r = [];
                            e.forEach(e => {
                                var n;
                                let a = null == (n = c[e.property]) ? void 0 : n.type;
                                (0, i().O9)(a) && (t.push({
                                    type: a,
                                    operator: e.filter.operator
                                }), r.push(a))
                            }), b.push({
                                condition: n.type,
                                property_configs: t,
                                property_types: r,
                                type: "property"
                            })
                        }
                    }
                } else s.isButtonType() ? b.push({
                    type: "button"
                }) : s.isRecurrenceType() ? b.push({
                    type: "recurrence",
                    frequency: null == (r = s.getTrigger().recurrence) ? void 0 : r.frequency
                }) : (0, i().HB)(s);
                return {
                    automation_actions: v,
                    automation_id: s.id,
                    automation_triggers: b,
                    collection_id: a,
                    collection_view_id: o,
                    collection_view_block_id: l,
                    builder_type: u,
                    source: h
                }
            }
        },
        605263: (e, t, n) => {
            n.d(t, {
                K4: () => s,
                To: () => p,
                fi: () => u,
                q8: () => l,
                u: () => o
            }), n(16280), n(18107), n(967357);
            var i = n(296540),
                r = n(474848);
            let a = (0, i.createContext)({
                ancestors: []
            });

            function o(e) {
                let {
                    automationStore: t,
                    children: o,
                    contextType: l,
                    collectionStore: s,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f,
                    enableExistenceGuarantees: m
                } = e, _ = (0, n(533992).v3)(), g = (0, n(109939).tz)(), {
                    value: h
                } = (0, n(815048).fJ)(n(864850).T.formulas), {
                    value: v
                } = (0, n(815048).fJ)(n(879267).QV.automationTypecheck), y = (0, n(470569).o)(t), b = (0, n(67499).S)(), S = (0, n(682985).K8)(() => h ? v ? function(e) {
                    let {
                        environment: t,
                        automationStore: i,
                        automationTypecheckModule: r,
                        contextType: a,
                        formulasModule: o,
                        intl: l,
                        subscriptionInfo: s,
                        pageStore: u,
                        enableExistenceGuarantees: p
                    } = e, f = p ? c.get(i) : c.get(i) ? ? d.get(i);
                    if (f) return f;
                    let m = new(n(345426)).ComputedStore(() => {
                        let e = i.getTriggerType(),
                            c = a;
                        return (0, n(722371).O9)(e) && (0, n(432705).x2)(e) && (c = (0, n(432705).H8)(e)), (0, n(100197).Z)({
                            environment: t,
                            automationStore: i,
                            automationTypecheckModule: r,
                            contextType: c,
                            formulasModule: o,
                            intl: l,
                            subscriptionInfo: s,
                            pageStore: u,
                            enableExistenceGuarantees: p
                        })
                    }, {
                        debugName: "automationContextTypecheckResultCachedStore"
                    });
                    return p && c.set(i, m), d.set(i, m), m
                }({
                    automationStore: t,
                    automationTypecheckModule: v,
                    contextType: l,
                    environment: _,
                    formulasModule: h,
                    intl: g,
                    subscriptionInfo: y,
                    pageStore: "button_block" === l ? null == b ? void 0 : b.pageStore : void 0,
                    enableExistenceGuarantees: m
                }).state : {
                    error: new(n(600005)).N9("Missing automation dependency")
                } : {
                    error: new(n(600005)).N9("Missing formulas dependency")
                }, [_, t, v, l, h, g, y, null == b ? void 0 : b.pageStore, m]), I = (0, i.useContext)(a), w = (0, i.useMemo)(() => 0 === I.ancestors.length ? [{
                    automationStore: t,
                    contextType: l,
                    typecheckResult: S,
                    collectionStore: s,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }] : [...I.ancestors, {
                    automationStore: t,
                    contextType: l,
                    typecheckResult: S,
                    collectionStore: s,
                    collectionSettingsStore: u,
                    collectionViewBlockStore: p,
                    collectionViewStore: f
                }], [I, t, l, S, s, u, p, f]), k = (0, i.useMemo)(() => ({
                    ancestors: w,
                    enableExistenceGuarantees: m
                }), [w, m]);
                return (0, r.jsx)(a.Provider, {
                    value: k,
                    children: o
                })
            }

            function l() {
                let e = (0, i.useContext)(a).ancestors.at(-1);
                if (!e) throw Error("No automation context found!");
                return e
            }

            function s() {
                return (0, i.useContext)(a).ancestors.at(-1)
            }

            function u() {
                return (0, i.useContext)(a).enableExistenceGuarantees
            }
            a.displayName = "AutomationContext", a.Consumer;
            let c = new WeakMap,
                d = new WeakMap;

            function p(e) {
                var t;
                return null == (t = c.get(e)) ? void 0 : t.state
            }
        },
        674880: (e, t, n) => {
            n.d(t, {
                BX: () => f,
                Jv: () => p,
                Kf: () => s,
                WM: () => a,
                Xd: () => m,
                Xw: () => _,
                defaultInferenceContextStore: () => i,
                fd: () => c,
                i6: () => l,
                uP: () => u
            }), n(944114), n(898992), n(354520), n(803949), n(581454), n(737550);
            let i = new(n(345426)).ComputedStore(() => {
                let e = n(728372).AppStoreSidebarSpaceStore.state,
                    t = n(728372).AppStoreCurrentUserStore.state,
                    i = n(728372).AppStoreSidebarSpaceViewStore.state,
                    r = n(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && i) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: i,
                    blockStore: r,
                    peekStore: n(475097).default.state.open ? n(475097).default.state.targetStore : void 0,
                    workflowStore: (0, n(346596).k)(e.environment)
                }
            }, {
                debugName: "defaultInferenceContextStore"
            });

            function r(e) {
                let t = {};
                if (e.isCollectionView()) {
                    let i = (0, n(444610).U)(e),
                        r = null == i ? void 0 : i.collectionViewStore();
                    r && (t[e.id] = r.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let i = (0, n(444610).U)(e),
                            r = null == i ? void 0 : i.collectionViewStore();
                        r && (t[e.id] = r.id)
                    }
                });
                return t
            }

            function a(e) {
                let {
                    environment: t,
                    surface: i,
                    inferenceContext: a,
                    config: o,
                    invokedFromBlockId: l,
                    checklistId: s,
                    checklistStepId: u
                } = e, {
                    userStore: c,
                    spaceStore: d,
                    spaceViewStore: p,
                    blockStore: f,
                    peekStore: m,
                    workflowStore: _
                } = a, g = (0, n(295447).Z1)({
                    environment: t,
                    table: n(832375).mSw,
                    spaceId: d.id
                }), h = "meet" === t.RouterStore.state.route.name, v = { ...f && f.isCollectionView() ? {
                        collectionViewBlockId: f.id,
                        visibleCollectionViewIds: r(f)
                    } : void 0,
                    ...f && !f.isCollectionView() && "personal_home_page" !== f.getType() && "daily_brief_reminder" !== i ? {
                        blockId: f.id,
                        visibleCollectionViewIds: r(f)
                    } : void 0,
                    ...m ? {
                        peekBlockId: m.id,
                        visibleCollectionViewIds: r(m)
                    } : void 0,
                    ..._ ? {
                        workflowId: _.id
                    } : void 0,
                    ...h ? function(e) {
                        if (!n(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: i,
                            userId: r
                        } = e, a = t.idCreator.getSpaceIdCreatorSync(i), o = (0, n(413388).sX)(r, a);
                        return {
                            collectionViewBlockId: o,
                            visibleCollectionViewIds: {
                                [o]: (0, n(413388).X$)(r, a)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: d.id,
                        userId: c.id
                    }) : void 0
                }, y = {};
                if ("workflow" !== o.type || !o.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var b;
                        t.name && (y.agentName = t.name), null != (b = t.customization_items) && b[0] && (y.agentAccessory = t.customization_items[0]), t.context_page_id && (y.context_page_id = t.context_page_id)
                    }
                }
                let S = function(e) {
                    var t, i, r;
                    let {
                        config: a,
                        workflowStore: o
                    } = e;
                    if ("workflow" !== a.type || !a.isCustomAgent || !o) return;
                    let l = !0 === a.useCustomAgentDraft || !0 === a.use_draft_actor_pointer ? (null == (t = o.getDraftData()) ? void 0 : t.instructions) ? ? (null == (i = o.getData()) ? void 0 : i.instructions) : null == (r = o.getPublishedArtifactStore()) || null == (r = r.getData()) ? void 0 : r.instructions;
                    if ((0, n(886883).ap)(l)) return l.id
                }({
                    config: o,
                    workflowStore: _
                });
                if (S && (y.context_page_id = S), n(218744).default.checkGate({
                        gateName: "workflows_inference_replay"
                    })) return {
                    id: g,
                    type: "context",
                    value: {
                        timezone: "America/Los_Angeles",
                        userName: "Test User",
                        userEmail: "test@example.com",
                        userId: "test-user-id",
                        spaceName: "Test Space",
                        spaceId: d.id,
                        spaceViewId: p.id,
                        currentDatetime: "2024-01-01T00:00:00.000Z",
                        surface: i,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && u ? {
                            checklistId: s,
                            checklistStepId: u
                        } : {},
                        ...y
                    }
                };
                let I = n(218744).default.checkGate({
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
                    spaceId: d.id
                }) : void 0;
                return {
                    id: g,
                    type: "context",
                    value: {
                        timezone: (0, n(714350).P)(),
                        userName: c.getName(),
                        userId: c.id,
                        userEmail: c.getEmail(),
                        spaceName: d.getName(),
                        spaceId: d.id,
                        spaceViewId: p.id,
                        currentDatetime: n(906745).DateTime.now().toISO(),
                        surface: i,
                        ...v,
                        invokedFromBlockId: l,
                        ..."onboarding_checklist" === i && s && u ? {
                            checklistId: s,
                            checklistStepId: u
                        } : {},
                        ...y,
                        recentPageVisits: I
                    }
                }
            }

            function o(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    config: r
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "config",
                    value: r
                }
            }

            function l(e) {
                let {
                    existingTranscript: t,
                    environment: n,
                    spaceStore: i,
                    config: r
                } = e;
                if (!t.some(e => "config" === e.type)) return o({
                    environment: n,
                    spaceStore: i,
                    config: r
                })
            }

            function s(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    value: r,
                    userStore: a
                } = e, o = d(r);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user",
                    value: o,
                    userId: a.id,
                    createdAt: n(906745).DateTime.now().toISO()
                }
            }

            function u(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    actualMessage: r,
                    displayMessage: a,
                    userStore: o,
                    surveyStepId: l,
                    sourceStepId: s
                } = e, u = d(r) ? ? [], c = d(a);
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user-injected",
                    actualMessage: u,
                    displayMessage: c,
                    userId: o.id,
                    createdAt: n(906745).DateTime.now().toISO(),
                    surveyStepId: l,
                    sourceStepId: s
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    agentMessageKey: r,
                    instructions: a
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: r,
                    instructions: a
                }
            }

            function d(e) {
                if (e) return (0, n(247438).bBR)((0, n(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: i,
                promptType: r,
                value: a,
                locale: o,
                args: l
            }) {
                return {
                    id: (0, n(295447).Z1)({
                        environment: e,
                        table: n(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: r,
                    userId: i.id,
                    createdAt: Date.now(),
                    value: a,
                    locale: o,
                    isEdited: !1,
                    args: l
                }
            }

            function f(e) {
                let t, i, {
                    environment: r,
                    spaceId: a,
                    pointers: o,
                    selectedBlockStores: l,
                    textSelection: s,
                    blockSelectionContext: u,
                    textSelectionContext: c
                } = e;
                if (u) t = u;
                else if (l && l.length > 0) {
                    let e = (0, n(685745).B)(l);
                    e && (t = {
                        type: "blocks",
                        value: l.map(e => e.pointer),
                        text: (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) i = c;
                else if (s && s.start.store.pointer.table === n(832375).evP && s.end.store.pointer.table === n(832375).evP) {
                    let e = (0, n(250943).E)({
                            mode: "editing",
                            multiSelection: s,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        r = e.length > 1200;
                    i = {
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
                if (0 !== o.length || t || i) return {
                    id: (0, n(295447).Z1)({
                        environment: r,
                        table: n(832375).mSw,
                        spaceId: a
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: o,
                        blockSelection: t,
                        textSelection: i
                    }
                }
            }

            function m(e) {
                let {
                    environment: t,
                    inferenceContext: i,
                    config: r,
                    addSteps: l,
                    surface: s,
                    invokedFromBlockId: u,
                    checklistId: c,
                    checklistStepId: d
                } = e, p = [o({
                    environment: t,
                    spaceStore: i.spaceStore,
                    config: r
                }), a({
                    environment: t,
                    inferenceContext: i,
                    surface: s,
                    config: r,
                    invokedFromBlockId: u,
                    checklistId: c,
                    checklistStepId: d
                })];
                return l && p.push(...l), p.filter(n(722371).O9)
            }

            function _(e) {
                let {
                    environment: t,
                    spaceId: i,
                    message: r,
                    notificationType: a = "info",
                    metadata: o
                } = e;
                return {
                    id: (0, n(295447).Z1)({
                        environment: t,
                        table: n(832375).mSw,
                        spaceId: i
                    }),
                    type: "system-notification",
                    message: r,
                    notificationType: a,
                    metadata: o
                }
            }
        },
        682006: (e, t, n) => {
            n.d(t, {
                a: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.37 1.37 13.25 13.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3.25 1.375c-1.036 0-1.875.84-1.875 1.875v6c0 1.036.84 1.875 1.875 1.875h1.625v1.625c0 1.036.84 1.875 1.875 1.875h6c1.036 0 1.875-.84 1.875-1.875v-6c0-1.036-.84-1.875-1.875-1.875h-1.625V3.25c0-1.036-.84-1.875-1.875-1.875zM2.625 3.25c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v1.625H6.75c-1.036 0-1.875.84-1.875 1.875v3.125H3.25a.625.625 0 0 1-.625-.625zm3.5 3.5c0-.345.28-.625.625-.625h6c.345 0 .625.28.625.625v6c0 .345-.28.625-.625.625h-6a.625.625 0 0 1-.625-.625z"
                    })
                },
                r = (0, n(104509).wt)("duplicateSmall", i, "small")
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
            n(202146).exposeDebugValue("EligibleIntervalSelectCampaignsStore", i)
        },
        729849: (e, t, n) => {
            n.d(t, {
                Gi: () => o,
                yB: () => a
            }), n(898992), n(354520), n(803949);
            var i = () => n(546605);

            function r() {
                return n(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function a() {
                return (0, n(682985).K8)(() => r(), [])
            }
            class o extends i().Store {
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
                        contentType: r
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: n,
                        progress: i,
                        contentType: r
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
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > r()
                }
            }
        },
        739271: (e, t, n) => {
            n.d(t, {
                s: () => r
            });
            var i = n(296540);

            function r() {
                let [e, t] = (0, i.useState)({
                    inputElementAttributes: void 0,
                    suppressFocusRing: !1
                }), [n, r] = (0, i.useState)(!1), [a, o] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    if (n) {
                        function e() {
                            o(!1)
                        }

                        function t(e) {
                            ("ArrowDown" === e.key || "ArrowUp" === e.key) && o(!0)
                        }
                        return window.addEventListener("pointerdown", e), window.addEventListener("keydown", t), () => {
                            window.removeEventListener("pointerdown", e), window.removeEventListener("keydown", t)
                        }
                    }
                }, [n]), [(0, i.useMemo)(() => ({
                    inputElementAttributes: e.inputElementAttributes,
                    suppressFocusRing: e.suppressFocusRing && a,
                    onFocus: () => {
                        r(!0)
                    },
                    onBlur: () => {
                        r(!1)
                    }
                }), [e, a]), (0, i.useMemo)(() => ({
                    setComboboxState: t,
                    isFocusVisible: a,
                    isComboboxFocused: n,
                    onItemHover: () => {
                        o(!1)
                    }
                }), [a, n])]
            }
        },
        745452: (e, t, n) => {
            n.d(t, {
                p: () => i
            });

            function i() {
                var e, t, i, r, a, o, l, s, u, c, d, p, f, m;
                let _ = n(728372).AppStoreSidebarSpaceStore.state,
                    g = n(728372).AppStoreSidebarSpaceViewStore.state,
                    h = null == _ ? void 0 : _.getSpaceSurveyData(),
                    v = null == g ? void 0 : g.getUserSurveyData();
                return {
                    function: null != v && null != (e = v.function) && e.value ? (0, n(88917).Tj)(null == v || null == (t = v.function) ? void 0 : t.value) : void 0,
                    role: null != v && null != (i = v.role) && i.value ? (0, n(88917).t_)(null == v || null == (r = v.role) ? void 0 : r.value) : void 0,
                    educationRole: null == v || null == (a = v.education_role) ? void 0 : a.value,
                    educationLevel: null == v || null == (o = v.education_level) ? void 0 : o.value,
                    useCases: null != h && null != (l = h.use_cases) && l.value ? (0, n(88917).h0)(null == h || null == (s = h.use_cases) ? void 0 : s.value) : void 0,
                    companySize: null != h && null != (u = h.company_size) && u.value ? (0, n(88917).JE)(null == h || null == (c = h.company_size) ? void 0 : c.value) : void 0,
                    intent: null != h && null != (d = h.intent) && d.value ? (0, n(88917).j9)(null == h || null == (p = h.intent) ? void 0 : p.value) : void 0,
                    categories: null == v || null == (f = v.categories) ? void 0 : f.value,
                    collaborativeIntent: null == h || null == (m = h.collaborative_intent) ? void 0 : m.value
                }
            }
        },
        752153: (e, t, n) => {
            function i(e, t) {
                return r(s(e, t))
            }

            function r(e) {
                return void 0 !== e && (e === n(212169).q_ || e === n(212169).YD)
            }

            function a(e, t) {
                if (r(t)) return;
                let i = n(212169).c$[e],
                    a = i.steps.findIndex(e => e.id === t);
                return -1 === a ? i.steps[0].id : a === i.steps.length - 1 ? n(212169).q_ : i.steps[a + 1].id
            }

            function o(e, t) {
                let n = s(e, t);
                if (!(!n || r(n))) return a(t, n)
            }

            function l(e, t) {
                let i = s(e, t);
                if (i) {
                    var a;
                    let e = n(212169).c$[t];
                    if (r(i)) return null == (a = e.steps.at(-1)) ? void 0 : a.id;
                    let o = e.steps.findIndex(e => e.id === i);
                    return -1 !== o && 0 !== o ? e.steps[o - 1].id : void 0
                }
            }

            function s(e, t) {
                var i;
                if (!e) return;
                let r = ((null == (i = e.getSettings()) ? void 0 : i.tutorials) || {})[t];
                return void 0 === r ? n(212169).c$[t].steps[0].id : r
            }
            n.d(t, {
                KD: () => l,
                gt: () => s,
                i9: () => o,
                ll: () => r,
                tb: () => a,
                x$: () => i
            }), n(18107), n(967357)
        },
        775451: (e, t, n) => {
            n.d(t, {
                W: () => a
            }), n(296540);
            var i = n(474848);
            let r = {
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
                a = (0, n(104509).wt)("pencilAndOutline", r, "default")
        },
        786221: (e, t, n) => {
            n.d(t, {
                HL: () => d,
                L5: () => c,
                Pl: () => U,
                parseCSV: () => P,
                ph: () => u
            }), n(944114), n(517642), n(658004), n(733853), n(845876), n(432475), n(515024), n(731698), n(898992), n(823215), n(354520), n(672577), n(430670), n(803949), n(581454), n(908872), n(737550);
            var i = () => n(627179),
                r = () => n(773352),
                a = () => n(247438);
            let o = "PartialMatch",
                l = "FullMatch",
                s = (0, n(109939).YK)({
                    titleColumnName: {
                        id: "database.titleColumn.name",
                        defaultMessage: "Title"
                    },
                    genericColumnName: {
                        id: "database.genericColumn.name",
                        defaultMessage: "Column {columnNumber}"
                    }
                });

            function u(e) {
                let {
                    table: t,
                    deps: {
                        intl: i,
                        randomShortID: r,
                        isPhoneNumber: o
                    },
                    options: {
                        useCsvAdaptiveSchema: l,
                        addHeadersToCollectionEnabled: u
                    }
                } = e, c = function(e, t, i, r, a = !1, o, l, u) {
                    var c;
                    let m = (e = e.filter(e => e.some(e => !!(e.text || "").trim()))).length > 0 ? e[0].length : 0,
                        _ = e.map((e, t) => ({
                            row: e,
                            rowIndex: t
                        })).filter(({
                            row: e
                        }) => e.length !== m);
                    if (_.length > 0) {
                        let e = _[0];
                        throw new(n(101787)).yI4("CsvImportError", {
                            data: {},
                            clientData: {
                                type: "csv_import_inconsistent_columns",
                                messageValues: {
                                    numTitleColumns: m,
                                    numBadRows: _.length,
                                    firstBadRowIndex: e.rowIndex + 1,
                                    firstBadRow: JSON.stringify(e.row.map(e => e.text)),
                                    firstBadRowLength: e.row.length
                                }
                            }
                        })
                    }
                    let g = null == (c = e[0]) ? void 0 : c.length;
                    null == o || o.set("ColumnCategory", function(e) {
                        if (e < 50) return "lessthan50";
                        if (e < 100) return "lessthan100";
                        if (e < 500) return "lessthan500";
                        if (e < 1e3) return "lessthan1000";
                        if (e < 5e3) return "lessthan5000";
                        else return "greaterthan5000"
                    }(g));
                    let h = null == l ? void 0 : l.columnHeaders,
                        y = void 0 !== h && h.length > 0,
                        S = [];
                    y ? (S = h.flatMap(e => e.doNotImport ? [] : [e.headerName]), null != l && l.useFirstRowAsHeaders && e.shift()) : 1 === e.length || u ? S = e[0].map((e, n) => t.formatMessage(s.genericColumnName, {
                        columnNumber: n + 1
                    })) : e.length > 1 && (S = e[0].map(e => e.text), e.shift());
                    let I = e,
                        {
                            types: k,
                            schema: x,
                            pages: C
                        } = y && h ? function(e) {
                            let {
                                body: t,
                                intl: i,
                                randomShortID: r,
                                headerTitles: a,
                                headersMetadata: o,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, u = performance.now(), {
                                types: c,
                                notToImportColumnIndex: d
                            } = function(e) {
                                let {
                                    intl: t,
                                    columns: i,
                                    randomShortID: r
                                } = e, a = [];
                                return {
                                    types: i.flatMap((e, i) => {
                                        if (e.doNotImport) return a.push(i), [];
                                        let o = n(763230).D_;
                                        return "checkbox" === e.propertyType ? o = e => v(e) : "number" === e.propertyType ? o = e => b(e) : "date" === e.propertyType && "format" in e ? o = n => w(n, t, e.format) : "date" === e.propertyType && (o = e => w(e, t)), [{
                                            id: "title" === e.propertyType ? "title" : r(),
                                            schema: {
                                                name: e.headerName,
                                                type: e.propertyType
                                            },
                                            coerce: o
                                        }]
                                    }),
                                    notToImportColumnIndex: a
                                }
                            }({
                                intl: i,
                                columns: o,
                                randomShortID: r
                            }), m = performance.now() - u;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                pages: _,
                                selectPropertyOptions: g
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l,
                                notToImportColumnIndex: d
                            });
                            if (g)
                                for (let e of c) g[e.id] && ("select" === e.schema.type || "multi_select" === e.schema.type) && (e.schema.options = function(e) {
                                    let {
                                        randomShortID: t,
                                        optionValues: i,
                                        propertyType: r
                                    } = e;
                                    return ("multi_select" === r ? i.flatMap(e => e.split(",").map(e => e.trim()).filter(e => e.length > 0)) : i.map(e => e.trim()).filter(e => e.length > 0)).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t).map(e => ({
                                        id: t(),
                                        value: e,
                                        color: (0, n(326044).Z)([])
                                    }))
                                }({
                                    randomShortID: r,
                                    optionValues: g[e.id],
                                    propertyType: e.schema.type
                                }));
                            let {
                                schema: h
                            } = p({
                                body: t,
                                intl: i,
                                randomShortID: r,
                                headers: a,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: h,
                                pages: _
                            }
                        }({
                            body: I,
                            intl: t,
                            randomShortID: i,
                            headerTitles: S,
                            headersMetadata: h,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        }) : function(e) {
                            let {
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: r,
                                useCsvAdaptiveSchema: a,
                                headers: o,
                                isPreTypedCSV: l,
                                csvEvalContext: s
                            } = e, u = performance.now(), {
                                types: c
                            } = d({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                isPhoneNumber: r,
                                useCsvAdaptiveSchema: a,
                                csvEvalContext: s
                            }), m = performance.now() - u;
                            null == s || s.set("columnTypeInferenceTimeTakenMS", m);
                            let {
                                schema: _
                            } = p({
                                body: t,
                                intl: n,
                                randomShortID: i,
                                headers: o,
                                types: c,
                                isPreTypedCSV: l
                            }), {
                                pages: g
                            } = f({
                                body: t,
                                types: c,
                                isPreTypedCSV: l
                            });
                            return {
                                types: c,
                                schema: _,
                                pages: g
                            }
                        }({
                            body: I,
                            intl: t,
                            randomShortID: i,
                            isPhoneNumber: r,
                            useCsvAdaptiveSchema: a,
                            headers: S,
                            isPreTypedCSV: y,
                            csvEvalContext: o
                        });
                    return {
                        schema: x,
                        types: k,
                        pages: C
                    }
                }(t, i, r, o, l, e.csvEvalContext, e.metadata, u);
                return function(e) {
                    let {
                        actor: t,
                        blockType: i,
                        root: r,
                        parent: o,
                        name: l,
                        format: s,
                        deps: {
                            randomID: u,
                            spaceIdCreator: c,
                            addFileIdsToBlock: d,
                            createCollectionAsyncWithStatusLabel: p
                        },
                        options: {
                            ignoreBlockCount: f,
                            legacyNonCrdt: m
                        },
                        pages: _,
                        schema: g,
                        columnIds: h
                    } = e, v = e.collectionId ? ? (null == c ? void 0 : c.idInSavedSpace(n(46241).V)) ? ? u(), y = e.collectionViewId ? ? (null == c ? void 0 : c.idInSavedSpace(n(435544).G)) ? ? u(), b = [], S = [], I = [], {
                        operations: w
                    } = n(993189).WBy.create({
                        id: v,
                        parent: r.existing ? r.record.pointer : {
                            id: r.id,
                            table: n(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        name: a().x9d(l),
                        schema: g,
                        format: {
                            collection_page_properties: n(381453).oE(h.map(e => {
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
                                static_import_collection_type: n(565546).IE.CsvImport
                            }
                        },
                        createdBy: t
                    });
                    b.push(...w);
                    let k = {
                            id: r.existing ? r.record.id : r.id,
                            type: i,
                            collection_id: v,
                            format: {
                                collection_pointer: {
                                    table: n(46241).V,
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
                            createOrUpdateBlockOperations: x
                        } = n(877308).Rf({
                            blockModelArgs: k,
                            existingBlock: r.existing ? r.record : void 0,
                            legacyNonCrdt: m
                        });
                    if (b.push(...x), p) {
                        let {
                            operations: e
                        } = n(993189).lqf.create({
                            id: y,
                            type: "table",
                            name: "Show All",
                            parent: r.existing ? r.record.pointer : {
                                id: r.id,
                                table: n(682956).ev,
                                spaceId: o.spaceId
                            },
                            space_id: o.spaceId,
                            format: {
                                collection_pointer: (0, n(9247).Z8)({
                                    collectionId: v,
                                    spaceId: o.spaceId
                                }),
                                table_properties: n(381453).oE(h.map(e => {
                                    if (e) return {
                                        visible: !0,
                                        property: e
                                    }
                                })),
                                ...s
                            },
                            createdBy: t
                        });
                        b.push(...e)
                    }
                    let C = function(e) {
                        let {
                            actor: t,
                            collectionId: i,
                            spaceId: r,
                            pages: a,
                            randomID: o,
                            spaceIdCreator: l,
                            options: s
                        } = e;
                        return a.map(a => {
                            let u = (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? o(),
                                {
                                    model: c,
                                    operations: d
                                } = n(993189).zgg.create({
                                    id: u,
                                    parentPointer: {
                                        id: i,
                                        table: n(46241).V,
                                        spaceId: r
                                    },
                                    space_id: r,
                                    type: n(955630).xd.page,
                                    createdBy: t,
                                    properties: a,
                                    ...s.ignoreBlockCount ? {
                                        ignore_block_count: !0
                                    } : void 0
                                }),
                                p = [...d];
                            if (e.addFileIdsToBlock) {
                                let e = (0, n(781539).c)(c, "", "").fileIds;
                                e.length > 0 && p.push(n(488307).op.update({
                                    pointer: c.pointer,
                                    path: [],
                                    args: {
                                        file_ids: e.map(e => e.id)
                                    }
                                }))
                            }
                            return {
                                id: u,
                                operations: p
                            }
                        })
                    }({
                        actor: t,
                        collectionId: v,
                        addFileIdsToBlock: d,
                        spaceId: o.spaceId,
                        pages: _,
                        randomID: u,
                        spaceIdCreator: c,
                        options: {
                            ignoreBlockCount: f
                        }
                    });
                    for (let {
                            operations: e
                        } of C) S.push(...e);
                    let {
                        operations: T
                    } = n(993189).lqf.create({
                        id: y,
                        type: "table",
                        name: "Show All",
                        parent: r.existing ? r.record.pointer : {
                            id: r.id,
                            table: n(682956).ev,
                            spaceId: o.spaceId
                        },
                        space_id: o.spaceId,
                        format: {
                            collection_pointer: (0, n(9247).Z8)({
                                collectionId: v,
                                spaceId: o.spaceId
                            }),
                            table_properties: n(381453).oE(h.map(e => {
                                if (e) return {
                                    visible: !0,
                                    property: e
                                }
                            })),
                            ...s
                        },
                        page_sort: C.map(e => e.id).slice(0, n(9247).WF),
                        createdBy: t
                    });
                    if (S.push(...T), !p) return {
                        operations: [...b, ...S]
                    }; {
                        let e = {
                                table: n(46241).V,
                                id: v,
                                spaceId: o.spaceId
                            },
                            t = n(488307).op.update({
                                pointer: e,
                                path: ["format", "sync_state"],
                                args: {
                                    syncing: !1,
                                    last_synced_at: Date.now()
                                }
                            });
                        return I.push(t), {
                            operations: S,
                            createCollectionOperations: b,
                            collectionFinishedOperations: I
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
                    actor: i,
                    parent: r,
                    tableId: a,
                    deps: {
                        randomID: o,
                        spaceIdCreator: l,
                        randomShortID: s
                    },
                    options: {
                        legacyNonCrdt: u,
                        ignoreBlockCount: c,
                        hasHeaderRow: d,
                        hasHeaderColumn: p
                    }
                } = e, f = [], m = t.length ? t[0].map(e => s()) : [], _ = t.map(e => (null == l ? void 0 : l.idInSavedSpace(n(682956).ev)) ? ? o());
                return f.push(...n(993189).zgg.create({
                    id: a,
                    type: n(955630).xd.table,
                    content: _,
                    format: {
                        table_block_column_order: m,
                        ...d ? {
                            table_block_column_header: !0
                        } : {},
                        ...p ? {
                            table_block_row_header: !0
                        } : {}
                    },
                    properties: {},
                    parentPointer: r,
                    space_id: r.spaceId,
                    createdBy: i,
                    ignore_block_count: !!c || void 0,
                    legacyNonCrdt: u
                }).operations), f.push(..._.flatMap((e, o) => {
                    let l = (0, n(722371).MU)(m.flatMap((e, n) => {
                        var i;
                        let r = null == (i = t[o]) || null == (i = i[n]) ? void 0 : i.textValue;
                        return r ? [
                            [e, r]
                        ] : []
                    }));
                    return n(993189).zgg.create({
                        id: e,
                        type: n(955630).xd.tableRow,
                        parentPointer: {
                            id: a,
                            table: n(682956).ev,
                            spaceId: r.spaceId
                        },
                        space_id: r.spaceId,
                        properties: l,
                        createdBy: i,
                        legacyNonCrdt: u
                    }).operations
                })), {
                    operations: f
                }
            }

            function d(e) {
                let {
                    body: t,
                    intl: a,
                    randomShortID: s,
                    isPhoneNumber: u,
                    useCsvAdaptiveSchema: c,
                    csvEvalContext: d
                } = e, p = [{
                    test: D.bind(null, u),
                    sampledSchemaIsComplete: !0
                }, {
                    test: S,
                    sampledSchemaIsComplete: !0
                }, {
                    test: C,
                    sampledSchemaIsComplete: !0
                }, {
                    test: A,
                    sampledSchemaIsComplete: !0
                }, {
                    test: k,
                    sampledSchemaIsComplete: !0
                }, {
                    test: y,
                    sampledSchemaIsComplete: !1
                }, {
                    test: E,
                    sampledSchemaIsComplete: !1
                }, {
                    test: F,
                    sampledSchemaIsComplete: !1
                }, {
                    test: N,
                    sampledSchemaIsComplete: !0
                }];
                return {
                    types: n(381453).oE(n(381453).$1(t).map(e => e.length && e[0].columnType ? e[0].columnType : function(e, t, a, s, u, c) {
                        let d = t.filter(e => !!e);
                        if (0 === d.length) return N(e, d);
                        if (u) {
                            let n = d.length > 1e3 ? function(e) {
                                let t = e.length,
                                    n = [];
                                for (let i = 0; i < 1e3; i++) {
                                    let i = Math.floor(Math.random() * t);
                                    n.push(e[i])
                                }
                                return n
                            }(d) : d;
                            for (let u of s) {
                                let s = u.test(e, n, a);
                                if (s) {
                                    let n = s;
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
                                        }), n = N(e, t);
                                        let a = (null == c ? void 0 : c.get(o)) || 0;
                                        (0, i().Et)(a) && (null == c || c.set(o, a + 1))
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
                                    let a = (null == c ? void 0 : c.get(l)) || 0;
                                    return (0, i().Et)(a) && (null == c || c.set(l, a + 1)), n
                                }
                            }
                        } else {
                            let t = d.filter(e => !n(381453).Im(e)).slice(0, 100);
                            for (let n of s) {
                                let s = n.test(e, t, a);
                                if (s) {
                                    let u = n.sampledSchemaIsComplete || t.length === d.length ? s : n.test(e, d, a);
                                    if (u) {
                                        if (!1 === u.isFullMatch) {
                                            r().log({
                                                level: "info",
                                                from: "csvHelper",
                                                type: "csvColumnTypes",
                                                data: {
                                                    message: "Partial column type match detected, Potential data loss due to parsing failures",
                                                    columnType: u.schema.type,
                                                    matchType: "Partial"
                                                }
                                            });
                                            let e = (null == c ? void 0 : c.get(o)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(o, e + 1))
                                        } else {
                                            let e = (null == c ? void 0 : c.get(l)) || 0;
                                            (0, i().Et)(e) && (null == c || c.set(l, e + 1))
                                        }
                                        return u
                                    }
                                }
                            }
                        }
                        return N(e, [])
                    }(a, e.map(e => null == e ? void 0 : e.text), s, p, c, d)))
                }
            }

            function p(e) {
                let {
                    body: t,
                    intl: n,
                    randomShortID: i,
                    headers: r,
                    types: o,
                    isPreTypedCSV: l
                } = e, u = r.map(() => !1);
                if (!l) {
                    for (let e = 0; e < r.length; e++)
                        if ("text" === o[e].schema.type)
                            for (let n = 0; n < t.length; n++) {
                                let i = t[n][e].textValue;
                                if (i) {
                                    for (let r of i)
                                        if (a().BEe(r)) {
                                            u[e] = !0, n = t.length;
                                            break
                                        }
                                }
                            }
                }
                let c = !0,
                    d = {
                        title: {
                            type: "title",
                            name: n.formatMessage(s.titleColumnName)
                        }
                    };
                return r.forEach((e, t) => {
                    let n = o[t];
                    if (n)
                        if ("text" !== n.schema.type || !c || u[t] || l)
                            if (l && "title" === n.schema.type) {
                                let t = d.title;
                                t && (t.name = e)
                            } else {
                                let t = n.id ? ? i();
                                n.id || (n.id = t), d[t] = { ...n.schema,
                                    name: e
                                }
                            }
                    else {
                        c = !1, n.id = "title", n.schema = {
                            type: "title",
                            name: e
                        };
                        let t = d.title;
                        t && (t.name = e)
                    }
                }), {
                    schema: d
                }
            }

            function f(e) {
                let {
                    body: t,
                    types: i,
                    isPreTypedCSV: r,
                    notToImportColumnIndex: o
                } = e, l = {};
                return {
                    pages: t.map(e => {
                        null != o && o.length && (e = e.filter((e, t) => !o.includes(t)));
                        let t = {};
                        return i.forEach((i, o) => {
                            if (i) {
                                let {
                                    id: s,
                                    schema: u,
                                    coerce: c
                                } = i, {
                                    type: d
                                } = u;
                                if (s) {
                                    let i = e[o] || "";
                                    if ("url" === d) t[s] = n(561872).jw(i.text);
                                    else if ("date" === d) t[s] = n(561872).m5(c(i.text));
                                    else if ("text" === d) t[s] = i.textValue || a().x9d(c(i.text));
                                    else if ("file" === d) t[s] = i.textValue || [];
                                    else if ("select" === d || "multi_select" === d) {
                                        let e = [];
                                        if (e = "multi_select" === d ? i.text.split(",").map(e => e.trim()).filter(e => e.length > 0).filter((e, t, n) => n.findIndex(t => t.toLowerCase() === e.toLowerCase()) === t) : i.text.trim() ? [i.text.trim()] : [], r)
                                            for (let t of e) {
                                                if (!t || !t.trim()) continue;
                                                let e = t.trim();
                                                l[s] || (l[s] = []), l[s].find(t => t.toLowerCase() === e.toLowerCase()) || l[s].push(e)
                                            }
                                        t[s] = a().x9d(c(i.text))
                                    } else t[s] = a().x9d(c(i.text))
                                }
                            }
                        }), t
                    }),
                    selectPropertyOptions: r ? l : void 0
                }
            }
            let m = ["yes", "Yes", "true", "True", "checked"],
                _ = ["no", "No", "false", "False", "unchecked"];

            function g(e) {
                return m.some(t => e === t) || _.some(t => e === t)
            }

            function h(e, t) {
                return e.length === t.length
            }

            function v(e) {
                return m.some(t => e === t) ? n(745680).I1 : n(745680).oP
            }

            function y(e, t) {
                if (t.every(g)) return {
                    schema: {
                        type: "checkbox"
                    },
                    validate: g,
                    coerce: e => v(e)
                }
            }

            function b(e) {
                let t = n(700369).sA(e);
                return `${t?t.value:void 0}`
            }

            function S(e, t) {
                let r = t.map(n(700369).sA),
                    a = r[0];
                if (a && r.every(e => !!(e && e.format === a.format))) return {
                    schema: {
                        type: "number",
                        number_format: a.format
                    },
                    validate(e) {
                        let t = n(700369).sA(e);
                        return !i().pN(t) && t.format === a.format
                    },
                    coerce: e => b(e)
                }
            }

            function I(e, t) {
                return (!parseInt(t) || !(t.length <= 6)) && !!n(629518).JC(t, e)
            }

            function w(e, t, i) {
                let r = e.includes("→");
                return n(629518).JC(e, t, r ? void 0 : i)
            }

            function k(e, t) {
                let n = t.filter(t => I(e, t));
                if (n.length >= t.length / 2) return {
                    schema: {
                        type: "date"
                    },
                    validate: t => I(e, t),
                    coerce: t => w(t, e),
                    isFullMatch: h(t, n)
                }
            }

            function x(e) {
                return e.length < 320 && e.includes("@") && n(159523).t6(e, "email")
            }

            function C(e, t) {
                let i = t.filter(x);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "email"
                    },
                    validate: x,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function T(e) {
                return e.length < 320 && n(159523).t6(e, "url")
            }

            function A(e, t) {
                let i = t.filter(T);
                if (i.length >= t.length / 2) return {
                    schema: {
                        type: "url"
                    },
                    validate: T,
                    coerce: n(763230).D_,
                    isFullMatch: h(t, i)
                }
            }

            function M(e, t) {
                return !String(t).match(/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/) && e(String(t))
            }

            function D(e, t, i) {
                let r = M.bind(null, e),
                    a = i.filter(r);
                if (a.length >= i.length / 2) return {
                    schema: {
                        type: "phone_number"
                    },
                    validate: r,
                    coerce: n(763230).D_,
                    isFullMatch: h(i, a)
                }
            }

            function E(e, t, i) {
                var r, a, o, l;
                let s = [];
                t.forEach(e => e.split(",").forEach(e => s.push(e.trim())));
                let u = n(561872).ki(s),
                    c = new Set(u);
                if (r = u.length, (a = s.length) > t.length && (o = r, l = a, o > 0 && o ** 2 < l)) return {
                    schema: {
                        type: "multi_select",
                        options: u.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => c.has(e),
                    coerce: n(763230).D_
                }
            }

            function F(e, t, i) {
                var r, a;
                let o = n(561872).ki(t),
                    l = new Set(o);
                if (r = o.length, a = t.length, r > 0 && r ** 2 < a) return {
                    schema: {
                        type: "select",
                        options: o.map((e, t) => ({
                            id: i(),
                            value: e,
                            color: (0, n(326044).Z)([])
                        }))
                    },
                    validate: e => l.has(e),
                    coerce: n(763230).D_
                }
            }

            function N(e, t) {
                return {
                    schema: {
                        type: "text"
                    },
                    validate: () => !0,
                    coerce: n(763230).D_
                }
            }

            function P(e, t) {
                t || (t = function(e, t) {
                    let n = ",",
                        i = 0,
                        r = e.split(/\r?\n/).slice(0, 10).join("\n");
                    for (let e of t) {
                        let t = function(e, t) {
                            let n = [],
                                i = [],
                                r = "",
                                a = !1;
                            for (let o = 0; o < e.length; o++) {
                                let l = e[o],
                                    s = e[o + 1];
                                '"' === l ? a && '"' === s ? (r += '"', o++) : a = !a : l !== t || a ? "\n" !== l && "\r" !== l || a ? r += l : (i.push(r), i.length > 0 && n.push(i), i = [], r = "", "\r" === l && "\n" === s && o++) : (i.push(r), r = "")
                            }
                            return (r || i.length > 0) && (i.push(r), n.push(i)), n.filter(e => e.length > 0 && e.some(e => e.trim()))
                        }(r, e);
                        if (t.length <= 1) continue;
                        let a = t.map(e => e.length),
                            o = function(e) {
                                var t;
                                return Number((null == (t = Object.entries(e.reduce((e, t) => (e[t] = (e[t] || 0) + 1, e), {})).sort((e, t) => t[1] - e[1])[0]) ? void 0 : t[0]) || 0)
                            }(a),
                            l = a.filter(e => e === o).length / a.length,
                            s = o >= 6 ? .6 : .7;
                        if (o <= 1 || l < s) continue;
                        let u = t.flat().filter(t => t.includes(e)).length / (t.length * o),
                            c = 100 * l + 10 * o - 50 * u;
                        c > i && (i = c, n = e)
                    }
                    return n
                }(e, [",", ";", "	", "|"]));
                let n = [],
                    i = [],
                    r = "",
                    a = !1;
                for (let o = 0; o < e.length; o++) {
                    let l = e[o],
                        s = e[o + 1];
                    if ('"' === l) a && '"' === s ? (r += '"', o++) : a = !a;
                    else if (l !== t || a)
                        if ("\n" !== l && ("\r" !== l || "\n" === s) || a) {
                            if ("\r" === l && "\n" === s && !a) continue;
                            r += l
                        } else i.push(r), n.push(i), i = [], r = "";
                    else i.push(r), r = ""
                }
                return (r || i.length > 0) && (i.push(r), n.push(i)), n
            }
            let U = [{
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
        789701: (e, t, n) => {
            n.d(t, {
                y: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.87 3.62 16.25 12.75",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M6.303 3.625c-.71 0-1.374.355-1.768.946L2.232 8.025c-.233.35-.357.76-.357 1.18v5.045c0 1.174.951 2.125 2.125 2.125h12a2.125 2.125 0 0 0 2.125-2.125V9.204c0-.42-.124-.83-.357-1.179l-2.303-3.454a2.13 2.13 0 0 0-1.768-.946zm-.728 1.64a.88.88 0 0 1 .728-.39h7.394c.293 0 .566.146.728.39l2.303 3.454a1 1 0 0 1 .083.156h-4.702a.625.625 0 0 0-.625.625v.476a1.484 1.484 0 0 1-2.968 0V9.5a.625.625 0 0 0-.625-.625H3.189a1 1 0 0 1 .083-.156zm-2.45 4.86H7.27a2.734 2.734 0 0 0 5.46 0h4.145v4.125a.875.875 0 0 1-.875.875H4a.875.875 0 0 1-.875-.875z"
                    })
                },
                r = (0, n(104509).wt)("inbox", i, "default")
        },
        799891: (e, t, n) => {
            n.d(t, {
                y: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.81 2.39 16.38 15.08",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M16.938 9.353c0-2.97-2.539-5.54-6.545-5.697L10 3.648c-4.232 0-6.938 2.639-6.938 5.705 0 1.438.583 2.752 1.617 3.76a.63.63 0 0 1 .18.546 7.3 7.3 0 0 1-.89 2.528c1.108-.13 2.12-.614 3.01-1.344l.063-.044a.63.63 0 0 1 .505-.073 9 9 0 0 0 2.454.333l.392-.007c4.006-.158 6.545-2.728 6.545-5.699m1.25 0c0 3.803-3.234 6.766-7.747 6.948l-.44.008a10.2 10.2 0 0 1-2.485-.299c-1.349 1.022-2.985 1.62-4.826 1.428a.625.625 0 0 1-.406-1.033c.712-.817 1.096-1.737 1.284-2.642-1.116-1.197-1.756-2.733-1.756-4.41 0-3.925 3.447-6.955 8.189-6.955l.44.009c4.512.181 7.747 3.143 7.747 6.946"
                    })
                },
                r = (0, n(104509).wt)("chatBubble", i, "default")
        },
        802942: (e, t, n) => {
            n.d(t, {
                k: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "2.18 1.73 11.64 12.54",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M7.435 1.735c-.875 0-1.585.71-1.585 1.585v.735H3.765c-.875 0-1.585.71-1.585 1.585v7.04c0 .875.71 1.585 1.585 1.585h4.8c.876 0 1.585-.71 1.585-1.585v-.735h2.085c.876 0 1.585-.71 1.585-1.585V5.638c0-.42-.167-.824-.464-1.121l-2.318-2.318a1.6 1.6 0 0 0-1.12-.464zM7.1 3.32c0-.185.15-.335.335-.335H9.58V4.44c0 .848.687 1.535 1.535 1.535h1.455v4.385c0 .185-.15.335-.335.335H10.15V7.958c0-.42-.167-.824-.464-1.121L7.368 4.519a1.6 1.6 0 0 0-.268-.215zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385m-7.3 1.2c0-.185.15-.335.335-.335H5.91V6.76c0 .848.687 1.535 1.535 1.535H8.9v4.385c0 .185-.15.335-.335.335h-4.8a.335.335 0 0 1-.335-.335zm3.63 1.12v-.781l1.166 1.166h-.78a.385.385 0 0 1-.386-.385"
                    })
                },
                r = (0, n(104509).wt)("docOnDocSmall", i, "small")
        },
        816231: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var i = n(296540),
                r = n(474848);

            function a(e) {
                let t = (0, i.useRef)(null),
                    n = (0, i.useRef)(!1);
                (0, i.useEffect)(() => {
                    let n = t.current;
                    if (!n) return;
                    let i = e.el.getBoundingClientRect();
                    n.style.height = `${i.height}px`;
                    let r = 0,
                        a = e => {
                            cancelAnimationFrame(r), r = requestAnimationFrame(() => {
                                ! function({
                                    div: e,
                                    rect: t,
                                    mouseX: n,
                                    mouseY: i
                                }) {
                                    let {
                                        x: r,
                                        y: a,
                                        height: o,
                                        width: l
                                    } = t;
                                    if (n > r) {
                                        let t = Math.max(n - (r + l), 10);
                                        e.style.insetInlineEnd = `${-t}px`, e.style.insetInlineStart = "", e.style.width = `${t}px`, e.style.clipPath = `polygon(0% 0%, 0% 100%, 100% ${100*(i-a)/o}%)`
                                    } else {
                                        let t = Math.max(r - n, 10);
                                        e.style.insetInlineEnd = "", e.style.insetInlineStart = `${-t}px`, e.style.width = `${t}px`, e.style.clipPath = `polygon(100% 0%, 0% ${100*(i-a)/o}%, 100% 100%)`
                                    }
                                }({
                                    div: n,
                                    rect: i,
                                    mouseX: e.clientX,
                                    mouseY: e.clientY
                                })
                            })
                        };
                    return window.addEventListener("mousemove", a), () => {
                        window.removeEventListener("mousemove", a), cancelAnimationFrame(r)
                    }
                }, [e.el]);
                let a = i.useCallback(e => {
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
                return (0, r.jsx)("div", {
                    ref: t,
                    onClick: a,
                    className: "x1ypdohk x10l6tqk x67bb7w x13vifvy"
                })
            }
            let o = {
                    krdFHd: "x6nl9eh",
                    kfmiAY: "x1a5l9x9",
                    kT0f0o: "x7vuprf",
                    kVL7Gh: "x1mg3h75",
                    kWkggS: "x7nwptm",
                    $$css: !0
                },
                l = {
                    kXHlph: "x1plvlek",
                    kORKVm: "xryxfnj",
                    $$css: !0
                },
                s = i.forwardRef(function({
                    onClick: e,
                    children: t,
                    renderExtension: s,
                    allowOptionalExtensionMenu: u,
                    ...c
                }, d) {
                    let {
                        disabled: p,
                        disableDefaultClick: f,
                        onFocus: m,
                        focused: _,
                        placementToOrigin: g,
                        alignmentToOrigin: h,
                        disableCloseOnEnter: v,
                        bottomSheetInitialState: y,
                        popupTypeOverride: b
                    } = c, S = (0, n(533992).WS)(), I = (0, n(649476).Tf)(), [w, k] = (0, i.useState)(!1), [x, C] = (0, i.useState)(!1), T = (0, i.useRef)(null), A = (0, i.useRef)(null), M = (0, i.useRef)(null), D = (0, i.useRef)(null), E = (0, i.useCallback)(() => {
                        M.current && window.clearTimeout(M.current), D.current && window.clearTimeout(D.current), M.current = null, D.current = null
                    }, []), F = (0, i.useCallback)(() => {
                        E(), p || (k(!0), C(!0))
                    }, [p, E]), N = (0, i.useCallback)(() => {
                        E(), C(!1), k(!1)
                    }, [E]), P = (0, i.useCallback)(e => {
                        E(), w || (e && e.preventDefault && e.preventDefault(), M.current = window.setTimeout(F, 120))
                    }, [w, E, F]), U = (0, i.useCallback)(() => {
                        C(!1), E(), w && (D.current = window.setTimeout(N, 100))
                    }, [w, N, E]), O = (0, i.useCallback)(t => {
                        m(), F(), u && (null == e || e(t), N())
                    }, [m, F, u, e, N]), R = (0, i.useCallback)(() => {
                        S || P()
                    }, [P, S]), V = (0, i.useCallback)(() => {
                        S || (m(), P())
                    }, [m, P, S]), B = (0, i.useCallback)(e => {
                        if (n(986939).A.isMobile) return;
                        let t = T.current;
                        w && t && !t.contains(e.target) && N()
                    }, [w, N]), j = (0, i.useCallback)(e => {
                        13 === e.keyCode && w && !v && N()
                    }, [w, N, v]);
                    (0, i.useEffect)(() => {
                        if (!f) return window.addEventListener("click", B), () => {
                            window.removeEventListener("click", B)
                        }
                    }, [f, B]), (0, i.useEffect)(() => (window.addEventListener("keydown", j), () => {
                        window.removeEventListener("keydown", j)
                    }), [j]);
                    let L = (0, i.useRef)(_);
                    (0, i.useEffect)(() => {
                        !_ && L.current && U(), L.current = _
                    }, [_, U]);
                    let z = { ...(0, n(63390).A)({
                                onMouseEnter: R,
                                onClick: O
                            }, c),
                            showExtensionArrow: !0
                        },
                        q = n(423291).n.Popup;
                    return b ? q = b : S && (q = I ? n(423291).n.BottomSheet : n(423291).n.SlideUp), (0, r.jsx)(n(369064).N, {
                        debugName: "ExtensionMenuItem",
                        capture: _,
                        onEnter: w ? void 0 : P,
                        onRight: P,
                        onLeft: w ? U : void 0,
                        onEsc: w ? U : void 0,
                        children: (0, r.jsx)(n(182718).zD, {
                            popupType: q,
                            bottomSheetInitialState: y,
                            open: w,
                            placementToOrigin: g ? ? "right",
                            alignmentToOrigin: h ? ? "center",
                            originGap: 0,
                            disableMouseCapture: !0,
                            preventBlockRenderQueueOnEnter: !0,
                            preventScaleTransition: !S,
                            preventCaptureEsc: !0,
                            ref: T,
                            content: () => (0, r.jsxs)(r.Fragment, {
                                children: [!S && x && A.current ? (0, r.jsx)(a, {
                                    el: A.current
                                }) : null, (0, r.jsx)("div", {
                                    ref: A,
                                    ...{
                                        className: "x5yr21d"
                                    },
                                    children: s({
                                        onMouseEnter: V
                                    }, {
                                        close: U
                                    })
                                })]
                            }),
                            style: [l, S && o],
                            trapFocus: !0,
                            onDismiss: N,
                            children: null == t ? void 0 : t(z, d)
                        })
                    })
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
        832248: (e, t, n) => {
            n.d(t, {
                S7: () => l,
                fF: () => y,
                es: () => v,
                LE: () => g,
                zs: () => _,
                HE: () => m,
                yg: () => h,
                QH: () => f,
                kn: () => p,
                mB: () => s,
                L$: () => u,
                X3: () => c,
                jX: () => d
            }), n(898992), n(354520), n(581454), n(944114);
            var i = () => n(896346);
            class r extends i().p3 {
                constructor(e, t) {
                    super(e, t)
                }
                after(e, t) {
                    return super.after(e, t)
                }
            }
            let a = (0, n(109939).YK)({
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
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 99
            }

            function u(e) {
                return (0, n(627179).Et)(e) && Number.isInteger(e) && e > 0 && e <= 999
            }

            function c(e) {
                let {
                    start_date: t,
                    frequency: i,
                    interval: a,
                    weekdays: s,
                    timezone: u,
                    hour: c,
                    minute: d
                } = e, p = (0, n(943003).eU)(t);
                "hour" === i && p.setUTCHours(c ? ? 0, d ? ? 0, 0, 0);
                let f = "week" === i && s ? s.map(e => l[e]) : void 0,
                    m = {};
                return (0, n(722371).O9)(e.end_condition) && ("date" === e.end_condition.type ? m.until = (0, n(943003).eU)(e.end_condition.end_at) : "number" === e.end_condition.type ? m.count = e.end_condition.number_of_occurrences : (0, n(722371).HB)(e.end_condition)), "month" === e.frequency && (0, n(722371).O9)(e.monthly_restriction) && ("monthdays" === e.monthly_restriction.type ? m.bymonthday = e.monthly_restriction.monthdays : "weekdays_in_month" === e.monthly_restriction.type ? m.byweekday = (function e(t, ...n) {
                    if (0 === n.length) return t.map(e => [e]);
                    let i = [];
                    for (let r of t) i.push(...e(n[0], ...n.slice(1)).map(e => [r, ...e]));
                    return i
                })(e.monthly_restriction.weekdays, e.monthly_restriction.week_numbers).map(([e, t]) => l[e].nth(t)) : (0, n(722371).HB)(e.monthly_restriction)), new r({
                    freq: o[i],
                    dtstart: p,
                    interval: a,
                    byweekday: f,
                    tzid: "hour" === i ? void 0 : u,
                    ..."hour" === i ? {} : {
                        byhour: c ? ? 0,
                        byminute: d ? ? 0,
                        bysecond: 0
                    },
                    ...m
                })
            }

            function d(e) {
                var t;
                if (0 === e.length) return {
                    violatesConstraint: !1,
                    templateNestingExceedsMaxDepth: !1,
                    ancestorHasDailyTemplate: !1,
                    nestedDepthOfAutomationAncestors: void 0,
                    immediateAncestorRecurrenceType: void 0
                };
                let n = e.filter(e => {
                        var t;
                        return (null == (t = e.getRecurrence()) ? void 0 : t.frequency) === "day"
                    }),
                    i = e.length,
                    r = null == (t = e[0].getRecurrence()) ? void 0 : t.frequency,
                    a = i > 1,
                    o = n.length >= 1;
                return {
                    violatesConstraint: a || o,
                    templateNestingExceedsMaxDepth: a,
                    ancestorHasDailyTemplate: o,
                    nestedDepthOfAutomationAncestors: i,
                    immediateAncestorRecurrenceType: r
                }
            }

            function p(e) {
                return 0 === e.hour || 1 === e.hour || 2 === e.hour
            }

            function f(e) {
                return c(e).after((0, n(943003).eU)((0, n(943003).Rz)())) || void 0
            }

            function m(e) {
                let {
                    recurrence: t,
                    intl: i
                } = e, r = "hour" === t.frequency ? function(e) {
                    let t = n(906745).DateTime.now();
                    if (n(906745).DateTime.fromMillis(e.start_date) > t) return e;
                    let i = t.startOf("hour");
                    return { ...e,
                        start_date: i.toMillis(),
                        hour: i.hour,
                        minute: i.minute
                    }
                }(t) : t, o = f(v(r));
                if (!o) return;
                let l = n(906745).DateTime.fromJSDate(o).toUTC().setZone("local", {
                    keepLocalTime: !0
                }).setLocale((0, n(599412).H)(i));
                "hour" !== r.frequency && (l = l.setZone(r.timezone));
                let s = "hour" !== t.frequency && p(t),
                    u = (0, n(850640).Yq)({
                        date: l,
                        dateFormat: "relative",
                        allowRelativeDates: !0,
                        intl: i,
                        shortenDate: !0
                    });
                if (s) return i.formatMessage(a.dateBetweenMidnightAnd3AM, {
                    date: u
                }); {
                    let e = l.toLocaleString(n(906745).DateTime.TIME_SIMPLE);
                    return t.timezone !== (0, n(714350).P)() && (e += ` ${l.toFormat("ZZZZ")}`), i.formatMessage(a.dateAtTime, {
                        date: u,
                        time: e
                    })
                }
            }

            function _(e, t) {
                return (0, n(722371).O9)(e) ? "number" === e.type ? t.formatMessage(a.numberEndConditionDescription, {
                    number: e.number_of_occurrences
                }) : "date" === e.type ? (0, n(850640).Yq)({
                    date: n(906745).DateTime.fromMillis(e.end_at),
                    dateFormat: "relative",
                    allowRelativeDates: !0,
                    intl: t,
                    shortenDate: !0
                }) : void(0, n(722371).HB)(e) : t.formatMessage(a.noEndCondition)
            }

            function g(e) {
                return { ...e,
                    start_date: (0, n(943003).l1)(e.start_date),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? {
                        type: "date",
                        end_at: (0, n(943003).l1)(e.end_condition.end_at)
                    } : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function h(e, t, n) {
                return e.plus(n - t)
            }

            function v(e) {
                var t;
                let i;
                return { ...e,
                    start_date: (0, n(943003).Rz)(new Date(e.start_date)),
                    end_condition: e.end_condition ? "number" === e.end_condition.type ? e.end_condition : "date" === e.end_condition.type ? (t = e.end_condition, i = n(906745).DateTime.fromMillis(t.end_at).set({
                        hour: e.hour ? ? 0,
                        minute: e.minute ? ? 0
                    }), {
                        type: "date",
                        end_at: (0, n(943003).Rz)(i.toJSDate())
                    }) : (0, n(722371).HB)(e.end_condition) : void 0
                }
            }

            function y(e, t) {
                let i = n(381453).fN(e, e => void 0 !== e),
                    r = n(381453).fN(t, e => void 0 !== e);
                return n(381453).n4(i, r)
            }
        },
        853160: (e, t, n) => {
            n.r(t), n.d(t, {
                checkmarkCircleIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            var i = n(474848);
            let r = {
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
                a = (0, n(104509).wt)("checkmarkCircle", r, "default")
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
                    r = (0, n(682985).K8)(() => n(375592).T.getData(i, {
                        userId: i.currentUser.id || ""
                    }), [i]);
                return (0, n(682985).K8)(() => (0, n(407998).V)({
                    environment: i,
                    spaceStore: e,
                    billingData: t,
                    externalOrgSummary: r
                }), [i, e, t, r])
            }
        },
        855361: (e, t, n) => {
            n.d(t, {
                S: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceId: i
                } = e;
                return (0, n(682985).K8)(() => {
                    if (i) return (0, n(616579).j)({
                        environment: t,
                        spaceId: i
                    })
                }, [t, i])
            }
        },
        862451: (e, t, n) => {
            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    clientStore: r,
                    userStore: a,
                    transcript: o,
                    threadId: l,
                    initialAgentActions: s,
                    analyticsArgs: u
                } = e, c = (0, n(330942).f_)(o), {
                    serverCommitResult: d,
                    performResult: p
                } = (0, n(377796).createAndCommit)({
                    userAction: "WorkflowActions.addTranscriptToNewThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: i.id
                    },
                    perform: e => (0, n(757688).aP)({
                        environment: t,
                        spaceStore: i,
                        userStore: a,
                        transaction: e,
                        transcript: o,
                        threadId: l,
                        threadType: (null == c ? void 0 : c.type) ? ? "workflow"
                    })
                });
                return (0, n(757688).WE)({
                    environment: t,
                    clientStore: r,
                    threadStore: p,
                    waitBeforeSending: d,
                    analyticsArgs: u,
                    sendPatchResponse: !1,
                    initialAgentActions: s
                }), p
            }
            async function r(e) {
                let {
                    environment: t,
                    parentStore: i,
                    userStep: r,
                    onThreadChange: a
                } = e, o = n(674880).defaultInferenceContextStore.state;
                if (!o) throw Error("No inference context");
                let {
                    spaceStore: l
                } = o, {
                    performResult: s,
                    serverCommitResult: u
                } = (0, n(377796).createAndCommit)({
                    userAction: "SetupGenerator.handlePromptSubmit",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: l.id
                    },
                    perform: e => (function(e) {
                        let {
                            environment: t,
                            transaction: i,
                            parentStore: r
                        } = e, a = n(728372).AppStoreSidebarSpaceStore.state, o = n(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!a || !o) throw Error("No current space");
                        let l = n(124937).Wv({
                            environment: t,
                            type: "collection_view_page",
                            transaction: i,
                            inMemoryRecordCache: a.inMemoryRecordCache
                        });
                        return (0, n(351418).Ls)({
                            environment: t,
                            parentStore: r ? ? a,
                            collectionViewBlockStore: l,
                            transaction: i,
                            appendOrPrepend: "append",
                            spaceViewStore: o
                        }), {
                            workflowStore: function(e) {
                                let {
                                    environment: t,
                                    store: i,
                                    transaction: r
                                } = e;
                                return function(e) {
                                    let {
                                        environment: t,
                                        store: i,
                                        transaction: r,
                                        workflowData: a
                                    } = e, o = n(124937).vt({
                                        environment: t,
                                        table: n(43296).C,
                                        args: {
                                            id: (0, n(295447).Z1)({
                                                environment: t,
                                                table: n(43296).C,
                                                spaceId: i.getSpaceId()
                                            }),
                                            data: a,
                                            parentPointer: {
                                                table: n(682956).ev,
                                                id: i.id
                                            },
                                            space_id: i.getSpaceId()
                                        },
                                        inMemoryRecordCache: i.inMemoryRecordCache,
                                        transaction: r
                                    });
                                    return (0, n(715144).z)({
                                        stores: [i],
                                        update: {
                                            workflow_id: o.id
                                        },
                                        transaction: r
                                    }), o
                                }({
                                    environment: t,
                                    transaction: r,
                                    store: i,
                                    workflowData: {
                                        modules: []
                                    }
                                })
                            }({
                                environment: t,
                                store: l,
                                transaction: i
                            }),
                            collectionViewBlockStore: l
                        }
                    })({
                        environment: t,
                        transaction: e,
                        parentStore: i
                    })
                });
                await u;
                let {
                    collectionViewBlockStore: c
                } = s, d = function(e) {
                    let {
                        environment: t,
                        inferenceContext: i,
                        addSteps: r = [],
                        config: a
                    } = e;
                    return (0, n(674880).Xd)({
                        environment: t,
                        inferenceContext: i,
                        config: a && "workflow" !== a.type ? a : (0, n(922900).getWorkflowAgentConfig)({
                            environment: t,
                            ...a
                        }),
                        addSteps: r,
                        surface: "workflows"
                    })
                }({
                    environment: t,
                    inferenceContext: o,
                    store: c,
                    addSteps: [r]
                }), p = (0, n(225900).N)({
                    environment: t,
                    spaceStore: l,
                    transcript: d
                });
                null == a || a(p)
            }
            async function a(e) {
                let {
                    environment: t,
                    clientStore: i,
                    message: r,
                    configs: a
                } = e, o = (0, n(328765).S)();
                if (!o) throw Error("No current space store");
                let l = t.currentUser.id;
                if (!l) throw Error("No current user");
                if ((0, n(247438).q4_)(r).trim().length < 6) return;
                let s = a.filter(e => n(180139)._z.includes(e.type)),
                    u = await t.api.callStreamApi({
                        eventName: "runInferenceTranscript",
                        environment: t,
                        data: {
                            transcript: [{
                                id: (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).mSw,
                                    spaceId: o.id
                                }),
                                type: "config",
                                value: {
                                    type: "route-inference-transcript",
                                    configs: s
                                }
                            }, {
                                id: (0, n(295447).Z1)({
                                    environment: t,
                                    table: n(832375).mSw,
                                    spaceId: o.id
                                }),
                                type: "user",
                                value: r,
                                userId: l
                            }],
                            traceId: (0, n(4962).Ay)(),
                            spaceId: o.id,
                            generateTitle: !1,
                            isUserInAnySalesAssistedSpace: (0, n(598132).h0)(t),
                            isSpaceSalesAssisted: (0, n(598132).lM)(t, o.id)
                        },
                        headers: (0, n(115118).WS)({
                            spaceId: o.id
                        })
                    });
                if ("failed" === u.type) throw u.error;
                if (n(331653).hS.is(u.data)) {
                    for await (let e of u.data) if ("config" === e.type) i.state.userSelectedConfig || i.setState({ ...i.state,
                        configForNewTranscripts: e.value
                    });
                    else if ("error" === e.type) throw e.message
                }
            }

            function o(e) {
                var t;
                let {
                    environment: i,
                    oldThreadStore: r,
                    newThreadStore: a,
                    openUsingQuickSearchHandler: o,
                    openInNewTab: l,
                    createdSource: s,
                    resetLocalThreadStore: u,
                    isAgent: d,
                    initialAgentActions: p
                } = e, f = (null == a ? void 0 : a.id) || (d ? n(548124).NEW_CHAT_THREAD_ID : void 0), m = null == a ? void 0 : a.getConfig(), _ = (0, n(330942).sQ)(m);
                (null == m ? void 0 : m.type) === "search" ? (0, n(850552).By)({
                    sessionId: void 0,
                    searchSessionId: _,
                    threadId: f,
                    environment: i,
                    createdSource: s,
                    isAgent: !1
                }) : (null == m ? void 0 : m.type) === "workflow" && null != p && p.includes("injectSearchTool") && (0, n(850552).By)({
                    sessionId: void 0,
                    searchSessionId: _,
                    threadId: f,
                    environment: i,
                    createdSource: s,
                    isAgent: !0
                }), f && (null == m ? void 0 : m.type) === "researcher" && ((null == a ? void 0 : a.getTranscript()) || []).some(e => "researcher-report" === e.type) && n(274498).MU({
                    environment: i,
                    researchModeThreadId: f,
                    source: "chat_history"
                });
                let g = i.device.isElectron,
                    h = i.RouterStore.state.route,
                    v = "chat" === h.name && h.peekViewBlockId && ("settings" === h.workflowViewType || "activity" === h.workflowViewType) ? {
                        workflowViewType: h.workflowViewType,
                        peekViewBlockId: h.peekViewBlockId,
                        peekMode: h.peekMode
                    } : void 0,
                    y = "chat" === h.name && n(273061).S.state.open && n(273061).S.state.agentId && n(273061).S.state.mode ? {
                        workflowViewType: n(273061).S.state.mode,
                        peekViewBlockId: n(273061).S.state.agentId,
                        peekMode: h.peekMode
                    } : void 0,
                    b = v ? ? y,
                    S = c({
                        environment: i,
                        threadId: f,
                        spaceId: null == (t = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: null == r ? void 0 : r.getConfig(),
                        additionalQueryParams: b ? {
                            [n(737869).CS]: b.workflowViewType,
                            [n(737869).ZI]: (0, n(4962).Xw)(b.peekViewBlockId),
                            ...b.peekMode ? {
                                [n(737869).fT]: b.peekMode
                            } : {}
                        } : void 0
                    });
                if ("chat" !== h.name && "ai" !== h.name && n(562733).zI.setState({ ...n(562733).zI.state,
                        fullPageChatSourceUrl: window.location.href
                    }), g && (null == u || u()), o && g) return void(0, n(916187).N)(S);
                if (l && g) {
                    (0, n(96351).B)({
                        makeTabActive: !0,
                        url: S,
                        position: "end",
                        openInNew: "tab",
                        environment: i
                    }), n(635257).st({
                        reset: !1
                    });
                    return
                }(0, n(79266).navigate)({
                    environment: i,
                    url: S,
                    ...l ? {
                        openInNew: "tab",
                        makeTabActive: !1
                    } : {}
                })
            }

            function l(e) {
                let {
                    environment: t,
                    query: a,
                    clientStore: l,
                    config: s,
                    additionalSteps: u = [],
                    openInNewTab: d,
                    openUsingQuickSearchHandler: p,
                    surface: f,
                    suggestedPrompt: m,
                    initialAgentActions: _
                } = e, g = n(674880).defaultInferenceContextStore.state;
                if (!g) throw Error("No inference context");
                let {
                    spaceStore: h,
                    userStore: v
                } = g;
                (0, n(757688).Wq)({
                    clientStore: l,
                    environment: t
                });
                let y = s.type;
                if (d && ("search" === y || "workflow" === y)) return void
                function(e) {
                    var t;
                    let {
                        environment: i,
                        config: r,
                        query: a,
                        openUsingQuickSearchHandler: o,
                        initialAgentActions: l
                    } = e, s = i.device.isElectron, u = c({
                        environment: i,
                        threadId: void 0,
                        spaceId: null == (t = n(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: r,
                        query: a,
                        forceRouteToChat: !0,
                        initialAgentActions: l
                    });
                    if (o && s) return (0, n(916187).N)(u);
                    if (s) {
                        (0, n(96351).B)({
                            makeTabActive: !0,
                            url: u,
                            position: "end",
                            openInNew: "tab",
                            environment: i
                        }), n(635257).st({
                            reset: !1
                        });
                        return
                    }(0, n(79266).navigate)({
                        environment: i,
                        url: u,
                        openInNew: "tab",
                        makeTabActive: !1
                    })
                }({
                    environment: t,
                    config: s,
                    query: a,
                    openUsingQuickSearchHandler: p,
                    initialAgentActions: _
                });
                let b = (0, n(674880).Kf)({
                        environment: t,
                        spaceStore: h,
                        userStore: v,
                        value: a
                    }),
                    S = (0, n(909212).re)();
                if ("workflow" !== s.type || S) {
                    let e = (0, n(674880).Xd)({
                            environment: t,
                            config: s,
                            inferenceContext: g,
                            addSteps: [...u, b],
                            surface: f
                        }),
                        r = i({
                            environment: t,
                            spaceStore: h,
                            clientStore: l,
                            userStore: v,
                            transcript: e,
                            initialAgentActions: _,
                            analyticsArgs: {
                                suggestedPrompt: m
                            }
                        });
                    return o({
                        environment: t,
                        oldThreadStore: void 0,
                        newThreadStore: r,
                        openInNewTab: d,
                        openUsingQuickSearchHandler: p,
                        initialAgentActions: _
                    }), r
                }
                r({
                    environment: t,
                    parentStore: h,
                    userStep: b
                })
            }

            function s(e) {
                return (0, n(909212).re)() ? u(e) : {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                }
            }

            function u(e) {
                var t;
                let {
                    spaceId: i,
                    searchScopes: r,
                    environment: a
                } = e, o = i ? (null == (t = n(57168).UserChatPreferenceLocalStorageStore.getState()) ? void 0 : t[i]) ? ? {} : {};
                if (i && o.model) {
                    let e = n(218744).default.isStatsigEnabledAndInitialized(),
                        t = "on" === n(218744).default.getEligibleGroup({
                            experimentId: n(432155).Yc,
                            defaultGroup: "control"
                        }),
                        r = (0, n(432155).gg)({
                            userChatPreference: o,
                            isStatsigInitialized: e,
                            shouldResetUserSelectedModel: t
                        });
                    r && ((0, n(432155).Oq)(i, r), o = { ...o,
                        ...r
                    })
                }
                let {
                    webEnabled: l,
                    computerEnabled: s,
                    yoloModeEnabled: u,
                    model: c,
                    readOnlyModeEnabled: d
                } = o, p = c && (0, n(722371).Xk)(n(426048).AGENT_MODEL_TYPES, c) ? c : void 0;
                if (i && p && !n(218744).default.checkGate({
                        gateName: "agent_model_picker"
                    })) {
                    let e = (0, n(317606).getAvailableWorkflowAgentModels)(a, i);
                    e && !e.has(p) && ((0, n(432155).Oq)(i, {
                        model: void 0
                    }), p = void 0)
                }
                return (0, n(922900).getWorkflowAgentConfig)({
                    searchScopes: r,
                    ...void 0 !== l && {
                        useWebSearch: l
                    },
                    ...void 0 !== s && {
                        useComputer: s
                    },
                    ...void 0 !== u && {
                        yoloMode: u
                    },
                    ...void 0 !== d && {
                        useReadOnlyMode: d
                    },
                    model: p,
                    environment: a,
                    spaceId: i
                })
            }

            function c(e) {
                let {
                    environment: t,
                    threadId: i,
                    spaceId: r,
                    config: a,
                    query: o,
                    forceRouteToChat: l,
                    initialAgentActions: u,
                    additionalQueryParams: c
                } = e, d = t.device.isElectron, p = {};
                i && (p[n(737869).P5] = (0, n(4962).Xw)(i)), d && r && (p.spaceId = r), o && (p[n(737869).ah] = encodeURIComponent(JSON.stringify(o))), u && u.length > 0 && (p[n(737869).U] = u.join(","));
                let f = i && i !== n(548124).NEW_CHAT_THREAD_ID;
                if (!f) {
                    let e = s({
                        spaceId: r,
                        environment: t
                    });
                    a && (0, n(271452).bD)(a.type) && (e = a), p[n(737869).q8] = encodeURIComponent(JSON.stringify(e))
                }
                if (!f && !l) return (0, n(758654).Gm)({
                    url: n(168962).JZ.ai,
                    query: p
                });
                if (c)
                    for (let [e, t] of Object.entries(c)) void 0 !== t && (p[e] = t);
                return (0, n(758654).Gm)({
                    url: n(168962).JZ.chat,
                    query: p
                })
            }

            function d(e) {
                let {
                    environment: t,
                    config: r,
                    query: a,
                    surface: l = "search_modal",
                    initialAgentActions: s
                } = e, u = n(674880).defaultInferenceContextStore.state;
                if (!u) throw Error("No inference context");
                let {
                    spaceStore: c,
                    userStore: d
                } = u, p = (0, n(674880).Kf)({
                    environment: t,
                    spaceStore: c,
                    userStore: d,
                    value: a
                }), f = (0, n(674880).Xd)({
                    environment: t,
                    inferenceContext: u,
                    config: r,
                    addSteps: [p],
                    surface: l
                }), m = i({
                    environment: t,
                    spaceStore: c,
                    clientStore: n(57168).defaultClientAIChatStore,
                    userStore: d,
                    transcript: f,
                    initialAgentActions: s
                });
                o({
                    environment: t,
                    newThreadStore: m,
                    oldThreadStore: void 0
                })
            }
            n.r(t), n.d(t, {
                createAndNavigateToInferenceTranscriptWithConfig: () => d,
                createDefaultNewThreadConfigFromUserPreference: () => u,
                createInferenceTranscriptChatRoute: () => c,
                getDefaultNewThreadConfigFromUserPreference: () => s,
                isConfigTransferable: () => f,
                navigateAndStartInferenceTranscript: () => l,
                navigateToInferenceTranscriptRoute: () => o,
                routeInferenceTranscript: () => a
            }), n(16280), n(898992), n(354520), n(737550);
            let p = ["workflow", "researcher", "markdown-chat"];

            function f(e) {
                var t;
                let {
                    config: i,
                    agentEnabled: r
                } = e;
                return !i || !r || (t = i.type, (0, n(722371).Xk)(p, t))
            }
        },
        877163: (e, t, n) => {
            n.d(t, {
                m: () => r
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                r = (0, n(104509).wt)("lightning", i, "default")
        },
        895105: (e, t, n) => {
            n.r(t), n.d(t, {
                filterIcon: () => r,
                iconDefinition: () => i
            }), n(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, n(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                r = (0, n(104509).wt)("filter", i, "default")
        },
        920976: (e, t, n) => {
            n.d(t, {
                F: () => a
            }), n(296540);
            var i = n(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.26 1.98 16.32 17.52",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M15.825 12a3.75 3.75 0 1 1-.001 7.501 3.75 3.75 0 0 1 0-7.501m0 1.325a.55.55 0 0 0-.55.55V15.2H13.95a.55.55 0 0 0-.001 1.1h1.326v1.325a.55.55 0 0 0 1.1 0V16.3h1.324a.55.55 0 0 0 0-1.1h-1.325v-1.325a.55.55 0 0 0-.55-.55M9.702 5.022a3.918 3.918 0 0 1 6.742.036.626.626 0 0 1-1.08.63 2.667 2.667 0 0 0-4.59-.023L5.376 14.68l4.19.678a.626.626 0 0 1-.2 1.235l-5.1-.827a.625.625 0 0 1-.437-.938z"
                        }), (0, i.jsx)("path", {
                            d: "M10.912 8.094a1.178 1.178 0 1 1 2.326.377 1.178 1.178 0 0 1-2.326-.377M4.7 7.087a1.178 1.178 0 1 1 2.327.377A1.178 1.178 0 0 1 4.7 7.087M3.488 2.985a3.92 3.92 0 0 1 5.572.357.625.625 0 0 1-.944.818 2.67 2.67 0 0 0-3.796-.243.625.625 0 1 1-.832-.932"
                        })]
                    })
                },
                a = (0, n(104509).wt)("aiFacePlus", r, "default")
        },
        922900: (e, t, n) => {
            n.d(t, {
                getWorkflowAgentConfig: () => r
            }), n(898992), n(430670), n(737550);
            let i = new(n(245541)).R({
                key: "agent_memory_database_page",
                namespace: n(274919).Bq,
                important: !0,
                trackingType: "preference"
            });

            function r(e) {
                let t, {
                        isOnboardingAgent: r,
                        searchScopes: o,
                        searchSessionId: l,
                        useWebSearch: s,
                        useComputer: u,
                        yoloMode: c,
                        useReadOnlyMode: d,
                        model: p,
                        isCustomAgent: f,
                        isCustomAgentBuilder: m,
                        workflowId: _,
                        modelFromUser: g,
                        writerMode: h,
                        useRulePrioritization: v,
                        useCustomAgentDraft: y,
                        useDraftActorPointer: b,
                        ephemeralInstructions: S,
                        databaseAgentConfigMode: I,
                        environment: w,
                        spaceId: k,
                        spaceStore: x
                    } = e,
                    C = n(886556).z.isZeroRetentionEnabled(),
                    T = (0, n(612608).MI)((0, n(612608).VD)("custom_agents"), a),
                    A = (0, n(612608).MI)((0, n(612608).VD)("agent_automations"), a),
                    M = (0, n(612608).MI)((0, n(612608).VD)("agent_integrations"), a),
                    D = (0, n(612608).MI)((0, n(612608).VD)("experimental_integrations"), a),
                    E = (0, n(612608).MI)((0, n(612608).VD)("database_agents"), a),
                    F = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_advanced"), a),
                    N = (0, n(388647).p)({
                        environment: w
                    }),
                    P = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_search_connectors"), a),
                    U = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_google_drive"), a),
                    O = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_slack"), a),
                    R = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_mcp_servers"), a),
                    V = (0, n(612608).MI)((0, n(612608).VD)("script_agent_mail_module_available"), a),
                    B = (0, n(612608).MI)((0, n(612608).VD)("agent_script_agent_custom_tool_calling"), a),
                    j = a("agent_enable_create_thread"),
                    L = a("software_factory_page"),
                    z = a("enable_script_agent_writer"),
                    q = a("database_agents_on_script_agent"),
                    $ = (!I || q) && (!h || z),
                    W = (0, n(612608).MI)((0, n(612608).VD)("agent_user_session_context"), a),
                    H = a("agent_crdt_operations"),
                    K = (0, n(612608).MI)((0, n(612608).VD)("agent_card_customization"), a),
                    G = (0, n(612608).MI)((0, n(612608).VD)("agent_system_prompt_as_page"), a),
                    Y = (0, n(612608).MI)((0, n(612608).VD)("agent_view_notifications_tool_enabled"), a),
                    Z = (0, n(328765).S)(),
                    X = x ? ? (void 0 === k || (null == Z ? void 0 : Z.id) === k ? Z : void 0),
                    J = a("sams_specials"),
                    Q = a("ai_image_generation") && !J && ((null == X ? void 0 : X.isAiImageGenerationEnabledOnSpace()) ? ? !0),
                    ee = (0, n(612608).MI)((0, n(612608).VD)("agent_diffs"), a),
                    et = (0, n(612608).MI)((0, n(612608).VD)("agent_update_page_patch"), a),
                    en = (0, n(612608).MI)((0, n(612608).VD)("agent_create_db_template"), a),
                    ei = a("agent_search_tool_v2"),
                    er = a("agent_update_page_autofixer"),
                    ea = a("agent_markdown_vnext"),
                    eo = a("agent_update_page_order_updates"),
                    el = a("agent_support_property_reorder"),
                    es = a("agent_short_update_page_result"),
                    eu = n(218744).default.getConfig({
                        configName: "agent_writer_model_config"
                    }).defaultModel,
                    ec = i.getState(),
                    ed = null == ec ? void 0 : ec.pageId,
                    ep = h || f ? void 0 : function() {
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
                    em = (0, n(876688).wd)(),
                    e_ = em.some(e => (0, n(281708).yY)(e)),
                    eg = a("mail_explicit_tool_calls"),
                    eh = a("outlook_custom_agent_email_connector"),
                    ev = a("agent_query_calendar_tool") && e_,
                    ey = em.some(e => (0, n(281708).Xs)(e) && "outlook" !== e),
                    eb = a("agent_query_mail_tool") && ey,
                    eS = (0, n(828294).a)("agent_rule_priority_hierarchy"),
                    eI = a("agent_ask_survey");
                return t = !_ && (d ? ? !1), {
                    type: "workflow",
                    enableAgentAutomations: A,
                    enableAgentIntegrations: M,
                    enableCustomAgents: T,
                    enableExperimentalIntegrations: D,
                    enableAgentViewNotificationsTool: Y,
                    enableAgentDiffs: ee,
                    enableAgentUpdatePagePatch: et,
                    enableAgentCreateDbTemplate: en,
                    enableCsvAttachmentSupport: !0,
                    enableDatabaseAgents: E,
                    enableAgentThreadTools: !1,
                    enableRunAgentTool: !1,
                    enableCrdtOperations: H,
                    enableAgentCardCustomization: K,
                    enableSystemPromptAsPage: G,
                    enableUserSessionContext: W,
                    enableScriptAgentAdvanced: !!$ && F,
                    enableScriptAgent: !!$ && N,
                    enableScriptAgentSearchConnectorsInCustomAgent: !!$ && !!f && P,
                    enableScriptAgentGoogleDriveInCustomAgent: !!$ && !!f && U,
                    enableScriptAgentSlack: !!$ && O,
                    enableScriptAgentMcpServers: !!$ && R,
                    enableScriptAgentMail: !!$ && V,
                    enableScriptAgentCalendar: !!$ && N,
                    enableScriptAgentCustomToolCalling: !!$ && B,
                    enableCreateAndRunThread: j,
                    enableSoftwareFactoryPage: L,
                    ...f ? {} : {
                        enableAgentGenerateImage: Q
                    },
                    agentFollowupVariation: ep,
                    enableSpeculativeSearch: ef,
                    enableQueryCalendar: ev,
                    enableQueryMail: eb,
                    enableMailExplicitToolCalls: eg,
                    enableMailAgentMultiProviderSupport: eh,
                    useRulePrioritization: v ? ? eS,
                    memoryDatabasePageId: ed,
                    workflowId: _,
                    availableConnectors: em,
                    customConnectorInfo: n(501761).qu.state.customConnectors.flatMap(e => "active" === e.status && e.displayName ? [{
                        name: e.displayName,
                        thirdPartyId: e.thirdPartyId,
                        description: e.description
                    }] : []),
                    searchScopes: h ? [] : o ? ? n(425749).R2,
                    useSearchToolV2: ei,
                    useWebSearch: !h && !C && (void 0 === s || s),
                    useComputer: u ? ? !0,
                    yoloMode: c ? ? !1,
                    useReadOnlyMode: t,
                    writerMode: !!h,
                    model: h ? eu : p,
                    searchSessionId: l,
                    modelFromUser: !h && (g ? ? void 0 !== p),
                    isCustomAgent: !!f,
                    isCustomAgentBuilder: !!m,
                    useCustomAgentDraft: !!y,
                    use_draft_actor_pointer: !!b,
                    enableUpdatePageAutofixer: er,
                    enableMarkdownVNext: ea,
                    enableUpdatePageOrderUpdates: eo,
                    enableAgentSupportPropertyReorder: el,
                    agentShortUpdatePageResult: es,
                    ephemeralInstructions: S,
                    ...h || r || null !== e.onboardingAgentVersion ? {} : {
                        enableAgentAskSurvey: eI
                    },
                    databaseAgentConfigMode: !!I,
                    isOnboardingAgent: !!r,
                    onboardingAgentVersion: e.onboardingAgentVersion,
                    isMobile: n(986939).A.isMobile
                }
            }

            function a(e) {
                return n(218744).default.checkGate({
                    gateName: e
                })
            }
        },
        942806: (e, t, n) => {
            function i(e, t) {
                let {
                    user_comment: i,
                    ...r
                } = t;
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_action",
                        eventProperties: r
                    }
                })
            }

            function r(e, t, i) {
                let r = {
                    site: "client",
                    ...i
                };
                (0, n(195857).DO_NOT_USE_trackLegacy)(t, r)
            }

            function a(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_favorite_action",
                        eventProperties: t
                    }
                })
            }

            function o(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_autofill_action",
                        eventProperties: t
                    }
                })
            }

            function l(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_autofill_settings_action",
                        eventProperties: t
                    }
                })
            }

            function s(e, t) {
                if (n(886556).z.isXMLAssistantEnabled()) {
                    var i;
                    let r = (null == (i = t.sessionContext) ? void 0 : i.evaluatorFromStoreState.getTranscript()) ? ? [];
                    n(310639).assistantDependency.load().then(({
                        assistantAnalyticsActions: n
                    }) => {
                        n.trackAssistantOpened(e, {
                            from: t.from,
                            sessionId: t.session_id,
                            isReminder: !1,
                            reminderType: void 0,
                            startTimestamp: Date.now(),
                            transcript: r,
                            hasQuery: !1,
                            searchSessionId: void 0
                        })
                    })
                } else(0, n(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_open",
                        eventProperties: {
                            session_id: t.session_id,
                            prompt_key: t.prompt_key,
                            from: t.from
                        }
                    }
                })
            }

            function u(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_completion_popup_close",
                        eventProperties: t
                    }
                })
            }

            function c(e, t) {
                (0, n(104310).u)({
                    event: {
                        eventName: "ai_assistant_error",
                        eventProperties: t
                    }
                })
            }
            n.r(t), n.d(t, {
                trackAIAction: () => i,
                trackAIAssistantEngineError: () => c,
                trackAICompletionPopupClose: () => u,
                trackAICompletionPopupOpen: () => s,
                trackAIFavoriteAction: () => a,
                trackAiAutofillAction: () => o,
                trackAiAutofillSettingsAction: () => l,
                trackUserFlow: () => r
            })
        },
        966458: (e, t, n) => {
            n.d(t, {
                Jg: () => i
            }), n(898992), n(672577);

            function i(e) {
                var t;
                let {
                    product: i,
                    userId: r,
                    billingData: a,
                    spaceUserStore: o,
                    spaceStore: l,
                    existingRequests: s
                } = e;
                if (!i || !(null != l && l.id) || !r) return "not_eligible";
                if ((0, n(192159).eh)(a, i) && "ai_credit_pack" !== i) return "product_already_available";
                let u = (0, n(880280).rU)(i),
                    c = function(e) {
                        let {
                            billingData: t,
                            spaceUserStore: i,
                            spaceStore: r
                        } = e;
                        if (!r || !i || !t) return !1;
                        let a = r.getDisableMemberUpgradeRequests();
                        return !(n(986939).A.isMobile || a || !(0, n(262166).jR)((0, n(192159).AI)(t)) || (0, n(192159).et)(t)) && !!(i.isMember() && !i.isWorkspaceOwner())
                    }({
                        billingData: a,
                        spaceUserStore: o,
                        spaceStore: l
                    });
                if (!(u && c) || void 0 === s) return "not_eligible";
                let d = null == (t = s[i]) ? void 0 : t.find(e => e.created_by_id === r);
                return (null == d ? void 0 : d.request_status) || "unrequested"
            }
        },
        966559: (e, t, n) => {
            n.r(t), n.d(t, {
                exclamationMarkCircleSmallIcon: () => a,
                iconDefinition: () => r
            }), n(296540);
            var i = n(474848);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.87 1.87 12.25 12.25",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.9 4.875a.625.625 0 0 0-.625.625V8a.625.625 0 1 0 1.25 0V5.5a.625.625 0 0 0-.625-.625m0 4.7a.725.725 0 1 0 0 1.45.725.725 0 0 0 0-1.45"
                        }), (0, i.jsx)("path", {
                            d: "M8 1.875a6.125 6.125 0 1 0 0 12.25 6.125 6.125 0 0 0 0-12.25M3.125 8a4.875 4.875 0 1 1 9.75 0 4.875 4.875 0 0 1-9.75 0"
                        })]
                    })
                },
                a = (0, n(104509).wt)("exclamationMarkCircleSmall", r, "small")
        },
        968864: (e, t, n) => {
            n.d(t, {
                Y: () => a,
                G: () => r
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

            function r(...e) {
                for (let t of e) i[t].load()
            }

            function a(e) {
                let t = i[e].getLoadingState();
                if ("idle" === t.status) r(e);
                else if ("pending" === t.status || "rejected" === t.status);
                else {
                    if ("resolved" === t.status) return t.value;
                    (0, n(722371).HB)(t)
                }
            }
        },
        971375: (e, t, n) => {
            n.d(t, {
                o: () => a,
                x: () => r
            }), n(296540);
            var i = n(474848);

            function r(e) {
                let {
                    variant: t,
                    imgSource: r,
                    tintColor: o,
                    faceStyle: l,
                    shadowVariant: s = "strong",
                    style: u,
                    ...c
                } = e, d = (0, n(960253).I)(() => {
                    let e = (0, n(445283).N)(t);
                    return {
                        faceImgWrap: {
                            width: e,
                            height: e,
                            borderRadius: "100%",
                            background: n(632079).Tj.assistantCornerButtonBackground,
                            ..."strong" === s && {
                                boxShadow: e >= 90 ? n(632079).Tj.shadowMDThickerOutline : n(632079).Tj.shadow.outline.lg
                            },
                            ..."light" === s && {
                                borderRadius: "50%",
                                boxShadow: e >= 90 ? n(632079).Tj.shadowSMThickerOutline : n(632079).Tj.shadow.outline.md
                            },
                            overflow: "hidden",
                            ...u
                        }
                    }
                }, [t, s, u]);
                return (0, i.jsx)("div", { ...c,
                    children: (0, i.jsx)("div", {
                        style: d.faceImgWrap,
                        children: (0, i.jsx)(a, {
                            imgSource: r,
                            variant: t,
                            tintColor: o,
                            style: l
                        })
                    })
                })
            }

            function a(e) {
                let {
                    imgSource: t,
                    variant: r,
                    tintColor: a,
                    style: o,
                    alt: l,
                    ...s
                } = e, u = (0, n(445283).N)(r), c = t ? ? n(200424), d = l ? ? "Notion AI face", p = (0, n(960253).I)(() => ({
                    faceImg: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        ...o
                    },
                    tintedFace: {
                        height: u,
                        width: u,
                        transform: "scaleX(var(--direction, 1))",
                        backgroundColor: a,
                        WebkitMaskImage: `url(${c})`,
                        maskImage: `url(${c})`,
                        WebkitMaskRepeat: "no-repeat",
                        maskRepeat: "no-repeat",
                        WebkitMaskPosition: "center",
                        maskPosition: "center",
                        WebkitMaskSize: "contain",
                        maskSize: "contain",
                        ...o
                    }
                }), [u, o, a, c]);
                return void 0 !== a ? (0, i.jsx)("div", {
                    style: p.tintedFace,
                    role: "img",
                    "aria-label": d
                }) : (0, i.jsx)("img", { ...s,
                    style: p.faceImg,
                    src: c,
                    alt: d
                })
            }
        },
        976298: (e, t, n) => {
            n.d(t, {
                $0: () => c,
                Fx: () => h,
                Ge: () => l,
                I3: () => a,
                Kj: () => _,
                PP: () => v,
                TK: () => y,
                Yy: () => r,
                aE: () => b,
                cQ: () => g,
                kH: () => s,
                m7: () => o,
                nq: () => f,
                nv: () => d,
                tj: () => u
            }), n(898992), n(354520), n(737550);
            let i = {
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

            function a(e) {
                return !!(i[e.type] && !(0, n(425985).U)(e) && (!(0, n(9247).$M)(e) || void 0 === (0, n(9247).om)(e)))
            }

            function o(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    filter: r,
                    sort: o,
                    sourcePropertyIds: l
                } = e, s = (l ? ? (0, n(722371).objectKeys)(i)).filter((t, o, l) => {
                    let s = i[t];
                    return !(!s || !a(s) || "relation" === s.type && e.restrictCrossSpace && (0, n(226989).o)(e.spaceId, s)) && (!r || r([t, s], o, i))
                });
                if (0 === s.length) return [];
                if (!t || !1 === o) return s;
                let u = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(s, e => u.findIndex(t => t.property === e))
            }

            function l(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    sort: r
                } = e, a = (0, n(722371).objectKeys)(i).filter((e, t, r) => {
                    let a = i[e];
                    return !!a && !!(0, n(568249).J)(a)
                });
                if (0 === a.length) return [];
                if (!t || !1 === r) return a;
                let o = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(a, e => o.findIndex(t => t.property === e))
            }

            function s(e) {
                if (e.type === n(944897).M9.InvalidCharacter) return {
                    type: e.type,
                    character: e.character
                };
                if (e.type === n(944897).M9.TokenExpected) return {
                    type: e.type,
                    token: e.token
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnThisRow) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.MissingSchemaPropertyOnCollection) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                if (e.type === n(944897).uW.ThisRowBlockPropertyMismatchCollection) return {
                    type: e.type,
                    thisRowCollection: e.thisRowCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingContextVariable) return {
                    type: e.type,
                    valueId: e.valueId,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallTooFewArguments) return {
                    type: e.type,
                    numArguments: e.numArguments,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallUnexpectedArgument) return {
                    type: e.type,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.FunctionCallArgumentWrongType) return {
                    type: e.type,
                    argumentType: e.argumentType,
                    libraryFunctionName: e.libraryFunction.name,
                    parameterIndex: e.parameterIndex,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyBlock) return {
                    type: e.type,
                    blockPointer: e.blockPointer,
                    node: e.node,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MissingDataDependencyPerson) return {
                    type: e.type,
                    personPointer: e.personPointer,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.MemberPropertyMismatchCollection) return {
                    type: e.type,
                    blockCollection: e.blockCollection,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DownstreamParseFailure) return {
                    type: e.type,
                    collectionId: e.collectionId,
                    property: e.property,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.ContextVariableWrongType) return {
                    type: e.type,
                    valueId: e.valueId,
                    expectedType: e.expectedType,
                    resultType: e.resultType,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.DisallowedValueType) return {
                    type: e.type,
                    expressionValue: e.expressionValue,
                    allowedValueTypes: e.allowedValueTypes,
                    errorSource: e.errorSource
                };
                else if (e.type === n(944897).uW.LibraryFunctionExecutionError) return {
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
            let u = {
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
                return !!u[e.type]
            }

            function d(e) {
                let {
                    collectionFormat: t,
                    collectionSchema: i,
                    filter: r,
                    sort: a
                } = e, o = (0, n(722371).objectKeys)(i).filter((e, t, a) => {
                    var o;
                    let l = i[e];
                    return !(!l || !u[l.type] || (0, n(9247).$M)(l) && null != (o = (0, n(9247).om)(l)) && o.auto_update_on_edit) && (!r || r([e, l], t, i))
                });
                if (0 === o.length) return [];
                if (!t || !1 === a) return o;
                let l = (0, n(944940).L)(t, i, void 0, n(565546).jf.Page).collection_page_properties || [];
                return n(381453).Ul(o, e => l.findIndex(t => t.property === e))
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
            let m = {
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

            function _(e) {
                return m[e.type]
            }

            function g(e) {
                return 0 === e
            }

            function h(e) {
                return "button_block" === e || "button_property" === e
            }

            function v(e) {
                let {
                    property: t,
                    collectionSchema: n
                } = e;
                return !!n && !n[t]
            }

            function y(e) {
                let {
                    collectionSchema: t,
                    property: n,
                    type: i
                } = e, r = null == t ? void 0 : t[n];
                return !r || ("action" === i ? !a(r) : !u[r.type])
            }

            function b({
                automationTrigger: e,
                collectionSchema: t
            }) {
                if ((null == e ? void 0 : e.type) === "event") {
                    let {
                        pagesAdded: i,
                        pagePropertiesEdited: r,
                        source: a
                    } = e.event;
                    if (void 0 === a) return !1;
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
                    let s = "some" === r.type && (!(0, n(722371).O9)(r.some) || 0 === r.some.length),
                        u = "all" === r.type && (!(0, n(722371).O9)(r.all) || 0 === r.all.length);
                    if (!i && ("none" === r.type || s || u)) return !1
                } else if ((null == e ? void 0 : e.type) !== "recurrence") return !1;
                else if (!e.recurrence) return !1;
                return !0
            }
        },
        979479: (e, t, n) => {
            n.d(t, {
                A: () => r
            }), n(296540);
            var i = n(474848);

            function r(e) {
                return n(986939).A.isMobile ? (0, i.jsx)(n(182718).zD, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    popupType: n(423291).n.SlideUp,
                    onDismiss: e.onDismiss,
                    content: e.content,
                    style: e.style,
                    children: e.children
                }) : (0, i.jsx)(n(556809).a, {
                    ariaLabel: e.ariaLabel,
                    open: e.isOpen,
                    preventHideChildrenWhileOpening: !0,
                    onDismiss: e.onDismiss,
                    style: e.style,
                    innerStyle: e.innerStyle,
                    showCloseIcon: e.showCloseIcon,
                    children: e.content()
                })
            }
        },
        980494: (e, t, n) => {
            n.d(t, {
                A: () => a
            }), n(296540);
            var i = n(474848);
            let r = {
                    style0: { ...n(699422).RC
                    }
                },
                a = function(e) {
                    let t = {
                            marginInlineEnd: e.avatarMarginRight ? ? 6,
                            alignSelf: "center"
                        },
                        a = {
                            display: "flex",
                            alignItems: "center",
                            minWidth: 0,
                            ...e.style
                        },
                        o = e.inline ? { ...t,
                            width: "none",
                            minHeight: "none"
                        } : t,
                        {
                            userStore: l,
                            avatarShouldShowShadow: s,
                            avatarSize: u,
                            hasTooltip: c,
                            tooltipHeader: d,
                            hasPersonHoverCard: p,
                            spaceStore: f
                        } = e,
                        m = (0, n(109939).tz)(),
                        _ = (0, n(682985).K8)(() => null == l ? void 0 : l.getDisplayName(m), [l, m]),
                        g = (0, i.jsxs)("div", {
                            style: a,
                            children: [(0, i.jsx)("div", {
                                style: o,
                                children: (0, i.jsx)(n(321753).A, {
                                    userStore: l,
                                    avatarShouldShowShadow: s,
                                    size: u,
                                    hasTooltip: c && !p,
                                    hasPersonHoverCard: !1,
                                    tooltipHeader: d
                                })
                            }), (0, i.jsx)("div", {
                                className: "notranslate",
                                style: r.style0,
                                children: _
                            })]
                        });
                    return p ? (0, i.jsx)(n(532755).D, {
                        userStore: l,
                        spaceStore: f,
                        from: e.personHoverCardEntrypoint,
                        children: g
                    }) : g
                }
        },
        984107: (e, t, n) => {
            n.d(t, {
                dismissChatSidebar: () => i
            });

            function i() {
                "open" === n(562733).zI.state.chatPanelVisibility && n(562733).zI.update(e => ({ ...e,
                    chatPanelVisibility: "closing",
                    editorWidthUsed: 0,
                    explicitlyAddedTextSelection: void 0
                }))
            }
        }
    }
]);