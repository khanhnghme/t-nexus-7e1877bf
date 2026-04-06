"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [57688], {
        10779: (e, t, r) => {
            function n(e) {
                return e.trim().replaceAll("\\", "/")
            }

            function i(e) {
                let t = n(e);
                if (0 === t.length || t.startsWith("/") || t.endsWith("/")) return !1;
                let r = t.split("/");
                if (r.length < 2 || r.some(e => 0 === e.length || "." === e) || r.some(e => ".." === e)) return !1;
                let i = r.at(-1);
                return !!i && i.endsWith(".md")
            }
            r.d(t, {
                I: () => n,
                N: () => i
            }), r(18107), r(967357), r(898992), r(737550)
        },
        60123: (e, t, r) => {
            function n(e) {
                if (!e) return !1;
                let t = e.getPermissionItems();
                return !!t && !(t.length <= 1)
            }

            function i(e) {
                let t = new Set;
                for (let r of e)
                    if ("user" === r.type && r.userId && (t.add(r.userId), t.size >= 2)) return !0;
                return !1
            }
            r.d(t, {
                L: () => i,
                T: () => n
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698)
        },
        168682: (e, t, r) => {
            r.d(t, {
                M: () => n
            });

            function n(e) {
                let {
                    saveUserPreference: t
                } = e, n = e.chatPanelMode;
                r(825244).P.setState(!1), r(562733).zI.setState({ ...r(562733).zI.state,
                    chatPanelMode: n
                });
                let i = (0, r(828560).hw)();
                !i || "sidebar" !== n || i || (0, r(712358).K)(e.environment) || (0, r(16822).h)({
                    environment: e.environment,
                    isExpanded: !0,
                    from: "slippery_slope_mode_switch",
                    saveDetailsSidebarPreference: !1
                }), t && (0, r(181347).oc)({
                    chatPanelMode: n
                }), e.trackAnalytics && (async () => {
                    try {
                        (await Promise.all([r.e(36556), r.e(55373), r.e(36192), r.e(40994), r.e(57042), r.e(54280), r.e(16712), r.e(93186), r.e(80139), r.e(67542), r.e(15389), r.e(97732), r.e(53050), r.e(87353), r.e(5721), r.e(64696), r.e(94495)]).then(r.bind(r, 305721))).trackAgentToggleChatMode({
                            environment: e.environment,
                            chatMode: n
                        })
                    } catch (e) {}
                })()
            }
        },
        181347: (e, t, r) => {
            r.d(t, {
                oc: () => o,
                yr: () => s
            });
            let n = r(969475).union([r(969475).literal("sidebar"), r(969475).literal("popup")]),
                i = r(969475).object({
                    required: {},
                    optional: {
                        chatPanelMode: n
                    }
                }),
                a = {
                    chatPanelMode: "popup"
                };

            function s() {
                return (0, r(682985).K8)(() => {
                    var e;
                    let t;
                    return e = r(562733).mx.getState(), t = (0, r(358519).Qq)(i, e) ? ? {}, { ...a,
                        ...t
                    }
                }, [])
            }

            function o(e) {
                let t = r(562733).mx.getState() ? ? {};
                r(562733).mx.setState({ ...t,
                    ...e
                })
            }
        },
        274498: (e, t, r) => {
            function n(e) {
                return e.filter(e => "researcher-agent" === e.type).length
            }

            function i(e) {
                return e.filter(e => "researcher-next-steps" === e.type).length
            }

            function a(e) {
                let {
                    threadId: t,
                    traceId: n,
                    isFollowUp: i,
                    searchSources: a,
                    searchScopeType: s
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_start_turn",
                        eventProperties: {
                            thread_id: t,
                            trace_id: n,
                            is_follow_up: i,
                            search_sources: a,
                            search_scope_type: s
                        }
                    }
                })
            }

            function s(e) {
                let {
                    threadId: t,
                    traceId: n,
                    isFollowUp: i,
                    isError: a,
                    numSearchResults: s,
                    numCitationsShown: o,
                    resultsBySource: l,
                    citationsBySource: c,
                    stepsGenerated: u,
                    planningRounds: d,
                    searchSources: p,
                    searchScopeType: h
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_end_turn",
                        eventProperties: {
                            thread_id: t,
                            trace_id: n,
                            is_follow_up: i,
                            is_error: a,
                            num_search_results: s,
                            num_citations_shown: o,
                            results_by_source: l,
                            citations_by_source: c,
                            steps_generated: u,
                            planning_rounds: d,
                            search_sources: p,
                            search_scope_type: h
                        }
                    }
                })
            }

            function o(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_start",
                        eventProperties: {
                            query_length: e.queryLength,
                            query_words: e.queryWords,
                            search_session_id: e.searchSessionId,
                            qna_session_id: e.qnaSessionId,
                            research_mode_thread_id: e.researchModeThreadId,
                            source: e.source,
                            source_event_id: e.sourceEventId,
                            suggested_query: e.suggestedQuery,
                            attachment_count: e.attachmentCount ? ? 0
                        }
                    }
                })
            }

            function l(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_step_expanded",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function c(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_step_collapsed",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function u(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_report_first_char_rendered",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function d(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_report_last_char_rendered",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function p(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_report_copied",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function h(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_report_saved_to_page",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId
                        }
                    }
                })
            }

            function f(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "research_mode_report_visited",
                        eventProperties: {
                            research_mode_thread_id: e.researchModeThreadId,
                            source: e.source
                        }
                    }
                })
            }
            r.d(t, {
                Bg: () => a,
                MU: () => f,
                Rk: () => l,
                Yh: () => n,
                ay: () => i,
                g$: () => s,
                hK: () => c,
                nM: () => u,
                q0: () => p,
                tK: () => h,
                uH: () => o,
                zJ: () => d
            }), r(898992), r(354520)
        },
        313845: (e, t, r) => {
            r.d(t, {
                K7: () => c,
                Rh: () => u,
                xZ: () => l
            }), r(944114), r(898992), r(672577), r(581454), r(737550);
            var n = () => r(138798),
                i = () => r(381453),
                a = () => r(421439);

            function s(e) {
                let {
                    environment: t,
                    threadStore: n,
                    transaction: i
                } = e, a = Date.now();
                t.currentUser.id && (0, r(173157).z)({
                    store: n,
                    data: {
                        updated_time: a,
                        updated_by_id: t.currentUser.id,
                        updated_by_table: r(832375).oo9
                    },
                    transaction: i
                })
            }

            function o(e) {
                let {
                    environment: t,
                    threadStore: r,
                    transaction: o,
                    permissionItems: l
                } = e, c = r.getPermissionItems(), u = 0 === c.length ? function(e) {
                    let {
                        environment: t,
                        permissionItems: r
                    } = e, n = t.currentUser.id;
                    return !n || r.some(e => "user_permission" === e.type && e.user_id === n) ? r : [{
                        type: "user_permission",
                        role: "editor",
                        user_id: n
                    }, ...r]
                }({
                    environment: t,
                    permissionItems: l
                }) : l, d = function(e) {
                    let {
                        oldItems: t,
                        newItems: r
                    } = e, a = [];
                    for (let e of r) {
                        let r = t.find(t => (0, n().nK)(t, e));
                        r && (0, i().n4)(r, e) || a.push(e)
                    }
                    return a
                }({
                    oldItems: c,
                    newItems: u
                });
                0 !== d.length && (! function(e) {
                    let {
                        threadStore: t,
                        transaction: r,
                        updates: n
                    } = e, i = t.getPermissionsStore();
                    for (let e of n)(0, a().y4)({
                        store: i,
                        operation: {
                            pointer: i.pointer,
                            command: "setPermissionItem",
                            path: i.path,
                            args: e
                        },
                        transaction: r
                    })
                }({
                    threadStore: r,
                    transaction: o,
                    updates: d
                }), s({
                    environment: t,
                    threadStore: r,
                    transaction: o
                }))
            }

            function l(e) {
                let {
                    environment: t,
                    threadStore: r,
                    transaction: n,
                    permissionItem: i
                } = e, o = r.getPermissionsStore();
                (0, a().y4)({
                    store: o,
                    transaction: n,
                    operation: {
                        pointer: o.pointer,
                        path: o.path,
                        command: "setPermissionItem",
                        args: i
                    }
                }), s({
                    environment: t,
                    threadStore: r,
                    transaction: n
                })
            }

            function c(e) {
                let {
                    environment: t,
                    threadStore: r,
                    transaction: n,
                    userIds: i,
                    role: a
                } = e;
                o({
                    environment: t,
                    threadStore: r,
                    transaction: n,
                    permissionItems: i.map(e => ({
                        type: "user_permission",
                        role: a,
                        user_id: e
                    }))
                })
            }

            function u(e) {
                let {
                    environment: t,
                    threadStore: r,
                    transaction: n,
                    currentOwnerId: i,
                    newOwnerId: a
                } = e;
                o({
                    environment: t,
                    threadStore: r,
                    transaction: n,
                    permissionItems: [{
                        type: "user_permission",
                        role: "none",
                        user_id: i
                    }, {
                        type: "user_permission",
                        role: "editor",
                        user_id: a
                    }, {
                        type: "user_permission",
                        role: "read_and_write",
                        user_id: i
                    }]
                })
            }
        },
        316258: (e, t, r) => {
            r.d(t, {
                Ui: () => c,
                hP: () => x,
                jw: () => M,
                wy: () => P
            }), r(16280);
            var n = r(296540),
                i = r(474848);
            let a = {
                    fullPage: !0,
                    mobileNative: !0,
                    mobileWeb: !0,
                    commandSearch: !0,
                    mobileNativeTab: !0,
                    searchPane: !0,
                    mobileSearch: !1,
                    writer: !1,
                    corner: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !1
                },
                s = {
                    fullPage: !0,
                    mobileNative: !0,
                    mobileWeb: !0,
                    mobileNativeTab: !0,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileSearch: !1,
                    writer: !1,
                    corner: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !1
                },
                o = {
                    mobileNative: !0,
                    mobileWeb: !0,
                    mobileSearch: !0,
                    mobileWriter: !0,
                    mobileNativeTab: !0,
                    fullPage: !1,
                    writer: !1,
                    corner: !1,
                    searchPane: !1,
                    commandSearch: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !1
                },
                l = {
                    writer: !0,
                    mobileWriter: !0,
                    mobileWeb: !1,
                    mobileNative: !1,
                    mobileSearch: !1,
                    fullPage: !1,
                    corner: !1,
                    searchPane: !1,
                    commandSearch: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                };

            function c(e) {
                return l[e]
            }
            let u = {
                    corner: !0,
                    searchPane: !0,
                    fullPage: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    commandSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                d = {
                    corner: !0,
                    searchPane: !0,
                    fullPage: !0,
                    mobileNative: !0,
                    mobileWeb: !0,
                    mobileSearch: !0,
                    commandSearch: !0,
                    mobileNativeTab: !0,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !1
                },
                p = {
                    corner: !0,
                    searchPane: !0,
                    fullPage: !0,
                    mobileNative: !0,
                    mobileNativeTab: !0,
                    commandSearch: !0,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !0
                },
                h = {
                    corner: !0,
                    searchPane: !0,
                    fullPage: !0,
                    commandSearch: !0,
                    writer: !0,
                    mobileWriter: !0,
                    workflowEditor: !0,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                f = {
                    corner: !0,
                    searchPane: !0,
                    commandSearch: !0,
                    mobileNative: !0,
                    mobileSearch: !0,
                    mobileWeb: !0,
                    writer: !1,
                    fullPage: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                m = {
                    corner: !0,
                    writer: !0,
                    mobileWriter: !0,
                    fullPage: !1,
                    searchPane: !1,
                    commandSearch: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                g = {
                    corner: !0,
                    fullPage: !0,
                    searchPane: !0,
                    mobileNative: !0,
                    mobileNativeTab: !0,
                    commandSearch: !0,
                    mobileWeb: !0,
                    mobileSearch: !0,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    inferenceTranscriptChatView: !1
                },
                _ = {
                    corner: !0,
                    fullPage: !0,
                    searchPane: !1,
                    mobileNative: !1,
                    commandSearch: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                v = {
                    corner: !0,
                    fullPage: !0,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                y = {
                    fullPage: !0,
                    writer: !0,
                    corner: !0,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                S = {
                    corner: !0,
                    fullPage: !1,
                    writer: !1,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                w = {
                    fullPage: !0,
                    writer: !1,
                    corner: !1,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                b = {
                    writer: !0,
                    fullPage: !1,
                    corner: !1,
                    commandSearch: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                I = {
                    corner: !0,
                    fullPage: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    commandSearch: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                k = {
                    corner: !0,
                    fullPage: !0,
                    searchPane: !1,
                    mobileNative: !1,
                    commandSearch: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                T = {
                    fullPage: !0,
                    corner: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    commandSearch: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                C = {
                    fullPage: !0,
                    corner: !1,
                    searchPane: !1,
                    mobileNative: !1,
                    commandSearch: !1,
                    mobileWeb: !1,
                    mobileSearch: !1,
                    writer: !1,
                    mobileWriter: !1,
                    workflowEditor: !1,
                    mobileNativeTab: !1,
                    inferenceTranscriptChatView: !1
                },
                A = {
                    commandSearch: !1,
                    searchPane: !1,
                    fullPage: !0,
                    writer: !0,
                    corner: !0,
                    mobileNative: !0,
                    mobileWeb: !0,
                    mobileSearch: !0,
                    mobileWriter: !0,
                    workflowEditor: !0,
                    mobileNativeTab: !0,
                    inferenceTranscriptChatView: !0
                };
            class P {
                constructor(e) {
                    this.type = e
                }
                static fullPage = new P("fullPage");
                static corner = new P("corner");
                static searchPane = new P("searchPane");
                static commandSearch = new P("commandSearch");
                static mobileNative = new P("mobileNative");
                static mobileNativeTab = new P("mobileNativeTab");
                static writer = new P("writer");
                static mobileWeb = new P("mobileWeb");
                static mobileSearch = new P("mobileSearch");
                static mobileWriter = new P("mobileWriter");
                static workflowEditor = new P("workflowEditor");
                static inferenceTranscriptChatView = new P("inferenceTranscriptChatView");
                get renderAsFullPage() {
                    return a[this.type]
                }
                get renderChatHistoryAsFullPage() {
                    return s[this.type]
                }
                get isCommandSearchOrSearchPane() {
                    return this.isType("commandSearch") || this.isType("searchPane")
                }
                get isQuickSearchMode() {
                    return this.isType("commandSearch")
                }
                get isMobile() {
                    return o[this.type]
                }
                get isWriter() {
                    return l[this.type]
                }
                isType(...e) {
                    return e.includes(this.type)
                }
                get shouldShowExpandToFullPageChat() {
                    return u[this.type]
                }
                get isValidSurfaceForAttachmentUploads() {
                    return p[this.type]
                }
                get shouldShowChatHistory() {
                    return d[this.type]
                }
                get canUseCurrentPageContext() {
                    return h[this.type]
                }
                get showCloseButton() {
                    return f[this.type]
                }
                get surfaceSupportsContextWithSelection() {
                    return m[this.type]
                }
                get surfaceSupportsParameterization() {
                    return g[this.type]
                }
                get surfaceSupportsTutorialAction() {
                    return _[this.type]
                }
                get surfaceSupportsShareAnswerAction() {
                    return v[this.type]
                }
                get canShowNewChonkifiedInput() {
                    return y[this.type]
                }
                canShowSessionStarterInContext(e) {
                    return P[e.from].isWriter === this.isWriter
                }
                get canUseUpdatedSkillDisplayFormat() {
                    return I[this.type]
                }
                get canUseGetAiConnectorScopeMenuFooter() {
                    return k[this.type]
                }
                get canShowNewFullPageWelcomeState() {
                    return w[this.type]
                }
                get canShowNewWriterDesign() {
                    return b[this.type]
                }
                get canShowNewCornerChatWelcomeState() {
                    return S[this.type]
                }
                get supportsStartingNewChatAsInferenceTranscript() {
                    return T[this.type]
                }
                get supportsChatHistoryWithInferenceTranscripts() {
                    return C[this.type]
                }
                get shouldOpenAssistantMenuOnRestoreChatSession() {
                    return A[this.type]
                }
            }
            let N = n.createContext(void 0);

            function x(e) {
                return (0, i.jsx)(N.Provider, {
                    value: e.surface,
                    children: e.children
                })
            }

            function M() {
                let e = n.useContext(N);
                return e || P.corner
            }
            N.displayName = "AssistantSurfaceContext"
        },
        422052: (e, t, r) => {
            function n(e, t) {
                let {
                    sessionId: n,
                    startTimestamp: i,
                    transcript: a,
                    hasQuery: s,
                    searchSessionId: o,
                    from: l,
                    isReminder: c,
                    reminderType: u
                } = t, d = r(886556).z.isXMLAssistantEnabled(), p = r(886556).z.isLimitedQnaMode();
                d ? (0, r(104310).u)({
                    event: {
                        eventName: "assistant_open",
                        eventProperties: {
                            qna_session_id: n,
                            has_query: s,
                            search_session_id: o,
                            is_limited_qna_session: p,
                            from: l,
                            is_reminder: c,
                            reminder_type: u
                        }
                    }
                }) : (0, r(104310).u)({
                    event: {
                        eventName: "qna_open",
                        eventProperties: {
                            qna_session_id: n,
                            has_query: s,
                            search_session_id: o,
                            is_limited_qna_session: p,
                            from: l,
                            is_reminder: c,
                            reminder_type: u
                        }
                    }
                }), r(707964).u4({
                    name: d ? "assistant_open" : "qna_open",
                    args: {
                        qna_session_id: n,
                        from: l,
                        duration: Date.now() - i,
                        questions_asked_in_session: a.filter(e => "human" === e.type).length ? ? 0,
                        is_reminder: c,
                        reminder_type: u,
                        is_limited_qna_session: p
                    }
                });
                let h = (0, r(328765).S)(),
                    f = !!(h && (0, r(471078).O)({
                        environment: e,
                        spaceId: h.id
                    })),
                    m = (0, r(630131).Y)(e, {
                        spaceId: null == h ? void 0 : h.id,
                        userId: e.currentUser.id,
                        name: "ai_connectors"
                    }) ? ? !1;
                h && !c && r(886556).z.isAudienceForAiConnectorSprigSurvey({
                    hasAiConnectorFeature: m,
                    isSpaceAdmin: h.canAdmin(),
                    isMultiplayerWorkspace: f,
                    qnaConnectionStoreStates: {
                        slackUniversalQnAConnectionStoreState: r(32913).Rh.state,
                        githubAIConnectorStoreState: r(314365).o.state,
                        jiraAIConnectionStoreState: r(329488).yg.state,
                        linearAIConnectorStoreState: r(368381).W.state
                    }
                }) && r(707964).u4({
                    name: "assistant_open_and_in_ai_connector_sprig_audience",
                    args: {
                        qna_session_id: n,
                        from: l
                    }
                })
            }

            function i(e) {
                let {
                    sessionContext: t,
                    from: n
                } = e, i = null == t ? void 0 : t.assistantConfigurationStoreState, a = r(886556).z.isXMLAssistantEnabled(), s = r(886556).z.isLimitedQnaMode(), o = null == i ? void 0 : i.sessionStartTimestamp;
                a ? (0, r(104310).u)({
                    event: {
                        eventName: "assistant_close",
                        eventProperties: {
                            qna_session_id: null == i ? void 0 : i.sessionId,
                            qna_session_length: o ? Date.now() - o : 0,
                            from: n,
                            is_limited_qna_session: s
                        }
                    }
                }) : (0, r(104310).u)({
                    event: {
                        eventName: "qna_close",
                        eventProperties: {
                            qna_session_id: null == i ? void 0 : i.sessionId,
                            qna_session_length: o ? Date.now() - o : 0,
                            from: n,
                            is_limited_qna_session: s
                        }
                    }
                }), r(707964).u4({
                    name: a ? "assistant_close" : "qna_close",
                    args: {
                        qna_session_id: (null == i ? void 0 : i.sessionId) ? ? "",
                        is_limited_qna_session: s,
                        from: n,
                        duration: o ? Date.now() - o : -1,
                        questions_asked_in_session: (null == t ? void 0 : t.evaluatorFromStoreState.getTranscript().filter(e => "human" === e.type).length) ? ? 0
                    }
                })
            }

            function a(e) {
                if (!(0, r(316258).Ui)(e)) return r(952696).P.state.from;
                switch (r(304636).default.state.type) {
                    case "closed":
                        return;
                    case "assistantCompletionPopup":
                    case "agentCompletionPopup":
                        return r(304636).default.state.from;
                    default:
                        (0, r(722371).HB)(r(304636).default.state)
                }
            }

            function s(e) {
                var t;
                let {
                    configurationState: n,
                    inferenceId: i,
                    source: s,
                    mentionsUsed: l,
                    skillType: c,
                    from: u,
                    actionCardIdForLogging: d
                } = e, p = D(), h = n ? n.searchScope : r(585464).Wy, f = o(h), m = r(886556).z.isXMLAssistantEnabled(), g = r(886556).z.isLimitedQnaMode(), _ = (null == n || null == (t = n.temporaryUserInputData) ? void 0 : t.isRetrying) ? ? !1;
                m ? (0, r(104310).u)({
                    event: {
                        eventName: "assistant_inference_start",
                        eventProperties: {
                            qna_session_id: n ? n.sessionId : void 0,
                            qna_inference_id: i,
                            is_limited_qna_session: g,
                            is_retry: _,
                            is_suggested_question: "suggested_question" === s,
                            is_reminder_suggested_question: "reminder_suggested_question" === s,
                            is_abandoned_search_suggested_question: "abandoned_search_suggested_question" === s,
                            search_scope_type: h.type,
                            search_scope_id: f,
                            mentions_used: l,
                            skill_type: c,
                            action_card_id: d,
                            from: u,
                            search_sources: p,
                            assistant_opened_from: a(u)
                        }
                    }
                }) : (0, r(104310).u)({
                    event: {
                        eventName: "qna_inference_start",
                        eventProperties: {
                            qna_session_id: n ? n.sessionId : void 0,
                            qna_inference_id: i,
                            is_limited_qna_session: g,
                            is_retry: _,
                            is_suggested_question: "suggested_question" === s,
                            is_reminder_suggested_question: "reminder_suggested_question" === s,
                            is_abandoned_search_suggested_question: "abandoned_search_suggested_question" === s,
                            search_scope_type: h.type,
                            search_scope_id: f,
                            mentions_used: l,
                            skill_type: c,
                            action_card_id: d,
                            from: u,
                            search_sources: p,
                            assistant_opened_from: a(u)
                        }
                    }
                })
            }

            function o(e) {
                if ("everything" === e.type || "workspace" === e.type || "notion" === e.type || "helpdocs" === e.type || "ai-knowledge" === e.type || "labeler" === e.type || "universal-none" === e.type || "notion-none" === e.type || "web" === e.type || "slackbot" === e.type || "universal-workspace" === e.type || (0, r(281708).SC)(e.type));
                else if ("teamspace" === e.type) return e.teamId;
                else if ("page" === e.type) return e.pageId;
                else if ("collection" === e.type) return e.collectionId;
                else if ("site" === e.type) return e.siteId;
                else return (0, r(722371).HB)(e.type)
            }

            function l(e) {
                let t, {
                    configurationState: n,
                    inferenceId: i,
                    timeTook: s,
                    numCitationsShown: l,
                    numSearchResults: c,
                    numSlackSearchResults: u,
                    numGoogleDriveSearchResults: d,
                    searchedHelpdocs: p,
                    citationsBySource: h,
                    resultsBySource: f,
                    selectedSkill: m,
                    assistantActions: g,
                    from: _,
                    observationsBeforeFirstHumanStep: v,
                    observationsAfterFirstHumanStep: y,
                    forcefullyStoppedByUser: S,
                    actionCardId: w,
                    selectedSkillCategory: b,
                    result: I
                } = e;
                if (!n) return;
                let k = r(886556).z.isXMLAssistantEnabled(),
                    T = D(),
                    C = n.searchScope.type,
                    A = o(n ? n.searchScope : r(585464).Wy),
                    P = r(304636).default.state;
                if ("context" in P) {
                    let e = P.context;
                    "textSelection" === e.type ? t = "text" : "blockSelection" === e.type ? t = "block" : "cursor" === e.type ? t = "cursor" : (0, r(722371).HB)(e)
                }
                k ? (0, r(104310).u)({
                    event: {
                        eventName: "assistant_inference_end",
                        eventProperties: {
                            session_id: n.sessionId,
                            inference_id: i,
                            time_took: s,
                            num_citations_shown: l,
                            num_search_results: c,
                            num_slack_search_results: u,
                            num_google_drive_search_results: d,
                            searched_helpdocs: p,
                            citations_by_source: h,
                            results_by_source: f,
                            selected_skill: m,
                            action_card_id: w,
                            assistant_actions: (null == g ? void 0 : g.length) ? g : ["none"],
                            search_sources: T,
                            search_scope_type: C,
                            observations_before_first_human_step: v,
                            observations_after_first_human_step: y,
                            search_scope_id: A,
                            from: _,
                            assistant_opened_from: a(_),
                            forcefully_stopped_by_user: S,
                            skill_category: b,
                            text_selection_type: t,
                            result: I
                        }
                    }
                }) : (0, r(104310).u)({
                    event: {
                        eventName: "qna_inference_end",
                        eventProperties: {
                            qna_session_id: n.sessionId,
                            qna_inference_id: i,
                            time_took: s,
                            num_citations_shown: l,
                            num_search_results: c,
                            num_slack_search_results: u,
                            citations_by_source: h,
                            search_sources: T,
                            search_scope_type: C,
                            from: _,
                            assistant_opened_from: a(_)
                        }
                    }
                })
            }

            function c(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_user_clicked_try_again",
                        eventProperties: {
                            session_id: e.sessionId,
                            assistant_surface_type: e.assistantSurfaceType
                        }
                    }
                })
            }

            function u(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_output_stopped_by_user",
                        eventProperties: {
                            session_id: e.sessionId,
                            assistant_surface_type: e.assistantSurfaceType
                        }
                    }
                })
            }

            function d({
                configurationState: e,
                inferenceId: t,
                sentiment: n
            }) {
                e && (0, r(104310).u)({
                    event: {
                        eventName: "ai_feedback_given",
                        eventProperties: {
                            feature: "ai_assistant",
                            qna_session_id: e.sessionId,
                            qna_inference_id: t,
                            sentiment: n
                        }
                    }
                })
            }

            function p(e) {
                let {
                    configurationState: t,
                    clickedPageId: n,
                    resultType: i,
                    source: a
                } = e;
                t && (0, r(104310).u)({
                    event: {
                        eventName: "qna_result_clicked",
                        eventProperties: {
                            qna_session_id: t.sessionId,
                            search_session_id: t.searchSessionId,
                            clicked_page_id: n,
                            result_type: i,
                            source: a
                        }
                    }
                })
            }

            function h(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "qna_citations_toggle",
                        eventProperties: {
                            qna_session_id: e.sessionId,
                            shown: e.shown
                        }
                    }
                })
            }

            function f(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "qna_citations_see_more_click",
                        eventProperties: {
                            qna_session_id: e.sessionId
                        }
                    }
                })
            }

            function m(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "qna_session_initialized",
                        eventProperties: {
                            current_initialization_count: e.current_initialization_count
                        }
                    }
                })
            }

            function g(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_intro_modal_close",
                        eventProperties: e
                    }
                })
            }

            function _(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_intro_modal_read",
                        eventProperties: e
                    }
                })
            }

            function v(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_learn_more_about_assistant_clicked",
                        eventProperties: e
                    }
                })
            }

            function y(e, t) {
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_intro_modal_continue",
                        eventProperties: t
                    }
                }), n(e, {
                    hasQuery: !1,
                    isReminder: !1,
                    transcript: [],
                    searchSessionId: void 0,
                    sessionId: "",
                    startTimestamp: Date.now(),
                    reminderType: void 0,
                    from: "assistant_intro_modal"
                })
            }

            function S(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_get_help_click",
                        eventProperties: {
                            sessionId: e.sessionId
                        }
                    }
                })
            }

            function w(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_chat_transcript_history.restored",
                        eventProperties: e
                    }
                })
            }

            function b(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_chat_transcript_history.new_chat_created",
                        eventProperties: e
                    }
                })
            }

            function I(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_chat_transcript_history.chat_deleted",
                        eventProperties: e
                    }
                })
            }

            function k(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_chat_transcript_history.open_history_button_selected",
                        eventProperties: e
                    }
                })
            }

            function T(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_scoped_search_menu_open",
                        eventProperties: e
                    }
                })
            }

            function C(e) {
                let {
                    from: t,
                    original_scopes: n,
                    new_scopes: i,
                    config_type: a,
                    ai_session_id: s,
                    ai_inference_id: o
                } = e, l = n.map(e => e.type), c = i.map(e => e.type);
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_scoped_search_toggle",
                        eventProperties: {
                            from: t,
                            original_scope_types: l,
                            new_scope_types: c,
                            config_type: a,
                            ai_session_id: s,
                            ai_inference_id: o
                        }
                    }
                })
            }

            function A(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_scoped_search_menu_close",
                        eventProperties: e
                    }
                })
            }

            function P(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_three_dot_menu.open",
                        eventProperties: e
                    }
                })
            }

            function N(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_three_dot_menu.accessing_help",
                        eventProperties: e
                    }
                })
            }

            function x(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_three_dot_menu.opening_support",
                        eventProperties: e
                    }
                })
            }

            function M(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_action_pill.insert",
                        eventProperties: e
                    }
                })
            }

            function F(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_action_pill.accept_all_edits",
                        eventProperties: e
                    }
                })
            }

            function E(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_action_pill.save_page",
                        eventProperties: e
                    }
                })
            }

            function U(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_action_pill.discard_all_edits",
                        eventProperties: e
                    }
                })
            }

            function W() {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_full_page_exit",
                        eventProperties: {}
                    }
                })
            }

            function R() {
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_at_mention_click",
                        eventProperties: {}
                    }
                })
            }

            function q(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "leap_select",
                        eventProperties: e
                    }
                })
            }

            function V(e) {
                (0, r(104310).u)({
                    event: {
                        eventName: "leap_submit",
                        eventProperties: e
                    }
                })
            }

            function L() {
                (0, r(104310).u)({
                    event: {
                        eventName: "leap_presented",
                        eventProperties: {}
                    }
                })
            }

            function O() {
                (0, r(104310).u)({
                    event: {
                        eventName: "leap_dismissed",
                        eventProperties: {}
                    }
                })
            }

            function D() {
                let e = ["notion", "helpdocs"];
                return e.push(...(0, r(876688).wd)()), e
            }

            function B(e) {
                let {
                    action: t,
                    interaction: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_slack_unfurl_ai_action_event",
                        eventProperties: {
                            interaction: n,
                            action: t
                        }
                    }
                })
            }

            function z(e) {
                let {
                    promptId: t,
                    interaction: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_full_page_welcome_prompt_card_event",
                        eventProperties: {
                            promptid: t,
                            interaction: n
                        }
                    }
                })
            }

            function H(e) {
                let {
                    connector: t,
                    from: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_connector_in_progress_modal_opened",
                        eventProperties: {
                            from: n,
                            connector: t
                        }
                    }
                })
            }

            function j(e) {
                let {
                    connector: t,
                    from: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "ai_connector_auth_needed_modal_opened",
                        eventProperties: {
                            from: n,
                            connector: t
                        }
                    }
                })
            }

            function G(e) {
                let {
                    sessionId: t,
                    interaction: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_scope_menu_get_ai_connectors_interaction",
                        eventProperties: {
                            session_id: t,
                            interaction: n
                        }
                    }
                })
            }

            function Y(e) {
                let {
                    sessionId: t,
                    assistantSurfaceType: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_follow_up_share_action_user_clicked_button",
                        eventProperties: {
                            session_id: t,
                            assistant_surface_type: n
                        }
                    }
                })
            }

            function K(e) {
                let {
                    sessionId: t,
                    assistantSurfaceType: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_follow_up_share_action_user_dismissed_share_modal",
                        eventProperties: {
                            session_id: t,
                            assistant_surface_type: n
                        }
                    }
                })
            }

            function $(e) {
                let {
                    sessionId: t,
                    assistantSurfaceType: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_follow_up_share_action_user_copied_image_success",
                        eventProperties: {
                            session_id: t,
                            assistant_surface_type: n
                        }
                    }
                })
            }

            function Q(e) {
                let {
                    sessionId: t,
                    assistantSurfaceType: n
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_follow_up_share_action_user_copied_image_failure",
                        eventProperties: {
                            session_id: t,
                            assistant_surface_type: n
                        }
                    }
                })
            }

            function J(e) {
                let {
                    sessionId: t,
                    assistantSurfaceType: n,
                    source: i
                } = e;
                (0, r(104310).u)({
                    event: {
                        eventName: "assistant_click_connect_apps",
                        eventProperties: {
                            source: i,
                            session_id: t,
                            assistant_surface_type: n
                        }
                    }
                })
            }
            r.r(t), r.d(t, {
                getAnalyticsSearchSourcesFromAssistantFeatureGateStore: () => D,
                trackAIChatTranscriptHistoryChatDeleted: () => I,
                trackAIChatTranscriptHistoryItemRestored: () => w,
                trackAIChatTranscriptHistoryNewChatCreated: () => b,
                trackAcceptAllPill: () => F,
                trackAiChatTranscriptHistoryOpenHistoryButtonSelected: () => k,
                trackAiDetectedGetSupportPillClick: () => S,
                trackAssistantClosed: () => i,
                trackAssistantFollowUpShareButtonClick: () => Y,
                trackAssistantIntroModalClose: () => g,
                trackAssistantIntroModalRead: () => _,
                trackAssistantIntroModalTryNow: () => y,
                trackAssistantOpened: () => n,
                trackAssistantScopeMenuGetAiConnectorsInteraction: () => G,
                trackAssistantShareModalCopyImageFailure: () => Q,
                trackAssistantShareModalCopyImageSuccess: () => $,
                trackAssistantShareModalDismiss: () => K,
                trackAssistantSlackUnfurlAiActionEvent: () => B,
                trackAtMentionClick: () => R,
                trackConnectAppsClick: () => J,
                trackConnectorAuthNeededModalOpened: () => j,
                trackConnectorInProgressModalOpened: () => H,
                trackDiscardAllPill: () => U,
                trackFullPageWelcomePromptCardInteraction: () => z,
                trackInferenceEnd: () => l,
                trackInferenceStart: () => s,
                trackInsertPill: () => M,
                trackLeapDismissed: () => O,
                trackLeapPreferenceSelect: () => q,
                trackLeapPresented: () => L,
                trackLeapSubmit: () => V,
                trackLearnMoreAboutAssistantClicked: () => v,
                trackLeavingFullPageChat: () => W,
                trackOpeningHelpFromThreeDotMenu: () => N,
                trackOpeningSupportFromThreeDotMenu: () => x,
                trackOpeningThreeDotMenu: () => P,
                trackQnaCitationsSeeMoreClick: () => f,
                trackQnaCitationsToggle: () => h,
                trackQnaFeedbackGiven: () => d,
                trackQnaResultClicked: () => p,
                trackQnaSessionInitialized: () => m,
                trackSavePagePill: () => E,
                trackScopeSearchMenuClose: () => A,
                trackScopeSearchMenuOpen: () => T,
                trackScopeSearchToggle: () => C,
                trackUserClickedAssistantTryAgain: () => c,
                trackUserStoppedAssistantOutput: () => u
            }), r(944114), r(898992), r(354520), r(581454)
        },
        469424: (e, t, r) => {
            r.d(t, {
                E: () => s,
                f: () => a
            }), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520);
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        statuses: [],
                        previousStepIdToIndex: {},
                        threadId: void 0
                    }
                }
                updateStatus({
                    threadId: e,
                    index: t,
                    status: r,
                    previousStepId: n
                }) {
                    this.state.threadId !== e && this.reset();
                    let i = [...this.state.statuses];
                    i[t] = r;
                    let a = { ...this.state.previousStepIdToIndex
                    };
                    n && (a[n] = t), this.setState({
                        threadId: e,
                        statuses: i,
                        previousStepIdToIndex: a
                    })
                }
                removeStatusesForMessageIds(e) {
                    let t = new Set;
                    for (let r of e) {
                        let e = this.state.previousStepIdToIndex[r];
                        e && t.add(e)
                    }
                    if (t.size > 0) {
                        let e = [...this.state.statuses];
                        for (let r of t) delete e[r];
                        this.setState({ ...this.state,
                            statuses: e.filter(Boolean)
                        })
                    }
                }
            }
            let a = new i;

            function s() {
                return (0, r(682985).K8)(() => {
                    let e = a.getState().statuses;
                    for (let t = e.length - 1; t >= 0; t--)
                        if ("undo" === e[t]) return t
                }, [])
            }
        },
        490591: (e, t, r) => {
            r.d(t, {
                Lq: () => l,
                O2: () => d,
                R0: () => a,
                hY: () => i,
                jt: () => n
            }), r(18107), r(944114), r(967357), r(898992), r(354520), r(803949), r(581454), r(737550);
            let n = {
                config: "user-turn",
                context: "user-turn",
                attachment: "user-turn",
                "computer-file": "user-turn",
                "user-specified-context": "user-turn",
                user: "user-turn",
                "user-injected": "user-turn",
                "agent-message": "user-turn",
                "agent-prebuilt-prompt": "user-turn",
                "agent-inference": "agent-turn",
                "agent-tool-result": "agent-turn",
                error: "agent-turn",
                "agent-debug-error": "agent-turn",
                "eval-result": "agent-turn",
                "agent-integration": "agent-turn",
                "agent-trigger": "agent-turn",
                "agent-route-trigger": "agent-turn",
                "agent-instruction-state": "agent-turn",
                "agent-transcript-summary": "agent-turn",
                "activate-transcript-compaction": "agent-turn",
                "premium-feature-unavailable": "agent-turn",
                "agent-search-query-generation": "agent-turn",
                survey: "agent-turn"
            };

            function i(e) {
                return "user-turn" === e.type
            }

            function a(e) {
                let t, i, a, s, o, {
                        isRunningInference: l,
                        showDebug: d = !1
                    } = e,
                    p = d ? [...e.transcript] : [...e.transcript].sort((e, t) => {
                        let n = (0, r(722371).Xk)(c, e.type),
                            i = (0, r(722371).Xk)(c, t.type);
                        return n && !i ? -1 : !n && i ? 1 : 0
                    }),
                    h = [],
                    f = [],
                    m = 0;
                for (let e of p) {
                    let a = n[e.type];
                    a && ("user-turn" === a ? function(e) {
                        switch (_(), !s && (s = {
                            type: "user-turn"
                        }, d && (i = void 0)), e.type) {
                            case "config":
                                ! function(e) {
                                    var t;
                                    null != (t = s) && t.userInitiatedStep && g(), s || (s = {
                                        type: "user-turn"
                                    }), s.configStep = e
                                }(e);
                                break;
                            case "user":
                            case "user-injected":
                            case "agent-message":
                            case "agent-prebuilt-prompt":
                                ! function(e) {
                                    var t;
                                    null != (t = s) && t.userInitiatedStep && g(), s || (s = {
                                        type: "user-turn"
                                    }), s.userInitiatedStep = e
                                }(e);
                                break;
                            case "user-specified-context":
                                ! function(e) {
                                    var t, n;
                                    null != (t = s) && t.userInitiatedStep && g(), s || (s = {
                                        type: "user-turn"
                                    });
                                    let i = null == (n = f.at(-1)) ? void 0 : n.value,
                                        a = e.value;
                                    f.length > 0 && (0, r(381453).n4)(null == i ? void 0 : i.pointers, null == a ? void 0 : a.pointers) && (0, r(381453).n4)(null == i ? void 0 : i.blockSelection, null == a ? void 0 : a.blockSelection) && (0, r(381453).n4)(null == i ? void 0 : i.textSelection, null == a ? void 0 : a.textSelection) || (f.push(e), s.userSpecifiedContextStep = e)
                                }(e);
                                break;
                            case "attachment":
                                ! function(e) {
                                    var t;
                                    null != (t = s) && t.userInitiatedStep && g(), s || (s = {
                                        type: "user-turn"
                                    }), s.attachmentsStep = [...s.attachmentsStep ? ? [], e]
                                }(e);
                                break;
                            case "computer-file":
                                ! function(e) {
                                    var t;
                                    null != (t = s) && t.userInitiatedStep && g(), s || (s = {
                                        type: "user-turn"
                                    }), s.computerFileSteps = [...s.computerFileSteps ? ? [], e]
                                }(e);
                                break;
                            case "context":
                                var n;
                                n = e, d ? (i = n, t || (t = n.id)) : t || (t = n.id, s || (s = {
                                    type: "user-turn"
                                }), s.contextStep = n)
                        }
                    }(e) : function(e) {
                        g();
                        let t = u(e);
                        if (o && void 0 !== t) {
                            let e = function(e) {
                                for (let t of e) {
                                    let e = u(t);
                                    if (void 0 !== e) return e
                                }
                            }(o.steps);
                            void 0 !== e && e !== t && _()
                        }
                        o ? (o.steps.push(e), o.lastStepId = e.id, "agent-inference" === e.type && (o.hasAgentInferenceStep = !0)) : o = {
                            type: "agent-turn",
                            steps: [e],
                            hasAgentInferenceStep: "agent-inference" === e.type,
                            lastStepId: e.id
                        }
                    }(e))
                }

                function g() {
                    s && (d && i && (s.contextStep = i), h.push(s), s = void 0)
                }

                function _() {
                    var e;
                    if (!o) return;
                    let t = function(e) {
                            let t = [];
                            if (e.forEach((e, n) => {
                                    "agent-tool-result" === e.type && (0, r(426048).gY)(e, "update-todos") && t.push(n)
                                }), 0 === t.length) return e;
                            let n = e.map(e => {
                                    var t;
                                    let r;
                                    return "agent-inference" !== e.type ? e : (r = function(e) {
                                        if (!Array.isArray(e)) return e;
                                        let t = !1,
                                            r = e.filter(e => "tool_use" !== e.type || "update-todos" !== e.name || (t = !0, !1));
                                        return t ? r : e
                                    }((t = e).value)) === t.value ? t : { ...t,
                                        value: r
                                    }
                                }),
                                i = t[0],
                                a = e[t.at(-1) ? ? i],
                                s = [];
                            return n.forEach((e, t) => {
                                if ("agent-tool-result" === e.type && (0, r(426048).gY)(e, "update-todos")) {
                                    t === i && s.push(a);
                                    return
                                }
                                s.push(e)
                            }), s
                        }(o.steps),
                        n = t.some(e => "agent-inference" === e.type),
                        i = null == (e = t.at(-1)) ? void 0 : e.id,
                        s = t.length > 0,
                        l = { ...o,
                            steps: t,
                            hasAgentInferenceStep: n,
                            lastStepId: i,
                            feedbackComponentIndex: s ? m : -1,
                            previousStepId: a
                        };
                    h.push(l), s && (m++, a = i), o = void 0
                }
                g(), _();
                let v = h.at(-1);
                return l && (null == v ? void 0 : v.type) !== "agent-turn" && h.push({
                    type: "agent-turn",
                    steps: [],
                    feedbackComponentIndex: m,
                    previousStepId: a,
                    hasAgentInferenceStep: !1,
                    lastStepId: void 0
                }), h
            }

            function s(e) {
                let {
                    value: t
                } = (0, r(330942).ie)(e);
                return void 0 === t ? "" : "string" == typeof t ? t : t.filter(e => "text" === e.type && (e.type, !0)).map(e => e.content).join("")
            }

            function o(e) {
                let {
                    result: t
                } = e;
                if (t && "object" == typeof t && "message" in t && "string" == typeof t.message) return t.message
            }

            function l(e) {
                let {
                    turn: t,
                    lastStepOnly: r = !1
                } = e;
                if ("agent-turn" !== t.type) return "";
                if (r) {
                    for (let e = t.steps.length - 1; e >= 0; e -= 1) {
                        let r = t.steps[e];
                        if ("agent-inference" === r.type) {
                            let e = s(r);
                            if (e) return e;
                            continue
                        }
                        if ("agent-tool-result" === r.type) {
                            let e = o(r);
                            if (e) return e
                        }
                    }
                    return ""
                }
                let n = [];
                for (let e of t.steps) {
                    if ("agent-inference" === e.type) {
                        let t = s(e);
                        t && n.push(t);
                        continue
                    }
                    if ("agent-tool-result" === e.type) {
                        let t = o(e);
                        t && n.push(t)
                    }
                }
                return n.join("\n\n")
            }
            let c = ["config", "context"];

            function u(e) {
                switch (e.type) {
                    case "agent-inference":
                    case "agent-tool-result":
                    case "error":
                    case "markdown-chat":
                    case "search":
                        return e.speakerId;
                    default:
                        return
                }
            }

            function d(e) {
                for (let t of e) switch (t.type) {
                    case "agent-inference":
                    case "agent-tool-result":
                    case "error":
                    case "markdown-chat":
                    case "search":
                        if (t.speakerId && t.speakerDisplayName) return {
                            speakerId: t.speakerId,
                            speakerDisplayName: t.speakerDisplayName,
                            speakerModelFamily: t.speakerModelFamily
                        }
                }
            }
        },
        751568: (e, t, r) => {
            r.d(t, {
                T: () => n
            });

            function n({
                spaceViewStore: e,
                itemId: t,
                completionType: i
            }) {
                let a = e.getSettings(),
                    s = (null == a ? void 0 : a.business_trial_items_completed) ? ? {};
                s[t] || ((0, r(104310).u)({
                    event: {
                        eventName: "trial_home_item_completed",
                        eventProperties: {
                            item_id: t,
                            completion_type: i
                        }
                    }
                }), (0, r(377796).createAndCommit)({
                    environment: e.environment,
                    userAction: "userSettingsActions.markSidebarTrialHomeItemAsSeen",
                    canUndo: !1,
                    cellTarget: "main",
                    perform: n => {
                        r(380762).AG(e, n, {
                            business_trial_items_completed: { ...s,
                                [t]: !0
                            }
                        })
                    }
                }))
            }
        },
        757688: (e, t, r) => {
            r.d(t, {
                Hp: () => ed,
                VG: () => ea,
                Vn: () => Y,
                aP: () => O,
                vy: () => B,
                fI: () => el,
                WF: () => es,
                zf: () => en,
                Wq: () => L,
                Pz: () => K,
                WE: () => X,
                kh: () => eo,
                D5: () => H,
                GS: () => j,
                g6: () => D,
                ki: () => Q,
                Mi: () => G,
                D7: () => $,
                Cx: () => eu,
                rW: () => ec
            }), r(16280), r(410838), r(517642), r(658004), r(733853), r(845876), r(432475), r(515024), r(731698), r(898992), r(354520), r(672577), r(430670), r(581454), r(737550), r(964979);
            var n = r(296540),
                i = () => r(678703),
                a = () => r(426048),
                s = () => r(850563),
                o = () => r(330942),
                l = () => r(773352),
                c = () => r(832375),
                u = () => r(247438);
            class d extends Error {
                constructor(e, t, r) {
                    super(e), this.operation = t, this.path = r, this.name = "JsonPatchError"
                }
                static isJSONPatchError(e) {
                    return e instanceof d
                }
            }
            class p extends d {
                constructor(e) {
                    super(`Invalid operation: ${e.op}`, e), this.name = "InvalidOperationError"
                }
            }
            class h extends d {
                constructor(e, t) {
                    super(`Invalid path: ${e}`, t, e), this.name = "InvalidPathError"
                }
            }
            class f extends d {
                constructor(e, t) {
                    super(`Path not found: ${e} for operation ${null==t?void 0:t.op}`, t, e), this.name = "PathNotFoundError"
                }
            }
            class m extends d {
                constructor(e, t, r, n) {
                    super(`Test operation failed at ${e}: expected ${JSON.stringify(r)}, got ${JSON.stringify(t)}`, n, e), this.actual = t, this.expected = r, this.name = "TestFailedError"
                }
            }
            class g extends d {
                constructor(e, t, r) {
                    super(`Invalid move operation: cannot move ${e} into its child ${t}`, r, e), this.name = "InvalidMoveError"
                }
            }
            class _ extends d {
                constructor(e) {
                    super(`Unknown compressed operation type: ${e}`), this.name = "InvalidCompressionError"
                }
            }

            function v(e) {
                return e.replace(/~1/g, "/").replace(/~0/g, "~")
            }

            function y(e) {
                return e.replace(/~/g, "~0").replace(/\//g, "~1")
            }
            r(944114), r(823215);
            class S {
                tokens;
                constructor(e = [""]) {
                    this.tokens = e
                }
                static parse(e) {
                    if (!e.startsWith("/") && "" !== e) throw new h(e);
                    return new S("" === e ? [""] : e.split("/").map(v))
                }
                static fromTokens(e) {
                    return new S(["", ...e])
                }
                toString() {
                    return 1 === this.tokens.length && "" === this.tokens[0] ? "" : this.tokens.map(y).join("/")
                }
                getTokens() {
                    return this.tokens.slice(1)
                }
                append(e) {
                    return new S([...this.tokens, e])
                }
                prepend(e) {
                    return new S(["", e, ...this.tokens.slice(1)])
                }
                parent() {
                    if (!(this.tokens.length <= 1)) return new S(this.tokens.slice(0, -1))
                }
                lastToken() {
                    return this.tokens.length > 1 ? this.tokens[this.tokens.length - 1] : void 0
                }
                isPrefixOf(e) {
                    return !(this.tokens.length >= e.tokens.length) && this.tokens.every((t, r) => t === e.tokens[r])
                }
                evaluate(e) {
                    let t;
                    if (1 === this.tokens.length && "" === this.tokens[0]) return {
                        parent: void 0,
                        key: "",
                        value: e,
                        exists: !0
                    };
                    let r = e,
                        n = "";
                    for (let e = 1; e < this.tokens.length && (n = this.tokens[e], e !== this.tokens.length - 1); e++) {
                        if (null == r || "__proto__" === n || "constructor" === n || "prototype" === n) return {
                            parent: void 0,
                            key: n,
                            value: void 0,
                            exists: !1
                        };
                        if (Array.isArray(r)) {
                            if ("-" === n) return {
                                parent: void 0,
                                key: n,
                                value: void 0,
                                exists: !1
                            };
                            let e = parseInt(n, 10);
                            if (isNaN(e) || e < 0 || !Number.isInteger(e) || e >= r.length) return {
                                parent: void 0,
                                key: n,
                                value: void 0,
                                exists: !1
                            };
                            r = r[e]
                        } else {
                            if ("object" != typeof r || null === r) return {
                                parent: void 0,
                                key: n,
                                value: void 0,
                                exists: !1
                            };
                            let e = r;
                            if (!(n in e)) return {
                                parent: void 0,
                                key: n,
                                value: void 0,
                                exists: !1
                            };
                            r = e[n]
                        }
                    }
                    let i = !1;
                    if (null == r) i = !1;
                    else if ("__proto__" === n || "constructor" === n || "prototype" === n) i = !1;
                    else if (Array.isArray(r))
                        if ("-" === n) i = !1;
                        else {
                            let e = parseInt(n, 10);
                            isNaN(e) || e < 0 || !Number.isInteger(e) || e >= r.length ? i = !1 : (t = r[e], i = !0)
                        }
                    else if ("object" == typeof r && null !== r) {
                        let e = r;
                        n in e ? (t = e[n], i = !0) : i = !1
                    } else i = !1;
                    return {
                        parent: r,
                        key: n,
                        value: t,
                        exists: i
                    }
                }
                get(e) {
                    return this.evaluate(e).value
                }
                exists(e) {
                    return this.evaluate(e).exists
                }
            }

            function w(e) {
                return (0, r(381453).mg)(e)
            }

            function b(e, t) {
                let r = S.parse(t.path).evaluate(e);
                if ("" === t.path) return w(t.value);
                if (!r.parent || null === r.parent || void 0 === r.parent) throw new f(t.path, t);
                let n = r.parent,
                    i = r.key;
                if (Array.isArray(n))
                    if ("-" === i) n.push(w(t.value));
                    else {
                        let e = parseInt(i, 10);
                        if (isNaN(e) || e < 0 || !Number.isInteger(e) || e > n.length) throw new f(t.path, t);
                        n.splice(e, 0, w(t.value))
                    }
                else if ("object" == typeof n && null !== n) n[i] = w(t.value);
                else throw new f(t.path, t);
                return e
            }

            function I(e, t) {
                let r = S.parse(t.path).evaluate(e);
                if ("" === t.path || !r.exists || !r.parent) throw new f(t.path, t);
                let n = r.parent,
                    i = r.key;
                if (Array.isArray(n)) {
                    let e = parseInt(i, 10);
                    if (isNaN(e) || e < 0 || e >= n.length) throw new f(t.path, t);
                    n.splice(e, 1)
                } else if ("object" == typeof n && null !== n) delete n[i];
                else throw new f(t.path, t);
                return e
            }
            let k = function(e, t, n = {}) {
                    let {
                        mutate: i = !1,
                        ignoreRemoveErrors: a = !1,
                        ignoreReplaceErrors: s = !1
                    } = n, o = i ? e : (0, r(381453).mg)(e);
                    for (let e of t) try {
                        o = function(e, t) {
                            switch (t.op) {
                                case "add":
                                    return b(e, t);
                                case "remove":
                                    return I(e, t);
                                case "replace":
                                    let n = S.parse(t.path).evaluate(e);
                                    if ("" === t.path) return w(t.value);
                                    if (!n.exists || !n.parent) throw new f(t.path, t);
                                    let i = n.parent,
                                        a = n.key;
                                    if (Array.isArray(i)) {
                                        let e = parseInt(a, 10);
                                        if (isNaN(e) || e < 0 || e >= i.length) throw new f(t.path, t);
                                        i[e] = w(t.value)
                                    } else if ("object" == typeof i && null !== i) i[a] = w(t.value);
                                    else throw new f(t.path, t);
                                    return e;
                                case "move":
                                    let s = S.parse(t.from),
                                        o = S.parse(t.path);
                                    if (s.isPrefixOf(o)) throw new g(t.from, t.path, t);
                                    let l = s.evaluate(e);
                                    if (!l.exists) throw new f(t.from, t);
                                    let c = l.value;
                                    return I(e, {
                                        op: "remove",
                                        path: t.from
                                    }), b(e, {
                                        op: "add",
                                        path: t.path,
                                        value: c
                                    }), e;
                                case "copy":
                                    let u = S.parse(t.from).evaluate(e);
                                    if (!u.exists) throw new f(t.from, t);
                                    return b(e, {
                                        op: "add",
                                        path: t.path,
                                        value: w(u.value)
                                    }), e;
                                case "test":
                                    let d = S.parse(t.path).evaluate(e);
                                    if (!d.exists || !(0, r(381453).n4)(d.value, t.value)) throw new m(t.path, d.value, t.value, t);
                                    return e;
                                case "append":
                                    let h = S.parse(t.path),
                                        _ = h.evaluate(e);
                                    if (!_.exists) throw new f(t.path, t);
                                    if ("string" != typeof _.value) throw new p(t);
                                    if ("" === t.path) return _.value + t.value;
                                    let v = (0, r(381453).mg)(e),
                                        y = h.evaluate(v);
                                    if (!y.parent || void 0 === y.key) throw new p(t);
                                    return y.parent[y.key] = _.value + t.value, v;
                                case "replaceSuffix":
                                    return function(e, t) {
                                        let n = S.parse(t.path),
                                            i = n.evaluate(e);
                                        if (!i.exists) throw new f(t.path, t);
                                        if (!Array.isArray(i.value)) throw new p(t);
                                        let a = i.value,
                                            s = t.removeCount;
                                        if (s < 0 || !Number.isInteger(s) || s > a.length) throw new p(t);
                                        if ("" === t.path) {
                                            let e = [...a];
                                            return e.splice(a.length - s, s, ...t.value.map(e => w(e))), e
                                        }
                                        let o = (0, r(381453).mg)(e),
                                            l = n.evaluate(o);
                                        if (!Array.isArray(l.value)) throw new p(t);
                                        let c = l.value;
                                        return c.splice(c.length - s, s, ...t.value.map(e => w(e))), o
                                    }(e, t);
                                default:
                                    throw new p(t)
                            }
                        }(o, e)
                    } catch (t) {
                        if (a && "remove" === e.op && t instanceof f || s && "replace" === e.op && t instanceof f) continue;
                        throw t
                    }
                    return o
                },
                T = {
                    a: "add",
                    r: "remove",
                    p: "replace",
                    m: "move",
                    c: "copy",
                    t: "test",
                    x: "append",
                    s: "replaceSuffix"
                };

            function C(e) {
                let {
                    o: t,
                    p: r,
                    v: n,
                    f: i,
                    r: a
                } = e, s = T[t];
                if (!s) throw new _(t);
                if ("add" === s) return {
                    op: s,
                    path: r,
                    value: n
                };
                if ("remove" === s) return {
                    op: s,
                    path: r
                };
                if ("replace" === s) return {
                    op: s,
                    path: r,
                    value: n
                };
                if ("move" === s) {
                    if (void 0 === i) throw new p({
                        op: "move",
                        path: r,
                        from: ""
                    });
                    return {
                        op: s,
                        path: r,
                        from: i
                    }
                }
                if ("copy" === s) {
                    if (void 0 === i) throw new p({
                        op: "copy",
                        path: r,
                        from: ""
                    });
                    return {
                        op: s,
                        path: r,
                        from: i
                    }
                }
                if ("test" === s) return {
                    op: s,
                    path: r,
                    value: n
                };
                if ("append" === s) {
                    if ("string" != typeof n) throw new p({
                        op: s,
                        path: r,
                        value: ""
                    });
                    return {
                        op: s,
                        path: r,
                        value: n
                    }
                }
                if ("replaceSuffix" === s) {
                    if (void 0 === a || !Array.isArray(n)) throw new p({
                        op: s,
                        path: r,
                        removeCount: 0,
                        value: []
                    });
                    return {
                        op: s,
                        path: r,
                        removeCount: a,
                        value: n
                    }
                }
                throw new p({
                    op: "add",
                    path: r,
                    value: void 0
                })
            }
            var A = () => r(416607),
                P = () => r(421439);
            class N {
                frameCount = 0;
                lastSampleTime = performance.now();
                min = 1 / 0;
                max = 0;
                sum = 0;
                sampleCount = 0;
                rafId = 0;
                isVisible = !document.hidden;
                boundHandleVisibilityChange;
                constructor() {
                    this.boundHandleVisibilityChange = this.handleVisibilityChange.bind(this)
                }
                handleVisibilityChange() {
                    this.isVisible = !document.hidden, document.hidden || (this.lastSampleTime = performance.now(), this.frameCount = 0)
                }
                start() {
                    document.addEventListener("visibilitychange", this.boundHandleVisibilityChange);
                    let e = () => {
                        if (!this.isVisible) {
                            this.rafId = requestAnimationFrame(e);
                            return
                        }
                        this.frameCount++;
                        let t = performance.now(),
                            r = t - this.lastSampleTime;
                        if (r >= 500) {
                            let e = Math.round(1e3 * this.frameCount / r);
                            this.min = Math.min(this.min, e), this.max = Math.max(this.max, e), this.sum += e, this.sampleCount++, this.frameCount = 0, this.lastSampleTime = t
                        }
                        this.rafId = requestAnimationFrame(e)
                    };
                    this.rafId = requestAnimationFrame(e)
                }
                stop() {
                    return (document.removeEventListener("visibilitychange", this.boundHandleVisibilityChange), this.rafId > 0 && cancelAnimationFrame(this.rafId), 0 === this.sampleCount) ? {
                        avg: void 0,
                        min: void 0,
                        max: void 0
                    } : {
                        avg: Math.round(this.sum / this.sampleCount),
                        min: this.min,
                        max: this.max
                    }
                }
            }
            class x extends Error {
                constructor(e) {
                    super(e), this.name = "SmootherError"
                }
                static isSmootherError(e) {
                    return e instanceof x
                }
            }
            let M = {
                velocity: 100,
                alpha: .99,
                gamma: 1e-5,
                deadlineOffset: .3,
                postCompleteSlack: 100
            };
            class F {
                buffer = [];
                position = 0;
                velocity;
                lastFrameTime = 0;
                startTime = 0;
                isFinishedAddingItems = !1;
                currentlyRunningUpdateLoop;
                alpha;
                gamma;
                deadlineOffset;
                postCompleteSlack;
                defaultArgs = M;
                constructor(e = M) {
                    this.defaultArgs = e, this.velocity = e.velocity, this.alpha = e.alpha, this.gamma = e.gamma, this.deadlineOffset = e.deadlineOffset, this.postCompleteSlack = e.postCompleteSlack
                }
                addItems(e) {
                    if (!this.currentlyRunningUpdateLoop) throw new x("`addItems` was called, but we weren't running the update loop!");
                    let t = performance.now();
                    for (let r of (0 === this.startTime && (this.startTime = t, this.lastFrameTime = t), e)) this.buffer.push({
                        item: r,
                        timestamp: t
                    })
                }
                beginUpdateLoop(e) {
                    if (this.currentlyRunningUpdateLoop) throw new x("`beginUpdateLoop` was called while we were already running the update loop!");
                    this.setupVisibilityHandler(), this.currentlyRunningUpdateLoop = (async () => {
                        for (; !this.isFinishedAddingItems || this.hasPendingItems();) await new Promise(t => {
                            requestAnimationFrame(r => {
                                e(this.getSmoothedItems(r)), t()
                            })
                        });
                        this.cleanupVisibilityHandler(), this.currentlyRunningUpdateLoop = void 0
                    })()
                }
                handleVisibilityChange = e => {
                    if (e.state.isVisible && this.currentlyRunningUpdateLoop) {
                        let e = performance.now(),
                            t = this.calculateSmoothedPosition(e);
                        this.position = Math.min(t, this.buffer.length), this.lastFrameTime = e
                    }
                };
                setupVisibilityHandler() {
                    r(825244).A.addListener(this.handleVisibilityChange)
                }
                cleanupVisibilityHandler() {
                    r(825244).A.removeListener(this.handleVisibilityChange)
                }
                markIsFinishedAddingItems() {
                    this.isFinishedAddingItems = !0
                }
                async finishUpdateLoop() {
                    if (!this.isFinishedAddingItems) throw new x("`finishUpdateLoop` was called without a corresponding invocation of `markIsFinishedAddingItems`.");
                    this.currentlyRunningUpdateLoop && await this.currentlyRunningUpdateLoop
                }
                reset() {
                    if (this.currentlyRunningUpdateLoop) throw new x("Cannot reset while the update loop is running!");
                    this.cleanupVisibilityHandler(), this.buffer = [], this.position = 0, this.velocity = this.defaultArgs.velocity, this.lastFrameTime = 0, this.startTime = 0, this.isFinishedAddingItems = !1
                }
                async stopAndFinish() {
                    if (!this.isSmoothing()) return Promise.resolve();
                    this.markIsFinishedAddingItems(), await this.finishUpdateLoop(), this.reset()
                }
                isSmoothing() {
                    return !!this.currentlyRunningUpdateLoop
                }
                getSmoothedItems(e) {
                    if (0 === this.buffer.length || 0 === this.startTime || (e - this.lastFrameTime) / 1e3 <= 0) return [];
                    let t = this.calculateSmoothedPosition(e),
                        r = Math.max(this.position, Math.min(t, this.buffer.length)),
                        n = this.buffer.slice(this.position, r);
                    return this.position = r, this.lastFrameTime = e, n.map(e => e.item)
                }
                calculateSmoothedPosition(e) {
                    if (0 === this.buffer.length) return 0;
                    let t = (e - this.startTime) / 1e3,
                        r = t - (this.lastFrameTime - this.startTime) / 1e3;
                    if (r <= 0) return this.position;
                    if (this.position >= this.buffer.length) return this.buffer.length;
                    let n = .9 * t - this.deadlineOffset,
                        i = this.position;
                    for (let e = this.position; e < this.buffer.length; e++)(this.buffer[e].timestamp - this.startTime) / 1e3 < n && (i = e + 1);
                    let a = this.buffer.length + (this.isFinishedAddingItems ? this.postCompleteSlack : 0),
                        s = 1 / r,
                        o = this.isFinishedAddingItems ? .01 * this.gamma : this.gamma,
                        l = e => {
                            let t = (e - this.position) * s;
                            return 2 * o * s * (t - this.velocity) - 1 / (e - i) + 1 / (a - e)
                        },
                        c = i,
                        u = Math.max(a, c + .001),
                        d = l(c),
                        p = l(u);
                    if (!(d <= .01 && p >= -.01)) {
                        let e = Math.max(1, this.velocity * r),
                            t = Math.min(Math.max(this.position + e, c), u),
                            n = (t - this.position) / r;
                        return this.velocity = this.alpha * this.velocity + (1 - this.alpha) * n, t
                    }
                    for (; d < -.01;) {
                        let e = (c + u) / 2,
                            t = l(e);
                        t <= 0 ? (c = e, d = t) : (u = e, p = t)
                    }
                    let h = c,
                        f = (h - this.position) / r;
                    return this.velocity = this.alpha * this.velocity + (1 - this.alpha) * f, Math.round(h)
                }
                hasPendingItems() {
                    return this.position < this.buffer.length
                }
                getDebugInfo() {
                    return {
                        bufferLength: this.buffer.length,
                        position: this.position,
                        velocity: this.velocity,
                        progress: this.buffer.length > 0 ? this.position / this.buffer.length : 0
                    }
                }
            }
            async function* E(e) {
                let {
                    generator: t,
                    update: r,
                    analyticsController: n,
                    smootherArgs: i
                } = e, a = [], s = !1, o = new F(i);
                try {
                    for await (let e of t) try {
                        let {
                            temporarySteps: t,
                            isError: i
                        } = e;
                        if (!(!s && !i && t.length > 0)) {
                            yield e, a = t;
                            continue
                        }
                        let l = t[t.length - 1],
                            d = W(l),
                            p = a.length > 0 ? W(a[a.length - 1]) : "",
                            h = d.length > 0,
                            f = !1;
                        if (h) {
                            var c, u;
                            n.markFirstTokenIfUnmarked();
                            let e = (c = d, u = p, c.length > u.length && c.startsWith(u) ? c.slice(u.length) : "");
                            if (e.length > 0) {
                                o.isSmoothing() || o.beginUpdateLoop(e => {
                                    for (let {
                                            temporarySteps: t
                                        } of e) r(t)
                                });
                                for (let r = 0; r < e.length; r++) {
                                    let n = p + e.slice(0, r + 1),
                                        i = function(e, t) {
                                            if ("agent-inference" !== e.type) return e;
                                            let r = { ...e
                                            };
                                            if ("string" == typeof r.value) r.value = t;
                                            else if (Array.isArray(r.value)) {
                                                let e = [...r.value],
                                                    n = e[e.length - 1];
                                                n && U.includes(n.type) && (e[e.length - 1] = { ...n,
                                                    content: t
                                                }), r.value = e
                                            }
                                            return r
                                        }(l, n),
                                        a = [...t];
                                    a[a.length - 1] = i, o.addItems([{
                                        temporarySteps: a
                                    }])
                                }
                                f = !0, a = t
                            }
                        }
                        if (f) continue;
                        await o.stopAndFinish(), yield e, a = t
                    } catch (e) {
                        if (x.isSmootherError(e)) l().log({
                            level: "error",
                            from: "inferenceTranscriptActions",
                            type: "SmootherError",
                            team: "ai-ux",
                            error: (0, A().convertErrorToLog)(e)
                        }), s = !0;
                        else throw e
                    }
                } catch (e) {
                    throw await o.stopAndFinish(), e
                } finally {
                    n.markStreamFinishedIfUnmarked(), await o.stopAndFinish()
                }
            }
            let U = ["text", "thinking", "registered_tool_use"];

            function W(e) {
                if ("agent-inference" === e.type) {
                    if ("string" == typeof e.value) return e.value;
                    else if (Array.isArray(e.value)) {
                        let t = e.value[e.value.length - 1];
                        if (t && U.includes(t.type)) return t.content
                    }
                }
                return ""
            }
            r(813451);
            var R = () => r(220800);
            let q = ["update_agent_from_template", "update_agent_template_for_slack_task_triager", "update_agent_template_for_weekly_project_update", "create_custom_agent_from_marketplace"];

            function V(e) {
                let {
                    transcript: t,
                    contextSurface: n
                } = e;
                return t.filter(e => "user" === e.type || "user-injected" === e.type || (0, r(588831).xI)(e)).length > 1 && ("writer" === n || "rich_text_menu" === n) ? "workflows" : n ? ? "unknown"
            }

            function L(e) {
                let {
                    clientStore: t,
                    environment: r
                } = e, n = r.RouterStore.state.route, i = "chat" === n.name ? n.threadId : void 0;
                i && t.getOrCreateClientAIChatThreadStore(i).resetState(), t.setState({ ...t.state,
                    userSelectedConfig: void 0,
                    isAIChatTranscriptSidePanelVisible: !1
                })
            }

            function O(e) {
                let {
                    environment: t,
                    userStore: n,
                    spaceStore: i,
                    transcript: a,
                    workflowId: s,
                    transaction: o,
                    threadId: l,
                    inMemoryRecordCache: u,
                    parentPointer: d,
                    threadType: p
                } = e, h = r(124937).vt({
                    environment: t,
                    table: c().Toz,
                    args: {
                        id: l ? ? (0, r(295447).Z1)({
                            environment: t,
                            table: c().Toz,
                            spaceId: i.id
                        }),
                        parentPointer: d ? ? i.pointer,
                        space_id: i.id,
                        messages: [],
                        data: {
                            workflow_id: s
                        },
                        createdByPointer: n.pointer,
                        alive: !0,
                        type: p
                    },
                    transaction: o,
                    inMemoryRecordCache: u ? ? i.inMemoryRecordCache
                });
                return a && Y({
                    environment: t,
                    spaceStore: i,
                    threadStore: h,
                    userStore: n,
                    addSteps: a,
                    transaction: o
                }), h
            }

            function D(e) {
                var t;
                let {
                    threadStore: r,
                    transaction: n
                } = e;
                H({
                    threadStore: r,
                    transaction: n,
                    sharedWithSpace: !(null == (t = r.getData()) ? void 0 : t.shared_with_space)
                })
            }
            async function B(e) {
                var t;
                let {
                    chatTranscriptInfo: n,
                    environment: i,
                    clientStore: a
                } = e;
                if ("assistant" === n.configType) return;
                if ((0, r(60123).T)(n.store)) return void await z({
                    chatTranscriptInfo: n,
                    clientStore: a,
                    environment: i
                });
                null == (t = a.getOrCreateClientAIChatThreadStore(n.id).state.abortController) || t.abort();
                let s = n.store.getSpaceId(),
                    {
                        serverCommitResult: o
                    } = (0, r(377796).createAndCommit)({
                        userAction: "assistantChatHistoryItem.deleteInferenceChatTranscript",
                        environment: i,
                        cellTarget: s ? {
                            spaceWithId: s
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, r(173157).z)({
                                store: n.store,
                                data: {
                                    alive: !1,
                                    current_inference_id: null,
                                    current_inference_lease_expiration: null
                                },
                                transaction: e
                            })
                        }
                    });
                await o, a.removeClientAIChatThreadStore(n.id), (0, r(487246).a)()
            }
            async function z(e) {
                let {
                    chatTranscriptInfo: t,
                    clientStore: n,
                    environment: i
                } = e, a = t.store, s = i.currentUser.id, o = a.getPermissionItems().find(e => "user_permission" === e.type && e.user_id === s);
                if (!o) return;
                let l = a.getSpaceId(),
                    {
                        serverCommitResult: c
                    } = (0, r(377796).createAndCommit)({
                        userAction: "assistantChatHistoryItem.leaveInferenceChatTranscript",
                        environment: i,
                        cellTarget: l ? {
                            spaceWithId: l
                        } : void 0,
                        canUndo: !0,
                        perform: e => {
                            (0, r(313845).xZ)({
                                environment: i,
                                threadStore: a,
                                transaction: e,
                                permissionItem: { ...o,
                                    role: "none"
                                }
                            })
                        }
                    });
                await c, n.removeClientAIChatThreadStore(t.id), (0, r(487246).a)()
            }

            function H({
                threadStore: e,
                transaction: t,
                sharedWithSpace: n
            }) {
                (0, r(173157).z)({
                    store: e.getDataStore(),
                    data: {
                        shared_with_space: n
                    },
                    transaction: t
                })
            }

            function j(e) {
                var t;
                let {
                    threadStore: n,
                    transaction: i,
                    clientStore: a
                } = e, s = a.getOrCreateClientAIChatThreadStore(n.id);
                s.setState({ ...s.state,
                        wasForceStoppedByUser: !0
                    }), null == (t = s.state.abortController) || t.abort(), (0, r(173157).z)({
                        store: n,
                        data: {
                            current_inference_id: null,
                            current_inference_lease_expiration: null
                        },
                        transaction: i
                    }),
                    function(e) {
                        let {
                            threadStore: t,
                            transaction: n
                        } = e;
                        if (!(0, r(187353).JK)(t)) return;
                        let i = (0, r(187353).mU)(t),
                            a = null == i ? void 0 : i.getStatus();
                        null != i && i.isDefined() && ("running" === a || "pending" === a) && (0, r(173157).z)({
                            store: i.getDataStore(),
                            data: {
                                status: "cancelled",
                                finished_at: Date.now()
                            },
                            transaction: n
                        })
                    }({
                        threadStore: n,
                        transaction: i
                    })
            }

            function G(e) {
                let {
                    threadStore: t,
                    transaction: n,
                    updatedById: i,
                    updatedByTable: a
                } = e;
                (0, r(173157).z)({
                    store: t,
                    data: {
                        updated_time: Date.now(),
                        updated_by_id: i,
                        updated_by_table: a
                    },
                    transaction: n
                })
            }

            function Y(e) {
                let {
                    environment: t,
                    spaceStore: n,
                    threadStore: i,
                    userStore: a,
                    addSteps: s,
                    transaction: o,
                    inMemoryRecordCache: l,
                    filterStreamingSteps: u
                } = e, d = (u ? s.filter(e => "agent-tool-result" !== e.type || "streaming" !== e.state) : s).map(e => r(124937).vt({
                    environment: t,
                    table: c().mSw,
                    args: {
                        id: e.id.toString(),
                        parentPointer: i.pointer,
                        space_id: n.getSpaceId(),
                        step: e,
                        createdByPointer: a.pointer
                    },
                    transaction: o,
                    inMemoryRecordCache: l ? ? n.inMemoryRecordCache
                }));
                return (0, P().y4)({
                    operation: {
                        args: {
                            ids: s.map(e => e.id)
                        },
                        command: "listAfterMulti",
                        path: ["messages"],
                        pointer: i.pointer
                    },
                    store: i,
                    transaction: o
                }), d
            }

            function K(e) {
                let {
                    threadStore: t,
                    stepId: n,
                    transaction: i
                } = e, a = t.getMessages(), s = a.findIndex(e => e === n), o = a.slice(s + 1);
                for (let e of o)(0, P().y4)({
                    operation: {
                        args: {
                            id: e
                        },
                        command: "listRemove",
                        path: ["messages"],
                        pointer: t.pointer
                    },
                    store: t,
                    transaction: i
                });
                r(469424).f.removeStatusesForMessageIds(o)
            }

            function $(e) {
                let {
                    threadStore: t,
                    step: n,
                    transaction: i,
                    newValue: a
                } = e, s = t.getStepStoreById(n.id);
                s && (0, r(173157).z)({
                    store: s,
                    data: {
                        value: a
                    },
                    transaction: i
                })
            }

            function Q(e) {
                let {
                    threadStore: t,
                    stepId: n,
                    transaction: i,
                    newValue: a
                } = e, s = t.getStepStoreById(n);
                s && (0, r(173157).z)({
                    store: s,
                    data: {
                        value: a,
                        isEdited: !0
                    },
                    transaction: i
                })
            }
            let J = ["config", "updated-config", "user-specified-context", "context", "agent-records-updated", "plan-mode"];
            async function X(e) {
                var t, n, a, u;
                let {
                    clientStore: p,
                    environment: h,
                    threadStore: f,
                    createThreadArgs: m,
                    waitBeforeSending: g,
                    analyticsArgs: _,
                    forceRegenerateTitle: v,
                    confirmToolStepIds: y,
                    rejectToolStepIds: S,
                    connectFlowCreatedModuleId: w,
                    rejectToolStepErrors: b,
                    stepIdsToInclude: I,
                    sendPatchResponse: k,
                    initialAgentActions: T,
                    isRetry: C,
                    additionalDebugOverrides: P
                } = e, N = (0, r(974410).f)(f) ? ? (0, r(328765).S)(), x = null == N ? void 0 : N.id;
                if (!x) throw Error("No space id");
                let M = function(e) {
                        let {
                            spaceId: t,
                            playgroundEnabled: n,
                            threadAgentMessageKey: i,
                            createThreadAgentMessageKey: a
                        } = e;
                        if (!n) return;
                        let s = i ? ? a;
                        if (s) return (0, r(838526).cG)({
                            spaceId: t,
                            messageKey: s
                        })
                    }({
                        spaceId: x,
                        playgroundEnabled: r(218744).default.checkGate({
                            gateName: "proactive_agent_message_playground"
                        }),
                        threadAgentMessageKey: null == f || null == (t = f.getData()) ? void 0 : t.agent_message_key,
                        createThreadAgentMessageKey: null == m ? void 0 : m.agentMessageKey
                    }),
                    F = (null == f ? void 0 : f.getTranscript()) ? ? (null == m ? void 0 : m.transcript) ? ? [];
                if (0 === F.length) throw Error("No transcript");
                let E = function(e, t, n) {
                    var a, s;
                    let o = e.findLast(e => "agent-turn-full-record-map" === e.type);
                    if (!(null != o && o.recordVersions)) return;
                    let l = new(r(227318)).d;
                    for (let {
                            pointer: e,
                            version: t
                        } of o.recordVersions)
                        if (e.table === c().evP) {
                            let r = i().Bv.createChildStore(n, e);
                            if ((r.getVersion() ? ? 0) <= t) continue;
                            let a = (0, i().Nq)(r);
                            (null != a && a.isPageBlock() || null != a && a.isCollectionView()) && l.add(a.pointer)
                        }
                    return l.size() > 0 ? {
                        id: (a = t, s = n.id, (0, r(295447).Z1)({
                            environment: a,
                            table: c().mSw,
                            spaceId: s
                        })),
                        type: "agent-records-updated",
                        pointers: Array.from(l)
                    } : void 0
                }(F, h, N);
                E && (F = [...F, E]);
                let U = null == (n = (0, s().TU)({
                        transcript: F
                    })) ? void 0 : n.type,
                    W = I ? F.filter(e => I.includes(e.id) || J.includes(e.type)) : F,
                    R = !!I,
                    q = (null == f ? void 0 : f.id) ? ? (null == m ? void 0 : m.id);
                if (!q) throw Error("No thread id");
                let {
                    model: V
                } = p.state, {
                    cachedInferences: L,
                    annotationInferences: O
                } = (0, r(187353).Hg)(p, q), D = new AbortController, B = {};
                for (let e of L) {
                    if (!e.value.expected) throw Error("No expected output for cached inference");
                    if ((0, o().Mt)(e.value.expected)) throw Error("Merged response not supported");
                    B[e.key] = e.value.expected
                }
                let z = {};
                for (let e of O) e.value.input.annotation && (z[e.key] = e.value.input.annotation);
                let H = p.getOrCreateClientAIChatThreadStore(q),
                    j = H.getOrCreateDraftTraceId();
                H.setState({ ...H.state,
                    inferences: [],
                    temporarySteps: (null == m ? void 0 : m.transcript) ? ? (k ? [] : H.state.temporarySteps),
                    abortController: D,
                    traceId: j,
                    draftTraceId: void 0,
                    loading: !0,
                    currentUserInitiatedRunningInference: !0,
                    wasForceStoppedByUser: !1
                }), H.state.stopInferencePromise && (await H.state.stopInferencePromise, H.setState({ ...H.state,
                    stopInferencePromise: void 0
                }));
                let G = !!(null == f || null == (a = f.getData()) ? void 0 : a.title),
                    Y = {
                        traceId: j,
                        spaceId: x,
                        transcript: W,
                        threadId: q,
                        threadParentPointer: null == m ? void 0 : m.parentPointer,
                        threadWorkflowId: null == m ? void 0 : m.workflowId,
                        createThread: void 0 === f,
                        debugOverrides: { ...p.state.debugOverrides,
                            ...M,
                            ...P,
                            cachedInferences: B,
                            annotationInferences: z,
                            model: V,
                            emitInferences: p.state.showDebug
                        },
                        generateTitle: !G || !!v,
                        saveAllThreadOperations: !0,
                        setUnreadState: (0, r(828560).hw)(),
                        analyticsArgs: _,
                        confirmToolStepIds: y,
                        rejectToolStepIds: S,
                        connectFlowCreatedModuleId: w,
                        rejectToolStepErrors: b,
                        createdSource: (null == m ? void 0 : m.createdSource) ? ? (0, s().kQ)(F),
                        agentMessageKey: null == m ? void 0 : m.agentMessageKey,
                        threadType: U,
                        isPartialTranscript: R,
                        asPatchResponse: !!k,
                        initialAgentActions: null != T && T.length ? [...T] : void 0,
                        isUserInAnySalesAssistedSpace: (0, r(598132).h0)(h),
                        isSpaceSalesAssisted: (0, r(598132).lM)(h, x)
                    };
                p.state.showDebug && H.setState({ ...H.state,
                    requestInfo: {
                        request: { ...Y,
                            transcript: F
                        },
                        response: void 0,
                        memories: []
                    }
                });
                try {
                    g && await g, await er({
                        environment: h,
                        abortController: D,
                        clientStore: p,
                        request: Y,
                        fullTranscript: F,
                        isRetry: C
                    })
                } catch (e) {
                    en(D, e) ? await Z({
                        environment: h,
                        clientStore: p,
                        threadId: q
                    }) : (u = e) instanceof Error && "TypeError" === u.name && "network error" === u.message ? l().log({
                        level: "error",
                        from: "runFromStep",
                        type: "longRunningInferenceTranscriptApiConnectionDrop",
                        data: {
                            miscDataToConvertToString: {
                                spaceId: x,
                                threadId: q
                            }
                        }
                    }) : d.isJSONPatchError(e) || l().log({
                        level: "error",
                        from: "runFromStep",
                        type: "runInferenceTranscriptApiError",
                        error: (0, A().convertErrorToLog)(e),
                        data: {
                            miscDataToConvertToString: {
                                spaceId: x,
                                threadId: q
                            }
                        }
                    })
                }
                H.setState({ ...H.state,
                    abortController: void 0,
                    loading: !1,
                    currentUserInitiatedRunningInference: !1,
                    temporarySteps: []
                })
            }
            async function Z(e) {
                let {
                    environment: t,
                    clientStore: n,
                    threadId: i
                } = e, a = r(728372).AppStoreCurrentUserStore.state, s = r(728372).AppStoreSidebarSpaceStore.state;
                if (!a || !s) throw Error("No current user root store");
                let o = n.getOrCreateClientAIChatThreadStore(i),
                    l = s.getSpaceId(),
                    u = r(174148).E.createChildStore(s, {
                        id: i,
                        spaceId: l,
                        table: c().Toz
                    });
                if (!u) return;
                let {
                    serverCommitResult: d
                } = (0, r(377796).createAndCommit)({
                    userAction: "inferenceTranscriptActions.handleAbort",
                    environment: t,
                    cellTarget: {
                        spaceWithId: l
                    },
                    canUndo: !0,
                    perform: e => {
                        Y({
                            environment: t,
                            spaceStore: s,
                            userStore: a,
                            threadStore: u,
                            addSteps: o.state.temporarySteps,
                            transaction: e,
                            filterStreamingSteps: !0
                        })
                    }
                });
                return d
            }

            function ee(e) {
                let t, n, i, l, {
                        environment: d,
                        threadId: p,
                        transcript: h,
                        traceId: f,
                        analyticsArgs: m,
                        createdSource: g,
                        isRetry: _
                    } = e,
                    v = (0, r(187353).jT)(h),
                    y = (0, o().sQ)(v),
                    S = performance.now(),
                    w = new N;
                w.start();
                let b = h.filter(e => "user" === e.type).length > 1,
                    I = h.filter(e => "user" === e.type).length > 1,
                    k = !1,
                    T = !1,
                    C = h.filter(e => "user" === e.type).length > 1,
                    A = !1;
                return {
                    deepFindResultsOnClient: e => {
                        b || ((0, r(850552).hp)({
                            environment: d,
                            assistantSessionId: void 0,
                            searchSessionId: y,
                            traceId: f,
                            threadId: p,
                            showResults: e.showResults,
                            timeSinceTurnStartMs: performance.now() - S,
                            createdSource: g
                        }), b = !0)
                    },
                    deepFindBeginAiAnswer: () => {
                        I || ((0, r(850552).S9)({
                            environment: d,
                            assistantSessionId: void 0,
                            searchSessionId: y,
                            threadId: p,
                            timeSinceTurnStartMs: performance.now() - S,
                            createdSource: g
                        }), I = !0)
                    },
                    beginInferenceTranscriptTurn: () => {
                        k || (! function(e) {
                            var t, n, i, a, o, l;
                            let {
                                environment: c,
                                threadId: d,
                                traceId: p,
                                config: h,
                                suggestedPrompt: f,
                                isFollowUp: m,
                                transcript: g
                            } = e, _ = (0, r(187353).o)(g), v = V({
                                transcript: g,
                                contextSurface: null == _ || null == (t = _.value) ? void 0 : t.surface
                            }), y = g.findLast(e => "user" === e.type), S = function(e) {
                                if (!e) return;
                                let t = new(r(277637)).G(() => 0);
                                for (let r of e)
                                    for (let e of (0, u().uPN)(r))(0, u().qsB)(e) ? t.set("date", t.get("date") + 1) : (0, u().rie)(e) ? t.set("user", t.get("user") + 1) : (0, u().jIt)(e) && t.set("page", t.get("page") + 1);
                                let n = {};
                                for (let [e, r] of t.entries()) n[e] = r;
                                return n || void 0
                            }(null == y ? void 0 : y.value), w = (null == _ || null == (n = _.value) ? void 0 : n.surface) === "full_page_chat" || "chat" === c.RouterStore.state.route.name;
                            if (!m && w && (0, r(828560).hw)() && r(707964).u4({
                                    name: "slippery_slope_new_chat_submitted",
                                    args: {
                                        thread_id: d
                                    }
                                }), (null == h ? void 0 : h.type) === "markdown-chat")(0, r(104310).u)({
                                event: {
                                    eventName: "markdown_chat_start_turn",
                                    eventProperties: {
                                        thread_id: d,
                                        trace_id: p,
                                        is_follow_up: m,
                                        model: h.model,
                                        suggested_prompt: f,
                                        mentions_used: S,
                                        opened_from: null == _ || null == (o = _.value) ? void 0 : o.surface
                                    }
                                }
                            });
                            else if ((null == h ? void 0 : h.type) === "researcher") r(274498).Bg({
                                threadId: d,
                                traceId: p,
                                environment: c,
                                isFollowUp: m,
                                searchSources: (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                searchScopeType: (null == (l = h.searchScope) ? void 0 : l.type) ? ? "everything"
                            });
                            else if ((null == h ? void 0 : h.type) === "search")(0, r(104310).u)({
                                event: {
                                    eventName: "deep_find_start_turn",
                                    eventProperties: {
                                        thread_id: d,
                                        trace_id: p,
                                        is_follow_up: m,
                                        from: null == _ ? void 0 : _.value.surface,
                                        suggested_prompt: f,
                                        search_session_id: null == h ? void 0 : h.searchSessionId,
                                        search_sources: (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                        search_scope_type: h.scopeForNextSearch.type
                                    }
                                }
                            });
                            else if ((null == h ? void 0 : h.type) === "workflow") {
                                let t = g.findLast(e => "user" === e.type || "user-injected" === e.type),
                                    n = void 0 !== t && (0, s().Ll)(t);
                                r(305721).trackAgentStartTurn({
                                    environment: c,
                                    from: v,
                                    searchSources: (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                    actionCardId: void 0,
                                    isDatabaseAgent: null == h ? void 0 : h.isDatabaseAgent,
                                    suggestedPrompt: e.suggestedPrompt,
                                    isRetry: e.isRetry,
                                    allowEditsEnabled: !h.useReadOnlyMode,
                                    threadId: d,
                                    config: h,
                                    workflowId: h.workflowId,
                                    runId: h.workflowRunId,
                                    hasMailTrigger: h.hasMailTrigger,
                                    mailTriggerTypes: h.mailTriggerTypes,
                                    inputModality: e.inputModality,
                                    enableScriptAgent: h.enableScriptAgent,
                                    isAutoTriggered: n
                                })
                            }(0, r(104310).u)({
                                event: {
                                    eventName: "inference_transcript_start_turn",
                                    eventProperties: {
                                        thread_id: e.threadId,
                                        trace_id: e.traceId,
                                        config: e.config,
                                        suggested_prompt: e.suggestedPrompt,
                                        opened_from: null == _ || null == (i = _.value) ? void 0 : i.surface,
                                        workflow_id: (null == (a = e.config) ? void 0 : a.type) === "workflow" ? e.config.workflowId : void 0
                                    }
                                }
                            })
                        }({
                            environment: d,
                            threadId: p,
                            traceId: f,
                            config: v,
                            suggestedPrompt: null == m ? void 0 : m.suggestedPrompt,
                            isFollowUp: C,
                            transcript: h,
                            isRetry: _,
                            inputModality: "typed"
                        }), k = !0)
                    },
                    markStreamStartIfUnmarked: () => {
                        void 0 === t && (t = performance.now())
                    },
                    markFirstTokenIfUnmarked: () => {
                        void 0 === n && (n = performance.now())
                    },
                    markStreamFinishedIfUnmarked: () => {
                        void 0 === i && (i = performance.now())
                    },
                    markCompletionIfUnmarked: () => {
                        void 0 === l && (l = performance.now())
                    },
                    endInferenceTranscriptTurn: ({
                        isError: e,
                        stepsFromTurn: o,
                        wasUserStopped: m
                    }) => {
                        if (T) return;
                        let g = t ? t - S : void 0,
                            y = n ? n - S : void 0,
                            b = l && i ? l - i : void 0,
                            I = l ? l - S : void 0,
                            k = w.stop(),
                            P = k.avg;
                        ! function(e) {
                            var t, n, i, o, l, d, p, h, f;
                            let {
                                config: m,
                                threadId: g,
                                traceId: _,
                                environment: v,
                                isError: y,
                                isFollowUp: S,
                                transcript: w,
                                stepsFromTurn: b,
                                clientTimingMetrics: I,
                                wasUserStopped: k
                            } = e, T = (0, r(187353).o)(w), C = V({
                                transcript: w,
                                contextSurface: null == T || null == (t = T.value) ? void 0 : t.surface
                            }), A = (0, r(342778).E4)({
                                stepsFromTurn: b,
                                isError: y
                            }), P = w.some(e => "agent-prebuilt-prompt" === e.type && "test_custom_agent" === e.promptType), N = function(e) {
                                let {
                                    config: t,
                                    transcript: n,
                                    stepsFromTurn: i
                                } = e;
                                if ((null == t ? void 0 : t.type) !== "workflow" || !t.isCustomAgent) return;
                                let s = function(e) {
                                        if (!e) return;
                                        let t = (0, r(328765).S)();
                                        if (t) try {
                                            let n = r(360851).N.createChildStore(t, {
                                                table: c().C0E,
                                                id: e,
                                                spaceId: t.id
                                            });
                                            if (!n.isReady()) return;
                                            return n.getData()
                                        } catch (t) {
                                            (0, r(222024).t)().error({
                                                from: "inferenceTranscriptAnalyticsActions",
                                                type: "custom_agent_instructions_page_resolution_failed",
                                                error: t,
                                                data: {
                                                    workflowId: e
                                                }
                                            });
                                            return
                                        }
                                    }(t.workflowId),
                                    o = (0, r(886883).ap)(null == s ? void 0 : s.instructions) ? null == s ? void 0 : s.instructions.id : void 0,
                                    l = !1,
                                    u = !1,
                                    d = !1,
                                    p = !1,
                                    h = !1,
                                    f = !1,
                                    m = (0, r(588831).n)(n),
                                    g = null == m ? void 0 : m.promptType;
                                for (let e of (void 0 !== g && (0, r(722371).Xk)(q, g) && (l = !0), i)) {
                                    var _, v, y;
                                    if ("agent-tool-result" === e.type && ("enter-setup-mode" === e.toolName || "exit-setup-mode" === e.toolName) && (h = !0), (0, R().LO)(e) && (l = !0), "agent-tool-result" === e.type && (0, a().gY)(e, "update-agent-v2"))
                                        for (let t of (null == (y = e.input) ? void 0 : y.edits) ? ? []) {
                                            let e = t.path[0];
                                            "triggers" === e ? u = !0 : "modules" === e ? p = !0 : "instructions" === e && (d = !0)
                                        }
                                    "agent-tool-result" === e.type && o && (0, a().gY)(e, "update-page") && (null == (_ = e.result) ? void 0 : _.pageId) === o && (d = !0), "agent-tool-result" === e.type && o && (0, a().gY)(e, "update-page-v2") && (null == (v = e.result) ? void 0 : v.pageId) === o && (d = !0), "agent-tool-result" === e.type && (0, a().gY)(e, "update-page-v2") && (f = !0)
                                }
                                return !d && h && f && (d = !0), {
                                    custom_agent_updated: l || u || d || p,
                                    custom_agent_updated_triggers: u,
                                    custom_agent_updated_instructions: d,
                                    custom_agent_updated_modules: p
                                }
                            }({
                                config: m,
                                transcript: w,
                                stepsFromTurn: b
                            });
                            if ((null == m ? void 0 : m.type) === "markdown-chat")(0, r(104310).u)({
                                event: {
                                    eventName: "markdown_chat_end_turn",
                                    eventProperties: {
                                        thread_id: g,
                                        trace_id: _,
                                        is_error: y,
                                        is_follow_up: S,
                                        opened_from: null == T || null == (i = T.value) ? void 0 : i.surface
                                    }
                                }
                            });
                            else if ((null == m ? void 0 : m.type) === "researcher" && w) {
                                let {
                                    citationInfo: e,
                                    reportContent: t
                                } = (0, r(177861).VJ)(b), {
                                    resultsBySource: n,
                                    numSearchResults: i
                                } = (0, r(177861).W6)(e), {
                                    citationsBySource: a,
                                    numCitationsShown: s
                                } = (0, r(177861).ye)(t, e), l = r(274498).Yh(b), c = r(274498).ay(b);
                                r(274498).g$({
                                    threadId: g,
                                    traceId: _,
                                    environment: v,
                                    isFollowUp: S,
                                    isError: y,
                                    numSearchResults: i,
                                    numCitationsShown: s,
                                    resultsBySource: n,
                                    citationsBySource: a,
                                    stepsGenerated: l,
                                    planningRounds: c,
                                    searchSources: (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                    searchScopeType: (null == (o = m.searchScope) ? void 0 : o.type) ? ? "everything"
                                }), r(707964).u4({
                                    name: "finished_og_research_mode",
                                    args: {
                                        ai_session_id: g,
                                        thread_id: g
                                    }
                                })
                            } else if ((null == m ? void 0 : m.type) === "search") {
                                let {
                                    maybeSearchStep: e,
                                    maybeSearchChatStep: t,
                                    numCitations: n,
                                    citationsBySource: i,
                                    resultsBySource: a
                                } = (0, r(342778).AV)(b);
                                (0, r(104310).u)({
                                    event: {
                                        eventName: "deep_find_end_turn",
                                        eventProperties: {
                                            thread_id: g,
                                            trace_id: _,
                                            is_follow_up: S,
                                            from: null == T ? void 0 : T.value.surface,
                                            search_results: a ? r(381453).cz(Object.values(a)) : void 0,
                                            results_by_source: a,
                                            citations_shown: n,
                                            citations_by_source: i,
                                            search_scope_type: (null == e || null == (l = e.scope) ? void 0 : l.type) ? ? "",
                                            search_sources: (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                            did_search: (null == t ? void 0 : t.didSearch) ? ? void 0,
                                            has_search_step: void 0 !== e,
                                            forcefully_stopped_by_user: k,
                                            result: A
                                        }
                                    }
                                })
                            } else if ((null == m ? void 0 : m.type) === "workflow") {
                                let t = (0, r(422052).getAnalyticsSearchSourcesFromAssistantFeatureGateStore)(),
                                    n = r(305721).calculateMetricsFromTranscript(b),
                                    i = (0, r(342778).DW)(b, { ...r(986939).A,
                                        requestedOnAlternateDomain: (0, r(700473).wasRequestedOnAlternateDomain)()
                                    }),
                                    a = w.filter(e => "user" === e.type).length,
                                    o = w.findLast(e => "user" === e.type || "user-injected" === e.type),
                                    l = void 0 !== o && (0, s().Ll)(o),
                                    y = 0,
                                    S = !1,
                                    x = !1;
                                for (let t of b) "agent-inference" === t.type && (void 0 !== t.cachedTokensRead && t.cachedTokensRead > 0 && (y += t.cachedTokensRead), e.seenSpeculativeSearchResultsUsed && (x = !0), t.speculativeSearchTriggered && (S = !0)), "agent-tool-result" === t.type && t.fromSpeculativeSearch && (x = !0);
                                let M = 0,
                                    F = 0,
                                    E = w.findLast(e => "user" === e.type);
                                if (E) {
                                    let e = (0, u().k4p)(E.value);
                                    e && (M = e.length, F = (0, r(388400).I8)(e))
                                }
                                let U = !1,
                                    W = !1,
                                    R = w.findLast(e => "user-specified-context" === e.type);
                                if (null != R && R.value) {
                                    let {
                                        textSelection: e,
                                        blockSelection: t,
                                        pointers: r
                                    } = R.value;
                                    null != e && e.value && (U = !0), ((null == t ? void 0 : t.value) ? ? []).length > 0 && (U = !0), (r ? ? []).some(e => e.table === c().evP) && (W = !0)
                                }
                                let q = function(e) {
                                        let t = e.findLastIndex(e => "user" === e.type || "user-injected" === e.type);
                                        if (t < 0) return e;
                                        let r = e.slice(0, t).findLastIndex(e => "user" === e.type || "user-injected" === e.type);
                                        return e.slice(r >= 0 ? r + 1 : 0, t + 1)
                                    }(w),
                                    V = (0, r(588831).n)(q),
                                    L = (0, r(342778)._G)(b),
                                    O = (null == V ? void 0 : V.promptType) ? ? ("rich_text_menu" === C ? "ask_ai" : void 0);
                                if (r(305721).trackAgentEndTurn({
                                        environment: v,
                                        from: C,
                                        openedFrom: null == T || null == (d = T.value) ? void 0 : d.surface,
                                        checklistId: null == T || null == (p = T.value) ? void 0 : p.checklistId,
                                        checklistStepId: null == T || null == (h = T.value) ? void 0 : h.checklistStepId,
                                        numUserStepsInTranscript: a,
                                        searchSources: t,
                                        ...n,
                                        ...i,
                                        clientTimeToStartStream: null == I ? void 0 : I.clientTimeToStartStream,
                                        clientTimeToFirstToken: null == I ? void 0 : I.clientTimeToFirstToken,
                                        clientTimeToFlushUiUpdates: null == I ? void 0 : I.clientTimeToFlushUiUpdates,
                                        clientTotalTurnDuration: null == I ? void 0 : I.clientTotalTurnDuration,
                                        clientAvgFps: null == I ? void 0 : I.clientAvgFps,
                                        clientMinFps: null == I ? void 0 : I.clientMinFps,
                                        clientMaxFps: null == I ? void 0 : I.clientMaxFps,
                                        isDatabaseAgent: null == m ? void 0 : m.isDatabaseAgent,
                                        cachedTokensRead: y,
                                        numUserPromptCharacters: M,
                                        numUserPromptWords: F,
                                        forcefullyStoppedByUser: k,
                                        result: A,
                                        numAgentDiffCards: L,
                                        isRetry: e.isRetry,
                                        allowEditsEnabled: !m.useReadOnlyMode,
                                        followupVariation: m.agentFollowupVariation ? m.agentFollowupVariation.join("_") : "default",
                                        workflowId: m.workflowId,
                                        runId: m.workflowRunId,
                                        hasAnySelectionContext: U,
                                        hasAnyPageContext: W,
                                        promptKey: O,
                                        traceId: _,
                                        threadId: g,
                                        speculativeSearchTriggered: S,
                                        speculativeSearchResultsUsed: x,
                                        enableScriptAgent: m.enableScriptAgent,
                                        isAutoTriggered: l,
                                        customAgentUpdated: null == N ? void 0 : N.custom_agent_updated,
                                        customAgentUpdatedTriggers: null == N ? void 0 : N.custom_agent_updated_triggers,
                                        customAgentUpdatedInstructions: null == N ? void 0 : N.custom_agent_updated_instructions,
                                        customAgentUpdatedModules: null == N ? void 0 : N.custom_agent_updated_modules,
                                        isInTestingThread: P
                                    }), (null == T || null == (f = T.value) ? void 0 : f.surface) === "trial_home") {
                                    let e = r(728372).AppStoreSidebarSpaceViewStore.state;
                                    e && (0, r(751568).T)({
                                        spaceViewStore: e,
                                        itemId: "meetAgent",
                                        completionType: "action"
                                    })
                                }
                                0 === n.numToolRun && (0, r(104310).u)({
                                    event: {
                                        eventName: "agent_end_turn_no_tool_results",
                                        eventProperties: {
                                            ai_session_id: g,
                                            ai_inference_id: r(305721).getInferenceIdFromThreadId(g),
                                            steps_after_last_user_step: r(305721).getStepSummaries(w)
                                        }
                                    }
                                })
                            }(0, r(104310).u)({
                                event: {
                                    eventName: "inference_transcript_end_turn",
                                    eventProperties: {
                                        thread_id: e.threadId,
                                        trace_id: e.traceId,
                                        is_error: e.isError,
                                        opened_from: null == T || null == (n = T.value) ? void 0 : n.surface,
                                        config: m,
                                        forcefully_stopped_by_user: k,
                                        result: A,
                                        workflow_id: (null == m ? void 0 : m.type) === "workflow" ? m.workflowId : void 0,
                                        custom_agent_testing_thread: P,
                                        ...N
                                    }
                                }
                            })
                        }({
                            environment: d,
                            config: v,
                            threadId: p,
                            traceId: f,
                            isError: e,
                            isFollowUp: C,
                            transcript: h,
                            stepsFromTurn: o,
                            wasUserStopped: m,
                            clientTimingMetrics: {
                                clientTimeToStartStream: g,
                                clientTimeToFirstToken: y,
                                clientTimeToFlushUiUpdates: b,
                                clientTotalTurnDuration: I,
                                clientAvgFps: P,
                                clientMinFps: k.min,
                                clientMaxFps: k.max
                            },
                            isRetry: _,
                            seenSpeculativeSearchResultsUsed: A
                        }), T = !0
                    },
                    markSpeculativeSearchResultsUsed: () => {
                        A = !0
                    },
                    cleanup: () => {
                        T || w.stop()
                    }
                }
            }
            async function* et(e) {
                let {
                    responseStream: t,
                    environment: n,
                    threadStore: i,
                    threadId: a,
                    spaceId: c
                } = e, u = !1, p = !0, h = [], f = {
                    s: h
                }, m = !1;
                for await (let e of t) {
                    try {
                        "error" === e.type && (u = !0), "queue-handoff" === e.type && (p = !1), (0, s().yD)(e) ? m || (h = function(e) {
                            let {
                                environment: t,
                                threadId: n,
                                value: i,
                                patchState: a,
                                spaceId: s
                            } = e;
                            if ("patch-start" === i.type) {
                                let e = a.s;
                                for (let t of i.data.s) e = (0, o().RM)(e, t);
                                return e
                            }
                            return "patch" !== i.type && (0, r(722371).HB)(i),
                                function(e) {
                                    let {
                                        environment: t,
                                        threadId: r,
                                        patches: n,
                                        patchState: i,
                                        spaceId: a
                                    } = e;
                                    try {
                                        return k(i, n, {
                                            mutate: !1
                                        }).s
                                    } catch (e) {
                                        throw d.isJSONPatchError(e) && l().log({
                                            level: "error",
                                            from: "inferenceTranscriptActions",
                                            type: "JsonPatchError",
                                            team: "ai-ux",
                                            error: (0, A().convertErrorToLog)(e),
                                            data: {
                                                miscDataToConvertToString: {
                                                    spaceId: a,
                                                    userId: t.currentUser.id,
                                                    threadId: r,
                                                    message: e.name,
                                                    operationPath: e.path,
                                                    operationDetails: e.operation ? {
                                                        op: e.operation.op,
                                                        path: e.operation.path
                                                    } : void 0
                                                }
                                            }
                                        }), e
                                    }
                                }({
                                    patches: i.v.map(C),
                                    patchState: a,
                                    environment: t,
                                    threadId: n,
                                    spaceId: s
                                })
                        }({
                            environment: n,
                            threadId: a,
                            value: e,
                            patchState: f,
                            spaceId: c
                        })) : h = function(e) {
                            let {
                                threadStore: t,
                                value: n,
                                environment: i,
                                currentSteps: a
                            } = e, s = i.currentUser.id, l = a;
                            if ("queue-handoff" === n.type || "reenqueue-with-delay" === n.type);
                            else if ("record-map" === n.type)(0, r(31069)._)({
                                currentUserId: i.currentUser.id,
                                defaultRecordCache: i.defaultRecordCache,
                                userId: s,
                                inMemoryRecordCache: i.defaultRecordCache.inMemoryRecordCache,
                                recordMap: r(412951).RecordMapWithRole.create(n.recordMap),
                                debugSource: "runInferenceTranscript",
                                force: !0,
                                isPendingTransactionForRecord: r(941701).transactionQueue.isPendingTransactionForRecord.bind(r(941701).transactionQueue)
                            });
                            else if ("inference" === n.type) {
                                let e = {
                                        type: "inference",
                                        key: (0, r(548161).$A)(n.value.input),
                                        index: n.index,
                                        value: n.value
                                    },
                                    i = r(381453).Ul([...t.state.inferences, e], e => e.index);
                                t.setState({ ...t.state,
                                    inferences: i
                                })
                            } else "agent-search-extracted-results" === n.type ? t.setAgentSearchResultsForTool(n) : "patch" !== n.type && "patch-start" !== n.type && (l = (0, o().RM)(l, n));
                            return l
                        }({
                            environment: n,
                            threadStore: i,
                            value: e,
                            currentSteps: h
                        }), f = {
                            s: h
                        }
                    } catch (e) {
                        if (d.isJSONPatchError(e)) m = !0;
                        else throw e
                    }
                    yield {
                        temporarySteps: h,
                        isError: u,
                        inferenceComplete: p
                    }
                }
            }
            async function er(e) {
                let {
                    environment: t,
                    abortController: n,
                    clientStore: o,
                    request: l,
                    fullTranscript: d,
                    isRetry: p
                } = e, {
                    spaceId: h,
                    threadId: f,
                    traceId: m,
                    analyticsArgs: g,
                    createdSource: _
                } = l;
                if (!f) throw Error("Expected a threadId");
                let v = o.getOrCreateClientAIChatThreadStore(f),
                    y = (0, r(115118).WS)({
                        spaceId: h
                    }),
                    S = await t.api.callStreamApi({
                        eventName: "runInferenceTranscript",
                        environment: t,
                        data: l,
                        abortSignal: n.signal,
                        headers: y
                    });
                if ("failed" === S.type) {
                    var w;
                    if ((null == (w = S.body) ? void 0 : w.name) === "AbortedError") throw new DOMException("Aborted", "AbortError");
                    throw S.error
                }
                if (!r(331653).hS.is(S.data)) throw Error("Expected stream response and got non-stream response.");
                let b = [],
                    I = ee({
                        environment: t,
                        threadId: f,
                        transcript: d,
                        traceId: m,
                        analyticsArgs: g,
                        createdSource: _,
                        isRetry: p
                    }),
                    k = !0,
                    T = !1;
                I.beginInferenceTranscriptTurn(), I.markStreamStartIfUnmarked();
                let C = et({
                    responseStream: S.data,
                    environment: t,
                    threadId: f,
                    threadStore: v,
                    spaceId: h
                });

                function A(e) {
                    let n = v.state.temporarySteps.filter(e => "user-turn" === r(490591).jt[e.type] || "agent-integration" === e.type),
                        s = new Set(e.map(e => e.id)),
                        p = [...n.filter(e => !s.has(e.id)), ...e];
                    v.setState({ ...v.state,
                            temporarySteps: p
                        }),
                        function(e) {
                            let {
                                environment: t,
                                request: n,
                                threadStore: s,
                                updatedSteps: o,
                                isDebugEnabled: l,
                                fullTranscript: d,
                                spaceId: p
                            } = e, h = [...d, ...o], f = o[o.length - 1];
                            if (f && (function(e) {
                                    var t;
                                    let {
                                        environment: n,
                                        step: s,
                                        transcript: o,
                                        spaceId: l
                                    } = e;
                                    if ((0, r(997486).bI)((0, r(997486).i)(o)) || "agent-tool-result" !== s.type || !(0, a().gY)(s, "create-database") || !(null != (t = s.result) && t.shouldNavigate) || !s.result.collectionViewBlockId || (0, r(187353).d$)({
                                            transcript: o
                                        })) return;
                                    let u = {
                                            id: s.result.collectionViewBlockId,
                                            spaceId: l,
                                            table: c().evP
                                        },
                                        d = (0, r(354128).getAgentPreviewWrapper)(n),
                                        p = new(i()).Bv(n, u, {
                                            inMemoryRecordCache: d.getInMemoryRecordCacheIfIsPreviewingRecord(u, n.currentUser.id)
                                        });
                                    if (!p.isNavigableBlock()) return;
                                    let h = (0, r(483227).Ef)({
                                        environment: n,
                                        updates: {
                                            store: p
                                        }
                                    });
                                    h && (0, r(79266).navigate)({
                                        environment: n,
                                        url: h,
                                        redirect: !1
                                    })
                                }({
                                    environment: t,
                                    step: f,
                                    transcript: h,
                                    spaceId: p
                                }), n.threadId)) {
                                let e = o.find(e => {
                                    var t, r, n, i;
                                    return "agent-tool-result" === e.type && "applied" === (0, a().Gu)(e) && !!((0, a().gY)(e, "create-pages") && null != (t = e.result) && null != (t = t.pages) && null != (t = t[0]) && t.pointer || (0, a().gY)(e, "create-database") && null != (r = e.result) && r.collectionViewBlockId || (0, a().gY)(e, "callFunction") && (null == (n = e.input) ? void 0 : n.function) === "connections.notion.createPage" && (0, u().moK)(null == (i = e.result) ? void 0 : i.headerLabel).length > 0)
                                });
                                e && ep({
                                    environment: t,
                                    threadId: n.threadId,
                                    step: e,
                                    transcript: h,
                                    spaceId: p
                                }), (0, r(446062).F)(n.threadId) && eh({
                                    environment: t,
                                    updatedSteps: o
                                })
                            }
                            l && s.setState({ ...s.state,
                                requestInfo: { ...s.state.requestInfo,
                                    request: { ...n,
                                        transcript: d
                                    },
                                    response: {
                                        transcript: o
                                    },
                                    memories: []
                                }
                            })
                        }({
                            environment: t,
                            request: l,
                            isDebugEnabled: o.state.showDebug,
                            updatedSteps: b,
                            threadStore: v,
                            fullTranscript: d,
                            spaceId: h
                        })
                }
                try {
                    for await (let e of E({
                        generator: C,
                        update: A,
                        analyticsController: I
                    })) if (b = e.temporarySteps, T = e.isError, (k = e.inferenceComplete) && function(e) {
                            let t = !1,
                                r = !1;
                            for (let n of e) "agent-tool-result" === n.type && ("enter-setup-mode" === n.toolName && (t = !0), "exit-setup-mode" === n.toolName && (r = !0));
                            return t && !r
                        }(b) && (k = !1), b.length > 0) {
                        A(b);
                        let e = b.length > 0 ? b[b.length - 1] : null;
                        e && function(e) {
                            let {
                                analyticsController: t,
                                value: r
                            } = e;
                            switch (r.type) {
                                case "agent-inference":
                                    t.markFirstTokenIfUnmarked();
                                    break;
                                case "agent-tool-result":
                                    r.fromSpeculativeSearch && t.markSpeculativeSearchResultsUsed();
                                    break;
                                case "search":
                                    "resultsPartial" === r.status && t.deepFindResultsOnClient({
                                        showResults: r.showResults
                                    });
                                    break;
                                case "search-chat":
                                    t.deepFindBeginAiAnswer()
                            }
                        }({
                            analyticsController: I,
                            value: e
                        })
                    }
                } catch (e) {
                    throw k = !1, e
                } finally {
                    I.markCompletionIfUnmarked();
                    let e = v.state.wasForceStoppedByUser ? ? !1;
                    k ? I.endInferenceTranscriptTurn({
                        isError: T,
                        stepsFromTurn: b,
                        wasUserStopped: e
                    }) : function(e) {
                        let {
                            environment: t,
                            clientStore: n,
                            traceId: i,
                            analyticsArgs: o,
                            createdSource: l,
                            threadId: u,
                            isRetry: d
                        } = e, p = r(728372).AppStoreSidebarSpaceStore.state;
                        if (!p) return;
                        let h = r(174148).E.createChildStore(p, {
                            id: u,
                            spaceId: p.getSpaceId(),
                            table: c().Toz
                        });
                        if (!h) return;
                        let f = n.getOrCreateClientAIChatThreadStore(h.id),
                            m = new(r(345426)).ComputedStore(() => void 0 === h.getCurrentInferenceId() && !f.state.loading, {
                                debugName: `inferenceCompleteMonitor:${h.id}`
                            }),
                            g = () => {
                                if (m.state) {
                                    let {
                                        steps: c
                                    } = (0, r(187353).A3)({
                                        clientStore: n,
                                        threadStore: h
                                    }), u = (0, s().Pn)(c), p = ee({
                                        environment: t,
                                        threadId: h.id,
                                        transcript: c,
                                        traceId: i,
                                        analyticsArgs: o,
                                        createdSource: l,
                                        isRetry: d
                                    }), _ = e.wasUserStopped || !0 === f.state.wasForceStoppedByUser, v = e.wasError || u.some(e => "error" === e.type || "agent-debug-error" === e.type || "agent-tool-result" === e.type && "applied:error" === (0, a().Gu)(e));
                                    p.endInferenceTranscriptTurn({
                                        isError: v,
                                        stepsFromTurn: u,
                                        wasUserStopped: _
                                    }), f.setState({ ...f.state,
                                        wasForceStoppedByUser: !1
                                    }), m.removeListener(g)
                                }
                            };
                        m.addListener(g), m.state && g(), setTimeout(() => {
                            m.removeListener(g)
                        }, 6e5)
                    }({
                        environment: t,
                        clientStore: o,
                        threadId: f,
                        traceId: m,
                        analyticsArgs: g,
                        createdSource: _,
                        wasUserStopped: e,
                        wasError: T,
                        isRetry: p
                    }), v.setState({ ...v.state,
                        wasForceStoppedByUser: !1
                    }), I.cleanup()
                }
            }

            function en(e, t) {
                return t instanceof Error && "AbortError" === t.name && e.signal.aborted
            }

            function ei(e) {
                let t = new Map,
                    r = 1;
                return e.replace(/\[\^([^\]]+)\]/g, (e, n) => {
                    if (n.startsWith("user://")) return "";
                    let i = t.get(n);
                    return void 0 === i && (i = r++, t.set(n, i)), `[[${i}]](${n})`
                })
            }
            async function ea(e) {
                let t, {
                    environment: n,
                    step: i,
                    textContent: a
                } = e;
                if ("markdown-chat" === i.type || "fast-researcher-chat" === i.type) t = i.value;
                else if ("search-chat" === i.type) {
                    let e = (0, r(187353).Jz)(i.value);
                    t = (0, r(313168).Gw)({
                        text: e,
                        baseUrl: r(986939).A.domainBaseUrl
                    })
                } else if ("agent-inference" === i.type) t = a ? ei(a) : ei((0, r(258024).lH)(i.value).flatMap(e => "text" === e.type ? [e.content] : []).join(""));
                else throw Error("Unsupported step type");
                let [s, o] = await Promise.all([(0, r(161333).r)(), (0, r(969899).jd)()]);
                await o({
                    environment: n,
                    stringValue: t,
                    copiedMessage: s.copiedQnAMessageToClipboard
                })
            }

            function es(e) {
                let {
                    environment: t,
                    threadStore: n,
                    stepId: i,
                    analyticsArgs: a,
                    isRetry: s
                } = e, o = n.getSpaceId(), {
                    serverCommitResult: l
                } = (0, r(377796).createAndCommit)({
                    userAction: "AIChatTranscript.RunFromStepButton.handleClick",
                    environment: t,
                    cellTarget: o ? {
                        spaceWithId: o
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        K({
                            threadStore: n,
                            stepId: i,
                            transaction: e
                        })
                    }
                });
                X({
                    environment: t,
                    threadStore: n,
                    clientStore: r(57168).defaultClientAIChatStore,
                    analyticsArgs: a,
                    sendPatchResponse: !0,
                    stepIdsToInclude: [i],
                    waitBeforeSending: l,
                    isRetry: s
                })
            }

            function eo(e) {
                let {
                    threadStore: t,
                    config: n,
                    environment: i
                } = e;
                if (!t) return;
                let a = r(728372).AppStoreSidebarSpaceStore.state,
                    s = r(728372).AppStoreSidebarSpaceViewStore.state;
                if (!a || !s) return;
                let o = t.getTranscript(),
                    l = t.getMessageStores(),
                    c = o.findIndex(r(187353).sQ),
                    u = o[c],
                    d = l[c];
                if (c < 0 || !d || !u || "config" !== u.type || u.value.type !== n.type) return;
                let p = { ...u,
                        value: n
                    },
                    h = t.getSpaceId();
                (0, r(377796).createAndCommit)({
                    userAction: "AIChatTranscript.setConfigInThread",
                    environment: i,
                    cellTarget: h ? {
                        spaceWithId: h
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, r(368198).K)({
                            store: d.getStepStore(),
                            value: p,
                            transaction: e
                        })
                    }
                })
            }

            function el(e) {
                let {
                    environment: t
                } = e;
                return (function(e) {
                    let {
                        isResearchModeWebSearchEnabled: t,
                        showSetupGenerator: n,
                        environment: i
                    } = e;
                    return function(e) {
                        let {
                            configs: t,
                            isResearchModeWebSearchEnabled: n,
                            showSetupGenerator: i,
                            environment: a
                        } = e;
                        return t.map(e => (function(e) {
                            let {
                                config: t,
                                isResearchModeWebSearchEnabled: n,
                                showSetupGenerator: i,
                                environment: a
                            } = e;
                            if ("researcher" === t.type) return { ...t,
                                useWebSearch: n
                            };
                            if ("setup-generator" === t.type) {
                                if (!i) return
                            } else if ("workflow" === t.type) return (0, r(922900).getWorkflowAgentConfig)({
                                environment: a
                            });
                            return t
                        })({
                            config: e,
                            isResearchModeWebSearchEnabled: n,
                            showSetupGenerator: i,
                            environment: a
                        })).filter(r(722371).O9)
                    }({
                        configs: r(180139).hx,
                        isResearchModeWebSearchEnabled: t,
                        showSetupGenerator: n,
                        environment: i
                    })
                })({
                    isResearchModeWebSearchEnabled: r(886556).z.isResearchModeWebSearchEnabled(),
                    showSetupGenerator: r(886556).z.showSetupGenerator(),
                    environment: t
                }).find(e => "researcher" === e.type) ? ? {
                    type: "researcher"
                }
            }

            function ec(e) {
                let {
                    clientStore: t,
                    initialPerform: i,
                    threadStore: a
                } = e, s = (0, r(533992).v3)(), o = (0, r(548124).useThreadStoreFromCurrentRoute)(), l = a ? ? o, c = (0, r(682985).K8)(() => !!((null == l ? void 0 : l.getCurrentInferenceId()) !== void 0 || (null == l ? void 0 : l.id) && t.getOrCreateClientAIChatThreadStore(l.id).state.loading), [l, t]), u = (0, r(682985).K8)(() => null != l && l.id ? t.getOrCreateClientAIChatThreadStore(l.id) : void 0, [l, t]), [d, p] = (0, n.useState)(null), h = (0, r(682985).K8)(() => (null == u ? void 0 : u.state.pendingStop) ? ? !1, [u]), f = (0, r(682985).K8)(() => (null == l ? void 0 : l.getMessages().length) ? ? !1, [l]);
                return (0, n.useEffect)(() => {
                    if (d && h && l && f) {
                        p(null);
                        let e = l.getSpaceId(),
                            {
                                serverCommitResult: n
                            } = (0, r(377796).createAndCommit)({
                                userAction: d.userAction,
                                environment: s,
                                cellTarget: e ? {
                                    spaceWithId: e
                                } : void 0,
                                canUndo: !1,
                                perform: e => {
                                    null == i || i(e), j({
                                        threadStore: l,
                                        transaction: e,
                                        clientStore: t
                                    })
                                }
                            }),
                            a = t.getOrCreateClientAIChatThreadStore(l.id);
                        a.setState({ ...a.state,
                            stopInferencePromise: n,
                            pendingStop: !1
                        })
                    }
                }, [d, h, f, l, t, s, i]), (0, n.useCallback)(async e => {
                    let {
                        userAction: n
                    } = e, a = r(728372).AppStoreSidebarSpaceStore.state;
                    if (l && a && c)
                        if (f) {
                            let e = l.getSpaceId(),
                                {
                                    serverCommitResult: a
                                } = (0, r(377796).createAndCommit)({
                                    userAction: n,
                                    environment: s,
                                    cellTarget: e ? {
                                        spaceWithId: e
                                    } : void 0,
                                    canUndo: !1,
                                    perform: e => {
                                        null == i || i(e), j({
                                            threadStore: l,
                                            transaction: e,
                                            clientStore: t
                                        })
                                    }
                                }),
                                o = t.getOrCreateClientAIChatThreadStore(l.id);
                            o.setState({ ...o.state,
                                stopInferencePromise: a
                            }), await a
                        } else {
                            let e = t.getOrCreateClientAIChatThreadStore(l.id);
                            e.setState({ ...e.state,
                                loading: !1,
                                currentUserInitiatedRunningInference: !1,
                                pendingStop: !0
                            }), p({
                                userAction: n
                            })
                        }
                }, [t, s, l, c, i, f])
            }

            function eu(e) {
                let t = (0, r(548124).useThreadStoreFromCurrentRoute)(),
                    n = (null == e ? void 0 : e.providedThreadStore) ? ? t;
                return (0, r(682985).K8)(() => !!((null == n ? void 0 : n.id) && r(57168).defaultClientAIChatStore.getOrCreateClientAIChatThreadStore(n.id).state.loading || (null == n ? void 0 : n.getCurrentInferenceId()) !== void 0), [n])
            }

            function ed(e) {
                let {
                    environment: t,
                    operation: n,
                    transaction: i,
                    recordCache: a
                } = e;
                if ((0, r(305050).ph)(n))(0, r(857796).I)({
                    environment: t,
                    operation: n,
                    transaction: i,
                    inMemoryRecordCache: a
                });
                else if (n.pointer.table === c().evP)
                    if ("set" === n.command && 0 === n.path.length) {
                        let e = r(124937).Wv({
                            environment: t,
                            id: n.pointer.id,
                            type: n.args.type,
                            properties: n.args.properties,
                            format: n.args.format,
                            permissions: n.args.permissions,
                            createdById: n.args.created_by_id,
                            createdTime: n.args.created_time,
                            createdByTable: n.args.created_by_table,
                            inMemoryRecordCache: a ? ? t.defaultRecordCache.inMemoryRecordCache,
                            spaceId: n.args.space_id,
                            transaction: i
                        });
                        (0, P().y4)({
                            store: e,
                            operation: r(488307).op.update({
                                pointer: e.pointer,
                                path: [],
                                args: {
                                    parent_table: n.args.parent_table,
                                    parent_id: n.args.parent_id,
                                    alive: !0
                                }
                            }),
                            transaction: i
                        })
                    } else(0, r(857796).I)({
                        environment: t,
                        operation: n,
                        transaction: i,
                        inMemoryRecordCache: a
                    });
                else if ((0, r(488307).$Y)(n) || (0, r(488307).mP)(n)) {
                    let e = new(r(517013)).pm({
                        environment: t,
                        pointer: n.pointer,
                        path: n.path,
                        recordStoreOptions: {
                            inMemoryRecordCache: a
                        }
                    });
                    (0, P().y4)({
                        store: e,
                        operation: n,
                        transaction: i
                    })
                } else(0, r(722371).HB)(n)
            }
            async function ep(e) {
                let {
                    environment: t,
                    threadId: n,
                    step: s,
                    transcript: o,
                    spaceId: l
                } = e;
                if (!(0, r(446062).F)(n) || (0, r(187353).d$)({
                        transcript: o
                    })) return;
                let {
                    default: d
                } = await r.e(31426).then(r.bind(r, 218744)), {
                    getOnboardingAgentVariant: p
                } = await r.e(31426).then(r.bind(r, 73233)), h = p(), f = d.getEligibleGroup({
                    experimentId: "uxr_debug_onboarding_agent",
                    disableExposureLogging: !0
                });
                if ((0, r(565719).w)(h) || (0, r(565719).w)(f)) {
                    var m, g, _;
                    let e = (null == (m = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (m = m.getSettings()) ? void 0 : m.post_onboarding_agent_config) ? ? {},
                        {
                            hasOnboardingAgentMutatedFirstBlock: a
                        } = await r.e(14770).then(r.bind(r, 811853));
                    if (!a({
                            postOnboardingAgentConfig: e
                        })) {
                        let e = null == (g = r(728372).AppStoreSidebarSpaceViewStore.state) || null == (g = g.getSettings()) || null == (g = g.getting_started_page_ids) ? void 0 : g[0];
                        if (e) {
                            let a = new(i()).Bv(t, {
                                id: e,
                                table: c().evP,
                                spaceId: l
                            });
                            if (a.isDefined() && (null == (_ = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : _.id) !== e) {
                                let {
                                    navigateToBlock: e
                                } = await Promise.resolve().then(r.bind(r, 545586));
                                e({
                                    environment: t,
                                    store: a,
                                    chatThreadId: n,
                                    pageVisitSource: r(254656).y8.AIChat,
                                    redirect: !1
                                });
                                return
                            }
                        }
                    }
                }(h && "control" !== h || f && "control" !== f) && function(e) {
                    var t, n, s, o;
                    let l, {
                        environment: d,
                        threadId: p,
                        step: h,
                        spaceId: f
                    } = e;
                    if ((0, a().gY)(h, "create-pages") && null != (t = h.result) && t.pages) {
                        let e = h.result.pages[0];
                        null != e && e.pointer && (l = e.pointer.id)
                    } else if ((0, a().gY)(h, "create-database") && null != (n = h.result) && n.collectionViewBlockId) l = h.result.collectionViewBlockId;
                    else if ((0, a().gY)(h, "callFunction") && "connections.notion.createPage" === (null == (s = h.input) ? void 0 : s.function)) {
                        let e = (0, u().moK)(null == (o = h.result) ? void 0 : o.headerLabel);
                        e[0] && (l = e[0].id)
                    }
                    if (!l) return;
                    let m = {
                            id: l,
                            spaceId: f,
                            table: c().evP
                        },
                        g = (0, r(354128).getAgentPreviewWrapper)(d),
                        _ = new(i()).Bv(d, m, {
                            inMemoryRecordCache: g.getInMemoryRecordCacheIfIsPreviewingRecord(m, d.currentUser.id)
                        }),
                        v = (0, r(483227).Ef)({
                            environment: d,
                            updates: {
                                store: _,
                                chatThreadId: p,
                                pageVisitSource: r(254656).y8.AIChat
                            }
                        });
                    v && ((0, r(168682).M)({
                        environment: d,
                        chatPanelMode: "sidebar",
                        trackAnalytics: !1,
                        saveUserPreference: !0
                    }), (0, r(79266).navigate)({
                        environment: d,
                        url: v,
                        redirect: !1
                    }))
                }({
                    environment: t,
                    threadId: n,
                    step: s,
                    spaceId: l
                })
            }
            async function eh(e) {
                var t, n, i;
                let {
                    environment: s,
                    updatedSteps: o
                } = e, l = (null == (t = r(728372).AppStoreCurrentUserSettingsStore.state) || null == (t = t.getSettings()) ? void 0 : t.post_onboarding_agent_config) ? ? {}, [{
                    hasOnboardingAgentMutatedFirstBlock: u
                }, {
                    setPostOnboardingAgentConfig: d
                }] = await Promise.all([r.e(14770).then(r.bind(r, 811853)), r.e(14770).then(r.bind(r, 675053))]);
                if (!u({
                        postOnboardingAgentConfig: l
                    }))(null == (n = r(728372).AppStoreMainEditorCurrentBlockStore.state) ? void 0 : n.id) !== (null == (i = r(728372).AppStoreSidebarSpaceViewStore.state) || null == (i = i.getSettings()) || null == (i = i.getting_started_page_ids) ? void 0 : i[0]) || o.some(e => {
                    var t, r, n;
                    return "agent-tool-result" === e.type && "applied" === (0, a().Gu)(e) && (!!(null != (t = e.threadOperations) && t.some(e => e.operation.pointer.table === c().evP) || (0, a().gY)(e, "create-pages") || (0, a().gY)(e, "create-database") || (0, a().gY)(e, "update-page") || (0, a().gY)(e, "update-page-v2")) || !!(0, a().gY)(e, "callFunction") && ((null == (r = e.input) ? void 0 : r.function) === "connections.notion.createPage" || (null == (n = e.input) ? void 0 : n.function) === "connections.notion.updatePage"))
                }) && d({
                    environment: s,
                    config: {
                        has_mutated_block: !0
                    }
                })
            }
        },
        838526: (e, t, r) => {
            r.d(t, {
                $1: () => n,
                Bk: () => o,
                PR: () => a,
                XO: () => i,
                Zc: () => s,
                cG: () => c,
                pU: () => l
            }), r(898992), r(430670);
            let n = new(r(245541)).R({
                    key: "proactiveMessagePlayground",
                    namespace: r(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                }),
                i = new(r(245541)).R({
                    key: "proactiveMessagePlaygroundInstructionsPage",
                    namespace: r(274919).Bq,
                    important: !0,
                    trackingType: "necessary"
                });

            function a(e) {
                var t;
                let {
                    spaceId: r,
                    messageKey: i
                } = e;
                return (null == (t = n.state) || null == (t = t[r]) ? void 0 : t[i]) ? ? []
            }

            function s(e) {
                let {
                    spaceId: t,
                    messageKey: r,
                    files: i
                } = e, a = n.state ? ? {}, s = { ...a[t] ? ? {},
                    [r] : i
                };
                n.setState({ ...a,
                    [t]: s
                })
            }

            function o(e) {
                var t;
                let {
                    spaceId: r,
                    messageKey: n
                } = e;
                return null == (t = i.state) || null == (t = t[r]) ? void 0 : t[n]
            }

            function l(e) {
                let {
                    spaceId: t,
                    messageKey: r,
                    pageId: n
                } = e, a = i.state ? ? {}, s = { ...a[t] ? ? {}
                };
                void 0 === n ? delete s[r] : s[r] = n, i.setState({ ...a,
                    [t]: s
                })
            }

            function c(e) {
                let t = a(e).flatMap(e => void 0 !== e.pageId && (0, r(10779).N)(e.path) ? [{
                    path: (0, r(10779).I)(e.path),
                    pageId: e.pageId
                }] : []);
                if (0 !== t.length) return {
                    proactiveMessagePlaygroundFiles: t
                }
            }
        },
        952696: (e, t, r) => {
            r.d(t, {
                P: () => a
            });
            var n = () => r(546605);
            class i extends n().Store {
                getInitialState() {
                    return {
                        open: !1,
                        currentView: "chat",
                        from: void 0,
                        isAssistantInputEmpty: !0
                    }
                }
            }
            let a = new i;
            (0, r(202146).exposeDebugValue)("AssistantMenuStore", a)
        },
        997486: (e, t, r) => {
            r.d(t, {
                Ih: () => c,
                SS: () => u,
                ar: () => a,
                bI: () => o,
                c1: () => d,
                eH: () => l,
                i: () => i,
                r$: () => h,
                s0: () => s,
                ws: () => p
            }), r(16280), r(410838), r(898992), r(823215);
            var n = () => r(426048);

            function i(e) {
                let t = e.findLast(e => "plan-mode" === e.type);
                return (null == t ? void 0 : t.type) === "plan-mode" ? t.value : void 0
            }

            function a(e) {
                return void 0 !== e && "cancelled" !== e.state
            }

            function s(e) {
                return (null == e ? void 0 : e.state) === "planning"
            }

            function o(e) {
                return (null == e ? void 0 : e.state) === "executing"
            }

            function l(e) {
                return (null == e ? void 0 : e.state) === "approved"
            }

            function c() {
                return {
                    state: "planning"
                }
            }

            function u(e, t) {
                return { ...e,
                    responses: t,
                    submitted: !0
                }
            }

            function d(e, t) {
                for (let r = t + 1; r < e.length; r++)
                    if ("user" === e[r].type) return !0;
                return !1
            }

            function p(e) {
                var t;
                return !!("agent-tool-result" === e.type && (0, n().gY)(e, "generate-plan") && (null == (t = e.result) ? void 0 : t.status) === "awaiting_approval" && (0, r(780899).I6)(e))
            }

            function h(e, t) {
                for (let i = t + 1; i < e.length; i++) {
                    var r;
                    let t = e[i];
                    if ("agent-tool-result" === t.type && (0, n().gY)(t, "generate-plan") && "applied:error" !== (0, n().Gu)(t) && (null == (r = t.result) ? void 0 : r.planPageId) !== void 0) return !0
                }
                return !1
            }
        }
    }
]);