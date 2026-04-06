"use strict";
(globalThis.webpackChunknotion_next = globalThis.webpackChunknotion_next || []).push([
    [63821], {
        10681: (e, t, a) => {
            a.d(t, {
                k: () => r
            });

            function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    workflowName: o,
                    workflowIcon: i,
                    sourceWorkflowPointer: n,
                    parentPointer: l
                } = e, d = t.currentUser.id, s = null == r ? void 0 : r.id;
                if (!d || !s) return;
                let c = (0, a(295447).Z1)({
                        environment: t,
                        table: a(43296).C,
                        spaceId: s
                    }),
                    u = l ? ? r.pointer,
                    {
                        performResult: p,
                        serverCommitResult: f
                    } = (0, a(377796).createAndCommit)({
                        environment: t,
                        userAction: "duplicateWorkflow.createPlaceholder",
                        canUndo: !0,
                        cellTarget: {
                            spaceWithId: s
                        },
                        perform: e => {
                            let l = { ...(0, a(425749).bZ)(),
                                    name: o,
                                    icon: i,
                                    duplication_status: {
                                        type: "duplicating",
                                        source_workflow_pointer: n,
                                        started_at: Date.now(),
                                        user_id: d
                                    }
                                },
                                p = a(124937).vt({
                                    environment: t,
                                    table: a(43296).C,
                                    args: {
                                        id: c,
                                        parentPointer: u,
                                        space_id: s,
                                        data: l,
                                        createdByPointer: {
                                            table: a(514214).oo,
                                            id: d
                                        },
                                        permissions: [{
                                            type: "user_permission",
                                            role: "editor",
                                            user_id: d
                                        }]
                                    },
                                    inMemoryRecordCache: r.inMemoryRecordCache,
                                    transaction: e
                                }),
                                f = (0, a(295447).Z1)({
                                    environment: t,
                                    table: a(682956).ev,
                                    spaceId: s
                                }),
                                _ = a(124937).Wv({
                                    environment: t,
                                    id: f,
                                    type: "page",
                                    spaceId: s,
                                    transaction: e,
                                    inMemoryRecordCache: r.inMemoryRecordCache,
                                    createdByTable: a(514214).oo,
                                    createdById: d
                                }),
                                g = (0, a(295447).Z1)({
                                    environment: t,
                                    table: a(682956).ev,
                                    spaceId: s
                                }),
                                m = a(124937).Wv({
                                    environment: t,
                                    id: g,
                                    type: "text",
                                    spaceId: s,
                                    transaction: e,
                                    inMemoryRecordCache: r.inMemoryRecordCache,
                                    createdByTable: a(514214).oo,
                                    createdById: d
                                });
                            return a(579695).NI({
                                parentStore: _.getContentStore(),
                                childStore: m,
                                transaction: e
                            }), a(161606).b({
                                transaction: e,
                                childStore: _,
                                parentStore: p,
                                alive: !0
                            }), (0, a(421439).y4)({
                                store: p,
                                operation: {
                                    pointer: p.pointer,
                                    command: "set",
                                    path: ["data", "instructions"],
                                    args: {
                                        table: a(682956).ev,
                                        id: f,
                                        spaceId: s
                                    }
                                },
                                transaction: e
                            }), p
                        }
                    });
                return {
                    workflowStore: p,
                    serverCommitResult: f
                }
            }
        },
        37897: (e, t, a) => {
            a.d(t, {
                C: () => r
            });

            function r() {
                let e = (0, a(533992).v3)(),
                    t = (0, a(723240).r)(),
                    r = (0, a(83208).X)("use_multi_cell_agent_templates") ? (0, a(220171).ew)({
                        env: "production",
                        localTemplateSpaceId: a(986939).A.localAgentTemplateSpaceId
                    }) : void 0,
                    [{
                        status: o,
                        value: i
                    }] = (0, a(97668).Yb)(async () => void 0 === t ? [] : await a(291193).M.awaitData(e, {
                        spaceId: t,
                        templateSpaceId: r,
                        locale: a(849917).locale
                    }) ? ? [], [e, t, r]);
                return {
                    status: o,
                    templates: i ? ? []
                }
            }
        },
        45464: (e, t, a) => {
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    blockPointers: o,
                    currentPageId: i,
                    pageVisitSource: n,
                    chatThreadId: l,
                    openInSidePeek: d
                } = e;
                if (0 === o.length) return;
                let s = a(970831).B.createChildStore(r, o[0]),
                    c = s.getNavigableBlockStore();
                if (!c) return;
                let u = o.map(e => e.id);
                if (c.id !== i)(0, a(836924).Y)({
                    store: s,
                    environment: t,
                    pageVisitSource: n,
                    chatThreadId: l,
                    openInSidePeek: d
                });
                else {
                    (0, a(525779).clear)({
                        environment: t
                    }), await a(807635).NH({
                        environment: t,
                        pageStore: c,
                        scrollToBlockIds: u
                    }), await a(374176).default.afterNextFlush();
                    let e = a(240414).T.findSelectablesFromIds(u);
                    if (0 === e.length) return;
                    let r = e[0];
                    (0, a(931020).g)(t, {
                        selectable: r,
                        animate: !0
                    })
                }
            }
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    textSelection: o,
                    currentPageId: i,
                    pageVisitSource: n,
                    chatThreadId: l,
                    openInSidePeek: d
                } = e, s = o.start.pointer.id, c = o.end.pointer.id, u = a(970831).B.createChildStore(r, o.start.pointer), p = u.getNavigableBlockStore();
                if (p)
                    if (p.id !== i)(0, a(836924).Y)({
                        store: u,
                        environment: t,
                        pageVisitSource: n,
                        chatThreadId: l,
                        openInSidePeek: d
                    });
                    else {
                        (0, a(525779).clear)({
                            environment: t
                        });
                        let e = [s, c];
                        await a(807635).NH({
                            environment: t,
                            pageStore: p,
                            scrollToBlockIds: e
                        }), await a(374176).default.afterNextFlush();
                        let r = a(240414).T.findSelectablesFromIds(e);
                        if (0 === r.length) return;
                        let i = r.find(e => e.props.store.id === s),
                            n = r.find(e => e.props.store.id === c);
                        if (!i || !n) return;
                        let l = i.props.store,
                            d = n.props.store,
                            u = l.getTitleStore(),
                            f = d.getTitleStore();
                        if (u && f) {
                            let e = (0, a(478708).h)({
                                store: u,
                                index: o.start.index
                            }, {
                                store: f,
                                index: o.end.index
                            });
                            (0, a(726923).setMultiSelection)({
                                multiSelection: e
                            }), (0, a(854924).t)({
                                environment: t,
                                stores: [l],
                                phase: a(476987).o.Editing,
                                pivot: l
                            })
                        } else(0, a(854924).t)({
                            environment: t,
                            stores: [l]
                        });
                        let _ = (0, a(420459).G4)();
                        _ && a(562733).zI.setState({ ...a(562733).zI.state,
                            completionContext: _
                        })
                    }
            }
            a.d(t, {
                e: () => r,
                y: () => o
            }), a(898992), a(672577), a(581454)
        },
        108715: (e, t, a) => {
            e.exports = a.p + "3dbd8229ffb78610.png"
        },
        220171: (e, t, a) => {
            a.d(t, {
                ew: () => o
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            let r = {
                development: "3d71863b-5974-8105-a661-0003ef2bd936",
                production: "e12b42ac-4e54-476f-a4f5-7d6bdb1e61e2"
            };

            function o(e) {
                let {
                    env: t,
                    localTemplateSpaceId: a
                } = e;
                return "local" !== t ? r[t] : a
            }
        },
        263672: (e, t, a) => {
            a.d(t, {
                L: () => r
            });
            async function r(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    templateWorkflowPointer: o,
                    templateId: i,
                    templateTitle: n,
                    templateIconUrl: l,
                    addToFavorites: d
                } = e, s = function(e) {
                    let {
                        environment: t,
                        spaceStore: r,
                        templateTitle: o,
                        templateIconUrl: i,
                        templateWorkflowPointer: n
                    } = e;
                    return (0, a(10681).k)({
                        environment: t,
                        spaceStore: r,
                        workflowName: o,
                        workflowIcon: i,
                        sourceWorkflowPointer: n
                    })
                }({
                    environment: t,
                    spaceStore: r,
                    templateTitle: n,
                    templateIconUrl: l,
                    templateWorkflowPointer: o
                });
                if (!s) return;
                await s.serverCommitResult, d && a(280772).xG({
                    environment: t,
                    workflowId: s.workflowStore.id,
                    from: "duplicate_workflow"
                });
                let c = a(975162).yX(),
                    u = performance.now();
                return (0, a(703465).k)({
                    environment: t,
                    sourceWorkflowPointer: o,
                    targetWorkflowId: s.workflowStore.id,
                    spaceId: r.id,
                    deferred: c
                }), c.promise.then(() => {
                    (0, a(599231).He)({
                        time: Math.round(performance.now() - u),
                        success: !0,
                        workflow_id: s.workflowStore.id,
                        template_id: i
                    })
                }).catch(() => {
                    (0, a(599231).He)({
                        time: Math.round(performance.now() - u),
                        success: !1,
                        workflow_id: s.workflowStore.id,
                        template_id: i
                    })
                }), {
                    workflowStore: s.workflowStore,
                    onComplete: c.promise
                }
            }
        },
        291193: (e, t, a) => {
            a.d(t, {
                M: () => r
            });
            let r = new(a(273917)).U((e, {
                templateSpaceId: t,
                locale: a
            }) => `${t??"local"}:${a}`, async (e, {
                spaceId: t,
                templateSpaceId: a,
                locale: r
            }) => {
                if (!t) return;
                let o = await e.api.callCellCompatibleApi({
                    eventName: "getAgentTemplates",
                    environment: e,
                    data: {
                        spaceId: t,
                        locale: r
                    },
                    cellNavigation: {
                        spaceId: a ? ? t
                    }
                });
                return "success" === o.type ? o.data.templates : void 0
            })
        },
        308884: (e, t, a) => {
            a.d(t, {
                a: () => o
            }), a(296540);
            let r = {
                    viewBox: "0 0 16 16",
                    fittedViewBox: "1.56 2.35 12.87 11.76",
                    svg: (0, a(474848).jsx)("path", {
                        d: "M10.208 2.35a.625.625 0 0 0 0 1.25h1.175v9.25h-1.175a.625.625 0 0 0 0 1.25h3.6a.625.625 0 1 0 0-1.25h-1.175V3.6h1.175a.625.625 0 1 0 0-1.25zm-4.753.885a.92.92 0 0 0-.86.598l-2.99 8.09a.625.625 0 1 0 1.173.434l.87-2.352h3.614l.869 2.352a.625.625 0 1 0 1.172-.434l-2.99-8.09a.92.92 0 0 0-.858-.598M6.8 8.755H4.11l1.345-3.64z"
                    })
                },
                o = (0, a(104509).wt)("textCursorIBeamSmall", r, "small")
        },
        328590: (e, t, a) => {
            a.d(t, {
                b: () => n
            });
            var r = () => a(546605);

            function o() {
                return {
                    currentScreen: "none",
                    onConfirm: void 0,
                    loginHint: void 0,
                    authAction: void 0,
                    from: "agentSetup"
                }
            }
            class i extends r().Store {
                getInitialState() {
                    return o()
                }
                open(e, t) {
                    this.setState({
                        currentScreen: "introduction",
                        onConfirm: e,
                        loginHint: null == t ? void 0 : t.loginHint,
                        authAction: null == t ? void 0 : t.authAction,
                        from: (null == t ? void 0 : t.from) ? ? "agentSetup"
                    })
                }
                close() {
                    this.setState(o())
                }
                setScreen(e) {
                    this.setState({ ...this.state,
                        currentScreen: e
                    })
                }
            }
            let n = new i;
            (0, a(202146).exposeDebugValue)("notionMailAccountRequiredModalStore", n)
        },
        347403: (e, t, a) => {
            function r(e) {
                let {
                    pageId: t,
                    title: a,
                    pageTitleById: r
                } = e;
                return a ? ? (null == r ? void 0 : r[t])
            }

            function o(e) {
                let {
                    option: t,
                    spaceId: r,
                    pageTitleById: o
                } = e;
                return t.parts && t.parts.length > 0 ? function(e) {
                    let {
                        parts: t,
                        spaceId: r,
                        pageTitleById: o
                    } = e;
                    return t.flatMap(e => (function(e) {
                        let {
                            part: t,
                            spaceId: r,
                            pageTitleById: o
                        } = e;
                        return "text" === t.type ? (0, a(247438).x9d)(t.text) : null != o && o[t.pageId] ? [(0, a(247438).wmz)((0, a(247438).ld4)(t.pageId, r))] : (0, a(247438).x9d)(t.title ? ? "page")
                    })({
                        part: e,
                        spaceId: r,
                        pageTitleById: o
                    }))
                }({
                    parts: t.parts,
                    spaceId: r,
                    pageTitleById: o
                }) : t.pageId ? null != o && o[t.pageId] ? [(0, a(247438).wmz)((0, a(247438).ld4)(t.pageId, r))] : (0, a(247438).x9d)(t.label) : (0, a(247438).x9d)(t.label)
            }

            function i(e) {
                let t = new Set;
                for (let a of e)
                    for (let e of a.options)
                        for (let a of (e.pageId && t.add(e.pageId), e.parts ? ? [])) "page" === a.type && t.add(a.pageId);
                return Array.from(t)
            }

            function n(e) {
                let {
                    question: t,
                    optionId: r,
                    spaceId: i,
                    pageTitleById: n
                } = e, l = t.options.find(e => e.id === r);
                return l ? o({
                    option: l,
                    spaceId: i,
                    pageTitleById: n
                }) : (0, a(247438).x9d)(r)
            }

            function l(e) {
                let {
                    question: t,
                    optionId: o,
                    spaceId: i,
                    pageTitleById: n
                } = e, l = t.options.find(e => e.id === o);
                return l ? function(e) {
                    let {
                        option: t,
                        spaceId: o,
                        pageTitleById: i
                    } = e;
                    return t.parts && t.parts.length > 0 ? function(e) {
                        let {
                            parts: t,
                            spaceId: o,
                            pageTitleById: i
                        } = e;
                        return t.flatMap(e => (function(e) {
                            let {
                                part: t,
                                spaceId: o,
                                pageTitleById: i
                            } = e;
                            return "text" === t.type ? (0, a(247438).x9d)(t.text) : [(0, a(247438).Ey_)(r({
                                pageId: t.pageId,
                                title: t.title,
                                pageTitleById: i
                            }) ? ? "page", [(0, a(247438).ld4)(t.pageId, o)])]
                        })({
                            part: e,
                            spaceId: o,
                            pageTitleById: i
                        }))
                    }({
                        parts: t.parts,
                        spaceId: o,
                        pageTitleById: i
                    }) : t.pageId ? [(0, a(247438).Ey_)(r({
                        pageId: t.pageId,
                        pageTitleById: i
                    }) ? ? t.label, [(0, a(247438).ld4)(t.pageId, o)])] : (0, a(247438).x9d)(t.label)
                }({
                    option: l,
                    spaceId: i,
                    pageTitleById: n
                }) : (0, a(247438).x9d)(o)
            }

            function d(e) {
                let {
                    pageIds: t,
                    getTitle: a
                } = e, r = {};
                for (let e of t) {
                    let t = a(e);
                    t && (r[e] = t)
                }
                return r
            }
            a.d(t, {
                HD: () => n,
                av: () => i,
                bZ: () => l,
                oV: () => o,
                qi: () => d
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(898992), a(672577), a(430670)
        },
        366758: (e, t, a) => {
            a.d(t, {
                T: () => i,
                h: () => o
            }), a(16280), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698), a(581454);
            let r = (0, a(109939).YK)({
                createAgentPrompt: {
                    id: "workflow.agent.newAgentModal.createAgentPrompt",
                    defaultMessage: "Create agent using {templateName} template"
                }
            });
            async function o(e) {
                let {
                    environment: t,
                    spaceStore: r,
                    inferenceContext: o,
                    template: n,
                    intl: l,
                    analytics: d,
                    onRequestClose: s
                } = e, c = await (0, a(263672).L)({
                    environment: t,
                    spaceStore: r,
                    templateWorkflowPointer: n.workflowPointer,
                    templateId: n.id,
                    templateTitle: n.title,
                    templateIconUrl: n.iconUrl,
                    addToFavorites: !0
                });
                if (!c) return;
                let {
                    workflowStore: u,
                    onComplete: p
                } = c;
                return await i({
                    environment: t,
                    spaceStore: r,
                    inferenceContext: o,
                    template: n,
                    intl: l,
                    analytics: d,
                    onRequestClose: s,
                    workflowStore: u,
                    onComplete: p
                }), u
            }
            async function i(e) {
                let t, {
                        environment: o,
                        spaceStore: i,
                        inferenceContext: n,
                        template: l,
                        intl: d,
                        analytics: s,
                        onRequestClose: c,
                        workflowStore: u,
                        onComplete: p
                    } = e,
                    f = null != (t = u.getData()) && t.modules && Array.isArray(t.modules) ? [...new Set(t.modules.map(e => e.type))] : [];
                (0, a(599231).qt)({
                    action: "create_new",
                    workflowId: u.id,
                    from: `template:${l.title}`,
                    flowId: s.flowId,
                    origin: s.origin,
                    context: {
                        template_id: l.id,
                        template_title: l.title,
                        template_connections: f,
                        user_has_mail_connected: a(318329).Lf.state.isBackendConnected,
                        user_has_calendar_connected: (0, a(338901).pH)().length > 0
                    }
                }), (0, a(599231).Ql)({
                    workflowId: u.id,
                    creationMethod: "template",
                    sourceWorkflowId: l.workflowPointer.id,
                    templateId: l.id,
                    flowId: s.flowId,
                    origin: s.origin
                });
                try {
                    await p
                } catch (e) {
                    throw e instanceof Error ? e : Error("Failed to duplicate agent")
                }
                if (!n || !n.userStore || !n.spaceViewStore) throw Error("Missing inference context for new agent chat");
                let _ = {
                        userStore: n.userStore,
                        spaceStore: i,
                        spaceViewStore: n.spaceViewStore,
                        blockStore: n.blockStore,
                        peekStore: n.peekStore,
                        workflowStore: u
                    },
                    g = (0, a(599412).H)(d),
                    m = (0, a(950386).e)(l.id),
                    w = (0, a(922900).getWorkflowAgentConfig)({
                        environment: o,
                        spaceId: i.id,
                        isCustomAgent: !0,
                        workflowId: u.id,
                        useCustomAgentDraft: !0
                    }),
                    h = (0, a(722371).Xk)(["update_agent_from_template", "update_agent_template_for_slack_task_triager", "update_agent_template_for_weekly_project_update"], m) ? {
                        type: m,
                        isCustomAgent: !0,
                        enableQueryMail: w.enableQueryMail,
                        enableQueryCalendar: w.enableQueryCalendar
                    } : void 0,
                    k = (0, a(674880).Jv)({
                        environment: o,
                        spaceStore: i,
                        userStore: n.userStore,
                        promptType: m,
                        value: (0, a(247438).x9d)(d.formatMessage(r.createAgentPrompt, {
                            templateName: l.title
                        })),
                        locale: g,
                        args: h
                    }),
                    S = (0, a(674880).Xd)({
                        environment: o,
                        inferenceContext: _,
                        config: w,
                        addSteps: [k],
                        surface: "workflows"
                    }),
                    y = (0, a(225900).N)({
                        environment: o,
                        spaceStore: i,
                        transcript: S,
                        workflowId: u.id,
                        createdSource: "workflows",
                        parentPointer: u.pointer
                    }),
                    I = (0, a(475097).getUrlParamFromPeekMode)(a(387722).A),
                    v = (0, a(453573).YZ)({
                        workflowId: u.id,
                        workflowViewType: "settings",
                        peekModeParam: I,
                        threadId: y.id
                    });
                null == c || c(), (0, a(740744).zM)(), a(57168).defaultClientAIChatStore.setState({ ...a(57168).defaultClientAIChatStore.state,
                    navigateToLoadedWorkflowStore: u
                }), (0, a(79266).navigate)({
                    environment: o,
                    url: v
                })
            }
        },
        455764: (e, t, a) => {
            a.d(t, {
                T: () => r
            }), a(16280), a(581454);

            function r(e) {
                let {
                    environment: t,
                    clientStore: r,
                    userStore: o,
                    spaceStore: i,
                    threadStore: n,
                    addSteps: l,
                    waitForServerCommit: d,
                    sendPartialTranscript: s,
                    sendPatchResponse: c,
                    analyticsArgs: u
                } = e, p = n, {
                    serverCommitResult: f
                } = (0, a(377796).createAndCommit)({
                    userAction: "WorkflowActions.addStepsToExistingThreadAndRun",
                    environment: t,
                    canUndo: !0,
                    cellTarget: {
                        spaceWithId: i.id
                    },
                    perform: e => {
                        p = function(e) {
                            let {
                                threadStore: t,
                                environment: r,
                                spaceStore: o,
                                userStore: i,
                                transaction: n
                            } = e;
                            return t.isDefined() ? t : (a(773352).log({
                                level: "info",
                                from: "workflowActions",
                                type: "ensureThreadStoreIsMaterialized",
                                data: {
                                    threadId: t.id,
                                    spaceId: o.id,
                                    miscDataToConvertToString: {
                                        threadType: t.getType()
                                    }
                                },
                                error: {
                                    stack: Error("ThreadStore not defined before append").stack
                                }
                            }), (0, a(757688).aP)({
                                environment: r,
                                spaceStore: o,
                                userStore: i,
                                transaction: n,
                                threadId: t.id,
                                threadType: t.getType()
                            }))
                        }({
                            threadStore: p,
                            environment: t,
                            spaceStore: i,
                            userStore: o,
                            transaction: e
                        }), (0, a(757688).Vn)({
                            threadStore: p,
                            environment: t,
                            spaceStore: i,
                            userStore: o,
                            addSteps: l,
                            transaction: e
                        })
                    }
                });
                return (0, a(757688).WE)({
                    environment: t,
                    clientStore: r,
                    threadStore: p,
                    waitBeforeSending: d ? f : void 0,
                    stepIdsToInclude: s ? l.map(e => e.id) : void 0,
                    sendPatchResponse: c,
                    analyticsArgs: u
                }), p
            }
        },
        516795: (e, t, a) => {
            a.d(t, {
                B: () => r,
                E: () => o
            });
            let r = (0, a(109939).YK)({
                    defaultAskMessage: {
                        id: "AIChatInput.placeholder.defaultAsk",
                        defaultMessage: "Ask {modelName}…"
                    }
                }),
                o = (0, a(109939).YK)({
                    chatWithoutModel: {
                        id: "aiInferenceTranscript.contextStep.chatWithoutModel",
                        defaultMessage: "Chat"
                    },
                    search: {
                        id: "aiInferenceTranscript.contextStep.search",
                        defaultMessage: "Notion AI"
                    },
                    researcher: {
                        id: "aiInferenceTranscript.contextStep.researcher",
                        defaultMessage: "Research"
                    }
                })
        },
        703465: (e, t, a) => {
            a.d(t, {
                k: () => n
            }), a(16280);
            var r = () => a(773352),
                o = () => a(300441);
            let i = (0, a(477465).Dv)("duplicateAgent");
            async function n(e) {
                let {
                    environment: t,
                    sourceWorkflowPointer: n,
                    targetWorkflowId: l,
                    spaceId: d,
                    deferred: s
                } = e;
                (0, a(963580).Ur)(l);
                try {
                    for await (let e of (0, a(259242).UT)({
                        environment: t,
                        eventName: i,
                        request: {
                            workflowPointer: n,
                            targetSpaceId: d,
                            targetWorkflowId: l,
                            addToFavorites: !1
                        },
                        multiCellRouting: {
                            spaceIds: [n.spaceId, d]
                        }
                    })) {
                        if (o().Q.isFail(e)) {
                            let t = e.error ? ? Error("Failed to duplicate agent");
                            r().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: l,
                                    miscDataToConvertToString: {
                                        error: t instanceof Error ? t.message : String(t)
                                    }
                                }
                            }), s.reject(t);
                            return
                        }
                        if ("success" === e.value.status) return void s.resolve();
                        if ("failure" === e.value.status) {
                            let t = Error(e.value.error ? ? "Failed to duplicate agent");
                            r().log({
                                level: "warning",
                                from: "duplicateAgentInBackground",
                                type: "optimisticDuplicationFailed",
                                data: {
                                    workflowId: l,
                                    miscDataToConvertToString: {
                                        error: t.message
                                    }
                                }
                            }), s.reject(t);
                            return
                        }
                    }
                    let e = Error("Task completed without success status");
                    s.reject(e)
                } finally {
                    (0, a(963580).Lr)(l)
                }
            }
        },
        882707: (e, t, a) => {
            a.d(t, {
                t: () => r
            });
            async function r(e) {
                let {
                    environment: t,
                    spaceId: r,
                    onAuthSuccess: o,
                    analyticsProperties: i,
                    connector: n
                } = e, {
                    buttonName: l
                } = i, d = a(399077).NT[n].state;
                (0, a(104310).u)({
                    event: {
                        eventName: "universal_qna_button_click",
                        eventProperties: {
                            button_name: l,
                            integration_type: n,
                            setup_session_id: d.sessionId,
                            from: i.analyticsFrom ? ? d.analyticsFrom
                        }
                    }
                });
                let s = (0, a(600923).K)(n);
                await s.authenticate({
                    environment: t,
                    spaceId: r,
                    onAuthSuccess: o
                })
            }
        },
        913638: (e, t, a) => {
            a.d(t, {
                F: () => n
            }), a(296540);
            var r = a(474848);
            let o = {
                    initial: {
                        opacity: 0,
                        scale: .5,
                        y: 8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        y: 0,
                        transition: {
                            scale: {
                                type: "spring",
                                visualDuration: .2
                            },
                            y: {
                                type: "spring",
                                visualDuration: .2
                            },
                            opacity: {
                                type: "spring",
                                visualDuration: .2
                            }
                        }
                    },
                    exit: {
                        opacity: 0,
                        scale: .5,
                        y: 0,
                        transition: {
                            scale: {
                                duration: .4,
                                ease: [.36, 0, .66, -.56]
                            },
                            y: {
                                duration: .4,
                                ease: [.36, 0, .66, -.56]
                            },
                            opacity: {
                                duration: .4,
                                ease: [.36, 0, .66, -.56]
                            }
                        }
                    }
                },
                i = {
                    face: {
                        position: "absolute",
                        borderRadius: "100%",
                        overflow: "hidden",
                        pointerEvents: "none",
                        width: 32,
                        height: 32,
                        insetInlineStart: -40,
                        transition: "top 300ms cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: `0px 0px 0px 1px ${a(632079).Tj.border.secondary}, 0 1px 3px color-mix(in srgb, ${a(632079).Tj.shadowColor} 6%, transparent)`
                    }
                };

            function n(e) {
                let {
                    top: t,
                    marginTop: n,
                    highLevelState: l
                } = e;
                return (0, r.jsx)(a(153321).P.div, {
                    "aria-hidden": !0,
                    variants: o,
                    initial: "initial",
                    animate: "animate",
                    exit: "exit",
                    style: { ...i.face,
                        marginTop: n,
                        top: t
                    },
                    children: (0, r.jsx)(a(514984).k, {
                        sizeVariant: "small_plus",
                        highLevelState: l,
                        includeBoxShadow: !1,
                        transitionMode: "idle_handoff"
                    })
                })
            }
        },
        950386: (e, t, a) => {
            a.d(t, {
                R: () => i,
                e: () => o
            });
            let r = ["search", "summarize_current_projects", "draft_project_plan", "plan_a_trip", "summarize", "translate", "add_action_items", "brainstorm_ideas", "make_more_concise", "create_task_tracker", "write_meeting_agenda", "analyze_page_for_insights", "summarize_discussions", "analyze_database_for_insights", "visualize_with_a_chart", "filter_and_sort_data", "help_me_set_up_this_database", "generate_sample_rows", "whats_new_in_agent", "create_custom_agent_from_modal", "create_custom_agent_from_marketplace", "add_emoji_trigger_to_slack", "schedule_recurring_report", "help_me_update_instructions", "create_custom_agent", "create_database_agent", "help_create_database_agent_with_ai", "translate_database_agent", "summarize_database_agent", "generate_select_options", "update_custom_agent_with_memories", "test_custom_agent", "fix_custom_agent", "improve_custom_agent", "create_custom_agent_from_follow_up", "create_custom_agent_blank", "update_agent_from_template", "update_agent_template_for_slack_task_triager", "update_agent_template_for_weekly_project_update", "improve_writing", "fix_spelling_grammar", "explain_this", "continue_writing", "make_shorter", "add_summary", "reformat", "create_daily_brief", "inbox_zero", "generate_image_prompt", "create_diagram_based_on_page", "image_generation_mode", "ask_ai"];

            function o(e) {
                switch (e) {
                    case "slack-task-triager":
                        return "update_agent_template_for_slack_task_triager";
                    case "weekly-project-update":
                        return "update_agent_template_for_weekly_project_update";
                    default:
                        return "update_agent_from_template"
                }
            }

            function i(e) {
                return !!(0, a(722371).Xk)(r, e)
            }
        },
        963580: (e, t, a) => {
            a.d(t, {
                Lr: () => l,
                PM: () => i,
                Ur: () => n
            }), a(517642), a(658004), a(733853), a(845876), a(432475), a(515024), a(731698);
            var r = () => a(546605);
            class o extends r().Store {
                getInitialState() {
                    return {
                        duplicatingWorkflowIds: new Set,
                        isDuplicating: !1
                    }
                }
            }
            let i = new o;

            function n(e) {
                i.update(t => {
                    let a = new Set(t.duplicatingWorkflowIds);
                    return a.add(e), {
                        duplicatingWorkflowIds: a,
                        isDuplicating: a.size > 0
                    }
                })
            }

            function l(e) {
                i.update(t => {
                    if (!t.duplicatingWorkflowIds.has(e)) return t;
                    let a = new Set(t.duplicatingWorkflowIds);
                    return a.delete(e), {
                        duplicatingWorkflowIds: a,
                        isDuplicating: a.size > 0
                    }
                })
            }
        }
    }
]);