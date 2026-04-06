"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [37342, 41882, 75215], {
        1249: (e, t, a) => {
            a.d(t, {
                g: () => i
            });

            function i(e) {
                return "drag" in e && e.drag ? {
                    WebkitAppRegion: "drag"
                } : "noDrag" in e && e.noDrag ? {
                    WebkitAppRegion: "no-drag"
                } : {}
            }
        },
        6260: (e, t, a) => {
            a.d(t, {
                Z: () => n
            }), a(296540);
            var i = a(474848);
            let r = {
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
                n = (0, a(104509).wt)("browserMagnifyingGlass", r, "default")
        },
        44389: (e, t, a) => {
            a.d(t, {
                f: () => i
            }), a(898992), a(354520);

            function i(e) {
                let {
                    currentUserRootStore: t,
                    excludeGuestWithPrivatePages: i
                } = e;
                return t ? t.getSpaceViewStores().filter(e => e.getAlive() && (0, a(916804).I)(e.getSpaceStore()) && (!i || !(0, a(484712).U)(e))) : []
            }
        },
        57168: (e, t, a) => {
            a.r(t), a.d(t, {
                ClientAIChatStore: () => d,
                UserChatPreferenceLocalStorageStore: () => s,
                defaultClientAIChatStore: () => c,
                defaultLegacyThreadConfig: () => l
            });
            var i = () => a(546605);
            a(898992), a(354520), a(430670), a(803949);
            let r = "confirmed_safe_by_user",
                n = {
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
                    return n
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(n)
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
                        toolResultStepId: i,
                        results: r
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [i]: {
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
                    } = e, a = this.getTemporaryAttachmentStagedDataOrInstantiate(), i = { ...a,
                        stagedInferenceTranscriptSteps: [...a.stagedInferenceTranscriptSteps, t]
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
                        fileId: a
                    } = e, i = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!i) return;
                    let r = i.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== a);
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
                    let a = t.stagedInferenceTranscriptSteps.flatMap(e => "computer-file" === e.type ? [e.fileUrl] : []);
                    if (0 === a.length) return;
                    let i = t.stagedAttachmentUploadStore;
                    a.forEach(e => {
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
                    var t, a;
                    let {
                        fileUrl: i
                    } = e, n = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!n) return;
                    let o = n.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === i);
                    if (o < 0) return;
                    let s = n.stagedInferenceTranscriptSteps[o];
                    if ("attachment" !== s.type) return;
                    let l = null != (a = s.metadata) && a.guardrail ? { ...s.metadata.guardrail,
                            attachmentRisk: r
                        } : {
                            attachmentRisk: r
                        },
                        d = { ...s,
                            metadata: { ...s.metadata ? ? {},
                                guardrail : l
                            }
                        },
                        c = [...n.stagedInferenceTranscriptSteps];
                    c[o] = d, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...n,
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
            let s = new(a(245541)).R({
                    key: "spacedScopedUserChatPreference",
                    namespace: a(274919).Bq,
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
        133474: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarLibraryButton: () => o
            });
            var i = a(296540),
                r = a(474848);
            let n = {
                position: "relative"
            };

            function o(e) {
                let t = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    l = (0, a(682985).K8)(() => {
                        var e, i;
                        return (null == (e = t.RouterStore.state.route) ? void 0 : e.name) === "library" || !!(null == (i = a(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : i.isLibraryBlock())
                    }, [t]),
                    d = (0, i.useCallback)(async e => {
                        (await (0, a(337439).p)())({
                            event: e,
                            analyticsFrom: "sidebar_library_button",
                            environment: t
                        })
                    }, [t]),
                    c = !(0, a(682985).O$)(a(205885).e);
                return (0, r.jsx)(a(51831).m, {
                    content: () => c ? (0, r.jsx)("div", {
                        children: o.formatMessage(s.offlineTooltip)
                    }) : (0, r.jsx)("div", {
                        children: o.formatMessage(s.tooltip)
                    }),
                    originGap: 6,
                    placement: "right",
                    children: t => {
                        var i;
                        return (0, r.jsx)(a(590422).Q, {
                            style: { ...a(132261).DX.baseSidebarItem,
                                ...l && a(132261).DX.currentSelectedSidebarItem
                            },
                            onClick: d,
                            hoveredStyle: null == (i = e.styles) ? void 0 : i.buttonHoveredStyle,
                            ...t,
                            disabled: c,
                            disabledFeedback: c,
                            children: (0, r.jsx)(a(380559).u, {
                                left: (0, r.jsx)("div", {
                                    style: n,
                                    children: (0, r.jsx)(a(16275).I, {
                                        icon: a(360610).H,
                                        colorVariant: "secondary",
                                        size: "lg"
                                    })
                                }),
                                children: o.formatMessage(a(792492).D.library)
                            })
                        })
                    }
                })
            }
            let s = (0, a(109939).YK)({
                tooltip: {
                    id: "sidebar.library.tooltip",
                    defaultMessage: "View all the pages related to you"
                },
                offlineTooltip: {
                    id: "sidebar.library.offlineTooltip",
                    defaultMessage: "Unavailable while offline"
                }
            })
        },
        177861: (e, t, a) => {
            function i(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, a, i, r) => {
                    let n = encodeURIComponent(a),
                        o = encodeURIComponent(i),
                        s = encodeURIComponent(r),
                        l = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${n}${l}${o}${l}${s})`
                })
            }

            function r(e, t) {
                let a = {
                    stepCitations: { ...e.stepCitations
                    }
                };
                for (let [e, i] of Object.entries(t.stepCitations)) {
                    if (!a.stepCitations[e]) {
                        a.stepCitations[e] = {
                            claims: [...i.claims],
                            artifacts: [...i.artifacts]
                        };
                        continue
                    }
                    let t = new Set(a.stepCitations[e].claims.map(e => e.id));
                    for (let r of i.claims) t.has(r.id) || a.stepCitations[e].claims.push(r);
                    let r = new Set(a.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of i.artifacts) r.has(t.id) || a.stepCitations[e].artifacts.push(t)
                }
                return a
            }

            function n(e) {
                try {
                    let t = [];
                    for (let a in e.stepCitations)
                        for (let i of e.stepCitations[a].artifacts || []) i.citationInfo && t.push(i.citationInfo);
                    let a = t.length,
                        i = {};
                    for (let e of t) {
                        if (!e) continue;
                        let t = "unknown";
                        "notion" === e.citationType ? t = "notion" : "universal_search" === e.citationType && (t = e.target || "unknown"), i[t] = (i[t] || 0) + 1
                    }
                    return {
                        allArtifacts: t,
                        resultsBySource: i,
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
                    let s = function(e) {
                            let t = [];
                            for (let a of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, i, r] = a;
                                ("claim" === i || "artifact" === i) && t.push({
                                    planKey: e,
                                    citationType: i,
                                    resourceId: r
                                })
                            }
                            return t
                        }(e),
                        l = {},
                        d = new Set;
                    for (let e of s) {
                        let {
                            planKey: s,
                            citationType: c,
                            resourceId: u
                        } = e;
                        try {
                            var a, i, r, n, o;
                            let e;
                            if (!s || !c || !u) continue;
                            let p = t.stepCitations[s];
                            if (!p) continue;
                            if ("claim" === c) {
                                let t = null == (i = p.claims) ? void 0 : i.find(e => e.id === u);
                                null != t && null != (r = t.supportingArtifactIds) && r[0] && (e = null == (n = p.artifacts) ? void 0 : n.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === c && (e = null == (o = p.artifacts) ? void 0 : o.find(e => e.id === u));
                            if (null != (a = e) && a.citationInfo) {
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

            function s(e) {
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
                VJ: () => s,
                W6: () => n,
                y5: () => i,
                ye: () => o
            }), a(410838), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454), a(908872), a(737550)
        },
        187649: (e, t, a) => {
            let i, r;

            function n(e) {
                i = e
            }
            async function o() {
                return r || (i ? r = await i() : void 0)
            }
            a.d(t, {
                Q: () => n,
                z: () => o
            })
        },
        200424: (e, t, a) => {
            e.exports = a.p + "9ade71d75a1c0e93.png"
        },
        213458: (e, t, a) => {
            a.r(t), a.d(t, {
                arrowUpRightSquareIcon: () => n,
                iconDefinition: () => r
            }), a(296540);
            var i = a(474848);
            let r = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)("path", {
                            d: "M7.875 7c0-.345.28-.625.625-.625H13c.345 0 .625.28.625.625v4.5a.625.625 0 1 1-1.25 0V8.509l-5.12 5.12a.625.625 0 1 1-.884-.883l5.12-5.121H8.5A.625.625 0 0 1 7.875 7"
                        }), (0, i.jsx)("path", {
                            d: "M3.125 5.25c0-1.174.951-2.125 2.125-2.125h9.5c1.174 0 2.125.951 2.125 2.125v9.5a2.125 2.125 0 0 1-2.125 2.125h-9.5a2.125 2.125 0 0 1-2.125-2.125zm2.125-.875a.875.875 0 0 0-.875.875v9.5c0 .483.392.875.875.875h9.5a.875.875 0 0 0 .875-.875v-9.5a.875.875 0 0 0-.875-.875z"
                        })]
                    })
                },
                n = (0, a(104509).wt)("arrowUpRightSquare", r, "default")
        },
        225900: (e, t, a) => {
            a.d(t, {
                N: () => i
            });

            function i(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    transcript: r,
                    parentPointer: n,
                    threadId: o,
                    workflowId: s,
                    createdSource: l,
                    agentMessageKey: d,
                    debugOverrides: c
                } = e, u = o ? ? (0, a(295447).Z1)({
                    environment: t,
                    table: a(298085).T,
                    spaceId: i.id
                });
                return (0, a(757688).WE)({
                    environment: t,
                    clientStore: a(57168).defaultClientAIChatStore,
                    threadStore: void 0,
                    createThreadArgs: {
                        id: u,
                        transcript: r,
                        workflowId: s,
                        parentPointer: n || {
                            table: a(213003).NX,
                            id: i.id,
                            spaceId: i.id
                        },
                        createdSource: l,
                        agentMessageKey: d
                    },
                    additionalDebugOverrides: c,
                    sendPatchResponse: !0
                }), a(174148).E.createChildStore(i, {
                    id: u,
                    spaceId: i.id,
                    table: a(298085).T
                })
            }
        },
        250943: (e, t, a) => {
            a.d(t, {
                E: () => i
            }), a(581454);

            function i(e) {
                let {
                    multiSelection: t
                } = e;
                return (0, a(58512).$)(t).map(({
                    store: e,
                    selection: t
                }) => {
                    let i = (0, a(247438).RQ)(e.getValue()),
                        r = (0, a(247438).xbM)(i, t),
                        {
                            tokensInsideRange: n
                        } = (0, a(247438).AI5)(i, r.startIndex, r.endIndex);
                    return (0, a(536614).r4)(n, e)
                }).join("\n\n")
            }
        },
        322662: (e, t, a) => {
            a.d(t, {
                Ee: () => d,
                J1: () => n,
                oG: () => o
            }), a(296540);
            var i = a(474848);
            let r = {
                define_variables_automation_action: {
                    launchDateMs: 17277408e5,
                    expiryDateMs: 1738368e6
                },
                passkey_setting: {
                    launchDateMs: 1729101727e3,
                    expiryDateMs: 1738432882e3
                },
                publish_site_settings_embed_page: {
                    launchDateMs: 1736208e6,
                    expiryDateMs: 1743984e6
                },
                generalized_recurrence_automations: {
                    launchDateMs: 17365536e5,
                    expiryDateMs: 17460576e5
                },
                ai_page_translation_topbar_more_action: {
                    launchDateMs: 0x1953afaf7be,
                    expiryDateMs: 17434656e5
                },
                verification: {
                    launchDateMs: 1740096e6,
                    expiryDateMs: 174375e7
                },
                notion_ai_workspace_settings: {
                    launchDateMs: 17424288e5,
                    expiryDateMs: 17550432e5
                },
                notion_mail_launch_modal: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17525376e5
                },
                notion_mail_launch_modal_2: {
                    launchDateMs: 17446752e5,
                    expiryDateMs: 17578944e5
                },
                ui_doc_example: {
                    launchDateMs: 19249056e5,
                    expiryDateMs: 19249056e5
                },
                salesforce_sync_unfurling_option: {
                    launchDateMs: 17443296e5,
                    expiryDateMs: 17538336e5
                },
                personal_home_sidebar_item: {
                    launchDateMs: 17470944e5,
                    expiryDateMs: 175392e7
                },
                collection_property_reminder: {
                    launchDateMs: 1751958e6,
                    expiryDateMs: 17552628e5
                },
                get_notified_onboarding_tooltip: {
                    launchDateMs: 17520228e5,
                    expiryDateMs: 17591904e5
                },
                conditional_color_feature: {
                    launchDateMs: 17537472e5,
                    expiryDateMs: 17563392e5
                },
                web_clipper_new_tab_settings: {
                    launchDateMs: 17471808e5,
                    expiryDateMs: 18149184e5
                },
                my_meetings: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 17657568e5
                },
                workspace_connections_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                external_agents_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                permissions_tab: {
                    launchDateMs: 17578944e5,
                    expiryDateMs: 18149184e5
                },
                library_sidebar: {
                    launchDateMs: 17705952e5,
                    expiryDateMs: 17730144e5
                }
            };

            function n({
                style: e
            }) {
                let t = (0, a(960253).I)(() => ({
                    badge: {
                        letterSpacing: 0,
                        whiteSpace: "nowrap",
                        width: "fit-content",
                        ...e
                    }
                }), [e]);
                return (0, i.jsx)(a(746434).E, {
                    color: "blue",
                    style: t.badge,
                    content: (0, i.jsx)(a(109939).sA, {
                        id: "newBadgeComponent.label",
                        defaultMessage: "New"
                    })
                })
            }

            function o(e) {
                return (0, a(682985).K8)(() => {
                    let {
                        launchDateMs: t,
                        expiryDateMs: i
                    } = r[e], n = a(728372).AppStoreCurrentUserSettingsStore.state;
                    if (n && n.isReady()) {
                        var o;
                        let e = null == (o = n.getSettings()) ? void 0 : o.signup_time;
                        if (e && e > t) return !1
                    }
                    return Date.now() <= i
                }, [e])
            }

            function s({
                style: e,
                newBadgeKey: t
            }) {
                return o(t) ? (0, i.jsx)(n, {
                    style: e
                }) : null
            }

            function l({
                style: e,
                newBadgeKey: t
            }) {
                return (0, a(83208).X)(t) ? (0, i.jsx)(n, {
                    style: e
                }) : null
            }

            function d(e) {
                return e.didUserEngage ? null : "feature_gate" === e.keyType ? (0, i.jsx)(l, { ...e
                }) : (0, i.jsx)(s, { ...e
                })
            }
        },
        330942: (e, t, a) => {
            a.d(t, {
                Mt: () => c,
                RM: () => l,
                dC: () => n,
                f_: () => i().f_,
                ie: () => s,
                q1: () => r,
                sQ: () => u,
                uF: () => d
            }), a(813451), a(944114), a(898992), a(354520), a(737550);
            var i = () => a(706968);

            function r(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function n(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let o = /<lang\s+.*?>\s*/g;

            function s(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(o, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let a = "";
                    for (let i of e.value.slice(t))
                        if ("text" === i.type) a += i.content;
                        else break;
                    if (!o.exec(a)) return e;
                    let i = "",
                        r = t;
                    for (; r < e.value.length; r++) {
                        let t = e.value[r];
                        if ("text" === t.type) i += t.content;
                        else break
                    }
                    let n = [...e.value.slice(0, t), {
                        type: "text",
                        content: i.replace(o, "")
                    }, ...e.value.slice(r)];
                    return "text" === n[0].type && 0 === n[0].content.length && n.shift(), { ...e,
                        value: n
                    }
                }
                return e
            }

            function l(e, t) {
                let i = {};
                for (let t of e) "registered-tool-grouping" === t.type && (i[t.toolCallId] = t);
                let r = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = r.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let a = r[e];
                        if ("agent-transcript-summary" === a.type) {
                            let i = a.summary.trim().length > 0,
                                n = t.summary.trim().length > 0;
                            return i && !n || (r[e] = t), r
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
                        let i = r[e];
                        r[e] = { ...i,
                            value: `${i.value}${t.value}`,
                            citationInfo: (0, a(177861).Mi)(i.citationInfo, t.citationInfo)
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
                    let a = { ...t
                    };
                    e.steps.push(a)
                } else if ("registered-tool-grouping" === t.type) i[t.toolCallId] || (i[t.toolCallId] = t, r.push({ ...t
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
        335765: (e, t, a) => {
            a.d(t, {
                A: () => r
            }), a(581454), a(296540);
            var i = a(474848);

            function r(e) {
                let {
                    type: t,
                    ...r
                } = e, n = (0, a(723240).r)(), o = (0, a(345776).T)(), s = (0, a(682985).K8)(() => {
                    if (a(995735).B.hasResults()) switch (t) {
                        case "currentSpace":
                            return a(995735).B.getUnreadCountForSidebarSpace().mentions;
                        case "otherSpaces":
                            return a(995735).B.getUnreadMentionsCountForOtherSpaces();
                        case "allSpaces":
                            return a(995735).B.getTotalUnreadMentionsCount();
                        case "allGuestSpaces":
                            let e = a(728372).AppStoreCurrentUserRootStore.state,
                                i = (0, a(44389).f)({
                                    currentUserRootStore: e
                                });
                            return a(995735).B.getUnreadMentionsCountForSpaces(i.map(e => e.getSpaceId()));
                        default:
                            (0, a(722371).HB)(t)
                    }
                }, [t]), l = (0, a(879101).n)({
                    key: ["inbox", "unreadCount", t, n, o],
                    computedState: s
                });
                return (0, i.jsx)(a(548936).$, {
                    count: l,
                    ...r
                })
            }
        },
        346596: (e, t, a) => {
            a.d(t, {
                L: () => r,
                k: () => n
            });
            var i = a(296540);

            function r(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: r
                } = (0, a(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: a(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, i.useMemo)(() => {
                    if (t && r) return a(360851).N.createChildStore(r, {
                        table: a(43296).C,
                        id: t,
                        spaceId: r.id
                    })
                }, [t, r])
            }

            function n(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    i = a(728372).AppStoreSidebarSpaceStore.state;
                if (t && i) return a(360851).N.createChildStore(i, {
                    table: a(43296).C,
                    id: t,
                    spaceId: i.id
                })
            }
        },
        398126: (e, t, a) => {
            a.r(t), a.d(t, {
                iconDefinition: () => i,
                presentIcon: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.72 1.77 14.56 15.51",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M4.625 4.535a2.765 2.765 0 0 1 3.307-2.711l.07.014a3.26 3.26 0 0 1 2.01 1.297 3.34 3.34 0 0 1 2.044-1.309c1.706-.34 3.319.96 3.319 2.71 0 .558-.166 1.079-.452 1.514h.777c.87 0 1.575.705 1.575 1.575v1.9c0 .613-.35 1.144-.861 1.404V15.7c0 .87-.705 1.575-1.575 1.575H5.16c-.87 0-1.575-.705-1.575-1.575v-4.77a1.58 1.58 0 0 1-.861-1.405v-1.9c0-.87.705-1.575 1.575-1.575h.776a2.75 2.75 0 0 1-.451-1.515m6 2.765v2.55H15.7c.18 0 .325-.145.325-.325v-1.9A.325.325 0 0 0 15.7 7.3zm-1.25 0H4.3a.325.325 0 0 0-.325.325v1.9c0 .18.145.325.325.325h5.075zm0-1.25V5.038c0-.96-.678-1.786-1.618-1.974l-.07-.014a1.515 1.515 0 1 0-.297 3zm3.25 0c.83-.008 1.5-.683 1.5-1.515 0-.95-.882-1.671-1.824-1.483a2.084 2.084 0 0 0-1.676 2.035v.963zm-2 5.05v4.925h4.214c.18 0 .325-.145.325-.325v-4.6zm-1.25 0h-4.54v4.6c0 .18.146.325.326.325h4.214z"
                    })
                },
                r = (0, a(104509).wt)("present", i, "default")
        },
        408138: (e, t, a) => {
            a.d(t, {
                X: () => i
            });
            let i = a(546605).Store.createValue({
                shouldReset: !1
            }, {
                name: "MobileAssistantMenuStore"
            })
        },
        412353: (e, t, a) => {
            a.d(t, {
                k: () => r,
                r: () => n
            });
            var i = a(296540);

            function r() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore),
                    r = n();
                (0, i.useEffect)(() => {
                    t && !1 === r && (0, a(377796).createAndCommit)({
                        environment: e,
                        userAction: "useTrackMeetingPageUsage.updateMyMeetingsVisitedAt",
                        cellTarget: "main",
                        perform: e => {
                            (0, a(862759).m)({
                                userSettingsStore: t,
                                data: {
                                    my_meetings_visited_at: Date.now()
                                },
                                transaction: e
                            })
                        },
                        canUndo: !1
                    })
                }, [e, t, r])
            }

            function n() {
                let e = (0, a(682985).O$)(a(728372).AppStoreCurrentUserSettingsStore);
                return (0, a(682985).K8)(() => {
                    let t = null == e ? void 0 : e.getSettings();
                    if (t) return (t.my_meetings_visited_at ? ? 0) > 0
                }, [e])
            }
        },
        425749: (e, t, a) => {
            a.d(t, {
                I$: () => o,
                R2: () => d,
                WF: () => l,
                bZ: () => s,
                cE: () => r,
                jX: () => n,
                rz: () => c
            });
            var i = () => a(381453);

            function r(e) {
                return "disabledByAdmin" === e || "orphanedAutoDisable" === e
            }
            let n = ["creditLimit", "runLimit", "runawayCreditUsage"];

            function o(e) {
                return !!(void 0 !== e && (0, a(722371).Xk)(n, e))
            }

            function s() {
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
        445283: (e, t, a) => {
            a.d(t, {
                N: () => i
            });

            function i(e) {
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
        458364: (e, t, a) => {
            a.d(t, {
                x: () => o
            }), a(296540);
            var i = a(474848);
            let r = {
                    "baseball-cap": a(584758),
                    bow: a(313669),
                    cat: a(641085),
                    cherry: a(941670),
                    cowboy: a(161412),
                    crown: a(722784),
                    dog: a(965967),
                    duck: a(190462),
                    firefighter: a(124394),
                    flower: a(784836),
                    glasses: a(31461),
                    headphone: a(202151),
                    leaf: a(938989),
                    magician: a(550122),
                    mustache: a(546579),
                    paprika: a(368733),
                    pencil: a(303626),
                    propeller: a(58344),
                    "safety-hat": a(682759),
                    scarf: a(832338),
                    "seasonal-bat": a(8779),
                    "seasonal-demon": a(269515),
                    "seasonal-frankenstein": a(441892),
                    "seasonal-pumpkin": a(113174),
                    "seasonal-santa-hat": a(970878),
                    "seasonal-new-year": a(465707)
                },
                n = {
                    "baseball-cap": a(340916),
                    bow: a(279206),
                    cat: a(422550),
                    cherry: a(580899),
                    cowboy: a(251861),
                    crown: a(121421),
                    dog: a(528440),
                    duck: a(104455),
                    firefighter: a(498667),
                    flower: a(733785),
                    glasses: a(701743),
                    headphone: a(665008),
                    leaf: a(620842),
                    magician: a(625031),
                    mustache: a(445872),
                    paprika: a(386194),
                    pencil: a(390123),
                    propeller: a(783925),
                    "safety-hat": a(702404),
                    scarf: a(98303),
                    "seasonal-bat": a(688220),
                    "seasonal-demon": a(279728),
                    "seasonal-frankenstein": a(879817),
                    "seasonal-pumpkin": a(258527),
                    "seasonal-santa-hat": a(667115),
                    "seasonal-new-year": a(49396)
                };

            function o({
                accessory: e,
                variant: t = "large",
                shadowVariant: s,
                smallerFace: l,
                accessorySpeechBubblePlacement: d = "none",
                speechBubbleTextOverride: c,
                speechBubbleVerticalOffsetPx: u,
                speechBubbleHorizontalOffsetPx: p,
                animateDogAccessory: g = !0,
                speechBubbleTailCircleTop: f,
                speechBubbleTailCircleInsetInlineStartPx: m,
                ...h
            }) {
                let y = "dark" === (0, a(960253).e)(),
                    v = (0, a(445283).N)(t),
                    b = Math.round(1.5625 * v),
                    S = (0, a(960253).I)(() => ({
                        container: {
                            position: "relative",
                            width: v,
                            height: v,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        },
                        faceWrapper: {
                            transform: l ? "scale(0.85)" : void 0
                        },
                        accessoryOverlay: {
                            position: "absolute",
                            width: b,
                            height: b,
                            objectFit: "contain",
                            pointerEvents: "none",
                            top: "50%",
                            transform: "translate(calc(var(--direction, 1) * -50%), -50%) scaleX(var(--direction, 1))",
                            insetInlineStart: "50%"
                        }
                    }), [v, b, l]),
                    x = e ? (y ? n : r)[e] : null;
                return (0, i.jsx)("div", { ...h,
                    children: (0, i.jsxs)("div", {
                        style: S.container,
                        children: [(0, i.jsx)("div", {
                            style: S.faceWrapper,
                            children: (0, i.jsx)(a(448734).Ax, {
                                variant: t,
                                animationMode: e ? "minimal" : "normal",
                                shadowVariant: s
                            })
                        }), "dog" === e ? (0, i.jsx)("div", {
                            style: S.accessoryOverlay,
                            children: (0, i.jsx)(a(503681).z, {
                                size: b,
                                speechBubblePlacement: d,
                                speechBubbleTextOverride: c,
                                speechBubbleVerticalOffsetPx: u,
                                speechBubbleHorizontalOffsetPx: p,
                                speechBubbleTailCircleTop: f,
                                speechBubbleTailCircleInsetInlineStartPx: m,
                                animated: g
                            })
                        }) : x ? (0, i.jsx)("img", {
                            src: x,
                            alt: `${e} accessory`,
                            style: S.accessoryOverlay
                        }) : void 0]
                    })
                })
            }
        },
        473182: (e, t, a) => {
            a.d(t, {
                $y: () => o,
                jc: () => n,
                x9: () => r
            }), a(296540);
            var i = a(474848);

            function r() {
                let e = (0, a(682985).K8)(() => {
                    let {
                        editsBlocked: e
                    } = a(177123).A.state;
                    return e ? ? !1
                }, []);
                return (0, a(682985).K8)(() => (0, a(717274).Jq)(), []) && e
            }

            function n() {
                return (0, a(682985).K8)(() => {
                    var e;
                    let t = a(731632).A.state;
                    return null == t || null == (e = t.data) ? void 0 : e.invoiceHostedUrl
                }, [])
            }

            function o() {
                var e, t;
                let r = (0, a(533992).v3)(),
                    o = n(),
                    l = (0, a(682985).K8)(() => {
                        var e;
                        let t = a(731632).A.state;
                        return (null == t || null == (e = t.data) ? void 0 : e.overdueInvoiceCount) ? ? 0
                    }, []),
                    d = (0, a(682985).K8)(() => (0, a(887788).h)(r), [r]),
                    c = (e = d, t = l, e ? t > 1 ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process {overdueInvoiceCount, plural, one {your last payment} other {{overdueInvoiceCount} payments}}.",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.multipleInvoicesMessageContent",
                        values: {
                            overdueInvoiceCount: t
                        }
                    }) : (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "Access to Notion is limited because we couldn’t process your last payment",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.messageContent"
                    }) : (0, i.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberMessageContent",
                        defaultMessage: "Access to Notion is limited"
                    })),
                    u = function(e) {
                        if (!e) return (0, i.jsx)(a(109939).sA, {
                            id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberSecondaryLabel",
                            defaultMessage: "Contact a workspace owner to update your workspace’s payment method"
                        })
                    }(d),
                    p = function(e, t, i) {
                        if (t) {
                            let r = (0, a(987954).a)(i);
                            return a => {
                                r && (s(t, e), r(a))
                            }
                        }
                        return i => {
                            s(t, e), a(599754).Ow()
                        }
                    }(r, d, o),
                    g = d ? (0, i.jsx)(a(109939).sA, {
                        defaultMessage: "View unpaid invoice",
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.buttonLabel"
                    }) : (0, i.jsx)(a(109939).sA, {
                        id: "uncollectibleExperience.uncollectibleExperienceOverlay.memberButtonLabel",
                        defaultMessage: "View workspace owner"
                    });
                return {
                    clickAction: p,
                    ctaMessage: g,
                    primaryMessage: c,
                    secondaryMessage: u,
                    ctaIcon: d ? a(213458).arrowUpRightSquareIcon : a(11056).personCircleFillIcon,
                    tooltipBodyMessage: d ? g : u,
                    isWorkspaceOwner: d,
                    overdueInvoiceCount: l
                }
            }

            function s(e, t) {
                (0, a(104310).u)({
                    event: {
                        eventName: "subscription_uncollectible_blurred_experience_cta_clicked",
                        eventProperties: {
                            is_workspace_owner: e
                        }
                    }
                })
            }
        },
        505134: (e, t, a) => {
            a.d(t, {
                G: () => i
            });

            function i() {
                let e = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore);
                return (0, a(682985).K8)(() => {
                    if (null != e && e.isReady()) return (0, a(916804).I)(e)
                }, [e])
            }
        },
        540328: (e, t, a) => {
            a.d(t, {
                KY: () => n,
                dr: () => o,
                xX: () => s
            });
            var i = () => a(558208);
            let r = new Map;

            function n(e) {
                r.set(e.id, e)
            }

            function o(e) {
                if (e) return r.get(e)
            }

            function s(e) {
                var t, n, o;
                let {
                    threadStore: s,
                    environment: l,
                    spaceStore: d,
                    userStore: c
                } = e;
                if (!s || !(0, i().Ci)(s)) return s;
                let u = l.defaultRecordCache.inMemoryRecordCache;
                for (let e of u.cacheOverrides.slice()) e.name === i().Ll && u.removeCacheOverride(e);
                let p = s.getTranscript(),
                    g = s.getParentId(),
                    f = s.getParentTable(),
                    m = null == (t = s.getData()) ? void 0 : t.workflow_id,
                    h = s.getType(),
                    y = null == (n = s.getData()) ? void 0 : n.title,
                    v = s.getSpaceId() ? ? d.id,
                    {
                        performResult: b
                    } = (0, a(377796).createAndCommit)({
                        userAction: "databaseAgent.persistTemporaryThread",
                        environment: l,
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: v
                        },
                        perform: e => {
                            let t = (0, a(757688).aP)({
                                environment: l,
                                spaceStore: d,
                                userStore: c,
                                transcript: p,
                                transaction: e,
                                threadId: s.id,
                                workflowId: m,
                                threadType: h
                            });
                            return g && f && (0, a(173157).z)({
                                store: t,
                                transaction: e,
                                data: {
                                    parent_id: g,
                                    parent_table: f,
                                    space_id: v
                                }
                            }), y && (0, a(173157).z)({
                                store: t.getDataStore(),
                                transaction: e,
                                data: {
                                    title: y
                                }
                            }), t
                        }
                    });
                return o = s.id, r.delete(o), b ? ? a(174148).E.createChildStore(d, {
                    id: s.id,
                    spaceId: v,
                    table: a(832375).Toz
                })
            }
        },
        545504: (e, t, a) => {
            a.d(t, {
                w: () => i
            });

            function i({
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
        548936: (e, t, a) => {
            a.d(t, {
                $: () => n
            }), a(296540);
            var i = a(474848);
            let r = {
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: 16,
                height: 16,
                fontSize: 10,
                textAlign: "center",
                fontWeight: a(699422).Wy.semibold,
                borderRadius: 4,
                position: "static",
                marginInlineStart: 6,
                pointerEvents: "none",
                WebkitFontSmoothing: "auto"
            };

            function n({
                count: e,
                style: t,
                numberStyle: o,
                fadeIn: s,
                showExcessUnreadsAsStale: l,
                isTranslucent: c
            }) {
                var u;
                let p = (0, a(960253).I)(() => {
                    var i;
                    let n = (e ? ? 0) > 99;
                    return {
                        badge: { ...r,
                            ...t,
                            ...n && {
                                width: void 0,
                                padding: 2
                            },
                            background: l && n ? a(632079).Tj.gray.background[c ? "secondaryTranslucent" : "tertiary"] : a(632079).Tj.red.background.accentPrimary,
                            color: l && n ? a(632079).Tj.gray.text.accentPrimary : a(632079).Tj.red.text.inversePrimary,
                            ...s && {
                                transition: "opacity 0.1s",
                                opacity: +!!((i = e) && i > 0)
                            }
                        }
                    }
                }, [e, s, c, l, t]);
                return s || (u = e) && u > 0 ? (0, i.jsx)("div", {
                    style: p.badge,
                    children: (0, i.jsx)(d, {
                        count: e,
                        numberStyle: o
                    })
                }) : null
            }
            let o = {
                    marginInlineStart: -.5
                },
                s = {
                    letterSpacing: -.5
                },
                l = {
                    letterSpacing: -.5,
                    marginInlineStart: -.5
                };

            function d({
                count: e,
                numberStyle: t
            }) {
                return e ? 1 === e ? (0, i.jsx)("span", {
                    style: { ...o,
                        ...t
                    },
                    children: "1"
                }) : e > 99 ? (0, i.jsx)("span", {
                    style: { ...s,
                        ...t
                    },
                    children: "99+"
                }) : e > 9 ? (0, i.jsx)("span", {
                    style: { ...l,
                        ...t
                    },
                    children: e
                }) : (0, i.jsx)("span", {
                    style: { ...t
                    },
                    children: e
                }) : null
            }
        },
        558208: (e, t, a) => {
            a.d(t, {
                AD: () => s,
                Ci: () => l,
                Ll: () => r,
                XN: () => o,
                rz: () => n
            });
            var i = a(296540);
            let r = "TemporaryAiThreadCache";
            class n {
                tempThreadPointer = void 0;
                getOrCreateThreadId(e) {
                    let {
                        environment: t,
                        spaceId: i,
                        maybeThreadStore: r
                    } = e;
                    if (r) return r.id;
                    if (this.tempThreadPointer) return this.tempThreadPointer.id;
                    let n = (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).Toz,
                        spaceId: i
                    });
                    return this.tempThreadPointer = {
                        id: n,
                        table: a(832375).Toz,
                        spaceId: i
                    }, n
                }
                reset() {
                    this.tempThreadPointer = void 0
                }
            }
            let o = (0, i.createContext)(new n);

            function s() {
                return (0, i.useContext)(o)
            }

            function l(e) {
                var t;
                return (null == e || null == (t = e.inMemoryRecordCache) ? void 0 : t.name) === r
            }
            o.displayName = "TemporaryAiThreadContext"
        },
        565719: (e, t, a) => {
            a.d(t, {
                w: () => i
            });

            function i(e) {
                return "v1" === e || "v2" === e || "v3" === e
            }
        },
        579762: (e, t, a) => {
            a.d(t, {
                f: () => d
            }), a(898992), a(354520), a(430670), a(803949), a(581454);
            var i = a(296540);
            a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var r = () => a(546605);
            class n extends r().Store {
                getInitialState() {
                    return {
                        emojisBySpace: {}
                    }
                }
                addEmojis(e, t) {
                    this.update(a => {
                        let i = a.emojisBySpace[t] || [],
                            r = new Set(i),
                            n = e.filter(e => !r.has(e));
                        if (n.length > 0) {
                            let e = 10 - i.length,
                                r = n.slice(0, e);
                            if (r.length > 0) return {
                                emojisBySpace: { ...a.emojisBySpace,
                                    [t]: [...i, ...r]
                                }
                            }
                        }
                        return a
                    })
                }
                popEmoji(e) {
                    let t = this.state.emojisBySpace[e] || [],
                        a = t[t.length - 1];
                    return a && this.update(a => ({
                        emojisBySpace: { ...a.emojisBySpace,
                            [e]: t.slice(0, -1)
                        }
                    })), a
                }
                getEmojis(e) {
                    return this.state.emojisBySpace[e] || []
                }
                clearEmojis(e) {
                    this.update(t => ({
                        emojisBySpace: { ...t.emojisBySpace,
                            [e]: []
                        }
                    }))
                }
            }
            let o = new n;
            var s = a(474848);
            let l = {
                display: "flex",
                alignItems: "center"
            };

            function d(e) {
                let {
                    children: t,
                    skipInitialAnimation: r = !1
                } = e, [n, d] = (0, i.useState)(!1);
                (0, i.useEffect)(() => {
                    d(!0)
                }, []);
                let [c, u] = (0, i.useState)(!1), [p, g] = (0, i.useState)(void 0), f = (0, a(682985).K8)(() => a(825244).A.state.isVisible, []);
                (0, a(682985).K8)(() => {
                    let e = a(995735).B.state.results,
                        t = a(728372).AppStoreCurrentUserRootStore.state,
                        i = a(825244).A.state.isVisible;
                    !t || i && e.forEach(e => {
                        var i;
                        let r = (null == (i = e.unreceived) ? void 0 : i.notificationIds) || [],
                            n = e.spaceId;
                        if (!n || !r.length) return;
                        let s = a(695906).SpaceStore.createChildStore(t, {
                            table: a(832375).NXh,
                            id: n
                        });
                        if (!s) return;
                        a(995735).B.markNotificationsAsReceived(n, r);
                        let l = r.map(e => a(403973).T.createChildStore(s, {
                                table: a(832375)._pz,
                                id: e,
                                spaceId: n
                            })),
                            d = a(381453).oE(l.map(e => {
                                let t = a(966980).g5(e);
                                if (null != t && t.isReady()) return t
                            })).filter(e => (null == e ? void 0 : e.getType()) === "reacted").filter(e => !(null != e && e.getInvalid())).sort((e, t) => {
                                let a = Number(null == e ? void 0 : e.getEndTime()) || 0;
                                return (Number(null == t ? void 0 : t.getEndTime()) || 0) - a
                            }).flatMap(e => {
                                let t = ((null == e ? void 0 : e.getEdits()) || []).filter(e => e && "reaction_id" in e && "reaction-created" === e.type).sort((e, t) => {
                                    let a = (null == e ? void 0 : e.timestamp) ? ? 0;
                                    return ((null == t ? void 0 : t.timestamp) ? ? 0) - a
                                })[0];
                                return (null == t ? void 0 : t.reaction_id) ? ? []
                            }).map(e => a(868249).L.createChildStore(s, {
                                table: a(832375).ez7,
                                id: e
                            })).map(e => null == e ? void 0 : e.getIcon()).filter(a(722371).O9);
                        d.length > 0 && o.addEmojis(d, n)
                    })
                }, []);
                let m = (0, a(723240).r)(),
                    h = i.useRef(),
                    y = i.useRef(),
                    v = (0, i.useCallback)(() => {
                        h.current && (clearTimeout(h.current), h.current = void 0), y.current && (clearTimeout(y.current), y.current = void 0), u(!1), g(void 0)
                    }, []),
                    b = (0, i.useCallback)(() => {
                        if (!f || !m) return void v();
                        let e = o.popEmoji(m);
                        (g(e), e) ? (u(!0), h.current = setTimeout(() => {
                            u(!1), y.current = setTimeout(() => {
                                b()
                            }, 800)
                        }, 1e3)) : v()
                    }, [v, f, m]);
                return (0, a(682985).K8)(() => {
                    !m || !(o.getEmojis(m).length > 0) || c || h.current || b()
                }, [c, b, m]), (0, i.useEffect)(() => v, [v]), (0, s.jsx)(a(4458).fI, {
                    alignItems: "center",
                    justifyContent: "center",
                    children: (0, s.jsx)(a(203066).N, {
                        mode: "wait",
                        children: p ? (0, s.jsx)(a(153321).P.div, {
                            initial: {
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .5
                            },
                            transition: {
                                duration: .8,
                                type: "spring",
                                damping: 24,
                                stiffness: 432,
                                mass: 1
                            },
                            children: (0, s.jsx)(a(945304).A, {
                                char: p,
                                size: 18
                            })
                        }, `emoji-${p}`) : (0, s.jsx)(a(153321).P.div, {
                            initial: (!r || !!n) && {
                                opacity: 0,
                                scale: .5
                            },
                            animate: {
                                opacity: 1,
                                scale: 1
                            },
                            exit: {
                                opacity: 0,
                                scale: .5
                            },
                            transition: {
                                duration: .8,
                                type: "spring",
                                damping: 24,
                                stiffness: 432,
                                mass: 1
                            },
                            style: l,
                            children: t
                        }, "number")
                    })
                })
            }
        },
        594049: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarMeetingsButton: () => s
            });
            var i = a(296540),
                r = a(474848);
            let n = {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    height: 20,
                    width: 20,
                    borderRadius: 4,
                    marginInlineStart: 4
                },
                o = {
                    marginInlineStart: 6
                };

            function s(e) {
                let t = (0, a(109939).tz)(),
                    s = (0, a(533992).v3)(),
                    d = (0, a(665002).g)(),
                    c = (0, a(622110).c)(),
                    u = (0, a(815048).fJ)(a(68067).$),
                    {
                        sidebarTooltipStore: p,
                        sidebarItemHoverStore: g,
                        handleFocus: f,
                        handleBlur: m,
                        handleMouseMove: h,
                        handleMouseLeave: y
                    } = (0, a(783242).W)(),
                    v = (0, a(682985).K8)(() => {
                        let e = s.RouterStore.state.route;
                        return (null == e ? void 0 : e.name) === "meet"
                    }, [s]),
                    {
                        isSidebarItemHovered: b,
                        isSidebarItemFocused: S
                    } = (0, a(682985).O$)(g),
                    x = b || S,
                    _ = (0, a(412353).r)(),
                    [I, w] = (0, a(848135).B)();
                (0, i.useEffect)(() => {
                    g.setState({ ...g.state,
                        isActionButtonHovered: w
                    })
                }, [w, g]);
                let A = (0, i.useCallback)(e => {
                        if (e.stopPropagation(), e.preventDefault(), "resolved" !== u.status) return;
                        let {
                            createAndNavigateToTranscriptionBlock: t
                        } = u.value;
                        t({
                            environment: s,
                            from: "sidebar_meetings_tab_create_button",
                            title: "none",
                            origin: "sidebar_meetings_plus_button"
                        })
                    }, [s, u]),
                    {
                        isActionButtonHovered: C,
                        isActionButtonFocused: T
                    } = (0, a(682985).O$)(g),
                    M = !(0, a(682985).O$)(a(205885).e),
                    k = (0, i.useCallback)(() => M ? (0, r.jsx)("div", {
                        children: t.formatMessage(l.offlineTooltip)
                    }) : C || T ? (0, r.jsx)("div", {
                        children: t.formatMessage(l.createMeetingTooltip)
                    }) : (0, r.jsx)("div", {
                        children: t.formatMessage(l.tooltip)
                    }), [t, C, T, M]),
                    j = (0, i.useCallback)(() => {
                        (0, a(104310).u)({
                            event: {
                                eventName: "ai_meetings_tab_click",
                                eventProperties: {}
                            }
                        })
                    }, []);
                return c ? (0, r.jsx)(a(51831).m, {
                    store: p,
                    content: k,
                    originGap: 6,
                    placement: "right",
                    children: i => {
                        var s;
                        return (0, r.jsx)(a(590422).Q, {
                            style: { ...a(132261).DX.baseSidebarItem,
                                ...v && a(132261).DX.currentSelectedSidebarItem,
                                ...d && {
                                    transition: "none"
                                }
                            },
                            href: "/meet",
                            hoveredStyle: null == (s = e.styles) ? void 0 : s.buttonHoveredStyle,
                            ...i,
                            onFocus: e => {
                                var t;
                                null == (t = i.onFocus) || t.call(i, e), f(e)
                            },
                            onBlur: e => {
                                var t;
                                null == (t = i.onBlur) || t.call(i, e), m()
                            },
                            onClick: j,
                            disabled: M,
                            disabledFeedback: M,
                            children: (0, r.jsx)(a(380559).u, {
                                onMouseMove: h,
                                onMouseLeave: y,
                                left: (0, r.jsx)(a(16275).I, {
                                    icon: a(681875).a,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                right: x ? (0, r.jsx)("div", {
                                    ref: I,
                                    style: {
                                        opacity: +!!x,
                                        transition: d ? "none" : "opacity 0.1s ease-in-out"
                                    },
                                    children: (0, r.jsx)(a(64960).Ay, {
                                        ariaLabel: t.formatMessage(l.createMeetingTooltip),
                                        style: n,
                                        onClick: A,
                                        children: (0, r.jsx)(a(16275).I, {
                                            icon: a(638501).plusSmallIcon,
                                            size: "sm",
                                            colorPalette: "gray",
                                            colorVariant: "secondary"
                                        })
                                    })
                                }) : (0, r.jsx)("div", {
                                    style: o,
                                    children: void 0 !== _ ? (0, r.jsx)(a(322662).Ee, {
                                        newBadgeKey: "my_meetings",
                                        keyType: "date",
                                        didUserEngage: !0 === _
                                    }) : null
                                }),
                                children: (0, r.jsx)(a(4458).fI, {
                                    alignItems: "center",
                                    gap: 8,
                                    children: t.formatMessage(a(792492).D.meetings)
                                })
                            })
                        })
                    }
                }) : null
            }
            let l = (0, a(109939).YK)({
                tooltip: {
                    id: "sidebar.meetings.tooltip",
                    defaultMessage: "Create & manage AI Meeting Notes in one place"
                },
                createMeetingTooltip: {
                    id: "sidebar.meetings.createMeeting.tooltip",
                    defaultMessage: "Create new AI meeting notes"
                },
                offlineTooltip: {
                    id: "sidebar.meetings.offlineTooltip",
                    defaultMessage: "Unavailable while offline"
                }
            })
        },
        594687: (e, t, a) => {
            a.d(t, {
                F: () => i
            });

            function i(e, {
                disableExposureLogging: t = !1
            } = {}) {
                var r, n, o;
                let s = null == (r = a(728372).AppStoreSidebarSpaceStore.state) || null == (r = r.getSpaceSurveyData()) || null == (r = r.intent) ? void 0 : r.value;
                if (e.isFirstTimeOnboarding || a(986939).A.isMobile || "school" !== s) return "control";
                let l = null == (n = a(728372).AppStoreCurrentUserStore.state) ? void 0 : n.id,
                    d = null == (o = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : o.getCreatedById();
                if (!l || l !== d) return "control";
                let c = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!c) return "control";
                let u = c.getSettings();
                if (null != u && u.finished_new_user_home_experience) return "control";
                let p = (0, a(996903).i)(c);
                return null === p || p > 7 ? "control" : a(218744).default.getEligibleGroup({
                    experimentId: "new_student_home",
                    defaultGroup: "control",
                    disableExposureLogging: t
                })
            }
        },
        598132: (e, t, a) => {
            function i(e) {
                let t = a(728372).AppStoreCurrentUserRootStore.state;
                if (!t) return !1;
                let i = t.getSpaceViewStores();
                return (0, a(381453).oE)(null == i ? void 0 : i.map(e => e.getSpaceId())).map(t => a(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                })).some(e => n(e))
            }

            function r(e, t) {
                return n(a(949830).A.getData(e, {
                    spaceId: t,
                    userId: e.currentUser.id
                }))
            }

            function n(e) {
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
                        (0, a(722371).HB)(e)
                }
            }
            a.d(t, {
                h0: () => i,
                lM: () => r
            }), a(898992), a(581454), a(737550)
        },
        622110: (e, t, a) => {
            a.d(t, {
                c: () => i
            });

            function i() {
                let e = (0, a(505134).G)(),
                    t = (0, a(839362).W)(),
                    i = (0, a(682985).K8)(() => {
                        var e;
                        return null == (e = a(728372).AppStoreSidebarSpaceViewStore.state) || null == (e = e.getSettings()) ? void 0 : e.hide_meetings_tab
                    }, []);
                return !e && !!t && !i
            }
        },
        647164: (e, t, a) => {
            a.d(t, {
                o: () => i
            });

            function i({
                environment: e,
                featureKey: t
            }) {
                var r;
                let n = (0, a(904434).R$)(e);
                if (!n) return;
                let o = null == (r = n.getSettings()) ? void 0 : r.exposed_to_adoption_feature;
                (0, a(377796).createAndCommit)({
                    environment: e,
                    userAction: "userSettingsActions.setAdoptionFeatureExposure",
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
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
        648188: (e, t, a) => {
            a.d(t, {
                W: () => i
            });

            function i() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(682985).O$)(a(831779).A);
                return (0, a(682985).K8)(() => {
                    var i, r;
                    let n = a(728372).AppStoreCurrentUserSettingsStore.state;
                    if (!(null != n && n.isReady())) return !1;
                    let o = (0, a(73233).getOnboardingAgentVariant)(),
                        s = a(218744).default.getEligibleGroup({
                            experimentId: "uxr_debug_onboarding_agent",
                            disableExposureLogging: !0
                        }),
                        l = void 0 !== s && "control" !== s;
                    if ("control" === o && !l) return !1;
                    let d = null == (i = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : i.id,
                        c = d ? a(54068).T.getData(e, {
                            spaceId: d
                        }) : void 0;
                    if ((0, a(824574)._)(c)) {
                        let e = null == (r = n.getSettings()) ? void 0 : r.post_onboarding_agent_config;
                        if (!(null != e && e.has_user_responded)) return !1
                    }
                    let u = (0, a(664949).$)(t, c, {
                        disableExposureLogging: !0
                    });
                    if (void 0 !== u && "control" !== u) return !1;
                    let p = (0, a(594687).F)(t, {
                        disableExposureLogging: !0
                    });
                    if (void 0 !== p && "control" !== p) return !1;
                    let g = n.getSettings();
                    if (null != g && g.finished_new_user_home_experience) return !1;
                    let f = null == g ? void 0 : g.post_onboarding_agent_config,
                        m = null == g ? void 0 : g.signup_time,
                        h = null == f ? void 0 : f.thread_id;
                    if (!h || !(0, a(596244).B)(f) || f.has_dismissed_callout || !l && void 0 !== m && (0, a(362008).Mn)(m) > 7) return !1;
                    let y = e.RouterStore.state.route,
                        v = (0, a(4962).Xw)(h);
                    if ("chat" === y.name) {
                        let e = y.threadId;
                        if (e && (0, a(4962).Xw)(e) === v) return !1
                    }
                    return ("page" !== y.name && "agent" !== y.name && "meet" !== y.name && "library" !== y.name && "desktopNosey" !== y.name || !y.chatThreadId || (0, a(4962).Xw)(y.chatThreadId) !== v) && !0
                }, [e, t])
            }
        },
        664949: (e, t, a) => {
            a.d(t, {
                $: () => i
            });

            function i(e, t, {
                disableExposureLogging: r = !1
            } = {}) {
                var n, o, s;
                let l = null == (n = a(728372).AppStoreSidebarSpaceStore.state) || null == (n = n.getSpaceSurveyData()) || null == (n = n.intent) ? void 0 : n.value;
                if (e.isFirstTimeOnboarding || a(986939).A.isMobile || "team" !== l) return "control";
                let d = a(728372).AppStoreCurrentUserSettingsStore.state;
                if (!d) return "control";
                let c = d.getSettings();
                if (null != c && c.finished_new_user_home_experience || null != c && null != (o = c.post_onboarding_agent_config) && o.has_dismissed_callout) return "control";
                let u = (0, a(73233).getOnboardingAgentVariant)();
                if ("v5" === u && null != c && null != (s = c.post_onboarding_agent_config) && s.thread_id) return (0, a(824574)._)(t) && !c.post_onboarding_agent_config.has_user_responded ? "control" : "no_design";
                let p = a(218744).default.getConfigKey("new_user_home_config", "experimentStartDate"),
                    g = null == c ? void 0 : c.signup_time;
                if (!g || a(906745).DateTime.fromMillis(g) < a(906745).DateTime.fromISO(p, {
                        zone: "utc"
                    })) return "control";
                let f = (0, a(996903).i)(d);
                if (null === f || f > 7) return "control";
                let m = (null == c ? void 0 : c.preferred_locale) ? ? a(849917).locale;
                return "en-US" !== m && "en-GB" !== m || void 0 !== u && "control" !== u ? "control" : a(218744).default.getEligibleGroup({
                    experimentId: "new_user_home_mvp",
                    defaultGroup: "control",
                    disableExposureLogging: !0
                })
            }
        },
        674880: (e, t, a) => {
            a.d(t, {
                BX: () => g,
                Jv: () => p,
                Kf: () => l,
                WM: () => n,
                Xd: () => f,
                Xw: () => m,
                defaultInferenceContextStore: () => i,
                fd: () => c,
                i6: () => s,
                uP: () => d
            }), a(944114), a(898992), a(354520), a(803949), a(581454), a(737550);
            let i = new(a(345426)).ComputedStore(() => {
                let e = a(728372).AppStoreSidebarSpaceStore.state,
                    t = a(728372).AppStoreCurrentUserStore.state,
                    i = a(728372).AppStoreSidebarSpaceViewStore.state,
                    r = a(728372).AppStoreMainEditorCurrentBlockStore.state;
                if (e && t && i) return {
                    spaceStore: e,
                    userStore: t,
                    spaceViewStore: i,
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
                    let i = (0, a(444610).U)(e),
                        r = null == i ? void 0 : i.collectionViewStore();
                    r && (t[e.id] = r.id)
                } else e.getContentStores().forEach(e => {
                    if (e.isCollectionView()) {
                        let i = (0, a(444610).U)(e),
                            r = null == i ? void 0 : i.collectionViewStore();
                        r && (t[e.id] = r.id)
                    }
                });
                return t
            }

            function n(e) {
                let {
                    environment: t,
                    surface: i,
                    inferenceContext: n,
                    config: o,
                    invokedFromBlockId: s,
                    checklistId: l,
                    checklistStepId: d
                } = e, {
                    userStore: c,
                    spaceStore: u,
                    spaceViewStore: p,
                    blockStore: g,
                    peekStore: f,
                    workflowStore: m
                } = n, h = (0, a(295447).Z1)({
                    environment: t,
                    table: a(832375).mSw,
                    spaceId: u.id
                }), y = "meet" === t.RouterStore.state.route.name, v = { ...g && g.isCollectionView() ? {
                        collectionViewBlockId: g.id,
                        visibleCollectionViewIds: r(g)
                    } : void 0,
                    ...g && !g.isCollectionView() && "personal_home_page" !== g.getType() && "daily_brief_reminder" !== i ? {
                        blockId: g.id,
                        visibleCollectionViewIds: r(g)
                    } : void 0,
                    ...f ? {
                        peekBlockId: f.id,
                        visibleCollectionViewIds: r(f)
                    } : void 0,
                    ...m ? {
                        workflowId: m.id
                    } : void 0,
                    ...y ? function(e) {
                        if (!a(218744).default.checkGate({
                                gateName: "agent_in_meetings_route"
                            })) return;
                        let {
                            environment: t,
                            spaceId: i,
                            userId: r
                        } = e, n = t.idCreator.getSpaceIdCreatorSync(i), o = (0, a(413388).sX)(r, n);
                        return {
                            collectionViewBlockId: o,
                            visibleCollectionViewIds: {
                                [o]: (0, a(413388).X$)(r, n)
                            }
                        }
                    }({
                        environment: t,
                        spaceId: u.id,
                        userId: c.id
                    }) : void 0
                }, b = {};
                if ("workflow" !== o.type || !o.isCustomAgent) {
                    let e = p.getSettings(),
                        t = null == e ? void 0 : e.agent_personalization_settings;
                    if (t) {
                        var S;
                        t.name && (b.agentName = t.name), null != (S = t.customization_items) && S[0] && (b.agentAccessory = t.customization_items[0]), t.context_page_id && (b.context_page_id = t.context_page_id)
                    }
                }
                let x = function(e) {
                    var t, i, r;
                    let {
                        config: n,
                        workflowStore: o
                    } = e;
                    if ("workflow" !== n.type || !n.isCustomAgent || !o) return;
                    let s = !0 === n.useCustomAgentDraft || !0 === n.use_draft_actor_pointer ? (null == (t = o.getDraftData()) ? void 0 : t.instructions) ? ? (null == (i = o.getData()) ? void 0 : i.instructions) : null == (r = o.getPublishedArtifactStore()) || null == (r = r.getData()) ? void 0 : r.instructions;
                    if ((0, a(886883).ap)(s)) return s.id
                }({
                    config: o,
                    workflowStore: m
                });
                if (x && (b.context_page_id = x), a(218744).default.checkGate({
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
                        surface: i,
                        ...v,
                        invokedFromBlockId: s,
                        ..."onboarding_checklist" === i && l && d ? {
                            checklistId: l,
                            checklistStepId: d
                        } : {},
                        ...b
                    }
                };
                let _ = a(218744).default.checkGate({
                    gateName: "agent_user_session_context"
                }) ? function(e) {
                    let {
                        spaceId: t,
                        limit: i = 10
                    } = e;
                    return a(420156).A.getWithoutSubscribing(t).map(({
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
                        surface: i,
                        ...v,
                        invokedFromBlockId: s,
                        ..."onboarding_checklist" === i && l && d ? {
                            checklistId: l,
                            checklistStepId: d
                        } : {},
                        ...b,
                        recentPageVisits: _
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
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "config",
                    value: r
                }
            }

            function s(e) {
                let {
                    existingTranscript: t,
                    environment: a,
                    spaceStore: i,
                    config: r
                } = e;
                if (!t.some(e => "config" === e.type)) return o({
                    environment: a,
                    spaceStore: i,
                    config: r
                })
            }

            function l(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    value: r,
                    userStore: n
                } = e, o = u(r);
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user",
                    value: o,
                    userId: n.id,
                    createdAt: a(906745).DateTime.now().toISO()
                }
            }

            function d(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    actualMessage: r,
                    displayMessage: n,
                    userStore: o,
                    surveyStepId: s,
                    sourceStepId: l
                } = e, d = u(r) ? ? [], c = u(n);
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "user-injected",
                    actualMessage: d,
                    displayMessage: c,
                    userId: o.id,
                    createdAt: a(906745).DateTime.now().toISO(),
                    surveyStepId: s,
                    sourceStepId: l
                }
            }

            function c(e) {
                let {
                    environment: t,
                    spaceStore: i,
                    agentMessageKey: r,
                    instructions: n
                } = e;
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: i.id
                    }),
                    type: "proactive-message",
                    agentMessageKey: r,
                    instructions: n
                }
            }

            function u(e) {
                if (e) return (0, a(247438).bBR)((0, a(247438).ooo)(e))
            }

            function p({
                environment: e,
                spaceStore: t,
                userStore: i,
                promptType: r,
                value: n,
                locale: o,
                args: s
            }) {
                return {
                    id: (0, a(295447).Z1)({
                        environment: e,
                        table: a(832375).mSw,
                        spaceId: t.id
                    }),
                    type: "agent-prebuilt-prompt",
                    promptType: r,
                    userId: i.id,
                    createdAt: Date.now(),
                    value: n,
                    locale: o,
                    isEdited: !1,
                    args: s
                }
            }

            function g(e) {
                let t, i, {
                    environment: r,
                    spaceId: n,
                    pointers: o,
                    selectedBlockStores: s,
                    textSelection: l,
                    blockSelectionContext: d,
                    textSelectionContext: c
                } = e;
                if (d) t = d;
                else if (s && s.length > 0) {
                    let e = (0, a(685745).B)(s);
                    e && (t = {
                        type: "blocks",
                        value: s.map(e => e.pointer),
                        text: (0, a(250943).E)({
                            mode: "editing",
                            multiSelection: e,
                            forceExtendAnnotations: {}
                        }).slice(0, 1200)
                    })
                }
                if (c) i = c;
                else if (l && l.start.store.pointer.table === a(832375).evP && l.end.store.pointer.table === a(832375).evP) {
                    let e = (0, a(250943).E)({
                            mode: "editing",
                            multiSelection: l,
                            forceExtendAnnotations: {}
                        }),
                        t = e.slice(0, 1200),
                        r = e.length > 1200;
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
                        ...r ? {
                            isPreviewTruncated: !0
                        } : {}
                    }
                }
                if (0 !== o.length || t || i) return {
                    id: (0, a(295447).Z1)({
                        environment: r,
                        table: a(832375).mSw,
                        spaceId: n
                    }),
                    type: "user-specified-context",
                    value: {
                        pointers: o,
                        blockSelection: t,
                        textSelection: i
                    }
                }
            }

            function f(e) {
                let {
                    environment: t,
                    inferenceContext: i,
                    config: r,
                    addSteps: s,
                    surface: l,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                } = e, p = [o({
                    environment: t,
                    spaceStore: i.spaceStore,
                    config: r
                }), n({
                    environment: t,
                    inferenceContext: i,
                    surface: l,
                    config: r,
                    invokedFromBlockId: d,
                    checklistId: c,
                    checklistStepId: u
                })];
                return s && p.push(...s), p.filter(a(722371).O9)
            }

            function m(e) {
                let {
                    environment: t,
                    spaceId: i,
                    message: r,
                    notificationType: n = "info",
                    metadata: o
                } = e;
                return {
                    id: (0, a(295447).Z1)({
                        environment: t,
                        table: a(832375).mSw,
                        spaceId: i
                    }),
                    type: "system-notification",
                    message: r,
                    notificationType: n,
                    metadata: o
                }
            }
        },
        675053: (e, t, a) => {
            a.r(t), a.d(t, {
                setPostOnboardingAgentConfig: () => i
            });

            function i({
                environment: e,
                config: t
            }) {
                var r;
                let n = (0, a(904434).R$)(e);
                if (!n) return;
                let o = (null == (r = n.getSettings()) ? void 0 : r.post_onboarding_agent_config) ? ? {};
                (0, a(377796).createAndCommit)({
                    userAction: "contextualizedOnboardingActions.savePostOnboardingAgentConfig",
                    environment: e,
                    cellTarget: "main",
                    canUndo: !0,
                    perform: e => {
                        (0, a(862759).m)({
                            userSettingsStore: n,
                            data: {
                                post_onboarding_agent_config: { ...o,
                                    ...t
                                }
                            },
                            transaction: e
                        })
                    }
                })
            }
        },
        685745: (e, t, a) => {
            a.d(t, {
                B: () => o
            });
            var i = () => a(129499),
                r = () => a(955630);

            function n(e) {
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
                let t, r = n(e);
                if (!r) return;
                let o = n([...e].reverse());
                if (!o) return;
                let s = (0, a(787926).Ag)({
                    includeNonSelectableListContainer: !1,
                    rootStore: r.blockStore.getHighestContentBlockUIAncestor()
                });
                if (!s) return;
                let l = (0, a(787926).mP)(o.blockStore, s);
                if (l) {
                    for (let e of (0, a(827049).Y_)(l)) {
                        let a = e.value.store.getTitleStore();
                        if (a) {
                            let e = (0, i().s)(a);
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
        706968: (e, t, a) => {
            function i(e) {
                return s({
                    transcript: e
                })
            }

            function r(e) {
                let t = i(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent
            }

            function n(e) {
                let t = i(e);
                return (null == t ? void 0 : t.type) === "workflow" && !0 === t.isCustomAgent ? t.workflowId : void 0
            }

            function o(e) {
                let {
                    transcript: t,
                    fallback: a
                } = e, i = a;
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

            function s(e) {
                var t;
                let {
                    transcript: a
                } = e, i = null == (t = a.findLast(e => "config" === e.type)) ? void 0 : t.value;
                if (i) return "workflow" !== i.type ? i : o({
                    transcript: a
                }) ? ? i
            }
            a.d(t, {
                TU: () => s,
                f_: () => i,
                p0: () => r,
                py: () => o,
                zB: () => n
            }), a(410838)
        },
        729849: (e, t, a) => {
            a.d(t, {
                Gi: () => o,
                yB: () => n
            }), a(898992), a(354520), a(803949);
            var i = () => a(546605);

            function r() {
                return a(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function n() {
                return (0, a(682985).K8)(() => r(), [])
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
                        var a;
                        let i = t.get(e);
                        i && t.set(e, { ...i,
                            metadata: { ...i.metadata,
                                guardrail: { ...null == (a = i.metadata) ? void 0 : a.guardrail,
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
                        i = a.get(e);
                    a.set(e, { ...t,
                        timeUploaded: (null == i ? void 0 : i.timeUploaded) ? ? Date.now()
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
                        percentage: i,
                        contentType: r
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: a,
                        progress: i,
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
                    let i = this.getTimeUploadedForUploadingFile(e);
                    this.deleteValueForUploadingFile(e), this.setValueForUploadedFile(t.originalFileUrl, {
                        originalFileUrl: t.originalFileUrl,
                        fileName: t.fileName,
                        contentType: "application/pdf",
                        base64EncodedFileUrl: "",
                        attachmentSource: "user_upload",
                        assistantSessionId: (0, a(818963).pg)(t.assistantSessionId),
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
        731632: (e, t, a) => {
            a.d(t, {
                A: () => n
            });
            var i = () => a(546605);
            class r extends i().Store {}
            let n = new r
        },
        751953: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarInboxButton: () => o,
                inboxMessages: () => s
            });
            var i = a(296540),
                r = a(474848);
            let n = {
                badge: {
                    width: void 0,
                    minWidth: 16,
                    paddingInlineStart: 3,
                    paddingInlineEnd: 3
                },
                number: {
                    fontWeight: a(699422).Wy.semibold,
                    letterSpacing: .12,
                    fontSize: 10,
                    fontVariantNumeric: "lining-nums tabular-nums",
                    fontFeatureSettings: "lnum",
                    MozFontFeatureSettings: "lnum",
                    WebkitFontFeatureSettings: "lnum"
                },
                shortcutLabel: {
                    color: a(632079).Tj.text.inverseSecondary
                }
            };

            function o(e) {
                let t = (0, a(533992).v3)(),
                    o = (0, a(109939).tz)(),
                    l = (0, a(723240).r)(),
                    d = (0, a(682985).K8)(() => "inbox" === a(550830).default.state.contentType && a(550830).default.isOpen(), []),
                    c = (0, a(682985).O$)(a(984858).sidebarExpandedStore),
                    u = (0, a(682985).K8)(() => a(550830).default.state.mode, []),
                    p = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    g = d && "panel" === u,
                    f = (0, i.useCallback)(() => {
                        a(477810).ZT({
                            environment: t,
                            contentType: "inbox"
                        })
                    }, [t]),
                    m = (0, a(960253).I)(() => ({
                        sidebarItem: { ...g && {
                                fontWeight: a(699422).Wy.semibold,
                                background: a(632079).Tj.sidebarItemSelectedBackground
                            }
                        }
                    }), [g]),
                    h = (0, a(682985).K8)(() => (0, a(494144).o)(p) ? "allGuestSpaces" : "currentSpace", [p]),
                    y = (0, a(682985).K8)(() => (0, a(259533).isPrewarmedTabInitialRender)(t) && a(989962).isPrewarmedTabLoadSidebarEnabled, [t]),
                    v = (0, r.jsx)(a(335765).A, {
                        type: h,
                        style: n.badge,
                        numberStyle: n.number,
                        fadeIn: !y,
                        showExcessUnreadsAsStale: !0,
                        isTranslucent: !0
                    }),
                    b = "on" === (0, a(604306).r)("collaboration_reaction_notifications") && c && !y,
                    S = !(0, a(682985).O$)(a(205885).e);
                return (0, r.jsx)(a(51831).m, {
                    content: () => S ? (0, r.jsx)("div", {
                        children: o.formatMessage(s.offlineTooltip)
                    }) : (0, r.jsxs)("div", {
                        children: [(0, r.jsx)("div", {
                            children: o.formatMessage(s.tooltip)
                        }), (0, r.jsx)(a(693592).A, {
                            style: n.shortcutLabel,
                            name: "toggleAllUpdates"
                        })]
                    }),
                    originGap: 6,
                    placement: "right",
                    children: t => {
                        var i;
                        return (0, r.jsx)(a(590422).Q, {
                            style: { ...a(132261).DX.baseSidebarItem,
                                ...m.sidebarItem,
                                ...g && a(132261).DX.currentSelectedSidebarItem
                            },
                            onClick: f,
                            hoveredStyle: null == (i = e.styles) ? void 0 : i.buttonHoveredStyle,
                            ...t,
                            disabled: S,
                            disabledFeedback: S,
                            children: (0, r.jsx)(a(380559).u, {
                                left: (0, r.jsx)(a(16275).I, {
                                    icon: a(792492).P.inbox,
                                    colorVariant: "secondary",
                                    size: "lg"
                                }),
                                right: b ? (0, r.jsx)(a(579762).f, {
                                    children: v
                                }, l) : v,
                                children: o.formatMessage(a(792492).D.inbox)
                            })
                        })
                    }
                })
            }
            let s = (0, a(109939).YK)({
                tooltip: {
                    id: "sidebar.inbox.tooltip",
                    defaultMessage: "Review notifications & updates"
                },
                offlineTooltip: {
                    id: "sidebar.inbox.offlineTooltip",
                    defaultMessage: "Unavailable while offline"
                }
            })
        },
        775451: (e, t, a) => {
            a.d(t, {
                W: () => n
            }), a(296540);
            var i = a(474848);
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
                n = (0, a(104509).wt)("pencilAndOutline", r, "default")
        },
        792492: (e, t, a) => {
            a.d(t, {
                D: () => i,
                P: () => r
            });
            let i = (0, a(109939).YK)({
                    agents: {
                        id: "sidebar.agents.button",
                        defaultMessage: "Agents"
                    },
                    notionAi: {
                        id: "sidebar.notionAi.button",
                        defaultMessage: "Notion AI"
                    },
                    inbox: {
                        id: "sidebar.inbox.button",
                        defaultMessage: "Inbox"
                    },
                    messages: {
                        id: "sidebar.messages.button",
                        defaultMessage: "Messages"
                    },
                    feed: {
                        id: "sidebarFeedButton.label",
                        defaultMessage: "Feed"
                    },
                    meetings: {
                        id: "sidebar.meetings.button",
                        defaultMessage: "Meetings"
                    },
                    tasks: {
                        id: "sidebar.tasks.button",
                        defaultMessage: "My Tasks"
                    },
                    library: {
                        id: "sidebar.library.button",
                        defaultMessage: "Library"
                    },
                    workers: {
                        id: "sidebar.workers.button",
                        defaultMessage: "Workers"
                    },
                    help: {
                        id: "sidebar.appSwitcher.help.caption",
                        defaultMessage: "Help"
                    },
                    trial: {
                        id: "sidebar.trial.button",
                        defaultMessage: "Trial Home"
                    }
                }),
                r = {
                    inbox: a(789701).y,
                    feed: a(128382).N,
                    library: a(360610).H,
                    workers: a(85071).integrationIcon,
                    present: a(398126).presentIcon
                }
        },
        812591: (e, t, a) => {
            a.d(t, {
                X: () => r
            });
            let i = {
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
                    oracleThreadConfig: i
                })
            }
        },
        828948: (e, t, a) => {
            a.r(t), a.d(t, {
                PostOnboardingAgentCallout: () => s
            });
            var i = a(296540),
                r = a(474848);
            let n = {
                    wrapper: {
                        overflow: "hidden",
                        flexShrink: 0
                    },
                    container: {
                        marginTop: 8,
                        marginBottom: 8,
                        marginInlineStart: a(132261).bG,
                        marginInlineEnd: a(132261).bG,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingInline: 16,
                        backgroundColor: a(632079).Tj.background.secondary,
                        borderRadius: 12,
                        cursor: "pointer",
                        display: "flex",
                        flexDirection: "column",
                        gap: 20,
                        boxShadow: a(632079).Tj.shadow.outline.md
                    }
                },
                o = (0, a(109939).YK)({
                    dismiss: {
                        id: "sidebar.postOnboardingAgentCallout.dismiss",
                        defaultMessage: "Dismiss"
                    }
                });

            function s() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(109939).tz)(),
                    s = (0, a(648188).W)(),
                    l = (0, i.useRef)(!1),
                    d = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!(null != e && e.isReady())) return;
                        let t = e.getSettings(),
                            i = null == t ? void 0 : t.post_onboarding_agent_config;
                        if (!i || (0, a(596244).B)(i)) return null == i ? void 0 : i.thread_id
                    }, []);
                (0, i.useEffect)(() => {
                    s && d && !l.current && (l.current = !0, a(305721).trackPostOnboardingAgentCalloutImpression({
                        threadId: d
                    }))
                }, [s, d]);
                let c = (0, a(682985).K8)(() => () => {
                        if (!d) return;
                        a(305721).trackPostOnboardingAgentCalloutClicked({
                            threadId: d
                        });
                        let t = (0, a(73233).getOnboardingAgentVariant)(),
                            i = a(218744).default.getEligibleGroup({
                                experimentId: "uxr_debug_onboarding_agent",
                                disableExposureLogging: !0
                            });
                        if ((0, a(565719).w)(t) || (0, a(565719).w)(i)) {
                            var r;
                            let t = null == (r = a(728372).AppStoreSidebarSpaceViewStore.state) || null == (r = r.getSettings()) || null == (r = r.getting_started_page_ids) ? void 0 : r[0];
                            if (t) {
                                let i = new(a(970831)).B(e, {
                                    table: a(832375).evP,
                                    id: t
                                });
                                if (i.isDefined()) return void(0, a(545586).navigateToBlock)({
                                    environment: e,
                                    store: i,
                                    chatThreadId: d,
                                    pageVisitSource: a(254656).y8.AIChat
                                })
                            }
                        }(0, a(79266).navigate)({
                            environment: e,
                            url: `${a(168962).JZ.chat}?t=${(0,a(4962).Xw)(d)}`
                        })
                    }, [e, d]),
                    u = (0, a(682985).K8)(() => {
                        var e;
                        let t = null == (e = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (e = e.getSettings()) ? void 0 : e.post_onboarding_agent_config;
                        return !!(null == t ? void 0 : t.has_mutated_block)
                    }, []),
                    p = (0, a(682985).K8)(() => {
                        let e = a(728372).AppStoreCurrentUserSettingsStore.state;
                        if (!(null != e && e.isReady())) return 20;
                        let t = e.getSettings(),
                            i = null == t ? void 0 : t.post_onboarding_agent_config;
                        return i && !(0, a(596244).B)(i) ? 20 : null != i && i.has_mutated_block || null != i && i.has_clicked_all_set ? 100 : null != i && i.has_user_responded ? 50 : 20
                    }, []),
                    g = (0, i.useCallback)(t => {
                        t.stopPropagation(), (0, a(675053).setPostOnboardingAgentConfig)({
                            environment: e,
                            config: {
                                has_dismissed_callout: !0
                            }
                        })
                    }, [e]);
                return (0, r.jsx)(a(654979).A, {
                    style: n.wrapper,
                    initial: {
                        opacity: 0,
                        translateY: -10,
                        maxHeight: 0
                    },
                    animate: {
                        opacity: 1,
                        translateY: 0,
                        maxHeight: 200
                    },
                    config: {
                        duration: 300,
                        timingFunction: "ease-out"
                    },
                    visible: s,
                    children: (0, r.jsxs)(a(64960).Ay, {
                        onClick: c,
                        style: n.container,
                        children: [(0, r.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            children: [(0, r.jsx)(a(111010).D, {
                                styleKey: "bodyMedium",
                                colorVariant: "primary",
                                children: (0, r.jsx)(a(109939).sA, {
                                    defaultMessage: "Set up your workspace",
                                    id: "sidebar.postOnboardingAgentCallout.label"
                                })
                            }), u ? (0, r.jsx)(a(374533).A, {
                                icon: a(25094).xMarkSmallIcon,
                                size: "xs",
                                onClick: g,
                                ariaLabel: t.formatMessage(o.dismiss)
                            }) : null]
                        }), (0, r.jsxs)(a(4458).fI, {
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: 8,
                            children: [(0, r.jsx)(a(819197).z, {
                                percentage: p,
                                width: 28,
                                height: 6,
                                filledColor: a(632079).Tj.blue.text.accentPrimary,
                                unfilledColor: a(632079).Tj.blue.text.disabledTranslucent
                            }), (0, r.jsx)(a(458364).x, {
                                variant: "small"
                            })]
                        })]
                    })
                })
            }
        },
        847081: (e, t, a) => {
            a.r(t), a.d(t, {
                UxrDebugOnboardingAgentButton: () => s
            }), a(16280);
            var i = a(296540),
                r = a(474848);
            let n = (0, a(222024).t)(),
                o = {
                    container: {
                        marginTop: 8,
                        marginBottom: 8,
                        marginInlineStart: a(132261).bG,
                        marginInlineEnd: a(132261).bG,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingInline: 12,
                        backgroundColor: a(632079).Tj.background.secondary,
                        border: `1px solid ${a(632079).Tj.border.secondary}`,
                        borderRadius: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 8
                    }
                };

            function s({
                variant: e
            }) {
                let t = (0, a(533992).v3)(),
                    [l, d] = (0, i.useState)(!1),
                    c = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceStore),
                    u = (0, a(682985).O$)(a(728372).AppStoreSidebarSpaceViewStore),
                    p = (0, i.useCallback)(() => {
                        if (c && u && !l) {
                            d(!0);
                            try {
                                (0, a(647164).o)({
                                    environment: t,
                                    featureKey: "uxr_debug_onboarding_agent"
                                }), (0, a(675053).setPostOnboardingAgentConfig)({
                                    environment: t,
                                    config: {
                                        thread_id: void 0,
                                        space_id: void 0,
                                        has_clicked_all_set: void 0,
                                        has_mutated_block: void 0,
                                        has_dismissed_callout: void 0,
                                        has_user_responded: void 0
                                    }
                                });
                                let i = function(e) {
                                    let t, {
                                        environment: i,
                                        spaceStore: r,
                                        spaceViewStore: n
                                    } = e;
                                    if ((0, a(377796).createAndCommit)({
                                            environment: i,
                                            userAction: "uxrDebugOnboardingAgent.createHubPage",
                                            cellTarget: {
                                                spaceWithId: r.id
                                            },
                                            canUndo: !1,
                                            perform: e => {
                                                t = (0, a(964232).IT)({
                                                    environment: i,
                                                    spaceStore: r,
                                                    spaceViewStore: n,
                                                    title: "Getting Started",
                                                    transaction: e,
                                                    parent: "private"
                                                }).id
                                            }
                                        }), !t) throw Error("Failed to create hub page");
                                    return (0, a(380762).$T)(i, n, [t]), t
                                }({
                                    environment: t,
                                    spaceStore: c,
                                    spaceViewStore: u
                                });
                                (0, a(16822).h)({
                                    environment: t,
                                    isExpanded: "v3" !== e,
                                    from: "post_onboarding_agent",
                                    saveDetailsSidebarPreference: !1
                                });
                                let r = a(218744).default.getConfigKey("uxr_debug_onboarding_agent_context", "instructions"),
                                    n = "string" == typeof r && r.length > 0 ? r : "",
                                    o = (0, a(812591).X)({
                                        environment: t,
                                        spaceStore: c,
                                        spaceViewStore: u,
                                        instructions: n,
                                        useOnboardingModule: !0,
                                        debugOverrides: n ? {
                                            dynamicInstructions: {
                                                agentModule: {
                                                    source: "custom",
                                                    customText: n
                                                },
                                                modules: []
                                            }
                                        } : void 0
                                    });
                                if ((0, a(675053).setPostOnboardingAgentConfig)({
                                        environment: t,
                                        config: {
                                            thread_id: o.id,
                                            space_id: c.id
                                        }
                                    }), (0, a(487246).a)(), (0, a(565719).w)(e)) {
                                    let e = new(a(970831)).B(t, {
                                        table: a(832375).evP,
                                        id: i,
                                        spaceId: c.id
                                    });
                                    (0, a(545586).navigateToBlock)({
                                        environment: t,
                                        store: e,
                                        chatThreadId: o.id,
                                        pageVisitSource: a(254656).y8.AIChat
                                    });
                                    return
                                }(0, a(79266).navigate)({
                                    environment: t,
                                    url: `${a(168962).JZ.chat}?t=${(0,a(4962).Xw)(o.id)}`
                                })
                            } catch (e) {
                                n.log({
                                    level: "error",
                                    from: "UxrDebugOnboardingAgentButton",
                                    type: "createThreadFailed",
                                    error: e instanceof Error ? e : void 0
                                })
                            } finally {
                                d(!1)
                            }
                        }
                    }, [t, c, u, e, l]);
                return (0, r.jsx)("div", {
                    style: o.container,
                    children: (0, r.jsx)(a(265779).E, {
                        onClick: p,
                        isLoading: l,
                        size: "sm",
                        children: "Launch Experience"
                    })
                })
            }
        },
        848135: (e, t, a) => {
            a.d(t, {
                B: () => r
            });
            var i = a(296540);

            function r() {
                let e = (0, i.useRef)(null),
                    [t, a] = (0, i.useState)(!1),
                    r = (0, i.useCallback)(() => {
                        let t = e.current;
                        t && a(t.matches(":hover"))
                    }, []);
                return [(0, i.useCallback)(t => {
                    t ? (t.addEventListener("mouseenter", r), t.addEventListener("mouseleave", r), e.current = t, r()) : e.current && (e.current.removeEventListener("mouseenter", r), e.current.removeEventListener("mouseleave", r), e.current = null)
                }, [r]), t, e]
            }
        },
        850563: (e, t, a) => {
            a.d(t, {
                G1: () => s,
                Ll: () => o,
                Pn: () => c,
                TU: () => i().TU,
                Vf: () => r,
                kQ: () => d,
                py: () => i().py,
                yD: () => n
            }), a(410838), a(813451), a(944114), a(898992), a(354520), a(672577), a(803949), a(581454), a(737550);
            var i = () => a(706968);

            function r(e) {
                return "inference" !== e.type && "queue-handoff" !== e.type && "reenqueue-with-delay" !== e.type && "record-map" !== e.type && "patch-start" !== e.type && "patch" !== e.type && "agent-search-extracted-results" !== e.type
            }

            function n(e) {
                return "patch" === e.type || "patch-start" === e.type
            }

            function o(e) {
                return "user-injected" === e.type && void 0 === e.displayMessage
            }

            function s(e) {
                let t;
                return (null == (t = e.find(e => "context" === e.type)) ? void 0 : t.value.surface) === "daily_brief_reminder" && 1 >= e.filter(e => "user" === e.type || "user-injected" === e.type && !o(e)).length
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
                    a = e.findLastIndex(e => "user" === e.type);
                return -1 !== a && (t = a + 1), e.slice(t)
            }
        },
        853160: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleIcon: () => n,
                iconDefinition: () => r
            }), a(296540);
            var i = a(474848);
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
                n = (0, a(104509).wt)("checkmarkCircle", r, "default")
        },
        877163: (e, t, a) => {
            a.d(t, {
                m: () => r
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "4.62 1.77 10.75 15.98",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M11.633 1.812c.263.096.43.354.41.632l-.392 5.51h3.099a.625.625 0 0 1 .506.992l-6.18 8.54a.625.625 0 0 1-1.13-.412l.402-5.5H5.25a.625.625 0 0 1-.507-.99l6.17-8.55a.625.625 0 0 1 .72-.222m-5.161 8.513H9.02a.625.625 0 0 1 .623.67l-.29 3.976 4.173-5.766H10.98a.625.625 0 0 1-.623-.67l.284-3.987z"
                    })
                },
                r = (0, a(104509).wt)("lightning", i, "default")
        },
        895105: (e, t, a) => {
            a.r(t), a.d(t, {
                filterIcon: () => r,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 4.87 15.25 10.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M3 4.875a.625.625 0 1 0 0 1.25h14a.625.625 0 1 0 0-1.25zm2.125 5.742h9.75a.625.625 0 1 0 0-1.25h-9.75a.625.625 0 1 0 0 1.25m1.5 3.883c0-.345.28-.625.625-.625h5.5a.625.625 0 1 1 0 1.25h-5.5a.625.625 0 0 1-.625-.625"
                    })
                },
                r = (0, a(104509).wt)("filter", i, "default")
        },
        936418: (e, t, a) => {
            a.r(t), a.d(t, {
                SidebarAiButton: () => c,
                getTooltipDescriptionForAi: () => u,
                sidebarAiButtonMessages: () => p
            });
            var i = a(296540),
                r = a(474848);
            let n = {
                button: { ...a(710426).MR.button,
                    height: 24,
                    width: 24,
                    margin: 0
                }
            };

            function o(e) {
                let {
                    sidebarItemHoverStore: t,
                    sidebarTooltipStore: o
                } = e, s = (0, a(533992).v3)(), l = (0, a(109939).tz)(), d = (0, a(682985).O$)(t), c = d.isSidebarItemHovered || d.isSidebarItemFocused, u = (0, a(960253).I)(() => ({
                    iconContainer: {
                        opacity: +!!c,
                        padding: 0,
                        margin: 0,
                        transition: "opacity 0.1s ease-in-out"
                    }
                }), [c]);
                (0, a(637030).X)(() => {
                    t.setState({ ...t.state,
                        isActionButtonHovered: !1,
                        isActionButtonFocused: !1
                    })
                });
                let p = (0, i.useCallback)(() => {
                        o.reset(), (0, a(477810).ZT)({
                            environment: s,
                            contentType: "assistant"
                        })
                    }, [s, o]),
                    [g, f] = (0, a(848135).B)();
                (0, i.useEffect)(() => {
                    t.setState({ ...t.state,
                        isActionButtonHovered: f
                    })
                }, [f, t]);
                let m = (0, i.useCallback)(() => {
                        t.setState({ ...t.state,
                            isActionButtonFocused: !0
                        })
                    }, [t]),
                    h = (0, i.useCallback)(() => {
                        t.setState({ ...t.state,
                            isActionButtonFocused: !1
                        })
                    }, [t]);
                if ((0, a(473182).x9)()) return null;
                let y = l.formatMessage({
                    id: "aiSidebarItem.askNotionAi.history.tooltip",
                    defaultMessage: "Chat history"
                });
                return (0, r.jsx)("div", {
                    ref: g,
                    style: u.iconContainer,
                    children: (0, r.jsx)(a(374533).A, {
                        onFocus: m,
                        onBlur: h,
                        icon: {
                            icon: a(772683).clockIcon,
                            size: "default"
                        },
                        style: n.button,
                        ariaLabel: y,
                        onClick: p
                    })
                })
            }
            let s = {
                    position: "relative"
                },
                l = {
                    display: "flex",
                    flexDirection: "row",
                    marginInlineEnd: -4,
                    justifyContent: "center",
                    gap: 3
                },
                d = {
                    position: "relative"
                };

            function c(e) {
                let t = (0, a(533992).v3)(),
                    n = (0, a(109939).tz)(),
                    c = (0, a(682985).K8)(() => "ai" === t.RouterStore.state.route.name, [t]),
                    g = !(0, a(682985).O$)(a(205885).e),
                    {
                        sidebarTooltipStore: f,
                        sidebarItemHoverStore: m,
                        handleFocus: h,
                        handleBlur: y,
                        handleMouseMove: v,
                        handleMouseLeave: b
                    } = (0, a(783242).W)(),
                    S = (0, a(960253).I)(() => ({
                        linkBoxStyle: { ...a(132261).DX.baseSidebarItem,
                            ...c && a(132261).DX.currentSelectedSidebarItem
                        }
                    }), [c]),
                    {
                        isActionButtonFocused: x,
                        isActionButtonHovered: _,
                        isSidebarItemFocused: I,
                        isSidebarItemHovered: w
                    } = (0, a(682985).O$)(m),
                    A = (w || I) && !g,
                    C = (0, a(993077).U2)(),
                    T = (0, a(682985).K8)(() => u(C), [C]),
                    M = (0, i.useCallback)(() => g ? (0, r.jsx)("div", {
                        children: n.formatMessage(p.offlineTooltip)
                    }) : _ || x ? (0, r.jsx)(a(109939).sA, { ...p.chatHistoryTooltip
                    }) : (0, r.jsx)("div", {
                        children: n.formatMessage(T)
                    }), [n, x, _, T, g]);
                return (0, r.jsx)(a(51831).m, {
                    store: f,
                    content: M,
                    originGap: 6,
                    placement: "right",
                    children: t => {
                        var i;
                        return (0, r.jsx)(a(590422).Q, {
                            style: S.linkBoxStyle,
                            href: "/ai",
                            hoveredStyle: null == (i = e.styles) ? void 0 : i.buttonHoveredStyle,
                            ...t,
                            onFocus: e => {
                                var a;
                                null == (a = t.onFocus) || a.call(t, e), h(e)
                            },
                            onBlur: e => {
                                var a;
                                null == (a = t.onBlur) || a.call(t, e), y()
                            },
                            testId: "sidebar-ai-button",
                            disabled: g,
                            disabledFeedback: g,
                            children: (0, r.jsx)(a(380559).u, {
                                left: (0, r.jsx)("div", {
                                    style: s,
                                    children: (0, r.jsx)(a(16275).I, {
                                        icon: a(273344).aiFaceIcon,
                                        colorVariant: "secondary",
                                        size: "lg"
                                    })
                                }),
                                right: A && (0, r.jsx)("div", {
                                    style: l,
                                    children: (0, r.jsx)(o, {
                                        sidebarItemHoverStore: m,
                                        sidebarTooltipStore: f
                                    })
                                }),
                                onMouseMove: v,
                                onMouseLeave: b,
                                children: (0, r.jsx)(a(4458).fI, {
                                    gap: 4,
                                    alignItems: "center",
                                    className: "autolayout-fill-width",
                                    style: d,
                                    children: n.formatMessage(a(792492).D.notionAi)
                                })
                            })
                        })
                    }
                })
            }

            function u(e) {
                let t = (0, a(56788).$)(),
                    i = (0, a(729052).Wf)(null == e ? void 0 : e.getMembershipType());
                return t && i ? p.tooltipAiAndAgents : p.tooltipAiOnly
            }
            let p = (0, a(109939).YK)({
                tooltipAiAndAgents: {
                    id: "sidebar.agents.tooltipAiAndAgents",
                    defaultMessage: "Work with AI and manage your agents"
                },
                tooltipAiOnly: {
                    id: "sidebar.agents.tooltipAiOnly",
                    defaultMessage: "Ask, search & create with AI"
                },
                offlineTooltip: {
                    id: "sidebar.ai.offlineTooltip",
                    defaultMessage: "Unavailable while offline"
                },
                chatHistoryTooltip: {
                    id: "aiSidebarItem.askNotionAi.history.tooltip",
                    defaultMessage: "Chat history"
                }
            })
        },
        937776: (e, t, a) => {
            a.d(t, {
                B: () => n
            }), a(296540);
            var i = a(474848);
            let r = {
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
                n = (0, a(104509).wt)("archiveBox", r, "default")
        },
        939679: (e, t, a) => {
            a.d(t, {
                p: () => i
            }), a(16280), a(944114);

            function i(e) {
                let t, {
                    environment: i,
                    spaceStore: r,
                    spaceViewStore: n,
                    oracleThreadType: o,
                    oracleThreadConfig: s,
                    instructions: l,
                    useOnboardingModule: d,
                    suppressNameInGreeting: c = !1,
                    model: u,
                    searchScope: p,
                    debugOverrides: g
                } = e;
                if (u) {
                    if (!(0, a(426048).R5)(u)) throw Error(`Model "${u}" is not a valid agent model. Please select a model that supports agent workflows.`);
                    t = u
                }
                let f = a(728372).AppStoreCurrentUserStore.state;
                if (!f) throw Error("User store is not available. Please wait for the app to fully load.");
                let m = (null == g ? void 0 : g.dynamicInstructions) !== void 0,
                    h = (0, a(922900).getWorkflowAgentConfig)({
                        environment: i,
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
                let y = [],
                    v = a(962299).A.getIntl(),
                    b = {
                        id: (0, a(295447).Z1)({
                            environment: i,
                            table: a(832375).mSw,
                            spaceId: r.id
                        }),
                        type: "title",
                        value: v.formatMessage(s.titleMessage)
                    };
                if (y.push(b), !d && !m) {
                    let e = (0, a(674880).fd)({
                        environment: i,
                        spaceStore: r,
                        agentMessageKey: "post_onboarding_tips",
                        instructions: (0, a(247438).x9d)(l)
                    });
                    y.push(e)
                }
                let S = (0, a(674880).uP)({
                    environment: i,
                    spaceStore: r,
                    userStore: f,
                    displayMessage: void 0,
                    actualMessage: (0, a(247438).x9d)(d || m ? function(e) {
                        let {
                            triggerPurpose: t,
                            suppressNameInGreeting: i
                        } = e, r = `${t} The user's locale is "${a(849917).locale}". Respond in the user's language, not in English just because this prompt is in English.`;
                        return i ? `${r} The user has not set a display name yet, do not address them by name.` : r
                    }({
                        triggerPurpose: s.triggerPurpose,
                        suppressNameInGreeting: c
                    }) : "Send the proactive message described in the system instructions.")
                });
                y.push(S);
                let x = (0, a(674880).Xd)({
                        environment: i,
                        inferenceContext: {
                            userStore: f,
                            spaceStore: r,
                            spaceViewStore: n,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: void 0
                        },
                        addSteps: y,
                        surface: s.surface,
                        config: h
                    }),
                    _ = (0, a(225900).N)({
                        environment: i,
                        spaceStore: r,
                        transcript: x,
                        workflowId: void 0,
                        createdSource: s.createdSource,
                        parentPointer: void 0,
                        debugOverrides: g
                    });
                return (0, a(540328).KY)(_), a(218744).default.checkGate({
                    gateName: "onboarding_oracle_thread"
                }) && function(e) {
                    var t;
                    let {
                        environment: i,
                        oracleThreadType: r,
                        threadId: n
                    } = e, o = a(728372).AppStoreSidebarSpaceViewStore.state;
                    if (!o) return;
                    let s = (null == (t = o.getSettings()) ? void 0 : t.oracle_thread_configs) ? ? {},
                        l = o.getSpaceId();
                    a(377796).createAndCommit({
                        environment: i,
                        cellTarget: l ? {
                            spaceWithId: l
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
                                        oracle_thread_configs: { ...s,
                                            [r]: {
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
                    environment: i,
                    oracleThreadType: o,
                    threadId: _.id
                }), _
            }
        }
    }
]);