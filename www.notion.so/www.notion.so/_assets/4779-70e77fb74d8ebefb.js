"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [4779, 37342], {
        57168: (e, t, a) => {
            a.r(t), a.d(t, {
                ClientAIChatStore: () => d,
                UserChatPreferenceLocalStorageStore: () => l,
                defaultClientAIChatStore: () => g,
                defaultLegacyThreadConfig: () => o
            });
            var i = () => a(546605);
            a(898992), a(354520), a(430670), a(803949);
            let s = "confirmed_safe_by_user",
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
            class n extends i().Store {
                getInitialState() {
                    return r
                }
                resetState() {
                    var e;
                    null == (e = this.state.abortController) || e.abort(), this.setState(r)
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
                        results: s
                    } = e;
                    this.setState({ ...this.state,
                        agentSearchResultsByToolResultStepId: { ...this.state.agentSearchResultsByToolResultStepId,
                            [i]: {
                                agentStepId: t,
                                toolCallId: a,
                                results: s
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
                    let s = i.stagedInferenceTranscriptSteps.filter(e => "attachment" !== e.type && "computer-file" !== e.type || e.fileUrl !== a);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...i,
                                stagedInferenceTranscriptSteps: s
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
                    let s = t.stagedInferenceTranscriptSteps.filter(e => "computer-file" !== e.type);
                    this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...t,
                                stagedInferenceTranscriptSteps: s
                            }
                        }
                    })
                }
                markStagedAttachmentInferenceTranscriptStepAsSafe(e) {
                    var t, a;
                    let {
                        fileUrl: i
                    } = e, r = null == (t = this.state.stagedData) ? void 0 : t.attachmentStagedData;
                    if (!r) return;
                    let n = r.stagedInferenceTranscriptSteps.findIndex(e => "attachment" === e.type && e.fileUrl === i);
                    if (n < 0) return;
                    let l = r.stagedInferenceTranscriptSteps[n];
                    if ("attachment" !== l.type) return;
                    let o = null != (a = l.metadata) && a.guardrail ? { ...l.metadata.guardrail,
                            attachmentRisk: s
                        } : {
                            attachmentRisk: s
                        },
                        d = { ...l,
                            metadata: { ...l.metadata ? ? {},
                                guardrail : o
                            }
                        },
                        g = [...r.stagedInferenceTranscriptSteps];
                    g[n] = d, this.setState({ ...this.state,
                        stagedData: { ...this.state.stagedData,
                            attachmentStagedData: { ...r,
                                stagedInferenceTranscriptSteps: g
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
                o = {
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
                        configForNewTranscripts: o,
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
                        let t = new n;
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
            let g = new d;
            (0, a(202146).exposeDebugValue)("clientAiChatStore", g)
        },
        93042: (e, t, a) => {
            a.r(t), a.d(t, {
                checkmarkCircleFillIcon: () => s,
                iconDefinition: () => i
            }), a(296540);
            let i = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.37 2.37 15.26 15.25",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.375 10a7.625 7.625 0 1 1 15.25 0 7.625 7.625 0 0 1-15.25 0m10.5-2.018a.625.625 0 1 0-1.071-.644L9.25 11.595 7.815 9.92a.625.625 0 0 0-.95.813l2 2.334a.625.625 0 0 0 1.01-.085z"
                    })
                },
                s = (0, a(104509).wt)("checkmarkCircleFill", i, "fill")
        },
        177861: (e, t, a) => {
            function i(e) {
                let t = 1;
                return e.replace(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g, (e, a, i, s) => {
                    let r = encodeURIComponent(a),
                        n = encodeURIComponent(i),
                        l = encodeURIComponent(s),
                        o = encodeURIComponent(",");
                    return `[**[${t++}]**](#citation:${r}${o}${n}${o}${l})`
                })
            }

            function s(e, t) {
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
                    for (let s of i.claims) t.has(s.id) || a.stepCitations[e].claims.push(s);
                    let s = new Set(a.stepCitations[e].artifacts.map(e => e.id));
                    for (let t of i.artifacts) s.has(t.id) || a.stepCitations[e].artifacts.push(t)
                }
                return a
            }

            function r(e) {
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

            function n(e, t) {
                try {
                    let l = function(e) {
                            let t = [];
                            for (let a of e.matchAll(/\[(step-[^\[\]]*?),(artifact|claim),(\d+)\]/g)) {
                                let [, e, i, s] = a;
                                ("claim" === i || "artifact" === i) && t.push({
                                    planKey: e,
                                    citationType: i,
                                    resourceId: s
                                })
                            }
                            return t
                        }(e),
                        o = {},
                        d = new Set;
                    for (let e of l) {
                        let {
                            planKey: l,
                            citationType: g,
                            resourceId: c
                        } = e;
                        try {
                            var a, i, s, r, n;
                            let e;
                            if (!l || !g || !c) continue;
                            let u = t.stepCitations[l];
                            if (!u) continue;
                            if ("claim" === g) {
                                let t = null == (i = u.claims) ? void 0 : i.find(e => e.id === c);
                                null != t && null != (s = t.supportingArtifactIds) && s[0] && (e = null == (r = u.artifacts) ? void 0 : r.find(e => e.id === t.supportingArtifactIds[0]))
                            } else "artifact" === g && (e = null == (n = u.artifacts) ? void 0 : n.find(e => e.id === c));
                            if (null != (a = e) && a.citationInfo) {
                                let t = "unknown";
                                "notion" === e.citationInfo.citationType ? (t = "notion", d.add(e.citationInfo.pageId)) : "universal_search" === e.citationInfo.citationType && (t = e.citationInfo.target || "unknown"), o[t] = (o[t] || 0) + 1
                            }
                        } catch (e) {
                            continue
                        }
                    }
                    let g = Object.values(o).reduce((e, t) => e + t, 0);
                    return {
                        citationsBySource: o,
                        numCitationsShown: g,
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
                Mi: () => s,
                VJ: () => l,
                W6: () => r,
                y5: () => i,
                ye: () => n
            }), a(410838), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454), a(908872), a(737550)
        },
        330942: (e, t, a) => {
            a.d(t, {
                Mt: () => g,
                RM: () => o,
                dC: () => r,
                f_: () => i().f_,
                ie: () => l,
                q1: () => s,
                sQ: () => c,
                uF: () => d
            }), a(813451), a(944114), a(898992), a(354520), a(737550);
            var i = () => a(706968);

            function s(e) {
                return e.some(e => "config" === e.type && "workflow" === e.value.type)
            }

            function r(e) {
                return e.some(e => "config" === e.type && "researcher" === e.value.type)
            }
            let n = /<lang\s+.*?>\s*/g;

            function l(e) {
                if ("string" == typeof e.value) return { ...e,
                    value: e.value.replace(n, "")
                };
                if (Array.isArray(e.value)) {
                    let t = e.value.findIndex(e => "text" === e.type);
                    if (-1 === t) return e;
                    let a = "";
                    for (let i of e.value.slice(t))
                        if ("text" === i.type) a += i.content;
                        else break;
                    if (!n.exec(a)) return e;
                    let i = "",
                        s = t;
                    for (; s < e.value.length; s++) {
                        let t = e.value[s];
                        if ("text" === t.type) i += t.content;
                        else break
                    }
                    let r = [...e.value.slice(0, t), {
                        type: "text",
                        content: i.replace(n, "")
                    }, ...e.value.slice(s)];
                    return "text" === r[0].type && 0 === r[0].content.length && r.shift(), { ...e,
                        value: r
                    }
                }
                return e
            }

            function o(e, t) {
                let i = {};
                for (let t of e) "registered-tool-grouping" === t.type && (i[t.toolCallId] = t);
                let s = [...e];
                if ("agent-transcript-summary" === t.type) {
                    let e = s.findLastIndex(e => "agent-transcript-summary" === e.type && e.lastStepId === t.lastStepId);
                    if (-1 !== e) {
                        let a = s[e];
                        if ("agent-transcript-summary" === a.type) {
                            let i = a.summary.trim().length > 0,
                                r = t.summary.trim().length > 0;
                            return i && !r || (s[e] = t), s
                        }
                    }
                    return s.push({ ...t
                    }), s
                }
                if ("user" === t.type || "user-injected" === t.type || "error" === t.type || "premium-feature-unavailable" === t.type || "context" === t.type || "title" === t.type || "retry" === t.type || "search-observation" === t.type || "researcher-text-observation" === t.type || "debug-inference" === t.type || "wait" === t.type || "agent-search-query-generation" === t.type || "fast-researcher-plan" === t.type || "fast-researcher-search-results" === t.type || "memory-agent" === t.type || "summarize-transcript" === t.type || "summarize-transcript-record-map" === t.type || "summarize-transcript-error" === t.type || "record-pointers-updated" === t.type || (0, a(548161).P0)(t) || "researcher-agent-group" === t.type || "agent-debug-error" === t.type || "eval-result" === t.type || "attachment" === t.type || "activate-transcript-compaction" === t.type || "pi-compaction" === t.type || "agent-records-updated" === t.type || "agent-turn-start" === t.type || "agent-record-map" === t.type || "user-specified-context" === t.type || "mention" === t.type || "agent-integration" === t.type || "aiBlockResponse" === t.type || "system-notification" === t.type || "agent-trigger" === t.type || "agent-prebuilt-prompt" === t.type || "agent-instruction-state" === t.type || "agent-route-trigger" === t.type || "workflow-effect-calling" === t.type || "workflow-effect-called" === t.type || "workflow-effect-error" === t.type) s.push({ ...t
                });
                else if ("agent-turn-full-record-map" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "agent-turn-full-record-map" === s[e].type) {
                        let a = s[e];
                        s[e] = { ...a,
                            agentRecordMap: t.agentRecordMap,
                            threadRecordMap: t.threadRecordMap,
                            recordVersions: t.recordVersions
                        }
                    } else s.push({ ...t
                    })
                } else if ("search" === t.type) s = [...s.filter(e => e.id !== t.id), { ...t
                }];
                else if ("agent-inference" === t.type || "agent-tool-result" === t.type || "config" === t.type || "updated-config" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id); - 1 !== e ? s[e] = t : s.push({ ...t
                    })
                } else if ("markdown-chat" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "markdown-chat" === s[e].type) {
                        let a = s[e];
                        s[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else s.push({ ...t
                    })
                } else if ("search-chat" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "search-chat" === s[e].type) {
                        let a = s[e];
                        s[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else s.push({ ...t
                    })
                } else if ("fast-researcher-chat" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "fast-researcher-chat" === s[e].type) {
                        let a = s[e];
                        s[e] = { ...a,
                            value: `${a.value}${t.value}`
                        }
                    } else s.push({ ...t
                    })
                } else if ("setup" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id); - 1 !== e && "setup" === s[e].type ? s[e] = t : s.push({ ...t
                    })
                } else if ("researcher-report" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id);
                    if (-1 !== e && "researcher-report" === s[e].type) {
                        let i = s[e];
                        s[e] = { ...i,
                            value: `${i.value}${t.value}`,
                            citationInfo: (0, a(177861).Mi)(i.citationInfo, t.citationInfo)
                        }
                    } else s.push({ ...t
                    })
                } else if ("researcher-agent" === t.type) {
                    let e = s.findIndex(e => e.id === t.id); - 1 !== e && "researcher-agent" === s[e].type ? s[e] = { ...s[e],
                        value: Object.assign(s[e].value, t.value),
                        updatedAt: t.updatedAt
                    } : s.push({ ...t
                    })
                } else if ("researcher-next-steps" === t.type) {
                    let e = s.findIndex(e => e.id === t.id); - 1 !== e ? s[e] = { ...t
                    } : s.push({ ...t
                    })
                } else if ("registered-tool-call" === t.type || "registered-tool-output" === t.type || "registered-tool-error" === t.type) {
                    let e = i[t.toolCallId];
                    e || (e = {
                        id: t.toolCallId,
                        type: "registered-tool-grouping",
                        toolName: t.toolName,
                        toolCallId: t.toolCallId,
                        steps: []
                    }, i[t.toolCallId] = e, s.push(e));
                    let a = { ...t
                    };
                    e.steps.push(a)
                } else if ("registered-tool-grouping" === t.type) i[t.toolCallId] || (i[t.toolCallId] = t, s.push({ ...t
                }));
                else if ("setup-operations" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id),
                        a = s[e];
                    (null == a ? void 0 : a.type) === t.type ? s[e] = { ...a,
                        operations: [...a.operations, ...t.operations]
                    } : s.push({ ...t
                    })
                } else if ("generate-formula" === t.type) {
                    let e = s.findLastIndex(e => e.id === t.id); - 1 !== e && "generate-formula" === s[e].type ? s[e] = { ...s[e],
                        value: t.value
                    } : s.push({ ...t
                    })
                } else "database-agent-setup" === t.type || "agent-message" === t.type || "proactive-message" === t.type || "survey" === t.type || "computer-file" === t.type || "plan-mode" === t.type ? s.push({ ...t
                }) : (0, a(722371).HB)(t);
                return s
            }
            let d = "inferenceTranscript";

            function g(e) {
                return "object" == typeof e && null !== e && "transcript" in e
            }

            function c(e) {
                if (e && ("search" === e.type || "workflow" === e.type)) return e.searchSessionId
            }
        },
        346596: (e, t, a) => {
            a.d(t, {
                L: () => s,
                k: () => r
            });
            var i = a(296540);

            function s(e) {
                let {
                    workflowIdFromRoute: t,
                    spaceStore: s
                } = (0, a(682985).K8)(() => ({
                    workflowIdFromRoute: "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    spaceStore: a(728372).AppStoreSidebarSpaceStore.state
                }), [e]);
                return (0, i.useMemo)(() => {
                    if (t && s) return a(360851).N.createChildStore(s, {
                        table: a(43296).C,
                        id: t,
                        spaceId: s.id
                    })
                }, [t, s])
            }

            function r(e) {
                let t = "agent" === e.RouterStore.state.route.name ? e.RouterStore.state.route.workflowId : void 0,
                    i = a(728372).AppStoreSidebarSpaceStore.state;
                if (t && i) return a(360851).N.createChildStore(i, {
                    table: a(43296).C,
                    id: t,
                    spaceId: i.id
                })
            }
        },
        496722: (e, t, a) => {
            a.d(t, {
                a: () => i
            });

            function i() {
                let e = a(728372).AppStoreSidebarSpaceStore.state;
                return e ? e.id : void 0
            }
        },
        601587: (e, t, a) => {
            function i(e, t) {
                let i = n(t);
                return (0, a(722371).objectKeys)(i).filter(t => e.includes(t)).sort((e, a) => i[e].languageNameInCurrentLanguage.localeCompare(i[a].languageNameInCurrentLanguage, t.locale))
            }
            a.d(t, {
                O8: () => i,
                Vn: () => n,
                W$: () => l,
                tr: () => s,
                vC: () => r
            }), a(898992), a(354520);
            let s = (0, a(109939).YK)({
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
                r = {
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

            function n(e) {
                let t = {};
                for (let i of (0, a(722371).objectKeys)(r)) t[i] = {
                    languageNameInThatLanguage: r[i],
                    languageNameInCurrentLanguage: e.formatMessage(s[i])
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
        648880: (e, t, a) => {
            a.d(t, {
                L: () => i
            });
            let i = (0, a(109939).YK)({
                control: {
                    id: "adoptionMarketplaceSidebarSurface.control",
                    defaultMessage: "Marketplace"
                },
                v1: {
                    id: "adoptionMarketplaceSidebarSurface.v1",
                    defaultMessage: "Resources"
                },
                v2: {
                    id: "adoptionMarketplaceSidebarSurface.v2",
                    defaultMessage: "Explore"
                }
            })
        },
        729849: (e, t, a) => {
            a.d(t, {
                Gi: () => n,
                yB: () => r
            }), a(898992), a(354520), a(803949);
            var i = () => a(546605);

            function s() {
                return a(218744).default.getConfigKey("agent_max_attachments", "value")
            }

            function r() {
                return (0, a(682985).K8)(() => s(), [])
            }
            class n extends i().Store {
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
                        contentType: s
                    } = e;
                    this.setValueForUploadingFile(t, {
                        type: "uploading",
                        fileName: a,
                        progress: i,
                        contentType: s
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
                    return this.isUploadInProgress() || this.state.originalFileUrlToSuccessfullyUploadedFiles.size > s()
                }
            }
        },
        775451: (e, t, a) => {
            a.d(t, {
                W: () => r
            }), a(296540);
            var i = a(474848);
            let s = {
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
                r = (0, a(104509).wt)("pencilAndOutline", s, "default")
        }
    }
]);