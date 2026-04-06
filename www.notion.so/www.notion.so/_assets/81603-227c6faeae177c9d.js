"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [81603], {
        81603: (e, t, a) => {
            let o;
            a.r(t), a.d(t, {
                createAgentAndStartThread: () => d,
                createBlankAgentAndNavigate: () => c,
                ensureNotionMailAccountOrTriggerOnboarding: () => p,
                preloadNotionMailUserStatus: () => f,
                showCreationModal: () => u,
                startSetupThreadWithAgent: () => s
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(581454);
            let r = ["Mystical", "Brilliant", "Swift", "Clever", "Cosmic", "Luminous", "Nimble", "Radiant", "Ethereal", "Mighty", "Serene", "Vibrant", "Graceful", "Bold", "Wise", "Fierce", "Noble", "Elegant", "Majestic", "Spirited", "Enigmatic", "Dazzling", "Steadfast", "Curious", "Valiant", "Whimsical", "Poised", "Dynamic", "Refined", "Legendary", "Stellar", "Astute", "Zealous", "Tranquil", "Vivacious", "Harmonious", "Resilient", "Enchanting", "Formidable", "Inspiring", "Magnificent", "Resourceful", "Adventurous", "Charming", "Fearless", "Sublime", "Versatile", "Extraordinary"],
                n = ["Oracle", "Scribe", "Navigator", "Guardian", "Sage", "Phoenix", "Mentor", "Beacon", "Voyager", "Keeper", "Herald", "Scholar", "Pioneer", "Virtuoso", "Wanderer", "Architect", "Explorer", "Luminary", "Curator", "Pathfinder", "Emissary", "Chronicler", "Steward", "Guide", "Alchemist", "Mystic", "Ranger", "Conductor", "Falcon", "Weaver", "Champion", "Seeker", "Maverick", "Nomad", "Forager", "Hunter", "Collector", "Strategist", "Diplomat", "Historian", "Philosopher", "Astronomer", "Cartographer"],
                i = (0, a(109939).YK)({
                    newAgentCannedMessage: {
                        id: "agentActions.newAgentCannedMessage",
                        defaultMessage: "Hi, I’m your new agent! Let me know what you want me to do and I’ll update my settings. If you’re not sure, here are a few ways to get started:"
                    },
                    followUpSlackQaHelper: {
                        id: "agentActions.followUp.slackQaHelper",
                        defaultMessage: "Respond to questions about our benefits"
                    },
                    followUpSlackTaskTriager: {
                        id: "agentActions.followUp.slackTaskTriager",
                        defaultMessage: "Help file tasks from a Slack channel"
                    },
                    followUpWeeklyProjectUpdate: {
                        id: "agentActions.followUp.weeklyProjectUpdate",
                        defaultMessage: "Create a weekly report of competitor news"
                    },
                    newAgentThreadTitle: {
                        id: "agentActions.newAgentThreadTitle",
                        defaultMessage: "Let’s get started setting up"
                    }
                });

            function l(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    overrides: i,
                    source: l,
                    analytics: d,
                    instructionsPageTitle: s
                } = e, c = t.currentUser.id, u = null == o ? void 0 : o.id;
                if (!c || !u) return;
                let f = (0, a(295447).Z1)({
                    environment: t,
                    table: a(43296).C,
                    spaceId: u
                });
                (0, a(599231).qt)({
                    action: "create_new",
                    workflowId: f,
                    from: l,
                    flowId: d.flowId,
                    origin: d.origin
                }), (0, a(599231).Ql)({
                    workflowId: f,
                    creationMethod: l,
                    flowId: d.flowId,
                    origin: d.origin
                });
                let {
                    performResult: p,
                    serverCommitResult: g
                } = (0, a(377796).createAndCommit)({
                    environment: t,
                    userAction: "agentActions.createBlankAgent",
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: u
                    },
                    perform: e => {
                        let l = { ...(0, a(425749).bZ)(),
                                name: function() {
                                    let e = new Set;
                                    for (let t = 0; t < 100; t++) {
                                        let a = r[Math.floor(Math.random() * r.length)],
                                            o = n[Math.floor(Math.random() * n.length)],
                                            i = `${a} ${o}`,
                                            l = 0 === t ? i : `${i} ${t+1}`;
                                        if (!e.has(l.toLowerCase())) return l
                                    }
                                    let t = r[0],
                                        a = n[0],
                                        o = Date.now().toString().slice(-4);
                                    return `${t} ${a} ${o}`
                                }(),
                                icon: (0, a(337222).vl)(a(986939).A.domainBaseUrl || ""),
                                ...i
                            },
                            d = a(124937).vt({
                                environment: t,
                                table: a(43296).C,
                                args: {
                                    id: f,
                                    parentPointer: o.pointer,
                                    space_id: u,
                                    data: l,
                                    createdByPointer: {
                                        table: a(514214).oo,
                                        id: c
                                    },
                                    permissions: [{
                                        type: "user_permission",
                                        role: "editor",
                                        user_id: c
                                    }]
                                },
                                inMemoryRecordCache: o.inMemoryRecordCache,
                                transaction: e
                            }),
                            p = (0, a(295447).Z1)({
                                environment: t,
                                table: a(682956).ev,
                                spaceId: u
                            }),
                            g = a(124937).Wv({
                                environment: t,
                                id: p,
                                type: "page",
                                properties: {
                                    title: (0, a(247438).x9d)(s ? ? "Instructions")
                                },
                                spaceId: u,
                                transaction: e,
                                inMemoryRecordCache: o.inMemoryRecordCache,
                                createdByTable: a(514214).oo,
                                createdById: c
                            }),
                            m = (0, a(295447).Z1)({
                                environment: t,
                                table: a(682956).ev,
                                spaceId: u
                            }),
                            w = a(124937).Wv({
                                environment: t,
                                id: m,
                                type: "text",
                                spaceId: u,
                                transaction: e,
                                inMemoryRecordCache: o.inMemoryRecordCache,
                                createdByTable: a(514214).oo,
                                createdById: c
                            });
                        return a(579695).NI({
                            parentStore: g.getContentStore(),
                            childStore: w,
                            transaction: e
                        }), a(161606).b({
                            transaction: e,
                            childStore: g,
                            parentStore: d,
                            alive: !0
                        }), (0, a(421439).y4)({
                            store: d,
                            operation: {
                                pointer: d.pointer,
                                command: "set",
                                path: ["data", "instructions"],
                                args: {
                                    table: a(682956).ev,
                                    id: p,
                                    spaceId: u
                                }
                            },
                            transaction: e
                        }), d
                    }
                });
                return a(280772).xG({
                    environment: t,
                    workflowId: f,
                    from: "agent_creation"
                }), {
                    workflowStore: p,
                    serverCommitResult: g
                }
            }
            async function d(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    submitArgs: r,
                    analytics: n
                } = e, i = a(728372).AppStoreCurrentUserStore.state, d = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i || !d) return;
                let c = l({
                    environment: t,
                    spaceStore: o,
                    source: "prompt",
                    analytics: n,
                    instructionsPageTitle: e.instructionsPageTitle
                });
                if (!c) return;
                let {
                    workflowStore: u,
                    serverCommitResult: f
                } = c;
                await f, s({
                    environment: t,
                    workflowStore: u,
                    spaceStore: o,
                    prompt: r.prompt,
                    prebuiltPrompt: r.prebuiltPrompt
                })
            }

            function s(e) {
                let {
                    environment: t,
                    workflowStore: o,
                    spaceStore: r,
                    prompt: n,
                    prebuiltPrompt: i
                } = e, l = a(728372).AppStoreCurrentUserStore.state, d = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l || !d) return;
                let s = (null == i ? void 0 : i.type) === "create_custom_agent_from_modal" || (null == i ? void 0 : i.type) === "create_custom_agent" || (null == i ? void 0 : i.type) === "create_custom_agent_from_marketplace",
                    c = (0, a(922900).getWorkflowAgentConfig)({
                        environment: t,
                        spaceId: r.id,
                        isCustomAgent: s,
                        workflowId: s ? o.id : void 0,
                        useCustomAgentDraft: s
                    }),
                    u = (null == i ? void 0 : i.type) === "create_custom_agent_from_modal" || (null == i ? void 0 : i.type) === "create_custom_agent" || (null == i ? void 0 : i.type) === "create_custom_agent_from_marketplace" ? {
                        type: i.type,
                        isCustomAgent: c.isCustomAgent,
                        enableScriptAgent: c.enableScriptAgent,
                        enableQueryMail: c.enableQueryMail,
                        enableQueryCalendar: c.enableQueryCalendar
                    } : null == i ? void 0 : i.args,
                    f = i ? (0, a(674880).Jv)({
                        environment: t,
                        spaceStore: r,
                        userStore: l,
                        promptType: i.type,
                        value: n ? ? i.displayText,
                        locale: i.locale,
                        args: u
                    }) : (0, a(674880).Kf)({
                        environment: t,
                        spaceStore: r,
                        userStore: l,
                        value: n
                    }),
                    p = (0, a(674880).Xd)({
                        environment: t,
                        inferenceContext: {
                            userStore: l,
                            spaceStore: r,
                            spaceViewStore: d,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: o
                        },
                        config: c,
                        addSteps: [f],
                        surface: "workflows"
                    }),
                    g = (0, a(225900).N)({
                        environment: t,
                        spaceStore: r,
                        transcript: p,
                        workflowId: o.id,
                        createdSource: "workflows",
                        parentPointer: s ? o.pointer : void 0
                    });
                if (s) {
                    let e = (0, a(475097).getUrlParamFromPeekMode)(a(387722).A),
                        n = (0, a(862451).createInferenceTranscriptChatRoute)({
                            environment: t,
                            threadId: g.id,
                            spaceId: r.id,
                            additionalQueryParams: {
                                wfv: "settings",
                                [a(737869).ZI]: (0, a(4962).Xw)(o.id),
                                ...e ? {
                                    [a(737869).fT]: e
                                } : void 0
                            }
                        });
                    a(57168).defaultClientAIChatStore.setState({ ...a(57168).defaultClientAIChatStore.state,
                        navigateToLoadedWorkflowStore: o
                    }), (0, a(740744).zM)(), (0, a(79266).navigate)({
                        environment: t,
                        url: n
                    });
                    return
                }(0, a(358667).openChatPanel)({
                    environment: t,
                    store: o,
                    chatPanelState: {
                        isOpen: !0,
                        threadId: g.id
                    }
                })
            }
            async function c(e) {
                let t, {
                        environment: o,
                        spaceStore: r,
                        analytics: n
                    } = e,
                    d = l({
                        environment: o,
                        spaceStore: r,
                        source: "blank",
                        analytics: n,
                        instructionsPageTitle: e.instructionsPageTitle
                    });
                if (!d) return;
                let {
                    workflowStore: s,
                    serverCommitResult: c
                } = d;
                await c;
                let u = a(728372).AppStoreCurrentUserStore.state,
                    f = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!u || !f) return;
                let p = a(962299).A.getIntl(),
                    g = p.formatMessage(i.newAgentCannedMessage),
                    m = [{
                        label: p.formatMessage(i.followUpSlackTaskTriager),
                        message: p.formatMessage(i.followUpSlackTaskTriager),
                        metadata: {
                            variant: "custom_agent_setup"
                        }
                    }, {
                        label: p.formatMessage(i.followUpSlackQaHelper),
                        message: p.formatMessage(i.followUpSlackQaHelper),
                        metadata: {
                            variant: "custom_agent_setup"
                        }
                    }, {
                        label: p.formatMessage(i.followUpWeeklyProjectUpdate),
                        message: p.formatMessage(i.followUpWeeklyProjectUpdate),
                        metadata: {
                            variant: "custom_agent_setup"
                        }
                    }],
                    w = {
                        id: (0, a(295447).Z1)({
                            environment: o,
                            table: a(740170).m,
                            spaceId: r.id
                        }),
                        type: "title",
                        value: p.formatMessage(i.newAgentThreadTitle)
                    },
                    S = (t = Date.now(), {
                        id: (0, a(295447).Z1)({
                            environment: o,
                            table: a(740170).m,
                            spaceId: r.id
                        }),
                        type: "agent-inference",
                        value: [{
                            type: "text",
                            content: g
                        }, ...m.length > 0 ? [{
                            type: "follow_ups",
                            content: "",
                            followUps: m
                        }] : []],
                        traceId: (0, a(4962).Ay)(),
                        startedAt: t,
                        finishedAt: t
                    }),
                    h = (0, a(922900).getWorkflowAgentConfig)({
                        environment: o,
                        spaceId: r.id,
                        isCustomAgent: !0,
                        workflowId: s.id,
                        useCustomAgentDraft: !0
                    }),
                    k = (0, a(674880).Jv)({
                        environment: o,
                        spaceStore: r,
                        userStore: u,
                        promptType: "create_custom_agent_blank",
                        value: [],
                        locale: (0, a(599412).H)(p),
                        args: {
                            type: "create_custom_agent_blank",
                            isCustomAgent: !0,
                            enableQueryMail: h.enableQueryMail,
                            enableQueryCalendar: h.enableQueryCalendar
                        }
                    }),
                    v = (0, a(674880).Xd)({
                        environment: o,
                        inferenceContext: {
                            userStore: u,
                            spaceStore: r,
                            spaceViewStore: f,
                            blockStore: void 0,
                            peekStore: void 0,
                            workflowStore: s
                        },
                        config: h,
                        addSteps: [k, w, S],
                        surface: "workflows"
                    }),
                    y = function(e) {
                        let {
                            environment: t,
                            spaceStore: o,
                            userStore: r,
                            transcript: n,
                            threadId: i,
                            workflowId: l,
                            parentPointer: d
                        } = e, s = (0, a(330942).f_)(n), {
                            performResult: c
                        } = (0, a(377796).createAndCommit)({
                            userAction: "WorkflowActions.addTranscriptToNewThread",
                            environment: t,
                            canUndo: !0,
                            cellTarget: {
                                spaceWithId: o.id
                            },
                            perform: e => (0, a(757688).aP)({
                                environment: t,
                                spaceStore: o,
                                userStore: r,
                                transaction: e,
                                transcript: n,
                                threadId: i,
                                workflowId: l,
                                parentPointer: d,
                                threadType: null == s ? void 0 : s.type
                            })
                        });
                        return c
                    }({
                        environment: o,
                        spaceStore: r,
                        userStore: u,
                        transcript: v,
                        workflowId: s.id,
                        parentPointer: s.pointer
                    });
                (0, a(635587).i5)({
                    environment: o,
                    threadStore: y,
                    title: w.value
                });
                let A = (0, a(475097).getUrlParamFromPeekMode)(a(387722).A);
                (0, a(740744).zM)();
                let T = (0, a(862451).createInferenceTranscriptChatRoute)({
                    environment: o,
                    threadId: y.id,
                    spaceId: r.id,
                    additionalQueryParams: {
                        wfv: "settings",
                        [a(737869).ZI]: (0, a(4962).Xw)(s.id),
                        ...A ? {
                            [a(737869).fT]: A
                        } : void 0
                    }
                });
                a(57168).defaultClientAIChatStore.setState({ ...a(57168).defaultClientAIChatStore.state,
                    navigateToLoadedWorkflowStore: s
                }), (0, a(79266).navigate)({
                    environment: o,
                    url: T
                })
            }
            async function u({
                analytics: e
            }) {
                let t = a(218744).default.checkGate({
                        gateName: "custom_agent_modal_with_animation"
                    }),
                    o = await a(178801).oQ.NewAgentModal.load();
                t ? await o.showNewCustomAgentModalWithAnimation({
                    analytics: e
                }) : await o.showNewAgentModal({
                    analytics: e
                })
            }

            function f(e) {
                let {
                    environment: t
                } = e;
                a(318329).Lf.state.isLoaded || o || (o = t.api.callApi({
                    eventName: "getIsMailUser",
                    environment: t,
                    data: {}
                }).then(e => {
                    let t = "success" === e.type && e.data.isMailUser;
                    return a(318329).Lf.setState({ ...a(318329).Lf.state,
                        isBackendConnected: t,
                        isLoaded: !0
                    }), t
                }).finally(() => {
                    o = void 0
                }))
            }
            async function p(e) {
                let t, {
                    environment: r,
                    onConfirm: n,
                    forceOAuthFlow: i,
                    loginHint: l,
                    authAction: d
                } = e;
                if (a(318329).Lf.state.isLoaded) t = a(318329).Lf.state.isBackendConnected;
                else if (o) t = await o;
                else {
                    let e = await r.api.callApi({
                        eventName: "getIsMailUser",
                        environment: r,
                        data: {}
                    });
                    t = "success" === e.type && e.data.isMailUser, a(318329).Lf.setState({ ...a(318329).Lf.state,
                        isBackendConnected: t,
                        isLoaded: !0
                    })
                }
                return !!t && !i || (a(328590).b.open(() => {
                    a(318329).Lf.setState({ ...a(318329).Lf.state,
                        isBackendConnected: !0,
                        isLoaded: !0
                    }), null == n || n()
                }, {
                    loginHint: l,
                    authAction: d
                }), !1)
            }
        },
        280772: (e, t, a) => {
            function o({
                environment: e,
                workflowId: t,
                from: a
            }) {
                n({
                    environment: e,
                    workflowIds: [t],
                    from: a,
                    userAction: "sidebarWorkflowsActions.addSidebarWorkflow"
                })
            }

            function r({
                environment: e,
                workflowIds: t,
                from: a
            }) {
                n({
                    environment: e,
                    workflowIds: t,
                    from: a,
                    userAction: "sidebarWorkflowsActions.bulkAddSidebarWorkflow"
                })
            }

            function n({
                environment: e,
                workflowIds: t,
                from: o,
                userAction: r
            }) {
                var i;
                let l = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!l) return;
                let d = (null == (i = l.getSettings()) ? void 0 : i.sidebar_workflow_ids) || [],
                    s = new Set(d),
                    c = t.filter(e => !s.has(e));
                0 !== c.length && ((0, a(377796).createAndCommit)({
                    userAction: r,
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        let t = [...c, ...d];
                        a(380762).AG(l, e, { ...l.getSettings(),
                            sidebar_workflow_ids: t
                        })
                    }
                }), (0, a(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_added",
                        eventProperties: {
                            from: o,
                            num_agents: c.length
                        }
                    }
                }))
            }

            function i({
                environment: e,
                workflowId: t,
                from: a
            }) {
                d({
                    environment: e,
                    workflowIds: [t],
                    from: a,
                    userAction: "sidebarWorkflowsActions.removeSidebarWorkflow"
                })
            }

            function l({
                environment: e,
                workflowIds: t,
                from: a
            }) {
                d({
                    environment: e,
                    workflowIds: t,
                    from: a,
                    userAction: "sidebarWorkflowsActions.bulkRemoveSidebarWorkflow"
                })
            }

            function d({
                environment: e,
                workflowIds: t,
                from: o,
                userAction: r
            }) {
                var n;
                let i = a(728372).AppStoreSidebarSpaceViewStore.state;
                if (!i) return;
                let l = (null == (n = i.getSettings()) ? void 0 : n.sidebar_workflow_ids) || [],
                    s = new Set(t),
                    c = l.filter(e => !s.has(e));
                if (c.length === l.length) return;
                (0, a(377796).createAndCommit)({
                    userAction: r,
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        a(380762).AG(i, e, { ...i.getSettings(),
                            sidebar_workflow_ids: c
                        })
                    }
                });
                let u = l.length - c.length;
                (0, a(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_removed",
                        eventProperties: {
                            from: o,
                            num_agents: u
                        }
                    }
                })
            }

            function s({
                environment: e,
                workflowIds: t,
                from: o
            }) {
                let r = a(728372).AppStoreSidebarSpaceViewStore.state;
                r && ((0, a(377796).createAndCommit)({
                    userAction: "sidebarWorkflowsActions.setSidebarWorkflowIds",
                    environment: e,
                    canUndo: !0,
                    cellTarget: "main",
                    perform: e => {
                        a(380762).AG(r, e, { ...r.getSettings(),
                            sidebar_workflow_ids: t
                        })
                    }
                }), (0, a(104310).u)({
                    event: {
                        eventName: "sidebar_workflow_reordered",
                        eventProperties: {
                            from: o,
                            num_agents: t.length
                        }
                    }
                }))
            }
            a.d(t, {
                GL: () => r,
                Iq: () => i,
                Oj: () => s,
                jg: () => l,
                xG: () => o
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520)
        },
        317606: (e, t, a) => {
            a.d(t, {
                BU: () => d,
                _y: () => u,
                getAvailableWorkflowAgentModels: () => f
            }), a(944114), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(354520), a(803949), a(581454);
            let o = (0, a(109939).YK)({
                    model: {
                        id: "aiInferenceTranscript.model",
                        defaultMessage: "{modelName}"
                    }
                }),
                r = (0, a(109939).YK)({
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
                n = ["anthropic-haiku-4.5", "gingerbread"];

            function i(e) {
                let {
                    items: t,
                    getModelType: a,
                    shouldSkipSorting: o,
                    getFamily: r
                } = e;
                return t.map((e, t) => ({
                    item: e,
                    originalIndex: t
                })).sort((e, t) => {
                    if (!r) return e.originalIndex - t.originalIndex;
                    if (null != o && o(e.item) || null != o && o(t.item)) return 0;
                    let n = a(e.item),
                        i = a(t.item),
                        l = r(n),
                        d = r(i);
                    if (l !== d) {
                        if (void 0 === l && void 0 !== d) return 1;
                        if (void 0 === d && void 0 !== l) return -1;
                        if (void 0 !== l && void 0 !== d) return l.localeCompare(d)
                    }
                    return e.originalIndex - t.originalIndex
                }).map(({
                    item: e
                }) => e)
            }

            function l(e, t) {
                if (void 0 !== e && void 0 !== t && void 0 !== a(295206).P.getData(e, {
                        spaceId: t
                    })) return o => {
                    if (o) return a(295206).P.getModelFamily(e, t, o)
                }
            }

            function d(e, t, a) {
                return i({
                    items: e,
                    getModelType: e => e,
                    getSecondaryKey: e => e,
                    getFamily: l(t, a)
                })
            }

            function s(e, t, a) {
                return i({
                    items: e,
                    getModelType: e => "default" === e.askMode ? void 0 : e.askMode,
                    getSecondaryKey: e => e.title,
                    shouldSkipSorting: e => "default" === e.askMode,
                    getFamily: l(t, a)
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

            function u(e) {
                let {
                    intl: t,
                    isAgentEnabled: i,
                    environment: l,
                    spaceId: d,
                    hideWorkspaceSectionTitle: u = !1,
                    workflowMode: f = "workflow"
                } = e, g = [], m = [], w = [], S = i ? "workflow" : "search", h = p(l, d);
                if (void 0 === h) return [{
                    id: "workspace-context",
                    sectionTitle: r.includesContextTitle,
                    items: [c(t, i)],
                    configType: S,
                    isLoading: !0
                }, {
                    id: "workspace-context-excludes",
                    sectionTitle: r.excludesContextTitle,
                    items: [],
                    configType: "markdown-chat"
                }];
                h.forEach(e => {
                    let {
                        clientModel: r,
                        modelMessage: i,
                        modelFamily: l,
                        markdownChat: d,
                        workflow: s,
                        customAgent: c,
                        isDisabled: u
                    } = e, p = "custom_agent" === f ? c : s;
                    if (d && w.push({
                            askMode: r,
                            title: t.formatMessage(o.model, {
                                modelName: i
                            }),
                            config: {
                                type: "markdown-chat",
                                model: r
                            },
                            beta: d.beta,
                            isDisabled: u
                        }), "workflow" === S && void 0 !== p) {
                        let e = {
                            askMode: p.finalModelName,
                            title: t.formatMessage(o.model, {
                                modelName: i
                            }),
                            config: {
                                type: "workflow",
                                model: p.finalModelName,
                                modelFromUser: !0
                            },
                            beta: p.beta,
                            isDisabled: u
                        };
                        "mystery" === l || (0, a(722371).Xk)(n, r) ? m.push(e) : g.push(e)
                    }
                });
                let k = [{
                    id: "workspace-context",
                    sectionTitle: u ? void 0 : r.includesContextTitle,
                    items: [c(t, i), ...s(g, l, d)],
                    configType: S
                }];
                return m.length > 0 && k.push({
                    id: "small-open-experimental",
                    sectionTitle: r.smallOrOpenSectionTitle,
                    items: s(m, l, d),
                    configType: S
                }), k.push({
                    id: "workspace-context-excludes",
                    sectionTitle: r.excludesContextTitle,
                    items: s(w, l, d),
                    configType: "markdown-chat"
                }), k
            }

            function f(e, t) {
                let o = p(e, t);
                if (void 0 !== o) return new Set(o.map(e => {
                    var t;
                    return null == (t = e.workflow) ? void 0 : t.finalModelName
                }).filter(a(722371).O9))
            }

            function p(e, t) {
                if (e && t) {
                    let o = a(295206).P.getData(e, {
                        spaceId: t
                    });
                    if (!o) return;
                    let r = [];
                    return o.forEach(e => {
                        let {
                            model: t,
                            modelMessage: o,
                            modelFamily: n,
                            markdownChat: i,
                            workflow: l,
                            customAgent: d,
                            isDisabled: s
                        } = e;
                        if (!i && !l && !d) return;
                        let c = {
                            clientModel: t,
                            modelMessage: o,
                            modelFamily: (0, a(443037).jb)(n) ? n : void 0,
                            isDisabled: s
                        };
                        if (i && (c.markdownChat = {
                                beta: i.beta
                            }), l) {
                            let e = l.finalModelName;
                            (0, a(722371).Xk)(a(426048).AGENT_MODEL_TYPES, e) && (c.workflow = {
                                finalModelName: e,
                                beta: l.beta
                            })
                        }
                        if (d) {
                            let e = d.finalModelName;
                            (0, a(722371).Xk)(a(426048).AGENT_MODEL_TYPES, e) && (c.customAgent = {
                                finalModelName: e,
                                beta: d.beta
                            })
                        }
                        r.push(c)
                    }), r
                }
                return []
            }
        },
        635587: (e, t, a) => {
            function o({
                environment: e,
                threadStore: t,
                title: r,
                userSetTitle: n = !1
            }) {
                let i = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "agentPersistenceActions.updateThreadTitle",
                    environment: e,
                    cellTarget: i ? {
                        spaceWithId: i
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, a(173157).z)({
                            store: t.getDataStore(),
                            transaction: e,
                            data: n ? {
                                title: r,
                                user_set_title: !0
                            } : {
                                title: r
                            }
                        })
                    }
                })
            }

            function r({
                environment: e,
                threadStore: t,
                icon: o
            }) {
                let n = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    userAction: "agentPersistenceActions.updateThreadIcon",
                    environment: e,
                    cellTarget: n ? {
                        spaceWithId: n
                    } : void 0,
                    canUndo: !0,
                    perform: e => {
                        (0, a(173157).z)({
                            store: t.getDataStore(),
                            transaction: e,
                            data: o ? {
                                icon: o,
                                user_set_icon: !0
                            } : {
                                icon: void 0,
                                user_set_icon: void 0
                            }
                        })
                    }
                })
            }

            function n({
                environment: e,
                spaceViewStore: t,
                workflowModulePointer: o
            }) {
                var r;
                let i = (null == (r = t.getSettings()) ? void 0 : r.agent_chat_modules) ? ? [],
                    l = t.getSpaceId();
                (0, a(377796).createAndCommit)({
                    canUndo: !1,
                    environment: e,
                    cellTarget: l ? {
                        spaceWithId: l
                    } : void 0,
                    perform: e => {
                        a(380762).AG(t, e, {
                            agent_chat_modules: [...i, {
                                pointer: o,
                                defaultEnabled: !1
                            }]
                        })
                    },
                    userAction: "agentPersistenceHelpers.addAgentChatModule"
                })
            }

            function i({
                currentUserPointer: e,
                environment: t,
                workflowModule: o,
                workflowPointer: r
            }) {
                let {
                    icon: n,
                    name: l,
                    pointer: d,
                    tools: s,
                    ...c
                } = o;
                return (0, a(377796).createAndCommit)({
                    canUndo: !1,
                    environment: t,
                    cellTarget: {
                        spaceWithId: d.spaceId
                    },
                    perform: o => {
                        a(124937).vt({
                            environment: t,
                            table: a(832375).yMG,
                            args: {
                                createdByPointer: e,
                                id: d.id,
                                module_type: "mcpServer",
                                parentPointer: r || e,
                                space_id: d.spaceId,
                                alive: !0,
                                data: { ...c,
                                    ...s && s.length > 0 ? {
                                        tools: s
                                    } : {},
                                    icon: n,
                                    id: d.id,
                                    name: l
                                }
                            },
                            inMemoryRecordCache: t.defaultRecordCache.inMemoryRecordCache,
                            transaction: o
                        })
                    },
                    userAction: "agentPersistenceHelpers.createAgentChatModule"
                }).serverCommitResult
            }
            a.d(t, {
                eg: () => i,
                hP: () => n,
                i5: () => o,
                pS: () => r
            })
        },
        862451: (e, t, a) => {
            function o(e) {
                let {
                    environment: t,
                    spaceStore: o,
                    clientStore: r,
                    userStore: n,
                    transcript: i,
                    threadId: l,
                    initialAgentActions: d,
                    analyticsArgs: s
                } = e, c = (0, a(330942).f_)(i), {
                    serverCommitResult: u,
                    performResult: f
                } = (0, a(377796).createAndCommit)({
                    userAction: "WorkflowActions.addTranscriptToNewThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: o.id
                    },
                    perform: e => (0, a(757688).aP)({
                        environment: t,
                        spaceStore: o,
                        userStore: n,
                        transaction: e,
                        transcript: i,
                        threadId: l,
                        threadType: (null == c ? void 0 : c.type) ? ? "workflow"
                    })
                });
                return (0, a(757688).WE)({
                    environment: t,
                    clientStore: r,
                    threadStore: f,
                    waitBeforeSending: u,
                    analyticsArgs: s,
                    sendPatchResponse: !1,
                    initialAgentActions: d
                }), f
            }
            async function r(e) {
                let {
                    environment: t,
                    parentStore: o,
                    userStep: r,
                    onThreadChange: n
                } = e, i = a(674880).defaultInferenceContextStore.state;
                if (!i) throw Error("No inference context");
                let {
                    spaceStore: l
                } = i, {
                    performResult: d,
                    serverCommitResult: s
                } = (0, a(377796).createAndCommit)({
                    userAction: "SetupGenerator.handlePromptSubmit",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: l.id
                    },
                    perform: e => (function(e) {
                        let {
                            environment: t,
                            transaction: o,
                            parentStore: r
                        } = e, n = a(728372).AppStoreSidebarSpaceStore.state, i = a(728372).AppStoreSidebarSpaceViewStore.state;
                        if (!n || !i) throw Error("No current space");
                        let l = a(124937).Wv({
                            environment: t,
                            type: "collection_view_page",
                            transaction: o,
                            inMemoryRecordCache: n.inMemoryRecordCache
                        });
                        return (0, a(351418).Ls)({
                            environment: t,
                            parentStore: r ? ? n,
                            collectionViewBlockStore: l,
                            transaction: o,
                            appendOrPrepend: "append",
                            spaceViewStore: i
                        }), {
                            workflowStore: function(e) {
                                let {
                                    environment: t,
                                    store: o,
                                    transaction: r
                                } = e;
                                return function(e) {
                                    let {
                                        environment: t,
                                        store: o,
                                        transaction: r,
                                        workflowData: n
                                    } = e, i = a(124937).vt({
                                        environment: t,
                                        table: a(43296).C,
                                        args: {
                                            id: (0, a(295447).Z1)({
                                                environment: t,
                                                table: a(43296).C,
                                                spaceId: o.getSpaceId()
                                            }),
                                            data: n,
                                            parentPointer: {
                                                table: a(682956).ev,
                                                id: o.id
                                            },
                                            space_id: o.getSpaceId()
                                        },
                                        inMemoryRecordCache: o.inMemoryRecordCache,
                                        transaction: r
                                    });
                                    return (0, a(715144).z)({
                                        stores: [o],
                                        update: {
                                            workflow_id: i.id
                                        },
                                        transaction: r
                                    }), i
                                }({
                                    environment: t,
                                    transaction: r,
                                    store: o,
                                    workflowData: {
                                        modules: []
                                    }
                                })
                            }({
                                environment: t,
                                store: l,
                                transaction: o
                            }),
                            collectionViewBlockStore: l
                        }
                    })({
                        environment: t,
                        transaction: e,
                        parentStore: o
                    })
                });
                await s;
                let {
                    collectionViewBlockStore: c
                } = d, u = function(e) {
                    let {
                        environment: t,
                        inferenceContext: o,
                        addSteps: r = [],
                        config: n
                    } = e;
                    return (0, a(674880).Xd)({
                        environment: t,
                        inferenceContext: o,
                        config: n && "workflow" !== n.type ? n : (0, a(922900).getWorkflowAgentConfig)({
                            environment: t,
                            ...n
                        }),
                        addSteps: r,
                        surface: "workflows"
                    })
                }({
                    environment: t,
                    inferenceContext: i,
                    store: c,
                    addSteps: [r]
                }), f = (0, a(225900).N)({
                    environment: t,
                    spaceStore: l,
                    transcript: u
                });
                null == n || n(f)
            }
            async function n(e) {
                let {
                    environment: t,
                    clientStore: o,
                    message: r,
                    configs: n
                } = e, i = (0, a(328765).S)();
                if (!i) throw Error("No current space store");
                let l = t.currentUser.id;
                if (!l) throw Error("No current user");
                if ((0, a(247438).q4_)(r).trim().length < 6) return;
                let d = n.filter(e => a(180139)._z.includes(e.type)),
                    s = await t.api.callStreamApi({
                        eventName: "runInferenceTranscript",
                        environment: t,
                        data: {
                            transcript: [{
                                id: (0, a(295447).Z1)({
                                    environment: t,
                                    table: a(832375).mSw,
                                    spaceId: i.id
                                }),
                                type: "config",
                                value: {
                                    type: "route-inference-transcript",
                                    configs: d
                                }
                            }, {
                                id: (0, a(295447).Z1)({
                                    environment: t,
                                    table: a(832375).mSw,
                                    spaceId: i.id
                                }),
                                type: "user",
                                value: r,
                                userId: l
                            }],
                            traceId: (0, a(4962).Ay)(),
                            spaceId: i.id,
                            generateTitle: !1,
                            isUserInAnySalesAssistedSpace: (0, a(598132).h0)(t),
                            isSpaceSalesAssisted: (0, a(598132).lM)(t, i.id)
                        },
                        headers: (0, a(115118).WS)({
                            spaceId: i.id
                        })
                    });
                if ("failed" === s.type) throw s.error;
                if (a(331653).hS.is(s.data)) {
                    for await (let e of s.data) if ("config" === e.type) o.state.userSelectedConfig || o.setState({ ...o.state,
                        configForNewTranscripts: e.value
                    });
                    else if ("error" === e.type) throw e.message
                }
            }

            function i(e) {
                var t;
                let {
                    environment: o,
                    oldThreadStore: r,
                    newThreadStore: n,
                    openUsingQuickSearchHandler: i,
                    openInNewTab: l,
                    createdSource: d,
                    resetLocalThreadStore: s,
                    isAgent: u,
                    initialAgentActions: f
                } = e, p = (null == n ? void 0 : n.id) || (u ? a(548124).NEW_CHAT_THREAD_ID : void 0), g = null == n ? void 0 : n.getConfig(), m = (0, a(330942).sQ)(g);
                (null == g ? void 0 : g.type) === "search" ? (0, a(850552).By)({
                    sessionId: void 0,
                    searchSessionId: m,
                    threadId: p,
                    environment: o,
                    createdSource: d,
                    isAgent: !1
                }) : (null == g ? void 0 : g.type) === "workflow" && null != f && f.includes("injectSearchTool") && (0, a(850552).By)({
                    sessionId: void 0,
                    searchSessionId: m,
                    threadId: p,
                    environment: o,
                    createdSource: d,
                    isAgent: !0
                }), p && (null == g ? void 0 : g.type) === "researcher" && ((null == n ? void 0 : n.getTranscript()) || []).some(e => "researcher-report" === e.type) && a(274498).MU({
                    environment: o,
                    researchModeThreadId: p,
                    source: "chat_history"
                });
                let w = o.device.isElectron,
                    S = o.RouterStore.state.route,
                    h = "chat" === S.name && S.peekViewBlockId && ("settings" === S.workflowViewType || "activity" === S.workflowViewType) ? {
                        workflowViewType: S.workflowViewType,
                        peekViewBlockId: S.peekViewBlockId,
                        peekMode: S.peekMode
                    } : void 0,
                    k = "chat" === S.name && a(273061).S.state.open && a(273061).S.state.agentId && a(273061).S.state.mode ? {
                        workflowViewType: a(273061).S.state.mode,
                        peekViewBlockId: a(273061).S.state.agentId,
                        peekMode: S.peekMode
                    } : void 0,
                    v = h ? ? k,
                    y = c({
                        environment: o,
                        threadId: p,
                        spaceId: null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: null == r ? void 0 : r.getConfig(),
                        additionalQueryParams: v ? {
                            [a(737869).CS]: v.workflowViewType,
                            [a(737869).ZI]: (0, a(4962).Xw)(v.peekViewBlockId),
                            ...v.peekMode ? {
                                [a(737869).fT]: v.peekMode
                            } : {}
                        } : void 0
                    });
                if ("chat" !== S.name && "ai" !== S.name && a(562733).zI.setState({ ...a(562733).zI.state,
                        fullPageChatSourceUrl: window.location.href
                    }), w && (null == s || s()), i && w) return void(0, a(916187).N)(y);
                if (l && w) {
                    (0, a(96351).B)({
                        makeTabActive: !0,
                        url: y,
                        position: "end",
                        openInNew: "tab",
                        environment: o
                    }), a(635257).st({
                        reset: !1
                    });
                    return
                }(0, a(79266).navigate)({
                    environment: o,
                    url: y,
                    ...l ? {
                        openInNew: "tab",
                        makeTabActive: !1
                    } : {}
                })
            }

            function l(e) {
                let {
                    environment: t,
                    query: n,
                    clientStore: l,
                    config: d,
                    additionalSteps: s = [],
                    openInNewTab: u,
                    openUsingQuickSearchHandler: f,
                    surface: p,
                    suggestedPrompt: g,
                    initialAgentActions: m
                } = e, w = a(674880).defaultInferenceContextStore.state;
                if (!w) throw Error("No inference context");
                let {
                    spaceStore: S,
                    userStore: h
                } = w;
                (0, a(757688).Wq)({
                    clientStore: l,
                    environment: t
                });
                let k = d.type;
                if (u && ("search" === k || "workflow" === k)) return void
                function(e) {
                    var t;
                    let {
                        environment: o,
                        config: r,
                        query: n,
                        openUsingQuickSearchHandler: i,
                        initialAgentActions: l
                    } = e, d = o.device.isElectron, s = c({
                        environment: o,
                        threadId: void 0,
                        spaceId: null == (t = a(728372).AppStoreSidebarSpaceStore.state) ? void 0 : t.id,
                        config: r,
                        query: n,
                        forceRouteToChat: !0,
                        initialAgentActions: l
                    });
                    if (i && d) return (0, a(916187).N)(s);
                    if (d) {
                        (0, a(96351).B)({
                            makeTabActive: !0,
                            url: s,
                            position: "end",
                            openInNew: "tab",
                            environment: o
                        }), a(635257).st({
                            reset: !1
                        });
                        return
                    }(0, a(79266).navigate)({
                        environment: o,
                        url: s,
                        openInNew: "tab",
                        makeTabActive: !1
                    })
                }({
                    environment: t,
                    config: d,
                    query: n,
                    openUsingQuickSearchHandler: f,
                    initialAgentActions: m
                });
                let v = (0, a(674880).Kf)({
                        environment: t,
                        spaceStore: S,
                        userStore: h,
                        value: n
                    }),
                    y = (0, a(909212).re)();
                if ("workflow" !== d.type || y) {
                    let e = (0, a(674880).Xd)({
                            environment: t,
                            config: d,
                            inferenceContext: w,
                            addSteps: [...s, v],
                            surface: p
                        }),
                        r = o({
                            environment: t,
                            spaceStore: S,
                            clientStore: l,
                            userStore: h,
                            transcript: e,
                            initialAgentActions: m,
                            analyticsArgs: {
                                suggestedPrompt: g
                            }
                        });
                    return i({
                        environment: t,
                        oldThreadStore: void 0,
                        newThreadStore: r,
                        openInNewTab: u,
                        openUsingQuickSearchHandler: f,
                        initialAgentActions: m
                    }), r
                }
                r({
                    environment: t,
                    parentStore: S,
                    userStep: v
                })
            }

            function d(e) {
                return (0, a(909212).re)() ? s(e) : {
                    type: "search",
                    scopeForNextSearch: {
                        type: "everything"
                    }
                }
            }

            function s(e) {
                var t;
                let {
                    spaceId: o,
                    searchScopes: r,
                    environment: n
                } = e, i = o ? (null == (t = a(57168).UserChatPreferenceLocalStorageStore.getState()) ? void 0 : t[o]) ? ? {} : {};
                if (o && i.model) {
                    let e = a(218744).default.isStatsigEnabledAndInitialized(),
                        t = "on" === a(218744).default.getEligibleGroup({
                            experimentId: a(432155).Yc,
                            defaultGroup: "control"
                        }),
                        r = (0, a(432155).gg)({
                            userChatPreference: i,
                            isStatsigInitialized: e,
                            shouldResetUserSelectedModel: t
                        });
                    r && ((0, a(432155).Oq)(o, r), i = { ...i,
                        ...r
                    })
                }
                let {
                    webEnabled: l,
                    computerEnabled: d,
                    yoloModeEnabled: s,
                    model: c,
                    readOnlyModeEnabled: u
                } = i, f = c && (0, a(722371).Xk)(a(426048).AGENT_MODEL_TYPES, c) ? c : void 0;
                if (o && f && !a(218744).default.checkGate({
                        gateName: "agent_model_picker"
                    })) {
                    let e = (0, a(317606).getAvailableWorkflowAgentModels)(n, o);
                    e && !e.has(f) && ((0, a(432155).Oq)(o, {
                        model: void 0
                    }), f = void 0)
                }
                return (0, a(922900).getWorkflowAgentConfig)({
                    searchScopes: r,
                    ...void 0 !== l && {
                        useWebSearch: l
                    },
                    ...void 0 !== d && {
                        useComputer: d
                    },
                    ...void 0 !== s && {
                        yoloMode: s
                    },
                    ...void 0 !== u && {
                        useReadOnlyMode: u
                    },
                    model: f,
                    environment: n,
                    spaceId: o
                })
            }

            function c(e) {
                let {
                    environment: t,
                    threadId: o,
                    spaceId: r,
                    config: n,
                    query: i,
                    forceRouteToChat: l,
                    initialAgentActions: s,
                    additionalQueryParams: c
                } = e, u = t.device.isElectron, f = {};
                o && (f[a(737869).P5] = (0, a(4962).Xw)(o)), u && r && (f.spaceId = r), i && (f[a(737869).ah] = encodeURIComponent(JSON.stringify(i))), s && s.length > 0 && (f[a(737869).U] = s.join(","));
                let p = o && o !== a(548124).NEW_CHAT_THREAD_ID;
                if (!p) {
                    let e = d({
                        spaceId: r,
                        environment: t
                    });
                    n && (0, a(271452).bD)(n.type) && (e = n), f[a(737869).q8] = encodeURIComponent(JSON.stringify(e))
                }
                if (!p && !l) return (0, a(758654).Gm)({
                    url: a(168962).JZ.ai,
                    query: f
                });
                if (c)
                    for (let [e, t] of Object.entries(c)) void 0 !== t && (f[e] = t);
                return (0, a(758654).Gm)({
                    url: a(168962).JZ.chat,
                    query: f
                })
            }

            function u(e) {
                let {
                    environment: t,
                    config: r,
                    query: n,
                    surface: l = "search_modal",
                    initialAgentActions: d
                } = e, s = a(674880).defaultInferenceContextStore.state;
                if (!s) throw Error("No inference context");
                let {
                    spaceStore: c,
                    userStore: u
                } = s, f = (0, a(674880).Kf)({
                    environment: t,
                    spaceStore: c,
                    userStore: u,
                    value: n
                }), p = (0, a(674880).Xd)({
                    environment: t,
                    inferenceContext: s,
                    config: r,
                    addSteps: [f],
                    surface: l
                }), g = o({
                    environment: t,
                    spaceStore: c,
                    clientStore: a(57168).defaultClientAIChatStore,
                    userStore: u,
                    transcript: p,
                    initialAgentActions: d
                });
                i({
                    environment: t,
                    newThreadStore: g,
                    oldThreadStore: void 0
                })
            }
            a.r(t), a.d(t, {
                createAndNavigateToInferenceTranscriptWithConfig: () => u,
                createDefaultNewThreadConfigFromUserPreference: () => s,
                createInferenceTranscriptChatRoute: () => c,
                getDefaultNewThreadConfigFromUserPreference: () => d,
                isConfigTransferable: () => p,
                navigateAndStartInferenceTranscript: () => l,
                navigateToInferenceTranscriptRoute: () => i,
                routeInferenceTranscript: () => n
            }), a(16280), a(898992), a(354520), a(737550);
            let f = ["workflow", "researcher", "markdown-chat"];

            function p(e) {
                var t;
                let {
                    config: o,
                    agentEnabled: r
                } = e;
                return !o || !r || (t = o.type, (0, a(722371).Xk)(f, t))
            }
        }
    }
]);