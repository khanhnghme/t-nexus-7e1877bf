"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [5721], {
        68118: (e, t, a) => {
            a.d(t, {
                Ps: () => i,
                xj: () => l
            }), a(898992), a(354520), a(581454);
            var n = () => a(418672),
                s = () => a(932956),
                r = () => a(313168);

            function i(e) {
                let {
                    transcript: t,
                    domainBaseUrl: i
                } = e, o = {};
                return t.map(e => {
                    var t;
                    if ((null == e ? void 0 : e.type) !== "agent-tool-result" || !((0, a(426048).gY)(e, "search") || (0, a(426048).gY)(e, "queryCalendar") || (0, a(426048).gY)(e, "queryMail"))) {
                        (null == e ? void 0 : e.type) === "agent-tool-result" && (0, a(426048).gY)(e, "callFunction") && function(e) {
                            var t, a, n;
                            let {
                                step: s,
                                searchContext: r
                            } = e, i = null == (t = s.input) ? void 0 : t.function;
                            if ("connections.search.search" !== i && "connections.search.unifiedSearch" !== i && "search.unifiedSearch" !== i) return;
                            if ("connections.search.unifiedSearch" === i || "search.unifiedSearch" === i) {
                                let e = c(null == (n = s.result) ? void 0 : n.output);
                                if (e) {
                                    for (let t of e.results) {
                                        let e = t.url;
                                        if (!e) continue;
                                        let a = u(t);
                                        a && (r[e] = a)
                                    }
                                    return
                                }
                            }
                            let o = d(null == (a = s.result) ? void 0 : a.output);
                            if (o)
                                for (let e of o.results) {
                                    let t = e.url;
                                    if (!t) continue;
                                    let a = _(e);
                                    a && (r[t] = a)
                                }
                        }({
                            step: e,
                            searchContext: o
                        });
                        return
                    }
                    for (let d of [...(null == (t = e.result) ? void 0 : t.extractedResults) ? ? [], ...(0, a(426048).gY)(e, "search") ? (0, a(596041).S)(e.result ? ? {}) : []]) {
                        let e, t;
                        e = "notion" === d.searchSourceType ? {
                            type: "block",
                            blockId: (0, n().ew)(d.id)
                        } : (0, s().f9)(d.id);
                        try {
                            t = (0, r().uf)({
                                type: d.searchSourceType,
                                baseUrl: i,
                                citation: e
                            })
                        } catch (e) {}
                        t && (o[t] = d)
                    }
                }), o
            }

            function o(e) {
                if (e) {
                    if ("string" == typeof e) try {
                        return JSON.parse(e)
                    } catch {
                        return
                    }
                    return e
                }
            }

            function d(e) {
                let t = o(e);
                if (!t) return;
                let n = (0, a(358519).Qq)(a(166919).B_, t);
                if (n) return n
            }

            function l(e) {
                let t = c(e);
                if (t) return t.results.map(u).filter(a(722371).O9);
                let n = d(e);
                if (n) return n.results.map(_).filter(a(722371).O9)
            }

            function c(e) {
                let t = o(e);
                if (!t) return;
                let n = (0, a(358519).Qq)(a(166919).Y0, t);
                if (n) return n
            }

            function u(e) {
                if ((0, a(281708).SC)(e.type)) {
                    let t = { ...e,
                        type: e.type,
                        path: e.path ? ? "",
                        lastEdited: e.lastEdited ? ? ""
                    };
                    return (0, a(224587).v)(e.type).buildAgentSearchResultFromSearchEffectResult(t)
                }
                switch (e.type) {
                    case "page":
                    case "block":
                    case "properties":
                        return {
                            searchSourceType: "notion",
                            id: e.id,
                            isUser: !1
                        };
                    case "webpage":
                        return {
                            searchSourceType: "webpage",
                            id: e.id,
                            title: e.title,
                            lastEdited: e.lastEdited ? ? ""
                        };
                    case "helpdoc":
                        return {
                            searchSourceType: "helpdocs",
                            id: e.id,
                            title: e.title,
                            path: e.path ? ? "",
                            lastEdited: e.lastEdited ? ? ""
                        };
                    case "helpdoc-section":
                        return {
                            searchSourceType: "helpdoc-section",
                            id: e.id,
                            title: e.title,
                            path: e.path ? ? "",
                            lastEdited: e.lastEdited ? ? ""
                        };
                    default:
                        (0, a(722371).HB)(e.type)
                }
            }

            function _(e) {
                if ((0, a(281708).SC)(e.type)) {
                    let t = { ...e,
                        type: e.type
                    };
                    return (0, a(224587).v)(e.type).buildAgentSearchResultFromSearchEffectResult(t)
                }
                switch (e.type) {
                    case "page":
                    case "block":
                    case "properties":
                        return {
                            searchSourceType: "notion",
                            id: e.id,
                            isUser: !1
                        };
                    case "webpage":
                        return {
                            searchSourceType: "webpage",
                            id: e.id,
                            title: e.title,
                            lastEdited: e.lastEdited
                        };
                    case "helpdoc":
                        return {
                            searchSourceType: "helpdocs",
                            id: e.id,
                            title: e.title,
                            path: e.path,
                            lastEdited: e.lastEdited
                        };
                    case "helpdoc-section":
                        return {
                            searchSourceType: "helpdoc-section",
                            id: e.id,
                            title: e.title,
                            path: e.path,
                            lastEdited: e.lastEdited
                        };
                    default:
                        (0, a(722371).HB)(e.type)
                }
            }
        },
        71282: (e, t, a) => {
            a.d(t, {
                R: () => r
            }), a(296540);
            var n = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1 0.12 17.94 19.75",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M7.733.203a.626.626 0 0 1 .87.286l2.567 5.583 1.41.777 1.722-2.257a.55.55 0 0 1 .874.668l-1.624 2.125 3.87 2.135c.198.11.322.32.322.547v5.648a.63.63 0 0 1-.323.547l-6.408 3.535a.63.63 0 0 1-.604 0l-6.407-3.535a.63.63 0 0 1-.323-.547V10.58L1.054 4.534a.625.625 0 0 1 .271-.795zM4.929 15.346l5.232 2.887v-4.307L4.93 11.04zm6.332-1.42v4.307l5.233-2.887v-4.307zM5.519 10.11l5.192 2.864 5.192-2.864-3.117-1.72-1.75 2.295a.55.55 0 0 1-.875-.668l1.652-2.164-1.102-.608zM2.426 4.557l2.042 4.705 5.419-2.99-2.14-4.65zm14.706.177 1.364.314a.55.55 0 1 1-.248 1.071l-1.364-.314a.55.55 0 0 1 .248-1.071"
                        }), (0, n.jsx)("path", {
                            d: "M12.873 1.548a.55.55 0 0 1 .753.192l.684 1.15a.55.55 0 0 1-.946.561l-.683-1.149a.55.55 0 0 1 .192-.754m3.802-.041a.55.55 0 0 1 .889.649l-.871 1.193a.55.55 0 0 1-.89-.649z"
                        })]
                    })
                },
                r = (0, a(104509).wt)("boxOpenSparkle", s, "default")
        },
        104050: (e, t, a) => {
            a.d(t, {
                f: () => r
            }), a(296540);
            var n = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.62 2.62 15.26 15.26",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.387 5.933c.115-.523.861-.523.976 0l.202.918a1.75 1.75 0 0 0 1.334 1.334l.918.202c.523.115.523.861 0 .976l-.918.202a1.75 1.75 0 0 0-1.334 1.334l-.202.918c-.115.523-.861.523-.976 0l-.202-.918a1.75 1.75 0 0 0-1.334-1.334l-.918-.202c-.523-.115-.523-.861 0-.976l.918-.202a1.75 1.75 0 0 0 1.334-1.334z"
                        }), (0, n.jsx)("path", {
                            d: "M8.875 2.625a6.25 6.25 0 1 0 3.955 11.09l3.983 3.982a.625.625 0 1 0 .884-.884l-3.983-3.982a6.25 6.25 0 0 0-4.84-10.205m-5 6.25a5 5 0 1 1 10 0 5 5 0 0 1-10 0"
                        })]
                    })
                },
                r = (0, a(104509).wt)("sparkleMagnifyingGlass", s, "default")
        },
        258024: (e, t, a) => {
            a.d(t, {
                Zl: () => s,
                lH: () => r,
                oV: () => n
            }), a(16280), a(410838), a(944114), a(581454);
            let n = 12e3;

            function s(e) {
                let t = [];
                for (let a of e) ! function(e, t) {
                    let a = e.length - 1,
                        n = e[a];
                    if (!n) return e.push({ ...t
                    });
                    if ("text" === t.type && "text" === n.type) {
                        let s = n.phase,
                            r = t.phase,
                            i = n.outputItemId,
                            o = t.outputItemId;
                        if ((void 0 !== i && void 0 !== o ? i !== o : void 0 !== i || void 0 !== o) || void 0 !== s && void 0 !== r && s !== r) return e.push({ ...t
                        }), e.length;
                        let d = void 0 !== r ? r : s,
                            l = o ? ? i;
                        return e[a] = {
                            type: "text",
                            content: n.content + t.content,
                            ...void 0 !== d ? {
                                phase: d
                            } : {},
                            ...void 0 !== l ? {
                                outputItemId: l
                            } : {}
                        }
                    }
                    if ("thinking" === t.type && "thinking" === n.type && !t.encryptedContent && !n.encryptedContent && !(t.signature && n.signature) && t.modelProvider === n.modelProvider && t.notionModelName === n.notionModelName) return e[a] = {
                        type: "thinking",
                        content: n.content + t.content,
                        id: t.id || n.id,
                        signature: t.signature || n.signature,
                        encryptedContent: t.encryptedContent || n.encryptedContent,
                        modelProvider: t.modelProvider || n.modelProvider,
                        notionModelName: t.notionModelName || n.notionModelName
                    };
                    if ("tool_use" !== t.type || "tool_use" !== n.type || t.id !== n.id) e.push({ ...t
                    }), e.length;
                    else {
                        let s = void 0 !== t.phase ? t.phase : n.phase;
                        e[a] = {
                            type: "tool_use",
                            id: t.id,
                            name: t.name,
                            content: n.content + t.content,
                            isCustomToolCall: t.isCustomToolCall ? ? n.isCustomToolCall,
                            signature: t.signature || n.signature,
                            ...void 0 !== s ? {
                                phase: s
                            } : {}
                        }
                    }
                }(t, a);
                return t
            }

            function r(e) {
                return "string" == typeof e ? [{
                    type: "text",
                    content: e
                }] : e ? ? []
            }
        },
        281952: (e, t, a) => {
            a.d(t, {
                d: () => s
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.27 4.37 15.45 11.25",
                    directional: !0,
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.9 4.375a.625.625 0 1 0 0 1.25h14.2a.625.625 0 1 0 0-1.25zm0 3.333a.625.625 0 0 0 0 1.25h9.457a.625.625 0 1 0 0-1.25zM2.275 15c0-.345.28-.625.625-.625h9.457a.625.625 0 1 1 0 1.25H2.9A.625.625 0 0 1 2.275 15m.625-3.958a.625.625 0 1 0 0 1.25h14.2a.625.625 0 0 0 0-1.25z"
                    })
                },
                s = (0, a(104509).wt)("textAlignLeft", n, "default")
        },
        289871: (e, t, a) => {
            a.d(t, {
                q: () => s
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "3.12 3.12 13.75 13.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M13.125 4.25c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v11.5c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125zm1.25.125v11.25h1.25V4.375zm-6.25 6.375c0-.621.504-1.125 1.125-1.125h1.5c.621 0 1.125.504 1.125 1.125v5c0 .621-.504 1.125-1.125 1.125h-1.5a1.125 1.125 0 0 1-1.125-1.125zm1.25.125v4.75h1.25v-4.75zM4.25 5.625c-.621 0-1.125.504-1.125 1.125v9c0 .621.504 1.125 1.125 1.125h1.5c.621 0 1.125-.504 1.125-1.125v-9c0-.621-.504-1.125-1.125-1.125zm.125 10v-8.75h1.25v8.75z"
                    })
                },
                s = (0, a(104509).wt)("chartBarXAxis", n, "default")
        },
        305721: (e, t, a) => {
            function n(e) {
                let t, {
                        environment: n,
                        maybeThreadId: s
                    } = e,
                    {
                        RouterStore: r
                    } = n;
                if (!(0, a(328765).S)()) return {
                    aiSessionId: "unknown",
                    aiInferenceId: "unknown",
                    aiDraftInferenceId: "unknown",
                    model: void 0,
                    modelFromUser: void 0,
                    searchSessionId: void 0
                };
                let o = r.state.route;
                "chat" === o.name ? t = o.threadId : "page" === o.name ? t = o.chatThreadId : "nativeTab" === o.name && "assistant" === o.tab && (t = a(408138).X.state.threadId);
                let d = void 0 === t || t === a(548124).NEW_CHAT_THREAD_ID ? s : t;
                return d ? i(d) : {
                    aiSessionId: "unknown",
                    aiInferenceId: "unknown",
                    aiDraftInferenceId: "unknown",
                    model: void 0,
                    modelFromUser: void 0,
                    searchSessionId: void 0
                }
            }

            function s(e) {
                return a(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(e).state.traceId ? ? "unknown"
            }

            function r(e) {
                return a(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(e).getOrCreateDraftTraceId()
            }

            function i(e) {
                let t, n, i, o = s(e),
                    d = r(e);
                try {
                    let s = (0, a(328765).S)();
                    if (!s) return {
                        aiSessionId: e,
                        aiInferenceId: o,
                        aiDraftInferenceId: d,
                        model: n,
                        modelFromUser: i,
                        searchSessionId: t
                    };
                    let r = a(174148).E.createChildStore(s, {
                        table: a(832375).Toz,
                        id: e,
                        spaceId: s.id
                    }).getTranscript().find(e => "config" === e.type);
                    if (t = (0, a(330942).sQ)(null == r ? void 0 : r.value), (null == r ? void 0 : r.value.type) === "workflow" && (i = !!r.value.modelFromUser), (null == r ? void 0 : r.value.type) === "workflow" && r.value.modelFromUser) {
                        let e = (0, a(220800).kD)(r.value);
                        n = null == e ? void 0 : e.type
                    }
                } catch (e) {
                    n = void 0, i = void 0, t = void 0
                }
                return {
                    aiSessionId: e,
                    aiInferenceId: o,
                    aiDraftInferenceId: d,
                    model: n,
                    modelFromUser: i,
                    searchSessionId: t
                }
            }

            function o(e) {
                let {
                    aiInferenceId: t,
                    aiSessionId: n
                } = e.inferenceInfo;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_writer_auto_escalate",
                        eventProperties: {
                            thread_id: e.threadId,
                            ai_inference_id: t,
                            ai_session_id: n,
                            reason: e.reason,
                            agent_writer_model: e.agentWriterModel
                        }
                    }
                })
            }

            function d(e) {
                return (0, a(342778).$R)(e)
            }

            function l(e) {
                return e.map(e => {
                    if ("agent-inference" === e.type) {
                        let t = [],
                            n = (0, a(258024).lH)(e.value),
                            s = !1;
                        for (let e of n) "tool_use" === e.type || "registered_tool_use" === e.type ? t.push(e.name) : "text" === e.type && (s = s || e.content.trim().length > 0);
                        return {
                            type: "agent-inference",
                            toolCalls: t,
                            hasAgentOutput: s
                        }
                    }
                    return "agent-tool-result" === e.type ? {
                        type: "agent-tool-result",
                        toolType: e.toolType,
                        state: (0, a(426048).Gu)(e),
                        hasError: !!e.error
                    } : {
                        type: e.type
                    }
                })
            }

            function c(e) {
                let {
                    leftNotionSidebarOpenState: t,
                    from: s,
                    environment: r,
                    chatMode: i,
                    threadId: o
                } = e, {
                    aiSessionId: d,
                    model: l
                } = n({
                    environment: r
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_sidebar_toggle_visibility",
                        eventProperties: {
                            ai_session_id: o ? ? d,
                            from: s,
                            state: "open",
                            left_notion_sidebar_open_state: t,
                            model: l,
                            chat_mode: i ? ? a(562733).zI.state.chatPanelMode
                        }
                    }
                })
            }

            function u(e) {
                var t;
                let {
                    leftNotionSidebarOpenState: s,
                    from: r,
                    environment: i,
                    threadId: o,
                    chatMode: d
                } = e, {
                    model: l
                } = n({
                    environment: i
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_sidebar_toggle_visibility",
                        eventProperties: {
                            ai_session_id: o ? ? "unknown",
                            from: r,
                            state: "closed",
                            left_notion_sidebar_open_state: s,
                            model: l,
                            chat_mode: d ? ? a(562733).zI.state.chatPanelMode
                        }
                    }
                }), (null == (t = a(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.started_agent_chat_thread) || a(707964).u4({
                    name: "agent_close_without_starting_chat"
                })
            }

            function _(e) {
                let {
                    environment: t,
                    metric: s,
                    from: r,
                    threadStore: i
                } = e, {
                    aiSessionId: o,
                    model: d
                } = n({
                    environment: t
                });
                a(680007).default.measure(s, {
                    data: {
                        ai_session_id: o,
                        from: r,
                        thread_type: i ? "existing_thread" : "new_thread",
                        model: d
                    }
                })
            }

            function g(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment,
                    maybeThreadId: e.threadId
                }), i = (0, a(330942).sQ)(e.config), o = {
                    ai_session_id: t,
                    ai_inference_id: s,
                    from: e.from,
                    search_sources: e.searchSources,
                    action_card_id: e.actionCardId,
                    model: r,
                    chat_mode: a(562733).zI.state.chatPanelMode,
                    is_database_agent: e.isDatabaseAgent,
                    suggested_prompt: e.suggestedPrompt,
                    is_retry: e.isRetry ? ? !1,
                    allow_edits_enabled: e.allowEditsEnabled,
                    search_session_id: i,
                    workflow_id: e.workflowId,
                    has_mail_trigger: e.hasMailTrigger,
                    mail_trigger_types: e.mailTriggerTypes,
                    input_modality: e.inputModality,
                    is_post_onboarding_agent: e.threadId ? (0, a(446062).F)(e.threadId) : void 0,
                    enable_script_agent: e.enableScriptAgent ? ? !1,
                    is_auto_triggered: e.isAutoTriggered ? ? !1
                }, d = e.workflowId;
                d ? (0, a(104310).u)({
                    event: {
                        eventName: "custom_agent_start_turn",
                        eventProperties: { ...o,
                            workflow_id: d,
                            run_id: e.runId
                        }
                    }
                }) : (0, a(104310).u)({
                    event: {
                        eventName: "agent_start_turn",
                        eventProperties: o
                    }
                })
            }

            function m(e) {
                let t, {
                        aiSessionId: s,
                        aiInferenceId: r,
                        model: i,
                        modelFromUser: o,
                        searchSessionId: d
                    } = n({
                        environment: e.environment,
                        maybeThreadId: e.threadId
                    }),
                    l = e.traceId ? ? r;
                switch (e.from) {
                    case "writer":
                    case "rich_text_menu":
                        t = void 0;
                        break;
                    default:
                        t = a(562733).zI.state.chatPanelMode
                }
                let c = Array.from(new Set(e.toolTypes)),
                    u = {
                        ai_session_id: s,
                        ai_inference_id: l,
                        from: e.from,
                        opened_from: e.openedFrom,
                        checklist_id: e.checklistId,
                        checklist_step_id: e.checklistStepId,
                        search_sources: e.searchSources,
                        num_user_steps: e.numUserStepsInTranscript,
                        num_tool_calls: e.numToolCalls,
                        num_tool_run: e.numToolRun,
                        num_tool_steps_with_errors: e.numToolStepsWithErrors,
                        num_error_steps: e.numErrorSteps,
                        num_upsells: e.numUpsells,
                        tool_types: c,
                        num_undoable_tool_run: e.numUndoableToolRun,
                        undoable_tool_types: e.undoableToolTypes,
                        page_created: e.pageCreated,
                        page_edited: e.pageEdited,
                        page_deleted: e.pageDeleted,
                        database_created: e.databaseCreated,
                        database_edited: e.databaseEdited,
                        database_deleted: e.databaseDeleted,
                        num_formulas_updated: e.numFormulasUpdated,
                        num_forms_created: e.numFormsCreated,
                        num_databases_created: e.numDatabasesCreated,
                        num_databases_edited: e.numDatabasesEdited,
                        num_databases_deleted: e.numDatabasesDeleted,
                        num_views_created: e.numViewsCreated,
                        num_properties_created: e.numPropertiesCreated,
                        num_properties_deleted: e.numPropertiesDeleted,
                        num_pages_created: e.numPagesCreated,
                        num_pages_edited: e.numPagesEdited,
                        num_pages_deleted: e.numPagesDeleted,
                        num_citations: e.numCitations,
                        num_mentions: e.numMentions,
                        citations_by_type: e.citationsByType,
                        num_results: e.numResults,
                        num_agent_diff_cards: e.numAgentDiffCards,
                        results_by_type: e.resultsByType,
                        client_time_to_start_stream: e.clientTimeToStartStream,
                        client_time_to_first_token: e.clientTimeToFirstToken,
                        client_time_to_flush_ui_updates: e.clientTimeToFlushUiUpdates,
                        client_total_turn_duration: e.clientTotalTurnDuration,
                        client_avg_fps: e.clientAvgFps,
                        client_min_fps: e.clientMinFps,
                        client_max_fps: e.clientMaxFps,
                        search_session_id: d,
                        model: i,
                        default_model_used: !o,
                        chat_mode: t,
                        is_database_agent: e.isDatabaseAgent,
                        cached_tokens_read: e.cachedTokensRead,
                        num_user_prompt_characters: e.numUserPromptCharacters,
                        num_user_prompt_words: e.numUserPromptWords,
                        result: e.result,
                        forcefully_stopped_by_user: e.forcefullyStoppedByUser,
                        is_retry: e.isRetry ? ? !1,
                        allow_edits_enabled: e.allowEditsEnabled,
                        follow_up_variation: e.followupVariation ? ? "default",
                        context_selection: e.hasAnySelectionContext,
                        context_page: e.hasAnyPageContext,
                        prompt_key: e.promptKey,
                        speculative_search_triggered: e.speculativeSearchTriggered ? ? !1,
                        speculative_search_results_used: e.speculativeSearchResultsUsed ? ? !1,
                        custom_agent_updated: e.customAgentUpdated,
                        custom_agent_updated_triggers: e.customAgentUpdatedTriggers,
                        custom_agent_updated_instructions: e.customAgentUpdatedInstructions,
                        custom_agent_updated_modules: e.customAgentUpdatedModules,
                        custom_agent_testing_thread: e.isInTestingThread,
                        is_post_onboarding_agent: e.threadId ? (0, a(446062).F)(e.threadId) : void 0,
                        enable_script_agent: e.enableScriptAgent ? ? !1,
                        is_auto_triggered: e.isAutoTriggered ? ? !1
                    },
                    _ = e.workflowId;
                _ ? (0, a(104310).u)({
                    event: {
                        eventName: "custom_agent_end_turn",
                        eventProperties: { ...u,
                            workflow_id: _,
                            run_id: e.runId
                        }
                    }
                }) : (0, a(104310).u)({
                    event: {
                        eventName: "agent_end_turn",
                        eventProperties: u
                    }
                }), 3 === e.numUserStepsInTranscript && a(707964).u4({
                    name: "agent_third_turn_completed"
                })
            }

            function p(e) {
                let {
                    aiSessionId: t,
                    model: n,
                    aiDraftInferenceId: s
                } = e.inferenceInfo, r = e.model ? ? n;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_input_menu_button_click",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            button_name: e.button_name,
                            from: e.from,
                            model: r
                        }
                    }
                })
            }

            function f({
                prompt: e,
                model: t,
                aiModule: n,
                inferenceInfo: s,
                blockStore: r
            }) {
                let {
                    aiSessionId: i,
                    model: o,
                    aiDraftInferenceId: d
                } = s, l = n ? "ai_module" : a(562733).zI.state.chatPanelMode, c = t ? ? o, {
                    type: u
                } = e;
                if ("string" === u || "text-value" === u) {
                    let t = "string" === u ? e.text : (0, a(247438).q4_)(e.text ? ? []);
                    (0, a(104310).u)({
                        event: {
                            eventName: "agent_pills_click",
                            eventProperties: {
                                ai_session_id: i,
                                ai_inference_id: d,
                                pill_text: t,
                                model: c,
                                chat_mode: l
                            }
                        }
                    })
                } else "prebuilt-prompt" === u ? (0, a(104310).u)({
                    event: {
                        eventName: "agent_pills_click",
                        eventProperties: {
                            ai_session_id: i,
                            ai_inference_id: d,
                            pill_text: e.text,
                            prompt_type: e.promptType,
                            model: c,
                            chat_mode: l,
                            ..."summarize_discussions" === e.promptType ? {
                                num_discussions: (0, a(503507).LG)(r)
                            } : {}
                        }
                    }
                }) : (0, a(722371).HB)(u)
            }

            function h(e) {
                let {
                    aiSessionId: t,
                    model: n,
                    aiDraftInferenceId: s
                } = e.inferenceInfo, r = e.model ? ? n;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_input_menu_button_click",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            button_name: "attach_file",
                            from: e.from,
                            model: r
                        }
                    }
                })
            }

            function v(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_copy_answer",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            model: r
                        }
                    }
                })
            }

            function y(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "clicked_ai_chat_follow_up",
                        eventProperties: {
                            thread_id: e.threadId,
                            trace_id: s(e.threadId),
                            mode: e.mode,
                            action: e.action
                        }
                    }
                })
            }

            function A(e) {
                let {
                    aiSessionId: t,
                    model: n,
                    aiDraftInferenceId: s
                } = e.inferenceInfo, r = e.model ? ? n;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_input_menu_button_click",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            button_name: "mention_menu",
                            from: e.from,
                            model: r
                        }
                    }
                })
            }

            function k(e) {
                let {
                    aiSessionId: t,
                    model: n,
                    aiDraftInferenceId: s
                } = e.inferenceInfo, r = e.model ? ? n;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_input_menu_mention_added",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            mention_type: e.mention.table,
                            model: r
                        }
                    }
                })
            }

            function b(e) {
                let {
                    aiSessionId: t,
                    aiDraftInferenceId: n,
                    model: s
                } = e.inferenceInfo;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_connect_apps",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: n,
                            from: e.from,
                            model: s
                        }
                    }
                })
            }

            function S(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_toggle_tool_card",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            step_id: e.stepId,
                            show_results: e.showResults,
                            from: e.from,
                            tool_card_type: e.toolCardType,
                            model: r,
                            workflow_id: e.workflowId
                        }
                    }
                })
            }

            function w(e) {
                let {
                    threadStore: t,
                    traceId: n,
                    showResults: s,
                    from: r
                } = e, i = (0, a(187353).L2)(t), o = (0, a(330942).sQ)(i);
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_search_step_toggle_results",
                        eventProperties: {
                            search_session_id: o,
                            thread_id: t.id,
                            show_results: s,
                            trace_id: n,
                            from: r,
                            workflow_id: (0, a(646440).getWorkflowIdFromStore)(t)
                        }
                    }
                })
            }

            function C(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_retry_button_clicked",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            model: r,
                            step_id: e.stepId,
                            prompt_key: e.promptKey,
                            has_undo: !!e.hasUndo,
                            undone_tool_types: e.undoneToolTypes ? ? []
                        }
                    }
                })
            }

            function I(e) {
                let {
                    environment: t,
                    threadStore: s,
                    resultId: r,
                    searchSourceType: i,
                    source: o,
                    position: d,
                    traceId: l,
                    stepId: c
                } = e, {
                    aiSessionId: u,
                    aiInferenceId: _,
                    model: g
                } = n({
                    environment: t,
                    maybeThreadId: s.id
                }), m = (0, a(187353).L2)(s), p = (0, a(330942).sQ)(m);
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_result_clicked",
                        eventProperties: {
                            ai_session_id: u,
                            ai_inference_id: _,
                            clicked_result_id: r,
                            source: o,
                            search_source_type: i,
                            model: g,
                            position: d,
                            trace_id: l,
                            step_id: c,
                            search_session_id: p
                        }
                    }
                })
            }

            function T(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r,
                    searchSessionId: i
                } = n({
                    environment: e.environment
                }), o = {
                    ai_session_id: t,
                    ai_inference_id: s,
                    result_type: e.resultType,
                    source: e.source,
                    model: r,
                    search_session_id: i,
                    position: e.position
                };
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_click_citation",
                        eventProperties: o
                    }
                })
            }

            function P(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment,
                    maybeThreadId: e.threadId
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_feedback_given",
                        eventProperties: {
                            feature: e.feature ? ? "agent",
                            ai_session_id: t,
                            ai_inference_id: s,
                            sentiment: e.sentiment,
                            model: r,
                            prompt_key: e.promptKey,
                            has_worker_connected: e.hasWorkerConnected
                        }
                    }
                })
            }

            function z(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_undo",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            from: e.from,
                            undone_tool_types: e.undoneToolTypes,
                            num_tools_undone: e.undoneToolTypes.length,
                            model: r
                        }
                    }
                })
            }

            function M(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s,
                    model: r
                } = e.threadId ? i(e.threadId) : n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_get_help_button_impression",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            model: r
                        }
                    }
                })
            }

            function x(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s
                } = e.threadId ? i(e.threadId) : n({
                    environment: e.environment,
                    maybeThreadId: e.threadId
                }), r = e.aiInferenceId ? ? s;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_follow_up_buttons_impression",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: r,
                            follow_up_count: e.followUpCount,
                            variant: e.variant,
                            is_post_onboarding_agent: e.threadId ? (0, a(446062).F)(e.threadId) : void 0
                        }
                    }
                })
            }

            function D(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s
                } = e.threadId ? i(e.threadId) : n({
                    environment: e.environment,
                    maybeThreadId: e.threadId
                }), r = e.aiInferenceId ? ? s;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_follow_up_button_clicked",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: r,
                            follow_up_count: e.followUpCount,
                            follow_up_index: e.followUpIndex,
                            variant: e.variant,
                            option: e.option,
                            is_post_onboarding_agent: e.threadId ? (0, a(446062).F)(e.threadId) : void 0,
                            is_intro_pill: e.isIntroPill
                        }
                    }
                })
            }

            function F(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_quick_access_typing_started",
                        eventProperties: {
                            from: e.from
                        }
                    }
                })
            }

            function E(e) {
                let {
                    aiSessionId: t,
                    aiDraftInferenceId: n
                } = e.inferenceInfo;
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_prebuilt_prompt_shown_to_user",
                        eventProperties: {
                            prompt_types: e.promptTypes,
                            ai_session_id: t,
                            ai_inference_id: n
                        }
                    }
                })
            }

            function N(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_user_action_on_risky_attachments",
                        eventProperties: {
                            action: e.action,
                            num_files: e.numFiles,
                            file_types: e.fileTypes.filter(e => (0, a(722371).Xk)(a(264895).f4, e))
                        }
                    }
                })
            }

            function U(e) {
                let {
                    aiSessionId: t
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_toggle_chat_mode",
                        eventProperties: {
                            ai_session_id: t,
                            chat_mode: e.chatMode
                        }
                    }
                })
            }

            function R(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_modal_opened",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            from: e.from
                        }
                    }
                })
            }

            function B(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_asset_selected",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            asset_type: e.assetType,
                            is_selected: e.isSelected
                        }
                    }
                })
            }

            function j(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_setup_profile_clicked",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId
                        }
                    }
                })
            }

            function W(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_change_profile_clicked",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId
                        }
                    }
                })
            }

            function O(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_template_selected",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            default_template_name: e.templateName
                        }
                    }
                })
            }

            function H(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_existing_page_selected",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            page_id: e.pageId,
                            is_from_recently_used: e.isFromRecentlyUsed
                        }
                    }
                })
            }

            function L(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_remove_profile_clicked",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId
                        }
                    }
                })
            }

            function G(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_marketplace_template_selected",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            template_id: e.templateId
                        }
                    }
                })
            }

            function V(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_reset_clicked",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId
                        }
                    }
                })
            }

            function Y(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_personalization_modal_closed",
                        eventProperties: {
                            customization_session_id: e.customizationSessionId,
                            custom_name_is_set: e.customNameIsSet,
                            selected_accessory: e.selectedAccessory,
                            profile_page_id: e.profilePageId,
                            did_save: e.didSave
                        }
                    }
                })
            }

            function q(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_slope_sidebar_tab_clicked",
                        eventProperties: {
                            tab: e.tab
                        }
                    }
                })
            }

            function Z(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_slope_shortcut_clicked",
                        eventProperties: {
                            type: e.type,
                            favorite: e.favorite,
                            owned: e.owned,
                            position: e.position,
                            workflow_id: e.workflowId
                        }
                    }
                })
            }

            function Q(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_slope_shortcut_new_agent_clicked",
                        eventProperties: {
                            position: e.position
                        }
                    }
                })
            }

            function K(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_slope_shortcut_more_clicked",
                        eventProperties: {
                            position: e.position
                        }
                    }
                })
            }

            function X(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "slippery_slope_preference_toggled",
                        eventProperties: {
                            slippery_slope_enabled: e.slipperySlopeEnabled,
                            from: e.from
                        }
                    }
                }), a(707964).u4({
                    name: e.slipperySlopeEnabled ? "slippery_slope_enabled" : "slippery_slope_disabled",
                    args: {
                        from: e.from
                    }
                })
            }

            function J(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_chat_history_item_clicked",
                        eventProperties: {
                            ai_session_id: e.threadId,
                            from: e.from,
                            model: e.model,
                            chat_mode: a(562733).zI.state.chatPanelMode
                        }
                    }
                })
            }

            function $(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "ai_opened",
                        eventProperties: {
                            agent_enabled: e.agentEnabled,
                            surface: e.surface,
                            corner_surface: e.cornerSurface
                        }
                    }
                })
            }

            function ee() {
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_mobile_app_promo_sheet_download_clicked",
                        eventProperties: {}
                    }
                })
            }

            function et(e) {
                let {
                    aiSessionId: t,
                    aiInferenceId: s
                } = n({
                    environment: e.environment
                });
                (0, a(104310).u)({
                    event: {
                        eventName: "agent_edit_reference_block_clicked",
                        eventProperties: {
                            ai_session_id: t,
                            ai_inference_id: s,
                            edit_reference_id: e.editReferenceId,
                            block_type: e.blockType,
                            click_target: e.clickTarget,
                            has_diffs: e.hasDiffs,
                            num_diff_entries: e.numDiffEntries
                        }
                    }
                })
            }

            function ea(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "post_onboarding_agent_callout_impression",
                        eventProperties: {
                            thread_id: e.threadId
                        }
                    }
                })
            }

            function en(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "post_onboarding_agent_callout_clicked",
                        eventProperties: {
                            thread_id: e.threadId
                        }
                    }
                })
            }

            function es(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "post_onboarding_agent_thread_viewed",
                        eventProperties: {
                            thread_id: e.threadId
                        }
                    }
                })
            }

            function er(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "post_onboarding_agent_completed",
                        eventProperties: {
                            thread_id: e.threadId,
                            num_turns: e.numTurns,
                            time_to_complete_ms: e.timeToCompleteMs,
                            database_created: e.databaseCreated,
                            page_created: e.pageCreated,
                            num_databases_created: e.numDatabasesCreated,
                            num_pages_created: e.numPagesCreated
                        }
                    }
                })
            }

            function ei(e) {
                (0, a(104310).u)({
                    event: {
                        eventName: "post_onboarding_agent_thread_created",
                        eventProperties: {
                            thread_id: e.threadId,
                            has_enrichment_context: e.hasEnrichmentContext,
                            enrichment_field_count: e.enrichmentFieldCount
                        }
                    }
                })
            }
            a.r(t), a.d(t, {
                calculateMetricsFromTranscript: () => d,
                getInferenceDataFromThreadId: () => i,
                getInferenceIdFromThreadId: () => s,
                getSessionAndInferenceIdsFromEnvironment: () => n,
                getStepSummaries: () => l,
                getThreadDraftTraceId: () => r,
                trackAgentChatHistoryItemClicked: () => J,
                trackAgentClosed: () => u,
                trackAgentEndTurn: () => m,
                trackAgentFollowUpAction: () => y,
                trackAgentOpened: () => c,
                trackAgentPersonalizationAssetSelected: () => B,
                trackAgentPersonalizationChangeProfileClicked: () => W,
                trackAgentPersonalizationExistingPageSelected: () => H,
                trackAgentPersonalizationMarketplaceTemplateSelected: () => G,
                trackAgentPersonalizationModalClosed: () => Y,
                trackAgentPersonalizationModalOpened: () => R,
                trackAgentPersonalizationRemoveProfileClicked: () => L,
                trackAgentPersonalizationResetClicked: () => V,
                trackAgentPersonalizationSetupProfileClicked: () => j,
                trackAgentPersonalizationTemplateSelected: () => O,
                trackAgentPrebuiltPromptShownToUser: () => E,
                trackAgentQuickAccessTypingStarted: () => F,
                trackAgentRetryButtonClicked: () => C,
                trackAgentSearchResultClicked: () => I,
                trackAgentSearchStepToggleResults: () => w,
                trackAgentSlopeShortcutClicked: () => Z,
                trackAgentSlopeShortcutMoreClicked: () => K,
                trackAgentSlopeShortcutNewAgentClicked: () => Q,
                trackAgentSlopeSidebarTabClicked: () => q,
                trackAgentStartTurn: () => g,
                trackAgentTimeToRender: () => _,
                trackAgentToggleChatMode: () => U,
                trackAgentUserActionOnRiskyAttachments: () => N,
                trackAgentWriterAutoEscalate: () => o,
                trackAiOpened: () => $,
                trackAnswerCopied: () => v,
                trackAttachFileOpened: () => h,
                trackCitationClicked: () => T,
                trackConnectAppsClicked: () => b,
                trackEditReferenceBlockClicked: () => et,
                trackFollowUpButtonClicked: () => D,
                trackFollowUpButtonsImpression: () => x,
                trackGetHelpButtonImpression: () => M,
                trackMentionAdded: () => k,
                trackMentionMenuOpened: () => A,
                trackMobileAgentAppPromoSheetDownloadClicked: () => ee,
                trackPillsClicked: () => f,
                trackPostOnboardingAgentCalloutClicked: () => en,
                trackPostOnboardingAgentCalloutImpression: () => ea,
                trackPostOnboardingAgentCompleted: () => er,
                trackPostOnboardingAgentThreadCreated: () => ei,
                trackPostOnboardingAgentThreadViewed: () => es,
                trackSlipperySlopePreferenceToggled: () => X,
                trackSourceMenuOpened: () => p,
                trackThumbsUpDownClicked: () => P,
                trackToggleToolCard: () => S,
                trackUndoClicked: () => z
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454)
        },
        327330: (e, t, a) => {
            a.d(t, {
                t: () => s
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "2.27 7.7 15.45 4.59",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M2.9 7.708a.625.625 0 0 0 0 1.25h14.2a.625.625 0 1 0 0-1.25zm0 3.334a.625.625 0 1 0 0 1.25h9.457a.625.625 0 0 0 0-1.25z"
                    })
                },
                s = (0, a(104509).wt)("textShort", n, "default")
        },
        333687: (e, t, a) => {
            a.d(t, {
                Y: () => s
            }), a(296540);
            let n = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "1.62 1.62 16.75 16.75",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10 15.125c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625m-4.508-1.501a.625.625 0 0 1 .884.884l-1.415 1.415a.626.626 0 0 1-.884-.885zm8.131 0a.625.625 0 0 1 .884 0l1.414 1.414a.626.626 0 0 1-.884.885l-1.414-1.415a.626.626 0 0 1 0-.884M10 6a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 1.25a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5M4.25 9.375a.625.625 0 1 1 0 1.25h-2a.625.625 0 1 1 0-1.25zm13.5 0a.625.625 0 1 1 0 1.25h-2a.625.625 0 1 1 0-1.25zM4.077 4.078a.626.626 0 0 1 .885 0l1.414 1.414a.626.626 0 0 1-.884.885L4.077 4.962a.626.626 0 0 1 0-.884m10.96 0a.625.625 0 0 1 .884.884l-1.414 1.415a.626.626 0 0 1-.884-.885zM10 1.625c.345 0 .625.28.625.625v2a.625.625 0 1 1-1.25 0v-2c0-.345.28-.625.625-.625"
                    })
                },
                s = (0, a(104509).wt)("sun", n, "default")
        },
        342778: (e, t, a) => {
            a.d(t, {
                $R: () => d,
                E4: () => _,
                _G: () => l,
                AV: () => c,
                DW: () => u
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(672577), a(581454), a(908872), a(737550);
            var n = () => a(722371),
                s = () => a(426048);

            function r(e, t) {
                return "callFunction" === e && (0, n().Gv)(t) && "function" in t && "string" == typeof t.function ? t.function : e
            }
            let i = ["numDatabasesCreated", "numDatabasesEdited", "numDatabasesDeleted", "numViewsCreated", "numPropertiesCreated", "numPropertiesDeleted", "numPagesCreated", "numPagesEdited", "numPagesDeleted", "numFormsCreated", "numFormulasUpdated"],
                o = {
                    numToolRun: 0,
                    numToolCalls: 0,
                    numUndoableToolRun: 0,
                    pageCreated: !1,
                    pageEdited: !1,
                    pageDeleted: !1,
                    databaseCreated: !1,
                    databaseEdited: !1,
                    databaseDeleted: !1,
                    numFormulasUpdated: 0,
                    numFormsCreated: 0,
                    numDatabasesCreated: 0,
                    numDatabasesEdited: 0,
                    numDatabasesDeleted: 0,
                    numViewsCreated: 0,
                    numPropertiesCreated: 0,
                    numPropertiesDeleted: 0,
                    numPagesCreated: 0,
                    numPagesEdited: 0,
                    numPagesDeleted: 0,
                    numToolStepsWithErrors: 0,
                    numErrorSteps: 0,
                    numUpsells: 0
                };

            function d(e) {
                let t = { ...o,
                    toolTypes: [],
                    undoableToolTypes: []
                };
                if (!e) return t;
                for (let a of e) ! function(e) {
                    var t, a, o, d;
                    let {
                        metrics: l,
                        step: c
                    } = e;
                    if ("agent-tool-result" === c.type) {
                        if (!c.toolCallId) return;
                        let e = (0, s().G1)(c);
                        l.numToolRun += 1;
                        let u = r(e.toolType, e.input);
                        switch (l.toolTypes.push(u), (0, n().Xk)(s().MV, e.toolType) && (l.numUndoableToolRun += 1, l.undoableToolTypes.push(u)), e.error && (l.numToolStepsWithErrors += 1), e.toolType) {
                            case "create-database":
                                l.databaseCreated = !0, l.numFormulasUpdated += (null == (t = e.result) ? void 0 : t.numFormulasUpdated) ? ? 0, l.numFormsCreated += (null == (a = e.result) ? void 0 : a.numFormsCreated) ? ? 0;
                                break;
                            case "update-database":
                                l.databaseEdited = !0, l.numFormulasUpdated += (null == (o = e.result) ? void 0 : o.numFormulasUpdated) ? ? 0, l.numFormsCreated += (null == (d = e.result) ? void 0 : d.numFormsCreated) ? ? 0;
                                break;
                            case "create-pages":
                                l.pageCreated = !0;
                                break;
                            case "update-page":
                            case "update-page-v2":
                                l.pageEdited = !0;
                                break;
                            case "delete-pages":
                                l.pageDeleted = !0
                        }
                        let _ = e.result;
                        (function(e) {
                            if ("object" != typeof e || null === e || Array.isArray(e)) return !1;
                            let t = !1;
                            for (let a of i) {
                                if (!(a in e)) continue;
                                t = !0;
                                let n = e[a];
                                if (void 0 !== n && "number" != typeof n) return !1
                            }
                            return !!t
                        })(_) && (l.numDatabasesCreated += _.numDatabasesCreated ? ? 0, l.numDatabasesEdited += _.numDatabasesEdited ? ? 0, l.numDatabasesDeleted += _.numDatabasesDeleted ? ? 0, l.numViewsCreated += _.numViewsCreated ? ? 0, l.numPropertiesCreated += _.numPropertiesCreated ? ? 0, l.numPropertiesDeleted += _.numPropertiesDeleted ? ? 0, l.numPagesCreated += _.numPagesCreated ? ? 0, l.numPagesEdited += _.numPagesEdited ? ? 0, l.numPagesDeleted += _.numPagesDeleted ? ? 0, (_.numPagesCreated ? ? 0) > 0 && (l.pageCreated = !0), (_.numPagesEdited ? ? 0) > 0 && (l.pageEdited = !0), (_.numPagesDeleted ? ? 0) > 0 && (l.pageDeleted = !0), (_.numDatabasesCreated ? ? 0) > 0 && (l.databaseCreated = !0), (_.numDatabasesEdited ? ? 0) > 0 && (l.databaseEdited = !0), (_.numDatabasesDeleted ? ? 0) > 0 && (l.databaseDeleted = !0));
                        return
                    }
                    if ("agent-inference" === c.type) {
                        if (Array.isArray(c.value))
                            for (let e of c.value) "tool_use" === e.type && (l.numToolCalls += 1);
                        return
                    }
                    if ("premium-feature-unavailable" === c.type) {
                        l.numUpsells += 1;
                        return
                    }
                    "error" === c.type && (l.numErrorSteps += 1)
                }({
                    metrics: t,
                    step: a
                });
                return t
            }

            function l(e) {
                if (!e) return;
                let t = e.reduce((e, t) => "agent-inference" === t.type && t.editReferenceMap ? e + Object.keys(t.editReferenceMap).length : e, 0);
                return t > 0 ? t : void 0
            }

            function c(e) {
                var t, s;
                let r = e.find(e => "search" === e.type),
                    i = (null == r ? void 0 : r.type) === "search" && "results" in r ? r.results : void 0,
                    o = e.find(e => "search-chat" === e.type),
                    d = i ? (0, n().s8)(i, e => (null == e ? void 0 : e.length) ? ? 0) : void 0,
                    l = /\[\]\((.*?)\)/g,
                    c = o ? (null == (t = o.value.match(l)) ? void 0 : t.length) ? ? 0 : 0,
                    u = (null == (s = Array.from((null == o ? void 0 : o.value.matchAll(l)) ? ? [])) ? void 0 : s.map(e => e[1])) ? ? [],
                    _ = new Set;
                return {
                    numCitations: c,
                    citationsBySource: u.reduce((e, t) => {
                        if ((0, a(4962).iv)(t)) e.notion = (e.notion ? ? 0) + 1, _.add(t);
                        else {
                            let n = a(683053).tD.parseAssistantHref(t);
                            if (n) {
                                let t = n.type;
                                e[t] = (e[t] ? ? 0) + 1
                            }
                        }
                        return e
                    }, {}),
                    resultsBySource: d,
                    maybeSearchStep: r,
                    maybeSearchChatStep: o,
                    citationPageIds: Array.from(_)
                }
            }

            function u(e, t) {
                if (!e) return {
                    numCitations: 0,
                    numMentions: 0,
                    citationsByType: {},
                    numResults: 0,
                    resultsByType: {},
                    citationPageIds: []
                };
                let i = (0, a(68118).Ps)({
                        transcript: e,
                        domainBaseUrl: t.domainBaseUrl
                    }),
                    o = 0,
                    d = 0,
                    l = 0,
                    c = {},
                    u = {},
                    _ = new Set,
                    g = /\[\^([^\]]+)\]/g,
                    m = /<mention-(?:user|page|database|data-source|agent)\b[^>]*\burl=(["'])(.*?)\1[^>]*?(?:\/>|>[\s\S]*?<\/mention-(?:user|page|database|data-source|agent)>)/g;
                for (let v of e) {
                    var p, f, h;
                    if ("agent-inference" === v.type) {
                        let e = "string" == typeof(h = v.value) ? h : (0, a(258024).lH)(h).filter(e => "text" === e.type).map(e => e.content).join(" "),
                            n = Array.from(e.matchAll(g));
                        for (let s of (o += n.length, d += (null == (p = e.match(m)) ? void 0 : p.length) ? ? 0, n)) {
                            let e = s[1];
                            if (e) {
                                let {
                                    citationType: n,
                                    blockId: s
                                } = function(e, t, n) {
                                    let s = (0, a(545504).w)({
                                        url: e,
                                        config: t
                                    });
                                    if (s) return {
                                        citationType: "block",
                                        blockId: s
                                    };
                                    let r = (0, a(140030).cy)(e);
                                    if (r) return {
                                        citationType: r.type
                                    };
                                    let i = null == n ? void 0 : n[e];
                                    if (!i) return {
                                        citationType: "unknown"
                                    };
                                    let o = (0, a(932956).f9)(i.id);
                                    return o ? {
                                        citationType: o.type
                                    } : {
                                        citationType: "unknown"
                                    }
                                }(e, t, i);
                                s && _.add(s), c[n] = (c[n] || 0) + 1
                            }
                        }
                    }
                    if ("agent-tool-result" === v.type) {
                        let e = (0, s().G1)(v);
                        if ("search" === e.toolType && e.result && e.result.extractedResults)
                            for (let t of e.result.extractedResults) {
                                let e = t.searchSourceType;
                                l += 1, u[e] = (u[e] || 0) + 1
                            }
                        if ("callFunction" === e.toolType && r(e.toolType, e.input).endsWith(".search")) try {
                            let t = null == (f = e.result) ? void 0 : f.output;
                            if ("string" == typeof t) {
                                let e = JSON.parse(t);
                                if ((0, n().Gv)(e) && "results" in e && Array.isArray(e.results))
                                    for (let t of e.results)(0, n().Gv)(t) && "string" == typeof t.type && (l += 1, u[t.type] = (u[t.type] || 0) + 1)
                            }
                        } catch {}
                    }
                }
                return {
                    numCitations: o,
                    numMentions: d,
                    citationsByType: c,
                    numResults: l,
                    resultsByType: u,
                    citationPageIds: Array.from(_)
                }
            }

            function _(e) {
                let {
                    stepsFromTurn: t,
                    isError: a
                } = e;
                return t.some(g) ? "payment_error" : a || t.some(m) ? "error" : "success"
            }

            function g(e) {
                return "premium-feature-unavailable" === e.type || "error" === e.type && e.errorCode === a(101787)._D_
            }

            function m(e) {
                return "error" === e.type || "agent-debug-error" === e.type || "agent-tool-result" === e.type && "applied:error" === (0, s().Gu)(e)
            }
        },
        503507: (e, t, a) => {
            a.d(t, {
                CN: () => r,
                LG: () => d,
                MY: () => i
            }), a(898992), a(354520), a(581454), a(737550);
            let n = (0, a(109939).YK)({
                    search: {
                        defaultMessage: "Search for anything",
                        id: "AgentSuggestedActions.search"
                    },
                    analyzePdfsOrImages: {
                        defaultMessage: "Analyze PDFs or images",
                        id: "AgentSuggestedActions.analyzePdfsOrImages"
                    },
                    summarizeCurrentProjects: {
                        defaultMessage: "Summarize my current projects",
                        id: "AgentSuggestedActions.summarizeProjects"
                    },
                    planATrip: {
                        defaultMessage: "Help me plan a trip",
                        id: "AgentSuggestedActions.planATrip"
                    },
                    draftProjectPlan: {
                        defaultMessage: "Draft a project plan",
                        id: "AgentSuggestedActions.draftProjectPlan"
                    },
                    createDiagramBasedOnPage: {
                        defaultMessage: "Create a diagram based on page",
                        id: "AgentSuggestedActions.createDiagramBasedOnPage"
                    },
                    translateThisPage: {
                        defaultMessage: "Translate this page",
                        id: "AgentSuggestedActions.translateThisPage"
                    },
                    summarizeThisPage: {
                        defaultMessage: "Summarize this page",
                        id: "AgentSuggestedActions.summarizeThisPage"
                    },
                    findActionItems: {
                        defaultMessage: "Find action items",
                        id: "AgentSuggestedActions.findActionItems"
                    },
                    makeMoreConcise: {
                        defaultMessage: "Make this page shorter",
                        id: "AgentSuggestedActions.makeMoreConcise"
                    },
                    makeShorter: {
                        defaultMessage: "Make shorter",
                        id: "AgentSuggestedActions.makeShorter"
                    },
                    createTaskTracker: {
                        defaultMessage: "Create a task tracker",
                        id: "AgentSuggestedActions.createTaskTracker"
                    },
                    brainstormWritingIdeas: {
                        defaultMessage: "Brainstorm writing ideas",
                        id: "AgentSuggestedActions.brainstormWritingIdeas"
                    },
                    writeMeetingAgenda: {
                        defaultMessage: "Write meeting agenda",
                        id: "AgentSuggestedActions.writeMeetingAgenda"
                    },
                    analyzePageForInsights: {
                        defaultMessage: "Analyze for insights",
                        id: "AgentSuggestedActions.analyzeForInsights"
                    },
                    analyzeDataForInsights: {
                        defaultMessage: "Analyze data for insights",
                        id: "AgentSuggestedActions.analyzeDataForInsights"
                    },
                    createChart: {
                        defaultMessage: "Create a chart",
                        id: "AgentSuggestedActions.createChart"
                    },
                    filterAndSortData: {
                        defaultMessage: "Filter and sort data",
                        id: "AgentSuggestedActions.filterAndSortData"
                    },
                    helpMeSetUpThisDatabase: {
                        defaultMessage: "Help me set up this database",
                        id: "AgentSuggestedActions.helpMeSetUpThisDatabase"
                    },
                    generateSampleRows: {
                        defaultMessage: "Generate sample rows",
                        id: "AgentSuggestedActions.generateSampleRows"
                    },
                    createCustomAgent: {
                        defaultMessage: "Create custom agent",
                        id: "AgentSuggestedActions.createCustomAgent"
                    },
                    createDatabaseAgent: {
                        defaultMessage: "Help me create a database autofill",
                        id: "AgentSuggestedActions.createDatabaseAgent"
                    },
                    translateDatabaseAgent: {
                        defaultMessage: "Help me create a database agent for translation",
                        id: "AgentSuggestedActions.translateDatabaseAgent"
                    },
                    summarizeDatabaseAgent: {
                        defaultMessage: "Help me create a database agent for summarization",
                        id: "AgentSuggestedActions.summarizeDatabaseAgent"
                    },
                    helpCreateDatabaseAgentWithAi: {
                        defaultMessage: "Help me fix my database agent",
                        id: "AgentSuggestedActions.helpCreateDatabaseAgentWithAi"
                    },
                    generateSelectOptions: {
                        defaultMessage: "Generate options with AI",
                        id: "AgentSuggestedActions.generateSelectOptions"
                    },
                    addEmojiTriggerToSlack: {
                        defaultMessage: "Add an emoji trigger to Slack",
                        id: "AgentSuggestedActions.addEmojiTriggerToSlack"
                    },
                    scheduleRecurringReport: {
                        defaultMessage: "Schedule a recurring report",
                        id: "AgentSuggestedActions.scheduleRecurringReport"
                    },
                    helpMeUpdateInstructions: {
                        defaultMessage: "Help me update instructions",
                        id: "AgentSuggestedActions.helpMeUpdateInstructions"
                    },
                    createCustomAgentFromFollowUp: {
                        defaultMessage: "Set up my agent",
                        id: "AgentSuggestedActions.createCustomAgentFromFollowUp"
                    },
                    createCustomAgentBlank: {
                        defaultMessage: "Set up blank agent",
                        id: "AgentSuggestedActions.createCustomAgentBlank"
                    },
                    updateAgentFromTemplate: {
                        defaultMessage: "Update a newly duplicated agent from a template",
                        id: "AgentSuggestedActions.updateAgentFromTemplate"
                    },
                    whatsNewInAgent: {
                        defaultMessage: "What’s new in Notion AI",
                        id: "AgentSuggestedActions.whatsNewInAgent"
                    },
                    personalizeYourNotionAI: {
                        defaultMessage: "Personalize your Notion AI",
                        id: "AgentSuggestedActions.personalizeYourNotionAI"
                    },
                    summarizeDiscussions: {
                        defaultMessage: "Summarize page comments",
                        id: "AgentSuggestedActions.summarizeDiscussions"
                    },
                    improveWriting: {
                        defaultMessage: "Improve writing",
                        id: "AgentSuggestedActions.improveWriting"
                    },
                    fixSpellingGrammar: {
                        defaultMessage: "Proofread",
                        id: "AgentSuggestedActions.fixSpellingGrammar"
                    },
                    explainThis: {
                        defaultMessage: "Explain",
                        id: "AgentSuggestedActions.explainThis"
                    },
                    addSummary: {
                        defaultMessage: "Add a summary",
                        id: "AgentSuggestedActions.addSummary"
                    },
                    reformat: {
                        defaultMessage: "Reformat",
                        id: "AgentSuggestedActions.reformat"
                    },
                    createDailyBrief: {
                        defaultMessage: "Create a daily brief",
                        id: "AgentSuggestedActions.createDailyBrief"
                    },
                    inboxZero: {
                        defaultMessage: "Keep me at inbox zero",
                        id: "AgentSuggestedActions.inboxZero"
                    },
                    continueWriting: {
                        defaultMessage: "Continue writing",
                        id: "AgentSuggestedActions.continueWriting"
                    },
                    generateImagePrompt: {
                        defaultMessage: "Generate image",
                        id: "AgentSuggestedActions.generateImagePrompt"
                    },
                    imageGenerationMode: {
                        defaultMessage: "Image generation mode",
                        id: "AgentSuggestedActions.imageGenerationMode"
                    },
                    testCustomAgentTrigger: {
                        defaultMessage: "Test this trigger",
                        id: "AgentSuggestedActions.testCustomAgentTrigger"
                    },
                    updateCustomAgentWithMemories: {
                        defaultMessage: "Update a custom agent with memories",
                        id: "AgentSuggestedActions.updateCustomAgentWithMemories"
                    },
                    fixCustomAgent: {
                        defaultMessage: "Fix a custom agent",
                        id: "AgentSuggestedActions.fixCustomAgent"
                    },
                    askAI: {
                        defaultMessage: "Ask AI",
                        id: "AgentSuggestedActions.askAI"
                    }
                }),
                s = {
                    search: {
                        message: n.search,
                        icon: a(330274).magnifyingGlassIcon
                    },
                    summarize_current_projects: {
                        message: n.summarizeCurrentProjects,
                        icon: a(281952).d
                    },
                    plan_a_trip: {
                        message: n.planATrip,
                        icon: a(931701).a
                    },
                    draft_project_plan: {
                        message: n.draftProjectPlan,
                        icon: a(636).pencilLineIcon
                    },
                    create_diagram_based_on_page: {
                        message: n.createDiagramBasedOnPage,
                        icon: a(775451).W
                    },
                    translate: {
                        message: n.translateThisPage,
                        icon: a(740902).textTranslateIcon
                    },
                    summarize: {
                        message: n.summarizeThisPage,
                        icon: a(281952).d
                    },
                    add_action_items: {
                        message: n.findActionItems,
                        icon: a(931701).a
                    },
                    brainstorm_ideas: {
                        message: n.brainstormWritingIdeas,
                        icon: a(890468).sparklesIcon
                    },
                    make_more_concise: {
                        message: n.makeMoreConcise,
                        icon: a(636).pencilLineIcon
                    },
                    create_task_tracker: {
                        message: n.createTaskTracker,
                        icon: a(853160).checkmarkCircleIcon
                    },
                    write_meeting_agenda: {
                        message: n.writeMeetingAgenda,
                        icon: a(959141).O
                    },
                    analyze_page_for_insights: {
                        message: n.analyzePageForInsights,
                        icon: a(104050).f
                    },
                    analyze_database_for_insights: {
                        message: n.analyzeDataForInsights,
                        icon: a(104050).f
                    },
                    visualize_with_a_chart: {
                        message: n.createChart,
                        icon: a(289871).q
                    },
                    filter_and_sort_data: {
                        message: n.filterAndSortData,
                        icon: a(895105).filterIcon
                    },
                    help_me_set_up_this_database: {
                        message: n.helpMeSetUpThisDatabase,
                        icon: a(829968).gearIcon
                    },
                    generate_sample_rows: {
                        message: n.generateSampleRows,
                        icon: a(848536).A
                    },
                    create_custom_agent_from_modal: {
                        message: n.createCustomAgent,
                        icon: a(890468).sparklesIcon
                    },
                    create_custom_agent_from_marketplace: {
                        message: n.createCustomAgent,
                        icon: a(890468).sparklesIcon
                    },
                    create_custom_agent: {
                        message: n.createCustomAgent,
                        icon: a(920976).F
                    },
                    create_custom_agent_from_follow_up: {
                        message: n.createCustomAgentFromFollowUp,
                        icon: a(920976).F
                    },
                    create_custom_agent_blank: {
                        message: n.createCustomAgentBlank,
                        icon: a(920976).F
                    },
                    create_database_agent: {
                        message: n.createDatabaseAgent,
                        icon: a(829968).gearIcon
                    },
                    translate_database_agent: {
                        message: n.translateDatabaseAgent,
                        icon: a(740902).textTranslateIcon
                    },
                    summarize_database_agent: {
                        message: n.summarizeDatabaseAgent,
                        icon: a(281952).d
                    },
                    help_create_database_agent_with_ai: {
                        message: n.helpCreateDatabaseAgentWithAi,
                        icon: a(829968).gearIcon
                    },
                    generate_select_options: {
                        message: n.generateSelectOptions,
                        icon: a(273344).aiFaceIcon
                    },
                    add_emoji_trigger_to_slack: {
                        message: n.addEmojiTriggerToSlack,
                        icon: a(877163).m
                    },
                    schedule_recurring_report: {
                        message: n.scheduleRecurringReport,
                        icon: a(289871).q
                    },
                    help_me_update_instructions: {
                        message: n.helpMeUpdateInstructions,
                        icon: a(636).pencilLineIcon
                    },
                    update_agent_from_template: {
                        message: n.updateAgentFromTemplate,
                        icon: a(636).pencilLineIcon
                    },
                    update_agent_template_for_slack_task_triager: {
                        message: n.updateAgentFromTemplate,
                        icon: a(636).pencilLineIcon
                    },
                    update_agent_template_for_weekly_project_update: {
                        message: n.updateAgentFromTemplate,
                        icon: a(636).pencilLineIcon
                    },
                    whats_new_in_agent: {
                        message: n.whatsNewInAgent,
                        icon: a(71282).R
                    },
                    summarize_discussions: {
                        message: n.summarizeDiscussions,
                        icon: a(799891).y
                    },
                    improve_writing: {
                        message: n.improveWriting,
                        icon: a(312528).x,
                        iconColor: "purple"
                    },
                    fix_spelling_grammar: {
                        message: n.fixSpellingGrammar,
                        icon: a(15956).checkmarkIcon,
                        iconColor: "purple"
                    },
                    make_shorter: {
                        message: n.makeShorter,
                        icon: a(327330).t,
                        iconColor: "purple"
                    },
                    explain_this: {
                        message: n.explainThis,
                        icon: a(80094).questionMarkCircleIcon,
                        iconColor: "green"
                    },
                    add_summary: {
                        message: n.addSummary,
                        icon: a(636434).P,
                        iconColor: "purple"
                    },
                    continue_writing: {
                        message: n.continueWriting,
                        icon: a(636).pencilLineIcon,
                        iconColor: "purple"
                    },
                    reformat: {
                        message: n.reformat,
                        icon: a(890468).sparklesIcon,
                        iconColor: "purple"
                    },
                    create_daily_brief: {
                        message: n.createDailyBrief,
                        icon: a(333687).Y
                    },
                    inbox_zero: {
                        message: n.inboxZero,
                        icon: a(789701).y
                    },
                    generate_image_prompt: {
                        message: n.generateImagePrompt,
                        icon: a(890468).sparklesIcon
                    },
                    image_generation_mode: {
                        message: n.imageGenerationMode,
                        icon: a(775451).W
                    },
                    test_custom_agent: {
                        message: n.testCustomAgentTrigger,
                        icon: a(877163).m,
                        iconColor: "blue"
                    },
                    update_custom_agent_with_memories: {
                        message: n.updateCustomAgentWithMemories,
                        icon: a(636).pencilLineIcon,
                        iconColor: "purple"
                    },
                    fix_custom_agent: {
                        message: n.fixCustomAgent,
                        icon: a(829968).gearIcon,
                        iconColor: "purple"
                    },
                    improve_custom_agent: {
                        message: n.fixCustomAgent,
                        icon: a(829968).gearIcon,
                        iconColor: "purple"
                    },
                    ask_ai: {
                        message: n.askAI,
                        icon: a(920976).F
                    }
                };

            function r(e) {
                return s[e]
            }

            function i({
                store: e,
                hasCollectionContent: t,
                loadAttachmentData: r,
                handlePromptSubmit: l,
                intl: c,
                enableAiImageGeneration: u,
                canShowPersonalizationSettingsModal: _,
                openFaceCustomizationModal: g,
                openCreateCustomAgentModal: m,
                isAiLandingPage: p,
                enableWhatsNewEducationAction: f,
                enableCreateCustomAgentAction: h
            }) {
                var v, y, A;
                let k, b;
                if (e instanceof a(360851).N) return function({
                    handlePromptSubmit: e,
                    intl: t
                }) {
                    return [{
                        message: n.addEmojiTriggerToSlack,
                        icon: a(877163).m,
                        prebuiltPromptType: "add_emoji_trigger_to_slack"
                    }, {
                        message: n.scheduleRecurringReport,
                        icon: a(998172).D,
                        prebuiltPromptType: "schedule_recurring_report"
                    }, {
                        message: n.helpMeUpdateInstructions,
                        icon: a(636).pencilLineIcon,
                        prebuiltPromptType: "help_me_update_instructions"
                    }].map(({
                        message: a,
                        icon: n,
                        prebuiltPromptType: s
                    }) => {
                        let r = t.formatMessage(a);
                        return {
                            type: s,
                            suggestedAction: r,
                            icon: n,
                            handleClick: () => e({
                                text: r,
                                prebuiltPromptType: s
                            })
                        }
                    })
                }({
                    handlePromptSubmit: l,
                    intl: c
                });
                let S = (p ? function({
                    enableCreateCustomAgentAction: e
                }) {
                    let t = a(218744).default.checkGate({
                        gateName: "inbox_zero_skill"
                    });
                    return e ? ["create_custom_agent", "whats_new_in_agent", "write_meeting_agenda", t ? "inbox_zero" : "load_attachment"] : ["whats_new_in_agent", "write_meeting_agenda", t ? "inbox_zero" : "load_attachment", "create_task_tracker"]
                }({
                    enableCreateCustomAgentAction: h
                }) : null != e && e.isCollectionView() ? function({
                    hasCollectionContent: e,
                    enableCreateCustomAgentAction: t
                }) {
                    return e ? t ? ["create_custom_agent", "analyze_database_for_insights", "visualize_with_a_chart", "filter_and_sort_data"] : ["search", "analyze_database_for_insights", "visualize_with_a_chart", "filter_and_sort_data"] : t ? ["create_custom_agent", "search", "help_me_set_up_this_database", "generate_sample_rows"] : ["search", "load_attachment", "help_me_set_up_this_database", "generate_sample_rows"]
                }({
                    hasCollectionContent: t,
                    enableCreateCustomAgentAction: h
                }) : function({
                    pageStore: e,
                    enableCreateCustomAgentAction: t,
                    enableAiImageGeneration: a
                }) {
                    var n;
                    return void 0 !== (n = e) && d(n) > 0 ? t ? a ? ["create_custom_agent", "create_diagram_based_on_page", "summarize", "summarize_discussions"] : ["create_custom_agent", "summarize", "summarize_discussions", "translate"] : a ? ["create_diagram_based_on_page", "summarize", "summarize_discussions", "create_task_tracker"] : ["summarize", "summarize_discussions", "translate", "create_task_tracker"] : function(e) {
                        if (void 0 === e || e.isType("personal_home_page")) return !1;
                        let t = e.getContentStores();
                        return 0 !== t.length && t.some(e => !e.isEmptyTitle() || e.hasContent())
                    }(e) ? t ? a ? ["create_custom_agent", "create_diagram_based_on_page", "summarize", "analyze_page_for_insights"] : ["create_custom_agent", "summarize", "translate", "analyze_page_for_insights"] : a ? ["create_diagram_based_on_page", "summarize", "analyze_page_for_insights", "create_task_tracker"] : ["summarize", "translate", "analyze_page_for_insights", "create_task_tracker"] : t ? ["create_custom_agent", "search", "write_meeting_agenda", "load_attachment"] : ["search", "write_meeting_agenda", "load_attachment", "create_task_tracker"]
                }({
                    pageStore: e,
                    enableCreateCustomAgentAction: h,
                    enableAiImageGeneration: u
                })).map(e => {
                    if ("load_attachment" === e) return function({
                        loadAttachmentData: e,
                        intl: t
                    }) {
                        return e ? {
                            type: "load_attachment",
                            suggestedAction: t.formatMessage(n.analyzePdfsOrImages),
                            icon: function(e) {
                                switch (e.id) {
                                    case "AgentSuggestedActions.analyzePdfsOrImages":
                                        return a(127201).U;
                                    case "AgentSuggestedActions.summarizeThisPage":
                                    default:
                                        return a(281952).d;
                                    case "AgentSuggestedActions.findActionItems":
                                        return a(931701).a;
                                    case "AgentSuggestedActions.makeMoreConcise":
                                    case "AgentSuggestedActions.helpMeUpdateInstructions":
                                        return a(636).pencilLineIcon;
                                    case "AgentSuggestedActions.makeShorter":
                                        return a(327330).t;
                                    case "AgentSuggestedActions.createTaskTracker":
                                        return a(853160).checkmarkCircleIcon;
                                    case "AgentSuggestedActions.brainstormWritingIdeas":
                                        return a(890468).sparklesIcon;
                                    case "AgentSuggestedActions.writeMeetingAgenda":
                                        return a(959141).O;
                                    case "AgentSuggestedActions.analyzeDataForInsights":
                                        return a(104050).f;
                                    case "AgentSuggestedActions.createChart":
                                        return a(289871).q;
                                    case "AgentSuggestedActions.enrichWithWebSearch":
                                        return a(6260).Z;
                                    case "AgentSuggestedActions.filterAndSortData":
                                        return a(895105).filterIcon;
                                    case "AgentSuggestedActions.helpMeSetUpThisDatabase":
                                        return a(829968).gearIcon;
                                    case "AgentSuggestedActions.generateSampleRows":
                                        return a(848536).A;
                                    case "AgentSuggestedActions.customizeDatabaseViews":
                                        return a(518630).T;
                                    case "AgentSuggestedActions.addEmojiTriggerToSlack":
                                        return a(877163).m;
                                    case "AgentSuggestedActions.scheduleRecurringReport":
                                        return a(998172).D
                                }
                            }(n.analyzePdfsOrImages),
                            handleClick: () => {
                                e.uploadFiles()
                            }
                        } : void 0
                    }({
                        loadAttachmentData: r,
                        intl: c
                    });
                    let {
                        message: t,
                        icon: i
                    } = s[e], d = c.formatMessage(t);
                    return "create_custom_agent" === e && m ? {
                        type: e,
                        suggestedAction: d,
                        icon: i,
                        handleClick: m,
                        isNew: o(e)
                    } : {
                        type: e,
                        suggestedAction: d,
                        icon: i,
                        handleClick: () => l({
                            text: d,
                            prebuiltPromptType: e
                        }),
                        isNew: o(e)
                    }
                }).filter(a(722371).O9);
                if (!p && _ && g && !((null == (b = null == (k = a(728372).AppStoreSidebarSpaceViewStore.state) || null == (v = k.getSettings()) ? void 0 : v.agent_personalization_settings) ? void 0 : b.name) || (null == b || null == (y = b.customization_items) ? void 0 : y.length)) && S.length > 0) {
                    let e = null == (A = S[0]) ? void 0 : A.type;
                    if (S[0] = {
                            type: "change_my_look",
                            suggestedAction: c.formatMessage(n.personalizeYourNotionAI),
                            icon: a(895578).L,
                            handleClick: g
                        }, u && "create_diagram_based_on_page" === e && S.length > 1) {
                        let {
                            message: e,
                            icon: t
                        } = s.create_diagram_based_on_page, a = c.formatMessage(e);
                        S[1] = {
                            type: "create_diagram_based_on_page",
                            suggestedAction: a,
                            icon: t,
                            handleClick: () => l({
                                text: a,
                                prebuiltPromptType: "create_diagram_based_on_page"
                            }),
                            isNew: o("create_diagram_based_on_page")
                        }
                    }
                }
                if (!p && f && S.length > 0) {
                    let {
                        message: e,
                        icon: t
                    } = s.whats_new_in_agent, a = c.formatMessage(e), n = {
                        type: "whats_new_in_agent",
                        suggestedAction: a,
                        icon: t,
                        handleClick: () => l({
                            text: a,
                            prebuiltPromptType: "whats_new_in_agent"
                        }),
                        isNew: o("whats_new_in_agent")
                    };
                    S[S.length - 1] = n
                }
                return S
            }

            function o(e) {
                switch (e) {
                    case "create_custom_agent":
                    case "create_diagram_based_on_page":
                        return !0;
                    case "create_task_tracker":
                    case "analyze_page_for_insights":
                    case "analyze_database_for_insights":
                    case "visualize_with_a_chart":
                    case "filter_and_sort_data":
                    case "help_me_set_up_this_database":
                    case "generate_sample_rows":
                    case "summarize_current_projects":
                    case "plan_a_trip":
                    case "draft_project_plan":
                    case "whats_new_in_agent":
                    case "summarize_discussions":
                    case "make_shorter":
                    case "search":
                    case "summarize":
                    case "translate":
                    case "add_action_items":
                    case "brainstorm_ideas":
                    case "make_more_concise":
                    case "write_meeting_agenda":
                    case "load_attachment":
                    case "create_custom_agent_from_modal":
                    case "create_custom_agent_from_follow_up":
                    case "create_custom_agent_blank":
                    case "create_custom_agent_from_marketplace":
                    case "add_emoji_trigger_to_slack":
                    case "schedule_recurring_report":
                    case "help_me_update_instructions":
                    case "update_agent_from_template":
                    case "update_agent_template_for_slack_task_triager":
                    case "update_agent_template_for_weekly_project_update":
                    case "update_custom_agent_with_memories":
                    case "improve_writing":
                    case "fix_spelling_grammar":
                    case "explain_this":
                    case "add_summary":
                    case "continue_writing":
                    case "reformat":
                    case "create_daily_brief":
                    case "inbox_zero":
                    case "create_database_agent":
                    case "translate_database_agent":
                    case "summarize_database_agent":
                    case "help_create_database_agent_with_ai":
                    case "generate_select_options":
                    case "generate_image_prompt":
                    case "image_generation_mode":
                    case "test_custom_agent":
                    case "fix_custom_agent":
                    case "improve_custom_agent":
                    case "ask_ai":
                        return !1;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function d(e) {
                return void 0 === e ? 0 : a(966980).Bw(e, {
                    recursivelyLoadAllDiscussions: !0
                }).filter(e => !e.getResolved()).length
            }
        },
        596041: (e, t, a) => {
            a.d(t, {
                S: () => i
            }), a(944114), a(581454);
            var n = () => a(722371);

            function s(e) {
                var t, a;
                return {
                    score: e.score,
                    cohereRelevanceScoreForRanking: null == (t = e.metadata) ? void 0 : t.cohereRelevanceScoreForRanking,
                    isPrimarySource: null == (a = e.metadata) ? void 0 : a.isPrimarySource
                }
            }

            function r(e) {
                if (!e) return [];
                let t = [];
                for (let a of e)
                    for (let [e, r] of (0, n().WP)(a))
                        if (r)
                            if ("notion" === e)
                                for (let e of r)("page" === e.result.type || "properties" === e.result.type || "block" === e.result.type) && t.push({
                                    searchSourceType: "notion",
                                    id: e.result.id,
                                    score: e.result.score,
                                    isUser: !1,
                                    ...s(e.result)
                                });
                            else if ("webpage" === e)
                    for (let e of r) "webpage" === e.result.type && t.push({
                        searchSourceType: "webpage",
                        id: e.result.id,
                        title: e.result.title,
                        score: e.result.score,
                        lastEdited: e.result.lastEdited,
                        ...s(e.result)
                    });
                else if ("slack" === e) {
                    for (let e of r)
                        if ("slack" === e.result.type) {
                            let a = {
                                searchSourceType: "slack",
                                id: e.result.id,
                                channel: e.result.channel,
                                text: e.result.text,
                                title: e.result.title,
                                score: e.result.score,
                                lastEdited: e.result.lastEdited,
                                ...s(e.result)
                            };
                            t.push(a), e.result.messages && t.push(...e.result.messages.map(e => ({ ...a,
                                id: e.messageId,
                                text: e.text
                            })))
                        }
                } else if ("gmail" === e)
                    for (let e of r) "gmail" === e.result.type && t.push({
                        searchSourceType: "gmail",
                        id: e.result.id,
                        title: e.result.title,
                        path: e.result.path,
                        lastEdited: e.result.lastEdited,
                        score: e.result.score,
                        ...s(e.result)
                    });
                else if ("salesforce" === e)
                    for (let e of r) "salesforce" === e.result.type && t.push({
                        searchSourceType: "salesforce",
                        id: e.result.id,
                        title: e.result.title,
                        path: e.result.path,
                        lastEdited: e.result.lastEdited,
                        objectType: e.result.objectType ? ? "",
                        score: e.result.score,
                        ...s(e.result)
                    });
                else
                    for (let a of r) "page" !== a.result.type && "properties" !== a.result.type && "block" !== a.result.type && "webpage" !== a.result.type && "gmail" !== a.result.type && "slack" !== a.result.type && "salesforce" !== a.result.type && t.push({
                        searchSourceType: e,
                        id: a.result.id,
                        title: a.result.title,
                        path: a.result.path,
                        score: a.result.score,
                        lastEdited: a.result.lastEdited,
                        ...s(a.result)
                    });
                return t
            }

            function i(e) {
                let {
                    webResults: t,
                    userResults: n,
                    internalResults: i,
                    defaultResults: o
                } = e, d = [...t ? t.flat().map(e => ({
                    searchSourceType: "webpage",
                    id: e.id,
                    title: e.title,
                    score: e.score,
                    lastEdited: e.lastEdited,
                    ...s(e)
                })) : [], ...r(i), ...r(o), ...n ? n.flat().map(e => ({
                    searchSourceType: "notion",
                    id: e.id,
                    score: void 0,
                    isUser: !0
                })) : []];
                return a(381453).hS(d, e => e.id)
            }
        },
        646440: (e, t, a) => {
            function n(e) {
                return e.table === a(43296).C ? e : void 0
            }

            function s(e) {
                var t;
                return (null == (t = e.getModel()) ? void 0 : t.getData()) || (0, a(425749).bZ)()
            }

            function r(e) {
                let {
                    workflowPointer: t,
                    threadPointer: a
                } = e, n = t ? ? a;
                if (!n) throw Error("No workflow definition pointer found");
                return n
            }

            function i(e) {
                switch (e.table) {
                    case "workflow":
                        return e.id;
                    case "workflow_artifact":
                        return e.getParentId();
                    case "thread":
                        let t = e.getConfig();
                        return (null == t ? void 0 : t.type) === "workflow" ? t.workflowId : void 0;
                    default:
                        (0, a(722371).HB)(e)
                }
            }

            function o(e) {
                var t, n;
                let s;
                switch (e.table) {
                    case a(581654).U6:
                        s = null == (t = e.getData()) ? void 0 : t.runtime_actor_pointer;
                        break;
                    case a(43296).C:
                        s = null == (n = e.getPublishedArtifactStore()) || null == (n = n.getData()) ? void 0 : n.runtime_actor_pointer;
                        break;
                    default:
                        (0, a(722371).HB)(e)
                }
                if (s && s.table === a(890920).GP) return s.id
            }
            a.r(t), a.d(t, {
                getBotIdFromStore: () => o,
                getWorkflowDefinitionPointer: () => r,
                getWorkflowIdFromStore: () => i,
                getWorkflowValue: () => s,
                maybeWorkflowStore: () => n
            }), a(16280)
        },
        895578: (e, t, a) => {
            a.d(t, {
                L: () => r
            }), a(296540);
            var n = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M8.04761 1.40332L8.29565 1.41797C9.5354 1.51917 10.7877 2.05748 11.5691 3.03418C12.4248 4.10414 12.576 5.59336 12.2527 6.84082C12.1648 7.17964 12.0368 7.51547 11.8699 7.83496C12.4573 7.95393 13.014 8.1496 13.5232 8.44336C14.1514 8.80586 14.6705 9.29599 15.0779 9.90723C15.4453 9.55352 15.8874 9.31134 16.3923 9.24805H16.3933C17.0674 9.16392 17.7001 9.43393 18.1248 9.95508C18.5282 10.4502 18.698 11.1051 18.698 11.79C18.698 12.8535 18.6409 14.7357 17.2517 16.2207C15.8442 17.7246 13.3476 18.5467 9.17065 18.2373C7.03585 18.0791 5.40971 17.5784 4.25854 16.792C3.08147 15.9878 2.43669 14.9037 2.28296 13.7256C2.05362 11.9659 2.93173 10.2243 4.21851 9.04883C3.75332 9.08904 3.22319 9.06701 2.60327 9.00293H2.60229C2.07328 8.94808 1.55858 8.78222 1.15112 8.47656L0.983154 8.33691C0.529882 7.91784 0.255671 7.2623 0.478271 6.55469C0.679436 5.91656 1.20941 5.4862 1.77222 5.2207C2.19407 5.0218 2.70477 4.87921 3.29761 4.79395C3.48184 4.15662 3.79961 3.54947 4.24194 3.01855C5.2426 1.81786 6.70976 1.35719 8.04761 1.40332Z",
                            fill: "white",
                            stroke: "white",
                            strokeWidth: "1.2"
                        }), (0, n.jsx)("path", {
                            d: "M2.71145 7.95867C0.896282 7.771 0.784523 5.97447 4.07815 5.7696C4.79543 6.02556 6.62315 6.09221 5.94924 6.85552C5.10685 7.80966 4.8839 8.18328 2.71145 7.95867Z",
                            fill: "white",
                            stroke: "black",
                            strokeWidth: "1"
                        }), (0, n.jsx)("path", {
                            d: "M9.24829 17.1903C1.14829 16.5903 2.64829 10.8903 5.94829 9.09026C3.84832 7.89022 3.66342 5.35224 5.04832 3.69029C6.54832 1.89022 9.54832 2.19024 10.7483 3.69024C11.9483 5.19024 11.3483 8.19021 9.24829 8.79026C12.2483 8.49026 14.3483 9.39026 14.9483 12.3903C15.5483 9.69026 17.6483 9.69019 17.6483 11.7902C17.6483 13.8902 17.3483 17.7903 9.24829 17.1903Z",
                            fill: "#FFB110",
                            stroke: "black",
                            strokeWidth: "1",
                            strokeLinejoin: "round"
                        }), (0, n.jsx)("path", {
                            d: "M5.76867 6.1671C5.52984 5.87387 5.90069 4.67884 6.46816 5.14099C7.11453 5.6674 6.37472 6.91121 5.76867 6.1671Z",
                            fill: "black"
                        })]
                    })
                },
                r = (0, a(104509).wt)("duck", s, "default")
        },
        959141: (e, t, a) => {
            a.d(t, {
                O: () => r
            }), a(296540);
            var n = a(474848);
            let s = {
                    viewBox: "0 0 20 20",
                    fittedViewBox: "0.73 3.36 18.53 13.28",
                    svg: (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("path", {
                            d: "M13.004 6.123a3.588 3.588 0 0 1 6.175.032.624.624 0 1 1-1.079.63 2.338 2.338 0 0 0-4.024-.02L9.264 14.8l3.682.596a.626.626 0 0 1-.2 1.235l-4.591-.744a.625.625 0 0 1-.436-.939zm-8.269 6.688a.625.625 0 1 1 0 1.25H1.36a.625.625 0 0 1 0-1.25zM6.079 9.53a.625.625 0 0 1 0 1.25H1.36a.625.625 0 0 1 0-1.25z"
                        }), (0, n.jsx)("path", {
                            d: "M14.146 8.918a1.061 1.061 0 1 1 2.095.34 1.061 1.061 0 0 1-2.095-.34m-5.59-.906a1.061 1.061 0 1 1 2.095.34 1.061 1.061 0 0 1-2.095-.34M5.235 6.249a.625.625 0 1 1 0 1.25H1.36a.625.625 0 0 1 0-1.25zm2.188-1.974a3.59 3.59 0 0 1 5.104.325.625.625 0 0 1-.944.82 2.34 2.34 0 0 0-3.326-.213.625.625 0 0 1-.834-.932"
                        })]
                    })
                },
                r = (0, a(104509).wt)("aiDescription", s, "default")
        }
    }
]);